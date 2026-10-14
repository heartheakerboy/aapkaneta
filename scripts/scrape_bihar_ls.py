#!/usr/bin/env python3
"""Scrape 40 Bihar Lok Sabha MPs (2024) from myneta.info/LokSabha2024/.
PC ids are parsed from the BIHAR section of the index page (not hardcoded).
Output: .myneta-cache/bihar_ls/bihar_ls.json
Pattern copied from scripts/scrape_mp_ls.py."""
import json
import os
import re
import time
import urllib.request

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "bihar_ls")
os.makedirs(CACHE, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}


def get(url, cache_name):
    p = os.path.join(CACHE, cache_name)
    if os.path.exists(p) and os.path.getsize(p) > 1000:
        return open(p, encoding="utf-8", errors="replace").read()
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=30) as r:
                data = r.read()
            try:
                import gzip
                data = gzip.decompress(data)
            except Exception:
                pass
            html = data.decode("utf-8", errors="replace")
            open(p, "w", encoding="utf-8").write(html)
            time.sleep(1.2)
            return html
        except Exception as e:
            print("  retry", cache_name, type(e).__name__)
            time.sleep(3)
    raise RuntimeError("failed: " + url)


def clean_money(cell):
    t = re.sub(r"&nbsp;?", " ", cell)
    t = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", t)).strip()
    if re.search(r"\bnil\b", t, re.I):
        return "Nil"
    t = t.split("~")[0].strip()
    t = re.sub(r"^Rs\s*", "", t).strip()
    return ("Rs " + t) if t and t != "0" else None


def load_pcs():
    """Parse BIHAR section of the LokSabha2024 index for constituency ids."""
    html = get("https://myneta.info/LokSabha2024/", "index.html")
    m = re.search(r"BIHAR\s*<span", html)
    if not m:
        raise RuntimeError("BIHAR section not found in index")
    start = m.start()
    nxt = html.find("<div class='w3-third w3-border-bottom'>", start + 10)
    seg = html[start:nxt if nxt != -1 else len(html)]
    pcs = {}
    for cid, name in re.findall(r"constituency_id=(\d+)[^>]*>([^<]+)</a>", seg):
        name = name.strip()
        if name and cid not in pcs:
            pcs[cid] = name
    return pcs


PCS = load_pcs()
print("PCs parsed from index:", len(PCS))
if len(PCS) != 40:
    print("WARNING: expected 40 PCs, got", len(PCS))


def candidate_money(cand_id):
    """Fetch candidate page and read the 'Assets & Liabilities' summary table.
    Falls back to (None, None) when the table is absent."""
    html = get(f"https://myneta.info/LokSabha2024/candidate.php?candidate_id={cand_id}",
               f"ls-mp-candpage-{cand_id}.html")
    m = re.search(r"Assets & Liabilities\s*</h3>.*?<td>\s*Assets:\s*</td>\s*<td[^>]*>(.*?)</td>.*?<td>\s*Liabilities:\s*</td>\s*<td[^>]*>(.*?)</td>",
                  html, re.S)
    if not m:
        return None, None
    return clean_money(m.group(1)), clean_money(m.group(2))


results, failed = [], []
for cid, craw in PCS.items():
    try:
        html = get(f"https://myneta.info/LokSabha2024/index.php?action=show_candidates&constituency_id={cid}",
                   f"ls-mp-cand-{cid}.html")
        wm = re.search(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a><b>&nbsp;?\s*&nbsp;?<font[^>]*>\s*Winner", html)
        if not wm:
            wm = re.search(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a>(.{0,120}?)Winner", html, re.S)
            if not wm:
                failed.append((cid, craw, "no winner")); continue
        cand_id, name = wm.group(1), wm.group(2).strip()
        tstart = html.rfind("<tr>", 0, wm.start()); tend = html.find("</tr>", wm.end())
        cells = re.findall(r"<td[^>]*>(.*?)</td>", html[tstart:tend], re.S)

        def tx(c):
            return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", c)).strip()

        party = tx(cells[2]) if len(cells) > 2 else ""
        crm = re.search(r"(\d+)", tx(cells[3])) if len(cells) > 3 else None
        criminal = int(crm.group(1)) if crm else 0
        edu = tx(cells[4]) if len(cells) > 4 else ""
        agem = re.search(r"(\d+)", tx(cells[5])) if len(cells) > 5 else None
        age = agem.group(1) if agem else ""
        assets_row = clean_money(cells[6]) if len(cells) > 6 else None
        liab_row = clean_money(cells[7]) if len(cells) > 7 else None
        try:
            assets_c, liab_c = candidate_money(cand_id)
        except Exception:
            assets_c, liab_c = None, None
        results.append({
            "myneta_const_id": cid, "constituency_raw": craw,
            "candidate_id": cand_id, "name": name, "party_short": party,
            "age": age, "education": edu, "criminal": criminal,
            "assets": assets_c or assets_row,
            "liabilities": liab_c or liab_row,
            "myneta_url": f"https://myneta.info/LokSabha2024/candidate.php?candidate_id={cand_id}",
        })
        print(f"  OK {name} ({party}) <- {craw} [assets={assets_c or assets_row}]")
    except Exception as e:
        failed.append((cid, craw, str(e)[:80]))

out = os.path.join(CACHE, "bihar_ls.json")
json.dump(results, open(out, "w"), ensure_ascii=False, indent=1)
print("DONE. MPs:", len(results), "failed:", len(failed))
for f in failed:
    print("  FAIL:", f)

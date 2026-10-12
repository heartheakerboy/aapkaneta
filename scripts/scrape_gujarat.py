#!/usr/bin/env python3
"""Scrape all 182 Gujarat MLAs from myneta.info/Gujarat2022.
Output: .myneta-cache/gujarat/gujarat.json
Be polite: ~1.2s delay between requests."""
import json
import os
import re
import time
import urllib.request

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "gujarat")
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

def norm(s):
    s = s.upper()
    s = re.sub(r"\s*\(S[CT]\)\s*", "", s)
    return re.sub(r"\s+", " ", s).strip()

# ---- 1. AC list (number, name, reservation, district) from Wikipedia parse ----
aclist = json.load(open(os.path.join(CACHE, "ac-list.json")))
ac_by_norm = {norm(a["name"]): a for a in aclist}
print("AC list:", len(aclist))

# ---- 2. myneta index: constituency_id per district ----
h = open(os.path.join(CACHE, "index.html"), encoding="utf-8").read()
consts = []  # (const_id, const_raw)
heads = [(m.start(), m.group(1).strip()) for m in re.finditer(r"handle_dropdown\('item', '\d+'\)\">\s*([A-Z][A-Z .()\-&]+?)\s*<", h)]
for hi, (pos, district) in enumerate(heads):
    end = heads[hi + 1][0] if hi + 1 < len(heads) else pos + 30000
    seg = h[pos:end]
    for cm in re.finditer(r"constituency_id=(\d+)[^>]*>([^<]+)</a>", seg):
        cid, cname = cm.group(1), cm.group(2).strip()
        if "ALL CONSTITUENCIES" in cname:
            continue
        consts.append((cid, cname, district))
print("constituencies:", len(consts), "districts:", len(heads))

# ---- 3. per constituency: winner + affidavit summary ----
results = []
failed = []
unmatched = []
for i, (cid, craw, district) in enumerate(consts):
    try:
        url = f"https://myneta.info/Gujarat2022/index.php?action=show_candidates&constituency_id={cid}"
        html = get(url, f"cand-{cid}.html")
        m = re.search(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a><b>&nbsp;?\s*&nbsp;?<font[^>]*>\s*Winner", html)
        if not m:
            failed.append((cid, craw, "no winner marker"))
            continue
        cand_id, name = m.group(1), m.group(2).strip()
        tstart = html.rfind("<tr>", 0, m.start())
        tend = html.find("</tr>", m.end())
        row = html[tstart:tend]
        cells = [re.sub(r"<[^>]+>", " ", c) for c in re.findall(r"<td[^>]*>(.*?)</td>", row, re.S)]
        cells = [re.sub(r"\s+", " ", c).strip() for c in cells]
        party = cells[2] if len(cells) > 2 else ""
        crim_m = re.search(r"(\d+)", cells[3]) if len(cells) > 3 else None
        criminal = int(crim_m.group(1)) if crim_m else 0
        edu = cells[4] if len(cells) > 4 else ""
        age = re.search(r"(\d+)", cells[5]).group(1) if len(cells) > 5 and re.search(r"(\d+)", cells[5]) else ""
        # assets/liabilities from winner candidate page (text)
        whtml = get(f"https://myneta.info/Gujarat2022/candidate.php?candidate_id={cand_id}", f"winner-{cand_id}.html")
        am = re.search(r"Assets:\s*</td><td>\s*<b>Rs&nbsp;([0-9,]+)</b>", whtml)
        lm = re.search(r"Liabilities:\s*</td><td>\s*<b>Rs&nbsp;([0-9,]+)</b>", whtml)
        assets = ("Rs " + am.group(1)) if am else None
        liab = ("Rs " + lm.group(1)) if lm else None
        ac = ac_by_norm.get(norm(craw))
        if not ac:
            unmatched.append((cid, craw))
        results.append({
            "myneta_const_id": cid, "constituency_raw": craw,
            "constituency": ac["name"] if ac else craw.title(),
            "number": ac["number"] if ac else None,
            "district": ac["district"] if ac else district.title(),
            "reservation": ac["reservation"] if ac else "None",
            "ls": ac["ls"] if ac else "",
            "candidate_id": cand_id, "name": name, "party_short": party,
            "age": age, "education": edu, "criminal": criminal,
            "assets": assets, "liabilities": liab,
        })
    except Exception as e:
        failed.append((cid, craw, str(e)[:100]))
    if (i + 1) % 30 == 0:
        print(f"  {i+1}/{len(consts)} done, failed: {len(failed)}")

json.dump(results, open(os.path.join(CACHE, "gujarat.json"), "w"), ensure_ascii=False, indent=1)
print("DONE. winners:", len(results), "failed:", len(failed), "unmatched:", len(unmatched))
for f in failed[:15]:
    print("  FAIL:", f)
for u in unmatched[:15]:
    print("  UNMATCHED:", u)

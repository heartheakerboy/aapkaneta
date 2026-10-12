#!/usr/bin/env python3
"""Scrape 48 Maharashtra MPs from myneta.info/LokSabha2024/.
Output: .myneta-cache/mp.json"""
import json
import os
import re
import time
import urllib.request

CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".myneta-cache")
os.makedirs(CACHE, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}

def get(url, cache_name):
    p = os.path.join(CACHE, cache_name)
    if os.path.exists(p) and os.path.getsize(p) > 1000:
        return open(p, encoding="utf-8", errors="replace").read()
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

# index -> Maharashtra constituencies
idx = get("https://myneta.info/LokSabha2024/", "ls-index.html")
buttons = [(m.start(), m.group(1).strip()) for m in
           re.finditer(r">\s*([A-Z][A-Z &]+?)\s*<span class='w3-right'>", idx)]
maha = [b for b in buttons if b[1] == "MAHARASHTRA"][0]
mi = buttons.index(maha)
end = buttons[mi + 1][0] if mi + 1 < len(buttons) else len(idx)
seg = idx[maha[0]:end]
consts = []
for cm in re.finditer(r"constituency_id=(\d+)[^>]*>([^<]+)</a>", seg):
    cid, craw = cm.group(1), cm.group(2).strip()
    if "ALL CONSTITUENCIES" in craw or cid in [c[0] for c in consts]:
        continue
    consts.append((cid, craw))
print("Maharashtra LS constituencies:", len(consts))

def clean_money(cell):
    t = re.sub(r"&nbsp;?", " ", cell)
    t = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", t)).strip()
    if re.search(r"\bnil\b", t, re.I):
        return "Nil"
    t = t.split("~")[0].strip()
    t = re.sub(r"^Rs\s*", "", t).strip()
    return ("Rs " + t) if t and t != "0" else None

results, failed = [], []
for i, (cid, craw) in enumerate(consts):
    try:
        html = get(f"https://myneta.info/LokSabha2024/index.php?action=show_candidates&constituency_id={cid}",
                   f"ls-cand-{cid}.html")
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
        results.append({
            "myneta_const_id": cid, "constituency_raw": craw,
            "candidate_id": cand_id, "name": name, "party_short": party,
            "age": age, "education": edu, "criminal": criminal,
            "assets": clean_money(cells[6]) if len(cells) > 6 else None,
            "liabilities": clean_money(cells[7]) if len(cells) > 7 else None,
        })
    except Exception as e:
        failed.append((cid, craw, str(e)[:80]))
    if (i + 1) % 12 == 0:
        print(f"  {i+1}/{len(consts)} done")

json.dump(results, open(os.path.join(CACHE, "mp.json"), "w"), ensure_ascii=False, indent=1)
print("DONE. MPs:", len(results), "failed:", len(failed))
for f in failed:
    print("  FAIL:", f)

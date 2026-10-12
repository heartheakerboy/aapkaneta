#!/usr/bin/env python3
"""Scrape all 288 Maharashtra MLAs from myneta.info + oneindia winners list.
Output: .myneta-cache/mha.json  (then gen_mha_ts.py builds maharashtra.ts)
Be polite: ~1.2s delay between requests."""
import json
import os
import re
import time
import urllib.request

CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".myneta-cache")
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}

def get(url, cache_name):
    p = os.path.join(CACHE, cache_name)
    if os.path.exists(p) and os.path.getsize(p) > 1000:
        return open(p, encoding="utf-8", errors="replace").read()
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    # try gzip
    try:
        import gzip
        data = gzip.decompress(data)
    except Exception:
        pass
    html = data.decode("utf-8", errors="replace")
    open(p, "w", encoding="utf-8").write(html)
    time.sleep(1.2)
    return html

def norm(s):
    s = s.upper()
    s = re.sub(r"\s*\(S[CT]\)\s*", "", s)
    return re.sub(r"\s+", " ", s).strip()

# ---- 1. oneindia winners: number + display name ----
print("parsing oneindia winners...")
h = open("/tmp/mha-mlas.html", encoding="utf-8", errors="replace").read()
rows = re.findall(r"<tr[^>]*>(.*?)</tr>", h, re.S)
winners = {}  # norm_const -> (number, display_name, party, votes, share)
for r in rows:
    cells = [re.sub(r"<[^>]+>", "", c).strip() for c in re.findall(r"<td[^>]*>(.*?)</td>", r, re.S)]
    if len(cells) >= 5 and re.match(r"\d+\s*[–-]", cells[2]):
        m = re.match(r"(\d+)\s*[–-]\s*(.+)", cells[2])
        num, cname = int(m.group(1)), m.group(2).strip()
        winners[norm(cname)] = (num, cname, cells[1], cells[3], cells[4])
print("winners parsed:", len(winners))

# ---- 2. myneta index: district + constituency_id ----
print("parsing myneta index...")
h = open(os.path.join(CACHE, "index.html"), encoding="utf-8").read()
consts = []  # (const_id, const_raw, district)
for m in re.finditer(r">\s*([A-Z][A-Z ]+?)\s*<span class='w3-right'>", h):
    district = m.group(1).strip()
    seg = h[m.end():m.end() + 6000]
    seg = seg[: seg.find("handle_dropdown") if "handle_dropdown" in seg[:6000] else 6000]
    for cm in re.finditer(r"constituency_id=(\d+)[^>]*>([^<]+)</a>", seg):
        cid, cname = cm.group(1), cm.group(2).strip()
        if "ALL CONSTITUENCIES" in cname:
            continue
        consts.append((cid, cname, district.title()))
print("constituencies:", len(consts))

# ---- 3. per constituency: winner row ----
results = []
failed = []
for i, (cid, craw, district) in enumerate(consts):
    try:
        url = f"https://myneta.info/Maharashtra2024/index.php?action=show_candidates&constituency_id={cid}"
        html = get(url, f"cand-{cid}.html")
        # winner row: <a href=candidate.php?candidate_id=N>Name</a><b>.. Winner
        m = re.search(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a><b>&nbsp;?\s*&nbsp;?<font[^>]*>\s*Winner", html)
        if not m:
            failed.append((cid, craw, "no winner marker"))
            continue
        cand_id, name = m.group(1), m.group(2).strip()
        # the <tr> containing it
        tstart = html.rfind("<tr>", 0, m.start())
        tend = html.find("</tr>", m.end())
        row = html[tstart:tend]
        cells = [re.sub(r"<[^>]+>", " ", c) for c in re.findall(r"<td[^>]*>(.*?)</td>", row, re.S)]
        cells = [re.sub(r"\s+", " ", c).strip() for c in cells]
        # cells: [sno, name+Winner, party, criminal, education, age, assets, liabilities]
        def clean_money(s):
            s = s.replace("Rs", "").strip()
            return s if s and s.lower() != "nil" else ("Nil" if "nil" in s.lower() else None)
        party = cells[2] if len(cells) > 2 else ""
        crim_m = re.search(r"(\d+)", cells[3]) if len(cells) > 3 else None
        criminal = int(crim_m.group(1)) if crim_m else 0
        edu = cells[4] if len(cells) > 4 else ""
        age = re.search(r"(\d+)", cells[5]).group(1) if len(cells) > 5 and re.search(r"(\d+)", cells[5]) else ""
        assets = clean_money(cells[6]) if len(cells) > 6 else None
        liab = clean_money(cells[7]) if len(cells) > 7 else None
        key = norm(craw)
        num, disp = winners.get(key, (None, craw.title()))[:2]
        results.append({
            "myneta_const_id": cid, "constituency_raw": craw, "constituency": disp,
            "number": num, "district": district,
            "candidate_id": cand_id, "name": name, "party_short": party,
            "age": age, "education": edu, "criminal": criminal,
            "assets": ("Rs " + assets) if assets and assets != "Nil" else assets,
            "liabilities": ("Rs " + liab) if liab and liab not in ("Nil", None) else liab,
        })
    except Exception as e:
        failed.append((cid, craw, str(e)[:100]))
    if (i + 1) % 40 == 0:
        print(f"  {i+1}/{len(consts)} done, failed: {len(failed)}")

json.dump(results, open(os.path.join(CACHE, "mha.json"), "w"), ensure_ascii=False, indent=1)
print("DONE. winners:", len(results), "failed:", len(failed))
for f in failed[:15]:
    print("  FAIL:", f)

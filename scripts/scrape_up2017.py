#!/usr/bin/env python3
"""Scrape UP 2017 affidavits from myneta.info, match to 2022 winners.
Output: .myneta-cache/up2017/match-report.json + src/data/prev_up.ts
Strict rule: same AC + exact name + age gap 3-7. NO cross-AC fallback.
Be polite: ~1.2s delay between requests."""
import json
import os
import re
import time
import urllib.request
import gzip

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, "..", ".myneta-cache", "up2017")
os.makedirs(CACHE, exist_ok=True)
BASE = "https://myneta.info/uttarpradesh2017"
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}

def get(url, cache_name):
    p = os.path.join(CACHE, cache_name)
    if os.path.exists(p) and os.path.getsize(p) > 1000:
        return open(p, encoding="utf-8", errors="replace").read()
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    try:
        data = gzip.decompress(data)
    except Exception:
        pass
    html = data.decode("utf-8", errors="replace")
    open(p, "w", encoding="utf-8").write(html)
    time.sleep(1.2)
    return html

TITLES = {"SHRI", "SMT", "SHRIMATI", "DR", "ADV", "ADVOCATE", "LATE", "CAPT", "CAPTAIN",
          "COL", "COLONEL", "MAJ", "MAJOR", "ER", "ENGINEER", "SOW", "SHREEMATI", "KUMARI",
          "BHAI", "BHAISHRI"}

def norm_name(s):
    s = s.upper()
    s = s.replace(".", " ")
    s = re.sub(r"\s*\([^)]*\)", " ", s)
    toks = [t for t in re.split(r"\s+", s.strip()) if t and t not in TITLES]
    return " ".join(toks)

def norm_ac(s):
    s = s.upper()
    s = re.sub(r"\s*\([^)]*\)", "", s)
    s = s.replace(".", "").replace("-", " ")
    s = re.sub(r"\s+", " ", s).strip()
    return s

def money_num(s):
    if not s:
        return 0
    d = re.sub(r"\D", "", s)
    return int(d) if d else 0

# ---- 1. 2017 index: ACs ----
print("parsing 2017 index...")
h = get(BASE + "/", "index.html")
ac_map = {}  # norm_ac_name -> (const_id, raw_name, district)
btns = list(re.finditer(r"<button[^>]*>(.*?)</button>", h, re.S))
for bi, bm in enumerate(btns):
    district = re.sub(r"<[^>]+>", "", bm.group(1)).strip().title()
    seg_end = btns[bi + 1].start() if bi + 1 < len(btns) else len(h)
    seg = h[bm.end():seg_end]
    for cm in re.finditer(r"constituency_id=(\d+)[^>]*>([^<]+)</a>", seg):
        cid, cname = cm.group(1), cm.group(2).strip()
        if "BYE ELECTION" in cname.upper() or "ALL CONSTITUENCIES" in cname.upper():
            continue
        ac_map[norm_ac(cname)] = (cid, cname.strip().title(), district)
print("2017 ACs:", len(ac_map), "| districts:", len(btns))

# 2022 ke kuch AC naam 2017 me alag spelling me hain (verified manually)
AC_ALIAS = {
    "BAGPAT": "BAGHPAT",
    "BAHRAICH": "BAHARAICH",
    "BANGARMAU": "BANGERMAU",
    "DHAULANA": "DHOLANA",
    "GHAZIPUR SADAR": "GHAZIPUR",
    "GOVIND NAGAR": "GOVINDNAGAR",
    "KANPUR CANTONMENT": "KANPUR CANTT",
    "LUCKNOW CANTONMENT": "LUCKNOW CANTT",
    "MADHOGARH": "MADHAUGARH",
    "MAHMOODABAD": "MOHMOODABAD",
    "MODINAGAR": "MODI NAGAR",
    "MUZAFFARNAGAR": "MUZAFFAR NAGAR",
    "PANIYARA": "PANIYRA",
    "PRAYAGRAJ NORTH": "ALLAHABAD NORTH",
    "PRAYAGRAJ SOUTH": "ALLAHABAD SOUTH",
    "PRAYAGRAJ WEST": "ALLAHABAD WEST",
    "VISHWANATHGANJ": "VISHWANATH GANJ",
}

def ac_key(constituency):
    return AC_ALIAS.get(norm_ac(constituency), norm_ac(constituency))

# ---- 2. 2022 winners from uttar_pradesh.ts ----
txt = open(os.path.join(HERE, "..", "src", "data", "uttar_pradesh.ts"), encoding="utf-8").read()
winners = []
for m in re.finditer(
        r"slug: '([^']+)',\n    name: '([^']+)',\n    party: '[^']*',\n    partyShort: '[^']*',\n    post: 'MLA',",
        txt):
    slug, name = m.group(1), m.group(2)
    cm = re.search(r"slug: '%s'.*?constituency: '([^']+)'," % re.escape(slug), txt, re.S)
    cslugm = re.search(r"slug: '%s'.*?constituencySlug: '([^']+)'," % re.escape(slug), txt, re.S)
    winners.append({"slug": slug, "name": name,
                    "constituency": cm.group(1) if cm else "",
                    "cslug": cslugm.group(1) if cslugm else ""})
print("2022 MLAs:", len(winners))

# ---- 3. per AC: fetch list, exact match ----
def parse_list(html):
    cands = []
    for m in re.finditer(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a>", html):
        cid_, name = m.group(1), m.group(2).strip()
        cands.append({"cand_id": cid_, "name": name})
    return cands

matched = []
unmatched = []
ac_lists = {}
for i, w in enumerate(winners):
    key = ac_key(w["constituency"])
    if key not in ac_map:
        unmatched.append((w["slug"], w["name"], w["cslug"], "2017 AC mapping nahi mila: " + w["constituency"]))
        continue
    cid, craw, district = ac_map[key]
    if key not in ac_lists:
        try:
            html = get(f"{BASE}/index.php?action=show_candidates&constituency_id={cid}", f"list-{cid}.html")
            ac_lists[key] = parse_list(html)
        except Exception as e:
            unmatched.append((w["slug"], w["name"], w["cslug"], f"2017 list fetch fail: {str(e)[:60]}"))
            continue
    if (i + 1) % 60 == 0:
        print(f"  lists {i+1}/{len(winners)}")
print("lists cached:", len(ac_lists))

def near_miss(n2017_list, target):
    tt = target.split()
    out = []
    for c in n2017_list:
        ct = norm_name(c["name"]).split()
        if tt and ct and tt[0] == ct[0] and tt[-1] == ct[-1] and norm_name(c["name"]) != target:
            out.append(c["name"])
    return out

for w in winners:
    key = ac_key(w["constituency"])
    if key not in ac_lists:
        continue
    target = norm_name(w["name"])
    hit = None
    for c in ac_lists[key]:
        if norm_name(c["name"]) == target:
            hit = c
            break
    if hit:
        matched.append((w, hit, ac_map[key]))
        continue
    # Cross-AC fallback nahi — strict rule: same AC + exact name hi match hai.
    nm = near_miss(ac_lists[key], target)
    if nm:
        unmatched.append((w["slug"], w["name"], w["cslug"],
                          "naam variation? 2017 me: " + "; ".join(nm[:3]) + " — manual review"))
    else:
        unmatched.append((w["slug"], w["name"], w["cslug"], "2017 me is kshetra se ummidwar nahi the"))

print("matched (exact):", len(matched), "unmatched:", len(unmatched))

# ---- 4. candidate pages ----
def parse_candidate(html):
    out = {}
    m = re.search(r"<b>Age:</b>\s*(\d+)", html)
    out["age"] = m.group(1) if m else ""
    m = re.search(r"Category:\s*([^<]+?)\s*<br>", html)
    out["education"] = m.group(1).strip() if m else ""
    m = re.search(r"Criminal Cases:\s*<span[^>]*>(\d+)</span>", html)
    out["criminalCases"] = int(m.group(1)) if m else 0
    m = re.search(r"<td>\s*Assets:\s*</td>\s*<td>\s*<b>Rs(?:&nbsp;|\s)*([\d,]+)</b>", html)
    out["assets"] = "Rs " + m.group(1) if m else "Rs 0"
    m = re.search(r"<td>\s*Liabilities:\s*</td>\s*<td>\s*<b>Rs(?:&nbsp;|\s)*([\d,]+)</b>", html)
    out["liabilities"] = "Rs " + m.group(1) if m else "Rs 0"
    return out

# 2022 ages for sanity check (age should be ~5 years higher)
w2022age = {}
for m in re.finditer(r"slug: '([^']+)',\n    name: '[^']+',\n    party: '[^']*',\n    partyShort: '[^']*',\n    post: 'MLA',.*?background: \{\n      age: '(\d+)'", txt, re.S):
    w2022age[m.group(1)] = int(m.group(2))

records = {}
parse_fails = []
for i, (w, hit, acinfo) in enumerate(matched):
    cid_ = hit["cand_id"]
    try:
        html = get(f"{BASE}/candidate.php?candidate_id={cid_}", f"cand-{cid_}.html")
        d = parse_candidate(html)
        tm = re.search(r"<title>([^<\(]+)", html)
        if tm and norm_name(tm.group(1)) != norm_name(w["name"]):
            parse_fails.append((w["slug"], w["name"], "page title mismatch: " + tm.group(1)[:50]))
            continue
        # age sanity: 2017 age + 5 should be within +-2 of 2022 age
        if d["age"] and w["slug"] in w2022age:
            gap = w2022age[w["slug"]] - int(d["age"])
            if not (3 <= gap <= 7):
                parse_fails.append((w["slug"], w["name"], f"age gap {gap} — doubtful, rejected"))
                continue
        records[w["slug"]] = {
            "year": "2017",
            "age": d["age"],
            "education": d["education"],
            "criminalCases": d["criminalCases"],
            "assets": d["assets"],
            "assetsNum": money_num(d["assets"]),
            "liabilities": d["liabilities"],
            "mynetaUrl": f"{BASE}/candidate.php?candidate_id={cid_}",
            "_2017name": hit["name"],
            "_2017ac": acinfo[1],
        }
    except Exception as e:
        parse_fails.append((w["slug"], w["name"], str(e)[:80]))
    if (i + 1) % 40 == 0:
        print(f"  candidates {i+1}/{len(matched)}")

print("records:", len(records), "parse fails:", len(parse_fails))

# ---- 5. write outputs ----
def ts_str(s):
    return s.replace("\\", "\\\\").replace("'", "\\'")

lines = ["import type { PrevAffidavit } from './pilot';", "",
         "export const prevUp: Record<string, PrevAffidavit> = {"]
for slug in sorted(records):
    r = records[slug]
    lines.append(f"  '{slug}': {{")
    lines.append(f"    year: '2017',")
    lines.append(f"    age: '{ts_str(r['age'])}',")
    lines.append(f"    education: '{ts_str(r['education'])}',")
    lines.append(f"    criminalCases: {r['criminalCases']},")
    lines.append(f"    assets: '{ts_str(r['assets'])}',")
    lines.append(f"    assetsNum: {r['assetsNum']},")
    lines.append(f"    liabilities: '{ts_str(r['liabilities'])}',")
    lines.append(f"    mynetaUrl: '{r['mynetaUrl']}',")
    lines.append("  },")
lines.append("};")
open(os.path.join(HERE, "..", "src", "data", "prev_up.ts"), "w", encoding="utf-8").write("\n".join(lines) + "\n")

report = {
    "matched": [{"slug": w["slug"], "name": w["name"], "c2017": hit["name"], "ac2017": acinfo[1],
                 "assets2017": records.get(w["slug"], {}).get("assets")}
                for (w, hit, acinfo) in matched],
    "unmatched": [{"slug": s, "name": n, "cslug": c, "reason": r} for (s, n, c, r) in unmatched],
    "parse_fails": [{"slug": s, "name": n, "reason": r} for (s, n, r) in parse_fails],
}
json.dump(report, open(os.path.join(CACHE, "match-report.json"), "w"), ensure_ascii=False, indent=1)
print("WROTE src/data/prev_up.ts with", len(records), "records")
from collections import Counter
print("Unmatched reasons:")
print(Counter(r["reason"][:45] for r in report["unmatched"]))
if parse_fails:
    print("Parse fails:")
    for f in parse_fails:
        print("  ", f)

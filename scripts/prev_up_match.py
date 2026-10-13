#!/usr/bin/env python3
"""UP 2017 vs 2022: phase 1-3 (index -> winners -> list matching). Local only, no fetches
(cache is complete). Writes .myneta-cache/up2017/to_fetch.json."""
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, "..", ".myneta-cache", "up2017")
BASE = "https://myneta.info/uttarpradesh2017"

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

def cached(name):
    p = os.path.join(CACHE, name)
    assert os.path.exists(p) and os.path.getsize(p) > 1000, f"cache missing: {name}"
    return open(p, encoding="utf-8", errors="replace").read()

# ---- 1. 2017 index ----
h = cached("index.html")
ac_map = {}
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
print("2017 ACs:", len(ac_map))

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

# ---- 2. 2022 winners ----
txt = open(os.path.join(HERE, "..", "src", "data", "uttar_pradesh.ts"), encoding="utf-8").read()
winners = []
for m in re.finditer(
        r"slug: '([^']+)',\n    name: '([^']+)',\n    party: '[^']*',\n    partyShort: '[^']*',\n    post: 'MLA',",
        txt):
    slug, name = m.group(1), m.group(2)
    cm = re.search(r"slug: '%s'.*?constituency: '([^']+)'," % re.escape(slug), txt, re.S)
    cslugm = re.search(r"slug: '%s'.*?constituencySlug: '([^']+)'," % re.escape(slug), txt, re.S)
    block = txt[m.start():m.start() + 4000]
    am = re.search(r"age: '(\d+)'", block)
    winners.append({"slug": slug, "name": name,
                    "constituency": cm.group(1) if cm else "",
                    "cslug": cslugm.group(1) if cslugm else "",
                    "age2022": int(am.group(1)) if am else None})
print("2022 MLAs:", len(winners))

# ---- 3. per AC list match ----
def parse_list(html):
    return [{"cand_id": m.group(1), "name": m.group(2).strip()}
            for m in re.finditer(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a>", html)]

needed = {ac_key(w["constituency"]) for w in winners if ac_key(w["constituency"]) in ac_map}
ac_lists, needs_list = {}, []
for key in needed:
    cid = ac_map[key][0]
    p = os.path.join(CACHE, f"list-{cid}.html")
    if os.path.exists(p) and os.path.getsize(p) > 1000:
        ac_lists[key] = parse_list(open(p, encoding="utf-8", errors="replace").read())
    else:
        needs_list.append({"key": key, "cid": cid, "ac": ac_map[key][1]})
print("AC lists cached:", len(ac_lists), "| missing:", len(needs_list))
json.dump(needs_list, open(os.path.join(CACHE, "needs_list.json"), "w"), ensure_ascii=False, indent=1)

def near_miss(n2017_list, target):
    tt = target.split()
    out = []
    for c in n2017_list:
        ct = norm_name(c["name"]).split()
        if tt and ct and tt[0] == ct[0] and tt[-1] == ct[-1] and norm_name(c["name"]) != target:
            out.append(c["name"])
    return out

to_fetch, unmatched = [], []
need_keys = {n["key"] for n in needs_list}
for w in winners:
    key = ac_key(w["constituency"])
    if key in need_keys:
        unmatched.append({"slug": w["slug"], "name": w["name"], "cslug": w["cslug"],
                          "reason": "2017 list abhi fetch nahi hui (pending)"})
        continue
    if key not in ac_map:
        unmatched.append({"slug": w["slug"], "name": w["name"], "cslug": w["cslug"],
                          "reason": "2017 AC mapping nahi mila: " + w["constituency"]})
        continue
    if key not in ac_lists:
        unmatched.append({"slug": w["slug"], "name": w["name"], "cslug": w["cslug"],
                          "reason": "2017 list cache nahi mila"})
        continue
    target = norm_name(w["name"])
    hit = next((c for c in ac_lists[key] if norm_name(c["name"]) == target), None)
    if hit:
        to_fetch.append({"slug": w["slug"], "name": w["name"], "cand_id": hit["cand_id"],
                         "cand_name": hit["name"], "ac2017": ac_map[key][1],
                         "age2022": w["age2022"]})
        continue
    nm = near_miss(ac_lists[key], target)
    if nm:
        unmatched.append({"slug": w["slug"], "name": w["name"], "cslug": w["cslug"],
                          "reason": "naam variation? 2017 me: " + "; ".join(nm[:3]) + " — manual review"})
    else:
        unmatched.append({"slug": w["slug"], "name": w["name"], "cslug": w["cslug"],
                          "reason": "2017 me is kshetra se ummidwar nahi the"})

json.dump({"to_fetch": to_fetch, "unmatched": unmatched},
          open(os.path.join(CACHE, "to_fetch.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print("exact matches:", len(to_fetch), "| unmatched:", len(unmatched))
from collections import Counter
print(Counter(r["reason"][:50] for r in unmatched))

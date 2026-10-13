#!/usr/bin/env python3
"""Self-audit for prev_up.ts (UP 2017 vs 2022). Strict rule:
same AC (normalized) + exact normalized name + age gap 3-7. NO cross-AC fallback.
Report-only: writes scripts/audit-up-report.json, makes NO edits."""
import json
import os
import re
import glob

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")
CACHE = os.path.join(ROOT, ".myneta-cache", "up2017")

TITLES = {"SHRI", "SMT", "SHRIMATI", "DR", "ADV", "ADVOCATE", "LATE", "CAPT", "CAPTAIN",
          "COL", "COLONEL", "MAJ", "MAJOR", "ER", "ENGINEER", "SOW", "SHREEMATI", "KUMARI",
          "BHAI", "BHAISHRI"}

def norm_name(s):
    s = s.upper().replace(".", " ")
    s = re.sub(r"\s*\([^)]*\)", " ", s)
    return " ".join(t for t in re.split(r"\s+", s.strip()) if t and t not in TITLES)

def norm_ac(s):
    s = s.upper()
    s = re.sub(r"\s*\([^)]*\)", "", s)
    s = s.replace(".", "").replace("-", " ")  # matcher ke norm_ac jaisa (Bilgram-Mallanwan case)
    s = re.sub(r"\s*\b(ST|SC|GEN)\b\s*", " ", s)
    return re.sub(r"\s+", " ", s).strip()

AC_ALIAS = {
    "BAGPAT": "BAGHPAT", "BAHRAICH": "BAHARAICH", "BANGARMAU": "BANGERMAU",
    "DHAULANA": "DHOLANA", "GHAZIPUR SADAR": "GHAZIPUR", "GOVIND NAGAR": "GOVINDNAGAR",
    "KANPUR CANTONMENT": "KANPUR CANTT", "LUCKNOW CANTONMENT": "LUCKNOW CANTT",
    "MADHOGARH": "MADHAUGARH", "MAHMOODABAD": "MOHMOODABAD", "MODINAGAR": "MODI NAGAR",
    "MUZAFFARNAGAR": "MUZAFFAR NAGAR", "PANIYARA": "PANIYRA",
    "PRAYAGRAJ NORTH": "ALLAHABAD NORTH", "PRAYAGRAJ SOUTH": "ALLAHABAD SOUTH",
    "PRAYAGRAJ WEST": "ALLAHABAD WEST", "VISHWANATHGANJ": "VISHWANATH GANJ",
}

def load_prev():
    t = open(os.path.join(ROOT, "src/data/prev_up.ts"), encoding="utf-8").read()
    return {m.group(1): {"year": m.group(2), "age": m.group(3), "url": m.group(4), "cid": m.group(5)}
            for m in re.finditer(
                r"  '([^']+)': \{\n    year: '(\d+)',\n    age: '([^']*)',\n.*?    mynetaUrl: '([^']*candidate_id=(\d+))',",
                t, re.S)}

def load_current():
    t = open(os.path.join(ROOT, "src/data/uttar_pradesh.ts"), encoding="utf-8").read()
    out = {}
    for m in re.finditer(
            r"  \{\n    slug: '([^']+)',\n    name: '([^']+)',\n    party: '[^']*',\n    partyShort: '[^']*',\n    post: 'MLA',", t):
        block = t[m.start():m.start() + 4000]
        cm = re.search(r"constituency: '([^']+)',", block)
        am = re.search(r"age: '(\d+)'", block)
        out[m.group(1)] = {"name": m.group(2), "constituency": cm.group(1) if cm else "",
                           "age": am.group(1) if am else ""}
    return out

def build_list_index():
    idx = {}
    for f in glob.glob(os.path.join(CACHE, "list-*.html")):
        h = open(f, encoding="utf-8", errors="replace").read()
        ac = ""
        m = re.search(r"<title>List of Candidates in ([^:<]+?)\s*:", h)
        if m:
            ac = m.group(1).strip()
        for cm in re.finditer(r"candidate\.php\?candidate_id=(\d+)[^>]*>([^<]+)</a>", h):
            if cm.group(1) not in idx:
                idx[cm.group(1)] = (cm.group(2).strip(), ac)
    return idx

def alias_ac(s):
    return AC_ALIAS.get(norm_ac(s), norm_ac(s))

prev, cur, list_idx = load_prev(), load_current(), build_list_index()
print(f"prev records={len(prev)}, current MLAs={len(cur)}, list-indexed cands={len(list_idx)}")

verdicts = {}
for slug, r in prev.items():
    v = {"slug": slug, "cand_id": r["cid"], "prev_age": r["age"], "issues": []}
    if slug not in cur:
        v["issues"].append("ORPHAN: slug current MLA data me nahi")
        verdicts[slug] = v
        continue
    v.update(cur_name=cur[slug]["name"], cur_ac=cur[slug]["constituency"], cur_age=cur[slug]["age"])
    if r["cid"] not in list_idx:
        v["issues"].append("LIST_MISSING: cand_id list index me nahi — AC verify nahi ho saka")
        verdicts[slug] = v
        continue
    name17, ac17 = list_idx[r["cid"]]
    v["name2017"], v["ac2017"] = name17, ac17
    if norm_name(name17) != norm_name(cur[slug]["name"]):
        v["issues"].append(f"NAME_MISMATCH: 2017='{name17}' vs current='{cur[slug]['name']}'")
    if alias_ac(ac17) != alias_ac(cur[slug]["constituency"]):
        v["issues"].append(f"AC_MISMATCH: 2017='{ac17}' vs current='{cur[slug]['constituency']}'")
    if r["age"].isdigit() and cur[slug]["age"].isdigit():
        gap = int(cur[slug]["age"]) - int(r["age"])
        v["age_gap"] = gap
        if not (3 <= gap <= 7):
            v["issues"].append(f"AGE_GAP {gap}: prev={r['age']}, current={cur[slug]['age']} (expected 3-7)")
    verdicts[slug] = v

json.dump(verdicts, open(os.path.join(HERE, "audit-up-report.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
bad = {s: v for s, v in verdicts.items() if v["issues"]}
print(f"\n### UP 2017 vs 2022: {len(verdicts)} records, {len(bad)} with issues ###")
for s, v in sorted(bad.items()):
    print(f"  {s}:")
    for i in v["issues"]:
        print(f"    - {i}")
if not bad:
    print("ALL CLEAN ✅")

#!/usr/bin/env python3
"""Generate public/hierarchy-manipur.json from src/data/manipur.ts
(district -> ACs number-sorted; talukas empty).
Adapted from scripts/gen_hierarchy_tamilnadu.py.

Manipur: 60 ACs in 16 districts (ECI Delimitation Order 2008, 2016 ke baad ke
navsrijit jilon ke saath milan):
- Imphal East: 1-8, 14, 15 (Wangkhei/Yaiskul Imphal East me)
- Imphal West: 9-13, 16-23
- Bishnupur: 24-29 | Thoubal: 30-35 | Kakching: 36-39
- Jiribam: 40 | Chandel: 41 | Tengnoupal: 42 | Kamjong: 43
- Ukhrul: 44, 45 | Kangpokpi: 46, 50, 51 | Senapati: 47-49 (49-Tadubi RIKT)
- Tamenglong: 52, 53 | Noney: 54 | Pherzawl: 55, 56 (56-Thanlon RIKT)
- Churachandpur: 57-60
"""
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
txt = open(os.path.join(BASE, "src", "data", "manipur.ts"), encoding="utf-8").read()

acs = []
for m in re.finditer(
    r"\{\s*slug:\s*'([^']+)',\s*name:\s*'([^']+)',\s*type:\s*'Vidhan Sabha',\s*number:\s*(\d+|null),\s*district:\s*'([^']+)'",
    txt,
):
    slug, name, num, district = m.groups()
    if num == "null":
        continue
    acs.append({"n": int(num), "name": name, "slug": slug, "district": district})

by_district = {}
for a in acs:
    by_district.setdefault(a["district"], []).append(a)

districts = []
for d in sorted(by_district):
    arr = sorted(by_district[d], key=lambda x: x["n"])
    dslug = re.sub(r"[^a-z0-9]+", "-", d.lower()).strip("-")
    districts.append({
        "name": d,
        "slug": dslug,
        "acs": [{"n": a["n"], "name": a["name"], "slug": a["slug"]} for a in arr],
        "talukas": [],
    })

json.dump({"districts": districts}, open(os.path.join(BASE, "public", "hierarchy-manipur.json"), "w"), ensure_ascii=False)
print("districts:", len(districts), "| ACs:", len(acs))
for d in districts:
    print(" ", d["name"], "->", len(d["acs"]), "ACs")

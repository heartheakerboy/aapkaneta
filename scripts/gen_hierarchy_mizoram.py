#!/usr/bin/env python3
"""Generate public/hierarchy-mizoram.json from src/data/mizoram.ts
(district -> ACs number-sorted; talukas empty).
Adapted from scripts/gen_hierarchy_manipur.py.

Mizoram: 40 ACs in 11 districts (ECI Delimitation Order 2008; 2018-19 me
navsrijit Hnahthial/Khawzawl/Saitual jilon ke saath milan):
- Aizawl: 8, 9, 10-20 (Chalfilh, Tawi, Aizawl North I/II/III, East I/II, West I/II/III, South I/II/III)
- Champhai: 22, 23, 24 (Tuichang, Champhai North, Champhai South)
- Khawzawl: 25 (East Tuipui)
- Kolasib: 4, 5, 6 (Tuirial, Kolasib, Serlui)
- Saitual: 7, 21 (Tuivawl, Lengteng)
- Mamit: 1, 2, 3 (Hachhek, Dampa, Mamit)
- Lawngtlai: 36, 37, 38 (Tuichawng, Lawngtlai West, Lawngtlai East)
- Lunglei: 30-35 (Lunglei North/East/West/South, Thorang, West Tuipui)
- Hnahthial: 29 (South Tuipui)
- Serchhip: 26, 27, 28 (Serchhip, Tuikum, Hrangturzo)
- Siaha: 39, 40 (Saiha, Palak)
"""
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
txt = open(os.path.join(BASE, "src", "data", "mizoram.ts"), encoding="utf-8").read()

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

json.dump({"districts": districts}, open(os.path.join(BASE, "public", "hierarchy-mizoram.json"), "w"), ensure_ascii=False)
print("districts:", len(districts), "| ACs:", len(acs))
for d in districts:
    print(" ", d["name"], "->", len(d["acs"]), "ACs")

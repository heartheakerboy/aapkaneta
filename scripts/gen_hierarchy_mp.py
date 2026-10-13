#!/usr/bin/env python3
"""Generate public/hierarchy-madhya-pradesh.json from src/data/madhya_pradesh.ts
(district -> ACs number-sorted; talukas empty).
Adapted from scripts/gen_hierarchy_delhi.py."""
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
txt = open(os.path.join(BASE, "src", "data", "madhya_pradesh.ts"), encoding="utf-8").read()

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

json.dump({"districts": districts}, open(os.path.join(BASE, "public", "hierarchy-madhya-pradesh.json"), "w"), ensure_ascii=False)
print("districts:", len(districts), "| ACs:", len(acs))
for d in districts:
    print(" ", d["name"], "->", len(d["acs"]), "ACs")

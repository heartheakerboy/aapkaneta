#!/usr/bin/env python3
"""Generate public/hierarchy.json for the nav cascading dropdown.
Structure: districts[] -> {name, slug, acs[], talukas[] -> {name, slug, acs[]}}"""
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache")
g = json.load(open(os.path.join(CACHE, "geo.json"), encoding="utf-8"))


def slugify(s):
    s = re.sub(r"[^a-zA-Z0-9]+", "-", s).strip("-").lower()
    return s


# AC number -> (name, slug, district) from TS data files
ac_info = {}
for fn in ["src/data/maharashtra.ts", "src/data/mp.ts", "src/data/pilot.ts"]:
    txt = open(os.path.join(BASE, fn), encoding="utf-8").read()
    for m in re.finditer(
        r"\{\s*slug:\s*'([^']+)',\s*name:\s*'([^']+)',\s*type:\s*'([^']+)',\s*number:\s*(\d+|null),\s*district:\s*'([^']+)'",
        txt,
    ):
        slug, name, typ, num, district = m.groups()
        if typ == "Vidhan Sabha" and num != "null":
            ac_info[int(num)] = {"name": name, "slug": slug, "district": district}

DIST_FIX = {"Amravati": "Amaravati", "Nandurbar": "Nandurabar"}
PALGHAR_ACS = {128, 129, 130, 131, 132, 133}
TALUKA_HOME = {"Wada": "Palghar"}

# district -> talukas (home district)
district_talukas = {}
for num_s, c in g["constituencies"].items():
    num = int(num_s)
    d = DIST_FIX.get(c["district"], c["district"])
    if num in PALGHAR_ACS:
        d = "Palghar"
    for t in c["talukas"]:
        hd = TALUKA_HOME.get(t, d)
        district_talukas.setdefault(hd, set()).add(t)

# district -> AC nums (site districts)
district_acs = {}
for num, info in ac_info.items():
    district_acs.setdefault(info["district"], []).append(num)

# taluka key (home_district, taluka) -> AC nums
taluka_acs = {}
for num_s, c in g["constituencies"].items():
    num = int(num_s)
    if num not in ac_info:
        continue
    d = DIST_FIX.get(c["district"], c["district"])
    if num in PALGHAR_ACS:
        d = "Palghar"
    for t in c["talukas"]:
        hd = TALUKA_HOME.get(t, d)
        taluka_acs.setdefault((hd, t), []).append(num)

def ac_entry(num):
    i = ac_info[num]
    return {"n": num, "name": i["name"], "slug": i["slug"]}

districts = []
for d in sorted(set(list(district_talukas.keys()) + list(district_acs.keys()))):
    d_acs = sorted(district_acs.get(d, []))
    talukas = []
    for t in sorted(district_talukas.get(d, [])):
        t_acs = sorted(taluka_acs.get((d, t), []))
        talukas.append({
            "name": t,
            "slug": slugify(t),
            "acs": [ac_entry(n) for n in t_acs],
        })
    districts.append({
        "name": d,
        "slug": slugify(d),
        "acs": [ac_entry(n) for n in d_acs],
        "talukas": talukas,
    })

out = {"districts": districts}
json.dump(out, open(os.path.join(BASE, "public/hierarchy.json"), "w"), ensure_ascii=False)
n_acs = sum(len(d["acs"]) for d in districts)
print(f"hierarchy.json: {len(districts)} districts, {n_acs} AC refs, {os.path.getsize(os.path.join(BASE, 'public/hierarchy.json'))} bytes")
missing = [n for n in range(1, 289) if n not in ac_info]
print("ACs missing info:", missing)

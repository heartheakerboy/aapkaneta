#!/usr/bin/env python3
"""Generate public/hierarchy-nagaland.json from src/data/nagaland.ts
(district -> ACs number-sorted; talukas empty).
Adapted from scripts/gen_hierarchy_mizoram.py.

Nagaland: 60 ACs in 17 districts (ECI Delimitation Order 2008; navsrijit jile:
Noklak (2021), Chümoukedima + Niuland + Tseminyü (Dec 2021), Shamator (Jan 2022),
Meluri (2024). Ghaspani-I Chümoukedima aur Niuland dono me padti hai — yahan
Chümoukedima me rakhi gayi hai (file header me darj):
- Dimapur: 1, 2, 3 (Dimapur-I, II, III)
- Chümoukedima: 4, 5 (Ghaspani-I, Ghaspani-II)
- Peren: 6, 7 (Tening, Peren)
- Kohima: 8, 9, 10, 11, 14, 15 (Western Angami, Kohima Town, Northern Angami-I/II, Southern Angami-I/II)
- Tseminyü: 12 (Tseminyü)
- Zünheboto: 13, 31-36 (Pughoboto, Akuluto, Atoizu, Suruhoto, Aghunato, Zünheboto, Satakha)
- Phek: 16, 17, 18, 19 (Pfütsero, Chizami, Chozuba, Phek)
- Meluri: 20 (Meluri)
- Mokokchung: 21-30 (Tuli, Arkakong, Impur, Angetyongpang, Mongoya, Aonglenden, Mokokchung Town, Koridang, Jangpetkong, Alongtaki)
- Wokha: 37, 38, 39, 40 (Tyüi, Wokha, Sanis, Bhandari)
- Mon: 41-48, 55 (Tizit, Wakching, Tapi, Phomching, Tehok, Mon Town, Aboi, Moka, Tobu)
- Longleng: 49, 50 (Tamlu, Longleng)
- Tuensang: 51, 52, 53, 54 (Noksen, Longkhim Chare, Tuensang Sadar-I/II)
- Noklak: 56, 57 (Noklak, Thonoknyu)
- Shamator: 58 (Shamator–Chessore)
- Kiphire: 59, 60 (Seyochung–Sitimi, Pungro–Kiphire)
"""
import json
import os
import re
import unicodedata

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
txt = open(os.path.join(BASE, "src", "data", "nagaland.ts"), encoding="utf-8").read()

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
    dslug = re.sub(r"[^a-z0-9]+", "-", unicodedata.normalize("NFKD", d).encode("ascii", "ignore").decode().lower()).strip("-")
    districts.append({
        "name": d,
        "slug": dslug,
        "acs": [{"n": a["n"], "name": a["name"], "slug": a["slug"]} for a in arr],
        "talukas": [],
    })

json.dump({"districts": districts}, open(os.path.join(BASE, "public", "hierarchy-nagaland.json"), "w"), ensure_ascii=False)
print("districts:", len(districts), "| ACs:", len(acs))
for d in districts:
    print(" ", d["name"], "->", len(d["acs"]), "ACs")

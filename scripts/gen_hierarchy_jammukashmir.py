#!/usr/bin/env python3
"""Regenerate public/hierarchy-jammu-kashmir.json from src/data/jammukashmir.ts.

Parses the jammuKashmirConstituencies export (type 'Vidhan Sabha' only) and groups ACs
by district using the DISTRICT_MAP below. Seat numbers come from the '// N. <slug> ->'
comment lines in the TS file. Run: python3 scripts/gen_hierarchy_jammukashmir.py

NOTE on plurality mapping: all 90 ACs map cleanly to one district under the 2022
delimitation — no plurality judgment was needed. PLURALITY_NOTE is empty.
"""
import json
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA_TS = ROOT / "src/data/jammukashmir.ts"
OUT = ROOT / "public/hierarchy-jammu-kashmir.json"

# constituencySlug -> district slug (all 90 ACs; each maps cleanly to one district)
DISTRICT_MAP = {
    # Kupwara
    "karnah": "kupwara", "trehgam": "kupwara", "kupwara": "kupwara",
    "lolab": "kupwara", "handwara": "kupwara", "langate": "kupwara",
    # Baramulla
    "sopore": "baramulla", "rafiabad": "baramulla", "uri": "baramulla",
    "baramulla": "baramulla", "gulmarg": "baramulla", "wagoora-kreeri": "baramulla",
    "pattan": "baramulla",
    # Bandipora
    "sonawari": "bandipora", "bandipora": "bandipora", "gurez": "bandipora",
    # Ganderbal
    "kangan": "ganderbal", "ganderbal": "ganderbal",
    # Srinagar
    "hazratbal": "srinagar", "khanyar": "srinagar", "habba-kadal": "srinagar",
    "lal-chowk": "srinagar", "chanapora": "srinagar", "zadibal": "srinagar",
    "eidgah": "srinagar", "central-shalteng": "srinagar",
    # Budgam
    "budgam": "budgam", "beerwah": "budgam", "khan-sahib": "budgam",
    "charari-sharief": "budgam", "chadoora": "budgam",
    # Pulwama
    "pampore": "pulwama", "tral": "pulwama", "pulwama": "pulwama", "rajpora": "pulwama",
    # Shopian
    "zainapora": "shopian", "shopian": "shopian",
    # Kulgam
    "dh-pora": "kulgam", "kulgam": "kulgam", "devsar": "kulgam",
    # Anantnag
    "dooru": "anantnag", "kokernag": "anantnag", "anantnag-west": "anantnag",
    "anantnag": "anantnag", "srigufwara-bijbehara": "anantnag",
    "shangus-anantnag-east": "anantnag", "pahalgam": "anantnag",
    # Kishtwar
    "inderwal": "kishtwar", "kishtwar": "kishtwar", "padder-nagseni": "kishtwar",
    # Doda
    "bhadarwah": "doda", "doda": "doda", "doda-west": "doda",
    # Ramban
    "ramban": "ramban", "banihal": "ramban",
    # Reasi
    "gulabgarh": "reasi", "reasi": "reasi", "shri-mata-vaishno-devi": "reasi",
    # Udhampur
    "udhampur-west": "udhampur", "udhampur-east": "udhampur", "chenani": "udhampur",
    "ramnagar": "udhampur",
    # Kathua
    "bani": "kathua", "billawar": "kathua", "basohli": "kathua", "jasrota": "kathua",
    "kathua": "kathua", "hiranagar": "kathua",
    # Samba
    "ramgarh": "samba", "samba": "samba", "vijaypur": "samba",
    # Jammu
    "bishnah": "jammu", "suchetgarh": "jammu", "rs-pora-jammu-south": "jammu",
    "bahu": "jammu", "jammu-east": "jammu", "nagrota": "jammu", "jammu-west": "jammu",
    "jammu-north": "jammu", "marh": "jammu", "akhnoor": "jammu", "chhamb": "jammu",
    # Rajouri
    "kalakote-sunderbani": "rajouri", "nowshera": "rajouri", "rajouri": "rajouri",
    "budhal": "rajouri", "thanamandi": "rajouri",
    # Poonch
    "surankote": "poonch", "poonch-haveli": "poonch", "mendhar": "poonch",
}

# ACs mapped by plurality (district holds the majority of the AC's polling area).
# Empty for J&K — all 90 ACs map cleanly to one district under 2022 delimitation.
PLURALITY_NOTE: dict = {}

DISTRICT_NAMES = {
    "kupwara": "Kupwara", "baramulla": "Baramulla", "bandipora": "Bandipora",
    "ganderbal": "Ganderbal", "srinagar": "Srinagar", "budgam": "Budgam",
    "pulwama": "Pulwama", "shopian": "Shopian", "kulgam": "Kulgam",
    "anantnag": "Anantnag", "kishtwar": "Kishtwar", "doda": "Doda",
    "ramban": "Ramban", "reasi": "Reasi", "udhampur": "Udhampur",
    "kathua": "Kathua", "samba": "Samba", "jammu": "Jammu",
    "rajouri": "Rajouri", "poonch": "Poonch",
}

DISTRICT_ORDER = ["kupwara", "baramulla", "bandipora", "ganderbal", "srinagar",
                 "budgam", "pulwama", "shopian", "kulgam", "anantnag", "kishtwar",
                 "doda", "ramban", "reasi", "udhampur", "kathua", "samba",
                 "jammu", "rajouri", "poonch"]


def main() -> None:
    src = DATA_TS.read_text(encoding="utf-8")
    m = re.search(r"export const jammuKashmirConstituencies:\s*Constituency\[\]\s*=\s*\[(.*?)\];",
                  src, re.DOTALL)
    if not m:
        raise SystemExit("jammuKashmirConstituencies export not found in " + str(DATA_TS))
    body = m.group(1)
    entries = re.findall(
        r"\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*type:\s*'([^']+)'",
        body,
    )
    # seat numbers from '// N. <slug> ->' comment lines
    seat_num = {}
    for cm in re.finditer(r"//\s*(\d+)\.\s*(\S+)\s*->", src):
        seat_num[cm.group(2)] = int(cm.group(1))

    dist_acs: dict = {d: [] for d in DISTRICT_ORDER}
    missing = []
    for name, slug, typ in entries:
        if typ != "Vidhan Sabha":
            continue
        d = DISTRICT_MAP.get(slug)
        if not d:
            missing.append(slug)
            continue
        dist_acs[d].append((seat_num.get(slug, 999), name, slug))

    if missing:
        raise SystemExit("unmapped AC slugs: " + ", ".join(missing))

    out = {"state": "Jammu & Kashmir", "stateSlug": "jammu-kashmir", "districts": []}
    for d in DISTRICT_ORDER:
        acs_sorted = sorted(dist_acs[d])
        out["districts"].append({
            "name": DISTRICT_NAMES[d],
            "slug": d,
            "acs": [{"n": n, "name": name, "slug": slug} for n, name, slug in acs_sorted],
            "talukas": [],
        })
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    total = sum(len(v) for v in dist_acs.values())
    print(f"wrote {OUT} — {total} ACs across {len(DISTRICT_ORDER)} districts")
    if PLURALITY_NOTE:
        print("plurality-mapped:", PLURALITY_NOTE)


if __name__ == "__main__":
    main()

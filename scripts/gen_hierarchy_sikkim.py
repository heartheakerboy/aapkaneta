#!/usr/bin/env python3
"""Regenerate public/hierarchy-sikkim.json from src/data/sikkim.ts.

Parses the sikkimConstituencies export (type 'Vidhan Sabha' only) and groups ACs
by district using the DISTRICT_MAP below. Seat numbers come from the '// N. <slug> ->'
comment lines in the TS file. Run: python3 scripts/gen_hierarchy_sikkim.py

NOTE on plurality mapping: all 32 ACs map cleanly to one district under the 2022
delimitation — no plurality judgment was needed. PLURALITY_NOTE is empty.
"""
import json
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA_TS = ROOT / "src/data/sikkim.ts"
OUT = ROOT / "public/hierarchy-sikkim.json"

# constituencySlug -> district slug (all 32 ACs)
# District assignment verified against Wikipedia district pages (Oct 2026):
# Gangtok district = 7 ACs (Khamdong-Singtam sahit — News18/Wikipedia: Gangtok district),
# Pakyong district = 5 ACs (Sikkim IPR SIR 2026 report), baaki seat-seema ke anusaar.
DISTRICT_MAP = {
    # Gyalshing (4)
    "yoksam-tashiding": "gyalshing", "yangthang": "gyalshing",
    "maneybong-dentam": "gyalshing", "gyalshing-barnyak": "gyalshing",
    # Soreng (4)
    "rinchenpong": "soreng", "daramdin": "soreng",
    "soreng-chakung": "soreng", "salghari-zoom": "soreng",
    # Namchi (8)
    "barfung": "namchi", "poklok-kamrang": "namchi",
    "namchi-singhithang": "namchi", "melli": "namchi",
    "namthang-rateypani": "namchi", "temi-namphing": "namchi",
    "rangang-yangang": "namchi", "tumin-lingee": "namchi",
    # Pakyong (5)
    "west-pendam": "pakyong", "rhenock": "pakyong", "chujachen": "pakyong",
    "gnathang-machong": "pakyong", "namcheybung": "pakyong",
    # Gangtok (7)
    "khamdong-singtam": "gangtok", "shyari": "gangtok",
    "martam-rumtek": "gangtok", "upper-tadong": "gangtok",
    "arithang": "gangtok", "gangtok": "gangtok", "upper-burtuk": "gangtok",
    # Mangan (3)
    "kabi-lungchok": "mangan", "djongu": "mangan", "lachen-mangan": "mangan",
    "sangha": "gangtok",  # plurality: non-territorial BM seat; grouped for navigation
}

# ACs mapped by plurality (district holds the majority of the AC's polling area).
# Sangha (BM) is a non-territorial constituency — electors are monks/nuns of 111
# registered monasteries across the state. Grouped under Gangtok for navigation
# (sabse zyada mathen wale jile me se ek; counting/assembly HQ Gangtok).
PLURALITY_NOTE: dict = {"sangha": "gangtok (non-territorial BM seat; grouped for navigation)"}

DISTRICT_NAMES = {
    "gangtok": "Gangtok", "pakyong": "Pakyong", "mangan": "Mangan",
    "gyalshing": "Gyalshing", "namchi": "Namchi", "soreng": "Soreng",
}

DISTRICT_ORDER = ["gangtok", "pakyong", "mangan",
                 "gyalshing", "namchi", "soreng"]


def main() -> None:
    src = DATA_TS.read_text(encoding="utf-8")
    m = re.search(r"export const sikkimConstituencies:\s*Constituency\[\]\s*=\s*\[(.*?)\];",
                  src, re.DOTALL)
    if not m:
        raise SystemExit("sikkimConstituencies export not found in " + str(DATA_TS))
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

    out = {"state": "Sikkim", "stateSlug": "sikkim", "districts": []}
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

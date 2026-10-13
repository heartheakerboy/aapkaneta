#!/usr/bin/env python3
"""Convert .myneta-cache/mp_mla/mp_mla.json -> src/data/madhya_pradesh.ts
(230 Madhya Pradesh MLAs, Dec 2023 assembly election).
Adapted from scripts/gen_delhi_ts.py.
NOTE: exports are madhyaPradeshNetas/madhyaPradeshConstituencies (NOT mpNetas -
src/data/mp.ts already exports mpNetas = Maharashtra Lok Sabha MPs).
Collision suffix: '-mp'.
"""
import glob
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "mp_mla")


def slugify(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def ts_str(s):
    return (s or "").replace("\\", "\\\\").replace("'", "\\'")


PARTY_MAP = {
    "BJP": ("BJP", "Bharatiya Janata Party"),
    "BHARATIYA JANATA PARTY": ("BJP", "Bharatiya Janata Party"),
    "INC": ("INC", "Indian National Congress"),
    "INDIAN NATIONAL CONGRESS": ("INC", "Indian National Congress"),
    "BAP": ("BAP", "Bharat Adivasi Party"),
    "BHARAT ADIVASI PARTY": ("BAP", "Bharat Adivasi Party"),
    "BSP": ("BSP", "Bahujan Samaj Party"),
    "SP": ("SP", "Samajwadi Party"),
    "SHS": ("SHS", "Shiv Sena"),
    "IND": ("IND", "Independent"),
    "INDEPENDENT": ("IND", "Independent"),
}


def party_of(short):
    pkey = (short or "").upper().strip()
    return PARTY_MAP.get(pkey, (short or "IND", short or "Independent"))


def bg_block(r, myneta_url, missing_note=""):
    assets = r.get("assets") or "Uplabdh nahi"
    liab = r.get("liabilities") or "Uplabdh nahi"
    return (
        "    background: {\n"
        f"      age: '{r.get('age','')}',\n"
        f"      education: '{ts_str(r.get('education',''))}',\n"
        f"      criminalCases: {r.get('criminal', 0)},\n"
        f"      assets: '{ts_str(assets)}',\n"
        f"      liabilities: '{ts_str(liab)}',\n"
        f"      mynetaUrl: '{myneta_url}',\n"
        f"      backgroundNote: '{ts_str(missing_note)}',\n"
        "    },"
    )


# existing slugs across all state files -> '-mp' suffix on collision
existing = set()
for f in glob.glob(os.path.join(BASE, "src", "data", "*.ts")):
    if os.path.basename(f) in ("madhya_pradesh.ts", "mp_mp.ts", "mp_rs.ts", "works_mp.ts"):
        continue
    txt = open(f, encoding="utf-8").read()
    existing.update(re.findall(r"slug:\s*'([^']+)'", txt))
print("existing slugs in other states:", len(existing))

data = json.load(open(os.path.join(CACHE, "mp_mla.json")))
print("MLA records:", len(data))
netas, consts = [], []
seen_c, seen_n = set(), set()
unknown_parties = set()
collisions = []
missing = 0
for r in sorted(data, key=lambda x: x["number"] or 999):
    cslug = slugify(r["constituency"])
    if cslug in existing or cslug in seen_c:
        cslug = f"{cslug}-mp"
        collisions.append(("const", r["constituency"]))
    seen_c.add(cslug)

    short, full = party_of(r["party_short"])
    if (r["party_short"] or "").upper().strip() not in PARTY_MAP:
        unknown_parties.add(r["party_short"])
    res = "ST" if r["reservation"] == "ST" else ("SC" if r["reservation"] == "SC" else "\u2014")
    cname = r["constituency"]
    const_label = f"{cname} ({res})" if res != "\u2014" else cname

    nslug = slugify(r["name"])
    if nslug in existing or nslug in seen_n or nslug in seen_c:
        nslug2 = f"{nslug}-mp"
        if nslug2 in existing or nslug2 in seen_n or nslug2 in seen_c:
            nslug2 = f"{nslug}-{r['number']}"
        nslug = nslug2
        collisions.append(("neta", r["name"]))
    seen_n.add(nslug)

    site = r.get("site") or "https://myneta.info/MadhyaPradesh2023"
    murl = f"{site}/candidate.php?candidate_id={r['candidate_id']}"
    if r.get("background_missing"):
        missing_note = "Halafnama ka record myneta.info par uplabdh nahi tha (Oct 2026); jald joda jayega."
        murl = ""
        missing += 1
    else:
        missing_note = ""

    enote = f"2023 me {ts_str(cname)} se jeete."
    if r.get("bye_election_note"):
        enote = ts_str(r["bye_election_note"])
    netas.append(
f"""  {{
    slug: '{nslug}',
    name: '{ts_str(r["name"])}',
    party: '{ts_str(full)}',
    partyShort: '{ts_str(short)}',
    post: 'MLA',
    state: 'Madhya Pradesh',
    constituency: '{ts_str(const_label)}',
    constituencySlug: '{cslug}',
    tenures: [
      {{ post: 'MLA', constituency: '{ts_str(const_label)}', constituencySlug: '{cslug}', party: '{ts_str(full)}', start: '2023', end: '2028' }},
    ],
    works: [],
    fund: {{
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Madhya Pradesh me MLA fund (Vidhayak Kshetra Vikas Nidhi) ka record online uplabdh nahi hai. RTI se data manga jayega.',
    }},
{bg_block(r, murl, missing_note)}
    electionNote: '{enote}',
  }},""")
    consts.append(
f"""  {{ slug: '{cslug}', name: '{ts_str(cname)}', type: 'Vidhan Sabha', number: {r["number"] or "null"}, district: '{ts_str(r["district"])}', reservation: '{res}', state: 'Madhya Pradesh' }},""")

out = """// AUTO-GENERATED by scripts/gen_mp_mla_ts.py from myneta.info (MadhyaPradesh2023)
// 230 Madhya Pradesh MLAs. Background data = ECI affidavit via myneta.info.
import type { Neta, Constituency } from './pilot';

export const madhyaPradeshNetas: Neta[] = [
""" + "\n".join(netas) + "\n];\n\nexport const madhyaPradeshConstituencies: Constituency[] = [\n" + "\n".join(consts) + "\n];\n"
open(os.path.join(BASE, "src", "data", "madhya_pradesh.ts"), "w").write(out)
print("wrote madhya_pradesh.ts:", len(netas), "netas")
print("unknown parties:", sorted(unknown_parties))
print("missing backgrounds:", missing)
print("slug collisions (-mp):", len(collisions))
for c in collisions:
    print("  ", c)
from collections import Counter
print("party tally:", Counter(n.split("partyShort: '")[1].split("'")[0] for n in netas))

#!/usr/bin/env python3
"""Convert .myneta-cache/up/up-fixed.json -> src/data/uttar_pradesh.ts
(403 UP MLAs, 2022 assembly + 20 bye-election substitutions 2022-2025).
Adapted from scripts/gen_rajasthan_ts.py."""
import glob
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "up")


def slugify(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def ts_str(s):
    return (s or "").replace("\\", "\\\\").replace("'", "\\'")


PARTY_MAP = {
    "BJP": ("BJP", "Bharatiya Janata Party"),
    "BHARATIYA JANATA PARTY": ("BJP", "Bharatiya Janata Party"),
    "INC": ("INC", "Indian National Congress"),
    "INDIAN NATIONAL CONGRESS": ("INC", "Indian National Congress"),
    "SP": ("SP", "Samajwadi Party"),
    "SAMAJWADI PARTY": ("SP", "Samajwadi Party"),
    "BSP": ("BSP", "Bahujan Samaj Party"),
    "BAHUJAN SAMAJ PARTY": ("BSP", "Bahujan Samaj Party"),
    "RLD": ("RLD", "Rashtriya Lok Dal"),
    "RASHTRIYA LOK DAL": ("RLD", "Rashtriya Lok Dal"),
    "SBSP": ("SBSP", "Suheldev Bharatiya Samaj Party"),
    "SUHELDEV BHARATIYA SAMAJ PARTY": ("SBSP", "Suheldev Bharatiya Samaj Party"),
    "NISHAD": ("NISHAD", "Nirbal Indian Shoshit Hamara Aam Dal"),
    "NIRBAL INDIAN SHOSHIT HAMARA AAM DAL": ("NISHAD", "Nirbal Indian Shoshit Hamara Aam Dal"),
    "AD(S)": ("AD(S)", "Apna Dal (Sonelal)"),
    "APNA DAL (SONELAL)": ("AD(S)", "Apna Dal (Sonelal)"),
    "APNA DAL (SONEYLAL)": ("AD(S)", "Apna Dal (Sonelal)"),  # myneta spelling
    "JSD(L)": ("JSD(L)", "Jansatta Dal (Loktantrik)"),
    "JANSATTA DAL (LOKTANTRIK)": ("JSD(L)", "Jansatta Dal (Loktantrik)"),
    "JANSATTA DAL LOKTANTRIK": ("JSD(L)", "Jansatta Dal (Loktantrik)"),  # myneta: no parens
    "AAP": ("AAP", "Aam Aadmi Party"),
    "AAM AADMI PARTY": ("AAP", "Aam Aadmi Party"),
    "IND": ("IND", "Independent"),
    "INDEPENDENT": ("IND", "Independent"),
    "CPI(M)": ("CPI(M)", "Communist Party of India (Marxist)"),
    "RLP": ("RLP", "Rashtriya Loktantrik Party"),
    "RASHTRIYA LOKTANTRIK PARTY": ("RLP", "Rashtriya Loktantrik Party"),
    "BAP": ("BAP", "Bharat Adivasi Party"),
    "BHARAT ADIVASI PARTY": ("BAP", "Bharat Adivasi Party"),
    "NCP": ("NCP", "Nationalist Congress Party"),
    "SHIV SENA": ("SHS", "Shiv Sena"),
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


# existing slugs across all state files (pilot, maharashtra, mp, rs, gujarat*,
# rajasthan*) -> '-up' suffix on collision
existing = set()
for f in glob.glob(os.path.join(BASE, "src", "data", "*.ts")):
    if os.path.basename(f) == "uttar_pradesh.ts":
        continue
    txt = open(f, encoding="utf-8").read()
    existing.update(re.findall(r"slug:\s*'([^']+)'", txt))
print("existing slugs in other states:", len(existing))

data = json.load(open(os.path.join(CACHE, "up-fixed.json")))
print("MLA records:", len(data))
netas, consts = [], []
seen_c, seen_n = set(), set()
unknown_parties = set()
collisions = []
byes = 0
missing = 0
for r in sorted(data, key=lambda x: x["number"] or 999):
    cslug = slugify(r["constituency"])
    if cslug in existing or cslug in seen_c:
        cslug = f"{cslug}-up"
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
        nslug2 = f"{nslug}-up"
        if nslug2 in existing or nslug2 in seen_n or nslug2 in seen_c:
            nslug2 = f"{nslug}-{r['number']}"
        nslug = nslug2
        collisions.append(("neta", r["name"]))
    seen_n.add(nslug)

    site = r.get("site") or "https://myneta.info/UttarPradesh2022"
    murl = f"{site}/candidate.php?candidate_id={r['candidate_id']}"
    if r.get("background_missing"):
        missing_note = "Halafnama ka record myneta.info par uplabdh nahi tha (Oct 2026); jald joda jayega."
        murl = ""
        missing += 1
    else:
        missing_note = ""

    if r.get("bye_date"):
        byes += 1
        tstart = r["bye_date"][:4]
        enote = f"{tstart} ke upchunav me {ts_str(cname)} se jeete."
    else:
        tstart = "2022"
        enote = f"2022 me {ts_str(cname)} se jeete."
    netas.append(
f"""  {{
    slug: '{nslug}',
    name: '{ts_str(r["name"])}',
    party: '{ts_str(full)}',
    partyShort: '{ts_str(short)}',
    post: 'MLA',
    state: 'Uttar Pradesh',
    constituency: '{ts_str(const_label)}',
    constituencySlug: '{cslug}',
    tenures: [
      {{ post: 'MLA', constituency: '{ts_str(const_label)}', constituencySlug: '{cslug}', party: '{ts_str(full)}', start: '{tstart}', end: '2027' }},
    ],
    works: [],
    fund: {{
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Uttar Pradesh me MLA fund ka record online uplabdh nahi hai. RTI se data manga jayega.',
    }},
{bg_block(r, murl, missing_note)}
    electionNote: '{enote}',
  }},""")
    consts.append(
f"""  {{ slug: '{cslug}', name: '{ts_str(cname)}', type: 'Vidhan Sabha', number: {r["number"] or "null"}, district: '{ts_str(r["district"])}', reservation: '{res}', state: 'Uttar Pradesh' }},""")

out = """// AUTO-GENERATED by scripts/gen_up_ts.py from myneta.info (UttarPradesh2022 + bye elections)
// 403 UP MLAs. Background data = ECI affidavit via myneta.info.
import type { Neta, Constituency } from './pilot';

export const upNetas: Neta[] = [
""" + "\n".join(netas) + "\n];\n\nexport const upConstituencies: Constituency[] = [\n" + "\n".join(consts) + "\n];\n"
open(os.path.join(BASE, "src", "data", "uttar_pradesh.ts"), "w").write(out)
print("wrote uttar_pradesh.ts:", len(netas), "netas")
print("unknown parties:", sorted(unknown_parties))
print("bye substitutions:", byes)
print("missing backgrounds:", missing)
print("slug collisions (-up):", len(collisions))
for c in collisions:
    print("  ", c)

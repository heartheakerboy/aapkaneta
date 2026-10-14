#!/usr/bin/env python3
"""Convert .myneta-cache/bihar_mla/bihar_mla.json -> src/data/bihar.ts
(243 Bihar MLAs, Nov 2025 assembly election).
Adapted from scripts/gen_mp_mla_ts.py.
NOTE: exports are biharNetas/biharConstituencies.
Collision suffix: '-bihar'.
"""
import glob
import json
import os
import re
from collections import Counter

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "bihar_mla")


def slugify(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def ts_str(s):
    return (s or "").replace("\\", "\\\\").replace("'", "\\'")


PARTY_MAP = {
    "BJP": ("BJP", "Bharatiya Janata Party"),
    "BHARATIYA JANATA PARTY": ("BJP", "Bharatiya Janata Party"),
    "JD(U)": ("JD(U)", "Janata Dal (United)"),
    "JANATA DAL (UNITED)": ("JD(U)", "Janata Dal (United)"),
    "JDU": ("JD(U)", "Janata Dal (United)"),
    "RJD": ("RJD", "Rashtriya Janata Dal"),
    "RASHTRIYA JANATA DAL": ("RJD", "Rashtriya Janata Dal"),
    "INC": ("INC", "Indian National Congress"),
    "INDIAN NATIONAL CONGRESS": ("INC", "Indian National Congress"),
    "LJPRV": ("LJPRV", "Lok Janshakti Party (Ram Vilas)"),
    "LOK JANSHAKTI PARTY(RAM VILAS)": ("LJPRV", "Lok Janshakti Party (Ram Vilas)"),
    "LOK JANSHAKTI PARTY (RAM VILAS)": ("LJPRV", "Lok Janshakti Party (Ram Vilas)"),
    "HAM": ("HAM", "Hindustani Awam Morcha (Secular)"),
    "HAMS": ("HAM", "Hindustani Awam Morcha (Secular)"),
    "HINDUSTANI AWAM MORCHA (SECULAR)": ("HAM", "Hindustani Awam Morcha (Secular)"),
    "RLM": ("RLM", "Rashtriya Lok Morcha"),
    "RASHTRIYA LOK MORCHA": ("RLM", "Rashtriya Lok Morcha"),
    "CPI(ML)(L)": ("CPI(ML)L", "Communist Party of India (Marxist-Leninist) Liberation"),
    "CPI(ML)L": ("CPI(ML)L", "Communist Party of India (Marxist-Leninist) Liberation"),
    "CPI(ML) LIBERATION": ("CPI(ML)L", "Communist Party of India (Marxist-Leninist) Liberation"),
    "CPI": ("CPI", "Communist Party of India"),
    "COMMUNIST PARTY OF INDIA": ("CPI", "Communist Party of India"),
    "CPM": ("CPI(M)", "Communist Party of India (Marxist)"),
    "CPI(M)": ("CPI(M)", "Communist Party of India (Marxist)"),
    "COMMUNIST PARTY OF INDIA (MARXIST)": ("CPI(M)", "Communist Party of India (Marxist)"),
    "JAN SURAAJ PARTY": ("JSP", "Jan Suraaj Party"),
    "INDIAN INCLUSIVE PARTY": ("IIP", "Indian Inclusive Party"),
    "AIMIM": ("AIMIM", "All India Majlis-e-Ittehadul Muslimeen"),
    "ALL INDIA MAJLIS-E-ITTEHADUL MUSLIMEEN": ("AIMIM", "All India Majlis-e-Ittehadul Muslimeen"),
    "BSP": ("BSP", "Bahujan Samaj Party"),
    "SP": ("SP", "Samajwadi Party"),
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


# existing slugs across all state files -> '-bihar' suffix on collision
existing = set()
for f in glob.glob(os.path.join(BASE, "src", "data", "*.ts")):
    if os.path.basename(f) in ("bihar.ts", "bihar_mp.ts", "bihar_rs.ts", "works_bihar.ts"):
        continue
    txt = open(f, encoding="utf-8").read()
    existing.update(re.findall(r"slug:\s*'([^']+)'", txt))
print("existing slugs in other states:", len(existing))

data = json.load(open(os.path.join(CACHE, "bihar_mla.json")))
print("MLA records:", len(data))
netas, consts = [], []
seen_c, seen_n = set(), set()
unknown_parties = set()
collisions = []
missing = 0
for r in sorted(data, key=lambda x: x["number"] or 999):
    cslug = slugify(r["constituency"])
    if cslug in existing or cslug in seen_c:
        cslug = f"{cslug}-bihar"
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
        nslug2 = f"{nslug}-bihar"
        if nslug2 in existing or nslug2 in seen_n or nslug2 in seen_c:
            nslug2 = f"{nslug}-{r['number']}"
        nslug = nslug2
        collisions.append(("neta", r["name"]))
    seen_n.add(nslug)

    site = r.get("site") or "https://myneta.info/Bihar2025"
    murl = f"{site}/candidate.php?candidate_id={r['candidate_id']}"
    if r.get("background_missing"):
        missing_note = "Halafnama ka record myneta.info par uplabdh nahi tha (Oct 2026); jald joda jayega."
        murl = ""
        missing += 1
    else:
        missing_note = ""

    enote = f"2025 me {ts_str(cname)} se jeete."
    if r.get("bye_election_note") or r.get("electionNote"):
        enote = ts_str(r.get("bye_election_note") or r.get("electionNote"))
    netas.append(
f"""  {{
    slug: '{nslug}',
    name: '{ts_str(r["name"])}',
    party: '{ts_str(full)}',
    partyShort: '{ts_str(short)}',
    post: 'MLA',
    state: 'Bihar',
    constituency: '{ts_str(const_label)}',
    constituencySlug: '{cslug}',
    tenures: [
      {{ post: 'MLA', constituency: '{ts_str(const_label)}', constituencySlug: '{cslug}', party: '{ts_str(full)}', start: '2025', end: '2030' }},
    ],
    works: [],
    fund: {{
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Bihar me MLA fund (Mukhyamantri Kshetra Vikas Yojana) ka record online uplabdh nahi hai. RTI se data manga jayega.',
    }},
{bg_block(r, murl, missing_note)}
    electionNote: '{enote}',
  }},""")
    consts.append(
f"""  {{ slug: '{cslug}', name: '{ts_str(cname)}', type: 'Vidhan Sabha', number: {r["number"] or "null"}, district: '{ts_str(r["district"])}', reservation: '{res}', state: 'Bihar' }},""")

out = """// AUTO-GENERATED by scripts/gen_bihar_ts.py from myneta.info (Bihar2025)
// 243 Bihar MLAs. Background data = ECI affidavit via myneta.info.
import type { Neta, Constituency } from './pilot';

export const biharNetas: Neta[] = [
""" + "\n".join(netas) + "\n];\n\nexport const biharConstituencies: Constituency[] = [\n" + "\n".join(consts) + "\n];\n"
open(os.path.join(BASE, "src", "data", "bihar.ts"), "w").write(out)
print("wrote bihar.ts:", len(netas), "netas")
print("unknown parties:", sorted(unknown_parties))
print("missing backgrounds:", missing)
print("slug collisions (-bihar):", len(collisions))
for c in collisions:
    print("  ", c)
print("party tally:", Counter(n.split("partyShort: '")[1].split("'")[0] for n in netas))

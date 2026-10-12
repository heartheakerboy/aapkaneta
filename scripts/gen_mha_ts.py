#!/usr/bin/env python3
"""Convert .myneta-cache/mha.json -> src/data/maharashtra.ts
Skips the 6 Palghar assembly seats (already in pilot.ts with richer data)."""
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache")
data = json.load(open(os.path.join(CACHE, "mha.json")))

SKIP = {"dahanu", "vikramgad", "palghar", "boisar", "nalasopara", "vasai"}

PARTY_MAP = {
    "BJP": ("BJP", "Bharatiya Janata Party"),
    "SHIV SENA": ("SHS", "Shiv Sena"),
    "SHS": ("SHS", "Shiv Sena"),
    "SHIV SENA (UDDHAV BALASAHEB THACKERAY)": ("SHS (UBT)", "Shiv Sena (Uddhav Balasaheb Thackeray)"),
    "NCP": ("NCP", "Nationalist Congress Party"),
    "NATIONALIST CONGRESS PARTY": ("NCP", "Nationalist Congress Party"),
    "NCP(SP)": ("NCP (SP)", "Nationalist Congress Party (Sharadchandra Pawar)"),
    "NCP-SHARADCHANDRA PAWAR": ("NCP (SP)", "Nationalist Congress Party (Sharadchandra Pawar)"),
    "ALL INDIA MAJLIS-E-ITTEHADUL MUSLIMEEN": ("AIMIM", "All India Majlis-e-Ittehadul Muslimeen"),
    "RASHTRIYA YUVA SWABHIMAN PARTY": ("RYSP", "Rashtriya Yuva Swabhiman Party"),
    "RAJARSHI SHAHU VIKAS AGHADI": ("RSVA", "Rajarshi Shahu Vikas Aghadi"),
    "NATIONALIST CONGRESS PARTY (SHARADCHANDRA PAWAR)": ("NCP (SP)", "Nationalist Congress Party (Sharadchandra Pawar)"),
    "INC": ("INC", "Indian National Congress"),
    "INDIAN NATIONAL CONGRESS": ("INC", "Indian National Congress"),
    "CPI(M)": ("CPI(M)", "Communist Party of India (Marxist)"),
    "CPI": ("CPI", "Communist Party of India"),
    "SP": ("SP", "Samajwadi Party"),
    "SAMAJWADI PARTY": ("SP", "Samajwadi Party"),
    "AIMIM": ("AIMIM", "All India Majlis-e-Ittehadul Muslimeen"),
    "MNS": ("MNS", "Maharashtra Navnirman Sena"),
    "MAHARASHTRA NAVNIRMAN SENA": ("MNS", "Maharashtra Navnirman Sena"),
    "VBA": ("VBA", "Vanchit Bahujan Aaghadi"),
    "BVA": ("BVA", "Bahujan Vikas Aaghadi"),
    "BAHUJAN VIKAS AAGHADI": ("BVA", "Bahujan Vikas Aaghadi"),
    "IND": ("IND", "Independent"),
    "INDEPENDENT": ("IND", "Independent"),
    "RSP": ("RSP", "Rashtriya Samaj Paksha"),
    "RASHTRIYA SAMAJ PAKSHA": ("RSP", "Rashtriya Samaj Paksha"),
    "JSS": ("JSS", "Jan Surajya Shakti"),
    "JAN SURAJYA SHAKTI": ("JSS", "Jan Surajya Shakti"),
    "PWPI": ("PWPI", "Peasants And Workers Party of India"),
    "PEASANTS AND WORKERS PARTY OF INDIA": ("PWPI", "Peasants And Workers Party of India"),
}

def slugify(name):
    s = name.lower()
    s = re.sub(r"\(.*?\)", "", s)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s

def ts_str(s):
    return s.replace("\\", "\\\\").replace("'", "\\'")

unknown_parties = set()
netas = []
consts = []
seen_slugs = set()

for r in data:
    slug = slugify(r["constituency"])
    if slug in SKIP:
        continue
    if slug in seen_slugs:
        slug = f"{slug}-{r['number']}"
    seen_slugs.add(slug)

    pkey = (r["party_short"] or "").upper().strip()
    short, full = PARTY_MAP.get(pkey, (r["party_short"] or "IND", r["party_short"] or "Independent"))
    if pkey not in PARTY_MAP:
        unknown_parties.add(r["party_short"])

    res = "ST" if "(ST)" in r["constituency_raw"] else ("SC" if "(SC)" in r["constituency_raw"] else "\u2014")
    cname_disp = r["constituency"]
    const_label = f"{cname_disp} ({res})" if res != "\u2014" else cname_disp

    # election note from votes/share if available
    enote = f"2024 me {cname_disp} se jeete."
    # votes/share not scraped per-row; keep generic

    nslug = slugify(r["name"])
    if nslug in seen_slugs:
        nslug = f"{nslug}-{r['number']}"
    seen_slugs.add(nslug)
    missing = r.get("background_missing", False)
    bg_note = "Halafnama ka record myneta.info par uplabdh nahi tha (Oct 2026); jald joda jayega." if missing else ""
    netas.append(
f"""  {{
    slug: '{nslug}',
    name: '{ts_str(r["name"])}',
    party: '{ts_str(full)}',
    partyShort: '{ts_str(short)}',
    post: 'MLA',
    constituency: '{ts_str(const_label)}',
    constituencySlug: '{slug}',
    tenures: [
      {{ post: 'MLA', constituency: '{ts_str(const_label)}', constituencySlug: '{slug}', party: '{ts_str(full)}', start: '2024', end: '2029' }},
    ],
    works: [],
    fund: {{
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Maharashtra me MLA fund ka record online uplabdh nahi hai. RTI se data manga jayega.',
    }},
    background: {{
      age: '{r["age"]}',
      education: '{ts_str(r["education"])}',
      criminalCases: {r["criminal"]},
      assets: '{ts_str(r["assets"] or ("Uplabdh nahi" if not missing else ""))}',
      liabilities: '{ts_str(r["liabilities"] or ("Uplabdh nahi" if not missing else ""))}',
      mynetaUrl: '{("https://myneta.info/Maharashtra2024/candidate.php?candidate_id=" + r["candidate_id"]) if r.get("candidate_id") else ""}',
      backgroundNote: '{ts_str(bg_note)}',
    }},
    electionNote: '{ts_str(enote)}',
  }},""")

    consts.append(
f"""  {{ slug: '{slug}', name: '{ts_str(cname_disp)}', type: 'Vidhan Sabha', number: {r["number"] or "null"}, district: '{ts_str(r["district"])}', reservation: '{res}' }},""")

out = """// AUTO-GENERATED by scripts/gen_mha_ts.py from myneta.info (Maharashtra2024)
// 282 MLAs (6 Palghar pilot seats live in pilot.ts). Background data = ECI affidavit via myneta.info.
import type { Neta, Constituency } from './pilot';

export const mhaNetas: Neta[] = [
""" + "\n".join(netas) + "\n];\n\nexport const mhaConstituencies: Constituency[] = [\n" + "\n".join(consts) + "\n];\n"

open(os.path.join(BASE, "src", "data", "maharashtra.ts"), "w").write(out)
print("wrote maharashtra.ts:", len(netas), "netas,", len(consts), "constituencies")
print("unknown parties:", sorted(unknown_parties))

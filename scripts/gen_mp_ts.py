#!/usr/bin/env python3
"""Convert .myneta-cache/mp.json -> src/data/mp.ts (47 MPs; Palghar skipped - in pilot.ts)."""
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache")
data = json.load(open(os.path.join(CACHE, "mp.json")))

SKIP = {"PALGHAR"}  # Savara already in pilot.ts with rich data

PARTY_MAP = {
    "BJP": ("BJP", "Bharatiya Janata Party"),
    "SHIV SENA": ("SHS", "Shiv Sena"),
    "SHS": ("SHS", "Shiv Sena"),
    "SHIV SENA (UDDHAV BALASAHEB THACKERAY)": ("SHS (UBT)", "Shiv Sena (Uddhav Balasaheb Thackeray)"),
    "NCP": ("NCP", "Nationalist Congress Party"),
    "NATIONALIST CONGRESS PARTY": ("NCP", "Nationalist Congress Party"),
    "NCP(SP)": ("NCP (SP)", "Nationalist Congress Party (Sharadchandra Pawar)"),
    "NCP-SHARADCHANDRA PAWAR": ("NCP (SP)", "Nationalist Congress Party (Sharadchandra Pawar)"),
    "NATIONALIST CONGRESS PARTY \u2013 SHARADCHANDRA PAWAR": ("NCP (SP)", "Nationalist Congress Party (Sharadchandra Pawar)"),
    "SHIVSENA (UDDHAV BALASAHEB THACKERAY)": ("SHS (UBT)", "Shiv Sena (Uddhav Balasaheb Thackeray)"),
    "INC": ("INC", "Indian National Congress"),
    "INDIAN NATIONAL CONGRESS": ("INC", "Indian National Congress"),
    "CPI(M)": ("CPI(M)", "Communist Party of India (Marxist)"),
    "CPI": ("CPI", "Communist Party of India"),
    "SP": ("SP", "Samajwadi Party"),
    "SAMAJWADI PARTY": ("SP", "Samajwadi Party"),
    "AIMIM": ("AIMIM", "All India Majlis-e-Ittehadul Muslimeen"),
    "ALL INDIA MAJLIS-E-ITTEHADUL MUSLIMEEN": ("AIMIM", "All India Majlis-e-Ittehadul Muslimeen"),
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
    "RASHTRIYA YUVA SWABHIMAN PARTY": ("RYSP", "Rashtriya Yuva Swabhiman Party"),
    "RAJARSHI SHAHU VIKAS AGHADI": ("RSVA", "Rajarshi Shahu Vikas Aghadi"),
}

def slugify(name):
    s = name.lower()
    s = re.sub(r"\(.*?\)", "", s)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s

def ts_str(s):
    return (s or "").replace("\\", "\\\\").replace("'", "\\'")

def norm(s):
    s = s.upper()
    s = re.sub(r"\(\s*S\.?\s*T\.?\s*\)", "", s)
    s = re.sub(r"\(\s*S\.?\s*C\.?\s*\)", "", s)
    return re.sub(r"\s+", " ", s).strip()

def clean_pc(raw):
    s = re.sub(r"\s*:\s*BYE ELECTION.*$", "", raw, flags=re.I).strip()
    return s

unknown, netas, consts, seen = set(), [], [], set()
# bye-election entries are current: process them last so they win dedupe
data = sorted(data, key=lambda r: ("BYE ELECTION" not in r["constituency_raw"].upper(), r["constituency_raw"]))
seen_const = set()
deduped = []
for r in data:
    k = norm(r["constituency_raw"])
    if k in SKIP:
        continue
    if k in seen_const:
        continue
    seen_const.add(k)
    deduped.append(r)
data = deduped
for r in data:
    pc_raw = clean_pc(r["constituency_raw"])
    cslug = slugify(pc_raw) + "-lok-sabha"
    if cslug in seen:
        continue
    seen.add(cslug)
    nslug = slugify(r["name"])
    if nslug in seen:
        nslug = nslug + "-mp"
    seen.add(nslug)

    pkey = (r["party_short"] or "").upper().strip()
    short, full = PARTY_MAP.get(pkey, (r["party_short"] or "IND", r["party_short"] or "Independent"))
    if pkey not in PARTY_MAP:
        unknown.add(r["party_short"])

    res = "ST" if "(ST)" in pc_raw else ("SC" if "(SC)" in pc_raw else "\u2014")
    cname = pc_raw.title().replace("(St)", "(ST)").replace("(Sc)", "(SC)")
    const_label = f"{cname} (Lok Sabha)"

    netas.append(
f"""  {{
    slug: '{nslug}',
    name: '{ts_str(r["name"])}',
    party: '{ts_str(full)}',
    partyShort: '{ts_str(short)}',
    post: 'MP',
    constituency: '{ts_str(const_label)}',
    constituencySlug: '{cslug}',
    tenures: [
      {{ post: 'MP', constituency: '{ts_str(const_label)}', constituencySlug: '{cslug}', party: '{ts_str(full)}', start: '2024', end: '2029' }},
    ],
    works: [],
    fund: {{
      scheme: 'MPLADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Har MP ko karyakaal me \u20b925 crore tak milte hain. Kharch ka official record e-SAKSHI dashboard se jald joda jayega.',
    }},
    background: {{
      age: '{r["age"]}',
      education: '{ts_str(r["education"])}',
      criminalCases: {r["criminal"]},
      assets: '{ts_str(r["assets"] or "Uplabdh nahi")}',
      liabilities: '{ts_str(r["liabilities"] or "Uplabdh nahi")}',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id={r["candidate_id"]}',
    }},
    electionNote: '2024 me {ts_str(cname)} Lok Sabha se jeete.',
  }},""")
    consts.append(
f"""  {{ slug: '{cslug}', name: '{ts_str(cname)}', type: 'Lok Sabha', number: null, district: '', reservation: '{res}' }},""")

out = """// AUTO-GENERATED by scripts/gen_mp_ts.py from myneta.info (LokSabha2024)
// 47 Maharashtra MPs (Palghar MP lives in pilot.ts). Background = ECI affidavit via myneta.info.
import type { Neta, Constituency } from './pilot';

export const mpNetas: Neta[] = [
""" + "\n".join(netas) + "\n];\n\nexport const mpConstituencies: Constituency[] = [\n" + "\n".join(consts) + "\n];\n"

open(os.path.join(BASE, "src", "data", "mp.ts"), "w").write(out)
print("wrote mp.ts:", len(netas), "MPs,", len(consts), "constituencies")
print("unknown parties:", sorted(unknown))

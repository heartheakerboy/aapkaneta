#!/usr/bin/env python3
"""Generate src/data/tamilnadu_mp.ts (39 LS) and src/data/tamilnadu_rs.ts (18 RS).

LS backgrounds: .myneta-cache/tn_ls/tn_ls.json (myneta.info/LokSabha2024, verified 2026-10-15).
LS PC numbers: ~/workspace/aapkaneta_scratch/tn_ls_rs.json (child-B research, verified Oct 2026).
RS: scripts/.myneta-cache/tn_rs/tn_rs_combined.json (research + myneta rajsab09aff).
Slug collisions: suffix '-tn' if slug already exists in repo.
"""
import json, re, os

BASE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(BASE)
SCRATCH = os.path.expanduser("~/workspace/aapkaneta_scratch")

PARTY_MAP = {
    "DMK": ("DMK", "Dravida Munnetra Kazhagam"),
    "AIADMK": ("AIADMK", "All India Anna Dravida Munnetra Kazhagam"),
    "INC": ("INC", "Indian National Congress"),
    "PMK": ("PMK", "Pattali Makkal Katchi"),
    "VCK": ("VCK", "Viduthalai Chiruthaigal Katchi"),
    "CPI(M)": ("CPI(M)", "Communist Party of India (Marxist)"),
    "CPI": ("CPI", "Communist Party of India"),
    "MDMK": ("MDMK", "Marumalarchi Dravida Munnetra Kazhagam"),
    "IUML": ("IUML", "Indian Union Muslim League"),
    "DMDK": ("DMDK", "Desiya Murpokku Dravida Kazhagam"),
    "MNM": ("MNM", "Makkal Needhi Maiam"),
    "BJP": ("BJP", "Bharatiya Janata Party"),
    "AMMK": ("AMMK", "Amma Makkal Munnettra Kazagam"),
    "TVK": ("TVK", "Tamilaga Vettri Kazhagam"),
}

existing = set()
for f in os.listdir(os.path.join(ROOT, "src", "data")):
    if f.endswith(".ts"):
        for m in re.finditer(r"slug:\s*'([^']+)'", open(os.path.join(ROOT, "src", "data", f), encoding="utf-8").read()):
            existing.add(m.group(1))

def slugify(name):
    s = name.lower()
    s = re.sub(r"^(thiru\.?|dr\.?|captain|smt\.?|shri\.?)\s+", "", s)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    base = s
    i = 2
    while s in existing:
        s = f"{base}-tn" if i == 2 else f"{base}-tn-{i}"
        i += 1
    existing.add(s)
    return s

def esc(s):
    return s.replace("\\", "\\\\").replace("'", "\\'")

def pc_slug(pc_name):
    s = pc_name.lower()
    s = re.sub(r"\s*\(sc\)\s*", "", s).replace("(", "").replace(")", "")
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-") + "-lok-sabha"

def norm(s):
    return re.sub(r"[^A-Z]", "", s.upper())

# ---------------- LS ----------------
research_ls = json.load(open(os.path.join(SCRATCH, "tn_ls_rs.json")))["ls"]
PC_FIX = {"TIRUVALLURSC": "THIRUVALLURSC"}  # myneta single-L vs official double-L
pc_num = {}
for r in research_ls:
    k = norm(r["seat"])
    k = PC_FIX.get(k, k)
    pc_num[k] = r["number"]

ls_data = json.load(open(os.path.join(ROOT, ".myneta-cache", "tn_ls", "tn_ls.json")))
ls_records = []
missing_pc = []
for r in ls_data:
    key = norm(r["constituency_raw"])
    key = PC_FIX.get(key, key)
    num = pc_num.get(key)
    if not num:
        missing_pc.append(r["constituency_raw"])
        continue
    short, full = PARTY_MAP.get(r["party_short"], (r["party_short"], r["party_short"]))
    pc_disp = next(x["seat"] for x in research_ls if x["number"] == num)
    slug = slugify(r["name"])
    cslug = pc_slug(pc_disp)
    ls_records.append((num, f"""{{
    slug: '{slug}',
    name: '{esc(r["name"])}',
    party: '{full}',
    partyShort: '{short}',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Tamil Nadu',
    constituency: '{esc(pc_disp)} (Lok Sabha)',
    constituencySlug: '{cslug}',
    tenures: [
      {{ post: 'MP', constituency: '{esc(pc_disp)} (Lok Sabha)', constituencySlug: '{cslug}', party: '{full}', start: '2024', end: '2029' }},
    ],
    works: [],
    fund: {{
      scheme: 'MPLADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'MPLADS fund ka record e-SAKSHI portal par uplabdh hai; jald joda jayega.',
    }},
    background: {{
      age: '{r["age"]}',
      education: '{esc(r["education"])}',
      criminalCases: {r["criminal"]},
      assets: '{r["assets"]}',
      liabilities: '{r["liabilities"]}',
      mynetaUrl: '{r["myneta_url"]}',
      backgroundNote: '',
    }},
    electionNote: '2024 me {esc(pc_disp)} Lok Sabha se {short} ke ticket par jeete.',
  }}"""))
ls_records.sort(key=lambda x: x[0])

mp_ts = """// Tamil Nadu foundation — 39 Lok Sabha MPs (2024 chunav, karyakaal 2024–2029; Oct 2026 tak koi badlav nahi).
// Background data = ECI affidavit via myneta.info/LokSabha2024 (verified 2026-10-15).
// PC numbers: ECI Delimitation Order 2008 kram (Thiruvallur=1 ... Kanniyakumari=39).
import type { Neta, Constituency } from './pilot';

export const tamilNaduMpNetas: Neta[] = [
""" + ",\n".join(r[1] for r in ls_records) + "\n];\n"

# PC -> primary district (kshetra page ke "jila" link ke liye; Kerala pattern)
PC_DISTRICT = {
    1: "Thiruvallur", 2: "Chennai", 3: "Chennai", 4: "Chennai", 5: "Kancheepuram",
    6: "Kancheepuram", 7: "Ranipet", 8: "Vellore", 9: "Krishnagiri", 10: "Dharmapuri",
    11: "Tiruvannamalai", 12: "Tiruvannamalai", 13: "Viluppuram", 14: "Kallakurichi",
    15: "Salem", 16: "Namakkal", 17: "Erode", 18: "Tiruppur", 19: "Nilgiris",
    20: "Coimbatore", 21: "Coimbatore", 22: "Dindigul", 23: "Karur", 24: "Tiruchirappalli",
    25: "Perambalur", 26: "Cuddalore", 27: "Cuddalore", 28: "Mayiladuthurai",
    29: "Nagapattinam", 30: "Thanjavur", 31: "Sivaganga", 32: "Madurai", 33: "Theni",
    34: "Virudhunagar", 35: "Ramanathapuram", 36: "Thoothukudi", 37: "Tenkasi",
    38: "Tirunelveli", 39: "Kanniyakumari",
}
mp_consts = []
for r in research_ls:
    num = r["number"]
    seat = r["seat"]
    res = "SC" if "(SC)" in seat else "—"
    name = seat.replace(" (SC)", "").replace(" (ST)", "")
    cslug = pc_slug(seat)
    mp_consts.append(
        f"  {{ slug: '{cslug}', name: '{esc(name)}', type: 'Lok Sabha', number: {num}, district: '{PC_DISTRICT[num]}', reservation: '{res}', state: 'Tamil Nadu' }},"
    )
mp_ts += "\nexport const tamilNaduMpConstituencies: Constituency[] = [\n" + "\n".join(mp_consts) + "\n];\n"
open(os.path.join(ROOT, "src", "data", "tamilnadu_mp.ts"), "w").write(mp_ts)
print("LS:", len(ls_records), "missing pc:", missing_pc, "| MP consts:", len(mp_consts))

# ---------------- RS ----------------
rs_combined = json.load(open(os.path.join(BASE, ".myneta-cache", "tn_rs", "tn_rs_combined.json")))
rs_records = []
for item in rs_combined:
    r = item["research"]
    b = item["background"]
    short, full = PARTY_MAP.get(r["party_short"], (r["party_short"], r["party_short"]))
    name = r["name"].split(" (alias")[0].strip()
    slug = slugify(name)
    start = r["term_start"][:4]
    end = r["term_end"][:4]
    note = r.get("note", "")
    rs_records.append(f"""{{
    slug: '{slug}',
    name: '{esc(name)}',
    party: '{full}',
    partyShort: '{short}',
    post: 'MP',
    house: 'Rajya Sabha',
    state: 'Tamil Nadu',
    constituency: 'Tamil Nadu (Rajya Sabha)',
    constituencySlug: 'tamil-nadu-rajya-sabha',
    tenures: [
      {{ post: 'MP', constituency: 'Tamil Nadu (Rajya Sabha)', constituencySlug: 'tamil-nadu-rajya-sabha', party: '{full}', start: '{start}', end: '{end}' }},
    ],
    works: [],
    fund: null,
    background: {{
      age: '{b["age"]}',
      education: '{esc(b["education"])}',
      criminalCases: {b["criminalCases"]},
      assets: '{b["assets"]}',
      liabilities: '{b["liabilities"]}',
      mynetaUrl: '{b["mynetaUrl"]}',
      backgroundNote: '',
    }},
    electionNote: 'Tamil Nadu se Rajya Sabha ke sadasya (karyakaal {start}–{end}). {esc(note)}',
  }}""")

rs_ts = """// Tamil Nadu foundation — 18 Rajya Sabha MPs (vartaman sthiti Oct 2026 tak, srot-verified).
// Background data = myneta.info Rajya Sabha section (verified 2026-10-15).
// 2025 biennial (shapath 25 Jul 2025) aur 2026 biennial (karyakaal 3 Apr 2026 se) ke parinaam shamil.
import type { Neta } from './pilot';

export const tamilNaduRsNetas: Neta[] = [
""" + ",\n".join(rs_records) + "\n];\n"
open(os.path.join(ROOT, "src", "data", "tamilnadu_rs.ts"), "w").write(rs_ts)
print("RS:", len(rs_records))

#!/usr/bin/env python3
"""Convert .myneta-cache/up/{mp,rs}.json -> src/data/up_mp.ts, src/data/up_rs.ts
Adapted from scripts/gen_rajasthan_ts.py (MP/RS sections) for Uttar Pradesh.
Named gen_up_mp_rs_ts.py so it does not clash with the sibling UP-MLA worker's
gen_up_ts.py (parallel runs write different files)."""
import glob
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "up")
DATA = os.path.join(BASE, "src", "data")


def slugify(name):
    s0 = name.lower()
    base = re.sub(r"[^a-z0-9]+", "-", s0).strip("-")
    return base


def ts_str(s):
    return (s or "").replace("\\", "\\\\").replace("'", "\\'")


PARTY_MAP = {
    "BJP": ("BJP", "Bharatiya Janata Party"),
    "BHARATIYA JANATA PARTY": ("BJP", "Bharatiya Janata Party"),
    "SP": ("SP", "Samajwadi Party"),
    "SAMAJWADI PARTY": ("SP", "Samajwadi Party"),
    "INC": ("INC", "Indian National Congress"),
    "INDIAN NATIONAL CONGRESS": ("INC", "Indian National Congress"),
    "RLD": ("RLD", "Rashtriya Lok Dal"),
    "RASHTRIYA LOK DAL": ("RLD", "Rashtriya Lok Dal"),
    "BSP": ("BSP", "Bahujan Samaj Party"),
    "BAHUJAN SAMAJ PARTY": ("BSP", "Bahujan Samaj Party"),
    "AD(S)": ("AD(S)", "Apna Dal (Sonelal)"),
    "APNA DAL (SONEYLAL)": ("AD(S)", "Apna Dal (Sonelal)"),
    "APNA DAL (SONELAL)": ("AD(S)", "Apna Dal (Sonelal)"),
    "ASPKR": ("ASPKR", "Aazad Samaj Party (Kanshi Ram)"),
    "AAZAD SAMAJ PARTY (KANSHI RAM)": ("ASPKR", "Aazad Samaj Party (Kanshi Ram)"),
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


# ---- existing neta slugs across src/data/*.ts (collision guard) ----
existing_slugs = set()
for f in glob.glob(os.path.join(DATA, "*.ts")):
    try:
        txt = open(f, encoding="utf-8", errors="replace").read()
    except Exception:
        continue
    for m in re.finditer(r"slug:\s*'([^']+)'", txt):
        existing_slugs.add(m.group(1))
print("existing slugs in src/data/*.ts:", len(existing_slugs))


def unique_nslug(base, seen, suffix):
    nslug = base
    if nslug in existing_slugs or nslug in seen:
        nslug = base + suffix
    k = 2
    while nslug in existing_slugs or nslug in seen:
        nslug = f"{base}{suffix}-{k}"
        k += 1
    return nslug


# ============ 1. Lok Sabha MPs ============
mpdata = json.load(open(os.path.join(CACHE, "mp.json")))
print("MP records:", len(mpdata))
mnetas, mconsts = [], []
seen_slugs, seen_cslugs = set(), set()
collisions = []
unknown_parties = set()
for r in mpdata:
    craw = r["constituency_raw"]
    res = "SC" if "(SC)" in craw else ("ST" if "(ST)" in craw else "—")
    pc_raw = re.sub(r"\s*\(S[CT]\)\s*", "", craw).strip().title()
    cslug = slugify(pc_raw) + "-lok-sabha"
    if cslug in seen_cslugs or cslug in existing_slugs:
        cslug = cslug + "-2"
    seen_cslugs.add(cslug)
    short, full = party_of(r["party_short"])
    if (r["party_short"] or "").upper().strip() not in PARTY_MAP:
        unknown_parties.add(r["party_short"])
    const_label = f"{pc_raw} (Lok Sabha)"
    nslug = unique_nslug(slugify(r["name"]), seen_slugs, "-mp")
    if nslug != slugify(r["name"]):
        collisions.append(("mp", r["name"], nslug))
    seen_slugs.add(nslug)
    murl = f"https://myneta.info/LokSabha2024/candidate.php?candidate_id={r['candidate_id']}"
    mnetas.append(
f"""  {{
    slug: '{nslug}',
    name: '{ts_str(r["name"])}',
    party: '{ts_str(full)}',
    partyShort: '{ts_str(short)}',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Uttar Pradesh',
    constituency: '{ts_str(const_label)}',
    constituencySlug: '{cslug}',
    tenures: [
      {{ post: 'MP', constituency: '{ts_str(const_label)}', constituencySlug: '{cslug}', party: '{ts_str(full)}', start: '2024', end: '2029' }},
    ],
    works: [],
    fund: {{
      scheme: 'MPLADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'MPLADS fund ka record e-SAKSHI portal par uplabdh hai; jald joda jayega.',
    }},
{bg_block(r, murl)}
    electionNote: '2024 me {ts_str(pc_raw)} Lok Sabha se jeete.',
  }},""")
    mconsts.append(
f"""  {{ slug: '{cslug}', name: '{ts_str(pc_raw)}', type: 'Lok Sabha', number: null, district: '', reservation: '{res}', state: 'Uttar Pradesh' }},""")

out = f"""// AUTO-GENERATED by scripts/gen_up_mp_rs_ts.py from myneta.info (LokSabha2024)
// {len(mnetas)} Uttar Pradesh MPs. Background data = ECI affidavit via myneta.info.
import type {{ Neta, Constituency }} from './pilot';

export const upMpNetas: Neta[] = [
""" + "\n".join(mnetas) + "\n];\n\nexport const upMpConstituencies: Constituency[] = [\n" + "\n".join(mconsts) + "\n];\n"
open(os.path.join(DATA, "up_mp.ts"), "w").write(out)
print("wrote up_mp.ts:", len(mnetas), "MPs")
print("unknown parties (MP):", sorted(unknown_parties))

# ============ 2. Rajya Sabha MPs ============
rsdata = json.load(open(os.path.join(CACHE, "rs.json")))
print("RS records:", len(rsdata))
rnetas = []
seen_slugs = set()
for r in rsdata:
    short, full = party_of(r["party_short"])
    nslug = unique_nslug(slugify(r["name"]), seen_slugs, "-rs")
    if nslug != slugify(r["name"]):
        collisions.append(("rs", r["name"], nslug))
    seen_slugs.add(nslug)
    edu = r.get("education") or ""
    bg = {
        "age": r.get("age", ""), "education": edu, "criminal": r.get("criminal", 0),
        "assets": r.get("assets") or "Uplabdh nahi", "liabilities": r.get("liabilities") or "Uplabdh nahi",
    }
    how = "nirvirodh chune gaye" if r["term_start"] == "2026" else "chune gaye"
    rnetas.append(
f"""  {{
    slug: '{nslug}',
    name: '{ts_str(r["name"])}',
    party: '{ts_str(full)}',
    partyShort: '{ts_str(short)}',
    post: 'MP',
    house: 'Rajya Sabha',
    state: 'Uttar Pradesh',
    constituency: 'Uttar Pradesh (Rajya Sabha)',
    constituencySlug: 'uttar-pradesh-rajya-sabha',
    tenures: [
      {{ post: 'MP', constituency: 'Uttar Pradesh (Rajya Sabha)', constituencySlug: 'uttar-pradesh-rajya-sabha', party: '{ts_str(full)}', start: '{r["term_start"]}', end: '{r["term_end"]}' }},
    ],
    works: [],
    fund: null,
{bg_block(bg, r["myneta_url"])}
    electionNote: '{r["term_start"]} me Uttar Pradesh se Rajya Sabha ke liye {how} (karyakal {r["term_start"]}–{r["term_end"]}).',
  }},""")

out = f"""// AUTO-GENERATED by scripts/gen_up_mp_rs_ts.py from myneta.info (rajsab09aff)
// {len(rnetas)} Uttar Pradesh Rajya Sabha MPs (verified Oct 2026: 2022-2028 / 2024-2030 / 2026-2032 batches).
// Background data = ECI affidavit via myneta.info.
import type {{ Neta }} from './pilot';

export const upRsNetas: Neta[] = [
""" + "\n".join(rnetas) + "\n];\n\nexport const upRsConstituencies = [\n  { slug: 'uttar-pradesh-rajya-sabha', name: 'Uttar Pradesh (Rajya Sabha)', type: 'Rajya Sabha' as const, number: null, district: 'Uttar Pradesh', reservation: '', state: 'Uttar Pradesh' },\n];\n"
open(os.path.join(DATA, "up_rs.ts"), "w").write(out)
print("wrote up_rs.ts:", len(rnetas), "RS MPs")

print("slug collisions resolved:", len(collisions))
for c in collisions:
    print("  COLLISION:", c)

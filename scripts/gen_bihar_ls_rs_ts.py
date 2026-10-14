#!/usr/bin/env python3
"""Convert .myneta-cache/bihar_ls/bihar_ls.json -> src/data/bihar_mp.ts
and .myneta-cache/bihar_rs/bihar_rs.json -> src/data/bihar_rs.ts
(40 Bihar Lok Sabha MPs 2024; 16 Bihar Rajya Sabha MPs).
Adapted from scripts/gen_mp_ls_rs_ts.py.
NOTE: exports biharMpNetas / biharRsNetas.
Collision suffix: '-bihar'.
Skips whichever input JSON is missing (partial generation allowed).
"""
import glob
import json
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LS_CACHE = os.path.join(BASE, ".myneta-cache", "bihar_ls")
RS_CACHE = os.path.join(BASE, ".myneta-cache", "bihar_rs")
DATA = os.path.join(BASE, "src", "data")
LS_PATH = os.path.join(LS_CACHE, "bihar_ls.json")
RS_PATH = os.path.join(RS_CACHE, "bihar_rs.json")


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
    "CPI(ML)(L)": ("CPI(ML)L", "Communist Party of India (Marxist-Leninist) Liberation"),
    "CPI(ML)L": ("CPI(ML)L", "Communist Party of India (Marxist-Leninist) Liberation"),
    "CPI": ("CPI", "Communist Party of India"),
    "COMMUNIST PARTY OF INDIA": ("CPI", "Communist Party of India"),
    "AIMIM": ("AIMIM", "All India Majlis-e-Ittehadul Muslimeen"),
    "BSP": ("BSP", "Bahujan Samaj Party"),
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
    if os.path.basename(f) in ("bihar.ts", "bihar_mp.ts", "bihar_rs.ts", "works_bihar.ts"):
        continue
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


collisions = []


def gen_ls():
    """Lok Sabha MPs -> src/data/bihar_mp.ts"""
    mpdata = json.load(open(LS_PATH))
    print("MP records:", len(mpdata))
    mnetas, mconsts = [], []
    seen_slugs, seen_cslugs = set(), set()
    unknown_parties = set()
    for r in mpdata:
        craw = r["constituency_raw"]
        res = "SC" if "(SC)" in craw else ("ST" if "(ST)" in craw else "—")
        pc_raw = re.sub(r"\s*\(S[CT]\)\s*", "", craw).strip().title()
        cslug = slugify(pc_raw) + "-lok-sabha"
        if cslug in seen_cslugs or cslug in existing_slugs:
            cslug = cslug + "-bihar"
        seen_cslugs.add(cslug)
        short, full = party_of(r["party_short"])
        if (r["party_short"] or "").upper().strip() not in PARTY_MAP:
            unknown_parties.add(r["party_short"])
        const_label = f"{pc_raw} (Lok Sabha)"
        nslug = unique_nslug(slugify(r["name"]), seen_slugs, "-bihar")
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
    state: 'Bihar',
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
f"""  {{ slug: '{cslug}', name: '{ts_str(pc_raw)}', type: 'Lok Sabha', number: null, district: '', reservation: '{res}', state: 'Bihar' }},""")

    out = f"""// AUTO-GENERATED by scripts/gen_bihar_ls_rs_ts.py from myneta.info (LokSabha2024)
// {len(mnetas)} Bihar MPs. Background data = ECI affidavit via myneta.info.
import type {{ Neta, Constituency }} from './pilot';

export const biharMpNetas: Neta[] = [
""" + "\n".join(mnetas) + "\n];\n\nexport const biharMpConstituencies: Constituency[] = [\n" + "\n".join(mconsts) + "\n];\n"
    open(os.path.join(DATA, "bihar_mp.ts"), "w").write(out)
    print("wrote bihar_mp.ts:", len(mnetas), "MPs")
    print("unknown parties (MP):", sorted(unknown_parties))
    from collections import Counter
    print("party tally:", Counter(r["party_short"] for r in mpdata))


def gen_rs():
    """Rajya Sabha MPs -> src/data/bihar_rs.ts"""
    rsdata = json.load(open(RS_PATH))
    print("RS records:", len(rsdata))
    rnetas = []
    seen_slugs = set()
    for r in rsdata:
        short, full = party_of(r["party_short"])
        nslug = unique_nslug(slugify(r["name"]), seen_slugs, "-bihar")
        if nslug != slugify(r["name"]):
            collisions.append(("rs", r["name"], nslug))
        seen_slugs.add(nslug)
        edu = r.get("education") or ""
        bg = {
            "age": r.get("age", ""), "education": edu, "criminal": r.get("criminal", 0),
            "assets": r.get("assets") or "Uplabdh nahi", "liabilities": r.get("liabilities") or "Uplabdh nahi",
        }
        enote = r.get("election_note") or f"{r['term_start']} me Bihar se Rajya Sabha ke liye chune gaye (karyakal {r['term_start']}–{r['term_end']})."
        rnetas.append(
f"""  {{
    slug: '{nslug}',
    name: '{ts_str(r["name"])}',
    party: '{ts_str(full)}',
    partyShort: '{ts_str(short)}',
    post: 'MP',
    house: 'Rajya Sabha',
    state: 'Bihar',
    constituency: 'Bihar (Rajya Sabha)',
    constituencySlug: 'bihar-rajya-sabha',
    tenures: [
      {{ post: 'MP', constituency: 'Bihar (Rajya Sabha)', constituencySlug: 'bihar-rajya-sabha', party: '{ts_str(full)}', start: '{r["term_start"]}', end: '{r["term_end"]}' }},
    ],
    works: [],
    fund: null,
{bg_block(bg, r["myneta_url"])}
    electionNote: '{ts_str(enote)}',
  }},""")

    out = f"""// AUTO-GENERATED by scripts/gen_bihar_ls_rs_ts.py from myneta.info (rajsab09aff)
// {len(rnetas)} Bihar Rajya Sabha MPs (terms verified Oct 2026).
// Background data = ECI affidavit via myneta.info.
import type {{ Neta }} from './pilot';

export const biharRsNetas: Neta[] = [
""" + "\n".join(rnetas) + "\n];\n\nexport const biharRsConstituencies = [\n  { slug: 'bihar-rajya-sabha', name: 'Bihar (Rajya Sabha)', type: 'Rajya Sabha' as const, number: null, district: 'Bihar', reservation: '', state: 'Bihar' },\n];\n"
    open(os.path.join(DATA, "bihar_rs.ts"), "w").write(out)
    print("wrote bihar_rs.ts:", len(rnetas), "RS MPs")


do_ls = os.path.exists(LS_PATH)
do_rs = os.path.exists(RS_PATH)
if not do_ls and not do_rs:
    print("neither bihar_ls.json nor bihar_rs.json found; nothing to do")
    sys.exit(1)
if do_ls:
    gen_ls()
else:
    print("SKIP: bihar_ls.json not found yet")
if do_rs:
    gen_rs()
else:
    print("SKIP: bihar_rs.json not found yet")
print("slug collisions resolved:", len(collisions))
for c in collisions:
    print("  COLLISION:", c)

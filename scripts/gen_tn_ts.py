#!/usr/bin/env python3
"""Convert .myneta-cache/tn_mla/tn_mla.json -> src/data/tamilnadu.ts
(234 Tamil Nadu MLAs, Apr/May 2026 assembly election = 17th Tamil Nadu VS).
Background data = ECI affidavit via myneta.info/tamilnadu2026 (verified).
Adapted from scripts/gen_bihar_ts.py.
NOTE: exports are tamilNaduNetas / tamilNaduConstituencies.
Collision suffix: '-tn'.
Pending backgrounds follow the Goa pattern: age '', education '', criminalCases -1
(UNKNOWN, never claim 0), assets/liabilities '—', BACKGROUND_PENDING note.
"""
import glob
import json
import os
import re
from collections import Counter

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "tn_mla")

# Filled from tn_assembly_facts.json after research; null-safe defaults.
FACTS_PATH = os.path.join(BASE, "..", "aapkaneta_scratch", "tn_assembly_facts.json")
try:
    FACTS = json.load(open(os.path.normpath(FACTS_PATH), encoding="utf-8"))
except Exception:
    FACTS = {}


def slugify(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def ts_str(s):
    return (s or "").replace("\\", "\\\\").replace("'", "\\'")


PARTY_MAP = {
    "TVK": ("TVK", "Tamilaga Vettri Kazhagam"),
    "TAMILAGA VETTRI KAZHAGAM": ("TVK", "Tamilaga Vettri Kazhagam"),
    "DMK": ("DMK", "Dravida Munnetra Kazhagam"),
    "DRAVIDA MUNNETRA KAZHAGAM": ("DMK", "Dravida Munnetra Kazhagam"),
    "AIADMK": ("AIADMK", "All India Anna Dravida Munnetra Kazhagam"),
    "ALL INDIA ANNA DRAVIDA MUNNETRA KAZHAGAM": ("AIADMK", "All India Anna Dravida Munnetra Kazhagam"),
    "INC": ("INC", "Indian National Congress"),
    "INDIAN NATIONAL CONGRESS": ("INC", "Indian National Congress"),
    "PMK": ("PMK", "Pattali Makkal Katchi"),
    "PATTALI MAKKAL KATCHI": ("PMK", "Pattali Makkal Katchi"),
    "IUML": ("IUML", "Indian Union Muslim League"),
    "INDIAN UNION MUSLIM LEAGUE": ("IUML", "Indian Union Muslim League"),
    "CPI": ("CPI", "Communist Party of India"),
    "COMMUNIST PARTY OF INDIA": ("CPI", "Communist Party of India"),
    "VCK": ("VCK", "Viduthalai Chiruthaigal Katchi"),
    "VIDUTHALAI CHIRUTHAIGAL KATCHI": ("VCK", "Viduthalai Chiruthaigal Katchi"),
    "CPM": ("CPI(M)", "Communist Party of India (Marxist)"),
    "CPI(M)": ("CPI(M)", "Communist Party of India (Marxist)"),
    "COMMUNIST PARTY OF INDIA (MARXIST)": ("CPI(M)", "Communist Party of India (Marxist)"),
    "BJP": ("BJP", "Bharatiya Janata Party"),
    "BHARATIYA JANATA PARTY": ("BJP", "Bharatiya Janata Party"),
    "DMDK": ("DMDK", "Desiya Murpokku Dravida Kazhagam"),
    "DESIYA MURPOKKU DRAVIDA KAZHAGAM": ("DMDK", "Desiya Murpokku Dravida Kazhagam"),
    "AMMK": ("AMMK", "Amma Makkal Munnettra Kazagam"),
    "AMMA MAKKAL MUNNETTRA KAZAGAM": ("AMMK", "Amma Makkal Munnettra Kazagam"),
    "AMMA MAKKAL MUNNETTRA KAZHAGAM": ("AMMK", "Amma Makkal Munnettra Kazagam"),
    "MDMK": ("MDMK", "Marumalarchi Dravida Munnetra Kazhagam"),
    "MARUMALARCHI DRAVIDA MUNNETRA KAZHAGAM": ("MDMK", "Marumalarchi Dravida Munnetra Kazhagam"),
    "NTK": ("NTK", "Naam Tamilar Katchi"),
    "NAAM TAMILAR KATCHI": ("NTK", "Naam Tamilar Katchi"),
    "IND": ("IND", "Independent"),
    "INDEPENDENT": ("IND", "Independent"),
}


def party_of(short):
    pkey = (short or "").upper().strip()
    return PARTY_MAP.get(pkey, (short or "IND", short or "Independent"))


def bg_block(r, myneta_url):
    """Background block. Pending -> Goa pattern (never claim 0 cases)."""
    if not myneta_url:
        src = r.get("background_note_src") or "myneta.info/tamilnadu2026 par inka candidate page nahi khula"
        return (
            "    background: {\n"
            "      age: '',\n"
            "      education: '',\n"
            "      criminalCases: -1,\n"
            "      assets: '\u2014',\n"
            "      liabilities: '\u2014',\n"
            "      mynetaUrl: '',\n"
            f"      backgroundNote: 'BACKGROUND_PENDING: {ts_str(src)} ({ts_str(r.get('name',''))}, {ts_str(r.get('constituency',''))}); age/education/criminalCases/assets/liabilities verify nahi \u2014 criminalCases ka -1 AGYAAT hai (0 pusht nahi).',\n"
            "    },"
        )
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
        "      backgroundNote: '',\n"
        "    },"
    )


# ---- Oct 2026 verified political facts (tn_assembly_facts.json, child-A research) ----
# VACANT SEATS (5) — in par record NAHI banega (Goa pattern):
#   194 Tiruchirappalli East — C. Joseph Vijay ne 10 May 2026 ko istifa diya (Perambur barkarar)
#   103 Perundurai — S. Jayakumar (AIADMK) ne 25 May 2026 ko istifa dekar TVK join kiya
#   225 Ambasamudram — Esakki Subaya (AIADMK) ne 26 May 2026 ko istifa dekar TVK join kiya
#   179 Viralimalai — C. Vijayabaskar (AIADMK) ne Jun 2026 me istifa dekar TVK join kiya
#   135 Karur — M. R. Vijayabhaskar (AIADMK) ne Jun 2026 me istifa dekar TVK join kiya
# In 5 seats par upchunav baki hai. Constituency list me seats rahengi, neta records nahi.
VACANT_AC = {
    141: "C. Joseph Vijay ne do seat jeetne ke baad 10 May 2026 ko Tiruchirappalli East se istifa diya (Perambur barkarar rakhi); upchunav baki.",
    103: "S. Jayakumar (AIADMK) ne 25 May 2026 ko istifa dekar TVK join kiya; upchunav baki.",
    225: "Esakki Subaya (AIADMK) ne 26 May 2026 ko istifa dekar TVK join kiya; upchunav baki.",
    179: "C. Vijayabaskar (AIADMK) ne Jun 2026 me istifa dekar TVK join kiya; upchunav baki.",
    135: "M. R. Vijayabhaskar (AIADMK) ne Jun 2026 me istifa dekar TVK join kiya; upchunav baki.",
}
# BYE-ELECTION WINNERS (9 Oct 2026, matdan 6 Oct 2026) — wahi vyakti, nayi party (TVK):
#   35 Madurantakam (SC) — K. Maragatham Kumaravel (AIADMK se jeeti thi May 2026 me, istifa dekar TVK join kiya, upchunav TVK se jeeta)
#   101 Dharapuram (SC) — P. Sathyabama (AIADMK se jeeti thi May 2026 me, istifa dekar TVK join kiya, upchunav TVK se jeeta)
BYE_WINNERS = {
    35: ("TVK", "Tamilaga Vettri Kazhagam",
         "May 2026 me AIADMK ke ticket par jeeti thi; istifa dekar TVK me shamil hui aur 9 Oct 2026 ke upchunav me TVK ke ticket par phir jeeti."),
    101: ("TVK", "Tamilaga Vettri Kazhagam",
          "May 2026 me AIADMK ke ticket par jeeti thi; istifa dekar TVK me shamil hui aur 9 Oct 2026 ke upchunav me TVK ke ticket par phir jeeti."),
}

# existing slugs across all state files -> '-tn' suffix on collision
existing = set()
for f in glob.glob(os.path.join(BASE, "src", "data", "*.ts")):
    if os.path.basename(f) in ("tamilnadu.ts", "tamilnadu_mp.ts", "tamilnadu_rs.ts", "works_tamilnadu.ts"):
        continue
    txt = open(f, encoding="utf-8").read()
    existing.update(re.findall(r"slug:\s*'([^']+)'", txt))
print("existing slugs in other states:", len(existing))

data = json.load(open(os.path.join(CACHE, "tn_mla.json")))
print("MLA records:", len(data))

# ---- special cases ----
# CM / Speaker notes applied by matching slug after generation.
CM_SLUG_HINT = (FACTS.get("cm_name") or "vijay").lower()
SPEAKER_NAME = (FACTS.get("speaker_name") or "").lower()
VIJAY_RETAINED = (FACTS.get("vijay_retained_seat") or "").lower()

netas, consts = [], []
seen_c, seen_n = set(), set()
unknown_parties = set()
collisions = []
missing = 0
bye_recs = []

# Separate bye-election records (if any) from main records
main_data = [r for r in data if not r.get("bye_election")]
bye_data = [r for r in data if r.get("bye_election")]
print("main:", len(main_data), "| bye:", len(bye_data))

for r in sorted(main_data, key=lambda x: x["number"] or 999):
    cname = re.sub(r"\s*\([Ss][CcTt]\)\s*", "", r["constituency"]).strip()  # myneta label me "(Sc)" hota hai
    cslug = slugify(cname)
    if cslug in existing or cslug in seen_c:
        cslug = f"{cslug}-tn"
        collisions.append(("const", r["constituency"]))
    seen_c.add(cslug)

    short, full = party_of(r["party_short"])
    if (r["party_short"] or "").upper().strip() not in PARTY_MAP:
        unknown_parties.add(r["party_short"])
    res = "ST" if r["reservation"] == "ST" else ("SC" if r["reservation"] == "SC" else "\u2014")
    const_label = f"{cname} ({res})" if res != "\u2014" else cname

    # constituency entry always (vacant seats included — Goa pattern)
    consts.append(
        f"  {{ slug: '{cslug}', name: '{ts_str(cname)}', type: 'Vidhan Sabha', number: {r['number'] or 'null'}, district: '{ts_str(r['district'])}', reservation: '{res}', state: 'Tamil Nadu' }},"
    )

    # vacant seat -> no neta record
    if r["number"] in VACANT_AC:
        continue

    # bye-election winner override (same person, new party TVK)
    enote_extra = ""
    if r["number"] in BYE_WINNERS:
        short, full, enote_extra = BYE_WINNERS[r["number"]]

    nslug = slugify(r["name"])
    if nslug in existing or nslug in seen_n or nslug in seen_c:
        nslug2 = f"{nslug}-tn"
        if nslug2 in existing or nslug2 in seen_n or nslug2 in seen_c:
            nslug2 = f"{nslug}-tn-{r['number']}"
        nslug = nslug2
        collisions.append(("neta", r["name"]))
    seen_n.add(nslug)

    site = r.get("site") or "https://myneta.info/tamilnadu2026"
    murl = f"{site}/candidate.php?candidate_id={r['candidate_id']}" if r.get("candidate_id") and r.get("assets") else ""
    if not murl:
        missing += 1

    enote = f"2026 me {ts_str(cname)} se {ts_str(short)} ke ticket par jeete."
    if short == "IND":
        enote = f"2026 me {ts_str(cname)} se nirdaliya ummidwar ke roop me jeete."
    if enote_extra:
        enote = enote_extra
    # Vijay: won Perambur + Tiruchirappalli East; retained Perambur
    is_vijay = r["number"] == 12 and "vijay" in r["name"].lower()
    if is_vijay:
        enote = ("2026 me Perambur aur Tiruchirappalli East — dono seats se TVK ke ticket par jeete; "
                 "Perambur barkarar rakhi, Tiruchirappalli East se 10 May 2026 ko istifa diya. "
                 "10 May 2026 ko Tamil Nadu ke mukhyamantri bane (17vi Vidhan Sabha).")
    netas.append(
        f"""  {{
    slug: '{nslug}',
    name: '{ts_str(r["name"])}',
    party: '{ts_str(full)}',
    partyShort: '{ts_str(short)}',
    post: 'MLA',
    state: 'Tamil Nadu',
    constituency: '{ts_str(const_label)}',
    constituencySlug: '{cslug}',
    tenures: [
      {{ post: 'MLA', constituency: '{ts_str(const_label)}', constituencySlug: '{cslug}', party: '{ts_str(full)}', start: '2026', end: '2031' }},
    ],
    works: [],
    fund: {{
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Tamil Nadu me MLA fund (MLALADS) ka record online uplabdh nahi hai. RTI se data manga jayega.',
    }},
{bg_block(r, murl)}
    electionNote: '{enote}',
  }},"""
    )

# Speaker special note (J. C. D. Prabhakar — Thousand Lights, TVK)
if SPEAKER_NAME:
    sp_slug = slugify(SPEAKER_NAME)
    for i, n in enumerate(netas):
        if f"slug: '{sp_slug}'" in n:
            netas[i] = n.replace(
                "electionNote: '",
                "electionNote: '2026 me chunav jeetne ke baad Vidhan Sabha ke Speaker bane. ",
                1,
            )
            break

header = f"""// AUTO-GENERATED by scripts/gen_tn_ts.py from myneta.info (tamilnadu2026)
// 17vi Tamil Nadu Vidhan Sabha — 234 seats (matdan 23 Apr 2026, parinaam 4 May 2026, karyakaal 2026–2031).
// CM: C. Joseph Vijay (TVK), shapath 10 May 2026, Nehru Stadium Chennai | Speaker: J. C. D. Prabhakar (12 May 2026)
// Deputy Speaker: M. Ravisankar | LoP: Udhayanidhi Stalin (DMK) | Governor: Rajendra Vishwanath Arlekar.
// Oct 2026 party-sthiti: TVK 109, DMK 59, AIADMK 41, INC 5, PMK 4, CPI 2, CPI(M) 2, VCK 2, IUML 2, DMDK 1, BJP 1, AMMK 1, Rikt 5.
// 5 RIKT seats (record nahi): Tiruchirappalli East (Vijay ka istifa), Perundurai, Ambasamudram, Viralimalai, Karur (4 AIADMK vidhayakon ka istifa+TVK join).
// 2 upchunav (9 Oct 2026): Madurantakam (SC) aur Dharapuram (SC) — dono TVK ne jeete (wahi vyakti, AIADMK se TVK).
// Background data = ECI affidavit via myneta.info/tamilnadu2026 (verified 2026-10-15).
import type {{ Neta, Constituency }} from './pilot';

export const tamilNaduNetas: Neta[] = [
"""
out = header + "\n".join(netas) + "\n];\n\nexport const tamilNaduConstituencies: Constituency[] = [\n" + "\n".join(consts) + "\n];\n"
open(os.path.join(BASE, "src", "data", "tamilnadu.ts"), "w").write(out)
print("wrote tamilnadu.ts:", len(netas), "netas")
print("unknown parties:", sorted(unknown_parties))
print("missing backgrounds:", missing)
print("slug collisions (-tn):", len(collisions))
for c in collisions:
    print("  ", c)
print("party tally:", Counter(n.split("partyShort: '")[1].split("'")[0] for n in netas))

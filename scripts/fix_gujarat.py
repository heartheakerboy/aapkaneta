#!/usr/bin/env python3
"""Fix up .myneta-cache/gujarat/gujarat.json:
1. Add 4 retried records (Viramgam full parse; Vejalpur/Rajkot West/Akota assets).
2. Apply name aliases for unmatched constituencies.
3. Replace 2022 records with bye-election winners for 10 ACs; add Visavadar/Umreth manually.
Output: .myneta-cache/gujarat/gujarat-fixed.json"""
import json
import os
import re

CACHE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), ".myneta-cache", "gujarat")
data = json.load(open(os.path.join(CACHE, "gujarat.json")))
aclist = json.load(open(os.path.join(CACHE, "ac-list.json")))
ac_by_norm = {}
for a in aclist:
    k = re.sub(r"\s+", " ", re.sub(r"\s*\(S[CT]\)\s*", "", a["name"].upper())).strip()
    ac_by_norm[k] = a

def norm(s):
    s = s.upper()
    s = re.sub(r"\s*\(S[CT]\)\s*", "", s)
    return re.sub(r"\s+", " ", s).strip()

# ---- 1. Viramgam full parse ----
h = open(os.path.join(CACHE, "cand-546.html"), encoding="utf-8").read()
m = re.search(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a><b>&nbsp;?\s*&nbsp;?<font[^>]*>\s*Winner", h)
cand_id, name = m.group(1), m.group(2).strip()
tstart = h.rfind("<tr>", 0, m.start()); tend = h.find("</tr>", m.end())
cells = [re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", c)).strip()
         for c in re.findall(r"<td[^>]*>(.*?)</td>", h[tstart:tend], re.S)]
party = cells[2]
crim_m = re.search(r"(\d+)", cells[3]); criminal = int(crim_m.group(1)) if crim_m else 0
edu = cells[4]
age = re.search(r"(\d+)", cells[5]).group(1) if re.search(r"(\d+)", cells[5]) else ""
wh = open(os.path.join(CACHE, f"winner-{cand_id}.html"), encoding="utf-8").read()
am = re.search(r"Assets:\s*</td><td>\s*<b>Rs&nbsp;([0-9,]+)</b>", wh)
lm = re.search(r"Liabilities:\s*</td><td>\s*<b>Rs&nbsp;([0-9,]+)</b>", wh)
viramgam = {"myneta_const_id": "546", "constituency_raw": "VIRAMGAM",
            "constituency": "Viramgam", "number": 35, "district": "Ahmedabad",
            "reservation": "None", "ls": "Surendranagar",
            "candidate_id": cand_id, "name": name, "party_short": party,
            "age": age, "education": edu, "criminal": criminal,
            "assets": ("Rs " + am.group(1)) if am else None,
            "liabilities": ("Rs " + lm.group(1)) if lm else None}
data.append(viramgam)
print("added Viramgam:", name, party)

# ---- 2. assets update for 3 retried winner pages ----
for cid, acname in (("6235", "VEJALPUR"), ("5008", "RAJKOT WEST"), ("6034", "AKOTA")):
    wh = open(os.path.join(CACHE, f"winner-{cid}.html"), encoding="utf-8").read()
    am = re.search(r"Assets:\s*</td><td>\s*<b>Rs&nbsp;([0-9,]+)</b>", wh)
    lm = re.search(r"Liabilities:\s*</td><td>\s*<b>Rs&nbsp;([0-9,]+)</b>", wh)
    for r in data:
        if r["candidate_id"] == cid:
            r["assets"] = ("Rs " + am.group(1)) if am else None
            r["liabilities"] = ("Rs " + lm.group(1)) if lm else None
            print("updated assets:", acname, r["assets"])

# ---- 3. aliases for unmatched ----
ALIASES = {
    "JAMALPUR-KHADIA": "JAMALPUR-KHADIYA",
    "DEVGADHBARIA": "DEVGADHBARIYA",
    "KHAMBHALIA": "KHAMBHALIYA",
    "JHAGADIA": "JHAGADIYA",
    "BECHARAJI": "BECHRAJI",
    "UDHNA": "UDHANA",
    "LIMBDI": "LIMDI",
    "VAGHODIA": "VAGHODIYA",
    "RAJKOT SOUTH": "RAJKOT SOUTH-",
    "DHRANGADHRA": "DHANGADHRA",
    "BANSDA": "VANSDA",
    "MAHUVA": None,  # resolved by district below
    "MANGROL": None,
    "MANDVI": None,
    "JETPUR": None,
    "KALOL-GANDHINAGAR": None,
    "KALOL-PANCHMAHALS": None,
}
# district-based disambiguation (from myneta accordion district)
AMBIG = {
    ("MAHUVA", "Bhavnagar"): "Mahuva (Bhavnagar)",
    ("MAHUVA", "Surat"): "Mahuva (Surat)",
    ("MANGROL", "Junagadh"): "Mangrol (Junagadh)",
    ("MANGROL", "Surat"): "Mangrol (Surat)",
    ("MANDVI", "Kachchh"): "Mandvi (Kachchh)",
    ("MANDVI", "Surat"): "Mandvi (Surat)",
    ("JETPUR", "Rajkot"): "Jetpur (Rajkot)",
    ("JETPUR", "Chhota Udepur"): "Jetpur (Chhota Udaipur)",
    ("KALOL-GANDHINAGAR", "Gandhinagar"): "Kalol (Gandhinagar)",
    ("KALOL-PANCHMAHALS", "Panchmahals"): "Kalol (Panchmahal)",
}
for r in data:
    if "BYE ELECTION" in r["constituency_raw"]:
        continue
    key = norm(r["constituency_raw"])
    if key not in ac_by_norm:
        if key in ALIASES and ALIASES[key]:
            key = ALIASES[key]
        elif (key, r["district"]) in AMBIG:
            key = norm(AMBIG[(key, r["district"])])
    ac = ac_by_norm.get(key)
    if ac:
        r["_ac"] = ac
    else:
        print("STILL UNMATCHED:", r["constituency_raw"])

# ---- 4. bye-elections: drop 2022 records, normalize bye records ----
BYE_ACS = ["KHAMBHAT", "VAV", "MANAVADAR", "KADI (SC)", "VIJAPUR",
           "PORBANDAR", "MANJALPUR", "VAGHODIA", "VISAVADAR", "UMRETH"]
BYE_INFO = {
    "KHAMBHAT": ("2024-05-07", "May 2024 ke upchunav me jeete (INC se BJP me aane ke baad)."),
    "VAV": ("2024-11-13", "November 2024 ke upchunav me jeete."),
    "MANAVADAR": ("2024-05-07", "May 2024 ke upchunav me jeete (INC se BJP me aane ke baad)."),
    "KADI (SC)": ("2025-06-19", "June 2025 ke upchunav me jeete (Karsan Solanki ke nidhan ke baad)."),
    "VIJAPUR": ("2024-05-07", "May 2024 ke upchunav me jeete (INC se BJP me aane ke baad)."),
    "PORBANDAR": ("2024-05-07", "May 2024 ke upchunav me jeete (INC se BJP me aane ke baad)."),
    "MANJALPUR": ("2026-07-30", "July 2026 ke upchunav me jeete."),
    "VAGHODIA": ("2024-05-07", "May 2024 ke upchunav me jeete (BJP me shamil hone ke baad)."),
}
fixed = []
bye_seen = set()
for r in data:
    raw = r["constituency_raw"]
    if "BYE ELECTION" in raw:
        base = raw.split(" : ")[0]
        bye_seen.add(base)
        bkey = norm(base)
        bkey = ALIASES.get(bkey, bkey)
        ac = ac_by_norm.get(bkey)
        assert ac, base
        r["constituency"] = ac["name"]
        r["number"] = ac["number"]
        r["district"] = ac["district"].replace("DevbhoomiDwarka", "Devbhoomi Dwarka")
        r["reservation"] = ac["reservation"]
        r["ls"] = ac["ls"]
        r["_ac"] = ac
        bdate, bnote = BYE_INFO[base]
        r["bye_date"] = bdate
        r["bye_note"] = bnote
        fixed.append(r)
    elif norm(raw) in [norm(b) for b in BYE_ACS] or raw in BYE_ACS:
        print("dropping 2022 record:", raw, "|", r["name"])
        continue
    else:
        ac = r.get("_ac") or ac_by_norm.get(norm(raw))
        if ac:
            r["constituency"] = ac["name"]
            r["number"] = ac["number"]
            r["district"] = ac["district"].replace("DevbhoomiDwarka", "Devbhoomi Dwarka")
            r["reservation"] = ac["reservation"]
            r["ls"] = ac["ls"]
        fixed.append(r)

# ---- 5b. three winner-page-retried ACs (never made it into gujarat.json) ----
RETRIED = [
    ("549", "VEJALPUR"),
    ("439", "RAJKOT WEST"),
    ("600", "AKOTA"),
]
for cid, raw in RETRIED:
    h = open(os.path.join(CACHE, f"cand-{cid}.html"), encoding="utf-8").read()
    m = re.search(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a><b>&nbsp;?\s*&nbsp;?<font[^>]*>\s*Winner", h)
    cand_id, name = m.group(1), m.group(2).strip()
    tstart = h.rfind("<tr>", 0, m.start()); tend = h.find("</tr>", m.end())
    cells = [re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", c)).strip()
             for c in re.findall(r"<td[^>]*>(.*?)</td>", h[tstart:tend], re.S)]
    party = cells[2]
    crm = re.search(r"(\d+)", cells[3]); criminal = int(crm.group(1)) if crm else 0
    edu = cells[4]
    age = re.search(r"(\d+)", cells[5]).group(1) if re.search(r"(\d+)", cells[5]) else ""
    wh = open(os.path.join(CACHE, f"winner-{cand_id}.html"), encoding="utf-8").read()
    am = re.search(r"Assets:\s*</td><td>\s*<b>Rs&nbsp;([0-9,]+)</b>", wh)
    lm = re.search(r"Liabilities:\s*</td><td>\s*<b>Rs&nbsp;([0-9,]+)</b>", wh)
    ac = ac_by_norm[norm(raw)]
    fixed.append({
        "myneta_const_id": cid, "constituency_raw": raw,
        "constituency": ac["name"], "number": ac["number"],
        "district": ac["district"].replace("DevbhoomiDwarka", "Devbhoomi Dwarka"),
        "reservation": ac["reservation"], "ls": ac["ls"],
        "candidate_id": cand_id, "name": name, "party_short": party,
        "age": age, "education": edu, "criminal": criminal,
        "assets": ("Rs " + am.group(1)) if am else None,
        "liabilities": ("Rs " + lm.group(1)) if lm else None,
    })
    print("added retried:", raw, name)

# ---- 6. Visavadar (Gopal Italia, AAP) + Umreth (Harshad Parmar, BJP) manual ----
vis_ac = ac_by_norm[norm("VISAVADAR")]
fixed.append({
    "myneta_const_id": "616-bye", "constituency_raw": "VISAVADAR",
    "constituency": vis_ac["name"], "number": vis_ac["number"],
    "district": vis_ac["district"], "reservation": vis_ac["reservation"], "ls": vis_ac["ls"],
    "candidate_id": "5095", "name": "Gopalbhai Gordhanbhai Italia", "party_short": "AAP",
    "age": "34", "education": "Graduate", "criminal": 19,
    "assets": "Rs 10,15,079", "liabilities": "Rs 0",
    "bye_date": "2025-06-19",
    "bye_note": "June 2025 ke upchunav me jeete (17,554 voton se). Halafnama 2022 ke Katargam chunav ka hai.",
})
umr_ac = ac_by_norm[norm("UMRETH")]
fixed.append({
    "myneta_const_id": "617-bye", "constituency_raw": "UMRETH",
    "constituency": umr_ac["name"], "number": umr_ac["number"],
    "district": umr_ac["district"], "reservation": umr_ac["reservation"], "ls": umr_ac["ls"],
    "candidate_id": "", "name": "Harshad Parmar", "party_short": "BJP",
    "age": "", "education": "", "criminal": 0,
    "assets": None, "liabilities": None,
    "background_missing": True,
    "bye_date": "2026-04-23",
    "bye_note": "April 2026 ke upchunav me jeete (pita Govind Parmar ke nidhan ke baad, 30,743 voton se). Halafnama ka record myneta.info par uplabdh nahi tha; jald joda jayega.",
})

# dedupe check by AC number
nums = [r["number"] for r in fixed]
have = set(nums)
missing = [a for a in aclist if a["number"] not in have]
print("records:", len(fixed), "unique:", len(set(nums)))
for a in missing:
    print("MISSING AC:", a["number"], a["name"], a["district"])
json.dump(fixed, open(os.path.join(CACHE, "gujarat-fixed.json"), "w"), ensure_ascii=False, indent=1)

# party summary
from collections import Counter
print("parties:", dict(Counter(r["party_short"] for r in fixed)))
print("missing background:", sum(1 for r in fixed if r.get("background_missing")))
print("missing assets:", sum(1 for r in fixed if not r.get("assets")))

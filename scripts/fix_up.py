#!/usr/bin/env python3
"""Fix up .myneta-cache/up/up.json:
1. Replace main records with bye-election winners for 20 ACs (2022-2025);
   set bye_date (poll date from myneta's "BYE ELECTION ON DD-MM-YYYY").
2. Drop the separate bye-election pseudo-records.
3. Re-attach Wikipedia AC metadata (number/district/reservation/ls) with aliases
   for any unmatched names.
Output: .myneta-cache/up/up-fixed.json"""
import json
import os
import re

CACHE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), ".myneta-cache", "up")
data = json.load(open(os.path.join(CACHE, "up.json")))
aclist = json.load(open(os.path.join(CACHE, "ac-list.json")))
ac_by_norm = {}
for a in aclist:
    k = re.sub(r"\s+", " ", re.sub(r"\s*\(S[CT]\)\s*", "", a["name"].upper())).strip()
    ac_by_norm[k] = a


def norm(s):
    s = s.upper()
    s = re.sub(r"\s*\(S[CT]\)\s*", "", s)
    s = re.sub(r"\s*:\s*BYE ELECTION ON.*$", "", s)
    return re.sub(r"\s+", " ", s).strip()


# expected bye ACs (myneta norm-name) -> poll date; None = parsed from raw string
BYES = {
    "GOLA GOKRANNATH": None,
    "KHATAULI": None,
    "RAMPUR": None,
    "CHHANBEY": None,
    "SUAR": None,
    "GHOSI": None,
    "DADRAUL": None,
    "LUCKNOW EAST": None,
    "GAINSARI": None,
    "DUDDHI": None,
    "KHAIR": None,
    "KATEHARI": None,
    "GHAZIABAD": None,
    "SISHAMAU": None,
    "KARHAL": None,
    "MAJHAWAN": None,
    "KUNDARKI": None,
    "MEERAPUR": None,
    "PHULPUR": None,
    "MILKIPUR": None,
}


def bye_date_from_raw(raw):
    m = re.search(r"BYE ELECTION ON (\d{2})-(\d{2})-(\d{4})", raw.upper())
    assert m, f"no bye date in {raw}"
    return f"{m.group(3)}-{m.group(2)}-{m.group(1)}"


ALIASES = {
    # myneta spelling -> Wikipedia AC-list spelling (norm'd keys)
    "JAGDISHPUR": "JAGDISHPUR",
    "PHOOLPUR-PAWAI": "PHOOLPUR PAWAI",
    "BAGHPAT": "BAGPAT",
    "MODI NAGAR": "MODINAGAR",
    "GHAZIPUR": "GHAZIPUR SADAR",
    "DHOLANA": "DHAULANA",
    "MADHAUGARH": "MADHOGARH",
    "GOVINDNAGAR": "GOVIND NAGAR",
    "KANPUR CANTT.": "KANPUR CANTONMENT",
    "LUCKNOW CANTT.": "LUCKNOW CANTONMENT",
    "PANIYRA": "PANIYARA",
    "BILARI": "BILARI",
    "MUZAFFAR NAGAR": "MUZAFFARNAGAR",
    "VISHWANATH GANJ": "VISHWANATHGANJ",
    "ALLAHABAD NORTH": "PRAYAGRAJ NORTH",
    "ALLAHABAD SOUTH": "PRAYAGRAJ SOUTH",
    "ALLAHABAD WEST": "PRAYAGRAJ WEST",
    "BANGERMAU": "BANGARMAU",
}

bye_winners = {}
mains = []
for r in data:
    raw = (r.get("constituency_raw") or "").strip()
    if "BYE ELECTION" in raw.upper():
        key = norm(raw)
        assert key in BYES, f"unexpected bye AC: {raw}"
        bye_winners[key] = r
        continue
    mains.append(r)

print("bye winner records:", len(bye_winners), sorted(bye_winners))
print("main records:", len(mains))
assert len(bye_winners) == 20, f"expected 20 bye records, got {len(bye_winners)}"
assert set(bye_winners) == set(BYES), f"bye set mismatch: {set(BYES) ^ set(bye_winners)}"

out = []
applied = 0
for r in mains:
    raw_name = r.get("constituency_raw") or ""
    key = ALIASES.get(norm(raw_name), norm(raw_name))
    ac = ac_by_norm.get(key)
    if not ac:
        print("STILL UNMATCHED:", r.get("myneta_const_id"), r.get("constituency_raw"))
        continue
    if key in BYES:
        bw = bye_winners.get(key)
        assert bw, f"no bye record for {key}"
        for f in ("site", "candidate_id", "name", "party_short", "age", "education",
                  "criminal", "assets", "liabilities"):
            r[f] = bw.get(f)
        r["bye_date"] = bye_date_from_raw(bw["constituency_raw"])
        applied += 1
        print(f"bye applied: {key} -> {r['name']} ({r['party_short']}) [{r['bye_date']}]")
    r["constituency"] = ac["name"]
    r["number"] = ac["number"]
    r["district"] = ac["district"]
    r["reservation"] = ac["reservation"]
    r["ls"] = ac["ls"]
    r.pop("unmatched", None)
    out.append(r)

print("final:", len(out), "| bye substitutions:", applied)
assert len(out) == 403, f"expected 403, got {len(out)}"
json.dump(out, open(os.path.join(CACHE, "up-fixed.json"), "w"), ensure_ascii=False, indent=1)

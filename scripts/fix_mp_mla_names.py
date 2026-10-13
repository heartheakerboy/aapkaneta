#!/usr/bin/env python3
"""Fix the 16 name-mismatch ACs in mp_mla.json via myneta->wikipedia alias map.
Reuses cached wiki-ac-list.html (no new fetches). Updates number/reservation
in place and re-verifies reservation vs myneta (SC)/(ST) label."""
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "mp_mla")

ALIASES = {
    "BADWANI": "BARWANI",
    "SENDHWA": "SENDHAWA",
    "CHURAI": "CHOURAI",
    "DR.AMBEDKAR NAGAR -MHOW": "DR. AMBEDKAR NAGAR-MHOW",
    "JABALPUR CANTT.": "JABALPUR CANTONMENT",
    "JABALPUR PASCHIM": "JABALPUR WEST",
    "JABALPUR PURBA": "JABALPUR EAST",
    "JABALPUR UTTAR": "JABALPUR NORTH",
    "MANDSOUR": "MANDSAUR",
    "JAURA": "JOURA",
    "SABALAGADH": "SABALGARH",
    "HOSHANGABAD": "NARMADAPURAM",
    "JAISINGHNAGAR": "JAISINGNAGAR",
    "NAGADA-KHACHROD": "NAGDA-KHACHROD",
    "UJJAIN DAKSHIN": "UJJAIN SOUTH",
    "UJJAIN UTTAR": "UJJAIN NORTH",
}


def norm(s):
    s = s.upper()
    s = re.sub(r"\s*\(S[CT]\)\s*", "", s)
    s = re.sub(r"\s*:\s*BYE ELECTION.*$", "", s)
    return re.sub(r"\s+", " ", s).strip()


def clean(c):
    c = re.sub(r"<[^>]+>", " ", c)
    c = re.sub(r"\[[0-9]+\]", " ", c)
    return re.sub(r"\s+", " ", c).strip()


# re-parse wikipedia from cache
wiki = open(os.path.join(CACHE, "wiki-ac-list.html"), encoding="utf-8").read()
tables = list(re.finditer(r'<table[^>]*class="[^"]*wikitable[^"]*"[^>]*>', wiki))
body = None
for tm in tables:
    end = wiki.find("</table>", tm.start())
    if end - tm.start() > 50000:
        body = wiki[tm.start():end]
        break
rows = re.findall(r"<tr[^>]*>(.*?)</tr>", body, re.S)
acs = {}
active = {}
for r in rows:
    for c in list(active):
        active[c][0] -= 1
        if active[c][0] <= 0:
            del active[c]
    cells = re.findall(r"<t[dh]([^>]*)>(.*?)</t[dh]>", r, re.S)
    row = {}
    col = 0
    for attrs, content in cells:
        while col in active:
            row[col] = active[col][1]
            col += 1
        v = clean(content)
        row[col] = v
        rm = re.search(r'rowspan="(\d+)"', attrs)
        rs = int(rm.group(1)) if rm else 1
        if rs > 1:
            active[col] = [rs, v]
        col += 1
    while col in active:
        row[col] = active[col][1]
        col += 1
    if not str(row.get(0, "")).isdigit():
        continue
    num = int(row[0])
    if num < 1 or num > 230:
        continue
    res = row.get(2, "")
    res = "SC" if res == "SC" else "ST" if res == "ST" else "None"
    acs[norm(row.get(1, ""))] = (num, res)

p = os.path.join(CACHE, "mp_mla.json")
records = json.load(open(p, encoding="utf-8"))
fixed, still_bad = 0, []
seen_nums = {}
for rec in records:
    if rec.get("unmatched"):
        key = norm(rec["constituency_raw"])
        alias = ALIASES.get(key)
        ac = acs.get(alias) if alias else None
        if ac:
            rec["number"] = ac[0]
            rec["reservation"] = ac[1]
            rec["unmatched"] = False
            rec["wikipedia_name"] = alias.title()
            fixed += 1
            mres = "ST" if re.search(r"\(ST\)", rec["constituency_raw"], re.I) else "SC" if re.search(r"\(SC\)", rec["constituency_raw"], re.I) else "None"
            if mres != ac[1]:
                print("  RES MISMATCH:", rec["constituency_raw"], "wiki=", ac[1], "myneta=", mres)
        else:
            still_bad.append(rec["constituency_raw"])
    n = rec.get("number")
    if n:
        seen_nums.setdefault(n, []).append(rec["constituency_raw"])
json.dump(records, open(p, "w"), ensure_ascii=False, indent=1)
print("fixed:", fixed, "| still unmatched:", still_bad)
dupes = {n: v for n, v in seen_nums.items() if len(v) > 1}
print("duplicate AC numbers:", dupes)
from collections import Counter
print("records:", len(records))
print("party tally:", Counter(r["party_short"] for r in records))
print("reservation tally:", Counter(r["reservation"] for r in records))
print("bye_election records:", [(r["number"], r["name"], r["party_short"]) for r in records if r.get("bye_election")])
print("numbers missing:", [n for n in range(1, 231) if n not in seen_nums])

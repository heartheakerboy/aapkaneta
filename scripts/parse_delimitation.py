#!/usr/bin/env python3
"""Parse CEO Maharashtra delimitation notification TABLE-A (AC extent) and TABLE-B (PC composition).
Output: .myneta-cache/geo.json"""
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache")
lines = open(os.path.join(CACHE, "delimitation.txt"), encoding="utf-8").read().split("\n")

start = next(i for i, l in enumerate(lines) if "TABLE" in l and re.search(r"['\u2018\u2019]A['\u2018\u2019]", l))
end = next(i for i, l in enumerate(lines) if "TABLE" in l and re.search(r"['\u2018\u2019]B['\u2018\u2019]", l))
body = lines[start:end]

entries = []
cur = None
district = ""
for ln in body:
    if re.match(r"^\s*\d+\s*[–-]\s*DISTRICT\s+", ln):
        district = re.sub(r"^\s*\d+\s*[–-]\s*DISTRICT\s+", "", ln).strip().title()
        continue
    if re.match(r"^\s*SL NO", ln):
        continue
    m = re.match(r"^[\s\x0c]*(\d+)\s*[–-]\s*(.*)$", ln)
    if not m:
        m = re.match(r"^\x0c?(\d+)\.\s+(.*)$", ln)  # e.g. "92. Basmath" at col 0
    if m and int(m.group(1)) <= 288:
        if cur:
            entries.append(cur)
        num = int(m.group(1))
        rest = m.group(2)
        parts = re.split(r"\s{2,}", rest, maxsplit=1)
        name = parts[0].strip()
        extent = parts[1] if len(parts) > 1 else ""
        cur = [num, name, district, extent]
    elif cur and ln.strip():
        # continuation line: may start with wrapped NAME at col 0
        if (cur[1].endswith("–") or cur[1].endswith("-")) and re.match(r"^[A-Z]", ln):
            parts = re.split(r"\s{2,}", ln.strip(), maxsplit=1)
            cur[1] = (cur[1] + " " + parts[0]).replace("–", "-").strip(" -")
            if len(parts) > 1:
                cur[3] += " " + parts[1]
        else:
            cur[3] += " " + ln.strip()

if cur:
    entries.append(cur)

# Fix wrapped names: if name ends with '–' or '-', next extent chunk start may hold name rest.
# Detect: extent beginning with capitalized words before "1." / "Tehsil"
for e in entries:
    m = re.match(r"^([A-Z][A-Za-z\- ]+?)\s+1\.\s", e[3])
    if m and (e[1].endswith("–") or e[1].endswith("-")):
        e[1] = (e[1] + " " + m.group(1)).replace("–", "-").strip(" -")
        e[3] = e[3][m.end(1):].lstrip()

def clean_tehsil(t):
    t = re.sub(r"\s*\(Part\)\s*", "", t)
    t = re.sub(r"\s+", " ", t).strip()
    # "Kothrud Revenue Circle in Haveli" -> the tehsil is Haveli
    m = re.search(r"Revenue Circle in (.+)$", t)
    if m:
        t = m.group(1).strip()
    return t

consts = {}
for num, name, dist, extent in entries:
    cname = re.sub(r"\s*\((ST|SC|S\.T\.|S\.C\.)\)\s*$", "", name).strip()
    # extent sometimes embedded in name when column split failed (e.g. "285 - Palus-Kadegaon 1. Palus Tehsil")
    nm = re.search(r"\d+\.\s+[A-Z][A-Za-z\-() ]*Tehsil", name)
    if nm:
        extent = name[nm.start():] + " " + extent
        name = name[:nm.start()].strip()
    talukas = []
    for tm in re.finditer(r"([A-Z][A-Za-z.\-() ]+?)\s+Tehsil", extent):
        t = clean_tehsil(tm.group(1))
        if len(t) >= 2 and t not in talukas:
            talukas.append(t)
    consts[num] = {"name": cname, "district": dist, "talukas": talukas}

# TABLE-B: multi-line PC -> ACs
tB = lines[end:]
ac_to_pc = {}
cur_pc = None
for ln in tB:
    m = re.match(r"^\s*(\d+)\s*[.–-]\s*([A-Z][A-Za-z\-–() ]+?)\s{2,}(.*)$", ln)
    if m and int(m.group(1)) <= 48:
        cur_pc = m.group(2).strip()
        rest = m.group(3)
    elif cur_pc and re.match(r"^\s+\S", ln):
        rest = ln
    else:
        if re.match(r"^\s*\d+\s*[.–-]\s*[A-Z]", ln) and not m:
            cur_pc = None
        continue
    for am in re.finditer(r"(\d+)\s*[.]", rest):
        acn = int(am.group(1))
        if acn <= 288:
            ac_to_pc[acn] = cur_pc

json.dump({"constituencies": consts, "ac_to_pc": ac_to_pc},
          open(os.path.join(CACHE, "geo.json"), "w"), ensure_ascii=False, indent=1)
nums = sorted(consts.keys())
print("constituencies:", len(consts), "| missing:", [n for n in range(1, 289) if n not in nums][:20])
print("ac->pc:", len(ac_to_pc))
no_tal = sorted(n for n, c in consts.items() if not c["talukas"])
print("no talukas:", len(no_tal), no_tal[:12])
for n in [145, 146, 147, 176, 1]:
    print(n, consts.get(n, {}).get("name"), "->", consts.get(n, {}).get("talukas"))

#!/usr/bin/env python3
"""Scrape Maharashtra 2019 affidavits from myneta.info, match to 2024 winners.
Output: .myneta-cache/mh2019/match.json + src/data/prev_mha.ts
Be polite: ~1.2s delay between requests."""
import json
import os
import re
import time
import urllib.request
import gzip

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, "..", ".myneta-cache", "mh2019")
os.makedirs(CACHE, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}

def get(url, cache_name):
    p = os.path.join(CACHE, cache_name)
    if os.path.exists(p) and os.path.getsize(p) > 1000:
        return open(p, encoding="utf-8", errors="replace").read()
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    try:
        data = gzip.decompress(data)
    except Exception:
        pass
    html = data.decode("utf-8", errors="replace")
    open(p, "w", encoding="utf-8").write(html)
    time.sleep(1.2)
    return html

TITLES = {"SHRI", "SMT", "SHRIMATI", "DR", "ADV", "ADVOCATE", "LATE", "CAPT", "CAPTAIN",
          "COL", "COLONEL", "MAJ", "MAJOR", "ER", "ENGINEER", "SOW", "SHREEMATI", "KUMARI"}

def norm_name(s):
    s = s.upper()
    s = s.replace(".", " ")
    s = re.sub(r"\s*\(S[CT]\)\s*", " ", s)
    toks = [t for t in re.split(r"\s+", s.strip()) if t and t not in TITLES]
    return " ".join(toks)

def norm_ac(s):
    s = s.upper()
    s = re.sub(r"\s*\(S[CT]\)\s*", "", s)
    return re.sub(r"\s+", " ", s).strip()

def clean_money_cell(s):
    # "Rs&nbsp;10,42,16,455 ~ 10&nbsp;Crore+" -> "Rs 10,42,16,455"
    s = s.replace("&nbsp;", " ").replace("\xa0", " ")
    s = re.sub(r"\s+", " ", s).strip()
    m = re.search(r"Rs\s*([\d,]+)", s)
    if m:
        return "Rs " + m.group(1)
    if "nil" in s.lower():
        return "Rs 0"
    return None

def money_num(s):
    # "Rs 14,29,38,082" -> 142938082
    if not s:
        return 0
    d = re.sub(r"\D", "", s)
    return int(d) if d else 0

# ---- 1. 2019 index: AC -> constituency_id ----
print("parsing 2019 index...")
h = get("https://myneta.info/Maharashtra2019/", "index.html")
ac_map = {}  # norm_ac_name -> (const_id, raw_name, district)
for m in re.finditer(r">\s*([A-Z][A-Z ]+?)\s*<span class='w3-right'>", h):
    district = m.group(1).strip()
    seg = h[m.end():m.end() + 6000]
    seg = seg[: seg.find("handle_dropdown") if "handle_dropdown" in seg[:6000] else 6000]
    for cm in re.finditer(r"constituency_id=(\d+)[^>]*>([^<]+)</a>", seg):
        cid, cname = cm.group(1), cm.group(2).strip()
        if "ALL CONSTITUENCIES" in cname:
            continue
        ac_map[norm_ac(cname)] = (cid, cname, district.title())
print("2019 ACs:", len(ac_map))

# ---- 2. 2024 winners (MLA only) ----
w24 = json.load(open(os.path.join(CACHE, "winners2024.json")))
# filter: need post info — reload from maharashtra.ts/pilot.ts slugs
txt_mha = open(os.path.join(HERE, "..", "src", "data", "maharashtra.ts"), encoding="utf-8").read()
mla_slugs = set(re.findall(r"    slug: '([^']+)',\n    name: '[^']+',\n    party:", txt_mha))
winners = [w for w in w24 if w["slug"] in mla_slugs or w["cslug"] in
           {"dahanu", "vikramgad", "palghar", "boisar", "nalasopara", "vasai"}]
print("2024 MLAs:", len(winners))

# ---- 3. per AC: fetch list, match name ----
matched = []
unmatched = []  # (slug, name, cslug, reason)
all_candidates = {}  # norm_name -> [(cid, cand_id, ac_raw)]  for global fallback

def parse_list(html):
    cands = []
    for m in re.finditer(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a>", html):
        cid_, name = m.group(1), m.group(2).strip()
        tstart = html.rfind("<tr>", 0, m.start())
        tend = html.find("</tr>", m.end())
        row = html[tstart:tend]
        cells = [re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", c)).strip()
                 for c in re.findall(r"<td[^>]*>(.*?)</td>", row, re.S)]
        cands.append({"cand_id": cid_, "name": name, "cells": cells})
    return cands

ac_lists = {}  # norm_ac -> cands
for i, w in enumerate(winners):
    key = norm_ac(w["constituency"])
    if key not in ac_map:
        unmatched.append((w["slug"], w["name"], w["cslug"], "2019 AC mapping nahi mila: " + w["constituency"]))
        continue
    cid, craw, district = ac_map[key]
    if key not in ac_lists:
        try:
            html = get(f"https://myneta.info/Maharashtra2019/index.php?action=show_candidates&constituency_id={cid}",
                       f"list-{cid}.html")
            ac_lists[key] = parse_list(html)
        except Exception as e:
            unmatched.append((w["slug"], w["name"], w["cslug"], f"2019 list fetch fail: {str(e)[:60]}"))
            continue
    for c in ac_lists[key]:
        all_candidates.setdefault(norm_name(c["name"]), []).append((cid, c["cand_id"], craw))
    if (i + 1) % 60 == 0:
        print(f"  lists {i+1}/{len(winners)}")

print("lists cached:", len(ac_lists))

def near_miss(n2019_list, target):
    # same last token and same first token -> possible variation
    tt = target.split()
    out = []
    for c in n2019_list:
        ct = norm_name(c["name"]).split()
        if tt and ct and tt[0] == ct[0] and tt[-1] == ct[-1] and norm_name(c["name"]) != target:
            out.append(c["name"])
    return out

for w in winners:
    key = norm_ac(w["constituency"])
    if key not in ac_lists:
        continue  # already in unmatched
    target = norm_name(w["name"])
    hit = None
    for c in ac_lists[key]:
        if norm_name(c["name"]) == target:
            hit = c
            break
    if hit:
        matched.append((w, hit, ac_map[key]))
        continue
    # global fallback: same person, different AC in 2019?
    if target in all_candidates:
        locs = ", ".join(sorted(set(x[2].title() for x in all_candidates[target])))
        # fetch that AC's list to get full candidate record
        fcid, fcand, _ = all_candidates[target][0]
        html = get(f"https://myneta.info/Maharashtra2019/index.php?action=show_candidates&constituency_id={fcid}",
                   f"list-{fcid}.html")
        fc = [c for c in parse_list(html) if norm_name(c["name"]) == target]
        if fc:
            matched.append((w, fc[0], (fcid, locs, "")))
            continue
    nm = near_miss(ac_lists[key], target)
    if nm:
        unmatched.append((w["slug"], w["name"], w["cslug"],
                          "naam variation? 2019 me: " + "; ".join(nm[:3]) + " — manual review"))
    else:
        unmatched.append((w["slug"], w["name"], w["cslug"], "2019 me is kshetra se ummidwar nahi the"))

print("matched:", len(matched), "unmatched:", len(unmatched))

# ---- 4. candidate pages for matched ----
def parse_candidate(html):
    out = {}
    m = re.search(r"<b>Age:</b>\s*(\d+)", html)
    out["age"] = m.group(1) if m else ""
    m = re.search(r"Category:\s*([^<]+?)\s*<br>", html)
    out["education"] = m.group(1).strip() if m else ""
    m = re.search(r"Criminal Cases:\s*<span[^>]*>(\d+)</span>", html)
    out["criminalCases"] = int(m.group(1)) if m else 0
    m = re.search(r"<td>\s*Assets:\s*</td>\s*<td>\s*<b>Rs(?:&nbsp;|\s)*([\d,]+)</b>", html)
    out["assets"] = "Rs " + m.group(1) if m else "Rs 0"
    m = re.search(r"<td>\s*Liabilities:\s*</td>\s*<td>\s*<b>Rs(?:&nbsp;|\s)*([\d,]+)</b>", html)
    out["liabilities"] = "Rs " + m.group(1) if m else "Rs 0"
    return out

records = {}
parse_fails = []
for i, (w, hit, acinfo) in enumerate(matched):
    cid_ = hit["cand_id"]
    try:
        html = get(f"https://myneta.info/Maharashtra2019/candidate.php?candidate_id={cid_}",
                   f"cand-{cid_}.html")
        d = parse_candidate(html)
        # sanity: candidate page name should match
        if norm_name(w["name"]) not in norm_name(re.sub(r"<[^>]+>", " ", html[:3000])):
            # title check
            tm = re.search(r"<title>([^<\(]+)", html)
            if tm and norm_name(tm.group(1)) != norm_name(w["name"]):
                parse_fails.append((w["slug"], w["name"], "page title mismatch: " + tm.group(1)[:50]))
                continue
        records[w["slug"]] = {
            "year": "2019",
            "age": d["age"],
            "education": d["education"],
            "criminalCases": d["criminalCases"],
            "assets": d["assets"],
            "assetsNum": money_num(d["assets"]),
            "liabilities": d["liabilities"],
            "mynetaUrl": f"https://myneta.info/Maharashtra2019/candidate.php?candidate_id={cid_}",
            "_2019name": hit["name"],
            "_2019ac": acinfo[1],
        }
    except Exception as e:
        parse_fails.append((w["slug"], w["name"], str(e)[:80]))
    if (i + 1) % 40 == 0:
        print(f"  candidates {i+1}/{len(matched)}")

print("records:", len(records), "parse fails:", len(parse_fails))

# ---- 5. write outputs ----
def ts_str(s):
    return s.replace("\\", "\\\\").replace("'", "\\'")

lines = ["import type { PrevAffidavit } from './pilot';", "",
         "export const prevMha: Record<string, PrevAffidavit> = {"]
for slug in sorted(records):
    r = records[slug]
    lines.append(f"  '{slug}': {{")
    lines.append(f"    year: '2019',")
    lines.append(f"    age: '{ts_str(r['age'])}',")
    lines.append(f"    education: '{ts_str(r['education'])}',")
    lines.append(f"    criminalCases: {r['criminalCases']},")
    lines.append(f"    assets: '{ts_str(r['assets'])}',")
    lines.append(f"    assetsNum: {r['assetsNum']},")
    lines.append(f"    liabilities: '{ts_str(r['liabilities'])}',")
    lines.append(f"    mynetaUrl: '{r['mynetaUrl']}',")
    lines.append("  },")
lines.append("};")
open(os.path.join(HERE, "..", "src", "data", "prev_mha.ts"), "w", encoding="utf-8").write("\n".join(lines) + "\n")

report = {
    "matched": [{"slug": w["slug"], "name": w["name"], "c2019": hit["name"], "ac2019": acinfo[1],
                 "assets2019": records.get(w["slug"], {}).get("assets")}
                for (w, hit, acinfo) in matched],
    "unmatched": [{"slug": s, "name": n, "cslug": c, "reason": r} for (s, n, c, r) in unmatched],
    "parse_fails": [{"slug": s, "name": n, "reason": r} for (s, n, r) in parse_fails],
}
json.dump(report, open(os.path.join(CACHE, "match-report.json"), "w"), ensure_ascii=False, indent=1)
print("WROTE src/data/prev_mha.ts with", len(records), "records")
print("Unmatched reasons:")
from collections import Counter
print(Counter(r["reason"][:45] for r in report["unmatched"]))

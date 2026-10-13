#!/usr/bin/env python3
"""Round 2: Gujarat 2017 matching — aliases, token-set matching, bye-election fallback.
Reads .myneta-cache/guj2017/match-report.json (round 1), writes merged prev_guj.ts.
Be polite: ~1.2s delay. Only fetches candidate pages not already cached."""
import json
import os
import re
import time
import urllib.request
import gzip
import difflib

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, "..", ".myneta-cache", "guj2017")
BASE = "https://myneta.info/Gujarat2017"
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
          "COL", "COLONEL", "MAJ", "MAJOR", "ER", "ENGINEER", "SOW", "SHREEMATI", "KUMARI",
          "BHAI", "BHAISHRI"}

def norm_name(s):
    s = s.upper().replace(".", " ")
    s = re.sub(r"\s*\([^)]*\)", " ", s)
    return " ".join(t for t in re.split(r"\s+", s.strip()) if t and t not in TITLES)

def tokset(s):
    return tuple(sorted(norm_name(s).split()))

def norm_ac(s):
    s = s.upper()
    s = re.sub(r"\s*\([^)]*\)", "", s)
    s = re.sub(r"\s+", " ", s).strip().rstrip("-")
    return s

def money_num(s):
    d = re.sub(r"\D", "", s or "")
    return int(d) if d else 0

# ---- AC map: general preferred, bye fallback ----
h = get(BASE + "/", "index.html")
ac_general, ac_bye = {}, {}
btns = list(re.finditer(r"<button[^>]*>(.*?)</button>", h, re.S))
for bi, bm in enumerate(btns):
    district = re.sub(r"<[^>]+>", "", bm.group(1)).strip().title()
    seg_end = btns[bi + 1].start() if bi + 1 < len(btns) else len(h)
    for cm in re.finditer(r"constituency_id=(\d+)[^>]*>([^<]+)</a>", h[bm.end():seg_end]):
        cid, cname = cm.group(1), cm.group(2).strip()
        if "BYE ELECTION" in cname:
            ac_bye.setdefault(norm_ac(cname.split(":")[0]), []).append((cid, cname, district))
        else:
            ac_general.setdefault(norm_ac(cname), []).append((cid, cname, district))

ALIASES = {
    "BECHRAJI": "BECHARAJI",
    "DEVGADHBARIYA": "DEVGADHBARIA",
    "DHANGADHRA": "DHRANGADHRA",
    "JAMALPUR-KHADIYA": "JAMALPUR",
    "JHAGADIYA": "JHAGADIA",
    "KHAMBHALIYA": "KHAMBHALIA",
    "LIMDI": "LIMBDI",
    "UDHANA": "UDHNA",
    "VAGHODIYA": "VAGHODIA",
    # TALALA, VANSDA: genuinely absent from Gujarat2017 archive
}
KALOL_IDS = {"kalol-gandhinagar": "212", "kalol-panchmahal": "232"}

def ac_lookup(cslug_key, constituency):
    """Return list of (cid, cname, district, is_bye)."""
    key = norm_ac(constituency)
    if cslug_key in KALOL_IDS:
        cid = KALOL_IDS[cslug_key]
        for k, v in ac_general.items():
            for cid_, cname, d in v:
                if cid_ == cid:
                    return [(cid_, cname, d, False)]
    key = ALIASES.get(key, key)
    if key in ac_general:
        return [(cid_, cname, d, False) for cid_, cname, d in ac_general[key]]
    if key in ac_bye:
        return [(cid_, cname, d, True) for cid_, cname, d in ac_bye[key]]
    return []

# ---- 2022 winners + ages ----
txt = open(os.path.join(HERE, "..", "src", "data", "gujarat.ts"), encoding="utf-8").read()
winners, w2022age = [], {}
for m in re.finditer(
        r"slug: '([^']+)',\n    name: '([^']+)',\n    party: '[^']*',\n    partyShort: '[^']*',\n    post: 'MLA',",
        txt):
    slug, name = m.group(1), m.group(2)
    seg = txt[m.start():m.start() + 1200]
    cm = re.search(r"constituency: '([^']+)',", seg)
    winners.append({"slug": slug, "name": name, "constituency": cm.group(1) if cm else ""})
    am = re.search(r"age: '(\d+)'", seg)
    if am:
        w2022age[slug] = int(am.group(1))

rep = json.load(open(os.path.join(CACHE, "match-report.json")))
done_slugs = set(json.load(open(os.path.join(CACHE, "match-report.json")))["matched"] and
                 [m["slug"] for m in rep["matched"]])
# slugs already in prev_guj.ts
prev_txt = open(os.path.join(HERE, "..", "src", "data", "prev_guj.ts"), encoding="utf-8").read()
done_slugs |= set(re.findall(r"'([a-z0-9-]+)': \{", prev_txt))
print("already done:", len(done_slugs))

def parse_list(html):
    return [(m.group(1), m.group(2).strip())
            for m in re.finditer(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a>", html)]

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

def age_ok(slug, age2017):
    if not age2017 or slug not in w2022age:
        return True
    return 3 <= w2022age[slug] - int(age2017) <= 7

matched2, unmatched2, review = [], [], []
for w in winners:
    if w["slug"] in done_slugs:
        continue
    locs = ac_lookup(w["slug"], w["constituency"])
    if not locs:
        unmatched2.append((w, "2017 archive me is kshetra ka record nahi mila"))
        continue
    target_ts = tokset(w["name"])
    hit = None
    hit_bye = False
    for cid_, cname, district, is_bye in locs:
        html = get(f"{BASE}/index.php?action=show_candidates&constituency_id={cid_}", f"list-{cid_}.html")
        cands = parse_list(html)
        # pass 1: token-set exact
        for cand_id, cname_ in cands:
            if tokset(cname_) == target_ts:
                hit = (cand_id, cname_)
                hit_bye = is_bye
                break
        if hit:
            break
    if not hit:
        # pass 2: fuzzy — same token count, all-but-one exact, last pair ratio>0.85
        best = None
        for cid_, cname, district, is_bye in locs:
            html = get(f"{BASE}/index.php?action=show_candidates&constituency_id={cid_}", f"list-{cid_}.html")
            for cand_id, cname_ in parse_list(html):
                ct = tokset(cname_)
                if len(ct) != len(target_ts):
                    continue
                diffs = [(a, b) for a, b in zip(ct, target_ts) if a != b]
                if len(diffs) == 1 and difflib.SequenceMatcher(None, diffs[0][0], diffs[0][1]).ratio() > 0.85:
                    best = (cand_id, cname_, is_bye, cname)
        if best:
            review.append((w, best))
            continue
        unmatched2.append((w, "2017 me is kshetra se ummidwar nahi the"))
        continue
    # fetch candidate page + age check
    cand_id, cname_ = hit
    html = get(f"{BASE}/candidate.php?candidate_id={cand_id}", f"cand-{cand_id}.html")
    d = parse_candidate(html)
    tm = re.search(r"<title>([^<\(]+)", html)
    if tm and tokset(tm.group(1)) != target_ts:
        unmatched2.append((w, "page title mismatch: " + tm.group(1)[:50]))
        continue
    if not age_ok(w["slug"], d["age"]):
        unmatched2.append((w, f"age gap doubtful ({d['age']} vs 2022 {w2022age.get(w['slug'])}) — rejected"))
        continue
    matched2.append((w, cand_id, cname_, d, hit_bye))

print("round2 matched:", len(matched2), "| review queue:", len(review), "| unmatched:", len(unmatched2))

# ---- merge into prev_guj.ts ----
def ts_str(s):
    return (s or "").replace("\\", "\\\\").replace("'", "\\'")

existing = {}
for m in re.finditer(
        r"'([a-z0-9-]+)': \{\n    year: '2017',\n    age: '([^']*)',\n    education: '([^']*)',\n    criminalCases: (\d+),\n    assets: '([^']*)',\n    assetsNum: (\d+),\n    liabilities: '([^']*)',\n    mynetaUrl: '([^']*)',",
        prev_txt):
    existing[m.group(1)] = m.group(2, 3, 4, 5, 6, 7, 8)

for w, cand_id, cname_, d, is_bye in matched2:
    existing[w["slug"]] = (d["age"], d["education"], str(d["criminalCases"]), d["assets"],
                            str(money_num(d["assets"])), d["liabilities"],
                            f"{BASE}/candidate.php?candidate_id={cand_id}")

lines = ["import type { PrevAffidavit } from './pilot';", "",
         "export const prevGuj: Record<string, PrevAffidavit> = {"]
for slug in sorted(existing):
    age, edu, cc, assets, anum, liab, url = existing[slug]
    lines += [f"  '{slug}': {{", "    year: '2017',",
              f"    age: '{ts_str(age)}',", f"    education: '{ts_str(edu)}',",
              f"    criminalCases: {cc},", f"    assets: '{ts_str(assets)}',",
              f"    assetsNum: {anum},", f"    liabilities: '{ts_str(liab)}',",
              f"    mynetaUrl: '{url}',", "  },"]
lines.append("};")
open(os.path.join(HERE, "..", "src", "data", "prev_guj.ts"), "w", encoding="utf-8").write("\n".join(lines) + "\n")
print("WROTE prev_guj.ts with", len(existing), "records")

r2 = {
    "matched2": [{"slug": w["slug"], "name": w["name"], "c2017": cn, "bye": b} for w, _, cn, _, b in matched2],
    "review": [{"slug": w["slug"], "name": w["name"], "c2017": b[1], "bye": b[2], "ac": b[3]}
               for w, b in review],
    "unmatched2": [{"slug": w["slug"], "name": w["name"], "reason": r} for w, r in unmatched2],
}
json.dump(r2, open(os.path.join(CACHE, "match-report-r2.json"), "w"), ensure_ascii=False, indent=1)
print("\nREVIEW QUEUE (fuzzy, needs manual check):")
for w, b in review:
    print(f"  {w['slug']}: 2022 '{w['name']}'  vs  2017 '{b[1]}'  (bye={b[2]})")
print("\nUnmatched sample:")
from collections import Counter
print(Counter(r for _, r in unmatched2))

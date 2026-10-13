#!/usr/bin/env python3
"""Round 4: Gujarat 2017 — stripped-subset token matching for remaining unmatched.
Merges into prev_guj.ts. Polite: ~1.2s delay."""
import json
import os
import re
import time
import urllib.request
import gzip
import glob

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
SUFFIXES = ("KUMAR", "LAL", "BHAI", "BEN", "SINH", "JI", "BHAEE")

def strip_suffix(tok):
    for sfx in SUFFIXES:
        if len(tok) > len(sfx) + 2 and tok.endswith(sfx):
            return tok[: -len(sfx)]
    return tok

def toks(s):
    s = s.upper().replace(".", " ")
    s = re.sub(r"\s*\([^)]*\)", " ", s)
    return [t for t in re.split(r"\s+", s.strip()) if t and t not in TITLES]

def stoks(s):
    return tuple(sorted(strip_suffix(t) for t in toks(s)))

def norm_ac(s):
    s = s.upper()
    s = re.sub(r"\s*\([^)]*\)", "", s)
    return re.sub(r"\s+", " ", s).strip().rstrip("-")

def money_num(s):
    d = re.sub(r"\D", "", s or "")
    return int(d) if d else 0

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
    "BECHRAJI": "BECHARAJI", "DEVGADHBARIYA": "DEVGADHBARIA",
    "DHANGADHRA": "DHRANGADHRA", "JAMALPUR-KHADIYA": "JAMALPUR - KHADIA",
    "JHAGADIYA": "JHAGADIA", "KHAMBHALIYA": "KHAMBHALIA",
    "LIMDI": "LIMBDI", "UDHANA": "UDHNA", "VAGHODIYA": "VAGHODIA",
}
KALOL_IDS = {"kalol-gandhinagar": "212", "kalol-panchmahal": "232"}

def ac_lookup(cslug_key, constituency):
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

prev_txt = open(os.path.join(HERE, "..", "src", "data", "prev_guj.ts"), encoding="utf-8").read()
done = set(re.findall(r"'([a-z0-9-]+)': \{", prev_txt))
print("already done:", len(done))

def parse_list(html):
    return [(m.group(1), m.group(2).strip())
            for m in re.finditer(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a>", html)]

def parse_candidate(html):
    out = {}
    m = re.search(r"<b>Age:</b>\s*(\d+)", html); out["age"] = m.group(1) if m else ""
    m = re.search(r"Category:\s*([^<]+?)\s*<br>", html); out["education"] = m.group(1).strip() if m else ""
    m = re.search(r"Criminal Cases:\s*<span[^>]*>(\d+)</span>", html); out["criminalCases"] = int(m.group(1)) if m else 0
    m = re.search(r"<td>\s*Assets:\s*</td>\s*<td>\s*<b>Rs(?:&nbsp;|\s)*([\d,]+)</b>", html); out["assets"] = "Rs " + m.group(1) if m else "Rs 0"
    m = re.search(r"<td>\s*Liabilities:\s*</td>\s*<td>\s*<b>Rs(?:&nbsp;|\s)*([\d,]+)</b>", html); out["liabilities"] = "Rs " + m.group(1) if m else "Rs 0"
    return out

def age_ok(slug, age2017):
    if not age2017 or slug not in w2022age:
        return True
    return 3 <= w2022age[slug] - int(age2017) <= 7

def sset_related(a, b, min_small=2):
    sa, sb = set(stoks(a)), set(stoks(b))
    if len(sa) < min_small or len(sb) < min_small:
        return False
    return sa <= sb or sb <= sa

def try_accept(w, cand_id, c2017name, note=""):
    html = get(f"{BASE}/candidate.php?candidate_id={cand_id}", f"cand-{cand_id}.html")
    d = parse_candidate(html)
    tm = re.search(r"<title>([^<\(]+)", html)
    if tm and not sset_related(tm.group(1), w["name"]):
        return None, f"title mismatch: {tm.group(1)[:50]}"
    if not age_ok(w["slug"], d["age"]):
        return None, f"age gap doubtful ({d['age']} vs 2022 {w2022age.get(w['slug'])})"
    return {
        "year": "2017", "age": d["age"], "education": d["education"],
        "criminalCases": d["criminalCases"], "assets": d["assets"],
        "assetsNum": money_num(d["assets"]), "liabilities": d["liabilities"],
        "mynetaUrl": f"{BASE}/candidate.php?candidate_id={cand_id}",
        "_note": note, "_c2017": c2017name,
    }, None

gindex = {}
for lf in glob.glob(os.path.join(CACHE, "list-*.html")):
    cid = re.search(r"list-(\d+)\.html", lf).group(1)
    lh = open(lf, encoding="utf-8", errors="replace").read()
    for cand_id, cname in parse_list(lh):
        gindex.setdefault(cid, []).append((cand_id, cname))

matched4, still, notes = [], [], []
for w in winners:
    if w["slug"] in done:
        continue
    rec = None
    # in-AC stripped-subset
    cands = []
    for cid_, cname, district, is_bye in ac_lookup(w["slug"], w["constituency"]):
        html = get(f"{BASE}/index.php?action=show_candidates&constituency_id={cid_}", f"list-{cid_}.html")
        for cand_id, cn in parse_list(html):
            cands.append((cand_id, cn, is_bye))
    for cand_id, cn, is_bye in cands:
        if sset_related(cn, w["name"]):
            rec, reason = try_accept(w, cand_id, cn, note="ssubset" + ("+bye" if is_bye else ""))
            if rec:
                break
    # global stripped-subset (>=3 tokens in smaller set)
    if not rec:
        for cid, clist in gindex.items():
            for cand_id, cn in clist:
                if sset_related(cn, w["name"], min_small=3):
                    rec, reason = try_accept(w, cand_id, cn, note="global-ssubset")
                    if rec:
                        break
            if rec:
                break
    if rec:
        matched4.append((w, rec))
    else:
        still.append((w, reason if 'reason' in dir() else "2017 me ummidwar nahi the"))

print("round4 matched:", len(matched4), "| still unmatched:", len(still))

def ts_str(s):
    return (s or "").replace("\\", "\\\\").replace("'", "\\'")

existing = {}
for m in re.finditer(
        r"'([a-z0-9-]+)': \{\n    year: '2017',\n    age: '([^']*)',\n    education: '([^']*)',\n    criminalCases: (\d+),\n    assets: '([^']*)',\n    assetsNum: (\d+),\n    liabilities: '([^']*)',\n    mynetaUrl: '([^']*)',",
        prev_txt):
    existing[m.group(1)] = m.group(2, 3, 4, 5, 6, 7, 8)

for w, rec in matched4:
    existing[w["slug"]] = (rec["age"], rec["education"], str(rec["criminalCases"]), rec["assets"],
                           str(rec["assetsNum"]), rec["liabilities"], rec["mynetaUrl"])
    notes.append(f"{w['slug']}: 2017 '{rec['_c2017']}' [{rec['_note']}]")

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
print("\nNew matches:")
for n in notes:
    print("  ", n)
json.dump([{"slug": w["slug"], "name": w["name"], "constituency": w["constituency"]}
           for w, _ in still],
          open(os.path.join(CACHE, "match-report-r4-unmatched.json"), "w"), ensure_ascii=False, indent=1)

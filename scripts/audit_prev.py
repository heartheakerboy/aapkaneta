#!/usr/bin/env python3
"""Data-quality audit for prev_guj.ts (2017) and prev_mha.ts (2019).

Strict rule (from fixed scrape_raj2018.py):
- same constituency (normalized) as current MLA
- exact normalized name match
- age gap 3..7 years
- NO cross-AC fallback

Candidate pages come from .myneta-cache/{guj2017,mh2019}/cand-<id>.html;
missing pages are fetched live from myneta.info (1.2s delay).

Report-only: writes scripts/audit-prev-report.json, makes NO edits.
"""
import json
import os
import re
import glob
import time
import urllib.request
import gzip

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")

TITLES = {"SHRI", "SMT", "SHRIMATI", "DR", "ADV", "ADVOCATE", "LATE", "CAPT", "CAPTAIN",
          "COL", "COLONEL", "MAJ", "MAJOR", "ER", "ENGINEER", "SOW", "SHREEMATI", "KUMARI",
          "BHAI", "BHAISHRI", "CHH", "CHHATRAPATI"}

def norm_name(s):
    s = s.upper()
    s = s.replace(".", " ")
    s = re.sub(r"\s*\([^)]*\)", " ", s)
    toks = [t for t in re.split(r"\s+", s.strip()) if t and t not in TITLES]
    return " ".join(toks)

def strip_bhai(tok):
    """Gujarati honorific: 'Arvindbhai' -> 'Arvind' (bhai suffix hatao)."""
    if tok.endswith("BHAI") and len(tok) > 6:
        return tok[:-4]
    return tok

def name_tokens(s):
    """Multiset of name tokens (order-insensitive) — myneta titles often use
    'Surname Firstname Middlename' order while our data uses 'Firstname ... Surname'."""
    return sorted(strip_bhai(t) for t in norm_name(s).split())

def norm_ac(s):
    s = s.upper()
    s = re.sub(r"\s*\([^)]*\)", "", s)   # (ST)/(SC)/(CHHOTA UDEPUR) sab hatao
    s = re.sub(r"\s*\b(ST|SC|GEN)\b\s*", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s

def get_live(url, cache_path):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    try:
        data = gzip.decompress(data)
    except Exception:
        pass
    html = data.decode("utf-8", errors="replace")
    open(cache_path, "w", encoding="utf-8").write(html)
    time.sleep(1.2)
    return html

def load_prev(path):
    t = open(path, encoding="utf-8").read()
    recs = {}
    for m in re.finditer(
            r"  '([^']+)': \{\n    year: '(\d+)',\n    age: '([^']*)',\n.*?    mynetaUrl: '([^']*candidate_id=(\d+))',",
            t, re.S):
        slug, year, age, url, cid = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5)
        recs[slug] = {"year": year, "age": age, "cand_id": cid, "mynetaUrl": url}
    return recs

def load_current(path):
    """slug -> {name, age, constituency} from TS data file."""
    t = open(path, encoding="utf-8").read()
    out = {}
    for m in re.finditer(
            r"  \{\n    slug: '([^']+)',\n    name: '([^']+)',\n    party: '[^']*',\n    partyShort: '[^']*',\n    post: 'MLA',",
            t):
        slug, name = m.group(1), m.group(2)
        block = t[m.start():m.start() + 4000]
        cm = re.search(r"constituency: '([^']+)',", block)
        am = re.search(r"age: '(\d+)'", block)
        out[slug] = {"name": name,
                     "constituency": cm.group(1) if cm else "",
                     "age": am.group(1) if am else ""}
    return out

def build_list_index(cache_dir):
    """cand_id -> (list_name, list_ac) from cached AC candidate-list pages.
    List names are clean (no party suffix) — authoritative 2017/2019 name."""
    idx = {}
    for f in glob.glob(os.path.join(cache_dir, "list-*.html")):
        h = open(f, encoding="utf-8", errors="replace").read()
        ac = ""
        m = re.search(r"<title>List of Candidates in ([^:<]+?)\s*:", h)
        if m:
            ac = m.group(1).strip()
        for cm in re.finditer(r"candidate\.php\?candidate_id=(\d+)[^>]*>([^<]+)</a>", h):
            cid, nm = cm.group(1), cm.group(2).strip()
            if cid not in idx:
                idx[cid] = (nm, ac)
    return idx

def parse_cand_page(html):
    tm = re.search(r"<title>([^<]+)</title>", html)
    name, ac = "", ""
    if tm:
        title = tm.group(1)
        # "Tadvi Abhesinh Motibhai(Bharatiya Janata Party(BJP)):Constituency- SANKHEDA (ST)(CHHOTA UDEPUR) - Affidavit..."
        nm = re.search(r":Constituency-\s*(.*?)\s*-\s*Affidavit", title)
        if nm:
            ac = nm.group(1)
            name = title[:title.find(":Constituency-")].strip()
            # naam ke baad party bracket me hai (nested parens bhi ho sakte hain):
            # pehle '(' se pehle ka hissa hi naam hai
            paren = name.find("(")
            if paren != -1:
                name = name[:paren].strip()
    return name, ac

def load_current_mha():
    """Maharashtra current MLAs = maharashtra.ts (282) + pilot.ts netas (6 Palghar pilot)."""
    out = {}
    for path in (os.path.join(ROOT, "src/data/maharashtra.ts"),
                 os.path.join(ROOT, "src/data/pilot.ts")):
        t = open(path, encoding="utf-8").read()
        for m in re.finditer(
                r"  \{\n    slug: '([^']+)',\n    name: '([^']+)',\n    party: '[^']*',\n    partyShort: '[^']*',\n    post: 'MLA',",
                t):
            slug, name = m.group(1), m.group(2)
            block = t[m.start():m.start() + 4000]
            cm = re.search(r"constituency: '([^']+)',", block)
            am = re.search(r"age: '(\d+)'", block)
            out[slug] = {"name": name,
                         "constituency": cm.group(1) if cm else "",
                         "age": am.group(1) if am else ""}
    return out

def audit(state, prev_path, current, cache_dir, base_url, gap_lo, gap_hi):
    prev = load_prev(prev_path)
    cur = current() if callable(current) else load_current(current)
    list_idx = build_list_index(cache_dir)
    print(f"\n===== {state}: prev records={len(prev)}, current MLAs={len(cur)}, list-indexed cands={len(list_idx)} =====")
    verdicts = {}
    fetched_live = 0
    for slug, r in prev.items():
        v = {"slug": slug, "cand_id": r["cand_id"], "prev_age": r["age"], "year": r["year"],
             "issues": [], "name2017": "", "ac2017": "", "src": ""}
        if slug not in cur:
            v["issues"].append("ORPHAN: slug current MLA data me nahi hai")
            verdicts[slug] = v
            continue
        v["cur_name"] = cur[slug]["name"]
        v["cur_ac"] = cur[slug]["constituency"]
        v["cur_age"] = cur[slug]["age"]
        # primary truth: candidate LIST page (clean name + uski 2017/19 AC)
        if r["cand_id"] in list_idx:
            name17, ac17 = list_idx[r["cand_id"]]
            v["src"] = "list"
        else:
            cp = os.path.join(cache_dir, f"cand-{r['cand_id']}.html")
            if os.path.exists(cp) and os.path.getsize(cp) > 1000:
                html = open(cp, encoding="utf-8", errors="replace").read()
            else:
                print(f"  LIVE FETCH cand-{r['cand_id']} ({slug})...")
                html = get_live(f"{base_url}/candidate.php?candidate_id={r['cand_id']}", cp)
                fetched_live += 1
            name17, ac17 = parse_cand_page(html)
            v["src"] = "candpage"
        v["name2017"] = name17
        v["ac2017"] = ac17
        # 1. naam check (order-insensitive; chhota token-set subset ho to bhi OK —
        #    myneta title me beech ka naam kabhi chhoot jata hai)
        t17 = name_tokens(name17)
        tcur = name_tokens(cur[slug]["name"])
        name_ok = (t17 == tcur)
        if not name_ok:
            small, big = (t17, tcur) if len(t17) <= len(tcur) else (tcur, t17)
            if all(tok in big for tok in small) and len(small) >= 2:
                name_ok = True
        if not name_ok:
            v["issues"].append(f"NAME_MISMATCH: 2017/19='{name17.strip()}' vs current='{cur[slug]['name']}'")
        else:
            v["name_note"] = f"'{name17.strip()}' ~ '{cur[slug]['name']}'"
        # 2. AC check
        if norm_ac(ac17) != norm_ac(cur[slug]["constituency"]):
            v["issues"].append(f"AC_MISMATCH: 2017/19 AC='{ac17.strip()}' vs current AC='{cur[slug]['constituency']}'")
        # 3. age gap check
        if r["age"].isdigit() and cur[slug]["age"].isdigit():
            gap = int(cur[slug]["age"]) - int(r["age"])
            v["age_gap"] = gap
            if not (gap_lo <= gap <= gap_hi):
                v["issues"].append(f"AGE_GAP {gap}: prev={r['age']}, current={cur[slug]['age']} (expected {gap_lo}-{gap_hi})")
        verdicts[slug] = v
    print(f"  live fetched: {fetched_live}")
    return verdicts

res = {}
res["gujarat"] = audit("GUJARAT 2017 vs 2022", os.path.join(ROOT, "src/data/prev_guj.ts"),
                       os.path.join(ROOT, "src/data/gujarat.ts"),
                       os.path.join(ROOT, ".myneta-cache/guj2017"),
                       "https://myneta.info/Gujarat2017", 3, 7)
res["maharashtra"] = audit("MAHARASHTRA 2019 vs 2024", os.path.join(ROOT, "src/data/prev_mha.ts"),
                           load_current_mha,
                           os.path.join(ROOT, ".myneta-cache/mh2019"),
                           "https://myneta.info/Maharashtra2019", 3, 7)

out = os.path.join(HERE, "audit-prev-report.json")
json.dump(res, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

for state, verdicts in res.items():
    bad = {s: v for s, v in verdicts.items() if v["issues"]}
    print(f"\n### {state}: {len(verdicts)} records, {len(bad)} with issues ###")
    for s, v in sorted(bad.items()):
        print(f"  {s}:")
        for i in v["issues"]:
            print(f"    - {i}")
print(f"\nreport: {out}")

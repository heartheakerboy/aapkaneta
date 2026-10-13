#!/usr/bin/env python3
"""Round 2: fix AC aliases + verify near-miss name matches via 'Other Elections' table.
Appends verified records to src/data/prev_mha.ts."""
import json
import os
import re
import time
import urllib.request
import gzip

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, "..", ".myneta-cache", "mh2019")
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

def norm_ac(s):
    s = s.upper()
    s = re.sub(r"\s*\(S\.?T\.?\)\s*", " ", s)
    s = re.sub(r"\s*\(S[CT]\)\s*", " ", s)
    return re.sub(r"\s+", " ", s).strip()

TITLES = {"SHRI", "SMT", "SHRIMATI", "DR", "ADV", "ADVOCATE", "LATE", "CAPT", "CAPTAIN",
          "COL", "COLONEL", "MAJ", "MAJOR", "ER", "ENGINEER", "SOW", "SHREEMATI", "KUMARI"}
def norm_name(s):
    s = s.upper().replace(".", " ")
    s = re.sub(r"\s*\(S[CT]\)\s*", " ", s)
    toks = [t for t in re.split(r"\s+", s.strip()) if t and t not in TITLES]
    return " ".join(toks)

def money_num(s):
    if not s: return 0
    d = re.sub(r"\D", "", s)
    return int(d) if d else 0

def parse_candidate(html):
    out = {}
    m = re.search(r"<b>Age:</b>\s*(\d+)", html); out["age"] = m.group(1) if m else ""
    m = re.search(r"Category:\s*([^<]+?)\s*<br>", html); out["education"] = m.group(1).strip() if m else ""
    m = re.search(r"Criminal Cases:\s*<span[^>]*>(\d+)</span>", html); out["criminalCases"] = int(m.group(1)) if m else 0
    m = re.search(r"<td>\s*Assets:\s*</td>\s*<td>\s*<b>Rs(?:&nbsp;|\s)*([\d,]+)</b>", html); out["assets"] = "Rs " + m.group(1) if m else "Rs 0"
    m = re.search(r"<td>\s*Liabilities:\s*</td>\s*<td>\s*<b>Rs(?:&nbsp;|\s)*([\d,]+)</b>", html); out["liabilities"] = "Rs " + m.group(1) if m else "Rs 0"
    return out

def other_elections_2024(html):
    """Return (assets2024_str, cases2024) if 'Maharashtra 2024' row exists, else None."""
    m = re.search(r"<td[^>]*>\s*Maharashtra 2024\s*</td>\s*<td[^>]*>([^<]+)</td>\s*<td[^>]*>([^<]+)</td>", html)
    if m: return (m.group(1).strip(), m.group(2).strip())
    return None

def parse_list(html):
    cands = []
    for m in re.finditer(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a>", html):
        cands.append({"cand_id": m.group(1), "name": m.group(2).strip()})
    return cands

# rebuild ac_map with fixed norm
h = open(os.path.join(CACHE, "index.html"), encoding="utf-8", errors="replace").read()
ac_map = {}
for m in re.finditer(r">\s*([A-Z][A-Z ]+?)\s*<span class='w3-right'>", h):
    seg = h[m.end():m.end() + 6000]
    seg = seg[: seg.find("handle_dropdown") if "handle_dropdown" in seg[:6000] else 6000]
    for cm in re.finditer(r"constituency_id=(\d+)[^>]*>([^<]+)</a>", seg):
        cid, cname = cm.group(1), cm.group(2).strip()
        if "ALL CONSTITUENCIES" in cname: continue
        ac_map.setdefault(norm_ac(cname), (cid, cname))

report = json.load(open(os.path.join(CACHE, "match-report.json")))
w24 = {w["slug"]: w for w in json.load(open(os.path.join(CACHE, "winners2024.json")))}

new_records = {}
still_unmatched = []
verified_via_other = []
rejected = []

# collect round-1 near-miss + mapping-fail entries
todo = [u for u in report["unmatched"]]
print("round2 todo:", len(todo))
for u in todo:
    slug, name = u["slug"], u["name"]
    w = w24.get(slug)
    if not w:
        still_unmatched.append(u); continue
    key = norm_ac(w["constituency"])
    if key not in ac_map:
        still_unmatched.append({**u, "reason": u["reason"] + " [round2: alias bhi nahi mila]"})
        continue
    cid, craw = ac_map[key]
    html = get(f"https://myneta.info/Maharashtra2019/index.php?action=show_candidates&constituency_id={cid}",
               f"list-{cid}.html")
    cands = parse_list(html)
    target = norm_name(name)
    # exact first
    hit = next((c for c in cands if norm_name(c["name"]) == target), None)
    cands_to_check = [hit] if hit else []
    if not hit:
        # near-miss: same first+last token
        tt = target.split()
        for c in cands:
            ct = norm_name(c["name"]).split()
            if tt and ct and tt[0] == ct[0] and tt[-1] == ct[-1]:
                cands_to_check.append(c)
    confirmed = None
    for c in cands_to_check:
        ch = get(f"https://myneta.info/Maharashtra2019/candidate.php?candidate_id={c['cand_id']}",
                 f"cand-{c['cand_id']}.html")
        oe = other_elections_2024(ch)
        if oe:
            confirmed = (c, ch, oe)
            break
    if confirmed:
        c, ch, oe = confirmed
        d = parse_candidate(ch)
        new_records[slug] = {
            "year": "2019", "age": d["age"], "education": d["education"],
            "criminalCases": d["criminalCases"], "assets": d["assets"],
            "assetsNum": money_num(d["assets"]), "liabilities": d["liabilities"],
            "mynetaUrl": f"https://myneta.info/Maharashtra2019/candidate.php?candidate_id={c['cand_id']}",
        }
        verified_via_other.append({"slug": slug, "name": name, "c2019": c["name"],
                                   "ac2019": craw, "oe2024": oe})
    else:
        if cands_to_check:
            rejected.append({"slug": slug, "name": name,
                             "candidates": [c["name"] for c in cands_to_check],
                             "reason": "near-miss tha par 'Other Elections' me 2024 link nahi — reject"})
        still_unmatched.append({**u, "reason": "round2: 'Other Elections' verification fail / koi candidate nahi"})

print("new verified:", len(new_records))
print("rejected:", len(rejected))
print("still unmatched:", len(still_unmatched))

# append to prev_mha.ts
def ts_str(s): return s.replace("\\", "\\\\").replace("'", "\\'")
p = os.path.join(HERE, "..", "src", "data", "prev_mha.ts")
s = open(p, encoding="utf-8").read()
assert s.rstrip().endswith("};")
new_lines = []
for slug in sorted(new_records):
    r = new_records[slug]
    new_lines.append(f"  '{slug}': {{")
    new_lines.append(f"    year: '2019',")
    new_lines.append(f"    age: '{ts_str(r['age'])}',")
    new_lines.append(f"    education: '{ts_str(r['education'])}',")
    new_lines.append(f"    criminalCases: {r['criminalCases']},")
    new_lines.append(f"    assets: '{ts_str(r['assets'])}',")
    new_lines.append(f"    assetsNum: {r['assetsNum']},")
    new_lines.append(f"    liabilities: '{ts_str(r['liabilities'])}',")
    new_lines.append(f"    mynetaUrl: '{r['mynetaUrl']}',")
    new_lines.append("  },")
s = s.rstrip()[:-2].rstrip() + "\n" + "\n".join(new_lines) + "\n};\n"
open(p, "w", encoding="utf-8").write(s)

json.dump({"new_records": verified_via_other, "rejected": rejected,
           "still_unmatched": still_unmatched},
          open(os.path.join(CACHE, "round2-report.json"), "w"), ensure_ascii=False, indent=1)
print("WROTE additions. total records now:", s.count("': {"))

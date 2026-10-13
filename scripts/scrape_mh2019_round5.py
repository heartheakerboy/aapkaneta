#!/usr/bin/env python3
"""Round 5: token-set-order matches from remaining unmatched.
Each case manually verified: full 3+ token name equality (order variant)
+ exact 5-year age gap vs 2024 age."""
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, "..", ".myneta-cache", "mh2019")

def parse_candidate(html):
    out = {}
    m = re.search(r"<b>Age:</b>\s*(\d+)", html); out["age"] = m.group(1) if m else ""
    m = re.search(r"Category:\s*([^<]+?)\s*<br>", html); out["education"] = m.group(1).strip() if m else ""
    m = re.search(r"Criminal Cases:\s*<span[^>]*>(\d+)</span>", html); out["criminalCases"] = int(m.group(1)) if m else 0
    m = re.search(r"<td>\s*Assets:\s*</td>\s*<td>\s*<b>Rs(?:&nbsp;|\s)*([\d,]+)</b>", html); out["assets"] = "Rs " + m.group(1) if m else "Rs 0"
    m = re.search(r"<td>\s*Liabilities:\s*</td>\s*<td>\s*<b>Rs(?:&nbsp;|\s)*([\d,]+)</b>", html); out["liabilities"] = "Rs " + m.group(1) if m else "Rs 0"
    return out

def money_num(s):
    return int(re.sub(r"\D", "", s)) if re.search(r"\d", s) else 0

# (slug, cand2019_id, 2019 name, 2019 age, 2024 age) — all verified manually
cases = [
    ("dadaji-dagdu-bhuse", "10929", "Bhuse Dadaji Dagdu", "55", "60"),
    ("ahire-saroj-babulal", "9803", "Saroj Babulal Ahire", "38", "43"),
    ("dr-balaji-pralhad-kinikar", "9105", "Kinikar Balaji Pralhad", "47", "52"),
    ("agrawal-vinod", "9524", "Agrawal Vinod Santoshkumar", "50", "55"),
    ("mufti-mohammad-ismail-abdul-khalique", "9368", "Mohammed Ismail Abdul Khalique", "58", "63"),
]

new_records = {}
accepted = []
for slug, cid, c2019, age19, age24 in cases:
    p = os.path.join(CACHE, f"cand-{cid}.html")
    assert os.path.exists(p) and os.path.getsize(p) > 1000, p
    d = parse_candidate(open(p, encoding="utf-8", errors="replace").read())
    assert d["age"] == age19, (slug, d["age"], age19)
    new_records[slug] = {"year": "2019", "age": d["age"], "education": d["education"],
        "criminalCases": d["criminalCases"], "assets": d["assets"],
        "assetsNum": money_num(d["assets"]), "liabilities": d["liabilities"],
        "mynetaUrl": f"https://myneta.info/Maharashtra2019/candidate.php?candidate_id={cid}"}
    accepted.append({"slug": slug, "c2019": c2019, "how": "token-set+age-gap"})

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
json.dump({"accepted": accepted}, open(os.path.join(CACHE, "round5-report.json"), "w"), ensure_ascii=False, indent=1)
print("accepted:", len(accepted))
for a in accepted: print("  +", a["slug"], "| 2019:", a["c2019"], "|", a["how"])
print("total records now:", s.count("': {"))

#!/usr/bin/env python3
"""Re-parse cached myneta HTML with clean money values + fixed constituency matching.
Rewrites .myneta-cache/mha.json"""
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache")

def norm(s):
    s = s.upper()
    s = re.sub(r"\s*:\s*BYE ELECTION.*$", "", s)
    s = re.sub(r"\(\s*S\.?\s*T\.?\s*\)", "", s)   # (ST)/(S.T.)
    s = re.sub(r"\(\s*S\.?\s*C\.?\s*\)", "", s)   # (SC)/(S.C.)
    s = s.replace("(", " ").replace(")", " ")
    s = s.replace(".", "").replace("-", " ")
    return re.sub(r"\s+", " ", s).strip()

ALIASES = {
    "SANGMNER": "SANGAMNER",
    "DHAMANGAON RAILWAY": "DHAMAMGAON RAILWAY",
    "PHOLAMBARI": "PHULAMBRI",
    "SINDHKHED RAJA": "SINDKHED RAJA",
    "BRAMHAPURI": "BRAHMAPURI",
    "SINDHKHEDA": "SINDKHEDA",
    "GONDIA": "GONDIYA",
    "GANSAVANGI": "GHANSAWANGI",
    "AHMEDPUR": "AHMADPUR",
    "CHANDWAD": "CHANDVAD",
    "DEOLALI": "DEVLALI",
    "JAT": "JATH",
    "KHANPUR": "KHANAPUR",
    "AMBARNATH": "AMBERNATH",
    "MEERA BHAYANDAR": "MIRA BHAYANDAR",
    "MANKHURD SHIVAJINAGAR": "MANKHURD SHIVAJI NAGAR",
}

# oneindia winners: norm_name -> (number, display)
h = open("/tmp/mha-mlas.html", encoding="utf-8", errors="replace").read()
winners = {}
for r in re.findall(r"<tr[^>]*>(.*?)</tr>", h, re.S):
    cells = [re.sub(r"<[^>]+>", "", c).strip() for c in re.findall(r"<td[^>]*>(.*?)</td>", r, re.S)]
    if len(cells) >= 5 and re.match(r"\d+\s*[–-]", cells[2]):
        m = re.match(r"(\d+)\s*[–-]\s*(.+)", cells[2])
        winners[norm(m.group(2))] = (int(m.group(1)), m.group(2).strip())
print("oneindia entries:", len(winners))

# myneta index: single pass -> cid -> (raw_name, district)
idx = open(os.path.join(CACHE, "index.html"), encoding="utf-8").read()
buttons = [(m.start(), m.group(1).strip().title()) for m in
           re.finditer(r">\s*([A-Z][A-Z ]+?)\s*<span class='w3-right'>", idx)]
consts = {}
for i, (pos, district) in enumerate(buttons):
    end = buttons[i + 1][0] if i + 1 < len(buttons) else len(idx)
    seg = idx[pos:end]
    for cm in re.finditer(r"constituency_id=(\d+)[^>]*>([^<]+)</a>", seg):
        cid, craw = cm.group(1), cm.group(2).strip()
        if "ALL CONSTITUENCIES" in craw or cid in consts:
            continue
        consts[cid] = (craw, district)
print("constituencies:", len(consts), "| district buttons:", len(buttons))

def clean_money(cell):
    t = re.sub(r"&nbsp;?", " ", cell)
    t = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", t)).strip()
    if re.search(r"\bnil\b", t, re.I):
        return "Nil"
    t = t.split("~")[0].strip()
    t = re.sub(r"^Rs\s*", "", t).strip()
    return ("Rs " + t) if t and t != "0" else None

results, failed = [], []
for cid, (craw, district) in consts.items():
    try:
        html = open(os.path.join(CACHE, f"cand-{cid}.html"), encoding="utf-8").read()
        wm = re.search(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a><b>&nbsp;?\s*&nbsp;?<font[^>]*>\s*Winner", html)
        if not wm:
            # fallback: any green Winner font
            wm = re.search(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a>(.{0,120}?)Winner", html, re.S)
            if not wm:
                failed.append((cid, craw, "no winner")); continue
        cand_id, name = wm.group(1), wm.group(2).strip()
        tstart = html.rfind("<tr>", 0, wm.start()); tend = html.find("</tr>", wm.end())
        cells = re.findall(r"<td[^>]*>(.*?)</td>", html[tstart:tend], re.S)
        def tx(c):
            return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", c)).strip()
        party = tx(cells[2]) if len(cells) > 2 else ""
        crm = re.search(r"(\d+)", tx(cells[3])) if len(cells) > 3 else None
        criminal = int(crm.group(1)) if crm else 0
        edu = tx(cells[4]) if len(cells) > 4 else ""
        agem = re.search(r"(\d+)", tx(cells[5])) if len(cells) > 5 else None
        age = agem.group(1) if agem else ""
        assets = clean_money(cells[6]) if len(cells) > 6 else None
        liab = clean_money(cells[7]) if len(cells) > 7 else None
        key = ALIASES.get(norm(craw), norm(craw))
        if key not in winners:
            failed.append((cid, craw, "no oneindia match: " + key)); continue
        num, disp = winners[key]
        results.append({
            "myneta_const_id": cid, "constituency_raw": craw, "constituency": disp,
            "number": num, "district": district,
            "candidate_id": cand_id, "name": name, "party_short": party,
            "age": age, "education": edu, "criminal": criminal,
            "assets": assets, "liabilities": liab,
        })
    except FileNotFoundError:
        failed.append((cid, craw, "cache missing"))
    except Exception as e:
        failed.append((cid, craw, str(e)[:80]))

json.dump(results, open(os.path.join(CACHE, "mha.json"), "w"), ensure_ascii=False, indent=1)
print("winners:", len(results), "| failed:", len(failed))
for f in failed:
    print("  FAIL:", f)
nums = sorted(r["number"] for r in results)
print("numbers 1..288 complete:", nums == list(range(1, 289)), "| unique:", len(set(nums)))

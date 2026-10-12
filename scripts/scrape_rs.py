#!/usr/bin/env python3
"""Scrape Maharashtra Rajya Sabha MPs from myneta.info/rajsab09aff/.
Output: .myneta-cache/rs.json"""
import json
import os
import re
import time
import urllib.request

CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".myneta-cache")
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
        import gzip
        data = gzip.decompress(data)
    except Exception:
        pass
    html = data.decode("utf-8", errors="replace")
    open(p, "w", encoding="utf-8").write(html)
    time.sleep(1.2)
    return html

# candidate_id -> (display name, party short, term start, term end)
MPS = {
    "1142": ("Vinod Tawde", "BJP", "2026", "2032"),
    "1143": ("Maya Ivnate", "BJP", "2026", "2032"),
    "1144": ("Ramrao Wadkute", "BJP", "2026", "2032"),
    "1049": ("Medha Kulkarni", "BJP", "2024", "2030"),
    "1051": ("Ashok Chavan", "BJP", "2024", "2030"),
    "1048": ("Ajit Gopchade", "BJP", "2024", "2030"),
    "957":  ("Dhananjay Mahadik", "BJP", "2022", "2028"),
    "958":  ("Anil Bonde", "BJP", "2022", "2028"),
    "1147": ("Parth Pawar", "NCP", "2026", "2032"),
    "1053": ("Praful Patel", "NCP", "2024", "2030"),
    "1102": ("Nitin Jadhav-Patil", "NCP", "2024", "2028"),
    "1189": ("Rajendra Jain", "NCP", "2026", "2028"),
    "1146": ("Jyoti Waghmare", "SHS", "2026", "2032"),
    "1050": ("Milind Deora", "SHS", "2024", "2030"),
    "1141": ("Ramdas Athawale", "RPI(A)", "2026", "2032"),
    "1052": ("Chandrakant Handore", "INC", "2024", "2030"),
    "955":  ("Sanjay Raut", "SS(UBT)", "2022", "2028"),
    "1140": ("Sharad Pawar", "NCP-SP", "2026", "2032"),
}

def clean_money(cell):
    t = re.sub(r"&nbsp;?", " ", cell)
    t = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", t)).strip()
    if re.search(r"\bnil\b", t, re.I):
        return "Nil"
    t = t.split("~")[0].strip()
    t = re.sub(r"^Rs\s*", "", t).strip()
    return ("Rs " + t) if t and t != "0" else None

results, failed = [], []
for cid, (name, party, tstart, tend) in MPS.items():
    try:
        html = get(f"https://myneta.info/rajsab09aff/candidate.php?candidate_id={cid}",
                   f"rs-cand-{cid}.html")
        def one(pat):
            m = re.search(pat, html, re.S)
            return m.group(1).strip() if m else ""
        age = one(r"<b>Age:</b>\s*(\d+)")
        criminal = one(r"Number of Criminal Cases:\s*<span[^>]*>(\d+)</span>")
        assets = one(r"<td>\s*Assets:\s*</td>\s*<td>\s*<b>([^<]+)</b>")
        liab = one(r"<td>\s*Liabilities:\s*</td>\s*<td>\s*<b>([^<]+)</b>")
        edu_sec = one(r"<h3>Educational Details</h3>\s*<hr>\s*Category:\s*([^<]+)<br>\s*([^<]*)")
        edu_cat = edu_sec.strip()
        # education details after <br>
        edm = re.search(r"<h3>Educational Details</h3>\s*<hr>\s*Category:[^<]*<br>\s*([^<]+)", html, re.S)
        edu_detail = edm.group(1).strip() if edm else ""
        full_party = one(r"<title>[^(]+\(([^)]+)\):Constituency-")
        results.append({
            "candidate_id": cid, "name": name, "party_short": party,
            "party_full": full_party, "age": age,
            "education_cat": edu_cat, "education_detail": edu_detail,
            "criminal": int(criminal) if criminal else 0,
            "assets": clean_money(assets), "liabilities": clean_money(liab),
            "term_start": tstart, "term_end": tend,
            "myneta_url": f"https://myneta.info/rajsab09aff/candidate.php?candidate_id={cid}",
        })
        print(f"  OK {name} age={age} crim={criminal}")
    except Exception as e:
        failed.append((cid, name, str(e)[:80]))
        print(f"  FAIL {name}: {e}")

json.dump(results, open(os.path.join(CACHE, "rs.json"), "w"), ensure_ascii=False, indent=1)
print("DONE. RS MPs:", len(results), "failed:", len(failed))
for f in failed:
    print("  FAIL:", f)

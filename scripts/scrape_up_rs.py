#!/usr/bin/env python3
"""Scrape 31 Uttar Pradesh Rajya Sabha MPs from myneta.info/rajsab09aff/.
Output: .myneta-cache/up/rs.json

Members verified via news + Wikipedia (Oct 13, 2026).
Forward-looking set (sitting after 26-Nov-2026), mirroring the Rajasthan
precedent (incoming batch included, outgoing 2020 batch excluded):
- 2022-2028 (elected Jun 2022): 8 BJP + 1 SP + 1 RLD + 1 IND
- 2024-2030 (elected Feb 2024, 10 seats): 8 BJP + 2 SP
- 2026-2032 (elected unopposed Oct 9, 2026; terms start 26-Nov-2026): 8 BJP + 2 SP
"""
import json
import os
import re
import time
import urllib.request

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "up")
os.makedirs(CACHE, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}

def get(url, cache_name):
    p = os.path.join(CACHE, cache_name)
    if os.path.exists(p) and os.path.getsize(p) > 1000:
        return open(p, encoding="utf-8", errors="replace").read()
    for attempt in range(3):
        try:
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
        except Exception as e:
            print("  retry", cache_name, type(e).__name__)
            time.sleep(3)
    raise RuntimeError("failed: " + url)

# candidate_id -> (display name, party short, term start, term end)
MPS = {
    # 2022-2028 batch (elected Jun 2022)
    "950": ("Laxmikant Bajpai", "BJP", "2022", "2028"),      # myneta: Luxmikant Bajpayi
    "945": ("Darshana Singh", "BJP", "2022", "2028"),        # myneta: Darshna Singh
    "948": ("Radha Mohan Das Agarwal", "BJP", "2022", "2028"),  # myneta: Dr. Radha Mohan Das Agarwal
    "952": ("Sangeeta Yadav", "BJP", "2022", "2028"),
    "951": ("Surendra Singh Nagar", "BJP", "2022", "2028"),  # myneta: Surender Singh Nagar
    "946": ("Baburam Nishad", "BJP", "2022", "2028"),        # myneta: Babu Ram Nishad
    "949": ("K. Laxman", "BJP", "2022", "2028"),             # myneta: Dr. K Laxman
    "947": ("Mithlesh Kumar", "BJP", "2022", "2028"),
    "944": ("Javed Ali Khan", "SP", "2022", "2028"),
    "943": ("Jayant Chaudhary", "RLD", "2022", "2028"),
    "953": ("Kapil Sibal", "IND", "2022", "2028"),           # myneta: Kapil Sibbal
    # 2024-2030 batch (elected Feb 2024, 10 seats)
    "1062": ("Sudhanshu Trivedi", "BJP", "2024", "2030"),
    "1060": ("Sadhana Singh", "BJP", "2024", "2030"),        # myneta: Sadhna Singh
    "1082": ("Sanjay Seth", "BJP", "2024", "2030"),
    "1059": ("Naveen Jain", "BJP", "2024", "2030"),
    "1063": ("Chaudhary Tejveer Singh", "BJP", "2024", "2030"),  # myneta: Tejveer Singh
    "1064": ("RPN Singh", "BJP", "2024", "2030"),            # myneta: Kunwar Ratanjit Pratap Narain Singh
    "1058": ("Amarpal Maurya", "BJP", "2024", "2030"),       # myneta: Amar Pal Maurya
    "1061": ("Sangeeta Balwant", "BJP", "2024", "2030"),     # myneta: Sangita
    "1036": ("Ramji Lal Suman", "SP", "2024", "2030"),
    "1035": ("Jaya Bachchan", "SP", "2024", "2030"),         # myneta: Jaya Amitabh Bachchan
    # 2026-2032 batch (elected unopposed Oct 9, 2026; terms start 26-Nov-2026)
    "1217": ("Dharmpal Singh", "BJP", "2026", "2032"),
    "1220": ("Radhakant Ojha", "BJP", "2026", "2032"),
    "1221": ("Prakash Pal", "BJP", "2026", "2032"),          # myneta: Ram Prakash Pal
    "1224": ("Vidyasagar Sonkar", "BJP", "2026", "2032"),    # myneta: Vidayasagar Sonkar
    "1218": ("Gopi Krishna Pandey", "BJP", "2026", "2032"),  # myneta: Gopi Krishna Panday
    "1219": ("Priyanka Singh Rawat", "BJP", "2026", "2032"),
    "1222": ("Ram Pratap Singh Chauhan", "BJP", "2026", "2032"),  # myneta: Ram Pratap Singh
    "1223": ("Shruti Gangwar", "BJP", "2026", "2032"),
    "1215": ("Ram Gopal Yadav", "SP", "2026", "2032"),
    "1216": ("Dhanraj Nathwani", "SP", "2026", "2032"),
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
                   f"rs-up-cand-{cid}.html")
        def one(pat):
            m = re.search(pat, html, re.S)
            return m.group(1).strip() if m else ""
        age = one(r"<b>Age:</b>\s*(\d+)")
        criminal = one(r"Number of Criminal Cases:\s*<span[^>]*>(\d+)</span>")
        assets = one(r"<td>\s*Assets:\s*</td>\s*<td>\s*<b>([^<]+)</b>")
        liab = one(r"<td>\s*Liabilities:\s*</td>\s*<td>\s*<b>([^<]+)</b>")
        edm = re.search(r"<h3>Educational Details</h3>\s*<hr>\s*Category:\s*([^<]+)<br>\s*([^<]*)", html, re.S)
        edu_cat = edm.group(1).strip() if edm else ""
        edu_detail = edm.group(2).strip() if edm else ""
        education = (edu_cat + " - " + edu_detail).strip(" -") if edu_cat else ""
        title_m = re.search(r"<title>([^<]+)</title>", html)
        title = title_m.group(1).strip() if title_m else ""
        results.append({
            "candidate_id": cid, "name": name, "party_short": party,
            "age": age, "education": education,
            "criminal": int(criminal) if criminal else 0,
            "assets": clean_money(assets), "liabilities": clean_money(liab),
            "term_start": tstart, "term_end": tend,
            "myneta_url": f"https://myneta.info/rajsab09aff/candidate.php?candidate_id={cid}",
        })
        print(f"  OK {name} ({party}, {tstart}-{tend}) | {title[:80]}")
    except Exception as e:
        failed.append((cid, name, str(e)[:80]))
        print(f"  FAIL {name}: {e}")

json.dump(results, open(os.path.join(CACHE, "rs.json"), "w"), ensure_ascii=False, indent=1)
print("DONE. RS MPs:", len(results), "failed:", len(failed))
for f in failed:
    print("  FAIL:", f)

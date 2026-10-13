#!/usr/bin/env python3
"""Scrape 3 Delhi Rajya Sabha MPs from myneta.info/rajsab09aff/.
Output: .myneta-cache/delhi/rs.json

Verified Oct 13, 2026 (PTI/HT/Business Standard):
- Sanjay Singh (AAP), N.D. Gupta (AAP), Swati Maliwal (BJP since Apr-2026
  merger of 7 AAP RS MPs with BJP, accepted by RS Chairman; AAP petitioned
  for disqualification - currently sits as BJP).
- All elected unopposed Jan 2024; term 2024-2030 (6 years from 28-Jan-2024).
"""
import json
import os
import re
import time
import urllib.request

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "delhi")
os.makedirs(CACHE, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}

# candidate_id -> (display name, party short, term start, term end)
MPS = {
    "1028": ("Narain Dass Gupta", "AAP", "2024", "2030"),  # myneta: Narain Dass Gupta
    "1029": ("Sanjay Singh", "AAP", "2024", "2030"),
    "1030": ("Swati Maliwal", "BJP", "2024", "2030"),  # AAP -> BJP Apr 2026 (Chairman accepted)
}


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
                   f"rs-delhi-cand-{cid}.html")

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
        print(f"  OK {name} ({party}, {tstart}-{tend}) | {title[:70]}")
    except Exception as e:
        failed.append((cid, name, str(e)[:80]))
        print(f"  FAIL {name}: {e}")

json.dump(results, open(os.path.join(CACHE, "rs.json"), "w"), ensure_ascii=False, indent=1)
print("DONE. RS MPs:", len(results), "failed:", len(failed))

#!/usr/bin/env python3
"""Scrape 11 Gujarat Rajya Sabha MPs from myneta.info/rajsab09aff/.
Output: .myneta-cache/gujarat/rs.json
Members verified via news (Oct 2026): all 11 BJP."""
import json
import os
import re
import time
import urllib.request

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "gujarat")
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
    # 2023-2029 batch (elected unopposed Jul 2023)
    "1024": ("S. Jaishankar", "BJP", "2023", "2029"),
    "1023": ("Kesridevsinh Zala", "BJP", "2023", "2029"),
    "1022": ("Babubhai Desai", "BJP", "2023", "2029"),
    # 2024-2030 batch (elected unopposed Feb 2024)
    "1055": ("J. P. Nadda", "BJP", "2024", "2030"),
    "1057": ("Govind Dholakia", "BJP", "2024", "2030"),
    "1054": ("Jasvantsinh Parmar", "BJP", "2024", "2030"),
    "1056": ("Mayank Nayak", "BJP", "2024", "2030"),
    # 2026-2032 batch (elected unopposed Jun 2026)
    "1195": ("Rajesh Shukla", "BJP", "2026", "2032"),
    "1194": ("Mukesh Rathwa", "BJP", "2026", "2032"),
    "1196": ("Mansinh Parmar", "BJP", "2026", "2032"),
    "1197": ("Jitendra Kanjariya", "BJP", "2026", "2032"),
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
        edm = re.search(r"<h3>Educational Details</h3>\s*<hr>\s*Category:\s*([^<]+)<br>\s*([^<]*)", html, re.S)
        edu_cat = edm.group(1).strip() if edm else ""
        edu_detail = edm.group(2).strip() if edm else ""
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

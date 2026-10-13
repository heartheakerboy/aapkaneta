#!/usr/bin/env python3
"""Scrape 11 Madhya Pradesh Rajya Sabha MPs from myneta.info/rajsab09aff/.
Output: .myneta-cache/mp_rs/mp_rs.json

Terms verified Oct 13, 2026:
- 2022 batch (elected unopposed 3-Jun-2022, term 2022-2028):
  Vivek Tankha (INC, 2nd consecutive term), Sumitra Balmik (BJP), Kavita Patidar (BJP).
  Source: PTI via The Hindu / ThePrint / NewsDrum / ET
  (https://theprint.in/india/mp-congresss-tankha-bjps-valmiki-patidar-elected-unopposed-to-rajya-sabha/982147/)
- 2024 batch (elected unopposed 20-Feb-2024, term 2024-2030):
  L. Murugan, Banshilal Gurjar, Balyogi Umeshnath (=Umesh Nath Maharaj), Maya Vikram Singh Naroliya (BJP);
  Ashok Singh (INC).
  Source: PTI via India TV / NewsDrum / ABP; Wikipedia 2024 Rajya Sabha elections table (term start 03-Apr-2024)
  (https://www.indiatvnews.com/madhya-pradesh/five-candidates-declared-elected-unopposed-to-rajya-sabha-from-madhya-pradesh-l-murugan-ashok-singh-umesh-nath-maharaj-banshilal-gurjar-maya-naroliya-2024-02-20-917795)
- 2026 batch (elected unopposed 11-Jun-2026, term 2026-2032):
  Tarun Chugh, Rajneesh Kumar Agrawal, Mahesh Kevat (BJP).
  Replaced terms expiring 21-Jun-2026: George Kurien (BJP, 2024 by-election remainder of Scindia's term),
  Sumer Singh Solanki (BJP), Digvijaya Singh (INC).
  Congress candidate Meenakshi Natarajan's nomination rejected on scrutiny; SC refused to stay the process.
  Source: The Hindu / Mint / India TV / New Indian Express / ABP
  (https://www.thehindu.com/news/national/rajya-sabha-elections-bjp-wins-three-seats-from-madhya-pradesh/article71089440.ece)

Party status Oct 2026: all BJP MPs remain BJP; Tankha & Ashok Singh remain INC
(Tankha still "Congress leader and Rajya Sabha MP" in May/Aug 2026 PTI reports).
No party-change/resignation among the 11 - no Delhi-style merger note needed.
"""
import json
import os
import re
import time
import urllib.request

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "mp_rs")
os.makedirs(CACHE, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}

MPLADS_NOTE = "MPLADS fund ka record e-SAKSHI portal par uplabdh hai; jald joda jayega."

# candidate_id -> (myneta name, party short, term start, term end, election note)
MPS = {
    # 2022-2028 batch (elected unopposed 3-Jun-2022)
    "978": ("Vivekkrishna Tankha", "INC", "2022", "2028",
            "June 2022 me doosre lagatar karyakal ke liye Madhya Pradesh se Rajya Sabha ke liye nirvirodh chune gaye (karyakal 2022-2028)."),
    "979": ("Sumitra Balmik", "BJP", "2022", "2028",
            "June 2022 me Madhya Pradesh se Rajya Sabha ke liye nirvirodh chuni gayin (karyakal 2022-2028)."),
    "980": ("Kavita Patidar", "BJP", "2022", "2028",
            "June 2022 me Madhya Pradesh se Rajya Sabha ke liye nirvirodh chuni gayin (karyakal 2022-2028)."),
    # 2024-2030 batch (elected unopposed 20-Feb-2024)
    "1077": ("Dr. L. Murugan", "BJP", "2024", "2030",
             "February 2024 me Madhya Pradesh se Rajya Sabha ke liye nirvirodh chune gaye (karyakal 2024-2030). Union mantri; ye unka doosra karyakal hai (pehle 2021 ke upchunav me chune gaye the)."),
    "1078": ("Banshilal Gurjar", "BJP", "2024", "2030",
             "February 2024 me Madhya Pradesh se Rajya Sabha ke liye nirvirodh chune gaye (karyakal 2024-2030)."),
    "1079": ("Balyogi Umeshnath", "BJP", "2024", "2030",
             "February 2024 me Madhya Pradesh se Rajya Sabha ke liye nirvirodh chune gaye (karyakal 2024-2030). Valmiki Dham Ashram ke pramukh; news me 'Umesh Nath Maharaj' naam se bhi ullekh hote hain."),
    "1080": ("Maya Vikram Singh Naroliya", "BJP", "2024", "2030",
             "February 2024 me Madhya Pradesh se Rajya Sabha ke liye nirvirodh chuni gayin (karyakal 2024-2030)."),
    "1081": ("Ashok Singh", "INC", "2024", "2030",
             "February 2024 me Madhya Pradesh se Rajya Sabha ke liye nirvirodh chune gaye (karyakal 2024-2030). MP Congress ke koshadhyaksh."),
    # 2026-2032 batch (elected unopposed 11-Jun-2026)
    "1183": ("Tarun Chugh", "BJP", "2026", "2032",
             "June 2026 me Madhya Pradesh se Rajya Sabha ke liye nirvirodh chune gaye (karyakal 2026-2032). Congress ummidvaar Meenakshi Natarajan ka namankan janch me khariz ho gaya tha; Supreme Court ne chunav-prakriya par rok lagane se inkar kar diya. BJP ke rashtriya mahasachiv."),
    "1184": ("Rajneesh Kumar Agrawal", "BJP", "2026", "2032",
             "June 2026 me Madhya Pradesh se Rajya Sabha ke liye nirvirodh chune gaye (karyakal 2026-2032). Congress ummidvaar Meenakshi Natarajan ka namankan janch me khariz ho gaya tha; Supreme Court ne chunav-prakriya par rok lagane se inkar kar diya. BJP MP ke pradesh sachiv."),
    "1188": ("Mahesh Kevat", "BJP", "2026", "2032",
             "June 2026 me Madhya Pradesh se Rajya Sabha ke liye nirvirodh chune gaye (karyakal 2026-2032). Congress ummidvaar Meenakshi Natarajan ka namankan janch me khariz ho gaya tha; Supreme Court ne chunav-prakriya par rok lagane se inkar kar diya. Machhuara Kalyan Board ke poorv adhyaksh."),
}

PARTY_FULL = {
    "BJP": "Bharatiya Janata Party",
    "INC": "Indian National Congress",
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
for cid, (name, party, tstart, tend, enote) in MPS.items():
    try:
        html = get(f"https://myneta.info/rajsab09aff/candidate.php?candidate_id={cid}",
                   f"rs-mp-cand-{cid}.html")

        def one(pat):
            m = re.search(pat, html, re.S)
            return m.group(1).strip() if m else ""

        # title carries party + term, e.g. "Name(Indian National Congress(INC)):Constituency- MP (2022-2028) ..."
        title_m = re.search(r"<title>([^<]+)</title>", html)
        title = title_m.group(1).strip() if title_m else ""
        tp = re.search(r"\(([A-Z]+)\):Constituency", title)
        tm = re.search(r"Constituency-\s*MP\s*\((\d{4})-(\d{4})\)", title)
        if tp and tp.group(1) != party:
            print(f"  WARN {cid}: title party {tp.group(1)} != {party}")
        if tm and (tm.group(1) != tstart or tm.group(2) != tend):
            print(f"  WARN {cid}: title term {tm.group(1)}-{tm.group(2)} != {tstart}-{tend}")

        age = one(r"<b>Age:</b>\s*(\d+)")
        if "No criminal cases" in html:
            criminal = 0
        else:
            c = one(r"Number of Criminal Cases:\s*<span[^>]*>(\d+)</span>")
            criminal = int(c) if c else None
        assets = one(r"<td>\s*Assets:\s*</td>\s*<td>\s*<b>([^<]+)</b>")
        liab = one(r"<td>\s*Liabilities:\s*</td>\s*<td>\s*<b>([^<]+)</b>")
        edm = re.search(r"<h3>Educational Details</h3>\s*<hr>\s*Category:\s*([^<]+)<br>\s*([^<]*)", html, re.S)
        edu_cat = edm.group(1).strip() if edm else ""
        edu_detail = edm.group(2).strip() if edm else ""
        education = (edu_cat + " - " + edu_detail).strip(" -") if edu_cat else ""
        results.append({
            "candidate_id": cid, "name": name,
            "party_short": party, "party": PARTY_FULL.get(party, party),
            "age": age, "education": education,
            "criminal": criminal if criminal is not None else 0,
            "assets": clean_money(assets), "liabilities": clean_money(liab),
            "term_start": tstart, "term_end": tend,
            "election_note": enote,
            "mplads_note": MPLADS_NOTE,
            "myneta_url": f"https://myneta.info/rajsab09aff/candidate.php?candidate_id={cid}",
        })
        print(f"  OK {name} ({party}, {tstart}-{tend}) | age {age} | crim {criminal} | assets {clean_money(assets)}")
    except Exception as e:
        failed.append((cid, name, str(e)[:80]))
        print(f"  FAIL {name}: {e}")

out = os.path.join(CACHE, "mp_rs.json")
json.dump(results, open(out, "w"), ensure_ascii=False, indent=1)
print("DONE. RS MPs:", len(results), "failed:", len(failed), "->", out)

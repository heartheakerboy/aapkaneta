#!/usr/bin/env python3
"""Pull MPLADS tiles for all 48 Maharashtra LS constituencies (18th LS).
Output: .myneta-cache/mplads.json"""
import json
import os
import re
import time
import urllib.request

CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".myneta-cache")
API = "https://mplads.mospi.gov.in/rest/PreLoginDashboardData"

def post(ep, payload):
    req = urllib.request.Request(
        f"{API}/{ep}",
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json; charset=utf-8",
                 "User-Agent": "Mozilla/5.0"},
        method="POST")
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8", errors="replace"))

consts = post("getConstituencyData", {"id": 21})
print("constituencies:", len(consts))

def num(s):
    s = re.sub(r"[^\d.]", "", s or "")
    try:
        return float(s)
    except ValueError:
        return 0.0

results = []
for c in consts:
    cid, cap = c["ID"], c["CAPTION"]
    try:
        t = post("getTilesData", {"uname": f"21,{cid},0,2,7"})
        alloc = num(t["Allocated Limit for Hon\u0027ble MPs"][0])
        rec = t["Works Recommended"]
        sanc = t["Works Sanctioned"]
        comp = t["Works Completed"]
        exp = num(t["Expenditure on Completed and On-going Works as on Date"][0])
        results.append({
            "const_id": cid, "constituency": cap,
            "allocated": alloc,
            "recommended_works": int(rec[0]), "recommended_amt": num(rec[1]),
            "sanctioned_works": int(sanc[0]), "sanctioned_amt": num(sanc[1]),
            "completed_works": int(comp[0]), "completed_amt": num(comp[1]),
            "expenditure": exp,
        })
        print(f"  {cap}: alloc {alloc/1e7:.2f}cr, rec {rec[0]}, exp {exp/1e7:.2f}cr")
    except Exception as e:
        print(f"  FAIL {cap}: {e}")
    time.sleep(0.6)

json.dump(results, open(os.path.join(CACHE, "mplads.json"), "w"), ensure_ascii=False, indent=1)
print("saved", len(results))

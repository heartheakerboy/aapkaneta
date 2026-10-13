#!/usr/bin/env python3
"""Scrape all 70 Delhi MLAs (Feb 2025 election) from myneta.info/Delhi2025.
Steps:
  1. District -> constituencies from myneta Delhi2025 index dropdown sections
     (authoritative: 11 revenue districts, 70 ACs).
  2. AC number + reservation from Wikipedia
     "List of constituencies of the Delhi Legislative Assembly"
     (reservation may be rowspanned - carried forward).
  3. Per constituency: winner + affidavit summary; winner candidate page for
     assets/liabilities.
Output: .myneta-cache/delhi/delhi.json
Be polite: ~1.2s delay between requests."""
import json
import os
import re
import time
import urllib.request

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "delhi")
os.makedirs(CACHE, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}
MAIN_SITE = "https://myneta.info/Delhi2025"


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


def norm(s):
    s = s.upper()
    s = re.sub(r"\s*\(S[CT]\)\s*", "", s)
    return re.sub(r"\s+", " ", s).strip()


# ---- 1. AC number + reservation from Wikipedia ----
wiki = get(
    "https://en.wikipedia.org/wiki/List_of_constituencies_of_the_Delhi_Legislative_Assembly",
    "wiki-ac-list.html",
)


def clean(c):
    c = re.sub(r"<[^>]+>", " ", c)
    c = re.sub(r"\[[0-9]+\]", " ", c)
    return re.sub(r"\s+", " ", c).strip()


m = re.search(r'<table[^>]*class="[^"]*wikitable[^"]*"[^>]*>(.*?)</table>', wiki, re.S)
body = m.group(1)
rows = re.findall(r"<tr[^>]*>(.*?)</tr>", body, re.S)
acs = {}  # norm name -> (number, reservation)
last_res = "None"
for r in rows:
    cells = [clean(c) for c in re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", r, re.S)]
    if not cells or not cells[0].isdigit():
        continue
    num = int(cells[0])
    if num < 1 or num > 70:
        continue
    name = cells[1]
    if len(cells) == 6:
        last_res = cells[2]
    res = last_res
    acs[norm(name)] = (num, "SC" if res.upper() == "SC" else "ST" if res.upper() == "ST" else "None")
print("Wikipedia AC rows:", len(acs))
assert len(acs) == 70, f"expected 70 AC rows, got {len(acs)}"

# ---- 2. myneta index: district -> constituencies ----
h = get(MAIN_SITE + "/", "index.html")
heads = [(m.start(), m.group(1).strip()) for m in re.finditer(r"handle_dropdown\('item', '\d+'\)\">\s*([A-Z][A-Z .()\-&]+?)\s*<", h)]
print("district sections:", len(heads), [d for _, d in heads])
assert len(heads) == 11, f"expected 11 district sections, got {len(heads)}"

entries = []  # (site, cid, raw_name, district)
for hi, (pos, district_name) in enumerate(heads):
    end = heads[hi + 1][0] if hi + 1 < len(heads) else len(h)
    seg = h[pos:end]
    for cm in re.finditer(r'constituency_id=(\d+)[^>]*>\s*([^<]+)</a>', seg):
        cid, cname = cm.group(1), cm.group(2).strip()
        entries.append((MAIN_SITE, cid, cname, district_name.title().replace(" And ", " and ")))
print("constituencies:", len(entries))
assert len(entries) == 70, f"expected 70, got {len(entries)}"
byes = [e for e in entries if "BYE ELECTION" in e[2].upper()]
print("bye entries:", len(byes))


# ---- 3. scrape winners ----
def scrape_one(site, cid, craw):
    cand_url = f"{site}/index.php?action=show_candidates&constituency_id={cid}"
    html = get(cand_url, f"cand-{cid}.html")
    m = re.search(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a><b>&nbsp;?\s*&nbsp;?<font[^>]*>\s*Winner", html)
    if not m:
        m = re.search(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a>(.{0,150}?)Winner", html, re.S)
    if not m:
        return None, "no winner marker"
    cand_id, name = m.group(1), m.group(2).strip()
    tstart = html.rfind("<tr>", 0, m.start())
    tend = html.find("</tr>", m.end())
    row = html[tstart:tend]
    cells = [re.sub(r"<[^>]+>", " ", c) for c in re.findall(r"<td[^>]*>(.*?)</td>", row, re.S)]
    cells = [re.sub(r"\s+", " ", c).strip() for c in cells]
    party = cells[2] if len(cells) > 2 else ""
    crim_m = re.search(r"(\d+)", cells[3]) if len(cells) > 3 else None
    criminal = int(crim_m.group(1)) if crim_m else 0
    edu = cells[4] if len(cells) > 4 else ""
    age = re.search(r"(\d+)", cells[5]).group(1) if len(cells) > 5 and re.search(r"(\d+)", cells[5]) else ""
    whtml = get(f"{site}/candidate.php?candidate_id={cand_id}", f"winner-cand-{cid}-{cand_id}.html")
    am = re.search(r"Assets:\s*</td><td>\s*<b>(Rs&nbsp;[0-9,]+|Nil)</b>", whtml)
    lm = re.search(r"Liabilities:\s*</td><td>\s*<b>(Rs&nbsp;[0-9,]+|Nil)</b>", whtml)
    assets = ("Rs " + am.group(1).replace("Rs&nbsp;", "")) if am and "Rs" in am.group(1) else (am.group(1) if am else None)
    liab = ("Rs " + lm.group(1).replace("Rs&nbsp;", "")) if lm and "Rs" in lm.group(1) else (lm.group(1) if lm else None)
    return {
        "site": site, "myneta_const_id": cid, "constituency_raw": craw,
        "candidate_id": cand_id, "name": name, "party_short": party,
        "age": age, "education": edu, "criminal": criminal,
        "assets": assets, "liabilities": liab,
    }, None


results, failed = [], []
for i, (site, cid, craw, district_name) in enumerate(entries):
    try:
        rec, err = scrape_one(site, cid, craw)
        if err:
            failed.append((cid, craw, err))
            continue
        ac = acs.get(norm(craw))
        rec.update({
            "constituency": craw.title(),
            "number": ac[0] if ac else None,
            "district": district_name,
            "reservation": ac[1] if ac else "None",
            "unmatched": not bool(ac),
        })
        results.append(rec)
    except Exception as e:
        failed.append((cid, craw, str(e)[:100]))
    if (i + 1) % 20 == 0:
        print(f"  {i+1}/{len(entries)} done, failed: {len(failed)}")

json.dump(results, open(os.path.join(CACHE, "delhi.json"), "w"), ensure_ascii=False, indent=1)
print("DONE. MLAs:", len(results), "failed:", len(failed))
for f in failed:
    print("  FAIL:", f)
print("unmatched:", [r["constituency_raw"] for r in results if r.get("unmatched")])
from collections import Counter
print("party tally:", Counter(r["party_short"] for r in results))
print("district tally:", Counter(r["district"] for r in results))

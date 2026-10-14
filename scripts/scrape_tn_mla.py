#!/usr/bin/env python3
"""Scrape all 234 Tamil Nadu MLAs (Apr/May 2026 election) from myneta.info/tamilnadu2026.
Steps:
  1. AC number + reservation + district from Wikipedia
     "List of constituencies of the Tamil Nadu Legislative Assembly"
     (rowspan expansion). Cross-check: myneta constituency labels carry
     (SC)/(ST) suffixes; TN aggregate = 44 SC + 2 ST.
  2. Per constituency: winner + affidavit summary; winner candidate page for
     assets/liabilities.
  3. District sections from myneta index dropdown (38 districts).
  4. BYE-ELECTION entries (if any since May 2026) reported separately.
Output: .myneta-cache/tn_mla/tn_mla.json
Be polite: ~1.2s delay between requests, 3 retries, cache reuse.
Adapted from scripts/scrape_bihar_mla.py.
"""
import json
import os
import re
import time
import urllib.request
from collections import Counter

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "tn_mla")
os.makedirs(CACHE, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}
MAIN_SITE = "https://myneta.info/tamilnadu2026"


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
    s = re.sub(r"\.", "", s)  # DR.RADHAKRISHNAN vs Dr. Radhakrishnan
    s = re.sub(r"\s*\(S[CT]\)\s*", "", s)
    s = re.sub(r"\s*:\s*BYE ELECTION.*$", "", s)
    return re.sub(r"\s+", " ", s).strip()


# myneta label spellings -> wikipedia spellings (both normalized)
NAME_FIX = {
    "VRIDHACHALAM": "VIRUDHACHALAM",
    "PAPPIREDDIPATTI": "PAPPIREDDIPPATTI",
    "NILAKKOTTAI": "NILAKOTTAI",
    "THALLY": "THALLI",
    "VEDHARANYAM": "VEDARANYAM",
    "PARAMATHIVELUR": "PARAMATHI VELUR",
    "MUDUKULATHUR": "MUDHUKULATHUR",
    "SHOLINGHUR": "SHOLINGUR",
    "TIRUPPATHUR": "TIRUPPATTUR",
    "TIRUPATTUR": "TIRUPPATTUR",
    "BODINAYAKKANUR": "BODINAYAKANUR",
    "MADHAVARAM": "MADAVARAM",
    "MADHURAVOYAL": "MADURAVOYAL",
    "THOOTHUKUDI": "THOOTHUKKUDI",
    "MANAPPARAI": "MANAPAARAI",
    "GUDIYATTAM": "GUDIYATHAM",
    "ARUPPUKOTTAI": "ARUPPUKKOTTAI",
    "DRRADHAKRISHNAN NAGAR": "DR RADHAKRISHNAN NAGAR",
}
# myneta district section spellings -> official district (for disambiguation)
DIST_FIX = {"Tirupathur": "Tirupattur", "The Nilgiris": "Nilgiris"}


# ---- 0. myneta index (cache it early) ----
index_html = get(MAIN_SITE + "/", "index.html")

# ---- 1. AC number + reservation + district from Wikipedia (rowspan expansion) ----
wiki = get(
    "https://en.wikipedia.org/wiki/List_of_constituencies_of_the_Tamil_Nadu_Legislative_Assembly",
    "wiki-ac-list.html",
)


def clean(c):
    c = re.sub(r"<[^>]+>", " ", c)
    c = re.sub(r"\[[0-9]+\]", " ", c)
    return re.sub(r"\s+", " ", c).strip()


tables = list(re.finditer(r'<table[^>]*class="[^"]*wikitable[^"]*"[^>]*>', wiki))
body = None
for tm in tables:
    end = wiki.find("</table>", tm.start())
    if end - tm.start() > 150000:  # the big 234-row table
        body = wiki[tm.start():end]
        break
assert body, "constituency table not found"
rows = re.findall(r"<tr[^>]*>(.*?)</tr>", body, re.S)
active = {}
acs_by_num = {}   # number -> (num, name, reservation, district)
acs_by_name = {}  # norm name -> [ (num, reservation, district) ]
for r in rows:
    for c in list(active):
        active[c][0] -= 1
        if active[c][0] <= 0:
            del active[c]
    cells = re.findall(r"<t[dh]([^>]*)>(.*?)</t[dh]>", r, re.S)
    row = {}
    col = 0
    for attrs, content in cells:
        while col in active:
            row[col] = active[col][1]
            col += 1
        v = clean(content)
        row[col] = v
        rm = re.search(r'rowspan="(\d+)"', attrs)
        rs = int(rm.group(1)) if rm else 1
        if rs > 1:
            active[col] = [rs, v]
        col += 1
    while col in active:
        row[col] = active[col][1]
        col += 1
    if not str(row.get(0, "")).isdigit():
        continue
    num = int(row[0])
    if num < 1 or num > 234:
        continue
    name = row.get(1, "")
    res = row.get(2, "")
    res = "SC" if res == "SC" else "ST" if res == "ST" else "None"
    # NOTE: TN wiki table columns are: # | Constituency | Reserved | Electors | Change | District | LS | Since
    dist = row.get(5, "")
    acs_by_num[num] = (num, name, res, dist)
    acs_by_name.setdefault(norm(name), []).append((num, res, dist))
print("Wikipedia AC rows:", len(acs_by_num))
assert len(acs_by_num) == 234, f"expected 234 AC rows, got {len(acs_by_num)}"
print("wiki reservation:", Counter(v[2] for v in acs_by_num.values()))
ambig = {k: v for k, v in acs_by_name.items() if len(v) > 1}
print("ambiguous names:", {k: [(n, d) for n, r, d in v] for k, v in ambig.items()})


def wiki_lookup(craw, entry_district):
    """(number, reservation, district) for a myneta constituency label;
    disambiguate duplicate names by district."""
    key = NAME_FIX.get(norm(craw), norm(craw))
    cands = acs_by_name.get(key, [])
    if not cands:
        return None
    if len(cands) == 1:
        num, res, wdist = cands[0]
        return (num, res, wdist)
    wd = DIST_FIX.get(entry_district, entry_district)
    for num, res, wdist in cands:
        if wdist.lower() == (wd or "").lower():
            return (num, res, wdist)
    return None


# ---- 2. myneta index: district -> constituencies ----
h = index_html
heads = [(m.start(), m.group(0)) for m in re.finditer(r"handle_dropdown\('item', '\d+'\)\">", h)]
dist_names = []
for pos, _ in heads:
    nm = re.search(r"handle_dropdown\('item', '\d+'\)\">([^<]+)", h[pos:pos+300])
    dist_names.append(nm.group(1).strip() if nm else "")
print("district sections:", len(heads))
for d in dist_names:
    print("  ", d)
assert len(heads) == 38, f"expected 38 district sections, got {len(heads)}"


def title_fix(d):
    d = d.title().replace(" And ", " and ")
    FIX = {
        "The Nilgiris": "Nilgiris",
        "Kanyakumari": "Kanniyakumari",
        "Tuticorin": "Thoothukudi",
        "Tiruchirapalli": "Tiruchirappalli",
        "Tiruchchirappalli": "Tiruchirappalli",
    }
    return FIX.get(d, d)


entries = []  # (site, cid, raw_name, myneta_district)
bye_entries = []
for hi, (pos, _) in enumerate(heads):
    end = heads[hi + 1][0] if hi + 1 < len(heads) else len(h)
    seg = h[pos:end]
    dtitle = title_fix(dist_names[hi])
    for cm in re.finditer(r'constituency_id=(\d+)[^>]*>\s*([^<]+)</a>', seg):
        cid, cname = cm.group(1), cm.group(2).strip()
        if "ALL CONSTITUENCIES" in cname.upper():
            continue
        rec = (MAIN_SITE, cid, cname, dtitle)
        if "BYE ELECTION" in cname.upper():
            bye_entries.append(rec)
        else:
            entries.append(rec)
print("main constituencies:", len(entries), "| bye entries:", len(bye_entries))
assert len(entries) == 234, f"expected 234, got {len(entries)}"
for b in bye_entries:
    print("  bye:", b[1], b[2], "| district:", b[3])

# reservation cross-check from myneta labels
res_mismatch = []
for site, cid, craw, district in entries:
    mres = "ST" if re.search(r"\(ST\)", craw, re.I) else "SC" if re.search(r"\(SC\)", craw, re.I) else "None"
    w = wiki_lookup(craw, district)
    if w and w[1] != mres:
        res_mismatch.append((craw, "wiki=" + w[1], "myneta=" + mres))
print("reservation mismatches (wiki vs myneta label):", len(res_mismatch))
for m in res_mismatch:
    print("  ", m)


# ---- 3. scrape winners ----
# Manual overrides for ACs where myneta's candidate list lacks the winner.
# Thiruvallur (cid 173): myneta list is missing the winner entirely; winner
# verified via ECI results (Indian Express/Business Today/Oneindia, May 2026):
# Dr. T. Arunkumar (TVK). His affidavit is unreadable even per ADR's winners
# report -> background pending.
MANUAL_WINNERS = {
    "173": {
        "site": MAIN_SITE, "myneta_const_id": "173", "constituency_raw": "THIRUVALLUR",
        "candidate_id": None, "name": "Dr. T. Arunkumar", "party_short": "TVK",
        "age": "", "education": "", "criminal": -1,
        "assets": None, "liabilities": None,
        "background_missing": True,
        "background_note_src": "ADR winners report (Tamil Nadu 2026): affidavit unclear on ECI website",
    },
}


def scrape_one(site, cid, craw, cache_prefix):
    cand_url = f"{site}/index.php?action=show_candidates&constituency_id={cid}"
    html = get(cand_url, f"{cache_prefix}-{cid}.html")
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
    whtml = get(f"{site}/candidate.php?candidate_id={cand_id}", f"winner-{cache_prefix}-{cid}-{cand_id}.html")
    am = re.search(r"Assets:\s*</td><td>\s*<b>(Rs&nbsp;[0-9,.]+|Nil)</b>", whtml)
    lm = re.search(r"Liabilities:\s*</td><td>\s*<b>(Rs&nbsp;[0-9,.]+|Nil)</b>", whtml)
    assets = ("Rs " + am.group(1).replace("Rs&nbsp;", "")) if am and "Rs" in am.group(1) else (am.group(1) if am else None)
    liab = ("Rs " + lm.group(1).replace("Rs&nbsp;", "")) if lm and "Rs" in lm.group(1) else (lm.group(1) if lm else None)
    return {
        "site": site, "myneta_const_id": cid, "constituency_raw": craw,
        "candidate_id": cand_id, "name": name, "party_short": party,
        "age": age, "education": edu, "criminal": criminal,
        "assets": assets, "liabilities": liab,
    }, None


# ---- main election ----
results, failed = [], []
by_name = {}  # norm AC name -> main record
for i, (site, cid, craw, myneta_district) in enumerate(entries):
    try:
        if cid in MANUAL_WINNERS:
            rec = dict(MANUAL_WINNERS[cid])
            print(f"  manual override: {craw} <- {rec['name']} ({rec['party_short']})")
        else:
            rec, err = scrape_one(site, cid, craw, "cand")
            if err:
                failed.append((cid, craw, err))
                continue
        w = wiki_lookup(craw, myneta_district)
        rec.update({
            "constituency": craw.title(),
            "number": w[0] if w else None,
            "district": (w[2] if w else None) or myneta_district,
            "district_myneta": myneta_district,
            "reservation": w[1] if w else "None",
            "unmatched": not bool(w),
        })
        results.append(rec)
        by_name[norm(craw)] = rec
    except Exception as e:
        failed.append((cid, craw, str(e)[:100]))
    if (i + 1) % 40 == 0:
        print(f"  main {i+1}/{len(entries)} done, failed: {len(failed)}")

# ---- bye elections: report only (parent decides override) ----
for site, cid, craw, myneta_district in bye_entries:
    try:
        rec, err = scrape_one(site, cid, craw, "cand-bye")
        if err:
            failed.append((cid, craw + " [BYE]", err))
            continue
        rec.update({"bye_election": True, "district_myneta": myneta_district})
        results.append(rec)
        print(f"  bye record: {rec['constituency_raw']} <- {rec['name']} ({rec['party_short']})")
    except Exception as e:
        failed.append((cid, craw + " [BYE]", str(e)[:100]))

json.dump(results, open(os.path.join(CACHE, "tn_mla.json"), "w"), ensure_ascii=False, indent=1)
print("DONE. records:", len(results), "failed:", len(failed))
for f in failed:
    print("  FAIL:", f)
print("unmatched:", [r["constituency_raw"] for r in results if r.get("unmatched")])
print("district mismatches (myneta vs wiki):",
      [(r["constituency_raw"], r["district_myneta"], r["district"]) for r in results
       if r.get("district_myneta") and r["district_myneta"].lower() != r["district"].lower()])
print("party tally:", Counter(r["party_short"] for r in results if not r.get("bye_election")))
print("district tally:", Counter(r["district"] for r in results if not r.get("bye_election")))
print("reservation tally:", Counter(r["reservation"] for r in results if not r.get("bye_election")))
print("missing assets:", [(r["number"], r["constituency_raw"]) for r in results if not r.get("assets")])

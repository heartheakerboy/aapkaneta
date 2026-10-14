#!/usr/bin/env python3
"""Scrape all 243 Bihar MLAs (Nov 2025 election) from myneta.info/Bihar2025.
Steps:
  1. District -> constituencies from myneta Bihar2025 index dropdown sections
     (authoritative: 38 districts, 243 ACs in main election + 1 BYE-ELECTION entry).
  2. AC number + reservation from Wikipedia
     "List of constituencies of the Bihar Legislative Assembly"
     (rowspan expansion).
     Cross-check: myneta constituency labels carry (SC)/(ST) suffixes;
     ECI aggregate 38 SC + 2 ST.
  3. Per constituency: winner + affidavit summary; winner candidate page for
     assets/liabilities.
  4. BYE-ELECTION override: Bankipur bye (30-07-2026) - the bye winner is the
     CURRENT MLA, so the bye record replaces the main-election record
     (with electionNote).
Output: .myneta-cache/bihar_mla/bihar_mla.json
Be polite: ~1.2s delay between requests, 3 retries, cache reuse."""
import json
import os
import re
import time
import urllib.request
from collections import Counter

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "bihar_mla")
os.makedirs(CACHE, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}
MAIN_SITE = "https://myneta.info/Bihar2025"


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
    s = re.sub(r"\s*:\s*BYE ELECTION.*$", "", s)
    return re.sub(r"\s+", " ", s).strip()


# ---- 1. AC number + reservation + district from Wikipedia (rowspan expansion) ----
wiki = get(
    "https://en.wikipedia.org/wiki/List_of_constituencies_of_the_Bihar_Legislative_Assembly",
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
    if end - tm.start() > 80000:  # the big 243-row table
        body = wiki[tm.start():end]
        break
assert body, "constituency table not found"
rows = re.findall(r"<tr[^>]*>(.*?)</tr>", body, re.S)
active = {}
DIST_WIKI_FIX = {
    "Paschim Champaran": "West Champaran",
    "Purvi Champaran": "East Champaran",
}
# NOTE: Bihar has 2 pairs of duplicate AC names across districts:
# Kalyanpur #16 (Purvi Champaran) vs Kalyanpur #131 (Samastipur),
# Pipra #17 (Purvi Champaran) vs Pipra #42 (Supaul).
# So wiki lookup is keyed by number; name lookup returns a list,
# disambiguated by district when ambiguous.
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
    if num < 1 or num > 243:
        continue
    name = row.get(1, "")
    res = row.get(2, "")
    res = "SC" if res == "SC" else "ST" if res == "ST" else "None"
    dist = row.get(3, "")
    acs_by_num[num] = (num, name, res, dist)
    acs_by_name.setdefault(norm(name), []).append((num, res, dist))
print("Wikipedia AC rows:", len(acs_by_num))
assert len(acs_by_num) == 243, f"expected 243 AC rows, got {len(acs_by_num)}"
print("wiki reservation:", Counter(v[2] for v in acs_by_num.values()))
ambig = {k: v for k, v in acs_by_name.items() if len(v) > 1}
print("ambiguous names:", {k: [(n, d) for n, r, d in v] for k, v in ambig.items()})


def wiki_lookup(craw, entry_district):
    """(number, reservation) for a myneta constituency label; disambiguate
    duplicate names by district."""
    cands = acs_by_name.get(norm(craw), [])
    if not cands:
        return None
    if len(cands) == 1:
        num, res, _ = cands[0]
        return (num, res)
    wd = DIST_WIKI_FIX.get(entry_district, entry_district)
    for num, res, wdist in cands:
        if wdist.lower() == wd.lower():
            return (num, res)
    return None

# ---- 2. myneta index: district -> constituencies ----
h = open(os.path.join(CACHE, "index.html"), encoding="utf-8", errors="replace").read()
heads = [(m.start(), m.group(1).strip()) for m in re.finditer(r"handle_dropdown\('item', '\d+'\)\">\s*([A-Z][A-Z .()\-&]+?)\s*<", h)]
print("district sections:", len(heads))
assert len(heads) == 38, f"expected 38 district sections, got {len(heads)}"

DIST_FIX = {"Kaimur (Bhabua)": "Kaimur"}

entries = []  # (site, cid, raw_name, district)
bye_entries = []
for hi, (pos, district_name) in enumerate(heads):
    end = heads[hi + 1][0] if hi + 1 < len(heads) else len(h)
    seg = h[pos:end]
    dtitle = district_name.title().replace(" And ", " and ")
    dtitle = DIST_FIX.get(dtitle, dtitle)
    for cm in re.finditer(r'constituency_id=(\d+)[^>]*>\s*([^<]+)</a>', seg):
        cid, cname = cm.group(1), cm.group(2).strip()
        rec = (MAIN_SITE, cid, cname, dtitle)
        if "BYE ELECTION" in cname.upper():
            bye_entries.append(rec)
        else:
            entries.append(rec)
print("main constituencies:", len(entries), "| bye entries:", len(bye_entries))
assert len(entries) == 243, f"expected 243, got {len(entries)}"
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
for i, (site, cid, craw, district_name) in enumerate(entries):
    try:
        rec, err = scrape_one(site, cid, craw, "cand")
        if err:
            failed.append((cid, craw, err))
            continue
        ac = wiki_lookup(craw, district_name)
        rec.update({
            "constituency": craw.title(),
            "number": ac[0] if ac else None,
            "district": district_name,
            "reservation": ac[1] if ac else "None",
            "unmatched": not bool(ac),
        })
        results.append(rec)
        by_name[norm(craw)] = rec
    except Exception as e:
        failed.append((cid, craw, str(e)[:100]))
    if (i + 1) % 40 == 0:
        print(f"  main {i+1}/{len(entries)} done, failed: {len(failed)}")

# ---- bye elections: override with current MLA ----
BYE_NOTES = {
    "252": "Upchunav 30-07-2026: Nitin Nabin (BJP) ke istife par seat khaali hui - vartaman vidhayak upchunav se jeete.",
}
for site, cid, craw, district_name in bye_entries:
    try:
        rec, err = scrape_one(site, cid, craw, "cand-bye")
        if err:
            failed.append((cid, craw + " [BYE]", err))
            continue
        key = norm(craw)
        main_rec = by_name.get(key)
        if not main_rec:
            failed.append((cid, craw + " [BYE]", "no matching main AC record"))
            continue
        rec.update({
            "constituency": main_rec["constituency"],
            "number": main_rec["number"],
            "district": main_rec["district"],
            "reservation": main_rec["reservation"],
            "unmatched": False,
            "bye_election": True,
            "electionNote": BYE_NOTES.get(cid, ""),
        })
        idx = results.index(main_rec)
        results[idx] = rec
        print(f"  bye override: {main_rec['constituency']} <- {rec['name']} ({rec['party_short']})")
    except Exception as e:
        failed.append((cid, craw + " [BYE]", str(e)[:100]))

json.dump(results, open(os.path.join(CACHE, "bihar_mla.json"), "w"), ensure_ascii=False, indent=1)
print("DONE. MLAs:", len(results), "failed:", len(failed))
for f in failed:
    print("  FAIL:", f)
print("unmatched:", [r["constituency_raw"] for r in results if r.get("unmatched")])
print("party tally:", Counter(r["party_short"] for r in results))
print("district tally:", Counter(r["district"] for r in results))
print("reservation tally:", Counter(r["reservation"] for r in results))
print("missing assets:", [(r["number"], r["constituency_raw"]) for r in results if not r.get("assets")])

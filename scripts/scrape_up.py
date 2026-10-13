#!/usr/bin/env python3
"""Scrape all 403 Uttar Pradesh MLAs from myneta.info/UttarPradesh2022 (+ bye elections).
Steps:
  1. Build .myneta-cache/up/ac-list.json from Wikipedia
     (List of constituencies of the Uttar Pradesh Legislative Assembly:
      number, name, reservation, district, Lok Sabha). Duddhi = ST override
     (Wikipedia list page says SC by mistake; Duddhi's own article + Allahabad HC
      ruling confirm both Obra and Duddhi are ST-reserved).
  2. Fetch myneta UttarPradesh2022 index -> 75 districts -> 403 main constituencies
     + 20 bye-election entries (10 on UttarPradeshBye2024, 10 older on
     uttarpradesh2022 with constituency_id 423-432).
  3. Per constituency: winner + affidavit summary; winner candidate page for
     assets/liabilities.
Output: .myneta-cache/up/up.json (raw; bye entries kept separate for fix_up.py).
Be polite: ~1.2s delay between requests."""
import json
import os
import re
import time
import urllib.request

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(BASE, ".myneta-cache", "up")
os.makedirs(CACHE, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}
MAIN_SITE = "https://myneta.info/UttarPradesh2022"


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


# ---- 1. AC list from Wikipedia ----
wiki = get(
    "https://en.wikipedia.org/wiki/List_of_constituencies_of_the_Uttar_Pradesh_Legislative_Assembly",
    "wiki-ac-list.html",
)


def clean(c):
    c = re.sub(r"<[^>]+>", " ", c)
    c = re.sub(r"\[[0-9]+\]", " ", c)
    c = re.sub(r"\s*\[[a-z ]+\]\s*$", "", c)  # Wikipedia footnote markers like " [ a ]"
    return re.sub(r"\s+", " ", c).strip()


m = re.search(r'<table[^>]*class="[^"]*wikitable[^"]*"[^>]*>(.*?)</table>', wiki, re.S)
body = m.group(1)
rows = re.findall(r"<tr[^>]*>(.*?)</tr>", body, re.S)
acs = []
district = None
for r in rows:
    cells = [clean(c) for c in re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", r, re.S)]
    if not cells or not cells[0].isdigit():
        continue
    if len(cells) == 6:
        district = cells[4]
        ls = cells[5]
    elif len(cells) == 5:
        ls = cells[4]  # district carried via rowspan
    else:
        print("ODD ROW:", cells)
        continue
    acs.append({
        "number": int(cells[0]), "name": cells[1], "reservation": cells[2],
        "district": district, "ls": ls,
    })
assert len(acs) == 403 and [a["number"] for a in acs] == list(range(1, 404)), "AC list parse failed"
# Duddhi (403) is ST-reserved (Wikipedia list page says SC by mistake)
for a in acs:
    if a["name"] == "Duddhi":
        a["reservation"] = "ST"
json.dump(acs, open(os.path.join(CACHE, "ac-list.json"), "w"), ensure_ascii=False, indent=1)
ac_by_norm = {norm(a["name"]): a for a in acs}
print("AC list:", len(acs))

# ---- 2. myneta index ----
h = get(MAIN_SITE + "/", "index.html")
heads = [(m.start(), m.group(1).strip()) for m in re.finditer(r"handle_dropdown\('item', '\d+'\)\">\s*([A-Z][A-Z .()\-&]+?)\s*<", h)]
print("districts:", len(heads))

mains = []  # (site_base, const_id, raw_name, district)
byes = []   # (site_base, const_id, raw_name, district)
for hi, (pos, district_name) in enumerate(heads):
    end = heads[hi + 1][0] if hi + 1 < len(heads) else pos + 40000
    seg = h[pos:end]
    for cm in re.finditer(r"href=(?:'|\")?(https?://[^'\"\s>]*|index\.php[^'\"\s>]*)[^>]*>([^<]+)</a>", seg):
        href, cname = cm.group(1).strip(), cm.group(2).strip()
        if "ALL CONSTITUENCIES" in cname:
            continue
        idm = re.search(r"constituency_id=(\d+)", href)
        if not idm:
            continue
        cid = idm.group(1)
        if href.startswith("http"):
            site = href.split("/index.php")[0]
        else:
            site = MAIN_SITE
        entry = (site, cid, cname, district_name)
        if "BYE ELECTION" in cname.upper():
            byes.append(entry)
        else:
            mains.append(entry)
print("main constituencies:", len(mains), "| bye entries:", len(byes))
assert len(mains) == 403, f"expected 403 mains, got {len(mains)}"


# ---- 3. scrape winners ----
def scrape_one(site, cid, craw):
    cand_url = f"{site}/index.php?action=show_candidates&constituency_id={cid}"
    tag = f"bye-{cid}" if "BYE ELECTION" in craw.upper() else f"cand-{cid}"
    html = get(cand_url, tag + ".html")
    m = re.search(r"<a href=candidate\.php\?candidate_id=(\d+)>([^<]+)</a><b>&nbsp;?\s*&nbsp;?<font[^>]*>\s*Winner", html)
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
    whtml = get(f"{site}/candidate.php?candidate_id={cand_id}", f"winner-{tag}-{cand_id}.html")
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
for i, (site, cid, craw, district_name) in enumerate(mains):
    try:
        rec, err = scrape_one(site, cid, craw)
        if err:
            failed.append((cid, craw, err))
            continue
        ac = ac_by_norm.get(norm(craw))
        rec.update({
            "constituency": ac["name"] if ac else craw.title(),
            "number": ac["number"] if ac else None,
            "district": ac["district"] if ac else district_name.title(),
            "reservation": ac["reservation"] if ac else "None",
            "ls": ac["ls"] if ac else "",
            "unmatched": not bool(ac),
        })
        results.append(rec)
    except Exception as e:
        failed.append((cid, craw, str(e)[:100]))
    if (i + 1) % 50 == 0:
        print(f"  mains {i+1}/{len(mains)} done, failed: {len(failed)}")

bye_results = []
for i, (site, cid, craw, district_name) in enumerate(byes):
    try:
        rec, err = scrape_one(site, cid, craw)
        if err:
            failed.append(("bye-" + cid, craw, err))
            continue
        bye_results.append(rec)
    except Exception as e:
        failed.append(("bye-" + cid, craw, str(e)[:100]))
    print(f"  bye {i+1}/{len(byes)}: {rec['constituency_raw'][:40] if rec else 'FAILED'} -> {(rec['name'] + ' (' + rec['party_short'] + ')') if rec else ''}")

all_recs = results + bye_results
json.dump(all_recs, open(os.path.join(CACHE, "up.json"), "w"), ensure_ascii=False, indent=1)
print("DONE. mains:", len(results), "byes:", len(bye_results), "failed:", len(failed))
for f in failed[:20]:
    print("  FAIL:", f)
print("unmatched mains:", sum(1 for r in results if r.get("unmatched")))
for r in results:
    if r.get("unmatched"):
        print("  UNMATCHED:", r["myneta_const_id"], r["constituency_raw"])

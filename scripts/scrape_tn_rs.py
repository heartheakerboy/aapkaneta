#!/usr/bin/env python3
"""Tamil Nadu Rajya Sabha backgrounds.

Combines:
  - ~/workspace/aapkaneta_scratch/tn_ls_rs.json (authoritative current 18 members, terms, notes)
  - myneta.info/rajsab09aff index page inline table (cases/education/assets/liabilities)
  - candidate detail pages (age only)
"""
import json, re, urllib.request, time, os

BASE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(BASE, ".myneta-cache", "tn_rs")
os.makedirs(CACHE, exist_ok=True)

def get(url, cache_name, force=False):
    p = os.path.join(CACHE, cache_name)
    if not force and os.path.exists(p):
        return open(p, encoding="utf-8", errors="replace").read()
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36"})
    d = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", errors="replace")
    open(p, "w").write(d)
    time.sleep(0.6)
    return d

def clean(c):
    c = re.sub(r"<[^>]+>", " ", c); c = re.sub(r"&nbsp;", " ", c); c = re.sub(r"\s+", " ", c)
    return c.strip()

def norm(s):
    s = s.upper().replace("THIRU.", "").replace("THIRU ", "").strip()
    s = re.sub(r"^([A-Z]\.\s*)+", "", s)  # leading dotted initials: "J. ", "K. R. N. "
    return re.sub(r"[^A-Z]", "", s)

h = get("https://myneta.info/rajsab09aff/", "index.html")
rows = re.findall(r"<tr[^>]*>.*?</tr>", h, re.S)
index = {}  # normname -> {cases, edu, assets, liab, cid, dispname}
for r in rows:
    if "state_id=27" not in r:
        continue
    cid = re.search(r"candidate_id=(\d+)", r)
    r2 = re.sub(r"<br[^>]*>", " ", r)
    cells = [clean(c) for c in re.findall(r"<td[^>]*>(.*?)</td>", r2, re.S)]
    try:
        i = cells.index("TAMIL NADU")
        name = cells[i - 2]
        index[norm(name)] = {
            "dispname": name,
            "cases": cells[i + 1],
            "edu": cells[i + 2],
            "assets": cells[i + 3].split("~")[0].strip(),
            "liab": cells[i + 4].split("~")[0].strip(),
            "cid": cid.group(1) if cid else None,
        }
    except Exception as e:
        print("PARSE FAIL", e)

print("index TN rows:", len(index))

research = json.load(open(os.path.expanduser("~/workspace/aapkaneta_scratch/tn_ls_rs.json")))["rs"]

# research spelling -> index norm-key overrides
RS_NAME_FIX = {"PRAVEENCHAKRAVARTY": "PRAVEENCHAKRAVARTHY"}

def age_of(cid, dispname):
    if not cid:
        return ""
    p = os.path.join(CACHE, f"cand_{cid}.html")
    d = get(f"https://myneta.info/rajsab09aff/candidate.php?candidate_id={cid}", f"cand_{cid}.html")
    m = re.search(r"<b>Age:</b>\s*(\d+)", d, re.I)
    if m:
        return m.group(1)
    m = re.search(r"Age\s*</td>\s*<td[^>]*>\s*(\d+)", d, re.I)
    if m:
        return m.group(1)
    m = re.search(r"(\d+)\s*Years", d)
    return m.group(1) if m else ""

out = []
unmatched = []
for r in research:
    key = RS_NAME_FIX.get(norm(r["name"].split("(")[0]), norm(r["name"].split("(")[0]))
    hit = index.get(key)
    if not hit:
        unmatched.append(r["name"])
        continue
    age = age_of(hit["cid"], hit["dispname"])
    bg = {
        "age": age,
        "education": hit["edu"],
        "criminalCases": int(hit["cases"]) if hit["cases"].isdigit() else -1,
        "assets": hit["assets"] or "—",
        "liabilities": hit["liab"] or "—",
        "mynetaUrl": f"https://myneta.info/rajsab09aff/candidate.php?candidate_id={hit['cid']}",
        "backgroundNote": "",
    }
    out.append({"research": r, "background": bg})

print("matched:", len(out), "unmatched:", unmatched)
json.dump(out, open(os.path.join(CACHE, "tn_rs_combined.json"), "w"), ensure_ascii=False, indent=1)
print("wrote tn_rs_combined.json")

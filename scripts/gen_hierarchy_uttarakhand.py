#!/usr/bin/env python3
"""Regenerate public/hierarchy-uttarakhand.json from src/data/uttarakhand.ts.

Parses the uttarakhandConstituencies export (type 'Vidhan Sabha' only) and groups ACs
by district (district field is authoritative in the TS file). Seat numbers come
from the export itself. Run: python3 scripts/gen_hierarchy_uttarakhand.py

NOTE: all 70 ACs map cleanly to one district under the ECI 2008 delimitation —
no plurality judgment was needed.
"""
import json
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA_TS = ROOT / "src/data/uttarakhand.ts"
OUT = ROOT / "public/hierarchy-uttarakhand.json"

DISTRICTS_ORDER = ['Uttarkashi', 'Chamoli', 'Rudraprayag', 'Tehri Garhwal', 'Dehradun', 'Pauri Garhwal', 'Haridwar', 'Pithoragarh', 'Bageshwar', 'Almora', 'Champawat', 'Nainital', 'Udham Singh Nagar']


def dslug(d):
    return re.sub(r'-+$', '', re.sub(r'[^a-z0-9]+', '-', d.lower())).strip('-')


def main():
    t = DATA_TS.read_text(encoding='utf-8')
    m = re.search(r"export const uttarakhandConstituencies: Constituency\[\] = \[(.*?)\];", t, re.S)
    items = re.findall(r"\{ slug: '([^']+)', name: '([^']+)', type: '([^']+)', number: (\d+), district: '([^']+)', reservation: '([^']+)', state: '([^']+)' \}", m.group(1))
    districts = []
    for dn in DISTRICTS_ORDER:
        acs = [{'n': int(num), 'name': name, 'slug': slug}
               for (slug, name, typ, num, dist, res, st) in items if dist == dn]
        acs.sort(key=lambda a: a['n'])
        districts.append({'name': dn, 'slug': dslug(dn), 'acs': acs})
    out = {'state': 'Uttarakhand', 'stateSlug': 'Uttarakhand', 'districts': districts}
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf-8')
    print('wrote', OUT, '—', sum(len(d['acs']) for d in districts), 'ACs')


if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""Regenerate public/hierarchy-meghalaya.json from src/data/meghalaya.ts.

Parses the meghalayaConstituencies export (type 'Vidhan Sabha' only) and groups ACs
by district (district field is authoritative in the TS file). Seat numbers come
from the export itself. Run: python3 scripts/gen_hierarchy_meghalaya.py

NOTE: all 60 ACs map cleanly to one district under the ECI 2023 delimitation —
no plurality judgment was needed.
"""
import json
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA_TS = ROOT / "src/data/meghalaya.ts"
OUT = ROOT / "public/hierarchy-meghalaya.json"

DISTRICTS_ORDER = ['West Garo Hills', 'South West Garo Hills', 'East Garo Hills', 'North Garo Hills', 'South Garo Hills', 'West Khasi Hills', 'South West Khasi Hills', 'Eastern West Khasi Hills', 'East Khasi Hills', 'Ri Bhoi', 'West Jaintia Hills', 'East Jaintia Hills']


def dslug(d):
    return re.sub(r'-+$', '', re.sub(r'[^a-z0-9]+', '-', d.lower())).strip('-')


def main():
    t = DATA_TS.read_text(encoding='utf-8')
    m = re.search(r"export const meghalayaConstituencies: Constituency\[\] = \[(.*?)\];", t, re.S)
    items = re.findall(r"\{ slug: '([^']+)', name: '([^']+)', type: '([^']+)', number: (\d+), district: '([^']+)', reservation: '([^']+)', state: '([^']+)' \}", m.group(1))
    districts = []
    for dn in DISTRICTS_ORDER:
        acs = [{'n': int(num), 'name': name, 'slug': slug}
               for (slug, name, typ, num, dist, res, st) in items if dist == dn]
        acs.sort(key=lambda a: a['n'])
        districts.append({'name': dn, 'slug': dslug(dn), 'acs': acs})
    out = {'state': 'Meghalaya', 'stateSlug': 'Meghalaya', 'districts': districts}
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf-8')
    print('wrote', OUT, '—', sum(len(d['acs']) for d in districts), 'ACs')


if __name__ == '__main__':
    main()

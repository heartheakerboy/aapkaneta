#!/usr/bin/env python3
"""Regenerate public/hierarchy-chhattisgarh.json from src/data/chhattisgarh.ts.

Parses the chhattisgarhConstituencies export (type 'Vidhan Sabha' only) and groups ACs
by district (district field is authoritative in the TS file). Seat numbers come
from the export itself. Run: python3 scripts/gen_hierarchy_chhattisgarh.py

District order = seat-number order (ECI 2008). Districts (33, vartaman): Manendragarh-Chirmiri-Bharatpur,
Koriya, Surajpur, Balrampur, Surguja, Jashpur, Raigarh, Sarangarh-Bilaigarh, Korba,
Gaurela-Pendra-Marwahi, Bilaspur, Mungeli, Janjgir-Champa, Sakti, Mahasamund, Baloda Bazar,
Raipur, Gariaband, Dhamtari, Balod, Durg, Bemetara, Kabirdham, Khairagarh-Chhuikhadan-Gandai,
Rajnandgaon, Mohla-Manpur-Ambagarh Chowki, Kanker, Kondagaon, Narayanpur, Bastar,
Dantewada, Bijapur, Sukma.
"""
import json
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA_TS = ROOT / "src/data/chhattisgarh.ts"
OUT = ROOT / "public/hierarchy-chhattisgarh.json"

DISTRICTS_ORDER = [
    'Manendragarh-Chirmiri-Bharatpur', 'Koriya', 'Surajpur', 'Balrampur', 'Surguja',
    'Jashpur', 'Raigarh', 'Sarangarh-Bilaigarh', 'Korba', 'Gaurela-Pendra-Marwahi',
    'Bilaspur', 'Mungeli', 'Janjgir-Champa', 'Sakti', 'Mahasamund', 'Baloda Bazar',
    'Raipur', 'Gariaband', 'Dhamtari', 'Balod', 'Durg', 'Bemetara', 'Kabirdham',
    'Khairagarh-Chhuikhadan-Gandai', 'Rajnandgaon', 'Mohla-Manpur-Ambagarh Chowki',
    'Kanker', 'Kondagaon', 'Narayanpur', 'Bastar', 'Dantewada', 'Bijapur', 'Sukma',
]


def dslug(d):
    return re.sub(r'-+$', '', re.sub(r'[^a-z0-9]+', '-', d.lower())).strip('-')


def main():
    t = DATA_TS.read_text(encoding='utf-8')
    m = re.search(r"export const chhattisgarhConstituencies: Constituency\[\] = \[(.*?)\];", t, re.S)
    items = re.findall(r"\{ slug: '([^']+)', name: '([^']+)', type: '([^']+)', number: (\d+), district: '([^']+)', reservation: '([^']+)', state: '([^']+)' \}", m.group(1))
    districts = []
    for dn in DISTRICTS_ORDER:
        acs = [{'n': int(num), 'name': name, 'slug': slug}
               for (slug, name, typ, num, dist, res, st) in items if dist == dn]
        acs.sort(key=lambda a: a['n'])
        districts.append({'name': dn, 'slug': dslug(dn), 'acs': acs})
    out = {'state': 'Chhattisgarh', 'stateSlug': 'Chhattisgarh', 'districts': districts}
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf-8')
    print('wrote', OUT, '—', sum(len(d['acs']) for d in districts), 'ACs')


if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""Regenerate public/hierarchy-arunachal.json from src/data/arunachal.ts.

Parses the arunachalConstituencies export (type 'Vidhan Sabha' only) and groups ACs
by district (district field is authoritative in the TS file). Seat numbers come
from the export itself. Run: python3 scripts/gen_hierarchy_arunachal.py

District order = seat-number order (ECI 2024). Districts: Tawang, West Kameng, Bichom,
East Kameng, Pakke Kessang, Papum Pare, Keyi Panyor, Lower Subansiri, Kra Daadi,
Kurung Kumey, Upper Subansiri, Kamle, West Siang, Lower Siang, Leparada, Siang,
Shi-Yomi, Upper Siang, Dibang Valley, Lower Dibang Valley, Lohit, Anjaw, Namsai,
Changlang, Tirap, Longding (26).
"""
import json
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA_TS = ROOT / "src/data/arunachal.ts"
OUT = ROOT / "public/hierarchy-arunachal.json"

DISTRICTS_ORDER = ['Tawang', 'West Kameng', 'Bichom', 'East Kameng', 'Pakke Kessang', 'Papum Pare', 'Keyi Panyor', 'Lower Subansiri', 'Kra Daadi', 'Kurung Kumey', 'Upper Subansiri', 'Kamle', 'West Siang', 'Lower Siang', 'Leparada', 'Siang', 'Shi-Yomi', 'Upper Siang', 'East Siang', 'Dibang Valley', 'Lower Dibang Valley', 'Lohit', 'Anjaw', 'Namsai', 'Changlang', 'Tirap', 'Longding']


def dslug(d):
    return re.sub(r'-+$', '', re.sub(r'[^a-z0-9]+', '-', d.lower())).strip('-')


def main():
    t = DATA_TS.read_text(encoding='utf-8')
    m = re.search(r"export const arunachalConstituencies: Constituency\[\] = \[(.*?)\];", t, re.S)
    items = re.findall(r"\{ slug: '([^']+)', name: '([^']+)', type: '([^']+)', number: (\d+), district: '([^']+)', reservation: '([^']+)', state: '([^']+)' \}", m.group(1))
    districts = []
    for dn in DISTRICTS_ORDER:
        acs = [{'n': int(num), 'name': name, 'slug': slug}
               for (slug, name, typ, num, dist, res, st) in items if dist == dn]
        acs.sort(key=lambda a: a['n'])
        districts.append({'name': dn, 'slug': dslug(dn), 'acs': acs})
    out = {'state': 'Arunachal Pradesh', 'stateSlug': 'Arunachal Pradesh', 'districts': districts}
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf-8')
    print('wrote', OUT, '—', sum(len(d['acs']) for d in districts), 'ACs')


if __name__ == '__main__':
    main()

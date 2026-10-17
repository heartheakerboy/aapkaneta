// Tripura foundation — Lok Sabha MP (2024 chunav; karyakaal 2024–2029). 2 seats, dono BJP.
// Background data = ECI affidavit via myneta.info/LokSabha2024 (verified 2026-10-17) — 2/2.
// MPLADS fund ka neta-war record e-SAKSHI dashboard par uplabdh hai; Tripura ke MP ke ankde agle sweep me jode jayenge.
import type { Neta, Constituency } from './pilot';

export const tripuraMpNetas: Neta[] = [
  {
    slug: 'biplab-kumar-deb',
    name: 'Biplab Kumar Deb',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Tripura',
    constituency: 'Tripura West (Lok Sabha)',
    constituencySlug: 'tripura-west-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Tripura West (Lok Sabha)', constituencySlug: 'tripura-west-lok-sabha', party: 'Bharatiya Janata Party', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '', utilized: '', utilizationPct: 0,
      note: 'e-SAKSHI dashboard (mplads.mospi.gov.in) par neta-war MPLADS ankde uplabdh hain; Tripura ke MP ke ankde agle sweep me jode jayenge.',
    },
    background: {
      age: '53',
      education: 'Graduate — B.A. Pass, Tripura University (1999)',
      criminalCases: 0,
      assets: 'Rs 4,99,23,347',
      liabilities: 'Nil',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id=1156',
      backgroundNote: 'Pehchan MyNeta LokSabha2024 halafname se pakki: naam BIPLAB KUMAR DEB, BJP, TRIPURA WEST — naam, seat aur party match. S/o sw. Hirudhan Deb; pesha Social Work; 2024 me Tripura West se pehli baar Lok Sabha jeete. Poorv Tripura CM (Mar 2018–May 2022) aur RS MP (2022–2024).',
    },
    electionNote: '2024 Lok Sabha chunav (19 Apr 2024 ko matdan, 4 Jun 2024 ko parinaam) me Tripura West se jeete: 8,81,341 votes. Runner-up Asish Kumar Saha (INC) — 2,69,763 votes. Margin 6,11,578.',
  },
  {
    slug: 'kriti-devi-debbarman',
    name: 'Kriti Devi Debbarman',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Tripura',
    constituency: 'Tripura East (Lok Sabha)',
    constituencySlug: 'tripura-east-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Tripura East (Lok Sabha)', constituencySlug: 'tripura-east-lok-sabha', party: 'Bharatiya Janata Party', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '', utilized: '', utilizationPct: 0,
      note: 'e-SAKSHI dashboard (mplads.mospi.gov.in) par neta-war MPLADS ankde uplabdh hain; Tripura ke MP ke ankde agle sweep me jode jayenge.',
    },
    background: {
      age: '52',
      education: 'Others — Diploma in Rural Management, IRMA, Anand, Gujarat (1999); HSLC, Meghalaya Board of Secondary Education (1990)',
      criminalCases: 0,
      assets: 'Rs 85,92,32,932',
      liabilities: 'Rs 15,25,809',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id=1765',
      backgroundNote: 'Pehchan MyNeta LokSabha2024 halafname (ADR summary) se pakki: naam KRITI DEVI DEBBARMAN, BJP, TRIPURA EAST (ST) — naam (ECI spelling DEBBARMAN), seat aur party match. Pesha Self Employed/Agriculture; TMP founder Pradyot Debbarma ki behen. 2024 me pehli baar Lok Sabha jeeti. Koi criminal case nahi.',
    },
    electionNote: '2024 Lok Sabha chunav (26 Apr 2024 ko matdan, 4 Jun 2024 ko parinaam) me Tripura East (ST) se jeeti: 7,77,447 votes. Runner-up Rajendra Reang (CPI(M)) — 2,90,628 votes. Margin 4,86,819.',
  },
];

export const tripuraMpConstituencies: Constituency[] = [
  { slug: 'tripura-west-lok-sabha', name: 'Tripura West', type: 'Lok Sabha', number: 1, district: '', reservation: '—', state: 'Tripura' },
  { slug: 'tripura-east-lok-sabha', name: 'Tripura East', type: 'Lok Sabha', number: 2, district: '', reservation: '—', state: 'Tripura' },
];

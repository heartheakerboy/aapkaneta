// Arunachal Pradesh foundation — Lok Sabha MP (2024 chunav; karyakaal 2024–2029). 2 seats, dono BJP.
// Background data = ECI affidavit via myneta.info/LokSabha2024 (verified 2026-10-17) — 2/2.
// MPLADS fund ka neta-war record e-SAKSHI dashboard par uplabdh hai; Arunachal ke MP ke ankde agle sweep me jode jayenge.
import type { Neta, Constituency } from './pilot';
export const arunachalMpNetas: Neta[] = [
  {
    slug: 'kiren-rijiju',
    name: 'Kiren Rijiju',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Arunachal Pradesh',
    constituency: 'Arunachal West (Lok Sabha)',
    constituencySlug: 'arunachal-west-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Arunachal West (Lok Sabha)', constituencySlug: 'arunachal-west-lok-sabha', party: 'Bharatiya Janata Party', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '', utilized: '', utilizationPct: 0,
      note: 'e-SAKSHI dashboard (mplads.mospi.gov.in) par neta-war MPLADS ankde uplabdh hain; Arunachal ke MP ke ankde agle sweep me jode jayenge.',
    },
    background: {
      age: '53',
      education: 'Graduate Professional — B.A., Hansraj College, University of Delhi (1995); LLB, Law Faculty, University of Delhi (1998)',
      criminalCases: 0,
      assets: 'Rs 4,94,03,234',
      liabilities: 'Nil',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id=251',
      backgroundNote: 'Pehchan MyNeta LokSabha2024 halafname se pakki: naam KIREN RIJIJU, BJP, Arunachal West — naam, seat aur party match. Vyavsay: Social Service. Kendriya mantri rahe; 2024 me chauthi baar Lok Sabha jeete.',
    },
    electionNote: '2024 Lok Sabha chunav (19 April 2024 ko matdan, 4 June 2024 ko parinaam) me Arunachal West se jeete: 2,05,417 votes. Runner-up Nabam Tuki (Indian National Congress) — 1,04,679 votes. Margin 1,00,738. Chautha Lok Sabha karyakal (2004, 2014, 2019, 2024).',
  },
  {
    slug: 'tapir-gao',
    name: 'Tapir Gao',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Arunachal Pradesh',
    constituency: 'Arunachal East (Lok Sabha)',
    constituencySlug: 'arunachal-east-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Arunachal East (Lok Sabha)', constituencySlug: 'arunachal-east-lok-sabha', party: 'Bharatiya Janata Party', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '', utilized: '', utilizationPct: 0,
      note: 'e-SAKSHI dashboard (mplads.mospi.gov.in) par neta-war MPLADS ankde uplabdh hain; Arunachal ke MP ke ankde agle sweep me jode jayenge.',
    },
    background: {
      age: '59',
      education: 'Post Graduate — M.A. Political Science, Arunachal University (1990)',
      criminalCases: 0,
      assets: 'Rs 15,05,37,706',
      liabilities: 'Nil',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id=257',
      backgroundNote: 'Pehchan MyNeta LokSabha2024 halafname se pakki: naam TAPIR GAO, BJP, Arunachal East — naam, seat aur party match. S/o Late Tapor Gao. Vyavsay: Political Leader, Ex-M.P.',
    },
    electionNote: '2024 Lok Sabha chunav (19 April 2024 ko matdan, 4 June 2024 ko parinaam) me Arunachal East se jeete: 1,45,581 votes. Runner-up Bosiram Siram (Indian National Congress) — 1,15,160 votes. Margin 30,421. Teesra Lok Sabha karyakal (2004, 2019, 2024); shuruaati ginati me peeche the.',
  },
];

export const arunachalMpConstituencies: Constituency[] = [
  { slug: 'arunachal-west-lok-sabha', name: 'Arunachal West', type: 'Lok Sabha', number: 1, district: '', reservation: '—', state: 'Arunachal Pradesh' },
  { slug: 'arunachal-east-lok-sabha', name: 'Arunachal East', type: 'Lok Sabha', number: 2, district: '', reservation: '—', state: 'Arunachal Pradesh' },
];

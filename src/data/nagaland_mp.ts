// Nagaland foundation — 1 Lok Sabha MP (2024 chunav, karyakaal 2024–2029; Oct 2026 tak koi badlav nahi).
// S. Supongmeren Jamir (INC) ne 4 Jun 2024 ko NDPP ke Chumben Murry ko 50,984 votes se haraya;
// 31 Mar 2023 se Nagaland Pradesh Congress Committee ke adhyaksh bhi hain (2003–08 me Mongoya se MLA reh chuke hain).
// Background data = ECI affidavit via myneta.info/LokSabha2024 (verified 2026-10-15).
import type { Neta, Constituency } from './pilot';

export const nagalandMpNetas: Neta[] = [
{
    slug: 's-supongmeren-jamir',
    name: 'S. Supongmeren Jamir',
    party: 'Indian National Congress',
    partyShort: 'INC',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Nagaland',
    constituency: 'Nagaland (Lok Sabha)',
    constituencySlug: 'nagaland-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Nagaland (Lok Sabha)', constituencySlug: 'nagaland-lok-sabha', party: 'Indian National Congress', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'MPLADS fund ka record e-SAKSHI portal par uplabdh hai; jald joda jayega.',
    },
    background: {
      age: '61',
      education: 'Bachelor of Law from Mokokchung Law College, North Eastern Hill University 1993',
      criminalCases: 0,
      assets: 'Rs 21,00,868',
      liabilities: 'Rs 5,56,528',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id=356',
      backgroundNote: '',
    },
    electionNote: '2024 me Nagaland Lok Sabha seat se INC ke ticket par jeete (NDPP ke Chumben Murry ko 50,984 votes se haraya).',
  },
];

export const nagalandMpConstituencies: Constituency[] = [
  { slug: 'nagaland-lok-sabha', name: 'Nagaland', type: 'Lok Sabha', number: 1, district: 'Kohima', reservation: 'ST', state: 'Nagaland' },
];

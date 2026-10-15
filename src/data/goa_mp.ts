// Goa foundation — 2 Lok Sabha MPs (2024 chunav, karyakaal 2024–2029).
// Background data = ECI affidavit via myneta.info/LokSabha2024 (verified 2026-10-14).
import type { Neta, Constituency } from './pilot';

export const goaMpNetas: Neta[] = [
{
    slug: 'shripad-yesso-naik',
    name: 'Shripad Yesso Naik',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Goa',
    constituency: 'North Goa (Lok Sabha)',
    constituencySlug: 'north-goa-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'North Goa (Lok Sabha)', constituencySlug: 'north-goa-lok-sabha', party: 'Bharatiya Janata Party', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '₹14.70 crore', utilized: '₹14.60 crore (sifarish)', utilizationPct: 99,
      note: 'e-SAKSHI dashboard (15 Oct 2026): 117 kaam sifarish, 29 manzoor, 1 poora; kharch ₹1.79 crore. Sifarish ke hisaab se utilization ~99%, kharch ke hisaab se ~12%. Source: mplads.mospi.gov.in',
    },
    background: {
      age: '71',
      education: 'Graduate',
      criminalCases: 0,
      assets: 'Rs 10,86,83,533',
      liabilities: 'Rs 5,08,675',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id=3668',
      backgroundNote: '',
    },
    electionNote: '2024 me North Goa Lok Sabha se BJP ke ticket par jeete.',
  },
  {
    slug: 'captain-viriato-fernandes',
    name: 'Captain Viriato Fernandes',
    party: 'Indian National Congress',
    partyShort: 'INC',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Goa',
    constituency: 'South Goa (Lok Sabha)',
    constituencySlug: 'south-goa-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'South Goa (Lok Sabha)', constituencySlug: 'south-goa-lok-sabha', party: 'Indian National Congress', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '₹14.70 crore', utilized: '₹11.80 crore (sifarish)', utilizationPct: 80,
      note: 'e-SAKSHI dashboard (15 Oct 2026): 134 kaam sifarish, 60 manzoor, 47 poora; kharch ₹5.08 crore. Sifarish ke hisaab se utilization ~80%, kharch ke hisaab se ~35%. Source: mplads.mospi.gov.in',
    },
    background: {
      age: '54',
      education: 'Graduate Professional',
      criminalCases: 1,
      assets: 'Rs 5,27,28,999',
      liabilities: 'Rs 3,79,840',
      mynetaUrl: 'https://myneta.info/loksabha2024/candidate.php?candidate_id=3876',
      backgroundNote: '',
    },
    electionNote: '2024 me South Goa Lok Sabha se Congress ke ticket par jeete; seva-nivritt defence adhikari.',
  },
];

export const goaMpConstituencies: Constituency[] = [
  { slug: 'north-goa-lok-sabha', name: 'North Goa', type: 'Lok Sabha', number: 1, district: 'North Goa', reservation: '—', state: 'Goa' },
  { slug: 'south-goa-lok-sabha', name: 'South Goa', type: 'Lok Sabha', number: 2, district: 'South Goa', reservation: '—', state: 'Goa' }
];

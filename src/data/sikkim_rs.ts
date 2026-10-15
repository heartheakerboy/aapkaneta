// Sikkim foundation — 1 Rajya Sabha MP (vartaman sthiti Oct 2026 tak, srot-verified).
// Dorjee Tshering Lepcha (BJP) — 12 Jan 2024 ko nirvirodh chune gaye; karyakaal 24 Feb 2024 – 23 Feb 2030.
// Ve 2019–2024 me Martam-Rumtek se SDF ke MLA reh chuke hain; Aug 2023 me BJP me shamil hue the.
// Background data = ECI affidavit via myneta.info/rajsab09aff (verified 2026-10-15) — BACKFILL ki zaroorat nahi padi.
import type { Neta } from './pilot';

export const sikkimRsNetas: Neta[] = [
  {
    slug: 'dorjee-tshering-lepcha',
    name: 'Dorjee Tshering Lepcha',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MP',
    house: 'Rajya Sabha',
    state: 'Sikkim',
    constituency: 'Sikkim (Rajya Sabha)',
    constituencySlug: 'sikkim-rajya-sabha',
    tenures: [
      { post: 'MP', constituency: 'Sikkim (Rajya Sabha)', constituencySlug: 'sikkim-rajya-sabha', party: 'Bharatiya Janata Party', start: '2024', end: '2030' },
    ],
    works: [],
    fund: null,
    background: {
      age: '66',
      education: '10th Pass — Passed 10th Class from Boys Regiment Higher Secondary School, Jabalpur in 1974',
      criminalCases: 0,
      assets: 'Rs 12,01,92,656',
      liabilities: 'Rs 24,62,662',
      mynetaUrl: 'https://myneta.info/rajsab09aff/candidate.php?candidate_id=1031',
      backgroundNote: '',
    },
    electionNote: '12 Jan 2024 ko Sikkim se BJP ke ticket par Rajya Sabha ke liye nirvirodh chune gaye (karyakaal 24 Feb 2024 – 23 Feb 2030). 2019–2024 me Martam-Rumtek se SDF ke MLA reh chuke hain.',
  },
];

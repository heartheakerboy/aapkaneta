// Himachal Pradesh foundation — 3 Rajya Sabha MP (vartaman sthiti Oct 2026 tak, srot-verified).
// Sikander Kumar (BJP) — karyakaal 03-Apr-2022 – 02-Apr-2028 (2022 me chune gaye).
// Harsh Mahajan (BJP) — karyakaal 03-Apr-2024 – 02-Apr-2030; Feb 2024 me Congress ke cross-voting wale vivadit chunav me jeete the.
// Anurag Sharma (INC) — 9 Mar 2026 ko nirvirodh chune gaye (BJP ne ummidvaar nahi utara), karyakaal 10-Apr-2026 – 09-Apr-2032;
// Kangra ke Bir/Baijnath ke nivasi, poorv Kangra DCC adhyaksh — Anurag Singh Thakur (Hamirpur MP) se bilkul alag vyakti hain.
// Background data = ECI affidavit via myneta.info/rajsab09aff — Anurag Sharma ki entry khud kholkar verify ki gayi (INC, 0 cases,
// Graduate, assets Rs 21,39,14,490, liabilities Rs 48,85,659); baaki dono ki entries BACKFILL ke roop me baad me jodi jayengi.
import type { Neta } from './pilot';

export const himachalRsNetas: Neta[] = [
  {
    slug: 'sikander-kumar',
    name: 'Sikander Kumar',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MP',
    house: 'Rajya Sabha',
    state: 'Himachal Pradesh',
    constituency: 'Himachal Pradesh (Rajya Sabha)',
    constituencySlug: 'himachal-pradesh-rajya-sabha',
    tenures: [
      { post: 'MP', constituency: 'Himachal Pradesh (Rajya Sabha)', constituencySlug: 'himachal-pradesh-rajya-sabha', party: 'Bharatiya Janata Party', start: '2022', end: '2028' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '₹20.79 crore', utilized: '₹17.83 crore (sifarish)', utilizationPct: 86,
      note: 'e-SAKSHI dashboard (15 Oct 2026): 408 kaam sifarish, 379 manzoor, 193 poora; kharch ₹13.58 crore. Sifarish ke hisaab se utilization ~86%, kharch ke hisaab se ~65%. Source: mplads.mospi.gov.in',
    },
    background: {
      age: '',
      education: '',
      criminalCases: 0,
      assets: '',
      liabilities: '',
      mynetaUrl: '',
      backgroundNote: 'BACKFILL_PENDING — myneta.info/rajsab09aff page abhi verify nahi hua.',
    },
    electionNote: 'Mar 2022 me Himachal Pradesh se BJP ke ticket par Rajya Sabha ke liye chune gaye (karyakaal 03-Apr-2022 – 02-Apr-2028).',
  },
  {
    slug: 'harsh-mahajan',
    name: 'Harsh Mahajan',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MP',
    house: 'Rajya Sabha',
    state: 'Himachal Pradesh',
    constituency: 'Himachal Pradesh (Rajya Sabha)',
    constituencySlug: 'himachal-pradesh-rajya-sabha',
    tenures: [
      { post: 'MP', constituency: 'Himachal Pradesh (Rajya Sabha)', constituencySlug: 'himachal-pradesh-rajya-sabha', party: 'Bharatiya Janata Party', start: '2024', end: '2030' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '₹14.70 crore', utilized: '₹12.78 crore (sifarish)', utilizationPct: 87,
      note: 'e-SAKSHI dashboard (15 Oct 2026): 508 kaam sifarish, 449 manzoor, 161 poora; kharch ₹8.12 crore. Sifarish ke hisaab se utilization ~87%, kharch ke hisaab se ~55%. Source: mplads.mospi.gov.in',
    },
    background: {
      age: '',
      education: '',
      criminalCases: 0,
      assets: '',
      liabilities: '',
      mynetaUrl: '',
      backgroundNote: 'BACKFILL_PENDING — myneta.info/rajsab09aff page abhi verify nahi hua. Congress ke poorv mantri reh chuke hain; Sep 2023 me BJP me shamil hue the.',
    },
    electionNote: '27 Feb 2024 ko Congress ke 6 vidhayakon ke cross-voting wale vivadit Rajya Sabha chunav me BJP ke ticket par jeete (karyakaal 03-Apr-2024 – 02-Apr-2030).',
  },
  {
    slug: 'anurag-sharma',
    name: 'Anurag Sharma',
    party: 'Indian National Congress',
    partyShort: 'INC',
    post: 'MP',
    house: 'Rajya Sabha',
    state: 'Himachal Pradesh',
    constituency: 'Himachal Pradesh (Rajya Sabha)',
    constituencySlug: 'himachal-pradesh-rajya-sabha',
    tenures: [
      { post: 'MP', constituency: 'Himachal Pradesh (Rajya Sabha)', constituencySlug: 'himachal-pradesh-rajya-sabha', party: 'Indian National Congress', start: '2026', end: '2032' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '₹4.90 crore', utilized: '₹0.01 crore (sifarish)', utilizationPct: 0,
      note: 'e-SAKSHI dashboard (15 Oct 2026): 1 kaam sifarish, 0 manzoor, 0 poora; kharch ₹0.00 crore. Sifarish ke hisaab se utilization ~0%, kharch ke hisaab se ~0%. Source: mplads.mospi.gov.in',
    },
    background: {
      age: '',
      education: 'Graduate',
      criminalCases: 0,
      assets: 'Rs 21,39,14,490',
      liabilities: 'Rs 48,85,659',
      mynetaUrl: 'https://myneta.info/rajsab09aff/',
      backgroundNote: 'Kangra ke Bir/Baijnath ke nivasi, poorv Kangra DCC adhyaksh, sarkari thekedaar/transporter — Anurag Singh Thakur (Hamirpur ke BJP MP) se bilkul alag vyakti hain. Background myneta.info/rajsab09aff entry se verify.',
    },
    electionNote: '9 Mar 2026 ko Himachal Pradesh se INC ke ticket par Rajya Sabha ke liye nirvirodh chune gaye (BJP ne ummidvaar nahi utara; karyakaal 10-Apr-2026 – 09-Apr-2032).',
  },
];

// Manipur foundation — 2 Lok Sabha MPs (2024 chunav, karyakaal 2024–2029; Oct 2026 tak koi badlav nahi).
// Background data = ECI affidavit via myneta.info/LokSabha2024 (verified 2026-10-15).
// PC numbers: ECI Delimitation Order 2008 kram (Inner Manipur=1, Outer Manipur (ST)=2).
// Outer Manipur (ST) me AC 33–60 (Heirok se Singhat) aate hain; Inner Manipur me AC 1–32.
import type { Neta, Constituency } from './pilot';

export const manipurMpNetas: Neta[] = [
{
    slug: 'angomcha-bimol-akoijam',
    name: 'Angomcha Bimol Akoijam',
    party: 'Indian National Congress',
    partyShort: 'INC',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Manipur',
    constituency: 'Inner Manipur (Lok Sabha)',
    constituencySlug: 'inner-manipur-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Inner Manipur (Lok Sabha)', constituencySlug: 'inner-manipur-lok-sabha', party: 'Indian National Congress', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '₹14.70 crore', utilized: '₹10.71 crore (sifarish)', utilizationPct: 73,
      note: 'e-SAKSHI dashboard (15 Oct 2026): 47 kaam sifarish, 45 manzoor, 21 poora; kharch ₹9.48 crore. Sifarish ke hisaab se utilization ~73%, kharch ke hisaab se ~64%. Source: mplads.mospi.gov.in',
    },
    background: {
      age: '57',
      education: 'Doctorate',
      criminalCases: 0,
      assets: 'Rs 97,67,556',
      liabilities: 'Rs 34,84,121.41',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id=337',
      backgroundNote: 'Oct 2026 me JNU ne sexual harassment shikayaton par apni Internal Committee ki report ke baad unhe associate professor pad se barkhast kiya; unhone aaropon se inkaar kiya hai. BJP ne MP pad se istife ki maang ki (Oct 2026 tak istifa nahi hua).',
    },
    electionNote: '2024 me Inner Manipur Lok Sabha se INC ke ticket par jeete (BJP ke Thounaojam Basanta Kumar Singh ko haraya).',
  },
{
    slug: 'alfred-kanngam-arthur',
    name: 'Alfred Kanngam Arthur',
    party: 'Indian National Congress',
    partyShort: 'INC',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Manipur',
    constituency: 'Outer Manipur (ST) (Lok Sabha)',
    constituencySlug: 'outer-manipur-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Outer Manipur (ST) (Lok Sabha)', constituencySlug: 'outer-manipur-lok-sabha', party: 'Indian National Congress', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '₹14.70 crore', utilized: '₹12.27 crore (sifarish)', utilizationPct: 83,
      note: 'e-SAKSHI dashboard (15 Oct 2026): 39 kaam sifarish, 36 manzoor, 15 poora; kharch ₹8.83 crore. Sifarish ke hisaab se utilization ~83%, kharch ke hisaab se ~60%. Source: mplads.mospi.gov.in',
    },
    background: {
      age: '50',
      education: '12th Pass',
      criminalCases: 0,
      assets: 'Rs 55,53,26,115',
      liabilities: 'Rs 44,00,000',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id=340',
      backgroundNote: '',
    },
    electionNote: '2024 me Outer Manipur (ST) Lok Sabha se INC ke ticket par jeete (NPF ke Kachui Timothy Zimik ko ~64,000 votes se haraya). 2017–2022 me Ukhrul AC se MLA rahe.',
  }
];

export const manipurMpConstituencies: Constituency[] = [
  { slug: 'inner-manipur-lok-sabha', name: 'Inner Manipur', type: 'Lok Sabha', number: 1, district: 'Imphal West', reservation: '—', state: 'Manipur' },
  { slug: 'outer-manipur-lok-sabha', name: 'Outer Manipur', type: 'Lok Sabha', number: 2, district: 'Ukhrul', reservation: 'ST', state: 'Manipur' },
];

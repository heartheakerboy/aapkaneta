// Mizoram foundation — 1 Lok Sabha MP (2024 chunav, karyakaal 2024–2029; Oct 2026 tak koi badlav nahi).
// Background data = ECI affidavit via myneta.info/LokSabha2024 (verified 2026-10-15).
import type { Neta, Constituency } from './pilot';

export const mizoramMpNetas: Neta[] = [
{
    slug: 'richard-vanlalhmangaiha',
    name: 'Richard Vanlalhmangaiha',
    party: 'Zoram People\'s Movement',
    partyShort: 'ZPM',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Mizoram',
    constituency: 'Mizoram (Lok Sabha)',
    constituencySlug: 'mizoram-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Mizoram (Lok Sabha)', constituencySlug: 'mizoram-lok-sabha', party: 'Zoram People\'s Movement', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '₹14.70 crore', utilized: '₹12.70 crore (sifarish)', utilizationPct: 86,
      note: 'e-SAKSHI dashboard (15 Oct 2026): 270 kaam sifarish, 189 manzoor, 134 poora; kharch ₹9.90 crore. Sifarish ke hisaab se utilization ~86%, kharch ke hisaab se ~67%. Source: mplads.mospi.gov.in',
    },
    background: {
      age: '46',
      education: 'Graduate',
      criminalCases: 0,
      assets: 'Rs 1,69,19,233',
      liabilities: 'Rs 0',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id=60',
      backgroundNote: '',
    },
    electionNote: '2024 me Mizoram Lok Sabha se ZPM ke ticket par jeete (MNF ke K. Vanlalvena ko 68,288 votes se haraya). ZPM ke pehle Lok Sabha MP.',
  }
];

export const mizoramMpConstituencies: Constituency[] = [
  { slug: 'mizoram-lok-sabha', name: 'Mizoram', type: 'Lok Sabha', number: 1, district: 'Aizawl', reservation: 'ST', state: 'Mizoram' },
];

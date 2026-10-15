// Sikkim foundation — 1 Lok Sabha MP (2024 chunav, karyakaal 2024–2029; Oct 2026 tak koi badlav nahi).
// Indra Hang Subba (SKM) ne 4 Jun 2024 ko CAP-Sikkim ke Bharat Basnett ko 80,830 votes se haraya (1,64,396 vs 83,566);
// SDF ke Prem Das Rai teesre (77,171). Ye unka doosra karyakaal hai (2019 me bhi jeete the).
// Background data = ECI affidavit via myneta.info/loksabha2024 (verified 2026-10-15).
import type { Neta, Constituency } from './pilot';

export const sikkimMpNetas: Neta[] = [
  {
    slug: 'indra-hang-subba',
    name: 'Indra Hang Subba',
    party: 'Sikkim Krantikari Morcha',
    partyShort: 'SKM',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Sikkim',
    constituency: 'Sikkim (Lok Sabha)',
    constituencySlug: 'sikkim-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Sikkim (Lok Sabha)', constituencySlug: 'sikkim-lok-sabha', party: 'Sikkim Krantikari Morcha', start: '2019', end: '2024' },
      { post: 'MP', constituency: 'Sikkim (Lok Sabha)', constituencySlug: 'sikkim-lok-sabha', party: 'Sikkim Krantikari Morcha', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '₹15.20 crore', utilized: '₹15.11 crore (sifarish)', utilizationPct: 99,
      note: 'e-SAKSHI dashboard (15 Oct 2026): 129 kaam sifarish, 85 manzoor, 38 poora; kharch ₹11.89 crore. Sifarish ke hisaab se utilization ~99%, kharch ke hisaab se ~78%. Source: mplads.mospi.gov.in',
    },
    background: {
      age: '35',
      education: 'Doctorate — Degree of Doctor of Philosophy in Physics from Sikkim University in 2023',
      criminalCases: 0,
      assets: 'Rs 1,48,45,772',
      liabilities: 'Rs 50,00,000',
      mynetaUrl: 'https://myneta.info/loksabha2024/candidate.php?candidate_id=484',
      backgroundNote: '',
    },
    electionNote: '2024 me Sikkim Lok Sabha seat se SKM ke ticket par dobara jeete (CAP-Sikkim ke Bharat Basnett ko 80,830 votes se haraya — 1,64,396 vs 83,566). 2019 me bhi isi seat se jeete the.',
  },
];

export const sikkimMpConstituencies: Constituency[] = [
  { slug: 'sikkim-lok-sabha', name: 'Sikkim', type: 'Lok Sabha', number: 1, district: 'Gangtok', reservation: '—', state: 'Sikkim' },
];

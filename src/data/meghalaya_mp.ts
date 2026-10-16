// Meghalaya foundation — Lok Sabha MP (2024 chunav; karyakaal 2024–2029).
// Tura: Saleng A. Sangma (INC) — 3,83,919 votes; NPP ki Agatha K. Sangma ko 1,55,241 votes se haraya (ECI/TOI, Jun 2024).
// Shillong: SEAT VACANT — Ricky Andrew J. Syngkon (VPP) ka 19 Feb 2026 ko nidhan (cardiac arrest); upchunav abhi baki
// (ECI 26 Oct 2026 ke baad matdata soochi prakashit hone par upchunav ki ghoshna karega — meghalayanews24, 12 Oct 2026).
// 2024 me Shillong se Syngkon jeete the (5,71,078 votes; INC ke Vincent H. Pala ko 3,71,910 votes se haraya).
// Go precedent ki tarah vacant seat ka record NAHI banaya gaya — sirf ye tippani.
// Background data = ECI affidavit via myneta.info/loksabha2024 (verified 2026-10-16).
// MPLADS fund ka neta-war record e-SAKSHI dashboard par uplabdh hai; Meghalaya ke MP ke ankde agle sweep me jode jayenge.
import type { Neta, Constituency } from './pilot';

export const meghalayaMpNetas: Neta[] = [
  {
    slug: 'saleng-a-sangma',
    name: 'Saleng A. Sangma',
    party: 'Indian National Congress',
    partyShort: 'INC',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Meghalaya',
    constituency: 'Tura (Lok Sabha)',
    constituencySlug: 'tura-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Tura (Lok Sabha)', constituencySlug: 'tura-lok-sabha', party: 'Indian National Congress', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '', utilized: '', utilizationPct: 0,
      note: 'e-SAKSHI dashboard (mplads.mospi.gov.in) par neta-war MPLADS ankde uplabdh hain; Meghalaya ke MP ke ankde agle sweep me jode jayenge.',
    },
    background: {
      age: '45',
      education: 'Post Graduate - PG (Peace Study), Martin Luther University, 2009',
      criminalCases: 0,
      assets: 'Rs 4,00,49,264',
      liabilities: 'Rs 57,08,458',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id=350',
      backgroundNote: 'Gambegre ke poorv vidhayak (2013-2024, lagatar teen baar); 2024 me Tura Lok Sabha jeetkar pehli baar sansad bane. Halafname me koi aapradhik mamla nahi; pesha: MLA.',
    },
    electionNote: '2024 Lok Sabha chunav me Tura (ST) se INC ke ticket par jeete (3,83,919 votes; NPP ki Agatha K. Sangma ko 1,55,241 votes se haraya). Gambegre vidhan sabha seat se unke isteefe ke baad Nov 2024 upchunav me unki patni Mehtab Chandee A. Sangma (NPP) jeeti thi.',
  },
];

export const meghalayaMpConstituencies: Constituency[] = [
  { slug: 'shillong-lok-sabha', name: 'Shillong', type: 'Lok Sabha', number: 1, district: 'East Khasi Hills', reservation: 'ST', state: 'Meghalaya' },
  { slug: 'tura-lok-sabha', name: 'Tura', type: 'Lok Sabha', number: 2, district: 'West Garo Hills', reservation: 'ST', state: 'Meghalaya' },
];

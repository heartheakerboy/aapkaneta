// Puducherry Lok Sabha MP — 2024 parinaam (matdan 19 Apr 2024, parinaam 4 Jun 2024).
// Tally: 1 seat — INC vijeta.
// NOTE: Kendra Shasit Pradesh Puducherry me sabhi 30 AC segments isi PC ke andar hain.
// Background: myneta.info ke LS candidate pages JS-only hain — na khulne par BACKGROUND_PENDING imaandaari se.
// MPLADS fund ka neta-war record e-SAKSHI dashboard par uplabdh hai; Puducherry ke MP ke ankde agle sweep me jode jayenge.
import type { Neta, Constituency } from './pilot';

export const puducherryMpNetas: Neta[] = [

  {
    slug: 'v-vaithilingam',
    name: 'V. Vaithilingam',
    party: 'Indian National Congress',
    partyShort: 'INC',
    post: 'MP',
    house: 'Lok Sabha',
    state: 'Puducherry',
    constituency: 'Puducherry (Lok Sabha)',
    constituencySlug: 'puducherry-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Puducherry (Lok Sabha)', constituencySlug: 'puducherry-lok-sabha', party: 'Indian National Congress', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '', utilized: '', utilizationPct: 0,
      note: 'e-SAKSHI dashboard (mplads.mospi.gov.in) par neta-war MPLADS ankde uplabdh hain; Puducherry ke MP ke ankde agle sweep me jode jayenge.',
    },
    background: {
      age: '73',
      education: 'Graduate',
      criminalCases: 0,
      assets: 'Rs 15,72,49,699',
      liabilities: 'Rs 0',
      mynetaUrl: 'BACKGROUND_PENDING',
      backgroundNote: 'V. Vaithilingam (INC), Puducherry (Lok Sabha), 2024 vijeta — 4,26,005 vote (52.73%), runner-up A. Namassivayam (BJP, 2,89,489) se 1,36,516 ka antar. Puducherry ke poorv mukhyamantri (1991-1996 aur 2008-2011); PPCC president bhi rahe. 2019 me AINRC ke Dr. Narayanasamy Kesavan ko 1,97,025 vote (constituency record margin) se haraya tha. mynetaUrl exact index nahi hua; figures Indian Express + Financial Express ki LS2024 myneta-derived tables se cross-verified.',
    },
    electionNote: '2024 Lok Sabha chunav (parinaam 4 Jun 2024) me Puducherry se INC ticket par jeete: 426005 votes, margin 136516 (runner-up A. Namassivayam, BJP).',
  },
];

export const puducherryMpConstituencies: Constituency[] = [
  { slug: 'puducherry-lok-sabha', name: 'Puducherry (Lok Sabha)', type: 'Lok Sabha', number: null, district: '', reservation: 'GEN', state: 'Puducherry' },
];

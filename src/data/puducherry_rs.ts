// Puducherry Rajya Sabha MP — vartaman sthiti (Oct 2026).
// 1 seat: S. Selvaganabathy (BJP) — karyakaal 7 Oct 2021 – 6 Oct 2027.
// Background: ADR RS reports / myneta se jo mile wahi; na mile to BACKGROUND_PENDING imaandaari se.
// MPLADS fund ka neta-war record e-SAKSHI dashboard par uplabdh hai; Puducherry ke MP ke ankde agle sweep me jode jayenge.
import type { Neta } from './pilot';

export const puducherryRsNetas: Neta[] = [

  {
    slug: 's-selvaganabathy',
    name: 'S. Selvaganabathy',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MP',
    house: 'Rajya Sabha',
    state: 'Puducherry',
    constituency: 'Puducherry (Rajya Sabha)',
    constituencySlug: 'puducherry-rajya-sabha',
    tenures: [
      { post: 'MP', constituency: 'Puducherry (Rajya Sabha)', constituencySlug: 'puducherry-rajya-sabha', party: 'Bharatiya Janata Party', start: '2021', end: '2027' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '', utilized: '', utilizationPct: 0,
      note: 'e-SAKSHI dashboard (mplads.mospi.gov.in) par neta-war MPLADS ankde uplabdh hain; Puducherry ke MP ke ankde agle sweep me jode jayenge.',
    },
    background: {
      age: 'BACKGROUND_PENDING',
      education: 'BACKGROUND_PENDING',
      criminalCases: null,
      assets: 'BACKGROUND_PENDING',
      liabilities: 'BACKGROUND_PENDING',
      mynetaUrl: 'BACKGROUND_PENDING',
      backgroundNote: 'S. Selvaganabathy (BJP), Puducherry se Rajya Sabha sadasya (karyakaal 7 Oct 2021 – 6 Oct 2027) — Sept 2021 me unopposed nirvachit. BJP ke Puducherry se pehle MP (The Statesman). Isse pehle kendra sarkar dwara nominated Puducherry Assembly MLA (4 Jul 2017 – 20 Feb 2021) rahe; 25 Sep 2023 – 29 Jun 2025 tak BJP Puducherry state president. Pesha: educationist — schools aur BEd college chalate hain. 2021 RS affidavit myneta/ADR me nahi mila — background pending.',
    },
    electionNote: 'Puducherry Vidhan Sabha se Rajya Sabha ke liye Sept 2021 me unopposed nirvachit (karyakaal 7 Oct 2021 – 6 Oct 2027).',
  },
];

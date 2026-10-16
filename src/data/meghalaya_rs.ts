// Meghalaya foundation — 1 Rajya Sabha MP (vartaman sthiti Oct 2026 tak, srot-verified).
// James Pangsang Kongkal Sangma (NPP) — MDA-2 ke common candidate ke roop me nirvirodh chune gaye
// (chunav pramaanpatra 11 Jun 2026; shapath 20 Jul 2026; karyakal 2026-2032), poorv MP Wanweiroy Kharlukhi
// (karyakal 22 Jun 2020 – 21 Jun 2026) ki jagah. 2008-2023 tak Dadenggre se teen baar MLA, 2018-2023 me
// Conrad Sangma mantrimandal me Home, Power, Law, Food & Civil Supplies jaise vibhagon ke mantri;
// Mar 2025 se NPP ke rashtriya karyakari adhyaksh.
// Background data = ECI affidavit via myneta.info/rajsab09aff (2026 RS halafnama summary, verified 2026-10-16).
// 2023 assembly halafnama (Dadenggre): sampatti Rs 53,06,88,296; deynadaari Rs 1,03,31,358 (candidate_id=7075).
import type { Neta } from './pilot';

export const meghalayaRsNetas: Neta[] = [
  {
    slug: 'james-p-k-sangma',
    name: 'James Pangsang Kongkal Sangma',
    party: "National People's Party",
    partyShort: 'NPP',
    post: 'MP',
    house: 'Rajya Sabha',
    state: 'Meghalaya',
    constituency: 'Meghalaya (Rajya Sabha)',
    constituencySlug: 'meghalaya-rajya-sabha',
    tenures: [
      { post: 'MP', constituency: 'Meghalaya (Rajya Sabha)', constituencySlug: 'meghalaya-rajya-sabha', party: "National People's Party", start: '2026', end: '2032' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: '', utilized: '', utilizationPct: 0,
      note: 'e-SAKSHI dashboard (mplads.mospi.gov.in) par neta-war MPLADS ankde uplabdh hain; Meghalaya ke MP ke ankde agle sweep me jode jayenge.',
    },
    background: {
      age: '50 (DOB: 21 Nov 1975)',
      education: 'Graduate - B.A., Ramjas College, University of Delhi, 1999',
      criminalCases: 0,
      assets: 'Rs 87,51,64,751',
      liabilities: 'Rs 11,72,07,402',
      mynetaUrl: 'https://myneta.info/rajsab09aff/',
      backgroundNote: '2026 ke Rajya Sabha halafname (myneta rajsab09aff summary) ke mutabiq sampatti Rs 87.5 crore+, deynadaari Rs 11.7 crore+, koi aapradhik mamla nahi. Halafname ka seedha candidate page abhi uplabdh nahi — isliye link upar myneta ke RS affidavit listing ki hai. Teen baar ke poorv MLA (Dadenggre, 2008-2023) aur poorv cabinet mantri.',
    },
    electionNote: 'Meghalaya se NPP ke ticket par MDA-2 ke common candidate ke roop me Rajya Sabha ke liye nirvirodh chune gaye (pramaanpatra 11 Jun 2026; shapath 20 Jul 2026; karyakal 2026-2032).',
  },
];

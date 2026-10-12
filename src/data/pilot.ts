// Pilot data — Palghar district (verified 2026-10-12 from 2024 election results)
// Works list starts empty ON PURPOSE: entries get added only with a verification badge.

export type Badge = 'sarkari' | 'rti' | 'news' | 'dawa';

export interface Work {
  title: string;
  category: 'Sadak' | 'Paani' | 'Bijli' | 'School' | 'Aspataal' | 'Rojgar' | 'Any';
  badge: Badge;
  sourceLabel: string;
  sourceUrl?: string;
  date?: string;
  note?: string;
}

export interface Tenure {
  post: 'MLA' | 'MP';
  constituency: string;
  constituencySlug: string;
  party: string;
  start: string;
  end: string;
}

export interface FundInfo {
  scheme: 'MPLADS' | 'MLALADS';
  allocated: string | null;
  utilized: string | null;
  utilizationPct: number | null;
  note: string;
}

export interface Neta {
  slug: string;
  name: string;
  party: string;
  partyShort: string;
  post: 'MLA' | 'MP';
  constituency: string;
  constituencySlug: string;
  tenures: Tenure[];
  works: Work[];
  fund: FundInfo | null;
  electionNote: string;
}

export interface Constituency {
  slug: string;
  name: string;
  type: 'Vidhan Sabha' | 'Lok Sabha';
  number: number | null;
  district: string;
  reservation: string;
}

export const constituencies: Constituency[] = [
  { slug: 'dahanu', name: 'Dahanu', type: 'Vidhan Sabha', number: 128, district: 'Palghar', reservation: 'ST' },
  { slug: 'vikramgad', name: 'Vikramgad', type: 'Vidhan Sabha', number: 129, district: 'Palghar', reservation: 'ST' },
  { slug: 'palghar', name: 'Palghar', type: 'Vidhan Sabha', number: 130, district: 'Palghar', reservation: 'ST' },
  { slug: 'boisar', name: 'Boisar', type: 'Vidhan Sabha', number: 131, district: 'Palghar', reservation: 'ST' },
  { slug: 'nalasopara', name: 'Nalasopara', type: 'Vidhan Sabha', number: 132, district: 'Palghar', reservation: '—' },
  { slug: 'vasai', name: 'Vasai', type: 'Vidhan Sabha', number: 133, district: 'Palghar', reservation: '—' },
  { slug: 'palghar-lok-sabha', name: 'Palghar', type: 'Lok Sabha', number: 22, district: 'Palghar', reservation: 'ST' },
];

export const netas: Neta[] = [
  {
    slug: 'vinod-bhiva-nikole',
    name: 'Vinod Bhiva Nikole',
    party: 'Communist Party of India (Marxist)',
    partyShort: 'CPI(M)',
    post: 'MLA',
    constituency: 'Dahanu (ST)',
    constituencySlug: 'dahanu',
    tenures: [
      { post: 'MLA', constituency: 'Dahanu (ST)', constituencySlug: 'dahanu', party: 'CPI(M)', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Maharashtra me MLA fund ka record online uplabdh nahi hai. Pehli RTI drive me Dahanu seat ka data manga jayega.',
    },
    electionNote: '2024 me Dahanu (ST) se 1,04,702 vote (47.21%) lekar jeete.',
  },
  {
    slug: 'harishchandra-sakharam-bhoye',
    name: 'Harishchandra Sakharam Bhoye',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MLA',
    constituency: 'Vikramgad (ST)',
    constituencySlug: 'vikramgad',
    tenures: [
      { post: 'MLA', constituency: 'Vikramgad (ST)', constituencySlug: 'vikramgad', party: 'BJP', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Maharashtra me MLA fund ka record online uplabdh nahi hai. Pehli RTI drive me Vikramgad seat ka data manga jayega.',
    },
    electionNote: '2024 me Vikramgad (ST) se 1,14,514 vote (46.02%) lekar jeete.',
  },
  {
    slug: 'rajendra-dhedya-gavit',
    name: 'Rajendra Dhedya Gavit',
    party: 'Shiv Sena',
    partyShort: 'SHS',
    post: 'MLA',
    constituency: 'Palghar (ST)',
    constituencySlug: 'palghar',
    tenures: [
      { post: 'MP', constituency: 'Palghar (ST)', constituencySlug: 'palghar-lok-sabha', party: 'BJP', start: '2018', end: '2019' },
      { post: 'MP', constituency: 'Palghar (ST)', constituencySlug: 'palghar-lok-sabha', party: 'Shiv Sena', start: '2019', end: '2024' },
      { post: 'MLA', constituency: 'Palghar (ST)', constituencySlug: 'palghar', party: 'Shiv Sena', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'MP karyakaal (2018–2024) ka MPLADS record nikala ja raha hai. MLA fund ke liye RTI drive me data manga jayega.',
    },
    electionNote: '2018 (upchunav) aur 2019 me Palghar se MP rahe; 2024 me Palghar (ST) Vidhan Sabha se 1,12,894 vote (52.61%) lekar MLA bane.',
  },
  {
    slug: 'vilas-sukur-tare',
    name: 'Vilas Sukur Tare',
    party: 'Shiv Sena',
    partyShort: 'SHS',
    post: 'MLA',
    constituency: 'Boisar (ST)',
    constituencySlug: 'boisar',
    tenures: [
      { post: 'MLA', constituency: 'Boisar (ST)', constituencySlug: 'boisar', party: 'Shiv Sena', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Maharashtra me MLA fund ka record online uplabdh nahi hai. Pehli RTI drive me Boisar seat ka data manga jayega.',
    },
    electionNote: '2024 me Boisar (ST) se 1,26,117 vote (45.34%) lekar jeete.',
  },
  {
    slug: 'rajan-balkrishna-naik',
    name: 'Rajan Balkrishna Naik',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MLA',
    constituency: 'Nalasopara',
    constituencySlug: 'nalasopara',
    tenures: [
      { post: 'MLA', constituency: 'Nalasopara', constituencySlug: 'nalasopara', party: 'BJP', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Maharashtra me MLA fund ka record online uplabdh nahi hai. Pehli RTI drive me Nalasopara seat ka data manga jayega.',
    },
    electionNote: '2024 me Nalasopara se 1,65,113 vote (47.16%) lekar jeete.',
  },
  {
    slug: 'sneha-dube-pandit',
    name: 'Sneha Dube Pandit',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MLA',
    constituency: 'Vasai',
    constituencySlug: 'vasai',
    tenures: [
      { post: 'MLA', constituency: 'Vasai', constituencySlug: 'vasai', party: 'BJP', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Maharashtra me MLA fund ka record online uplabdh nahi hai. Pehli RTI drive me Vasai seat ka data manga jayega.',
    },
    electionNote: '2024 me Vasai se 77,553 vote (35.38%) lekar jeetin.',
  },
  {
    slug: 'hemant-vishnu-savara',
    name: 'Dr. Hemant Vishnu Savara',
    party: 'Bharatiya Janata Party',
    partyShort: 'BJP',
    post: 'MP',
    constituency: 'Palghar (ST) Lok Sabha',
    constituencySlug: 'palghar-lok-sabha',
    tenures: [
      { post: 'MP', constituency: 'Palghar (ST)', constituencySlug: 'palghar-lok-sabha', party: 'BJP', start: '2024', end: '2029' },
    ],
    works: [],
    fund: {
      scheme: 'MPLADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'MPLADS portal se fund utilization ka record nikala ja raha hai. Maharashtra ke 48 MPs ne ab tak sirf ~13% fund istemal kiya hai (sarkari record).',
    },
    electionNote: '2024 me Palghar Lok Sabha se 6,01,244 vote (43.69%) lekar jeete — 1,83,306 vote ke antar se.',
  },
];

export const badgeMeta: Record<Badge, { label: string; color: string; desc: string }> = {
  sarkari: { label: 'Sarkari Record', color: '#166534', desc: 'Sarkari portal ya dastavez se pusht' },
  rti: { label: 'RTI Verified', color: '#1d4ed8', desc: 'RTI jawab se pusht (scan uplabdh)' },
  news: { label: 'News Report', color: '#92400e', desc: 'Pratishthit news me prakashit' },
  dawa: { label: 'Dawa', color: '#6b7280', desc: 'Neta/party ka daawa — satyaapan baaki' },
};

export function getNeta(slug: string): Neta | undefined {
  return netas.find((n) => n.slug === slug);
}

export function getConstituency(slug: string): Constituency | undefined {
  return constituencies.find((c) => c.slug === slug);
}

export function netasByConstituency(slug: string): Neta[] {
  return netas.filter((n) => n.tenures.some((t) => t.constituencySlug === slug));
}

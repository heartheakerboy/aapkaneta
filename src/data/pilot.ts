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
  period?: string;
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

export interface Background {
  age: string;
  education: string;
  criminalCases: number;
  assets: string;
  liabilities: string;
  mynetaUrl: string;
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
  background: Background;
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
      { post: "MLA", constituency: "Dahanu (ST)", constituencySlug: "dahanu", party: "CPI(M)", start: "2019", end: "2024" },
      { post: 'MLA', constituency: 'Dahanu (ST)', constituencySlug: 'dahanu', party: 'CPI(M)', start: '2024', end: '2029' },
    ],
    works: [
    {
      title: "Bhiwandi-Ganeshpuri Zilla Parishad school ko van vibhag se manzoori dilwayi",
      category: "School",
      badge: "news",
      sourceLabel: "rajkaran.in",
      sourceUrl: "https://rajkaran.in/mla-vinod-bhiva-nikole",
      period: "MLA karyakaal 2019–2024",
      note: "Van mantri se pratinidhimandal ke saath milne ke baad school pariyojna ko manzoori mili",
    },
    ],
    fund: {
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Maharashtra me MLA fund ka record online uplabdh nahi hai. Pehli RTI drive me Dahanu seat ka data manga jayega.',
    },
    background: {
      age: '49',
      education: '12th Pass',
      criminalCases: 5,
      assets: 'Rs 82,01,803',
      liabilities: 'Nil',
      mynetaUrl: 'https://myneta.info/Maharashtra2024/candidate.php?candidate_id=901',
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
    background: {
      age: '55',
      education: '10th Pass',
      criminalCases: 0,
      assets: 'Rs 1,46,43,386',
      liabilities: 'Rs 18,89,099',
      mynetaUrl: 'https://myneta.info/Maharashtra2024/candidate.php?candidate_id=800',
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
    works: [
    {
      title: "Kuposhit bachchon ke punarvas-swasthya kendra ke liye MPLADS se ₹50 lakh manzoor",
      category: "Aspataal",
      badge: "news",
      sourceLabel: "The Hindu",
      sourceUrl: "https://www.thehindu.com/news/cities/mumbai/a-new-life-for-malnourished-children/article28665059.ece/amp/",
      date: "2019",
      period: "MP karyakaal 2018–2024",
      note: "Vithu Mauli Trust ke kendra ke liye MPLADS se raashi",
    },
    {
      title: "Ganeshotsav se pehle PWD ko sadak marammat ke nirdesh; karya-sthal par soochna board anivarya",
      category: "Sadak",
      badge: "news",
      sourceLabel: "Free Press Journal",
      sourceUrl: "https://www.freepressjournal.in/mumbai/ganeshotsav-2026-palghar-mla-rajendra-gavit-directs-pwd-contractors-to-complete-road-repairs-soon",
      date: "Sep 2026",
      period: "MLA karyakaal 2024–2029",
      note: "Nirdesh jaari — kaam poora hone ki pushti baaki",
    },
    ],
    fund: {
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'MP karyakaal (2018–2024) ka MPLADS record nikala ja raha hai. MLA fund ke liye RTI drive me data manga jayega.',
    },
    background: {
      age: '57',
      education: 'Graduate',
      criminalCases: 1,
      assets: 'Rs 14,22,62,017',
      liabilities: 'Rs 1,29,71,595',
      mynetaUrl: 'https://myneta.info/Maharashtra2024/candidate.php?candidate_id=593',
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
      { post: "MLA", constituency: "Boisar (ST)", constituencySlug: "boisar", party: "BVA", start: "2014", end: "2019" },
      { post: 'MLA', constituency: 'Boisar (ST)', constituencySlug: 'boisar', party: 'Shiv Sena', start: '2024', end: '2029' },
    ],
    works: [
    {
      title: "Vasai-Virar Ward F me sadak marammat abhiyaan ka shubharambh",
      category: "Sadak",
      badge: "news",
      sourceLabel: "Free Press Journal",
      sourceUrl: "https://www.freepressjournal.in/mumbai/palghar-civic-development-mla-vilas-tare-launches-major-road-repair-and-restoration-initiative-in-vasai-virars-ward-f-areas-citizens-express-relief",
      date: "Nov 2025",
      period: "MLA karyakaal 2024–2029",
      note: "Sopara Phata, Dhaniv Baug, Goraipada sahit kai sthanon par marammat",
    },
    {
      title: "Palghar jile ke liye 2 saal me 200 MSRTC buses ki ghoshna",
      category: "Any",
      badge: "news",
      sourceLabel: "newsdrum (PTI)",
      sourceUrl: "https://www.newsdrum.in/national/palghar-to-get-200-st-buses-over-next-two-years-11177999",
      date: "Mar 2025",
      period: "MLA karyakaal 2024–2029",
      note: "Parivahan mantri se charcha ke baad — 2026-27 me 90, 2027-28 me 110 buses",
    },
    {
      title: "Shigao Rampada me lagwaye gaye borewell me paani na aane ki sthaniya report",
      category: "Paani",
      badge: "news",
      sourceLabel: "Gallinews",
      sourceUrl: "https://gallinews.com/palghar-water-scarcity-in-adiwasi-villages/",
      date: "~2017",
      period: "MLA karyakaal 2014–2019",
      note: "Sthaniya report ke anusaar borewell me paani nahi aaya; prashaasan ka paksh uplabdh nahi",
    },
    ],
    fund: {
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Maharashtra me MLA fund ka record online uplabdh nahi hai. Pehli RTI drive me Boisar seat ka data manga jayega.',
    },
    background: {
      age: '52',
      education: '5th Pass',
      criminalCases: 0,
      assets: 'Rs 1,06,79,521',
      liabilities: 'Nil',
      mynetaUrl: 'https://myneta.info/Maharashtra2024/candidate.php?candidate_id=2129',
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
    works: [
    {
      title: "Achole-Diwanman me 1500 ekad par BKC-style vikas ki maang; MMRDA ne prastaav sarkar ko bheja",
      category: "Rojgar",
      badge: "news",
      sourceLabel: "Free Press Journal",
      sourceUrl: "https://www.freepressjournal.in/mumbai/palghar-news-vasai-virar-set-to-receive-development-boost-as-mmrda-inspection-clears-key-projects",
      date: "Dec 2025",
      period: "MLA karyakaal 2024–2029",
      note: "Sthaniya rojgar ke liye maang — manzoori/nirmaan ki pushti baaki",
    },
    {
      title: "Virar-Nalasopara me sadakon ka bhumipujan; Santosh Bhuvan sadak 12 ghante me ukhadne ki khabar",
      category: "Sadak",
      badge: "news",
      sourceLabel: "Free Press Journal",
      sourceUrl: "https://www.freepressjournal.in/mumbai/nalasopara-civic-row-newly-repaired-road-crumbles-within-hours-of-inauguration-locals-slam-poor-quality-election-time-rush",
      date: "Nov 2025",
      period: "MLA karyakaal 2024–2029",
      note: "FPJ ke anusaar sthaniya logon ne gunvatta par sawal uthaye",
    },
    {
      title: "80+ atke punarvikas projects ke liye CM se vishesh samiti ki maang",
      category: "Any",
      badge: "news",
      sourceLabel: "Urban Acres",
      sourceUrl: "https://urbanacres.in/vasai-virar-redevelopment-crisis-exposes-a-broken-approval-chain/",
      date: "Sep 2026",
      period: "MLA karyakaal 2024–2029",
      note: "Maang — sarkar ka faisla uplabdh nahi",
    },
    ],
    fund: {
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Maharashtra me MLA fund ka record online uplabdh nahi hai. Pehli RTI drive me Nalasopara seat ka data manga jayega.',
    },
    background: {
      age: '60',
      education: 'Graduate',
      criminalCases: 11,
      assets: 'Rs 45,19,37,369',
      liabilities: 'Rs 17,62,47,684',
      mynetaUrl: 'https://myneta.info/Maharashtra2024/candidate.php?candidate_id=1161',
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
    works: [
    {
      title: "VVMC buses me mahilaon ko 50% kiraya chhoot (1 June 2025 se lagu)",
      category: "Any",
      badge: "news",
      sourceLabel: "Devdiscourse (PTI)",
      sourceUrl: "https://www.Devdiscourse.com/article/science-environment/3441119-vasai-virar-buses-to-offer-women-50-fare-concession",
      date: "May 2025",
      period: "MLA karyakaal 2024–2029",
      note: "MLA ki pairavi ke baad VVMC ka faisla",
    },
    {
      title: "CM se Vasai me sadak concreting, flyover/ROB kaam tez karne ki maang",
      category: "Sadak",
      badge: "news",
      sourceLabel: "ThePrint (PTI)",
      sourceUrl: "https://theprint.in/india/mla-urges-cm-fadnavis-to-expedite-infrastructure-projects-in-vasai/2755054/?amp",
      date: "Oct 2025",
      period: "MLA karyakaal 2024–2029",
      note: "Maang — kaam poora hone ki pushti baaki",
    },
    {
      title: "Vasai me baadh-paani samasya ke liye ₹200 crore prastaav ki manzoori ki maang",
      category: "Paani",
      badge: "news",
      sourceLabel: "newsdrum (PTI)",
      sourceUrl: "https://www.newsdrum.in/national/rs-200-cr-civic-proposal-for-flood-mitigation-in-vasai-must-be-approved-soon-mla-9383128",
      date: "Jun 2025",
      period: "MLA karyakaal 2024–2029",
      note: "Prastaav sarkar ke paas lambit",
    },
    ],
    fund: {
      scheme: 'MLALADS',
      allocated: null, utilized: null, utilizationPct: null,
      note: 'Maharashtra me MLA fund ka record online uplabdh nahi hai. Pehli RTI drive me Vasai seat ka data manga jayega.',
    },
    background: {
      age: '38',
      education: 'Graduate Professional',
      criminalCases: 1,
      assets: 'Rs 1,68,66,201',
      liabilities: 'Rs 46,44,974',
      mynetaUrl: 'https://myneta.info/Maharashtra2024/candidate.php?candidate_id=788',
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
    works: [
    {
      title: "Palghar me Khelo India ke tahat ₹5 crore sports stadium ki manzoori",
      category: "Any",
      badge: "news",
      sourceLabel: "ThePrint (PTI)",
      sourceUrl: "https://theprint.in/sport/centre-sanctions-rs-5-cr-for-new-sports-stadium-in-palghar-bjp-mp-savara/2258273/",
      date: "Sep 2024",
      period: "MP karyakaal 2024–2029",
      note: "Khel mantri se patra-vyavahar ke baad manzoori; nirmaan ki sthiti jaanch baaki",
    },
    ],
    fund: {
      scheme: 'MPLADS',
      allocated: '₹14.70 crore', utilized: '₹8.57 crore (sifarish)', utilizationPct: 58,
      note: 'e-SAKSHI dashboard (12 Oct 2026): 89 kaam sifarish, 21 manzoor, 1 poora; kharch ₹1.52 crore. Sifarish ke hisaab se utilization ~58%, kharch ke hisaab se ~10%. Source: mplads.mospi.gov.in',
    },
    background: {
      age: '47',
      education: 'Graduate Professional',
      criminalCases: 0,
      assets: 'Rs 8,16,22,050',
      liabilities: 'Rs 1,07,76,056',
      mynetaUrl: 'https://myneta.info/LokSabha2024/candidate.php?candidate_id=7349',
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

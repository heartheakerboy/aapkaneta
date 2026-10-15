// 2018 vs 2023 affidavit comparison for Mizoram MLAs.
// Coverage: 27 of 40 sitting (2023) MLAs (68%) have a verified 2018 myneta.info/mizoram2018 affidavit record.
// Source: 2018 Mizoram Vidhan Sabha election affidavits (myneta.info/mizoram2018). Every candidate page
// was opened and read; identity verified by name + 2018 constituency + party + age + father name.
// Losers from 2018 are included as previous affidavits (k-sapdanga — lost Aizawl East-I 2018 as IND,
// runner-up to Zoramthanga; lalthansanga — lost Hrangturzo 2018 as IND; b-lalchhanzova — lost Aizawl
// East-II 2018 as IND, runner-up to Robert Romawia Royte; tbc-lalvenchhunga — lost Champhai North 2018
// as PRISM; lalfamkima — runner-up Kolasib 2018 as IND; lalrinpuii — lost Lunglei East 2018 as IND by
// 72 votes; r-rohmingliana — lost Thorang 2018 (MNF); rasik-mohan-chakma — lost Tuichawng 2018 (MNF);
// h-ginzalala — contested Lengteng 2018 as IND (not his current Champhai North seat); w-chhuanawma —
// contested Tuichang 2018 as IND; p-c-vanlalruata — contested Tuikum 2018 as IND; v-malsawmtluanga —
// contested Lunglei North 2018 as IND).
// Party/seat corrections caught during verification: robert-romawia-royte was MNF 2018 winner of
// AIZAWL EAST II (now Hachhek MLA); r-lalthangliana was MNF 2018 winner of SOUTH TUIPUI (now Dampa MLA,
// Nov 2025 by-election); vanlalhlana / dr-vanlalthlana / v-l-zaithanzama / c-lalsawivunga / lalchhuanthanga /
// lalduhoma all contested 2018 as IND (ZPM did not exist yet); k-beichhua was MNF 2018 (now BJP).
// ONE non-2018 record: k-laldawngliana did NOT contest 2018 Tuirial (2018 candidates verified) — record
// used is his Oct 2021 Tuirial by-election affidavit (year: '2021'), disclosed in his entry.
// Education differences kept as per 2018 page (v-l-zaithanzama '12th Pass' 2018; tbc-lalvenchhunga '10th Pass'
// 2018; ramthanmawia 'Others' 2018; dr-vanlalthlana 'Doctorate' 2018).
// Criminal cases 2018->2023: r-lalthangliana 1 (2018 PC Act charges framed) — 2023 affidavit se compare karen;
// rasik-mohan-chakma 1 (2018 ACB case) — 2023 me 0; v-malsawmtluanga 1 (2018 IPC 279/304A/337 FIR 216/16).
// 13 without a 2018 record (retry leads — all verified absent from 2018 constituency candidate lists):
// lalbiakzama (did not contest 2018 Chalfilh); lalnilawma (did not contest 2018 Tawi); lalnghinglova-hmar
// (no 2018 assembly contest — electoral debut 2019 Lok Sabha); baryl-vanneihsangi (debut 2023 — TV presenter
// in 2018); f-rodingliana (not in 2018 Lengteng list); clement-lalhmingthanga (not in 2018 Champhai South
// list — in army service); lalmuanpuia-punte (not in 2018 Hrangturzo list); jeje-lalpekhlua (not in 2018
// South Tuipui list — footballer); t-lalhlimpuia (not in 2018 Lunglei West list); lalramliana-papuia (not
// in 2018 Lunglei South list); prova-chakma (not in 2018 West Tuipui list); lorrain-lalpekliana-chinzah
// (not in 2018 Lawngtlai East list); k-hrahmo (not in 2018 Palak list).
// Data-confidence note: figures are self-declared affidavits; asset totals use myneta's computed totals;
// this file makes no inference or comment — facts only for the comparison section. Two records
// (c-lalsawivunga id=155, c-ngunlianchunga id=238) had candidate-page render gaps; their figures were
// cross-verified across independent myneta official summary reports (candidates_analyzed /
// winner_education / district lists) and myneta's own 2023 other-elections cross-links.
import type { PrevAffidavit } from './pilot';

export const prevMizoram: Record<string, PrevAffidavit> = {
  'robert-romawia-royte': {
  year: '2018',
  age: '51',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 44,74,79,562',
  assetsNum: 447479562,
  liabilities: 'Rs 1,52,39,450',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=215',
  },
  'r-lalthangliana': {
  year: '2018',
  age: '62',
  education: 'Doctorate',
  criminalCases: 1,
  assets: 'Rs 7,49,72,003',
  assetsNum: 74972003,
  liabilities: 'Rs 5,46,109',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=276',
  },
  'h-lalzirliana': {
  year: '2018',
  age: '49',
  education: 'Graduate Professional',
  criminalCases: 0,
  assets: 'Rs 2,20,50,953',
  assetsNum: 22050953,
  liabilities: 'Rs 1,50,000',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=204',
  },
  'k-laldawngliana': {
  year: '2021',
  age: '49',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 6,18,81,690',
  assetsNum: 61881690,
  liabilities: 'Rs 5,20,899',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=373',
  },
  'lalfamkima': {
  year: '2018',
  age: '52',
  education: 'Graduate',
  criminalCases: 0,
  assets: 'Rs 5,88,08,706',
  assetsNum: 58808706,
  liabilities: 'Rs 52,33,854',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=250',
  },
  'lalrinsanga-ralte': {
  year: '2018',
  age: '40',
  education: 'Graduate',
  criminalCases: 0,
  assets: 'Rs 57,39,763',
  assetsNum: 5739763,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=186',
  },
  'lalchhandama-ralte': {
  year: '2018',
  age: '46',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 4,00,30,381',
  assetsNum: 40030381,
  liabilities: 'Rs 3,00,000',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=205',
  },
  'vanlalhlana': {
  year: '2018',
  age: '59',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 1,76,67,000',
  assetsNum: 17667000,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=152',
  },
  'dr-vanlalthlana': {
  year: '2018',
  age: '40',
  education: 'Doctorate',
  criminalCases: 0,
  assets: 'Rs 3,30,34,746',
  assetsNum: 33034746,
  liabilities: 'Rs 40,00,338',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=311',
  },
  'k-sapdanga': {
  year: '2018',
  age: '59',
  education: 'Graduate',
  criminalCases: 0,
  assets: 'Rs 19,67,99,256',
  assetsNum: 196799256,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=153',
  },
  'lalthansanga': {
  year: '2018',
  age: '55',
  education: '12th Pass',
  criminalCases: 0,
  assets: 'Rs 2,37,14,896',
  assetsNum: 23714896,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=163',
  },
  'b-lalchhanzova': {
  year: '2018',
  age: '42',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 60,50,139',
  assetsNum: 6050139,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=154',
  },
  'tbc-lalvenchhunga': {
  year: '2018',
  age: '35',
  education: '10th Pass',
  criminalCases: 0,
  assets: 'Rs 78,58,517',
  assetsNum: 7858517,
  liabilities: 'Rs 21,66,036',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=271',
  },
  'v-l-zaithanzama': {
  year: '2018',
  age: '60',
  education: '12th Pass',
  criminalCases: 0,
  assets: 'Rs 1,70,60,003',
  assetsNum: 17060003,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=166',
  },
  'c-lalsawivunga': {
  year: '2018',
  age: '56',
  education: 'Graduate',
  criminalCases: 0,
  assets: 'Rs 1,25,61,427',
  assetsNum: 12561427,
  liabilities: 'Rs 9,465',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=155',
  },
  'lalchhuanthanga': {
  year: '2018',
  age: '61',
  education: 'Graduate',
  criminalCases: 0,
  assets: 'Rs 12,94,82,162',
  assetsNum: 129482162,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=190',
  },
  'w-chhuanawma': {
  year: '2018',
  age: '58',
  education: '10th Pass',
  criminalCases: 0,
  assets: 'Rs 3,45,53,861',
  assetsNum: 34553861,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=158',
  },
  'h-ginzalala': {
  year: '2018',
  age: '45',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 10,71,45,649',
  assetsNum: 107145649,
  liabilities: 'Rs 4,15,721',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=157',
  },
  'ramthanmawia': {
  year: '2018',
  age: '61',
  education: 'Others',
  criminalCases: 0,
  assets: 'Rs 16,98,36,107',
  assetsNum: 169836107,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=161',
  },
  'lalduhoma': {
  year: '2018',
  age: '69',
  education: 'Graduate',
  criminalCases: 0,
  assets: 'Rs 2,13,45,074',
  assetsNum: 21345074,
  liabilities: 'Rs 5,04,535',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=162',
  },
  'p-c-vanlalruata': {
  year: '2018',
  age: '45',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 43,02,906',
  assetsNum: 4302906,
  liabilities: 'Rs 68,41,657',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=170',
  },
  'v-malsawmtluanga': {
  year: '2018',
  age: '29',
  education: 'Post Graduate',
  criminalCases: 1,
  assets: 'Rs 1,52,30,076',
  assetsNum: 15230076,
  liabilities: 'Rs 18,53,557',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=180',
  },
  'lalrinpuii': {
  year: '2018',
  age: '56',
  education: 'Graduate',
  criminalCases: 0,
  assets: 'Rs 4,07,83,425',
  assetsNum: 40783425,
  liabilities: 'Rs 39,90,439',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=198',
  },
  'r-rohmingliana': {
  year: '2018',
  age: '46',
  education: 'Graduate Professional',
  criminalCases: 0,
  assets: 'Rs 6,71,24,037',
  assetsNum: 67124037,
  liabilities: 'Rs 27,36,335',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=284',
  },
  'rasik-mohan-chakma': {
  year: '2018',
  age: '54',
  education: 'Graduate',
  criminalCases: 1,
  assets: 'Rs 1,68,88,884',
  assetsNum: 16888884,
  liabilities: 'Rs 3,00,000',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=350',
  },
  'c-ngunlianchunga': {
  year: '2018',
  age: '58',
  education: '8th Pass',
  criminalCases: 0,
  assets: 'Rs 8,00,10,668',
  assetsNum: 80010668,
  liabilities: 'Rs 1,33,34,644',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=238',
  },
  'k-beichhua': {
  year: '2018',
  age: '52',
  education: 'Graduate Professional',
  criminalCases: 0,
  assets: 'Rs 3,13,77,608',
  assetsNum: 31377608,
  liabilities: 'Rs 7,09,680',
  mynetaUrl: 'https://myneta.info/mizoram2018/candidate.php?candidate_id=291',
  },
};

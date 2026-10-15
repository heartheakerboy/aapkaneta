// 2019 vs 2024 affidavit comparison for Sikkim MLAs.
// Coverage: 17 of 32 sitting (2024) MLAs (53%) have a verified 2019 myneta.info/sikkim2019 affidavit record.
// Source: 2019 Sikkim Vidhan Sabha election affidavits (myneta.info/sikkim2019). Every covered
// candidate page was opened and read except two (raj-kumari-thapa, delay-namgyal-barfungpa), whose
// records were verified from myneta's own search-cache full text + candidates-analyzed/winners
// charts (caveat disclosed in each note — Nagaland Rio precedent). Identity verified by name +
// 2019 constituency + party + age (+ 2024/2014 declaration links on the page where available).
// Losers from 2019 are included (sonam-tshering-venchungpa — lost Martam-Rumtek 2019 as SKM by 73
// votes, won the Oct 2019 bye-election as BJP, now SKM; samdup-tshering-bhutia — lost Tumen-Lingi
// 2019 as SKM by 320 votes, won 2024; delay-namgyal-barfungpa — lost Gangtok 2019 as IND, won 2024
// as SKM). Party/seat shifts 2019->2024: gt-dhungel was SDF 2019 (now SKM); pintso-namgyal-lepcha
// was SDF 2019 winner of DJONGU (now SKM); raj-kumari-thapa was SDF 2019 winner of RANGANG-YANGANG
// (now SKM); the other 14 were SKM in 2019 except aditya-golay (SKM) and delay-namgyal-barfungpa
// (IND). prem-singh-tamang did NOT contest the April 2019 general election (disqualified after his
// 2016-17 corruption conviction; became CM 27 May 2019 without being MLA) — his only 2019 record is
// the 21 Oct 2019 Poklok-Kamrang bye-election affidavit, kept as the closest prior 2019
// declaration with full disclosure.
// Criminal cases 2019->2024: only prem-singh-tamang has cases in both (1->1); all other 16 covered
// MLAs had 0 cases in 2019.
// 15 without a 2019 record (all verified absent from 2019 constituency candidate lists):
// tshering-thendup-bhutia (Yoksam-Tashiding 2019: Sangay Lepcha SKM won); sudesh-kumar-subba
// (Maneybong-Dentam 2019: Narendra Kumar Subba SDF won); erung-tenzing-lepcha (Rinchenpong 2019:
// Karma Sonam Lepcha SDF won); madan-cintury (Salghari-Zoom 2019: Sunita Gajmer SKM won — Ganga
// Maya Cintury INC is a different person); rikshal-dorjee-bhutia (Barfung 2019: Tashi Thendup
// Bhutia SDF won; 2024 debut); bhoj-raj-rai (Poklok-Kamrang 2019: SKM candidate was Kharka Bahadur
// Rai — he contested 2014, not 2019); satish-chandra-rai (Nov 2024 bypoll winner — first election,
// unopposed); nar-bahadur-pradhan (Melli 2019: SKM candidate was Tilak Basnet; 2024 debut);
// nar-bahadur-dahal (Khamdong-Singtam 2019: Mani Kumar Sharma SKM won); puran-kr-gurung
// (Chujachen 2019: Krishna Bahadur Rai SDF won — he was MLA 2009-14, did not contest 2019);
// pamin-lepcha (Gnathang-Machong 2019: her father Dorjee Tshering Lepcha SDF won); raju-basnet
// (Namcheybung 2019: Em Prasad Sharma SDF won, SKM fielded Dennis Rai); tenzing-norbu-lamtha
// (Shyari 2019: Kunga Nima Lepcha SKM won; did not contest anywhere in 2019); kala-rai (Upper
// Burtuk 2019: Nagendra Bikram Gurung SKM lost to Dilli Ram Thapa SDF; 2024 debut);
// thenlay-tshering-bhutia (Kabi-Lungchok 2019: Karma Loday Bhutia SKM won; he won 2009, lost 2014,
// did not contest 2019).
// Data-confidence note: figures are self-declared affidavits; asset totals use myneta's computed
// totals; this file makes no inference or comment — facts only for the comparison section.
// Minor age inconsistencies between the two affidavits are self-declared as filed.
import type { PrevAffidavit } from './pilot';

export const prevSikkim: Record<string, PrevAffidavit> = {

  'lall-bahadur-das': {
  year: '2019',
  age: '48',
  education: 'Graduate (B.A. 1993, University of North Bengal, Sikkim Govt College)',
  criminalCases: 0,
  assets: 'Rs 64,41,567',
  assetsNum: 6441567,
  liabilities: 'Rs 12,00,448',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4692',
  },

  'sonam-tshering-venchungpa': {
  year: '2019',
  age: '47',
  education: 'Others (Post Graduate Diploma in Management, IIM Bangalore, 2001)',
  criminalCases: 0,
  assets: 'Rs 7,29,85,647',
  assetsNum: 72985647,
  liabilities: 'Rs 60,72,729',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4719',
  },

  'gt-dhungel': {
  year: '2019',
  age: '59',
  education: 'Graduate Professional (B.E. Civil, Assam Engineering College, 1984)',
  criminalCases: 0,
  assets: 'Rs 19,97,91,072',
  assetsNum: 199791072,
  liabilities: 'Rs 4,61,965',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4595',
  },

  'bhim-hang-limboo': {
  year: '2019',
  age: '30',
  education: 'Graduate - B.A. Education (Hons), University of North Bengal (Namchi Govt College), 2008',
  criminalCases: 0,
  assets: 'Rs 39,65,875',
  assetsNum: 3965875,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4614',
  },

  'lok-nath-sharma': {
  year: '2019',
  age: '46',
  education: '12th Pass - Class XII, Govt Sr Sec School Soreng, West Sikkim, 1991',
  criminalCases: 0,
  assets: 'Rs 2,09,80,413',
  assetsNum: 20980413,
  liabilities: 'Rs 21,79,950',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4619',
  },

  'mingma-norbu-sherpa': {
  year: '2019',
  age: '49',
  education: 'Graduate - B.A. 1995, North Bengal University (Sikkim Govt College)',
  criminalCases: 0,
  assets: 'Rs 1,67,35,961',
  assetsNum: 16735961,
  liabilities: 'Rs 6,16,705',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4627',
  },

  'aditya-golay': {
  year: '2019',
  age: '28',
  education: 'Graduate - B.A. English Hons, Hindu College, University of Delhi, 2013',
  criminalCases: 0,
  assets: 'Rs 14,33,713',
  assetsNum: 1433713,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4637',
  },

  'sanjeet-kharel': {
  year: '2019',
  age: '42',
  education: 'Graduate (BA 1999, North Bengal University, St. Joseph College Darjeeling)',
  criminalCases: 0,
  assets: 'Rs 4,07,63,883',
  assetsNum: 40763883,
  liabilities: 'Rs 3,11,049',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4662',
  },

  'bedu-singh-panth': {
  year: '2019',
  age: '66',
  education: '12th Pass (West Bengal Board of Secondary Education, 1972)',
  criminalCases: 0,
  assets: 'Rs 8,81,41,465',
  assetsNum: 88141465,
  liabilities: 'Rs 12,99,550',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4671',
  },

  'raj-kumari-thapa': {
  year: '2019',
  age: '39',
  education: 'Graduate (BA, University of North Bengal, 2003)',
  criminalCases: 0,
  assets: 'Rs 37,10,890',
  assetsNum: 3710890,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4593',
  },

  'samdup-tshering-bhutia': {
  year: '2019',
  age: '60',
  education: '12th Pass (Tashi Namgyal Senior Secondary School, Gangtok, 1979)',
  criminalCases: 0,
  assets: 'Rs 4,31,78,584',
  assetsNum: 43178584,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4678',
  },

  'prem-singh-tamang': {
  year: '2019',
  age: '51',
  education: 'Graduate (B.A., Darjeeling Govt College 1988)',
  criminalCases: 1,
  assets: 'Rs 3,89,28,315',
  assetsNum: 38928315,
  liabilities: 'Rs 63,06,653',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4771',
  },

  'arun-kumar-upreti': {
  year: '2019',
  age: '51',
  education: '12th Pass (Tashi Namgyal Sr Sec School, 1987)',
  criminalCases: 0,
  assets: 'Rs 11,42,34,450',
  assetsNum: 114234450,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4727',
  },

  'delay-namgyal-barfungpa': {
  year: '2019',
  age: '54',
  education: '8th Pass (Class IX, Tashi Namgyal Academy 1983)',
  criminalCases: 0,
  assets: 'Rs 57,79,62,986',
  assetsNum: 577962986,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4602',
  },

  'pintso-namgyal-lepcha': {
  year: '2019',
  age: '44',
  education: '8th Pass (Class 9th, Denzong Padma Choeling Academy 1988-89)',
  criminalCases: 0,
  assets: 'Rs 2,78,36,065',
  assetsNum: 27836065,
  liabilities: 'Rs 6,82,651',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4744',
  },

  'samdup-lepcha': {
  year: '2019',
  age: '54',
  education: '10th Pass (Govt Sr Sec School Mangan, 1982)',
  criminalCases: 0,
  assets: 'Rs 23,71,16,263',
  assetsNum: 237116263,
  liabilities: 'Rs 3,35,25,370',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4749',
  },

  'sonam-lama': {
  year: '2019',
  age: '43',
  education: '8th Pass (Purvamadhyama 1st year, Sheda 1992)',
  criminalCases: 0,
  assets: 'Rs 1,27,02,601',
  assetsNum: 12702601,
  liabilities: 'Rs 17,18,238',
  mynetaUrl: 'https://myneta.info/sikkim2019/candidate.php?candidate_id=4751',
  },

};
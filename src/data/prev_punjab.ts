// Punjab — 2017 vs 2022 affidavit comparison (wartaman 117 MLAs).
// Punjab me pichhla aam Vidhan Sabha chunav 2017 me hua tha (16th VS 2022 me chuni gayi).
// Coverage: 50/117 (43%) ke verified myneta.info/punjab2017 (lowercase folder) affidavit records.
// 2017 seat + party + pita-naam + umr se pehchan pakki ki gayi (winner/loser dono shamil — affidavit hi tulna ka aadhaar hai).
// Upchunav MLAs: hardeep-singh-dimpy-dhillon (2017 SAD Gidderbaha), mohinder-bhagat (2017 BJP Jalandhar West as 'Mahinder Pal'),
// balwinder-singh-dhaliwal (2019 Phagwara bypoll — year '2019' entry).
// Sabse badi sampatti-badhotri (2017 -> 2022): baljinder-kaur ~30.5x (Rs 3.66L -> Rs 1.11cr),
// harjot-singh-bains ~14.2x (Rs 17L -> Rs 2.41cr), vikramjit-singh-chaudhary ~7.0x, kulwant-singh-pandori ~6.3x,
// lal-chand-kataruchakk ~5.8x (Rs 1.07L -> Rs 6.19L). Girawat: kultar-singh-sandhwan (0.59x), gurdit-singh-sekhon (0.73x),
// rana-gurjeet-singh (0.74x), sukhpal-singh-khaira (0.75x), daljit-singh-grewal (0.78x).
// Pehchan-jaal se bache: inderjit-kaur-mann (Nakodar), jaswinder-singh-attari, jeevan-jyot-kaur, kulwant clusters,
// amritpal-singh-sukhanand (Khadoor Sahib MP ka record nahi joda), gurdit-singh-sekhon (Janmeja Singh alag vyakti).
// Party changes 2017 -> 2022: naresh-puri IND->INC, lal-chand-kataruchakk RMPOI->AAP, amit-rattan SAD->AAP,
// jaswant-singh-gajjanmajra LIP->AAP, hardeep-singh-dimpy-dhillon SAD->AAP, mohinder-bhagat BJP->AAP.

import type { PrevAffidavit } from './pilot';

export const prevPunjabNetas: Record<string, PrevAffidavit> = {

  'naresh-puri': {
  year: '2017',
  age: '47',
  education: 'Graduate',
  criminalCases: 0,
  assets: 'Rs 27,89,07,766',
  assetsNum: 278907766,
  liabilities: 'Rs 9,09,434',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=877',
  },
// 2017: IND, Sujanpur (Loser — 28,675 votes, 3rd; Dinesh Singh BJP jeete 48,910; Amit Singh INC runner-up 30,209; S/o late Raghunath Sahai Puri, purv Sujanpur MLA; age 47). Cross-year: 2022 INC Rs 27,28,01,726/0 cases (Winner). Note: candidate page ka header text-extract me render nahi hua — figures khole gaye myneta candidates_analyzed table + ECI 2017 detailed results se; 2017 me IND the, 2022 me INC (party change IND->INC).

  'lal-chand-kataruchakk': {
  year: '2017',
  age: '47',
  education: '10th Pass — Matriculation, Punjab School Education Board, Mohali, 2007',
  criminalCases: 0,
  assets: 'Rs 1,06,989',
  assetsNum: 106989,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=69',
  },
// 2017: Revolutionary Marxist Party of India, Bhoa (SC) (Loser — 13,353 votes, 3rd; Joginder Pal INC jeete 67,865; S/o Labhu Ram; age 47 affidavit, ECI me 46). Cross-year: 2022 AAP Rs 6,19,225/1 case (Winner); Lok Sabha 2019 Rs 4,06,299/0 cases. Note: party change RMPOI->AAP; 1-saal umr visangati (affidavit 47 vs ECI 46).

  'ashwani-kumar-sharma': {
  year: '2017',
  age: '51',
  education: 'Graduate — BA, Guru Nanak Dev University, 1988',
  criminalCases: 0,
  assets: 'Rs 63,75,996',
  assetsNum: 6375996,
  liabilities: 'Rs 1,78,210',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=302',
  },
// 2017: BJP, Pathankot (Loser — 45,213 votes, runner-up; Amit Vij INC jeete 56,383; S/o Uma Dutt; age 51). Cross-year: 2022 BJP Rs 1,40,66,533/1 case (Winner); 2012 Rs 27,80,708/0 cases.

  'barindermeet-singh-pahra': {
  year: '2017',
  age: '36',
  education: 'Others — Diploma in Computer Engineering, S.B.C.M.S. Polytechnic Attalgarh (Mukerian, Hoshiarpur), 2000',
  criminalCases: 0,
  assets: 'Rs 1,64,08,437',
  assetsNum: 16408437,
  liabilities: 'Rs 32,80,371',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=344',
  },
// 2017: INC, Gurdaspur (Winner — 67,709 votes; runner-up Gurbachan Singh Babbehali SAD 38,753; S/o Gurmeet Singh; age 36). Cross-year: 2022 INC Rs 1,85,28,272/0 cases (Winner). Note: 2017 page title "Barindermeet Singh" (Pahra surname 2022 page par) — S/o + umr + seat se pehchan pakki.

  'aruna-chaudhary': {
  year: '2017',
  age: '60',
  education: 'Graduate Professional — BA + B.Ed, Kashmir University Srinagar, 1979',
  criminalCases: 0,
  assets: 'Rs 5,16,62,751',
  assetsNum: 51662751,
  liabilities: 'Rs 4,07,698',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=75',
  },
// 2017: INC, Dina Nagar (SC) (Winner — 72,176 votes; runner-up Bishan Dass BJP 40,259; D/o Sh. Ashok Chaudhary; age 60 affidavit, ECI me 59). Cross-year: 2022 INC Rs 7,79,67,790/0 cases (Winner); 2012 Rs 4,90,35,188/0 cases. Note: 1-saal umr visangati (affidavit 60 vs ECI 59).

  'amarpal-singh': {
  year: '2017',
  age: '32',
  education: 'Post Graduate — M.A. Political Science (LPU, 2014), LLB (GNDU Amritsar, 2009)',
  criminalCases: 0,
  assets: 'Rs 23,87,000',
  assetsNum: 2387000,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=316',
  },
// 2017: AAP, Sri Hargobindpur (SC) (Loser — 24,294 votes, 3rd; Balwinder Singh Laddi INC jeete 57,489; S/o Gurnam Singh [2022 halafnama me "Gurman Singh"]; age 32; pesha Lawyer). Cross-year: 2022 AAP Rs 23,69,000/1 case (Winner). Note: pita-naam spelling-antar (Gurnam vs Gurman) — seat/party/umar/shiksha/pesha match, wahi vyakti.

  'tripat-rajinder-singh': {
  year: '2017',
  age: '73',
  education: 'Graduate — BA, Sikh National College Qadian (Punjab University, Chandigarh), 1969',
  criminalCases: 0,
  assets: 'Rs 5,00,86,422',
  assetsNum: 50086422,
  liabilities: 'Rs 12,68,268',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=465',
  },
// 2017: INC, Fatehgarh Churian (Winner — 54,348 votes; runner-up Nirmal Singh Kahlon SAD 52,349; S/o S Gurbachan Singh; age 73). Cross-year: 2022 INC Rs 6,89,12,196/0 cases (Winner); 2012 Rs 5,98,16,113/0 cases. Note: 2017 page me naam "Tript Rajinder Singh" (halafnama spelling Tripat).

  'sukhbinder-singh-sarkaria': {
  year: '2017',
  age: '61',
  education: 'Graduate — B.Sc., Guru Nanak Dev University Amritsar, 1975-76',
  criminalCases: 1,
  assets: 'Rs 12,20,02,000',
  assetsNum: 122002000,
  liabilities: 'Rs 1,51,14,000',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=89',
  },
// 2017: INC, Raja Sansi (Winner — 59,628 votes; runner-up Vir Singh Lopoke SAD 53,901; S/o Narinder Singh; age 61 affidavit, ECI me 60; pesha MLA). Cross-year: 2022 INC Rs 11,21,53,000/1 case (Winner); 2012 Rs 8,08,29,000/1 case; 2007 Rs 2,62,87,000/1 case; Lok Sabha 2004 Rs 3,07,86,563/1 case. Note: 1 criminal case (IPC 366/34, 1977 ka case — 1-saal umr visangati affidavit 61 vs ECI 60).

// W1 VERIFIED-ABSENT (2017 Punjab vidhansabha me nahi lade — koi guess nahi):
// - partap-singh-bajwa: 2017 me nahi lade — 2016-2022 Rajya Sabha MP the
//   (Tribune, Jan 2022: "whose Rajya Sabha term ends in April next year");
//   Qadian 2017 me INC se unke bhai Fatehjang Singh Bajwa lade aur jeete
//   (62,596 votes; khole gaye ECI 2017 detailed results me Partap ka naam nahi).
// - amansher-singh-shery-kalsi: 2017 me nahi lade — pehla chunav 2022 (Batala);
//   2017 Batala me AAP se Gurpreet Ghuggi lade the (34,302 votes, 3rd; vijeta
//   Lakhbir Singh Lodhinangal SAD); khole gaye ECI 2017 results + myneta
//   candidates_analyzed (Batala rows) me Amansher ka naam kahin nahi.
// - gurdeep-singh-randhawa: 2017 me nahi lade — pehla chunav Nov 2024 bypoll
//   (Dera Baba Nanak); 2017 Dera Baba Nanak me AAP se Gurpartap Singh
//   Khushalpur lade the (17,222 votes, 3rd; vijeta Sukhjinder Singh Randhawa
//   INC); khole gaye ECI 2017 results me Gurdeep ka naam nahi.
// - kuldeep-singh-dhaliwal: 2017 vidhansabha me nahi lade — 2019 me Amritsar se
//   Lok Sabha chunav lade the (Tribune, Jan 2022), pehla vidhansabha chunav 2022
//   (Ajnala); 2017 Ajnala me AAP se Rajpreet Singh lade the (12,749 votes, 3rd;
//   vijeta Harpartap Singh INC); khole gaye ECI 2017 results me Kuldeep ka naam nahi.

  'harbhajan-singh-eto': {
  year: '2017',
  age: '48',
  education: 'Graduate — Master In Arts. (Political Science) - 1992 from Guru Nanak Dev University Amritsar (punjab)',
  criminalCases: 0,
  assets: 'Rs 77,36,882',
  assetsNum: 7736882,
  liabilities: 'Rs 5,37,70,281',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=476',
  },
// 2017: Jandiala (SC), AAP (haare — 33,912 vote). Pehchan pakki: S/o S. Darshan Singh; umr 48 (2022 umr 53 se ~5 saal); voter 14.Jandiala Serial 32 Part 179; pesha "Private Tuitio work" (page as-is), patni Govt. Employee (Teacher); shiksha M.A. Political Science GNDU 1992 (2022 se match). Liabilities zyadatar patni ke naam: HDFC Jandiala Guru Rs 5,00,47,153 + ICICI Hall Bazar Rs 37,23,128. Cross-year: page par Punjab 2022 link Rs 1,16,39,694 / 1 case — foundation se match.

  'ajay-gupta': {
  year: '2017',
  age: '56',
  education: 'Graduate Professional — M.B.B.S, GNDU Amritsar 1983',
  criminalCases: 0,
  assets: 'Rs 9,96,42,000',
  assetsNum: 99642000,
  liabilities: 'Rs 1,48,00,000',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=349',
  },
// 2017: Amritsar Central, AAP (haare). Pehchan pakki: S/o Pal Ram (2022 me "Pal Ram @ Pala Ram"); umr 56 (2022 umr 61 se ~5 saal); voter Amritsar Central Serial 742 Part 24; pesha "Practiceing Doctor & M.D. Of Sanjeevan Hospital Amritsar" (page as-is), patni Business; shiksha MBBS GNDU 1983 (2022 se match). Cross-year: page par Punjab 2022 link Rs 18,35,02,217 / 0 cases — foundation se match.

  'harmeet-singh-sandhu': {
  year: '2017',
  age: '47',
  education: 'Graduate — B.A., Guru Nanak Dev University Amritsar, 1990 (2022/2025 halafnama se; 2017 page nahi khula)',
  criminalCases: 0,
  assets: 'Rs 4,94,23,253',
  assetsNum: 49423253,
  liabilities: 'N/A',
  mynetaUrl: 'https://myneta.info/punjab2022/candidate.php?candidate_id=1391',
  },
// DATA-CONFIDENCE NOTE: 2017 me Tarn Taran se SAD ticket par lade the (haare — 45,165 vote; ECI detailed results: M 47). Pehchan pakki: S/o Surjit Singh; umr 2022 SAD page (52) se ~47; B.A. GNDU 1990 (2022 + 2025 dono halafnama me same). 2017 ke aankde unke khud ke Nov 2025 bypoll myneta page (candidate_id=1391, khola gaya) ke "Other Elections" table se: Punjab 2017 — Rs 4,94,23,253, 0 cases. Seedha punjab2017 page search me indexed nahi mila (compare_profile page par tabs JS me hain, link nahi nikla). RETRY LEAD: punjab2017 ki Tarn Taran constituency page se candidate_id nikalkar seedha page kholo; liabilities wahi se verify hogi.

// W2 VERIFIED-ABSENT: (2017 assembly me nahi lade — wajah sahit)
// 'ganieve-kaur-majithia': 2017 me Majitha se SAD ticket unke pati Bikram Singh Majithia ka tha (jeete — ECI/Wikipedia); unke 2022 myneta page (candidate_id=222, khola gaya) me "Other Elections" section nahi; punjab2017 me unke naam ka koi candidate page nahi.
// 'kunwar-vijay-pratap-singh': 2017 me Punjab Police me IG the (2021 me retired; 2022 halafnama me "Retired As Inspector General Of Police"); 2017 Amritsar North AAP candidate Manish Aggarwal tha (Wikipedia ECI-cited); unke 2022 page (candidate_id=449, khola gaya) me "Other Elections" nahi; punjab2017 me page nahi.
// 'dr-jasbir-singh-sandhu': 2017 Amritsar West AAP candidate Balwinder Singh Sahota tha (Wikipedia ECI-cited); unke 2022 page (candidate_id=654, khola gaya) me "Other Elections" nahi; punjab2017 me unke naam ka page nahi.
// 'jeevan-jyot-kaur': 2017 Amritsar East AAP candidate Sarabjot Singh Dhanjal tha (Wikipedia ECI-cited); unke 2022 page (candidate_id=256, khola gaya) me "Other Elections" nahi. Naam-jaal note: punjab2017 me "Dr. Jiwan Jot Kaur (IND)" Faridkot se hai — alag vyakti, alag seat — isliye entry nahi.
// 'jaswinder-singh-attari': NAAM-JAAL — 2017 Attari AAP candidate "Jaswinder Singh Jahangir" ECI me umr 39 darj hai; hamare MLA 2022 halafnama me umr 69 hain (S/o Ujagar Singh, Punjab Govt se retired, M.A. Political Science Lucknow 1984; 2022 page candidate_id=519 khola gaya, "Other Elections" nahi). ~30 saal ka umr-antar = alag vyakti; 2017 me hamare MLA nahi lade.
// 'sarvan-singh-dhun': 2017 Khem Karan AAP candidate Bikramajit Singh tha (Wikipedia ECI-cited); unke 2022 page (candidate_id=238, khola gaya) me "Other Elections" nahi; punjab2017 me page nahi.
// 'laljit-singh-bhullar': unke 2022 page (candidate_id=182, khola gaya) ke "Other Elections" me SIRF Lok Sabha 2024 hai (Rs 9,14,36,489, 2 cases) — Punjab 2017 nahi; 2017 Patti AAP candidate Ranjit Singh Cheema tha (Wikipedia ECI-cited).
// 'manjinder-singh-lalpura': unke 2022 page (candidate_id=636, khola gaya) ke "Other Elections" me SIRF Lok Sabha 2019 hai (Rs 44,11,000, 2 cases) — Punjab 2017 nahi; 2017 Khadoor Sahib AAP candidate Bhupinder Singh tha (Wikipedia ECI-cited).

  'dalbir-singh-tong': {
  year: '2017',
  age: '33',
  education: '12th Pass — 12th from Govt. Sen Sec. School, Khalchain, Punjab, 2002',
  criminalCases: 0,
  assets: 'Rs 17,62,077',
  assetsNum: 1762077,
  liabilities: 'Rs 2,68,408',
  mynetaUrl: 'https://myneta.info/Punjab2017/candidate.php?candidate_id=435',
  },
// 2017: AAP, Baba Bakala (SC) (Loser — Santokh Singh INC jeete; S/o Ram Singh; age 33). Cross-year: 2022 Rs 27,82,812/1 case. Pehchan: S/o + umr + shiksha (Khalchain/Khalchian, 2002) dono halafnamon me same.

  'sukhpal-singh-khaira': {
  year: '2017',
  age: '51',
  education: '12th Pass — B.A. (2nd Year), DAV College Chandigarh',
  criminalCases: 1,
  assets: 'Rs 66,82,32,582',
  assetsNum: 668232582,
  liabilities: 'Rs 2,16,00,000',
  mynetaUrl: 'https://myneta.info/Punjab2017/candidate.php?candidate_id=43',
  },
// 2017: AAP, Bholath (Winner; S/o Sukhjinder Singh; age 51). Cross-year: 2022 INC Rs 50,32,93,187/3 cases (party AAP->INC). Note: 2017 ka 1 case IPC 500 (defamation) declared.

  'rana-gurjeet-singh': {
  year: '2017',
  age: '64',
  education: '10th Pass — Matriculation, Dagshai Public School Dharmapur HP, ICSE Board, 1972',
  criminalCases: 0,
  assets: 'Rs 1,69,89,60,000',
  assetsNum: 1698960000,
  liabilities: 'Rs 81,71,22,000',
  mynetaUrl: 'https://myneta.info/Punjab2017/candidate.php?candidate_id=516',
  },
// 2017: INC, Kapurthala (Winner; S/o Rana Daljit Singh; age 64). Cross-year: 2022 Rs 1,25,64,36,000/1 case. Note: 2017 page par spelling "Rana Gurjit Singh".

  'balwinder-singh-dhaliwal': {
  year: '2019',
  age: '57',
  education: 'Post Graduate — Post Graduation in Geography, S.D. College Ludhiana, 1984',
  criminalCases: 0,
  assets: 'Rs 1,82,81,077',
  assetsNum: 18281077,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/Punjab2017/candidate.php?candidate_id=1431',
  },
// 2019: INC, Phagwara (SC) (Winner — 21 Oct 2019 upchunav; S/o Late Mukhtiar Singh; age 57). Feb 2017 aam chunav NAHI lade (2017 winner Som Prakash BJP) — isliye pichhla halafnama upchunav ka (punjab2017 folder, constituency_id=122). Cross-year: 2022 Rs 2,35,44,093/0 cases. Pehchan: umr 57->60 + shiksha (Geography, SD College Ludhiana, 1984) exact match.

  'vikramjit-singh-chaudhary': {
  year: '2017',
  age: '39',
  education: 'Graduate — B.A., Govt. College Jalandhar, 2003',
  criminalCases: 0,
  assets: 'Rs 1,14,71,329',
  assetsNum: 11471329,
  liabilities: 'Rs 2,70,000',
  mynetaUrl: 'https://myneta.info/Punjab2017/candidate.php?candidate_id=445',
  },
// 2017: INC, Phillaur (SC) (Loser — Baldev Singh SAD jeete; S/o Santosh Singh Chaudhary; age 39). Cross-year: 2022 Rs 7,98,07,230/0 cases (Winner).

  'hardev-singh-laddi': {
  year: '2017',
  age: '49',
  education: '10th Pass — 10th in 1984, Public School Shankot',
  criminalCases: 0,
  assets: 'Rs 18,07,77,984',
  assetsNum: 180777984,
  liabilities: 'Rs 7,13,00,000',
  mynetaUrl: 'https://myneta.info/Punjab2017/candidate.php?candidate_id=523',
  },
// 2017: INC, Shahkot (Loser — Ajit Singh Kohar SAD jeete; S/o Harjinder Singh; age 49). 2017 page par naam sirf "Hardev Singh" (2022 me "Hardev Singh Laddi"). Cross-year: 2022 Rs 17,09,52,285/0 cases (Winner).

  'mohinder-bhagat': {
  year: '2017',
  age: '59',
  education: '10th Pass — Matriculation, Sai Dass A.S. Senior Secondary School, Basti Nau, Jalandhar, 1973',
  criminalCases: 0,
  assets: 'Rs 4,58,11,331',
  assetsNum: 45811331,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/Punjab2017/candidate.php?candidate_id=530',
  },
// 2017: BJP, Jalandhar West (SC) (Loser — Sushil Kumar Rinku INC jeete; 2017 page par naam "Mahinder Pal", S/o Chuni Lal; age 59). Pehchan pakki: khud ke bypoll/2022 page (candidate_id=1318) ki Other Elections row me "Punjab 2017 — Rs 4,58,11,331" darj (wahi figure); S/o Chuni Lal dono halafnamon me; umr-timeline 59 (2017) -> 66 (2024); shiksha Matric 1973 same. 2022 me bhi isi seat se BJP se lade the; Jul 2024 upchunav AAP se jeete.

  'avtar-singh-junior': {
  year: '2017',
  age: '37',
  education: '12th Pass — 10+2 (P.S.E.B.)',
  criminalCases: 0,
  assets: 'Rs 23,43,56,643',
  assetsNum: 234356643,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/Punjab2017/candidate.php?candidate_id=542',
  },
// 2017: INC, Jalandhar North (Winner; S/o Avtar Henry; age 37). Cross-year: 2022 Rs 33,57,95,384/0 cases (Winner). Note: umr 37 (2017) vs 43 (2022) — 1-saal affidavit variance; S/o Avtar Henry definitive hai.

  'pargat-singh-powar': {
  year: '2017',
  age: '52',
  education: 'Graduate — B.A., Lyalpur Khalsa College Jalandhar (GNDU), 1986',
  criminalCases: 0,
  assets: 'Rs 2,38,79,591',
  assetsNum: 23879591,
  liabilities: 'Rs 49,36,596',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=543',
  },
// 2017: INC, Jalandhar Cantt. (Winner — 59,349 votes; Sarabjit Singh Makkar SAD runner-up, 29,124 maton se haraya; S/o S. Gurdev Singh Powar; age 52). Cross-year: 2022 Rs 3,16,27,794/0 cases (INC winner, doosri baar). Note: 2017 age 52 vs 2022 age 57 (exact 5-saal antar); liabilities education loan (SBI Patiala) + FDR loan (SBI).

  'jangi-lal-mahajan': {
  year: '2017',
  age: '69',
  education: '10th Pass — Matriculation, A.S. Senior Secondary School Mukerian (PSEB, Mohali), 1964',
  criminalCases: 0,
  assets: 'Rs 3,69,30,884',
  assetsNum: 36930884,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=1283',
  },
// 2017: IND (BJP se NAHI — Jan 2017 me BJP se nishkasit the), Mukerian (Loser — 3rd, 20,542 votes; Rajnish Kumar Babbi INC jeete, Arunesh Kumar BJP runner-up; S/o Om Parkash; age 69). Cross-year: 2022 Rs 3,58,64,777/0 cases (BJP winner). Pehchan pakki: S/o Om Parkash + Mukerian + businessman + 10th Pass (dono pages). NOTE: 2022 page ki do "Punjab 2017" rows me se Rs 2,81,63,065 wali asal me Oct-2019 Mukerian bypoll page (candidate_id=1426, age 72) hai — sahi 2017 general entry yehi (Rs 3,69,30,884).

  'jai-krishan': {
  year: '2017',
  age: '33',
  education: '12th Pass — 10+2, Govt. Sr. Sec. School Garhshankar, 2002',
  criminalCases: 0,
  assets: 'Rs 57,02,300',
  assetsNum: 5702300,
  liabilities: 'Rs 6,00,000',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=570',
  },
// 2017: AAP, Garhshankar (Winner — S/o Sh. Chain Singh; age 33; pesha photographer). Cross-year: 2022 Rs 1,76,01,265/4 cases (AAP winner, doosri baar). Note: 2017 age 33 vs 2022 age 39 (1-saal affidavit visangati); 2017 me 0 cases, 2022 me 4 (COVID-lockdown/virodh-pradarshan ke); liabilities Canara Bank limit Rs 6,00,000.

  'sukhwinder-kumar': {
  year: '2017',
  age: '56',
  education: 'Post Graduate — M.B.B.S., M.S., Dayanand Medical College and Hospital, Ludhiana',
  criminalCases: 0,
  assets: 'Rs 1,84,96,315',
  assetsNum: 18496315,
  liabilities: 'Rs 12,24,577',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=57',
  },
// 2017: SAD, Banga (SC) (Winner — 45,256 votes; Harjot Kaur AAP runner-up; S/o Ram Kishan; age 56). Cross-year: 2022 Rs 3,31,13,965/3 cases (SAD ticket par winner; Aug 2024 me AAP me). Note: 2017 age 56 vs 2022 age 61 (exact); 2017 me 0 cases, 2022 me 3; liabilities car loans + co-op bank (Sukhamani Hospital accounts).

  'jasvir-singh-raja-gill': {
  year: '2017',
  age: '47',
  education: '12th Pass — 12th, DAV College Hoshiarpur, 1989',
  criminalCases: 1,
  assets: 'Rs 2,46,44,571',
  assetsNum: 24644571,
  liabilities: 'N/A',
  mynetaUrl: 'https://myneta.info/Punjab2022/candidate.php?candidate_id=114',
  },
// 2017: AAP, Urmar (Loser — 3rd, 32,445 votes; Sangat Singh Gilzian INC jeete; S/o Mohinder Singh). Cross-year: 2022 Rs 2,22,19,678/2 cases (AAP winner). Pehchan pakki: ECI/Wikipedia/Tribune sab 2017 AAP Urmar ummidwar ke roop me naam dete hain; 2022 page (candidate_id=114) ke Other Elections me "Punjab 2017 | Rs 2,46,44,571 | 1 case" row. Age 47 derived (AAP Nov-2016 ghoshna me "47-year-old" + 2022 me 52); 2017 ka 1 case = FIR 87/2016 Hoshiarpur wala. NOTE: direct 2017 general page search index me nahi mila — liabilities uplabdh nahi (N/A). RETRY LEAD: direct punjab2017 page milne par age/education/liabilities cross-verify karein.

  'ravjot-singh': {
  year: '2017',
  age: '40',
  education: 'Post Graduate — M.D. Medicine, PGI Chandigarh, 2002',
  criminalCases: 0,
  assets: 'Rs 2,40,96,770',
  assetsNum: 24096770,
  liabilities: 'N/A',
  mynetaUrl: 'https://myneta.info/Punjab2022/candidate.php?candidate_id=137',
  },
// 2017: AAP, Sham Chaurasi (SC) (Loser — runner-up, 42,797 votes; Pawan Kumar Adia INC jeete, 3,815 maton se; S/o Gurnam Sinigh [sic, 2022 page]). Cross-year: 2022 Rs 6,15,09,330/1 case (AAP winner). Pehchan pakki: AAP ki Aug-2016 doosri suchi me "Sham Chaurasi (SC): Dr Ravjot Singh"; 2022 page (candidate_id=137) ke Other Elections me "Punjab 2017 | Rs 2,40,96,770 | 0 cases" row. Age 40 derived (2022: 45); 2017 me 0 cases, 2022 ka 1 case IPC 283 (Dasuya road-block) 2017 ke baad ka hai. NOTE: direct 2017 general page search index me nahi mila — liabilities uplabdh nahi (N/A). RETRY LEAD: direct punjab2017 page milne par age/education/liabilities cross-verify karein.

  'nachhatar-pal': {
  year: '2017',
  age: '42',
  education: '12th Pass — 10+2 & Diploma in Pharmacy',
  criminalCases: 0,
  assets: 'Rs 1,11,92,745',
  assetsNum: 11192745,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=153',
  },
// 2017: BSP, Nawan Shahr (ECI naam "Nawanshahr", AC 47) (Loser — 4th, 19,578 votes; Angad Singh INC jeete; S/o Sh. Amarnath; age 42; pesha chemist shop). Cross-year: 2022 Rs 1,24,20,711/0 cases (BSP winner — Punjab me BSP ki 25 saal baad pehli jeet). Note: 2017 age 42 vs 2022 age 47 (exact); 2022 me runner-up Lalit Mohan Ballu (AAP) the.

// W4 VERIFIED-ABSENT: 2017 me nahi lade — koi guess nahi; sab ECI 2017 candidate suchi / myneta cross-link se verified.
// - sukhwinder-singh-kotli (2017 Adampur ECI suchi me naam nahi — winner Pawan Kumar Tinu SAD; INC ummidwar Mohinder Singh Kaypee, AAP Hans Raj Rana the; iske 2022 page (candidate_id=274) ke Other Elections me sirf Lok Sabha 2014 + Punjab 2012 hain, koi Punjab 2017 row nahi).
// - karambir-singh (2017 Dasuya ECI suchi me naam nahi — winner Arun Dogra INC; AAP ummidwar Balbir Kaur thin; iske 2022 page (candidate_id=374) me Other Elections section hi nahi hai).
// - bram-shanker-jimpa (2017 Hoshiarpur ECI suchi me naam nahi — AAP ummidwar Paramjit Singh Sachdeva the; ye tab Congress me the (PPCC secretary 2007-17), Feb 2021 me Congress chhodkar ~2021 me AAP join ki (Indian Express, Mar 2022); 2022 pehla vidhansabha chunav tha. Task brief ka "2017 me Hoshiarpur se lade the" dawa galat nikla).
// - ishank-kumar-chabbewal (2017 Chabbewal ECI suchi me naam nahi — AAP ummidwar Raman Kumar the; 2017 me ye ~24 saal ke MBBS student the; pehla chunav Nov 2024 Chabbewal bypoll).
// - santosh-kumari-katariaa (2017 Balachaur ECI suchi me naam nahi — winner Chaudhary Darshan Lal INC; AAP ummidwar Brigadier Raj Kumar the. Naam-jaal note: 2007 me "Santosh Kumari" INC se Balachaur runner-up thin — 2017 me nahi ladin, isliye 2017 absence pakki).
// RETRY LEADS (direct 2017 general page search index me nahi — W6 manpreet-singh-ayali precedent par cross-link figures liye gaye; browser-capable agent se direct page khulne par liabilities + age/education bharein): jasvir-singh-raja-gill (2017 AAP Urmar, 3rd — 32,445 votes); ravjot-singh (2017 AAP Sham Chaurasi, runner-up — 42,797 votes).

  'harjot-singh-bains': {
  year: '2017',
  age: '26',
  education: 'Graduate Professional — B.A. LLB (Hons), Punjab University Regional Centre Ludhiana, 2014',
  criminalCases: 0,
  assets: 'Rs 16,95,403',
  assetsNum: 1695403,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=615',
  },
// 2017: AAP, Sahnewal (Loser — 39,570 votes, 3rd; Sharanjit Singh Dhillon SAD jeete; S/o Sohan Singh Bains; age 26; pesha advocate). Cross-year: 2022 Anandpur Sahib Rs 2,41,25,755/0 cases (Winner, age 31). Note: 2017 me seat Sahnewal thi, 2022 me Anandpur Sahib — party dono me AAP; shiksha me "Regional Centre Ludhiana" vs "Chandigarh" affidavit variation.

  'lakhbir-singh-rai': {
  year: '2017',
  age: '46',
  education: 'Graduate Professional — BA, Punjabi University, 1991; LLB, Punjabi University Patiala, 1994',
  criminalCases: 0,
  assets: 'Rs 7,77,23,489',
  assetsNum: 77723489,
  liabilities: 'Rs 52,00,593',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=598',
  },
// 2017: AAP, Fatehgarh Sahib (Loser — 29,393 votes, 3rd; Kuljit Singh Nagra INC jeete; S/o Rai Singh; age 46; Business & Agriculture). Cross-year: 2022 Rs 12,43,82,094/0 cases (Winner, age 51). Note: 2017 page par naam "Lakhvir Singh Rai" (spelling variation); S/o Rai Singh + cross-year match se pehchan pakki.

  'charanjit-singh': {
  year: '2017',
  age: '55',
  education: 'Post Graduate — M.S. (Ophthalmology), PGIMER Chandigarh, 1989',
  criminalCases: 0,
  assets: 'Rs 7,90,11,449',
  assetsNum: 79011449,
  liabilities: 'N/A',
  mynetaUrl: 'https://myneta.info/punjab2022/candidate.php?candidate_id=820',
  },
// 2017: AAP, Chamkaur Sahib (SC) (Loser — 48,752 votes, runner-up; Charanjit Singh Channi INC 61,060 se jeete; S/o Sardara Singh; age 55 ECI; netra-rog visheshagya). Cross-year: 2022 Rs 10,54,29,293/1 case (Winner, age 61). YE CHANNI NAHI — Dr. Charanjit Singh (S/o Sardara Singh; Channi S/o Harsa Singh); HT/Tribune/Rediff: 2017 me Channi se haare the. NOTE: direct punjab2017 page search index me nahi mila — figures khole gaye 2022 myneta page (candidate_id=820) ki cross-year row se (2017: Rs 7,90,11,449/0 cases); age ECI 2017 se, shiksha 2022 page se (wahi degree), DOB 17-01-1961 punjabassembly.gov.in se. RETRY LEAD: direct punjab2017 page milne par liabilities + canonical candidate_id bharein.

  'daljit-singh-grewal': {
  year: '2017',
  age: '50',
  education: '10th Pass — Matriculation, Khalsa National Higher Secondary School Ludhiana, March 1984',
  criminalCases: 2,
  assets: 'Rs 1,74,46,999',
  assetsNum: 17446999,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=619',
  },
// 2017: AAP, Ludhiana East (Loser — 41,429 votes, runner-up; Sanjeev Talwar INC se 1,581 maton se haare; S/o Balbir Singh; age 50; Businessman). Cross-year: 2022 Rs 1,35,29,204/3 cases (Winner, age 56); 2012 Rs 2,90,38,189/0 cases (IND). Note: 2017 page me age 50 vs 2022 me 56 (1-saal visangati; pehchan pakki). 2 mamle: FIR 180/23.06.2013 PS Basti Jodhewal + FIR 64/2014 PS Meharban (dono me charges framed).

  'madan-lal-bagga': {
  year: '2017',
  age: '59',
  education: '8th Pass — Under Matric',
  criminalCases: 0,
  assets: 'Rs 2,80,10,958',
  assetsNum: 28010958,
  liabilities: 'Rs 41,90,285',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=843',
  },
// 2017: IND, Ludhiana North (Loser — 4th, 12,136 votes; Rakesh Pandey INC jeete; S/o Ram Dhan; age 59). Cross-year: 2022 Rs 3,13,57,875/0 cases (AAP winner). Note: 2017 age 59 vs 2022 age 62 (2-saal affidavit visangati); naam + seat + S/o Ram Dhan + Other Elections cross-link se pehchan pakki.

  'jiwan-singh-sangowal': {
  year: '2017',
  age: '52',
  education: '10th Pass — Matric (PSEB), Govt. High School Ludhiana, 1982; Diploma in Type Writing, 1983',
  criminalCases: 0,
  assets: 'Rs 87,00,223',
  assetsNum: 8700223,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=194',
  },
// 2017: AAP, Gill (SC) (Loser — 59,286 votes, runner-up; Kuldeep Singh Vaid INC jeete; S/o Dalip Singh; age 52). Cross-year: 2022 Rs 95,97,285/0 cases (AAP winner). Note: 2017 age 52 vs 2022 age 58 (1-saal visangati); halafnama spelling "Jiwan Singh" (prachar me Sanghowal/Sangowal).

  'sarvjit-kaur-manuke': {
  year: '2017',
  age: '44',
  education: 'Post Graduate — M.A. Economics, Vinayaka Mission University, 2014',
  criminalCases: 0,
  assets: 'Rs 8,56,287',
  assetsNum: 856287,
  liabilities: 'Rs 2,80,000',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=654',
  },
// 2017: AAP, Jagraon (SC) (Winner — 61,521 votes; Malkit Singh Dakha INC runner-up; W/o Sukhwinder Singh; age 44). Cross-year: 2022 Rs 16,93,000/1 case (AAP winner, doosri baar). Liabilities: patni ke naam par Muthoot gold loan Rs 2,80,000. Halafnama spelling "Saravjit Kaur".

  'manjit-singh-bilaspur': {
  year: '2017',
  age: '40',
  education: 'Graduate — B.A., LLRM College Dhudike (Panjab University, Chandigarh)',
  criminalCases: 0,
  assets: 'Rs 7,59,779',
  assetsNum: 759779,
  liabilities: 'Rs 1,73,000',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=656',
  },
// 2017: AAP, Nihal Singhwala (SC) (Winner — 67,313 votes; Rajwinder Kaur INC runner-up; S/o Teja Singh; age 40). Cross-year: 2022 Rs 6,57,535/4 cases (AAP winner, doosri baar). Pehchan pakki: S/o Teja Singh (dono pages), PRS India par term start 16-Mar-17 (2017-22 MLA bhi yehi). Note: 2017 age 40 vs 2022 age 46 (1-saal visangati); liabilities car loan + gold loan.

  'manpreet-singh-ayali': {
  year: '2017',
  age: '42',
  education: '12th Pass — B.A. 1st Year, Govt. College (Punjab University), Ludhiana, 1993',
  criminalCases: 0,
  assets: 'Rs 16,54,31,545',
  assetsNum: 165431545,
  liabilities: 'N/A',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=1407',
  },
// 2017: SAD, Dakha (Loser — 54,754 votes, runner-up; H.S. Phoolka AAP jeete; S/o Late S. Gurcharanjit Singh; age 42 — ECI 2017 Dakha list M 42). Cross-year: 2022 Rs 29,71,29,907/2 cases (SAD winner). NOTE: direct 2017 general-election candidate page search index me nahi mila — figures usi ummidwar ke khole gaye Oct-2019 bypoll page (candidate_id=1407) ke "Other Elections -> Punjab 2017" row se (Rs 16,54,31,545/0 cases); age ECI 2017 list se (M 42), education sabhi pages me 12th Pass consistent; 2017 liabilities uplabdh nahi. RETRY LEAD: direct Punjab2017 general page milne par liabilities bharein.

// W6 VERIFIED-ABSENT: 2017 me nahi lade — koi guess nahi; sab ECI 2017 candidate suchi / alliance record se verified.
// - rajinder-pal-kaur-chhina (2017 Ludhiana South ECI suchi me naam nahi — winner Balvinder Singh Bains LIP; AAP-LIP gathbandhan me seat LIP ko gayi thi, AAP ne ummidwar nahi diya).
// - kulwant-singh-sidhu (2017 Atam Nagar ECI suchi me naam nahi — winner Simarjeet Singh Bains LIP; AAP ne ummidwar nahi diya (LIP alliance); ye Aug 2021 tak Congress (PCC secretary) me the).
// - ashok-parashar-pappi (2017 Ludhiana Central ECI suchi me naam nahi — winner Surinder Kumar Dawar INC; AAP-LIP gathbandhan me seat LIP ke Vipan Sood Kaka ko; ye 2012 me Ludhiana South se INC se lade the — pb2012 page).
// - sanjeev-arora (2017 me chunavi rajneeti me nahi the — Ludhiana ke textile businessman; Rajya Sabha MP Apr 2022–Jul 2025; pehla chunav Jun 2025 Ludhiana West bypoll; 2017 Ludhiana West AAP ummidwar Ahbaab Singh Grewal the).
// - manwinder-singh-giaspura (2017 Payal ECI suchi me naam nahi — AAP ummidwar Gurpreet Singh Lapran the; ye Mar 2021 me LIP chhod kar AAP me aaye; Lok Sabha 2019 Fatehgarh Sahib se lade the).
// - hakam-singh (2017 Raikot ECI suchi me naam nahi — AAP ummidwar Jagtar Singh Jagga Hissowal (winner) the; Tribune: 2012 aur 2017 dono me Congress ticket nahi mil paya tha).
// - amritpal-singh-sukhanand (2017 Bhagha Purana ECI suchi me naam nahi — AAP ummidwar Gurbinder Singh Kang the; 2017 me ye ~27 saal ke the, pehla chunav 2022).

  'hardeep-singh-dimpy-dhillon': {
    year: '2017',
    age: '49',
    education: 'Graduate',
    criminalCases: 0,
    assets: 'Rs 10,38,03,147',
    assetsNum: 103803147,
    liabilities: 'Rs 2,62,77,890',
    mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=4',
  },

// W7 VERIFIED-ABSENT (2017 me nahi lade / mukhya ummidwar nahi — isliye koi 2017 halafnama nahi):
// - amandeep-kaur-arora: 2017 me nahi ladi. Moga se AAP ke Ramesh Grover lade the
//   (INC ke Harjot Kamal Singh jeete). Unke 2022 myneta page par 'Other Elections'
//   table maujood nahi → pehla chunav 2022 (AAP ticket Jan 2022 me mili thi).
// - devinderjeet-singh: 2017 me nahi lade. Dharamkot se AAP ke Daljit Singh lade the
//   (INC ke Sukhjit Singh jeete). 2022 myneta page par 'Other Elections' nahi →
//   pehla chunav 2022 (S/o Kuldeep Singh).
// - naresh-kataria: 2017 me nahi lade. Zira se AAP ke Gurpreet Singh lade the
//   (INC ke Kulbir Singh Zira jeete). 'Other Elections' me sirf Punjab 2007 + 2012
//   darj hain (2007 me INC se Zira jeete the) — 2017 me koi namankan nahi.
// - ranbir-singh: 2017 me nahi lade. Firozpur City se AAP ke Narinder Singh lade the
//   (INC ke Parminder Singh Pinki jeete). Tribune ke mutabiq 2022 se pehle sirf Panjab
//   University Senate chunav lade (3 baar haare); pehla Vidhan Sabha chunav 2022.
// - rajneesh-kumar-dahiya: 2017 me nahi lade. Firozpur Rural se AAP ke Mohan Singh
//   Phallian Wala lade the (INC ki Satkar Kaur jeetin). 2022 me Ashu Banger ke party
//   chhodne par aakhri waqt me AAP ticket mila; 2022 page par 'Other Elections' nahi.
// - fauja-singh: 2017 me nahi lade. Guru Har Sahai se AAP ke Malkit Chand lade the
//   (INC ke Gurmit Sodhi jeete). 2022 page par 'Other Elections' nahi → pehla chunav
//   2022 (S/o Kartar Singh).
// - jagdeep-kamboj-goldy: 2017 aam chunav me nahi lade. Jalalabad se AAP ke Bhagwant
//   Mann lade the (SAD ke Sukhbir Singh Badal jeete). Unka 'Punjab 2017' wala myneta
//   record darasal 21-10-2019 ka Jalalabad upchunav hai — Independent (S/o Surinder
//   Kamboj, umr 35; punjab2017/candidate_id=1420).
// - narinder-pal-singh-sawna: 2017 me nahi lade. Fazilka se AAP ke Samarbir Singh
//   Sidhu lade the (INC ke Davinder Singh Ghubaya jeete). 2022 page par 'Other
//   Elections' nahi → pehla chunav 2022 (S/o Khajan Singh).
// - sandeep-jakhar: 2017 me nahi lade. Abohar se INC ke Sunil Kumar Jakhar (inke
//   chacha) lade the, AAP se Atul Nagpal; BJP ke Arun Narang jeete. 2022 page par
//   'Other Elections' nahi → pehla chunav 2022 (S/o Surinder Jakhar).
// - amandeep-singh-goldy-musafir: 2017 me nahi lade. Balluana (SC) se AAP ke
//   Simarjeet Singh lade the (INC ke Nathu Ram jeete). 2022 page par 'Other Elections'
//   nahi → pehla chunav 2022 (S/o Gurchanran Singh Musaafir).
// - gurmeet-singh-khudian: 2017 me mukhya ummidwar nahi the. Lambi me Capt. Amarinder
//   Singh (INC) ke covering candidate the (The Statesman, June 2023); unke 2022 page
//   ke 'Other Elections' me 2017 darj nahi (sirf Lok Sabha 2024). July 2021 me INC
//   chhod AAP me aaye, 2022 me Lambi jeete.

  'jagdeep-singh-kaka-brar': {
  year: '2017',
  age: '52',
  education: '8th Pass — Under Matric',
  criminalCases: 0,
  assets: 'Rs 8,70,88,218',
  assetsNum: 87088218,
  liabilities: 'Rs 70,40,269',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=701',
  },
// 2017: AAP, Muktsar (Loser — 3rd, 33,201 vote; vijeta Kanwarjit Singh SAD; S/o S. Gurubaj Singh, age 52; pesha: kheti). Cross-year: 2022 Rs 13,10,30,458/0 cases (age 55); Lok Sabha 2024 (Ferozepur, AAP) Rs 14,07,55,155/0 cases. Note: 2017 age 52 vs 2022 age 55 (2-saal visangati; naam/seat/party/S-o/shiksha + 2022 cross-link se pehchan pakki).

  'gurdit-singh-sekhon': {
  year: '2017',
  age: '45',
  education: '10th Pass — 10th + 1, Govt. High School, Kotkapura (PSEB Mohali)',
  criminalCases: 0,
  assets: 'Rs 2,73,70,549',
  assetsNum: 27370549,
  liabilities: 'Rs 17,00,000',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=227',
  },
// 2017: AAP, Faridkot (Loser — runner-up, 39,367 vote; vijeta Kusaldeep Singh Dhillon INC, margin 11,659; S/o Angrej Singh, age 45; pesha: retired sarkari karmchari). Cross-year: 2022 Rs 1,99,45,446/2 cases (age 50). Note: 2017 me koi aapradhik mamla nahi (2022 me 2 — IPC 171H jurmana + IPC 188 lambit); assets 2017->2022 ghate (Rs 2.74cr -> Rs 1.99cr).

  'kultar-singh-sandhwan': {
  year: '2017',
  age: '41',
  education: 'Graduate Professional — B.E. (Automobile), Guru Nanak Dev Engineering College, Bidar (Gulbarga University), 1997',
  criminalCases: 0,
  assets: 'Rs 74,59,124',
  assetsNum: 7459124,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=230',
  },
// 2017: AAP, Kotkapura (Winner — 47,401 vote, margin 10,075; S/o Jagtar Singh, age 41; pesha: kisan). Cross-year: 2022 Rs 44,12,528/4 cases (age 46). Note: 2017 page par naam "KULTAR SINGH" (Sandhwan 2022 me); S/o + seat + party + umr se pehchan pakki. Assets 2017->2022 ghate (Rs 74.59L -> Rs 44.13L).

  'jagsir-singh': {
  year: '2017',
  age: '59',
  education: '10th Pass — Matric (Govt. High School, Chak Ram Singh Wala, 1975) + JBT (Govt. JBT School, Poohla, 1977)',
  criminalCases: 0,
  assets: 'Rs 53,34,050',
  assetsNum: 5334050,
  liabilities: 'Rs 8,49,815',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=240',
  },
// 2017: AAP, Bhucho Mandi (SC) (Loser — vijeta Pritam Singh Kotbhai INC, margin 645; S/o Bachan Singh, age 59; pesha: retired teacher). Cross-year: 2022 Rs 55,58,075/1 case (age 64). Note: 2017 page par "No criminal cases" (2022 me IPC 188 ka 1 lambit case); liabilities page par Rs 8,49,814.85 darj (round karke Rs 8,49,815).

  'amit-rattan': {
  year: '2017',
  age: '37',
  education: 'Graduate Professional — B.Tech (Mechanical), Baba Banda Singh Bahadur Engineering College, Fatehgarh Sahib, 2003',
  criminalCases: 0,
  assets: 'Rs 2,09,36,836',
  assetsNum: 20936836,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=372',
  },
// 2017: SAD, Bathinda Rural (SC) (Loser — runner-up, 40,794 vote; vijeta Rupinder Kaur Ruby AAP, margin 10,778; S/o Babu Singh Rattan, age 37; "Er. Amit Rattan Kotfatta", pesha: businessman). Cross-year: 2022 Rs 2,71,81,185/1 case (age 42). Note: 2017->2022 party change SAD->AAP; umr 37 vs 42 bilkul sahi (5-saal antar); 2017 me koi case nahi (2022 me IPC 341/431/283 ka 1 case).

  'baljinder-kaur': {
  year: '2017',
  age: '31',
  education: 'Post Graduate — M.Phil (English), Punjabi University Patiala, 2009',
  criminalCases: 1,
  assets: 'Rs 3,65,786',
  assetsNum: 365786,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=243',
  },
// 2017: AAP, Talwandi Sabo (Winner — 54,553 vote, margin 19,293; runner-up Khushbaz Singh Jatana INC; D/o Darshan Singh, age 31; pesha: lecturer/social work). Cross-year: 2022 Rs 1,11,71,086/3 cases (age 37). Note: 2017 age 31 vs 2022 age 37 (1-saal visangati; D-o + seat + party + 2022/2013 cross-link se pehchan pakki). 2014 bye-election me bhi ladin (Rs 74,100/0 cases). 2017 me IPC 147/149/283/342/186/353 ka 1 case.

// W8 VERIFIED-ABSENT:
// - baljit-kaur (2017 me nahi ladin — 2022 debut, first-time MLA; Nov 2021 me Muktsar Civil Hospital se istifa ke baad AAP join; unke Punjab2022 page (candidate_id=218) par koi Punjab 2017 cross-link nahi; 2017 me Malout se AAP ummidwar Baldev Singh Azad the, vijeta Ajaib Singh Bhatti INC).
// - amolak-singh (2017 me nahi lade — 2022 debut, first-time MLA; pita Sukhmander Singh ke nidhan ke baad rajniti me aaye; 2017 me umr ~25, B.Tech 2020 me poora hua; 2017 me Jaitu ke 12 ummidwaron me naam nahi — AAP ummidwar Baldev Singh the jo jeete).
// - balkar-singh-sidhu (2017 me nahi lade — unke Punjab2022 page (candidate_id=159) ki Other Elections me sirf Punjab Bye Election 2013 ka row hai, 2017 ka nahi; 2017 me Rampura Phul se AAP ummidwar Manjit Singh Sidhu the, vijeta Gurpreet Singh Kangar INC. NOTE: task brief ka "2017 me Rampura Phul se lade the" galat nikla — ve 2014 me Talwandi Sabo bye ke liye AAP ticket se hate, Feb 2016 me Congress join ki, May 2021 me AAP me wapasi hui.)
// - jagroop-singh-gill (2017 me vidhansabha nahi lade — 2017 me Congress MC councillor the (6-time), 2022 me AAP se Bathinda Urban debut; unke Punjab2022 page (candidate_id=249) par koi Punjab 2017 cross-link nahi; 2017 me Bathinda Urban se AAP ummidwar Deepak Bansal the, vijeta Manpreet Singh Badal INC).
// - sukhveer-singh-maiserkhana (2017 me nahi lade — 2022 debut, first-time MLA; 2017 me umr ~29; unke Punjab2022 page (candidate_id=215) par koi Punjab 2017 cross-link nahi; 2017 me Maur se AAP ummidwar Jagdev Singh the jo jeete).
// - vijay-singla (2017 me nahi lade — 2016 me AAP join (trade wing joint secretary), 2022 debut, first-time legislator; unke Punjab2022 page (candidate_id=217) par koi Punjab 2017 cross-link nahi; 2017 me Mansa se AAP ummidwar Nazar Singh Manshahia the jo jeete).

  'budh-ram': {
  year: '2017',
  age: '60',
  education: 'Post Graduate — M.A. (Punjabi, Pol. Sci., Economics, Religion), B.Ed., M.Ed.',
  criminalCases: 0,
  assets: 'Rs 87,74,953',
  assetsNum: 8774953,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=64',
  },
// 2017: AAP, Budhlada (SC) (Winner; S/o Sh. Bhag Singh; age 60; pesha Pensioner). Cross-year: 2022 Rs 1,13,48,892/1 case (age 65). Pehchan: S/o Bhag Singh + umr 60 (=65-5) + seat/party + cross-year row se pakki.

  'harpal-singh-cheema': {
  year: '2017',
  age: '42',
  education: 'Graduate Professional — B.A. LLB',
  criminalCases: 0,
  assets: 'Rs 66,17,000',
  assetsNum: 6617000,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=749',
  },
// 2017: AAP, Dirba (SC) (Winner; S/o Mehar Singh; age 42; pesha Advocate). Cross-year: 2022 Rs 1,16,07,794/1 case (age 47). Note: 2017 page par halafnama-naam "Harpal Singh" hai — wahi vyakti (S/o Mehar Singh + umr + cross-year).

  'aman-arora': {
  year: '2017',
  age: '42',
  education: 'Graduate — B.A., D.A.V. College, Chandigarh (Punjab University), 1996',
  criminalCases: 1,
  assets: 'Rs 65,88,61,000',
  assetsNum: 658861000,
  liabilities: 'Rs 15,48,84,000',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=754',
  },
// 2017: AAP, Sunam (Winner — 72,815 vote; INC ki Daman Thind Bajwa ko 30,307 maton se haraya; S/o Late Bhagwan Das Arora; age 42). Cross-year: 2022 Rs 95,12,92,000/3 cases (age 47). Party 2017->2022: AAP hi (2016 me INC se AAP me aaye the). NOTE: 2017 page ka header extraction toota hua mila — figures kholi gayi myneta 2017 winners-list row + ADR Sitting-MLAs 2017 PDF (movable 16,68,99,000 + immovable 49,19,62,000) se cross-verified; umr 42 (punjabdata 2017 list + NDTV Nov 2016).

  'kulwant-singh-pandori': {
  year: '2017',
  age: '43',
  education: '12th Pass — PSEB Govt. Sen. Sec. School, Mehal Kalan, 1994',
  criminalCases: 0,
  assets: 'Rs 2,70,448',
  assetsNum: 270448,
  liabilities: 'Rs 26,287',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=265',
  },
// 2017: AAP, Mehal Kalan (SC) (Winner; S/o Kaka Singh; age 43; pesha Press Reporter). Cross-year: 2022 Rs 17,02,406/2 cases (age 49). Note: shiksha 2017 me 12th Pass vs 2022 me Graduate (BA, Lovely University, 2017) — 2017-22 ke beech degree.

  'jaswant-singh-gajjanmajra': {
  year: '2017',
  age: '54',
  education: 'Post Graduate — M.A., M.Phil., Punjabi University, Patiala',
  criminalCases: 0,
  assets: 'Rs 20,41,82,531',
  assetsNum: 204182531,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=269',
  },
// 2017: Lok Insaaf Party, Amargarh (Loser — INC ke Surjit Singh Dhiman jeete, 50,994 vote; S/o Gurmukh Singh; age 54; pesha Teaching, patni bhi teacher). Cross-year: 2022 AAP Rs 19,15,34,259/0 cases (age 59). Party change 2017->2022: LIP->AAP (Aug 2020 me AAP join; 2017 me LIP-AAP gathbandhan tha). Note: 2017 page par halafnama-naam "Jaswant Singh" — S/o Gurmukh Singh + umr + shiksha/pesha + Gajjan Majra zameen se wahi vyakti.

  'bhagwant-mann': {
  year: '2017',
  age: '43',
  education: '12th Pass — B.Com (1st year), Shaheed Udham Singh Govt. College, Sunam, 1992',
  criminalCases: 0,
  assets: 'Rs 1,99,10,779',
  assetsNum: 19910779,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=677',
  },
// 2017: AAP, Jalalabad (Loser — Sukhbir Singh Badal SAD jeete, Mann ~18,500 maton se haare; S/o Late S. Mahinder Singh; age 43; pesha Artist). Cross-year: Punjab 2022 Rs 1,97,10,174/1 case (age 48); Lok Sabha 2019 Rs 1,64,27,274; LS 2014 Rs 4,30,57,512; Punjab 2012 Rs 1,55,61,818. NOTE: task-brief ka "S/o Harnek Singh" halafname se match nahi hota — 2017 + 2022 dono halafname me pita Mahinder Singh darj hai; pehchan cross-year linkage se pakki.

// W9 VERIFIED-ABSENT:
// - gurpreet-singh-banawali (2017 Sardulgarh nahi lade — 2022 debut; Tribune: "First-timer Gurpreet Singh Banawali (44)"; 2017 me Sardulgarh se AAP ke Sukhwinder Singh (Bhola Mann) lade the, 38,102 vote/3rd)
// - barinder-kumar-goyal (2017 Lehra nahi lade — 1992 me lade-haare, 2022 me wapasi jeet (Wikipedia); 2017 me Lehra se AAP ke Jasvir Singh lade the)
// - labh-singh-ugoke (2022 me pehli baar chunav lade — Hindustan Times: "contested the assembly polls for the first time", sitting CM Channi ko Bhadaur se haraya; 2017 me Bhadaur se AAP ke Pirmal Singh Dhaula lade aur jeete the)
// - kuldeep-singh-dhillon (2017 bhi nahi, 2022 aam chunav bhi nahi lade — 2017 me AAP ke Barnala jila adhyaksh the, Gurmeet Singh Meet Hayer ke liye prachar kiya (Indian Express); 2022 Barnala me INC ummidwar Manish Bansal the (16,853 vote, 3rd); unka ekmatra myneta halafnama Nov 2024 bypoll ka hai jo foundation me current record ke roop me pehle se darj hai. NOTE: task-premise "2022 aam chunav me haare the" tathyon se galat hai — isliye year:'2022' entry nahi banayi, warna saal galat label hota)
// - mohammad-jamil-ur-rehman (2017 Malerkotla nahi lade — 2017 me AAP ummidwar Mohamad Arshad (Arshad Dali, TV actor) the; Jamil ne 2012 me BSP se (pb2012 id=487) aur 2022 me AAP se lada)
// - narinder-kaur-bharaj (2022 debut, umr 27; LLB 2021 me poori — 2017 me ~22 saal ki chhatra thin; 2017 me Sangrur se AAP ke Dinesh Bansal lade the)

  'gurdev-singh-dev-maan': {
  year: '2017',
  age: '47',
  education: '12th Pass — PSEB Mohali, Chandigarh',
  criminalCases: 0,
  assets: 'Rs 13,34,000',
  assetsNum: 1334000,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=780',
  },
// 2017: AAP, Nabha (SC) (Loser — 41,866 votes, runner-up; vijeta Sadhu Singh INC 60,861; S/o Lal Singh; age 47; pesha Singing; voter 114-Sanour). Cross-year: 2022 Rs 53,58,709/1 case (Winner); Punjab 2012 Rs 31,15,000/0 cases bhi page par darj.

  'balbir-singh': {
  year: '2017',
  age: '60',
  education: 'Post Graduate — MBBS (Nov 1979), DOMS (Jan 1983), MS (Dec 1983), Punjab University Chandigarh',
  criminalCases: 2,
  assets: 'Rs 8,16,32,392',
  assetsNum: 81632392,
  liabilities: 'Rs 23,07,743.50',
  mynetaUrl: 'https://myneta.info/punjab2017/candidate.php?candidate_id=796',
  },
// 2017: AAP, PATIALA (Urban) (Loser — 20,179 votes; Capt Amarinder Singh INC 72,586 jeete; S/o Piara Singh; age 60; retired Associate Professor, Eye Surgeon Patiala). Cases: FIR 10/2011 PS Chamkaur Sahib (IPC 406, 420, 120B; charges framed 2014) + FIR 85/2011 (IPC 323, 324, 506, 148, 149; cognizance). Cross-year: 2022 Rs 8,17,66,646/2 cases (Winner, Patiala Rural); Lok Sabha 2024 Rs 7,37,80,780/2.
// W10 VERIFIED-ABSENT:
// - neena-mittal: 2017 me Rajpura se AAP ne Ashutosh Joshi ko ticket diya tha (runner-up 26,542; vijeta Hardial Singh Kamboj INC 59,107). Neena ke 2022 myneta page (id 164) ke "Other Elections" table me sirf Lok Sabha 2019 hai — Punjab 2017 row nahi. 2017 vidhansabha nahi ladin.
// - kuljit-singh-randhawa: 2017 me Dera Bassi se AAP ki Sarabjit Kaur ladi thin (33,150). Randhawa tab Congress me the (lagbhag 30 saal; HT Oct 2021 ke mutabik AAP me ~2019 me aaye — 2017 me Congressi the). Unke 2022 page (id 391) par koi "Other Elections" 2017 row nahi. 2017 vidhansabha nahi lade.
// - gurlal-ghanaur: 2022 debutant the — Tribune: "AAP's debutant candidate and Kabaddi player"; IE: "This was his first assembly election". Jun 2021 me AAP me aaye (poorv international kabaddi khiladi, Punjab Police me ASI). Unke 2022 page (id 548) par "Other Elections" table hi nahi. 2017 me nahi lade.
// - harmit-singh-pathanmajra: 2017 me Sanour se AAP ne Kuldeep Kaur Tohra ko ticket diya tha (vijeta Harinder Pal Singh Chandumajra SAD). Unke 2022 page (id 1213) par koi "Other Elections" row nahi; 2017 me kahin aur ladne ka koi record nahi mila. 2017 vidhansabha nahi lade.
// - ajit-pal-singh-kohli: Tribune (Mar 2022): "will make his debut in the Vidhan Sabha" — 2022 pehla chunav tha. 2011 me SAD-BJP shasan me Patiala ke Mayor the; chunav se ek mahina pehle SAD chhodkar AAP me aaye (2017 me SAD me the; 2017 Patiala se SAD ke Joginder Jaswant Singh lade the). Unke 2022 page (id 693) par "Other Elections" row nahi.
// - chetan-singh-jouramajra: IE: "This was his first election he contested" (2022). 2017 me Samana se AAP ke Jagtar Singh Rajla lade the. 2017 vidhansabha nahi lade. (Unka 2022 myneta page search se nahi mila tha — foundation me bhi PENDING darj hai.)
// - kulwant-singh-bazigar: IE: "This was his first election" (2022); Tribune: "got the AAP ticket for the first time". 2017 me Shutrana se AAP ki Palwinder Kaur ladi thin. Unke 2022 page (id 134) par "Other Elections" row nahi. 2017 me nahi lade.

};

// VERIFIED-ABSENT (66 — 2017 me Vidhan Sabha chunav nahi lade; pehla chunav 2022 ya upchunav):
// - partap-singh-bajwa: 2017 me nahi lade; 2016-22 Rajya Sabha MP the (Qadian 2017 me bhai Fatehjang Singh Bajwa lade).
// - amansher-singh-shery-kalsi: pehla chunav 2022 (Batala; 2017 me AAP se Gurpreet Ghuggi).
// - gurdeep-singh-randhawa: pehla chunav Nov 2024 bypoll (Dera Baba Nanak).
// - kuldeep-singh-dhaliwal: pehla Vidhan Sabha chunav 2022 (2019 me Amritsar se Lok Sabha).
// - ganieve-kaur-majithia: 2017 Majitha ticket pati Bikram Singh Majithia ka tha.
// - kunwar-vijay-pratap-singh: 2017 me Punjab Police me IG the (2021 retired).
// - dr-jasbir-singh-sandhu: 2017 Amritsar West AAP = Balwinder Singh Sahota.
// - jeevan-jyot-kaur: 2017 Amritsar East AAP = Sarabjot Singh Dhanjal; Faridkot ki "Jiwan Jot Kaur" alag vyakti.
// - jaswinder-singh-attari: naam-jaal — 2017 AAP candidate "Jaswinder Singh Jahangir" (umr 39) hamare MLA (umr 69) se alag.
// - sarvan-singh-dhun: 2017 Khem Karan AAP = Bikramajit Singh.
// - laljit-singh-bhullar: 2022 page ke cross-links me sirf LS 2024; 2017 Patti AAP = Ranjit Singh Cheema.
// - manjinder-singh-lalpura: cross-links me sirf LS 2019; 2017 Khadoor Sahib AAP = Bhupinder Singh.
// - rana-inder-partap-singh: pehla chunav 2022 (IND; 2017 me AAP ne Sultanpur Lodhi se ummidwar nahi utaraya).
// - inderjit-kaur-mann: naam-jaal — 2017 Nakodar ki "Inderjit Kaur" (BSP, Illiterate, Rs 10,500) 2022 wali (Graduate, ex-sarpanch) se match nahi.
// - balkar-singh: 2017 me Punjab Police me DCP the.
// - raman-arora: 2022 debut (chunav se kuch mahine pehle AAP join).
// - sukhwinder-singh-kotli, karambir-singh: 2017 ECI suchi me naam nahi.
// - bram-shanker-jimpa: 2017 me Congress me the (PPCC secretary), pehla VS chunav 2022.
// - ishank-kumar-chabbewal: 2017 me ~24 saal, MBBS student.
// - santosh-kumari-katariaa: 2017 Balachaur ECI suchi me nahi.
// - dinesh-kumar-chadha: 2017 Rupnagar AAP = Amarjit Singh Sandoa (vijeta).
// - anmol-gagan-maan: 2022 debut (Jul 2020 me AAP join).
// - kulwant-singh-sas-nagar: cross-links me sirf LS 2014; 2017 SAS Nagar suchi me nahi.
// - rupinder-singh: first-time MLA 2022.
// - gurinder-singh: 2017 Amloh AAP = Gurpreet Singh Bhatti.
// - tarunpreet-singh-sond: 2022 maiden election (2017 Khanna AAP = Anil Dutt Phally).
// - jagtar-singh, hardeep-singh-mundian: first-time MLA 2022 (ECI 2017 suchi me nahi).
// - rajinder-pal-kaur-chhina, kulwant-singh-sidhu: 2017 me Ludhiana South/Atam Nagar seats AAP-LIP gathbandhan me LIP ko.
// - ashok-parashar-pappi: 2017 Ludhiana Central seat LIP ko; 2012 me INC se Ludhiana South lade the.
// - sanjeev-arora: 2017 me businessman; pehla chunav Jun 2025 bypoll.
// - manwinder-singh-giaspura: 2017 Payal AAP = Gurpreet Singh Lapran (Mar 2021 me LIP chhod AAP aaye).
// - hakam-singh: 2017 Raikot suchi me nahi (2012/2017 dono me Congress ticket nahi mila).
// - amritpal-singh-sukhanand: 2017 Bhagha Purana suchi me nahi (AAP = Gurbinder Singh Kang); Khadoor Sahib MP ka record nahi joda.
// - amandeep-kaur-arora, devinderjeet-singh, naresh-kataria, ranbir-singh, rajneesh-kumar-dahiya, fauja-singh, narinder-pal-singh-sawna, amandeep-singh-goldy-musafir: pehla chunav 2022.
// - sandeep-jakhar: pehla chunav 2022 (2017 me chacha Sunil Kumar Jakhar lade).
// - jagdeep-kamboj-goldy: 2017 me nahi lade (record 21-10-2019 upchunav ka hai); 2017 Jalalabad AAP = Bhagwant Mann.
// - gurmeet-singh-khudian: 2017 me Lambi me Capt. Amarinder Singh ke covering candidate the (main ummidwar nahi).
// - baljit-kaur: 2022 debut (Nov 2021 me istifa ke baad AAP join).
// - amolak-singh: 2022 debut (2017 me umr ~25).
// - balkar-singh-sidhu: cross-links me sirf 2013 bypoll; 2017 Rampura Phul AAP = Manjit Singh Sidhu.
// - jagroop-singh-gill: 2017 me Congress MC councillor; AAP debut 2022.
// - sukhveer-singh-maiserkhana: 2022 debut (2017 me ~29).
// - vijay-singla: 2022 debut (2016 me AAP join; 2017 Mansa AAP = Nazar Singh Manshahia).
// - gurpreet-singh-banawali: 2022 debut (2017 Sardulgarh AAP = Sukhwinder Singh).
// - barinder-kumar-goyal: 1992 ke baad 2022 me wapasi (2017 Lehra AAP = Jasvir Singh).
// - labh-singh-ugoke: pehli baar 2022 me lade (2017 Bhadaur AAP = Pirmal Singh Dhaula).
// - kuldeep-singh-dhillon: ekmatra halafnama Nov 2024 Barnala bypoll ka hai (2022/2017 me nahi lade).
// - mohammad-jamil-ur-rehman: 2017 Malerkotla AAP = Mohamad Arshad (Arshad Dali); Jamil ne 2012 (BSP) aur 2022 lada.
// - narinder-kaur-bharaj: 2022 debut (umr 27; 2017 Sangrur AAP = Dinesh Bansal).
// - neena-mittal: 2022 page par "Punjab 2017" row nahi (Other Elections me sirf LS 2019).
// - kuljit-singh-randhawa: tab Congress me the (~30 saal; AAP me ~2019 aaye); 2017 Dera Bassi AAP = Sarabjit Kaur.
// - gurlal-ghanaur: 2022 debut (Jun 2021 me AAP aaye).
// - harmit-singh-pathanmajra: 2017 Sanour AAP = Kuldeep Kaur Tohra.
// - ajit-pal-singh-kohli: 2022 debut ("will make his debut in the Vidhan Sabha"); 2017 me SAD me the.
// - chetan-singh-jouramajra: pehla chunav 2022 (IE-confirmed; 2017 Samana AAP = Jagtar Singh Rajla).
// - kulwant-singh-bazigar: pehla chunav 2022 (2017 Shutrana AAP = Palwinder Kaur).
// RETRY-LEADS (page seedha nahi khula — browser-capable agent se verify):
// - inderbir-singh-nijjar: 2017 Amritsar South AAP se lade (haare, 24,923 vote) — assets/liabilities/cases unknown (entry nahi banayi).
// - harmeet-singh-sandhu: liabilities N/A (2017 SAD Tarn Taran; cross-year se assets Rs 4,94,23,253/0 cases verified).
// - jasvir-singh-raja-gill, ravjot-singh: cross-year row se figures; direct punjab2017 page + liabilities verify karo.
// - manpreet-singh-ayali: liabilities N/A (direct 2017 page index me nahi; bypoll page ke cross-year row se).
// - charanjit-singh (Chamkaur Sahib, Channi NAHI): liabilities N/A (direct 2017 page nahi; cross-year row se).


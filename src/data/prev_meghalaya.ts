// Meghalaya — 2018 vs 2023 affidavit comparison (wartaman 60 MLAs).
// Coverage: 46 of 60 sitting MLAs (77%) ke verified myneta.info/meghalaya2018 (lowercase folder)
// affidavit records. Har covered candidate page khola aur padha gaya; pehchan naam + 2018
// seat + MyNeta "Other Elections" cross-year linkage se pakki ki gayi (winner/loser dono
// shamil — affidavit hi tulna ka aadhaar hai). Sangma/Marak/Lyngdoh namesakes se bachne ke
// liye S/o + seat + party cross-check kiye gaye.
// 2018 me seat ya party change (2018 -> 2023): renikton-lyngdoh-tongkhar HSPDP->UDP
// (seat same Mawkyrwat); paul-lyngdoh UDP->UDP (2018 haare, 2023 jeete); adelbert-nongrum
// KHNAM->VPP; ronnie-v-lyngdoh INC->VPP (2018 haare, 2023 jeete); ardent-miller-basaiawmoit
// HSPDP->VPP (2018 haare, 2023 jeete); gavin-miguel-mylliem PDF->NPP; banteidor-lyngdoh
// PDF->NPP; marthon-j-sangma INC->NPP; charles-pyngrope INC->AITC->UDP-BJP (2023 record
// me jo party hai wahi); dr-mazel-ampareen-lyngdoh INC->NPP; lahkmen-rymbui UDP->NPP;
// kyrmen-shylla UDP->NPP; dr-mizanur-rahman-kazi NPP->AITC; rupert-momin NPP->NPP (seat
// same Kharkutta); limison-d-sangma INC->NPP; jimmy-d-sangma INC->NPP; abu-taher-mondal
// INC->NPP; metbah-lyngdoh UDP->UDP (seat same Mairang); charles-marngar INC->INC
// (2018 haare, 2023 jeete).
// Khaas 2018-record notes: conrad-kongkal-sangma ka 2018 record Aug 2018 South Tura
// bypoll ka hai (Feb 2018 me seat Agatha K. Sangma jeeti thi); miani-d-shira ka May 2018
// Ampati bypoll ka (Feb 2018 me seat unke pita Dr. Mukul Sangma jeete the);
// dr-mukul-sangma 2018 me Songsak + Ampati DONO se lade aur dono jeete (tulna me Songsak
// record liya gaya); marcuise-n-marak ka 2018 Williamnagar chunav May 2018 adjourned poll
// me hua tha (NCP candidate ki hatya ke baad); pius-marwein ka 2018 record Feb general
// election ka (runner-up), Aug 2018 bypoll alag jeete the; rakkam-a-sangma 2018 me
// Rongara Siju se jeete (Rongjeng nahi); sengchim-n-sangma 2018 me ticket hi nahi tha
// (NPP Chokpot ticket Secondson A. Sangma ko mila tha — namesake trap se bache).
// Criminal cases 2018->2023: notable badlav — dr-mazel-ampareen-lyngdoh 0->1,
// sanjay-a-sangma 0->1, thomas-a-sangma 0->1, marcuise-n-marak 1->0 (2018 me IPC 124A
// sedition + 506 ka mamla darj tha, cognizance li gayi thi; 2023 record me 0).
// Asset rises 2018->2023 (sabse bade): charles-marngar Rs 7.99L->Rs 2.84cr (~35x),
// pongseng-marak Rs 2.99L->Rs 71.27L (~24x), rakkam-a-sangma Rs 10.71L->Rs 1.71cr (~16x),
// ian-botham-k-sangma Rs 6.96L->Rs 93.18L (~13x), jim-m-sangma Rs 18L->Rs 1.42cr (~8x),
// sniawbhalang-dhar Rs 6.41cr->Rs 45.35cr (~7x).
// Asset falls: ollan-singh-suin Rs 1.83cr->Rs 61.37L, ronnie-v-lyngdoh Rs 1.11cr->Rs 52.21L,
// limison-d-sangma Rs 2.61cr->Rs 1.71cr.
// 14 without a 2018 Vidhan Sabha record (all verified absent from 2018 candidate lists):
// santa-mary-shylla (2023 debut), damanbait-lamare (2023 debut), heaving-stone-kharpran
// (2023 debut), brightstarwell-marbaniang (2023 debut), synshar-kupar-roy-lyngdoh-thabah
// (Sohiong 2023 bypoll debut), matthew-beyondstar-kurbah (2023 debut), balajied-kupar-synrem
// (2019 Shella bypoll debut), shakliar-warjri (2023 debut), remington-gabil-momin (2023 debut),
// methodius-dkhar (2018 me nahi lade; aakhiri 2013 me), arbinstone-b-marak (2023 debut;
// 2018 me GHADC MDC the), sengchim-n-sangma (2023 debut), mehtab-chandee-agitok-sangma
// (2024 Gambegre bypoll debut), kartush-r-marak (2023 debut).
// Data caveats (bina anumaan): metbah-lyngdoh ke 2018 page ka header render nahi hua —
// age/education/party/assets/liabilities myneta ke affidavit-comparison + summary lists se
// verified (DOB 04-Apr-1969 se age 48 match); renikton-lyngdoh-tongkhar ki education 2018
// page par sirf "Graduate" category tak mili; alexander-laloo-hek ki education sirf
// "12th Pass" category confirmed (2018 detail text truncate hua); ollan-singh-suin ke
// affidavit me liabilities ka antar tha (header Nil, grand total Rs 30,00,000 — affidavit
// grand total liya gaya); abu-taher-mondal me bhi wahi (header Rs 0, affidavit grand total
// Rs 15,00,000 — affidavit grand total liya gaya).
import type { PrevAffidavit } from './pilot';

export const prevMeghalayaNetas: Record<string, PrevAffidavit> = {

  'sniawbhalang-dhar': {
  year: '2018',
  age: '36',
  education: '12th Pass \u2014 Higher Secondary School Leaving Certificate Exam From Meghalaya Board Of School Education 2000',
  criminalCases: 0,
  assets: 'Rs 6,41,96,030',
  assetsNum: 64196030,
  liabilities: 'Rs 33,21,585',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=5815',
  },
// 2018: NPP, Nartiang (Winner)

  'wailadmiki-shylla': {
  year: '2018',
  age: '26',
  education: '12th Pass \u2014 12th (Sc) Senior School Certificate Examination 2011 from Jawahar Navodaya Vidyalaya Mukhla, Jaintia Hills Dist. now Known as West Jaintia Hills Dist. Meghalaya',
  criminalCases: 0,
  assets: 'Rs 61,86,255',
  assetsNum: 6186255,
  liabilities: 'Rs 0',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=5922',
  },
// 2018: NPP, Jowai (Winner)

  'coming-one-ymbon': {
  year: '2018',
  age: '46',
  education: '8th Pass \u2014 Class IX Pass, Shangpung Presbyterian Sec. school 1984',
  criminalCases: 0,
  assets: 'Rs 26,39,16,609',
  assetsNum: 263916609,
  liabilities: 'Rs 0',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=5817',
  },
// 2018: NPP, Raliang (Winner)

  'nujorki-sungoh': {
  year: '2018',
  age: '29',
  education: 'Graduate \u2014 B.A. From North East Hills University Shillong College Shillong Year 2009',
  criminalCases: 0,
  assets: 'Rs 4,54,820',
  assetsNum: 454820,
  liabilities: 'Rs 1,63,612',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=5888',
  },
// 2018: UDP, Mowkaiaw (Winner)

  'kyrmen-shylla': {
  year: '2018',
  age: '29',
  education: '10th Pass \u2014 Secondary School Leaving Certificate Meghalaya Board of School Education Khliehriat Higher Sec. School Khliehriat In 2004',
  criminalCases: 0,
  assets: 'Rs 46,77,558',
  assetsNum: 4677558,
  liabilities: 'Rs 0',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=5891',
  },
// 2018: UDP, Khliehriat (Winner)

  'lahkmen-rymbui': {
  year: '2018',
  age: '49',
  education: 'Graduate \u2014 Bachelor of Science (Hons), St. Edmund\u2019s College, Shillong, NEHU, 1990',
  criminalCases: 0,
  assets: 'Rs 11,21,12,673',
  assetsNum: 112112673,
  liabilities: 'Rs 0',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=5928',
  },
// 2018: UDP, Amlarem (Winner)

  'charles-marngar': {
  year: '2018',
  age: '32',
  education: '10th Pass \u2014 NIOS (National Institute Open Schooling) Auxilium Umpohliew Jingstad Secondary School',
  criminalCases: 0,
  assets: 'Rs 7,99,986',
  assetsNum: 799986,
  liabilities: 'Rs 0',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=5820',
  },
// 2018: INC, Mawhati (haare)

  'mayralborn-syiem': {
  year: '2018',
  age: '37',
  education: 'Post Graduate \u2014 M.A. From NEHU Year 2004',
  criminalCases: 0,
  assets: 'Rs 1,29,45,326',
  assetsNum: 12945326,
  liabilities: 'Rs 1,93,200',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=5892',
  },
// 2018: INC, Nongpoh (Winner)

  'sosthenes-sohtun': {
  year: '2018',
  age: '43',
  education: '12th Pass \u2014 Pre-University (Arts) From St. Anthony\u2019s College North Eastern Hills University, Year-1992',
  criminalCases: 0,
  assets: 'Rs 5,09,16,337',
  assetsNum: 50916337,
  liabilities: 'Rs 54,36,602',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=5896',
  },
// 2018: NPP, Jirang (Winner)

  'dr-celestine-lyngdoh': {
  year: '2018',
  age: '47',
  education: 'Post Graduate \u2014 M.D. From Manipur University',
  criminalCases: 0,
  assets: 'Rs 2,02,45,000',
  assetsNum: 20245000,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5897',
  },
// 2018: INC, Umsning (Winner)

  'alexander-laloo-hek': {
  year: '2018',
  age: '51',
  education: '12th Pass',
  criminalCases: 0,
  assets: 'Rs 8,00,62,627',
  assetsNum: 80062627,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=6017',
  },
// 2018: BJP, Pynthorumkhrah (Winner)

  'dr-mazel-ampareen-lyngdoh': {
  year: '2018',
  age: '53',
  education: 'Doctorate \u2014 Ph.d From NEHU in 2012, NET From UGC in 2001, M.A. From Jamia Millia Islamia in 1990',
  criminalCases: 0,
  assets: 'Rs 2,87,09,012',
  assetsNum: 28709012,
  liabilities: 'Rs 42,32,308',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5774',
  },
// 2018: INC, East Shillong (Winner)

  'adelbert-nongrum': {
  year: '2018',
  age: '41',
  education: '12th Pass \u2014 12th Passed MBOSE Year 2010',
  criminalCases: 0,
  assets: 'Rs 3,99,156',
  assetsNum: 399156,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5775',
  },
// 2018: KHNAM, North Shillong (Winner)

  'paul-lyngdoh': {
  year: '2018',
  age: '45',
  education: 'Post Graduate \u2014 MA From NEHU Shillong In 1998',
  criminalCases: 0,
  assets: 'Rs 2,24,15,293',
  assetsNum: 22415293,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=6018',
  },
// 2018: UDP, West Shillong (haare)

  'sanbor-shullai': {
  year: '2018',
  age: '51',
  education: '10th Pass \u2014 HSLC From MBOSE In 1984 & PU(Arts) 1st Year Synod College, NEHU In 1986',
  criminalCases: 0,
  assets: 'Rs 8,70,40,483',
  assetsNum: 87040483,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5936',
  },
// 2018: BJP, South Shillong (Winner)

  'ronnie-v-lyngdoh': {
  year: '2018',
  age: '58',
  education: '12th Pass \u2014 P.U. (Com) From NEHU, Year-1980',
  criminalCases: 0,
  assets: 'Rs 1,11,72,491',
  assetsNum: 11172491,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5938',
  },
// 2018: INC, Mylliem (haare)

  'charles-pyngrope': {
  year: '2018',
  age: '57',
  education: 'Graduate \u2014 B.A., Year 1980, P.U. Arts Year 1978, From North Eastern Hill University; Matric From Council for the Indian School Year 1976',
  criminalCases: 0,
  assets: 'Rs 8,37,80,270',
  assetsNum: 83780270,
  liabilities: 'Rs 2,35,32,209',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5831',
  },
// 2018: INC, Nongthymmai (Winner)

  'ardent-miller-basaiawmoit': {
  year: '2018',
  age: '45',
  education: 'Graduate \u2014 B.A. From NEHU in 1993',
  criminalCases: 0,
  assets: 'Rs 1,26,91,306',
  assetsNum: 12691306,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5835',
  },
// 2018: HSPDP, Nongkrem (haare)

  'prestone-tynsong': {
  year: '2018',
  age: '52',
  education: 'Graduate \u2014 B.Com In Year 1989 from NEHU',
  criminalCases: 0,
  assets: 'Rs 4,52,47,667',
  assetsNum: 45247667,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5785',
  },
// 2018: NPP, Pynursla (Winner)

  'gavin-miguel-mylliem': {
  year: '2018',
  age: '26',
  education: 'Graduate \u2014 B.Com. St. Anthony\u2019S college 2012',
  criminalCases: 0,
  assets: 'Rs 3,46,07,781',
  assetsNum: 34607781,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5846',
  },
// 2018: PDF, Sohra (Winner)

  'banteidor-lyngdoh': {
  year: '2018',
  age: '41',
  education: '12th Pass \u2014 Bachelors Preparatory Programme From IGNOU, Year-2014',
  criminalCases: 0,
  assets: 'Rs 35,23,376',
  assetsNum: 3523376,
  liabilities: 'Rs 1,76,100',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5951',
  },
// 2018: PDF, Mawkynrew (Winner)

  'metbah-lyngdoh': {
  year: '2018',
  age: '48',
  education: '10th Pass',
  criminalCases: 0,
  assets: 'Rs 87,26,55,788',
  assetsNum: 872655788,
  liabilities: 'Rs 30,23,62,533',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5954',
  },
// 2018: UDP, Mairang (Winner)

  'ollan-singh-suin': {
  year: '2018',
  age: '55',
  education: 'Graduate \u2014 B.Sc Agriculture From Assam Agriculture University Jorhat in Year 1989',
  criminalCases: 0,
  assets: 'Rs 1,83,49,440',
  assetsNum: 18349440,
  liabilities: 'Rs 30,00,000',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5783',
  },
// 2018: UDP, Mawsynram (haare)

  'gabriel-wahlang': {
  year: '2018',
  age: '41',
  education: 'Post Graduate M.A. From Eastern Hills University Shillong Meghalaya in the Year 2003',
  criminalCases: 0,
  assets: 'Rs 73,40,000',
  assetsNum: 7340000,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5789',
  },
// 2018: INC, Nongstoin (haare)

  'pius-marwein': {
  year: '2018',
  age: '27',
  education: '10th Pass Class X Meghalaya Board Of Education Year 2008',
  criminalCases: 0,
  assets: 'Rs 5,04,55,899',
  assetsNum: 50455899,
  liabilities: 'Rs 29,06,267',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5959',
  },
// 2018: UDP, Ranikor (Feb general me haare; Aug bypoll jeete)

  'renikton-lyngdoh-tongkhar': {
  year: '2018',
  age: '45',
  education: 'Graduate',
  criminalCases: 0,
  assets: 'Rs 29,88,25,206',
  assetsNum: 298825206,
  liabilities: 'Rs 9,64,00,000',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=6075',
  },
// 2018: HSPDP, Mawkyrwat (Winner)

  'rupert-momin': {
  year: '2018',
  age: '44',
  education: 'Graduate Professional LLB From Tura Law College, Tura under NEHU (North Eastern Hill University), Year-2013',
  criminalCases: 0,
  assets: 'Rs 22,58,349',
  assetsNum: 2258349,
  liabilities: 'Rs 1,42,000',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5964',
  },
// 2018: NPP, Kharkutta (Winner)

  'marthon-j-sangma': {
  year: '2018',
  age: '53',
  education: 'Graduate Class X passed From Aradong Secondary School, West Khasi Hills, Year 1981, B.Sc Agriculture, NEHU College in 1986',
  criminalCases: 0,
  assets: 'Rs 1,36,69,153',
  assetsNum: 13669153,
  liabilities: 'Rs 75,000',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5853',
  },
// 2018: INC, Mendipathar (Winner)

  'timothy-dalbot-shira': {
  year: '2018',
  age: '68',
  education: 'Graduate B.A. From St. Anthony\u2019s College Shillong under Gauhati University Assam in 1969',
  criminalCases: 0,
  assets: 'Rs 1,56,26,672',
  assetsNum: 15626672,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5856',
  },
// 2018: NPP, Resubelpara (Winner)

  'pongseng-marak': {
  year: '2018',
  age: '33',
  education: 'Graduate B.A. Passed Year 2007 From Tura Govt. College NEHU University',
  criminalCases: 0,
  assets: 'Rs 2,99,024',
  assetsNum: 299024,
  liabilities: 'Rs 93,861',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5857',
  },
// 2018: NPP, Bajengdoba (Winner)

  'dr-mukul-sangma': {
  year: '2018',
  age: '52',
  education: 'Graduate Professional \u2014 MBBS from NE Regional Medical College, Imphal, Manipur in 1989',
  criminalCases: 0,
  assets: 'Rs 13,59,20,751',
  assetsNum: 135920751,
  liabilities: 'Rs 78,90,463',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=6085',
  },
// 2018: INC, Songsak + Ampati DONO se lade, dono jeete (tulna me Songsak record)

  'jim-m-sangma': {
  year: '2018',
  age: '41',
  education: 'Graduate Professional \u2014 Passed B.Ed. under N.E.H.U. through B.Ed. College, Tura Rongkhon in the year 2000, B.A. under N.E.H.U. through St. Edmund\u2019s College Shillong in 1998',
  criminalCases: 0,
  assets: 'Rs 18,01,713',
  assetsNum: 1801713,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5798',
  },
// 2018: NPP, Rongjeng (Winner)

  'marcuise-n-marak': {
  year: '2018',
  age: '49',
  education: '12th Pass \u2014 Passed P.U. Arts under NEHU through Tura Govt. College in 1991',
  criminalCases: 1,
  assets: 'Rs 69,49,102',
  assetsNum: 6949102,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5800',
  },
// 2018: NPP, Williamnagar (Winner, May 2018 adjourned poll)

  'limison-d-sangma': {
  year: '2018',
  age: '50',
  education: '10th Pass',
  criminalCases: 0,
  assets: 'Rs 2,61,70,897',
  assetsNum: 26170897,
  liabilities: 'Rs 0',
  mynetaUrl: 'http://www.myneta.info/meghalaya2018/candidate.php?candidate_id=5984',
  },
// 2018: INC, Raksamgre (haare)

  'jimmy-d-sangma': {
  year: '2018',
  age: '44',
  education: '12th Pass \u2014 HSSLC Passed in the year 1995 of Dispur College, Assam higher Secondary Education Council, Guwahati-781021',
  criminalCases: 0,
  assets: 'Rs 34,00,454',
  assetsNum: 3400454,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://mail.myneta.info/meghalaya2018/candidate.php?candidate_id=5985',
  },
// 2018: INC, Tikrikilla (Winner)

  'abu-taher-mondal': {
  year: '2018',
  age: '51',
  education: 'Graduate Professional \u2014 Associate Member of Institution of Engineers (A.M.I.E.) (Equivalent to B.E.) 8 Gokhale Road Kolkata in the year 1991',
  criminalCases: 0,
  assets: 'Rs 1,52,97,109',
  assetsNum: 15297109,
  liabilities: 'Rs 15,00,000',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=6092',
  },
// 2018: INC, Phulbari (haare)

  'dr-mizanur-rahman-kazi': {
  year: '2018',
  age: '43',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 6,20,28,974',
  assetsNum: 62028974,
  liabilities: 'Rs 71,58,276',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5867',
  },
// 2018: NPP, Rajabala (haare)

  'rupa-m-marak': {
  year: '2018',
  age: '31',
  education: 'Graduate \u2014 B.A From Tura Govt. College Under NEHU In 2012',
  criminalCases: 0,
  assets: 'Rs 2,41,452',
  assetsNum: 241452,
  liabilities: 'Rs 50,000',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5990',
  },
// 2018: IND, Dadenggre (haare)

  'thomas-a-sangma': {
  year: '2018',
  age: '56',
  education: 'Graduate \u2014 B.A. Pass From Tura Govt. College, Year-1987, P.U. Arts From Tura Govt. College, Year-1985',
  criminalCases: 0,
  assets: 'Rs 1,59,66,889',
  assetsNum: 15966889,
  liabilities: 'Rs 0',
  mynetaUrl: 'https://myneta.info/meghalaya2018/candidate.php?candidate_id=5914',
  },
// 2018: NPP, North Tura (Winner)

  'conrad-kongkal-sangma': {
  year: '2018',
  age: '40',
  education: 'Post Graduate \u2014 Master of Business Administration From Imperial College University Of London In 2005',
  criminalCases: 0,
  assets: 'Rs 5,33,81,378',
  assetsNum: 53381378,
  liabilities: 'Rs 1,58,06,933',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=6146',
  },
// 2018: NPP, South Tura (23 Aug 2018 bypoll Winner)

  'subir-marak': {
  year: '2018',
  age: '45',
  education: 'Others \u2014 Civil Engineering from Shillong Polytechnic, 1996',
  criminalCases: 0,
  assets: 'Rs 69,16,558',
  assetsNum: 6916558,
  liabilities: 'Rs 7,04,491',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=5995',
  },
// 2018: NPP, Rangsakona (haare)

  'miani-d-shira': {
  year: '2018',
  age: '27',
  education: 'Graduate \u2014 B.Com with honors from Sri Ram College of Commerce under Delhi University in the year 2012, Class 12 Commerce Lakman Public School in 2009',
  criminalCases: 0,
  assets: 'Rs 3,91,03,288',
  assetsNum: 39103288,
  liabilities: 'Rs 22,19,943',
  mynetaUrl: 'https://www.myneta.info/meghalaya2018/candidate.php?candidate_id=6143',
  },
// 2018: INC, Ampati (28 May 2018 bypoll Winner)

  'sanjay-a-sangma': {
  year: '2018',
  age: '43',
  education: '8th Pass \u2014 8th Class Passed from Don Bosco Hr. Sec. School Year 1988 MBOSE',
  criminalCases: 0,
  assets: 'Rs 6,37,25,530',
  assetsNum: 63725530,
  liabilities: 'Rs 2,60,681',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=6022',
  },
// 2018: NPP, Mahendraganj (haare)

  'ian-botham-k-sangma': {
  year: '2018',
  age: '31',
  education: 'Post Graduate \u2014 MBA Degree from University of Bedfordshire Year 2013',
  criminalCases: 0,
  assets: 'Rs 6,96,706',
  assetsNum: 696706,
  liabilities: 'Rs 4,27,732',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=6118',
  },
// 2018: NPP, Salmanpara (haare)

  'brening-a-sangma': {
  year: '2018',
  age: '55',
  education: '10th Pass \u2014 10th Passed in the year 1983 under meghalaya board of school education MBOSE',
  criminalCases: 0,
  assets: 'Rs 16,25,36,744',
  assetsNum: 162536744,
  liabilities: 'Rs 12,63,361',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=6001',
  },
// 2018: NPP, Dalu (Winner)

  'rakkam-a-sangma': {
  year: '2018',
  age: '34',
  education: 'Post Graduate \u2014 Master of Science (Physics) Passed in 2008 from North Eastern Hills University Shillong',
  criminalCases: 0,
  assets: 'Rs 10,71,859',
  assetsNum: 1071859,
  liabilities: 'Rs 4,00,000',
  mynetaUrl: 'http://myneta.info/meghalaya2018/candidate.php?candidate_id=6003',
  },
// 2018: NPP, Rongara Siju (Winner)
};

// Karnataka — 2018 vs 2023 affidavit comparison (vartaman 221 MLAs, 16th VS 2023-2028).
// Karnataka me pichhla aam Vidhan Sabha chunav 2018 me hua tha (16th VS 2023 me chuni gayi).
// Coverage: 118/221 ke verified records — 2018 ke myneta.info/karnataka2018 candidate pages kholkar padhe gaye,
// seat + party + pita-naam se pehchan pakki ki gayi (winner/loser dono shamil — affidavit hi tulna ka aadhaar hai).
// 62 MLAs ne 2018 me Assembly ladi hi nahi (verified-absent — 2019/2024/2026 me debut, 2019 me Lok Sabha, ya upchunav-vijeta);
// 41 retry-leads (2018 page URL nahi mila ya page header text-extraction me render nahi hua — dobara kholne par kabhi mil jata hai):
// a-c-srinivasa, a-manju, aravind-bellad, asif-raju-sait, b-b-chimmanakatti, b-k-sangameshwara, babasaheb-devanagouda-patil, basangouda-patil-yatnal, basavaraj-rayareddy, bharamgouda-alagouda-kage, bhimanna-t-naik, c-c-patil, c-p-yogeshwara, darshan-puttannaiah, eshwar-khandre, gurupadagouda-patil, h-a-iqbal-hussain, h-c-balakrishna, h-k-suresh, h-r-gaviyappa, jagadeesh-shivayya-gudagunti, k-c-veerendra-puppy, katakadhond-vitthal-dondiba, kothur-g-manjunatha, m-krishnappa-vijay-nagar, m-r-manjunath, mahendra-kallappa-tammannavar, munirathna, n-chaluvaraya-swamy, n-h-konaraddi, nikhil-umesh-katti, priya-krishna, ramesha-bandisiddegowda, ravikumar-gowda, rizwan-arshad, rudrappa-manappa-lamani, s-n-narayanaswamy-k-m, s-r-vishwanath, s-s-mallikarjun, samruddhi-v-manjunath, santosh-lad, satish-krishna-sail, sharanprakash-rudrappa-patil, shashikala-annasaheb-jolle, shivanand-patil, shivaraj-tangadagi, timmapur-ramappa-balappa, ujaneshwar-basavannappa-banakar, umesh-hullappa-meti, vijayanand-shivashankarappa-kashappanavar.
// Sabse badi sampatti-badhotri (2018 -> 2023): b-devendrappa ~14.8x (Rs 14,25,000 -> Rs 2,11,54,681), yashavantaraygoud-vittalagoud-patil ~12.9x (Rs 90,75,288 -> Rs 11,68,72,478), k-gopalaiah ~10.3x (Rs 10,78,29,135 -> Rs 1,10,64,58,434), rahim-khan ~6.5x (Rs 12,90,48,323 -> Rs 83,84,40,950), manappa-d-vajjal ~5.9x (Rs 5,24,52,390 -> Rs 30,74,77,543)
// Girawat: c-b-suresh-babu ~0.32x, ramesh-laxmanrao-jarkiholi ~0.40x, laxmi-r-hebbalkar ~0.46x, bhojaraj ~0.51x.
// Pehchan-jaal se bache: nayana-motamma ki 2018 'Motamma' unki MAA (umr 67) thi — Nayana ABSENT;
// s-r-srinivas-vasu (Gubbi winner, IND) vs doosre 'Srinivas' (S/o Doddayya) alag; B. Devendrappa (Jagalur)
// vs Y. Devendrappa (2019 Bellary Lok Sabha) alag; k-s-anand ke 2018 winner 'K S Prakash' alag;
// kyathasandra-n-rajanna vs 'K.r.rajanna' (IND) alag; asif-raju-sait vs 2018 Belgaum Uttar ke Fairoz Nuruddin Saith alag.
// Hebbar ke 2018 page par 'Other Elections' ka figure 2019 by-election ka tha — winners-table ka asal 2018 figure liya;
// Srinivas Mane ke 2021 by-election page ko 2018 samajhne ka trap avoid kiya; s-t-somashekhar/eshwar-khandre/yatnal
// 2018 vijeta hain lekin 2018 winners-list me nahi mile — retry-lead me darj.
// Method: jahan page-header total affidavit-figure se alag tha, affidavit-figure li (myneta summary tables se match);
// liabilities 'Nil' wahi rakhi jahan page par koi den-dari darj nahi thi; header-render na hone par entry nahi banayi — retry-lead.
import type { PrevAffidavit } from './pilot';

export const prevKarnatakaNetas: Record<string, PrevAffidavit> = {

'ganesh-prakash-hukkeri': {
year: '2018',
age: '40',
education: 'Graduate Professional — BBA, British College, Belgavi (1999-2000)',
criminalCases: 0,
assets: 'Rs 10,95,94,754',
assetsNum: 109594754,
liabilities: 'Rs 92,18,245',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6660',
},

'laxman-sangappa-savadi': {
year: '2018',
age: '58',
education: '12th Pass — PUC, S.S.M.S. College, Athani (1978)',
criminalCases: 1,
assets: 'Rs 15,14,41,598',
assetsNum: 151441598,
liabilities: 'Rs 7,77,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5975',
},

'duryodhan-mahalingappa-aihole': {
year: '2018',
age: '61',
education: '10th Pass — 10th standard, Harogeri Vidhyalaya, Harogeri',
criminalCases: 0,
assets: 'Rs 5,31,32,582',
assetsNum: 53132582,
liabilities: 'Rs 65,11,590',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6052',
},

'balachandra-laxmanrao-jarkiholi': {
year: '2018',
age: '51',
education: '10th Pass — PUC 1st year, JSS Arts/Science/Commerce College, Gokak (Apr 1983); SSLC, Govt Junior College, Gokak (Apr 1982)',
criminalCases: 0,
assets: 'Rs 19,32,70,979',
assetsNum: 193270979,
liabilities: 'Rs 17,50,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6906',
},

'ramesh-laxmanrao-jarkiholi': {
year: '2018',
age: '58',
education: '12th Pass — BA 1st year, JSS College, Gokak, Karnataka University, Dharwad (1981)',
criminalCases: 1,
assets: 'Rs 1,22,79,33,752',
assetsNum: 1227933752,
liabilities: 'Rs 46,49,51,904',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6080',
},

'satish-laxmanrao-jarkiholi': {
year: '2018',
age: '56',
education: '12th Pass — SSLC Education from govt P.U College Gokak in the year April 1978, P.U.C from J.S.S. Arts, Science & Commerce College Gokak in the Year 1981',
criminalCases: 0,
assets: 'Rs 42,51,14,222',
assetsNum: 425114222,
liabilities: 'Rs 11,33,01,242',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6911',
},

'abhay-patil': {
year: '2018',
age: '48',
education: '10th Pass — SSLC, Govt. Chintamanrao Jr. College, Shahapur, Belgaum (1985); National Trade Certificate, Bharatesh ITI College, Belgaum (1988)',
criminalCases: 5,
assets: 'Rs 9,57,73,303',
assetsNum: 95773303,
liabilities: 'Nil',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5982',
},

'laxmi-r-hebbalkar': {
year: '2018',
age: '43',
education: 'Post Graduate — M.A. (Political Science), Mysore University (2002)',
criminalCases: 6,
assets: 'Rs 28,79,32,275',
assetsNum: 287932275,
liabilities: 'Rs 8,00,07,767',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5984',
},

'vithal-somanna-halagekar': {
year: '2018',
age: '55',
education: 'Graduate Professional — B.Ed. (1987-88), Sangolli Rayanna College, Belagavi; B.Sc. (1986-87), GSS College, Belagavi',
criminalCases: 0,
assets: 'Rs 2,96,58,451',
assetsNum: 29658451,
liabilities: 'Rs 1,87,20,956',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6511',
},

'mahantesh-shivanand-koujalagi': {
year: '2018',
age: '47',
education: 'Graduate Professional — LLB (Spl) from Karnataka University Law College, Karnataka University Dharwad Year 2002, B.Com from K R CE Society B M P Commerce College Bailhongal, Karnataka University Dharwad Year 1998',
criminalCases: 0,
assets: 'Rs 6,92,25,044',
assetsNum: 69225044,
liabilities: 'Rs 32,80,224',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5987',
},

'vishwas-vasant-vaidya': {
year: '2018',
age: '35',
education: 'Graduate — B.Com From CSI College of Commerce Dharwad in year 2004, Karnataka University Dharwad',
criminalCases: 0,
assets: 'Rs 3,14,64,285',
assetsNum: 31464285,
liabilities: 'Rs 1,08,18,660',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5989',
},

'ashok-mahadevappa-pattan': {
year: '2018',
age: '63',
education: 'Graduate — BA FROM APS COLLEGE BASAVANAGUDI BANGALORE YEAR-1982',
criminalCases: 0,
assets: 'Rs 1,08,54,653',
assetsNum: 10854653,
liabilities: 'Nil',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6883',
},

'siddu-savadi': {
year: '2018',
age: '59',
education: '10th Pass — SSLC from Sri, Prabhulingeshwar High School Terdal in 1976',
criminalCases: 0,
assets: 'Rs 6,33,08,781',
assetsNum: 63308781,
liabilities: 'Rs 16,87,258',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5800',
},

'j-t-patil': {
year: '2018',
age: '68',
education: 'Graduate — B.Sc From P.C. Jabin Science College Hubbali, Karnataka University Dharwad In 1971',
criminalCases: 0,
assets: 'Rs 4,93,25,559',
assetsNum: 49325559,
liabilities: 'Rs 69,53,685',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6102',
},

'appaji-alias-channabasavaraj-nadagouda': {
year: '2018',
age: '60',
education: 'Graduate — B.A., L W D COLLEGE RAICHUR 1980',
criminalCases: 0,
assets: 'Rs 11,06,97,067',
assetsNum: 110697067,
liabilities: 'Rs 55,58,800',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6106',
},

'bhimanagouda-rajugouda-basanagouda-patil': {
year: '2018',
age: '46',
education: 'Graduate — B.Sc. Agri in 1995-96 from University Of Agriculture,Dharward',
criminalCases: 0,
assets: 'Rs 2,13,85,159',
assetsNum: 21385159,
liabilities: 'Rs 43,27,389',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5795',
},

'm-b-patil': {
year: '2018',
age: '53',
education: 'Graduate Professional',
criminalCases: 0,
assets: 'Rs 1,04,89,05,747',
assetsNum: 1048905747,
liabilities: 'Rs 45,77,89,220',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6112',
},

'yashavantaraygoud-vittalagoud-patil': {
year: '2018',
age: '49',
education: '12th Pass — PUC From J.S.M College Dharwad, Year-1987',
criminalCases: 3,
assets: 'Rs 90,75,288',
assetsNum: 9075288,
liabilities: 'Nil',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5808',
},

'priyank-kharge': {
year: '2018',
age: '39',
education: '12th Pass — PUC from MES College, Malleswaram in 1996 to 1998, Certified Professional in computer Arts & Animation in 1999',
criminalCases: 0,
assets: 'Rs 14,62,95,921',
assetsNum: 146295921,
liabilities: 'Rs 69,64,525',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6143',
},

'basawaraj-mattimudu': {
year: '2018',
age: '38',
education: '12th Pass',
criminalCases: 0,
assets: 'Rs 8,65,33,854',
assetsNum: 86533854,
liabilities: 'Rs 1,48,51,114',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6862',
},

'allamprabhu-patil': {
year: '2018',
age: '62',
education: 'Graduate — BA from SB College of Arts Kalaburagi Year 1978-79',
criminalCases: 0,
assets: 'Rs 4,78,19,439',
assetsNum: 47819439,
liabilities: 'Rs 29,89,435',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6855',
},

'kaneez-fatima': {
year: '2018',
age: '58',
education: '12th Pass — Pre University studied at Nampally Junior College Hyderabad, Year-1979',
criminalCases: 0,
assets: 'Rs 17,86,01,000',
assetsNum: 178601000,
liabilities: 'Rs 11,17,800',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6149',
},

'm-y-patil': {
year: '2018',
age: '77',
education: 'Graduate — B.A FROM KARNATAKA UNIVERSITY, DHARWARD YEAR 1964',
criminalCases: 0,
assets: 'Rs 2,14,58,944',
assetsNum: 21458944,
liabilities: 'Rs 45,84,591',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5810',
},

'ajay-dharam-singh': {
year: '2018',
age: '44',
education: 'Graduate Professional — MBBS from M S Ramaiah Medical College, Bangalore Year 1993 to 1998',
criminalCases: 1,
assets: 'Rs 41,14,49,731',
assetsNum: 411449731,
liabilities: 'Rs 24,62,63,480',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6869',
},

'bhojaraj': {
year: '2018',
age: '68',
education: 'Graduate Professional — BA, Bachelor Of Law, Karnataka University, Dharward, 1974-75',
criminalCases: 1,
assets: 'Rs 8,25,99,526',
assetsNum: 82599526,
liabilities: 'Rs 1,68,60,560',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6849',
},

'sharanabasappa-darshanapur': {
year: '2018',
age: '58',
education: 'Graduate Professional — B.E., HKI Society Gulbargha',
criminalCases: 0,
assets: 'Rs 6,18,11,993',
assetsNum: 61811993,
liabilities: 'Rs 1,25,00,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5812',
},

'prabhu-chavan': {
year: '2018',
age: '49',
education: '12th Pass — 12th from Ashrama School Shilavani Border Thanda',
criminalCases: 0,
assets: 'Rs 10,08,00,396',
assetsNum: 100800396,
liabilities: 'Rs 1,36,91,838',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6475',
},

'shailendra-beldale': {
year: '2018',
age: '44',
education: '5th Pass — 7th pass',
criminalCases: 1,
assets: 'Rs 3,61,12,000',
assetsNum: 36112000,
liabilities: 'Rs 1,09,68,887',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6533',
},

'rahim-khan': {
year: '2018',
age: '52',
education: '12th Pass — PUC II year (Science) from Department of Pre-University Education, Bangalore (Board), Govt. Junior College, Bidar in 1985',
criminalCases: 0,
assets: 'Rs 12,90,48,323',
assetsNum: 129048323,
liabilities: 'Rs 4,25,69,374',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6844',
},

'basanagouda-daddal': {
year: '2018',
age: '46',
education: '10th Pass — SSLC 2011 Sharada Vidya Niketan, Manvi',
criminalCases: 0,
assets: 'Rs 2,46,77,145',
assetsNum: 24677145,
liabilities: 'Rs 18,50,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5820',
},

'dr-shivaraj-patil': {
year: '2018',
age: '47',
education: 'Post Graduate',
criminalCases: 0,
assets: 'Rs 8,13,57,775',
assetsNum: 81357775,
liabilities: 'Rs 1,51,26,207',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6540',
},

'g-hampayya-nayak': {
year: '2018',
age: '78',
education: '10th Pass — SSLC Government High school Gulbarga, Kalburgi',
criminalCases: 0,
assets: 'Rs 2,50,18,218',
assetsNum: 25018218,
liabilities: 'Rs 17,92,619',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6156',
},

'manappa-d-vajjal': {
year: '2018',
age: '56',
education: '5th Pass — 6th grade no:1972 s.p.p school vjjala shorapur',
criminalCases: 5,
assets: 'Rs 5,24,52,390',
assetsNum: 52452390,
liabilities: 'Rs 0',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5823',
},

'hampanagouda-badarli': {
year: '2018',
age: '68',
education: 'Graduate — BA karnataka college darwad 1972-73',
criminalCases: 0,
assets: 'Rs 4,25,59,091',
assetsNum: 42559091,
liabilities: 'Rs 16,90,229',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6161',
},

'basan-gouda-turvihal': {
year: '2018',
age: '53',
education: '10th Pass — vasavi high school sindanuru',
criminalCases: 0,
assets: 'Rs 1,78,04,247',
assetsNum: 17804247,
liabilities: 'Rs 8,03,982',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6164',
},

'doddanagouda-patil': {
year: '2018',
age: '45',
education: '12th Pass — PUC From Govt. P.U. College, Kushtagi, Year 1991-92',
criminalCases: 1,
assets: 'Rs 1,90,36,490',
assetsNum: 19036490,
liabilities: 'Rs 61,61,136',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6166',
},

'raghavendra-hitnal': {
year: '2018',
age: '39',
education: '12th Pass — puc jss collage Darvad',
criminalCases: 0,
assets: 'Rs 3,78,72,420',
assetsNum: 37872420,
liabilities: 'Rs 2,15,89,358',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6178',
},

'h-k-patil': {
year: '2018',
age: '64',
education: 'Graduate Professional — BSc Graduation from JSS College[1973], Karnataka University, Dharwad. and LLB Spl from JSS Sakri law College Hubballi - Karnataka university, Dharwad.',
criminalCases: 0,
assets: 'Rs 7,62,78,991',
assetsNum: 76278991,
liabilities: 'Rs 4,65,55,991',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6548',
},

'abbayya-prasad': {
year: '2018',
age: '49',
education: '12th Pass — PUC KARNATAKA SARKARA PRE-UNIVERSITY COLLEGE DEPARTMENT 1988',
criminalCases: 0,
assets: 'Rs 3,60,43,872',
assetsNum: 36043872,
liabilities: 'Rs 64,24,400',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6554',
},

'dinakar-keshav-shetty': {
year: '2018',
age: '60',
education: '12th Pass — PU in commerce, Dr.A V baliga commerce collage kumta.1975',
criminalCases: 3,
assets: 'Rs 3,47,93,000',
assetsNum: 34793000,
liabilities: 'Rs 35,96,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6826',
},

'mankal-vaidya': {
year: '2018',
age: '46',
education: '8th Pass — 8TH PASS FROM JANATA VIDYALAYA MURUDESHWAR IN MARCH 1988',
criminalCases: 3,
assets: 'Rs 11,79,52,503',
assetsNum: 117952503,
liabilities: 'Rs 2,43,65,249',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6560',
},

'arabail-shivaram-hebbar': {
year: '2018',
age: '61',
education: '10th Pass — SSLC- Secondary School Leaving Certificate from Kadatoka, Tq. Honnavara Year 1971',
criminalCases: 0,
assets: 'Rs 6,71,23,218',
assetsNum: 67123218,
liabilities: 'Rs 3,90,03,244',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5840',
},

'r-v-deshpande': {
year: '2018',
age: '71',
education: 'Graduate Professional — L.L.B. Shiva ji University, 1970, B.A.(Hons.) Karnatka University 1967.',
criminalCases: 0,
assets: 'Rs 2,15,15,93,731',
assetsNum: 2151593731,
liabilities: 'Rs 15,90,07,197',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6194',
},

'srinivas-mane': {
year: '2018',
age: '43',
education: 'Graduate — B.COM. JANARDHAN RAMNAGAR RAJASTHAN UNIVERSITY, UDAYPURA, RAJASTHAN, 2007',
criminalCases: 0,
assets: 'Rs 6,04,28,031',
assetsNum: 60428031,
liabilities: 'Rs 57,95,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6569',
},

'k-nemiraj-naik': {
year: '2018',
age: '46',
education: 'Graduate — B.A. at Magadh University Patna (April-2006)',
criminalCases: 0,
assets: 'Rs 2,98,91,206',
assetsNum: 29891206,
liabilities: 'Rs 1,39,00,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5847',
},

'b-nagendra': {
year: '2018',
age: '47',
education: 'Graduate — B.com, Veerasaiva Collage, Bellary, Gulbarga University. 1993',
criminalCases: 15,
assets: 'Rs 16,88,40,216',
assetsNum: 168840216,
liabilities: 'Rs 4,35,01,986',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6116',
},

'n-y-gopalakrishna': {
year: '2018',
age: '68',
education: 'Post Graduate — M.B.A., Mysore University. 1975-76',
criminalCases: 0,
assets: 'Rs 4,65,42,876',
assetsNum: 46542876,
liabilities: 'Nil',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6955',
},

't-raghumurthy': {
year: '2018',
age: '55',
education: 'Graduate Professional — B.E (Civil), Govt B.D.T College Davangere, Mysore University (1985)',
criminalCases: 0,
assets: 'Rs 6,37,46,595',
assetsNum: 63746595,
liabilities: 'Rs 14,40,81,929',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6222',
},

'b-g-govindappa': {
year: '2018',
age: '63',
education: '12th Pass — PUC, JSS College, Mysore, 1971-72',
criminalCases: 0,
assets: 'Rs 1,68,45,127',
assetsNum: 16845127,
liabilities: 'Rs 60,22,740',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6230',
},

'm-chandrappa': {
year: '2018',
age: '66',
education: 'Graduate — B.A. (1978-79)',
criminalCases: 0,
assets: 'Rs 8,39,41,556',
assetsNum: 83941556,
liabilities: 'Nil',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5858',
},

'b-devendrappa': {
year: '2018',
age: '56',
education: '12th Pass — B.A. Incomplete, 1983-84, Govt. Arts College, Chitradurga',
criminalCases: 0,
assets: 'Rs 14,25,000',
assetsNum: 1425000,
liabilities: 'Rs 2,55,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6234',
},

'b-p-harish': {
year: '2018',
age: '57',
education: 'Unknown — Primary: Sent Pal Convent, Davanagere (1972); High School: Moti Virappa High School, Davanagere (1976); PUC: DRM Science College, Davanagere (1978); Degree: BA, MSB College, Davanagere (1981)',
criminalCases: 4,
assets: 'Rs 4,20,55,903',
assetsNum: 42055903,
liabilities: 'Nil',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6237',
},

'k-s-basavanthappa': {
year: '2018',
age: '49',
education: '12th Pass — PUC, Davanagere A R J College (1991-92)',
criminalCases: 0,
assets: 'Rs 1,72,94,814',
assetsNum: 17294814,
liabilities: 'Rs 12,77,497',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6622',
},

'd-g-shanthana-gowda': {
year: '2018',
age: '70',
education: 'Graduate — B.Sc., P.C. Jabin College Hubballi, Karnataka University Dharwad (1971-72)',
criminalCases: 0,
assets: 'Rs 13,51,50,996',
assetsNum: 135150996,
liabilities: 'Rs 80,56,779',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=8593',
},

'sharada-puryanaik': {
year: '2018',
age: '47',
education: '10th Pass — PUC 1st Year, DVS Senior College Shimoga (1987-88)',
criminalCases: 0,
assets: 'Rs 5,16,94,591',
assetsNum: 51694591,
liabilities: 'Rs 1,06,66,460',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6251',
},

'araga-jnanendra': {
year: '2018',
age: '65',
education: 'Graduate — B.Com, State college of Shimoga (1971-1974)',
criminalCases: 1,
assets: 'Rs 2,14,83,250',
assetsNum: 21483250,
liabilities: 'Rs 10,51,002',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6264',
},

'madhu-bangarappa': {
year: '2018',
age: '52',
education: 'Graduate (B.A, Bangalore University, 1988)',
criminalCases: 0,
assets: 'Rs 66,37,28,746',
assetsNum: 663728746,
liabilities: 'Rs 16,38,72,494',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5875',
},

'v-sunil-kumar': {
year: '2018',
age: '42',
education: 'Graduate Professional (B.E., Kuvempu University, 1997)',
criminalCases: 1,
assets: 'Rs 2,91,89,224',
assetsNum: 29189224,
liabilities: 'Rs 92,15,676.93',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5878',
},

't-d-rajegowda': {
year: '2018',
age: '58',
education: 'Graduate (B.Com, Mangalore University, Kundapura, 1980)',
criminalCases: 0,
assets: 'Rs 21,01,65,860',
assetsNum: 210165860,
liabilities: 'Rs 7,69,00,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6799',
},

'k-s-anand': {
year: '2018',
age: '39',
education: 'Graduate (B.Sc, Govt. First Grade College Kadur, Kuvempu University)',
criminalCases: 0,
assets: 'Rs 1,37,87,551',
assetsNum: 13787551,
liabilities: 'Rs 5,61,774',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6789',
},

'c-b-suresh-babu': {
year: '2018',
age: '47',
education: '10th Pass (SSLC, Nalanda English School, Tiptur)',
criminalCases: 0,
assets: 'Rs 5,78,62,757',
assetsNum: 57862757,
liabilities: 'Rs 50,91,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6306',
},

'k-shadakshari': {
year: '2018',
age: '69',
education: 'Graduate (B.Com, R C College, Bengaluru University)',
criminalCases: 0,
assets: 'Rs 5,00,00,000',
assetsNum: 50000000,
liabilities: 'Rs 1,45,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6311',
},

'm-t-krishnappa': {
year: '2018',
age: '66',
education: 'Graduate (B.Com, Bangalore University, 1974)',
criminalCases: 1,
assets: 'Rs 3,36,32,152',
assetsNum: 33632152,
liabilities: 'Rs 18,00,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6315',
},

'h-d-ranganath': {
year: '2018',
age: '46',
education: 'Post Graduate (M.S. Ortho, JSS Medical College, Mysore, 1998-2001)',
criminalCases: 1,
assets: 'Rs 30,03,48,933',
assetsNum: 300348933,
liabilities: 'Rs 7,04,44,425',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6322',
},

'g-b-jyothi-ganesh': {
year: '2018',
age: '42',
education: 'Graduate Professional (B.E. Mechanical, Siddaganga Institute of Technology, Tumkur, Bangalore University, 1996)',
criminalCases: 0,
assets: 'Rs 14,15,52,663',
assetsNum: 141552663,
liabilities: 'Rs 9,11,02,345',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6326',
},

'b-suresh-gowda': {
year: '2018',
age: '53',
education: 'Graduate (B.Com, R C College, Bangalore, 1987-88)',
criminalCases: 1,
assets: 'Rs 7,24,88,117',
assetsNum: 72488117,
liabilities: 'Rs 64,01,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5893',
},

'g-parameshwara': {
year: '2018',
age: '66',
education: 'Doctorate (MSc and PhD, Australia)',
criminalCases: 0,
assets: 'Rs 11,62,46,878',
assetsNum: 116246878,
liabilities: 'Rs 9,32,04,228',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6780',
},

's-r-srinivas-vasu': {
year: '2018',
age: '56',
education: 'Graduate (B.A., Govt. College, Tumkur; PUC Nijalingappa College)',
criminalCases: 0,
assets: 'Rs 5,58,42,795',
assetsNum: 55842795,
liabilities: 'Rs 1,57,33,895',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6339',
},

't-b-jayachandra': {
year: '2018',
age: '68',
education: 'Graduate Professional (LLB, Vidyodaya Law College, Tumkur, Bangalore University, 1972)',
criminalCases: 2,
assets: 'Rs 20,40,37,177',
assetsNum: 204037177,
liabilities: 'Rs 1,61,67,746',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5897',
},

'kyathasandra-n-rajanna': {
year: '2018',
age: '67',
education: 'Graduate Professional (B.Sc 1972, Govt. Science College Tumkur, Mysore University; LLB 1984, Vidyodaya Law College Tumkur)',
criminalCases: 0,
assets: 'Rs 14,61,56,608',
assetsNum: 146156608,
liabilities: 'Rs 4,13,04,874',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6367',
},

's-n-subbareddy': {
year: '2018',
age: '52',
education: '10th Pass (SSLC 1983, Govt. High School, Gulur; TCH, Venkatesh Training College, Marathahalli)',
criminalCases: 0,
assets: 'Rs 1,57,57,19,617',
assetsNum: 1575719617,
liabilities: 'Rs 31,31,76,868',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6376',
},

'b-n-ravikumar': {
year: '2018',
age: '49',
education: '5th Pass (7th std, Government Higher School, 1987-88)',
criminalCases: 0,
assets: 'Rs 2,29,65,000',
assetsNum: 22965000,
liabilities: 'Rs 20,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=8578',
},

'm-c-sudhakar': {
year: '2018',
age: '40',
education: 'Doctorate (MDS Prosthodontics, A B Shetty Memorial Institute of Dental Sciences, Mysore University, 1994)',
criminalCases: 0,
assets: 'Rs 19,70,39,627',
assetsNum: 197039627,
liabilities: 'Rs 5,97,72,524',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=8556',
},

'g-k-venkatashivareddy': {
year: '2018',
age: '70',
education: 'Graduate Professional — B.Sc., LLB, Govt Law College (1973)',
criminalCases: 0,
assets: 'Rs 10,92,64,929',
assetsNum: 109264929,
liabilities: 'Rs 5,36,824',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5911',
},

'roopa-kala-m': {
year: '2018',
age: '38',
education: 'Post Graduate — MA in Karnataka State Open University Year 2015-2016',
criminalCases: 2,
assets: 'Rs 8,80,50,000',
assetsNum: 88050000,
liabilities: 'Rs 5,41,00,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5916',
},

'k-y-nanjegowda': {
year: '2018',
age: '56',
education: '8th Pass — 9th Standard from Tekal Government High School in 1981',
criminalCases: 1,
assets: 'Rs 26,52,34,954',
assetsNum: 265234954,
liabilities: 'Rs 39,49,10,065',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6400',
},

'byrati-basavaraj': {
year: '2018',
age: '54',
education: '12th Pass — BA incomplete Government commerce colleage Bangalore-1985-1988',
criminalCases: 1,
assets: 'Rs 90,91,01,987',
assetsNum: 909101987,
liabilities: 'Rs 13,68,67,788',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5920',
},

'krishna-byre-gowda': {
year: '2018',
age: '45',
education: 'Post Graduate — MA in international affairs american university Washington DC, USA in the year 1999 & BBM in Christ College, Bangalore in the year 1994',
criminalCases: 0,
assets: 'Rs 12,48,48,680',
assetsNum: 124848680,
liabilities: 'Rs 1,71,77,519',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6087',
},

's-t-somashekhar': {
year: '2018',
age: '60',
education: 'Graduate — B.Sc. Govt.Science College Bengaluru.',
criminalCases: 0,
assets: 'Rs 14,15,99,587',
assetsNum: 141599587,
liabilities: 'Rs 1,24,20,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6110',
},

's-muniraju': {
year: '2018',
age: '59',
education: '10th Pass — SSLC from Bapu Multi Purpose High Schol, Hesaragatta, Bangalore North Taluk',
criminalCases: 0,
assets: 'Rs 36,67,09,080',
assetsNum: 366709080,
liabilities: 'Rs 5,94,33,369',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6088',
},

'k-gopalaiah': {
year: '2018',
age: '57',
education: 'Graduate — BSC From Bangalore University In 1982',
criminalCases: 0,
assets: 'Rs 10,78,29,135',
assetsNum: 107829135,
liabilities: 'Rs 3,75,09,427',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6410',
},

'c-n-ashwath-narayan': {
year: '2018',
age: '50',
education: 'Graduate Professional — M.B.B.S., Kasturba medical College Manglore University, 1995',
criminalCases: 1,
assets: 'Rs 21,50,17,344',
assetsNum: 215017344,
liabilities: 'Rs 1,13,19,033',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6757',
},

'byrathi-suresh': {
year: '2018',
age: '46',
education: '12th Pass — PUC (Pre University Course) from National College, Bangalore Year 991',
criminalCases: 0,
assets: 'Rs 4,16,79,70,876',
assetsNum: 4167970876,
liabilities: 'Rs 41,69,25,397',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=7040',
},

'k-j-george': {
year: '2018',
age: '68',
education: '12th Pass — BA Not completed from Mysore University Year 1969-70, Intermediate from Govt Junior College Ponampet Year 1966-67, High School from Govt Junior College Ponampet Year 1964-65',
criminalCases: 0,
assets: 'Rs 80,37,82,475',
assetsNum: 803782475,
liabilities: 'Rs 48,08,74,477',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6647',
},

's-raghu': {
year: '2018',
age: '48',
education: 'Graduate Professional — Bachelor of Civil Engineer (BE) from Dayananda Sagar College, Bangalore University, Year 1995, Diploma in Civil Engineering from Acharya Pata Shala at Bangalore in 1990',
criminalCases: 0,
assets: 'Rs 31,76,02,361',
assetsNum: 317602361,
liabilities: 'Rs 55,00,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6750',
},

'n-a-haris': {
year: '2018',
age: '51',
education: 'Post Graduate — Master of Arts in History from Karnataka State Open University Year 2005',
criminalCases: 0,
assets: 'Rs 1,90,24,86,142',
assetsNum: 1902486142,
liabilities: 'Rs 9,20,89,951',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6746',
},

'dinesh-gundu-rao': {
year: '2018',
age: '48',
education: 'Graduate Professional — B.E.(E&C) In 1992 From BMC College Bangalore',
criminalCases: 0,
assets: 'Rs 27,16,11,000',
assetsNum: 271611000,
liabilities: 'Rs 1,15,64,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5996',
},

's-suresh-kumar': {
year: '2018',
age: '62',
education: 'Graduate Professional — B.Sc. & L.L.B Benguluru University 1980',
criminalCases: 0,
assets: 'Rs 3,58,41,660',
assetsNum: 35841660,
liabilities: 'Rs 0',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5999',
},

'b-z-zameer-ahmed-khan': {
year: '2018',
age: '51',
education: '8th Pass — SSLC From Discontinued As Siddharth High School Kunigal Tamikur District In 1982-83',
criminalCases: 1,
assets: 'Rs 40,34,43,699',
assetsNum: 403443699,
liabilities: 'Rs 22,78,65,459',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5995',
},

'uday-garudachar': {
year: '2018',
age: '58',
education: 'Graduate Professional — Bachelor Of Engineering (Electronics) From Bangalore University In 1987',
criminalCases: 0,
assets: 'Rs 1,96,08,85,154',
assetsNum: 1960885154,
liabilities: 'Rs 59,27,60,782',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6434',
},

'l-a-ravi-subramanya': {
year: '2018',
age: '60',
education: 'Post Graduate — M.B.A. From CSM Institute Of Graduate Studies 2004, B.A. From Banglore University In 1984',
criminalCases: 0,
assets: 'Rs 6,18,30,750',
assetsNum: 61830750,
liabilities: 'Rs 2,98,60,547',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6032',
},

'r-ashoka': {
year: '2018',
age: '60',
education: 'Graduate — B.Sc. VV Puram College Of Science Banglore University 1979-80',
criminalCases: 0,
assets: 'Rs 40,62,55,521',
assetsNum: 406255521,
liabilities: 'Rs 2,49,91,671',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5931',
},

'ramalinga-reddy': {
year: '2018',
age: '65',
education: 'Graduate',
criminalCases: 0,
assets: 'Rs 66,61,53,408',
assetsNum: 666153408,
liabilities: 'Rs 18,33,70,325',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6029',
},

'm-satish-reddy': {
year: '2018',
age: '46',
education: '10th Pass',
criminalCases: 0,
assets: 'Rs 87,00,08,728',
assetsNum: 870008728,
liabilities: 'Rs 13,55,44,618',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6035',
},

'm-krishnappa-bengaluru-south': {
year: '2018',
age: '56',
education: '10th Pass',
criminalCases: 0,
assets: 'Rs 81,94,61,682',
assetsNum: 819461682,
liabilities: 'Rs 13,80,09,405',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5934',
},

'b-shivanna': {
year: '2018',
age: '50',
education: 'Post Graduate',
criminalCases: 0,
assets: 'Rs 21,01,37,849',
assetsNum: 210137849,
liabilities: 'Rs 0',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6716',
},

'sharath-kumar-bachegowda': {
year: '2018',
age: '36',
education: 'Post Graduate',
criminalCases: 1,
assets: 'Rs 1,12,50,02,210',
assetsNum: 1125002210,
liabilities: 'Rs 2,26,77,401',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6075',
},

'd-k-shivakumar': {
year: '2018',
age: '55',
education: 'Post Graduate',
criminalCases: 4,
assets: 'Rs 8,40,01,67,045',
assetsNum: 8400167045,
liabilities: 'Rs 2,28,27,02,677',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=5940',
},

'p-m-narendraswamy': {
year: '2018',
age: '55',
education: 'Graduate Professional',
criminalCases: 0,
assets: 'Rs 29,03,97,246',
assetsNum: 290397246,
liabilities: 'Rs 2,65,90,217',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6594',
},

'c-n-balakrishna': {
year: '2018',
age: '49',
education: 'Graduate',
criminalCases: 0,
assets: 'Rs 2,31,03,040',
assetsNum: 23103040,
liabilities: 'Rs 1,18,85,713',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6354',
},

'k-m-shivalinge-gowda': {
year: '2018',
age: '60',
education: 'Graduate',
criminalCases: 0,
assets: 'Rs 9,42,99,541',
assetsNum: 94299541,
liabilities: 'Rs 5,00,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6610',
},

'h-d-revanna': {
year: '2018',
age: '60',
education: '10th Pass',
criminalCases: 0,
assets: 'Rs 29,70,51,951',
assetsNum: 297051951,
liabilities: 'Rs 4,95,55,757',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6347',
},

'harish-poonja': {
year: '2018',
age: '36',
education: 'Graduate Professional (B.A., Mangalore University, 2004; LLB, Mangalore University, 2008)',
criminalCases: 2,
assets: 'Rs 2,99,03,661',
assetsNum: 29903661,
liabilities: 'Rs 1,51,41,480',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6616',
},

'umanatha-kotian': {
year: '2018',
age: '58',
education: '10th Pass (SSLC, SVS High School, Bantvala, 1979)',
criminalCases: 3,
assets: 'Rs 1,60,83,941',
assetsNum: 16083941,
liabilities: 'Rs 47,12,942',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6617',
},

'bharath-shetty-y': {
year: '2018',
age: '47',
education: 'Post Graduate (MDS, RGUHS, Bangalore, 1998)',
criminalCases: 0,
assets: 'Rs 16,09,19,646',
assetsNum: 160919646,
liabilities: 'Rs 1,32,97,696',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6620',
},

'd-vedavyas-kamath': {
year: '2018',
age: '40',
education: 'Graduate (B.Com., Canara College, Mangalore University, 2000)',
criminalCases: 0,
assets: 'Rs 18,72,68,696',
assetsNum: 187268696,
liabilities: 'Rs 86,20,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6629',
},

'u-t-khader': {
year: '2018',
age: '49',
education: 'Graduate Professional (B.A., 1994 & LLB, 2003; Mangalore University, S.D.M. Law College)',
criminalCases: 0,
assets: 'Rs 2,47,16,913',
assetsNum: 24716913,
liabilities: 'Nil',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6635',
},

'u-rajesh-naik': {
year: '2018',
age: '59',
education: 'Graduate (B.Sc., J.S.S. College, Mysore, 1978; PUC, St. Aloysius Jr. College, Mangalore)',
criminalCases: 1,
assets: 'Rs 26,69,48,122',
assetsNum: 266948122,
liabilities: 'Rs 6,87,19,051',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6066',
},

'k-venkatesh': {
year: '2018',
age: '70',
education: 'Graduate (B.Sc., Yuvaraja College, Mysore, 1971-72)',
criminalCases: 0,
assets: 'Rs 10,07,56,081',
assetsNum: 100756081,
liabilities: 'Nil',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6070',
},

'd-ravishankar': {
year: '2018',
age: '42',
education: 'Graduate Professional (BA LLB)',
criminalCases: 0,
assets: 'Rs 7,10,54,514',
assetsNum: 71054514,
liabilities: 'Rs 1,17,03,168',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6065',
},

'anil-chikkamadhu': {
year: '2018',
age: '29',
education: '10th Pass (Talent High School, Hunsuru, 2005)',
criminalCases: 0,
assets: 'Rs 2,64,16,899',
assetsNum: 26416899,
liabilities: 'Rs 2,98,29,291',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6060',
},

'g-t-devegowda': {
year: '2018',
age: '68',
education: '8th Pass (Govt. High School, Ilaval, Mysuru, 1966)',
criminalCases: 0,
assets: 'Rs 16,77,60,116',
assetsNum: 167760116,
liabilities: 'Rs 6,39,41,590',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6026',
},

'k-harish-gowda': {
year: '2018',
age: '45',
education: 'Graduate (B.A., Maharaja College, Mysore, 1990)',
criminalCases: 0,
assets: 'Rs 1,32,90,273',
assetsNum: 13290273,
liabilities: 'Rs 75,00,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6678',
},

'tanveer-sait': {
year: '2018',
age: '51',
education: 'Graduate Professional (BBM, Vidya Vardhaka College of Commerce & Management, University of Mysore, 1992)',
criminalCases: 0,
assets: 'Rs 10,04,13,484',
assetsNum: 100413484,
liabilities: 'Rs 83,34,235',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6676',
},

'siddaramaiah': {
year: '2018',
age: '69',
education: 'Graduate Professional (LLB, Sharda Vilas Law College, Mysore, 1972)',
criminalCases: 0,
assets: 'Rs 20,36,54,358',
assetsNum: 203654358,
liabilities: 'Rs 4,86,32,239',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6914',
},

'h-c-mahadevappa': {
year: '2018',
age: '65',
education: 'Graduate Professional (MBBS, JJM Medical College, Davanagere, 1999)',
criminalCases: 0,
assets: 'Rs 2,77,52,980',
assetsNum: 27752980,
liabilities: 'Rs 39,31,900',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6671',
},

'a-r-krishnamurthy': {
year: '2018',
age: '57',
education: 'Post Graduate (Degree, Mariyappa College, 1981; PG Diploma in Journalism, 1988)',
criminalCases: 0,
assets: 'Rs 2,54,45,204',
assetsNum: 25445204,
liabilities: 'Rs 51,80,887.18',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6493',
},

'c-puttarangashetty': {
year: '2018',
age: '64',
education: 'Graduate (B.A., Mahadeshwara College, Kollegala, Mysore University, 1981-82)',
criminalCases: 0,
assets: 'Rs 3,39,37,023',
assetsNum: 33937023,
liabilities: 'Rs 3,00,000',
mynetaUrl: 'https://myneta.info/karnataka2018/candidate.php?candidate_id=6007',
},

// ABSENT 2018 (verified — 62 MLAs ne 2018 me Karnataka Assembly nahi ladi):
// - a-kiran-kumar-kodgi: 2018 Kundapur suchi me naam nahi (winner Halady Srinivas Shetty, BJP); 2023 me BJP se debut
// - a-s-ponnanna: 2018 Virajpet suchi me naam nahi (BJP se K G Bopaiah jeete, INC se C S Arun Machaiah); Assembly debut 2023
// - ashok-kumar-rai: 2018 Puttur suchi me naam nahi (BJP se Sanjeev Matandoor jeete; INC se Shakunthala, JD(S) se Kailas Gowda); Rai ne 2023 se pehle BJP chhodkar INC join
// - ashok-mallappa-managuli: 2021 Sindgi upchunav me debut; 2018 me pita M.C. Managuli (JD(S)) Sindgi se jeete the (70,865 vs BJP Ramesh Bhusanur 61,560) — HT bypoll article + myn
// - asif-raju-sait: 2018 Belgaum Uttar INC ummidwar Fairoz Nuruddin Saith the (sitting MLA) — alag vyakti, namesake trap se bache.
// - avinash-umesh-jadhav: 2018 Chincholi me pita Dr. Umesh G. Jadhav (INC) lade aur jeete (FE: 19,212 maton se).
// - b-b-chimmanakatti: 2023 page me koi Other Elections section nahi — 2023 debut (2018 Badami INC ummidwar Siddaramaiah the).
// - b-m-nagaraja: 2023 page ke "Other Elections" me sirf Karnataka 2013 (Rs 1,27,37,032, 3 cases) — 2018 ka koi record nahi; 2018 me Siruguppa se INC ticket Murali Kris
// - b-y-vijayendra: 2018 me Shikaripura se B.S. Yediyurappa (BJP) jeete; Vijayendra ne 2018 me Assembly chunaav nahi lada — 2023 debut.
// - basavaraj-neelappa-shivannanavar: 2018 Byadgi se INC ke S. R. Patil lade; ballot par nahi the.
// - basavaraju-v-shivaganga: 2023 page (candidate_id=7898) par "Other Elections" section hi nahi — 2023 debut; 2018 me Channagiri se INC ticket Vadnal Rajanna ko mili thi.
// - belur-gopalkrishna: 2018 Sagar ki poori candidate suchi me naam nahi; 2018 me INC se unke chacha Kagodu Thimmappa lade (haare — winner H Halappa, BJP); 2023 wale page ke 
// - bhageerathi-murulya: 2018 Sullia winner Angara S (BJP); unka naam 2018 suchi me nahi — Assembly debut 2023
// - c-k-ramamurthy: Jayanagar 2018 me Sowmya Reddy (INC) jeeti thi (myneta winners list).
// - cement-manju: Sakleshpur 2018 me H.K. Kumaraswamy (JD-S) jeeta.
// - chandru-lamani: 2018 Shirahatti se Ramappa S. Lamani (BJP) lade/jeete.
// - channareddy-patil-tunnur: pehli baar 2023 me MLA bane; 2018 Yadgir me BJP Venkatreddy Mudnal jeete (62,227 vs INC Dr. A. B. Malaka Reddy 49,346; margin 12,881).
// - darshan-dhruvanarayana: TOI ne kaha "This is the first time he is contesting the polls" (2023); 2018 Nanjangud winner B. Harshavardhan (BJP) — Assembly debut 2023
// - dheeraj-muniraj: Doddaballapur 2018 me T. Venkataramanaiah (INC) jeeta.
// - e-annapoorna-tukaram: Nov 2024 Sandur upchunav vijeta — 2018 me nahi ladi.
// - g-d-harish-gowda: 2018 Hunsur ki POORI candidate suchi (oneindia/ECI) me naam nahi — winner A.H. Vishwanath (JD(S), 91,667), runner-up H.P. Manjunath (INC, 83,092), BJP
// - g-h-srinivasa: 2018 Tarikere suchi me naam nahi (INC se S M Nagaraju lade, winner D S Suresh, BJP); 2023 me INC se debut
// - gurme-suresh-shetty: 2018 Kaup suchi me naam nahi (winner Lalaji R Mendon, BJP); 2023 me BJP se debut
// - gururaj-shetty-gantihole: 2018 Byndoor suchi me naam nahi (winner B M Sukumar Shetty, BJP); 2023 me BJP se debut
// - h-d-thammaiah: 2018 Chikmagalur suchi me naam nahi (INC se Shankar B L lade, winner C T Ravi, BJP); 2023 me INC se debut
// - h-m-ganesh-prasad: 2018 Gundlupet me INC se M.C. Mohan Kumari (Geetha) ladi aur haari (winner C.S. Niranjan Kumar, BJP, 94,151 vs 77,467); newindianexpress (Apr 2023) ne
// - h-t-manju: Krishnarajapet 2018 me Narayanagowda (JD-S) jeeta; INC ummidwar K.B. Chandrashekar tha.
// - h-v-venkatesh: 2018 Pavagada suchi me naam nahi (INC se Venkataramanappa lade aur jeete); 2023 me INC se debut
// - j-n-ganesh: 2018 page URL mil gaya (https://myneta.info/karnataka2018/candidate.php?candidate_id=6946 — myneta affidavitComparison URL se nikala, title: J N Ganes
// - jagadeesh-shivayya-gudagunti: 2018 Jamkhandi me nahi lade (BJP = Shrikant Kulkarni; Nov-2018 upchunav me bhi Kulkarni hi BJP ummidwar the); 2013 me IND lade the; 2023 BJP debut win
// - k-h-muniyappa: Devanahalli 2018 me L.N. Narayanaswamy (JD-S) jeeta; Muniyappa tab Kolar ke MP the (2009-2019).
// - k-h-puttaswamy-gowda: 2018 Gauribidanur suchi me naam nahi (INC se N H Shivashankara Reddy lade aur jeete); 2023 me IND se jeete
// - k-m-udaya: Maddur 2018 me D.C. Thammanna (JD-S) jeeta; INC ummidwar G.M. Madhu tha.
// - karemma: 2018 Devadurga me JD(S) se Venkatesh Poojary lade (timesnow 2018 candidate list); Karemma (D/o Gopalakrishna) 2018 me nahi ladi; pehli jeet 2023.
// - kothur-g-manjunatha: 2018 me Mulbagal se INC ummidwar ghoshit hue the lekin HC ne caste certificate radd kiya; Kolar se independent + Mulbagal se INC nomination bhare, don
// - krishna-nayaka: 2018 me Hadagali se nahi lade — BJP ticket Chandranaik B ko mili thi; 2023 debut.
// - latha-mallikarjun: 2023 page (candidate_id=8971) par "Other Elections" section hi nahi — 2023 se pehle kabhi nahi ladi; 2018 me Harapanahalli se INC ticket M P Ravindra 
// - m-r-patil: 2018 Kundgol se BJP ke C. S. Ishwaragod lade; jeete C. S. Shivalli (INC).
// - mahendra-kallappa-tammannavar: 2023 page ke Other Elections me sirf Karnataka 2013; 2018 Kudachi INC ummidwar Amit Shama Ghatge the.
// - mahesh-tenginakai: 2018 Hubli-Dharwad Central se Jagadish Shettar (BJP) lade/jeete.
// - manjula-s: Mahadevapura 2018 me Arvind Limbavali (BJP) jeeta tha.
// - mantar-gowda: 2018 Madikeri suchi me naam nahi (BJP se Appachu Ranjan jeete); 2021 MLC haare, Assembly debut 2023
// - n-shreenivasaiah: Nelamangala 2018 me Dr K. Sreenivasamurthy (JD-S) jeeta (zeenews JD-S winners list bhi confirm).
// - n-t-srinivas: 2018 me Kudligi se nahi lade — INC ticket Raghu Gujjal ko mili thi (jeete BJP ke N Y Gopalakrishna); 2023 debut.
// - nara-bharath-reddy: 2023 page (candidate_id=7861) par "Other Elections" section hi nahi — 2023 debut; 2018 me Bellary City se INC ticket Anil H Lad ko mili thi.
// - nayana-motamma: 2018 Mudigere me "Motamma" (INC) unki MAA thi — 2018 halafname me umr 67 (Nayana 2023 me 43); winner M P Kumaraswamy (BJP); Nayana ka Assembly debut 2
// - nikhil-umesh-katti: 2023 page me koi Other Elections section nahi — 2023 debut (pita Umesh Katti 2018 BJP Hukkeri winner the).
// - pradeep-eshwar: 2018 Chikkaballapur suchi me naam nahi (INC se Dr K Sudhakar lade aur jeete); 2023 me INC se debut
// - prakash-koliwad: 2018 Ranebennur se INC ke K. B. Koliwad (pita Krishnappa Koliwad) lade; Prakash ballot par nahi the.
// - raja-venugopal-naik: 2024 Shorapur upchunav me debut; 2018 me pita Raja Venkatappa Naik (INC) Shorapur se lade, BJP Narasimha Nayak se haare (1,04,426 vs 81,858; margin 22
// - rizwan-arshad: 2018 me Assembly nahi lade — pehli baar Dec 2019 me Shivajinagar upchunav (INC) jeete; 2014 aur 2019 me Bangalore Central se Lok Sabha lade, dono haar
// - s-n-channabasappa: 2023 page (candidate_id=8286) par "Other Elections" section hi nahi — 2023 debut; 2018 me Shimoga se INC ticket K.B. Prasanna Kumar ko mili thi.
// - samarth-mallikarjun: Apr 2026 Davanagere South upchunav vijeta — 2018 me nahi lade.
// - sharana-gowda-kandakur: pehli baar 2023 me MLA bane; 2018 Gurmitkal me pita Naganagouda Kandkur (JD(S)) jeete (79,627 vs INC Baburao Chinchansur 55,147; margin 24,480).
// - sharanu-salagar: 2021 Basavakalyan upchunav me debut (B. Narayanrao ke nidhan ke baad); 2018 me B. Narayanrao (INC) jeete, BJP se Mallikarjun Khuba the (timesnow 2018 
// - siddu-patil: 2018 Humnabad me BJP se Shubhash Kallur lade (43,131 vote; haare INC Rajashekar Patil 74,945 se, margin 31,814) — Siddu Patil (S/o Nagbhushan) 2018 me
// - swaroop-prakash: Hassan 2018 me Preetham Gowda (BJP) jeeta; JD-S ummidwar inke pita H.S. Prakash the.
// - t-s-srivatsa: starofmysore ne kaha 2023 me "contested the polls for the first time"; 2018 Krishnaraja winner S.A. Ramadas (BJP) — Assembly debut 2023
// - timmapur-ramappa-balappa: 2023 page ke Other Elections me sirf Karnataka 2013; 2018 Mudhol INC ummidwar Satish Bandiwaddar the.
// - umesh-hullappa-meti: Apr 2026 upchunav me debut (pita H. Y. Meti ke 4 Nov 2025 nidhan ke baad); 2018 Bagalkot INC ummidwar H. Y. Meti the.
// - yashpal-anand-suvarna: 2018 Udupi suchi me naam nahi (winner K Raghupathi Bhat, BJP); 2023 me BJP se debut
// - yasir-ahmed-khan-pathan: Nov 2024 Shiggaon upchunav vijeta — 2018 me nahi lade.

// RETRY LEADS (parent/live-browser — 41 MLAs):
// - a-c-srinivasa: 2018 INC, Mahadevapura (SC) (Loser) — 2018 myneta page ka URL search me nahi mila. ADR preliminary 2018: 1 case (3 serious IPC), ~Rs 88 cr assets, ~Rs
// - a-manju: 2018 me INC se Arkalgud se lade, haare A.T. Ramaswamy (JD-S) se (10,653 margin). 2018 page abhi search nahi kiya.
// - aravind-bellad: 2018 page 6192 ka header render nahi hua (Age 48 confirmed, Education-exact nahi mila; assets Rs75,20,01,000, liabilities Rs19,74,72,000, cases 0).
// - b-k-sangameshwara: 2018 me Bhadravati se INC winner (75,722 vs M.J. Appaji Gowda, JD(S), 64,155). 2023 page (candidate_id=7866) ke Other Elections me 2018 assets Rs 3,07
// - babasaheb-devanagouda-patil: 2018 IND KITTUR Loser (25,366 votes, teesre; ticket na milne par INC se bagawat). 2023 page OE: 2018 Rs6,10,32,176/0 cases. 2018 candidate page ka URL
// - basangouda-patil-yatnal: 2018 candidate page ka URL nahi mila (winners list + web search me anupasthit). Lead: 2023 page (candidate_id=6944) ke Other Elections table se 2018: 
// - basavaraj-rayareddy: 2018 page 6543 ka header render nahi hua (Age/Education-exact nahi mila; assets Rs31,57,11,491, liabilities Rs4,50,00,000, cases 0).
// - bharamgouda-alagouda-kage: 2018 BJP KAGWAD Loser (haare Shrimant Patil, INC; 50,118 vs 83,060). 2023 page OE: 2018 Rs6,37,74,846/1 case. 2018 candidate page ka URL kai search me
// - bhimanna-t-naik: 2018 page 6563 ka header render nahi hua (Age/Education-exact/Liabilities nahi mile; assets Rs31,22,05,561, cases 1).
// - c-c-patil: 2018 page URL nahi mila (2018: BJP, NARGUND, Winner; assets Rs7,38,05,833, liabilities Rs1,38,92,878, cases 0).
// - c-p-yogeshwara: 2018 me BJP se Channapatna se lade, haare H.D. Kumaraswamy se. 2018 URL MILA — https://myneta.info/karnataka2018/candidate.php?candidate_id=6593 (affi
// - darshan-puttannaiah: 2018 me Swaraj India se Melukote se lade, haare C.S. Puttaraju (JD-S) se (22,224 margin; 73,779 vote). 2018 page abhi search nahi kiya.
// - eshwar-khandre: 2018 candidate page ka URL nahi mila (winners list me bhi anupasthit). Lead: 2023 page (candidate_id=7146) ke Other Elections se 2018: Rs 10,36,07,772
// - gurupadagouda-patil: 2018 page URL nahi mila (2018: INC, RON, Loser; assets Rs5,57,66,071, cases 0).
// - h-a-iqbal-hussain: 2018 me INC se Ramanagaram se lade, haare H.D. Kumaraswamy se (22,636 margin; 69,990 vote). 2018 page nahi mila. S/o Late Abdul Basheer Sab.
// - h-c-balakrishna: 2018 me INC se Magadi se lade, haare A. Manjunath (JD-S) se (51,425 margin; 68,067 vote). 2008/2013 ke JD-S pages mile, 2018 ka INC page indexed nahi 
// - h-k-suresh: 2018 me BJP se Belur se lade, haare K.S. Lingesh (JD-S) se. 2018 page abhi search nahi kiya.
// - h-r-gaviyappa: 2018 me Vijayanagara se BJP ke roop me lade (haare Anand Singh, INC se, 74,986 vs 83,214 — The Hindu se satyapit). 2023 page (candidate_id=7385) ke Ot
// - k-c-veerendra-puppy: 2018 me Chitradurga se JD(S) (2nd, 49,911 vs G.H. Thippareddy, BJP, 82,896). ~5 searches ke baad bhi 2018 candidate page ka URL nahi mila.
// - katakadhond-vitthal-dondiba: 2018 candidate page ka URL nahi mila. Lead: 2023 page (candidate_id=7596) ke Other Elections se 2018: Rs 2,77,07,733 / 1 case. 2018: INC, NAGTHAN (SC)
// - m-krishnappa-vijay-nagar: 2018 myneta page URL mil gaya (candidate_id=6980, INC Vijay Nagar Winner) lekin header render nahi hua (do baar try kiya). Winners list se: 2 cases, G
// - m-r-manjunath: 2018 me Hanur se JD(S) ticket par lade aur haare (44,957 vote, teesre; winner R. Narendra, INC, 60,444 — oneindia + financialexpress se verified); wah
// - munirathna: 2018 myneta page URL mil gaya (candidate_id=6406, INC Rajarajeshwarinagar Winner) lekin header render nahi hua. Winners list se: 3 cases, 10th Pass, R
// - n-chaluvaraya-swamy: 2018 me INC se Nagamangala se lade, haare Suresh Gowda (JD-S) se. 2018 page abhi search nahi kiya.
// - n-h-konaraddi: 2018 page URL nahi mila (2018: JD(S), NAVALGUND, Loser; assets Rs4,87,52,498, cases 0).
// - priya-krishna: 2018 INC, Govindraj Nagar (Loser) — 2018 myneta page ka URL search me nahi mila. citizenmatters tracker + 2013-page Other Elections se: 2018 assets Rs
// - ramesha-bandisiddegowda: 2018 me INC se Shrirangapattana se lade, haare Ravindra Srikantaiah (JD-S) se. 2018 page abhi search nahi kiya.
// - ravikumar-gowda: 2018 me INC se "P. Ravikumar" naam se Mandya se lade, haare M. Srinivas (JD-S) se (69,421 margin; 47,813 vote). 2018 page abhi search nahi kiya.
// - rudrappa-manappa-lamani: 2018 me Haveri se INC (haare Neharu Olekar, BJP se, 86,565 vs 75,261 — Financial Express). 2023 page (candidate_id=6817, khola gaya) ke Other Elections me 2018 assets Rs 4,85,36,312, cases 2 — lekin karnataka2018 candidate page ka URL/header nahi mila; compare_profile page JS-rendered (dead end).
// - s-n-narayanaswamy-k-m: 2018 myneta page URL mil gaya (candidate_id=5917, INC Bangarapet Winner) lekin page header (age/S/o/education) text-extraction me render nahi hua — si
// - s-r-vishwanath: 2018 myneta page URL mil gaya (candidate_id=5919, BJP Yelahanka Winner) lekin header render nahi hua. Winners list se: 0 cases, Others, Rs 43,11,60,16
// - s-s-mallikarjun: 2018 me Davanagere North se INC (haare S.A. Ravindranath, BJP se, 72,469 vs 76,540). 2023 page (candidate_id=6799) ke Other Elections me 2018 assets R
// - samruddhi-v-manjunath: 2018 JD(S), Mulbagal (Loser) — 2018 myneta page ka URL search me nahi mila. 2023 page (id 7587) Other Elections se 2018 ka khaka: Rs 5,78,38,470/0 cas
// - santosh-lad: 2018 page 6933 ka header render nahi hua (Age/Education-exact/Liabilities nahi mile; assets Rs1,88,84,76,200, cases 0).
// - satish-krishna-sail: 2018 page URL nahi mila (2018: INC, KARWAR, Loser; assets Rs63,72,50,557, cases 8).
// - sharanprakash-rudrappa-patil: 2018 candidate page ka URL nahi mila. Lead: 2013 page ke Other Elections se 2018: Rs 3,80,37,429 / 0 cases. 2018: INC, SEDAM, Loser (BJP Rajkumar Pati
// - shashikala-annasaheb-jolle: 2018 BJP NIPPANI Winner (haare Kakaso Patil, INC). Page candidate_id=6656 ka header extract nahi hota (5 koshishen: http/https/print). Winners list se
// - shivanand-patil: 2018 INC BASAVANA BAGEVADI Winner (haare Sangaraj Desai, BJP, 3,186 se). Page candidate_id=6108 ka header extract nahi hota (4 koshishen). Winners lis
// - shivaraj-tangadagi: 2018 page URL nahi mila (2018: INC, KANAKAGIRI, Loser; assets Rs5,28,19,328, cases 0).
// - ujaneshwar-basavannappa-banakar: 2018 page URL nahi mila (2018: BJP, HIREKERUR, Loser; party KJP vs BJP discrepancy bhi hai).
// - vijayanand-shivashankarappa-kashappanavar: 2018 INC HUNGUND Loser (haare Doddanagouda Patil, BJP; 59,785 vs 65,012). 2023 page OE: 2018 Rs9,73,99,168/4 cases. 2018 candidate page ka URL kai sea

};

// 2019 vs 2024 affidavit comparison for Odisha MLAs.
// Coverage: 94 of 147 sitting (2024/2025) MLAs (64%) have a verified 2019 myneta.info/odisha2019
// (LOWERCASE folder — uppercase 404 deta hai) affidavit record. Every covered candidate page was
// opened and read; identity verified by name + 2019 constituency + myneta "Other Elections"
// cross-year linkage (winner/loser dono shamil — affidavit hi tulna ka aadhaar hai).
// Party/seat shifts 2019->2024: nihar-ranjan-mahanand INC->BJP; rohit-joseph-tirkey INC->BJD;
// santosh-khatua BJD->BJP; biswa-ranjan-mallick BJP->BJD; simarani-nayak BJD->BJP;
// adhiraj-mohan-panigrahi INC->BJD; akhila-chandra-naik IND->BJP; bijaya-kumar-dalabehera BJP->IND;
// sarada-prasad-padhan BJP->IND; ganeswar-behera INC->BJD; ramakanta-bhoi BJP->BJD;
// dusmanta-kumar-swain IND->BJP; naba-kishor-mallick IND->BJD; pradip-kumar-sahu INC->BJD;
// prasanta-kumar-jagadev BJD Chilika->BJP Khurda; sanjib-kumar-mallick 2019 Bhadrak se lade
// (ab Bhandaripokhari ke MLA hain); prithviraj-harichandan 2019 me Chilika se haare the.
// Criminal cases 2019->2024: notable rises — bijaya-kumar-dalabehera 6->17,
// rabi-narayan-naik 8->17, gouri-shankar-majhi 0->8, dr-krushna-chandra-mahapatra 8->15,
// surama-padhy 1->8, laxman-munda 14->20, om-prakash-mishra 2->8, bibhuti-bhushan-jena 4->10,
// babu-singh 0->4, rama-chandra-kadam 0->4, nilamadhab-hikaka 0->1, kadraka-appala-swamy 2->6;
// notable drops — ramesh-chandra-jena 51->42, sarada-prashad-nayak 9->1,
// krushna-chandra-patra 6->3, dibya-shankar-mishra 3->0, pradeep-bal-samanta 2->0,
// devi-ranjan-tripathy 2->0.
// Asset rises 2019->2024 (sabse bade): rohit-joseph-tirkey Rs 1.29L->Rs 35.11L (~27x),
// souvic-biswal Rs 20.69L->Rs 5.04cr (~24x), bibhuti-bhushan-jena Rs 10.55L->Rs 2.23cr (~21x),
// sagar-charan-das Rs 11.02L->Rs 1.23cr (~11x), sarada-prashad-nayak Rs 13.30L->Rs 1.21cr (~9x).
// Asset falls: satrughan-jena Rs 2.22cr->Rs 90.15L, ananta-narayan-jena Rs 3.10cr->Rs 1.62cr.
// 51 without a 2019 Vidhan Sabha record (all verified absent from 2019 candidate lists):
// barsha-singh-bariha (debut Dec 2022 bypoll), suresh-pujari (2019 me Bargarh Lok Sabha),
// tankadhar-tripathy (debut May 2023 bypoll), durga-charan-tanti (2024 debut),
// sudarshan-haripal (2024 debut), prasanna-acharya (2019 me Bargarh Lok Sabha),
// fakir-mohan-naik (2019 me Keonjhar Lok Sabha), abhimanyu-sethi (2019 me Bhadrak Lok Sabha),
// sanatan-mahakud (2019 me chunav nahi lada), bhadav-hansdah (2024 debut),
// jalen-naik (2024 debut), sanjali-murmu (2024 debut), suryabanshi-suraj (debut Nov 2022 bypoll),
// sitansu-sekhar-mohapatra (2024 debut), goutam-buddha-das (2024 debut), subasini-jena (2024 debut),
// manas-kumar-dutta (debut Nov 2020 bypoll), madhab-dhada (2024 debut),
// himanshu-sekhar-sahoo (2024 debut), sujata-sahu (2024 debut), akash-dasnayak (2024 debut),
// nalini-kanta-pradhan (pehla VS chunav 2024; 2019 me Lok Sabha), nabin-kumar-jain (2024 debut),
// jay-dholakia (debut Nov 2025 bypoll), narsing-bhatra (2024 debut),
// sudhir-ranjan-pattjoshi (2024 debut), manorama-mohanty (2024 debut),
// prafulla-chandra-pradhan (2024 debut), uma-charan-mallick (2024 debut),
// saroj-kumar-pradhan (2024 debut), sofia-firdous (2024 debut), prakash-chandra-sethi (2024 debut),
// arvind-mohapatra (2024 debut), durga-prasan-nayak (2024 debut),
// sarada-prasanna-jena (2024 debut), amarendra-das (2024 debut),
// sunil-kumar-mohanty (2024 debut), upasna-mohapatra (2024 debut),
// rupesh-kumar-panigrahi (2024 debut), satyajeet-gomango (2024 debut),
// pratap-chandra-nayak (2019 me ticket nahi), purna-chandra-sethy (2019 me ticket nahi),
// krushna-chandra-nayak (2019 me ticket nahi), saroj-kumar-padhi (2019 me ticket nahi),
// k-anil-kumar (2024 debut), sidhant-mohapatra (2024 debut), narasinga-madkami (2024 debut),
// mangu-khilla (2024 debut), pabitra-saunta (2024 debut), rupu-bhatra (2024 debut),
// raghuram-machha (2014 me lade the, 2019 me nahi).
// Pending (page nahi mila, retry lead): gobinda-chandra-das (2019 me Remuna se BJP ticket par
// lade the — myneta odisha2019 comparison chart me BJP candidate ka record hi missing hai;
// unke 2024 page ke Other-Elections me bhi 2019 ka link nahi).
// Scope-bahar: kalikesh-narayan-singh-deo (2019 me Bolangir Lok Sabha lade the, Vidhan Sabha nahi).
// Data-confidence note: aankde self-declared halafname hain; asset totals myneta ke computed
// totals hain; ye file koi inference ya comment nahi karti — tulna section ke liye tathya matra.
// Dibya Shankar Mishra ki 2019 age (50) unke 2024 page ke Other-Elections chain
// (2024 age 55) se li gayi hai — 2019 page ka header text-fetch me render nahi hua tha.
import type { PrevAffidavit } from './pilot';

export const prevOdisha: Record<string, PrevAffidavit> = {

  'sanat-kumar-gartia': {
  year: '2019',
  age: '53',
  education: '12th Pass (H.S.C., Board of Secondary Education Odisha, 1982; Diploma in Computer Studies, National Computing Centre UK, 1988)',
  criminalCases: 0,
  assets: 'Rs 2,70,70,337',
  assetsNum: 27070337,
  liabilities: 'Rs 1,55,051',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4847',
  },
// 2019: BJP, Bijepur

  'ashwini-kumar-sarangi': {
  year: '2019',
  age: '47',
  education: 'Post Graduate (M.Com, Panchayat College Bargarh, Sambalpur University, 1996)',
  criminalCases: 0,
  assets: 'Rs 46,25,192',
  assetsNum: 4625192,
  liabilities: 'Rs 3,21,624',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4849',
  },
// 2019: BJP, Bargarh

  'nihar-ranjan-mahanand': {
  year: '2019',
  age: '42',
  education: 'Graduate (B.A., Barpali College, 1998)',
  criminalCases: 10,
  assets: 'Rs 26,84,488',
  assetsNum: 2684488,
  liabilities: 'Rs 1,75,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4856',
  },
// 2019: INC, Attabira (SC)

  'irasis-acharya': {
  year: '2019',
  age: '34',
  education: 'Post Graduate (Master in Law, Cardiff University, UK, 2013)',
  criminalCases: 2,
  assets: 'Rs 1,90,45,748',
  assetsNum: 19045748,
  liabilities: 'Rs 49,65,156',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4858',
  },
// 2019: BJP, Bhatli

  'bhabani-shankar-bhoi': {
  year: '2019',
  age: '38',
  education: '12th Pass (+2 Arts, Anchalik Sahayog College Subdega, CHSE Bhubaneswar, 1998)',
  criminalCases: 0,
  assets: 'Rs 23,17,293',
  assetsNum: 2317293,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4887',
  },
// 2019: BJP, Talsara (ST)

  'jogesh-kumar-singh': {
  year: '2019',
  age: '45',
  education: 'Graduate (B.A., S.R.D.M.N.P. College Sargipali, Sambalpur University, 1998)',
  criminalCases: 1,
  assets: 'Rs 2,44,34,000',
  assetsNum: 24434000,
  liabilities: 'Rs 19,17,945',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4891',
  },
// 2019: BJD, Sundargarh (ST)

  'rohit-joseph-tirkey': {
  year: '2019',
  age: '29',
  education: 'Graduate (B.Com, B.J.B. College Bhubaneswar, Utkal University)',
  criminalCases: 0,
  assets: 'Rs 1,29,021',
  assetsNum: 129021,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4898',
  },
// 2019: INC, Biramitrapur (ST)

  'sarada-prashad-nayak': {
  year: '2019',
  age: '60',
  education: 'Others (Diploma in Electrical Engineering, UGIE Rourkela, 1980)',
  criminalCases: 9,
  assets: 'Rs 13,30,000',
  assetsNum: 1330000,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4915',
  },
// 2019: BJD, Rourkela

  'c-s-raazen-ekka': {
  year: '2019',
  age: '46',
  education: 'Graduate Professional (MBBS, VSS Medical College Burla, 1996)',
  criminalCases: 0,
  assets: 'Rs 97,61,310',
  assetsNum: 9761310,
  liabilities: 'Rs 3,83,177',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4924',
  },
// 2019: INC, Rajgangpur (ST)

  'laxman-munda': {
  year: '2019',
  age: '56',
  education: 'Graduate (B.A., Bonaigarh College, Sambalpur University, 1988)',
  criminalCases: 14,
  assets: 'Rs 30,17,671',
  assetsNum: 3017671,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5856',
  },
// 2019: CPIM, Bonai (ST)

  'rabi-narayan-naik': {
  year: '2019',
  age: '49',
  education: '12th Pass',
  criminalCases: 8,
  assets: 'Rs 77,87,579',
  assetsNum: 7787579,
  liabilities: 'Rs 1,10,867',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5498',
  },
// 2019: BJP, Kuchinda (ST)

  'jayanarayan-mishra': {
  year: '2019',
  age: '56',
  education: 'Graduate',
  criminalCases: 11,
  assets: 'Rs 1,33,23,403',
  assetsNum: 13323403,
  liabilities: 'Rs 8,00,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5638',
  },
// 2019: BJP, Sambalpur

  'romanch-ranjan-biswal': {
  year: '2019',
  age: '37',
  education: '12th Pass',
  criminalCases: 3,
  assets: 'Rs 4,85,25,000',
  assetsNum: 48525000,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5276',
  },
// 2019: BJD, Deogarh

  'badri-narayan-patra': {
  year: '2019',
  age: '75',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 1,32,07,533',
  assetsNum: 13207533,
  liabilities: 'Rs 10,47,904',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5459',
  },
// 2019: BJD, Ghasipura

  'mohan-charan-majhi': {
  year: '2019',
  age: '47',
  education: 'Graduate Professional',
  criminalCases: 2,
  assets: 'Rs 1,03,42,864',
  assetsNum: 10342864,
  liabilities: 'Rs 1,41,09,837',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5468',
  },
// 2019: BJP, Keonjhar (ST)

  'akhila-chandra-naik': {
  year: '2019',
  age: '58',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 99,80,721',
  assetsNum: 9980721,
  liabilities: 'Rs 18,00,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5347',
  },
// 2019: IND, Patna (ST)

  'ganesh-ram-singh-khuntia': {
  year: '2019',
  age: '43',
  education: 'Others (Diploma in Civil Engineering, 1994, BOSE, Cuttack)',
  criminalCases: 0,
  assets: 'Rs 64,97,727',
  assetsNum: 6497727,
  liabilities: 'Rs 45,60,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5587',
  },
// 2019: BJP, Jashipur

  'padma-charan-haiburu': {
  year: '2019',
  age: '58',
  education: 'Post Graduate (M.A. in History, 1986, Jyoti Vihar University, Burla, Sambalpur)',
  criminalCases: 0,
  assets: 'Rs 28,43,148',
  assetsNum: 2843148,
  liabilities: 'Rs 7,22,990',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5437',
  },
// 2019: BJP, Karanjia

  'bhaskar-madhei': {
  year: '2019',
  age: '59',
  education: '10th Pass (Matric, 1999, Jagannath Sanskrit Vidyalaya, Mayurbhanj)',
  criminalCases: 1,
  assets: 'Rs 19,36,652',
  assetsNum: 1936652,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5692',
  },
// 2019: BJP, Udala

  'sanatan-bijuli': {
  year: '2019',
  age: '45',
  education: 'Graduate (B.A., Utkal University, 1994, FM College, Balasore)',
  criminalCases: 2,
  assets: 'Rs 1,46,93,788',
  assetsNum: 14693788,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5512',
  },
// 2019: BJP, Badasahi

  'prakash-soren': {
  year: '2019',
  age: '50',
  education: '10th Pass (High School Certificate, 1984, Govt. High School Basipitha, Board of Secondary Education, Orissa)',
  criminalCases: 5,
  assets: 'Rs 9,86,480',
  assetsNum: 986480,
  liabilities: 'Rs 94,910',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5535',
  },
// 2019: BJP, Baripada

  'krushna-chandra-mohapatra': {
  year: '2019',
  age: '48',
  education: 'Graduate Professional (B.A.M.S., Mayurbhanj Ayurved Mahavidyalaya, Baripada, 1997, Utkal University)',
  criminalCases: 8,
  assets: 'Rs 3,86,58,258',
  assetsNum: 38658258,
  liabilities: 'Rs 2,16,33,234.68',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5616',
  },
// 2019: BJP, Morada

  'sanjib-kumar-mallick': {
  year: '2019',
  age: '44',
  education: 'Graduate Professional (LLB, Bhadrak Law College, 1999; B.Com, Bhadrak College, 1996, Utkal University)',
  criminalCases: 0,
  assets: 'Rs 19,15,12,699',
  assetsNum: 191512699,
  liabilities: 'Rs 7,74,59,837',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5543',
  },
// 2019: BJD, Bhadrak

  'ashok-kumar-das': {
  year: '2019',
  age: '52',
  education: 'Post Graduate (M.A. in Odia, 1998, Utkal University, Bhubaneswar)',
  criminalCases: 0,
  assets: 'Rs 1,40,78,429',
  assetsNum: 14078429,
  liabilities: 'Rs 27,07,426',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5799',
  },
// 2019: INC, Basudevpur

  'byomakesh-ray': {
  year: '2019',
  age: '37',
  education: 'Post Graduate (M.A., M.Phil in Political Science, 2003/2004, Utkal University, Vani Vihar, Bhubaneswar)',
  criminalCases: 0,
  assets: 'Rs 2,07,31,644',
  assetsNum: 20731644,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5559',
  },
// 2019: BJD, Chandabali

  'aswini-kumar-patra': {
  year: '2019',
  age: '68',
  education: 'Post Graduate (M.A. from Utkal University in 1978, LLB from Utkal University in 1977)',
  criminalCases: 3,
  assets: 'Rs 93,33,602',
  assetsNum: 9333602,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5583',
  },
// 2019: BJD, Jaleswar

  'santosh-khatua': {
  year: '2019',
  age: '51',
  education: 'Post Graduate (M.Sc. from Utkal University, 1992; MBA from FM University, 2008)',
  criminalCases: 1,
  assets: 'Rs 4,55,21,891',
  assetsNum: 45521891,
  liabilities: 'Rs 2,04,63,821',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5625',
  },
// 2019: BJD, Nilgiri

  'padma-lochan-panda': {
  year: '2019',
  age: '65',
  education: 'Post Graduate (P.P. Bhadrak College, Bhadrak)',
  criminalCases: 5,
  assets: 'Rs 2,65,06,000',
  assetsNum: 26506000,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5814',
  },
// 2019: BJP, Simulia

  'biswa-ranjan-mallick': {
  year: '2019',
  age: '39',
  education: '10th Pass (H.S.C from Krupa Sindhu Bidya Bhaban, Bari, B.S.E Odisha, 1995)',
  criminalCases: 3,
  assets: 'Rs 2,13,97,403',
  assetsNum: 21397403,
  liabilities: 'Rs 6,27,328',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5113',
  },
// 2019: BJP, Bari

  'amar-kumar-nayak': {
  year: '2019',
  age: '45',
  education: 'Post Graduate (MFC from Utkal University, 2000)',
  criminalCases: 0,
  assets: 'Rs 1,66,79,083',
  assetsNum: 16679083,
  liabilities: 'Rs 12,73,446',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5112',
  },
// 2019: BJP, Barachana

  'pramila-mallik': {
  year: '2019',
  age: '56',
  education: 'Graduate',
  criminalCases: 0,
  assets: 'Rs 4,70,85,110',
  assetsNum: 47085110,
  liabilities: 'Rs 59,16,069',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5558',
  },
// 2019: BJD, Binjharpur (SC)

  'pradeep-bal-samanta': {
  year: '2019',
  age: '61',
  education: 'Doctorate (PhD from Open International University, Colombo, Sri Lanka, 2008)',
  criminalCases: 2,
  assets: 'Rs 15,83,28,148',
  assetsNum: 158328148,
  liabilities: 'Rs 1,18,37,970',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5726',
  },
// 2019: BJP, Sukinda

  'krushna-chandra-patra': {
  year: '2019',
  age: '55',
  education: 'Post Graduate',
  criminalCases: 6,
  assets: 'Rs 4,25,51,700',
  assetsNum: 42551700,
  liabilities: 'Rs 7,19,500',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5365',
  },
// 2019: BJP, Dhenkanal

  'simarani-nayak': {
  year: '2019',
  age: '54',
  education: '12th Pass',
  criminalCases: 0,
  assets: 'Rs 51,73,239',
  assetsNum: 5173239,
  liabilities: 'Rs 4,02,189',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5385',
  },
// 2019: BJD, Hindol (SC)

  'satrughan-jena': {
  year: '2019',
  age: '54',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 2,21,66,524',
  assetsNum: 22166524,
  liabilities: 'Rs 56,40,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5373',
  },
// 2019: BJP, Kamakhyanagar

  'bibhuti-bhusan-pradhan': {
  year: '2019',
  age: '51',
  education: 'Graduate Professional',
  criminalCases: 3,
  assets: 'Rs 81,15,522',
  assetsNum: 8115522,
  liabilities: 'Rs 9,26,219',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5358',
  },
// 2019: BJP, Parjanga

  'ashok-mohanty': {
  year: '2019',
  age: '52',
  education: 'Post Graduate',
  criminalCases: 8,
  assets: 'Rs 41,33,588',
  assetsNum: 4133588,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5235',
  },
// 2019: BJP, Pallahara

  'braja-kishore-pradhan': {
  year: '2019',
  age: '44',
  education: '12th Pass',
  criminalCases: 29,
  assets: 'Rs 20,01,085',
  assetsNum: 2001085,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5249',
  },
// 2019: BJD, Talcher

  'pratap-chandra-pradhan': {
  year: '2019',
  age: '49',
  education: 'Graduate',
  criminalCases: 3,
  assets: 'Rs 67,96,065',
  assetsNum: 6796065,
  liabilities: 'Rs 28,38,355',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5130',
  },
// 2019: BJP, Angul

  'agasti-behera': {
  year: '2019',
  age: '43',
  education: 'Post Graduate',
  criminalCases: 1,
  assets: 'Rs 8,50,619',
  assetsNum: 850619,
  liabilities: 'Rs 31,640',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5228',
  },
// 2019: BJP, Chhendipada (SC)

  'raghunath-jagadala': {
  year: '2019',
  age: '45',
  education: 'Post Graduate',
  criminalCases: 0,
  assets: 'Rs 3,06,10,000',
  assetsNum: 30610000,
  liabilities: 'Rs 64,50,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4945',
  },
// 2019: BJP, Birmaharajpur (SC)

  'niranjan-pujari': {
  year: '2019',
  age: '58',
  education: 'Graduate Professional',
  criminalCases: 0,
  assets: 'Rs 3,97,25,100',
  assetsNum: 39725100,
  liabilities: 'Rs 7,21,126',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4958',
  },
// 2019: BJD, Sonepur

  'mukesh-mahaling': {
  year: '2019',
  age: '45',
  education: 'Doctorate',
  criminalCases: 0,
  assets: 'Rs 1,02,18,483',
  assetsNum: 10218483,
  liabilities: 'Rs 26,54,526',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4966',
  },
// 2019: BJP, Loisingha (SC)

  'kanak-vardhan-singh-deo': {
  year: '2019',
  age: '62',
  education: '12th Pass',
  criminalCases: 1,
  assets: 'Rs 37,95,90,851',
  assetsNum: 379590851,
  liabilities: 'Rs 75,02,665',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4960',
  },
// 2019: BJP, Patnagarh

  'laxman-bag': {
  year: '2019',
  age: '45',
  education: '10th Pass',
  criminalCases: 11,
  assets: 'Rs 76,84,173',
  assetsNum: 7684173,
  liabilities: 'Rs 5,89,876',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4990',
  },
// 2019: BJP, Kantabanji

  'adhiraj-mohan-panigrahi': {
  year: '2019',
  age: '42',
  education: '12th Pass',
  criminalCases: 4,
  assets: 'Rs 2,50,73,719',
  assetsNum: 25073719,
  liabilities: 'Rs 51,55,038',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4687',
  },
// 2019: INC, Khariar

  'nityananda-gond': {
  year: '2019',
  age: '41',
  education: 'Post Graduate',
  criminalCases: 2,
  assets: 'Rs 32,79,541',
  assetsNum: 3279541,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4625',
  },
// 2019: BJP, Umerkote (ST)

  'gouri-shankar-majhi': {
  year: '2019',
  age: '41',
  education: '12th Pass',
  criminalCases: 0,
  assets: 'Rs 75,27,276',
  assetsNum: 7527276,
  liabilities: 'Rs 1,00,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4603',
  },
// 2019: BJP, Nabarangpur (ST)

  'manohar-randhari': {
  year: '2019',
  age: '44',
  education: '12th Pass',
  criminalCases: 4,
  assets: 'Rs 1,64,54,258',
  assetsNum: 16454258,
  liabilities: 'Rs 11,28,177',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4605',
  },
// 2019: BJD, Dabugam (ST)

  'pradip-kumar-dishari': {
  year: '2019',
  age: '44',
  education: 'Graduate (B.A)',
  criminalCases: 0,
  assets: 'Rs 45,50,000',
  assetsNum: 4550000,
  liabilities: 'Rs 98,597',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4705',
  },
// 2019: BJD, Lanjigarh (ST)

  'dibya-shankar-mishra': {
  year: '2019',
  age: '50',
  education: 'Graduate (B.Sc)',
  criminalCases: 3,
  assets: 'Rs 8,07,41,800',
  assetsNum: 80741800,
  liabilities: 'Rs 2,34,251',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4714',
  },
// 2019: BJD, Junagarh

  'sagar-charan-das': {
  year: '2019',
  age: '28',
  education: 'Graduate (BBA)',
  criminalCases: 0,
  assets: 'Rs 11,02,163',
  assetsNum: 1102163,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4732',
  },
// 2019: INC, Bhawanipatna (SC)

  'chakramani-kanhar': {
  year: '2019',
  age: '39',
  education: '12th Pass (Upashastri)',
  criminalCases: 1,
  assets: 'Rs 39,15,963',
  assetsNum: 3915963,
  liabilities: 'Rs 6,20,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4998',
  },
// 2019: BJD, Baliguda (ST)

  'kanhai-charan-danga': {
  year: '2019',
  age: '65',
  education: 'Graduate Professional (LLB, BA)',
  criminalCases: 4,
  assets: 'Rs 83,26,206',
  assetsNum: 8326206,
  liabilities: 'Rs 10,74,879',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5017',
  },
// 2019: BJP, Kantamal

  'bijaya-kumar-dalabehera': {
  year: '2019',
  age: '46',
  education: 'Graduate (B.Com, Utkal University, 1995)',
  criminalCases: 6,
  assets: 'Rs 28,52,463',
  assetsNum: 2852463,
  liabilities: 'Rs 17,15,782',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5179',
  },
// 2019: BJP, Baramba

  'devi-ranjan-tripathy': {
  year: '2019',
  age: '31',
  education: 'Post Graduate (MBA, HP Infotech/FM University, 2013)',
  criminalCases: 2,
  assets: 'Rs 86,34,011',
  assetsNum: 8634011,
  liabilities: 'Rs 19,24,717',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5156',
  },
// 2019: BJD, Banki

  'ranendra-pratap-swain': {
  year: '2019',
  age: '65',
  education: 'Post Graduate (MA, Utkal University 1978; LLB, Madhu Sudan Law College Cuttack)',
  criminalCases: 0,
  assets: 'Rs 2,89,08,348',
  assetsNum: 28908348,
  liabilities: 'Rs 27,76,172',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5140',
  },
// 2019: BJD, Athgarh

  'souvic-biswal': {
  year: '2019',
  age: '27',
  education: 'Post Graduate (MBA HR & Marketing, Swami Vivekananda Subharti University Meerut, 2018)',
  criminalCases: 0,
  assets: 'Rs 20,68,800',
  assetsNum: 2068800,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5260',
  },
// 2019: BJD, Choudwar-Cuttack

  'chhabi-malik': {
  year: '2019',
  age: '50',
  education: 'Others (Diploma in Civil Engineering, UIET Rathipur Bhubaneswar, 2017)',
  criminalCases: 0,
  assets: 'Rs 2,24,46,615',
  assetsNum: 22446615,
  liabilities: 'Rs 98,928',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5771',
  },
// 2019: BJP, Niali

  'prasanta-behera': {
  year: '2019',
  age: '41',
  education: 'Graduate (+3 Science, Choudwar College Cuttack, 1998)',
  criminalCases: 0,
  assets: 'Rs 62,61,443',
  assetsNum: 6261443,
  liabilities: 'Rs 2,96,330',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5783',
  },
// 2019: BJD, Salepur

  'sarada-prasad-padhan': {
  year: '2019',
  age: '40',
  education: '12th Pass (HSC 1993, Ranchandi High School Erakana Mahanga, BSE Orissa)',
  criminalCases: 1,
  assets: 'Rs 5,69,69,271',
  assetsNum: 56969271,
  liabilities: 'Rs 1,81,77,714',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5610',
  },
// 2019: BJP, Mahanga

  'ganeswar-behera': {
  year: '2019',
  age: '59',
  education: 'Post Graduate (MA English, Utkal University, 1981)',
  criminalCases: 0,
  assets: 'Rs 2,08,12,194',
  assetsNum: 20812194,
  liabilities: 'Nil',
  mynetaUrl: 'https://www.myneta.info/odisha2019/candidate.php?candidate_id=5595',
  },
// 2019: INC, Kendrapara

  'pratap-keshari-deb': {
  year: '2019',
  age: '48',
  education: 'Graduate (+3 Arts, Ramjas College Delhi University, 1992)',
  criminalCases: 0,
  assets: 'Rs 6,07,79,980',
  assetsNum: 60779980,
  liabilities: 'Rs 3,03,257',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5506',
  },
// 2019: BJD, Aul

  'dhruba-charan-sahoo': {
  year: '2019',
  age: '52',
  education: 'Post Graduate (LLB 1994, DS Law College Kendrapara; LLM 1997, MS Law College Cuttack, Utkal University)',
  criminalCases: 1,
  assets: 'Rs 1,44,27,919',
  assetsNum: 14427919,
  liabilities: 'Rs 86,59,576',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5648',
  },
// 2019: BJD, Rajanagar

  'sampad-chandra-swain': {
  year: '2019',
  age: '33',
  education: 'Post Graduate (MBA, Magnus School of Business, 2009; BA, Utkal University, 2007)',
  criminalCases: 0,
  assets: 'Rs 2,38,15,669',
  assetsNum: 23815669,
  liabilities: 'Rs 12,50,750',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5764',
  },
// 2019: BJP, Paradeep

  'ramakanta-bhoi': {
  year: '2019',
  age: '42',
  education: 'Post Graduate (MCA, Utkal University BBSR)',
  criminalCases: 0,
  assets: 'Rs 26,96,981',
  assetsNum: 2696981,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5761',
  },
// 2019: BJP, Tirtol

  'tusharkanti-behera': {
  year: '2019',
  age: '35',
  education: 'Post Graduate (M.Tech, IIT Kharagpur, 2008)',
  criminalCases: 0,
  assets: 'Rs 24,16,927',
  assetsNum: 2416927,
  liabilities: 'Rs 3,927',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5594',
  },
// 2019: BJD, Kakatpur

  'pravati-parida': {
  year: '2019',
  age: '51',
  education: 'Post Graduate (MA Public Admin, Utkal, 2005; LLB, Utkal, 1995)',
  criminalCases: 7,
  assets: 'Rs 2,45,58,514',
  assetsNum: 24558514,
  liabilities: 'Rs 45,00,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5641',
  },
// 2019: BJP, Nimapara

  'om-prakash-mishra': {
  year: '2019',
  age: '39',
  education: 'Post Graduate (MBA, Sikkim Manipal, 2009; LLB, Utkal, 2008)',
  criminalCases: 2,
  assets: 'Rs 5,00,00,505',
  assetsNum: 50000505,
  liabilities: 'Rs 7,00,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5294',
  },
// 2019: BJP, Satyabadi

  'ashrit-pattanayak': {
  year: '2019',
  age: '47',
  education: '10th Pass (HSC, Bhagabati High School Rupadeipur, 1987)',
  criminalCases: 10,
  assets: 'Rs 63,66,235',
  assetsNum: 6366235,
  liabilities: 'Rs 3,68,800',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5341',
  },
// 2019: BJP, Pipili

  'surama-padhy': {
  year: '2019',
  age: '59',
  education: 'Post Graduate (MA 1982, LLB 1990, Utkal University)',
  criminalCases: 1,
  assets: 'Rs 3,87,32,625',
  assetsNum: 38732625,
  liabilities: 'Rs 23,35,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5317',
  },
// 2019: BJP, Ranpur

  'dusmanta-kumar-swain': {
  year: '2019',
  age: '44',
  education: 'Graduate (B.Arch, Utkal University BBSR, 2000)',
  criminalCases: 0,
  assets: 'Rs 3,66,51,588',
  assetsNum: 36651588,
  liabilities: 'Rs 52,47,306',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5447',
  },
// 2019: IND, Khandapada

  'ramesh-chandra-behera': {
  year: '2019',
  age: '42',
  education: 'Post Graduate (M.Phil, JNU, 2002)',
  criminalCases: 0,
  assets: 'Rs 1,90,52,445',
  assetsNum: 19052445,
  liabilities: 'Rs 96,56,172',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5033',
  },
// 2019: BJD, Daspalla

  'arun-kumar-sahoo': {
  year: '2019',
  age: '51',
  education: 'Doctorate (Ph.D History, Odisha University, 2013; LLB 1993; MA 1990)',
  criminalCases: 0,
  assets: 'Rs 73,07,799',
  assetsNum: 7307799,
  liabilities: 'Rs 5,00,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5451',
  },
// 2019: BJD, Nayagarh

  'naba-kishor-mallick': {
  year: '2019',
  age: '38',
  education: 'Graduate (BA 2004, Sishu Ananta College Balipatna, Utkal University)',
  criminalCases: 0,
  assets: 'Rs 17,42,692',
  assetsNum: 1742692,
  liabilities: 'Rs 1,65,406',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5400',
  },
// 2019: IND, Jayadev (SC)

  'ananta-narayan-jena': {
  year: '2019',
  age: '51',
  education: 'Graduate Professional (BA 1991, LLB 1994, Utkal University)',
  criminalCases: 0,
  assets: 'Rs 3,09,73,489',
  assetsNum: 30973489,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5200',
  },
// 2019: BJD, Bhubaneswar Central

  'susant-kumar-rout': {
  year: '2019',
  age: '46',
  education: '10th Pass (HSC 1988, BSE Orissa; PG Diploma Marketing Management 1997, IMM New Delhi)',
  criminalCases: 0,
  assets: 'Rs 13,76,61,931',
  assetsNum: 137661931,
  liabilities: 'Rs 4,24,62,263',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5215',
  },
// 2019: BJD, Bhubaneswar North

  'babu-singh': {
  year: '2019',
  age: '47',
  education: 'Graduate (BA 1992, Ekamra College, Utkal University)',
  criminalCases: 0,
  assets: 'Rs 8,39,16,932',
  assetsNum: 83916932,
  liabilities: 'Rs 27,46,713',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5410',
  },
// 2019: BJP, Ekamra Bhubaneswar

  'bibhuti-bhusan-balabantaray': {
  year: '2019',
  age: '58',
  education: '12th Pass (HSC 1978; IA 1980, Utkal University)',
  criminalCases: 1,
  assets: 'Rs 5,26,28,263',
  assetsNum: 52628263,
  liabilities: 'Rs 46,77,544',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5421',
  },
// 2019: BJD, Jatani

  'pradip-kumar-sahu': {
  year: '2019',
  age: '49',
  education: '12th Pass (12th 1987, Panchapalli Bauti Bidyapitha; +2 Arts 1989, Pranath College Khordha)',
  criminalCases: 0,
  assets: 'Rs 1,46,02,813',
  assetsNum: 14602813,
  liabilities: 'Rs 32,86,581.21',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5191',
  },
// 2019: INC, Begunia

  'prasanta-kumar-jagadev': {
  year: '2019',
  age: '50',
  education: '12th Pass (+3 Arts 1992, KBDAV College Nirakarpur, Utkal University)',
  criminalCases: 10,
  assets: 'Rs 2,32,92,963',
  assetsNum: 23292963,
  liabilities: 'Rs 1,10,00,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5395',
  },
// 2019: BJD, Chilika

  'prithviraj-harichandan': {
  year: '2019',
  age: '51',
  education: 'Post Graduate (MSc Zoology 1989, Utkal University)',
  criminalCases: 1,
  assets: 'Rs 19,32,000',
  assetsNum: 1932000,
  liabilities: 'Rs 2,42,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5393',
  },
// 2019: BJP, Chilika

  'dasarathi-gomango': {
  year: '2019',
  age: '48',
  education: '10th Pass (Class X, Govt. High School Chelligada)',
  criminalCases: 1,
  assets: 'Rs 57,69,623',
  assetsNum: 5769623,
  liabilities: 'Rs 3,93,925',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4758',
  },
// 2019: INC, Mohana (ST)

  'nilamadhab-hikaka': {
  year: '2019',
  age: '38',
  education: '10th Pass (Secondary School Examination 2018, NIOS)',
  criminalCases: 0,
  assets: 'Rs 20,40,542',
  assetsNum: 2040542,
  liabilities: 'Rs 92,429',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4634',
  },
// 2019: INC, Bissam Cuttack (ST)

  'kadraka-appala-swamy': {
  year: '2019',
  age: '50',
  education: '10th Pass (Matriculation April 2015, NIOS)',
  criminalCases: 2,
  assets: 'Rs 1,04,45,637',
  assetsNum: 10445637,
  liabilities: 'Rs 6,97,460',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4773',
  },
// 2019: INC, Rayagada (ST)

  'pradyumna-kumar-nayak': {
  year: '2019',
  age: '52',
  education: 'Graduate (LLB, Capital Law College, Utkal University, 1996)',
  criminalCases: 0,
  assets: 'Rs 36,24,633',
  assetsNum: 3624633,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5037',
  },
// 2019: BJP, Bhanjanagar

  'gokula-nanda-mallik': {
  year: '2019',
  age: '43',
  education: 'Graduate (+3 Arts, Maharshi College of Natural Law, Utkal University, 1997)',
  criminalCases: 4,
  assets: 'Rs 4,21,57,654',
  assetsNum: 42157654,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5045',
  },
// 2019: BJP, Polasara

  'nilamani-bisoyi': {
  year: '2019',
  age: '48',
  education: '12th Pass (+2 Arts, CHSE Odisha, KUSB College Bhanjanagar, 1989-90)',
  criminalCases: 7,
  assets: 'Rs 1,43,81,314',
  assetsNum: 14381314,
  liabilities: 'Rs 1,76,97,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5071',
  },
// 2019: BJP, Surada

  'ramesh-chandra-jena': {
  year: '2019',
  age: '41',
  education: '12th Pass',
  criminalCases: 51,
  assets: 'Rs 1,50,66,217',
  assetsNum: 15066217,
  liabilities: 'Nil',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=5080',
  },
// 2019: INC, Sanakhemundi

  'naveen-patnaik': {
  year: '2019',
  age: '72',
  education: 'Graduate (BA, Delhi University, 1967)',
  criminalCases: 0,
  assets: 'Rs 63,87,41,816',
  assetsNum: 638741816,
  liabilities: 'Rs 15,00,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4632',
  },
// 2019: BJD, Hinjili

  'bibhuti-bhushan-jena': {
  year: '2019',
  age: '52',
  education: 'Graduate (BSc, Ganjam College, Berhampur University, 1993)',
  criminalCases: 4,
  assets: 'Rs 10,55,431',
  assetsNum: 1055431,
  liabilities: 'Rs 6,53,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4653',
  },
// 2019: BJP, Gopalpur

  'manoranjan-dyan-samantara': {
  year: '2019',
  age: '47',
  education: 'Others (Diploma in Pharmacy, Orissa State Board of Pharmacy, Roland Institute Berhampur, 1994)',
  criminalCases: 4,
  assets: 'Rs 42,55,476',
  assetsNum: 4255476,
  liabilities: 'Rs 1,48,900',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4671',
  },
// 2019: BJP, Chikiti

  'rama-chandra-kadam': {
  year: '2019',
  age: '55',
  education: '8th Pass (Under Matriculation)',
  criminalCases: 0,
  assets: 'Rs 66,00,000',
  assetsNum: 6600000,
  liabilities: 'Rs 42,00,000',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4622',
  },
// 2019: INC, Pottangi (ST)

  'tara-prasad-bahinipati': {
  year: '2019',
  age: '64',
  education: '10th Pass (Goutami High School, Ganjam)',
  criminalCases: 13,
  assets: 'Rs 2,88,51,844',
  assetsNum: 28851844,
  liabilities: 'Rs 20,63,453',
  mynetaUrl: 'https://myneta.info/odisha2019/candidate.php?candidate_id=4794',
  },
  // 2019: INC, Jeypore (coordinator-verify: header text-render nahi hota; assets/cases 2014 page ke Other-Elections + summary tables se; age 2014 age 59 se +5 chain)
};

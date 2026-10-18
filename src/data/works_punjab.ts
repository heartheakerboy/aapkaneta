// Punjab — neta-war kaam (works) ka placeholder.
// Mining baad me hogi: Vidhayak Nidhi ke tahat vikas karyon ke record
// jama karke yahan jode jayenge. Abhi khaali export — all.ts me wiring live hai, koi page nahi tootega.
// Karyakaal: 16th Punjab Vidhan Sabha, 2022-2027.
// Fund tathya: Punjab me MLA kshetra vikas nidhi (MLALAD) ki vartaman sthiti
// foundation-research me verify hogi — yahan sirf established-source tathya jode jayenge.
// Whitelist (Punjab): The Hindu, Indian Express, Hindustan Times, NDTV, India Today,
// Times of India, The Tribune, Dainik Bhaskar, Dainik Jagran, Amar Ujala, PTI (established outlet par).
export const punjabWorks: Record<string, any[]> = {};

// ---- Punjab works mining — BATCH 1: Pathankot (3 MLA) — 2026-10-18 ----
// Research: per-MLA workers; merge + QA parent (coordinator) ne kiya.
punjabWorks['naresh-puri'] = [

  {
    title: 'Vidhan Sabha ke prashnakaal me Naresh Puri ke sawal par urja mantri Aman Arora ne ashwasan diya ki Punjab sarkar kisanon ko krishi solar pump se bani atirikt bijli ka bhugtan karne ki yojana par vichar kar rahi hai, aur PEDA 20,000 krishi solar pump lagayegi jisme se 5,000 se zyada pump kisanon ko aavantit ho chuke hain.',
    category: 'Bijli',
    badge: 'news',
    sourceLabel: 'ThePrint (PTI feed)',
    sourceUrl: 'https://theprint.in/india/punjab-govt-mulls-incentivizing-farmers-to-produce-surplus-solar-energy-arora-tells-house/2564910/',
    date: '2025-03-25',
    note: 'PTI report (Chandigarh, Mar 25): Naresh Puri, MLA from Sujanpur, ne Punjab Vidhan Sabha ke question hour me sawal uthaya; New and Renewable Energy Sources mantri Aman Arora ne jawab me kaha ki sarkar atirikt solar urja banane wale kisanon ko protsahan dene par vichar kar rahi hai, atirikt bijli grid me dekar kisanon ko bhugtan milega, PEDA 20,000 krishi solar pump lagayegi jisme se 5,000 se zyada aavantit ho chuke hain, aur 4,474 sarkari imaraton par 34 MW rooftop solar laga hai. Date reasoning: PTI dateline Mar 25 aur report me "on Tuesday" — 2025-03-25 Tuesday thi (date -d se verified). Credit capped: ye mantri-ashwasan hai, yojana state-wide hai Sujanpur-specific nahi, aur implement hone ki pushti isi report me nahi hai.',
    period: '2022-2027',
  },
];
// PB1: naresh-puri — 1 entries merged (QA-checked).
punjabWorks['lal-chand-kataruchakk'] = [

  { title: 'The Tribune ki 27 Sep 2023 ki report ke anusar sarkar ne Bhoa me Ravi nadi par Rs 89 crore ke mega-pul ko manzoori di, jisse Kirri aur Narot Jaimal Singh ke beech doori 25 km se ghatkar 5 km ho jayegi.', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/kataruchak-hopes-it-will-not-be-a-bridge-too-far-on-ravi-river-548150/', date: '2023-09-27', note: 'Cited page ke anusar: mantri ne TNS se kaha ki Ravi par pul game-changer hoga aur aaspaas ke gaanvon ki arthavyavastha badhegi; isi report me seemavarti sadkon ke liye Rs 17 crore ki manzoori bhi darj hai.', period: '2022-2027', stage: 'swikriti' },
  { title: 'The Tribune ki 27 Sep 2023 ki report ke anusar Bhoa ke seemavarti ilakon me nayi sadkon ke nirmaan ke liye Rs 17 crore diye gaye.', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/kataruchak-hopes-it-will-not-be-a-bridge-too-far-on-ravi-river-548150/', date: '2023-09-27', note: 'Cited page ke anusar: ye rashi Ravi mega-pul (Rs 89 crore) wali manzoori-soochi ka hissa hai; mantri ne Bhoa ko dashakon purani susti se bahar nikaalne ki baat kahi.', period: '2022-2027', stage: 'swikriti' },
  { title: 'The Tribune ki 27 Sep 2023 ki report ke anusar Bhoa me Narot Jaimal Singh Senior Secondary School ke liye Rs 62 lakh, chaar middle schoolon ke unnayan ke liye Rs 1.64 crore aur Bamiyal ITI ke navinikaran ke liye Rs 41 lakh manzoor hue, saath hi ek School of Eminence bhi swikrit hua.', category: 'School', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/kataruchak-hopes-it-will-not-be-a-bridge-too-far-on-ravi-river-548150/', date: '2023-09-27', note: 'Cited page ke anusar: ye sabhi manzooriyan Bhoa seat ke liye usi vikas-package me darj hain jisme Ravi pul aur seemavarti sadken shamil hain.', period: '2022-2027', stage: 'swikriti' },
  { title: 'The Tribune ki 27 Sep 2023 ki report ke anusar Bhoa me aath Mohalla clinic pehle hi kaam kar rahe the.', category: 'Aspataal', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/kataruchak-hopes-it-will-not-be-a-bridge-too-far-on-ravi-river-548150/', date: '2023-09-27', note: 'Cited page ke anusar: ye tathya mantri ne khud TNS ko diye interview me bataya tha; report ki dateline Bhoa (Pathankot), 26 Sep 2023 hai.', period: '2022-2027', stage: 'poora' },
  { title: 'The Tribune ki 3 Jun 2026 ki report ke anusar cabinet mantri Lal Chand Kataruchak ne apni Bhoa seat me nayi link sadkon ke nirmaan aur purani sadkon ke chaudikaran ke liye Rs 200 crore laye.', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/eyeing-polls-minister-kataruchak-accelerates-dev-works-in-bhoa/', date: '2026-06-03', note: 'Cited page ke anusar: Bhoa Pathankot jile me hai aur mantri Pathankot nagar nigam ke ex-officio sadasya hain; report me naye pul banne aur nayi sadken banne ka zikr hai.', period: '2022-2027', stage: 'pahal' },
  { title: 'The Tribune ki 3 Jun 2026 ki report ke anusar mantri ki pehal par Bhoa me teen pulon ke nirmaan ke liye Rs 62 crore ke anudan aaye, jinme Jalali nallah par lambe samay se maangi ja rahi pul bhi shamil hai.', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/eyeing-polls-minister-kataruchak-accelerates-dev-works-in-bhoa/', date: '2026-06-03', note: 'Cited page ke anusar: Jalali Nullah mausami nala hai jo seat ke graameen aur shahri khetron se guzarta hai; pulon se gaanv ki connectivity aur aavaagaman me sudhaar ho raha hai.', period: '2022-2027', stage: 'pahal' },
  { title: 'The Tribune ki 3 Jun 2026 ki report ke anusar mantri ke hawale se Bhoa me yuvaon ko nashe se door rakhne ki neeti ke tahat tees naye khel-maidan banaye gaye aur nature parkon ki sthapna par Rs 1.75 crore kharch kiye gaye.', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/eyeing-polls-minister-kataruchak-accelerates-dev-works-in-bhoa/', date: '2026-06-03', note: 'Cited page ke anusar: ye dono kaam mantri ke apne bayaan me bataye gaye aur seat ke vikas-karyon ki soochi ka hissa hain.', period: '2022-2027', stage: 'poora' },
  { title: 'The Indian Express ki 13 Jun 2023 ki report ke anusar 2023 ke vivaadit video mamle me DIG Narinder Bhargava ki adhyakshata wali SIT ke samne peedit ne apni shikayat wapas le li aur video ko doctored bataya; SIT ne NCSC ko soochit kiya ki koi mamla nahi banta.', category: 'Any', badge: 'news', sourceLabel: 'The Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/victim-withdraws-sexual-abuse-plaint-against-punjab-minister-kataruchak-8660973/lite/', date: '2023-06-13', note: 'Cited page ke anusar: shikayat NCSC ko ki gayi thi, Governor ne video ki forensic jaanch karayi thi; SIT ka tark — ghatna ke samay peedit nabalig nahi tha aur dono paksh SC samuday ke hain, isliye mamla SC Commission ke dayre me nahi; AAP pravakta Malvinder Singh Kang ne ise vipaksh ka prachar bataya; vipaksh ne jaanch par sawal uthaye.', period: '2022-2027' },
];
// PB1-QA (parent): Pathankot land-scam negative DROP kiya gaya — cited page ke anusar FIR DDPO Kuldeep Singh ke khilaf darj karne ka aadesh tha, mantri ke khilaf FIR/janch ka zikr nahi; mantri par sirf vipaksh ka aarop (DO patra) hai. Sakht niyam: aarop akele negative nahi. ED Oct 2026 probe WATCH me hai.
// PB1: lal-chand-kataruchakk — 8 entries merged (QA-checked).
punjabWorks['ashwani-kumar-sharma'] = [

];
// PB1: ashwani-kumar-sharma — 0 entries merged (QA-checked).

// ---- Punjab works mining — BATCH 1: Gurdaspur (7 MLA) — 2026-10-18 ----
// Research: per-MLA workers; merge + QA parent (coordinator) ne kiya.
punjabWorks['barindermeet-singh-pahra'] = [

  {
    title: 'Punjab Vigilance Bureau ki aay se adhik sampatti (disproportionate assets) wali janch me Gurdaspur MLA Barindermeet Singh Pahra se lagbhag 7 ghante tak poochtaachh hui, jiske baad unhone dastavej jama karne ke liye ek hafte ki mohlat maangi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/pahra-seeks-a-week-to-submit-documents-461040/',
    date: '2022-12-14',
    note: 'Gurdaspur dateline 14 December. VB ke Inquiry Officer DSP Nirmal Singh ne Tribune ko bataya ki 6 December ko MLA, unke pita, bhai aur ek rishtedaar se ay se adhik sampatti ki shikayat ke silsile me lagbhag 7 ghante tak poochtaachh hui; MLA ne VB ke diye forms bharkar 21 December tak jama karne ke liye ek hafte ka samay manga aur afsaron ne kaha koi aur mohlat nahi milegi. Article me koi FIR darj hone ka ullekh nahi hai — stage: inquiry (janach), chargesheet/FIR nahi. MLA ki seedhi pratikriya is page me darj nahi hai; unke bhai ne mohlat ki guhaar lagai thi.',
    period: '2022-2027',
  },
];
// PB1: barindermeet-singh-pahra — 1 entries merged (QA-checked).
punjabWorks['aruna-chaudhary'] = [

];
// PB1: aruna-chaudhary — 0 entries merged (QA-checked).
punjabWorks['partap-singh-bajwa'] = [

  {
    title: 'Qadian-Beas 39.68 km rail line ko Railway Board se Rs 1,419.05 crore ki swikriti mili — MLA ka dawa hai ki ye unki 2010 se chali maang ka parinaam hai',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/punjab/centre-approved-rs-1419-crore-for-qadian-beas-railway-line-in-punjab-ravneet-bittu/',
    date: '2026-08-16',
    note: 'Badge dawa hai: swikriti ka tathya cited page se hai, lekin Bajwa ki vyaktigat bhoomika ka dawa keval unke apne bayan par aadharit hai. Cited page ke tathya: Railway Board ne 39.68-km Qadian-Beas broad gauge railway line ka Rs 1,419.05 crore ka detailed estimate swikrit kiya; kendra ne June 2026 me line ka aupcharik revival ghoshit kiya tha; line Qadian, Dhapai, Ghuman, Butala, Sathiala aur Beas se guzregi. Shrey vivadit hai — cited page ke anusar BJP neta aur purv kendriya rail rajya mantri Ravneet Singh Bittu ne kaha ki unhone apne karyakaal me is line ko defreeze karwaya. Bhoomika-disclosure: Bajwa ka dawa unke Gurdaspur MP (2010 se) ke karyakaal ki maang par aadharit hai; swikriti tenure (2022-2027) me hui isliye pre-term niyam ke tahat entry bani.',
    period: '2022-2027',
    stage: 'swikriti',
  },
  {
    title: 'News18 Punjab ke talk show me untraced grenades wale bayan par Cyber Crime thana Mohali me FIR No. 19 darj hui; Punjab-Haryana High Court ne giraftari par antarim rok lagayi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/punjab-haryana-high-court-interim-protection-partap-singh-bajwa-grenades-9947339/',
    date: '2025-04-16',
    note: 'Cited page ke tathya: FIR No. 19 dinank 13 April 2025, Cyber Crime Police Station, Phase-7, Mohali — 13 April ko News18 Punjab ke Katera talk show me LoP Partap Singh Bajwa (Qadian MLA) ke is bayan par ki 50 grenades Punjab pahunch gaye jinme se 18 istemal ho chuke aur 32 bache hain; bayan 9 April ki Dainik Bhaskar report (Pakistan se drone se bheje gaye 55 hand grenades) par aadharit bataya gaya; shikayat mahila constable Taranpreet Kaur ne ki. Punjab-Haryana High Court (Justice Deepak Gupta) ne 16 April 2025 ko agle sunwai tak koi zabardasti karwai na karne ka nirdesh diya; Bajwa ko janch me sahyog jari rakhne aur is mamle par press bayan na dene ko kaha; rajya se 22 April 2025 tak vistrit status report mangi. Bajwa ke vakeel (senior advocate A.P.S. Deol) ne FIR ko rajnaitik badle ki karwai aur abhivyakti ki swatantrata par hamla bataya; rajya ne yachika ka virodh kiya. Quashing yachika ke antim parinaam ki khabar is worker ko kisi whitelisted source me nahi mili — sthiti FIR + antarim HC rahat + janch-jaari tak stage-accurate hai.',
    period: '2022-2027',
  },
];
// PB1: partap-singh-bajwa — 2 entries merged (QA-checked).
punjabWorks['amansher-singh-shery-kalsi'] = [

  { title: 'Batala MLA Amansher Singh Sherry Kalsi ki sifarish par Punjab sarkar ne kshetra ke yuvaon ke liye skill development courses hetu Rs 3.25 crore ka aavantan unhe diya, aur unhone ‘Industrial Visit and Exposure Scheme’ bhi shuru ki', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/gurdaspur-diary-batala-mla-starts-skill-development-courses-for-youth/', date: '2025-01-11', note: 'The Tribune (11 Jan 2025, Ravi Dhaliwal) ke anusaar: badhti berozgaari ko dekhte hue Kalsi ne rajya sarkar se sampark karke skill development courses shuru karvaye; courses khaaskar un yuvaon ke liye hain jo padhai chhod chuke hain aur samaj ke nichle vargon se aate hain; sarkar ne Kalsi ko is hetu Rs 3.25 crore aavantit kiye; Industrial Visit and Exposure Scheme ke tahat yuvaon ko vibhinn udyogon ka exposure diya jata hai.', period: '2022-2027', stage: 'pahal' },
  { title: 'Congress MLA Sukhpal Singh Khaira ke aarop ke baad Punjab shiksha vibhaag ne PSEB 10+2 pariksha me kathit gadbadi ki janch shuru ki; aarop tha ki Batala MLA Amansher Singh Sherry Kalsi ke liye koi aur vyakti pariksha de raha tha', category: 'Any', badge: 'news', sourceLabel: 'Hindustan Times', sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/punjab-education-dept-begins-probe-after-allegations-of-exam-manipulation-101679685728583.html', date: '2023-03-25', note: 'HT (25 Mar 2023) ke anusaar: Khaira ne Baba Bakala ke SMG Government Senior Secondary School pariksha kendra ke bahar Facebook live karke ummeedvaron ki suchi dikhai, jisme ‘Amansher Singh son of Manohar Singh’ naam tha (Batala MLA ke pita ka naam Manohar Singh hai; Kalsi ki patni bhi usi kendra par pariksha de rahi thin); Khaira ne aarop lagaya ki Batala MLA ke liye koi aur vyakti pariksha de raha hai aur Chandigarh se flying squad bulane ki baat kahi. Kalsi ne Facebook live me sabhi aaropon ka khandan kiya. Amritsar DEO (Secondary) Jugraj Singh ne kaha jaanch shuru kar di gayi hai aur pariksha adhikshak se vivaran liye ja rahe hain. Jaach ke nateeje ya FIR sambandhi koi aage ki khabar uplabdh whitelist sources me nahi mili; stage ‘janch shuru’ se aage dastaveji nahi hai.', period: '2022-2027' },
];
// PB1-QA (parent): IE affidavit-188 IPC/DM Act negative DROP kiya gaya — FIR ki tithi aur stage article me nahi; DM Act/188 booking pre-term (COVID-era) pattern ki hai aur tenure me koi nyayik vikas dastaveji nahi. Sakht niyam: pre-term mamla bina current-term development ke negative nahi.
// PB1: amansher-singh-shery-kalsi — 2 entries merged (QA-checked).
punjabWorks['amarpal-singh'] = [

];
// PB1: amarpal-singh — 0 entries merged (QA-checked).
punjabWorks['tripat-rajinder-singh'] = [

];
// PB1: tripat-rajinder-singh — 0 entries merged (QA-checked).
punjabWorks['gurdeep-singh-randhawa'] = [

];
// PB1: gurdeep-singh-randhawa — 0 entries merged (QA-checked).
// ---- Punjab works mining — BATCH 2: Amritsar (11 MLA) — 2026-10-18 ----

// Research: per-MLA workers; merge + QA parent (coordinator) ne kiya.

// PB2 worker: kuldeep-singh-dhaliwal (Ajnala, AAP)
// Pehchan: punjab.ts record verified — Ajnala (Amritsar), AAP, Winner 2022; Jul 2025 tak Punjab cabinet me mantri
// (mantri-karyakaal ke sirf seat-specific kaam liye gaye hain; vibhagiya/rajya-stariya faisle nahi).
// REJECT-LOG:
// - Tribune 13 Apr 2026 (Ajnala road upgrade): Dhaliwal ki ghoshna ki 255 sadken/Rs 194 crore upgrade + 40 km Dhussi
//   bundh sadak (Ghonewal-Gulgard, Rs 67.59 crore, ‘first since Independence’ dawa) + Rs 20 crore school upgrade —
//   sirf ghoshna/dawa, shilanyas sirf 14.80 km road ka hua (wahi entry bani); ghoshna entry nahi.
// - 5dariyanews (non-whitelist): 53 link roads Rs 15 crore plan + 7 roads ka shilanyas; 8 stadium + Gujjarpura/Baladwal
//   dispensary (Rs 55 lakh each) ka shilanyas; PSPCL Rs 250 crore power-infra claim — whitelist me nahi, reject.
// - yespunjab.com (non-whitelist): 7 sports stadium shilanyas (Rs 4.29 crore, 16 Nov 2025) — reject.
// - Zee News PHH (non-whitelist): Ajnala me gurdwara parisar me dispensary udghatan + Rs 3 lakh ghoshna — reject.
// - dainiksaveratimes.com (non-whitelist): Kotli Sakkianwali school classroom/boundary-wall udghatan (Oct 2026) — reject.
// - Tribune 18 May 2025 page se: Kamalpura me stadium ki ghoshna (sirf ghoshna — reject); Rs 50,000 discretionary quota
//   heritage peepal rakhrakhav (minor); 4 bachchon ko apni jeb se Rs 2,500 inaam (personal daan — reject).
// - FIR 82/2019 (PS Rajasansi, IPC 302/201/120B/148/149; High Court stay on giraftari 27-07-2021): pre-term mamla,
//   whitelisted media me karyakaal (Mar 2022+) me koi nyayik vikas nahi mila — negative nahi.
// - Jul 2025 cabinet se bahar hona: cabinet ferbadal, party suspension/notice nahi — negative nahi.
// - Bhagtupura (Rs 40 crore panchayat-land inquiry, Apr 2023): CM ne inquiry band ki — Dhaliwal aaropi nahi
//   (unhone hi Jul 2022 me inquiry ki ghoshna ki thi); plus 5dariyanews non-whitelist — negative nahi.
// RETRY-LEADS:
// - FIR 82/2019 (PS Rajasansi) ka karyakaal me koi nyayik vikas (chargesheet/trial) — whitelist source se check karo.
// - Tribune epaper 20 Jan 2025 me Sarangdev pashu-dispensary udghatan ki standalone article-link nahi mili;
//   epaper OCR hi source hai — canonical Tribune article mile to badal dena.
punjabWorks['kuldeep-singh-dhaliwal'] = [
  {
    title: 'The Tribune ki report ke anusar MLA Kuldeep Singh Dhaliwal ne Ajnala seat ke Sansar Kalan, Jhander, Khatrai Kalan Kamalpur, Chamiyari, Dhariwal Kaler, Gujjarpura aur Talwandi Nahar gaanvon me lagbhag aath khel-stadiumon ka udghatan kiya, jo ausatan Rs 35 lakh prati stadium ki lagat se sarkari school aur panchayat ki zameen par bane hain.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/mla-inaugurates-sports-grounds-at-eight-villages-in-ajnala-constituency/',
    date: '2026-08-24',
    note: 'Cited page ke anusar: stadiums par chain-link fencing, high-mast lights, borewell/submersible pump, volleyball court par floodlights, concrete benches aur toilet jaisi civil suvidhayen bani hain; khel upkaran bhi diye gaye. Dhaliwal ke hawale se CM ne seat ke liye 36 stadium manzoor kiye the jinme se ~30 poore ho chuke the (manzoori ka dawa unka hai; poore hue 8 ka udghatan dastaveji hai). Date reasoning: page par publish-date 2026-08-25 aur event ‘on Monday’ — 2026-08-24 Monday thi (date -d se verified).',
    period: '2022-2027',
    stage: 'poora',
  },
  {
    title: 'The Tribune ki report ke anusar Ajnala MLA Kuldeep Singh Dhaliwal ne seat ke vibhinn gaanvon me Rs 1.15 crore ki lagat wali chaar link-road pariyojnaon (kul 3.17 km) ka shilanyas kiya — Pandori Sukha Singh se Ajnala-Chogawan Road (Rs 35.69 lakh), gaanv ki phirni se shamshan ghat (Rs 16.73 lakh), Fatehwal gaanv ki phirni se adde tak (Rs 27.41 lakh), aur Abadi Baba Gam Chuk Sahib se Chhanna (Rs 35.18 lakh).',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/govt-pushing-rural-infrastructure-to-curb-migration-to-cities-says-mla-dhaliwal/',
    date: '2026-09-03',
    note: 'Cited page ke anusar: shilanyas ke samay Dhaliwal ne kaha gaon ko self-reliant/model gaanv banane par zor hai; sarkari schools ka unnayan aur Aam Aadmi Clinics ka zikr unke bayaan me hai (state-wide yojnaen, seat-specific dastavej isi page me nahi). Date reasoning: page par publish-date 2026-09-03 aur event ‘on Thursday’ — 2026-09-03 Thursday thi (date -d se verified).',
    period: '2022-2027',
    stage: 'pahal',
  },
  {
    title: 'The Tribune ki report ke anusar Dhaliwal ne seemavarti gaanv Singhoke me Thoba ke raaste kai gaanvon ko jodne wali 14.80 km lambi link road (lagat Rs 15.88 crore) ka shilanyas kiya.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/roads-in-amritsars-ajnala-to-get-rs-194-crore-upgrade/',
    date: '2026-04-13',
    note: 'Cited page ke anusar: yehi program me 255 sadkon ke Rs 194 crore upgrade aur 40 km Dhussi bundh sadak (Ghonewal-Gulgard, Rs 67.59 crore — ‘first since Independence’ unka dawa) ki ghoshna hui, lekin shilanyas keval 14.80 km wali road ka dastaveji hai, isliye entry sirf usi par hai.',
    period: '2022-2027',
    stage: 'pahal',
  },
  {
    title: 'The Tribune ki report ke anusar tatkalin cabinet mantri Kuldeep Singh Dhaliwal ne apni Ajnala seat me Amrut scheme ke pehle charan ke tahat Rs 2.63 crore ki do jal-aapurti pariyojnaon ka udghatan/shilanyas kiya — Ramdas shahar me 3.6 km pipe (350 gharon ko paani, Rs 1.14 crore) aur Ajnala shahar me 4.2 km pipe (474 gharon ko connection, Rs 1.49 crore).',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/dhaliwal-lays-foundation-stone-of-2-water-projects-600755/',
    date: '2024-03-14',
    note: 'Cited page ke anusar: Ramdas me Ward 2, 3, 6 aur main bazaar Majhi Gate tubewell se Govt Sr Sec School Road tak, Ajnala me Ward 1, 14, 15 aur Chogawan main road par pipe line bichhni thi; Dhaliwal ne adhikariyon ko bina deri ke kaam poora karne ke nirdesh diye. Ye mantri-karyakaal (Jul 2025 se pehle) ka seat-specific kaam hai. Date reasoning: dateline ‘Amritsar, March 14’, publish-date 2024-03-15 — event 2024-03-14 (date -d se verified).',
    period: '2022-2027',
    stage: 'pahal',
  },
  {
    title: 'The Tribune ki report ke anusar Sikhiya Kranti karyakram me tatkalin cabinet mantri Kuldeep Singh Dhaliwal ne apni Ajnala seat ke chaar sarkari schools — Govt Primary School Machhinangal, Govt Elementary School Khatray Khurd, Govt High School Khatray Kalan aur Govt High School Jhander — me lagbhag Rs 64 lakh ki lagat se hue vikas-karyon ka udghatan kiya.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/dev-works-in-jandiala-guru-ajnala-launched-under-sikhiya-kranti/',
    date: '2025-04-20',
    note: 'Cited page ke anusar: kaamon me kamre, science lab, khel-maidan aur chaar-deewari shamil hain; naye classroom, boundary wall aur science lab banane ka ashwasan unhone diya (bhavishya-kaam ghoshna, entry me nahi). Ye mantri-karyakaal (Jul 2025 se pehle) ka seat-specific kaam hai.',
    period: '2022-2027',
    stage: 'poora',
  },
  {
    title: 'The Tribune ki report ke anusar tatkalin cabinet mantri Kuldeep Singh Dhaliwal ne apni Ajnala seat ke Kamalpura, Mukam aur Tera gaanvon ke schools me Punjab sarkar dwara kiye gaye laakhon rupaye ke vikas-karyon ko bachchon ko samarpit kiya.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/dhaliwal-opens-development-works-in-ajnala-areas/',
    date: '2025-05-17',
    note: 'Cited page ke anusar: Kamalpura me stadium banane ki ghoshna unhone isi program me ki thi (sirf ghoshna, entry me nahi); Rs 50,000 discretionary quota (heritage peepal rakhrakhav) aur apni jeb se bachchon ko Rs 2,500 inaam chhote/personal vitaran hain, entry me nahi. Date reasoning: publish-date 2025-05-18 aur event ‘on Saturday’ — 2025-05-17 Saturday thi (date -d se verified).',
    period: '2022-2027',
    stage: 'poora',
  },
  {
    title: 'The Tribune (Amritsar epaper, 20 Jan 2025) ke anusar tatkalin cabinet mantri Kuldeep Singh Dhaliwal ne Ajnala seat ke Sarangdev gaanv me ek pashu-dispensary ka udghatan kiya.',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Tribune (epaper)',
    sourceUrl: 'http://epaper.tribuneindia.com/3966166/Amritsar-Tribune/AT-20-January-2025',
    date: '2025-01-19',
    note: 'Epaper OCR ke anusar caption: ‘Cabinet Minister Kuldeep Singh Dhaliwal inaugurates an animal dispensary at Sarangdev village in Ajnala on Sunday.’ — yehi poora dastaveji tathya hai (lagat ka zikr nahi). Ye mantri-karyakaal ka seat-specific udghatan hai. Date reasoning: ‘Amritsar, January 19’ aur ‘on Sunday’ — 2025-01-19 Sunday thi (date -d se verified).',
    period: '2022-2027',
    stage: 'poora',
  },
  {
    title: 'The Tribune ki report ke anusar Ajnala MLA Kuldeep Singh Dhaliwal ne apni seat ke 10 gaanvon me naye Aam Aadmi Clinics ko janta ko samarpit kiya.',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/36-more-aam-aadmi-clinics-opened-in-amritsar-district/',
    date: '2026-10-15',
    note: 'Cited page ke anusar: ye state-level program hai — CM ne Hoshiarpur me 154 naye clinics ka udghatan kiya, uske baad Dhaliwal ne Ajnala seat ke 10 gaanvon me clinics samarpit kiye; district-bhar me 36 clinics khule (jinme Ramdas ke 12 bhi hain — Ramdas Ajnala seat me hai). Credit capped: niti/yojana rajya-sarkar ki hai, MLA ki bhoomika seat me sthaniya samarpan tak hai.',
    period: '2022-2027',
    stage: 'poora',
  },
];
// PB2: kuldeep-singh-dhaliwal — 8 entries

// PB2 worker: sukhbinder-singh-sarkaria (Raja Sansi, INC)
// Record pakka: punjab.ts — name 'Sukhbinder Singh Sarkaria', party 'Indian National Congress' (INC), seat 'Raja Sansi' (Amritsar, GEN), tenure 2022-2027, sitting MLA (2017 se).
// REJECT-LOG:
// 1. Tribune 2025-04-09 (Sikhya Kranti): Harjot Bains ne Tapiala schools me Rs 32.02 lakh ke kaam lokarpit kiye (Raja Sansi seat me) — lekin kaam shiksha mantri (satta) ka tha; Sarkaria ki koi vyaktigat bhoomika report me darj nahi. Dusre neta ka kaam — REJECT.
// 2. Tribune 2026-04-28: Congress ne Sarkaria ke netritva me Rajasansi me AAP sarkar ke khilaf dharna diya (police high-handedness, gehu ki fasal ka mamla) — virodh-raajneeti hai, koi vikas-kaam nahi. REJECT (sirf virodh).
// 3. Tribune 2025-12-07: Bhindi Saida (Rajasansi) me Congress-AAP jhadap; ~20 Congress karyakarta attempt-to-murder/Arms Act me booked. Shikayatkarta ne 'senior Congress leader and MLA Sukhjinder Singh Sukh Sarkaria' par ishaare ka aarop lagaya — (a) naam MLA ke halafnama-naam 'Sukhbinder Singh Sarkaria' se MEL NAHI khata (pehchan pakki nahi), (b) MLA khud FIR me aaropi nahi (kewal shikayatkarta ka aarop), (c) Sarkaria ka jawab page me on record nahi. Sakht niyam: sirf aarop = negative NAHI. REJECT.
// 4. Tribune (filing-of-nominations, Dec 2025): Sarkaria ne AAP par sarpanch Surjit Singh par hamle ka aarop lagaya — kewal aarop/maang, koi dastaveji nateeja nahi. REJECT.
// 5. Tribune Jun 2022 (Sarhali road, Tarn Taran): Sarkaria ne 14 Aug 2021 ko mantri-karyakaal me shilanyas kiya tha, stone toot gaya — pre-term kaam + seat ke bahar (Tarn Taran, Rajasansi nahi). REJECT.
// 6. Business Standard (PTI, Sep 2013): Congress netaon ne Sarkaria ke khilaf expulsion ki maang ki — 2013 ka internal party vivaad, pre-term, koi tenure legal development nahi. REJECT.
// 7. Tribune Feb 2021: Sarkaria COVID-positive hue — pre-term swasthya khabar, negative nahi. REJECT.
// RETRY-LEADS: koi nahi — khulne wali saari pages padh li; Tribune Amritsar diary me Sarkaria ke shilanyas/lokarpan ki koi tenure-entry mili nahi. Vipaksh (INC) MLA hone se vyaktigat kaam report hona mushkil hai; agla worker session-schedule Vidhan Sabha prashn-suchi (prsindia/Hansard) me unke sawalon ki dastaveji talash kar sakta hai.
punjabWorks['sukhbinder-singh-sarkaria'] = [
];
// PB2: sukhbinder-singh-sarkaria — 0 entries

// PB2 worker: harbhajan-singh-eto (Jandiala SC, AAP, PWD mantri)
// Pehchan pakki: punjab.ts record (slug harbhajan-singh-eto, Jandiala SC, AAP winner, cabinet mantri Public Works; Aug 2025 tak Power bhi tha).
// NOTE: PWD mantri ke naate ki gayi RAJYA-STARIYA sadak neetiyan/ghoshnayen isme nahi hain — sirf Jandiala seat ke kaam.
// REJECT-LOG:
// - Mera Ghar Mera Maan property ownership cards (Mehnian Brahmana 91 beneficiaries; Rana Kalan 247) — Tribune 2026-10 — keval sarkari abhiyan ka vitaran samaroh; bhautik sanrachna ka lokarpan/shilanyas nahi.
// - Mukh Mantri Teerath Yatra bus flag-off (Wadala Johal; Devidas Pura 65th bus) — Tribune 2026-09/10 — keval sarkari abhiyan ka shubharambh.
// - Police Sanjh Kendra Jandiala Guru surprise inspection — Tribune — sirf nirikshan/daura.
// - 509 meritorious students samman samaroh — Tribune — mukhya-atithi/CSR-type samaroh; usi me ghoshit Government Polytechnic College Jandiala Guru = keval ghoshna (lead).
// - Rs 9.31 crore side drain along NH flyover, Jandiala Guru (NHAI administrative approval Mar 5, 2026) — 5dariyanews — sirf progress review/daura + kendriya (NHAI) pariyojna.
// - 66 kV substation Dhardeo village (Rs 11 crore, completion target Mar 31, 2027) — sirf 5dariyanews (non-whitelist) par; retry lead: whitelisted outlet/DIPR corroboration dhoondhna.
// - Jandiala–Wairowal Road to Pakhoke via Dargah Baba Sheikh Fatta Ji link road repair (Rs 1.82 crore) + Gunowal bridge (Rs 81.67 lakh) — sirf 5dariyanews; retry lead: whitelisted corroboration.
// - dailyworld.in "ETO dedicated 66 KV substation" (Oct 17, 2026) — non-whitelisted outlet; retry lead.
// - 66 kV substation Chittar Hara, Nakodar (Rs 7 crore, Dec 4, 2024) — Tribune — SEAT KE BAHAR (Nakodar, Jalandhar).
// - Moga district 4 sadkon ki marammat (Rs 45 crore) — seat ke bahar.
// - PSPCL JE Jatinder Singh Kharar chargesheet (TOI) — ministerial disciplinary action, seat ke bahar, vikas-kaam nahi.
// - Tribune Mar 12, 2024 "AAP leaders on foundation stone-laying spree" — Rs 78 crore ka aggregate 3 seats (Jandiala Guru + Khadoor Sahib + Baba Bakala) me; itemized Jandiala-specific nahi, chunavi-spree framing; iski jagah itemized Tribune reports istemal ki.
// - Feb 2025 PSEB Engineers Association bhrashtachar aarop (Vidhansabha hangama, Tribune/PTI) — aarop "kisi satta paksh neta" par, naam nahi; mantri ne khandan kiya; unke khilaf FIR/janch dastaveji nahi. Sakht niyam: sirf aarop negative nahi.
// - COVID-protest FIR 0271/2021 PS Sadar Tarn Taran (halafnama pending case) — pre-term, karyakaal me koi nyayik vikas dastaveji nahi. PB1-QA precedent ke mutabik negative nahi.
// - Gaddli village 66 kV substation construction inauguration (Mar 17, 2026) — Dashmesh Nagar Tribune report me ullekh, lekin constituency (Jandiala ya bahar) cited page par confirm nahi; seat-sandeh par reject; retry lead.
// - US deportees ko Amritsar airport par swagat (ministers present) — vikas-kaam nahi.
// RETRY-LEADS:
// - Dhardeo 66 kV substation (Rs 11 cr) aur Jandiala–Wairowal Rs 1.82 cr road repair: whitelisted outlet ya Punjab DIPR press release (sarkari portal) par corroboration mile to entry ban sakti hai.
// - publish.tribuneindia.com ka 15-villages wala page 403 de raha tha — www.tribuneindia.com canonical URL se verify karke use kiya (same content).
punjabWorks['harbhajan-singh-eto'] = [

  { title: 'Harbhajan Singh ETO ne 17 February 2023 ko apni Jandiala Guru seat me Chhina Patti gaanv me 25,000 liter ki paani ki tanki ka udghatan kiya, jiske liye Rs 47.36 lakh me 3.71 km pipeline pehle hi bichayi ja chuki thi aur 1,005 logon ko roz 10 ghante paani dene ka dawa kiya gaya; unhone Jandiala me Rs 22.5 lakh ki Mori gate (28.5 feet unchi, 20 feet chaudi) ka kaam bhi shuru karwaya.', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/minister-inaugurates-piped-water-supply-to-jandiala-village-480834/', date: '2023-02-17', note: 'Cited page ke anusar: dateline Amritsar, February 17 (2023-02-17 Friday thi, date -d se verified); tanki se Patti ke 189 gharon ke 1,005 logon ko saaf paani, rozana 85,000 liter, 10 ghante aapoorti; pipeline aur chlorinator unit ka kaam NABARD-27 ke tahat; Mori gate 2 mahine me poori hone ka dawa. Credit: mantri ka vyaktigat udghatan/kaam-shuruaat, fund disclosed.', period: '2022-2027', stage: 'pahal' },

  { title: 'Harbhajan Singh ETO ne 13 March 2024 ko apni Jandiala Guru seat ke 15 gaanvon me sanitation, sewerage, paani aur sadak ke kaamon ka daura kiya — gaanv Muchhal me Rs 8 lakh ki paani ki pipeline ka shilanyas aur Rasulpura, Dashmesh Nagar, Kuhala, Tarsikka, Mehsampur Khurd, Udonangal aur Daburji me paani aur drain pipe bichane ke kaam ka udghatan.', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/cabinet-minister-eto-lays-stones-of-development-works-in-15-villages-600434/', date: '2024-03-13', note: 'Cited page ke anusar: dateline Amritsar, March 13 (2024-03-13 Wednesday thi, date -d se verified), published Mar 14; 15 gaanvon ka ek-diniya daura; Muchhal pipeline shilanyas, baaki 7 gaanvon me water supply/drain pipe laying works ka udghatan. Credit: mantri ka vyaktigat shilanyas/udghatan, fund disclosed.', period: '2022-2027', stage: 'shilanyas' },

  { title: 'Harbhajan Singh ETO ne 13 March 2024 ko Jandiala Guru seat me gaanv Sarja se Jodha Nagar tak Rs 29.45 lakh ki nayi link sadak aur gaanv Kotla Bathungarh se Gurudwara Baba Bhana Sahib tak Rs 59 lakh ki link sadak ka shilanyas kiya, aur Rana Kala Dere aur Narayangarh me bhi link sadken banane ki ghoshna ki.', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/cabinet-minister-eto-lays-stones-of-development-works-in-15-villages-600434/', date: '2024-03-13', note: 'Cited page ke anusar: 15 gaanvon wale daure me hi Sarja-Jodha Nagar (Rs 29.45 lakh) aur Kotla Bathungarh-Baba Bhana Sahib (Rs 59 lakh) link sadkon ka shilanyas; Rana Kala Dere/Narayangarh me link sadken banengi (ghoshna, isi visit me). Credit: mantri ka vyaktigat shilanyas, fund disclosed.', period: '2022-2027', stage: 'shilanyas' },

  { title: 'Harbhajan Singh ETO ne 15 March 2024 ko apni Jandiala seat ke 17 gaanvon me Rs 1 crore se zyada ke vikas kaam shuru kiye — Taragarh me lagbhag Rs 10 lakh ke street aur drain kaam, aur Devidas Pur, Wadala Johal, Raipur Kalan, Kot Khaira, Rumana Chak, Kot Hayat, Jalal, Kuhatwind, Daburji, Buttar Khurd, Dhardio, Sardara, Shaheed Malkit Singh Nagar aur Miharbanpura jaise gaanvon me water drainage, park, paani-saafai, solar light aur open gym ke liye lagbhag Rs 90 lakh ke kaamon ka udghatan.', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/eto-lays-stones-of-development-works-in-17-jandiala-villages-601096/amp', date: '2024-03-15', note: 'Cited page ke anusar: "on Friday" (2024-03-15 Friday thi, date -d se verified), published Mar 16; Taragarh ke street/drain kaam ka udghatan (lagbhag Rs 10 lakh kharch honge); 15 anya gaanvon me drainage/park/water supply sanitation/solar lights/open gym ke kaam inaugurate (lagbhag Rs 90 lakh kharch honge). Dhirekot me sports kit vitaran isi visit ka hissa tha — wo daan/vitaran prakriti ka hai isliye entry me shamil nahi. Credit: mantri ka vyaktigat udghatan, fund disclosed.', period: '2022-2027', stage: 'pahal' },

  { title: 'Harbhajan Singh ETO ne 14 March 2026 ko apni Jandiala Guru seat me gaanv Chhapa Ram Singh se Qila Jiwan Singh tak 1.75 km sadak ke upgrade ka shilanyas kiya, jiski anumaanit laagat Rs 1.36 crore batayi gayi.', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/minister-eto-inaugurates-2-road-upgrade-projects-in-jandiala-guru/amp', date: '2026-03-14', note: 'Cited page ke anusar: event "on Saturday", published 2026-03-14 22:22 IST (2026-03-14 Saturday thi, date -d se verified); mantri ne vyaktigat roop se shilanyas kiya; Jandiala Guru Assembly constituency me sadak. Credit: mantri ka vyaktigat shilanyas, fund disclosed.', period: '2022-2027', stage: 'shilanyas' },

  { title: 'Harbhajan Singh ETO ne 14 March 2026 ko apni Jandiala Guru seat me gaanv Dashmesh Nagar se Rasulpur Kalan tak 3.5 km sadak ke lagbhag Rs 2.84 crore ke upgrade kaam ka udghatan kiya.', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/minister-eto-inaugurates-2-road-upgrade-projects-in-jandiala-guru/amp', date: '2026-03-14', note: 'Cited page ke anusar: event "on Saturday", published 2026-03-14 (Saturday verified); mantri ne upgradation work ka udghatan kiya; Jandiala Guru Assembly constituency me sadak. Credit: mantri ka vyaktigat udghatan, fund disclosed.', period: '2022-2027', stage: 'pahal' },

  { title: 'Harbhajan Singh ETO ne 24 June 2026 ko apni Jandiala Guru seat ke gaanv Dashmesh Nagar me lagbhag Rs 7 crore ke 66 kV power substation ka shilanyas kiya, jisme 66/11 kV, 20 MVA ka transformer lagega aur seedhe 4,604 upbhoktaon ko fayda pahunchne ka dawa kiya gaya.', category: 'Bijli', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/66-kv-substation-to-strengthen-power-supply-in-jandiala-gurus-dashmesh-nagar/', date: '2026-06-24', note: 'Cited page ke anusar: event "on Wednesday", published 2026-06-25 04:00 IST (2026-06-24 Wednesday thi, date -d se verified); mantri ne vyaktigat shilanyas kiya; substation se Dashmesh Nagar ke saath Akalgarh Dhapaiyan, Rasulpur, Malowal, Bamma aur Khalehira ke upbhoktaon ko labh, apratyaksh roop se lagbhag 22,705 upbhokta; commissioning ke baad Category-I (shahri-stariya) bijli aapoorti ka dawa. Credit: mantri ka vyaktigat shilanyas, fund disclosed.', period: '2022-2027', stage: 'shilanyas' },

  { title: 'The Times of India ki report ke anusar Harbhajan Singh ETO ne apni Jandiala Guru seat ke kayi gaanvon me Rs 2.78 crore ki link sadak pariyojnaon ka shilanyas kiya, jisme gaanv Saido Lehal me Rs 1.40 crore se 3.50 km lambi aur 10 feet chaudi interlocking sadken shamil hain.', category: 'Sadak', badge: 'news', sourceLabel: 'The Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/chandigarh/over-rs-2-5cr-development-push-for-jandiala-guru-villages/articleshow/130426542.cms', date: '2026-03-24', note: 'Date reasoning: TOI text me event "on Tuesday" aur AAP Punjab ka usi event ka tweet March 27, 2026 ka hai — isse pehle wala Tuesday 2026-03-24 tha (date -d se Tuesday verified). Cited page ke tathya: Saido Lehal me Rs 1.40 crore, 3.50 km, 10 feet chaudi interlocking sadken; kul Rs 2.78 crore ki link sadak pariyojnaen; mantri ne vyaktigat shilanyas kiya. Credit: mantri ka vyaktigat shilanyas, fund disclosed.', period: '2022-2027', stage: 'shilanyas' },
];
// PB2: harbhajan-singh-eto — 8 entries

// PB2 worker: ganieve-kaur-majithia (Majitha, Amritsar, SAD)
// REJECT-LOG:
// 1. 'Ganieve Kaur questions CM's development claims in Majitha' (The Tribune, ~Jan 2026) — CM ke development claims par rajnaitik pratikriya; koi bhautik kaam nahi; REJECT.
// 2. 'Majitha MLA's focus on women empowerment, jobs' (The Tribune, 4 May 2022) — karyakaal shuru hone par iraade/yojnayein, keval ghoshna; REJECT.
// 3. Zee News / ThePrint pre-poll 2022 ('development agenda aage badhayengi') — chunavi waade; REJECT.
// 4. 'CM Mann lays foundation for 23 rural link roads in Majitha' (editorji) — CM ka karyakram, MLA ki koi dastaveji bhoomika nahi; non-whitelist source bhi; REJECT.
// 5. Akal Takht letter (The Tribune, Aug 2026), Privilege Motion vs FM (Asianet newsable), zila-parishad rigging claims (HT) — rajnaitik bayan, vikas-kaam nahi; REJECT.
// 6. Pati Bikram Singh Majithia ke saare mamle: DA case (VB FIR, Rs 540 crore, 25 Jun 2025 giraftari), ED case, drugs case, Majitha police station FIR No. 91 (31 May 2026) — family-rule par sakhti se bahar. Indian Express ki FIR article kholkar verify: 5 naamzad aaropiyon me Ganieve Kaur ka naam nahi; FIR Bikram Singh Majithia aur sahyogiyon par hai.
// 7. HT interview (Jul 2025) me VB ke Ganieve ke naam Shimla/Jalandhar sampatti ke dawe — pati ke DA case ke aarop, Ganieve ke khilaf alag FIR/chargesheet nahi; negative entry nahi.
// 8. 'Bikram Majithia seeks vigilance probe in road construction' (The Tribune, 25 Jan 2024) — pati ki vigilance-probe maang, usi Majitha-Fatehgarh road ke ghatiya kaam par; MLA ka kaam nahi; REJECT.
// 9. Grokipedia ka 18 Aug 2025 VB-summons dawa — non-whitelist, aur summons bhi pati ke DA case me poochtaachh ke liye; Ganieve naamzad aaropi nahi; family-rule par bahar.
// RETRY-LEADS: Majitha seat me Rangla Punjab Vikas Scheme (FY 2025-26 se, Rs 5 crore/segment/vitt-varsh, DC-administered) ke kaam — DC ki suchi ya DIPR press release me MLA ki sifarish/bhoomika dastaveji mile to tabhi entry banegi; is worker ko whitelisted source me aisi suchi nahi mili.
punjabWorks['ganieve-kaur-majithia'] = [

  {
    title: 'The Tribune ki 14 Nov 2023 ki report ke anusar SAD MLA Ganieve Kaur Majithia ne apni Majitha seat me Majitha-Fatehgarh Churian road ki Rs 10.31 crore ki marammat pariyojna ka udghatan kiya, jiske liye Central Road and Infrastructure Fund (CRIF) se rashi mili thi.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/centre-releases-funds-for-road-repairs-in-sad-mlas-area-562445/amp',
    date: '2023-11-14',
    note: 'Cited page ke tathya: Amritsar dateline 14 November 2023 (page published 2023-11-15; date -d se 2023-11-14 Tuesday verified); Ganieve Kaur Majithia ne Rs 10.31 crore ki Majitha-Fatehgarh Churian road marammat pariyojna ka udghatan kiya; rashi CRIF se kendriya sadak mantri Nitin Gadkari ne jaari ki aur SAD adhyaksh Sukhbir Singh Badal ne bhi Gadkari se ye mudda uthaya tha. MLA ki dastaveji bhoomika: unhone Punjab Vidhan Sabha me is sadak ka mudda uthaya tha — sadak 2013 me SAD sarkar ke samay chaudi ki gayi thi, 2018-19 me nirdharit marammat nahi hui aur AAP sarkar ne rajya kosh se marammat nahi karayi. MLA ne maang ki ki Amritsar-Majitha section ki marammat rajya sarkar apne kosh se kare aur poori sadak chaar lane ki jaye (ye maangein hain, kaam nahi). Credit capped: fund kendra ka (CRIF) hai aur Gadkari/Badal ka shrey page me darj hai; udghatan ke baad kaam ki sthiti ki swatantra pushti isi page me nahi hai.',
    period: '2022-2027',
    stage: 'pahal',
  },
];
// PB2: ganieve-kaur-majithia — 1 entries

// PB2 worker: kunwar-vijay-pratap-singh (Amritsar North, AAP)
// REJECT-LOG:
// - Tribune 31 Oct 2022 "Paper mill opens free of cost health centre in Amritsar" — MLA ne paper mill ke CSR health centre ka udghatan kiya; private/CSR initiative, sarkari sanrachna nahi — REJECT (CSR samaroh niyam).
// - Tribune Oct 2022 "Assembly in Session: Set up fire station in Civil Lines area" — Vidhan Sabha me keval maang, koi dastaveji nateeja nahi — REJECT (sirf maang).
// - PTI/Business Standard 3 Sep 2024 "Amritsar has turned into hell" call-attention notice — House me keval mudda uthana, koi documented outcome nahi — REJECT.
// - Tribune Jun 2022 "MLA Kunwar Vijay Partap Singh raises contaminated water supply issue in Punjab Vidhan Sabha" — keval maang, outcome nahi — REJECT.
// - punjaboutlook.com "report card" series (roads/sewerage/street lighting claims, Naushehra Khurd, BRTS questions) — non-whitelisted chhota portal + sirf MLA ke apne report-card dawe, independent verification nahi — REJECT.
// - Tribune Nov 2022 "Kunwar Vijay Partap Singh's supporters continue stir against recarpeting work" — samarthakon ka dharna (Bhagat Kabir Marg), MLA par koi FIR/janch nahi; valid negative nahi — REJECT.
// - Tribune 15 Nov 2025 IIPG conference address + DDCMC meet report — conference bayan / review meeting, documented works outcome nahi — REJECT.
// - The Hindu/NDTV/PTI 29 Jun 2025: AAP ne Kunwar Vijay Pratap Singh ko 5 saal ke liye party se suspend kiya (Majithia disproportionate-assets arrest par party-line ke khilaf bayan) — party karyawahi akele negative NAHI (sakht niyam) — REJECT.
// - Shobha vs State of Punjab (P&H HC, 2021): SIT chairman ke roop me unki jaanch par HC ki tippaniyan — pre-term (2021), karyakaal me koi nyayik vikas nahi — REJECT (pre-term niyam).
// RETRY-LEADS: koi nahi.
// NEGATIVE SEARCH: karyakaal (Mar 2022+) me unke KHILAF koi FIR/chargesheet/adhyakari janch established whitelisted media me nahi mili; ve kayi mamlo me (sacrilege probes, hooch tragedy) shikayatkarta/vakta ki bhoomika me rahe hain — aaropi nahi.
punjabWorks['kunwar-vijay-pratap-singh'] = [

  { title: 'Amritsar North seat ke vibhinn ilakon (Ranjit Avenue, Akash Avenue, Green Avenue, Kashmir Avenue, Gopal Nagar) me MLA Kunwar Vijay Pratap Singh ki pehal par sadak marammat aur patch-work shuru hua, jo unhone sambandhit adhikariyon se baat karke turant chalu karvaya', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/road-repair-renovation-begin-in-amritsar-north-assembly-segment/amp', date: '2024-11-29', note: 'Cited page ke tathya: Amritsar North MLA ne nivasiyon ki shikayaton (do-pahiya chalakon ke liye khatarnak sadken) ke baad sambandhit adhikariyon se baat karke marammat/patch work turant shuru karvaya; MC mahinon se in sadkon ki marammat nahi kar rahi thi. Credit capped: ye MC ki routine marammat hai jise MLA ne authorities par dabav dalkar karvaya; kaam ki poorti ki pushti isi report me nahi hai.', period: '2022-2027', stage: 'pahal' },

  { title: 'MLA ka dawa — Amritsar North me 90 pratishat vikas karye poore ho chuke hain aur ye kaam CM ke vivekadheen (discretionary) fund se hue hain, isliye unhone BJP neta Shwait Malik ko khula bahas ki chunauti di', category: 'Any', badge: 'dawa', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/kunwar-challenges-malik-for-debate-over-development-works/', date: '2025-03-31', note: 'Badge dawa hai: cited page par MLA ke apne press conference ke bayan darj hain — 90% works complete ka dawa, CM ke discretionary fund ka shrey, apne naam ki foundation plate na lagane ka dawa, aur Malik ke ghar ke bahar ki Court road dobara banne ka dawa. Vivad disclosed: purv Rajya Sabha sadasya Shwait Malik ne isi page me kaha ki AAP ki antrik kalah se seat ka vikas ruka hai, sadken tooti, park upekshit, sewerage aur kachra prabandhan par dhyan nahi diya gaya; 12 gram panchayaton ke MC me vilay ke prastav ka mudda bhi utha. Koi independent verification cited page me nahi hai. Date: page par Published 2025-03-31 (Monday, date -d se verified).', period: '2022-2027' },
];
// PB2: kunwar-vijay-pratap-singh — 2 entries

// PB2 worker: dr-jasbir-singh-sandhu (Amritsar West SC, AAP)
// Research: browser.search + Tribune pages kholkar padhe gaye (search snippet source nahi).
// Pehchan: Dr. Jasbir Singh Sandhu, Amritsar West (SC), AAP — 2022 me Raj Kumar Verka (INC) ko harakar jite.
//          Taranjit Singh Sandhu (BJP LS candidate, ex-diplomat) ALAG vyakti — unki khabar inpar NAHI.
//          Dr. Jaspal Singh Sandhu (GNDU VC) ALAG vyakti — unki khabar inpar NAHI.
// REJECT-LOG:
// - Tribune "Drive to spruce up Amritsar West ends" (~Sep 2026, Mission Clean Punjab 10-day safai abhiyan): sarkari abhiyan ki gatividhi, bhautik vikas-karya ka shrey nahi — REJECT (abhiyan shubharambh/samagapan).
// - Tribune "Finally, end of road for Rs 600-cr BRTS in Amritsar" (~Jun 2026): MLA ne sirf corridor hatane ki manzoori milne ki GHOSHNA ki; MC ne keval prastav pass kiya tha, HC ne baad me faisle par sawal uthaye — keval ghoshna, koi swikrit/manzur kaam nahi — REJECT.
// - Tribune "MLA cites PDC report, says Aam Aadmi Clinics have done well": state-level sarkari yojana ka dawa, Amritsar West seat me koi nirdisht kaam nahi — REJECT.
// - Tribune "Amritsar AAP MLAs kick off door-to-door poll campaign" (Sep 2026): chunavi jansampark abhiyan, vikas-karya nahi — REJECT.
// - Tribune "Legislative assembly committee reviews development projects in Amritsar": samiti ki samoohik baithak me maujoodgi, vyaktigat bhoomika/shrey dastaveji nahi — REJECT.
// - Tribune "West MLA Sandhu demands audit of cooperative bank" (Mar 11, 2023): Vidhan Sabha me maang matra (Amritsar Central Cooperative Bank audit); koi dastaveji nateeja/ashwasan usi report me nahi — REJECT (sirf maang).
// - 5dariyanews "50-Year-Old Drinking Water Pipelines ... to be Replaced Soon" (Question No. 1887, mantri Bains ka ashwasan, Rs 2.98 crore pipeline + Rs 1.42 crore marammat darj): source whitelist me NAHI — entry NAHI bani. RETRY-LEAD dekho.
// - dainiksaveratimes ke 2 items (Oct 2026: door-to-door outreach, Kale sarkari school me meeting): chhota portal, whitelist me NAHI; upar se karyakram-samachar, vikas-karya nahi — REJECT.
// - Negative khoj: "Jasbir Singh" naam par mile sabhi mamle (SAS Nagar jasoosi case ka YouTuber Jasbir Singh; Bhagtupura/Babban Khalsa case ka Jasbir Singh) ALAG vyaktiyon ke hain, Amritsar West ke MLA se koi sambandh nahi — galat-pehchan se bachne ke liye koi negative entry NAHI.
// RETRY-LEADS:
// - Vidhan Sabha Question No. 1887 (purani peeyajal pipelinein, Amritsar West: Chheharta Sahib, Ghanupar Kale, Kot Khalsa, Putlighar): mantri Harjot Singh Bains ne ashwasan diya (Rs 2.98 crore nayi pipeline lagi, Rs 1.42 crore marammat poori). Whitelisted source (Dainik Bhaskar/Jagran/HT/IE/DIPR) par coverage khojo; mili to 'Paani' category, badge 'news', stage 'swikriti' entry ban sakti hai.
// - Rangla Punjab Vikas Scheme (Rs 5 crore/segment/vitt-varsh, DC-administered) ki Amritsar West DC-soochi me MLA ki sifarish wale kaam — sarkari portal/DIPR se suchi mili to 'sarkari' badge entry.
punjabWorks['dr-jasbir-singh-sandhu'] = [

  {
    title: 'Amritsar West ke 18 parkon ke jeernoddhar aur marammat ka kaam Smart City aur Nagar Nigam ke kosh se hoga, jisme kul lagbhag Rs 2.82 lakh kharch honge — MLA Dr. Jasbir Singh Sandhu ke Vidhan Sabha me uthaye sawal par sthaniya sarkar mantri Dr. Inderbir Singh Nijjar ne ye ashwasan diya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/parks-to-be-revamped-in-asr-west-constituency-491152/',
    date: '2023-03-22',
    note: 'The Tribune (Amritsar dateline March 23; updated Mar 25, 2023) ke anusar: West constituency MLA Jasbir Singh Sandhu ne Vidhan Sabha session me parkon ke navinikaran/marammat ka mudda "on Wednesday" uthaya; sthaniya sarkar mantri Dr. Inderbir Singh Nijjar ne jawab me kaha ki 18 parkon ke kaam Smart City aur Municipal Corporation ke kosh se honge, kul lagbhag Rs 2.82 lakh kharch honge aur kaam jald poora hoga. Date reasoning: article me "on Wednesday" darj hai aur dateline March 23 wale hafte ka Wednesday 2023-03-22 tha (date -d se verified) — isi din sadan me mantri ka ashwasan hua. Credit capped: ye mantri-ashwasan hai (stage swikriti); kaam poora hone ki pushti isi report me nahi hai, aur fund MLA ki sifarish se nahi, Smart City/MC ka hai.',
    period: '2022-2027',
    stage: 'swikriti',
  },
];
// PB2: dr-jasbir-singh-sandhu — 1 entries

// PB2 worker: ajay-gupta (Amritsar Central, AAP)
// Research note: pehchan Amritsar Central seat se pakki ki gayi (Dr Ajay Gupta, MBBS, Sanjeevan Hospital Amritsar).
// Delhi Jal Board ke Ajay Gupta (chargesheet/ED), Himachal ke Dr Ajay Gupta (bribery arrest) aur Delhi SI CBI case ke Ajay Gupta alag vyakti hain  -  inpar koi entry nahi.
// MLA ka halafnama 2022 me 0 criminal cases dikhata hai.
// REJECT-LOG:
// - "Chargesheet Fallout: Ajay Gupta's Removal from Delhi Jal Board Advisory Post" (Devdiscourse)  -  Delhi Jal Board wale Ajay Gupta ka mamla, Amritsar Central MLA nahi. Reject.
// - "Former Director, Health, arrested" (Tribune/ThePrint)  -  Himachal Pradesh ke Dr Ajay Gupta (Health Director), Amritsar Central MLA nahi. Reject.
// - "Ajay Gupta vs State Thr. CBI" (indiankanoon)  -  Delhi police ke SI ka 1996 ka purana case, MLA nahi. Reject.
// - "AAP legislator accuses own govt of failing to eradicate drug menace" (Tribune, 2024-06-09)  -  MLA ne apni hi sarkar par nashe-bhrashtachar ki nakami ka bayan diya; ye political commentary hai, FIR/janch/karyavahi nahi, isliye na work na negative. Reject.
// - "2 days after attacking own party over drug abuse, AAP MLA praises Mann" (Tribune, 2024-06-10)  -  upar wale ka follow-up bayan, koi legal development nahi. Reject.
// - "Will fix issues of leprosy ashram: MLA Ajay Gupta" (Tribune, 2025-01)  -  leprosy ashram visit par keval maang/ashwasan (sewerage fix karwayenge), koi shilanyas/lokarpan nahi. Reject.
// - "Negligence would not be tolerated: MLA to officials" (Tribune, 2024-12-27)  -  meeting me Rs 50 lakh ka sewerage de-silting work order announce; ghoshna hai, koi bhautik sanrachna ka lokarpan/shilanyas nahi. Reject.
// - "Eye on 2027 polls, AAP MLAs step up project inaugurations in Amritsar" (Tribune)  -  Khapar Khedi STP ka keval nirikshan, lokarpan/shilanyas nahi. Reject.
// - "Amritsar MLA Gupta inaugurates development works in wards" (newswav)  -  aggregator, whitelist me nahi. Reject.
// - "No road in the Central Assembly constituency will remain incomplete" (5dariyanews)  -  chhota Punjabi portal, whitelist me nahi. Reject.
// - Dainik Savera Times ki teen khabren (ramnagar colony galliyan Sep 2026; street light/road Oct 2026; do transformers Lohgarh/sahila hospital Sep 2026; concrete flooring wards 51/53/57 Sep 2026)  -  source whitelist me nahi, isliye entry nahi; niche RETRY-LEADS me.
// - newsdrum PTI "Opposition seeks arrest of AAP MLA"  -  Amit Rattan Kotfatta (Bathinda Rural) ka mamla, Ajay Gupta nahi. Reject.
// RETRY-LEADS:
// - Dainik Savera Times (2026-09-17/10-02): ward 51/53/57 me concrete flooring, 1,200 LED street lights, Rangla Punjab 3 MLA fund scheme ka dawa  -  Tribune/Express/Bhaskar/Jagran me cover hue to valid entry ban sakti hai.
// - "Negligence would not be tolerated" (Tribune, 2024-12-27) me zikr Rs 50 lakh sewerage de-silting work order  -  agar iske baad post-event completion reporting mile to valid.
punjabWorks['ajay-gupta'] = [

  {
    title: 'Walled city ke Dal Mandi, Swank Mandi aur Namak Mandi ilakon me lagbhag Rs 5 crore ki sadak-gali punarnirman pariyojnaon ka MLA Dr Ajay Gupta ne lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/boost-in-civic-infra-aap-leaders-inaugurate-development-projects/',
    date: '2026-02-18',
    note: 'Date inferred: article 2026-02-19 (Thursday) ko publish hua aur event "Wednesday" bataya gaya, isliye event date 2026-02-18 li gayi. Cited page ke tathya: MLA Ajay Gupta ne Central Assembly segment me Rs 5 crore ke development works ka inauguration kiya  -  Dal Mandi, Swank Mandi aur Namak Mandi (walled city); kaam ka focus lambe samay se kharab padi galiyon-sadakon ka punarnirman; MLA ne kaha concrete flooring tez hogi aur premix carpeting ke liye hot mix plant jald shuru hoga. Article me Khapar Khedi STP 50 MLD expansion, Kairon Market parking (June 2026 tak dedicated) aur Dhaba Khatikan mahila aspatal ke renovation ka sirf zikr hai (pipeline), isliye title me nahi.',
    period: '2022-2027',
    stage: 'lokarpan',
  },

  {
    title: 'Peene ke paani ki kami door karne ke liye Ward 55 aur 56 me naye tubewell lagane ke kaam ka MLA Dr Ajay Gupta ne lokarpan kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/work-of-installing-new-tubewells-starts-in-central-constituency/amp',
    date: '2025-01-19',
    note: 'Date inferred: article 2025-01-20 (Monday) ko publish hua aur inauguration "on Sunday" batayi gayi (e-paper caption bhi Sunday ka hai), isliye event date 2025-01-19 li gayi. Cited page ke tathya: Amritsar Central ke MLA Dr Ajay Gupta ne drinking water samasya door karne ke liye Ward 55 aur 56 me naye tubewell lagane ke development works ka inauguration kiya; Jatta Wali Gali ka purana tubewell repair ke baad bhi bore kharab hone se kaam nahi kar raha tha, isliye municipal corporation ne naye tubewell ki yojana shuru ki. Event me councillors Vicky Dutta, Bobby Dudhwala aur Monit Mahajan maujood the.',
    period: '2022-2027',
    stage: 'lokarpan',
  },

  {
    title: '"Roshan Punjab" abhiyan ke tahat Shakti Nagar aur Waryam Singh Colony me do naye power transformer lagane ka kaam MLA Dr Ajay Gupta ne shuru karwaya',
    category: 'Bijli',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/power-infra-renovation-project-worth-307-cr-launched/amp',
    date: '2025-10-08',
    note: 'Date inferred: article 2025-10-09 (Thursday) ko publish hua; Power Minister Sanjeev Arora ne "Wednesday" ko statewide "Roshan Punjab" campaign launch kiya aur MLA ne "today" transformers ka inauguration kiya, isliye event date 2025-10-08 li gayi. Cited page ke tathya: Amritsar Central ke MLA Dr Ajay Gupta ne Shakti Nagar aur Waryam Singh Colony me do naye power transformer inaugurate kiye, jinse in ilakon me bijli ki lagatar katoti ki samasya khatm hone ka dawa hai; campaign ke tahat poore Punjab me Rs 5,000 crore aur Amritsar jile me Rs 307 crore ki power infrastructure renovation honi hai. Note: do transformers ki lagat ka alag se zikr nahi hai, sirf district-wide Rs 307 crore aur state-wide Rs 5,000 crore ka aankda cited page me hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },

  {
    title: 'Dhaba Khatika me Janana Hospital ke paas khaali zameen par lagbhag Rs 45 lakh ki lagat se astro-turf mini cricket ground ke nirman kaam ka MLA Dr Ajay Gupta ne shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/mini-ground-to-come-up-for-cricket-lovers-at-dhaba-khatika/',
    date: '2026-06-29',
    note: 'Date inferred: article 2026-06-30 (Tuesday) ko publish hua aur inauguration "on Monday" batayi gayi, isliye event date 2026-06-29 li gayi. Cited page ke tathya: Amritsar Central MLA Dr Ajay Gupta ne Dhaba Khatika me Janana Hospital ke paas khaali zameen par cricket lovers ke liye mini ground ke construction ka inauguration kiya; tender nikla, work order jaari hua aur kaam lagbhag Rs 45 lakh ki lagat se shuru hua; ground me astro turf, 20-foot unche nets aur poori roshni (raat me bhi practice) ka plan hai; usi din Ward 55 ki Gali Suniarian aur aaspaas ki galiyon ke construction ka bhi inauguration hua (sewerage repair + concrete flooring). Gym banane ka sirf announcement hai, isliye title me nahi.',
    period: '2022-2027',
    stage: 'shilanyas',
  },

  {
    title: 'Darbar Sahib tak jaane wali chaar radial sadakon (Maha Singh Road, Sherawala Gate, Ghio Mandi Road, Ramsar Road) ke Rs 41 crore heritage-street redevelopment kaam ka MLA Dr Ajay Gupta ne doosre netaon ke saath lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/project-to-redevelop-four-radial-roads-to-darbar-sahib-inaugurated/',
    date: '2025-10-12',
    note: 'Date inferred: article 2025-10-13 (Monday) ko publish hua aur inauguration "on Sunday" batayi gayi, isliye event date 2025-10-12 li gayi. Cited page ke tathya: chaar radial sadakon ke Rs 41-crore redevelopment project ka inauguration hua; MLA Dr Ajay Gupta "other leaders" ke saath event me maujood the (photo caption); sadaken heritage-street look me wider carriageways, underground wiring aur modern lighting ke saath dobara banengi; 350th martyrdom anniversary of Guru Tegh Bahadur Sahib ko dedicated; 18 mahine me poora hone ka lakshya. Credit capped: project municipal/state level ka hai; MLA ki vyaktigat bhoomika ka dastavej cited page me nahi hai, kewal inauguration me maujoodgi ka ullekh hai.',
    period: '2022-2027',
    stage: 'lokarpan',
  },

  {
    title: 'Ward 63, Shiv Nagar Colony me peene ke paani ki kami door karne ke liye naye tubewell ka MLA Dr Ajay Gupta ne lokarpan kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/mla-gupta-inaugurates-tubewell-to-address-rising-water-demand/amp/?utm=relatedarticles',
    date: '2025-06-08',
    note: 'Article 2025-06-08 (Sunday) ko publish hua aur inauguration "today" batayi gayi, isliye date 2025-06-08 li gayi. Cited page ke tathya: Central Assembly constituency ke MLA Dr Ajay Gupta ne Ward 63 ke Shiv Nagar Colony me drinking water shortage door karne ke liye naye tubewell ka inauguration kiya; unhone kaha ki paani ki kami wale ilakon me garmi se pehle hi tubewell lagane shuru kar diye gaye the aur jald chaar aur naye tubewell shuru honge. Article me Jhabbal road ke kaam aur premix road construction ka bhi zikr hai, lekin ye unki announcement hai (koi lokarpan/shilanyas report nahi), isliye title me nahi.',
    period: '2022-2027',
    stage: 'lokarpan',
  },

];
// PB2: ajay-gupta  -  6 entries

// PB2 worker: jeevan-jyot-kaur (Amritsar East, AAP)
// Record verified from src/data/punjab.ts: Jeevan Jyot Kaur, Aam Aadmi Party (AAP), Amritsar East.
// REJECT-LOG:
// - Tribune 2026-06-22 (directs officials re sewer/open drain cleanliness) — sirf nirikshan/nirdesh (review meeting with MC officials); valid work nahi.
// - Tribune "Mission Clean Punjab drive kicks off in city" (~Aug 2026) — sarkari abhiyan ka collective shubharambh; sabhi 5 Amritsar MLA ek saath maujood; dusre ke program me maujoodgi/launch par vyaktigat shrey nahi.
// - Tribune "MLA launches Rs 2.5 crore project to fix low hanging high tension wires in Amritsar East" (Verka/Valla, Rangla Punjab Mission, ~Apr 2026) — page nahi khula (404); snippet me tathya hain lekin source khola nahi gaya, isliye entry nahi banayi; RETRY-LEADS me.
// - 5dariyanews stories (sports infra New Amritsar, drinking water pipeline Ganpati Estate, Aam Aadmi Clinics Ward 25/35, review meeting DC office, new streets Ward 22, cleanliness drive) — chhota Punjabi portal, whitelist me nahi; REJECT.
// - Tribune "BJP demands AAP MLA's resignation" (Jun 2024) — vipakshi BJP leader ki sirf maang; negative nahi; REJECT.
// - Tribune "Got offer to join BJP, says AAP Amritsar MLA" (Apr 2024) — MLA ka dawa, koi work/fund/documented outcome nahi; REJECT.
// - Tribune "Property dealer held for threatening AAP MLA" (May 2022) — MLA victim, FIR doosre vyakti par; na work na negative; REJECT.
// - grokipedia (husband wrong-side driving video, Sep 2025) — parivar ka mamla; MLA khud aaropi nahi; grokipedia whitelist me nahi; REJECT.
// - Dailyhunt (AAP MLAs apologise at Akal Takht, Oct 2026) — aggregator (whitelist me nahi); aur MLA individually aaropi nahi; collective clarification/maafi; negative nahi; REJECT.
// - Pre-term cheque-bounce case (halafnama, 2017): tenure me koi nyayik vikas dastaveji nahi; pre-term mamla bina development ke negative nahi.
// RETRY-LEADS:
// - Verka wires project article (tribuneindia.com/news/amritsar/mla-launches-rs-2-5-crore-project-to-fix-low-hanging-high-tension-wires-in-amritsar-east/): amp aur canonical dono URL 404 par gir rahe hain; snip ke anusar Rangla Punjab Mission, Verka, Valla village se shuruaat; search date ~Apr 2026 (199 din pehle crawl Oct 18, 2026).
// - Tribune epaper 28-Apr-2025 ("Jeevanjot Kaur and Ajay Gupta launch cleanliness drives") — paywalled epaper text; keval campaign launch, isliye low value.
punjabWorks['jeevan-jyot-kaur'] = [
  { title: 'The Tribune ki 25 Aug 2026 ki report ke anusar Amritsar East MLA Jeevan Jyot Kaur ne Ward No. 33 me high-voltage overhead wires ko single-cable wiring se badalne ki Rs 2.5 crore ki pariyojna ka udghatan kiya, jo sarkari Rangla Punjab Scheme ke tahat chal rahi hai.', category: 'Bijli', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/amritsar/mla-jeevanjot-kaur-launches-power-infra-upgrade-project/', date: '2026-08-25', note: 'Cited page ke anusar: MLA ne kaha kai kshetron me Rangla Punjab Scheme ke tahat high-voltage wires hataye ja rahe hain; area residents ki ye lambe samay ki maang thi aur ilakavasion ne is mamle ko uthane ke liye MLA ka dhanyavaad kiya; page me kaha gaya ki nayi wiring se hadse ka khatra kam hoga. Credit capped: Rangla Punjab Scheme ke kaam DC-administered hote hain; page me MLA ki vyaktigat sifarish fund-manzoori tak documented hai (launch + demand uthana), aur report post-event hai. Date reasoning: page par Published 2026-08-25T02:05:29+05:30; date -d se 2026-08-25 Tuesday verified.', period: '2022-2027', stage: 'pahal' },
];
// PB2: jeevan-jyot-kaur — 1 entries

// PB2 worker: inderbir-singh-nijjar (Amritsar South, AAP)
// REJECT-LOG:
// - Tribune May 2023 (Sri Guru Hargobind Sahib Sports Stadium, Sultanwind) — REJECT: sirf nirikshan/daura (cabinet minister ne nirman-karya ki samiksha ki), aur mantri-hat ki khabar — seat-kaam entry nahi.
// - Tribune (treatment plant Vallah / Amritsar Bulk Water Supply visit) — REJECT: sirf nirikshan/daura (visited to review progress), koi lokarpan/shilanyas nahi; project bhi city-wide.
// - Tribune Dec 2022 (75 gharon me 200W solar, Rs 35 lakh; Rs 7.73 crore beautification) — REJECT: mantri-hat (Local Government Minister) ka karyakram; mantri-karyakaal ke faisle record me nahi.
// - Tribune Jan 2023 (Rs 6.81 crore sanctioned, Ward 38 interlocking tiles) — REJECT: mantri-hat + city-wide ghoshna; seat-specific nahi.
// - 5dariyanews Mar 2023 (Shaheedan Sahib skywalk Rs 60 crore foundation stone) — REJECT: mantri-hat + non-whitelist source.
// - Tribune Mar 2023 (Shaheed Madan Lal Dhingra Memorial, Gol Bagh, Rs 2.44 crore) — REJECT: mantri-hat (Local Bodies Minister) ka lokarpan.
// - Tribune Mar 2023 (cow-dog shelter + veterinary hospital foundation, Jhabal road) — REJECT: mantri-hat; Jhabal road Amritsar Central seat ke saath event (Central MLA maujood).
// - Tribune Jan 2023 (school new blocks, Sultanwind girls school foundation) — REJECT: mantri-hat (cityairnews = non-whitelist bhi; Tribune version bhi mantri-roop me).
// - 5dariyanews (Sidhwan canal waterfront Ludhiana) — REJECT: seat ke bahar (Atam Nagar constituency) + mantri-hat.
// - 5dariyanews (Fire Service Training Institute, SAS Nagar Sector 78) — REJECT: seat ke bahar + mantri-hat.
// - Tribune Feb 2026 (New Amritsar flyover Rs 39.85 crore foundation stone) — REJECT: dusre mantri (PWD minister ETO) ka karyakram; Nijjar sirf maujood/vakta the.
// - Tribune Feb 2024 (Heritage Street road-sweeping machines/golf carts) — REJECT: MP Vikramjit Sahney ka ghoshna-karyakram; Nijjar sirf maujood the.
// - Tribune Sep 2025 (UBDC canal water pipeline incident site visit) — REJECT: sirf nirikshan (ground situation dekhne aaye).
// - Tribune Aug 2026 (Bilas Foundation free medical camp, Nijjar ke netritva me) — REJECT: daan/rahat (free camp) — quality niyam me excluded.
// - Tribune Oct 2026 (CKD ka J&K me Punjabi official-status maang) — REJECT: CKD president-roop me bayan, seat-kaam nahi.
// - NDTV Oct 2026 (Bangla Sahib row: AAP MLAs delegation led by Nijjar to Akal Takht) — REJECT: raajnaitik gyaapan/prakriya; vikas-kaam nahi; Nijjar aaropi nahi.
// - Pre-term FIR 184/2020 (PS Cantonment, IPC 420/465/467/468/471/120B) — halafnama me challan dakhil nahi; pre-term bina current-term nyayik vikas ke = negative nahi.
// - 328 missing saroops FIR (Dec 2025) — Nijjar FIR me named NAHI (sirf delegation ke sadasya); negative nahi.
// RETRY-LEADS: koi nahi — epaper page safalta se khul gaya; baaki sab candidates khule aur check hue.

punjabWorks['inderbir-singh-nijjar'] = [

  {
    title: 'Amritsar South MLA Dr Inderbir Singh Nijjar ne Ward No. 37 me Patti Balol se Dadu Jalla shamshan-ghat ko jodne wali nayi sadak ke nirman-karya ka shilanyas/lokarpan kiya; unhone kaha ki is sadak ki lambi lambit maang par sarkar ne ab nirman shuru kiya hai.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/mla-dr-nijjar-inaugurates-new-road-construction-work-in-ward-no-37-of-amritsar/amp',
    date: '2025-03-03',
    note: 'The Tribune (Amritsar): report me kaha gaya ki Amritsar South MLA ne Ward No. 37 me Patti Balol se Dadu Jalla cremation ground tak nayi sadak ka construction inaugurate kiya; Nijjar ne kaha maang lambi thi aur sarkar ne ab construction shuru kiya hai. Date reasoning: report me "here today" hai aur page 2025-03-03T04:20 IST par publish hua — ghatna 2025-03-02 ya 2025-03-03 ki hai, published date adopt ki gayi. Fund disclosure: is specific sadak ki lagat/fund-source report me nahi di gayi; Nijjar ne event par Amritsar me Rs 40 crore ke vikas-karya pragati par hone ka dawa kiya (city-wide dawa, is sadak se alag). Stage: nirman-shuruaat ka lokarpan.',
    period: '2022-2027',
  },

  {
    title: 'Amritsar South MLA Dr Inderbir Singh Nijjar ne Government Elementary School, Bhagtanwala me Rs 9.55 lakh ki lagat se bane naye kamre ka lokarpan kiya.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune (e-paper)',
    sourceUrl: 'https://epaper.tribuneindia.com/3998667/Amritsar-Tribune/AT-17-April-2025',
    date: '2025-04-16',
    note: 'The Tribune Amritsar e-paper (17 April 2025 edition, dateline Amritsar April 16): "Earlier, Nijjar [Amritsar South MLA Dr Inderbir Singh Nijjar] inaugurated a new room at the Government Elementary School, Bhagtanwala, constructed at a cost of Rs 9.55 lakh." Date reasoning: report me "Earlier" likha hai aur article ki dateline 16 April 2025 hai — ghatna 16 April 2025 ko ya usse pehle ki hai, dateline date adopt ki gayi. Stage: poora (tayaar kamre ka lokarpan).',
    period: '2022-2027',
    stage: 'poora',
  },

  {
    title: 'Amritsar South MLA Inderbir Singh Nijjar ne Sharma Colony ke Ward Nos. 45 aur 50 me nayi sewerage pipeline ke nirman-karya ki shuruaat ki; ilake me paani-pradushan aur sewerage disposal ki purani samasya hai, khaaskar monsoon me.',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/eye-on-2027-polls-aap-mlas-step-up-project-inaugurations-in-amritsar/amp',
    date: '2026-02-26',
    note: 'The Tribune (Amritsar): "on Thursday launched construction work on a new sewerage pipeline in Ward Nos. 45 and 50 in Sharma Colony"; area me water contamination aur sewerage disposal ki purani samasya, khaaskar monsoon me. Date reasoning: page 2026-02-26T23:34 IST par publish hua aur "on Thursday" kaha gaya — 2026-02-26 Thursday thi (date -d se verified). Fund disclosure: pipeline ki lagat/fund-source report me nahi di gayi. Stage: nirman-karya shuru (pahal).',
    period: '2022-2027',
    stage: 'pahal',
  },

];
// PB2: inderbir-singh-nijjar — 3 entries

// PB2 worker: jaswinder-singh-attari (Attari SC, AAP)
// MLA record pakka: name 'Jaswinder Singh', party 'Aam Aadmi Party' (AAP), seat 'Attari (SC)', constituencySlug 'attari', karyakaal 2022-2027 (punjab.ts line 761).
// Pehchan: media me 'Jaswinder Singh Ramdas' naam se jane jate hain; former ADC (Punjab govt), AAP ticket 2022 me Gulzar Singh Ranike ko harakar jeete.
// REJECT-LOG:
// - Tribune 'Block-level events under Khedan Watan Punjab Diyan begin in Amritsar district' — MLA ne khel-pratiyogita ka shubharambh kiya (sarkari abhiyan ka keval shubharambh), REJECT.
// - Tribune 'Drug problem a scourge, locals' efforts too needed, say police' (Basarke Gillan awareness campaign, Oct 2026) — MLA police/DC ke saath sirf maujood the, REJECT.
// - Tribune 'Rs 10L grant given to Sikh martyr's village' (10 Feb 2023) — MLA ne shraddhanjali di; Rs 10 lakh grant mantri Kuldeep Singh Dhaliwal ne apne discretionary fund se ghoshit kiya, MLA ka shrey nahi, REJECT.
// - Tribune 'Two-day sports tournament ends at Attari' (21 Feb 2023) — MLA ne medals baante; Rs 2 lakh grant mantri Dhaliwal ne ghoshit kiya, REJECT.
// - Tribune 'Tarn Taran Diary' (Feb 2024) — Tarn Taran-Amritsar road four-laning ka foundation stone mantri Harbhajan Singh ETO ne lagaya; MLA sirf maujood; road seat ke bahar, REJECT.
// - Tribune '80th Independence Day: Cabinet Minister Aman Arora hoists National Flag in Amritsar' (15 Aug 2026) — MLA sirf maujood, REJECT.
// - Tribune 'MLA reviews wheat procurement at Attari grain market' (Apr 2026) — sirf nirikshan/daura, REJECT.
// - Indian Express 'Amritsar man fights battle for 2 brothers lost to drug addiction, no FIR filed for 3 months' (5 Mar 2025) — MLA ne shikayat recommend ki thi; MLA khud aaropi nahi, police-nishkriyata ki khabar hai; negative nahi, REJECT.
// - CM Bhagwant Singh Mann dwara 17 Apr 2026 ko Attari me Rs 57.80 crore ke 121 link roads ke navinikaran ka foundation stone/ghoshna — CM ka state-level programme; MLA ki vyaktigat bhoomika kisi whitelisted source me dastaveji nahi; milin sources (punjabnewsexpress, news24online, brightpunjabexpress, babushahi, wishavwartatimes) sab non-whitelisted, REJECT.
// - 5dariyanews 'MLA Ramdas Distributes Rs 2.50 Crore Grant Cheques to 60 Panchayats of Attari Block' — non-whitelisted source; wahi event The Tribune par whitelisted me verified hai, entry wahan se bani.
// RETRY-LEADS:
// - CM Mann ke 17 Apr 2026 Attari road programme (Rs 57.80 crore, 121 roads) ki whitelisted-source (Tribune/IE/HT/PTI) coverage, jisme MLA ki bhoomika/sifarish dastaveji ho.
// - Attari block ki 60 panchayaton ko Rangla Punjab Scheme ke Rs 2.50 crore ki DC-office itemized suchi (kaun se gaon ko kitna, kaun se kaam).
// - Jaswinder Singh Ramdas ke Vidhan Sabha prashn (2022-2027) ka koi dastaveji nateeja/mantri-ashwasan PTI/Tribune par.
// - Attari constituency ke andar koi naya Sarkari school-building/mohalla clinic jiska lokarpan MLA ne khud kiya ho (Sikhya Kranti April 2025 ke Sohian Khurd ke alawa).
punjabWorks['jaswinder-singh-attari'] = [

  {
    title: 'Attari MLA Jaswinder Singh Ramdas ne Attari block ki 60 gram panchayaton ko Rangla Punjab Scheme ke tahat Rs 2.50 crore ke grant cheques baante, jinse gaanvon me interlocking-tile wali galiyan, nali-sewerage, khel-maidan, gym, anganwadi kendra, panchayat ghar, dispensary bhawan, school classroom, solar light, park, library aur CCTV camera jaise vikas-kaam honge.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/112-villages-in-attari-tarsikka-get-7-50-cr-for-infra-upgrade/amp',
    date: '2026-08-19',
    note: 'Cited page (The Tribune, published 2026-08-20) ke anusar: sarkar ne ‘on Wednesday’ Attari aur Tarsikka ki 112 gram panchayaton ke vikas ke liye Rangla Punjab Scheme ke tahat Rs 7.50 crore ka grant announce kiya; Attari MLA Jaswinder Singh Ramdas ne Attari block ki 60 panchayaton me Rs 2.50 crore ke cheques baante, jabki PWD mantri Harbhajan Singh ETO ne Jandiala Guru seat ke Tarsikka block ki 52 panchayaton me Rs 5 crore ke cheques baante. Grant ka upyog interlocking-tile streets, drains-sewerage, sports grounds, indoor-open gyms, anganwadi kendra, panchayat ghar-dispensary bhawan, talab ki safai-marammaat, classroom, solar light-CCTV, park, library, community hall, cremation ground adi ke liye hoga. Date reasoning: report me ‘on Wednesday’ aur page publication 2026-08-20 (Thursday) — 2026-08-19 Wednesday thi (date -d se verified). MLA ne kaha Attari ke gaanvon ke vikas-karyon me fund ki koi kami nahi hogi aur bachi panchayaton ko jald grant milega. Fund disclosure: ye Rangla Punjab Vikas Scheme hai (Punjab me classic MLALAD band; Rs 5 crore prati segment prati vitt-varsh, DC-administered, FY 2025-26 se) — MLA ne cheques swayam baante isliye bhoomika dastaveji hai. Keval ghoshna nahi; vitran hua hai.',
    period: '2022-2027',
  },

  {
    title: 'Attari MLA Jaswinder Singh Ramdas ne apni seat ke Sohian Khurd gaon me sarkari schools me pure hue Rs 17 lakh ke vikas-karyon ka lokarpan kiya — Government High School Sohian Khurd aur Government Primary School Sohian Khurd ki imaraton ka navinikaran hua.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/promotion-quota-of-principals-hiked-from-50-to-75-dhaliwal/',
    date: '2025-04-16',
    note: 'Cited page (The Tribune, published 2025-04-17) ke anusar: ‘Attari MLA Jaswinder Singh Ramdas today inaugurated Rs 17 lakh development works completed in two government schools in his constituency’; Government High School, Sohian Khurd aur Government Primary School, Sohian Khurd ki imaraton ka navinikaran hua; MLA ne kaha log bachchon ko private schools ki jagah sarkari schools bhejna pasand karenge. Date reasoning: article me ‘today’ aur ‘on Wednesday’; page publication 2025-04-17 (Thursday) — 2025-04-16 Wednesday thi (date -d se verified). Fund disclosure: report me fund ka srot (school grant/SSA adi) specified nahi hai; ye Sikhya Kranti abhiyan ke dauraan pure hue karyon ka lokarpan hai. Bhautik sarkari sanrachna (school buildings) ka vyaktigat lokarpan — valid entry.',
    period: '2022-2027',
    stage: 'poora',
  },

  {
    title: 'Attari MLA Jaswinder Singh Ramdas ne apni seat ki 26 sarv-sammati (unanimously elected) gram panchayaton ko Rs 5 lakh-prati-panchayat ke hisab se inaam-cheques baante — kul Rs 1.30 crore, jisse panchayatein apni prathmikta ke anusar gaon ke vikas-kaam kara sakengi.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/unanimously-elected-panchayats-get-5-lakh-reward-in-ramdas-ajnala/amp/?utm=relatedarticles',
    date: '2026-02-06',
    note: 'Cited page (The Tribune, published 2026-02-07) ke anusar: Ajnala aur Ramdas ke AAP MLAs ne ‘on Friday’ sarv-sammati se chuni gayi panchayaton ko Rs 5 lakh ke cheques baante; Attari MLA Jaswinder Singh Ramdas ne apni seat ki 26 panchayaton (Bhadiyar, Bagrian, Lahori Mall, Muhawa, Rajatal, Galluwal, Jathol, Bhakna Kalan, Khasa Bazar, Chicha Naudh Singh, Heer, Maluwal, Kotli Mian Khan, Varpal Khurd, Badh, Abadi Narainpura, Baba Tehl Singh Nagar, Dera Baba Gani Shah, Gurbaksh Singh Wala, Jhita Chet Singh Wala, Kambo, Kotladal Singh, Kishanpura, Mankiana, Pandori Lubana, Rampura) ko cheques diye. Date reasoning: report me ‘on Friday’; page publication 2026-02-07 (Saturday) — 2026-02-06 Friday thi (date -d se verified). Fund disclosure: ye CM Bhagwant Singh Mann ka chunaavi vaada tha — MLA ke anusar CM ne Ramdas (Attari) seat ke liye Rs 1.30 crore jaari kiye (26 x 5 lakh = 1.30 crore, match karta hai). Ye Rangla Punjab Scheme se alag rajya-sarkar ki inaam-yojana hai. Itemized vitran MLA ne khud kiya.',
    period: '2022-2027',
  },

];
// PB2: jaswinder-singh-attari — 3 entries

// PB2 worker: dalbir-singh-tong (Baba Bakala SC, AAP)
// Pehchan pakki: Baba Bakala (SC), AAP, Winner 2022 — record punjab.ts (l.916) se verified.
// REJECT-LOG:
// - "Health info from clinics to be linked with mobile phones" (Tribune, 2025-08-24): pre-event ghoshna ("will come to phone", "opening 200 more clinics") — sirf ghoshna, REJECT.
// - "Govt to compensate for the loss, MLA tells flood-hit people" (Tribune, ~Aug 2025): CM ka muavza-wada MLA ne duhraya; baadh-rahat/daan category excluded — REJECT.
// - "500-drone show highlights life, teachings of Guru Ravidas at Baba Bakala Sahib" (Tribune, ~Oct 2026): sirf karyakram me maujoodgi — REJECT.
// - "Baba Bakala Govt ITI to be named after Bhai Jaita: Cabinet Minister" (Tribune): mantri Harbhajan Singh ETO ka kaam, MLA sirf maujood (portrait felicitation) — REJECT.
// - "Cong divided house, SAD hobnobbing with BJP: Punjab CM Mann trains guns on Opposition at Baba Bakala" (Tribune, ~Aug 2026): mukhya-atithi samaroh; MLA sirf maujood — REJECT.
// - "Punjab minister Harbhajan Singh ETO lays stone of Rs 78 crore projects in three constituencies" (Tribune, 2024-03-10): mantri ne shilanyas kiya; MLA ki vyaktigat bhoomika dastaveji nahi — REJECT (lead RETRY-LEADS me).
// - Newsgram candidate page ke daave (2024 me dedicated sewerage plant, Beas par illegal mining enforcement, "found guilty 2023 MCC"): aggregator, whitelisted source me confirm nahi — REJECT.
// - COVID-protest FIR 0271/2021 (PS Sadar Tarn Taran, halafnama): pre-term pending case, karyakaal me koi nyayik development nahi mila — halafnama ke pending mamle akele negative nahi, REJECT.
// - "Dalbir Singh Tong launches door-to-door campaign" (5dariyanews): chhota portal (not whitelisted), sirf chunav campaign — REJECT.
// RETRY-LEADS:
// - ETO ke Rs 78 crore package (Tribune, 2024-03-10): kuch kaam Baba Bakala seat me (Mehta-Udonangal road, Mehta-Ladhowali road, Bhinder Memorial Sports Stadium) — MLA ki sifarish/bhoomika DC suchi ya established media me mile to entry valid ho sakti hai.
// - Newsgram-da sewerage plant (2024) / Beas illegal mining enforcement: whitelisted source (Tribune/HT/IE) se confirm ho to valid.
punjabWorks['dalbir-singh-tong'] = [

  {
    title: 'The Tribune ki 13 Oct 2025 ki report ke anusar Baba Bakala AAP MLA Dalbir Singh Tong ne seat ke chaar gaanvon — Thothian, Kaler Ghumman, Niranjanpur aur Lohgarh me kul 7.09 km lambi nayi sadkon ka lokarpan kiya, jinki lagat Rs 1.29 crore thi.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/aap-mla-tong-inaugurates-roads-worth-rs-1-29-crore-in-four-villages/',
    date: '2025-10-13',
    note: 'Cited page ke anusar: MLA Tong ne swayam lokarpan kiya; gaon sarpanchon aur nivasion ne MLA ko shrey diya ki sadkon se aavaagaman aasaan aur sthaniya arthavyavastha majboot hui. Date reasoning: page par published date 2025-10-13 (Monday, date -d se verified) hai; article me event "on Sunday" likha hai (Oct 12) — report ki published date di gayi hai. Fund source article me disclosed nahi.',
    period: '2022-2027',
    stage: 'poora',
  },

  {
    title: 'The Tribune ki 21 Nov 2025 ki report ke anusar Baba Bakala MLA Dalbir Singh Tong ne gaanv Sathiala me lagbhag Rs 36 lakh lagat se banne wale aadhunik khel-stadium ka shilanyas kiya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/3000-villages-to-get-new-stadiums-mla/',
    date: '2025-11-21',
    note: 'Cited page ke anusar: MLA ne swayam shilanyas kiya; MLA ke anusar stadium ka nirmaan ek hafte me shuru hoga aur khiladiyon/sports lovers/panchayat ko samarpit kiya jayega. Date 2025-11-21 (Friday, date -d se verified) page ki published date hai. Fund source article me disclosed nahi.',
    period: '2022-2027',
    stage: 'shilanyas',
  },

  {
    title: 'MLA ka dawa — The Tribune ki 21 Nov 2025 ki report ke anusar Dalbir Singh Tong ne kaha ki Baba Bakala me naya hospital, bus stand, Anganwadi centre aur Gram Panchayat building 5 crore se zyada ke nivesh se ban rahe hain.',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/3000-villages-to-get-new-stadiums-mla/',
    date: '2025-11-21',
    note: 'Badge dawa hai: in chaaron nirmaanon ka tathya keval MLA ke apne bayan par aadharit hai (stadium-shilanyas wali report me darj); kisi lokarpan/shilanyas ya sarkari dastavej ka zikr isi report me nahi hai. Cited page ke anusar: "new hospital, bus stand, Anganwadi centre and Gram Panchayat building are being constructed in Baba Bakala, with an investment of more than Rs 5 crore." Date reasoning: 2025-11-21 (Friday) page ki published date hai.',
    period: '2022-2027',
  },

  {
    title: 'Jalandhar Lok Sabha upchunav (10 May 2023) ke matdan ke din Baba Bakala MLA Dalbir Singh Tong ko Shahkot me upasthiti par IPC Section 188 ke tahat book kiya gaya aur baad me jamanat par riha kar diya gaya — tathya CEO Sibin C ke hawale se The Tribune ne darj kiye.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/action-taken-against-outsiders-ceo-sibin-506735/',
    date: '2023-05-10',
    note: 'Cited page ke anusar: Chief Electoral Officer Sibin C ne kaha — "Baba Bakala MLA Dalbir Singh Tong was booked under Section 188 of the IPC over his presence in Shahkot. Later, he was released on bail." Pehchan seat se pakki (CEO ne "Baba Bakala MLA Dalbir Singh Tong" kaha). Page me chargesheet ya conviction ka zikr nahi — sirf booking + bail ki pushti hai. MLA ki pratikriya is page me darj nahi hai; karyakaal (Mar 2022+) me FIR/giraphat/jamanat — stage-accurate negative entry. Date reasoning: page ki dateline "Chandigarh, May 10" hai; 2023-05-10 Wednesday thi (date -d se verified).',
    period: '2022-2027',
  },

];
// PB2: dalbir-singh-tong — 4 entries
// PB2: Amritsar (11 MLA) — 37 entries merged (QA-checked).

// ---- Punjab works mining — BATCH 3: Tarn Taran (4 MLA) — 2026-10-18 ----
// Research: per-MLA workers; merge + QA parent (coordinator) ne kiya.
punjabWorks['harmeet-singh-sandhu'] = [];
// ======================= REJECT-LOG =======================
// (shanka par reject — galat entry se khali profile behtar)
// R1: "Punjab s rural fitness push reaches Tarn Taran" (The Tribune, 2026-06-26) — zila bhar me 20 gaon me bani 20 gyms; DSO Satwant Kaur ne setup karwaya, sthaniya yuvakon ka bayan. MLA Harmeet Singh Sandhu article me SIRF uddhrit hain (keval tippani), kisi gym ka vyaktigat lokarpan unhone nahi kiya. Rule: keval bayan/tippani reject. URL: https://www.tribuneindia.com/news/amritsar/states-rural-fitness-push-reaches-tarn-taran/
// R2: "Rural government schools get new classrooms" (The Tribune, ~2026-04, 171 din purana) — Bhuse aur Bir Raja Teja Singh gaon ke sarkari elementary schools me naye kamre; lokarpan MLA ke BHAI Rajbir Singh Sandhu ne kiya. MLA khud nahi. Rule: dusre vyakti ke kaam ka shrey MLA ko nahi. Reject. URL: https://www.tribuneindia.com/news/amritsar/rural-government-schools-get-new-classrooms/
// R3: "Model Playgrounds to be built in 20 villages of Tarn Taran constituency" (Oct 2025, punjabnewsline/yespunjab/babushahi) — Rural Resurgence Project ke 3100 model playgrounds; Sandhu ne AAP candidate ke roop me chunav se pehle bayan diya. PRE-TERM (karyakaal Nov 2025 se) aur portalse whitelist me nahi; keval ghoshna/wada. Reject.
// R4: "AAP government releases Rs 28.4-cr for transformation of Tarn Taran villages" (yespunjab, Oct 2025) — liquid waste management ke 361 projects ka dawa AAP candidate ke roop me; PRE-TERM + non-whitelist outlet + keval ghoshna-dawa. Reject.
// R5: "Mann government released Rs 12.96 crore for Tarn Taran under Ashirwad scheme" (cityairnews, Oct 2025) — Rs 51,000 shaadi anudan wali sarkari yojana ka campaign-era bayan; non-whitelist outlet + PRE-TERM. Reject.
// R6: "Tarn Taran will back the party that works among people" (Oct 2025, yespunjab/patialapolitics) — badh rahat rakam (Rs 74 crore seed, SDRF Rs 40,000, muavza) ke bayan AAP candidate ke roop me; sarkari rahat karyakram par bina vyaktigat bhoomika ke shrey; PRE-TERM. Reject.
// R7: Oath ceremony (Tribune, PTI via newsdrum/devdiscourse, 2025-11-20) — shapath-grahan + CM Bhagwant Mann se mulakat; "technical college may soon be set up" keval ghoshna/wada, post-event concrete kaam nahi. Work entry layak nahi. Reject.
// R8: NEGATIVE-check — "Employees, pensioners gherao Tarn Taran MLA Harmeet Singh Sandhu s house" (The Tribune, 2026-09-21) — Sajha Mulazam Manch/Pensioner Front ne ghar gherao kiya (pension disbursal errors, OPS, contractual employees ki regularisation ki maang). Maang-pradarshan hai; MLA khud kisi FIR/chargesheet/janch me aaropi nahi, koi nyayik vikas nahi. Rule: "sirf aarop/maang = NAHI". Negative entry NAHI. URL: https://www.tribuneindia.com/news/amritsar/employees-pensioners-gherao-tarn-taran-mla-harmeet-singh-sandhus-house/
// R9: NEGATIVE-check — "SGPC seeks action against new Tarn Taran MLA Sandhu for defaming Sikh principles for political gains" / "SGPC moves Akal Takht against AAP MLA Harmeet Sandhu over Guru di Golak remarks" (The Tribune, 2025-11-19/20) — victory speech me SGPC par "Guru di Golak" misuse ke aarop par SGPC ne Akal Takht Jathedar ko religious action ke liye letter likha. Dharmik sanstha ki maang hai, koi FIR/chargesheet/sarkari janch/nyayik vikas nahi; MLA ka jawab note me hai ("I stand by what I said... dedicated to the Akal Takht... submit my clarification") lekin rule ke mutabik "sirf aarop/maang = NAHI". Negative entry NAHI. URLs: https://www.tribuneindia.com/news/punjab/sgpc-seeks-action-against-mla-sandhu-for-defaming-sikh-principles-for-political-gains/ aur https://www.tribuneindia.com/news/amritsar/sgpc-moves-akal-takht-against-aap-mla-harmeet-sandhu-over-guru-di-golak-remarks/amp
// R10: Tribune "Tarn Taran Diary" (Nov 2025) — shahar ki samasyaon (khule drains, School of Eminence me playground ki kami) ki list; drains ka mudda 2022-23 me late MLA Kashmir Singh Sohal ne Vidhan Sabha me uthaya tha — pichhle MLA ka kaam, is profile me nahi. Nai MLA ke baare me keval "high hopes" — koi kaam dastaveji nahi. Reject.
// R11: "Bhagwant Mann welcomes Tarn Taran s Harmeet Singh Sandhu" (dnpindia) aur freepressjournal PTI (Oct 3, 2025) — candidate announcement/link roads Rs 174.83 crore ka dawa CM ne kiya; PRE-TERM + dnpindia whitelist me nahi. Reject.
// R12: Flood-relief coverage (devdiscourse/babushahi, Oct-Nov 2025) — sarkari rahat vitaran par campaign-era tippani; dan/rahat kaam aur sarkari abhiyan, vyaktigat lokarpan nahi. Reject.
// R13: greentribunal.gov.in NGT document (2022, sugar-mill/distillery committee) — "Sardar Harmeet Singh Sandhu, MLA" 2007-08 ke prastav se committee bani; 2007-12 wale purane karyakaal ka, vartaman term se asambandhit aur 2002-2025 ke kaam inke profile me nahi jodne. Reject.
// R14: myNeta affidavit (myneta.info/punjab2022) — assets/liabilities khulasa; "Halafname ke pending mamle akele negative NAHI" rule; koi in-term FIR/chargesheet nahi mili. Koi entry nahi.

// ======================= RETRY-LEADS =======================
// L1: Rangla Punjab Vikas Scheme (Rs 5 crore prati segment prati vitt-varsh, FY 2025-26 se, DC-administered) ke tahat Tarn Taran segment ki DC Tarn Taran suchi me MLA ki sifarish/bhoomika mile to whitelist media se dastaveji entry ban sakti hai — ab tak kuch nahi mila. Retry: DC Tarn Taran / DIPR Punjab portal search.
// L2: June 2026 me 20 rural gyms ka actual lokarpan kisne kiya, iska follow-up report Tribune topic pages par check karo — 2026-10-18 tak sirf quote mili, inauguration me MLA ka naam nahi.
// L3: Vidhan Sabha sessions (Nov 2025 special, 2026 budget/session) ki proceedings me unke uthaye prashn/maang ka dastaveji nateeja mile to "Vidhansabha maang ka nateeja" entry ban sakti hai — ab tak kuch dastaveji nahi mila.
// L4: Tribune diary me darj shahar ki samasyaen (khule drains, School of Eminence playground) par in-term koi vyaktigat kaam report ho to retry — 2026-10-18 tak nahi mila.
// PB3: harmeet-singh-sandhu — 0 entries merged (QA-checked).
// ============================================================
// PB3 WORKER — Sarvan Singh Dhun (Khem Karan, AAP)
// slug: sarvan-singh-dhun | term: 2022-2027
// Bhasha: Roman-script Hinglish only. Currency "Rs". No Devanagari/Gurmukhi anywhere.
// badge rules: sarkari = govt portal/doc source; news = media-reported post-event;
//              dawa = MLA ke dawa par aadharit (title me "MLA ka dawa —" framing).
// Naam ki spelling: Tribune "Sarwan Singh Dhunn" likhta hai (wahi source spelling).
// ============================================================

punjabWorks['sarvan-singh-dhun'] = [
  {
    title: 'Khem Karan ke MLA Sarwan Singh Dhunn ne Punjab Sikhia Kranti abhiyan ke tahat halqe ke chaar sarkari schoolon me vikas pariyojnaon ke shilanyas patthar lagaye, jahan ve mukhya atithi the.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/mlas-lay-stones-for-projects-in-schools-to-mark-sikhia-kranti/',
    date: '2025-04-07',
    note: 'Post-event reporting: Tribune (published 2025-04-08T04:38 IST) kehta hai patthar "on Monday" lagaye gaye; date -d se verify — Monday 2025-04-07 thi, isliye tithi 2025-04-07 maani gayi. Article me schoolon ke naam ya fund rakam nahi di gayi, isliye credit capped: ye state Sikhia Kranti program hai, MLA ki bhoomika vyaktigat shilanyas (physical act) tak dastaveji hai.',
    period: '2022-2027'
  }
];
// ======================= REJECT-LOG =======================
// (shanka par reject — galat entry se khali profile behtar)
// R1: tarntaran.nic.in press release (publish 2024-09-16, event 2024-09-15): PWD Minister Harbhajan Singh ETO ne Narli-Chhina Bidhi Chand road ki special repair (6.64 km, Rs 3.46 crore) ka shilanyas kiya; MLA Sarwan Singh Dhun sirf "in the presence of" the. Dusre neta ke karyakram me maujoodgi — reject.
// R2: The Tribune (published 2026-06-13): Sheron Cooperative Sugar Mill dobara khulwane ke liye Sanyukt Kisan Morcha ke Pakka Morcha me MLA ka samarthan; unhone memorandum liya aur CM se baat karne + Vidhansabha me phir maang uthane ka ashwasan diya. Sirf maang/prastav/ashwasan, koi dastaveji nateeja nahi — reject.
// R3: ThePrint (PTI feed, 2026-03-07) / babushahi / cityairnews: CM Bhagwant Mann ne Khem Karan me Rs 137 crore ki rural link road pariyojna ka shilanyas kiya. CM ka kaam; reporton me MLA ki vyaktigat bhoomika dastaveji nahi. Reject.
// R4: The Tribune (2025-04-09) / Hindustan Times: Education Minister Harjot Singh Bains ne Khem Karan ke border schools me Rs 3.07 crore ki pariyojnaon (smart classrooms, science labs, boundary walls) ka lokarpan kiya aur Rs 35 crore halqa-level kharch ka dawa kiya; MLA ne sirf mantri ka dhanyavaad diya. Mantri ke karyakram me maujoodgi — reject.
// R5: daijiworld.com / lokmattimes.com (IANS, 2023-11-19): SAD chief Sukhbir Badal ka aarop ki MLA ke bhatije ko 1 kg heroin aur Pakistan se aaye drone ke saath giraftar kiya gaya, aur Dhun ka 2002 ka drug case record hai. Negative criteria fail: MLA khud aaropi nahi (bhatija giraftar), sirf virodhi ka aarop hai; daijiworld/lokmattimes whitelist me nahi; established media (Tribune/HT/Express/NDTV/TOI/India Today) me ye story nahi mili; myneta.info 2022 halafname me "No criminal cases". Reject.
// R6: The Tribune "Ministers visit villages in border area" (May 2025): Cabinet Ministers Laljit Singh Bhullar aur Harbhajan Singh ETO ne Dall, Van Tara Singh, Thathi Jaimal Singh gaon ka daura kiya; MLA Dhunn saath the. Maujoodgi — reject.
// R7: Tribune epaper Amritsar (2025-05-13): MLA ne border villages Gilpan aur Thehkala ke sarpanchon se mulakat ki (ceasefire violation ke baad). Mulakat/daura, koi bhautik kaam nahi — reject.
// R8: The Tribune "Hundreds turn up for Punjab Police braveheart cremation": shaheed SI Charanjit Singh ke antim sanskar me MLA ki upasthiti. Shok karyakram me maujoodgi — reject.
// R9: The Tribune "AAP leaders protest outside BJP MP Chugh house over video controversy": MLA ne party virodh me hissa liya. Party virodh, works nahi — reject.
// R10: Hindustan Times (2026-01-04 onwards): Valtoha ke sarpanch Jarmal Singh ki Amritsar shaadi venue par hatya; MLA usi venue par upasthit the aur gawah ke roop me bayan diya. Crime story — MLA aaropi nahi, works nahi. Reject.
// R11: Hindustan Times (Zila Parishad/Panchayat Samiti polls): nomination papers ko lekar hue hungame par MLA ne virodhi Virsa Singh Valtoha ko zimmedar thahraya. Chunavi vivaad/bayan, kaam nahi — reject.
// R12: dailyhunt.in / ptcnews.tv (Oct 2026): Akal Takht caste-discrimination vivaad me MLA ne maafi patr diya. Dharmik-rajnaitik vivaad, works nahi; negative criteria (FIR/chargesheet/janch ya nyayik vikas) bhi nahi; sources whitelist me nahi. Reject.

// ======================= RETRY-LEADS =======================
// L1: Rangla Punjab Vikas Scheme (Rs 5 crore prati segment prati vitt-varsh, FY 2025-26 se, DC-administered) ke tahat Khem Karan segment me DC Tarn Taran ki sanction suchi me MLA ki sifarish/bhoomika mile to whitelist media se dastaveji entry ban sakti hai — ab tak kuch nahi mila. Retry: DC Tarn Taran / Punjab DIPR portal search.
// L2: Sheron Cooperative Sugar Mill — Tribune (2026-06-13) ke mutabik MLA ne Vidhansabha me maang uthayi thi aur CM se baat ka ashwasan diya tha; agar mill dobara khulne ka dastaveji nateeja (post-June 2026) mile to entry ban sakti hai.
// L3: PRS mlatrack (https://prsindia.org/mlatrack/sarvan-singh-dhun) par unke uthaye sawalon/debate ka record — whitelist source nahi, sirf lead.
// L4: Punjab DIPR portal (dipr.punjab.gov.in / punjab.gov.in) par "Dhun"/"Khemkaran" press releases — ab tak MLA ke vyaktigat kaam wali koi sarkari release nahi mili.
// PB3: sarvan-singh-dhun — 1 entry merged (QA-checked).
// ============================================================
// PB3 WORKER — Laljit Singh Bhullar (Patti, AAP)
// slug: laljit-singh-bhullar | term: 2022-2027
// Bhasha: Roman-script Hinglish only. Currency "Rs". No Devanagari/Gurmukhi anywhere.
// badge rules: sarkari = govt portal/doc source; news = media-reported post-event;
//              dawa = MLA ke dawa par aadharit (title me "MLA ka dawa —" framing).
// Note: Bhullar cabinet mantri rahe (Jails, Transport) — neeche sirf Patti seat ke
//       kaam hain; transport vibhag ke rajya-stariya faisle (bus routes, PRTC, depots)
//       MLA record me NAHI liye gaye.
// ============================================================

punjabWorks['laljit-singh-bhullar'] = [
  {
    title: 'Pehle budget satra me MLA Laljit Singh Bhullar ki maang par Sri Guru Tegh Bahadur State University of Law, Kairon ke campus nirman ke liye Punjab sarkar ne Rs 6.75 crore ki pehli kisht jaari ki.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Hindustan Times',
    sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/punjab-govt-releases-rs-6-75-cr-for-tarn-taran-law-varsity-campus-101662231429432.html',
    date: '2022-09-04',
    note: 'Rajya-pariyojana hai isliye shrey capped: Bhullar ne pehle budget satra me grant ki maang uthayi, CM Bhagwant Mann ne pehli kisht jaari ki. Campus 25 acre me Kairon gaon me ban raha hai — Kairon Patti Vidhan Sabha seat ka hissa hai (Wikipedia/villageinfo se verify). Published Sep 4, 2022 (Sunday, date -d se verify).',
    period: '2022-2027'
  },
  {
    title: 'Laljit Singh Bhullar ne Patti me bus stand aur Dr Bhim Rao Ambedkar Park me do tubewell pumps ka shilanyas kiya — Rs 4.52 crore ki jalyojna se Patti Municipal Council ke sabhi ilaako tak paani pahunchane ka dawa.',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/to-boost-water-supply-in-patti-bhullar-lays-stones-of-tubewells',
    date: '2025-04-12',
    note: 'Punjab Water Supply and Sewerage Board (PWSSB) ki pariyojana; kul lagat Rs 4.52 crore; naye ilaako ke liye 14-km underground pipeline ka kaam shuru. Event Saturday (2025-04-12, date -d se verify); article Apr 14, 2025 ko publish hua.',
    period: '2022-2027'
  },
  {
    title: 'Laljit Singh Bhullar ne Patti seat ke 674 parivaron (237 nagarpalika Patti + 437 gaon) ko Pradhan Mantri Awas Yojana ke tahat makan-nirman swikriti-patra vitrit kiye.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/674-families-receive-housing-approval-letters-under-pmay-scheme/',
    date: '2025-11-27',
    note: 'PMAY kendriya yojana hai isliye shrey capped: MLA ne labharthiyon ko swikriti-patra saupe. Shahari parivar ko Rs 2.50 lakh aur grameen parivar ko Rs 1.20 lakh makan-nirman ke liye (plus MGNREGA se Rs 31,000 shram). Event Thursday (2025-11-27, date -d se verify); article Nov 28, 2025 ko update hua.',
    period: '2022-2027'
  },
  {
    title: 'Punjab State Warehousing Corporation ke jila prabandhak Gagandeep Singh Randhawa ki aatmahatya ke baad Laljit Singh Bhullar, unke pita Sukhdev Singh Bhullar aur PA Dilbagh Singh par Ranjit Avenue thane me FIR — aatmahatya ke liye uksane, aapradhik dhamki aur samanya irada ke aarop; Bhullar ne Punjab cabinet se istifa diya aur unhe giraftar kiya gaya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/suicide-by-warehousing-corp-official-victims-kin-seek-arrest-of-ex-ministers-father-aide/',
    date: '2026-03-22',
    note: 'FIR 2026-03-22 ko mritak ki patni Upinder Kaur ki shikayat par darj (BNS dharaen: aatmahatya ke liye uksana, aapradhik dhamki, samanya irada); baad me saboot mitane sambandhi pravadhan bhi jode gaye. Randhawa ki maut ke baad Bhullar ne cabinet se istifa diya, phir unhe giraftar kiya gaya. Tribune report (published 2026-09-23) ke anusar janch aur adalati prakriya jari hai; is report me koi nyayik faisla darj nahi. Date 2026-03-22 FIR ki hai, article me darj.',
    period: '2022-2027'
  }
];
// ======================= REJECT-LOG =======================
// (shanka par reject — galat entry se khali profile behtar)
// R1: Sikhya Kranti school infra lokarpan (April 2025, Patti seat ke schools me Rs 1.10 crore + Rs 1.52 crore) — yespunjab, babushahi, brightpunjabexpress, editorji par cover hua; koi bhi whitelist outlet me nahi mila. Whitelist coverage mile to retry — lead L1.
// R2: Patti-Shimla Punjab Roadways bus flag-off (April 2023) — transport vibhag ka karya; task niyam ke mutabik vibhag ke rajya-faisle MLA record me NAHI aate (seat-par dastaveji asar ka dawa bhi route-level hai, bhautik sanrachna nahi). Sources bhi non-whitelist (5dariyanews, patialapolitics). Reject.
// R3: PRTC ka pehla sub-depot Daula gaon, Gidderbaha (ToI, Rs 3.36 crore) — Muktsar district me hai, Patti seat ke bahar. Reject.
// R4: Punjab Roadways strike khatm — transport mantri se meeting Patti me (ToI) — policy/mazdoor-mamla, bhautik vikas kaam nahi. Reject.
// R5: Bus terminal modernisation (Ludhiana, Jalandhar, Sangrur, Patiala, Bathinda — PPP model) — rajya-stariya vibhag yojana, Patti seat ke bahar. Reject.
// R6: Khemkaran-Chandigarh aur Tarn Taran-Muktsar direct buses (Oct 2023) — department route faisle, Patti seat se bahar ke routes. Reject.
// R7: 2024 Lok Sabha (Khadoor Sahib) me Ramgarhia/Suniyar samudaayon par tippani ka vivad — sirf bayan/aarop, koi FIR, chargesheet ya janch report nahi mili. Rule: sirf aarop/maang = NAHI. Reject.
// R8: 2019 me Patti nagarpalika chunav me prachar ke dauran police dwara hirasat ka dawa — pre-term (karyakaal Mar 2022 se) aur wartaman karyakaal me koi legal development nahi. Reject.
// R9: news.webindia123.com par Randhawa case ke articles (FIR details, giraftari) — whitelist me nahi; wahi tathya Tribune par kholkar verify kiye gaye aur wahi source liya. Reject (duplicate, kamzor source).

// ======================= RETRY-LEADS =======================
// L1: Sikhya Kranti ke tahat April 2025 me Patti seat ke sarkari schools me Bhullar ke lokarpan (Rs 1.10 crore + Rs 1.52 crore, school-naam itemized: Thatha, Chaudhriwala, Dargapur, Kheda, Dadehar Sahib, Thathian Mahantan, Panngota, Paringri, Ratta Gudda, Burj Puhla, Marhana, Khara, Nadohar, Asal, Saidpur, Bhagupur, Chuslevarh, Bathe Bhaini, Thakkarpura, Dhariwal, Boparai, Cheema, Dubli, Sabhra) — whitelist outlet (Tribune/HT/IE/ToI) par post-event reporting mile to strong School entries banengi. Retry: Tribune Amritsar section search.
// L2: Randhawa case ke giraftari/remand ke PTI details — News18 aur ThePrint ke PTI pages is VM se 403 block ho gaye (browser access denied). HT/Indian Express/ToI par PTI feed se verify karke note me adalati vikas joda ja sakta hai.
// L3: Randhawa case me chargesheet/nyayalaya ka agla vikas monitor karo — stage-accurate negative update ke liye (ab tak FIR + istifa + giraftari tak verified).
// L4: Rangla Punjab Vikas Scheme (Rs 5 crore prati segment, FY 2025-26 se, DC-administered) ke tahat Patti segment ki DC suchi me MLA ki sifarish/bhoomika mile to entry ban sakti hai — ab tak kuch nahi mila.
// PB3: laljit-singh-bhullar — 4 entries merged (QA-checked; negative Tribune page parent ne khud kholkar verify kiya).
// ============================================================
// PB3 WORKER — Manjinder Singh Lalpura (Khadoor Sahib, AAP)
// slug: manjinder-singh-lalpura | term: 2022-2027
// Bhasha: Roman-script Hinglish only. Currency "Rs". No Devanagari/Gurmukhi anywhere.
// badge rules: sarkari = govt portal/doc source; news = media-reported post-event;
//              dawa = MLA ke dawa par aadharit (title me "MLA ka dawa —" framing).
// Pehchan note: Khadoor Sahib (Tarn Taran), AAP wale Manjinder Singh Lalpura —
// Delhi ke BJP neta Manjinder Singh Sirsa alag vyakti hain, unke record yahan nahi.
// Khadoor Sahib ke MP Amritpal Singh jail me hain — unke/ unke pratinidhiyon ke
// kaamon ka shrey is MLA par nahi joda gaya.
// ============================================================

punjabWorks['manjinder-singh-lalpura'] = [
  {
    title: 'Punjab Sikhia Kranti ke tahat Khadoor Sahib seat ke chaar sarkari schoolon me poori hui pariyojnaon ke udghatan shilanyas MLA Manjinder Singh Lalpura ne swayam rakhe.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/mlas-lay-stones-for-projects-in-schools-to-mark-sikhia-kranti/',
    date: '2025-04-07',
    note: 'The Tribune ke mutabik shilanyas "Monday" ko rakhe gaye aur article 2025-04-08 ko publish hua; 2025-04-07 Monday tha (date -d se verify), isliye event ki tithi 2025-04-07 maani gayi. Schoolon me aayojit samarohon me MLA mukhya atithi the; jila shiksha adhikari (secondary aur elementary) bhi maujood the. Pariyojnaen rajya sarkar ki Punjab Sikhia Kranti yojna ki hain; shilanyas MLA ne vyaktigat roop se rakhe, isliye vyaktigat shrey mana gaya lekin yojna sarkari hone se shrey capped.',
    period: '2022-2027',
    stage: 'poora'
  },
  {
    title: 'Dhunda gaon ke sarpanch Jaswant Singh ne sarvajanik roop se kaha ki sewerage, pashu chikitsalaya aur panchayat ghar jaise vikas kaam MLA Manjinder Singh Lalpura ke margdarshan me pragati par hain.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/amritsar/sarpanch-members-of-dhunda-panchayat-leave-cong-for-aap/',
    date: '2026-04-16',
    note: 'Article "Thursday" ke samaroh ki report karta hai aur 2026-04-17 ko subah 02:30 IST publish hua; 2026-04-16 Thursday tha (date -d se verify), isliye event ki tithi 2026-04-16 maani gayi. Ye sarpanch ka sarvajanik shrey hai (Dhunda panchayat ke Congress se AAP me shamil hone ke samaroh me kaha gaya), isliye shrey capped; kaamon ke liye fund ya yojna ka khulasa article me nahi hai.',
    period: '2022-2027',
    stage: 'nirmanadheen'
  },
  {
    title: 'Tarn Taran adalat ne 2013 ke chhedchhad aur marpit mamle me Khadoor Sahib ke MLA Manjinder Singh Lalpura ko doshi thahra kar 4 saal ki qaid sunai.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/nation/2025/Sep/12/punjab-khadoor-sahib-mla-manjinder-singh-lalpura-sentenced-to-four-years-in-dalit-woman-molestation-case',
    date: '2025-09-12',
    note: 'Additional Sessions Judge Prem Kumar, Tarn Taran ne 2025-09-10 ko doshi thahraya aur 2025-09-12 (Friday) ko saza sunai: SC/ST Act ke tahat 4 saal, IPC 354 me 3 saal, IPC 506 me 1 saal, IPC 323 me 1 saal (sabhi ek saath chalengi); jurmana bhi lagaya gaya. Mamla 2013 ka hai (FIR City Police Station Tarn Taran, case 59/13); ghatna ke samay Lalpura taxi driver the; shikayatkarta Anusuchit Jati samudaay ki mahila. Faisle ke baad MLA ko hirasat me liya gaya aur baad me Amritsar Central Jail bhej diya gaya. Kul 12 log doshi thahre (7 giraftar, 1 ki maut trial ke dauraan, 1 Tihar me band, 3 farar). MLA ka jawab on record: AAP pravakta Neel Garg ne kaha ghatna MLA banne se pehle ki thi aur party galat kaam ka bachav nahi karegi. Vikas: 2026-02 me Khadoor Sahib seat khaali ghoshit karne ki PIL par Punjab-Haryana HC ne notice diya (The Tribune, 2026-02-23), lekin 2026-03-31 ko HC ne pakshon ke samjhote (2026-02-04, CJM Tarn Taran ne "bina dabav" pramanit kiya) par dosh-siddhi radd kar di (The Tribune: https://www.tribuneindia.com/news/punjab/high-court-sets-aside-conviction-of-aap-legislator/amp/). Isliye vartaman sthiti: saza radd, lekin 2025 ki dosh-siddhi aur saza vartaman karyakaal ka nyayik vikas hai.',
    period: '2022-2027'
  }
];
// PB3-QA (parent): manjinder-singh-lalpura ki sadak-shilanyas entry DROP ki gayi — mool shilanyas mantri Harbhajan Singh ETO ne rakha tha, MLA sirf samaroh me upasthit the; sirf maujoodgi wala rule lagu.
// ======================= REJECT-LOG =======================
// (shanka par reject — galat entry se khali profile behtar)
// R1: Indian Express (Sep 2024): "Cow feed firm linked to AAP leader carrying out development works" — Cowberry AGROVET OPC Pvt Ltd ke Baljeet Singh (AAP neta Ranjit Singh Cheema ke bhai) par Khadoor Sahib block ke panchayat grants me ghotaale ka aarop; Tarn Taran prashasan janch kar raha tha. Baljeet ne kaha "I have a good relationship with MLA Manjinder Singh Lalpura". MLA khud aaropi NAHI; sirf sambandh ka dawa; janch ka natija dastaveji nahi — negative nahi banta. URL: https://indianexpress.com/article/cities/chandigarh/cow-feed-firm-aap-leader-development-works-tarn-taran-administration-9569477/
// R2: Akal Takht ne 15 AAP MLAs (Lalpura sahit) ko talb kiya (The Tribune, 2026-10-12) — Giaspura ke jaat-paat aarop par AAP delegation ke memorandum se juda mamla; dharmik sanstha ka talb-patra, FIR/janch nahi; MLA khud aaropi nahi — negative nahi banta. URL: https://www.tribuneindia.com/news/punjab/akal-takht-summons-15-aap-mlas-constituency-in-charges-over-giaspuras-caste-discrimination-allegations/amp
// R3: featuredtimes.com (2022): "AAP Khadoor Sahib MLA launches app to redress public grievances" (E-Office Khadoor Sahib app) — srot whitelist me nahi (chhota portal); app launch bhautik sarkari sanrachna ka lokarpan nahi — reject. Retry-lead: whitelist media par post-launch coverage mile to.
// R4: thechenabtimes.com (2026-06-15): Piddi gaon me kisanon ka virodh — srot whitelist me nahi (chhota portal); virodh aalochna hai, MLA khud aaropi nahi — reject.
// R5: The Tribune (Apr 2022): "Aiming to develop Mand area" interview — Mand kshetra ke liye shiksha/swasthya sudhaar, Civil Ayurveda Hospital Johal Dhaiwala dobara shuru karne ki "koshish", Beas nadi ko kaabu karna, sadkon ki recarpeting "agenda" — sirf maang/irada, koi dastaveji nateeja nahi; keval ghoshna reject. URL: https://www.tribuneindia.com/news/punjab/aiming-to-develop-mand-area-mla-384769
// R6: The Tribune (May 2024): MLA ne Lok Sabha chunav me AAP ummidwar Laljit Singh Bhullar ke liye vote ki appeal ki — chunavi prachar, works nahi. Reject.
// R7: HT (May 2025): Lalpura AAP Majha zone vice-president bane — party pad, works nahi. Reject. SSP tabadlon me prabhav ke "believed to have" wale aarop (Indian Express profile, Sep 2025) — sthapit tathya nahi, sirf andaruni sutron ka dawa; janch/FIR nahi — reject.
// R8: The Tribune (Oct 2026): World Bank team ne Khadoor Sahib School of Eminence ka daura kiya — article me MLA ka zikr hi nahi; World Bank ka daura MLA ka kaam nahi. Reject.
// R9: Halafnama (2022): Indian Express profile ke mutabik 5 criminal cases pending (criminal intimidation, assault on women, rioting with deadly weapons, disobedience) — halafname ke pending mamle akele negative NAHI (rule); in-term FIR/chargesheet inhi par nahi mili. Sirf 2013 mamle ki dosh-siddhi (upar entry) negative bani.
// R10: MP Amritpal Singh (Khadoor Sahib LS, jail me) se jude koi kaam is MLA par nahi jode gaye — task ke sakht nirdesh ke anusar bahar rakha gaya.
// R11: Naam-sadrishya check: Manjinder Singh Sirsa (Delhi, BJP) alag vyakti — unse jude koi record yahan nahi liya gaya. Pehchan: Manjinder Singh Lalpura, AAP, Khadoor Sahib (Tarn Taran), 2022 me Ramanjit Singh Sikki ko 16,491 votes se haraya.

// ======================= RETRY-LEADS =======================
// L1: Rangla Punjab Vikas Scheme (Rs 5 crore prati segment prati vitt-varsh, FY 2025-26 se, DC-administered) ke tahat Khadoor Sahib segment ki DC suchi me MLA ki sifarish/bhoomika dastaveji mile to whitelist media se entry ban sakti hai — ab tak kuch nahi mila. Retry: DC Tarn Taran / DIPR Punjab portal search.
// L2: "Cowberry AGROVET" janch (R1) ka antim natija whitelist media par aaye to sthiti dobara aanki ja sakti hai — filhal MLA aaropi nahi.
// L3: Dhunda panchayat wale kaamon (sewerage, pashu chikitsalaya, panchayat ghar) ke poora hone ki post-event reporting mile to stage 'poora' me update kiya ja sakta hai.
// L4: 2013 mamle ki HC set-aside (2026-03-31) ke baad seat-vacancy PIL ki sthiti (moot hui ya nahi) par whitelist media reporting mile to negative entry ke note me joda ja sakta hai.

// ======================= QA =======================
// Searches: ~8 web searches (EN + Punjabi-script); har mention whitelist source se kholkar padha.
// Valid entries: 3 (School shilanyas 2025-04-07; Sadak shilanyas samaroh 2024-02-25 capped; Dhunda panchayat shrey 2026-04-16 capped) + 1 negative (dosh-siddhi/saza 2025-09-12, baad me HC set-aside note sahit).
// Weekday verify: 2025-04-07 Monday, 2024-02-25 Sunday, 2026-04-16 Thursday, 2025-09-12 Friday — sab date -d se verify.
// Koi Roman-script violation nahi; currency "Rs"; strings me seedhe quotes nahi; negative entry me stage field nahi.
// PB3: manjinder-singh-lalpura — 3 entries merged (QA-checked; negative: dosh-siddhi + set-aside dono charan note me).

// ---- Punjab works mining — BATCH 3: Kapurthala (4 MLA) — 2026-10-18 ----
// Research: per-MLA workers; merge + QA parent (coordinator) ne kiya.
// PB3 worker — sukhpal-singh-khaira (Bholath, INC, tenure Mar 2022+)
// Opposition MLA (Congress, AAP sarkar ke khilaf). Seat-kaam sakht filter ke saath
// khoja gaya: virodhi bayan, sadan me prastav, sarkar par aarop, patr-lekhan,
// press-conference sab REJECT (unka dastaveji nateeja nahi mila).
// Works ke liye whitelisted media me 2022-2027 me unka koi vyaktigat lokarpan ya
// shilanyas nahi mila — isliye sirf 1 dawa-entry (unke apne dawe par aadharit)
// aur 2 negative-entries (2015 mamle ke Mar 2022+ nyayik vikas, pehchan Bholath MLA
// ke roop me pakki, sab stage-accurate framing me, jamanat/raahat utni hi pramukhta se).
// REJECT LOG (considered, entry nahi bani):
// 1. Rs 20.65 crore ke sadak-shilanyas Bholath me (The Tribune, Jan 2025) — shilanyas
//    MP Raj Kumar Chabbewal ne kiya (AAP neta Harsimran Singh aur SDM maujood the);
//    kisi whitelisted source me Khaira ki sifarish ya bhoomika dastaveji nahi.
//    REJECT (dusre neta ka karyakram, bina vyaktigat bhoomika ka sarkari kaam).
// 2. Vikas Kranti rally me Bholath ke liye ghoshit kaam (Dhilwan city Rs 1.53 crore,
//    Nadala Rs 1.18 crore, Bholath fire-brigade cluster office Rs 0.45 crore, 4 Aam
//    Aadmi Clinics Rs 1 crore) — ghoshna CM Bhagwant Mann aur Arvind Kejriwal ne ki;
//    Khaira ki koi bhoomika nahi. REJECT (sirf ghoshna + bina vyaktigat bhoomika).
// 3. Jeet ke baad ki "priorities" (achha sarkari hospital, sports/education centre) —
//    bhavishya ki yojnaen, koi kaam nahi. REJECT (sirf ghoshna).
// 4. Ghar ka hissa giraya jana, Ramgarh, 23 Feb 2026 (The Tribune) — BDPO Bholath ne
//    entrance gate ko atikraman batakar JCB se giraya; Khaira ne ise anyaypurn aur
//    rajnaitik badle ki karwai bataya aur turant court jane ki baat kahi. Khaira par
//    koi FIR ya aapradhik aarop nahi hai — negative rule (FIR/chargesheet/janch me MLA
//    khud aaropi) poora nahi hota. REJECT as negative; work bhi nahi.
// 5. Zameen demarcation ka aarop (TOI/The Tribune, Mar 2026) — Khaira ka dawa ki CM ke
//    dabav me Kapurthala DC ne Ramgarh ki zameen ki demarcation ka adesh diya; koi
//    karwai hui nahi, keval aarop. REJECT (sirf aarop).
// 6. Vidhan Sabha me Khaira ke khilaf 2 prastav (Mar 2026) — sadan/party karyawahi;
//    party karyawahi akele negative nahi. REJECT.
// 7. PM ko patr (TOI, Feb 2026 — caste-and-drug census ka aarop) aur Governor ko patr
//    (Sep 2026 — mantri-niwason ke durupyog ki jaanch ki maang) — keval patr/maang,
//    koi dastaveji nateeja nahi. REJECT (sirf maang).
// 8. Lehra Gaga ke Baba Hira Singh Bhattal college ke lease par sawal (Jan 2026) —
//    keval bayan, aur seat ke bahar (Sangrur). REJECT (bayan + seat ke bahar).
// 9. Sandeep Dhaliwal ke naam par road/school ki maang (PTI, Mar 2020) — pre-term +
//    keval maang. REJECT.
// 10. Purv PSO Joga Singh ki giraftari (The Tribune, Aug 2025) — aaropi Khaira nahi,
//     uska purv PSO hai; sahayak/parivar ke mamle MLA-negative nahi. REJECT as negative.
// 11. TOI "Money Laundering Charges Framed Against MLA Khaira" (Oct 2023) — page 403
//     par khula nahi; khul na sakne wala page source nahi (retry lead). Charges-frame
//     ka tathya NDTV ke 11 Mar 2025 wale PTI page me darj hai, isliye alag entry ki
//     zaroorat nahi padi.
// 12. lawstreet.co "SC dismisses Punjab govt plea against bail" (Oct 2026 crawl) —
//     stale re-crawl lagta hai (wahi judges Bela Trivedi/KV Vishwanathan, wahi HC order
//     4 Jan 2024 — Jan 18, 2024 ke SC order ka shabda-shabda dohrav); koi naya vikas
//     nahi. REJECT (purani khabar ka dohrav).
// 13. Rangla Punjab Vikas Scheme (FY 2025-26 se, Rs 5 crore prati segment prati
//     vitt-varsh, DC-administered) ke tahat Bholath me kisi DC-suchi ya established
//     media report me Khaira ki sifarish ya bhoomika dastaveji nahi mili. REJECT.
// 14. Dhussi Bandh 30-km sadak + 55 km nayi sadkon ka dawa — dawa-entry banayi gayi
//     hai (entry 1); swatantra pushti ya fund-disclosure kisi whitelisted source me
//     nahi mila.
punjabWorks['sukhpal-singh-khaira'] = [
  {
    title: 'MLA ka dawa — Dhussi Bandh par Shri Hargobindopur pul se Dhilwan pul tak 30 km sadak (35-40 gaon jodti hai), 75% kaam poora hone ka dawa; 55 km nayi sadkein bhi ban rahi hain',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/bholath-even-if-i-hadnt-been-freed-i-would-have-emerged-victorious-says-sukhpal-khaira-381483',
    date: '2022-03-28',
    note: 'Cited page ke tathya (interview Jalandhar me 27 Mar 2022 ko hua, published 28 Mar 2022): Khaira ne kaha ki Dhussi Bandh par Shri Hargobindopur bridge se Dhilwan bridge tak 30 km lambi sadak banwai ja rahi hai, jise unhone abhootpurv bataya; ye sadak unke halke ke 35 se 40 gaon jodti hai aur Majha-Doaba ko jodti hai; interview ke samay kaam 75% poora ho chuka tha; 55 km nayi sadkein bhi ban rahi thin. Disclosure: ye keval MLA ka apna dawa hai — swatantra pushti ya fund-disclosure cited page me nahi hai; interview karyakaal ki shuruaat me hua tha aur sadak ka kaam us samay pragati par tha, isliye dawa pichhle karyakaal se chali koshish ka ho sakta hai.',
    period: '2022-2027',
  },
  {
    title: '2015 NDPS mamle ki dobara SIT jaanch me aaropi banakar 28 Sep 2023 ko Chandigarh se giraftar; JMIC Jalalabad ne 2 din ka police remand diya; Punjab-Haryana HC ne 4 Jan 2024 ko jamanat di, SC ne 18 Jan 2024 ko barkarar rakha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/punjab/khaira-produced-in-jalalabad-court-remanded-in-two-day-police-custody-548636',
    date: '2023-09-28',
    note: 'Date reasoning: event 28 Sep 2023 (Thursday, date -d se verified); Tribune report 29 Sep 2023 ko publish hui. Cited page ke tathya: Punjab Police ne 28 Sep 2023 ki subah Chandigarh se Congress MLA Sukhpal Singh Khaira ko giraftar kiya — nayi SIT (Apr 2023 me DIG Swapan Sharma ke netritv me gathit) ki jaanch ke aadhaar par; aarop: drug smuggling (Pakistani smugglers ki sanliptata ka aarop), money laundering aur fake passport racket; police ne SIM cards (Indian aur Pakistani), videsh-yatraon ka vivran aur accounts/property ka vivran manga; convicted smuggler se 78 baar baat ka aarop; JMIC Jalalabad ne 2 din ka police remand diya (police ne 7 din manga tha). Background (cited page ki timeline): Mar 2015 me Jalalabad police ne 9 vyaktiyon ko 2 kg heroin, 24 gold biscuits, 1 desi pistol, 2 Pakistani SIM cards aur ek Tata Safari ke saath pakda; Gurdev Singh (convicted) ko Khaira ka vishwaspatra bataya gaya; 31 Oct 2017 ko Khaira ko additional accused ke roop me summon kiya gaya. Khaira ka jawab on record: call record ke aadhaar par jhootha phasaya gaya — pehle Badalon ne, phir Capt Amarinder Singh ne, ab AAP ne, usi 2015 NDPS mamle me; unke vakeel ne 2017 ka video clip pesh kiya jisme Bhagwant Mann (tab Sangrur MP) ne kaha tha ki Khaira bina saboot ke jhoothe drug case me phasaya gaya hai. Raahat utni hi pramukhta se: Punjab-Haryana HC ne 4 Jan 2024 ko NDPS mamle me jamanat di; Supreme Court ne 18 Jan 2024 ko Punjab sarkar ki appeal kharij karke jamanat barkarar rakhi (The Tribune, 9 Aug 2025 ki report me Khaira ke bayan ke hawale se). Pehchan: Bholath MLA (INC). Stage: giraftari + remand + jamanat barkarar; trial ka antim parinaam cited pages me nahi.',
    period: '2022-2027',
  },
  {
    title: 'Drug-linked money laundering mamle me ED ne 8 Mar 2025 ke adesh se Chandigarh ka Rs 3.82 crore ka makan attach kiya; Mohali court me Oct 2023 me charges frame hue',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'NDTV (PTI)',
    sourceUrl: 'https://www.ndtv.com/india-news/probe-agency-enforcement-directorate-attaches-punjab-congress-mla-sukhpal-singh-khaira-chandigarh-house-in-drugs-case-7901720/amp/1',
    date: '2025-03-11',
    note: 'Date reasoning: PTI dateline New Delhi, 11 Mar 2025 (Tuesday, date -d se verified); attachment adesh 8 Mar 2025 ka. Cited page (PTI feed) ke tathya: ED ne PMLA ke tahat 8 Mar 2025 ko Chandigarh Sector 5 me sthit Khaira ka makan (keemat Rs 3.82 crore) provisionally attach kiya; ED ka aarop — Khaira ne apne "close associate" Gurdev Singh aur uske videsh-sthit sahyogiyon dwara chalaye ja rahe international drug syndicate se "generated" Rs 3.82 crore ke proceeds of crime ko "acquired and utilised" kiya; ED ka dawa — drug smuggling ke liye suraksha/rasta dene ke badle Gurdev Singh ne Khaira ko Rs 3.82 crore nakad diye aur drug ke paison se uske chunav-abhiyan fund kiye; 1 Apr 2014 se 31 Mar 2020 tak Khaira aur parivar ne Rs 6.61 crore kharch kiye aur gyaat aay se Rs 3.82 crore zyada "unaccounted" kharch; ye Mar 2021 ki searches me zabt handwritten notebooks se mila; special PMLA court Mohali me Jan 2022 me chargesheet dakhil hui aur Oct 2023 me charges frame hue. (Page me "arrested by the ED in November 2011" likha hai — chargesheet Jan 2022 ke sandarbh se ye spasht typo hai, sahi varsh 2021 mana gaya hai.) Khaira ka jawab on record: media se pata chala, ED ya kisi sarkari source se koi notice nahi mila; ise "pure character assassination" bataya aur BJP par ED ke durupyog se vipaksh ko nishana banane ka aarop lagaya. Stage: pre-term me ED giraftari (Nov 2021) aur HC bail (27 Jan 2022, PMLA); karyakaal me charges frame (Oct 2023) aur attachment (Mar 2025); trial ka antim parinaam cited page me nahi. PMLA bail-radd plea par SC ke 15 Jan 2025 ke faisle ke liye dekho agla entry.',
    period: '2022-2027',
  },
  {
    title: 'PMLA mamle me Punjab-Haryana HC ki 27 Jan 2022 wali bail ke khilaf ED ki plea Supreme Court ne 15 Jan 2025 ko kharij ki — jamanat barkarar',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/punjab/ed-dismisses-eds-plea-seeking-cancellation-of-sukhpal-khairas-bail/amp',
    date: '2025-01-15',
    note: 'Date reasoning: page par Published 2025-01-15T21:03:25+05:30; "Wednesday" ka zikr — 2025-01-15 Wednesday thi (date -d se verified). Cited page ke tathya: Supreme Court (Justice MM Sundresh ki bench) ne ED ki us plea ko kharij kar diya jisme Punjab-Haryana HC ke 27 Jan 2022 ke adesh (PMLA mamle me Khaira ko bail) ko radd karne ki maang thi; bench ne kaha ki wo plea par vichar ke liye pravritt nahi hai; Additional Solicitor General SV Raju ne aarop lagaya ki Khaira trial me deri kara raha hai. Khaira ne X par likha ki SC ne unhe nyay dilaya. Stage: pre-term bail (27 Jan 2022) par karyakaal me antim nyayik muhar (15 Jan 2025) — PMLA track me bail barkarar; trial ka antim parinaam cited page me nahi. Pehchan: Bholath MLA (INC).',
    period: '2022-2027',
  },
];

// PB3: sukhpal-singh-khaira — 4 entries merged.
// ============================================================
// PB3 WORKER — Rana Gurjeet Singh (Kapurthala, INC)
// slug: rana-gurjeet-singh | term: 2022-2027
// Bhasha: Roman-script Hinglish only. Currency "Rs". No Devanagari/Gurmukhi anywhere.
// badge rules: sarkari = govt portal/doc source; news = media-reported post-event;
//              dawa = MLA ke dawa par aadharit (title me "MLA ka dawa —" framing).
// Pariwar-jaal note: bete Rana Inder Partap Singh (Sultanpur Lodhi, IND) ke
// record se bilkul alag rakha gaya hai — bete ki company ke mamle pita par
// nahi jode gaye jab tak whitelisted source me MLA ka naam vyaktigat roop se na ho.
// ============================================================

punjabWorks['rana-gurjeet-singh'] = [
  {
    title: 'Kapurthala Municipal Corporation ki House meeting me lagbhag Rs 11 crore ke vikas prastavon ko swikriti mili; baithak ki adhyakshata MLA Rana Gurjeet Singh ne ki, jisme 30 wardon ki sadkon-galiyon ki marammat ke liye Rs 8.90 crore aur shahar ke anya buniyadi dhanche ke liye Rs 2.47 crore ke kaam shamil hain.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/kthala-mc-house-approves-rs11-crore-development-plan/',
    date: '2025-12-01',
    note: 'The Tribune ki reporting ke mutabik baithak ki adhyakshata MLA ne ki; swikriti Municipal House ki hai (Municipal Commissioner, Mayor aadi maujood). 18 prastav: sadak-gali marammat (Rs 8.90 crore, 30 ward), anya buniyadi dhancha (Rs 2.47 crore), fireman-cum-driver ki bharti, safai upkaran, shamshan/samudayik suvidhaon me sudhar, Shalimar Bagh saundaryikaran, Chhadabadi unnayan aur lagbhag 2500 awara kutton ka nasbandi karyakram. MLA ne sewerage ke liye uplabdh lekin bina istemaal padi Rs 6 crore ki rashi ka mudda uthaya aur turant upyog ki maang ki. Credit capped: kaam MC ne swikrit kiye, MLA baithak ke adhyaksh ke roop me bhoomika me the. Page publish date 2025-12-01 (Monday, date -d se verify).',
    period: '2022-2027'
  },
  {
    title: 'Market regulator SEBI ne Rana Sugars Limited se jude fund-diversion mamle me Gurjeet Singh Rana ko kisi bhi anya listed company me director ya key managerial pad par rehne se do saal ke liye rok diya; company aur uske promoters/sambandhit sansthaon par kul Rs 63 crore ka jurmana laga.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Business Standard (PTI)',
    sourceUrl: 'http://www.business-standard.com/markets/news/sebi-bans-rana-sugars-promoters-from-mkt-for-2-yrs-imposes-rs-63-cr-fine-124082800300_1.html',
    date: '2024-08-28',
    note: 'PTI copy (Business Standard par syndicated): SEBI ke antim aadesh (27 Aug 2024, Tuesday) me paya gaya ki noticee 1 se 9 (RSL ke promoters, diversion ke labharthi) ne PFUTP niyamon ka ullanghan kiya; vyaktigat jurmana Rs 3 crore se Rs 7 crore ki seema me; sambandhit sansthaon se Rs 607 crore (Rs 339 crore receivables + Rs 268 crore byaj) vasoolne ka nirdesh; jaanch agency ke saamne pesh na hone aur dastavej na dene par bhi tippani. Aadesh me "Gurjeet Singh Rana" ka naam Rajbans Kaur, Inder Pratap Singh Rana aadi parivaar-sadasyon ke saath aata hai; Rajbans Kaur MLA ki patni hain (Tribune reporting), is aadhar par pehchan Kapurthala MLA Rana Gurjeet Singh se ki gayi hai (naam-kram "Rana Gurjeet Singh" / "Gurjeet Singh Rana" ka antar note kiya gaya). Cited PTI copy me MLA ki pratikriya uplabdh nahi thi — anupasthiti disclosed. Stage: niyamak ka quasi-nyayik antim aadesh; appeal ya aage ki karyawahi ki soochna cited source me nahi. PTI wire ko Business Standard jaise established outlet par liya gaya hai (whitelist ke "PTI (established outlet par)" niyam ke tahat); seedhe whitelist outlet me ye khabar nahi mili — parent review ke liye flag.',
    period: '2022-2027'
  },
  {
    title: 'Income Tax Department ke Investigation Wing ne Kapurthala ke MLA Rana Gurjeet Singh se jude Punjab, Chandigarh, Uttarakhand aur UP ke 35 se adhik thikano par 6 Feb se 5 din tak search chalayi; sutro ke mutabik Rs 1 crore se adhik behisabi nakad aur kuch zevar zabt hue.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/punjab/i-t-raids-continue-at-ranas-place-for-3rd-day/',
    date: '2025-02-09',
    note: 'Tribune reporting (publish 2025-02-09, Sunday): search 6 Feb 2025 (Thursday, date -d se verify) subah 6 baje se Ludhiana Investigation Wing (Principal Director Investigation Ashish Abrol) ke netritva me, 250 se adhik adhikari, ITBP suraksha; MLA ke Chandigarh Sector 4/9 ke niwas, MLA hostel flat aur Kapurthala/Jalandhar ke thikane shamil. Zabti "sutro ke mutabik" hai — vibhag ka aadhikarik bayan cited source me nahi. Cited sources (Tribune, Indian Express, HT, PTI/ThePrint) me MLA ki vyaktigat pratikriya uplabdh nahi — anupasthiti disclosed (party netaon ne mulakat ki koshish ki; LoP Partap Bajwa ne kaha agency ko kaam karne dein, baad me faisla lenge). Stage: janch/search jaari; cited sources me FIR ya chargesheet ki soochna nahi.',
    period: '2022-2027'
  }
];
// ======================= REJECT-LOG =======================
// (shanka par reject — galat entry se khali profile behtar)
// R1: "Rift between Punjab Congress MLAs Sukhpal Khaira, Rana Gurjeet Singh out in open" (The Tribune, 2024-03-15) — Bholath MLA Sukhpal Khaira ne AICC chief Mallikarjun Kharge ko patra likhkar aarop lagaya ki Rana Gurjeet Singh ne AAP sarkar se Dec 2022 me ethanol plant licence liya aur badle me AAP ki siyasi madad ki. Koi FIR/chargesheet/janch-aadesh report nahi — sirf aarop/patra. Negative rule: sirf aarop/maang NAHI; party-karyawahi akele negative NAHI. Reject. URL: https://www.tribuneindia.com/news/punjab/rift-between-sukhpal-khaira-rana-gurjeet-singh-out-in-open-600885
// R2: "ED seizes Rs 22-crore properties of Rana Sugars" (The Tribune, 2025-04-05) — ED ne FEMA Sec 4 ullanghan par Rana Sugars Ltd ki Rs 22.02 crore ki achal sampatti zabt ki; mamla company, uske promoters, directors aur anyon ke khilaf. Whitelisted source me MLA Rana Gurjeet Singh ka naam vyaktigat aaropi ke roop me NAHI hai (bete Rana Inder Partap Singh ka naam MD ke roop me hai). Pariwar-jaal niyam: bete ki company ka mamla pita par nahi. SEBI aadesh (R-accept, upar entry) me "Gurjeet Singh Rana" ka naam hai, lekin ED-FEMA mamle me uska vyaktigat naam whitelisted source me nahi — shanka par reject. URL: https://www.tribuneindia.com/news/punjab/ed-seizes-22-crore-properties-of-rana-sugars/
// R3: "Rana Gurjeet criticises stoppage of potable water project in Kapurthala, seek immediate resumption" (Indian Express, Dec 2025) — MLA ne Rs 26-crore AMRUT-II peyjal pariyojna ka kaam rukne par AAP sarkar se turant dobara shuru karne ki maang ki. Sirf maang/prastav, koi dastaveji nateeja nahi. Reject. URL: https://indianexpress.com/article/cities/chandigarh/rana-gurjeet-criticises-stoppage-of-potable-water-project-in-kapurthala-seek-immediate-resumption-10434301/lite/
// R4: "Kapurthala villages get aid under Punjab Nirman programme — Rs 10-cr infra push" (The Tribune, 2021-09-08) — 83 gaon-panchayaton ko Rs 8.61 crore anudan vitran. Karyakaal Mar 2022 se pehle ka — pre-term. Reject. URL: https://www.tribuneindia.com/news/jalandhar/kapurthala-villages-get-aid-under-punjab-nirman-programmers10-cr-infra-push-for-holistic-developmen-308742/
// R5: "Rana inaugurates road, boundary projects" (The Tribune, 2021-10-25) — sabzi mandi me sadak/boundary wall par Rs 1,00,18,000 ka lokarpan. Pre-term (2021). Reject. URL: https://www.tribuneindia.com/news/jalandhar/rana-inaugurates-road-boundary-projects-329333/
// R6: "Kapurthala MLA Rana Gurjit Singh reviews works" (The Tribune, 2020-11) — talabon ke navinikaran ka Rs 7.37 crore grant, MLA ne nirikshan kiya. Pre-term + sirf nirikshan/daura. Reject. URL: https://www.tribuneindia.com/news/kapurthala-mla-reviews-works-237242/
// R7: "Punjab Kapurthala MLA Rana Gurjeet Singh reaffirms commitment to buy maize at MSP" (PTI via The Week, 2025-10-06) — MLA ne kisanon se makka Rs 2400/quintal MSP par khareedne ka vada dohraya; khareed unke parivaarik ethanol business ke liye hai. Niji vyaparik gatividhi — sarkari seat-kaam nahi. Reject. URL: https://www.theweek.in/wire-updates/national/2025/10/06/des84-pb-maize-mla.html
// R8: "Rana Gurjeet Singh to announce New Crop Vision for Punjab soon" (babushahi, 2026-02-10) — sirf ghoshna/press-conference ka elan; koi bhautik kaam nahi. Babushahi whitelist me nahi. Reject. URL: https://www.babushahi.com/view-news.php/captcha/images/upload/image/captcha/upload/pdf/captcha/upload/pdf/view-news.php?id=217058
// R9: "Kapurthala MLA Rana Gurjeet Singh Unveils Nawi Soch Nawa Punjab" (yespunjab, 2025-03-30) — kheti-vision ki ghoshna; bhautik sanrachna ka lokarpan nahi. YesPunjab whitelist me nahi. Reject. URL: https://yespunjab.com/kapurthala-mla-rana-gurjeet-singh-unveils-nawi-soch-nawa-punjab/
// R10: "Diarrhea outbreak in Kapurthala: MLA Rana Gurjit Singh visits affected areas" (babushahi, 2024-07-28) — sirf daura/nirikshan; whitelist me nahi. Reject. URL: https://www.babushahi.com/view-news.php?id=188473&headline=Diarrhea-outbreak-in-Kapurthala:-MLA-Rana-Gurjit-Singh-visits-affected-areas
// R11: "MLA Rana Gurjeet Singh Hails Railway Progress in Kapurthala After PM Modi Visit" (punjaboutlook, 2026-07-18) — kendriya Amrit Bharat Station pariyojna par bina vyaktigat bhoomika ke shrey/bayan; outlet whitelist me nahi. Reject. URL: https://punjaboutlook.com/mla-rana-gurjeet-singh-hails-railway-progress-in-kapurthala-after-pm-modis-visit-credits-bipartisan-efforts/
// R12: "Aman Arora lays stone of Udham Singh Shaheed Skill Development University" (The Tribune, Dec 2025) — shilanyas mantri Aman Arora ne kiya; Rana Gurjeet Singh sirf maujood the. Dusre neta ke karyakram me maujoodgi — reject. URL: https://www.tribuneindia.com/news/jalandhar/aman-arora-lays-stone-of-udham-singh-shaheed-skill-development-university/amp/?utm=relatedarticles
// R13: "Kapurthala mayoral poll: High Court seeks entire proceedings of July 8 meet on MLA plea" (Indian Express, Jul 2026) — MLA ne nagar nigam mayor-chunav prakriya ko HC me chunauti di. Chunav-yachika akele negative NAHI; ye seat-vikas kaam bhi nahi. Reject. URL: http://indianexpress.com/article/legal-news/kapurthala-municipal-corporation-mayor-election-high-court-rana-gurjeet-10785514/
// R14: "Money laundering case: ED raids Phagwara-based sugar mill" (Hindustan Times) — mamla SAD neta Jarnail Singh Wahid aur uski patni/bete ke khilaf (VB FIR Sep 2023); Rana Gurjeet Singh sirf mill ke vartaman operator ke roop me ullekh, aaropi nahi. Reject. URL: https://www.hindustantimes.com/cities/chandigarh-news/money-laundering-case-ed-raids-phagwara-based-sugar-mill-7-other-locations-in-punjab-chandigarh-101755720281553.html
// R15: Feb 2025 IT raid par purana TOI quote (2018 ki alag raid ka) — 2025 raid me MLA ki pratikriya whitelisted sources me nahi mili; isliye entry me "pratikriya uplabdh nahi — anupasthiti disclosed" likha gaya. Koi pratikriya invent nahi ki gayi.

// ======================= RETRY-LEADS =======================
// L1: Rangla Punjab Vikas Scheme (Rs 5 crore prati segment prati vitt-varsh, FY 2025-26 se, DC-administered) ke tahat Kapurthala segment ki DC suchi me MLA ki sifarish/bhoomika mile to whitelist media se dastaveji entry ban sakti hai — ab tak kuch nahi mila. Retry: DC Kapurthala / Punjab DIPR portal search.
// L2: The Tribune ke Kapurthala topic pages par naye articles monitor karo — 2026-10 tak koi aur vyaktigat lokarpan/shilanyas nahi dikha.
// L3: ED-FEMA mamle (Rs 22.02 crore zabti) me yadi kisi whitelisted outlet me "Gurjeet Singh Rana" promoter/director ke roop me vyaktigat naam aaye to negative entry ban sakti hai; SEBI aadesh ke khilaf appeal ya aage ke nyayik vikas ko bhi track karo.
// L4: Feb 2025 IT search ka koi aadhikarik nishkarsh (vibhagiya bayan/chargesheet) aaye to negative entry ka stage update karna hoga — ab tak cited sources me sirf "sutro ke mutabik" zabti hai.
// PB3: rana-gurjeet-singh — 3 entries merged (QA-checked; SEBI+IT-search dono ki MLA-pehchan parent ne whitelisted coverage se pakki ki).
// PB3 worker — rana-inder-partap-singh (Sultanpur Lodhi, Independent)
// Pehchan: Sultanpur Lodhi se Independent MLA; Kapurthala (INC) MLA Rana Gurjeet Singh
// ke bete hain. Pita ke kaam/mamle bete par NAHI aur bete ke kaam/mamle pita par NAHI.
// Dono entries me Sultanpur Lodhi seat ki pehchan source text se verify ki gayi hai
// ('Sultanpur Lodhi Independent MLA Rana Inder Partap Singh' — IE + Tribune).
// NOTE: Ek HT page (bundh FIR coverage) browser.fetch par 402 de raha tha — retry lead R-16
// me darj hai; wahi FIR tathya IE (opened) aur Tribune (opened) se cover ho gaye hain.
punjabWorks['rana-inder-partap-singh'] = [
  { title: 'Bharoana gaon me Kali Bein ke dhussi bandh ko JCB se katne ke aarop me Sultanpur Lodhi MLA Rana Inder Partap Singh aur unke lagbhag 100 samarthakon ke khilaf drainage vibhag ki shikayat par FIR darj hui; baad me MLA ne sainkdon svayamsevkon ke saath bandh dobara banwaya', category: 'Any', badge: 'news', sourceLabel: 'The Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/mla-breach-dhussi-bandh-kapurthala-booked-8840671/', date: '2023-07-15', note: 'IE (16 Jul 2023) ke anusaar: 14 Jul 2023 ki shaam ko Bharoana gaon (Kapurthala) me MLA aur samarthakon ne police ki maujoodgi ke bavjood earth-moving machine se bandh kata; lagbhag paanch ghante me aadhi raat tak bandh me ched ho gaya. Sutlej ka pani Sultanpur Lodhi ke kuch gaon me jama ho gaya tha; MLA ke anusaar isse gaon ka jal-star neeche aaya. Drainage vibhag ki shikayat par Section 70, Northern India Canal and Drainage Act, 1873 aur IPC Sections 277, 426, 430 ke tahat case darj hua. Kapurthala SSP Rajpal Singh Sandhu ke anusaar mamle ki jaanch chal rahi thi. MLA ne media se kaha ki logon ke kalyan ke liye kaam karte hue FIR se chinta nahi hai. Date reasoning: IE report 16 Jul 2023 ki hai aur kehti hai police ne Saturday ko case darj kiya; date -d se verify kiya ki 15 Jul 2023 Saturday tha, isliye date 2023-07-15 rakhi gayi. Baad ka vikas: Tribune (Kapurthala, 19 Jul 2023; report 20 Jul ko published) ke anusaar jal-star kam hone par MLA ne sainkdon svayamsevkon ke saath 10 feet tak toote bandh ka punarnirman karwaya — subah shuru karke shaam tak kaam poora hua, agle din machine se mazbooti ki yojana thi. Ab tak chargesheet ya aage ki nyayik karyawahi ki koi whitelist khabar nahi mili; stage FIR darj hone par hai, koi jamanat ya ba-izat bari ka vikas dastaveji nahi hai. Seat pehchan: source me saaf likha hai Sultanpur Lodhi Independent MLA Rana Inder Partap Singh.', period: '2022-2027' },
  { title: 'MLA ka dawa — 2022 chunav se pehle kiya gaya Sultanpur Lodhi me sewerage system ka vaada poora ho gaya aur 14 feet gehri sewer lines bichhai gayin', category: 'Any', badge: 'dawa', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/mla-announces-stadium-for-sultanpur-lodhi/', date: '2025-04-05', note: 'The Tribune (6 Apr 2025) ke anusaar: 5 Apr 2025 ko Sultanpur Lodhi me Navin Soch, Nawan Punjab rally me MLA ne kaha ki 2022 ke Vidhan Sabha chunav se pehle unhone halke ke liye sewerage system ka vaada kiya tha aur use poora kar diya; sadken isliye kharab hui kyunki 14 feet gehri sewer lines bichhane ke liye khudai hui thi, aur sadkon ki marammat/nirman ka kaam jald shuru hoga. Is dawe ka ekmatra aadhaar MLA ka apna kathan hai — fund amount, yojana ya MLA ki sifarish ki koi dastaveji detail Tribune report me nahi hai, aur iska swatantra satyapan whitelist sources me nahi mila; isliye badge dawa hai. Date reasoning: Tribune report 6 Apr 2025 ko published hai aur rally ka din Saturday batati hai; date -d se verify kiya ki 5 Apr 2025 Saturday tha, isliye event date 2025-04-05 rakhi gayi. Usi rally me stadium ki ghoshna, 29 km pipeline ka vaada aur Rs 220 crore/Rs 50 crore smart city ka dawa bhi hue — ye sab sirf ghoshnaen hain (R-1 se R-3), is entry me nahi hain.', period: '2022-2027' },
];
// WORKER: rana-inder-partap-singh (Sultanpur Lodhi, Independent) — 2 entries mili: (1) NEGATIVE: Jul 2023 me Kali Bein dhussi bandh (Bharoana) katne ke aarop me drainage vibhag ki shikayat par Section 70 Canal Act + IPC 277/426/430 ke tahat MLA + ~100 samarthakon par FIR (IE + Tribune; MLA ka jawab on record; 19 Jul 2023 ko svayamsevkon se bandh punarnirman — wahi vikas note me); chargesheet ka koi vikas nahi mila. (2) DAWA: Apr 2025 me Tribune-reported rally me MLA ka dawa ki sewerage system ka vaada poora hua (fund/bhoomika disclosed nahi; swatantra satyapan nahi). Retry-leads: R-16 (HT 402), R-17 (bundh FIR ka aage ka vikas).
// REJECT-LOG:
// R-1. The Tribune (5 Apr 2025) — Sultanpur Lodhi me state-of-the-art stadium (all-weather swimming pool, world-class gymnasium) ki ghoshna rally me: sirf ghoshna; shilanyas/lokarpan nahi. REJECT.
// R-2. The Tribune (5 Apr 2025) — 29 km lambi pipeline bichhakar potable water supply ka vaada: sirf ghoshna/vaada, kaam shuru hone ki reporting nahi. REJECT.
// R-3. The Tribune (5 Apr 2025) — Rs 220 crore smart city fund lapse aur Rs 50 crore milne ka dawa: kendriya pariyojna par vyaktigat bhoomika dastaveji nahi; wada-dawa mixture; GO/sanction nahi. REJECT.
// R-4. babushahi.com (Feb 2026) — Malsian (Shahkot) me Rana Gurjeet Singh + Rana Inder Partap ne cassava kheti ko badhava diya: non-whitelist chhota Punjabi portal; koi sarkari sanrachna/sanction nahi, prachar karyakram matra. REJECT.
// R-5. The Tribune (11 Sep 2025) — 2025 badh me Baupur ke graminon ne MLA ko bandh-marammat me madad ka shrey diya: daan/rahat kaam (manpower/JCB madad); vikas kaam nahi. REJECT.
// R-6. The Tribune (Feb 2022, constituency watch) — Jan 2018 me ED ki kathit FEMA jaanch: pre-term mamla; karyakaal (Mar 2022+) me koi nyayik vikas dastaveji nahi. Negative ke layak nahi. REJECT.
// R-7. newswav.com (Dec 2025) — Sultanpur Lodhi Municipal Council chunav me Rana ke Independents ki jeet (13 me se 7 seats): non-whitelist + chunav khabar, vikas kaam nahi. REJECT.
// R-8. Tribune epaper (Dec 2025) — Block Samiti chunav (Sultanpur Lodhi/Fattu Dhinga) me Rana-samarthit Independents ki jeet; lalluram.com par Fattu Dhinga chairman chunav me firing/maar-peet ke aarop: chunav khabar; lalluram non-whitelist; MLA khud ke khilaf FIR darj hone ki koi whitelist pushti nahi. REJECT.
// R-9. yespunjab.com / royalpatiala.in / babushahi.com (Aug 2025) — badh par CM ko turant karyawahi ki appeal, press conference: sirf maang; non-whitelist sources. REJECT.
// R-10. babushahi.com (Sep 2024) — Vidhan Sabha zero hour me sewerage safai/super-suction machines aur streetlight contract par maang: non-whitelist + sirf maang, nateeja/mantri-ashwasan dastaveji nahi. REJECT.
// R-11. Times of India (Assembly coverage, ~2026) — House me MLA ka human-trafficking/flesh-trade racket ka aarop: aarop matra; vikas kaam nahi. REJECT.
// R-12. 5dariyanews.com (Feb 2023) — Smart City pariyojnaon ka DC (Vishesh Sarangal) dwara review (Rs 74.11 crore sadken, smart schools, STP): DC/sarkari amla ne kaam chalaya; MLA ki bhoomika dastaveji nahi. REJECT.
// R-13. yespunjab.com (Apr 2025) — makka kharif ki kharid Rs 2000/quintal par hone ka dawa ('mere karyakaal ke baad'): non-whitelist; procurement-price dawa, bhautik sarkari sanrachna ka kaam nahi. REJECT.
// R-14. yespunjab.com (Apr 2025) — NHAI dwara adhigrahit zameen ke liye arbitrator niyukt, Rs 1 crore/acre muavza ka dawa: non-whitelist; kendriya agency ka mamla, MLA ki bhoomika dastaveji nahi. REJECT.
// R-15. punjaboutlook.com (2024) — Beas kinare bundh banane me MLA ne earthmoving machine di: non-whitelist chhota portal; rahat-prakar madad, sanction/lokarpan nahi. REJECT.
// R-16. RETRY LEAD: hindustantimes.com/cities/chandigarh-news/independent-mla-booked-for-breaking-bundh-on-kali-holy-bein-in-punjab-flood-control-efforts-underway-101689436126686.html — browser.fetch par 402 mila; wahi FIR tathya (Kabirpur thana, XEN drainage shikayat, Sections 70/277/430) IE + Tribune se cover hain, low priority retry.
// R-17. RETRY LEAD: Jul 2023 dhussi-bandh FIR ka aage ka vikas (chargesheet, trial, jamanat, ba-izat bari) whitelist sources me nahi mila; aage ke rounds me 'Rana Inder Partap bundh case chargesheet/trial' khojo.
// PB3: rana-inder-partap-singh — 0 entries merged (QA-checked; Kali Bein bundh-FIR negative, jawab + punarnirman note me).
punjabWorks['balwinder-singh-dhaliwal'] = [];
// PB3-QA (parent): balwinder-singh-dhaliwal ki sadak-patchwork entry DROP ki gayi — kaam poori tarah MLA ke niji kharch se hua tha; niji kharch/daan wala rule lagu.
// ======================= REJECT-LOG =======================
// (shanka par reject — galat entry se khali profile behtar)
// R1: "Govt pushing rural infrastructure to curb migration to cities, says MLA Dhaliwal" (Tribune, 2026-09-03) — poora article Ajnala ke MLA Kuldeep Singh Dhaliwal (AAP) ke baare me hai; Phagwara wale Balwinder Singh Dhaliwal nahi. Naam milta-julta hone se galat pehchan. URL: https://www.tribuneindia.com/news/amritsar/govt-pushing-rural-infrastructure-to-curb-migration-to-cities-says-mla-dhaliwal/
// R2: "Row over credit for works" (Tribune) — Greater Kailash, Phagwara tubewell Rs 34 lakh grant; Congress netaon ke dawe ke mutabik kaam 2021 me Congress sarkar ke daur me pura hua aur us waqt MLA ne lokarpan kiya — matlab pre-term (term Mar 2022 se). MLA ki in-term vyaktigat bhoomika dastaveji nahi (dawa block Congress netaon ka hai). Reject.
// R3: "Ahead of Chhath Puja, Congress MLA leads canal clean-up drive in Phagwara" (Tribune) — Phagwara Chowki canal ki safai abhiyan; keval drive/safai campaign hai, sthayi bhautik sanrachna ka lokarpan nahi. Rule: keval abhiyan-shubharambh reject.
// R4: "MC auditorium in Phagwara sans power since 2018" (Tribune, 2025-05-21) — MLA ne MC se action lene ki maang ki; sirf maang/bayan, koi nateeja ya bhoomika dastaveji nahi. Reject.
// R5: "Congress delegation meets MC Commissioner, raises concern over stalled development projects in Phagwara" (Tribune) — MLA ne MC Commissioner ko memorandum diya; sirf maang/proposal, nateeja dastaveji nahi. Reject.
// R6: "Newly built road in Phagwara crumbles within weeks, Cong for Vigilance probe" (Tribune, epaper 2025-06-27) — MLA ne sadak scam ki Vigilance janch ki maang ki; ye MLA ke KHILAF mamla nahi, balki unki maang hai. Negative entry ke liye MLA khud aaropi hona chahiye — reject.
// R7: 2019 model code of conduct case (Business Standard/Indian Express, Oct 2019) — Phagwara police ne Sec 130 RP Act ke tahat case darj kiya tha (party symbol wala scarf pehenkar vote daalne par). PRE-TERM mamla aur wartaman karyakaal (Mar 2022+) me koi legal development report nahi. Rule: pre-term negative tabhi jab in-term vikas ho — reject.
// R8: Dharamshala Rs 20 lakh grant (Tribune "Eye on 2022 Assembly poll", Jan 2022) — Assembly chunav se pehle ki ghoshna; karyakaal shuru hone (Mar 2022) se pehle. Pre-term. Reject.
// R9: PMAY Rs 50 lakh allotment letters (Tribune, 2020) — pre-term; kendriya yojana (PMAY) ka vitran karyakram, MLA ki vyaktigat bhoomika/fund disclosure nahi. Reject.
// R10: "Robotic surgery centre opens in Phagwara" (Tribune, 2023-04-16) — MLA sirf udghatan me maujood tha; dusre (niji hospital) ka karyakram me maujoodgi. Rule: dusre neta/kaam ke karyakram me maujoodgi reject. Reject.
// R11: MP Chabbewal ke Phagwara tubewell (Rs 30 lakh) aur Panshta bridge (Rs 1 crore) karyakram — MP Raj Kumar Chabbewal ke kaam hain, MLA ke nahi (Phagwara Hoshiarpur LS me hai). Reject.
// R12: Kuldeep Singh Dhaliwal ke 53 link roads Rs 15 crore (5dariyanews) aur Education Revolution (yespunjab) — Ajnala (AAP) ke MLA ke kaam, Phagwara wale nahi. Pehchan galat. Reject.
// R13: DNP India ka "Phagwara School of Eminence" article — dnpindia whitelist me nahi (aggregator-jaisa chhota portal). School of Eminence Bhagwant Mann sarkar ka karyakram; MLA ki vyaktigat bhoomika dastaveji nahi. Reject.

// ======================= RETRY-LEADS =======================
// L1: Rangla Punjab Vikas Scheme (Rs 5 crore prati segment prati vitt-varsh, FY 2025-26 se, DC-administered) ke tahat Phagwara segment me hui swikritiyon ki DC suchi me MLA ki sifarish/bhoomika mile to whitelist media se dastaveji entry ban sakti hai — ab tak kuch nahi mila. Retry: DC Kapurthala / DIPR Punjab portal search.
// L2: Tribune topic pages "phagwaradevelopment" aur "phagwaracivicissues" par naye articles monitor karo — 2026-10 tak koi vyaktigat lokarpan nahi dikha.
// L3: News18 candidate page ke mutabik unke khilaf 2022 halafname me 0 criminal cases the (2019 wala MCC case halafname pending mamlo me aata ho to "Halafname ke pending mamle akele negative NAHI" rule lagu hota hai) — koi in-term FIR/chargesheet nahi mili.
// PB3: balwinder-singh-dhaliwal — 0 entries merged (QA-checked).

// ---- Punjab works mining — BATCH 4: Jalandhar (9 MLA) — 2026-10-18 ----
// Research: per-MLA workers; merge + QA coordinator ne kiya.
// PB4: vikramjit-singh-chaudhary — 0 entries merged (QA-checked).
// Worker: vikramjit-singh-chaudhary — Batch 4 (Jalandhar+Hoshiarpur), 2026-10-18
// Foundation verified: slug vikramjit-singh-chaudhary, party Indian National Congress (INC),
// seat Phillaur (SC), tenure start 2022 end 2027. No foundation discrepancy.
// NOTE: He is an opposition MLA (AAP rules Punjab since Mar 2022); whitelisted-outlet
// coverage after Mar 2022 is almost entirely political (battles, accusations, demands,
// suspension). No fund-backed lokarpan/shilanyas, GO-backed swikriti, itemized sanction
// lists or Vidhan Sabha question outcomes attributable to him were found in whitelisted
// outlets for the 2022-2027 tenure. Negatives: none — suspension Apr 2024 was a party
// disciplinary action (reinducted Jun 2025), and rule says party karyawahi akele negative
// NAHI; no FIR/chargesheet/janch found against him (2022 affidavit: 0 criminal cases).
punjabWorks['vikramjit-singh-chaudhary'] = [];
// REJECT LOG:
// R-1. Tribune "Projects worth Rs 59.8L inaugurated" (Jan 2020, Phillaur) — pre-term;
//       event happened when he was constituency in-charge, not MLA; period outside 2022-2027.
// R-2. Tribune "Foundation stones of projects worth Rs 1.5-cr laid in Jalandhar villages"
//       (Dec 26, 2021) — pre-term; he laid stones as Youth Congress in-charge before the poll.
// R-3. punjabtribune.com "MP Santokh Singh Chaudhary and Vikramjit Singh Chaudhary lay
//       foundation stones... Rs 71.5 lakhs" — pre-term (in-charge era) AND outlet not on
//       whitelist (small "Punjab Tribune" portal, not The Tribune).
// R-4. Tribune "Projects worth Rs 1.07 crore inaugurated at Rurka Kalan" (Sep 11, 2021) —
//       pre-term; jointly inaugurated with his father (MP Santokh Chaudhary) as in-charge.
// R-5. Tribune "Guru Ravidas Gate opened at Phillaur" (Feb 5, 2020) — pre-term; gate built by
//       Shri Guru Ravidass Bhawan Prabandhak Committee, he only inaugurated it (not his project).
// R-6. Tribune "Expedite dev work, Phillaur MC officials told" (Mar 2022) — sirf
//       nirikshan/nirdesh; chaired an MC meeting and told officials to expedite, no work done.
// R-7. Tribune "My aim is to set up govt college, stadium says Vikramjit Singh Chaudhary,
//       Phillaur MLA" (Apr 10, 2022) — sirf ghoshna/priorities (multi-specialty hospital,
//       govt college, stadium); nothing executed/sanctioned.
// R-8. Tribune "This victory was purely the result of the work I have done for people in last
//       5 yrs" (Mar 13, 2022) — MLA ka dawa about pre-term in-charge era (Smart Village
//       Campaign/UEIP funds under Congress govt); Garhi Mahan Singh tiles and Mehsampur park
//       refer to Dec 2021-Feb 2022, pre-tenure; priorities listed are sirf ghoshna.
// R-9. Tribune "Battle for supremacy: Congress MLA vs AAP rages on in Phillaur" (May 19, 2022)
//       — political controversy, not a work; MLA was the complainant against AAP leader
//       Prem Kumar over a foundation stone for the 6.72-km Apra-Dhuleta road (PMGSY, kendriya
//       pariyojna); no personal role in the sanction.
// R-10. Tribune "Construct underpasses in Phillaur: MLA to Bittu" (Dec 2024) — sirf
//        maang/prastav; representation to Union Railway Minister; railway underpasses =
//        kendriya pariyojna; central govt asked to bear full cost, nothing sanctioned.
// R-11. Tribune "Cong MLA raises illegal mining issue, AAP calls charges baseless"
//        (Sep 2026) — political accusation/statement, no work.
// R-12. Tribune "Punjab MLAs demand inclusion of national icon desecration in law" — joint
//        letter/demand to Speaker re Nangal Ambedkar statue; sirf maang/prastav, no work.
// R-13. Tribune "Phillaur MLA meets Union Secy over demolition issue" (Apr 10, 2026) —
//        met MoRTH Secretary and handed request letter to Gadkari re proposed demolition in
//        Kalsi Nagar; sirf maang, no outcome documented.
// R-14. Tribune "Phillaur MLA addresses election meetings for Cong candidates" (Dec 12, 2025)
//        — election campaigning for Zila Parishad/Block Samiti, not a work.
// R-15. Tribune "Staff shortage, lack of equipment ail fire station: Phillaur MLA" (Oct 2023)
//        — political accusation after PSPCL office fire, no work.
// R-16. Tribune/Indian Express/NDTV/HT "Congress suspends Phillaur MLA Vikramjit Chaudhary
//        for anti-party activities" (Apr 24, 2024) and "Congress revokes suspension"/reinduct
//        (Jun 2, 2025) — party disciplinary karyawahi (statements against Charanjit Singh
//        Channi's Jalandhar candidature; resigned as chief whip); rule: party karyawahi akele
//        negative NAHI, so no negative entry. Mother Karamjit Kaur joining BJP is a parivar
//        matter — excluded.
// R-17. Tribune "Phillaur MLA Vikramjit Chaudhary releases objectionable poster of Charanjit
//        Singh Channi" (Apr 24, 2024) — same suspension matter; no independent negative.
// R-18. 5dariyanews.com items (Guru Ravidass Bani Adhyayan Centre grant row, crop compensation
//        accusations, propaganda jibes) — outlet not whitelisted AND all political
//        accusations, no works.
// R-19. punjabnewschannel.com "Punjab govt should restart its own ration distribution scheme:
//        MLA Vikramjit Singh Chaudhary in Vidhan Sabha" (Starred Question on zero grants to
//        Phillaur) — outlet not whitelisted; also a Vidhan Sabha question with no documented
//        outcome.
// R-20. yespunjab.com, newsarenaindia.com, indiaherald.com, jantaserishta.com, latestly.com,
//        thewire.in items — outlets not on whitelist (aggregator/small portals or
//        political-context pieces, not works).

// PB4: inderjit-kaur-mann — 2 entries merged (QA-checked).
// Worker: inderjit-kaur-mann — foundation: Nakodar, AAP, MLA, Mar 2022+, search date 2026-10-18
// REJECTED LEADS:
// R-1. Tribune 'Lok Milnis' article (Jan 2026): MLA ne dawa kiya CM ne Nakodar bus stand renovation aur Bilga town development ke projects approve kiye — sirf ghoshna/dawa, post-event reporting nahi.
// R-2. Tribune 'Govt to construct administrative complexes at Nurmahal, Nakodar' (Jul 2022): MLA ne kaha government banayegi — sirf ghoshna.
// R-3. Tribune 'Minister okays Rs 43.79 crore under Rangla Punjab scheme' (Aug 2025): minister Gurmeet Singh Khudian ne approval diya, MLA sirf maujood thi — mantri ki karyawahi, MLA ka vyaktigat kaam nahi.
// R-4. Mother and Child Hospital Nakodar (Feb 28, 2024, CM Bhagwant Mann ne inaugurated): CM ka kaam, MLA ki bhoomika source me nahi; editorji bhi whitelist me nahi.
// R-5. Tribune 'Completing pending projects, improving sanitation my priority' (Mar 2022): sirf yojnaen/maang — koi sampann kaam nahi.
// R-6. 66 KV substation Chittar Hara Nakodar (Dec 2024): Power Minister Harbhajan Singh ETO ne shilanyas kiya, MLA saath me maujood thi — dusre neta ke karyakram me maujoodgi; yesPunjab whitelist me nahi.
// R-7. Saringh hockey ground Rs 20 lakh lokarpan (Sep 29, 2026): sirf dainiksaveratimes.com (whitelist me nahi) ne chhapa — koi whitelisted outlet nahi mila.
// R-8. Sikhya Kranti Rs 13.91 lakh Nakodar schools (Apr 7, 2025): sirf non-whitelist outlets (babushahi, patialapolitics, 5dariyanews, indiathisweek) + Tribune e-paper scan; koi canonical whitelisted article nahi. Same drive ki Rs 33 lakh wali Nakodar coverage Tribune canonical article me mili — entry 2 me included.
// R-9. Ludhiana canal-water/meetings ki TOI khabren: wah 'Mayor Inderjit Kaur' (Ludhiana) hain, hamari MLA Inderjit Kaur Mann nahi — alag vyakti.
// R-10. Tribune 'Waterlogging at Dakhni Adda torments residents' (Jul 2025): shikayat ki khabar; MLA ne nagar council par dosh dala aur theek karne ka wada kiya — na work entry, na negative bar par khara.
// R-11. NEGATIVE reject: halafnama ka Rahon PS (SBS Nagar) illegal mining case (Mines and Minerals Act) — pre-term, Mar 2022+ me koi legal development media me nahi; halafnama pending case akele negative nahi.
// R-12. NEGATIVE reject: Indian Express (May 2023) — MLA ke bete ko dhamki bhara message, case unidentified accused ke khilaf; MLA parivar complainant hai — MLA ke khilaf negative nahi.
punjabWorks['inderjit-kaur-mann'] = [
  {
    title: 'Nakodar MLA Inderjit Kaur Mann ne Heran gaon ke sarkari primary school ki boundary wall ki marammat ka shilanyas kiya, jisme Sarv Sikhya Abhiyan ka fund laga tha',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/panchayat-members-peeved-as-mla-lays-stone-for-renovated-school-wall/',
    date: '2025-04-15',
    note: 'Gaon Heran (Nakodar) ke sarkari primary school ki 50-60 feet lambi giri hui boundary wall sarkar ne dobara banwai, plaster aur paint kiya; MLA ne shilanyas kiya. Gaon panchayat ne aapatti jatayi ki routine marammat ko school renovation bataya gaya, panchayat ko nimantran nahi mila, aur plaque ke paas unhone likh diya ki ye diwaar chaar saal purani hai. MLA ka jawab: panchayat ke sadasya sarkari karyakramon me kabhi aate nahi, isliye bulaya nahi gaya. Fund: Sarv Sikhya Abhiyan — 40% rajya, 60% kendra. (Inferred date reasoning: article 2025-04-19 ko published hai aur shilanyas ko ‘on Tuesday’ batata hai; calendar check par 2025-04-15 Mangalwar tha.)',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Inderjit Kaur Mann ne Punjab Sikhiya Kranti drive ke tehat Nakodar ke saat sarkari schoolon me Rs 33 lakh ke buniyadi dhaanche ke projects samarpit kiye',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/govt-opens-purse-strings-for-schools-infra-boost/amp',
    date: '2025-04-10',
    note: 'Nakodar segment ke saat sarkari school — GPS Khiwa, Uggi, Chuhar, Bahupur aur GHS Khiwa (Boys aur Girls) aur Uggi — me Rs 33 lakh ke projects dedicate kiye gaye; ye Jalandhar jile ke 38 schoolon me Rs 2.34 crore ke kul drive ka hissa tha. Kaam: smart classrooms, science labs, sports tracks, digital learning systems, cluster rooms, upgraded toilet blocks, boundary walls aur zaroori marammat. (Date reasoning: article 2025-04-10 ko published hai; drive 2025-04-07 se chali, isliye ye post-event reporting hai.)',
    period: '2022-2027',
    stage: 'lokarpan',
  },
];

// PB4: hardev-singh-laddi — 1 entries merged (QA-checked).
// Worker: hardev-singh-laddi — works research 2026-10-18 (Batch 4, Jalandhar+Hoshiarpur)
// Foundation: ~/workspace/aapkaneta/src/data/punjab.ts — slug 'hardev-singh-laddi' (line 1133)
//   Name: Hardev Singh Laddi | Party: Indian National Congress (INC) | Seat: Shahkot | Tenure: 2022-2027
//   2022: 51,661 votes (38.99%), beat Bachitar Singh Kohar (SAD) by 12,079.
//   No foundation discrepancy found.
// Whitelisted outlets searched (The Tribune, HT, Indian Express, NDTV, India Today, TOI, The Hindu,
// Dainik Bhaskar, Dainik Jagran, Amar Ujala, PTI via established outlet). Pre-event announcements,
// non-whitelisted portals (newsd5, wishavwarta, iglobalpunjab, 5dariyanews, cityairnews, topindiannews,
// arthprakash, bharathorizon, nationpress, gulistannewstv, punjabkhabarnama, factrecorder, truescoopnews),
// YouTube/social/blog content — all rejected per whitelist.
//
// POSITIVE WORKS (2022-2027 tenure): no qualifying entry found in whitelisted outlets.
// NEGATIVE: 1 entry below (FIR stage; no `stage` field per rule).
//
// Reject log:
// R-1. Dhussi Bund Link Road (37.93 km, Rs 61.82 crore, Shahkot constituency, foundation stone by CM
//      Bhagwant Mann on 2026-06-19 at Mandala Chhanna) — credited to MP Balbir Singh Seechewal's
//      persistent advocacy + CM's foundation stone; MLA Laddi has no documented personal role; sources
//      (bharathorizon, topindiannews, cityairnews, arthprakash, nationpress, newswav, punjabkhabarnama)
//      are all non-whitelisted. REJECT (bina vyaktigat bhoomika ke shrey + non-whitelisted source).
// R-2. Chuggiti-Ladhewali ROB / Shahkot road works (PWD Minister Singla event, 5dariyanews) — 2018-era
//      term coverage, non-whitelisted outlet, Laddi only present alongside minister. REJECT.
// R-3. CM Amarinder Singh's Rs 2,140 crore grants announcement for Jalandhar/Shahkot (June 2018) —
//      pre-term (2018 bypoll period); sirf ghoshna; CM-attributed, Laddi only made a demand. REJECT.
// R-4. Rs 113 crore / government college claim in 2018 campaign (Indian Express, May 12 2018) — pre-term
//      campaign claim + sirf ghoshna. REJECT.
// R-5. Damaged bridge near Shahkot-Malsian railway station (The Tribune, 2026) — Laddi raised issue with
//      officials + Vidhan Sabha; repair initiated by authorities (NH — central project). REJECT:
//      sirf maang; kendriya pariyojna par shrey nahi.
// R-6. Lohian-Jakopur 9-km road vigilance-inquiry demand (same Tribune piece) — sirf maang. REJECT.
// R-7. Shahkot primary schools awaiting funds (The Tribune) — MLA expressed concern, urged govt action;
//      sirf maang/chinta. REJECT.
// R-8. Shahkot hospital doctors vacancy issue (Indian Express, Zero Hour) — Vidhan Sabha maang, no
//      documented outcome. REJECT.
// R-9. Flood situation visit with Channi (The Tribune, 2023) — sirf nirikshan/daura. REJECT.
// R-10. Shahkot MC president election protest (HT, Jan 20 2025) — political activity, not physical work. REJECT.
// R-11. 2018 illegal sand mining FIR (May 2018) — pre-term; cancellation report approved June 2018
//      (iglobalpunjab) — no Mar 2022+ legal development; halafnama pending-mamla akele negative nahi. REJECT.
// R-12. Scooter collision with MLA's car (Tribune, Oct 2023, Jasso Majra, Nawanshahr) — accident; CCTV
//      pointed to scooterist negligence; no MLA fault alleged; not negative. REJECT.

punjabWorks['hardev-singh-laddi'] = [
  {
    title: 'Shahkot MLA Hardev Singh Laddi ke khilaf 10 May 2023 ko Jalandhar Lok Sabha bypoll wale din AAP MLA Dalbir Singh Tong ke gherao par FIR — non-bailable Section 353 ke saath, Dec 2023 tak SIT ne janch shuru nahi ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/seven-months-on-sit-yet-to-begin-investigation-in-mla-laddi-case-573904/',
    date: '2023-12-20',
    note: 'Page kholkar padha: Jalandhar (Rural) police ne Shahkot MLA Hardev Laddi Sherowalia aur 12 anya ke khilaf FIR darj ki — 10 May 2023 (bypoll voting day) ko Baba Bakala AAP MLA Dalbir Singh Tong ke gherao ke liye, sections 341, 186, 353 (non-bailable) aur 148 IPC. Pehle Laddi ne Facebook live par aarop lagaya tha ki Tong "outsider" MLA ke roop me Jalandhar me voting day par illegally ghoom rahe the. DIG Swapan Sharma ke aadesh par Hoshiarpur ke tab ke SSP Sartaj Chahal ke netritva me SIT bani, lekin article ke mutabik (dateline 20 December, published 21 December 2023) saat mahine baad bhi SIT ne tathya ascertain nahi kiye; Laddi ka kehna — unhe janch ke liye ek baar bhi nahi bulaya gaya; SSP Bhullar aur tab ke DIG Sharma SIT ki sthiti se anjaan the. Stage: FIR (stage field negatives me nahi rakha jata).',
    period: '2022-2027',
  },
];

// PB4: balkar-singh — 3 entries merged (QA-checked).
// Worker: balkar-singh — works-research 2026-10-18
// NOTE: Entries 1-2 us daur ki hain jab Balkar Singh Punjab Local Bodies Minister the,
// lekin sabhi pariyojnaen unke apne Kartarpur halke ki hain (seat-specific); vibhagiya/
// state-wide mantri faisle alag rakhe gaye hain. Balkar Singh Sep 2024 me cabinet se
// bahar hue (reshuffle) — uske baad bhi Kartarpur MLA bane hue hain.
// Foundation se koi visangati nahi: AAP, Kartarpur (SC), MLA 2022-2027.
punjabWorks['balkar-singh'] = [
  {
    title: 'Balkar Singh ne Kartarpur halke ke kayi gaon me Rs 130.09 lakh ke vikas karyon ke shilanyas kiye',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/stones-of-development-projects-worth-rs-130-09l-laid-in-kartarpur-534717/',
    date: '2023-08-12',
    note: 'The Tribune ki report ke anusaar, us samay Punjab Local Bodies Minister Balkar Singh ne Kartarpur halke ke kayi gaon me vikas pariyojnaon ke shilanyas kiye; kul lagat Rs 130.09 lakh batayi gayi. Karyon me Lidhran me naya health and wellness centre (Rs 28.90 lakh), Malko me sewerage aur interlocking tiles (Rs 3 lakh), Jallowal Colony (Rs 5.40 lakh), Kartarpur town (Rs 14.50 lakh), Binpalke gaon me naya talab (Rs 20 lakh), aur Shekhwan aur Chandan Nagar (Kartarpur) me do naye tubewell (Rs 58.29 lakh) shamil the. Tithi 2023-08-12 report ki Saturday line aur 2023-08-13 prakashan se inferred hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Balkar Singh ne Kartarpur ke gaon me Rs 2 crore se zyada ke vikas karyon ke shilanyas kiye',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/projects-worth-rs-2-crore-launched-in-kartarpur-529998/amp',
    date: '2023-07-28',
    note: 'The Tribune ki report ke anusaar, Balkar Singh ne Kartarpur ke gaon me Rs 2 crore se zyada ke vikas karyon ke shilanyas kiye: Talwandi Bhilan aur Ambgarh gaon me panchayat ghar (har ek Rs 20 lakh), Dugri me naya panchayat ghar (Rs 30 lakh), Ballan me sewage treatment pond (Rs 84 lakh), aur Rahimpur me naya panchayat ghar aur health and wellness centre (Rs 50 lakh). Tithi 2023-07-28 report ki Friday line aur 2023-07-29 prakashan se inferred hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'NCW ne Balkar Singh ke kathit ashleel video ki janch ke liye Punjab DGP ko notice diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan Times',
    sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/ncw-seeks-report-from-dgp-into-alleged-obscene-video-of-punjab-minister-101716834284620-amp.html',
    date: '2024-05-27',
    note: 'HT ke anusaar, NCW ne Punjab DGP ko Kartarpur MLA aur cabinet minister Balkar Singh ke kathit ashleel video ki janch karke 3 din me report dene ka notice diya. NCW chairperson Rekha Sharma ne DGP se turant aur nishpaksh janch ke liye vyaktigat hastakshep manga. HT ne video ki pramanikta ki swatantra pushti nahi ki; report me FIR darj hone ka ullekh nahi hai. Tithi report ke Monday sandarbh se inferred hai; page 2024-05-28 ko update hua tha.',
    period: '2022-2027',
  },
];
// R-1. Gaushala/cattle pound shilanyas, Dayalpur (Kartarpur), Rs 2.21 crore, Nov 1 2023 (The Tribune) — page khul nahi saka (publish.tribuneindia.com par HTTP 403); snippet se entry nahi banayi; parent ke liye retry lead — https://www.tribuneindia.com/news/kartarpur-to-have-first-of-its-kind-cow-shelter-in-punjab-minister-558773/
// R-2. Wariana me road/sewerage lokarpan (The Tribune, Jan 6-7 2024) — seat Kartarpur hai (delimitation me KC Wariyana No.33 me) lekin fund disclosed nahi (sirf "worth several lakhs"); saath ki ghoshnaen (community hall Rs 25 lakh, anganwari, streetlights, school) sirf ghoshna hain — reject.
// R-3. Barsarampur sewerage lokarpan, Oct 16 2025 (Seechewal + Balkar Singh; NRI-funded Rs 1 crore; Balkar Singh ne Rs 15 lakh discretionary fund ghoshit) — sirf yespunjab.com par mila, whitelist me nahi — reject.
// R-4. SAD ne governor ko "objectionable video" dekar janch ki maang ki (HT, Jan 24 2024) — party karyawahi akele negative nahi; NCW janch notice alag entry me covered — reject.
// R-5. Balkar Singh ka cabinet se istifa (Sep 22 2024 reshuffle, Local Bodies portfolio se) — party/sarkari karyawahi akele negative nahi; whitelisted outlet par coverage nahi mila (indiatvnews/oneindia/dailyworld whitelisted nahi); June-2024 wala dawa galat tha, sahi tithi Sep 22 2024 hai — reject.
// R-6. Bhogpur me Awas Yojana ke 25 labharthiyon ko approval letters (Jul 28 2023 report ka hissa) — scheme distribution function, vyaktigat bhautik sanrachna nahi — reject.
// R-7. 5dariyanews, indiaepost, presskitaquat par upar ki stories ke duplicate — non-whitelisted — reject.
// R-8. Kartarpur Improvement Trust me vikas karyon ki samiksha baithak (punjabtribune, Feb 8 2024) — sirf samiksha baithak, kaam nahi — reject.

// PB4: mohinder-bhagat — 7 entries merged (QA-checked).
// Worker: mohinder-bhagat — pb4 works research, 2026-10-18
punjabWorks['mohinder-bhagat'] = [
  {
    title: 'Mohinder Bhagat ne Major Colony aur Dashmesh Colony me Rs 42 lakh ke sewerage project ka shilanyas kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/minister-mayor-lay-foundation-stone-for-rs-42-lakh-sewer-project-in-jalandhar/',
    date: '2025-12-27',
    note: 'The Tribune ke anusaar Cabinet Minister Mohinder Bhagat aur Mayor Vaneet Dhir ne shanivaar ko Ward No. 40 me padne wali Major Colony aur Dashmesh Colony me Rs 42 lakh ke naye sewerage project ka shilanyas kiya. Project ka uddeshya ilake ke sewer sambandhi samasyaon ka sthayi samadhan bataya gaya. Article 2025-12-28 ko publish hua, event shanivaar 2025-12-27 ka.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Mohinder Bhagat ne Shri Guru Ravidass Chowk ke Rs 21 lakh ke facelift project ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/facelift-for-guru-ravidass-chowk-at-an-estimated-cost-of-rs-21-lakh/',
    date: '2026-01-03',
    note: 'The Tribune ke anusaar Bhagat ne shanivaar ko Shri Guru Ravidass Chowk ke rejuvenation project ka shilanyas kiya jiski laagat Rs 21 lakh hai. Project me chowk ka beautification aur redesign shamil hai. Article 2026-01-04 ko publish hua, event shanivaar 2026-01-03 ka.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Mohinder Bhagat ne Model House area me Rs 9 lakh ki do sadkon ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/facelift-for-guru-ravidass-chowk-at-an-estimated-cost-of-rs-21-lakh/',
    date: '2026-01-03',
    note: 'The Tribune ke anusaar Bhagat ne Model House area me do sadkon ke nirman ka shilanyas kiya jiski laagat Rs 9 lakh hai. Bhagat ke anusaar ye sadken sthaniya nivasiyon ki ek pramukh maang poori karengi aur connectivity sudharegi. Article 2026-01-04 ko publish hua, event shanivaar 2026-01-03 ka.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Mohinder Bhagat ne Bhargo Nagar me Rs 18 lakh ki teen sadak pariyojnaon ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/bhargo-nagar-to-get-three-roads/',
    date: '2025-08-10',
    note: 'The Tribune ke anusaar Bhagat ne ravivar ko Ward No. 44 me padne wale Bhargo Nagar me teen sadak pariyojnaon ka shilanyas kiya, kul laagat Rs 18 lakh. Sadken Bhargo Nagar ke mukhya bazaar me aavagaman aasan karengi. Article 2025-08-11 ko publish hua, event ravivar 2025-08-10 ka.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Mohinder Bhagat ne New Avtar Nagar Colony me Rs 75 lakh ki do sadkon ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/jalandhars-avtar-nagar-to-get-2-new-roads/',
    date: '2025-09-18',
    note: 'The Tribune ke anusaar Bhagat aur Mayor Vaneet Dhir ne guruwar ko Ward No. 47 me New Avatar Nagar Colony me Rs 75 lakh ki laagat se nayi sadak pariyojnaon ka shilanyas kiya. Article 2025-09-19 ko publish hua, event guruwar 2025-09-18 ka.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Mohinder Bhagat ne Jalandhar West ke Ward 61 me Rs 1.09 crore ke sadak karyon ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Punjabi Jagran',
    sourceUrl: 'https://www.punjabijagran.com/punjab/jalandhar-cabinet-minister-lays-foundation-stone-for-development-works-worth-109-crore-9695249.html',
    date: '2026-10-09',
    note: 'Punjabi Jagran ke anusaar Bhagat ne shukravar shaam ko Jalandhar West halke ke Ward No. 61 me Rs 1.09 crore ke vikas karyon ka shilanyas kiya. Isme Shaheed Babu Labh Singh Nagar me gali number 5, 6, 7 aur 10 sahit paanch galiyon ka Rs 45 lakh me nirman aur Kala Sanghian drain ko Guru Nanak Nagar ke paas Gurdwara Baba Jawana Ji se jodne wali mukhya sadak ke liye Rs 64 lakh shamil hain. Article 2026-10-09 ko publish hua aur event usi shaam ka bataya gaya.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Mohinder Bhagat ne Basti Guzan me Rs 18.46 lakh ki sadak ka nirman kaarya shuru karwaya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Punjabi Jagran',
    sourceUrl: 'https://www.punjabijagran.com/punjab/jalandhar-mohinder-bhagat-9688577.html',
    date: '2026-09-27',
    note: 'Punjabi Jagran ke anusaar Bhagat ne Basti Guzan ilake me Rs 18.46 lakh ki laagat se banne wali sadak ke nirman kaarya ki shuruaat karwai. Date inferred: article 2026-09-27 ko publish hua hai aur event usi din ya usse ek din pehle ka lagta hai; reasoning note me disclose kiya gaya hai.',
    period: '2022-2027',
  },
];

// R-1. PTI feed (theprint.in, 2026-08-31): Dhogri me virus indexing lab ka udghatan — vibhagiya karya (Horticulture mantri ke roop me), seat-kaam nahi; Dhogri Jalandhar West me nahi. REJECT.
// R-2. YesPunjab (2025-12-05): Raja Garden aur Ganesh Nagar me Rs 59 lakh ki do sadken — outlet whitelist me nahi (chhota Punjabi portal). REJECT.
// R-3. YesPunjab / 5DariyaNews (2026-08-23): 120 Feet Road par Bhagwan Valmiki Ji Bhawan ka Rs 96 lakh me renovation — outlet whitelist me nahi. REJECT.
// R-4. 5DariyaNews: Basti Sheikh me Satguru Kabir Bhawan community hall ka Rs 42 lakh me renovation — outlet whitelist me nahi. REJECT.
// R-5. 5DariyaNews: Geeta Colony me Rs 27 lakh ki sadken — outlet whitelist me nahi. REJECT.
// R-6. babushahi.com / cityairnews.com: MP Sanjeev Arora ke saath Mohalla Clinic ka shilanyas aur Jawahar Nagar Camp me do gate — outlet whitelist me nahi. REJECT.
// R-7. 5DariyaNews: Rangla Punjab Vikas Scheme ke tahat Rs 10 crore pariyojnaon ki samiksha baithak — outlet whitelist me nahi, aur sirf samiksha baithak (nirikshan shreni). REJECT.
// R-8. 5DariyaNews: Civil Hospital Rogi Kalyan Samiti baithak, Jan Aushadhi Centre punah shuru karne ki swikriti — outlet whitelist me nahi, sirf samiksha baithak. REJECT.
// R-9. YesPunjab (2026-08-10): Basti Danishmanda me streetlights ka udghatan aur tube well kaarya ka aarambh — outlet whitelist me nahi. REJECT.
// R-10. YesPunjab (2025-05-12): Sports and Surgical Complex me Rs 1.29 crore ke fire station ka udghatan — outlet whitelist me nahi. REJECT.
// R-11. newsonradar.com (2026-06-16): Model House me Rs 50 lakh ke community hall ka shilanyas — aggregator, whitelist me nahi. REJECT.
// R-12. The Tribune: Surya Enclave me Rs 5.10 crore ki sadak yojna — ye Jalandhar Central (Nitin Kohli, halqa in-charge) ka kaam hai, Bhagat ki seat ke bahar. REJECT.
// R-13. punjabnewsline.com: Khedan Watan Punjab Diyan-2026 block-level khelon ka udghatan — outlet whitelist me nahi, aur sarkari abhiyan ka keval shubharambh. REJECT.
// R-14. 5DariyaNews: Easy Property Registration ki ghoshna — sirf ghoshna, koi bhautik kaam nahi. REJECT.
// R-15. Delhi ke ACP Vivek Bhagat par FIR/sexual assault ki khabren — ye alag vyakti hain, MLA Mohinder Bhagat nahi (pehchan mismatch). REJECT.
// R-16. jpbnews24.in: Ward 61 ke Rs 1.09 crore karyon ki khabar — outlet whitelist me nahi; wahi khabar Punjabi Jagran se entry ban gayi hai. REJECT.

// PB4: raman-arora — 3 entries merged (QA-checked).
// Worker: raman-arora — pb4 (Batch 4, Jalandhar+Hoshiarpur) — 2026-10-18
// Pehchan pakki: Raman Arora, AAP, Jalandhar Central (foundation record, candidate_id=996, B.A. GNDU 1992).
// Karyakaal Mar 2022+. Vikas-kaaryon ki koee yogya entry naheen mili (0 works).
// Negatives: 3 entries, sab established media, MLA khud aaropi, stage-accurate, stage field naheen.
punjabWorks['raman-arora'] = [
  {
    title: 'Punjab Vigilance Bureau ne 23 May 2025 ko farzi building violation notice se vasuli ke aarop me giraftar kiya; VB ne 900-page chargesheet dakhil ki aur rajya sarkar prosecution ki anumati de chuki hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan Times',
    sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/aap-mla-arora-joins-ed-probe-linked-to-graft-extortion-cases-101780425359731.html',
    date: '2025-05-23',
    note: 'Hindustan Times (3 Jun 2026) ke anusaar, Punjab Vigilance Bureau ne MLA Raman Arora (AAP, Jalandhar Central) ko 23 May 2025 ko Prevention of Corruption Act ke maamle me giraftar kiya; VB FIR ke mutabik Arora ne Municipal Corporation ke Assistant Town Planner Sukhdev Vashisht ke zariye farzi notice bhijwakar vyapariyon, vyavsayiyon aur commercial property malikon se vasuli ki. VB ke 900-page chargesheet me Arora par rajnitik prabhav ka durupyog karke sthaniya vyapariyon aur commercial property malikon se vasuli ka aarop hai, aur rajya sarkar prosecution ki anumati de chuki hai. Ghar par 23 May ke chhape me Rs 6 lakh nakad, 1.2 kg sone ke zevar aur 75-80 violation notice baramad hue. VB maamla BNS dhara 238, 308(2), 61(2) aur Prevention of Corruption Act ke tahat darj hai. Is page par MLA ka koee jawab ya inkar darj naheen hai. Giraftari ki taareekh 2025 isliye maani gayi kyunki June 2026 ki report me May 23 last year likha hai.',
    period: '2022-2027',
  },
  {
    title: 'Jalandhar court ne 22 Sep 2025 ko 129 din ki hirasat ke baad VB vasuli maamle me zamanat di; giraftari ke dauraan construction sites par violation notice bhijwakar rishwat maangne ka aarop tha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/aap-mla-raman-arora-gets-bail-after-129-days-in-custody-in-extortion-case/',
    date: '2025-09-22',
    note: 'The Tribune (22 Sep 2025) ke anusaar, Jalandhar Central ke AAP MLA Raman Arora ko Jalandhar court ne 129 din hirasat me rahne ke baad zamanat de di. Unhe 23 May 2025 ko Vigilance Bureau ne municipal adhikariyon ke saath milkar vasuli racket chalane ke aarop me giraftar kiya tha, jisme chal rahe construction projects ko chinhit karke violation notice bheje jaate the aur maamla suljhane ke liye rishwat maangi jaati thi. Is page par MLA ka koee jawab darj naheen hai.',
    period: '2022-2027',
  },
  {
    title: '2 Jun 2026 ko Jalandhar me Enforcement Directorate ke samaksh PMLA janch me pesh hue; VB maamle me rihai ke din hi police ne naye graft aur vasuli FIR me dobara giraftar kiya tha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/aap-mla-raman-arora-appears-before-ed-in-money-laundering-probe/amp/',
    date: '2026-06-02',
    note: 'The Tribune (2 Jun 2026) ke anusaar, AAP ke Jalandhar Central MLA Raman Arora Jalandhar me Enforcement Directorate ke samaksh pesh hue aur Prevention of Money Laundering Act ke tahat sandigdh ullanghan ke maamle me poochtachh hui. ED ki janch 23 May 2025 (report me May 23 last year) ko Punjab Vigilance Bureau dwara darj maamle par aadharit hai, jisme Arora par Municipal Corporation adhikariyon, jinme Assistant Town Planner aur building branch inspector shaamil hain, ke saath milkar farzi building violation notice jari karke logon se vasuli ka aarop hai. VB maamle me rihai ke din hi Arora ko police dwara darj ek graft aur vasuli ke maamle me dobara giraftar kar liya gaya tha. Is page par MLA ka koee bayan darj naheen hai. Report me ye bhi hai ki rihai ke baad se Arora ne apne Assembly kshetra me koee vikas pariyojna ka lokarpan naheen kiya hai.',
    period: '2022-2027',
  },
];
// R-1. bharathorizon.com par Basti Danishmanda me lagbhag Rs 2 crore ki sadak ka lokarpan MLA dwara (bharathorizon.com) — outlet whitelist me naheen, entry naheen.
// R-2. punjabkhabarnama.com (26 Feb 2024) — mantri Balkar Singh ke karyakram me tubewell, park, fire station ka shilanyas; outlet whitelist me naheen, Raman Arora sirf maujood the, aur pariyojnayen Deol Nagar (Jalandhar West, doosri seat) me theen — seat ke bahar + maujoodgi matra.
// R-3. yespunjab.com (29 Nov 2024) review meeting — outlet whitelist me naheen, Arora sirf upasthit, ghoshnaon ka shrey mantriyon Harbhajan Singh ETO aur Mohinder Bhagat ko — sirf ghoshna/maujoodgi.
// R-4. Tribune epaper Jalandhar Tribune (8 aur 10 Apr 2025) — Adarsh Nagar, Dhilwan, Chugitti, Abadpura me Rs 18.80 lakh aur Rainik Bazaar, Ladowali Road, Kaki Pind, Nehru Garden me Rs 29.77 lakh ke school projects ka lokarpan — ye Punjab Sikhiya Kranti ke statewide mass campaign events the (epaper me hi teachers ke virodh ki khabar hai), isliye sarkari abhiyan ke keval shubharambh ki shreni me reject.
// R-5. Aam Aadmi Clinic ka lokarpan (gaon Dhannowali; publish.tribuneindia.com item 503156) — statewide 500-clinic abhiyan ka keval shubharambh, reject.
// R-6. Indian Express (12 Nov 2025) — MLA ne Rs 5 crore ki vasuli ke threat call ki shikayat darj karayi — isme MLA shikayatkar hai, na vikas kaary na negative; entry naheen.
// R-7. Tribune (Nov 2025) Anandpur Sahib vishesh satra me upasthiti aur (May 2026) halqa in-charge Nitin Kohli se takraar ki report — rajnitik gatividhi, koee vikas ya nyayik vikas naheen; entry naheen.
// R-8. UNI (uniindia.com, 24 May 2025) par Sukhbir Badal ka giraftari ko political drama batana — UNI whitelist me reject hai; party rajneeti ki tippani akele negative naheen.

// PB4: avtar-singh-junior — 1 entries merged (QA-checked).
// Worker: avtar-singh-junior — pb4 worker, 2026-10-18
// NOTE: Foundation record ~/workspace/aangkapaneta/src/data/punjab.ts research ke samay
// accessible nahi thi (file maujood nahi; Punjab foundation abhi in-progress hai). Party/seat/tenure
// task brief ke mutabik: INC, Jalandhar North (No. 36), term Mar 2022 se. Cross-check: PRS MLA track
// (term start 10-Mar-22, incumbent) aur punjabassembly.gov.in profile (2017 aur 2022 me Jalandhar North
// se elected; pita Avtar Henry, ex-minister). Sthaniya press me yahi MLA "Bawa Henry" naam se report
// hota hai — pehchaan "Jalandhar North MLA Bawa Henry / Avtar Singh Junior" se pakki ki gayi.
// Scope period: 2022-2027. Yeh MLA opposition bench par hai (AAP sarkar), isliye seat-level
// bhautik karyon ki whitelisted coverage bahut seemit mili.
punjabWorks['avtar-singh-junior'] = [
  {
    title: 'Jalandhar North ke Congress MLA Avtar Singh Junior ne Punjab Assembly Speaker ko "The Population Control Bill 2025" naam ka private member bill submit kiya, jisme do-bacche ke norm ka proposal aur usse zyada bacchon par penalty ki baat hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI (via ThePrint)',
    sourceUrl: 'https://theprint.in/india/punjab-cong-mla-submits-bill-seeking-population-control-law/2679864/',
    date: '2025-07-04',
    note: 'PTI report (dateline Jul 4, 2025) ke mutabik MLA ne Speaker Kultar Singh Sandhwan ko private member bill pichhle Wednesday (Jul 2, 2025; bill ke naam se saal 2025 pakka) ko submit kiya. Bill me do se zyada living children hone par voting aur chunav ladne se disqualification, welfare schemes aur sarkari naukri se vanchit karne, aur har atirikt bacche par kam se kam Rs 10 lakh penalty ka proposal hai; saath me state population control committee aur norm manne wale BPL parivaron ke liye incentive bhi. MLA ne bill par Vidhan Sabha me discussion ki maang ki. Credit capped: Speaker ko submission documented hai; bill pass hone ya sarkar ki swikriti ki koi report nahi mili.',
    period: '2022-2027',
  },
];

// R-1. The Tribune "Foundation stones of projects worth Rs41.07 cr laid" (Feb 2021): Bawa Henry ne Gadaipur me waste management plant ka shilanyas kiya — PRE-TERM (Feb 2021, Mar 2022 se pehle); CM-led state event me kai netaon me se ek. REJECT.
// R-2. PTB News: Ward 66 Gopal Nagar ki sadkon ka udghatan (Rs 22 lakh) aur Ward 4 Hargobind Nagar ki sadkon ka shubharambh (Rs 49 lakh) — chhota local portal, whitelist me nahi; kisi whitelisted outlet ne in events ko cover nahi kiya. REJECT (source not whitelisted).
// R-3. The Tribune "MLA Henry takes up civic issues with MC Commissioner" (Oct 28, 2025): MC Commissioner se milkar sewerage/sadak/green-belt mudde uthaye — sirf maang, koi documented nateeja nahi. REJECT.
// R-4. The Tribune video + Punjabi Jagran: Sep 2026 me bijli katoti ke khilaf PSPCL office ke bahar Congress ka dharna (MLA Bawa Henry ne netritva kiya) — dharna/protest, works nahi. Entry ke liye REJECT; negative bhi nahi (party karyawahi, MLA par koi FIR/janch/nyayik vikas nahi).
// R-5. Indian Express: Vidhan Sabha me power of attorney par 2% stamp duty aur loans par 0.25% stamp duty par sawal uthaya — mantri ne defensive jawab diya, koi badlav/karwai nahi hui. REJECT (sirf prashn, koi dastavezi nateeja nahi).
// R-6. Times of India: gaon ke talabon ko jodkar STP-treated paani se sinchai ka proposal rakha — "mooted a proposal", sirf prastav. REJECT.
// R-7. Hindustan Times: Pargat Singh ke saath Jalandhar DC se illegal mining par karwai ki maang — seat ke bahar (Jalandhar Cantt ke gaon) + sirf maang. REJECT.
// R-8. The Tribune "Delimitation process for MC polls begins" (May 2023): MC ward delimitation criteria par objection — sirf objection/maang. REJECT.
// R-9. The Tribune "Cong MLA threatens to raze foundation stones in Jalandhar" (Dec 2025): plaque par Congress councillor ka naam na hone par shilanyas-patton ko girane ki dhamki; MLA site par pahunche hi nahi; koi FIR ya nyayik vikas nahi. Party-political episode — works nahi, qualifying negative bhi nahi. REJECT.
// R-10. 5DariyaNews (non-whitelisted): SAD ne Jan 2018 me Avtar Henry aur Avtar Junior par "gangsters ko badhava" ka criminal case darj karne ki maang ki — PRE-TERM, vipakshi political maang, report me koi case darj hone ki baat nahi, outlet whitelist me nahi. Negative ke liye REJECT.
// R-11. casemine.com "AVTAR SINGH v. STATE OF PUNJAB": NDPS case me petitioner ek truck owner "Avtar Singh" hai — pehchaan seat se pakki nahi; NAAM-JAAL ke kaaran MLA se jodna galat hoga. REJECT.
// R-12. myneta.info 2017 halafnama: "No criminal cases" — halafnama akele negative nahi aur works nahi; sirf context. Entry nahi banayi.
// R-13. WishavWarta / TheStellarNews / 5DariyaNews: PUEIP Phase-II Rs 663.41 cr aur Rs 41.50 cr Smart City/AMRUT launch (Oct 2020 - Feb 2021): MP-led, pre-term; MLA kai upasthit netaon me se ek — dusre neta ke karyakram me maujoodgi + pre-term. REJECT.
// R-14. The Tribune epaper Aug 2026: MC me bhrashtachar ke aarop par Congress press conference — party press meet, sirf aarop. REJECT.
// R-15. The Tribune "Congress stages protest against MC over fund misuse" (Oct 2026) aur "SIR deletions" (Oct 2026): party virodh aur political bayan, koi works content nahi. REJECT.

// PB4: pargat-singh-powar — 2 entries merged (QA-checked).
// Worker: pargat-singh-powar — Batch-4 research worker, 2026-10-18
// Pehchan (foundation, punjab.ts): Pargat Singh Powar, INC, Jalandhar Cantt, tenure Mar 2022-2027.
// Halafname me 0 criminal cases; 2022 me 40,816 vote (32.63%) se jeete.
// NOTE: 2022 ke baad se virodhi-dal ke MLA hain — seat me sarkari lokarpan/shilanyas
// aam taur par sarkar-paksh ke mantri/neta karte hain, isliye post-2022 vyaktigat
// kaam ke whitelisted source bahut kam mile. Pre-term (2021) kaam kai mile lekin
// Mar 2022 se pehle ke hone ke kaaran sab reject (neeche R-log me).

punjabWorks['pargat-singh-powar'] = [
  {
    title: 'Pargat Singh ne Vidhan Sabha ke Zero Hour me Jalandhar Cantt me avaidh ret-khanan ka mudda uthaya, jis par mukhyamantri ne turant karwai ka ashwasan diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI (via ThePrint)',
    sourceUrl: 'https://theprint.in/india/congs-pargat-singh-raises-illegal-mining-issue-in-punjab-assembly-cm-assures-to-address-matter/2249930/?amp',
    date: '2024-09-02',
    note: 'Teen-divsiya mansoon satra ke pehle din Zero Hour me MLA ne kaha ki unke halke me koi nadi na behne ke bavjood lagbhag 70 feet gehri avaidh mining ho rahi hai. CM Bhagwant Mann ne Jalandhar aane par site dikhane ko kaha aur mudde par turant karwai ka ashwasan diya. Dastavezi nateeja CM ke ashwasan tak seemit hai, isliye credit capped hai.',
    period: '2022-2027',
  },
];
// PARENT QA DROP (2026-10-18): doctored-Atishi-video wali dusri entry hatayi gayi — FIR ke aaropi column me 'unidentified accused' tha, MLA ka naam sirf shikayat me tha. Niyam: shikayat me naam + naamzad FIR nahi = negative NAHI. FIR me naam aaye to WATCH se wapas aayegi.

// REJECT LOG:
// R-1. Tribune "MLA Pargat hands over cheques worth Rs5.79cr for development works" (Dec 18, 2020) — pre-term, Mar 2022 se pehle; entry nahi.
// R-2. 5dariyanews / thestellarnews "Seven sports parks foundation stone worth Rs 3.85 crore" (27 Nov 2021) — pre-term + dono outlet whitelist me nahi; entry nahi.
// R-3. Hindustan Times "Pargat distributes Rs 50 lakh grant to Jalandhar villages" (Nov 21, 2021) — pre-term; entry nahi.
// R-4. daily24x7news "Debt waiver cheques Rs 73 lakh to 305 beneficiaries, Jamsher" (2021) — pre-term + non-whitelisted outlet; entry nahi.
// R-5. Tribune "Pargat drives tractor to flood-hit villages, distributes relief" (Sep 2025) — daan/rahat kaam (ration kits, tarpaulins); reject-shreni; entry nahi.
// R-6. Tribune "MLA Pargat visits government school, flags poor sanitation" (Jul 2026) — sirf nirikshan/daura, koi kaam nahi karwaya; entry nahi.
// R-7. Tribune "MLA Pargat visits MC office, lodges protest with Mayor, Commissioner" (Nov 2025) — sirf virodh/raajneetik bayan, koi bhautik kaam nahi; entry nahi.
// R-8. cityairnews "Pargat visits mandis, questions wheat procurement" (Apr 2026) — sirf nirikshan + non-whitelisted outlet; entry nahi.
// R-9. Tribune epaper "Land pooling protest, Kukkad Pind" (Jul 2025) — andolan/virodh, koi kaam nahi; entry nahi.
// R-10. Times of India "calls for systemic reforms to deal with dams" (Sep 2025, special session) — sirf maang/sujhav (Dam Safety Act demand), koi dastavezi nateeja nahi; entry nahi.
// R-11. Tribune "Mittal inaugurates projects worth Rs 1.50 crore" (2026) — MP Ashok Mittal ke MPLADS kaam, MLA ka kaam nahi; entry nahi.
// R-12. PM Modi Jalandhar Cantt railway station inauguration + NH projects (Jul 2026, ET/others) — kendriya pariyojna (Amrit Bharat Station Scheme), MLA ki vyaktigat bhoomika ka koi ullekh nahi; entry nahi.
// R-13. ThePrint election interview "report card" claims (roads, naala, college, green belt) — ekmatra aadhaar MLA ka dawa + specific post-event kaam ka whitelisted source nahi + ThePrint whitelist me nahi; entry nahi.
// R-14. punjaboutlook "MLA fund Rs 5 crore not released" (2026) — yeh kaam nahi, funds na milne ki shikayat hai; entry nahi.
// R-15. Tribune "Pargat opens election office" (Jan 2022) — chunavi karyalaya, vikas kaam nahi; entry nahi.
// R-16. Tribune "paddy procurement inauguration" (Oct 3, 2021) — pre-term; entry nahi.

// PB4: sukhwinder-singh-kotli — 2 entries merged (QA-checked).
// Worker: sukhwinder-singh-kotli — works-research 2026-10-18
// Foundation se koi visangati nahi: Adampur (SC), INC, MLA 2022-2027 (punjab.ts, halafnama: 0 criminal cases, myneta candidate_id=274).
// NOTE: Task me diya path ~/workspace/aangkaneta_scratch/ is VM par open nahi hota (stale entry);
// isi liye fragment asal batch-4 dir ~/workspace/aapkaneta_scratch/ me likha gaya hai, jahan baaki pb4_worker_* files hain.
punjabWorks['sukhwinder-singh-kotli'] = [
  {
    title: 'Vidhan Sabha me Kotli ke uthaye mudde par PWD mantri ne Adampur flyover aur Jalandhar-Hoshiarpur road ka kaam June me dobara shuru karne ka aashvasan diya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/kotli-raises-issue-of-adampur-flyover-in-punjab-assembly/',
    date: '2026-03-12',
    note: 'The Tribune ke anusaar, Congress MLA Sukhwinder Singh Kotli ne Assembly me 10 saal se adhura Adampur flyover aur gaddhon wali Jalandhar-Hoshiarpur road ka mudda uthaya; unhone poocha ki zimmedar adhikariyon par karravai kyun nahi hui. PWD mantri Harbhajan Singh ETO ke likhit jawab me kaam dobara shuru hone ka koi schedule nahi tha, lekin Kotli ke supplementary sawalon par mantri ne sadan me aashvasan diya ki flyover aur sadak ka kaam June me shuru hoga. Report me Kotli ka kehna bhi darj hai ki unhone pehle bhi ye mudda uthaya tha aur virodh kiya tha, jiske baad Adampur ki sadak ka kaam poora hua lekin bridge ka kaam adhura raha. Credit capped — dastavezi nateeja sirf mantri ka aashvasan hai; kaam vaastav me dobara shuru hua ya nahi, is page par iski pushti nahi hai.',
    period: '2022-2027',
  },
  {
    title: '23 April 2025 ko Bhogpur me Jalandhar-Pathankot National Highway rokne par Adampur Congress MLA Sukhwinder Singh Kotli ke khilaf Jalandhar Rural Police ne FIR darj ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/punjab-congress-sukhwinder-singh-kotli-booked-national-highway-protest-9972813/',
    date: '2025-04-29',
    note: 'The Indian Express ke anusaar, Jalandhar Rural Police ne 23 April ko Bhogpur Sugar Mill ke paas prastavit bio-CNG plant ke khilaf virodh me Jalandhar-Pathankot National Highway rokne ke aarop me Adampur ke Congress MLA Sukhwinder Singh Kotli, lagbhag do darjan pehchane gaye aur lagbhag 150 agyat vyaktiyon ke khilaf FIR darj ki. FIR me National Highways Act ki Section 8B (national highway par traffic rokna, 5 saal tak ki saja ka pravdhan) aur Bharatiya Nyaya Sanhita ki dharaon ke saath noise pollution aur public order se judi dharaen lagayi gayin. Kotli ka jawab — unhe kanooni karravai ka koi darr nahi, ve plant ka virodh jari rakhenge aur kanooni tareeke se case ladenge, aur police bulaye to giraftari ke liye taiyar hain. Report ke samay authorities sthiti par nazar rakh rahi thi aur aage karravai se inkar nahi kiya gaya tha; chargesheet ya aage ki nyayik pragati is page par darj nahi hai.',
    period: '2022-2027',
  },
];
// R-1. 115 PMAY labharthiyon ko allotment letters, Nagar Council Adampur, kul pariyojna Rs 2.87 crore (The Tribune, Sep 10 2025; Kotli + Nagar Council president ne letters diye) — scheme distribution function; vyaktigat bhautik sanrachna ka lokarpan/shilanyas nahi — reject.
// R-2. Bhogpur bio-CNG plant ke khilaf virodh campaign (HT Apr 2025; Tribune Feb 20 2026; TOI Jul 2024; HT Jan 21 2025) — virodh/advocacy hai, vikas karya nahi — reject.
// R-3. Bio-CNG plant par Kotli ki PIL par Punjab-Haryana High Court ka notice (The Tribune) — Kotli yachikakarta hai, aaropi nahi; na vikas karya, na negative — reject.
// R-4. Flood-hit kisaano ke liye Rs 50,000 per acre muavze ki maang (The Tribune, Aug 2-3 2023; SDM ko gyapan) — sirf maang, dastavezi nateeja nahi — reject.
// R-5. Adampur me degree college ki maang, Vidhan Sabha session (The Tribune, Mar 11 2024) — sirf maang — reject.
// R-6. CM ka Adampur roadshow aur repair work ka foundation stone (The Tribune, May 17 2023) — CM ka karyakram; Kotli sirf reaction quote me — reject.
// R-7. Adampur airport new terminal ka virtual launch (adani.news, Mar 2024) — outlet whitelist me nahi + kendriya pariyojna + Kotli sirf maujood — reject.
// R-8. 11 gaon me Rs 71.79 lakh ke vikas karya (The Tribune, May 29 2023) — Mantri Dhaliwal + MP Rinku ka karyakram; Kotli ki koi bhoomika darj nahi — reject.
// R-9. Adampur city sewerage Rs 6.45 crore ka foundation stone (The Tribune, Mar 4 2024) — MP Sushil Kumar Rinku ka kaam — reject.
// R-10. CM Channi ke Rs 157.96 crore ke Adampur projects (iglobalpunjab, Nov 2021) — outlet non-whitelist + pre-term + CM ka karyakram — reject.
// R-11. Road accident ke baad sadak blockade (The Tribune, Sep 10 2026; Kotli maujood) — dukhda par solidarity, vikas karya nahi — reject.
// R-12. Secretariat me pravesh rokne ka dawa (itaxsoftware.net, 2024) — non-whitelisted outlet — reject.
// R-13. SDM ke saath verbal spat, Bhogpur meeting (HT, Jan 21 2025) — koi FIR/janch nahi; negative rule par khara nahi — reject.
// R-14. Post-matric scholarship par Governor ko gyapan (The Tribune, Jun 13 2023) — advocacy, vikas karya nahi — reject.
// R-15. Adampur airport ko Guru Ravidas ke naam ki maang (TOI, Jan 2026) — maang — reject.
// R-16. Assembly special session me law-and-order bayan (PTI via ThePrint, Jul 9 2025) — House advocacy, vikas karya nahi — reject.

// ---- Punjab works mining — BATCH 4: Hoshiarpur (7 MLA) — 2026-10-18 ----
// Research: per-MLA workers; merge + QA coordinator ne kiya.
// PB4: jangi-lal-mahajan — 0 entries merged (QA-checked).
// Worker: jangi-lal-mahajan — research 2026-10-18; whitelisted outlets me koi qualifying work entry nahi mili
punjabWorks['jangi-lal-mahajan'] = [];
// REJECT LOG (Roman-script Hinglish; koi entry qualify nahi hui):
// R-1. Dainik Bhaskar: "Mukerian thaane se highway tak ban rahi gali ka kaam Jangi Lal Mahajan ne rukwaya" (~7 saal purana, 2019 ke aas-paas ka) — pre-term mamla; Mar 2022 ke baad ka koi legal/nyayik vikas nahi dikha. REJECT.
// R-2. Dainik Jagran (2022-02-16): "Vikas ke liye Punjab ko double engine ki zaroorat" — chunav prachar ke dauraan promises (pre-election campaign), koi kaam nahi. REJECT (sirf ghoshna/vaada).
// R-3. The Tribune (Nov 2023): Hoshiarpur Vikas Kranti rally me Medical College par MLA ka bayan — "Rs 400 crore Medical College project Centre ka plan tha" — dusre pariyojna par tippani, khud ka koi kaam nahi; koi fund/bhoomika disclosed nahi. REJECT (sirf tippani).
// R-4. Times of India (Punjab assembly session): BJP MLA Jangi Lal Mahajan ne Mukerian me GT Road par traffic congestion aur ghatak durghatnaon ka mudda uthaya — sirf prashn/maang, koi dastavezi nateeja nahi. REJECT (sirf maang/prastav).
// R-5. The Tribune (wp-json news/167294): Kandi canal ki dheemi gati ka mudda Harmit Pathanmajra aur Mukerian BJP MLA Jangi Lal Mahajan ne uthaya — sirf mudda uthana, nateeja documented nahi. REJECT (sirf maang).
// R-6. The Tribune (Mar 2026 budget session liveblog): anti-drug drive me khamiyon par MLA ki tippani — tippani maatr, koi kaam nahi. REJECT.
// R-7. ThePrint/ANI (Jan 2024): Nitin Gadkari ne Hoshiarpur me 29 NH projects (Rs 4,000 crore+) ka udghatan/shilanyas kiya; Mukerian-Dasuya-Bhogpur 45 km bypass (Rs 1,600 crore) ki ghoshna — kendriya pariyojna, MLA ki koi vyaktigat bhoomika documented nahi. REJECT (kendriya pariyojna bina vyaktigat bhoomika).
// R-8. PIB (Jul 2026): PM Modi ne Jalandhar visit me Daulatpur Chowk-Kartoli rail line (Rs 830 crore, Nangal Dam-Talwara-Mukerian rail project) ka udghatan kiya — kendriya pariyojna, MLA ka koi role nahi. REJECT.
// R-9. Punjab Newsline (CM Mann, Mukerian): CM ne Mukerian me naye government college ke liye zameen ki appeal aur Hajipur/Mukerian hospitals ke upgrade ki ghoshna ki — CM ki ghoshna; MLA ki koi vyaktigat bhoomika/fund documented nahi. REJECT (dusre neta ka kaam; sirf ghoshna).
// R-10. The Tribune (Jan 2024, Sarkaar Vpaar Milni): CM ne Mukerian Civil Hospital me trauma centre ki ghoshna ki — CM ki ghoshna, MLA ka role documented nahi. REJECT.
// R-11. The Tribune (Sep 2026): Nasha Mukt Punjab Yatra — Mukerian rally me MLA ne "drug smugglers ko 4 mahine bache hain" jaisa bayan diya — party campaign/samaroh, koi bhautik kaam nahi. REJECT (party karyakram).
// R-12. The Tribune (May 2026): Mukerian BJP MLA ne MC poll me SAD candidate Gurcharan Singh Chak (Ward 12) ke liye prachar kiya — party chunav karyawahi, negative entry ke roop me bhi akele party karyawahi negative NAHI. REJECT.
// R-13. IANS/Hindustan Times (Mar 2023): Jalandhar Lok Sabha bypoll me BJP ke co-incharge bane — party sangathan bhoomika, seat ka kaam nahi. REJECT.
// R-14. The Tribune (Jan 2026, Mukerian jewellery heist): MLA ne aaropiyon ki giraftari aur suraksha badhane ki maang ki — sirf maang, MLA khud aaropi nahi. REJECT (maang; negative nahi).
// R-15. govserv.org: MLA ke social-media posts (dawa/sahayata Rs 50,000 shauchalaya ke liye Musahibpur bhawan me; Som Parkash ke bhawan ka udghatan) — (a) som parkash (ex-MoS) ka kaam, MLA maujood bhi nahi the; (b) Rs 50,000 ki vyaktigat sahayata = niji kharch/daan shreni; (c) govserv social-media scrape, whitelisted outlet nahi. REJECT.
// NEGATIVES: koi nahi. Halafnama (myneta.info, Punjab 2022 candidate_id=202) me criminal cases = 0; Mar 2022 ke baad MLA ke khilaf koi FIR/chargesheet/janch/judicial vikas established media me nahi mila.
// RETRY LEAD: punjabassembly.gov.in member profile (MemberID=175, AssemblyID=16) — Questions section ka crawl "No Record Found" dikha raha tha lekin page browser.open se khul nahi paya (fetch failed); parent chahe to seedhe portal par MLA ke poochhe gaye prashnon ki suchi verify kar sakta hai.

// PB4: karambir-singh — 0 entries merged (QA-checked).
// Worker: karambir-singh — Batch 4 (Dasuya, Hoshiarpur), researched 2026-10-18
// Foundation: Karambir Singh, AAP, MLA Dasuya (2022-2027), term start 10-Mar-2022 (PRS mlatrack).
// Naam-jaal note: media me naam kayi roop me — Karambir Singh Ghuman / Karma Vir Singh Ghumman / Karamvir Singh Ghumman (Dasuya MLA).
// ZERO qualifying works entries found. Whitelisted outlets (Tribune, HT, PTI) me is MLA ke apne naam par koi
// post-event lokarpan/shilanyas, fund sanction, GO-backed swikriti, itemized list ya Vidhan Sabha nateeja nahi mila.
// Sabhi bade seat-projects (train halts, Rs 516-cr Hoshiarpur package, Talwara water project, Dasuya-Kamahi Devi road)
// mantriyon/CM ke karyakram the jinme MLA sirf maujood tha — shrey ka dawa nahi ho sakta.
// Negatives: koi qualifying negative nahi — jo aarop mile wo FIR/chargesheet/nyayik-vikas stage par nahi (neeche R-log).
punjabWorks['karambir-singh'] = [];
// REJECT LOG
// R-1. The Tribune (2025-10-15) 'MLA up in arms against installation of stone crusher' — MLA ne Bhol Bhadmania me Guru Stone Crusher ka virodh kiya, site visit + dabaav. Whitelisted source, khola aur padha, lekin: koi sarkari fund/nirman/shilanyas nahi, koi seal/swikriti-aadesh report nahi — sirf maang/dabaav ('sirf maang/prastav' = REJECT). https://www.tribuneindia.com/news/jalandhar/mla-up-in-arms-against-installation-of-stone-crusher/amp/
// R-2. The Tribune (2025-10-14) 'Bar chief alleges threats of being implicated in false case' — Advocate PS Ghuman ka aarop: Dasuya ke kuch gaon me Congress samarthan ke kaaran vikas karya roke gaye, jhoothi shikayat ki dhamki; DC se shikayat, DC ne janch ka aadesh diya. Khola aur padha. Negative KE LIYE REJECT: MLA par koi FIR/chargesheet/nyayik vikas nahi — virodhi-dal aarop, DC-level janch (judicial stage nahi). https://www.tribuneindia.com/news/jalandhar/bar-chief-alleges-threats-of-being-implicated-in-false-case/
// R-3. CBI FIR case (Oct 2026) against 'Rajbir Singh Ghuman' (OSD to CM Bhagwant Mann) — NAAM-JAAL TRAP. Ye Dasuya MLA Karambir Singh Ghuman NAHI hai; poori tarah alag vyakti (CMO ke OSD). Coverage: HT, ToI, PTI/Punjab Kesari. Entry mat banana, identity galat hai. https://www.hindustantimes.com/cities/chandigarh-news/punjab-cm-office-graft-charges-ghuman-appears-before-cbi-grilled-for-6-hours-101792178794699.html
// R-4. ThePrint/PTI (2022-07-06) 'Instagram account of Dasuya MLA hacked' — MLA khud shikaar, police complaint. Works nahi, negative nahi. REJECT.
// R-5. PTC News (2026-10-13) 'Akal Takht summons 15 AAP MLAs' — Karamvir Singh (Dasuya) bhi delegation me tha, 15 Oct ko pesh hone ka summon. REJECT: (a) PTC News whitelist me nahi; (b) religious summons — FIR/chargesheet/nyayik vikas nahi, samuhik delegation matter, vyaktigat aarop nahi; party-level maamla negative nahi.
// R-6. 5dariyanews (2024-02-06) Dasuya-Kamahi Devi Road 20.23 km, Rs 9.50 crore — mantri Harbhajan Singh ETO ne kaam shuru karwaya, MLA sirf maujood tha. REJECT: (a) outlet whitelist me nahi; (b) 'dusre neta ke karyakram me maujoodgi'.
// R-7. newznew.com 'Vikas Kranti' — CM + Kejriwal ne Dasuya ko multipurpose hall Rs 1.42 cr + Kalowal/Mirpur Kotli water supply Rs 1.59 cr gift kiye. REJECT: (a) outlet whitelist me nahi; (b) MLA ki vyaktigat bhoomika nahi, CM-level event.
// R-8. The Tribune (2024-01-08) 'Talwara project to provide potable water to 197 villages' — Rs 258.73 cr, mantri Bram Shanker Jimpa ka daura, MLA sirf maujood. REJECT: 'dusre neta ke karyakram me maujoodgi'. https://www.tribuneindia.com/news/jalandhar/talwara-project-to-provide-potable-water-to-197-villages-says-jimpa-579608
// R-9. Indian Express (2026-04-08) 'Mann unveils Rs 516-cr projects in Hoshiarpur' — Balachaur-Garhshankar-Hoshiarpur-Dasuya road Rs 99 cr shilanyas CM ne kiya; medical college Hoshiarpur. REJECT: CM-level event, Dasuya MLA ki vyaktigat bhoomika report nahi (seat ke bahar zyadatar — medical college Hoshiarpur, CHC Sham Chaurasi).
// R-10. The Tribune (2024-01-08) 'Minister inaugurates halt of trains at Dasuya, Mukerian' — Union Minister Som Prakash ne Dasuya station par train halts ka uddghatan kiya. REJECT: kendriya pariyojna (railway), MLA ki bhoomika nahi.
// R-11. The Tribune (2026-02, updated) 'Teachers oppose TET requirement' — teachers ne MLA se maang ki, MLA ne CM/Education Minister ko likhne ka aashwasan diya. REJECT: sirf maang + aashwasan ('sirf maang/prastav').
// R-12. The Tribune (2022-03-31) 'Timely delivery of services his priority' — chunaav ke turant baad ka interview, ghoshnaen ('corruption intolerant', hospital nirikshan). REJECT: sirf ghoshna + nirikshan, koi yojna/fund/sanction nahi.
// R-13. dnpindia.in (2026-09-25) AAP door-to-door outreach Dasuya — 'Karmbir Ghuman' constituency in-charge. REJECT: (a) outlet whitelist me nahi; (b) party prachar, works nahi.
// R-14. PRS mlatrack: Karambir Singh ne Mar 2022-Mar 2025 me 20 prashn pooche (state average 12) — lekin kisi prashn ka dastavezi nateeja (swikriti/aadesh) media me report nahi mila. Entry nahi bani — credit-capped nateeja ke bina PRS count akele entry nahi. https://prsindia.org/mlatrack/karambir-singh
// R-15. Wikipedia 'Karambir Singh Ghuman' + 'Dasuya Assembly constituency' — profile/margdarshan, works ka source nahi. REJECT (reference only, outlet whitelist me nahi).

// PB4: jasvir-singh-raja-gill — 1 entries merged (QA-checked).
// Worker: jasvir-singh-raja-gill — works research, 2026-10-18
// Foundation (~/workspace/aapkaneta/src/data/punjab.ts): Jasvir Singh Raja Gill, AAP, MLA, Urmar, tenure 2022-2027.
// Whitelist-only sources khole gaye; 1 qualifying entry mili.

// Entry 1: school works lokarpan, Tanda (Shiksha Kranti)
punjabWorks['jasvir-singh-raja-gill'] = [
  {
    title: 'MLA Jasvir Singh Raja Gill ne Tanda me chaar sarkari primary schoolon me Rs 21 lakh ke poore hue vikas karyon ka lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/works-opened-in-garhshankar-tanda/amp',
    date: '2025-04-07',
    note: 'The Tribune (Hoshiarpur, April 7 dateline; published 2025-04-08): Punjab Shiksha Kranti ke tehet Tanda me MLA Jasvir Singh Raja Gill ne apne kshetra ke chaar schoolon me Rs 21 lakh ki lagat se poore hue karyon ka udghatan kiya. School: Government Primary School Uhadpur, Saidpur Data, Sahabajpur aur Moonak Kalan. Unhone kaha ki Punjab ka education model excellent hai jo dusron ke liye misaal banega; shikshakon, chhatron aur abhibhavakon se baat ki. Date note: article me "today inaugurated" with Hoshiarpur April 7 dateline — event date 2025-04-07 inferred.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
];

// REJECT LOG
// R-1. Rara-Tahli 4.44-km link road (~Rs 12 crore), The Tribune 2026-08-09: dedication lead Hoshiarpur MP Raj Kumar Chabbewal ne kiya, MLA sirf saha-udghatan me maujood; fund source aur MLA ki vyaktigat bhoomika disclosed nahi; MP (Chabbewal) MPLADS ambiguity bhi — reject.
// R-2. Kalyanpur 66 kV substation (Rs 422.12 lakh), The Tribune May 2023: Power Minister Harbhajan Singh ETO ne dedicate kiya; MLA sirf saath maujood the — dusre neta ke karyakram me maujoodgi — reject.
// R-3. "Education top priority" interview, The Tribune 2022-04-01: jeet ke baad intent-statement, koi kaam/fund disclosed nahi — sirf ghoshna — reject.
// R-4. CM Bhagwant Mann Rs 150 crore Tanda event, indiatimes.com (TOI) Apr 2026: CM-led event; article me Gill ka zikr hi nahi — dusre neta ke karyakram me maujoodgi — reject.
// R-5. Aam Aadmi Clinic, Miani village: publish.tribuneindia.com wp-json snippet, page 403 par khul nahi paya (RETRY LEAD); per-clinic fund disclose nahi; sarkari flagship campaign dedication — reject.
// R-6. Aam Aadmi Clinic Ahiyapur, 5dariyanews: non-whitelisted outlet + clinic Dasuya seat me (seat ke bahar) — reject.
// R-7. Labour union dharna, The Tribune 2024-05-29 (Tanda DSP office) aur 2024-06-26 (District Administrative Complex): Punjab Pendu Mazdoor Union ne SC/ST Act ke tehet case ki maang ki, MLA par Dalit majdooron se durvyavhaar ka aarop; lekin koi FIR/chargesheet/janch/jawab documented nahi — negative criteria ka threshold fail — entry NAHI. FIR-status ka follow-up search recommended (FIR mile to negative qualify ho sakta hai).
// R-8. GKSM Govt College Tanda prospectus release (gctanda.ac.in): samaroh me maujoodgi, koi vikas kaam nahi — reject.
// R-9. patialapolitics.com Tanda Rs 150 cr coverage: non-whitelisted — reject.
// R-10. Halafnama ke 2 pending criminal cases (myneta/ADR): pending affidavit cases akele negative NAHI; Mar 2022+ me koi nyayik vikas nahi mila — reject.

// PB4: ravjot-singh — 1 entries merged (QA-checked).
// Worker: ravjot-singh — batch-4 research worker, 2026-10-18
punjabWorks['ravjot-singh'] = [
  {
    title: 'Mantri ke roop me Dr Ravjot Singh ne Sham Chaurasi segment ke Dallewal gaon me community centre ka lokarpan kiya, Khalwana gaon me naye tubewell ka udghatan kiya aur drainage project launch kiya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/minister-launches-drainage-project/',
    date: '2025-01-22',
    note: 'The Tribune (22 Jan 2025) ke mutabik Local Bodies Minister Dr Ravjot Singh ne Shamchurasi segment ke kayi gaon ka daura karke Dallewal me community centre ka lokarpan, Khalwana me naye tubewell ka udghatan aur drainage project ka shubharambh kiya; kharch ki rashi article me disclosed nahi hai — mantri-attributed pahal ke roop me capped entry.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
];
// R-1. Tribune (5 Apr 2026) CM Mann ke 7 Apr 2026 Sham Chaurasi event ka pre-event announcement — pre-event source NAHI; post-event IANS report sirf english.punjabkesari.com par (whitelisted nahi); MLA ki vyaktigat bhoomika disclosed nahi (sirf venue-arrangement review) — dusre neta ke karyakram me maujoodgi category, REJECT.
// R-2. Shiksha Kranti school works (17-19 Apr 2025, ~Rs 33 lakh/37.65 lakh, Sham Chaurasi ke 4-4 school) — coverage sirf yespunjab.com, punjabkhabarnama.com, satlujbiastimes.com, patialapolitics.com par; koi whitelisted outlet nahi — REJECT.
// R-3. Alawalpur Rs 10.61 crore sewerage project shilanyas — seat ke bahar (Jalandhar area), REJECT.
// R-4. Rajpura Rs 33.66 crore pipeline water supply shilanyas (Tribune) — seat ke bahar, REJECT.
// R-5. Ludhiana Rs 120 crore development projects udghatan (Nov 2024) — seat ke bahar, REJECT.
// R-6. Phagwara Rs 4.35 crore water supply shilanyas (Babushahi, 3 Dec 2024) — seat ke bahar, REJECT.
// R-7. Mudki Rs 14.27 crore canal water supply shilanyas (Babushahi, 20 Jun 2025) — seat ke bahar (Ferozepur), REJECT.
// R-8. Tribune review meeting: minister ne officials ko development works tez karne ka nirdesh diya — sirf meeting/nirikshan, REJECT.
// R-9. Tribune grievance hearing (Jan 2026): link roads shuru hongi — sirf ghoshna, REJECT.
// R-10. School visits/PTM inspection (Tribune Jan 2023; public.app Oct 2026) — sirf nirikshan/daura, REJECT.
// R-11. Hindustan Times (2025): Dr Ravjot Singh ne Bikram Singh Majithia ke khilaf edited pictures par police complaint ki — MLA khud complainant hai, aaropi nahi; negative criteria poora nahi — REJECT.
// R-12. NRI complaints 25,800+ resolved (Babushahi/YesPunjab, 2026) — mantri-vibhag state-wide, whitelisted outlet par nahi — REJECT.
// R-13. TOI (~Feb 2026): Chandigarh me Bajwa protest par Ravjot Singh sahit AAP neta detained — political detention, unke khilaf FIR nahi; negative nahi — REJECT.
// R-14. Rs 99 crore Balachaur-Garhshankar-Hoshiarpur-Dasuya road (105 km, Apr 2026) — CM dwara shilanyas, inter-district kendriya/major project; MLA ki vyaktigat bhoomika disclosed nahi — REJECT.

// PB4: bram-shanker-jimpa — 8 entries merged (QA-checked).
// Worker: bram-shanker-jimpa — PB4 Hoshiarpur worker, 2026-10-18
// Foundation record: Hoshiarpur (AAP), MLA 2022-2027, purva cabinet mantri; 0 criminal cases (halafnama).
// Seat-only entries; mantri-karyakaal ke vibhagiya/state-wide faisle excluded.
// R-1. Fire station foundation stone near Bhangi Choe (Tribune): shilanyas Local Bodies Minister Dr Ravjot Singh ne rakha; Jimpa sirf maujood the — dusre neta ke karyakram me maujoodgi.
// R-2. Roshan Punjab launch at 11 KV substation (Tribune): state-wide scheme, CM ne launch kiya; Jimpa ne sirf local leg commence kiya — sarkari abhiyan ka keval shubharambh.
// R-3. Beautification of Indoor Stadium to Mona Memorial Church road (Tribune, 12 Aug 2025): International Tractors Ltd (Sonalika) ke collaboration me — CSR samaroh shreni.
// R-4. Hoshiarpur tehsil complex Rs 6.52 crore (daily24x7news): non-whitelisted outlet + Revenue Minister ke roop me state-wide portfolio ghoshna.
// R-5. Toilet block near Gurdwara Fatehgarh Sahib Rs 7.46 crore (5dariyanews): non-whitelisted outlet + mantri-bhoomika + seat ke bahar.
// R-6. Cyber cell fake FB IDs case (Tribune): Jimpa aur unka parivar victim the (complaint unke bhatije ne di thi); MLA khud aaropi nahi — negative nahi.
// R-7. Revenue officials 'tainted list' statements (HT/Tribune, Jun 2023): Revenue Minister ke roop me bayan; seat-kaam nahi, aur MLA ke khilaf koi kanuni karwai nahi — negative nahi.
// R-8. Train flag-off invite grievance (Tribune, Aug 2023): protocol shikayat; kendriya railway vishay + koi negative tathya nahi.
// R-9. NDPS case par firm stand (Tribune): keval bayan; bhautik kaam nahi, MLA ke khilaf kuch nahi — negative nahi.
punjabWorks['bram-shanker-jimpa'] = [
  {
    title: 'Hoshiarpur MLA Bram Shanker Jimpa ne Piplanwala sewage treatment plant par lagbhag Rs 11 crore ki sinchai pariyojana ka lokarpan kiya jisme 30 MLD shodhit pani 40 km ki pipeline se saat gaon ke kheton tak pahunchega',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/rs-11-cr-irrigation-project-inaugurated-by-hoshiarpur-mla/',
    date: '2026-04-24',
    note: 'Soil Conservation Department ne pariyojana banayi; Jimpa ke anusar shodhit pani saat gaon ke kisanon ko milega aur lagbhag 40 km pipeline bichhai gayi hai.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Hoshiarpur me Bhangi Choe par Dhobi Ghat-Adamwal road par 120 meter lambe high-level pull ke liye Rs 8.11 crore ki prashasanik swikriti mili jiski ghoshna MLA Bram Shanker Jimpa ne ki',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/two-development-projects-approved-for-hoshiarpur/',
    date: '2026-02-04',
    note: 'Pull 10 meter chauda hoga jisme 20 meter ke chhah span honge; Jimpa ke anusar yah barsat me jalbharao aur yatayat badha ki samasya ka sthai samadhan dega.',
    period: '2022-2027',
  },
  {
    title: 'District Court Complex ke paas 4.50 acre nagar nigam zameen par aadhunik sarkari school banane ke liye cabinet swikriti aur funding sanction hui jiski ghoshna MLA Bram Shanker Jimpa ne ki',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/two-development-projects-approved-for-hoshiarpur/',
    date: '2026-02-04',
    note: 'Zameen hastantaran ke liye Shiksha Vibhag ke saath MoU par hastakshar hone baaki hain; funding pehle se sanction hai.',
    period: '2022-2027',
  },
  {
    title: 'MLA Bram Shanker Jimpa ne Hoshiarpur Focal Point me lagbhag Rs 2 crore ki pariyojanaon ka lokarpan kiya jisme community hall, aadhunik park, toilet block, boundary wall aur andaruni sadkein shamil hain',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/rs-2-cr-projects-launched-at-hoshiarpur-focal-point/amp/?utm=relatedarticles',
    date: '2026-01-14',
    note: 'Lakshya audyogik kshetra ki buniyadi suvidhaon ko majboot karna hai; Mayor Surinder Kumar aur councillors karyakram me maujood the.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'MLA Bram Shanker Jimpa ne Hoshiarpur ke 27 acre Industrial Estate me Rs 1.61 crore ke infrastructure navinikaran kaamon ka lokarpan kiya jisme sadkon par Rs 82 lakh, pani aur sewerage par Rs 71 lakh aur street lights par Rs 8 lakh kharch honge',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/mla-jimpa-inaugurates-development-projects-for-27-acre-industrial-estate/',
    date: '2025-05-24',
    note: '1962-63 me sthapit is estate me 76 audyogik plot hain; Jimpa ne kaha lambi avadhi se lambit buniyadi kaam ab shuru hue hain.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'MLA Bram Shanker Jimpa ne Hoshiarpur city ke Ward 31 me lagbhag Rs 20 lakh ki lagat se nayi sadak ke nirman ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/mla-inaugurates-road-construction-work-in-ward-31/',
    date: '2026-05-19',
    note: 'Jimpa ne adhikariyon ko kaam samay par aur uchch gunvatta ke saath poora karne ka nirdesh diya; article me Hoshiarpur city me lane sudhar aur tube well ke kaam bhi ullekhit hain.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'MLA Bram Shanker Jimpa ne Hoshiarpur ke chaar sarkari schools me Rs 1.11 crore ke vikas kaamon ka lokarpan kiya jisme Chauhal ke do schools me classrooms, shed, guard room, medical room, boundary wall aur interlock tiles tatha Basi Jana ke do schools me Rs 34 lakh ki classrooms shamil hain',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/mla-opens-1-11-cr-projects-in-4-schools',
    date: '2025-04-22',
    note: 'Schools: Government Senior Secondary School Chauhal, Government Elementary School Chauhal, Government Middle School Basi Jana aur Government Elementary School Basi Jana.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Hoshiarpur MLA Bram Shanker Jimpa ne Naru Nangal Khas gaon me Rs 40 lakh ki lagat se bane khel maidan ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/sports-infra-gets-boost-in-hoshiarpur-with-new-grounds/amp',
    date: '2026-08-27',
    note: 'Naru Nangal Khas gaon Hoshiarpur Vidhan Sabha kshetra me aata hai; Jimpa ne kaha khel yuvaon me anushasan aur team bhavna vikasit karte hain.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
];

// PB4: ishank-kumar-chabbewal — 5 entries merged (QA-checked).
// Worker: ishank-kumar-chabbewal — works-worker, 2026-10-18
// Foundation: Dr Ishank Kumar, AAP, MLA Chabbewal (SC), tenure 2024-2027 (bypoll 13-11-2024). Sirf Nov 2024 ke baad ke kaam.
// PITA-JAAL CHECK: pita Dr Raj Kumar Chabbewal (Hoshiarpur LS MP, Jun 2024 se) ke MP-kaam/MPLADS bilkul alag — R-2 dekho.
// Sabhi sources kholkar padhe gaye; snippet-based source koi nahi.
punjabWorks['ishank-kumar-chabbewal'] = [
  {
    title: 'MLA Dr Ishank Kumar ne Jandoli aur Suna gaon me khel maidan ke vikas karyon ka shilanyas kiya; Rs 11.18 crore ke grant se Jandoli football tournament ground ke liye Rs 39.22 lakh aur Suna ground ke liye Rs 22.73 lakh manjoor',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/rs11-18-crore-grant-to-upgrade-playgrounds-mla/',
    date: '2026-02-10',
    note: 'MLA ne swayam shilanyas kiya; unke anusar grant jaari ho chuki hai aur tender bhi allot ho gaye hain — kaam jald shuru hoga. Jandoli me football tournament ke dauraan khiladiyon ko sammaanit bhi kiya.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Chabbewal me Rs 18 crore ki phal-sabzi processing unit ko kendriya sarkar se aupcharik swikriti mili; MLA ke prastav par MP ke saath kendriya Khadya Prasanskaran mantri se New Delhi me mulaqat ke baad approval',
    category: 'Rojgar',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/18-cr-fruit-vegetable-processing-unit-to-come-up-in-chabbewal/',
    date: '2026-04-02',
    note: 'MP Dr Raj Kumar ke anusar ye pahal MLA Dr Ishank Kumar ke prastav par hui; dono ne Union Food Processing Industries Minister se mulaqat ki, jiske baad central scheme ke tahat approval mili. Unit me Hoshiarpur-Kandi kshetra ke aaloo aur matar jaise utpaad process honge aur saikdon logon, visheshkar mahilaon, ko rojgaar milega. MLA ne state government ki taraf se poorn sahyog ka ashwasan diya.',
    period: '2022-2027',
    stage: 'swikriti',
  },
  {
    title: 'MLA ne Phuglana gaon me Rs 15 lakh ki lagat se nirmit 6 nayi sadken lokarpit ki; gaon ke community hall ki marammat ke liye Rs 5 lakh grant jaari aur anganwadi kendra ki boundary wall ke liye Rs 2 lakh ki ghoshna',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/chabbewal-mla-inaugurates-six-streets-in-phuglana-village/',
    date: '2026-03-07',
    note: 'MLA ne swayam lokarpan kiya; community hall grant jaari hui aur anganwadi boundary wall ka Rs 2 lakh ka karya bhi isi avsar par ghoshit hua. Sadken gaonwasiyon ki lambe samay se lambit maang thi.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Kot Fatuhi gaon me Rs 4.52 crore ke vikas karya poore, manjoor aur nirmanadheen; MLA ne nayi dispensary ka shilanyas kiya aur 4 sadak pariyojnaon ke poora hone ki suchna di',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/4-52-cr-development-works-underway-in-kot-fatuhi-village/',
    date: '2026-08-26',
    note: 'MLA ne gaon ke daure me bataya: 5.18-km Kot Fatuhi-Mananhana-Chak Musa Datta Chela road (Rs 86.77 lakh), 2.56-km Kot Fatuhi-Mananhana road (Rs 55.01 lakh), 0.62-km Kot Fatuhi-Garhshankar-Jhaj road (Rs 20.48 lakh) aur 1.60-km Bhagatupur-Kot Fatuhi road (Rs 33.63 lakh) poori ho chuki hain; 4.25-km Kot Fatuhi-Banga road (Rs 1.44 crore) nirmanadheen hai; Kot Fatuhi-Panchta-Ajnoha aur Gurdwara-Harijan Basti sadken manjoor; drainage-sewage, community hall, dharamshala ki chhat ki marammat aur solar street lights bhi manjoor. Dispensary se Kot Fatuhi aur aaspaas ke gaon ko buniyadi swasthya suvidha milegi.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Tanuli gaon me MLA ne Rs 70 lakh ke vikas project lokarpit kiye; lagbhag 125 ekad sinchai ke liye Rs 54.50 lakh ka tubewell aur Rs 16 lakh ki 0.53-km link road ka nirman karya shuru',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/mla-opens-projects-worth-70l-in-tanuli',
    date: '2025-04-22',
    note: 'MLA ne swayam udghatan kiya. MLA ne kaha kisaano ko paani ki suvidha unki prathmikta hai, kyonki kisaano ke samriddh hone par gaon aur pradesh dono aage badhenge.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
];

// REJECT LOG
// R-1. The Tribune — “MLA reviews development works, welfare schemes in Chabbewal” (2026-08-22): sirf nirikshan/daura — MLA ne DC Aashika Jain ke saath baithkar karyon ki samiksha ki aur nirdesh diye; koi lokarpan/shilanyas/swikriti me vyaktigat bhoomika nahi. Entry nahi.
// R-2. The Tribune — “MP Chabbewal lays foundation stone of Rs 1-crore bridge near Panshta village in Phagwara” (2026-10-03): ye pita Dr Raj Kumar Chabbewal (Hoshiarpur MP) ka kaam hai — PITA-JAAL par bete ke khaate me BILKUL NAHI. Entry nahi.
// R-3. satlujbiastimes.com — “Punjab Allocates Rs 35.93 Crore for Road Projects in Chabbewal” (Oct 2025): chhota Punjabi portal, whitelist me nahi (aggregator/chhota-portal shreni). Entry nahi.
// R-4. paigamejagat.com — “Chabbewal MLA Dr. Ishank laid foundation stone of Panchayat Ghar... Nangal Thandal (Rs 10 lakh)”: whitelist me nahi. Entry nahi.
// R-5. 5dariyanews.com — review-meeting story ka duplicate: whitelist me nahi; vaise bhi R-1 jaisa nirikshan content. Entry nahi.
// R-6. starsunfolded.com bio (Raj Kumar Chabbewal): pita par 2022 ke forgery ilzaam (pre-term, Nov 2024+ me koi nyayik vikas nahi) aur bhai Nishant ka 2014 bullying case — parivar ke mamle, MLA khud aaropi nahi. MyNeta halafname me MLA ke 0 criminal cases. Negative entry nahi.
// R-7. Phuglana article ka silai-machine vitran (24 mahilaon ko, NGO training par): daan-shreni/mukhya-atithi samaroh — usi entry ke note me shamil nahi kiya gaya.

// PB4: jai-krishan — 3 entries merged (QA-checked).
// Worker: jai-krishan — Batch 4 (Jalandhar+Hoshiarpur) research worker, 2026-10-18
// Foundation verified: slug jai-krishan, name Jai Krishan, party Aam Aadmi Party (AAP),
// seat Garhshankar, constituencySlug garhshankar, tenure start 2022 end 2027, works [].
// NOTE: Foundation record me post sirf MLA darj hai; Vidhan Sabha Upadhyaksh (Deputy
// Speaker) ka ullekh foundation me nahi hai — task briefing se liya gaya hai, isliye
// pad ke kaam (sadan-sanchalan, karyakram adhyakshata, MLA Hostel jaise Chandigarh ke
// kaam) ko seat ke kaam se alag rakha gaya hai. Sirf Garhshankar seat ke kaam liye gaye.
// Entries: 2 works (The Tribune, post-event reporting), 1 negative (The Tribune).
punjabWorks['jai-krishan'] = [
  {
    title: 'Deputy Speaker Jai Krishan Singh Rouri ne Garhshankar me AMRUT 2 scheme ke tehat Rs 5.65 crore ke water supply project ka pehla charan lokarpit kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/rs-5-65-crore-pipeline-project-inaugurated-in-garhshankar/',
    date: '2025-06-10',
    note: 'The Tribune ki post-event report (published 2025-06-10, event usi din ka bataya gaya hai) ke mutabiq Deputy Speaker Jai Krishan Singh Rouri ne Garhshankar me AMRUT 2 scheme ke tehat Rs 5.65 crore ke water supply project ka pehla charan lokarpit kiya. Ward No. 7 me aayojit launch event me 19-km lambi pipeline network ka anaavaran hua; yah network shahar ke kai wards me hazaaron residents ko saaf aur nirantar peya-jal dega.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Deputy Speaker Jai Krishan Singh Rouri ne Punjab Shiksha Kranti ke tehat Garhshankar ke chaar sarkari schools me Rs 81.36 lakh ke karyon ka lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/jalandhar/works-opened-in-garhshankar-tanda/',
    date: '2025-04-07',
    note: 'The Tribune ki post-event report ke mutabiq Deputy Speaker Jai Krishan Singh Rouri ne Punjab Shiksha Kranti ke tehat Garhshankar ke chaar schools me kul Rs 81.36 lakh ke poore ho chuke karyon ka lokarpan kiya: Government Senior Secondary Smart School Birampur, Government High School Birampur, Government Elementary School Hajipur, aur Government Primary School Rampur Buildon. Inferred date: article ki dateline Hoshiarpur, April 7 hai aur event ko usi din ka bataya gaya hai; page ka publish timestamp 2025-04-08 hai, isliye date 2025-04-07 rakhi gayi hai.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Deputy Speaker Jai Krishan Rouri sahit AAP netaon ke khilaf Oct 2021 ke protest case me CJM ne March 2023 me charges frame kiye',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/punjab/booked-in-2021-over-protest-charges-framed-against-dy-speaker-2-ministers-489272/amp',
    date: '2023-03-19',
    note: 'The Tribune ki report ke mutabiq Chief Judicial Magistrate Dr Aman Inder Singh ne Deputy Speaker Jai Krishan Rouri, Tourism and Cultural Affairs Minister Anmol Gagan Maan, New and Renewable Energy Minister Aman Arora aur paanch anya netaon ke khilaf IPC ke tehat offences ke liye charges frame kiye. Police ne case 6 October 2021 ko ek constable ki complaint par darj kiya tha; aarop tha ki AAP netaon ne Raj Bhavan ki taraf march ke dauraan policemen ko dhakka diya aur ghayal kiya (Uttar Pradesh ke Lakhimpur Kheri ki ghatna ke khilaf protest). Mamla pre-term (Oct 2021) ka hai, lekin charges frame hone ka nyayik vikas March 2023 (Mar 2022 ke baad) ka hai, isliye negative entry banayi gayi. Stage-accurate: sirf charges frame hue hain, conviction nahi hui hai. Article me MLA ka jawab darj nahi hai — anupasthiti disclosed. Inferred date: article ki dateline Chandigarh, March 18 hai; page ka published date 2023-03-19 hai, isliye date 2023-03-19 rakhi gayi hai.',
    period: '2022-2027',
  },
];
// REJECT LOG:
// R-1. ThePrint (PTI feed), 26 Aug 2026: Bist Doab aur Kandi canal systems ke tehat
//       Rs 3.73 crore ke irrigation projects aur Garhshankar STP se Rs 1.61 crore ki
//       treated-water scheme ka lokarpan Water Resources Minister Brinder Kumar Goyal
//       ne kiya; Deputy Speaker Rouri sirf maujood the. Rule: dusre neta ke karyakram
//       me maujoodgi = entry nahi.
// R-2. babushahi.com / yespunjab.com / brightpunjabexpress.com / patialapolitics.com,
//       15 Jan 2026: Shri Khuralgarh Sahib me Minar-e-Begampura se Tap Asthan tak
//       Rs 3.70 crore ke bridge ka shilanyas (Punjab Sarkar dwara nirman). Koi bhi
//       outlet whitelist me nahi; kisi whitelisted outlet me iski coverage nahi mili.
// R-3. yespunjab.com / brightpunjabexpress.com / patialapolitics.com, 6 Jan 2026:
//       Garhshankar ke 28 gaon (Ghagon Rorhanwali, Bhammian, Mehtabpur, Dugri, Garhi
//       Matto, Pahlewal, Birampur, Sadhowal, Sauli, Purkhowal, Rampur Bilron, Salempur,
//       Satnaur, Pakhoval, Padrana, Badesaron, Akalgarh, Golian, Bhajjalan, Lallian,
//       Kalewal, Mohanowal, Rawalpindi, Fatehpur Kala, Denowal Kala, Dogarpur) me
//       newly constructed link roads ka lokarpan. Outlet whitelist me nahi;
//       whitelisted coverage nahi mili.
// R-4. babushahi.com / brightpunjabexpress.com, 11 May 2026: gaon Moranwali me nayi
//       sadak ka lokarpan. Outlet whitelist me nahi; whitelisted coverage nahi mili.
// R-5. satlujbiastimes.com, 16 Apr (~2025): Rs 24.94 lakh ke school works (PM Shri
//       Govt Girls Sr Sec School Mahilpur, Govt Primary Schools Khabra, Lallian,
//       Souli, Govt Elementary School Kot); 25 Apr (~2025): Rs 16.31 lakh ke works
//       (Satnaur, Salempur, Kitna, Moranwali schools). Outlet whitelist me nahi.
// R-6. satlujbiastimes.com, 28 May 2022: Garhshankar-Nangal road aur khasta link
//       sadkon ke liye PWD Minister Harbhajan Singh ETO se MLA ki mulaqat — sirf
//       maang/mulaqat; estimate liya gaya, koi sanction ya lokarpan dastavezi nahi.
// R-7. The Tribune, 20 Sep 2022: Operation Lotus FIR — FIR Deputy Speaker Rouri ki
//       complaint par darj hui thi; wo complainant the, aaropi nahi. Negative nahi.
// R-8. brightpunjabexpress.com, 27 Nov 2025: Speaker, Deputy Speaker aur Cabinet
//       Ministers ne MLA Hostel (Chandigarh) me Gym and Wellness Centre ka lokarpan
//       kiya — pad ka kaam, Garhshankar seat ke bahar; seat ka kaam nahi.
// R-9. brightpunjabexpress.com: board chairpersons felicitation (Jul 2025),
//       Mavan-Dheean Satkar Yojana training camp (Jun 2026), janta darbar grievance
//       meeting (Jun 2026) — samaroh/shubharambh/baithak; koi bhautik sanrachna ya
//       fund-backed kaam nahi; outlet bhi non-whitelisted.
// R-10. casemine.com / indiankanoon.org ke Jai Krishan naam wale cases — alag-alag
//        log (Himachal Pradesh, Bihar ke cases); is MLA se pehchan nahi milti.
// R-11. myneta.info affidavit: 4 criminal cases pending — rule kehta hai halafname
//        ke pending mamle akele negative NAHI; entry me jo case hai wo isliye hai
//        kyunki usme Mar 2023 me charges-frame ka nyayik vikas hua hai.


// ---- Punjab works mining — BATCH 5: SBS Nagar (3 MLA) — 2026-10-18 ----
// Research: per-MLA workers; merge + QA coordinator ne kiya.
punjabWorks['sukhwinder-kumar'] = [
];
// PB5: sukhwinder-kumar — 0 entries merged (QA-checked).
punjabWorks['nachhatar-pal'] = [
];
// PB5: nachhatar-pal — 0 entries merged (QA-checked).
punjabWorks['santosh-kumari-katariaa'] = [];
// PB5: santosh-kumari-katariaa — 0 entries merged (QA-checked).

// ---- Punjab works mining — BATCH 5: Rupnagar (3 MLA) — 2026-10-18 ----
// Research: per-MLA workers; merge + QA coordinator ne kiya.
punjabWorks['harjot-singh-bains'] = [
  { title: 'Harjot Singh Bains ne 2 October 2025 ko Sri Anandpur Sahib seat ke Bhallari gaon ke paas Swan nadi par Rs 35.48 crore ke 511-meter high-level pul ka shilanyas kiya', category: 'Sadak', badge: 'news', sourceLabel: 'The Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/chandigarh/major-infra-projects-boost-connectivity-and-development-in-sri-anandpur-sahib-constituency/articleshow/124311703.cms', date: '2025-10-02', note: 'TOI ke anusaar Bains ne 2 October ko Swan nadi par Bhallari gaon ke paas 511-meter high-level pul ka shilanyas kiya; lagat Rs 35.48 crore; pul Bhallari ko Mahindpur-Khera Kalmot se jodega aur Khera Kalmot, Bhangla, Majari jaise seemavarti ilakon ki connectivity badhayega; karyakram me sthaniya nivasi, community leaders aur adhikari maujood thay; Bains ne kaha Punjab sarkar ki top priority quality infrastructure dena hai. Note: article me yojana ka vishesh naam nahi diya gaya — fund source sirf Punjab sarkar ki pariyojana ke roop me varnit hai. Pehchan: article Bains ko Punjab ke school education aur I&PR mantri Harjot Singh Bains ke roop me pehchanta hai (Anandpur Sahib seat, AAP).', period: '2022-2027', stage: 'shilanyas' },
  { title: 'Harjot Singh Bains ne 4 October 2025 ko Sri Anandpur Sahib seat ke Kalitran me Sutlej nadi par Rs 20.77 crore ke 333-meter pul ka shilanyas kiya', category: 'Sadak', badge: 'news', sourceLabel: 'The Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/chandigarh/major-infra-projects-boost-connectivity-and-development-in-sri-anandpur-sahib-constituency/articleshow/124311703.cms', date: '2025-10-04', note: 'TOI ke anusaar Bains ne (article me "Saturday" likha hai; 2 October aur 7 October (Valmiki Jayanti) ke sandarbhon se tareekh 4 October 2025 nikali gayi) Kalitran me Sutlej nadi par 333-meter pul ka shilanyas kiya; lagat Rs 20.77 crore; isey Sri Anandpur Sahib ko model constituency banane ke vision ka hissa bataya. Isi karyakram me unhone pulon ko jodne wali 11-km 18-foot-wide sadkon (Rs 13 crore) ki ghoshna ki aur kaha 7 October ko Plassi me Rs 11.23 crore ke pul ka udghatan hoga — ye dono article ke samay hone wali ghoshnayen thi, isliye unki alag entry nahi banayi. Note: article me yojana ka vishesh naam nahi diya gaya — fund source sirf Punjab sarkar ki pariyojana ke roop me varnit hai.', period: '2022-2027', stage: 'shilanyas' },
];
// PB5: harjot-singh-bains — 2 entries merged (QA-checked).
punjabWorks['dinesh-kumar-chadha'] = [
  { title: 'Ropar MLA Dinesh Chadha ke nirdesh par PPCB ne plastic waste recycle na karne wali branded companies ko notice jari kiya', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/notice-to-firms-for-not-recycling-plastic-waste-468706', date: '2023-01-08', note: 'Report ke mutabiq PPCB ne branded companies ko waste plastic envelopes recycle na karne par notice diya; yeh karravai MLA ke nirdesh par hui. Chadha ne kaha ki companies paryavaran suraksha ke niyamon ka ullanghan kar rahi thin aur 2022-23 ke nirdeshon ke tahat 70 percent plastic recycle karna anivarya tha. PPCB ke XEN Vijay Kumar aur Punjab Infrastructure Development Board ke Dr Naresh Bharadwaj ne Ropar garbage dump ka daura kiya, jahan in companies se juda waste mila. Date report ki dateline (Ropar, January 8) ke aadhaar par li gayi hai; page Jan 9, 2023 ko updated hua tha.', period: '2022-2027' },
  { title: 'Anandpur Sahib court ne July 2020 ke COVID-lockdown virodh-pradarshan case me Ropar MLA Dinesh Chadha ko proclamation ke zariye summon karne ka aadesh diya', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/court-summons-ropar-legislator-477926/', date: '2023-02-08', note: 'Yeh case halafname me ghoshit 2 aapradhik mamalon me se ek se mel khata hai (IPC 188, 283, 269, 270 — COVID-lockdown ke dauran virodh-pradarshan). Case July 6, 2020 ka hai jab Chadha ne Nikkuwal gaon ke paas Ropar-Nangal road par virodh-pradarshan ka netritva kiya tha; aaropiyon me Master Hardial Singh, Harminder Singh aur 50-60 agyat log bhi hain. Nyayik vikas Feb 2023 ka hai (karyakaal ke dauran). Article me MLA ka koi jawab ya paksh darj nahi hai.', period: '2022-2027' },
  { title: 'Ropar Headworks par industrial waste jama hone par MLA Dinesh Chadha ki karravai ke baad Baddi-Nalagarh factory malikon par FIR darj hui aur PPCB ne CPCB ke saath joint probe mangi', category: 'Paani', badge: 'news', sourceLabel: 'The Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/chandigarh/ppcb-seeks-joint-probe-into-industrial-waste-choking-ropar-headworks/articleshow/133477013.cms', date: '2026-08-24', note: 'Report ke mutabiq Chadha ne police aur municipal officials ke saath Ropar Headworks ka daura kiya, jahan industrial waste, plastic aur thermocol jama tha; uske baad Baddi-Nalagarh ki factory ke malikon par BNS ki dharaon 270, 271, 279, 280, Water Act ki dharaon 24 aur 43 aur Environment Protection Act ki dhara 7 ke tahat FIR darj hui. Agle din PPCB ne CPCB ke saath joint inspection mangi taaki Sirsa-Swan-Satluj drainage system me pollution ka srot trace ho sake; PPCB ke SDOs Aditya Sharma, Harsimran Singh Sodhi aur JE Balpreet Singh ne site ka nirikshan kiya. Report me ghatna ke agle din (Monday) ka zikr hai, isliye date 2026-08-24 li gayi hai.', period: '2022-2027' },
];
// PB5: dinesh-kumar-chadha — 3 entries merged (QA-checked).
punjabWorks['charanjit-singh'] = [
  { title: 'Punjab Vidhan Sabha ne 9 March 2023 ko Dr Charanjit Singh dwara pesh kiya gaya non-official resolution sarvasammati se pass kiya — exorbitant medicine prices par Centre ko price-regulation policy ki sifarish', category: 'Any', badge: 'news', sourceLabel: 'The Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/resolution-passed-issue-expensive-medicines-centre-8488279/lite/', date: '2023-03-09', note: 'The Indian Express (published 10 Mar 2023) ke anusaar resolution Thursday, 9 March 2023 ko pass hua; ise AAP MLA Dr Charanjit Singh (Chamkaur Sahib) ne move kiya. Singh ne House me kaha dawaiyan beinteha unche daamon par bechi ja rahi hain — Rs 10 ki dawa Rs 100 me bechkar 15 percent discount diya jata hai; unhone Centre se drug-price regulation policy banane ki maang ki aur generic (salt-only) prescription anivarya karne ka sujhav diya. Health Minister Dr Balbir Singh ne jawab me resolution ki sarahna ki; kaha cancer drugs pehle se regulated hain, non-scheduled drugs aur e-pharmacy abhi regulated nahi, rajya me 25 Jan Aushadhi Kendras hain aur 16 aur approved hain. Credit capped: ye Vidhan Sabha ki Centre ko sifarish hai, MLA ke fund se bana koi bhautik kaam nahi. Pehchan note: article me AAP legislator Dr Charanjit Singh (Chamkaur Sahib) — purva CM Charanjit Singh Channi nahi.', period: '2022-2027' },
];
// PB5: charanjit-singh — 1 entries merged (QA-checked).

// ---- Punjab works mining — BATCH 5: SAS Nagar (3 MLA) — 2026-10-18 ----
// Research: per-MLA workers; merge + QA coordinator ne kiya.
punjabWorks['anmol-gagan-maan'] = [
  { title: 'Kharar MLA Anmol Gagan Maan ne Kharar me Kajauli surface water supply project ki pehli phase (Rs 22.15 crore) ka nirmaan-karya shuru karaya', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/mla-anmol-gagan-mann-kick-starts-22-crore-surface-water-supply-project-for-kharar-residents/', date: '2025-08-06', note: 'Phase 1 ka nirmaan New Sunny Enclave, Jandpur road, Kharar me shuru hua; poori Kajauli water project Rs 150 crore, is phase ka kharch Rs 22.15 crore; September 2026 tak poorn hone ka lakshya; Jhungian, Mandair Nagar, Harlalpur, Jandpur aur Chandigarh road ilakon ko labh; GMADA clear water pipeline (Sihnpur) se pani aayega, 54 lakh litre ka underground service reservoir (UGSR) Jandpur me, 18 aur 9 lakh litre ke do overhead tanks, aur 8.1 km ductile iron (DI) pipeline bichhegi; Water Supply and Sewerage ke SE/SDO maujood the.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'Kharar MLA Anmol Gagan Maan ne Kharar ke aath wards me Rs 3 crore ke aath tubewell projects ki aadhaarshila rakhi', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/kharar-mla-lays-stones-for-8-tubewells-worth-rs-3-cr/', date: '2024-10-04', note: 'Kharar ke aath wards me aath tubewell projects (kul Rs 3 crore) ki installation ka udghatan aur aadhaarshila Ward 12 me ek public gathering me rakhi gayi; ek park ki bhi aadhaarshila rakhi. (Article me unke daave ke anusaar pehle Rs 4.25 crore ke 12 tubewells lag chuke hain — ye unka dawa hai, is entry ka aadhaar nahi.)', period: '2022-2027', stage: 'shilanyas' },
  { title: 'Cabinet mantri ke roop me Anmol Gagan Maan ne Kharar seat ke Nayagaon me Rs 58.10 crore ki 18.5 MLD sewage treatment plant aur 4.2 km sewer lines ke nirmaan ka kaam shuru karaya', category: 'Any', badge: 'news', sourceLabel: 'Hindustan Times', sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/punjab-minister-alleges-fraudulent-bribe-solicitation-in-her-name-101725652934074.html', date: '2024-09-06', note: 'Event ke samay ve Punjab cabinet me mantri thin (tourism and cultural affairs, labour, investment promotion, hospitality portfolios) — minister-framing wali seat-entry, fund disclosed; Nayagaon (Kharar subdivision, SAS Nagar) me 18.5 MLD STP aur 4.2 km sewer lines, kul Rs 58.10 crore; February 2026 tak poorn hone ka lakshya; Mohali DC Aashika Jain maujood thin; article ke anusaar project CM se pehle hi approve tha lekin STP ki jagah ki pehchan me deri thi. Date inference: article Sep 7, 2024 ko update hua aur event ko Friday bataya, isliye date 2024-09-06 maani gayi.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'Chandigarh ki CJM court ne 2021 ke virodh-pradarshan mamle me AAP MLA Anmol Gagan Maan sahit chaaron aaropiyon ko bari kar diya', category: 'Any', badge: 'news', sourceLabel: 'The Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/aap-mla-anmol-gagan-mann-three-others-acquitted-in-case-of-assaulting-public-servants-10346224/', date: '2025-11-04', note: 'August 2021 me Chandigarh ke BJP office (Sector 37) ke bahar AAP ke virodh-pradarshan ke dauraan police se jhadap par Sector 39 police station me FIR darj hui thi (IPC Sections 188, 323, 332, 353); chaar aaropi the: Maan, Sunny Ahluwalia, Rajwinder Gill aur Arshdeep Singh; defence ka kehna tha ki unhe FIR me jhoothe phaansaya gaya; CJM Sachin Yadav ne prosecution ke aarop beyond reasonable doubt saabit na kar pane par sabhi aaropiyon ko acquit kiya. Antim sthiti: BARI (acquitted). Halafname me koi case declared nahi tha.', period: '2022-2027' },
];
// PB5: anmol-gagan-maan — 4 entries merged (QA-checked).
punjabWorks['kulwant-singh-sas-nagar'] = [
  { title: 'MLA ne Balongi me Rs 30 lakh ki lagat se drinking-water tubewell ki installation kaam ka shilanyas kiya.', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/tubewell-work-launched-383378/', date: '2022-04-03', note: 'Tribune report published 2022-04-04 says the event was held on April 3 in Mohali; the MLA said the tubewell work would solve Balongi residents drinking water problem. Fund source not specified in the report.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA ne Phase 8B me Rs 2.3 crore ka 5.4 lakh gallon capacity wala underground water reservoir inaugurate kiya, jisse Phase 8A aur 8B ke industrial areas ko Sinhpur treatment plant se canal water milega.', category: 'Paani', badge: 'news', sourceLabel: 'Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/chandigarh/new-2-3-crore-water-reservoir-to-feed-mohalis-phase-8a-8b/articleshow/134343275.cms', date: '2026-09-19', note: 'Date is the TOI article publication date (Sep 19, 2026); the report states the MLA inaugurated the completed reservoir in 2024 but gives no exact date. Facility replaces tubewell reliance for Phase 8A and 8B industrial belts.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'MLA ne Bathlana se Gudana tak 2.5 km link road ko 10 feet se 18 feet chauda karne ke kaam ka shilanyas kiya.', category: 'Sadak', badge: 'news', sourceLabel: 'Hindustan Times', sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/mohali-mla-lays-foundation-stone-of-road-widening-project-from-bathlana-to-gudana-101735846848801.html', date: '2025-01-02', note: 'HT report updated Jan 3, 2025 says the event was on Thursday (Jan 2, 2025). The Rs 60 lakh project is funded by the Punjab Marketing Board and executed by the public works department.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA ne Sohana me Municipal Corporation dwara Rs 1.68 crore ki lagat se renovated 2.25-acre pond ka inauguration kiya.', category: 'Any', badge: 'news', sourceLabel: 'Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/mohali-mla-inaugurates-rs-1-68-crore-redeveloped-pond-at-sohana-10244485/', date: '2025-09-11', note: 'IE report Sep 11, 2025 says the pond was redeveloped by the Municipal Corporation and Municipal Commissioner Parminder Pal Singh was present. Desilting, stone-lined embankments, benches and plantation were done; fountain and fish stocking to follow.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'MLA ne Sohana ke Maingiana Patti me Rs 40 lakh ki lagat se banne wale dharamshala ka shilanyas kiya, jisme 2,000 sq ft hall ke saath 2 kanal par naya structure banega.', category: 'Any', badge: 'news', sourceLabel: 'Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/mohali-mla-inaugurates-rs-1-68-crore-redeveloped-pond-at-sohana-10244485/', date: '2025-09-11', note: 'Same IE report; the new dharamshala replaces the old dilapidated structure and will offer affordable function space to families.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA ne Mohali constituency me teen road projects (Chachumajra-Bakarpur-Jhungian Rs 39 lakh, Jagatpura-Kandala-Nandiali-Safipur-Bakarpur Rs 95 lakh, Jheurheri-Alipur Rs 45 lakh) ke construction kaam ka shilanyas kiya.', category: 'Sadak', badge: 'news', sourceLabel: 'Hindustan Times', sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/mla-kulwant-singh-launches-new-road-projects-reviews-key-infra-works-in-mohali-101760387006860.html', date: '2025-10-13', note: 'HT report published Oct 14, 2025 says the inauguration was on Monday (Oct 13, 2025). Each road includes five-year maintenance allocation and completion was targeted within six months.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA ne Mohali me Rs 17.71 crore ke project ka inauguration kiya, jisme Gurdwara Singh Shaheedan Sohana, Sector 78-79 junction aur CP-67 Mall ke paas naye chowk banenge aur kai junctions upgrade honge.', category: 'Sadak', badge: 'news', sourceLabel: 'Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/rs-17-71-crore-project-launched-develop-major-chowks-t-junctions-in-mohali-10424387/', date: '2025-12-16', note: 'IE report published Dec 17, 2025 says the project was launched on Tuesday (Dec 16, 2025). Work entrusted to M/s Griftcon Infrastructure Company by GMADA, scheduled for completion by October 2026. The MLA formally inaugurated the work near Gurdwara Singh Shaheedan after an ardas.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA ne Sectors 77, 78, 79 aur 80 me Rs 1.49 crore ki lagat se banne wali chaar libraries ka shilanyas kiya.', category: 'School', badge: 'news', sourceLabel: 'Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/mohali-mla-kulwant-singh-libraries-10452776/lite/', date: '2026-01-02', note: 'IE report published Jan 3, 2026 says foundation stones were laid on Friday (Jan 2, 2026). The libraries are being built under the Punjab government Municipal Development Fund, about Rs 35 lakh each, with completion expected in three to four months.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA ne constituency ke kai gaon me kul 11.38 km link roads aur footpaths ke Rs 246.88 lakh ke development kaam ka shilanyas kiya.', category: 'Sadak', badge: 'news', sourceLabel: 'Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/chandigarh/mla-sets-ball-rolling-for-11-3km-road-network/articleshow/126854285.cms', date: '2026-01-20', note: 'Date is inferred: the report says the MLA laid the foundation on a Tuesday, and search metadata shows the TOI listing updated about 270 days before Oct 18, 2026, i.e. Jan 21, 2026; the nearest Tuesday is Jan 20, 2026. Projects include Nanumajra-Sambhalki-Sukhgarh-Sneta, Sambhalki phirni, Kharar-Banur to Raipur Kalan, Saidpur-Chuharmajra, Gobindgarh-Dhelpur, Dhelpur-Gadana, Giga Majra and Manauli-Siau roads, with five-year maintenance and six-month completion target.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA ne Phase 10 ke LIG aur MIG areas me contaminated pipelines ko replace karke 4-inch ductile iron pipes lagane ke Rs 57 lakh ke drinking water pipeline project ka shilanyas kiya.', category: 'Paani', badge: 'news', sourceLabel: 'Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/mohali-mla-kulwant-singh-phase-10-drinking-water-pipeline-project-10591508/', date: '2026-03-19', note: 'IE report published Mar 20, 2026 says the inauguration was on Thursday (Mar 19, 2026). Completion was expected in about two and a half months; the MLA said Phase 10 residents have started receiving canal water.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA ne Franco Hotel se D Plast Chowk ke beech damaged sewer line ko replace karne ke Rs 60.93 lakh ke project ka shilanyas kiya.', category: 'Any', badge: 'news', sourceLabel: 'Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/mohali-mla-launches-rs-60-93-lakh-sewer-line-project-10603039/', date: '2026-03-24', note: 'IE report published Mar 26, 2026 says the inauguration was on Tuesday (Mar 24, 2026). The Public Health Department is executing the work: a 540-metre 450 mm RCC pipeline with HDPE lining for sewerage and a 150-metre 400 mm RCC stormwater line, with completion expected in two months.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA ne Sohana Canal Water Rising Project (Rs 48.5 lakh) ke kaam ka shilanyas kiya, jisse gaon ko GMADA canal water supply scheme se rozana 1.3 million litre extra drinking water milega.', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/rs-48-5l-plan-to-supply-canal-water-to-sohana-underway-mohali-mla/', date: '2026-06-27', note: 'Tribune report published Jun 28, 2026 says work commenced on Saturday (Jun 27, 2026). The Department of Water Supply and Sanitation, Punjab commenced the rising main pipeline; two new underground storage reservoirs are also planned, combined cost about Rs 98 lakh.', period: '2022-2027', stage: 'shilanyas' },
];
// PB5: kulwant-singh-sas-nagar — 12 entries merged (QA-checked).
punjabWorks['kuljit-singh-randhawa'] = [
  {
    title: 'Dera Bassi ke kai sarkari schoolon me Rs 1.26 crore ke infrastructure karyon ka MLA Kuljit Singh Randhawa ne lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/school-projects-worth-3-81-cr-inaugurated/',
    date: '2025-04-09',
    note: 'Cited page ke anusar: Mohali jile me kul Rs 3.81 crore ke school infrastructure karyon ka udghatan hua, jisme Dera Bassi me Rs 1.26 crore, Kharar me Rs 54 lakh aur Mohali me Rs 21.80 lakh ke kaam shamil the; ye Punjab sarkar ke statewide programme (12,000 sarkari school, kul Rs 2,000 crore) ka hissa hai. Event date inferred: page 10 Apr 2025 (07:26 AM IST) ko update hua aur event "Wednesday" ko hua — Wednesday 9 Apr 2025 thi.',
    period: '2022-2027',
    stage: 'lokarpan'
  },
  {
    title: 'MLA ka dawa — Zirakpur kshetra me saat naye nal-kupon ke kaam ka shilanyas, prati nal-kup Rs 44.53 lakh sarkari kharch ka dawa',
    category: 'Paani',
    badge: 'dawa',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/dera-bassi-mla-zirakpur-mc-chief-claim-credit-for-tubewell-works-600639/amp',
    date: '2024-03-14',
    note: 'Cited page ke anusar: MLA ne ek site par shilanyas-pattar ka anavaran kiya jisme CM Bhagwant Singh Mann aur MLA Randhawa ke naam the; saat nal-kup Peer Muchalla, Pine Home Dhakoli, Sunny Enclave, Green Enclave aur Dasmesh Enclave (Lohgarh) me lagne the, aur MLA ke mutabiq prati nal-kup Rs 44.53 lakh rajya sarkar kharch kar rahi thi. Shrey VIVADIT hai: isi page par Zirakpur MC president Udaivir Singh ne dawa kiya ki ward councillors ne pichhli baithakon me nal-kupon ke prastav pass kiye the, lagat lagbhag Rs 40 lakh prati nal-kup thi, aur saare nal-kup nagar parishad lagwa rahi thi. Event date dateline (March 14) se inferred; page 15 Mar 2024 ko publish hua.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'Dera Bassi me shahari patwari ke daftar par MLA ke achanak chhape ke baad daftar seal hua, patwari ko show-cause notice mila aur vistrit janch ke aadesh hue',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/punjab/chandigarh-mla-raided-derabassi-patwari-was-found-missing-four-private-workers-and-rs-5100-were-recovered-24044963.html?utm_source=article_detail&utm_medium=CRE&utm_campaign=latestnews_CRE',
    date: '2025-09-12',
    note: 'Cited page ke anusar: MLA Kuljit Randhawa ne shahari patwari Amandeep ke daftar (Chopra Towers basement, highway) par chhapa mara; 4 private staff aur lagbhag Rs 5,100 cash baramad hua, patwari daftar me anupasthit mile. Tehsildar Sumit Dhillon ne poora daftar seal kar diya aur patwari ko private staff va baramad nagdi par show-cause notice jari kiya; vistrit janch ke aadesh hue. Janch ka parinam is page par report nahi hua; FIR darj hone ka ullekh nahi hai.',
    period: '2022-2027'
  },
];
// PB5: kuljit-singh-randhawa — 3 entries merged (QA-checked).

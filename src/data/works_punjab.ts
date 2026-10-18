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

// ---- Punjab works mining — BATCH 6: Fatehgarh Sahib (3 MLA) + Ludhiana (14 MLA) — 2026-10-18 ----
// Research: per-MLA workers; merge + QA coordinator ne kiya (stage enum normalize, titles Hinglish-rewrite, Manuke Sikhya-Kranti DROP).
// Punjab works mining — BATCH 6 consolidated fragment (Fatehgarh Sahib + Ludhiana, 17 MLA) — 2026-10-18
// Coordinator QA applied: stages normalized to enum (lokarpan/shilanyas/swikriti/poora/pahal),
// English titles rewritten to Roman Hinglish, Manuke Sikhya-Kranti entry dropped (seat attribution not documented).

// ---- PB6: Fatehgarh Sahib (3 MLA) ----
punjabWorks['rupinder-singh'] = [
  { title: 'Rupinder Singh Happy ne Bassi Pathana ke Riya gaon me Rs 18 lakh ki lagat se bane sports stadium ka lokarpan kiya', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/bassi-pathana-mla-rupinder-singh-inaugurates-sports-stadium-492423/amp', date: '2023-03-29', note: 'Tribune report ke mutabiq stadium Rs 18 lakh ki lagat se bana aur Bassi Pathana MLA ne khud uska lokarpan kiya; report me fund ka sarkari srot alag se disclosed nahi hai.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Rupinder Singh Happy ne Bhagatpura gaon me playground ke nirmaan karya ka shilanyas kiya aur Rs 5 lakh ka cheque saunpa', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/village-gets-rs-5l-for-playground-509871/amp', date: '2023-05-20', note: 'Tribune ke mutabiq MLA ne gaon me playground banane ke liye Rs 5 lakh ka cheque diya aur nirmaan karya ka shubharambh kiya; paisa sarkari grant se.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'Rupinder Singh Happy ne Chandiala gaon panchayat ko playground banane ke liye Rs 5 lakh ka cheque saunpa', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/village-gets-rs-5-lakh-for-playground-532502/amp', date: '2023-08-05', note: 'Tribune ke mutabiq cheque panchayat ko diya gaya; isi karyakram me MLA ne gaon ke solid waste management plant ka shilanyas bhi kiya.', period: '2022-2027', stage: 'swikriti' },
  { title: 'Rupinder Singh Happy ne Chandiala gaon me solid waste management plant ka shilanyas kiya', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/village-gets-rs-5-lakh-for-playground-532502/amp', date: '2023-08-05', note: 'Tribune report ke mutabiq MLA ne plant ka foundation stone rakha; project ki lagat report me disclosed nahi hai.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'Rupinder Singh Happy ne Punjab Sikhya Kranti ke tahat Dhanaula aur Maneli ke sarkari schools me Rs 12 lakh se bane boundary walls aur sports track ka lokarpan kiya', category: 'School', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/45l-projects-inaugurated-in-fatehgarh-sahib-govt-schools/', date: '2025-04-08', note: 'Tribune ke mutabiq Government Elementary Smart School Dhanaula aur Government Senior Secondary Smart School Maneli me Rs 12 lakh ke kaam poore hue; ye Punjab Sikhya Kranti sarkari abhiyan ke tahat bane aur MLA ne unka lokarpan kiya.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Rupinder Singh Happy ne Punjab Sikhya Kranti ke tahat Bassi Pathana ke sarkari schools me Rs 18 lakh ki vikas pariyojnaon ka lokarpan kiya', category: 'School', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/fategarh-sahib-schools-get-projects-worth-1-19-crore', date: '2025-04-18', note: 'Tribune ke mutabiq Fatehgarh Sahib jile me Punjab Sikhya Kranti ke tahat kul Rs 1.19 crore ke school projects me se Bassi Pathana me Rs 18 lakh ke kaam hue jinka lokarpan MLA ne kiya; ye sarkari abhiyan ke tahat hue kaam hain.', period: '2022-2027', stage: 'lokarpan' },
];
// PB6: rupinder-singh — 6 entries merged (QA-checked).
punjabWorks['lakhbir-singh-rai'] = [
  { title: 'MLA Lakhbir Singh Rai ne Civil Hospital Fatehgarh Sahib ki nayi OPD building ka lokarpan kiya', category: 'Aspataal', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/fatehgarh-sahib-mla-opens-new-opd-building-at-civil-hospital-390470/', date: '2022-04-29', note: 'Building Child and Mother Care Specialty Hospital se judi hai; article me nirman lagat nahi di gayi. MLA ne CM Bhagwant Mann se jile ki mukhya pariyojnaon par charcha ka dawa kiya. Pehchan ‘Fatehgarh Sahib MLA’ se pakki. Date: article published 2022-04-30, dateline ‘April 29’ se event date.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'MLA Lakhbir Singh Rai ne Channo gaon me kai vikas karyon ki neenv rakhi', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/fatehgarh-sahib-villages-to-get-town-like-facilities-says-mla-490495/', date: '2023-03-22', note: 'Karyon me interlocking tiles, sheds, school me farsh, do park aur bathroom shamil; lagat article me nahi di gayi. Date: dateline ‘March 22’ se event date (article wp-date 2023-03-23 GMT).', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA Lakhbir Singh Rai ne Madhopur se Fatehgarh Sahib tak 18-feet chaudi nayi sadak janta ko samarpit ki', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/mla-inaugurates-new-road-to-fatehgarh-sahib-516985/', date: '2023-06-13', note: 'Sadak Saddo Majra hote hue Gurdwara Fatehgarh Sahib tak jaati hai. CM Bhagwant Mann ne iski ghoshna ki thi aur PWD ne nirman kiya; MLA ne lokarpan kiya. Lagat article me nahi di gayi. Date: article updated 2023-06-14, dateline ‘June 13’ se event date.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'MLA Lakhbir Singh Rai ne Fatehgarh Sahib ke naye Tehsil Complex aur SDM karyalay ka lokarpan kiya', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/fatehgarh-mla-inaugurates-tehsil-complex-598104/', date: '2024-03-06', note: 'Shilanyas tatkalin CM Charanjit Singh Channi ne 28 Oct 2021 ko rakha tha (MLA ke karyakal se pehle); nirman par Rs 4.84 crore kharch hue jabki Rs 5.5 crore aawantit the. MLA ne udghatan kiya. Date: article published 2024-03-07, dateline ‘March 6’ se event date.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'MLA Lakhbir Singh Rai ne Sirhind shahar me Rs 6 crore ke drainage system ki neenv rakhi', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/fatehgarh-mla-lays-stones-for-rs-6-crore-works-601326', date: '2024-03-16', note: 'MLA ne kaha purana drainage system se badboo aur sadkon ko nuksan hota tha; naya system is samasya ka samadhan karega. Date: article updated 2024-03-17, dateline ‘March 16’ se event date.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA Lakhbir Singh Rai ne Behlolpur gaon me Rs 5 crore ke 66 KV grid ki neenv rakhi', category: 'Bijli', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/fatehgarh-mla-lays-stones-for-rs-6-crore-works-601326', date: '2024-03-16', note: 'MLA ka dawa: kaam 4.5 mahine me poora hoga aur ye grid Chorwala aur Sarai Banjara grid par bhar ghataega. Date: article updated 2024-03-17, dateline ‘March 16’ se event date.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA Lakhbir Singh Rai ne Tarkhan Majra gaon me Rs 20 lakh lagat se sewer line bichhane ka kaam shuru karwaya', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/rise-above-petty-politics-mla-calls-upon-sarpanches/', date: '2025-02-21', note: 'MLA ne kaam shuru hone ka udghatan kiya; lagat Rs 20 lakh. Date inferred: article updated 2025-02-22 07:07 IST me ‘today’ likha hai, isliye event 2025-02-21.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'MLA Lakhbir Singh Rai ne Sirhind City me Rs 98.42 lakh ke sewerage project ki neenv rakhi', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/mla-launches-rs-98l-sewerage-project/', date: '2025-03-28', note: 'Date inferred: article published 2025-03-29 me ‘on Friday’ likha hai; Friday = 2025-03-28 (weekday verify kiya). Isi karyakram me street lights ke liye Rs 1 crore aawantan, mahilaon ke liye shauchalay aur constituency vikas ke liye Rs 5 crore swikriti ki ghoshnaein bhi hui — ye keval ghoshnaein hain, alag entry nahi.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA Lakhbir Singh Rai ne apne nirvachan kshetra ke chaar sarkari schoolon me lagbhag Rs 33 lakh ke vikas karyon ka lokarpan kiya', category: 'School', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/45l-projects-inaugurated-in-fatehgarh-sahib-govt-schools/', date: '2025-04-07', note: 'Punjab Sikhya Kranti abhiyan ke tahat poore jile me Rs 45 lakh ke kaam hue; Fatehgarh Sahib ka hissa lagbhag Rs 33 lakh (Bassi Pathana MLA ke Rs 12 lakh wale kaam seat-bahar hain, exclude). Date inferred: article updated 2025-04-08 05:14 IST me ‘today’ likha hai, isliye event 2025-04-07.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'MLA Lakhbir Singh Rai ne Punjab Sikhya Kranti ke tahat Fatehgarh Sahib ke schoolon me Rs 18 lakh ki pariyojnaon ka lokarpan kiya', category: 'School', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/school-projects-worth-rs-1-19-crore-launched/amp', date: '2025-04-25', note: 'Jile bhar me Rs 1.19 crore ki pariyojnaon ka lokarpan teeno MLAon ne kiya; cited amp page ke mutabik Fatehgarh Sahib ka hissa Rs 18 lakh. SAVDHAN: isi khabar ke non-amp version me teenon hisson ke aankde ulte hue hain (Fatehgarh Sahib 33L, Amloh 68L, Bassi Pathana 18L), isliye hissa-rashi poori tarah pusht nahi. Date: published 2025-04-25T03:50.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'MLA Lakhbir Singh Rai ne Mullepur gaon me Rs 1.56 crore ki bhoomigat nahar pipeline pariyojna ki neenv rakhi', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/work-begins-for-1-56-cr-canal-pipeline-project/', date: '2026-05-02', note: 'Sichai ke liye nahar ka pani pahunchane wali pipeline; Mullepur MLA ka mool gaon hai. Date inferred: article updated 2026-05-03 me ‘on Saturday’ likha hai; Saturday = 2026-05-02 (weekday verify kiya). Mohammadi Pur me Rs 1.3 crore ki do atirikt pipeline ki ghoshna bhi hui — keval ghoshna, alag entry nahi.', period: '2022-2027', stage: 'shilanyas' },
];
// PB6: lakhbir-singh-rai — 11 entries merged (QA-checked; entry 10 me hissa-rashi conflict note me disclosed).
punjabWorks['gurinder-singh'] = [
  { title: 'MLA Gurinder Singh Garry Birring ne Government Smart Senior Secondary School, Amloh me STEM technology lab ka lokarpan kiya', category: 'School', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/technology-lab-inaugurated-at-school-in-amloh-509387/amp', date: '2023-05-20', note: 'The Tribune ki report ke mutabik MLA ne Government Smart Senior Secondary School, Amloh me science, technology, engineering aur mathematics (STEM) training ke liye state-of-the-art technology lab ka lokarpan kiya. Page par Published timestamp 2023-05-20 hai; dateline May 19 hai. Fund source ya cost article me disclosed nahi.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Punjab Sikhya Kranti ke tahat Amloh ke sarkari schoolon me Rs 33 lakh ke infrastructure works ka MLA ne lokarpan kiya', category: 'School', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/school-projects-worth-rs-1-19-crore-launched/amp', date: '2025-04-25', note: 'The Tribune ki 25 Apr 2025 ki report ke mutabik Punjab Sikhya Kranti initiative ke tahat Fatehgarh Sahib jile ke teen halqon ke schoolon me Rs 1.19 crore ke projects ka lokarpan hua — jisme Amloh halqe ka hissa Rs 33 lakh tha, jise MLA Gurinder Singh Garry Birring ne launch kiya. Projects me boundary wall, furniture aur basic academic infrastructure shamil hai.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'MLA Gurinder Singh Garry Birring ne Amloh ke Uchi Roorkee gaon ke school me nayi bani diwaar ka lokarpan kiya', category: 'School', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/bku-activists-heckle-amloh-mla/', date: '2025-04-17', note: 'The Tribune ki report ke mutabik MLA Sikhya Kranti programme ke tahat Uchi Roorkee gaon (Amloh) ke school me newly constructed wall ka lokarpan karne aaye the. Article me Updated At Apr 18, 2025 aur visit “on Thursday” likha hai — isliye date Apr 17, 2025 inferred hai. Event ke dauraan BKU (Sidhupur) karyakartaon ne farmer-protest par virodh jataya; MLA par koi aarop nahi.', period: '2022-2027', stage: 'lokarpan' },
];
// PB6: gurinder-singh — 3 entries merged (QA-checked).

// ---- PB6: Ludhiana (14 MLA) ----
punjabWorks['tarunpreet-singh-sond'] = [
  { title: 'Grameen Vikas mantri ke roop me Tarunpreet Singh Sond ne Khanna ke paanch gaon me Rs 1.56 crore ki vikas pariyojnaon ka lokarpan kiya', category: 'Any', badge: 'news', sourceLabel: 'Hindustan Times', sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-minister-inaugurates-1-5-crore-projects-in-five-villages-101759089996210.html', date: '2025-09-28', note: 'Projects: Goh me panchayat bhawan (Rs 40 lakh), Korhi me sewerage aur street work (Rs 7 lakh), Ikolahi me library (Rs 35.85 lakh), Panjrukha me panchayat bhawan (Rs 40 lakh), Beeja me drains/sewerage (Rs 20 lakh) plus library (Rs 14 lakh). Fund disclosure: report me koi funding scheme ka naam nahi hai, isliye MLA-fund claim nahi kiya gaya; framing disclosed — Sond ne inka lokarpan Rural Development and Panchayats cabinet minister ke roop me kiya, apne vyaktigat MLA fund se nahi. Usi karyakram me ghoshit modern playgrounds keval ghoshna thi, isliye is entry se bahar hain. Date: report me inauguration ‘on Sunday’ bataya gaya; publication Sep 29, 2025 aur corroborating post-event report Sep 28, 2025 kehti hai — Sep 28, 2025 Sunday tha.', period: '2022-2027', stage: 'poora' },
];
// PB6: tarunpreet-singh-sond — 1 entry merged (QA-checked; mantri-framing + fund undisclosed disclosed).
punjabWorks['jagtar-singh'] = [
];
// PB6: jagtar-singh — 0 entries merged (QA-checked; honestly empty).
punjabWorks['hardeep-singh-mundian'] = [
  { title: 'Mantri Hardeep Singh Mundian ne Punjab Sikhya Kranti ke tahat Sahnewal halke ke chhah sarkari primary schoolon me Rs 57.63 lakh ki buniyadi-dhancha pariyojnaon ka lokarpan kiya', category: 'School', badge: 'news', sourceLabel: 'Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/ludhiana/6-more-schools-in-sahnewal-constituency-get-rs-58l-for-infra-devpt/articleshowprint/121239927.cms', date: '2025-05-17', note: 'TOI ke mutabik Mundian ne Mangarh, Katani Kalan, Barwala, Bhaini Sahib, Raian aur Katani Khurd ke sarkari primary schoolon me projects dedicate kiye; item me smart classrooms, labs, libraries, boundary walls aur drinking water shamil hai. Mantri-framing disclosed: ye state government ka Sikhya Kranti school-upgrade programme (Rs 2,000 crore statewide) hai, unke mantriyal vibhag ka project nahi; chhah school unki Sahnewal seat me hain. Date 2025-05-17 event day hai — TOI ne “Saturday” likha aur piece May 17, 2025 (Saturday) ko publish hua.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Mantri Hardeep Singh Mundian ne Sahnewal halke ke ward 21 se 25 me Rs 6 crore se zyada ki buniyadi-dhancha pariyojnaon ka udghatan kiya, jisme Ganpati Vihar ward 22 me Rs 98 lakh ki sewer line pariyojna shamil hai', category: 'Paani', badge: 'news', sourceLabel: 'ET Infra (Times Network)', sourceUrl: 'https://infra.economictimes.indiatimes.com/news/urban-infrastructure/punjab-minister-hardeep-singh-mundian-inaugurates-6-crore-infrastructure-projects-in-sahnewal/121315172?utm_source=top_news&utm_medium=tagListing', date: '2025-05-20', note: 'ET Infra (TNN byline) ke mutabik Mundian ne Tuesday ko projects inaugurate kiye: Ganpati Vihar (ward 22) me sewer lines bichhane ke liye Rs 98 lakh, plus ward 21-25 me water-sewer line upgrades aur road work aur peene ke paani ke liye naye tubewells. Mantri-framing disclosed: Bhagwant Mann-led state government ke development push ke roop me framed; sabhi wards unki Sahnewal seat me hain. Date 2025-05-20 inferred hai — May 21, 2025 ko publish hui report me “on Tuesday”.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Revenue mantri Hardeep Singh Mundian ne Sahnewal halke me 14 sadak pariyojnaon ka lokarpan kiya — kul Rs 494.03 lakh, har sadak ki alag lagat suchibaddh', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/ludhiana/multiple-road-infra-projects-worth-494l-inaugurated-in-sahnewal/', date: '2025-10-10', note: 'The Tribune ne 14 sadkon ki list di hai km aur per-project costs ke saath (Kakka to Tajpur Rs 54.61 lakh … Ludhiana Rahon Road to Garhi Fazil Rs 35.83 lakh), kul Rs 494.03 lakh. Mantri-framing disclosed: Mundian ne apni Sahnewal seat me Revenue Minister ke roop me inaugurate kiya; report me CM Bhagwant Singh Mann ke netritva wali state government ke infrastructure vision ke tahat framed hai, inauguration ke aage vyaktigat fund credit ka dawa nahi. Date 2025-10-10 inferred hai — Oct 11, 2025 (Saturday) ko publish hui report me “on Friday”.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Punjab sarkar ne Sahnewal me Rs 10.64 crore ke naye sub-tehsil complex ko manzoori di, jiski ghoshna cabinet mantri aur sthaniya MLA Hardeep Singh Mundian ne ki', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/ludhiana/minister-approves-construction-of-10-64-cr-sub-tehsil-complex-in-sahnewal/amp/', date: '2026-03-24', note: 'The Tribune ke mutabik Mundian ne sub-tehsil complex ki manzoori ki formal ghoshna ki; TOI independently confirm karta hai ki “The Punjab govt has approved the construction” Rs 1,064 lakh se thoda zyada lagat par. Sarkari manzoori ke roop me darj, keval maang nahi. Mantri-framing disclosed: Mundian ne Cabinet Minister aur Sahnewal MLA ki dohari bhoomika me ghoshna ki; ye revenue aur prashasnik sewaon ko vikendrit karne ka state-government decision ke roop me framed hai. Date 2026-03-24 inferred hai — 2026-03-25 ko publish hui report me “on Tuesday”.', period: '2022-2027', stage: 'swikriti' },
];
// PB6: hardeep-singh-mundian — 4 entries merged (QA-checked; ED ne nephew ke ghar search ki — MLA khud aaropi nahi, negative reject sahi).
punjabWorks['daljit-singh-grewal'] = [
  { title: 'Ludhiana East MLA Daljit Singh Bhola Grewal aur Mayor Inderjit Kaur ne Karamsar Colony (Ward 13) me Rs 44 lakh ki nayi sewer line bichhane ki pariyojna ka udghatan kiya', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/mla-mayor-kick-start-project-to-install-sewer-lines-in-karamsar-colony/', date: '2025-04-07', note: 'The Tribune (published 7 Apr 2025) ke mutabik Ludhiana East MLA Daljit Singh Bhola Grewal aur Mayor Inderjit Kaur ne Saturday ko project inaugurate kiya. Lagat lagbhag Rs 44 lakh, kaam Municipal Corporation Ludhiana ne liya hai; dono ne adhikariyon ko development works ki quality me koi samjhauta na karne ke nirdesh diye. MLA ke mutabik ilake ki sewers lagbhag teen dashakon se upgrade nahi hui thi aur nivaasiyon ne pehle nayi lines ki maang ki thi. Fund note: report me Rangla Punjab Vikas Scheme ya kisi MLALAD-type grant ka ullekh nahi — fund civic body ka; MLA ka vyaktigat lokarpan documented hai.', period: '2022-2027', stage: 'lokarpan' },
];
// PB6: daljit-singh-grewal — 1 entry merged (QA-checked; Daljit Grewal Bhola nasha-mamle alag aaropi — naam-jaal sahi pakda).
punjabWorks['rajinder-pal-kaur-chhina'] = [
  { title: 'MLA Chhina ne canal-based water supply project ke tahat Rose Garden, Giaspura aur aaspaas ke ilakon me teen overhead water reservoirs aur 8 km water supply lines ka kaam Rs 21 crore ki lagat se shuru karwaya', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/ludhiana/works-worth-21-cr-inaugurated/amp/?utm=relatedarticles', date: '2025-07-09', note: 'Ludhiana South MLA Rajinder Pal Kaur Chhina ne Wednesday ko Giaspura me aayojit ceremony me ~Rs 21 crore ke works ka udghatan kiya: Rose Garden, Giaspura aur aaspaas ke ilake me teen OHSRs aur 8 km ke adjoining area me associated water supply lines. Ludhiana Urban Water and Wastewater Management Limited ke officials aur contractor ke staff maujood the. Note: ye World Bank (WB) aur AIIB-funded canal-based water supply project (Phase 1 civil works ~Rs 1,300 crore) ka hissa hai — paisa MLALAD ya Rangla Punjab Vikas Scheme se nahi aaya. Date reasoning: article me ‘on Wednesday’ event bataya gaya hai aur page par published 2025-07-10 (Thursday) hai, isliye event date 2025-07-09. The Tribune established whitelisted outlet hai aur MLA ki bhoomika dastaveji hai.', period: '2022-2027', stage: 'lokarpan' },
];
// PB6: rajinder-pal-kaur-chhina — 1 entry merged (QA-checked).
punjabWorks['kulwant-singh-sidhu'] = [
  { title: 'Atam Nagar MLA Kulwant Singh Sidhu ne Gill Road recarpeting pariyojna ka shilanyas kiya — chunavi wada poora karne ki disha me kadam', category: 'Sadak', badge: 'news', sourceLabel: 'Hindustan Times', sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/ludhiana-gill-road-recarpeting-project-respite-for-residents-aap-mla-lays-foundation-stone-101647800671268.html', date: '2022-03-20', note: 'HT page updated 2022-03-20 ke mutabiq Atam Nagar MLA Kulwant Singh Sidhu ne Sunday ko Gill Road recarpeting project ka foundation stone rakha; article me unke hawale se — election ke waqt ‘residents se wada tha ki power me aate hi Gill Road ka kaam priority par shuru hoga’. Road lambe waqt se kharab thi, gadde aur dhool accidents aur pollution badha rahe the.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'Atam Nagar MLA Kulwant Singh Sidhu ne Model House ke D10 park ke paas 12.50 HP tubewell ka lokarpan kiya — Rs 5.5 lakh ki lagat se paani supply me sudhar', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/ludhiana/mlas-start-paying-attention-to-civic-issues-hold-meetings-with-officials/amp', date: '2024-11-14', note: 'The Tribune page published 2024-11-17 ke mutabiq Atam Nagar MLA Kulwant Singh Sidhu ne ‘on Thursday’ Model House area ke D10 park ke paas ward number 51 me 12.50 HP tubewell ka udghatan kiya; lagat lagbhag Rs 5.5 lakh. Date inferred: article Thursday ka zikr karta hai aur 2024-11-17 (Sunday) ko publish hua, isliye usse pehle wala Thursday 2024-11-14.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Atam Nagar MLA Kulwant Singh Sidhu ne Punjabi Bagh ilake me Rs 92 lakh ki lagat se interlocking tiles lagane ki pariyojna shuru ki', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/ludhiana/mlas-on-inauguration-spree-before-mc-elections/amp', date: '2024-11-19', note: 'The Tribune page published 2024-11-20 ke mutabiq Atam Nagar MLA Kulwant Singh Sidhu ne ‘on Tuesday’ Punjabi Bagh area (new Ward 50) me interlocking tiles lagane ke project ka udghatan kiya; lagat lagbhag Rs 92 lakh, tiles sadkon ke kinare lagni hain. Date inferred: article Tuesday ka zikr karta hai aur 2024-11-20 (Wednesday) ko publish hua, isliye woh Tuesday 2024-11-19.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Atam Nagar MLA Kulwant Singh Sidhu ne Dugri canal bridge ke Rs 79 lakh ke widening kaam ka udghatan kiya — Smart City Mission fund se', category: 'Sadak', badge: 'news', sourceLabel: 'The Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/ludhiana/dugri-bridge-widening-project-launched-to-ease-traffic-in-ludhiana/articleshow/115543339.cms', date: '2024-11-21', note: 'TOI ke mutabiq Atam Nagar MLA Kulwant Singh Sidhu ne ‘on Thursday’ Dugri canal bridge (Dugri se Atam Nagar police post ki taraf wala hissa) ke widening project ka udghatan kiya; ek side ki chaudai 10-12 feet badhai jani hai. Fund: Smart City Mission (kendriya scheme) ke tehat Rs 79 lakh; article me MLA ki vyaktigat bhoomika dastaveji hai — ‘Kulwant Singh Sidhu had promised residents to widen the bridge before the Vidhan Sabha elections’ aur udghatan samaroh me MC superintending engineer bhi maujood the. Date inferred: article Thursday ka zikr karta hai aur search index update 2024-11-23 ke aaspaas tha, isliye woh Thursday 2024-11-21.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Atam Nagar MLA Kulwant Singh Sidhu ne Model Town (Ward 51) me Rs 1.2 crore ki paani pipeline pariyojna ka udghatan kiya — World Bank/AIIB canal project ka hissa', category: 'Paani', badge: 'news', sourceLabel: 'The Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/ludhiana/rs-1-2-crore-water-supply-project-opened-in-model-town-/articleshow/128793589.cms', date: '2026-02-25', note: 'TOI ke mutabik Atam Nagar MLA Kulwant Singh Sidhu ne ‘on Wednesday’ Model Town area (Ward 51) me 1 km water supply pipeline lagane ke project ka udghatan kiya; lagat lagbhag Rs 1.2 crore. Ye World Bank aur AIIB funded canal-based water supply project ke first phase (kul lagbhag Rs 1,300 crore) ka hissa hai; OHSR ke associated pipeline ka kaam hai. MLA ki bhoomika: vyaktigat udghatan + officials ko time par kaam poora karne ke nirdesh. Date inferred: article Wednesday ka zikr karta hai aur search index update 2026-02-26 ke aaspaas tha, isliye woh Wednesday 2026-02-25.', period: '2022-2027', stage: 'lokarpan' },
];
// PB6: kulwant-singh-sidhu — 5 entries merged (QA-checked; naam-jaal: SAS Nagar wale Kulwant Singh alag — worker ne pakka kiya).
punjabWorks['ashok-parashar-pappi'] = [
  { title: 'MLA Ashok Parashar Pappi ne Buddha Nullah par naye Madhopuri puli ke nirman ka shilanyas kiya — lagbhag Rs 1.96 crore ki pariyojna (ward 10/58)', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/ludhiana/mla-inaugurates-5-67-cr-dev-works/', date: '2024-12-06', note: 'Tribune report (published 7 Dec 2024; article me “on Friday” lokarpan likha hai — isliye event date 6 Dec 2024 maani gayi). MLA ne Ludhiana Central constituency me lagbhag Rs 5.67 crore ki vikas pariyojnaon ka lokarpan kiya; inme Buddha Nullah par Madhopuri puli ka nirman (lagbhag Rs 1.96 crore) shamil hai. Fund source (Rangla Punjab Vikas Scheme / nagar nigam) article me explicitly nahi diya gaya; MLA ka vyaktigat lokarpan Tribune dwara documented hai.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA Ashok Parashar Pappi ne Amarpura, Janakpuri, Hari Kartar colony, Cheema colony, Shivaji Nagar, Hargobind Nagar aur Mohalla Bhardwaj me sadak punarnirman tatha Dhandiya Mohalla aur Madhopuri me tubewell pariyojnaen shuru ki — kul lagbhag Rs 3.71 crore', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/ludhiana/mla-inaugurates-5-67-cr-dev-works/', date: '2024-12-06', note: 'Tribune report (published 7 Dec 2024; article me “on Friday” likha hai — event date 6 Dec 2024 maani gayi). Article ke anusaar sadak punarnirman aur tubewell sthapna ki pariyojnaen (kul lagbhag Rs 3.71 crore) “being taken up” stage par hain. Fund source article me explicitly nahi diya gaya; MLA ka vyaktigat lokarpan documented hai.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA Ashok Parashar Pappi ne Gurdwara Gaughat Sahib ke peeche Buddha Dariya ke kinare retaining wall aur concrete sadak nirman pariyojna ka shilanyas kiya — lagbhag Rs 1.40 crore', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/ludhiana/project-to-build-retaining-wall-road-alongside-buddha-dariya-kicked-off/', date: '2025-05-16', note: 'Tribune report (updated 17 May 2025; article me “on Friday” lokarpan likha hai — event date 16 May 2025 maani gayi). Buddha Dariya ke kinare suraksha ke liye retaining wall aur concrete sadak; MLA ne bataya ki yeh dariya ke doosre kinare pehle shuru ki gayi sadak pariyojna ka hissa hai. Lokarpan me ward 10 councillor Pardeep Sharma Gabby bhi upasthit. Fund source article me explicitly nahi diya gaya.', period: '2022-2027', stage: 'shilanyas' },
];
// PB6: ashok-parashar-pappi — 3 entries merged (QA-checked; Dussehra-mela rishwat-aarop + aide-video aarop: MLA khud aaropi nahi — negatives reject sahi).
punjabWorks['sanjeev-arora'] = [
];
// PB6: sanjeev-arora — 0 entries merged (QA-checked; mantri-niyam fail-closed; ED giraftari + bail-kharij foundation me pehle se disclosed; naya nyayik charan nahi).
punjabWorks['madan-lal-bagga'] = [
  { title: 'MLA Madan Lal Bagga ne Jagan Nath Puram (Ward 68) aur Nanak Nagar (Ward 87) me do tubewell lokarpit kiye', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/ludhiana/mla-bagga-inaugurates-two-tubewells', date: '2025-04-03', note: 'The Tribune ke mutabiq Ludhiana North MLA Madan Lal Bagga ne Jagan Nath Puram (Ward 68) me 12.5hp tubewell (lagbhag Rs 5 lakh) aur Nanak Nagar (Ward 87) me 25hp tubewell (lagbhag Rs 10.50 lakh) ka lokarpan kiya taaki peene ke paani ki supply streamline ho sake. Councillors Pushpinder Bhanot Bittu aur Harjinder Singh Bali inauguration me maujood the. Date inferred: Tribune article ‘Updated At’ 2025-04-04 aur text me ‘inaugurated on Thursday’ — 2025-04-03 Thursday thi, isliye event date 2025-04-03.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'MLA Madan Lal Bagga ne Ward 8 ke tehat Kabir Nagar aur aas-paas ke ilakon me Rs 49.50 lakh ki sewer line bichhane ka kaam shuru karaya', category: 'Paani', badge: 'news', sourceLabel: 'Dainik Bhaskar', sourceUrl: 'https://www.bhaskar.com/local/punjab/ludhiana/news/inaugurates-rs-4950-lakh-sewerage-project-136754980.html', date: '2026-03-18', note: 'Dainik Bhaskar ke mutabiq Ludhiana North ke vidhayak Madan Lal Bagga ne Ward 8 ke tehat Kabir Nagar aur aas-paas ke ilakon me sewer line bichhane ke kaam ka udghatan kiya; lagbhag Rs 49.50 lakh ki lagat. Unke mutabiq char dashakon ke baad yahan sewerage bichhaya ja raha hai; ilake ki purani maang poori hone se sewer-jam ki samasya me rahat milegi. Date estimated: Bhaskar page par keval relative stamp milti hai (‘7 mahine pehle’); 18 Oct 2026 ke view se lagbhag 2026-03-18 — exact date unverified, estimate disclosed.', period: '2022-2027', stage: 'lokarpan' },
];
// PB6: madan-lal-bagga — 2 entries merged (QA-checked; Kundanpuri adhoore-school lokarpan Tribune-expose — work bhi nahi, negative bhi nahi).
punjabWorks['jiwan-singh-sangowal'] = [
  { title: 'Gill MLA Jiwan Singh Sangowal ne Jarkhar gaon ki Gram Panchayat ko gaon ke vikas karyon aur stadium me nirman karya ke liye Rs 18 lakh ka anudan cheque saunpa', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/ludhiana/mla-opens-37th-jarkhar-sports-festival-at-village/amp', date: '2025-02-07', note: 'The Tribune ki report (published 2025-02-08) ke anusar MLA Jiwan Singh Sangowal ne 37th Jarkhar Sports Festival ke dauran Jarkhar Gram Panchayat ko gaon ke vikas karyon aur stadium me kuch nirman karya ke liye Rs 18 lakh ka grant cheque diya. Jarkhar gaon Ludhiana-Malerkotla road par Gurdwara Sri Manji Sahib, Alamgir ke paas, Gill seat ke andar hai. Date 2025-02-07 inferred: article me likha hai festival Friday ko kick-start hua aur report Saturday 2025-02-08 ko publish hui. Article me fund head ka naam nahi diya gaya, isliye grant ka srot undisclosed hai.', period: '2022-2027', stage: 'poora' },
];
// PB6: jiwan-singh-sangowal — 1 entry merged (QA-checked).
punjabWorks['manwinder-singh-giaspura'] = [
  { title: 'Unke anurodh par khel vibhag ne Payal ke naye gymnasium aur stadiums ke naam Sahibzada Baba Ajit Singh aur Sahibzada Baba Fateh Singh ke naam par rakhne ki swikriti di', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/ludhiana/payal-mla-applauds-govts-decision-to-name-gyms-stadia-after-sahibzadas/', date: '2024-12-23', note: 'The Tribune (23 Dec 2024, page khola aur date verify ki) ke anusaar CM ki sifarish par khel vibhag ke adhikariyon ne MLA ke anurodh par Payal me prastavit naye gymnasium aur stadiums ka naam Sahibzada Baba Ajit Singh aur Sahibzada Baba Fateh Singh ke naam par rakhne ki baat mani; credit capped — swikriti unke anurodh par hui, khud kisi nirman ya lokarpan ka dawa is report me nahi.', period: '2022-2027', stage: 'swikriti' },
];
// PB6: manwinder-singh-giaspura — 1 entry merged (QA-checked; Tankhaiya par FIR/janch nahi — negative nahi; HT arts-room page 402 retry-lead).
punjabWorks['manpreet-singh-ayali'] = [
  { title: 'Chandigarh Police ne 29 July 2026 ko Gaushala Chowk ke paas hue Waris Punjab De ke virodh pradarshan me police se jhadap ke baad Dakha MLA Manpreet Singh Ayali aur 14 anya netaon ke khilaf FIR darj ki, jis me Bharatiya Nyaya Sanhita ki dhara 121(1), 132 aur 223 lagi hain', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/dead-akali-dal-legislator-booked-for-waris-punjab-de-protest-in-chandigarh/', date: '2026-07-31', note: 'FIR 29 July 2026 ke virodh (Sikh bandiyon aur MP Amritpal Singh ki rihai ki maang par CM Bhagwant Singh Mann ke nivas ki taraf march) ke agle din darj hui; page ki publish date 2026-07-31 hai, isliye wahi date li gayi hai. FIR me Ayali ka naam aaropi stambh me ‘Dakha MLA’ ke roop me darj hai. Ayali ne virodh ko ‘Sikhon ke dabey hue aakrosh’ ki abhivyakti bataya aur sarkar par ‘separate yardsticks’ lagane ka aarop lagaya; Waris Punjab De pravakta Rashpal Singh Sosan ne police par shantipurna pradarshankariyon ko uksane ka aarop lagaya. Page par chargesheet, giraftari ya jamanat/rahat ka koi ullekh nahi hai — mamla abhi FIR stage par hai.', period: '2022-2027' },
];
// PB6: manpreet-singh-ayali — 1 entry merged (QA-checked; stage-accurate FIR negative; jawab on record).
punjabWorks['hakam-singh'] = [
];
// PB6: hakam-singh — 0 entries merged (QA-checked; honestly empty; NDPS naam-jaal sahi pakda).
punjabWorks['sarvjit-kaur-manuke'] = [
  { title: 'Vidhan Sabha ke prashnakaal me Jagraon MLA Sarvjit Kaur Manuke ke sawal par mantri Dr Inderbir Singh Nijjar ne ashwasan diya ki storm-water seweron ki safai aur Jagraon me water drainage ki samasya ka takneeki samadhan Punjab Water Supply and Sewerage Board se karaya jayega aur agle vitt varsh me zaroorat ke anusar fund uplabdh karaya jayega', category: 'Paani', badge: 'news', sourceLabel: 'The Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/question-hours-kultar-singh-vidhan-sabha-minister-8483114/lite/', date: '2023-03-06', note: 'IE report (Chandigarh, Mar 7, 2023, page khul kar verify kiya): Budget session ke prashnakaal me Manuke ne Jagraon me storm-water sewers ki safai na hone aur pure state me water drainage ki shikayat uthai aur time-bound samadhan manga; sansadiya-karya mantri Dr Inderbir Singh Nijjar ne jawab diya ki water supply and sewerage board ko takneeki samadhan ke liye nirdesh diye gaye hain aur agle vitt varsh me fund ki vyavastha hogi. Date reasoning: article 7 Mar 2023 ko publish hua aur usi me Monday ki proceedings ka zikr hai; date -d se verified 2023-03-06 Monday tha. Credit capped: ye mantri-ashwasan hai; drainage kaam poora hua ya fund mila — is report me iski pushti nahi hai. Sandarbh: drainage 2022 ka sabse bada Jagraon mudda tha.', period: '2022-2027', stage: 'pahal' },
];
// PB6: sarvjit-kaur-manuke — 1 entry merged (QA-checked; Sikhya-Kranti campaign entry DROP — seat attribution “different schools in the district” se documented nahi).
// PB7: Punjab Batch 7 — Patiala + Moga (14/23 districts). 12 assignments. COORDINATOR QA: Amandeep Kaur ki graft-allegation entry (Tribune, cache-source only) drop ki gayi — page 403 par block tha, niyam: khul na sakne wala page source nahi banta. RETRY LEAD: page khule to dobara entry bane.

// ===== PB7: District PATIALA =====

// Punjab works mining — PB7 worker fragment: balbir-singh (Dr Balbir Singh, Patiala Rural, AAP; MLA Mar 2022+, Swasthya Mantri 7 Jan 2023 se)
// Sources kholkar padhe gaye: The Tribune (2), Times of India (1). Baaki leads search-snippet/crawl par reject (neeche REJECT-LOG).

punjabWorks['balbir-singh'] = [
  { title: 'Swasthya Mantri Dr Balbir Singh ne Punjab Education Revolution ke tahat Patiala Rural halke ke Sidhuwal, Jassowal, Pind Lang, Lachkani aur Bakhshiwal ke sarkari schoolon me kayi lakh rupaye ke vikas karyon ka lokarpan kiya', category: 'School', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/health-minister-inaugurates-school-projects-in-patiala/amp', date: '2025-04-18', note: 'The Tribune (amp page) ke mutabiq unhone apne Patiala Rural halke ke chaar/panch schoolon (Sidhuwal, Jassowal, Pind Lang, Lachkani, Bakhshiwal) me vikas karyon ka udghatan kiya; ye karya state ke “Punjab Education Revolution” abhiyan ke tahat bane aur kayi lakh rupaye ke the. Mantri-framing disclosed: ye state-government ka school-upgrade programme hai, unka vyaktigat fund nahi; report me fund ka srot alag se disclosed nahi hai. Date: page par Published 2025-04-18T03:31:40+05:30; dateline page me visible nahi tha, isliye event date publish date se li gayi hai.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Patiala ki district and sessions court ne AAP mahila wing ki poorv padadhikari ki shikayat par Swasthya Mantri Dr Balbir Singh ke khilaf sexual harassment ke mamle ko special court (CJM Ekta Sahota) me transfer kar diya; sabhi aaropiyon ko notice jaari hue', category: 'Any', badge: 'news', sourceLabel: 'Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/chandigarh/sexual-harassment-case-against-punjab-health-minister-transferred-to-special-court/articleshow/124790381.cms', date: '2025-10-25', note: 'TOI ki report ke mutabiq AAP ki poorv mahila-wing padadhikari ne Dr Balbir Singh par baar-baar sexual harassment, molestation aur dhamki ka aarop lagaya; shikayat me unke bete, karyalay prabhari aur karibi sahyogiyon ko bhi aaropi banaya gaya. Mamla BNSS aur IPC ki dharon me darj hai; pehle Judicial Magistrate G K Hira ne ise District Sessions Court ko bheja, phir higher judiciary guidelines ke tahat CJM Ekta Sahota ki special court me transfer hua aur sabhi aaropiyon ko notice jaari hue. Singh ne aaropon se inkaar kiya aur kaha agle peshi me court me jawab denge. Date inferred: page par exact published date visible nahi thi; report me “next hearing on Monday” hai aur story ka crawl-window Oct 2025 ke aakhri saptah ka hai — 27 Oct 2025 Monday tha, isliye report date 2025-10-25 (Saturday) inferred hai.', period: '2022-2027' },
];
// PB7: balbir-singh — 1 work entry + 1 negative entry (QA pending).

// ---- REJECT-LOG (balbir-singh) ----
// 1. 5dariyanews.com “Rohta Sahib aur Laut ke schoolon me labs ka lokarpan” — REJECT: source whitelisted nahi (aggregator-type chhota portal).
// 2. 5dariyanews.com “Rs 10 crore girls hostel Patiala + Ward No. 3 me Rs 49.04 lakh ki galiyan” — REJECT: source whitelisted nahi; hostel me Ajitpal Singh Kohli maujood — shahar ka karyakram lagta hai.
// 3. indiathisweek.in “Baba Deep Singh Nagar road Rs 28 lakh foundation stone (Mission Vikas)” — REJECT: source whitelisted nahi.
// 4. patialapolitics.com / brightpunjabexpress.com “May 2025 me Rs 1 crore, chaar schools (Seuna, Dandrala Kharoud, Dhangera, Rohta)” — REJECT: dono source whitelisted nahi.
// 5. Tribune “Ghamrauda, Mandour villages to get Rs 3.5-cr sanitation projects” (28 Sep 2026) — REJECT (seat bahar): ECI delimitation order ke mutabiq Ghamrouda P.C. aur Mandor P.C. Samana (No. 116) Vidhan Sabha me hain, Patiala Rural me nahi (MLA Chetan Singh Jormajra ki seat).
// 6. Tribune “Dr Balbir in campaign mode, opens CHC Ghanaur (Rs 7.5 cr) + Rajindra Hospital 4 OTs (Rs 7 cr)” (15 Mar 2024) — REJECT: vibhagiya faisle (mantri rule) + Ghanaur doosri seat hai.
// 7. TOI “Dhuri hospital review” (Jan 2023), Tribune “surprise visit Rajindra Hospital” (Feb 2023), Tribune “dengue review” (Nov 2022), Tribune “monsoon prep/STP review” (Jul 2025), Tribune “Patiala Rural projects review” (Feb 2026), Tribune “warns Patiala MC” (May 2026), Tribune “pond cleaning inspection Baran/Nandpur Kesho” — REJECT: sab sirf nirikshan/sameeksha baithak, koi lokarpan/shilanyas nahi.
// 8. royalpatiala.in “First Aid Training Centre, GNIMT” — REJECT: source whitelisted nahi + mukhya-atithi samaroh.
// 9. bharathorizon.com “Zila Parishad/Block Samiti oath ceremony” — REJECT: source whitelisted nahi + samaroh.
// 10. Dialysis centres (8 hospitals), Aam Aadmi Clinics, medical college ghoshnaein — REJECT: mantri ke vibhagiya faisle (mantri rule).
// 11. Tribune “Visiting Patiala villages to address grievances” (Apr 2022) — REJECT: sirf daura, koi vishisht kaam nahi.
// 12. Jalandhar Civil Hospital deaths par Bajwa/Pargat Singh ki resignation maang (Tribune/TOI, Jul 2025) — REJECT (negative nahi): koi FIR/chargesheet nahi, keval virodhi dalon ki maang.
// 13. punjabnewsexpress.com “454 pharmacist recruitment scam me resignation maang” — REJECT: source whitelisted nahi + koi FIR nahi.
// 14. Halafname ke 2 purane case (FIR 85/2011, 10/2011, PS Chamkaur Sahib) — REJECT: pre-term mamle, karyakaal me koi legal development nahi.
// 15. indiankanoon.org “Balbir Singh vs State of Punjab” (2023) — REJECT: galat pehchan (doosra Balbir Singh — s/o Puran Singh, Thol; ya constable-bharti petitioner).

// PB7 worker — ajit-pal-singh-kohli (Patiala, AAP)
// Pehchan: halafnama naam 'Ajit Pal Singh Kohli', candidate_id 693, PATIALA, AAP, Winner;
// S/o Surjit Singh Kohli; 2022 me Patiala se 48,104 vote (46.49%) lekar jeete — Capt Amarinder Singh (PLC, 28,231) ko 19,873 maton se haraya;
// 2011 me Patiala ke Mayor rahe (SAD-BJP shasan), chunav se ek mahina pehle SAD chhodkar AAP me aaye.
// Sabhi entries me Patiala seat ki pehchan source text se verify ki gayi hai ('Patiala MLA Ajitpal Singh Kohli' / 'MLA Patiala Ajitpal Singh Kohli').
// Period string har entry me '2022-2027' hai.
punjabWorks['ajit-pal-singh-kohli'] = [
  { title: 'Patiala MLA Ajitpal Singh Kohli ne Lahori Gate ilake me Rs 66 lakh ki lagat se nayi sadkon aur galiyon ke nirman ka udghatan kiya, jahan L&T ne 24x7 canal-based pani supply ke liye pipeline bichhane ke baad sadken khodi thin', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/mla-inaugurates-66l-road-construction-project-at-patiala/', date: '2024-11-15', note: 'The Tribune (15 Nov 2024) ke anusaar: Kohli ne Lahori Gate ilake me Rs 66 lakh ki sadak/galiyon ke kaam ka udghatan kiya; ye kaam L&T dwara 24x7 canal water supply ke liye pipeline bichhane ke dauran khodi gayi sadkon ko punah banane ke liye tha; Chicka Wali Gali, Karkhas Colony, Mahajan Gali, Chanan Dogra aur Division No. 4 ke paas Mahashian Wali Gali shamil; Kohli ne kaha lagbhag 25 saal se in galiyon ka punarnirman nahi hua tha; Municipal Commissioner Dr Rajat Oberoi, Joint Commissioner Deepjot Kaur aur XEN Water Supply Vikas Dhawan bhi maujood the.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'Patiala MLA Ajitpal Singh Kohli ne Gate No. 21 se Lahil traffic intersection tak ki sadak ke Rs 43 lakh ki lagat wali recarpeting pariyojna ka udghatan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/mla-kohli-inaugurates-road-recarpeting-work/', date: '2024-10-04', note: 'The Tribune (4 Oct 2024) ke anusaar: Kohli ne Gate No. 21 se Lahil traffic intersection tak ki sadak ki carpeting pariyojna ka udghatan kiya; kaam Rs 43 lakh ki lagat par ho raha tha; Kohli ne kaha ki is saal lambi barsaat ke kaaran sadak nirman me deri hui thi, lekin barsaat khatm hone ke baad sabhi sadken jald poori hongi; sheher me kaee sadkon ka dashakon baad punarnirman ho raha hai.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'Patiala MLA Ajitpal Singh Kohli ne Ward 49 ke Tange Wali Gali me Rs 46.17 lakh ki lagat se sadkon ke nirman, CC flooring aur pani ke pipe lagakar nikasi sudhar ki pariyojna ka lokarpan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/mla-inaugurates-development-projects-worth-crores-in-patiala/amp', date: '2024-11-24', note: 'The Tribune (24 Nov 2024) ke anusaar: Kohli ne sheher ke teen sthanon par vikas pariyojnaon ka udghatan kiya; unke saath Joint Commissioner Deepjot Kaur, Executive Engineer Mohan Lal aur SDO Amitoj Singh maujood the; pehli pariyojna book market ke paas Tange Wali Gali (Ward 49) me galiyon ka nirman — CC flooring aur pani ke pipe lagakar improved drainage, lagat Rs 46.17 lakh.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Patiala MLA Ajitpal Singh Kohli ne Ajit Nagar ki mukhya sadak ke Rs 53 lakh ki lagat wale punarnirman ka lokarpan kiya, jahan sadak barson se kharab halat me thi', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/mla-inaugurates-development-projects-worth-crores-in-patiala/amp', date: '2024-11-24', note: 'The Tribune (24 Nov 2024) ke anusaar: dusri pariyojna Ajit Nagar ki mukhya sadak ka punarnirman thi — lambe samay se pending pariyojna, anumaanit lagat Rs 53 lakh; kharab halat me rahi sadak ab CC flooring ke saath majboot aur upyogi banegi.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Patiala MLA Ajitpal Singh Kohli ne Model Town ke Majithia Enclave Extension aur Gobind Nagar me Rs 61.22 lakh ki lagat se sadkon ke sudhar ka lokarpan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/mla-inaugurates-development-projects-worth-crores-in-patiala/amp', date: '2024-11-24', note: 'The Tribune (24 Nov 2024) ke anusaar: teesri pariyojna Model Town ke Majithia Enclave Extension aur Gobind Nagar me sadkon ka sudhar thi, lagat Rs 61.22 lakh; uddeshya ilake ke nivaasiyon ke liye connectivity aur suvidha badhana; Kohli ne ashwasan diya ki sabhi vikas kaarye bina deri ke poore honge.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Patiala MLA Ajitpal Singh Kohli ne Sheranwala Gate se Language Department tak ki sadak ke punarnirman ka udghatan kiya; Rs 288 crore wali surface water pariyojna me se sadak nirman hetu Rs 15.60 crore aavantit the', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/patiala-civic-body-to-spend-rs-15-crore-on-road-repairs-aap-mla/', date: '2024-10-26', note: 'The Tribune (26 Oct 2024) ke anusaar: Kohli ne Sheranwala Gate se Language Department tak ki sadak ke punarnirman ka udghatan kiya; Municipal Commissioner Dr Rajat Oberoi aur L&T ke adhikari maujood the; article ke anusaar civic body canal water supply ki pipeline ke liye khodi gayi sadkon ki marammat par Rs 15 crore kharch kar rahi thi; Kohli ne kaha kul Rs 288 crore ki surface water pariyojna me se Rs 15.60 crore keval sadak nirman hetu aavantit the; khodi gayi sadkon ka punarnirman shuru ho chuka tha aur nayi sadak purani jitni hi gunvatta wali hogi.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'Patiala MLA Ajitpal Singh Kohli ne Rs 6 crore ki lagat se sheher ki mukhya sadkon ke nirman ka kaam shuru karvaya; kaam purane bus stand ke paas Rajpura Colony se shuru hua aur Government Rajindra Hospital se Badi Nadi bridge tak ka hissa bhi shamil hai', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/mla-launches-rs-6-crore-road-project-in-patiala/', date: '2025-09-13', note: 'The Tribune (13 Sep 2025) ke anusaar: Kohli ne Rs 6 crore ki lagat se mukhya shehri sadkon ke nirman ko kick-start kiya; kaam purane bus stand ke paas Rajpura Colony se shuru hua; Kohli ne kaha 24x7 canal-based drinking water supply scheme ke tahat L&T dwara pipeline bichhane ke liye khodi gayi sadkon ka ab yuddh-stariya punarnirman hoga; Government Rajindra Hospital se Badi Nadi bridge tak ke hisse ka kaam usi din shuru hua, sheher ki aantarik sadkon ka kaam agle hafte se shuru hona tha.', period: '2022-2027', stage: 'pahal' },
  { title: 'Punjab sarkar ne Patiala me 24x7 canal-based drinking water pariyojna ke liye khodi gayi sadkon ke punarnirman hetu Rs 17.58 crore swikrit kiye; MLA Ajitpal Singh Kohli ne Deputy Commissioner aur sambandhit vibhagon ke saath baithak karke prastav antim kiye', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/first-phase-of-patiala-canal-water-supply-to-be-ready-in-july/', date: '2025-03-05', note: 'The Tribune (5 Mar 2025) ke anusaar: rajya sarkar ne Patiala me 24x7 canal-based drinking water pariyojna ke liye khodi gayi sadkon ke punarnirman ke liye Rs 17.58 crore swikrit kiye; Kohli ne kaha sadak punarnirman ke aavashyak prastav antim ho chuke hain aur April tak marammat poori dikhegi, rashi Municipal Corporation ko aavantit ho chuki hai; Kohli ne Deputy Commissioner Dr Preeti Yadav, civic body, Water Supply and Sewerage Board, PWD aur L&T ke adhikariyon ke saath baithak karke kaam ki pragati ki sameeksha ki; adhikariyon ne bataya 312 km yojit me se 192 km pipeline bichh chuki thi aur 136 km khodi gayi sadak me se 83 km ka punarnirman ho chuka tha (L&T dwara 75 km, PWD dwara 5 km, MC dwara 3 km), shesh 53 km me se 43 km MC naye swikrit fund se pavegi.', period: '2022-2027', stage: 'swikriti' },
  { title: 'Punjab ki Sikhya Kranti pahal ke tahat Patiala MLA Ajitpal Singh Kohli ne Patiala ke Old Police Lines sthit Government Senior Secondary School me adhunik classrooms aur toilet blocks ka lokarpan kiya', category: 'School', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/16-schools-in-patiala-get-facelift-with-40-development-works/', date: '2025-04-08', note: 'The Tribune (8 Apr 2025) ke anusaar: Punjab Sikhya Kranti pahal ke tahat Patiala jile ke 16 sarkari schools me science labs, libraries, boundary walls, adhunik classrooms aur toilet blocks sahit 40 se adhik vikas kaarye poore hue; inhe chhatron ko samarpit karne ke liye Kohli ne Government Senior Secondary School, Old Police Lines, Patiala me adhunik classrooms aur toilet blocks ka udghatan kiya.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Patiala Heritage Street ke motorable hisse par MLA Ajitpal Singh Kohli ne lagbhag Rs 55 lakh ki lagat se CC road dalvai; purani uneven red cobblestone sadak ko concrete se badla gaya, footpath ki stonework barkarar rakhi gayi', category: 'Sadak', badge: 'news', sourceLabel: 'The Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/rs-43-crore-plan-and-years-of-public-inconvenience-what-went-wrong-at-patialas-heritage-street-10919166/', date: '2026-10-13', note: 'The Indian Express (13 Oct 2026) ki post-event reporting ke anusaar: Samania Gate se Mahavir Mandir tak lagbhag 2 km ke Heritage Street stretch par uneven red cobblestone ki jagah ab CC road ban chuki hai; Kohli ne kaha mool Rs 43 crore aavantan me se lagbhag Rs 8 crore kharch hue, shesh rashi 2022 me sarkar badalne ke baad Finance Department ko wapas gayi; “We have replaced the motorable portion with a CC road at a cost of around Rs 55 lakh. The footpaths with stonework have been retained,” Kohli ne kaha, aur “I have got a CC road laid and received enough blessings from residents” bhi kaha; Heritage Street unke 2022 chunav prachar ka mukhya mudda thi.', period: '2022-2027', stage: 'poora' },
  { title: 'Patiala MLA Ajitpal Singh Kohli ne purane bus stand ke paas 51-foot unchi Dr BR Ambedkar pratima ka shilanyas kiya; murti ka prastav unhone 18 Feb ko Municipal Corporation ki General House meeting me rakha tha jo sarvasammati se swikrit hua tha', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/patiala-mla-ajitpal-singh-kohli-lays-stone-for-ambedkar-statue/', date: '2025-03-02', note: 'The Tribune (2 Mar 2025) ke anusaar: Kohli ne purane bus stand ke paas Dr BR Ambedkar ki 51-foot pratima ka foundation stone rakha; unke parivar ne nirman hetu Rs 1 lakh ka yogdan diya (article me yahi likha hai); murti ka prastav Kohli ne 18 Feb ko MC General House meeting me rakha tha jo sarvasammati se paas hua; unhone kaha pratima ek saal me poori ho jayegi aur ve pariyojna ke caretaker ke roop me bane rahenge; Dr BR Ambedkar Welfare Society ne unke anurodh par pariyojna turant shuru karne ke liye aabhaar jataya; MP Dr Dharamvir Gandhi aur Mayor Kundan Gogia bhi maujood the.', period: '2022-2027', stage: 'shilanyas' },
  { title: 'MLA ka dawa — Patiala me Rs 40 crore ki lagat ke vikas kaarye shuru hue hain, jinme sadak marammat, nayi pipelines bichhana aur buniyadi dhanche me sudhar shamil hai', category: 'Any', badge: 'dawa', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/patiala/development-works-worth-40-cr-underway-in-patiala-mla/', date: '2025-09-21', note: 'MLA ka dawa — The Tribune (21 Sep 2025) me press conference ki reporting ke anusaar: Kohli ne kaha sheher me Rs 40 crore ke vikas kaarye shuru ho chuke hain, jinme sadak marammat, nayi pipelines bichhana aur buniyadi dhanche ke anya sudhar shamil hain; teen mahine me poore hone ka ashwasan diya; unhone kaha yojit 300 km pipeline me se 250 km se adhik bichh chuki hai; ye tathya keval MLA ke press-conference dawe ke roop me report hue hain, kisi sarkari dastavej ya swikriti aadesh se inki pushti article me nahi hai.', period: '2022-2027' },
];
// WORKER: ajit-pal-singh-kohli (Patiala, AAP) — 11 works + 1 dawa entry = 12 entries, 0 valid negatives.
// Works (sabhi Patiala seat ke andar, whitelisted sources kholkar padhe gaye): 10 Sadak (Lahori Gate Rs 66 lakh shilanyas; Gate No.21-Lahil recarpeting Rs 43 lakh shilanyas; Tange Wali Gali Rs 46.17 lakh lokarpan; Ajit Nagar main road Rs 53 lakh lokarpan; Majithia Enclave Ext+Gobind Nagar Rs 61.22 lakh lokarpan; Sheranwala Gate-Language Dept road punarnirman shilanyas; Rs 6 crore road project pahal; Rs 17.58 crore dug-up roads swikriti; Heritage Street CC road ~Rs 55 lakh poora; Tange Wali/Ajit Nagar/Majithia teenon Nov 2024 ek hi report me), 1 School (Old Police Lines school classrooms+toilet blocks lokarpan, Sikhya Kranti), 1 Any (Ambedkar pratima shilanyas), 1 Any-dawa (Rs 40 crore press-conference dawa).
// Negatives: koi valid negative nahi — teenon negative-leads R-9/R-10/R-11 me REJECT (neeche).
// Retry-leads: koi nahi — sabhi whitelisted leads ya to entries me hain ya REJECT-log me darj hain.
// R-1. The Tribune (12 Sep 2025) “Patiala MLA reviews progress of Rs 10-cr development projects” (Sanouri Adda community centre Rs 2.5 cr, Model Town library Rs 2.25 cr, community centre Rs 2.5 cr, guest house Rs 2 cr): sirf nirikshan/daura — koi udghatan ya sanction nahi. REJECT.
// R-2. The Tribune (28 Oct 2025) “Work to construct road at Patiala's Sheesh Mahal Enclave commences” (Rs 43 lakh): article me MLA ne keval bayan diya; udghatan/kick-start unke naam par documented nahi; Mayor Kundan Gogia ka event; nagar nigam kaam bina MLA ki dastaveji bhoomika ke. REJECT.
// R-3. The Tribune (16 Oct 2026) “Patiala MC House approves works in 28 wards ahead of re-election”: MLA sirf ex-officio member ke roop me maujood; resolutions pre-event proposals hain, koi vyaktigat lokarpan/shilanyas nahi. REJECT.
// R-4. The Tribune “Patiala MC House rejects proposal to widen link roads”: 11 link roads ka prastav kharij hua; Kohli ne keval do prastav pesh kiye (Vishwakarma Community Hall space, MC hall ka naamkaran); koi kaam nahi. REJECT.
// R-5. yespunjab.com (13 Aug 2026) — Ward 60 Dhamomajra me 1.5 km sadkon ka udghatan: non-whitelist portal. REJECT.
// R-6. World Skill Centre of Excellence, Patiala (18 Feb 2025; yesnupjab/royalpatiala coverage): Sun Foundation + MP Vikramjit Singh Sahney ka karyakram, ministers Aman Arora aur Balbir Singh ka udghatan; MLA sirf maujood — dusre neta ke karyakram me maujoodgi. REJECT.
// R-7. Kali Devi Temple sarovar pipeline, Rs 70 lakh (newsarenaindia, May 2025): non-whitelist source + ministers Hardeep Mundian aur Balbir Singh ka udghatan; MLA sirf saath me — dusre neta ke karyakram me maujoodgi. REJECT.
// R-8. royalpatiala.in (21 Nov 2024) “MLA on inauguration spree; road repair work yet to complete” aur news-impact follow-ups: non-whitelist portal; iska mool Tribune-report (Rs 43 lakh recarpeting) entry me liya ja chuka hai. REJECT.
// R-9. Negative lead — The Tribune (17 Dec 2024) “Police yet to identify miscreants who attacked candidates, snatched papers”: Dec 2024 MC chunav me nomination papers chhinne par BJP ka aarop aur BJP Mahila Morcha adhyaksh Jai Inder Kaur ki NCW complaint me MLA Ajit Pal Singh Kohli ka naam; lekin article ke anusaar paanchon FIRon me aaropi abhi agyat hain — “We are trying to identify the victims and the accused so that they could be named in the FIRs” (SHO Pardeep Bajwa). Shikayat me naam lekin FIR ke aaropi column me naam nahi = negative NAHI. REJECT.
// R-10. Negative lead — Times of India (6 Jul 2020) “Akali Dal MLA, Youth Akali Dal leaders booked for breaching Covid-19 protocol”: July 2020 ka pre-term mamla (tatkalin Akali Mayor Ajitpal Singh Kohli samvet); wahi case halafname me darj hai (IPC 188, 269, 270, 283, 149 — COVID-kaalin virodh); karyakaal (Mar 2022+) me koi nyayik vikas whitelist sources me nahi mila. REJECT.
// R-11. Negative lead — The Tribune archive (29 Aug 2011, lower Mall six-laning delay) aur 2009 ka MC councillors ka “bhrashtachar” dharna: mayoral tenure (pre-2022) ke mamle; karyakaal me koi legal development nahi. REJECT.
// R-12. Negative lead — Deccan Herald (5 Oct 2026) P&H HC ka AAP sarkar se jude logon par CBI janch ka aadesh: article me MLA ka naam nahi; pehchan seat se nahi. REJECT.
// R-13. The Tribune (2025) “Health Minister inaugurates school projects in Patiala”: Patiala Rural ke schools, Dr Balbir Singh ka udghatan; Patiala Urban seat ke bahar + is MLA ki bhoomika nahi. REJECT.
// R-14. brightpunjabexpress.com (11 Apr 2025) “Rs 4.29 Crore Development Works Inaugurated in 30 Government Schools Across Patiala”: non-whitelist portal; usi Sikhya Kranti ghatna ka whitelist coverage (The Tribune, 8 Apr 2025) entry me istemal ho chuka hai. REJECT.
// R-15. royalpatiala.in “MLA Ajitpal Singh Kohli Initiates Rs 2.5 Crore Development Projects in Patiala”: non-whitelist portal; whitelist me coverage nahi mila. REJECT.

// PB7 worker: neena-mittal (Rajpura, AAP)
// Research note: pehchan Rajpura seat se pakki ki gayi (Neena Mittal, AAP, Winner 2022, candidate_id 164, W/o Ajay Mittal).
// Dainik Tribune (dainiktribuneonline.com) The Tribune Trust ka Hindi edition hai  -  whitelist ke "The Tribune" ke tahat source ke roop me liya gaya.
// MLA ka halafnama 2022 me 1 criminal case (IPC 188, 269) dikhata hai; Mar 2022 ke baad usme koi nyayik vikas nahi mila.
// REJECT-LOG:
// - "Election Update: notice issued to MLA; candidate booked for violations" (royalpatiala.in, 2024-06-01)  -  polling booth me vote ka video banane par DEO ne MCC notice diya; SAD ne FIR ki maang ki. royalpatiala.in aur etvbharat.com whitelist me nahi; whitelisted outlet par ye khabar nahi mili. Reject (source whitelist fail).
// - "Seed Scam Accused Is Rajpura MLA's 'town Coordinator'" (Times of India)  -  page khul nahi saka (HTTP 403), isliye source nahi; waise bhi MLA khud aaropi nahi  -  aarop unke appointee Sham Sunder Wadhwa par hai, MLA ne khandan kiya. Negative criteria ("MLA khud aaropi") fail. Reject.
// - "Rajpura firing incident: Gangster Goldy Dhillon takes responsibility" (The Tribune, ~Jun 2026)  -  MLA dhamki ki praptakarta hain, aaropi nahi; gangster ke dawe independently verified nahi. Negative nahi. Reject.
// - "Rajpura man ends life; ex-MLA, son booked" (The Tribune, Nov 2022)  -  aaropi ex-MLA Hardyal Kamboj aur unka beta; Neena Mittal sirf mritak ki patni se mili aur nyay ka ashwasan diya. Negative nahi. Reject.
// - "MLA Rajpura Neena Mittal Launches Wheat Procurement at Banur Mandi" (5dariyanews)  -  whitelist me nahi; Banur Mandi SAS Nagar me hai, Rajpura seat ke bahar; keval shubharambh. Reject.
// - "Harpal Singh Cheema inaugurates 2 days Youth Fest at Aryans Campus" (5dariyanews, Oct 2022)  -  whitelist me nahi; MLA sirf Guest of Honour (mukhya-atithi). Reject.
// - brightpunjabexpress.com, editorji.com, onefivenine.com, bolepunjab.com, swatantraprabhat.com ki khabren  -  aggregator/chhote portals, whitelist me nahi. Reject.
// - "Rajpura me 12 April se shuru honge ruke vikas kary: Vidhayak" (Dainik Tribune, Apr 2026)  -  pre-event ghoshna (tender abhi jari hone hain); kisi bhautik sanrachna ka shilanyas/lokarpan nahi. Reject.
// - "Rajpura ko vikasit banana mera lakshya: Neena Mittal" (Dainik Tribune, Jun 2025)  -  keval lakshya/dawe, koi specific work nahi. Reject.
// - "Will ensure potable water for residents says Neena Mittal, Rajpura MLA" (The Tribune, May 2022)  -  early-term interview; paani project keval ghoshna; bus-stand operationalisation aur Civil Hospital free-parking keval unke dawe (bhautik sanrachna ka shilanyas/lokarpan nahi). Reject.
// - School ka 31 Aug 2026 wala nirikshan (bolepunjab)  -  whitelist me nahi aur keval nirikshan/daura. Reject.
punjabWorks['neena-mittal'] = [

  {
    title: 'Rajpura ke Purana Rajpura ilake me AMRUT 2.0 ke tahat Rs 33.66 crore ki pipeline wali paani-supply pariyojna ka shilanyas hua, jise MLA Neena Mittal ke lagatar prayason ka nateeja bataya gaya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/patiala/local-bodies-minister-lays-foundation-stone-of-rs-33-66-crore-water-pipeline-project',
    date: '2025-05-26',
    note: 'Cited page ke tathya: Punjab Local Government and Parliamentary Affairs Minister Dr Ravjot Singh ne Purana Rajpura me AMRUT 2.0 scheme ke tahat Rs 33.66 crore ki pipelined water supply project ka foundation stone rakha; article ke mutabik ye project Rajpura MLA Neena Mittal ke "consistent efforts" ka nateeja hai. Project me distribution system ko mazboot karna aur Old Rajpura aur Rajpura Town me 57.30 km pipeline bichhana shamil hai, jisse lagbhag 50,000 residents aur 10,000 households ko fayda hoga. Pehle phase me major rising mains, distribution lines aur domestic connections upgrade honge; water works se Old Rajpura tak seedhi rising main (hotline) bhi lagegi. Credit capped: shilanyas mantri ne rakha; MLA ki vyaktigat bhoomika ka dastavej cited page me sirf "consistent efforts" tak seemit hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },

  {
    title: 'Rajpura ke Ward 23 me Rs 63 lakh ki lagat se teen interlocking sadakon ke nirman kaam ka MLA Neena Mittal ne shubharambh kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Tribune',
    sourceUrl: 'https://www.dainiktribuneonline.com/news/punjab/mla-started-the-construction-work-of-roads',
    date: '2024-02-09',
    note: 'Date inferred: article 2024-02-10 (Saturday) ko publish hua aur event "Shukrawar" bataya gaya, isliye event date 2024-02-09 li gayi. Cited page ke tathya: MLA Neena Mittal ne Rajpura ke Ward 23 me Rs 63 lakh se banne wali teen interlocking sadakon ke nirman kary ka shubharambh kiya; mauke par ward ke councillor Praveen Chhabra aur nagar council ke poorv pradhan maujood the. MLA ne kaha ki shehar me lagbhag 50 saal purani pipeline hain, jinhe badalne me Rs 150 crore kharcha aayega (context, title me nahi).',
    period: '2022-2027',
    stage: 'shilanyas',
  },

  {
    title: 'Shiksha Kranti ke tahat Rajpura block ke paanch sarkari primary schools (Faridpur, Hidayatpura, Ucha Khera, Lehlaan, Khera Gajju) me kul Rs 38.39 lakh ke vikas karyon ka MLA Neena Mittal ne lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Dainik Tribune',
    sourceUrl: 'https://www.dainiktribuneonline.com/news/punjab/the-environment-of-education-in-schools-will-become-better-neena-mittal/',
    date: '2025-05-15',
    note: 'Date inferred: article 2025-05-16 ko publish hua, dateline Rajpura, 15 May, isliye event date 2025-05-15 li gayi. Cited page ke tathya: MLA Neena Mittal ne Block Rajpura-2 ke paanch gaon ke sarkari primary schools me kul Rs 38.39 lakh ki lagat se karwaye gaye vikas karyon ka udghatan kiya; ye kaam Shiksha Kranti ke tahat Punjab sarkar ke vishesh prayas ka hissa bataye gaye. School-war itemized: Faridpur me Rs 10.75 lakh se naya smart classroom; Hidayatpura me Rs 10.51 lakh se naya smart classroom aur boundary wall ki marammat; Ucha Khera me Rs 2.22 lakh se boundary wall ki marammat; Lehlaan me Rs 7.40 lakh se nayi boundary wall ka nirman; Khera Gajju me Rs 7.51 lakh se naya smart classroom. LED panel uplabdh karwane ka bhi zikr hai.',
    period: '2022-2027',
    stage: 'lokarpan',
  },

  {
    title: 'Shiksha Kranti ke tahat Rajpura ke Kalomajra center ke chhah sarkari primary schools (Fatehpur Garhi, Jhansla, Kalomajra, Jalalpur, Balmajra, Ramnagar) me kul Rs 59.29 lakh ke vikas karyon ka MLA Neena Mittal ne lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Dainik Tribune',
    sourceUrl: 'https://www.dainiktribuneonline.com/news/punjab/mla-neena-mittal-inaugurated-development-works-worth-rs-59-29-lakh-in-6-government-schools',
    date: '2025-05-17',
    note: 'Date inferred: article 2025-05-18 ko publish hua, dateline Rajpura, 17 May, isliye event date 2025-05-17 li gayi. Cited page ke tathya: MLA Neena Mittal ne Rajpura ke Center Kalomajra ke chhah sarkari primary schools (Fatehpur Garhi, Jhansla, Kalomajra, Jalalpur, Balmajra, Ramnagar) me Rs 59.29 lakh ki lagat se hue vikas karyon ka udghatan kiya; Kalomajra school ke samaro me coordinator Vijay Mainro ne unki dekhrekh me udghatan kiya. School-war itemized: Jalalpur Rs 2.74 lakh (boundary wall marammat); Balmajra Rs 8.69 lakh (naya smart classroom + boundary wall marammat); Jhansla Rs 7.39 lakh (naya classroom); Fatehpur Garhi me Rs 2.32 lakh (nayi boundary wall) + Rs 9.55 lakh (naya smart classroom); Ramnagar Rs 14.35 lakh (nayi boundary wall); Kalomajra Rs 14.25 lakh (boundary wall nirman).',
    period: '2022-2027',
    stage: 'lokarpan',
  },

  {
    title: 'Punjab Sikhya Kranti ke tahat Rajpura Town ke Government Girls School aur Kalka Road Rajpura me poore hue vikas karyon ka MLA Neena Mittal ne lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/patiala/16-schools-in-patiala-get-facelift-with-40-development-works/',
    date: '2025-04-08',
    note: 'Cited page ke tathya: Punjab Sikhya Kranti initiative ke tahat Patiala jile ke 16 government schools me 40 se zyada vikas kary (science labs, libraries, boundary walls, modern classrooms, toilet blocks) poore hue; MLA Neena Mittal ne Rajpura Town ke Government Girls School aur Kalka Road Rajpura me vikas karyon ka inauguration kiya. Note: unke seat ke in schools ke liye fund rakam cited page me itemized nahi hai.',
    period: '2022-2027',
    stage: 'lokarpan',
  },

];

// PB7 worker — gurdev-singh-dev-maan (Nabha (SC), AAP)
// Pehchan: Gurdev Singh Dev Maan, AAP, Nabha (SC) — Mar 2022+ karyakaal
// (2022 me 82,053 vote, runner-up Kabir Dass (SAD) ko 52,600 maton se haraya).
// Kholkar padhe gaye whitelisted sources: The Indian Express (water-resolution article
// poora padha), The Tribune (assault-video amp article poora padha), Times of India
// (Kameli mobile-snatching article poora padha). Search snippets + search-result
// darjano par whitelisted coverage dhoondhi gayi; works ki specific seat-level
// post-event reporting whitelisted outlets par sirf 1 mili (water resolution).

punjabWorks['gurdev-singh-dev-maan'] = [
  {
    title: 'Vidhan Sabha me girawati bhujal par prastav rakha jo sarvasammati se paarit hua',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/punjab-budget-session-house-speaks-in-one-voice-on-protecting-states-water-passes-resolution-9906127/',
    date: '2025-03-25',
    note: 'Article ke anusar AAP ke Gurdev Singh Dev Maan ne prastav rakha ki Punjab me bhujal tezi se ghat raha hai — dhan ki kheti me bhujal ka upyog, barish ke paani ke sanchay ki koi yojna nahi, aur Punjab desert ki taraf badh raha hai. Sadan ne prastav sarvasammati se paarit kiya: “The House recommends to the state government to take immediate effective steps to check the day to day depleting water level and to protect the environment.” Mantri Brinder Kumar Goyal ne kendra par pakshpaat ka aarop lagaya; date inferred — article 26 Mar 2025 ko prakashit aur “Tuesday” passed likhta hai; PTI ne 25 Mar 2025 ko hi report kiya.',
    stage: 'poora',
    period: '2022-2027',
  },
];

// ================= REJECT-LOG =================
// 1. “Assault” video controversy — The Tribune (whitelisted), 22 Mar 2026 — NEGATIVE REJECT.
//    Khud article kholkar padha: Ludhiana ke Dugri me 8 Mar ko Chamkila shradhanjali samaroh
//    me stage par buzurg vyakti ko dhakka/laat maarne ka aaropi video viral hua; MLA ne
//    kaha vyakti nashe me tha aur baar-baar stage par chadh raha tha. Article me koi
//    FIR/chargesheet/janch/nyayik karvai ka zikr NAHI — keval vivaad + virodhiyon ki
//    aalochana. Negative rule (FIR/chargesheet/janch ya nyayik vikas) poora nahi hota.
// 2. Kameli me mobile snatching ka aarop — Times of India (whitelisted), poora padha — NEGATIVE REJECT.
//    Nabha ke Kameli gaon me kuch grameeno ne aarop lagaya ki grant na milne par bahas ke
//    dauran MLA aur saathiyon ne mobile chheen liye; likhit shikayat police ko di. Lekin
//    DSP Nabha ne kaha koi FIR register NAHI hui, dhakka-mukki se inkar; SHO ke anusar
//    “do phone gir gaye”, mamla jaanch me hai. Shikayat hai par FIR ke aaropi column me
//    naam nahi — negative nahi banta. MLA ka jawab article me nahi mila (unavailable for comment).
// 3. Souja gaon ke grameeno ka MLA office ka gherao — The Tribune (whitelisted), 12 Jul 2023 — REJECT.
//    Barish ka paani gaon me chhodne ko lekar virodh; koi aapradhik/kanuni tathya nahi —
//    negative category me nahi aata.
// 4. Sikhya Kranti me Nabha ke school projects ka udghatan (2 May 2025) — patialapolitics.com
//    aur brightpunjabexpress.com: GPS Dhanouri me Rs 11.6 lakh aur GPS Skohaan me Rs 6.5 lakh
//    ke projects; plus GSSS Jassomajra, Bhadson School of Eminence, GPS Nauhra — REJECT.
//    Reason: dono sources whitelist me nahi. RETRY-LEAD: The Tribune/Dainik Bhaskar/HT/PTI
//    par isi ghatna ki post-event reporting mile to entry ban sakti hai (lokarpan, sarkari school).
// 5. Lok Milni me Wajidpur me kaamon ka dawa (sadak marmmat, nayi sadakein, paani, bijli, school/
//    health centre upgrade) — yespunjab.com, 5dariyanews — REJECT. Reason: sources whitelist
//    me nahi; keval MLA ke apne dawe, koi sanction/fund disclosed nahi. Whitelisted outlet
//    par post-event reporting mile to ‘dawa’ badge par vichar ho sakta hai.
// 6. Flood relief 2023 — The Indian Express (whitelisted) — REJECT as work. Sewing machines
//    40 mahilaon ko, Rs 1 lakh flood operations ke liye daan, ration kits ka vitaran, dhan
//    ropan me madad — daan/rahat kaam rule se reject.
// 7. Cycle par shapath lene ki kahani — The Indian Express (whitelisted), Mar 2022 — REJECT.
//    Human-interest; koi seat-level work nahi. Street light khud theek karne wala prasang
//    (errnanewsindia, Sunday Guardian) bhi vyaktigat gesture hai, work nahi.
// 8. Dalit deputy CM ki maang par vivaad — Hindustan Times (whitelisted), 2023 — REJECT.
//    Political story; na work, na negative.
// 9. Halafnama ka 1 case: FIR 196/2020, PS Sadar Nabha (IPC 188, 269; DM Act Sec 51),
//    koi saza nahi — NEGATIVE REJECT. Pre-term mamla; karyakaal (2022-27) me koi
//    dastaveji legal development media me nahi mila; halafnama ka pending mamla akele
//    negative nahi.
// 10. Nabha Nagar Council ke 12 councillors ka istifa-patra MLA ko saunpa — The Tribune
//     (whitelisted), Nov 2025 — REJECT. MLA keval praptakarta; koi bhoomika/aarop nahi.
// 11. Krishi vibhag pradarshani me “sulking MLA” prakaran — The Tribune (whitelisted),
//     Sep 2023 — REJECT. Political gossip; na work, na negative.
// 12. Governor dwara Khokh gaon ko Rs 3 lakh grant ki ghoshna (5dariyanews) — REJECT.
//     Source non-whitelisted; MLA keval samaroh me maujood tha — maujoodgi rule.
// 13. Desh Click par water-resolution ki report — REJECT as source. Non-whitelisted;
//     wahi ghatna The Indian Express (whitelisted) par cover hai, jo entry me istemal hui.

// Punjab batch 7 worker: kulwant-singh-bazigar (researched 2026-10-18) — fragment for punjab works.
// RULE: every entry has a real, opened-and-read sourceUrl. Empty is better than unverified.
// import type { Work } from '../aapkaneta/src/data/pilot';
// export const punjabWorks: Record<string, Work[]> = {};

punjabWorks['kulwant-singh-bazigar'] = [];

// REJECT-LOG (kulwant-singh-bazigar — Kulwant Singh Bazigar, Shutrana (SC), AAP; researched 2026-10-18):
//
// 1. REJECT (work, sarkari abhiyan ka keval shubharambh): The Tribune, 8 Apr 2025 —
//    "16 schools in Patiala get facelift with 40 development works". Kulwant Singh Bazigar
//    "participated in inauguration ceremonies" at Govt Primary and Sr Sec School Bahr Jachh,
//    Govt Primary School Sagara, Guru Nanakpura, and Matauli — lekin ye Punjab Sikhya Kranti
//    (rajya sarkar ke abhiyan) ke taht poore Patiala jile ke 5 MLAs ka sanyukt samaroh tha; unki
//    vyaktigat sifarih/sanction/fund ka koi ullekh nahi. (Opened and read.)
//
// 2. REJECT (work, galat vyakti): Times of India aur 5dariyanews ki Mohali MLA "Kulwant Singh"
//    ki 11.3 km link-road works (Rs 246.88 lakh) aur chowk works (Rs 17.71 crore) wali khabrein —
//    ye Mohali ke MLA Kulwant Singh hain, Shutrana ke Kulwant Singh Bazigar NAHI. (Search snippets
//    padhe; pehchan ki pushti ke baad khola nahi gaya.)
//
// 3. REJECT (work, non-whitelist source): brightpunjabexpress, 30 Jul 2025 — Rs 80.35 crore canal
//    irrigation projects (137.13 km canal renovation, 68,500 acres, 56 villages) Shutrana me.
//    Cabinet Minister Barinder Kumar Goyal ne udghatan kiya; MLA ne sirf CM/mantri ka dhanyavad diya —
//    "dusre neta ke karyakram me maujoodgi" bhi hota, source bhi whitelist me nahi. (Snippet padha.)
//
// 4. REJECT (work, non-whitelist source + dusre neta ka karyakram): indiaepost/patialapolitics,
//    3 Jan 2025 — Water Resources Minister Barinder Goyal ne Shutrana me Rs 70 crore water supply
//    projects ki shuruaat ki; MLA sirf maujood the aur CM ka dhanyavad de rahe the. (Snippet padha.)
//
// 5. REJECT (work, non-whitelist source): pinewz.com, 22 Aug 2025 — Karim Nagar (Chichharwal) me
//    Rs 99 lakh payjal yojana ka udghatan; aur pinewz.com, Feb 2026 — Patran me Rs 50 lakh park ka
//    shilanyas. Source whitelist me nahi; whitelisted outlet par khabar nahi mili. (Snippet padha.)
//
// 6. REJECT (work, pre-term): The Tribune, 9 Apr 2022 — profile "Won't rest until all problems
//    solved". Isme jo school-sudhar (2 schools, classrooms, boundary walls, sewerage) darj hain, wo
//    sarpanch (gram panchayat Karim Nagar) ke karyakaal ke hain — March 2022 se PEHLE ke. (Opened
//    and read.)
//
// 7. REJECT (work, sansanrachna-ghatna): The Tribune — "Bridge over Bhakra canal collapses in
//    Shutrana". Ye durghatna hai, MLA ka kaam nahi aur MLA par koi aarop nahi. (Snippet padha.)
//
// 8. REJECT (work, non-work activity): 5dariyanews — MLA ka School of Eminence Ghagga ke chhatron ko
//    Vidhan Sabha proceedings dikhane ki pahal. Ye karyakram hai, bhautik sarkari sanrachna ka
//    lokarpan/shilanyas nahi. (Snippet padha.)
//
// 9. REJECT (work, committee function): punjabnewsline, 28 Mar 2025 — MLA ne Vidhan Sabha me SC/ST
//    Welfare Committee ki 49th report pesh ki (Chairman ke roop me). Ye samiti-karya hai, seat-level
//    bhautik kaam nahi; source bhi whitelist me nahi. (Snippet padha.)
//
// 10. REJECT (NEGATIVE, aaropi-status aspasht): The Tribune, 30 Oct 2025 ("Shutrana AAP MLA, sons
//     booked for kidnap in Haryana") + Hindustan Times, 30 Oct 2025 ("Punjab AAP MLA booked for
//     assault in Haryana's Kaithal"). Gurcharan Singh Kala ki shikayat par Kaithal (Haryana) ke
//     Guhla thane me BNS dharaon 115, 126, 140(2), 351(2), 61 + Arms Act sec 25 me FIR darj hui —
//     lekin HT ke hi article me Kaithal police ne spasht kiya ki "the complainant had not directly
//     accused Bazigar", aur Guhla DSP Kuldeep Beniwal ne kaha ki FIR me MLA ke naam ki sthiti
//     "still unclear" hai aur "the MLA has not been directly accused". Teeno-member SIT janch
//     chalu; whitelisted source me chargesheet ki khabar nahi mili. Niyam: "Shikayat me naam lekin
//     FIR ke aaropi column me naam NAHI = negative NAHI." Isliye negative ke roop me darj nahi
//     kiya — chargesheet aane par dobara vichaar hoga. (Both pages opened and read; MLA ka inkaar
//     dono me darj hai.)
//
// 11. REJECT (NEGATIVE, virodhi-dal ka aarop matra): bharathorizon (non-whitelist), May 2026 — LoP
//     Partap Singh Bajwa ka aarop ki Bazigar ne Shutrana civic elections me polling booths "lock"
//     karne ki dhamki di; SEC ko patra. Koi FIR/janch/nyayik vikas nahi; source bhi whitelist me
//     nahi. (Snippet padha.)
//
// 12. REJECT (negative-check, pehle se background me): halafnama me 0 criminal cases; Tribune profile
//     me purane COVID-kaalin virodh ka zikr hai — naya nyayik vikas 2022-27 me nahi mila.
//
// 13. Dainik Bhaskar/Dainik Jagran/Amar Ujala/PTI me "Bazigar"+"Shutrana" par koi whitelisted
//     works/negative khabar search me nahi mili (site-restricted search: no results).
//
// NATIJA: works = 0, negatives = 0. Khali profile theek hai — sabhi leads ya to reject hue, ya
// unka vyaktigat kaam/ya aaropi-status dastavezi roop se confirm nahi ho saka.

// Punjab works mining — BATCH 7: Sanaur — worker: harmit-singh-pathanmajra — 2026-10-18
// MLA: Harmit Singh Pathanmajra (prachar me Harmeet likha jata hai), Sanaur (Sanour), AAP. Karyakaal Mar 2022+; period '2022-2027'.
// Foundation record src/data/punjab.ts se padha: candidate_id 1213, Umr 46, 12th Pass, halafname me 0 case;
// Feb 2022 me Julkan PS me false-affidavit FIR (IPC 193, 199; RP Act 125A) — P&H HC ne use quash kar diya (HT, Feb 2026).
// RESULT: 0 works entries (kholkar padhe sources me koi vyaktigat lokarpan/shilanyas dastaveji nahi mila), 2 negatives.
//
// ===================== REJECT-LOG (kya reject kiya aur kyun) =====================
// 1. Rs 21 crore road projects, Samana + Sanaur (Tribune + TOI, 19 Nov 2023): Sanaur me 23 km Patiala-Guhla-Cheeka
//    road (Rs 19.29 crore) ka lokarpan mantriyon (Harbhajan Singh ETO, Chetan Singh Jauramajra) ne kiya; MLA maujood
//    the. REJECT — dusre netaon ke karyakram me maujoodgi; MLA ka vyaktigat lokarpan/bhoomika whitelisted source me
//    dastaveji nahi. (royalpatiala.in/kalmassmedia wale dawe non-whitelisted hain.)
//    URL: https://www.tribuneindia.com/news/ministers-inaugurate-road-development-projects-564003/
// 2. Dudhnasadhan Sub-Divisional (tehsil) Complex, Rs 10.8 crore (Tribune, 10 Jun 2025): CM Bhagwant Mann ne
//    lokarpan kiya; MLA ne CM ka swagat kiya, dhanyavad diya aur seat ki maangen uthayin. REJECT — maujoodgi +
//    sirf maang; vyaktigat bhoomika/fund nahi.
//    URL: https://www.tribuneindia.com/news/patiala/new-rs10-8-cr-tehsil-complex-inaugurated-in-patiala/
// 3. Ghuram village announcements (Tribune, 22 Jan 2024): Centre se four-lane road ki maang, Patiala me
//    international airport ka prastav, Mata Kaushalya Trust ki ghoshna, aur MLA ka Rs 1 lakh ka niji daan.
//    REJECT — sirf ghoshna/maang/prastav + niji kharch; koi GO/sanction/lokarpan nahi.
//    URL: https://www.tribuneindia.com/news/mla-announces-development-projects-for-ghuram-village-583873/
// 4. Sikhya Kranti school projects — 67 projects, Rs 5 crore, 28 schools, Patiala district (Tribune, Apr-May 2025):
//    MLA mukhya-atithi ke roop me Samaroh me shamil hue. REJECT — statewide sarkari abhiyan ka keval shubharambh;
//    rashi jila-star ki hai, seat-attributed nahi; vyaktigat sifarish/bhoomika dastaveji nahi.
// 5. "Sanaur to become industrial hub soon" (Tribune, 5 May 2022): Bhunerheri/Devigarh/Balbera ko industrial zone
//    ghoshit karne ki yojana, proposals bheje gaye, meetings. REJECT — sirf yojana/prastav; nateeja dastaveji nahi.
// 6. "Rs 5 crore me se 2.5 crore gaanvon me baanta gaya" — MLA ke jail me rehte hue unke Facebook page ki post ka
//    dawa (IE ne post ko quote kiya, pushti nahi). REJECT — social-media dawa, dastaveji nahi.
// 7. Absconding ke dauraan video me MLA ka dawa ("grounds aur roads maine approve karwaye") — PTC News report,
//    jo whitelisted nahi hai. REJECT — non-whitelisted source + sirf dawa, sanction dastaveji nahi.
// 8. False-affidavit FIR (10 Feb 2022, Julkan PS, IPC 193/199 + RP Act 125A): pre-term mamla; P&H HC ne Feb 2026 me
//    FIR aur summoning order QUASH kar diya (Tribune/HT). REJECT — karyakaal me pratikool nyayik vikas nahi, balki
//    anukool faisla; negative ke sakht mapdand par khara nahi utarta.
// 9. Sarkari aavas ka eviction (Jan 2026, IE/HT): rape-case me proclaimed-offender ghoshit hone ka prashasanik
//    parinaam hai, alag criminal proceeding nahi — isliye alag negative entry nahi; rape entry ki note me ullekh
//    nahi kiya gaya kyunki vah page kholkar nahi padha gaya (sirf snippet dekha).
// 10. TOI ka arrest wala page (articleshow/129810400) browser me 403 par khul nahi saka — use source nahi banaya;
//     TOI ki jagah HT/IE/Tribune ke khule pages se tathya liye gaye.

punjabWorks['harmit-singh-pathanmajra'] = [
  {
    title: 'Sanaur MLA Harmeet Singh Pathanmajra par 1 September 2025 ko Patiala ke Civil Lines police station me ek Zirakpur-based mahila ki shikayat par rape, cheating aur criminal intimidation ka case darj hua, jis me jaanch ke dauraan IPC ki dhara 376(2)(n) jodi gayi aur special report se dhara 494 aur 495 shamil ki gayin; 2 September 2025 ko Karnal me giraftari se bachne ke baad Patiala court ne unhe December 2025 me proclaimed person ghoshit kiya, March 2026 me ve Gwalior ke paas giraftar hue, aur Punjab and Haryana High Court ne 29 May 2026 ko unhe regular bail de di.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan Times',
    sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/punjab-hc-grants-bail-to-aap-mla-pathanmajra-in-rape-case-101780165832528.html',
    date: '2026-05-29',
    note: 'HT (Chandigarh, 31 May 2026) ke anusar: FIR 1 Sep 2025 ko IPC 376 (rape), 420 (cheating), 506 (criminal intimidation) ke tahat darj hui; baad me 376(2)(n) aur 494/495 jode gaye. MLA ka jawab — unke vakeel ne aaropon ko political rivalry bataya aur kaha ki Ropar Range ke DIG ki Nov 2024 ki jaanch me koi apradh nahi mila tha; shikayat-karta ka tark — shaadi ke jhoothe vaade par shoshan aur secretly recorded videos se blackmail. Justice Tribhuvan Dahiya ne 29 May 2026 ko regular bail di (passport surrender, koi anya custody na ho to rihaai). Tribune (25 May 2026) ke anusar ve 2 Sep 2025 ko Karnal me rishtedaar ke ghar se giraftari se bache aur March 2026 me Gwalior ke paas pakde gaye; IE (4 Jun 2026) ke anusar ve 31 May 2026 ko Bathinda Central Jail se riha hue (bail par passport surrender, mahine me do baar thane me hazri, shikayat-karta/gawahon se sampark nahi).',
    period: '2022-2027',
  },
  {
    title: 'Julkan police station (Patiala) me 5 September 2025 ko darj illegal mining FIR (BNS ki dhara 61(2) aur Mines and Minerals Act ki dhara 21(1) aur 4(1)) me Patiala ki adalat ne 25 May 2026 ko Sanaur MLA Harmeet Singh Pathanmajra ko regular bail de di; isse pehle police ne unhe production warrant par Bathinda jail se lakar pehle do din phir chaar din ke police remand par liya tha taaki avaidh khanan me istemal hui poclain machine aur sambandhit dastavej baramad kiye ja saken.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/patiala/aap-mla-pathanmajra-gets-bail-in-mining-case-remains-in-jail-for-rape-charge/',
    date: '2026-05-25',
    note: 'Tribune (Patiala, 25 May 2026) ke anusar: April 2026 me Patiala police ne purane illegal mining case me unki giraftari maangi, MLA ne court me surrender kiya aur police ne aupcharik giraftari ki (remand nahi maanga gaya tha). Tribune (8 May 2026) ke anusar: FIR Julkan police ne 5 Sep 2025 ko darj ki thi; 5 May ko production warrant par lane ke baad 2 din ka remand mila, phir Thursday ko 4 din aur badhaya gaya; police ka tark — poclain machine ki baramdagi aur dastavejon ki zabti ke liye aur jaanch chahiye. HT (31 May 2026) ne bhi 25 May ki mining-case bail ki pushti ki. MLA ki is mamle me seedhi pratikriya in pages me darj nahi hai.',
    period: '2022-2027',
  },
];
// PB7: harmit-singh-pathanmajra — 0 works + 2 negatives.

// PB7 worker — gurlal-ghanaur (Ghanaur, AAP)
// Pehchan pakki: Gurlal Ghanaur, Ghanaur seat, AAP, Winner 2022 (62,783 vote, 48.14%); umr 43; 12th Pass;
// halafnama me 0 criminal case; poorv international kabaddi khiladi, Punjab Police me ASI rahe; Jun 2021 me AAP join.
// NOTE: Dainik Tribune (dainiktribuneonline.com) The Tribune group ka Hindi dainik hai — whitelist ki
// "The Tribune" entry isi group ko cover karti hai, isliye uski 1 entry (E3) rakhi gayi hai.
// Agar strict English-only reading chahiye to parent E3 ko hata sakta hai.
// Kholkar padhe gaye whitelisted sources: The Tribune (2 pages), Dainik Tribune (2 pages).
// Negatives: 0 — halafnama me 0 case; koi bhi established-media report me MLA khud FIR/chargesheet/janch me aaropi nahi mila.
punjabWorks['gurlal-ghanaur'] = [
  {
    title: 'Jal Sansadhan Mantri Barinder Goyal aur vidhayak Gurlal Singh ne Ghanaur ke Kolhemajra gaon me Rs 26.73 crore ki lift-irrigation nahar pariyojnaon ka lokarpan kiya, jinse kshetra ke 42 gaonon ke 16,932 acre me nahari sinchai pahunchegi.',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/patiala/26-73-cr-lift-irrigation-project-inaugurated/',
    date: '2026-07-30',
    note: 'Tribune report ke mutabik 36.39 km ki underground pipeline Rs 22.23 crore me bani (38 gaon, 15,129 acre) aur 2.44 km ke Ghadam Rajbaha ka concrete Rs 4.50 crore me hua (4 gaon, 1,803 acre). Mantri ne kaha Ghanaur kshetra me Ghaggar nadi par Rs 13 crore ke baadh-suraksha karya hue; MLA ne kaha lift irrigation se bhujal bachega aur kheti ki lagat ghategi.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Vidhayak Gurlal Singh Ghanaur ne Punjab Sikhya Kranti ke tahat Government High School, Narrhu me poore hue suvidha karyon ka lokarpan kiya.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/patiala/16-schools-in-patiala-get-facelift-with-40-development-works/',
    date: '2025-04-08',
    note: 'Tribune report ke mutabik Patiala jile ke 16 sarkari schools me 40 se zyada vikas karya (science labs, libraries, boundary walls, aadhunik classrooms, toilet blocks) Sikhya Kranti ke tahat poore hue; Narrhu school par hui lagat report me alag se itemized nahi hai.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Vidhayak Gurlal Ghanaur ne Saidkhedi me Rs 1.32 crore ki lagat se dobara taiyar School of Happiness aur Rs 25.02 lakh ke vikas karyon ka, tatha Khairpur Jattan ke primary school me Rs 5.30 lakh aur high school me Rs 11.80 lakh ke karyon ka lokarpan karke janata ko samarpit kiya.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Dainik Tribune',
    sourceUrl: 'https://www.dainiktribuneonline.com/news/punjab/mann-government-gave-a-new-direction-to-school-education-gurlal-ghanaur/',
    date: '2025-05-03',
    note: 'Dainik Tribune (NIS) report ke mutabik udghatan 3 May 2025 ko hue; sabhi karya school-shiksha kranti ke tahat poore hue. Khairpur Jattan ke dono schools ke karya bhi isi dauran lokarpit hue.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
];

// ---- REJECT-LOG (gurlal-ghanaur, Ghanaur) ----
// 1. REJECT: 'Ghanaur to Become Punjab’s First Constituency with Sports Grounds in Every Village' (patialapolitics.com, May 2025)
//    173 gaonon me volleyball courts, Rs 10 crore lagat ka dawa.
//    Kaaran: whitelist me nahi (chhota local portal) + kaam '98% complete, end of May tak operational' yani pragati par tha, koi post-event whitelisted reporting nahi mili.
// 2. REJECT: News18 Punjab (punjab.news18.com, May 2025) — 'MLA Gurlal Ghanaur inaugurated the computer lab and library rooms'
//    Kaaran: whitelist me nahi.
// 3. REJECT: brightpunjabexpress.com ke Sikhya Kranti articles (Apr 2025) — Ghanaur/Kapuri/Lohsimbli schools me udghatan
//    Kaaran: whitelist me nahi.
// 4. REJECT: babushahi.com / 5dariyanews.com / jagratilahar.com — lift irrigation Rs 26.73 crore wali khabar ke copies (Jul 2026)
//    Kaaran: whitelist me nahi; tathya wahi jo The Tribune wali entry (E1) me liye gaye.
// 5. REJECT: 'Punjab Govt to Name Rajpura-Akkar Link Road After Sri Guru Tegh Bahadur Sahib' (yespunjab.com / cityairnews.com, 10 Mar 2026)
//    Punjab Vidhan Sabha me MLA Gurlal Singh Ghanaur ke prashn ke jawab me mantri Gurmeet Singh Khudian ki ghoshna.
//    Kaaran: sirf non-whitelisted outlets par mili; kisi whitelisted outlet (Tribune/HT/Express/ToI/PTI-on-established-outlet) me coverage nahi mili, isliye cite nahi ki ja sakti.
// 6. REJECT: Dainik Tribune, 17 Jul 2025 — 'Vidhayak Gurlal ne Vidhan Sabha me uthaya mudda' (Ghaggar baadh: nadi ki safai/gehrai aur mitti nikalne ki ijazat ki maang)
//    Page kholkar padha. Kaaran: sirf maang/prastav — report me koi mantri-ashwasan ya dastaveji nateeja nahi; 'logon ne ummeed jatai' se aage kuch nahi.
// 7. REJECT: Dainik Tribune, 23 Sep 2026 — 'Maan ke munafe' door-to-door abhiyan (gaon Chappad)
//    Kaaran: prachar abhiyan; sirf MLA ke dawe (yojnaon ke labh ke aankde), koi bhautik karya ka lokarpan/shilanyas nahi.
// 8. REJECT: The Tribune, 4 Feb 2022 — 'Ex-kabbadi player Gurlal ready to take on heavyweights in Ghanaur' + New Indian Express, 10 Feb 2022 (sports background wali story)
//    Kaaran: pre-term (Mar 2022 se pehle) chunavi promises — sports infrastructure uplift ka vaada; pre-event ghoshna.
// 9. REJECT: patialapolitics.com — 'CM Channi sets in motion development projects worth Rs 269 crore in Ghanaur constituency' (Dec 2021)
//    Kaaran: pre-term (Dec 2021) + whitelist me nahi.
// 10. REJECT: patialapolitics.com — CM ne Dudhnasadhan (Sanaur) me Rs 10.80 crore tehsil complex ka udghatan kiya; Gurlal Ghanaur maujood the
//    Kaaran: dusre neta (CM) ke karyakram me keval maujoodgi + seat ke bahar (Sanaur seat).
// 11. REJECT (negative lead): The Tribune, 3 Jan 2024 — 'Punjabi University security staff end strike'
//    40 suraksha karmiyon par FIR hui thi; virodh MLA Gurlal Ghanaur se meeting ke baad khatm hua.
//    Kaaran: negative criteria fail — MLA khud kisi FIR/chargesheet/janch me aaropi nahi; unhone madhyasthata ki thi.
// 12. REJECT (negative lead): Times of India, Dec 2025 — 'Ghanaur police yet to arrest nomination paper snatcher' (Zila Parishad/Block Samiti chunav)
//    FIR No. 138 (BNS 304(2)) returning officer ki shikayat par aaropi ke khilaf; SAD neta ne aaropi ke 'satta-dhari AAP MLA ke nazdeek' hone ka aarop lagaya.
//    Kaaran: negative criteria fail — MLA FIR ke aaropi column me naamzad nahi; sirf vipakshi neta ka nikatata ka aarop. (Page 403 par khula nahi — snippet ke aadhar par reject; khul na sakne wala page source nahi ban sakta.)
// 13. REJECT (negative lead): indiankanoon.org par 'Gurlal Singh' naam ke kayi cases (murder/NDPS/quashing petitions)
//    Kaaran: pehchan seat se nahi judti — ye alag-alag vyakti hain (alag pita ke naam, alag jile: Kathunangal/Tarn Taran/Faridkot/Sirsa); MLA ka halafnama 0 criminal case dikhata hai.
// 14. REJECT (negative lead): thesaveratimes.com — 'Punjab Police Arrest Gurlal Singh in Tarn Taran Murder Case'
//    Kaaran: whitelist me nahi + pehchan MLA se nahi judti.
// 15. REJECT: The Tribune — 'Funds to be released under PMGSY for repair of rural roads' (tute sadkon ki report)
//    Isme sirf itna hai ki Ghanaur ke MLA ne calls/messages ka jawab nahi diya. Kaaran: na work (koi lokarpan/sanction nahi), na negative (koi FIR/janch nahi).
// 16. REJECT: publish.tribuneindia.com — MLA interview snippet (CHC ki nayi building 'jald taiyar hogi', stadium upgrade ka vaada)
//    Kaaran: page 403 par khula nahi — khul na sakne wala page source nahi; vaise bhi sirf dawe the, koi post-event reporting nahi.
// 17. RETRY-LEADS (koi whitelist hit nahi; batch 2 me dubara khangaalna):
//    - Dainik Bhaskar / Dainik Jagran / Amar Ujala (Patiala edition) me 'Gurlal Ghanaur' shilanyas/lokarpan khabren
//    - HT / Indian Express / NDTV / India Today me Ghanaur seat ke works
//    - Rajpura-Akkar link road naming (Mar 2026) ka kisi whitelisted outlet me coverage
//    - Rangla Punjab Vikas Scheme ki itemized sanction lists (DC Patiala) — MLA ki sifarish dastaveji hone par valid

// Punjab batch 7 worker: chetan-singh-jouramajra (researched 2026-10-18) — fragment for punjab works.
// RULE: every entry has a real, opened-and-read sourceUrl. Empty is better than unverified.
// import type { Work } from '../aapkaneta/src/data/pilot';
// export const punjabWorks: Record<string, Work[]> = {};

punjabWorks['chetan-singh-jouramajra'] = [
  {
    title: 'Rakhra gaon ke sports stadium ke renovation ka shilanyas (Rs 60 lakh)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/patiala/unused-for-15-years-rakhra-stadium-to-get-rs-60-lakh-upgrade-jouramajra/',
    date: '2024-09-23',
    note: 'Rakhra gaon (Samana seat) me 15 saal se band pade stadium ke renovation ka shilanyas Jouramajra ne kiya; stadium me volleyball, cricket, football ke maidan aur walking track banenge. Article me event ko “today” (Sunday) likha hai aur published date 23 Sep 2024 hai — date 23 Sep 2024 li gayi, tasveer Sunday (22 Sep) ki ho sakti hai. Fund source article me disclosed nahi hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Rakhra gaon me Rs 10 lakh ki sewage pipeline aur Rs 5 lakh ki street works ka lokarpan',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/patiala/unused-for-15-years-rakhra-stadium-to-get-rs-60-lakh-upgrade-jouramajra/',
    date: '2024-09-23',
    note: 'Article in works ko “inaugurated” package (kul Rs 1.15 crore, Rakhra aur Langroi gaon) ka hissa batata hai; fund source disclosed nahi. Street works isi entry me shamil hain, alag entry nahi banayi. Published date 23 Sep 2024 — date wahi li gayi.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Langroi gaon me sadak upgrade ki pahal (Rs 40 lakh)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/patiala/unused-for-15-years-rakhra-stadium-to-get-rs-60-lakh-upgrade-jouramajra/',
    date: '2024-09-23',
    note: 'Tribune ne sadak ko lekar “will be upgraded” (bhavishya roop) likha hai, isliye stage “pahal” rakha gaya; ye kul Rs 1.15 crore ke package ka hissa hai. Fund source article me disclosed nahi. Published date 23 Sep 2024 — date wahi li gayi.',
    period: '2022-2027',
    stage: 'pahal',
  },
  {
    title: 'Samana me 13.80 km Patiala-Samana-Guhla Cheeka road (Rs 11.60 crore) ka PWD mantri ke saath sanyukt lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/ministers-inaugurate-road-development-projects-564003/',
    date: '2023-11-20',
    note: 'Shrey credit-capped: ye rajya PWD ki pariyojna hai; mukhya lokarpan PWD mantri Harbhajan Singh ETO ne kiya, Jouramajra ne Samana ke sthaniya janpratinidhi/mantri ke roop me sanyukt lokarpan kiya (Karhali Sahib gaon, Samana seat). Event 19 Nov 2023 ko hua, article 20 Nov 2023 ko published — date 20 Nov 2023 li gayi. Fund source article me disclosed nahi.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Samana me naye bus stand ka shilanyas (rajya sarkar ne lagbhag Rs 6 crore awantit kiye)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/patiala/minister-lays-stone-of-new-bus-stand-in-samana-569422/',
    date: '2023-12-06',
    note: 'Tribune ki dateline “Patiala, December 6” hai aur TOI ke mutabik shilanyas Wednesday (6 Dec 2023) ko hua — date 6 Dec 2023 li gayi. Purane bus stand ki jagah par ~2 acre me naya bus stand: rainwater drainage, rooftop solar panels, rainwater harvesting, nayi dukaanein, bus/scooter/car ke liye parking. Paisa rajya sarkar ne awantit kiya (Tribune); MLA-nidhi ya vyaktigat sifarish ka ullekh nahi.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Samana ke chaar gaon me lagbhag 50 saal baad nehri paani: Nawada Rajwaha ke concretization (lagbhag Rs 1.27 crore) ka lokarpan',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/patiala/four-patiala-villages-get-canal-water-after-50-years/',
    date: '2025-06-05',
    note: 'Shrey credit-capped: ye nehri vibhag ki yojna hai; Jouramajra (tab tak keval MLA — cabinet se Sep 2024 me bahar) ne Samana ke sthaniya MLA ke roop me Nawada Rajwaha ke concretization ka lokarpan kiya. Chaar gaon (Lallauchi, Fatehmajri, Achral Kalan, Achral Khurd), lagbhag 1,100 acre ko fayda; groundwater bachane me madad.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
];

// REJECT-LOG (chetan-singh-jouramajra — Chetan Singh Jouramajra, Samana, AAP; researched 2026-10-18):
//
// 1. REJECT (work, mantri-kshamata vibhagiya faisla + seat ke bahar + non-whitelist source): 5dariyanews —
//    Budhlada sub-division me 19 km Boha Razwahe ke completion ka lokarpan (Rs 22 crore). Budhlada Samana
//    seat me nahi hai; aur ye unhone “Minister of Water Resources and Mining” ki haisiyat se kiya —
//    vibhagiya faisla/karya hai, vyaktigat seat-kaam nahi; source bhi whitelist me nahi. (Snippet padha.)
//
// 2. REJECT (work, mantri-kshamata vibhagiya pariyojna + non-whitelist source): 5dariyanews / cityairnews /
//    dailyworld, Jan 2023 — Civil Hospital Samana me thermal screening device ka udghatan (Breast Cancer
//    AI-Digital Project, Health dept + Niramai/Roche). Health mantri ki haisiyat se vibhagiya pariyojna ka
//    udghatan — vyaktigat seat-kaam nahi; source bhi whitelist me nahi. (Snippet padha.)
//
// 3. REJECT (work, non-whitelist source + dusre neta ke karyakram me maujoodgi): thefactnews.in, 26 Jun 2026 —
//    Samana me Rs 10.35 crore ke international-standard sports stadium ka shilanyas CM Bhagwant Singh Mann
//    ne kiya; isme Jouramajra ki koi bhoomika darj nahi. Dusre neta ke karyakram me maujoodgi hoti; source
//    bhi whitelist me nahi. (Snippet padha.)
//
// 4. REJECT (work, sarkari abhiyan ka keval shubharambh + non-whitelist source): 5dariyanews —
//    Shaheed-e-Azam Bhagat Singh Green Movement ka Samana me flag-off (SRS school, Fatehpur). Ye sarkari
//    abhiyan ka keval shubharambh hai, bhautik sanrachna ka lokarpan/shilanyas nahi; source whitelist me nahi.
//    (Snippet padha.)
//
// 5. REJECT (work, non-whitelist source): patialapolitics.com / brightpunjabexpress.com, 2 May 2025 —
//    Sikhya Kranti ke tahat Samana ke school works (Ghazislar me classroom Rs 10.4 lakh, Jamalpur/Kakra me
//    boundary walls, Chutahehra me sudhar). Source whitelist me nahi; kisi whitelisted outlet par ye khabar
//    nahi mili. (Snippet padha.)
//
// 6. REJECT (work, duplicate coverage): royalpatiala.in / kalmassmedia.com, Nov 2023 — road projects wali khabar
//    ke duplicate version; ye Tribune wali road entry ka hi vishay hai, alag entry nahi. (Snippet padha.)
//
// 7. REJECT (work, sirf ghoshna + seat-level nahi): The Tribune, Sep 2023 — “After education, health infra to get
//    boost: Jouramajra”. Ye Sehatmand Punjab abhiyan ki rajya-star ki ghoshna hai (Mata Kaushalya Hospital,
//    Patiala — Samana seat me nahi); vyaktigat seat-kaam nahi. (Snippet padha.)
//
// 8. REJECT (work, non-work activity): TOI, Mar 2025 — Samana me BSNL tower par Gurjeet Singh Khalsa ke protest
//    me Jouramajra ki upasthiti aur anti-sacrilege kanoon ka samarthan. Ye rajnaitik gatividhi hai, bhautik kaam
//    ka lokarpan/shilanyas nahi. (Snippet padha.)
//
// 9. REJECT (negative, sakht negative criteria poore nahi hue): Jul 2022 — Faridkot me GGSMCH nirikshan ke dauran
//    Dr Raj Bahadur (VC, BFUHS) ko “dirty mattress” par litane ka aarop; video viral, Bahadur ne isteefa diya
//    (CM ne Aug 2022 me isteefa swikar kiya), IMA ne ninda ki aur barkhastagi maangi, CM ne kaha “behtar tareeqe
//    se sambhala ja sakta tha”. PTI/ThePrint/IE/Tribune/NDTV/HT me report hua, lekin Jouramajra ke khilaf koi
//    FIR, chargesheet, janch ya nyayik vikas nahi mila — negative criteria (FIR/chargesheet/janch ya Mar 2022+
//    nyayik vikas) poore nahi hue, isliye entry nahi banayi. (Search ki; established outlets ke snippets padhe;
//    NDTV topic page bhi dekha.)
//
// 10. REJECT (negative, criteria poore nahi hue): Apr 2025 — Samana me Sikhya Kranti event me school
//     principal/shikshakon ko manch se daantne par shikshak sangathanon (Democratic Teachers Front) ka virodh;
//     4 din baad Jouramajra ne sarvajanik maafi maangi (Tribune). FIR/chargesheet/janch/nyayik vikas nahi —
//     negative criteria poore nahi hue. (Snippet padha.)
//
// 11. REJECT (negative, halafnama ka pre-term pending mamla): halafnama ka 1 criminal case (FIR 0196, PS Sadar
//     Nabha, 27.08.2020 — IPC 188, 269; DM Act Sec 51; koi sazaa nahi). Ye karyakaal se pehle ka hai aur
//     karyakaal me is par koi legal development nahi mila — “halafname ke pending mamle akele negative nahi”
//     niyam ke tahat bahar. (Foundation record src/data/punjab.ts se.)
//

// ===== PB7: District MOGA =====

// PB7 worker — amandeep-kaur-arora (Moga, AAP, tenure Mar 2022+)
// Pehli baar ki MLA (doctor, MBBS); halafnama me 0 criminal cases.
// Natija: 0 valid works, 2 valid negatives. Kholkar padhe gaye sources: Hindustan Times
// (Lokpal show-cause, poora page padha), Indian Express (Sikhya Kranti, poora page padha),
// Indian Express (Swati Maliwal defamation, poora page padha), The Tribune (farmers protest
// outside residence, poora page padha). Tribune graft-allegations page ka direct fetch 403
// par block hua (dohra retry nahi kiya); uske tathya search-cache me mile article ke poore
// text se liye gaye — N-2 ke note me disclosure hai. TOI treated-water article ka fetch bhi
// 403 mila; usi kahani ka Indian Express version search text me padha gaya (R-1 me darj).
// REJECT LOG — works (considered, entry nahi bani):
// R-1. Treated water irrigation project, Moga (Rs 12.87 crore, NABARD RIDF): foundation stone
//      Soil and Water Conservation Minister Chetan Singh Jauramajra ne rakha (TOI + Indian Express,
//      Nov 2023); MLA sirf maujood thi aur boli. REJECT (dusre neta ke karyakram me maujoodgi;
//      MLA ki sifarish/bhoomika ka koi dastavej nahi).
// R-2. 5dariyanews: PWD Minister Harbhajan Singh ETO ne Moga district me Rs 45 crore road repair
//      ka shilanyas kiya; MLA ne sabha ko sambodhit karke sarkar ka shukriya ada kiya.
//      REJECT (dusre neta ka karyakram + non-whitelist source).
// R-3. yespunjab.com: Minister Barinder Goyal ne Rs 105.49 crore ke sinchai projects dedicate kiye;
//      MLA sirf “present” suchi me. REJECT (maujoodgi matra + non-whitelist source).
// R-4. Indian Express (2026-09-01) Sikhya Kranti: Moga ke ek school me udghatan me MLA maujood thi;
//      kaam sarkari Sikhya Kranti abhiyan ke the (rajya bhar me 25,000+ works), MLA ke fund ya
//      bhoomika ka koi disclosure nahi. REJECT (sarkari abhiyan ka keval shubharambh).
// R-5. thecolumns.in: Jhandeval aur 4 gaon me nahar ka ruka kaam MLA ke video dekhne par dobara shuru —
//      REJECT (chhota portal, whitelist me nahi).
// R-6. The Tribune (2022-03-29) profile: MLA ne trauma centre, MRI machines, naye college ki
//      prathmiktaen ghoshit ki. REJECT (sirf maang/prastav, koi natija nahi).
// R-7. TOI (Mar 2022): chaaron Moga AAP MLAs ne sarkari daftar/aspataal ka nirikshan kiya.
//      REJECT (sirf nirikshan/daura).
// R-8. dainiksaveratimes.com: Ward 49 (New Dashmesh Nagar) me Rs 49.77 lakh ki interlocking galiyon
//      ka shubharambh MLA ne kiya (18 Oct 2026). REJECT (Dainik Savera Times whitelist me nahi).
// R-9. dainiksaveratimes.com: Ward 42 lok milni (13 Sep 2026) me MLA ke vikas ke dawe (naye school,
//      DC office building, sabzi mandi, 30 MLD STP). REJECT (sirf dawe + non-whitelist source).
// R-10. cityairnews/indiathisweek: Women Entrepreneurship Day par MLA chief guest.
//      REJECT (mukhya-atithi/samaroh + non-whitelist source).
// R-11. passionateinmarketing/thepeoplemanagement: Bry-Air ka 15th biannual eye camp; MLA maujood.
//      REJECT (CSR samaroh me maujoodgi + non-whitelist source).
// R-12. yespunjab.com: Guru Tegh Bahadur light-and-sound show me MLA ki upasthiti.
//      REJECT (karyakram me maujoodgi + non-whitelist source).
// R-13. mavericknews30/thesaveratimes: Mission Clean Punjab drive me MLA ne DC ke saath hissa liya.
//      REJECT (sarkari abhiyan shubharambh + non-whitelist source).
// R-14. 5dariyanews: “Sarkar Aapke Dwar” camp (Singhawala) me MLA maujood. REJECT (sarkari camp me
//      maujoodgi + non-whitelist source).
// R-15. 5dariyanews: “Khedan Vatan Punjab Dean” par MLA ka keval bayan. REJECT (sirf bayan).
// REJECT LOG — negatives (considered, entry nahi bani):
// RN-1. dailypioneer “AAP MLA Arrested in Major Corruption Case” — giraftaar MLA Raman Arora
//      (Jalandhar Central) hai, Amandeep Kaur Arora nahi; source bhi whitelist me nahi.
//      REJECT (galat vyakti).
// RN-2. HT “AAP MLA Arora joins ED probe” aur New Indian Express “VB arrests AAP MLA Arora” — dono
//      Raman Arora (Jalandhar Central) ke baare me. REJECT (galat vyakti).
// RN-3. HT “Industrial plot transfer case: VB questions ex-minister Arora” — ex-minister
//      Sunder Sham Arora ka mamla. REJECT (galat vyakti).
// RN-4. globalgovernancenews “Ex-cop Amandeep Kaur booked” — barkhast police constable hai, MLA nahi;
//      source bhi whitelist me nahi. REJECT (galat vyakti).
// RN-5. Indian Express (2022-05-20): Mothanwali ke sarpanch aur bete ki giraftari MLA ki shikayat par;
//      poorv MLA Harjot Kamal ne durupyog ka aarop lagaya lekin MLA ke khilaf koi FIR/janch nahi.
//      REJECT (MLA aaropi nahi — shikayatkarta hai).
// RN-6. Indian Express + The Tribune (May-Jun 2026): Swati Maliwal ke khilaf maan-haani ka mukadma
//      MLA ne daayar kiya; court ne Maliwal ko pre-cognisance notice diya. REJECT (MLA aaropi nahi —
//      complainant hai; negative ki shart “MLA khud aaropi” poori nahi hoti).
// RN-7. The Tribune (2026-02-23): United Kisan Morcha ne MLA ke niwas ke bahar MSP aur krishi
//      nitiyon par virodh-pradarshan kiya; MLA par koi vyaktigat aarop, FIR ya janch nahi.
//      REJECT (niti-virodh, negative ki shart poori nahi hoti).
// NEGATIVES: 1 valid (neeche entry me). GRAFT entry COORDINATOR-DROP: cache-source only, page 403 par nahi khula — retry lead. Dono me MLA khud aaropi hai, whitelisted source hai,
// kramshah SP-rank janch aur Lokpal show-cause order jaisa sansthagat vikas hai, aur jawab/anupasthiti
// note me darj hai. Halafnama (myneta) me 0 criminal cases declared.
punjabWorks['amandeep-kaur-arora'] = [
  {
    title: 'Punjab Lokpal ne bhrashtachar ki shikayat par Moga MLA Dr Amandeep Kaur Arora aur unke parivar ko show-cause notice diya aur 16 February 2024 ko pesh hone ko kaha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan Times',
    sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/graft-complaint-lokpal-serves-show-cause-notice-to-moga-mla-husband-101704914388717-amp.html',
    date: '2024-01-11',
    note: 'Moga resident Harsh Aren ki affidavit (21 Dec 2023) par sangyaan lete hue Punjab Lokpal ne MLA, unke pati Dr Rakesh Arora, pita Jaspal Singh, bhai Baljinder Singh aur tehsildar Lakhwinder Singh ko show-cause notice diya. Justice Vinod K Sharma (retd) ke 8 Jan 2024 ke order me aarop benami properties khareedne, revenue official se vasuli aur sarkari zameen par kabze ke hain; Aren khud ko MLA ka close aide batata hai. MLA comments ke liye uplabdh nahi hui (anupasthiti disclosed); pati ne aaropon ko kharij kiya aur kisi bhi agency se janch ke liye taiyaar hone ki baat kahi. Stage: Lokpal show-cause/janch — FIR/chargesheet ka ullekh nahi.',
    period: '2022-2027',
  },

];

// Punjab batch 7 worker: amritpal-singh-sukhanand (researched 2026-10-18) — fragment for punjab works.
// RULE: every entry has a real, opened-and-read sourceUrl. Empty is better than unverified.
// IDENTITY GUARD: Ye MLA Khadoor Sahib ke MP Amritpal Singh (Waris Punjab De) NAHI hain.
// Pehchan: Bhagha Purana (Moga), AAP, 2022 winner, age 32, B.Tech IT (PTU, 2012),
// 67,143 vote (runner-up Tirath Singh Mahla, SAD, 33,384). Foundation record me bhi yehi khulasa.
// import type { Work } from '../aapkaneta/src/data/pilot';
// export const punjabWorks: Record<string, Work[]> = {};

punjabWorks['amritpal-singh-sukhanand'] = [];

// REJECT-LOG (amritpal-singh-sukhanand — Amritpal Singh Sukhanand, Bhagha Purana, AAP; researched 2026-10-18):
//
// WORKS LEADS:
//
// 1. REJECT (work, kendriya yojana par shrey + credit disputed): Hindustan Times — "Faridkot MP
//    flays AAP MLA for taking credit of link road widening project in Moga". MLA ne Bhaghapurana-
//    Bhaloor link road (7.87 km, via Nathu Wala aur Nathe Wala villages, Rs 6.85 crore, PMGSY ke
//    taht sanctioned) ka udghatan kiya; Faridkot MP Sarabjeet Singh Khalsa ne dawa kiya ki ye unki
//    mehnat se PMGSY me sanction hua aur Punjab Mandi Board ne unhe shilanyas ka letter bhi bheja
//    tha. Niyam: kendriya pariyojna (PMGSY) par shrey = REJECT; credit bhi disputed. (Page khul
//    nahi saka — HTTP 402; search snippet me poori khabar padhi, isliye lead reject-log me darj.)
//
// 2. REJECT (work, niji kharch): The Indian Express, 12 Nov 2022 — "After protest, pvt teachers
//    hired for govt school, MLA says will pay salary from own pocket". Government Senior Secondary
//    School (Girls), Baghapurana me physics/chemistry lecturers na hone par chhatraon ke highway
//    block ke baad MLA ne 4 private teachers (maths, biology, chemistry, physics) ki salary "from
//    my salary" dene ka elaan kiya, jab tak naye lecturers join na karein. Niyam: "niji kharch"
//    explicitly REJECT — sarkari sanrachna ka lokarpan/shilanyas nahi, vyaktigat paisa hai. (Opened
//    and read.)
//
// 3. REJECT (work, sirf ghoshna/pledge + private investment): Hindustan Times, Feb 2023 —
//    "Canada-based NRIs pledge Rs 250-cr investment in Moga's Baghapurana". MLA ki appeal par NRI
//    Sukh Brar (hospitality + mall, Rs 150 crore) aur Kuldeep Sharma (steel plant, Rs 100 crore)
//    ne nivesh ka VAADA kiya; MLA ne kaha ek project "already started" aur 3 aur pipeline me. Ye
//    niji nivesh ki ghoshna hai — koi sarkari sanrachna ka lokarpan/shilanyas/sanction nahi; pledge
//    ki mukammal reporting bhi nahi mili. (Page khul nahi saka — HTTP 402; snippet se reject-log me
//    darj; 5dariyanews wali duplicate khabar whitelist me nahi.)
//
// 4. REJECT (work, sirf ghoshna/priorities): The Tribune, 26 Apr 2022 (Kulwinder Sandhu, Moga) —
//    "Will ensure transparent, corruption-free administration, says Baghapurana MLA Amritpal Singh".
//    Chunav ke turant baad ka interview: civil hospitals, clinics, schools upgrade, sewage disposal,
//    garbage plants, potable water, Rode ke colleges, agro-industry — sab PRIORITIES ki list. Koi
//    poora/shilanyas/lokarpan ka dastavezi kaam nahi. Niyam: sirf ghoshna = REJECT. (Search snippet
//    padha; interview me koi completed work nahi tha.)
//
// 5. REJECT (work, dusre neta ke karyakram me maujoodgi + non-whitelist): 5dariyanews —
//    Cabinet Minister Harbhajan Singh ETO ne Moga jile me Rs 45 crore road repair ka shilanyas
//    kiya; MLA Amritpal Singh Sukhanand sirf "addressed the gatherings" me maujood the. (Snippet.)
//
// 6. REJECT (work, samaroh/maamooli upasthiti): The Tribune — IKGPTU 14th convocation me MLA ko
//    alumnus ke roop me "honoured" kiya gaya. Ye samman-samaroh hai, seat-level kaam nahi. (Snippet.)
//
// 7. REJECT (work, party-karya): yespunjab.com, Aug 2026 — AAP ne MLA ko PUCSC chunaav ka election
//    in-charge banaya (MP Meet Hayer ke saath). Party assignment hai, seat-level vikas-kaam nahi;
//    source bhi whitelist me nahi. (Snippet.)
//
// 8. REJECT (work, pehchan-galat): devex.com — "Installation of water meters in village Sukhanand,
//    block Bagha Purana". Ye GAON Sukhanand hai (block Bagha Purana ka ek gaon), MLA ka naam se
//    sambandh nahi. (Snippet.)
//
// 9. REJECT (work, generick Moga vikas, MLA ki bhoomika nahi): jagratilahar.com/livingindia/dnpindia
//    (non-whitelist) — CM Bhagwant Mann ka Moga rally: Moga–Baghapurana–Kotkapura road (47.70 km,
//    Rs 46.98 crore) upgrade aur bijli projects. Karyakram CM ka hai, MLA ka vyaktigat lokarpan/
//    sifarish ka dastavezi ullekh nahi. (Snippet.)
//
// 10. NIRMAD/PTI/Dainik Bhaskar/Dainik Jagran/Amar Ujala me "Sukhanand"+"Baghapurana" par koi
//     whitelisted works-khabar search me nahi mili. PRSIndia MLA-track (prsindia.org/mlatrack/
//     amritpal-singh-sukhanand) par pad/terms ki pushti hai (2022 se MLA), lekin wo source
//     whitelist me nahi — isliye use nahi kiya.
//
// NEGATIVES:
//
// 11. REJECT (NEGATIVE, aaropi-status MLA par nahi — sirf virodhi-dal ka aarop): The Tribune,
//     18 Mar 2026 (opened and read) — "Tensions erupt in Moga's Baghapurana over Block Samiti
//     Chairman election". SAD/Congress ne aarop lagaya ki bahumat na hone ke bawajood AAP ne
//     Block Samiti chairman chunaav me "manipulation" ki; unke sadasyon ko kamre me band kiya
//     gaya; "in the presence of the sitting AAP MLA... Amritpal Singh Sukhanand, an AAP candidate
//     was declared elected"; SAD leader Rajwinder Singh ne local MLA par "gunda-gardi" ka aarop
//     lagaya aur High Court jaane ki baat kahi; pradarshankariyon ne MLA aur SDM ko andar band kar
//     diya, police ne bahar nikala. — Aur The Indian Express, 23 Mar 2026 (opened and read) —
//     "Moga Row: SDM accuses DC of Harassment After Baghapurana Polls": SDM Babandeep Singh Walia
//     ne DC Sagar Setia ke khilaf Chief Secretary ko shikayat likhi ("extreme harassment"), SAD ne
//     high court me re-election ki yachika dayar ki (matter sub-judice), MLA ka jawab: "The SDM
//     has complained against DC, not me or party." — Niyam: "Shikayat me naam lekin FIR ke aaropi
//     column me naam NAHI = negative NAHI." MLA ke khilaf koi FIR/chargesheet/janch darj nahi hai;
//     isliye valid negative nahi — reject-log me darj kiya.
//
// 12. IDENTITY GUARD (negative-check): "Amritpal Singh" par NSA/arrest/Waris Punjab De se judi
//     tamam khabrein (von.gov.ng, mid-day, ijarasem, tribuneindia FBI story) KHADOOR SAHIB ke MP
//     Amritpal Singh ki hain — seat+party se pehchan pakki: unka is MLA se koi lena-dena nahi,
//     sabhi leads reject.
//
// 13. Halafnama (myneta candidate_id=352) me 1 pending case: IPC 188, FIR 324/2020, PS Sec-39
//     Chandigarh (andolan) — PRE-TERM (2020), koi conviction nahi. 2022-27 karyakaal me iska koi
//     naya nyayik vikas (chargesheet/faisla) whitelisted media me nahi mila. Niyam: "Halafname ke
//     pending mamle akele negative NAHI."
//
// NATIJA: works = 0, negatives = 0. Whitelisted, kholkar-padhi, post-event reporting me is MLA
// ka koi seat-level dastavezi kaam (vyaktigat lokarpan/shilanyas with fund, GO-backed swikriti,
// ya VS-maang ka dastavezi nateeja) nahi mila; aur MLA-khud-aaropi wala koi valid negative bhi
// nahi mila. Khali profile theek hai.

// PB7 worker — manjit-singh-bilaspur (Nihal Singhwala SC, AAP, tenure Mar 2022+)
// Foundation: src/data/punjab.ts slug 'manjit-singh-bilaspur' padha. Works: koi valid work entry nahi mili. Negatives: 3.
punjabWorks['manjit-singh-bilaspur'] = [
  {
    title: 'Punjab and Haryana High Court ne 29 November 2025 ko 10 January 2020 wale protest ke FIR ka chargesheet aur poori karwai Manjit Singh Bilaspur sahit yachikakartaon ke khilaf radd kar di.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/hc-quashes-fir-against-punjab-cm-aap-leaders/amp/?utm=relatedarticles',
    date: '2025-11-30',
    note: 'Cited page ke anusar: FIR 10 January 2020 ko ek police official ki shikayat par darj hui thi; aarop tha ki yachikakarta (CM Bhagwant Mann, Baljinder Kaur, Manjit Singh Bilaspur, Harpal Singh Cheema) Chandigarh me tatkalin CM ke niwas ki taraf AAP workers ke protest ka netritva kar rahe the, unke uksane par bheed ne water cannon ke baad pattharbazi ki aur kuch adhikari ghayal hue. Justice Tribhuvan Dahiya ne paaya ki CrPC Section 144 ka prohibitory order jaari hi nahi hua tha, pattharbazi karne walo me se kisi ka naam nahi tha, uksane ka koi vishisht shabd/ishara darj nahi tha, choten (abrasions, pain, swelling) IPC Section 332/353 ke “voluntarily causing hurt”/“criminal force” se asangat thi, aur 146/147/149 ke mool tatva poori tarah anupasthit the; investigation agency yachikakartaon ki koi bhoomika jodne wala koi material nahi de saki. Pre-term FIR, karyakaal me nyayik vikas (quash order 29 Nov 2025) — stage-accurate. MLA ki seedhi pratikriya is page par darj nahi hai.',
    period: '2022-2027',
  },
  {
    title: 'Punjab and Haryana High Court ne 6 October 2021 wale Chandigarh protest ke FIR ka chargesheet aur poori karwai Manjit Singh Bilaspur sahit AAP netaon ke khilaf radd kar di.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/chandigarh/hc-quashes-fir-against-punjab-cm-aap-leaders/amp/?utm=relatedarticles',
    date: '2025-11-30',
    note: 'Cited page ke box ke anusar: FIR 6 October 2021 ko North police station, Chandigarh me darj hui thi; AAP netaon — Aman Arora, Jarnail Singh, Jai Krishan Rouri, Kulwant Pandori, Manjit Singh Bilaspur aur Anmol Gagan Maan — par Chandigarh me proteston ke dauran pattharbazi ka aarop tha. Court ne dekha ki maujood logon me se kisi ka naam patthar fenkne wale ke roop me nahi aaya, yachikakartaon ne aisa karne ko kaha ho ye bhi nahi tha, aur uksane ki prakriti ka koi ullekh nahi tha. Justice Tribhuvan Dahiya ne quash petitions allow karke FIR, chargesheet aur poori karwai radd kar di. Pre-term FIR, karyakaal me nyayik vikas — stage-accurate. MLA ki seedhi pratikriya is page par darj nahi hai.',
    period: '2022-2027',
  },
  {
    title: 'Supreme Court ne FIR radd karne wale High Court ke aadesh ke khilaf Chandigarh Administration ki yachika par sunvai sthagit kar di.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/punjab/sc-defers-hearing-on-chandigarh-administrations-plea-against-hc-order-quashing-fir-against-punjab-cm-mann/amp/?utm=relatedarticles',
    date: '2026-05-22',
    note: 'Cited page ke anusar: CJI Surya Kant, Justice Joymalya Bagchi aur Justice Vipul M Pancholi ki bench ne sunvai sthagit kar di, kyunki Chandigarh Administration ne kuch anya aaropiyon ke khilaf yachikaen daakhil karne ke liye samay manga (impleadment — zyada respondents jodne ke liye). Punjab and Haryana High Court ne 29 November 2025 ko FIR, chargesheet aur poori karwai radd ki thi; mamla 10 January 2020 ko ek mahila constable ki shikayat par PS Sector-3, Chandigarh me IPC Sections 353, 332, 147, 149 ke tahat darj hua tha — aarop tha ki Mann, Arora, Cheema, Baljinder Kaur, Manjit Singh Bilaspur, Sarvjeet Kaur aur anya ne bijli tariff hike ke khilaf protest march nikala, police par dhakka-mukki ki aur water cannon ke baad pattharbazi me kai policekarmi ghayal hue. Manjit Singh Bilaspur ka naam protest netaon me darj hai — stage: HC quash order ke khilaf UT appeal abhi SC me lambit. MLA ki seedhi pratikriya is page par darj nahi hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (manjit-singh-bilaspur, Nihal Singhwala SC):
// 1. The Tribune interview 17 Apr 2022 (“Checking falling water table on top of his list”) — 37 gaon wali canal-water project ka dawa MLA ne khud apne “previous tenure” ka bataya, yani pre-term kaam; baaki sab — rural public transport ki maang, job-oriented college ka prastav, bhrashtachar-nashe ke khilaf wadde — sirf maang/ghoshna. REJECT (pre-term claim + sirf maang/ghoshna, koi lokarpan/shilanyas/swikriti nahi).
// 2. Punjabi Jagran 23 Sep 2026 — Dana Mandi Ajitwal me naye shed ka MLA dwara udghatan (post-event report, seat ke andar) — fund ya MLA ki sifarish/bhoomika ka koi khulasa article me nahi. REJECT (VALID niyam: fund+bhoomika disclosed nahi).
// 3. Punjabi Jagran 9 Oct 2026 — mata ke dehant ke bawajood logon ki samasyaen sunne ki story — human-interest, koi kaam nahi. REJECT (kaam nahi).
// 4. 5dariyanews canal campaign story — Bilaspur Minor lining Rs 2.20 crore (9.70 km, 7 gaon) ka udghatan Water Resources mantri ne kiya; MLA keval maujood. REJECT (non-whitelisted source + dusre neta ke karyakram me keval maujoodgi).
// 5. 5dariyanews — Moga jile me Rs 45 crore road repair ka shilanyas mantri Harbhajan Singh ETO ne kiya; charon Moga MLAs keval sambodhan me maujood. REJECT (non-whitelisted + dusre neta ka karyakram).
// 6. daily24x7news — power supply review meeting, mantri ke saath MLA maujood. REJECT (non-whitelisted + keval maujoodgi).
// 7. The Tribune 14 Mar 2022 — chaaron Moga MLAs ka DM/SSP se sanyukt mulakat; prashasanik baithak aur school/hospital daura. REJECT (koi bhautik kaam nahi, sirf daura/baithak).
// 8. wishavwarta.in / iglobalpunjab.com 2019 ke bayan — Lok Sabha chunav se pehle vipakshi-vidhaayak wale bayan; non-whitelisted bhi. REJECT (pre-term + source).
// 9. Assembly pad — Committee on Welfare of SCs/STs/BCs chair (2022-23), Committee on Estimates chair, Committee on Petitions chair, Panel of Chairmen (2024). REJECT (pad/niyukti, kaam nahi).
// 10. Indian Express purani report (2017-era ke 12 AAP MLAs par mamle) — usi Jan-2020 protest FIR se judi; upar entries me term-time judicial development (quash) sahit covered. REJECT (duplicacy; halafname ke pending mamle akele negative nahi).
// WORKER NOTE: 2022-27 me seat-level bhautik kaam ka koi whitelisted post-event source nahi mila; whitelisted media me MLA ka coverage lagbhag poori tarah Assembly-padon aur 2020/2021 protest FIRs ke quash hone par hi hai. tv9punjabi ka 2027-election analysis (non-whitelist) vipaksh ka aarop hai ki lagbhag ek dashak me koi bada udyog/multi-specialty hospital/sarkari college nahi bana — aarop matr, negative criteria (FIR/janch/nyayik vikas) poora nahi karta, isliye entry nahi.

// Punjab batch 7 worker: devinderjeet-singh (researched 2026-10-18) — fragment for punjab works.
// MLA: Devinderjeet Singh (prachar naam: Devinderjit Singh Laddi Dhos), Dharamkot (AAP), 2022-2027.
// RULE: every entry has a real, opened-and-read sourceUrl. Empty is better than unverified.
// import type { Work } from '../aapkaneta/src/data/pilot';
// export const punjabWorks: Record<string, Work[]> = {};

punjabWorks['devinderjeet-singh'] = [];

// REJECT-LOG (devinderjeet-singh — Devinderjit Singh Laddi Dhos, Dharamkot, AAP; researched 2026-10-18):
// NOTE: Kholkar padhe gaye whitelisted sources me Dharamkot seat ke liye is MLA ki dastaveji
// bhoomika wala koi seat-level work nahi mila. Isliye array khaali hai — khaali profile theek hai.
//
// 1. REJECT (work, seat ke bahar): The Tribune, 14 Sep 2024 — "Ahead of bypoll, govt intensifies
//    development push in Gidderbaha". Cabinet Minister Aman Arora ke saath Dharamkot MLA ne
//    Gidderbaha me 23 link roads (7 villages, ~Rs 18.57 crore) ka shilanyas kiya; isse pehle 6 Sep
//    ko ~Rs 12 crore ke kaam (10 villages). Niyam: "Seat ke bahar ka kaam entry NAHI" — Gidderbaha
//    bypoll seat hai, Dharamkot nahi. (Opened and read.)
//
// 2. REJECT (work, sirf ghoshna/priority): The Tribune, 19 Apr 2022 — "Will work towards ending
//    sand mafia says Dharamkot MLA Devinderjit Singh". Sirf priorities ka bayan (sand mafia khatm
//    karna, agro-based units, public transport, health/education sudhar) — koi concrete sanction,
//    shilanyas ya lokarpan nahi. (Opened and read.)
//
// 3. CONTEXT (work bhi nahi, negative bhi nahi — credit-cap ke liye mahatvapurna): Indian Express,
//    26 Mar 2025 — "Punjab Budget Session: 'Feel like we are living in Pakistan', AAP MLA puts own
//    govt in dock over lack of health infra" (NDTV aur Times of India me bhi yahi khabar). MLA ne
//    Vidhan Sabha me apni hi sarkar par aarop lagaya ki teen saal me Dharamkot seat ko "not even
//    one health-related project" mila; unka Dharamkot PHC upgrade/trauma centre wala VS prashn
//    par mantri ka jawab NAKARATMAK raha (koi prastav vicharadhin nahi). Isliye VS prashn ka koi
//    credit-banane layak dastaveji nateeja nahi. (IE page opened and read.)
//
// 4. REJECT (work, non-whitelist source + dusre neta ka karyakram): patialapolitics.com, 2 Mar 2023
//    — Dharamkot bus stand (Rs 1 crore se zyada lagat) ka udghatan Cabinet Minister Balkar Singh
//    ne kiya; Laddi Dhos wahan sirf maujood the. Source whitelist me nahi aur niyam ke mutabiq
//    "dusre neta ke karyakram me maujoodgi" credit nahi banata. (Snippet padha.)
//
// 5. REJECT (work, non-whitelist source + actor dusra): indiatimes.com, ~Mar 2026 — Bajeke village
//    (Dharamkot) me School of Eminence ka shilanyas CM Bhagwant Mann ne kiya (~Rs 19.76 crore).
//    indiatimes.com whitelist me nahi (whitelist me timesofindia.indiatimes.com hai); MLA ki
//    sifarish/bhoomika ka koi dastaveji ullekh nahi. (Snippet padha.)
//
// 6. REJECT (work, non-whitelist source + actor dusra): dawnpunjab.com / newznew.com /
//    5dariyanews.com, 14 Dec 2023 — "Punjab's largest treated water irrigation project" (Rs 12.87
//    crore, NABARD; Ajit Garh, Bukkanwala, Singhawala, Ghall Kalan) ka shilanyas Cabinet Minister
//    Chetan Singh Jauramajra ne kiya; Laddi Dhos ne sirf sarkar/mantri ka dhanyavaad diya. Teeno
//    source whitelist me nahi; woh kaam ke actor bhi nahi. (Snippet padha.)
//
// 7. REJECT (NEGATIVE, pre-term + halafnama clean): Hindustan Times, 7 Aug 2013 — "PPP objecting".
//    Dharamkot area me PPP-Akali supporters ke beech 30 Jul 2013 ke takrav wale mamle me PPP youth
//    leader "Davinderjeet Laddi Dhose" ko bhi book kiya gaya tha. Ye 2013 ka PRE-TERM mamla hai;
//    karyakaal (Mar 2022+) me koi legal development (chargesheet/trial/janch) nahi mili, aur
//    halafnama (myneta candidate_id=55) me criminalCases: 0 hai. Niyam: "Pre-term mamla tabhi jab
//    karyakaal me legal development" — isliye negative NAHI. Page khul nahi saka (HTTP 402) —
//    snippet se judgment liya gaya.
//
// 8. REJECT (NEGATIVE, pehchan mismatch): Search me mile doosre "Laddi" naam ke mamle — Hardev Singh
//    Laddi (Congress, Shahkot bypoll; 2018 illegal sand mining FIR), Harjinder Singh @Laddi
//    (Haryana NDPS case 2018), Jaswant Singh Laddi — ye sab alag vyakti/alag seat ke hain,
//    Dharamkot ke MLA nahi. (Search snippets padhe.)
//
// NEGATIVE SEARCH NOTE: "Laddi Dhos" + FIR/case/controversy/booked/chargesheet aur full-name
// "Devinderjit Singh Dhos Dharamkot MLA booked FIR police case" dono searches me is MLA ke
// khilaf karyakaal ka koi FIR/chargesheet/janch wala mamla nahi mila. Halafnama me criminal
// cases: 0. Isliye negatives bhi 0.
// ---- PB8: Ferozepur (4 MLA) ----
// PB8 worker — naresh-kataria (Zira, Ferozepur, AAP)
// Pehchan: MLA Naresh Kataria, AAP, Zira (Ferozepur) — MLA Mar 2022 se.
// Teenon entries Amar Ujala video pages se, page header dates se pakki:
// 25 Aug 2026 (udghatan, Varnala), 26 Jun 2025 (70 lakh karya shuruaat), 20 Nov 2025 (stadium shilanyas).
punjabWorks['naresh-kataria'] = [
  { title: 'Zira MLA Naresh Kataria ne Varnala gaon me bane Mukhyamantri Khel Maidan ka udghatan kiya; maidan me chardeevari, baithne ki vyavastha, gym, floodlights aur volleyball-badminton ki suvidhaen hain', category: 'Any', badge: 'news', sourceLabel: 'Amar Ujala', sourceUrl: 'https://www.amarujala.com/video/punjab/chandigarh-punjab/video-mla-inaugurated-chief-ministers-sports-ground-in-varnala-village-zira-2026-08-25', date: '2026-08-25', note: 'Amar Ujala (25 Aug 2026) ke anusaar: Ferozepur ke Zira halke ke Varnala gaon me bane Mukhyamantri Khel Maidan ka MLA Naresh Kataria ne udghatan kiya; yuvaon-bachchon ke liye sabhi zaroori intezam kiye gaye, chardeevari ke saath baithne ki vyavastha, gym, raat me khel jaari rakhne ke liye floodlights, aur volleyball-badminton ki suvidha uplabdh hai; Kataria ne kaha kshetra ke kai anya gaonon me bhi aise hi khel maidan banaye ja rahe hain. Caveat: 20 Nov 2025 ko isi halke me lagbhag Rs 62 lakh ki lagat wale ek stadium ka Kataria ne shilanyas rakha tha — samaykram ke hisab se Varnala wala maidan wahi pariyojna ho sakti hai (shilanyas se udghatan tak lagbhag 9 mahine), lekin entry-3 ki report me gaon ka naam darj nahi hai isliye dono reports ko ek dusre se pakki tarah joda nahi ja sakta; dono entries alag rakhi gayi hain.', period: '2022-2027', stage: 'lokarpan' },
  { title: 'Zira MLA Naresh Kataria ne Rs 70 lakh ki lagat se shuru hone wale vikas karyon ki shuruaat karwai; sadakon ka nirmaan shuru kar diya gaya', category: 'Sadak', badge: 'news', sourceLabel: 'Amar Ujala', sourceUrl: 'https://www.amarujala.com/video/punjab/chandigarh-punjab/video-mla-started-development-work-worth-rs-70-lakh-in-jeera-2025-06-26', date: '2025-06-26', note: 'Amar Ujala (26 Jun 2025) ke anusaar: Ferozepur ke Zira halke me MLA Naresh Kataria ne Rs 70 lakh ki lagat se shuru hone wale vikas karyon ki shuruaat karwai; unhone kaha Bhagwant Mann ki sarkar Zira me hone wale jitne bhi vikas karya hain, unhe poora karwayegi aur sadakon ka nirmaan shuru kar diya gaya hai; vaade ke mutabiq Zira halke ke sabhi vikas karya samay par poore kiye jayenge; is mauke par Nagar Council ke pradhan sahit anya ganmanya log maujood the.', period: '2022-2027', stage: 'pahal' },
  { title: 'Zira MLA Naresh Kataria ne lagbhag Rs 62 lakh ki lagat se banne wale stadium ka shilanyas rakha', category: 'Any', badge: 'news', sourceLabel: 'Amar Ujala', sourceUrl: 'https://www.amarujala.com/video/punjab/chandigarh-punjab/video-mla-laid-the-foundation-stone-of-the-stadium-in-jira-2025-11-20', date: '2025-11-20', note: 'Amar Ujala (20 Nov 2025) ke anusaar: Ferozepur ke Zira halke me MLA Naresh Kataria ne stadium ka shilanyas rakha; Kataria ne kaha stadium ke nirmaan me lagbhag Rs 62 lakh ki lagat aayegi aur stadium banne par naujawan yahan khelenge aur nashe se door rahenge. Caveat: 25 Aug 2026 ko Zira ke Varnala gaon me Mukhyamantri Khel Maidan ka Kataria ne udghatan kiya tha — samaykram ke hisab se wahi pariyojna ho sakti hai (Nov 2025 shilanyas se Aug 2026 udghatan tak lagbhag 9 mahine), lekin is report me gaon ka naam darj nahi hai isliye dono reports ko ek dusre se pakki tarah joda nahi ja sakta; dono entries alag rakhi gayi hain.', period: '2022-2027', stage: 'shilanyas' },
];

// REJECT LOG:
// R-1. Babushahi (27 Feb 2026) — Zila Parishad/Panchayat Samiti sadasyon ka shapath-samaroh: Kataria sirf vishesh atithi ke roop me maujood the; maujoodgi matra, koi vikas karya nahi. REJECT.
// R-2. The Tribune (Sep 2026) — sadak haadse ke baad Kataria ne aspatal jakar shok-santapt parivaron se mulakat ki: shok-mulakat, koi karya nahi. REJECT.
// R-3. CityAirNews (26 May 2026) — Zira nagarpalika chunav hinsa ki report: Kataria ne ghayal AAP karyakarta ko aspatal pahunchaya; chunav ghatna, koi vikas karya nahi. REJECT.
// R-4. YesPunjab (20 Jun 2025) — Rs 14.27 crore ka Mudki treated-canal-water project: shilanyas mantri Ravjot Singh ne rakha, Kataria sirf vishesh atithi; Mudki Ferozepur Rural seat me hai, Zira me NAHI; dusre neta ka karyakram + seat ke bahar. REJECT.
// R-5. Kulbir Singh Zira (purva Congress MLA) ke 'fake plot certificates' ke aarop: koi FIR/janch/adhyadeshit vikas dastaveji nahi; negative rule — shikayat/maang akele negative nahi. REJECT.
// R-6. HT panchayat-polls FIR ('750 unidentified persons'): Kataria ka naam aaropi column me darj nahi; negative entry ke layak nahi. REJECT.

// PB8 worker — ranbir-singh (Firozpur City, AAP, tenure Mar 2022+)
// MLA record: ~/workspace/aapkaneta/src/data/punjab.ts (slug 'ranbir-singh'); prachar naam: Ranveer Singh Bhullar.
// Researched 2026-10-18. Whitelist outlets (The Tribune/IE/HT/TOI/NDTV/India Today/Dainik Bhaskar/Jagran/Amar Ujala/PTI)
// par is MLA ke naam par post-event works reporting lagbhag shunya mili; adhiktar coverage babushahi.com /
// cityairnews.com / newsonradar.com (sab NON-WHITELIST) par hai.
// RESULT: 2 work entries (dono Punjabi Jagran — Dainik Jagran samuh ka Punjabi sanskaran; whitelist me "Dainik Jagran"
// darj hai; parent is sweekriti ki pushti kare), 0 negatives.
punjabWorks['ranbir-singh'] = [
  {
    title: 'MLA Ranbir Singh Bhullar ne Ferozepur Rural ke MLA Rajneesh Dahiya ke saath milkar Ferozepur jile me 6 naye Aam Aadmi Clinic ka uddghatan kiya — clinic gaon Mahalum, Sudh Singh Wala, Sur Singh Wala, Katora, Ruknewala aur Khilchian Kadeem me khule, jisse jile me aise clinic ki kul sankhya 31 se badhkar 37 ho gayi.',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Punjabi Jagran',
    sourceUrl: 'https://www.punjabijagran.com/punjab/firozpur-mlas-ranbir-bhullar-and-rajneesh-dahiya-inaugurated-6-new-aam-aadmi-clinics-9697770.html',
    date: '2026-10-14',
    note: 'Punjabi Jagran (Ferozepur, 14 Oct 2026, page kholkar padha): uddghatan Firozpur Shehri halke ke MLA Ranbir Singh Bhullar aur Firozpur Dehati halke ke MLA Rajneesh Dahiya ne sanyukt roop se kiya; Assistant Civil Surgeon Dr. Sushma Thakkar aadi adhikari maujood the. Clinic Punjab sarkar ki Aam Aadmi Clinic yojna ke hain — 46 prakar ke test aur 100 se zyada dawaiyan muft, koi parchi fees nahi (yojna ki prakriti source ke kathan anusar). Credit capped: in 6 gaon me se kaun-kaun se Firozpur City seat me aate hain, ye source me darj nahi hai — shrey sanyukt uddghatan tak seemit hai. Date seedha page ke publish date se li gayi hai (kono inference nahi).',
    period: '2022-2027',
  },
  {
    title: 'MLA Ranbir Singh Bhullar ne Ferozepur shahar ke aitihasik Multani Gate chowk par Shaheed-e-Azam Sardar Bhagat Singh ke aadamkad butte ka shubh-uddghatan kiya, jo unke janm-divas ke avsar par sthapit kiya gaya tha.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Punjabi Jagran',
    sourceUrl: 'https://www.punjabijagran.com/punjab/firozpur-mla-ranbir-bhullar-inaugurates-lifesize-statue-of-shaheedeazam-sardar-bhagat-singh-at-multani-gate-9689008.html',
    date: '2026-09-28',
    note: 'Punjabi Jagran (Ferozepur, 28 Sep 2026, page kholkar padha): butta Ferozepur shahar ke Multani Gate chowk par sthapit hai (seat ke andar hai); uddghatan avsar par MLA ne shahar ke sundarikaran aur vikas-karyon ke jaari rehne ki baat kahi, aur Market Committee Ferozepur Shehar ke chairman aadi maujood the. Fund/scheme disclosure: ye butta ‘Rangla Punjab’ scheme ke tahat laga hai — Punjab me ye scheme Deputy Commissioners ke through chalti hai, paisa seedha MLA ko nahi milta. Media me MLA ki dastaveji bhoomika uddghatan tak hai; shrey capped. Date seedha page ke publish date se li gayi hai (kono inference nahi).',
    period: '2022-2027',
  },
];

// Fragment: Rajneesh Kumar Dahiya (AAP, Firozpur Rural (SC)) — constituency works
// Researched 2026-10-18. MLA confirmed: AAP, Firozpur Rural (SC), MLA since Mar 2022; no minister status.
// RESULT: 0 qualifying works, 0 negatives. Whitelist media has no post-event
// post-term reporting of a physical government work by this MLA with disclosed fund and role.
punjabWorks['rajneesh-kumar-dahiya'] = [];

// Fragment: Fauja Singh Sarari (AAP, Guru Har Sahai, Ferozepur) — constituency works
// Researched 2026-10-18. MLA confirmed from ~/workspace/aapkaneta/src/data/punjab.ts
// (slug fauja-singh): AAP, Guru Har Sahai, MLA since Mar 2022; cabinet minister
// (Horticulture/Food Processing) Jul 2022 – Jan 2023, then resigned; NOT a minister now.
// RESULT: 0 qualifying works, 0 negatives. Whitelist media has no post-event
// reporting of a physical government work by this MLA in Guru Har Sahai with
// disclosed fund and personal role.
punjabWorks['fauja-singh'] = [];

// ---- PB8: Fazilka (4 MLA) ----
// Fragment: Jagdeep Kamboj (Goldy) (AAP, Jalalabad) — constituency works
// Researched 2026-10-18. MLA confirmed via punjab.ts (slug jagdeep-kamboj-goldy):
// AAP, Jalalabad, MLA Mar 2022 se; koi mantri-status nahi.
// RESULT: 2 qualifying works, 0 negatives.
punjabWorks['jagdeep-kamboj-goldy'] = [

  { title: 'Jagdeep Kamboj Goldy ne 11 March 2024 ko apni Jalalabad seat ke Jalalabad shahar me lagbhag Rs 3 crore ke ‘rehri’ (street-vendor) market ka shilanyas kiya — platform, steel cover, sheds, sadken aur footpath banenge, aur maqsad chhote vendors ke jeevika-paristhitiyon me sudhar bataya gaya.', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/mla-lays-foundation-stone-of-rehri-market-599588/', date: '2024-03-11', note: 'Cited page ke anusar: dateline Fazilka, March 11 — \"today\" (2024-03-11 Monday thi, date -d se verified); MLA ne vyaktigat roop se Jalalabad town me rehri market ka shilanyas kiya; lagat Rs 3 crore; platform, steel cover, sheds, roads, footpaths; maqsad chhote vendors ka utthan aur \"buyers shall be provided every commodity under one roof\". Credit: MLA ka vyaktigat shilanyas, fund disclosed (fund source cited page par specify nahi).', period: '2022-2027', stage: 'shilanyas' },

  { title: 'Usi din Jagdeep Kamboj Goldy ne Jalalabad shahar me sports enthusiasts aur kishoron ke liye Rs 1.5 crore ke synthetic badminton court ka bhi shilanyas kiya.', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/mla-lays-foundation-stone-of-rehri-market-599588/', date: '2024-03-11', note: 'Cited page ke anusar: upar wali hi report me — \"The MLA said that a synthetic badminton court is being set up for sports enthusiasts and teenagers in the town at the cost of Rs 1.5 crore\" aur \"The MLA also laid the foundation stone of the court today\" (2024-03-11 Monday thi, verified). Credit: MLA ka vyaktigat shilanyas, fund disclosed (fund source cited page par specify nahi).', period: '2022-2027', stage: 'shilanyas' },

];

// Fazilka — Narinder Pal Singh Sawna (AAP, MLA Mar 2022 se; koi mantri-pad nahi) — works researched 2026-10-18 — DO NOT export; appended to works_punjab.ts
punjabWorks['narinder-pal-singh-sawna'] = [
  {
    title: 'Fazilka sarkari aspataal me Rs 1 crore ki lagat se bane facilitation centre ka MLA Narinder Pal Singh Sawna dwara lokarpan — marizon ko ek hi jagah jankari, dakhla-parchi aur sewaen',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Punjabi Jagran (Dainik Jagran), 12 Oct 2026',
    sourceUrl: 'https://www.punjabijagran.com/punjab/fazilka-mla-narinderpal-singh-sawna-inaugurates-a-facilitation-centre-built-at-a-cost-of-1-crore-at-fazilka-government-hospital-9696630.html',
    date: '2026-10-12',
    note: 'Punjabi Jagran (12 Oct 2026) ki post-event report ke mutabik, Fazilka ke sarkari aspataal me Rs 1 crore ki lagat se bane naye facilitation centre ka shubharambh MLA Narinder Pal Singh Sawna ne kiya; unki patni bhi maujood thi. Centre me mariz ek hi sthan par jaroori jankari, dakhla-parchi (registration slips) aur anya sewaen pa sakenge, jisse alag-alag counteron par bhatakne se rahat milegi. Status: lokarpan (nirman purn, janata ko samarpit). Caveat: fund source khabar me disclosed nahi hai — Rangla Punjab Vikas Scheme ya kisi anya mad ka naam report me nahi aaya; isliye badge news hai, sarkari nahi.',
    period: '2022-2027',
  },
  {
    title: 'Feb 2023 ke Chandigarh virodh-pradarshan mamle me Chandigarh court ne Fazilka MLA Narinder Pal Singh Sawna sahit 10 AAP netaon par IPC dharaon me aarop tay kiye — trial Jan 17, 2026 se shuru hona tha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express, 4 Jan 2026',
    sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/charges-framed-against-10-aap-leaders-for-scuffles-with-cops-violating-dms-orders-10454274/',
    date: '2026-01-04',
    note: 'Indian Express (4 Jan 2026) ke mutabik, Chandigarh District Court ne 12 Feb 2023 ko Chandigarh ke Sector 37 me Punjab BJP office ke bahar hue virodh-pradarshan se jude mamle me Fazilka ke MLA Narinder Pal Singh sahit 10 AAP netaon par IPC ki dharaon 147, 149, 323, 332, 353 aur 188 ke tahat aarop tay kiye; trial Jan 17 (2026) se shuru hona tha. Sector 39 police station ne FIR darj ki thi — aarop: police karmiyon se dhakka-mukki, police par hamla, aur District Magistrate ke prabandhakari aadeshon ka ullanghan; pradarshan me kendreeya sarkar par Adani-samuh ko tarjeeh dene ka aarop lagaya gaya tha. Stage ka sach: aarop tay hue hain — dosh-siddhi NAHI; court ka detailed order us samay awaited tha. Khabar me MLA ka jawab uddhrit nahi hai. Pehchan seat se pakki: khabar me ‘MLA from Fazilka’ + ‘Narinder Pal Singh’ likha hai.',
    period: '2022-2027',
  },
];

// PB8 worker — sandeep-jakhar (Abohar, Fazilka)
// Pehchan (foundation record ~/workspace/aapkaneta/src/data/punjab.ts, slug 'sandeep-jakhar'):
// Sandeep Jakhar, INC, Abohar se MLA (Mar 2022 se); 2022 me 49,924 vote, Deep Kamboj
// (AAP) ko 5,471 maton se haraya. 2023 me BJP ka samarthan karne par INC se nishkashit.
// 5 valid work entries (sabhi me shrey capped: prastav/sawal/vakaalat ke dastaveji
// nateeje; amal sarkar/police ne kiya). Negatives: 0 (koi FIR/chargesheet/janch nahi mili;
// Aug 2023 ka Congress nilamban party karyawahi matra hai).
punjabWorks['sandeep-jakhar'] = [
  { title: 'Abohar Minor nahar ke punarnirman ka prastav Sandeep Jakhar ne diya, jis par Punjab sarkar ne Rs 2.05 crore ki cement-concrete pariyojna shuru ki; MLA ne kisanon aur adhikariyon ke saath nirman kary ka nirikshan bhi kiya', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/punjab-govt-to-invest-rs-2-cr-to-rebuild-abohar-canal', date: '2025-02-04', note: 'The Tribune (4 Feb 2025) ke anusaar: lagbhag 50 saal purani Abohar Minor (branch canal) ka punarnirman Punjab sarkar ne shuru kiya; pehle eent-astari thi, ab seepage rokne ke liye cement-concrete system apnaya gaya; pichhli sarkar ka marammat-anudan lauta diya gaya aur cement-concrete nahar ka prastav rajya sarkar ko diya gaya, jo ab Rs 2.05 crore me ho raha hai; MLA ne adhikariyon ko nirdhanusar fund upyog ki hidayat di aur Punjab sarkar ka dhanyavad kiya. Shrey capped: kaam sarkar kara rahi hai; MLA ki bhoomika prastav aur nirikshan tak.', period: '2022-2027', stage: 'kaam-shuru' },
  { title: 'MLA ka dawa — Khuian Sarwar aur Telupura gaon ka Rs 6.61 crore wala common water works, jo sarkar badalne par ruk gaya tha, unke prayason se dobara shuru hua; lagbhag 1,214 parivaron ko peene ka paani milega', category: 'Paani', badge: 'dawa', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/water-supply-project-delayed-says-mla-643716', date: '2024-07-26', note: 'The Tribune (27 Jul 2024; Abohar, 26 Jul) me MLA ke bayan ke anusaar: dono gaon ke liye common water works 2021 me (pichhli sarkar dwara) Rs 6.61 crore me shuru hua tha, sarkar badalne par kaam ruk gaya, aur ‘bahut prayason’ ke baad ab dobara shuru hua hai; MLA ne nirmanadhin site ka daura kiya; unke anusaar RCC storage tank ka nirmaan sarkar ne rok diya hai. Dhyan rahe: dobara shuru hone ka shrey keval MLA ke apne dawe par aadharit hai, aur mool swikriti 2021 ki (karyakaal se pehle ki) hai.', period: '2022-2027', stage: 'kaam-shuru' },
  { title: 'Vidhan Sabha me Sandeep Jakhar ke sawal par khanan mantri Gurmeet Singh Meet Hayer ne sweekar kiya ki Mansa, Barnala, Sangrur aur Fazilka jilon me ret-bajri sarkari bhav se unche daam par bik rahi hai', category: 'Any', badge: 'news', sourceLabel: 'The Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/chandigarh/sandeep-jakhar-punjab-assembly-gurmeet-singh-meet-hayer-illegal-mining-8993066/lite/', date: '2023-10-21', note: 'Indian Express (21 Oct 2023) ke anusaar: (tatkalin nilambit) Congress MLA Sandeep Jakhar ne mining licenses ke sawal ke saath apne kshetra aur jile me avaidh ret khanan ka mudda uthaya aur sarkari janch ki maang ki; unhone sarkari bhav Rs 5.50 prati cubic feet ke mukable Rs 38-40 par bikri ka sawal uthaya; mantri ne maana ki kuch jilon me unche bhav hain aur Mansa, Barnala, Sangrur aur Fazilka ka naam liya. Shrey capped: nateeja mantri ka sadan me sweekar hai; MLA ki bhoomika sawal uthane tak.', period: '2022-2027' },
  { title: 'Sandeep Jakhar ke Vidhan Sabha sawal ke jawab me mantri Mohinder Bhagat ne bataya ki Abohar me waterlogging aur bagwani vikas ke liye Rs 27.7 crore ki pariyojna chal rahi hai — pehle charan me 27 gaon, dusre charan me 15 aur gaon judege', category: 'Any', badge: 'news', sourceLabel: 'The Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/chandigarh/rs-27cr-project-underway-to-boost-horticulture-in-abohar-minister/articleshow/129350302.cms', date: '2026-03-09', note: 'TOI (9 Mar 2026) ke anusaar: Abohar MLA ke sawal ke jawab me mantri Mohinder Bhagat ne sadan me bataya ki Soil and Water Conservation vibhaag Abohar kshetra me pariyojna chala raha hai; pehle charan me 27 gaon me lagbhag Rs 27.7 crore ka kaam shuru ho chuka hai aur dusre charan me 15 gaon aur shamil honge. Shrey capped: pariyojna rajya sarkar ki hai; MLA ki bhoomika sawal ke madhyam se mudda uthane tak.', period: '2022-2027', stage: 'kaam-shuru' },
  { title: 'Sandeep Jakhar ke CM aur DGP ko tag karke mudda uthane aur SP se milne ke baad Abohar ke Indira Nagari me police ne nasha-tasraron ke khilaf vishesh abhiyan chalaya, jisme aath logon par BNS ki dharaon me mamle darj hue', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/police-crack-down-on-drug-peddlers-in-abohar/amp/', date: '2026-04-11', note: 'The Tribune (11 Apr 2026) ke anusaar: MLA ne ‘Drug whistle-blower assaulted in Abohar’ report social media par CM aur DGP ko tag karke uthayi aur Indira Nagari ki mahilaon ke saath SP Ashwant Singh se mile; uske baad City-1 police ne vishesh abhiyan chalaya (Indira Nagari, Krishna Nagri, Kalyan Bhumi Road, Sabzi Mandi Chowk me gasht); aath logon par BNS dhara 128/170 ke tahat mamle darj hue aur bina number-plate ki motorcycles zabt ki gayin. Shrey capped: karyavahi police ki hai; MLA ki bhoomika vakaalat (tag + SP se mulakat) tak.', period: '2022-2027', stage: 'poora' },
];
// WORKER: sandeep-jakhar (Abohar, INC→BJP; 2023 me INC se nishkashit) — 5 valid work entries:
// (1) Abohar Minor punarnirman Rs 2.05 crore, prastav MLA ka, kaam sarkar ka (Tribune, Feb 2025);
// (2) Khuian Sarwar–Telupura water works dobara shuru Rs 6.61 crore — MLA ka dawa (Tribune, Jul 2024);
// (3) Vidhan Sabha me avaidh khanan sawal, mantri ne unche ret-bhav maane (IE, Oct 2023);
// (4) horticulture/waterlogging pariyojna Rs 27.7 crore, 27+15 gaon — sawal par mantri ka jawab (TOI, Mar 2026);
// (5) nasha-tasraron par police abhiyan, MLA ki vakaalat ke baad (Tribune, Apr 2026).
// Negatives: 0. Retry-leads: (a) IE profile (23 Sep 2022) ka poora text — works suchi (college/canal/mandi/school/water works/sewage/stadium/road) snippet me hai, page truncated khula; (b) Tribune ‘MLA hands over list of incomplete works to CM’ (14 Mar 2024) — publish.tribuneindia.com par 403, canonical https://www.tribuneindia.com/news/mla-hands-over-list-of-incomplete-works-to-cm-600608/ se retry; (c) Sappanwali Veterinary College, Abha Square (Mini Secretariat), Nehru Stadium, bus stand renovation ki sthiti — abhi sirf face2news; (d) Khuian Sarwar water works poornata ka follow-up; (e) Dainik Bhaskar/Dainik Jagran/Amar Ujala Abohar sanskaran me shilanyas/lokarpan coverage.
// R-1. The Tribune (27 Feb 2023) — Patrewala mega water works Rs 578.28 crore, L&T contract: CM Mann ne shilanyas kiya; pichhli sarkar ne approve kiya tha; MLA ne sirf CM ka dhanyavad kiya. Vyaktigat bhoomika dastaveji nahi. REJECT.
// R-2. The Tribune (9 Jan 2024) — Bhangarkhera Minor nirikshan (Rs 30 lakh) + 6 nahari pul (Rs 20 lakh): sirf nirikshan/daura; MLA ke prastav ka dawa 2008 ka (pre-term). REJECT.
// R-3. The Tribune (14 Mar 2024) — CM ko adhuri works ki suchi (bus stand Rs 70 lakh, purana grain market Rs 72 lakh, water works tank): page 403 par block, khul nahi paya; snippet me sirf maang + CM ashwasan. REJECT (retry lead).
// R-4. The Tribune (2 Mar 2024) — Seed Farm bypass (Bharatmala) ke liye muavze ka CM ko patra: sirf maang. REJECT.
// R-5. The Tribune (3 Apr 2026) — Aug 2025 barish se fasal nuksan ka muavza: sirf maang. REJECT.
// R-6. The Tribune (~Sep 2024) — paanch gaon (Patti Billa, Dalmir Khera, Sappanwali, Gidderanwali, Daulatpura) waterlogging par DC ko gyapan: sirf maang. REJECT.
// R-7. The Tribune (9 Feb 2026) — STP-to-Sayeed Wala pipeline Rs 37.46 crore (UIDF, 80% Union): kendriya pariyojna; MLA ne sirf lagat-sharing batayi; vyaktigat bhoomika dastaveji nahi. REJECT.
// R-8. Isi article me — PMAY-Rural: Khuian Sarwar block me 200 labharthi, Rs 1.40 crore DBT: kendriya yojana, vyaktigat bhoomika nahi. REJECT.
// R-9. face2news — Jakhar Trust eye camp (300 patients): non-whitelist + daan/rahat kaam. REJECT.
// R-10. The Tribune (19 May 2026) — BJP ka AAP ke khilaf ‘chargesheet’/‘Sankalp Patra’: rajneetik event, vikas kaam nahi. REJECT.
// R-11. face2news — ‘4.5 year report card’ maang: non-whitelist + sirf maang. REJECT.
// R-12. Indian Express profile (23 Sep 2022) — works suchi (college, canals, mandi, schools, water works, sewage, stadiums, roads): page truncated khula, snippet-only; interview dawa; pre-term/term timing aspasht. REJECT (retry lead).
// R-13. YesPunjab/babushahi/patialapolitics — horticulture Rs 27.73 crore: non-whitelist; wahi event TOI me covered (entry 4). REJECT (duplicate source).
// R-14. PTI/ThePrint (Oct 2026) — NIA/ED janch ki maang: Sunil Jakhar (Punjab BJP chief) ke bayan, Sandeep Jakhar ke nahi; galat pehchan ka jokhim. REJECT.
// R-15. The Tribune (Nov 2024) — Abohar marathon / ‘Apna Abohar Apni Abha’ abhiyan: samajik abhiyan, bhautik sarkari sanrachna nahi. REJECT.
// R-16. Aug 2023 — Congress se nilamban (anti-party activities): party karyawahi akele negative nahi. REJECT (negative-entry).

// Fragment: Amandeep Singh Goldy Musafir (AAP, Balluana (SC)) — constituency works
// Researched 2026-10-18. MLA confirmed: AAP, Balluana (SC), Fazilka district, MLA since Mar 2022; no minister status.
// RESULT: 1 qualifying work, 0 negatives.
punjabWorks['amandeep-singh-goldy-musafir'] = [
  {
    title: 'Ramsara Minor nahar ke navinikaran ke liye sarkar ne Rs 9.5 crore ka grant jaari kiya, jisse Balluana ke tail-end gaon ko sinchai ka paani milega',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/rs-9-5-crore-for-ramsara-canal-reconstruction-467106/',
    date: '2023-01-04',
    note: 'The Tribune (Abohar, 3 Jan 2023) reports: Ramsara Minor ka ek hissa pehle concrete-lining me tha, lekin baaki kaam ke liye fund nahi tha; MLA ne 17 May (2022 — varsh inferred, disclose kiya gaya) ko CM Bhagwant Mann ko patra likha, phir CM aur Irrigation Minister Harjot Singh Bains se is mamle me mila; uske baad sarkar ne Rs 9.5 crore ka grant jaari kiya. Paisa Punjab sarkar ka hai; MLA ka shrey sirf sifarish/pehravi tak seemit (credit capped).',
    period: '2022-2027',
    stage: 'swikrit',
  },
];

// ---- PB8: Sri Muktsar Sahib (4 MLA) ----
// Fragment: Gurmeet Singh Khudian (AAP, Lambi, Muktsar) — constituency works
// Researched 2026-10-18. MLA confirmed via foundation record (src/data/punjab.ts,
// slug: 'gurmeet-singh-khudian'): AAP, Lambi, MLA since Mar 2022; Cabinet Minister
// (Agriculture, Animal Husbandry, Food Processing). Scope: SIRF Lambi seat ke kaam;
// mantri-portfolio ki rajya-neetiyan/kisan-kalyan faisle entry NAHI.
// RESULT: 0 qualifying works, 0 negatives. Whitelist media me Mar 2022 ke baad Lambi
// seat ke liye MLA dwara vyaktigat lokarpan/shilanyas wala koi bhautik sarkari karya
// (fund+bhoomika sahit, post-event reporting) nahi mila. MLA ne khud Indian Express
// (The House of Punjab, 2022) me kaha tha: unhein apne kshetra me shilanyas rakhwane
// par vishwas nahi hai. Unka zyada tar documented kaam Krishi Mantri ke roop me rajya
// star par hai (mandi-link sadken, pashu aspatal IPD, labs), jo iss scope se bahar hai.
punjabWorks['gurmeet-singh-khudian'] = [];

// Fragment: Hardeep Singh Dimpy Dhillon (AAP, Gidderbaha, Muktsar) — constituency works
// Researched 2026-10-18. MLA confirmed from ~/workspace/aapkaneta/src/data/punjab.ts
// (slug hardeep-singh-dimpy-dhillon): AAP, Gidderbaha, MLA since Nov 2024 bypoll
// (voting 20.11.2024; oath 02.12.2024; earlier SAD, joined AAP 28.08.2024). Tenure Nov 2024+.
// RESULT: 1 qualifying work (news), 0 negatives, 14 rejects.
punjabWorks['hardeep-singh-dimpy-dhillon'] = [
  {
    title: 'Hardeep Singh Dimpy Dhillon ne Gidderbaha Civil Hospital me 50-bed wale Critical Care Unit (CCU) ka shilanyas kiya (lagat Rs 16.73 crore; Pradhan Mantri Ayushman Bharat Health Infrastructure Mission ke tehat; samaroh Lok Nirman Vibhag ne aayojit kiya).',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/bathinda/foundation-stone-laid-for-ccu-in-gidderbaha-amid-ongoing-location-controversy/',
    date: '2025-05-21',
    note: 'The Tribune (22 May 2025) reports: MLA ne Civil Hospital parisar me 50-bed CCU ka shilanyas kiya; pariyojna Rs 16.73 crore ki hai aur Pradhan Mantri Ayushman Bharat Health Infrastructure Mission (PM-ABHIM) ke tehat banni hai. Samaroh Lok Nirman Vibhag (PWD) ne aayojit kiya (SMO Dr Rashmi Chawla ne Tribune ko yehi bataya). MLA ne CM Bhagwant Singh Mann ko pariyojna ke samarthan ke liye dhanyavad diya. DATE INFERRED: article 22 May 2025 (Thursday) ko publish hua aur samaroh ko ‘Wednesday’ likhta hai — isliye date 21 May 2025 maani gayi. VIVAAD DISCLOSED: CCU ke sthan par vivaad hai — Muktsar ke Anurag Sharma ne Punjab and Haryana High Court me PIL dayar ki (CCU ko Muktsar district hospital se Gidderbaha sthanantar karne ke khilaf); Apr 30 ko court ne jawab manga, May 20 ko sunvai tay hui, aur PIL 22 July tak sthagit hui — pariyojna nyayik vivaad ke adheen hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
];

// Fragment: Dr. Baljit Kaur (AAP, Malout (SC), Muktsar district) — constituency works
// Researched 2026-10-18. MLA confirmed from ~/workspace/aapkaneta/src/data/punjab.ts
// (slug baljit-kaur): AAP, Malout (SC), MLA since Mar 2022; cabinet minister
// (Social Justice, Women and Child Development). SIRF Malout seat ke kaam;
// vibhagiya rajya-faisle entry NAHI.
// RESULT: 0 qualifying works, 0 negatives. Her Malout constituency works are
// reported only on non-whitelisted portals (yespunjab, brightpunjabexpress,
// babushahi, patialapolitics, 5dariyanews, dainiksaveratimes, sachkahoon,
// wishavwartatimes, indiathisweek, pinewz, newindian, cityairnews). No
// whitelisted outlet (The Hindu/Indian Express/HT/NDTV/India Today/TOI/
// Tribune/Bhaskar/Jagran/Amar Ujala/PTI-on-established) carries post-event
// reporting of a physical government work by her in Malout with disclosed
// fund and personal role, and no punjab.gov.in DIPR release surfaced.
punjabWorks['baljit-kaur'] = [];

// PB8 worker — jagdeep-singh-kaka-brar (Muktsar, AAP)
// Pehchan pakki: punjab.ts (slug jagdeep-singh-kaka-brar): AAP, Muktsar,
// MLA Mar 2022 se, koi mantri pad nahi, halafname me 0 criminal cases.
// Khaali profile nahi — 3 entries mili: 2 'dawa' (MLA ke apne bayan, The Tribune interview
// 26 Apr 2024) + 1 'news' (Tribune-reported heritage-makeover prastav, Sep 2025, credit capped).
// Negatives: 0 — halafname me 0 cases; TOI candidate overview (2024 LS) bhi 'No criminal cases';
// whitelist media me FIR/arrest/chargesheet ka koi mamla nahi mila.
punjabWorks['jagdeep-singh-kaka-brar'] = [
  { title: 'MLA ka dawa — The Tribune se baatcheet me Kaka Brar ne kaha ki unhone Thandewala gaon me saal-bhar ki waterlogging ki samasya rokne ke liye pipeline lagwai', category: 'Paani', badge: 'dawa', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/good-rail-link-for-border-belt-my-priority-614690/amp', date: '2024-04-26', note: 'MLA ka dawa — iska ekmatra aadhaar 26 Apr 2024 ko The Tribune me chhapa MLA ka apna bayan hai (Ferozepur LS ummeedvar ke roop me interview). Swatantra pushti, rakam, ya shilanyas/lokarpan ka dastavez article me nahi diya gaya.', period: '2022-2027' },
  { title: 'MLA ka dawa — Muktsar shahar me sewage-mishrit peya-jal ki samasya ke liye nai pipelines bichhai gain aur Sirhind feeder se seedhe pani ki aapurti ke liye Municipal Council se atka fund chhudwaya gaya', category: 'Paani', badge: 'dawa', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/good-rail-link-for-border-belt-my-priority-614690/amp', date: '2024-04-26', note: 'MLA ka dawa — iska ekmatra aadhaar 26 Apr 2024 ko The Tribune me chhapa MLA ka apna bayan hai. MLA ke anusaar Municipal Council pichhle 2 saal se fund jari nahi kar rahi thi, jo unke hastakshep se jari hua. Swatantra pushti ya rakam article me nahi di gayi.', period: '2022-2027' },
  { title: 'Kaka Brar ke prastav ke baad Punjab Heritage and Tourism Promotion Board ne Gurdwara Tutti Gandi Sahib ke aas-paas heritage makeover ki yojana ki samiksha ki; MLA ke anusaar iske liye zaroori funds uplabdh karaye ja rahe hain', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/bathinda/muktsar-gurdwara-surroundings-to-get-heritage-makeover/', date: '2025-09-01', note: 'The Tribune (1 Sep 2025) ke anusaar: sthaniya MLA ke prastav ke baad Board ke adviser Deepak Bali ne gurdwara ka daura karke prastavit restoration project ki samiksha ki aur vibhagon ke adhikariyon se charcha ki. MLA ne kaha maang lambe samay se thi aur sarkar ne ise gambhirta se lekar zaroori funds uplabdh karaye hain. Credit capped: pariyojana sarkari Board ki hai; yojana ghoshna-star se aage badhne ka dastavez article me nahi hai.', period: '2022-2027' },
];
// WORKER: jagdeep-singh-kaka-brar (Muktsar, AAP) — 3 entries (2 dawa, 1 news), 0 negatives, 11 rejects. Retry-leads: Dainik Bhaskar/Dainik Jagran ke Muktsar sanskaranon me shilanyas coverage; punjab.gov.in ya district Muktsar site par Rangla Punjab Vikas Scheme ki segment-war kaam suchi; Punjab Vidhan Sabha questions record me Kaka Brar ki maango ka nateeja.
// R-1. Times of India (Nov 2025) — CM Mann ne Sri Muktsar Sahib me Rs 138.82 crore ki sewerage + water supply pariyojnaon ka shilanyas kiya: CM ka karyakram; Kaka Brar sirf maujood the. Dusre neta ke karyakram me maujoodgi. REJECT.
// R-2. The Tribune (Aug 2024) — 'AAP govt bypassing rules to woo voters in Gidderbaha': Kaka Brar ne Gidderbaha (dusri seat) me shilanyas kiye. Muktsar seat ke bahar ka kaam. REJECT.
// R-3. The Tribune (Apr 2024) — 'Muktsar MLA, security men nab robber': vyaktigat sahas ki ghatna (Kotkapura road par dakait pakda), koi constituency works nahi. REJECT.
// R-4. The Tribune (Sep 2025) — Haraj gaon me baadh ka khatra: MLA ne barish-prabhavit gaonon ka daura karke nikasi ke 'prayas jari' hone ka bayan diya. Sirf nirikshan/daura + bayan; koi dastaveji kaam nahi. REJECT.
// R-5. thefactnews.in (Jun 2026) — 'Bright Minds Punjab' samman samaroh: MLA sirf maujood the; non-whitelist aggregator; koi kaam nahi. REJECT.
// R-6. patialapolitics.com (Nov 2025) — Guru Tegh Bahadur ji par Light and Sound show me MLA ki maujoodgi: keval maujoodgi. REJECT.
// R-7. indianewswire.co.in (Mar 2026) — Sri Muktsar Sahib me ESIC branch office ka lokarpan: non-whitelist portal; kendriya pariyojana (Ministry of Labour) jisme MLA ki koi bhoomika dastaveji nahi. REJECT.
// R-8. The Tribune (Nov 2025) — Fattanwala (MLA ke mool gaon) me 11 tubewell motors ki chori, police ne FIR nahi likhi: MLA aaropi nahi (unhone kaha unhe jankari hi nahi thi). Negative-entry ke layak nahi; works bhi nahi. NOTED, REJECT.
// R-9. gcmuktsar.com (Mar 2025) — Govt College Muktsar ka 66th annual sports day, MLA mukhya-atithi: mukhya-atithi samaroh. REJECT.
// R-10. newsarenaindia.com (May 2025) — AAP ne Kaka Brar ko Malwa West ka state vice-president banaya: party pad; constituency works nahi. REJECT.
// R-11. The Tribune (Apr 2025) — Punjab Sikhya Kranti ke beech MLA ka shikshakon ke samman wala viral speech: keval bayan; koi kaam nahi. REJECT.

// ================= PB9: Faridkot + Bathinda + Mansa (Batch 9 coordinator merge, 2026-10-18) =================

// --- PB9: Faridkot jila ---

punjabWorks['gurdit-singh-sekhon'] = [
  { title: 'Indira Gandhi aur Sirhind Feeder naharon me concrete lining ki jagah brick lining ka prastav rakha taaki seepage se peene ka paani milta rahe', category: 'Paani', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/concrete-lining-of-faridkot-canals-a-bone-of-contention-453286/amp', date: '2022-11-21', note: 'MLA Sekhon ne kaha ki sarkar ne unke brick-lining prastav ko manzoori de di hai taaki naharon se seepage jari rahe; Water Resources Department ne us samay kisi bhi manzoori se inkar kiya tha (SE ne kaha brick lining ki koi yojana nahi); Kotkapura ke MLA ke saath milkar sarkar par dabav banane ki koshish; Jal Jeevan Bachao Morcha ke virodh ke beech mamla utha; MLA ka tark tha ki yahan groundwater peene layak nahi hai isliye seepage hi peene ke paani ka mukhya srot hai.', period: '2022-2027', stage: 'pahal' },
  { title: 'Faridkot shahar ke paas Rajasthan Feeder ke 12.50-km hisse me concrete ki jagah brick lining ka faisla hua', category: 'Paani', badge: 'news', sourceLabel: 'IANS via Lokmat Times', sourceUrl: 'https://www.lokmattimes.com/national/punjab-minister-asks-officials-to-complete-rajasthan-feeder-canal-work-on-priority/', date: '2026-05-07', note: 'Cabinet mantri Barinder Kumar Goyal ne relining kaam ka review kiya aur kaha ki Faridkot ke samajik sangathanon aur kisaano ki maang par shahar ke paas 12.50-km stretch me groundwater recharge ke liye concrete ki jagah brick lining hogi; MLA Sekhon ne dawa kiya ki unke anurodh par sarkar ne brick lining ko manzoori di (5Dariya News); 80 km ka kaam 2023 tak poora ho chuka tha; baaki 16.62-km stretch 2026 canal closure me lagbhag Rs 170 crore ki lagat se yuddhastar par relining ho raha hai.', period: '2022-2027', stage: 'pahal' },
];
// WORKER: gurdit-singh-sekhon (Faridkot, AAP) — 2 entries (2 works, 0 negatives), 12 rejects. Retry-leads: Rangla Punjab Vikas Scheme ke tahat Faridkot segment ke Rs 5 crore/fiscal karyon ki neta-war soochi online uplabdh nahi — DC Faridkot press note se verify ho sakta hai; Dallewal Govt High School ke vikas karyon ka lokarpan May 2025 me radd hua tha, baad me hua ya nahi iska vivaran nahi mila; Nov 2022 me CM dwara janch ke aadesh wali shikayat ka koi follow-up/FIR record nahi mila.
// R-1. 24 June 2026: Water Resources Minister Barinder Kumar Goyal ne Faridkot me Rs 38.16 crore ke do steel bridges (Talwandi Road, Faridkot-Kotkapura Road), Rs 11.90 crore ki 21 canal outlets par lined watercourses (34.50 km, 780 acre labh) aur Rs 96.16 lakh ka NABARD UGPL project ka lokarpan kiya; MLA Sekhon sirf saath the aur mantri ko dhanyavad diya (punjabnewsexpress, yesnews) — dusre neta ke karyakram me maujoodgi, vyaktigat bhoomika dastaveji nahi. REJECT.
// R-2. CM Bhagwant Mann ka Faridkot jile ko Rs 55.80 crore ka package: 14 MLD STP + MPS Rs 25.71 crore, Faridkot city water supply augmentation, DAC Block III Rs 9.71 crore, Faridkot-Ferozepur road se Pakhi Kalan-Pehluwala Khawaja Khadak tak 15.925 km sadak Rs 12.01 crore (5dariyanews, ~Nov 2023) — CM ka karyakram; MLA ki vyaktigat bhoomika dastaveji nahi. REJECT.
// R-3. Govt High School Dallewal me vikas karyon ka lokarpan — MLA ne kisan sangathanon ke virodh ke kaaran daura radd kiya; lokarpan hua hi nahi aur karyon ka koi vivaran nahi (The Tribune, 22 May 2025). REJECT.
// R-4. Faridkot mandi me sarkari gehun kharid ka aupcharik shubharambh (yesnews, Apr 2026) — sarkari abhiyan ka keval shubharambh. REJECT.
// R-5. Guru Gobind Singh Medical College Faridkot me Rs 29.85 crore ki 3-Tesla MRI machine — sarkar ki kharid; MLA sirf bayan me uddhrit hue (The Tribune briefs, ~May 2025) — vyaktigat bhoomika dastaveji nahi. REJECT.
// R-6. Vidhan Sabha me schools authority + PT-DP bharti ki maang (PTC News, 2022) aur patwari-shikayat/sinchai mudda uthana (TrueScoop, 7 Aug 2026) — sirf maang/shikayat, seat-vishesh kaam nahi. REJECT.
// R-7. Sugar mill zameen par 784 ped kaatkar industrial park ka vivad — MLA ped kaatne ka bachav kar rahe hain (The Tribune, 5 June 2026) lekin unke khilaf koi FIR/chargesheet/janch nahi; Punjab-Haryana HC ki tippani sarkari pariyojna par hai — negative ke sakht niyam poore nahi. REJECT (negative bhi nahi).
// R-8. Nov 2022: drug peddlers ko sanrakshan/police ko rishwat ki shikayat par CM dwara janch ke aadesh (PTC News, 5 Nov 2022) — shikayat me naam hai lekin FIR ke aaropi column me naam ka koi dastavej nahi, PTC whitelist me nahi, aur koi follow-up/FIR record nahi mila — niyam 'shikayat me naam lekin FIR me naam nahi = negative nahi' se REJECT.
// R-9. MLA ki patni Beant Kaur se Deep Singh Wala gaon me drug menace par sawal-jawab (The Tribune, 6 May 2024) — parivar ka mamla, dayre se bahar. REJECT.
// R-10. Baba Farid University ke naye VC Dr Rajinder Kumar Bansal se shubhkamna mulaqat (Yes Punjab News, 2 Sep 2026) — shishtachar bhet, kaam nahi. REJECT.
// R-11. Makhu me Ferozepur Feeder relining karyakram me upasthiti (face2news) — Faridkot seat ke bahar ka karyakram; maujoodgi matra. REJECT.
// R-12. 'Mann De Munaffe' door-to-door abhiyan (smartstudyweb), Republic Day samaroh me upasthiti (5dariyanews), aur AAP me netaon ka shamil hona (5dariyanews) — party gatividhi/samaroh, kaam nahi. REJECT.

punjabWorks['kultar-singh-sandhwan'] = [
  { title: 'Tehna gaon (Kotkapura) me sadak durghatnaon par Nitin Gadkari se milkar underpass ki maang; Gadkari ne jald nirman ka ashvasan diya', category: 'Sadak', badge: 'news', sourceLabel: 'ThePrint (PTI)', sourceUrl: 'https://theprint.in/india/punjab-assembly-speaker-meets-gadkari-requests-construction-of-underpass-in-village-in-kotkapura/1760762/', date: '2023-09-13', note: 'Sandhwan ne Union Minister se Tehna (Kotkapura seat, Faridkot) me bhari traffic se hone wali durghatnaon ka mudda uthaya; Gadkari ne likhit anumodan jald jari karne ka ashvasan diya. May 2025 me Tehna junction (NH-54, km 225.272) par Rs 26.33 crore ke 4-lane flyover ka EPC tender nikla — intervenion ka sambhavit parinam (tender aggregator FirstTender se).', period: '2022-2027', stage: 'pahal' },
];
// QA (2026-10-18): 4 school entries Babushahi/Punjab Newsline (non-whitelisted regional portals) par thin — whitelist rule par hatayi gain. Tehna wali PTI-via-ThePrint entry rakhi.
// WORKER: kultar-singh-sandhwan (Kotkapura, AAP) — 5 entries, 10 rejects. Retry-leads: (a) 5dariyanews/454166 par Rs 2.10 crore school karyon ka lekh (Dr. Chanda Singh Marwah Rs 1.79 crore + 4 primary schools) — publication date verify nahi hui, isliye shamil nahi; (b) Tehna junction flyover (NH-54) ke nirman ki pragati/poora hone ki khabar — 'pahal' se 'poora' me badalne ke liye.
// R-1. Naya MLA office ka lokarpan (Babushahi, 2 Apr 2026) REJECT — office, vikas karya nahi.
// R-2. Sewerage maintenance par adhikariyon ke saath baithak (5dariyanews) REJECT — sirf samiksha baithak, koi sanction/lokarpan nahi.
// R-3. Anti-drug abhiyan ka Kotkapura se shubharambh (Tribune, Sep 2023) REJECT — sarkari abhiyan ka keval shubharambh.
// R-4. Kotkapura truck union bhang karna (Tribune, Oct 2023) REJECT — prashasanik kadam, vikas karya nahi.
// R-5. Lahnat Diwas par manch se aalochna (Tribune, 15 Oct 2026) REJECT — MLA par koi FIR/chargesheet nahi; negatives rule ke tahat NO.
// R-6. Purane COVID virodh case (2020-21); Apr 2022 me 'untraced'/closed (Tribune) REJECT — halafnama ke purane mamle, koi naya negative nahi.
// R-7. Karmchariyon ka niwas gherav (Tribune) REJECT — sarkar ke khilaf virodh, MLA vyaktigat aaropi nahi.
// R-8. Discretionary quota se school grant ki ghoshna (Apr 2025 lekh me) REJECT — sirf ghoshna.
// R-9. School Admission Campaign 2026 ka shubharambh REJECT — sarkari abhiyan ka keval shubharambh (labs ka lokarpan alag entry me hai).
// R-10. Budget se bahar ki badi sadak pariyojnayen (jaise Kotkapura-Muktsar four-laning — purani kendriya pariyojna) REJECT — unme vyaktigat bhoomika ka praman nahi.

punjabWorks['amolak-singh'] = [
  {
    title: 'Rameana gaon ke bus stand par yatriyon ke liye bane naye cement baithak platforms',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/punjab/plaque-with-jaito-mlas-name-removed-475092/',
    date: '2023-01-30',
    note: 'The Tribune (Faridkot dateline 30 Jan 2023) ke anusaar Jaito ke Rameana gaon me bus stand ke paas yatriyon ke baithne ke liye naye cement platforms banaye gaye the; MLA unka lokarpan karne wale the aur wahan unke naam ki plaque lagi thi, lekin lokarpan se pehle hi kuchh logon ne deewar todkar plaque hata liya. Police ne Prevention of Defacement of Property Act ke tahat criminal case darj kiya. Fund ya credit ka srot report me disclosed nahi; platforms report ke samay tak naye bane hue the isliye stage poora. Date report ki dateline se li gayi hai.',
    period: '2022-2027',
    stage: 'poora',
  },
];
// WORKER: amolak-singh (Jaitu SC, AAP) — 1 entry, 8 rejects. Retry-leads: Sikhya Kranti (Apr 2025) me Jaito schools ke upgrades me MLA ki vyaktigat upasthiti wali khabar; Jaito sewage project report (Tribune, Jan 2023) par sarkar ki manzoori ka follow-up; Punjab govt DPR press releases me 'Jaito' + 'Amolak Singh' keyword khoj.
// R-1. Jaito sewage overflow par MLA ka gherao, Tribune 22 Jan 2023 — REJECT: kaam nahi, virodh-pradarshan; MLA par koi FIR/chargesheet nahi, isliye negative bhi nahi.
// R-2. Sewage ke liye MLA dwara state govt ko di gayi project report (wahi Tribune khabar) — REJECT: sirf prastav/maang; manzoori ya kaam ka pramaan nahi.
// R-3. Guru Gobind Singh Medical College, Faridkot me mantri ke saath MLA ka daura aur Dr Bahadur par aarop, Tribune 2022 — REJECT: nirikshan/vivad; MLA aaropi nahi, koi FIR/janch nahi.
// R-4. Gondara gaon ke primary school me 'teachers ne swagat nahi kiya' ki shikayat, HT Oct 2024 — REJECT: nirikshan + shikayat; kaam nahi; MLA aaropi nahi.
// R-5. Dhilwan me panchayat chunav se pehle 'fringe elements' ko chetawani wala byaan, HT — REJECT: sirf byaan/aarop; koi FIR nahi; sakht negative criteria fail.
// R-6. Dual-vehicle TA/DA dave (Rs 10.28 lakh, 2022-25), Tribune 2026 — REJECT as negative: media report par MLA ke khilaf koi FIR/chargesheet/janch ya nyayik vikas nahi.
// R-7. CM Bhagwant Mann ka Jaito ke liye Rs 28.68 crore package (CHC 30-bed upgrade Rs 8 cr, pani pipeline Rs 3.01 cr, stadium Rs 2 cr), Apr 2026 — REJECT: CM ki ghoshna; MLA ki vyaktigat dastaveji bhoomika ka pramaan nahi; sources (babushahi/patialapolitics/brightpunjabexpress) whitelist me nahi.
// R-8. CM dwara Faridkot STP (14 MLD, Rs 25.71 cr), DAC Block III aur sadak chaudaikaran (Rs 12.01 cr) ki ghoshna/dedikation — REJECT: dusre neta (CM) ka kaam, MLA ki bhoomika nahi; chhota portal (5dariyanews) whitelist me nahi.

// --- PB9: Bathinda jila ---

// ---- pb9: Jagroop Singh Gill, Bathinda Urban (AAP) — constituency works, Mar 2022+ (researched 2026-10-18) ----
// QA-DROP (2026-10-18): teeno entries non-whitelisted outlets (Yes Punjab News, Jagrati Lahar, Babushahi) par thin — whitelist rule par hatayi gain.
punjabWorks['jagroop-singh-gill'] = [];
// WORKER: jagroop-singh-gill (Bathinda Urban, AAP) — 3 entries, 8 rejects. Retry-leads: (1) nahar-kinare 3 km park ki poornata ki sthiti — 2023 ke baad koi follow-up report nahi mili; (2) 'Bhai Roop Chand Sergah' ki pragati aur kisi bade outlet par coverage; (3) MLA ke official social channels par udghatan-lokarpan ki photo-dates mil sakti hain.
// R-1. Tribune (2022-03-21, 'Will focus on civic issues'): waterlogging, drug menace, jobs, jogging track — jeet ke baad ke irade/ghoshna; koi poora hua kaam nahi. REJECT (sirf ghoshna).
// R-2. Tribune (2022-04-04, 'Regular canal water for cotton sowing'): MLA ne kisan mele me kaha ki 20 Apr se nahari pani milega — sarkari elaan, kaam nahi. REJECT (sirf ghoshna).
// R-3. Tribune (2024-03-08, waste plant): Vidhan Sabha zero hour me plant sthanantaran ki MAANG — sthanantaran hua hi nahi. REJECT (sirf maang).
// R-4. Hindustan Times (2022-03, MC budget): MLA ne Improvement Trust se Rs 65 crore vasuli ka dawa uthaya — vakalat/mudda, kaam nahi. REJECT.
// R-5. Babushahi (2026-02-10, Ring Road Phase-1 ko Chandigarh Highway se jodne ka kaam): state/central NH pariyojna; MLA sirf tippani karte hue quote hue, koi vyaktigat bhoomika dastavej me nahi. REJECT (kendriya pariyojna bina bhoomika).
// R-6. Tribune/newswav (2026-06, bio-fertiliser quality-control lab): Krishi Mantri Khuddian mukhya atithi, MLA sirf upasthit. REJECT (dusre neta ke karyakram me maujoodgi).
// R-7. The Unmute English (2024-12-16, Rs 26 crore AMRUT 2.0 water project): neev patthar Mayor Padamjeet Singh Mehta ne rakha; Gill ka report me naam tak nahi. REJECT (bina MLA ki dastaveji bhoomika ke MC kaam).
// R-8. Negatives: establishment media me Mar 2022 ke baad Jagroop Singh Gill ke khilaf kisi FIR/chargesheet/janch ya nyayik vikas ki report nahi mili; MC-chunav ticket-vitran par virodh sirf party-rajneeti hai (party karyawahi = NO); petrol-bomb hamle wali press conference me wo karwai ki MAANG kar rahe the, aaropi nahi. Halafname me criminalCases 0. = koi negative entry nahi.

punjabWorks['amit-rattan'] = [
  { title: 'Punjab Vigilance Bureau ne February 2023 me Bathinda Rural ke AAP MLA Amit Rattan Kotfatta ko Ghudda gaon ke Rs 25 lakh development grant ke badle Rs 5 lakh rishwat maangne ke aarop me giraftar kiya; VB ne April 2023 me chargesheet file ki, May 2023 me HC ne jamanat di aur case ab bhi jaari hai', category: 'Any', badge: 'news', sourceLabel: 'NDTV', sourceUrl: 'https://www.ndtv.com/india-news/punjab-vigilance-bureau-files-charge-sheet-against-aap-mla-his-pa-in-bribery-case-3959360', date: '2023-02-23', note: '16 February 2023 ko VB ne MLA ke aide Rashim Garg ko Bathinda Circuit House me Rs 4 lakh rishwat lete hue pakda; shikayat Ghudda gaon ke sarpanch Seema Rani ke pati Pritpal Kumar ne ki thi, jinka aarop tha ki MLA ne BDPO Sangat se Rs 25 lakh ke grant ko release karane ke liye Rs 5 lakh maange the. VB ne 23 February 2023 ko MLA ko bhi giraftar kiya (Tribune); Mohali forensic lab ne audio recording me MLA ki aawaz match hone ki pushti ki (HT). NDTV ke mutabik VB ne April 2023 me Bathinda court me MLA aur unke aide ke khilaf chargesheet file ki. Punjab and Haryana High Court ne 22 May 2023 ko jamanat di (IE); IE June 2025 ke anusaar case ab bhi jaari hai. MLA ne aaropon ko ‘politically motivated’ bataya (HT). Credit: Punjab Vigilance Bureau ki jaanch; aarop adalat me sabit nahi hue.', period: '2022-2027' },
];
// WORKER: amit-rattan (Bathinda Rural SC, AAP) — 1 entry, 8 rejects. Retry-leads: Punjabi e-editions (Bhaskar/Jagran Bathinda page) me 2023-2026 ke post-bail works; Rangla Punjab Vikas Scheme me Bathinda Rural MLA-committee ki recommendations; MLA ke official social handles ke udghatan-posts ('dawa' badge par vichar); Bathinda DC office ke development-work release notes.
// R-1. Tribune 30 Apr 2022 — 'Basic amenities to all, clean admn focus areas says Amit Rattan Kotfatta' profile: sirf yojnayen/priorities (drug-free segment, paani, school-health posts bharna, Seechewal model) — koi poora/shuru kaam nahi. REJECT (sirf ghoshna). https://www.tribuneindia.com/news/bathinda/basic-amenities-to-all-clean-admn-focus-areas-says-amit-rattan-kotfatta-bathinda-rural-mla-390753/amp
// R-2. Editorji 14 Apr 2025 — Ambedkar Jayanti par cabinet mantri Mohinder Bhagat ka karyakram, MLA sirf maujood atithiyon me naam. REJECT (mukhya-atithi samaroh me upasthiti). https://www.editorji.com/india-news/punjab/punjab-highlights-sc-initiatives-on-ambedkar-day-1744694127096
// R-3. CityAirNews 17 Dec 2023 — 'Vikas Kranti' me Bathinda me Rs 1125 crore projects: shilanyas CM Bhagwant Mann + Arvind Kejriwal ne kiye; MLA ki vyaktigat bhoomika dastavej nahi. REJECT (dusre neta ka karyakram). https://www.cityairnews.com/content/residents-hail-punjab-government-for-initiating-development-projects-worth-rs-1125-crore-during-vikas-kranti-in-bathinda
// R-4. YesPunjab — Bathinda ko AMRUT 2.0 se Rs 26 crore (do paani ki tanki, 63,000 m pipeline): Bathinda city ka project, mayor Padamjeet Singh Mehta ne buniyad rakhi; seat (Bathinda Rural) ke bahar, MLA ki bhoomika nahi. REJECT. https://yespunjab.com/mann-govts-jal-jeevan-mission-bathinda-gets-%E2%82%B926-cr-gift-from-amrut-2-0-for-continuous-water-supply/
// R-5. IE Nov 2022 — 'Invitation card row': MLA ne DC Showkat Ahmad Parray ke khilaf SC/ST Act me FIR ki maang ki; police inquiry me 'no offence committed' paya gaya. REJECT: kaam nahi; negative bhi nahi (koi FIR nahi). https://indianexpress.com/article/cities/chandigarh/invitation-card-row-days-mla-fir-bathinda-dc-inquiry-report-no-offence-committed-9034061/
// R-6. TOI Aug 2023 — 'Oppn targets AAP after tainted MLAs join I-day events': commentary, koi naya judicial tathya nahi. REJECT. https://timesofindia.indiatimes.com/city/chandigarh/oppn-targets-aap-after-tainted-mlas-join-i-day-events/articleshow/102787985.cms
// R-7. IE Apr 2024 — 'In AAP's fight for Bathinda': MLA 'missing in action', chunav-prachar me akele; koi vishisht kaam nahi. REJECT (chunav khabar). https://indianexpress.com/article/cities/chandigarh/aap-fight-bathinda-mla-facing-corruption-charges-9286034/lite/
// R-8. Outlook Oct 2026 (IE report ke hawale se) — AAP ne retired SDM Gopal Singh ko Bathinda Rural ka constituency in-charge banaya, sitting MLA ke hote hue; trial ab bhi jaari. REJECT: party karyawahi alone = negative nahi. https://www.outlookindia.com/national/ahead-of-punjab-polls-2027-aaps-organisational-overhaul-sparks-ticket-change-speculation

punjabWorks['balkar-singh-sidhu'] = [];
// WORKER: balkar-singh-sidhu (Rampura Phul, AAP) — 0 entries, 13 rejects. Retry-leads: jagbani / punjabitribune (Gurmukhi edition) archives, MLA ka official Facebook page, Punjab DPR (dipr.punjab.gov.in) press-release archive, aur Bathinda DC ki Rangla Punjab Vikas Scheme list — inme Rampura Phul ke MLA-recommended works ki dastavezi bhoomika mile to entries ban sakti hain.
// R-1. Tribune (26 Apr 2022): 'Will set up govt college, crop storage unit' — sirf ghoshna/irade (college, cold storage, hospital upgrade, park) — koi sanctioned/completed kaam nahi. REJECT.
// R-2. Tribune + IE (22 Apr 2025): 'Two AAP legislators face farmers' ire' — Sidhana gaon me 'Education Revolution' udghatan samaroh me MLA ki bhagidari; koi concrete tathya (rashi/kaam) nahi, sarkari abhiyan ka samaroh. Negative bhi nahi (koi FIR/janch nahi). REJECT.
// R-3. yesPunjab (16 Oct 2025): Barsarampur sewerage udghatan — Kartarpur wale MLA Balkar Singh ka kaam, naam-jaal. REJECT.
// R-4. 5DariyaNews: Kartarpur me Rs 130.09 lakh ke shilanyas — doosre Balkar Singh (minister). REJECT.
// R-5. PunjabTribune (19 Dec 2023): Minister Balkar Singh dwara 7 gaonon me Rs 1.30 crore ke kaam — naam-jaal. REJECT.
// R-6. 5DariyaNews: Local Government Minister Balkar Singh ki review meeting — review meeting, koi kaam nahi; naam-jaal bhi. REJECT.
// R-7. cityairnews (1 Dec 2025): 'MLA Sidhu inaugurates water supply lines' — Kulwant Singh Sidhu (Atam Nagar, Ludhiana), naam-jaal. REJECT.
// R-8. Tribune: Mohali MLA Balbir Singh Sidhu ka road widening — doosra Sidhu, doosri seat. REJECT.
// R-9. HT (Oct 2025): CM Mann dwara Rampura Phul me Rs 56-cr RoB ka udghatan — CM ka karyakram; MLA ki vyaktigat bhoomika dastavezi nahi. REJECT.
// R-10. Rampura Phul 12 MLD WTP (Rs 29.02 crore, AMRUT 2.0) tender — tender document me MLA ki bhoomika nahi. REJECT.
// R-11. operanews (14 Oct 2026): dhan khareed mandion me shuru — aggregator; procurement drive ka shubharambh. REJECT.
// R-12. Tribune + Amar Ujala (23 Sep 2026): Maluka Nagar Panchayat haziri-register vivad — rajnaitik takrar; MLA ke khilaf koi FIR/chargesheet/janch nahi, isliye qualifying negative nahi. REJECT.
// R-13. Tribune (Mar 2026): Phul Panchayat Samiti me SAD ki jeet — chunav parinam; MLA ka kaam nahi. REJECT.

// Foundation: Sukhveer Singh Maiserkhana, Maur (constituency 95), Aam Aadmi Party, winner 2022.
// Khoj ka dayra: Mar 2022 ke baad ke constituency-kaam; established media hi (Tribune/IE/TOI/NDTV/PTI etc.).
// Natija: media-reported me koi bhi aisa kaam nahi mila jisme MLA ki vyaktigat bhoomika
// (lokarpan/shilanyas/swikriti/pahal/poora) dastavej ho. Tamam suraag neeche REJECT list me.
punjabWorks['sukhveer-singh-maiserkhana'] = [
];
// WORKER: sukhveer-singh-maiserkhana (Maur, AAP) — 0 entries, 8 rejects. Retry-leads: Jagran/Bhaskar Punjabi e-editions (Bathinda page) 2022-2026; Tribune archive me 'Maur MLA' site-search; MLA ke official FB page ke udghatan-posts (dawa badge par vichar); DIPR Punjab photo releases; eprocurement Bathinda/Maur tenders ke award notices.
// R-1. IE 18 Apr 2025 — Kotra Kaura school ki chaar-diwaar ka udghatan: pradarshankariyon ne use 'chaar saal purani' bataya; patrika me shrey CM Bhagwant Mann + shiksha mantri Harjot Singh Bains ko tha, MLA ka naam hi nahi; MLA karyakram me aaya hi nahi. Sirf ghoshna/mukhya-atithi. https://indianexpress.com/article/cities/chandigarh/four-years-old-wall-protests-aap-mla-inauguration-event-miss-9950885/lite/
// R-2. Tribune Apr 2025 — 'Two AAP legislators face farmers ire in Bathinda': Sikhya Kranti ke tehat school udghatan-dauron par kisanon ka virodh (Ramgarh Bhundar me MLA se sawal); koi vishisht kaam ka naam/credit MLA ko nahi. Sirf daura. https://www.tribuneindia.com/news/punjab/two-aap-legislators-face-farmers-ire-in-bathinda/amp/
// R-3. Tribune Jul 2026 — Balianwali gaon me jansampark karyakram: MLA ne 'lakhon rupaye ke vikas kaam' ka dawa kiya, pradarshankariyon ne sawal uthaye; koi kaam naam se nahi. Sirf dawa. https://www.tribuneindia.com/news/bathinda/maur-aap-mlas-public-outreach-event-disrupted-amid-protest-in-bathinda-village/
// R-4. Vikas Kranti Dec 2023 (presskitaquat) — Maur STP Rs 23.91 crore, Balianwali sub-tehsil bhawan Rs 2.30 crore, Nathana water supply-sewerage Rs 29.09 crore: shilanyas CM Mann + Kejriwal ne rakhe; MLA ki vyaktigat bhoomika dastavej nahi; dusre neta ka karyakram. https://presskitaquat.com/english/vikas-kranti-in-bathinda-as-bhagwant-singh-mann-and-arvind-kejriwal-kick-off-announced-laid-foundation-stone-of-development-projects-worth-rs-1125-crore-in-malwa-heartland/
// R-5. TOI Jan 2026 — R-Day par nagar council president Karnail Singh ne MLA par 'Rs 30 lakh rishwat' aur 'croreon ke vikas kaam rokne' ka aarop lagaya; MLA ne khandan kiya. FIR/chargesheet/janch nahi — keval aarop = negative entry nahi; koi vishisht kaam bhi satyapit nahi. https://timesofindia.indiatimes.com/city/chandigarh/maur-mla-civic-body-president-trade-charges-during-r-day-event/articleshow/127648208.cms
// R-6. Oct 2026 AAP nilamban (TOI/NDTV/Statesman) — teacher kami par Facebook Live ke baad party ne 'anti-party activities' par nilambit kiya. Party karyawahi alone = negative entry NAHI; koi FIR nahi. https://timesofindia.indiatimes.com/city/chandigarh/aap-mla-slams-own-govt-over-teacher-shortage-politically-motivated-replies-minister/articleshow/134661153.cms
// R-7. Tribune Oct 2026 'AAPs dissenting MLAs face the partys heat' — nilamban par analysis; kaam/negative nahi. https://www.tribuneindia.com/news/amritsar/aaps-dissenting-mlas-face-the-partys-heat/
// R-8. 5dariyanews 02 Mar 2023 — Bathinda Basera Scheme me 51 ghar handover: cabinet mantri Nijjar ka karyakram; MLA sirf upasthit atithiyon me naam. Kendra/sarkari yojna ka keval shubharambh. https://www.5dariyanews.com/amp/405235-Bathinda-Is-Becoming-A-Pioneer-In-Making-Exclusive-And-Revolutionary-Changes-Dr-Inderbir-Singh-Nijjar

// PB9 worker — jagsir-singh (Bhucho Mandi SC, AAP)
// Pehchan pakki: Jagsir Singh (Master Jagsir Singh / Jagseer Singh), Bhucho Mandi (SC) seat no. 91, AAP; Mar 2022 me jeete; 64 saal; retired teacher.
// Whitelist-sourced koi bhi valid works entry nahi mili — profile khaali hai.
punjabWorks['jagsir-singh'] = [];

// ---- REJECT-LOG (jagsir-singh, Bhucho Mandi SC) ----
// R-1. REJECT: sirf ghoshna/yojana (2022-04-09)
//    The Tribune, 'Planning to upgrade facilities in schools' (Bathinda, April 9) — MLA ne schools/health centres upgrade aur peene ke paani ko 'top priority' bataya; RO systems repair aur health vacancies bharna 'planned'/'will be' me kaha.
//    Kaaran: sirf ghoshna aur iraade hain — koi lokarpan/shilanyas/swikriti nahi; ghoshna-matra reject.
// R-2. REJECT: dusre neta ka daura (2022-04-02)
//    The Tribune, 'Minister inspects Bhucho school' (Updated 12:05 PM Apr 03, 2022 IST) — Education Minister Gurmeet Singh Meet Hayer ne Bhucho Mandi ke sarkari secondary school ka nirikshan kiya; MLA Jagsir Singh ne sirf swagat kiya.
//    Kaaran: dusre neta ke karyakram me maujoodgi — MLA ki dastaveji bhoomika nahi.
// R-3. REJECT: daan/rahat ka karyakram + MLA event me nahi aaye (2025-01)
//    Hindustan Times, '8 houses burnt down in Bathinda village: Admn releases Rs 50,000 compensation for victims' — Daan Singh Wala gaon ke 8 parivaron ko CM relief fund se cheques; MLA Jagsir Singh ko cheques dene aana tha lekin event me nahi aaye, SDM ne diye.
//    Kaaran: daan/rahat category reject; vaise bhi MLA karyakram me maujood nahi the.
// R-4. REJECT (negative criteria fail): SMO order 'bhatije' ke naam par (2023-02-06)
//    The Tribune, 'SMO issues order on directions from MLA's nephew, Jagseer refutes charge' (Published 2023-02-06) — Nathana SMO Dr Sandeep Singla ne Bhucho MLA ke 'bhatije' ke phone-adesh par health workers ko tournament duty par bheja; janch SMO se hui (Civil Surgeon ne SMO se jawab maanga); MLA ne kaha unka koi bhai nahi, isliye bhatija bhi nahi.
//    Kaaran: established media hai lekin MLA KHUD kisi FIR/chargesheet/janch me aaropi nahi — janch SMO ke khilaf thi, aur kathit rishta MLA ne nakar diya.
// R-5. REJECT (negative criteria fail): truck union ka aarop (2022-05-13)
//    The Tribune, 'Transporters block MLA's cavalcade in Bathinda' (Updated 12:05 PM May 13, 2022 IST) — Goniana-Lakhi Jungle road par truck operators union ne MLA ke kafile ko roka; union neta Balwinder Singh ne aarop lagaya ki 'MLA's men' paise maang rahe hain; MLA ne inkar kiya aur kaha sabit ho to istifa de denge.
//    Kaaran: sirf shikayat/aarop hai — MLA ke khilaf koi FIR, chargesheet ya janch ka zikr nahi; aarop sabit bhi nahi hua. Shikayat me naam, FIR me naam nahi = NO.
// R-6. REJECT: virodh pradarshan (2026-04-27)
//    The Tribune, 'Bhucho AAP MLA Jagsir Singh faces protest by factory workers' (Updated 08:37 AM Apr 27, 2026 IST) — Jeeda gaon ki private apparel factory me salary/conditions ko lekar mazdooron ne MLA ke khilaf naare lagaye; MLA ne kaha ve karmchariyon ke samarthan me aaye the.
//    Kaaran: virodh pradarshan koi kaam ya negative entry nahi — MLA khud aaropi nahi, koi FIR/chargesheet nahi.
// R-7. REJECT: dusre neta ka karyakram (2023-10-08)
//    The Tribune, 'Will use Bathinda thermal plant land for public projects, says Punjab CM Bhagwant Mann' — CM ne thermal plant zameen par public projects ki charcha ki aur Rs 115 crore bus stand layout dekha; MLA Jagsir Singh ko sirf janata se feedback lene ko kaha.
//    Kaaran: CM ka karyakram; MLA ki koi vyaktigat pariyojna-bhoomika darj nahi.
// R-8. REJECT: sirf maang/prastav (2025-12)
//    Hindustan Times, 'Two years on, Bathinda Rs 100-cr ISBT project stuck over political deadlock' — Baljinder Kaur, Balkar Sidhu, Sukhvir Maiserkhana aur Master Jagsir Singh ne CM ko patra likhkar bus-stand prastav wapas lene ki maang ki; pariyojna atki hui hai.
//    Kaaran: sirf maang/prastav (patra) hai — koi swikriti/lokarpan/shilanyas nahi.
// R-9. REJECT: chunavi kissa, vikas-kaam nahi (2026-05-19)
//    The Tribune, 'At Lehra Mohabbat, AAP failed to find candidates despite appeals' — nagar panchayat chunav me AAP ko ummidwar nahi mile; block president ne aarop lagaya ki MLA Jagsir Singh ne gaon ke vikas kaam peechhe rakh diye; MLA se sampark nahi ho paya.
//    Kaaran: chunavi reporting hai — koi dastaveji kaam (lokarpan/shilanyas/swikriti) darj nahi; aarop-matra.
// R-10. REJECT: dusre neta ka mamla (2023-10)
//    The Indian Express, 'Name removed from invitation, AAP MLA seeks FIR against DC' — Bathinda Rural MLA Amit Rattan Kotfatta ne DC ke khilaf SSP se FIR ki shikayat ki; Oct 14 programme me Master Jagsir Singh sirf upasthit the.
//    Kaaran: dusre neta ka mamla — Jagsir Singh ka koi kaam ya bhoomika nahi.
// R-11. REJECT: sarkari abhiyan me maujoodgi (2026-05)
//    Tribune-published news item me Bhucho MLA Jagsir Singh ne zila kisan mele me kisano ko salah di; Light-and-Sound show (17 Nov 2025) me bhi upasthit.
//    Kaaran: sarkari abhiyanon ke shubharambh/karyakram me maujoodgi — MLA ka vyaktigat kaam nahi.
// R-12. RETRY-LEADS (koi whitelist hit nahi; agle batch me dubara khangaalna):
//    - Punjab DIPR press releases (dipr.punjab.gov.in) me 'Master Jagsir Singh' / 'Jagseer Singh' naam se Bhucho me shilanyas/lokarpan
//    - Dainik Bhaskar / Dainik Jagran Bathinda editions (Bhucho dateline) me school/sadak/paani ke inauguration items
//    - Rangla Punjab Vikas Scheme ki Bathinda zila committee sanction list — MLA ki sifarish dastaveji hone par valid (lekin neta-war record online uplabdh nahi lagta)

// ---- Punjab (pb9): Baljinder Kaur (baljinder-kaur, Talwandi Sabo, AAP, 2022-2027) ----
// Research date: 2026-10-18. 7 news searches + 0 page-opens (search snippets se kaam chala).
// IDENTITY CHECK: Talwandi Sabo (Bathinda), AAP, do-baari MLA (2017, 2022); 2022 me 48,753 vote, 15,252 maton se jeet; PRS MLA tracker bhi Talwandi Sabo/AAP pakka karta hai.
// Naam-jaal se bachat: Dr Baljit Kaur (Malout MLA/mantri, water-pipeline wali khabar) ALAG hain — unke kaam is profile me NAHI.
// NIGRANI: whitelisted media me Mar 2022 ke baad unka koi vyaktigat constituency-kaam (shilanyas/lokarpan/swikriti/pahal) nahi mila — ve Vidhan Sabha me AAP ki chief whip ke roop me sakriya hain, aur khabrein zyadatar CM ke karyakramon me maujoodgi ya bayan tak seemit hain. Isliye positive entries 0; 1 negative entry.

punjabWorks['baljinder-kaur'] = [
  {
    title: '2020 ke bijli-virodh protest case me gair-haaziri par Chandigarh court ne Oct 2022 me NBW jaari kiya; P&H High Court ne Dec 2025 me poori FIR aur chargesheet radd kar di',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/chandigarh/court-issues-nbw-against-aap-mla/articleshow/94593641.cms',
    date: '2022-10-02',
    note: 'UT local court, Chandigarh ne AAP MLA Baljinder Kaur ke khilaf non-bailable warrant (NBW) jaari kiya kyunki ve 2020 ke virodh-pradarshan se jude mamle me adalat me pesh nahi huin — 12 Sep 2022 ko jaari bailable warrant ka bhi palan nahi hua tha. Mamla: Jan 2020 me Chandigarh ke Sector-4 MLA hostel ke paas bijli-dar badhotari ke khilaf virodh me police par pathraav/hamla; Sector-3 police ne constable Manpreet Kaur ki shikayat par case darj kiya tha; chargesheet me Chandigarh Police ne 10 AAP netaon ko aaropi banaya tha (TNN/TOI, 2 Oct 2022). Aman Arora, Harpal Cheema, Sarabjit Manuke apne vakil ke zariye pesh hue the. Baad me P&H High Court (Justice Tribhuvan Dahiya) ne FIR, chargesheet aur saari baad ki karyavahi radd kar di — adalat ne kaha pathraav ka aarop yachikakartaon se jodna bina aadhar tha aur Section 144 ka nishedhadesh bhi jaari nahi hua tha (The Tribune, Dec 2025). MLA khud naamzad aaropi theen; NBW gair-haaziri par tha.',
    period: '2022-2027',
  },
];

// WORKER: baljinder-kaur (Talwandi Sabo, AAP) — 1 entry (negative), 14 rejects. Retry-leads: (1) Tribune Bathinda / TOI topic tag 'Baljinder Kaur' periodic scan — Talwandi Sabo civic works me MLA ka dastaveji naam mil sakta hai; (2) Bathinda DC ke Rangla Punjab Vikas Scheme kharch releases (sarkari portal) — Talwandi Sabo segment ke kaam; (3) HC-quash order ki exact date Tribune article se pakki karni ho to.
// REJECT-LOG (baljinder-kaur):
// R-1. Akal Takht ne 15 AAP MLAs (unki sahit) ko 15 Oct 2026 ko pesh hone ka sammon diya (Tribune, Oct 2026) — dharmik sammon tha, koi FIR/chargesheet/janch nahi; ve pesh huin aur spashteekaran diya — negative criteria poora nahi.
// R-2. Dual-vote indictment (Tribune Nov 2017; HT Feb 2018) — Mar 2022 se pehle ka vivaad; uske baad ka koi nyayik vikas whitelisted media me nahi mila.
// R-3. Talwandi Sabo Block Samiti chunav me SAD/Congress ke dhandli ke aarop (Tribune, 24 Mar 2026) — keval virodhi aarop; MLA ke khilaf koi FIR/case nahi; unhone aarop khaarij kiye.
// R-4. Kisan unionon ka unke niwas ke bahar virodh (Tribune, Mar 2025 aur Feb 2026) — sarkari neetiyon ke khilaf virodh tha, MLA ke khilaf koi aarop/case nahi.
// R-5. Badh-rahat sanction letters ka vitaran (royalpatiala, Aug 2026) — sarkari raahat vitaran + non-whitelist source.
// R-6. Vidhan Sabha Question Hour me Bathinda refinery CSR-fund audit ki maang (PTI/latestly, 25 Feb 2025) — keval sawal/maang; mantri ka aashvasan matra; constituency kaam nahi.
// R-7. Bathinda Chief Agriculture Officer ke transfer ke liye mantri ko patra (Tribune, ~Apr 2026) — prashasanik patra/maang, kaam nahi.
// R-8. Talwandi Sabo Sub-Divisional Complex ka lokarpan, Rs 6 crore (12 Apr 2026) — CM Bhagwant Mann ka karyakram/pariyojana; MLA ki dastaveji vyaktigat bhoomika nahi; keval upasthiti.
// R-9. Poonch shaheed ke parivar ko Rs 1 crore cheque (Tribune, 26 Apr 2023) — CM ka karyakram; MLA keval upasthit theen.
// R-10. Talwandi Sabo ko 'heritage city' banane ki ghoshna (HT, ~Aug 2022) — CM ki ghoshna; MLA keval upasthit theen; sirf ghoshna.
// R-11. Pati dwara maarpeet ka viral video (HT) — parivar ka mamla; niyam se bahar.
// R-12. Paitrik gaon Jaga Ram Tirath me nasha-overdose se yuvak ki maut (Tribune, Aug 2026) — parivar ne karyavahi par sawal uthaye, lekin MLA ke khilaf koi FIR/case nahi.
// R-13. Ludhiana (West) by-election me Sanjeev Arora ke liye prachar (cityairnews, 12 Jun 2025) — seat ke bahar + chunavi prachar; non-whitelist source.
// R-14. Sarkari yojanaon par mediapersons se bayan (yespunjab, 31 Jul 2026) — sarkar ki uplabdhiyon ka dawa/bayan; koi vishesh kaam nahi; non-whitelist source.
// ---- Punjab (pb9): Baljinder Kaur END ----

// --- PB9: Mansa jila ---

punjabWorks['vijay-singla'] = [
  { title: 'Vidhan Sabha me Mansa shahar me gutter ke overflow aur usse failti bimariyon par Singla ne dhyanakarshan prastav uthaya, Local Government mantri ne jawab diya', category: 'Paani', badge: 'sarkari', sourceLabel: 'Punjab Vidhan Sabha Bulletin', sourceUrl: 'https://punjabassembly.gov.in/images/docs/AssemblyFiles/16/174/20231128/Documents/Bull_1_28-11-2023.pdf', date: '2023-11-28', note: '16th Vidhan Sabha ke 28 Nov 2023 ke bulletin me Calling Attention Notice (No. 20): Singla ne Local Government mantri ka dhyan Mansa shahar me gutter ke overflow se bimariyon ke failne ki taraf dilaya, mantri ne sadan me jawab diya. Date bulletin ke session din (28 Nov 2023) se li gayi.', period: '2022-2027', stage: 'pahal' },
  { title: 'Mansa ke 27 nagar nigam wards ki purani seema bani rahe, is maang par Singla ki pahal par LG mantri ne ashwashan diya', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/mc-polls-will-be-held-without-fresh-delimitation-mla/', date: '2026-01-05', note: 'Singla ne Mansa Municipal Council ke adhyaksh ke saath Chandigarh me Local Government mantri Ravjot Singh se milkar maang rakhi ki nagar nigam chunav naye parisiman ke bina ho; mantri ne ashwashan diya ki sabhi 27 wards ke kshetra aur number pehle jaise rahenge. Singla ka apna dawa unke Facebook video ke hawale se Tribune ne report kiya; shahar ke nivasion ki maang thi.', period: '2022-2027', stage: 'swikriti' },
  { title: 'CM Bhagwant Mann ne 1 pratishat commission ke bhrashtachar ke aarop me Singla ko mantri pad se barkhast kiya, Anti-Corruption Bureau ne usi din giraftar kiya', category: 'Any', badge: 'news', sourceLabel: 'Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/chandigarh/punjab-cm-bhagwant-mann-sacks-health-minister-vijay-singla-over-corruption-charges/articleshow/91761806.cms', date: '2022-05-24', note: 'Mann ne video sandesh me ghoshna ki ki swasthya vibhag ke tender aur khareed me 1 pratishat commission mangne ke aarop par Singla ko cabinet se hataya ja raha hai aur police karwai ke nirdesh diye. Usi din ACB ne Singla aur unke OSD Pradeep Kumar ko giraftar kiya; Punjab Health Systems Corporation ke SE Rajinder Singh ki shikayat par Prevention of Corruption Act ke tahat mamla darj hua.', period: '2022-2027' },
  { title: 'Mohali court ne Singla ko 14 din ki nyayik hirasat me bheja, OSD Pradeep Kumar bhi hirasat me', category: 'Any', badge: 'news', sourceLabel: 'Telegraph India (PTI)', sourceUrl: 'https://www.telegraphindia.com/amp/india/sacked-punjab-minister-vijay-singla-sent-to-14-day-judicial-custody/cid/1867169', date: '2022-05-27', note: 'Pehle 3 din ki police hirasat ke baad Mohali court ne Singla ko 14 din ki nyayik hirasat me bheja; agle sunwai 10 June. Shikayatkarta SE Rajinder Singh ne aarop lagaya tha ki pariyojnaon ke awantan me Rs 1.16 crore rishwat aur sarkari thekon me 1 pratishat commission manga gaya tha.', period: '2022-2027' },
  { title: 'Lagbhag 2 mahine jail me rahne ke baad Singla bhrashtachar ke mamle me jamanat par riha', category: 'Any', badge: 'news', sourceLabel: 'Hindustan Times', sourceUrl: 'https://www.hindustantimes.com/cities/chandigarh-news/out-on-bail-sacked-aap-minister-singla-gets-politically-active-in-mansa-101659566363310.html', date: '2022-07-08', note: 'HT (Aug 2022) ke mutabik Singla 8 July ko jail se bahar aaye; uske baad se media se doori banaye rakhi. Date HT report me darj rihaai ke din se li gayi hai.', period: '2022-2027' },
  { title: 'Jamanat par bahar aane ke baad Singla ne Bathinda me samarthakon ko sambodhit kiya aur aaropon se inkar kiya', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/out-on-bail-sacked-minister-singla-addresses-supporters-411833', date: '2022-07-12', note: 'Singla ka jawab: ‘Agar koi saabit kar de ki maine ya mere parivar ke kisi sadasya ne ek rupaya bhi liya ya manga hai, to main apni galti maan lunga.’ Unhone kaha mantri ke roop me unhone kuch galat nahi kiya, parivar 30 saal se jan-seva me hai, aur Mansa me medical college, nayi sadken aur aspataal banwane ka kaam jari rakhenge.', period: '2022-2027' },
  { title: 'Jamanat ke baad Singla phir sakriya, bhrashtachar ke sawal par jawab tal diya, AAP ne kaha mamla adalat me lambit hai', category: 'Any', badge: 'news', sourceLabel: 'Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/ludhiana/punjab-mla-axed-cabinet-graft-active-again-aap-matter-sub-judice-8166904/', date: '2022-09-22', note: 'IE se Singla ne kaha vikas karyon me ‘pichhle kuch mahinon ka antaral’ jald poora hoga, lekin bhrashtachar ke mamle par sawal par kaha ve vyast hain, baad me jawab denge. AAP pravakta Malwinder Kang ne kaha mamla adalat me lambit hone se MLA apna kaam jari rakh sakte hain. IE ne ye bhi darj kiya ki Mann ne pehle dawa kiya tha ki Singla ne galti kubool ki thi aur unke paas iska saboot hai.', period: '2022-2027' },
  { title: 'Giraftari ke 3 saal baad Mohali court me Singla ke khilaf bhrashtachar ke mamle me Punjab Police ne closure report dayar ki', category: 'Any', badge: 'news', sourceLabel: 'ThePrint (PTI)', sourceUrl: 'https://theprint.in/india/punjab-police-files-closure-report-in-corruption-case-against-ex-minister-vijay-singla/2673929/', date: '2025-06-28', note: 'Police ne Mohali court me closure report dayar ki; shikayatkarta Rajinder Singh ne adalat me kaha ki ve janch report se sahmat hain aur report swikar hone par unhe koi aitraz nahi. Court ne mamle ko 14 July ke liye rakha. Vipaksh ne AAP sarkar par apne MLA ko ‘clean chit’ dene ka aarop lagaya. Aarop tha ki Rs 58 crore ki pariyojnaon ke awantan ke liye Rs 1.16 crore rishwat mangi gayi thi.', period: '2022-2027' },
  { title: 'CM Mann ne kaha voice sample forensic me match na hone par Singla ke khilaf mamla radd, cabinet me wapsi se inkar', category: 'Any', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/punjab/graft-case-against-singla-dropped-as-voice-samples-didnt-match-cm/', date: '2025-07-11', note: 'CM ke mutabik Mohali police ne 2 June 2025 ko cancellation report dayar ki thi; janch adhikari ne kaha Singla ke voice sample match nahi hue aur bhrashtachar ka koi thos saboot nahi mila, isliye mamla radd kar diya gaya. Court ne faisla 14 July ke liye reserved rakha tha — 14 July ke court order ki established media me alag se pushti nahi mili. Vipaksh ke mutabik Singla ke khilaf chargesheet dayar nahi hui thi, challan keval OSD Pradeep Kumar ke khilaf tha. Mann ne Singla ko cabinet me wapas lene se inkar kiya (15 mantri pehle se hain).', period: '2022-2027' },
];
// WORKER: vijay-singla (Mansa, AAP) — 9 entries (2 works, 7 negatives), 8 rejects. Retry-leads: TOI Jan-2023 (Hamirpur Dhaipi Aam Aadmi Clinic lokarpan lead — page 403 par nahi khula, live browser se verify karo).
// R-1. TOI (Jan 2023, MC posts article): Hamirpur Dhaipi me Aam Aadmi Clinic ka lokarpan MLA ne kiya, virodh ke beech — page 403 par nahi khula, source ke roop me istimal nahi. REJECT (retry-lead).
// R-2. Savera Times (19 Jul 2024): Mansa me 10 lakh paudhe lagane ka lakshya, MLA + DC ne Mansa Khurd me plantation drive shuru ki — chhota portal, established media nahi. REJECT.
// R-3. Tribune (~Jun 2025): Mansa me Rs 43.9 crore ki sewer pipeline pariyojna — Cabinet mantri Ravjot Singh ne kaam shuru kiya; MLA Singla ne keval maang rakhi, mantri ne Rs 5.5 crore ki sadkon ki maukhik swikriti di. MLA ki vyaktigat bhoomika nahi, mantri ki ghoshna. REJECT.
// R-4. Tribune (Oct 2026): CM Mann ka Mansa ITI foundation stone karyakram — Singla keval maujood the, ghoshnaen CM ne ki. REJECT (dusre neta ke karyakram me maujoodgi).
// R-5. HT (Jun 2024): CM ka Mansa roadshow, Singla saath me prachar me — chunav-prachar karyakram. REJECT.
// R-6. HT (Aug 2022): 'overseeing development projects in the constituency' — koi vishesh kaam nahi, vague. REJECT.
// R-7. Tribune (16-17 Oct 2026): Jhota hatya-kand me pradarshankariyon ka aarop ki mukhya aaropi Ashwani ko Singla ka sanrakshan milta tha; Singla ne inkar kiya ('pichhle 5 saal me koi mulakat ya baatchit nahi'). FIR me Singla ka naam nahi, keval aarop/shikayat. REJECT (negative nahi — niyam: shikayat me naam lekin FIR me naam nahi).
// R-8. Tribune (6 Oct 2026): dissenting MLAs article me Singla ka zikr (party ke saath unka samikaran badla) — party sambandhon ki tippani, kaam ya negative nahi. REJECT.

// QA-DROP (2026-10-18): worker ki ekmatra entry (Jhuneer school lokarpan) DNP India VIA DAILYHUNT aggregator-link par thi — canonical page khola hi nahi gaya; aggregator source = REJECT. Retry: DNP India ka asal page mile to entry banao.
punjabWorks['gurpreet-singh-banawali'] = [];
// WORKER: gurpreet-singh-banawali (Sardulgarh, AAP) — 1 entry, 8 rejects. Retry-leads: Jhuneer schools story ka non-aggregator original (DNP India) mil sakta hai to source upgrade karo; Rangla Punjab Vikas Scheme ka neta-war kharch record online uplabdh nahi hai (foundation me darj).
// R-1. Char minors aur Ghaggar bridge (Rs ~15 crore, Sardulgarh) ka lokarpan Jal Sansadhan Mantri Barinder Kumar Goyal ne kiya (tecraze.com, 2025-03-31) — MLA sirf bayan/mehfil me maujood the, vyaktigat bhoomika dastavej nahi. REJECT.
// R-2. Ratia-Sardulgarh sadak ki special repair ka shilanyas PWD Mantri Harbhajan Singh ETO ne kiya (5dariyanews) — MLA sirf maujood the. REJECT.
// R-3. TSPL CSR ke kaam (community centre + Farmer Resource Centre Talwandi Aklian, volleyball court Banawala gaon, jaggery unit Moosa — royalpatiala.in, 2022-23) — MLA ne sirf lokarpan kiya, paisa/kaam TSPL ka; vyaktigat bhoomika nahi. REJECT.
// R-4. Sardulgarh me Rs 24.50 crore ITI ka shilanyas CM Bhagwant Mann ne kiya (babushahi.com, Feb 2026) — MLA sirf maujood, mantri/manish sisodia ke karyakram me upasthiti. REJECT.
// R-5. July 2023 me Rorki-Sadhuwala baadh prabhavit ilakon ka daura (5dariyanews) — sirf nirikshan/daura, raahat/bandh kaam prashasan ka. REJECT.
// R-6. Tribune (Apr 2022) me jeet ke baad health-education priority ka bayan — sirf ghoshna/prastav, koi poora kaam nahi. REJECT.
// R-7. Oct 2026 me Mansa anti-drug activist ke hamle ke ghayal yuva se DMC Hospital Ludhiana me mulakat (Rediff) — sirf bhavanatmak daura, koi vikas kaam nahi. REJECT.
// R-8. Sirf 1 aapradhik mamla halafname ka (IPC 188/269, 2020 COVID virodh, Mansa) — pending mamla alone = negative nahi. Negatives: shoonya (koi FIR/chargesheet/janch MLA khud ke khilaf Mar 2022 ke baad established media me nahi mili).

punjabWorks['budh-ram'] = [
  { title: 'Bhimra pind me Rs 1.53 crore ki 7500-meter nahri-paani underground pipeline ka udghataan; saikdon kisan parivaron ko 35 saal baad nahri paani mila', category: 'Paani', badge: 'news', sourceLabel: 'Dainik Jagran (Punjabi)', sourceUrl: 'https://www.punjabijagran.com/punjab/mansa-residents-of-bhimra-village-weighed-mla-budh-ram-against-laddus-to-mark-the-laying-of-a-pipeline-9696617.html', date: '2026-10-12', note: 'Punjabi Jagran, Mansa reporter Harkrishan Sharma ki report: bani hui 7500-meter lambi nahri-paani underground pipeline ka vidhayak ne udghataan kiya; khushi me pindwasiyon ne vidhayak ko laddoo se tola. Project se lagbhag saikdon kisan parivaron ko labh milega; kisanon ne 35 saal baad nahri paani milne par khushi jatayi aur CM Mann ki sarkar ka dhanyavaad kiya. Vidhayak ke anusaar isi pind me sarkar ne ab tak lagbhag Rs 4 crore se zyada ke vikas kaam karwaye hain: lagbhag do saal pehle Rs 1 crore ki pipeline, waterworks se ghar-ghar paani ke liye Rs 25 lakh ki pipeline, Aam Aadmi Clinic, kheton ki sinchai ke liye Hakamwala minor ko concrete se pakka, aur galiyan-naliyan ke lagbhag Rs 40 lakh ke kaam jaari hain.', period: '2022-2027', stage: 'lokarpan' },
];
// QA-DROP (2026-10-18): 3 'Punjabi Tribune' entries (punjabitribuneonline.com — ye The Tribune group ka portal NAHI hai) whitelist par nahi — hatayi gain. Dainik Jagran (Punjabi) wali entry (Punjabi Jagran = Jagran group edition, batch-4 precedent) rakhi.
// PB9 worker — budh-ram (Budhlada SC, AAP)
// Pehchan pakki: Budh Ram, Budhlada (SC) seat no. 98 (distt. Mansa), AAP; 2022 me 88,282 vote jeete; 2017 me bhi jeete the; Jun 2023 se AAP Punjab ke karyakari adhyaksh (party post, constituency kaam nahi).
// Tenure 2022-2027 me media-reported constituency kaam kam hai; Punjabi Tribune (Tribune group) aur Dainik Jagran (Punjabi) se 4 entries.
// WORKER: budh-ram (Budhlada SC, AAP) — 4 entries, 9 rejects. Retry-leads: Jul 2026 attack case me FIR darj hoti hai to negative re-evaluate; DC Mansa ke through Rangla Punjab Vikas Scheme ke neta-war sanction list (MLA-was sifarish dastaveji hone par); Dainik Bhaskar/Jagran Mansa local pages me aur shilanyas/lokarpan.
// R-1. REJECT: SAD neta Kala Jawandha par hamle ka aarop — negative criteria fail. The Tribune, 15 Jul 2026: victim ne Budhlada MLA Budh Ram ko hamle ke peeche bataya; Harsimrat Kaur Badal ne samarthan kiya; MLA ne aarop ko bekasoor bataya. Article me hi likha hai 'police have not even registered an FIR' — FIR/chargesheet/janch me MLA ka naam nahi, isliye 'shikayat me naam, FIR me nahi' = NO.
// R-2. REJECT: 'Mukhyamantri Tirath Yatra' bus ka flag-off, Boha, 3 Jan 2024. Dainik Tribune: 43 shraddhaluon ki bas Naina Devi/Jwalaji/Chintpurni ke liye ravaana ki. Sarkari abhiyan ka keval shubharambh.
// R-3. REJECT: Vikas Kranti, Bathinda — Budhlada-Sunam road widening Rs 4.26 crore ka shilanyas CM Bhagwant Mann + Arvind Kejriwal ne kiya (presskitaquat, Dec 2022). MLA ki vyaktigat/dastaveji bhoomika report me darj nahi — kendriya/state pariyojna bina vyaktigat bhoomika = NO.
// R-4. REJECT: 36th Mother and Child Care Centre Budhlada (Rs 5.10 crore, 30-bedded) — CM ne samarpit kiya (daily24x7news, ~Jun 2023). CM ka karyakram; MLA ki bhoomika darj nahi; source bhi whitelist-bahar chhota portal.
// R-5. REJECT: 'Sarkar Aapke Dwar' shikayat-nivaran camp, Dodara, 17 Jul 2024 (Babushahi): MLA + ADC (J) ne logon ki samasyaen suni. Sirf nirikshan/daura.
// R-6. REJECT: single-use plastic ban awareness campaign, Bachat Bhawan (5DariyaNews): MLA ne bhaashan diya, CM Mann ka abhiyan bataya. Sarkari abhiyan me keval bhaagidari.
// R-7. REJECT: Budh Ram ko AAP Punjab ka karyakari adhyaksh banana, 12 Jun 2023 (The Tribune). Party pad hai, constituency kaam nahi.
// R-8. REJECT: Boha aur Bareta ke independent councillors ka AAP me shamil hona, Jun 2026 (YesPunjab). Party activity, kaam nahi.
// R-9. REJECT: halafnama ka 1 pending mamla (IPC 188, Bathinda Kotwali, 2020) — tenure se pehle ka; halafname ke pending mamle alone negative nahi.

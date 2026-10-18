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

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

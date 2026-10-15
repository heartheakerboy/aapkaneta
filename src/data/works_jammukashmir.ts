// Jammu & Kashmir — seat-wise works registry.
//
// J&K works mining queue me hai (Sikkim se pehle; parent agent dwara kiya jayega).
// Is file ka format baaki rajyon ke works_<state>.ts files jaisa hai:
// neta slug -> uske kshetra me hue kaam (WorksEntry objects).
//
// District batches (research ke liye): Kupwara, Baramulla, Bandipora, Ganderbal, Srinagar,
// Budgam, Pulwama, Shopian, Kulgam, Anantnag, Kishtwar, Doda, Ramban, Reasi, Udhampur,
// Kathua, Samba, Jammu, Rajouri, Poonch.

export const jammuKashmirWorks: Record<string, any[]> = {};

// ---- Kupwara district batch (researched 2026-10-15) ----
// Per-MLA reject-logs (sankshipt):
// - javaid-ahmad-mirchal (JKNC, Karnah): 13 REJECT (0 entries) — Sadhna Tunnel swikriti (Rs 3,330 cr kendra-pariyojna, sirf dhanyavad), 12 MW Karnah power project (sirf Assembly sawal, JKSPDCL ka purana upgradation), 10 schools upgradation maang (sarkar ne koi approval nahi diya), PMJVK sports projects (District Committee ki swikriti, MLA sirf sawal-karta), review meetings/daure/mulaqat, LG Shaurya Gatha Complex udghatan me sirf maujoodgi, "karenge" vaade, PS ke unverified daave (approved source nahi), CDF jila-utillisation khabar (Karnah-specific naamzada kaam nahi). NEGATIVE: koi nahi ("Javaid Mir" giraftari khabren JKLF commander ki — galat vyakti, disqualified).
// - saifullah-mir (JKNC, Trehgam): 11 REJECT (0 entries) — Kralpora review meeting (nirikshan), Keran Bazar steel bridge (divisional/district admin ka, MLA ka zikr nahi), Keran-Jumgund tunnel DPR maang (sirf aashwasan), Skill Mission-Hunarmand udghatan (DC/NITI Aayog ka program, seat bhi bahar), Sewa Parv camp (sirf daura), school-upgradation sawal (sarkar: "koi prastav nahi"), LG Sinha ke Trehgam karyakram (Rs 1.60 cr playground + Rs 1.94 cr mandir shilanyas) me sirf maujoodgi, mantri ki Trehgam samiksha (sirf meeting), JJM Zero Hour maang, 2014 mantri-kaalin hospital udghatan (pre-tenure). NEGATIVE: koi nahi.
// - qaysar-jamshaid-lone (JKNC, Lolab): 2 entries rakhi. QA-DROP 5 — CDF Rs 50 lakh bijli dhaancha (JK Monitor) + CDF Rs 60 lakh school infrastructure (Alfaaz): non-whitelist source + galat `sarkari` badge; BHSS Lalpora shilanyas (The Public Mirror wordpress blogspot): blogspot-only; Wavoora-Khumriyal macadamization (Alfaaz only): non-whitelist ekmatra srot; Khurhama-Kianard + Rang Zabdi shilanyas (The Public Mirror): blogspot-only. Reject-log me baaki 11 bhi (mantri karyakram maujoodgi, tunnel proposal exist nahi, maang-maatra items).
// - sajad-gani-lone (JKPC, Handwara): 1 entry. 24 REJECT — Lower Rajwar WSS (udghatan postpone + disputed credit), Drugmulla-Hatmulla Bridge (Dy CM ne kiya, Lone aamantrit nahi), Bangus road "nearing completion" bayan, Dy CM ka "ek ghanta nahi" aarop (rajnaitik, negative nahi), review baithaken/daure, GMC fund-diversion aarop (mantri ne khandan kiya), mantri-kaalin/pre-Oct-2024 archive. NEGATIVE: koi nahi.
// - khursheed-ahmad-shiekh (IND, Langate): 1 entry (badge QA-flip: worker ne `news` likha tha — evidence sirf AIP pravakta ka press daawa hai, swatantra vibhagiya pushti nahi; isliye `dawa` kar diya). 24 REJECT — KNS/Alfaaz/Kashmir Rays non-whitelist khabrein (Nowgam bridge Rs 28 cr, Qaziabad school lokarpan), virodh-pradarshan, sirf maang/bayan, vidhayi mamle (ruckus/resolution disallow), Tulwari bridge shikayat (MLA ki bhoomika nahi), ceremonial maujoodgi, galat vyakti/avadhi (Engineer Rashid ki khabar). NEGATIVE: koi nahi.
// - mir-mohammad-fayaz (PDP, Kupwara): 2 entries. 15 REJECT — review meetings, darbar/darbar-shikayat, Skill Mission/Aakanksha Haat (DC ke program, ceremonial), PR-jaisi khabrein (whitelist-bahar), X-post daave, CM ke Assembly jawab (MLA sirf sawalkarta), party pad, YouTube-only. NEGATIVE: koi nahi ("Abdul Majeed Mir"/"Fayaz Ahmed Mir" ke case galat vyaktiyon ke).
// Coordinator QA note (2026-10-15): saare 6 fragment kholkar padhe; Qaysar ke 5 entries drop (upar), Khursheed ka badge flip; titles/notes Roman-Hinglish only (Python-verified), koi Devanagari/Meitei Mayek/₹-symbol nahi; har entry me 9 fields; dates calendar-valid aur Oct 2024–Oct 2026 window me; sabhi 6 slugs file me pehle se absent — koi overwrite nahi.

jammuKashmirWorks['sajad-gani-lone'] = [
  {
    title: 'Handwara MLA Sajad Gani Lone ne GMC Handwara ke Associated District Hospital me 7 bistar wale dialysis centre ka udghatan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/jammu-and-kashmir-news/kashmir/sajad-lone-inaugurates-dialysis-centre-gmc-handwara-12397090',
    date: '2026-08-19',
    note: 'Rising Kashmir ki post-event reporting ke anusaar Sajad Gani Lone ne GMC Handwara ke Associated District Hospital me 7 bistar wala dialysis centre udghaatit kiya, jisse kidney ke mareezon ko ilaj ke liye Srinagar tak ka lamba safar nahi karna padega. Credit-transparency: Lone ne khud bataya ki is pariyojna ke liye zila prashasan ne lagbhag Rs 30 se 40 lakh diye aur unhone apne Constituency Development Fund (CDF) se Rs 32 lakh ka yogdaan diya; ye Rs 32 lakh ka CDF yogdaan MLA ki dastavezi bhoomika hai, baaki rakam zila prashasan ki hai. Stage ka sach: udghatan ho chuka hai (lokarpan), lekin Lone ne swayam mana ki centre poori tarah karyatmak abhi nahi hai - dialysis technicians ke pad abhi srijit nahi hue hain aur doctor uplabdh nahi hain, isliye centre ki poorn karyakshamta abhi swasthya prashasan ke kadam par nirbhar hai. Note: article ki text-copy me saal darj nahi tha; Greater Kashmir ki same-event reporting me "Wednesday" aur 15 August ke baad ka zikr, Rising Kashmir Short version ki "Aug 20, 2026 03:51 IST" stamp aur August 2026 ke search-crawl milakar date 2026-08-19 (Budhwar) maani gayi hai.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['javaid-ahmad-mirchal'] = [];

jammuKashmirWorks['saifullah-mir'] = [];

jammuKashmirWorks['qaysar-jamshaid-lone'] = [
{
    title: 'Machil ke seemavarti ilakon me kul Rs 20.89 crore ki chaar sadak pariyojnaon ka shilanyas hua; MLA ne buniyaad rakhi',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/over-rs-2089-cr-road-projects-launched-in-kupwaras-machil-qaysar-lone-12542573',
    date: '2026-09-16',
    note: 'Chaar sadkein: Dudi Chountiware se Chountiware Bala (Rs 7.27 cr), Dudi Chountiware se Lindub (Rs 3.75 cr), Chountiware/Hardaring se Khan Basti (Rs 5.09 cr), Dudi/Chountiware se Shareen Karaie (Rs 4.76 cr). Fund ka srot aur executing agency article me specify nahi hai; MLA ne shilanyas kiya. Stage ka sach: shilanyas hua hai; nirman shuru ya poora hone ki reporting nahi mili.',
    period: '2024-2029',
  },
{
    title: 'Devar Lolab me adhure NT-PHC bhavan ke bache hue kaam ke liye UT Capex Budget 2026-27 me Rs 40 lakh rakhe gaye; MLA ke dhyaan-akarshan prastav par swasthya mantri ne sadan me jawab diya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Kashmir Life',
    sourceUrl: 'https://kashmirlife.net/rs-40-lakh-earmarked-to-complete-devar-lolab-health-centre-revised-dpr-under-scrutiny-sakina-itoo-453615/',
    date: '2026-09-25',
    note: 'PHC bhavan 2020-21 me district sector se manzoor hua tha (lagat Rs 199 lakh, executing agency J&K Housing Board). Housing Board ne Rs 206.64 lakh ki revised DPR bheji hai jo CMO Kupwara ke paas scrutiny me hai; Rs 40 lakh revised DPR final hote hi kharch hoga. MLA ki dastavezi bhoomika: unhone vilamb par Calling Attention Motion lagaya tha. Stage ka sach: swikriti (budget me rakam rakhi gayi) hui hai; DPR abhi scrutiny me hai, kaam shuru nahi hua.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['khursheed-ahmad-shiekh'] = [
{
    title: 'Langate main town ke liye Spring Development Project (drinking water) ki administrative approval ke baad formal tendering shuru hui, jiska credit AIP ke anusaar MLA Sheikh Khurshid Ahmad ke prashasanik follow-up ko diya gaya',
    category: 'Paani',
    badge: 'dawa',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/aip-welcomes-tendering-of-langate-spring-project/',
    date: '2025-11-04',
    note: 'Ye khabar AIP ke mukhya pravakta Inam Un Nabi ke press bayan par based hai, jisme unhone daawa kiya ki MLA Sheikh Khurshid Ahmad ne prashasan ke saath sustained aur result-oriented follow-up karke is long-pending drinking water pariyojna ko administrative approval se tendering stage tak pahunchaya. Rising Kashmir ne tendering ko post-event news ki tarah report kiya hai. Stage ka sach: pariyojna abhi tendering charan me hai, kaam shuru ya poora nahi hua. Fund ka srot (CDF ya Jal Shakti/PHE departmental budget) article me clear nahi hai, isliye is entry me fund par koi daawa nahi kiya gaya. MLA ki bhoomika party ke daawe tak seemit hai, swatantra vibhagiya pushti reporting me nahi hai.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['mir-mohammad-fayaz'] = [
  {
    title: 'Kawari se Awoora tak 1.6 km sadak (PMGSY-IV Package JK08-4008, lagat Rs 329.63 lakh) ki dashkon se atki pariyojna ka kaam shuru hua, jisme MLA Mir Mohammad Fayaz ne daawa kiya ki unhone ise chunauti ke roop me lekar zameen par utarwaya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/after-decades-kupwaras-kawari-awoora-road-project-finally-takes-off-12244025',
    date: '2026-08-08',
    note: 'Greater Kashmir ki post-event reporting ke anusaar Kawari-Awoora sadak (RD 700 se Manwan Bala, 3.75 metre carriageway) PMGSY-IV ke tehat sanction hui hai aur nirmaan kaam Bhat Infrastructure ko saunpa gaya hai, 548 din me poora hone ka lakshya hai. Credit-transparency: fund ka srot kendra sarkar ki PMGSY yojna hai, MLA ka CDF isme darj nahi hai; MLA ki bhoomika unke apne bayaan ("I took it as a challenge and ensured that the project was brought on the ground") aur sthaniya logon ke dhanyavaad tak seemit hai, swatantra vibhagiya pushti article me nahi hai. Stage ka sach: kaam shuru ho chuka hai (swikriti + thekedaar niyukti paar), sadak poori nahi hui hai. Note: article ki text-copy me saal darj nahi tha; dateline "Kupwara, Aug 8", October 2026 ka archive snapshot aur September 2026 ka search-crawl milakar date 2026-08-08 maani gayi hai.',
    period: '2024-2029',
  },
  {
    title: 'Halmathpora-Kupwara sadak ki khasta haalat par shikayat-khabar ke jawab me MLA Mir Mohammad Fayaz ne daawa kiya ki sadak ko haal hi me administrative approval mil gayi hai aur jald macadamization hogi',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/halmathpora-kupwara-road-in-shambles-commuters-suffer/',
    date: '2026-05-28',
    note: 'Greater Kashmir ki shikayat-khabar (Halmathpora-Kupwara sadak par gaddhe, durghatnaon ka dar) ke jawab me MLA ka akela bayan hai ki sadak ko administrative approval haal me mil gayi hai aur sab theek raha to jald macadamization hogi. Credit-transparency: GO ya vibhagiya pushti article me nahi hai, isliye ye swikriti ka daawa hai, dastavezi swikriti nahi; koi fund-srot (CDF ya R&B budget) article me darj nahi hai. Stage ka sach: ghoshna charan - na kaam shuru hua hai, na poora. Note: article ki text-copy me saal darj nahi tha; dateline "Kupwara, May 28" aur August 2026 ke aaspaas ke search-crawl se date 2026-05-28 maani gayi hai.',
    period: '2024-2029',
  },
];

// District batch 3: Bandipora — pending
// District batch 4: Ganderbal — pending
// District batch 5: Srinagar — pending
// District batch 6: Budgam — pending
// District batch 7: Pulwama — pending
// District batch 8: Shopian — pending
// District batch 9: Kulgam — pending
// District batch 10: Anantnag — pending
// District batch 11: Kishtwar — pending
// District batch 12: Doda — pending
// District batch 13: Ramban — pending
// District batch 14: Reasi — pending
// District batch 15: Udhampur — pending
// District batch 16: Kathua — pending
// District batch 17: Samba — pending
// District batch 18: Jammu — pending
// District batch 19: Rajouri — pending
// District batch 20: Poonch — pending

// ---- Baramulla district batch (researched 2026-10-15) ----
// Per-MLA reject-logs (sankshipt):
// - irshad-rasool-kar (JKNC, Sopore): 1 entry (Ningli Nallah crossing shilanyas). 13 REJECT — KNS non-whitelist daave (Rs 17 cr roads), eco park plan, de-congestion plan (pre-event), gaon daure, "karenge" khabrein, budget bayaan, Rs 10 cr degree colleges sirf bayan (bina GO ke ghoshna), Sewa Parv bhashan, AMRUT Rs 73.38 cr (whitelist-bahar; sarkari swikriti, MLA ki bhoomika nahi), playfield (Mantri Satish Sharma ne shilanyas kiya, Kar sirf maujood), SDH Sopore CT Scan (Union Minister ne kiya), maang-maatra items. NEGATIVE: koi nahi.
// - javid-ahmad-dar (JKNC, Rafiabad — mantri): 9 entries (sab Rafiabad seat ke vyaktigat shilanyas/lokarpan, credit-disclosure sahit). 11 REJECT — Ladwa-Siterwan shilanyas (Daily Excelsior fetch timeout, snippet se entry mana), review meetings, Rs 66 cr aur Rs 29.29 cr items (sab non-whitelist), GDC Hadipora building (non-whitelist), macadamization roads (non-whitelist), Model Panchayat Ghars (JK Monitor), raajnaitik bayaan, Nadihal items (seat-attribution doubt), pre-event announcements. NEGATIVE: koi nahi ("Javaid Ahmad Dar" 2013 Jaish operative — galat vyakti, alag shakhs).
// - sajjad-shafi (JKNC, Uri): 2 entries (SNCU + gazebo huts lokarpan). 12 REJECT — assembly sawal (maang), officers ko daant (bayaan), ceasefire rehabilitation demand (relief + non-whitelist), Dy CM ka Handwara bridge (kshetra-bahar + dusre ka kaam), LG event maujoodgi, Indoor Stadium shilanyas (Mantri Satish Sharma, non-whitelist), Kalgi Indoor Stadium (non-whitelist, mantri ka kaam), GHSS Boniyar (non-whitelist, mantri Sakeena Itoo ka kaam), CM fruit-mandi (non-whitelist, maujoodgi), blood donation camp (relief, non-whitelist), snowfall inspection (nirikshan), NS Bridge (pre-event). NEGATIVE: koi nahi.
// - javid-hassan-baig (JKNC, Baramulla): 0 entries — KHAALI. 12 REJECT — review meetings, quarrying bayaan, GDC Women Science Block (Minister Sakeena Itoo ne kiya), "CDF library culture" (bhavishya ghoshna), Master Plan (prastav), GMC expansion bayan (sarkari "soon"), nirikshan (YouTube), generic daave, 14 projects Rs 24.62 cr (sarkari, non-whitelist), Aspirational Districts (maang, non-whitelist), 2018-era (pre-tenure), BPS Delina (Minister Javid Ahmad Dar ne kiya — galat-vyakti guard: dono alag vyakti). NEGATIVE: koi nahi.
// - pirzada-farooq-ahmed-shah (JKNC, Gulmarg): 1 entry (Chichlora-Lalpora playgrounds shilanyas). 8 REJECT — Daily Excelsior interview (fetch timeout + kamzor attribution), "modern lines" vision (karenge), skill initiative (press ghoshna, bhavishya), fruit mandi (CM ne kiya, KNS non-whitelist), shawl showroom (private), kashmirimages/horizon items (whitelist-bahar), Zero Hour maang, nirikshan. NEGATIVE: koi nahi.
// - irfan-hafiz-lone (INC, Wagoora–Kreeri): 0 entries — KHAALI. 8 REJECT — CDF ghoshna (KNS, whitelist-bahar, bina sanction), RO purifiers/CCTV (whitelist-bahar, tender stage), GMS Kohlin (DDC Chairperson ne kiya, whitelist-bahar), Watershed Yatra (ceremonial, whitelist-bahar), YouTube daava (unverifiable), Wavoora-Khumriyal (galat vyakti — Lolab ke Qaysar Lone ka kaam), virodh-pradarshan (raajnaitik), school daura (bayaan). NEGATIVE: koi nahi.
// - javaid-riyaz (JKNC, Pattan): 0 entries — KHAALI. REJECT — Muharram daura (non-whitelist, review), pani/AMRUT/CHC maang (maang-maatra), industrial estates (Dy CM ka announcement, non-whitelist), Zero Hour maang (non-whitelist), school felicitation (ceremonial), smart classroom (YouTube-only), JJM inspection (nirikshan + dusra jila), rail bridge opinion (MLA se sambandh nahi), CDF tenders (tender listing news nahi). NOTE: CDF tenders se kharch dikh raha hai par whitelisted press me post-event reporting nahi — kamzor attribution se behtar khaali profile. NEGATIVE: koi nahi.
// Coordinator QA note (2026-10-15): 4 worker reports ka QA kiya; Javid Hassan Baig vs Javid Ahmad Dar namesake guard verify; Dar ki entries me mantri-bhoomika ka credit-disclosure darj; saari dates Oct 2024–Oct 2026 window me; titles/notes Roman-Hinglish only (Python-verified), koi Devanagari/Urdu script/rupee-symbol nahi; har entry me 8 fields (file format ke anusaar); sabhi 7 slugs file me pehle se absent the — koi overwrite nahi.

jammuKashmirWorks['irshad-rasool-kar'] = [
  {
    title: 'Ningli Bala me Ningli Nallah crossing ka shilanyas, Amberpora ka Aak Bab Bridge bhi poora hoga',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/mla-sopore-lays-foundation-for-key-flood-control-crossing/',
    date: '2025-12-27',
    note: '27 Dec 2025 ko MLA ne khud Ningli Bala (Sopore) me Ningli Nallah par nallah crossing ka shilanyas kiya; lagat lagbhag Rs 50 lakh; kaam I&FC Division, Sopore karega; isi initiative me Amberpora ka Aak Bab Bridge bhi poora hoga. Credit-transparency: fund ka srot article me specified nahi — sirf executing agency (I&FC Division) di gayi hai. Stage ka sach: shilanyas (kaam abhi poora nahi hua).',
    period: '2024-2029',
  },
];

jammuKashmirWorks['javid-ahmad-dar'] = [
  {
    title: 'Doabgah me Nallah Vijibal par RCC pul ka shilanyas, Rafiabad',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/javid-dar-reaffirms-grassroots-development-push-12113070',
    date: '2026-06-27',
    note: 'Doabgah me Nallah Vijibal par 1x30-metre RCC plate girder pul ka shilanyas; NABARD RIDF se lagbhag Rs 629.41 lakh, PW(R&B) banayega. Credit-transparency: sarkari yojana ka pariyojna hai; Dar ne mantri ke roop me vyaktigat roop se shilanyas kiya, unki bhoomika udghatan tak seemit hai. Stage: shilanyas (kaam abhi poora nahi).',
    period: '2024-2029',
  },
  {
    title: 'Ladoora me 6 km inner link sadkon ke sudhar ka shilanyas, Rafiabad',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/javid-dar-reaffirms-grassroots-development-push-12113070',
    date: '2026-06-27',
    note: 'Ladoora ki 6 kilometre inner link sadkon ke majbootikaran/sudhar ka shilanyas, lagbhag Rs 507.24 lakh; all-weather connectivity ka lakshya. Credit-transparency: sarkari pariyojna hai; Dar ne mantri ke roop me shilanyas kiya. Stage: shilanyas (poora nahi).',
    period: '2024-2029',
  },
  {
    title: 'Rohama Chowk Clock Tower ka lokarpan, Rafiabad',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/javid-dar-reaffirms-grassroots-development-push-12113070',
    date: '2026-06-27',
    note: 'Rohama Chowk par Clock Tower ka lokarpan — Dar ne vyaktigat roop se udhghatan kiya. Credit-transparency: sarkari pariyojna ka lokarpan hai; fund-srot article me nahi diya gaya. Stage: lokarpan (poora).',
    period: '2024-2029',
  },
  {
    title: 'Chijhama Dak Bungalow me atirikt aawas block ka shilanyas, Rafiabad',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/javid-dar-reaffirms-grassroots-development-push-12113070',
    date: '2026-06-27',
    note: 'Dak Bungalow Chijhama me additional accommodation block ka shilanyas, Dar ne kiya. Credit-transparency: article me is pariyojna ki lagat ya fund-srot nahi diya gaya. Stage: shilanyas.',
    period: '2024-2029',
  },
  {
    title: 'Humdub Panzalla me Community Hall-cum-Multipurpose Centre ka shilanyas, Rohama',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Kashmir Life',
    sourceUrl: 'https://kashmirlife.net/minister-javid-dar-launches-rs-4-5-crore-development-projects-in-baramulla-412941/',
    date: '2025-11-11',
    note: 'Rohama block ke Humdub Panzalla me Community Hall-cum-Multipurpose Centre ka shilanyas, Rs 65 lakh (District Capex/BDC Grants). Credit-transparency: sarkari yojana hai; Dar ne mantri ke roop me vyaktigat roop se shilanyas kiya. Stage: shilanyas.',
    period: '2024-2029',
  },
  {
    title: 'Budden Saripara me RCC box-type culvert ka shilanyas, Rafiabad',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Kashmir Life',
    sourceUrl: 'https://kashmirlife.net/minister-javid-dar-launches-rs-4-5-crore-development-projects-in-baramulla-412941/',
    date: '2025-11-11',
    note: 'Rafiabad block ke Budden Saripara me RCC box-type culvert ka shilanyas, Rs 32.90 lakh (UT Capex). Credit-transparency: sarkari yojana hai; Dar ne mantri ke roop me shilanyas kiya. Stage: shilanyas.',
    period: '2024-2029',
  },
  {
    title: 'Kangroosa me Community Hall ka shilanyas, Kandi Rafiabad',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Kashmir Life',
    sourceUrl: 'https://kashmirlife.net/minister-javid-dar-launches-rs-4-5-crore-development-projects-in-baramulla-412941/',
    date: '2025-11-11',
    note: 'Kandi Rafiabad ke Kangroosa me Community Hall ka shilanyas, Rs 80 lakh (District Capex/PRI Grants). Credit-transparency: sarkari yojana hai; Dar ne mantri ke roop me shilanyas kiya. Stage: shilanyas.',
    period: '2024-2029',
  },
  {
    title: 'Kangroosa me BDC office building ka shilanyas, Kandi Rafiabad',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Kashmir Life',
    sourceUrl: 'https://kashmirlife.net/minister-javid-dar-launches-rs-4-5-crore-development-projects-in-baramulla-412941/',
    date: '2025-11-11',
    note: 'Kandi Rafiabad ke Kangroosa me Block Development Council office building ka shilanyas, Rs 125.16 lakh (UT Capex). Credit-transparency: sarkari yojana hai; Dar ne mantri ke roop me shilanyas kiya. Stage: shilanyas.',
    period: '2024-2029',
  },
  {
    title: 'GDC Hadipora me Fashion Designing Centre ka lokarpan, Rafiabad',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/javid-dar-inaugurates-fashion-designing-centre-baramulla-12526014',
    date: '2026-09-12',
    note: 'Government Degree College Hadipora (Rafiabad) me Fashion Designing Centre (cutting, tailoring, sozni kaam) ka lokarpan — Dar ne udhghatan kiya. Credit-transparency: centre college prashasan ne sthapit kiya tha; Dar ki bhoomika udhghatan tak seemit; fund-srot article me nahi. Stage: lokarpan (poora).',
    period: '2024-2029',
  },
];

jammuKashmirWorks['sajjad-shafi'] = [
  {
    title: 'SDH Uri me pehli Sick Newborn Care Unit ka lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/sick-newborn-care-unit-inaugurated-at-sdh-uri/',
    date: '2024-11-16',
    note: 'MLA ne vyaktigat roop se SDH Uri me 8-bed wali Sick Newborn Care Unit ka lokarpan kiya — ye SDH Uri ki pehli SNCU hai, jisse navjaat shishu ab Baramulla ya Srinagar shift kiye bina vishesh dekhbhaal pa sakenge. Credit-transparency: article ke mutabik lagat lagbhag Rs 48 lakh hai; fund-srot article me bataya nahi gaya. Suvidha Health Department ki hai, isliye poora shrey sarkari hai; MLA ki bhoomika sirf lokarpan tak seemit rahi. Stage: lokarpan (poora).',
    period: '2024-2029',
  },
  {
    title: 'GDC Uri me gazebo huts ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/mla-secy-higher-education-inaugurates-gazebo-huts-at-gdc-uri-12630587',
    date: '2026-10-06',
    note: 'MLA ne Secretary Higher Education ke saath milkar Government Degree College Uri me naye gazebo huts ka lokarpan kiya; saath me college ki official website aur magazine bhi launch hui. Credit-transparency: suvidha Higher Education Department ki hai, fund-srot article me stated nahi; MLA ne department ke saath milkar lokarpan kiya. Stage: lokarpan (poora).',
    period: '2024-2029',
  },
];

jammuKashmirWorks['javid-hassan-baig'] = [];

jammuKashmirWorks['pirzada-farooq-ahmed-shah'] = [
  {
    title: 'Chichlora aur Lalpora playgrounds ke vikas ka shilanyas, Gulmarg',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/gk-top-news/farooq-shah-lays-foundation-stone-of-playgrounds/',
    date: '2024-12-03',
    note: 'MLA ne Gulmarg kshetra ke Chichlora aur Lalpora playgrounds ke vikas ka shilanyas rakha; Chichlora playground lagbhag Rs 1.19 crore ki lagat se J&K Sports Council se banwaya ja raha hai; shilanyas ke avsar par SDM Gulmarg, Kunzer-Karhama ke tehsildar aur BDO Lalpora maujood the. Credit-transparency: kaam J&K Sports Council execute kar raha hai — MLA ne shilanyas rakha; yahi unki dastavezi bhoomika hai. Stage: shilanyas (kaam abhi poora nahi).',
    period: '2024-2029',
  },
];

jammuKashmirWorks['irfan-hafiz-lone'] = [];

jammuKashmirWorks['javaid-riyaz'] = [];

// ---- Bandipora district batch (researched 2026-10-15) ----
// Per-MLA reject-logs (sankshipt):
// - hilal-akbar-lone (JKNC, Sonawari): 2 entries rakhi (SDM office shilanyas + 1 NEGATIVE: FIR 02/2021 UAPA, bail ke saath pending). 12 REJECT — NTPHC Odina shilanyas (Rs 240.08 lakh, Kashmir Convener/News Zone: non-whitelist); Ajas me motorable bridge (Rs 48.89 lakh) + Tehsil/Niabat office shilanyas (dailysach.in: non-whitelist); irrigation modernisation (sarkari yojna, MLA sirf sawal-karta, mantri ka jawab); review meetings/public darbar; Dy CM tour maujoodgi; "karenge" vaade; Sadnha Tunnel dhanyavad (Karnah seat bahar); 2014 mantri-kaalin items (pre-term).
// - nizam-uddin-bhat (INC, Bandipora): 1 entry rakhi (DH Bandipora ICU lokarpan, Daily Excelsior). 14 REJECT — HKM College aashwasan (Rs 1 crore girls rest room + Rs 30 lakh CDF bus: agle FY ke vaade, ghoshna star); CDF review meeting (nirikshan); Daily Excelsior "Bandipora remains backward" (purana karyakaal, Coalition-govt era); Chunttimulla-Kudara + C.A. Khan-Gamroo sadak approval (Srinagar Mail: non-whitelist); Rs 2.07 cr PMJVK school projects (KNS: non-whitelist); Gulshan Chowk nirikshan; Veterinary Hospital shilanyas (Mantri Dar ka karyakram, sirf maujoodgi); Forest Park udghatan (mantri ka kaam); Udhyam Yuva Fest (ceremonial, non-whitelist); Dy CM tour maujoodgi; CM ka Rs 100 cr package karyakram (sirf maujoodgi); Consumer Forum aashwasan (maang); Udhyam Yuva Fest JKNS. NEGATIVE: koi nahi (affidavit 0 cases, koi FIR/case reporting nahi).
// - gurez (JKNC, Gurez ST — Nazir Ahmad Khan Gurezi): KHAALI (0 entries). 15 REJECT — sab review meetings (sansthaagat + MoS bhoomika); "Dy Speaker Gurezi" power-projects coverage purane karyakaal ki (2015-2018); Gurez report card (Mar 2019, pre-term); Kanzalwan Bridge (BRO/Rajnath Singh ka kaam, sena pariyojna); Army tourism prashansa (sena ka kaam, MLA ka nahi); PMGSY forest-clearance (Assembly sawal, sarkari jawab); chopper service (2018, Mehbooba-era); 3-day tour (2013); CM tourism event maujoodgi; Calling Attention Jawdara-Barni road (maang); Minister Sakeena Gurez visit (colleague, maujoodgi); minister-ke-kaam reviews. NOTE (parent ke liye): Daily Excelsior "CM changes portfolios of 2 MoS" (July 24) ke mutabik Gurezi MoS hain (Animal & Sheep Husbandry independent charge + MoS PHE/I&FC/Agriculture/Health & Medical Education) — foundation minister-role cleanup me jodna; vibhagiya faisle seat-kaam nahi. NEGATIVE: koi nahi (affidavit 0 cases, koi FIR/case reporting nahi).
// Coordinator QA note (2026-10-15): titles/notes Roman-Hinglish only (Python-verified), koi Devanagari/Meitei Mayek/rupee-symbol nahi; har entry me 8-9 fields; dates calendar-valid aur Oct 2024-Oct 2026 window me; sabhi 3 slugs file me pehle se absent — koi overwrite nahi.

jammuKashmirWorks['hilal-akbar-lone'] = [
  {
    title: 'Sumbal me SDM office ke naye bhavan ka shilanyas MLA Hilal Akbar Lone ne rakha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/mla-sonawari-lays-foundation-for-sdm-office-building-at-sumbal/',
    date: '2025-12-04',
    note: 'Rising Kashmir ki post-event reporting ke anusaar Sonawari ke MLA Hilal Akbar Lone ne Sumbal me SDM office ke naye bhavan ka shilanyas rakha; karyakram me SDM Sumbal, Tehsildar Sumbal, Executive Engineer R&B Sumbal aur sthaniya nivaasi maujood the. Credit-transparency: MLA ne swayam swikara ki approval SDM Sumbal aur Executive Engineer R&B ke prayason se mili; nirmaan R&B vibhag karega — MLA ki dastavezi bhoomika shilanyas-karta tak seemit hai. Fund-srot article me stated nahi hai, isliye is entry me fund par koi daawa nahi kiya gaya. Stage: shilanyas hua hai; bhavan-nirmaan abhi poora nahi hua hai. Note: article ki text-copy me saal darj nahi tha; doosre portals (jknewslive, kashmirdotcom) par same-event 2025/12/04 ki dateline aur "Thursday" milakar date 2025-12-04 (Guruvar) maani gayi hai.',
    period: '2024-2029',
  },
  {
    title: 'MLA Hilal Akbar Lone ke khilaf Hajin thane me FIR 02/2021 — UAPA samhit kathit bhadkaau bhashan ka mamla; bail mil chuki hai, halafname me pending darj hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/front-page-2/mp-akbar-lones-son-booked-under-uapa-for-bdc-poll-speech/',
    date: '2021-02-16',
    note: 'Greater Kashmir ki established reporting ke anusaar Hilal Akbar Lone (us samay MP Akbar Lone ke putra, baad me 2024 me Sonawari se MLA chune gaye) ke khilaf Police Station Hajin me 9 Jan 2021 ko FIR 02/2021 darj hui — IPC ki dhara 153A, 188, 505, Section 125 PR Act aur Section 13 ULA(P) Act (UAPA). Aarop: Dec 2020 me DDC chunavon ke dauraan Gund Jahangeer (Hajin) me ek railiyon me kathit bhadkaau bhashan dena; police ke mutabik bhashan ka video social media par phaila tha. Lone ko Feb 2021 me giraftar kiya gaya aur Mar 2021 me Additional Sessions Judge Baramulla ne bail de di (Greater Kashmir + LiveLaw ki reporting). Stage ka sach: mamla 2024 ke halafname me aaj bhi pending darj hai (1 case), dosh-siddhi nahi hui hai — dosh-siddhi se pehle nirdosh maane jaane ka niyam laagu hota hai. Lone ka jawab: unhone giraftari ko "bina kanooni aadhar" aur mamle ko "jhuta aur behuda" bataya tha (LiveLaw). Yahan sirf FIR/bail/mukadme ki sthiti darj hai, koi dosh nahi lagaya gaya hai.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['nizam-uddin-bhat'] = [
  {
    title: 'District Hospital Bandipora me naye Intensive Care Unit (ICU) ka udghatan MLA Nizam Uddin Bhat ne kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/bhat-inaugurates-icu-at-dh-bandipora/',
    date: '2025-05-05',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Bandipora ke MLA Nizam Uddin Bhat ne District Hospital Bandipora me naye sthapit Intensive Care Unit (ICU) ka udghatan kiya; Medical Superintendent Dr. Masrat Iqbal Wani bhi saath the aur MLA ne aspatal ke vibhinn hisson ka daura karke sewaon ki gunvatta ka jayaza liya. Credit-transparency: ICU ki sthapna aspatal prashasan ki hai; article me fund-srot (CDF ya swasthya vibhag budget) stated nahi hai, isliye fund par koi daawa nahi kiya gaya — MLA ki dastavezi bhoomika udghatan-karta tak seemit hai. Stage: lokarpan ho chuka hai (poora). Note: article 6 May 2025 ko publish hua ("today" = 5 May 2025), isliye date 2025-05-05 rakhi gayi hai.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['gurez'] = [];

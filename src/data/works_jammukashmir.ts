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

// ---- Ganderbal district batch (researched 2026-10-15) ----
// Per-MLA reject-logs (sankshipt):
// - kangan (JKNC, Kangan ST — Mian Mehar Ali): 5 entries rakhi (Sumbal Bala R&B sadak shilanyas, GHS Hayan 6-room bhavan shilanyas Rs 53 lakh, Road Sector Capex 2026-27 Rs 6 crore order-based swikriti, sehat-bijli-connectivity package ghoshna [dawa], Arigoripora Rs 5 crore indoor stadium ghoshna [dawa]). 18 REJECT — non-whitelist (KNO, Valley Online, thekashmirhorizon); CM ke karyakram me maujoodgi; PMGSY kendriya swikriti (sirf ghoshna); pre-term items; galat vyakti (Mian Altaf ka Dar-ul-Uloom shilanyas, pita ka kaam); Assembly sawal/maang matr; "karenge" vaade; pre-event ghoshna (MCCH lokarpan kabhi hua nahi); shikayat-khabrein. NEGATIVE: koi nahi (whitelist me koi FIR/case reporting nahi; affidavit-only list whitelist me nahi).
// - omar-abdullah (JKNC, Ganderbal — CM Omar Abdullah): 1 entry rakhi (Ganderbal seat ke liye CDF se Rs 377.10 lakh swikriti, Greater Kashmir, 23 Sep 2025 — CDF MLA ka apna fund hai, isliye MLA-bhoomika ka kaam; CM-bhoomika caveat note me disclosed). 13 REJECT — sab CM-role ke sarkari inauguration tours (Rs 84.41cr/36.50cr/42.38cr tours, bridges, WSS, stadiums — sarkari kaam, MLA-bhoomika nahi); pre-event schedule (15 Oct 2026, post-event reporting nahi); Kangan ka kaam (seat bahar); rajya-star vishay (statehood, Pahalgam relief, e-SEHAT). NEGATIVE: koi nahi (whitelist me is karyakaal ki koi FIR/case/inquiry reporting nahi).
// Coordinator QA note (2026-10-15): titles/notes Roman-Hinglish only (Python-verified), koi Devanagari/rupee-symbol nahi; har entry me 8 fields; dates calendar-valid aur Oct 2024-Oct 2026 window me; dono slugs append se pehle file me absent — koi overwrite nahi. Omar CDF entry: CDF MLA ka apna discretionary fund hai — seat-vishesh swikriti MLA-role me rakhi gayi (Sajad Lone CDF precedent), CM-bhoomika caveat disclosed.

jammuKashmirWorks['kangan'] = [
  {
    title: 'MLA Kangan Mian Mehar Ali ne Sumbal Bala me lok nirman vibhag (R&B) ki ek zaroori sadak pariyojana ka shilanyas kiya, jo door-daraaz gaon ko all-weather connectivity degi',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/90-road-connectivity-achieved-in-kangan-mla-mian-mehar/',
    date: '2026-01-20',
    note: 'Greater Kashmir ne 20 Jan 2026 ko report kiya ki MLA ne Kangan ke Sumbal Bala ilake me ek lambi-lambit sadak pariyojana ka shilanyas kiya, jise PWD (R&B) banayega; poori hone par sehat, shiksha aur bazaar tak pahunch sudhregi. Fund-srot ka zikr article me nahi hai. Stage ka sach: shilanyas (kaam shuru hone ki avastha). Disclosure: isi bayan me MLA ne Sumbal bridge sahit kai sadak-pulon ki swikriti ka daawa bhi kiya, par us daawe ke liye koi GO/order ka hawala article me nahi — isliye entry ka aadhar sirf shilanyas wali post-event reporting hai.',
    period: '2024-2029',
  },
  {
    title: 'MLA Mian Mehar Ali ne Kangan ke Government High School Hayan ke naye 6-kamre wale permanent bhavan ka shilanyas kiya, anumaanit lagat Rs 53 lakh',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/decade-on-government-school-in-kangan-gets-its-building/',
    date: '2025-10-14',
    note: 'Greater Kashmir ne 14 Oct 2025 ko report kiya ki MLA ne High School Hayan (Kangan, Ganderbal) ke naye bhavan ka shilanyas kiya aur kaam shuru ho chuka tha; school ek dashak se tin-shed me chal raha tha (2012 me High School bana tha par permanent building kabhi nahi bani). EE R&B division Kangan ke mutabiq 6-room building Rs 53 lakh me banegi aur agle May tak poori hone ki ummeed thi. MLA ne iske liye DC Ganderbal, SDM Kangan aur R&B adhikariyon ka sahyog bataya; sthaniya logon ne maang poori hone par MLA ka shukriya ada kiya. Stage ka sach: shilanyas, kaam shuru.',
    period: '2024-2029',
  },
  {
    title: 'MLA Mian Mehar Ali ne Kangan ke liye Road Sector (New Works) Capex Action Plan 2026-27 ke tahat Rs 6 crore ki sadak pariyojanaon ki swikriti dilayi',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/mian-mehar-ali-secures-rs-6-crore-for-kangan-roads-12409356',
    date: '2026-08-22',
    note: 'Rising Kashmir ne 22 Aug 2026 ko Road Sector (New Works) Capex Budget 2026-27 ke tahat jaari authorization/order ke hawale se report kiya ki Kangan constituency me Rs 6 crore ki sadak-nirman/sudhaar/unnayan pariyojanaon ki swikriti mili hai; sambandhit adhikariyon ko Administrative Approval/Technical Sanction (AA/TS) aur tendering shuru karne ke nirdesh diye gaye, kaam annexure-listed pariyojanaon tak seemit rahega. MLA ki bhoomika: article ke mutabiq unhone ye swikriti "secure" ki. Stage ka sach: swikriti (order-based; AA/TS aur tendering abhi baki, kaam shuru nahi). Disclosure: ye ghoshna-matr nahi hai kyunki srot ne asal authorization/order ka hawala diya hai.',
    period: '2024-2029',
  },
  {
    title: 'MLA Mian Mehar Ali ne Kangan me sehat, bijli aur connectivity ke kayi kaamon — ambulance, X-ray machine, transformer, library, playground aur canal fencing — ki swikriti ka daawa kiya',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/health-power-connectivity-top-our-agenda-mla-kangan-12245677',
    date: '2026-08-10',
    note: 'Rising Kashmir ne 10 Aug 2026 ko report kiya, jo poori tarah MLA ke apne bayan par aadharit hai ("MLA says"): package me SDH Kangan me video endoscope system (Rs 16.50 lakh) aur ticket counter (Rs 6.50 lakh), MMC Watlar aur PHC Wussan me digital X-ray (Rs 25 lakh each), Hari Ganiwan ke liye BLS ambulance (Rs 30 lakh), Anderwan ke liye ECO ambulance (Rs 9.30 lakh), Nallah Shutain Gagangair/Satrina/Doga Wangath par pul, kai transformers, Kangan me Rs 35 lakh ki library, Burnbugh/Pethpora Chattergul/Prang me playgrounds, Bonpora Haripora me public park aur Kullan-Sumbal-BR-Ganiwan/Mammar-Thune me canal fencing shamil hone ka daawa. Koi GO/order ya vibhagiya dastavez ka hawala article me nahi hai. Stage ka sach: ghoshna — saboot sirf MLA ka daawa, isliye badge dawa.',
    period: '2024-2029',
  },
  {
    title: 'MLA Mian Mehar Ali ne Arigoripora (Kangan) me Rs 5 crore ke indoor stadium ki swikriti ka daawa kiya aur kaha ki kaam jald shuru hoga',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/jammu-and-kashmir/kashmir/5-cr-indoor-stadium-approved-for-kangan-mla-mian-mehar-ali-12113336',
    date: '2026-06-28',
    note: 'Rising Kashmir ne 28 Jun 2026 ko report kiya ki MLA ne Gagangeer Sonamarg me cricket tournament ke dauraan kaha ki Arigoripora me Rs 5 crore ka indoor stadium swikrit hua hai aur kaam jald shuru hoga; saath me kayi playgrounds ke vikas ke liye fund aur clubs/yuva samoohon ko sports kits, roller, mat dene ki baat bhi kahi. Poori khabar "According to the MLA" par tiki hai — kisi GO/order ya vibhagiya dastavez ka hawala nahi. Stage ka sach: ghoshna — saboot sirf MLA ka daawa, isliye badge dawa. Disclosure: isi bayan me Gagangeer playground ko swargiya Irfan Ahmad Raina ki yaad me samarpit karne ki ghoshna bhi thi, par us maidan ke lokarpan ki swatantra post-event reporting article me nahi hai.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['omar-abdullah'] = [
  {
    title: 'Omar Abdullah ne Ganderbal seat ke liye Constituency Development Fund se Rs 377.10 lakh ke vikas kaam manzoor kiye, jisme District Hospital Ganderbal ke liye Rs 67 lakh ka high-end ultrasound system bhi shamil hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/cm-omar-sanctions-rs-377-10-lakh-for-development-works-in-ganderbal-constituency/',
    date: '2025-09-23',
    note: 'Greater Kashmir ki post-event reporting (Srinagar, 23 Sep 2025) ke mutabik Omar Abdullah ne "Chief Minister and MLA Ganderbal" ke roop me Constituency Development Fund (CDF) se kul Rs 377.10 lakh ke kaam manzoor kiye, jo poori tarah Ganderbal seat ke liye hain. CDF MLA ka apna fund hota hai, isliye ye MLA-bhoomika ka kaam mana gaya. Isme Rs 67 lakh District Hospital Ganderbal ke liye high-end ultrasound system, school buildings ka navinikaran aur lab/digital learning suvidhaen, sadak-drainage-street light, aur parks/community suvidhaen shamil hain. Stage ka sach: ye swikriti (approved funds) hai, sirf ghoshna nahi. Disclosure: report me unhe Chief Minister ke roop me bhi pehchana gaya hai (woh CM hain), lekin CDF approval MLA ke naam par hoti hai.',
    period: '2024-2029',
  },
];

// ---- Srinagar district batch (researched 2026-10-15) ----
// Per-MLA reject-logs (sankshipt):
// - salman-sagar (JKNC, Hazratbal — Salman Sagar): 2 entries rakhi (Rs 1.35cr Hazratbal shilanyas, Rs 1.20cr Jenab Sahib Soura chashma punaruddhar). 12 REJECT — Khanyar seat ka kaam (galat seat), non-whitelist, sirf maujoodgi/baithak, pita Ali Sagar ka kaam, political speculation. NEGATIVE: nahi (affidavit 0 cases).
// - ali-mohammad-sagar (JKNC, Khanyar — Ali Mohammad Sagar): 4 entries rakhi (Rs 2.78cr package lokarpan, Rs 1.5cr 6 kaam shilanyas, GHSS Nishat Rs 1.78cr block lokarpan, Rs 6cr paani ghoshna [dawa]). 11 REJECT — non-whitelist, sirf nirikshan, pre-term, bete Salman ke kaam alag rakhe. NEGATIVE: nahi.
// - shamim-firdous (JKNC, Habba Kadal — Shamim Firdous): 3 entries rakhi (HSS bhawan lokarpan, Rs 70 lakh water pipeline lokarpan, 2 drainage shilanyas). COORDINATOR QA-DROP: Rs 13.70 lakh fire-affected families CDF vitran entry hata di — relief work vikas-kaam nahi hai (niyam). 13 REJECT — non-whitelist, ghoshna-matara, sirf nirikshan, pre-term case. NEGATIVE: nahi.
// - sheikh-ahsan-ahmed (JKNC, Lal Chowk — Sheikh Ahsan Ahmed 'Ahsan Pardesi'): 6 entries rakhi (Rs 2.45cr indoor stadium shilanyas, Khonmoh PHC ghoshna [dawa], Tulsi Bagh tank lokarpan, Ayesha Colony water supply kaam-shuru, 4 health centers lokarpan, Padshahi Bagh road ghoshna [dawa]). 14 REJECT — non-whitelist, CM-karyakram maujoodgi, pre-term, sarkari bayan, doosri seat ka kaam. NEGATIVE: nahi.
// - mushtaq-guroo (JKNC, Chanapora — Mushtaq Guroo): KHAALI (0). 14 REJECT — non-whitelist (Twitter/YouTube daave, KNT, Kashmir Reader), sirf baithak/nirikshan, maang, CM karyakram maujoodgi, pre-term. NEGATIVE: nahi (affidavit 0 cases).
// - tanvir-sadiq (JKNC, Zadibal — Tanvir Sadiq): 7 entries rakhi (Rs 76 lakh drainage shilanyas, Rs 21.52 lakh landmark shilanyas, 2 MGD filter lokarpan, Rs 3.45cr CDF release swikriti, JLNM hospital EEG/oncology lokarpan [health minister ke saath, disclosed], calligraphic landmark lokarpan, Rs 82.97 lakh chowk shilanyas). 9 REJECT — non-whitelist, karyakram-udghatan, ghoshna, sirf nirikshan. NEGATIVE: nahi.
// - mubarik-gul (JKNC, Eidgah — Mubarik Gul): KHAALI (0). 9 REJECT — CDF kaam sirf non-whitelist me, sirf maujoodgi, pre-term, sarkari jawab. NEGATIVE: nahi (CDF misuse aarop non-whitelist complaint, FIR nahi — entry nahi).
// - tariq-hameed-karra (INC, Central Shalteng — Tariq Hameed Karra): KHAALI (0). 10 REJECT — sirf nirikshan/daura, non-whitelist, maang, CM karyakram maujoodgi, pre-term LG scheme; party-bhoomika bayan seat-kaam nahi. Beigh Mohalla drainage YouTube-only (live-browser verify ka lead). NEGATIVE: nahi.
// Coordinator QA note (2026-10-15): sabhi 8 worker fragments kholkar padhe; 1 entry drop (Shamim fire-relief); titles/notes Roman-Hinglish only, koi Devanagari/rupee-symbol nahi; har entry me 8 fields; dates Oct 2024-Oct 2026 window me; sabhi slugs file me pehle se absent — koi overwrite nahi.

jammuKashmirWorks['salman-sagar'] = [
  {
    title: 'MLA Salman Sagar ne Hazratbal me Rs 1.35 crore ke vikas-kamon ka shilanyas kiya, jinme Ahmednagar kabristan ka vikas, Buchpora drainage aur Shah Mohalla ki sadak shamil hain',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/hazratbal-gets-1-35-cr-development-push-12526011',
    date: '2026-09-12',
    note: 'Stage: shilanyas — 12 Sep 2026 ko Hazratbal MLA Salman Sagar ne seat ke alag-alag ilakon me Rs 1.35 crore ke karyon ke shilanyas rakhe, jinme Old Ahmednagar kabristan ka vikas, Firdous Colony (Buchpora) me drainage network ka sudhar aur Ahmednagar ke Shah Mohalla stretch ki macadamisation shamil hai. Rising Kashmir ki post-event reporting ke mutabik ye MLA ka apna karyakram tha, kisi mantri ya mantri-samiti ke karyakram ka hissa nahi. Fund-srot article me spasht nahi bataya gaya (CDF ya CAPEX ka zikr nahi) aur executing agency ka naam bhi nahi. Caveat: ye ghoshna/shilanyas stage hai — in karyon ke poora hone ya prashasnik swikriti ke baare me alag pushti nahi mili.',
    period: '2024-2029',
  },
  {
    title: 'Anchar me Rs 1.20 crore se Jenab Sahib Soura chashme ke punaruddhar ka shilanyas rakha gaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/salman-sagar-lays-foundation-stone-for-rs-120-cr-restoration-of-jenab-sahib-soura-in-anchar-12629540',
    date: '2026-10-06',
    note: 'Stage: shilanyas — 6 Oct 2026 ko Hazratbal MLA Salman Sagar ne Anchar sthit aitihasik Jenab Sahib Soura (chashma) ki restoration aur preservation pariyojna ka shilanyas rakha. Rising Kashmir ke anusar pariyojna Rs 1.20 crore ki hai aur ise R&B Soura execute kar raha hai. Anchar parisiman-2022 ke anusar Hazratbal vidhansabha kshetra ka hissa hai, isliye seat ke andar ka kaam hai. Fund-srot article me spasht nahi. Credit-disclosure: karyakram MLA ne aayojit kiya lekin nishpadan vibhag (R&B) ke haath me hai — MLA ka shrey shilanyas/karyakram tak seemit. Caveat: ye shilanyas stage hai — poornata ki pushti abhi alag reporting se nahi mili.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['ali-mohammad-sagar'] = [
  {
    title: 'Khanyar me 13 Oct 2026 ko Rs 2.78 crore ke vikas-kaamon ka lokarpan: Dalgate-Brein-Nishat stretch par sadak-upgradation, puliya, nali aur footpath; Theed me NTPHC ka naya block aur Theed-Mulnar-Harwan me pul-sadak kaam shamil',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/ali-mohd-sagar-inaugurates-development-works-worth-rs-2-78-crore-in-khanyar/',
    date: '2026-10-13',
    note: 'Daily Excelsior ki report ke anusaar Ali Mohammad Sagar ne 13 Oct 2026 ko apni Khanyar seat me Rs 2.78 crore ke package ka lokarpan kiya; isme Dalgate-Brein-Nishat stretch par lagbhag Rs 1.68 crore ki sadak-upgradation, puliyon-nalion ka nirman aur footpath, Theed me Rs 40 lakh ka NTPHC ka naya block aur Theed-Mulnar-Harwan me Rs 70 lakh ke pul-sadak kaam shamil hain. Fund-srot article me darj nahi hai (CDF ya capex ka ullekh nahi), isliye MLA-fund ka dawa nahi kiya ja sakta. Caveat: article me NTPHC block ko nirmanadhin bataya gaya hai, matlab poora package us din poora nahi hua tha; aur Rising Kashmir ki ek report ne isi package ko 14 Oct ko shilanyas ke roop me chhapa tha, isliye stage ko lokarpan/dedication mana gaya hai, poornata ka pakka saboot nahi.',
    period: '2024-2029',
  },
  {
    title: 'Dalgate me 3 Oct 2026 ko Rs 1.5 crore ke chhah vikas-kaamon ka shilanyas: do lane, footpath, Dal lakefront ka sudhaar aur ek puliya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/sagar-lays-foundation-of-six-development-projects-worth-rs-1-5-cr/',
    date: '2026-10-03',
    note: 'Daily Excelsior ke anusaar Sagar ne 3 Oct 2026 ko Dalgate (Khanyar seat) me chhah kaamon ka shilanyas kiya: do 350-feet lane, footpath, Dal lakefront ka renovation aur ek puliya, lagat lagbhag Rs 1.5 crore; stage shilanyas hai, kaam poora hone ka dawa nahi. Fund-srot article me darj nahi hai, isliye CDF ka dawa nahi. Karyakram Mamta Road par jan-sampark programme ke dauran hua; usi khabar ke party-political hisson ko entry se bahar rakha gaya hai.',
    period: '2024-2029',
  },
  {
    title: 'GHSS Nishat me Rs 1.78 crore ke naye school block ka lokarpan (11 Mar 2026) aur smart-classroom ke liye Rs 10 lakh ki ghoshna',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/sagar-inaugurates-rs-1-78-cr-worth-new-school-block-at-ghss-nishat/',
    date: '2026-03-11',
    note: 'Greater Kashmir ke anusaar Sagar ne 11 Mar 2026 (Budhwar) ko GHSS Nishat me Rs 1.78 crore se bane naye school block ka lokarpan kiya; stage lokarpan hai. Usi avsar par smart-classroom ke upkaran aur student utility store ke liye Rs 10 lakh ki atirikt ghoshna hui — ye ghoshna hai, swikriti ka GO ya fund-srot article me darj nahi, isliye us hisse ko pakki swikriti nahi mana gaya. Caveat: delimitation ke anusaar Nishat Khanyar seat ka hissa hai (Harwan/Gupt Ganga/Shalimar PCs), aur Hazratbal ke MLA Salman Ali Sagar karyakram me upasthit the lekin lokarpan Khanyar ke MLA ne kiya, isliye ye entry Salman Sagar ke kaam se alag hai.',
    period: '2024-2029',
  },
  {
    title: 'Dalgate jan-sampark me Rs 6 crore ki paani-pariyojnaon ki ghoshna (24 Aug 2026): Nishat water treatment 3.5 crore, Dalgate reservoir 1.5 crore',
    category: 'Paani',
    badge: 'dawa',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/sagar-announces-rs-6-crore-water-projects-12429277',
    date: '2026-08-24',
    note: 'Rising Kashmir ki report sirf NC ki party-statement par aadharit hai, isliye badge dawa rakha gaya hai; stage ghoshna hai, GO ya swikriti ka saboot nahi. Ghoshna me Rs 3.5 crore ki Nishat water treatment pariyojna (Dec 2026 tak poora karne ka lakshya, 3.5 lakh logon ko fayda), Rs 1.5 crore ka Dalgate me naya water reservoir aur Buchwara me UPHC centre ka kaam saal ke ant tak shuru karne ki baat shamil hai. Fund-srot (CDF, capex ya sarkari yojna) article me darj nahi hai.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['shamim-firdous'] = [
  {
    title: 'Zaindar Mohalla Habba Kadal me Rs 1.4 crore ki lagat se bana Higher Secondary School bhawan ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/shameema-firdous-inaugurates-hss-in-habba-kadal/',
    date: '2025-08-21',
    note: 'Post-event reporting ke mutabik school bhawan ka kaam poora hokar lokarpan ho chuka hai, isliye stage ka sach poora hua kaam hai; ek dashak se atka kaam unke pichle karyakaalon ke prabhav se bhi juda ho sakta hai isliye stage sach ke saath yah caveat darj hai ki karyakaal Oct 2024 se poora hone ka sara shreya MLA ko nahi; article me fund-srot spasht nahi diya gaya isliye CDF ya sarkari srot ka dawa nahi.',
    period: '2024-2029',
  },
  {
    title: 'Gund Hailmar Gadood Bagh aur Wazir Kocha me Rs 70 lakh ki drinking water pipeline ka lokarpan',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/shameema-firdous-felicitates-students-inaugurates-rs-70-lakh-water-pipeline-supply-project-12009852',
    date: '2026-06-06',
    note: 'Rising Kashmir aur Greater Kashmir dono ki post-event reporting ke mutabik pipeline ka kaam poora hokar lokarpan ho chuka hai, isliye stage ka sach poora hua kaam hai; project me Rangil se teeno bastiyon tak potable pani pahunchta hai aur yah ilake ki lambe samay ki maang thi; article me fund-srot spasht nahi diya gaya isliye CDF ya sarkari srot ka dawa nahi, credit ka sara shreya ek party press note se aaya hai jisme MLA ke prayason ka jikr hai.',
    period: '2024-2029',
  },
  {
    title: 'Khanqah-e-Moula se Zaina Kadal aur Gawkadal se Basant Bagh tak do drainage pariyojnaon ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/mla-firdous-launches-drainage-projects-visits-khanqah-e-moula/',
    date: '2025-12-02',
    note: 'Rising Kashmir ki post-event reporting ke mutabik dono drainage pariyojnaon ki buniyad patthar rakh di gayi hai, isliye stage ka sach shilanyas hai; pehli pariyojna Khanqah-e-Moula se Zaina Kadal tak lagbhag Rs 47 lakh ki swikrit hai aur doosri Gawkadal se Basant Bagh tak lagbhag Rs 49 lakh ki, purane shahar me waterlogging ki samasya ko door karne ke liye; fund-srot article me spasht nahi hai aur kaam poora hone ki abhi koi report nahi mili.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['sheikh-ahsan-ahmed'] = [
  {
    title: 'MLA Ahsan Pardesi ne Lasjan me Rs 2.45 crore ke indoor stadium ka shilanyas kiya (15 Feb 2026)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/sports/nc-mla-ahsan-pardesi-lays-foundation-of-rs-2-45-cr-indoor-stadium-in-lasjan/',
    date: '2026-02-15',
    note: 'Stage ka sach: shilanyas — MLA ne khud buniyad pathar rakha, jo Greater Kashmir me post-event report hua. Fund-srot article me spasht nahi bataya gaya (MLA ne CM Omar Abdullah ka shukriya ada kiya, CDF ya vibhag ka zikr nahi). Credit disclosure: ye unka chunavi wada tha, lekin khabar MLA ke apne press-bayaan par adharit hai. Caveat: shilanyas ke baad kaam shuru hua ya poora hua, iski koi follow-up report nahi mili; usi bayan me constituency ke do aur sports grounds ke shilanyas ka bhi zikr hai.',
    period: '2024-2029',
  },
  {
    title: 'MLA Ahsan Pardesi ne Khonmoh me naye PHC bhawan ki swikriti ki ghoshna ki (24 Jun 2026)',
    category: 'Aspataal',
    badge: 'dawa',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/politics/ahsan-pardesi-announces-approval-of-new-phc-building-in-khonmoh-12070027',
    date: '2026-06-24',
    note: 'Stage ka sach: ghoshna — swikriti ka dawa sirf MLA ke apne bayaan par adharit hai; koi GO/adesh ya swasthya vibhag ki swatantra pushti nahi mili, isliye badge dawa rakha gaya hai. Fund-srot aur lagat ka zikr nahi (KNS me Rs 3500.36 crore ki lagat chhapi jo spasht typo hai, isliye lagat note me shamil nahi ki gayi). Credit disclosure: ye MLA ka chunavi wada tha aur unhone CM aur swasthya mantri ka shukriya kiya. Caveat: shilanyas ya nirmaan ki koi khabar ab tak nahi mili.',
    period: '2024-2029',
  },
  {
    title: 'MLA Ahsan Pardesi ne Tulsi Bagh me Rs 178.16 lakh ke overhead water tank ka lokarpan kiya (24 Mar 2026)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/shameema-firdous-ahsan-pardesi-inaugurate-development-projects-in-srinagar/',
    date: '2026-03-24',
    note: 'Stage ka sach: poora hua kaam ka lokarpan — 70,000 gallon kshamta ka tank taiyaar hokar chalu hua, lagbhag 2,000 nivaasiyon ko peene ka paani milega. Fund-srot article me spasht nahi (Jal Shakti vibhag ki pariyojna lagti hai; CDF ka zikr nahi). Credit disclosure: pariyojna 2024 me shuru hui thi jabki MLA Oct 2024 me chune gaye — nirmaan ki shuruaat unke karyakaal se pehle ki hai, unki bhoomika lokarpan tak seemit dikhti hai. Caveat: lagat ka aankda press-bayaan se aaya hai, vibhagiya audit nahi.',
    period: '2024-2029',
  },
  {
    title: 'MLA Ahsan Pardesi ne Ayesha Colony, Padshahi Bagh me Rs 57.87 lakh ki water supply pariyojna ka kaam shuru karwaya (30 Sep 2026)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/strengthening-basic-amenities-addressing-genuine-public-concerns-a-priority-mla-ahsan-pardesi-12611126',
    date: '2026-09-30',
    note: 'Stage ka sach: kaam ki shuruaat — MLA ne Jal Shakti vibhag ke SE aur EE ki maujoodgi me main, sub-main aur distribution system ki laying/fitting ka kaam kick-start kiya, jo ilake ki lambi maang thi. Fund-srot article me spasht nahi bataya gaya (CDF ka zikr nahi). Credit disclosure: kaam MLA ki pehal par shuru hua aur sthaaniya nivaasiyon ne MLA aur vibhag dono ka aabhaar jataaya. Caveat: kaam ki purnata ki koi follow-up khabar nahi mili; khabar MLA ke bayaan par adharit hai.',
    period: '2024-2029',
  },
  {
    title: 'MLA Ahsan Pardesi ne Lal Chowk seat ke chaar ilakon me naye health centers ka lokarpan kiya (2 May 2025)',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'http://greaterkashmir.com/kashmir/mla-inaugurates-health-centers-in-lal-chowk-constituency/',
    date: '2025-05-02',
    note: 'Stage ka sach: lokarpan — MLA ne Shivpora, Zaffron Colony, Padshahi Bagh aur Aramwari me health centers ka udghatan kiya; Director Health Services Kashmir aur CMO Srinagar maujood the, jo NHM/swasthya vibhag ke sahyog ki taraf ishara karta hai. Fund-srot article me spasht nahi. Credit disclosure: khabar press release par adharit hai; ye naye bhavan hain ya maujooda suvidhaon ka naya roop — article spasht nahi karta. Caveat: centeron ke chalu rehne ya patient flow ki koi swatantra pushti nahi mili.',
    period: '2024-2029',
  },
  {
    title: 'MLA Ahsan Pardesi ne Padshahi Bagh road ke Rs 2.78 crore ke revised estimate ki swikriti ki ghoshna ki (30 Oct 2025)',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/mla-pardesi-thanks-cm-for-approving-padshahi-bagh-road-project/',
    date: '2025-10-30',
    note: 'Stage ka sach: ghoshna — swikriti CM Omar Abdullah ne di (MLA ka dawa), lekin koi GO/adesh ya PWD/R&B vibhag ki swatantra pushti khabar me nahi hai, isliye badge dawa rakha gaya hai. Fund-srot article me spasht nahi (revised estimate Rs 2.78 crore ka aankda bhi MLA ke bayaan se aaya). Credit disclosure: MLA ne khud is ghoshna ka shreya CM ke hastakshep ko diya aur khabar MLA ke press-bayaan par adharit hai. Caveat: kaam shuru hone ya tender ki koi khabar nahi mili.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['mushtaq-guroo'] = [];

jammuKashmirWorks['tanvir-sadiq'] = [
  {
    title: 'Tanvir Sadiq ne Alamgiri Bazar me Rs 76 lakh ke drainage network ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/mla-tanvir-lays-foundation-stone-for-major-drainage-project-in-zadibal/',
    date: '2025-11-18',
    note: 'Shilanyas ki stage hai — drainage network ki buniyaad rakhi gayi, poora hone ki abhi koi report nahi hai. Karyakram me UEED ke Executive Engineer aur AEE maujood the, isliye execution UEED ke zariye hone ki sambhavna hai, lekin fund-srot article me bataya nahi gaya. Credit-disclosure: isi article ke anusar ye ek hafte me doosra aisa project tha (Vicharnag me bhi Rs 76 lakh ka), lekin Vicharnag ke liye alag se whitelisted post-event report nahi mili isliye wo alag entry nahi banayi gayi.',
    period: '2024-2029',
  },
  {
    title: 'Tanvir Sadiq ne Alamgari Bazar me Rs 21.52 lakh ke illuminated landmark project ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/tanvir-sadiq-lays-foundation-stone-for-rs-21-52-lakh-illuminated-landmark-at-alamgari-bazar/',
    date: '2025-12-04',
    note: 'Shilanyas ki stage hai — project swikrit (sanctioned) aur buniyaad rakhi gayi, abhi poora hone ki report nahi hai. Article me fund ka naam CDF/R&B vagera nahi bataya, sirf "sanctioned at Rs 21.52 lakh" likha hai, isliye fund-srot ki pushti nahi ki ja sakti. Credit-disclosure: MLA ne khud shilanyas kiya aur ye unki peshkash ke roop me report hua. Article press release par aadharit hai, isliye shabdawali MLA office ki ho sakti hai.',
    period: '2024-2029',
  },
  {
    title: 'Tanvir Sadiq ne Zadibal ke Pokhribal Badamwari me 2 MGD advanced activated carbon filter ka udghatan kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/mla-zadibal-inaugurates-advanced-activated-carbon-filter/',
    date: '2025-12-30',
    note: 'Poora hua kaam (commissioning) + lokarpan — filter chalu kar diya gaya aur udghatan ho gaya. Kaam Public Health Engineering (PHE) vibhag ne poora kiya (MLA ne vibhag ki tareef ki), isliye ye sarkari pariyojna hai, MLA ke CDF ka daawa article me nahi hai. Credit-disclosure: udghatan MLA ne kiya. Badamwari ka ye filter pehla aur iklauta 2 MGD advanced activated carbon filter bataya gaya hai.',
    period: '2024-2029',
  },
  {
    title: 'Tanvir Sadiq ne Zadibal ke vikas kaamon ke liye Rs 3.45 crore CDF ki pehli kist jari ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/tanvir-sadiq-releases-rs-3-45-cr-cdf-for-zadibal-works/',
    date: '2026-05-24',
    note: 'Swikriti/fund-release ki stage hai — CDF ki pehli kist jari hui, lekin alag-alag kaamon (parks, sports facilities, libraries, bus stops, culverts, transformers, roads, drains, calligraphic gates) ke poora hone ki pushti alag se nahi hai; kuch kaam "under progress" aur kuch "will be taken up soon" bataye gaye. Fund-srot CDF hai — ye MLA fund hi hai. Credit-disclosure: jari MLA ne kiya aur faisla halqa-level baithkon ke baad liya gaya.',
    period: '2024-2029',
  },
  {
    title: 'Tanvir Sadiq ne Health Minister ke saath JLNM Hospital Rainawari me EEG lab, oncology aur histopathology suvidhaon ka udghatan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/city/health-minister-mla-zadibal-inaugurate-key-facilities-at-jlnm-hospital/',
    date: '2026-05-26',
    note: 'Poora hua kaam + lokarpan — teenon suvidhaen chalu karke udghatan kiya gaya; JLNM pehla district hospital bana jahan in-house histopathology uplabdh hai. Credit-disclosure: udghatan Health Minister Sakina Itoo ke saath sanyukt roop se hua — ye sirf MLA ki pariyojna nahi hai. Caveat: fund-srot article me nahi bataya gaya, isliye funding me MLA ki vyaktigat bhoomika spasht nahi hai.',
    period: '2024-2029',
  },
  {
    title: 'Tanvir Sadiq ne Alamgari Bazar me Islamic calligraphic landmark logon ko samarpit kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/tanvir-sadiq-unveils-iconic-islamic-calligraphic-landmark-at-alamgari-bazar-12063771',
    date: '2026-06-22',
    note: 'Poora hua kaam + lokarpan — installation taiyaar hokar samarpit ki gayi. Article ke anusar ye MLA ki apni ichha/peskash thi (unhone kaha tha ki constituency ke pramukh landmark ki shuruaat Allah ke naam se ho). Credit-disclosure: samarpan MLA ne khud kiya. Caveat: fund-srot article me nahi bataya gaya; ye Dec 2025 me swikrit hue Rs 21.52 lakh ke landmark project ka hi poora roop ho sakta hai, lekin article me ye pushti nahi hai isliye alag entry rakhi gayi hai.',
    period: '2024-2029',
  },
  {
    title: 'Tanvir Sadiq ne Bamk Mill Stop par Rs 82.97 lakh ke Alipora Chowk upgradation project ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/city/tanvirsadiqfoundationstone-12671823',
    date: '2026-10-13',
    note: 'Shilanyas ki stage hai — kaam ki buniyaad rakhi gayi, poora hone ki report abhi nahi hai. Karyakram me XEN R&B Srinagar Core maujood the, isliye execution R&B vibhag ke zariye hone ki sambhavna hai, lekin fund-srot article me bataya nahi gaya. Caveat: isi article me zikr hue Mirza Kamil Sahib–Madeen Sahib–Akmal Road wale prastav ki funding CRF se maangi gayi hai — wo alag prastav hai, is chowk project ka hissa nahi.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['mubarik-gul'] = [];

jammuKashmirWorks['tariq-hameed-karra'] = [];


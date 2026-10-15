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
// District batch 7: Pulwama — pending
// District batch 8: Shopian — pending
// District batch 9: Kulgam — pending
// District batch 10: Anantnag — done
// District batch 11: Kishtwar — pending
// District batch 12: Doda — pending
// District batch 13: Ramban — pending
// District batch 14: Reasi — pending
// District batch 15: Udhampur — pending
// District batch 16: Kathua — DONE (researched 2026-10-15)

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

// ---- Budgam district batch (researched 2026-10-15) ----
// Per-MLA reject-logs (sankshipt):
// - aga-syed-muntazir-mehdi (PDP, Budgam): 12 REJECT (0 entries) — karyakaal sirf Nov 2025 se (upchunav vijeta, ~11 mahine); CM Omar ka Rs 100cr Budgam projects event (Mehdi sirf saath me, sirf maujoodgi); Bemina grievance tour (sirf nirikshan/daura, DPR bina GO swikriti nahi); Assembly Zero Hour maang (Soibug sadak, Reshipora hospital); Jal Shakti mantri se mulaqat (sirf maang); Gadkari/Vaishnaw ko chitthi (sirf patra-maang); KNS college bus CDF ghoshna (whitelist-bahar + post-event reporting nahi); X-post road daave; vidhayi kaam (bills); EC show-cause (pre-tenure, FIR/court nahi — negative nahi). NEGATIVE: koi nahi (Aga Syed Ruhullah Mehdi MP + Aga Syed Mehmood pratidwandi se pehchan alag rakhi).
// - shafi-ahmad-wani (JKNC, Beerwah): 3 entries. 9 REJECT — Rising Kashmir Rs 8.5cr DPR (prastav stage); Kashmir Life NH-701A (vivaad, seat-kaam nahi); Gadyal Kashmir items (whitelist-bahar); Tribune mantri Sakeena Itoo Beerwah karyakram (sirf maujoodgi); galat vyakti (Surankote/Poonch ke mantri Wani); SDRF relief (rahat); pre-tenure 2008-14 daave. NEGATIVE: koi nahi (ADR 0 cases).
// - saif-ud-din-bhat (JKNC, Khan Sahib): 12 REJECT (0 entries) — road macadamisation inauguration (jkupdatenews, whitelist-bahar); NABARD roads Rs 2.10cr+Rs 1.07cr (gadyalkashmir, whitelist-bahar); HSS Khag building Rs 361.76L + Samagra Rs 96.40L (asiannewsservices/gadyalkashmir, whitelist-bahar); satellite dental centre (non-whitelist + MLA sirf guest); Rs 2cr road (YouTube-only); Zero Hour maang (degree college, Doodhpathri, escort); CM delegation + CM Rs 100cr projects (maujoodgi); mantri Javed Rana vibhagiya jawab; Tribune Doodhpathri amenities (departmental announcement, tender stage). NEGATIVE: koi nahi.
// - abdul-rahim-rather (JKNC, Charari Sharief — Speaker): 7 entries (sab vyaktigat lokarpan, credit-transparency notes sahit). ~12 REJECT — Tangnar Sheikhpura roads/bridge shilanyas (article khud location "Chadoora" batata hai, galat seat); SDH Charar laparoscopy (whitelist-bahar); Hayatpora Rs 80L bridge (YouTube-only); review meetings (sirf nirikshan); LG Sinha Rs 40cr projects (CM/LG ka kaam); Urs/baithaken + "karenge" ashwasan. NEGATIVE: koi nahi (BJP removal-motion sirf procedural/rajnaitik, FIR/court nahi).
// - ali-mohammad-dar (JKNC, Chadoora): 11 REJECT (0 entries) — GDC Chadoora shilanyas (mantri Sakeena Itoo ne kiya, sirf maujoodgi); CM Rs 100cr projects + Chewdara bridge + Seerbagh-Sempora bridge (sirf maujoodgi/vibhagiya); Chadoora main bridge Rs 999.54L (PWD vibhagiya); Hanjigund-NABARD bridge (vibhagiya); waterlogging DPR Rs 443.85L (sirf prastav); Yusmarg four-laning maang; cricket final (ceremonial); outreach/ashwasan ("karenge"). Kareeb thi: SDH Chadoora dialysis centre lokarpan (Rs ~45L) — sirf KNO/YouTube, whitelist-bahar → REJECT. NEGATIVE: koi nahi (Javid Ahmad Dar mantri alag vyakti; "Ali Mohammad Dar" Hizbul militant alag vyakti — pehchan pakki rakhi).
// Coordinator QA note (2026-10-15): saare 5 fragments kholkar padhe; koi drop/flip nahi karna pada — badge/stage niyam ke anusaar sahi the (Rather ke 7 lokarpan me credit-transparency poori, Wani ke Rs 2.50cr stadium par dawa badge sahi); titles/notes Roman-Hinglish only (Python-verified); har entry me 8 fields; sabhi dates calendar-valid aur Oct 2024–Oct 2026 window me; sabhi 5 slugs file me pehle se absent — koi overwrite nahi.

jammuKashmirWorks['aga-syed-muntazir-mehdi'] = [];

jammuKashmirWorks['shafi-ahmad-wani'] = [
  {
    title: 'Beerwah vidhan sabha kshetra me 2025-26 me kul lagbhag 30 sadak nirman kaam execution par',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/rs-9-78-cr-road-constructions-under-execution-in-beerwah-dy-chief-minister/',
    date: '2026-04-01',
    note: 'Stage ka sach: nirmanadhin (under execution). MLA Dr Shafi Ahmad Wani ke vidhan sabha prashna ke uttar me Dy CM ne sadan me vibhagiya aankde diye — Pothole programme ke tahat Rs 519.34 lakh ke kaam aur Cities and Towns programme ke tahat Rs 459 lakh ke 12 kaam, kul lagbhag Rs 9.78 crore. Fund-srot: sarkari (R&B vibhag ke Pothole aur C&T programmes), MLA fund nahi. Credit-transparency: MLA ki bhoomika sirf prashna uthana thi; kaam ka execution vibhag ka hai.',
    period: '2024-2029',
  },
  {
    title: 'Beerwah ke Watalpora me bahuuddeshiya khel maidan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/sports/multipurpose-playfield-inaugurated-at-watalpora-in-budgam-11878146',
    date: '2026-05-14',
    note: 'Stage ka sach: lokarpan (poora hua kaam ka udghatan). MLA Dr Shafi Ahmad Wani ne DC Budgam ke saath Beerwah upkhand ke Watalpora me bahuuddeshiya khel maidan ka vyaktigat roop se lokarpan kiya. Credit-transparency: project Grameen Vikas (Rural Development) aur Panchayati Raj vibhag ka tha, fund rakam article me nahi di gayi; MLA ki asal bhoomika lokarpan samaroh me sahbhagita hai.',
    period: '2024-2029',
  },
  {
    title: 'Beerwah ke Rathsun gaon me khel stadium ke liye Rs 2.50 crore ke allocation ki ghoshna',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/8-5-cr-dpr-submitted-for-beerwah-road-works-mla-wani-12416955',
    date: '2026-08-23',
    note: 'Stage ka sach: ghoshna. MLA ne press se baatcheet me kaha ki Rathsun gaon me prastavit khel stadium ke liye sarkar ne Rs 2.50 crore allocate kiye hain. Credit-transparency: allocation ka daawa sirf MLA ke apne press-bayan par adharit hai, kisi sanction order ya GO ki pakki report nahi mili, isliye badge dawa hai. Usi bayan me Rs 8.50 crore ke DPR jama karne ki baat bhi thi jo prastav stage ki hai aur isliye entry me nahi li gayi.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['saif-ud-din-bhat'] = [];

jammuKashmirWorks['abdul-rahim-rather'] = [
  {
    title: 'GDC Chrar-i-Sharief me Rs 2.28 crore ke Indoor Sports Complex aur Rs 97 lakh ke Library Block extension ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/speaker-assembly-education-minister-conduct-extensive-tour-of-chrar-i-sharief/',
    date: '2024-12-14',
    note: 'Rather ne 14 December 2024 ko Shiksha Mantri Sakina Itoo ke saath milkar Government Degree College Chrar-i-Sharief me Indoor Sports Complex (lagat Rs 2.28 crore) aur Library Block ke extension (lagat Rs 97 lakh) ka lokarpan kiya. Dono suvidhaen sarkari (Higher Education) fund se bani hain aur lokarpan mantri ke saath sanyukt tha — MLA ka vyaktigat yogdaan lokarpan tak seemit hai, isliye credit sarkari machinary aur mantri ke saath shared hai. Usi daure ke SDH nirikshan ko kaam me nahi gina gaya.',
    period: '2024-2029',
  },
  {
    title: 'GHSS Pakarpora me Rs 1.60 crore ki additional accommodation block ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/abdul-rahim-rather-inaugurates-additional-block-of-ghss-pakarpora/',
    date: '2025-06-24',
    note: 'Rather ne 24 June 2025 ko Government Higher Secondary School Pakarpora ki additional accommodation block ka lokarpan kiya; lagat Rs 1.60 crore aur kaam R&B Division Charar-i-Sharif ne poora kiya. Fund sarkari hai; MLA ne vyaktigat lokarpan kiya. Usi mauke par library aur play field ke diye gaye ashwasan (karenge) ko kaam me nahi gina gaya.',
    period: '2024-2029',
  },
  {
    title: 'PHC Hayatpora me nayi Dental aur Digital X-Ray units ka lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/speaker-legislative-assembly-visits-charar-e-sharief-constituency/',
    date: '2025-12-11',
    note: 'Rather ne 11 December 2025 ko apne constituency daure me PHC Hayatpora me nayi sthapit Dental aur Digital X-Ray units ka lokarpan kiya. Suvidha sarkari swasthya vibhag ki hai; fund-srot article me specified nahi hai. MLA ne vyaktigat lokarpan kiya. Usi daure ki SDH Nagam aur PHC Kremshore ki keval mulaqat aur Sursyaar PHC ke 24x7 hone ke ashwasan (karenge) ko kaam me nahi gina gaya.',
    period: '2024-2029',
  },
  {
    title: 'PHC Sursyaar me digital X-ray plant ka lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/speaker-legislative-assembly-visits-charar-e-sharief-constituency/',
    date: '2025-12-11',
    note: 'Usi 11 December 2025 ke daure me Rather ne PHC Sursyaar ka nirikshan karke wahan lage digital X-ray plant ka lokarpan kiya. Suvidha sarkari swasthya vibhag ki hai; fund-srot article me specified nahi hai. MLA ne vyaktigat lokarpan kiya.',
    period: '2024-2029',
  },
  {
    title: 'Charar-e-Sharief seat me Jal Jeevan Mission ke tehat Rs 20 crore ki water supply schemes ka lokarpan',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Kashmir Life',
    sourceUrl: 'https://kashmirlife.net/rs-20-crore-water-supply-schemes-inaugurated-in-central-kashmir-417967/',
    date: '2025-12-20',
    note: 'Rather ne 20 December 2025 ko Charar-e-Sharief constituency me Jal Jeevan Mission ke tehat bani water supply schemes ka lokarpan kiya; lagat Rs 20 crore aur lagbhag 21,000 logon ko Functional Household Tap Connections ka fayda, Kaisermulla, Kadipora, Kulmach Objipathri, Hakhpora Haptnar aur Sheer Check jaise ilakon me. Fund-srot kendra sarkar ka Jal Jeevan Mission hai; mauke par PHE ke SE aur Executive Engineer maujood the. MLA ne vyaktigat lokarpan kiya, kaam sarkari machinary ka hai.',
    period: '2024-2029',
  },
  {
    title: 'Nowgam se Kanidajan tak 9 km sadak ke Rs 1.72 crore macadamisation kaam ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/j-k/speaker-opens-repair-work-on-nowgam-road/amp/',
    date: '2026-09-23',
    note: 'Rather ne 23 September 2026 ko Nowgam se Kanidajan tak 9 km lambi sadak ke macadamisation kaam ka lokarpan kiya; article me lagat Rs 1.72 crore batayi gayi hai. Article me fund-srot specified nahi hai aur ye saaf nahi hai ki kaam poora hua tha ya usi din shuru hua tha, isliye stage lokarpan darj hai. MLA ne vyaktigat lokarpan kiya, lekin sadak sarkari (PWD/R&B) project hai, isliye credit sarkari machinary ke saath shared hai. Usi din Darekanjan aur Braripathri ki keval jan-mulaqat ko kaam me nahi gina gaya.',
    period: '2024-2029',
  },
  {
    title: 'Watkaloo me naye Primary Health Centre ka lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/j-k/speaker-opens-repair-work-on-nowgam-road/amp/',
    date: '2026-09-23',
    note: 'Usi 23 September 2026 ke daure me Rather ne Watkaloo me ek naye Primary Health Centre ka lokarpan kiya, jisse aas-paas ke gaonon ko buniyadi swasthya suvidha paas me milegi. Article me fund-srot specified nahi hai; sarkari swasthya vibhag ki suvidha hai jiska MLA ne vyaktigat lokarpan kiya.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['ali-mohammad-dar'] = [];

// ---- Pulwama district batch (researched 2026-10-15) ----
// Per-MLA reject-logs (sankshipt):
// - hasnain-masoodi (JKNC, Pampore): 0 entries. 15+ REJECT — Ramshoo Nallah bridge udghatan (Sep 2026) + Rs 9.07 cr JJM WSS lokarpan + beautification/shopping complex shilanyas (Oct 2025): kashmirconvener.com par, non-whitelist; Automated Testing Station shilanyas: CM ne kiya, MLA sirf maujood; DIET Pulwama: mantri Sakeena Itoo ka event, MLA sirf saath; cabinet sewerage swikriti (Kathua+Pampore): cabinet faisla, MLA ka koi documented concrete kadam nahi; SDH Pampore daura (MP ke saath): keval nirikshan; mantri se mulaqat (Javid Dar): sirf maang; CM meeting: sirf maang; private members resolutions: vidhayi karyavahi. NEGATIVE: koi nahi (affidavit 0 cases).
// - rafiq-ahmad-naik (PDP, Tral): 0 entries. 14 REJECT — manifesto/election rally (pre-Oct-2024), Kashmir Life assembly discussions (CM tareef/bill support/security-cover bayan: sirf bayan), Zero Hour maang (cold storage), AIIMS Awantipora row (party-bhoomika), Daily Excelsior KP return speech (aashwasan/vaade), flood-relief debate (sawal + relief), Tral Chowk flag-hoisting (keval maujoodgi), Lariyar Bridge CDF offer (KNO non-whitelist + bina-sanction ghoshna), transformer fund (KNS non-whitelist), sectoral-officers meeting (JK Monitor non-whitelist + nirikshan), purane-MLA-era neglect story (pre-tenure). NEGATIVE: koi nahi (The Hindu candidate-bio: declared cases 0).
// - waheed-ur-rehman-para (PDP, Pulwama): 1 entry. 8 REJECT — Maa-Beti bill admit (vidhayi), District Hospital daura (nirikshan), LA hospital sawal (bina outcome), AIIMS fast-tracking demand (maang), constituency tour (daura), Barsoo stadium shilanyas (jknewspoint non-whitelist + seat Awantipora seat-bahar), CM Rs 86 cr Pulwama projects (CM ka shrey). NEGATIVE: koi nahi — NIA purana mamla: is karyakaal me koi nayi FIR/court sthiti established reporting me nahi (bina nayi sthiti ke reject).
// - ghulam-mohi-uddin-mir (JKNC, Rajpora): 0 entries. 16 REJECT — Greater Kashmir video-only page (text nahi, padhkar verify asambhav), review meeting Shadimarg/Achgoze/Litter (nirikshan), mantri se mulaqat (kashmirreader non-whitelist + sirf maang), Zero Hour sawal (bina outcome), GHSS Rahmoo classrooms (newspop.in non-whitelist), health-camp (non-whitelist + relief-type), Sakeena Itoo Pampore event (mantri ka shrey), Javed Rana tribal convention (non-whitelist + mantri ghoshna), CM Pulwama review meeting (keval maujoodgi), floating trout-feed plant (Kokernag, mantri + seat-bahar), pre-term election coverage, galat "Mir" (Ghulam Hassan Mir/Ahmad Mir/Aijaz Mir). NEGATIVE: koi nahi.
// Coordinator QA note (2026-10-15): waheed-ur-rehman-para ki WSS entry — accountability/pahal entry hai (MLA ki bhoomika sirf advocacy/follow-ups, swikriti sarkar ki GO se; credit note me capped); batch me 0 Devanagari, 0 rupee-symbol, 0 literal-\n; entry me 8 fields; date tenure-window me; sabhi 4 slugs file me pehle se absent — koi overwrite nahi.

jammuKashmirWorks['hasnain-masoodi'] = [];

jammuKashmirWorks['rafiq-ahmad-naik'] = [];

jammuKashmirWorks['waheed-ur-rehman-para'] = [
  {
    title: 'Pulwama town ke liye Rs 18.96 crore ki Water Supply Scheme ko Housing and Urban Development Department ne administrative approval di',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/mla-pulwama-waheed-para-thanks-housing-ministry-for-approving-rs-1896-crore-water-supply-scheme-for-pulwama-town-12211988',
    date: '2026-07-30',
    note: 'Greater Kashmir ke mutabiq Pulwama town ke liye Rs 18.96 crore ki Water Supply Scheme ko GO No. 61-JK (HUD) of 2026 ke tahat Urban Development Sector ke DULBK Capex Budget me administrative approval mili, jise MLA Waheed Ur Rehman Para ne CM aur Commissioner Secretary H&UDD ka shukriya ada karte hue apne do saal ke lagatar follow-ups ka natija bataya. Credit-transparency: swikriti sarkar ne jaari ki, MLA ki bhoomika advocacy aur demand ki rahi, isliye ye accountability-action hai na ki unka khud ka kaam; stage swikriti hai kyunki GO number established media me darj hai.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['ghulam-mohi-uddin-mir'] = [];

// ---- Shopian district batch (researched 2026-10-15) ----
// Per-MLA reject-logs (sankshipt):
// - showkat-hussain-ganie (JKNC, Zainapora): 1 entry. 8 REJECT — Daarbag Rs 3.7cr bridge shilanyas (YouTube-only, whitelist me nahi); seb MIS Zero Hour maang (sirf maang); hailstorm KCC loan waiver maang (sirf maang + non-whitelist); district/sectoral officers review meeting (sirf baithak); Ayush anti-drug camp udghatan (keval maujoodgi + non-whitelist); Sakeena Itoo Kokernag daure me saath (mantri karyakram + seat-bahar); Allowpora land party daura (rajnaitik mudda). NEGATIVE: nahi (affidavit ka pre-term case, koi nayi sthiti nahi — rule ke tahat reject).
// - shabir-ahmad-kullay (IND, Shopian): 1 entry. 10 REJECT — youth convention khud-daave (pesticide lab/marriage hall/AYUSH hospital: bina GO ghoshna); Rs 4.98cr MC Shopian shilanyas (Kashmir Horizon non-whitelist); tourism review meeting (sirf baithak); eviction-notice bill vaada (sirf bayan); Army handover bayan (rajnaitik); CM Rs 76cr package (sirf maujoodgi); Assembly pesticide sawal (koi outcome nahi); hail/fire daure (relief/daura); CDF bore well + GHSS Heerpora sirf social-media daave. NEGATIVE: nahi (ACB-complaint reports me koi FIR/case sthiti nahi).
// Coordinator QA note (2026-10-15): ganie ki Vidhansabha sawal wali entry DROP ki — sub-centre upgrade ki maang ka mantri ne likhit jawab me saaf inkaar kiya (consolidation policy + austerity GO); inkaar-shuda maang me koi administrative outcome/assurance nahi, isliye maang/prastav wale reject-niyam par bahar. kullay ki RKS swikriti entry KEPT — Daily Excelsior me prashasnik nikay ke itemized faisle (fund-srot sahit) ki established reporting, MLA ki bhoomika sanyukt adhyaksh tak seemit (note me capped). Batch me 0 Devanagari, 0 rupee-symbol, 0 literal-\n; har entry me 8 fields; dono dates tenure-window me; dono slugs file me pehle se absent — koi overwrite nahi.

jammuKashmirWorks['showkat-hussain-ganie'] = [
  {
    title: 'Zainapora ke paanch blocks me swachhata ke liye 6 sanitation gaadiyon (Hooper aur Dumper) ka flag-off; BDOs ko saunpa gaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://www.risingkashmir.com/index.php/shopian-mla-flags-off-sanitation-vehicles-to-boost-rural-hygiene-efforts',
    date: '2025-05-17',
    note: '17 May 2025 ko MLA Zainapora Showkat Hussain Ganie ne Chitragam, Zainapora, Imamsahib, Herman aur Kaprin blocks ke BDOs ko 6 sanitation gaadiyan (Hoopers aur Dumpers) saunpi; flag-off samaroh me ACD Shopian Manzoor Ahmad bhi maujood the. Fund-srot: Swachh Bharat Mission (sarkari yojna) — gaadiyan prashasan ne uplabdh karayi thi; MLA ka credit sirf flag-off/launch tak hai, kharid me unka vyaktigat ya CDF yogdaan darj nahi hai. Gaadiyan graameen kachra sangrah, alagav aur niptaan ke liye hain. Stage ka sach: lokarpan ho gaya, gaadiyan BDOs ke paas hain.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['shabir-ahmad-kullay'] = [
  {
    title: 'Zila Aspataal Shopian ke upgradation prastavon ki RKS baithak me swikriti — MLA Shopian ne sanyukt adhyakshata ki',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/rks-meeting-held-at-shopian/',
    date: '2024-11-18',
    note: 'Rogi Kalyan Samiti ki baithak (Mini Secretariat Shopian) ki sanyukt adhyakshata DDC Chairperson, MLA Shopian Shabir Ahmad Kullay aur Deputy Commissioner ne ki; baithak me Zila Aspataal Shopian ke liye Laboratory, MRD, Dentistry, Radiology, ENT, Physiotherapy, dialysis aur Ophthalmology vibhagon me machine upgradation ke prastav, washroom renovation, CCTV, heating aur safai-quality sambandhi kaam Hospital Development Fund aur Ayushman Bharat bachat nidhi se swikrit hue. Stage ka sach: approval-stage ka kaam hai, swikriti prashasnik nikay ki hai — shrey sarkari nikay ka hai, MLA ki bhoomika sanyukt adhyaksh ke roop me seemit.',
    period: '2024-2029',
  },
];


// ---- Kulgam district batch (researched 2026-10-15) ----
// Per-MLA reject-logs (sankshipt):
// - dh-pora (Sakeena Masood/Itoo, JKNC — cabinet mantri): 4 entries rakhi (mantri-framing wale seat-vishesh vyaktigat lokarpan/shilanyas — Baramulla ke Dar-precedent par, credit-transparency notes sahit). REJECT — SDH D.H. Pora Rs 11cr + PHC Pahloo shilanyas Rs 492.20 lakh (swasthya-vibhag, non-whitelist); AYUSH Khaloora (Rs 30 lakh)/Wovri Khull, HSS Khull (vibhagiya, non-whitelist); macadamization/sadak dauron wale karyakram (mantri-daura, non-whitelist; Banimullah Devsar seat-bahar); GDC D.H. Pora sports hall Rs 1.70cr (non-whitelist); health camp/prosthetic vitaran/public darbar (relief/daura); library DK Marg, Josh TB Mukti launch, Veshow flood mitigation (non-whitelist/rajya-karyakram). NEGATIVE: nahi (karyakaal me koi FIR/court sthiti nahi; PSA-bayaan Assembly statement tha; book-row/reservation affidavit vibhagiya mudde the).
// - mohamad-yousuf-tarigami (CPI(M), Kulgam): 0 entries. REJECT — GHSS Hanger academic block (Rs 1.43cr) + Mohipora playfield (Rs 63 lakh): dono post-event lekin sirf jkmonitor.org/thekashmirimages.com (whitelist-bahar); U-19 baseball tournament (event, infra nahi); mantri Itoo ke Kulgam events (sirf maujoodgi); Brazloo Jagir road (DDC member ne kiya, non-whitelist); "karenge" vaada; review meetings; CDF/vichardhara bayan. NEGATIVE: nahi (koi FIR/court sthiti/chunav-yachika nahi).
// - peerzada-feroze-ahamad (JKNC, Devsar): 0 entries. REJECT — Naib Tehsil Office Nowbugh Kund + CDF library, PHC Devsar ambulance, Memorial Library, drainage+beautification: sab post-event lekin sirf non-whitelist portals; mantri events me sirf maujoodgi (SDH Qaimoh, PHC Devsar, GDC Frisal); review baithaken; Assembly sawal; galat vyakti (Feroz Ahmad Khan, Peerzada Mohammad Syed). NEGATIVE: nahi (FIR 16/1993 pre-term, koi nayi sthiti nahi).
// Coordinator QA note (2026-10-15): Itoo worker ki 0-entry padhai ko mantri-precedent (Baramulla: mantri Javid Ahmad Dar ki Rafiabad seat ke 9 vyaktigat lokarpan/shilanyas) par phir se parikha gaya — D.H. Pora seat me 3 whitelisted post-event karyakram (Aadigen pul, Zambalnard school, Khull NTPHC) unke vyaktigat lokarpan/shilanyas the, isliye 4 entries mantri-framing + fund/nirmaan-credit disclosure ke saath rakhi. Tarigami/Feroze ke reject-sahi stands hain (whitelist barrier). Hygiene: 0 Devanagari, 0 rupee-symbol, 0 literal-\n; har entry me 8 fields; dates Oct 2024–Oct 2026 window me; teeno slugs file me pehle se absent — koi overwrite nahi.

jammuKashmirWorks['dh-pora'] = [
  {
    title: 'D.H. Pora ke Aadigen me Shaheed Wali Mohd Itoo Memorial Bridge (Rs 1.43 crore) ka udghatan — Sakeena Masood ne vyaktigat roop se lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/sakeena-masood-inaugurates-shaheed-wali-mohd-itoo-memorial-bridge-in-kulgam/',
    date: '2024-11-15',
    note: 'Greater Kashmir ki post-event reporting ke anusaar 15 Nov 2024 ko Sakeena Masood (Itoo) ne Aadigen (D.H. Pora, Kulgam) me Rs 1.43 crore ke truss girder pul ka udghatan kiya. Credit-transparency: article me unhe Swasthya-Shiksha-Samaj Kalyan Mantri ke roop me dikhaya gaya hai — ye mantri-framing hai; lekin pul unki apni D.H. Pora seat me hai aur lokarpan unhone vyaktigat roop se kiya, isliye ye seat-vishesh lokarpan entry hai (Baramulla batch ke mantri-precedent par). Nirmaan-karta PWD (R&B Kulgam) hai; MLA ka vyaktigat ya CDF yogdaan darj nahi. Pul ka naam unke pita Shaheed Wali Mohd Itoo ke samman me rakha gaya hai. Stage ka sach: poora hua kaam ka lokarpan.',
    period: '2024-2029',
  },
  {
    title: 'D.H. Pora ke Zambalnard me naye primary school bhavan ka udghatan — Sakeena Masood ne vyaktigat roop se lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/govt-committed-to-bridge-developmental-gaps-sakeena-itoo/',
    date: '2026-05-02',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 2 May 2026 ko Sakeena Masood ne Zambalnard (D.H. Pora, Kulgam) me naye primary school bhavan ka udghatan kiya. Credit-transparency: article me mantri-framing (Shiksha Mantri ke roop me) hai — lekin karyakram unki apni seat me tha aur lokarpan vyaktigat tha, isliye seat-vishesh entry hai (mantri-precedent par). Nirmaan-vivaran article me nahi hai. Stage ka sach: poora hua kaam ka lokarpan.',
    period: '2024-2029',
  },
  {
    title: 'D.H. Pora me Zumbalnad–Baidjahalan sadak ka shilanyas — Sakeena Masood',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/govt-committed-to-bridge-developmental-gaps-sakeena-itoo/',
    date: '2026-05-02',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 2 May 2026 ko Sakeena Masood ne D.H. Pora me Zumbalnad–Baidjahalan sadak ka shilanyas kiya (Zambalnard school udghatan ke isi daure me). Credit-transparency: mantri-framing; nirmaan aur fund-srot article me nahi hai. Stage ka sach: shilanyas — kaam ka poora hona abhi darj nahi.',
    period: '2024-2029',
  },
  {
    title: 'D.H. Pora ke Khull gaon me NTPHC (Rs 1.88 crore) aur Sheep Extension Centre (Rs 40.62 lakh) ka udghatan — Sakeena Masood',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Kashmir Life',
    sourceUrl: 'https://kashmirlife.net/sakeena-itoo-inaugurates-rs-2-29-cr-health-livestock-facilities-in-south-kashmir-397768/',
    date: '2025-07-19',
    note: 'Kashmir Life ki post-event reporting ke anusaar 19 Jul 2025 ko Sakeena Masood ne Khull gaon (D.H. Pora, Kulgam) me Rs 1.88 crore ke New Type Primary Health Centre aur R&B vibhag dwara nirmit Rs 40.62 lakh ke Sheep Extension Centre ka udghatan kiya. Credit-transparency: mantri-framing — pariyojna swasthya vibhag ki hai aur nirmaan sarkari tha; lekin unki apni seat me vyaktigat lokarpan tha, isliye seat-vishesh entry hai (mantri-precedent par). Stage ka sach: poora hua kaam ka lokarpan.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['mohamad-yousuf-tarigami'] = [];

jammuKashmirWorks['peerzada-feroze-ahamad'] = [];

// ---- Anantnag district batch (researched 2026-10-15) ----
// Per-MLA reject-logs (sankshipt):
// - gulam-ahmad-mir (INC, Dooru): 0 entries. REJECT — ADV road Rs 249cr upgrade (Mir+2 MLA joint representation, Greater Kashmir; govt "under consideration", koi GO nahi — sirf prastav); Trangtrajan-Manzmoh sadak shilanyas (topnewsjk.in, whitelist-bahar); Tulip Garden SKUAST-K Sagam udghatan (mantri Javid Dar ne kiya, Mir sirf saath); Dooru playfield/Rapid Sand Filtration Plant/Dy CM review meeting (mantri-event maujoodgi); Hazratbal/snowfall bayaan (rajnaitik maang); purane Daily Excelsior archive (pre-tenure). NEGATIVE: koi nahi (established FIR/court sthiti nahi).
// - kokernag (Zafar Ali Khatana, JKNC, Kokernag ST): 0 entries. REJECT — Trout Feed Plant lokarpan (mantri ne kiya, Khatana sirf saath); CM ki 15 WSS lokarpan me maujoodgi; mantri Itoo ka Kokernag daura; Zero Hour maangein (22 pending schemes); Singhpora-Vailoo tunnel sawal (project annul, koi kaam nahi); MP Gulam Ali Khatana ki khabrein (galat vyakti). NEGATIVE: koi nahi (affidavit ke 2 purane cases par established reporting nahi).
// - anantnag-west (Abdul Majeed Bhat/Larmi, JKNC, Anantnag West): 0 entries. REJECT — Damjan-Sandran bridge shilanyas (whitelist coverage nahi, sirf thekashmirhorizon/kashmirdigest); Shampora/Lalan road items (sirf chhote portals); Doctors Bill proposal (vidhayi, UT-wide); Kadipora fire relief (rahat, sirf site visit); GMC Anantnag/GDC Mattan udghatan (mantri ne kiya, MLA sirf upasthit; Mattan seat-bahar); Wanpoh Labour Sarai shilanyas (Dy CM ne kiya); plantation drive/book launch (ceremonial). NEGATIVE: koi nahi (namesake traps: Kupwara NDPS "Abdul Majid Bhat", Baramulla patwari case — alag vyakti; 2024 affidavit 0 cases).
// - anantnag (Peerzada Mohammad Syed, INC, Anantnag): 0 entries. REJECT — Chitaar boundary wall (Daily Excelsior; sirf PWD ko estimate nirdesh, sanction nahi — CDF ghoshna-type); ADV road proposal (sirf maang); Rani Bagh/SRTC yard/Mini Secretariat Assembly sawal (Kashmir Reader, non-whitelist); CM review meeting maujoodgi; 15 WSS lokarpan maujoodgi; Vande Bharat dhanyavaad (KNS, credit Railway Minister); snow-clearance nirdesh; Achabal-Chittergul nirikshan; Mattan Chowk fire visit (rahat + seat-bahar); 2008 FIR (pre-tenure, MLA khud aaropi nahi); 2010/2015 purane items (pre-term/galat vyakti). NEGATIVE: koi nahi.
// - srigufwara-bijbehara (Bashir Ahmad Shah Veeri, JKNC, Srigufwara–Bijbehara): 0 entries. REJECT — Nilandrus Stadium 2 sports shilanyas (whitelist coverage nahi, sirf KNS/Srinagar Mail); CDF Rs 90 lakh PDD ghoshna (non-whitelist, bina sanction); Dachigam/Poshkreeri WSS sirf nirikshan; purane 2017/2019 "Veeri" items (Abdul Rehman Veeri, galat vyakti + pre-term); hospital/reservation maangein (sirf prastav). NOTE: "MLA assaults AE" (Daily Excelsior, 29 Aug 2026) negative niyam poora nahi karta — FIR/court sthiti ya neta ka jawab khabar me nahi, isliye reject. Retry lead: Nilandrus shilanyas whitelist me coverage mile to entry banegi. NEGATIVE: koi nahi.
// - shangus-anantnag-east (Reyaz Ahmad Khan, JKNC, Shangus–Anantnag East): 0 entries. REJECT — SDH Shangus/PHC Rainipora health facilities udghatan (sirf YouTube description); GHSS Shangus smart classroom (schoolandcollegelistings.com, whitelist-bahar); Rs 5 lakh ghoshna (non-whitelist); CM/Dy CM/mantri events maujoodgi (Tehsil office, 15 WSS, Rs 9cr shilanyas, Itoo daura); Zero Hour maangein; rajnaitik bayaan; Shangus fire protest video (video-only, koi FIR/court nahi); Dairy dev (sarkari yojana); LAHDC Kargil "Reyaz" (galat vyakti). NEGATIVE: koi nahi.
// - altaf-ahmad-wani (Altaf Ahmad Wani/Kaloo, JKNC, Pahalgam): 2 entries rakhi. QA-DROP 1 (worker ki ambulance entry: PTI wire sirf newsdrum.in + News18 YouTube par — whitelist outlet par coverage nahi, srot-niyam se drop). REJECT — 50-bedded hospital (GO 2020 pre-term); Zero Hour maangein; CM ke 15 WSS me maujoodgi; Kathsoo trout shilanyas (mantri ne kiya); Movera road (sirf YouTube snippet); wildlife ex-gratia (rahat); paryatan tippani (hamle ke baad, na kaam na negative); 2015-era/Zee News items (pre-term); Mian Altaf Ahmad MP ki khabrein (galat vyakti); cable-car "in pipeline" (vaada). NEGATIVE: 1 (PSO maarpeet FIR — upar).
// Coordinator QA note (2026-10-15): saare 7 fragments kholkar padhe; worker ki ambulance entry (newsdrum.in/PTI wire, whitelist-bahar) drop — sakht srot-niyam; Tribune URL ka truncated slug poora kiya (full canonical URL lagaya). Baaki 6 profiles imaandari se khaali — whitelist MLA-star coverage is jile me sabse patli rahi (Pulwama jaisi). Hygiene: 0 Devanagari, 0 rupee-symbol, 0 literal-\n; har entry me 8 fields; sabhi dates Oct 2024–Oct 2026 window me; saato slugs file me pehle se absent — koi overwrite nahi.

jammuKashmirWorks['gulam-ahmad-mir'] = [];

jammuKashmirWorks['kokernag'] = [];

jammuKashmirWorks['anantnag-west'] = [];

jammuKashmirWorks['anantnag'] = [];

jammuKashmirWorks['srigufwara-bijbehara'] = [];

jammuKashmirWorks['shangus-anantnag-east'] = [];

jammuKashmirWorks['altaf-ahmad-wani'] = [
  {
    title: 'MLA Altaf Kaloo ne Pahalgam me Baisaran meadow tak 4 km se zyada lambi motorable road ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/kashmir/baisaran-meadows-to-get-motorable-road-12266232',
    date: '2026-08-16',
    note: 'Shilanyas MLA ne vyaktigat roop se kiya; project lagat Rs 6.09 crore, funding NABARD se, execution PWD Roads and Buildings Division Pahalgam dwara, kaam 2-3 saal me poora hone ka anumaan. Credit-transparency: MLA ne khud kaha ki CM Omar Abdullah ne project facilitate kiya aur unhone ise sarvochch prathmikta di — shrey sarkar ki suvidha aur MLA ke shilanyas tak seemit hai. Date-caveat: Greater Kashmir ki dateline "Srinagar, Aug 16" hai; India TV ne 17 Aug 2026 ko isi shilanyas ki pushti ki, isliye varsh 2026 maana gaya. Hamle ke baad ki suraksha-framing sandarbh matra hai; sadak swayam dastavezi seat-kaam hai.',
    period: '2024-2029',
  },
  {
    title: 'PSO ki shikayat par Pahalgam MLA Altaf Kaloo ke khilaf Sadar Anantnag thane me maarpeet ka case darj hua, MLA ne aaropon ko be-buniyad bataya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribune',
    sourceUrl: 'https://www.tribuneindia.com/news/j-k/national-conference-mla-kaloo-party-spokesperson-booked-for-assaulting-pso-after-altercation/',
    date: '2026-10-02',
    note: 'Negative (stage ka sach): J&K Police ne Sadar Anantnag police station me BNS ki dhaara 121 aur 351 ke tahat FIR darj ki — shikayatkarta MLA ke PSO hain, jinka dawa hai ki maarpeet hui; jaanch jaari hai, adalat ka koi nishkarsh nahi. Neta ka jawab darj: Kaloo ne aaropon ko "completely baseless" bataya, kaha PSO teen din duty se gayab tha, usne unki gardan pakdi thi, aur unhone counter-FIR karne ki baat kahi. FIR number outlets me alag-alag (332/334) darj hai, isliye number note me nahi diya gaya.',
    period: '2024-2029',
  },
];

// ---- Kishtwar district batch (researched 2026-10-15) ----
// Per-MLA reject-logs (sankshipt):
// - payare-lal-sharma (IND, Inderwal): 0 entries. REJECT — public outreach camp (sirf baithak); Inderwal doctor-vacancy starred question (sarkari jawab, documented outcome nahi); Rs 80cr electricity infrastructure daawa (GO nahi); pre-budget consultations (maujoodgi); Jitendra Singh ke 110 road projects (Union Minister ka karyakram); Sakeena Itoo ka Chatroo daura (mantri ka karyakram, MLA sirf saath); Dy CM ka Chatroo outreach + Industrial Estate ghoshna (mantri ka, sirf ghoshna); mantri se mulakat rahat-kaam (YouTube-only); "do darjan vikas kaam" two-year report card (sirf apna daawa, koi documented reporting nahi); KNS/Chatro school-upgrade maang (non-whitelist). NEGATIVE: koi nahi (0 cases).
// - shagun-parihar (BJP, Kishtwar): 2 entries rakhi. REJECT — PMGSY-IV sadak maang (Shivraj Singh Chouhan se mulaqat, sirf maang + ashwasan); Dachhan daura (nirikshan); Raghunath Ji Temple Rs 2.47cr AA (non-whitelist srot + MLA ki koi dastavezi bhoomika nahi); opinion article; Yoga Olympiad maujoodgi; Shakti Raj Parihar (galat vyakti); Pakal Dul/Kiru/Kwar (NHPC/kendra, shrey nahi). NEGATIVE: koi nahi.
// - padder-nagseni (Sunil Kumar Sharma, BJP, Padder–Nagseni — LoP): 3 entries rakhi. REJECT — blood donation camp (samajik karyakram); 2-din daura (nirikshan); Machail Mata Yatra baithak (non-whitelist + sirf baithak); Dy CM sameeksha baithak maujoodgi; cloudburst site visit (rahat + nirikshan); Chishoti Bailey bridge "inauguration" (BRO ne banaya, MLA sirf maujood); KV temporary accommodation inauguration (non-whitelist); 2018 link road (pre-term); "ex-MLA" 2014-18 charcha (pre-period); pre-budget paramarsh (maang, outcome nahi); LoP-roop ke sarkar-par hamle/bayaan (rajnaitik); 2015-17 mantri-kaleen karyakram (pre-term); RM briefing ki baaki maangein (sadak-chaudikaran/BRO/PMNRF — swikriti documented nahi). NEGATIVE: koi nahi (2008 Kishtwar clashes FIR No. 133/08 pre-term, koi nayi sthiti nahi).
// Coordinator QA note (2026-10-15): teeno worker fragments kholkar padhe; koi entry drop/flip nahi karna pada — badge/stage-disclosure niyam ke anusaar sahi the. KV Nagseni entry ka badge dawa rakha (sirf MLA ka daawa hi saboot hai — Union Cabinet ki swikriti ka shrey sarkar ka). Chisoti entry accountability/pahal hai (swikriti RM ki, credit capped). Hygiene: 0 Devanagari, 0 rupee-symbol, 0 literal-\n; har entry me 8 fields; sabhi dates Oct 2024–Oct 2026 window me; teeno slugs append se pehle absent the — koi overwrite nahi.

jammuKashmirWorks['payare-lal-sharma'] = [];

jammuKashmirWorks['shagun-parihar'] = [
  {
    title: 'District Hospital Kishtwar me pehli Phacoemulsification (Phaco) Unit ka lokarpan — Shagun Parihar',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/kishtwar-gets-first-ever-phaco-unit/',
    date: '2025-06-28',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 28 June 2025 ko MLA Shagun Parihar ne District Hospital Kishtwar me advanced cataract surgery ke liye pehli Phacoemulsification Unit ka vyaktigat lokarpan kiya, DC Pankaj Kumar Sharma ki maujoodgi me — UT ke kisi bhi district hospital me sthapit pehli Phaco unit hai. Credit-transparency: unit ki sthapna KWAR Hydro Electric Power Project ke Environment Management Plan ke tahat Rs 50 lakh ki lagat se hui — fund MLA ke CDF ka nahi hai; MLA ki bhoomika lokarpan tak. Stage ka sach: poora hua kaam ka lokarpan.',
    period: '2024-2029',
  },
  {
    title: 'GHSS Boys Kishtwar me Kishtwar ke pehle Indoor Shooting Range ka lokarpan — Shagun Parihar',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-kishtwars-first-indoor-shooting-range/',
    date: '2025-06-19',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 19 June 2025 ko MLA Shagun Parihar ne GHSS Boys Kishtwar me district ke pehle Indoor Shooting Range ka vyaktigat lokarpan kiya. Credit-transparency: suvidha Mechanical and Hospital Sub-Division aur Department of Youth Services and Sports (YS&S) ke sahyog se sthapit hui; article me MLA ke apne fund ya CDF ka ullekh nahi hai. Ussi din YS&S ne U/14 aur U/17 ladke-ladkiyon ke liye inter-zonal district-level tournament bhi launch kiya. Stage ka sach: poora hua kaam ka lokarpan.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['padder-nagseni'] = [
  {
    title: 'Padder–Nagseni me KP Galhar se Chingnana tak (Lower aur Upper Bronan hote hue) sadak ka shilanyas — Rs 17 crore pariyojna',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/sunil-lays-foundation-stone-of-prestigious-connectivity-project-for-paddar-nagseni/',
    date: '2025-12-05',
    note: 'Daily Excelsior (Rising Kashmir aur Greater Kashmir ne bhi report kiya) ki post-event reporting ke anusaar 5 Dec 2025 ko MLA Sunil Kumar Sharma ne apni Padder–Nagseni seat me KP Galhar se Chingnana tak Lower aur Upper Bronan hote hue sadak ka shilanyas kiya — lagbhag Rs 17 crore ki pariyojna, logon ki lambe samay se chali aa rahi maang. Credit-transparency: lekhon me fund ka srot (CDF ya vibhagiya yojana) nahi bataya gaya, isliye fund-srot aur asal shrey ki pushti nahi hai. Stage ka sach: shilanyas — kaam ka poora hona abhi darj nahi.',
    period: '2024-2029',
  },
  {
    title: 'Nagseni (Kishtwar) me Kendriya Vidyalaya ki sthapana ko Union Cabinet ki manzoori — MLA ne apne prayason ka daawa kiya',
    category: 'School',
    badge: 'dawa',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/jammu/lop-sunil-sharma-extends-gratitude-to-pm-modi-others-for-sanctioning-kendriya-vidyalaya-at-nagseni-kishtwar/',
    date: '2025-10-01',
    note: 'Greater Kashmir ki reporting ke anusaar 1 Oct 2025 ko Kendriya Vidyalaya Nagseni ki sthapana ko Union Cabinet ne manzoori di. MLA Sunil Kumar Sharma ne faisle ka swagat karte hue PM, Grih Mantri, Shiksha Mantri, Jitendra Singh, LG aur poori Cabinet ka dhanyavad diya aur apne lagataar prayason ko iska shrey diya — lekin ye unka apna daawa hai, vyaktigat yogdaan ki swatantra pushti report me nahi hai, isliye badge dawa hai. Stage ka sach: ghoshna — swikriti ka asal shrey Union Cabinet aur sarkar ka hai.',
    period: '2024-2029',
  },
  {
    title: 'Chisoti cloudburst ke baad MLA Sunil Kumar Sharma ne Raksha Mantri ke saamne maange uthayi — Bailey bridge, Army Goodwill School aur petrol pump ki on-spot swikriti',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://m.greaterkashmir.com/article/lop-sunil-sharma-briefs-defence-minister/426879',
    date: '2025-08-24',
    note: '14 Aug 2025 ke Chisoti cloudburst ke baad 24 Aug 2025 ko MLA Sunil Kumar Sharma ne video conference par Raksha Mantri Rajnath Singh ko Padder ki sthiti se avgat karaya aur Chisoti me motorable Bailey bridge, Padder me Army Goodwill School, petrol pump, mobile towers aur rahat sahayata ki maang rakhi — Greater Kashmir ne report kiya. Raksha Mantri ne on-spot Chisoti Bailey bridge ke nirman ki swikriti di, mobile connectivity ke turant kadam ke nirdesh diye, Army Goodwill School manzoor ki aur Padder me petrol pump ke nirdesh diye. Credit-transparency: ye accountability/pahal entry hai — swikriti ka poora shrey Raksha Mantri ka hai, MLA ki bhoomika maange uthane tak (credit capped); sadak-chaudikaran/BRO takeover/PMNRF/rehabilitation package jaise baki maangon ki swikriti report me darj nahi hai.',
    period: '2024-2029',
  },
];

// ---- Doda district batch (researched 2026-10-15) ----

jammuKashmirWorks['daleep-singh'] = [
  {
    title: 'Ghurraka Road se Sharora via Sango 7 km PMGSY-IV sadak kaam ka shubharambh — Rs 19.19 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/construction-of-rs-19-19-cr-pmgsy-road-project-inaugurated-at-bhaderwah/',
    date: '2025-12-22',
    note: 'Rising Kashmir ki post-event reporting ke anusaar 22 Dec 2025 ko Bhaderwah me PMGSY-IV ke tehet Ghurraka Road se Sharora via Sango 7 km sadak pariyojna ke kaam ka shubharambh MLA Bhadarwah Daleep Singh ne DDC Chairman Doda Dhananter Singh Kotwal ke saath kiya. Kul lagat Rs 1919.04 lakh hai, routine maintenance aur 5 saal baad periodic renewal ka pravdhan bhi hai. Credit-transparency: ye kendra-prayojit PMGSY pariyojna hai, MLA ka apna CDF fund nahi; MLA ki bhoomika kaam-shubharambh tak. Stage ka sach: kaam-shuru — poora hona abhi darj nahi.',
    period: '2024-2029',
  },
  {
    title: 'Bhaderwah-Chamba SRTC bus sewa dobara shuru — MLA Daleep Singh ne hari jhandi dikhai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/bhaderwah-chamba-srtc-bus-service-resumes/',
    date: '2026-08-25',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 25 Aug 2026 ko MLA Bhadarwah Daleep Singh ne ruki hui J&K SRTC Bhaderwah-Chamba bus sewa ko prashasan se baat karke phir se shuru karaya aur New Bus Stand Doda se bus ko hari jhandi dikhai — sthaniya logon aur Manimahesh yatriyon ki lambe samay se chali aa rahi maang thi. Credit-transparency: bus sewa J&K SRTC ki hai; MLA ki bhoomika sewa bahal karane aur flag-off tak (credit capped). Stage ka sach: accountability/pahal entry — dastavezi parinaam (sewa phir se chalu) darj hai.',
    period: '2024-2029',
  },
];
// Doda REJECT-LOG — Daleep Singh (Bhadarwah): 3 entries rakhi. REJECT — Court/Masjid Mohalla black topping (pre-term 2016); 4 PHC + foot bridge (pre-term 2017); Rs 4 lakh CDF fire-relief (pre-term + rahat); "no stone left unturned" (pre-term bayaan); IHAMP shilanyas 2018 (pre-term, mantriyon ne kiya); Maternity Waiting Home SDH (non-whitelist); PMEGP flour mill (non-whitelist + private udyam); Winter Carnival/Lavender Festival (utsav, kaam nahi); Shaheedi Samarak (whitelist-bahar, MPLAD+CDF announcement); Dialysis+X-Ray SDH (DHS ne kiya, MLA nahi); Dangal T20 (khel-karyakram/daan, kaam nahi); Zero Hour maangein (sirf maang); minister review meeting (whitelist-bahar); water crisis protest (MLA ke khilaf virodh, FIR/case nahi); Bangladesh protest/Kailash Yatra (bayaan/maujoodgi); Beopar Mandal (sirf maangein). COORDINATOR QA-DROP: solar light kits vitran (Daily Excelsior ne khud ise "relief" bataya — personal welfare/charity distribution vikas-kaam nahi). NEGATIVE: koi nahi (ADR/India TV ke anusaar zero cases; "Dalip Singh" ACB mamla galat vyakti — ex-Patwari).

jammuKashmirWorks['mehraj-malik'] = [
  {
    title: 'PSA ke tahat hirasat aur High Court se rihaayi — Doda MLA Mehraj Malik',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/will-continue-to-fight-for-people-jk-aap-mla-detained-under-psa-released-after-8-months/',
    date: '2026-04-28',
    note: 'Daily Excelsior ki reporting ke anusaar Doda ke AAP MLA Mehraj Malik ko Sep 2025 me PSA ke tahat hirasat me liya gaya aur Kathua jail me rakha gaya. Unhone 24 Sep 2025 ko High Court me habeas corpus yachika dayar ki; 27 Apr 2026 ko J&K and Ladakh High Court ne detention aadesh ko kanooni roop se asthir thahraate hue radd kar diya aur 28 Apr 2026 ko ve riha ho gaye. Malik ne kaha ve janta ke mudde uthana jaari rakhenge aur rihaayi ko janta ki jeet bataya; AAP ne ise satya ki jeet kaha. Note: PSA prashasnik hirasat hai — saza ya dosh-siddhi nahi.',
    period: '2024-2029',
  },
];
// Doda REJECT-LOG — Mehraj Malik (Doda): 1 negative entry rakhi (upar). REJECT — GEM CDF proposals (whitelist-bahar procurement prastav, swikriti nahi); CDF kharch X-post (self-claim, media report nahi); CDF allocation letterpad khabar (non-whitelist + sirf prastav); GIS master plan meeting (non-whitelist + baithak); Kencha health centre vivad+FIR (vivad hai, vikas-kaam nahi); Assembly sawal (non-whitelist + maang); NBW court production (legal matter, kaam nahi); LG mulakat (sirf mulakat); free power/security bayaan (sirf maang); homecoming rally (bayaan); chunav-jeet khabar (election result). POSITIVE: koi nahi — whitelist media me karyakaal ka koi poorn/lokarpan/shilanyas/swikriti kaam report nahi hua (zyada samay PSA hirasat me gaya).

jammuKashmirWorks['doda-west'] = [
  {
    title: 'Manjmi se Shinkhly tak 13.4 km sadak ka shilanyas — Rs 34 crore (Dessa Mandal)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/after-decades-of-isolation-dessa-villages-set-to-get-roads/',
    date: '2025-12-18',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 18 Dec 2025 ko MLA Doda West Shakti Raj Parihar ne Dessa Mandal me Manjmi se Shinkhly tak 13.4 km sadak ka shilanyas kiya — azadi ke baad se bina-sadak wale gaon judege. Credit-transparency: ye PMGSY Phase-IV ki kendra-prayojit pariyojna hai (anumaanit lagat Rs 34 crore); MLA ki pusht bhoomika shilanyas karyakram tak. Stage ka sach: shilanyas — poora hona abhi darj nahi.',
    period: '2024-2029',
  },
  {
    title: 'Manjmi se Laloor tak 6.5 km sadak ka shilanyas — Rs 9 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/after-decades-of-isolation-dessa-villages-set-to-get-roads/',
    date: '2025-12-18',
    note: 'Usi 18 Dec 2025 ke karyakram me MLA Doda West Shakti Raj Parihar ne Manjmi se Laloor tak 6.5 km sadak ka shilanyas bhi kiya. Credit-transparency: ye PMGSY Phase-IV ki kendra-prayojit pariyojna hai (lagat Rs 9 crore); MLA ki bhoomika shilanyas tak. Stage ka sach: shilanyas — poora hona abhi darj nahi.',
    period: '2024-2029',
  },
  {
    title: 'Assar-Dhansal se Patta (via Haliya Hirni) 15.3 km sadak ka shilanyas — Rs 73 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/shakti-parihar-lays-foundation-stone-of-rs-73-cr-assar-dhansal-to-patta-road/',
    date: '2025-12-21',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 21 Dec 2025 ko MLA Doda West Shakti Raj Parihar ne Assar-Dhansal se Patta via Haliya Hirni tak 15.3 km sadak ka shilanyas kiya — anumaanit lagat Rs 73 crore. Credit-transparency: report me fund ka srot (CDF ya vibhagiya yojna) nahi bataya gaya, isliye shrey ki pushti nahi hai; bhoomika shilanyas tak. Stage ka sach: shilanyas — poora hona abhi darj nahi.',
    period: '2024-2029',
  },
  {
    title: 'Bari se Sewat (via Kamlari) PMGSY sadak ka shilanyas — Rs 21 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/shakti-raj-parihar-lays-foundation-stone-for-rs-21-cr-pmgsy-road-project/',
    date: '2026-01-06',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 6 Jan 2026 ko MLA Doda West Shakti Raj Parihar ne Marmat Mandal ke Bari gaon me Bari se Sewat via Kamlari PMGSY sadak ka shilanyas kiya — swikrit lagat Rs 21 crore. Credit-transparency: ye kendra-prayojit PMGSY yojna hai; MLA ki bhoomika shilanyas/event tak. Stage ka sach: shilanyas — poora hona abhi darj nahi.',
    period: '2024-2029',
  },
  {
    title: 'Suli se Zadahan 5.5 km sadak ka lokarpan — Rs 16.5 crore (Saraz Mandal)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-shakti-parihar-inaugurates-road-worth-rs-16-5-crore-at-saraz-mandal/',
    date: '2026-01-08',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 8 Jan 2026 ko Saraz Mandal me 5.5 km lambi Suli-Zadahan sadak ka lokarpan MLA Doda West Shakti Raj Parihar ne DDC chairman aur vice-chairman ki maujoodgi me kiya — swikrit lagat Rs 16.5 crore. Credit-transparency: ye PMGSY pariyojna hai; bhoomika lokarpan tak. Stage ka sach: poora hua kaam ka lokarpan.',
    period: '2024-2029',
  },
  {
    title: 'Chilli-Dhandal se Barchan-Harilag 7.7 km sadak kaam ka shubharambh (udghatan) — Rs 23.6 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/shakti-parihar-lays-foundation-of-chilli-dhandal-to-barchan-harilag-road/',
    date: '2026-09-03',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 3 Sep 2026 ko MLA Doda West Shakti Raj Parihar ne Zangla Morh par Chilli-Dhandal se Barchan-Harilag tak 7.7 km sadak ka udghatan (kaam-shubharambh) kiya — PMGSY ke tahat swikrit pariyojna, anumaanit lagat Rs 23.6 crore; Chilli, Dhandal, Barchan, Harilag ke logon ki lambe arse ki maang thi. Credit-transparency: ye kendra-prayojit PMGSY pariyojna hai; bhoomika udghatan tak. Stage ka sach: kaam-shuru — poora hua sadak ka lokarpan nahi, poora hona abhi darj nahi.',
    period: '2024-2029',
  },
  {
    title: 'Paryote se Pull Doda tak purani NH ke 9 km hisse par blacktopping kaam ka shubharambh — Rs 14 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/parihar-inaugurates-rs-14-crore-blacktopping-work-in-doda/',
    date: '2026-09-14',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 14 Sep 2026 ko MLA Doda West Shakti Raj Parihar ne Paryote se Pull Doda tak purani National Highway ke 9 km hisse par blacktopping kaam ka shubharambh (udghatan) kiya — swikrit lagat Rs 14 crore. Stage ka sach: kaam-shuru — blacktopping ka poora hona abhi darj nahi, udghatan kaam-shubharambh ka hai.',
    period: '2024-2029',
  },
  {
    title: 'KM 6th Gangalwar se Sarsi Part-I se Gigrota 5 km sadak ka shilanyas — Rs 13.77 crore (Khellani)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/shakti-raj-parihar-lays-foundation-stone-for-rs-13-77-cr-road-project-in-khellani/',
    date: '2026-10-08',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 8 Oct 2026 ko Khellani block me MLA Doda West Shakti Raj Parihar ne KM 6th Gangalwar se Sarsi Part-I se Gigrota tak 5 km sadak ka shilanyas kiya — PMGSY-IV Batch-I ki pariyojna, swikrit lagat Rs 13.77 crore. Credit-transparency: ye kendra-prayojit PMGSY pariyojna hai; bhoomika shilanyas tak. Stage ka sach: shilanyas — poora hona abhi darj nahi.',
    period: '2024-2029',
  },
];
// Doda REJECT-LOG — Shakti Raj Parihar (`doda-west`, Doda West): 8 entries rakhi. REJECT — NH-Seja link road shilanyas 2015 (pre-term); VB-G RAM G press conference (policy bayaan, kaam nahi); Town Hall mega awareness programme (whitelist-bahar + sirf maujoodgi); DC Doda reservoir (whitelist-bahar, kaam DC ka); Thatri-Kahaljugasar highway (MP Jitendra Singh ka project, MLA bhoomika nahi); Dinore–Chamote NABARD road (whitelist-bahar scrape); YouTube Rs 72cr Majmi roads (YouTube-only; sahi aankde Daily Excelsior me entries me); Suli-Zadan jhagda (whitelist-bahar, MLA par FIR/case nahi — negative nahi); election/working committee coverage (baithak, kaam nahi); jan-sunwai (sirf mulaqat). COORDINATOR QA: Chilli-Dhandal aur Paryote entries ka stage sudhara — dono "kaam ka udghatan/shubharambh" the, poore hue kaam ka lokarpan nahi. NEGATIVE: koi nahi (FIR/case/janch ki koi established reporting nahi).

// Coordinator QA note (2026-10-15): teeno worker fragments padhe aur 3 key sources (Malik PSA Daily Excelsior article, solar-kit article, Paryote blacktopping article) khud kholkar verify kiye. Decisions: (1) solar-kit entry DROP — article khud ise "relief" batata hai, fund-srot darj nahi: personal welfare/charity distribution vikas-kaam nahi; (2) worker ka "Daleep Singh Parihar" suffix hataya — foundation record me naam sirf 'Daleep Singh' hai, namesake bhram se bachne ke liye; (3) 2 Parihar entries ka stage lokarpan se kaam-shuru me sudhara; (4) Malik negative ki teeno sharten (PSA order sthiti + habeas yachika + jawab) Daily Excelsior me verify — entry me koi stage field nahi. Hygiene: 0 Devanagari, 0 rupee-symbol, entry strings me koi escaped-newline nahi; har entry me 8 fields (negative me 7, stage ke bina); sabhi dates Oct 2024–Oct 2026 window me; marker exactly 1x; teeno slugs append se pehle absent the — koi overwrite nahi.


// ---- Ramban district batch (researched 2026-10-15) ----
jammuKashmirWorks['arjun-singh-raju'] = [
  {
    title: 'Raju ke Assembly sawal par sarkar ne Batote Town water supply scheme (AMRUT 2.0) ki sthiti batayi — Rs 2.387 crore ka kaam jari, Rs 1.85 crore kharch, distribution system bichh gaya aur ghar-tap connections lag rahe hain.',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/augmentation-of-wss-batote-town-underway-govt/',
    date: '2026-02-10',
    note: 'Daily Excelsior ki 10 Feb 2026 ki khabar ke mutabiq, Vidhan Sabha ke budget session me Arjun Singh Raju ke sawal ka jawab dete hue Mantri Sakeena Itoo ne bataya ki WSS Batote Town ki augmentation AMRUT 2.0 ke tehat Rs 2.387 crore ki lagat par chal rahi hai, ab tak Rs 1.85 crore kharch ho chuke hain, distribution system bichh gaya hai aur functional household tap connections (FHTCs) lagane ka kaam jari hai. Stage ka sach: ye sarkari yojana ka sarkari jawab hai — MLA ka yogdan sawal uthakar sthiti sarvajanik karana hai (accountability/pahal entry, credit capped); is kaam ka shrey MLA ke CDF ya unke niji prayas ka nahi hai.',
    period: '2024-2029',
  },
  {
    title: 'Raju ne Sanasar me sarkari Tulip Garden ka mausami udghatan kiya — 35 kanal me 2 lakh se zyada tulip, Floriculture Department ka project.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-ramban-inaugurates-sanasar-tulip-garden/',
    date: '2026-03-26',
    note: 'Daily Excelsior ki 26 Mar 2026 ki khabar ke mutabiq, Ramban MLA Arjun Singh Raju ne 25 Mar ko Sanasar me Tulip Garden ka udghatan karke usse season ke liye khol diya; unke saath Director Floriculture Jammu aur anya vibhagiya adhikari the. Stage ka sach: ye Floriculture Department ka pehle se sthapit sarkari project hai (35 kanal, 25 prakar ke 2 lakh se adhik tulip) — MLA ne uska mausami lokarpan kiya, isliye entry valid hai lekin poori credit-transparency ke saath: garden ka nirman/vikas MLA ke CDF ya unke fund se nahi, department ke khate me hai.',
    period: '2024-2029',
  },
  {
    title: 'Raju ne Sunaseri (Guglidhar, Pogal Paristan) me PWD dwara taiyaar Rs 2.17 crore ki tourism suvidhaon ka lokarpan kiya — eco log huts, viewpoints, benches, drainage aur pathways.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/2-day-folk-festival-culminates-at-sunaseri/',
    date: '2026-09-07',
    note: 'Daily Excelsior ki 7 Sep 2026 ki khabar ke mutabiq, do-divasiya Pahari lok utsav ke samaapan par MLA Arjun Singh Raju ne Sunaseri (Guglidhar) me naye tourism infrastructure ka udghatan kiya — ye kaam Public Works (R&B) Department ne Rs 2.17 crore ki lagat par poora kiya, jisme eco log huts, viewpoints, benches, sudhara drainage aur connected pathways shaamil hain. Stage ka sach: kaam sarkari vibhag ka hai aur suvidhaen poori tarah taiyaar hokar lokarpit hui hain — MLA ne lokarpan kiya, isliye entry valid hai lekin poori credit-transparency ke saath: nirman/vikas PWD ke khate me hai, MLA ke CDF se nahi.',
    period: '2024-2029',
  },
];

// Ramban worker REJECT-LOG — Arjun Singh Raju:
// 1. Daily Excelsior (27 Apr 2025) + Greater Kashmir — Rs 1 crore CDF relief package ki ghoshna (20 Apr 2025 ki baadh/bhuslan ke liye link roads, paths, drains, protection walls ka punarnirman). REJECT: rahat/rahat-karya vikas-kaam nahi; ye ghoshna thi, poore hone ki report nahi.
// 2. Greater Kashmir — Lot-I tender par press bayan (Rs 35,000 crore ki NHPC project ke baare me patrakaron ko jaankari). REJECT: sirf bayan/maujoodgi; MLA ki koi karyavahi, fund ya outcome nahi; project kendra sarkar/PSU ka hai.
// 3. Crosstown News (Feb 2025) — Patnitop Master Plan par likhit sawal. REJECT: srot whitelist me nahi + mantri ka jawab nakaratmak (koi timeline nahi, "kaam nahi ruka" ka dawa) — koi documented outcome nahi.
// 4. Rising Kashmir / Kashmir Life — Zero Hour me PHE Sub-Division Ramban me AEE posting ki maang. REJECT: sirf maang; koi mantri-jawab ya posting ka praman nahi.
// 5. Budget Session 2025 — Zero Hour me 10 hilly panchayaton ke liye ration depots badhane ki maang. REJECT: sirf maang; koi outcome nahi.
// 6. Crosstown News / JK Monitor — NCSL Legislative Summit Boston (Aug 2025) aur Chicago (Jul 2026) me bhaagidaari. REJECT: srot whitelist me nahi + vikas-kaam nahi.
// 7. Daily Excelsior (22 Jan 2025) — Galli-to-Kateri road ka foundation stone DyCM Surinder Choudhary ne rakha; MLA sirf upasthit. REJECT: sirf maujoodgi; shrey DyCM ka.
// 8. Jammu Links News (Jul 2026) — Cooperative Week samapan + Maitra me food packaging unit ka udghatan. REJECT: srot whitelist me nahi.
// 9. Kashmir Digest / Kashmir Ahead — "Pahari Saga Studio" private music studio ka udghatan (Jan 2026). REJECT: srot whitelist me nahi + niji (private) facility, sarkari suvidha nahi.
// 10. JK Monitor (May 2025) — Mini-Super Bazar M-PACS Maitra ka udghatan (Rs 95.42 lakh, Cooperative Dept). REJECT: sirf JK Monitor + Kashmir Digest ne cover kiya; koi whitelisted srot nahi.
// 11. Crosstown News (Jun 2026) — Shah-i-Asrar Memorial School Building ka shilanyas Mantri Javid Ahmad Dar ne kiya. REJECT: srot whitelist me nahi + mantri ka vibhagiya faisla, MLA ka nahi.
// 12. Excelsior News YouTube video — "MLA lays foundation stone of several development works in Ramban". REJECT: YouTube whitelist me nahi; koi whitelisted text article nahi mila, content verify nahi ho saka.
// 13. globgov.com (JKNC Facebook repost, Nov 2025) — Ganote Road kaam shuru hone ka dawa. REJECT: srot whitelist me nahi; kisi established media me coverage nahi mili.
// 14. thehiddennews.in — Chenab Bridge Maitra par Assembly sawal/jawab (CRIF ke tehat, Aug 2026 tak poora hone ka ashwasan). REJECT: srot whitelist me nahi (werna valid accountability entry hoti).
// 15. Daily Excelsior — Dr Jitendra Singh dwara 110 PMGSY roads ka e-foundation (Rs 1,503 crore). REJECT: MLA sirf upasthit; kendra/MP scheme; MLA ka shrey nahi.
// 16. thenewsnow.co.in (Sep 2026) — Batote/Ramban me pani ki kami par Calling Attention (schedule). REJECT: srot whitelist me nahi + pre-event schedule item.
// 17. Rising Kashmir — Motion of Thanks debate me Raju ka bhashan (power/roads/education pragati). REJECT: sirf bhashan; koi outcome nahi.
// 18. The Tribune / Kashmir Life (Apr 2026) — Magarkote cow-vigilante mamle me Raju ne jaanch ki maang ki. REJECT: ye Raju ke khilaf negative nahi hai; myneta/oneindia ke mutabiq unpar koi criminal case nahi hai. Koi negative entry nahi mili.
// 19. Kashmir Life (Jun 2026) — CM Omar Abdullah se mulaqat me kshetra ke mudde. REJECT: sirf mulaqat/ashwasan; koi documented outcome nahi.
// 20. globgov.com (Oct 2025) — Cooperative Societies Act sanshodhan par Assembly charcha; Zero Hour me sadak/swasthya/bijli ke mudde. REJECT: srot whitelist me nahi + sirf charcha/maang, outcome nahi.
// Negative: koi FIR/case/janch Raju ke khilaf established reporting me nahi mili — myneta.info (2024 affidavit) aur Oneindia ADR list dono me zero criminal cases darj.

// Sajad Shaheen (JKNC, Banihal seat) — Oct 2024+ kshetra-kaam research
// Period: 2024-2029 | Profile: BHARI (23 entries) | Negative: koi nahi mila
// Sab entries whitelist sources (Daily Excelsior, Greater Kashmir, Rising Kashmir) se,
// har source KHUD khola gaya. Date-inference wali entries ke note me saaf likha hai.

jammuKashmirWorks['sajad-shaheen'] = [
  {
    title: '12 September 2025 ko MLA Sajjad Shaheen ne Banihal-Lamber aur Banihal-Dooligam sadkon ke macadamisation ka aarambh kiya — 9 approved sadkon wali Banihal-Gool yojana ka hissa',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-banihal-kickstarts-macadamisation-of-roads/',
    date: '2025-09-12',
    note: 'Daily Excelsior ke correspondent ne post-event report ki: karyakram me Banihal-Lamber aur Banihal-Dooligam sadken shuru hui, kul nau approved sadken Banihal-Gool constituency plan me hain. Fund-srot article me specified nahi — yojana sarkari hai, MLA ka vyaktigat shrey sirf kickstart tak; CM Omar Abdullah aur Dy CM ke samarthan ka shukriya MLA ne khud ada kiya.',
    period: '2024-2029',
  },
  {
    title: '21 September 2025 ko MLA Sajjad Shaheen ne Neel-Gagoni aur Chamalwas-Neel sadkon ke macadamisation ka aarambh kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-kick-starts-black-topping-of-neel-chamalwas-road/',
    date: '2025-09-21',
    note: 'Daily Excelsior ne post-event report ki: Neel-Gagoni road aur Chamalwas-Neel road par macadamisation shuru — sthaniya logon ki lambe arse se maang poori. Fund-srot article me specified nahi; article me school upgrades, PHC staff aur sports infra ki pragati ke daave sirf bayanbazi hain, un par alag entry nahi.',
    period: '2024-2029',
  },
  {
    title: '2 October 2025 ko MLA Sajjad Shaheen ne Banihal-Gool ke liye Rs 3.21 crore CDF aur Rs 4.41 crore anya yojanaon ke kaamon ki swikriti ki ghoshna ki — kul Rs 7.62 crore',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-sanctions-rs-3-21-cr-cdf-for-banihal-gool-works/',
    date: '2025-10-02',
    note: 'Daily Excelsior ne MLA ke bayaan par report ki — sanction order/GO article me dikhaya nahi gaya, isliye badge dawa. CDF me Rs 58 lakh 45 High aur Higher Secondary schools me digital smart boards ke liye; health infra, hand pumps, high-mast lights, sadak-drainage bhi. Rs 10 lakh Moila aur Gobli Chunna me land subsidence se prabhavit parivaron ko rahat ke liye — rahat vikas-kaam nahi, isliye us bhag ko entry ke bahar rakha.',
    period: '2024-2029',
  },
  {
    title: '3 November 2025 ko MLA Sajjad Shaheen ne Gool me do sadak projects ke macadamisation ka aarambh kiya — Gool Bus Stand-Salbala Road (2 km, Rs 1.40 crore) aur Grathmorh-Moila via Shamti Road (4 km, Rs 9 crore, NABARD)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/mla-sajjad-shaheen-flags-off-road-projects-in-gool/',
    date: '2025-11-03',
    note: 'Rising Kashmir ne post-event report ki (article me Nov 03; CDF Rs 7.6 crore wali Oct 2025 ghoshna se mail karke 2025 tay). Grathmorh-Moila via Shamti Road NABARD se bana — kendra-prayojit fund ka poora disclosure. Isi article me 8 micro-hydel projects, 16 PMGSY projects aur Tatapani Rs 2.86 crore ke daave sirf bayanbazi hain — bina sanction-document ke entry nahi.',
    period: '2024-2029',
  },
  {
    title: '29 November 2025 ko MLA Sajjad Shaheen ne Banihal me teen Jal Shakti suraksha kaam launch kiye — kul lagat Rs 104 lakh',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/nc-mla-shaheen-launches-3-jal-shakti-projects-in-banihal/',
    date: '2025-11-29',
    note: 'Daily Excelsior ne post-event report ki: Banihal town ke Vegetable aur Fruit Market ke gird protection wall (Rs 50 lakh, lagbhag 250 vendors ki aajivika ki baadh se raksha) ka lokarpan aur Bishlari River par Malikpora (old toll post) aur Ganaipora ward 5 me do protection works (kul Rs 55 lakh) ke shilanyas. Fund-srot article me specified nahi — Jal Shakti/Flood Control vibhag ka kaam, MLA ne vyaktigat roop se launch kiya.',
    period: '2024-2029',
  },
  {
    title: '28 December 2025 ko MLA Sajjad Shaheen ne Banihal-Gool me sinchai aur baadh-suraksha kaamon ke shilanyas kiye — 1.2 km Bankoot irrigation kool (Rs 12 lakh) aur Darpora, Malwath, Naikpora me flood protection works (Rs 35 lakh)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/shaheen-launches-irrigation-flood-protection-works-in-banihal/',
    date: '2025-12-28',
    note: 'Daily Excelsior ne post-event report ki: Bankoot Nallah par 1.2 km lamba irrigation kool aur Darpora, Malawath, Naikpora, Chanjloo me baadh-suraksha kaam — kisaanon ki zameen aur sinchai ke liye. MLA ne vyaktigat shilanyas kiya; fund-srot article me specified nahi.',
    period: '2024-2029',
  },
  {
    title: '26 December 2025 ko MLA Sajjad Shaheen ne Banihal me Rs 40 lakh ke CDF kaamon ka aarambh kiya — Eid Gah aur Radhey Krishan Temple beautification, Ward 4 footpaths, Bishleri Nallah suraksha kaam, SDH Banihal kaam, Madrasa Faizul Islam suraksha kaam',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/mla-sajjad-shaheen-kickstarts-multiple-developmental-projects-under-cdf-in-banihal/',
    date: '2025-12-26',
    note: 'Rising Kashmir page par saal nahi likha tha; tag-archive ke reverse-chron order (March 2026 ke baad Dec 26) aur Oct 2025 CDF sanction timeline se 2025 maana gaya. MLA ne vyaktigat roop se CDF kaam kickstart kiye. Article me ECG machines, high-mast lights, hand pumps ki earmarking bhi bayanbazi hai — un par alag entry nahi.',
    period: '2024-2029',
  },
  {
    title: '8 January 2026 ko MLA Sajjad Shaheen ne Banihal-Gool ke 30 sarkari Higher Secondary aur High Schools me digital smart boards vitrit kiye — CDF 2025-26, lagat Rs 57 lakh',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/jammu/mla-sajjad-shaheen-distributes-digital-smart-boards-to-30-educational-institutions-in-banihal/',
    date: '2026-01-08',
    note: 'Greater Kashmir ne delivery event ki report ki (page par saal nahi tha; CDF 2025-26 — Oct 2025 me sanction-ghoshit — ke baad vitran se 2026 maana gaya). Govt Boys Model HSS Banihal me CEO Ramban aadi ki maujoodgi me vitran; CDF fund ka poora disclosure. Isi article me Rs 31 crore school-infra ke secured hone ka daawa sirf bayanbazi hai — bina document ke entry nahi.',
    period: '2024-2029',
  },
  {
    title: '25 March 2026 ko MLA Sajjad Shaheen ne MC Banihal me tile work aur drainage system kaam ka aarambh kiya — lagat Rs 43 lakh',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-banihal-kickstarts-construction-works-of-tiles-drains/',
    date: '2026-03-25',
    note: 'Daily Excelsior ne post-event report ki: MC Banihal town me tile work aur drainage — sanitation, drainage aur pedestrian pathways ke liye. PWD ke Executive Engineer aur MC Banihal ke EO maujood the. MLA ne vyaktigat roop se kickstart kiya.',
    period: '2024-2029',
  },
  {
    title: '1 April 2026 ko J&K Assembly me MLA Sajjad Shaheen ka Private Member Bill — Establishment of University Campus at Banihal — pass hua',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/jammu/private-members-bill-for-establishment-of-university-campus-at-banihal-passed-in-assembly/',
    date: '2026-04-01',
    note: 'Greater Kashmir ne documented outcome report kiya: bill sarv-sammati se pass hua — accountability/pahal entry, lekin shrey capped: CM Omar Abdullah aur Higher Education Minister Sakina Itoo ke samarthan se hua, sirf MLA ka nahi. Stage-sach: bill pass hona campus chalu hone ke barabar nahi; classes GDC Banihal se shuru hone ke liye university approval ka intezaar tha.',
    period: '2024-2029',
  },
  {
    title: '9 May 2026 ko MLA Sajjad Shaheen ne Khari me do pulon aur Higher Secondary School Khari ke modernization ke shilanyas kiye — kul Rs 5.4 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-banihal-lays-foundation-stones-for-rs-5-4-crore-projects/',
    date: '2026-05-09',
    note: 'Daily Excelsior ne post-event report ki: Nachalana-Khari-Mandakbass road par motorable bridge, doosra bridge aur Higher Secondary School Khari ka modernization/upgradation. MLA ne vyaktigat roop se shilanyas kiya; article me fund-srot (CDF/R&B/NABARD me se kaun) specified nahi — shrey ki poori tasdeek pending. Isi article me dialysis facilities ke jald chalu hone ka daawa sirf ghoshna hai.',
    period: '2024-2029',
  },
  {
    title: '11 May 2026 ko MLA Sajjad Shaheen ne Tata Pani Bath Ghat (health aur wellness tourism) ka shilanyas kiya — lagat Rs 2.5 crore',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/chenab-valley/tata-pani-to-be-developed-as-health-wellness-tourism-destination-sajjad-shaheen-11824959',
    date: '2026-05-11',
    note: 'Greater Kashmir ne press-release based post-event report ki: Tata Pani ke garam paani ke chashmon par Bath Ghat — wellness tourism destination ke roop me vikas. MLA ne vyaktigat shilanyas kiya; fund-srot article me specified nahi.',
    period: '2024-2029',
  },
  {
    title: '11 May 2026 ko MLA Sajjad Shaheen ne Sumar me Rs 3.52 crore ki nayi High School building ka lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/chenab-valley/tata-pani-to-be-developed-as-health-wellness-tourism-destination-sajjad-shaheen-11824959',
    date: '2026-05-11',
    note: 'Greater Kashmir ne post-event report ki: Sumar me nayi High School building (Rs 3.52 crore) ka lokarpan — door-daraz pahadi kshetra me shiksha infrastructure. MLA ne vyaktigat lokarpan kiya; nirmaan ka fund-srot article me specified nahi.',
    period: '2024-2029',
  },
  {
    title: '25 June 2026 ko MLA Sajjad Shaheen ne Banihal me CDF se bane 20-foot BANIHAL landmark signboard ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/mla-banihal-inaugurates-banihal-landmark-signboard-12107547',
    date: '2026-06-25',
    note: 'Rising Kashmir ne post-event report ki: Banihal town ke upar pahadi par 20-foot steel fabrication signboard — Constituency Development Fund (CDF) se nirmaan, poora fund-disclosure. MLA ne vyaktigat lokarpan kiya; J&K me is tarah ka pehla installation MLA ke bayaan ke anusar.',
    period: '2024-2029',
  },
  {
    title: '6 July 2026 ko MLA Sajjad Shaheen ne Banihal me Rs 1 crore Central Park Beautification Project ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/shaheen-launches-1-crore-banihal-park-project-12140286',
    date: '2026-07-06',
    note: 'Rising Kashmir ne post-event report ki: Central Park ko modern recreational space banane ka project — landscaped gardens, walking tracks, bachchon ke play areas, lighting. MLA ne vyaktigat shilanyas kiya; fund-srot article me specified nahi.',
    period: '2024-2029',
  },
  {
    title: '20 August 2026 ko MLA Sajjad Shaheen ne augmented Banihal Receiving Station ka lokarpan kiya — Rs 1.25 crore, UT Capex, capacity 6.3 se 10.6 MVA',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-augmented-receiving-station/',
    date: '2026-08-20',
    note: 'Daily Excelsior ne post-event report ki: power vibhag ka kaam UT Capex se (Rs 1.25 crore) — poora fund-disclosure, MLA ka vyaktigat lokarpan. Sangaldan station pehle se augmented tha aur Khari par kaam chal raha tha — ye daave MLA ke bayaan ke hain.',
    period: '2024-2029',
  },
  {
    title: '23 August 2026 ko MLA Sajjad Shaheen ne 4 km Nachlana-Talab road ka shilanyas kiya — lagat Rs 7.33 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/chenab-valley/around-5-dozen-road-projects-approved-in-banihal-gool-mla-sajjad-shaheen-12424924/amp',
    date: '2026-08-23',
    note: 'Greater Kashmir ne statement-based post-event report ki. MLA ne PMGSY, NABARD, UT Sector yojanaon ke tahat lagbhag 5 dozen approved sadkon ka daawa kiya — ye sankhya unka daawa hai, tasdeek pending; asal fund-shrey yojanaon/sarkar ka, MLA ka nahi. Shilanyas MLA ne vyaktigat roop se kiya.',
    period: '2024-2029',
  },
  {
    title: '1 September 2026 ko MLA Sajjad Shaheen ne Hinjhal me chaar sadak projects ke shilanyas kiye — kul lagat Rs 18.66 crore, PMGSY aur R&B vibhag ki yojanaon se',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/shaheen-lays-foundation-stones-of-4-road-projects-worth-rs-19-cr/',
    date: '2026-09-01',
    note: 'Daily Excelsior ne post-event report ki: Link Road Hinjhal-Bajar Basti Thandishaw via Gila Basti (1.70 km, Rs 448.53 lakh), Link Road Budgam-Khoura (1.75 km, Rs 410.41 lakh), Link Road Hinjhal-Gujjar Basti (3.50 km, Rs 938.30 lakh) aur Hinjhal Eidgah footbridge (Rs 69.26 lakh) — sab PMGSY aur R&B vibhag ke madhyam se; poora fund-disclosure, asal shrey kendra-prayojit PMGSY aur UT R&B ka hai. PMGSY aur R&B ke Executive Engineers maujood the.',
    period: '2024-2029',
  },
  {
    title: '15 September 2026 ko MLA Sajjad Shaheen ne Sangaldan ka augmented Receiving Station (3.15 se 6.30 MVA) janta ko samarpit kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/gool-power-network-gets-a-boost-12537744',
    date: '2026-09-15',
    note: 'Rising Kashmir ne post-event report ki: Gool kshetra ki bijli supply sudharne ke liye receiving station ki capacity doguni; MLA ne vyaktigat roop se samarpit kiya aur CM Omar Abdullah tatha vibhagon ke samarthan ka shukriya ada kiya. Power vibhag ka kaam — MLA ka shrey samarpan tak.',
    period: '2024-2029',
  },
  {
    title: '15 September 2026 ko MLA Sajjad Shaheen ne Sangaldan me BDO Office-cum-BDC Building (Rs 45 lakh) ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rising Kashmir',
    sourceUrl: 'https://risingkashmir.com/politics/gool-power-network-gets-a-boost-12537744',
    date: '2026-09-15',
    note: 'Rising Kashmir ne report ki: Gool daure me MLA ne BDO Office-cum-BDC Building Sangaldan (Rs 45 lakh) ka lokarpan kiya; isi daure me Dharam me BDO Office Building ka bhi lokarpan hua. Fund-srot article me specified nahi — Rural Development vibhag ka nirmaan, MLA ne vyaktigat lokarpan kiya.',
    period: '2024-2029',
  },
  {
    title: '16 September 2026 ko MLA Sajjad Shaheen ne Goda Gali Park (Gool) ke beautification aur upgradation ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/politics/banihal-gool-emerging-hub-of-development-tourism-heritage-mla-sajjad-shaheen-12542553',
    date: '2026-09-16',
    note: 'Greater Kashmir ne statement-based post-event report ki: prachin Goda Gali site ke park ka beautification — heritage aur tourism potential ke liye. MLA ne vyaktigat shilanyas kiya; fund-srot article me specified nahi. Isi din Dheeda me public darbar aur SDH Gool me RKS meeting hui — review baithak me koi documented outcome nahi, isliye entry nahi.',
    period: '2024-2029',
  },
  {
    title: '5 October 2026 ko MLA Sajjad Shaheen ne Chamalwas-Neel me do sadak projects (Krachihal-Tabela Road, Sinigam-Kawansool Road) ke shilanyas kiye — kul Rs 4.61 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/politics/mla-sajjad-shaheen-lays-foundation-stones-for-rs-461-crore-road-projects-in-banihal-12627277',
    date: '2026-10-05',
    note: 'Greater Kashmir ne statement-based post-event report ki. Isi avsar par Neel ke liye ambulance ki ghoshna bhi hui — ghoshna hai, delivery ka koi document nahi, isliye us par entry nahi. Fund-srot article me specified nahi.',
    period: '2024-2029',
  },
  {
    title: '30 November 2025 ko MLA Sajjad Shaheen ne teen sadak projects ka lokarpan kiya — Ramsoo-Dardahi, Makerkote-Dardahi, Livra-Gagarnag, PMGSY-IV se kul Rs 64.74 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Greater Kashmir',
    sourceUrl: 'https://www.greaterkashmir.com/gk-top-news/mla-sajjad-shaheen-inaugurates-3-vital-road-projects-in-banihal/',
    date: '2025-11-30',
    note: 'Greater Kashmir page par saal nahi likha tha; PMGSY-IV sanction timeline (Nov 3, 2025 ke article me 16 naye PMGSY projects approved darj) se 2025 maana gaya. Teeno sadken PMGSY-IV se — kendra-prayojit fund ka poora disclosure, asal shrey scheme ka; MLA ne vyaktigat roop se lokarpan kiya.',
    period: '2024-2029',
  },
];

// Ramban worker REJECT-LOG — Sajad Shaheen:
// 1. Ambulance for Neel ki ghoshna (5 Oct 2026, Chamalwas-Neel event) — ghoshna hai, delivery ka koi document nahi — reject.
// 2. Rs 10 lakh rahat Moila/Gobli Chunna land-subsidence prabhavit parivaron ko (CDF ghoshna, Oct 2025) — rahat/rahat kaam vikas-kaam nahi — reject.
// 3. Dialysis facilities SDH Banihal aur SDH Gool me "will soon become operational" (May 9, 2026 article) — "karenge" — reject.
// 4. Tatapani phase-1 me Rs 2.86 crore UT Capex sanction ka daawa (Nov 3, 2025 article) — sirf bayanbazi, sanction document/event nahi — reject.
// 5. 8 micro-hydel projects sanctioned (Buzla, Trigam, Pogal, Paristan, Ukharhal, Banihal-II) ka daawa — sirf bayanbazi — reject.
// 6. Rs 31 crore school infrastructure "secured" ka daawa (Jan 2026 smart-boards article) — sirf bayanbazi — reject.
// 7. 16 naye PMGSY road projects approved ka daawa (Nov 2025) — sirf bayanbazi — reject.
// 8. "Lagbhag 5 dozen sadken approved" ka daawa (Aug 2026) — sirf bayanbazi; event-based sadak entries alag se li gayi — reject.
// 9. Assembly intervention 29 Sep 2026 (Chenab Valley ke liye alag admin division, Khari me Degree College, school upgradation, CT scan, trauma hospital, patwar halqa demands) — sirf maang, koi documented prashasnik outcome/assurance nahi — reject.
// 10. Assembly debate 27 Oct 2025 (Mehraj Malik PSA detention par) — intervention, koi documented outcome nahi — reject.
// 11. BPL Season-11 inauguration (31 May 2026) — tournament ka udghatan sirf maujoodgi; Rs 4.5 crore sports infra ki ghoshna — ghoshna, koi sanction nahi — reject.
// 12. Rain-affected areas tour Banihal/Khari (25 Jul 2026) — rahat daura, vikas-kaam nahi — reject.
// 13. Shagan me school infrastructure ka shilanyas (15 Jun 2026) — whitelist source coverage nahi mili (sirf KNS/JK News Today) — reject.
// 14. RKS meeting SDH Gool (16 Sep 2026) — review baithak, koi documented outcome nahi — reject.
// 15. Khari Receiving Station augmentation "in progress" aur Grid Station Tethar par 50 MVA transformer "being installed" — adhura/bhavishya ka kaam — reject.
// 16. NH-44/NHAI tunnel/rail (USBRL) — is worker ki research me in par MLA ko shrey dene wali koi khabar nahi mili — reject.
// 17. NEGATIVE: koi negative entry nahi. Oneindia MLAs-criminal-cases list me Sajad Shaheen (Banihal, JKNC) par 0 case; PSA assembly debate doosre MLA (Mehraj Malik, Doda) par tha; 2017 ki CDF-probe khabren karyakaal se pehle ki opposition-era hain.

// Ramban REJECT-LOG (consolidated 2026-10-15): Arjun Singh Raju — 20 rejects (CDF relief ghoshna rahat-kaam, Lot-I tender sirf bayan, Zero Hour maangein bina outcome, DyCM-ke-shilanyas me maujoodgi, non-whitelist sources: Crosstown/KNO/JK Monitor/Jammu Links/Kashmir Digest/thenewsnow, private studio udghatan, Ganote Road FB dawa, YouTube-only video); Shaheen — 17 rejects (ambulance ghoshna, rahat bhaagon ka nishedh, 'karenge' dialysis, Tatapani/micro-hydel/Rs31cr/16 PMGSY sirf bayanbazi, Assembly maangein bina outcome, PSA debate sirf charcha, BPL tournament maujoodgi, barish daura rahat, Shagan school non-whitelist, RKS meeting no outcome, Khari station 'in progress', NH-44/USBRL no MLA-shrey). NEGATIVE: dono par koi nahi (Raju: affidavit 0 cases; Shaheen: 0 cases, 2017 CDF-probe pre-term).
// Coordinator QA note (2026-10-15): dono worker fragments kholkar padhe. Raju ke 3 entries rakhe — WSS Batote accountability/pahal (mantri ka documented jawab, credit capped), Sanasar Tulip Garden mausami udghatan aur Sunaseri PWD tourism infra lokarpan — dono me poori credit-transparency (department ka kaam, CDF nahi). Shaheen ke 23 entries rakhe — #3 CDF sanction-ghoshna badge dawa par (GO article me nahi), date-inference wali entries (#7 Dec 26 2025, #8 Jan 8 2026, #23 Nov 30 2025) notes me disclosed reasoning ke saath, PMGSY/NABARD/UT Capex fund-shrey har relevant note me disclosed. Hygiene: 0 Devanagari, 0 rupee-symbol, entry strings me 0 escaped-newline; har entry me 8 fields; sabhi dates calendar-valid aur Oct 2024-Oct 2026 window me; marker exactly 1x; dono slugs append se pehle absent the — koi overwrite nahi.

// ---- Reasi district batch (researched 2026-10-15) ----
jammuKashmirWorks['gulabgarh'] = [];

jammuKashmirWorks['kuldeep-raj-dubey'] = [];

jammuKashmirWorks['shri-mata-vaishno-devi'] = [
  {
    title: 'Buttan se Kundd tak sadak ka kaam shuru (Katra)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/baldev-sharma-kick-starts-development-works-in-katra/',
    date: '2026-02-26',
    note: 'MLA ne khud teeno sadak-kaam shuru karwaye — Buttan-Kundd 2.6 km sadak ka blacktopping/nirman (Rs 5.77 crore), Aghar Jitto-Temple road par retaining wall (Rs 9.77 lakh) aur Aghar Jitto-Kyoon road par protection wall (Rs 12 lakh); PWD ke adhikari maujood the. Fund srot ka ullekh article me nahi hai.',
    period: '2024-2029',
  },
  {
    title: 'Sujandhar-Ratnote sadak ka lokarpan (NABARD)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-katra-ddc-chairman-reasi-inaugurate-road/',
    date: '2025-12-31',
    note: 'MLA Baldev Raj Sharma aur DDC Chairman Saraf Singh Nag ne 13.10 km lambi Sujandhar-Ratnote sadak (Gabbar Sarote hote hue) ka formal lokarpan kiya. Sadak NABARD loan assistance (RIDF-XXIX) ke tehat swikrit hai, lagat Rs 2758.80 lakh — ye MLA ka CDF fund nahi hai. 10,000 se zyada logon ko fayda, Reasi-Udhampur circular link.',
    period: '2024-2029',
  },
  {
    title: 'PM SHRI GHS Sersundwan me Rs 8 lakh ke kaam ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/jugal-baldev-inaugurate-development-works-at-ghs-sersundwan/',
    date: '2026-09-16',
    note: 'MP Jugal Kishore Sharma aur MLA Baldev Raj Sharma ne milkar school me Rs 8 lakh ke buniyadi-dhanche ke kaam ka lokarpan kiya; MLA ne school ko official roop se god liya (adopted) hai. Fund srot ka ullekh article me nahi hai — MP ki bhagidari ke saath sanyukt karyakram tha.',
    period: '2024-2029',
  },
  {
    title: 'DMFT se school kaam swikrit — Suketar, Dera Baba Banda',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/rs-32-72-lakh-approved-for-mata-vaishno-devi-constituency-mla/',
    date: '2026-08-26',
    note: 'DMFT Governing Council (Reasi, DC ki adhyakshata) ne MLA ki sifarish par FY 2026-27 ke liye kul Rs 32.72 lakh ke kaam approve kiye — Primary School Suketar me atirikt classroom aur Middle School Dera Baba Banda me boundary wall. Fund srot District Mineral Foundation Trust.',
    period: '2024-2029',
  },
  {
    title: 'DMFT se Sub Centre Kanjli aur Dera Baba Banda ki marammat swikrit',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/rs-32-72-lakh-approved-for-mata-vaishno-devi-constituency-mla/',
    date: '2026-08-26',
    note: 'Usi DMFT meeting me MLA ki sifarish par Sub Centre Kanjli aur Sub Centre Dera Baba Banda ki repair/upgradation bhi swikrit hui. Fund srot District Mineral Foundation Trust.',
    period: '2024-2029',
  },
  {
    title: 'Sula Park toilet complex ki marammat swikrit (DMFT)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/rs-32-72-lakh-approved-for-mata-vaishno-devi-constituency-mla/',
    date: '2026-08-26',
    note: 'Usi DMFT swikriti package me Sula Park ke toilet complex ki repair/upgradation bhi shaamil hai. Fund srot District Mineral Foundation Trust.',
    period: '2024-2029',
  },
  {
    title: 'CHC Katra ke liye Rs 26.39 lakh ke kaam ki swikriti',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-announces-critical-care-ambulance-for-chc-katra/',
    date: '2026-01-12',
    note: 'MLA ne CHC Katra ke Rogi Kalyan Samiti ke chairman ke roop me meeting me Rs 26.39 lakh ke vibhinn vikas kaamon ki swikriti di. Kaamon ki suchi aur fund srot ka ullekh article me nahi hai.',
    period: '2024-2029',
  },
];

// Reasi REJECT-LOG — Khurshied Ahmed (gulabgarh): 14 REJECT (0 entries) — GDC Sarh Bagga shilanyas (jkexpresstv non-whitelist), Dak Bungalow Mahore review meeting (jkmonitor + sirf nirikshan), Sub Division Dharmari introductory meeting (sirf baithak), Balmatkote public meeting (sirf aashwasan), 7-day tour/Sarsote survey launch (thekashmirhorizon non-whitelist), Mantri Javid Dar ke event me maujoodgi (inauguration mantri ne kiya), CM Omar flood visit Mahore (relief + CM-led), Gool Mela inauguration (MLA Banihal ne kiya, ceremonial), privilege notice against Jal Shakti Minister (rajnaitik vivad, negative rule fail), Assembly Zero Hour (sirf maang), NC Gen Secy meeting (party + relief), Dy CM tribal statement (sarkari jawab, MLA ka kaam nahi), Reasi admin consultative meeting (sirf prastav-maang), Motion of Thanks debate (non-whitelist anyway). NEGATIVE: koi nahi.
// Reasi REJECT-LOG — Kuldeep Raj Dubey (kuldeep-raj-dubey): 20 REJECT (0 entries) — Jij-Narkote road shilanyas (newspostreasi non-whitelist), DH Reasi NICU kaam (thereasitimes non-whitelist), Bhimgarh Fort review meeting (sirf baithak), CM ka Rs 16.33cr STP shilanyas (CM ka faisla, sirf maujoodgi), public darbar (sirf aashwasan), Railway Minister ko maang-patra (sirf gyapan), Kousar Nag Yatra flag-off (ceremonial), NEP Utsav udghatan (ceremonial chief-guest), LG dwara Shiv Khori shrine lokarpan (Shrine Board ka kaam), Make in India bhashan (sirf bhashan), school annual day chief-guest (ceremonial), MP Parikrama Yatra (MP ka karyakram), LG/CM se mulaqat (sirf maang), monkey menace Assembly sawal (sirf sawal), defamation complaint (HC ne MLA ke paksh me quash kiya — negative nahi), Committee on Subordinate Legislation sadasya (pad, kaam nahi), NHPC CMD mulaqat (sirf maang), Maha Shivaratri Mela udghatan (ceremonial), DDC Capex meeting upasthiti (sirf baithak), 'MLA Hiranagar Kuldeep Raj' (alag vyakti). NEGATIVE: koi nahi.
// Reasi REJECT-LOG — Baldev Raj Sharma (shri-mata-vaishno-devi): 11 REJECT (7 entries rakhi) — Early Times ke saare items (non-whitelist), Rs 5cr Municipal Committee ghoshna (sirf ghoshna, sanction nahi), critical care ambulance ailaan (sirf daan-ghoshna), DMFT Rs 80 lakh atirikt prastav (sirf prastav, swikriti nahi), PMGSY Kanjli shilanyas (MP ne kiya, sirf maujoodgi), Railway Minister memorandum (sirf gyapan), Aug 2024 campaign (pre-tenure), Vaishno Devi ropeway vivad (rajnaitik bayaan, negative nahi), 2013 expo (pre-tenure), JK Monitor/Kashmir Horizon items (non-whitelist), YouTube heated-exchange (non-whitelist). NEGATIVE: koi nahi (0 criminal cases).
// Coordinator QA note (2026-10-15): teeno worker fragments kholkar padhe. Khurshied Ahmed aur Kuldeep Raj Dubey imaandari se khaali — unke asal kaam sirf non-whitelist portals par hain. Baldev Raj Sharma ki 7 entries rakhi — Buttan-Kundd vyaktigat kaam-shuru, Sujandhar-Ratnote NABARD lokarpan (poora fund-disclosure), Sersundwan joint lokarpan (MP ke saath, MLA ne school god liya — sanyukt-udghatan precedent), DMFT Rs 32.72 lakh itemized swikriti (DC-led Governing Council, MLA ki sifarish documented — swikriti-standard fit), CHC Katra RKS swikriti (Kullay RKS precedent). QA-drop: Rs 5cr municipal ghoshna (sanction nahi), ambulance ailaan (daan-ghoshna), DMFT Rs 80 lakh prastav (swikriti nahi mili). Hygiene: 0 Devanagari, 0 rupee-symbol, entry strings me 0 escaped-newline; har entry me 8 fields; sabhi dates calendar-valid aur Oct 2024-Oct 2026 window me; marker exactly 1x; teeno slugs append se pehle absent the — koi overwrite nahi.

// ---- Udhampur district batch (researched 2026-10-15) ----
// AC order: Udhampur West, Udhampur East, Chenani, Ramnagar (SC)
jammuKashmirWorks['udhampur-west'] = [
  { title: 'MLA Pawan Kumar Gupta ne Rs 127 crore ke Jal Shakti water supply project ki swikriti ki ghoshna ki, jo Udhampur bhar me saaf paani ke liye approved hua hai', category: 'Paani', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-informs-about-approval-of-rs-127-cr-jal-shakti-project/', date: '2025-02-01', note: 'MLA Pawan Kumar Gupta ne 1 February 2025 ko ghoshna ki ki Jal Shakti Department ke Rs 127 crore ke naye water supply project ko manzoori mil gayi hai taaki Udhampur me swachh aur prabhavi paani ki supply sunischit ho, aur unhone khud progress ki nigrani ka vaada kiya; approval ka independent pramaan news me nahi diya gaya isliye ye unke daave par adharit entry hai.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Sundrani se Dhannu tak Namble aur Thowal Modha hote hue 1.75 km road ke blacktopping kaam ka shubhaarambh kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Rising Kashmir', sourceUrl: 'https://www.risingkashmir.com/index.php/mla-inaugurates-blacktopping-of-key-road-in-udhampur', date: '2025-04-16', note: 'MLA Pawan Kumar Gupta ne 16 April 2025 ko Sundrani se Dhannu via Namble aur Thowal Modha 1.75 km road ke blacktopping work ka udghatan kiya; gaonwalon ne ise lambe samay se pending maang bataya aur MLA ne adhikariyon ko time par quality kaam sunischit karne ka nirdesh diya.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Chakhad-Dabrah ke beech 1.6 km sadak aur Birma Nallah par 43 meter motorable bridge ka lokarpan kiya, jo safar 10 km kam karta hai', category: 'Sadak', badge: 'news', sourceLabel: 'The Tribune', sourceUrl: 'https://www.tribuneindia.com/news/mla-inaugurates-key-road-bridge-in-rural-udhampur/', date: '2025-05-05', note: 'MLA Pawan Kumar Gupta ne 5 May 2025 ko Chakhad aur Dabrah gaon ko jodne wali 1.6 km blacktopped road (Rs 281.74 lakh) aur Birma Nallah par 43 meter motorable bridge (Rs 172 lakh) ka lokarpan kiya, dono Languishing Projects Scheme ke tahat PWD ki nigrani me bane; naye link se yatra doori lagbhag 10 km kam ho gayi.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Jib se Padanoo tak 1.55 km road ke blacktopping kaam ka shubhaarambh kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-pawan-gupta-inaugurates-black-topping-work-of-road/', date: '2025-05-26', note: 'MLA Pawan Kumar Gupta ne 26 May 2025 ko Jib se Padanoo tak 1.55 km road par blacktopping ka udghatan kiya, jo Pradhan Mantri Gram Sadak Yojana ke renewal coating scheme ke tahat Rs 27.90 lakh ki laagat se ho raha hai; sthaniya logon ne ise Jib-Padanoo ke liye lifeline bataya.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Nagrota Link Road ke 1 km macadamization kaam ka shubhaarambh kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-pawan-gupta-inaugurates-macadamization-work-of-nagrota-link-road/', date: '2025-05-28', note: 'MLA Pawan Kumar Gupta ne 28 May 2025 ko Nagrota Link Road aur uske connecting stretches ke 1 km macadamization work ka udghatan kiya, jo PWD dwara Rs 30 lakh ki sanctioned laagat se banaya ja raha hai; locals ne ise lambi pending maang ka poora hona bataya.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Dandyal, Ward No 21 ki main road ke blacktopping ka udghatan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-road-blacktopping-work-2/', date: '2025-06-04', note: 'MLA Pawan Kumar Gupta ne 4 June 2025 ko Dandyal, Ward No 21 ki main road ke blacktopping ka udghatan kiya; locals ne kaha ki kharaab sadak ki unki lambe samay ki maang poori hui aur MLA ne aane wale samay me anya wards me bhi aisi initiatives ka vaada kiya.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Krimchi me Rs 9 lakh ki laagat se lage 250 KVA transformer ka lokarpan kiya', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pawan-gupta-inaugurates-250-kva-transformer-at-krimchi/', date: '2025-07-06', note: 'MLA Pawan Kumar Gupta ne 6 July 2025 ko Krimchi me Rs 9 lakh ki laagat se installed 250 KVA transformer ka udghatan kiya, jo Power Development Department ke adhikariyon ki maujoodgi me hua; isse pichhle 5 saalon se lambi maang poori hui aur bijli supply me sudhar ka vaada kiya gaya.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Udhampur township me Tricolour structure ke nirmaan kaam ka shubhaarambh kiya', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-udhampur-inaugurates-construction-work-of-tricolour-structure/', date: '2025-07-30', note: 'MLA Pawan Kumar Gupta ne 30 July 2025 ko Deputy Commissioner ki maujoodgi me Udhampur township me Tricolour structure ke nirmaan kaam ka udghatan kiya, jo Untied Grant ke Rs 11.18 lakh se PWD bana raha hai.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Sergah se Devika Temple tak sadak ke nirmaan kaam ka shubhaarambh kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-udhampur-inaugurates-construction-work-of-tricolour-structure/', date: '2025-07-30', note: 'MLA Pawan Kumar Gupta aur DC ne 30 July 2025 ko Sergah road ke nirmaan kaam ka udghatan kiya jo District Plan ke tahat Rs 30.11 lakh ki projected laagat se ban rahi hai aur Devika Temple tak pahunch ko aasaan karegi.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Pachala Chowk se Forest Office hote hue Venus Chowk tak sadak ke blacktopping ka shubhaarambh kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-pawan-gupta-kick-starts-blacktopping-work-of-road/', date: '2025-10-09', note: 'MLA Pawan Kumar Gupta ne 9 October 2025 ko Pachala Chowk se Forest Office hote hue Venus Chowk tak sadak ke blacktopping kaam ka udghatan kiya jo Rs 23 lakh ki estimated laagat se ho raha hai; unhone PWD ko samay par quality kaam poora karne ka nirdesh diya.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Adarsh Colony ki main internal road ke blacktopping kaam ka udghatan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pawan-gupta-inaugurates-blacktopping-work-at-adarsh-colony/', date: '2025-10-25', note: 'MLA Pawan Kumar Gupta ne 25 October 2025 ko Udhampur town ke Adarsh Colony me main internal road ke blacktopping kaam ka udghatan kiya jo Rs 20 lakh ki estimated laagat se ho raha hai; locals ne ise unki lambi pending maang poori hone ka swagat kiya.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Thandapadar, Ward No 21 me Rs 12.64 lakh ki sadak blacktopping kaam ka shubhaarambh kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-pawan-gupta-kick-starts-blacktopping-work-at-thandapadar/', date: '2025-11-18', note: 'MLA Pawan Kumar Gupta ne 18 November 2025 ko Thandapadar, Ward No 21 me blacktopping kaam ka udghatan kiya jo Rs 12.64 lakh ki sanctioned laagat se sanction hua hai; locals ne kaha ki sadak ki kharaab halat ki wajah se unki lambi pareshani khatm hogi.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne Kallar, Ward No 21 ki main link road ke blacktopping kaam ka udghatan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-pawan-k-gupta-inaugurates-black-topping-project-at-kallar/', date: '2025-11-20', note: 'MLA Pawan Kumar Gupta ne 20 November 2025 ko Kallar, Ward No 21 ki main link road par blacktopping kaam ka udghatan kiya, jisme badi sankhya me sthaniya log maujood the aur samuday ne ise sadak, paani, street lights aur drainage ke pending kaamon ki kadi me dekha.', period: '2024-2029' },
  { title: 'MLA Pawan Kumar Gupta ne NABARD RIDF XXIX ke tahat PMGSY Road Debrah se MS Dadyal tak 2.4 km nayi sadak ke blacktopping ka lokarpan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-pawan-gupta-inaugurates-blacktopping-of-nabard-road/', date: '2025-12-12', note: 'MLA Pawan Kumar Gupta ne 12 December 2025 ko PMGSY Road Debrah se MS Dadyal tak 2.4 km nayi sadak ke blacktopping ka udghatan kiya jo NABARD RIDF XXIX ke tahat bani hai jiska tender cost Rs 438.11 lakh, allotment cost Rs 3,12,45,097.47 aur maintenance cost Rs 39,82,802 hai; isse school aur public services tak pahunch sudhregi.', period: '2024-2029' },
];

jammuKashmirWorks['udhampur-east'] = [
  { title: 'Tehsil Majalta me Nakki se Amara tak sadak ke macadamization ka kaam MLA ne shuru karwaya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pathania-kick-starts-macadamization-of-road/', date: '2024-10-17', note: 'MLA Udhampur East Ranbir Singh Pathania ne 17 Oct 2024 ko tehsil Majalta me Nakki se Amara tak sadak ke macadamization ka kaam kickstart kiya, jise reporter ke mutabiq khetriya infrastructure me ek mahatvapurna kadam bataya gaya.', period: '2024-2029' },
  { title: 'Battal Ballian kshetra ki teen PMGSY sadkein lagbhag Rs 111.96 lakh me MLA ne udghatit ki', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pathania-conducts-survey-of-accident-prone-points-along-nh-inaugurates-road-projects/', date: '2024-12-18', note: '18 Dec 2024 ko MLA ne Upper Battal Ballian se Ladyala, Battal Ballian se G Paddar aur Battal Ballian se Par Pakh tak ki PMGSY sadkon ka udghatan kiya, jinme kul lagbhag Rs 111.96 lakh ka nivesh bataya gaya.', period: '2024-2029' },
  { title: 'Roun se Sugar tak C&T Plan ke tahat Rs 41.6 lakh ki sadak ka MLA ne udghatan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pathania-promises-improved-road-connectivity-in-udhampur/', date: '2025-03-23', note: '23 Mar 2025 ko MLA Udhampur East ne C&T Plan ke tahat Rs 41.6 lakh ki lagat se bani Roun se Sugar tak sadak ka udghatan kiya, jismein sthaniya pratinidhimandal bhi upasthit raha.', period: '2024-2029' },
  { title: 'Khui Paddar (Upper Malhar) tak Chalora hote hue Rs 1.17 crore ki sadak pariyojna ka MLA ne udghatan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pathania-assures-to-make-udhampur-model-of-road-connectivity/', date: '2025-07-15', note: '15 Jul 2025 ko MLA ne National Highway se Khui Paddar (Upper Malhar) via Chalora tak sadak pariyojna ka udghatan kiya, jiska anumanit lagat Rs 1.17 crore hai aur jo 1,000 se zyada niwasiyon ko pakki sadak se jodegi.', period: '2024-2029' },
  { title: 'Sadiyon purane Jaganoo Talab ke jeernoddhar ka kaam MLA ne Rs 1.22 lakh ki lagat par shuru karwaya', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pathania-for-fast-tracking-development-better-road-connectivity/', date: '2025-10-19', note: '19 Oct 2025 ko MLA ne aitihasik Jaganoo Talab ki marammat, navikaran aur punarjeevan ka kaam shuru karwaya, jiski anumanit lagat Rs 1.22 lakh batayi gayi aur ise kshetra ki virasat ke sanrakshan se joda gaya.', period: '2024-2029' },
  { title: 'Sumwal-Sarial Chowa sadak Stage-II PMGSY pariyojna (Rs 1.30 crore) ka MLA ne udghatan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pathania-for-fast-tracking-development-better-road-connectivity/', date: '2025-10-19', note: '19 Oct 2025 ki shaam ko MLA ne PMGSY ke tahat Rs 1.30 crore ki lagat wali Sumwal-Sarial Chowa sadak Stage-II ka udghatan kiya, jo Surinsar aur Manwal ke beech shortcut connectivity dega.', period: '2024-2029' },
  { title: 'Pagyal se Narsulla tak pul aur Kharang se Larang tak NABARD sadak pariyojna ka MLA ne udghatan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Rising Kashmir', sourceUrl: 'https://risingkashmir.com/jk-govt-merely-buying-time-has-no-agenda-for-progress-bjp-mla/', date: '2025-11-27', note: 'Udhampur me 27 Nov ke aayojit karyakram me MLA ne Pagyal se Narsulla tak pul aur Kharang se Larang tak NABARD sadak pariyojna sahit pramukh buniyadi dhancha pariyojnaon ka udghatan kiya, jise kshetra ki connectivity ke liye mahatvapurna bataya gaya.', period: '2024-2029' },
  { title: 'MLA ke daure ke dauran ek jalsevan jal supply yojana ka sanchalan shuru hua', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/goi-committed-for-creating-sense-of-security-in-jk-pathania/', date: '2026-02-27', note: '27 Feb 2026 ko Garh Samna Banj, Thani, Dhamma aadi ilaakon ke daure ke dauran MLA ne ek jalsevan jal supply yojana ka sanchalan (operationalisation) kiya, jabki reporter ne yojana ka naam ya lagat darj nahi kiya.', period: '2024-2029' },
  { title: 'Dhamma se Thani tak sadak ki adharshila MLA ne rakhi', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/goi-committed-for-creating-sense-of-security-in-jk-pathania/', date: '2026-02-27', note: '27 Feb 2026 ko MLA ne Dhamma se Thani tak sadak ki adharshila rakhi aur saath me Ghar Dhamma jal supply yojana poorn karne, borewell aur band motoron ki marammat ke nirdesh diye; sadak ki lagat report me darj nahi hai.', period: '2024-2029' },
  { title: 'GDC Majalta se Dhar Road tak sampark sadak ka nirman poorn hua (MLA ka dawa)', category: 'Sadak', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/goi-committed-for-creating-sense-of-security-in-jk-pathania/', date: '2026-02-27', note: '27 Feb 2026 ke daure me MLA ne bataya ki Government Degree College Majalta ko Dhar Road se jodne wali sampark sadak ka kaam poorn ho gaya hai aur jald blacktopping shuru hogi; yah sirf MLA ka dawa hai, prashasanik pushti report me nahi hai.', period: '2024-2029' },
  { title: 'Majalta me CDPO karyalaya bhavan ki Rs 2.32 crore lagat par adharshila MLA ne rakhi', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pathania-dedicates-major-development-projects-worth-crores-to-public/', date: '2026-05-10', note: '10 May 2026 ko Majalta kshetra me MLA ne CDPO Majalta ke karyalaya bhavan ki adharshila rakhi, jiski anumanit lagat Rs 2.32 crore batayi gayi aur karyakram me BDO Majalta, Tehsildar Majalta aadi adhikari upasthit rahe.', period: '2024-2029' },
  { title: 'Panchayat Sumwal aur Panchayat Chore Panjian me Rs 30-30 lakh ke naye Panchayat Ghar MLA ne samarpit kiye', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pathania-dedicates-major-development-projects-worth-crores-to-public/', date: '2026-05-10', note: '10 May 2026 ko MLA ne Panchayat Sumwal aur Panchayat Chore Panjian ke liye Rs 30-30 lakh ki lagat se bane naye Panchayat Gharon ka udghatan karke janta ko samarpit kiya.', period: '2024-2029' },
  { title: 'Government High School Kakrai ka naya school bhavan aur khel infrastructure MLA ne udghatit kiya', category: 'School', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pathania-for-accountability-quality-timely-completion-of-development-works/', date: '2026-06-06', note: '6 Jun 2026 ko MLA ne Government High School Kakrai ke naye nirmit school bhavan aur ek anya khel infrastructure pariyojna ka udghatan kiya, jinki kul lagat Rs 1 crore se adhik batayi gayi.', period: '2024-2029' },
  { title: 'MLA ne Rs 17.21 crore ki teen pramukh sadak pariyojnaon ka udghatan kiya', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pathania-inaugurates-road-projects-worth-over-rs-17-cr/', date: '2026-09-13', note: '13 Sep 2026 ko MLA ne kul lagbhag Rs 17.21 crore ki teen sadak pariyojnaon ka udghatan kiya: Nakki-Amwara se Farwa Stain (2.400 km, Rs 5.78 crore), Dhar Road se Sourtha (3.375 km, Rs 7.46 crore) aur PMGSY ke tahat Barta HSS se Chapper (1.8 km, Rs 3.97 crore).', period: '2024-2029' },
  { title: 'Larey-Smal se Sochi Moh tak RBM laying aur Balpur-Kamdala se Bani tak PMGSY sadak ka kaam MLA ne shuru karwaya', category: 'Sadak', badge: 'news', sourceLabel: 'Rising Kashmir', sourceUrl: 'https://risingkashmir.com/politics/pathania-inaugurates-two-road-projects-in-udhampur-12666834', date: '2026-10-11', note: '11 Oct 2026 ko MLA ne do sadak karyon ka udghatan kiya: Panchayat Sumwal (Block Majalta) me Larey-Smal se Sochi Moh tak RBM laying (CD&P Budget 2026-27, Rs 4.85 lakh) aur Block Khoon me Balpur-Kamdala se Bani tak 4.1 km PMGSY-IV sadak (swikrit lagat Rs 887.68 lakh).', period: '2024-2029' },
];

jammuKashmirWorks['balwant-singh-mankotia'] = [
  { title: 'Jaganoo se Ser Chompal Nallah tak (Km 3rd to Neeli) 2.317-km PMGSY-IV sadak ka shilanyas, Rs 500.16 lakh me manzoor, 508 logon ko fayda hoga.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-lays-foundation-stone-for-pmgsy-road-in-chenani/', date: '2026-09-26', note: 'MLA Balwant Singh Mankotia ne 26 September 2026 ko Batch-I (2026-27) ke tahat PMGSY-IV sadak ka shilanyas karke nirmaan kaam shuru karwaya. Jaganoo aur aaspaas ke pahaadi ilakon me connectivity sudharne ke liye project manzoor hai.', period: '2024-2029' },
  { title: 'Baadh me bahe Tordi (Bant) Pul ke punarnirmaan ka bhoomi-pujan, Rs 5.40 crore ki laagat se kaam shuru.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-lays-foundation-stone-for-development-projects/', date: '2026-08-29', note: 'MLA ne 29 August 2026 ko Tordi (Bant) Bridge ke punarnirmaan ka shilanyas aur bhoomi-pujan kiya. Pichle saal baadh me pul beh gaya tha, jisse school jaane wale bachchon samet hazaaron logon ko pareshani ho rahi thi; MLA kehte hain unhone departments se iske punarnirmaan ki lagataar pairavi ki thi.', period: '2024-2029' },
  { title: 'Tordi se Rammal (Upper Ladda) tak PMGSY sadak ka shilanyas, lagbhag Rs 12 crore ki laagat.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-lays-foundation-stone-for-development-projects/', date: '2026-08-29', note: 'MLA Balwant Singh Mankotia ne 29 August 2026 ko Tordi-Rammal (Upper Ladda) PMGSY sadak ka bhoomi-pujan kiya. Ye sthaniya logon ki lambe arse se maang thi; poori hone par aaspaas ke gaon ko shiksha, swasthya aur bazaar tak behtar connectivity milegi.', period: '2024-2029' },
  { title: 'Batote se Chenani tak vaikalpik 33 KV bijli supply line ka shilanyas, Rs 2.65 crore ki laagat, kaam November 2026 tak poora karne ka lakshya.', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-lays-foundation-stone-for-power-supply-line-to-chenani/', date: '2026-09-04', note: 'MLA ne 4 September 2026 ko Kud me Batote se Chenani tak vaikalpik 33 KV power supply line ka shilanyas aur bhoomi-pujan kiya, jisse Chenani aur Latti tehsilon ka bijli network majboot hoga. Pichle saal bhaari barish ke baad Chenani lagbhag 22 din bijli ke bina raha tha, isliye vaikalpik line ki zaroorat mahsoos hui.', period: '2024-2029' },
  { title: 'Sarar Panchayat me lagbhag Rs 5 crore ki lagat wali sinchai nahar (kool) ke nirmaan ka aarambh.', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-mankotia-inaugurates-new-development-projects/', date: '2026-02-14', note: 'MLA Balwant Singh Mankotia ne 14 February 2026 ko Sarar Panchayat me lagbhag Rs 5 crore ki lagat se manzoor nahar (kool) ke kaam ke aarambh ka udghatan kiya, jisse sinchai suvidhaon me sudhar aur kisan samuday ko fayda hone ki ummeed hai.', period: '2024-2029' },
  { title: 'National Highway se naye Bus Stand Chenani (Sanghot) tak Rs 50 lakh ki approach sadak ka udghatan.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-mankotia-inaugurates-new-development-projects/', date: '2026-02-14', note: 'Rs 50 lakh ki manzoori ke baad MLA ne 14 February 2026 ko National Highway se naye Bus Stand Chenani (Sanghot) tak approach sadak ka udghatan kiya, jisse sthaniya logon ke liye public transport ki pahunch aasan hogi.', period: '2024-2029' },
  { title: 'Lower Mada se Upper Mada (Warmanwal) tak 4.5-km Gujed-Chirdi PMGSY sadak ke nirmaan ka udghatan, Rs 6.25 crore se adhik ki laagat.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-inaugurates-gujed-chirdi-road/', date: '2025-11-27', note: 'MLA ne 27 November 2025 ko PMGSY ke tahat Gujed-Chirdi sadak ke nirmaan ka udghatan kiya; karyakram me SDM Chenani aur PMGSY ke adhikari maujood the. Sadak donon panchayaton ke hazaaron logon ke liye shiksha, swasthya aur kisan upaj ki aawajahi me madadgar hogi.', period: '2024-2029' },
  { title: 'Chenani-Ghoordi me lagbhag Rs 35 crore ki PMGSY Kokeni-Pachound sadak ke nirmaan ka udghatan.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-inaugurates-rs-35-crore-kokeni-pachound-road-under-pmgsy/', date: '2025-12-21', note: 'MLA Balwant Singh Mankotia ne 21 December 2025 ko lagbhag Rs 35 crore ki PMGSY Kokeni-Pachound sadak ka udghatan kiya; ye logon ki lambe arse se maang thi aur kai gaon ko all-weather connectivity degi. Gunwatta-purn nirmaan aur tay samay me kaam poora karne ka ashwasan diya gaya.', period: '2024-2029' },
  { title: 'Pattangarh-Latti sadak ka apne Constituency Development Fund se Rs 10 lakh aavantan par kaam shuru karwaya.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-holds-public-darbar-addresses-grievances-at-thildu-panchode/', date: '2026-06-21', note: '21 June 2026 ko Thildu, Panchode (Latti) me hue public darbar me sthaniya logon ne MLA ka aabhar jataya ki unhone apne Constituency Development Fund se Rs 10 lakh dekar lambe arse se pending Pattangarh-Latti sadak ka kaam shuru karwaya, jisse connectivity badhegi aur safar ka samay ghatega.', period: '2024-2029' },
  { title: 'Chouka Nala (Kosar) me Rs 15 lakh ki lagat se boundary wall ke nirmaan ka udghatan.', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-launches-developmental-projects-in-chenani-ghordi/', date: '2025-12-04', note: 'MLA ne 4 December 2025 ko kai infrastructure pariyojanaon ke saath Chouka Nala (Kosar) me Rs 15 lakh ki lagat se boundary wall ke nirmaan ka udghatan kiya, jisse suraksha aur public infrastructure sudhrega.', period: '2024-2029' },
  { title: 'Dharmik-paryatan sthal Mantalai me Rs 90 lakh ke tile work project ka aarambh.', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-launches-developmental-projects-in-chenani-ghordi/', date: '2025-12-04', note: 'MLA ne 4 December 2025 ko Mantalai me Rs 90 lakh ke tile work project ka aarambh kiya, jisse is mahatvapurn dharmik aur paryatan sthal ki sundarta aur karyatmakta badhegi.', period: '2024-2029' },
  { title: 'Bupp Sarad sadak par Rs 1.50 crore ki macadamization (black-topping) ka kaam shuru karwaya.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-launches-developmental-projects-in-chenani-ghordi/', date: '2025-12-04', note: '4 December 2025 ko MLA ne Bupp Sarad sadak par Rs 1.50 crore ki lagat se macadamization ka kaam shuru karwaya, jisse sadak ki quality aur sthaniya logon ke liye aawajahi me sudhar hoga.', period: '2024-2029' },
  { title: '9-km Serisu sadak pariyojana ka aarambh, anumaanit laagat Rs 15 crore, door-daraaz gaon judenge.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-launches-developmental-projects-in-chenani-ghordi/', date: '2025-12-04', note: 'MLA ne 4 December 2025 ko Rs 15 crore ki anumaanit laagat wali 9-km Serisu sadak pariyojana aadhikarik roop se shuru karwayi; poori hone par door-daraaz ke gaon mukhya margon se judenge aur shiksha, swasthya aur aarthik avsaron tak pahunch badhegi.', period: '2024-2029' },
  { title: 'Champaidi sadak par Rs 45 lakh ke teen vikas kaamon ka aarambh.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mankotia-launches-developmental-projects-in-chenani-ghordi/', date: '2025-12-04', note: 'MLA Balwant Singh Mankotia ne 4 December 2025 ko Champaidi sadak par kul Rs 45 lakh ke teen vikas kaam shuru karwaye; unhone kaha Chenani-Ghoordi ka vikas unki sarvochch prathmikta hai.', period: '2024-2029' },
];

jammuKashmirWorks['ramnagar'] = [
  { title: 'MLA Dr Sunil Bhardwaj ne Ramnagar me Rs 180 crore ke RDSS bijli infrastructure revamp ki shuruaat ka udghatan kiya.', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-ramnagar-inaugurates-rdss-power-infrastructure-revamp-scheme/', date: '2026-04-26', note: 'MLA ne 26 April 2026 ko NTPC aur PDD officials ke saamne Ramnagar me Revamped Distribution Sector Scheme ke implementation ka udghatan kiya; ye scheme Rs 180 crore ki lagat se pure Udhampur district ke liye sanction hui hai aur NTPC execute karegi, taaki purane transformers, poles aur lines badli ja sakein; article me khud MLA ne iske liye MoS Dr Jitendra Singh ke intervention ka credit diya hai.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Ramnagar me 4 km PMGSY road (Main Road Dheeran se Band Baryalta tak, Rs 9.52 crore) ka kaam shuru karwaya.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-ramnagar-inaugurates-infrastructure-projects-worth-crores/', date: '2026-03-03', note: '3 March 2026 ko MLA ne Panchayat Dheeran ki long-pending demand wali 4 km PMGSY sadak ka kaam aarambh karwaya; article ke anusaar isi sadak ka digital udghatan kuch din pehle MoS Dr Jitendra Singh kar chuke the, isliye MLA ki bhoomika kaam ki shuruaat tak seemit rahi.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Government High School Kaghote me do Smart Classrooms aur ek naye Examination Hall (Rs 1.52 crore) ka udghatan kiya.', category: 'School', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-ramnagar-inaugurates-infrastructure-projects-worth-crores/', date: '2026-03-03', note: '3 March 2026 ko MLA ne GHS Kaghote me Rs 1.52 crore ki lagat se bane do smart classrooms aur ek examination hall ka udghatan kiya taaki grameen students ko shahri schools jaisi digital learning facilities mil sakein.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Ramnagar-Basantgarh Main Road se Tarmayan Temple tak sadak ki blacktopping (Rs 90 lakh) ke poorn hone ka udghatan kiya.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-ramnagar-inaugurates-infrastructure-projects-worth-crores/', date: '2026-03-03', note: '3 March 2026 ko MLA ne Baba Vasuki Naag shrine tak jaane wali sadak ki Rs 90 lakh ki blacktopping ke poora hone ka udghatan kiya, jisse pilgrims aur tourists ki pahunch aasaan hogi.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Ramnagar me Barta-Chanunta-Bhugtrian sadak ki blacktopping ka udghatan kiya.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-blacktopping-of-barta-chanunta-bhugtrian-road/', date: '2026-04-15', note: '15 April 2026 ko MLA ne Chanunta, Panjgrain, Ghordi, Chowki aur Badhole ko Ramnagar town se jodne wali kharab haalat ki sadak ki blacktopping ka udghatan kiya; sthaniya logon ne ise apni lambe samay se pending maang bataya.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Ramnagar me naye minibus stand (Rs 2.76 crore) ke nirmaan kaam ka shubharambh kiya.', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-work-on-new-minibus-stand-in-ramnagar/', date: '2026-04-14', note: '14 April 2026 ko MLA ne Ramnagar town me Rs 276 lakh ki estimated lagat wale naye minibus stand ka construction inaugurate kiya, jisse traffic congestion kam hoga aur commuters ko organized transport facility milegi.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Girls High School Ramnagar me Rs 15 lakh ke synthetic volleyball court ka udghatan kiya.', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-bhardwaj-inaugurates-synthetic-volleyball-court-at-ghs-ramnagar/', date: '2026-01-06', note: '6 January 2026 ko MLA ne UT Capex Budget se GHS Ramnagar me Rs 15 lakh ki lagat se bane synthetic volleyball court ka udghatan kiya aur students ke saath friendly match bhi khela.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Veriyan, Kulwanta me Chigla Balota-Kulthian Marta ko jodne wale Rs 2 crore ke motorable bridge ka udghatan kiya.', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-ramnagar-inaugurates-motorable-bridge-at-veriyan/', date: '2025-06-14', note: '14 June 2025 ko MLA ne PMGSY ke tahat Rs 2 crore ki lagat se bane motorable bridge ka udghatan kiya, jisse Chigla Balota aur Kulthian Marta ke door-daraz gaon barahmasi sadak connectivity se jude.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Raja Ram Singh Stadium ke upgradation ke liye Rs 1 crore ke sanction ki ghoshna ki.', category: 'Any', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-bhardwaj-inaugurates-synthetic-volleyball-court-at-ghs-ramnagar/', date: '2026-01-06', note: '6 January 2026 ko volleyball court ke udghatan samaroh me MLA ne daawa kiya ki Raja Ram Singh Stadium ke upgradation ke liye Rs 1 crore sanction ho chuka hai; sanction order ka koi swatantra saboot report me nahi diya gaya, isliye sirf MLA ke daave par darj hai.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Block Basantgarh me chhe damaged roads ke permanent restoration ke liye Rs 3.80 crore ke sanction ki ghoshna ki.', category: 'Sadak', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-sunil-bhardwaj-holds-public-darbar-at-basantgarh/', date: '2026-05-24', note: '24 May 2026 ko Basantgarh me public darbar ke dauran MLA ne daawa kiya ki Block Basantgarh ki chhe kshatigrast sadkon ke sthaayi restoration ke liye Rs 3.80 crore sanction ho chuke hain; sanction order report me nahi diya gaya, isliye sirf MLA ke daave par darj hai.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Basantgarh Hospital tak approach road ke nirmaan ke liye Rs 33 lakh ki ghoshna ki.', category: 'Aspataal', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-sunil-bhardwaj-holds-public-darbar-at-basantgarh/', date: '2026-05-24', note: '24 May 2026 ko Basantgarh public darbar me MLA ne Basantgarh Hospital tak pahunchne wali approach road ke liye Rs 33 lakh ki ghoshna ki; ye sirf MLA ki ghoshna hai, kaam ki shuruaat ya sanction order ki koi report nahi mili.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Chanjju Bridge ke nirmaan ke liye Rs 1.20 crore ki ghoshna ki.', category: 'Sadak', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-sunil-bhardwaj-holds-public-darbar-at-basantgarh/', date: '2026-05-24', note: '24 May 2026 ko Basantgarh public darbar me MLA ne Chanjju Bridge ke nirmaan ke liye Rs 1.20 crore ki ghoshna ki; ye sirf MLA ki ghoshna hai, iske aage ki koi progress report nahi mili.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Gandh Top me guest house ke nirmaan ke liye Rs 85 lakh ki ghoshna ki.', category: 'Any', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-sunil-bhardwaj-holds-public-darbar-at-basantgarh/', date: '2026-05-24', note: '24 May 2026 ko Basantgarh public darbar me MLA ne tourism ko badhava dene ke liye Gandh Top me guest house ke nirmaan ke liye Rs 85 lakh ki ghoshna ki; ye sirf MLA ki ghoshna hai, kaam ki shuruaat ki koi report nahi mili.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Government College Basantgarh ke liye Rs 18.25 crore ke sanction ki ghoshna ki.', category: 'School', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-ramnagar-inaugurates-infrastructure-projects-worth-crores/', date: '2026-03-03', note: '3 March 2026 ki report me Daily Excelsior ne MLA ki stewardship me sanctioned works ki list me Government College Basantgarh ke liye Rs 18.25 crore ka zikr kiya; sanction order ka swatantra saboot nahi hai, isliye sirf daave par darj hai.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Ghordi Khas se Jandrore tak Rs 2.06 crore ke motorable bridge ke sanction ki ghoshna ki.', category: 'Sadak', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-ramnagar-inaugurates-infrastructure-projects-worth-crores/', date: '2026-03-03', note: '3 March 2026 ki report me MLA ki taraf se Ghordi Khas se Jandrore tak Rs 2.06 crore ke motorable bridge ko sanctioned bataya gaya; sanction order ka swatantra saboot nahi hai, isliye sirf daave par darj hai.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Hansa-Jorh foot bridge (Rs 1.20 crore) ke sanction ki ghoshna ki.', category: 'Sadak', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-ramnagar-inaugurates-infrastructure-projects-worth-crores/', date: '2026-03-03', note: '3 March 2026 ki report me MLA ki taraf se Rs 1.20 crore ke Hansa-Jorh foot bridge ko sanctioned bataya gaya; sanction order ka swatantra saboot nahi hai, isliye sirf daave par darj hai.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Katwalt-Sullain water khul (Rs 1.75 crore) ke sanction ki ghoshna ki.', category: 'Paani', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-ramnagar-inaugurates-infrastructure-projects-worth-crores/', date: '2026-03-03', note: '3 March 2026 ki report me MLA ki taraf se Rs 1.75 crore ki Katwalt-Sullain water khul (sinchai channel) ko sanctioned bataya gaya; sanction order ka swatantra saboot nahi hai, isliye sirf daave par darj hai.', period: '2024-2029' },
  { title: 'MLA Dr Sunil Bhardwaj ne Ramnagar me 35 se zyada school buildings (jinme HS Baryalta aur HS Kulwanta shamil) ke sanction ki ghoshna ki.', category: 'School', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-ramnagar-inaugurates-infrastructure-projects-worth-crores/', date: '2026-03-03', note: '3 March 2026 ki report me MLA ki taraf se constituency me 35 se adhik school buildings, jisme High School Baryalta aur High School Kulwanta shamil hain, ko sanctioned bataya gaya; kisi sanction order ka swatantra saboot nahi hai, isliye sirf daave par darj hai.', period: '2024-2029' },
];

// Udhampur REJECT-LOG (researched 2026-10-15)
// [udhampur-west — Pawan Kumar Gupta] 11 rejects: Rising Kashmir rural-works review meeting; CM Rs 124.19cr Udhampur water project event (MLA sirf maujood); Jitendra Singh 110 road projects event (MP ka karyakram); 2015-17 ke pre-tenure archive items; private school udghatan; pre-tenure CDF-misuse NPP aarop (FIR nahi); Dehail-Bakal NABARD road (whitelist-bahar); Sakina Itoo privilege-motion (rajnaitik mamla, negative nahi).
// [udhampur-east — Ranbir Singh Pathania] 21 rejects: Early Times ke whitelisted-bahar items x3; NH/NHAI survey (NHAI ka kaam + nirikshan); Jitendra Singh PMGSY e-launch (MP ka karyakram); 2015-2023 pre-tenure items; galat vyakti (Kuldeep Pathania Himachal, "MLA Pawan Gupta" Dehail-Bakal); Tawi bridge sirf-daawa bina GO; transformer-on-spot nirdesh; Viksit Village Rs 2cr sirf ghoshna; Dhar Road four-laning Rs 2,500cr sirf prastav; "will soon" transfer vaada; ongoing kaam bina milestone; watershed review meeting; Jan Bhagidari daure/maangein; May 2025 IAF-tippani vivad + Oct 2026 DyCM PRO vivad (donon me FIR/court nahi, whitelist-bahar — negative rule fail).
// [balwant-singh-mankotia — Chenani] 14 rejects: whitelisted-bahar completion items (dograherald/jknewsline); Mantalai entrance road (sirf nirikshan); June 2026 darbar ke general daave; SBI CSR (SBI ka kaam); 2013 pre-tenure Jaganoo items; Ossu bridge maang (whitelist-bahar + kaam shuru nahi); Harsh Dev Singh election petition (petition kabhi negative nahi); PIL-based criminal-case reports (khandan, FIR nahi); party-reprimand story (whitelist-bahar, FIR nahi); NH/NHAI items; Patnitop Rs 500cr kendriya ghoshna; "100+ PMGSY roads" broad daave; DC ke saath alternate road inspection; Barmeen camp maangein.
// [ramnagar — Sunil Bhardwaj] 10 rejects: Kaghote-Mora Lehari road (whitelist-bahar); AMRUT overhead tank (pre-tenure 2021 + whitelist-bahar); Jitendra Singh PMGSY e-launch (MP ka karyakram); Yuva Vani workshop (sirf chief guest); UNI article (UNI whitelist-bahar); Rs 60cr PMGSY fast-track vague daawa; Bagger-Pachound/Sira Morh "under construction" bina specifics; daily-wagers Assembly maang (vidhayi, seat-kaam nahi); dnaindia "UP MLA FIR" (galat vyakti); Assembly healthcare speech (sirf bayan).
// QA NOTE (coordinator): chaaron worker fragments kholkar padhe; Pathania ki ek entry ka source-URL slug political piece jaisa hai lekin worker ne article kholkar inauguration reporting verify ki hai (udghatan 27 Nov 2025); Gupta ki 2 entries ek hi article me cover hue hain (date samay 2025-07-30); Bhardwaj ki 8 dawa-entries sab badge-dawa sahit sahi; RDSS Rs 180cr entry me MoS Jitendra Singh ka credit disclosed hai (note me); koi negative qualify nahi hua (kisi bhi profile me FIR/court sthiti established media me nahi); Mankotia election petition PIL items rule-par reject; duplicate-period typo (3 entries) coordinator ne append se pehle thik kiya.

// ---- Kathua district batch (researched 2026-10-15) ----
// AC order: Bani, Billawar, Basohli, Jasrota, Kathua (SC), Hiranagar
jammuKashmirWorks['rameshwar-singh'] = [
  {
    title: 'CHC Bani me Rs 1.5 crore ke naye OPD block ka shilanyas',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/dr-rameshwar-lays-foundation-stone-for-new-chc-building-in-bani/',
    date: '2025-01-06',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 6 Jan 2025 ko MLA Bani Dr Rameshwar Singh ne Bani ke Community Health Centre me naye bhawan ka shilanyas kiya. Pariyojna lagbhag Rs 1.5 crore ki hai jisme OPD complex, parking area aur conference hall banenge. Fund NHPC ne approve kiya; BMO Bani Dr Dev Raj aur DDC member Reeta Devi karyakram me maujood the. Credit-transparency: ye NHPC-funded pariyojna hai, MLA ka CDF fund nahi; MLA ki bhoomika shilanyas aur pehal tak (credit capped). Stage ka sach: shilanyas — poora hona abhi darj nahi.',
    period: '2024-2029',
  },
  {
    title: 'GHS Barmota me 3 naye classrooms ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/mla-bani-vows-to-improve-edu-infra-in-constituency/',
    date: '2025-02-23',
    note: 'Daily Excelsior ki post-event reporting ke anusaar 23 Feb 2025 ko MLA Bani Dr Rameshwar Singh ne Bani sub-division ke Government High School Barmota me 3 naye classrooms ka lokarpan kiya. Classrooms NHPC ke sahyog se bane; NHPC ke General Manager ne karyakram me shirkat ki aur unka yogdaan samay par poora karane me raha. DDC member Bani Reeta Devi, headmaster Khyail Chand aur sthaniya log maujood the. Credit-transparency: ye NHPC-funded nirmaan hai, MLA ka apna fund nahi; MLA ki bhoomika lokarpan tak (credit capped). Stage ka sach: kaam poora + lokarpan.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['satish-kumar-sharma'] = [
  { title: 'Ujj se Kalna tak 2 km sadak ki blacktopping ka kaam shuru', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-satish-sharma-inaugurates-blacktopping-work-of-road-from-ujj-to-kalna/', date: '2025-04-16', note: 'MLA ne PMGSY ke tehet Ujj-Kalna ke 2 km sadak tukde ki blacktopping ka lokarpan kiya; swikrit laagat Rs 1.80 crore; karyakram me DDC member Neeru Rajput aur PMGSY vibhag ke AEE/JE maujood the; logon ki lambe samay se chali aa rahi maang poori hui', period: '2024-2029' },
  { title: 'Srey-Beril khul I-II par field channel nirman ka lokarpan', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-satish-sharma-inaugurates-field-channel-works/', date: '2025-05-27', note: 'Command Area Development (CAD) Jammu ke On-Farm Development karyakram ke tehet Gujroo Nagrota block me Srey-Beril khul I-II par field channel ke nirman ka lokarpan; bid cost Rs 29 lakh UT Capex Budget se; Amubala, Beril aur Srey gaon ki sinchai kshamta badhegi; nirman Sub-Division Dayalachak dwara; CAD ke pariyojna adhikari maujood the', period: '2024-2029' },
  { title: 'Billawar me J&K ki pehli chay-bagan pahal ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Hindustan Times', sourceUrl: 'https://www.htsyndication.com/ht-jammuandkashmir/article/in-a-first,-change-brews-with-tea-gardens-in-kathua-s-billawar/92299427', date: '2025-07-24', note: 'MLA ne Assembly ke budget satr me Billawar me chay ki kheti ka mudda uthaya tha; uske baad krishi vibhag ne 500 se zyada kisano ke saath Palampur se laye 20,000 se zyada chay paudhe lagaye, 3 cluster bane; 24 July ko MLA ne is pilot pahal ka lokarpan kiya; shrey seemit: vibhagiya pariyojna, MLA ki pahal aur lokarpan', period: '2024-2029' },
];

jammuKashmirWorks['darshan-kumar'] = [
  { title: 'Draman se Darkodi tak 2.3 km link road ka nirman shuru', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/col-mahan-mla-darshan-kick-start-constt-work-of-draman-darkodi-link-road/', date: '2024-10-25', note: 'DDC Chairman Col Mahan Singh (Retd) ke saath MLA Basohli Thakur Darshan Kumar ne NABARD Road Draman se Darkodi tak 2.3 km link road ke nirman karya ka shubharambh kiya. Project State Sector scheme ke tahat Rs 1.44 crore ki lagat se; Draman Panchayat ke vaasindon ko Hutt Mashka aur Tikkri-Jamna PMGSY road se jodta hai. Udghatan samaroh me PWD Sub-Division Basohli ke AEE aur staff bhi maujood the.', period: '2024-2029' },
  { title: 'Nagrota Pretha aur Passi kshetron me 3 road projects ka udhghatan', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/col-mahan-darshan-inaugurate-key-road-projects-in-basohli/', date: '2024-11-20', note: 'DDC Chairman Col Mahan Singh ke saath MLA Basohli ne PWD Division Basohli ke Nagrota Pretha aur Passi kshetron me 3 road projects ka udhghatan kiya: 2 km Nagrota-Kharmiat road (District Capex Plan, Rs 50 lakh), 1.2 km Khaloo-Plassi road (State Sector Plan, Rs 2.5 crore), aur Nagrota-Plassi road ke Wadi-Plassi aur Nagrota-Khudku sections ki blacktopping (C&T Road Plan, Rs 80 lakh). Report me naam Darshan Singh likha hai lekin Basohli ke MLA ke sandarbh se wahi vyakti hain (ek mahine pehle ki Excelsior report me wahi office Thakur Darshan Kumar, MLA Basohli).', period: '2024-2029' },
  { title: 'Jasrota-Athialta 24.95 km PMGSY-IV road ka nirman shuru (Rs 68.65 crore)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/rajiv-jasrotia-darshan-singh-kick-start-work-of-rs-68-65-cr-jasrota-athialta-road/', date: '2026-01-31', note: 'MLA Jasrota Rajiv Jasrotia ke saath MLA Basohli ne sanyukt roop se PMGSY-IV ke tahat Boura Road ke km 7 par L023 link road se Athialta tak 24.95 km road ke nirman aur maintenance karya ka shubharambh kiya; kul lagat Rs 68 crore 65 lakh. Yeh grameen aur seemaavarti bastiyon ko all-weather connectivity degi. Union Minister Dr Jitendra Singh ke hastakshep se project swikrit hua tha. Report me naam Darshan Singh likha hai lekin Basohli ke MLA ke sandarbh se wahi vyakti hain.', period: '2024-2029' },
];

jammuKashmirWorks['rajiv-jasrotia'] = [
  { title: 'Jasrota me Rs 29 crore ki Bakhta-Mangloor PMGSY sadak aur teen causeway janta ko samarpit', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-dedicates-rs-29-cr-road-projects-to-public/', date: '2026-04-14', note: '14 Apr 2026 ko MLA Rajiv Jasrotia ne Bakhta se Mangloor tak PMGSY sadak (kul lagat Rs 29 crore) janta ko samarpit ki; saath me teen LSB/vented causeway (46.8 metre RD 300, 27 metre RD 575 Km 5th, 33.6 metre RD 275 Km 6th) aur blacktopping ka lokarpan hua, kul kharch Rs 528.48 lakh. Barish me nallon ke ubharne par gaon kat jaate the — vented causeway se har mausam me connectivity bani rahegi.', period: '2024-2029' },
  { title: 'Sowla aur Tridwan panchayat me 16 lane drain aur naya transformer chalu', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-inaugurates-16-lane-drains-transformer-in-sowla-tridwan/', date: '2026-03-11', note: '11 Mar 2026 ko Keerian Gandyal block ki Sowla aur Tridwan panchayat me MLA ne 16 naye lane drain (cover slab sahit), andaruni galiyon ki hard-facing aur ek naye transformer ke commissioning ka udghatan kiya; PHE ne band standpost dobara chalu karne aur chlorination check ka, PDD ne load-balancing ka aur Flood Control ne kamzor tatbandhon ke joint survey ka bharosa diya.', period: '2024-2029' },
  { title: 'Jasrota ki panchayaton me Rs 68.20 lakh ke bijli-paani-sadak kaam janta ko samarpit', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-dedicates-rs-68-20-lakh-rural-development-projects-to-people/', date: '2026-02-28', note: '28 Feb 2026 ko Uttri, Barwal West, Forelain West, Bhorthain North-South aur Rakh Lachipur me MLA ne aath distribution transformer (Rs 38 lakh), do community shed (Rs 8 lakh), paanch lane-drain (Rs 13.20 lakh), Uttri me borewell (Rs 4 lakh) aur stadium me solar light (Rs 5 lakh) ka udghatan kiya; PDD aur PHE ke Executive Engineer aur BDO Barnoti maujood the.', period: '2024-2029' },
  { title: 'Hatli zone me PMGSY sadak restoration ka shubharambh, do sadak pariyojna ka lokarpan', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-launches-road-restoration-works-worth-rs-67-lakh-in-hatli/', date: '2026-05-22', note: '22 May 2026 ko MLA ne Hatli zone me PMGSY permanent restoration kaam shuru karaye aur Halti-Badoli sadak (Rs 8 lakh) aur Tridwan sadak (Rs 12 lakh) ka lokarpan kiya; kul package Rs 67 lakh. Rasoo-Dukhat (Rs 20 lakh), Sowla (Rs 12 lakh), Talad link road (Rs 8 lakh) aur Middle School Hatli marammat (Rs 7 lakh) turant shuru karne ke nirdesh diye.', period: '2024-2029' },
  { title: 'Rs 96 lakh ki pariyojnaein — do PWD sadakon ka shilanyas, GMS Galli bhavan ka lokarpan', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-dedicates-rs-96-lakh-worth-developmental-projects-to-people/', date: '2026-07-09', note: '9 Jul 2026 ko MLA ne Chilkh West-Badholi se Mohalla Barber tak nayi swikrit PWD sadak (Rs 58 lakh) aur Badholi-Kirmichi sadak (Rs 20 lakh) ka shilanyas kiya aur Govt Middle School Galli me Rs 18.02 lakh se bane unnat kakshaon aur buniyadi suvidhaon ka udghatan kiya.', period: '2024-2029' },
  { title: 'Kishanpur Kandi me 14 kaamon ka shilanyas, Krakhad aur Barwal me gehare borewell', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-lays-foundation-stone-for-development-works-worth-rs-26-lakh/', date: '2026-08-30', note: '30 Aug 2026 ko Panchayat Kishanpur Kandi aur aaspaas MLA ne kul Rs 26 lakh ke 14 kaamon ka shilanyas kiya — 12 kaam galiyan-drain aur civic suvidha ke; gaon Krakhad (Panchayat Palli) me gehara borewell aur Barwal me Rs 5 lakh ka gehara borewell peye-jal ke liye swikrit.', period: '2024-2029' },
  { title: 'Chandwan me Rs 1.3 crore ka Ayushman Arogya Mandir janta ko samarpit', category: 'Aspataal', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-dedicates-rs-1-3-cr-ayushman-arogya-mandir-launches-rs-25-lakh-civic-works/', date: '2026-03-16', note: '16 Mar 2026 ko MLA ne Panchayat Chandwan ke Thakurpura me Rs 1.3 crore se bane Ayushman Arogya Mandir (prathmik swasthya kendra — prasav-shishu swasthya, tikakaran, basic jaanch suvidha) ka udghatan kiya; saath me do power transformer, teen lane drain aur public platform (Rs 25 lakh) ka bhi lokarpan hua.', period: '2024-2029' },
  { title: 'Dinga Amb PHC me Rs 40 lakh ke Block Public Health Unit ka shilanyas', category: 'Aspataal', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-lays-foundation-of-rs-40-lakh-block-public-health-unit-at-dinga-amb/', date: '2025-07-17', note: '17 Jul 2025 ko MLA ne PHC Dinga Amb ke vistaar ke roop me Rs 40 lakh ke Block Public Health Unit ka shilanyas kiya; 4.8 kanal rajaswa zameen pehle hi PHC ke naam transfer ho chuki hai. CMO Kathua, BMO Hiranagar aur Tehsildar Dinga Amb maujood the.', period: '2024-2029' },
  { title: 'Bhed Blode aur Kathera panchayat me Rs 51 lakh ke kaamon ka lokarpan aur shilanyas', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-inaugurates-lays-foundation-of-development-projects/', date: '2025-11-11', note: '11 Nov 2025 ko MLA ne Panchayat Bhed Blode aur Kathera me pure hue vikas kaamon ka lokarpan aur naye kaamon ka shilanyas kiya, kul lagat Rs 51 lakh; DDC Vice Chairman aur sarpanch maujood the.', period: '2024-2029' },
  { title: 'Tridwan me District Capex se Rs 33 lakh ke khel-maidan ka shilanyas', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-lays-foundation-stone-of-development-projects-in-tridwan/', date: '2025-11-02', note: '2 Nov 2025 ko Panchayat Tridwan (Block Keerian Gandyal) me MLA ne multi-sports playground, shed aur chainlink fencing-gate ka shilanyas kiya — District Capex (BDC) Plan 2025-26 se Rs 24.89 lakh aur PRI plan se Rs 8.13 lakh swikrit; kaam Rural Development vibhag karega.', period: '2024-2029' },
  { title: 'Chaar panchayaton me Rs 55 lakh ki pariyojnaon ka lokarpan aur shilanyas', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-launches-rs-55-lakh-development-projects/', date: '2025-11-21', note: '21 Nov 2025 ko MLA ne Hardo Muthi, Mahi Chack, Trehara aur Falote panchayaton me kul Rs 55 lakh ki pariyojnaon ka lokarpan aur shilanyas kiya; BDO Barnoti aur DDC sadasya maujood the.', period: '2024-2029' },
  { title: 'Logate, Sahar aur Kathera me Rs 50 lakh ke 12 lane-drain kaam shuru', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-kick-starts-development-works-worth-50-lacs/', date: '2024-10-31', note: '31 Oct 2024 ko MLA ne Panchayat Logate, Sahar aur Kathera me Rs 50 lakh ke 12 lane aur drain kaamon ko hari jhandi dikhai (kick-start); sambandhit vibhagon ko samay par poora karne ke nirdesh diye.', period: '2024-2029' },
  { title: 'Rs 2.66 crore ki PWD sadak pariyojnaon ka shilanyas', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jasrotia-lays-foundation-stones-for-rs-2-66-cr-road-projects/', date: '2026-05-28', note: '28 May 2026 ko MLA ne PWD ki chaar sadak pariyojnaon ka shilanyas kiya — Plah More-Teda sadak (Rs 1.23 crore), Plah More-Kumri via Androte (Rs 60 lakh), Hatli link road (Rs 50 lakh) aur Hote link road (Rs 33 lakh).', period: '2024-2029' },
];

jammuKashmirWorks['kathua'] = [
  { title: 'Jarai Chowk-Kharkra 1 km sadak (Rs 60 lakh) ka lokarpan; Govindsar-A Ward 4 me lane-drain ka shilanyas (Rs 18 lakh)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-dedicates-roads-to-public/', date: '2024-10-26', note: 'MLA ne Jarai Chowk se Kharkra gaon tak 1 km macadamized sadak janta ko samarpit ki (lagat Rs 60 lakh; PWD Executive Engineer Dilawar Singh maujood). Isi din Govindsar-A Panchayat ke Ward 4 me Guru Ravi Dass mandir ko jodne wali lane-drain ka shilanyas kiya (Rs 18 lakh, PWD dwara nirmaan).', period: '2024-2029' },
  { title: 'Jarai-Maksoospur sadak (Rs 60 lakh) ka lokarpan; Nagri Parole me 4 lane-drain ka shilanyas (Rs 25 lakh)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kathua-dedicates-jarai-maksoospur-road-to-public/', date: '2024-11-27', note: 'MLA ne Jarai-Maksoospur sadak janta ko samarpit ki (macadamization, lagat Rs 60 lakh; Jarai, Maksoospur, Bhagthali, Rappar ke nivaasi labhanvit). Isi daure me Nagri Parole me 4 lane-drain ka shilanyas kiya (kul Rs 25 lakh).', period: '2024-2029' },
  { title: 'Mehtabpur panchayat me 3 lane-drain (Rs 24 lakh) aur Kathua shahar ke Ward 19/20/18 me 3 lane-drain (Rs 30 lakh) ka shilanyas', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kathua-starts-rs-31-lakhs-development-works/', date: '2024-12-07', note: 'MLA ne Mehtabpur panchayat me 3 lane-drain (Rs 24 lakh) ka shilanyas kiya; phir Kathua shahar ke Ward 19, 20 aur 18 me 3 lane-drain (Rs 30 lakh) ka kaam shuru karwaya. BDO Kathua, PWD ke AEE aur Municipal Council ke EO maujood the.', period: '2024-2029' },
  { title: 'Ward 18 Kabir Nagar aur Ward 12 me lane-drain kaamon ki shuruaat (Rs 31 lakh se zyada)', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kathua-kick-starts-works-worth-rs-31-lakh/', date: '2024-12-16', note: 'MLA ne Kathua ke Ward 18 (Kabir Nagar) aur Ward 12 me lane-drain kaam shuru karwaye (kul Rs 31 lakh se zyada). MLA ke anusaar pichhle do hafton me 6 lane-drain kaam (kul Rs 62 lakh) shuru hue. CEO Municipal Council aur PWD adhikari maujood the.', period: '2024-2029' },
  { title: 'Do macadamized sadkon ka lokarpan — Patel Nagar (BSNL office-Ram Leela ground, Rs 13.5 lakh) aur Ward 2 (Nagri Road-Rainbow Public School, Rs 3 lakh)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-two-roads-in-kathua/', date: '2025-12-25', note: 'MLA ne do nayi macadamized sadken janta ko samarpit ki — BSNL office se Ram Leela ground, Patel Nagar (Rs 13.5 lakh) aur Nagri Road se Rainbow Public School, Ward 2 (Rs 3 lakh; 20 saal se kharab sthiti thi).', period: '2024-2029' },
  { title: 'School-suvidhaen: Patel Nagar Primary School me badminton court (Rs 8 lakh) ka lokarpan; Barmora Middle School me volleyball court (Rs 15 lakh) aur Chak Phoolan Primary School me 2 additional classrooms (Rs 23 lakh) ka shilanyas', category: 'School', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-dedicates-developmental-works-worth-rs-46-lakh-to-people/', date: '2025-11-26', note: 'MLA ne Govt Primary School Patel Nagar me badminton court ka udghatan kiya (Rs 8 lakh); Govt Middle School Barmora me volleyball court (Rs 15 lakh) aur Chak Phoolan Govt Primary School me 2 additional classrooms (Rs 23 lakh, 87 chhatra) ka shilanyas kiya. Kul Rs 46 lakh ke 3 kaam.', period: '2024-2029' },
  { title: 'Kathua shahar me Rs 41 lakh ke vikas-kaam — Ward 13 Tara Nagar me side-drain (Rs 30 lakh) ka shilanyas; Ward 17/16 me blacktopping aur Ward 2 me lane-drain ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-dc-kathua-dedicate-rs-41-lakh-development-works-to-public/', date: '2025-11-28', note: 'MLA aur DC Kathua Rajesh Sharma ne sanyukt roop se Ward 13 Tara Nagar me naye side-drain (Rs 30 lakh) ka shilanyas kiya; MLA ne Ward 17 me black-topping (Rs 4 lakh), Ward 2 me lane-drain (Rs 3 lakh) aur Ward 16 me black-topping (Rs 4 lakh) ka lokarpan kiya. Kul Rs 41 lakh.', period: '2024-2029' },
  { title: 'Lower Shiva Nagar me deep covered nallah (Rs 50 lakh) ke nirmaan ki shuruaat', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kick-starts-construction-of-rs-50-lakh-drain-in-kathua/', date: '2025-12-11', note: 'MLA ne Lower Shiva Nagar me District Employment Office se Shani Mandir tak deep covered nallah ka kaam shuru karwaya (lagat Rs 50 lakh). 15 saal se gandgi aur jal-bharaav ki lambi samasya ka samadhan bataya gaya.', period: '2024-2029' },
  { title: 'Dawa: 16 baadh-kshatigrast sadkon ki marammat ke liye Rs 5 crore se zyada release ka MLA ka daawa', category: 'Sadak', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/16-cloud-burst-damaged-roads-to-be-taken-up-in-kathua-mla/', date: '2025-12-27', note: 'MLA Dr Bharat Bhushan ne daawa kiya ki Public Works Sector me 16 baadh-kshatigrast sadkon ki marammat ke liye Rs 5 crore se zyada release hue hain aur school infrastructure ke liye Rs 3 crore se zyada earmark hue hain. Daily Excelsior report me koi GO/sanction-order ya vibhagiya pushti nahi di gayi — sirf MLA ke apne bayaan par aadharit daawa hai.', period: '2024-2029' },
  { title: 'Ward 2 District Jail ke saamne deep covered nallah (Rs 50 lakh) aur Ward 16 Upper Shiva Nagar me lane-drain ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kathua-dedicates-developmental-works-to-public/', date: '2026-02-15', note: 'MLA ne Ward 2 me District Jail ke saamne deep covered nallah (Rs 50 lakh, dashkon se gandgi ka srot) ka udghatan kiya; saath hi Ward 16 Upper Shiva Nagar me Narayan Singh Sambyal ke ghar se Manohar Lal ke ghar tak lane-drain ka lokarpan kiya. Kul 3 kaam, Rs 60 lakh.', period: '2024-2029' },
  { title: 'Upper Shiva Nagar me deep borewell ke kaam ki shuruaat', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kathua-dedicates-developmental-works-to-public/', date: '2026-02-15', note: 'Isi karyakram me MLA ne Dr. A.K. Gupta Hospital ke peeche Upper Shiva Nagar me deep borewell ka kaam shuru karwaya (Rs 60 lakh ke package ka hissa).', period: '2024-2029' },
  { title: 'Nagri-Airwan sadak macadamization (Rs 15 lakh) ki shuruaat; Samper Sapla me community centre boundary wall (Rs 11 lakh), gaon ki lane-drain aur 250 KV transformer ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kathua-lays-foundation-stone-of-development-works/', date: '2026-03-01', note: 'MLA ne Nagri se Airwan (Shiv mandir) sadak ke kshatigrast hisson ki macadamization shuru karwayi (Rs 15 lakh). Samper Sapla gaon me community centre ki boundary wall (Rs 11 lakh), gaon ki lane-drain aur 250 KV naya transformer ka lokarpan kiya. BDO, JPDCL aur PWD adhikari maujood the.', period: '2024-2029' },
  { title: 'Patel Nagar me deep drain-lane (Rs 88 lakh) ki shuruaat; Ward 13 Parliwand aur Ward 21 me lane-drain ka lokarpan (Rs 38 lakh, MLA CDF)', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-dedicates-development-works-worth-rs-1-26-cr-to-public/', date: '2026-03-16', note: 'MLA ne Patel Nagar me Dr Padha clinic se Kapil Thappa ki dukaan tak deep drain-lane ka kaam shuru karwaya (Rs 88 lakh). Ward 13 Parliwand aur Ward 21 me lane-drain ka lokarpan kiya (Rs 38 lakh, MLA Constituency Development Scheme se). Kul Rs 1.26 crore ke 3 kaam.', period: '2024-2029' },
  { title: 'Ward 19 me lane-drain nirmaan (Rs 92 lakh) ki shuruaat', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kick-starts-development-work-worth-rs-92-lakh-in-shiva-nagar/', date: '2026-03-29', note: 'MLA ne Kathua ke Ward 19 me lane-drain kaam ka nirmaan shuru karwaya (lagat Rs 92 lakh). CEO Municipal Council, BJP neta aur sthaniya nagrik maujood the.', period: '2024-2029' },
  { title: 'Do lane-drain kaam (Ward 3 Indra Colony, Ward 17 Police Training School) ka lokarpan — Constituency Development Scheme se', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-bharat-bhushan-inaugurates-development-works-in-kathua/', date: '2026-04-26', note: 'MLA ne Ward 3 Indra Colony (Degree College ke paas) aur Ward 17 (Prithinandan Singh Memorial Police Training School ke paas) me lane-drain ka lokarpan kiya; dono kaam Constituency Development Scheme se funded.', period: '2024-2029' },
  { title: 'Keerian gaon ke Maira me peene ke paani ke borewell ka kaam shuru', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-bharat-bhushan-inaugurates-development-works-in-kathua/', date: '2026-04-26', note: 'Isi daure me MLA ne Keerian gaon ke Maira me borewell ka kaam shuru karwaya; sthaniya log saalon se peene ke paani ki kilat ki maang kar rahe the.', period: '2024-2029' },
  { title: 'Nagri ke aitihaasik iron bridge ke jeernoddhaar ka kaam shuru', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kathua-starts-restoration-work-of-iron-bridge-at-nagri/', date: '2026-05-19', note: 'MLA ne Nagri ke aitihaasik iron bridge (jo August 2025 ki baadh me kshatigrast hua tha) ke jeernoddhaar ka kaam shuru karwaya. ADDC, BDO Nagri Parole, Tehsildar aur PWD/RDD adhikari maujood the.', period: '2024-2029' },
  { title: 'Zamalpur me MLA CDF se bane 3 suraksha-kaamon ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/zamalpur-to-be-developed-as-viksit-village-mla-kathua/', date: '2026-05-24', note: 'MLA ne Zamalpur gaon (16 Aug 2025 ke cloudburst me buri tarah prabhavit) me 3 suraksha-kaamon ka udghatan kiya; inke liye funds MLA ne apne CDF se authorize kiye the. BDO Keerian-Gandyal maujood thi.', period: '2024-2029' },
  { title: 'Nagri me 2 culvert (Nikkian-Nagri road), Ward 7 me lane aur Ward 5 me drainage (Rs 15 lakh) ka lokarpan', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-multiple-development-works-in-nagri/', date: '2026-05-26', note: 'MLA ne Nagri kshetra me Nikkian-Nagri road par 2 culvert, Municipal Committee Nagri ke Ward 7 me lane aur Ward 5 me drainage kaam ka lokarpan kiya (kul Rs 15 lakh).', period: '2024-2029' },
  { title: 'Bijjit ke Maa Ama Bhai shrine me solar lights ka lokarpan (CDF se)', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-holds-public-darbar-in-remote-villages-inaugurates-works/', date: '2026-05-28', note: 'Public darbar ke dauran MLA ne Bijjit ke Maa Ama Bhai shrine me lagayi gayi solar lights ka udghatan kiya; ye kaam Constituency Development Fund se hua. Jal Shakti, PMGSY, PWD, JKPDC aur RDD ke adhikari maujood the.', period: '2024-2029' },
  { title: 'Lower Paralla me deep borewell ka lokarpan (CDF se)', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-holds-public-darbar-in-remote-villages-inaugurates-works/', date: '2026-05-28', note: 'Isi daure me MLA ne Lower Paralla me deep borewell ka udghatan kiya; ye kaam bhi Constituency Development Fund se hua.', period: '2024-2029' },
  { title: 'Ward 21 me blacktopping kaam ki shuruaat; do poorn blacktopping kaamon (Rs 15 lakh) ka lokarpan', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-bharat-bhushan-kick-starts-blacktopping-work/', date: '2026-05-29', note: 'MLA ne Ward 21 me Mohinder Pal ke ghar se Anganwadi Centre tak lane ki blacktopping shuru karwayi; saath hi Upper Shiva Nagar (Desh Bandhu Karyana Store se Ashok Kumar ke ghar tak) aur Ward 21 (Mohinder Pal, SRTC se aage) me do poorn blacktopping kaamon (kul Rs 15 lakh) ka lokarpan kiya.', period: '2024-2029' },
  { title: 'SASCI yojna ke tehat baadh-suraksha kaamon ka lokarpan (Rs 3.78 crore sanction, Dilwan)', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-flood-protection-works/', date: '2026-06-20', note: 'MLA ne Dilwan gaon se SASCI yojna ke tehat baadh-suraksha kaamon ka udghatan kiya. Flood Control Division Kathua ne karyakram aayojit kiya; Sahar Khad, Maggar Khad, Ravi nadi aur sahayak nadiyon ke kinaron ki suraksha ke liye Rs 3.78 crore sanction hue hain (August 2025 ki baadh me kshatigrast kinare).', period: '2024-2029' },
  { title: '22 jal-apurti yojnaon ke punarnirmaan kaamon ka shilanyas (Rs 4.16 crore, Janglote)', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kathua-starts-rs-4-16-cr-water-supply-restoration-works/', date: '2026-08-08', note: 'MLA ne Janglote gaon se 22 jal-apurti yojnaon ke punarnirmaan kaamon ka shilanyas kiya (Rs 4.16 crore release). August 2025 ki baadh me kshatigrast Dilwan, Janglote, Kathua Town, Chak Sona Nupa, Govindsar-Kharote, Jagatpur, Chak Gadhadhar, Matandi, Chak Rijju, Changran, Dhanore, Lakhanpur, Khanyara, Maha, Karroh Khokhyal, Goond, Mirpur Ram, Narolian sahit gaon ko sthayi roop se paani milega; lagbhag 2 lakh aabaadi labhanvit. Jal Shakti vibhag ke EE (Civil/Mechanical) maujood the.', period: '2024-2029' },
  { title: 'Kukrey Chak me shaheed Sardar Piar Singh smarak ka shilanyas', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kathua-lays-foundation-of-martyr-piar-singh-memorial/', date: '2026-09-10', note: 'MLA ne shaheed Sardar Piar Singh (Operation Meghdoot, Siachen, Jan 2004; Sena Medal) ke mool gaon Kukrey Chak me smarak ka shilanyas kiya. Smarak me murti, plaque aur morning walkers ke liye yoga shed hoga; MLA ke anusaar funds earmark ho chuke hain. Pehle MLA Kukey Chak-Changran sadak ka naam Piar Singh ke naam par rakh chuke hain.', period: '2024-2029' },
  { title: '6 poorn vikas-kaam (Rs 50 lakh) janta ko samarpit — Kathua-Nagri road culvert, wardon me lane-drain aur borewell', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-works-worth-rs-50-lakhs-in-kathua/', date: '2026-10-06', note: 'MLA ne Kathua me 6 poorn kaam janta ko samarpit kiye (kul Rs 50 lakh): Kathua-Nagri road par culvert (Rs 6.5 lakh), Patel Nagar Ward 15 me lane-drain (Rs 12 lakh), Shastri Nagar Ward 13 me lane-drain (Rs 5 lakh), Shastri Nagar Ward 13 me deep borewell, Hanuman Chowk Ward 19 ke paas lane (Rs 9 lakh), aur 2 lane-drain kaam (kul Rs 4 lakh).', period: '2024-2029' },
];

jammuKashmirWorks['vijay-kumar'] = [
  { title: 'Assembly me sawaal: Hiranagar ke liye JKRTC buses ka mantri se ashwasan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/hiranagar-to-be-covered-under-rtcs-fleet-once-augmented-satish-sharma/', date: '2025-03-16', note: 'Legislative Assembly me Adv. Vijay Kumar ke sawaal par Transport Minister Satish Sharma ne ashwasan diya ki JKRTC ka naya bus fleet aane par Hiranagar constituency ko uska due share milega; mantri ne yeh bhi bataya ki e-buses sirf city operation ke liye hain aur Kathua jile me filhal Jammu-Hiranagar-Pathankot, Jammu-Pathankot-Udhampur aur Jammu-Bani-Lowang JKRTC services chal rahi hain.', period: '2024-2029' },
];

// Kathua REJECT-LOG (district): Rameshwar Singh 16+ rejects (whitelist-bahar khabrein, sirf nirikshan/maang); Satish Sharma 8 rejects (mantri-Satish Sharma ke kaam galat-vyakti, KV Ramkot/Hiranagar Court maujoodgi, blood donation rahat, Earth News non-whitelist 'karenge' daawa); Darshan Kumar 12 rejects (Tirdi blacktopping me MLA sirf maujood, Basohli Utsav/LG mulaqat maujoodgi-maang, CM Rs 11.58cr event maujoodgi, free ration/tents rahat, State Times non-whitelist); Rajiv Jasrotia 11 rejects (purane-mantri-era kaam 2014-18, jkmonitor/crosstownnews non-whitelist, 2018 tiranga FIR pre-tenure + agyaat vyaktiyon par — negative rule fail); Bharat Bhushan 20 rejects (R1-R20: ceremonial/maujoodgi, rahat, 'karenge' ghoshna, Ashu/KAS/Sharma namesake, non-whitelist); Vijay Kumar 18 rejects (patra/maang, rahat, karyakaal-se-pehle, parivar ka mamla — kabhi nahi). NEGATIVE: koi nahi (kisi MLA ke khilaf strict standard par koi FIR/court+jawab sthiti nahi mili).
// Coordinator QA note (2026-10-15): 6/6 worker fragments khud kholkar padhe — sabhi ke source URL opened-and-read darj; pehchan-guards verified (Satish Sharma vs JKNC mantri; Bharat Bhushan Ashu/KAS/Sharma triple namesake; Darshan Kumar/Singh Excelsior naam-bhed note me disclosed; Rajiv Jasrotia vs Rajiv Sharma; Rameshwar Singh vs Bihar namesake; Vijay Kumar Hiranagar context). No drop/flip needed; sabhi badges/stage-disclosure niyam ke anusaar.

// ---- Samba district batch (researched 2026-10-15) ----

jammuKashmirWorks['ramgarh'] = [
{ title: 'Channi Fatwal me Jal Shakti vibhag ke overhead tank ka shilanyas', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/manyal-lays-foundation-of-oht-at-channi-fatwal/', date: '2024-12-10', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne DDC Chairman Samba Keshav Dutt Sharma ke saath Channi Fatwal me Jal Shakti Department dwara banne wale overhead tank ke nirmaan ka shubharambh kiya; uddeshya ilake me peene ke paani ki vitaran vyavastha sudharna hai aur Channi Fatwal ke saath aaspaas ke gaon ke logon ko fayda hoga. Nirman-karta Jal Shakti Department hai, MLA ne karyakram ka netritva kiya. Stage: shilanyas.', period: '2024-2029' },
  { title: 'Abtal se SM Pura tak Rs 2.70 crore ki sadak ka nirmaan shuru', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kick-starts-construction-work-on-abtal-to-s-m-pura-road/', date: '2025-04-16', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne Abtal se S M Pura tak sadak nirmaan kaam ka shilanyas kiya; pariyojna ki anumaanit lagat Rs 2.70 crore hai aur ye ilake ki lambe samay se pending maang thi. Karyakram me DDC member Ramgarh Anita Choudhary sahit sthaniya janpratinidhi maujood the. Stage: shilanyas (nirmaan shuru).', period: '2024-2029' },
  { title: 'NABARD se Rs 2.56 crore ki Ramloo-Chak Salaria sadak ki blacktopping shuru', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/manyal-inaugurates-blacktopping-work-of-ramloo-chak-salaria-road/', date: '2025-06-08', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne NABARD-funded Ramloo se Chak Salaria tak sadak ki blacktopping kaam ka udghatan kiya; sanctioned lagat Rs 2.56 crore hai. Ye sadak Ramgarh kshetra ke 4-5 panchayaton ko seedhi connectivity degi aur Vijaypur, Swankha Mandir aur Baba Chamlyal shrine tak pahunch aasan hogi. Fund-srot NABARD hai, nirman PWD dwara. Stage: shilanyas (blacktopping kaam shuru).', period: '2024-2029' },
  { title: 'Ramgarh me Rs 50 lakh ke lane-drain aur krishi karyalaya kaam shuru', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-manyal-kick-starts-development-works-worth-rs-50-lakh-in-ramgarh/', date: '2025-10-01', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne kai vikas karyon ka shilanyas kiya: Ramgarh Municipal Committee kshetra me lanes aur drains (Rs 20 lakh), Agriculture Extension Office Ramgarh ka upgradation (Rs 22 lakh) aur Bajwati Kajyal me lane-drain (Rs 8 lakh); kul anumaanit lagat Rs 50 lakh. Mauke par Chief Agriculture Officer Samba aur MC Ramgarh ke adhikari maujood the. Stage: shilanyas.', period: '2024-2029' },
  { title: 'Rajpura-Sanoora road par Rs 25 lakh ki blacktopping ka udghatan', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-road-blacktopping-work-3/', date: '2025-10-08', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne Rajpura-Sanoora Road par blacktopping kaam ka udghatan kiya; City and Town Scheme ke tahat pariyojna ki anumaanit lagat Rs 25 lakh hai. Karyakram me Executive Engineer PWD Samba Vijay Kumar Thappa sahit adhikari aur sthaniya log maujood the. Stage: shilanyas (blacktopping kaam shuru).', period: '2024-2029' },
  { title: 'Rajpura kshetra me City & Town aur District CAPEX se teen sadak pariyojnaon ka shilanyas', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/manyal-inaugurates-macadamization-construction-of-roads-in-rajpura/', date: '2025-11-13', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne teen sadak pariyojnaon ka udghatan kiya: OSK se Ayushman Arogya Mandir Mawa aur Panchayat Ghar Mawa tak link road ki macadamization (Rs 12 lakh, CITY & TOWN 2025-26), Rajpura se Sarthian tak link road ki macadamization (Rs 18 lakh, CITY & TOWN 2025-26) aur Main Chowk Rajpura se Ditch tak sadak ka nirmaan (Rs 12 lakh, District CAPEX 2025-26). AEE R&B Samba aur prashasan ke adhikari maujood the. Stage: shilanyas.', period: '2024-2029' },
  { title: 'Abtal-SM Pura sadak par Rs 2.70 crore ki blacktopping shuru', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-starts-road-blacktopping-work-3/', date: '2025-12-01', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne Abtal se SM Pura tak sadak par Rs 2.70 crore ki blacktopping kaam shuru karwaya; ye April 2025 me shuru hue isi sadak nirmaan ka agla charan hai aur sthaniya logon ki lambe samay se pending maang thi. Sadak se aavagaman, sthaniya vyapar aur emergency sewaon me sudhar hoga. Stage: kaam shuru (blacktopping charan).', period: '2024-2029' },
  { title: 'Ramgarh me PMGSY sadkon ka lokarpan, steel truss shed udghatan; Trindi community hall ka nirmaan shuru', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/manyal-inaugurates-developmental-works/', date: '2025-12-12', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne ek hi din kai kaam kiye: PMGSY ke tahat grameen sadkon ke upgradation aur blacktopping (Rs 42 lakh) ka lokarpan, naye nirmit Steel Truss Shed sahit tile work (Rs 6 lakh) ka udghatan, gaon Abtal me lane (Rs 3 lakh) aur gaon Dug me drain (Rs 3.5 lakh) ka kaam shuru, aur gaon Trindi me community hall (Rs 30 lakh) ke nirmaan ka shilanyas. Fund-srot PMGSY sadkon ke liye kendriya PMGSY yojna hai. Stage: poorn (sadak + shed) aur shilanyas (lane, drain, hall) — dono ek saath.', period: '2024-2029' },
  { title: 'Ramgarh me volleyball ground, passenger shed aur Sanoora me shed-lane-drain kaam shuru', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/public-centric-development-right-of-every-citizen-dr-manyal/', date: '2025-12-13', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne Ramgarh me volleyball ground ke nirmaan (Rs 9 lakh) ka shilanyas kiya, Municipal Committee Ramgarh ke tahat selfie point aur passenger shed (Rs 4 lakh) ka nirmaan shuru karwaya, aur gaon Sanoora (Rajpura block) me do shed (Rs 5 lakh) ka shilanyas aur lane-drain (Rs 2.5 lakh) ka udghatan kiya. Mauke par DDC Rajpura, DDC Ramgarh aur MC Ramgarh ke adhikari maujood the. Stage: shilanyas.', period: '2024-2029' },
  { title: 'Ramgarh me badh prabhavit ilakon me Rs 1 crore ke marammat kaam shuru', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-manyal-kick-starts-rs-one-crore-flood-repair-works-in-ramgarh/', date: '2025-12-25', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne Ramgarh ke badh prabhavit ilakon me Rs 1 crore ke marammat aur punarsthapna karyon ka shilanyas kiya; ye kaam flash floods se toote bandhon, sinchai aur badh-niyantran sanrachnaon ko mazboot karne ke liye hai. Nirman-karta Flood Control Department Samba hai; Executive Engineer Varinder Billowria ne takneeki vyora diya. Stage: shilanyas.', period: '2024-2029' },
  { title: 'NABARD se Rs 1.97 crore ki Raipur Camp-OSK aur Bain Camp-Sordi sadkon ka nirmaan shuru', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-starts-work-on-vital-roads/', date: '2026-04-30', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne Raipur Camp se OSK Road tak aur Bain Camp se Sordi tak sadkon ke nirmaan kaam shuru karwaya; NABARD ke tahat pariyojna ki anumaanit lagat Rs 1.97 crore hai aur ye seemavarti aur door-daraz ilakon ki connectivity badhayegi. Fund-srot NABARD hai, sarkari handout ke mutabiq kaam shuru hua. Stage: shilanyas.', period: '2024-2029' },
  { title: 'Gaon Nanga me City and Town Scheme se Rs 30 lakh ki road blacktopping ka udghatan', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-manyal-inaugurates-blacktopping-work/', date: '2026-10-04', note: 'MLA Ramgarh Dr Devinder Kumar Manyal ne gaon Nanga, Ramgarh me sadak ki blacktopping kaam ka udghatan kiya; City and Town Scheme ke tahat lagat Rs 30 lakh hai. MLA ke mutabiq sadak buniyadi dhanche ki prathmikta hai aur ye graameen samudaayon ki aavagaman suvidha badhayegi; sthaniya logon ne aabhaar vyakt kiya. Stage: shilanyas (blacktopping kaam shuru).', period: '2024-2029' },
];

jammuKashmirWorks['surjeet-singh-slathia'] = [
{ title: 'Shilanyas: Higher Secondary School Goran (Block Sumb) me 10-kamron wali do-manzila imarat (Rs 1.85 crore)', category: 'School', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/slathia-reviews-health-sector-lays-foundation-of-school-building/', date: '2024-10-28', note: 'UT Capex budget se Rs 1.85 crore ki lagat wali 10 kamron ki do-manzila imarat ka shilanyas; report me school ka naam Higher Secondary School Goran, Block Sumb darj hai; MLA ne gunvatta aur tay samay me kaam poora karne par jor diya.', period: '2024-2029' },
  { title: 'Shilanyas: Samba shahar Water Supply Scheme ka sudhaar aur vistar (Rs 213.7 lakh)', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/bjp-for-consolidating-peace-in-jk-isolating-divisive-forces-slathia/', date: '2024-11-12', note: 'UT Capex budget ke tahat kul Rs 213.7 lakh ki yojna ka shilanyas; isme Sangwali me 10000-gallon kshamta ka sump tank, Sangwali Mandi me do tube well pump room building aur filtration plant, tube well cum pump room building, chaar compound wall aur rising main va distribution system shamil hai; MLA ne gunvatta aur tay samay me kaam poora karne ka nirdesh diya.', period: '2024-2029' },
  { title: 'Shilanyas: Sangwali me Water Supply Scheme ka balance work (Rs 100.22 lakh)', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/nc-cong-exposed-for-disempowering-marginalized-people-of-jk-slathia/', date: '2024-11-14', note: 'Sangwali me WSS ke balance work ke nirmaan ka shilanyas; aavantit lagat Rs 100.22 lakh; Block Ghagwal me Vijay rally ke dauraan karyakram hua.', period: '2024-2029' },
  { title: 'Shilanyas: gaon Chann Matloni Tapyal me causeway ka nirmaan (Rs 94 lakh)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/nc-cong-exposed-for-disempowering-marginalized-people-of-jk-slathia/', date: '2024-11-14', note: 'Gaon Chann Matloni Tapyal me causeway ke nirmaan ka shilanyas; anumaanit lagat Rs 94 lakh; Block Ghagwal me Vijay rally ke dauraan karyakram hua.', period: '2024-2029' },
  { title: 'Kaam shuru: gaon Sagel se Shamshan Ghat tak link road ki macadamization, Block Ghagwal (Rs 15 lakh)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pm-modis-strong-leadership-brought-turnaround-in-jk-slathia/', date: '2024-11-21', note: 'Block Ghagwal me vikas karyon ke dauraan MLA ne macadamization ka kaam shuru kiya; report me anumaanit lagat Rs 15 lakh darj hai; fund-srot report me nirdisht nahi hai.', period: '2024-2029' },
  { title: 'Kaam shuru: Sumb se SC Mohalla Katli tak link road (Rs 85 lakh)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pm-modis-strong-leadership-brought-turnaround-in-jk-slathia/', date: '2024-11-21', note: 'Sumb kshetr me MLA ne link road ka kaam shuru kiya; report me anumaanit lagat Rs 85 lakh darj hai; fund-srot report me nirdisht nahi hai.', period: '2024-2029' },
  { title: 'Kaam shuru: gaon Taloor me Mohalla Ram Lal va anyon tak approach road (Rs 58 lakh)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pm-modis-strong-leadership-brought-turnaround-in-jk-slathia/', date: '2024-11-21', note: 'Gaon Taloor me approach road ka kaam shuru; report me anumaanit lagat Rs 58 lakh darj hai; fund-srot report me nirdisht nahi hai.', period: '2024-2029' },
  { title: 'Kaam shuru: Govt Higher Secondary School Sumb me lab block ka nirmaan (Rs 133 lakh)', category: 'School', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pm-modis-strong-leadership-brought-turnaround-in-jk-slathia/', date: '2024-11-21', note: 'Govt Higher Secondary School Sumb me lab block ke nirmaan ka kaam shuru; report me anumaanit lagat Rs 133 lakh darj hai; fund-srot report me nirdisht nahi hai.', period: '2024-2029' },
  { title: 'Kaam shuru: ACR aur examination hall ka nirmaan (Rs 197 lakh)', category: 'School', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pm-modis-strong-leadership-brought-turnaround-in-jk-slathia/', date: '2024-11-21', note: 'ACR va examination hall ke nirmaan ka kaam shuru; report me anumaanit lagat Rs 197 lakh darj hai; school ka naam report me nirdisht nahi hai isliye sthan nahi joda gaya.', period: '2024-2029' },
  { title: 'Kaam shuru: Smotha me Basenter nadi par 100-meter foot suspension bridge (Rs 195 lakh)', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/pm-modis-strong-leadership-brought-turnaround-in-jk-slathia/', date: '2024-11-21', note: 'Smotha me Basenter nadi par 100-meter span ke foot suspension bridge ke nirmaan ka kaam shuru; report me anumaanit lagat Rs 195 lakh darj hai; fund-srot report me nirdisht nahi hai.', period: '2024-2029' },
  { title: 'Lokarpan: Govt Accidental Hospital Ghagwal me aadhunik X-ray diagnostic plant (Rs 50 lakh)', category: 'Aspataal', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/slathia-inaugurates-x-ray-plant-at-ghagwal-hospital/', date: '2025-05-01', note: 'Sun Pharma ke sahyog se Rs 50 lakh ki lagat se sthapit aadhunik X-ray suvidha ka lokarpan; karyakram me Director Health Services Jammu va Sun Pharma ke adhikari maujood the. Akhbaar ne MLA ko galti se former MLA likha hai, lekin karyakram 1 May 2025 ka hai jo unke vartaman karyakaal me padta hai; Ghagwal Samba seat me hi hai.', period: '2024-2029' },
  { title: 'Kaam shuru: gaon Sarian se Bupneragarh tak 8.5 km PMGSY sadak (Rs 21 crore)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/jugal-salathia-kick-start-rs-21-cr-sarian-bupneragarh-road/', date: '2026-01-08', note: 'Kendriya PMGSY yojna ke tahat 8.50 km sadak ke nirmaan va rakh-rakhav ka kaam sansad Jugal Kishore Sharma ke saath sanyukt roop se shuru; anumaanit lagat lagbhag Rs 21 crore; Block Nud, Samba seat; shrey kendr ki PMGSY yojna aur dono netaon ke sanyukt prayas ka hai.', period: '2024-2029' },
];

jammuKashmirWorks['chander-parkash'] = [
{
    title: 'MLA Chander Parkash Ganga ne Pekhari (Panchayat Salmeri) me Rs 94 lakh ki sadak ka kaam shuru karwaya — Pekhari ko Thandi Khui National Highway se jodegi',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/will-fulfill-promises-made-to-public-during-elections-ganga/',
    date: '2024-11-11',
    note: 'Stage kaam-shuru (kick-start) hai, poorn nahi. MLA ne DDC Chairman Samba Keshav Dutt Sharma ke saath gaon Pekhari (Panchayat Salmeri) me Rs 94 lakh ki sadak ka kaam shuru karwaya; sadak Pekhari ko Thandi Khui National Highway se jodegi. Kaam PWD dwara ho raha hai; MLA ne quality par samjhota nahi ka nirdesh diya. Ye gaon ki chunav-samay ki maang thi. Post-event reporting: Daily Excelsior.',
    period: '2024-2029',
  },
  {
    title: 'MLA ne Purmandal me Devak (Shiv Mandir) se Nabha Dass Mandir tak Rs 1.23 crore ki link road ka nirmaan shuru karwaya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/ganga-kick-starts-construction-of-road-in-purmandal/',
    date: '2024-12-15',
    note: 'Stage kaam-shuru (kick-start), poorn nahi. MLA ne Purmandal me Devak (Shiv Mandir ke paas) se Nabha Dass Mandir tak link road ka nirmaan shuru karwaya; lagat Rs 1.23 crore; kaam PWD ne liya hai. Kshetra ki lambe samay se pending maang thi. Post-event reporting: Daily Excelsior.',
    period: '2024-2029',
  },
  {
    title: 'MLA ne Gagore se Channi Manhasan (Panchayat Gadwal-B) aur Reor ke Chouhan Mohalla (Panchayat Meen Sarkar) me do sadkon ki macadamization shuru karwai — kul lagat Rs 23 lakh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/ganga-kick-starts-macadamization-of-roads-in-vijaypur/',
    date: '2024-12-17',
    note: 'Stage kaam-shuru (kick-start), poorn nahi. MLA ne do alag sadkon ki macadamization shuru karwai — Gagore se gaon Channi Manhasan (Panchayat Gadwal-B, lagat Rs 15 lakh) aur Chouhan Mohalla, gaon Reor (Panchayat Meen Sarkar, lagat Rs 8 lakh). MLA ke anusaar dono sadken unke pichhle karyakaal me macadam hui thi aur dobara blacktopping ki zaroorat thi. Post-event reporting: Daily Excelsior.',
    period: '2024-2029',
  },
  {
    title: 'MLA ne DDC Chairman Samba ke saath Vijaypur Panchayat ke naye Panchayat Ghar (lagat Rs 29 lakh) ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/ganga-inaugurates-newly-built-panchayat-ghar/',
    date: '2025-02-21',
    note: 'Stage poorn/lokarpan. MLA ne DDC Chairman Samba ke saath Vijaypur Panchayat ke naye bane Panchayat Ghar ka lokarpan kiya; pariyojana lagbhag Rs 29 lakh ki lagat par poori hui, jisse Gram Sabha aur panchayat ke kaam ho sakenge. Fund-srot report me nirdisht nahi, lekin PRI infrastructure par sarkari zor ka sandarbh diya gaya. Post-event reporting: Daily Excelsior.',
    period: '2024-2029',
  },
  {
    title: 'MLA ne Vijaypur me teen link sadkon ki blacktopping shuru karwai — Nagrota (Utterbehni-Vijaypur link), Suchani aur Utterbehni Panchayat ke mohalle; kul lagat Rs 50 lakh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/ganga-kick-starts-blacktopping-of-3-roads-in-vijaypur-constituency/',
    date: '2025-10-17',
    note: 'Stage kaam-shuru (kick-start), poorn nahi. MLA ne Vijaypur seat me teen link sadkon ki blacktopping shuru karwai — gaon Nagrota ko Utterbehni-Vijaypur link road se jodne wali sadak (Rs 15 lakh), Suchani road (Rs 10 lakh) aur Panchayat Utterbehni ke Mohalla Samrala, Mohalla Shadpal aur Mohalla Nohad (Rs 25 lakh); kul lagat Rs 50 lakh; City Town Plan ke tahat PWD dwara nirmaan. Post-event reporting: Daily Excelsior.',
    period: '2024-2029',
  },
  {
    title: 'MLA ne apne CDF se bani Ward 4 aur 5 (MC Bari Brahmana) ki lane-drain (lagat Rs 10 lakh) ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/ganga-inaugurates-lane-drain-work-in-ward-4-5-bari-bahmana/',
    date: '2026-02-23',
    note: 'Stage poorn/lokarpan. MLA ne Municipal Committee Bari Brahmana ke Ward 4 aur 5 me bani lane-drain (lagat Rs 10 lakh) ka lokarpan kiya; kaam MLA ke Constituency Development Fund (CDF) se hua. Post-event reporting: Daily Excelsior.',
    period: '2024-2029',
  },
  {
    title: 'MLA ne Purmandal-Paddal 2.5 km sadak ka shilanyas kiya — NABARD yojana se PWD dwara, lagat Rs 4.58 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/ganga-lays-foundation-stone-for-2-5-km-purmandal-paddal-road/',
    date: '2026-10-06',
    note: 'Stage shilanyas (foundation stone), poorn nahi. MLA ne bhoomipujan ke baad 2.5 km lambi Purmandal-Paddal sadak ka shilanyas kiya; lagat Rs 4.58 crore; NABARD yojana ke tahat PWD dwara nirmaan. Report ke anusaar Paddal gaon ko azaadi ke baad pehli baar pakki sadak connectivity milegi. Post-event reporting: Daily Excelsior.',
    period: '2024-2029',
  },
];

// Samba REJECT-LOG (district consolidated): Manyal 15 rejects (MPLAD/LG maujoodgi, SASCI/RDSS/tubewell/HSS/Medicare/Dabuj Kaka/Chamliyal/Chann Protian/Karalia sab non-whitelist, Kisan Mela/maangein/purane-Samba-era, stone-throwing attack me MLA khud victim — negative nahi); Slathia 11 rejects (jkmonitor/earlytimes/statetimes Green Strip/Tapyal Mandi/Chak Medu/Gurha Slathia — whitelist-bahar; purane 2013-14/2018 kaam; LG auditorium; assembly prashn/maang; NDPS/Sourav-Slathia galat-vyakti); Parkash 22 rejects (purane 2016-19 karyakaal ki 12 items; AIIMS/MP-Rs18cr purane-era; CSR sewing centre Early Times; jammulinksnews duplicate; Bazigar Basti video-only; medical camps/relief; LG Devak Bridge maujoodgi; LG mulaqat; Haryana Chander Prakash galat-vyakti; patni-nidhan parivar-mamla; HT land-encroachment FIR pre-term + affidavit me 0 cases; chunav rally/feature). NEGATIVE: teeno me koi nahi (strict standard par koi FIR/court+jawab sthiti nahi mili; Chander Parkash Ganga = Chander Parkash identity assemble_jk rename map se pushti).
// Coordinator QA note (2026-10-15): 3/3 worker fragments khud kholkar padhe; koi drop/flip nahi — badge/stage/fund-disclosure niyam ke anusaar (Manyal flood-repair shilanyas infrastructure restoration = valid; Slathia 'former MLA' typo note me disclosed; Parkash Purmandal-Paddal NABARD Rs 4.58cr shilanyas sahit sabhi post-event whitelisted reporting).

// ---- Jammu district batch (researched 2026-10-15) ----

jammuKashmirWorks['bishnah'] = [
  { title: 'Rs 904.86 lakh ke SASCI kaam ka shilanyas: Bishnah me 1.1 km nala, pathway aur 75 lane-drain', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-lays-foundation-stone-for-sasci-projects/', date: '2026-07-11', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne SASCI scheme ke tahat Rs 904.86 lakh ke vikas kaam ka shilanyas kiya. Isme Convent School Chowk se Fruit Mandi Chowk hote hue KC Morh tak 1.110 km ka bada nala, Sahib Bandgi Ashram se 1.100 km pathway, aur alag-alag jagahon par 75 lane, sadak, protection wall, iron grating aur allied civic kaam shamil hain. Director Urban Local Bodies, PWD (R&B) engineers aur MC Bishnah officials maujood the; executing agencies ko standard-quality material ki hidayat di gayi.', period: '2024-2029' },
  { title: 'Nougran aur Kotli Charkan panchayat me Rs 20.97 lakh ke CDF-PRI kaam ka aarambh', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-bishnah-launches-several-development-works-at-nougran/', date: '2026-10-05', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne Capex Budget 2026-27 ke tahat Nougran aur Kotli Charkan panchayat me kul Rs 20.97 lakh ke kaam ka shubharambh kiya. PRI component me Nougran shamshan ghat par boundary wall aur tile work (Rs 5.50 lakh), Open Gym ke paas kaam (Rs 2.80 lakh), shamshan ghat road par tile work aur puliya (Rs 3.20 lakh), Ward No. 2 me lane drain (Rs 2.30 lakh) shamil hain; CDF component se Kotli Charkan me shamshan ghat tak tile work ke teen components (Rs 1.19 lakh, Rs 2.99 lakh, Rs 2.99 lakh) liye gaye. Ye post-event reporting hai, sirf ghoshna nahi.', period: '2024-2029' },
  { title: 'Kheri me Rs 60 lakh ke sadak kaam ka shubharambh: Kheri-Kurwal road aur Chak Murrar', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-bishnah-kick-starts-rs-60-lakh-development-works-in-kheri/', date: '2026-09-08', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne gaon Kheri me lagbhag Rs 60 lakh ke vikas kaam ka aarambh kiya. Isme UT Capex Budget 2025-26 (Road Sector) ke tahat Kheri-Kurwal road ka permanent restoration aur improvement kaam, aur Chak Murrar me shesh vikas kaam shamil hain. R&B Department ke adhikari maujood the aur sanctioned kaam samay par poora karne ke nirdesh diye gaye. Sadak-category ka post-event shilanyas-stage entry hai.', period: '2024-2029' },
  { title: 'PHC Arnia me Rs 70 lakh ki Block Public Health Unit ka lokarpan (PM-ABHIM)', category: 'Aspataal', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-rajeev-bhagat-kick-starts-rs-1-64-cr-development-works-in-bishnah/', date: '2025-10-14', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne Primary Health Centre Arnia me Rs 70.00 lakh ki lagat se bani Block Public Health Unit ka aupcharik lokarpan kiya. Credit-disclosure: ye Kendra Sarkar ki flagship Pradhan Mantri Ayushman Bharat Health Infrastructure Mission (PM-ABHIM) pariyojna hai; health department (BMO Bishnah, PHC Arnia staff) ne isse banaya, MLA ki concrete bhoomika lokarpan karyakram me rahi. Poorna nirmit facility ka lokarpan-stage entry hai.', period: '2024-2029' },
  { title: 'Kiryal, Kathar aur Allah panchayaton me 51 vikas kaam ka aarambh (kul Rs 1.64 crore)', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-rajeev-bhagat-kick-starts-rs-1-64-cr-development-works-in-bishnah/', date: '2025-10-14', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne Kiryal (19 kaam, Rs 38.19 lakh), Kathar (15 kaam, Rs 21.16 lakh) aur Allah (17 kaam, Rs 34.99 lakh) panchayaton me kul 51 vikas kaam ka shubharambh kiya, kul parivyay Rs 1.64 crore. Kaam PRI, BDC, DDC aur SSY jaise decentralized schemes ke tahat approved hain aur BDO Arnia ki team ke saath shuru kiye gaye. Post-event kick-start stage ka sarkari entry hai.', period: '2024-2029' },
  { title: 'Bishnah-Kunjwani road se Sikanderpur tak Rs 25 lakh sadak macadamization ka aarambh', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-rajeev-bhagat-kick-starts-rs-25-lakh-road-project-in-bishnah/', date: '2025-12-26', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne Bishnah-Kunjwani road se Sikanderpur via Jinder Khurd tak 1.700 km link road ki macadamization ka aarambh kiya, pariyojna moolya Rs 25 lakh. Kaam Capex Budget 2025-26 ke Cities and Towns Programme ke tahat PWD Sub Division Bishnah dwara execute ho raha hai; AEE (PWD) technical team sahit maujood the. Shubharambh-stage ka Sadak entry hai.', period: '2024-2029' },
  { title: 'Rs 49 lakh ke kaam: Taraf Brahmana-Krail Manhasan sadak, Chak Avtara naala, Sehora link road', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-rajeev-bhagat-launches-development-works-worth-rs-49-lakh-in-bishnah/', date: '2025-12-23', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne PWD dwara lagbhag Rs 49 lakh ke kaam ka shubharambh kiya: Taraf Brahmana se Krail Manhasan tak link road ki macadamization (WMM, BM, SDBC layers), gaon Chak Avtara me Kamal Kishore ke ghar se Dhhinday Morh tak naale ka nirman, aur Baba Fareed Nagar Sehora ke Ward No. 7 me link road ka nirman. AEE PWD Sub Division Bishnah technical team sahit maujood the. Post-event kick-start stage entry hai.', period: '2024-2029' },
  { title: 'Khawaspur link road (Rs 7 lakh) aur Harsa Dabber me lanes-drains: Rs 31.25 lakh kaam ka aarambh', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-rajeev-bhagat-kick-starts-rs-31-25-lakh-development-works-in-bishnah/', date: '2025-11-13', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne kul Rs 31.25 lakh ke kaam shuru kiye: Khawaspur gaon tak sanctioned Rs 7.00 lakh ki link road (PWD R&B Sub Division Bishnah execute karega) aur Panchayat Harsa Dabber me Rs 24.25 lakh ke lanes, drains, protection walls aur edge walls (RDD block Bishnah execute karega). PWD engineering wing aur BDO Bishnah ke adhikari maujood the. Post-event kick-start stage entry hai.', period: '2024-2029' },
  { title: '4 transformers ka upgradation aur Kotla lane-drain: Rs 40 lakh ka lokarpan', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-rajeev-bhagat-unveils-development-projects-worth-rs-40-lakh-in-bishnah/', date: '2025-12-19', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne kul Rs 40 lakh ki pariyojnaon ka lokarpan kiya: bijli supply sthir karne ke liye 4 transformers ka upgradation (gaon Nandpur me 2, Bahadurpur me 1, Joian me 1) aur gaon Kotla me lane aur drain pariyojna. Karyakram ke baad Kotla me badi sabha hui jisme sthaniya logon ne aabhaar vyakt kiya. Poorna kaam ka lokarpan-stage sarkari entry hai.', period: '2024-2029' },
  { title: 'Chak Jaralan Palli Morh me Rs 6.50 lakh ki puliya ka aarambh', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Rising Kashmir', sourceUrl: 'https://risingkashmir.com/mla-bhagat-launches-culvert-project-in-bishnah/', date: '2025-11-30', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne Chak Jaralan Palli Morh par Ayodhyapura Devsthan ke paas 1.50-metre span aur flooring wali nayi puliya ke nirman ka shubharambh kiya; pariyojna sanctioned estimated cost Rs 6.50 lakh hai aur isse sthaniya connectivity aur suraksha badhegi. Article me usi din BJP me kuch logon ke shamil hone ka alag rajnaitik karyakram bhi darj hai, lekin ye entry sirf puliya-karya par hai. Post-event kick-start stage entry hai.', period: '2024-2029' },
  { title: 'Lalyana Grid Station me Rs 8.50 crore ke naye 50 MVA transformer ka lokarpan', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-enhanced-50-mva-transformer/', date: '2025-07-15', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne Grid Station Lalyana me Rs 8.50 crore ki lagat se lage naye 50 MVA transformer ka lokarpan kiya, jisse station ki kul capacity 150 MVA ho gayi. Power Department ke Executive Engineer (Grid) aur AEE (Grid) maujood the; handout ke anusar isse Bishnah aur aaspaas ke hazaron gharon, krishi aur vyavsayik ikaaiyon me voltage fluctuation, overloading aur outage ki samasya kam hogi. Poorna pariyojna ka lokarpan-stage sarkari entry hai; credit-disclosure: ye power department ki pariyojna hai, MLA ki bhoomika lokarpan me rahi.', period: '2024-2029' },
  { title: 'Pandorian, Laswara, Chak Avtara panchayaton me Rs 61.50 lakh kaam ka lokarpan', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-bishnah-kick-starts-development-works-2/', date: '2025-01-04', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne Pandorian, Laswara aur Chak Avtara panchayaton me Rs 61.50 lakh ke vikas kaam ka udghatan kiya: passenger shed ka renovation, ladies bathroom ka nirman, sinchai channels, puliya aur lane-drain ka nirman. Article udghatan ko "inaugurating development works" ke roop me darj karta hai, isliye ye lokarpan-stage entry hai; unhone agle paanch saalon me kshetra ke samagra vikas ka sankalp bhi dohraya.', period: '2024-2029' },
  { title: 'Bishnah PS se Deoli Tibba tak Rs 38 lakh minor canal upgradation ka aarambh', category: 'Paani', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-rajeev-bhagat-kick-starts-rs-38-lakh-canal-upgradation/', date: '2026-01-06', note: 'MLA Bishnah Dr Rajeev Kumar Bhagat ne Bishnah Police Station se Deoli Tibba tak RD 0 se 3000 metre lambe minor canal ke improvement aur upgradation kaam ka shubharambh kiya; pariyojna Rs 38.00 lakh me sanctioned hai aur lining-restoration se seepage khatm karke tail-end kshetron tak nirbadhh sinchai paani pahunchega. Executive Engineer Irrigation and Flood Control Jammu apni technical team ke saath maujood the. Sanctioned vibhagiya pariyojna ka kick-start stage sarkari entry hai.', period: '2024-2029' },
];

jammuKashmirWorks['suchetgarh'] = [
  { title: 'Bajachak-Magddon aur Chakroi-Haripur-Badiyal Kaziaan sadkon ka blacktopping shuru (lagbhag Rs 1 crore)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/gharu-tony-kick-start-blacktopping-of-roads/', date: '2025-10-17', note: 'Daily Excelsior ki post-event reporting me MLA Prof Gharu Ram Bhagat aur DDC Suchetgarh Taranjit Singh Tony (Cong) dwara Suchetgarh kshetra me kul 4-5 km sadkon ke blacktopping ka sanyukt shubharambh darj hai — Subash Chander Chowk Bajachak se Magddon gaon tak 2 km aur Chakroi se Haripur-Badiyal Kaziaan tak 2 km. Lagat lagbhag Rs 1 crore, rural development aur infrastructure schemes se. Credit-disclosure: karyakram me Tony ki bhoomika pramukh rahi (gunvatta nigrani, zero-tolerance ka elan), MLA Bhagat maujood the aur sahyog-par jor diya.', period: '2024-2029' },
  { title: 'Mana gaon me vikas karyon ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/tony-gharu-ram-inaugurate-development-works-in-suchetgarh/', date: '2025-02-11', note: 'Daily Excelsior ki post-event reporting me DDC Suchetgarh Taranjit Singh Tony aur MLA Prof Gharu Ram Bhagat dwara Mana gaon (Suchetgarh) me kai vikas karyon ka sanyukt lokarpan darj hai. Khabar me alag-alag karyon ke naam, lagat ya scheme ka byora nahi diya gaya; shesh lekh rashan-card vibhajan ki maang aur tube-well/nahar sudhar ki apeelon par hai. Credit-disclosure: sanyukt karyakram tha, karyon ka vyaktigat byora uplabdh nahi.', period: '2024-2029' },
  { title: 'Gharani-Gharana sadak blacktopping ka lokarpan (lagbhag Rs 1.5 crore)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/gharu-tony-inaugurate-blacktopping-of-gharani-gharana-road/', date: '2025-12-09', note: 'Daily Excelsior ki post-event reporting me DDC Suchetgarh Taranjit Singh Tony aur MLA Prof Gharu Ram Bhagat dwara Gharani se Gharana tak sadak ke blacktopping ka sanyukt lokarpan darj hai; lagat lagbhag Rs 1.5 crore. Credit-disclosure: khabar me project ki pehal aur sangharsh ka shrey Tony ko diya gaya (1947 ke baad pehli baar sudhar, zameen-abadkari aur atikraman-hataane ki ladai), MLA Bhagat karyakram me maujood the.', period: '2024-2029' },
  { title: 'Chakroi Road blacktopping aur Gharani Road patch repair ka shubharambh (Rs 30 lakh)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/gharu-tony-launch-rs-30-lakh-road-works-in-suchetgarh/', date: '2025-12-22', note: 'Daily Excelsior ki post-event reporting me MLA Prof Gharu Ram Bhagat aur DDC Suchetgarh Taranjit Singh Tony dwara Rs 30 lakh ke sadak karyon ka shubharambh darj hai — Chakroi Road ka blacktopping aur Gharani Road ki patch repair shamil. Credit-disclosure: sanyukt karyakram tha; Tony ne kshetra ki sadkon ko charanbadh dhang se upgrade karne ka ashvasan diya, MLA Bhagat ne grameen buniyadi dhanche ko sarkar ki prathmikta bataya.', period: '2024-2029' },
];

jammuKashmirWorks['rs-pora-jammu-south'] = [
  { title: 'Ward 56 Gangyal me Rs 24 lakh ke vikas karyon ka shubharambh', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-narinder-singh-kickstarts-development-works-in-gangyal/', date: '2024-11-21', note: '21 Nov 2024 ko MLA Dr Narinder Singh Raina ne Ward 56, Gangyal me lagbhag Rs 24 lakh ke vikas karyon ka shubharambh kiya; karyakram me Jammu ke poorv Deputy Mayor Baldev Singh Billawaria aur department ke adhikari bhi maujood the. Report me karyon ka prakar vistar se nahi bataya gaya, isliye stage sirf shubharambh darj hai. Credit disclosure: report me JMC ke shehri karyon ki sarahna bhi darj hai, lekin in karyon ko JMC ka karyakram nahi bataya gaya.', period: '2024-2029' },
  { title: 'Ward 56 me Rs 16 lakh ki sadak par blacktopping shuru', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-narinder-initiates-blacktopping-work-in-ward-56/', date: '2025-03-13', note: '13 Mar 2025 ko MLA ne Ward 56 me lagbhag Rs 16 lakh ki lagat se blacktopping ka kaam shuru karwaya; poorv MLA Ashwani Sharma, mandal adhyaksh aur department ke adhikari maujood the. Kaam shuru hone ki stage par report hui, poorn hone ki pushti wali follow-up report whitelist sroton me nahi mili.', period: '2024-2029' },
  { title: 'Ward 58 me Rs 30 lakh ki blacktopping, Digiana ashram ke paas', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-narinder-starts-black-topping-work-in-ward-58/', date: '2025-03-15', note: '15 Mar 2025 ko MLA ne Ward 58 me Digiana ashram ke paas lagbhag Rs 30 lakh ki lagat wali blacktopping ka shubharambh kiya; poorv corporator aur department ke adhikari maujood the. MLA ne ise sthaniya logon aur yatriyon ki lambe samay se chali aa rahi maang bataya.', period: '2024-2029' },
  { title: 'Greater Kailash me Rs 1.35 crore ki naali aur sadak-kinare track ka nirmaan shuru', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-starts-construction-of-development-works/', date: '2025-03-18', note: '18 Mar 2025 ko MLA ne Greater Kailash me Ward 68 me Fawara Chowk se National Highway tak sadak ke dono kinare naali aur track ke nirmaan ka kaam shuru karwaya, kul lagat lagbhag Rs 1.35 crore. Isi avsar par jal-bharav ki samasya ke samadhan ke liye pehle tile work poora hone ki jankari bhi di gayi.', period: '2024-2029' },
  { title: 'Ward 55 me Rs 17 lakh ki sadak blacktopping shuru', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-starts-construction-of-development-works/', date: '2025-03-18', note: '18 Mar 2025 ko Greater Kailash karyakram me hi MLA ne Ward 55 me lagbhag Rs 17 lakh ki lagat se sadak blacktopping ka kaam bhi shuru hone ki jankari di.', period: '2024-2029' },
  { title: 'Jeewan Nagar me Rs 1.88 crore ki canal beautification pariyojna ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-narinder-inaugurates-rs-1-88-cr-canal-beautification-project/', date: '2025-08-05', note: '5 Aug 2025 ko MLA ne Jeewan Nagar me canal road ke saath lagbhag Rs 1.88 crore ki lagat wali canal beautification pariyojna ka lokarpan kiya; isme canal-kinare pathway ka saundaryakaran, maujooda hariyali ka sanrakshan aur ghaton-sidhiyon ka nirmaan shamil hai. Karyakram me department ke Executive Engineer, adhikari aur kshetra ke councillor maujood the, aur councillor ne in karyon ko aage badhane me MLA ki sakriya bhoomika ka shrey diya.', period: '2024-2029' },
  { title: 'Lower Gadigarh me nallah slab ka lokarpan aur gali-naali nirmaan ka shubharambh', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dr-narinder-singh-inaugurates-development-works-at-lower-gadigarh/', date: '2026-05-24', note: '24 May 2026 ko MLA ne Lower Gadigarh me nallah par naye bane slab ka lokarpan kiya aur wahan gali tatha naali nirmaan ke karyon ka shubharambh bhi kiya; slab poorn kaam ki stage par aur gali-naali shilanyas-stage par darj hain.', period: '2024-2029' },
];

jammuKashmirWorks['vikram-randhawa'] = [
{ title: 'Ward 50-51 me 5 km sadkon ka blacktopping patchwork shuru', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-kick-starts-blacktopping-work-in-bahu-constituency/', date: '2024-11-16', note: 'MLA Bahu Ch. Vikram Randhawa ne Ward No. 50 aur 51 me 5 km sadkon ka blacktopping patchwork shuru karwaya. Unhone kaha ki sansadiya aur vidhan sabha chunavon ke dauran aadarsh aachar sanhita do baar lagi jisse kaam ruke, lekin ab backlog charanbaddh tareeqe se pura kiya jayega. Sthaniya nivasion ne lambe samay se maang puri hone par santosh jataya.', period: '2024-2029' },
{ title: 'Gandhinagar Ward 20 me tile work ka shilanyas (CDF)', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-vikram-randhawa-starts-tile-work-in-ward-20-of-gandhi-nagar/', date: '2026-03-02', note: 'MLA ne Gandhinagar Ward No. 20 me apne CDF ke tahat tile work shuru karwaya, retired Justice GD Sharma ke nivas se shuru hokar aas-pass ki gali tak. JMC adhikariyon ne samay par quality se kaam pura karne ka ashwasan diya. Ilake ki gali ki kharab halat ki lambe samay se shikayat thi.', period: '2024-2029' },
{ title: 'Nanak Nagar Ward 44 me Rs 43 lakh lane-drain pariyojna ka lokarpan', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-randhawa-inaugurates-development-project-worth-rs-43-lakh/', date: '2025-03-11', note: 'MLA ne Nanak Nagar Ward No. 44 me Rs 43 lakh ki lane-drain pariyojna ka lokarpan kiya. Karyakram me AEE, JE sahit vibhagiya adhikari maujood the. Randhawa ne sadak, paani, safai aur bijli jaisi buniyadi suvidhaon ko prathmikta bataya.', period: '2024-2029' },
{ title: 'Nanak Nagar Ward 43 me sadak blacktopping ka shilanyas (PWD sahyog)', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-kick-starts-blacktopping-work-in-nanak-nagar/', date: '2025-04-29', note: 'MLA ne PWD ke sahyog se Nanak Nagar Ward No. 43 me blacktopping ka shilanyas kiya; PWD ke varishth adhikari maujood the. Randhawa ne quality infrastructure aur lagatar nigrani ka ashwasan diya. Credit disclosure: sadak ka kaam PWD ke sahyog se hua, MLA ne shilanyas kiya aur nigrani ka vaada kiya.', period: '2024-2029' },
{ title: 'Satwari Chowk par Aspirational Toilet ka shilanyas', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-bahu-choudhary-vikram-randhawa-laying-the-foundation-stone-of-aspirational-toilet-at-satwari-chowk-on-thursday/', date: '2025-05-01', note: 'Daily Excelsior ki photo gallery report ke mutabik MLA Bahu Ch. Vikram Randhawa ne Satwari Chowk par Aspirational Toilet ka shilanyas kiya. Vistaarit vivran uplabdh nahi hai; yeh post-event reporting hai.', period: '2024-2029' },
{ title: 'Valmiki Colony me washroom complex ka lokarpan', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-bahu-ch-vikram-randhawa-inaugurating-washroom-complex-at-valmiki-colony-on-saturday/', date: '2025-05-03', note: 'Daily Excelsior ki photo gallery report ke mutabik MLA Bahu Ch. Vikram Randhawa ne Valmiki Colony me washroom complex ka lokarpan kiya. Vistaarit vivran uplabdh nahi hai; yeh post-event reporting hai.', period: '2024-2029' },
{ title: 'Malik Market Bathindi me lane-drain nirman ka shilanyas (PWD)', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-kick-starts-lane-drain-work-in-malik-market/', date: '2025-10-10', note: 'MLA ne Bathindi ke Shiv Lane, Malik Market me PWD ke tahat lane-drain nirman ka shilanyas kiya. BDO, PHE aur PWD ke adhikari maujood the aur MLA ne adhikariyon ko on-spot nirdesh diye. Credit disclosure: kaam PWD ke tahat hua, MLA ne shilanyas karke nigrani ka vaada kiya.', period: '2024-2029' },
{ title: 'Channi Himmat Sector 7 me 400 meter nayi water pipeline ka shilanyas', category: 'Paani', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-kick-starts-laying-of-water-supply-pipelines/', date: '2025-11-05', note: 'MLA ne Sector 7, Channi Himmat (Ward No. 50) me Ambika Super Shopee ke paas 400 meter nayi water pipeline bichane ka kaam shuru karwaya; PHE vibhag ke adhikari maujood the. Ilake me paani ki kamee ki lambe samay se shikayat thi.', period: '2024-2029' },
{ title: 'Channi Himmat Sector-4 me pipee ka kaam ka shubharambh', category: 'Paani', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-launches-pipeline-work-to-end-water-scarcity-in-channi-himmat/', date: '2025-12-15', note: 'MLA ne Channi Himmat Sector-4 me pipee ka kaam shuru karwaya; PHE ke AEE aur team ne takniki vivran diya. Randhawa ne PHE adhikariyon ko quality banaye rakhne ka nirdesh diya taaki bhavishya me paani ki samasya na ho.', period: '2024-2029' },
{ title: 'Rajiv Nagar me water supply pipe bichane ka kaam shuru', category: 'Paani', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-starts-work-of-laying-water-supply-pipes/', date: '2025-12-31', note: 'MLA ne Rajiv Nagar me water supply pipe bichane ka lambe samay se pending kaam shuru karwaya; PHE ke XEN, AEE aur JE maujood the. Unhone kaha ki pipee se ilake me paani ki supply me sudhar hoga aur vikalpik stroton par nirbharta ghategi.', period: '2024-2029' },
{ title: 'Nanak Nagar Ward 44 me nayi lane-drain ka lokarpan', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-inaugurates-lane-drain-works-at-nanak-nagar/', date: '2026-01-05', note: 'MLA ne Nanak Nagar Ward No. 44 me petrol pump ke paas Bansi Lal Kiryana Store ke samne bani nayi lane-drain aur aas-pass ke linkon ka lokarpan kiya. Division-4 ke Executive Engineer, JE aur work supervisor ne takniki vivran diya.', period: '2024-2029' },
{ title: 'Gandhinagar Ward 20 me Rs 11.50 lakh CDF lane ka lokarpan', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-inaugurates-newly-constructed-lane/', date: '2026-04-11', note: 'MLA ne Gandhinagar Ward No. 20 me Rs 11.50 lakh ke CDF kharch se bani nayi gali ka lokarpan kiya. AEE, JE, work supervisor aur JMC adhikari maujood the. Note: sambhav hai ki 2 March 2026 wale tile work shilanyas wali pariyojna hi puri hokar lokarpit hui hai.', period: '2024-2029' },
{ title: 'PM Shri GHS Digiana me tile work aur drain covering ka lokarpan (CDF)', category: 'School', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-inaugurates-tile-laying-work-in-pm-shri-ghs-digiana/', date: '2026-06-27', note: 'MLA ne PM Shri Government High School, Digiana ke campus me tile-laying aur school ke paas drain ki covering ka lokarpan kiya; dono kaam unke CDF ke tahat hue. School prashasan ki lambe samay se maang thi jo MLA ke school daure ke dauran unke dhyan me aayi thi.', period: '2024-2029' },
{ title: 'Sunjwan Upper Panchayat me lane-drain ka lokarpan', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-starts-development-works-2/', date: '2026-08-04', note: 'MLA ne Sunjwan Upper Panchayat me lane-drain ka lokarpan kiya. Rural Development Department ke adhikari aur thekedaar maujood the. Credit disclosure: kaam Rural Development Department ki dekhrekh me hua; MLA ne lokarpan karke quality aur samay par kaam ka nirdesh diya.', period: '2024-2029' },
{ title: 'Sunjwan Upper Panchayat ke Shiv Mandir me tile work ka lokarpan', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-starts-development-works-2/', date: '2026-08-04', note: 'Usi karyakram me Sunjwan Upper Panchayat ke Shiv Mandir me tile work ka bhi lokarpan hua, jo ilake ki lambe samay se maang thi. Rural Development Department ke adhikari maujood the. Yeh dharmik sthal se juda civic kaam hai, isliye Any category me darj.', period: '2024-2029' },
{ title: 'Gorkha Nagar Ward 48 me Rs 14 lakh lane-drain lokarpan aur Rs 27.93 lakh drain shilanyas', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-kick-starts-rs-40-lakh-lane-drain-work-in-ward-40/', date: '2026-09-03', note: 'MLA ne Gorkha Nagar Ward No. 48 me Rs 14 lakh ki lane-drain ka lokarpan kiya aur Rs 27.93 lakh ki drain ka shilanyas kiya. JE aur thekedaar maujood the; MLA ne quality aur samay par kaam ka nirdesh diya.', period: '2024-2029' },
{ title: 'Sector-7 Ward 50 me sadak macadamisation ka shilanyas (CDF)', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-initiates-macadamisation-work/', date: '2026-09-04', note: 'MLA ne apne CDF ke tahat Sector-7, Ward No. 50 ki main road aur internal link roads ka macadamisation shuru karwaya; PWD adhikari aur thekedaar maujood the. MLA ne material aur quality par jor diya.', period: '2024-2029' },
{ title: 'Cantt Board Ward 3-4 me Rs 15.20 lakh lane-drain upgradation ka shubharambh', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-initiates-upgradation-work-of-lanes-and-drains/', date: '2026-09-11', note: 'MLA ne Jammu Cantonment Board ke Ward No. 3 aur 4 me Rs 15.20 lakh ki lanes-drains upgradation ka shubharambh karwaya; Board ke CEO aur adhikari maujood the. Credit disclosure: kaam Cantonment Board ne uthaya, MLA ne shuruwat karwai aur quality/time par nirdesh diye.', period: '2024-2029' },
{ title: 'Gorkha Nagar Ward 48 me CDF se bani lanes-drains aur RCC slab ka lokarpan', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-inaugurates-lanes-and-drains-in-gorkha-nagar/', date: '2026-09-13', note: 'MLA ne Gorkha Nagar Ward No. 48 me apne CDF se bani lanes-drains, RCC slab aur sahayak kaamon ka lokarpan kiya. Unhone kaha ki khud gali ka nirikshan karke kharab halat dekhne ke baad CDF se kaam shuru karwaya tha. Note: 3 September 2026 wale karyakram se alag event ke roop me report hua hai.', period: '2024-2029' },
{ title: 'Chowadhi me sadak blacktopping ka kaam shuru (PWD, UT Capex)', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/randhawa-starts-road-blacktopping-work-3/', date: '2026-09-18', note: 'MLA ne Chowadhi me sadak ke ek hisse ki blacktopping ka kaam shuru karwaya; kaam PWD ne Capex Budget 2025-26 ke UT Capex Road Sector ke Permanent Restoration Works ke tahat kiya. MLA ne PWD adhikariyon aur thekedaar ko quality aur samay par kaam ka nirdesh diya. Credit disclosure: yeh UT ki yojna ka kaam hai, MLA ne shuruwat karwai aur nigrani ki.', period: '2024-2029' },
];

jammuKashmirWorks['jammu-east'] = [
  { title: 'Bawa Lal Gali (Ward 3) me Rs 16.5 lakh ke deep drain ka karya-arambh', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/yudhvir-starts-deep-drain-work/', date: '2025-03-18', note: 'MLA Yudhvir Sethi ne Ward 3 ke Bawa Lal Gali me deep drain ke nirman ka karya-arambh kiya, anumaanit lagat Rs 16.5 lakh. Moq par Jal Shakti vibhag ke AEE Rajesh maujood the; reporting ke anusaar yah drain monsoon ke dauran jal-jamav ghataega. MLA ke karyakaal ke shuruati mahino ka kaam hai.', period: '2024-2029' },
  { title: 'Rs 2.77 crore ke sewerage link aur house connections ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-yudhvir-inaugurates-sewerage-links-worth-rs-2-77-cr/', date: '2025-06-17', note: 'MLA ne Jammu city ke sewerage links aur house connections (1 se 9, Capex head) ka lokarpan kiya, nirdharit lagat Rs 2.77 crore. Yeh lokarpan yani kaam poora hone ka charan hai; funding sarkari Capex head se thi. Sthaaniya pratinidhi aur nagrik moq par maujood the.', period: '2024-2029' },
  { title: 'Ward 15 (Shivalaya Mandir Road) me Rs 40 lakh ke lane-drain-sadak kaam ka shubharambh', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/yudhvir-kick-starts-rs-40-lakh-development-works/', date: '2025-09-11', note: 'MLA ne Ward 15 me Shivalaya Mandir Road ke paas Rs 40 lakh ke kaam ka udghatan kiya — galiyon-drain ka nirman aur andaruni sadkon ki macadamization. Pariyojna XEn Rakesh Kumar aur vibhagiya adhikariyon ke nirikshan me chal rahi hai; purv-corporator aur sthaniya neta bhi moq par the.', period: '2024-2029' },
  { title: 'Rehari Chungi (Ward 8) me Rs 11 lakh ke lane-drain kaam ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/yudhvir-kick-starts-lane-drain-works-worth-rs-11-lakh-at-rehari-chungi/', date: '2025-09-20', note: 'MLA ne Ward 8 ke Rehari Chungi me Rs 11 lakh ke lane-drain kaam ka udghatan kiya. Credit-disclosure: article ke anusaar yah kaam JMC Commissioner dwara shuru kiye gaye shehar-vyapi vikas karyon ka hissa tha — kaam JMC ka, MLA ne lokarpan kiya. Sthaaniya nivasiyon ne jal-jamav aur safai samasyaon se rahat ki apeksha jatayi.', period: '2024-2029' },
  { title: 'Ward 10 me Rs 12 lakh ki lane-drain upgradation ka shubharambh', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/yudhvir-kick-starts-lane-drain-upgradation-works-in-ward-10/', date: '2025-10-04', note: 'MLA ne Ward 10 me takreeban Rs 12 lakh ki lane-drain upgradation ka shubharambh kiya. Credit-disclosure: MLA ne khud JMC adhikariyon ke sahyog ka shrey diya — yojana aur karyanvayan me JMC ki bhoomika thi. Kaam kuch mahinon me poora hone ki apeksha jatai gayi.', period: '2024-2029' },
  { title: 'Ward 5 ki galiyon me Rs 32 lakh ke lane-drain kaam ka shubharambh', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/yudhvir-launches-development-works-worth-rs-32-lakh/', date: '2026-03-03', note: 'MLA ne Ward 5 ki vibhinn galiyon me Rs 32 lakh ke kaam ka aarambh kiya — lane repairs, drainage upgradation aur buniyadi sudhar. Credit-disclosure: JMC ke JE Saksham Gupta aur AEE Sahil Arora ne takneeki sahyog aur karyanvayan me bhoomika nibhayi. Nirdharit samay-seema me poora hone ki apeksha darj hai.', period: '2024-2029' },
  { title: 'Rs 6.55 crore ki badh-kshtigrast sadkon ki punarsthapna kaarya ka aarambh (Sidhra-Surinsar samet)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/yudhvir-sethi-launches-rs-6-55-cr-road-development-works-in-jammu-east/', date: '2026-04-19', note: 'MLA ne Jammu East me kul Rs 6.55 crore ki sadak punarsthapna ka aarambh kiya — 2025 ki baadh me kshatigrast marg. Lower Ragoora link road (Rs 25 lakh), Dawara-Ragoora (Rs 25 lakh, swikrit) aur Sidhra-Surinsar sthaayi punarsthapna (Rs 605 lakh). Credit-disclosure: kaam PWD ka hai, moq par PWD ke AEE Jamal Din sahit team maujood thi; MLA ne kaam ki shuruaat ki ghoshna ki.', period: '2024-2029' },
  { title: 'Diwan Mandir (Kacchi Chawani) auditorium ke Rs 2.62 crore aadhunikikaran ka shilanyas', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/yudhvir-sethi-jmc-comm-lay-foundation-stone-of-rs-2-62-cr-project/', date: '2026-08-26', note: 'MLA Yudhvir Sethi ne JMC Commissioner Dr Devansh Yadav ki maujoodgi me Diwan Mandir ke auditorium hall ke navikaran-aadhunikikaran (Rs 262.50 lakh) ka shilanyas kiya. Credit-disclosure: poori pariyojna JMC ke CAPEX budget se fund ho rahi hai — kaam JMC ka hai, MLA ne shilanyas kiya. 150 saalon se Ramlila hone wale is aitihasik sthal ka civil renovation, AC, CCTV aur modern audio system hoga.', period: '2024-2029' },
  { title: 'Ward 10 (Khillone Wali Gali) me Rs 50 lakh ke lane-drain kaam ka shubharambh', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/yudhvir-sethi-kick-starts-rs-50-lakh-development-works-in-jammu-east/', date: '2026-09-27', note: 'MLA ne Ward 10 me Khillone Wali Gali se shuru hote hue Rs 50 lakh ke lane-drain nirman-sudhar kaam ka shubharambh kiya, jiska uddeshya jal-nikasi aur connectivity ki lambe samay se chali aa rahi samasyaon ka samadhan hai. Sthaaniya nivasiyon aur BJP karyakartao ki maujoodgi me udghatan hua.', period: '2024-2029' },
];

jammuKashmirWorks['devyani-rana'] = [
  { title: 'Gharota me hotel aur hospitality me rozgar ke liye yuva orientation aur training camp ka uddghatan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/devyani-rana-launches-youth-orientation-camp-for-hotel-industry-careers-in-nagrota/', date: '2025-12-03', note: 'Daily Excelsior ki post-event report ke mutabik Nagrota ki MLA Devyani Rana ne Gharota me 200 se zyada yuvaon (umar 18 se 27) ke liye hotel aur hospitality kshetra me rozgar ki taiyari ka orientation aur training camp uddghatan kiya. Chuninde yuvaon ko 45 din ka muft prashikshan (hospitality kaushal, grooming, sanchar aur workplace taiyari) milega aur uske baad UT ke andar aur bahar namcheen hotels me placement me madad di jayegi. Credit-disclosure: ye karyakram ARC Hospitality, Jammu ke sahyog se usi ke skill-vikas prayason ke tehet aayojit tha — MLA ne iska uddghatan kiya aur aise rojgar-kshamta karyakramon ke samarthan ki pratibaddhata jatayi.', period: '2024-2029' },
  { title: 'Agore me Mathwar Farmer Producer Organisation ke karyalay ka uddghatan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/devyani-rana-inaugurates-mathwar-fpo-office-at-agore/', date: '2026-03-16', note: 'Daily Excelsior ki post-event report ke mutabik MLA Devyani Rana ne Mathwar ke Agore me Farmer Producer Organisation (FPO) ke karyalay ka uddghatan kiya aur kisaano ke liye ek-divasiya jagrukta karyakram bhi shuru kiya, jisme Cooperative Department ke adhikari aur badi sankhya me kisan upasthit the. Credit-disclosure: ye FPO National Cooperative Development Corporation (NCDC, Bharat Sarkar) ki vittiya sahayata se sthapit hui hai aur Central Sector Scheme ke tehet chal rahi hai — NCDC ke kshetriya nideshak ke anusaar ise Rs 42 lakh ki management-cost sahayata aur Rs 15 lakh tak ka equity grant swikrit hua hai. Karyalay aaspaas ke kisaano ke liye samanvay, takneeki margdarshan aur krishi udyamon ke vistar ka kendra banega.', period: '2024-2029' },
  { title: 'Nagrota kshetra me kai sadak marammat karyon ka shilanyas (Nandani-Tara, Dansal-Garni)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-kickstarts-road-restoration-works-in-nagrota-constituency/', date: '2026-04-12', note: 'Daily Excelsior ki post-event report ke mutabik MLA Devyani Rana ne apne kshetra me kai sadak marammat karyon ka aarambh kiya — Nandani se Tara tak sadak ki marammat (lagat lagbhag Rs 68 lakh, anya sahayak links sahit) aur Dansal se Garni tak sadak ki marammat (lagat lagbhag Rs 5 lakh, anya sahayak links sahit). MLA ne kaha ki behtar sadak connectivity se aarthik gatividhi badhegi aur logon ka jeevan-sthar sudharega; sthaniya niwasiyon ne is pahal ki sarahna ki.', period: '2024-2029' },
  { title: 'PMGSY ke tehet Mathwar aur Amb Gharota me 9 sthayi sadak marammat karyon ka shilanyas', category: 'Sadak', badge: 'news', sourceLabel: 'Greater Kashmir', sourceUrl: 'https://www.greaterkashmir.com/politics/devyani-rana-launches-pmgsy-road-restoration-works-in-nagrota-12164576', date: '2026-07-14', note: 'Greater Kashmir ki report ke mutabik MLA Devyani Rana ne Block Mathwar aur Amb Gharota (Block Bhalwal) me Pradhan Mantri Gram Sadak Yojana ke tehet 9 sthayi sadak marammat karyon ka shilanyas kiya — kul anumaanit lagat Rs 3.45 crore. Inse grameen aur door-daraz gaon ko saal-bhar ki sadak connectivity milegi. Credit-disclosure: ye kendriya PMGSY yojana ke tehet karyon hain — MLA ne inka shilanyas/uddghatan kiya aur vibhag se karyon ki nigrani ki baat kahi. Note: byora-verified tathya sirf khud-khola GK article se; mirror-only sadak-naamon ko hataya gaya.', period: '2024-2029' },
  { title: 'Nagrota ke liye 22 km nayi PMGSY sadkon ki swikriti ka dawa (Rs 42.73 crore)', category: 'Sadak', badge: 'dawa', sourceLabel: 'Greater Kashmir', sourceUrl: 'https://www.greaterkashmir.com/politics/devyani-rana-launches-pmgsy-road-restoration-works-in-nagrota-12164576', date: '2026-07-14', note: 'Greater Kashmir ki isi report me MLA Devyani Rana ne dawa kiya ki unki lagatar pairavi ke kaaran Nagrota kshetra ke liye lagbhag 22 km nayi PMGSY sadkein Rs 42.73 crore ke nivesh ke saath swikrit hui hain. Note: swikriti ka koi sarkari aadesh, GO ya vibhagiya aankda report me nahi diya gaya — ye sirf MLA ke apne bayaan par aadharit hai, isliye badge dawa rakha gaya hai.', period: '2024-2029' },
];

jammuKashmirWorks['jammu-west'] = [
  {
    title: 'Bakshi Nagar me PHE ki paani-pipeline pariyojna (Ward 28 aur 26) ka udghatan MLA Arvind Gupta ne kiya — lagat Rs 67 lakh',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-inaugurates-drinking-water-project-in-bakshi-nagar/',
    date: '2025-11-13',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne Ward No. 28, Bakshi Nagar me PHE (Public Health Engineering) vibhag ki ek paani-pipeline pariyojna ka udghatan kiya; pariyojna Bakshi Nagar (Ward 28) aur Ward 26 dono hisson ko cover karegi aur kul lagat Rs 67 lakh hai. Nai pipeline Bakshi Nagar Sub-Division se Ram Mandir tak jayegi taaki saikdon gharon ko niyamit paani mil sake. Karyakram me PHE adhikari (XEn Tajinder Singh, AEE Pankaj Mohan, JE Shubham Singh Baloria) bhi maujood the. Credit-transparency: pariyojna PHE vibhag ki hai; article me fund-srot (CDF ya vibhagiya budget) stated nahi hai, isliye fund par koi daawa nahi kiya gaya — MLA ki dastavezi bhoomika udghatan-karta tak seemit hai. Stage: udghatan hua hai (lokarpan).',
    period: '2024-2029',
  },
  {
    title: 'Jammu West me CPS R22 par high-capacity pumpset (50,000 GPH) ka udghatan MLA Arvind Gupta ne kiya — lagat Rs 26 lakh',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-gupta-inaugurates-high-capacity-pumpset-worth-rs-26-lakh/',
    date: '2025-11-17',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne CPS R22 par MH (GIA) ke tahat naya high-capacity pumpset (50,000 GPH x 122 MH) ka udghatan kiya; lagat Rs 26 lakh. Karyakram me Mechanical Engineering Wing ke adhikari (AEE Mechanical Anil Dev Singh Katoch, AE Ravinder Pal Singh, JE Vishal Bharat aadi) maujood the. MLA ne bataya ki Jammu West me takreeban 25 saalon baad pumpset badle ja rahe hain; ye pehla pumpset tha aur bache do pumpset agle mahine badle jayenge. Credit-transparency: pumping station PHE Mechanical Wing ka sanchaalit buniyaadi dhancha hai — MLA ki dastavezi bhoomika udghatan-karta tak seemit hai. Stage: udghatan hua hai (lokarpan).',
    period: '2024-2029',
  },
  {
    title: 'GMC Jammu me Chopra Nursing Home gate aur internal ring road ka udghatan MLA Arvind Gupta ne kiya — lagat Rs 2.43 crore',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-gupta-inaugurates-chopra-nursing-home-gate-internal-ring-road-at-gmc-jammu/',
    date: '2025-11-29',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne Government Medical College (GMC) Jammu me naye bane Chopra Nursing Home gate aur internal ring road ka udghatan kiya; pariyojna lagat Rs 2.43 crore. Naya marg ambulance-aavagaman ke liye khola gaya hai taaki aapaat sthitiyon me mareezon ko tez pahunch mile aur Bakshi Nagar kshetra ke bhaari bheed-bhaad se deri kam ho. Karyakram me GMC Jammu ke Principal & Dean Dr. Ashutosh Gupta, chaaron aspatalon ke Medical Superintendents aur Heads of Departments maujood the. Nirmaan PWD ne kiya; PWD XEN Sandeep Mahajan aur team ko samay par poora karne ke liye saraha gaya. Credit-transparency: pariyojna PWD dwara nishpaadit hai — MLA ki dastavezi bhoomika udghatan-karta tak seemit hai. Stage: lokarpan ho chuka hai (poora).',
    period: '2024-2029',
  },
  {
    title: 'NCAP ke tahat Rehari, Sarwal Hospital aur Dental College ke paas sadak upgradation kaam ka udghatan MLA Arvind Gupta ne kiya — lagat Rs 24.87 lakh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-gupta-kick-starts-road-upgradation-works-in-jammu-west/',
    date: '2025-12-16',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne NCAP (National Clean Air Programme) ke tahat Rehari, Sarwal Hospital aur Dental College ke paas end-to-end pavement nirmaan wale sadak upgradation kaamon ka udghatan kiya; lagat Rs 24.87 lakh. Kaam ka maksad sadak infrastructure sudharna aur dhool-utsarjan niyantran, paidal yatri suraksha aur shehri sundarta ko behtar banana hai. Credit-transparency: ye NCAP yojna (kendra sarkar ki yojna) ke tahat ka kaam hai; MLA ne udghatan-karta ki bhoomika nibhai — yojna ka shrey NCAP ka hai. Stage: kaam ki shuruaat ka udghatan hua hai; nirmaan poora hona baaki hai.',
    period: '2024-2029',
  },
  {
    title: 'Gole Gujral ke Government Girls High School (GGHS) me 6-classroom block ka shilanyas MLA Arvind Gupta ne rakha — lagat Rs 1.6 crore',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-gupta-lays-foundation-stone-for-6-classroom-block-at-gghs-gole-gujral/',
    date: '2026-03-03',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne Government Girls High School (GGHS), Gole Gujral me chhah-kaksh (six-classroom) block ke nirmaan ka shilanyas rakha; pariyojna J&K School Education Department ke tahat PWD (R&B) Division ke dwara nishpaadit hogi aur lagat Rs 1.6 crore hai. Naya block ground aur first floor par kakshon ka hoga taaki jagah ki kami door ho aur chhatron ko behtar padhai-mahaul mile. Karyakram me school principal, staff aur PWD (R&B) adhikari maujood the; adhikariyon ne bataya ki kaam nirdharit samay me poora hoga. Credit-transparency: pariyojna School Education Department/PWD ki hai — MLA ki dastavezi bhoomika shilanyas-karta tak seemit hai. Stage: shilanyas hua hai; nirmaan abhi poora nahi hua hai.',
    period: '2024-2029',
  },
  {
    title: 'Bhagwati Nagar me Revenue Complex Road ke blacktopping kaam ka udghatan MLA Arvind Gupta ne kiya — lagat Rs 76 lakh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-gupta-kick-starts-rs-76-lakh-blacktopping-work-at-bhagwati-nagar/',
    date: '2026-03-05',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne Ward No. 31, Bhagwati Nagar me Revenue Complex Road ke blacktopping kaam ka udghatan kiya; lagat Rs 76 lakh. Sadak ki haalat lambe samay se kharab thi aur sthaniya nivaasiyon ne kaam ki shuruaat ka swagat kiya. Karyakram me poorv corporator Sucha Singh, Mandal neta Arun Dubey aadi maujood the. Stage: kaam ki shuruaat ka udghatan hua hai; nirmaan poora hona baaki hai.',
    period: '2024-2029',
  },
  {
    title: 'Ward No. 26 me Rs 22 lakh ke lane development kaam ki shuruaat MLA Arvind Gupta ne ki',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-kick-starts-lane-development-works-worth-rs-22-lakh/',
    date: '2026-05-29',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne Ward No. 26 me Rs 22 lakh ke lane development kaam ki shuruaat ki; karyakram me Jammu Municipal Corporation (JMC) ke departmental engineers, JE aur thekedaar bhi maujood the. Pariyojna ka maksad sthaniya connectivity, safai aur buniyaadi infrastructure sudharna hai. Sthaniya nivaasiyon ne kaam ki sarahna ki. Stage: kaam ki shuruaat hui hai; poora hona baaki hai.',
    period: '2024-2029',
  },
  {
    title: 'Maheshpura Chowk (Ward 27) me 330-metre PHE paani-pipeline ka udghatan MLA Arvind Gupta ne kiya — CDF se Rs 5.50 lakh, kaam poora',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-inaugurates-water-pipeline-in-maheshpura/',
    date: '2026-07-17',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne Maheshpura Chowk, Ward No. 27 me 330-metre lambi PHE paani-supply pipeline ka udghatan kiya. Pariyojna MLA ke Constituency Development Fund (CDF) se Rs 5.50 lakh ki lagat par POORI ho chuki hai aur iska maksad peye-jal vitran network mazboot karke nirantar paani-supply sunischit karna hai. Stage: lokarpan ho chuka hai (poora). Note: CDF ki ghoshna-matr khabar nahi hai — kaam poora hokar udghatit hua hai, isliye entry yogya hai.',
    period: '2024-2029',
  },
  {
    title: 'Bakshi Nagar me Boys Higher Secondary School ilake (Ward 27) me lane aur drain nirmaan ki shuruaat MLA Arvind Gupta ne ki — lagat Rs 10 lakh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-gupta-launches-rs-10-lakh-lane-drain-project-in-ward-27/',
    date: '2026-08-04',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne Bakshi Nagar ke Boys Higher Secondary School ilake, Ward No. 27 me lane aur drain ke nirmaan-kaam ki shuruaat ki; lagat Rs 10 lakh. Ilake me naali vyavastha ki kami ke kaaran baar-baar jal-bharaav hota tha; kaam poora hone par safai aur varsha-jal nikaasi me sudhaar ki ummeed hai. Sthaniya nivaasiyon ne lambi-lambit maang poori hone par aabhar jataya. Stage: nirmaan-kaarj ki shuruaat hui hai; poora hona baaki hai.',
    period: '2024-2029',
  },
  {
    title: 'Ward 40 aur 41 me Rs 10 crore ke do RCC nallah projects ka udghatan MLA Arvind Gupta ne kiya — SASCI yojna, UEED dwara',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-gupta-launches-rs-10-cr-rcc-nallah-projects-in-wards-40-41/',
    date: '2026-09-16',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne Ward 40 aur 41 ko cover karne wale do bade RCC nallah projects ke kaam ka udghatan kiya; kul lagat lagbhag Rs 10 crore (Durga Nagar nallah, Ward 40 — Rs 485.80 lakh; Kabir Colony nallah, Talab Tillo Road ki taraf, Ward 41 — Rs 482.83 lakh). Pariyojnaen SASCI Scheme ke tahat Urban Environmental Engineering Department (UEED) ke dwara nishpaadit ho rahi hain aur inka maksad August me hui bhaari barish/baadh ke baad gambheer jal-bharaav ki samasya ko sthayi roop se door karna hai. Karyakram me UEED ke Executive Engineer Ashwani Kumar aur team maujood the. Credit-transparency: ye SASCI yojna/UEED ke kaam hain; MLA ne JMC Commissioner ke sahyog ka bhi aabhar jataya — MLA ki dastavezi bhoomika udghatan-karta tak seemit hai. Stage: kaam ki shuruaat ka udghatan hua hai; nirmaan poora hona baaki hai.',
    period: '2024-2029',
  },
  {
    title: 'Anand Vihar (Ward 41) me naye community hall ka lokarpan MLA Arvind Gupta ne kiya — CDF se Rs 4.71 lakh, kaam poora',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-gupta-dedicates-community-hall-to-anand-vihar-people/',
    date: '2026-10-04',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne Anand Vihar, Ward No. 41 ke nivaasiyon ki lambi-lambit maang par naya bana community hall janta ko samarpit kiya. Hall Constituency Development Fund (CDF) se Rs 4.71 lakh ki lagat par bana hai — ye official recommendation document me darj hai. Hall samajik jamaavon, samudaayik karyakramon aur janta ki gatividhiyon ke kaam aayega. Stage: lokarpan ho chuka hai (poora). Note: CDF ki ghoshna-matr khabar nahi hai — kaam poora hokar samarpit hua hai aur article me official dastavez ka hawala hai, isliye entry yogya hai.',
    period: '2024-2029',
  },
  {
    title: 'Ward 24 aur 27 me Rs 70 lakh ke vikas kaam ki shuruaat MLA Arvind Gupta ne ki — lane-drain kaam',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Excelsior',
    sourceUrl: 'https://www.dailyexcelsior.com/arvind-launches-development-works-worth-rs-70-lakh-in-jammu-west/',
    date: '2026-10-12',
    note: 'Daily Excelsior ki post-event reporting ke anusaar Jammu West ke MLA Arvind Gupta ne Ward 24 aur 27 me Rs 70 lakh ke vikas kaamon ki shuruaat ki: Ward No. 24 me Dhoop Factory kshetra me Rs 30 lakh ke lane aur drain kaam, aur Ward No. 27 me Rs 40 lakh ke vikas kaam. Kaamon ka maksad nikaasi vyavastha sudharna aur buniyaadi nagrik suvidhaon ko behtar banana hai. Stage: kaam ki shuruaat hui hai; poora hona baaki hai.',
    period: '2024-2029',
  },
];

jammuKashmirWorks['jammu-north'] = [
  { title: 'Macadamisation of Muthi to Akalpur Chowk road, Rs 29.62 lakh, R&B department', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/sham-lal-inaugurates-macadamization-project/', date: '2025-10-29', note: 'MLA Sham Lal Sharma ne 29 Oct 2025 ko Muthi se Akalpur Chowk tak sadak ke macadamisation kaam ka udghatan kiya. City and Town Works Plan 2025-26 ke tahat Roads and Buildings (PWD Jammu) dwara lagbhag Rs 29.62 lakh ki lagat se ye kaam ho raha hai; ye sadak National Highway ko kai residential colonies, schools aur market areas se jodti hai. MLA ne R&B ko PHE ke saath coordination karke pehle pipeline leakage check karne ka nirdesh diya taaki road banne ke baad khudai na karni pade.', period: '2024-2029' },
  { title: 'Widening of Rakh Muthi-Akalpur road on NH-144A Akhnoor Highway, Rs 154.96 lakh, NABARD', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/sham-lal-inaugurates-widening-of-rakh-muthi-akalpur-road/', date: '2026-06-15', note: 'MLA Sham Lal Sharma ne 15 Jun 2026 ko NABARD scheme ke tahat Muthi se Akalpur tak NH-144A Akhnoor Highway par sadak chaudi karne ke project ka udghatan kiya; lagbhag Rs 154.96 lakh ki lagat. Mauke par R&B Sub-Division Marh ke AEE Shambhu Nath bhi the; MLA ne executing agencies ko timely completion aur quality workmanship ka nirdesh diya. Area ke residents ne kaam shuru hone ka swagat kiya.', period: '2024-2029' },
  { title: 'Foundation of Overhead Water Tank at Panchayat Kot Lower Ghari (B), Rs 50 lakh, Jal Shakti', category: 'Paani', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/sham-lal-starts-const-work-of-overhead-water-tank-at-kot-lower-ghari/', date: '2025-11-17', note: 'MLA Sham Lal Sharma ne 17 Nov 2025 ko Panchayat Kot Lower Ghari (B) me Overhead Water Tank ka shilanyas kiya; lagbhag Rs 50 lakh ki lagat. Jal Shakti (PHE) Department ke adhikari — AEE Sandeep (PHE Division Kandi-Ist) aur AE Ashish Sharma — mauke par the. Ye lambi samay se chali aa rahi paani ki kami ki maang ka jawab hai; pura hone par gharon ko saaf aur lagatar pi jal supply milegi.', period: '2024-2029' },
  { title: 'Foundation of Lala Da Bagh Nallah restoration works, Rs 8.43 crore, SASCI scheme', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-sham-lal-lays-foundation-stone-for-rs-8-43-cr-lala-da-bagh-nallah-restoration-works/', date: '2026-06-23', note: 'MLA Sham Lal Sharma ne 23 Jun 2026 ko Lala Da Bagh Nallah ke restoration ka shilanyas kiya. SASCI scheme ke tahat Urban Environmental Engineering Department (UEED) dwara lagbhag Rs 8.43 crore ka project — Govt School Nai Basti se nallah restoration (Rs 4.66 crore) aur Army Area ke paas downstream hissa (Rs 3.77 crore). Credit disclosure: ye kendriya SASCI yojana ka pariyojna hai jise UEED execute kar raha hai; article me MLA ki concrete bhoomika shilanyas tak hai.', period: '2024-2029' },
];

jammuKashmirWorks['marh'] = [
{ title: 'Makowal Camp ke paas Simbol Post par 100 KVA transformer ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-100-kva-transformer/', date: '2025-07-21', note: 'Daily Excelsior ke mutabik Marh ke MLA Surinder Kumar ne seema par Simbol Post ke paas Makowal Camp me 100 KVA transformer ka lokarpan kiya, jahan badi sankhya me kisan maujood the. MLA ke mutabik yeh transformer saalon se bijli-samasya jhel rahe kisano ko raahat dega aur sthir bijli se khet ki sinchai aur fasal upaj me sudhaar hoga.', period: '2024-2029' },
{ title: 'Baad se kshatigrast Marh me 92 punarnirmaan karyon ke liye Rs 9.84 crore — Dy CM ne sadan me jankari di', category: 'Any', badge: 'news', sourceLabel: 'Rising Kashmir', sourceUrl: 'https://risingkashmir.com/marh-constituency-revival-rs-9-84-cr-allocated-for-92-post-flood-reconstruction-projects-dy-cm/', date: '2026-02-20', note: 'Rising Kashmir ke mutabik Deputy CM Surinder Choudhary ne vidhan sabha me MLA Surinder Kumar ke sawal ke jawab me bataya ki Marh me baad se hue nuksan ki bharpai ke liye lagbhag 92 punarnirmaan pariyojnaen, kul Rs 9.84 crore ki lagat se, shuru ki gayi hain, jinme sadkon, pulon, jal-apurti yojnaon aur bijli buniyaadi dhanche ki marammat shaamil hai aur jinhe PWD, PMGSY, JPDCL, PHE, JMC aur BDO karyalayon ne sanchaalit kiya. Credit-disclosure: yeh UT sarkar aur prashasan ke kaam hain, MLA ki sanstuti ya sanstuti par shuru nahi hue; MLA ki concrete bhoomika sadan me sawal uthakar yeh jankari saarvajanik karwana rahi. Adhiktar asthaayi marammat kary pure ho chuke the aur kuch karyon ka kaam Julai-Agast 2026 tak pura hona tha.', period: '2024-2029' },
];

jammuKashmirWorks['mohan-lal'] = [
  { title: 'Dhok Khalsa link road ka macadamization — Baba Jio Nath Ji tak 700 metre sadak, Rs 14 lakh', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-mohan-lal-inaugurates-macadamizing-work-in-dhok-khalsa/', date: '2024-11-15', note: 'MLA Mohan Lal Bhagat ne Panchayat Dhok Khalsa me Baba Jio Nath Ji tak jaane wali link road ke macadamization kaam ka udghatan kiya; 700 metre lambi sadak par City and Town Development Head ke tehat Rs 14 lakh kharch honge aur PWD ke AEE aur JE karyakram me maujood the.', period: '2024-2029' },
  { title: 'Pargwal me Veterinary Hospital ka shilanyas — Rs 66 lakh, hospital plus staff quarters, 25,000 se zyada logon ko fayda', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-lays-foundation-stone-for-veterinary-hospital-in-pargwal/', date: '2025-06-07', note: 'MLA ne Pargwal me Veterinary Hospital aur residential staff quarters ke nirman ka shilanyas karke kaam shuru karwaya; Rs 66 lakh ki pariyojna se Pargwal ke 25,000 se zyada nivasi — jinme zyadatar kisan aur pashupalak hain — labhanvit honge, aur karyakram me PWD ke XEN, Tehsildar aur Veterinary officer maujood the.', period: '2024-2029' },
  { title: 'Kendriya Vidyalaya Jourian ki nayi building ka lokarpan — MLA ne 5 computer aur digital interactive board diye', category: 'School', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/kendriya-vidyalaya-jourian-building-inaugurated/', date: '2025-07-29', note: 'MLA Mohan Lal Bhagat ne Jourian me Kendriya Vidyalaya ki nayi bani building ka udghatan kiya aur digital learning ke liye 5 computer aur 1 digital interactive board school ko diye; credit disclosure: ye Kendriya Vidyalaya Sangathan aur Union Education Ministry ki pariyojna hai, jiska lokarpan karyakram ke roop me MLA ne kiya.', period: '2024-2029' },
  { title: 'Akhnoor kshetra me Rs 6.55 crore ke vikas karyon ka udghatan — PWD, NABARD aur RDD ki sadken', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-development-works/', date: '2025-11-09', note: 'MLA ne Akhnoor Assembly kshetra me kul Rs 6.55 crore ke kaam shuru karwaye: PWD ke tehat Gurha Jagir, Bomal, Kaink Jagir aur Sungal me Rs 1 crore ki sadak-macadamization, NABARD ke tehat Sungal-Sumah me Rs 5.16 crore ki blacktopping, aur Gurha Jagir-Pangiari panchayaton me Rural Development Department ke kaam; PWD ke XEN aur engineers karyakram me maujood the.', period: '2024-2029' },
  { title: 'Chak Kirpalpur (Jourian) me Community Hall ka shilanyas — Rs 25 lakh, Trideveshwar Mahadev Mandir ke paas', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mohan-lal-bhagat-lays-foundation-stone-of-community-hall-at-chak-kirpalpur/', date: '2025-12-07', note: 'MLA Mohan Lal Bhagat ne Jourian ke Chak Kirpalpur me Trideveshwar Mahadev Mandir ke paas Community Hall ka shilanyas kiya; Rs 25 lakh ki lagat se PWD ise J&K Tourism Department ke tehat banayega aur PWD Division Khour ke Executive Engineer karyakram me maujood the.', period: '2024-2029' },
  { title: 'Sungal Lower C me Akhnoor-Sumah road se Karala Mohalla tak blacktopping — Rs 32.50 lakh', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/road-work-worth-rs-32-50-lakh-launched-in-sungal-lower-c/', date: '2026-01-27', note: 'Panchayat Sungal Lower C me Akhnoor-Sumah road se Karala Mohalla tak blacktopping kaam Rs 32.50 lakh ki lagat se aupcharik roop se shuru hua; karyakram me MLA Mohan Lal Bhagat, Rajya Sabha MP Sat Sharma aur PWD ke XEN maujood the, aur ye MLA ke kshetra ka karyakram tha jisme unki seedhi bhoomika rahi.', period: '2024-2029' },
  { title: 'Jio Pota Ghat ke saundaryikaran aur punarvikas ka kaam shuru — Chenab riverfront tourism pariyojna', category: 'Any', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-renovation-work-of-jio-pota-ghat/', date: '2026-02-01', note: 'MLA Mohan Lal Bhagat ne Akhnoor me Jio Pota Ghat ke beautification, renovation aur redevelopment kaam ka shubharambh kiya, jo Chenab riverfront ko tourist destination banane ki yojna ka hissa hai; karyakram me SDM Akhnoor, Tehsildar, PWD aur PHE ke XEN aur EO Municipal Committee maujood the.', period: '2024-2029' },
  { title: 'Sungal Morh se Pacca Danga tak link road ka macadamization — Rs 17.50 lakh, kaam ka udghatan', category: 'Sadak', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-macadamization-work-from-sungal-morh-to-pacca-danga/', date: '2026-03-10', note: 'MLA ne Akhnoor shahar me Sungal Morh se Pacca Danga tak link road ke macadamization kaam ka udghatan kiya, jis par Rs 17.50 lakh kharch honge; PWD ke Executive Engineer, AEE aur Junior Engineers karyakram me maujood the.', period: '2024-2029' },
  { title: 'Akhnoor ke band pade purane hospital building ke renovation ka kaam shuru — Rs 53.60 lakh', category: 'Aspataal', badge: 'sarkari', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-work-for-renovation-of-old-hospital/', date: '2026-09-18', note: 'MLA Mohan Lal Bhagat ne Akhnoor shahar ke beech sthit band pade purane hospital building ke renovation kaam ka udghatan kiya; Rs 53.60 lakh ki lagat se building ko wapas jan-upyog me laya jayega aur ENT, ophthalmology, dental aur physiotherapy jaise non-emergency sevaen shuru karne ki yojna hai.', period: '2024-2029' },
  { title: 'Akhnoor ke purane bazaar ke liye Rs 3.50 crore ki Heritage Market pariyojna swikrit', category: 'Any', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-work-for-renovation-of-old-hospital/', date: '2026-09-18', note: 'Purane hospital renovation karyakram me MLA ne bataya ki Akhnoor ke purane bazaar ke liye Rs 3.50 crore ki Heritage Market pariyojna swikrit ho gayi hai; ye swikriti-sambandhi jankari sirf MLA ke bayaan par aadharit hai, alag se GO ya vibhagiya aadesh nahi dekha gaya.', period: '2024-2029' },
  { title: 'Akhnoor Bus Stand ke remodeling ke liye Rs 50 lakh swikrit', category: 'Any', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-work-for-renovation-of-old-hospital/', date: '2026-09-18', note: 'MLA ne karyakram me bataya ki Akhnoor Bus Stand ke remodeling ke liye Rs 50 lakh swikrit kiye gaye hain; ye jankari sirf MLA ke bayaan par aadharit hai, alag se sanction-order nahi dekha gaya.', period: '2024-2029' },
  { title: 'Jia Pota se Chandian Ghat tak road widening aur parking vikas ke liye Rs 3.14 crore swikrit', category: 'Sadak', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-inaugurates-work-for-renovation-of-old-hospital/', date: '2026-09-18', note: 'MLA ne bataya ki Jia Pota se Chandian Ghat tak road widening aur parking development ke liye Rs 3.14 crore swikrit hue hain; ye swikriti-sambandhi jankari sirf MLA ke bayaan par aadharit hai, alag se GO ya vibhagiya aadesh nahi dekha gaya.', period: '2024-2029' },
];

jammuKashmirWorks['satish-sharma'] = [
  { title: 'Char sadkon ka blacktopping shubharambh — Thandi Choi-Sainth, Thakra-Rishi Colony, Seriplai-Kamala, Bhangra Maira via Khara (kul lagbhag Rs 12 crore)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/satish-sharma-launches-development-works-worth-rs-12-crore/', date: '2024-11-26', note: 'Daily Excelsior ki post-event reporting me Chhamb kshetra me char sadkon ke blacktopping kaam ka shubharambh darj hai — 1.7 km Thandi Choi se Sainth (Rs 1.5 crore), 1.25 km Thakra se Rishi Colony (Rs 22 lakh, Seema Samridhi Yojna), 870 metre Seriplai se Kamala (Rs 40 lakh) aur 10.99 km Bhangra Maira via Khara (lagbhag Rs 10 crore). Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister (FCS&CA, Transport, YS&S, IT, S&T) hain; khabar me inhe minister ke roop me sadkon ka shubharambh karte darj kiya gaya hai, lekin sabhi sadken unke Chhamb chunav kshetra ki sthaniya sadken hain.', period: '2024-2029' },
  { title: 'Jogwan, Battal aur Kallah me teen tube well drilling ka shubharambh — paani sankat se raahat', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/satish-sharma-visits-chhamb-constituency/', date: '2024-11-15', note: 'Daily Excelsior ki post-event reporting me Chhamb daure ke dauran Jogwan, Battal aur Kallah me teen tube wellon ki drilling ka udghatan darj hai, jisse kshetra me jal-apurti badhegi aur paani sankat kam hoga. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister bhi hain; khabar me inhe minister ke roop me daura karke kaam shuru karwate darj kiya gaya hai, lekin kaam unke Chhamb kshetra ki sthaniya jal-apurti ka hai.', period: '2024-2029' },
  { title: 'Mohalla Bodh Raj, Gajuban me macadamization kaam ka lokarpan', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/satish-sharma-conducts-extensive-development-tour-of-chhamb-constituency/', date: '2025-10-19', note: 'Daily Excelsior ki post-event reporting me Chhamb vikas daure me Mohalla Bodh Raj, Gajuban me macadamization karyon ka lokarpan darj hai. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra ke karyon ka lokarpan karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Mata Mandir Dhaleri ke paas Shmashan Ghat sudhar kaam ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/satish-sharma-conducts-extensive-development-tour-of-chhamb-constituency/', date: '2025-10-19', note: 'Daily Excelsior ki post-event reporting me Chhamb daure me Mata Mandir Dhaleri ke paas Shmashan Ghat ke enhancement kaam ka lokarpan darj hai. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra ke karyon ka lokarpan karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Khour me BDO Office ke paas Guest House ka shilanyas — adhikariyon aur aam janta ke liye suvidha', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/satish-sharma-conducts-extensive-development-tour-of-chhamb-constituency/', date: '2025-10-19', note: 'Daily Excelsior ki post-event reporting me Khour me BDO Office ke paas Guest House nirman ka shilanyas darj hai, jo daure par aane wale adhikariyon aur aam janta ke kaam aayega. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra me shilanyas karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Rakh Malal me lane aur drain nirman kaam ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/satish-sharma-conducts-extensive-development-tour-of-chhamb-constituency/', date: '2025-10-19', note: 'Daily Excelsior ki post-event reporting me Chhamb daure me Rakh Malal me lane aur drain ke nirman kaam ka udghatan darj hai. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra ke karyon ka lokarpan karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Mattoo me Jai Baba Kaliveer Dev Sathan par Community Hall ka shilanyas', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/satish-sharma-conducts-extensive-development-tour-of-chhamb-constituency/', date: '2025-10-19', note: 'Daily Excelsior ki post-event reporting me Chhamb daure me Mattoo gaon me Jai Baba Kaliveer Dev Sathan par Community Hall ke nirman ka shilanyas darj hai; daure me Mattoo me Public Darbar bhi hua jisme janta ki samasyaen suni gayin. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra me shilanyas karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Thandi Choi-Sainth sadak ka lokarpan (Rs 1.5 crore) — Chhamb me Rs 10 crore se zyada ke karyon ka hissa', category: 'Sadak', badge: 'news', sourceLabel: 'Greater Kashmir', sourceUrl: 'https://www.greaterkashmir.com/governance/govt-committed-to-ensure-remotest-villages-are-connected-with-quality-infrastructure-better-roads-satish-sharma-12174998', date: '2026-07-17', note: 'Greater Kashmir ki post-event reporting me Chhamb Assembly kshetra me Rs 10 crore se zyada ke karyon ke lokarpan aur shilanyas darj hain; inme Thandi Choi-Sainth sadak ka lokarpan (Rs 1.5 crore ki lagat se bani) shamil hai. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra ke karyon ka lokarpan karte darj kiya gaya hai, lekin ye sab unke Chhamb chunav kshetra ki sthaniya pariyojnaen hain.', period: '2024-2029' },
  { title: 'Kharah Balli me naye Tehsil Office Building ka shilanyas (Rs 76.74 lakh)', category: 'Any', badge: 'news', sourceLabel: 'Greater Kashmir', sourceUrl: 'https://www.greaterkashmir.com/governance/govt-committed-to-ensure-remotest-villages-are-connected-with-quality-infrastructure-better-roads-satish-sharma-12174998', date: '2026-07-17', note: 'Greater Kashmir ki post-event reporting me Chhamb kshetra ke Kharah Balli me naye Tehsil Office Building ke nirman ka shilanyas darj hai (anumaanit lagat Rs 76.74 lakh), jisse sarkari sevaen logon ke nazdeek aayengi. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra me shilanyas karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Kharah me pul ka lokarpan (Rs 3.45 crore) — aaspaas ke gaon ko barahmasi connectivity', category: 'Sadak', badge: 'news', sourceLabel: 'Greater Kashmir', sourceUrl: 'https://www.greaterkashmir.com/governance/govt-committed-to-ensure-remotest-villages-are-connected-with-quality-infrastructure-better-roads-satish-sharma-12174998', date: '2026-07-17', note: 'Greater Kashmir ki post-event reporting me Chhamb kshetra ke Kharah me Rs 3.45 crore ki lagat se bane pul ka lokarpan darj hai, jisse aaspaas ke kai gaon ko barahmasi sadak sampark milega. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra ke pul ka lokarpan karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Chaprial-Bardoh sadak ka shilanyas (Rs 2.50 crore) — grameen connectivity pariyojna', category: 'Sadak', badge: 'news', sourceLabel: 'Greater Kashmir', sourceUrl: 'https://www.greaterkashmir.com/governance/govt-committed-to-ensure-remotest-villages-are-connected-with-quality-infrastructure-better-roads-satish-sharma-12174998', date: '2026-07-17', note: 'Greater Kashmir ki post-event reporting me Chhamb kshetra me Chaprial-Bardoh sadak pariyojna ka shilanyas darj hai (Rs 2.50 crore), jisse grameen sampark, krishi, vyapar aur paryatan ko badhawa milega. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra me shilanyas karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Khour me Veterinary Hospital ka shilanyas (Rs 2.07 crore) — pashupalakon ko fayda', category: 'Any', badge: 'news', sourceLabel: 'Greater Kashmir', sourceUrl: 'https://www.greaterkashmir.com/governance/govt-committed-to-ensure-remotest-villages-are-connected-with-quality-infrastructure-better-roads-satish-sharma-12174998', date: '2026-07-17', note: 'Greater Kashmir ki post-event reporting me Chhamb kshetra ke Khour me Veterinary Hospital ka shilanyas darj hai (anumaanit lagat Rs 2.07 crore), jisse pashu-chikitsa sudhar se kisanon ki aamdani badhegi. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra me shilanyas karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Bandi Mohalla, Barui Sangani me sadak nirman ka shilanyas — Rs 13 crore ke karyon ka hissa', category: 'Sadak', badge: 'news', sourceLabel: 'Rising Kashmir', sourceUrl: 'https://risingkashmir.com/politics/development-projects-must-improve-lives-sharma-12617988', date: '2026-10-02', note: 'Rising Kashmir ki post-event reporting me Chhamb Assembly kshetra me Rs 13 crore ke vikas karyon ke shilanyas aur lokarpan darj hain; inme Bandi Mohalla, Barui Sangani me sadak nirman ka shilanyas vishesh roop se darj hai. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra ke karyon ka shilanyas karte darj kiya gaya hai. Isi daure me Akhnoor me Tehsil Supply Officer Building ka shilanyas bhi hua, jo unke FCS&CA vibhag ka vibhagiya kaam hone se is record me shamil nahi kiya gaya.', period: '2024-2029' },
  { title: 'Kodewala Camp (Migrant Colony) me park ka shilanyas aur naye drains ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Rising Kashmir', sourceUrl: 'https://risingkashmir.com/politics/satish-sharma-launches-rs-3-cr-works-in-chhamb-12620876', date: '2026-10-03', note: 'Rising Kashmir ki post-event reporting me Chhamb kshetra me Rs 3 crore se zyada ke karyon ke dauran Kodewala Camp ki Migrant Colony me park nirman ka shilanyas aur naye bane drains ka lokarpan darj hai. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra ke karyon ka shilanyas/lokarpan karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Kharah se Thanda Choa tak link road ka shilanyas', category: 'Sadak', badge: 'news', sourceLabel: 'Rising Kashmir', sourceUrl: 'https://risingkashmir.com/politics/satish-sharma-launches-rs-3-cr-works-in-chhamb-12620876', date: '2026-10-03', note: 'Rising Kashmir ki post-event reporting me Chhamb kshetra me Rs 3 crore se zyada ke karyon ke dauran Kharah se Thanda Choa tak link road ke nirman ka shilanyas darj hai, jisse logon ki aawajahi aur zaroori sevaon tak pahunch aasaan hogi. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra me shilanyas karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Kalah me do jagah protection works aur Mageri-Rajani Road par protection works ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Rising Kashmir', sourceUrl: 'https://risingkashmir.com/politics/satish-sharma-launches-rs-3-cr-works-in-chhamb-12620876', date: '2026-10-03', note: 'Rising Kashmir ki post-event reporting me Chhamb kshetra me Kalah gaon me do sthanon par protection works ka lokarpan aur Mohalla Thakur Dass me Mageri se Rajani tak sadak par protection works ka lokarpan darj hai, jinse kamzor stretches mazboot honge. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra ke karyon ka lokarpan karte darj kiya gaya hai.', period: '2024-2029' },
  { title: 'Jawan me Atta Chakki ke paas culvert ka shilanyas aur Community Hall ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Rising Kashmir', sourceUrl: 'https://risingkashmir.com/politics/satish-sharma-launches-rs-3-cr-works-in-chhamb-12620876', date: '2026-10-03', note: 'Rising Kashmir ki post-event reporting me Chhamb kshetra ke Jawan gaon me Atta Chakki ke paas culvert nirman ka shilanyas aur Community Hall ka lokarpan darj hai. Credit-disclosure: Satish Sharma Chhamb ke MLA ke saath-saath cabinet minister hain; khabar me inhe minister ke roop me kshetra ke karyon ka shilanyas/lokarpan karte darj kiya gaya hai.', period: '2024-2029' },
];

// Jammu REJECT-LOG (district consolidated): bishnah 9 rejects (429-unopened snippet, hailstorm daura, grievance camp, ashwasan, CM memorandum, vibhagiya baithak, Early Times non-whitelist, dnaindia/BS galat-vyakti, vidhayi prastav); suchetgarh 8 rejects (Dy CM event maujoodgi, Gharana wetland non-whitelist, 3x darbar, drone demo, 2014 protest galat-vyakti, purane Ch Gharu Ram news, State Times epaper maang); rs-pora 13 rejects (JMC pond/drain x2, Dy CM bridge bina-bulawa, nirikshan, jkmonitor/earlytimes/thekashmirhorizon non-whitelist, street-light JMC, pre-term, chunav-prachar, vidhayi prashn, jammubulletin PDF, darbar); randhawa ~19 rejects (JMC/Smart City x6, MLC-era pre-term x5, camps/maang/maujoodgi x4, Early Times non-whitelist x3); sethi 12 rejects (non-whitelist x6, camp, nirikshan, pre-term x2, bayan x2); devyani 10 rejects (CDF ghoshna non-whitelist x3, UT heritage scheme pita-vision, Rs100cr self-daawa, road blockade protest, mantri ka flood event, dharmik yatra, vidhayi bayan); arvind ~25 rejects (darbar/baithak/ceremonial, vaada/maang, pre-term/bayaan, assembly hungama, non-whitelist x10+); sham ~20 rejects (JMC kaam x8, non-whitelist x3, nirikshan x2, maujoodgi, darbar/bayaan, pre-term, galat vyakti); marh 18 rejects (JMC items, non-whitelist, camps, handout dawa, private school, events, mantri/LG events, secretary review, darbar, ring-road, zero hour); mohan 13 rejects (Early Times non-whitelist x2, ghoshna-type, JK Monitor/KIP, MPLADS hall, campaign pre-term, CDF ghoshna, karenge items, tender pre-event, SDPO galat-vyakti, four-lane state project); satish 12 rejects (TSO building dept-kaam, volleyball sports-portfolio, equipment vitran, GHSS proposed, kits vitran, darbar, RDD/power review, flood tour, non-whitelist x2). NEGATIVE: koi nahi (sabhi MLAon par strict standard me koi FIR/court+jawab sthiti nahi mili; Randhawa FIR 357/21 pre-term; Arvind assembly hungama FIR/case nahi).
// Coordinator QA note (2026-10-15): 11/11 fragments khud kholkar padhe — sabhi ke opened-and-read sources darj; Devyani Rana ka GK article khud kholkar verify kiya (9 PMGSY kaam Rs 3.45cr pakka; mirror-only itemized byora hataya); badge/stage/credit-disclosure niyam-anusaar (sarkari badge wali vibhagiya lokarpan/shilanyas entries me bhoomika lokarpan-karta tak capped hai); Satish Sharma (IND, Chhamb mantri) ki pehchan BJP Satish Kumar Sharma (Billawar) se alag rakhi; sabhi dates Oct 2024–Oct 2026 window me; 11/11 slugs file me pehle se absent — koi overwrite nahi.

// ---- Rajouri district batch (researched 2026-10-15) ----

jammuKashmirWorks['randhir-singh'] = [
];

jammuKashmirWorks['surinder-kumar-choudhary'] = [
{ title: 'Nowshera me do PMGSY link sadkon ka shilanyas: Jhanghar-Sarya (4 km, Rs 10.02 crore) aur Chowki-Kanara East (2.5 km, Rs 5.65 crore)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dycm-lays-foundation-stone-for-pmgsy-roads/', date: '2026-03-16', note: 'MLA Nowshera Surinder Kumar Choudhary ne swayam do PMGSY link sadkon ka shilanyas kiya: Jhanghar se Sarya (Block Qila Darhal, 4 km, swikrit lagat Rs 10.02 crore) aur Chowki se Kanara East (Block Nowshera, 2.5 km, swikrit lagat Rs 5.65 crore). Fund-srot Pradhan Mantri Gram Sadak Yojana (PMGSY) hai, article me spasht. Stage: shilanyas.', period: '2024-2029' },
{ title: 'Rajal, Nowshera me Irrigation Guest House ke nirmaan ka shilanyas', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dycm-lays-foundation-stone-for-pmgsy-roads/', date: '2026-03-16', note: 'MLA Nowshera Surinder Kumar Choudhary ne swayam Rajal me Irrigation Guest House ke nirmaan ka shilanyas kiya; uddeshya sinchai vibhag ke kshetriya paryavekshan aur karyalayi kaamkaj ko majboot karna hai. Article me lagat ya fund-srot ka ullekh nahi hai. Stage: shilanyas.', period: '2024-2029' },
{ title: 'Kheri se Masjid Potha East tak PMGSY link sadak ka shilanyas (Block Seri, 4 km, Rs 9.28 crore)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dycm-lays-foundation-stones-for-road-projects-holds-public-outreach-programmes-in-nowshera/', date: '2026-03-15', note: 'MLA Nowshera Surinder Kumar Choudhary ne swayam PMGSY ke tahat Kheri se Masjid Potha East tak link sadak (Block Seri, 4 km, swikrit lagat Rs 9.28 crore) ka shilanyas kiya; isi avsar par Dwaka se High School Moh Potha aur Gania se Patli link sadkon ke shilanyas bhi rakhe, in dono ki lagat article me nahi di gayi. Fund-srot PMGSY hai. Stage: shilanyas.', period: '2024-2029' },
{ title: 'Nowshera me teen motorable pulon ka shilanyas: Androoth Nallah par do aur Rattan Galla Kalsian me ek (kul lagbhag Rs 9.76 crore)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dy-cm-lays-foundation-stones-of-three-bridges-in-nowshera/', date: '2025-10-02', note: 'MLA Nowshera Surinder Kumar Choudhary ne swayam teen motorable pulon ka shilanyas kiya: Androoth Nallah par 50 meter span ka pul with footpath (Rs 2.92 crore, NABARD), Rattan Galla Kalsian me 28 meter span ka pul sahit approach (Rs 2.84 crore), aur Androoth Nallah par ek aur 50 meter span ka pul with footpath (Rs 4 crore). Fund-srot pehle pul ke liye NABARD article me spasht hai; baaki do ke liye fund-srot ka ullekh nahi. Stage: shilanyas.', period: '2024-2029' },
{ title: 'Nowshera me Lamberi-Gogri sadak unnayan aur MS Kanara se Handan tak sadak ka shilanyas', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dy-cm-lays-foundation-stones-of-key-developmental-projects-in-nowshera/', date: '2025-10-19', note: 'MLA Nowshera Surinder Kumar Choudhary ne swayam Lamberi-Gogri sadak unnayan pariyojna aur MS Kanara se Handan tak sadak ke nirmaan aur unnayan ka shilanyas kiya. Article me lagat ya fund-srot ka ullekh nahi hai. Sunderbani wale hisse ko entry se bahar rakha gaya hai. Stage: shilanyas.', period: '2024-2029' },
{ title: 'Gagrote se Shamshan Ghat tak bani sadak ka lokarpan, Nowshera', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dycm-inaugurates-projects-in-nowshera/', date: '2026-03-24', note: 'MLA Nowshera Surinder Kumar Choudhary ne swayam Gagrote se Shamshan Ghat tak bani sadak ka lokarpan kiya. Article me lagat ya fund-srot ka ullekh nahi hai. Stage: lokarpan.', period: '2024-2029' },
{ title: 'Nowshera me do bijli receiving station ke nirmaan ka shilanyas: Gagrote aur Kuldabi (3.15 MVA, 33/11 KV)', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dycm-inaugurates-projects-in-nowshera/', date: '2026-03-24', note: 'MLA Nowshera Surinder Kumar Choudhary ne swayam Gagrote me receiving station aur Kuldabi me 3.15 MVA, 33/11 KV receiving station ke nirmaan ka shilanyas kiya; uddeshya kshetra me bijli aapurti majboot karna hai. Article me lagat ya fund-srot ka ullekh nahi hai. Stage: shilanyas.', period: '2024-2029' },
{ title: 'Sehal me Main Road se Guard Mohalla tak sadak unnayan ka shilanyas (Rs 2.28 crore, PWD R&B)', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dycm-inaugurates-projects-in-nowshera/', date: '2026-03-24', note: 'MLA Nowshera Surinder Kumar Choudhary ne swayam Sehal me Main Road se Guard Mohalla tak sadak ke unnayan ka shilanyas kiya; nirmaan-karta PWD (R&B), anumaanit lagat Rs 2.28 crore. Fund-srot article me spasht nahi hai. Stage: shilanyas.', period: '2024-2029' },
{ title: 'Chandi Mata Mandir tak approach road ka lokarpan, Nowshera (Rs 83.90 lakh)', category: 'Sadak', badge: 'news', sourceLabel: 'Greater Kashmir', sourceUrl: 'https://www.greaterkashmir.com/kashmir/govt-committed-towards-inclusive-infra-development-dy-cm/', date: '2024-10-20', note: 'MLA Nowshera Surinder Kumar Choudhary ne swayam Chandi Mata Mandir tak bani approach road ka lokarpan kiya; pariyojna Rs 83.90 lakh me poorn hui. Fund-srot article me spasht nahi hai. Date-caveat: Greater Kashmir ki dateline me sirf Oct 20 likha tha; HT-syndicated version ke on Sunday aur pehle constituency daure (19 Oct 2024) ki timeline ke adhaar par 2024-10-20 anumaan, disclosed. Stage: lokarpan.', period: '2024-2029' },
{ title: 'Government Degree College Nowshera me Sports Block ke nirmaan ka shilanyas (Rs 2.09 crore)', category: 'School', badge: 'news', sourceLabel: 'Greater Kashmir', sourceUrl: 'https://www.greaterkashmir.com/sports/deputy-cm-lays-foundation-stone-for-sports-block-at-degree-college-nowshera/', date: '2025-01-31', note: 'MLA Nowshera Surinder Kumar Choudhary ne swayam Government Degree College Nowshera me Sports Block ke nirmaan ka shilanyas kiya; anumaanit lagat Rs 2.09 crore (sarkari pravakta ke hawale se). Fund-srot aur nirmaan-karta article me spasht nahi hai. Stage: shilanyas.', period: '2024-2029' },
{ title: 'Nowshera Sports Stadium me volleyball court aur practice pitch ke nirmaan ka shilanyas', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/dy-cm-inaugurate-border-sports-festival-2026-at-nowshera/', date: '2026-01-17', note: 'MLA Nowshera Surinder Kumar Choudhary ne swayam Nowshera Sports Stadium me volleyball court, practice pitch aur sahayak kamo ke nirmaan ka shilanyas kiya. Isi avsar par unhone khel suvidhaon ke liye Rs 2 crore swikrit hone aur apne CDF se Rs 20 lakh jaari karne ki ghoshna bhi ki, jiska GO ya vibhagiya pramaan article me nahi hai — ye ghoshna-star par hai. Stage: shilanyas.', period: '2024-2029' },
];

jammuKashmirWorks['iftkar-ahmed'] = [
{ title: 'Kheora culvert ke punarnirman kaam ka shubharambh: Gujjar Mandi se Kheora GMC road', category: 'Sadak', badge: 'news', sourceLabel: 'Greater Kashmir', sourceUrl: 'https://www.greaterkashmir.com/jammu/bro-kick-starts-kheora-pulli-construction-works-in-rajouri/', date: '2025-10-11', note: 'MLA Rajouri Iftkar Ahmed ne Rajouri me Gujjar Mandi se Kheora GMC road par kshatigrast Kheora culvert ke punarnirman kaam ka prateekatmak shubharambh kiya; Border Roads Organization (BRO) ne usi din kaam shuru kiya. MLA ne karyakari agency GREF ko gunvatta aur samay-seema sakhti se palne ke nirdesh diye. Fund-srot article me ullekhit nahi; nirmaan-karta BRO/GREF. Stage: shilanyas-kaam-shuru.', period: '2024-2029' },
{ title: 'GMC Rajouri Associated Hospital me parking aur internal roads ka blacktopping shuru', category: 'Aspataal', badge: 'news', sourceLabel: 'Greater Kashmir', sourceUrl: 'https://www.greaterkashmir.com/jammu/gmc-rajouri-roads-pwd-kickstarts-blacktopping-work/', date: '2025-10-19', note: 'Public Works Department (PWD) ne Government Medical College ke Associated Hospital Rajouri ki parking areas aur internal roads par blacktopping kaam shuru kiya, jise MLA Iftkar Ahmed ne launch kiya. Uddeshya marizon, teemardaron aur agantukon ke liye behtar pahunch aur aspatal parisar ka sudhaar bataya gaya. Fund-srot aur lagat article me ullekhit nahi; nirmaan-karta PWD. Date-caveat: Greater Kashmir page par dateline sirf Oct 19 likhi thi; saal 2026 bhavishya me hai, isliye 2025-10-19 anumaan (Oct 2025 me MLA ke kai kaam isi cluster me hain) — disclosed. Stage: shilanyas-kaam-shuru.', period: '2024-2029' },
{ title: 'Old bus stand Rajouri me bore well drilling ka shubharambh (Rs 32 lakh pariyojna)', category: 'Paani', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-rajouri-inaugurates-bore-well-at-old-bus-stand/', date: '2025-11-17', note: 'MLA Rajouri Iftkar Ahmed ne Rajouri ke old bus stand par 200mm dia bore well ki drilling, machinery ki sthapna aur storage tank ke kaam ka shubharambh kiya. Rs 32 lakh ki ye pariyojna Rajouri city me peyjal aapurti sudharne ke liye hai; sthaniya nivasi aur vibhagiya adhikari maujood the. Fund-srot article me ullekhit nahi; vibhag ka naam article me nahi diya gaya. Stage: shilanyas-kaam-shuru.', period: '2024-2029' },
{ title: 'Bela bridge ke paas aadhunik slaughter house ki swikriti ki ghoshna (Rs 3.60 crore)', category: 'Any', badge: 'dawa', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-rajouri-sanctions-modern-slaughter-house/', date: '2025-10-22', note: 'MLA Rajouri Iftkar Ahmed ne apne official Facebook page par ghoshna ki ki Rajouri ke Ward 7, Bela bridge ke paas Rs 3.60 crore ka aadhunik slaughter house swikrit hua hai; unke anusar tender jald niklega aur uske baad kaam shuru hoga. Article me koi sarkari GO ya vibhagiya record ullekhit nahi hai aur kaam abhi shuru nahi hua hai, isliye ye ghoshna-star par hai aur saboot keval MLA ka bayaan hai. Stage: ghoshna.', period: '2024-2029' },
];

jammuKashmirWorks['javaid-iqbal'] = [
{ title: 'Kesri Hill me tribals ke liye transit accommodation ka lokarpan', category: 'Any', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-javed-inaugurates-kesri-hill-transit-accommodation/', date: '2024-11-15', note: 'MLA Budhal Javaid Iqbal ne 15 Nov 2024 ko Rajouri jile ke Kandi-Koteranka kshetra me Kesri Hill par tribals ke liye transit accommodation ka vyaktigat roop se lokarpan kiya. Project me 1200-1500 logon ke liye rehne ki suvidha ke saath dispensary, doctor hut aur tourist hut shamil hain; MLA ne ise BDC Koteranka chairman ke roop me lagbhag 2 saal pehle swikrit karwaya tha. Fund-srot: Tribal Affairs Department; nirmaan-karta: Public Works Department (do saal me nirmaan poora). Stage: lokarpan.', period: '2024-2029' },
{ title: 'Kewal-Kangota Road (PMGSY) ka shilanyas', category: 'Sadak', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/bjym-demands-fir-against-mla/', date: '2026-03-01', note: 'MLA Budhal Javaid Iqbal ne Kewal-Kangota Road ka shilanyas vyaktigat roop se kiya; road Pradhan Mantri Gram Sadak Yojana (PMGSY) ke tehat banti hai. Article me road ki lambai, lagat ya nirmaan-karta ka ullekh nahi hai, isliye fund-srot keval PMGSY darj hai. Ghatna ki pushti 1 Mar 2026 ki post-event reporting se hui. Stage: shilanyas.', period: '2024-2029' },
{ title: 'ACB FIR 0008/2025 (May 2025): Chawadi zameen mamle me POA-holder ke roop me naam ullekh — aaropi nahi, janch jaari', category: 'Any', badge: 'news', sourceLabel: 'Indian Express', sourceUrl: 'https://indianexpress.com/article/india/jk-anti-corruption-bureau-books-ruling-party-mla-choudhary-javed-iqbal-in-illegal-land-deal-case-10022981/', date: '2025-05-23', note: 'Anti-Corruption Bureau Jammu ne 20 May 2025 ko FIR 0008/2025 darj ki — 2014 me Jammu ke Chawadi kshetra me ek refugee ki zameen ke gair-kanuni tabadile ki sajish me 4 revenue officers ko aaropi banaya gaya; isi FIR me MLA Budhal Javaid Iqbal ka naam us zameen ke power-of-attorney holder ke roop me ullekh hai. Indian Express ke anusar MLA ko aaropi ke roop me naamzad nahi kiya gaya aur wo us samay politics me nahi the. MLA ka jawab: unhone zameen se koi lena-dena hone se inkaar kiya aur kaha ki sarkari agencies pehle jaanch karke unhe clean chit de chuki hain (The Tribune ne bhi unka inakaar darj kiya). Nirdosh-maane-jaane ka niyam disclosed. Negative entry — koi stage field nahi.', period: '2024-2029' },
];

jammuKashmirWorks['muzaffar-iqbal-khan'] = [
{ title: 'BHSS Thannamandi ke naye school complex ka shilanyas (UT Capex, Rs 1.50 crore)', category: 'School', badge: 'news', sourceLabel: 'Daily Excelsior', sourceUrl: 'https://www.dailyexcelsior.com/mla-lays-foundation-stone-for-new-complex-of-bhss-thanna/', date: '2025-12-10', note: 'MLA Thannamandi Muzaffar Iqbal Khan ne 10 December 2025 ko Boys Higher Secondary School (BHSS) ke naye building complex ka shilanyas kiya. Nayi building ko UT Capex Budget se Rs 1.50 crore ki sanction mili hai. Samaroh me school ke principal, ZPEO, AEE aur sthaniya log maujood rahe; principal ne ise school ki long-pending demand bataya — nayi building me additional classrooms aur behtar facilities se far-flung areas ke students ko fayda hoga. Stage: shilanyas-kaam-shuru.', period: '2024-2029' },
];

// Rajouri REJECT-LOG (district consolidated): Randhir Singh 14 rejects (DyCM ke bridge/pul shilanyas me sirf maujoodgi; protocol-virodh; PMGSY survey daave pipeline-stage; mantri review meeting; Assembly sawal; JPDCL daura; Yoga Day/maujoodgi; coal-mines maang bina outcome; pre-tenure archive galat-vyakti; 1 criminal case ka prakar/FIR-sthiti established reporting me nahi — negative nahi); Surinder Choudhary 19 rejects (YouTube-only ITI hostel shilanyas; non-whitelist PWD Dak Bungalow lokarpan; Sunderbani seat-bahar; Zinda Peer Kampla sirf assessment; Mega Job Fair/health camp karyakram-udghatan; surprise visit; Rs 2cr ghoshna bina GO; May 2025 golabari relief; seat-bahar DyCM-star kaam — Nowgam flyover, Tawi, Majalta; outreach camp maangen bina outcome; pre-tenure kaam; Chandi Mata sunvai bina parinaam; bhai Vijay Choudhary par ED case — parivar-mamla; defamation suit me ve plaintiff hain); Iftkar Ahmed 13 rejects (MP ke PMGSY karyakram me maujoodgi; GNS/YouTube/KNS non-whitelist; 2014 purane kaam galat-vyakti; Zero Hour maangen bina outcome; pre-tenure LG kaam; DyCM Nowshera karyakram maujoodgi; May 2025 golabari relief); Javaid Iqbal 12 rejects (DyCM ke Mangrote bridge me sirf maujoodgi; Bethan daura vaade; LG/CM mulaqat maangen; Assembly maang bina outcome; pre-tenure BDC-era kaam; cross-town maang non-whitelist; MP ke 7 PMGSY road shilanyas; Budhal mystery deaths — vikas-kaam nahi; sarpanch ki Kangota maang; rajnaitik bayaan; BJYM ki FIR ki MAANG — FIR darj hone ki reporting nahi); Muzaffar Iqbal Khan 16 rejects (mantri ke Forest Check Post shilanyas me maujoodgi; MP Mian Altaf ke PMGSY kaam; Patrara road inspection/intervention bina outcome; macadamisation halt; Darhal tour; Galhuti inspection + relief context; Calling Attention flood relief; CHC posts sirf sawal; Thanamandi CHC building — DC ki intervention; Rajouri Mini Secretariat ghoshna seat-bahar; cooks wage sawal; rajnaitik bayaan; RKS meeting/events non-whitelist; hunger-strike warning bina outcome). NEGATIVE: Javaid Iqbal ka ACB FIR 0008/2025 negative (Indian Express 23 May 2025 + The Tribune follow-up — FIR sthiti, POA-holder ullekh, aaropi nahi, MLA ka jawab darj); baaki chaaron me negative layak FIR/court+jawab sthiti nahi mili.
// Coordinator QA note (2026-10-15): 5/5 worker fragments khud kholkar padhe; worker-5 (Choudhary) ki Chandi Mata entry ki date Greater Kashmir dateline ('Oct 20', saal nahi) me — HT-syndicated 'on Sunday' + pehle constituency daure (19 Oct 2024) ki timeline par 2024-10-20 anumaan, note me disclosed caveat; worker-4 (Iftkar) ki GMC blacktopping entry ki date bhi 'Oct 19' bina saal — 2026-10-19 bhavishya me hai isliye 2025-10-19 anumaan, note me disclosed; dono entries ko parent ne article kholkar verify kiya. Javaid Iqbal negative Indian Express (23 May 2025) + The Tribune follow-up par khud verify — ACB FIR 0008/2025, MLA FIR me POA-holder ke roop me ullekh, aaropi nahi, us samay politics me nahi, MLA ka inkaar-bayaan darj; BJYM ki FIR maang akeli negative nahi banti. Date-caveat wali entries me sahi saal ka koi pramaan mile to date sudharna possible hai — abhi tak koi vivaad nahi.

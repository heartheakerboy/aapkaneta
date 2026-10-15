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

// District batch 2: Baramulla — pending
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

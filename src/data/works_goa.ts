// Goa works foundation — district batches yahan judenge (works_kerala.ts pattern par).
// Vartaman sabha: 2022 chunav (karyakaal 2022–2027). Mining shuru nahi hui hai.
export const goaWorks: Record<string, any[]> = {};

// ---- North Goa district batch (researched 2026-10-15) ----

// North Goa worker fragment — Arolkar (Mandrem), Arlekar (Pernem), researched 2026-10-15.

goaWorks['jit-vinayak-arolkar'] = [
  {
    title: 'Keri gaon me Rs 4 crore ki underground paani pipeline pariyojna ka shilanyas MLA Jit Arolkar ne kiya, jisse 30 saalon ke baad gaon me pehli baar nal se paani pahunchega',
    category: 'Paani',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'The Navhind Times, Nov 2025',
    sourceUrl: 'https://navhindtimes.in/goanews/after-30-years-keri-village-to-recieve-tap-water-supply/',
    date: '2025-11-14',
    note: 'Mandrem MLA Jit Arolkar ne Keri gaon me Rs 4 crore ki underground water pipeline pariyojna ka shilanyas kiya; naya pipeline network pure gaon ko cover karega aur Tuem ke 30 MLD water treatment plant se Corgao aur Arambol hote hue judega, taaki Tuem plant ke chalu hone par Keri ke har ghar me piped paani pahunche. Keri (Querim-Tiracol) Mandrem Vidhan Sabha kshetra me aata hai. Article sarkari pariyojna ki reporting hai, MLALAD ka jikr nahi; Arolkar ne khud shilanyas kiya, isliye unki bhoomika spasht hai. Date disclosure: article page par prakashan tithi pradarshit nahi thi, isliye date search-index ke aadhar par lagbhag Nov 2025 (2025-11-14) maani gayi hai.',
    period: '2022-2027',
  },
  {
    title: 'Keri Sub Health Centre ko 108 ambulance ki suvidha mili, MLA Jit Arolkar ne ambulance ka udghatan kiya',
    category: 'Aspataal',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Daijiworld, 7 Sep 2026',
    sourceUrl: 'https://daijiworld.com/news/newsDisplay?newsID=1324924',
    date: '2026-09-07',
    note: 'Keri Sub Health Centre (Pernem taluka, Mandrem Vidhan Sabha kshetra) ko 108 ambulance uplabdh karayi gayi aur Mandrem MLA Jit Arolkar ne Keri Sarpanch, Paliem Sarpanch, medical staff aur sthaniya nagrikon ki maujudgi me iska udghatan kiya. Arolkar ne kaha ki unhone yah maang haal ke Vidhan Sabha satra me uthayi thi, jiske baad CM Pramod Sawant aur Health Minister Vishwajit Rane ne ambulance dilane me madad ki, isliye credit sarkari svikriti aur MLA ki pairavi dono me banta hai. Article me sath hi Tuem ke Government Hospital me OT ka kaam chalne ka jikr hai, lekin uska udghatan nahi hua isliye use entry nahi banaya gaya.',
    period: '2022-2027',
  },
  {
    title: 'Teen dashakon se upekshit Paliem talav ke jeernoddhar ka udghatan MLA Jit Arolkar ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Daijiworld, 19 Feb 2026',
    sourceUrl: 'https://www.daijiworld.com/index.php/news/newsDisplay?newsID=1306999',
    date: '2026-02-19',
    note: 'Mandrem MLA Jit Arolkar ne Paliem ke jeernoddhar kiye gaye talav ka udghatan kiya; yah talav teen dashakon se upekshit pada tha aur Rs 14 lakh ki lagat wali pariyojna ke tahat ise varishth nagrikon ke liye shant manoranjan sthal ke roop me vikasit kiya gaya hai. Paliem Mandrem Vidhan Sabha kshetra me hai. Udghatan me sarpanch Sneha Gawandi aur sthaniya adhikari maujud the. Article sarkar ki do talavon (Paliem aur Korgao) ki restoration drive ki reporting karta hai; Paliem wala kaam poora ho chuka tha isliye stage lokarpan hai. Arolkar ki bhoomika udghatan-karta ki hai, sanction ka dawa article me nahi hai.',
    period: '2022-2027',
  },
  {
    title: 'Don Bosco High School Tuem me GFDC Development Centre ka udghatan MLA Jit Arolkar ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'oHeraldo, 18 Nov 2022',
    sourceUrl: 'https://www.heraldgoa.in/sports/gfdc-centre-inaugurated-at-don-bosco-hs-tuem/377215/',
    date: '2022-11-17',
    note: 'Don Bosco High School Tuem me FC Tuem aur school ke sahyog se naya GFDC Centre (Tuem Development Centre) khula, jiska udghatan mukhya atithi ke roop me Mandrem MLA Jit Arolkar ne kiya; maujud logon me Padmashri Brahmanand Shakhawalkar aur GFA adhyaksh Dr Caitano Fernandes the. Tuem Mandrem Vidhan Sabha kshetra me hai. Centre grassroots football coaching ke liye bana hai aur article ke anusar 115 khiladiyon ne panjikaran karaya tha. Arolkar ki bhoomika udghatan-karta ki hai, pariyojna GFDC-FC Tuem-school ki sanyukt pehal hai, isliye shrey isi anusar banta hai. Date disclosure: article me "Thursday" ko udghatan likha hai aur coaching 21 Nov 2022 se shuru honi thi, isliye ghatna tithi 17 Nov 2022 maani gayi hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (jit-vinayak-arolkar): (1) Harmal Bhatwadi-Harmal Junction road ka hot-mixing launch — Herald ka YouTube video hi mila, YouTube-only source niyam ke tahat reject. (2) Parse panchayat Ganesh visarjan sthal beautification — Herald YouTube video, sirf shuruaat ki khabar aur video-only, reject. (3) Tuem 30 MLD water treatment plant — rajya-sarkar ki pariyojna hai; articles (TOI, Daijiworld) me Arolkar sirf CM ke nirikshan me maujud the, unki concrete sanction/udghatan bhoomika spasht nahi; Arolkar ke Facebook page par operational hone ka dawa tha lekin FB permalink source ke roop me reject. (4) Mandrem High School me ex-sarpanch Prashant Naik ka paver kaam — MLA ka kaam nahi, reject. (5) Mandrem me Parshuram mandir banane ki ghoshna — sirf bhavishya ki yojna ki ghoshna, bina sanction ke, reject (nirdesh: bina GO/sanction ke swikriti ka dawa = sirf ghoshna; ghoshna-stage entry banane yogya nahi). (6) RDX Goa par Chandel 15 MLD plant ka nirikshan — sirf nirikshan/daura, reject. Pehchan verification: sabhi entries me "Mandrem MLA Jit/Jeet Arolkar" naam aur pad spasht hai; kshetra pushti ECI delimitation order se — Mandrem AC me Querim (Keri), Paliem, Arambol, Tuem, Parcem, Mandrem, Morjim, Chopdem aate hain, isliye Keri, Paliem, Tuem, Chopdem ke kaam kshetra ke andar hain.

goaWorks['pravin-prabhakar-arlekar'] = [
  {
    title: 'Korgao talav ki marammat aur jeernoddhar karyon ka shubharambh MLA Pravin Arlekar ne sthaniya panchayat sadasyon ke saath kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'Daijiworld, 19 Feb 2026',
    sourceUrl: 'https://www.daijiworld.com/index.php/news/newsDisplay?newsID=1306999',
    date: '2026-02-19',
    note: 'Sarkar ki do talavon (Paliem aur Korgao) ki restoration drive ke tahat Pernem MLA Pravin Arlekar ne sthaniya panchayat sadasyon ke saath Korgao talav ki marammat aur jeernoddhar karyon ka shubharambh kiya. Korgao (Corgao saza) Pernem (SC) Vidhan Sabha kshetra me hai. Article me Paliem wale talav ka poora hua kaam Arolkar ne udghatan kiya tha, jabki Korgao me Arlekar ne karyon ka aarambh karaya, isliye stage shilanyas-bhoomi pujan hai, lokarpan nahi. Uddeshya paryatan aur manoranjan buniyadi dhanche ka vikas bataya gaya hai; fund ke srot ka spasht jikr article me nahi hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (pravin-prabhakar-arlekar): (1) Pernem Municipal Council naye prashasnik bhavan phase-1 ka udghatan (The Goan, 10 Aug 2025) — pre-event announcement ("Monday ko hoga") thi, post-event reporting nahi; niyam ke tahat pre-event khabar source nahi banti, reject. (2) Chandel bridge nirikshan (Herald) — sirf nirikshan, "work to begin soon", reject. (3) Dhargal flyover (NH66) site inspection — sirf nirikshan aur tezi lane ka nirdesh, YouTube (The Goan) par; kendriya pariyojna me MLA ki concrete bhoomika nahi, reject. (4) Vazri street lights udghatan aur Devsu Tisk crash barrier udghatan — keval veblr video links, video-only source reject. (5) Mahila sashaktikaran skill training karyakram — vyaktigat welfare/karyakram, kshetra-vikas kaam nahi, reject. (6) Pre-monsoon works review meeting (The Goan, May 2026) — sirf sameeksha baithak aur nirdesh, koi poora/swikrit kaam nahi, reject. (7) BJP Mandal ka Rajan Korgaonkar ko credit-davi par bayan — rajnaitik bayanbazi, koi kaam nahi, reject. (8) Oorja 2026 Mahila Diwas karyakram — saanskritik karyakram me aayojan/maujudgi, reject. Pehchan verification: "Pernem MLA Praveen/Pravin Arlekar" naam-pad spasht; Rajendra Arlekar (poorv mantri/rajyapal) se bhram na ho iska dhyan rakha gaya — unse judi khabrein (Forest HQ shilanyas aadi) alag vyakti ki hain, reject.

// ---

// North Goa worker fragment — Shetye (Bicholim), Halarnkar (Tivim), researched 2026-10-15.

goaWorks['chandrakant-shetye'] = [];

// REJECT-LOG (chandrakant-shetye): Pehchan pakki: Dr. Chandrakant P Shetye, Bicholim AC, Independent MLA, Chairman of Infotech Corporation of Goa. Koi entry nahi rakhi. Reject kiye gaye: (1) Bicholim Govt Office Complex ka shilanyas (13 May 2025, oHeraldo/NT) — CM Pramod Sawant ne kiya, Shetye sirf maujood the; CM karyakram me maujoodgi matra entry nahi banti. (2) Bicholim CHC ka OT + Interventional Laser Vein Treatment Centre lokarpan (31 Jul 2026, The Goan) — CM ne udghatan kiya, Shetye ne sirf CM/Health Minister ka dhanyavaad kiya aur "long-pending demand" ka dawa kiya; unki concrete bhoomika article me spasht nahi, isliye rajya-pariyojna ka shrey unhe nahi diya ja sakta. (3) KTC bus terminus + fire station ka nirikshan (14 Sep 2025, The Goan) — sirf nirikshan/daura, kaam ruka hua tha; nirikshan se entry nahi banti. (4) Fire station nirman (2019 me shilanyas, karyakaal se pehle) — pre-term. (5) Bicholim SH-1 4-lane bypass Rs 83.7 cr lokarpan — CM event me sirf maujoodgi. (6) Navelim ethanol plant — private company project, CM shilanyas. (7) Medical camp/CME programme — karyakram, vikas-kaam nahi. Sanquelim (Vaavanti riverfront) Shetye ke AC se bahar hai, wahan ka bhi koi kaam Shetye ke naam par nahi joda. Mining-policy ya sarkar-virodhi bayan par koi kaam nahi liya gaya, jaise brief me kaha gaya tha.

// ==========================================================================

goaWorks['nilkanth-ramnath-halarnkar'] = [];

// REJECT-LOG (nilkanth-ramnath-halarnkar): Pehchan pakki: Nilkanth (Nilkant) Ramnath Halarnkar, Tivim AC, BJP, Rajya me Fisheries + Factories & Boilers + Animal Husbandry and Veterinary Services mantri (9 Apr 2022 se). Naam ke galat roop bhi mile — Oneindia "Neelkant Ramnath Harlarnkar" likhta hai, ye wahi vyakti hain. Koi entry nahi rakhi (mantri niyam: sirf apni seat Tivim ke kaam, vibhag/rajya ke faisle bilkul nahi). Reject kiye gaye: (1) Cutbona 100 KLD STP shilanyas (Aug 2025) — mantri ki bhoomika me, Velim AC (South Goa) me, seat se bahar. (2) Chapora jetty repair Rs 4 cr shilanyas (Nov 2025, The Goan) — Siolim AC me, mantri ki bhoomika; article me project ko aage badhane ka mukhya shrey Siolim MLA Delilah Lobo ko diya gaya. (3) Altinho me Inspectorate of Factories & Boilers office ka shilanyas — vibhag ka faisla, Panaji me. (4) Zuvem-Nadora bridge nirikshan (20 Jul 2025, The Goan) — sirf nirikshan; purane pull ki marammat ka ghoshna-style reporting aur naye pull ka shilanyas "December tak" — pre-event ghoshna, entry ka srot nahi. (5) Assonora 4-lane bypass shilanyas (Sep 2024, goanewshub — chhota local portal) — CM ne kiya, Halarnkar sirf mantri ke roop me maujood; article me unki koi concrete bhoomika nahi. (6) Colvale-Tivim road marammat (Sep 2026, The Goan) — shrey CM aur WRD mantri ko, aur article me sthaniya MLA ki asafalta par nirasha darj hai; MLA ka kaam nahi. (7) Tivim Survey 485/1-A plotting/road-NOC vivad (May 2025, oHeraldo) — rajnaitik aarop-pratyaarop matra, koi FIR/case/adalaati sthiti nahi; negative entry ke yogya nahi. (8) Colvale GHB land scam me FIR (Jan 2011, oHeraldo) — 2010-11 ka purana mamla (Kamat sarkar ke daur me Housing Minister the); vartaman karyakaal (Mar 2022+) me koi NAYI prakriya-sthiti nahi mili, isliye pre-term case rule se reject; parivar ka koi mamla nahi joda. (9) Assonora Swayampurna Goa kalyankari karyakram (Oct 2021) — pre-term aur vyaktigat welfare; reject. (10) National Fisheries Day, fish-price bayan, fishing-association meeting — niti/bayan, seat ke kaam nahi. Dono profiles imaandari se khaali rakhi gayi hain.

// ---

// North Goa worker fragment — De Souza (Mapusa), D. Lobo (Siolim), researched 2026-10-15.
// Joshua Peter De Souza (BJP, Mapusa): Deputy Speaker ke sansthanik kaam exclude; sirf Mapusa seat ke satyapit kshetra-vikas.
// Delilah Michael Lobo (BJP, Siolim): karyakaal Mar 2022 se nirantar; pati Michael Lobo (Calangute) ke kaam bilkul alag rakhe.

goaWorks['joshua-peter-de-souza'] = [
  {
    title: 'Mapusa market me Shantadurga Hotel ke paas punarnirmit saarvajanik shauchalaya block ka udghatan MLA Joshua De Souza ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'The Goan, 25 Apr 2026',
    sourceUrl: 'https://www.thegoan.net/goa-news/after-10year-wait-mapusa-market-finally-gets-a-loo/147145.html',
    date: '2026-04-20',
    note: 'Mapusa Municipal Market me Shantadurga Hotel ke paas lagbhag ek dashak se band pade shauchalaya block ka punarnirman poora hone par 20 Apr 2026 ko Mapusa MLA Joshua De Souza ne iska udghatan kiya; MMC chairperson Priya Mishal aur Vice Chairperson Prakash Bhivshet maujood the. Ye Mapusa Municipal Council ki pariyojna hai — udghatan MLA ne kiya lekin kaam unki MLA-nidhi se hua iska pramaan article me nahi hai. The Goan ne pariyojna me hue lambe vilamb ki aalochana bhi ki hai. Fund ka srot article me spasht nahi hai, isliye koi daava nahi kiya gaya.',
    period: '2022-2027',
  },
  {
    title: 'Ganeshpuri substation se Mapusa me underground cabling Phase II ke dauraan khodi gayi andaruni sadkon ki bahali ka udghatan MLA Joshua De Souza ne kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'poorna',
    sourceLabel: 'Goa9Media, 2 Dec 2023',
    sourceUrl: 'https://www.goa9media.com/2023/12/02/dy-speaker-mla-mapusa-shri-joshua-de-souza-inaugurated-the-reinstatement-of-various-internal-roads-dug-by-the-electricity-department-for-conversion-of-ht-lt-overhead-feeders-to-undergro/',
    date: '2023-12-02',
    note: 'Bijli vibhag dwara HT aur LT overhead feeders ko underground cabling me badalne ke liye khodi gayi sadkon ki marammat-bahali (reinstatement) ka udghatan 2 Dec 2023 ko Mapusa MLA Joshua De Souza ne kiya; MMC Chairperson Priya Mishal, PWD Roads ke AE aur JE, thekedaar aur Ganeshpuri ke nivasi maujood the. Ye Bijli vibhag aur PWD ka vibhagiya kaam hai — MLA ki bhoomika udghatan tak seemit rahi. Disclosure: Goa9Media ek chhota sthaniya digital news portal hai.',
    period: '2022-2027',
  },
  {
    title: 'St. Britto High School Mapusa ke khel maidan ki dhahi retaining wall ke punarnirman ki adharshila MLA Joshua De Souza ne MLA-LAD yojana ke tahat rakhi',
    category: 'School',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'Goa9Media, 4 Aug 2023',
    sourceUrl: 'https://www.goa9media.com/2023/08/04/foundation-stone-laid-for-the-re-construction-of-the-collapsed-portion-of-the-retaining-wall-of-the-playground-at-st-britto-high-school-mapusa-under-the-mla-lad-scheme/',
    date: '2023-08-04',
    note: 'St. Britto High School Mapusa ke playground ki dhahi hui retaining wall ke punarnirman ki adharshila 4 Aug 2023 ko Deputy Speaker aur Mapusa MLA Joshua De Souza ne rakhi; ye kaam MLA-LAD yojana ke tahat hai. MMC Chairperson Priya Mishal, PWD ke AE, thekedaar Yatin Construction, school ke principal aur vice-principal maujood the, jo kaam ke sanctioned hone ka sanket deta hai. Disclosure: Goa9Media ek chhota sthaniya digital news portal hai.',
    period: '2022-2027',
  },
  {
    title: 'Ganeshpuri me Naik ke ghar se Housing Board Junction tak footpath ki adharshila MLA Joshua De Souza ne rakhi',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'RDX Goa, 10 Oct 2022',
    sourceUrl: 'https://rdxgoa.com/dy-speaker-mapusa-mla-shri-joshua-desouza-laid-the-foundation-stone-for-the-footpath-from-naiks-house-to-the-housing-board-junction-in-ward-no-6-ganeshpuri-mmc-chairperson-shubhangi/',
    date: '2022-10-10',
    note: 'Mapusa ke Ward 6 (Ganeshpuri) me Naik ke ghar se Housing Board Junction tak footpath ki adharshila 10 Oct 2022 ko Mapusa MLA Joshua De Souza ne rakhi; MMC Chairperson Shubhangi Vaingankar aur Vice Chairperson Chandrashekhar Benkar maujood the. Fund ka srot article me spasht nahi hai, isliye koi daava nahi kiya gaya. Disclosure: RDX Goa ek chhota sthaniya digital news portal hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (joshua-peter-de-souza):
// 1. Sulabh pay toilets Mapusa market (Herald) — TENURE FAIL: MMC chairman Ryan Braganza wali khabar pichhle karyakaal (2019-22) ki hai; Mar 2022 se pehle. Reject.
// 2. Rs 130 crore underground cabling swikriti (Herald) — TENURE FAIL: Aldona MLA Glenn Ticlo maujood the, jo 2017-22 karyakaal ki khabar hai; swikriti ka daava bhi sirf MLA ka apna daava tha. Reject.
// 3. Mapusa bus stand adharshila (Herald, Sep 2025) — WEAK ATTRIBUTION: adharshila CM Pramod Sawant ne rakhi, GSIDC ka rajya-stariya project; Joshua sirf maujood the. Reject.
// 4. Rs 31 crore sadak marammat ghoshna (The Goan, May 2025) — KARENGE: sirf yojna ki ghoshna, koi poora kaam/swikriti saboot nahi. Reject.
// 5. Mapusa commercial complex idle (The Goan, Sep 2025) — WEAK ATTRIBUTION: GSUDA/MMC ka project; MLA ki concrete bhoomika nahi (sirf chintaon ko kharij karne wala bayan). Reject.
// 6. Dry Waste Collection Centre (IndiaCSR, Mar 2025) — WEAK ATTRIBUTION: Mondelez India ki CSR pariyojna, Anubhuti Welfare Foundation ne implement ki; MLA sirf upasthit the aur bole. Reject.
// 7. Aastha Centre of Excellence, Khorlim (Goa News Hub, Jun 2025) — SIRF MAUJOODGI: udghatan CM ne kiya; Joshua sirf Deputy Speaker ke roop me upasthit. Reject.
// 8. Angod sadak milling nirikshan (The Goan, May 2026) — SIRF NIRIKSHAN: chalu kaam ka daura, koi poora kaam nahi. Reject.
// 9. Do convex traffic mirrors udghatan (Goa9, Jun 2025) — WEAK ATTRIBUTION: mirrors do sthaniya mandalon ne daan me diye; MLA ka role sirf udghatan tak. Reject.

goaWorks['delilah-michael-lobo'] = [
  {
    title: 'Chapora aur Deulwada me do water microfiltration plants ka udghatan Siolim MLA Delilah Lobo ne kiya',
    category: 'Paani',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Daijiworld, 11 Mar 2025',
    sourceUrl: 'https://daijiworld.com/news/newsDisplay?newsID=1274781',
    date: '2025-03-11',
    note: 'Chapora aur Deulwada me borewell ke paani ko microfiltration se shuddh karke gharon tak pahunchane wale do filtration plants lagne ke baad 11 Mar 2025 ko Siolim MLA Delilah Lobo ne aupchaarik udghatan kiya; panchayat sadasya aur PWD ke adhikari maujood the. Fund ka srot article me spasht nahi hai, isliye koi daava nahi kiya gaya. Article me 5.6 MLD water treatment plant ki aane wali ghoshna bhi thi, lekin wo bhavishya ki ghoshna hone se entry me shamil nahi ki gayi.',
    period: '2022-2027',
  },
  {
    title: 'Oxel-Siolim ke Baman Vaddo me sarkari primary school ki chhat marammat aur anya civil karyon ka udghatan MLA Delilah Lobo ne kiya',
    category: 'School',
    badge: 'news',
    stage: 'poorna',
    sourceLabel: 'Goa News Hub, Jan 2026',
    sourceUrl: 'https://goanewshub.com/siolim-govt-primary-school-at-oxel-gets-infrastructure-upgrade/',
    date: '2026-01-05',
    note: 'Siolim ke Oxel me Baman Vaddo sthit Government Primary School ki chhat ki marammat aur anya civil karyon ke poore hone par 5 Jan 2026 (Somvaar) ko MLA Delilah Lobo ne udghatan kiya; school staff, sthaniya nivasi aur adhikari maujood the. Fund ka srot article me spasht nahi hai, isliye koi daava nahi kiya gaya. Disclosure: Goa News Hub ek chhota sthaniya digital news portal hai.',
    period: '2022-2027',
  },
  {
    title: 'Parra me avaidh land filling aur ped kaatne ke aarop me TCP Act ke tahat Delilah Lobo ke khilaf FIR',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'ThePrint (PTI), 2 May 2022',
    sourceUrl: 'https://theprint.in/india/goa-lop-lobo-wife-booked-for-land-filling-tree-cutting-says-minister-rane/939790/',
    date: '2022-05-02',
    note: 'Town and Country Planning mantri Vishwajit Rane ne 2 May 2022 ko bataya ki Parra gaon me avaidh land filling aur ped kaatne ke aarop me Mapusa police me TCP Act 1974 ki dhara 17A aur 17B ke tahat Siolim MLA Delilah Lobo aur unke pati Calangute MLA Michael Lobo ke khilaf FIR darj hui hai; shikayat NGPDA ne darj karayi thi. Michael Lobo ne aaropon ka khandan kiya aur kaha ki zameen kheti ke uddeshya se taiyaar ki ja rahi thi aur ye vipaksh ko nishana banane wali rajneeti hai. FIR karyakaal ke dauraan (May 2022) darj hui hai, lekin uske baad ki prakriya-sthiti (chaalan/giraftari/adalaati faisla) sthapit nahi ho saki, isliye entry sirf FIR-darj aur neta ke jawab tak seemit hai. Pehchan pakki: FIR me Delilah Lobo ka naam swayam darj hai, sirf pati ke kaaran nahi.',
    period: '2022-2027',
  },
];
// REJECT-LOG (delilah-michael-lobo):
// 1. Free harvesting machine (GoaNewsLink, Oct 2024) — YouTube-EMBED ONLY: page par koi reporting text nahi, fund srot nahi. Reject.
// 2. Chapora jetty final inspection (AizGoaNews, Sep 2026) — SIRF NIRIKSHAN: commissioning se pehle ka daura; Fisheries Department ka project, MLA ki concrete bhoomika nahi. Reject.
// 3. 33 KV power supply project (RDX Goa, Oct 2025) — YouTube-ONLY: page par koi reporting text nahi. Reject.
// 4. 100kva transformer Bobby bar junction Anjuna (Goa9, Mar 2023) — NO BODY TEXT: page khola to sirf headline, padhne layak reporting text nahi. Reject.
// 5. Transformer Oxel Siolim (RDX Goa, Jul 2023) — YouTube-ONLY: koi reporting text nahi. Reject.
// 6. Sati Devasthan beautification Sodiem-Siolim (RDX Goa, Oct 2024) — NO BODY TEXT: YouTube embed ke siva koi reporting text nahi. Reject.
// 7. Sodiem gutter works inspection (Daijiworld, Jun 2025) — SIRF NIRIKSHAN: chalu kaam ka daura (MLA Fund ka kaam bataya gaya lekin poora nahi hua tha). Reject.
// 8. Swayampurna Goem stall Marna-Siolim (YouTube) — YouTube-ONLY source. Reject.
// 9. Sao Joao utsav Siolim (ANI/CalcuttaNews, Jun 2026) — SANSKRITIK MAUJOODGI: Goa Tourism ka utsav, mantri Suresh Gopi ne udghatan kiya; Delilah sirf upasthit. Reject.
// 10. Garba Dandiya competition (RDX Goa, Nov 2022) — SANSKRITIK karyakram me udghatan, kshetra-vikas nahi. Reject.
// 11. Calangute-Candolim vikas (Herald) — GALAT VYAKTI: ye kaam Calangute MLA (pati Michael Lobo) ka hai; Delilah par kabhi nahi. Reject.
// 12. TOI Lobo couple campaign (Jan 2022) — TENURE FAIL: chunav se pehle ki khabar, Mar 2022 se pehle. Reject.
// 13. Verla-Canca road widening (Herald) — GALAT VYAKTI + TENURE FAIL: khabar Vinod Palyekar (2017-22 Siolim MLA) ke baare me hai. Reject.
// 14. Demolition complaint (The Goan, May 2025) — NO FIR: activist ne FIR ki maang ki thi, FIR darj hone ka saboot nahi. Reject.
// 15. Ped kaatne par virodh (Herald) — koi vikas entry ya negative nahi; MLA ne sawalon ka jawab nahi diya. Reject.
// 16. Height barrier letter (The Goan, Oct 2026) — LETTER-TO-EDITOR: pathak ka patra, news reporting nahi. Reject.
// 17. El Shaddai school reopening chief guest (2021) — TENURE FAIL (2021) + sirf chief guest. Reject.
// 18. Delilah ki khud ki complaint (Digital Goa, Oct 2025) — SHIKAYATKARTA: MLA ne Anjuna me WRD kaam me badha ke khilaf complaint darj karayi; ye unpar aarop nahi, vikas-kaam bhi nahi. Reject.

// ---

// North Goa worker fragment — K. Naik (Saligao), M. Lobo (Calangute), researched 2026-10-15.

goaWorks['kedar-jayprakash-naik'] = [
  {
    title: 'Reis Magos Panchayat ke Ward 8 me 323-metre sewerage line bichhane ka kaam Saligao MLA Kedar Naik ne shuru karwaya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'Daijiworld, 23 Nov 2025',
    sourceUrl: 'https://www.daijiworld.com/news/newsDisplay?newsID=1298842',
    date: '2025-11-22',
    note: 'Saligao MLA Kedar Naik ne 22 Nov 2025 ko Reis Magos Panchayat ke Ward 8 me 323-metre lambi sewerage line bichhane ke kaam ka udghatan kiya; yah line Porvorim sewerage scheme se judegi. Daijiworld ki report ke mutabiq yah Rs 2.50-crore ka project hai jisme 10 manholes banenge aur ek saal me poora hone ka lakshya hai. MLA ne kaha ki Ward 8 ki pathrili zameen me soak pits ka paani rista nahi hai, isliye yah lambe samay se maang thi. ZP sadasya Sandeep Bandodkar aur ward panch Prasanna Nagvekar karyakram me maujood the. Fund ka srot article me spasht nahi hai; karyakram me MLA ne GTDC ke tahat do khule sthanon (senior citizen park aur bachchon ke khel kshetra) ke vikas ki ghoshna bhi ki, lekin unke liye NOC abhi maangi gayi hai isliye unhe entry me nahi joda gaya.',
    period: '2022-2027',
  },
  {
    title: 'Alto Pilerne me futsal ground ka shilanyas MLA Kedar Naik ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'The Goan, 10 Jun 2025',
    sourceUrl: 'https://www.thegoan.net/goa-news/human-development-as-vital-as-infrastructure-development-mla/131560.html',
    date: '2025-06-09',
    note: 'Saligao MLA Kedar Naik ne Alto Pilerne me futsal ground ka shilanyas kiya (The Goan ne 10 Jun 2025 ko report kiya). Report ke mutabiq lagbhag 450 sq mtr zameen par Rs 30 lakh ki lagat se yah futsal ground ZP fund se banaya jayega, aur baaki lagbhag 3,500 sq mtr kshetra me badminton court, e-library, senior citizens ke liye jogging track aur bachchon ka park jaise suvidhaen vikasit hongi. Karyakram me ZP sadasya Sandeep Bandodkar, Pilerne-Marra sarpanch Reshma Bandodkar aur North Goa ZP adhyaksh Shanker Chodankar maujood the. MLA ne kaha ki ve apne kshetra me manoranjan suvidhaon par dhyan de rahe hain. Isi karyakram me Saligao circle se Pilerne Industrial Estate tak ki sadak ko pakka karne ki ghoshna bhi hui, lekin kaam shuru hone ka saboot nahi hai isliye use entry nahi banaya gaya.',
    period: '2022-2027',
  },
  {
    title: 'Sangolda ke Hindu shamshan-grih ke navinikaran ka shilanyas MLA Kedar Naik ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'The Goan, 24 Feb 2026',
    sourceUrl: 'https://www.thegoan.net/goa-news/saligao-power-substation-nearing-completion-mla/144021.html',
    date: '2026-02-23',
    note: 'Saligao MLA Kedar Naik ne Sangolda ke Bela Vista sthit Hindu shamshan-grih ke navinikaran ka shilanyas kiya (The Goan ne 24 Feb 2026 ko report kiya). Report ke mutabiq PWD Rs 35 lakh ki lagat se yah navinikaran kar raha hai aur kaam do mahine me poora hone ki ummeed hai. MLA ne kaha ki shamshan-grih ki halat dayaniya ho gayi thi aur yah Sangolda Panchayat aur sthaniya logon ki lambe samay se maang thi. Karyakram me North Goa ZP adhyaksh Reshma Bandodkar aur Sangolda sarpanch Minolette Lopes maujood the. Isi karyakram me MLA ne Saligao power substation ke poora hone ke kareeb hone ka dawa kiya, lekin uska shilanyas Nov 2022 me Power Minister Sudin Dhavalikar ne kiya tha aur MLA ki usme concrete bhoomika spasht nahi hai, isliye use alag entry nahi banaya gaya.',
    period: '2022-2027',
  },
  {
    title: 'Saligao me Maica Waddo-Canderlia Chapel road ka lokarpan hua',
    category: 'Sadak',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Goemkarponn, 3 Feb 2026',
    sourceUrl: 'https://goemkarponn.com/maica-waddo-canderlia-chapel-road-opened-boosting-connectivity-in-saligao/',
    date: '2026-02-03',
    note: 'Saligao kshetra me Maica Waddo se Canderlia Chapel tak ki nayi sadak ka aadhikarik udghatan hua; MLA Kedar Naik ne kaha ki yah sadak sabhi vargon ki zarooraton ko dhyan me rakhkar banayi gayi hai. Report ke mutabiq yah sadak kisaano ke liye tractor aur krishi vahanon ki aava-jahi aasaan karegi aur Pilerne sthit Our Lady of Candelaria Chapel tak shortcut maarg degi, saath hi sair, jogging aur cycling ke liye bhi upyukt hai. Sadak ki lagat aur fund ka srot article me nahi bataya gaya hai. Disclosure: Goemkarponn ek chhota sthaniya Goa news portal hai; yah post-event reporting hai jisme udghatan ki pushti hai.',
    period: '2022-2027',
  },
  {
    title: 'Betim ferry jetty par high mast light ka lokarpan MLA Kedar Naik ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Aizgoa News, 20 Sep 2026',
    sourceUrl: 'https://aizgoanews.in/47309/',
    date: '2026-09-19',
    note: 'Saligao MLA Kedar Naik ne 19 Sep 2026 (Shanivaar) ko Betim ferry jetty ke paas nayi lagi high mast light ka udghatan kiya; karyakram me Reis Magos Panchayat ke sadasya, sthaniya log aur ferry yatri maujood the. Report ke mutabiq yah light sthaniya logon ki lambe samay se maang thi aur jetty parisar ko roshan karegi, jo Betim aur Panaji ke beech roz sainkdon yatriyon ka mahatvapurna maarg hai. MLA ne kaha ki sham ko safar karne wali mahilaon, chhatron aur varishth nagrikon ki suraksha badi chinta thi. Lagat aur fund ka srot article me nahi bataya gaya hai. Disclosure: Aizgoa News ek chhota sthaniya Goa news portal hai; tasveeron ki dates 19 Sep 2026 ki hain jo "Shanivaar" ke bayaan se mel khati hain.',
    period: '2022-2027',
  },
];
// REJECT-LOG (kedar-jayprakash-naik): (1) Alto Pilerne 650 cubic metre OHR nirikshan (Aizgoa News, Sep 2026) — sirf nirikshan, PWD Water Supply ka project, MLA ki concrete bhoomika nahi. (2) Pilerne 15 MLD water treatment plant nirikshan (Aizgoa News, Sep 2026) — sirf nirikshan, kaam lagbhag poora tha lekin udghatan/lokarpan ki khabar nahi. (3) Guirim flooding ke liye Rs 49 crore sanction ka dawa (TOI, Jul 2025) — sanction ka dawa sirf MLA ke apne bayaan par tha, GO/sanction-order ka zikr nahi, aur Tar nadi desilting (Rs 46.52 crore) WRD ka state project hai jiski sameeksha CM aur WRD mantri ne ki; shrey MLA ko nahi diya ja sakta. (4) Tar nadi desilting kaam ki sameeksha (The Goan, 3 Mar 2026) — sirf nirikshan, WRD implementing agency. (5) Saligao power substation — shilanyas Nov 2022 me Power Minister Sudin Dhavalikar ne kiya tha, MLA sirf maujood the; Feb 2026 me "poora hone ke kareeb" ka dawa sirf bayaan hai, completion ki post-event report nahi. (6) Sangolda ground par 4 high-mast lamps (Rs 8 lakh, GTDC) — foundation-stone karyakram ki report me bundled dawa, standalone post-event report nahi. (7) YouTube-only items (premixing roads Saligao, Pilerne Ward IX hotmixing, Madel-Thivim high mast, Ramnagar 90mm water pipeline) aur veblr video (Pilerne retaining wall shilanyas, Jan 2024) — video-only source, niyam ke mutabiq reject. (8) GTDC chairman ke roop me padbhar — niyukti hai, vikas-kaam nahi. (9) Ward 8 me do khule sthanon (senior citizen park, bachchon ka park) ki ghoshna — sirf ghoshna, NOC abhi maangi gayi thi, kaam shuru nahi. Pehchan-verification: sabhi articles me "Saligao MLA Kedar Naik" spasht hai; koi naam-milti-julti galat vyakti nahi mili. Koi negative entry nahi mili (vartaman karyakaal me FIR/case/janch ki koi vishwasniya khabar nahi).

goaWorks['michael-vincent-lobo'] = [
  {
    title: 'Calangute me lagbhag Rs 25 crore ke shahri infrastructure kaamon ka shubharambh MLA Michael Lobo ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'The Goan, 28 May 2026',
    sourceUrl: 'https://www.thegoan.net/goa-news/calangute-braces-for-rs-25crore-urban-infrastructure-overhaul/148831.html',
    date: '2026-05-27',
    note: 'Calangute MLA Michael Lobo ne lagbhag Rs 25 crore ke shahri navinikaran kaamon ka udghatan kiya (The Goan ne 28 May 2026 ko report kiya); report ke mutabiq kaam shuru ho chuke hain. Isme underground utility corridor, aadhunik drainage, footpath aur building facades ka saundaryikaran, aur lagbhag 500 vahanon ki kshamta wala prastavit multi-level parking complex shamil hai. Kaam Goa State Infrastructure Development Corporation (GSIDC) ke madhyam se charanon me kiye ja rahe hain; Lobo GSIDC ke chairman bhi hain aur Calangute ke sarpanch Joseph Sequeira udghatan me maujood the. Credit-pardarshita: yah GSIDC ke madhyam se karyanvit state-agency project hai, jisme Lobo ki bhoomika Calangute MLA ke roop me pariyojna laane aur GSIDC chairman ke roop me karyanvayan ki dohari hai; fund ka vishisht srot article me nahi bataya gaya hai.',
    period: '2022-2027',
  },
  {
    title: 'Calangute me Augustinho DSouza (Tino) road ka lokarpan MLA Michael Lobo ne kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'oHeraldo, Oct 2025',
    sourceUrl: 'https://www.heraldgoa.in/goa/augustinho-dsouza-tino-road-inaugurated-in-calangute/490917/',
    date: '2025-10-05',
    note: 'Calangute me nayi bani Augustinho DSouza (Tino) road ka lokarpan Calangute MLA Michael Lobo ne 5 Oct 2025 ko kiya; sadak ka naam sthaniya samudaay se jude Augustinho DSouza (Tino) ke sammaan me rakha gaya hai. Udghatan samaroh me sarpanch Sushma S. Nagvekar, up-sarpanch Steffi F. Fernandes aur ward sadasya maujood the. Sadak ki lagat aur fund ka srot article me nahi bataya gaya hai. Yah oHeraldo (Herald Goa) ki post-event reporting hai.',
    period: '2022-2027',
  },
  {
    title: 'Calangute ki ek pramukh sadak par hotmixing kaam ka shubharambh MLA Michael Lobo ne kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'The Goan, 15 May 2026',
    sourceUrl: 'https://www.thegoan.net/goa-news/calangute-mla-hits-out-at-rivals-over-objections-to-development-works/148209.html',
    date: '2026-05-14',
    note: 'Calangute MLA Michael Lobo ne Calangute ki ek pramukh sadak par hotmixing kaam ka udghatan kiya (The Goan ne 15 May 2026 ko report kiya). Karyakram me Joseph Sequeira ne sadak hotmixing pariyojna ki swikriti dilane ke liye Lobo ka dhanyavaad kiya aur unhe kshetra me vikas kaamon ko aage badhane ka shrey diya. Report ke mutabiq pichhle do saalon me Calangute ki kai sadakon par naya hotmix bichhaya gaya hai, aur PWD ke vittiya dabav ke bawajood GSIDC (jiske Lobo chairman hain) ke madhyam se pramukh sadak kaam jaari rahe. Sadak ka naam aur lagat article me nahi batayi gayi hai, isliye title me "ek pramukh sadak" hi likha gaya hai.',
    period: '2022-2027',
  },
  {
    title: 'Parra me Manohar Parrikar mural aur junction ka lokarpan MLA Michael Lobo ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'mid-day, 15 Dec 2023',
    sourceUrl: 'https://www.mid-day.com/mumbai/mumbai-news/article/mural-of-late-goa-cm-parrikar-adds-colour-to-mapusa-calangute-road-23325023',
    date: '2023-12-13',
    note: 'Calangute MLA Michael Lobo ne 13 Dec 2023 ki shaam ko Parra me Mapusa-Calangute road par poorv mukhyamantri Manohar Parrikar ke tiled mural ka udghatan kiya; is avsar par lagbhag 800 nivasi maujood the. mid-day ki report ke mutabiq MLA Lobo ne is upekshit pade kshetra ka saundaryikaran khud karwaya tha aur ab yah sthan Manohar Parrikar Junction ke naam se jana jayega. Udghatan me Parrikar parivar ke sadasya bhi maujood the. Lagat aur fund ka srot article me nahi bataya gaya hai. Yah smarak-saundaryikaran ka kaam hai, samudayik-sanskritik karyakram me sirf maujoodgi nahi.',
    period: '2022-2027',
  },
];
// REJECT-LOG (michael-vincent-lobo): (1) Calangute box channel utility works (TOI aur Navhind Times, Sep 2026) — chal raha GSIDC kaam; MLA ne sirf nirikshan kiya aur Nov tak poora hone ka aashvasan diya ("karenge" wali khabar), lokarpan/shilanyas ka koi event nahi. (2) Boa Viagem pumping station udghatan aur Pilerne 15 MLD WTP (ET Infra, Oct 2026) — udghatan me MLA ki bhoomika spasht nahi; PWD/water-supply ka project, sirf bayaan diya. (3) Tivai Vaddo road works udghatan (Herald photo caption) — event ki tithi verify nahi ho saki. (4) Free WiFi suvidha udghatan (Herald) — tithi verify nahi ho saki. (5) Candolim PHC ke paas atikraman demolition (TOI, Sep 2026) aur Calangute shamshan-grih ke paas NGPDA demolition nirikshan — demolition drive hai, vikas-kaam nahi. (6) Sinquerim footpath kaam rokne par do karyakartaon ki giraftari (TOI, Sep 2026) — complaint MLA ne di thi; unke khilaf negative nahi. (7) GSIDC chairman padbhar — niyukti hai, vikas-kaam nahi. Pehchan-verification: sabhi articles me "Calangute MLA Michael Lobo" spasht hai; koi galat vyakti nahi. Negative jaanch: compound-wall FIR (Herald, Feb 2016), Dy Speaker kaal ka assault FIR, aur land-filling FIR (May 2022, New Indian Express) sab pre-term hain aur vartaman karyakaal me koi nayi prakriya-sthiti report nahi hui — isliye koi negative entry nahi. Birch nightclub fire (Dec 2025) me Lobo ke khilaf koi FIR/case nahi hai; poorv sahyogi Roshan Redkar ka aarop matra hai, janch-sthiti nahi — negative nahi bana.

// ---

// North Goa worker fragment — Khaunte (Porvorim), Ferreira (Aldona), researched 2026-10-15.

goaWorks['rohan-khaunte'] = [
  {
    title: 'Porvorim me Hanuman Mandir ke paas Panchayat Library ka shilanyas MLA Rohan Khaunte ne kiya',
    category: 'School',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'The Goan, 11 Nov 2025',
    sourceUrl: 'https://www.thegoan.net/goa-news/porvorim-elevated-corridor-to-be-ready-by-aug-2026-mla/138829.html',
    date: '2025-11-10',
    note: 'Porvorim me Hanuman Mandir ke paas Panchayat Library ke liye foundation stone ka karyakram hua jisme Tourism Minister aur Porvorim MLA Rohan Khaunte ne shilanyas kiya. Library Deen Dayal Upadhaya Scheme ke tahat ban rahi hai, anumanit laagat Rs 3.2 crore hai aur chhah mahine me poora hone ka lakshya bataya gaya. Ground plus two-storeyed building me ground floor par karate aur taekwondo jaise khelon ke prashikshan ki vyavastha, first floor par poori library aur chhoti digital library, second floor par janmdin aur health camp jaise ayojanon ke liye chhota hall, ladies aur gents washroom, aur senior citizens ke liye lift hogi. Senior citizens ki maang par post office ke liye bhi jagah rakhi gayi hai. Khaunte ne bataya ki Porvorim me underground electric cable bichhane ka kaam bhi poora ho gaya hai. Karyakram me ZP member Kavita Naik, Penha de Franca Sarpanch Swapnil Chodankar, panch sadasya aur sthaniya log maujood the. Sarkari scheme se funded kaam hai, shilanyas MLA ne kiya.',
    period: '2022-2027',
  },
  {
    title: 'Porvorim PHC me upgraded dialysis unit ka udghatan MLA Rohan Khaunte ne kiya',
    category: 'Aspataal',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'The Goan, 31 May 2025',
    sourceUrl: 'https://www.thegoan.net/goa-news/%EF%BB%BFfullfledged-phc-to-come-up-in-porvorim-tourism-minister/131113.html',
    date: '2025-05-30',
    note: 'Porvorim Primary Health Centre me upgraded dialysis unit ka udghatan Tourism Minister aur Porvorim MLA Rohan Khaunte ne kiya. Dialysis unit January 2024 me 4 bed aur 4 machine ke saath khuli thi, aur upgrade ke tahat 2 aur bed jode gaye jisse teen shifton me roz 18 marij ka ilaaj sambhav hua (pehli shift subah 6 se 10, doosri 10 se 2, teesri 2 se 6 baje). Waiting list me 13 marij the jisme se 12 ka ilaaj ab ho sakega. Health Officer Dr Sikander Talwar ne bataya ki 37 se 80 saal ke marij Porvorim constituency aur aas-paas ke ilakon se aate hain. Karyakram me Penha da Franca, Socorro aur Salvador do Mundo ke panch sadasya maujood the. Health Minister Vishwajit Rane ne January 2024 me hi poorn PHC ke liye sahmati di thi, jiska shilanyas Khaunte ke anusar jald hona tha (yeh ghoshna thi, alag entry nahi). Fund ka srot article me ullekh nahi hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (rohan-khaunte): (1) Gulo inspection, The Goan 16 Sep 2026 — sirf nirikshan tha, PWD contractor ko lighting sujhav diye, aur 'Ganesh Chaturthi ke baad udghatan hoga' pre-event ghoshna thi, isliye reject. (2) Porvorim flyover udghatan ghoshna, HT/ThePrint Aug 2026 — Khaunte ne sirf tareekh (10 Sep) ki ghoshna ki, udghatan Union Minister Nitin Gadkari ne kiya, NH-66 rajya-pariyojna me MLA ki concrete bhoomika article me nahi, isliye reject. (3) Town Square Porvorim samet 4 tourism pariyojnaon ka shilanyas, Oct 2025 — Amit Shah aur CM ki maujoodgi me hua Tourism vibhag ka faisla, mantri-niyam ke tahat vibhagiya kaam MLA seat entry nahi banta, isliye reject. (4) Elevated corridor 'Aug 2026 tak taiyar' bayan, The Goan Nov 2025 — sirf 'hoga' wali ghoshna, isliye reject. (5) Water Supply Improvement Project foundation stone, digitalgoa Feb 2025 — CM ne local MLA ke saath shilanyas kiya, Khaunte ki bhoomika sirf maujoodgi ki thi, isliye reject. (6) Porvorim Gymkhana fee vivad, The Goan Jun 2026 — naya kaam nahi, foundation pre-term tha, aur Khaunte dwara udghatan ka koi saboot nahi, isliye reject. (7) Full-fledged PHC ka 'jald shilanyas' — sirf ghoshna, isliye reject. Mantri-niyam ka palan: Town Square aur saari Tourism/IT ghoshnaon ko vibhagiya faisla maan kar reject kiya; sirf Porvorim seat ke vyaktigat satyapit kaam rakhe.

// North Goa worker fragment — Ferreira (Aldona), researched 2026-10-15.

goaWorks['carlos-alvares-ferreira'] = [
  {
    title: 'Moira ground par do high mast light ka udghatan Aldona MLA Carlos Alvares Ferreira ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Goemkarponn, 24 Nov 2025',
    sourceUrl: 'https://goemkarponn.com/aldona-mla-lights-up-moira-ground-delivering-key-youth-demand/',
    date: '2025-11-22',
    note: 'Moira ke yuvaon ki lambe samay se chali aa rahi maang poori hui jab Aldona MLA Adv Carlos Alvares Ferreira ne Moira ground par nayi lagi do high mast light ko urja dekar chalu kiya. Light Goa Tourism Development Corporation (GTDC) dwara uplabdh karayi gayi thi. Ferreira ne kaha yeh un chunav ke turant baad kiye gaye vaadon me se ek tha, aur Chief Electrical Engineer Stephen Fernandes ne samay par anumati dilayi jabki Electricity Department ki team ne turant bijli connection diya. Moira Comunidade ne installation ke liye NOC diya. Karyakram me Moira Sarpanch Sagar Naik, Panch Freeda DSa, comunidade adhyaksh aur kai grameen maujood the, aur MLA ne ground ke aage ke sudhar ka bhi ashwasan diya. Light sarkari (GTDC) dwara di gayi, pehal aur follow-up MLA ka tha. Goemkarponn Goa ka digital news portal hai.',
    period: '2022-2027',
  },
  {
    title: 'Calvim me footpath marammat karya ka aarambh Aldona MLA Carlos Alvares Ferreira ne kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'The Goan, 9 Oct 2025',
    sourceUrl: 'https://www.thegoan.net/goa-news/aldona-sees-devpt-works-despite-mla-being-in-opposition/137319.html',
    date: '2025-10-08',
    note: 'Aldona ke Calvim me mansoon me beh gaye footpath ki marammat ka karya Ferreira ne shuru karwaya. Abi Mendes House se Ana Maria House tak aur aas-paas ke ilaake, Ward No 9, Aldona Village Panchayat ka yeh kaam MLA Local Area Development (MLA-LAD) scheme ke tahat Rs 19.4 lakh me sanction hua tha aur 90 din me poora hone ki apeksha thi. Prastav ko tab PWD portfolio sambhal rahe Chief Minister Pramod Sawant aur PWD engineers ne manzoor kiya tha. Ferreira ne kaha MLA-LAD ke tahat Rs 24 lakh ki paanch aur sadkein bhi li jayengi (yeh bhavishya ki ghoshna hai, alag entry nahi) aur vipaksh me hote hue bhi vikas karya aage badh rahe hain. Manzoori sarkar ki, karyaarambh MLA ne kiya.',
    period: '2022-2027',
  },
  {
    title: 'Carona-Calvin bridge ke restoration karya ka aarambh Aldona MLA Carlos Alvares Ferreira ne kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'Goa9, 28 Nov 2023',
    sourceUrl: 'https://www.goa9media.com/2023/11/28/govt-built-structures-need-regular-maintenance-ferreira/',
    date: '2023-11-27',
    note: 'Aldona ke Carona-Calvin bridge ke restoration ka udghatan Ferreira ne kiya. Bridge ki steel work me zang lag gaya tha, rang utar gaya tha aur approach road ko bhi marammat ki zaroorat thi, jiske liye Rs 59 lakh ka kaam liya gaya. Tender prakriya poori ho chuki thi aur work order jaari ho gaya tha. Kaam ko Chief Minister Pramod Sawant ne manzoor kiya tha aur tab ke PWD mantri Nilesh Cabral ne Ferreira ke lagatar weekly follow-up ke baad file clear ki thi. MLA ne principal chief engineer ki sakriyata ki bhi sarahna ki. Zang ka kaam poora hone ke baad lighting ka kaam bhi hona tha. Corjuem bridge ka kaam "jald hoga" wala ashwasan bhavishya ki ghoshna hai, alag entry nahi. Manzoori CM ki, follow-up aur karyaarambh MLA ka. Goa9 chhota local portal hai, isliye disclosure diya gaya hai.',
    period: '2022-2027',
  },
  {
    title: 'Nachinola junction se Jagbai mandir tak sadak marammat ka udghatan Aldona MLA Carlos Alvares Ferreira ne kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Goa9, 6 Oct 2023',
    sourceUrl: 'https://www.goa9media.com/2023/10/06/road-restoration-for-digging-works-ferreira-urges-government/',
    date: '2023-10-05',
    note: 'Nachinola junction se Shree Devi Jagbai mandir tak sadak ki marammat ka udghatan Ferreira ne kiya. Sadak ko paani pipeline bichhane ke liye khoda gaya tha aur 3-4 saalon tak uski marammat nahi hui thi, jisse uski chaudai 4.5 meter se ghat kar 3 meter reh gayi thi. Yeh sadak Nachinola ko Uccasaim se jodti hai aur Gavar tak jaati hai. Kaam Rs 35 lakh me tender hua tha. MLA ne sarkar aur sambandhit PWD engineers ka dhanyavad kiya aur maang ki sadak khodne wali pariyojnaon ke tender me hi marammat shamil ho. Goa9 chhota local portal hai, isliye disclosure diya gaya hai.',
    period: '2022-2027',
  },
  {
    title: 'Aldona me gutter drainage marammat ka shilanyas Aldona MLA Carlos Alvares Ferreira ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'Goa Today 24x7 News, 23 Apr 2026',
    sourceUrl: 'https://www.goatoday24x7news.com/adv-carlos-slams-govt-for-wasteful-expenditure-lack-of-funds-for-panchayat-works/',
    date: '2026-04-17',
    note: 'Aldona gaon me Premnath Polle ke ghar se Podwal ke talab tak gutter drainage ki marammat ka shilanyas Ferreira ne kiya. Yeh kaam Aldona Constituency me MLA-LAD Scheme ke tahat Ward No 8, Village Panchayat Aldona me liya gaya. Kaam Rs 25 lakh ke anuman par tender hua tha aur Rs 23 lakh me 90 din ki deadline ke saath liya gaya. Herald ki report ke anusar shilanyas shukravar ko hua tha, jo 17 Apr 2026 banta hai. Karyakram me sarkar ki fizoolkharchi par MLA ki tippani (Rs 57 crore race track, Rs 16 crore Verna stadium) sirf bayan tha, alag entry nahi. Goa Today 24x7 News chhota local portal hai, isliye disclosure diya gaya hai.',
    period: '2022-2027',
  },
  {
    title: 'Bastora me Xell par sadak hot-mixing karya ka aarambh Aldona MLA Carlos Alvares Ferreira ne kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'The Goan, 10 Apr 2025',
    sourceUrl: 'https://www.thegoan.net/goa-news/delayed-road-repair-work-gets-underway-in-bastora/128770.html',
    date: '2025-04-07',
    note: 'Bastora ke Xell par Aldona constituency me sadkon ki resurfacing aur hot-mixing ka kaam Ferreira ne shuru karwaya. 11kV underground power cabling ke kaam se mahinon tak kharaab hui sadkon ki marammat ke liye Rs 13 crore ka package sanction hua tha jisme Aldona ke saath Saligao aur Calangute ke kuchh hisse bhi shamil the. Ferreira ke anusar file CM star par atki thi aur nagrikon ke kanooni notice ke dabav ke baad cabinet ne package ko manzoor kiya. Work order me deri hui thi. MLA ne dusre gaonon me bhi marammat jald shuru hone ka ashwasan diya (bhavishya ki ghoshna, alag entry nahi). Package sarkar se manzoor, karyaarambh ka udghatan MLA ne kiya.',
    period: '2022-2027',
  },
];
// REJECT-LOG (carlos-alvares-ferreira): (1) Pomburpa ferry point retaining wall foundation, Goan Reporter Jun 2025 — page par sirf YouTube video embed tha, koi text reporting nahi, YouTube-only rule par reject; pehchan (Aldona MLA Carlos Alvares Ferreira) headline me saaf thi lekin saboot text me nahi mila. (2) Tourism Minister Khaunte dwara Aldona me foundation stones, Goa Today Jul 2026 (Nachinola children park, Jagbai Devasthan, Krishna Panch Pandav Devasthan) — Ferreira sirf maujood the, Khaunte ka Tourism vibhag ka kaam doosri constituency me, dono ke liye reject. (3) Milagres credit society ki Aldona branch ka udghatan, The Goan Apr 2026 — niji sahakari sanstha ka karyakram, kshetra-vikas ka kaam nahi, reject. (4) Carlos-Vijai late-night walk, The Goan Oct 2026 — Coconut Avenue Margao me, Aldona kshetra se bahar, reject. (5) 'Govt spends funds on big projects, villages ignored' bayan, The Goan Apr 2026 — sirf aalochanaatmak bayan, kaam nahi, reject. (6) Ramtaleswar tournament udghatan, Herald — khel pratiyogita, vikas karya nahi, reject. (7) 'Rs 24 lakh ki paanch aur sadkein' (Calvim article me) aur 'Corjuem bridge jald hoga' (bridge article me) — 'karenge' wali ghoshnaen, reject. Naam-trap check: har entry me article ne spasht roop se 'Aldona MLA Adv Carlos Alvares Ferreira' likha tha, isliye kisi doosre Ferreira se bhram nahi hua.

// ---

// North Goa worker fragment — Monserrate (Panaji), R. Fernandes (Santa Cruz), researched 2026-10-15.

goaWorks['atanasio-monserrate'] = [];
// REJECT-LOG (atanasio-monserrate): profile KHAAALEE rakhi — mantri-niyam (Revenue mantri; sirf Panaji seat ke vyaktigat satyapit kaam) ke tahet saboot nahi mila. Reject: (1) Feb 2026 me CM Pramod Sawant dwara Rs 135 cr smart-city projects ka lokarpan (Fishermen Wharf Ribandar, Ro-Ro ramp, Miramar EV charging, SCADA 24x7 water, EDC Patto pedestrian spine) — Monserrate sirf upasthit the, udghatan CM ne kiya, pariyojna IPSCDL/rajya ki (The Goan, 14 Feb 2026); (2) Smart City works ke nirikshan (Herald, St Inez daura; Herald, May 2025 site inspection) — sirf nirikshan, koi poora kaam nahi; (3) PWD mantri Digambar Kamat se sadkon par baithak (The Goan, Sep 2025; Herald) — sirf maang/baatcheet, koi sanction order nahi; (4) Miramar beach toilet me cafe/shops ka virodh (TOI) — vibhagiya stand, vikas-kaam nahi; (5) Miramar promenade parks ki upeksha wali khabar (Herald) — unka kaam nahi. Koi negative entry nahi — past cases pre-term hain, vartaman karyakaal me FIR/case proceedings ki sthiti wali established reporting nahi mili. Pehchan: Panaji MLA + Revenue Minister Atanasio 'Babush' Monserrate, sahi vyakti.

goaWorks['rodolfo-louis-fernandes'] = [
  {
    title: 'Santa Cruz ke naye Panchayat Ghar ka shilanyas MLA Rudolf Fernandes ne sarpanch evam panchayat ke saath kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'The Goan, 20 Dec 2022',
    sourceUrl: 'https://www.thegoan.net/goa-news/religious-leaders-bless-foundation-stone-of-st-cruz-panchayat-ghar/92866.html',
    date: '2022-12-19',
    note: 'Goa Liberation Day (19 December 2022) ko Santa Cruz me naye Panchayat Ghar ka shilanyas hua, jise St Cruz MLA Rodolfo Louis Fernandes ne sarpanch Jennifer Oliveira, deputy sarpanch Domnic Pereira, ZP member Shiny Oliveira, panchas aur Hindu-Muslim-Isai dharm-guruon ke saath milkar unveil kiya. Lagat Rs 98 lakh, Atmanirbhar Swayampurna scheme se; green building, keval ground floor, poora hone ki avadhi ek saal rakhi gayi thi. Sthaniya maang varshon purani thi — purana ghar congested premises me chal raha tha. Credit pardarshita: yeh panchayat ki pariyojna hai jiska fund sarkari scheme se aaya, MLA ne samaroh me shilanyas kiya aur bhavishya me vistar ke liye fund dilane ka vaada kiya; swikriti ka GO/sanction-order article me uddhrit nahi hai, isliye stage shilanyas hi darj hai. Baad me Herald ki ek report me is site par khazan zameen bharne ke aarop par GCZMA ka show-cause notice aur High Court me PIL darj hone ki khabar aayi thi, jis se nirmaan par sawal uthe.',
    period: '2022-2027',
  },
];
// REJECT-LOG (rodolfo-louis-fernandes): 1 entry rakhi (St Cruz Panchayat Ghar shilanyas). Reject: (1) St Cruz village school playground synthetic turf ka lokarpan — CM ne kiya, MLA sirf upasthit (Herald); (2) Chimbel Junction Flyover — rajya pariyojna, MLA ke sirf media comments (YouTube-only srot, waise bhi reject); (3) Unity Mall + Prashaasan Stambh virodh/protests — vikas-kaam nahi, virodh; (4) BJP office row Navhind Times — rajnaitik vivad, kaam nahi; (5) Santa Cruz panchayat ghar ke nirmaan-poorn hone ki khabar — nahi mili; (6) gram sabha house-tax issue — niti-maamla, kaam nahi; (7) Victor Gonsalves ke aarop (Herald, pre-election) — karyakaal se pehle ke, aur vartaman karyakaal me FIR/adalaati proceedings ki sthiti nahi — negative reject; koi established current-term FIR-based negative nahi mila. Pehchan: St Cruz MLA Rodolfo Louis 'Rudolf' Fernandes (Sep 2022 Congress se BJP me aaye; karyakaal nirantar), sahi vyakti.

// ---

// North Goa worker fragment — Borkar (St. Andre), Faldessai (Cumbarjua), researched 2026-10-15.

goaWorks['viresh-mukesh-borkar'] = [
  {
    title: 'TCP office virodh ke dauran files churane ke aarop me police ne MLA Viresh Borkar aur 28 samarthakon par case darj kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Daijiworld, 27 Feb 2026',
    sourceUrl: 'https://www.daijiworld.com/news/newsDisplay?newsID=1307644',
    date: '2026-02-27',
    note: '20-21 Feb 2026 ko Borkar ne Chief Town Planner ke Patto karyalaya me Section 39A ke tahet Pale-Siridao me zone badlav ke virodh me pradarshan ka netritva kiya tha; police ne unhe aur 28 samarthakon par TCP vibhag karyalaya se files aur saman churane ka aarop lagakar case darj kiya. Police-jankari ke hawale se tribal neta Govind Shirodkar ne bataya ki 29 pradarshankariyon par 10 files, pankhe aur almari churane ka aarop hai; Shirodkar ne aarop ko behuda bataya lekin Borkar ka seedha jawab report me uplabdh nahi hai. Usi din North Goa Collector Ankit Yadav ne Borkar ko patra saumpa ki St Andre me Section 39A ke tahet saari swikritiyan radd kar di gayi hain, jiske baad Borkar ne apna 6-din ka aamaran anshan wapas liya. Ye aarop pradarshan se juda hai, vikas-karya se nahi.',
    period: '2022-2027',
  },
];
// REJECT-LOG (viresh-mukesh-borkar): works section khaali hai (1 negative entry upar hai). Pehchan pakki hai — sabhi reports me St Andre ke RGP MLA Viresh Mukesh Borkar hi hain. Reject kiye: (1) Old Bambolim Road hot-mixing udghatan, ambulance service udghatan, Nauxim solar light shilanyas — sab YouTube-only, reject; (2) Azossim-Mandur bunds kaam shuru aur Neura retaining wall shilanyas — goanreporter/rdxgoa pages par sirf YouTube embed, koi padhne yogya text nahi, reject; (3) St Andre Panchayat Ghar udghatan (goa9media) — CM ne udghatan kiya, Borkar sirf maujood the, reject; (4) Mandur health centre suvidhaen (TOI) — sirf maang, reject; (5) school books/stationery vitran (goakhabar) — vyaktigat welfare, reject; (6) rebuildinggoa.substack ke teen lekh — blog source, hagiographic tone, bina independent saboot, reject; (7) Daijiworld press-conference me sadak/bijli/paani sudhar ke dawe — bina dastavezi kaam ke aaspasht dawe, reject; (8) Agassaim site inspection 6 Jul 2026 (goatoday24x7news) — sirf nirikshan, reject; (9) vidhansabha LAQ prashn (paani pipeline) — prashn maang hai, kaam nahi, reject.

goaWorks['rajesh-faldessai'] = [
  {
    title: 'Carambolim ke Saklebhat me samudaayik shauchalaya ke nirman-karya ka udghatan MLA Rajesh Faldessai ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'Goemkarponn, 15 Mar 2024',
    sourceUrl: 'https://goemkarponn.com/falessai-inaugurates-community-toilet-development-works-in-carambolim/',
    date: '2024-03-14',
    note: 'MLA Rajesh Faldessai ne 14 Mar 2024 ko Carambolim panchayat ke Saklebhat me samudaayik shauchalaya (kul 5 toilet) ke nirman-karya ka udghatan kiya, matlab kaam ki aupcharik shuruaat hui; poornata ki report article me nahi hai. Fund Deccan Fine Chemicals ne CSR ke tahet diya; company ne kaam ka poora kharcha uthaya, MLA ne swayam nirman nahi karaya balki udghatan kiya. Goemkarponn ek Goa digital news outlet hai. ZP sadasya Dhaku Madkaikar, sarpanch Kusta Salelkar aadi karyakram me maujood the.',
    period: '2022-2027',
  },
  {
    title: 'Carambolim panchayat me XV Finance Commission ke vikas-karyaon ka shilanyas MLA Rajesh Faldessai ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'Goemkarponn, 15 Mar 2024',
    sourceUrl: 'https://goemkarponn.com/falessai-inaugurates-community-toilet-development-works-in-carambolim/',
    date: '2024-03-14',
    note: '14 Mar 2024 ko MLA Rajesh Faldessai ne Carambolim panchayat me XV Finance Commission ke tahet hone wale vibhinn vikas-karyaon ka shilanyas rakha; article me vyaktigat kaamon ki soochi nahi di gayi hai isliye kis-kis kaam par shilanyas hua ye report se spasht nahi. Fund sarkari XV Finance Commission ka hai aur karyakram me panchayat ke sarpanch, up-sarpanch aur ZP sadasya maujood the, jisse lagta hai ki kaam panchayat ke madhyam se sanctioned the. Goemkarponn ek Goa digital news outlet hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (rajesh-faldessai): pehchan pakki hai — Cumbarjua ke MLA aur Goa Rehabilitation Board ke chairman Rajesh Faldessai hi sabhi reports me hain. Reject kiye: (1) Cumbharjua bund (1.8 km) punarnirman ka vachan (TOI, Jan 2025) — sirf 'karenge' khabar, June 2025 tak poornata ki koi follow-up report nahi mili, reject; (2) Naroa Divar sluice gate aur bund sudridhikaran, Rs 8.85 crore, shilanyas (primetvgoa) — source site ab suspended hai, khud khol nahi paya, aur kisi established outlet me ye khabar nahi mili, reject; (3) Sao Matias Malar shopping complex shilanyas, Rs 39 lakh (primetvgoa) — wahi suspended source, reject; (4) Daujim overbridge shilanyas (goanreporter) — page par sirf YouTube embed, reject; (5) Carambolim Lake udghatan aur S.S.V. Govt High School playground udghatan (goa9media) — dono me mantri ne udghatan kiya, Faldessai sirf maujood the, reject; (6) school materials CSR vitran (allycaral) — vyaktigat welfare vitran, vikas-kaam nahi, reject; (7) Devi Shantadurga ko sone ka mukut-haar (allycaral) — niji dharmik mannat, reject; (8) Naroa Ghat Aarti project radd hone ka dawa (Navhind) aur Carambolim mega project virodh ke dawe — virodh/rajnaitik gatividhi, vikas-kaam nahi, reject; (9) Bainguinim waste plant par mantri se vivad (TOI) — rajnaitik bayanbaji, reject. Koi negative entry nahi mili.

// ---

// North Goa worker fragment — P. Shet (Maem), Sawant (Sanquelim), researched 2026-10-15.

goaWorks['premendra-vishnu-shet'] = [
  {
    title: 'Pilgao panchayat me vendors ke liye market shed ka shilanyas Mayem MLA Premendra Shet ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'GOA365, 14 Aug 2023',
    sourceUrl: 'https://www.goa365.tv/infrastructure/E/vendors-at-ease-after-foundation-stone-laid-for-market-shed-at-pilgao-english-goa365/15775.html',
    date: '2023-08-12',
    note: 'Mayem MLA Premendra Shet ne Zilla Panchayat sadasyon aur sthaniya vendors ke saath milkar Pilgao Panchayat me market shed ka shilanyas 12 August 2023 ko kiya. Chhote vendors ki lambe samay se chali aa rahi maang par ye shed ZP fund se banega, taaki vendors ko barish ke mausam me sadak kinare risk lekar vyapaar na karna pade. GOA365 ki report se iski pushti hui hai.',
    period: '2022-2027',
  },
  {
    title: 'Mayem ke Shri Mahamaya High School me computer lab ka lokarpan MLA Premendra Shet ne kiya',
    category: 'School',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Goa News Link, 2 Jul 2025',
    sourceUrl: 'https://goanewslink.com/300-students-at-mayem-set-to-benefit-from-vedanta-computer-lab-at-shri-mahamaya-high-school/',
    date: '2025-07-01',
    note: 'Vedanta Iron Ore Goa ne Vedanta Foundation ke tehet Mayem ke Shri Mahamaya High School me ek aadhunik computer lab sthapit kiya hai, jisme laptops aur aadhunik seekhne ke saadhan hain aur lagbhag 300 chhatron (classes V to X) ko labh milega. Lab ka lokarpan 1 July 2025 ko Mayem MLA Premendra Shet ne Vedanta ke Deputy CEO Dhirajkumar Jagdish, Dyanprasark Vidya Mandal ke adhyaksh, principal aur school prashasan ki maujoodgi me kiya. Pura nivesh aur sthapna Vedanta ka CSR hai; MLA ki bhoomika lokarpan ki rahi, jiska poora disclosure yahan darj hai. Goa News Link ki report se pushti hui hai.',
    period: '2022-2027',
  },
  {
    title: 'Mayem me tailoring aur computer training kendron ka lokarpan MLA Premendra Shet ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'The Goan, 4 Nov 2025',
    sourceUrl: 'https://www.thegoan.net/goa-news/tailoring-computer-training-centres-open-at-mayem/138499.html',
    date: '2025-11-03',
    note: 'Mayem me yuvaon aur mahilaon ke liye NSDC-pramanit pathyakram dene wale do kaushal-vikas kendron — ek naya tailoring training centre aur Haldanwadi se Mayem Panchayat parisar me sthanantarit computer training centre — ka lokarpan Mayem MLA Premendra Shet ne kiya, jisme sarpanch, panchayat sadasya aur sambandhit sangathan ke pratinidhi maujood rahe. Dono kendra Vedanta Sesa Goa ne Vedanta Foundation ke tehet apne kaushal-vikas aur samuday-kalyan karyakram ke roop me sthapit kiye hain; kharcha aur sthapna Vedanta ki, lokarpan MLA ka — poora disclosure yahan darj hai. Karyakram me computer pathyakram poora karne wale chhatron ko pramanpatra bhi baante gaye. The Goan ki report (4 Nov 2025) se pushti hui hai; ghatna ki tithi report-prakashan ke aadharn par 3 Nov 2025 mani gayi hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (premendra-vishnu-shet): Piligao-Amona bridge (Mandovi ki sahayak nadi par): Feb 2024 me Shet ne Vidhan Sabha me calling attention diya aur prastav bheja, sarkar ne sirf zameen-adhigrahan ka prastav shuru karne ki baat kahi — prastav/maang stage, reject. Chorao Bridge: CRZ clearance ka intezar, 'kaam shuru hoga' wali 'karenge' khabar — reject. Vedanta ka Maem Bandhara watershed project (Kumbharwada): company ka CSR, Shet sirf 'graced' (mukhya atithi ke roop me maujood) — concrete bhoomika nahi, reject. Street Providence ka 5va women shelter home (Chorao, 16 Sep 2023): NGO ka apna kaam, Shet chief guest; srot NGO ki apni site bhi aur kalyan-shreni ka kaam — reject. Mayem Lake tourist bus: Shet ne inaugurate kiya lekin sthaniyaon ke anusaar pehli trip ke baad aur koi trip nahi hui — kamzor/nakara initiative, reject. Narayan Zantye College library block shilanyas (Feb 2024): Union MoS Shripad Naik ne MPLAD se kiya, Shet sirf maujood — reject. Vhalshim-Vathadev bypass (Jun 2024) aur Assonora-Mulgao bypass (Sep 2024): CM ne shilanyas/lokarpan kiya, Shet sirf maujood — rajya pariyojna, reject. Feb 2025 me Mayem ke 5 karyon ka shilanyas (DIP press note — 11KV underground cabling, MI tank, sluice gate, Vithal mandir beautification): CM ne kiya, Shet sirf maujood aur sambodhan — MLA ki concrete bhoomika nahi, reject. 'Mayem MLA mulls green school at Ona' (Dec 2022): sirf vichar/prastav — reject. Bicholim/Valvanti nadiyon ki gahrai safai ki maang (Herald 2026): Shet ki sirf maang, environmental study ka order vibhag ne diya — reject. Shirgao school punarnirman ki chetawani (Nov 2023): sthaniyaon ki maang, koi kaam nahi — reject. Mayem custodian sanad mudda (Jul 2022): CM ka prashasanik faisla, Shet ne sirf avagat karaya — reject. NGDMFT ki Rs 21 crore pariyojnaen (Oct 2026): Collector ki adhyakshta wali council ne manzoor kin, Shet sirf trustee ke roop me maujood — reject. Pehchan: Premendra Vishnu Shet = Mayem AC ke BJP MLA (Mar 2022 se, poorv MGP, bhai Anant Shet poorv speaker) — milta-julta galat vyakti nahi mila. Koi FIR/case/reportable negative nahi mila.

goaWorks['pramod-sawant'] = [
  {
    title: 'Sanquelim me Vaalvanti River front sundarikaran pariyojna ka shilanyas CM Dr Pramod Sawant ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'The Goan, 4 Jan 2026',
    sourceUrl: 'https://www.thegoan.net/goa-news/development-of-sanquelim-top-priority-of-govt-cm/141428.html',
    date: '2026-01-04',
    note: 'Mukhyamantri Dr Pramod Sawant ne 4 January 2026 ko apne hi chunavi kshetra Sanquelim me Vaalvanti nadi ke river front ke sundarikaran aur landscaping ki pariyojna ka shilanyas kiya, jiski lagat lagbhag Rs 8 crore batayi gayi hai aur jisme bhavya pravesh dwar, bachchon ka park, open garden, open gym aur walking track shamil hain. Sanquelim ki mayor Siddhi Prabhu ke anusaar ye pariyojnaen Sawant ke netritva me Sanquelim ke liye swikrit ki gayin hain aur unka karyanvayan chal raha hai. CM hone ke kaaran sanction sarkari hai, lekin shilanyas unhone apni seat ke liye vyaktigat roop se kiya — isliye sakht CM-niyam ke tehet ye entry sirf seat-vikas ke roop me darj hai, rajya-neeti ke roop me nahi. The Goan ki report se pushti hui hai.',
    period: '2022-2027',
  },
  {
    title: 'Sanquelim me jeernoddhar ke baad 17vi sadi ke Sanquelim Fort ka lokarpan CM Dr Pramod Sawant ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Times of India, 3 Jun 2026',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/goa/a-fort-reborn-sanquelims-17th-century-landmark-gets-a-new-lease-of-life/articleshow/131491061.cms',
    date: '2026-06-03',
    note: 'Mukhyamantri Dr Pramod Sawant ne 3 June 2026 ko apne chunavi kshetra Sanquelim ke kendra me sthit 17vi sadi ke Sanquelim Fort ka jeernoddhar ke baad lokarpan kiya, jo Sawant Bhonsle shasakon dwara banwaya gaya tha aur varshon se upekshit tha. Puratatva vibhag ne lagbhag Rs 3 crore ki lagat se iska jeernoddhar paramparik choone wale mortar se kiya hai, aur parisar me ab landscaped garden, pustakalaya, varishth nagrikon ka recreation centre aur ek chhota restaurant hai. Jeernoddhar ka kaam poorv puratatva mantri ke karyakaal me shuru hua tha; Sawant ne is avsar par fort me National School of Drama aur IGNCA kendra sthapit karne ki yojna bhi ghoshit ki. CM ke roop me ye sarkari kaam hai, lekin Sanquelim seat ke liye unke dwara vyaktigat roop se kiya gaya lokarpan hai — isliye sakht CM-niyam ke tehet darj hai. Times of India ki report se pushti hui hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (pramod-sawant): Sakht CM-niyam ke tehet reject — Bicholim bus stand lokarpan (Sep 2026, Rs 16 crore, GSIDC): Bicholim AC, seat se bahar; Cuncolim vikas karyon ka shilanyas (Apr 2026) aur Sancordem/Dharbandora panchayat bhavan (Sep 2026): doosre chunavi kshetron ke kaam; Seva Jyoti Yatra (Oct 2026): rajnaitik abhiyan, vikas kaam nahi; Jal Shakti Abhiyaan launch (Jun 2022, Ravindra Bhavan Sanquelim): rajya yojna ka karyakram, seat-vishesh kaam nahi; school-unnayan ki rajya-neeti (repair claim, Mulyavardhan, STEM labs): vibhagiya neeti, seat-vishesh dastavezi pahal nahi. Sept 11, 2026 ko Sanquelim ke navikrit sarkari primary schools ka lokarpan (ANI video): sirf YouTube aur aggregator coverage mili, koi text article nahi mila — srot-niyam se reject. Govt Higher Secondary School Sanquelim me STEM Lab (ONGC CSR, TOI Jul 2025): CSR pariyojna aur rajya-shiksha neeti ka hissa, seedhi seat-pahal nahi — reject. Pehchan: Dr Pramod Sawant = Sanquelim AC ke BJP MLA aur Goa ke CM — doosre kshetron ke unke karyakram entry me nahi liye. Koi reportable negative nahi mila (Apr 2021 ka bridge-lokarpan Covid-bheed vivad pre-term hai, isliye negative bhi nahi bana).

// ---

// North Goa worker fragment — D. Rane (Poriem), V. Rane (Valpoi), researched 2026-10-15.

goaWorks['deviya-vishwajit-rane'] = [
  {
    title: 'Thane panchayat ke Charwane aur Hivre Budruk me navikrit anganwadi kendron ka lokarpan MLA Deviya Rane ne kiya',
    category: 'School',
    badge: 'news',
    stage: 'poorna',
    sourceLabel: 'GoaPlusNews, 7 Jul 2026',
    sourceUrl: 'https://goaplusnews.com/dr-deviya-rane-inaugurates-renovated-anganwadi-centres-at-charwane-and-hive-budruk-in-thane-panchayat/',
    date: '2026-07-07',
    note: 'Poriem kshetra ke Thane panchayat me Charwane aur Hivre Budruk ke anganwadi kendron ki marammat ke baad 7 July 2026 ko MLA Deviya Rane ne dono ka lokarpan kiya, jisme ZP sadasya, sarpanch aur panchayat adhikari upasthit the. Charwane kendra me chhat, shauchalaya, khidki-darwaze, rang-rogan, plumbing aur kitchen platform ka kaam hua, Hivre Budruk me chhat, farsh aur shauchalaya ki marammat hui. Article me fund ka srot (MLALAD ya sarkari yojana) spasht nahi hai, isliye kharcha-kisne-uthaya par disclosure: gyaat nahi. Disclosure: GoaPlusNews chhota local portal hai, established media nahi; khabar post-event reporting hai.',
    period: '2022-2027',
  },
  {
    title: 'Swayampurna Goa yojana ke tahat Keri gaon panchayat ke punarnirmit bhawan ka lokarpan MLA Deviya Rane ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'poorna',
    sourceLabel: 'Goa9Media, 14 Aug 2024',
    sourceUrl: 'https://www.goa9media.com/2024/08/14/poriem-mla-dr-deviya-rane-inaugurated-the-reconstructed-old-building-of-village-panchayat-keri-under-the-aatmanirbharbharat-swayampurnagoa-schemein-the-presence-of-the-sarpanch/',
    date: '2024-08-14',
    note: 'Keri gaon panchayat ke purane bhawan ke punarnirman ke baad 14 August 2024 ko MLA Deviya Rane ne uska lokarpan kiya, sarpanch, up-sarpanch aur panchayat sachiv upasthit the. Kaam Aatmanirbhar Bharat / Swayampurna Goa yojana ke tahat hua, isliye fund sarkari yojana se aaya — sanstha ka naam article me nahi hai. Disclosure: Goa9Media chhota local portal hai aur article me tasveeron ke saath bahut sankshipt note hi hai, lekin lokarpan ka tathya tasveer-sahit darj hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (deviya-vishwajit-rane): CM dwara Sattari pariyojnaon ka shubharambh (The Goan + ETInfra, 9 Dec 2024 — wellness centre, eco-cottages, Sateri Ajoba mandir, 15 MLD WTP, Keri feeder cabling) reject — Deviya sirf upasthit thin aur samanya tippani ki, unki concrete bhoomika article me spasht nahi. Navhind Times ka Poriem projects roundup (May 2026) reject — unka naam article me hai hi nahi, mukhya bhavan CM ne kiye. Keri feeder underground cabling ka shilanyas (Goa9Media, Sep 2023) reject — shilanyas pati aur Health mantri Vishwajit Rane ne rakha, Deviya sirf upasthit; pati ka kaam patni par kabhi nahi. Chorla Ghat kachra nirdesh (The Goan, Sep 2026) reject — sirf nirikshan/nirdesh, koi poora kaam nahi. ESA draft aapatti (The Goan, Jul 2026) aur Valvanti nadi baadh mudda (Daijiworld, Mar 2026) reject — neeti-pratinidhitva/maang, vikas-kaam nahi. GIM sanitation hadtal hastakshep (The Goan, Sep 2026) reject — shramik-vivad, vikas-kaam nahi. School ceiling fan ghatna (The Goan/TOI, Oct 2025) reject — thekedaar ki laparwahi ka mamla, unpar koi aarop/FIR nahi, negative entry nahi banti. GFDC cashew revival targets (Navhind, Apr 2025) reject — corporation-adhyaksh ki bhoomika aur 'karenge' wale lakshya, poora kaam nahi. Third district swagat, Union Budget tippani, Wildlife Week upasthiti, ZP chunav matdan, chhatra doobne par tippani — sab tippani/upasthiti, reject. Pehchan: har khabar me 'Poriem MLA Dr Deviya Rane' spasht hai, pati se bhram ka koi mamla nahi mila.

// ---

goaWorks['vishwajit-pratapsingh-rane'] = [
  {
    title: 'Valpoi me Rs 3.7 crore ki lagat se bane Zonal Agriculture Office bhawan ka lokarpan, pariyojna ko MLA Vishwajit Rane ne aage badhaya',
    category: 'Any',
    badge: 'news',
    stage: 'poorna',
    sourceLabel: 'The Goan, 13 Oct 2026',
    sourceUrl: 'https://www.thegoan.net/goa-news/modernising-agri-will-boost-farmers-progress-cm/155520.html',
    date: '2026-10-13',
    note: 'Valpoi me naya Zonal Agriculture Office bhawan 13 October 2026 ko ban kar taiyaar tha aur CM Pramod Sawant ne uska lokarpan kiya; bhawan ki lagat Rs 3.7 crore aur Sattari ke lagbhag 8000 kisan labhanvit honge. Sanction Krishi Vibhag ne di aur udghatan CM ne kiya. Credit-pardarshita: The Goan ki sambandhit report ke mutabik sthaniya MLA Vishwajit Rane ne is pariyojna ko aage badhaya (pursued), isliye unki bhoomika kshetr-ke-vidhayak ki hai — ye unke Health mantri vibhag ka kaam nahi hai. Vishwajit Valpoi ke MLA hain aur Deviya Poriem ki — pehchan pakki hai, patni ka kaam yahan joda nahi gaya.',
    period: '2022-2027',
  },
  {
    title: 'Valpoi nagar ki sadkon aur footpathon ke sudhar ke liye GSUDA se Rs 3.66 crore ki swikriti, tender jari',
    category: 'Sadak',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The Goan, 17 Apr 2026',
    sourceUrl: 'https://www.thegoan.net/goa-news/roads-footpaths-to-get-upgrade-in-valpoi-with-rs-366-cr-fund/146732.html',
    date: '2026-04-17',
    note: 'Valpoi nagarpalika kshetra ki kharab sadkon aur footpathon ke liye Goa State Urban Development Agency (GSUDA) ne lagbhag Rs 3.66 crore ke vikas-marammat karyon ki swikriti di aur tender jari ho gaya tha, kaam shuru hona baki tha. Credit-pardarshita: GSUDA ne sanction kiya; The Goan ke mutabik sthaniya MLA aur Urban Development Mantri Vishwajit Rane ke prayason se pariyojna ko gati mili. Disclosure: ve UD mantri bhi hain, isliye sanction me unki mantri-bhoomika aur MLA-bhoomika dono judi hain — lekin kaam unki apni seat Valpoi ka hai, isliye mantri-niyam ke tahat shamil hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (vishwajit-pratapsingh-rane): Sattari pariyojna-shubharambh (Dec 2024) reject — mantri ke roop me tippani, vibhag/rajya faisle, seat-ka-kaam nahi. Keri feeder cabling shilanyas (Sep 2023) reject — Poriem me hua, unki seat nahi; mantri-niyam sakht hai. Canacona municipal building lokarpan (Navhind, Feb 2026) reject — Canacona kshetra se bahar hai. Valpoi nagarpalika chunav jeet (Herald, Sep 2025) reject — rajnaitik khabar, vikas-kaam nahi. Navelim hospital shilanyas, GMC super-speciality block, Usgao reservoir — sab doosre kshetron ke mantri-vibhagiya kaam, reject. Health vibhag ke saare faisle/udghatan mantri-niyam se reject. Koi credible negative entry nahi mili (TCP vivad wali HT khabar purani mantri-portfolio tippaniyan hain, vartaman karyakaal me nayi FIR/case-sthiti nahi). Pehchan: 'local MLA and Health Minister Vishwajit Rane' / 'Valpoi MLA' spasht; patni Deviya ke Poriem karyakram unpar nahi jode.

// ---

// North Goa worker fragment — Gaude (Priol), researched 2026-10-15.

goaWorks['govind-shepu-gaude'] = [];

// REJECT-LOG (govind-shepu-gaude): Profile rakhi KHALI — satyapit seat-kaam established media me nahi mila. (1) Rs 106 crore Shitollem Lake water treatment plant + Rs 3.5 crore Karmale-Querim works (Herald, foundation stone "January 26" / PWD Minister Deepak Pauskar samet) — Pauskar Jan 2019-Jul 2021 PWD mantri the, isliye khabar 2022 se pehle ki hai; karyakaal se pehle ka kaam, reject. (2) Mangueshi tourism infrastructure phase-1 udghatan (PIB, 21 Dec 2021) — karyakaal se pehle + udghatan Union mantri ne kiya, Gaude sirf maujood the; reject. (3) Veling-Priol road hotmixing "inauguration by Minister Govind Gaude" — sirf video-host (veblr) par mili, koi established-media text report nahi; video-only source reject. (4) Verem-Vaghurme multipurpose sports complex (Herald) — pre-event announcement thi ("to be inaugurated today"), udghatan-karta ka naam/prakriya tithi khabar me hai hi nahi, aur Sports vibhag ka project hai (Gaude tab Sports mantri) — mantri-niyam ke tahat seat-level vyaktigat bhoomika satyapit nahi; reject. (5) Jan Kalyan Shibir, Khandola (Swayampurna Goa) — yojana-shivir ka udghatan hai, kshetra-vikas kaam nahi; reject. (6) NATIONAL Games 2023 parking/meetings, Chandor visit promises, Seva Sankalp Abhiyan me maujoodgi, Kala Dalan gallery inauguration — vibhag/mantri-karya ya sirf maujoodgi; reject. (7) NEGATIVE check: Speaker Ramesh Tawadkar ka Feb 2024 ka aarop (Art & Culture dept se Canacona sangathanon ko Rs 26.85 lakh ka kathit galat vitran) — PTI/Herald/Tribune me report hua, Gaude ne khandan kiya aur inquiry ka vaada kiya; lekin koi FIR/case/adalaati ya poornadhikarik janch-karyavahi ki sthiti kabhi report nahi hui, aarop hi raha — negative-entry niyam ke tahat stage-spasht nahi, isliye reject. Pehchan pakki: Govind Shepu Gaude, Priol MLA (2017 se), BJP 2022 se, Jun 2025 me cabinet se hataye gaye — karyakaal Mar 2022+.

// COORDINATOR QA NOTE (North Goa district batch, 2026-10-15): 10/10 workers completed; sabhi 10 fragments khud padhe. Assembly me 2 QA removals: (1) jit-vinayak-arolkar ki Chopdem Parshuram murti anaavaran entry (Daijiworld, 19 Apr 2026) — statue-unveiling ceremonial category (MLA ki bhoomika sirf anaavaran tak, koi dastavezi pariyojna-bhoomika nahi) — worker fragment me entry mojood hai lekin batch me NAHI jodi; (2) carlos-alvares-ferreira ki Panarim paani pipeline entry (Goa9, Oct 2023) — title/note me khud "maujoodgi me shuru hua" — weak attribution, sirf maujoodgi — batch me NAHI jodi. Kept: 42 entries (18 slugs me; Arolkar 4, Arlekar 1, De Souza 4, Delilah 3 [1 negative], Kedar Naik 5, M. Lobo 4, Khaunte 2, Ferreira 6, Rodolfo 1, Borkar 1 [negative], Faldessai 2, P. Shet 3, Sawant 2, D. Rane 2, V. Rane 2). 5 profiles imaandari se KHAALI: Shetye, Halarnkar, Monserrate, Gaude (sab mantri-niyam ya state-project-attribution par). Taleigao seat rikt hai — scope se bahar. Negatives: Borkar (TCP office virodh me police case, FIR-sthiti + jawab-upalabdh-nahi disclosure ke saath), Delilah Lobo (Parra land filling FIR, PTI report, unke pati ka inkaar darj). Hygiene: 0 Devanagari, 0 rupee-symbol, 0 literal-\n; entry objects me 0 comments; field order exact; period '2022-2027' sabhi kept entries me; negative entries me stage field absent; reject-logs Roman Hinglish.

// ---- South Goa district batch (researched 2026-10-15) ----

// South Goa batch — 1. Subhash Shirodkar (BJP) — Siroda AC.
goaWorks['subhash-shirodkar'] = [
  {
    title: 'Shiroda kshetra me Tarir (Panchwadi) se Khana-Bhat tak sadak chaudikaran ka shilanyas MLA Subhash Shirodkar ne rakha',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Goan Observer',
    sourceUrl: 'https://www.goanobserver.in/2024/10/11/weekend-updates-140/',
    date: '2024-10-10',
    note: '10 Oct 2024 ko Shirodkar ne PWD (WD XVIII) ke Executive Engineer, assistant aur junior engineers, contractor, Panchwadi sarpanch aur grameenon ke saath Tarir, Panchwadi se Khana-Bhat tak sadak chaudikaran pariyojna ki samiksha baithak li, phir swayam sadak-chaudikaran ka marking karke shilanyas rakha taaki haal ki barish se ruka kaam dobara shuru ho. Credit note: ye PWD pariyojna hai (MLALAD nahi); Shirodkar ne WRD portfolio rakhte hue sthaniya MLA ke roop me shilanyas kiya. Wahi event Goa News Link ne bhi chalaya. Source disclosure: Goan Observer ek chhota sthaniya news outlet hai.',
    period: '2022-2027'
  },
  {
    title: 'Shiroda ke Shelwada Nirankal me retaining wall ka shilanyas MLA Subhash Shirodkar ne rakha',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Goa Plus News',
    sourceUrl: 'https://goaplusnews.com/subhash-shirodkar-lays-foundation-stone-for-retaining-wall-at-shelwada-shiroda/',
    date: '2026-01-16',
    note: 'Shirodkar ne 16 Jan 2026 ko (17 Jan 2026 ko report hua) Shiroda kshetra ke Shelwada Nirankal me retaining wall ke shilanyas samaroh me hissa liya; report ki headline shilanyas unhe deti hai. ZP sadasya Punam Samant, Sarpanch Madhu Khandeparkar, sthaniya panch sadasya aur WRD Junior Engineer Sandesh Paiginkar maujood the. Deewar mitti ke katav ko rokne aur aaspaas ke gharon ki suraksha ke liye hai, ilaake me baadh roktham majboot karegi. Credit note: ye Water Resources Department ki pariyojna hai, jo Shirodkar ka apna mantri portfolio hai, unke kshetra me execute hui; unhone mantri-cum-MLA ke roop me shilanyas rakha. Source disclosure: Goa Plus News ek chhota sthaniya news outlet hai.',
    period: '2022-2027'
  }
];

// REJECT-LOG (subhash-shirodkar):
// (1) oHeraldo power-supply article (underground cabling, transformers, pole replacement in Shiroda constituency): no publish date visible on the page and the AMP version was blocked; content is also announcement-level (works "will commence in December"), so it was excluded rather than assigning an unverified date.
// (2) CM Shiroda tour (oHeraldo): CM Pramod Sawant laid foundation stones for Rs 12 crore projects (Shiroda market complex with 40 shops, community hall, panchayat ghar), Rs 5 crore road works in Panchwadi and a Rs 2 crore water pipeline at Bethora, and inaugurated the Shri Krishna Temple Hall; Shirodkar was only present. CM-programme presence rule applies.
// (3) CM programmes at Shiroda (Lokmat Times/ANI, Apr 2022): the CM inaugurated the Chaturthi Bazar, permitted a special school at Shiroda market, and laid foundation stones for Saibaba Temple development, the 300mm Bethora water pipeline, Jittonimatt road work and hot-mixing of various Panchwadi roads; all CM actions, MLA only present.
// (4) Navhind Times epaper 22 Feb 2023 photo captions (commissioning of a 300mm dedicated water line, foundation stone for a new road at Bondbaag-Bethoda, hot-mix carpeting of various Shiroda roads): these appeared inside a paid birthday advertisement celebrating the MLA, not editorial reporting, so rejected as a source.
// (5) Beautification and illumination inauguration of Shree Mahamaya Temple and Shree Ravalnath Temple plus parking area at Shiroda (Goa9, Oct 2023): a single tiny-outlet post that rehashes a Facebook post (embeds FB links, no byline) with no corroboration from any priority outlet; excluded as FB-derived.
// (6) Smart Village Project launch for Shiroda constituency (oHeraldo): a government-plus-CSR scheme launch with vague goals (infrastructure, digital education, accessible healthcare); no specific completed or inaugurated work.
// (7) Mega Apprentice Enrolment Camp at Shiroda (Goan Reporter/Goa9, Jun 2023): inauguration of a camp event, not an infrastructure work.
// (8) District Crafts and Weaves Mahotsav at KTC bus stand, Shiroda (PIB/BestCurrentAffairs, Oct 2023): inauguration of an exhibition event, not a work.
// (9) Swayampurna Goa CSR Conclave at Shiroda (Aiz Goa News, 2024): inauguration of a conclave event, not a work.
// (10) Six new dams announcement including site inspections at Kajumol-Darbandora and Manke in Shiroda (Daijiworld/IANS, Mar 2023): WRD department-level announcement by the minister; mantri-niyam.
// (11) Statewide WRD items as minister: 100 bandharas plan, Kushavati and other river pumping stations, Calangute water pumping station inauguration, Mhadei river statements, Chapora barrage multiutility project foundation stones (2024 birthday ad), and the Ponda civic-issues deadline (TOI, 2026, which is also outside Shiroda AC): all department-level/statewide or out-of-constituency; mantri-niyam and kshetra-bahar.
// (12) Biodigester toilet sanction letters and community-toilet foundation stone at Talpone (Navhind Times epaper, Feb 2020): pre-tenure.
// (13) Underground cabling work on Shiroda-Borim road causing congestion (oHeraldo): execution-stage report that names no MLA role; not attributable to him.
// (14) Rs 8 lakh job-scam FIR story (oHeraldo) and Rs 70 crore land-deal corruption complaint (oHeraldo): ancient allegations from the 2009 and 2018-19 era, pre-tenure, both denied by him; his 2022 affidavit lists zero criminal cases; not recorded as negatives.
// (15) Prime TV Goa original of the Tarir-Khana Bhat road widening story: the site is currently suspended, so the event was verified via the Goan Observer and Goa News Link reprints instead.
// No negative entries: no established reporting of any current-tenure FIR, case or court matter against the MLA was found; his 2022 affidavit shows zero criminal cases.

// South Goa batch — 2. Sudin Dhavalikar (MGP) — Marcaim AC.
goaWorks['sudin-dhavalikar'] = [
  {
    title: 'Ponda ke Dhavali me Shree Bhagwati aur Shree Satyanarayan Mandir parisar me Rs 2.5 crore ke saundaryikaran aur jeernoddhar kaamon ka shilanyas MLA Sudin Dhavalikar ne kiya',
    category: 'Any',
    badge: 'sarkari',
    stage: 'shilanyas',
    sourceLabel: 'Department of Information and Publicity, Govt of Goa',
    sourceUrl: 'https://dip.goa.gov.in/?p=5629',
    date: '2023-04-22',
    note: 'Power Minister aur Marcaim MLA Sudin Dhavalikar ne Akshaya Tritiya par lagbhag Rs 2.5 crore ki anumaanit lagat se saundaryikaran kaamon ka bhoomipujan karke shilanyas rakha, jisme hall ka nirmaan, pravesh-dwar mehrab, Satyanarayan mandir ka dome kaam, interlocking pavers, shauchalay aur Shree Bhagwati mandir parisar ka saundaryikaran shamil hai; DIP press note ke anusar rajya sarkar ne har MLA ko Rs 2.5 crore ka MLA fund swikrit kiya tha jisme Marcaim ko pehla awantan mila, isliye fund ka srot sarkar dwara swikrit MLALAD hai aur shilanyas MLA ne swayam kiya.',
    period: '2022-2027'
  },
  {
    title: 'Wadi-Talaulim me naale par bani nayi 5-metre PWD culvert bridge ka udghatan, lagbhag 50 parivaron ko sadak pahunch bahal hui',
    category: 'Sadak',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'The Navhind Times (e-paper)',
    sourceUrl: 'https://epaper.navhindtimes.in/PageImages/PDF/2025/02/22/2202025-md-ga-05.pdf',
    date: '2025-02-21',
    note: 'Marcaim MLA aur Power Minister Ramkrishna Sudin Dhavalikar ne Public Works Department dwara lagbhag Rs 12 lakh ki lagat se bani 5-metre lambi bridge ka udghatan kiya, jisse Marcaim kshetra ke Wadi-Talaulim me lagbhag 50 parivaron ko lagbhag dhaai saal pehle purani bridge girne ke baad theek sadak pahunch mili; Dhavalikar ne kaha ki unhone kaam karane ke liye Chief Minister se priority letter liya tha, isliye execution ka shrey PWD aur Chief Minister ka hai jabki udghatan MLA ne kiya.',
    period: '2022-2027'
  },
  {
    title: 'Kavlem me Portuguese-era laterite culvert ke paas bani nayi Ganesh murti visarjan shed ka udghatan MLA Sudin Dhavalikar ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/portuguese-era-kavlem-culvert-to-get-protective-railings/488924/',
    date: '2026-09-17',
    note: 'Marcaim MLA aur Power Minister Sudin Dhavalikar ne Shantadurga mandir se lagbhag 100 metre door 10-metre lambi Portuguese-era laterite culvert ke paas Kavlem me nayi bani Ganesh murti visarjan shed ka udghatan kiya, aur us avsar par media se baat ki; report me shed ki lagat ya fund ka srot nahi bataya gaya, isliye fund ka shrey sthapit nahi ho saka, aur culvert par suraksha railing ka alag vaada is charan me sirf aashwasan hai.',
    period: '2022-2027'
  },
];
// REJECT-LOG (sudin-dhavalikar): (1) Dhavlim flyover opened by the MLA without government approval (Herald) - reject: karyakaal-purv; the event dates to the Deepak Pauskar PWD-minister era (he inspected and shut the flyover the next day), which ended in March 2022. (2) Undir bridge inauguration between Bandora and Marcaim (Herald) - reject: karyakaal-purv; PWD Minister Deepak Pauskar attended, marking it as the 2019-21 era event. (3) Hotmix carpeting of Durbhat panchayat road (Herald) - reject: karyakaal-purv; Dhavalikar himself says the file moved in 2016 and work commenced only in December 2021. (4) Rs 5.5 crore Marcaim sports complex (Herald, Sep 2025) - reject: still incomplete and not inaugurated as of Sep 2025 (about 10 percent work pending); no post-tenure completion event found. (5) Marcaim PHC upgrade demand (Herald) - reject: sirf maang; Marcaim BJP block only submitted a memorandum to the CM. (6) Water tank inspection near Marcaim Industrial Estate (Herald) - reject: sirf nirikshan/daura, no work sanctioned or completed. (7) Protective railings for the Portuguese-era Kavlem culvert (Herald) - reject: karenge khabar; only an assurance that railings will be installed. (8) IIT project offer at Farmagudi near GEC (Herald) - reject: sirf prastav/maang by the MLA, no sanction or action. (9) Foundation stone for flood-victim Zalmi family house at Murdi-Khandepar (Herald) - reject: karyakaal-purv; dated to a Friday Dussehra (2021) and the flood was of July 2021, plus the location is outside Marcaim AC. (10) Power portfolio decisions - TOD peak-hour billing surcharge, smart-meter rollout, statewide 24-hour water-supply promises (Herald) - reject: mantri-niyam; these are state-wide departmental decisions, not Marcaim-seat works. (11) Margao Ring Road foundation stone with Digambar Kamat (Herald) - reject: kshetra-bahar; Margao is outside Marcaim AC. (12) Sewage-connection appeal after Dhavali Ganeshotsav Mandal programme (TOI) - reject: awareness event, not a work; the STP commissioning itself was not credited to any post-March 2022 action by the MLA. (13) Mithil Dhavalikar 2027 candidacy buzz and MGP-BJP alliance politics (The Goan, Navhind) - reject: political speculation, not works. (14) Ponda sewage STP commissioned claims - reject: Ponda town STP is outside Marcaim seat's recorded panchayats and the report gives no post-March 2022 sanction or delivery action by the MLA. (15) Negatives - none: no FIR, court case or chargesheet against Sudin Dhavalikar found in established media; the jobs-for-cash mentions are unverified YouTube claims (police stated no politician was named in the FIR) and AAP's smart-meter allegations are political criticism, not a case.

// South Goa batch — 3. Sankalp Amonkar (BJP) — Mormugao AC.
goaWorks['sankalp-amonkar'] = [
  { title: 'Headland-Sada ke ward four me internal sadkon ki hotmixing launch, Mormugao MLA Sankalp Amonkar ne shubharambh kiya', category: 'Sadak', badge: 'news', stage: 'shilanyas', sourceLabel: 'TOI Goa', sourceUrl: 'https://timesofindia.indiatimes.com/city/goa/will-talk-to-cm-about-clearing-legacy-waste-at-sada-dumpsite-amonkar/articleshow/98398761.cms', date: '2023-03-03', note: 'Mormugao MLA Sankalp Amonkar ne Headland-Sada ke ward four me internal sadkon ki hotmixing kaam launch kiye aur kaha ki Mormugao kshetra ki sabhi internal sadken lagbhag Rs 7 crore ki anumaanit lagat se hotmix hongi. Fund ka srot kshetra ke madhyam se execute hue rajya sarkar ke kaam hain; Amonkar ne kaamon ka launch kiya.', period: '2022-2027' },
  { title: 'Baina beach ke paas Ravindra Bhavan Junction par hotmixing, drainage aur road furniture ka shilanyas MLA Sankalp Amonkar ne rakha', category: 'Sadak', badge: 'news', stage: 'shilanyas', sourceLabel: 'Goemkarponn', sourceUrl: 'https://goemkarponn.com/sankalp-amonkar-lays-foundation-stone-for-road-works-near-baina-beach/', date: '2026-03-07', note: 'Mormugao MLA Sankalp Amonkar ne Baina beach ke paas Ravindra Bhavan Junction par hotmixing, drainage aur road furniture kaamon ka shilanyas rakha, vyast junction ke paas traffic sugham banane ke liye lambe samay se lambit sadak vikas kaamon ki shuruaat hui. Kaam MLA ne launch kiye; fund ka srot rajya sarkar ke sadak kaam hain.', period: '2022-2027' },
  { title: 'Mormugao me National Highway par landslide restoration aur slope protection kaam MLA Sankalp Amonkar ne launch kiya', category: 'Sadak', badge: 'news', stage: 'shilanyas', sourceLabel: 'O Heraldo', sourceUrl: 'https://www.heraldgoa.in/goa/mormugao-mla-sankalp-amonkar-launches-landslide-restoration-work-on-national-highway/411411/', date: '2025-09-28', note: 'Mormugao MLA Sankalp Amonkar ne Mormugao me National Highway ke saath landslide restoration aur slope protection kaam launch kiye, landslides aur katav se lambe samay ki suraksha ke liye retaining wall ki yojna ke saath. Amonkar ne kaam launch kiye; ye pariyojna kshetra me li gayi rajya/NH-se-judi infrastructure hai.', period: '2022-2027' },
  { title: 'Desterro ke El-Monte Theatre ke paas SIDCGL ke tahat sewer line aur chamber replacement kaam MLA Sankalp Amonkar ne shuru karaya', category: 'Paani', badge: 'news', stage: 'shilanyas', sourceLabel: 'O Heraldo', sourceUrl: 'https://www.heraldgoa.in/goa/sankalp-amonkar-launches-sewer-line-replacement-work-in-mormugao-promises-priority-to-pending-projects/459357/', date: '2026-01-03', note: 'Mormugao MLA Sankalp Amonkar ne Desterro ke El-Monte Theatre ke paas SIDCGL ke tahat purani sewer line aur chambers badalne ka kaam shuru karaya taaki lambe samay se lambit sewerage samasyaon ka samadhan ho. Amonkar ne Sewerage Infrastructure Development Corporation of Goa ke adhyaksh ke roop me kaam launch kiye; fund ka srot rajya sewerage vibhag nigam hai.', period: '2022-2027' },
  { title: 'Baina me Canara Bank ke paas Rs 1.5 crore ki sewerline upgrade pariyojna MLA Sankalp Amonkar ne launch ki', category: 'Paani', badge: 'news', stage: 'shilanyas', sourceLabel: 'O Heraldo', sourceUrl: 'https://www.heraldgoa.in/goa/mormugao-mla-sankalp-amonkar-launches-%e2%82%b91-5-crore-sewerline-upgrade-project-in-baina/458731/', date: '2025-12-30', note: 'Mormugao MLA Sankalp Amonkar ne Baina me Canara Bank ke paas lagbhag chaar dashak purani pipeline ko 300 mm vyas badhakar dugni kshamta wali karne ke liye Rs 1.5 crore ki purani sewerline badalne ki pariyojna launch ki. Amonkar ne kaam launch kiye; fund ka srot rajya sarkar ke sewerage kaam hain, aur naye connection ka kharch na utha sakne wale parivaron ke liye muft sarkari sahayata ka vaada kiya gaya.', period: '2022-2027' },
  { title: 'Desterro ke Busy Bee School ke paas kshatigrast sewer manhole aur chambers ke punarnirmaan kaam MLA Sankalp Amonkar ne launch kiye', category: 'Paani', badge: 'news', stage: 'shilanyas', sourceLabel: 'O Heraldo', sourceUrl: 'https://www.heraldgoa.in/goa/mormugao-mla-sankalp-amonkar-launches-reconstruction-of-damaged-sewer-manhole-near-busy-bee-school/464377/', date: '2026-02-14', note: 'Mormugao MLA Sankalp Amonkar ne Desterro ke Busy Bee School ke paas kshatigrast sewer manhole aur chambers ke punarnirmaan kaam launch kiye taaki nivaasiyon ki lambe samay ki chintayein door hon aur school ke bachchon aur paidal chalne walon ki suraksha behtar ho. Amonkar ne kaam launch kiye; fund ka srot rajya sarkar ke nagarik kaam hain.', period: '2022-2027' },
  { title: 'Coal pradushan rokne ke liye Sada-Desterro sadak ke saath 750 metre lambi dust screen MLA Sankalp Amonkar ne launch ki', category: 'Any', badge: 'news', stage: 'shilanyas', sourceLabel: 'Daijiworld', sourceUrl: 'https://www.daijiworld.com/news/newsDisplay?newsID=1286792', date: '2025-07-18', note: 'Mormugao MLA Sankalp Amonkar ne Sada-Desterro sadak ke saath 750 metre lambi, 5 metre unchi dust screen lagane ka kaam aadhikarik roop se launch kiya taaki bandargah se udte koyla-dhool se aavaasiya kshetron ko bachaya ja sake. Screen Adani Mormugao Port Terminal Pvt Ltd laga rahi hai aur Amonkar ne is pahal me sahyog kiya, pehle charan me Sada Bus Stand se El Monte Theatre tak 250 metre ka hissa shuru hua. Credit pardarshita: pariyojna port operator AMPTPL dwara vitrit aur execute ki gayi hai, sarkari fund se nahi; Amonkar ne ise launch kiya aur Varunapuri flyover se koyla-truckon ka maarg badalne jaise sambandhit upaayon ka shrey liya.', period: '2022-2027' },
  { title: 'Muft ambulance, hearse van aur do mobile morgue sevaen 24x7 helpline ke saath MLA Sankalp Amonkar ne launch ki', category: 'Aspataal', badge: 'news', stage: 'poora', sourceLabel: 'O Heraldo', sourceUrl: 'https://www.heraldgoa.in/goa/mormugao-mla-sankalp-amonkar-launches-free-ambulance-hearse-van-and-mobile-morgue-services-with-24x7-helpline/478488/', date: '2026-06-15', note: 'Mormugao MLA Sankalp Amonkar ne Mormugao kshetra ke nivaasiyon ke liye muft ambulance seva, hearse van aur do mobile morgue launch kiye, aapatkaaleen pahunch ke liye samarpit 24x7 helpline chalu ki gayi. Credit pardarshita: ye pahal Rotary Club of Vasco Port Town Trust aur Rotary Club of Kolhapur Evolve ke samarthan se shuru hui, sarkari fund se nahi; Amonkar ne sevaon ka udghatan kiya.', period: '2022-2027' },
  { title: 'Sada me punarnirmit Smarak Sthal par Lt Narendra Mayekar ki pratima ka anaavaran MLA Sankalp Amonkar ne kiya', category: 'Any', badge: 'news', stage: 'poora', sourceLabel: 'O Heraldo', sourceUrl: 'https://www.heraldgoa.in/goa/sankalp-amonkar-inaugurates-bust-of-lt-narendra-mayekar-at-renovated-smarak-sthal-in-mormugao/465882/', date: '2026-02-27', note: 'Mormugao MLA Sankalp Amonkar ne Sada ke punarnirmit Smarak Sthal par Kirti Chakra sammanit Lt Narendra Mayekar ki pratima ka udghatan kiya, jo MLALAD fund se vikasit hua. Amonkar ne poorn smaarak ka udghatan kiya; fund ka srot MLALAD hai. Is avsar par unhone ghoshna ki ki Sada ki sadak ka naam Lt Mayekar ke naam par rakha jayega, jo abhi prastav hai aur poora nahi hua hai.', period: '2022-2027' },
];
// REJECT-LOG (sankalp-amonkar): (1) Bogdeshwar Temple pavers work inauguration, Mormugao (Oct 2026, GOANEWSNOW YouTube-only) — YouTube-only source, established-media post-event reporting nahi, REJECT. (2) Baina beach revival/beautification plans (viewing gallery, glass suspension bridge, toilets) — Goemkarponn Mar 2026 me sirf ghoshna, koi shilanyas nahi, 'karenge' wali khabar, REJECT. (3) Rs 443 crore Mormugao water project (Jan 2026, The Goan/TOI) — Drinking Water Minister ka vibhagiya project; Amonkar ne sirf Assembly me maang uthayi thi, unki concrete bhoomika nahi, REJECT. (4) Underground cabling Vasco-Mormugao (O Heraldo, ~Sep 2025) — Power Minister ne foundation stone rakha, Amonkar sirf maujood, REJECT. (5) Chotta Bazar junction hotmixing (Goan Reporter, Mar 2023) aur nallah improvement Desterro (Goemkarponn TV) — dono YouTube-only reporting, REJECT. (6) Sulabh toilet complex inauguration at Baina beach (RDX Goa, ~Jun 2025) — kamzor srot (Flash News, YouTube-embed) aur timeline virodh: O Heraldo Sep 2025 me abhi bhi Baina beach par toilet ka abhav flag kar raha tha, REJECT. (7) Seven-seater Sulabh toilet at Kharewado (RDX Goa YouTube-only) — YouTube-only, REJECT. (8) Vasco market seven-seater Sulabh toilet (The Goan, Nov 2025) — Vasco MLA Krishna Salkar ka kaam, Amonkar se sambandh nahi, REJECT. (9) Ujjwala Yojana form distribution, Sada (O Heraldo, Sep 2026) — kendriya yojna ka outreach event, infrastructure kaam nahi, REJECT. (10) Rs 191.5 crore sewerage boost + Rs 100 crore per MLA (2026) — CM Pramod Sawant ki ghoshna; Amonkar ne sirf swaagat kiya, unka kaam nahi, REJECT. (11) Mormugao Fort restoration promotion (TOI 2022, O Heraldo Sep 2025) — sirf maang/prastav, CM ne sirf 'assured' kaha, koi shilanyas nahi, REJECT. (12) Amrit Bharat Vasco railway station foundation (goa9media, Feb 2024) — PM/Governor ka karyakram, Amonkar sirf maujood, REJECT. (13) Congress complaint against Amonkar and Giriraj Pai Vernekar (Jun 2024, IANS) — vipakshi rajneetik complaint, koi FIR darj hone ki established reporting nahi, negative bar nahi chhoota, REJECT. (14) Aldona MLA complaint re Gautam Khattar function at Tilak Maidan (Apr 2026) — Amonkar sirf maujood tha, FIR uske khilaf nahi, REJECT. (15) Seva Jyoti Yatra Mormugao (Oct 2026) — party rally, vikas-kaam nahi, REJECT. (16) Negative check: Melauli IIT protest FIR No. 2/2021 (Valpoi, Jan 2021 — pre-karyakaal), chargesheet Aug 2023 — Bombay High Court at Goa ne 15 Oct 2025 ko FIR aur chargesheet quash kar di (TOI, The Goan), court ne kaha koi offence banta hi nahi tha; case poori tarah khaarij, isliye koi negative entry nahi. (17) Rs 7 crore internal-road hotmixing 'announcement' wali phrasing (TOI Mar 2023) — ye announcement nahi thi: Amonkar ne ward four Headland-Sada me hotmixing works launch kiye the aur baaki sadkon ka plan bataya tha; launch hui portion entry #1 hai.
// (18) 'Bogda me sewer line relaying + chambers' entry — coordinator QA ne srot URL galat paya (fiscal-health-index article se joda tha); Herald par aisa koi article verify nahi ho saka, isliye entry hata di gayi — bina verify hue srot entry ka aadhar nahi ban sakta.

// South Goa batch — 4. Krishna V. Salkar (BJP) — Vasco Da Gama AC.
goaWorks['krishna-v-salkar'] = [
  {
    title: 'Vasco me Swatantra Path aur FL Gomes Road ka saundaryikaran aur punarvikas kaam MLA Krishna Salkar ne launch kiya, naaliyan, footpath, lighting aur landscaping shamil',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/rs-10cr-road-beautification-project-launched-in-vasco/142947.html',
    date: '2026-02-03',
    note: 'Vasco MLA Krishna Salkar ne 3 Feb 2026 ko (4 Feb 2026 ko report hua) Swatantra Path aur FL Gomes Road ko cover karne wale sadak saundaryikaran aur punarvikas pariyojna ka aarambh kiya, MMC adhyaksh Girish Borker, ward councillor Shami Salkar aur nivaasiyon ki maujudgi me; ek saal me poorn karne ka lakshya rakha gaya, naali jeernoddhar, footpath paving, illumination aur landscaping ke chaar charanon me. Credit pardarshita: IDMT yojna ke tahat Phase-I kaamon ka shilanyas Urban Development Minister Vishwajit Rane ne 10 Jan 2026 ko rakha tha, jabki kaam ka launch MLA ne kiya; pariyojna ki lagat The Goan ke anusar Rs 10 crore aur Navhind Times ke anusar Rs 11.84 crore (1.2 km) batayi gayi.',
    period: '2022-2027'
  },
  {
    title: 'Naya Vasco machhli bazaar complex poora hokar udghatan hua, pariyojna ko aage badhane ke liye mantri ne MLA Salkar ko shrey diya',
    category: 'Any',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'Navhind Times',
    sourceUrl: 'https://navhindtimes.in/goanews/vasco-port-town-to-get-rs-140-cr-facelift-new-fish-market-inaugurated/',
    date: '2026-01-10',
    note: '14ve Vitt Ayog anudaan se Rs 9.80 crore me bana punarnirmit Vasco machhli bazaar complex, jisme ground floor par 250 machhli vikreta aur pehli manzil par dry fish sahit sabzi-phal vikreta hain, 10 Jan 2026 ko udghatan hua. Credit pardarshita: udghatan Urban Development Minister Vishwajit Rane ne MLA Krishna Salkar aur anyon ki maujudgi me kiya; mantri ne saarvajanik roop se Vasco me vikas aage badhane ka shrey MLA Salkar ko diya, aur MLA ne kaha ki bazaar nagrikon ki 30 saal purani maang poori karta hai. Complex me shauchalay, lift, CCTV nigrani aur fire safety systems bhi hain.',
    period: '2022-2027'
  },
  {
    title: 'Sasmolem nullah jeernoddhar kaam MLA Krishna Salkar ne launch kiya, lagbhag Rs 1 crore ki lagat charanbaddh tareeke se',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Goemkarponn',
    sourceUrl: 'https://goemkarponn.com/vasco-mla-launches-restoration-of-sasmolem-nullah-ending-four-decade-demand/',
    date: '2026-01-30',
    note: 'Vasco MLA Krishna Salkar ne 30 Jan 2026 ko (31 Jan 2026 ko report hua) Sasmolem ke bade nullah ke jeernoddhar ka launch kiya, lagbhag Rs 1 crore ki anumaanit lagat par, MMC adhyaksh Girish Borker aur nivaasiyon ki maujudgi me — lagbhag chaar dashak se lambit maang khatm hui. MLA ne kaha ki nullah ko dhakne ki nivaasiyon ki maang ke baad pariyojna dobara tender hui, aur unhone kaamon ki swikriti ke liye WRD Minister Subhash Shirodkar aur Chief Minister ko shrey diya; nullah Baina ka saara toofani paani le jata hai aur iska jeernoddhar baadh rokne ke liye hai.',
    period: '2022-2027'
  },
  {
    title: 'Sasmollem me Gomateshwar Mandir ke paas retaining wall ka shilanyas MLA Krishna Salkar ne rakha, Water Resources Department ke madhyam se kaam hoga',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/vasco-mla-krishna-salkar-lays-foundation-stone-for-retaining-wall-near-gomateshwar-temple-in-sasmollem/466786/',
    date: '2026-03-06',
    note: 'Vasco MLA Krishna Salkar ne Sasmollem me Gomateshwar Mandir ke paas retaining wall ka shilanyas rakha, ye pariyojna Water Resources Department Goa ke madhyam se execute hogi taaki kshetra majboot ho aur monsoon me mitti ka katav roka ja sake; sthaniya nivaasiyon ki lambe samay se lambit maang batayi gayi. MLA ne bharosa dilaya ki kaam monsoon shuru hone se pehle poora ho jayega. Date reporting date hai kyunki article me event ka weekday nahi diya gaya.',
    period: '2022-2027'
  },
  {
    title: 'Driver Hill par purani sewer line ke jeernoddhar aur upsizing kaam pipe bursting method se MLA Krishna Salkar ne launch kiye',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/vasco-mla-krishna-salkar-launches-sewer-line-upgrade-works-at-driver-hill/467994/',
    date: '2026-03-14',
    note: 'Vasco MLA Krishna Salkar ne 14 Mar 2026 (Saturday) ko Driver Hill par purani sewer line ke jeernoddhar aur upsizing ke kaam launch kiye, pipe bursting method se aur ghar-sewer connections ke pravdhan ke saath, taaki nivaasiyon ke liye sewerage infrastructure aur swachhata behtar ho. MLA ne ye bhi kaha ki Vasco Sports Complex ka kaam, jo kshetra ke liye unka sapno ka project hai, jald shuru hone ki ummeed hai, lekin reporting ke samay tak koi kaam shuru nahi hua tha.',
    period: '2022-2027'
  },
  {
    title: 'Vasco bhar me monsoon-se-pehle nullahon aur jalmargon ki desilting aur deweeding kaam MLA Krishna Salkar ne Water Resources Department ke madhyam se launch kiye',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/vasco-targets-zero-flooding-for-fourth-year-kadamba-bus-stand-plan-to-be-presented-in-june/476027/',
    date: '2026-05-25',
    note: 'Vasco MLA Krishna Salkar ne 25 May 2026 (Monday) ko Belabai ke Khapreshwar Mandir me Vasco bhar ke nullahon, drainage channels aur pramukh jalmargon ki monsoon-se-pehle desilting aur deweeding kaam launch kiye, Water Resources Department ke madhyam se; WRD adhikariyon ne bharosa dilaya ki monsoon se pehle sabhi baadh-pravan kshetron par dhyan diya jayega. MLA ne kaha ki samay par desilting aur mahatvapurn sthalon par naye nullah aur cross drain ke saath Vasco lagatar chauthe saal zero-flooding record kayam rakh sakega.',
    period: '2022-2027'
  },
  {
    title: 'Ward No. 11 me drainage sudhaar aur paver block lagane ke kaam ka udghatan MLA Krishna Salkar ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/vasco-mla-krishna-v-salkar-inaugurates-drainage-improvement-and-paver-block-project-in-ward-no-11/478149/',
    date: '2026-06-12',
    note: 'Vasco MLA Krishna V. Salkar ne sthaniya nivaasiyon aur BJP karyakartao ki maujudgi me Ward No. 11 me drainage sudhaar aur paver block lagane ke kaamon ka udghatan kiya, monsoon se pehle drainage system majboot karne aur paidal yatri infrastructure behtar karne ke uddeshya se. MLA ne kaha ki maujooda drainage network par paani-jamav kam karne ke liye turant dhyan ki zaroorat thi. Date reporting date hai kyunki article me event ka weekday nahi diya gaya.',
    period: '2022-2027'
  },
  {
    title: 'Vasco ke Sasmolem-Baina kshetra me Rs 10 crore se adhik ke sadak vikas kaam MLA Krishna Salkar ne launch kiye',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/dabolim-airport-will-remain-operational-says-vasco-mla-krishna-salkar-calls-mp-viriato-fernandes-assurance-a-publicity-stunt/480188/',
    date: '2026-06-30',
    note: 'Vasco MLA Krishna Salkar ne 30 Jun 2026 (Tuesday, July ki shuruaat me report hua) ko Vasco ke Sasmolem-Baina kshetra me Rs 10 crore se adhik mulya ke sadak infrastructure kaamon ka launch kiya. Event report kaamon ke launch par kendrit hai; us avsar par Dabolim airport par ki gayi rajneetik tippaniyon ko kaam nahi gina gaya.',
    period: '2022-2027'
  },
  {
    title: 'Tanya Hotel ke paas chaar naye culvert aur sadak chaudikaran kaam MLA Krishna Salkar ne Rs 1.27 crore ki lagat par launch kiye',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Goemkarponn',
    sourceUrl: 'https://goemkarponn.com/vasco-mla-krishna-salkar-launches-construction-of-four-culverts-road-widening-near-tanya-hotel/',
    date: '2025-05-06',
    note: 'Vasco MLA Krishna Salkar ne 6 May 2025 (Tuesday subah, 7 May 2025 ko report hua) ko Tanya Hotel ke paas chaar naye culvert ke nirmaan aur sadak chaudikaran ke kaam Rs 1.27 crore ki pariyojna lagat par launch kiye, MMC adhyaksh Girish Borker, councillors aur nivaasiyon ki maujudgi me. Pariyojna chaar purane Portuguese-era pipeline culverton ko badalti hai aur monsoon me paani-jamav samadhan aur aane wale railway underpass se traffic sambhalne ke liye chaar-metre sadak chaudikaran jodti hai, nivaasiyon aur Navy se NOC le liye gaye the.',
    period: '2022-2027'
  },
  {
    title: 'Vasco me railway underpass aur sadak-chaudikaran pariyojna ka nirmaan MLA Krishna Salkar ne launch kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Navhind Times',
    sourceUrl: 'https://navhindtimes.in/goanews/rail-underpass-work-starts-in-vasco-cops-unveil-diversion-routes/',
    date: '2025-11-19',
    note: 'Vasco MLA Krishna Salkar ne Vasco me bade railway underpass aur sadak-chaudikaran pariyojna ka nirmaan launch kiya (lagbhag 19 Nov 2025 ko report hua, jab 20-25 Nov ke liye diversion ghoshit hue), kaha ki ye nivaasiyon ki lambe samay ki maang poori karta hai. Pariyojna Tanya Hotel ke paas emergency vaahanon ke liye naya underpass jodti hai aur Mangor road ko naye culverton ke saath four-lane ki taraf chaudi karti hai, kyunki maujooda neeche underpass se ambulance aur fire tender nahi nikal paate the. Date anumaanit reporting date hai; kaamon ki ghoshna The Goan me 11 Nov 2025 ko isse pehle hui thi.',
    period: '2022-2027'
  },
  {
    title: 'Vasco sabzi bazaar ke peeche seven-seater Sulabh shauchalaya ka shilanyas MLA Krishna Salkar ne Rs 50 lakh ki lagat par rakha',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/foundation-laid-for-sevenseater-sulabh-toilet-at-vasco-market/138950.html',
    date: '2025-11-12',
    note: 'Vasco MLA Krishna Salkar ne 12 Nov 2025 (Wednesday, 13 Nov 2025 ko report hua) ko Vasco sabzi bazaar ke peeche seven-seater Sulabh Shauchalaya ka shilanyas rakha, Rs 50 lakh ki pariyojna jisme purush, mahila aur divyang ke liye alag sections hain, hand dryer, snan-kshetra aur wash basin se yukt. MMC adhyaksh Girish Borker ne kaha ki MLA ke uthane ke chaar mahine ke andar sarkar ne pariyojna swikrit ki, aur bazaar ke dukandaaron ne ise paanch dashak purani maang bataya.',
    period: '2022-2027'
  }
];

// REJECT-LOG (krishna-v-salkar):
// (1) Vasco UpRamp/loop bridge final inspection (newsbabaonline, 19 Jan 2025): sirf nirikshan tha; udghatan 21 Jan ko Nitin Gadkari aur CM ne kiya; Berth No. 9 link wala kendra/port project hai — sirf nirikshan + mantri karyakram + port-area kendra faisla hone se reject.
// (2) Rs 150 crore Integrated Infrastructure Development Plan for Vasco historic core (The Goan/Navhind, Jan 2026): Urban Development Minister Vishwajit Rane ki ghoshna thi; GSUDA ne SASCI scheme ke tahat Centre ko propose kiya tha; MLA ki concrete bhoomika report me darj nahi — mantri ki ghoshna hone se reject.
// (3) Urban Health and Wellness Centres at Vasco Gymkhana and Sada (Rs 21 lakh each, Jan 10, 2026 event): mantri ke karyakram me inaugurated hue; MLA ki vishisht bhoomika report me darj nahi — sirf maujoodgi hone se reject.
// (4) Underground cabling ka shilanyas (Herald, ~Sep 2025): Power Minister Ramakrishna Dhavalikar ne kiya; MLA Salkar sirf maujud the — mantri karyakram me maujoodgi hone se reject.
// (5) 2nd phase underground cabling ka udghatan (Goan Reporter YouTube, ~Apr 2026), Ozler Forum ke paas road widening (Goan Reporter YouTube, ~Mar 2026), Baina nullah ke dono taraf retaining wall (YouTube, ~Mar 2026), nayi sewerage line Sasmollem-Baina (YouTube, ~Jun 2026): sab YouTube-only coverage, koi established media reporting nahi mili — YouTube-only hone se reject (sewer line aur desilting wali khabrein Herald coverage ki wajah se alag entries me shamil hain).
// (6) Sada swimming pool complex (The Goan, 18 May 2022): Sports Minister Govind Gaude ka GSIDC project tha; MLA sirf joint inspection me maujud the, udghatan ki ghoshna mantri ne ki — mantri karyakram me maujoodgi hone se reject.
// (7) Vasco Kadamba Bus Stand plan presentation (Herald, ~May 2026): MLA ne kaha June ke pehle hafte me public presentation hogi; ye planning/ghoshna stage hai, koi sanction ya kaam shuru nahi — ghoshna hone se reject.
// (8) Vasco Sports Complex: MLA ne Driver Hill event me kaha kaam jald shuru hoga — 'karenge' khabar, kaam shuru nahi hua — reject.
// (9) Desterro High School retaining wall (The Goan, Dec 2025): Mormugao MLA Sankalp Amonkar ne launch kiya — galat vyakti hone se reject.
// (10) Sancoale developmental works Rs 25 crore (Herald, ~Sep 2025): Cortalim MLA Alina Saldanha ne udghatan kiya — galat vyakti/kshetra hone se reject.
// (11) Dabolim projects (giant wheel, Mahila Bhawan, Vadem Lake, grade separator): Panchayat Minister Mauvin Godinho ke vaade, Dabolim AC — kshetra-bahar aur ghoshna hone se reject.
// (12) Vasco modern market me pavers laying (Herald, purana article): 'Councillor Krishna (Daji) Salkar' ne launch kiya tha — MLA karyakaal se pehle ki councillor-bhoomika hone se reject.
// (13) Mestawada nullah pollution probe (The Goan/Goemkarponn, May 2025): MLA ne GSPCB jaanch aur police complaint ki maang ki — advocacy/maang hai, concrete kaam nahi — reject.
// (14) Dilapidated buildings par karwai ki maang (Herald, ~Jul 2026), Tilak Maidan usage ka mudda (Sep 2025): maang/bayaan hain, kaam nahi — reject.
// (15) Oneindia MLA-affidavit list me 1 case darj: chunav-halaftnama ka akela aankda hai; koi FIR, court/adalaati sthiti ya established reporting nahi mili — chunav-yachika/akeli affidavit-entry negative nahi, isliye negative entry nahi.
// (16) Navhind epaper Dec 2022 ka garbled foundation-stone ullekh: apaathya/garbled text, satyapit nahi ho saka — unverified hone se reject.

// South Goa batch — 5. Mauvin Godinho (BJP) — Dabolim AC.
goaWorks['mauvin-heliodoro-godinho'] = [
  {
    title: 'Chicalim me drain construction works ka shubharambh kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/godinho-seeks-upgrade-for-chicalim-sub-district-hospital-blames-opposition-for-delays-in-%e2%82%b9550-crore-flyover-project/452322/',
    date: '2025-11-07',
    note: 'Dabolim MLA Mauvin Godinho ne Chicalim me drain construction works ko khud launch kiya; O Heraldo ke mutabik usi karyakram me unhone Chicalim Sub-District Hospital ke upgrade ki maang bhi dohrayi. Credit transparency: report me kaam ki lagat ya fund srot ka zikr nahi hai — sirf yah satyapit hai ki Godinho ne kaam ka shubharambh kiya; hospital upgrade wali maang ko sirf maang hone ke kaaran alag entry nahi di gayi. Karyakram 7 Nov 2025 ko hua (report 8 Nov 2025 ko prakashit hui).',
    period: '2022-2027'
  },
  {
    title: 'Shivaji Statue ke paas Chicalim me four-arm high-mast electricity lamp ka udghatan',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/chicalim-garden-project-finally-moves-ahead/153941.html',
    date: '2026-09-10',
    note: 'Mauvin Godinho ne Chicalim me Shivaji Statue ke paas chaar-arm wala high-mast electricity lamp inaugurate kiya, jisse kshetra me illumination aur visibility badhegi. Credit transparency: yah chhota kaam hai aur report me fund srot ya lagat ka zikr nahi hai; tithi 10 Sep 2026 The Goan ki post-event report ki hai, udghatan samaroh ki sahi tithi report me nahi di gayi thi.',
    period: '2022-2027'
  },
  {
    title: 'Zuarinagar, Sancoale me ZP funds se futsal ground ka foundation stone rakha',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'RDX Goa',
    sourceUrl: 'https://rdxgoa.com/mauvin-godinho-laid-foundation-stone-for-futsal-ground-under-zp-funds-at-zuarinagar-sancoale/',
    date: '2023-12-07',
    note: 'Mauvin Godinho ne Zuarinagar (Sancoale, Dabolim constituency) me Zilla Panchayat funds se banne wale futsal ground ka foundation stone khud rakha. Credit transparency: project ZP funds se funded hai; srot RDX Goa ka flash-news page hai jisme reporting text bahut sankshipt hai (headline + video), isliye lagat jaise vivran uplabdh nahi hain.',
    period: '2022-2027'
  },
];
// REJECT-LOG (mauvin-heliodoro-godinho):
// (1) Joggers Park Phase II ka shilanyas (21 Dec 2021, Gomantak Times) — karyakaal-purv (Mar 2022 se pehle), reject.
// (2) Joggers Park Phase II ka udghatan (Dec 2023, CM Pramod Sawant dwara; Godinho sirf upasthit) — CM ke karyakram me maujoodgi, reject.
// (3) Dabolim airport multilevel car parking (Nov 2025, AAI project; Godinho ne shilanyas kiya tha) — union subject / vibhag-level project, mantri-niyam se reject.
// (4) Dabolim airport bio-digester/bio-methanation plant (AAI ka Rs 15 crore CSR project) — union subject, mantri-niyam se reject; foundation stone ki coverage sirf YouTube par mili, reject.
// (5) Dabolim flyover Dec 15, 2026 deadline / May 2026 me ek side khulne ki khabar — sirf nirikshan + "karenge" ghoshna; flyover state project hai, reject.
// (6) Rs 43 crore Dabolim grade separators (GSIDC project, late Manohar Parrikar dwara shuru) — Godinho ka sirf nirikshan; udghatan abhi tak nahi hua, reject.
// (7) Vaddem me water pipeline nirikshan (Feb 2021) — karyakaal-purv + sirf nirikshan, reject.
// (8) Chicalim sub-district hospital upgrade ki maang (staff/equipment) — sirf maang/prastav, koi sanction nahi, reject.
// (9) Chicalim garden project — tender teesri koshish me hua lekin foundation stone "will be laid shortly" = ghoshna, reject.
// (10) Mahila Bhavan ka udghatan (CM Sawant + Godinho dwara) — CM-led karyakram; dedicated established-media report nahi mili, reject.
// (11) New Vaddem ke Ganapati temple ko musical instruments ka vitran — daan, vikas-kaam nahi, reject.
// (12) Chicalim me retaining wall / road widening ka kaam (~2021) — karyakaal-purv + sirf nirikshan, reject.
// (13) Chicalim children parks beautification ki ghoshna (~Oct 2025) — ghoshna maatra, reject.
// (14) Nanoskar ka Dabolim railway station road par adhure kaam ka aarop — apramani chunav-aarop, koi satyapit srot nahi, reject.
// (15) Dabolim airport ke bahar second railway overbridge flyover (Rs 16 crore, SWR) — central railway project, mantri-niyam se reject.
// (16) WOOW Heroes/App launch (26 Jan 2024, Chicalim) — event/app launch, bhotik kaam nahi, reject.
// (17) Vaddem Lake phase 2 — sirf prastav/MoS stage; phase 1 kaam aur udghatan karyakaal-purv, reject.
// (18) "Minister promises host of projects for Dabolim" (~Sep 2025) — giant wheel, Mahila Bhawan, Vadem Lake, grade separator promises — ghoshna maatra, reject.
// (19) Jairam Nagar open spaces nirikshan / Anand Estate residents meet (Aug 2026) — sirf nirikshan/mulaqat, kaam nahi, reject.
// Negative: 1998 power-rebate case me Aug 2025 me special court se acquittal — favour ho gaya, negative nahi; defamation wala FIR khud unki shikayat par darj hua tha — negative nahi.
// (20) COORDINATOR QA: Joggers Park Phase III ka shilanyas entry hata di — worker ne sourceUrl galat article (GFP Sanguem outreach) se joda tha; sahi URL ki khoj me koi established-media post-event reporting nahi mili (sirf YouTube short), bina verify hue srot entry ka aadhar nahi.

// South Goa batch — 6. Antonio Vas (Independent) — Cortalim AC.
goaWorks['antonio-vas'] = [
  { title: 'Thana junction par lagbhag Rs 4.5 crore ki lagat se internal sadkon ki hot-mixing launch, MLA Antonio Vas ne swayam shubharambh kiya', category: 'Sadak', badge: 'news', stage: 'shilanyas', sourceLabel: 'The Goan', sourceUrl: 'https://www.thegoan.net/goa-news/cortalim-mla-launches-rs-45-cr-road-repair-works-at-thana/138985.html', date: '2025-11-12', note: 'Cortalim MLA Antonio Vas ne 12 Nov 2025 ko Thana junction par sabhi kharab aur gaddhon wali internal sadkon ki hot-mixing kaam ZP sadasya, Cortalim sarpanch, panch sadasyon aur nivaasiyon ki maujudgi me swayam launch kiye. Vas ne kaha ki kaam kuch dinon me shuru hoga aur ye ZP chunav aachar sanhita se pehle launch kiya gaya. Article me fund ka srot nahi bataya gaya, isliye fund ka mool aur sanction dene wala adhikari apusht hain; shrey sirf MLA dwara kiye gaye launch karyakram tak seemit hai.', period: '2022-2027' },
  { title: 'Velsao ke Sai Vihar me lagbhag Rs 47 lakh ki nayi bani sadak ka udghatan MLA Antonio Vas ne kiya, paanch saal se NOC ki wajah se atka tha kaam', category: 'Sadak', badge: 'news', stage: 'poora', sourceLabel: 'The Goan', sourceUrl: 'https://www.thegoan.net/goa-news/cortalim-mla-flags-pending-nocs-as-big-hurdle-to-road-connectivity/148946.html', date: '2026-05-29', note: 'Cortalim MLA Antonio Vas ne 29 May 2026 ko Velsao ke Sai Vihar me lagbhag Rs 47 lakh ki poorn sadak ka udghatan kiya, nivaasiyon ne poorn hone ka swagat kiya. Vas ne kaha ki sadak lagbhag paanch saalon se NOC ke muddon par atki hui thi aur zameen-maalikon ki anumati milne par yuddh-star par kaam liya gaya. Ise oHeraldo ne bhi report kiya. Article me fund ka srot ya sanction dene wala adhikari nahi bataya gaya, isliye shrey press dwara report kiye gaye poorn hone aur udghatan tak seemit hai.', period: '2022-2027' },
];
// REJECT-LOG (antonio-vas): (1) Cansaulim railway underpass near-completion claim (The Goan, 16 Dec 2025) — Vas ka apna dawa ZP-election campaign event me (sarpanch ne dohraaya, virodh ne jhootha bataya); railway ka project, completion independently unverified, MLA ne na shilanyas kiya na sanction diya — dawa entry nahi. (2) Sancoale me Rs 10 crore hot-mixing works begin soon (The Goan, 14 Nov 2025) — sirf ghoshna 'begin soon', kaam shuru hone ki post-event reporting nahi mili. (3) Kesarval STP work commencement (oHeraldo, STP Rs 55 lakh) — scheme ka kaam, Vas ki bhoomika sirf land-daan ki appeal, na shilanyas na sanction; article ki pakki date bhi nahi mili. (4) Cansaulim drain reconstruction under MLALAD (YouTube video only) — srot niyam ke anusar YouTube-only reject; established media me text reporting nahi mili. (5) 900mm water pipeline launch Cortalim (RDX Goa) — page par sirf YouTube embed, text reporting nahi — reject. (6) Welfare sanctions distribution + horticulture outlet inauguration (RDX Goa) — sirf YouTube embed, text reporting nahi — reject. (7) Kunbi saree training program inauguration (RDX Goa) — YouTube-only — reject. (8) Laadli Laxmi sanction letters distribution (RDX Goa) — YouTube-only aur sarkari scheme ka vitran, constituency kaam nahi — reject. (9) Velsao railway access joint inspection (The Goan, 29 Aug 2026) — sirf nirikshan/daura — reject. (10) Zuari Lake land conversion virodh (Goemkarponn, Nov 2025) — sirf virodh/maang aur vibhagon ko chitthi, koi kaam/sanction nahi — reject. (11) Quelossim panchayat ne court stay ke liye dhanyavaad diya (oHeraldo, Jul 2026) — kanooni samarthan, development work nahi — reject. (12) Sewage tanker pakadna, Meta Strips hill-cutting par karwai ki shapath (oHeraldo) — enforcement activism, project work nahi — reject. (13) Velsao farmers ke liye harvesting machine facility (The Goan, 14 Oct 2026) — MLA ka chaloo-krishi samarthan, koi project stage nahi — reject. (14) Dabolim airport band hone ki bahas — Vas ki koi concrete bhoomika articles me nahi — reject. (15) Zuarinagar cyclone shelter neglect criticism (Congress leader, Sep 2026) — raajnaitik aarop, FIR/case nahi — negative entry ke niyam me nahi aata. (16) Oneindia criminal-cases list me Antonio Vas ke 0 cases — koi negative entry nahi. (17) Curtorim development projects event (oHeraldo) me Vas sirf upasthit — doosre kshetra ka CM karyakram — reject. (18) Alina Saldanha ke karyakaal ke kaam (Cortalim market complex, Sancoale nullahs 2021) — karyakaal-purv — reject.

// South Goa batch — 7. Aleixo Sequeira (BJP) — Nuvem AC.
goaWorks['aleixo-sequeira'] = [
  {
    title: 'Nuvem kshetra ke liye MLA Vikas Nidhi se overhead paani tank yojna swikrit hui, Nuvem MLA Aleixo Sequeira ke anurodh par CM ne 5,000 tank (1,000 litre pratyek) ki swikriti di',
    category: 'Paani',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/cm-felicitates-law-minister-at-verna/347763/',
    date: '2024-01-25',
    note: 'Nuvem MLA Aleixo Sequeira ke anurodh par Chief Minister ne MLA Local Area Development Scheme ke tahat 5,000 overhead paani tank (1,000 litre pratyek) swikrit kiye, aur Nagoa-Verna me samman samaroh me ye yojna launch hui. Credit pardarshita: tank MLA Vikas Nidhi se vitrit hue, swikriti rajya sarkar ne MLA ke anurodh par di, aur uske baad Nuvem kshetra me vitran abhiyaan DIP aur The Goan ne report kiye.',
    period: '2022-2027'
  },
  {
    title: 'Nuvem, Majorda, Utorda aur Calata gaonon ke nivaasiyon ko MLA Aleixo Sequeira ne overhead paani tank baante',
    category: 'Paani',
    badge: 'sarkari',
    stage: 'poora',
    sourceLabel: 'DIP Goa',
    sourceUrl: 'https://dip.goa.gov.in/sequeira-distributes-water-tanks-in-nuvem-constituency/',
    date: '2024-01-30',
    note: 'Mantri aur Nuvem MLA Aleixo Sequeira ne MLA LAD yojna ke tahat Nuvem, Majorda, Utorda aur Calata gaonon ke logon ko paani tank baante, Goa sarkar ke Department of Information and Publicity ke anusaar. Isi abhiyaan me Verna, Loutolim, Nuvem aur Nagoa me Aadhaar card updation camp bhi lagaye gaye. Credit pardarshita: poori tarah MLA LAD yojna se vitrit, tank MLA ne swayam baante.',
    period: '2022-2027'
  },
  {
    title: 'Nuvem gaon ke Palavara de Jardin me overhead paani tank vitran abhiyaan chala, paani ki kami se joojh rahe nivaasiyon ko tank mile',
    category: 'Paani',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/days-after-quitting-as-minister-aleixo-sequeira-reaches-out-to-nuvem-voters-stresses-commitment-to-development/135322.html',
    date: '2025-08-26',
    note: 'Nuvem MLA Aleixo Sequeira ne Nuvem gaon ke Palavara de Jardin me paani ki kami se joojh rahe nivaasiyon ke liye overhead paani tank vitran abhiyaan chalaya. Ye yojna MLA ne lagbhag do saal pehle conceptualise ki thi aur Rs 2.5 crore ke MLA Vikas Nidhi se iske liye lagbhag 4,000 paani tank swikrit hue the. Credit pardarshita: MLALAD se vitrit yojna; MLA ne iske karyanvayan me samarthan ke liye Chief Minister Pramod Sawant ka saarvajanik roop se dhanyavad kiya.',
    period: '2022-2027'
  },
  {
    title: 'Majorda aur Betalbatim gaonon ke liye underground power cabling kaam swikrit hue, MLA Aleixo Sequeira ke anurodh par sarkar ne swikriti di',
    category: 'Any',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/cm-felicitates-law-minister-at-verna/347763/',
    date: '2024-01-25',
    note: 'Nuvem MLA Aleixo Sequeira ne ghoshna ki ki Betalbatim aur Majorda gaonon ke liye underground cabling system swikrit ho gaya hai, aur Chief Minister ne dono gaonon me lagbhag Rs 67 crore ki lagat wale ye underground cabling kaam 15 Nov 2023 ko launch kiye, The Goan ke anusaar. Credit pardarshita: sarkar ne MLA ke anurodh par swikriti di aur kaam CM ne launch kiye; MLA ne swayam kaam execute nahi kiye.',
    period: '2022-2027'
  },
];

// REJECT-LOG (aleixo-sequeira): profile KHAALI nahi — 4 qualifying entries mili (Paani×3, Any×1).
// 1. 'Curtorim development projects launched with 2027 timeline' (heraldgoa): ye Curtorim ke Aleixo Reginaldo Lourenco ka program tha; Sequeira sirf mantri ke roop me maujood the — galat vyakti + CM/mantri-karyakram me maujoodgi, reject.
// 2. 'Supported Govt for development: Nuvem MLA' (heraldgoa): purane Nuvem MLA Wilfred D'Sa alias Babashan (2017-2022 karyakaal) ke kaam — karyakaal-purv, reject.
// 3. 'Nuvem gets underground cabling' (heraldgoa, purana): Nuvem gaon me 11 KV cabling unke Power Minister rehne ke dauran (2007-2012 era) — karyakaal-purv, reject.
// 4. 'It rained foundation stones in Salcete' (heraldgoa): mantriyon ne tatkalin Nuvem MLA Mickky Pacheco ke saath shilanyas kiya tha (Parrikar-era) — karyakaal-purv, reject.
// 5. Borim bridge stories (Sep 2025, heraldgoa): sirf alignment adhyayan/sujhav — swikriti ya work-order nahi; PWD ka vishay, stage nahi bana, reject.
// 6. Nuvem highway expansion progress statements (heraldgoa): PWD ke chal rahe kaam ka status-update — sanction/lokarpan/shilanyas nahi, reject.
// 7. Disqualification petition (TOI, ET, ThePrint — 8 dal-badal MLAs): Speaker ne kharij ki aur Bombay HC ne faisla barqarar rakha — Sequeira ke paksh me niptaya; negative nahi.
// 8. Goa Lokayukta asset-declaration defaulters list (daijiworld, 14 Oct 2026): Sequeira ka naam 2024-25 ghoshna na dene walon me — prashasnik compliance notice hai, koi FIR/case/adalaati sthiti nahi; negative-rule ke tahat negative nahi banaya.
// 9. 'Nuvem villagers dare MLA to scrap SWM plant' (heraldgoa): grameenon ki maang/dharna — satyapit pariyojna-karya nahi, lagu nahi.
// 10. goa9media water-tank piece (31 Jan 2024): wahi 30 Jan 2024 distribution drive jo DIP press release me hai — duplicate, sarkari srot se cover.
// 11. Chunav-jeet/profile/mantri-banane wali khabrein, ST reservation statements, 'karenge' wade — kaam-khabar nahi, reject.

// South Goa batch — 8. Aleixo Reginaldo Lourenco (Independent) — Curtorim AC.
goaWorks['aleixo-reginaldo-lourenco'] = [
  { title: 'Raia aur Rachol gaonon me Rs 3.25 crore ki sadak hotmixing works ka shubharambh', category: 'Sadak', badge: 'news', stage: 'shilanyas', sourceLabel: 'The Goan', sourceUrl: 'https://www.thegoan.net/goa-news/curtorim-mla-sings-%E2%80%98development%E2%80%99-tune-with-message-for-opponents/125252.html', date: '2025-01-27', note: 'Curtorim ke Independent MLA Aleixo Reginaldo Lourenco ne Raia aur Rachol gaonon me lagbhag Rs 3.25 crore ki sadak hotmixing works ka khud shubharambh kiya; MLA ne kaha ki prashasnik swikriti se lekar vittiya swikriti aur work order tak poori prakriya me ek se do saal lagte hain. Credit transparency: article me fund srot ya swikriti dene wale vibhag ka naam nahi hai, MLA ne khud kaha ki Curtorim ke projects taxpayers ke paise se bante hain, isliye yeh rajya-sarkari vibhagiya karya hai jise MLA ne karyarambh charan me launch kiya.', period: '2022-2027' },
];
// REJECT-LOG (aleixo-reginaldo-lourenco): (1) oHeraldo/Navhind "Better Curtorim" virtual foundation-laying (Jan 2025) — CM Pramod Sawant ne PHC, Maina-Curtorim police station, underground cabling, road hotmixing, football grounds, animal hospital, physiotherapy clinic, CSC centres ki buniyad rakhi; MLA ne initiative spearhead kiya aur maujood the — CM ke karyakram me sirf maujoodgi, shilanyas MLA ne khud nahi kiya, reject. (2) Navhind (May 2025) Curtorim PHC/police station site inspection — MLA ne nirmaanadheen site ka nirikshan kiya, GSIDC 20-bedded hospital bana raha tha — sirf nirikshan/daura, reject. (3) oHeraldo "New primary health centre in Curtorim soon: MLA" (published 2019-08-04) — karyakaal-purv, reject. (4) oHeraldo "Hotmixing work launched in Gogol" (published 2016-12-26) — karyakaal-purv aur Margao AC (kshetra-bahar), reject. (5) oHeraldo "Reginaldo commissions water sump, enraged Churchill boycotts function" (Churchill Alemao PWD mantri ka daur) — karyakaal-purv, reject. (6) oHeraldo "MLA calls for upgrading Curtorim PHC through GSIDC" (2020 letter) — karyakaal-purv aur sirf maang, reject. (7) YouTube "Fit and Healthy centre" inauguration (2026) — YouTube-only source, reject. (8) YouTube "MLA Reginaldo speaks on commenced road works at Virabhat, Camarxet, Ralloi" — YouTube-only source, reject. (9) oHeraldo "Road to be named after Pimenta in Curtorim" (Dec 2025) — sadak ka sammanjanak naamkaran, vikas-kaam nahi, reject. (10) oHeraldo "Corner stone laid for Margao multi-level parking project" — Margao AC, kshetra-bahar, reject. (11) oHeraldo "Alex Reginald reviews monsoon power outages" (Jul 2026) — sirf review meeting, reject. (12) The Goan "Reginaldo eyes fifth term" (Oct 2026) — agle karyakaal ke "karenge" vaade, reject. (13) Daijiworld Sonsoddo-Raia veterinary hospital inauguration (Nov 2025) — udghatan me MLA ki bhumika ka koi saboot nahi, reject. Koi negative entry nahi mili.

// South Goa batch — 9. Vijai Sardesai (GFP) — Fatorda AC.
goaWorks['vijai-sardesai'] = [
  {
    title: 'Fatorda me South Goa District Collectorate se Agalli Junction tak sadak ka tarring poora hua, Fatorda MLA Vijai Sardesai ne udghatan kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'oHeraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/sardesai-inaugurates-tarring-work-of-fatorda-roads/261376/',
    date: '2025-09-26',
    note: 'Fatorda MLA Vijai Sardesai ne Sep 2025 me South Goa District Collectorate se Agalli Junction tak sadak ke tarring ka udghatan kiya, bataya ki Fatorda me chapels aur machhli bechne wali mahilaon ko junction se sthanantarit karne sahit Rs 15 crore ke sadak kaam kiye gaye hain. Sardesai ne kaha ki vipakshi vidhayak ke roop me unhone sunischit kiya ki Fatorda vikas se vanchit na rahe. Credit pardarshita: report me sanction dene wala adhikari ya fund ka srot (MLALAD banam rajya PWD yojna) nahi bataya gaya, isliye sanction MLA fund se aaya ya rajya sadak karyakram se, is srot se verify nahi hota.',
    period: '2022-2027'
  },
  {
    title: 'Fatorda me Ravindra Bhavan ke paas Shree Dambab Circle ka udghatan MLA Vijai Sardesai ne kiya, saarvajanik pariyojna batayi',
    category: 'Any',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/dambab-circle-a-social-project-fatorda-mla/122072.html',
    date: '2024-11-18',
    note: 'Fatorda MLA Vijai Sardesai ne 18 Nov 2024 ko Ravindra Bhavan traffic junction ke paas Shree Dambab Circle ka udghatan kiya, South Goa District Collector aur Additional Collector ki maujudgi me. Sardesai ne ise niji ya party pariyojna ki jagah Fatorda ke logon ke liye saarvajanik pariyojna bataya, aur us avsar par Old Market Circle se KTC sadak ke saundaryikaran aur heritage Tinto pariyojna ko punarjivit karne ki ghoshna bhavishya ki yojnaon ke roop me ki. Report me circle ka fund srot nahi bataya gaya.',
    period: '2022-2027'
  },
];
// REJECT-LOG (vijai-sardesai): (1) Opinion Poll Square near Ravindra Bhavan - REJECT karyakaal-purv (inaugurated 2018 during his 2017-19 TCP minister tenure). (2) CCTV camera network of 196 cameras across Fatorda - REJECT karyakaal-purv (launched during minister tenure; fund was MP Shantaram Naik MPLAD, not MLA). (3) Free Wi-Fi zones at 10 locations in Fatorda - REJECT karyakaal-purv (launched on his birthday during 2012-17 tenure). (4) Gulab Baag leisure park at Mayfair Society - REJECT karyakaal-purv (minister tenure, funded by We For Fatorda). (5) Wholesale fish market complex Fatorda foundation stone Rs 12.89 crore - REJECT karyakaal-purv (2018, GSIDC project); Jan 2026 redeveloped market inauguration was SGPDA chairman programme, Sardesai not the inaugurator. (6) Rs 1 crore drains and roads in MMC ward 3 and ward 4 Fatorda - REJECT karyakaal-purv (independent-MLA era 2012-17). (7) Hot mixing works Arlem to Ravindra Bhavan, Dovondem, Don Bosco area - REJECT karyakaal-purv (old term controversies with Damu Naik). (8) Generator donated to Rosary Church Fatorda - REJECT karyakaal-purv. (9) Margao ITI reconstruction foundation stone - REJECT karyakaal-purv (2018, minister tenure). (10) Underground power cabling Fatorda Rs 25 crore - REJECT karyakaal-purv (announcement during minister tenure). (11) Fatorda Traffic Police Station - REJECT: inaugurated 13 Jun 2025 by CM Pramod Sawant; Sardesai only present as MLA (CM ke karyakram me maujoodgi). (12) Ambulance sanctioned for South Goa District Hospital - REJECT galat vyakti: sanction was by South Goa MP Captain Viriato Fernandes from MPLAD funds, not by Sardesai. (13) Fatorda Social Club inauguration - REJECT pre-event: only announced as later-in-evening in the eye-camp report, no post-event inauguration report found. (14) People's Path project at Old Market Circle Fatorda - REJECT: under construction as of Oct 2026 (no completion report); Sardesai and Carlos Alvares walk was inspection only (nirikshan). (15) Sarsangan futsal championship inauguration at We For Fatorda Sports Complex Agalli Oct 2026 - REJECT: sports event inauguration, not a development work; permanent-venue promise was ghoshna only. (16) Development proposals in MMC Ward 5 - REJECT: sirf maang/prastav (MLA sought only NOC from council, May 2026 report; no sanction or work order). (17) COVID counselling facility and ambulance We for Fatorda 2021 - REJECT karyakaal-purv. (18) Home Work women SHG production unit - REJECT karyakaal-purv (2021). (19) Koi negative story negative-evidence bar ko poora karti hui 2022-2027 karyakaal ke liye established reporting me nahi mili.
// (20) COORDINATOR QA: teesri free eye check-up camp entry hata di gayi — muft health camp vyaktigat kalyaan seva (personal welfare/charity) hai, sthayi vikas-kaam nahi; personal charity vikas-kaam nahi banta.

// South Goa batch — 10. Digambar Kamat (BJP) — Margao AC.
goaWorks['digambar-kamat'] = [
  {
    title: 'Aquem me traffic island aur sadkon ke beautification ka kaam Margao MLA Digambar Kamat ne launch kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'TOI Goa',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/goa/margao-will-soon-turn-into-model-city-says-digambar/articleshow/95130371.cms',
    date: '2022-10-27',
    note: 'Margao MLA Digambar Kamat ne Aquem me traffic island aur sadkon ke beautification ka kaam launch kiya, jo sabhi wardon me 14th Finance Commission ke fund se hone wale beautification plan ka hissa tha. Credit pardarshita: fund 14th Finance Commission/MMC ka hai, kaam MMC ke madhyam se; Kamat ne launch kiya. Isi bayaan me Rawanfond 6-lane ROB (Rs 21 crore) aur Khareband sadak ko "jaldi shuru hoga" kaha tha — wo ghoshna thi, entry nahi.',
    period: '2022-2027'
  },
  {
    title: 'Comba ward me Rs 16 lakh ke 3 beautification project Margao MLA Digambar Kamat ne inaugurate kiye',
    category: 'Any',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/three-beautification-projects-thrown-open-in-margao/103477.html',
    date: '2023-09-05',
    note: 'Margao ke Comba ward me Gomant Vidya Niketan ke aaspaas piano jaisa footpath, sangeet vadya pradarshan, clock tower/wall tower, paint aur iron grill wali deewar — kul Rs 16 lakh (GST alag) ke 3 beautification project poore hokar MLA Digambar Kamat ke haathon inaugurate hue. Credit pardarshita: pehal ward councillor Shagun Naik ki thi, kaam nagar nikay yojna se, udghatan MLA ne kiya.',
    period: '2022-2027'
  },
  {
    title: 'Moti Dongor me Urban Ayushman Arogya Mandir ka udghatan hua, Margao MLA Digambar Kamat aur Health Minister maujood rahe',
    category: 'Aspataal',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/margao-mla-digambar-kamat-assures-moti-dongor-residents-no-demolition-of-homes/417231/',
    date: '2025-02-25',
    note: 'Moti Dongor me Urban Ayushman Arogya Mandir ka udghatan 25 Feb 2025 (Mangalwar) ko hua; oHeraldo ke anusaar Margao MLA Digambar Kamat ne udghatan samaroh ko sambodhit kiya aur Health Minister Vishwajit Rane bhi maujood the — TOI ne udghatan ka shrey Kamat ko diya hai jabki Navhind ki report me Health Minister dwara udghatan bataya gaya hai. Credit pardarshita: ye Directorate of Health ki rajya swasthya yojna ki suvidha hai, swikriti aur fund sarkar ka; MLA ki bhoomika sthaniya udghatan samaroh tak seemit hai. Ye chaar mahine me Moti Dongor ki doosri sarkari suvidha thi (police outpost ke baad).',
    period: '2022-2027'
  },
  {
    title: 'Pimpal Katta, Margao me nayi steel railing ka udghatan MLA Digambar Kamat ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/margao-mla-digambar-kamat-announces-%e2%82%b91-5-crore-renovation-plan-for-new-market/435801/',
    date: '2025-09-22',
    note: 'Margao ke Pimpal Katta par nayi lagayi gayi steel railing ka udghatan MLA Digambar Kamat ne kiya; ye usi market-sudhaar briefing ka hissa tha jisme unhone Gand Market ke renovation ka work order jaari hone ki pushti ki thi. Date note: oHeraldo ki report September 2025 ke aakhri hafte ki hai aur usme udghatan "Monday" ko bataya gaya hai, isliye 22 Sep 2025 (Somwar) liya gaya hai.',
    period: '2022-2027'
  },
  {
    title: 'Gand Market, Margao ke renovation ka work order jaari hua, MLA Digambar Kamat ne pushti ki',
    category: 'Any',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/margao-mla-digambar-kamat-announces-%e2%82%b91-5-crore-renovation-plan-for-new-market/435801/',
    date: '2025-09-22',
    note: 'MLA Digambar Kamat ne ghoshna ki ki Gand Market ke renovation ka work order jaari ho chuka hai aur kaam monsoon ke baad shuru hoga — ye prashasnik swikriti ki sthiti hai. Credit pardarshita: lagat aur executing agency report me nahi batayi gayi; New Market ke Rs 1.50 crore renovation (tenders approved) ki ghoshna isi briefing me hui thi lekin uska work order report me pusht nahi hua, isliye wo entry nahi bana.',
    period: '2022-2027'
  },
  {
    title: 'Margao municipal markets (New Market aur Gandhi Market) ke liye Rs 79 lakh ki fire hydrant pipeline ka kaam PWD Minister Digambar Kamat ne launch kiya',
    category: 'Paani',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/work-on-pipeline-hydrants-for-margao-markets-begins/140250.html',
    date: '2025-12-09',
    note: 'New Market me lagi aag ke lagbhag do saal baad Water Supply Department ne 1,090 metre lambi dedicated paani pipeline aur 15 fire hydrant ka Rs 79 lakh ka kaam shuru kiya, jise PWD Minister aur Margao MLA Digambar Kamat ne launch kiya. Credit pardarshita: fund aur execution rajya ke Water Supply Department ka hai; Kamat ne launch kiya aur CM Pramod Sawant tatha Water Supply Minister Subhash Phal Dessai ka samarthan ke liye dhanyavad kiya.',
    period: '2022-2027'
  },
  {
    title: 'Old Market Tinto area ke Rs 32 lakh ke beautification ka udghatan PWD Minister Digambar Kamat ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/pwd-to-prepare-draft-plan-for-modern-old-market-tinto/140787.html',
    date: '2025-12-19',
    note: 'Margao ke Old Market Tinto area me MMC dwara pavers lagakar ki gayi beautification (lagat Rs 32 lakh) ka udghatan PWD Minister Digambar Kamat ne kiya; unhone is kaam ka shrey nagar parishad ko diya. Credit pardarshita: fund aur execution MMC ka hai, udghatan mantri/MLA ne kiya. Aadhunik Tinto ka draft plan banane ka aashwasan bhavishya ki yojna hai, entry nahi.',
    period: '2022-2027'
  },
  {
    title: 'Margao me 74-car hydraulic multi-level parking ke liye GSUDA ne work order jaari kiya, PWD Minister Digambar Kamat ne ghoshna ki',
    category: 'Any',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/a-decade-on-margao%E2%80%99s-parking-project-finally-moves-off-the-drawing-board/151131.html',
    date: '2026-07-15',
    note: 'Ek dashak se atke Margao multi-level parking project ke liye Goa State Urban Development Agency (GSUDA) ne contractor ko work order jaari kar diya; 74 four-wheeler plus two-wheeler ki hydraulic facility MMC building ke peeche purane fish market ki 400 sqm zameen par banegi, lagat me 5 saal ka maintenance shaamil hai. Credit pardarshita: swikriti aur fund GSUDA/rajya sarkar ka hai; PWD Minister Digambar Kamat ne 15 Jul 2026 ko ye jaankari di aur 10 din me shilanyas ka vaada kiya (shilanyas ka satyapan nahi mila).',
    period: '2022-2027'
  },
  {
    title: 'Margao Municipal Council heritage building ke Rs 7.5 crore renovation ka GSUDA work order jaari hua, PWD Minister Digambar Kamat ne jaankari di',
    category: 'Any',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/a-decade-on-margao%E2%80%99s-parking-project-finally-moves-off-the-drawing-board/151131.html',
    date: '2026-07-15',
    note: 'Margao Municipal Council ki heritage building ke lagbhag Rs 7.5 crore ke renovation ka work order bhi GSUDA jaari kar chuka hai aur kaam jald shuru hona tha; purane jhoomaron ko renovation ke baad wapas lagane ka aashwasan diya gaya. Credit pardarshita: swikriti aur fund GSUDA/rajya sarkar ka hai; ghoshna PWD Minister Digambar Kamat ne 15 Jul 2026 ko ki.',
    period: '2022-2027'
  },
  {
    title: 'Comba railway crossing par flyover ko kendra sarkar se swikriti mili, PWD Minister Digambar Kamat ne Union Minister se maang uthayi thi',
    category: 'Sadak',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/centre-clears-comba-railway-crossing-flyover-margao-bypass-link-road-/155476.html',
    date: '2026-10-12',
    note: 'Margao ke Comba railway crossing par flyover ko kendra sarkar se swikriti mil gayi hai; PWD Minister Digambar Kamat ne bataya ki unhone ye project Union Minister Nitin Gadkari ke saamne prathmikta se uthaya tha aur tender kuchh dinon me niklega. Credit pardarshita: swikriti aur fund kendra sarkar ka hai (Union Minister dwara), Kamat ki bhoomika Margao ke liye iski pairavi ki hai; kaam abhi shuru nahi hua.',
    period: '2022-2027'
  },
  {
    title: 'Margao city ko Western Bypass se jodne wali link road (Vidya Vikas Academy ke paas) ka tender nikla, PWD Minister Digambar Kamat ne jaankari di',
    category: 'Sadak',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/centre-clears-comba-railway-crossing-flyover-margao-bypass-link-road-/155476.html',
    date: '2026-10-12',
    note: 'Margao sheher ko Western Bypass se Vidya Vikas Academy ke paas jodne wali link road ka tender nikala ja chuka hai aur contractor kaam shuru karega; PWD Minister Digambar Kamat ne 12 Oct 2026 ko ye jaankari di. Credit pardarshita: ye PWD/rajya sarkar ka kaam hai, swikriti-star par hai; kaam poora hone par Margao ke log bypass se North ya South Goa ja sakenge.',
    period: '2022-2027'
  },
  {
    title: 'Aquem ki teen housing societies ki internal sadkon ki tarring ka kaam PWD Minister Digambar Kamat ne launch kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/centre-clears-comba-railway-crossing-flyover-margao-bypass-link-road-/155476.html',
    date: '2026-10-12',
    note: 'PWD Minister Digambar Kamat ne Aquem ki teen housing societies ki internal sadkon ki tarring ka kaam launch kiya, usi briefing me jisme unhone Comba flyover ki kendriya swikriti ki jaankari di thi. Credit pardarshita: ye PWD/rajya sarkar ka sadak kaam hai, karya-prarambh star par; lagat report me nahi batayi gayi.',
    period: '2022-2027'
  },
];

// REJECT-LOG (digambar-kamat): profile KHAALI nahi — 12 qualifying entries mili (Sadak×3, Paani×1, Aspataal×1, Any×7).
// 1. Margao-Davorlim culvert udghatan (oHeraldo + goanewshub): goanewshub me Kamat ko "Leader of Opposition" bataya gaya hai aur lekh Dec 2020-Jan 2021 ka hai — karyakaal-purv, reject.
// 2. Comba road hotmixing udghatan vivad (oHeraldo, headline me hi "15 January 2021"): karyakaal-purv; usi din PWD mantri ne bhi udghatan kiya tha — rajya PWD ka kaam, reject.
// 3. Rawanfond 6-lane ROB (Rs 21 cr) aur Khareband-Rawanfond sadak chaudikaran (TOI Oct 2022; oHeraldo Sep 2025): Oct 2022 me "jaldi shuru hoga" ghoshna thi, 2023 me CM ne shilanyas kiya aur do saal baad bhi kaam shuru nahi hua — 'karenge' khabar + mantri/CM ka kaam, reject.
// 4. Ravindra Bhavan canteen revival (The Goan, 12 Oct 2023): Kamat ki maujoodgi me udghatan hua, unhone nahi kiya; shrey chairman Rajendra Talak ki committee ko — maujoodgi matra, reject.
// 5. Ring Road sudhaar + footpath shilanyas (oHeraldo, Rs 304 lakh): PWD Minister Sudin Dhavalikar ne shilanyas kiya, Kamat aur MMC chairperson maujood the — mantri-karyakram me maujoodgi, reject.
// 6. Pinnacle Table Tennis Academy, SAG hall Fatorda (oHeraldo): Fatorda me hai (Margao kshetra-bahar) aur private academy ka launch hai — kshetra-bahar + sarkari kaam nahi, reject.
// 7. Margao Western Bypass udghatan (oHeraldo, Dec 2024): CM Pramod Sawant ne udghatan kiya, Kamat sahit MLA maujood the — CM-karyakram me maujoodgi, reject.
// 8. Renovated Ravindra Bhavan reopening (The Goan, 6 Nov 2025): CM ne Rs 2 cr renovation ka udghatan kiya, Kamat PWD mantri ke roop me saath the — CM-karyakram me maujoodgi, reject.
// 9. Aquem cyclone shelter udghatan + dialysis centre approval (daijiworld, Apr 2025): CM ne udghatan kiya, Kamat maujood the — maujoodgi matra, reject.
// 10. Fatorda stadium West Stand ka Monte Cruz naamkaran (The Goan, Oct 2025): CM ne anaavaran kiya; Kamat ke Assembly resolution par sarkari nirnay tha lekin koi bhautik kaam nahi — mantri/CM-karyakram, reject.
// 11. New Market Rs 1.50 crore renovation ghoshna (oHeraldo): "tenders approved" ki ghoshna matra, work order ka satyapan nahi — bina swikriti ki ghoshna, reject (baad me kaam aage badha, par us samay stage nahi bana).
// 12. Market ki 2 buildings ka Rs 70 lakh renovation (oHeraldo): MMC ke tahat poora hua, lekin Kamat ki concrete bhoomika report me sthapit nahi (sirf "informed") — credit aspasht, reject.
// 13. MMC pre-monsoon nullah/flood-prevention works (TOI, May 2025, Rs 1 cr+): Kamat ne sirf reporters se baat ki; kaam MMC/WRD ka tha, MLA ne launch/inaugurate nahi kiya — sirf bayaan, reject.
// 14. Old Market me aadhunik Tinto ka draft plan (The Goan, Dec 2025): "PWD draft plan banayega" bhavishya ka aashwasan hai — 'karenge' khabar, reject (beautification ka udghatan entry bana).
// 15. NH66 hotmixing + traffic island beautification Rs 30-40 cr central fund (The Goan, Oct 2026): "centre will spend" bhavishya yojna, swikriti ka satyapan nahi — ghoshna, reject.
// 16. District hospital shilanyas (2009), Comba underground cabling (2009), SGDH shilanyas (2008), Dabolim airport (2010), Margao bus stand (2011), Raia youth hostel (2009): sab CM-kaal ya usse purv ke — karyakaal-purv, reject.
// 17. Cine Lata banquet hall udghatan (The Goan): private vyapari ka kaam, Kamat mehmaan ke roop me udghatan me aaye — sarkari/kshetra kaam nahi, reject.
// 18. Porvorim elevated corridor udghatan: Margao kshetra-bahar (North Goa), kendriya mantri ne udghatan kiya — kshetra-bahar, reject.
// 19. "Margao roads illuminated" (goanreporter.com, Jan 2024): page mukhyatah YouTube embed hai — YouTube-only srot, reject.
// 20. Margao Garden me cafeteria/exhibition hall prastav (goaplusnews, Apr 2026): Nov 2024 ka prastav-note + virodh; koi swikriti/kaam nahi — sirf prastav, reject.
// 21. Station road-Calconda footbridge nirikshan (oHeraldo): Kamat ne adhikariyon ko repair ke nirdesh diye — sirf nirikshan/nirdesh, kaam ka stage nahi, reject.
// 22. Pimpal Katta building parapet collapse site visit (TOI): sirf daura/survey — kaam nahi, reject.
// 23. Moti Dongor UAAM/police outpost par Aquem Comunidade ka atikraman aarop (oHeraldo): aarop matra hai, koi FIR/case/adalaati sthiti report nahi — negative-rule ke tahat negative entry nahi.
// 24. Multi-level parking aur MMC heritage building ke "10 din me shilanyas" (The Goan, Jul 2026): bhavishya ki ghoshna thi, shilanyas ka satyapan nahi mila — sirf work-order (swikriti) entry bani.
// 25. Margao bus stand redevelopment tender (TOI, Oct 2026): transport vibhag ka vishay, finance approval pending; Kamat ne khud kaha unhe sthiti ki jaankari nahi — koi stage nahi, reject.

// South Goa batch — 11. Venzy Viegas (AAP) — Benaulim AC.
goaWorks['venzy-viegas'] = [
  {
    title: 'Sacred Heart of Jesus High School, Carmona me integrated VR Science Lab ka udghatan — MLA-nidhi se sthapit',
    category: 'School',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Navhind Times',
    sourceUrl: 'https://navhindtimes.in/goanews/why-have-goa-mlas-not-used-funds-for-aided-schools-aap/',
    date: '2026-07-24',
    note: 'Atishi aur MLA Venzy Viegas ne milkar lab ka udghatan kiya; Navhind ke mutabik lab MLA ki nidhi se lagayi gayi aur Viegas isi school ke poorv chhatra hain. Udghatan me Atishi mukhya atithi thin lekin nidhi Viegas ki MLA-nidhi thi.',
    period: '2022-2027'
  },
  {
    title: 'Novo Vaddo, Sernabatim (Colva) me lagbhag Rs 60 lakh ki lagat se naya futsal ground taiyaar — MLA-LAD yojana',
    category: 'Any',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'oHeraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/benaulim-mla-venzy-viegas-inaugurates-%e2%82%b960-lakh-futsal-ground-in-colva/486648/',
    date: '2026-08-26',
    note: 'MLA Venzy Viegas ne swayam udghatan kiya; oHeraldo ke mutabik ground MLA-LAD yojana ke tehet bana aur yuvon ke liye khel suvidha ke roop me taiyaar hai. Udghatan ke samay pickleball court ka keval vaada kiya gaya tha, isliye wah alag entry nahi hai.',
    period: '2022-2027'
  },
  {
    title: 'Fatrade, Varca me naya healthcare unit khula — emergency room, teen-bed dialysis unit aur dental clinic sahit',
    category: 'Aspataal',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'oHeraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/benaulim-mla-venzy-viegas-inaugurates-new-healthcare-unit-at-fatrade-varca/463462/',
    date: '2026-02-10',
    note: 'MLA Venzy Viegas ne udghatan kiya; report ke mutabik kendra me emergency room, teen bed ki dialysis unit aur dental clinic hai. Fund ka srot report me spasht nahi hai — MLA-LAD ya rajya yojana ka dawa report me nahi kiya gaya.',
    period: '2022-2027'
  },
  {
    title: 'Benaulim ke Our Lady of Patrocinio Community Centre me muft e-library ki shuruaat — 10,000 se adhik e-books',
    category: 'School',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Oneindia',
    sourceUrl: 'https://www.oneindia.com/india/education-reform-drive-begins-in-goa-as-arvind-kejriwal-launches-free-e-library-for-students-8009963.html',
    date: '2026-02-25',
    note: 'Yah pahal MLA Venzy Viegas ki thi aur udghatan Arvind Kejriwal ne kiya; karyanvayan bhagidar iDream Education hai aur pehle charan me 5 schools ke 1,904 chhatra jude. Fund ka srot report me spasht nahi hai.',
    period: '2022-2027'
  },
  {
    title: 'Benaulim me Goa ka pehla Mohalla Clinic model Good Health clinic shuru — muft paramarsh aur dawaiyan',
    category: 'Aspataal',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'IANS (Lokmat Times)',
    sourceUrl: 'https://www.lokmattimes.com/politics/aap-opens-first-mohalla-clinic-in-goa/',
    date: '2023-07-01',
    note: 'MLA Venzy Viegas ne 1 July 2023 ko clinic ka udghatan kiya; unke mutabik yah sarkari fund ya yojana ke bina, AAP ke chunavi vaade ko poora karte hue sthapit ki gayi pehli muft clinic hai.',
    period: '2022-2027'
  },
  {
    title: 'Benaulim ke aathon schools me rooftop rainwater harvesting system — MLA allocation se (MLA ka dawa)',
    category: 'Paani',
    badge: 'dawa',
    stage: 'poora',
    sourceLabel: 'Navhind Times (MLA ka bayan)',
    sourceUrl: 'https://navhindtimes.in/goanews/why-have-goa-mlas-not-used-funds-for-aided-schools-aap/',
    date: '2026-07-24',
    note: 'Navhind report me MLA ka bayan hai ki Benaulim ke sabhi aath schools me MLA allocation se rooftop rainwater harvesting lag gaya hai; isi bayan me e-library aur church-mandiron me solar infrastructure ka dawa bhi tha. Iska swatantra post-event reporting nahi mili, isliye badge dawa hai.',
    period: '2022-2027'
  },
  {
    title: 'Sep 2025 me Azad Maidan virodh-pradarshan par Panaji police ne MLA Venzy Viegas sahit lagbhag 450 logon ke khilaf rioting aur unlawful assembly ki FIR darj ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Goan, 4 Oct 2025',
    sourceUrl: 'https://www.thegoan.net/goa-news/fir-against-political-leaders-activists-for-sept-19-protest/137117.html',
    date: '2025-10-04',
    note: 'Activist Rama Kankonkar par hamle ke virodh me 19 Sep 2025 ko hue pradarshan par Panaji police ne Leader of Opposition Yuri Alemao, Vijai Sardesai, Viresh Borkar aur Benaulim MLA Venzy Viegas (AAP) sahit lagbhag 450 logon ke khilaf rioting aur unlawful assembly ki FIR darj ki; shikayat Panaji Police Inspector ne rajya ki taraf se di thi. Vipakshi netaon ne aaropon ko man-gadhant batate hue ise asahmati dabane ke liye police ka istemal kaha. Stage: FIR darj, janch jaari; koi nishkarsh nahi nikala jana chahiye. (TOI Goa ne bhi isi FIR ki reporting ki.)',
    period: '2022-2027'
  },
  {
    title: 'Feb 2026 me TCP mantri ke ghar ke bahar Section 39-A virodh pradarshan par unlawful assembly FIR; police ne MLA Venzy Viegas se poochtachh ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI, 28 Apr 2026',
    sourceUrl: 'https://www.newsdrum.in/national/goa-police-question-aap-mla-in-case-linked-to-protest-outside-ministers-house-11775629',
    date: '2026-04-28',
    note: 'Town and Country Planning mantri ke ghar ke bahar 24 Feb 2026 ko Section 39-A ke virodh me hue pradarshan par police ne Leader of Opposition, teen anya MLAs aur lagbhag 1,500 pradarshankariyon ke khilaf unlawful assembly ki FIR darj ki; 28 Apr 2026 ko police ne Benaulim MLA Venzy Viegas se Panaji thane me poochtachh ki. Viegas ne patrakaron se kaha ki police alpasankhyak samudaay ke vidhayakon ko summons bhejkar nishana bana rahi hai aur pareshan kar rahi hai. Stage: FIR darj, poochtachh jaari; koi nishkarsh nahi nikala jana chahiye.',
    period: '2022-2027'
  },
  {
    title: '2020 ke anti-coal andolan me bhag lene par Railway Act case me court summons (Dec 2022); teen cases abhi bhi lambit, trial jaari (Sep 2025)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'IANS via Daijiworld, 15 Dec 2022; The Goan, Sep 2025',
    sourceUrl: 'https://daijiworld.com/news/newsDisplay?newsID=1029939',
    date: '2022-12-15',
    note: 'Railways dwara 2020 ke anti-coal/double-tracking andolan me bhag lene par darj case me Benaulim MLA Venzy Viegas ko court se summons mila; AAP ne ise BJP ki badle ki raajneeti bataya. The Goan (Sep 2025) ke anusar 2020 ke Chandor aur Arossim pradarshanon se jude teen criminal cases abhi bhi lambit hain aur CJM Margao me trial jaari hai, jisme Viegas bhi aaropi hain; koi case antim charan ke paas nahi hai. Navhind Times (Mar 2025) me Viegas ne kaha tha ki ye utpeedan hai aur Goa ko bachane ki ladai jaari rahegi. Stage: cases lambit, trial jaari; koi dosh-siddhi ya nishkarsh nahi.',
    period: '2022-2027'
  },
];

// REJECT-LOG (venzy-viegas):
// (1) Colva STP udghatan 16 Jan 2025 (PTI/newsdrum; oHeraldo) — CM Pramod Sawant ne udghatan kiya, Viegas keval vakta/upasthit the; mantri-karyakram me maujoodgi, reject.
// (2) Rs 11.4 crore power upgrade, Benaulim (TOI Goa, Sep 2023 udghatan) — Power Minister Sudin Dhavalikar ne udghatan kiya; Viegas ne keval janta se sahyog ki appeal ki; reject.
// (3) SSC/HSSC chhatron ka samman samaroh, Sep 2026 (The Goan) — felicitation event; MLA Scholarship pahal ke tahat career guides; koi sthayi vikas-kaam nahi; reject.
// (4) Benaulim Carnival float parade ghoshna, March 2025 (oHeraldo) — sanskritik karyakram, vikas-kaam nahi; reject.
// (5) Twin projects shilanyas, Oct 2024 (Goan Reporter) — page keval YouTube embed hai, pariyojna ka naam/lagat/sthan ka koi vivaran nahi; YouTube-only, reject.
// (6) Colva Beach nirikshan, Swadesh Darshan 2.0 (oHeraldo) — sirf nirikshan/prarambhik daura; reject.
// (7) Mercado underpass sadak marammat (oHeraldo) — nirikshan + drainage prastav, 'kaam jald shuru hoga'; karenge-khabar, reject.
// (8) Seraulim underpass waterlogging (The Goan, Mar 2025) — nirikshan, 'PWD war-footing par upay karega'; karenge, reject.
// (9) River Sal beautification drive, Mar 2026 (oHeraldo) — AAP karyakarton ke saath swayamsevi safai/saundaryakaran abhiyan; karyakram, vikas-kaam nahi; reject.
// (10) Shiksha salahkar panel gathan, 2022 (RDX Goa) — committee gathan, kaam nahi; reject.
// (11) Maritime board press conference (Navhind Times) — press bayan, reject.
// (12) Church-mandiron me solar infrastructure + school renovation ke dawe (Navhind me MLA ka bayan) — swatantra reporting nahi; reject (rainwater harvesting ka dawa entry me darj hai).
// (13) Free Diabetic Retinopathy Centre (Goa Khabar, ~Nov 2025) — keval ek chhote portal par, sthapit media me koi reporting nahi; reject.
// (14) Betalbatim me kisaan mudde par hastakshep (The Goan, Jul 2025) — padosi Nuvem kshetra ka raajnaitik mamla; kshetra-bahar, reject.
// NEGATIVE NOTES: neeche ke teenon mamle negative-entry bar poora karte hain (established reporting + FIR/case sthiti + jawab), isliye upar entries me darj hain:
// (N1) Sept 19, 2025 Azad Maidan virodh-pradarshan FIR (The Goan 4 Oct 2025; TOI Goa): Panaji police ne Viegas sahit kai netaon ke khilaf unlawful assembly ki FIR darj ki (activist Rama Kankonkar par hamle ke virodh me pradarshan); pradarshankariyon ne aaropon ko man-gadhant bataya.
// (N2) Feb 2026 TCP virodh FIR (The Goan 28 Feb / 1 Mar 2026): TCP mantri ke nivas ke bahar Section 39A virodh par Viegas sahit MLAs ke khilaf FIR; MLA Viresh Borkar ne dawa kiya ki CM ne cases wapas lene ka aashwasan diya tha.
// (N3) Railway Act case (IANS via Citizen Herald, Dec 2022): 2020 ke anti-coal/double-tracking andolan me bhag lene par Railways dwara case, court summons; AAP ne ise badle ki raajneeti bataya.

// South Goa batch — 12. Ulhas Tuenkar (BJP) — Navelim AC.
goaWorks['ulhas-tuenkar'] = [
  {
    title: 'Navelim ke Salpem Lake ke Rs 5 crore ke rejuvenation aur beautification project ka shilanyas MLA Ulhas Tuenkar ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'oHeraldo (Team Herald, via HT Syndication), 25 Feb 2025',
    sourceUrl: 'https://www.htsyndication.com/herald-goa/article/hc-orders-govt-to-act-on-salpem-lake-pollution/88317599',
    date: '2025-02-25',
    note: 'Navelim MLA Ulhas Tuenkar ne 25 Feb 2025 (Tuesday) ko Salpem Lake ke Rs 5 crore ke rejuvenation aur beautification project ka shilanyas kiya; yah khabar Team Herald ki reporting me darj hai, jisme yah bhi likha hai ki usi din Bombay High Court Goa me lake ke sewage pradushan par PIL sun raha tha. Project ki fund-sanction kis vibhag ya scheme se hui aur udghatan kisne kiya hoga, iski jankari khabar me nahi hai, isliye stage sirf shilanyas darj kiya gaya hai; project ke poora hone ki koi alag report nahi mili. Date disclosure: HT Syndication ki feed me tithi MARGAO Feb 25 aur ghatna Tuesday ki batayi gayi hai, jo 25 Feb 2025 se milti hai.',
    period: '2022-2027',
  },
  {
    title: 'Rumdamol me garbage collection point ka udghatan MLA Ulhas Tuenkar ne PWD Minister Digambar Kamat ke saath kiya, facility GWMC ne vikasit ki',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'oHeraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/garbage-collection-point-inaugurated-at-rumdamol-to-tackle-illegal-dumping-in-navelim/478837/',
    date: '2026-06-18',
    note: 'Navelim MLA Ulhas Tuenkar ne PWD Minister Digambar Kamat ke saath Rumdamol ke garbage black spot par bane naye garbage collection point ka udghatan kiya; facility Goa Waste Management Corporation (GWMC) ne vikasit ki hai. Credit transparency: yah rajya ke waste management vibhag ki pariyojna hai, MLA ki bhoomika sanyukt udghatan-karta ki hai — udghatan sanyukt hone ke karan poora shreya MLA ka nahi. Lagat ya fund srot ki jankari khabar me nahi hai. Date disclosure: oHeraldo ka article ghatna Thursday ki batata hai aur search feed me article 118 din pehle (Oct 2026 se) dikha, isliye ghatna tithi 18 Jun 2026 maani gayi hai.',
    period: '2022-2027',
  },
];

// REJECT-LOG (ulhas-tuenkar): (1) Rs 4 crore road hot-mixing Shantinagar se Mandop aur Mandop ki internal streets (The Goan, 23 May 2026) — PWD ka kaam shuru hua, hot-mix ka udghatan "local elected representatives ki maujoodgi me" hua, MLA ne shilanyas/lokarpan khud nahi kiya, sirf khabar me quoted hain; kaam-shuru ki khabar, stage niyam se bahar — reject. (2) Navelim power upgrade nearing completion — 31 transformers Rs 5.15 crore, 21 commissioned, underground cabling pragati par (The Goan, 3 Jan 2026) — MLA ka pragati daava, Electricity Department ka kaam, MLA ne koi udghatan/sanction nahi kiya; reject. (3) Rs 89 crore underground cabling project launched (oHeraldo, ~Sep/Oct 2025) — authorities ne launch kiya, MLA sirf quoted, project unke haath se inaugurate nahi hua; reject. (4) Mandop Ganesh idol immersion site repair (The Goan, 26 Aug 2025) — MLA ke nirdesh par PWD ne repair kaam shuru kiya (2 din me poora hone ka estimate), poora hone ka post-event saboot nahi; full development-beautification plan sirf bhavishya ki yojna ("will be taken up soon"); reject. (5) Jan Kalyan Shibir, Dy Collector office Margao (aizgoanews.in, ~Jul 2026) — welfare outreach camp, Margao kshetra ke bahar, non-priority source (Aizgoa News), MLA-initiated kshetra-kaam nahi; reject. (6) Rawanfond bridge aur road widening shilanyas (goa9media, 17 May 2023) — CM Pramod Sawant ne shilanyas kiya, Tuenkar sirf maujud; reject (maujoodgi; Margao kshetra-bahar). (7) Zariwado Davorlim football ground shilanyas (newsexperts.in) — Labour Minister Avertano Furtado ne shilanyas kiya, Tuenkar "ZP member, Davorlim" ke roop me maujud (pre-2022 bhoomika); reject (karyakaal-purv + maujoodgi). (8) Dr Francisco Luis Gomes bronze statue/amphitheatre compound-wall shilanyas Navelim (oHeraldo) — MP Francisco Sardinha ne shilanyas kiya, Tuenkar sirf maujud; reject (maujoodgi). (9) Rumdamol market complex Rs 14 lakh shilanyas (oHeraldo) — Tuenkar "ZP member" ke roop me shilanyas-karta; karyakaal-purv (Mar 2022 se pehle); reject. (10) Talli Shiv Amrut Sarovar, Kunner Fatorda ka udghatan — Fatorda kshetra ke bahar, YouTube-only source; reject. (11) Sonsodo 10 TPD gasification waste treatment plant udghatan — CM ne kiya, Tuenkar sirf maujud, YouTube-only source; reject. (12) Sinquetim football ground virtual udghatan (oHeraldo) — CM ne kiya, Tuenkar "ZP member" ke roop me maujud; karyakaal-purv + maujoodgi; reject. (13) 20 MLD STP Sirvodem shilanyas (Navhind Times, Nov 2025) — PWD Minister Digambar Kamat ne shilanyas kiya, Tuenkar sirf maujud; reject (maujoodgi). (14) Nagmoddem sewage pipeline nirikshan aur April 2023 completion ka ashwasan (oHeraldo) — PWD Minister Nilesh Cabral ka nirikshan, shikayat ke baad; sirf nirikshan/ashwasan; reject. (15) KTCL chairman ke roop me Margao KTC bus stand renovation aur Navelim bus stand ka vaada (oHeraldo) — 'karenge' khabar, koi sanction/work-order nahi; reject. (16) Navelim stadium me AC/canteen/security ki maang (oHeraldo) — Sports Minister se maang; reject (maang/prastav). (17) Navelim junction traffic signals switch-off (Navhind Times, ~Jul 2026) — MLA ne Traffic Cell ko suspend karne ka nirdesh diya; prashasanik kadam hai, vikas-kaam nahi; reject. (18) NEGATIVE check: vartaman karyakaal (Mar 2022+) me Tuenkar ke khilaf koi established-media FIR/case/adalaati sthiti nahi mili, isliye koi negative entry nahi; chunav-yachika akeli kabhi negative nahi hoti aur parivar ke mamle kabhi nahi liye jaate.

// South Goa batch — 13. Yuri Alemao (INC) — Cuncolim AC.
goaWorks['alemao-yuri'] = [
  {
    title: 'Maddicotto, Cuncolim me futsal ground ka shilanyas MLA Yuri Alemao ne kiya, yuvaon ki maang par unhone prastav rakha tha',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'GoaPlusNews, 11 Oct 2024',
    sourceUrl: 'https://goaplusnews.com/mla-yuri-alemao-lays-foundation-stone-for-futsal-ground-in-cuncolim/',
    date: '2024-10-11',
    note: 'Cuncolim MLA Yuri Alemao ne 11 Oct 2024 (Friday) ko Maddicotto, Cuncolim me futsal ground ka shilanyas kiya; unhone kaha ki futsal ka craze badh raha hai aur yuvaon ki maang par unhone is ground ka prastav rakha tha, jo national standard ka hoga aur paanch mahine me taiyaar hone ki ummeed thi. Source disclosure: GoaPlusNews ek chhota sthaniya outlet hai. Shilanyas karyakram me Cuncolim chairperson Landry Mascarenhas, councillor Polita Carneiro aur former chairperson Laxman Naik maujud the. Lagat ya fund srot (MLALAD ya vibhag) ki jaankari khabar me nahi hai, isliye dawa nahi kiya gaya. Credit transparency: aadharshila MLA ne rakhi; poorn ground ka udghatan baad me CM Pramod Sawant ne Apr 2026 me saat pariyojnaon wale karyakram me kiya (TOI/Goemkarponn reporting), jisme MLA keval maujud the. Source note: futsal shilanyas ki full text coverage GoaPlusNews aur Goa News Hub par mili, dono padhe gaye; preferred list me dono nahi hain, isliye sourceLabel me prakashak spasht rakha gaya hai.',
    period: '2022-2027',
  },
  {
    title: 'Uskineband se Balli tak promenade beautification project ka shubharambh MLA Yuri Alemao ne kiya, walking track, benches aur toilet block banenge',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas-bhoomi pujan',
    sourceLabel: 'The Goan, 1 May 2025',
    sourceUrl: 'https://www.thegoan.net/goa-news/cuncolim-mla-launches-promenade-project-at-balli-vows-action-on-road-safety/129647.html',
    date: '2025-04-30',
    note: 'Cuncolim MLA Yuri Alemao ne 30 Apr 2025 (Wednesday) ko Uskineband se Balli tak beautification project launch kiya, jisme promenade walking track, benches, toilet block aur anya suvidhayen shamil hain; MLA ne kaha ki yah lambe samay se pending maang thi aur unka karyalaya karyon ki follow-up kar raha hai taaki ye nirdharit samay me poora ho. Sath hi unhone kaha ki is kaam ke dauran sadak ke accident-prone black spots aur kharab road engineering bhi sudhari jayegi. Lagat ya fund srot ki jaankari khabar me nahi hai. Stage: kaam ki shuruaat (launch/shilanyas), poora hona baaki. Date disclosure: The Goan ka article 1 May 2025 ko prakashit hua aur ghatna "Wednesday" ki batayi gayi, isliye ghatna tithi 30 Apr 2025 maani gayi hai.',
    period: '2022-2027',
  },
  {
    title: 'Guirdolim, Cuncolim me rooftop water harvesting projects ka udghatan MLA Yuri Alemao ne kiya, Water Resources Department ki pariyojnaayen commissioned hui thin',
    category: 'Paani',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'The Goan, 3 May 2025',
    sourceUrl: 'https://www.thegoan.net/goa-news/mla-inaugurates-water-harvesting-project/129753.html',
    date: '2025-05-02',
    note: 'Cuncolim MLA Yuri Alemao ne Guirdolim-Cuncolim me Paloti Niwas aur St. Francis Xavier Chapel me lagi rooftop water harvesting pariyojnaon ka udghatan kiya; pariyojnaayen Water Resources Department ki pahal par pehle se commissioned thi, isliye credit vibhag ki pariyojna ka hai aur MLA ki bhoomika udghatan-karta ki hai. MLA ne kaha ki ye barish ke paani ke sanrakshan ki lagat-prabhavi pariyojna hai aur bhavishya me aisi aur pariyojnaayen lagane ki yojna hai. Lagat ki jaankari khabar me nahi hai. Date disclosure: article 3 May 2025 (00:56 IST) ko prakashit hua aur udghatan usse pehle hua tha, isliye ghatna tithi 2 May 2025 maani gayi hai.',
    period: '2022-2027',
  },
];

// REJECT-LOG (alemao-yuri): (1) Balli-Cuncolim road hotmixing launch (Goan Reporter, 17 Mar 2025) — page YouTube embed ke siwa kuch nahi, koi text reporting nahi; YouTube-only source niyam ke tahat reject. (2) Dandora, Murida aur Panzorconi me drainage/developmental works launch (SAL TV, 29 Apr 2025) — single-sentence thin report, koi lagat/agency/completion specifics nahi; insufficient evidence, reject. (3) 16-bedded Urban Health Centre proposal Cuncolim admin-complex land par (The Goan, 16 Oct 2025) — sirf prastav aur Jan me nirikshan, "no tangible progress"; prastav/maang stage, reject. (4) CM Pramod Sawant dwara saat pariyojnaon ka launch (Apr 2026) — 15-bedded Urban PHC shilanyas, Chieftains Memorial Park renovation, Guirdolim-Paroda panchayat ghar, Chandor-Guirdolim underground cabling, UAAM wellness centre udghatan, futsal ground udghatan; sab sarkari/CM karyakram, MLA keval maujud the; credit not MLA's, reject. (5) Cuncolim police outpost nirikshan full-fledged station ke liye (Goa News Hub, 10 Apr 2025) — sirf nirikshan/daura, reject. (6) Griha Adhar letters ka vitaran labharthiyon ko (Goa News Hub, 24 Sep 2024) — rajya kalyan yojna ke patra vitaran ka karyakram, MLA-initiated vikas-kaam nahi, reject. (7) Cuncolim bypass Rs 310.92 crore — Union Minister Nitin Gadkari ka allocation; MLA ki bhoomika alignment par appeal/nazar rakhna thi, project ownership unki nahi; reject. (8) Cuncolim IDC se hazardous legacy waste hatana (Rs ~14.98 crore GWMC project, May 2026) — Alemao ne Vidhan Sabha me mudda uthaya aur sthaniya logon ne unki tareef ki, lekin yah sarkar-dwara-executed paryavaran pariyojna hai, seat-level vyaktigat kaam satyapit nahi; reject. (9) Pre-2022 items (power supply tender news jab GFP me the, SH-8 de-notification Chandor) — karyakaal se pehle, reject. (10) NEGATIVE check: unke pita Joaquim Alemao ke purane karyakaal ki CAG audit khabrein (CMC commercial complex revenue loss) — parivar ka mamla, niyam se kabhi negative nahi; Yuri ke vartaman karyakaal (Mar 2022+) me koi established-media FIR/case/adalaati sthiti nahi mili, isliye koi negative entry nahi. LoP sansthanik bhoomika wali tippaniyan (Porvorim flyover, Chieftains curriculum resolution) — seat-kaam nahi, reject.

// South Goa batch — 14. Cruz Silva (AAP) — Velim AC.
goaWorks['cruz-silva'] = [
  { title: 'Ambelim school me computer room, pre-primary classrooms aur children park ka udghatan', category: 'School', badge: 'news', stage: 'poora', sourceLabel: 'Goemkarponn', sourceUrl: 'https://goemkarponn.com/velim-mla-engr-cruz-silva-inaugurates-upgraded-educational-facilities/', date: '2025-07-02', note: 'Ambelim ke school me naye equipped computer room, freshly painted pre-primary classrooms aur renovated children park ka udghatan MLA ne khud kiya. Ye saare kaam MLA Local Area Development fund se hue. Udghatan me school manager Fr. Romeu Godinho, headmistress, PTA members, staff aur students maujood the.', period: '2022-2027' },
  { title: 'Sao Jose de Areal me doosri Aamche Arogya eye care clinic ka udghatan', category: 'Aspataal', badge: 'news', stage: 'poora', sourceLabel: 'The Goan', sourceUrl: 'https://www.thegoan.net/goa-news/aamche-arogya-polyclinic-opens-in-velim/133166.html', date: '2025-07-13', note: 'Velim ka doosra Aamche Arogya eye clinic Sao Jose de Areal ke Menezes Bhatt MLA office me khula, jiska udghatan MLA ne kiya. Pehla clinic December 2024 me Velim office me khula tha jahan chhah mahine me 50 se zyada cataract surgeries hui thi. Naya clinic hafte me do din eye checkup dega aur ASG Eye Hospital ke saath free cataract surgery ki suvidha se juda hai. Credit: MLA aur AAP ki health initiative; fund source MLALAD nahi bataya gaya.', period: '2022-2027' },
  { title: 'Chinchinim me futsal ground ka udghatan', category: 'Any', badge: 'news', stage: 'poora', sourceLabel: 'Goa Khabar', sourceUrl: 'https://www.goakhabar.com/?p=114371', date: '2026-07-29', note: 'Chinchinim me futsal ground ka udghatan MLA ne PWD Minister Digambar Kamat, Chinchinim sarpanch aur sthaniya nivaasiyon ki maujoodgi me kiya. Ground MLA-LAD fund se bana; MLA ke mutabik zaroori sarkari manzooriyon ke baad prastav Public Works Department ke zariye process hua. Credit: fund MLALAD, execution PWD route se.', period: '2022-2027' },
  { title: 'Assolna me naye panchayat ghar ka shilanyas', category: 'Any', badge: 'news', stage: 'shilanyas', sourceLabel: 'oHeraldo', sourceUrl: 'https://www.heraldgoa.in/goa/velim-mla-cruz-silva-lays-foundation-stone-for-new-panchayat-ghar-in-assolna/9246/', date: '2025-09-22', note: 'Assolna me naye panchayat ghar ka shilanyas MLA Cruz Silva ne khud kiya. Rs 2.5 crore ka ye project Deendayal Panchayat Infrastructure Development Scheme ke tehet bana hai; MLA ke mutabik fresh estimates, financial sanction aur tendering ke liye chunaav ke baad do saal se zyada ki mehnat lagi. CM Pramod Sawant aur Panchayat Minister Mauvin Godinho karyakram me nahi aaye; MLA ke mutabik CM ne unhe karyakram jaari rakhne ko kaha tha. Date search-index estimate hai; page par publish date nahi dikhti.', period: '2022-2027' },
  { title: 'Velim me 108 ambulance seva dobara shuru', category: 'Aspataal', badge: 'news', stage: 'poora', sourceLabel: 'RDX Goa', sourceUrl: 'https://rdxgoa.com/aap-mla-cruz-silva-reintroduces-ambulance-service-in-velim/', date: '2022-10-05', note: '2019 se band 108 ambulance seva MLA ki assembly me maang aur Health Minister Vishwajit Rane se lagatar follow-up ke baad Velim me dobara shuru hui; MLA ne apne office parisar me iska udghatan kiya. Seva me fully equipped ambulance van aur motorcycle ambulance shamil hai. Credit split: ambulance state health department/GVK EMRI 108 ne di, seva bahal karane ka shrey MLA ki maang aur follow-up ko.', period: '2022-2027' },
];
// REJECT-LOG (cruz-silva): (1) Boats to fishermen (10 fibre boats, MLALAD) — YouTube-only (Goemkarponn video), no text post-event report found. (2) First Aamche Arogya eye clinic, Dec 2024 (Velim office) — no independent post-event report; only retrospective mentions in Jul 2025 coverage of clinic #2. (3) MLA offices opened at Ambelim and Sao Jose de Areal, Apr 2022 — political offices, not infrastructure work. (4) Underground power cabling project — stalled, estimates sent back for revision (The Goan, May 2026); not completed. (5) Water pipeline replacement project (Budget 2024-25) — tendered but work order not issued, stalled (The Goan, Jan 2026); demand, not work. (6) Cutbona/Cutbona water crisis intervention — MLA instructed JE and set deadline; administrative intervention, not completed work. (7) Chinchinim panchayat ghar — CM pledge to initiate only; foundation stone not laid. (8) Navhind pre-announcement of CM laying Assolna cornerstone — pre-event announcement, not a source; event covered by oHeraldo. (9) Site inspections of sports facilities (oHeraldo, Apr 2022) — inspection only. (10) Benjamin D'Silva-era works (Velim Fabrica ground etc.) — karyakaal-purv, wrong person/era. (11) AAP health camps across Salcete (The Goan/Daijiworld) — campaign coverage, no discrete completed work attributed to Cruz Silva. Negative: no FIR/case/court matter found against Cruz Silva in this window in established outlets.

// South Goa batch — 15. Altone D Costa (INC) — Quepem AC.
goaWorks['altone-d-costa'] = [
  {
    title: 'Khola gaon me OBC labharthiyon ko ghar-marammat ke liye 34 Atal Asara Yojana sanction letter (pratyek Rs 1.5 lakh) MLA Altone D Costa ne swayam saupe',
    category: 'Any',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'Goemkarponn',
    sourceUrl: 'https://goemkarponn.com/in-khola-mla-altone-dcosta-hands-over-34-atal-asara-yojana-aay-sanction-letters-to-beneficiaries/',
    date: '2023-08-09',
    note: 'Quepem MLA Altone D Costa ne Khola panchayat hall me karyakram me panchayat sadasyon ki maujudgi me Khola ke 34 OBC labharthiyon ko ghar-marammat ke liye pratyek Rs 1.5 lakh ke AAY sanction letter swayam saupe; fund ka srot rajya sarkar ki Atal Asara Yojana hai, MLALAD nahi, aur vipaksh me hote hue bhi MLA ne kaha ki sarkari yojnaen dene me ve jaat-paat ya rajneetik dal ka bhed nahi karenge.',
    period: '2022-2027'
  },
  {
    title: 'Gokuldem me Watershed Initiative ke tahat Quiscond aur Gokuldem ke kisaanon ko krishi upkaran aur sabzi ke beej baante',
    category: 'Any',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'O Heraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/quepem-mla-altone-dcosta-distributes-agricultural-equipment-seeds-to-farmers-under-watershed-initiative/463046/',
    date: '2026-02-05',
    note: 'Quepem MLA Altone D Costa ne Gokuldem me karyakram me khet-aadharit jeevika majboot karne wali sarkari Watershed Initiative ke tahat Quiscond aur Gokuldem gaonon ke grameenon ko krishi upkaran aur vibhinn sabzi ke beej baante; fund ka srot rajya watershed program hai, MLALAD nahi, aur sthaniya labharthiyon ne is sahayata ki sarahna ki.',
    period: '2022-2027'
  },
];
// REJECT-LOG (altone-d-costa): (1) Deussa Govt Primary School renovation start (Goan Reporter, Apr 2026) - reject: only YouTube-short coverage, no post-event print/web reporting with work details. (2) Goan Reporter Apr 2023 foundation-stone report for developmental work in Quepem - reject: video-only embed with no text describing which works, locations or costs. (3) Solar water pump inaugurations claimed by MLA - reject: BJP Quepem workers allege (2022 press meet) the pumps were installed and inaugurated by ex-Deputy CM Babu Kavlekar; credit disputed, wrong person. (4) Quepem police station building agitation/ultimatum (TOI, Herald, Aug 2026) - reject: only demand/protest for funds and fresh work order; the building is a stalled state PWD project sanctioned Nov 2016, not the MLA's delivered work. (5) Quitol IDC land offer for IIT Goa campus (Herald) - reject: only an Assembly-floor proposal/suggestion by the MLA, no sanction or action followed. (6) Naqueri-Betul panchayat building inauguration (Goa News Hub, Mar 2025) - reject: MLA spoke at the function but CM was present and fund source/sanction details are absent; credited inauguration unclear, possible CM-karyakram presence. (7) Quepem Krishi Ghar re-tender announcement (Prudent Media) - reject: agriculture minister's announcement from the Assembly, not MLA's work. (8) Quepem villages water supply enhancement plan (Daijiworld, Sep 2025) - reject: state PWD plan with estimates at various approval stages; no MLA action or delivery established. (9) Negatives - none: MLA has nil criminal record per affidavit-based records (Oneindia/Our Neta); no FIR/case/court matter found in established media.

// South Goa batch — 16. Nilesh Cabral (BJP) — Curchorem AC.
goaWorks['nilesh-cabral'] = [
  {
    title: 'Curchorem me Baag-Xirford aur Khamamoll ko jodne wali 225-metre railway overbridge ka udghatan MLA Nilesh Cabral ne kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'Goemkarponn',
    sourceUrl: 'https://goemkarponn.com/rs-6-5-crores-railway-overbridge-at-curchorem-finally-opened/',
    date: '2023-04-16',
    note: 'Pedal chalakon aur two-wheelers ke liye 225-metre railway overbridge South Western Railways ne Rs 6.5 crore ki lagat se banayi aur sthaniya MLA Nilesh Cabral ne April 2023 ke madhya me iska udghatan kiya, CCMC adhyaksh, ZP sadasya aur RVNL general manager maujood the. Credit pardarshita: bridge railways ne banayi aur vitrit ki, rajya ya MLA ne nahi; MLA ne sthaniya pratinidhi ke roop me udghatan kiya, aur report me unhe galti se PWD Minister bataya gaya hai, ye portfolio unke paas kabhi nahi raha.',
    period: '2022-2027'
  },
  {
    title: 'Curchorem ke vidyarthiyon ke liye South Goa District Mineral Foundation ke tahat school bus seva ka udghatan MLA Nilesh Cabral ne kiya',
    category: 'School',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'oHeraldo',
    sourceUrl: 'https://www.heraldgoa.in/goa/curchorem-mla-nilesh-cabral-inaugurates-new-school-bus-service-under-south-goa-dmf-for-students/465971/',
    date: '2026-02-25',
    note: 'Curchorem MLA Nilesh Cabral ne Curchorem kshetra ke vidyarthiyon ke liye Udel-Pontemol-Shivaji Chowk route par Pontemol me nayi school bus seva ka udghatan kiya, 27 Feb 2026 ko report hua ki udghatan pichhle Wednesday ko hua tha. Credit pardarshita: basen South Goa District Mineral Foundation Trust ne vitrit ki aur MLA ne sthaniya pratinidhi ke roop me seva ka udghatan kiya; seva school ke bachchon ko surakshit aur bharosemand rozana transport dene ke liye shuru ki gayi.',
    period: '2022-2027'
  },
];
// REJECT-LOG (nilesh-cabral): (1) Upgraded Community Health Centre, Cacora (inaugurated by CM Pramod Sawant on 3 Jan 2024; Cabral only present; GSIDC project origin 2015, pre-term) — CM karyakram me maujoodgi. (2) Four-lane bridge at Hodar (inaugurated by CM Mar 2024; Cabral only present) — CM karyakram me maujoodgi. (3) Oddar-Curchorem one lane thrown open — Herald report me MLA ka udghatan ullekh hi nahi. (4) Herald 'Power minister inaugurates works' (17 ZP projects, Rs 4.5 cr) — article date 22 Feb 2020, karyakaal-purv. (5) Guardian Angel catering college foundation (Herald) — article date 9 Dec 2019, karyakaal-purv. (6) Underground cabling foundations at Cacora/Hoddar (~2017/2020-era) — karyakaal-purv. (7) CADA building demolition/rebuild announcement (Herald) — sirf baithak/ghoshna, post-event completion ki khabar nahi. (8) Road-widening inspection Curchorem-Quepem/Sanguem (Herald, ~Feb 2026) — sirf nirikshan. (9) Sanjay School new-building inspection (rdxgoa, Aug 2024) — sirf nirikshan. (10) Special-needs smart school, Cacora (Prudent Media) — Chetna Charitable Trust ne khola; Cabral sirf upasthit, udghatan unhone nahi kiya. (11) Pontemol needy-family house (Herald, Apr 2026) — Curchorem youth ka community project; MLA ne sirf samarthan diya, unki swikriti/funding nahi. (12) Mission Bypass support assurance — sirf ashwasan/maang. (13) Free WiFi at Kadamba bus stop (letter-to-editor, ~2020) — pre-term. (14) Health camp inaugurated by Health Minister Rane (Navhind Times) — mantri/vibhag ka karyakram, Cabral sirf upasthit. (15) 'Road to nowhere' hot-mix bayan — sirf bayan. (16) Bus stand, sports complex, library complex, Ravindra Bhavan Phase II — TOI Sep 2026 ke mutabik abhi bhi apoorn/adhoore; sabki swikriti 2012-2020 ki (pre-term); karyakaal me poora/lokarpan nahi. (17) Fire station building (inauguration by CM Manohar Parrikar, ~2018) — pre-term. (18) Notebook distribution drive 2022 (Goemkarponn) — vitran abhiyan, works entry nahi. (19) Pre-event schedule/announcement wali khabrein (e.g. CM ka Jan 2025 Curtorim foundation list, new one-way bridge 'May tak hoga') — 'karenge' news, entry nahi. (20) Nilesh Cabral par koi in-term FIR/conviction/adverse order established reporting me nahi mila; OneIndia (2022) me 0 criminal cases — isliye koi negative entry nahi.

// South Goa batch — 17. Ganesh Gaonkar (BJP) — Sanvordem AC.
goaWorks['ganesh-gaonkar'] = [
  {
    title: 'Collem me Rs 25 crore se zyada lagat ka 3 MLD water treatment plant chalu, Collem aur Mollem ke 2,500 se zyada parivaron ko pehli baar treated paani milna shuru',
    category: 'Paani',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Times of India (Goa), Jul 2025',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/goa/64-years-on-water-treatment-plant-for-mollem-and-collem/articleshow/122800766.cms',
    date: '2025-07-18',
    note: 'TOI ki post-event reporting ke anusar Collem me 3 MLD water treatment plant fisheries minister Nilkanth Halarnkar ne Sanvordem MLA Ganesh Gaonkar ki maujudgi me commission kiya; lagat Rs 25 crore se zyada, 2,500 se zyada households Collem aur Mollem (Dharbandora taluka, Sanvordem AC) ab treated paani pa rahe hain. Project me 650 CuM overhead reservoir (Collem), 800 CuM clear water tank (Metawada) aur 300 CuM ground-level reservoir (Mollem) ke saath 25 km ka distribution network bana. Credit transparency: foundation stone 17 Dec 2021 ko tatkalin PWD minister Deepak Pauskar ne rakha tha (karyakaal se pehle) aur kaam Jan-Feb 2022 me shuru hua; Gaonkar ne TOI ko bataya ki tender SMC Infrastructure (Thane) ko diya gaya — yani unhone karyakaal ke dauran project ki pairvi aur follow-up ki, lekin sanction sarkari (Department of Drinking Water) thi aur lokarpan minister ne kiya; MLALAD fund ka jikr nahi. Date disclosure: article page par publish tithi pradarshit nahi thi; article me "commissioned on Friday" likha hai aur search-index timing (~Jul 2025) ke aadhar par 18 Jul 2025 (Friday) ko ghatna tithi maana gaya hai. Navhind Times (15 Sep 2024 e-paper) me Gaonkar ne pehle hi project ki pragati ka bayan diya tha, jisse unki pairvi pusht hoti hai.',
    period: '2022-2027',
  },
  {
    title: 'Dharbandora ke Government Complex Building me Inspector of Survey and Land Records ke naye karyalaya ka udghatan, Dharbandora vaasiyon ko zameen records ghar ke paas milenge',
    category: 'Any',
    badge: 'sarkari',
    stage: 'lokarpan',
    sourceLabel: 'Goa DIP (press note), 28 Apr 2023',
    sourceUrl: 'https://dip.goa.gov.in/monserrate-inaugurates-lsr-office-at-dharbandora/',
    date: '2023-04-28',
    note: 'Goa sarkar ke Department of Information and Publicity ke official press note ke anusar Revenue Minister Atanasio Monserrate ne 28 Apr 2023 ko Government Complex Building, Dharbandora me Inspector of Survey and Land Records ke naye karyalaya ka udghatan kiya; maujud logon me Sanvordem MLA Ganesh Gaonkar, Revenue Secretary Sandip Jacques, South Goa ZP chairperson Suvarna Prabhu Tendulkar aur Dharbandora sarpanch the. Press note me Gaonkar ne ise apna "dream project" bataya aur Revenue Minister ko dhanyavaad diya, jisse MLA ki is project me vyaktigat pairvi siddh hoti hai; lekin sanction rajya-sarkar ki thi aur udghatan minister ne kiya, isliye credit isi anusar banta hai; MLALAD fund ka jikr nahi. Dharbandora Sanvordem Vidhan Sabha kshetra ka mukhya kendra hai.',
    period: '2022-2027',
  },
  {
    title: 'Kalay ke Pokharmol me 50 saal purani paani-connection ki maang poori, Sanvordem MLA Ganesh Gaonkar ne suvidha ka udghatan kiya',
    category: 'Paani',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Goa News Hub, 02 Nov 2024',
    sourceUrl: 'https://goanewshub.com/50-year-long-demand-for-a-water-connection-to-pokharmol-kalay-met/',
    date: '2024-11-02',
    note: 'Goa News Hub ki post-event reporting (dateline 02/11/2024) ke anusar Kalay ke Pokharmol me 50 saal se lambi paani-connection ki maang poori hui aur suvidha ka udghatan khud Sanvordem MLA Ganesh Gaonkar ne kiya; maujud logon me Village Panchayat Kalay ke sarpanch Narendra Gaonkar, panch sadasya Dipti Shingadi aur PWD adhikari the. Disclosure: article sankshipt hai — lagat ya fund ke srot (MLALAD vs rajya scheme) ka jikr nahi hai; Goa News Hub ek chhota sthaniya news outlet hai. Kshetra pushti: V.P. Kalay Sanvordem Vidhan Sabha kshetra me aata hai (sarkari tender records me "V.P. Kalay in Sanvordem Constituency" darj hai).',
    period: '2022-2027',
  },
];
// REJECT-LOG (ganesh-gaonkar): (1) Sancordem Panchayat bhavan punarnirman ka foundation stone + naya Panchayat Hall udghatan (Goemkarponn/nationpress, 30 Sep 2026) — CM Pramod Sawant ne shilanyas aur lokarpan donon kiye; Gaonkar (ab Speaker) sirf maujud the — sirf maujudgi, reject. (2) Mollem veterinary dispensary ka udghatan (goa9media, Jul 2025) — minister Nilkanth Halarnkar ne udghatan kiya, Gaonkar sirf maujud the — sirf maujudgi, reject. (3) Dudhsagar tourism season ki jeep tour ka udghatan (Navhind Times e-paper, Oct 2023) — Gaonkar ne GTDC chairman ke roop me ribbon kaata; sansthanik GTDC bhoomika, Sanvordem seat ka vikas-kaam nahi, reject. (4) Taj Anjuna 5-star resort foundation stone (livenewsgoa, 2024) — GTDC chairman ke roop me maujudgi; kshetra-bahar (Anjuna, Bardez) + niji nivesh pariyojna, reject. (5) Tambdi Surla me 4 lakh sqm Shivmahotsav Maidan ghoshna (Navhind Times, Feb 2025) — CM Sawant ki ghoshna, Gaonkar sirf maujud the; bina sanction ke ghoshna = ghoshna-stage, reject. (6) GSIDC projects nirikshan (YouTube RDXGOA, ~2026) — YouTube-only source + sirf nirikshan/daura, reject. (7) Road sweeping machine launch Tisk-Sanvordem (oHeraldo, Nov 2016) — karyakaal se pehle, reject. (8) Sanvordem bandhara project par grameenon ki MLA ke saath baithak (veblr, 2024-25) — video-only source; bandhara ka virodh hua tha, koi poorn kaam nahi, reject. (9) Cash-for-jobs viral audio par Collem police station me complaint (TOI, Nov 2024) — complaint darj hui, lekin koi FIR/case/adalaati sthiti established media me report nahi hui, audio ki pramanikta satyapit nahi hui, Gaonkar ne inkaar kiya aur police jaanch ki maang ki (oHeraldo, Sep 2025 tak bhi sirf "alleged" audio) — negative-entry ka bar (established reporting + FIR/case/adalaati sthiti + jawab) poora nahi hua, reject. (10) Speaker chunav (Sep 2025) aur pro-tem Speaker (Mar 2022) — sansthanik bhoomika, kshetra-kaam nahi, reject. (11) Goychemol-Bagwada me mega housing project ka virodh (oHeraldo) — Gaonkar ko sirf soochit kiya gaya; koi kaam nahi, reject. (12) Ambe-Dulay bandhara-cum-footbridge (TOI, Jul 2019; oHeraldo 2020) — idea Gaonkar ke 2012-17 karyakaal ka, kaam Dec 2018 se shuru; vartaman karyakaal (Mar 2022+) se pehle ka, reject. (13) 15 Aug 2023 ka career-guidance programme + vikas-daave (goa.gov.in press note) — sirf vaade/bayan ("fully developed" ka daava, helipad/fire station ke vaade), koi satyapit poorn kaam nahi, reject. Pehchan verification: sabhi entries me "Sanvordem MLA Ganesh/Dr Ganesh Gaonkar" naam-pad spasht hai; Rajendra Arlekar (poorv mantri/rajyapal) jaise naam-se-bhram ka koi item nahi mila. Karyakaal: Feb 2022 chunav, shapath 28 Mar 2022 — Dec 2021 ka foundation stone wali pariyojna (Collem WTP) ko isliye sirf credit-disclosure ke saath rakha gaya hai; koi anya entry karyakaal-purv nahi hai.

// South Goa batch — 18. Subhash Phal Dessai (BJP) — Sanguem AC.
goaWorks['subhash-uttam-phal-dessai'] = [
  {
    title: 'Sanguem nagarpalika kshetra me internal sadkon ki sudhaar aur hot-mixing kaam ka udghatan MLA Subhash Phal Dessai ne kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Prime TV Goa',
    sourceUrl: 'https://www.primetvgoa.in/minister-of-social-welfare-and-mla-of-sanguem-shri-subhash-phal-dessai-inaugurated-the-road-work-for-improvement-and-hot-mixing-of-various-internal-roads-in-sanguem-muncipality/',
    date: '2023-03-01',
    note: 'MLA Subhash Phal Dessai ne Sanguem bus stand se poore nagarpalika kshetra me internal sadkon ki sudhaar aur hot-mixing kaam ka udghatan kiya, toe walls, concrete gutters aur boulder masonry ke saath. Kaam kuch mahine pehle shuru hua tha aur poora hone ke najdeek bataya gaya. Credit note: sanction rajya sarkar se aayi, aur MLA ne saarvajanik roop se CM Dr Pramod Sawant aur PWD Minister Nilesh Cabral ko sadak kaam swikrit karne ka dhanyavaad diya.',
    period: '2022-2027'
  },
  {
    title: 'Sanguem ke Old Wadem me playground aur school ground ka shilanyas MLA Subhash Phal Dessai ne rakha',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/work-on-four-projects-worth-rs-40-cr-launched-in-sanguem/135133.html',
    date: '2025-08-20',
    note: 'MLA Subhash Phal Dessai ne apne janmdin par Sanguem me us din launch hue chaar projecton me se Old Wadem (Wadem Colony No. 1) me playground aur school ground ka shilanyas rakha. The Goan ne lagat Rs 2.65 crore batayi jabki The Navhind Times ne ise Rs 3 crore ka playground bataya; Navhind report pushti karti hai ki MLA ne swayam ye shilanyas rakha. Dono me se kisi report me poorn hone ka samay nahi bataya gaya.',
    period: '2022-2027'
  },
  {
    title: 'Pajimol-Uguem me Agricultural Office Complex ka shilanyas rakha gaya, MLA ke janmdin karyakram me',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/work-on-four-projects-worth-rs-40-cr-launched-in-sanguem/135133.html',
    date: '2025-08-20',
    note: 'Pajimol-Uguem me Agricultural Office Complex ka shilanyas MLA ke janmdin ke avsar par rakha gaya, program ke us charan me Agriculture Minister Ravi Naik maujood the. The Goan ne lagat lagbhag Rs 10 crore batayi jabki The Navhind Times ne isi pariyojna ko Rs 3 crore ka Krishi Ghar bataya; dono reports isi event aur sthan ko cover karti hain.',
    period: '2022-2027'
  },
  {
    title: 'Sanguem ke Pajimol me pashu-chikitsalaya ka shilanyas rakha gaya, MLA ke janmdin karyakram me',
    category: 'Aspataal',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/work-on-four-projects-worth-rs-40-cr-launched-in-sanguem/135133.html',
    date: '2025-08-20',
    note: 'Pajimol me pashu-chikitsalaya ka shilanyas MLA ke janmdin ke avsar par rakha gaya, program ke us charan me Animal Husbandry Minister Nilkanth Halarnkar mukhya atithi the. Lagat Rs 13.5 crore batayi gayi, operation theatre aur X-ray suvidhaen yojnabaddh hain, aur aspatal Sanguem, Quepem aur Curchorem ke kisaanon ki seva ke liye hai. Credit note: faisla AH&VS vibhag ne CM se salah karke liya tha; MLA ne apne janmdin karyakram ke hisse ke roop me shilanyas rakhe.',
    period: '2022-2027'
  },
  {
    title: 'Sanguem thana ke naye bhavan ka shilanyas rakha gaya, MLA ke janmdin karyakram me',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/work-on-four-projects-worth-rs-40-cr-launched-in-sanguem/135133.html',
    date: '2025-08-20',
    note: 'Sanguem thana ke liye naye bhavan ka shilanyas MLA ke janmdin ke avsar par rakha gaya, DGP Alok Verma maujood the. The Navhind Times ne bhavan ko ground-plus-four aur Rs 10 crore ki lagat wala bataya, jabki DGP ne kaha ki 1946-era bhavan ki jagah aadhunik suvidha banegi aur kaam 18 mahine me poora hoga.',
    period: '2022-2027'
  },
  {
    title: 'Sanguem ke Gunbeabhat Bamonsai aur Gunjemol me Hindu crematorium ke jeernoddhar ka udghatan MLA Subhash Phal Dessai ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Goa News Hub',
    sourceUrl: 'https://goanewshub.com/renovation-of-hindu-crematoriums-at-sanguem-a-new-leap-towards-community-development/',
    date: '2025-03-11',
    note: 'MLA Subhash Phal Dessai ne Sanguem ke Gunbeabhat Bamonsai aur Gunjemol Smashanbhoomi me jeernoddhar kiye gaye Hindu crematorium ka udghatan kiya. Credit note: jeernoddhar MLA LAD yojna ke tahat hua, aur MLA ne swayam poorn kaamon ka udghatan Sanguem Municipal Council adhyaksh aur mukhya adhikari ki maujudgi me kiya.',
    period: '2022-2027'
  },
  {
    title: 'Sanguem Mamlatdar bhavan me lift lagayi gayi, varishth nagrikon aur divyang aagantukon ki dashakon purani kathinai khatm',
    category: 'Any',
    badge: 'news',
    stage: 'poora',
    sourceLabel: 'The Goan',
    sourceUrl: 'https://www.thegoan.net/goa-news/long-wait-ends-as-sanguem-mamlatdar-building-gets-lift/149768.html',
    date: '2026-06-17',
    note: 'Varishth nagrikon aur divyang aagantukon ki dashakon ki kathinai ke baad Sanguem Mamlatdar bhavan me lift lagayi gayi, jisme BDO, Civil Supplies aur PWD sub-division karyalay bhi hain. MLA ne sambandhit adhikariyon ke saamne mudda uthaya aur lagatar follow-up kiya, uske baad nirikshan aur aupchariktaen poorn hui aur three-phase bijli connection diya gaya. Stage note: reporting ke samay tak installation aur bijli ka kaam poora tha, lekin lift ke jald chalu hone ki ummeed thi.',
    period: '2022-2027'
  }
];

// REJECT-LOG (subhash-uttam-phal-dessai):
// (1) Six development projects worth Rs 1.75 crore at Vaddem Colony No. 1 (The Navhind Times): the MLA laid foundation stones at a Vaddem-Curdi panchayat function, but the article carries no publish date and no other outlet dated the event, so it was excluded rather than assigning an unverified date.
// (2) New PHC building and dialysis centre at Sanguem (The Navhind Times, 2026): inaugurated by CM Pramod Sawant with the Health Minister present; the MLA only attended, so the CM-programme presence rule applies.
// (3) Foundation stone of eco-tourism and nature education park at Salaulim Dam forest garden (goa-tourism.com): laid by CM Pramod Sawant with the Tourism Minister; the MLA was only present.
// (4) CCTV cameras in Sanguem town (oHeraldo): installed under the MPLAD scheme and inaugurated by South Goa MP Francisco Sardinha while the MLA boycotted the function; not the MLA work.
// (5) Tricolour illumination of Salaulim Dam (The Goan, Aug 2026): inaugurated by Water Resources Minister Subhash Shirodkar; the MLA was only present.
// (6) Statewide drinking water reforms, billing changes, flow meters and 18-hour supply target (The Navhind Times): statewide minister-role announcements by the Drinking Water Minister, not Sanguem-seat works.
// (7) 3 MLD mining-pit water treatment plant at Cavrem (TOI): delayed for want of a mining-company NOC with work not started; pre-work stage and a statewide department initiative.
// (8) Replacement of water pipelines at Sao Jose de Areal (The Goan, May 2026): in Velim constituency, outside Sanguem.
// (9) 8-metre service road assurance for Tarimol village at Bendwada bridge (The Goan, Apr 2026): assurance given by the MLA with GSIDC officials, but work had not begun; karenge-type announcement.
// (10) Talsai village road improvement tender claim (The Goan, Jun 2026): the MLA claim that a fresh tender was awarded, with no cost or work-order specifics, and residents disputed his related water claims; claim-only, excluded.
// (11) 30-ft Chhatrapati Shivaji Maharaj statue plan at Sanguem (Aizgoa News): announcement only, to be funded through stage plays; ghoshna.
// (12) IIT-Goa statements at Sanguem (2022, IANS/Daijiworld): policy statements on a proposed central project amid local protests; no works.
// (13) Kunbi handloom crafts village near Selaulim dam (TOI, 2015): previous tenure, pre-Mar 2022.
// (14) Rs 9 crore mini cricket stadium at Sanguem (oHeraldo, 2014): pre-tenure mention at a tournament event.
// (15) Birthday felicitation event (The Goan, Aug 2026): greetings and felicitation only, no works.
// No negative entries: no established reporting of any FIR, case or court matter against the MLA was found in this research.

// South Goa batch — 19. Ramesh Tawadkar (BJP) — Canacona AC.
goaWorks['ramesh-tawadkar'] = [
  {
    title: 'Keri-Khotigao me 11kV underground bijli cable bichhane ka kaam Tawadkar ne swayam launch kiya; 15 parivaro wali basti ko pehli baar bijli milegi (Rs 6 crore, 3.5 km line)',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'TOI, 30 Apr 2025',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/goa/canacona-hamlet-to-get-power-64-years-after-liberation/amp_articleshow/120741805.cms',
    date: '2025-04-28',
    note: 'Cotigao Wildlife Sanctuary me Keri pahadi ke neeche basi hamlet Goa ki mukti ke 64 saal baad bhi bijli se vanchit thi; Canacona MLA Ramesh Tawadkar ne 28 Apr 2025 ko wahan 3.5 km lambi 11kV underground cable bichhane ka kaam swayam launch kiya, jisse lagbhag 15 parivaro ko bijli connection milega. Lagat lagbhag Rs 6 crore; bijli vibhag ke sahayak abhiyanta ke anusar vanyajeev kshetra ki topography ke kaaran ye sabse chunautipoorn pariyojna hai aur ek mahine me poorn karne ka lakshya rakha gaya hai. Credit pardarshita: ye rajya bijli vibhag ka kaam hai jiska launch MLA ne swayam kiya.',
    period: '2022-2027',
  },
  {
    title: 'Chaudi-Canacona me Ruby Residency ke paas naya 200 KVA bijli transformer Tawadkar ne udghatan kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Daijiworld, 30 Apr 2025',
    sourceUrl: 'https://daijiworld.com/news/newsDisplay?newsID=1279214',
    date: '2025-04-30',
    note: 'Chaudi-Canacona me Ruby Residency ke paas naya 200 KVA bijli transformer Tawadkar ne udghatan kiya, jisse purane overloaded transformer ki wajah se bar-bar hone wale voltage fluctuations khatm honge aur sthir bijli milegi. Tawadkar ne is mauke par dawa kiya ki Rs 250 crore ke bijli kaam poore ho gaye hain aur 90 pratishat sadken hotmix ho gayi hain, lekin ye kul dawe hain jinki swatantra pushti report me nahi hai.',
    period: '2022-2027',
  },
  {
    title: 'Gaondongrim me Gaondongrim High School se Monem Junction tak 7 kshatigrast puliyon ki marammat ka shilanyas; Rs 32 lakh, PWD se sabhi approvals mile',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Goemkarponn, 7 May 2025',
    sourceUrl: 'https://goemkarponn.com/speaker-ramesh-tawadkar-launches-%e2%82%b932-lakh-culvert-repair-project-in-gaondongrim/',
    date: '2025-05-07',
    note: 'Canacona ke Village Panchayat Gaondongrim ke antargat Gaondongrim High School se Monem Junction tak 7 kshatigrast puliyon (culverts) ki marammat aur majbootikaran ka shilanyas Tawadkar ne 5 May 2025 ko kiya. Rs 32 lakh ki is pariyojna ko sabhi zaroori prashasnik approvals mil chuke the aur kaam turant shuru hona tha; PWD ke adhikari karyakram me maujood the. Credit pardarshita: PWD vibhag ka kaam, shilanyas MLA ne swayam kiya.',
    period: '2022-2027',
  },
  {
    title: 'Agas-Loliem me Rs 40 lakh ki drainage nirmaan pariyojna Tawadkar ne launch ki',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Daijiworld, 11 Apr 2026',
    sourceUrl: 'https://daijiworld.com/news/newsDisplay?newsID=1311622',
    date: '2026-04-11',
    note: 'Loliem-Polem panchayat ke Agas-Loliem me Rs 40 lakh ki drainage nirmaan pariyojna ka nirmaan-kaam Tawadkar ne 11 Apr 2026 ko launch kiya; ZP sadasya aur sarpanch sahit sthaniya pratinidhi maujood the. Usi mauke par unhone rozgar roadmap, coaching centre aur Kunbi saree prashikshan jaisi ghoshnaen bhi ki thi — ye ghoshnaen sirf bayan ki shreni me hain aur is entry me shamil nahi hain.',
    period: '2022-2027',
  },
  {
    title: 'Bhatpal ke Dupyamoll me sadak resurfacing, majbootikaran aur hot-mixing kaam Tawadkar ne launch kiye',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Daijiworld, 11 Apr 2026',
    sourceUrl: 'https://daijiworld.com/news/newsDisplay?newsID=1311622',
    date: '2026-04-11',
    note: 'Bhatpal ke Dupyamoll me sadak resurfacing, majbootikaran aur hot-mixing ke kaam Tawadkar ne 11 Apr 2026 ko launch kiye; sthaniya pratinidhi aur nivasi maujood the. Ye unhi din ke karyakram ka hissa tha jisme Agas-Loliem drainage pariyojna bhi launch hui thi.',
    period: '2022-2027',
  },
  {
    title: 'Loliem Saudaryikaran Pariyojna ke pehle charan (Rs 6.5 crore) ka shilanyas Tawadkar ne kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'The Goan, 25 Jul 2026',
    sourceUrl: 'https://www.thegoan.net/goa-news/rs-250crore-underground-cabling-completed-in-loliem-minister-ramesh-tawadkar/151644.html',
    date: '2026-07-25',
    note: 'Canacona ke Loliem me Rs 6.5 crore ki Loliem Beautification Project ke pehle charan ka shilanyas Tawadkar ne 25 Jul 2026 ko kiya. Isi mauke par unhone dawa kiya ki Loliem gaon, Canacona nagarpalika kshetra aur Agonda gaon me 100 pratishat underground cabling Rs 250 crore ki lagat se poori ho gayi hai — ye unka dawa hai jo alag entry me darj hai.',
    period: '2022-2027',
  },
  {
    title: 'Loliem, Canacona nagarpalika kshetra aur Agonda me Rs 250 crore ki underground cabling poorn hone ka Tawadkar ka dawa',
    category: 'Any',
    badge: 'dawa',
    stage: 'poora',
    sourceLabel: 'The Goan, 25 Jul 2026',
    sourceUrl: 'https://www.thegoan.net/goa-news/rs-250crore-underground-cabling-completed-in-loliem-minister-ramesh-tawadkar/151644.html',
    date: '2026-07-25',
    note: 'The Goan me report hue bayan ke anusar Tawadkar ne dawa kiya ki Loliem gaon, Canacona nagarpalika kshetra aur Agonda gaon me 100 pratishat underground cabling Rs 250 crore ki lagat se poori ho gayi hai. Ye unka dawa hai; swatantra pushti uplabdh nahi hai, aur baad me Sep 2026 me TOI me unhone lagbhag 95 pratishat underground power lines poori hone ki baat kahi, isliye ankdon me thoda antar hai.',
    period: '2022-2027',
  },
  {
    title: 'Kendra ne Bendurdem-Canacona 22 km NH-66 bypass ke liye Rs 952 crore swikrit kiye; Tawadkar ka dawa hai ki unhone Kendriya Mantri Nitin Gadkari se ye swikriti dilwayi',
    category: 'Sadak',
    badge: 'dawa',
    stage: 'swikriti',
    sourceLabel: 'TOI, ~7 Sep 2026',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/goa/canacona-4-lane-road-dream-nears-reality-tawadkar/articleshow/133813655.cms',
    date: '2026-09-07',
    note: 'TOI (Sep 2026) ke anusar Kendra ne Canacona me NH-66 ke chaar-lane vistar ke tahat Bendurdem-Canacona 22 km bypass pariyojna ke liye Rs 952 crore swikrit kiye hain aur kaam Jan me hi contractor ko awantit ho chuka tha; ped kaatne ka kaam shuru ho gaya hai aur Oct se mitti-bharai hogi. Credit pardarshita: ye Kendra sarkar (Rashtriya Rajmarg) ki swikriti hai, MLALAD ya rajya scheme ka fund nahi; swikriti me Tawadkar ki bhoomika unka apna dawa hai (unhone kaha unhone Kendriya Mantri Nitin Gadkari se ye dilwayi) — iska swatantra dastavezi saboot report me nahi hai.',
    period: '2022-2027',
  },
  {
    title: 'Gaondongrim ke Gaunem me 5 MLD Water Treatment Plant ke liye Rs 27.58 crore ka work order jari; kaam Sep 2025 se Feb 2027 tak',
    category: 'Paani',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The Goan, 23 Aug 2025',
    sourceUrl: 'https://www.thegoan.net/goa-news/work-order-issued-for-water-treatment-plant-in-canacona/135203.html',
    date: '2025-08-23',
    note: 'The Goan ke anusar Gaondongrim-Canacona ke Gaunem me 5 MLD Water Treatment Plant ke design aur nirmaan (5 saal ke operation-maintenance sahit) ka work order Bagkiya Construction Pvt. Ltd ko Rs 27.58 crore me jari hua; shuru 5 Sep 2025 aur poorn hone ki tithi 26 Feb 2027 rakhi gayi. Ye pariyojna Gaondongrim, Khotigao aur Poinguinim ko peene ka paani degi. Credit pardarshita: work order PWD executive engineer ne jari kiya; ghosna tatkalin naye mantri aur Canacona MLA Tawadkar ke karyalay se hui. Note: Apr 2026 me mantri Subhash Phal Desai ne isi WTP ka shilanyas Rs 38 crore ki pariyojna ke roop me kiya — shilanyas unhone kiya, isliye wo alag reject me darj hai.',
    period: '2022-2027',
  },
  {
    title: 'Canacona me Ravindra Bhavan ke poorn hone ka Tawadkar ka dawa',
    category: 'Any',
    badge: 'dawa',
    stage: 'poora',
    sourceLabel: 'TOI, ~8 Sep 2026',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/goa/95-underground-cabling-beautification-completed-in-canacona-tawadkar/articleshow/133849576.cms',
    date: '2026-09-08',
    note: 'TOI (Sep 2026) ke anusar Seva Sankalp Padyatra me Tawadkar ne dawa kiya ki Canacona ka Ravindra Bhavan poora ho gaya hai, saath hi Canacona town ka saundaryikaran, machhli bazaar ka vikas aur sabhi sadkon ka damrikaran shuru ho gaya hai. Ye unka dawa hai; dhyan rahe ki Ravindra Bhavan ka shilanyas 2013 me (pichhle karyakaal me) hua tha, ab poorn hone ka dawa vartaman karyakaal me kiya gaya hai.',
    period: '2022-2027',
  },
  {
    title: 'Poinguinim me kathit anadhikrit 527 sqm bungalow par PIL: Bombay High Court ne Tawadkar ko notice jari kiya; agli sunvai 28 Oct 2026 ko',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Goan, 1 Oct 2026',
    sourceUrl: 'https://www.thegoan.net/goa-news/poinguinim-bungalow-hc-notice-to-tawadkar/154926.html',
    date: '2026-10-01',
    note: 'Bombay High Court ki Goa bench ne 30 Sep 2026 ko Ramesh Tawadkar aur sarkari adhikariyon ko notice jari kiya; karyakarta Kashinath Shetye aur 5 anyon ki PIL me Poinguinim (Canacona) ke Survey No. 20/0 me lagbhag 527 sqm bungalow ko 2015 me bina anumati ke bana batakar dhwast karne ki maang ki gayi hai. Yachika me aarop hai ki 2025 me unhone is bungalow ko illegal swikar kiya tha aur ab Mhaje Ghar yojna ke tahat ise niyamit karane ki koshish ho rahi hai, jabki 2016 ke niyamitikaran kanoon ke anusar ye patra nahi hai. Agli sunvai 28 Oct 2026 ko hai; unka jawab abhi dakhal hona baki hai. Ye vyaktigat sampatti ka adalaati mamla hai, kshetra-vikas kaam se juda nahi.',
    period: '2022-2027',
  },
];
// REJECT-LOG (ramesh-tawadkar):
// (1) PIB, 28 Jul 2022 — Ujjwal Bharat-Ujjwal Bhavishya bijli abhiyan ka Canacona me karyakram; Tawadkar ne karyakram ka udghatan kiya — campaign event me bhoomika, koi bhotik vikas-kaam nahi; reject.
// (2) Herald 'Slew of projects for Canacona' — BJP ke 16 mahine ki sarkar + CM Manohar Parrikar ke saath shilanyas, 2013 ka purana karyakaal; Ravindra Bhavan, sports complex aadi sab karyakaal-purv; reject.
// (3) Herald 'Tawadkar is a sport. Gets funds to repair faulty pumps' (Ordhofond pump house) — CM 'Manoharbhai' ka zikr + Sports Minister ka pad; Parrikar-kalin 2012-17 karyakaal ki khabar; reject (karyakaal-purv).
// (4) Herald 'Cong govt blamed for poor health facilities in Canacona' — 2012-17 karyakaal me CHC upgrade ka dawa ('by June doctors ki kami nahi hogi'); vartaman karyakaal ka kaam nahi; reject.
// (5) primetvgoa, 2017 — chunav se pehle Tawadkar ke dawe (Rs 62 crore cabling prastav, Ashram school, playgrounds) — sab karyakaal-purv aur adhiktar prastav/dawe; reject.
// (6) The Goan, 11 Apr 2026 — Gaunem 5 MLD WTP ka shilanyas mantri Subhash Phal Desai ne kiya, Tawadkar sirf upasthit; mantri ke karyakram me maujoodgi; reject (work-order entry alag se rakhi gayi hai).
// (7) Navhind Times, ~Feb 2026 — Rs 11 crore ka punarnirmit Canacona nagarpalika bhavan ka udghatan mantri Vishwajit Rane ne kiya, MLA sirf upasthit; maujoodgi; reject.
// (8) TOI, ~Apr 2026 'Highway expansion from Margao to Canacona' — Margao me fundraiser event me Tawadkar ka bayan (Rs 1,376 crore central funding); koi nayi sanction/udghatan/shilanyas event nahi; sirf bayan; reject (4-lane swikriti entry alag se rakhi gayi hai).
// (9) Daijiworld, 11 Apr 2026 — rozgar roadmap, staff-selection coaching centre, Police Bharti Prashikshan Kendra, Kunbi saree mahila prashikshan: sab 'karenge' ghoshnaen, koi post-event kaam nahi; reject.
// (10) Daijiworld, May 2023 — Shram Dham concept (15 ghar nirmanadheen, 150 ka lakshya): purani khabar; Sep 2026 me ghar-saunpne ki entry maujood; reject.
// (11) Herald 'Tawadkar convicted in assault case' (published 23 Oct 2020) — 2017 ki FIR par 2020 me JMFC se 352/506(ii) me dosh-siddhi; FIR aur faisla dono karyakaal-purv; vartaman karyakaal me koi naya FIR/case/adalaati sthiti nahi mili; negative-entry bar nahi chhoota; reject.
// (12) Goa News Hub, 2022 — Hub Encounter interview: rajneetik interview/tipanni, koi vikas-kaam nahi; reject.
// (13) Daijiworld, 5 Jul 2025 — 'Vision and Mission 2030' me 80 pratishat pariyojnaen poorn/pragati par hone ka dawa: kul dawa bina specifics ke; reject.
// (14) The Goan, Aug 2025 — 'Tawadkar gets hero's welcome': mantri-pad ki shapath ki khabar; vikas-kaam nahi; reject.
// (15) Goemkarponn, 7 May 2025 — Gaondongrim me internal roads ka black-topping/hot-mixing 'poorn' hone ka dawa: sirf dawa, koi event ya specifics nahi; reject.
// (16) Goemkarponn, 7 May 2025 — Keri-Khotigao me LT underground lines 'shuru ho gayi' ka dawa: TOI ki Keri cable-launch entry se duplicate; reject.
// (17) Daijiworld, 30 Apr 2025 — '90 pratishat sadken hotmix, Rs 250 crore bijli kaam poore' ka dawa: kul dawa bina specifics/event ke; The Goan Jul 2026 cabling entry me behtar specifics hain; reject.
// (18) COORDINATOR QA: Shram-Dham ke tahat trust-nirmit ghar saunpne ki entry hata di — ye MLA ke charitable trust ki vyaktigat kalyaan seva (personal charity) hai, sthayi kshetra-vikas kaam nahi; personal charity vikas-kaam nahi banta.


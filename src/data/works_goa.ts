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

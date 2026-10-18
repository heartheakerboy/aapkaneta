// Andhra Pradesh — neta-war kaam (works) ka placeholder.
// Mining baad me hogi: Constituency Development Programme (CDP) ke tahat vikas karyon ke record
// jama karke yahan jode jayenge. Abhi khaali export — all.ts me wiring live hai, koi page nahi tootega.
// Karyakaal: 16th Andhra Pradesh Vidhan Sabha, 2024-2029.
// Fund tathya: Andhra Pradesh me MLA fund (CDP — Rs 2 crore/seat/varsh bataya jata hai) ki vartaman sthiti
// foundation-research me verify hogi — yahan sirf established-source tathya jode jayenge.
// Detail: ~/workspace/aapkaneta_scratch/ap_fund_note.txt.
// Whitelist (Andhra Pradesh): The Hindu, Indian Express, Hindustan Times, NDTV, India Today,
// Times of India, The Tribune, Dainik Bhaskar, Dainik Jagran, Amar Ujala, PTI (established outlet par).
export const andhraWorks: Record<string, any[]> = {};


// Andhra Pradesh — Batch 1: Srikakulam + Vizianagaram + Parvathipuram Manyam (1-3/26 jile).
// Mined 2026-10-18. Har MLA ka fragment: ~/workspace/aapkaneta_scratch/ap1_worker_<slug>_works.ts.
// QA-DROP: kinjarapu-atchannaidu ki 2 New Indian Express-sourced entries (whitelist-bahar) — fragment me preserved, retry-lead.

// ==== Srikakulam (Batch 1) ====
// bendalam-ashok — 0 works + 0 negatives
// Ichchapuram (Srikakulam), TDP, 3-time MLA (2014, 2019, 2024); appointed Government Whip 12 Nov 2024.
// Mining: multiple targeted searches on whitelist outlets (The Hindu, New Indian Express, Deccan Chronicle)
// turned up NO seat-level physical works with MLA's personal role, and NO Jun 2024+ legal development.
// Fund note: AP CDP allocation officially unverified — allocated: null in andhra.ts record.
// All entries Roman-script Hinglish per spec.
andhraWorks['bendalam-ashok'] = [];

// gouthu-sireesha — 2 works + 0 negatives (researched 2026-10-18)
// Pehchan: Gouthu Sireesha, TDP, Palasa (Srikakulam jila; Palasa + Mandasa + Vajrapukotturu mandals),
// 16th AP VS 2024-2029, first-time MLA. D/o Gouthu Shyam Sundar Sivaji (purv mantri);
// svatantrata senani Gouthu Latchanna ki poti. Pesha: business. Halafname me 3 mamle.
// Dono entries Vidhansabha-sawaal par mantri-jawab (dastaveji mantri-ashwasan, credit capped) —
// The Hindu ki post-event reporting se kholkar verified. Halafname ke 3 pending mamalon ka
// Jun 2024+ me koi nyayik vikas established media me nahi mila — isliye 0 negatives.
andhraWorks['gouthu-sireesha'] = [
  {
    title: 'Vidhansabha me Palasa MLA ke sawaal par HRD Mantri ne G.O. 117 radd karne aur school buniyadi dhanche par agle varsh lagbhag Rs 1,000 crore kharch ka ashwasan diya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/go-117-brought-during-ysrcp-term-kept-poor-students-away-from-govt-schools-says-hrd-minister-nara-lokesh/article70643785.ece',
    date: '2026-02-17',
    note: 'The Hindu (17 Feb 2026) ke mutabik, Legislative Assembly me Palasa MLA Gouthu Sirisha (report me yahi naam-spelling; pehchan: Palasa, TDP, Winner 2024) ke sawaal ke jawab me HRD Minister Nara Lokesh ne kaha: YSRCP karyakaal (2019-24) ka G.O. 117 garib chhatron ko sarkari schools se door kar chuka tha aur NDA sarkar ne chunav-vada nibhate hue is radd kiya; Nadu-Nedu ke bavjud 233 schools bandi ke kagaar par the; One Class-One Teacher system 3% se badhkar 33% hua. Buniyadi dhanche ki prathmiktayen: leak-proof buildings, benches, toilets, drinking water; sabhi schools ko 3-star/4-star par lane ka lakshya; lagbhag Rs 1,000 crore agle varsh (SMC accounts me Rs 200 crore + budget me Rs 800 crore); lagbhag 40% schools abhi 1-2 star category me. CREDIT CAPPED: ye mantri ka sadan me jawab hai — MLA ka vyaktigat lokarpan/shilanyas nahi; report me Palasa ke vishesh school-karyon ki itemized suchi nahi, credit isi sawaal-jawab tak seemit. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'Vidhansabha me Palasa MLA ke sawaal par R&B Mantri ne Palasa ke teen purane causeways par High-Level Bridges ke estimate mangaye, swikriti budget-upalabdhta par nirbhar',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/minister-admits-causeway-issues-in-palasa-plans-construction-of-high-level-bridges/article70671208.ece',
    date: '2026-02-24',
    note: 'The Hindu (24 Feb 2026) ke mutabik, Roads and Buildings Minister B.C. Janardhan Reddy ne Assembly me Palasa MLA Gouthu Sireesha ke sawaal ke jawab me swikara ki Srikakulam jile ke Palasa constituency me Major District Roads (MDRs) par teen purane causeways se logon ko pareshaniyan ho rahi hain; emergency me gambhir transport-samasya hoti hai. Mantri ne bataya ki teenon jagah High-Level Bridges (HLB) ke nirman ke estimate mange gaye hain: (1) NH-5 se Kesupuram via Brahmanatarla, (2) Palasa se Pedanchala road, (3) MM Road se Ambatikambaram via Boodarasingi; swikriti ‘subject to budget availability’ par vichar hogi. Pehle ye HLBs New Development Bank (NDB) Phase-II (2018-19) me prastavit the lekin NDB Phase-II kary 2024-25 me radd hue, isliye naye estimate mange gaye. CREDIT CAPPED: swikriti abhi NAHI hui — sirf estimate + ‘budget upalabdhta par’ ashwasan; credit isi sawaal-jawab tak seemit. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
];

// kinjarapu-atchannaidu — 4 works + 0 negatives (QA: 2 NIE entries dropped)
// Mined 2026-10-18. Sources: Deccan Chronicle (2 post-event reports), New Indian Express (1 post-event report).
// Pehchan-jaal dhyan rakha gaya: bhatije K. Ram Mohan Naidu (Srikakulam MP + Kendriya mantri) ke saare kaam bahar rakhe gaye.
andhraWorks['kinjarapu-atchannaidu'] = [
  {
    title: 'Ravivalasa Panchayat (Tekkali) me Rs 11.28 crore ke gramin vikas karyon ka shilanyas — CC roads, canals, protective walls, culverts, Anganwadi, DWCRA bhavan aur shamshan-bhoomi upgrade sahit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/atchannaidu-initiates-rs-1128-crore-development-projects-for-tekkali-1885493',
    date: '2025-06-16',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Krishi Mantri Kinjarapu Atchannaidu ne Ravivalasa Panchayat (Tekkali constituency, Srikakulam) me Rs 11.28 crore ke vikas karyon ka shilanyas kiya; fund Panchayat Raj vibhag ka bataya gaya hai. Itemized suchi: CC roads aur canals (Ravivalasa, Damodarapuram, Chinna Narayanapuram) Rs 2.3 crore; protective walls Rs 1.5 crore; culverts Rs 50 lakh; purani aur nayi colonies ke canals Rs 51 lakh aur Rs 60 lakh; Chinna Narayanapuram SC Colony me road Rs 50 lakh aur shamshan-path Rs 30 lakh; shamshan-bhoomi upgrade Rs 75 lakh; Endalamallikarjuna Swamy Temple tak road Rs 3 crore; Kotha Colony me Anganwadi Rs 12 lakh aur DWCRA bhavan Rs 30 lakh. Inferred-date disclosure: report me karyakram ki exact tareekh nahi di gayi, isliye prakashan-tithi (16 Jun 2025) li gayi hai. Report me har ghar nal-pani aur Talliki Vandanam ka zikr yojna-ghoshna hai — is entry ka vishay nahi.',
    period: '2024-2029',
  },
  {
    title: 'Tirangi Panchayat TT Road se Gangadharapeta gaon tak Rs 1.17 crore ki CC road ka lokarpan (employment guarantee scheme)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/atchannaidu-launches-3-crore-rural-works-in-tekkali-1930244',
    date: '2026-01-13',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Atchannaidu ne Tekkali daure me Tirangi Panchayat ki TT Road se Gangadharapeta gaon tak bani Rs 1.17 crore ki cement concrete road ka lokarpan kiya; fund employment guarantee scheme (VB-G RAM G/MGNREGS ke uttaradhikari scheme) ka bataya gaya hai. Inferred-date disclosure: report me karyakram ko "Tuesday" aur Sankranti ke avsar par bataya gaya hai; Sankranti 2026 (14 Jan, Budhwar) se pehle wala Tuesday 13 Jan 2026 hota hai, isliye ye tareekh li gayi hai. Usi daure me Sulabh complex ka shilanyas alag entry me hai; "atirikt vikas karyon" ke shilanyas ka vivran report me nahi diya gaya — wo is entry me nahi.',
    period: '2024-2029',
  },
  {
    title: 'Seetharamapuram Panchayat ke Anjanapuram Junction se Venkatapuram tak Rs 1.83 crore ki CC road ka lokarpan (employment guarantee scheme)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/atchannaidu-launches-3-crore-rural-works-in-tekkali-1930244',
    date: '2026-01-13',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Atchannaidu ne Tekkali daure me Seetharamapuram Panchayat me Anjanapuram Junction se Venkatapuram tak bani Rs 1.83 crore ki CC road ka lokarpan kiya; fund employment guarantee scheme ka bataya gaya hai. Inferred-date disclosure: report me karyakram ko "Tuesday" aur Sankranti ke avsar par bataya gaya hai; Sankranti 2026 (14 Jan, Budhwar) se pehle wala Tuesday 13 Jan 2026 hota hai, isliye ye tareekh li gayi hai.',
    period: '2024-2029',
  },
  {
    title: 'Tekkali me Sulabh complex ke nirman ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/atchannaidu-launches-3-crore-rural-works-in-tekkali-1930244',
    date: '2026-01-13',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Atchannaidu ne Tekkali daure (13 Jan 2026 — upar wali entry ke anusar inferred) me Tekkali me Sulabh complex ke nirman ka shilanyas kiya. Fund-source report me nirdisht nahi — ghoshit nahi. Inferred-date disclosure: report me karyakram ko "Tuesday" aur Sankranti ke avsar par bataya gaya hai; Sankranti 2026 (14 Jan, Budhwar) se pehle wala Tuesday 13 Jan 2026 hota hai, isliye ye tareekh li gayi hai.',
    period: '2024-2029',
  }
];

// mamidi-govinda-rao — 0 works + 0 negatives
// Pathapatnam, TDP — pehchan: andhra.ts record (age 47, 12th Pass, 2 NI Act 138 mamle, 89,452 vote se jeete).
// Researched 2026-10-18. Whitelisted established media me MLA ke vyaktigat
// seat-level vikas kaam (lokarpan/shilanyas/GO-sanction) ka koi post-event
// record nahi mila; stage-accurate negative bhi nahi mila.
// Fund: CDP allocated: null (andhra.ts fund note) — sthayi aavantan pakka nahi.
andhraWorks['mamidi-govinda-rao'] = [];

// gondu-shankar — 0 works + 0 negatives (researched 2026-10-18)
// Pehchan: Gondu Shankar, TDP, Srikakulam (Srikakulam city/jila mukhyalaya seat), 16th AP VS 2024-2029,
// B.E. (Civil), purv Sarpanch (Krishnappapeta) aur Srikakulam Sarpanches Association ke purv adhyaksh.
// Halafname me 7 criminal cases (background record me darj).
// Whitelisted media (The Hindu, Deccan Chronicle) me MLA ki seat-level Jun 2024+ bhoomika ke
// saare lead sirf ghoshna / nirikshan / minister-neta-led karyakram me maujoodgi / daan-rahat nikle —
// koi bhi VALID entry (vyaktigat lokarpan/shilanyas bhautik sarkari sanrachna ka, GO-backed swikriti,
// dastaveji Vidhansabha-nateeja, ya mantri-ashwasan se judaa nateeja) nahi mila. Khali profile theek hai.
andhraWorks['gondu-shankar'] = [];

// ---- Koona Ravi Kumar (Amadalavalasa, TDP — Srikakulam jila) works batch (researched 2026-10-18) ----
// 0 works entries. Jun 2024 ke baad whitelisted media me Ravi Kumar ka Amadalavalasa seat ke liye koi
// vyaktigat lokarpan, shilanyas, CDP itemized vitaran/work-order/sanction report, ya Vidhansabha
// maang ka dastaveji nateeja nahi mila. Mila hua sab kuchh ya to dusre neta (CM/mantri/MP) ke karyakram
// me maujoodgi tha, ya sirf tippani/bhashan/baithak/nirikshan tha, ya pre-event announcement tha, ya
// pre-term (2014-19 / 2019-24) ka tha. Ravi Kumar ki karyakaal me pramukh bhumika Public Undertakings
// Committee (PUC) chairman ke roop me rahi (Guntur/Vishakhapatnam review meetings — TOI, 2025-26) —
// ye samiksha/nigrani ki bhumika hai, seat-level vikas kaam nahi.
// NEGATIVES: 0 — halafname me 15 aapradhik mamle hain, lekin halafname ke pending mamle akele negative
// NAHI. Purane mamlo (2019 me sarkari karmchari ko gaali dene ka mamla, Aug 2019 Spandana ghatna,
// parishad-chunav mamla) ka Jun 2024+ me koi nyayik vikas (saza/bari/charge-sheet/arzi ka aadesh)
// whitelisted media me nahi mila — sab pre-term hain. Naam-jaal: "K. Ravi Kumar" naam ki kai adalati
// records (jaise Supreme Court SLP Diary 21731/2025 — order.law, MLA se pehchan apusht; respondent
// P. Parameshwara Reddy; source bhi non-whitelist) ko MLA se joda nahi gaya — retry lead C.
// FOUNDATION: brief ke saare tathya pusht hue (Amadalavalasa, TDP, 2024-2029, 2014-19 me bhi MLA,
// 88,003 vote, 35,032 margin vs Thammineni Seetharam/YSRCP, 15 cases) — koi surgical edit zaroori nahi.
// Dhyan rahe: Gottipati Ravi Kumar (Energy Minister, Pedakurapadu) alag vyakti hain — unke sub-station
// shilanyas (NIE, 12 Jul 2025) ko is profile me nahi ghusaya gaya. Thammineni Seetharam (2019-24 MLA,
// ex-Speaker) alag vyakti hain.
andhraWorks['koona-ravi-kumar'] = [];

// nadukuditi-eswara-rao — 2 works + 0 negatives
// Mined 2026-10-18. Source whitelist: The Hindu (post-event reporting only).
// Fragment khud merge NAHI karna — parent merger karega.
andhraWorks['nadukuditi-eswara-rao'] = [
  {
    title: 'Ranasthalam me Anna canteen ke nirman ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/affordable-meals-soon-in-ranasthalam/article69951710.ece',
    date: '2025-08-19',
    note: 'The Hindu ki post-event report ke mutabik, Etcherla ke BJP MLA N. Eswara Rao ne Ranasthalam (Srikakulam jila) me Anna canteen ke nirman ka shilanyas kiya aur kaha ki canteen teen mahine me ban jayegi; unke anusar ye mazdooron, karmachariyon, sabzi-vikreton aur Ranasthalam ke college vidyarthiyon ke liye saste bhojan ka sahara banegi. Inferred-date disclosure: report 19 Aug 2025 (Mangalwar) ko prakashit hui aur karyakram ko "Tuesday" bataya gaya — prakashan-tithi hi event-tithi hai, isliye 19 Aug 2025 li gayi hai. Credit/fund disclosure: report me canteen ki lagat ya fund-source nahi di gayi — NDA sarkar ki pahal bataya gaya hai; MLA-nidhi se judav srot me nahi, isliye "ghoshit nahi".',
    period: '2024-2029',
  },
  {
    title: 'MLA ka dawa — NPCIL Etcherla kshetra me Corporate Social Responsibility ke tahat skill development centre sthapit karne par sehmat hua',
    category: 'Rojgar',
    badge: 'dawa',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/npcil-agreed-to-set-up-skill-development-centre-in-etcherla-says-bjp-mla-n-eswara-rao/article70500116.ece',
    date: '2026-01-12',
    note: 'MLA ka dawa — The Hindu ko diye gaye bayaan me MLA N. Eswara Rao ne kaha ki Nuclear Power Corporation of India Limited (NPCIL) ke adhikariyon ne unse charcha ke baad CSR ke tahat Arjunnavalasa ke paas skill development centre sthapit karne par sahmati jatai hai, jahan salana kam se kam 1000 yuvaon ko prashikshan diya jayega. Unhi ke dawe ke mutabik NPCIL Kovvada (Ranasthalam mandal) me nuclear project ke liye Etcherla kshetra me apne karmachariyon ke liye township banayega aur Dharmavaram gaon me zameen dene walo ke liye Rs 700 crore ki punarvas colony banegi. Credit capped: ye sirf MLA ka sarvajanik dawa hai — centre ka shilanyas/udghatan ya NPCIL ki taraf se swatantra pushti report me nahi di gayi; Rs 700 crore ka punarvas colony NPCIL project ka hissa hai, MLA ke kaam ka nahi. Inferred-date disclosure: report 12 Jan 2026 ko prakashit hui aur bayaan "Monday" ka bataya gaya — 12 Jan 2026 khud Somwar hai, isliye prakashan-tithi hi li gayi hai.',
    period: '2024-2029',
  },
];

// baggu-ramanmurthy — 1 works + 0 negatives
// Pehchan pakki: Narasannapeta (Srikakulam jila), TDP, Winner 2024 —
// 99,951 vote; runner-up Dharmana Krishna Das (YSRCP, 70,580) ko 29,371 maton se haraya.
// S/o Late Chalapati Rao, age 65, pesha kheti, 0 criminal cases (halafnama).
// Karyakaal: 16th AP Vidhan Sabha, Jun 2024+ (2024-2029).
// English media me MLA ki khaas vyaktigat bhoomika wali coverage kam hai —
// zyada tar stories me MLA sirf attendee ya maang rakhne wale ke roop me dikhe (sab REJECT-LOG me).
andhraWorks['baggu-ramanmurthy'] = [
  {
    title: 'Dola–Polaki–Naupada sadak ke pehle 13 km stretch (Narasannapeta/Srikakulam kshetra) ke chaudaikaran aur mazbooti ke liye Rs 25.20 crore ki prashasanik swikriti — G.O.Rt.No.459',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/5570-crore-sanctioned-for-road-infrastructure-in-srikakulam-1983280',
    date: '2026-08-29',
    note: 'Deccan Chronicle ki post-event report ke mutabik Andhra Pradesh transport, roads and buildings department ne G.O.Rt.No.459 (28 August ko jari; varsh 2026 prakashan-tithi 29 Aug 2026 se inferred — reasoning yahan disclose hai) ke zariye Dola–Polaki–Naupada road ke 33.20 km ke widening aur strengthening karyon ko Rs 55.70 crore ki prashasanik swikriti di. Pehla stretch: km 0/0 se 17/0 tak (report me 13 km bataya gaya, Narasannapeta/Srikakulam kshetra) — swikrit rashi Rs 25.20 crore. Doosra stretch (km 17/0 se 37/200, 20.20 km, Tekkali/Srikakulam kshetra, Rs 30.50 crore) Narasannapeta seat ke bahar hai, isliye is entry me nahi liya gaya. Sadak Narasannapeta, Tekkali aur Naupada ko jodti hai aur kai tatiya gaon ki connectivity sudharegi. Credit capped: ye rajya sarkar (transport/R&B vibhag) ki GO-sw-ikriti hai — Narasannapeta MLA Baggu Ramanamurthy ki vyaktigat bhoomika (shilanyas/lokarpan/vidhansabha maang) srot me disclosed NAHI hai, isliye credit isi swikriti tak seemit hai. Fund: rajya R&B vibhag; CDP/MLA-nidhi se judne ka koi ullekh nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
];


// ==== Vizianagaram (Batch 1) ====
// kondru-murali-mohan — 0 works + 0 negatives
// Rajam (SC), Vizianagaram, TDP. Karyakaal: Jun 2024+ (16th AP VS, 2024-2029).
// SOURCES KHOLKAR PADHE GAYE. Mined 2026-10-18.
// Fund: AP me MLA fund (CDP) ka sthayi aavantan satyapit nahi — allocated: null,
// see andhra.ts fund note. Koi kaam MLA-nidhi se jodne ka srot-spasht dawa nahi mila.
andhraWorks['kondru-murali-mohan'] = [];

// r-v-s-k-k-ranga-rao — 1 works + 0 negatives
// Bobbili (TDP, Baby Nayana). Mined 2026-10-18. Whitelist-only, post-event reporting.
// Fragment khud merge NAHI karna — parent QA/merge karega.
andhraWorks['r-v-s-k-k-ranga-rao'] = [
  {
    title: 'Bobbili MLA Baby Nayana ne Parvatipuram MLA Bonela Vijaya Chandra ke saath Delhi me Railway Board Chairman se milkar Udhna-Berhampur Amrit Bharat train (19021) ke Bobbili aur Parvatipuram stations par halt ki maang rakhi — Railway Board Chairman ne dono halt approve kiye, train 27 September 2025 se chalegi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/udhna-berhampur-amrit-bharat-train-to-halt-at-bobbili-parvatipuram-mla/article70093673.ece',
    date: '2025-09-25',
    note: 'The Hindu ki post-event report ke mutabik, Railway Board Chairman Satish Kumar ne Udhna-Berhampur Amrit Bharat train no. (19021) ke Bobbili aur Parvatipuram stations par halt approve kiye; ye announcement Parvatipuram TDP MLA Bonela Vijaya Chandra ke jari release me aaya. Baby Nayana, Vijaya Chandra ke saath Delhi me Satish Kumar se mile the aur janta ki majboot maang tatha railway ko additional revenue ka tark dekar halt ki request ki thi; Chairman ne sambandhit adhikariyon ko halt sunischit karne ka nirdesh diya. CREDIT-CAPPED: sanyukt pratinidhimandal tha, release aur pramukh bhoomika Bonela Vijaya Chandra ki rahi; kendriya pariyojna (railway) hai lekin vyaktigat bhoomika dastavezi hai, isliye include kiya gaya. Date: prakashan 25 Sep 2025 (Thursday); meeting usi din hui batayi gayi hai.',
    period: '2024-2029',
  },
];

// kimidi-kala-venkata-rao — 0 works + 0 negatives
// Mined 2026-10-18. Fragment khud merge mat karo.
andhraWorks['kimidi-kala-venkata-rao'] = [];

// kondapalli-srinivas — 1 works + 0 negatives (researched 2026-10-18)
// Pehchan: Kondapalli Srinivas, TDP, Gajapathinagaram (Vizianagaram jila), 16th AP VS 2024-2029.
// 12 Jun 2024 se AP sarkar me Minister (MSME, SERP, NRI Empowerment and Relations) — mantri-roop ke
// rajya-stariya faisle/karyakram is mining se BAHAR rakhe gaye hain, sirf seat-level kaam liya gaya hai.
// Halafname me 1 criminal case (IPC 188) — Jun 2024+ me is par koi nyayik vikas whitelisted media me nahi mila.
// WHITELIST-CONVENTION: AP batch-1 ke anusar 'Indian Express' = theindianexpress.com; newindianexpress.com
// (NIE) whitelist me NAHI — isliye NIE-only stories reject-log me hain (retry-leads ke saath).
andhraWorks['kondapalli-srinivas'] = [
  {
    title: 'MLA ka dawa — Gajapathinagaram kshetra me sarkar banne ke baad Rs 3 crore ki lagat se 130 naye transformer lagaye gaye aur Rs 3 crore ke bijli ke khambe badle gaye',
    category: 'Bijli',
    badge: 'dawa',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/govt-committed-to-sc-st-welfare-minister-kondapalli-1950061',
    date: '2026-04-12',
    note: 'Deccan Chronicle ki report ke mutabik, Gajapathinagaram mandal ke Patha Baggam gaon me PM Surya Ghar Muft Bijli Yojana (SC/ST Solarization Utsav) karyakram me Kondapalli Srinivas ne kaha: \u2018After we came to power, 130 new transformers were installed at a cost of Rs 3 crore and electric poles replaced at a cost of Rs 3 crore.\u2019 Yeh KEVAL MLA ka dawa hai — report me iski swatantra pushti ya fund-source nahi diya gaya, isliye badge \u2018dawa\u2019 hai. Wahi bhashan me unhone Gajapathinagaram kshetra ke 8,535 eligible SC/ST beneficiaries me se 2,170 ke Surya Ghar scheme me chayan ki baat bhi kahi — wo yojna-vitran hai, is entry ka vishay nahi. TITHI-NOTE: DC page par prakashan-tithi nahi dikhi; search-result ka \u2018189 days ago\u2019 (search 18 Oct 2026 ko chala) 12 Apr 2026 par baithta hai jo Sunday hai, aur report me karyakram \u2018On Sunday\u2019 bataya gaya hai — isliye 2026-04-12 inferred hai, reasoning yahan disclose hai.',
    period: '2024-2029',
  },
];

// lokam-naga-madhavi — 1 works + 0 negatives
andhraWorks['lokam-naga-madhavi'] = [
  {
    title: 'Nellimarla municipality me paani/pipeline kaamon ke liye kul Rs 92.6 crore ki itemized swikritiyan: Rs 46 crore purani pipeline badalne ke liye, Rs 2.6 crore AMRUT ke tahat, Rs 24 crore Urban Challenge Fund se UGD ke liye aur Rs 20 crore VMRDA/HAM ke madhyam se — VMRDA review baithak me MA&UD mantri ki ghoshna, itemized aankde MLA ne diye',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/vijayawada/ap-allocates-rs-20000-crore-for-municipal-infrastructure/articleshow/133443834.cms',
    date: '2026-08-22',
    note: 'Date anumaanit: New Indian Express ne isi baithak ki reporting 23 Aug 2026 subah 2:47 baje (raat bhar ki filing) me ki aur ToI ne 24 Aug 2026 ko report kiya — baithak 22 Aug 2026 ko VMRDA conference hall, Visakhapatnam me hui maani gayi hai. Tathya: MA&UD mantri P Narayana ne media ko bataya ki state ki 123 municipalities me Rs 10,200 crore AMRUT aur Rs 4,200 crore Urban Challenge Fund (central assistance) ke tahat kaam chal raha hai; VMRDA kshetra ki municipalities ke liye Rs 269 crore UGD/drainage me se Nellimarla ko Rs 24 crore. Nellimarla MLA Lokam Naga Madhavi ne bataya: Rs 46 crore purani pipeline badalne ke liye sanctioned, Rs 2.6 crore AMRUT ke tahat, Rs 24 crore UCF aur Rs 20 crore VMRDA/HAM se Nellimarla ke liye. New Indian Express ne bhi isi baithak ki reporting ki hai (mantri ke saath MLA maujood thi). Credit capped: ye state-sarkar/VMRDA schemes hain, kendriya sahayata sahit; MLA ke apne fund (CDP) se sambandh ghoshit nahi. Stage ka sach: swikritiyan ghoshit hui hain; kaam shuru ya poore hone ki koi aage ki reporting nahi mili.',
    period: '2024-2029',
    stage: 'swikriti',
  },
];

// pusapati-aditi-vijayalakshmi — 1 works + 0 negatives (Vizianagaram, TDP; mined 2026-10-18).
// Pehchan: Vizianagaram seat, Telugu Desam Party, Winner 2024 (121,241 vote; margin 60,609).
// D/o Pusapati Ashok Gajapathi Raju (royal parivar) — sambandhiyon ke kaam in par nahi.
andhraWorks['pusapati-aditi-vijayalakshmi'] = [
  {
    title: 'Vizianagaram MLA Aditi Vijayalakshmi Gajapathi Raju ki maang par VMRDA ne Vizianagaram municipality ke vikas karyon ke liye Rs 16 crore ki swikriti di',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/vijayawada/vmrda-allocates-rs-28-crore-for-vizianagaram-infrastructure/articleshow/132542026.cms',
    date: '2026-07-21',
    note: 'TOI ki post-event report ke mutabik, VMRDA chairman MV Pranav Gopal ne Vizianagaram me praja darbar ke dauran kaha ki MLA ki maang par Vizianagaram municipality ke liye Rs 16 crore ke vikas karya swikrit hue hain. Breakdown (chairman ke bayan se): pichhle varsh Gandhi Park aur PSR Park ke vikas par lagbhag Rs 1 crore kharch; is vitt varsh me roads, drains aur culverts samet infrastructure karyon ke liye Rs 10 crore jaari; chal rahe karyon ke poore hone par Rs 5 crore aur jaari hoga. Credit capped: ye VMRDA chairman ki ghoshna hai — MLA ki maang ka dastaveji nateeja (swikriti) hai, lekin GO-number sahit swikriti ya poore kaam ka alag satyapan report me nahi hai. Fund: VMRDA ka apna fund; CDP/MLA-nidhi se jodne ka srot me koi ullekh nahi — ghoshit nahi. Inferred-date disclosure: page-text me prakashan tithi nahi aayi; search metadata ‘Last Updated: 89 days ago’ (2026-10-18 se ~21 Jul 2026) aur report me karyakram ‘on Tuesday’ — 21 Jul 2026 khud Tuesday hai, isliye ye tithi li gayi hai.',
    period: '2024-2029',
  },
];

// kolla-lalitha-kumari — 0 works + 0 negatives
// Kolla Lalitha Kumari, Srungavarapukota (Vizianagaram jila), TDP — 16th AP VS (2024-2029).
// Pehchan andhra.ts se pakki: seat Srungavarapukota, party TDP, winner 2024 (111,026 vote).
// Khoj 2026-10-18: whitelisted outlets (The Hindu, NIE, TOI, DC) me Jun 2024+ ke
// seat-level bhautik vikas kaam ki koi post-event report NAHI mili; stage-accurate
// negative (FIR/chargesheet/janch ya Jun 2024+ nyayik vikas) bhi koi NAHI mila.
andhraWorks['kolla-lalitha-kumari'] = [];


// ==== Parvathipuram Manyam (Batch 1) ====
// nimmaka-jaya-krishna — 1 works + 0 negatives
// QA-checked 2026-10-18. Pehchan pakki: Palakonda (ST), JanaSena Party, Winner 2024
// (src/data/andhra.ts: slug nimmaka-jaya-krishna; 75,208 vote, runner-up V. Kalavathi 61,917).
// Seat: Palakonda (ST), Parvathipuram Manyam jila; mandal: Palakonda, Seethampeta, Veeraghattam, Bhamini.
andhraWorks['nimmaka-jaya-krishna'] = [
  {
    title: 'Palakonda MLA Nimmaka Jayakrishna ki maang par Deputy CM Pawan Kalyan ne Vanduva gaon (Veeraghattam mandal) me inam bhumi par kheti karne wale 653 kisanon ko Annadata Sukhibhava yojna me lane ka adhikariyon ko nirdesh diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/ap-to-tackle-elephants-in-forest-areas-pawan-kalyan-1912167',
    date: '2025-10-24',
    note: 'Deccan Chronicle ki post-event report (published 24 Oct 2025; meeting "Thursday" ko, yani 23 Oct 2025) ke mutabik state wildlife board ki standing committee meeting me Palakonda MLA Nimmaka Jayakrishna ne Vanduva gaon (Veeraghattam mandal, Parvathipuram Manyam jila) ka mudda uthaya; Deputy CM Pawan Kalyan ne adhikariyon se kaha ki inam bhumi par kheti karne wale 653 kisanon ko Annadata Sukhibhava yojna ke dayre me laya jaye. Credit capped: ye MLA ki maang ka dastaveji nateeja (mantri/dy-CM ashwasan) hai — yojna me shamil karne ka amal ya vitran report me confirm nahi hua. Veeraghattam Palakonda AC ke 4 mandalon me se ek hai, isliye seat-level hai. Fund disclosure: is entry me MLA-nidhi (CDP) ka zikr nahi — ghoshit nahi.',
    period: '2024-2029',
  },
];

// thoyaka-jagadeeswari — 0 works + 0 negatives
// Mined 2026-10-18. Pehchan: Kurupam (ST), Parvathipuram Manyam, TDP, 16th AP VS 2024-2029.
// Result: whitelist sources me MLA ke vyaktigat lokarpan/shilanyas (bhautik sarkari sanrachna)
// ka koi post-event report NAHI mila; GO-backed swikriti ya itemized sanction list bhi nahi.
// Negatives bhi zero: koi FIR/chargesheet/janch ya Jun 2024+ ka nyayik vikas established
// media me MLA par NAHI mila. Profile khaali rakhi gayi hai — neeche REJECT-LOG dekho.
// NOTE: sarkari GO (G.O.MS.No. 95, GAD (Poll.A), dated 13-11-2024) se pakka hai ki
// "SMT. JAGADEESWARI THOYAKA, KURUPAM (ST)" ko AP Legislative Assembly ka Government
// Whip niyukt kiya gaya — ye pad ki niyukti hai, seat-level vikas kaam nahi, isliye
// entry nahi banayi gayi (reject-log me darj hai).
andhraWorks['thoyaka-jagadeeswari'] = [];

// bonela-vijaya-chandra — 1 works + 0 negatives
// Mined 2026-10-18. Pehchan: Parvathipuram (SC), TDP, Winner 2024 (83,905 vote; runner-up Alajangi Jogarao YSRCP 59,491; antar 24,414).
// Karyakaal: Jun 2024+ (16th AP VS, 2024-2029). Whitelisted sources (The Hindu) kholkar padhe gaye.
andhraWorks['bonela-vijaya-chandra'] = [
  {
    title: 'Parvathipuram me naye Anna Canteen ka udghatan kiya — CM N. Chandrababu Naidu ke janmdin par ayojit karyakram me',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/aps-rapid-development-is-possible-only-with-chandrababu-naidu-tdp-mla/article70884218.ece',
    date: '2026-04-20',
    note: 'The Hindu ki post-event report ke mutabik, Parvathipuram ke TDP MLA Bonela Vijaya Chandra ne CM N. Chandrababu Naidu ke janmdin (Monday) par ayojit karyakram me naye Anna Canteen ka udghatan kiya, aur usi dauraan raktdaan aur chikitsa shiviron sahit kai sevakar karyon me hissa liya. Anna Canteen rajya sarkar ki yojana hai — udghatan MLA ne vyaktigat bhoomika me kiya; fund-source ya lagat report me nirdisht nahi hai, isliye "ghoshit nahi". Tithi seedhi prakashan/report se mili hai (report me "Monday" aur prakashan 20 Apr 2026 — date check se 2026-04-20 Monday pakka hai), inferred nahi.',
    period: '2024-2029',
  },
];

// gummidi-sandhyarani — 2 works + 0 negatives
// Salur (ST), TDP — MLA record pakka (andhra.ts): 16th AP VS 2024-2029, ex-MLC (2015-21), Women & Child/Tribal Welfare mantri.
// NOTE: mantri-roop ke rajya-stariya faisle yahan NAHI hain — sirf Salur seat ke vikas kaam.
// Dono entries Deccan Chronicle ki post-event reports par; DC tag page ke mutabik
// "Vizag: Sandhya Rani pledges roads for tribal villages" 31 Mar 2025 7:37 PM IST ko prakashit hui.
andhraWorks['gummidi-sandhyarani'] = [
  {
    title: 'Saluru mandal me Rs 1.25 crore ki lagat se bani nayi sadak ka lokarpan kiya — durgam adivasi kshetron ko jodne ka vada',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/vizag-sandhya-rani-pledges-roads-for-tribal-villages-1870038',
    date: '2025-03-31',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Gummidi Sandhyarani ne Saluru mandal me Rs 1.25 crore ki lagat se bani nayi sadak ka lokarpan kiya aur kaha ki unke karyakaal me sabhi durgam adivasi gaanvon tak sadak pahunchegi. Inferred-date disclosure: DC tag page par report ki prakashan-tithi 31 Mar 2025 (7:37 PM IST) hai aur report karyakram ko "Monday" batati hai — 31 Mar 2025 vaastav me Monday hai (date -d se verify), isliye event-tithi 31 Mar 2025 li gayi hai. Credit disclosure: report me sadak ka fund-source ya nirman agency nirdisht nahi hai — MLA-nidhi se jodne ka dawa nahi hai, "ghoshit nahi".',
    period: '2024-2029',
  },
  {
    title: 'Saluru mandal ke liye Rs 30 crore ki teen sadak pariyojnaon ki itemized suchi — Kurukutti-Sampangipadu (14 km, Rs 17.20 crore), Kodana-Chinthamala (6 km, Rs 7.30 crore) aur teesri pariyojna (Rs 6 crore)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/vizag-sandhya-rani-pledges-roads-for-tribal-villages-1870038',
    date: '2025-03-31',
    note: 'Wahi DC report ke mutabik, Sandhyarani ne Saluru mandal me atirikt sadak pariyojnaon ke liye Rs 30 crore ki ghoshna ki; report inhe "sanctioned works" kehti hai — 14-km Kurukutti-Sampangipadu stretch Rs 17.20 crore, 6-km Kodana-Chinthamala sadak Rs 7.30 crore, aur ek teesri pariyojna Rs 6 crore. Credit/caveat disclosure: report me GO number, manzoori-tithi ya vibhag ka ullekh NAHI hai — ye mantri ki karyakram me ki gayi ghoshna ke roop me darj hai, isliye swikriti-dastavej (GO) wali entry nahi banai gayi; GO milne par is entry ko upgrade kiya ja sakta hai. Tithi: upar wali entry jaisi inferred-date reasoning. CM ne sabhi adivasi gaanvon me sadak ko manzoori di thi (doli-pratha khatm karne ke liye) — ye CM ka faisla hai, is entry ka vishay nahi.',
    period: '2024-2029',
  },
];


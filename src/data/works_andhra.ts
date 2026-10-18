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

// Andhra Pradesh — Batch 2: Alluri Sitharama Raju + Visakhapatnam + Anakapalli (4-6/26 jile).
// Mined 2026-10-18. Har MLA ka fragment: ~/workspace/aapkaneta_scratch/ap2_worker_<slug>_works.ts.
// QA-drop: koi entry nahi girayi; sundarapu ki ek entry `dawa` badge-capped. NIE = Indian Express group ka dakshin sanskaran (whitelist-confirmed).

// ==== Alluri Sitharama Raju (Batch 2) ====
// regam-matyalingam — 0 entries (QA-checked).
// ===== REJECT-LOG =====
// (1) Passport Seva Kendra inauguration, Araku — 22 Jan 2025 (ANI wire via The Print / devdiscourse / webindia123):
//     MEA ne Post Office Passport Seva Kendra ka lokarpan kiya; Matyalingam sirf karyakram me maujood the
//     ("attended the launch" / "graced the inauguration" — unki apni bhoomika nahi). REJECT: "dusre neta ke
//     karyakram me maujoodgi". Waise bhi The Print/devdiscourse/webindia123 whitelist par NAHI hain.
//     URLs dekhe gaye: https://theprint.in/world/mea-inaugurates-post-office-passport-seva-kendra-in-tribal-region-of-andhra-pradesh/2457756/?amp
//     aur https://www.devdiscourse.com/mobilearticle/3235215-new-passport-seva-kendra-boosts-services-in-araku-region
// (2) Election coverage — REJECT (works-mining se bahar): TOI/ADR (Jul 2024) vote-share analysis (36.71%, sabse kam);
//     The Hindu/India Today (4 Jun 2024) result coverage ("Amid NDA wave, YSRCP manages to win Paderu and Araku...");
//     oneindia/moneycontrol/News18 winners list; prsindia.org + Wikipedia profile pages.
// (3) "Tribals protest delayed road works" (The Hindu, 11 May 2026, Rolugunta mandal/Anakapalli; aur Deccan Chronicle,
//     Oct 2026, wahi ilaaka) — REJECT: wo Chodavaram AC (Kalidindi Suryana Naga Sanyasi Raju) ka seat-mamla hai,
//     Araku Valley (ST) ka NAHI — "seat ke bahar ka kaam NAHI".
// (4) The Hindu (Dec 2021) ITDA medical camp / road connectivity story — REJECT: karyakaal se pehle (2021), aur us
//     samay Araku MLA Chetti Palguna the, ye MLA nahi.
// (5) The Hindu (Aug 2022) World Tribal Day coverage — REJECT: karyakaal se pehle, Araku MLA tab Setti Phalguna the.
// (6) The Hans India (Oct 2026) — "Assembly Speaker vows to transform his constituency into industrial hub" (Araku coffee
//     factory, Narsipatnam ke Speaker Ayyanna Patrudu ka karyakram) — REJECT: dusre neta ka karyakram, is MLA ki bhoomika nahi.
// (7) NEGATIVES screening: established media me Jun 2024+ me Regam Matyalingam ka naam FIR-aaropi column me,
//     chargesheet, giraftari ya adalat-aadesh me kahin NAHI mila. Jo mila wo dusre logon ke mamle the:
//     - Bolla Brahma Naidu (purv YSRCP MLA) land-grab giraftari, Jun 2026 (PTI/newsdrum) — alag neta.
//     - Biyyapu Madhusudhan Reddy (purv Srikalahasti MLA) case, Dec 2024 (ap7am, whitelist-bahar) — alag neta.
//     - Arava Sridhar (JSP, Railway Koduru) harassment case (Asianet Newsable, whitelist-bahar) — alag neta.
//     - Srisailam forest-officials attack (The Hindu, Aug 2025) — aaropi MLA ka naam report me nahi diya gaya.
//     Halafname ka 1 pending mamla akele negative NAHI hota (rule) — aur uska Jun 2024+ me koi nyayik vikas
//     established media me nahi mila. Isliye 0 negatives.
// (8) Whitelist outlets (The Hindu, New Indian Express, Deccan Chronicle, The Hans India, TOI, HT, NDTV, India Today,
//     Indian Express) par "Matyalingam"/"Regam Matyalingam" khoj se Jun 2024+ ke DORAN koi shilanyas/lokarpan,
//     Vidhansabha-sawaal ka dastaveji nateeja, itemized sanction ya GO-backed swikriti NAHI mili. MLA vipaksh (YSRCP) me
//     hai aur seat ati-durgam adivasi kshetra hai — iska ullekh contextual hai, excuse nahi.
// Retry leads: koi nahi (koi khul-na-saka whitelist page nahi mila jo relevant ho).

// regam-matyalingam — 0 entries
// YSRCP, Araku Valley (ST); Jun 2024+ me whitelist-verified works ya negatives nahi mile.
andhraWorks['regam-matyalingam'] = [];

// matsyarasa-visweswara-raju — 0 entries (QA-checked).
// ==== REJECT-LOG ====
// R1. REJECT (sirf maujoodgi): The Hindu (28 Aug 2024, premium/verified via open) — "Alluri Sitharama Raju
//     district officials plan to develop tourism amenities at Dallapalli": District Collector A.S. Dinesh Kumar
//     ne "inaugurated the renovated school building at Kotlaguruvu in Paderu mandal ALONG WITH MLA Visweswara
//     Raju". Lokarpan Collector ka tha; MLA ki bhoomika sirf maujoodgi ("along with") — dusre adhikari ke
//     karyakram me maujoodgi, isliye entry NAHI.
//     URL: https://www.thehindu.com/news/cities/Visakhapatnam/alluri-sitharama-raju-district-officials-plan-to-develop-tourism-amenities-at-dallapalli/article68577741.ece/amp/
// R2. REJECT (nira politics/agitation, koi bhautik kaam nahi): The Hindu (20 Sep 2025) — YSRCP ne Paderu me
//     medical colleges ke PPP mode (privatisation) ke khilaf rally ki; MLA bheed me shamil tha. Koi lokarpan/
//     sanction/maang ka nateeja nahi — protest hai.
//     URL: https://www.thehindu.com/news/cities/Visakhapatnam/ysrcp-stages-protest-against-governments-move-to-privatise-medical-colleges/article70071354.ece
// R3. REJECT (sirf maang + dusre sangathan ka karyakram): Deccan Chronicle (Jul 2026, Adivasi rally) — GO 3
//     bahali aur 1/70 Act ki maang wali Adivasi Girijana Sangham ki rally me MLA ne sambodhan kiya. Sirf
//     maang/maang-par maujoodgi, koi dastaveji nateeja nahi.
//     URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/thousands-of-adivasis-rally-for-go-3-170-act-1971790
// R4. REJECT (whitelist-bahar + vyaktigat act, koi kaam nahi): India TV (9 Sep 2024) — Raigudda Vagu me baadh me
//     phase ladke ko MLA ne bachaya. India TV whitelist me nahi; aur ye bahaduri ka vyaktigat act hai, vikas-
//     karya nahi.
// R5. REJECT (generic, naam nahi): The Hindu (4 Jul 2025) — PM JANMAN ke tahat ITDA-Paderu me 35 multipurpose
//     buildings (Rs 21 crore); inauguration "District Collector, Joint Collector, and local public
//     representatives" dwara hoga — MLA ka naam nahi, vyaktigat bhoomika dastavej nahi.
//     URL: https://www.thehindu.com/news/cities/Visakhapatnam/35-multi-purpose-government-buildings-to-come-up-in-itda-paderu/article69773145.ece
// R6. REJECT (whitelist-bahar + political statement): Bharathorizon — Modakondamma festival ki tareekh badalne
//     ka MLA ne virodh kiya. Not whitelisted; statement hai, karya nahi.
// Negatives: halafname me 0 mamle; whitelist media me Jun 2024+ me MLA ke khilaf FIR/chargesheet/janch ya
// nyayik vikas ka koi established record nahi — isliye 0 negatives.
// Retry leads: (a) Assembly-session coverage me "Paderu MLA" ke sawaal — Feb 2026 aur Sep 2026 sessions ki
// The Hindu/Hans India reporting par dobara check; (b) PM JANMAN buildings ke lokarpan baad ki post-event
// reports jahan MLA ka naam ho sakta hai.
andhraWorks['matsyarasa-visweswara-raju'] = [];

// miriyala-sirisha-devi — 0 entries (QA-checked).

andhraWorks['miriyala-sirisha-devi'] = [];

// ==== Visakhapatnam (Batch 2) ====
// ganta-srinivasa-rao — 3 entries (QA-checked).

andhraWorks['ganta-srinivasa-rao'] = [
  {
    title: 'Anandapuram junction (Bhimili) ke vistar karyon ka shilanyas kiya — Rs 81 lakh ki lagat se traffic bottleneck door karne ki pariyojna',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Visakhapatnam/foundation-stone-laid-for-expansion-of-anandapuram-junction/article71579756.ece',
    date: '2026-10-13',
    note: 'The Hindu ki post-event report ke mutabik, Bheemunipatnam MLA Ganta Srinivasa Rao ne Anandapuram junction ke vistar karyon ka shilanyas kiya; pariyojna ka budget Rs 81 lakh bataya gaya hai. Report ke anusar junction badhti gaadiyon ki aavajahi aur Bhogapuram International Airport se aane wale traffic ke karan bada traffic bottleneck ban chuka tha, isliye vistar zaroori tha. MLA ne thekedaar aur sambandhit adhikariyon ko nirdharit samay-seema me kaam poora karne ka nirdesh diya. Karyakram me NHAI ke Deputy Manager Gopikrishna aur alliance neta maujood the. SEAT-CHECK: Anandapuram mandal Bhimili/Bheemunipatnam Assembly constituency ka hissa hai (The Hindu ki 64-panchayat merger report me Anandapuram mandal ko isi constituency me darj kiya gaya hai). Tithi: report 13 Oct 2026 (10:23 pm IST) ko prakashit hui aur karyakram "Tuesday" ka bataya gaya — date -d se 2026-10-13 vaastav me Tuesday hai, isliye event-tithi 2026-10-13 li gayi hai, inferred nahi. Fund: report me fund-source nirdisht nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
  {
    title: 'Marikavalasa me Kommadi se Doratota junction tak central median karyon ka shilanyas kiya — anumaanit lagat Rs 10.43 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/visakhapatnam/visakhapatnam-alliance-will-repeat-2024-election-victory-in-local-body-polls-1130749',
    date: '2026-10-09',
    note: 'The Hans India ki post-event report ke mutabik, Bheemunipatnam MLA Ganta Srinivasa Rao ne Marikavalasa me Kommadi se Doratota junction tak central median karyon ka shilanyas kiya; anumaanit lagat Rs 10.43 crore batayi gayi hai. Karyakram me Zonal Commissioner V. Ayyappa Naidu, DE Mani Kumar, APD Sriram aur alliance dalon ke neta maujood the. SEAT-CHECK: Marikavalasa/Kommadi Madhurawada zone (Visakhapatnam uttar) me hai; report is daure ko "development initiatives in the constituency" ke roop me darj karti hai — seat-level hai. Inferred-date disclosure: page par prakashan-tithi 2026-10-10 (00:26 IST) hai aur karyakram "Friday" ka bataya gaya hai — date -d se 2026-10-09 vaastav me Friday hai, isliye event-tithi 2026-10-09 li gayi hai. Fund: report me fund-source nirdisht nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
  {
    title: 'MLA ka dawa — Bhimili constituency me Rs 41 crore se zyada ke infrastructure projects par kharch ho chuka hai, unme Madhurawada zone me 39 km par 93 sadak karya',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/visakhapatnam/visakhapatnam-alliance-will-repeat-2024-election-victory-in-local-body-polls-1130749',
    date: '2026-10-09',
    note: 'MLA ka dawa — The Hans India ki upar wali report ke mutabik, Kommadi–Doratota shilanyas karyakram me bolte hue MLA Ganta Srinivasa Rao ne dawa kiya ki constituency me vibhinn infrastructure projects par Rs 41 crore se zyada kharch ho chuka hai, jinme Madhurawada zone me kul 39 km par 93 sadak karya shamil hain. CREDIT CAPPED: ye KEVAL MLA ka bhashan me diya gaya dawa hai — report me itemized suchi, GO number ya swatantra satyapan nahi diya gaya; upar wali do entries ke shilanyas is dawe ke praman nahi hain. Date: wahi karyakram (9 Oct 2026, Friday) — reasoning upar wali entry jaisi. Fund: dawe me fund-source nirdisht nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
];

// velagapudi-ramakrishna-babu — 1 entries (QA-checked).

andhraWorks['velagapudi-ramakrishna-babu'] = [
  {
    title: 'Rama Naidu Studios ko di gayi 34.44 acre zameen me se 15.17 acre par residential layout ki koshish par rajya sarkar ne company ko show-cause notice jari kiya — MLA ki Supreme Court SLP ke baad',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Visakhapatnam/ap-govt-issues-show-cause-notice-over-use-of-land-sanctioned-for-rama-naidu-studio-in-vizag/article69408786.ece',
    date: '2025-04-03',
    note: 'The Hindu (3 Apr 2025) ke mutabik, Andhra Pradesh sarkar ne M/s Suresh Production Private Limited ko show-cause notice jari kiya — company Visakhapatnam me Rama Naidu Studios ke liye allotted 34.44 acre me se 15.17 acre par residential layout ki permission lene ki koshish kar rahi thi. East MLA Velagapudi Ramakrishna Babu ne is land-use change ka virodh karte hue Supreme Court me Special Leave Petition (SLP) file ki thi; apex court ne 9 Feb 2024 ke interim order me kaha ki zameen sirf usi prayojan ke liye istemal ho jiske liye di gayi thi. Special Chief Secretary (Revenue) R.P. Sisodia ne 3 Apr 2025 ko orders jari karke Collector ko 15.17 acre ke liye show-cause notice dene aur company ko apna paksh rakhne ka uchit avsar dene ka nirdesh diya; VMRDA Commissioner aur GVMC Commissioner ko bhi company ke land-use change ke avedano par vichar na karne ka nirdesh mila. CREDIT CAPPED: ye sarkar ki legal/administrative karwai hai, bhautik sarkari sanrachna ka shilanyas/lokarpan nahi; SC interim order (Feb 2024) Jun 2024 ke karyakaal se pehle ka hai (Ramakrishna Babu tab bhi MLA the — unhone SLP file ki thi), karyakaal ke andar ki karwai sirf sarkar ka show-cause notice aur VMRDA/GVMC ko nirdesh hai. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
];

// vamsi-krishna-srinivas — 3 entries (QA-checked).

andhraWorks['vamsi-krishna-srinivas'] = [
  {
    title: 'Visakhapatnam South ke 33rd ward me GVMC-nidhi se lagbhag Rs 1.5 crore ke sadak aur stormwater drain karyon ka shilanyas — Mayor, MLA aur corporator ne sanyukt roop se rakha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/vijayawada/gvmc-lays-foundation-for-developmental-works-worth-rs-1-5-crore/articleshow/123509212.cms',
    date: '2025-08-25',
    note: 'TOI ki post-event report ke mutabik, Vizag Mayor Peela Srinivasa Rao ne Vizag South MLA Vamsikrishna Srinivas Yadav aur corporator B Vasantha Lakshmi ke saath 33rd ward (Visakhapatnam South seat ka hissa) me GVMC-funded lagbhag Rs 1.5 crore ke vikas karyon ka shilanyas kiya. Itemized: Leelamahal theatre Junction se Neelamma Vepa Chettu junction aur Indira Gandhi Junction tak sadak (lagbhag Rs 46.66 lakh); Allipuram Junction se Captain Rama Rao Junction tak stormwater drain (lagbhag Rs 48.3 lakh); Leelamahal Junction se South Jail Road tak stormwater drain (lagbhag Rs 49.5 lakh). CREDIT CAPPED: ye sanyukt shilanyas tha (Mayor + MLA + corporator) aur poori nidhi GVMC ki hai — MLA ka vyaktigat/akele ka kaam nahi, credit isi sanyukt shilanyas tak seemit. Fund: GVMC; CDP/MLA-nidhi ka ullekh nahi — ‘ghoshit nahi’. Inferred-date disclosure: report me karyakram ko ‘on Monday’ bataya gaya hai; search-crawl metadata (~418 din pehle, Oct 2026) prakashan ko Aug 2025 me rakhti hai, isliye Somwar 25 Aug 2025 li gayi hai.',
    period: '2024-2029',
  },
  {
    title: 'Visakhapatnam South constituency me SL Canal modernisation ke liye Rs 18 crore ki prashasanik swikriti — MLA ki nirantar pairavi ke baad VPA property-tax nidhi se kaam hoga',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/visakhapatnam/rs-18-cr-approved-for-sl-canal-modernisation-in-south-constituency-1114800',
    date: '2026-08-28',
    note: 'The Hans India ki post-event report ke mutabik, Visakhapatnam South constituency me SL Canal ke lambe samay se pending modernisation ke liye Rs 18 crore ki prashasanik swikriti mili; south constituency MLA Ch Vamsi Krishna Srinivas ne ise ‘ambitious project’ batakar VPA (Visakhapatnam Port Authority) aur GVMC adhikariyon ke saath nirantar pairavi ki, aur report ke mutabik unhi ke nirantar prayason se ye swikriti mili. Kaam: GVMC ke 39th ward me Railway Yard Bridge se Ferry Road Mary Mata junction tak canal ke bottom ka concreting aur side walls ka nirman; GVMC Commissioner ko implementation ke nirdesh. Fund-source report me disclose hai: VPA dwara GVMC ko deya property-tax nidhi ka 51% hissa, mutually agreed works ke tahat — rajya sarkar/GVMC ki nidhi, CDP/MLA-nidhi nahi. Inferred-date disclosure: report me event ki exact tareekh nahi, prakashan-tithi 28 Aug 2026 li gayi hai. CREDIT CAPPED: swikriti rajya sarkar ki hai — credit MLA ki dastaveji pairavi tak seemit.',
    period: '2024-2029',
  },
  {
    title: 'Visakhapatnam South ke Velampeta-Lakshmi Nagar me Andhra Pradesh ki pehli in-situ slum redevelopment pariyojna (Rs 28.44 crore, 177 parivar) ka shilanyas — MLA ne karyakram ki adhyakshta ki aur mantri tak mudda pahunchane ka dawa kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/visakhapatnam/aps-first-ever-slum-redevelopment-project-launched-at-velampeta-1120069',
    date: '2026-09-09',
    note: 'The Hans India ki post-event report ke mutabik, Municipal Administration Minister Ponguru Narayana ne Velampeta ke Lakshmi Nagar (GVMC south zone, Visakhapatnam South seat) me Rs 28.44 crore ki in-situ slum redevelopment pariyojna (2,691 sq yd par 12 manjila complex, 177 units; 1st–11th floor par 15-15, 12th par 12 units) ka shilanyas kiya — agency ko 9 mahine me poora karke June 2027 tak makaan saunpne ka nirdesh; construction ke dauraan Rs 3,000/month (kul Rs 31.86 lakh) rental assistance. South constituency MLA Ch Vamsi Krishna Srinivas ne karyakram ki adhyakshta ki aur kaha ki jab niwasiyon ki chintayein sarkar ke dhyan me layi gayi to Minister Narayana ne sakaratmak jawab diya aur pariyojna ko amli jama pehnane me vishesh pahal ki. Fund: prati unit Rs 16.07 lakh — PMAY se Rs 1.50 lakh, AP sarkar se Rs 1 lakh, beneficiary contribution Rs 3.50 lakh, shesh Rs 10.07 lakh viability gap funding (TDR) se. CREDIT CAPPED: pariyojna rajya sarkar/GVMC ki hai aur shilanyas mantri ne rakha — MLA ka role adhyakshta aur mudda sarkar tak pahunchane ka dastaveji dawa tak seemit; credit isi tak seemit. Inferred-date disclosure: report 10 Sep 2026 (Thursday) ko prakashit aur karyakram ‘on Wednesday’ bataya gaya — isliye 9 Sep 2026 li gayi hai.',
    period: '2024-2029',
  },
];

// penmetsa-vishnu-kumar-raju — 3 entries (QA-checked).

andhraWorks['penmetsa-vishnu-kumar-raju'] = [
  {
    title: 'Madhavadhara (Ward 51) me park ke vikas ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Visakhapatnam/public-representatives-in-visakhapatnam-plunge-into-work-as-honeymoon-period-ends/article68363741.ece',
    date: '2024-07-03',
    note: 'The Hindu ki post-event report ke mutabik, North Constituency MLA P. Vishnu Kumar Raju ne Madhavadhara me Ward 51 ke park ke vikas ka shilanyas kiya; uske baad unhone chaay ki dukaan par sthaniya logon se muddon par baatcheet bhi ki. Fund-source report me nirdisht nahi — ghoshit nahi. Date reasoning: report 3 Jul 2024 (Budhwar) ko prakashit hui aur karyakram ko "Wednesday" bataya gaya hai, isliye 2024-07-03 li gayi hai.',
    period: '2024-2029',
  },
  {
    title: 'Vidhansabha me Visakhapatnam North MLA ke sawaal par Swasthya Mantri ne King George Hospital me 237 padon ke rikt hone aur Rs 600 crore ki buniyadi-dhancha sudhaar yojna ke karyanvayan ki jankari di',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/there-are-237-vacancies-at-kgh-in-visakhapatnam-says-health-minister-in-andhra-pradesh-assembly/article68442592.ece',
    date: '2024-07-24',
    note: 'The Hindu (24 Jul 2024) ke mutabik, Vidhansabha me Visakhapatnam North MLA P. Vishnu Kumar Raju (BJP) ke sawaal ke jawab me Swasthya Mantri Satya Kumar Yadav ne kaha: King George Hospital (Visakhapatnam) me paramedics sahit 237 pad rikt hain; manjoor bistar 1,562 hain (1998 me 1,057 + baad me 505 super-specialty), karyatmak bistar lagbhag 2,000 aur rozana ausatan 1,464 inpatient; Rs 600 crore ke buniyadi-dhancha sudhaar plan ka karyanvayan chal raha hai (gynecology aur paediatric wards ko paas rakhna shamil). CREDIT CAPPED: ye mantri ka sadan me jawab hai — MLA ka vyaktigat lokarpan/shilanyas nahi; report me KGH ke liye MLA-nidhi se sanction ka zikr nahi — ghoshit nahi.',
    period: '2024-2029',
  },
  {
    title: 'Mayor ke saath North MLA ne Rs 30.9 crore ke nagariya vikas karyon ka shilanyas kiya — lagbhag Rs 30 crore ki Seethammadhara Giri Pradarshana road, VRCC SW drains, culvert slabs, footpath tiles aur bitumen roads',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/vijayawada/giri-pradakshina-road-works-launched-in-vizag/articleshow/128391346.cms',
    date: '2026-02-15',
    note: 'TOI ki post-event report ke mutabik, Mayor Peela Srinivasa Rao ne Visakhapatnam North MLA P Vishnukumar Raju ke saath Rs 30.9 crore ke vikas karyon ka shilanyas kiya; Mayor ne kaha ki North MLA apne zone ke vikas ke liye lagatar prayas karte rahe hain. Karyon me: lagbhag Rs 30 crore ki Seethammadhara Giri Pradarshana road ka vikas; Marriott Hotel junction se NGGO Colony, Narasimhanagar junction, ASR Nagar aur aas-paas ke ilakon me VRCC SW drains, culvert slabs, footpath tiles aur bitumen roads ka nirman. Fund: GVMC/rajya-budget allocations (Mayor ke anusar 2026-27 FY budget me Visakhapatnam ke liye vishesh aavantan; 530+ badi pariyojnaon me metro rail ke liye Rs 15 crore shamil) — MLA-nidhi ka sambandh ghoshit nahi; credit sanyukt shilanyas tak seemit. Inferred-date disclosure: page par prakashan-tithi pradarshit nahi thi; search metadata me article lagbhag 245 din purana tha aur report me karyakram ko "Sunday" bataya gaya hai — 2026-10-18 se 245 din peeche 2026-02-15 (Sunday) aata hai, isliye ye tareekh li gayi hai.',
    period: '2024-2029',
  },
];

// p-g-v-r-naidu-ganababu — 1 entries (QA-checked).

andhraWorks['p-g-v-r-naidu-ganababu'] = [
  {
    title: 'Visakhapatnam West MLA P.G.V.R. Naidu (Ganababu) ne sarkari whip ke roop me MP M. Sribharat ke saath seat ke alag-alag wards me kul Rs 2.37 crore ke karyon ka sanyukt lokarpan kiya: Ward 57 ke Siddharthanagar me Rs 8 lakh MPLADS se jirnoddhar anganwadi bhawan, Krantinagar ke Double Tank area me Rs 95 lakh ka GVMC general fund se naya community bhawan, Maridimamba Kalyana Mandapam ke paas Rs 48.60 lakh ka G+1 community bhawan, Indiranagar me Rs 43.60 lakh ka community bhawan aur Burma Colony me Rs 42 lakh ki pehli manzil',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/mp-inaugurates-development-works-worth-237-crore-in-visakhapatnam-west-constituency/article71551023.ece',
    date: '2026-10-06',
    note: 'The Hindu (6 Oct 2026) ki post-event report ke mutabik, Visakhapatnam MP M. Sribharat ne Government Whip aur Visakhapatnam West MLA P.G.V.R. Naidu (Ganababu) ke SAATH milkar seat ke alag-alag wards me Rs 2.37 crore ke vikas karyon ka lokarpan kiya. Itemized suchi: Siddharthanagar (Ward 57) me Rs 8 lakh se anganwadi bhawan ka jirnoddhar aur aadhunikikaran (renovation, toilets, staff room) — ye hissa MPLADS funds se; Krantinagar ke Double Tank area me GVMC general funds se Rs 95 lakh ka naya community building; Maridimamba Kalyana Mandapam ke paas Rs 48.60 lakh ka G+1 community building; Indiranagar me Rs 43.60 lakh ka community building; Burma Colony me GVMC funds se Rs 42 lakh ki community building ki pehli manzil. (8+95+48.60+43.60+42 = Rs 237.20 lakh = headline ka Rs 2.37 crore, milan.) CREDIT CAPPED: ye MP ke saath SANYUKT lokarpan hai — MLA ka vyaktigat lokarpan nahi; Rs 8 lakh wala hissa MPLADS (MP nidhi) ka hai, MLA ka nahi; baaki Rs 2.29 crore GVMC general funds ka hai. Fund: CDP/MLA-nidhi se jodne ka srot me koi ullekh nahi — ghoshit nahi. MLA ne avsar par kaha ki seat ke har ward me buniyadi dhancha aur samudayik suvidhaon ko prathmikta di ja rahi hai. Karyakram me sthaniya janspratinidhi, GVMC adhikari, alliance neta/karyakarta aur badi sankhya me nivasi maujood the.',
    period: '2024-2029',
  },
];

// palla-srinivas-rao — 1 entries (QA-checked).

andhraWorks['palla-srinivas-rao'] = [
  {
    title: 'Aganampudi sarkari aspatal ke paas Trupti Canteen ka lokarpan — GVMC aur MEPMA ke sahyog se sthapit, mahila self-help group ki sadasyon dwara sanchalit, GVMC seema ke andar doosri Trupti Canteen',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/mla-opens-trupti-canteen-in-gajuwaka-1993351',
    date: '2026-10-05',
    note: 'Deccan Chronicle (5 Oct 2026) ki post-event report ke mutabik, TDP state president aur Gajuwaka MLA Palla Srinivasa Rao ne Aganampudi sarkari aspatal ke paas ek Trupti Canteen ka vyaktigat lokarpan kiya. Canteen GVMC aur MEPMA (Mission for Elimination of Poverty in Municipal Areas) ke sahyog se sthapit hui hai aur mahila self-help group ki sadasyon dwara chalai ja rahi hai. MLA ke mutabik ye GVMC seema ke andar doosri Trupti Canteen hai — pehli RK Beach par mahilaon dwara chalai ja rahi hai. MLA ne kaha ki ye canteens mahilaon ko tikau rojgar aur aay dengi aur janata ko quality wala sasta bhojan uplabdh karayengi. Fund: GVMC + MEPMA ka sahyog report me disclosed hai; canteen ki lagat report me nahi di gayi. Inferred-date disclosure: report me karyakram ko "Monday" bataya gaya hai; prakashan 5 Oct 2026 ko hua aur 5 Oct 2026 (Monday) tha, isliye ye tareekh li gayi hai.',
    period: '2024-2029',
  },
];

// ==== Anakapalli (Batch 2) ====
// kalidindi-suryana-naga-sanyasi-raju — 2 entries (QA-checked).
// ==== REJECT-LOG ====
// 1. Deccan Chronicle, 'Tribal Villagers Seek Resumption Of Stalled Road Works In Anakapalli Agency'
//    (2026-10-10, khola-pada) — Arla panchayat/Rolugunta ke Losingi gaonon me Adavi Thalli Bata ki ruki
//    sadkon par protest; MLA ne apne 'Four Visits in One Month' karyakram me ashwasan diya tha, lekin
//    report ke mutabik koi kaam nahi hua. SIRF ASHWASAN — koi lokarpan/shilanyas/swikriti nahi → REJECT.
//    https://www.deccanchronicle.com/southern-states/andhra-pradesh/tribal-villagers-seek-resumption-of-stalled-road-works-in-anakapalli-agency-1994753
// 2. Deccan Chronicle, 'Anakapalle Villagers Stage Cook-Out Protest Over Pending Pattas'
//    (2026-10-12, khola-pada) — Ravikamatam mandal ke Komiri gaon me 350 adivasi-Dalit parivaron ka
//    patton ki deri par protest; Chodavaram MLA ke October 2025 ke ashwasan ka paalan nahi hua (report ke
//    mutabik). Ashwasan-bhang ki aalochna hai — FIR/chargesheet/janch/nyayik vikas NAHI → negative NAHI,
//    kaam bhi NAHI → REJECT.
//    https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/anakapalle-villagers-stage-cook-out-protest-over-pending-pattas-1995232
// 3. The Hindu, 'Tribals take out horseback rally, seek road to their hamlets' (23/24 Jan 2026) —
//    snippet me isi Palle Panduga road-launch (2 Dec 2024) ka ullekh tha, lekin page browser.open par
//    HTTP 403 diya → KHOLA NAHI JA SAKA → RETRY LEAD (tareekh ki aur pakki pushti ke liye; entry me
//    cite NAHI kiya gaya). URLs: .../article70541983.ece, .../tp-andhrapradesh/tribals-take-out-horseback-rally-seek-road-to-their-hamlets/article70544777.ece
// 4. TOI, 'Chodavaram Police: Case Registered Against MP Candidate, 5 Others' (Apr 2024) — Chodavaram
//    me tiles/marble showroom par DRI adhikariyon ki janch me badha ke aarop me tatkalin 'former MLA'
//    KSN Raju (chunav se pehle) aur BJP MP ummidvar C.M. Ramesh samet 6 par FIR
//    (IPC 143, 506, 342, 353, 201, 188 r/w 149). APR 2024 KA FIR — karyakaal (Jun 2024+) se PEHLE;
//    Jun 2024+ me koi nyayik vikas (chargesheet/sunvai/faisla) established media me nahi mila.
//    Rules: 'FIR aaropi column me naam NAHI = negative NAHI' nahi lagta (naam hai), lekin bina
//    Jun 2024+ vikas ke pre-term FIR negative nahi banta; halafname ke pending mamle akele bhi nahi.
//    → NEGATIVE REJECT. (Halafname ka 1 mamla sambhavatah yahi hai.)
//    https://timesofindia.indiatimes.com/city/visakhapatnam/case-registered-against-mp-candidate-5-others/articleshow/109077579.cms
// 5. casemine.com — 'Kaladindi Sanyasi Raju v. State of A.P' (Crime 151/2017, Bheemunipatnam) — 2017 ka
//    purana bail-mamla, non-whitelist source, koi Jun 2024+ vikas nahi → REJECT.
// 6. General searches (The Hindu, New Indian Express, HT, NDTV, India Today, TOI, Hans India) me is MLA
//    ke kisi aur vyaktigat lokarpan/shilanyas/swikriti ki post-event report nahi mili.
andhraWorks['kalidindi-suryana-naga-sanyasi-raju'] = [
  {
    title: 'Palle Panduga utsav ke dauran Rolugunta mandal me Arla se Pitri Gadda tak Rs 4.10 crore ki BT sadak ka shilanyas — MGNREGA se aavantan, prarambhik kaam 2024 me shuru',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/cyclone-washes-away-rs-1-cr-road-in-anakapalle-villagers-protest-half-naked-1917506',
    date: '2024-12-01',
    note: 'Deccan Chronicle ki post-event report (16 Nov 2025) ke mutabik, Arla se Pitri Gadda tak ki BT sadak MGNREGA ke tahat swikrit thi aur ise Rs 4.10 crore ka aavantan mila tha; Legislator K.S.N. Raju (pehchan: Chodavaram, TDP, Winner 2024) ne Palle Panduga utsav ke dauran iska shilanyas kiya, aur 2024 me sadak-formation aur stone-rolling jaise prarambhik kaam shuru hue. STHITI-DISCLOSURE (imaandaari ke liye): report ke mutabik pul jaise pramukh structures kabhi bane hi nahi; Cyclone Montha (Nov 2025) me sadak poori tarah dhah gayi aur Pitri Gadda, Neelu Banda, Jajula Banda, Pedagoruvu ke PVTG gaon kat gaye; NIC portal se Rs 50 lakh/prati-kist ki payment-cap ke baad thekedaar bina poore bhugtan ke kaam chhodkar machinery le gaya. Arla panchayat Rolugunta mandal me hai jo Chodavaram constituency ka hissa hai. Inferred-date disclosure: report me karyakram ki exact tareekh nahi; December 2024 me swikriti aur Palle Panduga utsav me shilanyas bataya gaya hai, isliye 2024-12-01 li gayi hai. Fund: Rs 4.10 crore MGNREGA aavantan report me spasht; CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'December 2024 me Chodavaram MLA K.S.N. Raju ne teen adivasi sadkon — Arla-Pithri Gadda (7km), Y.B. Patnam-Peddagaru via Lusingi (3km), Z. Jogampeta-Neredu Banda (3km) — ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/anakapalli-adivasi-ride-horses-to-protest-lack-of-road-connectivity-1932269',
    date: '2024-12-01',
    note: 'Deccan Chronicle ki post-event report (Jan 2026) ke mutabik, Palle Panduga karyakram ke tahat December 2024 me swikrit sadkon me 7km ka Arla-Pithri Gadda stretch, Y.B. Patnam se Peddagaru tak Lusingi hote hue 3km stretch, aur Z. Jogampeta se Neredu Banda tak 3km stretch shamil the; Chodavaram MLA K.S.N. Raju ne in sadkon ka lokarpan kiya. STHITI-DISCLOSURE: report ke mutabik barish me nayi bani sadken kai jagah beh gayin aur bade gaddhe pad gaye, isiliye adivasiyon ne horse-rally protest kiya. Madugula aur Chodavaram assembly constituencies ke PVTG gaon (Pashuvulubanda, Jeelugulova aadi, Ravikamatham mandal sahit) sadak se katte rahe. Arla wale stretch ka Rs 4.10 crore MGNREGA aavantan doosri DC report se spasht hai (upar ki entry); in do 3km stretches ke liye alag aavantan report me nirdisht nahi — ‘ghoshit nahi’. Inferred-date disclosure: report me karyakram ki exact tareekh nahi; ‘December 2024 me swikrit, MLA ne lokarpan kiya’ bataya gaya hai, isliye 2024-12-01 li gayi hai.',
    period: '2024-2029',
  }
];

// bandaru-satyanarayana-murthy — 0 entries (QA-checked).

andhraWorks['bandaru-satyanarayana-murthy'] = [];

// konathala-ramakrishna — 0 entries (QA-checked).

andhraWorks['konathala-ramakrishna'] = [];

// sundarapu-vijay-kumar — 1 entries (QA-checked).

andhraWorks['sundarapu-vijay-kumar'] = [
  {
    title: 'MLA ka dawa — Yelamanchili me Rs 10-15 crore ke buniyadi-dhanche ke karya pragati par hain aur peripheral colonies ki suvidhaon ke liye Rs 7 crore ka allocation hua hai',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/vijayawada/ap-allocates-rs-20000-crore-for-municipal-infrastructure/articleshow/133443834.cms',
    date: '2026-08-23',
    note: 'TOI (post-event report; crawl-relative "56 days ago" se tithi ~Aug 2026 anumanit, isi event ki NIE report 23 Aug 2026 ki hai — inferred date) ke mutabik, Visakhapatnam me VMRDA office par MA&UD mantri P. Narayana ke review-meeting ke baad Yelamanchili MLA Sundarapu Vijay Kumar ne media se kaha: "infrastructure works worth Rs 10-15 crore are already underway in the constituency, while Rs 7 crore has been allocated for facilities in peripheral colonies." Ye poornatah MLA ka apna dawa hai — report me in karyon ki itemized suchi, fund-source ya purnata-tithi nahi hai; independent satyapan nahi mila. Prishthbhoomi (credit MLA ka nahi): mantri ne isi baithak me 123 municipalities ke liye Rs 10,200 crore safe-drinking-water, Rs 4,200 crore UGD (Urban Challenge Fund) aur Rs 5,500 crore municipal road kaam ghoshit kiye; VMRDA kshetra me Narsipatnam (Rs 27 crore), Nellimarla (Rs 24 crore), Yelamanchili (Rs 24 crore) aur Vizianagaram (Rs 194 crore) ke liye UGD/drainage allocation. Fund: report me CDP/MLA-nidhi ka zikr nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
];

// panchakarla-ramesh-babu — 4 entries (QA-checked).
// ==== REJECT-LOG ====
// R1. Deccan Chronicle (26 Jul 2025): 'GVMC Allocates Rs 1.32 Crore For Development Works In Anakapalle' —
//     Salapuvani Palem, Ward 84, Anakapalle Zone — Anakapalle constituency me hai, Pendurthi me NAHI.
//     Niyam 'Seat ke bahar ka kaam NAHI' → REJECT.
// R2. New Indian Express (28 Sep 2026): Sabbavaram me Rs 1.60 crore ka fire-station bhavan — Home Minister
//     Vangalapudi Anitha ne lokarpan kiya (15th Finance Commission fund); MLA sirf maujood the aur paudhe
//     lagaye. 'Dusre neta ke karyakram me maujoodgi' → REJECT.
// R3. TOI + The Hindu (Jan 2026): GVMC ka Pendurthi/Aganampudi zonal review meeting — MLA ne maangein rakhi
//     (merged villages, BRTS roads, 24/7 pani, TIDCO houses). 'Sirf maang' — koi dastaveji nateeja nahi → REJECT.
// R4. bharathorizon.com: Vepagunta-Pinagadi road-widening muavza cheque vitran — whitelist-bahar outlet → REJECT.
// R5. 2 May 2025 (PM visit coverage, Outlook/Business Standard/PTI): NH-16 ka Anandapuram-Pendurthi-Anakapalle
//     section (Rs 2,950 crore) ka PM dwara lokarpan — kendriya pariyojna, MLA ki bhoomika nahi → REJECT.
// R6. Deccan Chronicle (AMP page, 3 Mar 2026): 'Mayor Lays Stone For Works' — Ward No. 77, Aganampudi Zone
//     (Pendurthi constituency) me ~Rs 7.5 crore karyon ka shilanyas (Mayor + MLA + corporator). Page 403 par
//     khula NAHI (browser.open upstream rejected). Niyam 'Khul na sakne wala page source nahi' — entry me NAHI,
//     RETRY-LEAD: https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/mayor-lays-stone-for-works-1941204
// NEGATIVES: 0. 2024 halafname me 0 criminal cases. Jun 2024+ me koi FIR/chargesheet/nyayik vikas established
// media me nahi mila. indiankanoon.org ka Feb 2024 'P. Ramesh Babu vs State of AP' mamla Thulluru (Guntur) ka
// hai — Pendurthi MLA se pehchan match NAHI karti (alag vyakti), isliye negative NAHI.
andhraWorks['panchakarla-ramesh-babu'] = [
  {
    title: 'VMRDA ki Rs 75 crore pariyojnaon ke dauraan Chimalapalli me Rs 8 crore ke convention centre ka sanyukt lokarpan — VMRDA adhyaksh, Pendurthi MLA aur metropolitan commissioner maujood',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/vmrda-rolls-out-rs-75-crore-infra-projects-in-pendurthi-1895385',
    date: '2025-08-03',
    note: 'Deccan Chronicle ki post-event report ke mutabik, VMRDA adhyaksh M.V. Pranav Gopal, Pendurthi MLA Panchakarla Ramesh Babu aur metropolitan commissioner K.S. Vishwanathan ne Pendurthi constituency ke Chimalapalli me Rs 8 crore ki lagat se bane naye convention centre ka lokarpan kiya; VMRDA dwara Pendurthi me kul lagbhag Rs 75 crore ki infrastructure pariyojnaein shuru ki gayin. CREDIT CAPPED: lokarpan sanyukt tha aur karyakram VMRDA ka tha (fund VMRDA ka, sarkari agency); MLA ka vyaktigat lokarpan nahi. Fund: Rs 8 crore VMRDA fund — disclosed. Inferred-date disclosure: report me karyakram ko sirf "Sunday" bataya gaya hai, exact tareekh nahi; search-lead anusar report ~Aug 2025 ki hai aur 3 Aug 2025 Ravivar padta hai, isliye ye tareekh li gayi hai.',
    period: '2024-2029',
  },
  {
    title: 'Pendurthi me chaar sadak pariyojnaon ka shilanyas — Vepagunta (Pinagadi) Rs 15 crore, Lankalapalem-Asakapalle-Duvvada Railway Station Rs 31 crore, Duvvada-Gollalapalem-Amruthapuram Rs 24.50 crore, Sabbavaram degree college road Rs 58.50 lakh (MLA ki maang par swikriti)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/vmrda-rolls-out-rs-75-crore-infra-projects-in-pendurthi-1895385',
    date: '2025-08-03',
    note: 'Deccan Chronicle ki post-event report ke mutabik, upar wale hi karyakram me adhikariyon ne kai road pariyojnaon ke shilanyas kiye; itemized suchi: Pinagadi (Vepagunta) me 3.12-km lamba 60-ft chauda master plan road — Rs 15 crore; Lankalapalem, Asakapalle aur Duvvada Railway Station roads ko jodne wala 100-ft chauda master plan road — Rs 31 crore; Duvvada Railway Station ko Gollalapalem aur Amruthapuram se jodne wala 60-ft road — Rs 24.50 crore; Sabbavaram me Anakapalle National Highway se Government Degree College tak 40-ft chauda asphalt road — Rs 58.50 lakh. Report ke mutabik MLA ne kaha ki VMRDA-NDA coalition netritva ne UNKI MAANG par ye sadak pariyojnaein tezi se approve aur fund allocate kiye — dastaveji maang-nateeja (credit capped). Fund: VMRDA funds — disclosed. Metropolitan commissioner ne chhah mahine me poorn karne ka ashwasan diya. Inferred-date disclosure: report me karyakram ko sirf "Sunday" bataya gaya hai; 3 Aug 2025 Ravivar hone ke karan ye tareekh li gayi hai (pehli entry dekhen).',
    period: '2024-2029',
  },
  {
    title: 'Sabbavaram Government Degree College ke Rs 3.26 crore vikas karyon ka MLA aur MLC dwara sanyukt shilanyas',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/visakhapatnam/anakapalli-rs-326-cr-sanctioned-for-sabbavaram-college-development-1130748',
    date: '2026-10-09',
    note: 'The Hans India ki post-event report ke mutabik, Pendurthi MLA Panchakarla Ramesh Babu ne MLC Vepada Chiranjeevi Rao ke saath Sabbavaram Government Degree College me Rs 3.26 crore se hone wale vikas karyon ka shilanyas kiya; MLA ne kaha ki college ka roop badlega, kaam sakht samay-seema me honge, aur principal TMA Niveditha ke prayason ki sarahna ki. MLA ne MRO aur police ko college parisar ke encroachments hatane ka nirdesh bhi diya. Sabbavaram Pendurthi constituency me hai — seat-level. CREDIT CAPPED: shilanyas MLC ke saath sanyukt tha; MLA ka akela lokarpan/shilanyas nahi. Fund: Rs 3.26 crore "sanctioned" — kaunse vibhag/nikay se, ye report me nirdisht nahi — srot-vibhag "ghoshit nahi". Inferred-date disclosure: report me karyakram ko "Friday" bataya gaya hai; report 10 Oct 2026 ko prakashit hui aur 9 Oct 2026 Shukravar padta hai, isliye ye tareekh li gayi hai.',
    period: '2024-2029',
  },
  {
    title: 'Chinamushidiwada (Pendurthi) me VMRDA ke 77-plots wale Emerald Layout ka sanyukt lokarpan — Rs 3 crore ka vikas (CC roads, underground drainage, water supply, street lighting)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Visakhapatnam/vmrda-inaugurates-new-residential-in-chinamushidiwada/article70762432.ece',
    date: '2026-03-19',
    note: 'The Hindu ki post-event report ke mutabik, VMRDA adhyaksh M.V. Pranav Gopal ne Pendurthi MLA Panchakarla Ramesh Babu aur Metropolitan Commissioner N. Tej Bharat ke saath Visakhapatnam ke Chinamushidiwada me Emerald Layout ka lokarpan kiya — lagbhag 4.70 acre me 77 residential plots, Rs 3 crore ka nivesh, CC roads, underground drainage, water supply, bijli-street lighting aur hariyali ke saath. Chinamushidiwada Pendurthi Mandal ka gaon hai (Pendurthy S.O, 531173) — Pendurthi seat me, isliye seat-level pakka. CREDIT CAPPED: lokarpan VMRDA adhyaksh ke netritva me sanyukt tha; MLA ka vyaktigat lokarpan nahi, aur layout VMRDA ka project hai. Fund: VMRDA fund Rs 3 crore — disclosed. Inferred-date disclosure: report me karyakram "Thursday" ko bataya gaya hai; report 19 Mar 2026 ko prakashit hui aur 19 Mar 2026 Guruvar padta hai, isliye ye tareekh li gayi hai.',
    period: '2024-2029',
  },
];

// vangalapudi-anitha — 2 entries (QA-checked).
// ==== REJECT-LOG ====
// 1. RTV YouTube short (~Oct 2026): "Payakaraopet me Rs 8.20 crore ke vikas karyon ka shilanyas" —
//    YouTube = whitelist-bahar, REJECT. Isi dawa ka koi whitelist text source nahi mila.
//    RETRY-LEAD: Deccan Chronicle/Hans India me "Rs 8.20 crore" + Payakaraopet ka text version khojo.
// 2. The Hans India (2026-10-09): "Ministers launch developmental works" — Parchur constituency
//    (seat ke bahar ka kaam) — REJECT.
// 3. New Indian Express (2026-09-16): house-site pattas "assured soon" — sirf ghoshna — REJECT.
// 4. Deccan Chronicle (2026-09-15): house pattas + Jal Jeevan Mission piped water promises,
//    solar subsidy/solar-tourism ke vaade — sirf ghoshna — REJECT.
// 5. The Hans India (Sep 2026): Nakkapalli MPDO office me departments ki samiksha baithak —
//    nirikshan/review meeting, koi bhautik karya nahi — REJECT.
// 6. Deccan Chronicle: "Good governance drive in Ramayyapatnam" — abhiyan-shubharambh;
//    toy industry/25,000 jobs = ghoshna; TDP party office udghatan = party karyakram — REJECT.
// 7. The Hindu (2026-03-21): CM ke Nakkapalli daure ki taiyariyon ki samiksha;
//    dusre neta ke karyakram me maujoodgi — REJECT. ArcelorMittal steel plant ka shilanyas
//    CM ka karyakram tha — Anitha ki bhoomika sirf taiyari-samiksha — REJECT.
// 8. New Indian Express (2025-02-27): Nara Lokesh se Skill Development Centre + Junior Girls
//    College (S. Rayavaram) ki maang — sirf maang — REJECT.
// 9. Deccan Chronicle (2025-05-31): free gas cylinders/pensions vitaran (daan/rahat),
//    Anna Canteen/1 lakh jobs/drinking water ke vaade (ghoshna) — REJECT.
// 10. Deccan Chronicle (cyclone daura ~Oct 2025): Bangarammapalem me essential supplies
//     vitaran (rahat), ek parivar ko niji fund se sahayta (niji kharch), 15 din me sadak +
//     solar fish-drying units (ghoshna) — REJECT.
// 11. Deccan Chronicle (~2026-05): welfare-initiatives visit — pension vitaran, South Coast
//     Railway Zone ka shrey (kendriya vishay) — REJECT.
// 12. Global Toy Park, Nakkapalli (~20,000 mahila rojgar ka vaada) — ghoshna/CM-led — REJECT.
// NEGATIVES: Halafname me 7 mamle darj hain (FIR 2019-2023; 2 me charges framed), lekin Jun 2024+
// me MLA khud aaropi ke roop me FIR/chargesheet/nyayik vikas ki established-media report nahi mili —
// "halafname ke pending cases akele" negative nahi bante. CC No. 320/2019 (NI Act 138) me
// Dec 2024 me AP High Court (Crl. Petition 8453/2024) me sulah (compromise) hua — ye MLA ke
// paksh me nivaaran tha aur uski report established media me nahi mili (sirf indiankanoon
// court record) — isliye negative nahi banaya gaya. = 0 negatives.
//
// ==== RETRY-LEADS ====
// R1: RTV YouTube short (~Oct 1, 2026): "Payakaraopet me Rs 8.20 crore ke vikas karyon ka shilanyas" —
//     whitelist text source khojo (Deccan Chronicle/Hans India/Hindu/NIE).
// R2: Grih-mantri-roop ke sab police/vibhagiya faisle jaanboojhkar bahar rakhe gaye (scope-rule);
//     MLA-roop me seat ke aur itemized karyon ke liye Dondavaka/Rajayyapeta/Boyapadu/Nakkapalli
//     keywords par aur mining.
andhraWorks['vangalapudi-anitha'] = [
  {
    title: 'Payakaraopeta me Dondavaka aur Rajayyapeta (Chandanada) tat par PMMSY ke tahat do fish landing centres ka sanyukt shilanyas — kul lagat lagbhag Rs 49.54 crore',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/two-fish-landing-centres-inaugruated-in-payakaraopet-constituency-1966843',
    date: '2026-06-28',
    note: 'Deccan Chronicle ki post-event report (28 Jun 2026) ke mutabik, Infrastructure and Investments Minister B.C. Janardhan Reddy aur Home Minister Vangalapudi Anitha ne Ravivar ko Boyapadu, Payakaraopeta Assembly constituency (Anakapalli jila) me do fish landing centres ke shilanyas kiye. Dono centres Dondavaka aur Rajayyapeta (Chandanada) tat, Nakkapalli mandal me Pradhan Mantri Matsya Sampada Yojana (PMMSY) ke tahat banenge — har centre ki anumaanit lagat Rs 24.77 crore, kul lagbhag Rs 49.54 crore. Uddeshya: safe boat landing, hygienic fish handling, storage aur marketing suvidha — hazaron machhuwaron ko labh. Anitha ne kaha ki machhuwara samuday varshon se jetty ki maang kar raha tha; rajya ke 3 swikrit fish landing centres me se 2 Payakaraopeta AC ko mile hain; AC me lagbhag 9,000 machhuwara parivar hain. BC Welfare Girls Hostel aur multi-speciality hospital ki baatein usi daure ki ghoshna matra hain — ye entry ka vishay nahi. CREDIT CAPPED: sanyukt shilanyas (do mantri), fund kendriya PMMSY yojana — vyaktigat bhoomika sirf seat ke andar bhautik sanrachna ke sanyukt shilanyas tak seemit. Tareekh: report me karyakram "Sunday" ka bataya gaya hai aur prakashan-tithi 28 Jun 2026 (Sunday) hai — inferred nahi. Fund: report me CDP/MLA-nidhi ka zikr nahi — ghoshit nahi.',
    period: '2024-2029',
  },
  {
    title: 'MLA ka dawa — Payakaraopeta constituency me pichhle do varshon me lagbhag Rs 600 crore ke vikas karye, jinme Roads and Buildings vibhag se lagbhag Rs 100 crore ke sadak karye shamil',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/two-fish-landing-centres-inaugruated-in-payakaraopet-constituency-1966843',
    date: '2026-06-28',
    note: 'Usi Deccan Chronicle report (28 Jun 2026) me Anitha ne kaha ki pichhle do varshon me constituency me lagbhag Rs 600 crore ke vikas karye hue, jinme Roads and Buildings department ke madhyam se lagbhag Rs 100 crore ke sadak karye shamil hain. DAWA-FRAMING: ye sirf MLA ka kathan hai — report me is dawe ki itemized suchi, prati-karya lagat, ya fund-source ka vyora nahi diya gaya; kisi bhi vishesh sadak/pariyojna ka naam nahi. Swayam Anitha ne usi daure me Rs 60 crore ke "launched" karyon ka dawa bhi kiya, jisme upar wali fish landing centre entry (Rs 49.54 crore) shamil hai. Isliye is entry ka credit sirf kathan tak seemit hai, kisi vishesh kaam ka nahi. Tareekh: kathan 28 Jun 2026 ke karyakram me diya gaya — inferred nahi.',
    period: '2024-2029',
  },
];

// chintakayala-ayyanna-patrudu — 3 entries (QA-checked).

andhraWorks['chintakayala-ayyanna-patrudu'] = [
  {
    title: 'Palle Panduga-Panchayat Varotsavalu me Pedda Gologondapeta (Natavaram mandal, Narsipatnam) me Rs 1.40 crore aavantit sadak-nirman ka shilanyas',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/speaker-ayyanna-patrudu-invites-former-cm-jagan-to-assembly-1831892',
    date: '2024-10-14',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Chintakayala Ayyanna Patrudu ne Palle Panduga-Panchayat Varotsavalu karyakram se pehle Pedda Gologondapeta (Natavaram mandal, Narsipatnam constituency) me sadak-nirman ka shilanyas kiya, jiske liye Rs 1.40 crore aavantit tha; usi avsar par unhone kaha ki 100 dinon me unhone Narsipatnam constituency ke liye Rs 1.40 crore sunischit kiya aur Natavaram mandal ke liye lagbhag Rs 14 crore swikrit hue hain (yeh unka apna dawa hai — MLA ka dawa framing me hi). Inferred-date disclosure: article me karyakram ko sirf ‘Monday’ bataya gaya hai aur koi prakashan-tithi page par nahi mili; Palle Panduga-Panchayat Varotsavalu saptaah 14-20 Oct 2024 ko aayojit hua (Deccan Chronicle ki hi report), isliye us saptah ka Monday = 14 Oct 2024 liya gaya hai. Usi article me sand-mining par unke bayaan aur CM ke lift-irrigation ashwasan ka zikr yojna/ghoshna hai — is entry ka vishay nahi. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’ (aadhaar rakam article-disclosed hai).',
    period: '2024-2029',
  },
  {
    title: 'Narsipatnam me lagbhag Rs 75 lakh ki laagat se bane nav-nirmit divisional sub-treasury karyalaya bhavan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/andhra-pradesh/newly-constructed-divisional-sub-treasury-office-inaugurated-1129794',
    date: '2026-10-06',
    note: 'The Hans India ki post-event report (prakashan 7 Oct 2026) ke mutabik, Ayyanna Patrudu ne Narsipatnam me nav-nirmit divisional sub-treasury karyalaya bhavan ka udghatan kiya, jiski laagat lagbhag Rs 75 lakh batayi gayi; article me bhi kaha gaya ki Kotavuratla aur Nakkapalli me naye sub-treasury bhavanon ka nirman jaari hai (sirf nirman-sthiti ka zikr — lokarpan nahi). Inferred-date disclosure: article me udghatan ko ‘Tuesday’ bataya gaya hai aur report 7 Oct 2026 (Budhwar) ko prakashit hui, isliye karyakram 6 Oct 2026 ka maana gaya hai. Fund: article me fund-source nirdisht nahi — ‘ghoshit nahi’ (aadhaar rakam article-disclosed hai).',
    period: '2024-2029',
  },
  {
    title: 'Settipalem (Narsipatnam constituency) me Girijan Cooperative Corporation ke adhinasth 11.08 acres par Rs 16 crore ke integrated coffee processing unit ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/andhra-pradesh/assembly-speaker-vows-to-transform-his-constituency-into-industrial-hub-1132298',
    date: '2026-10-14',
    note: 'The Hans India ki post-event report (prakashan 14 Oct 2026) ke mutabik, Ayyanna Patrudu ne Settipalem gaon (Anakapalli jila) me integrated coffee processing unit ka shilanyas kiya; ye unit Girijan Cooperative Corporation (GCC) ke adhinasth 11.08 acres par lagbhag Rs 16 crore ki laagat se sthapit hogi, jisme coffee curing, roasting aur blending honge aur Adivasi kisaano ki upaj ka processing-packaging hoga. Article me lakshya bataye gaye: 6 mahine me nirman poornata aur 2027 tak commercial operations; lagbhag 600 mahilaon ko rozgar aur bhoomi tyag karne walon ko industry me avsar ka ashwasan. Article is unit ko Speaker ki apni Narsipatnam constituency ko industrial hub banane ki ghoshna ke sandarbh me pesh karta hai, isliye seat-level entry maani gayi hai. Usi avsar par Rachapalli me 426 acres bhoomi ke liye ‘prayaas jaari’ ka zikr sirf ghoshna hai — is entry ka vishay nahi. Fund: Rs 16 crore (GCC ke adhinasth), CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’ (aadhaar rakam article-disclosed hai).',
    period: '2024-2029',
  },
];


// Andhra Pradesh — Batch 3: Kakinada + East Godavari + Dr. B.R. Ambedkar Konaseema (7-9/26 jile).
// Mined 2026-10-18. Har MLA ka fragment: ~/workspace/aapkaneta_scratch/ap3_worker_<slug>_works.ts.

// ==== Kakinada (Batch 3) ====
// AP batch-3 worker — MLA: Yanamala Divya (TDP, Tuni, Kakinada) — mined 2026-10-18.
// Searched: whitelisted outlets (Deccan Chronicle, The Hindu, Indian Express group,
// Times of India, India Today, NDTV, HT, PTI via established outlets) for Jun 2024+
// lokarpan / shilanyas / sanction / GO of physical govt structures in Tuni, Assembly
// demands, and negative (FIR/chargesheet/judicial) news. Result: koi valid positive
// entry established media me nahi mili; negatives bhi koi nahi. Profile khali rakhi.

andhraWorks['yanamala-divya'] = [];

// REJECT-LOG (yanamala-divya):
// 1. Deccan Chronicle, 1 Sep 2024: "Tuni MLA orders reconstruction of protection wall
//    at Tandava Bridge" — MLA ne nirikshan ke dauran adhikariyon ko 15-metre gire hue
//    protection wall ke section ko dobara banane ka nirdesh diya. REJECT: sirf
//    nirikshan/daura + adhikariyon ka pehle se chal raha marammat-kaam (officials ne
//    kaha finishing touches Tandava nadi ke bhaari paani ki wajah se pending thi);
//    koi naya lokarpan/shilanyas/swikriti nahi. Note: page open nahi ho saka (403,
//    retry disallowed), lekin search-snippet detail mila — yeh khud bhi snippet-only
//    tha, isliye entry-kayogya nahi hota.
// 2. Deccan Chronicle, Oct 2026: "Tuni: 19 College Students Fall Ill After Allegedly
//    Consuming Sambar With Lizard" — MLA hospital gayi, students ko sambodhit kiya,
//    behtar ilaj ka nirdesh diya, midday-meal agency ki inquiry ka aadesh diya.
//    REJECT: hospital visit + directive — koi bhautik sarkari sanrachna ka
//    lokarpan/shilanyas nahi. Negative NAHI: MLA khud aaropi nahi; inquiry unhone
//    aadesh di thi.
// 3. Whip appointment (12 Nov 2024): CM ne Assembly whip banaya — pad ki niyukti,
//    vikas-kaam nahi, REJECT.
// 4. Gulte / Dailyhunt (Sep 2026): chacha Yanamala Krishnudu ka Jana Sena me jana —
//    rajneetik khabar, koi kaam nahi + non-whitelisted sources, REJECT.
// 5. The South First / Tupaki / Mirchi9 (2025): pita Yanamala Ramakrishnudu ki
//    party-internal ladai aur MLC/Rajya Sabha ki khabaren — MLA ke kaam nahi +
//    non-whitelisted, REJECT.
// 6. UNI (uniindia, 28 Sep 2025): Eluru MP Putta Mahesh Kumar ne roads ke shilanyas
//    kiye — MP ka kaam, seat se bahar (Eluru), UNI whitelist me nahi, REJECT.
// 7. Divi's Labs CSR RO-water reports (divislabs.com PDFs): village/school RO plants
//    — CSR kaam, MLA ka vyaktigat attributed kaam nahi, REJECT.
// 8. Sri Prakash school RSS (Jan 2026): MLA ke monthly constituency review meetings
//    (Swarnandhra @100) ka zikr — meeting-update, non-whitelisted school blog,
//    koi physical work event nahi, REJECT.
// 9. Negative check: halafnama (myneta.info) me "No criminal cases"; Jun 2024+ me
//    established media me unke khilaf koi FIR/chargesheet/janch/adalaati vikas nahi
//    mila. Sarpanch/pita/chacha ke mamle = parivar, rule ke tahat bahar. Chunav
//    se pehle ke koi legal development Jun 2024+ me nahi. Isliye koi negative entry
//    nahi.

// AP batch-3 worker — MLA: Varupula Satya Prabha (TDP, Prathipadu Kakinada) — mined 2026-10-18.
// Searched: whitelisted outlets (Deccan Chronicle, The Hindu, Indian Express group,
// Times of India, India Today, NDTV, Hindustan Times, The Hans India, PTI via
// established outlets) + AP DIPR portal for Jun 2024+ lokarpan / shilanyas /
// sanction / GO of physical govt structures in Prathipadu (Sankhavaram, Prathipadu,
// Yeleswaram, Rowthulapudi mandals), Assembly demands, and negative
// (FIR/chargesheet/judicial) news. Result: koi valid positive entry established
// media me nahi mili; negatives bhi koi nahi. Profile khali rakhi.

andhraWorks['varupula-satya-prabha'] = [];

// REJECT-LOG (varupula-satya-prabha):
// 1. May 2025: 90-day training ke baad mahila labharthiyon ko Rs 25,000 ki sewing
//    machines ka vitran (source: Wikipedia via YouTube video, non-whitelisted). REJECT:
//    daan/rahat kaam — koi bhautik sarkari sanrachna ka lokarpan/shilanyas nahi.
// 2. May 2025: Yeleswaram mandal me kisanon ko kheti ke auzaar vitrit + kisanon ke
//    liye development works karane ka vaada (source: YouTube, non-whitelisted).
//    REJECT: auzaar-vitran = daan/rahat; vaada = sirf ghoshna.
// 3. Sep 2024: Annavaram mandir me MLA ki achhanak yatraen aur official checks
//    (source: ABN Telugu YouTube, non-whitelisted). REJECT: sirf nirikshan/daura.
// 4. Deccan Chronicle (opened, article full-text read): RS MP Sana Satish ka
//    Uttarakanchi village (Prathipadu mandal) ko net-zero pilot banane ka plan;
//    MP aur MLA ne adhikariyon ke saath meeting me door-to-door survey aur
//    awareness programmes karane ko kaha, review Sep 10 ko. Date: article DC par
//    mid-Sep 2026 ka hai (last crawl 51 days ago). REJECT: planning-stage meeting
//    / pre-event announcement — koi physical work ka shilanyas/lokarpan nahi; MP
//    ki pehal me MLA sahbhagi.
// 5. Deccan Chronicle (Dec 2025): NRIs/industrialists ka Prathipadu me investment
//    interest; MLA ne collector S. Shan Mohan se 6,445 acres khaali sarkari zameen
//    APIIC ko dene par baat ki (Kirlampudi, Prathipadu, Sankhavaram mandals).
//    REJECT: sirf maang/prastav — baithak star ki baat, koi swikriti/lokarpan nahi.
// 6. New Indian Express + The Hans India (6 Oct 2026, dono opened): Rajya Sabha MP
//    Sana Satish ne Govt ITI Kakinada campus me Skills Startup Hub (Rs 15-20 crore)
//    ka shilanyas kiya; MLA Varupula Satyaprabha sirf maujood rahin/bolin (Kakinada
//    City MLA, Rural MLA, Peddapuram MLA bhi maujood the; MP funds se project).
//    REJECT: dusre neta (MP) ke karyakram me maujoodgi — MP ke MPLADS-type funds
//    ka kaam, MLA ka vyaktigat attributed kaam nahi.
// 7. New Indian Express (4 Jul 2024): Water Resources Minister Nimmala Ramanaidu ne
//    Pattiseema lift se Krishna Delta ko paani chhoda; MLA article me sirf
//    upasthit MLAs ki suchi me thi. REJECT: mantri ke karyakram me maujoodgi.
// 8. Deccan Chronicle: pulse polio programme — Health Minister Satya Kumar Yadav
//    ka abhiyaan, MLA ne polio drops pilane me hissa liya. REJECT: sarkari abhiyaan
//    me sahyog — koi physical sanrachna nahi.
// 9. Deccan Chronicle: Prathipadu tank ka restoration (Rs 49.91 lakh, PMKSY 2.0,
//    Union MoS Pemmasani Chandrasekhar ne lokarpan kiya). REJECT: yeh Prathipadu,
//    GUNTUR jile ki khabar hai (wahan ke MLA B. Ramanjaneyulu) — Kakinada ki
//    Prathipadu seat se sambandh nahi.
// 10. Negative check: halafnama (myneta.info, src/data me criminalCases: 0) me koi
//     aapradhik mamla nahi; Jun 2024+ me established media me MLA ke khilaf koi
//     FIR/chargesheet/janch ya nyayik vikas nahi mila. Isliye koi negative entry
//     nahi.

// Andhra Pradesh — Pawan Kalyan (Pithapuram, JSP; Dy CM + JSP adhyaksh) — works-mining batch.
// Researched 2026-10-18. Scope: 16th AP VS, Jun 2024 se. Dy CM sakht niyam: rajya faisle,
// party karyakram, rajya-stariya ghoshnaen, Grama Sabha/panchayat-raj rajya karyakram — sab reject;
// keval Pithapuram seat ke andar ke dastaveji vyaktigat kaam (lokarpan/shilanyas unhone khud kiya ho).
// Sources: New Indian Express (whitelisted), Deccan Chronicle (whitelisted), The Indian Express (whitelisted).
// Saare sources kholkar padhe gaye; snippet-only entry koi nahi.
// VALID entries: 6 (positive) + 1 (negative — Madurai Murugan FIR, discrepancy disclosed).
// Push/deploy NAHI kiya gaya.

andhraWorks['pawan-kalyan'] = [
  {
    title: 'Pawan Kalyan ne Pithapuram ke Sri Krishna mandir parisar me bane Gokulam (chaar gayon sahit) ka udghatan kiya aur use Yatam Nageswara Rao ko saunpa — laagat Rs 1.85 lakh, MGNREGA ke tahat',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Jan/11/power-is-a-responsibility-not-fashion-to-me-dy-cm-pawan-kalyan',
    date: '2025-01-10',
    note: 'New Indian Express ke anusaar unhone apne Pithapuram vidhan sabha kshetra ke Sri Krishna mandir me bane Gokulam ka udghatan kiya; chaar gayon sahit Gokulam Yatam Nageswara Rao ko saunpa gaya; laagat Rs 1.85 lakh, Mahatma Gandhi National Rural Employment Guarantee Act ke tahat. Isi daure me unhone rajya-bhar ke 12,500 mini-Gokulam sheds ka aupcharik shubharambh bhi kiya tha — wo rajya-stariya karyakram is entry ka hissa nahi hai. Tarikh anumaanit: report 11 Jan 2025 ko publish hui aur ghatna ko "Friday" bataya; 2025-01-10 Friday tha.',
    period: '2024-2029',
  },
  {
    title: 'Pawan Kalyan ne Pithapuram me maujooda 30-bed aspatal ki jagah banne wale 100-bed kshetra aspatal ka shilanyas kiya — anumaanit laagat Rs 34 crore',
    category: 'Aspataal',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/Apr/26/stone-laid-for-rs-34-crore-area-hospital-in-andhras-pithapuram',
    date: '2025-04-25',
    note: 'New Indian Express ke anusaar 25 Apr 2025 ke Pithapuram daure me unhone 100-bed kshetra aspatal ki aadhaarshila rakhi — anumaanit laagat Rs 34 crore; maujooda 30-bed aspatal ki jagah banega; do naye block, outpatient ward, mortuary, dialysis unit, blood bank aur aadhunik chikitsa upkaran honge. Unke anusaar isse Pithapuram kshetra aur chhah padosi mandalon ke teen lakh se adhik log labhanvit honge, aur unhone ise chunaav-prachar ka wada bataya. Nidhi ka srot report me ghoshit nahi. Tarikh anumaanit: report 26 Apr 2025 ko publish hui, ghatna "Friday"; 2025-04-25 Friday tha.',
    period: '2024-2029',
  },
  {
    title: 'Pawan Kalyan ne U Kothapalli me TTD Kalyana Mandapam (Rs 2 crore), Gollaprolu me Sri Sitarama Swamy Devasthanam parisar ke navinikaran (Rs 1.32 crore) aur Chebrolu me Kalakshetra Mandapam-Rathashala (Rs 48 lakh) ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/Apr/26/stone-laid-for-rs-34-crore-area-hospital-in-andhras-pithapuram',
    date: '2025-04-25',
    note: 'New Indian Express ke anusaar ye teenon aadhaarshila 25 Apr 2025 ke Pithapuram daure me rakhi gayi: U Kothapalli me TTD Kalyana Mandapam (Rs 2 crore); Endowments vibhag ke tahat Gollaprolu me Sri Sitarama Swamy Devasthanam mandir parisar ka navinikaran (Rs 1.32 crore); Chebrolu me Kalakshetra Mandapam aur Rathashala (Rs 48 lakh). Isi daure me unhone kisaano ko krishi upkaran bhi vitrit kiye — wo kalyan-vitran hai, is entry ka hissa nahi. Tarikh anumaanit: report 26 Apr 2025 ko publish hui, ghatna "Friday"; 2025-04-25 Friday tha.',
    period: '2024-2029',
  },
  {
    title: 'Pawan Kalyan ne FK Palem me navinikrit Maisamma talab, walking track aur children park ka udghatan kiya aur Pithapuram ke 14 talabon ke saundaryikaran (kul laagat Rs 6.08 crore) ki samarpan-plakika ka anavaran kiya',
    category: 'Paani',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2026/Sep/22/pawan-kalyan-launches-works-worth-rs-15k-crore-in-pithapuram-segment',
    date: '2026-09-21',
    note: 'New Indian Express ke anusaar 21 Sep 2026 ko unhone FK Palem me Rs 73 lakh ki laagat se navinikrit Maisamma talab, walking track aur children park ka udghatan kiya; saath hi Maisamma Cheruvu site par Pithapuram ke 14 talabon ke saundaryikaran (kul laagat Rs 6.08 crore) ko darshane wali aadhaarshila/plakika ka anavaran kiya. Ye 14 talab rajya-bhar me 105 talabon ke saundaryikaran (kul Rs 50 crore, Pradhan Mantri Krishi Sinchayee Yojana sahyog, 2026-27) wale rajya karyakram ka Pithapuram hissa hain — rajya karyakram ka shrey is entry me shaamil nahi, keval Pithapuram ke kaam darj hain. Tarikh: report 22 Sep 2026 ko update hui, ghatna "Monday"; 2026-09-21 Monday tha.',
    period: '2024-2029',
  },
  {
    title: 'Pawan Kalyan ne Pithapuram me chhah ekad par lagbhag Rs 1.83 crore ki laagat se bane Peethikapuravanam shahari van ka udghatan kiya — Kendra ki Nagar Van Yojana ke tahat',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/pawan-kalyan-inaugurates-peethikapuravanam-urban-forest-in-pithapuram-1989251',
    date: '2026-09-21',
    note: 'Deccan Chronicle ke anusaar 21 Sep 2026 ko unhone Peethikapuravanam shahari van ka udghatan kiya — paudha lagaya aur plakika ka anavaran kiya; chhah ekad par lagbhag Rs 1.83 crore ki laagat, Kendra sarkar ki Nagar Van Yojana ke tahat; pehle ye jagah kachra dumping yard thi. Nakshatra Vanam (27 nakshatron ke ped) aur Shiva Panchayatan Vanam iske mukhya aakarshan hain; report me ise unki "special initiative" bataya gaya hai. Tathya-vivran: New Indian Express ne isi plakika-anavaran ko "foundation stone" likha tha; Deccan Chronicle ke vistaarit post-event vivran (paudha-ropan, Miyawaki van, butterfly park, talab nirikshan) ke aadhaar par stage lokarpan liya gaya. Tarikh: report 21 Sep 2026 ko publish hui, ghatna "Monday"; 2026-09-21 Monday tha.',
    period: '2024-2029',
  },
  {
    title: 'Pawan Kalyan ne Nagulapalli samagra surakshit peyjal yojna (adhunikikaran laagat Rs 9.59 crore) ko janata ko samarpit kiya — 52 gaanvon ke lagbhag 97,000 logon ko peyjal milega',
    category: 'Paani',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2026/Sep/23/wish-to-see-our-coalition-government-grow-from-strength-to-strength-andhra-pradesh-dy-cm-pawan-kalyan',
    date: '2026-09-22',
    note: 'New Indian Express ke anusaar 22 Sep 2026 ko unhone Nagulapalli gaon me adhunikikrit Nagulapalli Comprehensive Protected Drinking Water Scheme ka udghatan kiya; teen dashak purani yojna ke adhunikikaran par Rs 9.59 crore kharch hue (post-event report me "Rs 10 crore" ka gol-aankda diya gaya); Uppada Kothapalli aur Pithapuram Rural mandalon ke 52 gaanvon ke lagbhag 97,000 logon ko peyjal milega. 28 Jul 2026 ki sameeksha baithak me adhikariyon ne yojna ko commissioning ke liye taiyaar bataya tha. Tarikh: report 23 Sep 2026 ko update hui, ghatna "Tuesday"; 2026-09-22 Tuesday tha.',
    period: '2024-2029',
  },
  {
    title: 'Madurai ke Murugan devotees conference (22 Jun 2025) me Madras High Court ki sharton ke ullanghan ke aarop me Pawan Kalyan FIR Crime No. 497/2025 (E3 Annanagar Police Station) me named aaropi — BNS dhaara 196(1)(a), 299, 302, 353(1)(b)(2) ke tahat mamla darj, janch jaari',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/india/pawan-kalyan-annamalai-booked-violating-court-conditions-lord-murugan-conference-10098843/',
    date: '2025-06-30',
    note: 'The Indian Express ke anusaar Madurai police ne E3 Annanagar thane me Crime No. 497/2025 darj kiya; named aaropiyon me Hindu Munnani adhyaksh Kadeshwara Subramaniam, sachiv S Muthukumar, Pawan Kalyan aur K Annamalai shaamil hain. Aarop: 22 Jun 2025 ke Lord Murugan Devotees Conference me Madras High Court ki sharton (rajnitik/dharmik bayanbazi par pratibandh) ka ullanghan karte hue bhashan; shikayat advocate S Vanjinathan (Madurai People\u2019s Federation for Communal Harmony) ne di thi. VIVRAN-ANTAR: The Hindu aur Times of India ki isi FIR ki reporting me saat named aaropiyon ki suchi me Pawan Kalyan ka naam nahi hai — keval IE ki suchi unhe named aaropi batati hai; ye antar yahan spasht darj hai. Cited IE report me MLA ka koi prati-kathan darj nahi hai (anupasthiti disclosed). Stage: FIR darj + janch; aarop-patrak ya adalati faisle ki koi report cited page par nahi. Tarikh: IE ne "late Monday" likha; prakashan Jul 2025 ke shuru me aur TNM ne 30 June darj kiya — 2025-06-30 li gayi (2025-06-30 Monday tha).',
    period: '2024-2029',
  },
];

// REJECT-LOG pawan-kalyan (researched 2026-10-18):
// R-1. Rs 1,500 crore bundle "launch" (IE, 22-23 Sep 2026, RRBHR College public meeting: JJM+Amarajeevi Jaladhara Rs 307 cr, UGD Rs 200-225 cr, AIIB Gollaprolu Rs 80 cr, AMRUT 2.0, sadak Rs 100 cr, ROB Rs 118 cr, Uppada coastal wall Rs 323 cr, AYUSH college Rs 100 cr) — jan-sabha me ghoshna-stariya launch; kisi ek pariyojna ka vyaktigat shilanyas/lokarpan dastavej nahi — sirf ghoshna = REJECT (upar ke chhah vyaktigat kaam alag entries me hain).
// R-2. Sankranti 2026 daura (9-10 Jan 2026) me Rs 211 crore ke shilanyas/udghatan ka dawa — teluguvaaditv/telugubulletin/gulte (non-whitelisted) ya PTI paid press-release (The Wire/The Week, "PTI takes no editorial responsibility") par; IE ki whitelisted report (10 Jan 2026) keval kul-aankde (Rs 308 cr pichhle saal, Rs 211 cr is saal) uddhrit karti hai, koi bhautik shilanyas/lokarpan confirm nahi = REJECT. RETRY-LEAD RL-1.
// R-3. Rs 30.66 crore temple-infra allocation (24 mandir + 48 bhajan mandir + TTD kalyana mandapam) — telugu360 (non-whitelisted) + allocation ghoshna = REJECT.
// R-4. 12,500 mini-Gokulam sheds ka rajya-bhar shubharambh (IE, 11 Jan 2025) — rajya-stariya karyakram = REJECT (Pithapuram ka ek Gokulam alag entry bana hai).
// R-5. SLRM pilot project "Pithapuram me launch hoga" (The Hindu, 12 Jul 2024) — keval ghoshna = REJECT.
// R-6. JSP 12th Foundation Day 'Jaya Ketanam', Chitrada (IE, 15 Mar 2025) — party karyakram = REJECT.
// R-7. Ram Charan/Upasana + Apollo model Anganwadi, Pithapuram (telugubulletin, non-whitelisted) — dusron ka CSR kaam; Pawan ki bhoomika keval sambhavit udghatan = REJECT.
// R-8. Pithapuram me camp office ki ghoshna (IE, 23 Sep 2026) — ghoshna = REJECT.
// R-9. Laptop vitran (meritorious students), fishing nets/vehicles (fishermen), SHG cheques (IE, 23 Sep 2026) — kalyan-vitran, bhautik sanrachna nahi = REJECT.
// R-10. 18 shahari van (Rs 36 crore) ka rajya-bhar udghatan (DC, 21 Sep 2026) — Dy CM ke roop me rajya-stariya bhoomika, Pithapuram ke bahar = REJECT.
// R-11. Komaragiri/Chebrolu PHCs (Rs 50-50 lakh, operational) + Viravada AYUSH dispensary (Rs 30 lakh) — DC health-hub article (~Aug 2026) Jana Sena press release par aadharit; Pawan dwara vyaktigat udghatan/shilanyas ki koi report nahi = REJECT.
// R-12. 100-bed hospital "lagbhag 50% kaam poorn" pragati note (DC health-hub, ~Aug 2026) — pragati report, naya vyaktigat kaam nahi = REJECT.
// R-13. Stand-up comedian Anudeep Katikala giraftari (Jana Sena karyakarta ki shikayat par; 2026) — Pawan shikayatkarta-paksh/victim side hain, aaropi NAHI = negative NAHI.
// R-14. YouTuber Raavan (B Joseph) par Pithapuram PS me FIR (Jana Sena sadasya Bojja Kumar Babu ki shikayat, Jun 2026) — shikayat Pawan ke khilaf tippani par; Pawan aaropi NAHI = negative NAHI.
// R-15. Vizag court dwara Pawan ke khilaf mamla kharij (mymazaa, Oct 2026) — non-whitelisted source + parivarik mamla (patni Nandini ka case) = bahar.
// R-16. Halafname ke 8 criminal cases (myneta.info) — pending halafnama mamle akele negative NAHI; karyakaal me in par koi FIR/chargesheet/janch/nyayik vikas whitelisted media me nahi mila.
// R-17. Madurai Murugan FIR me naam ko lekar whitelisted outlets me antar (IE named-aaropi batata hai; The Hindu/TOI/TNM ki suchi me naam nahi) — negative entry upar poorn vivran ke saath darj hai; chargesheet ya adalati vikas par follow-up RETRY-LEAD RL-2.
// RETRY-LEADS pawan-kalyan:
// RL-1. Sankranti 2026 (9-10 Jan 2026) Pithapuram daure ke vyaktigat shilanyas/lokarpan — Deccan Chronicle/The Hans India/TOI/HT ki post-event report dhoondho; teluguvaaditv ka "Rs 186 cr shilanyas + Rs 26 cr udghatan" dawa abhi unverified hai.
// RL-2. Murugan FIR Crime No. 497/2025 — chargesheet, giraftari ya adalati vikas, ya Pawan Kalyan ki pratikriya par whitelisted follow-up; IE vs The Hindu aaropi-suchi antar ka samadhan.
// RL-3. Nagulapalli CPWS aur 100-bed hospital ki GO/sarkari-portal swikriti — mile to badge 'sarkari' me upgrade sambhav.
// RL-4. Jun-Dec 2024 ke Pithapuram dauron me koi chhoota vyaktigat shilanyas/lokarpan — AP DIPR press releases check karo.

// pantham-venkateswara-rao — 0 works + 1 negative
// Pehchan pakki: Kakinada Rural (Kakinada jila), JSP, Winner 2024 —
// 134,414 vote; runner-up Kurasala Kannababu (YSRCP, 62,374) ko 72,040 maton se haraya.
// S/o Subba Rao, age 61, pesha kheti/contracts/real estate.
// Halafnama: 11 mamle; 1 me dosh-siddhi (2021, Rs 500 jurmana).
// Karyakaal: 16th AP Vidhan Sabha, Jun 2024+ (2024-2029).
// Whitelisted English media me MLA ki vyaktigat bhoomika wali koi valid works-story
// nahi mili — jo mili wo ya to sirf maujoodgi/maang thi ya non-whitelist source thi
// (sab REJECT-LOG me). Negative: Sept 2024 me Rangaraya Medical College (RMC) doctor
// se durvyavahar par Sarpavram police ne MLA ke khilaaf case darj kiya (DC reporting).

andhraWorks['pantham-venkateswara-rao'] = [
  {
    title: 'Rangaraya Medical College (Kakinada) ke senior doctor se durvyavahar aur maar-peet ke aarop me Sarpavram police ne Kakinada Rural MLA Pantham Venkateswara Rao (Pantham Nanaji) ke khilaaf case darj kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/jana-sena-mla-nanaji-assaults-rmc-doctor-students-1825175',
    date: '2024-09-22',
    note: 'Deccan Chronicle (published 2024-09-22 01:15 IST) ke mutabik ghatna usse pehle Saturday evening ki hai (date report ki prakashan-tithi se inferred — reasoning yahan disclose hai). RMC ke maidan me outsiders dwara volleyball khel aur betting ki shikayat par college prashasan ne outsiders ko roka tha; Kakinada Rural MLA Pantham Venkateswara Rao (Nanaji) apne samarthakon ke saath maidan me aaye aur senior doctor Dr. P. Uma Maheswara Rao (HoD, Forensic Medicine) se filthy language me durvyavahar kiya aur maar-peet ki; beech-bachav karne aaye kuch students ke saath bhi maar-peet hui. Medical Education additional director Dr. D. S. V. L. Narasimham ne Kakinada SP Vikrant Patil se shikayat ki, jis par DC ke mutabik Sarpavram police ne MLA aur unke samarthakon ke khilaaf case register kiya. Nuance: The New Indian Express ki usi din ki (2024-09-22) khuli hui report me "police are yet to register a case" likha tha — FIR-register ka dawa DC ki report ka hai. Jawaab: DC ke mutabik aaropi MLA khud RMC gaye aur doctor aur students se maafi maangi; TNIE (khuli hui report) ke mutabik Nanaji ne regret vyakt karte hue kaha ki unhone gusse me aakar rudely baat ki aur doctor unke purane mitra hain. Stage: FIR/case register (DC ka dawa; chargesheet ya adalati vikas ki whitelisted reporting ab tak nahi mili).',
    period: '2024-2029',
  },
];

// REJECT-LOG (pantham-venkateswara-rao, mined 2026-10-18)
// POSITIVES:
// 1. The Hans India — "Kakinada: Foundation stone laid for Rs 20 cr skill hub" (06 Oct 2026): skill centre ka foundation stone Rajya Sabha MP Sana Satish Babu ne rakha (MP funds se). Kakinada Rural MLA Pantham Nanaji ne sirf kaha ki "skill was the real capital for the future of youth" — REJECT (dusre neta ke karyakram me maujoodgi; MP fund kaam; MLA ki vyaktigat bhoomika nahi).
// 2. Deccan Chronicle — "Pawan Kalyan Inaugurates Peethikapuravanam Urban Forest in Pithapuram" (21 Sep 2026): Deputy CM Pawan Kalyan ne 18 urban forests ka lokarpan kiya; Pantham Nanaji sirf attendees ki list me the — REJECT (dusre neta ke karyakram me maujoodgi).
// 3. Times of India — "Pawan Kalyan begins internal review of party MLAs performance" (301 days ago, ~Dec 2025/Jan 2026): Kakinada Rural MLA Pantham Nanaji ne sirf "flagged fund constraints due to delayed local body elections" — REJECT (sirf maang/prastav).
// 4. The Hindu — "Action sought to prevent air pollution along Kakinada coast" (21 Dec 2024): Zilla Parishad general body meeting me MLA ne Kakinada Rural me industrial air pollution par action ki maang ki — REJECT (sirf maang; koi dastaveji nateeja/mantri-ashwasan nahi).
// 5. UNI — "AP: MLA organizes Blood donation camp to mark one year completion" (21 Jun 2025): UNI whitelist me NAHI hai + daan/event koi bhautik sanrachna nahi — REJECT (source reject + event).
// 6. inshorts — "2 TDP leaders, MLAs hurt as stage collapses during event in Andhra": inshorts aggregator hai (whitelist me nahi); MLA sirf KUDA chairman ke shapath samaroh me maujood the — REJECT (aggregator + maujoodgi).
// 7. YouTube (Sphoorthi India News) — YCP leaders join JanaSena in presence of Pawan Kalyan: YouTube whitelist me nahi; political event, koi sarkari sanrachna nahi — REJECT.
// 8. UNI — "Kakinada Rural MLA performs bhoomi puja for BT Road Works worth Rs. 35 lakh" (13 Oct 2026): UNI whitelist me NAHI — REJECT (source reject). RETRY-LEAD neeche dekho.
// 9. Deccan Chronicle — "Kakinada: Dream road project fails to take off" (25 Nov 2018): pre-term + MLA Thota Trimurthulu (Ramachandrapuram) ki story — hamare MLA se sambandh nahi — REJECT (out of scope, pre-term).
// 10. thesouthindiatimes.com epaper (05 Sep 2026) — "Panduru Cheruvu in Kakinada Rural constituency" pond modernisation (Rs 50 crore state programme): non-whitelist chhota outlet; sarkari abhiyan ka routine kaam; MLA ki bhoomika ka koi ullekh nahi — REJECT.
// 11. Medical Dialogues — "Rs 600 crore infrastructure launch to boost AP Govt Hospitals": Kakinada GGH ke Rs 35 crore action plan ka zikr MLA Vanamadi Venkateswara Rao (Kakinada City) ke saath hai — dusre neta ka kaam — REJECT (out of scope).
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. UNI ki "BT Road Works worth Rs. 35 lakh" bhoomi-puja story (13 Oct 2026, Kakinada): bhoomipuja = shilanyas-jaisa vyaktigat karya lagta hai, lekin UNI whitelist me nahi. Agar The Hindu/Indian Express/Deccan Chronicle/Hans India/TOI/NDTV/India Today me iski post-event reporting mile to valid entry ban sakti hai (category Sadak, badge news, fund "ghoshit nahi" jab tak source na kahe).
// B. RMC doctor-assault case (negative entry): DC ne case-register confirm kiya; chargesheet/giraftari/court-notice jaise aage ke vikas ki whitelisted reporting nahi mili. Live browser se Kakinada court/police follow-up check ho sakta hai.
// C. Telugu outlets (Eenadu/Andhra Jyothy/Sakshi web) whitelist se REJECT hain — unse mining ka koi prayas mat karna.

// AP batch-3 worker — MLA: Nimmakayala Chinarajappa (TDP, Peddapuram, Kakinada,
// purva mantri, 16th VS 2024-2029) — mined 2026-10-18.
// Searched: whitelisted outlets (Deccan Chronicle, The Hindu, Indian Express group,
// Times of India, India Today, NDTV, HT, PTI via established outlets) for Jun 2024+
// lokarpan / shilanyas / sanction / GO of physical govt structures in Peddapuram,
// Assembly demands, and negative (FIR/chargesheet/judicial) news. Result: Jun 2024+
// ka koi vyaktigat lokarpan/shilanyas whitelisted srot me nahi mila — saare mila-jula
// hits mantri-kaal (pre-2019) ke ya dusre netaon ke karyakram me upasthiti ya sirf
// ghoshna/bayaan the. Negatives bhi koi nahi. Profile khali rakhi.

andhraWorks['nimmakayala-chinarajappa'] = [];

// REJECT-LOG (nimmakayala-chinarajappa):
// 1. UNI (uniindia.com, 24 Jun 2026) + Standard Post PDF (25 Jun 2026, UNI byline):
//    "Minister Inaugurates Bridge Built Under Employment Guarantee Scheme in Kakinada
//    Dist." — Samalkot canal par Jamuna Nagar Colony (Madhapatnam, Samalkot Rural
//    Mandal) me Rs 72 lakh ka MGNREGS bridge; Social Welfare Minister Dola
//    Balaveeranjaneya Swamy ne inaugurated kiya; MLA Chinarajappa aur MLC
//    Perabathula Rajasekharam upasthit the. REJECT: (a) UNI/univarta whitelist me
//    NAHI — yahi wajah kaafi hai; (b) mantri ka karyakram, MLA ki sirf maujoodgi;
//    search-snippet me MLA ke "sanctioned and completed soon after assuming office"
//    wale daawe ka ekmatra zikr bhi isi non-whitelisted UNI-report par aadharit.
// 2. The Week (PTI) / Republic World (Aug 23 2025): CM Chandrababu Naidu ne Peddapuram
//    me Swarnandhra–SwachhAndhra meeting me ghoshnaein ki — Peddapuram + Samarlakota
//    ke liye AMRUT se Rs 75 crore peeyajal, 100-bed hospital, degree college, aur
//    Rs 330 crore ka 15 MW waste-to-energy plant. Chinarajappa sirf upasthit (CM ke
//    karyakram me maujoodgi). REJECT: dusre neta ki ghoshnaein; MLA ka koi vyaktigat
//    shilanyas/lokarpan/bhoomika nahi.
// 3. The Hindu (23 Aug 2025, 7:30 pm): "E-waste will be collected at people's
//    doorstep..." — upar wali CM meeting ka hi reporting; CM ne Rs 75 crore AMRUT
//    sanction ka zikr; Chinarajappa sirf "present" list me. REJECT: CM ka credit.
// 4. New Indian Express (28 Jul 2025): "Peddapuram MLA Chinarajappa slams 'targeted'
//    portrayal of town after prostitution racket claims" — whitelisted srot lekin
//    rajneetik bayan/virodh (Gollavelli Bharati prostitution-racket allegations par
//    pratikriya), koi bhautik sarkari sanrachna ka kaam nahi. REJECT: work entry
//    kayogya nahi. (Negative bhi NAHI: MLA khud aaropi nahi; ye unka statement tha.)
// 5. The Hans India (6 Oct 2026): "Foundation stone laid for Rs 20 cr skill hub"
//    (Skills Startup Hub, Govt ITI Kakinada; first phase Rs 5.30 crore) — shilanyas
//    Rajya Sabha MP Sana Satish Babu ne kiya (MP funds); Chinarajappa ne sirf
//    "welcomed the establishment" aur upasthit rahe. REJECT: MP ka kaam; MLA ki
//    sirf maujoodgi/shubhkaamna.
// 6. New Indian Express (6 Oct 2026, amp): skill hub wali khabar ka doosra version —
//    wahi karan se REJECT.
// 7. medifyhome.com (hospital marketing page): Medicover Hospital Peddapuram me HDU
//    addition ka inauguration — Chinarajappa "attended the inauguration". REJECT:
//    non-whitelisted marketing page + niji hospital ka samaroh + sirf upasthiti.
// 8. obnews.co (undated, ~2025): Kakinada district review meeting me MLA ne Yeleru
//    system repair aur Samarlakota bypass/ADB road extension ki maang ki. REJECT:
//    non-whitelisted srot + sirf maang/nirdesh, dastaveji nateeja nahi.
// 9. Sabhi The Hindu / Deccan Chronicle pre-2020 hits (2015-2019): Mandal Parishad
//    office lokarpan, Kapu Kalyana Mandapam shilanyas, madarsa building, ACB office,
//    police-vehicles, Kakinada selfie point — sab unke mantri-kaal (Dep CM/Home,
//    2014-19) ke kaam ya mantri-portfolio ke faisle. REJECT: rule ke mutabik mantri-
//    kaal ke rajya-faisle aur pre-term kaam include nahi; sirf Jun 2024+ seat-kaam.
// 10. Deccan Chronicle (18 Feb 2023, pre-term): "Chinarajappa faces protests from
//    rival group at Chandrababu event" — pre-term political khabar, REJECT.
// 11. NDTV/Business Standard (Apr 2019, pre-term, ANI byline): Hussein Puram me
//    campaign me virodh — pre-term + ANI (non-whitelisted), REJECT.
// 12. Negative check: halafnama me 17 pending mamle hain (myneta.info, pre-term) —
//    halafname ke pending mamle akele negative NAHI (rule). Jun 2024+ me established
//    media me Chinarajappa ke khilaf koi FIR/chargesheet/janch ya nyayik vikas
//    (adalat ka aadesh/notice) nahi mila. Isliye koi negative entry nahi.

// Andhra Pradesh — Batch 3: Kakinada jila (26-va rajya, foundation).
// Mined 2026-10-18. Har MLA ka fragment: ~/workspace/aapkaneta_scratch/ap3_worker_<slug>_works.ts.
// Fragment khud merge NAHI karna — parent QA/merge karega.

// vanamadi-venkateswara-rao — 0 works + 0 negatives (researched 2026-10-18)
// Pehchan: Vanamadi Venkateswara Rao (Kondababu), TDP, Kakinada City (Kakinada jila),
// 16th AP VS 2024-2029, Winner (2024, 113,014 vote; runner-up Dwarampudi Chandrasekhar Reddy YSRCP 56,442; antar 56,572).
// S/o (Late) Vanamadi Lovaraju; pesha: business (dry fish); halafname me 13 mamle.
// Fund note: AP me CDP/MLA fund officially unverified — allocated: null (andhra.ts).
// Whitelisted outlets par targeted searches (The Hindu, Deccan Chronicle, Times of India,
// New Indian Express, India Today, NDTV, Hindustan Times) me Jun 2024+ ki koi seat-level
// bhautik sanrachna lokarpan/shilanyas/G.O.-swikriti/dastaveji vidhansabha nateeja MLA ki
// vyaktigat bhoomika ke saath NAHI mili. Halafname ke 13 pending mamalon ka Jun 2024+ me
// koi nyayik vikas (FIR/chargesheet/giraftari/adalati aadesh) established media me nahi mila — isliye 0 negatives.
// Kakinada ke municipal kaam KMC ke bina MLA ki dastaveji bhoomika ke is profile me nahi.
// All entries Roman-script Hinglish per spec.
andhraWorks['vanamadi-venkateswara-rao'] = [];

// ==== REJECT-LOG ====
// (1) EV retrofitted fishing vessel launch, Kakinada (Deccan Chronicle, ~16 Oct 2026):
//     "Kakinada MLA Vanamadi Venkateswara Rao (Kondababu) will inaugurate the first electrical
//     fishing boat" — PRE-EVENT announcement (launch "Saturday" ko hona tha, report usse pehle ki).
//     Niyam: pre-event announcement source NAHI. Waise bhi Suraas Ventures Ltd. (private company)
//     ke commercial boat ka trial-run launch hai jahan MLA sirf mukhya-atithi ke roop me udghatan
//     karte — private-company samaroh, koi sarkari bhautik sanrachna nahi.
//     REJECT. URL: https://www.deccanchronicle.com/southern-states/telangana/ev-retrofitted-fishing-vessel-launches-today-1996509
// (2) Skills, Startup, Bharat Hub, Kakinada (The Hans India + New Indian Express, 6 Oct 2026):
//     Rajya Sabha MP Sana Satish Babu ka project — first phase Rs 5.30 crore unke Rajya Sabha
//     MP-LADS fund se; Kakinada City MLA Vanamadi Venkateswara Rao sirf karyakram me attendee
//     ke roop me maujood the. REJECT: "dusre neta ke karyakram me maujoodgi" + MP ke MPLADS kaam.
//     URLs: https://www.thehansindia.com/news/cities/kakinada/foundation-stone-laid-for-rs-20-cr-skill-hub-1129278
//     aur https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2026/Oct/06/skills-startup-hub-launched-to-boost-jobs-in-kakinada
// (3) CPIM call to avoid HAM funds for Kakinada (Deccan Chronicle, ~28 Sep 2026):
//     Report ke mutabik MLA ne "Rs 93 crore for the city’s development" lane ki yojna announce
//     ki thi — fund lane ki GHOSHNA matra; koi G.O./swikriti/lokarpan/shilanyas report me nahi.
//     REJECT: "sirf ghoshna". URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/cpim-call-to-avoid-ham-funds-for-kakinada-1991148
// (4) Cyclone Montha relief visits (Deccan Chronicle, 28 Oct 2025): MLA ne MP, Collector ke saath
//     coastal gaonon aur rehabilitation centres ka daura kiya — rahat kaam/daura.
//     REJECT: "daan/rahat kaam". URL: https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/montha-ministers-mlas-mps-overseeing-relief-efforts-in-coastal-villages-1913270
// (5) DDRC meeting, Kakinada (The Hindu, 11 Nov 2025): MLA meeting me sirf maujood the; protection
//     wall (Rs 16 crore) / Yeleru reservoir works (Rs 18 crore) / ghats (Rs 55 lakh) DDRC mantri
//     aur collector ke faisle — MLA ki vyaktigat bhoomika disclosed NAHI. REJECT: maujoodgi.
//     URL: https://www.thehindu.com/news/national/andhra-pradesh/ddrc-accelerates-uppada-coastal-wall-construction-and-ghats-development-in-kakinada/article70267011.ece
// (6) 4 fishermen detained in Sri Lanka return (Deccan Chronicle, ~Sep 2025): MLA + MLC + MP ne
//     Indian Coast Guard office me machharon ka swagat kiya. REJECT: koi kaam nahi, sirf maujoodgi.
//     URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/4-fishermen-detained-in-sri-lanka-return-recall-bitter-experience-1907230
// (7) GGH Kakinada Rs 35 crore action plan (medicaldialogues.in — aggregator, whitelist-bahar):
//     "MLA Vanamadi Venkateswara Rao and District Collector stated that an action plan worth
//     Rs 35 crore has been prepared" — yojna TAIYAAR karne ki ghoshna matra; koi sanction/nirman nahi.
//     REJECT: "sirf ghoshna" + whitelist-bahar. URL: https://medicaldialogues.in/news/health/hospital-diagnostics/rs-600-crore-infrastructure-launch-to-boost-ap-govt-hospitals-170249
// (8) GGH medical equipment Rs 78.77 lakh inauguration (medicalbuyer.co.in, Jul 2025, quoting The Hindu):
//     inaugurated by MLC Karri Padmasri + Collector; fund ONGC/University of Biofuels/Gemini Edible
//     Oil ka CSR — MLA report me zikr hi nahi. REJECT: CSR samaroh + MLA ki bhoomika nahi + whitelist-bahar.
//     URL: https://medicalbuyer.co.in/ggh-kakinada-receives-medical-equipment-worth-%e2%82%b9-78-77-lakh/
// (9) Jagananna housing layout Komaragiri irregularities inquiry demand (UNI, 17 Jun 2024):
//     UNI/univarta whitelist-bahar; waise bhi sirf janch ki MAANG, koi dastaveji nateeja nahi.
//     REJECT. URL: https://uniindia.com/~/kakinada-mla-demands-inquiry-into-irregularities-in-jagananna-housing-layout-in-komaragiri/States/news/3222433.html
// (10) Varuna Yagam at Balatripura Sundari Temple (UNI, 6 Oct 2026): dharmik anushthan, vikas kaam nahi.
//     REJECT + whitelist-bahar. URL: test.uniindia.com mirror (ap-dy-cm Pithapuram story page par linked).
// (11) Electric fishing boat trial-run post-event (UNI, 17 Oct 2026): MLA chief guest at Sura Ventures'
//     private trial run — mukhya-atithi samaroh, private company event. REJECT + whitelist-bahar.
//     URL: https://www.uniindia.com/south-india/ap-electric-fishing-boat-trial-run/217657
// (12) Gratitude boat rally for CM (ap7am.com, 30 Apr 2025): Matsyakara Bharosa Rs 20,000 announcement
//     par fishermen ki dhanyavad boat rally — MLA ne lead ki lekin ye political samaroh hai, vikas kaam nahi.
//     REJECT + whitelist-bahar. URL: https://www.ap7am.com/en/99880/gratitude-boat-rally-held-for-chief-minister-chandrababu-in-kakinada
// (13) Swachha Andhra Awards ceremony, Kakinada (thenewstrust.in, 2 Oct 2026): MLA "guest of honour"
//     ke roop me maujood. REJECT: samaroh + whitelist-bahar. URL: https://www.thenewstrust.in/69-people-receive-swachha-andhra-awards-in-kakinada/
// (14) Pre-term items — REJECT (sab Jun 2024 se pehle):
//     - Deccan Chronicle 7 Jan 2024: political allegation by then-MLA Dwarampudi Chandrasekhar Reddy.
//     - The Hindu 29 Sep 2021 (Mundra heroin case) + 4 Aug 2021 (deputy mayor boycott) + 2021 encroachment story: ex-MLA period.
//     - Deccan Chronicle (~2024): subsidised rice/dal at Rythu Bazaar (827+ days old).
//     - The Hindu 2018 Anna Canteen inauguration (2014-19 karyakaal).
// (15) CM Naidu Peddapuram announcements (PTI via The Week, 23 Aug 2025): Peddapuram seat ka mamla,
//     Kakinada City ke MLA se juda nahi. REJECT (seat ke bahar).
// (16) Negatives check: targeted searches ("arrest/FIR/court/bail" 2025-2026, whitelisted outlets) me
//     Vanamadi Venkateswara Rao par Jun 2024+ ka koi FIR, chargesheet, giraftari ya nyayik vikas NAHI mila.
//     Halafname ke 13 mamalon ka akele hona negative NAHI (niyam). 0 negatives.

// Batch: AP3 — works mining worker output (2026-10-18)
// MLA: Jyothula Nehru (jyothula-nehru) — TDP, Jaggampeta (Kakinada jila), 16th AP VS (2024-2029).
// Seat/mandals: Jaggampeta, Gokavaram, Gandepalle, Kirlampudi. Identity cross-checked from src/data/andhra.ts.
// RESULT: khaali profile — whitelist outlets par Jun 2024+ ka koi VALID work ya negative nahi mila.
// REJECT-LOG (sabhi ummedwar tathya whitelist-srot se padhe gaye):
// 1. UNI (uniindia, 2 Jul 2026): MLA ne Joint Collector ke saath Rajapudi (Jaggampeta mandal) me VB-G-RAM-G yojna ka jila-stariya shubharambh kiya — REJECT (UNI/univarta whitelist par NAHI; aur keval sarkari abhiyan ka shubharambh).
// 2. Deccan Chronicle (Yeruvaka Pournami, Jun 2026): Mamidada gaon me collector ke saath utsav me maujoodgi; collector ne beej baante — REJECT (dusre ka karyakram, keval maujoodgi; seed ki vitran MLA ki kaaryavaahi nahi).
// 3. Deccan Chronicle (2026-09-28): Godavari Pushkaralu "Godavari Calls" karyakram me maujoodgi — REJECT (keval maujoodgi).
// 4. Deccan Chronicle: Speaker ne Nehru ko Panel Speaker appoint kiya (Aug 2026) — REJECT (sadan-padiya niyukti; bhautik sanrachna ka kaam nahi).
// 5. Deccan Chronicle (Nov 2024): Visakha Dairy graft probe House committee ke chairman — REJECT (jaanch samiti; sadan-padiya kaam, VALID categories me nahi).
// 6. Deccan Chronicle: GO 243 se TTD Trust Board ke member (MLAs me se) — REJECT (board niyukti; kaam entry nahi).
// 7. New Indian Express (19 Feb 2026): Budget bahas me degree college har mandal me aur adhuri peyjal yojnaon ki maang — REJECT (sirf maang; dastaveji nateeja/mantri-ashwasan nahi).
// 8. The Hindu (12 Jan 2019, pre-term): 2014-19 karyakaal me minister ke karyakram me maujoodgi — REJECT (pre-term + maujoodgi).
// 9. Negatives sweep: halafname ke 3 purane mamle (CC 15/05, 23/05) — akele negative NAHI (niyam); Jun 2024+ me unke khilaf FIR/chargesheet/nyayik vikas ki koi established-media khabar nahi mili.
andhraWorks['jyothula-nehru'] = [];


// ==== East Godavari (Batch 3) ====
// nallamilli-ramakrishna-reddy — 0 works + 0 negatives
// Pehchan pakki: Anaparthy (East Godavari jila), BJP, Winner 2024.
// Age 58, Graduate Professional — B.E. (Civil), 1986; pesha Business; 32 mamle (2024 halafnama).
// Karyakaal: 16th AP Vidhan Sabha, Jun 2024+ (2024-2029).
// English media me is MLA ke vyaktigat lokarpan/shilanyas wale kaam khulne wale whitelist srot par NAHI mile —
// Deccan Chronicle ki canal-road shilanyas story aur The Hindu ki Dowleswaram barrage story text-fetch par khul hi
// nahi saki (403 / URL unavailable), isliye snippet-adhar par koi entry NAHI banayi. Profile khali — RETRY-LEADS neeche.

andhraWorks['nallamilli-ramakrishna-reddy'] = [];

// REJECT-LOG (nallamilli-ramakrishna-reddy, mined 2026-10-18)
// 1. The Hindu — "Women led by Anaparthi BJP MLA attack Sakshi office, destroy name board in East Godavari"
//    (article69679082, published 10 Jun 2025 07:07 pm IST, POORA PADHA GAYA): report ke mutabik 10 Jun 2025 ko
//    Anaparthy BJP MLA Nallamilli Rama Krishna Reddy apni mahila samarthakon ke saath Rajanagaram (East Godavari)
//    me Sakshi office ke bahar virodh me gaye; unhone Sakshi ka name board toda aur print edition ki pratiyan
//    jalayin (V.V.R. Krishnam Raju ki Amaravati par tippani ke virodh me). REJECT as negative: article me MLA ke
//    khilaf FIR/chargesheet/janch ka koi ullekh NAHI — sirf "East Godavari police have been deployed to prevent
//    any untoward incidents". Negative rule ke liye FIR/chargesheet/janch ya Jun 2024+ nyayik vikas lazmi hai —
//    ye poora nahi hota. RETRY-LEAD C dekho.
// 2. Deccan Chronicle — "Road Development Begins on Kakinada-Rajamahendravaram Canal Route" (26 Oct 2024, 4:20 AM IST,
//    snippet): "Anaparthi MLA Nallamilli Ramakrishna Reddy inaugurated roadworks from Illapalli to Kadiyam,
//    allocating Rs 6.3..." — vyaktigat shilanyas ke roop me VALID lagta hai (Sadak, news badge), LEKIN direct article
//    URL search se mila hi nahi (sirf https://www.deccanchronicle.com/tags/road-development tag page dikha, jisme
//    article ka link maujood NAHI tha) — page kholkar padha hi nahi ja saka, isliye snippet-only entry NAHI banayi.
//    RETRY-LEAD A dekho.
// 3. The Hindu — "Rs 150 crore sanctioned for replacing Dowleswaram Barrage gates, says A.P. Minister"
//    (article70643727, ~Feb 2026, snippet): Water Resources Minister Nimmala Ramanaidu ne Vidhan Sabha me bataya ki
//    Dowleswaram Barrage ke bache hue 117 gates ke badlav ke liye Rs 150.09 crore ki swikriti — "Replying to a question
//    by Anaparthi MLA Nallamilli Ramakrishna Reddy during the Question Hour". Vidhansabha prashn par mantri-jankari
//    VALID category hota (credit capped), LEKIN page text-fetch par 403 Access Denied par khula hi nahi —
//    SOURCES KHOLKAR PADHO rule par entry NAHI banayi. RETRY-LEAD B dekho.
// 4. Deccan Chronicle — "AP Allocates Rs 150 Crore To Replace Gates Of Historic Dowleswaram Barrage" (1937942, ~Feb 2026,
//    snippet): wahi barrage story ka DC version — page text-fetch par 403 Access Denied — entry NAHI banayi. RETRY-LEAD B.
// 5. Deccan Chronicle — "Anaparthi MLA Assures Jana Sena Cadre Of Better Coordination" (~Nov 2025): Pedapudi mandal me
//    Jana Sena karyakartaon ke saath samanvay ki baithak; development works me prathamikta ka ashwasan —
//    REJECT (rajnaitik baithak/ashwasan; koi bhautik sanrachna ya dastaveji swikriti nahi).
// 6. medicalbuyer.co.in ("Andhra to build 100-bed Dwarampudi Bullemma Area Hospital in Anaparthi", 9 Jul 2024, citing
//    The Hans India): Health Minister Y Satya Kumar Yadav ne Anaparthi ke Dwarampudi Bullemma Area Hospital me
//    Rs 13.85 crore ke 100-bed bhawan ka shilanyas kiya; MLA Nallamilli Ramakrishna Reddy aur MP Purandeshwari sirf
//    maujood the — REJECT (dusre neta — mantri — ke karyakram me maujoodgi; MLA ka koi shilanyas/lokarpan nahi).
// 7. Deccan Chronicle — "MP Purandeswari Says Rs 704 Crore Given for NH Roads in Her Constituency" (~Jun 2026): NH-16/
//    NH-216A/NH-216 ke karyon par MP Daggubati Purandeshwari ki media briefing; MLA sirf saath me maujood —
//    REJECT (dusre neta ka karyakram + kendriya NH pariyojna; MLA ki vyaktigat bhoomika ka ullekh nahi).
// 8. newkerala.com — "Andhra Govt Full Support Konaseema Firecracker Factory Victims" (8 Oct 2025): Kommaripalem
//    (Rayavaram mandal, Konaseema jila) me patakha factory aag — MLA ne ghatnasthal ka daura karke madad ka ashwasan
//    diya — REJECT (whitelist outlet nahi + sirf samvedna daura; ghatnasthal Anaparthy seat ke bahar bhi hai).
// 9. New Indian Express — "Anaparthi tense as YSRC MLA, TDP ex-MLA trade graft charges" (2 Mar 2024): pre-term
//    ghatna (chunav se pehle, karyakaal se bahar); police ne roknamaatmak giraftari ki, koi chargesheet ka ullekh
//    nahi — REJECT as negative (pre-term; Jun 2024+ me koi legal development nahi).
// 10. 2024 halafnama ke 32 criminal cases — akele halafnama pending mamle negative NAHI (rule) — koi entry nahi.
// 11. truepointnews epaper (17 Sep 2026): "MLA Calls for Awareness on El Nino and Water Conservation" — REJECT
//    (whitelist outlet nahi; sirf jagrukta appeal; koi bhautik sanrachna nahi).
// 12. Pre-term records (2017-18 ke G.O.Rt.No.203/693, 2018 me eastgodavari.ap.gov.in Dy CM wala R&B shilanyas):
//    2014–2019 karyakaal ke — scope se bahar, koi entry nahi.
// 13. en.wikipedia.org — whitelist nahi; sirf pehchan cross-check me istemal, mining srot nahi.
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. Deccan Chronicle (26 Oct 2024): "Road Development Begins on Kakinada-Rajamahendravaram Canal Route" —
//    Illapalli se Kadiyam tak sadak karyon ka MLA dwara shilanyas, Rs 6.3 crore ka ullekh (snippet kata hua hai —
//    poora figure "Rs 6.3..." se aage pata nahi). Direct URL search me nahi mila; DC site ke apne search se
//    dhoondho. Khul jaye to VALID entry (Sadak, badge news, credit capped — sarkari fund/disclosure page se check karo).
// B. The Hindu article70643727 aur Deccan Chronicle 1937942 (Dowleswaram Barrage, ~17 Feb 2026): text-fetch 403 —
//    live browser me kholkar dekho ki MLA ke Question Hour prashn ka role saaf likha hai ya nahi; ho to entry:
//    "Dowleswaram Barrage ke 117 gates ke badlav ke liye Rs 150.09 crore ki rajya-sarkari swikriti par mantri ne
//    MLA ke Vidhan Sabha prashn ka jawab diya" — category Paani, badge news, credit capped (prashn = credit ka
//    aadhaar, swikriti sarkar ki).
// C. Sakshi office attack (10 Jun 2025): kisi whitelist outlet me MLA ke khilaf FIR/case darj hone ya adalat me
//    peshi ki follow-up report mile to negative entry ban sakti hai (FIR/chargesheet/janch required).
// D. Telugu outlets (Eenadu/Andhra Jyothy/Sakshi web) whitelist se REJECT hain — unse mining ka koi prayas mat karna.

// bathula-balaramakrishna — QA-DROP: worker entry ka Hindu page 403 par khula hi nahi tha (snippet-only) — sakht niyam: khul na sakne wala page srot nahi; retry-lead. Fragment file preserved.
andhraWorks['bathula-balaramakrishna'] = [];

// adireddy-srinivas — QA-DROP: mandir vikas works shilanyas entry — dharmik sanrachna ‘bhautik sarkari sanrachna’ nahi + fund undisclosed (TG Batch 5 Revanth precedent). Fragment file preserved, retry-lead.
andhraWorks['adireddy-srinivas'] = [];

// Batch: AP3 — works mining worker output (2026-10-18)
// MLA: Gorantla Butchaiah Chowdary (gorantla-butchaiah-chowdary) — TDP, Rajahmundry Rural (East Godavari jila), 16th AP VS (2024-2029), varishth/former MLA (saat baar ke MLA, NTR cabinet me civil supplies mantri; Jun 2024 me Pro-tem Speaker).
// Seat cross-check src/data/andhra.ts se (Rajahmundry Rural; age 78; 2 criminal cases per affidavit).
// RESULT: khaali profile — whitelist outlets par Jun 2024+ ka koi VALID work ya negative nahi mila.
// REJECT-LOG (sabhi ummedwar tathya whitelist-srot se padhe gaye; dates page ke khud ke publication stamp se):
// 1. Deccan Chronicle (published 31 Aug 2026, khud padha): Labour minister Vasamsetti Subhash ALONG WITH Rajamahendravaram Rural MLA G. Butchaiah Chowdary ne Madhavarayudupalem (Kadiyam Mandal, East Godavari) me nirmit cement roads ka uddghatan kiya — REJECT (karyakram mantri ka tha, MLA sirf saath me; sadak ki lagat/fund srot me disclosed nahi; "dusre neta ke karyakram me maujoodgi"; MLA ki vyaktigat bhoomika/fund ka koi dastavej nahi).
// 2. New Indian Express (published 20 Sep 2026, khud padha): Tanguturi Prakasam Pantulu Awards-2026 Govt Arts College me; MLA chief guest; "He assured support for development works... two shuttle courts costing Rs 50 lakh and 100 lorry loads of soil for ground levelling" — REJECT (samaroh me ghoshna/aashwasan matra; mukhy-atithi maujoodgi; ghoshit kaam ka koi post-event/palan ka reporting nahi; sirf ghoshna niyam se bahar).
// 3. New Indian Express (published 16 Feb 2026, snippet+URL): "Rs 104.61 crore allocated for irrigation works in East Godavari" — 2026-27 Budget me sinchai aavantan; MLA Gorantla Butchiah Chowdhary ne "welcomed the move" — REJECT (sarkar ka budget-ghoshna; MLA ka credit sirf swagat-tippani; unka vyaktigat lokarpan/shilanyas/maang-nateeja nahi).
// 4. Times of India (Jun 2024, khud padha): Governor ne Gorantla Butchaiah Chowdary ko Pro-tem Speaker ke roop me shapath dilayi — REJECT (sadan-padiya niyukti; bhautik sarkari sanrachna ka kaam nahi).
// 5. The Hindu (27 Sep 2023, pre-term): AP HC ne judges-abuse criminal contempt petition me MLA Gorantla Butchaiah Chowdary sahit 27 ko notice — REJECT (Sep 2023 = pre-term; Jun 2024+ me is mamle me MLA ke khilaf FIR/chargesheet ya nyayik vikas (aadesh/saza/notice) ki established-media khabar nahi mili; contempt notice akela negative nahi banta).
// 6. Tupko.com: "3 TDP MLAs Suspended from Andhra Assembly" (Atchannaidu, Gorantla Butchaiah Chowdary, Nimmala Ramanaidu) — REJECT (niyam-khand: purana budget-session mamla (Jagan-shasan kaal), aur srot whitelist me nahi).
// 7. telugubulletin.com (pre-term ~2020): MLA ke PA Chitikela Sandeep ki giraftari (Hukumpeta Vinayaka statue case) — REJECT (aaropi MLA nahi, PA hai; pre-term; srot whitelist me nahi; "parivar ke mamle bahar" ke anuroop — MLA khud aaropi nahi).
// 8. New Indian Express (30 Apr 2025): "Former MP Gorantla comes out on bail" — Gorantla MADHAV (YSRCP, poorv MP) ki khabar hai — REJECT (pehchan galat vyakti se; ye MLA Gorantla Butchaiah Chowdary nahi).
// 9. Halafname ke 2 criminal cases (2024) — akele negative NAHI (niyam); Jun 2024+ me FIR/chargesheet/nyayik vikas ki koi established-media khabar nahi mili.
andhraWorks['gorantla-butchaiah-chowdary'] = [];

// AapkaNeta.org — Andhra Pradesh Batch 3 (AP-26 / 26)
// Worker: Muppidi Venkateswara Rao — TDP, Kovvur (SC), East Godavari, 16th AP VS (2024-2029)
// Seat/party/background: src/data/andhra.ts (slug 'muppidi-venkateswara-rao', age 54, MSW Nagarjuna University, advocate,
// 10 halafnama cases — sab pre-term FIRs 2019-2023, koi Jun 2024+ legal development nahi).
// RESULT: khaali — Jun 2024+ ka koi aisa kaam whitelisted source me nahi mila jisme
// MLA ki vyaktigat bhoomika ke saath kisi bhautik sarkari sanrachna ka lokarpan/shilanyas,
// GO-backed swikriti, ya dastaveji nateeja ho.
// Whitelist me jo hits mile, wo ya to doosre neta ke karyakram (MP/minister) me maujoodgi,
// ya sarkari abhiyaan/keval nirikshan thay — quality rules ke tahat REJECT. Details neeche.

andhraWorks['muppidi-venkateswara-rao'] = [];

/*
REJECT-LOG (Muppidi Venkateswara Rao — Kovvur SC, 2024-2029):

1. The Hindu, 15 Aug 2024 — "MP promises modernisation of Kovvada irrigation channel"
   https://www.thehindu.com/news/national/andhra-pradesh/mp-promises-modernisation-of-kovvada-irrigation-channel/article68525129.ece/amp/
   REJECT: Sirf MP D. Purandeswari ka WADA (modernisation work "promised"), MLA sirf maujood tha.
   "Dusre neta ke karyakram me maujoodgi" + "sirf ghoshna" — vaidh work nahi.

2. Deccan Chronicle, Jul 2025 — "Ministers says Rs 350 crore released for repairs of projects, Arthur barrage"
   https://www.deccanchronicle.com/southern-states/andhra-pradesh/ministers-says-350-crore-released-for-repairs-of-projects-arthur-barrage-1895295
   REJECT: Minister Nimmala Ramanaidu chief guest; Annadata Sukhibhava sarkari yojana ka karyakram;
   MLA ne sirf adhyakshata ki. "Sarkari abhiyaan ke keval shubharambh" + vyaktigat bhoomika nahi.

3. Deccan Chronicle, Nov 2024 — "8 Cr Pilgrims to Participate in 2027 Godavari Pushkaralu"
   https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/8-cr-pilgrims-to-participate-in-2027-godavari-pushkaralu-1834186
   REJECT: MLA sirf yojana-baithak me attendees me naam-matra maujood — koi kaam/daayitva nahi.

4. New Indian Express, 25 Nov 2025 — "Record paddy procurement of 51 lakh tonnes underway"
   https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Nov/25/record-paddy-procurement-of-51-lakh-tonnes-underway-in-andhra-says-minister-nadendla
   REJECT: Mantriyon ka khet-nirakshan; MLA saath me sirf maujood. "Sirf nirikshan/daura".

5. Deccan Chronicle, Aug 2026 — "Rs 3,050-Crore Godavari Water Grid Project Underway For Drinking Water Supply"
   https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/3050-crore-godavari-water-grid-project-underway-for-drinking-water-supply-1983298
   REJECT: Vijjeswaram project (Kovvur mandal cover) ka zikr hai, par MLA ka credit kahin nahi —
   "MLAs of the region have suggested" generic line hai; vyaktigat bhoomika disclosed nahi.

6. TruePointNews e-paper (epaper.truepointnews.com), 19 Jul 2025 — Tallapudi mandal me JJM OHSR tank + CC roads
   https://epaper.truepointnews.com/media/2025-07/19th--july_point_epaper_ap.pdf
   REJECT (double): source whitelist me NAHI (chhota Telugu e-paper), aur ye MP D. Purandeswari ke
   karyakram hain jisme MLA sirf saath tha — "dusre neta ke karyakram me maujoodgi".

7. Times of India liveblog, Jun 2024 — chunav-jeet ki khabar; TOI vijayawada piece (Ugadi house story, 2025)
   https://timesofindia.indiatimes.com/city/vijayawada/poor-cobbalar-gets-new-house-on-ugadi-as-collector-keerthi-fulfils-andhra-pradesh-cms-assurance/articleshow/129728767.cms
   REJECT: jeet = chunav khabar, work nahi; Ugadi ghar-wali story me MLA ki bhoomika "guidance and support"
   maatra — mukhya shrey CM/collector ka, fund disclosed nahi; personal lokarpan/shilanyas nahi.

NEGATIVES: Halafname me 10 purane cases (2019-2023 ke FIRs — myneta.info affidavit, myneta NOT whitelist):
"Halafname ke pending mamle akele negative NAHI" niyam se bahar. Whitelisted source me MLA KHUD aaropi ho,
aisi koi Jun 2024+ FIR/chargesheet/nyayik vikas ki khabar nahi mili. Isliye negative entry NAHI.
*/

// =====================================================================
// AP3 WORKS-MINING BATCH — andhra.ts
// MLA: Kandula Durgesh (JSP), Nidadavole (East Godavari), Tourism mantri,
// 16th AP VS 2024-2029 (Jun 2024 se)
// Worker run: 2026-10-18
// Record padha gaya: src/data/andhra.ts lines 1488-1522 (slug kandula-durgesh,
// party JanaSena Party, seat Nidadavole, post MLA; halafnama: age 64,
// M.A. Economics 1984, criminalCases 7, assets Rs 13,82,26,881,
// liabilities Rs 1,93,82,439, myneta candidate_id 405; election: 2024 me
// Nidadavole se 1,02,699 vote, runner-up Geddam Srinivas Naidu (YSRCP,
// 69,395) ko 33,304 maton se haraya; cabinet me Tourism mantri).
// =====================================================================
// MANTRI-NIYAM APPLIED: Paryatan-vibhag ke rajya karyakram / rajya-stariya
// ghoshnaen poori tarah bahar rakhi gayin (Akhanda Godavari, Gandikota,
// Veligonda, Swadesh Darshan, World Tourism Day, Rushikonda, gurajada
// theatre, Nandi awards, Pushkarams, Rajahmundry airport flight flag-off,
// GTM 2026, Spain summit — sab tourism-portfolio, sab reject).
// Sirf Nidadavole seat ke andar ke dastaveji vyaktigat kaam khoje gaye.
// Search sources: The Hindu, New Indian Express, Deccan Chronicle,
// Times of India, The Hans India (whitelist).
// RESULT: Koi VALID work nahi mila — profile khali rehta hai.
// NEGATIVES: Jun 2024+ me koi FIR/chargesheet/adalati vikas established
// media me nahi mila. Halafname ke 7 purane (2020-21, Kakinada) pending
// mamle akele negative nahi (koi Jun 2024+ legal development nahi).
// =====================================================================
// REJECT-LOG (sab padhe gaye, sab reject — karan ke saath):
// ---------------------------------------------------------------------
// 1. The Hindu, 2026-09-01 (via NIE): "Veligonda project will be made a
//    tourism hub" — tourism mantri ka rajya-stariya tourism bayan;
//    Nidadavole seat se sambandh nahi; event me sirf maujoodgi.
//    REJECT: mantri-niyam + seat-bahar.
// 2. The Hindu, 2025-06-13: "Stone will be laid for Akhanda Godavari
//    project on June 19" — PRE-EVENT announcement; project tourism
//    portfolio (SASCI central scheme), shilanyas Deputy CM + MP ne kiya.
//    REJECT: pre-event announcement + mantri-niyam + vyaktigat bhoomika nahi.
// 3. TOI, 2026-09-01: Akhanda Godavari circuit me Nidadavolu ka zikr —
//    mantri ka Nidadavolu se bayan, state tourism project.
//    REJECT: mantri-niyam (rajya-stariya tourism karyakram).
// 4. TOI, 2025-08: Gandikota tourism project foundation (CM ne kiya) —
//    mantri ka Nidadavolu se diya bayan, Kadapa ka project.
//    REJECT: mantri-niyam + seat-bahar + sirf bayan.
// 5. Deccan Chronicle, 2026-10-02: "780 new pensions for Nidadavolu town"
//    — sarkari pension yojna ka vitaran/ghoshna.
//    REJECT: sarkari abhiyan ka vitaran (raahat/yojna distribution).
// 6. Deccan Chronicle, 2025-11: "Swarna Nidadavolu Vision 2047" — 5K run
//    flag-off + ghoshna. REJECT: sirf ghoshna, koi dastaveji kaam nahi.
// 7. Deccan Chronicle, 2025-05: "Bridges, Yerrakalva, Havelock proposals
//    to be tabled to CM" — Kamsalipalem-Madhavaram bridge, Nidadavole-
//    Yernagudem road, Chinakasirevu bridge: SAB SIRF PRISTAV.
//    REJECT: sirf maang/prastav, koi dastaveji swikriti/kaam nahi.
// 8. The Hindu, 2025-05-18: "Permanent solution promised to flooding of
//    farmlands in Nidadavole" — Yerrakaluva baadh ka ashwasan (sirf vada)
//    + Singavaram me 100 farm implements (Rs 1.99 crore) ka vitaran.
//    REJECT: sirf vada/ashwasan + sarkari yojna ka vitaran samaroh.
// 9. The Hindu, 2025-10-19/20: "NABARD to fund Rs 15 crore road projects
//    in Nidadavolu" — GHOSHNA matra (official release); kendriya
//    sarkar ke Rs 8 crore ka bhi sirf consent.
//    REJECT: sirf ghoshna, koi shilanyas/lokarpan reporting nahi mili.
// 10. The Hindu, 2025-11-29: "Development of railway stations sought ahead
//     of Godavari Pushkarams" — Nidadavolu station vikas ki MAANG review
//     meeting me. REJECT: sirf maang + kendriya (railway) pariyojna.
// 11. TOI, 2026-10-13: "Minister helps AP woman stranded in Kuwait" —
//     vyaktigat hastakshep (raahat). REJECT: daan/raahat kaam.
// 12. UNI (uniindia), 2025-08-24: "Durgesh hands over CMRF aid to 59
//     beneficiaries" — CMRF vitaran (Rs 29.72 lakh). REJECT: daan/raahat
//     + source whitelist se bahar (UNI).
// 13. The Pioneer (pynr.in), 2024-09: "Mini-stadium to be completed soon"
//     — stadium "within a month" inaugurate karne ki GHOSHNA.
//     REJECT: sirf ghoshna + source whitelist me nahi.
// 14. The Hans India, 2026-10-06: "Theatre will regain past glory" —
//     Gurajada theatre camps (GO RT 1933), rajya-stariya sanskriti
//     portfolio. REJECT: mantri-niyam (rajya karyakram).
// 15. The Hans India, 2026-09-28: "Govt aims to make AP a leading tourism
//     destination" — World Tourism Day bayan. REJECT: mantri-niyam.
// 16. NIE, 2026-10-09: "Spain tour offered insights" — videsh daure ka
//     bayan. REJECT: mantri-niyam + seat se sambandh nahi.
// 17. Lokmat Times (IANS), 2025-06-26: "Foundation laid for Akhanda
//     Godavari project" — shilanyas Union mantri ne kiya (Shekhawat),
//     Durgesh ki vyaktigat bhoomika nahi.
//     REJECT: mantri-niyam + dusre neta ka kaam + source whitelist me nahi.
// 18. Negative check: "Kandula Durgesh" FIR/chargesheet/court search me
//     Jun 2024+ ka koi aarop/adalati vikas established media me nahi.
//     myneta/ADR halafname ke 7 purane Kakinada mamle (FIR 2020-21,
//     charges framed 2019-2021) — pre-term, koi Jun 2024+ legal
//     development nahi. REJECT as negative (halafname akele negative nahi).
// =====================================================================

andhraWorks['kandula-durgesh'] = [];

// AP batch 3 — MLA: Maddipati Venkata Raju (TDP, Gopalapuram SC, East Godavari), 16th AP VS (2024-2029)
// Record: src/data/andhra.ts slug 'maddipati-venkata-raju' — age 44, M.Sc. (Information Systems) 2003,
// S/o Late Yohan Maddipati, criminalCases 4 (halafnama: 4 pre-2024 FIRs), myneta candidate_id=41
// Mined: 2026-10-18. Whitelist: The Hindu, NIE, HT, NDTV, India Today, TOI, Deccan Chronicle, The Hans India, PTI.
// Result: 0 valid works — khali profile.

// REJECT-LOG (sab khola/padha gaya):
// 1. Deccan Chronicle 'Tiger Strays Into Plain Areas From Forest' (9 Oct 2026) — MLA ne forest/mining
//    officials ko tiger ki movement par logon ko savdhaan karne ke nirdesh diye — sirf nirdesh/samanvay,
//    koi bhautik sarkari sanrachna/lokarpan/shilanyas/sanction NAHI — REJECT.
//    URL: https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/tiger-strays-into-plain-areas-from-forest-1994297
// 2. Deccan Chronicle 'Seven Arrested For Sacrificing Goat, Splashing Blood On Jagan Banner' (Feb 2026) — MLA ne
//    ghatna ki ninda ki; ghatna/vyakt statements hi, kaam NAHI — REJECT.
//    URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/seven-arrested-for-sacrificing-goat-splashing-blood-on-jagan-banner-1926678
// 3. Deccan Chronicle 'Case registered against former MLA Jakkampudi Raja under SC, ST Act' (Sep 2025) — FIR me
//    AAROPI poorv MLA Jakkampudi Raja hai (derogatory remark ke liye), Maddipati Venkata Raju complainant-side
//    me naam hai, aaropi column me NAHI — negative rule ('MLA KHUD aaropi') lagu NAHI hota — REJECT.
//    URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/bapatla-man-salmon-raju-dies-in-road-accident-in-vietnam-1984788
// 4. The Hindu 'State suffered due to YSRCP's destructive policies after bifurcation: NDA legislators' (Feb 2026) —
//    MLA ne Governor ke abhibhashan par Motion of Thanks move kiya — sirf vidhansabha bhashan, koi dastaveji
//    nateeja/mantri-ashwasan/kaam NAHI — REJECT.
//    URL: https://www.thehindu.com/news/national/andhra-pradesh/andhra-pradesh-suffered-due-to-bifurcation-ysrcps-destructive-policies-say-nda-legislators/article70624535.ece/amp/
// 5. Deccan Chronicle 'Rs 6,000-crore Housing for All scam under YSRC rule: Minister' (Feb 2026) — MLA ne sawal
//    uthaya, mantri ne jawaab me janch/scheme data diya — sirf prashn, koi constituency-tied dastaveji
//    nateeja/ashwasan NAHI — REJECT.
//    URL: https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/6000-crore-housing-for-all-scam-under-ysrc-rule-minister-1939698
// 6. New Indian Express 'Diarrhoea outbreak under control, says East Godavari Collector' (18 Mar 2025) — MLA ne
//    kaha CM ke nirdesh par medical teams tainat hain — health emergency me bayan/samanvay, koi bhautik
//    sanrachna/fund disclosure NAHI — REJECT.
//    URL: https://www.newindianexpress.com/states/andhra-pradesh/2025/Mar/18/diarrhoea-outbreak-under-control-says-east-godavari-collector
// 7. Deccan Chronicle 'APLA's Estimates' Committee Reviews Nellore Budget Allocations' (Nov 2025) — committee
//    meeting me samanya bayan — REJECT.
//    URL: https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/aplas-estimates-committee-reviews-nellore-budget-allocations-1934777
// 8. maddipati.com (MLA ki khud ki site) — 'Development Plans for Gopalapuram' sirf paanch-sutriya ROADMAP
//    (yojnaaen, na koi ho chuka kaam) — whitelist me NAHI, aur pre/post-event reporting bhi NAHI — REJECT.
//    URL: https://maddipati.com/
// 9. New Indian Express 'Political atmosphere heats up in Andhra Pradesh's Gopalapuram segment' (24 Apr 2024) —
//    pre-election campaign analysis, term se pehle — REJECT.
//    URL: https://www.newindianexpress.com/states/andhra-pradesh/2024/Apr/24/political-atmosphere-heats-up-in-andhra-pradeshs-gopalapuram-segment
// NEGATIVES: halafnama ke 4 cases (Crime No. 243/2023 Gopalapuram PS, 468/2023 Devarapalli PS, 492/2023
// Devarapalli PS, 187/2023 Tadepalligudem Town PS) sab pre-term 2023 ke hain — halafnama pending cases akele
// negative NAHI. Whitelisted media me Jun 2024+ ka koi FIR/chargesheet/janch/nyayik vikas MLA khud par
// NAHI mila. Jakkampudi Raja wala SC/ST Act FIR (upar #3) MLA par NAHI hai. Isliye koi negative entry NAHI.

andhraWorks['maddipati-venkata-raju'] = [];


// ==== Konaseema (Batch 3) ====
// BATCH AP3 | MLA: vasamsetti-subhash (Vasamsetti Subhash, TDP, Ramachandrapuram, Konaseema)
// Vibhag: Labour, Factories, Boilers & Insurance Medical Services (mantri, 12 Jun 2024 se)
// Period: 2024-2029 | Karyakshetra: Ramachandrapuram seat ke andar ke vyaktigat works
// Natija: KHAALI profile — koi qualifying works entry nahi mili.
// Mantri-niyam ke tahat state-level vibhagiya karyakram/rajya faisle bahar rakhe gaye.
// Whitelisted sources (The Hindu, Deccan Chronicle) me mile seat-sambandhi ullekh sirf
// ghoshna/daura/samaroh nikle; unko REJECT kiya gaya (REJECT-LOG neeche).
andhraWorks['vasamsetti-subhash'] = [];
// REJECT-LOG (batch AP3 | vasamsetti-subhash):
// 1. DC 07 Jan 2025 "Ramachandrapuram to will become a healthy constituency: Minister"
//    — blood bank, dialysis unit, orphan homes, nutrition kits, Healthy Heart Mission ki GHOSHNA;
//    post-event reporting me koi dastaveji poorti nahi. REJECT: sirf ghoshna (announcement).
// 2. The Hindu 23 Dec 2024 "Commercial fodder farming to be allowed in 350 acres of govt. land
//    along Godavari river, says Labour Minister" — Ramachandrapuram AC me 350 acre par
//    vyavsayik chara kheti ki ASSURANCE MSME meeting me; koi bhoomika/kaam dastavej me nahi.
//    REJECT: sirf ghoshna.
// 3. UNI 14 Dec 2025 "AP: Minister Subhash opens Kalyana Mandapam" — Kapu Kalyana Mandapam,
//    Annayyapeta (Ramachandrapuram rural mandal) lokarpan; srot UNI (whitelist bahar) aur fund
//    MPLADS (RS Pilli Subhash Chandra Bose, Rs 30 lakh) + tatkalin MLA Thota Trimurthulu
//    (Rs 25 lakh) se bana — MLA ki vyaktigat bhoomika sirf lokarpan. REJECT: non-whitelisted
//    source + fund me MLA ki bhoomika nahi.
// 4. UNI 06 May 2025 "Industrial parks to come up in 175 Andhra Assembly constituencies"
//    — Adivarapupeta Gurukula Pathasala (Draksharama), 4 acre, Rs 11.5 crore ki ANNOUNCEMENT;
//    srot UNI. REJECT: pre-event announcement + non-whitelisted source.
// 5. UNI 16 Jun 2025 "AP: Minister Subhash inaugurates Mega Blood donation camp"
//    — Balusu Kalyana Mandapam, Ramachandrapuram me blood donation camp ka shubharambh.
//    REJECT: keval samaroh/shubharambh (koi bhautik sanrachna nahi) + non-whitelisted source.
// 6. UNI 22 Dec 2025 "AP: Minister perform Bhoomi Puja for Ayushman arogya mandirs"
//    — Annayyapeta me Ayushman Arogya Mandir ke nirmaan ki bhoomi pooja. REJECT: kendriya
//    swasthya abhiyan ka shubharambh (mantri-niyam bahar) + non-whitelisted source.
// 7. The Hindu 10 Oct 2025 "Toll in firecracker unit explosion in Konaseema district goes up to
//    eight" — V. Savaram dhamake par minister Ramachandrapuram Area Hospital pahunche, peedit
//    parivaron se mile, labour kanoonon ke tahat muavze ka ashwasan. REJECT: sirf daura/nirikshan
//    + muavza-ashwasan (kaam/kaam-poorti nahi).
// 8. The Hindu 12 Aug 2025 "Konaseema youth told to join politics for service" — Ramachandrapuram
//    me Konaseema Youth Festival me mukhya-atithi, job mela ka vaada. REJECT: samaroh + vaada.
// 9. The Hindu 16 Mar 2025 "Andhra Labour Minister asks industries to enhance safety at workplaces"
//    — Kakinada me 54th National Safety Week rally. REJECT: seat ke bahar (Kakinada) + samaroh.
// 10. TruePointNews epaper 17 Sep 2026 ka dawa: "development works worth around Rs 270 crore had
//     been taken up in Ramachandrapuram" — non-whitelisted source + bina itemization ke samagra
//     dawa. REJECT: source + dastavej ka abhaav.
// NEGATIVES: koi nahi. myneta.info halafnama me 12 criminal cases (2010-2022, Amalapuram
// dange samet) purva-karyakaal ke hain; Jun 2024 ke baad unhe aaropi banane wali koi FIR,
// chargesheet, ya nyayik vikas whitelisted sources me nahi mili. Halafname ke pending mamle
// akele negative nahi bante. DC 2025 ka "Minister warns social media activists against false
// campaign" unka khandan/kanuni notice hai, unpar aarop nahi.
// Push/deploy: NAHI kiya gaya (nirdesh anusar).

// Batch: AP3 — Andhra Pradesh works-mining (16th AP VS, 2024-2029)
// MLA: Datla Subba Raju (Buchibabu) — TDP, Mummidivaram (Konaseema), 16th AP VS (Jun 2024 se). S/o Venkata Satyanarayana Raju. Pesha: Business. Age 51. Education: 12th Pass (Intermediate, S.K.B.R. College, Amalapuram, 1988-90). 2014 me bhi Mummidivaram se TDP se jeete the; 12 Nov 2024 ko Assembly whip appoint hue.
// Record: src/data/andhra.ts (slug 'datla-subba-raju').
// Mined: 2026-10-18. Whitelisted media me Jun 2024+ ka koi vyaktigat lokarpan/shilanyas/manjar ki bhautik sarkari sanrachna, koi GO-backed swikriti, aur koi dastaveji Vidhansabha-prashn ka nateeja nahi mila. Profile khaali.
// Push/deploy: NAHI kiya (niyam ke anusar).

andhraWorks['datla-subba-raju'] = [];

// REJECT-LOG (is MLA ke naam par mile lekin niyamo par khaarij hue):
// 1. Deccan Chronicle (3 Jan 2025) + New Indian Express (4 Jan 2025): Tallarevu (Kakinada/Konaseema) me 23,450 machhuaron ko ONGC pipeline compensation ke Rs 148.37 crore ke cheque vitaran — karyakram me ministers K. Atchannaidu, Kollu Ravindra, Vasamsetti Subhash ke saath Mummidivaram MLA Datla Subba Raju maujood (NIE version me "presided over" kaha gaya hai) — REJECT: dusre netaon (mantriyon) ke karyakram me maujoodgi; rakam ONGC (kendriya PSU) ki compensation hai, MLA ki vyaktigat pahal/manjar nahi; vyaktigat bhoomika ka koi praman nahi.
// 2. The Hindu (10 Jun 2025): Collector R. Mahesh Kumar ki ONGC/GAIL ke saath CSR baithak me MLAs Vegulla Jogeswara Rao, Datla Subba Raju, Bandaru Satyananda Rao, Deva Vara Prasad maujood — MLAs ne ONGC se kshatigrast sadkon ki marammat ke liye CSR fund maanga — REJECT: sirf maang; baithak me upasthiti ke siva dastaveji nateeja/kaam report me nahi.
// 3. GO (G.O.Rt.No.614, Plg VI, 26-12-2018) + archive.org PDF (GO 2018-04-23): 2018-19 me MLA Datla Subba Raju ke prastav par Mummidivaram seat ke liye Special Development Fund se Rs 50 lakh (Kesanakurru, I.Polavaram me Kshatriya Community Hall) aur Rs 200 lakh (vividh vikas karya) ki administrative sanction — REJECT: pre-term (2018, pehli padi ka karyakaal), is batch ka period 2024-2029 hai.
// 4. firsttender.com: Mummidivaram-Mukteswaram sadak ki urgent repairs ka tender (Rs 24.17 lakh, Oct 2024) aur Dr B R Ambedkar Gurukulam for Girls, Mummidivaram me additional works ka tender (Rs 10 lakh, 4th call, 2026) — REJECT: source whitelist me nahi (tender portal), aur kisi me bhi MLA ki bhoomika/prastav ka praman nahi.
// 5. The Hindu (29 Jul 2025): Rs 1,650 crore ka Konaseema drinking water project (Jal Jeevan Mission) — quote de rahe MLA Razole ke Deva Varaprasad hain, Datla Subba Raju ka ullekh bhi nahi — REJECT: dusri seat ke MLA ka kaam.
// 6. Deccan Chronicle (Jan 2025): Sankranti par Godavari districts me cockfight betting (Rs 700 crore) report me "Mummidivaram MLA Datla Subba Raju in Mummidivaram" — REJECT: sirf karyakram me upasthiti ka ullekh, karya nahi.
// 7. Deccan Chronicle (15 Oct 2026): Rajya Sabha MP Sana Satish ki Konaseema alliance coordination baithak me Mummidivaram MLA ki upasthiti — REJECT: party/sammanvay baithak, vikas karya nahi.
// 8. Negatives: ap7am.com (23 Jul 2016): Katrenikota land transaction me police case (HC notice ke baad FIR) — REJECT: source whitelist me nahi, pre-term (2016) ka mamla, aur Jun 2024+ me is par koi nyayik vikas established media me nahi mila. Halafnama ka 1 pending criminal case akele negative nahi. MLA ke khilaf Jun 2024+ me koi FIR/chargesheet/nyayik vikas established media me nahi mila.

// Batch: AP3 — works mining worker output (2026-10-18)
// MLA: Aithabathula Anandarao (aithabathula-anandarao) — TDP, Amalapuram SC (Konaseema jila), 16th AP VS (2024-2029).
// Seat/mandals: Amalapuram, Allavaram, Uppalaguptam. Identity cross-checked from src/data/andhra.ts.
// RESULT: khaali profile — whitelist outlets par Jun 2024+ ka koi VALID work ya negative nahi mila.
// REJECT-LOG (sabhi ummedwar tathya whitelist-srot se padhe gaye):
// 1. Deccan Chronicle (2026-10-17): sthaniya nikay chunav nominations ke dauran SC/BC samuday ke neta MP Sana Satish Babu aur Amalapuram MLA ke samaksh TDP me shamil hue — REJECT (rajnaitik karyakram, keval maujoodgi; bhautik sanrachna ka kaam nahi).
// 2. Deccan Chronicle (Dec 2025): Konaseema ke log Mandapeta ko East Godavari me milane ka virodh; Amalapuram chamber of commerce ne collector aur Amalapuram MLA ko arzi di — REJECT (dusre ka mudda, sirf arzi; MLA ki vyaktigat kaaryavaahi nahi).
// 3. Times of India (16 Sep 2024, page kholkar padha): Ravulacheruvu, Amalapuram me avaidh patakha-vismfot; MLA ne police ke saath ghatnasthal ka daura kiya — REJECT (sirf nirikshan/daura; koi kaam nahi).
// 4. UNI (test.uniindia.com, Feb 2026): Konaseema ke kayi MLA Dy. CM Pawan Kalyan se mile, vikas karyon ke liye dhanyavad diya — REJECT (UNI/univarta whitelist par NAHI; aur vyaktigat kaam nahi, keval dhanyavad).
// 5. Deccan Chronicle (2019): 2018 ke GO se 2012 ke rioting (IPC 147/427/341) case ki prosecution wapas — REJECT negative (pre-term withdrawal; Jun 2024+ me koi nyayik vikas nahi; halafname ke pending mamle akele negative NAHI).
// 6. YouTube (Varuna Yagam, Amalapuram Venkateswara Swamy Temple): MLA ne varsha ke liye yagam kiya — REJECT (YouTube whitelist par NAHI; dharmik anushthan, sarkari sanrachna ka kaam nahi).
// 7. firsttender.com (Amalapuram tenders, Oct 2026): R&B road G. Agraharam (Rs 162 lakh) aur mandir repair ke tenders — REJECT (tender listing source MLA ki bhoomika/fund disclosure se nahi jodta).
// 8. The Hindu (Sep 2025): Kapileswarapuram me industrialist "Ananda Rao" ki centenary — REJECT (alag vyakti, MLA nahi).
// 9. Negatives sweep: halafname ke 3 purane mamle (rioting-type, 2014-affidavit era) — akele negative NAHI (niyam); Jun 2024+ me unke khilaf FIR/chargesheet/janch/nyayik vikas ki koi established-media khabar nahi mili.
andhraWorks['aithabathula-anandarao'] = [];

// Batch: AP3 — works mining worker output (2026-10-18)
// MLA: Deva Varaprasad (deva-varaprasad) — JanaSena Party, Razole (SC) (Konaseema jila), 16th AP VS (2024-2029); PRS mlatrack par term start 04-Jun-24.
// Seat cross-check src/data/andhra.ts se (Razole (SC), JSP; 95,514 vote jeet, margin 39,011; Retd IAS, M.Sc Botany; halafname me 0 criminal cases).
// RESULT: koi VALID work nahi mila (whitelist outlets par Jun 2024+ ki post-event reporting me vyaktigat lokarpan/shilanyas, itemized sanction, GO-backed swikriti ya Vidhansabha-maang ka dastaveji nateeja nahi). Koi negative nahi mila.
// REJECT-LOG (sabhi ummedwar tathya whitelist-srot se khud padhe gaye; dates page ke khud ke publication stamp se):
// 1. The Hindu (published 30 Dec 2025, khud padha): Sankaraguptam Major Drain modernisation (Rs 20.77 crore, 8.5–16.5 km desilting + embankments) ka shilanyas Deputy CM Pawan Kalyan ne virtually kiya; Razole MLA Deva Varaprasad sirf karyakram me upasthit the — REJECT (dusre neta ke karyakram me maujoodgi; state-govt kaam me MLA ki koi dastaveji bhoomika/fund-disclosure nahi).
// 2. New Indian Express (updated 08 Jan 2026, khud padha): Irusumanda (Malikipuram mandal) ONGC Mori-5 gas blowout ke baad MLA ne prabhavit graminon ke liye compensation ki maang ki aur Lakkavaram me Rs 25 crore ka multi-specialty hospital banane ka “suggested” — REJECT (sirf maang/prastav; koi swikriti/fund-sanction ya shilanyas nahi; ONGC kendriya PSU).
// 3. Negatives: halafname me 0 criminal cases (myneta candidate_id=264); “Deva Varaprasad” + case/FIR/charge-sheet ki khoj me kuch nahi mila. “Razole MLA” par CEO-inquiry wali The Hindu khabar (6 May 2023) purv-MLA Rapaka Vara Prasada Rao ki hai — pre-term aur alag vyakti, isliye negative NAHI. Parivaar ke mamle bahar (niyam).
andhraWorks['deva-varaprasad'] = [];

// ---- Andhra Pradesh batch 3 worker (researched 2026-10-18) ----
// MLA: Giddi Satyanarayana — JSP — Gannavaram (Konaseema) (SC) (constituencySlug: gannavaram-konaseema), 16th AP VS 2024-2029.
// Pehchan pakki (andhra.ts): S/o Maha Lakshmi, retired Accounts Officer (DGP office), 96,108 votes 2024. Seat Konaseema jile ki hai —
// Krishna jile ke Gannavaram (MLA Yarlagadda Venkata Rao) se bilkul alag. Whitelisted English media me Jun 2024 ke baad is MLA ka
// koi vyaktigat lokarpan/shilanyas (sadak/paani/school/aspataal) nahi mila. Ek Assembly prashn + mantri-ashwasan mila (VALID, credit capped).
// Koi negative nahi (myneta: 0 criminal cases; koi FIR/chargesheet/adaltik vikas nahi).

andhraWorks['giddi-satyanarayana'] = [
  {
    title: 'Vidhansabha me unke sawal par samaj kalyan mantri ne YSRCP dwara radd Dalit kalyan yojanaon ko phir se shuru karne ka ashwasan diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/dalit-welfare-schemes-withdrawn-by-ysrcp-government-will-be-relaunched-minister/article68450380.ece',
    date: '2024-07-27',
    note: 'The Hindu ke anusaar Vidhansabha me P. Gannavaram MLA Giddi Satyanarayana ke puche gaye sawal ka jawab dete hue samaj kalyan mantri Dola Sree Bala Veeranjaneya Swamy ne kaha ki sarkar YSRCP karyakaal me radd hui un Dalit kalyan yojanaon ko priority par dobara shuru karne par kaam kar rahi hai jo 2014-2019 me chalu thi, aur samaj kalyan vibhag inki samiksha baithak karega. Credit capped: yojanaon ka punah-launch sarkar ka faisla tha — srot ne MLA ke kisi vyaktigat yogdaan ya nirdesh ka ullekh nahi kiya. Fund ghoshit nahi.',
    period: '2024-2029',
  },
];

// ---- REJECT-LOG (giddi-satyanarayana) ----
// 1. TOI, "Govt plans permanent measures to support Konaseema coconut farmers" (~Aug 2026): Assembly question-hour me
//    Giddi Satyanarayana + Bandaru Satyananda Rao ke narial-kisan sawal par krishi mantri K Atchannaidu ka ashwasan (Rs 1,000/naya paudha,
//    Sankaraguptham canal desilting) — prashn-type entry ke laayak lagta hai, lekin page fetch par HTTP 403 aaya aur retry block tha,
//    isliye snippet-only cite nahi kiya ja sakta. Page khule bina entry NAHI.
// 2. newindianexpress.com, flood relief (28 Jul 2024): Collector ke saath baadh-prabhavit ilakon me raahat samagri vitran — raahat kaam,
//    physical infrastructure work nahi — REJECT.
// 3. Deccan Chronicle, "Rift between Jana Sena, TD in five constituencies" (Oct 2024) aur "Jana Sena, TD Ties Strained In P Gannavaram"
//    (Dec 2025): gathbandhan karyakartaon ka aapas me rift — na work na negative — REJECT.
// 4. Deccan Chronicle, "Jana Sena MLA and YSRC MLC Lock Horns over Comments Against Pawan" (8 Aug 2025): YSRC MLC Israel ki tippani par
//    rajnitik bayanbaazi — FIR/chargesheet/janch/adaltik vikas nahi — negative nahi — REJECT.
// 5. theleaderspage.com profile: P. Dokka Seethamma/Sir Arthur Cotton aqueducts ka nirikshan (sirf inspection — REJECT); Shettibalija/Rajaka
//    samajik baithaken, party office udghatan me shirkat, campaign rallies (dusre karyakram me maujoodgi — REJECT); Chalivendram (garmiyon me
//    muft paani baantna — niji/daan kaam — REJECT). Vaise bhi site whitelist me nahi.
// 6. The Hindu, Ambedkar statue unveiling (11 May 2025): mantri Veeranjaneya Swamy ne Palivela (Kothapeta mandal — dusri seat) me murtika
//    anaavaran kiya; MLA sirf saath the; sadak aadi ke shilanyas bhi mantri ne Kothapeta mandal me kiye — dusri seat + dusre neta ka kaam — REJECT.
// 7. newkerala/Asianet ANI copy, CM Naidu gram sabha Konaseema (Sep 2026): CM ne Rs 240 crore APEPDCL grid modernisation ka shilanyas kiya;
//    MLA sirf upasthit the — REJECT.
// 8. Deccan Chronicle, MP Sana Satish alliance meeting (18 Oct 2026): baithak me maujoodgi — REJECT.
// 9. Naam-jaal careful rakha: "Gannavaram" Krishna jile ki seat (The Hindu house-sites/road articles MLA Yarlagadda Venkata Rao ke) — is seat par
//    lagoo NAHI; Giddi Eswari (Paderu) aur MVV Satyanarayana (ex-MP, land-grab case) alag vyakti hain — negative search me confuse nahi kiya.

// Batch: AP3 — works mining worker output (2026-10-18)
// MLA: Bandaru Satyananda Rao (bandaru-satyananda-rao) — TDP, Kothapeta (Konaseema jila), 16th AP VS (2024-2029).
// Seat cross-check src/data/andhra.ts se: Kothapeta, TDP, Winner 2024 (1,34,286 vote; margin 56,479). Age 59, halafname me 1 mamla.
// RESULT: 2 works entries (ek Deccan Chronicle post-event report se) + 0 negatives.
// REJECT-LOG (sabhi ummedwar tathya whitelist-srot kholkar padhe gaye):
// 1. Deccan Chronicle (Jun 2026): Kothapeta se IIITs me chune gaye 39 students se Ravulapalem me MLA ki mulaqat/sambodhan — REJECT (bhautik sanrachna ka kaam nahi; keval samaroh/mulaqat).
// 2. Deccan Chronicle (Jan 2026): Atreyapuram Godavari Trophy dragon boat races — MLA ne race flag-off ki/maujood the, kendriya mantri aur pariyatan mantri mukhya atithi — REJECT (keval maujoodgi; karyakram kendriya/paryatan vibhag ka, MLA ki vyaktigat bhoomika nahi).
// 3. The Hindu (7 May 2026): Vanapalli (Kothapeta mandal) shaadi-bhojan food poisoning — MLA ne Kothapeta Govt hospital me marijon se mulaqat ki aur ilaaj ki nigrani ki — REJECT (rahat/daura; bhautik kaam nahi).
// 4. New Indian Express (19 Feb 2026): Budget bahas me MLA ne budget ki sarahna ki (pichli sarkar se tulna) — REJECT (sirf bahas; koi maang/prastav ya dastaveji nateeja nahi).
// 5. G.O.Rt. 2018-19 (goir.ap.gov.in): Ex-MLA ke nivedan par Kothapeta ko Rs 200 lakh (CC roads/drains/community halls) aur Ravulapalem burial ground ke liye Rs 200 lakh ki administrative sanction — REJECT (pre-term; 16th VS karyakaal Jun 2024 se pehle ke GO).
// 6. Truepointnews epaper (5 Oct 2026): Ravulapalem junction par traffic signals ka MLA ne lokarpan kiya (SP ke saath) — REJECT (epaper aggregator; whitelist par NAHI; page kholkar padha nahi ja saka).
// 7. Usi DC report me MLA ke bayan: PRASAD scheme ke tahat Vadapalli ka aage ka vikas, CM ka Temple City nirdesh — REJECT as separate work (sirf ghoshna/bhavishya-yojna; PRASAD kendriya yojna, MLA ki vyaktigat bhoomika report me darj nahi).
// 8. Negatives sweep: halafname ka 1 purana mamla — IPC 420, CC No.509/2007, IIIrd Addl. Chief Metropolitan Magistrate Court, Hyderabad (2009/2024 affidavit) — akele negative NAHI (niyam); Jun 2024+ me FIR/chargesheet/nyayik vikas ki koi established-media khabar nahi. Devdiscourse ka "Bandaru Satyanarayana arrested" hit ALAG vyakti hai (Madugula ke Bandaru Satyanarayana Murthy) — inhe nahi.
andhraWorks['bandaru-satyananda-rao'] = [
  {
    title: 'Vadapalli (Atreyapuram mandal) ke Sri Venkateswara Swamy mandir me Rs 6.25 crore ki lagat se CGF funds se bani Vakulamatha annadana building ka Union MoS Bhupathiraju Srinivasa Varma ke saath milkar lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/vadapalli-temple-to-be-developed-on-lines-of-tirumala-varma-1983565',
    date: '2026-08-30',
    note: 'Deccan Chronicle (Published: 2026-08-30T23:31:45+05:30, khud page par darj — anumaan nahi) ki post-event report ke mutabik Union MoS (Heavy Industries and Steel) Bhupathiraju Srinivasa Varma ne Kothapeta MLA Bandaru Satyananda Rao ke saath milkar Vadapalli me Vakulamatha annadana building ka lokarpan kiya. Building Rs 6.25 crore ki lagat se CGF funds se bani hai (report me CGF ka poora naam nahi diya gaya); ek baar me 2,000-2,500 shraddhalu bhojan kar sakte hain aur roz lagbhag 40,000 logon ke liye prasadam taiyaar ho sakta hai. West Godavari Rice Millers Association ke president Samanthapudi Srirama Raju ne building ke liye Rs 1.5 crore ka daan diya tha. Vadapalli Atreyapuram mandal me hai jo Kothapeta seat ka hissa hai. Credit capped: mukhya lokarpan Union mantri ne kiya, MLA sanyukt lokarpan me maujood the; MLA ke apne fund (CDP) se sambandh ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'MLA ka dawa — Vadapalli me canal bund road ko majboot karne aur transport suvidha sudharne ke liye Dy CM Pawan Kalyan ne Rs 6 crore aur RUDA/Pushkara funds se Rs 2 crore sanction kiye hain',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/vadapalli-temple-to-be-developed-on-lines-of-tirumala-varma-1983565',
    date: '2026-08-30',
    note: 'Deccan Chronicle ki upar wali hi report me MLA Bandaru Satyananda Rao ke hawale se kaha gaya hai ki CM N. Chandrababu Naidu ne adhikariyon ko Vadapalli ko Temple City ke roop me vikasit karne ka nirdesh diya hai, Dy CM Pawan Kalyan ne canal bund road ko majboot karne aur transport suvidha sudharne ke liye Rs 6 crore sanction kiye hain, aur RUDA/Pushkara funds se Rs 2 crore sanction hue hain. YE KEVAL MLA KA DAWA hai — report me in swikritiyon ki swatantra pushti ya koi GO sankhya/tithi nahi di gayi, aur Rs 2 crore ka uddeshya bhi report me spasht nahi. Credit capped: swikriti Dy CM aur RUDA/Pushkara funds ki hai, MLA ne inka elaan apne bhashan me kiya; kaam shuru ya poora hone ki koi aage ki reporting nahi mili. MLA ke apne fund (CDP) se sambandh ghoshit nahi.',
    period: '2024-2029',
    stage: 'swikriti',
  },
];

// Batch: AP3 — works mining worker output (2026-10-18)
// MLA: V. Jogeswara Rao / Vegulla Jogeswara Rao (v-jogeswara-rao) — TDP, Mandapeta (Dr B.R. Ambedkar Konaseema jila), 16th AP VS (2024-2029).
// Seat/mandals: Mandapeta, Rayavaram, Kapileswarapuram (News18/Amalapuram LS delimitation). Identity cross-checked from src/data/andhra.ts.
// RESULT: khaali profile — whitelist outlets par Jun 2024+ ka koi VALID work ya negative nahi mila.
// Halafnama: 6 criminal cases (andhra.ts) — purane/panel-record; Jun 2024+ me unke khilaaf FIR/chargesheet/nyayik vikas ki koi established-media khabar nahi mili.
// REJECT-LOG (sabhi ummedwar tathya whitelist-srot se padhe gaye):
//
// POSITIVES (sab REJECT):
// 1. TOI Vijayawada ("Accurate estimates key to development: Vegulla", ~26 Nov 2025 — The Hindu ka 26 Nov 2025 published wala version bhi same story confirm karta hai): State Legislative Assembly Estimates Committee ke chairman ke roop me Visakhapatnam me adhikariyon ke saath estimates review meeting — REJECT (sadan-padiya/samiti ka kaam; seat Mandapeta ke bahar ka jila; bhautik sanrachna ka vyaktigat lokarpan/shilanyas nahi).
// 2. DC ("Vizag's New Drainage Model on Outskirts Could Cut Costs, Improve Hygiene", ~27 Nov 2025): Magic Drains ke baare me Estimates Committee chairman ke roop me MGNREGA adhikariyon ko study karne ka nirdesh — REJECT (samiti ka nirdesh; koi seat-mein kaam, fund ya sanrachna nahi).
// 3. DC ("APLA's Estimates' Committee Reviews Nellore Budget Allocations", Nellore meeting): chairman ke roop me 2019-22 kharch-samiksha meeting — REJECT (sadan-padiya kaam; seat ke bahar).
// 4. DC ("14 Encroached Houses Demolished At Mandapeta", ~24 Aug 2026 — DC search metadata "updated 56 days ago" on 2026-10-18 se inferred, reasoning disclosed): canal bund atikraman par 14 ghar tode gaye; YSRC MLC Thota Trimurthulu ne aarop lagaya ki zameen MLA ke 10 acre ke liye saaf ki ja rahi hai. Police ne MLA ke khilaaf NAHI, balki rokne walon (Trimurthulu + anya) ke khilaaf case darj kiya — REJECT as negative (virodhi ka political aarop; MLA KHUD aaropi nahi, FIR/chargesheet/janch/nyayik vikas nahi). Sarkaari atikraman-hataye abhiyan hai, MLA ka vyaktigat kaam nahi.
// 5. DC (amp) "House-Warming Ceremonies Held In Godavari Districts": collector Keerthi Chekuri ke saath MLA ne Mandapeta me 1,104 TIDCO makanon ka vitran kiya — REJECT (PMAY/TIDCO jaisi sarkari yojna ka vitran samaroh; MLA ka vyaktigat fund/bhoomika ya naveen sanrachna nahi — keval shubharambh/vitran).
// 6. UNI (test.uniindia, 11 Feb 2026) "Konaseema district MLAs meet Dy. CM, thank for development works": MLAs ne Dy CM Pawan Kalyan se milkar SASKI/JJM works ke liye dhanyavaad diya — REJECT (UNI whitelist me NAHI; aur sirf dhanyavaad-mulakaat, koi vyaktigat lokarpan/shilanyas nahi).
// 7. DC ("Andhra Pradesh to develop roads: YV Subba Reddy", 2021, pre-term): Mandapeta MLA ke roop me karyakram me keval maujoodgi; 100-bed hospital ka shilanyas Y.V. Subba Reddy ne rakha — REJECT (pre-term + maujoodgi + dusre neta ka kaam).
// 8. archive.org GO RT No.169 (21 Mar 2017, Planning Dept): purane karyakaal (2016-17) me MLA ki maang par Rs 200 lakh ka sanction — REJECT (pre-term karyakaal ka; naya term Jun 2024+ me iska koi naya reporting/follow-up nahi).
// 9. truepointnews epaper (27 Mar 2025): MLA ne Mandapeta me public grievances forum (prajavani) chalaya — REJECT (non-whitelist chhota outlet + grievance event; koi bhautik sanrachna nahi).
// 10. thesouthfirst.com (27 Jan 2024, pre-term): TDP ticket ghoshna par Pawan Kalyan ka aitraaz — REJECT (pre-term political ticket-story; kaam nahi).
//
// NEGATIVES SWEEP (REJECT):
// 11. Shikayat/aarop me naam, lekin FIR ke aaropi column me naam nahi = negative nahi (niyam). DC demolition story me MLA ke khilaaf koi case darj nahi hua; cases rokne walon par bane.
// 12. Halafname ke 6 pending criminal mamle (andhra.ts) — akele negative NAHI (niyam); Jun 2024+ me unpar koi FIR/chargesheet/giraftari/court-notice ki established-media reporting nahi mili.
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. Agar live-browser se Deccan Chronicle/Hans India/NIE me Jun 2024+ ka "Vegulla Jogeswara Rao" + Mandapeta lokarpan/shilanyas (road/school/hospital/paani) milta hai jisme fund disclosure ho, to valid entry ban sakti hai — abhi tak aisi post-event reporting whitelisted outlets par nahi mili.
// B. DC demolition-story ka URL non-amp version live browser se khol kar date (published-tithi) pakki ki ja sakti hai; MLA ke khilaaf koi legal follow-up ho to negative banega — abhi tak nahi.
andhraWorks['v-jogeswara-rao'] = [];

// ==== West Godavari (Batch 4) ====
// pithani-satyanarayana — 0 entries (QA-checked).
andhraWorks['pithani-satyanarayana'] = [];

// REJECT-LOG pithani-satyanarayana:
// 1. The New Indian Express 2026-01-21, 'Andhra Minister offers silk robes to Goddess in Penugonda' — Water Resources Minister Nimmala Ramanaidu aur Achanta MLA ne Vasavi Kanyaka Parameswari ke Aatmarpana Day par sarkar ki taraf se pattu vastram arpit kiye (Penugonda, jo seat ke andar hai). Dharmik karyakram; koi bhautik sarkari sanrachna ka lokarpan/shilanyas nahi, sarkari fund ka zikr nahi → REJECT.
// 2. Deccan Chronicle (same event, 'Goddess Parameswari's Self-Sacrifice Celebrated As State Festival') — state-festival ki ghoshna mantri ki hai; MLA ki vyaktigat bhoomika keval saath upasthiti → REJECT.
// 3. The Hindu 2026-03-30 — Bhimavaram me Energy Minister ka PM Surya Ghar rooftop solar panel lokarpan; MLA sirf 'present'. Bhimavaram seat ke bahar hai + dusre neta ke karyakram me maujoodgi → REJECT.
// 4. The New Indian Express 2025-02-01 — CM Chandrababu Naidu ne Penugonda Vasavi Matha temple me puja ki aur Guru Peetham ka shilanyas kiya; MLA ne sirf CM ka swagat kiya. Sirf maujoodgi → REJECT.
// 5. Deccan Chronicle ~Sep 2026, 'AP to Enact BC Protection Law' — BC law consultation me MLA anek MLAs ke saath upasthit; koi seat ka kaam nahi → REJECT.
// 6. YouTube video (Achanta Vemavaram me development works launch, ~6 din purana) — YouTube whitelist bahar → REJECT, retry-lead: isi karyakram ki whitelisted outlet (Hans India/Express/DC) par khabhar mile to entry banao.
// 7. ANGRAU E-Newsletter Apr-Jun 2026 — Kisan Mela, RARS Maruteru, 08.04.2026: MLA 'chairman of the Kisan Mela'. Sarkari-vishwavidyalaya ka event; bhautik sarkari sanrachna ka lokarpan/shilanyas nahi → REJECT (sarkari abhiyan ka keval netritva/maukoodgi).
// 8. Mantri-kaal ke items (REJECT): Deccan Chronicle 2017 (underground drainage ghoshna, mantri ke roop me), Medical Buyer 2019 (medical college shilanyas, mantri ke roop me), Sri City 2017 (safety conclave, minister-era), Business Standard 2014 (Guntur ring road — sirf upasthit, minister-era). Sab Jun 2024 se pehle ya mantri pad ke → REJECT.
// 9. Negative screening: 2024 halafname me 1 pending mamla — FIR 100/2022, I Town L&O PS Kakinada (IPC 143/290/353/149), charges framed nahi. Pre-term mamla hai; Jun 2024 ke baad isme koi nyayik vikas (adesha/chargesheet/janch) whitelisted media me nahi mila; Kakinada seat ke bahar hai. Sakht negative niyam ('halafname ke pending mamle akele negative NAHI') → negative entry zero.
// 10. Notes: runner-up C. Sri Ranganadha Raju ke mamle in par nahi lagaaye gaye; MP Narasapuram ke MPLADS kaam bhi in par nahi; Polavaram bandh se juda inka koi dastaveji kaam nahi mila. Seedha nateeja: seat me kisi bhautik sarkari sanrachna ke vyaktigat lokarpan/shilanyas ki post-event whitelisted reporting nahi mili, isliye profile khali rakhi gayi.
// nimmala-rama-naidu — 1 entries (QA-checked).
andhraWorks['nimmala-rama-naidu'] = [
  {
    title: 'Palakollu me Rs 12.90 crore ki teen sadko ka shilanyas — R&B Mantri B.C. Janardhan Reddy ke saath MLA Nimmala Rama Naidu ne neenv rakhi',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/road-works-worth-1290-crore-begin-in-palakollu-assembly/article70998704.ece',
    date: '2026-05-19',
    note: 'The Hindu ke anusaar teen sadke: S. Chikkala se Lankala Koderu (Tillapudipalem, Vemavaram hote hue) Rs 5.90 crore; Poolapalli-Palakollu road Rs 3 crore; Palakollu town me national highway se judne wali sadak Rs 4 crore. Kul Rs 12.90 crore. Fund-srot report me ghoshit nahi.',
    period: '2024-2029',
  },
];
// REJECT-LOG nimmala-rama-naidu: (1) DC 'State Allocates Rs 2,000 Crore For Rural Roads' (2025-12-13) — rajya-stariya ghoshna; Vadlavanipalem me 'various development works' ka shilanyas ullekh hai lekin itemized list/amount nahi, isliye reject. (2) DC 'Ramanaidu Inspects Veligonda Works' — Veligonda Prakasam/Nellore me hai, seat ke bahar; sirf nirikshan. (3) TNIE Polavaram articles (Aug 2026) — jal-sansadhan vibhag ke rajya-faisle, seat-specific kaam nahi. (4) pynr.in (The Pioneer mirror) dialysis-centre/hospital/R&B road articles — whitelist me nahi; waise bhi sirf nirikshan/daura type. (5) DC 'Minister Nimmala burst with anger at officials' (2024-07-13) — hospital me adhikariyon ko dant, sirf daura/nirakshan. (6) DC 'Nimmala Stresses Quality Education' (Jinuru Mega Teachers Meeting) — bhashan/samaroh, koi bhautik sanrachna nahi. (7) The Hindu 'Med United Hospital opens in Palakollu' (2025-09-16) — niji hospital; Union Mantri ke saath atithi ke roop me maujoodgi. (8) The Hindu RVF utilities Ganapavaram (2025-04-04) — CSR foundation ka kaam, Unguturu seat, maujoodgi matra. (9) DC 'Ramanaidu Says Kurnool Received Rs 2,014 Crore' — seat ke bahar (Kurnool). (10) DC 'Proposals On To Increase Yanamadurru Drain Capacity' — Yanamadurru drain Bhimavaram se guzarta hai, seat ke bahar; sirf prastav. (11) HT crematorium story (2018) — pre-term. (12) TNIE Godavari delta modernisation plan / The Hindu canal-estimates articles — rajya-stariya review-baithak/ghoshna. (13) Negatives: MLA par established media me koi FIR/chargesheet/janch ya Jun 2024 ke baad nyayik vikas nahi mila (Bolla Brahma Naidu land-grab case aur Chandrababu skill-development case alag logon ke hain).
// bommidi-narayana-nayakar — 0 entries (QA-checked).
andhraWorks['bommidi-narayana-nayakar'] = [ ];

// REJECT-LOG bommidi-narayana-nayakar:
// LEAD-1: G.O.RT.No. 173 dated 27-01-2025 (G.A. Accom Department) - Sri Bommidi Nayakar, MLA Narsapur
//   appointed as Govt. Whip, A.P. Legislative Assembly; official residence/camp office declared at
//   Tadigadapa Donka Road, Vijayawada; HRA Rs 1,00,000/month + camp office allowance Rs 5,000/month
//   w.e.f. 13-11-2024. Source: archive.org PDF of AP gazette (sarkari document, opened and read).
//   REJECT: whip office ka personal allowance matter hai, Narasapuram seat ka koi bhautik kaam nahi.
//   Seemaayein: sarkari document hai, lekin category = Any ke liye qualify nahi karta kyunki koi
//   lokarpan/shilanyas/swikriti vikas-kaam se joda nahi ja sakta.
// LEAD-2: Times of India (whitelist), ~Aug 2024 - 'GI tag boosts Narasapur Crochet Lace in fashion industry'.
//   Article me MLA Bommidi Nayakar ka quote hai ('GI tag not only validates the artisans craftsmanship...,
//   govt committed to popularise lace work and improve marketing facilities'). URL:
//   https://timesofindia.indiatimes.com/city/vijayawada/gi-tag-boosts-narasapur-crochet-lace-in-fashion-industry/articleshow/112120980.cms
//   REJECT: sirf media quote; koi vyaktigat lokarpan/shilanyas, koi sanction, koi sarkari fund ka jikr nahi.
//   GI tag Union Ministry of Commerce ne diya - MLA ki vyaktigat bhoomika ka saboot nahi.
// LEAD-3: IANS report on siasat.com (16 Apr 2025) - two women MGNREGA workers killed in road accident
//   at Mogalthur, West Godavari; MLA rushed to spot with officials, condoled deaths, visited Narasapuram
//   govt hospital. URL: https://www.siasat.com/two-women-mgnrega-workers-killed-in-andhra-road-accident-3207989/amp/
//   REJECT: (a) source whitelist me nahi (siasat/IANS dono bahar); (b) ghatna par jaana + samvedna vyakt karna
//   sirf daura/sahanubhuti hai - koi bhautik sarkari sanrachna ka lokarpan/shilanyas nahi.
// LEAD-4: newindianexpress.com (whitelist), 07 Apr 2026 - 'AP coast fishermen protest boat release, flag TN
//   incursions, demand probe'. Opened and read.
//   URL: https://www.newindianexpress.com/states/andhra-pradesh/2026/Apr/07/ap-coast-fishermen-protest-boat-release-flag-tn-incursions-demand-probe
//   REJECT: poora article Nellore district (Juvvaladinne harbour, Indukurpeta/Kavali mandals) ka hai -
//   Narasapuram seat ke bahar; Bommidi ka naam kahin mention hi nahi. Seat-bahar kaam bilkul nahi allowed.
// LEAD-5: TOI/Deccan Chronicle (whitelist), Oct 2026 - Rs 100 crore sanction for Kotipalli-Narsapuram railway
//   land acquisition, announced by R&B Minister BC Janardhan Reddy.
//   REJECT: (a) kendriya railway pariyojana - bina vyaktigat bhoomika allowed nahi; (b) announcement minister
//   ne ki, Bommidi ka koi lokarpan/shilanyas nahi; (c) rail line Konaseema side (Amalapuram RDO), vyaktigat
//   MLA bhoomika ka saboot nahi.
// LEAD-6: The Pioneer (pynr.in mirror) - 'JSP MLA enters Assembly premises in traditional fisherman attire'
//   (oath ceremony, Jun 2024). Bommidi ne fishing community ke prati commitment ka vaada kiya.
//   REJECT: sirf ghoshna/vaada + symbolic gesture - koi kaam (works) nahi. Source bhi whitelist me nahi.
// NEGATIVES search: myneta.info affidavit par 6 pending criminal cases (2019-2022 FIRs: Narasapuram Town PS
//   229/2019, 194/2020, 48/2022; Bhimavaram II Town PS 322/2022, 323/2022; Bhimavaram Rural PS 209/2022 - IPC
//   143/147/149/188/341/353). REJECT as negative: sab pre-term cases hain, halafname ke pending maamle hain,
//   aur Jun 2024 ke baad ka koi nayik vikas (chargesheet/adlaat-aadesh/FIR) whitelist source par nahi mila.
// CONCLUSION: Jun 2024+ ke dauran Narasapuram seat par Bommidi ka koi vyaktigat lokarpan/shilanyas/itemized
//   swikriti whitelist source par established nahi ho saki; profile khaali rakhi gayi hai.
// pulaparthi-ramanjaneyulu — 0 entries (QA-checked).
// pulaparthi-ramanjaneyulu — 0 works + 0 negatives
// Mining 2026-10-18. Pehchan: Bhimavaram, JSP, Winner 2024 (130,424 vote; runner-up Grandhi Srinivas YSRCP 63,450; antar 66,974). 4 Jun 2024 se pad par; Nov 2024 se AP Public Accounts Committee chairman.
// Karyakaal: Jun 2024+ (16th AP VS, 2024-2029). Whitelisted sources (Deccan Chronicle, Hindustan Times) kholkar padhe gaye; baaki leads whitelist/personal-role rules par reject hue.
// Fund note: AP MLA fund aavantan apust hai — note me fund-srot imaandaari se darj karna tha, lekin koi qualify hone wala kaam hi nahi mila, isliye ye khali hai.

andhraWorks['pulaparthi-ramanjaneyulu'] = [
];

// REJECT-LOG pulaparthi-ramanjaneyulu:
// 1. Deccan Chronicle — "JS MLA Pulaparthi Ramanjaneyulu elected PAC chairman" (Nov 2024): PAC/LEGISLATIVE OFFICE KA KAAM. Niyam spasht hai — PAC chairman hain, lekin PAC/office ke kaam entry me NAHI aayenge. Samiti ke adhyaksh ka chunav Bhimavaram seat ka kaam nahi hai. (Sambandhit HT story "Jana Sena MLA likely to be Andhra's PAC chief", Nov 2024 — ye bhi office-news, reject.)
// 2. Deccan Chronicle — "House-Warming Ceremonies Held In Godavari Districts": SARKARI ABHIYAAN ME KEVAL MAUJOODGI. Search snippet ke mutabik "Bhimavaram MLA Pulaparthi Ramanjaneyulu participated in massive house-warming ceremonies for 1,920 houses in the constituency. The joint collector T. Rahul Kumar Reddy and others were present" — PMAY/TIDCO gharon ka sarkari gruha-pravesh karyakram jisme MLA ne keval bhag liya; unka vyaktigat lokarpan/shilanyas, fund ya bhoomika report me nahi. Nirikshan/daura/sarkari-samaroh ki maujoodgi reject-niyam par out. (Note: page browser.open me 403 access-denied par nahi khula — retry-lead me darj.)
// 3. cinejosh.com (Jun 2024) — "Janasena: Setting a New Benchmark in Proactive Governance": NON-WHITELIST. Bhimavaram me "road repair works" shuru karne ka zikr party-PR blog par hai; outlet whitelist me nahi, isliye source nahi.
// 4. m.dailyhunt.in — "Janasena Sinking In Bhimavaram?": AGGREGATOR (REJECT) + koi kaam nahi. Local leadership ki internal criticism ka opinion-piece hai; na whitelisted outlet, na koi bhautik kaam, na negative criteria (MLA par FIR/chargesheet/adalati vikas kuch nahi).
// 5. innlivenews.in (2013) — Kotla railway doubling foundation stone: PRE-TERM + KENDRIYA PARIYOJNA. 2013 ka karyakram, railway (kendriya), MLA ki keval maujoodgi; Jun 2024 karyakaal se bahar aur bina vyaktigat bhoomika.
// 6. goir.ap.gov.in — 2017 "Special Development Fund" GO (Rs.200 lakh, Bhimavaram ke 32 vikas karya): PRE-TERM + SARKARI SWIKRITI, bina lokarpan. 2016-17 ka shasan-aadesh (unke pichhle 2014-19 karyakaal ka) — karyakaal Jun 2024+ se bahar; aur sarkari kagaz par unke vyaktigat lokarpan/shilanyas ka saboot nahi.
// 7. freepressjournal.in (2025) — PVR Prasanth Team India manager (Asia Cup 2025): PARIVAR KA MAMLA. MLA ke bete ki BCCI niyukti hai; seat ka vikas kaam nahi. (Rules: parivar ke mamle bahar.)
// 8. ap7am.com (Mar 2024) — "Former Bhimavaram MLA Joins Jana Sena Party": NON-WHITELIST + koi kaam nahi. Pawan Kalyan ki upasthiti me party-joining ki khabar hai; pre-term (chunav se pehle) aur sirf rajneetik story.
// 9. The Hans India / Deccan Chronicle site-specific searches me Bhimavaram seat ke liye MLA ka koi vyaktigat shilanyas/lokarpan (sadak/paani/school/aspataal) whitelisted post-event report me nahi mila.
// 10. TOI (Sep 2025) — GST cuts event me MLA Pulaparthi Ramanjaneyulu "attended": MAUJOODGI. Union MoS Srinivasa Varma ke karyakram me kai dignitaries ke saath upasthiti; koi seat-kaam nahi.
// 11. Negatives: MLA Pulaparthi Ramanjaneyulu par whitelisted media me Jun 2024+ me FIR/chargesheet/janch ya adalati vikas ki koi report nahi mili. (Dhyan: PSR Anjaneyulu IPS officer ke cases ek ALAG vyakti ke hain — Bhimavaram MLA se sambandhit nahi.) Halafname ke pending mamle akele negative nahi; chunav-yachika bhi nahi. Isliye negatives = 0.
//
// RETRY-LEADS:
// A. Deccan Chronicle house-warming story (ID 1947457, amp URL) browser.open me 403 par block hua — live-browser me theek se kholkar verify karo ki MLA ki bhoomika "participation" se aage thi ya nahi; report ke mutabik participation hi hai, to bhi reject hi rahega.
// B. Bhimavaram mandal/Veeravasaram mandal me koi sadak/paani/shilanyas karyakram (2024-2026) whitelisted outlets me nahi mila — agle mining round me live-browser se thehansindia.com/deccanchronicle.com par "Bhimavaram MLA" keyword follow-up ho sakta hai.
// C. AP DIPR press releases (ap.gov.in) me "Bhimavaram MLA Pulaparthi" ke naam se koi foundation-stone/inauguration release mile to sarkari badge ke saath entry ban sakti hai — sarkari portal whitelist-compliant hai.
// kanumuru-raghu-rama-krishna-raju — 2 entries (QA-checked).
andhraWorks['kanumuru-raghu-rama-krishna-raju'] = [
  {
    title: 'Deputy Speaker Raghu Ramakrishna Raju ke karyakaal me Undi ke 34 sarkari schoolon me se 31 ka aadhunikikaran hua, jisme khel ke maidan, swachh peyjal aur kalyan chhatravason ka sudhar shaamil raha; HRD mantri Nara Lokesh ne isme unke prayason ki sarvajanik sarahna ki',
    category: 'School',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Jan/07/aim-is-to-free-education-from-politics-andhra-minister-lokesh',
    date: '2025-01-07',
    note: 'NIE (7 Jan 2025) ke mutabiq Bhimavaram me SRKR Engineering College ke karyakram me HRD mantri Nara Lokesh ne Undi vikas me Deputy Speaker Raju ke prayason ki sarahna ki; mantri ke anusaar 34 me se 31 schoolon ka jeernoddhar karke khel ke maidan jode gaye, kalyan chhatravas adhunik kiye gaye aur swachh peyjal uplabdh karaya gaya. Isi avsar par mantri ne 108 saal purani Undi ZP High School ki jeernoddharit imarat, badminton aur tennis courts, aur Rs 18 lakh ki CC road ka lokarpan kiya. Fund srot: ghoshit nahi. Raju ka vyaktigat yogdaan itemized nahi hai — shrey mantri ke bayan tak seemit hai.',
    period: '2024-2029',
  },
  {
    title: 'Guntur industrialist Madala Srinivasu ki shikayat par Andhra Pradesh High Court ne police ko niyamanusaar case darj karne ke nirdesh diye; Srinivasu ne Deputy Speaker Raghu Rama Krishna Raju ko apne ghar par hue hamle ke peeche bataya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/vijayawada/andhra-pradesh-hc-directs-police-to-act-on-guntur-industrialists-complaint-against-deputy-speaker-raghu-ramakrishna-raju/articleshow/133477656.cms',
    date: '2026-08-24',
    note: 'Times of India (Aug 2026) ke mutabik Guntur ke industrialist Madala Srinivasu ne aarop lagaya ki Assembly Deputy Speaker K Raghu Ramakrishna Raju unke Guntur nivas par 31 July ko hue hamle aur dhamkiyon ke peeche hain, jiska sambandh Ind-Barath Power Gencom Ltd (189-MW coal-based power plant, Tuticorin; company pehle Raju ke parivar ne promote ki thi) se jude corporate vivad se hai. Yachika ke mutabik 20-30 log nivas me ghuse, dhamki di aur mukadme wapas lene ka dabav banaya; vistrit shikayat ke bawajood FIR darj nahi hui — police ki nishkriyata ko Srinivasu ne Raju ke pad se joda. Justice K Maheswara Rao ne police ko shikayat par niyamanusaar case darj karne ke nirdesh diye, sarkari vakil se poora vivran maanga aur yachikakarta se Raju ke aadmiyon ke bheje jaane ke saboot maange. Cited report me Raju ki pratikriya darj nahi hai (anupasthiti disclosed). STAGE-SPASHT: abhi HC ka aadesh hai — FIR darj hone ki pushti cited report me nahi hai. Tithi reasoning: report me aadesh Monday ka bataya gaya; 24 Aug 2026 Monday tha.',
    period: '2024-2029'
  },];
// REJECT-LOG kanumuru-raghu-rama-krishna-raju: (1) RVF Rs 34 crore works Ganapavaram/Jagannadhapuram (The Hindu 4 Apr 2025) — Unguturu seat, Undi nahi; Raju Vegesna Foundation daani fund; Raju sirf udghatan me maujood. REJECT — seat ke bahar + vyaktigat bhoomika/fund nahi. (2) Akividu-Bhimavaram double line inauguration — Railways pariyojna; MLA ki disclosed bhoomika nahi. REJECT. (3) NH-165 Akiveedu-Digamarru highway expansion tenders (The Hindu 12 Jan 2026) — Union Minister Srinivas Varma ki ghoshna; kendriya pariyojna, MLA ki vyaktigat bhoomika disclosed nahi. REJECT. (4) Pedda Peta (Akiveedu) Ramalayam jeernoddhar prastav + Srirama Navami hamla (The Hindu 27 Mar 2026; Deccan Chronicle) — sirf prastav/ghoshna; sarkari fund spasht nahi (VHP nirmaan karegi); law-and-order ghatna kaam nahi. REJECT. (5) CPI(M) ka Undi me 900 gharon ke dhvastikaran ka aarop (The Hindu 27 Apr 2025) — party ka raajneetik bayan; koi FIR/chargesheet/adalati aadesh nahi; negative ke liye ayogya. REJECT. (6) Suspended IPS P V Sunil Kumar ke Rs 945 crore CBI bank-fraud ke dawe (TOI; legendofficers) — virodhi adhikari ke social-media dawe; adalati vikas ki swatantra pushti nahi; shak = reject. REJECT. (7) Rushikonda plot fraud case (The Hindu 26 Jun 2026) — Raju complainant hain, aaropi nahi; kaam bhi nahi. REJECT. (8) 2021 custodial torture FIR against Jagan/IPS officers (Jul 2024, PTI) — Raju complainant hain; Undi ke kaam se sambandh nahi. REJECT. (9) ZP High School building + courts + Rs 18 lakh CC road ka lokarpan (NIE/The Hindu Jan 2025) — lokarpan mantri Lokesh ne kiya, Raju sirf maujood the; school-modernisation entry me shaamil; alag entry double-count hoti. REJECT as separate. (10) Ratan Tata statue / Ratan Tata Marg / Innovation Hub (NIE Jan 2025) — Lokesh ne udghatan kiya; Raju ki vyaktigat lokarpan-bhoomika disclosed nahi. REJECT. (11) UNI/univarta hits (e.g., RRR wins Undi; MP road stones) — whitelist me NAHI. IGNORED. (12) TOI HC-direction page fetch 403 par block hua — HC-aadesh ke tathya TOI ke search-snippet se liye gaye hain aur NIE page (opened) se cross-verified; retry-lead ke roop me yahan darj.
// arimilli-radha-krishna — 0 entries (QA-checked).
// arimilli-radha-krishna (Arimilli Radha Krishna, TDP, Tanuku, West Godavari) — 0 works + 0 negatives (mined 2026-10-18)
// Pehchan pakki: PRS mlatrack — State Andhra Pradesh, Constituency Tanuku, Party TDP, Start Of Term 04-Jun-24.
// Vistrit web search (general + news vertical, 10+ queries, naam ke sabhi spelling roopon par) me whitelist
// media (The Hindu, TOI, Deccan Chronicle, New Indian Express, Hans India) par inke karyakaal (Jun 2024+)
// ka koi vyaktigat lokarpan/shilanyas/GO-backed swikriti ka post-event reporting NAHI mili.
// Sabse majboot lead (The Pioneer/pynr.in par Uradalapalem drain+CC roads, Rs 1.10 crore) whitelist se bahar
// hone ke kaaran REJECT. The Hindu ki Tanuku water-grid khabar (Rs 38 crore + Rs 80.11 crore) sarkar/
// mantri ki ghoshna hai — MLA ki vyaktigat bhoomika report me darj nahi. ESI hospital (TOI) aur Gosthani
// retaining wall (The Hindu) sirf maang/prastav. Halafname ke 7 pending mamle (myneta, koi conviction nahi)
// — bina Jun 2024+ established-media nyayik vikas ke negative nahi. 2017 DC police-confinement FIR bhi
// pre-term, bina Jun 2024+ vikas. Khali profile — shanka wale sabhi leads REJECT karke reject-log me.
// Push/deploy NAHI karna.

// ==== REJECT-LOG ====
// 1. The Pioneer (pynr.in), 'Collector, MLA lay stone for construction of drain, CC road' (khola-pada; search
//    last-updated ~731 days ago = Oct 2024) — West Godavari Collector Chadalavada Nagarani ke saath MLA
//    Arimilli Radhakrishna ne Attili Mandal ke Uradalapalem gaon me drain aur CC sadkon (Rs 1.10 crore) ka
//    shilanyas kiya; Palle Panduga ke tahat. Post-event reporting hai aur seat ke andar hai, lekin The Pioneer
//    WHITELIST me NAHI hai (whitelist: Hindu, Express, HT, NDTV, India Today, TOI, Deccan Chronicle, Hans
//    India, PTI) → SOURCE REJECT. Whitelist-source par cross-report nahi mili.
//    https://pynr.in/collector-mla-lay-stone-for-construction-of-drain-cc-road/
// 2. The Hindu, 'Drinking water schemes for Guntur, West Godavari in the pipeline, says Minister Narayana'
//    (Sep 2025, khola-pada nahi — search snippet) — Minister Narayana ne Assembly me bataya: Tanuku ke liye
//    Rs 38 crore ka water grid project + Rs 80.11 crore ki aur infrastructure swikrit; AMRUT 2.0 me Tanuku
//    sahit 6 nagar-palikayon ke liye Rs 420 crore ka water grid, Dec 2027 tak. Sarkar/mantri ki ghoshna hai;
//    report me MLA Arimilli Radha Krishna ki koi vyaktigat bhoomika/lokarpan/shilanyas darj nahi, aur unhone
//    ye sawal Vidhansabha me uthaya tha — iska koi dastavej nahi mila → 'Vidhansabha maang ka dastaveji
//    nateeja' NAHI banta → REJECT.
//    https://www.thehindu.com/news/national/andhra-pradesh/drinking-water-schemes-for-guntur-west-godavari-in-the-pipeline-says-minister-narayana/article70098058.ece/amp/
// 3. The Hindu, 'Dredging of Upputeru sought to check crop inundation in West Godavari district' (Feb 2026,
//    search snippet) — DDRC meeting me MLA Arimilli Radhakrishna ne Tanuku constituency me behne wali
//    Gosthani nadi par retaining wall banane ki MAANG ki → SIRF MAANG/PRSTAV, koi swikriti/shilanyas nahi
//    → REJECT. https://www.thehindu.com/news/national/andhra-pradesh/dredging-of-upputeru-sought-to-prevent-crop-inundation-in-wg-district/article70574704.ece/amp/
// 4. Times of India, '4 ESI hosps to be turned into super-specialty units' (Jan 2025, search snippet) —
//    Labour minister ne Tanuku aur Nuzvid me ESI hospital ke prastav bhejne ko kaha 'as per the requests by
//    Tanuku MLA Arimilli Radhakrishna' → SIRF MAANG/PRSTAV; koi swikriti/lokarpan nahi → REJECT.
//    https://timesofindia.indiatimes.com/city/vijayawada/4-esi-hosps-to-be-turned-into-super-specialty-units/articleshow/117094020.cms
// 5. goodmorningandhraonline.com, 'Amrit Bharat Express Tanuku Welcome' (Mar 2026, khola-pada nahi) —
//    non-whitelist source; railway (kendriya) karyakram jise Union Minister Bhupathiraju Srinivasa Varma
//    (Narasapuram MP) ne flag-off kiya; MLA sirf sahabhagi → dusre neta ke karyakram me maujoodgi +
//    kendriya pariyojna bina vyaktigat bhoomika → REJECT.
// 6. goodmorningandhraonline.com, 'Arimilli Radhakrishna Cycle Rally Marks TDP 44th Foundation Day
//    Celebrations' (Mar 2026) — non-whitelist source; party karyakram (TDP Foundation Day cycle rally),
//    koi bhautik sarkari sanrachna ka lokarpan/shilanyas nahi → REJECT.
// 7. Deccan Chronicle, 'Andhra Pradesh: MLA booked for confining two policemen' (May 2017, khola-pada nahi
//    — search snippet) — tatkalin Tanuku MLA A. Radha Krishna samet 9 logon par Tanuku Rural PS mamle me
//    IPC 341/342/353 ke tahat FIR. MAY 2017 KA FIR — karyakaal (Jun 2024+) se bahut PEHLE; Jun 2024+ me koi
//    nyayik vikas (chargesheet/sunvai/faisla) established media me nahi mila → NEGATIVE REJECT.
//    https://www.deccanchronicle.com/amp/nation/crime/210517/andhra-pradesh-mla-booked-for-confining-two-policemen.html
// 8. myneta.info 2024 affidavit — 7 criminal cases pending (FIR 186/2023, 187/2023 Tadepalligudem Town PS;
//    191/2023, 193/2023 Tanuku Town PS Sec.151 CrPC; 37/2024 Tanuku Town PS IPC 186/353/143/149; 55/2020,
//    57/2020 Tanuku Rural PS Sec.151 CrPC); koi conviction nahi. Rules: 'Halafname pending mamle akele nahi'
//    — bina established-media + Jun 2024+ nyayik vikas ke → NEGATIVE NAHI.
//    https://myneta.info/AndhraPradesh2024/candidate.php?candidate_id=2566
// 9. New Indian Express, 'Infra projects remain a pipe dream for Tanuku constituency residents' (15 Apr 2024,
//    search snippet) — chunav-purva (term se pehle) constituency profile; Autonagar vaada (2009 se kagaz par),
//    Satyawada drain par funds release nahi — koi vyaktigat kaam nahi, sirf samasya-varnan → REJECT.
// 10. Deccan Chronicle, 'Plan Being Prepared To Address Godavari Delta Flooding: Nimmala' (7 Oct 2026) aur
//     'Godavari Delta Modernisation Gathers Pace, Says Ramanaidu' (Aug 2026) — dono me Water Resources
//     Minister ke DPR/plan; MLA Arimilli Radha Krishna ki koi vyaktigat bhoomika darj nahi → REJECT.
// 11. General searches (The Hindu, NIE, HT, NDTV, India Today, TOI, Hans India, DC) me is MLA ke kisi aur
//     vyaktigat lokarpan/shilanyas/swikriti ki post-event report nahi mili. Karumuri Venkata Nageswara Rao
//     (runner-up, YSRCP) ke kisi mamle ko in par aaropit nahi kiya gaya.

andhraWorks['arimilli-radha-krishna'] = [];

// REJECT-LOG arimilli-radha-krishna: file ke upar wale REJECT-LOG comment (entries 1-11) me sabhi leads
// darj hain — 0 qualify, profile khali rakhi gayi hai.
// bolisetti-srinivas — 0 entries (QA-checked).
andhraWorks['bolisetti-srinivas'] = [ ];

// REJECT-LOG bolisetti-srinivas:
// LEAD-1: Deccan Chronicle (whitelist), ~Apr 2025 - 'Burial grounds in West Godavari lack facilities'.
//   Khola aur padha. Union MoS Bhupathiraju Srinivasa Varma ke vaade: Tadepalligudem me electric
//   burial ground 'would be set up', Govt Hospital Tadepalligudem me Rs 2 crore CSR fund se dialysis
//   centre + additional buildings, Rs 100 crore Bhimavaram-Pippara road ('tenders will be invited soon'),
//   Pippara me Rs 50 lakh ki sadak (election promise par bani batai gayi), aur MLA ke kehne par
//   mantri ne constituency ke liye lagbhag Rs 3 crore release kiye. MLA ne sirf dhanyavad diya.
//   URL: https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/burial-grounds-in-west-godavari-lack-facilities-1871622
//   REJECT: pre-event ghoshna/vaada hi vaada (works complete hone ki post-event reporting nahi);
//   dialysis centre CSR fund ka, road/railway vaade kendriya mantri ke; MLA ka vyaktigat
//   lokarpan/shilanyas nahi - 'sirf ghoshna' niyam me reject.
// LEAD-2: The New Indian Express (whitelist), 26 Jan 2026 - 'Tadepalligudem UGD project back on track;
//   Rs 88.18 crore sanctioned under AMRUT 2.0'. Khola aur poora padha. MAUD Department ne UGD + STP
//   ke liye Rs 88.18 crore swikrit kiye; kaam February ke ant tak shuru hone ki ummeed batayi gayi;
//   project 2009 me Rs 61.50 crore par shuru hua tha, lagbhag Rs 28.50 crore ka kaam ho chuka tha,
//   phir atka raha; STP (Rs 32.14 crore) adhura chhuta.
//   URL: https://www.newindianexpress.com/states/andhra-pradesh/2026/Jan/26/tadepalligudem-ugd-project-back-on-track-rs-8818-crore-sanctioned-under-amrut-20
//   REJECT (retry-lead): swikriti MAUD department/AMRUT 2.0 ki hai; cited page me MLA Bolisetti Srinivas
//   ka naam ya vyaktigat bhoomika KAHIN darj nahi - credit infer karna allowed nahi. Agar MLA ke
//   shilanyas/lokarpan ki post-event whitelist report mile to is lead ko dobara uthaya ja sakta hai.
// LEAD-3: infrainsiders.com + scoopfeeds.com - 'Tadepalligudem railway station modernisation gets Rs 45 cr
//   boost' / 'More train halts sought at Tadepalligudem railway station'. MLA ne 18 trains ke halt ki maang ki.
//   REJECT: (a) dono source whitelist bahar (scoopfeeds par THG copyright hone ke bawajood scoopfeeds khud
//   whitelist me nahi); (b) railway kendriya pariyojna hai - vyaktigat bhoomika bina allowed nahi;
//   (c) halt maang sirf maang hai, koi poora hua kaam nahi.
// LEAD-4: cinejosh.com - 'Janasena: Setting a New Benchmark in Proactive Governance' (Racharla me road
//   construction works shuru). REJECT: source whitelist bahar + koi lagat/fund/date detail nahi.
// LEAD-5: etvbharat.com (2026-09-05) - Margadarsi Chit Fund ki 134th branch ka Tadepalligudem me uddhatan,
//   MLA bhi maujood. REJECT: source whitelist bahar + niji company ki branch - sarkari sanrachna nahi.
// LEAD-6: 3f-swabhimaanfoundation.in - RO water plants (Prathipadu, Rs 13 lakh), crematorium (Juvvalapalem,
//   Rs 12 lakh), ZP High School toilets (Rs 10 lakh); MLA samaroh me shamil. REJECT: CSR samaroh me
//   mukhya-atithi/upasthiti - niyam me saaf reject.
// LEAD-7: TNIE (whitelist), 2025-02-01 - CM Chandrababu Naidu ka Vasavi Matha temple (Penugonda) karyakram;
//   MLAs me Bolisetti Srinivas upasthit. TNIE (whitelist), 2024-11-02 - NVG/Narasimha temple karyakram
//   me MLA Pawan Kalyan ke saath shamil. REJECT: dusre neta ke karyakram me maujoodgi; koi lokarpan nahi.
// LEAD-8: TNIE (whitelist), 2025-11-24 - JSP ne 220 divangat karyakartaon ke parivaron ko Rs 11 crore ke
//   insurance cheque baante; MLA Bolisetti Srinivas upasthit. REJECT: party ka daan/sahayta karyakram,
//   MLA sirf atithi - koi sarkari sanrachna kaam nahi.
// LEAD-9: TOI (whitelist), Oct 2026 - TDP-Jana Sena local body chunav consensus; MLA ne alliance ki baat ki.
//   REJECT: rajnitik bayan, koi vikas kaam nahi.
// LEAD-10: YouTube (Tulasi News, MLA ka seat-sharing press meet) - whitelist bahar -> REJECT.
// LEAD-11: bharatdigitalnews.com (Oct 2026) - APJU journalists meeting me MLA ka bhashan (house plots ke
//   liye prayas ka vaada). REJECT: source whitelist bahar + sirf vaada, koi poora kaam nahi.
// NEGATIVES: myneta.info 2019 halafname me 1 pending case (FIR 1/2012 Tadepalligudem PS, CC 650/2017,
//   charges framed, squash petition pending) - sirf halafname ka pending maamla, akele reject niyam me.
//   TOI Jan 2020 (Pawan Kalyan press release - JSP workers par false cases) pre-term hai aur MLA khud
//   aaropi nahi. Jun 2024 ke baad whitelist media me MLA ke khilaf FIR/chargesheet/janch ya nyayik
//   vikas ki koi report nahi mili -> koi negative entry nahi.
// FUND NOTE: Is run me koi qualify karne wali entry nahi bani, isliye fund-srot disclose karne ka
//   prashn hi nahi utha. LEAD-2 (Rs 88.18 crore UGD) par MLA ka fund-srot sambandh cited page me
//   ghoshit nahi - entry bani hoti to 'ghoshit nahi' likha jata.
// CONCLUSION: Whitelist sources kholkar padhne par Jun 2024+ me Tadepalligudem seat par MLA Bolisetti
//   Srinivas ka koi vyaktigat lokarpan/shilanyas/itemized swikriti post-event roop me establish nahi
//   ho saki; profile khaali rakhi gayi hai.

// ==== Eluru (Batch 4) ====
// dharmaraju-patsamatla — 0 entries (QA-checked).
// Worker fragment: Dharmaraju Patsamatla (dharmaraju-patsamatla) - Unguturu (Eluru), JSP
// Karyakaal: Jun 2024+; period: '2024-2029'
// Note: 8 web/news searches kiye; whitelisted outlets me is MLA ke naam se koi
// lokarpan/shilanyas ya swikriti (post-event) report nahi mili. Profile khali.

andhraWorks['dharmaraju-patsamatla'] = [];

// REJECT-LOG dharmaraju-patsamatla:
// 1. The Hindu (2025-11-29) - CM Naidu ka Gollagudem (Unguturu mandal) daura: MLA ne Collector/SP ko sirf schedule brief kiya; vikas karyon ka udghatan CM ne kiya - REJECT (dusre neta ke karyakram me maujoodgi, MLA ki vyaktigat bhoomika nahi).
// 2. The Hindu (2025-11-25) - CM visit se pehle venues ke nirikshan me Collector ke saath maujood the - REJECT (sirf nirikshan/maujoodgi, koi kaam nahi).
// 3. The Hindu (2025-10-07) - Kolleru region review meeting me constituency ke mudde uthaye - REJECT (sirf maang/prastav, koi dastaveji nateeja nahi).
// 4. The Hindu (2025-06-18) - Kolleru CEC karyakram me upasthiti - REJECT (maujoodgi, koi kaam nahi).
// 5. UNI (2025-09-28) - MP Putta Mahesh Kumar ne Gundugolanu/Kaikaram (Unguturu constituency) me roads ke shilanyas kiye - REJECT (MP MPLADS kaam, MLA ka nahi; UNI whitelist me nahi).
// 6. The Hindu (2025-03-20) - Assembly committees (Rules, Privileges) me member - REJECT (vidhayi kaam, development work nahi).
// 7. Affidavit (myneta.info): 0 criminal cases - negatives ke liye koi aadhaar nahi; runner-up Puppala Srinivasa Rao se sambandhit koi mamla is profile par nahi.
// chintamaneni-prabhakar — 0 entries (QA-checked).
// chintamaneni-prabhakar — 0 works + 0 negatives
// Mined 2026-10-18. Fragment khud merge mat karo.

// Pehchan pakki: Denduluru (Eluru jila, AP Vidhan Sabha seat 64), TDP.
// Jun 2024 me Abbaya Chowdary Kotharu (YSRCP) ko 26,266 maton se haraya
// (Oneindia winners list; Denduluru wiki page). Mandals: Denduluru,
// Pedavegi, Pedapadu, Eluru (part). Karyakaal: 16th AP Vidhan Sabha, Jun 2024+ (2024-2029).
// Runner-up Kotaru Abbaya Chowdary (YSRCP) — unke mamle/kaam in par NAHI jode.

andhraWorks['chintamaneni-prabhakar'] = [];

// ===== REJECT-LOG: Chintamaneni Prabhakar (Denduluru, Eluru jila, TDP) =====
// Whitelist news-outlets me Jun 2024 ke baad inki coverage MUKHYA ROOP SE
// political press-statements, samaroh-upasthiti aur vivaad/kanooni khabaron
// tak seemit hai — koi vyaktigat lokarpan/shilanyas wala bhautik vikas kaam
// post-event reporting me NAHI mila. Naam-jaal check: Vemireddy Prabhakar Reddy
// (Nellore MP) alag vyakti hain — unke paani-plant wale kaam in par NAHI jode.

// --- WORKS LEADS (har ek kholkar padha; sab REJECT) ---
// 1. The Hindu (16 Aug 2025, "Sri Krishna Janmashtami celebrated in grand
//    manner at Denduluru") — Eluru MP Putta Mahesh Kumar mukhya-atithi the,
//    MLA Chintamaneni Prabhakar sirf saath me upasthit. Dharmik samaroh me
//    maujoodgi; koi bhautik sanrachna nahi. REJECT (dusre neta ke karyakram
//    me maujoodgi). sourceUrl:
//    https://www.thehindu.com/news/national/andhra-pradesh/sri-krishna-janmashtami-celebrated-in-grand-manner-at-denduluru/article69940750.ece
// 2. The Hindu (18 Jun 2025, "Andhra Pradesh aims to bring 15,000 hectares
//    under oil palm cultivation in Eluru district") — MLA ne sarkar se maang
//    ki ki Pedapadu jaise delta kshetron me paddy ke vikalp ke roop me oil
//    palm ko protsahan de. Ye sirf bayan/maang hai. REJECT (sirf maang/prastav).
//    sourceUrl:
//    https://www.thehindu.com/news/national/andhra-pradesh/andhra-pradesh-aims-to-bring-15000-hectares-under-oil-palm-cultivation-in-eluru-district/article69709392.ece
// 3. The Hindu (07 Oct 2025, "Andhra Pradesh govt. vows to address Kolleru
//    region's long-standing issues and development needs") — review meeting me
//    MLA ne Komatilanka me bridge-nirman me deri aur Kolleru operation se
//    prabhavit 14,000 acre zameen ke muaavze ki maang uthayi. Dastaveji
//    nateeja (GO/swikriti) ka koi ullekh nahi. REJECT (sirf maang/prastav).
//    sourceUrl:
//    https://www.thehindu.com/news/national/andhra-pradesh/andhra-pradesh-govt-vows-to-address-kolleru-regions-long-standing-issues-and-development-needs/article70135707.ece
// 4. Deccan Chronicle ("Rainwater Conservation Programmes Begin in Godavari
//    Districts") — Eluru collector ke saath Somavarappadu gaon me
//    "Water Conservation" karyakram me MLA ne bhag liya; unhone seat me 44
//    water-distributor associations, 4 distributary committees aur 208 talab
//    hone ki jaankari di. Ye sarkari abhiyan ka shubharambh/bhagidari hai,
//    koi vyaktigat shilanyas/lokarpan nahi. REJECT (sarkari abhiyanon ke
//    keval shubharambh me bhagidari). sourceUrl:
//    https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/rainwater-conservation-programmes-begin-in-godavari-districts-1948963
// 5. TruePoint News e-paper (Oct 2026) — Masidupadu se main road tak nayi
//    tar road banane ka MLA ka vaada (joining programme me mukhya-atithi ke
//    roop me ghoshna) — non-whitelisted outlet + sirf ghoshna. REJECT.

// --- NEGATIVES CHECK (koi qualify NAHI hua) ---
// 1. Deccan Chronicle (18 May 2024, "Criminal case against Chintamaneni
//    Prabhakar") — Pedavegi police ne IPC 224/225/353 ke tehat case darj kiya
//    (supporter ko thane se zabardasti chhuda le jaane par); report ke mutabik
//    in par pehle se 93 case the, ye 94va. YE PRE-TERM hai (May 2024, Jun 2024
//    oath se pehle) aur established media me Jun 2024+ ka koi nyayik vikas
//    (chargesheet/adlat-aadesh/notice) report NAHI hua. REJECT as negative
//    (pre-term; post-2024 legal development nahi). sourceUrl:
//    https://www.deccanchronicle.com/southern-states/criminal-case-against-chintamaneni-prabhakar-894535
// 2. New Indian Express (31 Aug 2019) SC/ST Atrocities case (Pinakamidi);
//    bail Nov 2019 (65 din jail). Pre-term, post-2024 koi development nahi. REJECT.
// 3. The Hans India (05 Oct 2026, "Tipper drivers block toll plaza over fee
//    dispute") — Vedurupavuluru toll plaza par drivers ne dawa kiya ki lorries
//    MLA Chintamaneni se judi company ki hain; blockade hui. LEKIN New Indian
//    Express (07 Oct 2026, "TDP seeks explanations from leaders over disputes")
//    ke mutabik TDP ne poochtaachh ki aur party ke anusaar toll staff/drivers
//    ne kaha ki Chintamaneni ka is ghatna se KOI sambandh NAHI tha. MLA ke
//    khilaf koi FIR/chargesheet/janch established media me report NAHI hui —
//    ye party-anushasanatmak mamla hai. REJECT as negative (MLA khud aaropi
//    nahi; party karyawahi = NAHI). sourceUrl:
//    https://www.thehansindia.com/news/cities/vijayawada/tipper-drivers-block-toll-plaza-over-fee-dispute-1128967
//    https://www.newindianexpress.com/states/andhra-pradesh/2026/Oct/07/tdp-seeks-explanations-from-leaders-over-disputes-3
// 4. Purane mamle (2015 Tahsildar attack, 2015 Kolleru sanctuary road, 2021
//    Denduluru SI case) — sab pre-term; Jun 2024+ me koi adalati aadesh/notice
//    establish media me report nahi hua. REJECT.
// 5. TeluguOne (~Sep 2026) "party chhodne ki dhamki" — non-whitelisted outlet
//    + shuddh party-politics. REJECT.

// NEGATIVES: koi nahi. Halafname ke pending mamle akele negative NAHI
// (rule ke mutabik). Jun 2024+ me established media me FIR/chargesheet/
// adalati aadesh/gawah-notice jaisa koi nyayik vikas report NAHI hua.

// RETRY-LEADS (parent/live-browser ke liye):
// - Hans India / Deccan Chronicle ke district pages par "Denduluru" ke
//   archive (kabhi-kabhi regional shilanyas-khabrein) me future sweep se mil
//   sakta hai — abhi koi canonical post-event URL whitelist outlet par mila nahi.
// - GO portals (goir.ap.gov.in) par "Denduluru Assembly Constituency" ke naam
//   se sanction orders milen to GO-number ke saath sarkari-badge entry ban
//   sakti hai — search me 2017 ka purana GO mila (pre-term), 2024+ ka nahi.
// radha-krishnayya-badeti — 0 entries (QA-checked).
// Works-mining fragment: Radha Krishnayya Badeti (TDP), Eluru, Andhra Pradesh
// Karyakaal: Jun 2024+ | period: '2024-2029'
// Whitelisted media + sarkari portal search done on 2026-10-18. Koi vyaktigat
// lokarpan/shilanyas, GO-backed swikriti ya dastaveji Vidhansabha-maang-nateeja
// nahi mila. Isliye works list khaali; saare leads neeche REJECT-LOG me darj.

andhraWorks['radha-krishnayya-badeti'] = [];

// REJECT-LOG radha-krishnayya-badeti:
// 1. Deccan Chronicle — "Drinking Water Pipeline to Be Laid at Rs 230 Crore" (2025; MLA ne Swarnandhra-Swachchandra karyakram me kaha ki Godavari water supply ke liye Rs 230 crore pipeline project par koshishen chal rahi hain). REJECT: sirf ghoshna/irada ka bayan, koi shilanyas ya GO nahi. URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/drinking-water-pipeline-to-be-laid-at-230-crore-1951375
// 2. The Hindu — "Home Minister inaugurates Women Police Station in Eluru" (April 2026; Rs 2.73 crore building ka udghatan Home Minister Vangalapudi Anitha ne kiya; MLAs Badeti Chanti, Chintamaneni Prabhakar, P. Dharmaraju sirf upasthit the). REJECT: dusre neta (mantri) ke karyakram me kewal maujoodgi; vyaktigat bhoomika nahi.
// 3. eluru.ap.gov.in (sarkari portal) — Children Traffic Park ka udghatan MP Putta Mahesh Kumar ne kiya; MLA Badeti Chanti upasthit the. REJECT: MP ka karyakram + MLA kewal maujood; MP MPLADS kaam is MLA ke nam par nahi. URL: https://eluru.ap.gov.in (park inauguration note, 13/07/2025)
// 4. UNI/univarta — Pawan Kalyan ne Jagannadhapuram Sri Lakshmi Narasimha Swamy temple par Rs 8.7 crore vikas karyon ka shilanyas kiya; MLA kewal saath the. REJECT: UNI whitelist me NAHI + dusre neta ka karyakram, maujoodgi matr.
// 5. newsnedu.com — MP Putta Mahesh Kumar aur MLA Badeti Chanti ne Eluru me CC roads (Rs 40 lakh, Rs 1.2 crore, Rs 80 lakh) ke shilanyas me bhag liya (Oct 2026). REJECT: newsnedu whitelist me NAHI (chhota Telugu portal); saath hi ye mukhya roop se MP ke karyakram the.
// 6. eluru.ap.gov.in — Swachhata Hi Seva aur "Auto Driverla Sevalo" karyakramon me MLA ki upasthiti/shubharambh me maujoodgi. REJECT: sarkari abhiyanon ke keval shubharambh/presence, koi bhautik sanrachna ka lokarpan/shilanyas nahi.
// 7. Negatives: Badeti Chanti ke khilaf koi FIR/chargesheet/janch ya Jun 2024 ke baad nyayik vikas whitelisted media par nahi mila. (Dhyan rahe: "Chanti" nam wale alag vyaktiyon — Bhimavaram chor case, Denduluru MLA Chintamaneni Prabhakar — ke mamle in par BILKUL NAHI lagte.)
// chirri-balaraju — 1 entries (QA-checked).
andhraWorks['chirri-balaraju'] = [
  {
    title: 'Polavaram MLA Chirri Balaraju ne dawa kiya ki agency ke adivasi gaon me Rs 85 crore ki CC sadken, naliyan aur anya kaam shuru hue hain',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/government-has-disbursed-1000-crore-to-families-displaced-by-polavaram-project-mla/article69913919.ece/amp/',
    date: '2025-08-09',
    note: 'MLA ka dawa — 9 August 2025 ko World Adivasi Day karyakram (K.R. Puram, Buttaigudem mandal) me MLA ne kaha ki agency ke adivasi gaon me CC sadken, naliyan aur anya kaam lagbhag Rs 85 crore ke liye shuru kiye gaye hain. Fund srot ghoshit nahi; kaam kis agency ya scheme ke tahat hain, iska khulasa source me nahi hai. Usi bayan me MLA ne ye bhi dawa kiya ki adivasi bastiyon me peene ke paani, chikitsa aur shiksha ki suvidhaen di ja rahi hain aur CMRF ke tahat lagbhag 154 labharthiyon ko sahayta mili hai. Role capped — ye MLA ke apne dawa ke aadhaar par darj hai.',
    period: '2024-2029'
  },
];

// REJECT-LOG chirri-balaraju:
// 1. The Hindu 2025-08-09, Rs 1000 crore visthapit parivaron ko vitaran — Polavaram bandh ki kendriya R&R vyavastha; MLA ki dastaveji vyaktigat bhoomika nahi → REJECT (kendriya pariyojna niyam).
// 2. TNIE 2025-12-14 (Pawan tells JSP MLAs) — Thimmanakunta-Gavaravaram sadkon ke liye Rs 7.6 crore ki swikriti Pawan Kalyan ne di; MLA ki vyaktigat bhoomika nahi → REJECT; Koyyalagudem degree college sirf prastav hai → REJECT (maang/prastav).
// 3. Deccan Chronicle 2026-07-04 local-body-chunav bhashan — rajnitik bayan, koi sarkari kaam nahi → REJECT.
// 4. The Hindu 2025-01-12 Parliamentary Standing Committee visit — MLA sirf upasthit adhikariyon ki soochi me; sirf maujoodgi → REJECT.
// 5. CM Polavaram project visit/aadhikshak stories (latestly/ANI, theweek PTI) — kendriya/rajya pariyojna ke kaam; MLA ki vyaktigat bhoomika darj nahi → REJECT.
// 6. YouTube video (Pawan Kalyan inquiry against MLA / sand-mining allegations) — YouTube source whitelist bahar; koi whitelisted media reporting nahi mili → REJECT, retry-lead.
// 7. newsmeter.in 2026-03-22 fake RTA challan cyber-fraud — MLA thagi ka shikar hai; na works entry na negative entry; source bhi whitelist bahar → NA.
// 8. Sand-mining/ED/HC search results (TOI, TNIE, Deccan Chronicle Sep-Oct 2026) — Chirri Balaraju kahin aaropi ke roop me named nahi → negative entries zero.
// roshan-kumar-songa — 0 entries (QA-checked).
andhraWorks['roshan-kumar-songa'] = [];

// REJECT-LOG roshan-kumar-songa:
// - pynr.in (The Pioneer), 27/12/2024, 'Rs. 92 crore sanctioned for 983 CC roads: Collector' — District Collector K. Vetri Selvi ne Palle Panduga programme me 983 CC roads ke liye Rs 92.02 crore ki sanction ka ailaan kiya; MLA Songa Roshan Kumar ke saath Chintalapudi, Kamavarapukota aur Asannagudem me roads ka lokarpan hua; Chintalapudi constituency me Rs 2.50 crore ki roads poori, Rs 19.03 crore 187 roads ke liye aavanti. REJECT: source whitelist me nahi hai (The Pioneer whitelisted outlet nahi). Retry-lead: wahi event Hans India/Deccan Chronicle me dhoondha — nahi mila.
// - The Hindu, 01/06/2025, 'Chintalapudi project will be completed within the next five years, says the Minister for Housing, Information and Public Relations' — Minister Kolusu Parthasarathy ke Agiripalli daure par kendrit; MLA ka zikr hi nahi; Chintalapudi Lift Irrigation Project ki completion assurance minister ki. REJECT: MLA actor hi nahi; minister ka karyakram.
// - The Hindu, 26/08/2024, 'Halt provided for Vande Bharat Express at Eluru' — Eluru MP Putta Mahesh Kumar ne flag-off kiya; MLA Songa Roshan Kumar sirf maujood tha. REJECT: dusre neta (MP) ka karyakram + kendriya pariyojna (railway) bina vyaktigat bhoomika.
// - Deccan Chronicle, ~Nov 2025, 'B.C. Janardhana Reddy Says AP to Set Up Corporation for Road Development' — Eluru MP Putta Mahesh Kumar Yadav ke programmes me 'Chintalapudi MLA Roshan Kumar and other leaders participated'; Eluru–Jangareddygudem four-lane aur Chintalapudi me roads ke ailaan MP ke. REJECT: dusre neta ka karyakram, MLA ki bhoomika sirf maujoodgi.
// - theweek.in wire (PTI), 2024-11, 'Address problems of Kolleru lake area residents Andhra Minister tells officials' — 'Chintalapudi MLA Roshan Kumar Songa pressed for swift action on forest land issues in his constituency' — minister ki review meeting me sirf maang. REJECT: sirf maang/prastav, dastaveji nateeja nahi.
// - Hans India reporter Noor F Shaik ki story (muckrack par indexed): District Collector K Vetri Selvi aur Chintalapudi MLA Songa Roshan Kumar ne Eluru Collectorate se video conference ke zariye Jalgaon (Maharashtra) me hue Lakhpati Didi Sammelan me hissa liya. REJECT: sarkari abhiyan me keval shamiliyat.
// - tmv.in, 'Annadata Sukhibhava Boost: MLA Roshan Kumar Presents Cheque to Farmers' — Dharmajigudem (Lingapalem mandal) me kisan sabha, Rs 20.51 crore symbolic mega cheque, Chintalapudi Lift Irrigation Project 'work will begin soon'. REJECT: source whitelisted nahi + sirf ghoshna/assurance, poora lokarpan/shilanyas nahi.
// - pynr.in (The Pioneer), 'Gram sabhas to plan work based on local needs: Eluru Collector' — Pragadavaram me MGNREGS gram sabha me MLA chief guest. REJECT: source whitelisted nahi + sirf nirikshan/maujoodgi.
// - newindianexpress.com, May 2024, 'Eluru: Know your candidates' — pre-election profile; NGO 'Mission Hope' se scholarships aur daily wage labourers ko khana. REJECT: pre-term kaam + daan/rahat shreni me aata hai.
// - KING daily epaper PDFs (Sep 2026) — MLA ne Lift Irrigation Sangham ke naye chairman se kisaanon ko behtar seva ka sujhaav diya. REJECT: source whitelisted nahi + sirf speech/maang.
// - YouTube (drpradeepchinta channel): 'TDP MLA openly explaining Babu strategy and requesting people to join JSP' — REJECT: YouTube whitelisted nahi; pehchaan bhi Songa Roshan Kumar se jodi nahi gayi.
// - NEGATIVES: whitelisted media me Jun 2024 ke baad MLA ke khilaf FIR/chargesheet/janch/nyayik vikas ka koi record nahi mila; Indian Express ke 2024 affidavit data me Roshan Kumar Songa ke khilaf 0 criminal cases darj hain. IndianKanoon par 'Roshan Kumar' naam ke kuch Delhi cases mile lekin inka MLA se koi sambandh sthapit nahi hota — inka istemaal nahi kiya gaya. Chunav yachika/party karyawahi/parivar ke mamle — kuch nahi mila.
// CONCLUSION: Whitelisted sources me koi bhi vyaktigat lokarpan/shilanyas (bhautik sarkari sanrachna, fund+bhoomika ke saath), itemized sanction list, GO-backed swikriti, ya Vidhansabha-maang ka dastaveji nateeja nahi mila. Profile khaali rakhi gayi hai.
// kolusu-partha-sarathy — 0 entries (QA-checked).
// kolusu-partha-sarathy — 0 works + 0 negatives (mined 2026-10-18)
// Pehchan pakki: Nuzvid (Eluru jila, Eluru Lok Sabha, Assembly Constituency No. 70),
// TDP, Winner 2024 — karyakaal Jun 2024+ (PRS MLA-track: term start 04-Jun-24, in office).
// Mandals: Agiripalli, Chatrai, Musunuru, Nuzvid.
// Runner-up: Meka Venkata Pratap Apparao (YSRCP) — unke mamle/kaam in par NAHI.
// MANTRI hain (Housing + I&PR) — isliye sirf Nuzvid seat ke kaam liye gaye;
// vibhag ke rajya-stariya faisle, dusre jilon ke daure aur cabinet ke elaan sab REJECT.
// Whitelisted English media me Nuzvid ke liye vyaktigat lokarpan/shilanyas,
// itemized sanction list ya GO-backed swikriti MILI HI NAHI — coverage me sirf
// ghoshnaen, rajya-stariya housing faisle, aur seat ke bahar ke karyakram mile.
// Isliye profile khali hai — galat entry se behtar.

andhraWorks['kolusu-partha-sarathy'] = [];

// REJECT-LOG (kolusu-partha-sarathy, mined 2026-10-18)
// 1. Deccan Chronicle — "Nuzvid To Be Developed As Model Municipality" (2026-10-12; page khola aur padha): Housing minister ne media ko bataya ki sarkar Nuzvid Municipality ko model municipality banane ke liye Rs 150 crore sanction KAREGI ("would sanction"), aur Rs 70 crore ke kaam pichhle 2.5 saalon me shuru hue. REJECT — sirf ghoshna; koi itemized work list, GO number ya fund-srot disclosed nahi; Rs 70 crore ka dawa bina breakdown ke.
// 2. Deccan Chronicle — "155 Crore Proposals Sent To Develop Nuzvid As Model Municipality: Minister" (tithi inferred: 2026-10-18 ko search me "16 hours ago" — reasoning disclose hai): bike rally me minister ne kaha Rs 155 crore ke prastav sarkar ko BHEJE GAYE; Rs 88.46 crore ke kaam chal rahe/kuch poore. REJECT — prastav bhejna sirf ghoshna; "chal rahe kaam" ka koi itemized detail, GO ya fund-srot nahi (dawa badge ke liye bhi kamzor — RETRY-LEAD B dekho).
// 3. The Hindu — "Andhra Pradesh Chief Minister Naidu pats Minister Parthasarathy for his role in AI startup bagging laurels" (2025-08-06; page khola aur padha): IIIT Nuzvid me lagbhag ek saal pehle (matlab 2024 me, term ke dauraan) Parthasarathy ke sahyog se shuru hui Parabola9 AI startup ne national hackathon me 2 puraskar jeete; CM ne minister ko saraha. REJECT — niji startup ki uplabdhi hai; koi bhautik sarkari sanrachna ka lokarpan/shilanyas nahi, fund disclosed nahi, nirdharit VALID shreniyon me nahi aata.
// 4. The Hindu — "Kolusu holds Praja Darbar, directs officials to resolve grievances" (2025-12-26, snippet): Nuzvid me Praja Darbar, 4 mandalon se 16 yachikaen. REJECT — shikayat-nivaran karyakram; koi bhautik sanrachna nahi.
// 5. Deccan Chronicle + The Hans India — "Rs 53-Crore Development Works Launched in Atmakur" (Sep 2026): teen mantriyon (Parthasarathy samet) ne Atmakur (NELLORE dateline) me Rs 53.25 crore ke karyakramon me hissa liya — TIDCO colony mandir (Rs 75 lakh) ka lokarpan, pipeline works (Rs 1 crore), substations. REJECT — Atmakur Nellore jile me hai, Nuzvid seat ke bahar; Parthasarathy sirf sahabhagi the.
// 6. New Indian Express — "4.5 lakh houses handed over in two years: Minister Kolusu Parthasaradhi" (2026-06-19): rajya-stariya housing dawa. REJECT — vibhag ka rajya-faisla, Nuzvid-specific bhoomika nahi.
// 7. Deccan Chronicle — "Minister Orders Completion Of 5 Lakh Houses By Ugadi": REJECT — vibhag ka rajya-faisla.
// 8. New Indian Express — "Pradhan Mantri Awas Yojana project works in the State pick up momentum" (2025-09-14): REJECT — vibhag ka rajya-faisla.
// 9. New Indian Express — "Andhra Minister Kolusu launches App for faster government updates" (2026-10-09): I&PR vibhag ka mobile/web app, Vijayawada me launch. REJECT — vibhag ka rajya-faisla, Nuzvid se bahar.
// 10. Business Standard — universal health policy cabinet decision (Rs 25 lakh cover, ~Sep 2025): REJECT — rajya-faisla.
// 11. The Week (PTI auto-generated) — "Work begins on 80 pc of Rs 9 lakh crore projects in Andhra Minister" (Nov 2024): cabinet investment approvals. REJECT — rajya-faisla.
// 12. New Indian Express — "Coalition government rebuilding Andhra Pradesh brick by brick" (2025-12-24): Meet-the-Press policy speech. REJECT — sirf ghoshna.
// 13. tmv.in — "Minister Kolusu Parthasarathi Unveils Rs 6 Crore Smart City Plan for Nuzvid" (Feb 2026): REJECT — outlet whitelist se bahar.
// 14. pynr.in (The Pioneer repost) — "Skill hubs being set up for youth: Minister Parthasarathy": REJECT — whitelist se bahar; waise bhi IIIT Nuzvid me Mega Job Mela ka udghatan + skill hub ghoshna — koi shilanyas/lokarpan nahi.
// 15. The Hindu — Bapatla district in-charge visit, "Parthasarathy vows to boost Bapatla economy" (2024-11-05): REJECT — Bapatla jila, Nuzvid seat ke bahar (district in-charge ki bhoomika mantri-vibhag hai).
// 16. New Indian Express — Durga temple board oath, Vijayawada (2025-10-12): minister sirf samaroh me upasthit. REJECT — sirf maujoodgi, seat ke bahar.
// 17. Dailyhunt — PMAY 3 lakh houses launch, Burripalem (Tenali): REJECT — aggregator whitelist se bahar; MLA sirf attendee.
// 18. True Point News e-paper (2026-06-26) — "Dial Your Minister" Nuzvid constituency outreach: REJECT — grievance program, koi bhautik sanrachna nahi.
//
// NEGATIVES: whitelisted media me Kolusu Parthasarathy (Nuzvid) ke khilaf koi FIR, chargesheet, janch ya Jun 2024 ke baad ka koi nyayik vikas NAHI mila. Khoj me "Parthasarathy" naam par mile saare cases (CBI Pondicherry University case, Karnataka dacoity case, TN excise clerk case) alag-alag vyaktiyon ke hain — in par NAHI. Chunav-yachika / halafname ke pending mamalon ki koi Jun 2024+ legal development nahi mili.
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. AP DIPR press releases (dipr.ap.gov.in) me Nuzvid me minister ke shilanyas/lokarpan dhoondo — is worker ke paas live browser nahi tha, DIPR verify nahi ho paya.
// B. DC ki Rs 88.46 crore "chal rahe kaam" ghoshna (reject #2) — koi itemized Nuzvid works list (road-wise/scheme-wise, GO ke saath) mile to GO-backed entry ban sakti hai.
// C. The Hindu/DC ke kuch amp pages 403 par toote (DC 155-crore amp); live browser me poora text verify karo — itemized list ho to entry banao.
// kamineni-srinivas — 0 entries (QA-checked).
andhraWorks['kamineni-srinivas'] = [ ];

// REJECT-LOG kamineni-srinivas:
// LEAD-1: 220/33-kV power station at Gopavaram, Kaikaluru mandal (Rs 55 crore, inauguration scheduled 28 Sep 2026)
//   Source: newindianexpress.com (whitelist), dated 28 Sep 2026, opened and read.
//   REJECT: no personal role for the MLA. Inauguration done by Energy Minister Gottipati Ravi Kumar;
//   Kamineni Srinivas appears only as a quoted comment ('new facility would resolve long-pending power issues').
//   MLA ko sirf quote diya gaya hai - vyaktigat lokarpan/shilanyas ka koi saboot nahi.
// LEAD-2: Pawan Kalyan promise (municipality upgrade for Kaikalur, bridge, 50-bed hospital) - thehindu.com, 3 May 2024.
//   REJECT: pre-election promise by another leader, pre-term, Kamineni only present in audience.
// LEAD-3: Amaravati capital works Assembly speech by Kamineni - thehindu.com, ~Sep 2025 (article70088932).
//   REJECT: Assembly floor statement about capital-city works (outside Kaikalur seat), no constituency work.
// LEAD-4: 'BJP will never join hands with Jagan' statement at Sri Kurmam primary medical center inauguration (Srikakulam).
//   REJECT: teluguone.com not whitelisted; event in Srikakulam district, outside Kaikalur seat; 2017 (mantri-kaal era).
// LEAD-5: Deccan Chronicle 'U-Turn on controversial statement in APLA' (Sep 2025) + UNI 'YSRCP demands apology from Kamineni' (Sep 2025).
//   REJECT as negative: UNI explicitly not whitelisted; Deccan Chronicle piece is about an Assembly remark withdrawn/expunged -
//   political controversy, no FIR/chargesheet/judicial proceeding named against the MLA; fails negative criteria.
// LEAD-6: Kommineni Srinivasa Rao journalist FIR/remand/bail coverage (TNIE, The Hindu, Jun 2025).
//   REJECT: different person (Sakshi TV anchor Kommineni Srinivasa Rao), not MLA Kamineni Srinivas - identity mismatch.
// LEAD-7: AAIMS foundation stone Amaravati (2017), Mangalagiri cancer hospital visit (2017), Diviseema PHC inaugurations (2014).
//   REJECT: all pre-term mantri-kaal era items, outside current 2024-2029 Kaikalur tenure.
// LEAD-8: 'Kamineni not to contest 2019 elections' (The Hindu) claiming Rs 600 crore development works.
//   REJECT: pre-term (2018), unitemized press-release claim, cannot attribute to current seat term.
// CONCLUSION: koi bhi post-Jun-2024 Kaikalur-seat ka lokarpan/shilanyas/swikriti whitelist source par nahi mili;
//   profile khaali rakhi gayi hai.

// ==== Krishna (Batch 4) ====
// yarlagadda-venkata-rao — 1 entries (QA-checked).
andhraWorks['yarlagadda-venkata-rao'] = [
  {
    title: 'MLA ne Energy Minister ke saath Gannavaram seat me MGNREGS se bani cement concrete sadkon ka lokarpan kiya, laagat Rs 45 lakh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/house-sites-will-be-distributed-to-all-beneficiaries-in-gannavaram-soon-says-ap-energy-minister/article69784376.ece',
    date: '2025-07-07',
    note: 'The Hindu ke mutabik 7 Jul 2025 ko Gannavaram me sarkar ke ek saal ki uplabdhiyon wale outreach karyakram ke dauran MLA ne Energy Minister Gottipati Ravi Kumar ke saath seat me bani cement concrete sadkon ka lokarpan kiya; sadkon ki laagat Rs 45 lakh thi aur paisa MGNREGS fund se aaya tha (fund-srot spasht). Credit capped: mukhya karyakram mantri ka tha aur MLA sah-lokarpan karta dikhe.',
    period: '2024-2029',
  },
];

// REJECT-LOG yarlagadda-venkata-rao:
// 1. Usi The Hindu (2025-07-07) karyakram me MLA ne CMRF cheque aur Rs 23.92 lakh ke Letters of Credit 33 labharthiyon ko diye — rahat/daan kaam, reject.
// 2. The Hindu (2026-01-05) — Gannavaram airport par AP-Transco ka 132/33 kV substation (Rs 30 crore): Energy Minister ne lokarpan kiya, MLA sirf maujood tha ('MLA is also seen / among those present') — dusre neta ke karyakram me maujoodgi, reject.
// 3. TOI (Vijayawada, ~Apr 2026) — Narayana ne Vijayawada ke 3 masterplan roads (Rs 105 crore) ka shilanyas kiya; MLA sirf kai vidhayakon ke saath dais par maujood tha, personal bhoomika nahi — reject.
// 4. The Hans India (~Oct 2026) — Health Minister ne Janardhanapuram (Gudivada division, Krishna) me village health clinic ka lokarpan kiya; MLA sirf saath tha. Dusre neta ka karyakram + Gannavaram seat ke bahar ka sthal — reject.
// 5. The Hindu (2025-03-20) — Lokesh ne Krishna jile me Ashok Leyland bus unit ka lokarpan kiya; MLA sirf 'present' — reject.
// 6. Deccan Chronicle (2025) — Lokesh digital growth engine karyakram; MLA sirf 'present' — reject.
// 7. TOI (Vijayawada, ~Nov 2025) — MLA ne Gannavaram/Bapulapadu/Ungutur mandals ko NTR jile me merge karne ki sarkar se maang/appeal ki — sirf maang/prastav, dastavezi nateeja nahi — reject; follow-up lead.
// 8. TruePoint News epaper (Sep 2026) — MLA ne Gannavaram Boys High School ground ke paas Anna Canteen ka lokarpan kiya aur CM se Ramavarappadu me doosre canteen ki swikriti ka dawa kiya (Davajigudem road, Gandhi Bomma Center, Konaya Cheruvu ke vikas ke dawe bhi) — source whitelist me nahi (chhota Telugu portal), reject; duble whitelisted-source lead.
// 9. YouTube/Vigil News etc — MLA vs Vallabhaneni Vamsi political statements — party politics, koi kaam nahi — reject.
// 10. Pehchan-jaal check: Vallabhaneni Vamsi Mohan (YSRCP, runner-up, kai mamle/fir ki khabrein) aur Vallabhaneni Balashowry (TDP, Machilipatnam MP) alag-alag vyakti hain — unke MPLADS/mamle is profile par bilkul nahi jode.
// 11. Negatives: MLA khud aaropi ho aisi koi FIR/chargesheet/janch/nyayik vikas ki established-media (whitelist) khabar Jun 2024+ me nahi mili — Vamsi se judi sab khabrein pehchan-jaal ke kaaran reject. Halafnama-pending pre-term mamle standalone reject-niyam ke tahat shamil nahi.
// venigandla-ramu — 1 entries (QA-checked).
andhraWorks['venigandla-ramu'] = [
  {
    title: 'Gudivada MLA Venigandla Ramu ki maang par 44 gaon ke paani sankat ke liye sarkaar ne Rs 3.8 crore ki marammat swikaar ki',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2024/Dec/24/andhra-dy-cm-pawan-kalyan-stresses-transparency-accountability-in-public-works',
    date: '2024-12-24',
    note: 'MLA ne Palle Pandaga programme ke dauran 44 gaon me paani aapurti ki samasyaen uthayi; iske baad sarkaar ne Rs 3.8 crore marammat ke liye allocate kiye, jisme 14 gaon me kharab filter beds ka badalna shamil hai. Dy CM Pawan Kalyan ne Mallayapalem gaon me Rural Safe Drinking Water Scheme ke kaam ka nirikshan kiya. Swikriti aur nirikshan sarkaar ka kaam hai — MLA ki credit sirf maang uthane tak. Fund scheme/srot ke baare me source me adhik vivaran ghoshit nahi.',
    period: '2024-2029'
  },
];

// REJECT-LOG venigandla-ramu:
// 1. Times of India 'Gudivada MLA vows to provide RO water to all' (articleshow/111471720.cms, 2024-06) — 100 din me RO paani ka sirf vaada/ghoshna; micro filters apne paise aur NRI chande se lagane ki baat (niji kharch) → REJECT (sirf ghoshna + niji kharch niyam).
// 2. Times of India 'Major fire guts Gudivada commercial complex' (articleshow/125964263.cms) — MLA ne sirf site ka daura kiya aur sthiti ka jayza liya; koi bhoitik kaam ya swikriti nahi → REJECT (sirf daura/nirikshan).
// 3. Deccan Chronicle 'Haryana wins U-14 Girls National Kabaddi Championship in Gudivada' — MLA karyakram me sirf upasthit; mukhya vakta ACA adhyaksh/MP the → REJECT (dusre neta ke karyakram me maujoodgi).
// 4. The Hindu 'Vijayawada MP launches distribution of new Pattadar passbooks in Gudivada constituency' (2026-01-02) — shubharambh MP Kesineni Sivanath ne kiya, MLA sirf upasthit → REJECT (dusre neta ke karyakram me maujoodgi; sarkari abhiyan ka shubharambh).
// 5. The Hans India 'Quality healthcare will reach every village, says Satya Kumar' (1129820) — Janardhanapuram village health clinic ka lokarpan health minister Y Satya Kumar ne kiya; MLA sirf upasthit kayi MLAs me → REJECT (vyaktigat lokarpan nahi).
// 6. The Hindu 'MP asks for approvals of various road projects in Machilipatnam LS constituency' (2025-08-01) — sadkon ki maang MP V. Balashowry ki hai (Gudivada-Kankipadu 27 km road, Gudivada town roads); kendriya sadak niyam + MLA ki bhoomika nahi → REJECT.
// 7. Gudivada-Nujella four-lane ROB (NH-165), PM dwara inauguration (m.economictimes.com/blogspot reports) — kendriya pariyojna, MLA ki vyaktigat bhoomika ka koi dastavez nahi → REJECT (kendriya pariyojna niyam).
// 8. pynr.in 'Anagani promises industrial park in Gudivada constituency' — source whitelist me nahi; vaada mantri Anagani Satya Prasad ka tha → REJECT (srot + dusre neta ka vaada).
// 9. truepointnews.com epaper (drinking water/summer supply, RO) stories — whitelist me nahi → REJECT (srot ke kaaran).
// 10. etvbharat.com cockfighting report (MLA match dekhte dikhe) — whitelist me nahi; works content nahi → REJECT.
// 11. m.dailyhunt.in 'Venigandla Ramu should pick TDP or Tulasi Babu' — whitelist me nahi; Ramu sirf rishtedar/rumor ke taur par ullekh, koi aarop nahi → REJECT.
// Negatives: Jun 2024 ke baad established media me Venigandla Ramu par kisi FIR/chargesheet/janch ya nyayik vikas ki report nahi mili; halafname ke pending mamle akele negative nahi bante → koi negative entry nahi.
// kagitha-krishnaprasad — 1 entries (QA-checked).
// Andhra Pradesh AP4 worker fragment — kagitha-krishnaprasad (Kagitha Krishnaprasad, Pedana, TDP)
// Karyakaal: Jun 2024+ ; period: '2024-2029'
// Positive entries: 1 (established media, post-event reporting, joint shilanyas, fund disclosed).
// Negatives: 0 qualifying (established media + MLA-khud-aaropi + FIR/janch wala koi mamla nahi mila).

andhraWorks['kagitha-krishnaprasad'] = [
  {
    title: 'Pedana seat me Rs 5.3 crore ke do sadak kaamon ka MP ke saath sanyukt shilanyas, SASCI fund se',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2026/Sep/28/rs-53-crore-road-works-launched-in-andhra-pradeshs-pedana',
    date: '2026-09-27',
    note: 'Pedana MLA Kagitha Krishna Prasad aur Machilipatnam MP Vallabhaneni Balashowry ne sanyukt roop se Pedana Assembly seat me do sadak kaamon ke shilanyas rakhe: Konkapudi-Edumudi sadak (Rs 2.40 crore) aur Balliparru-Kakarlamudi sadak (Rs 2.90 crore), dono Special Assistance to States for Capital Investment (SASCI) funds se. Shilanyas sanyukt tha, isliye MLA ka vyaktigat yogdaan alag se bataya nahi ja sakta — credit capped. Tareekh ka anuman: report me shilanyas Sunday ko hua likha hai aur article Somwar 28 Sep 2026 ko publish hua, to karyakram ki tareekh 27 Sep 2026 hai.',
    period: '2024-2029',
  },
];

// REJECT-LOG kagitha-krishnaprasad:
// 1. TNIE 23 Feb 2026 — 'TDP lays foundation stone for first permanent district office in Krishna district': party ka jila karyalaya, MLA Kagitha Krishna Prasad sirf attendees me the (Excise Minister, APSRTC chairman, Government Whip aur kai MLAs ke saath). Vyaktigat lokarpan nahi, party/duo neta ka karyakram — REJECT (dusre neta ke karyakram me maujoodgi; niji/party sanrachna).
// 2. TNIE 25 Apr 2024 — 'Battle lines drawn in Pedana Assembly constituency': pre-term chunavi context; weavers/drinking water/irrigation sirf maangein aur mudde, MLA ka koi kaam ya nateeja nahi — REJECT (sirf maang/prastav; pre-term context).
// 3. TNIE 27 Mar 2025 — 'Acute water shortage hits livelihood of Pedana Kalamkari artisans': Kalamkari artisans ki paani ki sankat wali report; MLA ki koi vyaktigat bhoomika, yojna ya fund nahi — REJECT (sirf sankat/maang reporting).
// 4. Dailyhunt/Eenadu/Sakshi web/public.app/YouTube/FB-IG/blogspot leads: whitelist se bahar (aggregator ya chhote Telugu portals) — REJECT (whitelist violation).
// 5. archive.org G.O. 2019-MAUD_RT514 (S. Krishna Prasad, Manager & Accountant, Pedana Municipality): ye vyakti MLA Kagitha Krishnaprasad nahi — pehchan mismatch — REJECT (dusre vyakti ka mamla).
// 6. TNIE 28 Sep 2026 story me MP Vallabhaneni Balashowry bhi shamil the, lekin fund MPLADS nahi balki SASCI hai aur MLA ne shilanyas rakha — isliye credit capped ke saath entry valid hai.
// Negatives: established media me Jun 2024 ke baad MLA ke khilaf FIR/chargesheet/janch ya nyayik vikas wala koi qualifying mamla nahi mila.
// kollu-ravindra — 7 entries (QA-checked).
// Andhra Pradesh works-mining fragment: Kollu Ravindra (kollu-ravindra, Machilipatnam, TDP, mantri)
// Karyakaal: Jun 2024+ | period: 2024-2029
// Sirf Roman-script Hinglish istemal hua hai. Currency: Rs.
// Inferred event dates: jis report me din (Saturday/Tuesday/Monday/Friday) diya gaya tha,
// wahan date command se din milakar tithi tay ki gayi; reasoning har note me darj hai.
// Positive entries: 7 (established media, post-event reporting, vyaktigat shilanyas/lokarpan ya itemized swikriti, credit capped jahan lagu).
// Negatives: 1 qualifying (liquor case me A-2; ACB court ne Dec 2025 me case band kiya — stage-accurate, charge drop).

andhraWorks['kollu-ravindra'] = [
  {
    title: 'Machilipatnam GGH me Rs 2 crore ke advanced ultrasound aur arthroscopy units ka udghatan Ravindra ne kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/Jan/12/minister-inaugurates-ultrasound-arthroscopy-units-at-machilipatnam',
    date: '2025-01-11',
    note: 'TNIE report 12 Jan 2025 ko update hui aur event ko Saturday bataya gaya, isliye tithi 11 Jan 2025 mani gayi. Machilipatnam Government General Hospital me ultrasound aur CRM arthroscopic units ka udghatan Ravindra ne APSRTC Chairman Konakalla Narayana ke saath kiya; units ki keemat Rs 2 crore batayi gayi. Fund ka vishesh srot report me ghoshit nahi. Usi event me Kollu Foundation se stretcher daan ki baat bhi hai, jo niji kharch hai aur is entry ka hissa nahi.',
    period: '2024-2029'
  },
  {
    title: 'Machilipatnam ke Gundupalem aur Vadapalem me micro water filters ka udghatan Ravindra ne kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Apr/23/andhra-minister-opens-micro-water-filters-in-machilipatnam',
    date: '2025-04-22',
    note: 'TNIE report 23 Apr 2025 ko publish hui aur event ko Tuesday bataya gaya, isliye tithi 22 Apr 2025 mani gayi. Ravindra ne Gundupalem aur Vadapalem me micro water filters ka udghatan kiya; micro filters ki sthapana Rs 2.50 crore ki batayi gayi jo zila-bhar me chal rahi thi. Report me ise Jal Jeevan Mission se jodkar pesh kiya gaya; fund ka alag se vishesh srot ghoshit nahi.',
    period: '2024-2029'
  },
  {
    title: 'Machilipatnam ke 17th division me sewerage project ka shilanyas Ravindra ne kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/Jun/29/machilipatnam-drainage-system-will-be-revamped-with-rs-165-crore-andhra-excise-minister',
    date: '2025-06-28',
    note: 'TNIE report 29 Jun 2025 ko update hui aur event ko Saturday bataya gaya, isliye tithi 28 Jun 2025 mani gayi. Ravindra ne 17th division me sewerage project ka shilanyas kiya aur kaha ki Machilipatnam Municipal Corporation ka drainage system Rs 165 crore se sudhara jayega; Rs 73 crore ke AMRUTH fund pehle atke hue the jo wapas laye gaye. Is vishesh project ki alag lagat report me ghoshit nahi; Rs 165 crore kul revamp ka dawa hai.',
    period: '2024-2029'
  },
  {
    title: 'CID ki sharaab niti jaanch me A-2 ke roop me naam aane ke baad ACB court ne Ravindra ke khilaf case band kar diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Dec/02/acb-court-closes-liquor-case-filed-against-cm-naidu-after-cid-probe-finds-no-evidence',
    date: '2025-12-01',
    note: 'TNIE report 2 Dec 2025 ko publish hui aur court ke faisle ko Monday bataya gaya, isliye tithi 1 Dec 2025 mani gayi. Vijayawada ACB court ne case band kar diya; CID ne court ko bataya ki jaanch poori ho chuki hai aur aage mukadma chalane ki avashyakta nahi, jiske baad Excise Commissioner ne NOC di. Case 28 Oct 2023 ko CID Mangalagiri me Crime No. 18/2023 ke tahat darj FIR se shuru hua tha, jisme I S Naresh ko A-1, Ravindra ko A-2 aur N Chandrababu Naidu ko A-3 bataya gaya tha. Aarop 2014-2019 ke dauran sharaab niti ke faislon me aniyamitta ka tha. Ravindra ya unke jawab ka koi bayan is report me darj nahi.',
    period: '2024-2029'
  },
  {
    title: 'Machilipatnam Port ke paas Karagraharam me MSME Park ka shilanyas Ravindra ne kiya',
    category: 'Rojgar',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/cities/vijayawada/2026/May/26/minister-kollu-lays-stone-for-msme-park-to-boost-industrial-growth',
    date: '2026-05-25',
    note: 'TNIE report 26 May 2026 ko update hui aur event ko Monday bataya gaya, isliye tithi 25 May 2026 mani gayi. Ravindra ne Krishna District Collector DK Balaji ke saath Karagraharam me MSME Park ka shilanyas kiya; park 20-21 acre me banega aur 82 industrial plots honge. Buniyadi suvidha MSME department ke zariye vikasit hogi. Ye park rajya ki 38 MSME parks wali yojana ka hissa hai, lekin ye vishesh park Ravindra ki seat me Machilipatnam Port ke paas hai aur unhone vyaktigat roop se shilanyas kiya. Park ki lagat report me ghoshit nahi.',
    period: '2024-2029'
  },
  {
    title: 'Machilipatnam Municipal Corporation me alpasankhyak dharmsthalo aur kabristano ke liye Rs 1.21 crore ki sarkari swikriti par Ravindra ne khushi jatayi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2026/Jul/06/nda-govt-committed-to-welfare-of-minorities-minister-kollu-ravindra',
    date: '2026-07-06',
    note: 'Rajya sarkar ne 15th Finance Commission ke tahat Machilipatnam Municipal Corporation seema me alpasankhyak pooja sthalon aur kabristano ke vikas karyon ke liye Rs 1.21 crore ki swikriti di. Minority Corporation Director Dr Haseem Beg ke netritva me pratinidhimandal ne Ravindra se milkar aabhaar jataya aur kaha ki samudaay ki zarooraton ki pehchan aur sarkari swikriti dilane me unhone vishesh pahal ki. Credit capped: swikriti sarkar ki hai; Ravindra ki bhoomika pahal karne tak seemit rahi, jaisa pratinidhimandal ne kaha.',
    period: '2024-2029'
  },
  {
    title: 'Machilipatnam ke liye Rs 51 crore infra, Rs 53 crore ke do sewage plants aur Rs 7.5 crore ke municipal office ki swikriti ki jankari Ravindra ne di',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2026/Sep/23/rs-820-crore-infra-boost-to-ulbs-in-four-districts-in-andhra-pradesh',
    date: '2026-09-22',
    note: 'TNIE report 23 Sep 2026 ko publish hui aur CM ke virtual shilanyas ko Tuesday bataya gaya, isliye tithi 22 Sep 2026 mani gayi. CM N Chandrababu Naidu ne rajya ke 123 nagar nikayon me Rs 11,359 crore ke karyon ka virtual shilanyas kiya; isme Machilipatnam ko Rs 51 crore mila jo drinking water, drainage, roads aur anya infra par kharch hoga. Ravindra ne bataya ki 160 drainage gaps par lagbhag Rs 15 crore kharch hoga, Rs 53 crore ke do sewage plants swikrit hue jinka tender poora ho chuka hai, aur Rs 7.50 crore me municipal office banega, saath me road widening hogi. Swikriti Hybrid Annuity Model aur anya shehri vikas karyakramon ke tahat hai. Credit capped: ye ghoshna rajya-stariya launch karyakram me hui; Ravindra ne seat ke hisse ki jankari di.',
    period: '2024-2029'
  }
];

// REJECT-LOG kollu-ravindra:
// 1. District Police Centre shilanyas, China Kara Agraharam, 17 Jul 2025 (TNIE) — shilanyas Home Minister Vangalapudi Anitha ka tha, Ravindra saath me maujood; dusre neta ke karyakram me maujoodgi, REJECT.
// 2. Police training centre, 18 Jul 2025 (Devdiscourse) — source whitelist me nahi; TNIE wale lead me bhi mukhya bhoomika HM ki thi; REJECT.
// 3. Gilakaladindi marine police station renovation, as per minister request (TNIE) — sirf ghoshna, kaam abhi hua nahi; REJECT.
// 4. Krishna University Rs 45 crore makeover plan, 16 May 2025 (TNIE) — sirf yojana-ghoshna; HRD minister se approval baki, proposals underway; REJECT.
// 5. CPWS scheme shilanyas, Tarakaturu, Guduru mandal, May 2025 (TNIE) — seat ke bahar; REJECT.
// 6. Yadava Kalyana Mandapam shilanyas, Nov 2024 (The Hindu) — mantri ki niji Rs 25 lakh dene ki ghoshna shamil; niji kharch; REJECT.
// 7. Goa Shipyard facility ka swagat aur cake katna, Sep 2026 (TNIE) — kendriya PSU pariyojna; Ravindra ki vyaktigat bhoomika nahi; REJECT.
// 8. VB G-RAM G launch aur Rs 42 crore ka dawa, Jul 2026 (TNIE) — sarkari abhiyaan ka shubharambh; REJECT.
// 9. Vision document taiyaar karne ki ghoshna, Sep 2026 (The Hans India) — sirf ghoshna; REJECT. Usi interview me Tallapalem aur Bandarukota bridges ke underway hone ka dawa bhi independent verification ke bina sirf MLA ka dawa hai aur concrete bhoomika spasht nahi; standalone entry nahi banayi; REJECT.
// 10. CMRF cheques Rs 15.62 lakh vitaran, Nov 2025 (Deccan Chronicle) — rahat/daan kaam; REJECT.
// 11. Pothole-free roads programme me bhagidari, Nov 2024 (The Hindu/DC) — abhiyaan me hissa; vyaktigat bhoomika nahi; REJECT.
// 12. Koneru Centre PPP vikas yojana, Oct 2024 (DC) — yojana-ghoshna; REJECT.
// 13. Machilipatnam ke liye Rs 30 crore swikriti ka dawa, Oct 2024 (pynr.in) — source whitelist me nahi; alag se concrete detail nahi; REJECT.
// 14. Machilipatnam Port completion ghoshna, Apr 2025 (TNIE/maritimegateway) — bandargah pariyojna; vyaktigat bhoomika nahi; REJECT. Chorampudi (Bantumilli, Pedana seat) ke Rs 2 crore ke kaam — seat ke bahar; REJECT.
// 15. Machilipatnam medical college udghatan (2023, purani sarkar) — pre-term aur dusri sarkar ka kaam; REJECT.
// 16. Business Standard 2016 ke reservoir/pipeline shilanyas — pre-term; REJECT.
// 17. Halafname ke 15 pending cases (myneta.info) — sirf halafnama mamle akele; REJECT.
// 18. ALLEN institute Vijayawada branch udghatan, Nov 2025 (TNIE) — niji coaching institute ka udghatan; seat ke bahar (Vijayawada); REJECT.
// 19. Ongole mines office shilanyas, Nov 2025 (TNIE topic page) — vibhag ka kaam, seat ke bahar; REJECT.
// 20. PHC sthapna ghoshna (Chinnapuram, Tallapalem aadi), Jan 2025 (TNIE GGH article) — sirf ghoshna; REJECT.
// 21. Thota Chandrayya statue aur Pattabhi Seetharamayya memorial, Jun 2025 (TNIE) — statue ki ghoshna aur memorial ke liye sirf zameen aavantan ki baat; pre-event; REJECT.
// QA-DROP kollu-ravindra (parent): Rs 75 crore drainage modernisation nirikshan entry — sirf nirikshan = reject niyam; poori tarah hatayi gayi.
// buddhaprasad-mandali — 0 entries (QA-checked).
// buddhaprasad-mandali — 0 works + 0 negatives
// Mined 2026-10-18. Pehchan: Buddhaprasad Mandali (Mandali Buddha Prasad),
// JSP, Avanigadda (Krishna district), 16th AP VS 2024-2029 (assumed office
// 4 June 2024; ex-Deputy Speaker 2014-2019, ex-minister 2007-2009;
// halafnama me 0 criminal cases — myneta.info, 2024 affidavit).
// Fund: AP MLA fund aavantan apust; kisi bhi srot ne MLA-fund istemal
// ghoshit nahi kiya — isliye fund-srot note me imaandaari se 'ghoshit nahi'.

// REJECT-LOG (sabhi lead whitelisted media + sarkari portal par check hue;
// koi bhi VALID nahi — qualify na hone par = [];)
// 1. Rythu Seva Kendra (RSK), Avanigadda — 2025-12-04 ko MLA ne nayi
//    RSK building ka udghaatan kiya; kul budget Rs 27.94 lakh (Rs 23.94
//    lakh ka hissa); local Revenue Hall ke saamne; Panchayat Raj and
//    Rural Development Department ki dekhrekh me bani; TPN Bureau, Dec 4.
//    Source sirf True Point News e-paper
//    (https://epaper.truepointnews.com/media/2025-12/ap-051225.pdf) —
//    whitelist par NAHI. REJECT: source not whitelisted. RETRY LEAD:
//    whitelisted outlet (The Hindu/NIE/TOI/DC/Hans) me yahi report mile
//    to physical sarkari structure ka vyaktigat lokarpan maankar entry banao.
// 2. Govt Degree College, Avanigadda — 2024-07-08 ko MLA ne nayi computer
//    lab ka udghaatan kiya; 43 HP desktops, Rs 22.93 lakh; fund
//    Commissionerate of College Education ka tha. Source sirf college ki
//    website (http://gdcavanigadda.ac.in/Report.pdf) — whitelist par NAHI;
//    upar se keval shubharambh. REJECT: source not whitelisted + sirf
//    shubharambh (fund+bhoomika MLA ke nahi).
// 3. Aswaravupalem park (Rs 15 lakh, lokarpan) + 4 sadken (Rs 54.60 lakh,
//    Palle Panduga 1.0/3.0, shilanyas) — 2026-10-13; AP Green Chairman
//    MLC Konidela Nagababu ne kiya, MLA sirf maujood the. The Hindu
//    (whitelisted:
//    https://www.thehindu.com/news/national/andhra-pradesh/walta-act-will-be-strengthened-to-protect-valuable-trees-says-mlc-nagababu/article71580141.ece).
//    REJECT: dusre neta ke karyakram me maujoodgi (aamantran/netritva bhi nahi).
// 4. KDCC Bank, Mopidevi — nayi building Rs 1.10 crore ka udghaatan
//    Minister Kollu Ravindra ne kiya (Oct 2024), MLA sirf saath the.
//    New Indian Express (whitelisted:
//    https://www.newindianexpress.com/amp/story/cities/vijayawada/2024/Oct/18/rs-110-crore-kdcc-bank-building-opened-in-vijayawada).
//    REJECT: dusre neta ke karyakram me maujoodgi.
// 5. telugu360 (569 din purani report) — 'In Avanigadda, MLA Mandali Buddha
//    Prasad facilitated CC road approvals and repaired a damaged pond' —
//    source non-whitelisted, koi itemized list/date/cost nahi. REJECT:
//    vague claim; itemization nahi.
// 6. Pre-term leads: The Hindu 2004-06-28 (Prakasam barrage apron works,
//    Rs 22 crore project me nirikshan); The Hindu riverbeds/housing
//    (2019-era press conference); The Hindu photography academy (2016).
//    REJECT: Jun 2024 se pehle ka term.
// 7. New Indian Express 2025-02-26 — Avanigadda MLA ko Philadelphia AAA
//    convention ka nimantran. REJECT: ye kaam nahi, karyakram ka nimantran.
// 8. Deccan Chronicle — 'MLA Prasad lays foundation stones for 76 development
//    works' — ye Anantapur Urban MLA D. Prasad hain, Avanigadda ke Buddha
//    Prasad nahi. REJECT: galat vyakti.
// 9. DRDO missile testing centre, Nagayalanka — PM ne Nov 2025 me shilanyas
//    kiya (Rs 1,459 crore, PTI wire). Nagayalanka MLA ki seat me hai, lekin
//    MLA ki koi vyaktigat bhoomika darj nahi. REJECT: kendriya pariyojna
//    bina vyaktigat bhoomika.
// NEGATIVES: halafnama me 0 criminal cases; established media me Jun 2024
// ke baad koi FIR/chargesheet/janch ya nyayik vikas (adalat-aadesh/notice)
// inke khilaaf nahi mila — isliye koi negative entry nahi.
andhraWorks['buddhaprasad-mandali'] = [];
// kumar-raja-varla — 1 entries (QA-checked).
// AP4 worker fragment - kumar-raja-varla (Kumar Raja Varla, Pamarru SC, TDP)
// Karyakaal: Jun 2024+ ; period: '2024-2029'
// Positives: 1 qualifying (established media, post-event reporting, sanyukt shilanyas, fund disclosed, role capped).
// Negatives: 0 qualifying (established media me MLA-khud-aaropi + FIR/chargesheet/janch wala koi mamla nahi mila).

andhraWorks['kumar-raja-varla'] = [
  {
    title: 'Pamarru me Rs 11.26 crore ke MSME park ke shilanyas me do mantriyon ke saath shamil hue',
    category: 'Rojgar',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/cities/vijayawada/2025/May/08/andhra-government-set-to-launch-state-wide-job-festival',
    date: '2025-05-08',
    note: 'TNIE ke mutabiq Pamarru (Krishna jila) me Rs 11.26 crore ki lagat se sthapit hone wale MSME park ka shilanyas 7 May 2025 ko Labour Minister Vasamsetti Subash, Excise Minister Kollu Ravindra aur Pamarru MLA Varla Kumar Raja ne milkar rakha; park ka uddeshya sthaniya yuvaon ke liye rozgar ke avsar paida karna hai. Shilanyas sanyukt tha, isliye MLA ka vyaktigat yogdaan alag se bataya nahi ja sakta - credit capped. Fund srot: rajya sarkar ki pariyojna (Rs 11.26 crore outlay ghoshit); MLA fund ka jikr srot me nahi.',
    period: '2024-2029',
  },
];

// REJECT-LOG kumar-raja-varla:
// 1. The Hindu 31 Jul 2025 / 2 Aug 2025 - Thotlavalluru island (Pamula Lanka) bridge: MLA ne kaha Rs 42 crore swikrit lekin financial clearance ka intezar - sirf dawa/ashwasan, koi poorn swikriti ya kaam shuru nahi hua - REJECT (sirf ghoshna; pre-sanction).
// 2. Times of India ~Sep 2025 - Pamula Lanka villagers demand bridge: MLA ne revised estimate Rs 42 crore ke saath project revival ka ashwasan diya - sirf ashwasan, koi sanctioned kaam nahi - REJECT (sirf ghoshna/maang).
// 3. The Hans India - Janardhanapuram (Gudivada division) me village health clinic ka udghatan: health minister ke netritva me 267 buildings ka samuhik udghatan; MLA ki keval maujoodgi - REJECT (dusre neta ke karyakram me maujoodgi).
// 4. The Hindu 1 May 2026 - Pamidimukkala me CM ka May Day + Pedala Sevalo karyakram: MLA sirf attendees me the, apna koi kaam nahi - REJECT (dusre neta ke karyakram me maujoodgi).
// 5. truepointnews epaper 2 Oct 2025 - Ayyanki-Pedasanagallu (Movva mandal) sadak kaam ka udghatan: non-whitelisted source; Rs 10 lakh ka yogdaan ek party neta ka vyaktigat kharch tha - REJECT (whitelist violation; niji kharch).
// 6. truepointnews epaper 13 May 2025 - Kurumadhali gaon me Pragathi Patham program: sirf nirikshan/review aur ratri vishram, koi kaam nahi - REJECT (sirf nirikshan/daura).
// 7. janagalam24.com - Yakamuru (Thotlavalluru mandal) me Rs 75 lakh ka community hall, NTPC CSR fund se; MP Balashowry ke saath MLA mukhya atithi - REJECT (whitelist violation; CSR samaroh).
// 8. hmtvlive - Lankapalli land issue par MLA ka vada: non-whitelisted + sirf maang/ashwasan - REJECT.
// 9. Eenadu - P-4 program me mukhya atithi: whitelist me nahi + samaroh bhagidari - REJECT.
// 10. teluguone.com - pita Varla Ramaiah (MLC) aur putr (MLA) wala political news: koi vikas kaam nahi - REJECT (nirikshan/mamla nahi).
// 11. Negatives: established media me Jun 2024 ke baad MLA ke khilaf FIR/chargesheet/janch ya nyayik vikas wala koi qualifying mamla nahi mila (khoj me sirf asambandhit A. Raja 2G case aur Raja Kumar case mile). Runner-up Kaile Anil Kumar ke mamle is profile par nahi jode.
// bode-prasad — 1 entries (QA-checked).
andhraWorks['bode-prasad'] = [
  {
    title: 'Penamaluru MLA Bode Prasad ne Kanuru gaon me KCP Colony aur SPP Road par bani nayi CC sadko ka vyaktigat roop se lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/mla-launches-development-works-in-krishna-district/article70342693.ece/amp/',
    date: '2025-11-29',
    note: 'Lokarpan me sambandhit vibhagon ke adhikari maujood the; sadko ki lagat/fund-srot report me ghoshit nahi. Date inference: article 2025-11-30 ko publish hua aur karyakram Sunday ko hua bataya gaya, isliye 2025-11-29.',
    period: '2024-2029'
  },
];

// REJECT-LOG bode-prasad:
// - Times of India (2026-05) 'Narayana lays foundation stone for three masterplan roads' (Rs 105 crore) — shilanyas MAUD mantri Ponguru Narayana ne kiya, Bode Prasad sirf maujood the (dusre neta ke karyakram me maujoodgi) → REJECT.
// - deccanrepublic.com 'NDA govt commitment to transparency...' (Pawan Kalyan review, Godavarru-Royyur 5 km road Rs 3 crore NREGS+SDRF) — source whitelist me nahi → REJECT (srot ke kaaran).
// - businessnewsweek.in 'Kamineni Hospitals privilege card launch' (2024-07) — whitelist source nahi + niji aspatal ka event, koi sarkari sanrachna nahi → REJECT.
// - Deccan Chronicle 'Neta Natter' + The Hindu 'gig worker' stunt (delivery boy role) — pradarshan/stunt, koi bhoitik sanrachna nahi → REJECT.
// - Deccan Chronicle 2017 tree translocation (Rs 1 lakh, Poranki peepul trees) — karyakaal se pehle (2017) → REJECT (pre-term).
// - ap7am ticket-denial story, NIE 'Penamaluru to witness tough fight' (2024-04) — works content nahi → REJECT.
// - Negatives: Jun 2024 ke baad Bode Prasad par kisi established media me FIR/chargesheet/janch ya nyayik vikas ki report nahi mili; 2014 proxy-exam aarop pre-term hai aur koi police complaint darj nahi hui thi → koi negative entry nahi.

// Andhra Pradesh — Batch 5: NTR + Guntur + Palnadu (10-12/26 jile).
// Coordinator QA 2026-10-18: bonda ET-Infra (Times Group TNN) entry whitelist-disclosed rakhi; Lokesh ki CSR-funded public-facility entries (lokarpan/lokarpan with fund disclosed) rakhi; vasantya party flag (YSRCP->TDP Mar 2024) parent ko flag.
// ==== NTR (Batch 5) ====
// Andhra Pradesh works-mining fragment: Kolikapudi Srinivasa Rao (kolikapudi-srinivasa-rao, Tiruvuru SC, TDP, NTR jila)
// Pehchan pakki: andhra.ts — slug 'kolikapudi-srinivasa-rao', Tiruvuru (SC), Telugu Desam Party, Winner 2024, seat scope Vissannapet/Gampalagudem/Tiruvuru/A.Konduru mandals.
// Karyakaal: Jun 2024+ | period: 2024-2029
// Sirf Roman-script Hinglish istemal hua hai. Currency: Rs.
// Positive entries: 0 — Dec 2024 se Jun 2026 tak whitelist sources me Tiruvuru seat ke is MLA ke vyaktigat lokarpan/shilanyas, itemized swikriti, GO-backed swikriti ya Vidhansabha maang ke dastaveji nateeja ka koi yogya item nahi mila.
// Negatives: 0 — established media me MLA khud aaropi + FIR/chargesheet/janch, ya Jun 2024+ me nyayik vikas, plus jawab note — aisa koi yogya mamla nahi mila.

andhraWorks['kolikapudi-srinivasa-rao'] = [];

// REJECT-LOG kolikapudi-srinivasa-rao:
// 1. Gampalagudem me naye classrooms ka udghatan, Jul 2025 (TNIE, https://www.newindianexpress.com/states/andhra-pradesh/2025/Jul/09/emphasis-on-upgrading-government-schools-vijayawada-mp-kesineni-sivanath) — report ke mutabik udghatan MP Kesineni Sivanath ne kiya, MLA ‘along with’ maujood the; MP ke karyakram me maujoodgi; bhoomika MP ki pramukh rahi; REJECT.
// 2. Tiruvuru me PGRS (Public Grievance Redressal System) karyakram, May 2025 (The Hindu, https://www.thehindu.com/news/national/andhra-pradesh/need-collective-efforts-to-develop-tiruvuru-assembly-constituency-vijayawada-mp/article69568284.ece/amp/) — MP ka jan-samvaad karyakram, MLA sirf sahbhagi; vyaktigat lokarpan/shilanyas nahi; REJECT.
// 3. Endowments ki zameen par avaidh nirman rokne ka nirdesh, 31 Jul 2024 (Deccan Chronicle, https://www.deccanchronicle.com/southern-states/andhra-pradesh/halt-illegal-ysrc-construction-in-tiruvuru-ap-mla-tells-officials-1813408) — MLA ne drain-canals par illegal structures ka nirikshan karke officials ko nirman rokne ka nirdesh diya; sirf nirikshan + nirdesh, koi vikas-karya lokarpan/shilanyas nahi; REJECT.
// 4. NTR District Review Committee baithak, 30 Nov 2024 (The Hindu, https://www.thehindu.com/news/national/andhra-pradesh/mlas-bring-to-ministers-notice-many-issues-at-ntr-district-review-committee-meet/article68932314.ece) — MLA ne medical/health/sinchai/sadak jaise mudde uthaye; sirf maang/charcha, koi dastaveji nateeja nahi; REJECT.
// 5. Ambapuram (Vijayawada) me baadh raahat daura, Sep 2024 (devdiscourse) — source whitelist me nahi; sirf raahat-daura; REJECT.
// 6. Kisano par vivadit tippani (‘dogs have loyalty’) (telanganatribune.com) — source whitelist me nahi (established outlet nahi); REJECT.
// 7. RGV bounty mamla — Ram Gopal Varma ki shikayat par AP-CID ne 3 Jan 2024 ko Kolikapudi ko Section 41A notice diya (The Hindu, https://www.thehindu.com/news/national/andhra-pradesh/cid-to-question-amaravati-jac-convener-based-on-ram-gopal-varmas-complaint/article67698456.ece/amp/) — pre-term; Jun 2024+ me is mamle me MLA ke khilaf koi FIR/chargesheet/nyayik vikas whitelist source me nahi mila; abplive.com (Nov 2024) me sirf RGV ki shikayat ka zikr hai jo Dec 2023 (pre-term) ki ghatna se judi hai, aur wo source bhi whitelist me nahi; REJECT.
// 8. Tiruvuru me YSRCP karyakarta ke bhavan par bulldozer chalane ka dawa + Chityala sarpanch ki patni T Kavitha ke suicide attempt ka aarop + ‘illegal gravel and sand business’ ka aarop (TOI, ~Oct 2024, https://timesofindia.indiatimes.com/city/vijayawada/tdp-mla-kolikipudi-srinivasa-rao-calls-off-save-tiruvur-rally/articleshow/113792184.cms) — sab aarop stariya baatein hain; MLA ne khud inhe ‘framed by the local sand and gravel mafia’ kehkar khandan kiya (jawab report me maujood); MLA ke khilaf koi FIR/chargesheet/janch ya nyayik vikas report nahi; ‘shikayat me naam lekin FIR ke aaropi column me naam NAHI = NAHI’ niyam se REJECT.
// 9. Gopalapuram (A. Konduru mandal) me parivarik vivad me mahila ke suicide attempt ka aarop, Jan 2025 (daijiworld/dailyworld IANS copies, thebetterandhra, suryaa) — source whitelist me nahi; kisi me FIR darj hone ka zikr nahi; REJECT.
// 10. Vijayawada MP Kesineni Sivanath ke saath party discipline vivad (The Hindu Oct 2025, TOI Nov 2025, DC Oct 2025; TNIE 7 Oct 2026) — dalgat anushaasan/anandolikaran ka mamla; koi FIR/chargesheet/janch ya nyayik vikas nahi; negative rule par khara nahi; 7 Oct 2026 wala item scope (Jun 2026) se bahar bhi hai; REJECT.
// 11. Tiruvuru Nagar Panchayat chairman pad par TDP ki jeet, 3 Jun 2025 (TNIE, https://www.newindianexpress.com/cities/vijayawada/2025/Jun/03/tdp-wins-tiruvuru-nagar-panchayat-chairman-post-breaks-ysrcp-stronghold-in-ntr-district) — rajneetik jeet, vikas-karya nahi; REJECT.
// 12. Halafnama ke 10 pending criminal cases (myneta.info, candidate_id=342) — ‘halafname ke pending mamle akele NAHI’ niyam; inme koi Jun 2024+ nyayik vikas whitelist me nahi mila; REJECT.
// 13. Jana Sena seat-sharing vivad me TDP-backed candidate ka samarthan (m.dailyhunt.in, Oct 2026) — aggregator source (REJECT) + scope se bahar (Jun 2026 ke baad); REJECT.
// NOTE: Tiruvuru (SC) ke sabhi whitelist hits ka coverage upar darj hai; seedha source kholkar padhe bina koi item accept nahi kiya gaya.

// Andhra Pradesh — Batch 5 (fragment): yalamanchili-satyanarayana-chowdary — 0 works + 0 negatives
// Mined 2026-10-18. Pehchan: Yalamanchili Satyanarayana (Sujana) Chowdary, Vijayawada West (NTR jila),
// Bharatiya Janata Party, Winner 2024. First-time MLA (4 June 2024 se); purv Rajya Sabha MP + kendriya mantri.
// Mining: 6 targeted search rounds on whitelist outlets (The Hindu, New Indian Express, Deccan Chronicle,
// Times of India, Hindustan Times) + ED/PMLA negative-search.
// Natija: koi aisa bhutik sarkari sanrachna-lokarpan/shilanyas nahi mila jisme MLA ki vyaktigat bhoomika
// dastaveji ho aur sarkari/MLA-nidhi fund ho; mile sare leads REJECT (neeche REJECT-LOG dekho).
// Fund note: AP CDP allocation officially unverified — allocated: null in andhra.ts record.
// Saara content Roman-script Hinglish per spec.
andhraWorks['yalamanchili-satyanarayana-chowdary'] = [];

// ---- REJECT-LOG (yalamanchili-satyanarayana-chowdary) ----
// R1. Govt Urdu Junior College, Kabela (Vijayawada West) me Physics/Chemistry/Zoology labs ka lokarpan
// (NIE, 4 Nov 2025): labs Sujana Foundation + Bhagyanagar Gas Limited ke CSR fund se Rs 12 lakh me punarnirmit.
// REJECT: CSR-funded aur MLA ki apni foundation (niji kharch) se baney hue — rules me ‘mukhya-atithi/CSR
// samaroh’ aur ‘niji kharch ke kaam’ REJECT hain. Source:
// https://www.newindianexpress.com/amp/story/cities/vijayawada/2025/Nov/04/andhra-pradesh-mla-sujana-launches-new-science-labs-at-urdu-jr-college
// R2. ‘Sujana Health on Wheels’ — do mobile medical vans (Rs 1.35 crore, Sujana Foundation funded), launch
// poorv Up-Rashtrapati Venkaiah Naidu ne kiya (Deccan Chronicle/NIE/The Hindu, 25-26 Jan 2026).
// REJECT: daan/rahat kaam + niji-kharch (MLA ki apni foundation); launch bhi MLA ne khud nahi kiya.
// Source: https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/venkaiah-naidu-stresses-on-preventive-healthcare-1932642
// R3. Chunav ke baad 45-din ka mega medical camp (upar R2 ke articles me hi zikr).
// REJECT: daan/rahat kaam — rules me explicitly REJECT.
// R4. Bhavanipuram me MLA ka constituency office + Nandigama me BJP office ka lokarpan (NIE, 7 Sep 2026).
// REJECT: party/constituency karyalay — sarkari sanrachna NAHI; Nandigama Vijayawada West ke bahar bhi hai.
// Source: https://www.newindianexpress.com/states/andhra-pradesh/2026/Sep/07/mla-sujana-chowdary-inaugurates-newoffices-at-bhavanipuram-nandigama
// R5. Health profile plan, mobile screening units (CM launch, Monsoon Session), Sheik Raja Hospital ka 200-bed
// upgrade, 4 maternity centres, Indrakeeladri Master Development Plan (The Hindu, 20 Sep 2025).
// REJECT: sab ‘plan’/‘being planned’ stage ke — sirf ghoshna; screening units ka launch CM karte hain, MLA ka
// vyaktigat lokarpan nahi. Source:
// https://www.thehindu.com/todays-paper/tp-national/tp-andhrapradesh/vijayawada-west-mla-unveils-plan-to-ready-health-profile-for-every-division/article70072431.ece
// R6. Kanaka Durga temple ka Rs 100 crore revamp plan, Vision 2029 (TOI, Jun 2025) — MLA ‘spearheading’ kehla
// rahe hain lekin MP Kesineni Sivanath (Chinni) PRASAD scheme me fund ke liye lobby kar rahe hain.
// REJECT: plan/ghoshna; MLA ki dastaveji vyaktigat bhoomika ya fund-disclosed lokarpan/shilanyas nahi.
// Source: https://timesofindia.indiatimes.com/city/vijayawada/kanaka-durga-temple-to-undergo-major-revamp-under-vision-2029-initiative/articleshow/122133281.cms
// R7. Vijayawada stormwater drains/water-supply/beautification ki DPR (Deccan Chronicle, Feb 2026) — MP
// Kesineni Sivanath (Chinni) ne kaha wo MLAs (Gadde Rammohan, Bonda Umamaheswara Rao, Sujana Chowdary) ke
// saath milkar grants layenge. REJECT: MP-led karyakram; Kesineni ka is MLA se koi sambandh nahi (rules);
// MLA ki vyaktigat dastaveji bhoomika nahi; VMC ke kaam bina vyaktigat bhoomika ke REJECT.
// Source: https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/dpr-finalised-for-stormwater-drains-water-supply-and-beautification-of-vijayawada-1939695
// R8. One-year coalition govt face-to-face interaction (NIE, 28 Jun 2025) — Sujana Nyaya Mithras, education/
// health commitments, Sujana Mithra coordinators. REJECT: sirf vade/ghoshna, koi bhutik kary ka lokarpan nahi.
// Source: https://www.newindianexpress.com/cities/vijayawada/2025/Jun/28/sujana-vows-to-develop-vijayawada-west
// NEGATIVES: ED/PMLA bank-fraud mamla (CBI FIRs 2017, ED summons Nov 2018, ~Rs 5,700 crore ke aarop) —
// Telangana HC me PMLA mamla pending halafname me hai. Lekin ye PRE-TERM mamla hai aur Jun 2024+ me koi
// nyayik vikas (FIR/chargesheet/court order) whitelist media me nahi mila; halafname ke pending mamle akele
// negative-entry nahi bante. Isliye 0 negatives.

// Andhra Pradesh — Batch 5 (foundation chal raha hai): Bonda Umamaheswara Rao — works mining.
// Mined 2026-10-18. Pehchan: Bonda Umamaheswara Rao, TDP, Vijayawada Central (NTR jila),
// 16th AP Vidhan Sabha 2024-2029; TDP politburo member; 12 Nov 2024 se Assembly me Government Whip.
// Halafnama: 14 mamle, unme 1 conviction (fine Rs 700, 23 Sep 2019) — background record me darj.
// Result: 3 works (2 'news' + 1 whitelist-borderline TNN/ET-Infra, parent QA ke liye flag) + 0 negatives.
// Fund: AP CDP officially unverified — allocated: null (andhra.ts fund note).
// All entries Roman-script Hinglish per spec. Single-quote strings; inner quotes typographic.

andhraWorks['bonda-umamaheswara-rao'] = [
  {
    title: 'Vijayawada Central ke Gunadala railway station ke paas Rs 98.68 crore ke Gunadala-Vijayawada Road Over Bridge (Level Crossing Gate 316 par) ka shilanyas — Vijayawada MP ke saath sanyukt roop se',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/foundation-stone-laid-for-gunadala-vijayawada-road-over-bridge/article71161841.ece',
    date: '2026-06-29',
    note: 'The Hindu (29 Jun 2026, Vijayawada) ki post-event report ke mutabik, Vijayawada MP Kesineni Sivanath, Vijayawada Central MLA Bonda Umamaheswara Rao, Gati Sakthi Unit Chief Project Manager K. Simon aur Additional Divisional Railway Manager P.E. Edwin ne milkar ROB ke nirman ka shilanyas kiya. Indian Railways ne Gunadala corridor par 920 metre lamba, 24 metre chauda ROB (service roads sahit) Rs 98.68 crore me banane ki ghoshna ki — Level Crossing Gate No. 316 khatm hoga; Gati Sakthi ke Deputy Chief Engineer P.V. Ramana Rao ke mutabik 18 mahine me poora hoga. CREDIT CAPPED: swikriti railways ki hai (MP ne South Coast Railway ke adhikariyon ka dhanyavad kaha) — MLA ne MP ke saath milkar shilanyas kiya; vyaktigat fund-bhoomika ka dawa nahi. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’. Gunadala Vijayawada Central constituency ka hissa hai — seat-bahar nahi.',
    period: '2024-2029',
  },
  {
    title: 'Vijayawada Central me Rs 8.36 crore ke nagar-vikas karyon ka lokarpan — Bhanu Nagar, Madhura Nagar, Devinagar, Vinayaka Nagar aur Gunadala me nayi pani pipelines, hot mix/paver sadaken aur drainage',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/cities/vijayawada/2025/Jun/13/vijayawada-municipal-corporation-launches-rs-1184-crore-works',
    date: '2025-06-12',
    note: 'The New Indian Express ki post-event report ke mutabik, Vijayawada Municipal Corporation (VMC) ne kul Rs 11.84 crore ke 33 vikas kary Central, West aur East constituencies me shuru kiye — ye karyakram sarkar me ek saal poora hone par state-wide drive ka hissa tha. Central constituency me MLA Bonda Maheshwarao (report ki spelling; pehchan: Vijayawada Central, TDP) ne Rs 8.36 crore ke civic upgrades ka lokarpan kiya: Bhanu Nagar, Madhura Nagar, Devinagar, Vinayaka Nagar aur Gunadala me nayi drinking water pipelines, hot mix aur paver roads, drainage systems. Inferred-date disclosure: report me karyakram ‘Thursday’ ka bataya gaya hai; prakashan 13 Jun 2025 (Friday) hai — isliye 12 Jun 2025 li gayi hai. CREDIT CAPPED: ye VMC/state government drive ke kaam hain — MLA ne inka lokarpan kiya; MLA-nidhi se sambandh ka dawa nahi. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'VMC parishad ne MLA ke prastav par pramukh junctions, municipal parking aur bheed-bhad wali jagahon par EV charging stations sthapit karne ka prastav swikar kiya',
    category: 'Bijli',
    badge: 'news',
    sourceLabel: 'ET Infra (Economic Times)',
    sourceUrl: 'https://infra.economictimes.indiatimes.com/news/urban-infrastructure/vijayawada-municipal-corporation-announces-ev-charging-stations-at-key-locations/129532604',
    date: '2026-03-11',
    note: 'ET Infra (TNN-sourced, 13 Mar 2026) ki report ke mutabik, Mayor Rayana Bhagya Lakshmi ki adhyakshata me VMC parishad baithak (145 agenda items) me Vijayawada Central MLA Bonda Umamaheswara Rao ke agenda item 9 ke prastav par EV charging stations sthapit karne ka prastav swikar hua — pramukh junctions, municipal parking spaces aur high-footfall areas me. VMC Commissioner H.M. Dhyanchandra ke mutabik vishesh sthal baad me chune jayenge; project Fame India Phase II, AP Electric Mobility Policy Incentives, Smart City Mission, Amrut aur Urban Infrastructure funds jaisi schemes se banega. Inferred-date disclosure: report me baithak ko ‘Wednesday’ bataya gaya hai; prakashan 13 Mar 2026 (Friday) hai — isliye 11 Mar 2026 li gayi hai. CREDIT CAPPED: MLA ne prastav rakha jo parishad se swikara gaya — abhi sthal-chayan/tender baaki; bhautik nirman ka dawa nahi. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’. WHITELIST-QA FLAG: ye Times Group ki ET-Infra vertical (TNN byline) hai, ‘Times of India’ masthead nahi — parent strict ho to QA-drop kar sakta hai.',
    period: '2024-2029',
  },
];

// ==== REJECT-LOG (bonda-umamaheswara-rao, researched 2026-10-18) ====
// 1. pynr.in ("The Pioneer", 2025): MP + MLA ne Madhura Nagar RUB khola — whitelist-bahar outlet; Madhura Nagar RUB ka shilanyas MLA ne purane TDP karyakaal me kiya tha (pre-term), Jun 2024+ me bhoomika sirf upasthiti. REJECT.
// 2. NIE (5 Jun 2025): MP + MLAs ne DRM ke saath rail infrastructure review meeting — sirf maang/prastav (ROB completion, RUB, second ROB at Singh Nagar). REJECT.
// 3. NIE (20 Sep 2025): Deputy CM Pawan Kalyan ne Assembly me MLA ki PCB Chairman par tippani ko ‘threatening’ bataya — raajneetik bayan, FIR/chargesheet/janch nahi; MLA aaropi nahi. REJECT.
// 4. NIE (16 Apr 2019, updated 2 Jan 2024): 2019 me MLA + dono beton par industrialist Koganti Satyam par hamle/dhamki ka case (IPC 341/506, Ajit Singh Nagar police) — pre-term mamla, Jun 2024+ me koi nyayik vikas established media me nahi. REJECT.
// 5. The Hindu (20 Apr 2024) + NIE (18 Apr 2024): Y.S. Jagan stone-pelting case me TDP ka aarop ki police Bonda Uma ko fasa rahi hai — pre-term (Apr 2024), aur sirf aarop; FIR ke aaropi column me naam nahi. REJECT.
// 6. NIE (30 Oct 2024): Rozgar Mela me MP + MLA ne 185 appointment letters bante — kendriya karyakram me maujoodgi, vyaktigat bhoomika nahi. REJECT.
// 7. NIE (6 Jul 2026): Gorthi Prasad Education Trust ne Rs 2 lakh ki scholarships banti, MLA mukhya atithi — trust ka daan-kaam, MLA ka kaam nahi. REJECT.
// 8. NIE (23 Sep 2026): Rs 820 crore ULB infra boost — state-level programme; MLA ki dastaveji vyaktigat bhoomika nahi (sirf bayan). REJECT.
// 9. NIE (28 Sep 2026): ‘Vijayawada faces neglect’ — MLA ka bayan ki Rs 1,500 crore ke prastav jama hain — sirf maang/prastav. REJECT.
// 10. Deccan Chronicle: ‘Uma Urges Vijayawada To Maintain Top Swachh Bharat Ranking’ — VMC ke Swachh Andhra Swarna Andhra programme me bhashan; sarkari abhiyaan me maujoodgi, bhautik kaam nahi. REJECT.
// 11. Deccan Chronicle: ‘Promote Yoga Among Students from Early Age’ — 11th International Yoga Day event me chief-guest bhashan; bhautik kaam nahi. REJECT.
// 12. The Hans India: ‘Hectic lobbying in TDP for mayor post’ (Bonda Siddhartha mayor ticket lobbying) — raajneeti, vikas-kaam nahi. REJECT.
// 13. IBBI PDF me The Hindu e-paper (15 May 2026): MP + MLA ne Ajit Singh Nagar Garbage Transfer Station par VMC ke Rs 2.22 crore ke 5 earth movers launch kiye — keval shubharambh (VMC kharid). REJECT.
// 14. telugu360 (Jul 2026): Ambati Rambabu ke saath manch sajha karne par TDP disciplinary notice — party disciplinary mamla, FIR/janch/nyayik vikas nahi; outlet bhi whitelist-bahar. REJECT.
// 15. YouTube E6TV + UNI/eenadu-aggregators — aggregator/YouTube/UNI = whitelist-bahar. REJECT.
// Negatives: 0 — halafnama ke 14 mamle (1 conviction: fine Rs 700, 23 Sep 2019) me Jun 2024+ ka koi nyayik vikas established whitelist media me nahi mila.

// gadde-rama-mohan — 1 work + 0 negatives (researched 2026-10-18)
// Pehchan: Gadde Rama Mohan, TDP, Vijayawada East (NTR jila; Vijayawada Urban mandal part,
// VMC wards 32, 36-41, 45-48, 50-74), 16th AP VS 2024-2029, 4-time MLA (2014, 2019, 2024; pehle Gannavaram 1994-99).
// 2024 me 1,18,841 vote se jeete (runner-up Devineni Avinash ko 49,640 se haraya). Halafname me 8 mamle.
// Mining: whitelist outlets (The Hindu, New Indian Express, Deccan Chronicle, TOI, HT, Hans India)
// par targeted searches; 1 validated entry: NIE-verified personal shilanyas (Rs 2.48 crore, seat ke andar).
// Halafname ke 8 pending mamalon ka Jun 2024+ me koi nyayik vikas established media me nahi mila — 0 negatives.
// Sab entries Roman-script Hinglish per spec. Fund: report me CDP/MLA-nidhi ka zikr nahi — 'ghoshit nahi'.
andhraWorks['gadde-rama-mohan'] = [
  {
    title: 'Vidhayak Gadde Rammohan ne Vijayawada East me Krishna Lanka, Srinivasa Nagar aur Bharathi Nagar me Rs 2.48 crore ki cement-concrete sadkon ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/cities/vijayawada/2025/Jun/13/vijayawada-municipal-corporation-launches-rs-1184-crore-works',
    date: '2025-06-12',
    note: 'New Indian Express (13 Jun 2025) ke mutabik, Vijayawada Municipal Corporation ne sarkar ke ek saal poore hone par Central, West aur East segments me kul 33 vikas-karyon (Rs 11.84 crore) ka shubharambh kiya. East segment me MLA Gadde Rammohan ne Krishna Lanka, Srinivasa Nagar aur Bharathi Nagar me cement-concrete sadkon ka shilanyas kiya; anumaanit laagat Rs 2.48 crore; pariyojana me sadak-vikas, park-sudhar aur saarvajanik bhawan-nirman shamil. Ye vyaktigat shilanyas hai (dusre neta ka karyakram nahi) aur saare sthan Vijayawada East seat ke andar hain. INFERRED DATE: report me ‘on Thursday’ kaam shuru hue — 13 Jun 2025 ko Friday tha, isliye event ki tithi 2025-06-12 (Thursday, verified). Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
];

// REJECT-LOG (gadde-rama-mohan):
// 1. Deccan Chronicle, 'Vijayawada Set For Major Infra Overhaul With Rs 2,000 cr' (25 Nov 2025) — MP Kesineni
//    Sivanath aur MLA Gadde Rammohan ne 8th Division (Old Number Five Road, East constituency) me
//    Rs 93.08 lakh drainage project ka shilanyas kiya. STRONG VALID CANDIDATE, lekin page khul NAHI
//    saka (HTTP 403 — access denied); 'Khul na sakne wala page source nahi' niyam par REJECT. Retry-lead:
//    DC ka non-AMP URL ya Hans India/TOI/NIE par isi khabar ka doosra source dhoondho.
// 2. TOI (city/vijayawada, ~Apr 2026) 'Narayana lays foundation stone for three masterplan roads' — shilanyas
//    MAUD Minister P. Narayana ne kiya; Gadde sirf maujood the; roads peripheral (Poranki-Nidamanuru)
//    kshetra me, Vijayawada East seat ke andar hona pusht nahi — REJECT (dusre neta ke karyakram me maujoodgi).
// 3. The Hindu (9 Apr 2026) 'Every town to get basic sports infra...' — IGMC stadium shilanyas Sports Minister
//    ne kiya; Gadde sirf maujood — REJECT.
// 4. NIE (21 Jul 2026) 'Education transforms future of families, says Andhra Pradesh MLA Gadde' — Shining Stars
//    felicitation programme me sirf maujoodgi; bhautik kaam nahi — REJECT.
// 5. Greater Vijayawada Municipal Corporation proposal (CM se milkar MP + MLA ne prastav diya; ainvest par
//    mili report) — sirf prastav/maang, koi shilanyas/lokarpan nahi — REJECT.
// 6. Deccan Chronicle (2021-22 era) 'YSRC, TD spar over flood retaining wall' — karyakaal se PEHLE ka vivad;
//    MLA ne media me bayan diya tha, koi naya bhoomika-vikas nahi — REJECT.
// 7. triptohyderabad.com (5 Aug 2024) — VMC park Veterinary Colony me gym ka udghatan Minister Narayana ne
//    kiya; Gadde maujood the; source whitelist me NAHI; vyaktigat bhoomika dastaveji nahi — REJECT.
// 8. Hans India (2018 archive) 'Pure O Natural' outlet inauguration — niji dukan ka udghatan, sarkari
//    sanrachna nahi; purana (2018) — REJECT.
// 9. Deccan Chronicle (Apr 2024) 'I developed Vijayawada East, not Gadde, asserts Devineni Avinash' — chunaavi
//    aarop, karyakaal se pehle ka; koi FIR/nyayik vikas nahi — REJECT (negative nahi).
// 10. The Hindu (9 Jan 2026) CREDAI property show — MLA ne sirf sambodhan kiya; kaam nahi — REJECT.
// 11. NEGATIVES: whitelist par 'Gadde Rama Mohan FIR / case booked / investigation' searches me Jun 2024+ ka
//     koi FIR/chargesheet/janch is MLA ke khilaf NAHI mili. Gade Sai Krishna custodial-death case (Krishna Lanka
//     police, 2026) me MLA ka naam aaropi ke roop me nahi — sirf police adhikari aaropi; MLA isme pakshkar
//     nahi. Halafname ke 8 pending mamle (2024 affidavit) akele negative entry nahi ban sakte — REJECT.

// vasantha-krishna-prasad (Vasantha Venkata Krishna Prasad) — 0 works + 0 negatives
// Pehchan: TDP, Mylavaram (NTR jila), 16th AP VS 2024-2029; doosri baar MLA
// (2019 me YSRCP se jeete; 2 Mar 2024 ko TDP me shamil hue, 2024 me TDP ticket par jeete).
// Mining: targeted searches on whitelist outlets (The Hindu, New Indian Express, Times of India,
// Deccan Chronicle, The Hans India, NDTV, India Today, Hindustan Times) turned up NO
// Mylavaram-seat-level physical works with the MLA's personal role (lokarpan/shilanyas with
// disclosed fund+role), and NO Jun 2024+ judicial development against him.
// Fund note: Rs 22.50 crore wali khabar (The Pioneer) whitelist-bahar outlet hai aur sirf
// ghoshna/daawa — entry nahi bani. AP CDP allocation officially unverified.
// Halafnama me 2 mamle (2024) — purane CBI charge-sheet mamle ka wartaman karyakaal me
// koi nyayik vikas established media me nahi mila — isliye 0 negatives.
// All entries Roman-script Hinglish per spec.
andhraWorks['vasantha-krishna-prasad'] = [];

// REJECT-LOG (sabhi rejected):
// 1. "Mylavaram YSRCP MLA Vasantha Krishna Prasad joins TDP in Hyderabad" (UNI, 2 Mar 2024) —
//    REJECT: UNI/univarta whitelist-bahar; aur ye karyakaal (Jun 2024+) se pehle ka political
//    event hai, koi bhautik kaam nahi. url: https://www.uniindia.com/news/south/mylavaram-ysrcp-mla-vasantha-krishna-prasad-joins-tdp-in-hyderabad/3153915.html
// 2. "Rs 80 cr NREGS funds sanctioned to NTR district, says Collector" (The Pioneer, khulne layak
//    page; karyakram me MLA Jupudi, Ibrahimpatnam mandal ke Grama Sabha me maujood the; unhone
//    kaha ki Rs 22.50 crore constituency ko gaon-vikas ke liye swikrit hua) — REJECT: (a) The Pioneer
//    is task ki whitelist me nahi; (b) sirf Grama Sabha me maujoodgi + swikriti ki ghoshna, na
//    itemized suchi, na vyaktigat lokarpan/shilanyas — "sirf ghoshna" rule. url: https://pynr.in/rs-80-cr-nregs-funds-sanctioned-to-ntr-district-says-collector/
// 3. "Gollapudi Market Yard Gets Boost With New Works" (Deccan Chronicle, ~9 Nov 2025; MP Kesineni
//    Sivanath, Vijayawada Central MLA Bonda Uma Maheswar Rao aur Mylavaram MLA Vasant Krishna
//    Prasad ne Rs 1.5 crore ki internal road ka shilanyas + grain purchase centre ka udghatan kiya) —
//    REJECT: Gollapudi (Vijayawada Rural, Vijayawada ki outskirts) Mylavaram constituency ke BAHAR
//    hai; aur mukhya bhoomika Vijayawada MP/Central MLA ki thi — dusre neta ke karyakram me
//    maujoodgi. url: https://www.deccanchronicle.com/southern-states/andhra-pradesh/gollapudi-market-yard-gets-boost-with-new-works-1915889
// 4. "Water resources minister Nimmala Ramanaidu inspects flood mitigation works in Vijayawada"
//    (Times of India; MLA minister ke saath Budameru retaining wall ka nirikshan me maujood) —
//    REJECT: sirf mantri ke nirikshan me maujoodgi, MLA ki vyaktigat bhoomika nahi; aur kaam
//    Vijayawada me hai, Mylavaram seat me nahi. url: https://timesofindia.indiatimes.com/articleshowprint/121170058.cms
// 5. APFA State-Level Football Tournament udghatan (Lakireddy Hanimi Reddy Sports Ground, Mylavaram;
//    sirf newstoday99.in / delhinewsdaily.in / hindustanmetro.com par) — REJECT: (a) whitelist-bahar
//    aggregator blogs; (b) mukhya-atithi/samaroh udghatan, koi bhautik sarkari sanrachna ka
//    lokarpan/shilanyas nahi.
// 6. "Completion of Chintalapudi lift irrigation scheme is my priority, says Krishna Prasad"
//    (New Indian Express, 26 May 2019) — REJECT: pre-term (2019) interview; sirf priority ka bayan,
//    karyakaal Jun 2024+ ka nateeja nahi.
// 7. CBI charge-sheet (Vasantha Projects Private Limited, Gachibowli housing project, 2005 allotment;
//    MLA A-7) — REJECT as negative: pre-term mamla; Jun 2024+ me koi FIR/giraftari/janch/nyayik
//    vikas established media me nahi mila. Halafname ke pending mamle akele negative nahi bante.

// tangirala-sowmya — 0 works + 0 negatives (mined 2026-10-18)
// Pehchan: Tangirala Sowmya, TDP, Nandigama (SC), NTR jila; 16th AP VS 2024-2029,
// first tenure me 2014-19 MLA rahi thi; Government Whip appointed 12 Nov 2024.
// Pehchan-jaal dhyan rakha gaya: pita Tangirala Prabhakara Rao (poorv TDP mantri, 2014 me nidhan)
// ke mamle un par apply NAHI hue — unse jude koi article bhi mining me kaam-ke-liye use nahi hua.
// Fund note: andhra.ts record ke mutabik CDP allocation official roop se unverified — allocated: null.
// Whitelist outlets (The Hindu, New Indian Express, Deccan Chronicle, TOI) par targeted searches
// chalaye gaye: seat-level bhautik sanrachna ka koi vyaktigat lokarpan/shilanyas, GO-backed swikriti,
// ya itemized sanction list Jun 2024+ term ki NAHI mili; koi dastaveji Vidhansabha-maang nateeja nahi.
// Negatives: halafname me 23 mamle (2020-2024, myneta.info archive — media source nahi) hain, lekin
// Jun 2024+ me koi FIR/chargesheet/janch/nyayik vikas unke khilaf established media me report NAHI hua,
// isliye 0 negatives. MLA khud ek TOI-reported fake-social-media shikayat (June 2024) me SHIKAYATKARTA
// hain — aaropi nahi, isliye negative nahi.
andhraWorks['tangirala-sowmya'] = [];

// ==== REJECT-LOG (2026-10-18) ====
// 1. REJECT — source whitelist-bahar: tmv.in, "MLA Tangirala Soumya aims to transform villages with
//    'Palle Panduga 2.0'" (published 2025-12-29). Report ke mutabik MLA ne Kothapalle (Chandarlapadu
//    mandal) me lagbhag Rs 1.28 crore ke karyon ka shilanyas kiya aur Chandarlapadu mandal me 13 projects
//    launch hue (CC/metal roads, sarkari bhavanon ki compound walls; fund MGNREGS + Panchayat Raj).
//    tmv.in whitelist me NAHI hai, aur ye sarkari abhiyan (Palle Panduga 2.0) ka karyakram-shubharambh
//    jaisa dikhta hai — dono wajah se REJECT. Retry-lead: whitelist outlet me isi event ki post-event
//    reporting mile to punah-jaanch.
// 2. REJECT — niji kharch/daan: Deccan Chronicle, "Fighter of Fraudsters Faces a Scam Attempt"
//    (May 2025, https://www.deccanchronicle.com/southern-states/telangana/fighter-of-fraudsters-faces-a-scam-attempt-1878136).
//    Report ke mutabik MLA ne 6 Class X chhatron (sarkari schools, 570/600 se zyada ank) ke
//    Vijayawada-Hyderabad flight tickets apne kharch par sponsor kiye. Bhautik sarkari sanrachna nahi;
//    niji kharch ka daan — niyam se REJECT.
// 3. REJECT — dusre neta ke karyakram me maujoodgi: Deccan Chronicle, "MP Reviews Kendriya Vidyalaya
//    Works, Holds Praja Darbar" (Apr 2026, https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/mp-reviews-kendriya-vidyalaya-works-holds-praja-darbar-1948549).
//    Vijayawada MP Kesineni Sivanath ne Nandigama me KV campus (Raghavapuram site) ka nirikshan kiya;
//    MLA sirf saath thi. Kaam MP ka hai, MLA ki vyaktigat bhoomika report me nahi — REJECT.
// 4. REJECT — keval maujoodgi/nirikshan: Deccan Chronicle, "Andhra Pradesh: Minister Chairs NTR DRC Meet,
//    Focuses on Public Issues" (Nov 2024, https://www.deccanchronicle.com/southern-states/andhra-pradesh/andhra-pradesh-minister-chairs-ntr-drc-meet-focuses-on-public-issues-1842911).
//    MLA Govt Whip ki haisiyat se jila samiksha-baithak me upasthit thi; koi vyaktigat seat-kaam report nahi — REJECT.
// 5. NOT-A-NEGATIVE — MLA shikayatkarta: TOI, "Nandigama MLA files complaint against individuals for
//    spreading fake news on social media" (June 2024, https://timesofindia.indiatimes.com/city/vijayawada/nandigama-mla-files-complaint-against-individuals-for-spreading-fake-news-on-social-media/articleshow/112751689.cms).
//    Case SC/ST Act ke tahat YSRCP neta Karimulla aur bete ke khilaf darj hua; MLA aaropi NAHI —
//    negative-nirdharan ke liye apatra.
// 6. REJECT — rajnitik ghatna, seat-kaam nahi: New Indian Express, "Nandigama municipal chairperson
//    election sees high drama as TDP resolves power struggle" (Feb 2025, https://www.newindianexpress.com/states/andhra-pradesh/2025/Feb/05/nandigama-municipal-chairperson-election-sees-high-drama-as-tdp-resolves-power-struggle).
//    Nagarpalika adhyaksh chunav me party ke andar ummeedwar-chayan ka vivad; koi vikas-kaam nahi — REJECT.
// 7. NOT-A-NEGATIVE — pre-term + keval bayaan: New Indian Express, "32-year-old Tenali woman's alleged
//    suicide triggers political slugfest" (13 Mar 2024, pre-term). MLA ne sirf media bayaan diya tha;
//    unke khilaf koi FIR/aarop nahi — REJECT.
// 8. REJECT — whitelist-bahar + vyaktigat uplabdhi: gulte.com, "Lady TDP MLA Secures Top Rank in Law
//    Entrance" (20 Jun 2025). AP LAWCET me 739th rank vyaktigat uplabdhi hai, seat-kaam nahi; gulte
//    whitelist me bhi nahi — REJECT.
// 9. NEGATIVE-SCAN — halafname ke 23 pending mamle (Crime No 28/2024 Nandigama PS samet, 2020-2024 ke,
//    myneta.info archive): Jun 2024+ me inme kisi nyayik vikas (chargesheet/sunvai/faisla) ki established
//    media reporting NAHI mili; halafname ke pending mamle akele negative nahi — isliye 0 negatives.

// rajagopal-sreeram — 0 works + 0 negatives (researched 2026-10-18)
// Pehchan: Rajagopal Sreeram (Tataiah), TDP, Jaggayyapeta (NTR jila; mandals: Vatsavai,
// Jaggayyapeta, Penuganchiprolu, Nandigama-part), 16th AP VS 2024-2029, 3-time MLA
// (2009, 2014, 2024). 2024 me 98,479 vote lekar jeete; runner-up Samineni Udaya Bhanu
// (YSRCP, 82,502 vote) ko 15,977 maton se haraya. Record andhra.ts lines 2609-2633 se confirmed.
// Mining: targeted searches on whitelist outlets (The Hindu, TOI, New Indian Express,
// Deccan Chronicle, Hans India, NDTV, India Today, HT, PTI) with name variants
// (Rajagopal Sreeram / Sriram Rajagopal / Tataiah / Tatayya) + Jaggaiahpet/Jaggayyapet
// spelling variants turned up NO seat-level physical works with the MLA's personal role,
// NO documented Vidhansabha-sawaal-nateeja, and NO Jun 2024+ legal development against him.
// Fund note: AP CDP allocation officially unverified — allocated: null in andhra.ts record.
// All content Roman-script Hinglish per spec.
andhraWorks['rajagopal-sreeram'] = [];

// REJECT-LOG:
// 1. Times of India (Aug 2024, articleshow/112531515) — ‘Students should not forget the
//    sacrifices of freedom fighters: MLA Sriram Rajagopal’: MLA ne JJC/schools ke chhatron
//    ke saath Har Ghar Tiranga rally me hissa liya (14 Aug 2024, inferred: Independence Day
//    se ek din pehle ki rally). REJECT — sarkari abhiyan (Har Ghar Tiranga) me keval
//    hissa lena; koi bhautik sarkari sanrachna ka lokarpan/shilanyas nahi.
// 2. The Hindu (09 Jan 2026, article70487137) — ‘Defence corridor will be set up in
//    Jaggayyapeta: Vijayawada MP’: Vijayawada MP Kesineni Sivanath ne Jaggayyapeta town
//    ke liye Rs 100 crore drinking-water sanction aur Defence Corridor ki GHOSHNA ki;
//    MLA Sriram Rajgopal karyakram me upasthit tha (Deputy CM Pawan Kalyan aur anya
//    dignitaries ke saath). REJECT — (a) ghoshna MP ne ki, MLA ki vyaktigat bhoomika nahi;
//    (b) dusre neta ke karyakram me keval maujoodgi; (c) waise bhi sirf ghoshna, GO-backed
//    swikriti ka dastavej nahi.
// 3. Negatives: halafname me 1 criminal case (andhra.ts background) — Jun 2024+ me koi
//    nyayik vikas, FIR/chargesheet/janch established media me nahi mili. ‘Revanth Reddy’
//    note-for-vote case wale search hit dusre TDP MLA (Revanth Reddy) se sambandhit hai,
//    Rajagopal Sreeram se nahi — cross-check me alag vyakti confirmed, isliye negative
//    nahi bana. Parivar ke koi mamle nahi mile. 0 negatives.

// ==== Guntur (Batch 5) ====
// tenali-sravan-kumar — 0 works + 0 negatives (researched 2026-10-18)
// Pehchan: Tenali Sravan Kumar, TDP, Tadikonda (SC) — Guntur jila; 16th AP Vidhan Sabha 2024-2029,
// second term as MLA (pehla karyakaal 2014-19; 2019 me haare the). andhra.ts record confirm:
// seat Tadikonda, party Telugu Desam Party, fund note allocated: null.
// Naam-jaal dhyan rakha gaya: (1) Tenali sahar (Guntur jile ka ek kasba) MLA se alag hai —
// Nadendla Manohar Tenali (kasbe ki) seat ke MLA hain, is profile se sambandh nahi;
// (2) ‘Tenali police case’ (May 2025 — constable par hamle ke aarop me naujawano ki pitai ka video)
// usi kasbe ka hai, MLA aaropi nahi; (3) Guntur MP Pemmasani Chandra Sekhar ke MPLADS/kaam alag rakhe gaye;
// (4) 2014-19 karyakaal ki Amaravati LPS khabron ko pre-term maan kar bahar rakha gaya.
// Whitelisted media (The Hindu, Deccan Chronicle, Times of India, New Indian Express, India Today,
// NDTV, Hindustan Times, PTI-via-established-outlet) par 7 targeted search rounds me MLA ke Jun 2024+
// seat-level vyaktigat works (lokarpan/shilanyas of physical govt structure, GO-backed sanction,
// itemized CDP list, Vidhansabha-maang ka dastaveji nateeja) ka koi post-event record nahi mila.
// Mila hua sab ya to bayan/tippani tha, ya CM/mantri-neta-led karyakram me maujoodgi, ya sirf Amaravati
// LPS context me quote, ya pre-term (2014-19 / 2022-23) ka.
// NEGATIVES: 0 — halafname ke 8 criminal cases (myneta.info/news18 election affidavit record) ke
// Jun 2024+ me koi nyayik vikas (saza/bari/chargesheet/FIR me aaropi column) whitelisted media me nahi
// mila; halafname ke pending mamle akele negative NAHI. ‘Tenali case’ me MLA ka naam aaropi column
// me kahin nahi — shikayat me naam bhi nahi. Parivar ke mamle to hain hi nahi.
// Khali profile theek hai.
andhraWorks['tenali-sravan-kumar'] = [];

// REJECT-LOG (har item kholkar/shodhit snippet se dekha gaya; koi kholne-layak yogya entry nahi):
// 1. The Hindu (05 Jul 2025) — ‘Farmers’ response to Amaravati LPS positive, and concerns raised will be
//    addressed, says Tadikonda MLA Sravan Kumar’: sirf MLA ka BAYAN LPS 2.0 par — koi vyaktigat
//    lokarpan/shilanyas/sanction nahi. REJECT (sirf tippani). URL:
//    https://www.thehindu.com/news/national/andhra-pradesh/farmers-response-to-amaravati-lps-positive-and-concerns-raised-will-be-addressed-says-tadikonda-mla-sravan-kumar/article69777057.ece
// 2. Deccan Chronicle (10 Dec 2025) — ‘Farmers In Vaddamanu Support Land Pooling, Says Narayana’:
//    Minister P. Narayana-led karyakram; MLA sirf saath me maujood. REJECT (dusre neta ke karyakram me
//    maujoodgi; keval shubharambh bhi nahi). URL:
//    https://www.deccanchronicle.com/southern-states/andhra-pradesh/farmers-in-vaddamanu-support-land-pooling-says-narayana-1923064
// 3. Deccan Chronicle (13 Oct 2026) — ‘Narayana Lays Stone For Quantum Valley Twin Towers’: stone khud
//    Minister Narayana ne rakha; MLA sirf quote (‘scheduled to be complete by Feb 7, 2027’). REJECT
//    (vyaktigat bhoomika nahi; sarkari project). URL:
//    https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/narayana-lays-stone-for-quantum-valley-twin-towers-1995448
// 4. Deccan Chronicle (13 Oct 2026) — ‘Quantum Valley Project Targets 25,000 Jobs’: sirf quote. REJECT.
//    URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/quantum-valley-project-targets-25000-jobs-1995552
// 5. The Hindu (27 Nov 2025) — ‘A.P. CM lays stone for Maha Prakaram at Venkateswara temple in Amaravati’:
//    stone CM ne rakha; MLA sirf upasthit. REJECT (dusre neta ke karyakram me maujoodgi). URL:
//    https://www.thehindu.com/news/national/andhra-pradesh/ap-cm-lays-stone-for-maha-prakaram-at-venkateswara-temple-in-amaravati/article70329204.ece/amp/
// 6. The Hindu (10 Dec 2025) — ‘Amaravati farmers’ issues will be addressed on priority, says Union Minister
//    Pemmasani Chandra Sekhar’: Union minister + state minister ka review; MLA sirf tasveer/meeting me.
//    REJECT (dusre neta ka karyakram; MP MPLADS context bhi nahi). URL:
//    https://www.thehindu.com/news/national/andhra-pradesh/amaravati-farmers-issues-will-be-addressed-on-priority-says-union-minister-pemmasani-chandra-sekhar/article70392167.ece
// 7. The Hindu live (28 Feb 2025) — AP Budget 2025-26 LIVE: MLA ka comment (‘Amaravati self-sustained project’).
//    REJECT (sirf bayan). URL:
//    https://www.thehindu.com/news/national/andhra-pradesh/andhra-pradesh-budget-for-2025-2026-live-updates-february-28-2025/article69273299.ece
// 8. Deccan Chronicle (12 Nov 2025-ish crawl) — ‘APCRDA’s Micro Skills Programme For Women In Amaravati Concludes’:
//    minister Narayana ne certificates baante; MLA sirf upasthit me. REJECT. URL:
//    https://www.deccanchronicle.com/southern-states/andhra-pradesh/apcrdas-micro-skills-programme-for-women-in-amaravati-concludes-1918924
// 9. The Hans India (23 Sep 2026) — ‘Stone laid for works worth Rs 527 cr’: CM-virtual stone laying in Guntur,
//    GMC/Mangalagiri/Tenali/Ponnur — Tadikonda/Tadikonda se sambandh nahi; MLA upasthit bhi nahi.
//    REJECT. URL: https://www.thehansindia.com/news/cities/guntur/stone-laid-for-works-worth-rs-527-cr-1124669
// 10. ‘Tenali case’ (Sep-Oct 2026, PTI-via-multiple outlets): Tenali kasbe me police-pitai ka mamla; court ne
//     youths ko attempt-to-murder aarop se bari kiya; MLA ka naam kahin aaropi column me NAHI; YSRCP ke
//     aarop TDP-sarkar/police par hain, vyakti-vishesh par nahi. NEGATIVE rule fail — entry nahi.
// 11. adani.news (05 Aug 2024) — ‘Shravan Kumar returns to Tadikonda’: non-whitelist (aggregator-type site);
//     aur sirf profile/election recap — koi work nahi. REJECT (whitelist-bahar + kaam nahi).
// 12. Pre-term items (Deccan Chronicle 2019 ‘Tadikonda TDP against Sravan’ — intra-party rebellion; TOI 2019;
//     Deccan Chronicle 2015-17 Amaravati LPS reports; The Hindu 2014 ‘TD leaders start persuading farmers’;
//     Business Standard 2015 Assembly adjournment; The Hindu 2023 R-5 houses press note — ‘former MLA’ daur):
//     sab pre-term ya sirf rajneetik bayan — Jun 2024+ karyakaal me inka koi nyayik/kaam-vikas nahi.
//     REJECT (pre-term; karyakaal-seema).

// Nara Lokesh (Mangalagiri, TDP, MLA + IT/HRD mantri — Guntur jila) — works batch.
// Mined 2026-10-18. Pehchan: andhra.ts record (slug 'nara-lokesh', Mangalagiri, TDP,
// Winner 2024, 17 halafname cases; s/o N. Chandrababu Naidu). MANTRI-STRICTEST niyam
// lagu: IT samjhote/MoU, GIS, shiksha-vibhag ke rajya faisle, rajya ghoshnaen — sab
// bahar; SIRF Mangalagiri seat ke andar ke bhautik sarkari sanrachna ke vyaktigat
// lokarpan/shilanyas. CM (pita) ke mamle aur Amaravati rajdhani ke rajya kaam bahar.
// Sources: New Indian Express (6 entries), Deccan Chronicle (6 entries) — post-event reporting.
// 13 works + 0 negatives. Sab entries Roman-script Hinglish. Date field me exact event-tithi
// (report me 'Sunday/Monday/Wednesday/Thursday' + prakashan-tithi se verified).
andhraWorks['nara-lokesh'] = [
  {
    title: 'Mangalagiri me 100-bed aspatal ka shilanyas — mantri ne 365 din me poora karne ka vaada kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Apr/14/andhra-minister-lokesh-lays-stone-for-mangalagiri-hospital',
    date: '2025-04-13',
    note: 'The New Indian Express ki post-event report ke mutabik, HRD aur IT Mantri Nara Lokesh ne Mangalagiri me 100-bed aspatal ka shilanyas kiya aur ise 365 din me poora karne ka vaada kiya; karyakram Mangalagiri me ‘Mana Illu-Mana Lokesh’ programme ke dauraan Errabalem me hua. Date verification: report me event ko ‘Sunday’ bataya gaya hai aur prakashan 14 Apr 2025 hai; 13 Apr 2025 (Sunday) verified. Report me aspatal ki lagat/fund-source nirdisht nahi — ‘ghoshit nahi’. Patta vitaran (354 title documents), UGD/gas pipeline/drinking water ki June-se shuruat, 31 community halls, parks-wetlands revival — ye sabhi ghoshna/vaade is entry ka vishay nahi (sirf shilanyas record me hai).',
    period: '2024-2029',
  },
  {
    title: 'Tadepalli (Seethanagaram Mahanadu) me Krishna nadi ke dayen kinare Rs 294.20 crore ki 1.7-km baadh-raksha retaining wall ka shilanyas — 50,000 nivasion ko badh se suraksha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/cities/vijayawada/2026/Mar/10/hrd-minister-lokesh-lays-stone-for-rs-294-crore-krishna-flood-wall',
    date: '2026-03-09',
    note: 'The New Indian Express ki post-event report ke mutabik, HRD Minister Nara Lokesh ne Tadepalli ke Seethanagaram Mahanadu (Mangalagiri seat ke andar) me Krishna nadi ke dayen kinare, Prakasam Barrage se 0.9-2.610 km downstream tak, Rs 294.20 crore ki retaining wall ka shilanyas kiya; administrative approval ek saal me poori ho chuki thi aur tender bhi completed. Structure 15 lakh cusecs tak ke badh-pravah ko sahne ke liye design hua hai (1,920 piles, 26-38 m gehri, pile-raft technology); poora hone par Sundarayya Nagar aur Mahanadu Colony jaise nichle ilakon ke lagbhag 50,000 nivasion ko sthayi baadh-suraksha milegi. Date verification: report me event ‘Monday’ aur prakashan 10 Mar 2026; 9 Mar 2026 (Monday) verified. Fund: rajya sarkar ka irrigation/water-resources pariyojna-nidhi (report me ‘administrative approval worth Rs 294.20 crore’); CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'Nulakapeta (Tadepalli) me Rs 65 lakh CSR-nidhi se bani nayi community hall ka lokarpan — Srirangam Foundation ka sahyog',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/cities/vijayawada/2026/Mar/10/hrd-minister-lokesh-lays-stone-for-rs-294-crore-krishna-flood-wall',
    date: '2026-03-09',
    note: 'The New Indian Express ki usi post-event report ke mutabik, Lokesh ne Mangalagiri constituency ke Tadepalli town ke Nulakapeta me ek nayi bani community hall ka bhi lokarpan kiya; hall Rs 65 lakh ki CSR nidhi se Srirangam Foundation ke sahyog se bana hai. Ye public/sarkari community facility hai, retaining-wall shilanyas ke usi daure me udghatit hui. Date: 9 Mar 2026 (upar wali entry ke anusar). Fund: CSR (Srirangam Foundation) — disclosed.',
    period: '2024-2029',
  },
  {
    title: 'Pedavadlapudi (Mangalagiri mandal) me Rs 14.88 crore ki High-Level Canal Lift Irrigation Scheme ka lokarpan — 25,344 acre ko sinchai paani',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/cities/vijayawada/2026/Mar/10/hrd-minister-lokesh-lays-stone-for-rs-294-crore-krishna-flood-wall',
    date: '2026-03-09',
    note: 'The New Indian Express ki usi post-event report ke mutabik, Lokesh ne Mangalagiri mandal ke Pedavadlapudi gaon me High-Level Canal Lift Irrigation Scheme ka lokarpan kiya; yojna Rs 14.88 crore ki lagat se bani hai, discharge capacity lagbhag 250 cusecs aur 4 pumps lage hain. Report ke mutabik ye Mangalagiri, Tenali aur Ponnur constituencies ki 25,344 acre bhoomi ko sinchai paani degi — bhautik sanrachna Mangalagiri seat ke andar hai, isliye valid. Date: 9 Mar 2026 (upar wali entry ke anusar). Fund: report me nidhi ka srot nirdisht nahi — ‘ghoshit nahi’ (CDP/MLA-nidhi ka zikr nahi).',
    period: '2024-2029',
  },
  {
    title: 'Penumooli (Duggirala mandal) me punarnirmit gramin library bhavan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/cities/vijayawada/2026/Mar/10/hrd-minister-lokesh-lays-stone-for-rs-294-crore-krishna-flood-wall',
    date: '2026-03-09',
    note: 'The New Indian Express ki usi post-event report ke mutabik, Lokesh ne Duggirala mandal ke Penumooli me punarnirmit (reconstructed) rural library building ka bhi lokarpan kiya — public sarkari library hai. Date: 9 Mar 2026 (upar wali entry ke anusar). Report me lagat/fund-source nirdisht nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'Duggirala me Rs 61 lakh se bane Anna Canteen ke naye bhavan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/cities/vijayawada/2026/Mar/10/hrd-minister-lokesh-lays-stone-for-rs-294-crore-krishna-flood-wall',
    date: '2026-03-09',
    note: 'The New Indian Express ki usi post-event report ke mutabik, Lokesh ne Duggirala me Anna Canteen ka lokarpan kiya; canteen ka naya bhavan Rs 61 lakh ki nidhi se bana hai (sarkari public-canteen sanrachna). Date: 9 Mar 2026 (upar wali entry ke anusar). Fund: report me ‘funds of Rs 61 lakh’ bataya gaya hai; CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'Mangalagiri-Nidamarru route par Rs 142 crore ke Nidamarru Railway Over Bridge ka shilanyas — Union mantri ke saath sanyukt karyakram',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/civic-works-worth-over-rs-750-crore-launched-in-mangalagiri-1964282',
    date: '2026-06-17',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Education Minister Nara Lokesh aur Union Minister of State for Rural Development Pemmasani Chandrasekhar ne Mangalagiri-Nidamarru route par Rs 142 crore ke long-pending Nidamarru railway overbridge ka shilanyas kiya; ye Mangalagiri-Namburu section ke level crossing gate ki jagah four-lane (767.5 m) pull hoga. Credit: sanyukt karyakram — Lokesh ki bhoomika Union mantri ke saath shared hai; report me fund-source nirdisht nahi — ‘ghoshit nahi’. Date: report me event ‘Wednesday’, prakashan 2026-06-17T21:56:44+05:30; 17 Jun 2026 (Wednesday) verified. Times of India (18 Jun 2026) ne bhi usi karyakram ki post-event report di — cross-verified.',
    period: '2024-2029',
  },
  {
    title: 'Mangalagiri-Tadepalli municipal corporation ke liye Rs 604.32 crore ki underground drainage Phase-I works ka shubharambh (kul network Rs 1,167.50 crore)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/civic-works-worth-over-rs-750-crore-launched-in-mangalagiri-1964282',
    date: '2026-06-17',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Lokesh aur Union mantri Chandrasekhar ne Mangalagiri-Tadepalli municipal corporation area me underground drainage project ki Phase-I works (Rs 604.32 crore) launch ki — ye corporation limits me banne wale Rs 1,167.50-crore ke comprehensive underground sewerage network ka hissa hai. Date: 17 Jun 2026 (upar wali entry ke anusar). Fund: Urban Challenge Fund + Kendriya sarkar ka sahyog (New Indian Express ki usi event ki report me ullekh hai ki project ko Urban Challenge Fund support mila); CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'Kaza village me 17.18-acre Kaza East Lake Park ka lokarpan — Rs 3.3 crore, Cellkon ki CSR nidhi se nirmit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/civic-works-worth-over-rs-750-crore-launched-in-mangalagiri-1964282',
    date: '2026-06-17',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Lokesh aur Chandrasekhar ne Kaza village me Kaza East Lake Park ka lokarpan kiya — 17.18-acre lake ke ird-gird bana park Rs 3.30 crore ki CSR nidhi (Cellkon) se nirmit; 1.7-km walking track, open gym, children play area, ornamental landscaping aur 42 prajatiyon ke 12,800+ paudhe hain. Times of India ki usi event ki report bhi cross-verify karti hai. Date: 17 Jun 2026 (upar wali entry ke anusar). Fund: CSR (Cellkon) — disclosed.',
    period: '2024-2029',
  },
  {
    title: 'Old Mangalagiri me aadhunik Vaikuntha Mahaprasthanam (crematorium) ka lokarpan — Rs 3.25 crore, CSR + local contributions se upgrade',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/civic-works-worth-over-rs-750-crore-launched-in-mangalagiri-1964282',
    date: '2026-06-17',
    note: 'Deccan Chronicle ki post-event report ke mutabik, netaon ne Old Mangalagiri me aadhunikrit Vaikuntha Mahaprasthanam (crematorium) ko dedicated kiya; Rs 3.25 crore ki lagat se CSR support aur local contributions ke zariye upgrade hua — modern cremation platforms, waiting halls, ritual rooms, dining facility, mortuary boxes, solar lighting sahit public amenities hain. Bhautik sarkari/public sanrachna ka vyaktigat lokarpan. Date: 17 Jun 2026 (upar wali entry ke anusar). Fund: CSR + local contributions — disclosed.',
    period: '2024-2029',
  },
  {
    title: 'Mangalagiri town (Shiva mandir ke paas) me Rs 1.72 crore se aadhunikrit Model Public Library ka lokarpan — children reading room, digital library aur skill spaces sahit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/lokesh-urges-youths-to-harness-opportunities-with-discipline-dedication-1920073',
    date: '2025-11-27',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Education Minister Nara Lokesh ne Mangalagiri town me Shiva mandir ke paas Model Public Library ka lokarpan kiya; 1986 me sthapit library ko Rs 1.72 crore ki lagat se renovate karke modernise kiya gaya — ab isme children’s reading room, senior citizen area, digital library, study rooms aur skill development spaces hain. Date: report me event ‘Thursday’, prakashan 27 Nov 2025; 27 Nov 2025 (Thursday) verified. Fund: report me nidhi ka srot nirdisht nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'Kondapaneni Township Park ka lokarpan — 0.65 acre me Rs 1.23 crore ka nivesh; plaza, yoga deck, outdoor gym aur children zone sahit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/lokesh-urges-youths-to-harness-opportunities-with-discipline-dedication-1920073',
    date: '2025-11-27',
    note: 'Deccan Chronicle ki usi post-event report ke mutabik, Lokesh ne Mangalagiri me Kondapaneni Township Park ka lokarpan kiya — 0.65 acre me Rs 1.23 crore ke nivesh se bana park; plaza, walking paths, yoga deck, outdoor gym, children’s zone aur senior citizens ke liye seating areas hain. Public park ka vyaktigat lokarpan. Date: 27 Nov 2025 (upar wali entry ke anusar). Fund: report me nidhi ka srot nirdisht nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'Nidamarru railway gate (Mangalagiri) par Rs 18.55 crore ke Model Rythu Bazaar ka shilanyas — 5.90 acre me, Aurobindo Pharma Trust ki CSR nidhi se',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/lokesh-sets-stone-for-1855-crore-model-rythu-bazaar-1982761',
    date: '2026-08-27',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Education aur IT Minister Nara Lokesh ne Mangalagiri ke Nidamarru railway gate par ek aadhunik Model Rythu Bazaar ka shilanyas kiya — bhoomi puja karke plaque unveil kiya aur project model inspect kiya. 5.90 acre me 71,925 sq ft built-up area par banne wala integrated retail+wholesale market Rs 18.55 crore ki lagat ka hai: retail me 102 sabzi stalls, 54 phal-phool stalls, 60 other shops; wholesale me 18 unloading platforms, 23 sabzi shops, cold storage, vegetable washing area, canteen aur parking. Fund: CSR (Aurobindo Pharma Trust) — disclosed. Date: report me event ‘Thursday’, prakashan 2026-08-27T19:59:44+05:30; 27 Aug 2026 (Thursday) verified.',
    period: '2024-2029',
  },
];

// ==== REJECT-LOG (Nara Lokesh, researched 2026-10-18) ====
// R1. Retaining-wall report ka The Hindu wala version (thehindu.com/...article70722915.ece) fetch
//     par 403 de raha tha — ‘khul na sakne wala page source nahi’ niyam par entry nahi banayi;
//     same event New Indian Express se open-verified hai (entry 2 me used).
// R2. Noor Masjid (Pavural Colony, Mangalagiri) ka lokarpan (Deccan Chronicle, 27 Nov 2025) — dharmik
//     sthal hai, sarkari sanrachna nahi — niyam ‘bhautik sarkari sanrachna’ par reject.
// R3. NTR aur MSS ki murtiyon ka anavaran (Atmakuru centre, Deccan Chronicle 27 Nov 2025) aur
//     Revendrapadu (Duggirala mandal) me NTR ki murti ka anavaran (NIE, 10 Mar 2026) — murtiyaan
//     ‘sanrachna’ criteria par kamzor aur dono reports me fund ghoshit nahi — reject.
// R4. ‘Mana Illu-Mana Lokesh’ me patta/PMAY sanction-letter vitaran (3,002+2,670+388 patte; New Indian
//     Express 22 Jul 2026 aur 29 Sep 2026; latestly/ANI 13 Apr 2025) — daan/rahat vitaran kaam — reject.
//     PMAY kendriya yojna bhi hai.
// R5. Sri Lakshmi Narasimha Swamy mandir (Mangalagiri) Rs 6 crore restoration — New Indian Express
//     (12 Jun 2026) report me SIRF review meeting aur 3 Jul ko ‘foundation ceremony’ ki ghoshna hai;
//     event ki post-event reporting cited page par nahi — ‘sirf ghoshna’ par reject.
// R6. IT-vibhag ke rajya samjhote/MoU (Carrier Global Rs 1,000 cr Sri City; LG Electronics Sri City;
//     Visakhapatnam IT companies/GIS) — IT mantri ki bhoomika + Mangalagiri seat ke bahar — reject.
// R7. Shiksha-vibhag ke rajya faisle (G.O. 117 radd; budget me Rs 800-1,000 crore school infra ashwasan;
//     Nidamarru govt school ‘model institution’ dawa, NIE 29 Sep 2026) — rajya-star ke faisle/dawe,
//     seat-level bhautik kaam nahi — reject.
// R8. ‘Model constituency’ speech (NIE 18 Jun 2026; TOI 29 Sep 2026) me UGD/gas pipeline/drinking water
//     ke ‘by 2029’ vaade aur house-site pattas — sirf vaade/ghoshna — reject.
// R9. NEGATIVES — 0 entries. Amaravati Inner Ring Road case: Lokesh (A-14) par Sep 2023 me FIR aur
//     anticipatory-bail reject; CID ne Feb 2024 (The Hindu) me chargesheet dakhil ki (Lokesh accused
//     listed) — ye sab pre-term hain; Jun 2024+ me is mamle ka koi nyayik vikas established media me
//     nahi mila (niyamasar pre-term mamla tabhi jab wartaman karyakaal me legal development ho) — no negative.
//     Skill Development/FibreNet cases (2023): Lokesh ko girftari se HC rahat mili thi, pre-term —
//     Jun 2024+ me koi naya FIR/chargesheet nyayik vikas nahi mila. DSC-2025: YSRCP ki CBI-probe/istifa
//     ki maang (Sep 2026) political aarop hai — Lokesh khud aaropi nahi, koi FIR/chargesheet/janch nahi — no negative.
//     Halafname ke 17 mamle akele negative nahi ban sakte. Tirupati laddoo fact-check (The Wire,
//     Jan 2026) media fact-check hai — FIR/accused ya nyayik vikas nahi — no negative.
// R10. Amravati rajdhani ke kaam (AMCA foundation Puttaparthi, Amaravati Bill) aur CM N. Chandrababu Naidu
//      (pita) ke mamle — nirdesh-anusar Lokesh ki entry me nahi gine gaye — scope se bahar.

// dhulipalla-narendra-kumar — 2 works + 0 negatives (researched 2026-10-18)
// Pehchan: Dhulipalla Narendra Kumar, TDP, Ponnuru (Guntur jila; Ponnuru + Chebrolu + Pedakakani mandals),
// 16th AP VS 2024-2029, 6th term MLA (1994-2019 lagatar 5 baar, 2019 me hare, 2024 me wapas jeete); Sangam Dairy ke chairman.
// Dono entries post-event media reports hain jahan mantri ke netritva me MLA ne apne hi constituency ke
// sarkari kaam ka sanyukt lokarpan/shilanyas kiya — bhoomika credit-capped hai, fund disclosed hai.
// Dates dono me inferred: report me 'Saturday'/'Friday' ko publication-tithi se map kiya gaya hai — note me disclosed.
// Sangam Dairy/ACB giraftari (Apr 2021, FIR Pre-Corruption Act + IPC) PRE-TERM hai; Jun 2024+ me koi nyayik
// vikas established media me nahi mila — isliye 0 negatives (parivar/dairy ke baaki mamle bhi bahar).
// REJECT-LOG:
// - indianeconomicobserver.com (26 Sep 2026) 'Foundation stone laid for 4-lane ROB between Guntur and Nambur' — MLA 6-7 public representatives me se ek attendee; kaam Ponnuru ke bahar (Guntur); 'dusre neta ke karyakram me maujoodgi' => REJECT.
// - thehansindia.com (23 Sep 2026) 'Stone laid for works worth Rs 527 cr' — CM ka statewide virtual program (123 municipalities); Ponnuru Municipality ko Rs 28 crore, lekin report me Dhulipalla Narendra Kumar ka zikr nahi, personal role/fund-disclosure nahi => REJECT.
// - timesofindia (2026) 'Ponnur MLA Dhulipalla house burgled' — MLA khud peedit, koi aarop nahi => negative NAHI.
// - NIE (26 Apr 2021) + TOI (Mar 2021): Sangam Dairy ACB giraftari/FIR — pre-term (Jun 2024 se pehle); Jun 2024+ me koi nyayik vikas established media me nahi => negative NAHI.
// - thehindu (Oct 2026) 'YSRCP President rule demand' me MLA ka bayaan — raajneetik tippani, seat-kaam nahi => REJECT.
andhraWorks['dhulipalla-narendra-kumar'] = [
  {
    title: 'Union Mantri ke saath Ponnur MLA ne Rs 15.71 crore ke sadak vikas karyon ka lokarpan aur shilanyas kiya — Pedakakani, Chebrolu aur Ponnur mandal ke 6 gaonon me kaam',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/guntur/efforts-are-being-made-to-resolve-22-a-land-issues-dr-pemmasani-1118513',
    date: '2026-09-05',
    note: 'The Hans India ki post-event report ke mutabik, Union Minister of State (Rural Development and Communications) Dr Pemmasani Chandrasekhar ke saath Ponnur MLA Dhulipalla Narendra Kumar ne Ponnur Assembly constituency me kai sadak vikas karyon ka lokarpan aur shilanyas kiya; kul laagat Rs 15.71 crore. Karyakram-sthal: Pedakakani mandal ke Koppuravuru aur Anumarlapudi, Chebrolu mandal ke Sekuru aur Thotlapalem, aur Ponnur mandal ke Doppalapudi aur Jadavalli — teeno mandal Ponnur AC ke andar hain. Mantri ke mutabik ye kaam Central aur State sarkaron ke sahyog se liye gaye hain; MLA ne karyakram me kaha ki gaonwale baar-baar sadak maang rahe the, zaroori prakriyaon aur fund vyavastha me vilamb hua. Fund: report me Central+State sahyog bataya gaya hai — CDP/MLA-nidhi ka zikr nahi, ‘ghoshit nahi’. Inferred-date disclosure: report me karyakram ko ‘Saturday’ bataya gaya hai aur prakashan-tithi 6 Sep 2026 (Sunday) hai, isliye 5 Sep 2026 li gayi hai. CREDIT CAPPED: ye mantri-netritva ka sanyukt lokarpan/shilanyas hai — MLA ka vyaktigat prayaas isme karyakram-bhagidari tak seemit.',
    period: '2024-2029',
  },
  {
    title: 'MA&UD Mantri ke saath Ponnur municipality me Rs 32.10 crore ke shahri karyon ka shilanyas — AMRUT 2.0 me Rs 22.10 crore peyjal vyavastha + Nagula Cheruvu punaruddhhar, CRDA se Rs 10 crore CC roads aur greening',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2026/Oct/03/maud-minister-lays-stone-for-rs-3210-crore-worth-of-works-in-andhra-pradeshs-ponnur?utm_source=website&utm_medium=related-stories',
    date: '2026-10-02',
    note: 'New Indian Express ki post-event report ke mutabik, MA&UD Minister P Narayana ne local MLA Dhulipalla Narendra Kumar ke saath Ponnur municipality me Rs 32.10 crore ke vikas karyon ka shilanyas kiya. Itemized: AMRUT 2.0 ke tahat Rs 22.10 crore drinking water supply systems aur Nagula Cheruvu ke punaruddhhar ke liye; CRDA funds se Rs 10 crore CC roads aur urban greening ke liye. Alag se Ponnur ke liye Hybrid Annuity Model (HAM) ke tahat Rs 28 crore drainage network upgrade ke liye sanction hua hai — ye swikriti-ghoshna hai, is shilanyas-kaaryakram ka hissa nahi. Fund: AMRUT 2.0 + CRDA bataya gaya hai — CDP/MLA-nidhi ka zikr nahi, ‘ghoshit nahi’. Inferred-date disclosure: report me karyakram ko ‘Friday’ bataya gaya hai aur updated-tithi 3 Oct 2026 (Saturday) hai, isliye 2 Oct 2026 li gayi hai. CREDIT CAPPED: ye mantri ka shilanyas hai — MLA karyakram me saath the, isliye credit isi sahbhagita tak seemit.',
    period: '2024-2029',
    stage: 'shilanyas',
  },
];

// nadendla-manohar — 2 works + 0 negatives (researched 2026-10-18)
// Pehchan pakki: Nadendla Manohar, Tenali (Guntur jila), JSP, Winner 2024;
// Jeet ke baad Civil Supplies mantri (established media). Karyakaal Jun 2024+.
// MANTRI-NIYAM: Civil Supplies vibhag ke rajya-faisle (ration card, annadana
// ke ailaan) bahar; SIRF Tenali seat ke andar ke dastaveji vyaktigat kaam.
// Sources: New Indian Express (post-event reporting, whitelist) — dono entries
//  kholkar verified. andhra.ts record (age 60, halafname me 0 criminal cases).
// Paternal identity note: andhra.ts me 'S/o Nadenla Bhaskar Rao' — task brief me
//  'Nadendla Bhaskar Rao, purva CM, kaka' diya gaya hai; is mining me unse juda
//  koi entry mili nahi, to ye pehchan-jaal active nahi hua. Fund: report me
//  CDP/MLA-nidhi ka zikr nahi — 'ghoshit nahi'.
andhraWorks['nadendla-manohar'] = [
  {
    title: 'Kolakaluru (Tenali mandal) me SERP-MSME pahal ke Flatted Factory Complex ka shilanyas — MSME ko badhava, rojgar aur skill training, khaas taur par sthaniya mahilaon ke liye',
    category: 'Rojgar',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Jun/17/andhra-min-nadendla-lays-stone-for-flatted-factory',
    date: '2025-06-16',
    note: 'New Indian Express ki post-event report ke mutabik, Civil Supplies Minister Nadendla Manohar ne SERP-MSME initiative ke tahat Kolakaluru (Tenali mandal) me Flatted Factory Complex ka shilanyas kiya. Report ke anusar is facility se micro, small aur medium enterprises (MSMEs) ko badhava milega, rojgar paida hoga aur skill training milegi, khaas taur par sthaniya mahilaon ke liye. Philanthropist Ponnekkanti Suvarchala Sashikiran aur unke parivar ne complex ke liye ek acre zameen (lagbhag Rs 1 crore keemat ka andaza) daan ki; zameen ke kagazat mantri ke Tenali camp office me adhikariyon ko saupe gaye; Tenali Sub-Collector Sanjana Simha maujood thi. Manohar ne apne niji fund se Rs 10 lakh dene ki ghoshna bhi ki (niji kharch ka hissa — is entry ka vishay nahi) aur Kolakaluru ko model panchayat banane ka vision bataya. Fund: complex ki nirmaan-lagat report me nirdisht nahi — ‘ghoshit nahi’; SERP-MSME rajya yojna ka kaam hai. Mantri-niyam: ye Civil Supplies vibhag ka rajya-faisla nahi, seat ke andar bhautik sanrachna ka vyaktigat shilanyas hai. Inferred-date disclosure: report me karyakram ko ‘Monday’ bataya gaya hai; prakashan 17 Jun 2025 (Tuesday) hai — isliye 16 Jun 2025 li gayi hai.',
    period: '2024-2029',
  },
  {
    title: 'ZPHS Angalakuduru (Tenali mandal) me PM Shri ke tahat bani Rs 15.58 lakh ki nayi Chemistry Laboratory ka lokarpan — Mega PTM 3.0 karyakram me',
    category: 'School',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Dec/06/andhra-civil-supplies-minister-urges-students-to-innovate-adapt-to-future-jobs-at-mega-ptm-in-tenali',
    date: '2025-12-05',
    note: 'New Indian Express ki post-event report ke mutabik, Mega PTM 3.0 Zilla Parishad High School (ZPHS), Angalakuduru, Tenali mandal me hua, jahan Nadendla Manohar ne PM Shri ke tahat bani Rs 15.58 lakh ki nayi Chemistry Laboratory ka udghatan kiya. Guntur District Collector A Thameem Ansariya aur adhikari maujood the; udghatan ke baad Manohar ne students ke saath lunch kiya. Fund: PM Shri (kendriya yojna) — vyaktigat lokarpan bhoomika report me dastaveji hai, isliye entry valid hai. Report me Nestle ke 20 bio-toilets daan aur Rajya ke Rs 46,000 crore shiksha-kharch jaise zikr shamil hain — ye is entry ka vishay nahi. Inferred-date disclosure: report me karyakram ko ‘Friday’ bataya gaya hai; prakashan 6 Dec 2025 (Saturday) hai — isliye 5 Dec 2025 li gayi hai.',
    period: '2024-2029',
  },
];

// REJECT-LOG (nadendla-manohar, Tenali — mined 2026-10-18):
// 1. The Pioneer (pynr.in) — ‘Stone laid for high-level bridge at Kollipara’ (Mar 2025): Manohar ne
//    Kollipara gaon (Tenali constituency) me Krishna West Canal par Rs 4.19 crore ke high-level bridge ka
//    shilanyas kiya; Union MoS Pemmasani Chandrasekhar bhi maujood. URL:
//    https://pynr.in/stone-laid-for-high-level-bridge-at-kollipara/ — Kaaran: The Pioneer whitelist me NAHI;
//    retry lead — whitelisted outlet (The Hindu/DC/NIE) me is shilanyas ki post-event coverage nahi mili.
//    Usi report me ‘Rs 97.60 crore Tenali 2025-26’ aur ‘Rs 36 crore 9 mahine me’ SIRF GHOSHNA hain.
// 2. The Hindu — ‘Minister inaugurates free medical camp at Kollipara CHC’ (18 May 2025):
//    https://www.thehindu.com/news/national/andhra-pradesh/minister-inaugurates-free-medical-camp-at-kollipara-chc/article69590462.ece
//    Kaaran: mukhya-atithi samaroh — medical camp ka udghatan; bhautik sarkari sanrachna ka lokarpan/shilanyas nahi.
// 3. The Hindu — ‘Minister Nadendla Manohar celebrates Bhogi in Tenali’ (12 Jan 2025):
//    https://www.thehindu.com/news/national/andhra-pradesh/minister-nadendla-manohar-celebrates-bhogi-in-tenali-extends-festival-greetings/article69092918.ece
//    Kaaran: tyohar samaroh; paddy khareed ke aankde mantri-vibhag ke rajya-faisle (mantri-niyam).
// 4. New Indian Express — ‘Andhra Min gives away social security pensions in Tenali’ (2 Sep 2025, Jagarlamudi):
//    https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Sep/02/andhra-min-gives-away-social-security-pensions-in-tenali
//    Kaaran: NTR Bharosa pension vitaran-shubharambh (sarkari abhiyan ka shubharambh); Panchayat bhavan/school
//    upgrade/sadak/pani ki ghoshnaen SIRF GHOSHNA — koi dastaveji lokarpan/shilanyas nahi.
// 5. New Indian Express — ‘Tenali will be a model in P4 implementation’ (24 Jul 2025):
//    https://www.newindianexpress.com/states/andhra-pradesh/2025/Jul/24/tenali-will-be-a-model-in-p4-implementation-ap-minister-nadendla-manohar
//    Kaaran: Tenali Vision Action Plan samiksha-baithak; Golden Families/donors yojna-review — koi kaam ka
//    lokarpan/shilanyas nahi, SIRF GHOSHNA class.
// 6. New Indian Express — ‘Minister Nadendla Manohar reviews mid-day meal scheme in Tenali’ (13 Jun 2025):
//    https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Jun/13/minister-nadendla-manohar-reviews-mid-day-meal-scheme-in-tenali
//    Kaaran: SIRF NIRIKSHAN (Chenchu Rama Naidu High School me mid-day meal tasting); ‘Rs 74 crore Tenali me
//    kharch’ MLA KA DAWA (itemized nahi); Narakodur-Tenali-Mangalagiri road expansion ‘progress announced’ —
//    SIRF GHOSHNA; mantri-vibhag ka vishay (mantri-niyam).
// 7. newkerala.com (ANI copy) — ‘Andhra Minister Manohar’s Development Plan for Tenali’ (27 Jan 2025):
//    https://www.newkerala.com/news/o/andhra-minister-nadendla-manohar-announces-development-inspections-new-initiatives-871
//    Kaaran: PRE-EVENT ANNOUNCEMENT (kal se inspection shuru hoga) + parks/bridges/roads/libraries SIRF GHOSHNA;
//    Kaikaluru fire victims support DAAN/RAHAT class; ANI-whitelist nahi (newkerala aggregator).
// 8. ap7am.com — ‘Sports Stadium Being Established in Tenali’ (22 Dec 2024):
//    https://www.ap7am.com/en/92090/amp/sports-stadium-being-established-in-tenali-minister-nadendla-manohar
//    Kaaran: whitelist-bahar (ap7am) + SIRF GHOSHNA — Rs 3 crore stadium, Rs 25 crore rural roads, Chinaravuru Park
//    Rs 20 lakh renovation, Ikarus Park Rs 1.15 crore — kisi ka dastaveji lokarpan/shilanyas nahi mila.
// 9. The Hans India — ‘Stone laid for works worth Rs 527 cr’ (23 Sep 2026):
//    https://www.thehansindia.com/news/cities/guntur/stone-laid-for-works-worth-rs-527-cr-1124669
//    Kaaran: DUSRE NETA KA KARYAKRAM — CM N. Chandrababu Naidu ne virtually shilanyas kiya (Rs 11,360 crore,
//    123 municipalities); Tenali Municipality ka Rs 44 crore hissa isi me; Manohar ka report me zikr hi nahi —
//    vyaktigat bhoomika undisclosed.
// 10. The Hans India / ap7am / Dailyhunt — Burripalem (Tenali Mandal) PMAY 3D-printed houses foundation (Oct 2026):
//    https://www.thehansindia.com/news/national/pilot-project-to-build-houses-using-3d-printing-technology-launched-in-andhra-1128780
//    Kaaran: DUSRE NETA KA KARYAKRAM — shilanyas Union Minister Shivraj Singh Chouhan + CM ne kiya; Manohar sirf
//    maujood (CM ne unki tareef ki) — maujoodgi entry nahi.
// 11. ThePrint (PTI auto-feed) — ‘Andhra minister launches smart ration card drive’ (31 Aug 2025):
//    https://theprint.in/india/andhra-minister-launches-smart-ration-card-drive-for-1-46-crore-beneficiaries/2733076/
//    Kaaran: MANTRI-NIYAM — Civil Supplies vibhag ka rajya-faisla (smart ration cards, 1.46 crore beneficiaries)
//    + sarkari abhiyan ka keval shubharambh.
// 12. The Hindu — ‘Naidu inaugurates five power sub-stations’ (7 Nov 2024, Tallayapalem, Amaravati):
//    https://www.thehindu.com/news/national/andhra-pradesh/naidu-inaugurates-five-power-sub-stations-worth-742-cr-in-ap-lays-stone-for-many-other-new-projects/article68840838.ece
//    Kaaran: DUSRE NETA KA KARYAKRAM (CM ne udghatan kiya) + TENALI KE BAHAR (Amaravati) — Manohar sirf maujood.
// 13. Tenali police-beating incident (May 2025; court verdict Sep 2026; YSRCP ne police misuse ka aarop lagaya):
//    Asianet Newsable/devdiscourse (non-whitelist, ANI feed) — Kaaran: MLA KHUD AAROP NAHI; kisi FIR/chargesheet ke
//    aaropi column me Manohar ka naam nahi; sirf raajneetik aarop (YSRCP ka coalition-police par). Nyayik vikas
//    (court ne attempt-to-murder charge dismiss kiya) Manohar ke khilaf nahi. Isliye NEGATIVE NAHI.
//    Halafnama (The Hindu candidate bio + andhra.ts): 0 criminal cases — halafname ke mamle bhi nahi hain.
// 14. Deccan Chronicle — ‘CM Naidu Focuses On Candidate Selection’ (Oct 2026, local body elections teleconference):
//    https://www.deccanchronicle.com/southern-states/andhra-pradesh/cm-naidu-focuses-on-candidate-selection-targets-100-per-cent-strike-rate-1996535
//    Kaaran: raajneetik baithak — koi seat-level kaam nahi.
// 15. NIE — ‘Minister Nadendla questions intention of former CM Jagan’s visit to Tenali’ (3 Jun 2025):
//    https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Jun/03/minister-nadendla-questions-intention-of-former-cm-jagans-visit-to-tenali
//    Kaaran: raajneetik bayan (ganja-gang aarop YSRCP par) — Manohar par koi aarop nahi; koi kaam/negative nahi.
// 16. TOI 2014 election story (‘Former speaker Nadendla Manohar got defeated at Tenali’) — pre-term (2014), koi
//    kaam nahi.

// burla-ramanjaneyulu — 1 work + 0 negatives (mined 2026-10-18)
// Pehchan: Burla Ramanjaneyulu, TDP, Prathipadu (Guntur, SC), 16th AP VS 2024-2029; purv IAS adhikari (retired); halafname me 3 criminal cases.
// 1 entry: The Hindu (05 May 2026) — Guntur Channel ke vistar-aadhunikikaran ke liye Rs 369.20 crore ki administrative sanction (G.O. Rt. No. 217, 04 May 2026); swikriti se pehle MLA B. Ram Anjaneyulu (report ki naam-spelling; pehchan: Prathipadu (Guntur) ke MLA) ke representations ka dastaveji credit — credit capped (kai pratinidhiyon me se ek).
andhraWorks['burla-ramanjaneyulu'] = [
  {
    title: 'Guntur Channel ke vistar-aadhunikikaran ke liye Rs 369.20 crore ki prashasnik swikriti — MLA ke pratinivedan ka credit (credit capped)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/pemmasani-thanks-state-for-36920-crore-guntur-channel-modernisation-ayacut-to-grow-to-75000-acres/article70942718.ece',
    date: '2026-05-05',
    note: 'The Hindu (05 May 2026) ke mutabik, Union MoS (Rural Development) Pemmasani Chandra Sekhar ne bataya ki Guntur Channel ke modernisation/extension ke liye rajya sarkar ne Rs 369.20 crore sanction kiye hain — swikriti 04 May 2026 ko G.O. Rt. No. 217 se hui; isse ayacut 27,000 acres se badhkar 75,000 acres hoga aur lagbhag 4 TMC paani ka upyog sambhav hoga; kaam main canal aur distributaries par 0–47 km tak (Krishna delta system) hoga aur 33 gaon (lagbhag 4 lakh log) labhanvit honge. Mantri ne CM N. Chandrababu Naidu ka dhanyavaad diya ‘representations by public representatives, including himself, MLA B. Ram Anjaneyulu and others’ ke baad — B. Ram Anjaneyulu (report ki naam-spelling) ki pehchan Prathipadu (Guntur) ke TDP MLA Burla Ramanjaneyulu se pakki hai (Deccan Chronicle ki Prathipadu-tank report me ‘Prathipadu MLA B. Ramanjaneyulu’ ke roop me bhi yahi spelling milti hai). MLA ne kaha ki pariyojna unka chunav-vaada poora karti hai aur lagbhag 50 gaon ko sinchai aur peyjal me faayda degi. CREDIT CAPPED: sanction kai pratinidhiyon (Union mantri sahit) ke pratinivedan ke baad hui — MLA ki bhoomika unhi pratinivedan me se ek tak seemit hai; MLA ka koi vyaktigat lokarpan/shilanyas report me nahi. Fund: swikrit raashi rajya sarkar ki hai — report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
];

// REJECT-LOG (mined 2026-10-18):
// (1) Nallapadu Lake facelift (The Hindu, ‘Guntur’s Nallapadu Lake all set to get a facelift, says Union Minister’): Union MoS Pemmasani ne Rs 10–12 crore ki ghoshna ki; MLA Burla Ramanjaneyulu sirf nirikshan me saath the — dusre neta ke karyakram me maujoodgi, vyaktigat bhoomika nahi.
// (2) Prathipadu tank restoration (Deccan Chronicle, 10 Oct 2026, ‘Centre, State Join Hands To Restore Prathipadu Tank’): Union MoS ne PMKSY 2.0 ke tahat Rs 49.91 lakh ki pariyojna ka lokarpan kiya; MLA ne karyakram me sirf bayaan diya — maujoodgi, credit nahi.
// (3) Guntur–Nambur 4-lane ROB shilanyas (nbmcw.com, 28 Sep 2026, Rs 108 crore): kendriya mantri-led karyakram me MLA ki keval upasthiti; srot whitelist-bahar bhi hai.
// (4) Mega Job Fair Guntur (The Hindu, 09 May 2025): APSDCC dwara aayojit sarkari abhiyan-karyakram; MLA ne shirkat ki, udghataan Collector ne kiya — keval shubharambh/upasthiti.
// (5) Inter Polytechnic Sports Meet udghatan (Dec 2025, MBTS Govt Polytechnic college newsletter, whitelist-bahar): MLA mukhya-atithi — CSR/samaroh.
// (6) Ongole cattle show + stone pulling competition inauguration, Prathipadu (16 Sep 2026, MP website, whitelist-bahar): NTR Memorial Trust ka karyakram, mantri-mukhya-atithi wala — bhooti sarkari sanrachna nahi.
// (7) Eruvaka Pournami (ANGRAU e-newsletter Apr–Jun 2026, whitelist-bahar): Krishi Mantri chief guest; MLA adhyaksh maatra — karyakram.
// (8) ‘Denizens hopeful of development in Guntur’ (New Indian Express, Jun 2024): MLA ka naam tak nahi — sirf ghoshna/aasha.
// (9) Negatives: halafname me 3 pending criminal cases hain lekin Jun 2024+ me FIR/chargesheet/janch/nyayik-vikas ka koi established-media record nahi — halafname akele negative nahi. indiankanoon ke hits alag Ramanjaneyulus (teacher/contractor) ke hain — pehchan mismatch. Isliye 0 negatives.

// galla-madhavi — 3 works + 1 negative (mined 2026-10-18)
// Pehchan pakki: Galla Madhavi, TDP, Guntur West (Guntur jila), 16th AP VS 2024-2029,
// first-time MLA; 2024 me 1,16,067 vote, runner-up Vidadala Rajini (YSRCP) se 51,150 margin.
// Pehchan-jaal: TOI ki FIR report aur Wikipedia dono ke anusar inke pati Galla Ramachandra
// Rao hain (andhra.ts record me bhi ‘W/o Galla Ramachandra Rao’); brief me Galla Jayadev ko
// pati bataya gaya tha — ye sambhavatah bhul hai, lekin niyam wahi rahta hai: Jayadev,
// Ramachandra Rao aur Amara Raja group sahit parivar ke saare mamle is profile se bahar.
// Whitelist sources kholkar padhe gaye: The Hans India, New Indian Express, Times of India,
// The Hindu, Deccan Chronicle. Fragment khud merge NAHI karna — parent merger karega.
// Sabhi titles/notes Roman-script Hinglish; currency ‘Rs’; single-quote style me inner
// quotes typographic (‘ ’) rakhe gaye hain.
andhraWorks['galla-madhavi'] = [
  {
    title: 'Guntur West MLA Galla Madhavi ne 21, 25, 43, 45 aur 49 divisions me Rs 8.50 crore ke civic vikas karyon (CC/BT sadken, CC drains, RCC outfall drains, culverts) ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/guntur/foundation-laid-for-development-works-1128522',
    date: '2026-10-03',
    note: 'The Hans India ki post-event report ke mutabik, Guntur West MLA Galla Madhavi ne Guntur West Assembly constituency ke 21, 25, 43, 45 aur 49 divisions me Rs 8.50 crore ke vikas karyon ka shilanyas kiya; karyon me CC aur BT sadkon, CC drains, RCC outfall drains aur culverts ka nirman shaamil hai. Inferred-date disclosure: report 4 Oct 2026 (Ravivar) subah 3:01 baje prakashit hui aur karyakram ko ‘Saturday’ bataya gaya — isliye 3 Oct 2026 (Shanivar) li gayi hai. Fund: report me in karyon ka fund-head nirdisht nahi — ‘ghoshit nahi’. Credit disclosure: report me MLA ka ye bayan bhi darj hai ki pichhle do varsh me in paanch divisions me Rs 53 crore ke kaam poore ho chuke hain aur taza karyon sahit kul lagbhag Rs 70 crore tak pahunchega — ye aankde MLA ke apne daave hain, srot ne inka swatantra satyapan nahi diya.',
    period: '2024-2029',
    stage: 'shilanyas',
  },
  {
    title: 'Guntur Mayor ke saath 34th Division ke 3rd Line, Cobaldpet me CC drain nirman ka sanyukt shilanyas kiya (constituency me Rs 54 lakh ke vikas karyon ka hissa)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/Aug/12/mayor-lays-stone-for-rs-54-lakh-project-gmc-cracks-whip-on-encroachments',
    date: '2025-08-11',
    note: 'New Indian Express ki post-event report ke mutabik, Guntur Mayor Kovelamudi Ravindra ne Guntur West MLA Galla Madhavi ke saath milkar 34th Division ke 3rd Line, Cobaldpet me CC drain nirman ka shilanyas kiya — ye constituency me Rs 54 lakh ke vikas karyon ka hissa bataya gaya hai. Report me MLA ne kaha ki upnagariya ilakon me sadkon aur drains ke kaam ko prathmikta di ja rahi hai taaki peya-jal aur swachhata ki samasyaon ka samadhan ho. Inferred-date disclosure: report 12 Aug 2025 subah 3:06 baje update hui aur karyakram ko ‘Monday’ bataya gaya — isliye 11 Aug 2025 (Somvar) li gayi hai. Bhoomika disclosure: shilanyas sanyukt tha — Mayor pramukh the, MLA ne unke saath milkar shilanyas kiya; credit isi sanyukt bhoomika tak seemit. Fund: report me Rs 54 lakh ka fund-head nirdisht nahi (GMC-ke tahat karya bataya gaya) — CDP/MLA-nidhi ka zikr nahi, isliye ‘ghoshit nahi’.',
    period: '2024-2029',
    stage: 'shilanyas',
  },
  {
    title: 'Guntur West ke 28th Division me lagbhag Rs 1 crore ki lagat se banne wale naye Urban Primary Health Centre ka Kendriya Mantri Pemmasani Chandrasekhar ke saath sanyukt bhoomi pujan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/Dec/29/minister-pemmasani-lays-foundation-for-health-infrastructure-projects',
    date: '2025-12-28',
    note: 'New Indian Express ki post-event report ke mutabik, Kendriya Mantri Dr Pemmasani Chandrasekhar ne Guntur West constituency ke 28th Division me naye Urban Primary Health Centre (UPHC) ka bhoomi pujan sthaniya MLA Galla Madhavi ke saath milkar kiya; kendra lagbhag Rs 1 crore ke aavantan se banaya ja raha hai aur Guntur Government Hospital ka bojh kam karne ki apeksha hai. Report ke anusar mantri ne ise gathbandhan sarkar ke vikas-kendrit drishtikon ka pratibimb bataya, jabki MLA Madhavi ne constituency me lambe samay se chali aa rahi buniyadi-dhancha kamiyon ko ujagar kiya. Inferred-date disclosure: report 29 Dec 2025 subah 4:01 baje update hui aur karyakram ko ‘Sunday’ bataya gaya — isliye 28 Dec 2025 (Ravivar) li gayi hai. Bhoomika disclosure: bhoomi pujan sanyukt tha — Kendriya Mantri pramukh the, MLA ne unke saath milkar bhoomi pujan kiya; credit isi sanyukt bhoomika tak seemit. Fund: report me Rs 1 crore ke aavantan ka fund-head nirdisht nahi — CDP/MLA-nidhi ka zikr nahi, isliye ‘ghoshit nahi’.',
    period: '2024-2029',
    stage: 'shilanyas',
  },
  {
    title: 'Purv mantri Ambati Rambabu ke karyalaya aur niwas par hamle ke mamle me Pattabhipuram police dwara darj FIR me Accused No. 1 (A1) ke roop me naamit — pati Galla Ramachandra Rao A2, kul 31 TDP neta/karyakarta booked, janch jaari',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/vijayawada/guntur-west-mla-booked-in-ambati-attack-case/articleshow/127891495.cms',
    date: '2026-02-04',
    note: 'NEGATIVE entry. Times of India ki report ke mutabik, Pattabhipuram police ne purv mantri aur YSRCP neta Ambati Rambabu ke karyalaya aur niwas par hamle me kathit bhumika ke liye Guntur West MLA Galla Madhavi aur unke pati Galla Ramachandra Rao ke khilaf mamla darj kiya; FIR me Madhavi ko Accused No. 1 (A1) aur unke pati ko A2 naamit kiya gaya; is ghatna me kul 31 TDP neta aur karyakarta booked hue. Police ke anusar janch jaari hai aur CCTV footage aur gawah-bayanon sahit jama sakshyon ke aadhar par aage karyavahi hogi. Report ke mutabik hamla Ambati dwara CM N. Chandrababu Naidu ke khilaf ki gayi tippaniyon se bhadke TDP karyakartaon ka tha. MLA ka jawab note me darj: Madhavi ne kaha ki YSRCP neta CM ke khilaf baar-baar uksane wali tippaniyan kar rahe the, ‘CM Chandrababu Naidu kabhi hinsa ko badhava nahi dete, hamari party hamlo ka samarthan nahi karti, karyakarta YSRCP netaon ke bayanon par gusse me aakar kaam kar baithe,’ aur YSRCP par milavati-ghee vivad jaise muddon se dhyan bhatkane ka aarop lagaya. Stage: FIR darj + police janch jaari; chargesheet ya adalati faisle ki koi report cited page par nahi — koi nishkarsh na nikala jaye. Inferred-date disclosure: TOI page ke fetched text me explicit prakashan-tithi nahi dikhi; search index ke anusar ye ~Feb 2026 ki report hai (hamla 31 Jan 2026 ko hua tha, NIE 1 Feb 2026) — isliye 4 Feb 2026 li gayi hai.',
    period: '2024-2029',
  },
];

// REJECT-LOG galla-madhavi (researched 2026-10-18):
// R-1. Deccan Chronicle — Narla Venkateswara Rao Auditorium punarnirman karyakram me Dr Pemmasani
//      aur MLA Galla Madhavi ne Annamayya (Vishnu) Park ke paas Sri Venkateswara Swamy mandir ke
//      peeche Rs 1.32 crore ki retaining wall ka sanyukt shilanyas kiya
//      (URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/long-pending-narla-auditorium-project-to-develop-similar-to-ravindra-bharathi-in-hyderabad-1960005)
//      — REJECT: report me retaining wall ka sthan Guntur West constituency me hone ki pushti nahi
//      (sirf ‘Guntur’ bataya gaya); ‘Guntur West ke bahar ka kaam entry NAHI’ niyam ke tahat bahar.
// R-2. New Indian Express (23 Sep 2026) — ‘Rs 820-crore infra boost to ULBs’: CM N. Chandrababu Naidu
//      ne 123 nagar-nikayon me Rs 11,359 crore ke karyon ka virtual shilanyas kiya; Guntur West MLA ne
//      sirf sujhav diye (model road par underground cable ducts, underground solid-waste storage,
//      ‘Smart Ward’ vikas)
//      (URL: https://www.newindianexpress.com/states/andhra-pradesh/2026/Sep/23/rs-820-crore-infra-boost-to-ulbs-in-four-districts-in-andhra-pradesh)
//      — REJECT: CM-netritva karyakram me maujoodgi + sujhav = sirf maang/prastav, vyaktigat
//      shilanyas/lokarpan nahi.
// R-3. The Hans India (23 Sep 2026) — ‘Stone laid for works worth Rs 527 cr’: wahi CM-virtual karyakram,
//      Guntur jile ke 4 ULBs me Rs 527 crore; Madhavi sahbhagi ke roop me upasthit
//      (URL: https://www.thehansindia.com/news/cities/guntur/stone-laid-for-works-worth-rs-527-cr-1124669)
//      — REJECT: dusre neta (CM) ke karyakram me maujoodgi.
// R-4. The Morning Voice (tmv.in, ~Apr 2026) — ‘Rs 406 Crore Push to Transform Guntur West’: TDP karyalaya
//      me press conference; paanch pariyojnaon ke prastav ‘approval ke liye bheje gaye’
//      (Peakala Vagu Rs 145 cr, Ambedkar Vagu, PVK Naidu Market Rs 30 cr, Ambedkar Bhavan Rs 18 cr, BC Bhavan Rs 10 cr)
//      (URL: https://tmv.in/article/406-crore-push-to-transform-guntur-west-mla-galla-madhavi-date=2026-04-07)
//      — REJECT: tmv.in whitelist-bahar + sirf prastav/ghoshna, swikriti ka dastavej nahi.
// R-5. The Morning Voice (tmv.in, ~Aug 2026) — Guntur Regional Library ka Rs 20 crore bhoomi pujan;
//      Union Minister Pemmasani, Collector aur daata Challa Rajendra Prasad upasthit; MLA ne sambodhit kiya
//      (URL: https://tmv.in/article/guntur-regional-library-set-for-a-major-transformation-date=2026-08-17)
//      — REJECT: tmv.in whitelist-bahar + mantri-netritva karyakram me maujoodgi/sambodhan.
// R-6. New Indian Express (13 Jun 2024) — ‘Denizens hopeful of development in Guntur under TDP regime’:
//      chunav-parinaam ke baad vox-pop; Madhavi ka jeet ka zikr
//      — REJECT: karyakaal-arambh ki aam coverage, koi vikas-kaam nahi.
// R-7. Kashmir Despatch (~Sep 2026) — Guntur-Nambur 4-lane ROB (Rs 108 cr, 100% Railways-funded);
//      karyakram me West Guntur MLA Galla Madhavi upasthit
//      — REJECT: non-whitelisted + kendriya pariyojna bina vyaktigat bhoomika + keval maujoodgi.
// R-8. The Hans India (14 Sep 2026) — ‘MLA arranges Veligonda tour for TDP cadre’: 450 TDP neta/karyakartaon
//      ke liye Veligonda Project/Srisailam ka daura, camp office se 10 basen ravana
//      (URL: https://www.thehansindia.com/news/cities/guntur/mla-arranges-veligonda-tour-for-tdp-cadre-1121654)
//      — REJECT: party-cadre daura, seat-level sarkari vikas-kaam nahi.
// R-9. The Hindu (28 Mar 2026) — Amaravati special session: ‘A capital to a State is like a brain to the body’
//      (URL: https://www.thehindu.com/news/national/andhra-pradesh/unified-voice-in-assembly-backs-amaravati-as-permanent-capital-of-ap/article70796264.ece)
//      — REJECT: sadan me tippani/bayan, koi dastaveji nateeja nahi.
// R-10. The Hindu (10 May 2026) — Mother’s Day: MLA ne mahila safai-karmiyon ka samman kiya aur unke liye
//       health camp lagwaya
//       (URL: https://www.thehindu.com/news/national/andhra-pradesh/home-minister-celebrates-mothers-day-with-inmates-at-bandham-old-age-home/article70962890.ece)
//       — REJECT: samman/daan-rahat prakriti ka samajik karyakram, bhautik sarkari sanrachna/swikriti nahi.
// R-11. Times of India (~Sep 2026) — gharelu-hinsa shikayat darj karane ke liye MLA mahila ko Mahila thane le
//       gayin; Section 85 BNS ke tahat case darj hua
//       (URL: https://timesofindia.indiatimes.com/city/vijayawada/domestic-violence-case-registered-following-guntur-mlas-intervention/articleshow/134341694.cms)
//       — REJECT: shikayat-nivaran/grievance advocacy; koi lokarpan/shilanyas/swikriti nahi — kaam ki
//       paribhasha me nahi aata.
// R-12. Borewell-vivad (Jul 2026, Krishna Babu Colony): Times Now par khabar — sthaniya TDP neta aaropi,
//       MLA ne use party se nilambit kiya; YSRCP ne ysrcongress.com par MLA par shikayat rokne ka aarop lagaya
//       (URL: https://www.timesnownews.com/crime/guntur-woman-stripped-assaulted-borewell-dispute-clash-tdp-leader-suspended-article-155128973)
//       — REJECT as negative: Times Now whitelist me nahi; ysrcongress.com party-site hai; MLA ka naam
//       kisi FIR ke aaropi column me nahi — ‘shikayat me naam lekin FIR-aaropi column me naam NAHI = NAHI’.
// R-13. Wikipedia ‘Controversy’: Apr 2024 me chunav se pehle nakli-namankan (Vidadala Rajini namesake)
//       mamla; MCC ullanghan ka case
//       (URL: https://en.wikipedia.org/wiki/Galla_Madhavi)
//       — REJECT as negative: pre-term (Apr 2024, karyakaal Jun 2024 se) + Wikipedia whitelisted nahi +
//       Jun 2024+ me is mamle ka koi nyayik vikas established media me nahi mila.
// R-14. Halafname ke 2 pending aapradhik mamle (andhra.ts background: criminalCases 2)
//       — REJECT as negative: halafname ke pending mamle akele negative NAHI (rule); Jun 2024+ me inka koi
//       nyayik vikas established media me nahi mila.
// R-15. Pehchan-jaal firewall: Galla Jayadev (purv Guntur MP) ke purane mamle (jaise 2015 Amaravati coverage)
//       — alag vyakti + pre-term = bahar. Note: TOI ki FIR report, Wikipedia aur andhra.ts record
//       (‘W/o Galla Ramachandra Rao’) teeno ke anusar pati Galla Ramachandra Rao hain; brief me Galla
//       Jayadev ko pati bataya gaya tha — parivar ke kisi bhi sadasya ke mamle profile se bahar, isliye
//       ye antar entry-nirnay ko prabhavit nahi karta. Amara Raja group ke CSR kaam bhi niyam se bahar
//       (koi whitelisted CSR-kaam report Madhavi se judi nahi mili).
// Retry leads: (a) Ambati-hamla FIR ka aage ka vikas — chargesheet/giraftari/adalaati aadesh; TOI/NIE/Hindu
// par ‘Ambati Rambabu’ + ‘Galla Madhavi’ khoj dobara; (b) Guntur GMC ward-wise shilanyas coverage (Hans India
// ‘Guntur’ section) me 34th/28th division ke alawa anya division-karyon me MLA ke naam ki khoj;
// (c) AP Assembly session coverage (Feb/Sep 2026) me Guntur West ke sawaal par mantri-jawab ka dastaveji nateeja.

// Andhra Pradesh works-mining fragment: Mohammed Naseer Ahmed (mohammed-naseer-ahmed, Guntur East, TDP)
// Pehchan: Guntur East, TDP, Winner 2024 (1,00,815 vote; runner-up Shaik Noori Fathima, YSRCP, 68,853) — andhra.ts record.
// Karyakaal: Jun 2024+ | period: 2024-2029
// Sirf Roman-script Hinglish istemal hua hai. Currency: Rs.
// Positive entries: 1 (Deccan Chronicle post-event report, vyaktigat sanyukt shilanyas bhautik sanrachna ka, fund + bhoomika disclosed, credit capped).
// Negatives: 0 qualifying — halafname ke 8 mamalon ka Jun 2024+ me koi nyayik vikas established media par nahi mila; halafname ke pending mamle akele negative nahi.

andhraWorks['mohammed-naseer-ahmed'] = [
  {
    title: 'Mondigate (Old Guntur) me Rs 6.23 crore ke drainage-adhunikikaran karyon ka shilanyas — Railway fund se discharge-kshamata 30,000 se badhkar 50,000 litre hogi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/rs-623-crore-to-modernise-gunturs-mondigate-drainage-1979194',
    date: '2026-08-14',
    note: 'Deccan Chronicle ki post-event report (14 Aug 2026) ke mutabik, Union Minister of State Dr Pemmasani Chandrasekhar aur Guntur East MLA Mohammed Naseer Ahmed ne Mondigate (Guntur city, Old Guntur) me Rs 6.23 crore ke drainage modernisation karyon ka shilanyas sanyukt roop se kiya; fund Railways ka bataya gaya hai (MPLADS nahi). Maujooda outlet ki kshamata lagbhag 30,000 litre thi aur bhari barish me barish-ka-pani sewage me milkar gharon me ghus jata tha; badhkar 50,000 litre hogi. Kaam Rajiv Gruhakalpa, Gottala Road, Venkatarama Theatre aur Ziauddin Nagar me honge (har jagah lagbhag Rs 2 crore); shuruati anumaan Rs 7-8 crore tha. MLA ke anusaar Old Guntur ke 50,000 se adhik parivaron ko fayda hoga; baaki kaam monsoon ke baad poore honge. CREDIT CAPPED: ye Union Minister (Guntur MP) ke saath sanyukt shilanyas hai — MLA ki bhoomika isi shilanyas tak seemit; kendriya Railway fund hai, MLA/CDP nidhi ka report me zikr nahi — ‘ghoshit nahi’. Report me shilanyas ki tareekh ‘Friday’ di gayi hai aur prakashan 14 Aug 2026 (Friday) ko hua, isliye koi inferred-date nahi. Usi karyakram me substation aur Nandivelugu ROB ka bhi zikr hai — wo is entry ka vishay nahi.',
    period: '2024-2029',
  },
];

// REJECT-LOG — mohammed-naseer-ahmed (Guntur East)
// [REJECT nirikshan] Takkellapadu Reservoir, Nehru Nagar aur ELS points ka pani-nirikshan — Hans India 2026-08-31; sirf nirikshan + ashwasan, koi shilanyas/lokarpan/swikriti nahi.
// [REJECT nirikshan] Autonagar me Rs 30 crore phased development — Hans India 2026-10-11; Collector ki ghoshna/prastav, MLA ka daura-nirikshan, vyaktigat shilanyas nahi.
// [REJECT maujoodgi] CM ka virtual shilanyas Rs 527 crore (GMC/Mangalagiri-Tadepalli/Tenali/Ponnur) — Hans India 2026-09-23; shilanyas CM ne kiya, MLA sirf upasthit; Mangalagiri/Tenali/Ponnur seat-bahar bhi.
// [REJECT maujoodgi] Rs 820 crore ULB infra boost (CM ka shilanyas, Rs 205 cr GMC) — New Indian Express 2026-09-23; MLA ne sirf swagat kiya, koi bhoomika nahi.
// [REJECT nirikshan] GMC Commissioner ke saath Kabadi Gudem/Sangadigunta/Anandapet daura — TOI 2026-08-19; nirikshan + commissioner ke nirdesh, MLA ki maang/nirdesh hi.
// [REJECT maujoodgi] Union Minister Pemmasani ka railway/housing review (30 Aug 2025) — The Hindu; MLA sirf upasthit aur dhanyavad, vyaktigat bhoomika nahi.
// [REJECT maujoodgi] Swachh Andhra / TMC clean-city initiative event — TOI 2025-04-19; MLA ne sirf sarahna ki, koi shilanyas nahi.
// [REJECT ghoshna] NIE pre-election stories (2019 + 2024) me ummeedwar ke wade — chunav-prachar ghoshnaen, karyakaal-karya nahi.
// [REJECT source-unavailable] Guntur GGH me Haemophilia Care Centre ka udghatan (GGH superintendent Dr Kiran Kumar ke saath saha-udghatan, ~1,100 patients) — Deccan Chronicle 2024-09-29; page kholne par 403 (amp + canonical dono), isliye source nahi. Snippet ke anusar strong lead hai — page khulne par retry-lead. URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/new-haemophilia-care-centre-inaugurated-at-guntur-ggh-premises-1826882
// [REJECT source-bahar] Sledgehammer se purani sarkar ke road-project plaques todna (Rajiv Gandhi Nagar) — The Rahnuma Daily 2024-08-06; non-whitelisted outlet, isliye negative nahi. Whitelisted media par mile to retry-lead.
// [REJECT pehchan-galati] Former MLA Shaik Mohammed Mustafa ki kidnapping case me giraftari (Aug 2026) — poorva MLA (2019-24), Mohammed Naseer Ahmed nahi.
// [REJECT pehchan-galati] NCLT Bengaluru dwara ‘Naseer Ahmed’ ko insolvent ghoshit karna (Rs 1,455-crore loan default) — Karnataka Congress MLC, Guntur East MLA nahi.
// [REJECT pehchan-galati] Ghar-hinsa case me MLA ka hastakshep (TOI) — Guntur West MLA Galla Madhavi, Mohammed Naseer Ahmed nahi.
// [REJECT negative-nahi] Halafname ke 8 criminal cases — Jun 2024+ me koi nyayik vikas (FIR/chargesheet/janch/court-order) whitelisted media par nahi mila; halafname ke pending mamle akele negative nahi.
// Retry-leads: (1) Haemophilia Care Centre udghatan — DC page khulne par entry banao (saha-udghatan GGH superintendent ke saath, state support, laagat ghoshit nahi); (2) plaque-vandalism — whitelisted media coverage mile to negative ke liye; (3) Mondigate drainage — post-monsoon completion/lokarpan report aane par.

// ==== Palnadu (Batch 5) ====
// bhashyam-praveen — 0 works + 0 negatives (mined 2026-10-18)
// Pehchan: Bhashyam Praveen, TDP, Pedakurapadu (Palnadu jila; Bellamkonda + Atchampet +
// Krosuru + Amaravathi + Pedakurapadu mandals), 16th AP VS 2024-2029, first-time MLA.
// 2024 me 1,12,957 vote (53.97%), runner-up Namburu Sankara Rao (YSRCP, 91,868) ko
// 21,089 maton se haraya. Pesha: Bhashyam Educational Institutions ke principal (NIE, Apr 2024).
// Halafname: first-time candidate — halafname ke pending mamalon ka Jun 2024+ nyayik vikas
// established media me nahi mila.
// Mining: The Hindu, New Indian Express, Times of India, Deccan Chronicle, Hans India
// par targeted searches (lokarpan/shilanyas, demand/prashn, FIR/case) — koi whitelist-yogya
// personal work entry nahi mili. Profile khali rehne layak hai.
// All entries Roman-script Hinglish per spec.
andhraWorks['bhashyam-praveen'] = [];

// REJECT-LOG (sab ke sab whitelist outlets, lekin rule-bahar):
//
// R1. NIE 14 Jan 2026 ('Capital construction works will be completed soon: Minister Ponguru Narayana',
//    https://www.newindianexpress.com/states/andhra-pradesh/2026/Jan/14/capital-construction-works-will-be-completed-soon-minister-ponguru-narayana)
//    + The Hindu 13 Jan 2026 ('Minister Narayana lays foundation for road works at Karlapudi in Amaravati',
//    https://www.thehindu.com/news/national/andhra-pradesh/minister-narayana-lays-foundation-for-road-works-at-karlapudi-in-amaravati/article70504721.ece):
//    Karlapudi se Ananthavaram tak 2.9 km road ka shilanyas MAUD MANTRI P. Narayana ne kiya,
//    MLA Bhashyam Praveen saath me maujood the. Minister ne MLA ko sirf 'actively persuading' (LPS ke
//    liye kisaano ko manane) ke liye appreciate kiya. REJECT: shilanyas dusre neta (mantri) ka —
//    MLA ki vyaktigat lokarpan/shilanyas NAHI ('dusre neta ke karyakram me maujoodgi = REJECT').
//    Amaravati mandal (Pedakurapadu seat) ke andar hone se rule nahi badalta.
//
// R2. NIE 05 Dec 2025 ('Ryots voluntarily offer land for capital project in Amaravati',
//    https://www.newindianexpress.com/states/andhra-pradesh/2025/Dec/05/ryots-voluntarily-offer-land-for-capital-project-in-amaravati)
//    + The Hindu 04 Dec 2025 ('Construction of Sports City in Amaravati will commence in one year',
//    https://www.thehindu.com/news/national/andhra-pradesh/construction-of-sports-city-in-amaravati-will-commence-in-one-year-says-municipal-administration-minister-narayana/article70357839.ece)
//    + The Hindu (Pedamadduru LPS 2.0 launch,
//    https://www.thehindu.com/news/national/andhra-pradesh/pedamadduru-farmers-give-away-313-acres-within-an-hour-of-launching-lps/article70487246.ece):
//    MAUD Mantri P. Narayana ke Amaravati Land Pooling Scheme 2.0 ke tour/programmes me MLA saath
//    the — sirf maujoodgi, koi vyaktigat kaam nahi. REJECT: sarkari abhiyan (LPS 2.0) ke shubharambh/
//    karyakram me maujoodgi = REJECT. (Pedamadduru/Endrayi sab Amaravati mandal = Pedakurapadu seat.)
//
// R3. NIE 09 Apr 2025 ('Minister orders swift action to restore irrigation systems in Andhra's Pedakurapadu',
//    https://www.newindianexpress.com/states/andhra-pradesh/2025/Apr/09/minister-orders-swift-action-to-restore-irrigation-systems-in-andhras-pedakurapadu):
//    Constituency review meeting me MLA ne officials se village tanks par encroachment rokne,
//    employment guarantee schemes lagoo karne, farm-roads upgrade aur Amaravati tourism promote
//    karne KO KAHA — sab maang/prastav, koi dastaveji nateeja nahi. Mantri ne officials ko
//    direction diya (mantri ka kaam). REJECT: 'sirf maang/prastav' = REJECT.
//
// R4. TOI (CID probe likely into Guntur agri-market licensing irregularities,
//    https://timesofindia.indiatimes.com/city/vijayawada/cid-probe-likely-into-guntur-agri-market-licensing-irregularities/articleshow/131425243.cms):
//    Report ke mutabik Pedakurapadu MLA Bhashyam Praveen ne alleged irregularities Nara Lokesh ke
//    dhyan me layin. MLA YAHAN SHIKAYATKARTA hai — aaropi NAHI, FIR me uska naam nahi. REJECT as
//    negative (rule: MLA KHUD aaropi hona chahiye). Work ke roop me bhi REJECT: complaint raise karna
//    bhautik kaam nahi, aur koi dastaveji nateeja (sanjana/saction) report me nahi.
//
// R5. Pehchan-jaal: TOI (Mar 2023, articleshow/99384571.cms) me 'Pedakurapadu MLA Namburu Sankara Rao'
//    ke Rs 650 crore ke dawe — ye purv YSRCP MLA (2019-24) ke hain, Bhashyam Praveen par NAHI lagane.
//    Note kiya gaya taaki future mining me galti na ho.
//
// R6. Pre-term: The Hindu (10 Aug 2023, Yuva Galam padayatra — Lokesh ne Pedakurapadu ke liye
//    lift-irrigation ka WADA kiya) — karyakaal se pehle ka chunaavi wada, N. Lokesh ka, Praveen ka
//    nahi; na Praveen ka personal shilanyas. REJECT.
//
// Negatives: established media (whitelist) me Bhashyam Praveen KHUD aaropi kisi FIR/chargesheet/
//    janch me, ya Jun 2024+ ke kisi nyayik vikas me, naam nahi aaya. General FIR/case searches
//    (indiankanoon etc. — whitelist-bahar) me bhi koi match nahi; naam-hamnaam (RS Praveen Kumar,
//    BSP; Praveen Kumar cricketer) ko pehchan ke roop me bahar rakha. Halafname ke pending mamalon
//    ka akela hona = negative NAHI (rule). Isliye 0 negatives.
//
// Fund note: CDP allocation official GO/budget-dastavej se unverified — andhra.ts record me
// allocated: null (unchanged).

// prathipati-pulla-rao — 0 works + 0 negatives (researched 2026-10-18)
// Pehchan: Prathipati Pulla Rao, TDP, Chilakaluripet (Palnadu jila; Chilakaluripet + Nadendla + Edlapudu mandals),
// 16th AP VS 2024-2029, purv mantri (Agriculture 2014-17, Civil Supplies 2017-19) — vartaman me keval MLA.
// 2024 me 111,062 vote lekar jeete; runner-up K. Manohar Naidu (YSRCP, 77,800 vote).
// Mining: whitelist outlets (The Hindu, New Indian Express, Deccan Chronicle, The Hans India, TOI, PTI-on-outlet)
// par 9+ targeted searches — koi bhi VALID seat-level vyaktigat kaam (lokarpan/shilanyas, GO-sanction,
// Vidhansabha-nateeja, itemized sanction list) nahi mila. Halafname ke pending mamalon ka
// Jun 2024+ me koi established-media legal development nahi mila — isliye 0 negatives.
// Fund: CDP allocated: null (andhra.ts fund note) — sthayi aavantan pakka nahi.
// All entries Roman-script Hinglish per spec.
andhraWorks['prathipati-pulla-rao'] = [];

// ---- REJECT-LOG (research notes, entry nahi) ----
// R1. The Hans India (3 Sep 2026, post-event report) — 'Call to plant saplings to protect earth':
//     MLC K. Nagababu (AP Green Executive Committee chairman) ke karyakram me MLA ne bas chhatron ke
//     saath paudhe lagaye; Rs 3 crore ka hariyali-aalan Nagababu ka tha, MLA ka nahi.
//     REJECT: dusre neta ke karyakram me maujoodgi + sarkari abhiyan ka shubharambh-ish.
//     https://www.thehansindia.com/news/cities/guntur/call-to-plant-saplings-to-protect-earth-1117195
// R2. The Hindu (18 Jun 2026, pre-event) — CM ke Palnadu daure se pehle MLA ne Collector ke saath
//     helipad/sabha-sthal ki taiyariyon ka nirikshan kiya.
//     REJECT: sirf nirikshan; pre-event source nahi chalti.
//     https://www.thehindu.com/news/national/andhra-pradesh/naidu-to-launch-induction-stove-distribution-for-anganwadis-in-palnadu-on-june-20/article71117902.ece
// R3. The Hindu (20 Jun 2026) — CM ka Lingamguntla natural-farming karyakram; MLA bas 'attended the programme'.
//     REJECT: dusre neta ke karyakram me maujoodgi.
//     https://www.thehindu.com/news/national/andhra-pradesh/natural-farming-antidote-to-excessive-use-of-pesticides-asserts-chief-minister-chandrababu-naidu/article71126255.ece
// R4. Deccan Chronicle (Dec 2025) — Deputy CM Pawan Kalyan ka Chilakaluripet PTM event; MLA upasthit suchi me.
//     REJECT: dusre neta ke karyakram me maujoodgi.
//     https://www.deccanchronicle.com/southern-states/andhra-pradesh/pawan-wants-kerala-type-education-in-ap-involving-parents-1921994
// R5. Deccan Chronicle (Feb 2026) — Zero Hour me MLA ne Vinukonda me Minority Residential School/College ke
//     jald poorn hone ki maang ki (Rs 18 crore PM Vikas, 2018 sanction).
//     REJECT: (a) Vinukonda alag seat hai — Chilakaluripet ke bahar ka kaam entry nahi;
//     (b) sirf maang/prastav, dastaveji nateeja nahi.
//     https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/mlas-raise-during-zero-hour-in-assembly-employment-pds-and-development-issues-1939909
// R6. New Indian Express (10 Feb 2025) — Vidadala Rajini vs Pulla Rao raajnaitik takraar; MLA aaropi nahi,
//     koi kaam-fund tathya nahi. REJECT: kaam bhi nahi, negative bhi nahi.
//     https://www.newindianexpress.com/states/andhra-pradesh/2025/Feb/10/vidadala-prathipati-tussle-leads-to-political-tension-in-palnadu-district
// R7. Good Morning Andhra e-paper (Jul 2026) — MLA ne Nadendla mandal ke Appapuram me VB G RAM G launch kiya.
//     REJECT: sarkari abhiyan ka keval shubharambh + non-whitelist source.
// R8. Negative lead 1 — TOI (5 Mar 2024): GST evasion/bogus-invoice mamle me Pulla Rao + parivar ne anticipatory
//     bail maangi (FIR Machavaram police, APSDRI shikayat; beta Sarath giraftar hua tha).
//     REJECT: (a) mamla pre-term ka hai (Mar 2024, karyakaal 4 Jun 2024 se); (b) vartaman karyakaal me koi
//     Jun 2024+ nyayik vikas established media me nahi mila (19 Jun 2024 Crl.P. 1489/2024 quash-petition ka
//     zikr sirf indiankanoon par hai — non-whitelist, aur koi established-outlet reporting nahi);
//     (c) mamla mool roop me bete ki company se juda parivar-kendrit mamla hai — niyam: parivar ke mamle bahar.
//     https://timesofindia.indiatimes.com/city/vijayawada/former-minister-and-family-seek-anticipatory-bail/articleshow/108313096.cms
// R9. Negative lead 2 — TOI: Amaravati land-scam CID FIR (2020) me Pulla Rao + P. Narayana aaropi.
//     REJECT: pre-term mamla, Jun 2024+ me koi nyayik vikas nahi mila.
//     https://timesofindia.indiatimes.com/city/amaravati/6-firs-against-white-ration-card-holders-in-amaravati-land-scam/articleshow/73993098.cms
// R10. Halafname ke pending mamle (myneta: 2024 me 13 declared cases; detail me 2006-2009 ke 3 cognizance cases
//      IPC 143/341/186/342) — REJECT: halafname ke pending mamle akele negative nahi bante.
// R11. The Hindu (Apr 2019) — 'Prathipati takes early lead here': purane mantri-kaal ke kaam (drinking water
//      Rs 140 crore, PMAY 4500 ghar, Kondaveedu Fort Rs 60 crore) ka chunav-season zikr.
//      REJECT: pre-term + purane mantri-kaal ke kaam.
//      https://www.thehindu.com/news/cities/Vijayawada/prathipati-takes-early-lead-here/article26758147.ece/amp/
// R12. Pehchan-check: K. Manohar Naidu (YSRCP, 2024 runner-up, 77,800 vote) vs Prathipati Pulla Rao (TDP,
//      111,062 vote) alag-alag vyakti — sources me dono ka naam saaf-suthra mila, koi mis-attribution nahi hua.

// Chadalavada Aravinda Babu (Narasaraopet, TDP) — works mining fragment.
// Pehchan: Chadalavada Aravinda Babu, TDP, Narasaraopet Assembly (Palnadu jila),
// 16th AP Vidhan Sabha 2024-2029; runner-up Gopireddy Srinivasa Reddy (YSRCP).
// Seat extent: Rompicherla + Narasaraopet mandals.
// Mined 2026-10-18. Whitelist outlets searched: The Hindu, New Indian Express,
// Deccan Chronicle, The Hans India, Times of India (~12 targeted searches).
// Result: 1 work (Vidhansabha-prastav ka dastaveji nateeja, credit capped) + 0 negatives.
// REJECT-LOG neeche.
// All entries Roman-script Hinglish per spec.
andhraWorks['chadalavada-aravinda-babu'] = [
  {
    title: 'Vidhansabha me sthaniya MLA ke prastav par Kotappakonda-Kothapalem ki 8-km sadak (Rs 3.9 crore, Panchayat Raj fund) bani — Up-Mukhyamantri Pawan Kalyan ne lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2026/Jan/23/deputy-cm-inaugurates-rs-4-crore-kotappakonda-road',
    date: '2026-01-22',
    note: 'New Indian Express (23 Jan 2026) ki post-event report ke mutabik, Up-Mukhyamantri aur Panchayat Raj Mantri Pawan Kalyan ne Kotappakonda-Kothapalem ki nayi bani 8-km-lambi sadak ka lokarpan kiya; lagat Rs 3.9 crore, fund Panchayat Raj vibhag ka bataya gaya hai. Report ke mutabik ye pariyojana sthaniya MLA Chadalavada Aravind Babu ke Vidhansabha session me prastav (representation) ke baad haath me li gayi thi — Sri Trikoteswara Swamy mandir (Kotappakonda) ke darshanarthiyon ke liye behtar sadak-sampark ki maang thi; Pawan Kalyan ne Maha Shivaratri se pehle sadak poori karne ka ashwasan diya tha. Report ke anusar sadak se Shivaratri me lagbhag 1.5 lakh darshanarthiyon ko sahuliyat hogi, Kothapalem ke kisanon aur Gonepudi school ke chhatron ko bhi labh milega. MLA lokarpan ke avsar par maujood the; lakshya-seekar plaque ka anaavaran Up-Mukhyamantri ne kiya. Inferred-date disclosure: report me karyakram ko ‘Thursday’ bataya gaya hai aur prakashan 23 Jan 2026 (Friday, subah 3:18 baje) ka hai, isliye karyakram-tithi 22 Jan 2026 li gayi hai. CREDIT CAPPED: sadak ka lokarpan Up-Mukhyamantri ne kiya; MLA ki bhoomika sirf Assembly-session me prastav tak seemit hai (report me yehi darj) — MLA fund ka zikr report me nahi, ‘ghoshit nahi’.',
    period: '2024-2029',
  },
];

// ==== REJECT-LOG (Chadalavada Aravinda Babu, Narasaraopet) ====
// 1. REJECT (work): ‘Home Minister Assures Justice to Sai Sadhana Chit Victims’ — Deccan Chronicle,
//    21 Feb 2025. MLA ne Sai Sadhana chit-fund piditon ka pratinidhi-mandal Home Minister Vangalapudi
//    Anita ke paas le jaakar gyaapan diya (Rs 200 crore ke dhokhe ka dawa); mantri ne SIT gathan aur
//    nyay ka ashwasan diya. Ye sirf maang/prastav hai — koi bhautik sarkari sanrachna, swikriti ya
//    dastaveji nateeja nahi, isliye work criteria par khari nahi utarti.
// 2. REJECT (work): ‘Shining Stars–2026’ samman samaroh — New Indian Express, 21 Jul 2026. Jila
//    prashasan ka karyakram (224 toppers ko Rs 20,000 prati chhatr) Bhuvanachandra Town Hall,
//    Narasaraopet me; MLA ne adhyakshata ki. Dusre ke karyakram me maujoodgi/adhyakshata — MLA ka
//    apna lokarpan/shilanyas nahi, isliye reject.
// 3. REJECT (negative): Palnadu SP office me sit-in protest — Times of India + Deccan Chronicle,
//    ~Mar 2026. MLA ne legal adviser ki niyukti me deri par ~4 ghante ka dharna diya; baad me
//    IG/party netaon ne samjhaya. Ye prashasnik maang ka virodh hai — MLA ke khilaf koi FIR,
//    chargesheet ya nyayik vikas established media me nahi mila, isliye negative criteria par
//    reject.
// 4. REJECT (negative): ‘Arrest Narasaraopet TDP candidate: YSRC to DGP’ — New Indian Express,
//    26 May 2024. YSRC pratinidhi-mandal ne DGP se counting-day par Chadalavada Aravind Babu ki
//    giraftari ki maang ki (chunav-hinsa ke aarop). Ye sirf shikayat/pratinidhi-mandal hai — FIR ke
//    aaropi column me MLA ka naam nahi mila; shikayat me naam lekin FIR me naam nahi = reject.
//    (May 2024 pre-term bhi hai.)
// 5. REJECT (negative): ‘Two injured as property dispute leads to clash’ — The Hindu, Jul 2023.
//    Aravinda Babu tab TDP in-charge the (pre-term); Jun 2024+ me inke khilaf koi nyayik vikas
//    established media me nahi mila — reject.
// 6. REJECT (misattribution): The Hindu, May 2026 — Narasaraopet MP Lavu Sri Krishna Devarayalu ke
//    rail-pariyojna prastav. MP MPLADS kaam MLA ke khate me nahi — reject.
// 7. REJECT (pre-term/irrelevant): NIE 22 Mar 2024 ‘dissidence brewing’ story, NIE 17 Apr 2024
//    candidate-list, TOI third-list (13 Mar 2024) — chunav-purv stories, seat-kaam nahi.
// 8. Halafnama (myneta 2024, candidate_id=46): declared cases 0. Jun 2024+ me koi nyayik vikas
//    established media me nahi mila — 0 negatives.

// Fragment: kanna-lakshminarayana (Sattenapalle, TDP) — works mining, 2026-10-18
// Pehchan pakki: Kanna Lakshminarayana, TDP, Sattenapalle (Palnadu), Winner 2024 (117,965 votes; runner-up Ambati Rambabu YSRCP 90,129).
// Pehchan-jaal: Ambati Rambabu (purva YSRCP MLA/mantri, inke runner-up) ke mamle Kanna par NAHI — koi bhi entry Rambabu se jodi nahi.
// Mining: whitelist outlets par targeted searches (The Hindu, TOI, New Indian Express, Deccan Chronicle, Hans India).
// Mila: 2 works (dono The Hindu ki 7 Dec 2024 ki post-event report se — Sattenapalle daure me shilanyas),
// 0 negatives. Purane mantri-kaal (1991-94, 2004-14) ke kaam poori tarah bahar rakhe gaye.

andhraWorks['kanna-lakshminarayana'] = [
  {
    title: 'Muppalla gaon (Sattenapalle) me Rs 50 lakh ke naye Primary Health Care Center ke nirman ka shilanyas — Energy Mantri aur MLA ne milkar aadhaarshila rakhi',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/13-crore-plant-to-provide-water-to-schools-hospitals-in-satenapalli-free-of-cost/article68954859.ece',
    date: '2024-12-06',
    note: 'The Hindu ki post-event report ke mutabik, Andhra Pradesh ke Energy Minister Gottipati Ravi Kumar (jo Palnadu jile ke prabhari mantri bhi hain) aur Sattenapalle MLA Kanna Lakshminarayana ne 6 December 2024 (Shukrawar) ko Muppalla gaon (Muppalla mandal, Sattenapalle constituency) me naye Primary Health Care Center ke nirman ka shilanyas kiya; laagat Rs 50 lakh batayi gayi hai. Usi karyakram me MLA ne Narasaraopet-Sattenapalli road par Rs 1.2 crore ke canal bridge ka shilanyas bhi kiya (alag entry). Fund: report me PHC ke fund ka srot nirdisht nahi — ‘ghoshit nahi’. Date: report me karyakram ki tithi ‘December 6 (Friday)’ spasht di gayi hai.',
    period: '2024-2029',
  },
  {
    title: 'Narasaraopet-Sattenapalli road par Rs 1.2 crore ke canal bridge ka shilanyas — Energy Mantri aur MLA ne milkar aadhaarshila rakhi',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/13-crore-plant-to-provide-water-to-schools-hospitals-in-satenapalli-free-of-cost/article68954859.ece',
    date: '2024-12-06',
    note: 'The Hindu ki post-event report ke mutabik, Energy Minister Gottipati Ravi Kumar aur Sattenapalle MLA Kanna Lakshminarayana ne 6 December 2024 (Shukrawar) ko Narasaraopet-Sattenapalli road par banne wale canal bridge ka shilanyas kiya; laagat Rs 1.2 crore batayi gayi hai. Ye shilanyas Muppalla gaon me PHC (Rs 50 lakh, alag entry) ke shilanyas ke saath hi hua. Fund: report me fund ka srot nirdisht nahi — ‘ghoshit nahi’. Date: report me karyakram ki tithi ‘December 6 (Friday)’ spasht di gayi hai.',
    period: '2024-2029',
  },
];

// REJECT-LOG (kanna-lakshminarayana, Sattenapalle):
// 1. Rs 1.3 crore alkaline water plant (Raghuram Nagar, Sattenapalli) — The Hindu 7 Dec 2024 ki report me hi hai;
//    plant Kanna Rangaiah Charitable Trust (niji charitable trust) ne lagaya, MLA ne ‘spearhead’ kiya (mantri ne sarahna ki).
//    → REJECT: daan/rahat + niji kharch ka kaam — sarkari nidhi/GO se nahi juda, isliye entry nahi.
// 2. Phanidam (Sattenapalle) me Rs 40 lakh ke ward secretariat buildings ka lokarpan (Energy Mantri + MLA, Dec 2024)
//    — sirf bioenergytimes.com (whitelist-bahar aggregator, Hans India ka hawala) par mila; mool Hans India page
//    thehansindia.com par targeted search me nahi mila → REJECT: khul na sakne wala/whitelist-bahar srot; srot nahi.
// 3. TOI report ‘Palnadu’s Rs 881 cr NH link to Amaravati’ (NH-167AG, Sattenapalli bypass, Nov 2025) — MLA sirf
//    quote me ‘noted’ bole hain; koi vyaktigat bhoomika nahi; kendriya NHAI pariyojna → REJECT: vyaktigat bhoomika nahi.
// 4. Koundinya Educational Trust scholarships (Rs 20 lakh, 500 students, Jan 2026, TOI) — pre-event announcement;
//    MLA sirf ‘expected dignitary’; trust/CSR samaroh → REJECT: announcement srot nahi + mukhya-atithi samaroh.
// 5. SC hostel chatron se mulaqat (Nov 2024) — sirf themangonews.com (whitelist-bahar) par; sirf daura/assurance
//    (warden par karwai ka ashwasan), koi bhautik kaam nahi → REJECT: srot + sirf daura.
// 6. The Hindu pre-election pieces (May 2024 Godavari-Penna campaign vada; Jun 2023 selfie challenge; Jul 2023 Pattiseema)
//    — karyakaal (Jun 2024) se pehle ke ya chunavi vade → REJECT: pre-term / sirf ghoshna.
// 7. Halafname me 4 criminal cases (The Hindu candidate-bio / News18, 2024) — halafname ke pending mamle akele
//    negative nahi ban sakte; Jun 2024+ me koi nyayik vikas whitelist outlet me nahi mila → 0 negatives.
// 8. Domestic violence case (bahu Srilakshmi Keerti vs Kanna + patni + beta) — parivarik vivaad; ‘Parivar ke mamle
//    bahar’ niyam se excluded; pre-term mamla aur whitelist outlet par Jun 2024+ ka koi nyayik vikas nahi mila
//    → 0 negatives.

// g-v-anjaneyulu — 0 works + 0 negatives (researched 2026-10-18)
// Pehchan: G. V. Anjaneyulu (pura naam Gonuguntla Venkata Siva Sita Rama Anzanneyllu),
// TDP, Vinukonda (Palnadu jila, seat no. 99), 16th AP VS 2024-2029; teesri baar MLA
// (2009, 2014 me jeete; 2019 me YSRCP ke Bolla Brahma Naidu se haare; 2024 me
// 131,438 vote vs Brahma Naidu 101,171 — 30,267 maton se jeete). Pad: Government
// Chief Whip (Assembly). Pehchan-jaal: purv MLA Bolla Brahma Naidu (YSRCP, 2019-24)
// ke karyakram alag rakhe gaye; PSR Anjaneyulu (former APPSC secretary, DG rank
// officer — TOI bail-plea story ka vishay) ye MLA NAHI hain, galat pehchan se bachein.
// Mining: whitelist outlets par multiple targeted searches
// (The Hindu, Indian Express/NIE, Deccan Chronicle, TOI, Hans India, NDTV, India Today) —
// ek bhi post-event, khulne-yogya page seat-level works ke saath NAHI mila. Ek strong
// lead mila (TOI, Aug 2026 Vinukonda water project) lekin page text-fetch par 403 par
// khula hi nahi — niyam anusaar source nahi, isliye retry-lead ke roop me niche darj.
// Fund note: AP CDP/SDF ka neta-war kharch public record me nahi — allocated: null
// (andhra.ts record me pehle se note).
andhraWorks['g-v-anjaneyulu'] = [];

// REJECT-LOG (sab Roman-script Hinglish; koi entry nahi bani):
//
// 1. STRONG RETRY-LEAD (whitelist outlet, lekin page NAHI khula):
//    The Times of India, Vijayawada edition — ‘Andhra Pradesh’s Vinukonda to get
//    Rs 239.91 crore drinking water project’, by Samdani MN (TOI.in), published
//    24 Aug 2026. Report ke mutabik, Energy Minister Gottipati Ravi Kumar,
//    Narasaraopet MP Lavu Sri Krishna Devarayalu aur Vinukonda MLA GV Anjaneyulu ne
//    Vinukonda town ke Rs 239.91 crore drinking water supply network ka foundation
//    stone rakha (karyakram ‘Sunday’ ko — 23 Aug 2026). Yojna Jalabadhra (water
//    assurance) initiative ke tahat; Rs 210.34 crore Urban Infrastructure Development
//    Fund (UIDF) se + Rs 29.57 crore AMRUT 2.0 se; lagbhag 14,000 households ko tap
//    connection. MP ne karyakram me kaha ki MLA GV Anjaneyulu ne is mudde ko priority
//    par uthaya aur Centre se substantial funds lane me kaam kiya. Category Paani,
//    badge news hoti. LEKIN browser.open par page 403 Access Denied par khula hi nahi
//    (upstream reject) — niyam ‘khul na sakne wala page source nahi’ ke tahat entry
//    NAHI bani. Live-browser ya TOI whitelist retry se verify ho to valid entry ban
//    sakti hai. Canonical URL:
//    https://timesofindia.indiatimes.com/city/vijayawada/andhra-pradeshs-vinukonda-to-get-239-91-crore-drinking-water-project/articleshow/133443812.cms
//
// 2. TOI — ‘AP govt sanctions Rs 240 crore for Vinukonda drinking water project’
//    (~Feb 2026, articleshow/128725258): ye sirf sanction/approval ki ghoshna hai
//    (karyakram/lokarpan nahi) — ‘sirf ghoshna’ niyam par REJECT. Upar wali Aug 2026
//    ki story isi project ka post-event reporting hai (khulne par wahi entry hoti).
//
// 3. The Pioneer via pynr.in — ‘TDP MLA slams previous govt over TIDCO housing
//    scheme’ (~Nov 2024, Government Chief Whip GV Anjaneyulu ka Assembly-bhashan):
//    (a) pynr.in whitelist me nahi; (b) ye sirf bhashan + mantri P. Narayana se
//    4,096 TIDCO houses (Vinukonda) poori karne ki maang — ‘sirf maang/prastav’ par
//    REJECT. Koi bhautik lokarpan/shilanyas nahi.
//
// 4. New Indian Express — ‘Clashes break out between TDP and YSRCP supporters in
//    Vinukonda over sand mining allegations’ (27 Jul 2023): report me Anjaneyulu
//    (tab purv MLA) ne Bolla Brahma Naidu par illegal sand mining ka aarop lagaya,
//    uske baad unke khilaf case darj hua. Pre-term mamla (Jul 2023); Jun 2024 ke baad
//    koi nyayik vikas (chargesheet/sunvai) established media me nahi mila —
//    ‘pre-term mamla tabhi jab karyakaal me legal development’ niyam par negative
//    NAHI bana.
//
// 5. TOI — ‘HC reserves order on Anjaneyulu’s bail plea’ (Vijayawada): galat pehchan —
//    ye PSR Anjaneyulu hain (former APPSC secretary, DG rank officer, Group-I
//    evaluation irregularities case me arrested) — Vinukonda MLA G. V. Anjaneyulu
//    NAHI hain. REJECT.
//
// 6. FilmyFocus — ‘Sumathi Sathakam’ teaser launch by AP Chief Whip G.V. Anjaneyulu
//    (Dec 2025): (a) filmyfocus.com whitelist me nahi; (b) film-teaser mukhya-atithi
//    samaroh — ‘mukhya-atithi samaroh’ niyam par REJECT.
//
// 7. myneta.info affidavit (2024): 2024 ke halafname me 18 declared criminal cases
//    dikhe hain (2019 me 1, 2014 me 2), lekin halafname ke pending mamle akele
//    negative nahi bante — Jun 2024+ ka koi nyayik vikas established media me nahi
//    mila, isliye 0 negatives.
//
// 8. Deccan Chronicle — lokesh family get-together story me naam, GCC coffee stall
//    inauguration story me ‘Assembly chief whip G.V. Anjaneyulu’ ke roop me upasthiti,
//    The Hindu road-accident condolence story me bayan, garbage-collection story me
//    upasthiti — sab ‘dusre neta ke karyakram me maujoodgi’ ya ‘sirf bayan’,
//    seat-level physical works nahi — REJECT.
//
// NOTE: Vinukonda mandals: Ipur, Nuzendla, Savalyapuram, Bollapalle. MLA ka apna
// foundation/NGO kaam (Sivasakthi Lila & Anjan Foundation — health camps, scholarships)
// CSR/samajik daan ki shreni me aata hai, MLA fund ka kaam nahi — waise bhi is
// cycle me established whitelist media reporting nahi mili.

// yarapathineni-srinivasa-rao — 0 works + 0 negatives
// Pehchan pakki (andhra.ts): Yarapathineni Srinivasa Rao, TDP, Gurajala (Palnadu jila),
// 16th AP Vidhan Sabha 2024-2029; 2024 me 128,201 vote lekar jeete; runner-up
// Kasu Mahesh Reddy (YSRCP, 98,715) ko 29,486 maton se haraya. Pehle bhi Gurajala MLA
// rahe chuke (1994-99, 2009-14, 2014-19); 2019-24 me seat Kasu Mahesh Reddy ke paas thi.
// Karyakaal: Jun 2024+ (period 2024-2029).
// Mining coverage (2026-10-18): naam ki sabhi English spelling variants par searches —
// Yarapathineni / Yarapatineni / Yerapathaneni / Yarapataneni / Yarapatineni +
// Gurajala/Gurazala + inauguration/foundation stone/development/works +
// whitelist outlets (The Hindu, New Indian Express, Times of India, Hindustan Times,
// Deccan Chronicle, The Hans India). Seat-level bhautik kaam (vyaktigat lokarpan/shilanyas,
// vidhansabha-maang ka dastaveji nateeja, itemized sanction) kuch NAHI mila; zyada tar
// results ya to purva MLA Kasu Mahesh Reddy ke (2019-24 tenure), ya pre-term (2014-19),
// ya sirf siyasi ilzaam/demands. Halafname ke pending mamle akale negative NAHI
// (standing rule) — myneta 2024 me 22 declared cases hain, lekin koi Jun 2024+ nyayik
// vikas established media me nahi mila, isliye 0 negatives.

andhraWorks['yarapathineni-srinivasa-rao'] = [];

// REJECT-LOG (yarapathineni-srinivasa-rao, mined 2026-10-18)
// 1. CBI limestone mining case — MLA CBI FIR me named (TOI, Feb 2021, articleshow/81322751:
//    "followers of then Gurazala TDP MLA Yarapathaneni Srinivas Rao, who was named in the
//    CBI FIR"; FIR 26 Aug 2020 ko 17 accused par, searches Nov 2020). LEKIN poora mamla
//    pre-term hai (alleged mining 2014-18, FIR/searches 2020) aur Jun 2024+ me koi
//    chargesheet/trial/bail-order jaisa nyayik vikas whitelist outlet par NAHI mila —
//    REJECT (pre-term rule: wartaman karyakaal me legal development chahiye).
// 2. TOI 2019 — "TDP leader booked for criminal conspiracy" (articleshow/70516839):
//    Piduguralla court ke order par IPC 420/406/307/166/323/506/120B me FIR (2019, YSRC
//    leader Guravachari ki shikayat par). Pre-term; Jun 2024+ me koi vikas NAHI — REJECT.
// 3. Manda Salman murder (Jan 2026) — The Hindu 22 Jan 2026 ke mutabik Machavaram police
//    ne Motamarri Peturu aur Motamarri Kantha Rao ko accused banaya; FIR ke aaropi column
//    me MLA ka naam NAHI. YSRCP (PTI/HT/Deccan Chronicle reports) ki "action against TDP
//    MLA Yarapathineni" maang sirf political allegation hai. Rule: shikayat me naam lekin
//    FIR ke aaropi column me naam NAHI = NAHI — REJECT.
// 4. NIE 19 Jan 2026 — "Ex-MLA Kasu Reddy dares Yarapathineni for debate on Dalit's murder":
//    purva MLA Kasu Mahesh Reddy ke siyasi ilzaam (murder ki zimmedari, diarrhoea mauton
//    par ex gratia na milna). Koi FIR/chargesheet/janch jisme MLA aaropi ho — NAHI — REJECT.
// 5. The Hindu Nov 2024 — Saraswati Power land probe: Dy CM Pawan Kalyan ne Machavaram
//    (Gurajala seat) me jaanch ka aadesh diya; MLA sirf saath me maujood the — REJECT
//    (dusre neta ke karyakram me maujoodgi).
// 6. NIE Jan 2025 — NH 167 AD upgrade Dachepalli-Macherla via Gurazala (Rs 403.22 crore):
//    sarkari NHAI pariyojna; MLA ki vyaktigat bhoomika srot me disclosed NAHI — REJECT.
// 7. NIE Jun 2025 — Palnadu me tribal education projects ka udghatan: mantriyon ka
//    karyakram, MLA ki bhoomika nahi — REJECT.
// 8. GO (goir.ap.gov.in, 2017-18) — Special Development Fund se Rs 10 crore ki sanction,
//    Nadikudi (Dachepalli mandal, Gurajala seat) me CC roads/drains: MLA ke 2014-19 tenure
//    ki pre-term swikriti; Jun 2024+ me koi event nahi — REJECT.
// 9. The Hindu May 2021 — Gurazala medical college tendering: sanction ka credit us waqt
//    ke MLA Kasu Mahesh Reddy ne liya ("sanctioned during my tenure") — ye MLA nahi —
//    REJECT (galat neta).
// 10. TOI 2020 — Kasu Mahesh Reddy ka 20-gaon model-village plan; TOI 2019 — Dachepalle/
//     Gurazala municipality upgrade (Kasu ki representation): dono Kasu ke 2019-24 tenure
//     ke — REJECT (galat neta).
// 11. TOI 2018 — Dachepalle me Pasupu-Kumkuma karyakram (15,000 mahilayen, kit vitran):
//     pre-term event + vitran-kaam — REJECT.
// 12. The Hindu 2018 / NIE 2018 — illegal mining par YSRC/PIL-karta TVG Krishna Reddy ke
//     ilzaam aur Lokayukta report: 2014-18 ke aarop; usi matter ki CBI FIR (point 1)
//     pre-term reject ho chuki — REJECT.
// RETRY-LEAD: Jun 2024+ me CBI mining case ka chargesheet/trial vikas aaye to point 1
// phir se jaanchna (sarkari dastavej/court record + whitelist media chahiye).

// Andhra Pradesh works-mining fragment: Julakanti Brahmananda Reddy (julakanti-brahmananda-reddy)
// Macherla, Palnadu jila — TDP, 16th AP Vidhan Sabha 2024-2029.
// Record confirm: src/data/andhra.ts line 3051 (party TDP, constituency Macherla,
// 2024 me 122,413 vote, runner-up Pinnelli Ramakrishna Reddy [YSRCP] ko 33,318 maton se haraya).
// Researched 2026-10-18. Sirf Roman-script Hinglish. Currency: Rs.
// Positive entries: 0 | Negatives: 0.
// Mining-note: ye MLA vartaman karyakaal me TDP spokesperson ki bhoomika me zyada dikha;
// whitelisted media (The Hindu, TNIE/newindianexpress.com, Deccan Chronicle, The Hans India,
// Times of India, Hindustan Times, Indian Express, NDTV, India Today, PTI-on-established-outlet)
// me unki khud ki Macherla seat-level bhautik sarkari sanrachnaon par koi vyaktigat
// lokarpan/shilanyas/GO-swikriti/dastaveji Vidhansabha-nateeja Jun 2024+ me nahi mila.
// Khali profile theek hai.
//
// REJECT-LOG (works):
// 1. TNIE 20 May 2025 — "Stone laid for Rs 5.78-crore education infrastructure projects in
//    Andhra Pradesh's Palnadu": Energy Minister Gottipati Ravi Kumar ne Macherla constituency
//    (Karampudi KGBV Rs 2.55 cr, Durgi KGBV Junior College Rs 1.51 cr, AP Model School Durgi
//    girls hostel Rs 1.72 cr) ki shila rakhi; MLA Julakanti Brahmananda Reddy sirf
//    "accompanied by" the the. REJECT (dusre neta ke karyakram me maujoodgi — vyaktigat bhoomika nahi).
//    URL: https://www.newindianexpress.com/states/andhra-pradesh/2025/May/20/stone-laid-for-rs-578-crore-education-infrastructure-projects-in-andhra-pradeshs-palnadu
// 2. The Hindu 22 Apr 2026 — "PM SHRI Kendriya Vidyalaya in Macherla to start classes for
//    2026-27": Union Ministry-se approved kendriya pariyojna; MLA ne sirf kaha ki ye unka
//    "election promise" poora hua. REJECT (kendriya pariyojna bina vyaktigat bhoomika; sirf dawa).
//    URL: https://www.thehindu.com/news/national/andhra-pradesh/pm-shri-kendriya-vidyalaya-in-macherla-to-start-classes-for-2026-27-from-government-boys-high-school-campus/article70891194.ece
// 3. TOI Sep 2025 (naidu-vows-swift-completion-of-varikapudisela-project...) — CM N. Chandrababu
//    Naidu ne Macherla municipality ke liye Rs 50 crore "additional funds" ka ailaan kiya,
//    Karampudi Palanati Veeraradhana Utsavams ko govt festival, Palnadu me chilli board ka vada.
//    REJECT (sirf ghoshna; CM ki ghoshna, MLA ki vyaktigat bhoomika nahi).
//    URL: https://timesofindia.indiatimes.com/city/vijayawada/naidu-vows-swift-completion-of-varikapudisela-project-boosts-palnadu-development/articleshow/124018295.cms
// 4. TDP Central Office press conference, Mangalagiri (~8 Sep 2026, ANI/aggregators par) — Mega DSC
//    par YSRCP par siyasi hamla. REJECT (political commentary — vikas kaam nahi).
// 5. Varikapudisela Lift Irrigation Scheme ke Nov 2023 ke sab karyakram (DC/TOI) — karyakaal se
//    pehle, purva MLA Pinnelli Ramakrishna Reddy ki appeal par CM Jagan ke kaam.
//    REJECT (pre-term + dusre neta ka credit).
// 6. 2024 chunaav-kahin "Chalo Macherla" / poll-violence coverage me MLA ka bayaan (The Hindu,
//    23 May 2024) — chunaavi vivaad, vikas kaam nahi. REJECT.
//
// REJECT-LOG (negatives — established-media + FIR + Jun 2024+ nyayik vikas wala ek hi
// ummeedwar, lekin source-nibandh par qualify nahi hua; QA retry-lead ke liye tathya rakhe gaye):
// A. SC/ST (Atrocity) Act case — Crime No.113/2023, Macherla Rural Police Station (Palnadu):
//    TOI (Dec 2023, whitelist) ki report ke anusaar Kambhampadu ke paas 21 Dec 2023 ki
//    ghatna par Julakanti Brahmananda Reddy ke khilaf SC/ST Atrocity Act ke tahat case darj hua
//    (TOI page kholne par 403 aaya — snippet se verified, poora page nahi khula).
//    AP High Court, Crl.P.No.10005/2023 me Justice Dr. V.R.K. Krupa Sagar ne 13 AUG 2024 ko
//    anticipatory bail (CrPC 438) manzoor ki: "custodial interrogation does not seem necessary.
//    Hence prayer is granted"; court ne kaha ki FIR ke aarop "prima facie do not disclose an
//    offence of caste atrocity"; petitioner (Brahma Reddy @ Brahma Nanda Reddy) ko Rs 10,000
//    ke bond par bail, jaanch me hazri ki shart ke saath.
//    DECISION: entry NAHI banayi — FIR wali TOI report ka page khul nahi saka ("khul na sakne
//    wala page source nahi"), aur 13 Aug 2024 ke HC aadesh ka khula-verified srot
//    indiankanoon.org hai jo whitelist ke bahar hai. Stage-tathya sahi hain (FIR stage, koi
//    chargesheet/conviction reported nahi; vikas MLA ke paksh me), lekin valid whitelist
//    source ke bina qualify nahi hota. Retry-lead: agar The Hindu/TOI/TNIE/DC/Hans India ne
//    13 Aug 2024 ke baad is aadesh ko cover kiya ho to qualifying negative ban sakta hai.
//    HC order URL (whitelist-bahar, QA ke liye): https://indiankanoon.org/doc/56640238/
// B. Pre-term violence cases (2022-23 Macherla clash; TOI Jan 2023: 23 TDP karyakartao ko
//    anticipatory bail, Julakanti Brahmananda Reddy in-charge petitioner): pre-term, koi
//    Jun 2024+ nyayik vikas nahi mila — REJECT (pre-term mamla bina vartaman vikas).
// C. 2001 Veldurthy killing "allegedly at the behest of" (HT, May 2024 — sthaniya vyakti ka
//    aarop) aur The Hindu (Dec 2022) me Sajjala Ramakrishna Reddy ka dawa ("accused in seven
//    murder cases"): siyasi virodhi/aarop bhar, FIR ke aaropi column me naam ki pushti nahi —
//    REJECT ("shikayat/aarop me naam lekin FIR-aaropi nahi = NAHI" + pre-term).
// D. May 2024 poll-period house arrest (Chalo Macherla) — pre-term, preventive; FIR/aaropi nahi.
//    REJECT.
// E. Pinnelli Ramakrishna Reddy ke EVM-damage / Palnadu double-murder case — PURVA MLA ka mamla,
//    is MLA par nahi. Pehchan-alag rakha gaya. REJECT.
//
// Fund: CDP allocated: null (andhra.ts fund note) — sthayi aavantan satyapit nahi; isliye
// kaam ko CDP nidhi se jodna sambhav hi nahi tha (kharach-note: profile me jodne layak koi
// entry nahi mili, fund note 'ghoshit nahi' wala case bhi nahi aaya).
andhraWorks['julakanti-brahmananda-reddy'] = [];



// Andhra Pradesh — Batch 6: Bapatla + Prakasam + SPSR Nellore (19-21/26 jile).
// Mined 2026-10-18. Har MLA ka fragment: ~/workspace/aapkaneta_scratch/ap6_worker_<slug>_works.ts.
// QA-DROP (parent): vegesana-narendra-varma-raju ki GO-534 entry (TDP jila karyalay ke liye sarkari zameen-patta — party-suvidha, vikas-kaam nahi) — fragment me preserved, retry me wapas nahi ayegi.

// ==== Bapatla (Batch 6) ====
andhraWorks['nakka-ananda-babu'] = [];
andhraWorks['anagani-satya-prasad'] = [];
andhraWorks['vegesana-narendra-varma-raju'] = []; // QA-DROP (parent): GO-534 party-office land allotment — sarkari zameen par party karyalay, vikas-kaam nahi; fragment me preserved.
andhraWorks['yeluri-sambasiva-rao'] = [
  {
    title: 'Parchur MLA Yeluri Sambasiva Rao ke prastav par CM ne Parchur me jahaz-nirman udyog ko samarthan diya aur Rs 9.10 crore ki Valaparla double road samet kayi pariyojnaon ki swikriti ki ghoshna ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/andhra-pradesh-chief-minister-chandrababu-naidu-promises-support-to-shipbuilding-industry-in-parchur-constituency/article69400405.ece',
    date: '2025-04-01',
    note: 'The Hindu ke mutabik CM N. Chandrababu Naidu ne Parchur me jahaz-nirman aur jahaz-marammat udyog ki sthapna ke liye rajya sarkar ke poorn samarthan ka elaan kiya; report me likha hai "The proposal, put forth by MLA Yeluri Sambasiva Rao" aur CM ne constituency me vikas pariyojnaein lane ke unke prayason ki sarahna ki. Saath hi kayi anya pariyojnaon ki swikriti ki ghoshna hui: national highway se Valaparla Industrial Park tak Rs 9.10 crore ki double road, Valaparla me paani ka storage tank, Kommuru Canal ke bhoomi-adhigrahan ke liye Rs 5 crore, Nagarjuna Sagar Canal ka aadhunikikaran, NCC karyalay, SC/ST/BC/alpsankhyak samudayik bhawan, crematoriums, aur Inkollu-Martur-Parchur kshetra me Auto Nagar ki anumati. Credit capped: ye saari swikritiyan/ghoshnaen CM aur rajya sarkar ki hain; MLA ki dastaveji bhoomika prastav rakhna aur uski pairvi rahi. Fund-srot: ghoshit nahi. Stage ka sach: swikriti ghoshit hui hai; kaam shuru ya poora hone ki aage ki reporting nahi mili.',
    period: '2024-2029',
    stage: 'swikriti'
  }
];
andhraWorks['gottipati-ravi-kumar'] = [
  {
    title: 'Santamaguluru mandal me Rs 10 lakh ke NTR Park ka udghatan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Apr/22/andhra-minister-gorttipati-launches-several-works-in-addanki-constituency',
    date: '2025-04-21',
    note: 'The New Indian Express ke mutabik MLA ne vyaktigat roop se park ka udghatan kiya. Article 2025-04-22 ko publish hua aur ghatna ko ‘Monday’ batata hai — tithi 2025-04-21 (Monday) inferred hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Santamaguluru mandal me Rs 10 lakh ke water plant ka udghatan kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Apr/22/andhra-minister-gorttipati-launches-several-works-in-addanki-constituency',
    date: '2025-04-21',
    note: 'The New Indian Express ke mutabik MLA ne vyaktigat roop se water plant ka udghatan kiya. Article 2025-04-22 ko publish hua aur ghatna ko ‘Monday’ batata hai — tithi 2025-04-21 (Monday) inferred hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Santamaguluru mandal me Rs 30 lakh ki nayi CC sadakon ka udghatan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Apr/22/andhra-minister-gorttipati-launches-several-works-in-addanki-constituency',
    date: '2025-04-21',
    note: 'The New Indian Express ke mutabik MLA ne ‘newly laid CC roads’ ka udghatan kiya. Article 2025-04-22 ko publish hua aur ghatna ko ‘Monday’ batata hai — tithi 2025-04-21 (Monday) inferred hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Sthaniya sarkari school me Rs 78.17 lakh ki chhah nayi kakshaon ka udghatan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Apr/22/andhra-minister-gorttipati-launches-several-works-in-addanki-constituency',
    date: '2025-04-21',
    note: 'The New Indian Express ke mutabik MLA ne school ki chhah nayi kakshaon ka vyaktigat roop se udghatan kiya. Article 2025-04-22 ko publish hua aur ghatna ko ‘Monday’ batata hai — tithi 2025-04-21 (Monday) inferred hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Addanki me Rs 11 crore ke do naye power substationon ka shilanyas kiya',
    category: 'Bijli',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/May/01/energy-minister-gottipati-lays-stone-for-two-substations-in-andhras-addanki',
    date: '2025-04-30',
    note: 'The New Indian Express ke mutabik MLA ne vyaktigat roop se dono substationon ka shilanyas kiya. Article 2025-05-01 ko publish hua aur ghatna ko ‘Wednesday’ batata hai — tithi 2025-04-30 (Wednesday) inferred hai. Addanki seat me sthit pariyojna ke roop me shamil hai — rajya-stariya urja-faisla nahi. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'shilanyas'
  },
  {
    title: 'Singarakonda me sthayi fire station ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/May/01/energy-minister-gottipati-lays-stone-for-two-substations-in-andhras-addanki',
    date: '2025-04-30',
    note: 'The New Indian Express ke mutabik MLA ne asthayi suvidha ki jagah sthayi fire station ka shilanyas kiya — lambe samay se chali aa rahi jan-mang poori hui. Article 2025-05-01 ko publish hua aur ghatna ko ‘Wednesday’ batata hai — tithi 2025-04-30 (Wednesday) inferred hai. Lagat: ghoshit nahi.',
    period: '2024-2029',
    stage: 'shilanyas'
  },
  {
    title: 'Addanki town me Rs 1.5 crore ke Urban Primary Health Centre ka udghatan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Jun/11/energy-minister-gottipati-inaugurates-urban-primary-health-centre-in-addanki-segment',
    date: '2025-06-10',
    note: 'The New Indian Express ke mutabik MLA ne Bapatla jila collector ke saath vyaktigat roop se UPHC ka udghatan kiya. Article 2025-06-11 ko publish hua aur ghatna ko ‘Tuesday’ batata hai — tithi 2025-06-10 (Tuesday) inferred hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Naam Road se Govada gaon tak Rs 1.2 crore ki tar sadak ka udghatan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Jun/11/energy-minister-gottipati-inaugurates-urban-primary-health-centre-in-addanki-segment',
    date: '2025-06-10',
    note: 'The New Indian Express ke mutabik MLA ne nayi bani tar sadak ka vyaktigat roop se udghatan kiya. Article 2025-06-11 ko publish hua aur ghatna ko ‘Tuesday’ batata hai — tithi 2025-06-10 (Tuesday) inferred hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Kopperapadu se Jammalamadaka tak Rs 6 crore ki BT sadak ka udghatan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/minister-launches-road-works-solar-initiatives-at-addanki/article71090040.ece',
    date: '2026-06-11',
    note: 'The Hindu ke mutabik MLA ne Kopperapadu se Jammalamadaka (Kothuru aur Velamavaripalem hote hue) tak bani BT sadak ka udghatan kiya — chunav-prachar ke dauran ghoshit pariyojna ab puri hokar janata ke liye khul gayi hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Kothuru gaon me Rs 40 lakh ki CC sadakon aur side drainage naharon ka udghatan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/minister-launches-road-works-solar-initiatives-at-addanki/article71090040.ece',
    date: '2026-06-11',
    note: 'The Hindu ke mutabik MLA ne Addanki seat ke daure me Kothuru gaon me bani CC sadakon aur side drainage naharon ka vyaktigat roop se udghatan kiya. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Santamaguluru–Addanki sadak (Rs 4 crore) ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2026/Jan/10/addanki-segment-emerging-as-role-model-for-development-minister-gottipati-ravikumar',
    date: '2026-01-09',
    note: 'The New Indian Express ke mutabik MLA ne R&B mantri B.C. Janardhan Reddy ke saath sanyukt roop se sadak ka shilanyas kiya — ghatna Ballikurava mandal me Addanki seat ke andar hui, isliye sanyukt hone par bhi entry yogya hai. Article 2026-01-10 ko publish hua aur ghatna ko ‘Friday’ batata hai — tithi 2026-01-09 (Friday) inferred hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'shilanyas'
  },
  {
    title: 'ABC nahar par Rs 2 crore ki high-level nahar ka udghatan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2026/Jan/10/addanki-segment-emerging-as-role-model-for-development-minister-gottipati-ravikumar',
    date: '2026-01-09',
    note: 'The New Indian Express ke mutabik dono mantriyon ne sinchai aur jal-prabandhan hetu bani high-level nahar ka udghatan kiya. Article 2026-01-10 ko publish hua aur ghatna ko ‘Friday’ batata hai — tithi 2026-01-09 (Friday) inferred hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Guntupalli me Rs 50 lakh ke Primary Health Centre ka udghatan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2026/Jan/10/addanki-segment-emerging-as-role-model-for-development-minister-gottipati-ravikumar',
    date: '2026-01-09',
    note: 'The New Indian Express ke mutabik Guntupalli me bane PHC ka udghatan hua. Article 2026-01-10 ko publish hua aur ghatna ko ‘Friday’ batata hai — tithi 2026-01-09 (Friday) inferred hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Elchuru me Rs 35.78 crore ke 132/33 kV substation ka shilanyas kiya',
    category: 'Bijli',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/ap-will-not-increase-power-tariffs-says-minister-1995184',
    date: '2026-10-12',
    note: 'Deccan Chronicle ke mutabik MLA ne vyaktigat roop se AP Transco dwara banne wale substation ka shilanyas kiya — Elchuru aur aaspaas ke kshetron me low-voltage samasya door hogi. Addanki seat me sthit pariyojna ke roop me shamil hai — rajya-stariya urja-faisla nahi. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'shilanyas'
  },
  {
    title: 'Addanki me proposed indoor stadium aur shuttle courts ka bhoomi pujan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/ap-will-not-increase-power-tariffs-says-minister-1995184',
    date: '2026-10-12',
    note: 'Deccan Chronicle ke mutabik MLA ne stadium aur shuttle courts ka bhoomi pujan sampann kiya — shilanyas ke samatulya vyaktigat bhoomika. Suvidha abhi ‘proposed’ avastha me hai aur lagat ghoshit nahi.',
    period: '2024-2029',
    stage: 'shilanyas'
  },
  {
    title: 'Addanki town me Rs 30 crore ke cement concrete sadak karyon ka shubharambh kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/ap-will-not-increase-power-tariffs-says-minister-1995184',
    date: '2026-10-12',
    note: 'Deccan Chronicle ke mutabik MLA ne sadak karyon ka ‘launch’ kiya — article karyon ki purnata-avastha ya fund-srot nahi batata, isliye stage shilanyas (karya-prarambh) darj hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'shilanyas'
  },
  {
    title: 'Santamaguluru Primary Health Centre me drinking water plant ka udghatan kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/on-cm-naidus-call-energy-minister-avoids-convoy-1956986',
    date: '2026-05-15',
    note: 'Deccan Chronicle ke mutabik MLA ne sarkari PHC me lage drinking water plant ka vyaktigat roop se udghatan kiya — plant Asian Hospitals ke sahyog se laga hai (CSR/samarthan-yukt sarkari sanrachna). Article 2026-05-15 ko publish hua aur daure ko ‘Friday’ batata hai — tithi 2026-05-15 (Friday) inferred hai. Lagat: ghoshit nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  }
];
andhraWorks['madduluri-malakondaiah'] = [];

// ==== Prakasam (Batch 6) ====
andhraWorks['tatiparthi-chandrasekhar'] = [];
andhraWorks['buchepalli-siva-prasad-reddy'] = [];
andhraWorks['b-n-vijay-kumar'] = [];
andhraWorks['damacharla-janardhana-rao'] = [
  {
    title: 'Ongole me Rs 85 lakh ke central divider ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/May/12/andhras-ongole-mla-lays-foundation-stone-for-rs-1-crore-infra-projects',
    date: '2025-05-11',
    note: 'The New Indian Express ke mutabik MLA ne Ongole South Bypass Road-Summer Storage Tank ke saath Rs 85 lakh ke central divider ka vyaktigat roop se shilanyas kiya. Ye OMC seema ke andar Rs 1 crore ke infra projects me se ek tha. Fund-srot: ghoshit nahi. Date inferred: article 12 May 2025 ko publish hua aur karya Sunday ko hone ki report thi, isliye 11 May 2025 li gayi.',
    period: '2024-2029',
    stage: 'shilanyas'
  },
  {
    title: 'Ongole ke 46th Division me Rs 14 lakh ke CC drain ka lokarpan kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/May/12/andhras-ongole-mla-lays-foundation-stone-for-rs-1-crore-infra-projects',
    date: '2025-05-11',
    note: 'The New Indian Express ke mutabik MLA ne 46th Division me Kurnool Road aur Alluri Sitarama Raju Nagar par Rs 14 lakh ka tayyar CC drain vyaktigat roop se inaugurate kiya. Fund-srot: ghoshit nahi. Date inferred: article 12 May 2025 ko publish hua aur karya Sunday ko hone ki report thi, isliye 11 May 2025 li gayi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Ongole me Rs 4.50 crore ke Smart Street Vending Market ka shilanyas kiya',
    category: 'Rojgar',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/smart-street-vending-market-to-come-up-soon-in-ongole/article70757264.ece',
    date: '2026-03-17',
    note: 'The Hindu ke mutabik MLA ne Ongole ke Mamidipalem me Summer Storage Tank ke paas Smart Street Vending Market project ka vyaktigat roop se shilanyas kiya. Kul nivesh Rs 4.50 crore — Rs 2.90 crore nagar-palika funds se aur Rs 1.60 crore MEPMA funds se; 25 containers me 100+ shops, mahila SHGs aur street vendors ke liye. Fund-srot disclosed hai (municipal + MEPMA). Date inferred: article 18 Mar 2026 ko publish hua aur karya Tuesday evening ko hone ki report thi, isliye 17 Mar 2026 li gayi.',
    period: '2024-2029',
    stage: 'shilanyas'
  },
  {
    title: 'Madanuru (Kothapatnam mandal) me Rs 5 crore ki CC road ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/ongole/rs-242-cr-for-road-works-in-kondapi-minister-1127105',
    date: '2026-09-29',
    note: 'The Hans India ke mutabik Ongole MLA Damacharla Janardhana Rao aur MP Magunta Srinivasulu Reddy ne Madanuru gaon (Kothapatnam mandal, Ongole assembly seat) me Rs 5 crore ki CC road ka sanyukt roop se shilanyas kiya. Ye karya Palle Panduga 3.0 yojna ka hissa tha. MP ke saath shilanyas kiya gaya (disclosed). MLA nidhi se kharch: ghoshit nahi. Date inferred: article 30 Sep 2026 ko publish hua aur karya Tuesday ko hone ki report thi, isliye 29 Sep 2026 li gayi.',
    period: '2024-2029',
    stage: 'shilanyas'
  }
];
andhraWorks['dola-sree-bala-veeranjaneya-swamy'] = [
  {
    title: 'Sivapuram (Tangutur mandal) me NH 16 se Naidupalem tak Rs 1.95 crore ki tar sadak ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/ongole/rs-242-cr-for-road-works-in-kondapi-minister-1127105',
    date: '2026-09-29',
    note: 'The Hans India ke mutabik mantri ne Tangutur mandal ke Sivapuram me NH 16 se Naidupalem via Sivapuram jaane wali Rs 1.95 crore ki tar sadak ki aadhaarshila vyaktigat roop se rakhi. Unhone isi karyakram me bataya ki Kondapi constituency me Palle Panduga 3.0 ke tahat kul 13 connectivity sadken (Rs 24.2 crore) ban rahi hain — Ponnaluru me 7, Marripudi me 3, Tangutur me 2, Singarayakonda me 1. Fund-srot: Palle Panduga 3.0 (rajya sarkari programme); MLA-nidhi ka zikr report me nahi — ghoshit nahi. Tarikh anumaanit: report 30 Sep 2026 (Budhwar, 01:45 IST) ko publish hui aur karyakram "Tuesday" bataya gaya hai; 29 Sep 2026 Tuesday tha.',
    period: '2024-2029',
    stage: 'shilanyas'
  },
  {
    title: 'Ponnaluru me Rs 50 lakh ki cement sadkon aur naaliyon ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/Dec/21/minister-dola-launches-a-slew-of-welfare-development-initiatives-in-prakasam',
    date: '2025-12-20',
    note: 'New Indian Express ki post-event report ke mutabik mantri ne Kondapi Assembly segment ke Ponnaluru mandal headquarters me Rs 50 lakh ki cement sadkon aur naaliyon ka lokarpan vyaktigat roop se kiya; District Collector P Raja Babu aur adhikari maujood the. Fund-srot report me ghoshit nahi. Tarikh anumaanit: report 21 Dec 2025 (Ravivar, 3:06 am) ko update hui aur karyakram "Saturday" bataya gaya hai; 20 Dec 2025 Saturday tha.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Ponnaluru ki SC Colony me Rs 15 lakh ke atirikt kaamon ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2025/Dec/21/minister-dola-launches-a-slew-of-welfare-development-initiatives-in-prakasam',
    date: '2025-12-20',
    note: 'New Indian Express ki post-event report ke mutabik mantri ne Ponnaluru ki SC Colony me anumaanit Rs 15 lakh ke atirikt kaamon ki aadhaarshila vyaktigat roop se rakhi (kaamon ka prakar report me nirdisht nahi). Fund-srot ghoshit nahi. Tarikh anumaanit: report 21 Dec 2025 (Ravivar, 3:06 am) ko update hui aur karyakram "Saturday" bataya gaya hai; 20 Dec 2025 Saturday tha.',
    period: '2024-2029',
    stage: 'shilanyas'
  }
];
andhraWorks['kandula-narayana-reddy'] = [];
andhraWorks['muthumula-ashok-reddy'] = [];
andhraWorks['mukku-ugra-narasimha-reddy'] = [
  {
    title: 'Kanigiri me Tobacco Board ke paas naye sheep market ka udhghatan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/kanigiri-mla-announces-local-sheep-market-and-meat-factory-1855568',
    date: '2025-01-20',
    note: 'Deccan Chronicle ke mutabik MLA ne vyaktigat roop se Kanigiri municipality seema ke andar Tobacco Board ke paas naye sheep market ka udhghatan kiya; pashupalan ke sahayak nideshak sahit adhikari upasthit the. Lekh me maans karkhane (meat factory) ki yojana keval ghoshna ke roop me hai, isliye entry me shamil nahi. Fund-srot: ghoshit nahi. Tithi anumaanit: lekh 21 Jan 2025 ko prakashit hua aur ghatna ko "On Monday" bataya gaya hai, isliye 20 Jan 2025 (Somvaar) mani gayi.',
    period: '2024-2029',
    stage: 'lokarpan'
  }
];

// ==== SPSR Nellore (Batch 6) ====
andhraWorks['inturi-nageswara-rao'] = [];
andhraWorks['dagumati-venkata-krishna-reddy'] = [];
andhraWorks['anam-ramanarayana-reddy'] = [
  {
    title: 'National highway se Vasili gaon tak Rs 49 lakh ki poori hui CC sadak ka udghatan kiya, saath hi kuch kaamon ke shilanyas bhi kiye',
    category: 'Sadak',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/minister-anam-assures-water-to-tail-end-areas-in-atmakur-segment-1926849',
    date: '2025-12-28',
    note: 'Deccan Chronicle ke mutabik MLA ne vyaktigat roop se shilanyas kiye aur national highway se Vasili gaon tak Rs 49 lakh ki poori hui CC sadak ka udghatan kiya. Shilanyas hue kaamon ke naam aur fund-srot report me ghoshit nahi. Date inferred: search index ne 18 Oct 2026 tak article ko lagbhag 294 din purana bataya, matlab publication lagbhag 28 Dec 2025; event usi saptah ka Ravivar tha. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
  },
  {
    title: 'Atmakur TIDCO housing complex me Rs 75 lakh ke Sri Kodandarama Swamy mandir ka udghatan kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/53-crore-development-works-launched-in-atmakur-1989320',
    date: '2026-09-21',
    note: 'Deccan Chronicle ke mutabik mantri Anam ne vyaktigat roop se Atmakur TIDCO housing complex me Rs 75 lakh ke Sri Kodandarama Swamy mandir ka udghatan kiya; mandir rajya sarkar ke Srivani initiative (5,000 mandiron ke lakshya, jisme se 2,000 poore) ke tahat bana. Fund-srot: Srivani initiative (sarkari yojana) — report me ghoshit. Ye mandir-prashasan ka rajya faisla nahi, balki Atmakur seat me vyaktigat udghatan hai, isliye joda gaya. The Hans India ne bhi isi udghatan ko confirm kiya hai.',
    period: '2024-2029',
  },
  {
    title: 'R&B mantri se ki gayi maang ke nateeje me Atmakur se Somasila tak R&B sadak ke punarnirman ke liye Rs 5 crore swikrit hue',
    category: 'Sadak',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/nellore/atmakur-will-get-new-look-by-2027-anam-ramanarayana-reddy-1116261',
    date: '2026-09-01',
    note: 'The Hans India ke mutabik mantri Anam ki R&B mantri BC Janardhan Reddy se maang ke baad Atmakur–Somasila R&B sadak ke punarnirman ke liye Rs 5 crore swikrit hue; report ke samay tender prakriya poori honi thi aur uske baad kaam shuru hona tha. Credit capped: swikriti R&B mantri ne di, kaam report ke samay tak shuru nahi hua tha. Fund-srot: ghoshit nahi.',
    period: '2024-2029',
  },
];
andhraWorks['vemireddy-prashanthi-reddy'] = [
  {
    title: 'Kovur me Mypadu beach ko jodne wali four-lane sadak ke Rs 48 crore vistaar ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/amaravati/mla-lays-foundation-for-four-lane-expansion-works-connecting-mypadu-beach/articleshow/114195430.cms',
    date: '2024-10-13',
    note: 'TOI ke mutabik MLA ne Narasapuram (Indukurpeta mandal) me Bhumi Puja me hissa lekar vyaktigat roop se shilanyas kiya. Fund-srot ghoshit: central road and infrastructure funds se Rs 48 crore. Usi bayan me kahi gayi Rs 64 crore ki aur connectivity yojana sirf ghoshna thi, is entry me nahi jodi gayi.',
    period: '2024-2029',
    stage: 'shilanyas'
  },
  {
    title: 'Kovur Sugar Factory ke karmchariyon ka Rs 22 crore bakaya cabinet se swikrit hua, MLA ne lagatar maang uthayi thi',
    category: 'Karmchari-bakaya',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/cabinet-approves-payment-of-rs-22-cr-arrears-to-kovur-sugar-factory-workers-staff-1990987',
    date: '2026-09-27',
    note: 'DC ke mutabik MLA ne Nellore me press conference me GO ki pratiyan dikhayi (GO number srot me darj nahi). MLA ka kehna: chunav-prachar me vaada kiya tha; sarkar bante hi CM N. Chandrababu Naidu, Nellore MP Vemireddy Prabhakar Reddy aur collector Himanshu Shukla se baar-baar mudda uthaya aur Vidhansabha me bhi maang rakhi. Credit capped: TOI ke mutabik MP pati ne bhi industries minister TG Bharath aur collector se kayi round ki charcha me bhumika nibhayi, isliye poora shrey MLA ka nahi.',
    period: '2024-2029',
    stage: 'swikriti'
  }
];
andhraWorks['ponguru-narayana'] = [
  {
    title: 'Nellore City me Sunday Market ki nayi sadak aur Atmakur bus stand underbridge ke sadak-nirman ka shilanyas kiya',
    category: 'Sadak',
    stage: 'shilanyas',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/minister-assures-to-resolve-major-issues-in-nellore/article70291322.ece',
    date: '2025-11-17',
    note: 'The Hindu ke mutabik MLA ne swayam shilanyas kiya. Atmakur bus stand underbridge ka sadak-nirman Rs 2 crore ki lagat se 44 din me poora hona tha; Sunday Market ki nayi sadak ki lagat khabar me ghoshit nahi. Fund-srot: ghoshit nahi.',
    period: '2024-2029'
  },
  {
    title: 'Nellore City me Atmakur bus stand flyover ki relaying poori hone par uska lokarpan kiya',
    category: 'Sadak',
    stage: 'lokarpan',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/vijayawada/nellore-city-doesnt-need-orr-at-present-minister-narayana/articleshow/126469411.cms',
    date: '2026-01-11',
    note: 'Times of India ke mutabik MLA ne swayam lokarpan kiya. Flyover ka 25 saal se koi marammat-karya nahi hua tha aur relaying 45 din me poori ki gayi. Tithi ka anumaan: TOI me event "Sunday" bataya gaya hai aur The Hindu ne 11 January 2026 ko isi lokarpan ki reporting ki — isliye date 2026-01-11 maani gayi hai. Fund-srot: ghoshit nahi.',
    period: '2024-2029'
  },
  {
    title: 'Nellore City me Rs 46 lakh ki do CC sadkon ka lokarpan kiya',
    category: 'Sadak',
    stage: 'lokarpan',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/nellore/our-aims-is-to-transform-nellore-as-green-city-by-2028-narayana-1126396',
    date: '2026-09-28',
    note: 'The Hans India ke mutabik MLA ne swayam lokarpan kiya: Krishnaveni School street (4th division) me Rs 16 lakh aur YVM Elementary School (7th division) me Rs 30 lakh ki CC sadken. Fund-srot: ghoshit nahi.',
    period: '2024-2029'
  },
  {
    title: 'Nellore City ke Nawabpet me Rs 60 crore ke aadhunik bazaar ka shilanyas kiya',
    category: 'Any',
    stage: 'shilanyas',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/nellore/our-aims-is-to-transform-nellore-as-green-city-by-2028-narayana-1126396',
    date: '2026-09-28',
    note: 'The Hans India ke mutabik MLA ne swayam shilanyas kiya (9th division); phase one ki lagat Rs 13 crore. Fund-srot: ghoshit nahi.',
    period: '2024-2029'
  },
  {
    title: 'Nellore City me Rs 6.09 crore ke CC sadak, central lighting aur beautification karyon ka shilanyas kiya',
    category: 'Sadak',
    stage: 'shilanyas',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2026/Sep/29/all-ongoing-nmc-works-will-be-completed-in-two-months',
    date: '2026-09-29',
    note: 'New Indian Express ke mutabik MLA ne swayam bhoomi puja/shilanyas kiya: Peddamasjid Centre (Ranganayakulapeta) me Rs 39 lakh ki CC sadken; Janardhan Reddy Colony me Rs 1.70 crore ke divider, central lighting aur CC sadken; Venkateswarapuram flyover ke neeche Rs 4 crore ka greenery-beautification; Muthukur Gate Centre me fountain karya (lagat ghoshit nahi). Fund-srot: ghoshit nahi.',
    period: '2024-2029'
  },
  {
    title: 'Nellore City ke Gandhi Girijan Colony me Rs 1.50 crore ke naye park ka lokarpan kiya',
    category: 'Any',
    stage: 'lokarpan',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2026/Sep/29/all-ongoing-nmc-works-will-be-completed-in-two-months',
    date: '2026-09-29',
    note: 'New Indian Express ke mutabik MLA ne swayam lokarpan kiya. Fund-srot: ghoshit nahi.',
    period: '2024-2029'
  },
  {
    title: 'Nellore City ke 10th aur 11th divisions me Rs 2.80 crore ke sachivalayam bhawan, park compound wall aur greenery karyon ka shilanyas kiya',
    category: 'Any',
    stage: 'shilanyas',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/nellore/narayana-launches-development-works-worth-rs-280-crore-1128977',
    date: '2026-10-05',
    note: 'The Hans India ke mutabik MLA ne swayam shilanyas kiya: 11th division ke NTR Nagar me Rs 1 crore ka sachivalayam bhawan aur Rs 30 lakh ki park compound wall; 10th division ke NDR Layout me Rs 70 lakh ka sachivalayam bhawan aur mini bypass road ke saath Rs 80 lakh ka greenery vikas. Khabar me 45th division ka bhi zikr hai lekin wahan ke specific kaam ki rakam nahi di gayi. Fund-srot: ghoshit nahi.',
    period: '2024-2029'
  },
  {
    title: 'Nellore City me NTR Park, Jagadeesh Nagar me AC community hall aur park, aur Muthukuru Gate Centre par water fountain ka lokarpan kiya',
    category: 'Any',
    stage: 'lokarpan',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/50000-crore-sanctioned-for-infrastructure-development-in-andhra-pradesh-narayana/article71584394.ece',
    date: '2026-10-14',
    note: 'The Hindu ke mutabik MLA ne swayam lokarpan kiya: 4th division me NTR Park, Jagadeesh Nagar me AC community hall aur park, Muthukuru Gate Centre par aadhunik water fountain. Community hall garib aur madhyam-vargiya parivaron ko shubh avsaron ke liye Rs 1 ke mamuli kiraye par milega. Usi daure me unhone nau divisions me Rs 4 crore ke vikas-karyon ke shilanyas bhi kiye (khabar me un karyon ka byora nahi). Fund-srot: ghoshit nahi.',
    period: '2024-2029'
  },
  {
    title: 'Amaravati land-pooling mamle me High Court dwara karyavahi radd karne ke aadesh ko Supreme Court ne barkarar rakha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/sc-dismisses-plea-against-ap-hc-order-quashing-case-against-naidu-narayana-1979122',
    date: '2026-08-14',
    note: 'Deccan Chronicle ke mutabik CJI Surya Kant ki adhyakshta wali teen-nyayadhishon ki peeth ne poorv YSRCP MLA Alla Ramakrishna Reddy ki yachika sunne se inkar kar diya; AP High Court ne 15 July ko Naidu aur Narayana ke khilaf karyavahi radd kar di thi. FIR 12 March 2021 ko Prevention of Corruption Act ke tahat Amaravati land-pooling scheme par darj hui thi. CJI ne tippani ki ki aapradhik karyavahi siyasi virodhi ki shikayat par thi aur koi kisan saamne nahi aaya — "Political battles should not be fought in the court." Peeth ne spasht kiya ki HC ke aadesh ka anya mamlon par asar nahi hoga. Stage: raahat — quashing barkarar, karyavahi samapt.',
    period: '2024-2029'
  }
];
andhraWorks['kotamreddy-sridhar-reddy'] = [
  {
    title: 'Hare Krishna Nagar (20 Division) me Rs 19 lakh ki CC road ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/nellore/mla-kotamreddy-sridhar-reddy-lays-foundation-for-cc-road-construction-1120075',
    date: '2026-09-09',
    note: 'The Hans India ke mutabik MLA ne budhwar ko vyaktigat roop se shilanyas kiya (article 10 Sep 2026 ko prakashit — tithi inference se). Fund-srot: ghoshit nahi.',
    period: '2024-2029',
    stage: 'shilanyas'
  },
  {
    title: 'Jannath Hussain Nagar (2nd Division) me Rs 70 lakh ki Shadi Manzil ka shilanyas kiya',
    category: 'Samudayik Bhavan',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/andhra-pradesh-70-lakh-shadi-manzil-work-launched-in-nellore-rural-1989064',
    date: '2026-09-19',
    note: 'Deccan Chronicle ke mutabik MLA ne shanivar ko vyaktigat roop se shilanyas kiya (article 20 Sep 2026 ko prakashit — tithi inference se). Fund-srot: ghoshit nahi; pehli manjil ke liye Rs 80 lakh ki koshish jari.',
    period: '2024-2029',
    stage: 'shilanyas'
  }
];
andhraWorks['somireddy-chandramohan-reddy'] = [
  {
    title: 'Podalakur me APSPDCL ke transformer repair shed ka lokarpan kiya',
    category: 'Bijli',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/three-phase-power-across-sarvepalli-with-95-crore-soon-in-ap-says-somireddy/article70204534.ece/amp/',
    date: '2025-10-26',
    note: 'The Hindu ke mutabik MLA ne 26 Oct 2025 ko Podalakur mandal me APSPDCL ke transformer repair shed ka swayam lokarpan kiya. Shed BOT system par bana hai aur mahine me 100 se zyada transformer repair kar sakta hai; Kaluvoy, Manubolu, Rapur, Saidapuram aur Podalakur mandals ke liye upyogi. Lagat/fund-srot: ghoshit nahi. Usi dauraan RDSS ke tahat Rs 95 crore ki three-phase conversion ka dawa sirf ghoshit tha (do mahine me poori hone ki baat) — ginati me nahi.',
    period: '2024-2029',
    stage: 'lokarpan'
  },
  {
    title: 'Sarvepalli me Rs 3.75 crore ke 35 Village Health Clinics aur Muttukuru me Rs 1.95 crore ke PHC bhavan ki swikriti mili',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/government-sanctions-major-health-upgrades-for-sarvepalli-satya-1919589',
    date: '2025-11-26',
    note: 'Deccan Chronicle ke mutabik swasthya mantri Satya Kumar Yadav ne 26 Nov 2025 ko Manubolu PHC bhavan ke lokarpan ke dauraan ghoshna ki ki 35 Village Health Clinics ke liye Rs 3.75 crore aur Muttukuru me naye PHC bhavan ke liye Rs 1.95 crore swikrit hue (lokarpan mantri ne kiya, MLA ne nahi). Mantri ne in projects ko MLA ke nirantar prayason ka shrey diya — credit capped. Podalakur dialysis centre: 5-bed sarkari swikriti + CSR se 3 aur bed. GO number/tithi: ghoshit nahi.',
    period: '2024-2029',
    stage: 'swikriti'
  },
  {
    title: 'MLA ke anurodh par Sarvepalli me mandir vikas ke liye Rs 14.50 crore swikrit hue',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2026/Oct/13/5000-new-temples-in-all-175-ap-constituencies-minister-anam-reddy',
    date: '2026-10-13',
    note: 'New Indian Express ke mutabik Endowments mantri Anam Ramanarayana Reddy ne 13 Oct 2026 ko Mahammadapuram (Podalakuru mandal) me Sri Venkateswara Swamy mandir ka shilanyas kiya — shilanyas mantri ne kiya, MLA keval upasthit the. Mantri ne usi dauraan kaha ki MLA ke anurodh par Endowments Department ne Sarvepalli me mandir vikas ke liye Rs 14.50 crore swikrit kiye — credit capped. GO number/tithi: ghoshit nahi.',
    period: '2024-2029',
    stage: 'swikriti'
  }
];
andhraWorks['kakarla-suresh'] = [];


// Andhra Pradesh — Batch 7: Kurnool + Nandyal + Ananthapuramu (19-21/26 jile).
// Mined 2026-10-18. Har MLA ka fragment: ~/workspace/aapkaneta_scratch/ap7_worker_<slug>_works.ts.
// QA-notes: (1) budda negative ka sourceLabel "PTI" hai — PTI wire Rediff par carry hua (established national outlet; The Week precedent); worker ne TOI dedicated report cross-check kiya. (2) Alur reservation: hierarchy/foundation GEN kehta hai ("Alur (SC)" brief ka apna claim tha, foundation me "Alur" hi hai) — koi edit nahi. (3) kalava-srinivasulu ka canal-restart cross-seat (Kalyanadurgam seat me restart, Rayadurg+Kalyanadurgam ko fayda) — joint credit capped, note me disclosed.

// ==== Kurnool (Batch 7) ====
// t-g-bharath — 8 works + 0 negatives (researched 2026-10-18)
// Pehchan: T. G. Bharath (media me "T.G. Bharat"/"TG Bharath" spelling bhi), TDP, Kurnool seat (Kurnool jila),
// 16th AP VS 2024-2029; saath hi Andhra Pradesh ke Industries, Commerce aur Food Processing Mantri.
// Pehchan-jaal: pita T. G. Venkatesh (purv Rajya Sabha sadasya/purv mantri) ke mamle Bharath par NAHI;
// Kurnool MP Bastipati Nagaraju ke karyakram bhi Bharath ke kaam me ginaye NAHI.
// Scope: sirf Kurnool seat ke kaam — udyog vibhag ki ghoshnaen (Orvakal Industrial Park Rs 2,700 crore,
// MSME parks, Orvakal-Vijayawada flights, Rs 6.50 lakh crore nivesh dawe) udyog-mantri ke rajya faisle hain,
// REJECT.
// Whitelisted sources: The Hindu (7 post-event reports kholkar padhe), Deccan Chronicle (1).
//
// REJECT-LOG:
// R-1. Thalassemia Centre, TGV Bhavan, Kurnool (The Hindu, 16 May 2026) — Bharath ne Red Cross ko Rs 25 lakh
//   ka cheque apne pita ke janmdin par T.G.V. Group se diya (kul Rs 1 crore daan ka vaada, anumaanit lagat
//   Rs 1.5 crore); kendra niji TGV Bhavan me. REJECT: niji/parivar kharch + daan/rahat kaam —
//   "niji kharch ke kaam" niyam me reject. Report me GGH par "apne funds" se kaam ka zikr bhi niji kharch hai.
// R-2. KMC me Rs 50 crore Knowledge Centre (The Hindu, 26 Dec 2025 + Deccan Chronicle) — videsh me base
//   KMC alumni ka daan (70-cent plot, library/research centre), Bharath ne development committee ki
//   meeting me prastav approve karaya. REJECT: sirf prastav/baithak — shilanyas/udghatan ki post-event
//   reporting nahi ("sirf ghoshna"); fund niji daataon ka.
// R-3. GGH Kurnool me 150-bed Visram Sadan ka bhoomipujan, Rs 14.67 crore (The Hindu, 2026) — fund Power Grid
//   Corporation of India ka CSR. REJECT: CSR samaroh me mukhya-atithi — precedent me "CSR kaam, MLA ka
//   vyaktigat attributed kaam nahi" reject.
// R-4. Jagannathagattu me cricket stadium + sports complex ka shilanyas (The Hindu, Jun 2025) — fund
//   Greenko Group ka CSR. REJECT: CSR samaroh — wahi niyam.
// R-5. GGH me do mineral water plants + anganwadi upgrade (The Hindu, 17 Feb 2025) — Hindustan Coca-Cola
//   Beverages ka CSR, mantri ne keval karyakram me hissa liya. REJECT: CSR samaroh, vyaktigat
//   lokarpan/shilanyas nahi.
// R-6. High Court bench Kurnool me — "proposals sent to Centre" (NIE, 12 Jan 2026), A/B/C camp zameen
//   prastav (The Hindu, 29 Oct 2025), bench ka dawa (The Hindu, 11 Jan 2026). REJECT: sirf prastav/ghoshna,
//   dastaveji nateeja nahi.
// R-7. Delhi me Union Sports Minister Mansukh Mandaviya se mulakat — Kurnool jile me sports support ki
//   maang (DC roundup, Jan 2026). REJECT: sirf maang.
// R-8. KMC mayor chunav me TDP candidate Vijaya Pratyusha ka nomination (scoopfeeds, Oct 2026). REJECT:
//   party karyakram; scoopfeeds whitelist-bahar bhi hai.
// R-9. "85% potholes repaired" rajya-stariya dawa (DC, Feb 2025 report me). REJECT: rajya-stariya ghoshna,
//   Kurnool seat ka itemized kaam nahi.
// R-10. "Bharath Outlines Roadmap For Kurnool's All-Round Development" (DC, Dec 2025) — TDP Kurnool
//   Assembly constituency committees ka shapath-samaroh. REJECT: party karyakram, bhautik kaam nahi.
// R-11. "I give Six Guarantees to people of Kurnool" (NIE, Apr 2024) — chunav se pehle ka interview;
//   health cards/social service purane parivar-karyon ka dawa. REJECT: pre-term chunav vaade + niji
//   samaj-seva dawe.
// R-12. DC "High Court Issues Notices Over Fake e-Stamp Row" (Jan 2026) — report me Bharath ka naam
//   nahi; sambandh nahi mila. REJECT.
// R-13. 120-slice CT scan provision GGH me "recently began" (The Hindu, 5 Jul 2025) — ek vakya ka zikr,
//   uddhatan/shilanyas event ki post-event reporting nahi. REJECT: event nahi.
//
// RETRY-LEADS:
// L-1. DC roundup "2 Injured as KSRTC Bus Overturns Near Tuggali" (article 1920603, ~Dec 2025) — isme
//   18th/8th/45th ward me Rs 1.61 crore ke bhoomipujan (Joharapuram burial ground Rs 18 lakh, Dandegeri
//   CC roads Rs 62 lakh, Venkataramana/Prem Nagar Rs 49 lakh) ki post-event item mil rahi thi; page
//   403 par khula nahi. URL: https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/2-injured-as-ksrtc-bus-overturns-near-tuggali-1920603
//
// NEGATIVES: 0 — halafnama (myneta) ka page Oct 2026 me nahi khula (andhra.ts me BACKGROUND_PENDING);
// whitelisted established media me MLA ke khilaf Jun 2024+ ka koi FIR/chargesheet/janch ya nyayik vikas
// nahi mila. Pita T. G. Venkatesh se jude mamle Bharath par apply nahi hote.
// Fund: reporto me CDP/MLA-nidhi ka zikr nahi — sabhi notes me "ghoshit nahi".
andhraWorks['t-g-bharath'] = [
  {
    title: 'Kurnool Municipal Corporation ke 19 divisions me Rs 12.28 crore ke 31 vikas karyon ka shilanyas — CC roads, drainage lines, public toilets, pavements aur air-quality boards sahit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/works-underway-to-give-kurnool-a-fillip-on-the-lines-of-vizag-says-industries-minister-tg-bharat/article69610970.ece',
    date: '2025-05-23',
    note: 'The Hindu (23 May 2025) ki post-event report ke mutabik, T. G. Bharath ne Kurnool Municipal Corporation ke 19 divisions me kul Rs 12.28 crore ke 31 vikas karyon ka shilanyas kiya; kaam: CC roads, drainage lines, public toilets, pavements aur air-quality boards ka display. Fund disclosed: Rs 3.59 crore general funds, Rs 5.84 crore NCap aur Rs 2.82 crore 15th Finance Commission. Inferred-date disclosure ki zaroorat nahi — report me karyakram "Friday" aur prakashan 23 May 2025 (Friday) hai. Fund: CDP/MLA-nidhi ka zikr nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
  {
    title: 'SAP camp se guzarne wali bypass road ke nirman karyon ka shubharambh — Kurnool-Bellary road par traffic jam kam karne ke liye',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/works-underway-to-give-kurnool-a-fillip-on-the-lines-of-vizag-says-industries-minister-tg-bharat/article69610970.ece',
    date: '2025-05-23',
    note: 'The Hindu (23 May 2025) ki post-event report ke mutabik, Bharath ne SAP camp se guzarne wali bypass road ke nirman karyon ka shubharambh kiya; isse Kurnool-Bellary road par traffic jam kam hone aur Kurnool-Hyderabad road par congestion-free traffic ki ummeed batayi gayi. Lagat report me nirdisht nahi — "ghoshit nahi". Ashok Nagar railway bridge ke neeche waterlogging ke "permanent solution" ka vaada report me sirf vaada hai — is entry ka vishay nahi.',
    period: '2024-2029',
  },
  {
    title: 'Kurnool me naye mini shopping complex ka udghatan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/works-underway-to-give-kurnool-a-fillip-on-the-lines-of-vizag-says-industries-minister-tg-bharat/article69610970.ece',
    date: '2025-05-23',
    note: 'The Hindu (23 May 2025) ki post-event report ke mutabik, Bharath ne Kurnool me naye mini shopping complex ka udghatan kiya. Lagat/fund-source report me nirdisht nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
  {
    title: 'Kurnool city me Rs 28.12 crore ke peya-jal karyon ka shilanyas — Ashok Nagar me Rs 4.62 crore ka SCAD monitoring system aur Weaker Section Colony me Rs 22 crore ka 12 MLD water treatment plant, sump aur pumping station sahit',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/minister-bharath-lays-stone-for-development-works-in-kurnool-city/article69230378.ece',
    date: '2025-02-17',
    note: 'The Hindu (17 Feb 2025) ki post-event report ke mutabik, Bharath ne Kurnool Municipal Corporation limits me Rs 28.12 crore ke vikas karyon ka shilanyas kiya: Ashok Nagar water treatment plant ke liye Rs 4.62 crore ka Supervision Control and Data Acquisition (SCAD) monitoring system, aur Weaker Section Colony me Rs 22 crore ka 12 MLD water treatment plant, sump aur pumping station — IIIT Jagannatha Gattu aur Kallur areas ko drinking water ke liye. CREDIT CAPPED: report khud kahti hai ye Kurnool city ki teenon Assembly Constituencies ki samasya hai; Kallur Panyam seat me hai — isliye credit Kurnool city ke karyon tak seemit. Fund-source report me nirdisht nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
  {
    title: 'Kurnool city ke paanch divisions me Rs 2.42 crore ke drainage canal aur cemetery-facility karyon ka shilanyas',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/concrete-plans-for-city-development-bharath-1861622',
    date: '2025-02-16',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Bharath aur Municipal Commissioner S. Ravindra Babu ne Kurnool city ke paanch divisions me Rs 2.42 crore ke karyon ka shilanyas kiya. Itemized: Kothapet (Ward 50) me Muslim cemetery me facilities Rs 20 lakh; Hazira College se Vasavi College tak drainage canal (Ward 2) Rs 35 lakh; Dabara Colony aur KVR Gardens me canals (Ward 12) Rs 62.40 lakh; Lakshmi Nagar me canal (Ward 24) Rs 75 lakh; Ward 23 ki colonies me canals Rs 50 lakh. Inferred-date disclosure: page se prakashan-tithi nahi mili; report me "sarkar ko aath mahine" (NDA sarkar Jun 2024) + karyakram "Sunday" + search-index age (~Feb 2025) ke aadhar par 16 Feb 2025 (Ravivar) li gayi hai. Fund-source report me nirdisht nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
  {
    title: 'Kurnool Medical College parisar me Viral Research Diagnostic Lab (VRDL) ke nirman ka shilanyas — kendriya fund se Rs 60 lakh',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/foundation-stone-laid-for-viral-research-diagnostic-lab-in-kurnool/article69776441.ece/amp/',
    date: '2025-07-05',
    note: 'The Hindu (5 Jul 2025) ki post-event report ke mutabik, Bharath ne Kurnool Medical College parisar me Viral Research Diagnostic Lab (VRDL) ke nirman ka shilanyas kiya; lab Central funds se ban rahi hai aur Centre Rs 60 lakh kharch kar raha hai. Lab me flu, dengue, malaria, COVID aur anya virus-sambandhi bimariyon ke confirmatory test hospital me hi ho sakenge. Fund: kendriya fund disclosed; CDP/MLA-nidhi ka zikr nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
  {
    title: 'Kurnool city me Rs 4.33 crore ke vikas karyon ka shilanyas — Ameer Hyder Khan Colony me CC roads, Basava Circle par central median, mahilaon ke liye community toilet, Joharapuram me CC road aur divider-painting sahit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/bharath-assures-to-solve-decade-old-problems-of-kurnool-city/article70136026.ece/amp/',
    date: '2025-10-07',
    note: 'The Hindu (7 Oct 2025) ki post-event report ke mutabik, Bharath ne KUDA Chairman Somisetty Venkateswarlu aur KMC Commissioner P. Viswanatha ke saath Kurnool city me Rs 4.33 crore ke vikas karyon ka shilanyas kiya: Ameer Hyder Khan Colony me CC roads, Basava Circle par central median, mahilaon ke liye community toilet, Joharapuram me CC road, road dividers ki painting aadi. CREDIT CAPPED: KMC Commissioner ne Bharath ke saath Panyam aur Kodumur ke MLAs (Gouru Charitha Reddy, Boggula Dastagiri) ke sahyog ka zikr kiya — Kurnool city ke karyon me se kuch hissa adjacent seats me bhi ho sakta hai; credit Bharath ke netritva wale city karyon tak seemit. Fund-source report me nirdisht nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
  {
    title: 'Kurnool Medical College me Rs 66 lakh ki lagat se bane Viral Research Diagnostic Lab ka udghatan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/minister-inaugurates-virus-research-and-diagnostic-lab-in-kurnool/article70861157.ece',
    date: '2026-04-14',
    note: 'The Hindu (14 Apr 2026) ki post-event report ke mutabik, Bharath ne Kurnool Medical College me Rs 66 lakh ki lagat se sthapit Virus Research and Diagnostic Laboratory (VRDL) ka udghatan kiya; isi lab ka shilanyas 5 Jul 2025 ko hua tha (upar wali entry). Report me ultrasound machines aur ventilators CSR fund se lagane ki ghoshna aur Knowledge Centre "pipeline me" bataya gaya hai — ye ghoshnaen is entry ka vishay nahi. Fund: kendriya fund; CDP/MLA-nidhi ka zikr nahi — "ghoshit nahi".',
    period: '2024-2029',
  },
];

// gowru-charitha-reddy — 3 works + 0 negatives (researched 2026-10-18)
// Pehchan: Gowru Charitha Reddy, TDP, Panyam (Nandyal jila; Panyam + Gadivemula + Kallur + Orvakal mandals),
// 16th AP VS 2024-2029. Sources me naam-spelling badalti hai: Gowru / Gouru / Gauru Charitha Reddy.
// PEHCHAN-JAAL: pati Gowru Venkata Reddy (purv MP) ke kisi mamle/kaam ko yahan nahi joda gaya;
// unke 2003 ke purane legal record ka Charitha se sambandh nahi — 0 negatives.
// Fund note: AP CDP allocation officially unverified — andhra.ts me allocated: null; teeno entries me 'ghoshit nahi'.
// Sabhi entries Roman-script Hinglish; currency Rs; single-quote style.
// REJECT-LOG:
//   R1. newindianexpress.com (9 May 2024) — 'I will make Panyam a model segment' interview: pre-election
//       campaign promise/agenda (model constituency, industrial hub, pending irrigation projects) — sirf ghoshna, REJECT.
//   R2. The Hans India (7 Oct 2026) — 27 Ayushman Arogya Mandirs Kurnool jile me virtual inauguration by Health
//       Minister Satya Kumar Yadav; Charitha sirf district event me MP/anya MLAs ke saath maujood thi — Panyam me
//       koi vyaktigat lokarpan nahi; sarkari abhiyan ka shubharambh, REJECT.
//   R3. The Hindu (11 Jun 2025) — Water Resources Minister ka Rs 2,014 crore Kurnool event, Tadakanapalle; Charitha
//       sirf upasthit — mantri ke karyakram me maujoodgi, REJECT.
//   R4. The Hindu (May 2026) — Kurnool GGH me 150-bed Visram Sadan ka groundbreaking mantri T.G. Bharath ne kiya
//       (Rs 14.67 crore, Power Grid CSR); Charitha sirf upasthit — REJECT.
//   R5. imeuswe.in family-tree page — non-outlet AI profile, Jun 2024+ ke vishesh karyon ka zikr nahi, REJECT.
// RETRY-LEADS:
//   * myneta.info 2024 affidavit page (candidate_id=60) — background fields pending; pehle nahi khula tha; halafnama-aankde baad me retry.
//   * Telugu portals (EENADU/Sakshi/Andhra Jyothy) me kai Charitha-event reports milen ge, lekin whitelist-bahar — retry nahi, dropped.
andhraWorks['gowru-charitha-reddy'] = [
  {
    title: 'Panyam MLA ne Orvakal mandal ke Shakunala Thippayapalli gaon me Jalaharathi initiative ke tahat Rs 1 crore ke tank-vikas karyon ka bhumi puja karke shubharambh kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/development-works-worth-1-core-sanctioned-for-water-conservation-mla/article70993638.ece',
    date: '2026-05-18',
    note: 'The Hindu (18 May 2026, Nandyal) ke mutabik, Panyam MLA Gowru Charitha Reddy ne Orvakal mandal ke Shakunala Thippayapalli gaon me Jalaharathi initiative ke tahat tank development works ka bhumi puja kiya; unhone kaha ki tanks ke jirnodhhar, desilting aur jal-bhandaran kshamta badhane ke liye Rs 1 crore ke vikas karyon ki swikriti mili hai; kary MNREGA ke tahat ho rahe hain aur gramin mazdooron ko rojgar mil raha hai. Report me event ko ‘Monday’ bataya gaya hai aur prakashan 18 May 2026 ko hua — 18 May 2026 Somwar tha, isliye event-date 2026-05-18 li gayi hai (inferred-date disclosure). Seat: Orvakal mandal Panyam constituency ka hissa hai. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'MLA ka dawa — Panyam seat ke liye KGBV schools ko Rs 5 crore aur BC-SC hostels ki marammat ko Rs 3 crore ki swikriti; IIT Ambedkar NEET Academy (Chinna Tekur) ko CSR se Rs 10 lakh',
    category: 'School',
    badge: 'dawa',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/minister-bharath-exhorts-students-to-adopt-technology/article69674615.ece',
    date: '2025-06-09',
    note: 'The Hindu (9 Jun 2025, Kurnool) ke mutabik, Kurnool me Shining Stars awards samaroh me Panyam MLA Gowru Charitha Reddy ne kaha: NDA sarkar ne Panyam Assembly Constituency me chaar mandalon ke KGBV schools ko Rs 5 crore aur BC-SC hostels ki marammat ke liye Rs 3 crore swikrit kiye hain; Chinna Tekur ke IIT Ambedkar NEET Academy ke vikas ke liye CSR fund se Rs 10 lakh swikrit hue hain. DAWA: in sankhyaon ka ekmatra aadhaar MLA ka bayan hai — report me swikriti-patra/GO ya swatantra pushti nahi; isliye badge ‘dawa’. Ye entry sirf MLA ke swikriti-dave tak seemit hai; Shining Stars awards mantri ne diye the — award-samaroh karyakram is entry ka vishay nahi. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'Vidhansabha me Panyam MLA ke sawaal par Shiksha Mantri ne Kurnool Cluster University ka bacha karya agle shaikshik varsh me poora karne ka ashwasan diya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/lokesh-vows-to-complete-kurnool-cluster-university-next-academic-year-1938529',
    date: '2026-02-20',
    note: 'Deccan Chronicle (20 Feb 2026) ke mutabik, Vidhansabha me Panyam MLA Gowru Charitha Reddy ke sawaal ke jawab me Shiksha Mantri N. Lokesh ne ashwasan diya ki Kurnool Cluster University ke lambe samay se atke kary agle shaikshik varsh me poore honge. Mantri ne bataya: university ke liye Rs 139 crore swikrit, usme se Rs 55 crore RUSA scheme ke tahat kharch ho chuka; bache karyon ke liye Rs 74.5 crore zaroori hoga. MLA ne sadan me kaha tha: bifurcation ke baad Chandrababu Naidu ne Silver Jubilee College, KVR Women’s College aur Govt Degree Colleges ko milakar Cluster University banayi thi; Jagannathagattu me 50 acre par shilanyas hua; YSRC karyakaal me upeksha hui, vartaman sarkar ne Rs 20 crore ke pending bill clear kiye phir bhi kary dobara shuru nahi hue aur site ‘asamajik gatividhiyon ke liye asurakshit’ ho gayi. CREDIT CAPPED: ye mantri ka sadan me ashwasan hai — MLA ka vyaktigat lokarpan/shilanyas nahi; university Kurnool me hai (Panyam seat me Kurnool Municipal Corporation ke kuch divisions shamil hain). Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
];

// WORKER FRAGMENT: k-e-shyam-kumar (K. E. Shyam Kumar / Kambalapadu Ediga Shyam Kumar / KE Shyam Babu,
// TDP, MLA Pattikonda (Kurnool), 2024-2029)
// Karyakaal: Jun 2024 se. Foundation-record (andhra.ts, line 3795) se confirm: party TDP, seat Pattikonda.
// Whitelist-srot kholkar padhe gaye: The Hindu (2 articles), Hindustan Times (1), The Hans India (2), Deccan Chronicle (2).
// RESULT: 0 works + 0 negatives — whitelist-srot me Jun 2024+ me Pattikonda seat ke vyaktigat
// lokarpan/shilanyas, itemized swikriti, mantri-ashwasan ya GO-backed kaam ka koi post-event report nahi mila,
// aur koi FIR/chargesheet/janch/nyayik vikas bhi nahi mila. Halafnama (myneta 2024) me 0 criminal cases ghoshit hain.
//
// REJECT-LOG (k-e-shyam-kumar):
// 1. The Hindu, 1 Aug 2025 ("Proposal submitted for completion of pending works of Pandikona reservoir, says
//    Kurnool Collector"; khola aur padha): Rs 210 crore ka Pandikona reservoir (Pattikonda mandal, Dudekonda gaon ke
//    paas) poora karne ka prastav Collector P. Ranjith Basha ne diya; MLA K.E. Shyam Babu sirf nirikshan me
//    Collector ke saath maujood the; koi vyaktigat swikriti/bhoomika report me nahi. REJECT: sirf nirikshan/daura.
//    (Handri-Neeva/RDS/Vedavathi ka zikr bhi report me hai — rajya/kendriya pariyojna bina vyaktigat bhoomika.)
// 2. Deccan Chronicle, 2 Jul 2026 ("VB-G RAM G Scheme Rolled Out Across Rayalaseema"; khola aur padha):
//    Kendra/rajya ki rojgar-guarantee yojna ka Rayalaseema rollout; MLA ne Collector aur Kurnool MP ke saath
//    Veldurthi me yojna ka shubharambh/bhoomi puja kiya. Koi vyaktigat lokarpan/shilanyas nahi.
//    REJECT: sarkari abhiyan ka keval shubharambh.
// 3. The Hans India, 7 Oct 2026 ("27 Ayushman Arogya Mandirs launched in Kurnool dist"; khola aur padha):
//    27 Ayushman Arogya Mandiron ka jila-stariya shubharambh (rajya swasthya mantri ne virtual udghatan kiya);
//    MP, doosre MLA aur constituency in-charge ke saath Shyam Babu bhi maujood the aur samuhik roop se
//    foundation plaques unveil hue. Kisi vyaktigat bhoomika wali alag sanrachna ka zikr nahi.
//    REJECT: sarkari abhiyan ka keval shubharambh.
// 4. The Hans India, ~14 Oct 2026 ("TDP targets 34% ticket share in local polls"; snippet/padha):
//    Pattikonda party office me local-body chunav ke liye BC ticket-ranneeti ki baithak, MLA ne adhyakshata ki;
//    sirf vikas-karyon ke vaade, koi kaam/shilanyas nahi. REJECT: party karyakram, sirf ghoshna/vaada.
// 5. Hindustan Times, 15 Aug 2024 ("TDP leader hacked to death in Andhra Pradesh's Hosuru village"; khola aur padha):
//    Hosuru gaon me TDP leader Vakiti Srinivasulu (former sarpanch, MLA ke close follower) ki hatya. MLA isme
//    aaropi NAHI hain — unhone hatya ki ninda ki aur police se giraftari ki maang ki. REJECT as negative:
//    MLA khud aaropi nahi; sirf aarop/maang nahi — koi FIR unke khilaaf nahi.
// 6. Deccan Chronicle, ~2024-25 (archive: "Minister to inspect Seema projects' progress twice a month"):
//    Irrigation Minister Nimmala Ramanaidu ki Handri-Neeva samiksha-meeting me Shyam Babu "among those present"
//    the — mantri ka karyakram, koi vyaktigat lokarpan/shilanyas nahi. REJECT: dusre neta ke karyakram me maujoodgi.
// 7. New Indian Express, 18 Apr 2024 ("Long-pending issues likely to determine fate of contestants in Pattikonda"):
//    chunav se pehle ki mudda-report (polytechnic college, pani, sadak-maang) — pre-term, maang/prastav par based,
//    MLA-term ke andar koi kaam nahi. REJECT: sirf maang/prastav; pre-term background.
// 8. The Hindu, 2019 (archive: "Want to eradicate all traces of factionalism: K.E. Shyam Babu"):
//    2019 chunav se pehle ka interview; 2017 ke Kangati Lakshmi Narayana Reddy murder mamle me ve main accused
//    bataye gaye the, jo ve "false accusation" kehte hain — police ne unke khilaaf charge hata diye (The Hindu
//    2019 election live-blog ke mutabik). Feb 2018 me giraftari hui thi, sab PRE-TERM. Jun 2024+ me is mamle ka
//    koi nyayik vikas whitelist media me nahi mila. REJECT as negative: pre-term mamla bina vartaman vikas ke.
// NEGATIVES: 0 — 2024 ke halafname me 0 criminal cases ghoshit; whitelist media me Jun 2024+ me MLA ke khilaaf
// koi FIR/chargesheet/janch/adalati aadesh-notice ki khabar nahi mili.
//
// RETRY-LEADS (k-e-shyam-kumar):
// - The Hans India Kurnool edition aur Deccan Chronicle Kurnool pages par "Shyam Babu" + Pattikonda ke local
//   shilanyas/udghatan reports (Telugu-portals se nikalti stories kabhi Hans India/DC me bhi hoti hain) — Oct 2026
//   tak koi whitelist post-event report nahi mili; search-dubara 2027 me faydemand ho sakta hai.
// - Pandikona reservoir Rs 210 crore prastav (The Hindu, 1 Aug 2025): swikriti/GO aane par GO-backed swikriti
//   entry ban sakti hai — lekin tab bhi MLA ki vyaktigat bhoomika chahiye, jo abhi report me nahi hai.
// - 2017/2018 murder-mamla (Feb 2018 giraftari): Jun 2024+ me koi nyayik vikas mila to negative entry banegi;
//   abhi koi vikas nahi — whitelist me chuppi hai.
// - myneta.info ka page nahi khula (pehle se darj hai): background me rehne do, works-mining par asar nahi.
//
// FUND: AP CDP ka aadhikarik aavantan pakka nahi — allocated: null (foundation-record me darj).

andhraWorks['k-e-shyam-kumar'] = [];

// boggula-dastagiri — 0 works + 0 negatives (mined 2026-10-18)
// Pehchan: Boggula Dastagiri, Telugu Desam Party, Kodumur (SC), Kurnool jila,
// 16th AP Vidhan Sabha 2024-2029, first-time MLA. Janm 1985; pita Boggula Ramudu;
// L.L.M. 2018, Sri Krishna Devaraya University, Anantapuram; pesha: vakil (advocate).
// 2024 chunav: 101,703 vote; runner-up Audimulapu Sateesh (YSRCP, 80,120) ko 21,583 se haraya.
// Predecessor: Jaradoddi Sudhakar. Halafnama: 0 criminal cases (News18 ADR analysis).
// Fund note: AP CDP allocation officially unverified — allocated: null (foundation record me darj).
// Mining: The Hindu, Deccan Chronicle, Indian Express, Hindustan Times, NDTV, India Today,
// Times of India, The Hans India, PTI-via-established-outlet par ~10 targeted query-rounds
// (inauguration/foundation-stone/shilanyas/lankarpana/assembly-question/funds/FIR angles) —
// whitelist outlets me seat-level physical lokarpan/shilanyas ya dastaveji mantri-ashwasan
// wali post-event reporting NAHI mili. Isliye khali profile — profile khali rehna theek hai.
//
// REJECT-LOG:
// - Deccan Chronicle "98% Of Endowments Promises Fulfilled: Anam"
//   (https://www.deccanchronicle.com/southern-states/andhra-pradesh/98-of-endowments-promises-fulfilled-anam-1923724):
//   REJECT — karyakram Endowments Mantri Anam Ramnarayana Reddy ka tha (Kurnool zone admin office
//   ka lokarpan); Boggula Dastagiri sirf upasthit-list me "Kodumur MLA Boggula Dastagiri" ke roop me
//   maujood the. Dusre neta ke karyakram me maujoodgi = koi vyaktigat bhoomika nahi, niyam ke mutabik reject.
// - Deccan Chronicle "Lokesh Hosts Family Get-Together for Kurnool, Narasaraopet Leaders"
//   (https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/lokesh-hosts-family-get-together-for-kurnool-narasaraopet-leaders-1940179):
//   REJECT — political samajik karyakram; Boggula Dastagiri sirf mehman-list me; koi vikas-karya nahi.
// - The Hindu / New Indian Express / Telugu360 ki "Dastagiri" Vivekananda Reddy murder-case coverage:
//   REJECT (namesake trap) — ye Shaik Dastagiri hai (Pulivendula/Kadapa, CBI approver), Boggula Dastagiri
//   (Kodumur MLA) NAHI. Halafnama me 0 criminal cases darj hain. Isliye 0 negatives.
// - PM Modi Kurnool 16 Oct 2025 Rs 13,430 crore pariyojna-lokarpan (multiple outlets):
//   REJECT — kendriya pariyojna, bina MLA ki vyaktigat bhoomika; Kurnool district-level, Kodumur-seat specific nahi.
// - The Hindu "Works underway to give Kurnool a fillip on the lines of Vizag" (Industries Minister T.G. Bharat):
//   REJECT — Kurnool sheher (TG Bharat ki seat) ke kaam; Kodumur seat ke bahar.
// - Nitin Gadkari NH lokarpan/shilanyas (Aug 2025, PTI via The Week/Business Standard):
//   REJECT — kendriya pariyojna (NH 71 Madanapalle-Pileru, NH 340C Kurnool-Mandlem); bina vyaktigat bhoomika.
// - New Indian Express "CM Chandrababu Naidu sets deadline for infrastructure projects in Andhra's Kurnool"
//   (May 2025): REJECT — CM ka Kurnool daura; Kodumur seat ke liye itemized swikriti ya MLA-bhoomika nahi.
// - goir.ap.gov.in G.O.RT.No. 34 dated 17-01-2018 (Rs 100 lakh SDF swikriti, Kodumur seat):
//   REJECT — pre-term (Jan 2018; karyakaal se pehle), predecessor-yug ki swikriti; MLA Dastagiri se jodne ka koi aadhaar nahi.
// - indiaherald.com Kodumur candidate assets articles (910 days purane): REJECT — pre-election candidate reporting,
//   aggregator-type portal (whitelist-bahar); chunav-khaal se pehle ki halafnama-khabar, vikas-karya nahi.
// - tenders (firsttender.com): Kodumur-Yemmiganur road improvement, SH road AMC, SW girls hostel bathrooms:
//   REJECT — tenders me MLA ki vyaktigat bhoomika ka zikr nahi (R&B/vibhag ki karyavahi); tender notice source nahi.
// - The Hindu "NDA government committed to industrial development of Kurnool district" (Osmania College classrooms, RUSA funds):
//   REJECT — Kurnool sheher + mantri T.G. Bharat ka lokarpan; Kodumur seat ke bahar.
//
// RETRY-LEADS:
// - Telugu chhote portals (Eenadu/Andhra Jyothy/Sakshi web/handles) par Dastagiri ke Kodumur daure ki
//   khabaren sambhav hain, lekin whitelist-bahar hain — kholkar bhi entry nahi ban sakti; skip kiya gaya.
// - goir.ap.gov.in (sarkari GO portal) par "Kodumur" ke post-Jun-2024 sanction-GOs ka sidha search
//   (portal ka apna search UI) abhi tak nahi hua — Oct 2025 SDF release (Rs 1 crore/seat) jaise GOs
//   mil sakte hain; GO-backed swikriti mile to valid entry banegi. Yehi sabse bada retry-lead hai.
// - AP Vidhan Sabha questions-list (assembly.ap.gov.in) par "Kodumur" questions 2024-2026 — MLA ne
//   uthaye hue vishay + mantri-jawab mil sakte hain; abhi open nahi hua.
// - The Hans India Kurnool district page / Hans tag "Kodumur" ka niyamit sweep (2026-10 tak koi
//   seat-level entry search me nahi mili).
andhraWorks['boggula-dastagiri'] = [];

// b-v-jayanageswara-reddy — 0 works + 0 negatives
// Yemmiganur, TDP — pehchan: andhra.ts record (MBBS doctor, late B. V. Mohan Reddy ke
// bete, 2024 me 103,089 vote, Butta Renuka (YSRCP) par 15,837 maton se jeet).
// Researched 2026-10-18. Whitelisted established media me MLA ke vyaktigat
// seat-level vikas karyon (lokarpan/shilanyas/GO-sanction/Vidhansabha-prashn ka
// dastaveji nateeja) ka koi post-event record nahi mila; Jun 2024+ ka stage-accurate
// negative bhi nahi mila.
//
// REJECT-LOG:
// 1. Deccan Chronicle — 'TIDCO Housewarmings Held Amid Festive Cheer in Kurnool
//    and Nandyal' (30 Mar 2026): Emmiganuru me MLA Jaya Nageswarareddy ne joint
//    collector ke saath programme me 'participated' kiya. REJECT — sirf
//    statewide sarkari abhiyan (TIDCO griha-pravesh) me maujoodgi; vyaktigat
//    lokarpan/shilanyas nahi, koi fund/bhoomika disclosure nahi.
// 2. The Pioneer (pynr.in) — 'New Textile Policy soon, says Minister Savitha'
//    (Nov 2024): MLA ke Yemmiganur Textile Park par Vidhansabha prashn ka jawab,
//    mantri ne park revive karne + 5,000 rojgar ka ashwasan diya. REJECT —
//    The Pioneer whitelist me nahi hai; wahi tathya kisi whitelisted outlet par
//    confirm nahi ho sake. (Agar whitelisted source mile to 'Vidhansabha me
//    Yemmiganur Textile Park par prashn — mantri ka revive-ka-ashwasan'
//    credit-capped entry banegi.)
// 3. The Pioneer (pynr.in) — 'Textile Park to come up in Yemmiganur: Minister
//    Savitha': mantri ka site-dura + Rs 3.75 crore infra earmark; MLA ne sirf
//    'lament' kiya. REJECT — whitelist se bahar ka srot; mantri ka daura (MLA ka
//    kaam nahi); Banavasi/MSME textile park ka netritva/shrey mantri ka hai.
// 4. textileinsights.in / in.apparelresources.com / indiantextilejournal.com /
//    ap7am.com / fashionatingworld.com — Banavasi (Yemmiganur mandal) MSME
//    textile park bhumi-puja aur investor-interest reports. REJECT — ye sab
//    trade/industry portals hain, whitelist me nahi; kisi me MLA ke vyaktigat
//    shilanyas/lokarpan ka post-event dawa nahi (netritva mantri S. Savitha aur
//    T. G. Bharath ka bataya gaya hai).
// 5. The Hindu (17 Feb 2026) — 'A.P. MLAs laud peoples budget': Emmiganur MLA
//    B.V. Jaya Nageswara Reddy ne budget ko 'People's Budget' kaha aur vipaksh
//    ki aalochna ki. REJECT — sirf sadan me budget-par-raay; vikas-kary nahi.
// 6. The Hindu (8 Dec 2024) — Kurnool district review meeting: 220 kV sub-station
//    aur bijli ki samasyaon par Industries Minister ke saath Dr. Pardhasaradhi
//    ka zikr; Yemmiganur se bijli-supply ki pareshani ka ullekh. REJECT —
//    namak MLA B. V. Jayanageswara Reddy ka nahi hai; sirf samasya-ucheln hai,
//    koi sanrachna/lokarpan/nateeja nahi.
// 7. Deccan Chronicle — Rs 105.66 crore Kurnool road sanction (Collector Dr. A.
//    Siri): Yemmiganur-Malapalli-Kosigi road (12 km) ke liye Rs 7.40 crore
//    sahit 30 road works swikrit. REJECT — collector ka ghoshna-sanction,
//    koi MLA-vyaktigat shilanyas/lokarpan/bhoomika nahi.
// 8. The Hans India — CM ne virtually Rs 246 crore HAM urban works launch kiye
//    (Kurnool, Gudur, Adoni, Yemmiganur, 23 Sep 2026). REJECT — kendriya CM-level
//    launch; Yemmiganur MLA ka koi vyaktigat lokarpan/bhoomika nahi.
// 9. The Hindu (27 Feb 2015) — 'Textile Park at Banavasi ray of hope for
//    weavers': 2014-19 karyakaal ke MLA B. Jayanageswara Reddy ka quote.
//    REJECT — pre-term (Jun 2024 se pehle ka karyakaal); wahi park abhi tak bana
//    nahi — isliye vartaman karyakaal ka 'work' nahi.
// 10. myneta.info halafnama: 2019 (5 mamle darj; Crime-O-Meter 3) aur 2014
//    (Cr. No. 59/2014 IPC 188 Yemmiganur Town PS; NI Act 138 CC No. 438/2013
//    Hyderabad). REJECT — halafnama ke pending/purane mamle akele negative nahi;
//    Jun 2024+ me in par koi nyayik vikas (adalat ka aadesh/notice/sunvai)
//    established media me report nahi hua.
//
// RETRY-LEADS:
// - pynr.in 'New Textile Policy soon, says Minister Savitha' (Nov 2024) — isi
//   Vidhansabha-prashn ki whitelisted-outlet (The Hindu/NIE/DC/Hans India)
//   coverage mile to credit-capped 'news' entry banegi. URL:
//   https://pynr.in/new-textile-policy-soon-says-minister-savitha/
// - pynr.in 'Textile Park to come up in Yemmiganur: Minister Savitha' — isi
//   daure ki whitelisted coverage retry. URL:
//   https://pynr.in/textile-park-to-come-up-in-yemmiganur-minister-savitha/
// - Kurnool district review-meeting coverage (The Hindu/Hans India) me is MLA ke
//   prashn — ab tak sirf ek Hindu report (Dec 2024) mili jisme unka naam nahi
//   tha; future coverage retry.
andhraWorks['b-v-jayanageswara-reddy'] = [];

// y-balanagi-reddy — 0 works + 0 negatives (researched 2026-10-18)
// Pehchan: Y. Balanagi Reddy, YSRCP, Mantralayam (Kurnool jila; Peda Kadubur + Mantralayam +
// Kosigi + Kowthalam mandals), 16th AP VS 2024-2029, four-time MLA. Halafname me 1 purana mamla.
// Vipakshi MLA — mining whitelist outlets par ki gayi; koi bhi post-Jun-2024 seat-level vyaktigat
// lokarpan/shilanyas ya dastaveji vidhansabha-nateeja whitelist-srot par nahi mila.
// Dono entries Roman-script Hinglish per spec. Fund: AP CDP allocation officially unverified —
// allocated: null in andhra.ts record; koi entry nahi isliye koi fund-jodna bhi nahi.

// REJECT-LOG (har reject ka karan):
// 1. The Hindu (11 Jul 2023, URL: https://www.thehindu.com/news/national/andhra-pradesh/empowering-girl-students-in-rural-areas-is-our-top-priority-says-ap-mla/article67068171.ece)
//    — "Mantralayam MLA Y. Balanagi Reddy inaugurates an RO water plant at A.P. Model School in Kosigi"
//    — REJECT: (a) pre-term (Jul 2023, karyakaal Jun 2024 se); (b) facility Coromandel International ki
//    CSR activity (Rs 12 lakh) thi — CSR samaroh niyam se bahar; MLA ki vyaktigat sanrachna nahi.
// 2. Deccan Chronicle (Aug 2023, 108-foot Sri Rama statue Mantralayam, URL: https://www.deccanchronicle.com/nation/in-other-news/230723/108-foot-tall-sri-rama-statue-to-be-installed-in-mantralayam.html)
//    — "Seer of the Mutt ... Mantralayam legislator Y Balanagi Reddy ... were also present" (shilanyas
//    virtual Amit Shah ne kiya) — REJECT: (a) pre-term; (b) sirf maujoodgi, dusre neta ke karyakram me
//    maujoodgi reject-niyam me aata hai; (c) niji sansthan (Jai Shri Ram Foundation) ka niji kaam.
// 3. Deccan Chronicle Kurnool roundup (https://www.deccanchronicle.com/southern-states/andhra-pradesh/high-court-to-hear-iuml-plea-on-cow-as-state-animal-today-1919619)
//    — "Ready to quit to achieve district status for Adoni: MLA — Mantralayam MLA and YSRC leader
//    Y. Balanagi Reddy declared that he was ready to resign ... if it helps achieve district status
//    for Adoni" — REJECT: (a) sirf maang/daura (protest camp visit + resignation-offer) — nirikshan/daura
//    aur maang dono reject-niyam me; (b) Adoni seat ke bahar ka vishay (Adoni alag assembly constituency
//    hai) — seat ke bahar ka kaam reject.
// 4. New Indian Express (28 Nov 2022, URL: https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2022/Nov/28/tdp-hopes-for-fortune-revival-ysrc-confident-of-clean-sweep-2522863.html)
//    — "Mantralayam MLA Y Balanagi Reddy ... aspired Cabinet berth" — REJECT: pre-term + party-aantrik
//    mantri-pada aakanksha; party karyawahi/vishay akele negative/kaam nahi.
// 5. teluguone.com ("Telangana, Rayalaseema Farmers Clash Over RDS Water") — "Mantralayam MLA Balanagi
//    Reddy also reached the spot with his supporters to thwart the Alampur ryots' bid to divert the water"
//    — REJECT: (a) whitelist-bahar (teluguone aggregator-jook, whitelist me nahi); (b) virodh/vivaad me
//    maujoodgi — na bhutik sanrachna ka lokarpan, na dastaveji nateeja.
// 6. teluguone.com ("Speaker may Disqualify 3 TD MLAs") — REJECT: whitelist-bahar + purana Telangana-era
//    Telangana-MLA prasang (prasang me "TD Y Balanagi Reddy" alag karyakaal/rajya), is profile se asambandhit.
// 7. myneta.info halafnama pages (2024/2019/2014) — 1 declared case (C.C No.112/2006, Cr.No.21/2005,
//    P.S. Mantralayam, IPC 147/148/332 — aur 2014 record me IPC 186/188/341, RP Act 127/134) — REJECT as
//    negative: halafname ke pending mamle akele negative NAHI (niyam), aur Jun 2024+ me is mamle ka koi
//    nyayik vikas established media me nahi mila.
// 8. YouTube shorts / oneindia / news18 election-result pages / truepointnews e-papers / ibcworldnews —
//    REJECT: (a) YouTube = REJECT; (b) election-result pages me koi seat-level kaam nahi; (c) e-papers me
//    Mantralayam/Balanagi par koi personal-kaam mention nahi (kosigi/roads/boards ki khabren unse asambandhit).
// 9. PIB-syndicated "PM Modi Kurnool Rs 13,430 crore" pages (ibgnews/hindudayashankar) — REJECT: kendriya
//    pariyojna, MLA ki vyaktigat bhoomika nahi.

// RETRY-LEADS (khul na sake / phir check karne layak srot):
// - Deccan Chronicle Kurnool-dated roundup pages (jaise upar ka IUML-plea roundup) kabhi-kabhi site search
//   se khulte hain; is worker ne unka text search-snippet se padha. Deccan Chronicle site par
//   "Balanagi Reddy" site-search ek baar browser se chalakar verify karna baki hai (retry: DC site search).
// - The Hindu / The Hans India ke Kurnool district pages par "Mantralayam" keyword se periodic re-check
//   (vipakshi MLA hone se seat-level sarkari lokarpan apekshit kam hai, par shikayat/maang ki khabren
//   aa sakti hain — wo bhi reject-niyam me aayengi).
// - myneta 2024 halafname ka case-status (C.C 112/2006, JFCM Yemmiganur) — Jun 2024+ me koi aadesh aaye to
//   negative ban sakta hai; court-record search retry.

andhraWorks['y-balanagi-reddy'] = [];

// Andhra Pradesh foundation batch 7 (ap7) — p-v-parthasarathi
// Mined 2026-10-18. Pehchan: P. V. Parthasarathi (Dr P.V. Parthasarathi), BJP, Adoni (Kurnool jila),
// 16th AP Vidhan Sabha 2024-2029, first-time MLA, dentist by profession. Election: 2024 me 89,929
// vote, Y. Sai Prasad Reddy (YSRCP, 71,765) ko 18,164 maton se haraya.
// Fund note: AP CDP allocation officially unverified — allocated: null (andhra.ts record).

// REJECT-LOG (sab Roman-script Hinglish; negative rules sakht palan):
// 1. PTI wire via The Week, 20 Jun 2025 — "BJP MLA faces charges of insulting Dalit panchayat
//    president": Dhanapuram (Adoni mandal) me Jal Jeevan Mission event par Dalit panchayat president
//    Chandrashekhar ke apmaan ka aarop; president ne POLICE COMPLAINT file ki. FIR/chargesheet/janch
//    ya koi nyayik vikas established media me darj NAHI — complaint, FIR nahi. Niyam: "Shikayat me
//    naam lekin FIR ke aaropi column me naam NAHI = negative NAHI; sirf aarop = NAHI." Isliye
//    NEGATIVE NAHI. URL: https://www.theweek.in/wire-updates/national/2025/06/20/mes10-ap-bjp-mla-discrimination.amp.html
// 2. The Hindu, Feb 2025 — "YSRCP leaders cheated farmers who gave up land for housing scheme, says
//    Adoni MLA": MLA ne District Collector ko representation dekar Jagananna Housing Scheme (Mandigiri
//    GP, Adoni mandal) me land-procurement dhokhadhadi ki full-scale legal inquiry, fund-recovery aur
//    prosecution ki maang ki. Sirf maang — koi dastaveji nateeja/mantri-ashwasan report me nahi.
//    Niyam: sirf maang/prastav = REJECT.
// 3. Deccan Chronicle, 1 Feb 2025 — "Adoni MLA Seeks ST Status for Valmikis": MLA ne Delhi me ST
//    Commission member se Valmikis ko ST list me shamil karne ki request ki; member ne sirf
//    "check karke steps lenge" ka ashwasan diya. Sirf maang — swikriti/parateeti ka nateeja nahi.
//    Niyam: sirf maang/prastav = REJECT.
// 4. Times of India, Aug/Sep 2024 — "Fissures between BJP and TDP out in the open at Adoni": NDA
//    alliance ke antar-party vivaad + Adoni summer storage tank fund-aavantan par daavo ka vivaad
//    (MLA ne sadan me Rs 80 crore, council meeting me Rs 37 crore kaha). Party-friction + ghoshna-daava;
//    koi bhautik kaam, lokarpan ya dastaveji nateeja nahi. Niyam: sirf ghoshna/daava = REJECT.
// 5. The Hans India, 23 Sep 2026 — "CM Chandrababu Naidu launches Rs 246 cr works in Kurnool":
//    CM ne HAM model par Adoni samet Kurnool ke liye Rs 246 crore ke urban works launch kiye. Report
//    me Parthasarathi ki maujoodgi/bhoomika ka zikr nahi. Niyam: bina vyaktigat bhoomika ka
//    kendriya/rajya project = REJECT.
// 6. The Hindu, 23 Aug 2025 — AP govt ne inclusive education ke liye State Advisory Group banaya
//    (G.O. me Adoni MLA P.V. Parthasarathi samet 5 neta): ye ek samiti me NAAMZAD niyukti hai —
//    koi bhautik kaam, lokarpan, ya Vidhansabha-prashn ka nateeja nahi. Niyam: VALID suchi ke bahar
//    (pad/niyukti kaam nahi) = REJECT.
// 7. The Hindu, Mar 2026 — "Inclusive education panel members visit autism support centre": Advisory
//    group member ke roop me Chinakakani (Guntur) autism centre ka nirikshan-daura. Niyam: sirf
//    nirikshan/daura = REJECT.
// 8. The Hindu, 14 Oct 2025 — Srisailam temple board oath ceremony: "in the presence of ... Adoni
//    MLA Dr P.V. Parthasarathi". Sirf maujoodgi. Niyam: dusre ke karyakram me maujoodgi = REJECT.
// 9. The Hindu, 4 Sep 2025 — Sri Rambotla temple Ganesh laddu auction: MLA ne boli lagayi
//    (Nandyal MP ne Rs 6.01 lakh me jeeta). Niji dharmik bid — kaam nahi. REJECT.
// 10. The Hindu, 12 Aug 2025 — Kesav Smriti Mandali bhumi puja (RSS, Kurnool): MLA ki maujoodgi.
//     Sirf maujoodgi. Niyam: dusre neta/samuh ke karyakram me maujoodgi = REJECT.
// 11. Business Standard PTI wire, Jul 2012 — "AP minister refuses to quit... Parthasarathy" (KPR
//     Tele Products FERA case): ye CONGRESS-era mantri ka pre-2014 mamla hai — P.V. Parthasarathi
//     (Adoni BJP MLA, 2024+) se sambandh NAHI. Pehchan-bhram avoid; REJECT.
// RETRY-LEADS (khul na sake ya follow-up baki):
// - Dhanapuram Dalit-sarpanch mamle me FIR darj hui ya nahi — Oct 2026 tak established media me
//   koi follow-up nahi; PTI report me sirf "police complaint" darj. FIR/chargesheet mile to retry.
// - Valmiki ST-status maang (Deccan Chronicle, 1 Feb 2025) ka parinam — kabhi actual ST inclusion
//   hua to wo nayi report nayi entry de sakti hai.
// - Mana Mitra 2.0 ka 90-day action plan (The Hindu, 27 Feb 2026) — launch/amli-jama hua ya nahi,
//   follow-up report par retry.

// WORKS: 1 work + 0 negatives (2026-10-18). Entry #1: Vidhansabha-saawal par mantri ka dastaveji
// ashwasan (credit capped) — The Hindu ki post-event reporting se kholkar verified.
andhraWorks['p-v-parthasarathi'] = [
  {
    title: 'Vidhansabha me Adoni MLA ke Mana Mitra app ki gati aur baar-baar data-entry ke sawaal par HRD Mantri ne 90 din me Mana Mitra 2.0 launch ka action plan ghoshit kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/aim-is-to-see-andhra-university-among-top-10-institutions-nationally-says-hrd-minister-lokesh/article70684074.ece',
    date: '2026-02-27',
    note: 'The Hindu (27 Feb 2026, report-date; sawaal sadan-charcha me utha) ke mutabik, Assembly discussion me Adoni MLA Parthasarathi ne Mana Mitra citizen-services app ki gati (speed) aur baar-baar data-entry ki samasya uthayi. HRD Minister Nara Lokesh ne jawab me spasht kiya ki platform user-data store nahi karta (WhatsApp sirf service highway hai, data vibhagon ke paas rehta hai) aur sirf digitisation se aage process re-engineering ki zarurat mani. Mantri ne 90-din ka action plan ghoshit kiya: Mana Mitra 2.0 launch — gati sudhar, turant receipts, QR code samasyaon ka samadhan, aur ek phone number se saari sevaon tak seamless pahunch; saath me jan-pratinidhiyon se feedback aur gaon-gaon door-to-door jagrukta abhiyan ki appeal. CREDIT CAPPED: ye sadan me mantri ka ashwasan hai — MLA ka vyaktigat lokarpan/shilanyas nahi; Mana Mitra 2.0 ke actual launch ka parinam report me darj nahi, credit isi sawaal-jawab tak seemit. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
];

// b-virupakshi — 0 works + 2 negatives (researched 2026-10-18)
// Pehchan: andhra.ts record — B. Virupakshi, Yuvajana Sramika Rythu Congress Party (YSRCP),
// Alur (SC), Kurnool, 16th AP VS 2024-2029. (media me aksar "Busine Virupakshi" bhi likha jata hai)
// POSITIVES: 0 — whitelisted established media (The Hindu/IE/HT/NDTV/India Today/TOI/DC/Hans/PTI)
// me Jun 2024+ karyakaal ka MLA ka koi vyaktigat lokarpan/shilanyas, GO-sanction,
// vidhansabha-sawaal-nateeja ya itemized vikas-kaam ka post-event record nahi mila.
// Fund: CDP allocated: null (andhra.ts fund note) — sthayi aavantan pakka nahi.
// NEGATIVES: 2 — Chippagiri (Alur seat) me TDP-YSRCP karyakarta-takrav ke mamle me
// giraftari (NIE, 3 Aug 2026) aur Andhra Pradesh High Court se jamanat + 69 din jail ke baad
// rihai (Deccan Chronicle, 10 Oct 2026). Dono me MLA ka jawab disclosed. Trial-astithi
// report me nahi — aarop siddh nahi, maamla pending.
//
// REJECT-LOG:
// - ysrcongress.com (2 Aug 2026, "Midnight arrest exposes Red Book Rule") — party ki
//   khud ki site; whitelisted established media nahi; ekmatra aadhaar party ka dawa.
// - ysrcongress.com (28 Jun 2026, Amaravati attack) — sirf MLA ka political quote
//   (viipaksh ki awaz dabane ka dawa); koi seat-level vikas-kaam nahi — kaam nahi.
// - news.webindia123.com / andhrapradeshmirror.com (4 Aug 2026, YSRCP conspiracy
//   allegation) — party ka dawa, established media nahi; ekmatra aadhaar YSRCP ka bayaan.
// - thenewsminute.com (3 Aug 2026) — charges ka vivran (SC/ST Act + attempt-to-murder)
//   sirf isi par; TNM whitelist me nahi, isliye charges ka field "report me dhaaraon ka
//   zikr nahi" rakha gaya; note me khola nahi gaya.
// - thehindu.com (8 Dec 2024, Kurnool water schemes) — Adoni MLA Dr. N. Pardhasaradhi
//   ka kaam hai, Alur ka nahi — pehchan galat, reject.
// - Oneindia election-results page — sirf 2024 result data (jeet ka tathya, kaam nahi).
// - myneta.info affidavit — sirf halafnama-aankde; "1 criminal case" halafnama-pending
//   akele negative nahi (Jun 2024+ nyayik vikas nahi) — negative nahi banaya.
// - Wikipedia (Alur constituency / Busine Virupakshi) — kaam ka record nahi.
//
// RETRY-LEADS (khul na sake ya whitelist-bahar):
// - thenewsminute.com/andhra-pradesh/andhra-mla-virupakshi-arrested-at-midnight-after-clashes-between-tdp-ysrcp-cadres —
//   giraftari ke charges (SC/ST Atrocities Act, attempt-to-murder) ka vivran; TNM whitelist
//   me nahi hai isliye charges entry me nahi liye gaye; whitelist-policy badle to retry.
andhraWorks['b-virupakshi'] = [
  {
    title: 'Alur seat ke Chippagiri-Nemakal-Sangala gaonon me TDP-YSRCP takrav ke baad TDP netaon ki shikayat par Alur MLA Busine Virupakshi aur unke bhai ki giraftari',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/andhra-pradesh/2026/Aug/03/alur-ysrcp-mla-held-after-political-violence',
    date: '2026-08-02',
    note: 'The New Indian Express (3 Aug 2026) ke mutabik, Alur (Kurnool) ke Nemakal, Sangala aur Chippagiri gaonon me shanivar raat TDP-YSRCP karyakartaon ke beech hinsak jhadap hui (telephonic argument se shuru hokar latthi-patthar, dono pakshon ko chot, sampatti ka nuksan). TDP Alur prabhari Vaikuntam Jyothi ne YSRCP karyakartaon par TDP mandal convener Purushotham ke nivas aur car par hamla karne ka aarop lagaya aur MLA Virupakshi aur unke bhai par hamle ka netritva karne ka aarop lagaya. TDP netaon ki shikayaton ke aadhaar par Alur police ne cases darj kiye aur Ravivar ke subah ke shuruati ghanton me MLA aur unke bhai Sriramulu ko unke Chippagiri nivas se giraftar kiya (YSRCP netaon ke mutabik police lagbhag 2:45 baje darwaza todkar ghusi aur CCTV hard disks bhi zabt ki). Report me aaropon ki sateek dhaaraon ka zikr nahi hai. JAWAB DISCLOSED: YSRCP netaon (Kurnool zila adhyaksh S.V. Mohan Reddy, MLC A. Madhusudhan, Mayor B.Y. Ramaiah, Nandyal zila adhyaksh Katasani Rambhupal Reddy aur Legal Cell adhyaksh Mallasani Manohar Reddy) ne giraftari ko “illegal midnight operation” batate hue kaha ki MLA sirf YSRCP neta Giri ke parivar ko dilasa dene Sangala gaon gaye the; wapas aate samay TDP karyakartaon ne pathraav karke unke bhai Sriramulu ko ghayal kiya; police ne dono pakshon ki shikayaton par janch jari hone ki baat kahi. Stage: giraftari; aarop siddh nahi, trial/pending-astithi report me nahi.',
    period: '2024-2029',
  },
  {
    title: 'Chippagiri takrav-mamle me 69 din Kurnool Central Jail me rehne ke baad Andhra Pradesh High Court se jamanat par Alur MLA Busine Virupakshi ki rihai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/alur-mla-released-from-kurnool-jail-after-69-days-1994693',
    date: '2026-10-10',
    note: 'Deccan Chronicle (10 Oct 2026, Kurnool dateline) ke mutabik, Alur MLA Busine Virupakshi Shanivar ko Chippagiri me Telugu Desam aur YSRC karyakartaon ke beech jhadap se jude mamle me 69 din jail me rehne ke baad Kurnool Central Prison se riha hue. Andhra Pradesh High Court ne Virupakshi, unke chhote bhai B. Sriramulu, unke bete B. Chandrasekhar aur 25 anyon ko isi mamle me jamanat di thi; adalati aadesh ke baad sabhi riha hue. JAWAB DISCLOSED: rihai ke baad Virupakshi ne aarop lagaya ki unke khilaf jhoothe case darj kiye gaye the aur unhe anyayapoorvak jail bheja gaya tha. Stage: jamanat (raahat); maamla pending, aarop siddh nahi. Court ke bahar samarthak jama hue the — samaroh/daan ki gatividhi nahi, sirf bheed ka zikr hai.',
    period: '2024-2029',
  },
];

// ==== Nandyal (Batch 7) ====
// bhuma-akhila-priya — 2 works + 0 negatives (researched 2026-10-18)
// Pehchan: Bhuma Akhila Priya, Telugu Desam Party (TDP), Allagadda (Nandyal jila), 16th AP VS 2024-2029,
// 98,881 vote; runner-up Gangula Brijendra Reddy (YSRCP, 86,844). Purv mantri (Tourism, 2017-19) — mantri-kaal ke
// rajya kaam is fragment ke dayare se bahar rakhe gaye; sirf Allagadda seat ke kaam.
// Fund note: AP CDP allocation officially unverified — allocated: null in andhra.ts record.
// All entries Roman-script Hinglish per spec.
//
// REJECT-LOG:
// 1. 'Ask Akhila' youth outreach programme (Deccan Chronicle, 24 Aug 2026) — Hyderabad me 150 IT
//    professionals/yuvaon ke saath interactive session; mini-IT hub/BPO/MSME, drainage modernization, parks par
//    charcha matra; koi bhautik shilanyas/lokarpan nahi. REJECT: sirf ghoshna/charcha — bhautik sanrachna ka kaam nahi.
// 2. Nandyal district PM Surya Ghar Rs 180 crore solar push review (The Hindu, 29 May 2026) — kendriya pariyojna
//    ki pragati-samiksha baithak (MPDO office, Allagadda) me MLA ki maujoodgi; Collector ne netritva kiya; 12 gaon
//    solar village hetu chihnit. REJECT: kendriya pariyojna bina vyaktigat swikriti-bhoomika — keval samiksha-maujoodgi.
// 3. Allagadda Agricultural Market Yard chairperson shapath-grahan (YouTube/Prime9 Kurnool, ~Oct 2026) —
//    REJECT: source whitelist-bahar + MLA karyakram me keval upasthit (dusre karyakram me maujoodgi).
// 4. Ahobilam temple hair-auction tender row (Telugu360, ~Jul 2026) — Gangula Nani ne MLA par aniyamitta ka aarop
//    lagaya, MLA ne khandan kiya aur chunauti di. REJECT: source whitelist-bahar + sirf aarop; established media me
//    MLA ke khilaf FIR nahi — sirf aarop/maang negative nahi.
// 5. 'Case filed against Allagadda MLA's husband, followers' (Deccan Chronicle, 14 Jul 2024) — aaropi MLA ke pati
//    Bhargav Ram Naidu + 7 anya; MLA khud aaropi column me nahi. REJECT: parivar ke mamle sakhti se bahar.
// 6. Vijaya Dairy portrait controversy (New Indian Express, 21 Oct 2024) — chairman ki kursi par baithna, portrait
//    vivaad; party leadership ko shikayat. REJECT: rajnitik vivaad + party-shikayat matra; FIR/nyayik vikas nahi.
// 7. TDP leadership summons + final warning (Telugu360, ~Aug 2026) — Ahobilam tender vivaad par party-anushasan.
//    REJECT: source whitelist-bahar + party karyawahi akele negative nahi.
// 8. Kidnapping case conditional bail (The Hindu, ~2020-21, Secunderabad court) + May 2023 Yuva Galam padayatra
//    group-clash arrest (324/307/120B IPC) — dono pre-term mamle; Jun 2024+ me established media me inka koi
//    nyayik vikas (chargesheet/adALat aadesh) nahi mila. REJECT: pre-term mamla bina Jun 2024+ legal development.
// 9. myneta.info/AndhraPradesh2024 halafname ke 12 pending mamle (2020-2024 FIRs) — REJECT: halafname ke pending
//    mamle akele negative nahi.
// 10. Bodyguard Nikhil par murder-attempt (Times of India, 15 May 2024) — MLA victim-paksh ki sahyogi, aaropi nahi.
//     REJECT: MLA khud aaropi nahi.
// 11. 'Trauma Care Centre at Allagadda Can Save Numerous Lives' (Deccan Chronicle, 17 Apr 2025) — golden-hour par
//     sampadakiya/maang; centre ki sthapana ya swikriti ka tathya nahi. REJECT: sirf maang.
// 12. Budget session Day 5 (tmv.in, 19 Feb 2026) — 50-bed se 100-bed upgrade ki Vidhansabha-maang; Health Minister ne
//     'proposals under review' kaha. REJECT: source whitelist-bahar + swikriti abhi nahi, keval vicharadhin.
//
// RETRY-LEADS:
// - DC 'Trauma Care Centre at Allagadda Can Save Numerous Lives' (17 Apr 2025) ka poora page nahi khola gaya —
//   agar trauma centre baad me sthapit hua to whitelist-source se entry banegi.
// - DC 'Diarrhoea Continuing in Allagadda Due to Untreated Water' (15 Sept 2024, 3 deaths) — paani-samasya report;
//   agar MLA ne us par koi bhautik kaam karaya ho to whitelist-source se search.
// - 50-bed hospital ke Rs 8 crore ki GO/sarkari portal pushti — mili to entry 1 ka badge 'sarkari' me upgrade hoga.
andhraWorks['bhuma-akhila-priya'] = [
  {
    title: 'Allagadda town me 50-bed ke sarkari aspataal ka lokarpan — MLA aur District Collector ne kiya; Rs 8 crore swikrit, X-ray unit aur 11 specialist doctor 24 ghante tainat',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/akhila-priya-inaugurates-50-bed-hospital-at-allagadda-1924299',
    date: '2025-12-16',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Allagadda MLA Bhuma Akhila Priya ne District Collector G. Rajakumari ke saath Allagadda town (Nandyal jila) me aadhunik suvidhaon se lais 50-bed ke sarkari aspataal ka lokarpan kiya. MLA ne kaha ki gathbandhan sarkar ke padbhar sambhalne ke turant baad aspataal ke vikas ke liye Rs 8 crore swikrit kiye gaye aur suvidha ko aadhunik buniyadi dhanche se upgraded kiya gaya; X-ray unit lagi hai aur 11 specialist doctor 24 ghante uplabdh rahenge. MLA ne nikat bhavishya me 100-bed tak vistaar ka ashwasan bhi diya. Collector ne mareezon se suvidhaon ka poora laabh uthane ko kaha aur 50-bed facility ki sthapana me sarkar ke samaksh mudda uthane aur ise sunischit karne me MLA ke prayason ki sarahna ki. Fund: Rs 8 crore swikriti MLA ke bayaan par aadharit hai; report me CDP/MLA-nidhi ka ullekh nahi — ‘ghoshit nahi’. Collector ka sarvajanik shrey (capped): unhone MLA ke prayason ki sarahna ki — credit isi lokarpan + prayas tak seemit.',
    period: '2024-2029',
  },
  {
    title: 'Vidhansabha me Allagadda MLA ke sawaal par Swasthya Mantri ne 61 constituencies me PPP model par multi-speciality hospitals aur 50 se kam bed wali facilities ke liye upgradation policy ka ailaan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/multi-speciality-hospitals-to-be-set-up-in-state-under-ppp-model/article70647582.ece',
    date: '2026-02-18',
    note: 'The Hindu (18 Feb 2026) ke mutabik, Question Hour me Allagadda MLA Bhuma Akhila Priya AUR ANYA vidhayakon ke sawaal ke jawab me Medical and Health Minister Satya Kumar Yadav ne ailaan kiya: PPP model par pehle charan me 61 constituencies me multi-speciality hospitals; 50 se kam bed wali maujooda facilities ke liye comprehensive hospital upgradation policy (sthaniya jansankhya aur rog-bhaar ke anusaar); jahan zaroori ho Critical Care Blocks; secondary hospitals ke upgrade ke lagbhag 40 prastav mile (Gannavaram, Kovur, Kovvur sahit); Mangalagiri aur Pithapuram ke 30-bed CHCs ko 100-bed aur Chintoor ke 50-bed aspataal ko 100-bed karne ke aadesh jaari; NABARD sahayata se 188 Area Hospitals/CHCs me Rs 1,518.80 crore ke nirman-kary; Rs 600 crore se 24 Critical Care Blocks (har jile me ek); aur Union sarkar ke prastav ke anuroop trauma centres. CREDIT CAPPED: ye rajya-stariya neeti-ghoshna hai — sawaal kai vidhayakon ka tha, Allagadda ke liye seat-vishesh swikriti ka ullekh report me nahi; credit isi sawaal-jawab tak seemit. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
];

// budda-rajasekhara-reddy — 1 negative + 0 works (mined 2026-10-18)
// Pehchan: Budda Rajasekhara Reddy, TDP, Srisailam (Nandyal jila), 16th AP VS 2024-2029.
// Foundation (src/data/andhra.ts): party TDP + seat Srisailam confirmed. ElectionNote: 2024 me 81,699 vote;
// runner-up Silpa Chakrapani Reddy (YSRCP, 75,314) ko 6,385 maton se haraya. Purv record: 2014 me YSRCP se
// jeete, 2016 me TDP me gaye, 2019 me YSRCP se haare, 2024 me TDP se wapas jeete.
// Fund note: AP CDP allocation officially unverified — andhra.ts record me allocated: null.
// Sab entries Roman-script Hinglish; currency 'Rs'; single-quote style.

// ==== REJECT-LOG ====
// R1. Deccan Chronicle "Foundation laid for new pilgrims' accommodation at Srisailam" — MLA ne sirf
//     Peethadhipathi + Srisailam Devasthanam Trust Board Chairman ke saath bhoomi puja me hissa liya;
//     Srisailam mandir/Endowments ka karyakram, MLA ka dastaveji vyaktigat kadam (GO/svikriti-anurodh ka
//     nateeja) nahi — REJECT (dusre ke karyakram me maujoodgi; mandir-nimaym).
// R2. Deccan Chronicle "AP's Srisailam Dam Earns World Book of Records Recognition" (12 Oct 2026) —
//     samman-patr MLA ko saunpa gaya; koi bhautik kaam, fund ya bhoomika nahi — REJECT (ceremonial).
// R3. Deccan Chronicle "Srisailam TD MLA Creates Ruckus at Toll Plaza, Kidnaps Staffer" (16 Apr 2026) —
//     NH-340C toll plaza (Rudravaram, Pamulapadu mandal) par hangama; koi FIR/chargesheet/adalati vikas
//     report me nahi; sirf aarop + viral episode — REJECT as negative (FIR+ criteria poora nahi).
// R4. TOI "Srisailam MLA's followers assault former minister, gherao Nandyal MP" (Jul 2025, Atmakur) —
//     anuyayiyon ne Erasu Prathap Reddy par hamla kiya, MP Byreddy Shabari ka gherao; MLA khud maujood
//     NAHI the, aaropi nahi — REJECT as negative (MLA khud aaropi nahi; party-karyawahi akele negative nahi).
// R5. Deccan Chronicle "District Shift Plan For Srisailam Temple Opposed" (26 Aug 2025) — MLA ka sirf
//     virodh-bayan + "ministers aur CM se milkar vichar rakhunga"; koi dastaveji nateeja nahi —
//     REJECT (sirf maang/bayan).
// R6. The Hindu "Chandrababu Naidu invited to Srisailam Brahmotsavam" (17 Feb 2025) — Maha Sivaratri
//     Brahmotsavam ka nimantran, poori tarah ceremonial; koi kaam nahi — REJECT.
// R7. PTI election piece "Located on River Bank, Srisailam Assembly Poll Focuses on Water Crisis"
//     (Apr 2024) — chunav se PEHLE ka vada ("Sunnipenta ko paani dunga"); pre-term promise, post-term me
//     iska koi dastaveji nateeja whitelist media me nahi mila — REJECT (pre-term promise; sirf ghoshna).
// R8. NDTV video "TDP MLA 'Attacks' Forest Department Staff, Pawan Kalyan Orders Probe" (21 Aug 2025) —
//     video page; text detail extract nahi hua; wahi ghatna TOI + PTI text sources se covered —
//     NOT USED (redundant).
// R9. Indian Express municipal-engineer piece (24 Jan 2026) — usi forest FIR ka passing reference;
//     dedicated post-event reporting TOI/PTI se li gayi — NOT USED (redundant).
// R10. Deccan Chronicle "12-year-old Girl Dies After Scorpion Sting in Kurnool" — MLA ka zikr tak nahi;
//     seat ke bahar Yemmiganur mandal — REJECT (aprasangik).

// ==== RETRY-LEADS ====
// L1. The Hindu "TDP MLA, his followers booked for attack on forest staff"
//     (thehindu.com/.../article69960943.ece, 21 Aug 2025) — 403 blocked; retry par accused-1/2 kram,
//     BNS sections, CM/Pawan Kalyan quotes ka full text verify karna.
// L2. The Hindu "Forest staff allege abduction, attack by Srisailam MLA and followers"
//     (thehindu.com/.../article69956503.ece) — 403 blocked; retry par CCTV + APJFOA complaint details.
// L3. The Hindu "'Pushpotsavam' perfomed on last day of Brahmotsavams at Srisailam" (1 Mar 2025) —
//     snippet me MLA ki bhoomika sirf vyavastha-monitoring; kholkar dekho — sambhavatah ceremonial reject.

andhraWorks['budda-rajasekhara-reddy'] = [
  {
    title: 'Srisailam police ne Shikaram check-post par van adhikariyon ke apaharan aur hamle ke aarop me TDP MLA Budda Rajasekhar Reddy ke khilaf BNS dharaon ke tahat case darj kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI',
    sourceUrl: 'https://m.rediff.com/amp/news/commentary/2025/aug/21/chandrababu-naidu-orders-fir-against-own-mla-for-assault-on-forest-staff/f8165557274f83b3710d5ea0616b1aef',
    date: '2025-08-21',
    note: 'PTI ke mutabik (Rediff, 21 Aug 2025, explicit page date): Andhra Pradesh CM N. Chandrababu Naidu ne Thursday (21 Aug 2025) ko apne hi vidhayak B. Rajasekhar Reddy (Srisailam, TDP) ke khilaf van vibhag ke karmchari par kathit hamle ke baad FIR darj karne ka aadesh diya — sarkari sutra ke hawale se. FIR Srisailam One Town police station me darj hui: Reddy aur Ashok Routh par aarop — criminal force ka istemal, simple hurt, aur district forest officer ke driver Karimulla (25) ko galat tarike se kaid (wrongful confinement) karna; dono ne kathit taur par gambhir parinaam ki dhamki bhi di. Ghatna: 19 Aug 2025 raat lagbhag 9:30 baje, Shikharam check-post, Srisailam village, Nandyal district. Case BNS Sections 115(2), 127(2), 351(2) aur 132 read with 3(5) ke tahat darj hua. CM ko mamla 20 Aug ko notice me aaya, jispar turant FIR ka aadesh diya gaya; detailed investigation underway. STAGE-ACCURATE FRAMING: abhi FIR + police janch ka charan hai — koi chargesheet, giraftari ya adalati faisla is report me darj nahi. MLA ki pratikriya is report me darj nahi (anupasthiti disclosed). Cross-check: TOI ki dedicated reporting (articleshow/123415867, kholkar padhi) bhi case registered + janch + CM ki narazgi + detailed report ki maang ki pushti karti hai.',
    period: '2024-2029',
  },
];

// githa-jayasurya — 0 works + 0 negatives (researched 2026-10-18)
// Pehchan: Githa Jayasurya (G. Jayasurya), TDP, Nandikotkur (SC) (Nandyal jila),
// 16th AP VS 2024-2029, first-time MLA; won 2024 with 92,004 votes (margin 9,792).
// Fund note: AP CDP allocation officially unverified — allocated: null in andhra.ts record.
// All entries Roman-script Hinglish per spec.
//
// REJECT-LOG:
// - Deccan Chronicle (14 May 2025) 'TD Infighting Stalls Progress in Nandikotkur' me naye fire
//   station ke foundation-stone ceremony ka zikr hai (MLA Jayasurya ke samarthakon ka alag
//   karyakram) — isse shilanyas me vyaktigat bhoomika ka ishara milta hai, lekin page kholkar
//   padha NAHI ja saka (403), isliye source nahi bana — RETRY-LEADS me hai.
// - The Week (PTI) (17 Jul 2025): CM Chandrababu Naidu ne Malyala (Nandikotkur) me Krishna river
//   water Handri Neeva Sujala canal me chhoda — ye kendriya/rajya pariyojna ka mukhya-karyakram
//   hai, report me MLA Jayasurya ki vyaktigat bhoomika nahi — REJECT (kendriya/rajya pariyojna,
//   bina vyaktigat bhoomika; Handri-Neeva rule).
// - The Hindu (22 Apr 2025) 'Minister tells officials to address drinking water crisis in
//   Nandyal district': R&B Minister B.C. Janardhan Reddy ka grievance session Banaganapalle me —
//   Nandikotkur seat ke bahar, aur isme MLA Jayasurya ka zikr hi nahi — REJECT (seat bahar).
// - The Hindu (31 Mar 2025) 'Steps in place to provide water to livestock' — Transport Minister
//   ka bayan, MLA Jayasurya se sambandhit nahi — REJECT.
// - Deccan Chronicle (14 May 2025 + 2024 wali) MLA vs MP (Byreddy Shabari) faction-feud reports —
//   ye administration-analysis hai: na koi bhautik kaam, na FIR/janch/adalt-karyavahi; sirf
//   andaruni ladai ka reporting — na work, na negative.
// - 'Jayasurya' naam par aayi FIR/ED/chargesheet news (Save Box app case, Kerala actor ke sexual
//   assault mamle) — sab Malayalam actor Jayasurya ke hain, MLA Githa Jayasurya se nahi.
//   Pehchan-antar: MLA Nandikotkur (SC), AP; ye mamle Kerala ke actor ke — REJECT.
// - Chunav-result coverage (News18, TOI, India Today): sirf jeet/vote data — kaam nahi.
// - MP Byreddy Shabari ke koi bhi MPLADS/Vikas karyakram MLA ke roop me count NAHI kiye.
//
// RETRY-LEADS:
// - https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/td-infighting-stalls-progress-in-nandikotkur-1878844
//   (14 May 2025) — browser.open par HTTP 403 mila; snippet me naye fire station ke shilanyas
//   karyakram me MLA Jayasurya ka alag samarthak-karyakram darj hai. Kholkar padhne par (fund +
//   event-tithi + bhoomika confirm ho to) ek capped 'news' entry ban sakti hai (category Any).
// - https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/kurnool-officials-caught-between-feuding-nandikotkur-td-mla-mp-1815117
//   (2024) — ye bhi DC page hai, kholna verify karna baki; snippet me kaam ka zikr nahi, sirf
//   faction-feud. Padhne par bhi entry banne ki sambhavna kam, lekin poornata ke liye check karein.
andhraWorks['githa-jayasurya'] = [];

// n-md-farook — N. Md. Farook, TDP, Nandyal (Nandyal jila), 16th AP VS 2024-2029.
// Mined 2026-10-18. MANTRI (Kanoon/Nyaya): task-scope ke mutabik nyay-vibhag ke rajya-stariya
// faisle/program/reform is entry set me NAHI liye gaye — sirf Nandyal seat ke kaam.
// Pehchan-crosscheck: andhra.ts me party Telugu Desam Party (TDP), seat Nandyal, karyakaal 2024-2029.
// 1 valid work + 0 negatives. Fund note: AP CDP allocation officially unverified (allocated: null),
// entry ki report me CDP/MLA-nidhi ka zikr nahi — note me 'ghoshit nahi' darj.
// Sab Roman-script Hinglish; currency 'Rs'; single-quote style; string ke andar typographic quotes.

andhraWorks['n-md-farook'] = [
  {
    title: 'Nandyal ke Sarkari General Hospital parisar me Rs 60 lakh ke lagat wale One Stop Centre ka shilanyas',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/minister-lays-foundation-for-one-stop-centre-in-nandyal-1915130',
    date: '2025-11-05',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Law aur Minority Welfare Minister N.M.D. Farooq ne Nandyal me Wednesday ko Sarkari General Hospital ke parisar me One Stop Centre (hinsa-jhelti mahilaon ke liye sanrakshan, samarthan aur punarvas seva) ka shilanyas kiya; lagat ka anumaan Rs 60 lakh bataya gaya aur nirman ka zimma APMSIDC ko diya gaya hai. Kendra me ek chhat ke neeche paanch sewayen hongi: medical care, legal advice, police assistance, psychological counselling aur temporary shelter. Mantri aur District Collector ne avsar par peediton ke liye vishesh vehicle bhi flag-off kiya; Nandyal MP Byreddy Shabari bhi karyakram me maujood thi. Inferred-date disclosure: article page par exact publish-date nahi dikhi; search-index ki relative timestamp (347 days ago) 2026-10-18 se ginate hue 2025-11-05 milti hai jo Wednesday padta hai — report ke “on Wednesday” se mil raha hai. Fund: lagat-anumaan report me disclosed; CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
    stage: 'shilanyas',
  },
];

// ============ REJECT-LOG (n-md-farook) ============
// R1. The Hindu (2024-06-29, “Ministers vow to drive development in Nandyal district”): Mantri Farook ne press meet me
// Nandyal town me drinking-water shortage par “plans” announce kiye — atirikt summer storage tank aur Gorukallu
// reservoir se nayi pipeline. Sirf ghoshna; koi sanction/GO/fund amount disclosed nahi; Jun 2024+ me implementation
// ka follow-up whitelist srot me nahi mila. REJECT (sirf ghoshna).
// R2. Deccan Chronicle (2026-03-30, “TIDCO Housewarmings Held Amid Festive Cheer in Kurnool and Nandyal”): Mantri ne
// Nandyal me TIDCO houses handover kiye — lekin ye statewide 2.5-lakh TIDCO ghar samaroh ka hissa tha; koi vyaktigat
// pehal ya fund-bhoomika report me nahi. REJECT (sarkari abhiyan me shubharambh/maujoodgi).
// R3. Deccan Chronicle (“Plant Saplings, Save Climate, Says AP Minister”; municipal high school, Nandyal, World
// Environment Day): mukhya-atithi ke roop me sapling plantation + Vanamahotsavam/Swarnandhra abhiyan ka appeal.
// Bhautik sanrachna ya sanction nahi. REJECT.
// R4. Deccan Chronicle (“Farooq Calls for Strict Adherence to Road Safety Norms”; 37th National Road Safety Month,
// Lorry Owners Association, Nandyal): mukhya-atithi ka bhashan/niroodh, koi kaam ya sanction nahi. REJECT.
// R5. Deccan Chronicle (“Provide Exemplary Education to Children: Farooq Urges Teachers”; guru pujotsavam, Nandyal):
// 59 teachers ka samman — samaroh/bhashan. REJECT.
// R6. The Hans India (2026-10-02, “Min Farooq launches pension distribution at Polur village”): NTR Bharosa pension
// vitran ka program — routine statewide welfare-scheme event, vyaktigat bhoomika nahi. REJECT.
// R7. The Hindu (2026-06, “Ministers highlight government’s commitment to development, welfare initiatives”; “Two
// Years of Trust – Development and Welfare” programme, Nandyal): dono mantriyon ki karyakram me maujoodgi aur
// sirf bayan — koi vyaktigat lokarpan/shilanyas/ashwasan nahi. REJECT.
// R8. Deccan Chronicle (“Farooq Urges Minorities To Excel Through Education And Unity”; CCC Awards, Vijayawada):
// award-samaroh me bhashan + Diwali greetings; seat ke bahar (Vijayawada) aur koi sanction nahi. REJECT.
// R9. The Hindu (2019, “Women should make better use of govt. schemes”; Samalkot, madarsa building foundation stone
// Rs 25 lakh): pre-term (May 2024 se pehle ka purv mantri karyakaal) + seat ke bahar (Samalkot, Kakinada jila).
// REJECT.
// R10. Radiance/mpositive (Nov 2024, “N.M.D. Farooq Lone Muslim Minister in Andhra Pradesh”): profile/background
// material — koi seat-stariya kaam nahi. REJECT.
// R11. NEGATIVES mining: Jun 2024+ me established media me Nasyam Mohammed Farooq (Nandyal seat) par koi
// FIR/chargesheet/janch, nyayik vikas (adalat-aadesh/notice) ya GO-based janch nahi mili; case-related search results
// me sirf Farooq Abdullah (J&K, alag vyakti) ke mamle mile. Halafname ke pending mamle akele negative nahi (rule).
// Isliye 0 negatives. Pre-term mamalon ka Jun 2024+ legal development nahi mila.

// ============ RETRY-LEADS (n-md-farook) ============
// L1. DC e-paper scribd PDF (2026-01-30, “TRUPTI CANTEEN TO UPLIFT WOMEN: FAROOQ”): snippet me Farooq ne district
// collector G. Rajakumari ke saath ek Trupti Canteen ka udhghatan kiya (DW CRA mahilaon ke liye); sthan snippet me
// Nandyal sabit nahi (dateline Kurnool). DC site par original article-text version dhundhkar location confirm karo —
// Nandyal hua to lokarpan entry ban sakti hai.
// L2. Gorukallu pipeline + summer storage tank (R1): announcement ka implementation follow-up — abhi tak whitelist
// srot me sanction/GO/tender nahi mila; kabhi GO/sanction mile to sanction-type entry ban sakti hai.
// L3. One Stop Centre entry ki exact date: page par publish-date visible nahi; 2025-11-05 inferred hai
// (reasoning note me darj); exact date mile to date field update karo.
// L4. Nandyal Rural / Gospadu mandal me Farook ke roads/water works ke liye DC/Hans India par further mining
// (is run me whitelisted-established outlet par seat-stariya personal-role wala kaam One Stop Centre ke alawa nahi mila).

// B. C. Janardhan Reddy — Banaganapalle (Nandyal), TDP, 16th AP VS 2024-2029.
// Foundation: src/data/andhra.ts me party 'Telugu Desam Party', seat 'Banaganapalle', tenures 2024-2029 confirm.
// Pehchan: Mantri (Sadak/R&B, Infrastructure, Investments) hain, lekin task-boundary ke tahat
// R&B vibhag ki ghoshnaen / state road programs / NH-MORTH baithaken is fragment me NAHI hain —
// sirf Banaganapalle seat ke vyaktigat lokarpan/shilanyas wale kaam. Mantri-bhashanon ke aankde
// (jaise Jun 2026 me Rs 1,800 crore ka dawa) "sirf ghoshna" hain — entry nahi.
// Gali Janardhana Reddy (Karnataka, Gangavathi MLA — OMC mining case) se pehchan-BHRAM ka dhyan rakha gaya:
// saare Gali Janardhana Reddy wale sources bahar rakhe gaye hain.
// Fund: CDP allocation officially unverified (allocated: null) — note me har entry par "ghoshit nahi" disclose.
// Mining 2026-10-18. Whitelist: The Hindu (3 kholi-gayi post-event reports), The Hans India (1 kholi-gayi report).
// Sab titles/notes Roman-script Hinglish; currency "Rs"; single-quote style (string ke andar seedhe quotes nahi).

// ==== REJECT-LOG (padi gayi ya verified sources se — kyon entry NAHI bani) ====
// R1. UNI (uniindia.com, 4 Jul 2025): Danish Asphalt road pilot Banaganapalli me inauguration — UNI whitelist-bahar (task me explicit NAHI) => REJECT.
// R2. ghanamma.com (Oct 2026, "Banaganapalle to be developed as a model town"): AGGREGATOR (thehindu.com attribution wala mirror) => REJECT; asal event me nirikshan (RDO office, drainage, bypass) + Dastagiri Swamy Dargah me SHED APNE NIDHI SE ("with his own funds") => "niji kharch ke kaam" se bhi REJECT.
// R3. pynr.in / The Pioneer (598 din purana): Daddanala Lake revival — "approximately 25.75 lakh from his own resources" => niji kharch + outlet whitelist-bahar => REJECT.
// R4. The Hindu (25 Jun 2026, "tours Banaganapalle, reviews roads, drainage and schools"): pura daura SIRF NIRIKSHAN (college/school visit, Santha Peta completed works, Skanda Colony, drainage inspection) => REJECT.
// R5. The Hindu (19 Apr 2025, "promises development of Banganapalle town"): nirikshan + nirdesh (arches beautify, CC roads expedite, electric poles ki report) => sirf ghoshna/nirdesh, koi lokarpan nahi => REJECT.
// R6. The Hindu (19 Jun 2026, coalition 2nd anniversary speech): Rs 1,800 crore / Rs 212 crore roads-bridges-culverts / NH 151 km Rs 177 crore / Daddanala / RDO office / ring road / 40 schools / indoor stadium — MANTRAI KA BHASHAN-DAWA, "sirf ghoshna"; NH pariyojna kendriya => REJECT.
// R7. The Hindu (12 Sep 2025, "rebukes officials over poor upkeep"): SIRF NIRIKSHAN + anganwadi building ka plan (maang/prastav) => REJECT.
// R8. The Hindu (5 Jul 2025, "Haritha Banaganapalle is our aim"): plantation drive (sarkari abhiyan) + patni dwara Rs 30 lakh ke ped Niji kharid se (niji kharch) => REJECT.
// R9. Times of India (Vijayawada, NH projects MoRTH meeting): Banaganapalle 4-laning Rs 60 crore MoRTH se MAANG — kendriya NH pariyojna + mantri-vibhag kaam; seat-level physical karya nahi => REJECT.
// R10. The Hindu (2 May 2026) ke same-event ke do hisse alag entries NAHI: (a) Anna Canteen Banaganapalle town me inauguration — rajya kalyan yojna ka keval SHUBHARAMBH => REJECT; (b) Hanumanthunigundam tank me Jaladhara-Jalaharathi desilting launch — rajya abhiyan ka keval SHUBHARAMBH => REJECT. Dono ko entry 2 ke note me disclose kiya gaya hai.
// R11. Deccan Chronicle (Oct 2026, "Janardhan Reddy Steps In As Farmers Block Road"): Gali Janardhana Reddy, GANGAVATHI (Karnataka) MLA — pehchan alag => REJECT.
// R12. Rediff/casemine/dailyworld OMC illegal-mining matters: Gali Janardhana Reddy (Karnataka) — pehchan alag => REJECT.
// R13. munsifdaily.com (Jul 2025): MLA ke cousin (Bobbala Madana Bhupal Reddy) ne constable ko thappad mara — MLA KHUD aaropi NAHI (FIR me unka naam nahi; unhone khud FIR karane ko kaha), "Parivar ke mamle sakhti se bahar", aur outlet whitelist-bahar => negative NAHI.
// R14. The Wire (Nov 2023): Sep 2023 skill-development case me B.C. Janardhan Reddy ki giraftari — PRE-TERM; Jun 2024+ me whitelist media me koi nyayik vikas (chargeheet/aadesh/janch) nahi mila; outlet whitelist-bahar => negative NAHI.
// R15. indiankanoon.org (19 Jan 2023, C.C. No.116/2021, Rastha Roko 16 Jan 2021): quash-yachika par order — PRE-TERM, Jun 2024+ me koi vikas nahi => negative NAHI.
// R16. casemine partnership-dispute pre-arrest bail (406/427/506): PRE-TERM, koi Jun 2024+ vikas nahi => negative NAHI.
// R17. The Hans India (Oct 2026, TDP-BJP flagpole rift, Giddalur, Sanjamala): sthaniya TDP samarthakon par aarop — MLA KHUD aaropi NAHI => negative NAHI.

// ==== RETRY-LEADS ====
// L1. The Hindu ka "Banaganapalle to be developed as a model town" (Oct 2026) ka ORIGINAL URL nahi mila — sirf ghanamma.com aggregator mirror (thehindu.com attribution) dikha; thehindu.com site search se retry karna chahiye. Asal event me (aggregator ke mutabik) RDO office/drainage/bypass nirikshan + apne kharch ka dargah shed — zyada-sambhav REJECT hi rahega, lekin original padhne par hi final hoga.
// L2. UNI Danish-asphalt article me aggregator/PTI version me milne par retry — UNI khud whitelist-bahar hai, lekin whitelisted outlet ka version mile to reconsider.
// L3. Jan 2026 (Hindu: "AP preferred destination for investments" — Mirapuram patta passbook distribution): MLA karyakram me maujoodgi matra — REJECT class; retry ki zaroorat nahi.
// L4. Skill-development case (Sep 2023) me B.C. Janardhan Reddy ki sthiti par koi whitelist post-Jun 2024 reporting mile to negative-review me reconsider.

andhraWorks['b-c-janardhan-reddy'] = [
  {
    title: 'Koilkuntla gaon me Sunkalamma mandir ke paas Rs 86 lakh ki nayi CC road aur drains ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/minister-inaugurates-12-crore-development-projects-in-banganapalle/article70719419.ece',
    date: '2026-03-08',
    note: 'The Hindu ki post-event report (8 Mar 2026) ke mutabik, B.C. Janardhan Reddy ne Banaganapalle constituency ke Koilkuntla gaon me Sunkalamma mandir ke paas Rs 86 lakh ki lagat se bani nayi CC road aur drains ka lokarpan kiya. Unhone kaha ki 20 mahine me Koilkuntla me kul Rs 12 crore ke vikas karya kiye gaye hain. Usi avsar par mandal parishad office ki building (Rs 1.50 crore), sarkari junior college me kamre (Rs 40 lakh) aur RO mineral plant (Rs 9 lakh) ke NIRMANADHIN karyon ka zikr hua — ye kary chal rahe the, inka lokarpan is din nahi hua, isliye ye entry sirf poori hui CC road/drains tak seemit hai. Fund-source report me nirdisht nahi — ghoshit nahi. Pehchan-capped: report me unhe R&B Mantri ke roop me likha gaya hai, lekin karya Banaganapalle seat ka hai; vibhag-stariy ghoshnaen is entry ka vishay nahi.',
    period: '2024-2029',
  },
  {
    title: 'Kolimigundla mandal mukhyalaya me muft mineral water plant ka lokarpan — Banaganapalle ke logon ke liye surakshit peyjal',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/minister-and-collector-launch-development-initiatives-in-banaganapalle/article70932238.ece',
    date: '2026-05-02',
    note: 'The Hindu ki post-event report (2 May 2026) ke mutabik, B.C. Janardhan Reddy aur Collector Rajakumari Ganiya ne Banaganapalle constituency ke Kolimigundla mandal mukhyalaya me muft mineral water plant ka lokarpan kiya, jisse sthaniya logon ko surakshit peyjal milega. Usi daure ke do aur hisse is entry ka vishay NAHI: (1) Banaganapalle town me Anna Canteen ka udghatan — rajya kalyan yojna ka keval shubharambh (reject-class), (2) Hanumanthunigundam tank par Jaladhara-Jalaharathi karyakram ke tahat desilting ka shubharambh — rajya abhiyan ka keval shubharambh (reject-class). Fund-source report me nirdisht nahi — ghoshit nahi. Kolimigundla Banaganapalle seat ke 5 mandalon me se ek hai.',
    period: '2024-2029',
  },
  {
    title: 'Mudigedu gaon (Sanjamala mandal) me Rs 30 lakh ke vikas karyon ka lokarpan — bus stand se main road tak Rs 10 lakh ki internal concrete roads sahit',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/minister-janardhan-reddy-launches-plantation-drive-in-nandyal-district/article71047716.ece',
    date: '2026-06-01',
    note: 'The Hindu ki post-event report (1 Jun 2026) ke mutabik, B.C. Janardhan Reddy ne Sanjamala mandal ke Mudigedu gaon me Rs 30 lakh ke vikas karyon ka lokarpan kiya; inme bus stand se main road tak aur gaon ki anya galiyon me Rs 10 lakh ki lagat se bani internal concrete roads shamil hain. Usi daure me unhone pension labharthiyon ko ghar-ghar jakar pension bhi banti (ye kalyan-yojna vitran hai — is entry ka vishay nahi). Sanjamala Banaganapalle seat ke 5 mandalon me se ek hai. Fund-source report me nirdisht nahi — ghoshit nahi.',
    period: '2024-2029',
  },
  {
    title: 'Banaganapalle ke sarkari area hospital me Rs 1.25 crore ke Integrated Public Health Laboratory (IPHL) ka lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/kurnool/minister-janardhan-and-mp-byreddy-inaugurate-iphl-in-banaganapalle-1121282',
    date: '2026-09-12',
    note: 'The Hans India ki post-event report ke mutabik, B.C. Janardhan Reddy ne Nandyal MP Byreddy Shabari ke saath Banaganapalle ke Government Area Hospital me Rs 1.25 crore ki lagat se sthapit Integrated Public Health Laboratory (IPHL) ka lokarpan kiya; mantri ne kaha ki hospital ko upgrade kiya ja raha hai taaki logon ko unnat diagnostic suvidhayen sthaniya star par milen. Usi karyakram me Adani Foundation ke CSR fund se Rs 1.57 crore ke adhunik chikitsa upkaran bhi launch hue — CSR-fund wali vastu is entry ka vishay NAHI (reject-class: CSR samaroh). IPHL ke Rs 1.25 crore ka fund-source report me nirdisht nahi — ghoshit nahi. MP ki upasthiti entry ko radd nahi karti: lokarpan MLA dwara vyaktigat roop se kiya gaya tha. Inferred-date disclosure: report “On Saturday” likhti hai aur prakashan-tithi 13 Sep 2026 (Ravivar) hai; isliye karyakram ki tareekh 12 Sep 2026 (Shanivar) li gayi hai.',
    period: '2024-2029',
  },
];

// kotla-jaya-surya-prakash-reddy — 1 works + 0 negatives (researched 2026-10-18)
// Pehchan: Kotla Jaya Surya Prakash Reddy, TDP, Dhone (Nandyal jila; Dhone + Bethamcherla + Pyapili mandals),
// 16th AP VS 2024-2029, first-time MLA (purv Union MoS Railways 2012-14); S/o Late Kotla Vijaya Bhaskar Reddy (purv CM).
// Chunav: 93,523 vote; runner-up Buggana Rajendranath Reddy (YSRCP, 87,474) ko 6,049 maton se haraya.
// Mining: whitelisted outlets (The Hindu, Deccan Chronicle, Times of India, Hans India, HT, NDTV, India Today,
// PTI-established) par multiple targeted searches — post-June-2024 me MLA ki vyaktigat bhoomika wala
// sirf ek whitelisted post-event report mila (Hans India, Handri-Neeva water release, neeche capped entry).
// Baaki coverage pre-election campaign interviews, CM/minister ke karyakram me upasthiti, ya NIE-only hai.
// Fund: AP me MLA fund (CDP) ka aadhikarik aavantan verify nahi — allocated: null (andhra.ts); entry me
// MLA-nidhi ka zikr srot me nahi, isliye note me 'ghoshit nahi'.
// Halafname me 1 pending case (Cr.No.114/2024 dt. 11.04.2014, Dhone Town PS, IPC 171E/188/34, charges not framed —
// myneta.info 2024 affidavit) — per rule halafname ke pending mamle akele negative NAHI; Jun 2024+ me is par
// koi nyayik vikas established media me nahi mila, isliye 0 negatives.
// Sabhi entries Roman-script Hinglish me hain.
//
// REJECT-LOG (kyon reject):
// 1. NIE 26 Aug 2024 'Focus on completion of Vedavathi Lift Irrigation Scheme' — WHITELIST-BAHAR (batch-1
//    convention: newindianexpress.com whitelist me nahi; 'Indian Express' = theindianexpress.com); upar se
//    pre-term project ka expert-letter story, MLA ka yogdaan sirf CM se appeal/daawa ('CM has responded
//    positively') — sirf ghoshna, koi dastaveji swikriti/nateeja nahi.
// 2. NIE 10 Mar 2026 'Naidu distributes Pattadar Passbooks in Nandyal District' — WHITELIST-BAHAR; upar se
//    MLA ki bhoomika sirf attendee + maangen (Dhone ko Kurnool jile se jodne aur Kothaburju me industrial hub
//    ki maang) — sirf maang/prastav, koi nateeja nahi.
// 3. Deccan Chronicle 9 Mar 2026 pattadar-passbook distribution (CM Naidu ka karyakram, Kothaburju, Dhone) —
//    MLA CM/mantriyon ke saath upasthit the — dusre neta ke karyakram me maujoodgi, vyaktigat bhoomika nahi.
// 4. ToI 13 Apr 2024 (Buggana ne Kotla par EC case ka daawa kiya) — pre-term, pratidvandi ka aarop ('sirf aarop
//    = negative nahi'); halafname wale pending case ka Jun 2024+ me koi nyayik vikas established media me
//    report nahi hua.
// 5. NIE 15 Apr 2024 Kotla interview ('development agenda') — pre-term (4 Jun 2024 se pehle), sirf ghoshna/manifesto;
//    upar se WHITELIST-BAHAR.
// 6. DC 24 Apr 2024 'Kotla-KE tie-up secures Dhone' aur saare election-coverage pieces — pre-term campaign,
//    kaam ki entry nahi.
// 7. Vedavathi/HNSS/Railway-bhuj related pre-2014 career claims (interviews) — pre-term karyakaal se bahar.
//
// RETRY-LEADS (khul na sake ya whitelist-bahar, parent retry kar sakta hai):
// 1. newindianexpress.com/26 Aug 2024 Vedavathi story — whitelist-bahar lekin whitelisted outlet se kabhi
//    cover ho to MLA ki mantri/CM se maang ka follow-up dekha ja sakta hai.
// 2. myneta.info/AndhraPradesh2024/candidate.php?candidate_id=159 — 1 pending case (IPC 171E/188/34); Jun 2024+
//    me chargesheet/court-development aaye to established media me khojo — tab negative ban sakta hai.
// 3. Telugu media (Eenadu/Sakshi/Andhra Jyothy/chhote portals) me MLA ke shilanyas/lokarpan ki khabrein hain
//    sambhav — sab whitelist-bahar, isliye yahan use nahi ki gayin.
// 4. 403/timeout wala koi page is run me nahi mila — sabhi whitelisted pages khulkar padhe gaye.
andhraWorks['kotla-jaya-surya-prakash-reddy'] = [
  {
    title: 'Dhone aur Pathikonda ke 77 chhote sinchai/peyjal talabon me Handri-Neeva ka paani chhoda gaya — Dhone MLA ne Jal Sansadhan Mantri Nimmala Ramanaidu se milkar turant paani chhodne ki maang rakhi thi, paani ki discharge unhone mukhya atithi ke roop me shuru ki',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/kurnool/handri-neeva-water-released-to-77-tanks-in-dhone-and-pathikonda-1118566',
    date: '2026-09-06',
    note: 'The Hans India (6 Sep 2026) ki post-event report ke mutabik, Handri-Neeva Sujala Sravanthi Lift Irrigation Scheme se Dhone aur Pathikonda Assembly constituencies ke 77 chhote sinchai/peyjal talabon ko bharne ke liye paani aupcharik roop se chhoda gaya; Dhone MLA Kotla Jaya Surya Prakash Reddy aur Pathikonda MLA KE Shyam Babu mukhya atithi the aur unhone paani ki discharge aadhikarik roop se shuru ki. MLA ke mutabik, kshetra ke janpratinidhiyon ne khadi fasal bachane aur grameen bastiyon me peyjal-sankat ke liye rajya sarkar se turant paani chhodne ka aagrah kiya tha; unhone khud State Secretariat me Nandyal jile ke mantriyon/MLAon ke saath Jal Sansadhan Mantri Nimmala Ramanaidu se milkar turant release par zor diya, jispar mantri ne turant sakaratmak pratikriya di. CREDIT CAPPED: paani chhodna rajya sarkar ka nirnay aur Handri-Neeva rajya pariyojna ka karyanvayan hai — MLA ka yogdaan mantri se vyaktigat maang + karyakram me mukhya atithi tak seemit; ye unki vyaktigat lokarpan wali bhautik sanrachna nahi. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
];

// ==== Ananthapuramu (Batch 7) ====
// kalava-srinivasulu — 2 works + 0 negatives (researched 2026-10-18)
// Pehchan: Kalava Srinivasulu, TDP, Rayadurg (Ananthapuramu jila: D. Hirehal + Rayadurg + Kanekal + Bommanahal + Gummagatta mandals),
// 16th AP VS 2024-2029; Government Whip; pehle 2014-19 MLA + cabinet mantri (Rural Housing, I&PR), 1999-2004 Anantapur MP.
// Dono entries Deccan Chronicle ki post-event reporting se kholkar verified (karyon ka punararambh/nirakshan + mantri ke paas mudda uthane par fund allocation,
// credit capped — ye vyaktigat lokarpan/shilanyas nahi, sarkari mantri-faisla/ashwasan tak credit seemit).
// Halafname me 19 pending mamle hain (virodh-pradarshan wale IPC 188/341/147 aadi; ek 2020 case CC No.2/2024 me RP Act 136(2)) — lekin
// halafname ke pending mamle akele negative NAHI (spec), aur Jun 2024+ ka koi FIR/chargesheet/nyayik vikas established media me nahi mila — isliye 0 negatives.
// Fund note: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’ (allocated: null in andhra.ts record).
// All entries Roman-script Hinglish per spec. No Devanagari/Telugu anywhere.

// REJECT-LOG:
// - The Hindu 2020-11 article (Why re-lay foundation of old project, TDP to govt.) — REJECT: pre-term (2014-19 wala karyakaal, Jun 2024 se pahle ka bayaan); sirf virodhi-party ka aarop,
//   koi Jun 2024+ kaam nahi. https://www.thehindu.com/news/national/andhra-pradesh/why-re-lay-foundation-of-old-project-tdp-to-govt/article33174453.ece
// - Business Standard (PTI syndicated) — CM Naidu ka Nemakal/Praja Vedika daura (‘Will develop state by creating wealth’) — REJECT: dusre neta (CM) ke karyakram me sirf maujoodgi;
//   Jeedipalli/Bhiravani Tippa/Untakal reservoir wale saare ghoshna CM ke hain, MLA ka vyaktigat role nahi.
// - Deccan Chronicle ‘Forest Water Bodies Revive Drought-hit Anantapur’ — REJECT: Nagara Vanam Rayadurg forest-dept/Central-funds ka kaam; MLA ne sirf PM ki sarahna par dhanyavad kaha —
//   koi vyaktigat bhoomika/lokarpan nahi.
// - Deccan Chronicle ‘Rayalaseema Projects Start Getting Krishna Water Early This Year’ — REJECT: MLA ne sirf Kanekal summer-storage tank me paani chhoda + pooja ki —
//   sarkari abhiyan ka routine shubharambh/karyavahi, bhautik sanrachna ka lokarpan/shilanyas nahi.
// - Deccan Chronicle ‘Naidu Assures to Complete Pending Projects in Rayalaseema’ (Dec 2024) — REJECT: CM ki ghoshnaon ka article; MLA sirf maujood tha; grama sabha me maang prastut karna
//   dastaveji nateeja ke bina sirf maang = reject.
// - The Hindu ‘Centre allocates Rs 736 crore for drinking water, sewage projects in Anantapur’ (2026-03-04) — REJECT: kendriya AMRUT 2.0/AIIB scheme; credit MP (Ambica Lakshminarayana) ko,
//   MLA ka naam/role report me nahi; kendriya pariyojna bina vyaktigat bhoomika.
// - New Indian Express ‘AP CM Naidu releases HNSS canal water’ (Jul 2025) — REJECT: CM-event reporting; MLA ka vyaktigat role nahi.
// - kalavasrinivasulu.com (apna personal site) — REJECT: whitelist me nahi; purane Lok Sabha bhashanon ka sangrah, Jun 2024+ kaam ka established-source saboot nahi.
// - the420.in CBI railway-bribery case — REJECT: galat pehchan (Kurnool ka ek alag Sreenivasulu railway official hai, ye MLA nahi).

// RETRY-LEADS:
// - Rayadurg constituency me Palle Panduga 1.0/2.0 ke tahat CC/BT roads — The Hindu/NIE/Hans India me MLA-war itemized suchi mile to valid entry ban sakti hai; abhi sirf statewide coverage mili.
// - BT Project / Jeedipalli–BT canal: DC article me ‘necessary allocation of funds’ ki rashi nahi di gayi — GO ya sinchai-vibhag release me rashi mile to note update ho sakta hai.
// - Halafnama cases (19 pending): Jun 2024+ me koi nyayik vikas (summons, chargesheet, adalat-aadesh) established media me mile to negative banna hoga; abhi kuch nahi mila.

andhraWorks['kalava-srinivasulu'] = [
  {
    title: 'Sinchai Mantri ke paas HLMC breach ka mudda uthane par Budget me Rs 35 crore mile, MLA ne Nagalapuram me chalte karyon ka nirikshan kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/amp/30-of-repairs-to-hlmc-completed-says-mla-kalava-srinivasulu',
    date: '2025-06-07',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Tungabhadra High Level Main Canal (HLMC) ki breach/leakage marammat ke liye rajya sarkar ne Budget me Rs 35 crore release kiye; report ke anusar Government Whip aur Rayadurg MLA Kalava Srinivasulu ne ye mudda irrigation minister ke paas uthaya tha jisse ye aavantan hua. Report me marammat-khand: Bommanahal mandal ki canals (Anantapur/Pulivendula ki taraf), pramukh breaches Bommanahal, D.Hirehal aur Kanekal mandals me. MLA ne Nagalapuram bridge par chalte karyon ka nirikshan kiya aur kaha ki 30 pratishat kaam poora ho chuka hai; HLMC engineers ko kharif se pahle (July tak zyadatar, August tak baaki chhote kaam) poora karne ka nirdesh diya gaya tha. CREDIT CAPPED: Rs 35 crore ka faisla sarkari mantri/CM ka hai — MLA ka role mudda uthana + nirikshan tak seemit; ye vyaktigat lokarpan/shilanyas nahi. ‘30% complete’ MLA ka dawa hai (report ne iska swatantra satyapan nahi diya). Fund: sarkari Budget; report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
  {
    title: 'Jeedipalli Reservoir se BT Project tak paanch saal se ruki 60 km canal ka Pobbarlapalli me punararambh — Rayadurg aur Kalyanadurgam ki sookhi zameenon ko Krishna-pani ka rasta khula',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Deccan Chronicle',
    sourceUrl: 'https://www.deccanchronicle.com/southern-states/andhra-pradesh/krishna-waters-to-soon-fill-bt-project-says-mla-srinivasulu-1889698',
    date: '2025-07-05',
    note: 'Deccan Chronicle ki post-event report ke mutabik, Whip aur Rayadurg MLA Kalava Srinivasulu ne Kalyanadurgam MLA A. Surendra Babu ke saath pooja karke Jeedipalli Reservoir se BT project tak canal jodne wale paanch saal se ruke karyon ka Pobbarlapalli (Brahmasamudram mandal) me punararambh kiya; report ke anusar ye kaam pichhli sarkar me roke gaye the aur Rayadurg MLA ne pariyojna ke liye zaroori fund ka aavantan dilaya. Report ke anusar CM N. Chandrababu Naidu ne apne haal ke Rayadurg daure me Brahmasamudram mandal ki taraf Jeedipalli Reservoir se BT project tak 60 km lambi canal ko HNSS-pani se bharne ki clearance di thi; isse Rayadurg aur Kalyanadurgam ke kshetron ki sookhi zameenon ko sinchai milegi. MLA ne kaha ki dedh saal ke andar Krishna ka paani BT project me pahunchega. CREDIT CAPPED: canal ki clearance CM ne di, karyakram me Kalyanadurgam MLA, Anantapur MP aur collector bhi maujood the — credit isi vyaktigat punararambh + fund-aavantan-dilane tak seemit. SEAT DISCLOSURE: punararambh-sthal Pobbarlapalli (Brahmasamudram mandal) Kalyanadurgam seat ki seema me hai; pariyojna ka labh Rayadurg + Kalyanadurgam donon kshetron ko hai (report me donon ka naam). Fund ki rashi report me nahi di gayi — ‘ghoshit nahi’. Inferred-date disclosure: report me karyakram ki exact tareekh nahi di gayi, sirf ‘Saturday’ kaha gaya hai; search-index metadata (~Jul 2025) aur ‘Saturday’ ke milan par 2025-07-05 (Saturday) li gayi hai.',
    period: '2024-2029',
  },
];

// payyavula-keshav — Payyavula Keshav (TDP, Uravakonda, Ananthapuramu), Vitta Mantri, 16th AP VS 2024-2029
// Mined 2026-10-18. 1 work + 0 negatives. Foundation me party/seat confirm.
// Whitelist sources kholkar padhe gaye: The Hindu (post-event reporting, 1 entry).
// Fund note: AP CDP allocation officially unverified (allocated: null); MLA-nidhi ka zikr report me nahi.

// ==== REJECT-LOG ====
// 1. The Hans India, 6 Oct 2026: Rs 3.50 crore Kuthuleru stream bridge ka shilanyas + Palle Panduga-3.0 karyon ka udghatan Singanamala Mandal me — Singanamala Keshav ki seat NAHI (seat ke bahar ka kaam = REJECT).
// 2. The Hindu, 31 Dec 2024: Venkatampalli Pedda Tanda (Vajrakaruru mandal, Uravakonda) me pension doorstep vitran + Anganwadi nirikshan — sarkari yojna ka vitran/daura, bhautik sanrachna ka kaam nahi = REJECT.
// 3. The Hindu, Jan 2025: Palturu village (Vidapanakallu mandal) me pension doorstep vitran — wahi wajah = REJECT.
// 4. The Hindu, 5 May 2025 (pre-event): CM Naidu ka Uravakonda daura (HNSS canal expansion nirikshan); Keshav ne karyon ki samiksha ki — sirf nirikshan; HNSS rajya pariyojna, vyaktigat bhoomika nahi = REJECT.
// 5. New Indian Express, 10 May 2025: CM ne Uravakonda ke liye textile park, Gottipadu bridge aur Kottalapalli lift irrigation scheme ki GHOSHNA ki — sirf ghoshna (CM ke karyakram me), Keshav ka vyaktigat lokarpan/shilanyas nahi = REJECT.
// 6. newsdarpan.in + DC tag-listing, Oct 2026: Gadkari se NH-42 bypasses/four-lane par in-principle nod — kendriya pariyojna (NH), sirf anurodh/baithak = REJECT. (Srot bhi whitelist-bahar.)
// 7. Dailyhunt (Deccan Chronicle content), ~11 Oct 2026: Keshav ne CM ko do saal ke Uravakonda karyon ki progress-booklet di — report submission khud koi kaam nahi; aggregator URL bhi = REJECT.
// 8. The Hindu, 23 Jan 2026: Handri-Neeva se record water transfer ka dawa — rajya pariyojna; Keshav ki vyaktigat bhoomika report me nahi = REJECT.
// 9. Business Standard, 20 Aug 2024: local bodies ko Rs 1,452 crore release — Vitta Mantri ka rajya-level fiscal faisla; sirf Uravakonda seat ke kaam allowed = REJECT.
// 10. devdiscourse/obnews, Feb 2025 + 2026: AP Budget 2025-26 / 2026-27 ghoshnaen — budget ghoshnaen = REJECT (mantri-scope rule).
// 11. The Hindu (Jul 2025 entry me hi): Uravakonda me Anna Canteen aur CVV Nagar me sabzi-bazar ke liye zameen ka NIRIKSHAAN — shilanyas/lokarpan nahi, sirf sthal-dekhna = REJECT (entry ke note me darj).
// 12. TOI, Feb 2023: HC ne Keshav ki security cover restore karne ka aadesh diya — pre-term (2023), negative bhi nahi = REJECT.
// 13. The Hindu, Jan 2023: ECI ne Uravakonda voter-deletion ki janch ke liye officer bheja — pre-term; complaint Keshav ne KHUD dayar ki thi = negative NAHI.
// 14. courtkutchehry.com: Payyavula Keshav Vs Y. Visweswara Reddy election petition — chunav-yachika akele negative nahi (whitelist-bahar srot bhi) = REJECT.
// 15. teluguone.com: HRC me power-cuts par petition — pre-term, keval petition (whitelist-bahar srot bhi) = negative NAHI.
// 16. Halafname (myneta.info): 2024 me 1 pending mamla (Cr.No.10/2009, IPC 188/283) — halafname ke pending mamle akele negative nahi; Jun 2024+ me koi nyayik vikas established media me nahi = 0 negatives.

// ==== RETRY-LEADS ====
// 1. Deccan Chronicle, 5 Apr 2026 — "16 MLD Water Treatment Plant Inaugurated in Anantapur": Muddalapuram (Kuderu mandal, Uravakonda constituency) me PABR pipeline ka plant; Keshav ne Anantapur Urban MLA Daggupati Prasad aur MP Ambica Lakshminarayana ke saath lokarpan kiya. AMP URL par 403 aaya — phir kholne ki koshish karo. CAUTION: report ke mutabik mukhya shrey Anantapur Urban MLA ko (plant shahar ki aapurti ke liye; 2017 se adhoora project) — verify hone par bhi credit capped.
// 2. Deccan Chronicle, 5 Jul 2026 — "AP Government Fulfilling Poll Promises, Assures Keshav": Uravakonda me infrastructure/irrigation/industrial push par mantri ka bayan. DC tags page par sirf listing mili, seedha article URL nahi — URL dhoondhkar kholkar padho; bayan hai to zyadatar REJECT hoga, koi thos shilanyas/lokarpan mile to entry banao.

andhraWorks['payyavula-keshav'] = [
  {
    title: 'Uravakonda shahar ke liye Rs 16.35 crore ki peya-jal yojna ka lokarpan — Kuderu mandal ke Udiripikonda se shahar ke har ghar tak surakshit jal-aapurti',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/finance-minister-inaugurates-drinking-water-scheme-in-uravakonda/article69783787.ece/amp/',
    date: '2025-07-07',
    note: 'The Hindu (7 Jul 2025) ki post-event report ke mutabik, Finance Minister Payyavula Keshav ne Monday (7 Jul 2025) ko Uravakonda me peya-jal yojna ka lokarpan kiya. Yojna ki lagat Rs 16.35 crore; jal-srot Udiripikonda (Kuderu mandal) se Uravakonda shahar tak pipeline; lakshya shahar ke har ghar ko surakshit peya-jal dena. Keshav ne kaha ki unhone chunav se pehle Uravakonda shahar ki 30-varsh-purani jal-samasya ke samadhan ka wada kiya tha aur ab wada poora hua hai; unke mutabik pichhli sarkar ne paanch saal me ek meter bhi pipeline nahi bichhayi thi, jabki vartaman sarkar ne 1 Jan 2025 se shuru karya lagbhag chhah mahine me poore karke lagbhag Rs 17 crore kharch kiya. Usi daure me unhone CVV Nagar me naye sabzi-bazar aur Uravakonda me Anna Canteen ke liye zameen ka sirf nirikshan kiya — ye dono us samay shilanyas ya lokarpan nahi the. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];

// gummanur-jayaram — 0 works + 0 negatives (researched 2026-10-18)
// Pehchan pakki: Guntakal (Ananthapuramu jila — Guntakal + Gooty + Pamidi mandals), TDP, Winner 2024;
// 1,01,700 vote, runner-up Y. Venkatarama Reddy (YSRCP, 94,874) ko 6,826 maton se haraya.
// Purva Shram/Rojgar/Prashikshan/Factories mantri (2019-24, YSRCP sarkar) — mantri-kaal ke rajya kaam
// aur purani Alur seat (2014, 2019 MLA) ke kaam is profile me REJECT (seat ke bahar).
// Karyakaal: 16th AP Vidhan Sabha, Jun 2024+ (2024-2029).
// Halafnama: 1 criminal case (IPC Section-188 — lok-sevak ke aadesh ki avahelna); Jun 2024+ me koi
// nyayik vikas established media me nahi mila — isliye 0 negatives.
// Mining: whitelist outlets (The Hindu, New Indian Express, Deccan Chronicle, The Hans India, TOI,
// India Today, NDTV, HT, PTI-on-established-outlet) par multiple targeted searches me Guntakal seat ke
// aise koi bhautik sarkari sanrachna ke vyaktigat lokarpan/shilanyas NAHI mile jinme MLA ki
// bhoomika + fund disclosed ho. Sabhi entries Roman-script Hinglish per spec.

// ===== REJECT-LOG =====
// R1. Patrakar-dhamki vivad (30 Jan 2025) — New Indian Express (whitelist) ki post-event report ke mutabik
//     Guntakal MLA Gummanur Jayaram ne patrakaron ko chetavni di thi ki galat khabaron par unhe
//     "railway tracks par leta diya jayega" (uski apni video viral hui thi). NEGATIVE NAHI — karan:
//     (a) uske khilaf FIR/chargesheet/janch ya koi adalati aadesh/notice established media me nahi mila
//     (b) TDP state president Palla Srinivasa Rao ki censure sirf party karyawahi hai (akele negative NAHI)
//     (c) patrakar-sanghathanon ki ninda/vaapsi ki maang sirf maang hai (sirf aarop/maang = NAHI).
//     Source: https://www.newindianexpress.com/amp/story/states/andhra-pradesh/2025/Jan/30/tdp-mla-gummanur-jayaram-warns-scribes-censured
// R2. Gooty Market Yard chairman shapath-samaroh (thereportertv.com, non-whitelist) — MLA mukhya-atithi
//     ke roop me maujood the; dusre neta ke karyakram me maujoodgi = REJECT (source waise bhi whitelist-bahar).
// R3. Guntakal-Mallappa Gate Rail overbridge (Rs 293 crore) — PM ke May 2025 wale Rs 57,962 crore ke
//     kendriya package ka hissa; kendriya railway pariyojna, MLA ki vyaktigat bhoomika nahi = REJECT.
// R4. Palle Panduga 1.0/2.0/3.0 ke Guntakal-kshetra ke kaam — statewide sarkari abhiyan; MLA ke
//     vyaktigat lokarpan/shilanyas ka post-event report whitelist outlet par nahi mila = REJECT.
// R5. Guntakal me nayi Special Newborn Care Unit ki ghoshna (NIE, Nov 2025) — swasthya vibhag ki statewide
//     ghoshna; MLA ki koi bhoomika srot me disclosed nahi = REJECT (sirf ghoshna + role absent).
// R6. Mantri-kaal (2019-24) ke kaam — Kakinada ESI Hospital ka shilanyas (kendriya MoS Gangwar ne kiya),
//     shram-vibhag ke rajya kaam: purva-mantri rajya kaam = REJECT (sirf Guntakal seat ke kaam valid).
// R7. Alur seat (2014/2019 MLA) ke purane kaam — seat ke bahar = REJECT.
// R8. Anantapur MP Ambica Lakshminarayana ke MPLADS/district-level kaam — MP ke kaam = REJECT.
// R9. "Jayaram" naam ke ED summons wali saari stories — ye Malayalam actor Jayaram (Kantara) ke baare me hain,
//     Guntakal MLA Gummanur Jayaram se koi sambandh nahi = identity REJECT (galat pehchan ka khatra).
// R10. Halafname ka pending mamla (IPC 188) — pre-term ka hai aur Jun 2024+ me koi nyayik vikas nahi;
//      halafname ke pending mamle akele negative NAHI = REJECT.
// R11. Ticket-ghoshna (Mar 2024) ke samay Guntakal me TDP karyakaron ka virodh (NIE, 30 Mar 2024) —
//      chunaav-purv party-vivad; karyakaal (Jun 2024+) ka mamla nahi, koi legal vikas nahi = REJECT.

// ===== RETRY-LEADS =====
// L1. Deccan Chronicle Anantapur edition / The Hans India Anantapur edition ke local pages me
//     Guntakal-Gooty-Pamidi ke chhote lokarpan/shilanyas aksar sirf print/e-paper me aate hain —
//     scribd par "DC Ananthapur 31-01-2026" jaisi leads mili lekin page khulkar padha nahi ja saka
//     (unreadable = source nahi). E-paper archive se seedha verification baki hai.
// L2. New Indian Express Anantapur e-paper (epaper.newindianexpress.com) ke past editions me
//     "Guntakal" + "Jayaram" + foundation/inauguration keyword search — web-index me nahi aata, e-paper
//     me ho sakta hai.

andhraWorks['gummanur-jayaram'] = [];

// jc-ashmit-reddy — 0 works + 0 negatives (researched 2026-10-18)
// Pehchan: J. C. Ashmit Reddy (Juturu Chinnareddy Ashmit Reddy), TDP, Tadipatri (Ananthapuramu),
// 16th AP VS 2024-2029; assumed office 4 Jun 2024; s/o J. C. Prabhakar Reddy (purv MLA, Tadipatri Municipal Chairman).
// Foundation: src/data/andhra.ts (party: TDP, seat: Tadipatri, tenure 2024-2029, fund.allocated: null).
// Mining: whitelist outlets (The Hindu, New Indian Express, Times of India, Deccan Chronicle, The Hans India)
// par multiple targeted searches (inauguration/foundation stone/school/water/road + assembly-question angle
// + legal-development angle Jun 2024+) me Ashmit Reddy ki VYAKTIGAT bhoomika wala koi seat-level
// bhautik kaam nahi mila, aur Jun 2024+ me unke khilaf koi nyayik vikas (FIR/chargesheet/adalt-aadesh)
// established media me nahi mila. Isliye profile khaali — khaali profile theek hai (spec).
// Note: Deccan Chronicle ka ek MoU article 403 par khul nahi saka — RETRY-LEADS me rakha gaya hai.
//
// ==== REJECT-LOG ====
// 1. Deccan Chronicle — "Tadipatri Municipality, Arjas Steel Sign MoU for Reuse of Treated Wastewater"
//    (STP recycled-wastewater MoU bhoomi pooja; Tadipatri Municipality + Arjas Steel). Page 403 — khul nahi
//    saka, isliye entry NAHI (see RETRY-LEADS). Search snippet se aakalan: MLA bhoomi pooja me maujood tha aur
//    PPP ki tareef ki — municipal chairman J. C. Prabhakar Reddy pariyojna ke chehre par. Padhne par bhi
//    apeksha "sarkari abhiyanon ke keval shubharambh" (maujoodgi/endorsement, vyaktigat shilanyas nahi) → sambhavit REJECT.
// 2. New Indian Express (28 Aug 2024) — "MLA protests against CI's inaction on sand mining plaint":
//    Tadipatri rural police station ke bahar protest, CI ke nilamban ki maang. SIRF maang/prastav-protest —
//    koi bhautik kaam, lokarpan ya shilanyas nahi → REJECT (spec: sirf maang/prastav).
// 3. Times of India (Aug 2024) — "Tadipatri MLA opposes sand mafia": SP ko complaint + protest, NGT complaint
//    ka dawa. Koi bhautik sanrachna ya swikriti ka nateeja nahi → REJECT (sirf maang/protest).
// 4. The Hindu (06 Apr 2026) — "Water is wealth, surplus from Srikakulam projects can be taken to Anantapur":
//    CM N. Chandrababu Naidu ke saath MLA stalls par maujood; water-security mobile app CM ne launch kiya;
//    Tadipatri constituency progress report bhi CM ne pesh kiya. Dusre neta (CM) ke karyakram me maujoodgi → REJECT.
// 5. The Hindu (13 May 2024) — polling-booth clash (Tadipatri): Ashmit Reddy candidate tha, MLA nahi; ghatna
//    4 Jun 2024 se pehle (pre-term); unke khilaf FIR-aaropi ke roop me koi naam nahi → negative NAHI.
// 6. The Hindu (26 Dec 2020) — Tadipatri police ne J. C. Prabhakar Reddy aur unke bete Ashmit Reddy ke khilaf
//    SC/ST (Prevention of Atrocities) Act ke tahat 2 cases darj kiye (complaints: Kasi Manoj, Bhramendra).
//    PRE-TERM (Dec 2020); Jun 2024+ me is mamle ka koi nyayik vikas (chargesheet/sunvai-aadesh/bari) established
//    media me nahi mila → negative NAHI (spec: pre-term mamla tabhi jab Jun 2024+ me legal development ho).
// 7. Times of India (~May 2024) — BS-IV vehicle scam me ED ka prosecution complaint (chargesheet) 17 aaropiyon
//    par, jisme "Prabhakar Reddy's son JC Ashmit Reddy" naamzad. Chargesheet/reporting ~21 May 2024,
//    4 Jun 2024 (assumed office) se PEHLE → pre-term; Jun 2024+ me trial/sunvai ka koi vikas established media
//    me nahi mila → negative NAHI. (Parivar-separation rule: ye entry Ashmit ke KHILAF naamzad hone par hi
//    vichari gayi thi, pita ke mamle ke roop me nahi.)
// 8. UNI (13 Jun 2020) / Times of India (22 Jun 2020) — BS-III vehicle scam me giraftari — pre-term → negative NAHI.
// 9. theageofstars.com (liquor-lottery investigative piece) — whitelist-bahar outlet; waise bhi piece me spast
//    hai "desk found no liquor-related allegation against him" → na negative, na source.
// 10. New Indian Express (25 Apr 2024) "Developed Tadipatri cries for attention" — election-season feature,
//     Ashmit Reddy par vyaktigat kaam ka dawa nahi; pita/chacha ke municipality-kaam ka zikr → koi entry nahi.
//
// ==== RETRY-LEADS ====
// 1. Deccan Chronicle (whitelist) — "Tadipatri Municipality, Arjas Steel Sign MoU for Reuse of Treated
//    Wastewater": https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/tadipatri-municipality-arjas-steel-sign-mou-for-reuse-of-treated-wastewater-1938664
//    — 2026-10-18 ko 403 (access denied); kholkar padhne par verify karo ki MLA ne vyaktigat shilanyas/
//    lokarpan kiya ya sirf maujoodgi/endorsement (snip ke mutabik maujoodgi + PPP tareef).
// 2. Times of India (whitelist) — "Fake documents used to put BS-IV vehicles back on roads":
//    https://timesofindia.indiatimes.com/city/hyderabad/fake-documents-used-to-put-bs-iv-vehicles-back-on-roads/articleshow/110284455.cms
//    — 2026-10-18 ko 403; ED chargesheet ki exact filing date confirm karo (search metadata ~21 May 2024,
//    pre-term lagta hai). Agar chargesheet asal me Jun 2024+ ki nikle to negative candidate banega.
// 3. BS-IV scam trial: established media me Jun 2024+ ki sunvai/aadesh par nazar rakho (filhal kuch nahi mila).
andhraWorks['jc-ashmit-reddy'] = [];

// amilineni-surendra-babu — 0 works + 0 negatives (researched 2026-10-18)
// Pehchan: Amilineni Surendra Babu, TDP, Kalyandurg (Ananthapuramu jila), 16th AP VS 2024-2029.
// S/o Late Amilineni Venkatappa; pesha businessman; SSC 1983; halafname me 0 aapradhik mamle.
// Fund note: AP CDP allocation officially unverified — allocated: null in andhra.ts record.
// Mining: whitelist outlets (The Hindu, Deccan Chronicle, The Hans India) par targeted
// searches se koi seat-level bhautik vikas kaam (vyaktigat lokarpan/shilanyas) nahi mila;
// sirf daura-nirikshan, aashwasan, CM se maang-baithak, doosre MLA ke karyakram me maujoodgi,
// aur SRC-sangathan ki niji charity cycle-vitaran mili — sab REJECT. Halafname me 0 mamle,
// aur Jun 2024+ me koi nyayik vikas established media me nahi mila — isliye 0 negatives.
// All entries Roman-script Hinglish per spec. Koi entry nahi, isliye khaali array.
//
// REJECT-LOG (sab page kholkar padha gaya):
// 1. Deccan Chronicle, "Bicycles Distributed To Students", pub 2026-09-29 (event Sunday = 27 Sep 2026),
//    URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/bicycles-distributed-to-students-1991425
//    REJECT: daan/rahat kaam. 1,500 bicycles Karanam Chikkappa sports ground, Kalyandurg town me
//    "Amilineni Vidya Chakram initiative" ke tahat banti (kul 7,300 ka plan, lagbhag Rs 5 crore kharch);
//    MLA ne khud kaha ki ye SRC organisation ke sahyog se hui kalyankari pehal hai (SRC chairman,
//    SRC MD, CFO Sheema — sangathan ne funds jutaye). Sarkari sanrachna nahi, MLA-nidhi nahi.
//    Date: 2026-09-29 (prakashan; event us se pehle wala Sunday).
// 2. The Hindu, "MLA assures to complete construction works of school buildings at Gonchireddipalle",
//    pub 2026-08-20 (event Wednesday = 20 Aug 2026),
//    URL: https://www.thehindu.com/news/national/andhra-pradesh/mla-assures-to-complete-construction-works-of-school-buildings-at-gonchireddipalle/article69955485.ece
//    REJECT: sirf nirikshan + aashwasan. Brahmasamudram mandal ke Gonchireddipalle gaon me
//    adhure school bhavan ka nirikshan karke Education dept/HRD Minister se baat karke funds
//    jutane ka aashwasan — koi lokarpan/shilanyas/swikriti nahi. Date: 2026-08-20.
// 3. The Hans India, "MLA Surendra meets CM Naidu to review BTP canal works", pub 2026-10-08,
//    URL: https://www.thehansindia.com/andhra-pradesh/mla-surendra-meets-cm-naidu-to-review-btp-canal-works-1130018
//    REJECT: sirf maang/baithak. Vijayawada me CM Nara Chandrababu Naidu se milkar BTP canal works
//    tez karne, kisan muaavje, road/beautification/urban forest par charcha — koi lokarpan,
//    shilanyas ya swikriti event nahi. Date: 2026-10-08.
// 4. Deccan Chronicle, "Krishna Waters to Soon Fill BT Project, Says MLA Srinivasulu" (Rayadurg),
//    URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/krishna-waters-to-soon-fill-bt-project-says-mla-srinivasulu-1889698
//    REJECT: doosre neta (Whip/Rayadurg MLA Kalava Srinivasulu) ke karyakram me maujoodgi +
//    vyaktigat bhoomika bina rajya sinchai pariyojna (Jeedipalli-HNSS se BTP canal) ka shubharambh.
//    Surendra Babu ne keval puja me hissa liya; funds ka allocation Rayadurg MLA ne dilaya tha
//    (report ke shabdon me). Pobbarlapalli (Brahmasamudram mandal) unki seat me hai, lekin
//    karyakram ka netritva Rayadurg MLA ka tha.
// 5. The Hans India, "TDP MLA urges cadre to double winning majority in Kalyandurg local body polls",
//    pub ~Sep 2026,
//    URL: https://www.thehansindia.com/news/cities/kurnool/tdp-mla-urges-cadre-to-double-winning-majority-in-kalyandurg-local-body-polls-1125815
//    REJECT: party ka rajnaitik karyakram (local body chunav baithak Praja Vedika me) — vikas kaam nahi.
// 6. Capital Information / Indian Chronicle Daily epapers (Aug-Sep 2026) me "Amilineni Vidya Chakram"
//    ke tahat Kambadur mandal HQ me cycle-vitaran ka ullekh (SRC Trust) — REJECT: whitelist-bahar
//    chhota portal + item 1 wahi charity scheme hai.
// NEGATIVES (0): halafname me 0 aapradhik mamle; "Amilineni Surendra Babu case/FIR/police"
// searches me unse juda koi mamla established media me nahi mila (sirf naam ke dusre log —
// Hyderabad kidnapping victim, 1998-99 Andhra IPS officer Surender Babu — galat pehchan,
// Surendra Babu Kalyandurg/TDP se sambandhit nahi, isliye inhe yahan darj nahi kiya).
// RETRY-LEADS: koi nahi — sabhi whitelist pages khulkar padhe gaye; koi 403/timeout page nahi mila.
andhraWorks['amilineni-surendra-babu'] = [];

// daggupati-venkateswara-prasad — 1 work + 0 negatives (researched 2026-10-18)
// Pehchan: Daggupati Venkateswara Prasad, TDP, Anantapur Urban (Ananthapuramu jila),
// 16th AP VS 2024-2029, first-time MLA. S/o Daggupati Chinnarappa; Diploma (Mechanical Engineering).
// Ekmatra VALID entry Vidhansabha-sawaal par dastaveji mantri-jawab (credit capped) —
// The Hindu ki post-event reporting se kholkar verified. Halafname me 1 mamla darj hai,
// lekin uska Jun 2024+ me koi nyayik vikas established media me nahi mila — isliye 0 negatives.
// AP CDP allocation officially unverified — allocated: null (andhra.ts record me).
// Sab entries Roman-script Hinglish me.

// REJECT-LOG (whitelist-compliant sources, lekin niyamon par reject):
// 1. The Hans India (23 Sep 2026) — "Foundation laid for Rs 50 cr works in Anantapur":
//    Rs 50 crore Hybrid Annuity Model works ki foundation ceremony me MLA ne "participated" kiya;
//    mukhya launch CM N. Chandrababu Naidu ne virtual kiya (Rs 11,360 crore statewide).
//    REJECT: dusre neta (CM) ke karyakram me maujoodgi — niyam: "aamantran/netritva bhi NAHI".
//    URL: https://www.thehansindia.com/news/cities/anantapur/foundation-laid-for-rs-50-cr-works-in-anantapur-1124721
// 2. The Hans India (15 Oct 2026) — "Anantapur takes the Pink route to public sanitation":
//    AHUDA ki Rs 30 lakh Pink Toilets pariyojna; groundbreaking AHUDA Chairman TC Varun,
//    MLA Daggupati Venkateswara Prasad aur MLC Dalavai Ramadevi — teenon ne milkar ki;
//    pariyojna Deputy CM Pawan Kalyan ke support wali, lead Chairman ka.
//    REJECT: dusre neta/sanstha (AHUDA) ke karyakram me sanyukt maujoodgi — vyaktigat
//    lokarpan/shilanyas nahi, fund+bhoomika MLA-war disclose nahi.
//    URL: https://www.thehansindia.com/news/cities/anantapur/anantapur-takes-the-pink-route-to-public-sanitation-1132572
// 3. The Hindu (14 Jul 2025) — "Officials told to serve notices on encroachers of municipal lands":
//    MLA ka AMC officials ke saath review meeting; encroachment par notices serve karne ke nirdesh,
//    dumping yard safai ki tithi. REJECT: sirf review-meeting/nirdesh — niyam: "sirf nirikshan/daura".
//    URL: https://www.thehindu.com/news/national/andhra-pradesh/officials-told-to-serve-notices-on-encroachers-of-municipal-lands/article69811221.ece/amp/
// 4. The Hindu (10 Feb 2025) — "Reclaim encroached municipal corporation lands, Anantapur Urban MLA tells officials":
//    Public Grievance Redressal System me petitions + encroachment survey ke nirdesh; 60 MLD water plant
//    "alliance government" ne lagaya (testing stage) — vyaktigat bhoomika establish nahi.
//    REJECT: nirikshan/nirdesh + sarkari pariyojna bina vyaktigat bhoomika.
//    URL: https://www.thehindu.com/news/national/andhra-pradesh/reclaim-encroached-municipal-corporation-lands-anantapur-urban-mla-tells-officials/article69202757.ece
// 5. The Hindu (20 May 2025) — "MLA announces major development works in Ananatapur during Mini Mahanadu":
//    Party karyakram (Mini Mahanadu) me dumping-yard safai, underground drainage aur Nadimivanka
//    protection wall ki ghoshna. REJECT: "sirf ghoshna" — execution ka dastavej nahi.
//    URL: https://www.thehindu.com/news/national/andhra-pradesh/mla-announces-major-development-works-in-ananatapur-during-mini-mahanadu/article69598321.ece
// 6. The Hindu (8 Sep 2025) — "Legacy waste from Anantapur dump yard will be cleared by October 2, says Minister":
//    MA&UD Mantri P. Narayana ne dump yard ka nirikshan MLA ke saath kiya; saare waade mantri ke.
//    REJECT: dusre neta (mantri) ke karyakram me maujoodgi.
//    URL: https://www.thehindu.com/news/national/andhra-pradesh/legacy-waste-from-anantapur-dump-yard-will-be-cleared-by-october-2-says-minister/article70026518.ece
// 7. The Hindu (11 Nov 2025) — "A.P. government’s speed of doing business policy yielding results":
//    Finance Minister Payyavula Keshav ke saath Flatted Factory Complex ki foundation-laying me MLA bhi maujood.
//    REJECT: dusre neta ke karyakram me maujoodgi.
//    URL: https://www.thehindu.com/news/national/andhra-pradesh/ap-governments-speed-of-doing-business-policy-yielding-results-says-industries-minister/article70267069.ece
// 8. Deccan Chronicle (17 Oct 2026) — "Amid Bickering Within TD, Anantapur Mayor’s Post Has Gone To BJP":
//    Mayor-seat politics ke sandarbh me "allegations of land grabbing surfacing targeting sitting legislator
//    D. Prasad and his close associates" — koi FIR/chargesheet/janch ya nyayik vikas report nahi.
//    REJECT as negative: "Sirf aarop/maang = NAHI". URL: https://www.deccanchronicle.com/southern-states/andhra-pradesh/amid-bickering-within-td-anantapur-mayors-post-has-gone-to-bjp-1996534
// 9. Jr NTR viral-audio vivaad (Aug 2025; The News Minute, mid-day, webindia123 snippets):
//    Alleged audio clip me MLA ka Jr NTR ko apshabd kahne ka dawa; MLA ne kaha voice uski nahi,
//    District SP ko complaint di, fans se maafi maangi. Audio ki pramanikta establish nahi; MLA ke
//    khilaf koi FIR/chargesheet/janch report nahi. REJECT as negative: "Sirf aarop/maang = NAHI"
//    (authenticity not established; MLA complainant hai, aaropi nahi).
// 10. Daggubati film-parivar demolition case (Hyderabad, Jan 2025 FIR; prameyanews/hyderabadmail/siasat):
//     Rana Daggubati, Venkatesh aadi ke khilaf hotel-demolition FIR — ye alag Daggubati film parivar hai,
//     MLA Daggupati Venkateswara Prasad se koi sambandh nahi. REJECT: "Parivar ke mamle sakhti se bahar"
//     + pehchan hi nahi milti (Hyderabad ka Film Nagar mamla, Anantapur Urban seat se bahar).
// 11. YouTube/aggregator-only items (whitelist-bahar, isliye source nahi):
//     Mega9tv "Rs 6.30 Crores" video, Prime9 "Rs 200 crore CC roads" video, hmtv development video,
//     werindia.com aggregator ka "Anantapur MLA conducts surprise inspection at GGH" (The Hindu 21 Sep 2026 ka
//     summary; werindia whitelist me nahi). Sirf nirikshan hota to bhi reject tha.
// 12. The Hans India (12 Oct 2026) — Palle Panduga CC road, Rajiv Colony: Anantapur MP + MLA ne sanyukt
//     launch kiya; pariyojna CM/Deputy CM-spearheaded state program (Palle Panduga 3.0, Rs 11,085 crore).
//     REJECT: "sarkari abhiyanon ke keval shubharambh" + MP ke saath sanyukt.
//     URL: https://www.thehansindia.com/news/cities/anantapur/anantapur-mp-lays-foundation-for-cc-road-under-palle-panduga-programme-1131420
// RETRY-LEADS (page khula nahi — source nahi bana):
// 1. TOI (23 Aug 2026) — "MLA threatens to file Rs 50 crore defamation suit over graft claims":
//    viral audio (sub-registrar Ramana Rao) me MLA par Rs 1.5 lakh/month rishwat ka aarop; MLA ka inkar +
//    Rs 50 crore maan-haani dawa ki dhamki; authenticity not established. Teenon URLs par 403 aaya,
//    page padha nahi ja saka — retry-lead (padhne par bhi negative tabhi jab FIR/chargesheet/janch ho;
//    abhi sirf aarop hai, isliye negative banne ki sambhavna kam).
//    https://timesofindia.indiatimes.com/city/vijayawada/mla-threatens-to-file-rs-50-crore-defamation-suit-over-graft-claims/amp_articleshow/133427675.cms

andhraWorks['daggupati-venkateswara-prasad'] = [
  {
    title: 'Vidhansabha me Anantapur Urban MLA ke sawaal par Health Mantri ne Government General Hospital Anantapur ke vikas ki sthiti sadan me rakhi — 560 se badhkar 1,348 bed, Mother and Child Health block ki baaki manzilen poorn ho rahi hain, 50-bed Critical Care Block PM-ABHIM yojana se teen mahine me taiyaar hoga',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/andhra-pradesh/dy-speaker-commends-health-minister-for-detailed-replies-in-the-assembly/article70656580.ece',
    date: '2026-02-21',
    note: 'The Hindu (21 Feb 2026) ke mutabik, Legislative Assembly me Question Hour ke dauraan Anantapur Urban MLA Daggupati Venkateswara Prasad (Puttaparthi MLA Palle Sindhura Reddy ke saath) ke Government General Hospital, Anantapur ke vikas par uthaye sawaalon ke jawab me Health Minister Satya Kumar Yadav ne bataya: hospital shuruaat me 560 beds ke liye manzoor tha, ab 1,348 beds par kaam kar raha hai (143 ICU beds sahit); Mother and Child Health block ki shesh manzilon ko poorn karne ke kadam chal rahe hain; PM-ABHIM scheme ke tahat 50-bed ka Critical Care Block teen mahine ke andar poorn hoga; dawaiyon ke bakaaya bhugtaan clear ho chuke hain aur Facial Recognition System se hospital ki nigrani mazboot ki gayi hai. Deputy Speaker ne mantri ke detailed jawab ki sadan me sarahna bhi ki. CREDIT CAPPED: ye mantri ka sadan me jawab hai — MLA ka vyaktigat lokarpan/shilanyas nahi; Anantapur Urban ke vishesh hospital-karyon ki itemized suchi report me nahi, credit isi sawaal-jawab tak seemit. Fund: report me CDP/MLA-nidhi ka zikr nahi — ‘ghoshit nahi’.',
    period: '2024-2029',
  },
];

// paritala-sunitha — 1 work + 0 negatives (researched 2026-10-18)
// Pehchan: Paritala Sunitha, TDP, Raptadu (Ananthapuramu jila), 16th AP VS 2024-2029.
// W/o Late Paritala Ravindra; purv mantri (2014-19) — mantri-kaal ke rajya kaam bahar rakhe gaye hain.
// Halafname me 8 pending mamle; sab pre-term (2022-23 FIRs; ek chargesheet 11.03.2024, term se pehle).
// Whitelist outlets (The Hindu, Deccan Chronicle, The Hans India, TOI) par Jun 2024+ ka koi nyayik vikas nahi mila.
// Valid work: The Hans India ki post-event report — Palle Panduga-3.0 ke tahat Rs 1.20 crore ki CC road
// ka bhoomi-poojan swayam MLA ne kiya (fund source report me spasht nahi — 'ghoshit nahi').
// Sab entries Roman-script Hinglish me; comments me bhi Devanagari ya rupee-sign nahi.

// REJECT-LOG (kyon reject):
// 1. Usi Hans India report (horticulture hub, 2026-10-08) me Rs 4.90 crore Pandameru bridge, Rs 2 crore
//    Prasannayapalli bridge, Rs 1.65 crore park, Rs 2.68 crore Pandameru Venkataramana Swamy temple
//    development — MLA ne 'detailed various regional works' kiya; vyaktigat bhoomika/lokarpan report me
//    spasht nahi = sirf ghoshna/suchan → REJECT.
// 2. Hans India (2026-09-01): pushcarts vitaran — Paritala Ravindra Memorial Trust + Kakkalapalli tomato
//    market operators ne 120 pushcarts (Rs 18 lakh) procure kiye; MLA ne 50 vitarit kiye. Trust ka niji
//    daan kaam, sarkari sanrachna nahi = daan/rahat kaam → REJECT.
// 3. Deccan Chronicle (2026-09-22): YSRCP-kal ke muqadmon ki vapsi ki maang — maang/prastav + party
//    karyawahi akele negative nahi; junior college (Raptadu), hostel (Ramagiri), college (Atmakur) keval
//    maangein; Rs 800 crore Upper Pennar project CM ki swikriti, MLA ki bhoomika keval dhanyavaad → REJECT.
// 4. The Hindu (2025-03-13): hearing aids vitaran — CSR (SECI) fund, vitaran putr Paritala Sriram ne kiya,
//    MLA ka keval 'call' = dusre ka kaam + CSR samaroh → REJECT.
// 5. Hans India (drinking water review, ~2026-09): Jal Jeevan Mission samiksha baithak — Sai Pavani
//    (Rs 40 crore) aur Saraswati (Rs 50.43 crore) ke contractor kaam; MLA ka vyaktigat lokarpan/shilanyas
//    nahi = sirf samiksha → REJECT.
// 6. Hans India (2026-09-17/20/22): Nara Lokesh ki Raptadu yatra + NTR/Paritala Ravi murti anavaran ki
//    taiyaari — pre-event announcements; anavaran dusre neta (Nara Lokesh) ka karyakram; MLA keval
//    aayojan me = dusre neta ke karyakram me maujoodgi → REJECT.
// 7. Deccan Chronicle (~2025-10): 'Raptadu MLA Warns Bank Staff Over Laxity' — crop loan samiksha baithak,
//    koi bhautik kaam nahi → REJECT.
// 8. Hans India (2026-08-13): California me krishi khet nirikshan — niji yatra me nirikshan, seat ka kaam
//    nahi → REJECT.
// 9. Hans India (2026-10-04): BC quota par YCP ki alochana — rajnaitik bayan, kaam nahi → REJECT.
// 10. TOI (~2022): Jockey/Page Industries vivaad me Purv MLA Thopudurthi Prakash Reddy se shabd-yuddh —
//     pre-term + sirf aarop, Jun 2024+ me koi nyayik vikas nahi → REJECT.
// 11. TeluguOne (2026-10-17): 'Paritala Sunitha Brother Arrested For Murder' — Paritala Ravi hatya-mamla
//     parivar-sambandhi purana mamla (strict out of scope), MLA khud aaropi nahi, aur outlet off-whitelist
//     → REJECT.
// 12. Negatives: halafname ke 8 pending mamle akele negative nahi; myneta ke mutabik chargesheet wali ek
//     (Cr. No. 227/2023, Chennekothapalli) 11.03.2024 ko dayar — term (Jun 2024) se pehle; WP Criminal
//     Petition No. 7854/2023 HC me pending lekin Jun 2024+ me established media me koi nyayik vikas
//     report nahi. MLA ka '22 muqadme' ka bayan DC report me swayam-bayan hai = party karyawahi akele
//     negative nahi. Chunav-yachika ya sirf yachika dayar karne ka koi mamla nahi mila.

// RETRY-LEADS: koi nahi — sabhi padhe gaye whitelist pages poori tarah khul gaye; koi 403/timeout nahi.

andhraWorks['paritala-sunitha'] = [
  {
    title: 'Palle Panduga-3.0 ke tahat NH se Gangulukunta gaon tak Rs 1.20 crore ki CC road ka bhoomi-poojan — Raptadu MLA ne khud shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hans India',
    sourceUrl: 'https://www.thehansindia.com/news/cities/anantapur/rayalaseema-horticulture-hub-to-bring-revolutionary-growth-mla-sunitha-1130012',
    date: '2026-10-08',
    note: 'The Hans India ki post-event report ke mutabik, Raptadu MLA Paritala Sunitha ne Palle Panduga-3.0 karyakram ke tahat Gangulukunta gaon me national highway se gaon tak banne wali Rs 1.20 crore ki CC road ka bhoomi-poojan (groundbreaking) swayam kiya; isi daure me unhone sweet orange ke bagaan ka nirikshan kiya aur Rayalaseema Global Horticulture Hub par kisan jagrukta sabha ko sambodhit kiya. Fund: report me Rs 1.20 crore ka aankda diya gaya hai lekin yojna ya nidhi ka vishesh srot (CDP/MLA-nidhi ya anya) report me spasht nahi — ‘ghoshit nahi’. Inferred-date disclosure: report me karyakram ki exact tareekh nahi di gayi, isliye prakashan-tithi (2026-10-08) li gayi hai. Report me ‘detailed various regional works’ ke roop me aaye Rs 4.90 crore Pandameru bridge, Rs 2 crore Prasannayapalli bridge, Rs 1.65 crore park aur Rs 2.68 crore mandir vikas me MLA ki vyaktigat bhoomika report me spasht nahi — isliye ye is entry ka hissa nahi.',
    period: '2024-2029',
  },
];

// bandaru-sravani-sree — Bandaru Sravani Sree, TDP, Singanamala (SC), Ananthapuramu.
// Mined 2026-10-18. RESULT: 0 works + 0 negatives (khali profile).
// Pehchan pakki (src/data/andhra.ts): slug bandaru-sravani-sree, TDP, Singanamala (SC),
// 16th AP VS 2024-2029, first-time MLA; D/o B. Ravi Kumar; halafname me 0 mamle.
// Fund: AP CDP allocation official GO/budget se unverified — allocated: null (andhra.ts record).
//
// REJECT-LOG (padhe gaye, reject kiye gaye items):
// 1. The Hans India (06 Oct 2026): "Govt committed solely to state development: Minister Keshav"
//    (thehansindia.com/news/cities/anantapur/govt-committed-solely-to-state-development-minister-keshav-1129315)
//    — Finance Minister Payyavula Keshav ne Singanamala Mandal me kaam lokarpan kiye, MLA sirf
//    "alongside MPs, MLAs" maujood thi; Kuthuleru bridge (Rs 3.50 crore) ka lokarpan mantri ka tha,
//    MLA ki vyaktigat bhoomika report me NAHI — dusre neta ke karyakram me maujoodgi = REJECT.
// 2. The Hans India (04 Oct 2026): "Ground-breaking ceremony held for cattle sheds under Palle Panduga 3.0"
//    (thehansindia.com/news/cities/anantapur/ground-breaking-ceremony-held-for-cattle-sheds-under-palle-panduga-30-prog-1128545)
//    — District Collector O. Anand ke SAATH Palle Panduga 3.0 / VB-G RAM G ke tahat cattle sheds ka
//    ground-breaking (Bandamidapalli village). Rs 3 crore swikriti ka dawa scheme-fund ka hai,
//    vyaktigat lokarpan/shilanyas NAHI — sarkari abhiyaan ka keval shubharambh = REJECT.
// 3. Deccan Chronicle (~Sept 2025): "Lokesh Promises Help In Funds Flow To Rural Development Trust"
//    (deccanchronicle.com/southern-states/andhra-pradesh/lokesh-promises-help-in-funds-flow-to-rural-development-trust-1905742)
//    — BC Minister S. Savitha ki adhyakshata me 6 MLAs (Bandaru Sravani sahit) ka pratinidhi-mandal
//    RDT ke FCRA renewal ke liye Education Minister Nara Lokesh se mila. Sirf maang/yachana —
//    dastaveji nateeja NAHI, NGO ka vishay (seat ke bahar ki sanstha bhi ho sakti hai) — REJECT.
// 4. Deccan Chronicle DC Online Team (30 Nov 2024): "Bandaru Sravani Sri Distributes Pensions
//    Under NTR Bharosa Programme" — welfare pension vitaran karyakram; raahat/welfare vitaran,
//    bhautik sarkari sanrachna ka lokarpan NAHI — REJECT.
// 5. NDTV (29 Aug 2025): "In Andhra, Chandrababu Naidu's Party Workers Protest Against Own MLA"
//    (ndtv.com/andhra-pradesh-news/in-andhra-chandrababu-naidus-party-workers-protest-against-own-mla-9179914)
//    — Singanamala me TDP karyakartaon ne apni hi MLA (Bandaru Sravani Sree) ke khilaf MPDO
//    Bukkarayasamudram me virodh kiya ("We don't want our MLA" / "Save TDP"); antrik factionalism
//    (mandal convener appointments, leadership disputes). Koi FIR/chargesheet/janch ya nyayik
//    vikas report me NAHI — party karyawahi/faction akele negative NAHI = negative NAHI.
// 6. Deccan Chronicle (07 Feb 2026, updated 2026-02-07 19:14 GMT):
//    "Black Magic Material Found Outside Singanamala MLA's Residence"
//    (deccanchronicle.com/amp/southern-states/andhra-pradesh/black-magic-material-found-outside-singanamala-mlas-residence-1935720)
//    — Anantapur ke Aravind Nagar me MLA ke ghar ke bahar kaale-jaadu ki samagri mili; do agyat
//    vyakti Swift car me nimbu/safed sarson phenk kar bhag gaye; Two Town police janch kar rahi hai.
//    MLA isme LAKSHYA (target) thi, aaropi NAHI — FIR me uska naam aaropi ke roop me NAHI =
//    negative NAHI. Usne kaha ki ghatna ko gambhirta se nahi le rahi, Singanamala ke vikas par dhyan hai.
// 7. The Hindu (10 Apr 2023): "TDP Dalit leader from Singanamala 'humiliated' by party colleague"
//    (thehindu.com/news/national/andhra-pradesh/tdp-dalit-leader-from-singanamala-humiliated-by-party-colleague/article66717583.ece)
//    — PRE-TERM (April 2023; MLA bani June 2024). Yuva Galam padayatra ke dauraan TDP neta
//    Keshav Reddy ne unhe dhakka diya (video viral). Woh peedit thi, aaropi NAHI — pre-term,
//    koi Jun 2024+ legal development nahi = negative NAHI.
// 8. Times of India (Dec 2023) + The Hindu (Jun 2023): Singanamala MLA Jonnalagadda Padmavathi
//    (purv MLA, YSRCP) ke paani/sinchai ke kaam — GALAT NETA (predecessor, pre-term) = REJECT.
// 9. "Bandaru Satyanarayana Murthy" (Oct 2023 giraftari, Anakapalli) — GALAT PEHCHAN (dusra vyakti,
//    Singanamala seat nahi) = negative NAHI; pehchan-sakht rule lagaya gaya.
// 10. Deccan Chronicle (Newslocker mirror): "Give Me Books, Not Bouquets: TD MLA Bandaru Sravani's
//    Appeal to Party Activists" — 2023-24 ki report (last crawl 853 days ago se); PRE-TERM, aur
//    dawa/appeal-type — REJECT (pre-term).
//
// RETRY-LEADS: koi nahi — khul-ne-wale saare whitelist pages padhe gaye; YouTube/syndication/Telugu
// portal/TG Telugu press sources whitelist-bahar hain (unverified content), isliye use NAHI kiye gaye.
// Whitelist outlets par in-depth search me seat-level personal lokarpan/shilanyas/itemized swikriti
// ya Vidhansabha-prashn ke dastaveji nateeje ka koi report NAHI mila.
//
// FOUNDATION FLAG: koi party/seed correction nahi — record (TDP, Singanamala (SC), 2024-2029) sahi hai.
andhraWorks['bandaru-sravani-sree'] = [];


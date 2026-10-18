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

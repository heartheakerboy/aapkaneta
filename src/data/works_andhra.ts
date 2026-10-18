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

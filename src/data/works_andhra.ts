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


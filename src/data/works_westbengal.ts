// West Bengal — neta-war kaam (works) ka placeholder.
// Mining baad me hogi: MLA kshetra-vikas nidhi ke tahat vikas karyon ke record
// jama karke yahan jode jayenge. Abhi khaali export — all.ts me wiring live hai, koi page nahi tootega.
// Karyakaal: 18th West Bengal Vidhan Sabha, 2026-2031.
// Fund tathya: Bidhayak Elaka Unnayan Prakalpa (BEUP) — vartaman Rs 1 crore/seat/varsh (June 2026 budget se;
// isse pehle Rs 70 lakh FY 2024-25 se, usse pehle Rs 60 lakh). Sirf established-source tathya jode jayenge.
// Whitelist (West Bengal): The Hindu, Indian Express (incl. newindianexpress.com), Hindustan Times,
// NDTV, India Today, Times of India, The Telegraph, PTI (established outlet par).
export const westbengalWorks: Record<string, any[]> = {};

// ============================================================================
// BATCH 1 (Cooch Behar + Alipurduar + Jalpaiguri + Kalimpong + Darjeeling — 5/23 jile)
// ============================================================================

// --- Cooch Behar ---

// WEST BENGAL — Mekliganj SC — Dadhiram Ray (BJP)
// Karyakaal: sirf May 2026+ (sapath/padbhara 4 May 2026 — Wikipedia/ECI). Period: '2026-2031'.
// Mining date: 2026-10-19. Whitelist outlets par kai rounds search kiye gaye.
//
// REJECT-LOG (dadhiram-ray):
// 1. ANI story 6 June 2026 "Attempted infiltration foiled by BSF at border, says Bengal BJP MLA Dadhiram Ray" (Cooch Behar, ANI via dailyprabhat.com/devdiscourse aggregators) — MLA ne Changrabandha/Mekhliganj me India-Bangladesh seema ka daura kiya, BSF ki suraksha-pareshani par bayan. SIRF DAURA/NIRIKSHAN + bayan — koi bhautik kaam nahi; REJECT (sirf nirikshan/daura). Source bhi aggregator; ANI mool page whitelist outlet par khola-padha nahi gaya.
// 2. Telegraph India 30 Nov 2025 (Mamata Malda meeting story) me "BJP leader Dadhiram Roy" ka zikr — Changrabandha land port ke paas truck-stage par police se behas; PRE-TERM (May 2026 se pehle) + koi kaam nahi; REJECT.
// 3. Chunav coverage (Indian Express/HT/BT/Economic Times, May 2026) — jeet ki khabar, kaam nahi; REJECT (event nahi, kaam nahi).
// 4. Negatives: myneta.info 2026 halafname me 16 criminal cases (2012-14, Mekhliganj PS — IPC 147/148/149/323/325/427/143/506/341/186/353/328/379/509/34) — PRE-TERM mamle; May 2026 ke baad koi nyayik vikas (chargesheet/giraftaari/aadesh) whitelist source par nahi mila. Halafname ke purane pending mamle akele negative NAHI — REJECT.
// 5. Vidhansabha prashn/sanction list/GO-backed swikriti — Mekliganj seat ke naam par whitelist outlets me koi dastaveji nateeja nahi mila.
// Khali profile: May 2026 me padbhara sambhalne ke baad ~5.5 mahine me whitelist me koi valid seat-kaam publish nahi hua.
westbengalWorks['dadhiram-ray'] = [];

// WEST BENGAL — Mathabhanga SC — Nishith Pramanik (BJP)
// Pehchan: Mathabhanga (SC) se jeet (1,43,340 vote, 57,090 margin — TOI/Economic Times, result 4 May 2026);
// 9 May 2026 ko Suvendu Adhikari sarkar me cabinet mantri ke roop me shapath (Telegraph India, 10.05.26);
// portfolio: North Bengal Development + Youth Services and Sports (Telegraph/PTI, 11-12 May 2026).
// SAKHT MANTRA-NIYAM laagu: sirf Mathabhanga SEAT ke vyaktigat kaam entry banenge; North Bengal Development/
// Sports/Youth vibhag ke rajya-stariye faisle, kendriya mantri-kaal (2021-2024) ke kaam, sarkari yojnaon ke
// rajya-ailaan — sab REJECT. Karyakaal sirf May 2026+. Period: '2026-2031'.
// Mining date: 2026-10-19. Whitelist outlets par 8+ search rounds (The Hindu, Indian Express, HT, NDTV,
// India Today, TOI, Telegraph India, PTI-carrying outlets); 1 Telegraph page poora kholkar padha gaya.
//
// REJECT-LOG (nishith-pramanik):
// 1. Telegraph India 20.09.2026 (page kholkar padha) — Madhupur Temple (Cooch Behar) ke vikas par Assam CM
//    Himanta Biswa Sarma ki yatra; Pramanik sirf upasthit the; Assam ne Rs 35 crore swikrit kiye; Sarma ne
//    DAWA kiya ki Pramanik aur CM Adhikari ne atirikt Rs 30 crore ka VAADA kiya. REJECT: (a) vaada/ghoshna
//    akele — koi dastaveji swikriti/lokarpan/shilanyas nahi; (b) CM ke saath sanyukt mantri-stariya mamla,
//    vyaktigat seat-bhoomika nahi; (c) Madhupur Mathabhanga AC ke bahar (Mathabhanga AC = Mathabhanga
//    municipality + Mathabhanga-II + Hazrahat I/II + Pachagarh; Madhupur Dinhata kshetra me hai).
//    URL: https://www.telegraphindia.com/west-bengal/assam-grants-rs-35-crore-for-madhupur-temple-two-states-join-to-develop-place-linked-to-srimanta-sankardev-himanta-prnt/cid/2180777
// 2. nationpress.com / TOI video mirror (~May 2026) — Messi Kolkata event chaos me Aroop Biswas par FIR;
//    Sports Minister ke roop me Pramanik ne fresh probe aur fan-refund ka nirdesh diya. REJECT: (a) janch ka
//    mantri-stariya aadesh, bhautik sanrachna/lokarpan/shilanyas/prashn-nateeja/sanction-list/GO-swikriti me
//    se koi nahi; (b) Salt Lake, Kolkata — Mathabhanga seat ke bahar; (c) page sirf non-whitelist mirrors par
//    khula, whitelist mool page khola-padha nahi gaya.
// 3. ETV Bharat 22.09.2026 — CM Adhikari ne Cooch Behar me BSF ko 210 acre zameen dene ki ghoshna ki;
//    Pramanik prashasanik baithak me upasthit the. REJECT: (a) CM ka faisla, Pramanik ki vyaktigat bhoomika
//    nahi; (b) rajya/mantri-stariya ghoshna akele; (c) non-whitelist outlet.
// 4. Telegraph India 13.10.2026 — Nasya Sheikh samuday ke sangathan ne Pramanik se milkar indigenous-status
//    ki maang rakhi. REJECT: maang/baithak akele, koi dastaveji nateeja nahi — kaam nahi.
// 5. Telegraph India 10.05.2026 — mantri ke roop me shapath (Brigade Parade Ground). REJECT: event/samarooh,
//    seat-kaam nahi.
// 6. Telegraph India 12.05.2026 / PTI 11.05.2026 — portfolio aavantan (North Bengal Development + Youth
//    Services & Sports). REJECT: vibhag-souprad, seat-kaam nahi.
// 7. Chunav coverage (Indian Express/HT/TOI/Economic Times, March-May 2026) — umeedvaari ghoshna, jeet ki
//    khabar, 16 criminal cases wala PTI affidavit story (The Week, 03.04.2026). REJECT: (a) chunav-event,
//    kaam nahi; (b) 16-mamle wali story PRE-TERM (April 2026) aur sirf halafnama-reporting — May 2026 ke baad
//    koi nyayik vikas nahi, isliye negative-entry ke niyam me bhi fit nahi hoti.
// 8. lawstreet.co story (2026 me re-crawl hui) — SC ne 2018 attempt-to-murder case me giraftari se suraksha
//    di. REJECT (negative-bar): mool ghatna January 2024 ki hai (Justices Trivedi/Mithal bench), PRE-TERM;
//    May 2026+ me is mamle ka koi nyayik vikas whitelist par nahi mila. Outlet bhi whitelist me nahi.
// 9. millenniumpost.in 22.08.2025 — 2018 murder case me Dinhata court me peshi. REJECT: PRE-TERM + rejected
//    outlet; May 2026+ me koi vikas nahi.
// 10. devdiscourse 03.04.2026 / theweek.in PTI 03.04.2026 — 16 criminal cases (murder, rioting sahit).
//     REJECT (negative-bar): PRE-TERM (April 2026) halafnama-reporting; May 2026+ me whitelist par koi nayi
//     FIR/chargesheet/janch/adalati vikas nahi mila.
// 11. BSF-seema daura, chunav-prachar ke daave (Dailyhunt/TOI SIR rally coverage March 2026) — daura/bayan
//     ya pre-term; kaam nahi; REJECT.
// 12. Vidhansabha prashn/sanction list/GO-backed swikriti — Mathabhanga seat ke naam par whitelist outlets me
//     May 2026+ ka koi dastaveji nateeja nahi mila.
//
// Negatives: MAY-2026+ me MLA khud aaropi ho aisa koi FIR/chargesheet/janch ya nyayik vikas (aadesh/notice)
// whitelist par nahi mila — negative-entry SHUNYA. 16 purane mamle (2018-2024) pre-term hain aur unme May
// 2026 ke baad ka koi vartaman vikas whitelist me prakashit nahi hua.
//
// Khali profile: 9 May 2026 ko mantri-pad sambhalne ke baad ~5.5 mahine me whitelist media me koi valid
// Mathabhanga seat-kaam (vyaktigat lokarpan/shilanyas, prashn-nateeja, itemized sanction, GO-swikriti)
// prakashit nahi hua. Mantri hone ke kaaran unki khabrein zyadatar vibhag/rajya-stariye rahi hain.
westbengalWorks['nishith-pramanik'] = [];

// RETRY-LEADS:
// (a) WB Vidhansabha ke naye satra (2026) ki question-list me Mathabhanga/North Bengal Development par
//     Pramanik ke prashn/ashwasan dhoondho — dastaveji nateeja mile to 'news' badge entry ban sakti hai.
// (b) Telegraph India ke Cooch Behar correspondent ki Mathabhanga-desk stories (Oct-Dec 2026) me
//     lokarpan/shilanyas track karo — mantri aksar sanyukt karyakram karte hain; vyaktigat bhoomika + seat
//     verify karna lazmi.
// (c) North Bengal Development vibhag ki GO/sanction lists me Mathabhanga-II/Hazrahat/Pachagarh ke itemized
//     kaam dhoondho — GO-backed swikriti mile to valid entry.
// (d) Madhupur Rs 30 crore vaada (Telegraph 20.09.2026) — future me GO/sanction aaye to dobara check karo;
//     lekin Madhupur seat ke bahar hai, isliye tab bhi entry nahi banegi.

// sukumar-ray — 0 works + 0 negatives
// Pehchan pakki: Cooch Behar Uttar (SC, Cooch Behar jila), BJP —
// Winner 2026: 1,55,327 vote; runner-up Partha Pratim Ray (AITC, 84,943) ko 70,384 maton se haraya.
// Do baar ke MLA (2021 + 2026); pesha business, Patlakhawa High School (1987).
// Karyakaal: 18th WB Vidhan Sabha, May 2026+ (2026-2031) — isse pehle ki ghatna/kaam entry NAHI.
// Naam-trap: 2026 ballot par 3 aur ummidwar "Sukumar Roy" naam se khade the (sabhi IND);
// whitelisted media "Sukumar Roy" likhta hai, chunav record "Sukumar Ray" — seat verify
// karke dono ko ek hi MLA (Cooch Behar Uttar) mana gaya. Sukumar Ray (1887–1923, lekhak)
// aur doosre naam-humsafar case-record wale vyakti is MLA se bilkul alag hain.
// Whitelisted sources me May 2026+ ki koi entry-layak khabar nahi mili — sirf chunav
// results, party-gatividhiyan aur pre-term parivar-mamla (sab REJECT-LOG me).

westbengalWorks['sukumar-ray'] = [];

// REJECT-LOG (sukumar-ray, mined 2026-10-19)
// 1. The Telegraph (31.07.26, khola aur padha) — "Ire at TMC rural head over 'cut money', BJP forms panchayat board in Cooch Behar": Takagachh-Rajarhat panchayat (Cooch Behar-II block) me naye BJP board ke gathan ke dauraan MLA maujood the; "administrative paralysis ... restore governance" wala bayan. Ye party-sangathan ka kaam hai — koi bhautik sanrachna ka shilanyas/lokarpan nahi, koi fund/sanction disclosed nahi — REJECT (party program).
// 2. Millennium Post (29 Jun 2026) — "Cooch Behar: Swollen Torsa inundates nearly 200 houses": MLA ne badh-prabhavit Haripur (Madhupur GP, Cooch Behar Block II) me tarpulin baante aur adhikariyon se baat ki. Source whitelist me NAHI + daan/rahat REJECT.
// 3. The Telegraph (05.07.25) + TOI (04.07.25) — Raju Dey shooting case: MLA ke beto (pehle bade bete ki giraftari, phir chhote bete Subhankar Roy + driver Uttam Gupta ki giraftari; Telegraph version me "Dipankar Roy" naam) ki giraftari hui. MLA KHUD FIR ke 4 aaropiyon me NAHI — negative ke liye "FIR-aaropi column me naam nahi = NAHI". Ghatna July 2025 (pre-May-2026) aur parivar ka mamla — May 2026+ me MLA se judi koi nyayik vikas ki khabar nahi mili — negative ke roop me REJECT.
// 4. The Telegraph (01.07.23) — "Cooch Behar: Six BJP MLAs protest against arrest of party candidate and workers": SP office par dharna — pre-term (Jul 2023) + party protest — REJECT.
// 5. Blogspot aggregator (Dec 2025) — tatkalin CM ka Cooch Behar infra push (104 projects, Rs 363 crore): pre-May-2026 + aggregator + doosre neta ka karyakram — REJECT.
// 6. TOI constituency page / Indian Express / Business Today / ABP Live 2026 result pages: sirf chunav parinam aur background — REJECT (chunav parinam kaam nahi).
// 7. Naam-trap case records: legalauthority.in "Sukumar Roy Vs State of West Bengal" (SC appeal, 304 Part I r/w 34 IPC, hatya ka purana mamla); casemine "SUKUMAR ROY v. THE STATE OF WEST BENGAL" (dukan-kabze ka civil/criminal vivaad); indiankanoon "Dipankar Roy vs State Of West Bengal" (2021, Malda, nabalig apharan/balatkar appeal) — teenon ke vyakti MLA se alag hain — REJECT.
// 8. ThePrint/PTI (Apr 2026) — "WB polls phase 1: Candidates report asset surge": MLA ki sampatti 300%+ badhne ka ullekh — chunav-halafnama ki khabar, kaam nahi — REJECT.
// 9. The Statesman (21.09.26) — CM Suvendu Adhikari ka Cooch Behar daura, Murti nadi par bridge ka lokarpan: Jalpaiguri jila + doosre neta ka karyakram — seat ke bahar — REJECT.
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. 18th WB Vidhan Sabha ke prashn-uttar record (wbsla.gov.in) me "Sukumar Roy" ke prashn dhoondo — dastaveji nateeja/ashwasan mile to whitelisted news coverage ke saath valid entry ban sakti hai (credit capped).
// B. MLA LAD / Vidhayak Elaka Unnayan fund ki itemized sanction lists — whitelisted source ya sarkari GO mile to entry ban sakti hai.
// C. Bengali/local print media me shilanyas/lokarpan ki khabrein ho sakti hain, lekin whitelist se bahar hain — unse mining mat karna.

// WEST BENGAL — Cooch Behar Dakshin — Rathindra Bose (BJP)
// Pehchan pakki: first-time MLA, 2026 me Cooch Behar Dakshin se 1,08,482 vote (52.81%) —
// Avijit De Bhowmik (AITC, 85,198) ko 23,284 maton se haraya; CA (RSS-prishthabhoomi).
// 15 May 2026 se 18th WB Vidhan Sabha ke Speaker — SAKHT NIYAM: Speaker-pad ke karye
// (House karyawahi, nirnay, daure) works NAHI; sirf Cooch Behar Dakshin seat ke kaam.
// Karyakaal: sirf May 2026+. Period: '2026-2031'. Mining date: 2026-10-19.
// Whitelist outlets (Telegraph India, HT, Indian Express, NDTV, TOI, India Today, PTI)
// par kai rounds search kiye gaye.
//
// REJECT-LOG (rathindra-bose):
// 1. Speaker chunaav 15 May 2026 (HT/Indian Express/Business Standard-PTI) — unopposed
//    Speaker chune gaye; REJECT (Speaker-pad karya; seedha pad-kaam, seat-kaam nahi).
// 2. Telegraph 18.05.26 — Speaker banne ke baad Cooch Behar town me dhanyavaad rally +
//    Madan Mohan Temple me puja; REJECT (samaroh/daura; koi bhautik sanrachna-kaam nahi).
// 3. Telegraph 04.08.26 — Jamuna Dighi (Debibari) cleanliness drive: district
//    administration + municipality ke saath barish me jal-kumbhi hatana; REJECT
//    (abhiyan-shubharambh/daura — safai abhiyan hai, sanction/fund/GO wala bhautik
//    vikas-kaam nahi).
// 4. Telegraph 06.08.26 — Cooch Behar town me jalbharav areas ka daura, prashasan ke
//    action-plan ka ashwasan; REJECT (nirikshan/daura akela + sirf ashwasan).
// 5. Telegraph 30.08.26 — Cooch Behar ke dighis rejuvenation initiative: Jamuna/Daongarai/
//    Rajmata/Narsingha Dighi me machhli ke bachche chhodna, puja, Bairagi + Sagar Dighi
//    par Varanasi-style Ganga aarti ki ghoshna (31.08.26 aarti coverage bhi); REJECT
//    (abhiyan-shubharambh + dharmik samaroh — koi vyaktigat lokarpan/shilanyas, fund
//    ya GO-backed sanction disclose nahi).
// 6. SANKALP inauguration by Speaker (coochbeharpolice.wb.gov.in GoodStories —
//    non-whitelist source) — Cooch Behar District Police ka initiative; REJECT
//    (dusre vibhag ka karyakram + source whitelist bahar).
// 7. Siliguri Times 13.08.26 — Muraliganj High School (Phansidewa, Darjeeling jila) me
//    blood donation/health camp + classroom ka udghatan; REJECT (source non-whitelist
//    + seat ke bahar — Phansidewa Cooch Behar Dakshin me nahi).
// 8. Telegraph 31.08.26 — Rs 20 crore sanction Rasikbeel Mini Zoo upgrade (Tufanganj 2
//    block); REJECT (forest minister Manoj Oraon ka mantri-kaam, Bose ki bhoomika
//    disclose nahi + sthal seat se bahar).
// 9. Telegraph 20.09.26 — Madhupur Satra ko Rs 35 crore (Assam CM Himanta + Bengal
//    minister Nisith Pramanik ka daura/ailaana); REJECT (Bose ka ullekh hi nahi —
//    dusre netaon ka karyakram).
// 10. IANS/lokmattimes 09.10.26 — 10 rebel TMC MLAs ki disqualification hearing me
//    Speaker ke roop me procedural fresh application ka aadesh; REJECT
//    (Speaker-pad karye).
// 11. PTI/IANS 03.10.26 — Bose hospital me bharti (seene me dard); REJECT
//    (vyaktigat swasthya samachar, kaam nahi).
// 12. Pre-term: Telegraph 29.03.26 — BJP candidate Rathindra Nath Bose par SIR ko
//    lekar virodh; PRE-TERM (March 2026) + na FIR, na kaam; REJECT (negative nahi).
// Negatives: koi personal FIR/chargesheet/janch ya May 2026+ me nyayik vikas
// whitelist outlets me nahi mila. Halafnama detail (myneta) worker ne verify nahi
// kiya — zaroorat padi to parent cross-check kare. Speaker-pad karye negatives me
// nahi gine gaye.
// RETRY-LEAD: dighi-safai/punruddhar program me agar GO/fund-backed sanction +
// Bose ki swikriti role disclose ho (filhal sirf abhiyan coverage hai) to
// 'Paani'/'Any' entry possible. Filhal entry-layak kuch nahi — khaali profile.
westbengalWorks['rathindra-bose'] = [];

westbengalWorks['sabitri-barman'] = [];

// REJECT-LOG (sabitri-barman — Sitalkuchi (SC), BJP, karyakaal May 2026–2031):
// 1. TOI live blog (13:11 IST, 4 May 2026): "Barman, 53, a 12th Pass candidate from the SC category, carries two criminal cases on record" — chunaav-ginti ke din ki prishthbhoomi jankari; May 2026+ me in halafnama cases ka koi nyayik vikas (FIR/chargesheet/adheshnirnay) whitelisted media me report nahi hua — negative entry nahi banta (pre-May-2026 cases par May 2026+ vikas nahi), REJECT.
// 2. ABP Live (5 Apr 2026): chunav-prachar ke dauran Shikarpur Panchmile (Mathabhanga Block 1) ke paas sadak durghatna — gaadi paltne se Barman aur driver ghayal; pre-May-2026 ghatna, kaam nahi, REJECT.
// 3. Mathrubhumi English (29 Apr 2026): Sitalkuchi me Barman ki gaadi par kathit hamla/TMC samarthako par aarop — pre-term chunav hinsa, kaam nahi, REJECT.
// 4. Telegraph India (21 Sep 2026): Bangshibadan Barman (GCPA general secretary) ka Cooch Behar-vs-Kamtapur bayan — dusra vyakti (samnam matra), Sabitri Barman se sambandh nahi, REJECT.
// 5. orangeprime.news (Sep 2026): Torsha nadi katav me "Sabitri Barman, one of the affected residents" Cooch Behar town ka prabhavit nivasi — MLA nahi, pehchan seat se nahi, kaam nahi, REJECT.
// 6. indiankanoon.org/casemine.com (4 Apr 2011; 25 Jul 2018): "Sabitri Barman vs State of West Bengal" / CRA cases — Malda (Habibpur PS 107/2002) aur Dinhata (PS 99/2008) ke alag-alag Sabitri Barman; MLA (Cooch Behar, janm 1973) se sambandh nahi, REJECT.
// 7. FreePressJournal (23 Sep 2026) / nationpress (Sep 2026): CM Suvendu Adhikari ke Cooch Behar administrative-meeting ghoshnaen (dharmik paryatan, pul, chai bagan bonus, Rs 50 crore Rajbangshi academy) — CM ke karyakram/ghoshna, Sabitri Barman ki vyaktigat bhoomika ka ullekh nahi, REJECT.
// 8. India Today/Indian Express/NDTV/TOI (4 May 2026): Sitalkuchi result — 1,44,367 votes, Harihar Das (AITC) par 25,278 margin se jeet — jeet ghatna hai, kaam nahi, REJECT.
// 9. Vidhansabha prashn: 2026 ke WB Assembly session me Sabitri Barman ke naam par koi dastaveji prashn-nateeja/ashwasan whitelisted sroto par nahi mila, REJECT (kuch mila hi nahi).
// 10. 2021 Sitalkuchi goli-kaand ki purani khabrein (PTI lead-rounds, TMC tribute) — unme Barman aaropi ke roop me ullekhit nahi (firing CAPF jawans dwara thi), task warning ke anusaar negative nahi banaya, REJECT.
// 11. RETRY LEADS: whitelisted sources par May 2026–Oct 2026 me Sabitri Barman ke naam ka koi lokarpan/shilanyas/swikriti/GO/prashn-nateeja report nahi hua — khaali profile imaandari; agle pass me wbassembly.gov.in question-bank ya Cooch Behar Zilla Parishad/LAD sanction orders par ek specific search try kiya ja sakta hai.

// QA: 9 web searches (works/inauguration/foundation/question/affidavit-cases + Bengali term queries); saare results pre-term chunaav coverage, anya vyakti, ya dusre netaon ke karyakram nikle; entries 0, rejects 11 (1 retry lead).

// wb1 — sangita-roy (Sitai SC, Cooch Behar, TMC)
// Pehchan pakki: 2026 Vidhan Sabha chunav me Sangita Roy (AITC; ballot naam 'Sangita Roy Basunia') ne
// Sitai (SC) seat se 1,28,188 vote (48.31%) paakar BJP ke Ashutosh Barma (1,25,467) ko 2,721 maton se haraya (TOI).
// Nov 2024 upchunav me bhi jeeti thin (1,65,984 vote, 1,30,636 ka antar). Pati: Jagadish Chandra Barma Basunia
// (Cooch Behar MP). Telegraph unhe 'the Trinamool MLA of Sitai Assembly constituency' likhta hai — pehchan pakki.
// Karyakaal: 18th WB Vidhan Sabha, May 2026+ (period '2026-2031').
// Mining (2026-10-19): whitelisted sroton par May 2026+ ke koi VALID works nahi mile (sirf chunav coverage,
// SC-certificate row, aur ek review-meeting nimantran). 1 negative entry (janch charan, stage-accurate).

westbengalWorks['sangita-roy'] = [
  {
    title: 'Sitai ki TMC MLA Sangita Roy ke SC certificate ki satyata par prashasanik janch — BDO ke SC/ST/OBC cell ne niwas par notice chipkaya, MLA sunvai me pesh nahi huin; pati MP ke mutabik mamla Calcutta High Court me sub judice',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Telegraph',
    sourceUrl: 'https://www.telegraphindia.com/west-bengal/sitai-mlas-sc-tag-under-scanner-after-certificate-verification-notice-prnt/cid/2172273',
    date: '2026-07-29',
    note: 'The Telegraph (29 Jul 2026, khola-padha gaya) ke mutabik Cooch Behar ke Sitai block prashasan ne Monday ko Sangita Roy (Trinamool MLA, Sitai Assembly constituency) ko notice diya — Sitai ke BDO karyalaya me SC/ST/OBC cell ke saamne Tuesday ko vyaktigat roop se pesh hokar apne caste certificate se judi sabhi dastavej dene ka nirdesh; notice MLA ke niwas par chipkaya gaya. (Monday/Tuesday = 27/28 Jul 2026 — 29 Jul ki report se inferred, reasoning yahan disclose hai.) Roy Tuesday ki sunvai me pesh NAHI huin. BDO ke notice ke mutabik unke naam par 26 June 2004 ko jari SC certificate ki satyata ki pushti ke liye prarambhik janch (preliminary inquiry) shuru ki gayi hai — janch West Bengal SC/ST Identification Act 1994 aur rajya pichhda-varg kalyan vibhag ke disha-nirdeshon ke tahat. Prishthabhoomi: BJP ummeedvar Asutosh Burma ne haal ke Vidhan Sabha chunavon se pehle certificate ki vaidhata par saval uthaye the; matdan ke baad unhone Dinhata ke SDO ke paas shikayat darj karke janch ki maang ki. Burma ne certificate radd karne aur nishpaksh janch ki maang dohraayi (\u201cWe want an impartial investigation and appropriate action in accordance with the law\u201d). MLA se sampark nahi ho saka. Unke pati, Cooch Behar MP Jagadish Chandra Barma Basunia ne phone par kaha ki mamla Calcutta High Court me sub judice hai, isliye ve BDO karyalaya nahi aayin, aur ve is samay unke saath Delhi me hain. Stage-accurate: janch abhi notice/prarambhik-janch charan me hai; kisi FIR/chargesheet ka ullekh nahi; janch report abhi lambit. Jawab disclosed: MLA pesh nahi huin; pati ne sub-judice ka karan diya.',
    period: '2026-2031',
  },
];

// REJECT-LOG (sangita-roy, mined 2026-10-19)
// 1. The Telegraph (21 May 2026, khola-padha) — 'Government invites Opposition MLA to review meeting in rare North Bengal outreach': BJP sarkar ne Uttarkanya (Siliguri) me CM Suvendu Adhikari ki prashasanik review meeting me TMC MLA Sangita Roy ko nimantran diya; ve parivar ke sadasya ke ilaj ke liye Delhi me hone ke kaaran upasthit nahi ho sakin. REJECT — sirf nimantran aur gair-haziri; koi bhautik kaam, fund, sanction ya vyaktigat bhoomika nahi.
// 2. PM ka Rs 1,010 crore city gas distribution pariyojna ka shilanyas, Alipurduar/Cooch Behar (taazatv/shree1news, ~May 2025) — non-whitelist srot + kendriya pariyojna + pre-term; MLA ki bhoomika nahi. REJECT.
// 3. CM Mamata Banerjee dwara Cooch Behar me 104 pariyojnaon ka lokarpan (Rs 363 crore) + 59 ka shilanyas (Rs 176 crore) (millenniumpost/kalimpongonlinenews blogspot, Dec 2025) — non-whitelist + CM ka kaam + pre-term. REJECT.
// 4. New Indian Express (13 Sep 2026) — 'Rebel Trinamool faction MP Basunia, MLA Sangeeta Roy face protests on return to Sitai': virodh me bhrashtachar ke aarop PATI (MP Jagadish Chandra Barma Basunia) par lagaye gaye, MLA par nahi; koi FIR/janch ka ullekh nahi. REJECT — 'MLA KHUD aaropi' nahi; parivar ka mamla. (Note: NIE = New Indian Express; task whitelist me 'Indian Express' hai — prakashan alag hai, whitelist-nishchitta nahi; vaise bhi negative-rule fail.)
// 5. ETV Bharat (9 Aug 2026) — 'Fear of protests, egg attacks? TMC rebel MP, MLA wife haven’t returned home': non-whitelist; virodh ki aashanka par report, koi kaam/FIR nahi. REJECT.
// 6. TOI/HT/millenniumpost/HTSyndication ki Nov 2024 upchunav jeet ki khabrein (1,30,636 ka antar) — chunav coverage, pre-term (May 2026 se pehle), koi kaam nahi. REJECT.
// 7. eprocurement/firsttender listings (Sitai/Mathabhanga/Mekhliganj blocks me JJM solarization, sadak tenders) — sarkari tender suchnayein; MLA ki vyaktigat bhoomika (shilanyas/lokarpan/maang) disclosed nahi. REJECT.
// 8. The Statesman (Jul 2026) — 'Sitai MLA skips hearing at BDO office, SC certificate row deepens': wahi SC-certificate janch ki story jo Telegraph (whitelisted) par entry ban chuki hai; The Statesman whitelist me NAHI hai, isliye alag entry nahi. (Usme HC sunvai 24 Jul aur agli sunvai 21 Aug ka ullekh hai — whitelisted follow-up mile to stage-update possible.)
// 9. India Today/NDTV/The Hindu/Indian Express/PTI par May 2026+ me Sangita Roy ke kisi vyaktigat kaam (lokarpan/shilanyas/MLA-nidhi/Vidhan Sabha prashn) ki koi coverage nahi mili — kai search angles (foundation stone, inauguration, development, assembly question) aazmaaye gaye.
// 10. Naam-trap check: 'Sangeeta Roy' naam ki doosri vyaktiyon ki khabrein nahi mili; Telegraph ki dono stories me pehchan 'Trinamool MLA of Sitai Assembly constituency, Cooch Behar' se pakki hai — koi mix-up nahi.
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. SC-certificate mamle me Calcutta High Court ki agli sunvai (21 Aug 2026, Statesman ke mutabik) ya BDO janch ki final report — Telegraph/TOI par whitelisted follow-up mile to negative entry ka stage-update ban sakta hai.
// B. Vidhan Sabha records (assembly.wb.gov.in) par Sangita Roy ke prashn mil sakte hain, lekin entries ke liye whitelisted srot par dastaveji nateeja/ashwasan chahiye hoga.
// C. PTI (established outlet) par Sitai/SC-certificate row ki coverage mile to corroborating srot ban sakta hai.

// ajay-ray (Dinhata, BJP) — REJECT-LOG: whitelist (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, The Telegraph (India), PTI via established outlet) me May 2026–Oct 2026 tak Dinhata seat par MLA Ajay Ray ka koi VYAKTIGAT lokarpan/shilanyas, fund-disclosed itemized sanction, dastaveji Vidhansabha-prashn nateeja, ya GO-backed swikriti nahi mili — sab REJECT. MLA ne 4 May 2026 ko pad sambhala (Wikipedia/Hindu/HT/IE/TOI chunav results), karyakaal sirf ~5.5 mahine ka hai.
// (1) The Telegraph (16 Nov 2025, kholkar padha): Ajay Roy (tab Cooch Behar BJP district general secretary) Babupara, Dinhata me girafftar — police ke anusar Bihar chunav jeet ka bina-anumati victory rally taiyaar karne ki shikayat par; giraftari ke samay police se jhadap, 'obstructing police duty' ka mamla darj, bail plea khariz, 19 November tak nyayik hirasat. Roy ne ise 'unjustly arrested' bataya; Suvendu Adhikari ne political vendetta ka aarop lagaya. — PRE-TERM (May 2026 se pehle); May 2026+ me is mamle ka koi nyayik vikas whitelist media me nahi mila, isliye negative-rule fail, negative NAHI.
// (2) The Telegraph (27 Mar 2026, snippet; page fetch 403 — retry-lead): TMC ne BJP ummidwar Ajay Roy aur unke suraksha karmiyon par TMC karyakarta Rana Banik ko ward 12 me bandook dikhakar dhamkane ka aarop lagaya; TMC ne Dinhata police me shikayat di, police janch kar rahi thi; BJP ne aaropon ka khandan kiya. — PRE-TERM (chunav prachar-kal) + sirf shikayat, FIR/chargesheet/janch ka dastavez nahi; May 2026+ me koi vikas nahi, negative NAHI.
// (3) Indian Express / Loksatta ummidwar suchi (May 2026): Ajay Ray ke halafname me '20' mamle darj — sirf affidavit-ginti, FIR-aaropi column wala dastavez whitelist media me sourced nahi; affidavit-mamle akele negative-rule se negative NAHI.
// (4) Ei Samay (16 Oct 2026, Bangla; NON-whitelist): Ajay Ray ne 25 Sep 2026 ko Dinhata thane me likhit shikayat di — aarop ki 4 April (2025) ki shaam unki anupasthiti me tatkalin MLA Udayan Guha ke uksane par kuch logon ne ward 2 ke ghar par bomb/agneyastra se hamla kiya; Udayan Guha ko adalat ne 3 din ki police hirasat di. — Yahan MLA KHUD SHIKAYATKARTA hai, aaropi nahi (aaropi Udayan Guha hai); negative-rule 'sirf MLA khud aaropi' par fail, aur source bhi whitelist me nahi. negative NAHI. (Telegraph/TOI ne bhi Udayan Guha ki Kolkata se giraftari ki khabar di — June 2016 ke dhokhadhadi mamle me — ye Udayan Guha par hai, Ajay Ray par nahi.)
// (5) The Hindu (site search): Dinhata par 2023 Governor visit aur 2023 BJP karyakarta hatya ki khabren — pre-term, Ajay Ray ka naam tak nahi. REJECT.
// (6) TOI/HT/IE/India Today/NDTV (site search): sirf 4 May 2026 ke chunav-nateeje (Ajay Ray ne Udayan Guha ko 17,447 maton se haraya, 1,38,255 votes) — chunav jeet kaam nahi. REJECT.
// Negatives: upar (1)–(4) me koi bhi negative-rule poora nahi karta (pre-term bina May-2026+ vikas, shikayat-matra, affidavit-matra, ya MLA shikayatkarta). Koi negative entry nahi. Jawab disclosed wali sthiti nahi aayi.
// Foundation cross-check: works_karnataka.ts project me 'ajay-ray' key ka koi pehle se maujood data scratch me nahi mila (wb* files me sirf roster JSON hain) — koi antar nahi.
westbengalWorks['ajay-ray'] = [];

// West Bengal — Natabari MLA Girija Shankar Ray (BJP), karyakaal May 2026+.
// Assumed office 4 May 2026 (Wikipedia/ECI poll results, 2026 West Bengal Assembly election).
// May 2026+ me whitelist sources (The Hindu, Indian Express, Hindustan Times, NDTV, India Today,
// Times of India, The Telegraph, PTI) me MLA ke koi vyaktigat lokarpan/shilanyas, Vidhansabha
// prashn-nateeja, itemized sanction list ya GO-backed swikriti coverage nahi mili.
// Negatives bhi koi nahi — May 2026+ me MLA khud aaropi ho, aisa koi FIR/chargesheet/janch
// ya nyayik vikas whitelist me nahi mila.
// REJECT-LOG (girija-shankar-ray):
// - 2026 election victory coverage (TOI Natabari result, Indian Express result/live pages, HT live updates) — chunav, kaam nahi.
// - Telegraph 01.04.26 (BJP 4th candidate list: Girija Shankar Roy, GCPA convener, Natabari ticket) — pre-term candidacy news.
// - Indian Express Natabari constituency page: candidate data me 'Cases 3' dikhata hai — pre-election affidavit disclosure, May 2026+ ka koi nyayik vikas nahi; negative rule fail.
// - Millennium Post (dissent over 3rd candidate list) — pre-term + non-whitelist; reject.
// - Search variants 'Girija Shankar Roy'/'Ray' + inauguration/foundation stone/development/road/hospital/FIR/assembly question (May-Oct 2026) — whitelist me koi relevant page nahi.
// - 'Girja Shankar Roy vs State of U.P.' (indiankanoon) — Allahabad HC matter, alag vyakti (UP), pehchaan mix nahi hua.
// - RG Kar cremation TOI story (ex-TMC MLA Ghosh) — dusra vyakti; Natabari MLA ka koi lena-dena nahi.
// RETRY-LEAD: assembly session records (WB Legislative Assembly questions/answers portal) me Natabari seat se uthaye gaye prashn check karo; local Telegraph India north-Bengal editions periodically.
westbengalWorks['girija-shankar-ray'] = [];

// Malati Rava Roy — Tufanganj (AC-9), BJP, Cooch Behar district, West Bengal
// 2026 chunav: BJP ticket par 4 May 2026 ko jeet (1,22,525 vote; Shibsankar Paul
// ko 26,457 se haraya — Indian Express/NDTV/Hindustan Times).
// 1 June 2026 se Minister of State (Independent Charge): Women & Child
// Development & Social Welfare, Self Help Group & Self Employment, Programme
// Monitoring (The Hindu / Telegraph India / HT / NDTV, June 2026).
// Tenure window: May 2026+ (period '2026-2031').
// Naam-trap check: "Malati Rava" (Telegraph short form) aur "Malati Rava Roy"
// ek hi vyakti hain — seat Tufanganj, Cooch Behar verify ho gayi.
westbengalWorks['malati-rava-roy'] = [];
// REJECT LOG (Malati Rava Roy, Tufanganj):
// NOTE: June 2026 se ye mantri hain; unki saari documented sarkari gatividhi
// statewide mantri-faisla ya abhiyan-shubharambh hai — "sirf Tufanganj seat,
// vyaktigat bhoomika" rule me koi entry qualify nahi hui.
// 1. Annapurna Yojana — beneficiary verification statements, "1.10 crore women
//    get benefits, 26 lakh applicants rejected" (Telegraph India, 2 Jul 2026;
//    she quoted as minister) — REJECT: statewide mantri-faisla; Tufanganj seat
//    se koi sambandh nahi.
// 2. Annapurna third-instalment announcement (The Statesman, Aug 2026) — REJECT:
//    whitelist source NAHI + statewide.
// 3. "61.3 lakh women apply online for Annapurna Yojana" (TOI) — unke mantri
//    roop me quotes — REJECT: statewide mantri statement; seat par vyaktigat
//    kaam nahi.
// 4. Kanya Ratna Diwas / Beti Bachao Beti Padhao launch + 181 helpline + PALNA
//    (ETV Bharat, 14 Aug 2026) — REJECT: CM ne launch kiya; abhiyan-shubharambh;
//    Malati ko sirf event organize karne ke liye dhanyavaad mila — statewide.
// 5. Swachha mobile app pilot me Tufanganj municipality (Telegraph, 31 May 2026)
//    — REJECT: event urban development mantri Agnimitra Paul ne host kiya;
//    Malati ka koi vyaktigat bhoomika nahi; abhiyan-shubharambh.
// 6. Cabinet expansion / portfolio allocation (HT 1 Jun 2026; Telegraph 10 Jun
//    2026; The Hindu 1 Jun 2026; NDTV; PTI via established outlet) — REJECT:
//    mantri-shapath koi vikas-kaam nahi; statewide portfolio.
// 7. Geriatric care proposal meeting, Bikash Bhavan (IBG News, 9 Sep 2026) —
//    REJECT: whitelist source NAHI; sirf prastav prapt karna (maang/prastav
//    akela) — koi swikriti/karya nahi.
// 8. 50-bedded hospital Tufanganj announcement (Mamata Banerjee, Dec 2025;
//    millenniumpost/blogspot) — REJECT: TENURE FAIL (pre-May-2026) + source
//    whitelist me nahi + ghoshna dusre neta ki.
// 9. Tufanganj 2026 election result live pages (Indian Express/HT/NDTV/OneIndia)
//    — chunavi khabar, vikas-kaam nahi. REJECT.
// 10. "Meet the 7 women ministers" (indiatvnews) — REJECT: whitelist me nahi.
// 11. LPG woes poll story (Indian Express, March 2026) — TENURE FAIL + chunav.
// 12. "Cooch Behar TMC offices vandalised, finger at BJP" (TOI, 4 Aug 2019) —
//     TENURE FAIL (2019).
// NEGATIVE CHECK (May 2026+ me koi qualifying negative nahi mila):
// N1. National-anthem FIR against 11 BJP MLAs incl. her, Hare Street PS
//     (The Statesman, 1 Dec 2023) — PRE-TENURE; May 2026+ me koi nyayik vikas
//     (adalat aadesh/notice/chargesheet) whitelisted source me nahi mila.
// N2. myneta.info 2021 affidavit: 9 declared cases (2018-2020) — PRE-TENURE,
//     May 2026+ vikas nahi.
// N3. Biswajit Talukdar (Tufanganj-4 BJP mandal VP) extortion/abduction arrest
//     (Telegraph, 17 Aug 2026; PTI) — aaropi DOOSRA VYAKTI; MLA khud aaropi
//     nahi — negative criteria ("sirf MLA KHUD aaropi") fail.
// N4. BJP suspends 22 functionaries over extortion (PTI via Telegraph, 5 Aug
//     2026) — unka naam list me nahi; party-karyawahi akeli negative nahi.
// N5. Annapurna protests outside her Cooch Behar residence (Telegraph, 21 Aug
//     2026) — virodh-pradarshan; FIR/chargesheet/janch nahi; woh khud aaropi
//     nahi — negative NAHI.
// Kul: 0 entry qualified, 12 leads reject, 5 negative-leads reject. Retry-lead: koi nahi.


// --- Alipurduar ---

// manoj-kumar-oraon — 1 works + 0 negatives
// Pehchan pakki: Kumargram (ST) (No. 10), Alipurduar jila, BJP —
// 2026 me 143,044 vote (57.95%); Rajeev Tirkey (TMC, 90,167) ko 52,877 maton se haraya.
// 1 June 2026 se Paschim Bengal ke van evam paryavaran cabinet mantri (CM Suvendu Adhikari).
// SAKHT NIYAM lagoo: vibhag ke rajya faisle (ESZ cut, WBSEDCL prastav, tigress release, chetaavniyan) works NAHI —
// sirf Kumargram seat ke bheetar ka kaam. Karyakaal: May 2026+ (2026-2031).

westbengalWorks['manoj-kumar-oraon'] = [
  {
    title: 'Kumargram block (Buxa Tiger Reserve east division) me Khoardanga se Dhowlajhora aur Shiltong tak manav-haathi sangharsh rokne ke liye pehle charan me 21 km solar hanging fence lagane ka van vibhag ka nirnay — anumaanit lagat Rs 65 lakh, ghoshna khud van mantri Manoj Kumar Oraon ne ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Telegraph',
    sourceUrl: 'https://www.telegraphindia.com/west-bengal/solar-hanging-fence-to-curb-human-elephant-conflict-in-alipurduar-prnt/cid/2169387',
    date: '2026-07-07',
    note: 'The Telegraph ki post-decision report ke mutabik Paschim Bengal van vibhag ne Kumargram block (Alipurduar jila) me, Buxa Tiger Reserve ke east division me, Khoardanga se Dhowlajhora aur Shiltong tak pehle charan me 21 km solar hanging fence lagane ka faisla kiya (kul pehchana hua kshetra ~27 km). Anumaanit lagat Rs 65 lakh. Do haathiyon ki avaidh bijli-baadh se maut (Shalkumarhat/Jaldapara aur Volka-Barobisha/BTR kshetra) ke baad ye kadam uthaya gaya; mantri Oraon ne kaha — "We are worried over the recent deaths of two elephants. To reduce the human-elephant conflict, we will use this technology". Credit capped: ye van vibhag ka nirnay hai — Oraon ne mantri ke roop me ghoshna ki, lekin koi GO number, shilanyas ya lokarpan srot me disclosed nahi, isliye credit isi ghoshit nirnay tak seemit hai. Tithi: Telegraph print-view me prakashan-tithi print nahi hui; isi khabar ka samaan-detail wala millenniumpost sanskaran 7 July 2026 ka hai (millenniumpost whitelist se bahar — sirf tithi cross-check ke liye) aur Telegraph crawl-stamp "101 days ago" (~July 2026) bhi isi dauraan ka sanket deta hai — isliye tithi 2026-07-07 inferred batayi gayi hai, reasoning yahan disclose hai.',
    period: '2026-2031',
  },
];

// REJECT-LOG (manoj-kumar-oraon, mined 2026-10-19)
// 1. The Telegraph — "Eco Park to come up amid sal trees in Alipurduar" (29.07.26, page kholkar padha): Barobisha (Kumargram block) me Sal Bagan me 10 acre par Nagar Van Yojana ke tahat "proposed" eco park, "initially Rs 5 crore would be spent" — sirf yojana/ghoshna, koi swikriti-GO/shilanyas disclosed nahi — REJECT (ghoshna akeli).
// 2. The Telegraph — "Forest department's glare on illegal power fences after seven elephant deaths" (06.10.26): haathiyon ko bijli-baadh se maarne walon ke ghar ka WBSEDCL se bijli connection 5 saal tak katne ka prastav — rajya-vyapi vibhag-nirnay, seat-specific kaam nahi — REJECT (vibhag ka rajya faisla).
// 3. Siliguri Times — "Eco-Sensitive Zone limit to be reduced from 5 km to 1 km" (15 Jul 2026): non-whitelist outlet bhi + rajya-vyapi faisla — REJECT.
// 4. The Statesman — "Three elephants shifted to Buxa ahead of tiger rehabilitation" (tigress release 2 Oct; CM + Union minister maujood): event + dusre neta ke karyakram; lokarpan-shilanyas nahi — REJECT.
// 5. The Statesman — "Suvendu set for two visits to north Bengal" (World Rhino Day 22 Sep Alipurduar, CM visit): samaroh/karyakram — REJECT.
// 6. The Telegraph — "Manoj Kumar Oraon vows zero tolerance for environmental crimes" (20.07.26): interview/quotes, koi bhautik kaam ya fund disclosed nahi — REJECT.
// 7. The Statesman — "warns of strict action against illegal tree felling" (13 Oct 2026; Dima Tea Estate manager giraftari ki chetaavni): chetaavni/janch-adessh, kaam nahi; waise bhi statesman whitelist se bahar — REJECT.
// 8. UNI (uniindia.com) "Buxa row: minister warns against illegal tourist entry" (29 Jun 2026): UNI whitelist me nahi — REJECT.
// 9. Millenniumpost — "Cabinet berths for 3 Alipurduar MLAs" (11 Jun 2026): mantri-pad ki ghoshna — pad vikas-kaam nahi; outlet bhi whitelist se bahar — REJECT.
// 10. The Telegraph — "Cratered roads get MLAs' goat; Speaker proposes dropbox" (12.06.25): Kumargram ki kharab sadak par MLA ka prashn — assembly-prashn valid category hota, LEKIN June 2025 pre-term hai (May 2026+ rule) — REJECT.
// 11. Lokmat Times/News18/IANS — Oct 2025 me Kumargram me baadh-rahat bantate samay MLA par hamla: pre-term + MLA khud victim (aaropi nahi) + rahat-vitaran (daan/rahat category) — works REJECT; negative NAHI.
// 12. Millenniumpost — solar fence story ka doosra sanskaran (21 km, Rs 65 lakh, Volka-Barobisha–Marakhata): non-whitelist — entry Telegraph wali bani hai — REJECT.
// 13. Tripura Star/PIB-style — PM dwara Alipurduar CGD project ka shilanyas (May 2025): pre-term + dusre neta ka karyakram — REJECT.
//
// NEGATIVES reply: koi entry nahi. Indian Express candidate page (2026) me "Cases 2" dikhata hai, lekin ye ADR/MyNeta affidavit-data hai — FIR/chargesheet/janch ka stage-accurate vivaran kisi whitelisted outlet me nahi; MyNeta 2013/2016/2021 affidavits me "No criminal cases" — precedent ke mutabik affidavit-cases alone negative NAHI. May 2026+ me unke khilaf koi FIR/adalt-aadesh/janch ka koi record nahi mila.
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. Telegraph solar-fence article (cid/2169387) ki print-view me prakashan-tithi nahi dikhi — tithi 2026-07-07 inferred hai; live browser se page kholkar asli tithi confirm karo (millenniumpost sanskaran 7 July 2026 ka hai).
// B. Eco park Barobisha (Telegraph 29.07.26): abhi sirf ghoshna — Nagar Van Yojana ke tahat aupcharik shilanyas ya swikriti-GO aate hi valid entry ban sakti hai; future scan me dhyan rakho.
// C. Jayanti/Banachhaya rehabilitation township (~450 parivar, Buxa tigress project ke tahat — The Statesman 07 Jul 2026): Santalbari/Jayanti kshetra Kumargram block me hai — township ka physical kaam shuru ho to future me valid ho sakta hai.

// WEST BENGAL — Kalchini (ST) — Bishal Lama (BJP)
// Karyakaal: sirf May 2026+ (2026 chunav me jeet 4 May 2026; MoS ke roop me sapath 1 June 2026 — Telegraph India / TOI). Period: '2026-2031'.
// Mining date: 2026-10-19. Whitelist outlets (The Hindu/IE/HT/NDTV/India Today/TOI/Telegraph/PTI) par kai rounds search; har prayog page kholkar padha gaya.
//
// REJECT-LOG (bishal-lama):
// 1. TOI, city/kolkata — "Bishal Lama: 1st Gorkha minister in 5 decades" (articleshow/131449855.cms) — mantri-niyukti aur jeet ki profile; bhautik sanrachna ka lokarpan/shilanyas nahi; REJECT (kaam nahi).
// 2. Telegraph India, 15.07.26 — "Government push to set up land port at Jaigaon" (cid/2170092) — MoS ke roop me Lama ka bayan: "30 acres already handed over to LPAI", forex counter/Customs office ka irada. Khola-padha: sirf mantri-bayan/ghoshna; koi vyaktigat lokarpan/shilanyas nahi, fund disclosed nahi, aur 30-acre handover 2021 ka (pichhli sarkar) hai. REJECT (ghoshna akeli).
// 3. The Statesman, 2026-07-05 — "TMC had no intention to develop north Bengal, says BJP MLA Bishal Lama" — whitelist me nahi + sirf interview/bayan; REJECT (source + kaam nahi).
// 4. Millennium Post pieces (11 Jun 2026 portfolio allocation; 15 Jun 2026 Gotibari land port revival; 29 Aug 2026 Bonochhaya school/health-centre) — millenniumpost whitelist me nahi; REJECT (source).
// 5. ETV Bharat (Oct 2026) — chaibagan bonus na dene par Lama ki "stern warning" ke baad 5 bagan managers ki giraftari — source non-whitelist; bayan/chetavani hai, GO-backed swikriti ya lokarpan nahi; REJECT.
// 6. Election coverage (TOI result page, rediff candidate list, hindusthansamachar) — jeet/jeet-antar ki khabar, kaam nahi; REJECT.
// 7. Telegraph India, 08.02.22 — "Arrested TMC leader sacked from party post" (cid/1850978): isme aaropi PASSANG Lama (TMC) hai — naam-trap, Bishal Lama se sambandh nahi; REJECT.
// 8. Negatives: myneta.info 2021 halafname me 6 purane cases (Kalchini PS 119/17-2017, Kalchini 132/13-2013, Jaigaon PS 08/11-2011, RPF Hasimara 06/10-2010, Jaigaon PS 420/09-2009, Kalchini PS 484/08-2008; IPC 143/186/353/188/506/323/325/34) — SAB pre-May-2026; May 2026 ke baad koi FIR/chargesheet/giraftaari/adalesh vikas whitelist source par nahi mila. Halafnama ke purane pending cases akele negative NAHI — REJECT. Isliye negatives: koi entry nahi; reply-status: koi jawabi vikas report nahi hua.
// 9. Vidhansabha prashn/sanction-list — Kalchini seat ke naam par whitelist me koi dastaveji nateeja nahi mila (is file ki ek entry ke alawa).
westbengalWorks['bishal-lama'] = [
  {
    title: 'Kalchini block ke Subhashini tea estate me Torsha nadi ke kinare 2.2 km lambe embankment ke nirman ke liye sarkar ne Rs 14 crore swikrit kiye; bagan prabandhan ki appeal par mantri aur Kalchini MLA Bishal Lama ke hastkshep ke turant baad swikriti ki khabar aayi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Telegraph India',
    sourceUrl: 'https://www.telegraphindia.com/west-bengal/fake-caste-certificate-arrest-rural-body-chief-husband-nabbed-from-jalpaiguri-prnt/cid/2167286',
    date: '2026-06',
    stage: 'swikriti',
    note: 'Telegraph India ki report (Subhashini tea garden, Kalchini block, Alipurduar) ke mutabik rajya sarkar ne Torsha nadi ke kinare 2.2 km lambe embankment ke nirman ke liye Rs 14 crore swikrit kiye — uddeshya October 2025 ki bhishan baadh me nadi ka rukh badalne ke baad chaibagan me ho rahe katav/baadh se suraksha. Bagan prabandhan ne haal hi me Minister of State (Home and Hill Affairs) aur Kalchini MLA Bishal Lama se hastkshep ki appeal ki thi; report ke anusar iske turant baad rajya ne fund swikrit kiya. Shrey-spashtikaran: swikriti rajya sarkar ki hai; MLA ki bhoomika prabandhan ki appeal par hastkshep karne wale ke roop me documented hai, ekmatra kaaran nahi. Date inferred: print page par prakashan-tithi nahi dikhi; isi prakaran ki saath wali Telegraph story (cid/2166619) 22 June 2026 ko prakashit thi aur ye khabar usi embankment prakaran ki follow-up hai — isliye June 2026 (month-level) liya gaya. Stage ka sach: swikriti reported hai; monsoon me kaam poora hone ki alag pushti nahi mili.',
    period: '2026-2031',
  },
];

westbengalWorks['paritosh-das'] = [];

// REJECT-LOG (paritosh-das — Alipurduars, BJP; karyakaal May 2026 se):
// Aadhar: Paritosh Das (BJP) ne Alipurduars seat Suman Kanjilal (AITC) ko 70,420 votes se harakar jeeti; pad-grahan 4 May 2026 (Wikipedia/ECI; TOI election liveblog 4-6 May 2026).
// Whitelist (The Hindu, Indian Express, HT, NDTV, India Today, TOI, The Telegraph India, PTI) me May 2026–19 Oct 2026 tak Paritosh Das ke naam se Alipurduars seat par koi VYAKTIGAT lokarpan/shilanyas, fund-disclosed itemized sanction, ya GO-backed swikriti NAHI mili — profile khaali rakhi.
//
// (1) The Telegraph (27 Jul 2026, Anirban Choudhury): "Bengal government expands Alipurduar pool plan" — ward 18 ka swimming pool (2024 me TMC MLA Suman Kanjilal ne prastavit kiya, tab mantri Udayan Guha ne Rs 2.50 crore ghoshit kiye; nirmaan end-2025 me shuru). Chunav ke baad MLA Das ne site ka nirikshan kiya, aakar chhota bataya, kaam rukwaya; north Bengal development mantri Nisith Pramanik se charcha ke baad vibhag 25x15m se 50x25m (national-standard) design badalne aur "additional funds" dene par raazi hua — lekin atirikt rashi ka koi aankda disclose NAHI, aupcharik design/budget manzoori abhi baki (article: "expected to resume after the revised design and budget receive formal approval"), aur MLA ka koi vyaktigat lokarpan/shilanyas nahi — nirikshan + maang + (Vidhansabha-bahar) mantri-ashwasan ka sangam. Vidhansabha-prashn ka dastaveji nateeja nahi, fund disclosed nahi → REJECT.
// (2) The Telegraph (10 Aug 2026): "Alipurduar MLA Paritosh Das pitches medicinal plants cultivation in closed tea gardens of Dooars" — Das ne band/chai-baganon me aushadhiya paudhon ki kheti ka prastav Union Ayush ministry ko state Ayush department ke zariye BHEJA — bheja hua prastav akela = maang/prastav akela → REJECT.
// (3) The Telegraph (~6 Aug 2026): "Alipurduar, Cooch Behar roads under water after heavy overnight rain" — jalbharav par Das ka bayaan: municipal affairs department ne sheher ke comprehensive drainage plan par DPR manga hai ("will be submitted to the department shortly") — DPR maangi gayi, abhi jama bhi nahi; koi sanction/fund nahi → prakriya-charan, REJECT.
// (4) Indian Express (17 Mar 2026) + The Telegraph (Mar 2026): BJP ummidwar ghoshna par party karyakartaon ka virodh/office me tod-phod — pre-term (May 2026 se pehle) + party politics, na kaam na negative (party karyawahi akele negative NAHI) → REJECT.
// (5) TOI/ABP/Zee/Business Today (May 2026): chunav parinaam live coverage — chunav reporting, kaam nahi → REJECT.
// (6) PM Modi City Gas Distribution shilanyas, Alipurduar (29 May 2025, Rs 1010cr+) — pre-term + PM ka karyakram (dignitaries: Majumdar, Adhikari, MP Manoj Tigga; MLA ka zikr tak nahi) → REJECT.
// (7) Millennium Post via HT syndication (June 26 — TMC mantri Udayan Guha ke Rs 25cr udghatan; TMC regime = pre-term): millenniumpost reject-list me hai + dusre neta (mantri) ka karyakram + pre-term → REJECT.
// (8) The Telegraph (21 May 2025): Mamata Banerjee Rs 700cr projects launch north Bengal — pre-term + CM ka karyakram → REJECT.
// (9) theindianawaaz (~Jan 2026): PM dwara rail projects ka shilanyas/dedication — pre-term + PM ka karyakram + non-whitelist → REJECT.
// (10) ETV Bharat (6 Sep 2026): Alipurduar–Kolkata AC bus ka udghatan paryatan mantri Shankar Ghosh ne kiya — non-whitelist + dusre neta (mantri) ka karyakram → REJECT.
// (11) shuru.co.in (Bengali aggregator): MLA ki municipality baithak (drainage masla) — non-whitelist + sirf baithak/daura → REJECT.
//
// NEGATIVES:
// (a) loksatta.com election data (2026 halafname): Paritosh Das ne 2026 me 0 criminal cases declare kiye — halafname akele negative-rule fail.
// (b) casestatus.in (Spl Case 06/2020, Alipore Special Court): "Paritosh Das" aaropi darj — Alipore (Kolkata) court, Alipurduars seat se koi pehchan-link nahi; court-record aggregator established media nahi; naam-trap ka jokhim → pehchan fail, REJECT.
// (c) courtkutchehry/indiankanoon ke anya "Paritosh Das" mamle (Tripura 1999 ox-theft case; Contai school-secretary writ 2022) — alag vyakti/sthan, naam-trap → REJECT.
// (d) Established media me May 2026+ karyakaal me MLA khud kisi FIR/chargesheet/confirmed jaanch me aaropi nahi; koi in-term nyayik vikas nahi — koi negative entry nahi.
//
// RETRY-LEADS (bhavishya ke worker ke liye):
// R1. Swimming pool follow-up: 27 Jul 2026 article me "construction will resume within the next couple of months" tha (~Sep 2026) — 19 Oct 2026 tak whitelist media me revised pool ke nirmaan-punararambh ya kisi bade fund-swatikaran ki koi follow-up khabar NAHI mili; baad me punah khojo (agar MLA ne vyaktigat bhoomipoojan/shilanyas kiya to entry ban sakti hai).
// R2. Medicinal-plants prastav (10 Aug 2026): Union Ayush ministry ka jawab 19 Oct 2026 tak whitelist media me nahi dikha — jawab/swikriti aaye to punah moolyankan.
// R3. BEUP/MLA-fund istemal: "Paritosh Das" + BEUP/MLA fund par koi sourced tathya nahi mila — itemized sanction list mile to entry bane.
// Note: page kholne me koi whitelist URL fail nahi hua — sabhi uddhrit pages safaltapurvak khole gaye; koi retry-lead "khul na saka" wala nahi hai.

// West Bengal — Falakata (SC) MLA Dipak Barman (BJP) — works mining, 2026-2031 term.
// Pehchaan: Dipak Barman = Deepak Barman (Telegraph/TOI me spelling "Deepak"/"Dipak Burman" bhi), Falakata seat se pakka (Alipurduar).
// Karyakaal: May 2026+ (2026 me punah-chunaav; 2021-2026 pichhla karyakaal — sirf May 2026+ ghatnayein).
// SAKHT NIYAM: mantri hain (School Education + Housing + MSME & Textiles, 1 June 2026 se) —
// sirf Falakata seat ke kaam entry banenge; vibhag ke rajya faisle works NAHI.

// REJECT-LOG (dipak-barman): 10+ searches across whitelist outlets (Telegraph, TOI, Indian Express, The Hindu,
// HT, India Today, NDTV, PTI) me May 2026+ ki Falakata-seat-specific koi documented kaam nahi mila.
// Ministerial portfolios (School Education/Housing/MSME-Textiles, Telegraph 11 June 2026) — pad hai, seat ka kaam nahi.
// Rajya-stariya shiksha ghoshnaayein (933 unused schools repurpose — TOI 21 Sep 2026; TET annual recruitment — nationpress/Oct 2026;
// NEP 2020 NCERT MoU — Telegraph 24 Aug 2026; Uttarkanya office attendance — Statesman) — vibhag ke rajya faisle, SAKHT NIYAM se reject.
// Dhupguri-Falakata NH-31D four-lane sanction Rs 1606.14 crore (Gadkari X post, HT Syndication 16 Oct 2026) — Centre ki swikriti,
// Barman ki vyaktigat bhoomika nahi — MP/Centre ka kaam, reject. Kadambini tea estate hamla (Apr 2026, Telegraph/TOI) — Barman SHIKAAR
// hain, aaropi nahi; 6 giraftaar hamlaavar the; Barman ne shikayat tak nahi ki — negative NAHI. Assembly suspension (Mar 2025,
// Indian Express) — pichhle karyakaal ka House discipline, pre-May-2026. 2026 affidavit ke 7 pending cases (Indian Express) —
// halafnama akele negative nahi; May 2026+ me koi nyayik vikas (FIR/chargesheet/aadesh) nahi mila. Election-duty showcause
// (Apr 2026, Telegraph) — procedural error, EC ne khud sweekari; kaam/negative nahi. Seminar guest-of-honour (Baikuntha College
// Falakata, Aug 2026) — samaroh/presence, sanrachna kaam nahi. RETRY-LEAD: The Hindu/PTI coverage of any Falakata-block
// infrastructure lokarpan/shilanyas naming Barman personally, ya Vidhansabha me unke prashn ka dastaveji nateeja — abhi koi nahi.
westbengalWorks['dipak-barman'] = [];

// laxuman-limbu — Madarihat (ST), Alipurduar, BJP — 0 works + 0 negatives
// Pehchan pakki: wb_roster.json — seat No. 14 Madarihat (ST), Alipurduar jila;
// winner Laxuman Limbu (BJP), 1,02,488 vote, Jayprakash Toppo (AITC, 61,578) ko
// 40,910 maton se haraya; 18th West Bengal Vidhan Sabha, karyakaal May 2026+ (2026-2031).
// (Wikipedia “Laxuman Limbu” page: “Assumed office May 2026”; ECI Poll Results, 4 May 2026.)
// Telegraph candidate-list reporting me naam “Lakshman Limbu” (Morcha leader, GJM) bhi
// milta hai — dono spelling par mining ki gayi.
// May 2026–Oct 2026 ke beech English whitelist media me MLA ki VYAKTIGAT bhoomika wala
// koi lokarpan/shilanyas, vidhansabha-prashn-nateeja, itemized sanction ya GO-backed
// swikriti NAHI mila — isliye array khaali hai. Tamam candidates REJECT-LOG me darj hain.

westbengalWorks['laxuman-limbu'] = [];

// REJECT-LOG (laxuman-limbu, mined 2026-10-19)
// 1. The Telegraph — “Ticket row sparks BJP unrest across north Bengal, leaders issue ultimatum”
//    (published ~Mar 2026, pre-election): Madarihat me BJP samarthakon ne Limbu ke ticket ke khilaaf
//    party office lock kiya; unhe “Morcha leader” bataya gaya. REJECT: pre-May-2026 + koi kaam nahi.
// 2. The Telegraph — “BJP drops Neeraj Zimba, picks Morcha face…” (~Mar 2026): GJM ke Roshan Giri ne
//    kaha “our candidate Lakshman Limbu has also got a ticket from Madarihat”. REJECT: pre-term candidacy.
// 3. bhaskarenglish.in live blog (April 2026): “BJP candidate from Lakshman Limbu alleges TMC people…”
//    — chunav-prachar ka bayan (tea wages/minimum wage maang). REJECT: pre-term + sirf maang/bayan.
// 4. The Telegraph — “Candidates from all major political parties in Alipurduar’s Madarihat Assembly
//    meet tea workers” (14 Apr 2026, Jubilee Club, Birpara): sabhi ummidwaron ka karyakram.
//    REJECT: pre-term + abhiyan/samaroh.
// 5. Result-reporting (May 2026): The Telegraph “Tea belt in north Bengal retains saffron hold”
//    (06.05.26), Times of India / Indian Express / IndiaTV / Business Today / Oneindia constituency pages
//    — sirf jeet ki khabar, Madarihat seat ka ullekh bhar. REJECT: koi vyaktigat bhoomika nahi.
// 6. The Telegraph — “Suvendu Adhikari puts tea, tourism at centre of North Bengal development push”
//    (23 Sep 2026): CM ne Madarihat block ke Totopara me 1,200 houses ki swikriti ki ghoshna ki;
//    page kholkar padha — MLA ka naam ullekh NAHI. REJECT: dusre neta (CM) ka karyakram.
// 7. ETV Bharat — “Bengal Govt To Build 1,200 Houses For Toto Tribe…” (30 Sep 2026): DM Mayuri Vasu +
//    SP ka Totopara daura; MLA ka ullekh nahi. REJECT: non-whitelist outlet + koi MLA bhoomika nahi.
// 8. The Telegraph — “Two more tea garden managers arrested over allegations of unpaid bonuses”
//    (18 Oct 2026, Birpara/Tulsipara/Dhumchipara/Garganda/Huntapara — sab Madarihat block):
//    bonus-vivad me 5 managers giraftar; MoS Bishal Lama (Kalchini) mauke par gaye — Madarihat MLA ka
//    ullekh NAHI. REJECT: koi vyaktigat bhoomika nahi (MoS doosre neta hain).
// 9. The Telegraph — “Jay Birpara tea garden abandoned over dues, bonus row” (12 Oct 2026, Madarihat block):
//    management ne garden chhoda; BJP-affiliated Bharatiya Tea Workers Union ke Sabin Thapa quoted —
//    MLA ka ullekh nahi. REJECT: koi MLA bhoomika nahi.
// 10. millenniumpost.in — “Madarihat tea gardens workers block Asian Highway 48” (16 Oct 2026):
//     bonus-vivad me highway block. REJECT: non-whitelist + MLA ka ullekh nahi.
// 11. Elephant-attack stories (Oct 2026, Madarihat/Jaldapara kshetra): newsarenaindia, channel6network,
//     millenniumpost, lokmattimes — 4 mautein, lekin sab non-whitelist outlets aur MLA ka koi ullekh/
//     bhoomika nahi. REJECT: non-whitelist + koi vyaktigat bhoomika nahi.
// 12. millenniumpost.in — “Road infra dev gains pace…” (27 Mar 2025): pre-term + poorv MLA
//     Jay Prakash Toppo ke kaam. REJECT: pre-term + non-whitelist + doosre neta ka kaam.
// 13. millenniumpost.in — “From health to highways, CM unveils massive infra push across N Bengal”
//     (9 Dec 2025): tatkalin CM Mamata Banerjee ke lokarpan/shilanyas. REJECT: pre-term + non-whitelist.
// 14. Post-poll violence (May 2026): nationalheraldindia (PTI inputs), educationpost, mediumpulse,
//     business-standard, TOI (“Not allowed to attend rally”) — poori Bengal me hinsa ki khabrein;
//     KISI BHI whitelisted srot me Laxuman Limbu ko aaropi ke roop me naam NAHI diya gaya. Task ke
//     spasht nirdesh ke mutabik (chunav-prachar ki hinsa ko MLA se jodkar negative mat banao jab tak
//     ve khud aaropi na hon) — REJECT as negative.
// 15. Indian Express Madarihat candidate page: Laxuman Limbu ke halafname me “Cases: 1” darj hai —
//     lekin koi FIR/chargesheet vivran nahi, aur May 2026+ me koi nyayik vikas (aadesh/notice/giraftari)
//     whitelist media me report NAHI hua. Task-niyam: pre-May-2026 mamla sirf tab jab May 2026+ me vikas
//     ho. REJECT as negative (open watch-item; neeche retry-lead D dekho).
// 16. uniindia.com — “Tension mounts in North Bengal ahead of Assembly polls” (20 Apr 2026):
//     pre-poll BJP-TMC aarop-pratyaarop; Madarihat ka vishesh ullekh nahi. REJECT: pre-term.
// 17. The Statesman — “Madarihat: TMC snatches win…” (2024 bypoll) aur “Madarihat by-election campaign
//     heats up” (2024, Birpara ROB maang): pre-2026. REJECT: pre-term.
// 18. htsyndication (PTI/Millennium Post) — Madarihat bypoll stories (Oct–Nov 2024): pre-term.
//     REJECT: pre-term.
// 19. “Suvendu Adhikari Buxa Tiger Reserve / three more tigers at BTR” (Telegraph, ~3 Oct 2026):
//     CM ka karyakram (Alipurduar/Kalchini); MLA ka ullekh nahi. REJECT: dusre neta ka karyakram.
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. The Telegraph ke Alipurduar/North Bengal beat (correspondent Anirban Choudhury) me Madarihat/Birpara
//    ki print-online coverage index me poori tarah nahi aati — live browser se telegraphindia.com par
//    “Madarihat” search karke May–Oct 2026 ke articles check karo; MLA ka koi daura/lokarpan/shilanyas
//    mile to valid entry ban sakti hai.
// B. 18th WB Vidhan Sabha ke budget/monsoon sessions (2026) ki proceedings me “Laxuman Limbu” ke
//    sawal — kisi whitelisted outlet ne us par mantri-ashwasan report kiya ho to credit-capped entry banegi.
// C. Bengali outlets (Uttarbanga Sambad, Anandabazar Patrika, Bartaman) me MLA-stariya coverage hoti hai,
//    lekin ve whitelist me NAHI hain — unse mining mat karna.
// D. Negative-watch: halafname ka “Cases: 1” — kisi whitelisted srot me May 2026+ ka FIR/chargesheet/
//    adalati vikas mile to hi stage-accurate negative entry banegi; ab tak kuch nahi mila.


// --- Jalpaiguri ---

// WEST BENGAL — Dhupguri SC — Naresh Roy (BJP)
// Karyakaal: sirf May 2026+ (padbhara 9 May 2026 — Wikipedia/Naresh_Roy; chunav jeet 4 May 2026). Period: '2026-2031'.
// Mining date: 2026-10-19. Whitelist outlets (The Hindu, Indian Express, HT, NDTV, India Today, TOI, The Telegraph, PTI) par 8+ rounds search kiye gaye:
// inauguration/shilanyas/sanction/assembly-question/arrest-FIR sab angles se. Chunav coverage ke alawa koi May 2026+ seat-kaam publish nahi hua.
//
// REJECT-LOG (naresh-roy):
// 1. Times of India, 14 Apr 2026: "Video shows BJP candidate insulting Gandhi, TMC hits out" — chunav se pehle ka vivaad (alleged "deshdrohi" video); Roy ne bayan me misinterpretation bataya.
//    PRE-TERM (May 2026 se pehle) + koi seat-kaam nahi; negative bhi nahi (May 2026+ me koi nyayik vikas/FIR nahi); REJECT (period).
// 2. Millennium Post, 10 Apr 2026: "TMC-BJP clash heightens tension in Dhupguri" — chunav-purva party-clash, Roy ne sit-in protest lead kiya.
//    Non-whitelist source (millenniumpost explicitly reject) + PRE-TERM; REJECT (source + period).
// 3. Bhaskar English (bhaskarenglish.in): "Giland River Erosion Threatens North Kathulia Village... MLA assures inspection" — Dhupguri MLA Naresh Roy ne nirikshan + Irrigation Dept engineers bhejne ka ashwason diya.
//    Non-whitelist outlet (Bhaskar English list me nahi) + ashwason/mang akela (koi bhautik kaam, fund ya dastaveji nateeja nahi); REJECT (source + sirf ashwason).
// 4. ETV Bharat, May 2026: "Tea Workers Look Forward To Higher Wages..." — Dhupguri MLA Naresh Chandra Roy ka bayan (chai-bagan shramikon ke pani/svasthya/sadak ke mudde hal honge).
//    Non-whitelist outlet (etvbharat) + bayan/mang akela (koi vyaktigat lokarpan/shilanyas/sanction nahi); REJECT (source + sirf bayan).
// 5. Chunav coverage (Indian Express, HT, TOI, Business Today, Economic Times, May 2026): jeet (134,798 votes, margin 38,550 vs Nirmal Chandra Roy), candidate-list ("Naresh Chandra Roy") — chunav event, seat-kaam nahi; REJECT.
// 6. Telegraph India purani khabrein (2023 bypoll, subdivision stories, cash-for-job 2021) — Nirmal Chandra Roy ya pehle ki ghatna; is MLA se sambandhit nahi / pre-term; REJECT.
// 7. Name-trap guard: Malda College ke Sanskrit teacher "Naresh Roy" (Telegraph, 2018), Siliguri voter-list wale Naresh Roy (Millennium Post, Dec 2025) — ye sab dusre vyakti; is MLA se jodna GALAT hoga; REJECT.
// 8. Negatives: loksatta.com election-data page par 2026 halafname me 1 case (pre-term); May 2026+ me koi FIR/giraftaari/chargesheet/aadesh/janch whitelist source par nahi mili. Purana halafnama mamla akele negative NAHI; REJECT.
// Khali profile: 9 May 2026 ko padbhara sambhalne ke baad ~5.5 mahine me whitelist me koi valid seat-kaam (lokarpan/shilanyas/sanction/prashn-nateeja) publish nahi hua.
westbengalWorks['naresh-roy'] = [];

// dalim-chandra-roy (Maynaguri SC, BJP) — REJECT-LOG: whitelist (The Hindu, Indian Express, HT, NDTV, India Today, TOI, The Telegraph India, PTI on established outlet) me May 2026–Oct 2026 tak Dalim Chandra Roy ke naam se Maynaguri me koi dastaveji vikas kaam NAHI mila — 8 alag search angles (inauguration/foundation-stone/development/road/school/hospital, Bengali-script, telegraphindia site-restricted, news vertical, TOI constituency page) sab khaali. Mining details: (1) Punjab Kesari / lokmattimes (IANS) — 7 Apr 2026 ko Maynaguri station intersection par campaign ke dauraan sir par chot — pre-term (MLA banne se pehle) + campaign durghatna, kaam nahi, non-whitelist, REJECT. (2) ABP Live 5 Apr 2026 — Kaushik Roy vs Dalim Roy double-nomination/ticket confusion — pre-term party politics, kaam nahi, REJECT. (3) millenniumpost 1 Apr 2026 — BJP candidate replacement (Kaushik Roy se Dalim Roy) — pre-term + non-whitelist (spasht reject list me), REJECT. (4) bharathorizon — May 2026 jeet ki report — chhota portal, non-whitelist, kaam nahi, REJECT. (5) westbengal-tenders.co.in / govttenders.co.in — Maynaguri block ke PMGSY bridge/road tenders (Oct 2026) — tender notice me MLA ki koi vyaktigat bhoomika nahi, non-whitelist, REJECT. (6) thestatesman.com (Mamata projects Rs 440cr, 2025) — pre-term + non-whitelist + MLA ka zikr nahi, REJECT. (7) The Hindu 'One arrested in Jalpaiguri blast case' (2013) — giraftar Chandan Roy, naam-trap (Dalim Chandra Roy nahi), pre-term, REJECT. (8) TOI Maynaguri constituency page — sirf election results/live-updates, koi kaam ki khabar nahi. Negatives: (a) myneta.info halafnama (ADR/ECI-sourced) — 1 declared pending case: Maynaguri PS Case no-427/2014 (GR No-4071/2014), IPC 143/427/447/506, charges NOT framed — 2014 ka purana mamla, May 2026 ke baad koi nyayik vikas nahi, aur halafnama akele (Karnataka batches ki tarah) negative nahi; Indian Express candidate-list 'Cases: 1' bhi election data hai, FIR/news-stage nahi — negative-rule fail, koi negative entry nahi. (b) Whitelist news me FIR/chargesheet/janch ya May 2026+ ka koi nyayik vikas (adalat ka aadesh/notice) nahi mila. Naam-trap QA: giraftar/accused 'Roy' wali khabron me Dalim Chandra Roy nahi the (Chandan Roy — 2013 blast; doosre neta) — inpar kuch nahi lagaya. PEHCHAAN-QA: kaam Kaushik Roy (purv BJP MLA, Maynaguri) ke hon to unpar nahi — inki mining alag worker ki hai. Foundation cross-check: works_westbengal.ts me 'dalim-chandra-roy' ki koi entry pehle se nahi — koi antar nahi. RETRY-LEAD: Maynaguri ke MLA fund/sanction ya lokarpan ki whitelisted outlet coverage (TOI/Telegraph/Express north-bengal desk) mile to entry; Vidhan Sabha me unka prashn/aashwasan documented ho to entry possible.
westbengalWorks['dalim-chandra-roy'] = [];

// WEST BENGAL — batch wb1 (researched 2026-10-19): Jalpaiguri (SC) AC-17.
// MLA: Ananta Deb Adhikary (BJP), karyakaal sirf May 2026+ (office 4 May 2026; vidhansabha oath 13 May 2026).
// Assignment-style lines; merge parent/coordinator karega.

// REJECT-LOG (ananta-deb-adhikary):
// [1] ~13 search queries (May-Oct 2026 kaam): inauguration / foundation stone / sanction / vidhan sabha question /
//     LAD fund / flood visit — whitelisted outlets (The Hindu, Indian Express, HT, NDTV, India Today, TOI,
//     The Telegraph India, PTI) me MLA ke kisi vyaktigat kaam ki khabar NAHI mili. Pehli baar ke MLA hain
//     (advocate, Rajbanshi community), office ko ~5.5 mahine hue, backbencher — sirf election coverage milti hai.
// [2] NAAM-TRAP (Maynaguri wale Ananta Deb Adhikari — bilkul alag vyakti, ex-TMC): (a) New Indian Express + News18,
//     6 Jan 2021 — journalist Somnath Chakraborty ko thappad ka FIR, Mainaguri — Maynaguri MLA ka mamla;
//     (b) The Telegraph, 27 Jul 2022 — SSC scam Group D recommendation letter admission, former TMC MLA Maynaguri;
//     (c) RSP ticket par 15vi Vidhan Sabha me Maynaguri MLA (deprivepeople.org record) — wahi purane Maynaguri neta.
//     Teeno in par nahi lagaye. (Wikipedia disambiguation bhi: "Not to be confused with Ananta Deb Adhikari (Maynaguri MLA)".)
// [3] NAAM-TRAP (Suvendu Adhikari): Sep 2026 Telegraph/Statesman North Bengal vikas stories me CM Suvendu Adhikari
//     ke kaam (bridge lokarpan, 1,200 Toto houses, tea-garden scheme) — surname match par vyakti alag, CM-kaam.
// [4] NEGATIVE: halafnama (myneta.info, 2026) me 1 pending criminal case — IPC 188 (disobedience to order duly
//     promulgated by public servant). May 2026 ke baad koi nyayik vikas (aadesh/notice/sunvai) whitelisted news me
//     NAHI mila — rule ke anusaar halafname ke pending mamle akele negative nahi, aur pre-May-2026 mamle me
//     May 2026+ vikas bhi nahi. Isliye koi negative entry nahi.
// [5] lokmattimes/nationpress/hindusthansamachar, 9 Apr 2026 — candidate ke roop me Abhishek Banerjee ke khilaaf
//     complaint (Kotwali PS, Jalpaiguri): (i) pre-term (April 2026), (ii) MLA complainant hain, aaropi nahi,
//     (iii) teeno sources non-whitelist. REJECT.
// [6] Telegraph, 14 Aug 2026 — Alipurduar zila me BJP sarkar dwara 56 projects par Rs 41 crore sanction:
//     zila-star kaam, Jalpaiguri seat ka nahi, MLA ki vyaktigat bhoomika nahi. REJECT.
// [7] Statesman, 6 Oct 2025 — flood daure par MP Khagen Murmu + MLA Shankar Ghosh par hamla: pre-term + dusre neta.
// [8] The Print, 8 Apr 2026 (PTI) — Nitin Nabin ka Mainaguri roadshow: dusre neta ka karyakram, pre-term.
// RETRY-LEAD: The Telegraph ka Jalpaiguri correspondent beat (North Bengal) MLA ke LAD fund recommendations
// cover kar sakta hai — karyakaal ke 1 saal poore hone par (May 2027) dobara mining karo; tab district LAD lists
// bhi aayengi. Abhi ke liye = [].
westbengalWorks['ananta-deb-adhikary'] = [];

// dinesh-sarkar (Rajganj SC, BJP; Jalpaiguri district; tenure 2026-2031; alias Haradhan Sarkar — BJP candidate list + Telegraph ne dono naam diye) — REJECT-LOG: Whitelist (The Hindu, Indian Express, HT, NDTV, India Today, TOI, The Telegraph India, PTI on established outlet) me May 2026–Oct 2026 tak Dinesh Sarkar ke naam se Rajganj seat me koi vyaktigat lokarpan/shilanyas, itemized sanction list, Vidhansabha-prashn ka dastaveji nateeja, ya GO-backed swikriti NAHI mili. (1) The Telegraph India (whitelist; page KHOLA-PADHA): 'TMC stalled tea garden reopening: Minister alleges obstruction at Raipur estate' (Jul 2026 — page extraction me date stamp nahi mili, search-index ke mutabik ~14 Jul; cid/2169940) — MoS (Labour + PHE) Bhaskar Bhattacharya ne band pade Raipur tea estate ka daura Dinesh Sarkar ke saath kiya; mantri ne kaha state government garden reopen karne ki disha me kadam uthayegi; MLA ne sirf TMC netaon par raajneetik aarop lagaye. Mantri ka karyakram + daura akela — MLA ka vyaktigat lokarpan/shilanyas/sanction nahi, REJECT. (2) The Telegraph India pre-poll piece (Apr 2026) 'In north Bengal's Rajganj and Jalpaiguri, buzz of wrong Trinamool candidate selection' — pre-May-2026 chunaav coverage, REJECT. (3) TOI election liveblog + constituency pages (4 May 2026) — chunaav coverage, kaam nahi, REJECT. (4) RETRY-LEAD (non-whitelist, event valid hota): siliguritimes 17 Aug 2026 — Rajganj Rural Hospital me solar-powered water tank ka lokarpan MLA Dinesh Sarkar ne kiya, lagat ~Rs 3.5 lakh Rajganj Panchayat Samiti fund se (BMOH Dr Rahul Roy maujood). Event VALID hota, lekin source whitelist me nahi — whitelisted outlet (Telegraph/PTI/TOI) ki post-event reporting mile to 'Paani'/'Any' entry banegi. (5) Rejected non-whitelist leads: Durga Puja grant cheques 47 committees ko (13 Oct 2026, siliguritimes) — non-whitelist + sarkari daan/rahat vitaran, REJECT; MLA Cup 2026 day-night football tournament (27 Sep 2026, siliguritimes) — non-whitelist + samaroh/abhiyan-shubharambh, REJECT; ailing former MLA Khageswar Roy se saujanya bhet (29 May 2026, siliguritimes/siligurichronicle) — non-whitelist + daura, REJECT; BDO office me administrative meeting Shikha Chatterjee ke saath (21 May 2026, siliguritimes) — non-whitelist + baithak, koi dastaveji nateeja nahi, REJECT; Ayushman Bharat PM-JAY card distribution karyakram (siliguritimes) — non-whitelist + kendriya yojna ka karyakram, MLA sirf upasthit, REJECT; ETV Bharat (non-whitelist) Bangladesh-detained farmer Dipankar Gope mamla MHA tak pahunchaya (Aug 2026) — non-whitelist + sirf maang/prastav, REJECT; Mar 2026 candidate-protest stories (siliguritimes/siligurichronicle) — pre-term + party-internal vivad, REJECT; millenniumpost hits — whitelist me nahi + Raiganj (alag jagah), REJECT. (6) NAAM-TRAP QA: The Hindu (19 Jul 2025) '2021 West Bengal post-poll violence case' me 'Biswajit Sarkar, brother of deceased Abhijit Sarkar' — Sarkar surname wala doosra vyakti/mamla (Kolkata, pre-term), Rajganj ke Dinesh Sarkar se koi sambandh nahi, REJECT. Pehchan QA pass: MLA Dinesh Sarkar = Haradhan Sarkar (alias), S/o Late Gyanendra Sarkar, age 61, Rajganj (SC) — myneta.info WestBengal2026 candidate_id=86; doosre Dinesh Sarkar ki koi khabar inpar nahi lagayi. Negatives: halafname (myneta.info) me 2 criminal cases declared (IPC 332, 506, 188, 341, 353, 427 ke charges) — halafnama akele negative-rule FAIL. Established media me May 2026+ me MLA khud kisi FIR/chargesheet/confirmed jaanch me aaropi nahi; karyakaal me koi nyayik vikas (adalat ka aadesh/notice) nahi mila — koi negative entry nahi. Foundation cross-check: westbengal.ts me 'dinesh-sarkar' profile maujood (Rajganj, BJP, tenure 2026-2031, criminalCases 2 affidavit se), works [] — koi antar nahi; pehle se koi entry nahi. Profile khali rakhi gayi.
westbengalWorks['dinesh-sarkar'] = [];

// Worker: West Bengal, MLA Sikha Chatterjee (Dabgram-Phulbari, BJP).
// Term scope: May 2026+ only. Period: '2026-2031'.
// Research date: 2026-10-19. Result: NO qualifying works found.
// All research notes are Roman-script Hinglish. Reject-log below.
//
// REJECT-LOG (in-period events examined and rejected):
// 1. Fulbari-Ghoshpukur bypass road reconstruction, ~Rs 8 crore, 17 Sep 2026,
//    work inaugurated jointly by Tourism Minister Shankar Ghosh AND MLA Sikha Chatterjee.
//    REJECT: source is Siliguri Times (not on whitelist); event was minister-led
//    ('dusre neta ke karyakram' rule), so individual role not credited either way.
//    Lead URL: https://siliguritimes.com/fulbari-ghoshpukur-bypass-road-reconstruction-begins-at-a-cost-of-rs-8-crore/
// 2. MLA halts alleged illegal toll collection at Fulbari Bypass, 14 Jun 2026.
//    REJECT: Siliguri Times (not whitelisted); intervention/action only, no sanctioned
//    structure/fund disclosed — not a VALID category work.
// 3. Waterlogged Khudiram Pally area visit near Eastern Bypass, 26 Jun 2026 (assurance only).
//    REJECT: Siliguri Times (not whitelisted); nirikshan/daura akela.
// 4. Three CC roads under construction in Putimari, Fulbari-II GP, 3 Sep 2026.
//    REJECT: Siliguri Times (not whitelisted); her name/role not even mentioned in the item.
// 5. Nabagram Ganesh Puja inauguration by MLA, 14 Sep 2026. REJECT: samaroh; Siliguri Times.
// 6. BJP SC Morcha felicitation of newly elected MLA, 30 May 2026. REJECT: samaroh; Siliguri Times.
// 7. NJP hawkers approach two MLAs over eviction drive, 7 Aug 2026 — she said matter
//    would be 'looked into seriously'. REJECT: Siliguri Times (not whitelisted); maang/prastav akela.
// 8. World Tourism Day procession with Tourism Minister Shankar Ghosh, 27 Sep 2026
//    (Telegraph India). REJECT: ceremonial procession, no work/fund involved.
// 9. Party office ownership dispute with TMC, 20 May 2026 (Telegraph India).
//    REJECT: property dispute, not a work; not a negative either (no FIR/court case against her).
// 10. Election coverage (NDTV 31 Mar 2026, Telegraph 06 May 2026, Indian Express results).
//    REJECT: campaign/results, not works.
// 11. Assembly-session demand for separate North Bengal state, Feb 2025 (Indian Express, PTI via ThePrint).
//    REJECT: pre-May-2026; political demand, not a documented work outcome.
// 12. Jabrabhita underpass condition criticism, Jan 2026. REJECT: pre-May-2026; Siliguri Times.
//
// NEGATIVES check:
// - 2026 election affidavit declares 6 old cases (NJP PS 798/2020, Bhaktinagar PS 585/2020,
//   363/2020, 416/2019, 292/2018, Siliguri PS 232/2009 — protest/DM Act sections, charges not
//   framed). These are pre-May-2026 matters with NO May 2026+ judicial development found.
//   Not negatives per rule.
// - 'Bengal polls: FIR filed against Trinamool candidate over vandalism' (IANS, Apr 2026)
//   concerns RATNA Chatterjee (TMC, Behala) — name-trap, different person. Not her.
// - Calcutta HC judgment 'Sikha Chatterjee v. State of West Bengal' (2023, Casemine):
//   she was the PETITIONER, matter from 2023, identity unconfirmed as the MLA. Not a negative.
// - No new FIR/chargesheet/court notice/order against her in May 2026+ on whitelist outlets.
// Result: no negative entries.
//
// NOTE on identity: results only considered where the person is identified as the
// Dabgram-Phulbari (Jalpaiguri) MLA. Alternate spelling 'Shikha Chatterjee' items refer to
// the same MLA unless the seat/context differs (e.g. Ratna Chatterjee excluded explicitly).


westbengalWorks['sikha-chatterjee'] = [];

// West Bengal works-mining worker fragment — sukra-munda (Mal, BJP)
// Researched 2026-10-19. RESULT: EMPTY profile (khaali profile = imaandari).
// Karyakaal: sirf May 2026 se (2026 Vidhan Sabha chunav: matdan 23 Apr 2026, parinaam 4-6 May 2026;
// shapath 9 May 2026). Is ~5-mahine ke karyakaal me whitelist sources me Mal seat par
// Sukra Munda ki vyaktigat bhoomika wala koi post-event kaam (lokarpan/shilanyas/Vidhan Sabha
// prashn ka dastaveji nateeja/GO-backed swikriti) report nahi hua.
// SEAT-QA (coordinator → parent): brief me seat "Mal SC" hai, lekin TOI (130603666.cms),
// Indian Express (Chandrakona/Rampurhat result pages), Oneindia aur voterslist.in — sab
// Mal ko "(ST)" / Scheduled Tribe-reserved batate hain. Foundation record verify karna baki;
// maine koi edit nahi ki.

westbengalWorks['sukra-munda'] = [];

// ---- REJECT-LOG (sukra-munda, Mal) ----
// R1. Malbazar newborn-documents pilot — Telegraph India, 11.10.26 (page KHOLKAR padha gaya):
//     Malbazar SDO office se navjaat shishuon ke teen dastavej (birth certificate, Aadhaar card,
//     caste certificate) ek hi jagah — "officials inaugurated the project" (SDO conference hall);
//     Malbazar MLA Shukra Munda, Nagrakata MLA Puna Bhengra, DM Aditi Chaudhary, SDO Utkarsh
//     Khandel event me "present" the. SDO Khandel ke mutabiq dono MLAs ne logon ki mushkilon
//     ko "flag" kiya tha, uske baad prashasan ne system banaya; 9 bachchon ke maata-pita ko
//     dastavej saunpe gaye.
//     REJECT: lokarpan adhikariyon ne kiya — Munda ka vyaktigat lokarpan/shilanyas NAHI, sirf
//     event me maujoodgi (abu-taher-mondal R1 pattern jaisa). "Flag" karna maang/pahal akeli hai —
//     koi Vidhan Sabha prashn, GO ya swikriti-rashi documented nahi. Samaroh me maujoodgi matra.
// R2. etvbharat.com (NON-WHITELIST) — teen bayan: (a) May 2026 post-win interview me cha-bagan
//     mazdooron ki minimum-wage maang poori karne ka vaada; (b) Sept 2026: "Bonuses alone are not
//     enough to strengthen the backbone of economy... minimum wages... tea industry needs to be
//     revitalised"; (c) FAWLI 20% bonus par bayan. REJECT: non-whitelist source + sirf bayan/vaade,
//     koi dastaveji kaam ya parinaam nahi.
// R3. millenniumpost.in (REJECTED source), 2 Apr 2026 — Mal seat par BJP ticket ko lekar virodh:
//     Munda Nagrakata ke hain, sthaniya cha-bagan neta nazarandaz; Malbazar me party office par
//     virodh/todfod. REJECT: rejected source + pre-term (May 2026 se pehle) + koi kaam nahi.
// R4. Cabinet speculation: The Statesman 8 May 2026 ("Suvendu Adhikari Cabinet at a glance") me
//     "Koushik Chowdhury might be picked... Sukra Munda for Animal Resources Development" —
//     sirf pre-oath PROJECTION. Final: moneycontrol 11 May 2026 ke mutabiq Animal Resources
//     Development Dilip Ghosh ko mila; expanded ministry me Rajesh Mahata (MoS, Independent Charge).
//     Sukra Munda FINAL cabinet me NAHI hain (sirf plain MLA). REJECT: projection source nahi;
//     mantri-pad hota bhi to rajya-star faisla hota, seat-kaam nahi.
// R5. PTI 15 Oct 2026 (blogspot repost par dekha; mool PTI): CM Suvendu Adhikari ne band
//     cha-baganon ke 19,524 mazdooron (60 se kam umr) ko Durga Puja se Chhath Puja tak Rs 5,000
//     + 50 kg chawal per parivar ka faisla kiya; 20% Puja bonus ka zikr. REJECT: rajya cabinet/CM
//     ka faisla — Munda ki vyaktigat bhoomika documented NAHI (dusre neta ka karyakram/faisla).
// R6. Telegraph 19 Dec 2022 — Dooars cha-baganon me solar streetlights: Puna Bhengra (Nagrakata)
//     ne Rs 30 lakh, Bulu Chik Baraik (tatkalin Malbazar MLA) ne Rs 41 lakh LAD fund se diye.
//     REJECT: pre-term (Dec 2022) + Munda ka koi role nahi.
// R7. Telegraph 30 Jan 2021 — "Step-down chant for turncoat MLA Sukra Munda": TMC samarthakon ne
//     Nagrakata me kaale jhande dikhaye (BJP me shaamil hone par). REJECT: pre-term political
//     event; na kaam hai, na negative (MLA aaropi nahi — sirf virodh-pradarshan).
// R8. DISAMBIGUATION — "Sukra Munda" naam ke court cases (courtkutchehry/casemine/indiankanoon):
//     Bariatu PS case 12/1990 (Ranchi, Bihar — hatya, Sukra Munda s/o Arjun Munda), Sundargarh
//     S.T. 253/1998 (Orissa), Sonitpur Sessions 170/2003 (Assam, "Sukru Munda"). Ye Bihar/Orissa/
//     Assam ke ALAG vyakti hain — Mal MLA se pehchan ka koi sambandh nahi. REJECT: pehchan seat
//     se nahi; inme se koi profile me NAHI lagaya gaya.
// R9. Chunav jeet (TOI, May 2026): Sukra Munda (BJP) 1,12,095 votes; Bulu Chik Baraik (TMC,
//     tatkalin BCW/Tribal Development mantri) 96,603; margin 15,492. REJECT: chunav-jeet kaam
//     nahi hoti — works profile me entry nahi.
// NEGATIVES: koi nahi. MLA khud aaropi ho aisa koi FIR/chargesheet/janch whitelist sources me
// nahi mila; May 2026 ke baad koi nyayik vikas (adalat ka aadesh/notice) bhi nahi. R7/R8 ke
// mamle negative-rule fail karte hain (pehchan/ stage mismatch). Halafname ke mamle akele
// negative nahi hote.
// PEHCHAAN: Sukra Munda — BJP, Mal (2026 se; pehle Nagrakata 2016-2021 TMC, Dec 2020 me BJP).
// Cabinet me nahi; mantri-kaam exclusion laagu nahi.
// RETRY-LEADS: koi nahi — entry ke liye khola gaya ekmatra whitelist page (R1 Telegraph)
// poori tarah khul kar padha gaya; koi page adhoora/khula-nahi raha.

// WEST BENGAL — wave 1 worker: puna-bhengra (Nagrakata ST, BJP).
// Karyakaal: 18th West Bengal Vidhan Sabha, May 2026+ only (period '2026-2031').
// Whitelist (West Bengal): The Hindu, Indian Express, Hindustan Times, NDTV,
// India Today, Times of India, The Telegraph (India), PTI (established outlet par).
// Pages kholkar padhe gaye; pre-event announcement / aggregator / blogspot reject.

// REJECT-LOG (puna-bhengra):
// 1. Telegraph 24.07.26 — Sikkim tunnel mishap: Bhengra Matiali block me 3 pravasi
//    mazdooron ke shav (Bikesar Oraon, Shiba Oraon — Kilkot tea estate; Shyam Oraon —
//    Indong tea estate) ambulance se laaye, parivaron ko saunpe; Bolo Oraon, Arjun
//    Santhal ke shav Nagrakata; Anand Toppo (Grassmore tea estate, Nagrakata) raaste me.
//    Bhengra bole 'state and central governments are with the affected families,
//    compensation arrangements being made'. → REJECT: daan/rahat + upasthiti;
//    bhautik sanrachna ka lokarpan/shilanyas nahi, fund/bhoomika disclosure nahi.
//    URL: https://www.telegraphindia.com/west-bengal/five-sikkim-tunnel-mishap-victims-bodies-reach-jalpaiguri-homes-prnt/cid/2171485
// 2. Telegraph 23.07.26 — CM Suvendu Adhikari ne Bhengra ko Sikkim tunnel rescue
//    coordinate karne bheja ('Suvendu vows aid'). → REJECT: seat ke bahar ka kaam (Sikkim).
//    URL: https://www.telegraphindia.com/west-bengal/four-bodies-of-bengal-youths-out-of-tunnel-sikkim-toll-rises-to-13-prnt/cid/2171339
// 3. Telegraph 11.10.26 — Malbazar subdivision newborn-documents pilot (birth certificate +
//    Aadhaar + caste certificate ek jagah): 'officials' ne udghatan kiya; Bhengra aur Mal
//    MLA Shukra Munda sirf upasthit; SDO Khandel ke mutabiq dono MLAs ne 'flagged people's
//    difficulties'. → REJECT: maang/flagging akeli + upasthiti; vyaktigat lokarpan nahi;
//    subdivision-star pilot (Malbazar SDO office — dusri seat ka locus), shared credit.
//    BORDERLINE — coordinator chahe to dobara dekh le. Entry nahi di.
//    URL: https://www.telegraphindia.com/west-bengal/birth-aadhaar-caste-malbazar-subdivision-launches-project-to-provide-three-identity-documents-to-newborns-prnt/cid/2184155
// 4. Telegraph 19.12.22 — Dooars tea gardens streetlight plan: Bhengra ne 'around Rs 30 lakh
//    from my local area development fund' allocate kiya (Nagaisuree, Ingo, Zurantee, Chulsa,
//    Murti, Matialli tea estates + Matialli rural market/burning ghat). → REJECT: pre-May-2026.
//    URL: https://www.telegraphindia.com/west-bengal/streetlight-plan-in-dooars-tea-gardens/cid/1904617
// 5. The Statesman Sep 2025 — bonus row: Bhengra ne 5 tea gardens ke khilaaf police complaint
//    (20% Puja bonus non-payment). → REJECT: pre-May-2026 + non-whitelist.
// 6. TOI 08.11.25 — Bangladeshi family of four released after Bhengra-led BJP protest at
//    Matelli PS (CAA ka hawala). → REJECT: pre-May-2026.
// 7. MillenniumPost (pre-election) — Dooars river dredging: Bhengra ne TMC workers par illegal
//    sand mining ka aarop lagaya, state govt se maang ki. → REJECT: non-whitelist + sirf maang.
// 8. TOI Oct 2025 — 'Attack on BJP netas' (Khagen Murmu/Shankar Ghosh, Nagrakata): TMC minister
//    Shashi Panja ne Bhengra ki gair-maujudgi par sawal uthaya; giraftaar Akramul Haque aur
//    Govind Sharma hue — Bhengra aaropi nahi. → Negative NAHI (FIR-aaropi column me naam nahi).
// NEGATIVES: myneta affidavit (self-declared) me 1 pending case — Matelli PS Case No-96/20,
// dt 14.07.2020, GR Case No-2936/2020, CJM Jalpaiguri, Sec 188 IPC + 51(b) DM Act, charges
// framed NAHI. Pre-May-2026 mamla; May 2026+ me koi nyayik vikas whitelisted source me nahi
// mila. → Negative rule fail, koi negative entry nahi.
// PEHCHAAN-QA: Gopal Bhengra (hockey player, Ranchi, TOI 2021) alag vyakti hain — mix nahi hue.

westbengalWorks['puna-bhengra'] = [];


// --- Kalimpong ---

// WEST BENGAL — Kalimpong — Bharat Kumar Chetri (BJP, spelled Chhetri bhi)
// Karyakaal: sirf May 2026+ (sapath/padbhara 4 May 2026 — Wikipedia/Bharat_Chettri; ECI via IE/TOI result pages). Period: '2026-2031'.
// Pehchan: poorv Indian hockey captain, 2012 London Olympics captain, Dhyan Chand awardee (2018); 2026 me BJP ticket par Kalimpong se pehli baar MLA (84,290 vote, margin 21,464 vs Ruden Sada Lepcha).
// Mining date: 2026-10-19. Whitelist outlets (The Hindu, IE, HT, NDTV, India Today, TOI, Telegraph, PTI-via-established) par ~10 rounds search; 1 page (IE, CM visit) kholkar padha gaya.
//
// REJECT-LOG (bharat-kumar-chetri):
// 1. Telegraph India, 5 May 2026, "Promises made on poll trail, real work starts now as Dinda, Bharat step into governance" (cid/2159048) — jeet ke baad Chetri ne paani/rozaag ki samasyaon par kaam karne ke VAADE dohraye. Sirf ghoshna/vaade, koi poora hua kaam ya shilanyas/lokarpan nahi. REJECT (ghoshna akeli). URL: https://www.telegraphindia.com/sports/promises-made-on-poll-trail-real-work-starts-now-as-dinda-bharat-step-into-governance-prnt/cid/2159048
// 2. Telegraph India, 12 Oct 2026, "BJP eyes 'solo trip' in Kalimpong, Kurseong and Mirik long-overdue civic elections" (cid/2184275) — MLA ne bataya party ne civic elections ke liye 16-member municipal election committee banayi. Sirf party ka sangathanatmak kaam; bhautik sanrachna ka kaam nahi. REJECT (party sangathan, kaam nahi). URL: https://www.telegraphindia.com/west-bengal/bjp-eyes-solo-trip-in-kalimpong-kurseong-and-mirik-long-overdue-civic-elections-prnt/cid/2184275
// 3. Telegraph India, 5 May 2026, "BJP wins three hill Assembly seats, GTA's future and impact in Darjeeling raise concerns" (cid/2159073) — chunav nateeje ki khabar, GTA ke bhavishya par charcha. Kaam nahi. REJECT. URL: https://www.telegraphindia.com/elections/west-bengal-assembly-election-2026/bjp-wins-three-hill-assembly-seats-gtas-future-and-impact-in-darjeeling-raise-concerns-prnt/cid/2159073
// 4. Telegraph India, 22 Apr 2026, "Olympian Bharat Chetri enters politics as BJP Kalimpong candidate faces stern test" (cid/2157205) — candidate profile; PRE-TERM (chunav se pehle). REJECT. URL: https://www.telegraphindia.com/india/bharat-chetri-kalimpong-bjp-candidate-ex-india-hockey-captain-enters-politics-prnt/cid/2157205
// 5. Telegraph India, 19 Aug 2024, "Former captain of Indian hockey team, Bharat Chetri, to boost reach with academy in Kalimpong" (cid/2041964) — Upper Payung (16th Mile) me hockey academy ki yojna; GTA ke sahyog se. PRE-TERM (2024). REJECT. URL: https://www.telegraphindia.com/amp/west-bengal/former-captain-of-indian-hockey-team-bharat-chetri-to-boost-reach-with-academy-in-kalimpong/cid/2041964
// 6. Telegraph India, 3 Jan 2023, "I see a lot of potential in GTA, north Bengal region, says Bharat Chhetri" (cid/1907421) — sports academy ki yojna; PRE-TERM (2023). REJECT. URL: https://www.telegraphindia.com/west-bengal/i-see-a-lot-of-potential-in-gta-north-bengal-region-says-bharat-chhetri/cid/1907421
// 7. Millennium Post, 30 Aug 2023, "Hills to get Hockey academy and stadium" — 16th Mile me hockey stadium/academy ka shilanyas GTA Chief Anit Thapa ne rakha; zameen Bharat Chettri ne DAAN me di. Teen guna reject: PRE-TERM + niji kharch (zameen daan) + GTA ka faisla (MLA credit nahi). Source bhi non-whitelist. REJECT. URL: https://www.millenniumpost.in/amp/nation/hills-to-get-hockey-academy-and-stadium-531126
// 8. blogspot (kalimpongonlinenews), ~Aug 2026, "Major Political Realignment in Darjeeling Hills: 11 GTA Sabhasads, around 700 BGPM leaders join BJP" — Kalimpong me induction ceremony me MLA maujood the. Party joining samaroh hai; sarkari kaam nahi. Non-whitelist bhi. REJECT. URL: http://kalimpongonlinenews.blogspot.com/2026/07/major-political-realignment-in.html
// 9. The Statesman, ~Jun 2026, "GTA, district administration review development priorities in Hills" — GTA HQ me review meeting me MLA (Noman Rai, Sonam Lama sahit) maujood the; 90 ghar (Teesta peedit) CM ne approve kiye. Sirf maujoodgi; faisle GTA/CM ke (MLA credit nahi). Non-whitelist bhi. REJECT. URL: https://www.thestatesman.com/bengal/gta-district-administration-review-development-priorities-in-hills-1503601967.html
// 10. bharatexpress.com, ~Aug 2026, "Amit Shah leads talks on Darjeeling, Kurseong and Kalimpong political solution" — rajnaitik baithak (Gorkhaland samadhan par). Kaam nahi; non-whitelist. REJECT. URL: https://english.bharatexpress.com/india/amit-shah-leads-talks-on-darjeeling-kurseong-and-kalimpong-political-solution-291328
// 11. Indian Express, 9 Sep 2026, "Bengal CM Suvendu Adhikari flags corruption in Hill administration" — page KHOLKAR PADHA: Kalimpong me medical college ki ghoshna CM ne ki ("foundation stone will be laid during his next visit"); MLA ka role sirf "have been in touch with the administration regarding the arrangements". Dusre neta ka kaam. REJECT. URL: https://indianexpress.com/article/cities/kolkata/bengal-cm-suvendu-adhikari-flags-corruption-in-hill-administration-those-who-have-looted-will-be-sent-to-jail-none-will-be-spared-10869104/
// 12. Telegraph India, 8 Sep 2026, "Suvendu Adhikari to visit Kalimpong, review projects and monsoon preparedness" (cid/2178831) — CM visit ki PRE-EVENT announcement. REJECT. URL: https://www.telegraphindia.com/west-bengal/suvendu-adhikari-to-visit-kalimpong-review-projects-and-monsoon-preparedness-prnt/cid/2178831
// 13. blogspot, Oct 2025, "Teesta Flood a Man-Made Disaster, Says Kalimpong MLA" — "Lepcha said during the inspection" = Ruden Sada Lepcha (POORV MLA), naam-trap; pre-term + non-whitelist. REJECT. URL: http://kalimpongonlinenews.blogspot.com/2025/10/teesta-flood-man-made-disaster-says.html
// 14. PTI via newsdrum.in, 7 Jun 2026, "Himalayan hill cities" — Municipal Affairs Minister Agnimitra Paul ne 5 shaharon (Kalimpong sahit) ki ghoshna ki; MLA ka koi role nahi. Non-whitelist outlet bhi. REJECT. URL: https://www.newsdrum.in/national/bengal-darjeeling-siliguri-among-5-towns-to-be-developed-as-himalayan-hill-cities-12011499
// 15. Negatives: MyNeta WestBengal2026 halafnama (candidate_id=408): "No criminal cases" — FIR/chargesheet/janch ya May 2026+ me koi nyayik vikas (adalat aadesh/notice) whitelist par nahi mila. MLA khud kahin aaropi nahi — negatives: 0. REJECT (koi qualifying negative nahi). URL: https://www.myneta.info/WestBengal2026/candidate.php?candidate_id=408
// 16. Vidhansabha prashn ka dastaveji nateeja / itemized sanction list / GO-backed swikriti — Kalimpong seat par whitelist outlets me May 2026+ ka koi record nahi mila.
// RETRY-LEADS: (a) assembly.wb.gov.in ke question-hour records me "Bharat Kumar Chetri" ke prashn khojo — agar PTI/whitelist ne cover kiya to dawa/news entry ban sakti hai; (b) The Telegraph ke Kalimpong byline (Vivek Chhetri) ke aane wale hill pieces monitor karo — pehli baar MLA hain, ~5.5 mahine me abhi tak vyaktigat lokarpan/shilanyas ki koi whitelist khabar nahi aayi; (c) WB budget 2026-27 me Kalimpong medical college ka GO aaye to bhi credit CM ka rahega — MLA ki maang ka dastaveji saboot mile tabhi dawa-entry par vichaar.
westbengalWorks['bharat-kumar-chetri'] = [];


// --- Darjeeling ---

// WEST BENGAL — Darjeeling — Noman Rai (BJP)
// Karyakaal: sirf May 2026+ (sapath/padbhara 4 May 2026 — Wikipedia/ECI). Period: '2026-2031'.
// Mining date: 2026-10-19. Whitelist outlets (The Telegraph India, TOI, Indian Express,
// HT, NDTV, India Today, The Hindu, established outlet par PTI) par multiple rounds
// search kiye gaye. Noman Rai May 2026 me jeete (62,076 votes, BGPM ke Bijoy Kumar Rai
// ko 6,057 votes se haraya). ~5.5 mahine ke karyakaal me unke khilaf koi valid seat-kaam
// (lokarpan/shilanyas GO-fund ke saath, dastaveji Vidhansabha nateeja, itemized sanction
// list) whitelist source par publish nahi hua — jo mila wo prastav/maang, upasthiti,
// samaroh, ya party-level demand tha.
westbengalWorks['noman-rai'] = [];

// REJECT-LOG (noman-rai):
// 1. Telegraph India (June 2026, khola-padha gaya) — "Bengal government to implement
//    central tea workers’ scheme in north Bengal": MLA Noman Rai ne Uttarkanya me
//    Uttari Bangla vikas mantri ke saath meeting me (a) Calcutta me exclusive Darjeeling
//    Tea auction house sthapna, (b) auction turnover par development levy, (c) permanent
//    Darjeeling Tea development fund banane ka PRASTAV rakha. Sirf prastav — koi GO,
//    swikriti, fund-release ya nateeja report nahi; REJECT (maang/prastav akela).
// 2. Sikkim Express (23 Jul 2026): Vidhansabha me PPS (Permanent Political Solution)
//    ki maang uthayi; hill sarkari schools ka infrastructure, 313 GTA teachers ki
//    samasya, Longview tea garden workers ke bonus/wage, SIR roll me naam-katan aur
//    PMAY me hill-geography ke liye special criteria ki maangein — CM ne "address
//    karne ka" ashwasan diya (press release par adharit). Sikkim Express WHITELIST me
//    NAHI hai; ashwasan dastaveji Vidhansabha prashn-nateeja bhi nahi = REJECT (source).
// 3. Telegraph India (21 Jul 2026, khola-padha gaya) — Bengali as primary administration
//    language: MLA ne kaha wo Nepali bhasha ka mudda Vidhansabha me CM ke notice me
//    layenge ("will bring the issue to the chief minister's notice through the
//    Assembly"). Sirf iraada/maang — koi dastaveji nateeja nahi = REJECT.
// 4. Telegraph India (Aug 2026, khola-padha gaya) — Darjeeling Night Run 2026 (10 km)
//    ko MLA ne DM/SP ke saath sanyukt roop se flag-off kiya. Samaroh/karyakram ka
//    shubharambh — koi bhautik kaam nahi = REJECT (samaroh).
// 5. Telegraph India (22 Sep 2026) — Siliguri-Darjeeling-Dooars link feasibility study
//    meeting: "Darjeeling MLA Noman Rai ... attended the meeting" — SIRF UPASTHITI
//    (MP Raju Bista ki meeting thi) = REJECT (upastithi akeli kaam nahi).
// 6. Times of India (Sep 2026, Kolkata) — GJM ne 280 JJM pariyojnaon (GTA) me
//    aniyamitaon ki independent janch ke liye CM Suvendu Adhikari ko patra likha;
//    patra par Bimal Gurung, Roshan Giri aur MLA Noman Rai ke hastakshar. Ye GJM
//    PARTY-level maang hai (janch ki demand, koi parinaam report nahi) — MLA ka
//    vyaktigat seat-kaam nahi, GTA (party turf) ka mamla = REJECT.
// 7. ETV Bharat (8 Oct 2026) — GJM ke 20th foundation day rally me MLA Noman Rai
//    upasthit. Party samaroh me upasthiti; ETV Bharat waise bhi whitelist me nahi
//    = REJECT (samaroh + off-whitelist).
// 8. 5dariyanews (off-whitelist): Amit Shah ki adhyakshata me Sukna me PPS meeting me
//    Noman Rai upasthit — sirf upasthiti = REJECT (off-whitelist + attendance).
// 9. petshops1.com (off-whitelist/spam-looking): 18 May 2026 ko Simana Community Hall
//    me Jan Bhagidaari Abhiyan launch me MLA upasthit — abhiyan-shubharambh =
//    REJECT (off-whitelist + abhiyan-shubharambh).
// 10. Chunav coverage (Indian Express/HT/NDTV/TOI/India Today, May 2026) — jeet ki
//     khabar (62,076 votes), kaam nahi = REJECT (event nahi, kaam nahi).
// 11. Negatives: ETV Bharat/Indian Express ne halafname ke hawale se Noman Rai ke
//     2 criminal cases bataye (pre-term affidavit disclosure) — May 2026 ke baad
//     kisi FIR/chargesheet/giraftaari/janch ya adalati vikas ki whitelist source
//     par koi report nahi mili. Halafname ke purane pending mamle akele negative
//     NAHI = REJECT. Naam-trap cases (Nandu Ram Rai, Mohan Rai alias Shekar Rai,
//     Sabitri Rai — Sikkim/2017 ke alag mamle) in par nahi lagaye = NAHI.
// Khali profile: May 2026 me padbhara ke baad ~5.5 mahine me whitelist outlets par
// koi valid Darjeeling seat-kaam publish nahi hua.

// sonam-lama — 0 works + 0 negatives
// Pehchan pakki: Kurseong (Constituency No. 24, Darjeeling jila), BJP, Winner 2026 —
// 74,878 vote (41.18%); runner-up Amar Lama (BGPM, 57,871) ko 17,007 maton se haraya.
// S/o Late Ram Bahadur Lama, age 46, pesha Business/Amway, Graduate (BA, Kurseong College,
// University of North Bengal, 2003), 0 criminal cases (2026 halafnama, myneta.info).
// Karyakaal: 18th WB Vidhan Sabha, 4 May 2026 se (2026-2031).
// Purv MLA: Bishnu Prasad Sharma (BJP, 2021 vijeta).
// Mining note: MLA bane abhi ~5.5 mahine hue hain; whitelisted outlets par May 2026+ me
// inke vyaktigat lokarpan/shilanyas/swikriti/sanction/GO ya Vidhan Sabha prashn-nateeje
// ki koi coverage NAHI mili — sab reject-log me darj hai. Naam-trap safai: Sikkim ke
// mantri Ven Sonam Lama (Ecclesiastical Affairs) aur Sikkim PHE mantri Sonam Lama,
// Ladakh ke activist Sonam Wangchuk, musician Sonam Sherpa aur 2001 Ghising ambush case
// ke Gunge/Gunje Lama — sab alag vyakti hain, inpar nahi lagaye gaye.

westbengalWorks['sonam-lama'] = [];

// REJECT-LOG (sonam-lama, mined 2026-10-19)
// 1. The Telegraph — “Push for heritage tag for museum on Netaji Subhas Chandra Bose’s days in Kurseong” (cid/2174883; page KHOLKAR padha gaya; publish date page par nahi, search-index “~66 din pehle” se Aug 2026 inferred — reasoning disclose): Kurseong MLA Sonam Lama ne kaha ki ve CM Suvendu Adhikari se Giddapahar (Kurseong) ke Netaji house ko heritage status dene ki “plea” lekar jayenge — sirf maang/yaachna, koi nateeja/swikriti nahi; Speaker Rathindra Bose ka daura bhi sirf nirikshan tha — REJECT (maang akeli; pre-event announcement jaisa). NOTE: agar baad me heritage status milta hai aur srot me MLA ki maang trigger batayi jaye to demand-with-result entry ban sakti hai (credit capped).
// 2. The Telegraph — “Feasibility study on new north highway done: Siliguri-Darjeeling-Dooars link planned” (published 2026-09-22; page KHOLKAR padha gaya): PWD/PHE review meeting me Sonam Lama sirf “attended” ki list me hain; meeting mantri Ajay Kumar Poddar ne chair ki, faisle/ghoshna MP Raju Bista ne diye (18km Darjeeling Circular Road tender, Kurseong–Darjeeling ropeway feasibility, parking, Dow Hill–Dilaram road repair) — REJECT (sirf maujoodgi; dusre neta/mantri ka karyakram; MLA ki vyaktigat bhoomika nahi).
// 3. english.punjabkesari.com / ommcomnews.com — HM Amit Shah ki “permanent political solution for Bengal hills” meeting (Sukna, 22 Aug 2026): Sonam Lama teen hill MLAs me se ek ke roop me maujood; agenda raajnaitik (Gorkhaland/GTA), koi bhautik kaam/swikriti nahi — REJECT (non-whitelist outlets + sirf maujoodgi + raajnaitik baithak, kaam nahi).
// 4. khabardarjeeling.in — “Kurseong BJP MLA Sonam Lama Formally Demands Separate District Status for Kurseong”: prashasanik maang hai, koi nateeja nahi — REJECT (maang akeli + non-whitelist).
// 5. siliguritimes.com — Panchayat/Rural Development mantri Dilip Ghosh ki review meeting (Siliguri, 12 Jun 2026): MLA sirf maujood the; faisle mantri ne diye (11,000 staff bharti, kendra se Rs 1,700 crore sanction ka zikr mantri ne kiya) — REJECT (non-whitelist + sirf maujoodgi; mantri ka faisla).
// 6. thetravelandtourismtimes.com — World Environment Day plantation drive, Kurseong Railway Station (5 Jun 2026): MLA “attendees” ki list me — REJECT (non-whitelist + sirf maujoodgi + abhiyan; koi bhautik sanrachna nahi).
// 7. kalimpongonlinenews.blogspot.com — GJM ke 20th foundation day par MLA stage par atithi — REJECT (non-whitelist + samaroh me maujoodgi).
// 8. Chunav coverage (TOI 5 May 2026, Indian Express live-updates, Zee News, ET Now, Business Today, ABP Live, Oneindia, sikkimexpress): jeet ki khabrein — kaam nahi — REJECT (chunav coverage).
// 9. Naam-trap safai (kuch bhi inpar nahi lagaya gaya): The Statesman (3 Sep 2026) me “Sikkim PHE and Water Resources Minister Sonam Lama” Jal Shakti Summit me — Sikkim ke mantri; voiceofsikkim/himalayanmirror me “Minister for Ecclesiastical and Public Health Engineering Sonam Lama” — Sikkim ke mantri; Telegraph (Sep 2025) “Sonam Wangchuk arrested” — Ladakh activist; casemine “State Of Sikkim v. Sonam Lama” (1985) — Sikkim transport karmchari; Telegraph (2001) “Gunge Lama of Kurseong” Ghising ambush case — purana alag vyakti.
// 10. Negatives: 2026 halafname me 0 criminal cases; whitelisted sources me May 2026+ me inke khilaf koi FIR/chargesheet/jaanch/nyayik vikas NAHI mila — negative entry nahi bani.
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. Telegraph site-search “Sonam Lama” — 2026-27 budget session/question-hour me Kurseong MLA ke sawalon ki coverage miss hui ho to credit-capped entry ban sakti hai.
// B. Heritage-tag plea (item 1): agar rajya heritage commission ya sarkar Giddapahar museum ko heritage status de aur whitelisted srot me MLA ki maang trigger ke roop me darj ho to entry (category Any, badge news, credit capped).
// C. PWD/PHE review-meeting pipeline (item 2): Dow Hill–Dilaram road repair ya Kurseong/Mirik parking par agar baad me MLA ke naam par itemized sanction/GO whitelisted srot me aaye to entry.

// anandamay-barman — 0 works + 0 negatives (West Bengal, Matigara-Naxalbari SC)
// Pehchan pakki: Anandamay Barman (kuch outlets me spelling “Anandamoy Barman”),
// Matigara-Naxalbari (SC, constituency No. 25, Darjeeling jila), BJP,
// 2026 winner — 166,905 votes (66.5%), Shankar Malakar (AITC, 62,640) ko 1,04,265
// maton se haraya; rajya ki sabse badi jeet-margin.
// 1 June 2026 se Suvendu Adhikari sarkar me Minister of State (Finance, Transport).
// Karyakaal: May 2026+ (period '2026-2031'). Usse pehle ki koi entry allowed NAHI.
// Naam-trap note: “Barman” surname wale anya vyakti — Dipak Barman (Industry
// Cabinet Minister), Harish Chandra Barman (2021 ummidwar), Sabitri/Chinmoy Deb
// Barman (anya seats) — inki khabrein yahan nahi lagayi gayin. Shankar Ghosh
// (Siliguri MLA, Tourism Minister) bhi alag vyakti hain.
// Whitelist sources par May 2026+ me inki koi seat-specific vyaktigat bhoomika
// wali khabar (lokarpan/shilanyas with fund, Vidhan Sabha prashn ka dastaveji
// nateeja, GO-backed swikriti) NAHI mili — sabse mazboot lead (Paribahan Nagar
// bus terminus shilanyas, 08.10.26) ki coverage sirf rejected/non-whitelist
// sources par hai. Isliye array khaali; retry-lead neeche.

westbengalWorks['anandamay-barman'] = [];

// REJECT-LOG (anandamay-barman, mined 2026-10-19)
// 1. The Telegraph — “Siliguri bus terminus gets dormitories, lounge ahead of festive
//    rush” (15.09.26, page KHOLKAR PADHA): Barman (MoS, Transport & Finance) ne
//    Tenzing Norgay Central Bus Terminus (TNCBT), Siliguri me 14-bed male + 6-bed
//    female dormitory aur ~100-seat lounge ka lokarpan kiya; facilities NBSTC ne
//    banayi. REJECT (seat ke bahar ka kaam): TNCBT Siliguri Junction/Hill Cart Road
//    ilaka Siliguri Assembly seat me hai, Matigara-Naxalbari me NAHI. Task ke
//    mutabik seat-boundary ke bahar ki entry nahi ban sakti.
// 2. Millennium Post — “Siliguri gets new Rs 4 crore bus terminus at Paribahan Nagar”
//    (08.10.26) + Siliguri Times: Paribahan Nagar, Matigara me naye bus terminus ka
//    shilanyas Tourism Minister Shankar Ghosh aur MoS (Transport) Anandamay Barman
//    ne kiya; SJDA + Transport dept joint project, lagbhag Rs 4 crore, 200 buses,
//    30% land. Seat ke ANDAR (Matigara) ka vyaktigat shilanyas — VALID category
//    hota, LEKIN dono sources whitelist ke bahar hain (Millennium Post reject list
//    me hai; Siliguri Times whitelist me nahi). Isliye entry NAHI. RETRY-LEAD neeche.
// 3. The Telegraph — “New MoS backs Siliguri district plea, cites strategic importance
//    of Chicken’s Neck” (05.06.26): Barman ne Siliguri ko alag jila banane ki maang
//    dohraai (“I had earlier raised the issue in the Assembly”). REJECT (maang/prastav
//    akela; koi sarkari swikriti ya sanrachna nahi).
// 4. The Telegraph — “Traction for new civic bodies near Siliguri...” (22.04.26):
//    Bagdogra + Matigara-Shivmandir ke liye 2 alag nagar palikaon ki pitch. REJECT
//    (pre-May-2026 + maang/prastav akela; election-campaign ka vada).
// 5. The Statesman — “BJP MLA’s push for 2 new municipalities in Siliguri sub-division”
//    (2024): municipality proposal letter. REJECT (pre-term; The Statesman whitelist
//    me bhi nahi).
// 6. The Telegraph — “600 more buses to roll out in Bengal before Puja...” (26.08.26):
//    Barman ne Naxalbari block ke Pataramjote me indoor stadium ki PROPOSED site ka
//    nirikshan kiya, adhikariyon se charcha ki. REJECT (nirikshan/daura akela; koi
//    swikriti/fund/shilanyas nahi).
// 7. The Telegraph — “Vacant NBU posts to be filled: Minister assures steps...” (07.07.26):
//    Barman ne higher education minister se milkar NBU ke VC/registrar/dean ke khaali
//    pad bharne ka ashwasan diya. REJECT (ashwasan/maang; dastaveji niyukti ya GO nahi).
// 8. Siliguri Times — “Foundation stones laid for three rural road projects in
//    Naxalbari” (11.10.26): Rs 8 lakh / Rs 14 lakh / Rs 36 lakh ki 3 sadkein; shilanyas
//    Ajay Oraon (District Panchayat Council chairman) ne “CM ke nirdesh” par kiya.
//    REJECT (Barman ki koi bhoomika nahi; source whitelist ke bahar).
// 9. Siliguri Times — “Mahananda Express gets stoppage at Naxalbari” (17.02.26):
//    pre-May-2026; MP Raju Bista ne flag-off kiya, Barman sirf attendee. REJECT.
// 10. kalimpongonlinenews.blogspot.com — DISHA meeting (01.07.26): AIIMS/IIT/IIM/cancer
//     hospital ke liye Matigara/Naxalbari me site-identification ki ghoshna.
//     REJECT (blogspot = reject source; yojana-ghoshna akeli).
// 11. bengalinfo.com — land-scam ki jaanch ke liye Mamata Banerjee ko letter.
//     REJECT (whitelist ke bahar; jaanch ki maang akeli).
// 12. The Statesman — “Anandamay writes Mamata to speed up super speciality block in
//     NBMCH” (22.07.2024): pre-term + maang; source whitelist ke bahar. REJECT.
// 13. The Telegraph — “BJP MLAs Anandamay Barman and Sikha Chatterjee with giant margins
//     credit Centre” (06.05.26): election-jeet story, koi kaam nahi. REJECT.
// 14. sentinelassam.com / krctimes.com / siligurichronicle.com — MoS niyukti/welcome
//     stories: samaroh/niyukti khabar, kaam nahi; sources whitelist ke bahar. REJECT.
// 15. The Telegraph — “BJP MLA to fast against govt in Siliguri over blocked development
//     projects” (Jan 2026 pre-term): ye Shankar GHOSH (Siliguri MLA) ki khabar hai,
//     Barman ki NAHI — naam-trap se bachaya. REJECT.
//
// NEGATIVES: myneta.info (2026 halafnama — whitelist source NAHI) me 2 pending cases
// darj hain: (i) GR No.45/23, Siliguri P.S. No.10/23, SCJM Court Siliguri, IPC
// 188/186/431/34 — charges framed NAHI; (ii) Siliguri PS Case No.847/20 dated
// 14/07/2020, ACJM Siliguri, IPC 188/269/270 + Sec 51B DM Act 2005 — charges framed
// NAHI; dono me koi conviction nahi. Dono pre-May-2026 hain, aur kisi whitelist
// source par May 2026+ me inka koi nyayik vikas (adalat ka aadesh/notice/chargesheet)
// NAHI mila. Isliye koi negative entry nahi banayi.
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. Paribahan Nagar (Matigara) bus terminus shilanyas, 08.10.2026 — Shankar Ghosh +
//    Anandamay Barman ne shilanyas kiya, Rs ~4 crore, SJDA + Transport dept. Telegraph/
//    TOI/HT/NDTV/Indian Express par coverage mil jaye to valid entry banegi
//    (category: Any/Transport; badge news; seat ke andar, vyaktigat shilanyas, fund
//    disclosed). Search terms: “Paribahan Nagar” bus terminus October 2026 Barman.
// B. Kisi bhi whitelist outlet par “Anandamay Barman” + Naxalbari/Matigara +
//    inauguration/foundation/sanction ki nayi khabar mile to dobara check karo.

// shankar-ghosh — 2 works + 0 negatives (West Bengal, Siliguri)
// Pehchan pakki: Shankar Ghosh, BJP, Siliguri (constituency No. 26, Darjeeling
// jila), 2026 winner — 120,760 votes (65.78%), Goutam Deb (AITC) ko 73,192 maton
// se haraya. Janm 12 June 1974 (umr 52); PhD Botany (North Bengal University);
// CPI(M) councillor 2015 (Ward 24) aur MMiC; BJP me 12 March 2021; 2021 me
// 35,586 maton se jeet; 2024 me BJP ke chief whip; 1 June 2026 se Suvendu
// Adhikari sarkar me Cabinet Minister (Tourism + Parliamentary Affairs).
// 2026 halafnama (ADR/PTI 03.04.26): 3 pending criminal cases (2013 x2, 2016 x1),
// assets Rs 2,50,09,233. SAKHT NIYAM laagu: mantri hain, isliye SIF Siliguri
// seat ke kaam entry bane — tourism/parliamentary-affairs vibhag ke rajya
// faisle works NAHI. Karyakaal: May 2026+ (period '2026-2031').
// Naam-trap note: kuch outlets me spelling “Sankar Ghosh” (uniindia) — wahi
// vyakti (Siliguri BJP MLA). Koi doosre naam-wale Shankar Ghosh ki khabar mix
// nahi hui.
// Dono cited pages KHOLKAR PADHE gaye (Telegraph India, whitelist).

westbengalWorks['shankar-ghosh'] = [
  {
    title: 'Kanchanjunga Stadium ke Mela Ground me parking zone ka kaam Shankar Ghosh ne shuru karwaya; deepak jalakar shubharambh kiya, SJDA karegi nirman',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Telegraph',
    sourceUrl: 'https://www.telegraphindia.com/west-bengal/shankar-ghosh-warns-against-encroachment-on-footpaths-government-land-in-siliguri-prnt/cid/2180460',
    date: '2026-09-17',
    note: 'The Telegraph (18.09.26, page kholkar padha) ke mutabik Siliguri MLA aur rajya tourism mantri Shankar Ghosh ne Bidhan Road ke paas Kanchanjunga Stadium ke khaali hisse (Mela Ground) me parking zone ka kaam shuru karwaya — unhone deepak jalakar kaam ka shubharambh kiya (photo caption: “lights a lamp to launch the work”). Unke mutabik ye jagah sabhi zaroori suvidhaon ke saath October ke madhya tak taiyaar hogi aur parking ki samasya kaafi had tak hal hogi. Siliguri Jalpaiguri Development Authority (SJDA) dono projects (parking zone + Fulbari Bypass marammat) ko execute karegi. Date reasoning: article 18.09.26 (Shukravar) ko publish hua; lamp-lighting “guruvar” (Thursday) ko bataya gaya — date command se verify: 17 Sep 2026 guruvar tha. Fund: cited article me rashi ghoshit nahi (Rs 1.65 crore ka aankda siliguritimes ka hai — non-whitelist, isliye note me nahi).',
    period: '2026-2031',
  },
  {
    title: 'Fulbari Bypass ke 1.5 km lambe stretch ki marammat ka kaam Shankar Ghosh ne shuru karwaya; SJDA karegi nirman',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Telegraph',
    sourceUrl: 'https://www.telegraphindia.com/west-bengal/shankar-ghosh-warns-against-encroachment-on-footpaths-government-land-in-siliguri-prnt/cid/2180460',
    date: '2026-09-18',
    note: 'The Telegraph (18.09.26, page kholkar padha) ke mutabik mantri ne usi avsar par (“Simultaneously”) 1.5 km lambe Fulbari Bypass stretch ki marammat ka kaam bhi shuru karwaya; SJDA is project ko bhi execute karegi. Date reasoning: article me “Simultaneously” ke saath bayan darj hai lekin exact event-day specify nahi — isliye article ki publish-date 18.09.26 li gayi. Fund: cited article me rashi ghoshit nahi.',
    period: '2026-2031',
  },
];

// REJECT-LOG (shankar-ghosh, mined 2026-10-19)
// 1. Burdwan Road ROB udghatan — CM Suvendu Adhikari ne 27.07.26 ko udghatan kiya
//    (Telegraph 28.07.26, search summary padha); MLA ne 28.05.26 ko sirf CM se
//    udghatan ka anurodh kiya tha (Telegraph 28.05.26, page kholkar padha).
//    REJECT (maang akeli; vyaktigat lokarpan nahi; udghatan dusre neta ne kiya).
// 2. Paribahan Nagar (Matigara) bus terminus shilanyas — 08.10.26 ko Shankar Ghosh
//    + MoS Anandamay Barman ne shilanyas kiya (siliguritimes; Millennium Post me
//    “Rs 4 crore” ka aankda). Siliguri-seat ke andar ka vyaktigat shilanyas,
//    lekin dono sources whitelist ke bahar. REJECT. RETRY-LEAD neeche.
// 3. Kanchanjunga Stadium parking — 11.08.26 ko ~800 vehicles ki partial parking
//    khuli; Telegraph (11.08.26, page kholkar padha) me Ghosh ne sirf nirikshan
//    kiya (“inspected”) — unhone udghatan kiya, ye article me nahi.
//    REJECT (nirikshan akela). VALID entry 18.09.26 wale shubharambh se bani.
// 4. Parking site inspection + “work will begin soon” (Telegraph 05.07.26, search
//    summary): pre-event ghoshna + nirikshan akela. REJECT.
// 5. Road-repair/tender ghoshnaen (siliguritimes 07.08.26: Rs 5 crore SMC fund,
//    Rs 7 crore NBDD, ~Rs 100 crore SJDA projects “tender process” me):
//    ghoshna akeli + non-whitelist. REJECT.
// 6. Additional District Library facelift ka vada (Telegraph 20.07.26, search
//    summary): nirikshan + vada akela; koi swikriti/fund/sanrachna nahi. REJECT.
// 7. Chunav manifesto (Telegraph 19.04.26): cancer hospital, IT park, multi-level
//    parking aadi — pre-May-2026 vade. REJECT (pre-term).
// 8. Bagdogra airport new terminal shilanyas — PM Modi ne virtual shilanyas kiya
//    (htsyndication/Millennium Post); MLA sirf maujood. REJECT (dusre neta ka
//    karyakram).
// 9. JIS Education Expo 2026 udghatan (Telegraph 19.07.26, search summary):
//    event udghatan, bhautik sarkari sanrachna nahi. REJECT.
// 10. Darjeeling More ROB section opening (siliguritimes 20.09.26): MP Raju Bista
//     + PWD Minister Ajay Kumar Poddar ne khola. REJECT (dusre netaon ka kaam;
//     source bhi non-whitelist).
// 11. Night walk against crime (Telegraph 01.06.26, search summary): abhiyan,
//     kaam nahi. REJECT.
// 12. Mithun Chakraborty ke saath tourism baithak (TOI, ~Sep 2026, search
//     summary): tea-tourism/hill-resort nivesh prastav (Rs 3,845 crore) —
//     vibhagiya rajya-faisla. REJECT (mantri-kaam, seat kaam nahi).
// 13. Homestay tourism policy (Telegraph 14.10.26, search summary): tourism
//     vibhag ka rajya-faisla (Darjeeling/Kalimpong hills). REJECT (seat ke bahar).
// 14. Nepal floods me missing tourists — MEA se sampark (ANI via lokmattimes,
//     28.08.26): mantri ki disaster coordination. REJECT (kaam nahi).
// 15. Siliguri College 77th foundation day (siliguritimes 08.10.26): samaroh +
//     non-whitelist. REJECT.
// 16. “Sorashori Shankar” outreach programme (May 2026, tourismindiaonline):
//     abhiyan-shubharambh. REJECT.
// 17. BEUP fund hunger strike (channel6network; Jan 2026 pre-term — sibling file
//     wb1_worker_anandamay-barman.ts me bhi darj): virodh/abhiyan + pre-term.
//     REJECT.
// 18. Cabinet portfolio allocation (Telegraph, June 2026): Tourism +
//     Parliamentary Affairs ka pad — pad hai, Siliguri seat ka kaam nahi. REJECT.
//
// NEGATIVES: myneta/ADR 2026 halafnama me 3 pending criminal cases darj hain
// (PTI 03.04.26, theweek.in par: 2013 ke 2 + 2016 ka 1 — unlawful assembly/rioting,
// public servant par criminal force, wrongful restraint; MLA ne inhe “politically
// motivated” bataya). Halafnama disclosure akele negative NAHI. Poster-row FIR
// (April 2026, pre-term): siliguritimes (non-whitelist) ke mutabik Panitanki
// Outpost OC Nirmal Kumar Das ki complaint par BNS dhaaraon me case darj;
// Telegraph (07.04.26, whitelisted) ne dono taraf ke aarop cover kiye (war of
// words — koi ek-tarfa aarop-siddhi nahi). May 2026+ me is ya halafname wale
// kisi bhi mamle ka koi nyayik vikas (chargesheet/giraftari/adalat ka aadesh ya
// notice) whitelist sources par NAHI mila. Isliye koi negative entry nahi banayi.
// Jawab/status: koi May 2026+ vikas nahi — reply-status N/A.
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. Paribahan Nagar (Matigara) bus terminus shilanyas, 08.10.2026 — Shankar Ghosh +
//    Anandamay Barman ne shilanyas kiya, lagbhag Rs 4 crore (Millennium Post),
//    SJDA + Transport dept. Telegraph/TOI/HT/NDTV/Indian Express/Hindu par
//    whitelisted coverage mile to valid entry banegi (category: Any; badge news;
//    Siliguri seat ke andar, vyaktigat shilanyas, fund disclosed). Search terms:
//    “Paribahan Nagar” bus terminus October 2026 Ghosh.
// B. Kanchanjunga Stadium parking zone ka mid-October completion — Telegraph par
//    lokarpan/completion ki khabar mile to follow-up entry possible (11.08.26 ko
//    partial opening hui thi; 18.09.26 ko poorn vikas ka shubharambh).

// durga-murmu — 0 works + 0 negatives
// Pehchan pakki: Phansidewa (ST) (Darjeeling jila, No. 27), BJP, Winner 2026 —
// 118,241 vote (56.92%); runner-up Reena Topno Ekka (AITC, 72,978) ko 45,263 maton se haraya.
// 4 May 2026 ko result ghoshit; 2021 se lagataar doosra karyakaal (2 May 2021 se MLA).
// Karyakaal window: May 2026+ (period: '2026-2031') — isse pehle ki ghatna entry NAHI.
// English whitelist media me MLA ki vyaktigat bhoomika wali development coverage nahi mili —
// jo 2 events mile wo sirf Siliguri Times (non-whitelisted) par hain (sab REJECT-LOG me).

westbengalWorks['durga-murmu'] = [];

// REJECT-LOG (durga-murmu, mined 2026-10-19)
// 1. Siliguri Times (10 Oct 2026) — "Rural road renovation begins from Bidhannagar Bazar to Chiknamati
//    in Phansidewa at a cost of Rs 15.21 lakh": WBSRDA project ke tehat sadak renovation ka shilanyas
//    BJP MLA Durga Murmu ne kiya; 15 gaon ke nivaasi is sadak par nirbhar; CM ke Durga Puja se pehle
//    sadak-marammat nirdesh ke baad kaam shuru. Fund (Rs 15.21 lakh) + bhoomika (shilanyas) dono disclosed
//    hain — ye Sadak-category candidate HOTA, LEKIN source whitelist me NAHI (Siliguri Times chhota
//    regional portal) — isliye entry NAHI. RETRY-LEAD: whitelisted outlet me isi story ki coverage mile
//    to entry banao. URL: https://siliguritimes.com/rural-road-renovation-begins-from-bidhannagar-bazar-to-chiknamati-in-phansidewa-at-a-cost-of-rs-15-21-lakh/
// 2. Siliguri Times (26 Sep 2026) — "MLA Durga Murmu inaugurates ambulance service at Batasi Health
//    Centre in Kharibari": Batasi Health Centre me nayi ambulance seva ka lokarpan; MLA khud
//    "Health Standing Committee Chairman" ke roop me maujood aur inauguration me ambulance khud chalai;
//    ~40,000 nivaasi labhanvit. REJECT — (a) source whitelist me NAHI; (b) ambulance ka fund-srot
//    (MLA-nidhi/svasthya vibhag/daan) page par disclosed NAHI — lokarpan ke liye fund disclosure lazmi.
//    RETRY-LEAD: whitelisted outlet + fund disclosure mile to Aspataal/Paani... yaani 'Aspataal'
//    category entry par vichaar. URL: https://siliguritimes.com/mla-durga-murmu-inaugurates-ambulance-service-at-batasi-health-centre-in-kharibari/
// 3. Telegraph India (7 Sep 2026) — "Siliguri: Arrested TMC leader Kajol Ghosh faces egg attack, four
//    BJYM supporters held": BJP MLA Durga Murmu ne giraftar TMC neta Kajol Ghosh par sirf
//    pratikriya/bayan diya ("illegally occupying and selling government and tea garden land") — bayan
//    akela koi kaam NAHI; negative bhi NAHI (aaropi MLA nahi, Ghosh hai). REJECT.
// 4. Times of India (~Feb 2026, updated 234 days ago) — "Protest over tribal woman's assault turns
//    violent in Siliguri": Janajati Suraksha Manch ke Uttarkanya Abhiyan me MLA ne police-nishkriyata
//    ki ninda ki — protest/bayan, koi kaam NAHI; vaise bhi ghatna Dec 2025 ki (pre-May-2026). REJECT.
// 5. Telegraph India (4 Jul 2025) — "Infrastructure upgrade for Siliguri's tribal hubs": Siliguri
//    Mahakuma Parishad ko Rs 3.78 crore (state tribal welfare dept) — sadak/culvert/drainage, 10 projects
//    Phansidewa me. REJECT — pre-term (Jul 2025), aur MLA ki vyaktigat bhoomika ka koi ullekh NAHI
//    (sabhadhipati Arun Ghosh ka kaam).
// 6. The Statesman (Mar 2026) — President Droupadi Murmu 7-8 March ko Phansidewa me International
//    Santhal Council meet me — NAAM-TRAP: President alag vyakti; MLA ka sirf ek line me zikr; waise bhi
//    pre-May-2026. REJECT.
// 7. Telegraph India (~Aug 2026) — "Agnimitra Paul lists projects for north Bengal": UDMA Minister
//    Agnimitra Paul ki ghoshna (Himalayan hill city, parking, Senchal Lake, Mirik Rs 100 crore) —
//    minister ka karyakram; MLA actor NAHI; ghoshna akeli. REJECT.
// 8. The Hindu/Sportstar — "Durga Murmu" naam ki Jharkhand women cricketer — NAAM-TRAP, MLA se koi
//    sambandh NAHI. REJECT.
// 9. TOI/NDTV/Indian Express election-result pages (May 2026) — sirf jeet ka aankda (118,241 vote,
//    45,263 margin) — chunaav-nateeja kaam NAHI. REJECT.
// 10. millenniumpost.in (pre-election, ~Mar-Apr 2026) — Mangoch gaon walon ne MLA par upeksha ka aarop
//     lagaya — sirf aarop, koi FIR/chargesheet NAHI, halafnama/avadhi-baahar; May 2026+ me koi legal
//     vikas NAHI — negative ke roop me REJECT.
// 11. Siliguri Chronicle (22 Mar 2026) — tea workers ne NH-27 block kiya (TMC candidate badalne ki maang);
//     BJP candidate Durga Murmu ne sirf pratikriya di — pre-election bayan, kaam NAHI. REJECT.
// 12. Kalimpong blog (Oct 2025) — BJP MP Khagen Murmu par hamla — NAAM-TRAP: Khagen Murmu (North Malda
//     MP) alag vyakti. REJECT.
// NEGATIVES: May 2026+ me Durga Murmu (Phansidewa MLA) par koi FIR/chargesheet/janch ya nyayik vikas
// whitelist ya kisi bhi srot me NAHI mila — 0 negatives. (2023 ka party jila-post se istifa party-andaruni
// mamla tha, negative NAHI.)
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. Item 1 wali road-story (WBSRDA, Bidhannagar Bazar–Chiknamati, Rs 15.21 lakh, shilanyas 10 Oct 2026)
//    agar Telegraph India / HT / Indian Express / TOI / India Today / NDTV / The Hindu par mile to
//    'Sadak' entry banao (fund + bhoomika disclosed hai; badge 'news').
// B. Item 2 wali ambulance-story (Batasi Health Centre, Kharibari, 26 Sep 2026) agar whitelisted outlet
//    par mile AUR fund-srot disclosed ho to 'Aspataal' entry par vichaar karo.

// ============================================================================
// BATCH 2 (Uttar Dinajpur + Dakshin Dinajpur + Malda — 8/23 jile)
// ============================================================================

// --- Uttar Dinajpur ---

// WEST BENGAL — Chopra — Hamidul Rahaman (TMC)
// Pehchan: Chopra (Uttar Dinajpur, seat no. 28) se 2026 me TMC ticket par jeete (1,20,986 votes, margin 69,124) — Indian Express result page ke mutabik. West Bengal 2026 ki jeet: May 4, 2026 ko ghoshit.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (hamidul-rahaman):
// 1. 'Construction of two key roads begins in Chopra' — millenniumpost.in (~Aug-Sep 2024; Pathasree se Rs 4.84 crore ki 2 sadakein, shilanyas MLA ne kiya tha). REJECT: pre-term (2024) + millenniumpost whitelist se bahar.
// 2. 'State government to set up new fire station in Chopra' — millenniumpost.in, Dec 27, 2024 (MLA ki pahal par College More ke paas fire station). REJECT: pre-term + millenniumpost blacklist.
// 3. 'Cal HC directs CID to probe rape allegation against TMC MLA' — Indian Express / Business Standard (PTI), Feb 7, 2018. REJECT: pre-term mamla (2018 ka Calcutta HC aadesh), May 2026+ me koi nyayik vikas/chargesheet/janch nahi mili.
// 4. 'Chopra flogging incident' — Hindustan Times / webindia123, July 2024 (Tajmul alias JCB ne mahila ki pitai ki). REJECT: pre-term; MLA aaropi nahi (unhone ghatna ki ninda ki, TMC-link se inkar kiya).
// 5. TMC show-cause notice to MLA over remarks — TimesNow, July 1, 2024. REJECT: pre-term + party karyawahi (excluded category).
// 6. 'Election Commission showcauses TMC MLA Hamidul Rahaman for threat speech' — The Telegraph, Apr 25, 2024. REJECT: pre-term (2024 Lok Sabha chunaav).
// 7. 'TMC functionaries approach senior police officers for action against assault on Chopra MLA' — The Telegraph, July 20, 2023 (Islampur counting centre me police lathi-charge). REJECT: pre-term; MLA peedit tha, aaropi nahi.
// 8. Wikipedia 'alleged to have been involved in post-poll violence' (2011). REJECT: nanga aarop, koi FIR/chargesheet/janch/nyayik vikas ka dastavej nahi.
// 9. MyNeta 2026 affidavit: 1 criminal case (IPC 147/148 rioting). REJECT: halafname ka purana pending mamla akele negative NAHI (rules).
// 10. 'India sets up Army base, military station along Bangladesh border' — Asian Age/Deccan Chronicle, Oct 2026 (Eastern Army Commander ne Chopra me MLA se mulaqat ki). REJECT: sena ka kaam; MLA ka vyaktigat lokarpan/shilanyas/kaam nahi.
// Tally: works 0, negatives 0, rejected leads 10, retry-leads 0 (koi khul-na-sakne-wala page ya ambiguous lead nahi).
westbengalWorks['hamidul-rahaman'] = [];

// WEST BENGAL — Islampur — Kanaia Lal Agarwal (TMC)
// Pehchan: Islampur seat (AC No. 29, Uttar Dinajpur), TMC ticket par May 2026 me jeete (108117 votes, margin 40063, BJP ke Chitrajit Roy ko haraya). Pehle 2016 me Congress MLA, Islampur Municipality ke chairman rahe. 2026 me Assembly ke PAC chairman bane (IANS/TOI, 4 Aug 2026). Halafname me koi criminal case nahi (westbengal.ts background).
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (kanaia-lal-agarwal):
// 1. TOI/IANS 'Rebel TMC MLA Kanaia Lal Agarwal named PAC chairman' (timesofindia.indiatimes.com, 4 Aug 2026) — REJECT: yeh rajnitik pad-niyukti hai (Public Accounts Committee adhyaksh), vikas-karya (lokarpan/shilanyas/BEUP/GO) nahi; mining criteria me nahi aata.
// 2. nationpress.com/indian.community 'Bengal: Kanaia Lal Agarwal to head PAC' (IANS feed, 4 Aug 2026) — REJECT: PAC niyukti hi hai, vikas-karya nahi; aggregator bhi.
// 3. millenniumpost.in 'Minister lays foundation stone for community hall in Islampur' (29 Feb 2024) — REJECT: pre-term (May 2026 se pehle); shilanyas mantri Ghulam Rabbani ne kiya tha, Agarwal sirf municipality chairman ke roop me tippani me the; millenniumpost whitelist me nahi.
// 4. millenniumpost.in 'Islampur Municipality starts town beautification' (~2023) — REJECT: pre-term; millenniumpost whitelist me nahi.
// 5. millenniumpost.in 'TMC drops Abdul Karim Chowdhury from Islampur' (18 March 2026) — REJECT: pre-term chunavi/party khabar; party karyawahi mining criteria me nahi; millenniumpost whitelist me nahi.
// 6. Zee News/Business Today election-result pages (May 2026) — REJECT: sirf chunav nateeje, koi vikas-karya ka ullekh nahi.
// 7. bharathorizon.com 'AITC's Agarwal Kanaia Lal Wins Islampur Seat' — REJECT: election coverage; aggregator-style site, whitelist me nahi.
// 8. News search (May-Oct 2026) me koi May 2026+ vikas-karya ya negative (FIR/chargesheet/adalati aadesh) nahi mila; halafname me pehle se koi pending mamla nahi. Profile khali rahegi.
westbengalWorks['kanaia-lal-agarwal'] = [];

// WEST BENGAL — Goalpokhar — Md Ghulam Rabbani (TMC)
// Pehchan: Goalpokhar (Assembly No. 30, Uttar Dinajpur, Raiganj LS) ke TMC vidhayak; 2026-2031 tenures me 'md-ghulam-rabbani' slug se westbengal.ts me darj (party: 'All India Trinamool Congress'). Poorv cabinet mantri (Minority Affairs & Madrasah Education 2021-2023, phir Non-Conventional & Renewable Energy Sources — karyakaal 10 May 2021 se 4 May 2026 tak). 2026 chunav me Goalpokhar se 1,22,105 vote lekar vijayee (businesstoday + devdiscourse + IndianExpress result pages; BJP Sarajit Biswas 38,315). Pehchan seat se pakki — 'Rabbani' naam ke kayi anya neta/vyakti hain (jaise Pakistan/Bangladesh ke naam-sadrish vyakti, Mohd Gulam Rabbani naam-antaran) jo alag hain.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (md-ghulam-rabbani):
// 1. millenniumpost.in 'Minister lays foundation stone for community hall in Islampur' — 29 Feb 2024; Rabbani ne Ukilpara (Islampur Municipality, Ward 10) me Rs 83 lakh ke community hall ka shilanyas kiya. REJECT: pre-tenure (2024, May 2026 se pehle) + millenniumpost whitelist me REJECT-listed hai.
// 2. millenniumpost.in 'Construction of bridge over Sartano begins in Goagaon' — 19 Jan 2026; Goalpokhar MLA Ghulam Rabbani ne Sartano nadi par Rs 2.42 crore ke pul (North Bengal Development dept funded, Goalpokhar-Chakulia jodne wala) ka shilanyas kiya. REJECT: pre-tenure (Jan 2026 < May 2026) + millenniumpost whitelist me REJECT-listed hai.
// 3. NDTV 'West Bengal Election 2026 After Bengal Minister Md Ghulam Rabbani Says Name Not On SIR List, Questions Over Candidature' (ndtv.com, ~23 Mar 2026) — Rabbani ne SIR supplementary list me apna naam na hone ka dawa kiya. REJECT: pre-tenure (March 2026); negative ki paribhasha me bhi nahi aata (FIR/janch nyayik vikas nahi, sirf matdata-soochi dawa).
// 4. pinewz.com (Mar 24, 2026) — SIR list me naam-na-hone par wahi prakaran. REJECT: pre-tenure + non-whitelist outlet.
// 5. mobicrazy.com / Economic Times 'TMC drops 75 MLAs' — Sashi Panja aur 'Golam Rabbani' SIR 'adjudicated list' par. REJECT: SIR adjudication criminal mamla nahi (negative ki paribhasha bahar); waise bhi chunav-poorv ki khabar.
// 6. indiatvnews.com 'Bengal's power shift' (05-05-2026) — Rabbani ko 22 'hare hue mantriyon' ki soochi me rakha. REJECT: galat jaankari — woh Goalpokhar se 83,790 maton se JEETE (businesstoday/devdiscourse/IndianExpress sab jeet ki pushti karte hain); plus IndiaTV whitelist me nahi.
// 7. telegraphindia.com 'Suvendu new ministers | Muslims missing from Bengal ministry for the first time' (June 2026) — Rabbani ka zikr sirf 'Mamata ke 15-saal ke shasan me Muslim mantri' ke sandarbh me. REJECT: unke vyaktigat kaam/fund/prashn ka koi tathya nahi, party-sarkar vishleshan hai.
// 8. firsttender.com 'construction of cement concrete road from the house of golam rabbani towards...' (Banshihari, tender Rs 1.72 lakh, Jan 2026). REJECT: 'golam rabbani' yahan makan ka landmark hai, MLA ka sanction/karya nahi; pre-tenure bhi hai.
// 9. Hindi search hits: ruposhi-bangla-protidin.blogspot.com (Bangladesh, Naogaon — alag vyakti, blogspot REJECT), swatantraprabhat.com (Balrampur, UP — sambandh nahi), townpost.net/thepublicpurview.com (Pakistan — naam-sadrish, alag vyakti). REJECT: pehchan mismatch / non-whitelist.
// 10. WION voter-roll-deletion piece — SIR 'under adjudication' suchi me Rabbani ka naam. REJECT: administrative chayan-soochi, FIR/janch/nyayik vikas nahi.
// 11. oneindia.com politician profile — saamanya jeevani, koi May 2026+ kaam nahi. REJECT: koi dated karyakaal tathya nahi; oneindia whitelist me nahi.
// RETRY-LEADS: koi khul-na-sakne wala whitelist page nahi mila; sabhi 403 ya paywall ke peeche nahi thay. Naya lead nahi.
westbengalWorks['md-ghulam-rabbani'] = [];

// WEST BENGAL — Chakulia — Azad Minhajul Arfin (TMC)
// Pehchan: Chakulia (Uttar Dinajpur, seat 31; Goalpokhar-II block + Bazargaon I/II GPs of Karandighi) se 2026 me TMC ticket par jeete — 90277 votes, margin 28011; naam ke roop 'Azad Minhajul Arfin' / 'Minhajul Arfin Azad' dono milte hain; halafname me koi criminal case nahi. (westbengal.ts record + Indian Express/TOI 2026 winners list)
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (azad-minhajul-arfin):
// 1. ABP Live live-update page (05 May 2026) — sirf 2026 election result/lead updates; koi May 2026+ vyaktigat kaam ka zikr nahi. Srot: https://news.abplive.com/elections/chakulia-election-result-2026-live-updates-constituency-vote-counting-winner-loser-tmc-bjp-congress-west-bengal-assembly-election-1840123
// 2. TOI Chakulia constituency page (crawl 11 din pehle) — sirf 2026 results + 2021 results; works entry layak kuch nahi. Srot: https://timesofindia.indiatimes.com/elections/assembly-elections/west-bengal/constituency-show/chakulia
// 3. Indian Express Chakulia constituency page (2026 winners list) — sirf election data, koi work mention nahi. Srot: https://indianexpress.com/elections/west-bengal-assembly-election/chakulia-constituency/
// 4. NewsPointApp (TOI feed, 04 May 2026) — sirf 2026 result reporting; pre-term. Srot: https://www.newspointapp.com/english/india/chakulia-election-result-2026-tmcs-minhajul-arfin-azad-defeats-bjps-manoj-jain-by-28011-votes-toi/articleshow/14504820564d7d3a22291135785ac967d206a977
// 5. Dailyhunt (ABP feed, m.dailyhunt.in) — TMC Muslim candidates list 2026, pre-term; aggregator, whitelist me nahi. Srot: http://m.dailyhunt.in/news/india/english/abp+live+english-epaper-abpleng/tmc+spotlights+muslim+nominees+with+47+minorities+in+fray+full+list+of+muslim+candidates-newsid-n704976902
// 6. Millennium Post 'At a Glance' (18 Feb 2025) — '~100 Cong members join TMC in Chakulia' MLA ne flag saunpa — PRE-TERM (Feb 2025) + millenniumpost whitelist me nahi + works category nahi (party karyawahi). Srot: https://www.millenniumpost.in/bengal/at-a-glance-599249
// 7. Wikipedia (Minhajul Arfin Azad / Chakulia constituency) — profile + election tables; secondary/unsourced, works nahi. Srot: https://en.wikipedia.org/wiki/Minhajul_Arfin_Azad ; https://en.wikipedia.org/wiki/Chakulia_Assembly_constituency
// 8. News-vertical + Bengali ('udbodhan/shilanyas' — Bengali search terms) + event-term ('inaugurated', 'road project school') queries — koi May 2026+ whitelist media story nahi mili; election coverage ke alawa zero hits. Koi retry-lead nahi bana (403 wala page nahi mila).
westbengalWorks['azad-minhajul-arfin'] = [];

// WEST BENGAL — Karandighi — Biraj Biswas (BJP)
// Pehchan: Biraj Biswas, BJP MLA (2026 vijeta), seat Karandighi (Uttar Dinajpur, GEN, No. 32); 1 June 2026 se MoS (Law, Judicial, North Bengal Development) — sankshipt pehchan aadhaar: ADR-backed backgroundNote (Advocate, ABVP background, 5 criminal cases) + ECI winners PDF; naam-ke-sadrish IND ummidwar se bhinna.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (biraj-biswas):
// 1. Telegraph India, 06-05-2026 (cid/2159237) — Karandighi ke naye MLA ke roop me CPM ummidwar Haji Shahabuddin se shishtachar mulakat (Rosokhowa) — gesture/mulakat matra, koi lokarpan/shilanyas/sanction nahi; entry layak kaam nahi.
// 2. The Indian Express, 03-06-2026 (profile) — mantri profile; chaar prathmiktayein (healthcare, law and order, education, infrastructure) + nadi-dredging chinta + contractors ko sadak ka kaam jaldi poora karne ko kaha — ye yojnaayein/irade hain, koi poorn kaam/sanction/GO nahi; entry nahi.
// 3. Telegraph India, 21-03-2026 (cid/2152382) — Biswas ne Gautam Paul par MCC ullanghan ki shikayat darj karayi — PRE-TERM (March 2026); reject.
// 4. Telegraph India, 15-04-2026 (cid/2155270) — Karandighi me 'namesake puzzle' (teenon mukhya ummidwaron ke hamnaam IND) — PRE-TERM, chunav-prakriya khabar; reject.
// 5. Millenniumpost, 06-04-2026 — Gautam Paul ka chunav-vaada (Dalkhola me sarkari hospital, Karandighi bus terminus) — pre-election + vipakshi ka vaada + non-whitelist outlet; reject.
// 6. Millenniumpost, 09-09-2025 — Jamaldighi me community hall ka shilanyas Gautam Paul ne kiya — PRE-TERM + non-whitelist outlet; reject.
// 7. ETV Bharat, 04-05-2026 — Karandighi election result story (Biswas 96,260 votes, margin 19,869) — non-whitelist outlet; chunav-parinaam, kaam nahi; reject.
// 8. Newsdrum (syndicated PTI copy), June 2026 — 'mother recalls' profile piece — non-whitelist; profile matra, kaam nahi; reject.
// 9. Times Now / Moneycontrol / Tribune, June 2026 — portfolio allocation lists (Law, Judicial, North Bengal Development) — non-whitelist; pad-bhar news, kaam nahi; reject.
// 10. Jansatta Hindi, June 2026 — 'kaun hain Biraj Biswas' profile — non-whitelist; profile matra; reject.
// 11. Newspointapp (TOI-syndicated) — Ujjal Biswas (poorv mantri, TMC, Krishnanagar, Nadia) tarpaulin case me giraftar — ALAG VYAKTI (naam-confusion); reject.
// 12. MyNeta 2026 — Biraj Biswas (IND, age 27, Rs 17,500 assets, 532 votes) — ALAG VYAKTI; reject.
// 13. Punjab Kesari (IANS-syndicated), 01-10-2026 — Teesta par Rs 1,175.59 crore bridge sanction — non-whitelist + MLA attribution shunya; reject.
// 14. Punjab Kesari (IANS-syndicated), 16-09-2026 — Rs 1,042 crore road infra sanction — non-whitelist + MLA attribution shunya; reject.
// 15. Wikipedia (Biraj Biswas / Karandighi Assembly constituency) — whitelist me nahi; entry ka srot nahi ban sakta; reject.
// 16. Tender aggregators (govttenders.co.in / eprocurementtenders.co.in) — aggregator sites (reject category) + Karandighi Zilla Parishad tenders me MLA ka koi naam nahi; reject.
// 17. BengalInfo / bengalinformation.org / infoexchange.live / loksatta / abplive — non-whitelist; candidate/result lists; reject.
westbengalWorks['biraj-biswas'] = [
  {
    title: 'Karandighi ke Bihinagar me kendriya sarkari karmchari Shamim Akhtar ka parivar 5 saal baad apne ghar lauta — MLA Biraj Biswas ki madad se, jahan 2.5 bigha aawasiya zameen par kabze ka aarop tha aur Calcutta High Court ke paksh me aadesh ke bawajood sthaniya prashasan sahyog nahi kar raha tha.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Telegraph (India)',
    sourceUrl: 'https://www.telegraphindia.com/west-bengal/tmc-ex-mla-lodges-case-against-abhishek-gias-uddin-molla-shreds-partys-no-2-for-autocracy-blames-him-for-poll-debacle-prnt/cid/2161088',
    date: '2026-05-18',
    note: 'Page khud padhkar verify kiya. Article 2026-05-18 ka hai; ghatna usse pichhle Ravivar (2026-05-17) ki — date article date se li gayi hai, yehi reasoning disclose ki ja rahi hai. Page ke tathya: Shamim Akhtar (Raiganj head post office me postal assistant) ne kaha ki sthaniya TMC netaon (Lutfar Rahman, Firoz Khan, Rezaul Hoque, Sowkat Ali, Moazzem Hossain aadi) ne unki 2.5 bigha aawasiya zameen zabardasti kabza ki thi, jaali dastavej banaye aur parivar ko pratadit kiya — parivar 5 saal se Raiganj me kiraye ke ghar me rehne ko majboor tha. Calcutta High Court me case darj hua aur paksh me nyayik aadesh milne ke baad bhi sthaniya prashasan ne sahyog nahi kiya. Biswas ka uddharan: “We are happy to help a helpless family.” Ye ek vyaktigat hastakshep ka parinaam hai — lokarpan/shilanyas/BEUP sanction/GO nahi.',
    period: '2026-2031',
  },
];

// WEST BENGAL — Hemtabad SC — Haripada Barman (BJP)
// Pehchan: Haripada Barman (BJP) — Hemtabad (SC), Uttar Dinajpur, 2026 me Hemtabad se BJP ticket par vijeta (1,15,529 votes, margin 12,361 vs Satyajit Barman, AITC). Pehchan ka aadhaar: westbengal.ts record (slug 'haripada-barman', constituency 'Hemtabad', constituencySlug 'hemtabad', partyShort 'BJP'), Wikipedia 'Hemtabad Assembly constituency' (2026: Haripada Barman, BJP, 12,361 margin se jeete).
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (haripada-barman):
// 1. The Telegraph (India) — 'BJP removes office's encroached portion in rare self-demolition move in Hemtabad' (04.06.26, https://www.telegraphindia.com/west-bengal/bjp-removes-offices-encroached-portion-in-rare-self-demolition-move-in-hemtabad-prnt/cid/2163882): Hemtabad BJP block office ki verandah ka BDO ke anti-encroachment drive par swayam-demolition; Haripada Barman ka naam tak nahi aaya, MLA ke kaam se sambandh nahi — REJECT.
// 2. Millennium Post — 'Hemtabad: Road construction starts with Rs 13.32 crore fund' (26 March 2025, millenniumpost.in): Kashimpur-Bisnupur 11 km road ka shilanyas Satyajit Barman (purv MLA, tab School Education MoS) ne kiya — May 2026 se PEHLE, aur Haripada Barman se sambandh nahi — REJECT (pre-term; millenniumpost waise bhi whitelist me nahi).
// 3. The Telegraph (India) — 'Bengal budget: State government announces the formation of five more districts' (23.06.26, telegraphindia.com): Hemtabad me naya fire station ki ghoshna — sarkari ghoshna hai, lekin MLA Haripada Barman ka vyaktigat yogdaan/udaatran article me nahi — REJECT (general sarkari ghoshna, vyakti-seat link nahi).
// 4. Telegraph / ABP Live / Times of India / Indian Express / Oneindia / Zee News / India TV News — chunav-result coverage (May 2026): sirf jeet ki khabar, koi May 2026+ karya/ghatna nahi — REJECT (works criteria match nahi).
// 5. YouTube/public.app/FB-level local items — whitelist se bahar — REJECT bina khole.
westbengalWorks['haripada-barman'] = [];

// WEST BENGAL — Kaliaganj SC — Utpal Brahmacharo (BJP)
// Pehchan: 2026 me Kaliaganj (SC), Uttar Dinajpur se BJP ticket par jeete (158349 votes, margin 76425); Bharat Sevashram Sangha ke purv-monk ('Utpal Maharaj' / Swami Jyotirmayananda ke naam se bhi jane jate hain). Pehchan ka aadhaar: ADR/The Hindu/Indian Express affidavit profile (2026).
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (utpal-brahmacharo):
// 1. thehindu.com/elections/candidates/WestBengal2026/utpal-brahmacharo-405/ — halafnama/candidate profile (taarikh ~April 2026): pre-term + sirf profile data, koi kaam nahi. REJECT.
// 2. indianexpress.com/elections/kaliaganj-election-result-live-updates (May 2026) — chunav parinaam coverage: May 2026+ kaam nahi, koi lokarpan/shilanyas nahi. REJECT.
// 3. indianexpress.com/article/political-pulse (21 Mar 2026) + thehindu/the-statesman/telegraphindia.com PTI story (21 Mar 2026) — Bharat Sevashram Sangha ne BJP ticket par chunav ladne par Swami Jyotirmayananda (Utpal Maharaj) ko sangh se nishkashit kiya. Pre-term (March 2026, May 2026+ vikas nahi) + party-karyawahi/criminal-mamla nahi (dharmik-sangathan ki andaruni anushasan-karyawahi) → negative criteria me nahi aata. REJECT.
// 4. telegraphindia.com/elections/west-bengal-assembly-election-2026 CM-race story (~May 2026) — Utpal Brahmacharo ka naam CM-ke-davedaaron ki charcha me: lokarpan/shilanyas/fund nahi, works criteria me nahi aata. REJECT.
// 5. bharathorizon.com 'BJP's Utpal Maharaj Wins Kaliaganj by 76,425 Votes' — chunav jeet ki khabar, May 2026+ kaam nahi. REJECT.
// 6. millenniumpost.in CM Raiganj/Balurghat projects story (30 Jan 2024) — pre-term + CM ka karyakram, MLA ka kaam nahi. REJECT.
// 7. Bengali search ke natije dailydeshsomoy.com/newsbangla24.com — Bangladesh (Gazipur) ke Kaliganj Upazila ki khabrein, Bharat ke Kaliaganj se sambandh nahi. REJECT (galat sthaan).
// 8. BEUP itemized sanction / Vidhansabha-prashn ke nateeje / GO-backed swikriti — whitelist outlets me May 2026+ ka koi dastavezi record nahi mila. RETRY-LEAD: agle batch me sarkari portal (wbassembly / GO list) par Kaliaganj-BEUP check karna.
westbengalWorks['utpal-brahmacharo'] = [];

// WEST BENGAL — Raiganj — Koushik Chowdhury (BJP)
// Pehchan: Raiganj seat (Vidhan Sabha seat no. 35, Uttar Dinajpur) ke 2026 vijeta, BJP. MyNeta 2026: age 53, B.Sc. (North Bengal University, 1993), 0 criminal cases. 1 June 2026 se West Bengal ke Minister of State (School Education + Fire & Emergency Services). Purane BJP neta Krishna Kalyani (2021 ke Raiganj MLA, 2026 me AITC ummeedwar) se vyakti alag — seat + MyNeta record se pehchan pakki.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (koushik-chowdhury):
// 1. Telegraph India (2026-09-09), 'BJP MLA, MoS Koushik Chowdhury's name used to seek hefty Durga Puja donation in Raiganj' (opened + padha, URL canonical: telegraphindia.com/west-bengal/bjp-mla-koushik-chowdhurys-name-used-to-seek-hefty-durga-puja-donation-in-raiganj-prnt/cid/2179034) — REJECT (negative entry nahi: clubs par naam ke istemal ka aarop hai, MLA KHUD aaropi nahi; MLA ne police se baat ki aur bina raajnaitik bhedbhaav kaarrvayi ke nirdesh diye. Koi FIR/chargesheet/janch/adalat ka aadesh unke khilaaf nahi).
// 2. ANI wire stories (lokmattimes.com / dailyprabhat.com / IndianEconomicObserver / asianetnews.com newsable, 2026-10-18), Kolkata Chorbagan pandal stampede par mantri ki pratikriya — REJECT (work nahi: Kolkata ki ministerial bhoomika, Raiganj seat se sambandhit lokarpan/shilanyas nahi; outlets me se koi whitelist established outlet par confirmed PTI story ka URL bhi nahi mila).
// 3. expressnewsbangla.com (2026-09-27), CII Safety Symposium me mantri ka 'three-pillar roadmap' sambodhan — REJECT (chhota portal, whitelist me nahi; aur ye Raiganj ka koi vyaktigat work nahi).
// 4. Election coverage (TOI / ABP Live / India Today / myneta.info, May 2026) — jeet ke aankde (105,561 votes, margin 58,641) — REJECT (election coverage, work mining ka vishay nahi).
// Retry-leads: koi nahi (koi whitelist outlet ka page khulne me fail nahi hua; 403 nahi mila).
westbengalWorks['koushik-chowdhury'] = [];

// WEST BENGAL — Itahar — Mosaraf Hussen (TMC)
// Pehchan: Mosaraf Hussen (All India Trinamool Congress), Itahar (Uttar Dinajpur, Assembly No. 36). Pehchan ka aadhaar: src/data/westbengal.ts record (slug 'mosaraf-hussen') + Indian Express 2026 Itahar election result page (Mosaraf Hussen, AITC, winner).
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (mosaraf-hussen):
// 1. millenniumpost.in, 15 Jan 2026 — "Work on 2.5-km concrete road begins" (Jaihaat market se Chakla road, Rs 1.3 crore, MLA ne shilanyas kiya) — REJECT: May 2026 se pehle ki ghatna; srot bhi whitelist me nahi.
// 2. millenniumpost.in, 13 May 2025 — "Healthcare: Itahar MLA launches AC ambulance service" (BEUP se Rs 20 lakh ambulance) — REJECT: May 2026 se pehle ki ghatna; srot bhi whitelist me nahi.
// 3. millenniumpost.in, ~Dec 2023 — "River erosion: State provides Rs 3.3 cr to start work in Itahar" (Mahananda bank protection) — REJECT: May 2026 se pehle; srot bhi whitelist me nahi.
// 4. PTI via theweek.in / business-standard.com / english.amarujaladigital.com, 27 Jul 2025 — "Govt helpline, party task forces, revamped migrant cells" (Itahar me migrant helpdesk, MLA ne PTI se kaha) — REJECT: May 2026 se pehle (2025, 2026 chunav se pehle); development work ki category me bhi nahi.
// 5. newindianexpress.com, 21 Jun 2026 — "TMC West Bengal minority cell chief Mosaraf Hussen resigns" — REJECT: party karyawahi (minority cell pad se isteefa); vyaktigat kaam ya negative criteria me nahi.
// 6. hiindia.com, 21 Jun 2026 — same resignation story (IANS) — REJECT: party karyawahi + srot whitelist me nahi.
// 7. newspointapp.com — same resignation, PTI feed — REJECT: party karyawahi + aggregator.
// 8. timesofindia.indiatimes.com / indianexpress.com / news.abplive.com / businesstoday.in — Itahar election 2026 result pages — REJECT: vyaktigat kaam nahi.
// 9. Web search (Fir/chargesheet/court) — sab results Bangladesh ke alag vyakti (Mosharraf Hossain, Khandaker Mosharraf Hossain) ke baare me; Mosaraf Hussen (Itahar) par koi May 2026+ nyayik vikas nahi mila — NEGATIVE: koi qualifying negative nahi.
// 10. aitcofficial.org — CM ke purane (CPI(M)-era ke baad ke) Itahar/North Dinajpur announcements — REJECT: bahut purani sarkari ghoshnayein, MLA-vishesh May 2026+ nahi.
westbengalWorks['mosaraf-hussen'] = [];

// --- Dakshin Dinajpur ---

// WEST BENGAL — Kushmandi SC — Tapas Chandra Roy (BJP)
// Pehchan: Tapas Chandra Roy, BJP, Kushmandi (SC), Dakshin Dinajpur — seat + party westbengal.ts (slug 'tapas-chandra-roy') se pakki; Wikipedia par bhi 'Incumbent, Constituency Kushmandi, Party BJP, Assumed office 2026'.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (tapas-chandra-roy):
// 1. ETV Bharat — 'West Bengal: Proposed Textile Hub In Kushmandi Comes As Big Hope For Carpet Makers Of Dhapatala' (1 Jul 2026) — MLA ka quote hai ki textile hub Kushmandi ke carpet industry ko badhayega, lekin ye unka vyaktigat kaam NAHI; ghoshna state Budget 2026 me Finance Minister Swapan Dasgupta ki thi. Outlet whitelist me bhi nahi. REJECT.
// 2. Millennium Post — 'Textile, carpet hubs to empower artisans of Gangarampur, Kushmandi' (24 Jun 2026) — Millennium Post whitelist me EXPLICIT reject; ghoshna waise bhi budget announcement hai. REJECT.
// 3. Millennium Post (muckrack byline) — 'MLA demands recognition, aid for 'Khonpala Gaan' artistes' (budget session me Tapas Chandra Roy ne vidhansabha me prashn uthaya) — Vidhansabha prashn lead tha, lekin source Millennium Post = whitelist REJECT; kisi whitelist outlet me yahi khabar nahi mili. REJECT (source rule).
// 4. newsbharati.com — BSF ne 25 Bangladeshi nagrik + 1 tout pakde; MLA ne area ka daura kiya (7 Oct 2026) — ye koi lokarpan/shilanyas/fund swikriti NAHI; chhota portal, whitelist se bahar. REJECT.
// 5. newsable.asianetnews.com — 'TMC's relevance is over, party will no longer exist: BJP's Tapas Roy' — ye Dusra Tapas Roy hai (minister/Pro-tem Speaker, Kolkata side), Kushmandi wale Tapas Chandra Roy NAHI; aur ye kaam bhi nahi. REJECT.
// 6. The Jharkhand Story / Swadesi / Punjab Kesari — cabinet expansion me 'Tapas Roy' ko industries portfolio — ye bhi wahi dusre Tapas Roy (minister) hain, Tapas Chandra Roy (Kushmandi) nahi. REJECT (galat pehchan).
// 7. Court judgements (courtkutchehry.com) me 'Tapas Chandra Roy' advocate — 1980s–2004 ke purane cases me learned advocate ke roop me; MLA se koi sambandh nahi. REJECT.
// 8. Afidavit ka 1 pending case (NGR No.1304/2020, Police Act sec 32) — halafname ka purana pending mamla akela negative NAHI; May 2026+ me koi nyayik vikas nahi mila. REJECT.
// 9. Wikipedia / India Today / Indian Express / TOI / Business Today / ABP Live / Times Now / Oneindia / Loksatta — sab sirf election profile/result pages; May 2026+ ka koi vyaktigat kaam nahi. REJECT (work content hi nahi).
// RETRY-LEADS (tapas-chandra-roy):
// R1. 'Khonpala Gaan' artistes wala vidhansabha prashn — agar koi whitelist outlet (Telegraph/IE/ToI) isi session question par khabar chhhape to 'news' badge se entry ban sakti hai. Nazar rakho.
westbengalWorks['tapas-chandra-roy'] = [];

// WEST BENGAL — Kumarganj — Toraf Hossain Mandal (TMC)
// Pehchan: Kumarganj (Dakshin Dinajpur, seat 38) ke TMC MLA; 2016/2021/2026 me lagaatar jeet (2026: 82,791 votes, margin 6,685). The Telegraph (08.07.2026) unhe 'Kumarganj MLA and former district Trinamool chairman' batata hai. 2026 halafname ke mutabiq age 66, graduate (Balurghat College, 1985), kul sampatti Rs 93,22,868, criminal cases 0.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (toraf-hossain-mandal):
// 1. The Telegraph (08.07.2026), 'South Dinajpur TMC office locked by rebels ahead of July 21 meeting' (page khola aur padha) — Ritabrata-Banerjee/Mamata-Banerjee faction ka party-office tanaaz; MLA sirf meeting me maujood leader ke roop me named, na koi works, na koi aarop. Party karyawahi = NAHI. REJECT.
// 2. The Telegraph (Feb 2026), 'Trinamool Legislators Under Adjudication in North Bengal' (snippet-verified) — SIR voter-list adjudication, May 2026 se pehle ka mamla; MLA khud aaropi nahi, jawab me documents jama kiye. Pre-term vikas NAHI. REJECT.
// 3. timesofdakshindinajpur.blogspot.com (Oct 2026 posts: party meeting Gopalganj, Samjhia GP BJP takeover, Kumarganj College) — chhota blogspot portal, whitelist me NAHI (blogspot = REJECT). Panchayat-takeover wali post me MLA ko 'political setback' kaha gaya lekin wo party-raajneeti hai, works/negative definition me nahi aata. REJECT.
// 4. Election-result coverage (TOI, Indian Express, Business Today, ABP Live, NewsPoint) — sirf 2026 results/statistics; koi lokarpan/shilanyas/fund/prashn nahi. REJECT.
// 5. FIR/court/case targeted searches — mile saare hits alag-alag 'Mandal/Mondal' vyaktiyon ke; MLA ke khilaf koi FIR/chargesheet/janch nahi; Indian Express candidate list (2026) me Cases = 0. Koi negative lead nahi. REJECT.
// 6. 'Kumarganj' + MLA/inaugurated/foundation/road/school/water (news vertical sahit) targeted searches — whitelist outlets par May 2026+ ki koi works-entry nahi mili. Khali profile theek hai.
// RETRY-LEADS (toraf-hossain-mandal): koi nahi — jo pages chahiye the wo sab khul gaye; koi 403/blocked page nahi mila.
westbengalWorks['toraf-hossain-mandal'] = [];

// WEST BENGAL — Balurghat — Bidyut Kumar Roy (BJP)
// Pehchan: Balurghat, Dakshin Dinajpur, Constituency No. 39 (Balurghat Lok Sabha); record westbengal.ts slug 'bidyut-kumar-roy' se pakka — party Bharatiya Janata Party, 2026 me 95697 votes, margin 47576.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (bidyut-kumar-roy):
// 1. qalamtimes.com — 'Durga Puja 2026: Sukanta Majumdar Inaugurates Over 20 Pandals In Balurghat' (17 Oct 2026): MLA Bidyut Kumar Roy ne Chaturthi se pandalon ka udghatan shuru kiya tha — outlet chhota non-whitelist portal hai; pandal udghatan lokarpan/shilanyas shreni ka vikas-kaam bhi nahi — REJECT.
// 2. timesofdakshindinajpur.blogspot.com — 'Before Durga Puja, Balurghat Approves 24 Projects With a Rs 12 Crore Allocation' (1 Oct 2026): 25 wards me sadak-merammat karyon ke work orders, MLA maujood the — blogspot outlet whitelist me explicitly REJECT — REJECT.
// 3. timesofdakshindinajpur.blogspot.com — 'A Free Center in Balurghat Aims to Help Students Prepare for Competitive Exams' (Sep 2026): 'Lakshya' muft guidance center ka udghatan — blogspot REJECT; center district administration ki pahal, MLA atithi ke roop me maujood — REJECT.
// 4. timesofdakshindinajpur.blogspot.com — 'At a Hospital in Balurghat, a Clean-Up Drive Takes a Human Turn' (2 Oct 2026): Gandhi Jayanti swachhata abhiyan — blogspot REJECT; MP ki pahal — REJECT.
// 5. timesofdakshindinajpur.blogspot.com — 'ABVP Seeks Sweeping Changes at Balurghat College' (14 Oct 2026): blogspot REJECT; sirf memorandum, koi dastaveji nateeja nahi — REJECT.
// 6. timesofdakshindinajpur.blogspot.com — 'South Dinajpur Distributes Puja Grants, Unveils Road Guide Maps' (Oct 2026): blogspot REJECT; puja grant karyakram, MLA vyaktigat kaam nahi — REJECT.
// 7. millenniumpost (via muckrack snippet) — 'Balurghat: Govt begins renovation work of Atreyee River sluice gate': millenniumpost whitelist me explicitly REJECT; MLA ki 'sustained effort' ka dawa isi outlet par tha — REJECT. (Retry-lead: Atreyee sluice gate renovation ka dawa — whitelisted outlet par verify karo.)
// 8. millenniumpost.in — 'CM opens, lays foundation stones for projects worth Rs 681 crore' (purana, ~993 din): blacklist outlet + pre-May 2026 — REJECT.
// 9. theindianawaaz.com — 'PM to dedicate and lay foundation stone for various rail and road projects in West Bengal' (Jan 2026): pre-May 2026; PM ke projects, MLA ke vyaktigat nahi — REJECT.
// 10. telegraphindia.com — 'Dakshin Dinajpur University in Balurghat faces fund crunch as non-salary grant remains pending' (2 Aug 2026): MLA ne kaha ki grant ke mamle ko zaroorat padne par higher education minister ke saamne uthayenge — sirf aashwasan, koi dastaveji nateeja nahi — REJECT (entry ke liye kaafi nahi).
// 11. indianexpress.com / zeenews.india.com / businesstoday.in / mapsofindia.com / news.abplive.com / timesofindia.indiatimes.com / newspointapp.com / wikipedia — sirf 2026 election result/candidate lists; koi May 2026+ works content nahi — REJECT (no usable fact).
// 12. Negative search (FIR/arrest/chargesheet/court): established media me Bidyut Kumar Roy ke khilaf koi May 2026+ FIR/chargesheet/adhyadesh nahi mila; MyNeta WestBengal2026 halafname me 0 criminal cases — halafname ke purane mamle akele negative NAHI waise bhi — REJECT (no negative).
westbengalWorks['bidyut-kumar-roy'] = [
  {
    title: 'Balurghat ke Dakshin Dinajpur University me 7 naye PG subjects ki swikriti mili — MLA Bidyut Kumar Roy ne bataya ki unhone Vidhansabha me varsity me naye subjects shuru karne ka mudda uthaya tha.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Telegraph (India)',
    sourceUrl: 'https://www.telegraphindia.com/west-bengal/new-pg-courses-but-no-teachers-state-clears-7-subjects-at-north-bengal-varsity-prnt/cid/2179212',
    date: '2026-09-08',
    note: 'The Telegraph ne 10 Sep 2026 ko report kiya ki state higher education department ne Dakshin Dinajpur University, Balurghat ko 7 subjects (Bengali, Sanskrit, history, chemistry, education, philosophy, geography) me PG courses ki manjuri di — har subject me 50 seats; VC Pranab Ghosh ne confirm kiya ki admission ka vigyapan jald aayega. MLA Bidyut Kumar Roy ne page par kaha ki unhone Vidhansabha me naye subjects shuru karne ka mudda uthaya tha aur state sthayi campus ke nirman/shikshakon ki niyukti ke liye kadam uthayegi. Taarikh ka tark: page 10 Sep 2026 (Guruvaar) ko prakashit hua aur manjuri ko Tuesday (8 Sep) ka batata hai, isliye date 2026-09-08. Page khud is swikriti par sawal uthata hai — varsity ke paas sthayi imarat nahi aur 7 naye subjects ke liye koi shikshak nahi.',
    period: '2026-2031',
  },
];

// WEST BENGAL — Tapan ST — Budhrai Tudu (BJP)
// Pehchan: Tapan (ST), Dakshin Dinajpur, Constituency No. 40 (Balurghat Lok Sabha); record westbengal.ts slug 'budhrai-tudu' se pakka — party Bharatiya Janata Party, 2026 me 105780 votes, margin 36987.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (budhrai-tudu):
// 1. qalamtimes.com — 'Durga Puja 2026: Sukanta Majumdar Inaugurates Over 20 Pandals In Balurghat' (17 Oct 2026): Budhrai Tudu ka naam pandal inaugurations me mention — outlet chhota non-whitelist portal hai; pandal udghatan lokarpan/shilanyas shreni ka vikas-kaam bhi nahi — REJECT.
// 2. timesofdakshindinajpur.blogspot.com — 'At a Service Camp in Patiram, Officials Watch for Fees on Free Forms' (4 Oct 2026): Tudu Seva Setu camp visit me maujood the — blogspot outlet whitelist me explicitly REJECT; event bhi vyaktigat kaam nahi — REJECT.
// 3. millenniumpost.in — 'TMC intensifies outreach among SC, ST voters to reclaim Tapan' (Mar 2026): millenniumpost whitelist me explicitly REJECT; pre-May 2026; TMC campaign ki khabar, Tudu ke kaam ki nahi — REJECT.
// 4. thedailyjagran.com / newsable.asianetnews.com / wionews.com / rediff.com / businesstoday.in / oneindia.com / timesnownews.com / voterslist.in — sirf 2026 election result/candidate lists; koi works content nahi — REJECT (no usable fact).
// 5. indialeader.com — 'shri budhrai tudu' profile page: aggregator, koi May 2026+ kaam ka tathya nahi, 'legislative discussions' jaise generic dawe bina source ke — REJECT.
// 6. Negative search (FIR/arrest/chargesheet/court): established media me Budhrai Tudu ke khilaf koi May 2026+ FIR/chargesheet/adhyadesh nahi mila; courtkutchehry/indiankanoon results sirf alag naam-wale ('Tapan Kumar Ghorai', 'Tapan Das', 'Tapan Bauri') ke cases — REJECT (same vyakti nahi). Halafname ke purane 2 pending cases (ADR note me) akele negative NAHI — rule ke mutabiq excluded.
westbengalWorks['budhrai-tudu'] = [];

// WEST BENGAL — Gangarampur SC — Satyendra Nath Roy (BJP)
// Pehchan: Gangarampur (SC) vidhan sabha seat no. 41, Dakshin Dinajpur jila, Balurghat Lok Sabha ke andar; 2026 me Satyendra Nath Roy (BJP) ~1,05,083 votes se jeete, Goutam Das (AITC) runner-up. Pehle 2011 me AITC se aur 2021 me BJP se yahi seat jeete the. (Naam spelling media me kabhi 'Satyendra Nath Ray/Rai' bhi likha jata hai.)
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (satyendra-nath-roy):
// 1. Millenniumpost, 27 Nov 2023, 'TMC slams Centre for failing to build wagon factory' — pre-term (2023) aur millenniumpost whitelist me REJECT list me hai. REJECT.
// 2. newsdive.net, 18 Apr 2026, candidate asset-growth piece — May 2026 se pehle ka (pre-poll) aur whitelist outlet nahi; kaam/negative nahi. REJECT.
// 3. english.mathrubhumi.com, 27 Aug 2026, show-cause notice par report — whitelist outlet nahi. REJECT.
// 4. english.punjabkesari.com (IANS wire), 26 Aug 2026, show-cause notice par report — whitelist outlet nahi; party disciplinary action vese bhi negative-criteria me excluded ('party karyawahi = NAHI'). REJECT.
// 5. Election-result coverage (May 2026 counting): TOI constituency page, Oneindia, ABP Live, Business Today, Navbharat Times, AajTak Bangla, NewsTak, LatestLY, Bharathorizon, mapsofindia — sirf vote-count/jeet ki khabar, koi vikas-kaam nahi. REJECT.
// 6. firsttender.com Gangarampur tender listings (NH-512 road works, school fans/purifiers, Nov 2026) — tender notices hain, MLA se koi jod nahi. REJECT.
// 7. The Hindu, Indian Express, Hindustan Times, NDTV, India Today, The Telegraph (India), PTI-established outlets — May 2026+ ke is MLA se jude kisi vikas-kaam/lokarpan/shilanyas/BEUP sanction/Vidhansabha prashn ki koi khabar search me nahi mili. (Negative finding — koi entry nahi.)
// RETRY-LEADS (satyendra-nath-roy):
// 1. TOI, 27 Aug 2026, 'BJP show-causes MLA for derogatory remarks about Sukanta' (https://timesofindia.indiatimes.com/articleshowprint/133571011.cms) — browser.open par HTTP 403 aaya, page khula nahi. Content snippet ke hisaab se party disciplinary action lagta hai (negative-criteria me excluded), lekin page kholkar verify kiye bina confirm nahi. Retry karo.
// 2. The Telegraph (India) aur PTI archives me 'Satyendra Nath Roy Gangarampur' par seedha khoj — web search ne kuch nahi diya; direct archive search ek baar aur try karne layak hai.
westbengalWorks['satyendra-nath-roy'] = [];

// WEST BENGAL — Harirampur — Biplab Mitra (TMC)
// Pehchan: Harirampur (Dakshin Dinajpur, Balurghat LS) ke MLA; 2026 me TMC ticket par jeete (93098 votes, margin 1986). ADR: age 74, kul sampatti Rs 3,71,92,523, criminal cases 0. Ex-Consumer Affairs Minister (2021-2026). Foundation disclosure: ve TMC ke naam-darj 10 rebel MLAs me se ek hain (disqualification yachika dakhil); party field TMC hi rakha gaya, koi edit nahi ki gayi.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (biplab-mitra):
// 1. millenniumpost.in, 19 Nov 2025 — 'Min inaugurates 3 roads in Harirampur block' (Pundari GP, Rs 3.12 crore) — REJECT: (a) Nov 2025 pre-term hai (May 2026+ se pehle), (b) millenniumpost whitelist par nahi hai.
// 2. The Telegraph (India), 24.06.26 — 'Chairman of TMC-run civic board resigns in Gangarampur amid political turmoil' — bhai Prashanta Mitra ka istifa; Biplab Mitra ka naam sirf rebel faction join karne ke sandarbh me aaya — REJECT: parivar ka mamla + party karyawahi; MLA ka vyaktigat vikas-karya nahi.
// 3. Business Standard (PTI feed), 28.09.26 — 'Believe Bengal Speaker aware of deadline on TMC rebels disqualification: SC' — SC ne disqualification petitions par 3 mahine ki time-frame par vishwas jataya — REJECT: mudda party karyawahi (dal-badal yachika) hai; ayogta-yachika akele negative nahi; Biplab Mitra ka koi disclosed jawab nahi mila.
// 4. barandbench.com, 28.09.26 — wahi SC order, 10 MLAs ke naam (Biplab Mitra sahit) — REJECT: party karyawahi exclusion; barandbench whitelist outlet bhi nahi.
// 5. zoomnews.in / oneindia.com, 16.09.26 — 'West Bengal Assembly: 10 Rebel TMC MLAs Issued Notices Over Disqualification Petition' — REJECT: non-whitelist sources + party karyawahi exclusion.
// 6. gtcnews.com (ANI feed), 28.09.26 — wahi SC order — REJECT: ANI-fed chhota portal, whitelist par nahi; party karyawahi.
// 7. Mathrubhumi English, 27.08.26 — BJP MLA Satyendra Nath Roy ko show-cause; dawa ki Biplab Mitra ne district meeting me Sukanta Majumdar ke development initiatives ki tareef ki — REJECT: non-whitelist outlet; doosre neta ke kaam ki tareef, Mitra ka apna vikas-karya nahi; video bhi independently verify nahi.
// 8. Times of India / Business Today / Indian Express, May 2026 — Harirampur chunav nateeja coverage — REJECT: chunav coverage, karya-entry nahi.
// 9. oneindia.com politician profile + indialeader.com — REJECT: aggregator/profile pages, dated/dastaveji vikas-karya nahi.
// 10. BEUP fund: Harirampur/Biplab Mitra ka koi disclosed itemized BEUP sanction May 2026+ me whitelist outlet ya sarkari portal par nahi mila — entry nahi bani.
// RETRY-LEADS: koi nahi (khul na sakne wala koi whitelist page nahi mila).
westbengalWorks['biplab-mitra'] = [];

// --- Malda ---

// WEST BENGAL — Habibpur ST — Joyel Murmu (BJP)
// Pehchan: Joyel Murmu, BJP, Habibpur (ST, Malda) ke MLA (2026 me 142062 votes, margin 78188 se jeet); 1 June 2026 se Paschim Bengal sarkar me Minister of State — Tribal Development aur Irrigation and Waterways. Pehchan ka aadhaar: westbengal.ts record (slug 'joyel-murmu') + Telegraph/Bengal cabinet coverage.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (joyel-murmu):
// 1. Telegraph India, 2026-07-29 — 'Bengal ministers flag Jal Jeevan Mission lapses under previous government': Joyel Murmu (MoS irrigation) Malda district collectorate ki review meeting me maujood the; unhone TMC shasan ke dauran irrigation vibhag ki flood/erosion-control files ke gayab hone ka aarop lagaya, jaanch ki maang ki. REJECT: vyaktigat lokarpan/shilanyas/sanction/GO nahi — mantri ke roop me review meeting me maujoodgi aur pichhli sarkar par aarop; Habibpur seat me koi vyaktigat kaam nahi. (Page kholkar padha.)
// 2. Telegraph India, 2026-09-20 — 'Suvendu's ministers inspect flood-ravaged Bhutni': 5 mantriyon ki team (jinme Joyel Murmu — irrigation and waterways — shamil) ne Malda ke Manikchak block ke Bhutni islet aur Ratua-I block ke baadh-prabhavit ilaakon ka daura kiya, relief camps dekhe. REJECT: daura Manikchak/Ratua me tha, Habibpur seat me nahi; relief inspection hai, lokarpan/shilanyas/sanction/GO nahi. (Page kholkar padha.)
// 3. Telegraph India, 2026-06-02 — 'Elation in north over elevation of nine BJP MLAs to ministerial posts': Joyel Murmu ko Malda se MoS banaye jaane ka zikr. REJECT: pad-sambandhi khabar hai, kaam (work) nahi.
// 4. The Hindu live, 2026-06-01 — 'West Bengal Cabinet expansion highlights: 35 MLAs take oath': 'Joel Murmu' ko shapath lene wale MoS ki suchi me naam. REJECT: shapath-samaroh ki khabar, kaam nahi.
// 5. The Statesman, 2026-06-01 — 'Optimism after north Bengal gets adequate representation in state cabinet': Habibpur me Joyel Murmu ke samarthakon ka jashn (Kendpukur se julus). REJECT: outlet whitelist me nahi (The Statesman listed nahi); vaise bhi jashn/rally hai, kaam nahi.
// 6. Telegraph India (purana, ~2023) — 'BJP MP Khagen Murmu, MLA Jewel Murmu booked over alleged vandalism of police outpost': July 2023 me Burhan Murmu ki maut ke virodh me SH10 road blockade aur Nalagola police outpost me todphod ke aarop me FIR (halafname ke 1 criminal case — IPC 143/283/186/353/34 — se mel khata hai). REJECT (negative ke roop me): pre-term mamla hai aur May 2026+ me koi nyayik vikas (adalat ka aadesh/notice) nahi mila — halafname ke purane pending mamle akele negative NAHI.
// 7. shuru.co.in (Bengali, June 2026) — shapath ke baad Joyel Murmu ka Habibpur me jan-sampark/daura (Kendpukur, Mandal adhyaksh ke karyasthal par swagat). REJECT: chhota portal/aggregator — whitelist me nahi; vaise bhi sirf daura/swagat hai, kaam nahi.
// 8. Portfolio suchiyan (smartupdate24.com, ibgnews.com, republicworld/indiatvnews, June 2026): 'Joyel Murmu — Tribal Development; Irrigation and Waterways (MoS)' — sirf portfolio list. REJECT: kaam ka vivaran nahi.
// 9. Naam-trap: 'Murmu' search me President Droupadi Murmu ke Odisha/Rairangpur uddhav-shilanyas ki khabrein mili (2026-06-20) — sambandhit vyakti nahi. IGNORE.
// 10. Sarkari portal/GO: wb.gov.in par 'Joyel Murmu' se judi koi press release ya GO-backed swikriti nahi mili (search me zero result). Retry-lead: nahi — GO search exhausted.
westbengalWorks['joyel-murmu'] = [];

// WEST BENGAL — Gazole SC — Chinmoy Deb Barman (BJP)
// Pehchan: Gazole SC (Malda district) se BJP ke MLA; record westbengal.ts se pakka (slug: 'chinmoy-deb-barman', constituency: 'Gazole'). 2026 me jeet kar doosra karyakaal shuru (2021 me bhi BJP se jeete the).
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (chinmoy-deb-barman):
// 1. 2026 chunav jeet ki khabrein (Indian Express / TOI / Business Today / ABP Live, May 2026): Gazole SC se 1,31,541 votes se jeet — election result hai, kaam nahi. Koi vyaktigat lokarpan/shilanyas/BEUP/GO nahi.
// 2. The Telegraph — 'Malda: MLA accused of assault, public threats' (03.01.2022, https://www.telegraphindia.com/amp/west-bengal/malda-mla-accused-of-assault-public-threats/cid/1845902): 2022 ka aarop (chhaatr ki pitaai ka daawa), pre-term + May 2026+ me koi nyayik vikas nahi mila. REJECT: pre-term mamla bina naye vikas ke.
// 3. The Telegraph — 'Beware of scams in my name' (Amlan Bhaduri par lekh, ~Jul 2026, https://www.telegraphindia.com/west-bengal/beware-of-scams-in-my-name-malda-bjp-mla-to-public-prnt/cid/2171014): ullekh hai ki Barman ka cellphone 'allegedly hacked' hua tha aur unhone police complaint darj ki — khud complainant hain, aaropi nahi; koi kaam (kaam/ghatna) nahi. REJECT: vikas-karya nahi, negative nahi (aarop unpar nahi).
// 4. ETV Bharat — 'PM SHRI School ... Malda: Sukanta Majumdar' (27.08.2026, https://www.etvbharat.com/en/state/pm-shri-schools-to-be-launched-in-bengal-navodaya-vidyalaya-coming-up-in-malda-sukanta-majumdar-enn26082707185): Barman sirf KV Aradhpur bhavan-udghatan karyakram me upasthit the; udghatan MoS Sukanta Majumdar ne kiya. REJECT: whitelist par nahi (ETV Bharat) + sirf upasthiti, unka apna kaam nahi.
// 5. Loksatta affidavit entry ('5' cases dikhata hai): halafname ke purane pending mamle akele negative nahi; whitelist outlet nahi. REJECT.
// 6. 5dariyanews 'Bengal cabinet expansion' (Jun 2026): Barman mantri-bistar list me NAHI hain — koi pad/nirnay nahi, entry layak kuch nahi. REJECT.
westbengalWorks['chinmoy-deb-barman'] = [];

// WEST BENGAL — Chanchal — Prasun Banerjee (TMC)
// Pehchan: seat 'Chanchal' (Malda, Maldaha Uttar LS) + TMC + age 56, ex-IPS officer (2006 batch WB cadre; SP Malda/South Dinajpur, DIG Malda/Balurghat, IG Raiganj range, VRS 2024; TMC ke Malda Uttar Lok Sabha candidate 2024). May 2026 me Chanchal se jeete (1,28,014 votes, margin 63,874; ADR affidavit me 0 criminal cases, assets Rs 3,92,14,353).
//          Footballer wale TMC MP Prasun Banerjee (Howrah) se alag vyakti hain — unke saare khabar (arrest warrant / chargesheet / Narada-ED) IS MLA par lagu NAHI.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (prasun-banerjee):
// 1. knowledgemart.org — 'TMC Money Laundering Scam: Prasun Explodes' (Jul 18, 2026) — MLA ne apni hi party par Cayman Islands fund-route ka aarop lagaya, ED janch ki maang — REJECT: outlet whitelist me nahi (chhota portal); aarop apni party par = party karyawahi, works mining se bahar.
// 2. Wikipedia — '2026 Trinamool Congress split' rebel-MLA list (Prasun Banerjee, Chanchal, sl 45) — REJECT: Wikipedia whitelist me nahi; party bagawat = party karyawahi, excluded.
// 3. nationalheraldindia.com — 'West Bengal: 2 killed in mob lynching over cattle-theft suspicion' (Oct 3, 2026) — MLA ka quote maujood, lekin outlet whitelist me nahi aur quote works nahi hai — REJECT.
// 4. zeenews / economictimes / telegraphindia — 'Arrest warrant against Trinamool MP Prasun Banerjee' (Jul 2015) + indiablooms — 'Narada sting: TMC MP Prasun Banerjee ED interrogation' — REJECT: ye saare Howrah ke footballer MP ke khabar hain, Chanchal ke MLA nahi; waise bhi May 2026 se pehle ke. Halafname me MLA ke 0 criminal cases.
// 5. TOI / Indian Express / ABP Live / Business Today / bharathorizon.com — 2026 Chanchal election result coverage — REJECT: chunav coverage hai, lokarpan/shilanyas/BEUP/fund/GO/prashn-nateeja kuch nahi.
// 6. The Statesman — 'TMC fields Goutam Deb from Siliguri...' (Mar 18, 2026, candidate list) — REJECT: pre-term announcement, works nahi.
// 7. business-standard.com (IANS, 2013) — Howrah bypoll newsletter — REJECT: doosre vyakti (footballer MP) + pre-term.
// RETRY-LEAD: prasunbanerjee.com (MLA ki khud ki site — 'present MLA from Chanchal') khul nahi saki (browser.open source fetch failed). Yahan kuch mile bhi to 'dawa' badge par hi ja sakta hai; parent-level retry se kholne par lokarpan/shilanyas ki suchi mile to check karein.
westbengalWorks['prasun-banerjee'] = [];

// WEST BENGAL — Harishchandrapur — Md. Matibur Rahaman (TMC)
// Pehchan: Harishchandrapur (seat 46, Malda) ke 2026 se MLA, TMC. westbengal.ts record se: party All India Trinamool Congress, margin 48271, halafnama note: age 38, 2 criminal cases (Serious IPC 3, cheating IPC 420 sahit), total assets Rs 25,68,19,938 (ADR West Bengal Winning Candidate Report 2026 / ECI affidavit data).
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (md-matibur-rahaman):
// 1. Election-result coverage (TOI constituency page, Business Today live updates, ABP Live result live, businesstoday 'Md. Matibur Rahaman of AITC beats BJP's Ratan Das', voterslist.in winners list) — sab May 2026 ke chunav nateeje, May 2026+ ke vyaktigat karya NAHI; reject.
// 2. TMC candidate list (ABP Live, 17 Mar 2026; instapdf.in PDF) — pre-term ticket announcement (naam 'Md Matebur Rahman'/'Md. Matebur Rahman' ke roop me); reject.
// 3. ETV Bharat (12 Mar 2026) '2021 BJP candidate Motiur Rahman joins TMC' + The Print/PTI (7 Mar 2026) 'BJP leader Motiur Rahman joins TMC' — pre-term dal-badal ki khabar; reject.
// 4. The Telegraph (CID 2152227) — North Bengal nominations ruffle feathers, Mar 2026, ticket vitark par Tajmul Hossain ka virodh; pre-term; reject.
// 5. Wikipedia (EN/BN) 'Md. Matibur Rahaman' — 'GORIBER BONDHU' dawa; srot sirf Facebook share + myneta; whitelist outlet nahi + pre-term jeevan-parichay; reject.
// 6. millenniumpost.in (4 Jan 2024) 'Min lays foundation stones for dev works worth about Rs 6 cr' — Harishchandrapur me kaam lekin mantri Sabina Yeasmin ne kiye, MLA Matibur ka koi sambandh nahi; pre-term + millenniumpost whitelist par NAHI; reject.
// 7. New Indian Express (2 Oct 2026) + Hindusthan Samachar (21 Sep 2026) — Harishchandrapur me Annapurna scheme virodh (BDO tippani / BDO daftar ke bahar pradarshan); MLA vyaktigat roop se aaropi NAHI, seat ki khabar matra; negative criteria (MLA khud aaropi + FIR/chargesheet/janch ya May 2026+ nyayik vikas) poore NAHI; reject.
// 8. Halafname ke 2 pending criminal cases (Serious IPC 3, IPC 420 sahit) — pre-term pending mamle, May 2026+ me koi nyayik vikas (aadesh/notice) nahi mila; task rule anusaar 'Halafname ke purane pending mamle akele negative NAHI'; reject.
westbengalWorks['md-matibur-rahaman'] = [];

// WEST BENGAL — Malatipur — Abdur Rahim Boxi (TMC)
// Pehchan: Malda jile ki Malatipur seat (Malda district) ke TMC vidhayak; data file
// (~/workspace/aapkaneta/src/data/westbengal.ts, slug 'abdur-rahim-boxi') me seat+party
// confirmed; 2026 Chunav me 104,123 votes se jeet (TOI/Business Today, May 2026).
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (abdur-rahim-boxi):
// 1. Indian Express 'The Newsmaker' profile (Sep 2025) — 'acid attack' vivad Sep 2025
//    ka hai (pre-term), May 2026+ me koi FIR/chargesheet/adhaalati aadesh ki khabar
//    nahi mili — negative ka criteria (May 2026+ nyayik vikas) poora nahi.
// 2. Times of India 'acid attack remark' stories (Sep 2025) — wahi pre-term vivad;
//    May 2026+ ka koi legal vikas disclosed nahi — REJECT.
// 3. AITC Format C-7 affidavit disclosure (Apr 2026) — 2 purane pending mamle
//    (Ratua PS Case 174/2018; CRR 5489/2024, SDJM Chanchal) — sirf halafnama ke
//    purane pending mamle hain, akele negative NAHI — REJECT.
// 4. Telegraph India (Feb/Mar 2026, pre-poll) — Malda BJP bike row, EC police
//    observer vivad — chunaav-purva party-politics bayan, koi works nahi — REJECT.
// 5. The Statesman (Oct 2026) — Malda ZP/English Bazar municipality par BJP ke
//    takeover par Boxi (Malda district TMC president ke roop me) ka pratikriya
//    bayan — party-politics khabar, vyaktigat lokarpan/shilanyas nahi — REJECT.
// 6. Millennium Post (Feb 2026) — Malatipur Gram Panchayat defections (party news,
//    pre-term) — works nahi, aggregator-level portal bhi blacklist — REJECT.
// 7. bharathorizon.com election preview — chhota portal + chunaav-charcha, works
//    ka koi tathya nahi — REJECT.
// 8. indialeader.com profile — biography page, dated works ka koi tathya nahi — REJECT.
// 9. Bengal-script queries ('Rahim Bakshi Malatipur' — Bengali search terms) — Bangladesh ke results aaye,
//    koi Indian works-lead nahi; Anandabazar/SangbadPratidin me is MLA par May 2026+
//    ke works ki koi khabar index nahi — RETRY-LEAD: Bengali dailies ki site-search.
westbengalWorks['abdur-rahim-boxi'] = [];

// WEST BENGAL — Ratua — Samar Mukherjee (TMC)
// Pehchan: Ratua (seat no. 48, Malda district) se TMC MLA; 2026 me 1,06,834 votes se jeete (margin 32,562, BJP ke Abhishek Singhania ko haraya); umar ~84 saal; 2021 se Ratua ke sitting MLA.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (samar-mukherjee):
// 1. The Telegraph, 'Jute farmer drowns in Bhutni floods' (~Sep 2026, https://www.telegraphindia.com/west-bengal/jute-farmer-drowns-in-bhutni-floods-say-villagers-ganga-keeps-rising-earthmovers-deployed-to-cut-embankment-and-drain-excess-water-prnt/cid/2179044) — MLA ne Mahanandatola/Bilaimari me ~80,000 prabhavit hone ka bayan diya; sirf quote hai, koi lokarpan/shilanyas/fund sanction nahi — entry nahi.
// 2. ETV Bharat, 'ETV Bharat Impact: Help Reaches Flood-Hit Bilaimari' (Sep 2026, https://www.etvbharat.com/amp/en/state/etv-bharat-impact-story-help-reaches-flood-hit-bilaimari-in-west-bengal-malda-after-victims-plight-comes-to-light-enn26091800539) — MLA ne Bilaimari relief ka mudda uthaya; non-whitelist outlet + bayan hai, kaam nahi — reject.
// 3. TrendKia, 'West Bengal TMC MLA Compares Rival BJP Chief Minister Suvendu Adhikari To Lord Krishna' (8 Sep 2026, https://trendkia.com/en/politics/west-bengal-tmc-mla-compares-rival-bjp-chief-minister-suvendu-adhikari-to-lord-krishna-over-ganga-erosion-relief-29375) — non-whitelist outlet; political tareef hai, kaam nahi — reject.
// 4. The Telegraph, 'Cut money case on Trinamul legislator' (Dec 2019, https://www.telegraphindia.com/amp/west-bengal/cut-money-case-on-trinamul-legislator/cid/1724319) — pre-term FIR mamla; May 2026+ me koi vikas nahi — negative criteria fail — reject.
// 5. indialeader.com leader profile (https://www.indialeader.com/ViewLeader/59819/shri-mukherjee) — non-whitelist + generic profile; May 2026+ ka koi specific kaam darj nahi — reject.
// 6. Millennium Post, 'Save erosion-hit villages' (20 May 2025, https://www.millenniumpost.in/bengal/save-erosion-hit-villages-thousands-of-families-from-malda-appeal-to-pm-611492) — outlet blacklist me; pre-term bhi — reject.
// 7. ABP Bengali live-blog, 'Ratuar bidhayak Samar Mukhopadhyayer biruddhe Chanchal thanay abhijog daayer' (Bengali headline) (12 Aug 2026, https://bengali.abplive.com/district/west-bengal-news-12-august-2026-suvendu-adhikari-annapurna-yojana-scheme-abhishek-banerjee-mamata-banerjee-1188711/amp) — Chanchal PS complaint wali wahi ghatna; The Telegraph (whitelist) ne detail me cover kiya, isliye Telegraph hi canonical source hai; ABP item duplicate/cross-verification mana.
westbengalWorks['samar-mukherjee'] = [
  {
    title: 'Ratua ke TMC MLA Samar Mukherjee ko Samsi Cooperative Society ki 13 decimal zameen ke avaidh bikri ke aarop me Chanchal thana me bulakar lagbhag subah 10 baje se dopahar 12 baje tak poochtaach ki gayi, aur thane se bahar nikalte hi BJP karyakarton ne unpar ‘chor’ ke nare lagaye, jabki MLA ne aarop nakarte hue ise apni chhavi ‘tarnish my image’ karne ki sajish bataya aur police ke mutabik mamle ki janch jaari hai.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Telegraph',
    sourceUrl: 'https://www.telegraphindia.com/west-bengal/illegal-usury-cuffs-on-aide-to-tmc-leader-malda-police-allege-extortion-prnt/cid/2174735',
    date: '2026-08-13',
    note: 'The Telegraph ke mutabik Chanchal ke Shahid More ilake me Samsi Cooperative Society ki 13 decimal zameen ke bikri ka aarop; summoning ke baad poochtaach; bahar BJP ke Prasenjit Sharma (Chanchal panchayat sadasya) ke netritva me narebaazi. Date inferred: article me ghatna ‘Wednesday’ ki batayi gayi hai aur ABP Live ke 12 Aug 2026 ke live-blog me wahi ghatna darj hai, isliye publication date 13 Aug 2026 maani gayi.',
    period: '2026-2031',
  },
];

// WEST BENGAL — Manikchak — Gour Chandra Mandal (BJP)
// Pehchan: westbengal.ts record ke anusar — slug 'gour-chandra-mandal', seat 'Manikchak' (Malda district), party 'Bharatiya Janata Party' (BJP), tenure 2026-2031. 2026 me Manikchak se jeete (1,10,118 votes, margin 13,938; The Hindu/Indian Express election pages).
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (gour-chandra-mandal):
// 1. The Statesman — flood/erosion coverage Aug-Sep 2026 (MLA ne Ganga ksharan wale ilaqe ka nirikshan kiya, Panchayat Samiti ne sadak marammat ka prastav pass kiya; 25.08.26, 08.09.26, 23.09.26, 27.09.26 ke tukde) — REJECT: The Statesman whitelist me nahi hai.
// 2. UNI India — 'Bengal: Bridge brings relief to flood-hit Bhutni' (16/10/26; MLA ne Dakshin Chandipur par temporary bridge ka nirikshan kiya) — REJECT: UNI whitelist agency nahi hai (sirf PTI, wo bhi established outlet par).
// 3. The Telegraph (India) — 'Malda zilla parishad sabhadhipati Gour Chandra Mandal quits' (07.07.21) — REJECT: pre-term (July 2021; us samay wo zilla parishad sabhadhipati the, MLA nahi).
// 4. The Telegraph (India) — 'BJP sees political discrimination in flood relief, takes out march to Manikchak BDO's office' (cid/2041737, ~792 din purana) — REJECT: pre-term (us samay wo BJP district general secretary the; Manikchak me TMC MLA Sabitri Mitra thin).
// 5. ADR West Bengal Winning Candidate Report 2026 (Hindi PDF) — halafname me 3 pending mamle (Case 721/2009, 27/2025, 25/2018) — REJECT negative: halafname ke purane pending mamle akele negative NAHI; kisi bhi mamle me May 2026+ ka nyayik vikas (adalat ka aadesh/notice/FIR/chargesheet) whitelist srot me nahi mila.
// 6. courtkutchehry.com — 'Gour Chandra Mandal Vs State of Bihar now Jharkhand' — REJECT: purani appeal, seat se pehchan nahi, doosra vyakti/maamla lagta hai; established media bhi nahi.
// 7. TOI / Indian Express / ABP Live / Business Today / Oneindia election-result pages (May 2026) — REJECT: chunav coverage, karyakaal ka kaam nahi.
// 8. PM Modi ke Malda projects (Jan 2026) wale tukde — REJECT: MLA se vyaktigat sambandh nahi.
// RETRY-LEAD: The Statesman ke Sep-Oct 2026 wale flood stories (Manikchak Panchayat Samiti ne sadak marammat ka prastav adopt kiya; MLA ne ksharan-niyantran kaamon ka nirikshan kiya) ko telegraphindia.com ya PTI copy me dhundho — mila to usi tathya par 'news' entry ban sakti hai.
// QA-DROP (coordinator, nirikshan/daura niyam): worker ne 15-Aug-2026 ke Ganga ksharan-niyantran kaam ke nirikshan + thekedaaron ko chetavni par entry banayi thi, lekin ye chal rahe kaam ka sirf nirikshan/daura hai — lokarpan/shilanyas/sanction/GO/mang-nateeja nahi. Nirikshan/daura akele entry nahi. Profile imaandaari se khaali. Fragment file me poori entry preserved hai.
westbengalWorks['gour-chandra-mandal'] = [];

// WEST BENGAL — Maldaha SC — Gopal Chandra Saha (BJP)
// Pehchan: Maldaha (SC) seat ke MLA, BJP; 2026 me 1,23,656 vote, 50,128 ke antar se jeete (doosri lagatar jeet — 2021 me bhi Maldaha se MLA the). Maldaha AC No. 50, Malda zila; Old Malda Municipality + Habibpur/English Bazar ke gram panchayat. Pehchan aadhaar: westbengal.ts record + Indian Express election result page + myneta.info halafnama.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (gopal-chandra-saha):
// 1. Kendriya Vidyalaya, Aradhpur (Old Malda) nayi building inauguration, 27 Aug 2026 (ETV Bharat + lokmattimes/punjabkesari IANS copy) — REJECT: (a) outlet whitelist me nahi (ETV Bharat/IANS), (b) MoS Education Sukanta Majumdar ne inauguration kiya, MLA sirf mehmaan the — MLA ka vyaktigat lokarpan/shilanyas nahi.
// 2. Navodaya Vidyalaya ke liye Old Malda me 11 acre zameen handover, 22 Sep 2026 (The Statesman) — REJECT: outlet whitelist me nahi; zila prashasan ne zameen di, MLA ne sirf swagat-bayaan diya — vyaktigat kaam nahi.
// 3. Ramkeli fair inauguration me upasthiti, ~June 2026 (The Telegraph) — REJECT: MoS Joyel Murmu/MP Khagen Murmu ke saath sanskritik mele ki ceremonial upasthiti; Sadak/Paani/School/Aspataal/Any vikas-kaam nahi.
// 4. Eklavya school Rs 97 crore scam aarop (millenniumpost, 26 March 2026) — REJECT: (a) millenniumpost whitelist me nahi, (b) chunav-purv raajnaitik aarop, koi FIR/chargesheet/janch ka zikr nahi, (c) term se pehle (May 2026 se pehle), (d) kisi whitelisted outlet ne cover nahi kiya.
// 5. "Amardeep Saha" Malda strongman girftari, Aug 2026 (mangalorean.com) — REJECT: alag vyakti (TMC-linked Malda strongman), MLA Gopal Chandra Saha se koi sambandh nahi.
// 6. Jiban Krishna Saha school-job scam ED/CBI (Business Standard, Statesman, 2025) — REJECT: TMC MLA Jiban Krishna Saha (Burwan, Murshidabad), naam-sadrishya matra; Gopal Chandra Saha se sambandh nahi.
// 7. Gopal Saha & Anr vs State of WB, Calcutta High Court, 17 Jan 2019 (indiankanoon) — REJECT: pehchan pakki nahi (2009 ke vivah-dahaaj mamle ka doosra Gopal Saha), aur 2019 pre-term vikas ke bina.
// 8. Malda Town station redevelopment flag-off ceremony (The Week, Aug 2023) — REJECT: pre-term (2023), PM ka Amrit Bharat Station program; MLA sirf diginitary ke roop me upasthit the.
// 9. BJP separatist-buzz stories (Telegraph India, 2024) — REJECT: pre-term, raajnaitik bayanbazi; vikas-kaam nahi.
// 10. Election campaign coverage (Telegraph/ABP Live/Indian Express, March-May 2026) — REJECT: chunav coverage, karyakaal ka kaam nahi.
// 11. Vidhansabha prashn / BEUP fund sanction / GO-backed swikriti (May 2026+) — REJECT: khojne par koi whitelisted source me MLA ke naam par vyaktigat prashn-nateeja ya itemized BEUP sanction nahi mila.
// 12. 2026 halafname me pending criminal cases — REJECT: halafname ke purane pending mamle akele negative nahi; May 2026+ ka koi nyayik vikas (FIR/chargesheet/adalati aadesh) nahi mila.
westbengalWorks['gopal-chandra-saha'] = [];

// WEST BENGAL — English Bazar — Amlan Bhaduri (BJP)
// Pehchan: Amlan Bhaduri (Buro), BJP, English Bazar (Malda); 2026 me 154096 votes, margin 93784 se jeete; party ke Assembly me chief whip; 2026-10-07 ko English Bazar Municipality ke chairman nirvirodh chune gaye (Telegraph India, 2026-10-08). Aadhaar: westbengal.ts record + myneta.info affidavit (ADR report).
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (amlan-bhaduri):
// 1. Malda airport revival inspection — Telegraph India 2026-09-03 (cid/2178079). Khaula-padha. REJECT: sirf nirikshan-daura + quotes; koi lokarpan/shilanyas/fund-swikriti/GO-nateeja nahi.
// 2. Ramkeli mela heritage tag / Sustani crossing rename — Telegraph India 2026-06-15 (cid/2165566). Khaula-padha. REJECT: CM office ko likhit anurodh matra; koi documented parinaam/swikriti nahi.
// 3. English Bazar Municipality chairman election 2026-10-07 — Telegraph India 2026-10-08 (cid/2183674). Khaula-padha. REJECT: raajnaitik pad ki chunaav; vikas-karya ki shreni me nahi. Pehchan ke liye note kiya.
// 4. Chief whip appointment — Telegraph India 2026-06-17 (cid/2165892). REJECT: party/Vidhan Sabha pad niyukti; work entry nahi.
// 5. Malda Medical College chuha-menace comment — Telegraph India (cid/2176292). REJECT: sirf tippani, koi documented karyavahi/nateeja nahi.
// 6. Amardeep Saha giraftari comment (mangalorean.com / lokmattimes 2026-08-12) — REJECT: non-whitelist outlet + Bhaduri sirf quote me; khud aaropi nahi; negative nahi banta.
// 7. Flood relief distribution — The Statesman (Malda flood report). REJECT: non-whitelist outlet + relief-vitaran entry criteria me nahi.
// 8. Millennium Post 2023 high-drain story — REJECT: October 2023 ka (tenure se pehle) + non-whitelist.
// RETRY-LEADS: koi nahi (khaula na ja sakne wala whitelist page nahi mila).
// QA-DROP (coordinator, note-grounding): worker ne UDMA 3-sadasyiya samiti gathan par 'news' entry banayi thi, lekin Telegraph page par MLA ki bhoomika sirf samiti-gathan ki SOOCHNA dena hai — vyaktigat hastkshep/swikriti/maang-nateeja nahi; sarkari faisle ki soochana maang/ghoshna ke barabar hai. Profile imaandaari se khaali. Fragment file me poori entry preserved hai.
westbengalWorks['amlan-bhaduri'] = [];

// WEST BENGAL — Mothabari — Md Najrul Islam (TMC)
// Pehchan: westbengal.ts record — 'Md Najrul Islam', partyShort 'TMC', constituency 'Mothabari' (constituencySlug 'mothabari'), Malda. Affidavit naam: 'Islam Md Najrul' (myneta/ECI). 2026 me pehli baar MLA bane (sabina Yeasmin ke baad); halafname me 0 criminal cases. NAZIRUL-naam walon se pehchan seat (Mothabari) se pakki.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (md-najrul-islam):
// 1. TOI 'Mothabari assembly results 2026' (May 2026, timesofindia) — reject: sirf chunav-nateeja coverage, koi kaam/ghatna nahi.
// 2. Indian Express 'Mothabari Election Result 2026 LIVE Updates' — reject: chunav coverage.
// 3. The Hindu 'Islam Md Najrul, MOTHABARI constituency... Profile & Affidavit' — reject: pre-tenure candidate profile (May 2026), works se unrelated.
// 4. The Telegraph 'Excluded voters protest in Malda after names missing from second supplementary list' (29.03.26) — reject: pre-tenure (March 2026); MLA sirf 'party’s candidate from Mothabari' ke roop me protest par statement de rahe hain; koi lokarpan/fund/nateeja nahi.
// 5. The Telegraph 'ISF Mothabari candidate Moulana Shahjahan Ali, 17 others arrested in Malda gherao case' (03.04.26) — reject: Mo Sahajahan Ali par hai (AISF), hamare MLA nahi; pre-tenure.
// 6. TOI 'Mothabari case: NIA summons MLA Sabina Yeasmin' (Sept 2026) — reject: Sabina Yeasmin (Sujapur MLA, Democratic Trinamool Congress) par hai, hamare MLA se sambandh nahi.
// 7. Millenium Post 'Road construction project inaugurated in Gangaprasad region worth about Rs 3 crore' — reject: pre-tenure (Sabina Yeasmin ne inaugurate kiya tha) + non-whitelisted outlet.
// 8. The Telegraph 'Rs 8 crore fine on TMC leader for ration fraud in Malda' (29.10.24) — reject: alag vyakti (Malatipur ration shop owner 'Islam'); pre-tenure; hamare MLA se sambandh nahi.
// 9. IndianKanoon 'Najrul Islam vs The State Of West Bengal & Ors' (18.09.23) — reject: land-acquisition writ petition, seat-pehchan nahi milti, pre-tenure.
// 10. Lok Sabha Unstarred Q.No.638 (sansad.in, 22.07.26) — Isha Khan Choudhury ka Khalitpur ROB prashn; reject: MP ka prashn, MLA se credited nateeja nahi.
westbengalWorks['md-najrul-islam'] = [];

// WEST BENGAL — Sujapur — Sabina Yeasmin (TMC)
// Pehchan: Sujapur (Malda jile, Kaliachak-I block kshetra), TMC. 2026 me Sujapur se
// TMC ticket par jeeti (112,795 votes, margin 60,287). Purv MoS (Sinchai aur Uttar Bengal
// Vikas, 2021-2026). Foundation disclosure: TMC ke naam-darj 10 rebel MLAs me se ek hain
// (SC ne 28 Sep 2026 ko Speaker ko disqualification yachika 3 mahine me decide karne ko
// kaha); is file me party field ko chheda NAHI gaya hai.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
//
// REJECT-LOG (sabina-yeasmin):
// 1. millenniumpost.in — "Projects worth Rs 6.72 cr inaugurated in Sujapur" (Sujapur/Kaliachak-1,
//    NBDD funds; ~Jan 2025) — REJECT: (a) outlet whitelist me NAHI (millenniumpost REJECT list),
//    (b) pre-term (May 2026 se pehle).
// 2. millenniumpost.in — "Road construction project inaugurated in Gangaprasad region worth about
//    Rs 3 crore" (Mothabari seat ka road; ~Jan 2025) — REJECT: (a) outlet whitelist me NAHI,
//    (b) pre-term, (c) seedha Sujapur se bhi sambandhit nahi (purani seat Mothabari).
// 3. millenniumpost.in — "Min lays foundation stones for dev works worth about Rs 6 cr"
//    (Harishchandrapur/OMM; Jan 2024) — REJECT: outlet whitelist me NAHI + pre-term.
// 4. telegraphindia.com — "6 TMC MLAs on Sukanta Majumdar 'charge sheet'..." (17.02.26): BJP ke
//    Sukanta Majumdar ne Sabina Yeasmin par "failed to fulfil promises, incl. arsenic-free drinking
//    water project by 2024-end" aur "role in unrest" ka aarop lagaya — REJECT as negative:
//    (a) 17 Feb 2026 pre-term hai, (b) May 2026+ ka koi nyayik vikas (FIR/chargesheet/adalat ka
//    aadesh) nahi, (c) sirf virodhi-party ke political aarop hain.
// 5. timesofindia.indiatimes.com + telegraphindia.com — "Mothabari case: NIA summons MLA Sabina
//    Yeasmin" (Sep 23-24, 2026): NIA ne 20 Sep 2026 ko unhe 24 Sep ko pesh hone ko kaha (Mothabari
//    April 1, 2026 SIR-violation mamle me) — REJECT as negative: BOTH whitelisted sources spasht
//    likhte hain ki unhe 'AS A WITNESS' bulaya gaya tha ("asking me to appear as a witness");
//    MLA KHUD aaropi nahi, koi FIR/chargesheet unke naam par nahi, koi May 2026+ nyayik vikas
//    nahi. Incident khud bhi pre-term (April 1, 2026) hai. RETRY-LEAD: agar NIA ki aage ki
//    chargesheet/adlat ki karyawahi me ve aaropi banein to phir dekhein.
// 6. timesofindia.indiatimes.com — "MLA Sabina Yeasmin quits as Ritabrata faction women's wing prez"
//    (14 Oct 2026) — REJECT: party karyawahi/internal faction politics = works-criteria se bahar
//    (task: "party karyawahi... = NAHI"). Noted: unhone kaha ve party me bani rahengi.
// 7. Disqualification yachika (SC aadesh 28 Sep 2026, Speaker ke paas lambit) — REJECT:
//    foundation me pehle se disclosed hai; party karyawahi = NAHI. Note: task ke anusaar party
//    field TMC hi rakha gaya hai, khud edit nahi kiya.
// 8. uniindia.com — "NIA notices to TMC leaders..." (3 May 2026) — REJECT: pre-term (3 May 2026,
//    counting se pehle), aur usme unhe sirf candidate ke roop me uddhrit kiya gaya tha.
// 9. telegraphindia.com — "Bengal ministers flag Jal Jeevan Mission lapses..." (~Jul-Aug 2026):
//    Yeasmin ne Malda PHE meeting me virodhi aaropon ka jawab diya — REJECT: unka vyaktigat
//    lokarpan/shilanyas/fund-sanction/prashn-parinam NAHI hai (meeting me upasthiti + bayan).
// 10. thestatesman.com — "War of words over Mothabari..." (4 Apr 2026) — REJECT: outlet whitelist
//    me NAHI + pre-term (April 2026).
// 11. ETV Bharat / punjabkesari (IANS) — NIA questioning (24 Sep 2026): punjabkesari IANS copy me
//    "trinamool legislator faces NIA questioning" headline me questioning hui, lekin TOI/Telegraph
//    ke anusaar gawah ke roop me — criteria (MLA aaropi + FIR/chargesheet + nyayik vikas) poora
//    nahi. RETRY-LEAD ke saath REJECT (No. 5 ke saath).
// CONCLUSION: May 2026+ ke tenure me whitelist outlets par is MLA ka koi vyaktigat
// lokarpan/shilanyas, itemized BEUP sanction, Vidhansabha prashn ka dastaveji nateeja, ya
// GO-backed swikriti NAHI mila. Khali profile rakhi ja rahi hai.
westbengalWorks['sabina-yeasmin'] = [];

// WEST BENGAL — Baisnabnagar — Raju Karmakar (BJP)
// Pehchan: Baisnabnagar (AC-54, Malda district, Kaliachak III block, Maldaha Dakshin LS) se BJP MLA, May 2026 me chune gaye — 1,08,692 votes se TMC ki Chandana Sarkar (61,811) ko 46,881 votes ke antar se haraya (Indian Express + TOI election results 2026).
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (raju-karmakar):
// 1. ABP Live / Business Today / Indian Express / TOI (May 2026) — chunav-nateeja coverage; works entry ke liye NAHI (chunav-jeet works kaam nahi).
// 2. millenniumpost.in (21 March 2026) — 'Baishnabnagar BJP workers protest over candidate selection' (chunav se pehle ki party-andaruni ticket protest, Avijit Roy); REJECT: (a) millenniumpost reject-list par hai, (b) May 2026 se pehle ka pre-term party karyawahi mamla.
// 3. bharathorizon.com / oneindia / mapsofindia / indiatvnews (May 2026) — sirf chunav-nateeja lists; REJECT: kaam ka zikr nahi, aggregator-type outlet.
// 4. Search results 'Raju Karmakar inaugurated/shilanyas/foundation stone', 'MLA fund sanction', 'FIR/case/police' (Oct 2026) — koi whitelist outlet me May 2026+ ka vyaktigat kaam, fund sanction, Vidhansabha prashn-nateeja, GO-backed swikriti, ya negative (FIR/janch/adalati aadesh) ka record NAHI mila. Casemine/indiankanoon ke 'Raju Karmakar' case hits dusre samnaam vyaktiyon ke purane mamle hain (MLA se sambandh sthapit nahi).
westbengalWorks['raju-karmakar'] = [];

// ============================================================================
// BATCH 3 (Murshidabad — 9/23 jile)
// ============================================================================

// --- Murshidabad ---

// WEST BENGAL — Farakka — Motab Shaikh (INC)
// Pehchan: Farakka AC (No. 55, Murshidabad, GEN) — Motab Shaikh, Indian National Congress,
// 18vi Vidhansabha me May 2026 me chune gaye (63,050 votes, margin 8,193); foundation record
// src/data/westbengal.ts (lines 1697-1725) se padbhara karyakaal 2026-2031 pakka. Karyakaal SIRF May 2026+.
// Mining date: 2026-10-19. Whitelist outlets (The Hindu, Indian Express, HT, NDTV, India Today,
// TOI, The Telegraph, PTI-carrying outlets) par 8+ search rounds; 1 whitelist page (Indian Express)
// poora kholkar padha gaya.
//
// REJECT-LOG (motab-shaikh):
// 1. Indian Express 05.05.2026 (page kholkar padha: https://indianexpress.com/article/political-pulse/
//    motab-shaikh-farakka-win-supreme-court-voter-list-bengal-10674366/) — chunav-jeet + SIR-matadhikar
//    saga profile. MLA ne kaha: drinking water shortage top agenda hai aur wo SIR-peediton ka mudda
//    Vidhansabha me uthaenge. REJECT: (a) irada/maang akele — koi dastaveji nateeja, sanction ya
//    bhautik kaam nahi; (b) profile piece, kaam ki reporting nahi.
// 2. PTI via newsdrum 04.05.2026 (https://www.newsdrum.in/national/congress-wins-two-seats-in-2026-polls-after-barren-show-in-2021-11799771)
//    — Congress ki Farakka/Raninagar jeet ki khabar. REJECT: jeet ki khabar, kaam nahi.
// 3. Telegraph India 11.07.2026 (https://www.telegraphindia.com/west-bengal/rs-3600-crore-set-aside-to-stop-riverbank-erosion-in-malda-and-murshidabad-districts-prnt/cid/2169556)
//    — CM Suvendu Adhikari ki Rs 3,600 crore Ganga-ksharan ghoshna (Malda/Murshidabad). REJECT:
//    (a) sirf ghoshna — dastaveji swikriti/lokarpan/shilanyas nahi; (b) CM ka faisla, is MLA ki
//    vyaktigat bhoomika kahi nahi.
// 4. Times of India 24.09.2026 (https://timesofindia.indiatimes.com/city/kolkata/bengal-seeks-centres-help-for-rs-1550cr-malda-flood-project/articleshow/134464684.cms)
//    — Rs 1,550 crore Malda flood project prastav; sinchai mantri Arup Kumar Das. REJECT:
//    mantri/rajya-stariya prastav; Farakka MLA ki bhoomika nahi.
// 5. PIB (https://www.pib.gov.in/PressReleasePage.aspx?PRID=2233962&reg=3&lang=2) — Farakka par
//    naya 5.468 km four-lane pul (Rs 622.04 crore, 96% complete). REJECT: kendriya pariyojna,
//    MLA ki bhoomika nahi; MP/MLA se bahar.
// 6. PIB (https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2010836) — PM dwara Farakka-Raiganj
//    NH-12 four-laning (100 km, Rs 1,986 crore) ka lokarpan. REJECT: kendriya; MLA bhoomika nahi.
// 7. SIR tribunal saga (Economic Times 08.04.2026, TOI reports) — April 2026 me tribunal ne MLA ka naam
//    voter list me bahal kiya (Aadhaar/paasport ke aadhaar par). REJECT: (a) PRE-TERM (May 2026 se
//    pehle); (b) vyaktigat matadhikar ka mamla — MLA khud aaropi NAHI (appellant tha); kaam bhi nahi,
//    negative bhi nahi.
// 8. Farakka BDO office tod-phod / ECI FIR nirdesh (Jan 2026) — MilleniumPost + Telegraph India:
//    aaropi tab ke AITC MLA Manirul Islam the. REJECT: (a) PRE-TERM; (b) aaropi ye MLA NAHI — dusra
//    vyakti; negative entry nahi ban sakti. (MilleniumPost vaise bhi whitelist me nahi.)
// 9. Negatives khoj: whitelist par Motab Shaikh KHUD aaropi — koi FIR/chargesheet/janch nahi mili;
//    ADR Phase-I halafname me 0 criminal cases (foundation note). Pre-term mamle + May 2026 ke baad
//    koi nyayik vikas (giraftaari/chargesheet/adalati aadesh) nahi. Chunav-yachika bhi koi nahi.
//    Negative = NONE.
// 10. BEUP fund: June 2026 budget me MLA-LAD Rs 70 lakh se badhkar Rs 1 crore/varsh (IANS via lokmattimes).
//     Lekin Farakka seat ke liye srot me BEUP-spasht koi itemized sanction list nahi mili — isliye
//     fund nahi joda ("ghoshit nahi").
// 11. Moneycontrol/economictimes/awazthevoice/scroll (SIR saga ki atirikt profiles) — sab election-khabar;
//     aggregator/secondary mirrors; kaam nahi. REJECT.
// Khali profile: May 2026 me padbhara ke baad ~5.5 mahine me whitelist me is MLA ka koi valid seat-kaam
// publish nahi hua (pehli baar ke MLA; teeno whitelist profiles chunav/SIR par hi hain).
westbengalWorks['motab-shaikh'] = [];

// WEST BENGAL — Samserganj — Mohammed Noor Alam (TMC)
// Pehchan: Murshidabad jile ki Samserganj seat ke TMC vidhayak; data file
// (~/workspace/aapkaneta/src/data/westbengal.ts, slug 'mohammed-noor-alam') me naam,
// seat, party confirmed. ADR: age 43, 0 criminal cases, assets Rs 22,23,21,497.
// 2026 chunav me 61,918 votes, margin 7,587 (runner-up INC ke Md Najme Alam).
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (mohammed-noor-alam):
// 1. Telegraph India (Apr 2026, pre-poll) 'BJP eyes Muslim-dominated Samserganj'
//    — chunav-purva feature; Noor Alam ka candidate-bayan hai, May 2026+ ke
//    works ka koi tathya nahi — REJECT.
// 2. Wikipedia '2026 Trinamool Congress split' — 'Md Noor Alam — Samserganj' ko
//    65 rebel MLAs ki soochi me darj kiya gaya hai — party-politics ('Party
//    karyawahi akele negative NAHI'); Wikipedia whitelist me nahi — REJECT.
// 3. Wikipedia 'West Bengal Legislative Assembly' table — Samserganj row me party
//    'DTC' (Democratic Trinamool Congress rebel faction) darj — party-politics,
//    works/negative dono nahi; Wikipedia whitelist me nahi — REJECT (flag ke liye
//    ant me NOTE dekho).
// 4. Telegraph India (24 Aug 2026) 'TMC defections in Murshidabad hand Dhulian
//    Municipality board to Congress' — post-term lekin party-politics (palika
//    dal-badal); Noor Alam ke kisi lokarpan/shilanyas ka tathya nahi — REJECT.
// 5. Indian Express + NDTV (1-2 Jun 2026) TMC signature-vivad: nishkasit 2 MLA
//    Ritabrata Banerjee (Uluberia-Purba) aur Sandipan Saha (Entally) the — Noor
//    Alam nishkasiton me nahi; party-vivad ka mamla — negative criteria poora
//    nahi — REJECT.
// 6. Telegraph India Waqf-hinsa coverage (Apr 2025, Dec 2025 verdict) — pre-term
//    sampradayik hinsa; coverage me tatkalin MLA Amirul Islam (poorv-vidhayak)
//    aur councillor Mehboob Alam ka naam aaya, Noor Alam ka koi FIR/janch-
//    aarop nahi — negative ka criteria poora nahi — REJECT.
// 7. TOI / Indian Express / ABP Live / India TV / Hindu Business Line / PTI
//    (May 2026) — sirf chunav-nateeja coverage (61,918 votes, margin 7,587);
//    works ka koi tathya nahi — REJECT.
// 8. Mathrubhumi English (23 Sep 2026) SIR-kahani — Samserganj me 91,712 voter-
//    deletion par BJP pravakta ka dawa; party-politics, MLA works nahi — REJECT.
// 9. westbengal-tenders.co.in / firsttender.com — Samserganj block/Dhulian ke
//    Zilla Parishad-nagar palika tender (15th CFC, WBAICL); MLA ki bhoomika ya
//    BEUP ka ullekh nahi; tender portals whitelist me nahi — REJECT.
// 10. bharathorizon.com (samserganj-2026 coverage) — chhota portal (blacklist)
//     aur sirf chunav-nateeja — REJECT.
// 11. Telegraph India (19 Apr 2025) masjid-doron coverage — pre-term, tatkalin
//     MLA Amirul Islam ka daura — Noor Alam se sambandhit nahi — REJECT.
// 12. news.abplive.com / etnownews.com liveblogs — sirf chunav-result updates,
//     works ka tathya nahi — REJECT.
westbengalWorks['mohammed-noor-alam'] = [];

// emani-biswas (Suti, TMC) — REJECT-LOG: whitelist (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, The Telegraph (India), PTI via established outlet) me May 2026–Oct 2026 tak Suti seat par MLA Emani Biswas ka koi VYAKTIGAT lokarpan/shilanyas, fund-disclosed itemized BEUP sanction, dastaveji Vidhansabha-prashn nateeja, ya GO-backed swikriti nahi mili — sab REJECT. Note: Telegraph India me naam aksar "Imani Biswas" likha gaya hai (wahi vyakti — Suti MLA).
// (1) The Telegraph (8 Sep 2026, kholkar padha): Bilaspur (Chhattisgarh) me 23 Murshidabad migrant workers (19 Harua gaon, Suti PS se) ko Bangladeshi hone ke shaq par detain kiya gaya; "Suti MLA Imani Biswas" ne Jangipur MP Khalilur Rahman ke saath Jangipur SP ko likhit me jankari di aur phone par baat ki. — MLA advocacy/intervention hai; VALID categories me nahi (na lokarpan/shilanyas, na assembly-prashn nateeja, na BEUP list, na GO-backed sanction). Work REJECT. Negative NAHI.
// (2) TOI (snippet, crawl ~Dec 2025): Odisha me Suti ke 20-saal ke migrant worker ki lynching; TMC MLA Imani Biswas ne Chakbahadurpur me bereaved family se mulakat ki, aarop lagaya ki attackers ne "Jai Shri Ram" bolne ko kaha. — PRE-TERM (May 2026 se pehle) + sirf parivar-mulakat/shok-vyakat; work REJECT. Negative NAHI.
// (3) Deccan Chronicle (May 2026, oath ceremony story): Niyamat Sheikh (Hariharpara), Imani Biswas (Suti), Akhtaruzzaman (Raghunathganj) — teeno TMC MLA shapath ke baad CM Suvendu Adhikari ke chamber me mile. — Political/ceremonial visit, kaam nahi. REJECT. (Isi report se confirm: May 2026 se BJP government, TMC ab opposition.)
// (4) Business Standard via PTI (7 Feb 2014): Congress ne Emani Biswas (Suti) aur Sushil Roy ko Rajya Sabha cross-voting par suspend kiya. — PRE-TERM (12 saal pehle) + party karyawahi akele negative-rule se negative NAHI. Negative NAHI.
// (5) New Indian Express (31 Mar 2026): SIR deletions/Murshidabad poll-battle story me Suti seat ka pre-election profile — campaign-time coverage, koi kaam nahi. REJECT.
// (6) TOI/HT/IE/India Today/NDTV result pages (May 2026): sirf chunav jeet (81330 votes, margin 12357) — chunav jeet kaam nahi. REJECT.
// (7) MyNeta WestBengal2026 affidavit page: Emani Biswas ke 1 criminal case + assets Rs 9,70,27,270 (ADR Phase-I se foundation me already noted) — sirf affidavit-ginti, negative-rule se negative NAHI.
// (8) Whitelist outlets me "Emani/Imani Biswas" par post-May-2026 koi FIR/chargesheet/janch/adalati vikas bhi nahi mila. Koi negative entry nahi. Jawab-disclosed wali sthiti nahi aayi.
// Foundation cross-check: works list me 'emani-biswas' key ka koi pehle se maujood data nahi — koi antar nahi. Period: '2026-2031' (May 2026+ karyakaal hi liya gaya; 2021-2026 term ka kuch shamil nahi).
westbengalWorks['emani-biswas'] = [];

// WEST BENGAL — Jangipur — Chitta Mukherjee (BJP)
// chitta-mukherjee — 0 works + 0 negatives
// Pehchan src/data/westbengal.ts se pakki (slug 'chitta-mukherjee', lines ~1790-1816):
// Chitta Mukherjee, BJP, Jangipur (Murshidabad), tenure 2026-2031; 2026 me BJP ticket
// par jeete — 91,201 votes, margin 10,542 (Jakir Hossain, TMC ko harakar). Halafnama:
// age 75, kul sampatti Rs 2,75,28,575, Total Cases: 4 (Serious IPC: 7 — murder IPC-302,
// attempt to murder IPC-307 sahit); backgroundNote me darj ki yah pre-term halafnama
// jankari hai. Karyakaal SIRF May 2026+; usse pehle ka kuch NAHI.
// Khoj 2026-10-19: whitelisted outlets (TOI, The Hindu, IE, NDTV, India Today, Telegraph,
// HT, PTI via established outlets) me May 2026+ ke seat-level bhautik vikas kaam
// (vyaktigat lokarpan/shilanyas, itemized BEUP sanction list, GO-backed swikriti ya
// Vidhansabha maang ka dastaveji nateeja) ki koi post-event report NAHI mili.
// Negatives: May 2026+ me MLA par koi FIR/chargesheet/janch ya nyayik vikas
// (adalat ka aadesh/notice) ki report whitelisted media me NAHI mili — halafnama ke
// pre-term 4 mamle niyam ke mutabik negative NAHI (kewal May 2026+ vikas par hi
// pre-term mamla gina jata).
westbengalWorks['chitta-mukherjee'] = [];

// WEST BENGAL — Raghunathganj — Akhruzzaman (TMC)
// REJECT-LOG: whitelist (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, The Telegraph (India), PTI via established outlet) me May 2026–Oct 2026 tak Raghunathganj seat par MLA Akhruzzaman ka koi VYAKTIGAT lokarpan/shilanyas (bhautik sarkari sanrachna, fund+bhoomika disclosed), itemized BEUP sanction list, dastaveji Vidhansabha-prashn nateeja/ashwasan, ya GO-backed swikriti nahi mili — sab REJECT. MLA ne 4 May 2026 ko chunav jeeta (TOI/IE/ETNow election results), karyakaal ~5.5 mahine ka hai.
// (1) NDTV (kholkar padha; page par tithi nahi dikhi, search-index anusar ~Jan 2026): Akhruzzaman (tab "Minister of State for Power" — 4 May 2026 se pehle ka karyakaal) Teghari Kisan Mandi, Raghunathganj ke SIR camp me mahila election officer aur Raghunathganj Block 2 ke BDO ko kathit dhamki — "Have you come here to act as a BJP agent?", receipt-copy dene par camp me lock karne ki chetavani; unhone safai di ki EC asli matdataon ke naam mita raha hai; BJP pradesh adhyaksh ne hastakshep ka aarop lagaya. — PRE-TERM; koi FIR darj hone ki khabar nahi, May 2026+ me is ghatna ka koi nyayik vikas whitelist media me nahi mila. Negative-rule fail (pre-term + FIR/chargesheet/janch ya May-2026+ adalati aadesh nahi). Negative NAHI.
// (2) The Telegraph (15 Sep 2026, kholkar padha): Raghunathganj ke Radhakrishnapur gaon me Padma nadi-ksharan se 10 ghar + mandir dhoost; Akhruzzaman ne kaha ki jila prashasan ne sinchai vibhag ko sthayi suraksha ka prastav diya hai aur unhone CM Suvendu Adhikari se appeal ki. — SIRF MAANG/APPEAL; koi vyaktigat lokarpan/shilanyas ya fund-disclosed kaam nahi. Work-rule "sirf maang/prastav" par fail. Work NAHI.
// (3) SC aadesh 28 Sep 2026 (The Telegraph / New Indian Express-PTI, whitelist): 10 rebel TMC MLAs (Ritabrata Banerjee, Firhad Hakim, Arup Roy, Sandipan Saha, Akhruzzaman Ansari, Shiuli Saha, Sabina Yasmin, Biplab Mitra, Javed Khan, Rathin Ghosh) ke khilaf disqualification yachika (8 July 2026 ko Sobhandeb Chattopadhyay ne darj) — SC ne fast-track plea kharij ki, Speaker se Oct 8/10 tak nirnay ki ummeed jatayi; Speaker ne Oct 9 ko prakriyagat sudhar ke liye fresh application manga (IANS, non-whitelist outlets). — YE AYOGYATA-YACHIKA HI HAI: "party karyawahi/ayogyata-yachika akele negative NAHI". Koi pratikool adalati aadesh (disqualification/disqualify order) Akhruzzaman ke khilaf 19 Oct 2026 tak nahi aaya; MLA ka jawab bhi report nahi hua. Stage-accurate sthiti: Speaker ke paas lambit, abhi tak nirnay nahi — foundation disclosure se aage koi ghatna nahi. Negative NAHI.
// (4) Business Standard (3 Jun 2026): 58 rebel MLAs ne Ritabrata Banerjee ko legislature party leader aur Akhruzzaman ko chief whip (Opposition chief whip) prastavit kiya. — Party-pad/ gut-rajniti; kaam (work) nahi. REJECT.
// (5) Indiablooms/NE Herald (30 Jun 2026, NON-whitelist): Kolkata Police ne dono TMC guton ko 21 July Martyrs' Day ke liye Esplanade ki anumati dene se inkaar kiya; Akhruzzaman ne kaha gut apas me vichar karke nirnay lega. — NON-whitelist + party-gatividhi. REJECT.
// (6) Dailyhunt aggregator (NON-whitelist): The Wire ki "A Tale of Three TMC MPs" story me Akhruzzaman (opposition chief whip) SIR muddon par CM se mile pratinidhimandal me the. — Aggregator = REJECT; vaise bhi vidhayak-gatividhi, vyaktigat kaam nahi.
// (7) TV9/ABP/Times Now (whitelist outlets lekin doosra vyakti): Dec 2025 me Beldanga me Babri-style masjid ka foundation stone suspended MLA Humayun Kabir ne rakha — ye Akhruzzaman par nahi. REJECT (galat vyakti).
// (8) TOI/IE/ABP Live/ETNow (May 2026): chunav-nateeje — Akhruzzaman 88,909 votes, margin 40,555 (Nasir Saikh se jeete). Chunav jeet kaam nahi. REJECT.
// (9) Indian Express candidate list (May 2026): halafname me 0 cases, umra 61, sampatti Rs 2,90,66,365 — sirf affidavit-ginti, negative-rule fail. REJECT.
// Negatives: (1)–(9) me koi bhi negative-rule poora nahi karta (pre-term ghatna bina FIR aur bina May-2026+ nyayik vikas; ayogyata-yachika akele; party-gatividhi; affidavit-matra). Koi negative entry nahi. Jawab disclosed wali sthiti nahi aayi.
// Fund: BEUP 'Rs 1 crore/seat/varsh' foundation me darj hai; kisi whitelist srot ne spasht roop se Akhruzzaman dwara BEUP-upyog ya swikriti nahi kahi — koi fund entry nahi ("ghoshit nahi").
// Foundation cross-check (src/data/westbengal.ts, slug 'akhruzzaman'): naam 'Akhruzzaman', seat Raghunathganj, party TMC, karyakaal 2026-2031 — pakki. Koi antar nahi; party-field edit nahi kiya gaya.
westbengalWorks['akhruzzaman'] = [];

// WEST BENGAL — Sagardighi — Bayron Biswas (TMC)
// Pehchan: Bayron Biswas, TMC MLA (2026 vijeta), seat Sagardighi (Murshidabad, GEN, No. 60); 2026 me 90781 votes se jeete, margin 34260; 2023 upchunav me Congress ticket par jeetkar May 2023 me TMC me shamil hue the. Sankshipt pehchan aadhaar: ADR-backed backgroundNote (age 41, assets Rs 33,42,22,210, Total Cases: 1, Serious IPC: 2) + ECI/TOI result page.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (bayron-biswas):
// 1. Telegraph India, 04-10-2026 (cid/2182997) — PAGE KHUD PADHA. Samserganj ghar me aag (ghatna 03-10-2026); Biswas ko dono haathon, pairon aur chehre ke hisse par jhulas (lagbhag 25% sharir). Jangipur police chief ke anusaar prarambhik janch me MLA ke kamre ke AC se aag lagne ka sanket; “koi sanket nahi” ki baahar se kisi ne aag lagayi. Adhir Ranjan Chowdhury ne aag lagakar aatmahatya ki koshish ka dawa kiya — DAWA matra, koi FIR/charge-sheet/adalati vikas nahi. Negative criteria (MLA khud aaropi + FIR/chargesheet/janch-pushti + May 2026+ nyayik vikas) poora nahi hota — vyaktigat hadsa hai. Entry nahi.
// 2. NDTV (PTI copy), 03-10-2026 — upar wali ghatna ka hi coverage (rebel TMC MLA, CM Suvendu Adhikari aur Adhir Chowdhury ke reactions) — vyaktigat hadsa; entry layak kaam/negative nahi.
// 3. Times of India (result page, 2026) — Sagardighi chunav-parinaam matra (90781 votes, margin 34260) — kaam nahi; entry nahi.
// 4. lokmattimes.com / daijiworld.com (IANS copy), 05-06-2023 — Calcutta HC me PIL jisme Congress se TMC me shamil hone par Biswas ka MLA pad radd karne ki maang thi — PRE-TERM (June 2023); non-whitelist outlets; May 2026+ me is par koi nyayik vikas report nahi; reject.
// 5. ETV Bharat (EN), 03-10-2026 — “police sources” ka aatmahatya/padavari-sampatti-vivad ka sanket wala coverage — non-whitelist; atkal matra, Biswas ke khilaaf koi FIR report nahi; reject.
// 6. one.news18.com/news18, crawled 2026 — Sagardighi me sadak nirman me bhrashtachar ke khilaaf grameenon ka virodh — non-whitelist; report me Biswas aaropi ke roop me nahi; reject.
// 7. The Hindu / Hindustan Times, March 2023 — Sagardighi upchunav parajay coverage (Biswas ka 2023 me Congress ticket par jeetna) — PRE-TERM; reject.
// 8. Non-whitelist fire coverage (same incident, entries nahi): indiatvnews, nationpress, ommcomnews, thehawk, hiindia, lokmattimes, pratidintv, newseisamay, english.punjabkesari, orangeprime.news — srot whitelist me nahi; reject.
// 9. Wikipedia (Bayron Biswas / Sagardighi) — whitelist me nahi; entry ka srot nahi ban sakta; reject.
// 10. Targeted searches me May 2026+ ki koi whitelist post-event reporting nahi mili: lokarpan/shilanyas (school/hospital/sadak), itemized BEUP sanction list, ya Vidhansabha maang ka dastaveji nateeja/ashwasan — kuch bhi Biswas ke naam se nahi. Profile isliye khali; agle mining round me cross-check ho.
westbengalWorks['bayron-biswas'] = [];

// WEST BENGAL — Lalgola — Abdul Aziz Doctor (TMC)
// REJECT-LOG: whitelist (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, The Telegraph (India), PTI via established outlet) me May 2026–Oct 2026 tak Lalgola seat par MLA Abdul Aziz Doctor ka koi VYAKTIGAT lokarpan/shilanyas, fund-disclosed itemized BEUP sanction list, dastaveji Vidhansabha-prashn nateeja/ashwasan, ya GO-backed swikriti nahi mili — karyakaal abhi ~5.5 mahine ka hai. Sab REJECT.
// (1) Indian Express Lalgola election-results page (snippet): sirf candidate list + halafnama (0 criminal cases, assets Rs 6,29,08,242) — election data kaam nahi. REJECT.
// (2) TOI Lalgola constituency page (snippet): sirf 4–6 May 2026 ke chunav-nateeje (Abdul Aziz Doctor jeete: 67954 votes, margin 18960) — chunav jeet kaam nahi. REJECT.
// (3) Millennium Post (28 Mar 2026, snippet): pre-term candidacy profile — TMC ne young paediatrician ko Lalgola se field kiya; NON-whitelist + pre-term. REJECT.
// (4) AwazTheVoice (21 Apr 2026, snippet): pre-term campaign profile ("Doctor Babu", Waqf Bill protest edge) — NON-whitelist + pre-term. REJECT.
// (5) Deccan Chronicle (23 Mar 2026, snippet): "Row over cattle smuggler's son-in-law in WB poll contest for TMC" — aarop ki patni Masuda Khatun ke pita Enamul Haque (cattle-smuggling mamle ke kingpin) hain; MLA ne ise political mudslinging bataya. NON-whitelist + PRE-TERM + FAMILY MATTER (mamla father-in-law par hai, MLA KHUD aaropi nahi; halafname me 0 cases; May 2026+ me MLA par koi nyayik vikas whitelist me nahi) — negative-rule fail, negative NAHI. REJECT.
// (6) Whitelist site searches (Telegraph India, NDTV, India Today, HT, The Hindu, PTI-via-established): sirf election coverage ya purane (2021) Lalgola stories; MLA ka koi post-May-2026 karyakram report nahi. REJECT.
// (7) General web search ("Abdul Aziz Lalgola MLA inauguration / foundation stone / health camp / road"): natije Bangladesh-Khulna PM karyakram (2026), 2012/2017 ke Lalgola karyakram (Pranab Mukherjee, dusri sarkar), ya suspended MLA Humayun Kabir (Domkal) ke mosque-foundation event ke — Abdul Aziz Doctor se sambandh nahi. REJECT.
// (8) eCourtsIndia (snippet): "Abdul Aziz vs Elahi Boks", Civil Judge Sr Div Berhampore, case 426/2022 (CPC), disposed 8 Oct 2026 — civil/property matter, petitioner "Abdul Aziz" ka MLA se pehchan-sthapit link nahi (aam naam; koi whitelist reporting nahi); criminal FIR/chargesheet nahi. REJECT — negative-rule fail.
// (9) Tender-aggregator hits (firsttender etc.): Lalgola me 2025–26 ke 15th CFC / water-treatment / toilet tenders — panchayat-yojna ke tender, MLA ke BEUP sanction ka dastavez nahi, source bhi whitelist me nahi. REJECT.
// (10) Millennium Newsroom (July 2026, non-whitelist) BJP-budget piece: BEUP Rs 70 lakh se badhkar Rs 1 crore ki ghoshna — general policy; Lalgola ki koi itemized sanction list nahi. BEUP fund pehle se foundation me darj hai; yahan jodne layak kuch nahi. REJECT.
// (11) Telegraph (2021 archive): Lalgola me Abu Hena family ke 50 saal ka chunavi lekh — pre-term aur pichhli seat ka itihas; Abdul Aziz ka naam tak nahi. REJECT.
// Negatives: upar (5) aur (8) me koi bhi negative-rule poora nahi karta (MLA khud aaropi nahi; family matter; pre-term bina May-2026+ vikas; sirf complaint nahi). Halafname ke mutabik 0 criminal cases. Koi negative entry nahi.
// Foundation cross-check: westbengal.ts me slug 'abdul-aziz-doctor', constituency 'Lalgola', party TMC, tenures 2026–2031, works khali — pehchan pakki.
westbengalWorks['abdul-aziz-doctor'] = [];

// WEST BENGAL — Bhagabangola — Reyat Hossain Sarkar (TMC)
// Pehchan: Reyat Hossain Sarkar, TMC MLA (2026 vijeta), seat Bhagabangola (Murshidabad, GEN, No. 62); 2026 chunav me 105,997 votes, margin 56,407. Halafnama sankshipt: age 51, kul sampatti Rs 1,71,42,232, 6 pending cases (cheating IPC-420 x4, criminal breach of trust IPC-406 x4 sahit) — foundation record `src/data/westbengal.ts` (line ~1914) se pakki. May 2024 bypoll me bhi jeete the (17vi Vidhansabha) — wo karyakaal task-scope se bahar, PRE-TERM.
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19. Karyakaal sirf ~5.5 mahine ka hai.
// REJECT-LOG (reyat-hossain-sarkar):
// 1. PTI via The Week / OrissaPOST (04 May 2026): chunav-ginati par TMC ne Bhagawangola seat barkarar rakhi, Sarkar ne 56,407 maton se jeeta — chunav-parinaam kaam nahi. REJECT.
// 2. Business Today / Loksatta / ABP Live (May 2026): Bhagabangola constituency result pages — sirf candidate/vote lists; Sarkar ke halafname ke 6 mamle affidavit-ginti matra. chunav data, kaam nahi. REJECT.
// 3. AITC Format C-7 disclosure (03 Apr 2026, static.aitcofficial.org — official party PDF, search result se dekha): 6 pending cases (G.R. 2100/2023 Lalbagh; ACJR 1332/2026, ACGR 5623/2020, ACGR 5622/2020, ACGR 1333/2026 Alipore; CR 163/2017 Lalbagh; charges framed: No) — affidavit-ginti matra, May 2026+ me koi FIR/chargesheet/giraftari/adalaati aadesh whitelist media me nahi mila; negative-rule se negative NAHI.
// 4. The Telegraph / Indian Express / PTI (June–July 2024): 2024 bypoll jeet ke baad shapath-sthal vivad (Raj Bhavan vs Vidhansabha), Governor ne "constitutional impropriety" kaha — PRE-TERM (17vi Vidhansabha). May 2026+ me koi vikas nahi. REJECT.
// 5. Millenniumpost / Devdiscourse / NE Herald (July 2024): Governor C.V. Ananda Bose ka defamation suit jisme Mamata Banerjee, Kunal Ghosh, Sayantika Banerjee aur Reyat Hossain Sarkar named defendants; Calcutta HC ka interim restraint order (Justice Krishna Rao, 16 July 2024) — PRE-TERM civil suit, FIR/aaropi-column wala dastavez nahi; May 2026+ me is par koi vikas nahi. negative-rule fail. REJECT.
// 6. AsiaNet via menafn.com (Jun 2026) — "Party Will Not Split: TMC MLA Denies Rebellion Amid Lop Crisis": Sarkar ne ANI se kaha party nahi tootegi, Sobhandeb Chattopadhyay LoP chayan prakriya poori karne ki baat — NON-whitelist outlet + party-statement matra, koi lokarpan/sanction/GO nahi. REJECT.
// 7. The Telegraph (11 Jul 2026, Alamgir Hossain): CM Suvendu Adhikari ne Malda-Murshidabad me Ganga-ksharan rokne ke liye Rs 3,600 crore (Centre-state 50:50) ka allocation announce kiya, focus "Farakka down to the Bhagabangola and Lalgola sectors" — ye CM/state-sarkar ka kaam hai, MLA ka attribution shunya. REJECT.
// 8. The Telegraph (Oct 2026): Ganga Flood Control Commission meeting 27 Oct Delhi, CM ki Murshidabad yatra, Rejinagar me Narkelbari bridge ka shilanyas-waada + 200-bed hospital ka waada — dusre neta (CM) ke karyakram/waade, Bhagabangola ke MLA ka naam kahin nahi. REJECT.
// 9. The Statesman (Palashipara road inauguration): TMC MLA Manik Bhattacharya ka road-inauguration vivad — ALAG VYAKTI (Palashipara), Bhagabangola nahi. REJECT.
// 10. ETV Bharat / bombaysamachar (Dec 2025): suspended TMC MLA Humayun Kabir ka Murshidabad me 'Babri-style' mosque foundation — ALAG VYAKTI, PRE-TERM, communal-sensitivity wala case; Sarkar ka naam nahi. REJECT.
// 11. The Statesman (Nandigram, ~Sep 2026): CM ka Nandigram package Rs 300 crore — dusri seat, MLA attribution shunya. REJECT.
// 12. LatestLY (09 Oct 2026): Murshidabad ke liye Rs 3,300-crore flood/erosion proposal Centre ko — NON-whitelist outlet + CM-sarkar ka prastav, MLA attribution shunya. REJECT.
// 13. Wikipedia (Bhagabangola Assembly constituency / 17th West Bengal Assembly): whitelist me nahi; entry ka srot nahi ban sakta. REJECT.
// 14. General searches (Telegraph/TOI/HT/IE/NIDTV/India Today queries, Aug–Oct 2026): MLA Reyat Hossain Sarkar ka koi vyaktigat lokarpan/shilanyas, itemized BEUP sanction list, dastaveji Vidhansabha-prashn nateeja, GO-backed swikriti, ya fund-disclosed bhautik sanrachna kaam nahi mila. BEUP: srot me "BEUP" shabdon me koi sanction nahi — isliye fund = "ghoshit nahi".
// Negatives: upar (3) aur (5) me negative-rule poora nahi hota (affidavit-ginti matra; pre-term civil defamation suit bina May-2026+ vikas). May 2026+ me MLA khud aaropi wala koi FIR/chargesheet/janch/adalaati vikas whitelist media me nahi mila. Koi negative entry nahi. Jawab-disclosed wali sthiti nahi aayi.
// Foundation cross-check: scratch me 'reyat-hossain-sarkar' key ka koi pehle ka data nahi mila — koi antar nahi. Party-field edit suggestion nahi (party AITC pehle se sahi darj hai).
westbengalWorks['reyat-hossain-sarkar'] = [];

// WEST BENGAL — Raninagar — Julfikar Ali (INC)
// Pehchan: Murshidabad jile ki Raninagar seat (No. 63) ke INC vidhayak; data
// file (~/workspace/aapkaneta/src/data/westbengal.ts, slug 'julfikar-ali') me
// seat+party confirmed; May 2026 chunav me 79,423 votes, 2,701 margin se jeet
// (PTI/ECI data, May 2026). Karyakaal: May 2026+; Period: '2026-2031'.
// Mining date: 2026-10-19.
// REJECT-LOG (julfikar-ali):
// 1. AICC press release (June 20, 2026) + indian.community report — Julfikar
//    Ali West Bengal me Congress Legislature Party ke Leader, Motab Shaikh
//    deputy — party ka pad/party-ghoshna hai, koi constituency works ka tathya
//    nahi (bhautik sanrachna, BEUP sanction, assembly-demand nateeja me se
//    kuch nahi) — REJECT.
// 2. PTI (newsdrum par), The Telegraph India live blog (04 May 2026), Indian
//    Express result live — Raninagar jeet ki khabar (79,423 votes, margin
//    2,701) — chunaav reporting, works nahi — REJECT.
// 3. indiankanoon.org CRR 683/2006 (Calcutta HC order 01-08-2019) — "Julfikar
//    Ali" 1995 Dadpur (Hooghly) mamle me petitioner — doosra vyakti hai
//    (Murshidabad ke MLA se sambandh nahi), pre-term, May 2026+ me koi vikas
//    nahi — REJECT.
// 4. legalauthority.in 'Mohd. Hussain @ Julfikar Ali' — Delhi bomb-case ka
//    aaropi, wahi vyakti nahi — REJECT.
// 5. AITC/INC halafnama + ADR backgroundNote — ADR ke mutabik 0 criminal
//    cases (Apr 2026 halafnama) — akele negative NAHI — REJECT.
// 6. BEUP fund: kisi cited srot me BEUP ka zikr hi nahi — works absent hai to
//    "ghoshit nahi".
// 7. Variant-spelling searches ('Julfiker Ali', 'Zulfikar Ali') — koi alag
//    works-lead nahi; Millenium Post/indigenousherald wale results Julfikar
//    Ali se sambandhit hi nahi — REJECT.
// 8. indiankanoon/court-database par is naam se May 2026+ ka koi aarop/FIR/
//    adhaalati vikas MLA ke khilaaf nahi — negative criteria poora nahi.
westbengalWorks['julfikar-ali'] = [];

// WEST BENGAL — Murshidabad — Gouri Sankar Ghosh (BJP)
// Foundation cross-check (src/data/westbengal.ts, line ~1976): slug 'gouri-sankar-ghosh', seat Murshidabad, party BJP, 2026 me 114443 votes se jeete (margin 31521). DHYAAN: foundation me post: 'MLA' darj hai, LEKIN Indian Express (1 Jun 2026) aur The Telegraph (10 Jun 2026) dono ne kholkar padhe gaye articles me pushti ki hai ki 1 June 2026 ko cabinet expansion me Gouri Shankar Ghosh ne CABINET MANTRI ki shapath li (13 cabinet mantriyon ki suchi me naam), aur Telegraph ke anusar unhe Backward Classes Welfare department ka prabhar mila. ISLIYE SAKHT MANTRA-NIYAM LAAGU: sirf Murshidabad SEAT ke vyaktigat kaam hi works ban sakte the; vibhag ke rajya-stariye faisle works NAHI. (Wikipedia bhi yahi kehta hai — portfolio: Backward Classes Welfare + Mass Education Extension and Library Services — lekin whitelist-pushti upar wali dono sources se hai.)
// REJECT-LOG (whitelist: The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, The Telegraph (India), PTI via established outlet; May 2026–Oct 2026):
// (1) menafn.com/IANS (11 Jun 2026): Public Education and Library Minister ke roop me Ghosh ne kaha sarkari libraries se Mamata Banerjee ki kitabein hatkar Syama Prasad Mookerjee par kitabein rakhi jayengi, e-library banegi. — VIBHAG-STARIYE nirnay (mantra-niyam) — seat-level kaam NAHI. REJECT.
// (2) The Statesman (31 Aug 2026, snippet): Ghosh ne Murshidabad ke 3 MPs ke party-badalne par bayan diya, 100 din ki sarkar ki uplabdhiyan ginai ("108 din me wo jo pichhli sarkar 15 saal me nahi kar payi"). — mantri ke rajya-stariye rajnaitik bayan, seat ka bhautik kaam nahi. REJECT.
// (3) Economic Times (14 Jun 2026, snippet): Ghosh ne TMC MPs/MLAs par bhrashtachar ke aarop lagaye. — rajnaitik aarop-bayan, kaam nahi. REJECT.
// (4) The Telegraph (224 din pehle, Feb 2026): chunav se pehle SIR voter-roll vivad par Ghosh ka bayan ("bulk of excluded voters were Hindus"). — PRE-TERM (May 2026 se pehle). REJECT.
// (5) The Telegraph bidi-workers report (pre-poll, April 2026 se pehle): Ghosh tab BJP district president ke roop me quote hue. — PRE-TERM + sirf bayan. REJECT.
// (6) TOI (Jan 2026, Form-7 vivad, Lalbagh): BJP MLA Ghosh ne TMC par form submit rokne ka aarop lagaya; nationpress version me BDO office vandalism ki ninda ki. — Yahan Ghosh AAROP LAGANE wala hai, aaropi NAHI (aaropi TMC ke log). Negative-rule "sirf MLA khud aaropi" par fail. REJECT.
// (7) Indian Express (3 Aug 2022): Ghosh ne PM ko patra likhkar Murshidabad jile ko Union Territory banane ki maang ki thi. — PRE-TERM (2022, pehla karyakaal bhi bahar: period sirf 2026-2031). REJECT.
// (8) TOI/HT/ET chunav-nateeje (4 May 2026): Murshidabad se 114443 votes se jeet — chunav jeet kaam nahi. REJECT.
// (9) BEUP: June 2026 budget se Rs 1 crore/seat/varsh scheme-level tathya (foundation note me) — lekin Murshidabad seat par Ghosh ke naam se koi itemized BEUP sanction list whitelist media me nahi mili. "ghoshit nahi" — koi entry nahi. REJECT.
// (10) The Statesman tag page "free LPG connections" (tithi aspasht, NON-whitelist snippet): "Murshidabad district BJP president Mr Gaurishankar Ghosh... was on the sleuth's scanner, sources said" — source whitelist me NAHI + "scanner" aspasht + tithi pata nahi; FIR/aaropi-pushti kuch nahi. Negative-rule fail. REJECT — retry-lead: kabhi established outlet par is LPG mamle ki poori report mile to phir dekhna.
// Negatives: foundation background-note me ADR Phase-I ke anusar 4 criminal cases (Serious IPC: cheating IPC-420, criminal breach of trust IPC-409 sahit) — lekin ye HALAFNAMA-ginti hai; whitelist media me FIR-aaropi column wala dastavez ya May 2026+ me is par koi nyayik vikas (adalat ka aadesh/notice) nahi mila. Chunav-yachika akele NAHI; affidavit-matre negative NAHI. Koi negative entry nahi.
// Natija: May 2026–Oct 2026 me Murshidabad seat par Ghosh ka koi vyaktigat lokarpan/shilanyas (fund+bhoomika disclosed), dastaveji Vidhansabha-prashn nateeja, itemized BEUP sanction, ya GO-backed swikriti whitelist me nahi mila. Karyakaal abhi sirf ~5.5 mahine ka hai aur 1 June se ve cabinet mantri hain, isliye unki zyadatar gatividhi vibhag-stariye rahi.
// Fragment-ant note (edit NAHI, sirf flag): foundation record me post: 'MLA' hai, lekin Indian Express (1 Jun 2026, kholkar padha) + The Telegraph (10 Jun 2026, kholkar padha) ke anusar Gouri Sankar Ghosh 1 June 2026 se Cabinet Minister hain (Backward Classes Welfare department prabhar) — coordinator post field ka milaan kar le.
westbengalWorks['gouri-sankar-ghosh'] = [];

// WEST BENGAL — Nabagram SC — Dilip Saha (BJP)
// Foundation cross-check (src/data/westbengal.ts): Dilip Saha, BJP, Nabagram (SC) Murshidabad, period 2026-2031, May 2026 me 78,739 votes/margin 5,919 se jeete; ADR Phase-I: 0 criminal cases, assets Rs 43,03,96,618. Wikipedia 'Dilip Saha' page ke anusaar pad 4 May 2026 se.
// REJECT-LOG: whitelist (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, The Telegraph (India), PTI via established outlet) me May 2026–Oct 2026 tak Nabagram seat par MLA Dilip Saha ka koi VYAKTIGAT lokarpan/shilanyas, fund-disclosed itemized BEUP sanction, dastaveji Vidhansabha-prashn nateeja, ya GO-backed swikriti nahi mili — karyakaal sirf ~5.5 mahine ka hai, sab REJECT.
// (1) MyNeta affidavit (candidate_id=368, Nabagram SC 2026): Crime-O-Meter "No criminal cases" — 2023 Sagardighi bye-election affidavit (candidate_id=2293) aur 2016 Nabagram AITC affidavit (candidate_id=763) me bhi 0 cases. Sirf affidavit-ginti, negative-rule se negative NAHI.
// (2) The Telegraph India (13 Aug 2023, kholkar nahi padha; snippet): "SSC Scam ... Jiban Krishna Saha arrested" — ye JIBAN KRISHNA SAHA (Barihat TMC MLA) hain, Dilip Saha nahi. Naam milta-julta hone se galat pehchan ka khatra; reject.
// (3) rediff.com (PTI, Jan 2020) / newsinc24.com: "FIRs filed against Bengal BJP chief ... Dilip Ghosh" — ye DILIP GHOSH hain, Dilip Saha nahi. Naam milta-julta; reject.
// (4) TOI (4 May 2026): "BJP's Dilip Saha wins 78,739 votes, defeating TMC's Pranab Chandra Das" — chunav jeet kaam nahi. REJECT.
// (5) MoneyControl/ADR via adrindia.org (14 May 2026): "BJP MLA Dilip Saha from West Bengal ... richest legislator in the state Assembly ... declared assets worth Rs 43.03 crore" — sampatti ki khabar, lok-karya nahi. REJECT.
// (6) LatestLY/taazatv (Feb–Mar 2023, PTI-based): BJP ne Sagardighi bye-election me Dilip Saha ko ummidwar banaya; teesre number par rahe — PRE-TERM (May 2026 se pehle); May 2026+ me is mamle ka koi nyayik vikas nahi. negative NAHI, kaam bhi nahi.
// (7) The Hindu profile citation (Wikipedia ref): "Dilip Saha, NABAGRAM (SC) constituency, BJP ... Profile & Affidavit" — chunav-kaleen profile, kaam nahi. REJECT.
// (8) TOI/HT/IE/India Today/NDTV (site search): sirf May 2026 ke chunav-nateeje aur jeet ki khabren — koi vyaktigat lokarpan/shilanyas/maang-nateeja nahi. REJECT.
// (9) Thestatesman.com (20 Feb 2026): "MLA jeered at road inauguration ceremony" — PRE-TERM (Feb 2026, May 2026 se pehle) + NON-whitelist source. REJECT.
// (10) Firsttender.com tender notice: "repairing ... from the house of dilip saha ... Krishnanagar municipality" — chhota portal (NON-whitelist) + ye Dilip Saha ka ghar landmark ke roop me hai, MLA ka vyaktigat lokarpan nahi; Nagarjuna/Krishnanagar Nadia me hai, Nabagram seat ke bahar. REJECT.
// Negatives: MyNeta affidavit me 0 criminal cases; May 2026+ me whitelist media me Dilip Saha KHUD aaropi wali koi FIR/chargesheet/janch ya nyayik vikas nahi mili (Dilip Ghosh / Jiban Krishna Saha wali khabren alag vyakti). Koi negative entry nahi. Jawab disclosed wali sthiti nahi aayi.
// Fund: BEUP Rs 1 crore/seat/varsh (June 2026 budget se) — koi srot "Dilip Saha" ke liye BEUP vyay/swikriti spasht roop se nahi kehta; allocated sirf scheme-level 'ghoshit nahi' jaisa, koi sanction list nahi mili.
westbengalWorks['dilip-saha'] = [];

// WEST BENGAL — Khargram SC — Mitali Mal (BJP)
// One-MLA researcher fragment, researched 2026-10-19
// Pehchan pakki: src/data/westbengal.ts (slug 'mitali-mal'): Mitali Mal, Khargram (SC), Murshidabad, BJP, 18vi Vidhansabha, period 2026-2031.
// Jeet: 2026 me 77,748 votes, margin 9,333 (Ashis Marjit AITC ko haraya). ADR Phase-I: age 28, kul sampatti Rs 12,43,059, 0 criminal cases (foundation record line 2064).
// 'Mitali Roy/Ray' (Dhupguri ex-TMC, Sep 2023 BJP join) ALAG vyakti hai — cross-contamination nahi.
westbengalWorks['mitali-mal'] = [];

// WEST BENGAL — Burwan SC — Sukhen Kumar Bagdi (BJP)
// Karyakaal: sirf May 2026+ (sapath/padbhara 4 May 2026 — Wikipedia/ECI). Period: '2026-2031'.
// Mining date: 2026-10-19. Whitelist outlets par kai rounds search kiye gaye (inauguration, BEUP/MLA-LAD, assembly demand, FIR/court, Burwan news).
//
// REJECT-LOG (sukhen-kumar-bagdi):
// 1. Chunav coverage (Indian Express/HT/TOI/Business Today/WION, 4 May 2026) — jeet ki khabar (91661 votes, margin 22300); kaam nahi; REJECT (event nahi, kaam nahi).
// 2. Telegraph India 22 Jan 2026 "ED attaches Rs 57.78 crore properties of Trinamool MLA in school recruitment scam" — mamla PREDECESSOR Jiban Krishna Saha ke khilaf hai (Burwan, SSC scam), Bagdi ke khilaf NAHI; REJECT (dusre neta ka mamla).
// 3. Telegraph India Aug 2025/Jan 2026 Jiban Krishna Saha CBI/ED stories (school recruitment scam, Pond phones) — PRE-TERM + dusre neta; REJECT.
// 4. Telegraph India Dec 2025 "Train mows down three BJP supporters..." (Sabaldah, Burwan area) — PRE-TERM (Dec 2025) + Bagdi ka naam kahin nahi; REJECT.
// 5. Budget 2026-27 (IANS, 22 June 2026): MLA-LAD Rs 70 lakh se Rs 1 crore — generic budget ghoshna, Bagdi/Burwan-specific sanction list nahi; REJECT (sirf ghoshanha, srot ne BEUP naam se koi seat-list nahi di).
// 6. Negatives: ADR 2026 halafname me Total Cases: 1 (Serious IPC: 4 — IPC-324/325/326 hurt charges sahit; 295A/147/148/149/323/298 bhi) — PRE-TERM mamle; May 2026 ke baad koi nyayik vikas (FIR/chargesheet/giraftaari/adalat-aadesh) whitelist source par nahi mila. Purane pending mamle akele negative NAHI — REJECT.
// 7. BEUP itemized sanction lists / Vidhansabha maang ka dastaveji nateeja / GO-backed swikriti — Burwan seat ke naam par whitelist outlets me kuch nahi mila.
// 8. Chunav-yachika ya party-karyawahi ka koi samachar nahi mila — entry banane layak kuch nahi.
// Khali profile: May 2026 me padbhara sambhalne ke baad ~5.5 mahine me whitelist me koi valid seat-kaam publish nahi hua. Fund: BEUP ka koi itemized sanction srot ne nahi diya — "ghoshit nahi".
westbengalWorks['sukhen-kumar-bagdi'] = [];

// WEST BENGAL — Kandi — Gargi Das Ghosh (BJP)
// Worker: wb3 — Kandi (Murshidabad) works research, 2026-10-19
// Pehchan: Gargi Das Ghosh (BJP) ne May 2026 ke Vidhansabha chunav me Kandi (Murshidabad, Baharampur Lok Sabha) seat jeeti — 73,355 vote, TMC ke Apurba Sarkar (63,020) ko 10,335 vote se haraya (The Times of India + The Indian Express, May 2026). 1 June 2026 ko Suvendu Adhikari sarkar me Minister of State ke roop me shapath li (The Telegraph India + The Hindu, 01.06.26). Karyakaal SIRF May 2026+. Period: '2026-2031'.
// Foundation note: task ke anusaar record src/data/westbengal.ts me padhna tha — research ke dauraan ~/workspace/aangkapaneta/ directory maujood nahi mili (sirf scratch dir me 2 Punjab worker files), isliye naam/seat/party upar likhi whitelisted sources se pakki ki gayi.
// Nateeja: whitelisted sources me May 2026–Oct 2026 ke dauraan Kandi seat me MLA ke roop me koi qualifying kaam (vyaktigat lokarpan/shilanyas, itemized BEUP sanction list, Vidhansabha maang ka dastaveji nateeja, GO-backed swikriti) NAHI mila; minister ke roop me jo kaam mila wo poore vibhag-star par tha, seat-star par nahi — isliye khali profile.

// REJECT LOG
// R-1. Durga Puja bijli taiyaari baithak (TOI, 15 Sep 2026): mantri ke roop me MoS (Power) Gargi Das Ghosh ne WBSEDCL/CESC/WBPDCL adhikariyon ke saath taiyaari baithak ki adhyakshata ki aur poore Bengal me 24x7 bijli aapurti ka aashwasan diya. Koi bhautik sarkari sanrachna ka lokarpan/shilanyas nahi, koi fund disclosed nahi, Kandi seat se juda nahi — vibhag-star ki ghoshna/baithak — reject.
// R-2. MoS shapath samaroh (The Telegraph India + The Hindu, 1 June 2026, Lok Bhavan): niyukti/ohda-grahan hai, vikas kaam nahi — entry nahi, sirf sandarbh.
// R-3. Kandi chunav jeet coverage (TOI + Indian Express, May 2026): chunav-parinam hai, karyaakaal se pehle ka vishay — entry nahi, sirf pehchan-pushti ke liye istemal.
// R-4. Halafnama ke 2 pending criminal cases (myneta.info: IPC 341 wrongful restraint + 1 aur charge): pre-term mamle; May 2026+ me established media par koi FIR/chargesheet/janch/adalati vikas documented nahi — pending affidavit cases akele negative NAHI — entry nahi. (FIR-vivran ka follow-up recommended — agar May 2026+ me nyayik vikas mile to negative qualify ho sakta hai.)
// R-5. WBPDCL stock-exchange listing ka ailaan (The Telegraph India, PTI, 23.07.26): CM Suvendu Adhikari ne Vidhansabha me ailaan kiya; article me Gargi Das Ghosh ka zikr hi nahi — dusre neta ka karyakram, unka kaam nahi — reject.
// R-6. Sagardighi 660 MW supercritical unit (TOI, Dec 2025): pre-term, CM (tab ki Mamata Banerjee sarkar) ka ailaan — karyakaal se pehle + unse juda nahi — reject.
// R-7. Portfolio (Power + Non-Conventional and Renewable Energy Sources): topindiannews.com aur Wikipedia par dikha, lekin whitelisted outlet par portfolio allocation ki report nahi mili (shapath ke samay Telegraph/Hindu ne likha tha portfolio baad me ghoshit honge) — whitelisted pushti bina profile me jodne ke liye NAHI — retry lead.
// R-8. Cabinet-vistar ke non-whitelisted roundup (5dariyanews, knowledgemart, thetimesofbengal, india.com, bricstimes): whitelist se bahar — reject.
// R-9. BEUP (Rs 1 crore/seat/varsh, June 2026 budget): Kandi seat ke liye itemized BEUP sanction list ya swikrit karyon ki koi media report nahi mili — fund jodne ka koi aadhaar nahi — "ghoshit nahi".

// RETRY LEADS (agli baar check karein)
// RL-1. myneta halafnama ke 2 criminal cases ke FIR number/thana ka vivran nikalkar established media par May 2026+ ka nyayik vikas (chargesheet/adalt notice) dhoondhein.
// RL-2. Murshidabad district ki 2026-27 BEUP sanction list (sarkari portal/GO) me Kandi seat ke MLA-sanctioned kaam — Nov-Dec 2026 ke baad phir check karein.
// RL-3. The Telegraph India / TOI ke local Murshidabad edition me Kandi me unke dwara kiya gaya koi lokarpan/shilanyas (school/bhavan/sadak) — seedha naam search.
westbengalWorks['gargi-das-ghosh'] = [];

// WEST BENGAL — Bharatpur — Mustafijur Rahaman (TMC)
// Pehchan: Bharatpur (seat 69, Murshidabad) ke 2026 se MLA, TMC. westbengal.ts record se: party All India Trinamool Congress, 2026 me 90,870 votes se jeete (margin 30,753, BJP ki Anamika Ghosh ko haraya); halafnama note: age 45, kul sampatti Rs 2,13,66,960, Total Cases: 3 (Serious IPC: 5 — murder IPC-302, attempt to murder IPC-308, promoting enmity IPC-153A sahit). NAAM-TRAP: Domkal ke CPI(M) vijeta 'Md. Mostafijur Rahaman' alag vyakti hain; Domkal se ek IND 'Mustafijur Rahaman' (age 35) bhi lada tha — ye record Bharatpur ke TMC vijeta (Suman) ka hai. (TOI constituency page, 4 May 2026 se pehchan confirm; MyNeta 2026 page nahi mila.)
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// Naya MLA + 2026 me TMC opposition me (BJP ne 207 seats jeetkar sarkar banayi, CM Suvendu Adhikari) — English media me inki May 2026+ ki koi works coverage nahi mili.

// REJECT-LOG (mustafijur-rahaman):
// 1. Chunav-nateeja coverage (TOI Bharatpur constituency page 4 May 2026 — whitelist, page kholkar padha; Indian Express result live, Business Today, ET Now, wionews, mobicrazy, currentindia) — sab May 2026 ke chunav nateeje, May 2026+ ke vyaktigat karya NAHI; reject.
// 2. TMC candidate list (ABP Live, 18 Mar 2026; Times Now; Oneindia; mobicrazy copy) — pre-term ticket announcement (naam 'Mustafizur Rahaman (Sumon)'/'Mustafijur Rahaman (Suman)' ke roop me); reject.
// 3. Wikipedia (EN 'Mustafizur Rahaman (politician, born 1981)' + Bengali-Bharatpur wala BN page) — 'son of Abdul Hai, Salar E.Z.H. School 1998' bio; non-whitelist + generic pre-term parichay; reject.
// 4. Humayun Kabir stories (Indian Express Dec 2025, rediff Dec 2025, Telegraph Mar 2025, lokmattimes Feb 2026, dailyprabhat Dec 2025, indianexpress Mar 2026) — PURV MLA (2021-2026) ke pre-term Babri-mosque/nilamban ke mamle; naye MLA Mustafijur Rahaman ka koi sambandh NAHI; reject.
// 5. The Telegraph/PTI, 3 Oct 2026, 'Blaze at Bengal MLA Bayron Biswas' Murshidabad home' — Sagardighi MLA Bayron Biswas ka mamla; Bharatpur se sambandh NAHI; reject.
// 6. Halafname ke 3 pending criminal cases (Serious IPC 5 — murder IPC-302, attempt to murder IPC-308, promoting enmity IPC-153A; ADR West Bengal Winning Candidate Report 2026 note westbengal.ts me) — pre-term pending mamle, May 2026+ me koi nyayik vikas (adalat ka aadesh/notice) nahi mila; task rule anusaar 'Halafname ke purane pending mamle akele negative NAHI'; reject.
// 7. 'Mustafizur Rahman' KKR/IPL (Zee, HT, The National) + Bangladesh High Commissioner Md Mustafizur Rahman (The Print, RTV) — galat vyakti (cricketer/diplomat); reject.
westbengalWorks['mustafijur-rahaman'] = [];

// WEST BENGAL — Rejinagar — Sakharav Sarkar (BJP)
// Pehchan: Murshidabad jile ki Rejinagar seat ke BJP vidhayak; 9 Oct 2026 ke
// upchunav me jeete (1,29,914 vote, 63.14%; Golam Nabi Azad (AJUP) se 75,816
// vote ka antar — Indian Express/TOI/The Hindu, 9.10.26). Seat Humayun Kabir
// (AJUP) ke resign karne par khaali hui thi (Kabir ne Nowda seat rakhi).
// Sarkar BJP ke poorv Murshidabad jila adhyaksh hain (India TV/IE, Oct 2026).
// Karyakaal SIRF 9 Oct 2026 (upchunav-jeet) ke baad — usse pehle ka kuch NAHI.
// Period: '2026-2031'. Mining date: 2026-10-19 (jeet ke sirf ~10 din baad).
// 2 whitelist pages poore kholkar padhe gaye (TOI polling-day piece +
// Indian Express result live-blog); 6+ search rounds (win, oath, inauguration,
// development, visit, FIR/case, whitelist outlets: Hindu/IE/HT/NDTV/India
// Today/TOI/Telegraph/PTI).
//
// REJECT-LOG (sakharav-sarkar):
// 1. TOI (page kholkar padha) 'In Rejinagar, police detain last time's winner
//    hours after by-election starts' (6-7.10.2026, polling day): "BJP candidate
//    Shankharavh Sarkar got involved in an altercation with central forces
//    after he was ordered to move away for shaking hands with voters in the
//    queue." REJECT: (a) jeet se PEHLE (candidate-period), karyakaal bahar;
//    (b) chunaav-event coverage, kaam nahi; (c) Sarkar ke khilaaf koi
//    FIR/chargesheet/janch ka zikr nahi — negative-entry ke niyam me fit nahi.
//    URL: https://timesofindia.indiatimes.com/city/kolkata/in-rejinagar-police-detain-last-times-winner-hours-after-by-election-starts/articleshow/134749885.cms
// 2. Indian Express result live-blog (page kholkar padha, 9.10.2026): jeet ke
//    baad Sarkar ka bayan — "This victory isn't mine; it belongs to the
//    'Lotus'... I have no personal claim to it... CM Suvendu Adhikari is the
//    one engaging with the minority community. We are working together on
//    this. I stand with him and follow his path. We are actively working in
//    the industrial belt of Rejinagar." REJECT: jeet-samaroh ka bayan,
//    lokarpan/shilanyas/prashn-nateeja/sanction-list/GO-swikriti me se koi
//    nahi.
//    URL: https://indianexpress.com/article/cities/kolkata/west-bengal-nandigram-rejinagar-by-election-results-2026-live-updates-counting-suvendu-adhikari-tmc-bjp-mamata-banerjee-congress-10912909/lite/
// 3. Wahi IE live-blog (9.10.2026, 3:03 PM IST): CM Suvendu Adhikari ne kaha —
//    Rejinagar me Narkelbari kshetra me pul ka shilanyas karenge, "We will set
//    up a hospital and college." REJECT: (a) CM ki GHOSHNA akele — koi
//    dastaveji swikriti/shilanyas nahi hua; (b) MLA ki vyaktigat bhoomika
//    nahi; sirf ghoshna works nahi banti.
// 4. Indian Express pre-poll piece 'BJP shifts tack to development in Bengal
//    bypoll' (~4.10.2026): Sarkar ka chunaav-prachar bayan — "I am
//    campaigning. I am talking about setting up good industries and factories
//    in the area. There is a need for a college in the area. There should be
//    a proper bridge." REJECT: chunaav-prachar ka vaada, pre-term (jeet se
//    pehle); maang/prastav/ghoshna akele.
//    URL: https://indianexpress.com/article/political-pulse/babri-mandir-bjp-bengal-bypoll-10905627/
// 5. Booth-109 vivad (9-10.10.2026): Abhishek Banerjee ne social media par
//    dawa kiya ki Rejinagar ke Booth 109 me Sarkar ko 909 vote mile jabki
//    kul matdata 772 the. DEO/DM ne turant khandan kiya (electoral roll me
//    1,109 registered electors, 972 vote sabhi ummeedwaron ko milakar pade).
//    RO (ECI) ne police complaint ABHISHEK BANERJEE ke khilaaf darj ki
//    (Rejinagar PS), Sarkar ke khilaaf nahi. REJECT (negative-bar): MLA khud
//    kahin aaropi nahi; dawa prashasan ne refute kar diya; coverage bhi
//    non-whitelist outlets par (The Statesman, IANS mirrors) — whitelist par
//    Sarkar ko aaropi banane wali koi khabar nahi.
// 6. Humayun Kabir ka viral-video aarop (polling ke din, ~6.10.2026): Kabir ne
//    video share karke aarop lagaya ki BJP pratyashi "chhappa vote" daal rahe
//    hain; Sarkar ne khandan kiya. REJECT: (a) outlet YouTube/Aaj Tak Bangla
//    — whitelist bahar; (b) whitelist outlets par Sarkar ke naam FIR-aaropi
//    column me koi FIR/chargesheet report nahi hui; shikayat akele negative
//    nahi banti.
// 7. Chunaav halafnama (myneta/ADR, Wikipedia par cited): REJECT — pre-term
//    affidavit reporting akele; Oct 2026+ me koi nyayik vikas whitelist par
//    nahi.
// 8. Shapath-grahan: 19.10.2026 tak whitelist outlets par Rejinagar ke naye
//    MLA ke shapath-grahan ki koi alag khabar index nahi hui — entry banane
//    layak kuch nahi.
// 9. Post-win (9-19.10.2026) whitelist outlets par: koi vyaktigat
//    lokarpan/shilanyas, koi Vidhansabha prashn-nateeja/ashwasan, koi itemized
//    BEUP sanction list, koi GO-backed swikriti — kuch nahi mila. Jeet ke
//    sirf ~10 din baad ye apekshit hai; profile khali rakhna theek hai.
//
// Negatives: SHUNYA. Oct 2026+ me MLA khud aaropi ho aisa koi FIR/chargesheet/
// janch ya nyayik vikas (aadesh/notice) whitelist par nahi mila. Polling-day
// altercation (TOI) me koi FIR nahi; booth-109 aarop khandan ho gaya aur usme
// complaint Sarkar ke khilaaf nahi thi.
westbengalWorks['sakharav-sarkar'] = [];

// WEST BENGAL — Beldanga — Bharat Kumar Jhawar (BJP)
// Karyakaal: sirf May 2026+ (ECI result 4 May 2026; Wikipedia/Bharat_Kumar_Jhawar: assumed office 4 May 2026). Period: '2026-2031'.
// Pehchan: Beldanga (71), Murshidabad; 2026 me BJP ticket par jeete — 72,872 votes, margin 13,208 vs Rabiul Alam Chowdhury (AITC). Poorv me Trinamool leader + Beldanga municipal chief the (Economic Times, chunav se pehle — PRE-TERM).
// Mining date: 2026-10-19. Whitelist outlets (The Hindu, IE, HT, NDTV, India Today, TOI, Telegraph, PTI-via-established) par ~10 rounds search; 2 pages (TOI AJUP-giraftari, Statesman road-lokarpan) kholkar padhe gaye.
//
// REJECT-LOG (bharat-kumar-jhawar):
// 1. The Hindu, 4 May 2026, "Beldanga election results 2026: BJP's Bharat Kumar Jhawar wins" — sirf chunav-nateeja khabar (Wikipedia reference me cited). Kaam nahi. REJECT (chunav nateeja akela).
// 2. Indian Express, 4 May 2026, "Beldanga Election Result 2026 LIVE Updates" (indianexpress.com/elections/beldanga-election-result-live-updates-...) — live counting coverage. Kaam nahi. REJECT (chunav nateeja akela).
// 3. TOI (whitelist), 14 Sep 2026, "Beldanga tense after arrest of 2 AJUP netas" — page KHOLKAR PADHA: Munayem Sekh (AJUP Beldanga-I president) aur Sarafraj Nawaj Chowdhury ki giraftari (BJP flags lagane wali audio saazish ka aarop). Poori khabar me Bharat Kumar Jhawar ka naam KAHIN NAHI — MLA quote/prayaog nahi. REJECT (MLA koi bhoomika nahi). URL: https://timesofindia.indiatimes.com/city/kolkata/beldanga-tense-after-arrest-of-2-ajup-netas/articleshow/134242756.cms
// 4. The Statesman, 20 Feb 2026, "MLA jeered at road inauguration ceremony" — page KHOLKAR PADHA: Palashipara ke TMC MLA Manik Bhattacharya road lokarpan par ghere gaye; Beldanga/Jhawar se koi sambandh nahi; PRE-TERM bhi. REJECT (galat vyakti, galat seat, pre-term). URL: https://www.thestatesman.com/bengal/mla-jeered-at-road-inauguration-ceremony-1503559660.html
// 5. Economic Times (pre-poll), "West Bengal Polls: In Murshidabad's Beldanga, gamochas weave livelihoods" — "The BJP has nominated former Trinamool leader and former municipal chief Bharat Jhawar." Chunav se pehle ki profile line; karyakaal se pehle ka vyaktigat itihaas. Kaam nahi. REJECT (pre-term). URL: https://m.economictimes.com/news/elections/assembly-elections/west-bengal/west-bengal-polls-in-murshidabads-beldanga-gamochas-weave-livelihoods-amid-election-noise/amp_articleshow/130217459.cms
// 6. The Statesman (pre-poll), "Beldanga: Development vs polarisation shapes 4-cornered contest" — chunav analysis; Jhawar sirf candidate ke roop me naam; koi kaam-dawa nahi. REJECT (chunav coverage). URL: https://www.thestatesman.com/bengal/beldanga-development-vs-polarisation-shapes-4-cornered-contest-1503579855.html/amp
// 7. Humayun Kabir Babri-Masjid kram (moneycontrol/PTI, webindia123, lokmattimes, indiatvnews — sabhi ~Nov-Dec 2025, Beldanga me proposed event) — mukhya vyakti Bharatpur ke MLA Humayun Kabir; Jhawar ka koi vyaktigat role/uddharan whitelist reporting me nahi mila; event dusre neta ka. REJECT (dusre neta ka karyakram; sampradayik-vishay me savdhani niyam).
// 8. bkjmlabeldanga.in (MLA ki apni site, non-whitelist) — digital grievance portal + 137 complaints/12 resolved ke dawe; bhautik sarkari sanrachna ka vyaktigat lokarpan/shilanyas nahi; itemized fund list nahi; keval digital platform. REJECT (dawa-akela, bhautik kaam nahi; source bhi non-whitelist).
// 9. Vidhansabha prashn ka dastaveji nateeja / itemized BEUP sanction list / GO-backed swikriti / vyaktigat lokarpan-shilanyas — Beldanga seat par whitelist outlets me May 2026+ ka koi record nahi mila. Fund: kisi srot ne BEUP rashi ka zikr nahi kiya — ghoshit nahi.
// 10. Negatives: foundation record (ADR Phase-I report se) me halafnama — criminal list me naam nahi (0 cases); age 75, kul sampatti Rs 10,89,31,440. Whitelist par FIR/chargesheet/janch ya May 2026+ me koi nyayik vikas (adalat aadesh/notice) Bharat Kumar Jhawar ke khilaf nahi mila. MLA khud kahin aaropi nahi — negatives: 0. REJECT (koi qualifying negative nahi). Ref: MyNeta WestBengal2026 via ADR summary (halafnama link foundation record me darj).
// RETRY-LEADS: (a) assembly.wb.gov.in ke question-hour records me "Bharat Kumar Jhawar" ke prashn khojo — agar PTI/whitelist ne cover kiya to dawa/news entry ban sakti hai; (b) The Telegraph ki Murshidabad beat aur TOI Kolkata ke Beldanga pieces monitor karo — ~5.5 mahine me abhi tak vyaktigat lokarpan/shilanyas ya BEUP list ki koi whitelist khabar nahi aayi; (c) AJUP-audio mamle me BJP flags wali saazish me sthaniya BJP MLA ki pratikriya kabhi whitelist me quote ho to bhi wo rajnaitik tippani rahegi — kaam-entry nahi banegi, dhyan rakho.
// PARTY-FIELD NOTE (edit NAHI): foundation record me party 'Bharatiya Janata Party' darj hai; sabhi whitelist srot isse confirm karte hain — koi party-flag nahi.
westbengalWorks['bharat-kumar-jhawar'] = [];

// WEST BENGAL — Baharampur — Subrata Maitra (Kanchan) (BJP)
// Karyakaal: sirf May 2026+ (May 2026 me 18vi Vidhansabha me chune gaye — 2021-2026 term se pehle ke MLA bhi yahi the,
// lekin kaam/negatives sirf May 2026+ ke gine jayenge). Period: '2026-2031'.
// Pehchan: Baharampur (AC 72), Murshidabad jila. Foundation record src/data/westbengal.ts se pakki: slug
// 'subrata-maitra-kanchan', party BJP, umra 59, Graduate (ECI halafnama-based IE constituency page: 2026 assets
// Rs 1,38,27,050, 6 criminal cases — affidavit tathya; May 2026+ vikas nahi).
// Mining date: 2026-10-19. Whitelist outlets par 10+ search rounds (The Hindu, Indian Express, HT, NDTV,
// India Today, TOI, Telegraph India, PTI-carrying outlets) + 1 Telegraph page kholkar padha gaya.
//
// REJECT-LOG (subrata-maitra-kanchan):
// 1. The Telegraph (page kholkar padha, 06.05.26) — "Rivals trade charges in north Bengal following announcement
//    of election results": Maitra ne teeno parking areas ka daura kiya jahan TMC karmiyon par gair-kanuni fee
//    vasoolne ka aarop tha; maujooda sarkar se parking policy ki maang; nau TMC karyalayon ko "vapas saunpa".
//    REJECT: sirf daura/nirikshan + bayan — koi bhautik sarkari sanrachna ka lokarpan/shilanyas nahi.
//    URL: https://www.telegraphindia.com/elections/west-bengal-assembly-election-2026/rivals-trade-charges-in-north-bengal-following-announcement-of-election-results-prnt/cid/2159231
// 2. Chunav coverage (Indian Express/TOI/Republic/India TV, 4-6 May 2026) — jeet ki khabar: 91,088 vote,
//    Adhir Ranjan Chowdhury par 17,548 margin se jeet. REJECT: event/parinam khabar, kaam nahi.
// 3. Campaign coverage (TOI mirror via newspointapp, April 2026) — "500 gharon ka daura roz" ka dawa, Baharampur
//    me vikas hua kehne wala statement. REJECT: (a) pre-term (chunav se pehle); (b) sirf dawa, koi dastaveji
//    kaam nahi; (c) non-whitelist mirror.
// 4. PRS MLATrack page (prsindia.org/mlatrack/subrata-maitra) — data sirf 07-05-2021 se 12-02-2024 tak ka
//    (attendance 60.4, questions 0). REJECT: pre-May-2026 term ka data, is karyakaal ka nahi.
// 5. myneta.info 2021 halafnama — 6 criminal cases. REJECT: pre-term mamle; May 2026 ke baad koi nyayik vikas
//    (chargesheet/giraftaari/adheshnirnay) whitelist source par nahi mila — negative entry nahi banta.
// 6. Ram-mandir shilanyas, Manindra Nagar (Baharampur), Dec 2025 — karyakram BJP neta Sakharav Sarkar ne kiya
//    (Humayun Kabir ki mosque-foundation story ke sambandh me reporting, Dec 2025). REJECT: (a) Maitra ki
//    bhoomika nahi; (b) pre-term.
// 7. Negatives: myneta/IE affidavit me 6 cases (pre-term), lekin May 2026+ me FIR/chargesheet/janch/adalati
//    vikas whitelist media me REPORT nahi — negative entry NAHI. Shikayat par sirf naam = NAHI.
// 8. Vidhansabha prashn/sanction list/GO-backed swikriti — Baharampur seat ke naam par whitelist outlets me
//    May 2026+ ka koi dastaveji nateeja nahi mila.
// Khali profile: May 2026 me padbhara sambhalne ke baad ~5.5 mahine me whitelist me koi valid seat-kaam
// publish nahi hua.
westbengalWorks['subrata-maitra-kanchan'] = [];

// WEST BENGAL — Hariharpara — Niamot Sheikh (TMC)
// REJECT-LOG: whitelist (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, The Telegraph (India), PTI via established outlet) me May 2026–Oct 2026 tak Hariharpara seat par MLA Niamot Sheikh ka koi VYAKTIGAT lokarpan/shilanyas (bhautik sarkari sanrachna ka, fund+bhoomika disclosed), itemized BEUP sanction list, dastaveji Vidhansabha-prashn ka nateeja/ashwasan, ya GO-backed swikriti nahi mili — sab REJECT. MLA 18vi Vidhansabha me May 2026 me chune gaye (foundation: 80338 votes, margin 12665); 2026–2031 karyakaal abhi sirf ~5.5 mahine purana hai. Niamot Sheikh 2016 se lagatar isi seat ke MLA hain, isliye pre-May-2026 ki sab khabren scope se bahar rakhi gayin.
// (1) BOOM Live fact-check (nordot.app, ~June 2026): Hariharpara me 19 January 2026 ko TMC MLA Niamot Sheikh ne SIR (special intensive revision) ke khilaf pradarshan ka netritva kiya, PM aur Home Minister ke putle jalaye gaye. — PRE-TERM (May 2026 se pehle) + rajnaitik pradarshan, kaam ki shreni me nahi. REJECT.
// (2) MyNeta 2021 affidavit (opened): 1 criminal case — Railway Act Sec-174A/146, Berhampore RPF Case No. 68/2014, 15/12/2014 (symbolic strike me hissa); cognizance abhi tak nahi. Serious IPC: 0. — affidavit-matra (whitelist media me FIR-aaropi column wala dastavez sourced nahi), aur May 2026+ me is mamle ka koi nyayik vikas nahi mila. Negative-rule fail: negative NAHI.
// (3) Indian Express (Hariharpara 2026 results page): candidate list — Niamot Sheikh assets Rs 2,12,24,652, 1 case, age 75, 12th Pass; winner 80338 votes. — sirf chunav ginti, kaam nahi. REJECT.
// (4) TOI liveblog (May 2026): chunav counting — "TMC's Niamot Sheikh leads with a margin of 12,665 votes". — chunav khabar, kaam nahi. REJECT.
// (5) The Telegraph (Dec 2023, kholkar padha): "Equal dedication to arts and administration" — Hariharpara ke ek panchayat head Goutam Kumar Das par feature; Niamot Sheikh ka sirf ek prashansa-quote ("We are proud of Das..."). — pre-term + MLA ki bhoomika sirf tippani, kaam nahi. REJECT.
// (6) channel6network (Oct 2025, NON-whitelist): Bihar me 3 Murshidabad pravasi majduron par hamla; Niamot Sheikh ne 2 pratinidhi bheje, Hariharpara thane me shikayat darz karane me madad. — source whitelist me nahi + pre-term + keval pratinidhi bhejna, lokarpan/shilanyas/fund-item nahi. REJECT.
// (7) firsttender.com / westbengal-tenders.co.in (NON-whitelist tender aggregators): Hariharpara block me sadak/high-mast light ke tender (kuch "under BEUP fund" tagged) — tender suchi me MLA ka naam/bhoomika disclosed nahi; srot bhi whitelist se bahar. REJECT.
// (8) News18/CNBC/abplive/voterslist.in: 2021–2026 chunav parinam pages — sirf vote/margin ginti. REJECT.
// Negatives: upar (2) pre-term affidavit case hai jisme May 2026+ ka koi nyayik vikas whitelist media me nahi mila. Murshidabad hinsa/siR pradarshan se jude Niamot Sheikh par koi FIR/chargesheet/janch whitelist media me nahi mili. Koi negative entry nahi. Jawab disclosed wali sthiti nahi aayi.
// Foundation cross-check: src/data/westbengal.ts me slug 'niamot-sheikh', party 'All India Trinamool Congress' (TMC), constituency Hariharpara, Murshidabad — naam/seat/party sab pakke. Party-field edit ka koi suggestion nahi.
westbengalWorks['niamot-sheikh'] = [];

// WEST BENGAL — Naoda — Humayun Kabir (AJUP)
// Karyakaal: sirf May 2026+ (4 May 2026 ko Naoda + Rejinagar dono jeete; Rejinagar se resign karke Naoda retain ki). Period: '2026-2031'.
// Mining date: 2026-10-19. Whitelist outlets (The Hindu/IE/HT/NDTV/India Today/TOI/Telegraph/PTI via established outlet) par kai rounds search; har prayog me page kholkar padha gaya.
// Pehchan-pushti: cited articles me vyakti "AJUP chief and Naoda/Nowda MLA Humayun Kabir" ke roop me identified hai — foundation record (AJUP chief, Naoda, age 63) se match; naam-trap wale alag vyaktiyon (AITC Domkal wale age 64; IND Rejinagar wale age 32; Humayun Kabir Sekh IND Naoda age 43) se sambandh nahi.
// WORKS: whitelist me May 2026–Oct 2026 tak Naoda seat par MLA Humayun Kabir ka koi VYAKTIGAT lokarpan/shilanyas, fund-disclosed itemized BEUP sanction, dastaveji Vidhansabha-prashn nateeja, ya GO-backed swikriti nahi mila — sab REJECT, works: koi entry nahi.
//
// REJECT-LOG (humayun-kabir):
// 1. Babri-style masjid foundation stone (6 Dec 2025, Rejinagar/Beldanga) — PRE-TERM (May 2026 se pehle) + niji dharmik sanrachna, sarkari bhautik sanrachna nahi; upar se Rejinagar ilaka. REJECT (kaam nahi).
// 2. Telegraph India/PTI (19.09.26, kholkar padha) — sampradayik tanaav ki sajish ka mamla 14 Sep 2026 ko darj; audio recording ke aadhar par Kabir ko Berhampore police ke samne pesh hone ka notice. Police ne khud kaha: recording me doosre vyakti ki pehchan aadhikarik roop se nahi hui, "aawaz Kabir jaisi lagti hai" — voice-sample ke liye court ki anumati maangi jayegi; janch initial stage par. TOI Kolkata (21.09.26, whitelist, kholkar padha) me Kabir ne khud kaha notice me unhe "gawah" (witness) ke roop me bulaya gaya tha; unhone sajish ka aarop nakara aur 21 Sep ko pesh hone ka vachan diya. — "MLA KHUD aaropi" ki sthiti poori nahi hoti; sampradayik-aarop wali savdhaani ke saath negative NAHI. REJECT.
// 3. 6 Oct 2026 — Rejinagar upchunav ke din Kabir ki hirasat/giraftari (TOI Kolkata + TOI India + Indian Express + Telegraph/PTI + NDTV — sab whitelist, kholkar padhe): party office ke bahar police se jhadap ke baad ~12 ghante hirasat, phir riha; police ka aarop "ashanti bhadkana", EC ne report maangi; Kabir ne police par booth agents nikalne ka aarop lagaya. — Kisi bhi whitelist report me FIR ya chargesheet ka zikr NAHI; negative-rule ka "FIR/chargesheet/janch ya nyayik vikas" bar poora nahi hota. REJECT (retry-lead me darj).
// 4. NDTV (20.09.26, kholkar padha) — AJUP state secretary fake notes/arms ke saath giraftar; aaropi party padadhikari hai, Kabir khud aaropi NAHI. REJECT (negative nahi).
// 5. NDTV (07.10.26) + Telegraph/PTI (07.10.26, cid/2183562, kholkar padha) — Kabir ki "sanyas"/istifa ki ghoshna (Durga Puja ke baad sakriya rajniti chhodne ka irada; CM rahe to Vidhan Sabha na jaane ka vachan). Sirf ghoshna — kaam nahi, negative nahi. REJECT.
// 6. Telegraph India (cid/2181532) — "FIR lodged against unknown persons over attack on former IPS officer Humayun Kabir" — NAAM-TRAP: ye alag vyakti hai (ex-IPS officer, Mamata TMC neta, poorv Debra MLA; Purba Jadavpur PS ke samne hamla) — AJUP chief Naoda se sambandh nahi. REJECT.
// 7. ADR Phase-I: halafname me kul 4 cases (Serious IPC: 7) — sab pre-May-2026 pending cases; May 2026+ me koi FIR/chargesheet/adalesh vikas whitelist me nahi mila. Halafnama-ginti akele negative-rule se negative NAHI. REJECT.
// 8. Indian Express political-pulse (Oct 2026, "BJP shifts tack to development in Bengal bypoll") — Kabir ke bayan (24 party neta giraftar, 12 ko bail, poochtaachh) — party-karye/raajnaitik bayan; vyaktigat kaam nahi. REJECT.
// 9. Chunav-jeet ki khabren (May 2026: Naoda 86,463 votes, margin 27,943) — jeet kaam nahi. REJECT.
// Negatives: neeche 2 entries (dono TOI, kholkar padhi; stage-accurate; dono me Kabir ka jawab disclosed).
westbengalWorks['humayun-kabir'] = [
  {
    title: 'June 2026 me Murshidabad ki ek jansabha me diye bhashan par darj hate-speech mamle me Calcutta High Court ne 10 September 2026 ko AJUP pramukh aur Naoda MLA Humayun Kabir ko anticipatory bail de di; adalat ne kaha BNS dhara 152 ke tatva pratham drishtya bhi nahi bante aur hirasati poochtaachh zaroori nahi',
    category: 'Negative',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/kolkata/calcutta-high-court-grants-anticipatory-bail-to-humayun-kabir-in-hate-speech-case/amp_articleshow/134071242.cms',
    date: '2026-09-10',
    note: 'TOI (11.09.26, Srishti Lakhotia; page kholkar padha) ke mutabik Calcutta High Court ne AJUP chief Humayun Kabir ko kathit hate-speech mamle me anticipatory bail di; Justice Ajay Kumar Gupta ki single bench ne kaha BNS ki dhara 152 (desh ki samprabhuta/ekta/akhandata ko khatra) ke tatva pratham drishtya nahi milte aur hirasati poochtaachh ki zaroorat nahi. Rajya ne virodh me kaha tha ki Kabir ne jansabha me dhamki-bhare shabd kahe, ek raajnaitik party aur lok-sevakon ko nishana banaya, aur MLA hone ke nate unhe savdhani baratni chahiye thi. Kabir ke vakil ka jawab: unhe raajnaitik dushmani ke kaaran jhootha phasaya gaya; ve janch adhikari ke dono notices par hazir hue aur do avsaron par lagbhag 4 ghante aur 5 ghante poochtaachh hui. Stage ka sach: anticipatory bail mil gayi; FIR/chargesheet par antim faisla reported nahi.',
    period: '2026-2031',
  },
  {
    title: 'CM Suvendu Adhikari ke liye "ticket" wale bayan par AJUP pramukh aur Naoda MLA Humayun Kabir ke khilaf Shaktipur, Beldanga aur Behrampore thanon me teen alag FIR darj hui; virodh ke baad Kabir ne bayan wapas lekar CM ke lambi umar ki kamna ki',
    category: 'Negative',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/kolkata/3-ajup-cadres-held-kabir-alleges-intimidation-moves-ec/articleshow/134545429.cms',
    date: '2026-09',
    note: 'TOI (page kholkar padha) ke mutabik Naoda MLA Humayun Kabir ke "death wish" wale bayan (CM ke liye "ticket" wali tippani) par police ne Shaktipur, Beldanga aur Behrampore thanon me teen alag mamle darj kiye — RPI neta Raju Ghosh aur Piyarul Sekh ki shikayaton par; Raju Ghosh ne CM ki suraksha ko lekar gambhir chinta jatayi thi. Kabir ka jawab disclosed: virodh ke baad unhone bayan wapas liya aur Adhikari ke lambi umar ki kamna ki; saath hi EC ko 2-page ki shikayat me police par tanashahi aur dhamkane ka aarop lagaya. Date reasoning: page par byline-tithi nahi dikhi; search metadata ke anusar Sep 2026 ke antim saptah ki khabar hai (bayan 27 Sep 2026 ko report hua tha — Telegraph cid/2181941; usi ke turant baad ki follow-up story hai). Stage ka sach: FIR darj; chargesheet ya adalat ka vikas reported nahi.',
    period: '2026-2031',
  },
];

// WEST BENGAL — Domkal — Md. Mostafijur Rahaman (CPI(M))
// Foundation cross-check (src/data/westbengal.ts): Md. Mostafijur Rahaman, CPI(M), Domkal (seat 75) Murshidabad, period 2026-2031, May 2026 me 18vi Vidhansabha me chune gaye (107,882 votes, margin 16,296). Wikipedia 'Md. Mostafijur Rahaman' page ke anusaar pad 4 May 2026 se. CPI(M) ka 2026 me Bengal me EKMATRA vijeta (lone Left Front MLA in 18th Assembly). ADR Phase-I: age 45, kul sampatti Rs 3,52,14,800, Total Cases: 2 (Serious IPC: 3 — murder IPC-302, attempt to murder IPC-307 sahit).
// NAAM-JAAL (sakht savdhani, records kabhi merge na hon): (1) Bharatpur ke TMC vijeta 'Mustafijur Rahaman (Suman)' (slug mustafijur-rahaman) ALAG vyakti hain; (2) Domkal me 2026 me ek IND 'Mustafijur Rahaman' (age 35) bhi lada tha — alag vyakti; (3) Naogaon (Bangladesh) ke Md. Mostafizur Rahman alag. Saare web hits Domkal + CPI(M) + age-45 se cross-check kiye gaye.
// REJECT-LOG: whitelist (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, The Telegraph (India), PTI via established outlet) me May 2026–Oct 2026 tak Domkal seat par MLA Md. Mostafijur Rahaman ka koi VYAKTIGAT lokarpan/shilanyas (bhautik sarkari sanrachna ka), itemized BEUP sanction, fund-disclosed itemized list, ya dastaveji Vidhansabha-maang nateeja/ashwasan nahi mila — karyakaal sirf ~5.5 mahine ka hai (4 May 2026 se), aur ye BJP-sarkar me 18vi Vidhansabha ke eklaute CPI(M) vipakshi MLA hain. Sab REJECT.
// (1) The Telegraph India (live-results page, 4 May 2026, snippet se padha — kholkar nahi padha kyunki chunav-nateeja hai, kaam nahi): "CPM wins Domkal constituency as Md Mostafijur Rahaman defeats TMC's Humayun Kabir by 16,296 votes" — chunav jeet kaam nahi. REJECT.
// (2) Indian Express (New Indian Express, 4 May 2026, snippet): "CPI(M) ends electoral drought in West Bengal with single assembly seat win" — Mostafizur Rahaman urf Rana ne Domkal me Humayun Kabir ko 16,296 se haraya. Chunav-khabar; kaam nahi. REJECT.
// (3) m.dailyhunt.in (Mint via Dailyhunt, ~167 din purana, snippet): "CPI(M) ends drought in Bengal with lone win in Domkal: Who is Mostafijur Rahaman?" — profile khabar (age 45, postgraduate, social worker; affidavit me Rs 3.5 crore assets, zero liabilities, 2 pending criminal cases). Aggregator + profile, kaam nahi. REJECT.
// (4) The Telegraph India (Apr 2026, ~183 din purana, snippet): "Murshidabad witnesses political flip as TMC leader and 400 migrant families switch to CPM in Domkal" — PRE-TERM (chunav se pehle ka prachar-kaleen party-joining), lok-karya nahi. REJECT.
// (5) ipanewspack.com (non-whitelist + analysis piece): "CPI(M) Making Efforts For A Turnaround In Bengal Politics Following TMC Washout" — party-vishleshan, koi kaam nahi. REJECT.
// (6) The Telegraph India (search snippet, ~11 Sep 2026): "Misuse of power? Don’t care, says Suvendu; Bengal passes bill to 'punish' teachers" — West Bengal Universities and Colleges (Administration and Regulation) (Amendment) Bill, 2026 par Vidhan Sabha bahas me "CPM member Mostafijur Rehman" (lone CPM member, Domkal/Domkol, Murshidabad) ne aapatti uthayi ("he suspected the bill was meant to target 'a particular university and its teachers'") — LEKIN bill sarkar ne 171-15 se PASS kara diya; uski maang/aapatti ka koi dastaveji nateeja/ashwasan nahi mila. Sirf bahas-mein-hissa — quality niyam se "sirf maang" nateeja bina = REJECT. (Page kholne par 403 — retry-lead.)
// (7) Times of India (11 Sep 2026, snippet): "Bill to let Bengal govt transfer profs across 31 state univs passed" — uska naam snippet me nahi; upar (6) wali bahas ka hi doosra reporting angle. REJECT.
// (8) Indian Express (11 Sep 2026, snippet): "Bengal Assembly passes Bill allowing transfer of university employees across state-run universities" — uska naam snippet me nahi. REJECT.
// (9) thestatesman.com (~10 Sep 2026): university staff transfer bill par opposition-warning wali khabar me "CPI(M) MLA from Domkal Mostafizur Rahman" ka naam — NON-whitelist source, isliye source nahi ban sakta; waise bhi bahas-mein-hissa hi hai, kaam nahi. REJECT.
// (10) etvbharat.com / uniindia.com / scroll.in / outlookindia.com: upar wale bill ke NON-whitelist ya PTI-less reports — whitelist ke bahar; koi vyaktigat kaam nahi. REJECT.
// Negatives: MyNeta/ADR affidavit me 2 pending criminal cases (Serious IPC-302, IPC-307 sahit) PRE-TERM ke hain — May 2026+ me whitelist media me Md. Mostafijur Rahaman KHUD aaropi wali koi FIR/chargesheet/janch ya nyayik vikas (adalat ka aadesh/notice) nahi mili. "Chunav-yachika akele NAHI" — koi election petition nahi mili. Party-vivadi ya chunav-hinsa ki koi FIR khabar unke naam par May 2026+ me nahi mili. Isliye koi negative entry nahi. Jawab-disclosed wali sthiti nahi aayi.
// Fund: BEUP Rs 1 crore/seat/varsh (June 2026 budget se) — koi srot "Md. Mostafijur Rahaman / Domkal" ke liye BEUP vyay/swikriti spasht roop se nahi kehta; koi itemized sanction list nahi mili. allocated: 'ghoshit nahi'.
// Party-field edit suggestion: koi nahi.
westbengalWorks['md-mostafijur-rahaman'] = [];

// WEST BENGAL — Jalangi — Babar Ali (TMC)
// Pehchan: Jalangi (Murshidabad, seat 76) se 2026 me TMC ticket par jeete — 88684 votes, margin 21516 (TOI 2026 winners page + westbengal.ts record). Vikhyat 'duniya ke sabse chhote headmaster' (BBC 2009) — Ananda Shiksha Niketan ke sansthapak. Halafname me kul sampatti Rs 2,84,296; Total Cases: 1 (IPC-326, FIR 471/12 dated 22/04/2012, Berhampore PS; charges framed 18 Dec 2013). NAAM-TRAP: Rejinagar se SUCI(C) ke 'Babar Ali' (age 63) alag vyakti hain. (westbengal.ts record + TOI result page)
// Karyakaal: May 2026+; Period: '2026-2031'. Mining date: 2026-10-19.
// REJECT-LOG (babar-ali):
// 1. TOI Jalangi election result page (2026) — sirf 2026 chunav nateeja reporting; koi May 2026+ vyaktigat kaam ka zikr nahi. Srot: https://timesofindia.indiatimes.com/india/jalangi-election-results-2026-tmcs-babar-ali-vs-bjps-naba-kumar-sarkar/articleshow/130678251.cms
// 2. ABP Live Jalangi live-update pages (04 May 2026) — sirf counting/election updates; pre-term. Srot: https://news.abplive.com/elections/jalangi-election-result-2026-live-updates-constituency-vote-counting-winner-loser-tmc-bjp-congress-west-bengal-assembly-election-1840176
// 3. Bharat Horizon election-result rewrites (TOI feed ke swar me) — sirf nateeja, works nahi. Srot: https://bharathorizon.com/politics/national-politics/tmcs-babar-ali-wins-jalangi-seat-by-21516-votes.html
// 4. MyNeta 2026 affidavit page — sirf halafnama tathya (education/sampatti/1 case); works nahi. Srot: https://myneta.info/WestBengal2026/candidate.php?candidate_id=1086
// 5. Wikipedia (Babar Ali teacher + Jalangi constituency) — profile/chunav table; secondary, works nahi. Srot: https://en.wikipedia.org/wiki/Babar_Ali_(teacher) ; https://en.wikipedia.org/wiki/Jalangi_Assembly_constituency
// 6. Millennium Post 'Trinamool banks on Babar Ali's grassroots connection' (20 Mar 2026) — PRE-TERM + whitelist me nahi (millenniumpost reject). Srot: https://www.millenniumpost.in/bengal/trinamool-banks-on-babar-alis-grassroots-connection-in-jalangi-652537
// 7. Maktoob Media pre-poll feature ('Youngest headmaster turns to politics') — PRE-TERM + whitelist me nahi. Srot: https://maktoobmedia.com/post?id=115314&slug=youngest-headmaster-babar-ali-turns-to-politics-fights-jalangi-seat-for-tmc
// 8. ETV Bharat candidate profile (17 Apr 2026) — PRE-TERM + whitelist me nahi. Srot: https://www.etvbharat.com/en/bharat/babar-ali-worlds-youngest-headmaster-is-trinamool-congress-candidate-in-jalangi-west-bengal-elections-enn26041702506
// 9. Sunday Guardian interview (pre-poll) — sirf chunavi prathmiktao ki baatein, koi May 2026+ kaam nahi; whitelist me nahi. Srot: https://sundayguardianlive.com/news/illegal-migration-a-result-of-centres-failure-tmcs-babar-183329/
// 10. obnews.co 'journey' feature — aggregator, koi May 2026+ kaam nahi. Srot: https://www.obnews.co/Index/newsDetail/id/15045037.html?val=b3ff23daa7344523bda7f320bd0e2114
// 11. Star of Mysore (25 Sep 2026): 'MLA Babar Ali launches Skill100 AI Version 2 at Learners Global School in Mysuru' — SEAT KE BAHAR (Mysuru, Karnataka) + samaroh/keval launch + whitelist me nahi. Srot: https://starofmysore.com/mla-babar-ali-launches-skill100-ai-version-2-at-learners-global-school-in-mysuru/
// 12. Free Press Journal / PTI (17 Jul 2026): Vidhansabha parisar me Sonam Wangchuk ke mudde par TMC MLAs ka sit-in dharna — pradarshankariyon me 'Babar Ali' ka naam; PARTY KARYAWAHI, koi bhautik sarkari sanrachna ya dastaveji nateeja nahi. Srot: https://www.freepressjournal.in/india/tmc-mlas-protest-in-west-bengal-assembly-over-sonam-wangchuks-health-urge-centre-to-hold-talks
// 13. Deccan Chronicle (Rejinagar bypoll, ~20 Sep 2026): Babar Ali ne Rabiul Alam Choudhury ke Beldanga niwas par band kamre ki ranniti-baithak ki — party karyawahi, works nahi. Srot: https://www.deccanchronicle.com/amp/nation/rejinagar-bypoll-didi-likely-to-campaign-under-new-tmc-banner-1989046
// 14. Dailyhunt (Deccan Chronicle feed): 'Babar Ali was seen with RSS chief Mohan Bhagwat' — ASATYAPIT rumour (page khud 'not examined the picture reality' kehta hai) + aggregator + PRE-TERM. Srot: http://m.dailyhunt.in/news/india/english/deccan%20chronicle-epaper-decchron/murshidabad%20rebellion%20dropped%20tmc%20mlas%20plot%20next%20move%20as%20factional%20feuds%20erupt-newsid-n705068577
// 15. Halafname wala 1 case (IPC-326, FIR 471/12, Berhampore PS, charges framed 18 Dec 2013) — PRE-TERM; May 2026+ me koi nyayik vikas established media me NAHI mila, isliye negative entry ke yogya NAHI. (myneta candidate_id=1086)
// 16. The Telegraph flood/erosion topic pages (Sep 2026, Manikchak/Nadia) — Murshidabad ksharan ka zikr hai par Babar Ali ka naam kahin nahi; unke nirikshan ka whitelist saboot nahi mila (waise bhi nirikshan matra reject hota).
// 17. FirstTender.gov.in Jalangi block Su-Swasthya Kendra tender (Dec 2025/Jan 2026) — PRE-TERM + MLA ki vyaktigat bhoomika ka koi zikr nahi.
// Note: BEUP fund ke liye srot spasht roop se BEUP kahne wala koi item nahi mila.
westbengalWorks['babar-ali'] = [];

// ============================================================================
// BATCH 4 (Nadia — 10/23 jile)
// ============================================================================


// wb4 worker — samarendranath-ghosh (Karimpur 77, Nadia, BJP)
// MLA PEHCHAN (seat se pakki):
//   naam: Samarendranath Ghosh; party: BJP; seat: Karimpur (Vidhansabha seat sankhya 77, Nadia jila, Murshidabad Lok Sabha ke andar).
//   2026 chunav me jeet (AITC ke Soham Chakraborty ko 10,185 votes se haraya), karyakaal 4 May 2026 se shuru (18vi Vidhansabha).
//   NOTE: upnaam Ghosh hai (Biswas nahi) — Karimpur seat se pehchan pakki hui; naam se milte-julte doosre vyaktiyon ko reject kiya gaya (neeche).
//   Pichhla karyakaal 2011-16 me CPI(M) ke ticket par tha — wo pre-term hai aur is file me bilkul shamil nahi hai.
//   Karyakaal 19 Oct 2026 tak sirf ~5.5 mahine ka hai.

// REJECT-LOG (har reject lead + reason + URL):
// 1. TOI "Former TMC MLA arrested for RG Kar victim cremation hurry"
//    https://timesofindia.indiatimes.com/articleshowprint/133223912.cms
//    REJECT: aaropi Nirmal Ghosh (Panihati ke poorv TMC MLA) hai — Karimpur ke Samarendranath Ghosh nahi. Pehchan mismatch.
// 2. The Statesman "Tension in Nadia as TMC MLA accused of assaulting students" (9 Feb 2026)
//    https://www.thestatesman.com/bengal/tension-in-nadia-as-tmc-mla-accused-of-assaulting-students-1503554309.html/amp
//    REJECT: aaropi poorv MLA Bimalendu Singh Roy (TMC) hai; ghatna Feb 2026 ki = pre-term. Naye MLA se koi sambandh nahi.
// 3. The Telegraph "Rs 1.05 crore film fund FIR hits Tollywood actor and former Trinamool MLA Soham Chakraborty" (06.06.26)
//    https://www.telegraphindia.com/west-bengal/kolkata/rs-1-05-crore-film-fund-fir-hits-tollywood-actor-and-former-trinamool-mla-soham-chakraborty-prnt/cid/2164197
//    REJECT: FIR Soham Chakraborty (2026 me Karimpur se hare hue AITC ummidwar) ke khilaf hai; MLA Samarendranath Ghosh FIR/aaropi column me kahin nahi.
// 4. The Telegraph "BJP points to TMC Krishnanagar MP Mahua Moitra, government officials over land grab in Nadia" (Aug 2026)
//    https://www.telegraphindia.com/west-bengal/bjp-points-to-tmc-krishnanagar-mp-mahua-moitra-government-officials-over-land-grab-in-nadia-prnt/cid/2173234
//    REJECT: aarop MP Mahua Moitra (Krishnanagar) aur sarkari adhikariyon par hai; Karimpur MLA ka naam kahin aaropi ke roop me nahi — MP ka mamla bahar.
// 5. Indian Kanoon "Samarendra Nath Ghosh vs The State of West Bengal & Ors" (judgment 18 May 2011)
//    https://indiankanoon.org/doc/659839/
//    REJECT: ye alag vyakti hai (M/s. Balaram Bhandar firm ka SK Oil licence-radd mamla, 2005 ke aadesh); MLA us daur me Darermath High School (Karimpur) ke headmaster the. Pehchan mismatch + pre-term.
// 6. myneta.info halafname (West Bengal 2021: "2" ghoshit cases)
//    http://myneta.info/WestBengal2021/candidate.php?candidate_id=1298
//    REJECT: halafname ke purane ghoshit mamle akele negative nahi (rule); May 2026+ me in par koi nyayik vikas (FIR/chargesheet/adalati aadesh) whitelisted media me nahi mila.
// 7. kalimpongonlinenews.blogspot.com "BJP presents first Bengal Budget" (June 2026)
//    http://kalimpongonlinenews.blogspot.com/2026/06/bjp-presents-first-bengal-budget-with.html
//    REJECT: srot whitelist me nahi; lekh me Karimpur MLA ka koi zikr nahi; budget me MLA LAD fund 70 lakh se 1 crore ka faisla rajya-stariya hai (vibhag/rajya faisla = reject category). BEUP ka ullekh MLA ke sambandh me kahin nahi.
// 8. Chunav-parinaam coverage: ABP Live (news.abplive.com), Indian Express, TOI, Business Today, WION, ET Now, Loksatta (sabhi May 2026)
//    REJECT: sabhi 4-5 May 2026 ke vote-counting/chunav-parinaam ki khabrein hain; inme May 2026+ ka koi seat-work, lokarpan, ya vidhayi nateeja nahi.
// 9. urbanacres.in "Karimpur Check Post Delay Leaves Nadia Waiting for Border Link" (3 Oct 2026)
//    https://urbanacres.in/karimpur-check-post-stalls-as-nadia-waits-for-a-border-trade-link/
//    REJECT: srot whitelist me nahi; lekh me MLA ka koi zikr nahi; sirf proposal-stariya khabar (koi lokarpan/shilanyas nahi).
// 10. wbphed.gov.in tender WBPHE/21/ND of 2026-27 (Karimpur-1 Block water supply O&M, memo 08-09-2026)
//    http://wbphed.gov.in/en/tenders/get-pdf/00bd14a6-56d-4f0b-9791-fc5165a99070
//    REJECT: vibhagiya tender hai; MLA ka naam/bhoomika kahin nahi; vibhag ka kaam reject category.
// 11. Khali khojein (koi whitelisted lead nahi mila): "Samarendra Nath Ghosh" / "Samaren Ghosh" naam-bhed; "Karimpur MLA inaugurated / foundation stone 2026"; "BEUP / MLA fund / lakh Karimpur"; "assembly question vidhan sabha 2026"; news-vertical aur outlet-specific (Telegraph/TOI/NDTV/HT/India Today) khojein; site:wbassembly.gov.in par koi index page nahi.
//     NATEEJA: May 2026+ ke koi seat-works (lokarpan/shilanyas/fund-swikriti/vidhansabha nateeja) aur koi negative (FIR/chargesheet/adalati vikas) nahi mile.
//     Sthaniya (Bengali) press me ho sakta hai, lekin wo whitelist me nahi — isliye entry nahi banayi.

// RETRY-LEADS: koi nahi.
// (Koi candidate entry bani hi nahi, isliye koi page browser.open se kholne ki zaroorat nahi padi; saare leads seat/pehchan/karyakaal ke aadhar par reject hue. Koi whitelisted page 403 ya khulne me fail nahi hua.)

// wb4 — samarendranath-ghosh (Karimpur, Nadia, BJP)
westbengalWorks['samarendranath-ghosh'] = [];


// MLA pehchan: Subrata Kabiraj (media me Kabiraj spelling bhi) — BJP, Tehatta seat (78, Nadia jila; Krishnanagar Lok Sabha). 4 May 2026 ko 18vi Vidhansabha ka pad sambhala; 2026 chunav me 1,12,138 votes (48.01%) se jeete, runner-up Dilip Kumar Poddar (AITC, 83,885). Pichhle MLA Tapas Kumar Saha (AITC, 2021 vijeta) ka May 2025 me nidhan ho chuka tha — Kabiraj pehli baar MLA bane, karyakaal sirf ~5.5 mahine ka hai.
// REJECT-LOG: whitelist (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, The Telegraph (India), PTI via established outlet) me 16 tarah ke searches (dono spelling Kabiraj/Kabiraj, inauguration/foundation stone/BEUP/road/school/hospital/FIR/arrest/controversy/protest queries, news vertical, outlet-specific) me May 2026–Oct 2026 tak Tehatta seat par Subrata Kabiraj ka koi VYAKTIGAT lokarpan/shilanyas, fund-disclosed itemized sanction, dastaveji Vidhansabha-prashn nateeja, GO-backed swikriti, ya negative nahi mila — sab REJECT.
// (1) ABP Live / Business Today / Economic Times / Indian Express / Oneindia / Zee / Loksatta (May 2026, kholkar padha/snippet): Tehatta chunav nateeja — Kabiraj 1,12,138 votes se jeete. — Chunav jeet kaam nahi. REJECT.
// (2) The Telegraph (15.05.25): Tehatta ke tab ke MLA Tapas Saha ka nidhan. — Alag vyakti (predecessor), pre-term. Kabiraj ka naam tak nahi. REJECT.
// (3) Asianet Newsable / Lokmat Times / webindia123 (22 Jun 2026): "Subrata Thakur" ne pehla BJP budget saraha. — Alag vyakti (Gaighata MLA, budget ki general tippani) — Tehatta se sambandh nahi, naam-confusion guard. REJECT.
// (4) asianetnews / awazthevoice / Rediff (2026): Humayun Kabir (Beldanga/Murshidabad, Rejinagar) par khabren. — Alag vyakti, "Kabir" vs "Kabiraj" ka spelling-confusion. Kabiraj ka naam nahi. REJECT.
// (5) The Statesman / Daijiworld / Daily Star (17 May 2021): "CBI arrests Firhad, Subrata, Madan, Sovon" Narada case. — Ye "Subrata Mukherjee" hai (tatkalin TMC mantri), Subrata Kabiraj nahi; 2021 ka, pre-term. REJECT.
// (6) Loksatta ummidwar suchi (snippet): Kabiraj ke halafname me 1 case darj, umr 55, graduate. — Sirf affidavit-ginti, NON-whitelist source, aur affidavit-mamle May 2026+ ke vikas ke bina negative-rule se bahar. negative NAHI.
// (7) The Hindu (6 May 2026): post-poll violence report — Kabiraj ka naam nahi, un par koi aarop nahi. REJECT.
// (8) Tehatta tenders / PHED e-tender (wbphhed, westbengal-tenders): vibhag ke kaam, MLA ki vyaktigat bhoomika ka ullekh nahi — vibhag ka kaam rule se REJECT. BEUP ka koi source kisi seat-work ke saath fund-disclosure nahi karta; srot spasht BEUP kahe hi nahi to "ghoshit nahi".
// Negatives: Kabiraj KHUD aaropi aise koi FIR/chargesheet/janch ya May 2026+ nyayik vikas whitelist media me nahi mila. Affidavit ka 1 purana mamla akele negative NAHI. Koi negative entry nahi.
// RETRY-LEADs: KOI NAHI — koi bhi lead works/negative ke candidate snippet tak nahi pahuncha, isliye browser.open se kholne layak koi candidate page tha hi nahi; har lead snippet level par hi rule-fail hua. Koi 403/unopened candidate page nahi hai.
// wb4 — subrata-kabiraj (Tehatta, Nadia, BJP)
westbengalWorks['subrata-kabiraj'] = [];


// wb4 worker file — rukbanur-rahman (Palashipara, Nadia, TMC)
// ============================================================
// MLA PEHCHAN (seat se pakka):
// - Naam: Rukbanur Rahman; Party: TMC (AITC); Seat: Palashipara (No. 79), Nadia district.
// - 18vi Vidhansabha me May 2026 se incumbent; preceded by Manik Bhattacharya.
// - Isse pehle 2011-2026 tak Chapra (No. 82) se MLA the — is karyakaal ka koi bhi kaam/kaand is file me NAHI aata.
// - Karyakaal sirf May 2026+ (18vi Vidhansabha 4 May 2026 ko bani); period field hamesha '2026-2031'.
// - Seat composition: Chanderghat + Patharghata II GPs (Tehatta I), Tehatta II block,
//   Bikrampur, Bilkumari, Dhananjaypur, Haranagar GPs (Nakashipara block); Lok Sabha: Krishnanagar.
// - BEUP fund: Rs 1 crore/seat/varsh (June 2026 se) — koi srot BEUP-tagged kaam nahi batata, isliye note me "ghoshit nahi".
//
// REJECT-LOG (har reject lead + reason + URL):
// 1. https://timesofindia.indiatimes.com/india/palashipara-election-results-2026-tmcs-rukbanur-rahman-vs-bjps-anima-dutta/articleshow/130679772.cms
//    (TOI, khola aur padha gaya) — Sirf May 2026 chunav-nateeja coverage (counting-day report); koi seat-work/negative nahi. REJECT: election coverage.
// 2. https://indianexpress.com/article/news-archive/web/brother-takes-rizwanur-s-memory-miles-from-h/ (Indian Express, 2011)
//    — Rizwanur Rahman maut-mamle par 2011 ka campaign piece; pre-term + parivar-mamla. REJECT: pre-term, family matter.
// 3. https://indianexpress.com/article/news-archive/web/didi-s-debutants/lite/ (Indian Express, 2011)
//    — Pre-term debutant profile; karyakaal May 2026+ se pehle. REJECT: pre-term.
// 4. https://indianexpress.com/article/cities/kolkata/in-his-first-political-test-rukbanur-tries-to-come-out-of-dead-rizwanurs-shadow/ (Indian Express, 1 May 2010)
//    — Pre-term KMC chunav coverage. REJECT: pre-term.
// 5. https://indianexpress.com/article/news-archive/web/politicisation-of-rizwanur-killing-does-not-cut-ice/ (Indian Express, 3 June 2010)
//    — Pre-term. REJECT: pre-term.
// 6. https://www.hindustantimes.com/india/rizwanur-s-brother-rejected-by-voters/story-OeTrUOz7CuXbwZORo7BQ5J.html (HT, 2 June 2010)
//    — Pre-term; bhai ke mamle par aadharit. REJECT: pre-term, family matter.
// 7. https://www.thestatesman.com/bengal/mla-jeered-at-road-inauguration-ceremony-1503559660.html (The Statesman, 20 Feb 2026)
//    — Yeh Manik Bhattacharya (purv MLA, Palashipara) ke baare me hai, Rukbanur Rahman ke baare me NAHI; pre-term bhi.
//    Srot whitelist me bhi nahi. REJECT: wrong MLA, pre-term, non-whitelisted.
// 8. https://www.thestatesman.com/bengal/tmc-legislature-party-splits-in-assembly-rival-factions-occupy-separate-opposition-benches-1503607436.html (The Statesman)
//    — Isme Rukbanur Rahman ka naam sirf Kalighat-dhade ke saath baithe MLAs ki list me hai; party-andaruni mamla.
//    Srot whitelist me bhi nahi. REJECT: party karyawahi (party karyawahi akele negative nahi), non-whitelisted.
// 9. TOI CRIF pieces (Sep 2026): https://timesofindia.indiatimes.com/city/kolkata/centre-approves-rs-1042-crore-for-six-bengal-road-projects/articleshow/134266890.cms
//    — Rajya-stariya sadak manzoori (Rs 1,042.6 crore, 6 projects); Palashipara ya MLA ka koi ullekh nahi.
//    REJECT: vibhag/rajya faisla, vyaktigat shreya ka koi saboot nahi.
// 10. https://indianexpress.com/elections/west-bengal-assembly-election/palashipara-constituency/
//     — Sirf candidate-list/election-result page; halafname me "Cases: 0" dikhta hai, lekin halafname ke purane pending mamle akele negative nahi hote
//     (aur yahan to koi case hi nahi hai). REJECT: election data, no works; affidavit me zero cases.
// 11. Rizwanur Rahman maut-mamla (2007-2010, CBI chargesheet/High Court) — MLA swayam aaropi NAHI; May 2026+ me is mamle ka koi nyayik vikas whitelisted
//     sroton me nahi mila. REJECT: pre-term, MLA aaropi nahi, parivar-mamla, May 2026+ me koi vikas nahi.
// 12. Mahua Moitra (Krishnanagar MP) par arrest warrant / ande ki ghatnaen (2026, thenewsmill/rediff snippets) — MP ka mamla, MLA ka nahi.
//     REJECT: MP ke kaam (task me saaf mana hai).
// 13. Nadia ke doosre MLAs ke mamle — Karimpur MLA (students par hamle ka aarop, thestatesman), Kaliganj MLA Alifa Ahmed (sex-racket aarop, ommcomnews/lokmattimes)
//     — dono doosre MLAs ke mamle, Rukbanur Rahman ka nahi. REJECT: wrong MLA.
//
// RETRY-LEADS:
// - Koi nahi. Whitelisted sroton par Rukbanur Rahman ke May 2026+ ke seat-works ya negatives ka koi candidate page nahi mila
//   (9 alag search queries: works, development, inauguration, negatives/FIR, telegraphindia/HT/IE-targeted).
//   Khul na sakne wala koi page bhi nahi aaya (sirf TOI page khola gaya, wo kaamyaab raha).
//
// NATIJA: 0 entries. Karyakaal sirf ~5.5 mahine ka hai; whitelisted media me abhi tak koi vyaktigat lokarpan/shilanyas,
// manzoori ya negative (FIR/janch/nyayik vikas) report nahi hua. Khali profile bilkul theek hai.
// ============================================================

// wb4 — rukbanur-rahman (Palashipara, Nadia, TMC)
westbengalWorks['rukbanur-rahman'] = [];


// MLA pehchan: Alifa Ahmed — AITC/TMC, seat Kaliganj (constituency no. 80, Nadia jila,
// Krishnanagar Lok Sabha constituency). 2026 ke Vidhansabha chunav me 89,292 votes ke
// saath jeeti, BJP ke Bapan Ghosh (79,120 votes) ko 10,172 votes se haraya (sources:
// Indian Express, Times of India, ABP Live election results pages; Wikipedia
// "Kaliganj Assembly constituency" page: Incumbent Alifa Ahmed, AITC, Elected year
// 2026). Swargiya MLA Nasiruddin Ahmed ki beti hain; pehle June 2025 ke by-election me
// bhi yehi seat jeeti thi (50,049 votes se, BJP ke Ashish Ghosh ko harakar). Seat se
// pakka: Kaliganj No. 80 Nadia me hai aur Alifa Ahmed dono (2025 bypoll + 2026 general)
// chunavon me isi seat se jeeti hain. Karyakaal: SIRF May 2026+ (18vi Vidhansabha
// 4 May 2026 ko bani; isse pehle ka kuch nahi). Period '2026-2031'.

// REJECT-LOG (har lead jo entry nahi bana):
// 1. Times of India (whitelisted) "Tamanna murder: Charges framed against 24"
//    (Sep 2026): Nadia court ne 9-saal ki Tamanna Khatun (Kaliganj) ki hatya ke case
//    me sabhi 24 aaropiyon ke khilaf aarop tay kiye; supplementary chargesheet
//    (July 2026) BNS, Arms Act Sec 25, Explosive Substances Act Sec 3/4 ke tahat.
//    Prime accused Dayal Sheikh (tatkalin local TMC booth committee president) hai.
//    **MLA Alifa Ahmed ka naam FIR-aaropi/chargesheet me KAHI NAHI** — sirf TMC
//    karyakartaaon ki victory rally ke dauran bomb feke jaane ki baat hai. MLA khud
//    aaropi NAHI = negative NAHI. URL:
//    https://timesofindia.indiatimes.com/city/kolkata/tamanna-murder-charges-framed-against-24/articleshow/133972643.cms
// 2. The Statesman (established media, non-whitelisted) 2026-07-22:
//    "Police file supplementary charge sheet against all 24 accused in Tamanna
//    murder case" — chargesheet No. 470/26 dated 21 July 2026, CJM Krishnagar ke
//    saamne, Kaliganj P.S. Case No. 534/25 (23 June 2025) me. Sabhi 24 aaropi
//    giraftar; Special Public Prosecutor Bivas Chatterjee. **MLA ka naam aaropi
//    list me nahi** — isliye negative nahi bana. URL:
//    https://www.thestatesman.com/cities/kolkata/police-file-supplementary-charge-sheet-against-all-24-accused-in-tamanna-murder-case-1503619550.html
// 3. ETV Bharat (PTI copy, 2026-06-14): "Mamata Rejigs TMC's Youth, Women Wings" —
//    party ne Kolkata Dakshin MP Mala Roy ki jagah Alifa Ahmed (TMC MLA, Kaliganj,
//    Nadia) ko Trinamool Mahila Congress ka president banaya. **Party ka sangathanik
//    faisla hai, seat work nahi** (vibhag/party ka faisla = REJECT). URL:
//    https://www.etvbharat.com/en/state/mamata-rejigs-tmc-youth-women-wings-removes-saayoni-mala-roy-from-key-positions-enn26061400836
// 4. The Telegraph (India, whitelisted) May 2025: "Trinamul Congress announces Alifa
//    Ahmed as Kaliganj Assembly nominee for upcoming bypoll" — unki prathmiktayein
//    (Plassey tourism, Jalangi nadi par overbridge, English-medium school, stadium)
//    **sirf ghoshna/vaade, pre-term** (May 2026 se pehle) = REJECT. URL:
//    https://www.telegraphindia.com/amp/west-bengal/trinamul-congress-announces-alifa-ahmed-as-kaliganj-assembly-nominee-for-upcoming-bypoll-prnt/cid/2103013
// 5. The Hindu (whitelisted) May 27, 2025: bypoll ke liye ummidwar ka elaan — pre-term
//    chunav coverage, koi work nahi = REJECT. URL:
//    https://www.thehindu.com/news/national/west-bengal/trinamool-announces-alifa-ahmed-as-candidate-for-bypoll/article69625470.ece
// 6. ThePrint (PTI feed) July 2, 2025: "TMC's Alifa Ahmed sworn in as MLA" (2025
//    bypoll ke baad shapath) — **pre-term** = REJECT. URL:
//    https://theprint.in/india/tmcs-alifa-ahmed-sworn-in-as-mla-says-will-visit-family-of-girl-killed-in-blast-on-counting-day/2677552/
// 7. Indian Express / Times of India / ABP Live election-results pages (May 2026):
//    Kaliganj chunav ka nateeja (Alifa Ahmed AITC winner) — chunav coverage, koi
//    seat work nahi = REJECT. URLs:
//    https://indianexpress.com/elections/kaliganj-election-result-live-updates-west-bengal-assembly-election-results-winner-10670217/
//    https://timesofindia.indiatimes.com/elections/assembly-elections/west-bengal/constituency-show/kaliganj
//    https://news.abplive.com/elections/kaliganj-election-result-2026-live-updates-constituency-vote-counting-winner-loser-tmc-bjp-congress-west-bengal-assembly-election-1840180
// 8. menafn.com (2026-06-26): "Suvendu Adhikari Govt Changes Public Prosecutor For
//    Tamanna Khatun Murder Case" — 2026 me nayi BJP sarkar ne case me naya Special
//    PP lagaya; ye sarkar ka faisla hai, **MLA khud isme aaropi ya paksh nahi**.
//    Negative nahi bana. (Tamanna ki maa Sabina Iyasmin Sekh 2026 me CPI(M)
//    ummidwar ke roop me Kaliganj se khadi hui aur Alifa se haari — ye chunav
//    tathya hai, MLA ke khilaf koi aarop nahi.) URL:
//    https://menafn.com/1111315064/Suvendu-Adhikari-Govt-Changes-Public-Prosecutor-For-Tamanna-Khatun-Murder-Case-On-Mothers-Appeal
// 9. infoexchange.live bypoll campaign analysis (pre-term, non-whitelisted) —
//    road/drainage/school ki maange voters ne rakhi thi; MLA ka koi lokarpan/
//    shilanyas/GO nahi. REJECT. URL:
//    https://infoexchange.live/west-bengal/development-over-division-tmcs-alifa-ahmed-aims-for-kaliganj-bypoll-clean-sweep-challenging-bjps-polarisation-strategy
// 10. Whitelisted media (The Hindu, Indian Express, NDTV, India Today, Times of
//    India, The Telegraph, newindianexpress, PTI-copy outlets) me May 2026+ ke
//    koi seat-works — koi lokarpan, shilanyas, BEUP fund se sanrachna, GO-backed
//    swikriti, itemized sanction list, ya Vidhansabha-maang ka dastaveji nateeja —
//    nahi mila. Tamanna blast case me MLA khud aaropi nahi, isliye May 2026+ ke
//    nyayik vikas (supplementary chargesheet July 2026, charges framed Sep 2026)
//    bhi uske liye negative nahi bane. (Karyakaal sirf 5.5 mahine ka hai — khali
//    profile theek hai.)

// RETRY-LEADs: koi nahi. Sabhi candidate pages (TOI, ETV Bharat/PTI, The Statesman)
// browser.open se poori tarah khul gaye; koi 403 ya khul na sakne wala qualifying
// page nahi mila.

// wb4 — alifa-ahmed (Kaliganj, Nadia, TMC)
westbengalWorks['alifa-ahmed'] = [];


// MLA pehchan — santanu-dey: NAAM Santanu Dey, PARTY BJP, SEAT Nakashipara (Nadia jila,
// constituency no. 81). 18vi Paschim Bangal Vidhansabha me 4 May 2026 ko pad grahan;
// poorv-vidhayak Kallol Khan (AITC). Karyakaal SIRF May 2026 se — pehchan Wikipedia
// (https://en.wikipedia.org/wiki/Santanu_Dey) + myneta.info halafnama (candidate_id=2269) +
// Indian Express election results se pakki. Spelling note: kai sources me "Shantanu Dey"
// bhi likha hai — wahi vyakti, Nakashipara, BJP.

// REJECT-LOG (sare leads reject, entry nahi bani):
// 1. "Former Trinamool MLA Sanat Dey arrested on extortion, land-grab charges"
//    (menafn.com/1111509912, thehawk.in, 08 Aug 2026) — REJECT: galat vyakti. Ye "Sanat Dey"
//    hai (Trinamool ke poorv vidhayak), hamare MLA "Santanu Dey" (BJP, Nakashipara) nahi.
//    Naam milta-julta hone ke bawajood party aur spelling alag; seat-bhi match nahi hui.
// 2. Kolkata Chorbagan Durga Puja stampede me giraftar "Santanu Dubey"
//    (lokmattimes.com, 18 Oct 2026) — REJECT: surname alag (Dubey vs Dey), puja committee
//    ke vice-president the, vidhayak nahi.
// 3. Nakashipara shootout 15 injured (lokmattimes.com) — REJECT: purani khabar (2023 ki
//    panchayat-chunav se judi), karyakaal se pehle; MLA ka naam kahin nahi.
// 4. Bengal violence June 2022, Nakashipara me shops vandalised (Economic Times) —
//    REJECT: pre-term (2022), MLA se sambandh nahi.
// 5. PM Modi NH-34 Ranaghat/Nadia highway projects (Dec 2025-Jan 2026, pib/newindiasamachar)
//    — REJECT: pre-term kendriya pariyojna; MLA ki vyaktigat bhoomika nahi.
// 6. Election expenditure ADR report (adrindia.org) — MLA ka chunav kharch data — REJECT:
//    works/negative entry nahi, chunav-tathya.
// 7. Whitelisted outlets (The Hindu, Indian Express, HT, NDTV, India Today, ToI, The Telegraph,
//    PTI via outlets) par 6 alag-alag search queries me May 2026+ ke kisi bhi seat-work,
//    lokarpan, shilanyas, BEUP swikriti ya assembly-maang-nateeje ka koi zikr nahi mila.
// 8. myneta.info halafnama (2026): "No criminal cases" — REJECT: halafnama akele negative nahi.

// RETRY-LEADs: koi nahi. (Koi whitelisted candidate page mila hi nahi jise kholna padta.)

// wb4 — santanu-dey (Nakashipara, Nadia, BJP)
westbengalWorks['santanu-dey'] = [];


// MLA pehchan: Jeber Sekh (spelling variants: Jaber Sekh, Jeber Sheikh) — TMC, seat Chapra
// (constituency no. 82, Nadia jila, Krishnanagar Lok Sabha). 2026 ke Vidhansabha chunav me
// 97,085 votes ke saath BJP ke Saikat Sarkar ko 30,780 votes se haraya (sources: The Hindu,
// Indian Express, India Today, News18, Times of India election results pages; Wikipedia
// constituency page "Incumbent: Jeber Sekh, Party: Trinamool Congress, Elected year 2026").
// Karyakaal: May 2026+ (18vi Vidhansabha 4 May 2026 ko bani). Period '2026-2031'.

// REJECT-LOG (har lead jo entry nahi bana):
// 1. timesofindia.indiatimes.com live blog "Chapra Election Result 2026" (May 4, 2026):
//    chunav ka nateeja, karyakaal se pehle ki coverage; koi work nahi. URL:
//    https://timesofindia.indiatimes.com/elections/assembly-elections/west-bengal/chapra-assembly-election-results-2026-live-updates-tmcs-jeber-sekh-bjps-saikat-sarkar-and-congress-rahidul-mandal-are-contesting-for-this-seat-among-others/liveblog/130687226.cms
// 2. static.aitcofficial.org C-7 form "C7-Jaber-Sekh.pdf" (AITC disclosure, April 2026):
//    halafname me darj purana pending case (G.R. Case No. 769/2018, P.S. Case No. 82/2018,
//    Chapra Police Station; IPC 341/323/325/506/34; charges framed 24.06.2024). Party ka
//    khud ka disclosure document hai (whitelisted media nahi), May 2026+ me koi nayayik
//    vikas nahi; purana pending mamla akele negative NAHI. URL:
//    https://static.aitcofficial.org/uploads/2026/04/C7-Jaber-Sekh.pdf
// 3. news.webindia123.com (ANI copy, 29 April 2026) polling-day hinsa aarop:
//    BJP candidate Saikat Sarkar ka aarop tha ki "TMC candidate and his goon Mufizul" ne
//    polling agent par hamla kiya. (a) Chunav se pehle ki ghatna (April 2026), (b) MLA ka
//    naam FIR-aaropi column me nahi, sirf virodhi candidate ka aarop, (c) non-whitelisted
//    outlet. Shikayat lekin FIR-aaropi naam NAHI = NAHI. URLs:
//    https://news.webindia123.com/news/Articles/India/20260429/4444976.html
//    https://news.webindia123.com/news/Articles/India/20260429/4444867.html
// 4. hummingbirdnews.in "Mahua Moitra reshuffles party portfolios" (Feb 2024): pre-term,
//    non-whitelisted; Jeber Sheikh ki TMC me wapsi ka zikr hai, koi karyakaal work nahi.
// 5. en.wikipedia.org "Jeber Sekh" page: identity reference ke liye use; (page ke career
//    section me party-name inconsistency bhi hai — facts ke liye nahi liya gaya).
// 6. news18.com "Bengal Farmer Attempts Suicide" (Oct 2025): alag vyakti (Cooch Behar),
//    MLA se sambandh nahi.
// 7. myneta.info affidavit page (candidate_id=2756): halafname data, whitelisted media nahi.
// 8. Whitelisted media (The Hindu, Indian Express, NDTV, India Today, TOI, Telegraph,
//    newindianexpress, PTI-copy outlets) me May 2026+ ke koi seat-works, lokarpan,
//    shilanyas, GO-backed swikriti ya Vidhansabha-maang ka dastaveji nateeja nahi mila;
//    koi FIR/chargesheet/janch ya May 2026+ nyayik vikas ka samachar bhi nahi mila.
//    (Karyakaal sirf 5.5 mahine ka hai — khali profile theek hai.)

// RETRY-LEADs: koi nahi. Koi whitelisted source page aisa nahi mila jisme May 2026+ ke
// qualifying facts hone ki sambhavna ho aur jo khul na saka ho. Sabhi candidate leads
// snippets ki soorat me hi pre-term ya non-qualifying the.

// wb4 — jeber-sekh (Chapra, Nadia, TMC)
westbengalWorks['jeber-sekh'] = [];


// ============================================================================
// MLA PEHCHAN — wb4 worker tarak-nath-chatterjee
// ============================================================================
// Naam: Tarak Nath Chatterjee (media me kabhi "Taraknath Chatterjee" bhi likha
// gaya hai — dono wahi vyakti hain, BJP ke 5vi candidate list (April 2026)
// aur result coverage me seat "Krishnanagar Uttar" se same naam aata hai)
// Seat: Krishnanagar Uttar — Assembly constituency no. 83, Nadia district,
// Krishnanagar municipality + Krishnanagar I block ki 5 GPs
// (Bhandar Khola, Bhimpur, Asannagar, Dogachhi, Pora Gachha)
// Party: BJP | Karyakaal: 4 May 2026 se (18vi Vidhansabha) | Predecessor: Mukul Roy
// Election result: 133,211 votes, AITC ke Somnath Dutta (54,850) par 78,361 votes se jeet
// Tasdeek srot: Indian Express winner page, Business Today, Times of India
// constituency page, ECI results (Wikipedia par udhrit) — sab me naam + seat match
// NOTE: "Tarak Nath Chattopadhyay" naam ka ek KMC councillor (Central Kolkata,
// Charnock hospital press note Feb 2026) ALAG vyakti hai — is MLA se confuse na karo.
// ============================================================================

// ============================================================================
// REJECT-LOG — har reject lead + reason + URL
// ============================================================================

// R1. REJECT (negative ke roop me bhi, kaam ke roop me bhi):
// Telegraph India (whitelisted), 06.04.26 — "BJP workers lock Krishnanagar office
// over Taraknath Chatterjee ticket". Ticket ghoshna (April 2026, 5vi list) ke baad
// BJP karyakartaon ne Krishnanagar district office me virodh kia, "multiple
// corruption cases" me shamil hone aur grassroots se katne ka aarop lagaya.
// REJECT reason: (a) PRE-TERM ghatna hai — April 2026, karyakaal 4 May 2026 se;
// (b) sirf party karyakartaon ke aarop hain, koi FIR/chargesheet/janch nahi,
// isliye negative ke liye "Shikayat lekin FIR-aaropi column me naam NAHI = NAHI"
// wala niyam lagta hai; (c) pre-term mamla bina May 2026+ vikas ke swikar nahi.
// URL: https://www.telegraphindia.com/amp/west-bengal/bjp-workers-and-supporters-protest-over-candidate-nomination-for-nadias-krishnanagar-prnt/cid/2154786
// NOTE: ye page browser.open par 403 de gaya — dekho RETRY-LEADS.

// R2. REJECT (kaam nahi): Times of India, April 2026 — "Candidate choices spark
// stir within BJP" — ticket selection par party virodh ki khabar. REJECT reason:
// pre-term party-vivad, "Party karyawahi akele negative NAHI" aur koi seat-work nahi.
// URL: https://timesofindia.indiatimes.com/city/kolkata/candidate-choices-spark-stir-within-bjp/articleshow/130046188.cms

// R3. REJECT (kaam nahi): NDTV Profit / webindia123 / Asianet Newsable / Business
// Standard, April 2026 — BJP 5vi candidate list (Taraknath Chatterjee ko Krishnanagar
// Uttar se ticket). REJECT reason: pre-term ghoshna, seat-work nahi.

// R4. REJECT (kaam nahi): Business Today / ABP Live / moneycontrol / TOI,
// 4-5 May 2026 — election result coverage (jeet ki khabar). REJECT reason: chunav
// jeet koi kaam entry nahi.

// R5. REJECT (negative nahi): Indian Express Krishnanagar Uttar candidate page — MLA
// ke 2026 halafname me "Cases: 3" darj hai. REJECT reason: "Halafname ke purane
// pending mamle akele negative NAHI" — May 2026+ me inpar koi nyayik vikas
// (adalat ka aadesh/notice/FIR/chargesheet) kisi whitelisted srot me nahi mila.
// URL: https://indianexpress.com/elections/west-bengal-assembly-election/krishnanagar-uttar-constituency/

// R6. REJECT (galat vyakti): Charnock Lohia Hospital press release (26 Feb 2026,
// vastabkatha.com / forpressrelease / pninews) me "Tarak Nath Chattopadhyay,
// Councillor" ka naam — ye KMC councillor hai, is MLA se alag vyakti. Pre-term bhi hai.
// URL: https://vastabkatha.com/charnock-lohia-hospital-inaugurated-as-bengals-first-private-heritage-super-specialty-hospital-in-central-kolkata/

// R7. NOTED — is vyakti ke May 2026+ ke koi bhi seat-work (lokarpan, shilanyas,
// fund-swikriti, vidhansabha maang ka nateeja, BEUP kaam) whitelisted media me
// nahi mila. 8 rounds ke searches (English + Bengali + news vertical + outlet-
// specific queries) par media footprint sirf ticket/result/chunav coverage tak hai.
// Karyakaal 19 Oct 2026 tak ~5.5 mahine purana hai — khali profile yatharth hai,
// aankde banaye nahi jayenge.

// ============================================================================
// RETRY-LEADS — khul na sake pages (403), entry nahi, future worker dobara try kare
// ============================================================================
// RT1. Telegraph India protest article (R1) — browser.open par HTTP 403 aaya.
// Dobara khulne par bhi entry NAHI banegi (pre-term + aarop-matrav), sirf reject-log
// ki tasdeek ke liye kaam aayega.
// URL: https://www.telegraphindia.com/amp/west-bengal/bjp-workers-and-supporters-protest-over-candidate-nomination-for-nadias-krishnanagar-prnt/cid/2154786

// ============================================================================
// FINAL — entries: 0 (works), 0 (negatives)
// ============================================================================
// wb4 — tarak-nath-chatterjee (Krishnanagar Uttar, Nadia, BJP)
westbengalWorks['tarak-nath-chatterjee'] = [];


// srutisekhar-goswami — 0 works + 0 negatives (West Bengal, Nabadwip, Nadia)
// Pehchan pakki: Srutisekhar Goswami (kuch outlets me spelling "Shruti Shekhar
// Goswami" / "Sruti Sekhar Goswami" / "Srutisekhar Goswami"), Nabadwip Assembly
// constituency (No. 84, Nadia jila), BJP. 2026 jeet: 108,631 votes (49.79%),
// Pundarikakshya Saha (AITC, 87,187) ko 21,444 maton se haraya; BJP gain from
// AITC. Office assumed: 4 May 2026 (18vi Vidhansabha). Profile: spiritual
// speaker/advocate, MA Political Science (2007), LLB (2002), age 53, assets
// Rs 65,87,612 (halafnama, 2026).
// Karyakaal: May 2026+ (period '2026-2031'). Usse pehle ki koi entry allowed NAHI.
// Naam-trap notes: (1) Zubeen Garg death case me giraftar "Shekhar Jyoti Goswami"
// Assam ka musician hai — Nabadwip MLA se koi sambandh nahi; (2) 2022 me
// suspend hue "Mihir Goswami" Natabari ke MLA hain — alag vyakti; (3) Humayun
// Kabir (Beldanga 'Babri Masjid' foundation) suspended TMC MLA, alag vyakti.
// Whitelist sources (TOI, IE, HT/PTI, Telegraph, Hindu, NDTV, India Today,
// newindianexpress) par May 2026+ me inki koi seat-specific vyaktigat bhoomika
// wali khabar (lokarpan/shilanyas with fund, Vidhan Sabha prashn ka dastaveji
// nateeja/ashwasan, GO-backed swikriti, itemized sanction list) NAHI mili.
// Sabse mazboot lead (01.10.26 Mayapur development meeting, TOI) ka page
// KHOLKAR PADHA gaya — MLA sirf mantri ki meeting me maujood the, vyaktigat
// bhoomika/fund/shilanyas kuch nahi. Karyakaal sirf ~5.5 mahine ka hai, isliye
// khaali profile bilkul theek hai.

westbengalWorks['srutisekhar-goswami'] = [];

// REJECT-LOG (srutisekhar-goswami, mined 2026-10-19)
// 1. Times of India — "Bengal govt plans major Mayapur development project"
//    (01.10.26, page KHOLKAR PADHA): Urban Development & Municipal Affairs
//    minister Agnimitra Paul ne ISKCON Mayapur me high-level administrative
//    meeting ki; 700-800 acres Mayapur pilgrimage-zone makeover + Nabadwip ko
//    state 'smart city' initiative ke 5 shahron me shamil karne ki GHOSHNA.
//    "The meeting was attended by Nabadwip MLA" — MLA ki bhoomika sirf maujoodgi
//    tak. REJECT (dusre neta/mantri ke karyakram me maujoodgi + vibhag ka rajya
//    faisla/ghoshna akeli; koi vyaktigat lokarpan/shilanyas, fund disclosure,
//    ya GO-backed swikriti nahi).
//    URL: https://timesofindia.indiatimes.com/city/kolkata/bengal-govt-plans-major-mayapur-development-project/articleshow/134622322.cms
// 2. akincana.net — "West Bengal Plans 800-Acre International Pilgrimage Zone
//    Around ISKCON Mayapur..." (02.10.26, Sangbad Pratidin ka hawala):
//    meeting me "Nabadwip MLA Sruti Sekhar Goswami" maujood the. REJECT
//    (whitelist ke bahar ka source + upar #1 wali hi khabar, maujoodgi akeli).
//    URL: https://akincana.net/2026/10/02/west-bengal-plans-800-acre-international-pilgrimage-zone-around-iskcon-mayapur-names-nabadwip-a-smart-city/
// 3. Hindustan Times (PTI) — "In bitter Bengal poll battle, gestures of
//    political warmth stand out in Nadia, Kolkata" (29.04.26): polling day par
//    Goswami TMC workers ke camp me chai pe baithkar sauhaard dikha rahe the.
//    REJECT (pre-May-2026 election-day khabar; koi kaam nahi).
//    URL: https://www.hindustantimes.com/india-news/in-bitter-bengal-poll-battle-gesture-of-political-warmth-stands-out-in-nadia-kolkata-101777472847817.html
// 4. Indian Express — "Nisith, Roopa Ganguly among 4 former MPs in BJP's second
//    Bengal list" (Feb 2026): "Spiritual leaders Shruti Shekhar Goswami will
//    contest from Nabadwip". REJECT (pre-term candidate announcement).
//    URL: https://indianexpress.com/article/cities/kolkata/3-former-mps-roopa-ganguly-nisith-paramanik-arjin-singh-find-place-in-bjps-second-bengal-list-10591005/
// 5. TOI/IE/BusinessToday/Oneindia/Loksatta Nabadwip election-results pages
//    (May 2026): jeet ke aankde (108,631 votes, margin 21,444) — koi kaam nahi.
//    REJECT (chunav-nateeja stories, works nahi).
// 6. bengalinfo.com — PM Modi dwara Paschimbanga Divas par Nabadwip-Puri rail
//    service ka udghatan + 300-bed railway hospital ka shilanyas: REJECT
//    (whitelist ke bahar ka source + PM/railway ka karyakram; MLA ki vyaktigat
//    bhoomika ka koi zikr nahi).
// 7. aitcofficial.org — "Developmental activities taken up in Nadia" (party
//    site): Nadia ke purane rajya-kaam (hospital, college, Nabadwip stadium
//    renovation aadi) — REJECT (party ka apna prachar page, whitelist ke bahar;
//    rajya faisle; MLA Goswami ka koi role darj nahi; adhiktar pre-term).
// 8. Budget 2026-27 me MLA-LAD Rs 70 lakh se badhkar Rs 1 crore (FM Swapan
//    Dasgupta): REJECT (rajya budget ghoshna; kisi srot ne ise Goswami ke kaam
//    se nahi joda; srot spasht BEUP kahe bina BEUP fund entry nahi ban sakti —
//    yahan entry hi nahi bani).
// 9. news.webindia123.com / northeastscoop.in / english.newsnationtv.com /
//    indiatodayne.in — "Zubeen Garg death probe: CID arrest musician Shekhar
//    Goswami": NAAM-TRAP REJECT — ye Shekhar Jyoti Goswami Assam ke musician
//    hain, Nabadwip MLA Srutisekhar Goswami se koi sambandh nahi.
// 10. Indian Express/Economic Times (2022) — "Two BJP MLAs suspended for
//     disrupting Governor's speech" (Sudip Mukhopadhyay + Mihir Goswami):
//     NAAM-TRAP REJECT — Mihir Goswami Natabari ke MLA hain, alag vyakti, aur
//     2022 pre-term hai.
//
// NEGATIVES: myneta.info (2026 halafnama — whitelist source NAHI, sirf context
// ke liye dekha) me 1 pending case darj hai: Nabadwip PS Case no-350/2017,
// G.R. Case No-340/2017, Ld Judicial Magistrate at Nabadwip (Nadia) — IPC
// 147, 148, 149, 447, 323, 325, 353, 332, 427, 506, 34 + Sec.3 PDPP Act;
// charges framed: No; koi conviction nahi. Mamla pre-term (2017) ka hai, aur
// kisi whitelist source par May 2026+ me iska koi nyayik vikas (adalat ka
// aadesh/notice, chargesheet, ya jancho ka naya kadam) NAHI mila. Halafname ke
// purane pending mamle akele negative NAHI bante — isliye koi negative entry
// nahi banayi. Koi established media report nahi jisme MLA khud FIR-aaropi ho
// (May 2026+), koi chunav-yachika ya party-karyawahi ka mamla bhi nahi mila.
//
// RETRY-LEADS (parent/live-browser ke liye): KOI NAHI — saare whitelisted
// candidate pages kholkar padhe gaye; koi 403/unopenable page nahi mila.
// Sabse mazboot lead (#1, TOI Mayapur meeting) bhi conclusively reject hui
// (maujoodgi akeli). Agle mining round me "Srutisekhar Goswami" + Nabadwip +
// inauguration/foundation/sanction/BEUP ki nayi khabrein milein to dobara
// check karo; Sangbad Pratidin/Anandabazar Patrika (whitelist ke bahar) par
// chhapi kisi Nabadwip seat-work ki khabar ka whitelisted-outlet version mile
// to valid entry ban sakti hai.


// ============================================================================
// MLA PEHCHAN (seat se pakka kiya gaya)
// ----------------------------------------------------------------------------
// MLA: Sadhan Ghosh | Party: BJP | Seat: Krishnanagar Dakshin (Constituency No.
// 85), Nadia district, West Bengal | Lok Sabha: Krishnanagar (MP Mahua Moitra)
// Karyakaal: 18vi Vidhansabha — 4 May 2026 ko chune gaye (matganana 4 May 2026);
// BJP candidate list (Economic Times, 2026) me "Krishnanagar Dakshin: Sadhan
// Ghosh" darj; Indian Express/Business Today parinaam pages me "Sadhan Ghosh,
// BJP, Winner" darj (102,862 votes; Ujjal Biswas/AITC 75,061; antar 27,801).
// Seat-se-pehchan confirm: Krishnanagar Dakshin = Bhat Jungla, Chak Dilnagar,
// Daypara, Dignagar, Ruipukur gram panchayats (Krishnanagar I block) + poora
// Krishnanagar II block (Wikipedia delimitation entry). Worker ka seat-anchor:
// "Krishnanagar Dakshin".
// Period rule: karyakaal May 2026+; period field hamesha '2026-2031'.
// ============================================================================

// ============================================================================
// REJECT-LOG — har reject lead + reason + URL
// ============================================================================
// R1. The Telegraph (India) — "New paint hides shrine's terracotta artistry,
//     357-year-old Nadia temple painted against conservation norms" — POORA PAGE
//     browser.open se kholkar padha. Dignagar (seat ka GP) ke Raghabeswar Mandir
//     par niyam-virudh paint; purohit Manik Mukherjee ne dawa kiya ki local BJP
//     MLA Sadhan Ghosh ne SDO se anumati dilayi — lekin KOI dastavej nahi diya;
//     MLA ka seedha inkaar darj: "I have no such authority. The priest came to
//     me, but I told him I am not authorised to issue such permission"; SDO
//     Mouli Sanyal bhi anumati se anjaan. REJECT (negative criteria fail): MLA
//     khud aaropi nahi; koi FIR/chargesheet/janch/adalat-aadesh MLA ke khilaf
//     report nahi hua; sirf purohit ka bina-saboot dawa + MLA ka inkaar.
//     URL: https://www.telegraphindia.com/west-bengal/new-paint-hides-shrines-terracotta-artistry-357-year-old-nadia-temple-painted-against-conservation-norms-prnt/cid/2173605
//
// R2. The Hindu — "Royal challenge for Mahua as Trinamool, BJP clash in
//     Krishnanagar, but CPI(M) can tilt scales" — Sadhan Ghosh ka quote "vice-
//     president of the Nadia unit of BJP" ke roop me; 2024 Lok Sabha coverage,
//     PRE-TERM. REJECT: karyakaal (May 2026+) se bahar, koi seat-work nahi.
//     URL: https://www.thehindu.com/elections/lok-sabha/royal-challenge-for-mahua-as-trinamool-bjp-clash-in-krishnanagar-but-cpim-can-tilt-scales/article68141946.ece
//
// R3. courtkutchehry.com / indiankanoon.org / Business Standard — "Sadhan
//     Ghosh vs State of West Bengal" criminal appeal cases (2011-2016 ke
//     faisle, IPC 302/34). REJECT: naam milta-julta hai lekin MLA se pehchan
//     ka koi link established media me nahi; pre-term mamle; halafname ke
//     purane pending mamle akele negative NAHI.
//     URLs: https://www.courtkutchehry.com/judgements/873969/sadhan-ghosh-vs-the-state-of-west-bengal/ ,
//     https://indiankanoon.org/doc/96093216/ ,
//     https://www.business-standard.com/amp/article/pti-stories/2-get-life-term-for-rape-murder-of-minor-115042100974_1.html
//
// R4. Indian Express Krishnanagar Dakshin candidate page — affidavit snippet:
//     Sadhan Ghosh, assets ~Rs 2.42 crore, cases: 1, age 49, 12th Pass.
//     REJECT (negative): halafname ka purana pending mamla akele negative nahi;
//     May 2026+ me is mamle ka koi nyayik vikas (aadesh/notice) reported nahi.
//     URL: https://indianexpress.com/elections/west-bengal-assembly-election/krishnanagar-dakshin-constituency/
//
// R5. Election-coverage pages (bharathorizon.com x2, news24online.com,
//     businesstoday.in, news.abplive.com, indiatvnews.com topic page,
//     zeenews.india.com live blog, wionews.com, newsable.asianetnews.com) —
//     sab sirf chunav parinam/umat-prachar coverage (May 2026). REJECT: na koi
//     bhautik karya, na negative, na sanction.
//
// R6. firsttender.com — "construction of cement concrete road from the house of
//     sadhan ghosh to the house of vola ghosh ... Murshidabad" — Murshidabad
//     jile ka 15th CFC tender (July 2025, pre-term). REJECT: doosra jila +
//     MLA-se-pehchan ka koi link nahi.
//     URL: https://www.firsttender.com/tenders-detail-250716471610.html
//
// R7. PM Modi project launches (news.webindia123.com, ianslive.in,
//     thenewsmill.com, newsmakeinindia.com, aryanage.com, lokmattimes.com,
//     ommcomnews.com) — PM ke Krishnanagar/Ranaghat karyakram (NH-34, power,
//     rail). REJECT: 2024 (pre-term) ya Dec 2025 (pre-term); MLA ka naam tak
//     page me nahi; "dusre neta ke karyakram me maujoodgi" bhi nahi mili.
//
// R8. lokmattimes.com (IANS) — "Municipal chairman in Bengal's Nadia detained
//     over alleged illegal stocking of relief materials" (30 May 2026) aur
//     "ECI cancels nomination of Trinamool candidate from Krishnanagar (Uttar)"
//     (10 April 2026). REJECT: dono me MLA Sadhan Ghosh ka naam hi nahi;
//     pehli khabar Nabadwip seat ki, doosri Krishnanagar Uttar ki.
//
// R9. hindustantimes.com — Lok Sabha candidate page aur 2024 Krishnanagar
//     polarisation campaign piece. REJECT: pre-term; koi seat-work nahi.
//
// R10. myneta.info westbengal2021 candidate page (candidate_id=137). REJECT:
//     2021 ka purana record; is MLA ke May 2026+ karyakaal se sambandhit nahi.
//
// R11. Search leads (BEUP/fund/sanction, shilanyas/lokarpan, Vidhansabha
//     demand, Dignagar works) par kai round search kiye — whitelisted sources
//     me Sadhan Ghosh ke May 2026+ ke kisi lokarpan/shilanyas, fund sanction,
//     BEUP kharch, ya GO-backed swikriti ka koi ullekh nahi mila. "Ghoshit
//     nahi" = entry nahi. Anumaan lagana manaa hai.
//
// BEUP NOTE: Rs 1 crore/seat/varsh (June 2026 se) rule jodna tabhi hota jab
//     srot spasht BEUP kahe — is MLA ke liye koi srot BEUP nahi kehta.
// ============================================================================

// RETRY-LEADS: koi nahi. Ekmatra gambheer lead (The Telegraph temple story)
// poori tarah khulkar padha gaya; baaki sab leads ya to khul gaye ya wazeh
// roop se irrelevant/theen. (Telegraph ke print page par prakashan-tithi
// nahi dikhi — reject-log ke liye zaroori nahi thi.)

// wb4 — sadhan-ghosh (Krishnanagar Dakshin, Nadia, BJP)
westbengalWorks['sadhan-ghosh'] = [];


// MLA pehchan (seat se pakka ki gayi):
// - Naam: Swapan Kumar Das; party: BJP; seat: Santipur (seat no. 86), Nadia jila.
// - Karyakaal: 18vi West Bengal Vidhansabha me 4 May 2026 se MLA (Indian Express
//   Santipur result page; Wikipedia "Swapan Kumar Das" — assumed office 4 May 2026,
//   preceded by Braja Kishore Goswami).
// - Santipur Ranaghat (SC) Lok Sabha seat ka hissa hai — MP: Jagannath Sarkar (BJP).
// - Dhyan: Santipur general seat hai (SC reserved nahi); handloom town hai.
// - Ek halafname-pending mamla (1 case) Indian Express candidate list me darj hai,
//   lekin ye akele negative NAHI banta (rules).

// REJECT-LOG (har reject lead + reason + URL):
// 1. Bharathorizon piece "BJP's Swapan Kumar Das Wins Santipur Seat" —
//    https://bharathorizon.com/politics/national-politics/bjps-swapan-kumar-das-wins-santipur-seat-in-west-bengal.html
//    REJECT: sirf chunav-jeet coverage; May 2026+ ka koi seat-work nahi.
// 2. ABP Live Santipur election result live page —
//    https://news.abplive.com/elections/santipur-election-result-2026-live-updates-constituency-vote-counting-winner-loser-tmc-bjp-congress-west-bengal-assembly-election-1840190
//    REJECT: chunav result; ABP Live whitelist me nahi; koi works nahi.
// 3. Times of India "Santipur Assembly" topic page —
//    https://timesofindia.indiatimes.com/topic/santipur-assembly
//    REJECT: sabhi items 2021 ya usse pehle ke hain (bypoll/election); 2026 ka koi item nahi.
// 4. TOI Santipur 2026 live updates blog —
//    https://timesofindia.indiatimes.com/elections/assembly-elections/west-bengal/santipur-assembly-election-results-2026-live-updates-tmcs-braja-kishore-goswami-bjps-swapan-kumar-das-and-congress-alok-chatterjee-are-contesting-for-this-seat-among-others/liveblog/130687243.cms
//    REJECT: keval chunav result coverage; works nahi.
// 5. The Statesman "MLA jeered at road inauguration ceremony" —
//    https://www.thestatesman.com/bengal/mla-jeered-at-road-inauguration-ceremony-1503559660.html
//    REJECT: galat vyakti — ye Palashipara (Nadia) ke TMC MLA Manik Bhattacharya ka mamla
//    hai; Swapan Kumar Das (Santipur, BJP) se sambandhit nahi.
// 6. PTI/via outlets: PM/Modi ke Nadia NH-34 projects (Rs 3,200 crore, Barajaguli-Krishnanagar)
//    coverage (Hindustan Times, TOI) —
//    https://www.hindustantimes.com/india-news/in-pm-s-absence-bengal-governor-launches-national-highway-projects-worth-rs-3-200-cr-101766234482392-amp.html
//    REJECT: kendriya/vibhag project; MLA ki vyaktigat bhoomika ya credit ka koi zikr nahi;
//    seat-specific kaam nahi (ye 2024/Dec-2025 ki news bhi hai, karyakaal se pehle).
// 7. The Statesman "'Nandigram number one priority'" — Suvendu Adhikari CM announcement —
//    https://www.thestatesman.com/cities/kolkata/nandigram-number-one-priority-suvendu-as-welfare-push-gathers-pace-1503633132.html
//    REJECT: CM ke rajya-stariya ghoshna; Santipur seat se sambandh nahi.
// 8. Firsttender.com Santipur tenders (garer muchipara lane, 36.84 Lac, 28 Oct 2026) —
//    http://www.firsttender.com/city/santipur-tenders1.html
//    REJECT: municipal tender listing; MLA ki bhoomika/fund-source ka zikr nahi; BEUP
//    attribution nahi; sirf tender = media/dastavej entry ka aadhaar nahi.
// 9. AITC official "Developmental activities taken up in Nadia" —
//    http://aitcofficial.org/developmental-activities-taken-up-in-nadia/
//    REJECT: purani (2011-18) rajya-sarkaar party list; karyakaal se pehle; MLA se sambandh nahi.
// 10. Indian Express Santipur constituency page (halafname data: "Swapan Kumar Das —
//     Cases 1, 62, Graduate Professional") —
//     https://indianexpress.com/elections/west-bengal-assembly-election/santipur-constituency/
//     REJECT as negative: halafname ke purane pending mamle akele negative nahi; is mamle
//     par May 2026+ ka koi nyayik vikas, FIR, ya chargesheet ki khabar nahi mili.
// 11. Indian Express result item "Santipur (West Bengal) Assembly Election Result 2026:
//     Swapan Kumar Das of BJP Wins" (5 May 2026) — REJECT: chunav jeet, works nahi.
// 12. Sabhi Swapan Dasgupta (Rashbehari MLA / finance minister) coverage —
//     indianexpress.com, telegraphindia.com, thestatesman.com items —
//     REJECT: galat vyakti (alag naam, alag seat Rashbehari); Santipur MLA se sambandh nahi.

// RETRY-LEADs (kholkar padhne yogya whitelisted page jisme entry ban sakti thi, lekin
// khula nahi ya poori tarah padha nahi gaya):
// - Koi nahi. Har khula whitelisted page upar REJECT-LOG me hai; koi candidate page
//   403 ya adhoora nahi raha. Toh retry queue khali hai.

// FINAL entries: khali. May 2026+ ke karyakaal me whitelisted sources par Santipur MLA
// Swapan Kumar Das ke liye koi VALID seat-work aur koi VALID negative nahi mila.
// BEUP srot-spasht attribution bhi kahi nahi mila.

// wb4 — swapan-kumar-das (Santipur, Nadia, BJP)
westbengalWorks['swapan-kumar-das'] = [];


// MLA PEHCHAN — seat se pakka kiya gaya:
// Naam: Partha Sarathi Chatterjee (Babu), Party: BJP, Seat: Ranaghat Uttar Paschim (Nadia, AC 87)
// 2026 me isi seat se jeete — Indian Express ke election results page par BJP winner ke roop me darj hain
// (https://indianexpress.com/elections/west-bengal-assembly-election/ranaghat-uttar-paschim-constituency/).
// MyNeta West Bengal 2026 affidavit (candidate_id=2410): umar 72, seat RANAGHAT UTTAR PASCHIM (NADIA), party BJP,
// criminal cases 0. Karyakaal 4 May 2026 se (18vi Vidhansabha), isliye period hamesha 2026-2031.

// REJECT LOG — har lead + reason + URL:
// 1. PM Modi dwara Ranaghat me NH-34 pariyojnao (Barajaguli-Krishnanagar 66.7 km + Barasat-Barajaguli 17.6 km,
//    Rs 3,200 crore) ka udghatan/shilanyas, Dec 2025 — kendra sarkar ka karyakram hai, MLA ka vyaktigat seat-work
//    nahi; upar se pre-term (May 2026 se pehle).
//    URL: https://newsonair.gov.in/prime-minister-launches-national-highway-projects-worth-around-rs-3200-cr-in-west-bengal/
//    URL: https://www.thestatesman.com/?p=1503528318
// 2. CBI municipality job scam: MLA ke niwas par raid Oct 2023 (The Hindu, TOI, PTI via newsdrum) aur CBI summons
//    Nov 2024 (IANS via lokmattimes) — sab pre-term. FIR ya chargesheet me MLA ka naam aaropi ke roop me nahi mila;
//    May 2026+ me is mamle me unke khilaf koi nyayik vikas (aadesh/notice) bhi nahi mila. 2026 ke halafname me
//    criminal cases 0 darj. Isliye purana mamla negative entry ke yogya nahi.
//    URL: https://www.thehindu.com/news/national/other-states/cbi-raids-at-wb-bjp-mlas-residence-in-the-municipal-recruitment-scam/article67399400.ece
//    URL: https://timesofindia.indiatimes.com/city/kolkata/west-bengal-cbi-searches-residence-of-bjp-mla-in-municipality-recruitment-probe/articleshow/104290028.cms
// 3. "Partha Chatterjee" SSC scam bail-condition ki khabre — ye ALAG VYAKTI hain (poorv TMC shiksha mantri, Behala
//    Paschim). Ranaghat wale BJP MLA Partha Sarathi Chatterjee se inka koi sambandh nahi.
//    URL: https://www.lokmattimes.com/national/cbi-accuses-former-bengal-minister-partha-chatterjee-of-violating-bail-conditions-in-ssc-teachers-recruitment-scam/
// 4. TMC ka "Unnayaner Panchali" outreach (Ranaghat Uttar-East se launch, Jan 2026) — party ka chunaav-abhiyaan,
//    pre-term, MLA ka kaam nahi.
//    URL: https://www.thestatesman.com/bengal/tmc-flags-off-15-year-development-outreach-from-ranaghat-1503535257.html/amp
// 5. The Statesman "MLA jeered at road inauguration ceremony" (Feb 2026) — pre-term, aur kaun MLA tha ye bhi
//    spasht nahi; is MLA se jodna galat hoga.
//    URL: https://www.thestatesman.com/bengal/mla-jeered-at-road-inauguration-ceremony-1503559660.html
// 6. St. Marys school ke Foundation Day samaroh me MLA ki maujoodgi (PDF) — samaroh me maujoodgi matra hai,
//    bhautik sanrachna ya sanction nahi.
//    URL: https://cdnc.heyzine.com/files/uploaded/31c90523e2df820d0a95312a9bfd750adc7c0ba8.pdf
// 7. WBPHE (Ranaghat sub-division) tenders, Sept 2026 — vibhag ke tender faisle hain; MLA ki bhumika ka koi zikr
//    nahi, isliye unke kaam me nahi gina ja sakta.
//    URL: http://wbphed.gov.in/en/tenders/get-pdf/d4f15933-92db-4c21-bf08-75fda2bef1df
// 8. PM Modi ke June 2026 West Bengal karyakram (Tarkeshwar, Haringhata) — kendra karyakram, MLA se koi vyaktigat
//    jod nahi.
//    URL: https://bengalinfo.com/newsdetail.php?newsid=498672
// 9. 2021 ke chunaav results/liveblogs — purane karyakaal ke, May 2026+ scope se bahar.

// RETRY-LEADS: koi nahi. Koi page 403 par nahi atka; har ummidwar lead snippet se hi pre-term, galat-vyakti ya
// irrelevant nikla, isliye kisi page ko kholne ki zaroorat nahi padi.

// wb4 — partha-sarathi-chatterjee (Ranaghat Uttar Paschim, Nadia, BJP)
westbengalWorks['partha-sarathi-chatterjee'] = [];


// WEST BENGAL — Nadia — Krishnaganj (SC) — Sukanta Biswas (BJP)
// Pehchan (seat se pakki): Krishnaganj Assembly Constituency No. 88 (SC), Nadia jila,
// Ranaghat Lok Sabha (SC) ka hissa; Krishnaganj CD block + Hanskhali block ki 8 gram
// panchayats (Badkulla-I/II, Betna Gobindapur, Dakshin Para I/II, Gajna, Mayurhat I/II).
// 2026 jeet: 1,39,838 vote (60.15%), AITC ke Samir Kumar Poddar (78,939) ko 60,899 maton
// se haraya — Times of India, 4 May 2026 (result story). Padbhara: 4 May 2026 (18vi WB
// Vidhansabha). Pesha: school teacher (Economic Times, Matua-belt report, April 2026);
// umr 39, Post Graduate; 2026 halafname me declared criminal cases: 0 (Indian Express
// candidate table). KARYAKAAL SIRF May 2026+; isse pehle ka kuch nahi. Period: '2026-2031'.
// Mining date: 2026-10-19. Whitelist outlets (The Hindu, Indian Express, HT, NDTV,
// India Today, TOI, The Telegraph India, PTI-via-outlet) par 12+ search rounds; koi
// browser.open-able works-page nahi mili. Khaali profile — karyakaal sirf 5.5 mahine ka hai.
// BEUP note: seat ke naam par koi BEUP-funded itemized sanction list srot me nahi mili;
// isliye fund disclosure "ghoshit nahi" (entry hi nahi bani).
//
// REJECT-LOG (sukanta-biswas):
// 1. TOI 04.05.2026 "Krishnaganj election results 2026: BJP's Sukanta Biswas defeats TMC's
//    Samir Kumar Poddar" (khola nahi gaya — snippet-level; result story anyway) — sirf
//    chunav parinam, kaam nahi; REJECT (chunav parinam entry nahi).
//    URL: https://timesofindia.indiatimes.com/india/krishnaganj-election-results-2026-tmcs-samir-kumar-poddar-vs-bjps-sukanta-biswas/articleshow/130728490.cms
// 2. Indian Express Krishnaganj result/candidate-table page — candidate table me "Sukanta
//    Biswas / Cases 0 / Age 39 / Post Graduate"; halafname-2026 me 0 declared cases — isliye
//    "halafname ke purane pending mamle" wala negative-angle shuru hi nahi hota; parinam-
//    reporting, kaam nahi; REJECT (chunav parinam). Halafname ke 0 cases akele negative NAHI.
//    URL: https://indianexpress.com/elections/krishnaganj-election-result-live-updates-west-bengal-assembly-election-results-winner-10670274/
// 3. Indian Express (Kolkata) March 2026 — BJP ki doosri suchi me "Sukanta Biswas from
//    Krishnaganj" ko 10 teachers me se ek ke roop me ullekh — umeedvaari ghoshna, PRE-TERM;
//    REJECT (chunav-event, kaam nahi).
//    URL: https://indianexpress.com/article/cities/kolkata/3-former-mps-roopa-ganguly-nisith-paramanik-arjin-singh-find-place-in-bjps-second-bengal-list-10591005/
// 4. Economic Times April 2026 (Matua belt/SIR report) — Majhdia (Krishnaganj AC) me
//    "BJP's Sukanta Biswas, a school teacher" ka chunav-daure me ullekh — chunav-period
//    reporting, koi seat-kaam nahi; REJECT.
//    URL: https://m.economictimes.com/news/elections/assembly-elections/west-bengal/west-bengal-polls-2026-amid-voter-row-nadias-matua-belt-shows-bjp-leanings-minimal-deletions/amp_articleshow/130244116.cms
// 5. NAAM-TRAP: "Sukanta Majumdar" (BJP state president/Union minister) par FIR (22.06.2025,
//    Telegraph India) aur preventive arrest (Nov 2024, Millennium Post) — MLA Sukanta Biswas
//    se BILKUL alag vyakti; REJECT (galat pehchan).
// 6. NAAM-TRAP: Satyajit Biswas (Krishnaganj ke purv TMC MLA, Feb 2019 me hatya) aur
//    Nirmal Ghosh (Hanskhali BJP neta, hatya ke 6 aaropiyon me se ek; 15 Oct 2025 ko TMC
//    me shamil — ABP Live) — dono PRE-TERM aur MLA se alag; REJECT.
// 7. NAAM-TRAP: Bayron Biswas (Sagardighi MLA, ghar me aag — Oct 2026, hiindia.com/IANS)
//    — alag vyakti, alag seat; REJECT.
// 8. NAAM-TRAP: "Sukumar Roy" (Cooch Behar Uttar MLA) aur "Ashis Kumar Biswas" (2021 tak
//    Krishnaganj ke purv BJP MLA) — dono MLA se alag; purv-MLA ke kaam current karyakaal
//    me count nahi; REJECT.
// 9. HT 16.10.2026 — SC ne Mahua Moitra (Krishnanagar MP, TMC) ki circuit-house yachika par
//    Bengal sarkar se jawab manga — MP ka mamla, MLA se sambandh nahi; REJECT (MP ka kaam).
// 10. The Statesman 03.02.2026 — Krishnagar municipality me Pathashree-IV ke tahat 20
//     sadak (Rs 4.17 crore); mantri Ujjal Biswas maujood the — PRE-TERM + Krishnagar
//     municipality (alag seat: Krishnanagar Uttar/Dakshin) + doosre neta ka karyakram;
//     REJECT. (Outlet bhi whitelist me nahi.)
//     URL: https://www.thestatesman.com/bengal/krishnagar-gets-infra-push-with-20-roads-under-pathashree-iv-1503551387.html/amp
// 11. The Week (PTI) 06.11.2025 — Union minister Sukanta Majumdar ke convoy par Nabadwip
//     me hamle ka aarop — galat vyakti + PRE-TERM; REJECT.
// 12. Lokmattimes (Dec 2024) / HT (Dec 2024) — NH-34 four-laning (Barajaguli-Krishnanagar,
//     Rs 3,200 crore) ka inauguration Governor ne kiya, PM virtual — kendriya/pariyojna-
//     stariya, MLA ki vyaktigat bhoomika nahi + PRE-TERM; REJECT.
// 13. Vidhansabha prashn/GO-backed swikriti/itemized sanction list/BEUP list — Krishnaganj
//     AC ke naam par whitelist outlets me May 2026+ ka koi dastaveji nateeja nahi mila;
//     retry-lead par rakha gaya (neeche).
//
// Khali profile: 4 May 2026 ko padbhara ke baad ~5.5 mahine me whitelisted media me is MLA
// ka koi vyaktigat lokarpan/shilanyas, prashn-nateeja, sanction ya swikriti publish nahi hui.
// Negatives: halafname (2026) me 0 declared cases; May 2026+ me MLA-khud-aaropi wala koi
// FIR/chargesheet/janch ya nyayik vikas whitelist par nahi mila — 0 negatives.
//
// RETRY-LEADS (parent/live-browser ke liye):
// (a) 18th WB Vidhan Sabha ke prashn-uttar record (wbsla.gov.in) me "Sukanta Biswas" ke
//     prashn dhoondho — Krishnaganj seat se judi dastaveji maang/nateeja ya ashwasan mile
//     to whitelisted coverage ke saath valid entry ban sakti hai (credit capped).
// (b) Vidhayak Elaka Unnayan (BEUP) fund — Rs 1 crore/seat/varsh (June 2026 se) — ki
//     Krishnaganj AC ki itemized sanction lists; srot spasht BEUP kahe tabhi entry banao,
//     warna "ghoshit nahi".
// (c) Telegraph India / TOI Kolkata-desk ki Nadia bureau stories (June-Oct 2026) me
//     Krishnaganj/Hanskhali kshetra ke lokarpan/shilanyas track karo; vyakti + seat dono
//     verify karna lazmi (naam-trap se bacho: Majumdar/Bayron Biswas/Sukumar Roy).
// (d) Bengali local print me shilanyas ki khabrein ho sakti hain lekin whitelist se bahar
//     hain — unse mining mat karna; sirf whitelist pickup par retry.
//
// wb4 — sukanta-biswas (Krishnaganj, Nadia, BJP)
westbengalWorks['sukanta-biswas'] = [];


// ============================================================================
// MLA PEHCHAAN (wb4_worker_ashim-biswas)
// ============================================================================
// Naam: Ashim Biswas (BITRE "Kumar" nahi) — BJP, Ranaghat Uttar Purba (SC, #89),
// Nadia jila, paschim Bengal. Karyakaal: SIRF May 2026+ (18vi Vidhansabha 4 May
// 2026 ko bani; dobara nirvachit — 2026 me 1,26,235 votes, Barnali Dey Roy
// (AITC) par 51,743 ki margin se jeet). Period field hamesha '2026-2031'.
// NAAM-TRAP: "Ashim Kumar Biswas" (Ranaghat Dakshin #90, BJP, 2026 me 1,40,010
// votes, Sougata Kumar Burman (AITC) par 64,464 margin) ekdum ALAG VYAKTI hain.
// "Ashim Kumar Biswas"/"Ranaghat Dakshin" ke naam ki khabrein is profile me
// mat jodo — har lead ko seat (Ranaghat Uttar Purba) se pakka karo.
// Mining date: 2026-10-19. Term sirf ~5.5 mahine ka hai (4 May 2026 – aaj).
//
// ============================================================================
// REJECT-LOG (ashim-biswas — Ranaghat Uttar Purba, Nadia, BJP)
// ============================================================================
// 1. Indian Express / TOI / Economic Times / Business Today / Oneindia / ABP
//    Live / India TV News / mapsofindia.com (May 2026) — chunav-ginti aur jeet
//    ki khabrein (1,26,235 votes, 51,743 margin). Chunav-ghatna hai, seat-kaam
//    nahi; REJECT. URLs (examples):
//    https://indianexpress.com/elections/ranaghat-uttar-purba-election-result-live-updates-west-bengal-assembly-election-results-winner-10670458/
//    https://timesofindia.indiatimes.com/india/ranaghat-uttar-purba-election-results-2026-tmcs-barnali-dey-roy-vs-bjps-ashim-biswas/articleshow/130681314.cms
//    https://www.businesstoday.in/elections/west-bengal/story/ranaghat-uttar-purba-assembly-election-results-2026-live-updates-west-bengal-election-polls-results-2026-wbaelb-529072-2026-05-04
// 2. InfashionBusiness / Mangalore Mirror / Tripura Star News / The Samikhsya /
//    Fibre2Fashion (Jan 2025) — Union Minister Giriraj Singh ne Fulia (Nadia)
//    me IIHT ka naya campus udghatan kiya; "Shri Ashim Biswas, Hon'ble MLA,
//    Ranaghat North East" atithi-suchi me maujood the. Dusre neta (Union
//    Minister) ke karyakram me maujoodgi + PRE-TERM (May 2026 se pehle); REJECT.
//    https://infashionbusiness.com/home/news_details/4624/9
// 3. NAAM-TRAP leads (REJECT): Times of India 4 May 2026 "Ranaghat Dakshin:
//    BJP's Ashim Kumar Biswas wins by 64,464 votes" aur Economic Times
//    Ranaghat Dakshin piece — ye Ashim KUMAR Biswas (Ranaghat Dakshin #90) ki
//    khabrein hain, Ashim Biswas (Ranaghat Uttar Purba #89) ki nahi; REJECT.
//    https://timesofindia.indiatimes.com/india/ranaghat-dakshin-sc-election-results-2026-tmcs-dr-sougata-kumar-burman-vs-bjps-ashim-kumar-biswas/articleshow/130681951.cms
// 4. Negatives: myneta.info (West Bengal 2026 candidate_id=1995) — 2026
//    halafname me 4 pending criminal cases: (a) Dhantala PS 293/2014, 13.08.
//    2014, IPC 498A/34; (b) Memari PS 192/2008, 22.07.2008, IPC 498A/302/386/
//    506(ii)/34; (c) Dhantala PS 219/2005, 30.09.2005, IPC 323/324; (d)
//    Dhantala PS 215/2004, 11.09.2004, IPC 323/324. Saare PRE-TERM mamle
//    (2004–2014); May 2026+ me koi nyayik vikas (chargesheet/giraftaari/adheshn
//    aadesh/notice) whitelisted media me report nahi hua. Halafname ke purane
//    pending mamle akele negative NAHI — REJECT. myneta source affidavit
//    archive hai (ECI halafnama), whitelisted-media nahi.
//    https://myneta.info/WestBengal2026/candidate.php?candidate_id=1995
// 5. Whitelisted outlets par May 2026–Oct 2026 ke dauran Ashim Biswas
//    (Ranaghat Uttar Purba) ke naam par: koi lokarpan/shilanyas, koi Vidhansabha
//    maang ka dastaveji nateeja/ashwasan, koi GO-backed swikriti, koi itemized
//    sanction list report nahi hui. Multiple search rounds (works/foundation/
//    inauguration + negatives/FIR/case/arrest/attack + outlet-specific: The
//    Telegraph, The Hindu, HT, NDTV, India Today) sirf chunav coverage aur
//    naam-trap hits laute; REJECT (kuch mila hi nahi).
//
// ============================================================================
// RETRY-LEADS (alga comment — future passes ke liye)
// ============================================================================
// R1. wbassembly.gov.in question-bank: May 2026+ session me Ashim Biswas ke
//     naam par koi Vidhansabha prashn/ashwasan ki entry ho to specific check
//     (browser-based; generic subagent ke paas live browser nahi).
// R2. myneta.info WestBengal2026 candidate_id=1995 page kholkar 4 cases ke
//     case-numbers/dates ka ek baar direct verify (halafname ke purane mamle
//     hain — May 2026+ nyayik vikas milne par hi negative banege).
//
// KHAALI PROFILE imaandari se khaali hai: term sirf ~5.5 mahine ka hai aur
// whitelisted media me koi valid seat-kaam publish nahi hua.
// QA: 8 search rounds (works/infra, negatives/FIR, outlet-specific, naam-trap
// filter); saare results chunav coverage, pre-term atithi-maujoodgi, ya
// Ashim Kumar Biswas (Ranaghat Dakshin) nikle; entries 0, rejects 5.
// wb4 — ashim-biswas (Ranaghat Uttar Purba, Nadia, BJP)
westbengalWorks['ashim-biswas'] = [];


// wb4 — ashim-kumar-biswas (Ranaghat Dakshin (SC), Nadia, BJP) — MLA pehchan: Ashim KUMAR Biswas (janm 1970, pita sw. Bharat Chandra Biswas, 12vi pass, businessman; 4 May 2026 ko Ranaghat Dakshin se BJP ke ticket par jeete — 1,40,010 vote, TMC ke Sougata Kumar Burman ko 64,464 maton se haraya). NAAM-TRAP: Ranaghat Uttar Purba (SC) ke 'ashim-biswas' (janm 1977, pita sw. Rebati Ranjan Biswas, BA Political Science; 2021 aur 2026 dono me jeete) BILKUL ALAG vyakti hain — unki khabren (Uttar Purba/89) yahan NAHI jodni; har lead par seat 'Ranaghat Dakshin (SC)/90' se pakka karo. Karyakaal May 2026+ hi; 18vi Vidhansabha 4 May 2026 ko bani.
// REJECT-LOG — whitelist (The Hindu, Indian Express incl. newindianexpress.com, Hindustan Times, NDTV, India Today, Times of India, The Telegraph (India), PTI via established outlet) me May 2026–Oct 2026 tak Ranaghat Dakshin seat par MLA Ashim Kumar Biswas ka koi VYAKTIGAT lokarpan/shilanyas (bhautik sarkari sanrachna), fund-disclosed itemized sanction, dastaveji Vidhansabha-maang ka nateeja, ya GO-backed swikriti nahi mila — karyakaal sirf ~5.5 mahine ka hai, khali profile theek hai. Sab REJECT:
// (1) TOI (June 2026; kholkar poora padha): 'PM to launch farm, rly projects in 1st Bengal visit since BJP took charge' — Tarakeswar me PM Modi ke karyakram (PM-KISAN 23vi kisht, Digital Agriculture Mission, 49 PMGSY-III sadken, Haringhata goat semen lab, railway projects) ki khabar; poore article me Ashim Kumar Biswas ka naam HI NAHI — kendriya/PM karyakram me maujoodgi bhi nahi dikhi; pehchan fail + neta-ka-kaam nahi. REJECT. URL: https://timesofindia.indiatimes.com/city/kolkata/pm-to-launch-farm-rly-projects-in-1st-bengal-visit-since-bjp-took-charge/articleshow/131862473.cms
// (2) Statesman/IANS/Week (Dec 2025): PM Modi dwara Ranaghat me Rs 3,200 crore ki 2 NH projects ka lokarpan/shilanyas — PRE-TERM (Dec 2025, chunav se pehle) + PM ka karyakram, MLA ki bhoomika nahi. REJECT. URL: https://www.thestatesman.com/?p=1503528318
// (3) TOI / Indian Express / India Today / Business Today / moneycontrol / ET / News18 / WION / bharathorizon (4 May 2026): sirf chunav-nateeje — 'Ashim Kumar Biswas ne Sougata Kumar Burman ko 64,464 maton se haraya, 1,40,010 votes'. Chunav jeet kaam nahi. REJECT. URL: https://timesofindia.indiatimes.com/india/ranaghat-dakshin-sc-election-results-2026-tmcs-dr-sougata-kumar-burman-vs-bjps-ashim-kumar-biswas/articleshow/130681951.cms
// (4) The Hindu (April 2026; Wikipedia se cited): 'Ashim Kumar Biswas, RANAGHAT DAKSHIN (SC) constituency, BJP — Profile & Affidavit' — chunav-purv ummidwar profile, kaam ki khabar nahi. REJECT.
// (5) NDTV video (18 Oct 2026): Kolkata Durga Puja stampede par BJP MLA ki 'nothing is foolproof... mistakes happen' tippani par vivad — video page par MLA ka NAAM NAHI; pehchan Ashim Kumar Biswas se jodna asambhav, aur tippani-vivad akele negative-rule bhi poora nahi karta (FIR/janch nahi). REJECT. URL: https://www.ndtv.com/video/bjp-mla-s-mistakes-happen-remark-on-kolkata-stampede-triggers-row-1176440
// (6) Indian Express (2024) / The Telegraph / The Hindu (2024) / IE (10 July 2024): Ranaghat Dakshin upchunav coverage (Mukut Mani Adhikari vs Manoj Kumar Biswas) — PRE-TERM, Ashim Kumar Biswas ummidwar bhi nahi the. REJECT. URL: https://indianexpress.com/article/cities/kolkata/bypolls-four-assembly-seats-63-voter-turnout-sporadic-violence-west-bengal-9445321/
// (7) The Statesman (4 Jan 2026): TMC ka 'Unnayaner Panchali' abhiyan Ranaghat Uttar Purba (Barbaria) se launch, ex-MLA Samir Kumar Poddar dwara udghatan — PRE-TERM + galat seat + vipakshi party ka karyakram. REJECT. URL: https://www.thestatesman.com/bengal/tmc-flags-off-15-year-development-outreach-from-ranaghat-1503535257.html/amp
// (8) ETV Bharat (16 Oct 2026): SC ka Mahua Moitra (Krishnanagar MP) accommodation vivad par aadesh — MP ka mamla, MLA se sambandh nahi. REJECT. URL: https://www.etvbharat.com/amp/en/bharat/inform-nadia-district-administration-a-day-before-visit-sc-tells-mahua-moitra-on-accommodation-row-enn26101606568
// (9) expresspost (Oct 2026): Vidhansabha me hungama, 5 BJP MLAs suspended — kisi MLA ka naam nahi, Ashim Kumar Biswas ka zikr nahi; pehchan fail. REJECT. URL: https://expresspost.in/full-story/1624/Chaos-Erupts-in-West-Bengal-Assembly:-Five-BJP-MLAs-Suspended-amid-protests
// (10) myneta.info (WestBengal2026 affidavit, candidate_id=1989): MLA ke halafname me 3 pending mamle — (a) Gangapur PS Case 143/2021 (IPC 341, 326, 307, 506; ACJM Ranaghat), (b) Chakdaha PS Case 164/2023 (IPC 420, 406, 468, 471; ASJ Fast Track Kalyani), (c) Ghaziabad PS Case 263/2022 (IPC 331, 420, 274, 275, 276; ACJM Ghaziabad) — charges framed nahi, koi conviction nahi. Sab PRE-TERM; halafname ke purane pending mamle AKELE negative nahi; inme se kisi par May 2026+ ka koi nyayik vikas (aadesh/notice/sunvai) whitelist media me nahi mila. myneta archive hai, whitelist outlet nahi. NEGATIVE NAHI. URL: https://myneta.info/WestBengal2026/candidate.php?candidate_id=1989
// (11) indiankanoon / courtkutchehry: 'Ashim Kumar Biswas vs State of Jharkhand' (Dhanbad PS Case 112/1993) — Jharkhand ka 1993 ka mamla, Ranaghat ke MLA se pehchan ka koi aadhaar nahi; alag vyakti. REJECT. URL: https://indiankanoon.org/doc/104632599/
// (12) Ranaghat Uttar Purba se judi sabhi khabren (TOI/IE/Business Today/wion/bharathorizon: 'Ashim Biswas ne Barnali Dey Roy ko haraya, 1,26,235 votes') — NAAM-TRAP; ye doosre MLA (ashim-biswas) ki seat hai. Yahan REJECT. URL: https://timesofindia.indiatimes.com/india/ranaghat-uttar-purba-election-results-2026-tmcs-barnali-dey-roy-vs-bjps-ashim-biswas/articleshow/130681314.cms
// Negatives: upar (5), (10), (11) me koi bhi negative-rule poora nahi karta — (5) me naam hi nahi, (10) affidavit-matra pre-term bina May-2026+ vikas, (11) alag vyakti. May 2026+ me MLA ke khilaf koi FIR/chargesheet/janch ya adalati aadesh/notice whitelist media me nahi mila. Koi negative entry nahi. Jawab-disclosed wali sthiti nahi aayi.
// RETRY-LEADs: koi nahi — is worker me jo bhi whitelist lead mila wo khola/padha gaya; koi 403 ya khul-na-sakne-wala relevant page nahi mila. (Telegraph India par 'Ashim Kumar Biswas' ki koi May 2026+ khabar search index me maujood hi nahi dikhi.)
// wb4 — ashim-kumar-biswas (Ranaghat Dakshin, Nadia, BJP)
westbengalWorks['ashim-kumar-biswas'] = [];


// ============================================================
// MLA PEHCHAN — bankim-chandra-ghosh
// Naam: Bankim Chandra Ghosh, party: BJP, seat: Chakdaha (Nadia, AC-91).
// Karyakaal: 18vi Vidhansabha, 4 May 2026 ko bani; period 2026-2031.
// Seat-history: Haringhata MLA (2001-2011, pehle CPI(M) se), Chakdaha MLA 2021-2026,
// 2026 me Chakdaha se phir jeete (BJP, margin 36,945; rival Subhankar Singha, AITC).
// NAAM-TRAP NOTE: Chakdaha ka MLA = Bankim Chandra Ghosh.
//   - Samarendranath Ghosh = Karimpur (Nadia) ka MLA — alag vyakti.
//   - Tarak Nath Chatterjee = Krishnanagar Uttar ka MLA — alag vyakti.
//   - Sadhan Ghosh = Krishnanagar Dakshin ka MLA — alag vyakti.
// Seat-verification: jo bhi lead mile usme "Chakdaha" seat dikhi tabhi rakha;
// in teenon naam-waalon se judi koi khabar is profile me nahi li gayi.
// ============================================================

// ------------------------------------------------------------
// REJECT-LOG (har reject lead + reason + URL)
// ------------------------------------------------------------
// R1. Telegraph India — "Thoroughfare turns canal; Chakdah's waterlogged
//     arterial link, civic negligence"
//     URL: https://www.telegraphindia.com/west-bengal/thoroughfare-turns-canal-chakdahs-waterlogged-arterial-link-civic-negligence-prnt/cid/2119593
//     Reason: PRE-TERM — page khud padha; published 2025-08-25 (term se pehle).
//     MLA ka 1 Aug (2025) ko waterlogged Bangaon Road par tairna protest tha,
//     lokarpan/shilanyas NAHI. Page me Rs 22 crore ki project sirf state PWD ki
//     "awaiting cabinet approval" yojana hai — MLA ka vyaktigat shilanyas nahi,
//     GO-backed swikriti bhi page me dislosed nahi. Dono aadhaaron par reject.
// R2. Millennium Post (July 2022) — "AIIMS hiring scam: CID visits BJP MLA's house"
//     URL: https://www.millenniumpost.in/kolkata/aiims-hiring-scam-cid-visits-bjp-mlas-house-485776
//     Reason: PRE-TERM matter (FIR May 2022, CID visit July 2022; IPC 420/406/120B/34
//     + Prevention of Corruption Act). May 2026+ me is mamle ka koi judicial
//     development whitelisted media me nahi mila. Halafname ke purane pending
//     mamle (Kalyani PS 1241/11, 2011 — IPC 153/186/188/323/353, charges framed
//     24 Jan 2019) akele negative NAHI. Reject.
// R3. Sept 2025 Vidhansabha nilamban (5 BJP MLA — Bankim Ghosh sahit nilambit,
//     marshals ne bahar nikala, aspatal me bharti)
//     URLs: https://www.rediff.com/news/report/chaos-in-bengal-assembly-5-bjp-mlas-suspended/20250905.htm
//           https://www.newsdrum.in/national/stormy-scenes-in-bengal-assembly-5-bjp-mlas-suspended-cms-speech-disrupted-legislators-fall-ill-9953743
//           https://www.mid-day.com/amp/news/india-news/article/west-bengal-speaker-suspends-five-bjp-legislators-ahead-of-cm-mamata-banerjee-s-address-23592490
//     Reason: PRE-TERM (5 Sept 2025); House-disciplinary action FIR/chargesheet/
//     janch ya nyayik vikas nahi; negative criteria poore nahi. Reject.
// R4. indialeader.com — "shribankim chandra ghosh" profile
//     URL: https://www.indialeader.com/ViewLeader/59949/shribankim-ghosh
//     Reason: NON-WHITELISTED source; bina taarikh ke generic dawe
//     ("constituency development funds for impactful projects") — koi concrete
//     lokarpan/shilanyas/fund sankhya nahi. Entry nahi.
// R5. Times of India — "Chakdah MLA calls Suvendu on frequent walkouts"
//     URL: https://timesofindia.indiatimes.com/city/kolkata/chakdah-mla-calls-suvendu-on-frequent-walkouts/articleshow/119317402.cms
//     Reason: PRE-TERM (March 2025, ~576 days ago); party strategy comment,
//     works ya negative criteria me nahi. Reject.
// R6. myNeta.info WestBengal2026 affidavit (3 criminal cases declared)
//     URL: https://myneta.info/WestBengal2026/candidate.php?candidate_id=2758
//     Reason: Halafname ke purane pending mamle akele negative NAHI;
//     May 2026+ me koi judicial development disclosed nahi. Reject.
// ------------------------------------------------------------

// ------------------------------------------------------------
// RETRY-LEADS: koi nahi. Har whitelisted candidate page khulakar padha gaya;
// koi 403/retry-layak page nahi mila.
// ------------------------------------------------------------

// wb4 — bankim-chandra-ghosh (Chakdaha, Nadia, BJP)
westbengalWorks['bankim-chandra-ghosh'] = [];


// ============================================================================
// wb4 worker — MLA identity note
// ----------------------------------------------------------------------------
// MLA: Anupam Biswas (BJP), seat: Kalyani (SC), jila: Nadia, West Bengal.
// Pehchaan seat se pakki: Wikipedia "Anupam Biswas" page (Assumed office
// 4 May 2026, Constituency Kalyani, Party Bharatiya Janata Party, father
// Late Madhusudan Biswas) + TOI "Kalyani election results 2026" (BJP ke
// Anupam Biswas jeete; TMC ke Dr Atindra Nath Mondal ko 34,792 votes se
// haraaya, seat Nadia me Bangaon Lok Sabha ke andar) — dono me "Kalyani,
// Nadia" ek hi vyakti ki or ishara karte hain. Kalyani seat me Kalyani
// municipality + Gayespur municipality + Kalyani CD block ke kuch GP hain.
// KARYAKAAL: sirf 4 May 2026 se (18vi Vidhansabha), isliye period hamesha
// '2026-2031' hoga aur May 2026 se pehle ki koi khabar entry layak nahi.
// Naam-trap se bache: Krishna Kalyani (Raiganj, Uttar Dinajpur ke MLA) aur
// Arup Biswas (TMC neta) alag vyakti hain — inki khabrein reject hui hain.
// ============================================================================

// ----------------------------------------------------------------------------
// REJECT-LOG — har reject lead, wajah ke saath (Roman-script Hinglish me)
// ----------------------------------------------------------------------------
// 1. "Bengal CM to Sanction Rs 10 Cr For Renovation of Kalyani Stadium"
//    (deccanchronicle.com, 2026-10-15; page khol kar poori padhi gayi)
//    REJECT wajah (a): source whitelist me nahi — Deccan Chronicle whitelist
//    (The Hindu, Indian Express incl. newindianexpress.com, Hindustan Times,
//    NDTV, India Today, Times of India, The Telegraph (India), PTI via
//    established outlet) me nahi hai aur page par PTI attribution bhi dikha
//    nahi. REJECT wajah (b): tathya ke hisaab se ye SIRF GHOSHNA hai — CM ne
//    "sanction karne ka faisla kiya", fund abhi sanction hua nahi; GO bhi nahi
//    hai. MLA ka role sirf reporters ko ye batana tha; unki koi dastaveji
//    maang ya GO-backed swikriti page me nahi mili. Credit bhi mukhyatah CM ka
//    faisla (unke stadium daure ke baad) hai.
//    URL: https://www.deccanchronicle.com/sports/bengal-cm-to-sanction-rs-10-cr-for-renovation-of-kalyani-stadium-1996004
//
// 2. "Cleanliness battle must move to streets: Agnimitra at Kalyani University"
//    (thestatesman.com, 2026-10-01; page khol kar poori padhi gayi)
//    REJECT wajah (a): The Statesman whitelist me nahi hai. REJECT wajah
//    (b): sadak ka naam Syama Prasad Mukherjee ke naam par rakhne ke prastav
//    ki mantri ne sirf SWIKRITI/ashwasan diya — ye bhautik sanrachna ka
//    lokarpan/shilanyas nahi, aur sadak-namkaran pratikatmak hai.
//    URL: https://www.thestatesman.com/cities/kolkata/cleanliness-battle-must-move-to-streets-agnimitra-at-kalyani-university-1503645524.html
//
// 3. "JIS Education Expo 2026 – Kalyani Edition" (newsnation360.com /
//    financialsamachar.com, 2026-07-11) — MLA ne JIS College of Engineering ke
//    expo ka udghatan kiya / maujood the. REJECT: ye dusre sangathan ke
//    karyakram me maujoodgi + keval shubharambh hai; bhautik sarkari sanrachna
//    se koi sambandh nahi; source bhi whitelist me nahi.
//
// 4. "Candidate choices spark stir within BJP" (timesofindia.indiatimes.com)
//    — April 2026 (chunav se pehle) ki khabar: BJP karyakartaon ne Kalyani se
//    Anupam Biswas ko ummidwar banane par virodh jataaya. REJECT: (a) pre-term
//    (May 2026 se pehle); (b) ye ummidwari-chayan par party ki andaruni khabar
//    hai — negative niyam ke hisaab se "party karyawahi akele negative NAHI"
//    aur koi FIR/janch/court mamla nahi hai.
//    URL: https://timesofindia.indiatimes.com/city/kolkata/candidate-choices-spark-stir-within-bjp/articleshow/130046188.cms
//
// 5. "Bengal violence before phase 2 polls" (english.mathrubhumi.com,
//    2026-04-25) — pre-term; Shahidpally (Kalyani) me BJP karyakartaon par
//    kathit hamle ke virodh me Anupam Biswas (tab ummidwar) ne Kalyani police
//    station ke bahar protest ka netritva kiya. REJECT: (a) pre-term (April
//    2026); (b) MLA par koi aarop nahi — ve shikayat-karta paksh me the, isliye
//    negative criteria ("MLA KHUD aaropi") poora nahi hota.
//    URL: https://english.mathrubhumi.com/news/india/kalyani-violence-bjp-workers-attacked-tmc-phase-2-polls-nadia-k2x3bnxt
//
// 6. "Congress family, BJP ticket, now TMC man: Latest Bengal MLA under ED watch"
//    (indianexpress.com) — NAAM-TRAP REJECT: ye Krishna Kalyani (Raigunj,
//    Uttar Dinajpur ke MLA) ke baare me hai, Anupam Biswas (Kalyani, Nadia) ke
//    baare me nahi. Seat se pehchaan nahi milti.
//
// 7. "BJP MLA in picture war with BJP MP in Raiganj" (telegraphindia.com,
//    2021-09-10) — NAAM-TRAP + PRE-TERM REJECT: ye Krishna Kalyani (Raiganj)
//    ke baare me hai, aur 2021 ki purani khabar hai.
//
// 8. Indiankanoon "Suvendu Adhikari And Another vs The State Of West Bengal"
//    (Dec 2025) — REJECT: yachika-karta Suvendu Adhikari aur anya hain;
//    Anupam Biswas (Kalyani MLA) ka isme koi zikr nahi; sirf yachika hone se
//    negative nahi banta.
//
// 9. "Arup Biswas Move Triggers Shock TMC Split" (knowledgemart.org) —
//    NAAM-TRAP REJECT: ye TMC ke Arup Biswas ke baare me hai, Kalyani ke BJP
//    MLA Anupam Biswas ke baare me nahi.
//
// ============================================================================
// RETRY-LEADS — alag se (koi entry nahi bani, par future runs ke liye)
// ============================================================================
// R1. Kalyani Stadium renovation Rs 10 crore: agar whitelisted source (The
//     Hindu / TOI / NDTV / HT / India Today / Telegraph India) par wahi PTI
//     wire ya CM ke sanction ki GO/order wali khabar mile, to "CM ka ashwasan
//     (credit capped)" ke roop me entry ban sakti hai — lekin SIRF GO-backed
//     sanction ya vastavik kaam shuru hone par; sirf ghoshna par nahi.
// R2. BEUP fund (Rs 1 crore/seat/varsh, June 2026 se): abhi tak koi BEUP se
//     judi Kalyani ki sanrachna-khabar nahi mili; BEUP itemized list mile to
//     entry ban sakti hai.
// R3. Sadak-namkaran (Syama Prasad Mukherjee, The Statesman, 2026-10-01):
//     whitelist outlet par confirm ho tab bhi pratikatmak hai — bhautik
//     sanrachna ki shart poori nahi hoti, isliye entry ki ummeed kam hai.
// ============================================================================

// FINAL — valid entries: 0 (karyakaal sirf ~5.5 mahine ka hai; whitelisted
// source par koi entry-layak seat-work ya negative nahi mila). Khali profile
// bilkul theek hai.
// wb4 — anupam-biswas (Kalyani, Nadia, BJP)
westbengalWorks['anupam-biswas'] = [];


// ============================================================
// MLA PEHCHAN (seat se pakki — naam-trap check ke saath)
// Asim Kumar Sarkar (myneta 2026 halafnama me "ASIM KUMAR SARKAR"; kuch
// jagah "Ashim Kumar Sarkar" likha hai lekin seat aur chehra wahi hai)
// Party: BJP | Seat: Haringhata (SC), Nadia jila (Vidhansabha sankhya 93)
// 2026 chunav: 1,07,900 vote se jeet (Rajib Biswas, AITC ko haraya); 2021
// me bhi yahi seat jeete the. Pesha: lok gayak (Kabigan); Matua samuday.
// Naam-trap: Dinesh Sarkar (Rajganj, Jalpaiguri jila) ALAG MLA hain —
// niche ke saare leads Haringhata/Nadia seat se pakke kiye gaye hain.
// Karyakaal: SIRF May 2026+ (18vi Vidhansabha 4 May 2026 ko bani).
// Srot: myneta.info 2026 halafnama; en.wikipedia Haringhata constituency
// page; indianexpress.com chunav parinaam page.
// ============================================================

// ============================================================
// REJECT-LOG (har reject lead + reason + URL)
// ============================================================
// R1. TOI "FIRs against BJP MLA for 'insult to Quran'" — MLA khud aaropi,
//     multiple FIRs (Raghunathganj/Basanti/Shamsherganj/Domkal thane), whitelisted
//     source (page khola aur padha). LEKIN: ye mamla Dec 2025 ka hai (karyakaal
//     se pehle — 4 May 2026 se pehle), aur May 2026+ ka koi vikas (chargesheet,
//     court order/notice, janch ki pragati) kisi bhi source me nahi mila.
//     Pre-term mamla bina term-period vikas ke negative nahi ban sakta. REJECT.
//     URL: https://timesofindia.indiatimes.com/city/kolkata/firs-against-bjp-mla-for-insult-to-quran/articleshow/126259384.cms
//
// R2. lokmattimes.com "BJP legislator in Bengal receives death threat" (Dec 27, 2025)
//     — isme MLA SHIKAYAT-KARTA hai (jaan ka khatra ki complaint), aaropi nahi;
//     pre-term bhi hai; non-whitelisted source. Negative ki paribhasha me nahi aata. REJECT.
//     URL: https://www.lokmattimes.com/national/bjp-legislator-in-bengal-receives-death-threat-files-police-complaint/amp/
//
// R3. bharathorizon.com "multiple FIRs over Quran remarks" (page khola) — wahi R1
//     wala Dec 2025 ka mamla; non-whitelisted source. REJECT.
//     URL: https://bharathorizon.com/politics/state-politics/multiple-firs-against-bengal-bjp-mla-for-quran-remarks.html
//
// R4. The Telegraph "Haringhata BJP MLA alleges murder attempt" (12 May 2022)
//     — pre-term (2022), MLA yahan bhi complainant hai. REJECT.
//     URL: https://www.telegraphindia.com/west-bengal/haringhata-bjp-mla-alleges-murder-attempt/cid/1864640
//
// R5. newindianexpress.com "Further delay in CAA implementation..." (2022) — pre-term
//     tippani, koi seat-work nahi. REJECT.
//     URL: https://www.newindianexpress.com/nation/2022/jun/18/further-delay-in-caa-implementation-to-hurt-bjps-support-base-in-bengal-party-mla-2466832.html
//
// R6. TOI "PM to launch farm, rly projects in 1st Bengal visit" (June 2026) — PM Modi
//     ne Haringhata me goat semen lab ka uddghatan kiya; ye PM ka karyakram hai,
//     MLA ka vyaktigat seat-work nahi (MLA ki maujoodgi ki tasdeek bhi nahi). REJECT.
//     URL: https://timesofindia.indiatimes.com/city/kolkata/pm-to-launch-farm-rly-projects-in-1st-bengal-visit-since-bjp-took-charge/articleshow/131862473.cms
//
// R7. easternnewsnetwork "Rs 600-crore Haringhata Food Park" (Oct 2026) — CM Suvendu
//     Adhikari ki ghoshna (Reliance bhoomi pujan 28 Oct); rajya sarkar ka faisla,
//     non-whitelisted source. MLA ka kaam nahi. REJECT.
//     URL: https://easternnewsnetwork.com/article/rs-600-crore-haringhata-food-park-to-kickstart-reliances-bengal-investment
//
// R8. TOI "Centre approves Rs 1,042 crore for six Bengal road projects" — CM/state
//     PWD ka faisla; list me Haringhata ki koi sadak nahi. MLA ka kaam nahi. REJECT.
//     URL: https://timesofindia.indiatimes.com/city/kolkata/centre-approves-rs-1042-crore-for-six-bengal-road-projects/articleshow/134266890.cms
//
// R9. myneta.info 2026 halafnama — 6 pending criminal cases darj hain, lekin purane
//     halafnama mamle akele negative NAHI hote; non-whitelisted bhi. REJECT.
//     URL: https://myneta.info/WestBengal2026/candidate.php?candidate_id=1930
//
// R10. kolkatatvonline.in tag page "satiricaly sings about Lakshmi's Bhandar" —
//      non-whitelisted; vyangyatmak gana/tippani hai, koi bhautik seat-work nahi. REJECT.
//      URL: https://kolkatatvonline.in/tag/bjp-mla-asim-sarkar-satiricaly-sings-about-lakshmis-bhandar-project-in-haringhata/
//
// R11. MLA Local Area Development Fund Rs 70 lakh se badhkar Rs 1 crore (June 2026
//      rajya budget) — ye rajya budget ka faisla hai, MLA ka vyaktigat seat-work nahi;
//      kisi source me "BEUP" shabd nahi mila, isliye fund-disclosure wali entry nahi bani. REJECT.
//
// R12. news.webindia123.com EVM malfunction/repolling maang (29 Apr 2026) — chunav
//      se pehle (pre-term), chunav-yachika/maang category; non-whitelisted. REJECT.
//      URL: https://news.webindia123.com/news/articles/India/20260429/4444950.html
//
// R13. casestatus.in Nadia court order-sheet (WBND010003732026) — snippet-only,
//      paksh-karon ke naam ki tasdeek nahi ho saki; non-whitelisted. Entry nahi ban sakti. REJECT.
// ============================================================

// ============================================================
// RETRY-LEADs
// Koi nahi — jo candidate pages kholne zaroori the (TOI Quran-FIR article,
// bharathorizon article) sab browser.open se khul gaye aur padhe gaye.
// Koi 403 ya na-khulne wala page nahi tha.
// ============================================================

// wb4 — asim-kumar-sarkar (Haringhata, Nadia, BJP)
westbengalWorks['asim-kumar-sarkar'] = [];

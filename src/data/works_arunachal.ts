// Arunachal Pradesh — neta-war kaam (works) ka placeholder.
// Mining baad me hogi: MLALAD (Rs 4 crore/seat/saal, FY 2025-26 se) ke tahat vikas karyon ke record
// jama karke yahan jode jayenge. Abhi khaali export — all.ts me wiring live hai, koi page nahi tootega.
export const arunachalWorks: Record<string, any[]> = {};

// ---- Tawang district batch (researched 2026-10-17) ----
// COORDINATOR REVIEW: Teeno workers ke reports merge kiye gaye. Lhamu ka 1 entry (school library udghatan —
// zila prashasan ne banayi, MLA ne sirf udghatan kiya — credit capped; title Roman-Hinglish me rewrite kiya).
// Namgey Tsering ka 1 entry (APPSCCE free coaching — MLA ki apni initiative/sponsorship, fund MLALAD nahi bataya
// gaya — note me disclosed; us samay wo NPP me the). Khandu: 0 works (CM-niyam — 18 rajya-stariya items reject)
// + 1 negative (SC ne Apr 2026 me CBI preliminary enquiry ka aadesh diya — The Hindu; Khandu PIL me party
// respondent hain; sarkar/MLA ka jawab record par; stage-accurate — koi FIR nahi hui).

arunachalWorks['tsering-lhamu'] = [
  {
    title: 'Lumla ki Tsering Lhamu ne Kuntse gaon ke PM Shri sarkari middle school me Nalanda Library ka udghatan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2026/07/15/mla-inaugurates-school-library/',
    date: '2026-07-14',
    note: 'Udhamatan matra — library ko Tawang zila prashasan (DC, Lumla ADC, Dudunghar CO) aur school staff ne seemit fund ke bawajood banaya; shikshakon ne ek kamre me ~15 chhatron ke liye shuru karke badhaya. Report me fund-srot darj nahi — MLA ki bhoomika nirmaan nahi, keval udghatan. Article me "Monday" likha hai lekin dateline 14 Jul 2026 (Tuesday) hai — date dateline se li gayi.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (tsering-lhamu, Lumla): 1. EMRS girls school nirikshan (Apr 2025, indiatodayne) — sirf nirikshan+ashwasan. 2. Amphitheatre nirikshan (Sep 2025) — nirikshan; 2023 me Dy CM ne inaugurate kiya tha (pre-term). 3. Manpat safai abhiyaan (Oct 2025) — abhiyaan, nirmaan nahi. 4. Jambey Tashi museum + consecration (Jun 2025) — CM ne inaugurate kiya; Lhamu parivar-sadasya ke roop me maujood — dusre neta ka karyakram. 5. Jampa Lhakhang (Jun 2025, Northeast Today) — CM ka udghatan. 6. Jan Kalyan Shivir (Jun 2026, hornbillnews) — CM ka karyakram + non-whitelist. 7. Freedom Trail trek (Apr 2025) — event, kaam nahi. 8. Pineapple Festival West Siang (Jan 2026) — mukhya-atithi + seat se bahar. 9. KVK workshops (Apr-Jun 2026) — chief-guest maujoodgi. 10. VBSY launch (Nov 2023) — pre-term. 11. Border Brew Cafe Zemithang (Mar 2026) — Army (Op Sadbhavana) ka kaam. 12. Khelo India hall Muyo (Feb 2026, Akashvani) — Rijiju ne inaugurate kiya. 13. Taksangchu hydro shilanyas (Aug 2021) — purv MLA Jambey Tashi ka kaam (namesake trap avoid).

arunachalWorks['namgey-tsering'] = [
  {
    title: 'Tawang ke Namgey Tsering ne APPSCCE abhyarthiyon ke liye muft crash-course coaching shuru karwayi — Government Higher Secondary School Tawang me udghatan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Arunachal24',
    sourceUrl: 'https://arunachal24.in/arunachal-free-crash-course-coaching-for-appscce-aspirants-inaugurated-in-tawang/',
    date: '2024-10-21',
    note: 'Coaching Tawang ST ke APPSCCE abhyarthiyon ke liye MLA ki apni initiative aur sponsorship par — source me MLALAD ka ullekh nahi, isliye fund MLA ke apne karyakram ke roop me disclosed. MLA ne ise apne chunavi manifesto ki priority bataya; do faculty Pune se bulaye gaye. Udghatan me DC aur Brigadier bhi maujood the. Us samay MLA NPP me the (PPA me Jun 2025 me gaye).',
    period: '2024-2029',
    stage: 'kaam-shuru',
  },
];
// REJECT-LOG (namgey-tsering, Tawang): 1. Monyul Super League launch (Nov 2025) — khel league samaroh, infra kaam nahi. 2. Seva Sankalp Utsav 2026 — mukhya-atithi + non-whitelist. 3. Salt Trek flag-off (Sep 2026) — heritage trek, works nahi. 4. Kitpi Mini Hydel (Apr 2026) — CM ka karyakram, MLA upasthit. 5. Dorjee Khandu Govt College blocks (Nov 2025) — CM event. 6. Akashvani Tawang 50th (Eastern Sentinel) — chief-guest samaroh. 7. 1962 martyrs rally (Oct 2025) — shraddhanjali. 8. Sakarjong landslide nirikshan (Sep 2026) — nirikshan. 9. World No Tobacco Day (May 2025) — awareness event. 10. Kraling/Boksar visit (Apr 2025) — daura. 11. AMSU toppers felicitation (May 2025) — samaroh + sirf ghoshna. 12. Teachers felicitation (Sep 2024) — samaroh; coaching-ghoshna entry 1 me post-event ho chuki. 13. Har Ghar Tiranga (Aug 2024) — patriotic event. 14. Sacred land statement (Mar 2025) — sirf bayan. 15. Organic district ghoshna (sentinelassam) — ghoshna + non-whitelist. 16. PPA Dy Legislature Leader pad (Jul 2025) — raajnaitik pad. 17. ILP/ST video (YouTube) — non-whitelist. 18. AAPPTF mulakat (Sep 2026, arunkhabar) — non-whitelist. 19. Army archery (Oct 2026, arunkhabar) — Army ka kaam + non-whitelist. 20. Badminton jersey launch (Sep 2026) — association event.

arunachalWorks['pema-khandu'] = [
  {
    title: 'Pema Khandu par Supreme Court ka CBI preliminary enquiry aadesh — parivaar se judi firms ko 2015-2025 me lagbhag Rs 1,270 crore ke lok-nirman contracts dene ke aaropon par',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/supreme-court-orders-cbi-inquiry-into-award-of-govt-contracts-to-to-firms-allegedly-linked-arunachal-cms-relatives/article70829099.ece',
    date: '2026-04-06',
    note: '6 Apr 2026 ko Supreme Court ki bench (Justice Vikram Nath aur Justice Sandeep Mehta) ne CBI ko 2 hafton me preliminary enquiry shuru karne ka nirdesh diya — 1 Jan 2015 se 31 Dec 2025 tak ke public works contracts ki jaanch, khaas taur par Khandu, unke bhai Tsering Tashi aur sauteli maa Rinchin Drema se judi firms ko mile thekon par; yachikakartaon ka aarop hai ki parivaar-linked firms ko lagbhag Rs 1,270 crore ke contract bina pardarshi tender ke mile. CBI ko 16 hafton me status report deni hai. Court ne spasht kiya ki ye nirdesh aaropon ki satyata ki swatantra jaanch ke liye hai — merits par koi tippani ya faisla NAHI hai. Ye sirf preliminary enquiry hai — koi FIR, charge ya dosh-siddhi NAHI hui. (Parent ne The Hindu ka source khud kholkar satyaapit kiya, 2026-10-17.)',
    period: '2024-2029',
  },
];
// REJECT-LOG (pema-khandu, Mukto — CM-niyam): Rajya-stariya/seat-bahar rejects (18): Lower Siang Rs 150cr (Feb 2026), Dirang projects (Nov 2025), Thrizino-Buragaon projects, Along West projects+Rs 50cr bridge package (Dec 2024), Donyi Polo hall Naharlagun (Oct 2026), FLN Centre Doimukh (Feb 2026), Agri hub Naharlagun (Sep 2026), 7 institutions incubation centres (Oct 2026), Sera Jey monastery admin block Tawang (Feb 2026), Mebo gateway+6 projects (Oct 2026), Nacho 40+ lokarpan/shilanyas (Feb 2026), Taksing monastery push (Feb 2026), State Road Plan Rs 5,233cr (Sep-Oct 2026), Border Village Illumination Rs 200cr (2023), archery stadium ghoshna Yupia (Nov 2025), Roing foundations (Sep 2025), 4 fire stations (Sep 2025, cabinet decision), SPM Road Itanagar (Jul 2026). Mukto-specific rejects: Shaikangchu 6MW hydro lokarpan (nenow — pre-term ~2021), Phadampa Phodrang shilanyas 2018 (pre-term), Chenrezig statue (dharmik karyakram, sarkari kaam nahi), BRO Mukto-Teli road (kendriya kaam), 24 km Luguthang trek (daura), BJYM Yuva Sammelan (party meeting), Mogto Futsal Arena (Aug 2025 — ADC ne inaugurate kiya, Khandu ka ullekh nahi), Jang land compensation + NEEPCO ambulance (thecriticalscript — non-whitelist).
// COORDINATOR RETRY-LEAD: Feb 2025 ki 3-Mukto developmental meeting (Lhou-Mukto road double-laning 12.5 km lokarpan + nayi sadkon/ministadium ke shilanyas) abhi tak sirf northeastmonitor.com (non-whitelisted) par hai — parent DIPR Arunachal ka Feb 4-5, 2025 ka press release ya Arunachal Times archive check kare; whitelisted aadhaar mile to Khandu ki pehli works entries ban sakti hain.

// ---- West Kameng district batch (researched 2026-10-17) ----
// COORDINATOR REVIEW: 4/4 workers complete. Tseten Chombay Kee 1 entry (GHSS Rupa smart classroom + library —
// PM-SHRI fund disclosed; title me MLA ka naam joda, stage 'lokarpan' normalize kiya). Tenzin Nyima Glow 1 entry
// (Eaglenest conference hall, Rs 30 lakh budget disclosed; stage 'completed' -> 'lokarpan' normalize kiya).
// Phurpa Tsering 0 (advisor-role ribbon-cuttings sab fund-figure ke bina reject) + Dongru Siongju 0 (samaroh/daan/
// cooperative assets sab reject). Koi foundation edit nahi. Koi negative nahi.

arunachalWorks['tseten-chombay-kee'] = [
  {
    title: 'Kalaktang ke Tseten Chombay Kee ne Rupa ke Government Higher Secondary School me smart classroom aur library ka udghatan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/index.php/2024/12/18/mla-inaugurates-smart-classroom/',
    date: '2024-12-17',
    note: '17 Dec 2024 ko Kalaktang MLA Tseten Chombay Kee ne Rupa ke Government Higher Secondary School me ek smart classroom aur ek library ka udghatan kiya; smart TV systems aur furniture PM-SHRI scheme ke tahat diye gaye. Event me ZPC Karma Dorjee Thongdok, ADC Rupa aur school staff bhi maujood the. DIPRO report.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (tseten-chombay-kee, Kalaktang): 1. Northeast Today (7 Sep 2026) Kalaktang livelihood support centre — non-whitelist + ArSRLM ka office, fund linkage nahi. 2. Northeast Today (6 Oct 2026) Rupa 500-bed medical city — non-whitelist + sirf site inspection. 3. Northeast Today (8 Oct 2026) medical college stakeholder meet — non-whitelist + sirf consultation. 4. Arunachal24 (9 May 2026) refrigerated fish transport vehicle flag-off — Fisheries Dept + ICAR-CICFR programme, MLA ne sirf flag-off kiya, fund linkage nahi. 5. India Today NE (Jul 2025) Kalaktang development review — sirf nirikshan/daura. 6. Arunachal24 (Mar 2025) Zagang-Musakshing road expansion review — sirf visit + meeting. 7. Eastern Sentinel Morshing museum — museum Rinchin Norbu ne personal efforts se banaya, MLA ne sirf udghatan + personal donation (daan reject). 8. Arunachal Times (18 Jan 2025) Eaglenest Bird Festival — Chombay sirf present; foundation stone Environment Minister ne rakha (dusre neta ka karyakram). 9. Arunachal Times Bomdila Connect — sirf bhashan + CM tak ashwasan (maang/ashwasan). 10. arunachalobserver/itanagartimes/easternecho (Rs 228 crore Kalaktang projects) — non-whitelisted + CM ke projects. 11. tibet.net (14 Mar 2026) Tenzingang gateways/community hall — non-whitelisted + state-funded, MLA ne sirf inauguration kiya. 12. tibet.net (6 Jul 2025) Dalai Lama birthday — non-whitelisted + pre-event announcement type. 13. newsarenaindia (Apr 2024) pre-poll clash — non-whitelisted + supporters ki clash, MLA aaropi nahi. 14. YouTube interview — video platform. 15. morungexpress.com PPIF Jeep rally (Jan 2025) — sirf attendee.

arunachalWorks['tenzin-nyima-glow'] = [
  {
    title: 'Thrizino-Buragaon ke MLA Tenzin Nyima Glow ne Ramalingam me Eaglenest Wildlife Sanctuary ke conference hall ka udghatan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2025/05/28/mla-seeks-funds-for-development-of-ews/',
    date: '2025-05-27',
    note: 'Singchung me 27 May ko MLA Tenzin Nyima Glow ne Eaglenest Wildlife Sanctuary ke conference hall ka udghatan kiya. Article ke anusar hall Rs 30 lakh (GST sahit) ki conservative budget me bana; PCCF Nyilyang Tam ne hall ke nirman me fund ke judicious use ki sarahna ki aur Forest Department ki or se aage bhi support ka bharosa diya. Article ka mukhya focus PCCF se adhik fund ki maang par hai — wo hissa maang ke roop me reject, sirf udghatan entry me liya.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (tenzin-nyima-glow, Thrizino-Buragaon): 1. Arunachal Times (17 Feb 2026) Jamiri CO building udghatan — fund source undisclosed + sirf udghatan. 2. Arunachal Times (27 May 2025) Singchung Aadhaar Seva Kendra udghatan — fund undisclosed. 3. Arunachal Times (Oct 2025) Singchung development projects nirikshan — nirikshan/daura. 4. CM/Dy CM/Governor ke Thrizino-Bhalukpong karyakram (Nov 2025, Jun 2026, Mar 2025) — dusre netaon ke karyakram me maujoodgi; ek non-whitelisted bhi tha. 5. Nyishi Day, Chindang festival, painting workshop, butterfly naming, BAS Nyethrii-Dow — samaroh bhashan/maugauda/mukhya-atithi. 6. Tenga market fire donation (Feb 2025) — daan/rahat. 7. Three independents support letter (Jun 2024) — political, works nahi. 8. TOI affidavit 'Criminal Antecedents: Yes' (Jun 2024) — whitelisted me FIR/keh-case report nahi, negative nahi bani.

arunachalWorks['phurpa-tsering'] = [];
// REJECT-LOG (phurpa-tsering, Dirang): 1. Arunachal Times (2026-04-24) Hijum Rime RCC bridge inauguration — advisor-role ribbon-cutting, cost/fund disclosed nahi. 2. archive.arunachaltimes (Dec 2025) Chander-Tungri road — BRO (Project Vartak), Rajnath Singh ne virtually inaugurate kiya (kendriya pariyojna). 3. Arunachal Times (Jan 2026) Bomdila creche inauguration — DC ki initiative, MLA ne sirf ribbon kaata. 4. archive.arunachaltimes (Aug 2024) Thembang NSCBAV facilities inauguration — crowdfunding project ne banaya, MLA ne sirf inaugurate kiya. 5. IndiaTodayNE (Nov 2025) + Eastern Sentinel (Feb 2024) CM Dirang events — CM ka lokarpan/shilanyas, MLA maujood. 6. Northeast Now 7 mahine salary donation (Rs 7.5 lakh) flood-hit families — daan. 7. IndiaTodayNE + archive.arunachaltimes (Apr 2025) developmental tour — sirf ghoshnaayein. 8. Arunachal Times + arunachal24 review meetings — nirdesh/ashwasan matra. 9. UNESCO LCC meeting (May 2025) — sirf meeting. 10. sentinelassam fire truck donation — daan (truck non-operational bhi hai). 11. money.rediff IHCL Gateway hotel partnership — private commercial, non-whitelist. 12. Nov 2017 Mandala top 108 Maneys — pre-term. 13. arunachal24 (2022) Tribal Film Festival — pre-term event. 14. Negative: 2013 trans-Arunachal highway land compensation CBI case (BS/PTI) — pre-term, current term me legal development nahi, 2024 affidavit me 0 cases. 15. YouTube NEEMWS corruption allegations — YouTube source reject + allegations wapas liye gaye.

arunachalWorks['dongru-siongju'] = [];
// REJECT-LOG (dongru-siongju, Bomdila): 1. Arunachal Times (17 Aug 2025) mini supermarket inauguration — Bomdila LAMPS cooperative ki sampatti, fund/bhoomika undisclosed, sirf udghatan. 2. Arunachal Times (23 Jul 2025) alma mater donation — daan; Rs 6L LAD sanction 2021-22 pre-term. 3. Arunachal Times (10 Aug 2025) 384 PMAY-U 2.0 houses allotment — kendriya yojna, MLA sirf manch par. 4. Arunachal Times (Jan 2025) district schemes assessment meeting — sirf nirdesh. 5. Eastern Sentinel Har Ghar Jal saturation — kendriya yojna jashn, sirf badhai. 6. Eastern Sentinel priest ID cards — pre-term (2021 photo) + vibhagiya vitaran. 7. Eastern Sentinel mini market building — pre-term + LAMPS asset. 8. northeastlivetv (Oct 2026) 5km trek water source — non-whitelist + nirikshan/daura. 9. Unopposed win + advisor-appointment reports — works nahi. 10. Negative-check: 2024 affidavit me 0 cases, koi FIR/legal development nahi.

// ---- Bichom district batch (researched 2026-10-17) ----
arunachalWorks['kumar-waii'] = [
  {
    title: 'Bameng ke MLA Kumar Waii ne Marjingla me Kameng Nadi par 120-metre steel arch Mekap Dolo Bridge ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'India Today NE',
    sourceUrl: 'https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-mla-kumar-waii-inaugurates-mekap-dolo-bridge-in-east-kameng-promises-more-infrastructure-projects-1261189-2025-08-14',
    date: '2025-08-14',
    note: 'Sarkari pariyojna ka lokarpan — report me fund source disclosed nahi hai (disclosure). Waii ne chief guest ke roop me vyaktigat lokarpan kiya; bridge Bameng kshetra ke Marjingla me hai aur purv mantri Mekap Dolo ke naam par hai.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Kumar Waii ke zero-hour charche ke baad CM ne Frontier Highway ke Lada-Sarli muavja ghotale par sakht karwai ka ashwasan diya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Arunachal24',
    sourceUrl: 'https://arunachal24.in/arunachal-corruption-will-not-be-tolerated-cm-to-assembly/',
    date: '2026-02-04',
    note: 'Credit capped: Waii ne zero-hour me muavje ki aniyamitaon ka mudda uthaya aur pehle DC ko patra bhi likha tha; CM ne sadan me fact-finding report, 5 adhikariyon ke nilamban aur SIC karwai ka ashwasan diya. Highway kendriya pariyojna hai — shrey sirf mudda uthane aur ashwasan tak.',
    period: '2024-2029',
  },
  {
    title: 'Kumar Waii ke private member prastav ke baad Vidhan Sabha ne human-animal conflict par adhyayan ke liye committee banai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI',
    sourceUrl: 'http://government.economictimes.indiatimes.com/news/governance/arunachal-assembly-forms-panel-to-study-rising-human-animal-conflicts-in-state/129468472',
    date: '2026-03-11',
    note: 'Credit capped: Waii ne 6 Mar 2026 ko private member resolution move kiya; 11 Mar 2026 ko Speaker ne committee banai — Waii sadasya hain. Committee ka gathan sadan ki karwai hai, MLA ka vyaktigat kaam nahi.',
    period: '2024-2029',
  },
];
// REJECT-LOG (kumar-waii, Bameng): 1. Hornbill News (2026-03-08) Waii ne Buddhist monastery ko 46,000 sq m zameen daan — daan + non-whitelist. 2. India Today NE (2025-09-27) Kiren Rijiju ne Seppa me 6 PMJVK projects ka shilanyas — MP ki kendriya yojna, Waii maujood bhar. 3. Arunachal Times (2025-04-12) road/bridge work nirikshan — sirf nirikshan. 4. Arunachal Times (2018-09-15) Bameng gas agency udghatan — pre-term. 5. TOI (2025-05-06) SE N.L. Kamin ke khilaf privilege motion — Waii shikayatkarta hain, aaropi nahi; parinaam lambit. 6. India Today NE (2025-03-12) budget aalochana interview — koi nateeja nahi. 7. Arunachal Times (2024-06-22) election profile interview — koi kaam nahi. Negatives: 0 — karyakaal me koi FIR/naya legal matter nahi; 2022 SIC FIR pre-term, current development nahi (whitelisted me SIC chargesheet me naamdar ki pushti nahi — retry lead).

// ---- East Kameng district batch (researched 2026-10-17) ----
arunachalWorks['hayeng-mangfi'] = [];
// REJECT-LOG (hayeng-mangfi, Chayangtajo): 1. Arunachal Times (2025-08-29) Pasighat school facilities lokarpan — dusre MLA (Tapi Darang) ka event. 2. narendramodi.in/nenews/arunachal24/indiatodayne (2025-09-27) Rijiju ne Seppa me 6 PMJVK projects ka shilanyas — dusre neta ka karyakram. 3. archive.arunachaltimes (2025-11-02) Jollang food fest guest address — samaroh. 4. archive.arunachaltimes (2024-09-08) DNGC alumni felicitation — maujoodgi. 5. arunachaltimes (2026-02-01) APUFEST chief guest — samaroh. 6. arunachaltimes (2025-04-14) Chayang Tajo CO quarters lokarpan ZPC ne kiya — Mangfi ki bhoomika disclosed nahi. 7. Eastern Sentinel (2024-06-24) aag-prabhavit parivaar ko 60 CGI sheets — daan/rahat. 8. indiatodayne (2025-05-03) Pakke river flood project nirikshan WRD mantri ke saath — sirf nirikshan, kendriya yojna. 9. thehillstimes (2025-05) Frontier Highway compensation launch — maujoodgi + non-whitelist. 10. arunachal24 (2026-10) Anganwadi programs me bhagidari — karyakram. 11. nenow (2021-10) all-round development baithak — pre-term. 12. arunachalobserver (2024-07-11) WRD samiksha baithak — sirf baithak, non-whitelist. 13. Eastern Sentinel subordinate-legislation committee chairman — vidhayi bhoomika. 14. YouTube (2025-03-20) APFRA press briefing — non-whitelist. 15. arunachalobserver (2025-04-12) Pongtu Kuh festival guest — non-whitelist + samaroh. 16. arunachal24 (2023-08) Governor visit — pre-term. Negatives: 0 — Seppa-Chayang Tajo NEC road SIC FIR 25 Oct 2022 pre-term, current-term development whitelisted me nahi (SIC chargesheet me naamdar-pushti retry lead).

arunachalWorks['ealing-tallang'] = [
  {
    title: 'Seppa East ke MLA Ealing Tallang ne Seppa district secretariat me creche facility ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Arunachal24',
    sourceUrl: 'https://arunachal24.in/arunachal-creche-facility-inaugurated-in-seppa-secretariat/',
    date: '2026-04-16',
    note: 'DC ki parikalpana; fund: district untied funds (rashi report me nahi); MLA ne vyaktigat lokarpan kiya. Facility office parisar me karmchariyon — vishesh roop se maon — ke bachchon ke liye childcare suvidha hai. Source page par "16 Apr Thursday" — 2026 se match.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (ealing-tallang, Seppa East): 1. IndiaTodayNE (2025-05-11) Seppa concrete road flag-off — fund vivaran nahi. 2. Arunachal Times (2026-02-21) Seppa township road bituminous carpeting — MLA ne sirf appeal ki, lokarpan nahi. 3. Arunachal Times (2026-04-16) videoconference hall lokarpan — fund vivaran nahi. 4. Arunachal24/nenews (2025-09-27) Rijiju dwara PMJVK 6 projects shilanyas — dusre neta ka kendriya karyakram. 5. YouTube (2025-09-09) St. Joseph school foundation stone — non-whitelist. 6. hornbillnews National Panchayat Day 2026 — non-whitelist + samaroh. 7. Arunachal Times Census-2027 self-enumeration — prakriya, kaam nahi. 8. COORDINATOR-DROP: Arunachal Times (2026-03-26) revamped night learning centre virtual lokarpan — DC ki parikalpana + Bharat CSR Network sahyog + Urban Development dept; MLA ne sirf virtual lokarpan kiya — CSR-funded private initiative par ceremonial udghatan, standing rule se reject.

arunachalWorks['mama-natung'] = [];
// REJECT-LOG (mama-natung, Seppa West — Home mantri, seat-only niyam): mantri-niyam se 11: 1. Arunachal Times (2025-09-11) RKM Narottam Nagar filtration plant + quarters, Tirap — seat-bahar + mantri. 2. Northeast Today (2026-08-12) Fire station Seppa + SAATAM app + NDPS handbook — Home dept rajya-kaam. 3. Arunachal Times (2026-02-22) Nyokum Lapang infrastructure, Indigenous Affairs mantri. 4. IndiaTodayNE (2025-07-18) Agriculture College Watte + bridge + WSP nirikshan — mantri + nirikshan. 5. lokmattimes/IANS (2025-07-26) Old Ziro police station + fire fund ghoshna — seat-bahar + ghoshna. 6. Northeast Today (2025-07-30) tribal textbooks — dept rajya-karyakram. 7. IndiaTodayNE (2025-04-29) Nyedar Namlo, Pakke Kessang — dusra zila. 8. Northeast Today (2025-07-16) DigiKameng app — zila-prashasan ka app. 9. sentinelassam (2026-08) Yupia fire station + border statement — seat-bahar. 10. arunachal24 Seva Sankalp Abhiyan, Upper Siang — rajya-abhiyan. 11. MyGov newsletter (2026-03) open library virtual lokarpan — mantri-bhoomika. Anyay rejects: Debeyar Circle + Nere nirikshan (sirf nirikshan); Lellung road/SXavier/RKM/Lumdung/Pakoti/Ningcho/Naraba lake — pre-term; hornbillnews 100 APSSB scholarship ghoshna (non-whitelist + ghoshna); hornbillnews Debeyar Circle HQ lokarpan (non-whitelist — retry lead: DIPR/whitelisted coverage); nationpress delegation (non-whitelist + meeting); arunachal24 zila coordination meeting; West Kameng CM lokarpan maujoodgi; TRIHMS water supply maujoodgi; Frontier Highway compensation maujoodgi; Panchayat Day/EKSWCO samaroh; hornbillnews IRBN court (non-whitelist + dept); Sol Dodum 2022 protest (pre-term). Negatives: 0 — MLA khud kisi FIR me aaropi nahi.

// ---- Pakke Kessang district batch (researched 2026-10-17) ----
// ---- Biyuram Wahge (Pakke-Kessang ST, BJP — Health & Family Welfare Minister, 13 Jun 2024+) works batch (researched 2026-10-17) ----
arunachalWorks['biyuram-wahge'] = [
  {
    title: 'Swasthya mantri Biyuram Wahge ne Seijosa me Passo nadi par bane RCC pul ka udghatan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Eastern Sentinel',
    sourceUrl: 'http://www.easternsentinel.in/news/state/wahge-inaugurates-rcc-bridge-over-passo-river.html',
    date: '2024-06-27',
    note: 'Report me pul ki cost ya fund ka ullekh nahi — fund disclosed nahi. Wahge ne apne do-din ke Pakke-Kessang daure ke dauran udghatan kiya; saath me WRD advisor MLA Hayeng Mangfi, Health Secretary, WRD Secretary aur PWD (WZ) Chief Engineer maujood the. Ye mantri pad sambhalne ke baad unka pehla jila daura tha. Credit udghatan tak capped.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Biyuram Wahge ne Ngoleko gaon me NABARD ke rural haat ka NABARD GM ke saath sanyukt udghatan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2025/07/29/wahge-inaugurates-nabard-rural-haat/',
    date: '2025-07-28',
    note: 'Rural haat NABARD ki rural marketing sahayata ke tehat bana — grameen mahilaon ke liye sthaniya krishi utpad, handloom aur handicraft bechne ka sthal; storage room, office, paani-safai suvidha aur eatery samet. Udghatan Wahge ne NABARD Arunachal Regional GM Damodar Mishra ke saath sanyukt roop se kiya; NABARD DDM, DC aur panchayat neta maujood the. Suvidha NABARD ki pahal hai — credit udghatan tak capped.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (biyuram-wahge, Pakke-Kessang): 1. Arunachal Times (2025-06-30) PTR workers club ka udghatan, Seijosa — Pakke Tiger Reserve/park carve-out; club PTR DFO Satyaprakash Singh ke netritva me bana, Wahge ne khud DFO ko shrey diya; sirf ceremonial udghatan (https://archive.arunachaltimes.in/index.php/2025/06/30/wahge-inaugurates-ptr-workers-club/). 2. Arunachal Times (2025-04-18) PTR entry gate ka udghatan + 9 patrolling bike flag-off, Seijosa — PTR carve-out; ceremonial udghatan (https://archive.arunachaltimes.in/index.php/2025/04/18/wahge-inaugurates-ptr-entry-gate/). 3. Akashvani (2024-11-01) PTR butterfly park ka udghatan — PTR carve-out (https://newsonair.gov.in/arunachal-pradesh-minister-of-health-family-welfare-biyuram-waghe-inaugurates-butterfly-park-at-pakke-tiger-reserve/). 4. India Today NE (2026-10-07) Dikalmukh me pehla official boundary pillar — joint state-Centre exercise; Wahge sirf maujood, vyaktigat lokarpan nahi; CM award ke liye district administration nominate (https://www.indiatodayne.in/arunachal-pradesh/story/arunachals-pakke-kessang-becomes-first-district-to-erect-official-boundary-pillar-along-assam-border-1459819-2026-10-07). 5. Arunachal Times/PTI (2026-02) Seijosa me boundary pillar installation shuru — dono rajyon ke adhikari + Survey of India ka sanyukt exercise; sirf bayan (https://arunachaltimes.in/article/boundary-dispute-pillar-installation-begins-in-pakke-kessang-biswanath-sector). 6. Arunachal Times (2024-02-13) CM Pema Khandu ne Pakke-Kessang me 56 projects ka udghatan kiya — pre-term (Feb 2024) + CM ka karyakram, Wahge sirf maujood (https://arunachaltimes.in/index.php/2024/02/14/cm-inaugurates-56-projects-in-p-kessang/). 7. India Today NE (2025-10-01) CHC Seijosa me free health camp + divyang sahayak upkaran vitaran — transient camp event + daan/rahat vitaran (https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-launches-free-health-camp-under-swasth-nari-sashakt-parivar-campaign-1285077-2025-10-01). 8. India Today NE (2025-09-01) Hara Hapa Prayer Centre, Papum Pare ko Rs 5 lakh anudan — dusri seat (Papum Pare), aur anudan/daan (https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-pradesh-mental-health-grant-hara-hapa-prayer-centre-1270426-2025-09-01). 9. Arunachal Times (2019-09-24) Lemmi CHC ke liye MLALAD se ambulance flag-off — pre-term (https://arunachaltimes.in/index.php/2019/09/24/mla-flags-off-ambulance/). 10. Arunachal Times (2018-11-10) Dissing Passo circle office udghatan + Dipik-Dikhalmukh PMGSY road shilanyas — pre-term (https://archive.arunachaltimes.in/index.php/2018/11/10/circle-office-inaugurated/). 11. Arunachal Times (2018-01-30) 11 kv Leporiang-Khodaso power line commissioning — pre-term (https://arunachaltimes.in/index.php/2018/01/30/pakke-kessang-gets-11-kv-power-line/). 12. Arunachal Times (2026-03-20) Radaso-Diriso road joint survey — sirf survey + fund-maang, koi sanction nahi (https://arunachaltimes.in/article/min-mla-conduct-survey-for-road-connectivity). 13. Arunachal Observer (2026-08-08) 3rd IRBn Seijosa me 'She Rise Cafe' udghatan — non-whitelist outlet + IRBn welfare pahal ka ceremonial udghatan (https://arunachalobserver.org/2026/08/08/waghe-inaugurates-she-rise-cafe-at-3rd-irbn-seijosa/). 14. Arunachal Times/PTI (2025-07-20) Seijosa baadh-prabhavit ilakon ka daura — sirf nirikshan/daura (https://archive.arunachaltimes.in/index.php/2025/07/20/landslides-disrupt-road-network-in-lower-siang/). 15. PTI (2025-08-12) Pasighat me HIV awareness abhiyan, (2025-09-12) doctors hadtaal par ashwasan, (2025-08-01) Delhi drone expo, (2025-08-31) Union mantri se Super Speciality Hospital ki maang — sab rajya-stariya health vibhag faisle/ghoshnaen, seat ke kaam nahi. 16. boroktimes (2024-06) TRIHMS me naya ICU/paediatric unit ka udghatan — karyakaal ki seema par + Naharlagun, dusri seat. 17. India Today NE (2025-01) Boleng (Siang) District Hospital Rs 16 crore ka udghatan — CM ne kiya, dusri seat. 18. Eastern Sentinel (2024-10-29) Aalo Zonal Hospital me LMO plant + 8-bed ICU ka udghatan — West Siang, dusri seat. 19. Eastern Sentinel (2024-10-30) BPGH & TC Pasighat ka nirikshan — dusri seat + sirf nirikshan. 20. Arunachal Times (2025-11-16) AAPSU abhiyan me sanitary pad vitaran — Wahge dwara daan, daan/rahat kaam (https://archive.arunachaltimes.in/index.php/2025/11/16/aapsu-womens-wing-conducts-awareness-drive-for-schoolgirls/). 21. Eastern Sentinel (2025-10-10) Red Run Marathon me mukhya-atithi — mukhya-atithi samaroh + rajya-stariya. 22. northeasttoday.in (2026-08-05) DLMC baithak ki adhyakshata — non-whitelist source + sirf samiksha baithak. NEGATIVES: 0 — MLA ke khilaf koi FIR ya naam-daar adhikari-pusht janch nahi mili; ourneta.com ke anusaar koi criminal case nahi; TRIHMS mahila-mrityu mamla doctors ke khilaf shikayat thi, MLA aaropi nahi; 2023 ZPM disqualification unki party ne dusron ke khilaf dakhil ki thi. Naam-jaal: Kameng Dolo (purva MLA), Atum Welly (purva MLA), Katung Wahge (bade bhai, PWD CE), Hayeng Mangfi (WRD advisor MLA) — inke kaam Wahge ke nahi hain.

// ---- Papum Pare district batch (researched 2026-10-17) ----
// ---- Techi Kaso (Itanagar ST, BJP) works batch (researched 2026-10-17) ----
arunachalWorks['techi-kaso'] = [
  {
    title: 'Itanagar ke MLA Techi Kaso ne Ward No. 10 me Circuit House se Punjabi Dhaba tak link road ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'India Today NE',
    sourceUrl: 'https://www.indiatodayne.in/arunachal-pradesh/video/itanagar-mla-techi-kaso-lays-foundation-stone-for-key-link-road-inaugurates-new-classroom-building-1299218-2025-11-04',
    date: '2025-11-04',
    note: 'Kaso ne vyaktigat roop se shilanyas kiya; IMC Corporator Yukar Yaro aur DC ICR Toko Babu maujood the. Report me road ki lagat ya fund source disclosed nahi hai (disclosure).',
    period: '2024-2029',
    stage: 'shilanyas',
  },
  {
    title: 'Techi Kaso ne Itanagar ke C-Sector sthit GUPS me naye classroom building ka lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'India Today NE',
    sourceUrl: 'https://www.indiatodayne.in/arunachal-pradesh/video/itanagar-mla-techi-kaso-lays-foundation-stone-for-key-link-road-inaugurates-new-classroom-building-1299218-2025-11-04',
    date: '2025-11-04',
    note: 'Ward No. 10 me Kaso ne vyaktigat roop se lokarpan kiya; DC ICR Toko Babu aur IMC Corporator Yukar Yaro maujood the. Report me building ki lagat ya fund source disclosed nahi hai (disclosure).',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (techi-kaso, Itanagar): 1. Arun Khabar (2026-07-01) Itanagar 360 Convention & Dining hub ESS Sector lokarpan — non-whitelist + private operator ko leased commercial facility. 2. YouTube/Arunbhoomi (~May 2026) GUPS Mowb-II Ward 9 school building lokarpan — non-whitelist (retry lead: whitelisted coverage nahi mili). 3. India Today NE YouTube (2025) CM ka Rs 20cr residential complex lokarpan — Kaso sirf maujood. 4. SSMB (2024) CM ke Rs 70cr Naharlagun projects — Kaso sirf maujood. 5. Eastern Sentinel + Arunachal Times (2024-01-08, Monday verified) Chimpu Kongko RCC bridge lokarpan — pre-term. 6. Arunachal Times (2025-01-12) Richi Hapa village udghatan — naya gaon udghatan + 3-point memorandum par sirf 'look into' ashwasan; koi fund/sarkari kaam nahi. 7. Arunachal Times (2021-12-29) GSS Ganga building — pre-term. 8. Hills Times (Jun 2025) Nazareth Baptist Church groundbreaking — non-whitelist + dharmik samaroh. 9. Hills Times (Apr 2025) Nirjuli Circle Office G+2 shilanyas (Rs 3cr CM sanction) — non-whitelist (retry lead). 10. India Today NE (2025-04-20) NH-415 par DC ke khilaf aarop — sirf aarop, koi dastavezi nateeja nahi. 11. Eastern Sentinel (2025-04-23) ICYA vs DC Potom — political war of words; Kaso aaropi nahi. 12. Arun Khabar/Hornbill/Observer (Sep 2026) Senki View bridge nirikshan — sirf nirikshan. 13. Arun Khabar (2026-06-26, Friday verified) Sinkey River RCC bridge Police Colony–E&S Colony lokarpan — non-whitelist (retry lead; vyaktigat lokarpan, whitelisted coverage nahi mili). 14. Echo of Arunachal (undated) GMS Niti Vihar classroom lokarpan with DC — non-whitelist. 15. Nenow.in (~2021) GHSS Ganga classroom+teachers quarter — pre-term. 16. dailyimphalnews/themileage (2026-09) KISNA jewellery showroom — commercial showroom, non-whitelist. 17. YouTube/nenews (2026-05-29) CM ka SEOC/SDMA shilanyas — Kaso sirf maujood. 18. Echo of Arunachal (2025-08) housing Phase-II shilanyas (Rs 80cr) — CM ne kiya, Kaso maujood, non-whitelist. 19. Arunachal Times (2025-09-24) SPRTC/DPRTC lokarpan — mantri Tasing ne kiya, Kaso maujood. 20. Arunachal Times (2025-10-14) KKSV Onam — sanskritik samaroh, mantri Raja ne udghatan kiya. 21. India Today NE (2025-08-29) APPSC HQ lokarpan — CM ne kiya, Kaso maujood. 22. Arunachal24 ATI complex — CM ne kiya, Kaso maujood. 23. Arunachal Observer (2024-03-06) Nirjuli school upgradation shilanyas — pre-term (Mar 2024). 24. Arunachal Times (2025-02-04) LISA/NGDRS portal launch — mantri Raja ne kiya, Kaso maujood. 25. Arunachal Times (2025-11-19) Tadar Lapang (TACS clan cultural centre) shilanyas — fund undisclosed, clan-sangathan ka nij project, samaroh context. 26. Arun Khabar (2026-09-29) Seva Sankalp Abhiyan chief guest — samaroh, non-whitelist. 27. Arun Khabar GHSS Nirjuli building — Kaso sirf Guest of Honour + non-whitelist. 28. Arunachal Times 2020/2018/2017 MLALAD stories — sab pre-term. 29. Arunachal Times (2018-09-04) Kaso ne Tenzing Norbu ke khilaf FIR ki — Kaso shikayatkarta (aaropi nahi), pre-term. 30. Arunachal Observer (2024-03-08) ticket-seeking profile — koi kaam nahi. Negatives: 0 — karyakaal me Kaso ke khilaf koi FIR/case nahi; 2024 affidavit me 0 criminal cases declared.
// ---- Nabam Vivek (Doimukh ST, PPA) works batch (researched 2026-10-17) ----
arunachalWorks['nabam-vivek'] = [
  {
    title: 'Doimukh MLA Nabam Vivek ne Taraso circle ke Bormai gaon me Nabam Runghi Cricket Ground ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2025/02/22/mla-inaugurates-nabam-runghi-cricket-ground/',
    date: '2025-02-18',
    note: 'Ground MLA ke MLALAD fund (FY 2024-25, Rs 3 crore/seat) se bana; zameen Nabam Runghi ne jeevan-kaalin daan ki thi. MLA (Arunachal Cricket Association ke secretary bhi) ne aage ke vikas ke liye aur fund dene ka ashwasan diya.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Doimukh MLA Nabam Vivek ne Sangdupota circle ke Gunku Khamir me naye Panchayat Bhavan ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2025/06/19/mla-inaugurates-panchayat-bhavan/',
    date: '2025-06-18',
    note: 'Bhavan RGSA (Rural Governance and Self-Government Act) fund, FY 2024-25 se bana; District Panchayat Development Office, Yupia ne implement kiya (DIPRO report). MLA ne Nyishi parampara ke samman me panchayat bhavanon ko \'Panchayat Lapang\' naam dene ka prastav diya.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Doimukh MLA Nabam Vivek ne Rose Panchayat Segment ke Sopo Health and Wellness Center ko ambulance saunpi aur naye parking shed ka lokarpan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2024/08/24/health-and-wellness-center-sopo-gets-ambulance-and-parking-shed/',
    date: '2024-08-23',
    note: 'Ambulance NEEPCO Pare Hydro Project ne CSR ke tahat di (HoP Sania Ngurang ne saunpi); MLA ne vyaktigat roop se flag-off kiya aur parking shed ka lokarpan kiya. Parking shed ka fund report me disclosed nahi. DMO Dr Rina Ronya, PRI members maujood the (DIPRO report).',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Doimukh MLA Nabam Vivek ne Assembly me Banderdewa ke tourism and hotel management institute ke nirman me deri ka mudda uthaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/mla-seeks-early-establishment-of-tourism-hotel-mgmt-institute',
    date: '2026-03-10',
    note: 'Credit capped — ye mantri-ashwasan ka dastavej hai, kaam ka nateeja nahi. Tourism Minister PD Sona ne Assembly me kaha: sthaniya rukavatein door hone par sarkar fund degi aur institute jaldi shuru hoga. Article me sirf \'10 Mar, Tuesday\' likha hai — 2026-03-10 (Tuesday) se match; date anumaanit. Building 2014 se adh-ban rahi hai.',
    period: '2024-2029',
  },
];
// REJECT-LOG (nabam-vivek, Doimukh): 1. IndiaTodayNE (2025-09-19) Doimukh CHC X-ray unit, SOST Centre, Viral Hepatitis Treatment Centre ka lokarpan — MLA ne Papum Pare DC ke saath lokarpan kiya, lekin report me fund ka koi ullekh nahi (fund vivaran nahi = standing precedent se reject; RETRY lead: DIPR/whitelisted coverage jisme fund disclosed ho). 2. Arunachal24 (2025-09-05) 'Haakum Hapa Nam' 125-seat auditorium, NSCB Awasiya Vidyalaya Yupia — MLA ne lokarpan kiya, District Administration ne banwaya, lekin fund disclosed nahi (RETRY lead: DIPR). 3. hornbillnews (2026-05-08) RGU Doimukh Honey Testing Laboratory ka lokarpan (National Bee Board funded, NECTAR implemented) — non-whitelist source (RETRY lead: whitelisted coverage). 4. Arunachal24/sentinelassam (2026-02-26) FLN Centre Doimukh — CM Pema Khandu ne lokarpan kiya; MLA ko sirf shrey mila, vyaktigat lokarpan nahi (CM ka karyakram). 5. newsmantra/sarkaritel/psuconnect (2026-06-22) NTPC Bongaigaon Rs 1.80 crore CSR VKV Balijan — CSR samaroh me mukhya-atithi; non-whitelist bhi. 6. IndiaTodayNE (2025-02-07) Kimin central jail nirikshan — Home mantri ke saath sirf nirikshan. 7. Arunachal24/IndiaTodayNE (2025-02-24) Deepak Nabam Living Home — CM Khandu ka karyakram; MLA sirf maujood. (Naam-jaal: Deepak Nabam philanthropist hain, MLA nahi.) 8. Arunachal Times (2024-07-11) circle offices me Wi-Fi — sirf ghoshna, completion ki post-event report nahi. 9. Arunachal Times (2026-03-20) Radaso-Diriso road survey — Health mantri ke saath sirf survey + fund-maang. 10. Arunachal Observer (2026-09-15) PMGSY training — mukhya-atithi samaroh + scheme sanction ki ghoshna. 11. ThePrint/IndiaTodayNE (2026-10-14) Assam-Arunachal border regional committee — MLA sirf delegation me maujood. 12. IndiaTodayNE (2026-10-10) MP Tai Tagak institutional visit — MLA delegation me maujood. 13. archive.arunachaltimes (2025-09-17) 'Arogya Dhaam' udghatan — mantri ka karyakram, MLA sirf maujood. 14. Eastern Sentinel (2025-09-25) Kimin block sarkari school inspection — sirf nirikshan. 15. ThePrint/newsdrum (2024-06-22) PTI interview border priorities — sirf ghoshna; dono non-whitelist. 16. YouTube (2026-04) 'Nabam Vivek on CBI Probe' — PPA president ke roop me bayan; na kaam na negative. NEGATIVES: 0 — nationpress (2026-10) ACA court-stay story me ACA president-chunav vivad hai; MLA par koi FIR ya naam-daar aarop nahi (oneindia criminal-cases list me 0 cases), isliye negative criteria me nahi aata. Naam-jaal: Nabam Rebia (MP), Nabam Tuki (purva CM), Nabam Tado (INC candidate), Nabam Runghi (bhoomidaata) — inke kaam Vivek ke nahi hain; seat 'Doimukh (ST)' se pahchaan pakki ki gayi.
// Ratu Techi — Sagalee (ST), BJP (nirvirodh, 2024). Researched 2026-10-17.
// Halafnama uplabdh nahi (ADR analyze nahi kar paya); BIO LEAD parent ko FINAL REPORT me diya gaya.

arunachalWorks['ratu-techi'] = [
  {
    title: 'Sagalee ke Ratu Techi ne Balapu ke Government Upper Primary School ke naye RCC bhavan ka udghatan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2024/08/09/mla-inaugurates-new-school-bldg/',
    date: '2024-08-07',
    note: 'Dateline "BALAPU, 8 Aug" aur event "Wednesday" (7 Aug 2024) — date event se li gayi. Sagalee MLA Ratu Techi ne Balapu (Papum Pare) ke Government Upper Primary School ke naye RCC bhavan ka udghatan kiya; saath me Health & Wellness Centre ka daura bhi kiya. School building ka fund-srot report me darj nahi — MLA ki bhoomika nirmaan nahi, keval udghatan. MLA ne Balapu HWC ke footpath ke liye Rs 1,50,000 dene ka ashwasan diya (ghoshna matra, vitaran ki report nahi). ZPC Nabam Yakum, ADC Higio Yame, DDSE Tana Tagu Tara bhi maujood the. DIPRO report.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Sagalee ke Ratu Techi ne Papum Pare shiksha vibhag aur Adhyan Foundation ke beech school-management MoU par hastakshar kiye',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2024/09/27/p-pare-edn-dept-inks-mou-with-adhyan-foundation/',
    date: '2024-09-26',
    note: 'Dateline "SAGALEE, 26 Sep" (2024). Papum Pare shiksha vibhag ne Mumbai-based Adhyan Foundation ke saath Sagalee block ke sarkari schools me school-management activities ke liye MoU sign kiya; signatories me Sagalee MLA Ratu Techi bhi the. Foundation teachers, SMC members, CRCC aur BRCCs ke liye capacity-building/training programmes chalayegi; MLA ne training ki logistic costs khud finance karne ki baat kahi — source me MLALAD ya sarkari fund ka ullekh nahi, isliye fund MLA ki vyaktigat pahal ke roop me disclosed. DIPRO report.',
    period: '2024-2029',
    stage: 'kaam-shuru',
  },
  {
    title: 'Sagalee ke Ratu Techi ne Tani-Happa (New Sagalee) me Kasturba Gandhi Balika Vidyalaya ke do-manzila bhavan ka udghatan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2024/10/09/techi-inaugurates-kgbv-building-in-tani-happa/',
    date: '2024-10-07',
    note: 'Dateline "SAGALEE, 8 Oct" aur event "Monday" (7 Oct 2024) — date event se li gayi. Sagalee MLA Ratu Techi ne Tani-Happa (New Sagalee) me Kasturba Gandhi Balika Vidyalaya (KGBV) ke do-manzila bhavan ka udghatan kiya; school Arunachal Farmers Development Society (NGO, chairman Tai Kanu) chala rahi hai. Bhavan ka fund-srot report me darj nahi — MLA ki bhoomika keval udghatan. Memorandum ki maange (teachers quarter, paani, school bus, boundary/retaining wall) par MLA ne line departments se baat ka ashwasan diya (ghoshna matra). ZPC Nabam Yakum aur DDSE Taba Tagu Tara bhi maujood the. DIPRO report.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Sagalee ke Ratu Techi ne Yallang gaon me Van Dhan Vikas Kendra Cluster (VDVKC) ka udghatan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2024/10/09/techi-inaugurates-kgbv-building-in-tani-happa/',
    date: '2024-10-07',
    note: 'Usi din ke karyakram me (date entry 3 jaisi) MLA Ratu Techi ne ZPC Nabam Yakum aur PHE&WS EE Debia Padang ke saath Sagalee circle ke Yallang gaon me Van Dhan Vikas Kendra Cluster (VDVKC) ka udghatan kiya. Ye cluster Mate Dane Model Cluster Federation se jude 912 sadasyon ko cover karega (Sagalee aur Parang circle); minor forest products aur krishi/bagwani utpadon ke liye primary food processing aur value-addition suvidhaon ke zariye skill-upgradation aur capacity-building training dega. Fund-srot report me darj nahi — MLA ki bhoomika keval udghatan. DIPRO report.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Sagalee MLA Ratu Techi ko Mohali court ne cheque bounce case me 2 saal ki saza aur Rs 5.55 crore ka jurmana sunaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'India Today NE',
    sourceUrl: 'https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-bjp-mla-among-four-jailed-for-2-years-in-cheque-bounce-case-1228346-2025-06-13',
    date: '2025-06-11',
    note: 'Report "Wednesday" ko faisle ki baat karti hai (publication 13 Jun 2025 — Wednesday = 11 Jun 2025; date disclose ki gayi). Mohali ke Judicial Magistrate First Class Abhay Rajan Shukla ne Section 138, Negotiable Instruments Act ke tahat Ratu Techi (Sagalee MLA; pehle TK Engineering Consortium Pvt Ltd ke Managing Director), Tara Techi, Julli Techi aur PK Roy ko 2 saal ki saza aur Rs 5.55 crore ka jurmana sunaya. Complaint Kulwinder Singh Grewal (designated partner, GTC-M-TRADEZ LLP, Morinda, Ropar) ne counsel Tejwinder Singh Gill ke zariye dayar ki thi — aarop tha ki nirmaan samagri ke badle diye gaye Rs 50 lakh ke post-dated cheque 2020 me do baar "insufficient funds" se dishonoured hue; case COVID-kaaleen Assam highway projects se juda bataya gaya. Aacharan pre-term (2020) hai, lekin dosh-siddhi wartaman karyakaal (Jun 2025) me hui — isliye legal development ke roop me darj. Jawab: MLA ke bhai Er Techi Totu ne ise business rivalry ka natija aur image kharab karne ki koshish bataya; mamla subjudice batakar saboot court me pesh karne ki baat kahi; TK Engineering ke najdeeki sutron ne MoUs aur byaaj/fake bill-cheque vivad ka dawa kiya. Report ke mutabik mamla higher courts me challenge hone ki ummeed hai — appeal ke parinaam ki report uplabdh nahi. (Arunachal24, Hindustan Times aur TOI ne bhi dosh-siddhi ki pushti ki hai.)',
    period: '2024-2029',
  },
];
// REJECT-LOG (ratu-techi, Sagalee): 1. Smart classrooms, Gai village (15 Nov 2024, indiatodayne.in) — HDFC Bank CSR funded, Citizens Foundation NGO implemented; MLA ne sirf udghatan kiya — CSR samaroh reject. 2. MRHRU/CHC Sagalee progress review (19-20 Sep 2024, Arunachal Times + arunachal24) — sirf nirikshan/samiksa aur adhikariyon ko nirdesh; koi lokarpan/shilanyas nahi. 3. Zero/low-enrolment school merger consultative meeting (4 Sep 2024, Arunachal Times) — sirf meeting; merger ka faisla state government ka; koi dastaveji nateeja nahi. 4. School inspection tour + education reform proposals (itanagartimes.com) — non-whitelisted + sirf nirikshan/prastav. 5. Fire victim aid, Labiya Happa/Toru circle (10 Apr 2025, abotanitv.in) — non-whitelisted + daan/rahat kaam. 6. Rijiju ke PMJVK 5 projects ke foundation stones, Keyi Panyor/Papum Pare (28 Sep 2025, PTI/taxtmi) — kendriya mantri ka karyakram; Sagalee (Bokoriang-II Panchayat) ke projects par Ratu Techi ka ullekh nahi — dusre neta ka karyakram. 7. MP Tai Tagak ka MPLADS Rs 15 lakh model anganwadi ghoshna, Doimukh/Sagalee (Oct 2026, arunachal24) — MP ke MPLADS ka kaam + sirf ghoshna. 8. Class X toppers (2021-2023) felicitation KGBV karyakram me — samaroh, standalone entry nahi (entry 3 ke event ka hissa). 9. Balapu HWC footpath ke liye Rs 1.5 lakh ka ashwasan — sirf ghoshna (entry 1 ke note me disclosed). 10. Techi Kaso (Itanagar MLA) ke events — pehchan-jaal check: "Techi" common naam hai; Techi Kaso alag vyakti (Itanagar seat); unke events ko confuse nahi kiya. 11. Adhyan Foundation MoU image-date confusion (Eastern Sentinel page par 2021 ki image) — Arunachal Times archive date 27 Sep 2024 se in-term pushti hui; MoU entry ke roop me accept (entry 2).
// COORDINATOR RETRY-LEADS: A. Sagalee ke liye MLALAD (FY 2024-25: Rs 3 crore/seat; FY 2025-26 se Rs 4 crore/seat) ke tahat asal vitaran/work-order/sanction ki koi itemized media/sarkari report abhi tak nahi mili — DIPR Arunachal ke press releases ya DC Papum Pare ke records check karein. B. CHC Sagalee ke tahat Model Rural Health Research Unit (MRHRU) ka review Sep 2024 me hua tha; agar iska post-event udghatan/lokarpan report mile to entry banegi. C. Cheque bounce case me higher-court appeal ka parinaam — future legal development par negative update lagega.

// ---- Keyi Panyor district batch (researched 2026-10-17) ----
arunachalWorks['toko-tatung'] = [
  {
    title: 'Yachuli ke MLA Toko Tatung ke sawal par IPR mantri ne Electronic Media Advertisement Policy 2020 ko chhah mahine me lagu karne ka ashwasan diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'India Today NE',
    sourceUrl: 'https://www.indiatodayne.in/arunachal-pradesh/video/arunachal-govt-assures-electronic-media-policy-implementation-in-6-months-ncp-mla-1182470-2025-03-11',
    date: '2025-03-11',
    note: 'Budget Session me Tatung ne tarankit (starred) sawal uthakar Electronic Media Advertisement Policy 2020 ke kriyanvayan na hone ka mudda uthaya — keval print media ko sarkari vigyapan mil rahe the, electronic/digital upekshit the. IPR mantri Nyato Dukam ne 6 mahine me niti lagu karne ka ashwasan diya. Niti vaastav me lagu hui ya nahi — report me nahi darj; credit capped.',
    period: '2024-2029',
  },
];
// REJECT-LOG (toko-tatung, Yachuli): COORDINATOR-DROP — EDC udghatan entry girai (IIE Guwahati sanchalit kendriya program, MLA ka role keval udghatan — ceremonial-only). Worker ke 25 rejects (admission/mess-shulk ghoshnaen, workshops, Bhutan summit bhashan, Rijiju PMJVK shilanyas, aadi) fragment ap_worker_tokotatung.ts me darj.

// ---- Lower Subansiri district batch (researched 2026-10-17) ----
arunachalWorks['hage-appa'] = [
  {
    title: 'Ziro-Hapoli ke MLA Hage Appa ne Kalung ZPC me Panchayat Bhavan aur Jal Jeevan Mission ke tahat bane community well ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2025/07/22/appa-inaugurates-panchayat-bhavan-community-well/',
    date: '2025-07-21',
    note: '21 Jul 2025 (Somvaar — dateline se; article 22 Jul ko publish) ko Kalung Ranti, 8th Kalung ZPC me MLA Hage Appa ne Panchayat Bhavan ka vyaktigat lokarpan kiya — DIPRO report; DC Oli Perme bhi maujood thi. Bhavan sthaniya prashasan, panchayat baithakon aur samudayik karyakramon ke liye hai. Community well Jal Jeevan Mission ke tahat bana — Subu gaon ke Subu Sukung prakritik srot se jodkar (Ziro valley ka sabse purana aur saaf srot bataya gaya); sabhi gharon ko saaf peya-jal ka lakshya. Panchayat Bhavan ka fund-srot report me darj nahi hai (disclosure) — MLA ki bhoomika dono ke lokarpan tak seemit. Usi manch par Kalung ZPM Subu Lento ne kshetra-vikas ka gyapan saunpa.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (hage-appa, Ziro-Hapoli): worker ke 23 rejects — Handloom Marketing Complex shilanyas (Union MoS ne rakha), Cabinet Aapke Dwar (CM), Sadbhavna Mandaps PMJVK (Rijiju), Old Ziro Police Station (Home Minister), Ziro Literary Festival, DMFT approvals (DC-chaired), aadi — fragment ap_worker_hageappa.ts me darj.

// ---- Kra Daadi district batch (researched 2026-10-17) ----
arunachalWorks['balo-raja'] = [
  {
    title: 'Palin ke Balo Raja ne Palin ke BG Higher Secondary School me New Age Learning Centre (NALC) ka udghatan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2024/10/09/min-inaugurates-nalc-in-palin/',
    date: '2024-10-08',
    note: '8 Oct 2024 (Tuesday) ko Balo Raja ne vyaktigat roop se Kra Daadi zila mukhyalay Palin ke BGHSS me New Age Learning Centre ka udghatan kiya; DC Sunny K Singh aur sabhi HoDs maujood the. NALC erstwhile Club 2021 Public Library (jo 2023 me district ke APSSB recruits ne public coordination se bina sarkari fund ke banayi thi) ke upgrade se bana; DC ke anusar fund untied fund aur ISSE (Integrated Scheme for School Education) se aaya. Mantri ne NALC ko guitars aur knitting/painting tools vyaktigat roop se daan kiye. (DIPRO report)',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
arunachalWorks['jikke-tako'] = [
  {
    title: 'Tali ke Jikke Tako ne Hakpuk gaon ki Vibrant Village Programme (VVP) wali sadak ka udghatan kiya — gaon ko pehli baar road connectivity mili',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/mla-inaugurates-road-under-vvp',
    date: '2026-01-18',
    note: 'Tako ne vyaktigat roop se udghatan kiya; sadak Vibrant Village Programme (kendriya yojna) ke tahat bani — fund-srot VVP ke roop me disclosed. Article ki dateline "TALI, 18 Jan" hai aur event "Sunday" ka bataya gaya hai — 18 Jan 2026 (Sunday) se match, isliye date dateline se li gayi. Usi daure me MLA ne naye bane projects ka nirikshan aur sarkari aawaas jaisi infrastructures ka shilanyas bhi kiya — un projects ka vivaran/fund report me nahi, isliye standalone entry nahi bani.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (balo-raja, Palin): mantri-niyam — Septage Treatment Plant Chimpu, Donyi Polo airport terminal nirikshan, sanitation vehicles flag-off, aviation summit, SHS 2026 prep, Assam-Arunachal border committee, 132KV transmission meeting — sab vibhagiya kaam; pre-term rejects bhi; worker ke 23 rejects fragment ap_worker_baloraja.ts me.
// REJECT-LOG (jikke-tako, Tali): pre-term rejects (2020 police barrack, 2021 Palin oxygen plant, 2022 Kumey-bridge nirikshan, CM road event Feb 2022, ADC office 2020); dusre neta (CM Pipsorang daura Jan 2025, Dy CM Nyokum Feb 2026, Governor Sep 2024); sirf baithak (Aug 2024 HoD review); samaroh (DPCCT Gurukul meet, Air-Gun Museum Palin — non-whitelist) — fragment ap_worker_jikketako.ts me.

// ---- Kurung Kumey district batch (researched 2026-10-17) ----
// ---- Tai Nikio (Nyapin ST, BJP) works batch (researched 2026-10-17) ----
arunachalWorks['tai-nikio'] = [];
// REJECT-LOG (tai-nikio, Nyapin): 1. ThePrint (PTI, 2025-01-11) 'Arunachal CM calls for bottom-to-top planning' — Sankalp Samaroh Sangram me CM Pema Khandu ne Nyapin-Sangram segment ke liye Rs 20.45 crore ki 5 yojanaon ki sanction ghoshit ki, aur Tai Nikio ke 9-point memorandum par 'positively consider' ka ashwasan diya. REJECT: sanction CM ki ghoshna hai; MLA ki vyaktigat bhoomika sirf memorandum (maang) — uska dastaveji nateeja nahi (RETRY lead: DIPR/whitelisted coverage jisme itemized sanction list aur memorandum se seedha link ho). 2. Arunachal Times (KOLORIANG, 11 Jan — PR reps oath-taking, Jan 2026) — ZPC Bake Yama ne support ke liye Tai Nikio ka naam liya; sirf maujoodgi/samarthan ullekh, koi kaam nahi. 3. archive.arunachaltimes.in (2024-06-26) 'State BJP observes Black Day' — party samaroh me upasthit; political event attendance. 4. arunachaltimes.in/article/state-assembly-passes-three-amendment-bills — Assembly question hour me PMGSY roads restoration par MLA ka quote/sawaal; sirf prashn, mantri-ashwasan ya nateeja nahi. 5. archive.arunachaltimes.in (2024-04-13) 'Battle between two former technocrats in Nyapin' — pre-term (Apr 2024, karyakaal Jun 2024 se) chunav coverage. 6. indiatodayne.in (2024-03-26) nomination filing — pre-term chunav story. 7. indiatodayne.in (2025-09-07) Pani Taram (Koloriang MLA) ne Mangdo bridge + Parsi Parlo police station ka lokarpan kiya — dusre neta (Koloriang seat) ka kaam; Tai Nikio se sambandh nahi. 8. archive.arunachaltimes.in (2022-11-22) NES member Tai Nikio ko Achiever Award — pre-term award, vikas-kaam nahi. 9. indiatodayne.in (2025-06-12) POCSO case me giraftar 'Tai Shiva' (APST Forum president) — NAAM-JAAL: Tai Shiva alag vyakti hain, Tai Nikio nahi. 10. Election result lists (TOI/news18/oneindia, Jun 2024) — sirf parinam, karyakaal ka kaam nahi. NEGATIVES: 0 — halafnama (2024) me 5 pending cases (SIC (VIG) Itanagar: FIR 17/2018, complaints 2018, SIC(Vig) PS C/NO. 02/2021, enquiry 2016; IPC 409/420/467/471/120B/506 + PC Act) sab pre-term hain; myneta status: charges framed 'No'. Jun 2024 ke baad in mamalon me ya kisi naye mamle me koi FIR, giraftari, chargesheet, dosh-siddhi ya adhikari-pusht janch whitelisted established media me nahi mili. Naam-jaal se bachne ke liye seat 'Nyapin (ST)' se pahchaan pakki ki gayi. RETRY-LEADS: (a) DIPR Arunachal / Arunachal Times me CM ki Rs 20.45 crore sanction list itemized mile to memorandum-credit entry possible; (b) MLALAD vitaran/work-order ki whitelisted report kabhi mile to add karein — is run me koi valid MLALAD report nahi mili.

// ---- Pani Taram (Koloriang ST, BJP — 21st Koloriang AC, Kurung Kumey) works batch (researched 2026-10-17) ----
// 5 entries (Jun 2024+ post-event reporting, whitelisted): Digi Kaksha Nikja lokarpan (Arunachal Times, Aug 2024),
// Kurung Bridge reopening NHIDCL restoration (IndiaTodayNE, Aug 2024), Mangio-Mangdo bridge + Parsi Parlo police
// station lokarpan (IndiaTodayNE, Sep 2025), NH-415 Package B Zero Hour CM-aashwasan (Arunachal Times, Mar 2025).
// NEGATIVES: 0 — 2024 halafname ke 3 pending cases (2 SIC (VIG) Itanagar bhrashtachar mamle IPC 120B/420/409/506,
// 1 Koloriang PS case 147/149/447/186/109) ka halafnama-disclosure akele negative nahi; Jun 2024 ke baad inme ya
// kisi naye mamle me koi FIR, giraftari, chargesheet, dosh-siddhi ya naam-daar adhikari-pusht janch whitelisted
// media me nahi mili. 2020 ki Arunachal Times crime-branch list pre-term hai; myneta.info sirf affidavit data hai.
// (Naam-jaal check: Odisha ke Pradeep Panigrahi vigilance probe wali khabrein alag vyakti hain.)
arunachalWorks['pani-taram'] = [
  {
    title: 'Pani Taram ne Nikja ke Government Secondary School me Digi Kaksha integrated learning centre ka udghatan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2024/08/30/ghss-nikja-gets-integrated-learning-centre/',
    date: '2024-08-28',
    note: '28 Aug 2024 (Wednesday) ko Koloriang MLA Pani Taram ne Kurung Kumey zila ke Govt Secondary School Nikja me integrated learning centre (Digi Kaksha smart class, BALA model) ka vyaktigat roop se udghatan kiya. (DIPRO report). Project DC Vishakha Yadav ne spearhead kiya tha — zila-prashasan ki pilot initiative; pilot ko baad me doosre schools me replicate karne ki yojana. Cited report me fund source itemized nahi.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Pani Taram ne NHIDCL dwara restore kiye gaye Kurung Bridge ko formal roop se dobara khol diya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'India Today NE',
    sourceUrl: 'https://www.indiatodayne.in/arunachal-pradesh/video/arunachal-koloriang-mla-reopens-kurung-bridge-near-china-border-after-restoration-1081054-2024-08-28',
    date: '2024-08-28',
    note: '28 Aug 2024 ko Koloriang MLA Pani Taram ne Kurung nadi par Kurung Bridge ka formal reopening kiya. Pul 28-30 Jun 2024 ki baadh/barish me beh gaya tha; NHIDCL ne 58 din me restore kiya (state record). Restoration DC Vishakha Yadav ke netritva me hua, MLA aur DC ne nigrani ki; multi-agency kaam (NHIDCL, RWD, BRO, DDMO, zila prashasan). Restoration ka kharcha kendra agency NHIDCL ne vahan kiya — kendriya suvidha ka vyaktigat lokarpan, fund disclosed.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Pani Taram ne Mangdo gaon me Kumey nadi par Mangio-Mangdo bridge ka udghatan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'India Today NE',
    sourceUrl: 'https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-mla-inaugurates-key-infrastructure-projects-near-indo-china-border-1274001-2025-09-07',
    date: '2025-09-07',
    note: '7 Sep 2025 (Sunday) ki subah Koloriang MLA aur PHED Advisor Pani Taram ne weeklong development tour ke dauraan 21st Koloriang AC me Kumey nadi par Mangio-Mangdo bridge (Mangdo gaon) ka vyaktigat roop se formal udghatan kiya; contractor, agencies aur villagers se baat-cheet. Cited report me fund source disclosed nahi.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Pani Taram ne Parsi Parlo me naye police station ka udghatan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'India Today NE',
    sourceUrl: 'https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-mla-inaugurates-key-infrastructure-projects-near-indo-china-border-1274001-2025-09-07',
    date: '2025-09-07',
    note: '7 Sep 2025 ko Koloriang MLA Pani Taram ne IGP (West Range & Crime) Takhe Ringu ki maujoodgi me Parsi Parlo police station ka vyaktigat roop se udghatan kiya — Kurung Kumey ke upper belt ke liye law-and-order/verification kaam ab sthaniya roop se honge. Cited report me fund source disclosed nahi.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Pani Taram ne Assembly ke Zero Hour me NH-415 Package B (Papu Nallah-Jully) ki dheemi pragati ka mudda uthaya — CM ne executing agency ka contract terminate karne ka aashwasan diya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2025/03/11/no-hope-yet-on-package-b-of-nh-415/',
    date: '2025-03-11',
    note: '10 Mar 2025 ko Assembly ke Zero Hour me Koloriang MLA Pani Taram ne Trans-Arunachal Highway/NH-415 Package B (11.306 km Papu Nallah-Jully trijunction, flyover samet) ki dheemi pragati ka mudda uthaya — contractor Woodhill Shivam deadline miss, contractor terminate karne ki maang. PWD-portfolio-holder CM Pema Khandu ne swayam nirasha jatayi aur aashwasan diya ki ve PWD adhikariyon se baithak karenge aur MoRTH ko Woodhill Shivam ka contract terminate karke nayi firm lane ke liye manane ki koshish karenge. Credit capped — mantri-aashwasan hi dastaveji nateeja hai, asal contract termination report me nahi.',
    period: '2024-2029',
    stage: 'ashwasan',
  },
];
// REJECT-LOG (pani-taram, Koloriang): 1. 'Sans teachers, BJP MLA takes class' (newsarenaindia.com) — non-whitelist portal; aur sirf school nirikshan me padhai, koi nirmaan/lokarpan nahi. 2. Airlift of two injured girls to Naharlagun (IndiaTodayNE, 15 Apr 2025) — rahat/rescue kaam → reject. 3. CM Pema Khandu ka Dud-Dul Tharpa Ling Lhakang udghatan Jamiri (hornbillnews.in, Mar 2026) — Taram sirf attendee; plus non-whitelist. 4. CM ka Water Bill app launch (latestly.com) — Taram PHED Advisor ke roop me upasthit, mere maujoodgi. 5. Nikja smart classroom coverage (arunachalobserver.com, itanagartimes.com) — same event ki non-whitelist coverage; whitelist Arunachal Times istemal ki. 6. Kurung Bridge-Parsi Parlo road 'mission mode' me pursue karne ka ashwasan (IndiaTodayNE, Sep 2025) — sirf ghoshna, reject. 7. Vibrant Village Programme me Koloriang ko Rs 600 crore ka dawa (newsarenaindia) — non-whitelist + sirf interview-dawa/ghoshna. 8. Election result pages (TOI/NDTV) — koi kaam nahi. 9. BJP candidate welcome rally Koloriang (IndiaTodayNE, Mar 2024) — pre-term chunavi. 10. Governor BD Mishra ka Kurung Kumey visit (Eastern Sentinel, 2018) — pre-term + dusre ka karyakram. 11. Ministers team ka Joram-Koloriang 2-lane flag-off (Northeast Now) — Bamang Felix/Taba Tedir ka karyakram, Taram ka zikr nahi + purana. 12. SIC (VIG) cases: 2020 crime-branch list (Arunachal Times archive) pre-term; myneta.info 2024 sirf affidavit — halafnama-disclosure akele negative nahi; Jun 2024+ me koi nayi FIR/giraftari/chargesheet/dosh-siddhi/adhikari-pusht janch nahi mili → negative entry nahi bani.
// RETRY-LEADS (parent ke liye): A. Digi Kaksha Nikja (Aug 2024) ka itemized fund source — DIPRO/DIPR release ya whitelisted me district initiative ka fund breakup check karein; milne par entry-1 ka note update hoga. B. NH-415 Package B contractor termination ka asal status (May 2026 deadline ke baad) — aashwasan par kya hua, whitelisted me post-May-2026 status check karein.

// ---- Kurung Kumey district batch END (5 entries, negatives 0) ----

// ---- Upper Subansiri district batch (researched 2026-10-17) ----
// Note: Nakap Nalo is NOT a cabinet minister in the current Khandu government — he was Tourism/Transport/Civil Aviation minister in the 2019-2024 government but was denied a cabinet berth in the third Khandu government (Deccan Chronicle/PTI, Jun 2024); now advisor to the minister for Disaster Management (PTI via ThePrint, Jun 2024). Minister-niyam lagu nahi hota. Also: the 3 pending SIC cases mentioned in the brief were Pani Taram's (Koloriang), not Nalo's — Nalo's foundation record correctly shows 0 criminal cases (TOI 2024 'Criminal Antecedents: NO' confirmed).
arunachalWorks['nakap-nalo'] = [];
// REJECT-LOG (nakap-nalo, Nacho): 1. 'MLA for action against absentee teachers' (Arunachal Times, 19 Dec 2024, khola-padha) — Daporijo me Nacho seat ki education review meeting; sirf directive + 'tenure education ko dedicate' wali ghoshna; koi lokarpan/shilanyas/sanction nahi. 2. CM ki monsoon-preparedness review meeting (PTI, monsoon 2024) — Nalo Advisor (Disaster Management) ke roop me CM ki meeting me upasthit; CM ka karyakram. 3. Masons ke liye earthquake-resistant construction training valedictory (Northeast Today, Aug 2025) — chief guest, state-level DM program, Nacho seat ka kaam nahi. 4. NDMA mock-exercise orientation meeting, Itanagar (Echo of Arunachal, Sep 2025) — attendee; state-level. 5. SEOC-cum-SDMA office complex foundation stone, Itanagar (nenews, May 2026) — CM ka karyakram, Nalo sirf upasthit. 6. Nah Welfare Society PLA-encroachment daave (freepressjournal/thelogicalindian, 2025) — sirf official confirmation ki baat; koi kaam nahi. 7. Tanga Byaling ka Rijiju-Nalo par hamla (arunachalobserver, Aug 2026) — siyasi bayanbaazi; Nalo kisi mamle me aaropi nahi. 8. 'Nakap Nalo Youth Task Force' free APPSC coaching announcement (YouTube, Sep 2026) — sirf YouTube; whitelisted coverage nahi (retry lead). 9. Hydropower coordination meeting, Daporijo (Arunachal Times, Aug 2025) — mantri Dukam ki meeting; Nalo sirf upasthit. 10. Seva Aapke Dwar + guardian minister review meeting, Daporijo (Arunachal Times, Mar 2025) — mantri Balo Raja aur mantri Dukam ka program. 11. Bailey bridge over Sebar river, Nacho (Arunachal Times, Nov 2021) — pre-term. 12. Nilling helipad udghatan + circle office foundation (Arunachal Times, Apr 2023) — pre-term. 13. Atu Leyu Heritage Centre udghatan, Daporijo (Arunachal Times, Jun 2023) — pre-term. 14. E-challan machines launch, Itanagar (Arunachal Times, Feb 2024) — pre-term + state-level. 15. Pakke Paga Hornbill Festival udghatan, Seijosa (PTI, Jan 2024) — pre-term + samaroh. 16. Election result pages (2024) — koi kaam nahi. 17. myneta.info candidate page — sirf affidavit data. NEGATIVES: 0 — Jun 2024 ke baad koi FIR/giraftari/chargesheet/dosh-siddhi/adhikari-pusht janch whitelisted media me nahi.
arunachalWorks['nyato-dukam'] = [];
// REJECT-LOG (nyato-dukam, Taliha): 1. Govt Sec School Sippi + Govt Sec School Taliha ongoing works ka nirikshan (DIPRO, 26 Jul 2025) — sirf nirikshan/daura. 2. 'Dukam inspects projects' — Taliha me polytechnic, NEC road, ADC office, school ka nirikshan (DIPRO, Dec 2024) — sirf nirikshan. 3. KGBV Lable Moring udghatan (sentinelassam, Apr 2025) — non-whitelist source + charitable-society school. 4. 'MLA donates entire salary to Asha Griha' (boroktimes) — daan + non-whitelist. 5. Pasighat District Emporium udghatan (indiatodayne, Sep 2025) — vibhagiya, Taliha seat nahi. 6. Tulang edible oil unit udghatan, Pasighat (indiatodayne, May 2026) — factory udghatan, vibhagiya. 7. Rongoge Mega Food Park admin block udghatan (onlineage) — non-whitelist + vibhagiya. 8. PM-SETU Industry Consultation Meet, Ziro (easternsentinel) — mukhya-atithi samaroh. 9. IITF New Delhi me Arunachal pavilion udghatan (ThePrint/PTI, Nov 2025) — vibhagiya event. 10. Arunachal Fashion Week 2026 closing (arunachaltimes) — mukhya-atithi. 11. UNI (Oct 2026) SUMP par BJP press conference — state-level political bayan. 12. Yingkiong SUMP violent protest (NDTV/IE, Sep 2026) — Dukam sirf roke gaye logon me; aaropi nahi. 13. AAPSU 80:20 reservation remarks (indiatodayne/arunachal24, Jul 2026) — policy criticism + 12-hour apology demand; koi FIR/janch nahi. 14. Subansiri Upper HEP environmental public hearing, Daporijo (theweek/PTI, Mar 2026) — statutory hearing me upasthiti; kendriya hydro project. 15. DPCCT Gurukuls Annual Meet (arunachal24, Jan 2026) — prastavit Gurukul ke liye sirf ashwasan. 16. Lab-le circle event (Nov 2023) — PRE-TERM + CM ka karyakram, Dukam keval maujood. 17. Menga river collapsed bridge site visit (sentinelassam, Apr 2026) — non-whitelist + nirikshan + BRO mudda. 18. 16 airguns surrendered at Taliha (Arunachal Times, May 2021) — PRE-TERM. 19. BOCW welfare kit vitaran (Arunachal Times, Oct 2020) — PRE-TERM + daan. 20. TAH misappropriation probe (business-standard/PTI, Jul 2019) — NAAM-JAAL: Nyato Rigia (2019 ke Taliha MLA) alag vyakti; pre-term bhi. 21. Arunachal Industrial Policy 2025 par Vidhansabha me mantri ka jawab (newsdrum/PTI, Mar 2026) — state-level policy. 22. Election result lists (2024) — sirf nirvirodh jeet ka parinam. 23. JNV Taliha (Langpa Dagiam) DC inspection (arunachal24, Mar 2026) — Dukam ki koi bhoomika ullekhit nahi. NEGATIVES: 0 — affidavit me 0 cases; Jun 2024 ke baad koi FIR/janch whitelisted me nahi.
arunachalWorks['taniya-soki'] = [
  {
    title: 'Daporijo MLA Taniya Soki ne township ke liye 4.2 mld water supply augmentation project ka shilanyas kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2025/09/27/foundation-stone-for-water-supply-augmentation-laid/',
    date: '2025-09-26',
    note: 'Project lagat Rs 4,946.91 lakhs, NESID fund se; PHE&WS Daporijo division implementing agency. MLA ne Garurijo me apni zameen WTP aur road ke liye muft daan di; DC aur PHE&WS CE maujood the (DIPRO report). MLA ne ise apna dream project aur jile ka sabse bada aisa project bataya.',
    period: '2024-2029',
    stage: 'shilanyas',
  },
  {
    title: 'Daporijo MLA Taniya Soki ne Daporijo thane me CCTV monitoring room ka lokarpan kiya aur 38 strategic locations surveillance me aaye',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2024/12/11/mla-inaugurates-cctv-monitoring-room/',
    date: '2024-12-10',
    note: '38 sthanon par CCTV cameras lagaye gaye; I Love Daporijo digital board ka bhi lokarpan. Current installation ka fund report me disclosed nahi (MLA ne DC ke funds judiciously manage karne ki sarahna ki). MLA ne ashwasan diya ki aane wale mahino me baki township ko MLALAD fund se CCTV coverage me laaya jayega (DIPRO report).',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (taniya-soki, Daporijo): 1. East Siang DPRC building lokarpan, Pasighat (Arunachal Times, Apr 2026) — kshetra ke bahar advisor-bhoomika. 2. SPRC/DPRC Papum Pare, Yupia (IndiaTodayNE, Sep 2025) — mantri ka karyakram, sirf maujoodgi. 3. BJP team inspects development projects, Daporijo (Arunachal Times, Jun 2026) — sirf nirikshan. 4. PMGSY Sippi-Nilling road shilanyas (Arunachal Times, Dec 2022) — pre-term. 5. Town improvement initiative launch (Arunachal Times, Aug 2023) — pre-term. 6. BWS felicitation achievers (Arunachal Times, Jul 2026) — mukhya-atithi samaroh. 7. Seva Sankalp Utsav traditional sports (arunachal24, Oct 2026) — mukhya-atithi. 8. Gandhi Jayanti gram sabha Poma (Oct 2026) — maujoodgi + maang. 9. Tirang Yatra Daporijo (Arunachal Times, May 2025) — bhagidari. 10. Belu Batam model village (Arunachal Times, Nov 2022) — pre-term. 11. Gandhi Market fire victims relief (Arunachal Times, Mar 2021) — pre-term + rahat-vitaran. 12. Flood airlift support, Nilling/Lingdam (arunachal24, Jul 2026) — district administration ka operation. 13. Clean-Daporijo appeals (Arunachal Times, 2026) — sirf appeal. 14. Garbage mgmt consultation (echoofarunachal) — non-whitelist. 15. Mantri Dukam visits Daporijo institutions (Arunachal Review, Sep 2024) — mantri ka daura. 16. CM inaugurates Nilling admin circle (ANI, Jan 2024) — CM ka karyakram. 17. ATM inauguration Medical Colony (Arunachal Times, Jun 2021) — pre-term. 18. Uniforms to labourers (Arunachal Times, Aug 2021) — pre-term. 19. Sigin river bridge inspection (Arunachal Times, Jul 2023) — sirf nirikshan. 20. All Arunachal Priest Welfare Society foundation day (YouTube) — YouTube + mukhya-atithi. 21. Panchayat elections interview (YouTube) — YouTube. 22. Assembly bill charcha Gaon Bura (2023) — pre-term. NEGATIVES: 0 — coordinator ne worker ka FIR-negative giraya: FIR (7 Mar 2024) tenure (Jun 2024) se 3 mahine pehle ki hai, aarop 2009-10 ke karyakaal ke hain, uske baad koi legal development nahi, 2024 affidavit me 0 cases — 'pre-term case with no current development = reject'. Retry-lead: SIC/follow-up aaye to dobara evaluate karein.
arunachalWorks['rode-bui'] = [
];
// REJECT-LOG (rode-bui, Dumporijo): 1. 'Bui takes stock of CSS in Dumporijo' (Arunachal Times, Nov 2024, khola-padha) — sirf CSS nirikshan/review. 2. Menga hydro project coordination meeting (Arunachal Times, Oct 2025) — NHPC pariyojna par advocacy; vyaktigat lokarpan nahi. 3. 'Bui meets Rijiju' Mebigeko-Gerukhamukh road maang (Arunachal Times, Aug 2024) — sirf maang. 4. 'Bui meets NHPC dir' SUHEP (Arunachal Times, Sep 2024) — sirf maang/prastav. 5. 'MLAs inaugurate Doyom Ao Lwwnv' (Arunachal Times, Nov 2022) — pre-term + samaroh. 6. MLA donates Bolero pickup to electrical division (Arunachal Times, khola-padha) — daan. 7. 'Defunct school to reopen soon' (Arunachal Times, khola-padha) — samudaayik revival, sirf bayan. 8. Para Games kits launch (Arunachal Times, Oct 2024) — sports samaroh. 9. Dree festival (Arunachal Times, 2026) — mukhya-atithi. 10. Yoga Day programme (VKV Kuporijo, Jun 2026) — samaroh. 11. BJP membership abhiyan badhai (arunachal24, Oct 2024) — party activity. 12. SEOC foundation stone, Itanagar (nenews, May 2026) — CM ka karyakram. 13. TCS Secretariat Heritage Centre lokarpan, Daporijo (Akashvani, Oct 2025) — Dy CM ka karyakram. 14. PMGSY road/bridge inaugurations, Dumporijo (Arunachal Times, Dec 2022) — pre-term. 15. Election result pages (2024) — koi kaam nahi. NEGATIVES: 0 — affidavit ke 2 purane mamle (51/2018, 64/2006) par Jun 2024 ke baad koi legal development whitelisted me nahi. (VKV Kuporijo, Jun 2026: Bui Home Minister ke Advisor bane — institutional role, kaam nahi.)
// ---- Upper Subansiri district batch END (2 entries, negatives 0) ----

// ---- Kamle district batch (researched 2026-10-17) ----
arunachalWorks['rotom-tebin'] = [];
// REJECT-LOG (rotom-tebin, Raga): 1. The Arunachal Times, 'Dollungmukh me PWD sub-division banane ka sarkari aadesh' (30 Jun 2025, dateline) — coordinator-DROP: aadesh sarkari hai par MLA ki bhoomika sirf uska swagat karne ki thi (unhone khud shrey CM aur purv MLAs ko diya), koi dastaveji pahal nahi — swikriti-stage me credit nahi banta. 2. PIB (3 May 2025) Khelo India hall — kendriya mantri ne inaugurate kiya, MLA maujoodgi-tak. 3. The Arunachal Times (9 Jun 2025) Dolum IAF firing range memorandum — sirf maang, nateeja nahi. 4. indiatodayne (2 Aug 2025)/Arunachal Times (22 Apr 2026) Kamala HEP meetings — sirf charcha/maang, NHPC kendriya. 5. The Arunachal Times (14 Jun 2025) DMO ko medical staff nirdesh — nirdesh matra. 6. The Arunachal Times (13 Jun 2025) flood daura + rahat vitaran — daura/rahat. 7. arunachal24 flood review meeting — maujoodgi-tak. 8. The Arunachal Times (29 Jun 2025) land-donor meeting — SDO ki adhyakshata, MLA ki bhoomika nahi. 9. Eastern Sentinel (7 Oct 2026) Sankalp Diwas — mukhya-atithi samaroh. 10. Governor KT Parnaik ki Raga yatra — dusre neta ka karyakram. 11. arunachalobserver (26 Feb 2025) VP Dhankhar Boasimla hall — dusre neta ka karyakram. 12. arunachal24 Namsai Buddhist projects — Dy CM ka karyakram. 13. Eastern Sentinel (20 Jul 2025) power secretary daura — sirf maang. 14. arunachal24 MP Tagak ke saath daura — maujoodgi-tak. NOTE: 2024 affidavit me FIR 26/2023 (Roing, forgery) pending disclosed hai — pre-term mamla, Jun 2024 ke baad koi legal development nahi, isliye negative nahi bana. Profile imaandari se khaali — whitelisted sources me vyaktigat lokarpan/shilanyas ki post-event reporting nahi mili.
// ---- Kamle district batch END (0 entries, negatives 0) ----


// ---- West Siang district batch (researched 2026-10-17) ----
arunachalWorks['pesi-jilen'] = [
  {
    title: 'MLA Pesi Jilen ne Liromoba circle ke naye Lingo gaon ka shilanyas kiya — Pokto se alag hue is gaon ko DC ne gaon-maanyata praman-patra saunpa',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/mla-lays-foundation-stone-of-lingo-village',
    date: '2026-02-26',
    note: 'The Arunachal Times ki report ke anusar 26 Feb 2026 (Guruvar) ko MLA Pesi Jilen ne West Siang me Lingo gaon ka shilanyas kiya — ye naya gaon Liromoba circle me Pokto gaon se alag hokar Yomcha-Liromoba sadak ke kinare bana hai. Deputy Commissioner Mindo Loyi ne Lingo kul ko gaon-maanyata praman-patra saunpa (sarkari maanyata ka dastaveji kaam). Jilen ne graminon se model gaon ki yojna banane ko kaha aur naye gaon ko apni taraf se pani aur bijli ka connection dene ka ashvasan diya — ye ashvasan abhi sirf ghoshna hai. Report me koi fund ya lagat disclosed nahi hai, MLALAD ka ullekh nahi. Ye ghatna Jun 2025 me unke PPA me jaane ke baad ki hai.',
    period: '2024-2029',
    stage: 'shilanyas',
  },
  {
    title: 'Kamba circle ke Kesi Tali gaon me naye swagat dwar ka lokarpan — MLA ne swayam udghatan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Arunachal24',
    sourceUrl: 'https://arunachal24.in/arunachal-kesi-tali-village-gets-new-welcome-gate/',
    date: '2026-04-15',
    note: 'Arunachal24 (15 Apr 2026) ki report ke anusar 14 Apr 2026 ko MLA Pesi Jilen ne Kamba circle ke Kesi Tali gaon me naye nirmit swagat dwar ka lokarpan kiya — ye dwar gaon ko alag pehchaan dene aur Ragmuk-Rakyom kulon ki virasat ke sanrakshan ke liye banaya gaya. Karyakram me IPR Director Gijum Rakmuk, ADC Kamba Tamo Riba, ZPM Kaba Rakmuk aur gramin maujood the. Swagat dwar ke nirman ka fund srot report me disclosed nahi hai — note me ye disclosure hai. Usi karyakram me graminon ne aam shamshan ghat ke liye aarthik sahayata ka gyapan diya aur Jilen ne aavashyak fund dene ka ashvasan diya — ye ashvasan sirf ghoshna hai, alag entry nahi banayi gayi. Ye ghatna Jun 2025 me unke PPA me jaane ke baad ki hai.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
arunachalWorks['topin-ete'] = [
  {
    title: 'Kamdi gaon ke naye Paramparik Dere (community hall) ka lokarpan — PWD Aalo Division ne 6 mahine me banaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'India Today NE',
    sourceUrl: 'https://www.indiatodayne.in/arunachal-pradesh/story/arunachals-kamdi-village-gets-new-cultural-hub-as-mla-topin-ete-opens-traditional-dere-1295481-2025-10-26',
    date: '2025-10-26',
    note: 'India Today NE (26 Oct 2025) ki report ke anusar MLA Topin Ete ne Aalo Circle ke Kamdi gaon me naye Paramparik Dere (community hall) ka lokarpan kiya; PWD Aalo Division ne ise 6 mahine me banaya. Nirman ka fund-srot report me disclosed NAHI hai (ye disclosure note me darj hai). MLA ki bhoomika keval udghatan tak thi — credit capped. (Coordinator-add: Tawang batch ki Nalanda Library entry wale "udghatan-matra" precedent ke anusar rakhi gayi; worker ne ise fund-undisclosed kahkar reject kiya tha.)',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
arunachalWorks['kento-jini'] = [
  {
    title: 'Sports and Youth Affairs Mantri Kento Jini ne Aalo ke daily market me bahu-manzila parking lot ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/multi-storey-parking-lot-inaugurated-in-aalo',
    date: '2026-07-26',
    note: 'The Arunachal Times (26 Jul 2026 edition; dateline AALO 25 Jul 2026) ki report ke anusar Sports and Youth Affairs Mantri Kento Jini ne Aalo ke daily market me bahu-manzila parking lot ka lokarpan kiya; West Siang DC, SP aur ZPC maujood the. Department of Urban Affairs (rajya sarkar) ne nirmaan karwaya, kul lagat Rs 488.9 lakh; har manjil par 40 LMV, filhaal 80 gaadiyon ki kshamta. News18 ki delimitation jaankari ke anusar Along East seat ke kshetra me Along Town shamil hai, isliye ise seat-kaam mana gaya hai. MLA ki bhoomika vyaktigat lokarpan (mantri ke roop me) — fund-srot disclosed.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (pesi-jilen, Liromoba): 1. The Arunachal Times (29 May 2026) official-vehicle daan — daan kaam nahi. 2. India Today NE (23 Jun 2025) 4 TB patients adoption — daan/rahat. 3. India Today NE (17 Jan 2025) Sii-Sika festival udghatan — mukhya-atithi samaroh. 4. The Arunachal Times health camp udghatan — dusre vibhag ka karyakram. 5. The Arunachal Times Eco-tourism festival — samaroh. 6. The Arunachal Times (13 Sep 2025) festival promo video launch — pre-event + samaroh. 7. The Arunachal Times school facilities — ye Tapi Darang ka karyakram, galat vyakti. 8. India Today NE (6 Feb 2026) CM ka Lower Siang package — dusre neta ka karyakram, maujoodgi-tak. 9. abotanitv.in political story — non-whitelisted. 10. theverdict.co.in TB story — non-whitelisted. Negatives: koi nahi (affidavit me criminal cases zero).
// REJECT-LOG (topin-ete, Along West): 1. India Today NE (26 Oct 2025) Kamdi Dere — fund undisclosed; coordinator ne "udghatan-matra" precedent par entry banayi hai (upar). 2. The Arunachal Times (26 Jul 2026) Aalo Press Club lokarpan — fund undisclosed, sirf untied-fund ashwasan; thin, reject. 3. India Today NE + Arunachal Times Rime-Hijum bridge — 23 Apr 2026 ko Adviser Phurpa Tsering ne inaugurate kiya, MLA sirf maujood — reject. 4. India Today NE (3 Aug 2025) cafe lokarpan Itanagar — niji venture, seat se bahar. 5. YouTube Euro Kids/Moom Homestay — YouTube-only. 6. Northeast Today (24 Dec 2024) CM ke Along West lokarpan — dusre neta ka kaam. 7. India Today NE (9 Jul 2025) inspection tour — sirf nirikshan. 8. India Today NE (12 Jan 2025) interview vade — ghoshna. 9. India Today NE (8 Sep 2026) leadership rumours — bayan. 10. Northeast Now school-aag — bayan matra. 11. Arunachal Times (16 Jan 2026) food park prastav — prastav stage. 12. Eastern Sentinel football tourney — samaroh. 13. Arunachal Times Crown Clash — samaroh. 14. Arunachal Times AKWDS jubilee — dusre neta ka karyakram. 15. Arunachal Times Pineapple Festival — inauguration Tsering Lhamu ne kiya. 16. Arunachal24 Nongtaw — Dy CM ka karyakram, seat se bahar. 17. Arunachal24 Hangpan Dada — chief guest Kento Jini. 18. arunachalobserver Tug of War — non-whitelisted + samaroh. 19. India Today NE T20 cricket — chief guest. 20. Northeast Today PAC sittings — samiti kaam, kshetra-kaam nahi. 21. Eastern Sentinel (9 Apr 2024) RGU festival — pre-term. 22. YouTube bridge inspections — whitelist-bahar. 23. YouTube salon — whitelist-bahar. 24. Eastern Sentinel (16 Apr 2025) National Herald bayan — raajneetik bayan.
// REJECT-LOG (kento-jini, Along East): 1-11 sab pre-term (2020-2023) lokarpan — REJECT. 12. westsiang.nic.in Galo Welfare Society building — mukhya-atithi samaroh. 13. northeasttoday.in CAMPA LPG — whitelist-bahar + rahat vitaran. 14. northeasttoday.in health camp inspection — whitelist-bahar + nirikshan. 15. arunachaltimes.in Sports Carnival 2026 — samaroh. 16. arunachal24 Hangpan Dada — chief guest + ashwasan. 17. syllad.com badminton hall — whitelist-bahar + Dy CM ne inaugurate kiya. 18. theweek.in (PTI) BRO projects — kendriya + dusre neta. 19. cnbctv18/zeenews BRO — pre-term + kendriya. 20. The Hindu ALB road — maang + rajya-stariya mantri vishay. 21. indiatodayne.in ALB road — wahi. 22. indiatodayne.in district index dashboard — prashasanik. 23. indiatodayne.in RTI directive — vibhagiya. 24. indiatodayne.in office plans — ghoshna. 25. theweek.in Press Day speech — mantri-vibhagiya. 26. westsiang.nic.in (5 Apr 2025) CM sanction orders — sirf maujoodgi. 27. archive.arunachaltimes.in (15 Aug 2025) development tour — nirikshan. 28. funandflip.com riverfront — whitelist-bahar + CM ne inaugurate kiya. 29. medicalbuyer.in Boleng hospital — dusri seat + CM. 30. tractornews.in farm machinery — pre-term + whitelist-bahar. 31. constructionworld.in JJM — pre-term + whitelist-bahar. 32. gully2global.com Likabali — dusri seat + whitelist-bahar. 33. YouTube stadium ashwasan — whitelist-bahar. 34. findglocal.com community hall — FB mirror (retry lead). 35. factly.in 2019 unopposed — irrelevant. Negatives: koi nahi.
// ---- West Siang district batch END (4 entries, negatives 0) ----
// ---- Lower Siang district batch (researched 2026-10-17) ----
arunachalWorks['kardo-nyigyor'] = [
  {
    title: 'MLA Kardo Nyigyor ne Likabali me Lower Siang ke Apex Customary Court Building ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Arunachal24',
    sourceUrl: 'https://arunachal24.in/arunachal-likabali-gets-new-customary-court-facility/',
    date: '2026-04-27',
    note: 'Source (2026-04-27) ke anusar Likabali me Lower Siang district ke Apex Customary Court Building ka lokarpan Deputy Speaker aur Likabali MLA Kardo Nyigyor ne khud kiya; DC Gobi Nyicyor, SP Bomken Basar aur GB-Buri Association ke padadhikari maujood the. MLA ki bhoomika: vyaktigat lokarpan (inaugurating officer). Fund-srot: source me disclosed NAHI — udghatan-matra class; fund claim nahi, sirf lokarpan ka credit. Gaon Buraon ko appeal: gambhir apradhon ko customary level par settle na karen, police ko report karen.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Deputy Speaker Kardo Nyigyor ne Sibe me naye Circle Office (CO) Building ka udghatan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2025/11/06/nyigyor-inaugurates-co-building/',
    date: '2025-11-05',
    note: 'Source (The Arunachal Times, 5 Nov 2025, DIPRO) ke anusar Lower Siang ke Sibe me nav-nirmit Circle Office (CO) building ka udghatan Kardo Nyigyor ne kiya; DC Rujjum Rakshap, SP Gothombu Dajangju, ZPC Marpe Nguba maujood. MLA ki bhoomika: vyaktigat lokarpan; shesh karyo ka jald samapan aur staff posting ka ashwasan diya. Fund-srot: source me disclosed NAHI — udghatan-matra class; fund claim nahi, sirf lokarpan ka credit. (Event date Wednesday 5 Nov 2025; published 2025-11-06.)',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];

arunachalWorks['tojir-kadu'] = [];

// REJECT-LOG (kardo-nyigyor, Likabali): // R1: indiatodayne.in video (2025-08-06) — 'Rs 35 crore infrastructure push in Likabali' — REJECT (sirf ghoshna/prashansa; MLA ne Rs 12 cr drainage + Rs 23 cr internal road ke sanction ki sarahna ki, koi vyaktigat lokarpan/shilanyas nahi). R2: The Arunachal Times (2024-09-12) — Lower Siang DLMC review meeting, MLA ne Siji-Sikirima-Koyu road ka samarthan aur Bali-Kangku PMGSY repair ki maang ki — REJECT (sirf maang/review-meeting; nirikshan nahi, parinam nahi). R3: abotanitv.in (2024-12-30) — 'MLA Nyigyor inspects PMGSY road Likabali ALG-BRO to Dipa' — REJECT (sirf nirikshan/daura + outlet whitelist me nahi). R4: abotanitv.in (2026-04-19) — Digo Yamo Festival me chief guest ke roop me sanskriti-preservation bhashan — REJECT (mukhya-atithi samaroh + outlet whitelist me nahi). R5: indiatodayne.in (2026-02-06 video) — CM Pema Khandu ne Siji me 9 shilanyas + completed works ke lokarpan kiye (Rs 150 cr+); Nyigyor maujood the — REJECT (dusre neta (CM) ke karyakram me maujoodgi; unka vyaktigat lokarpan/shilanyas nahi). R6: themileage.in (2026) — Gensi Golden Jubilee Model School building + Gensi circle RCC bridges ka lokarpan — REJECT (lokarpan Education Minister P.D. Sona ne kiya, Nyigyor kewal maujood; outlet whitelist me bhi nahi). R7: The Arunachal Times (2026-01-17) — Likabali health camp (685 beneficiaries, District Health Society + Indian Army) 'Inaugurated by Deputy Speaker Kardo Nyigyor' — REJECT (samaroh/event ka udghatan, sarkari kaam/building ka lokarpan nahi; organizing agencies District Health Society/Army; mukhya-atithi prakriya). R8: archive.arunachaltimes.in (2025-12-22) — Paklu Taipodia Classic National Bodybuilding Championship Likabali 'inaugurated by Deputy Speaker Kardo Nyigyor' — REJECT (mukhya-atithi samaroh; sports event ka udghatan). R9: Eastern Sentinel + Arunachal Times archive (Nov 2022) — Dipa Govt Secondary School steel gate lokarpan — REJECT (pre-term, karyakaal se bahar). R10: Eastern Sentinel + Arunachal Times archive (Aug 2019) — Kangku circle PMGSY road shilanyas — REJECT (pre-term, 2019). R11: indiatodayne.in (2024-02-16) — Dipa village Dere (community hall) shilanyas, Rs 20 lakh SIDF — REJECT (pre-term, Feb 2024; Jun 2024 ke baad kaam nahi). R12: echoofarunachal.in (nid=35605, Jan 2026) — CM visit ki taiyariyon ki review meeting, Nyigyor ne adhyakshata ki — REJECT (pre-event planning/bethak; CM karyakram protocol prakriya; event khud R5 me CM ka tha). R13: uniindia.com — APLA Golden Jubilee interaction (Speaker + Dy Speaker ke 1 saal) — REJECT (Deputy Speaker pad ka protocol-karyakram). R14: archive.arunachaltimes.in (2025-08-18) — APLA photo exhibition / purani Assembly building handover (Speaker Pongte) — REJECT (Nyigyor kewal maujood; dusre neta ka karyakram + Dy Speaker protocol). R15: indiatodayne.in (2023-10-27, pre-term) — Malinithan temple vikas vow Rs 7.5 cr / Rs 2.5 cr — REJECT (pre-term ghoshna). R16: indiatodayne.in (2026-01-14 video) — Makar Sankranti Malinithan temple visit/statement — REJECT (bayana/mat; koi lokarpan nahi). NEGATIVES: LACF (Likabali Anti-Corruption Forum) ke allegations — The Arunachal Times 2024-01-08 ('fund misappropriation', Ditten-Siberite road, KGNF firm) aur 2024-03-12 (dharna, Rs 16.2 cr misuse ka aarop; MLA ne khandan kiya). DONO pre-term (Jun 2024 se pehle); koi FIR dakhil ki report nahi (forum ne sirf FIR ki maang ki thi); MLA ne denial diya aur 'police/investigation agency investigate kare' kaha. Jun 2024 ke baad is mamle me whitelisted media me koi giraftari/chargesheet/dosh-siddhi/pusht-jaanch report nahi mili. Affidavit ka pending case (CR No 07/23, CJM Pasighat — IPC 466 etc.) akele negative nahi; isme bhi post-Jun-2024 koi legal development nahi mila. ISLIYE NEGATIVE ENTRY ZERO. Retry-lead: LACF allegations par agar future me FIR/chargesheet khabar aaye to negative ban sakta hai.
// REJECT-LOG (tojir-kadu, Nari-Koyu): // // 1. The Arunachal Times — "MLA reviews relief and restoration measures in Nari-Koyu" (26 Jul 2025, Likabali, DIPRO) //    URL: https://arunachaltimes.in/article/mla-reviews-relief-and-restoration-measures-in-nari-koyu //    Kaaran: sirf samiksha/daura — cloudburst ke baad HoDs ke saath review meeting; koi vyaktigat lokarpan/shilanyas, MLALAD vitaran ya itemized sanction nahi. // 2. The Arunachal Times — "MLA takes stock of damages caused by flash floods, landslides" (11 Sep 2025, Likabali, DIPRO) //    URL: https://arunachaltimes.in/article/mla-takes-stock-of-damages-caused-by-flash-floods-landslides //    Kaaran: sirf nirikshan/samiksha — damage assessment reports ka review; koi kaam ka lokarpan ya vitaran nahi. // 3. The Arunachal Times (archive) — "240 benefit from health camp" (30 Oct 2025, Nari) //    URL: https://archive.arunachaltimes.in/index.php/2025/10/31/240-benefit-from-health-camp/ //    Kaaran: dusre neta ka karyakram — health camp Health Minister Biyuram Wahge ne inaugurate kiya; Kadu sirf maujood the. // 4. The Arunachal Times (archive) — "Natung kicks off 2nd edition of Lt. Tako Dabi Memorial Football Tournament" (12 Nov 2025, Nari) //    URL: https://archive.arunachaltimes.in/index.php/2025/11/13/natung-kicks-off-2nd-edition-of-lt-tako-dabi-memorial-football-tournament/ //    Kaaran: dusre neta ka karyakram — Home Minister Mama Natung ne inaugurate kiya (aur Nari police station building bhi unhone khola); Kadu sirf maujood the. // 5. India Today NE — "Golden Jubilee school building inaugurated at GHSS Koyu" (21 Apr 2025) //    URL: https://www.indiatodayne.in/arunachal-pradesh/story/golden-jubilee-school-building-inaugurated-at-ghss-koyu-in-arunachal-pradesh-1379284-2026-04-21 //    Kaaran: dusre neta ka karyakram — school building Education Minister Pasang Dorjee Sona ne inaugurate ki; Kadu sirf maujood the (sarkari kaam ka vyaktigat lokarpan nahi). // 6. Northeast Now / India Today NE — RS MP Tai Tagak flood visit + Rs 7 lakh interim relief donation (12 Jul 2026, Koyu Circle) //    URL: http://m.nenow.in/article/arunachal-pradesh/arunachal-mp-tai-tagak-visits-flood-hit-nari-koyu-seeks-central-aid-for-flood-victims/521099/amp //    Kaaran: dusre neta ka daura + daan/rahat — Tagak ne relief diya aur kendra se package ki maang ki; Kadu ke saath the; sirf maang. // 7. Northeast Now — "Eight-member Centre delegation visits flood-hit Arunachal, assures assistance" (Jul 2026) //    URL: http://m.nenow.in/article/arunachal-pradesh/eight-member-centre-delegation-visits-flood-hit-arunachal-assures-assistance/520671 //    Kaaran: sirf nirikshan/daura — central team ka flood assessment visit; Kadu sirf saath the. // 8. Arunachal24 — "11.5 MT Rice Airlifted to Flood-Hit Koyu" (Jul 2026) //    URL: https://arunachal24.in/arunachal-flood-11-5-mt-rice-airlifted-to-flood-hit-koyu/ //    Kaaran: daan/rahat + sarkaari kaam me naam-matra samarthan — Kadu ko "support" me mention, unki koi vyaktigat pahal/sanction nahi. // 9. Arunachal Times/Eastern Sentinel/PTI/India Today NE/UNI — CM Pema Khandu lays foundation + inaugurates Rs 150 cr projects at Siji, Lower Siang HQ (6 Feb 2026) //    URL: https://arunachaltimes.in/article/cm-lays-foundation-stone-of-permanent-l-siang-hq-in-siji //    Kaaran: dusre neta ka karyakram — CM ne foundation stones laye aur projects inaugurate kiye; Kadu sirf CM-visit prep meeting (Echo of Arunachal, 27 Jan 2026, whitelisted via echoofarunachal.in — NOT whitelisted, isliye source bhi reject) me maujood the. // 10. India Today NE — Kiren Rijiju lays PMJVK foundation stones at Yazali (29 Sep 2025) and Papum Pare (28 Sep 2025) //    URL: https://www.indiatodayne.in/arunachal-pradesh/story/union-minister-kiren-rijiju-lays-foundation-stones-for-pmjvk-projects-in-arunachals-yazali-1283943-2025-09-29 //    Kaaran: dusre neta ke karyakram me maujoodgi — Union Minister ne foundation rakha; Kadu (aur "Tojir Koyu" typo wala mention) sirf attendee. // 11. Arunachal24 — Kiren Rijiju lays foundation stones for Sadbhavna Mandaps at Dutta and Siiro (Sep 2025) //    URL: https://arunachal24.in/arunachal-kiren-rijiju-lays-foundation-stones-for-sadbhavna-mandaps-at-dutta-and-siiro-under-pmjvk/ //    Kaaran: dusre neta ke karyakram me maujoodgi. // 12. Arunachal24 — "CHF Pasighat organizes awareness-cum-training on Farm Innovations in Agri-Horticultural crops" (Old Deka, Lower Siang) //    URL: https://arunachal24.in/arunachal-chf-pasighat-organizes-awareness-cum-training-on-farm-innovations-in-agri-horticultural-crops/ //    Kaaran: mukhya-atithi samaroh — Kadu ne kisan training programme "inaugurate" kiya (Central Agricultural University/MeitY funded event), koi sarkari kaam ka lokarpan/shilanyas nahi. // 13. Times of India — "Assam, Arunachal celebrate unity at Border Harmony Festival in Dhemaji" (Nov 2025) //    URL: https://timesofindia.indiatimes.com/city/guwahati/assam-arunachal-celebrate-unity-at-border-harmony-festival-in-dhemaji/articleshow/125033312.cms //    Kaaran: mukhya-atithi samaroh/mein maujoodgi — Kadu ne occasion "graced" kiya; koi kaam nahi. // 14. ThePrint (PTI) — "Union minister reviews central schemes in Arunachal district" (11 Sep 2024, East Siang) //    URL: https://theprint.in/india/union-minister-reviews-central-schemes-in-arunachal-district/2263165/ //    Kaaran: dusre neta ki review meeting me maujoodgi. // 15. The Arunachal Times — "Lower Siang DLMC reviews scheme implementation" (11 Sep 2024, Nari) //    URL: https://arunachaltimes.in/index.php/2024/09/12/lower-siang-dlmc-reviews-scheme-implementation/ //    Kaaran: meeting me maujoodgi + sirf maang — Hipo village electrification par Kadu ki chinta sirf maang/prastav class. // 16. hornbillnews.in — "Seva Sankalp Camp Held at Koyu" (29 Sep, camp inaugurated by Kadu) //    URL: https://www.hornbillnews.in/2026/09/seva-sankalp-camp-held-at-koyu-to-bring.html //    Kaaran: whitelist reject (Hornbill News whitelist me nahi) + mukhya-atithi samaroh — camp ka inauguration sarkari kaam ka lokarpan nahi. // 17. YouTube videos (foot-march suspension Oct 2026, Pakyor Koyu felicitation, election-period rallies, dedication song) — Kaaran: YouTube whitelist me nahi; sirf daura/ghoshna; maang-prastav. // 18. April 2024 election stories (Arunachal Times: straight contest, ADP re-poll demands) — Kaaran: pre-term/chunav coverage; koi kshetra-kaam nahi. // 19. Affidavit ke 1 pending criminal case par koi post-Jun 2024 legal development (giraftari/chargesheet/dosh-siddhi) whitelisted media me nahi mila — myneta.info (2019 affidavit) ke anusar purana SIC (Vigilance) case 04/07 (Spl. Vig (T) Case No. 06/12, Special Court North Lakhimpur, Assam), pending; halafnama akele negative nahi.
// ---- Lower Siang district batch END (2 entries, negatives 0) ----
// ---- Leparada district batch (researched 2026-10-17) ----
arunachalWorks['nyabi-jini-dirchi'] = [];

// COORDINATOR-QA (nyabi-jini-dirchi): worker ki 4 "udghatan-matra" entries girai — tubectomy camp (India Today NE 30 Jan 2025), Special Vaccination Campaign 3.0 (India Today NE 18 Mar 2025) aur Dharti Aaba Janbhagidari Abhiyan (Arunachal Times 15 Jun 2025) teeno sarkari/central abhiyanon ke sirf shubharambh hain, nirmaan-yukt sarkari kaam nahi (Meghalaya EJH ceremonial campaign-launch precedent; Bichom night-centre CSR precedent); Hikar Gumin gaon udghatan (Arunachal Times 18 Aug 2024) me bhi koi sarkari nirmaan nahi — gaon district admin ne Oct 2023 me notify kiya tha, MLA ki bhoomika keval ceremonial. Isliye profile imaandari se khaali = [].
// REJECT-LOG (nyabi-jini-dirchi, Basar): 1. Kisan Mela ka udghatan, ICAR-AP Centre Basar (Arunachal Times, 13 Feb 2025) — 'mela' ek ayojan ka udghatan tha, sarkari kaam/pariyojna ka lokarpan nahi; samaroh-shreni → reject. 2. 4th Leparada Football Championship ka shubharambh (Arunachal Times archive, 11 Nov 2025) — championship ko "open declare" karna; khel-samaroh ka udghatan, sarkari kaam nahi → reject. 3. 3rd T20 District Cricket Tournament 2025 (India Today NE + arunachal24, Oct 2025) — MLA chief guest; cricket ground hetu memorandum par sirf "efforts ka pledge", koi nateeja nahi → reject (mukhya-atithi + sirf ashwasan). 4. Pink Toilet, GHSS Basar (India Today NE, Oct 2, 2025) — pariyojna UD & Housing vibhag ki, "formally inaugurated in the presence of" MLA; MLA ne udghatan nahi kiya → reject (presence-only). 5. Pagi LSDG Model Village ghoshna (arunachal24, May 2025) — MLA chief guest thi; SOR grants se RD-PR dept ki pariyojna → reject (mukhya-atithi). 6. Central Divisional Commissioner Office, Pagi ka shilanyas (arunachal24, Jul 8, 2025) — samaroh me MLA chief guest, pathar unhone nahi rakha; Rs 15 cr SASCI 2024-25 → reject (mukhya-atithi). 7. Packaged drinking water plant 'Higur Iisi', Tahum Litak (India Today NE, Feb 22, 2026) — niji entrepreneur (Tajen Kamum) ki private plant; sarkari kaam nahi → reject. 8. Mega Surgical Camp, TBDH Basar (arunachal24, Mar 2026 reports) — camp Dr. Mohesh Chai ne launch kiya; MLA "leadership and sponsorship" me upasthit rahi; vyaktigat lokarpan unka nahi → reject. 9. Flood inspection, Dari Circle (Arunachal Times + arunachal24, Jul 2026) — sirf nirikshan + Rs 10 lakh vyaktigat daan ghoshna → reject (nirikshan + daan). 10. School van donation, MMR Gurukul School (Arunachal Times, Mar 3, 2026; hornbillnews bhi) — daan → reject. 11. Padi Sub-Centre visit (India Today NE, Aug 2, 2025) — nirikshan + interim maintenance hetu "personal assistance" (daan) → reject. 12. Todak Basar District Hospital inauguration (northeasttoday, Nov 23, 2024) — CM Pema Khandu ka karyakram; MLA kewal upasthit → reject (dusre neta ka karyakram). 13. Pineapple Festival Bagra 2.0 (arunachal24, Feb 2025) — DyCM ka karyakram; MLA maujoodgi → reject. 14. Women police station / Tirbin ADC HQ / police outpost maang (Arunachal Times, Jan 31, 2025) — sirf maang, koi dastaveji nateeja nahi → reject; retry-lead (nateeja mile to entry ban sakti hai). 15. Seva Aapke Dwar 2.0 camp, Ragi Doke (echoofarunachal — non-whitelisted; DIPRO) — sarkari camp me bhagidari; source bhi non-whitelisted → reject. 16. Mini Secretariat, Gite New Basar shilanyas (echoofarunachal + YouTube; Nov 2024) — PM ne 2024 me 3 naye jilon ke mini secretariats ke shilanyas kiye (Rs 25 cr); MLA maujoodgi; source non-whitelisted → reject. 17. Wayside Market Shed (Chisi-Chiku) + Panchayat Bhawan-cum-CSC (Chisi-Ichi) inauguration (hornbillnews.in, Apr 13, 2026) — khabar kewal non-whitelisted portal par mili; whitelist me nahi mila → RETRY-LEAD. 18. CC Bridge Kidi nadi + Poru Rimi–Disi–Pagi link road shilanyas (Feb 2026) — sirf Galo News YouTube par; koi whitelist reporting nahi mili → RETRY-LEAD (DIPRO/Arunachal Times me dhoondho).  NEGATIVES: koi qualifying negative nahi. (a) PMGSY road bhrashtachar ke aarop (arunachal24, ~Jan 2024): karyakaal (Jun 2024) se pehle ke hain jab ve ZPC thi; sirf villagers/retired IFS officer Rini Riba ka aarop, koi FIR ya pusht-jaanch darj nahi → negative nahi. (b) Rs 1 crore cash seizure (arunachalobserver, Apr 2024, non-whitelisted): chunav-se-pehle; dono FIR Margo Bam case se judi, MLA par vyaktigat FIR nahi → negative nahi. (c) Halafnama me criminal cases 0; koi post-Jun-2024 FIR whitelisted media me nahi mili.
// ---- Leparada district batch END (0 entries, negatives 0) ----

// ---- Siang district batch (researched 2026-10-17) ----
arunachalWorks['talem-taboh'] = [
  {
    title: 'MLA Talem Taboh ne Payum me Bille-Miging sadak (Package-I, 26 km) ke nirmaan-karya ka flag-off kiya, jo Arunachal Frontier Highway (NH-913) ka hissa hai.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/bille-miging-road-project-work-starts',
    date: '2026-08-26',
    note: 'Kendriya Arunachal Frontier Highway (NH-913) pariyojna ka Package-I (Bille end se 26 km) — nishpadan Mayasheel Ventures Ltd (Kaying camp) dwara; MLA ka vyaktigat bhoomika: apne kshetra (Payum circle, Rumgong seat ke andar) me nirmaan aarambh ka flag-off, isliye credit capped hai. MLA ne khud PM Modi, Union mantri Kiren Rijiju aur CM Pema Khandu ka aabhaar vyakt kiya. Article DIPRO release par aadharit media report hai, isliye badge news.',
    period: '2024-2029',
    stage: 'kaam-shuru',
  },
];

arunachalWorks['ojing-tasing'] = [
  {
    title: 'Nugong Banggo Kebang ne Ojing Tasing ko Nugong Bridge se Rasing gaon tak lagbhag 10 km RIDF sadak ke tezi se shuru hue nirmaan ka shrey diya — Rasing/Mopit ki lambi arse se maang thi.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Arunachal24',
    sourceUrl: 'https://arunachal24.in/arunachal-nbk-joys-over-starting-of-road-construction-from-nugong-bridge-to-rasing-village/',
    date: '2024-12-28',
    note: 'NBK ke press release par aadharit: Nugong Bridge point se Rebo-Perging circle ke Rasing/Mopit gaon (Pangin seat ke andar) tak lagbhag 10 km sadak ka nirmaan Rural Infrastructure Development Fund (RIDF) se; formation cutting shuru ho chuki thi, sadak 26 Dec 2024 ko gaon tak pahunchi. NBK President ne sthaniya MLA-cum-Mantri Ojing Tasing aur PWD Boleng Division ko tez nirmaan ke liye sarvajanik dhanyavaad diya — isliye credit capped hai. Mantri-niyam rakha gaya: ye seat-kaam hai, vibhagiya faisla nahi.',
    period: '2024-2029',
    stage: 'kaam-shuru',
  },
];

// COORDINATOR-QA (talem-taboh): worker ne flag-off entry ko kendriya-pariyojna exception ("kendriya suvidha ka vyaktigat lokarpan = entry, fund disclosed") ke tahat kaam-shuru stage par rakha tha — maine rakha: event apne kshetra me nirmaan aarambh ka dastaveji vyaktigat kadam hai, note me fund + credit-cap dono disclosed hain. Pre-term + CM-mantri karyakram ki entries worker ne sahi reject ki (reject-log fragment me).
// REJECT-LOG (talem-taboh, Rumgong): 1. CM Khandu ka Unying Giidi daura 27 Jan 2025 (arunachal24/PTI): Jomlo water supply, Pangken-Bingung PMGSY sadak, Pessing PHC lokarpan + Rs 66 cr sanction package — dusre neta ka karyakram + ghoshna → reject. 2. Taboh ke 5-point memorandum par CM ashwasan (Jan 2025) — sirf maang+ashwasan → reject. 3. GHSS Boleng infra lokarpan 27 Sep 2026 (indiatodayne/Arunachal Times): Education Mantri ne lokarpan kiya, Taboh upasthit → reject. 4. Jomlo Farm nirikshan Jun 2026 (echoofarunachal) — sirf nirikshan + non-whitelist → reject. 5. Jomo village Thanksgiving Feb 2026 (YouTube) — samaroh + non-whitelist → reject. 6. Futsal ground Boleng May 2023 — pre-term → reject. 7. Bogne village projects 27 Apr 2023 — pre-term → reject. 8. Bingung water augmentation Feb 2022 — pre-term → reject. 9. RCC bus shelter Rumgong Nov 2019 — pre-term → reject. 10. Simang bridge e-inauguration Jun 2021 (Eastern Sentinel) — pre-term + BRO pul → reject. 11. Kaying fire relief Mar 2020 — pre-term + rahat → reject.
// REJECT-LOG (ojing-tasing, Pangin): 1. Kammuk Bridge nirikshan Oct 2026 (nenews/northeasttoday/hornbillnews) — sirf nirikshan + non-whitelist → reject. 2. Pangin Clean Model Village 27 Apr 2025 (indiatodayne) — chief-guest shubharambh, DC/gramvaasi parikalpana → reject. 3. Niglok LSDG foundation stone 12 Feb 2025 (Arunachal Times) — East Siang, seat-bahar + mantri-niyam → reject. 4. Simang Bridge 2021 — pre-term → reject. 5. Pareng aag-prabhavit daan Aug 2024 — rahat → reject. 6. Pangin vermicomposting Apr 2023 — pre-term → reject. 7. Riga SHG federation office Jan 2024 — pre-term → reject. 8. Siang Upper Multipurpose Project mantri-bayan — mantri-niyam → reject. 9. PRI samiksha baithak 31 Jul 2025 — sirf baithak → reject. 10. Siang roadmap review 28 Sep 2026 — sirf baithak + non-whitelist → reject. 11. Arogya Dhaam Yupia (Eastern Sentinel) — Papum Pare, seat-bahar → reject. 12. East Siang SHG market shed (Arunachal24) — seat-bahar → reject. 13. Teachers workshop Jul 2025 (FB) — chief-guest + non-whitelist → reject. 14. Vijay Pertin Zero FIR YouTube dawa — apusht → reject. 15. WRD office Pangin Apr 2025 (arunachaltoday.live) — dusre mantri ne udghatan kiya → reject. NEGATIVES: halafname ke 3 purane cases (Pasighat PS 23/2006, Boleng PS 09/2010, Boleng PS 17/2013 — teeno pre-term) me Jun 2024 ke baad koi legal development nahi; Bhanu Tatak case (EastMojo Sep 2026) me Tasing complainant hain, aaropi nahi → negative nahi.
// ---- Siang district batch END (2 entries, negatives 0) ----
// ---- Shi-Yomi district batch (researched 2026-10-17) ----
arunachalWorks['pasang-dorjee-sona'] = [
  {
    title: 'Pasang Dorjee Sona ne Mechuka ke sarkari uchch madhyamik vidyalaya me Pasang Wangchuk Sona ISRO Space Laboratory ka lokarpan kiya.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Northeast Now',
    sourceUrl: 'https://nenow.in/north-east-news/arunachal-pradesh/arunachal-pradesh-mechuka-gets-advanced-isro-space-laboratory.html',
    date: '2025-08-16',
    note: 'Lab ISRO aur Muskaan Foundation ke sahyog se bani hai — MLALAD kharch ya sanction ka dastavej report me nahi, isliye fund ka shrey MLA ko nahi. Sona ne apni seat Mechuka ke Government Higher Secondary School me swayam udghatan kiya; lab unke swargiya pita Pasang Wangchuk Sona ke naam par samarpit hai. Udghatan Education Mantri ke roop me hua hai lekin suvidha keval Mechuka seat me sthit bhautik sanrachna hai — minister-framing disclosed, credit capped.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];

// COORDINATOR-QA (pasang-dorjee-sona): mantri-niyam sahi chala — worker ne 15 rejects kiye (CM/Deputy CM/Dusre mantri ke Mechuka karyakram, rajya-stariya education/tourism faisle, pre-term). ISRO lab entry minister-framing + fund disclosure ke saath rakhi (seat-specific bhautik suvidha ka vyaktigat lokarpan; Pyngrope/Chaudhary precedents consistent).
// REJECT-LOG (pasang-dorjee-sona, Mechuka): 1. Pena-Tato road review 9 Sep 2026 (northeasttoday) — sirf baithak → reject. 2. Yargyap Chu bridges nirikshan Jul 2026 (PTI/ThePrint) — sirf nirikshan → reject. 3. Dorjee Sempa Khorchen + NCDS building + Adventure Park shilanyas Jan 2025 (arunachal24/syllad) — Deputy CM ne kiya → reject. 4. IT skill centre + Tato road/Bailey bridge/stadium/Monigong hall Apr 2025 (indiatodayne) — CM ne kiya → reject. 5. Trout vehicle flag-off Jul 2026 (Arunachal Times) — Fisheries mantri ne kiya → reject. 6. 4 colleges bus flag-off Feb 2025 — rajya-stariya → reject. 7. GHSS Boleng infra Sep 2026 — dusri seat → reject. 8. Seppa school projects Oct 2026 — dusri seat → reject. 9. PMGSY/VVP/RWD reviews Jan-Jul 2026 — mantri-kaam → reject. 10. Teacher transfer/scholarship meetings — rajya-faisle → reject. 11. Mechuka UDAN flights push Jun 2025 (sentinelassam) — sirf maang + mantri-niyam → reject. 12. 40-bedded hospital Mechuka 2021 — pre-term → reject. 13. BRO Tato-Mechukha appeal Apr 2024 — pre-term + maang → reject. 14. ALG Mechuka terminal inspection Dec 2022 — pre-term → reject. 15. Speaker-era Yargyap Chu bridge review ~2021 — pre-term → reject. NEGATIVES: 2009-2024 affidavits me 0 criminal cases; wartaman karyakaal me koi FIR/janch nahi; Karo Residential School molestation case me aaropi hostel warden (Nov 2022, pre-term), Sona ne police ki prashansa ki thi — unpar koi aarop nahi → negative nahi.
// ---- Shi-Yomi district batch END (1 entry, negatives 0) ----

// ---- Upper Siang district batch (researched 2026-10-17) ----
// COORDINATOR-QA: alo-libang mantri NAHI hain (foundation me 13 Jun 2024 portfolio line nahi) — mantri-niyam lagu nahi, aam MLA cover.
arunachalWorks['alo-libang'] = [];
arunachalWorks['oni-panyang'] = [];
// 0 works entries. Jun 2024 ke baad whitelisted media me Libang ka Tuting-Yingkiong seat ke liye koi
// vyaktigat lokarpan, shilanyas, MLALAD itemized vitaran/work-order/sanction report, ya Vidhansabha
// maang ka dastaveji nateeja nahi mila. Mila hua sab kuchh ya to dusre neta ka karyakram/upasthiti
// tha, ya pre-term (2019-2024 mantri-kal) ka tha, ya non-whitelist source par tha (sabse bada lead:
// 17 Aug 2026 ka triple lokarpan — retry lead A). Brief ki foundation correction sahi hai: ve
// vartaman cabinet me mantri NAHI hain (13 Jun 2024 shapath wali Khandu-3 cabinet me berth nahi mila;
// 18 Jun 2024 se CM ke Advisor hain — nenow.in, PTI-based). Mantri-niyam lagu NAHI; aam MLA cover.
// NEGATIVES: 0 — 2024 affidavit me 0 criminal cases; Sep 2026 SUMP virodh me unka Yingkiong nivas
// tod-fod ka shikar bana (New Indian Express/arunachal24/nenow, 30 Sep 2026), lekin MLA aaropi NAHI
// balki peedit hain — negative ke manak (aaropi + FIR/janch + jawab) poore nahi hote. Jun 2024 ke
// baad unpar koi FIR, giraftari, chargesheet ya adhikari-pusht janch whitelisted media me nahi mili.
// FOUNDATION: brief ke saare tathya (age 60, BA Jawaharlal Nehru College Pasighat 1987, 2024 me 0
// criminal cases, assets Rs 8.07cr, 6,095 votes / 915 margin vs Nobeng Burang/PPA) media me pusht
// hue (Oneindia 2024 result page: 6,095 votes, 915 lead vs PPA ke Nobeng Burang) — koi surgical
// edit zaroori nahi. Dhyan rahe: Nobeng Burang (2024 runner-up, PPA) alag vyakti; unse judi koi
// khabar is profile me nahi ghusayi gayi.
// REJECT-LOG (alo-libang, Tuting-Yingkiong): 1. Triple lokarpan 17 Aug 2026 (MRF Swachh Bharat Mission + Simar vendor market + GHSS Yingkiong academic building) — 4 outlets par mila (nenews.in, arunachalobserver.org, themileage.in, easternecho.in) lekin CHAARON non-whitelist → entry nahi ban sakti (retry lead A). 2. Pemakoe Mindrolling Gonpa shilanyas, Tuting, 24 Feb 2026 (EastMojo, whitelisted, khola-padha) — shilanyas Rinpoche (9th Minling Khenchen Rinpoche) ne rakha, Libang sirf upasthit the aur dhanyavaad paya; dharmik sanstha ka nirmaan, sarkari sanrachna nahi → reject (dusre ke karyakram me maujoodgi). 3. 'Libang reviews NABARD-funded projects' (The Arunachal Times, 26 Jun 2026 — 2026 isliye kyunki article me 'on Friday' hai aur 26 Jun 2026 Friday tha; whitelisted, khola-padha, DIPRO) — NABARD/RIDF projects ki sirf samiksha meeting; koi lokarpan/shilanyas/sanction nahi → reject (sirf nirikshan/samīkshā). 4. 'Gao inaugurates Mipang Migang Mikmo war memorial', Gobuk (The Arunachal Times archive, 11 May 2025, whitelisted) — lokarpan MP Tapir Gao ne kiya; Libang sirf upasthit MLAs me → reject. 5. Yingkiong police station building lokarpan (Eastern Sentinel, 'YINGKIONG, Nov 15'; 'Minister, Rural development, Alo Libang'; whitelisted, khola-padha) — mantri ke roop me lokarpan = pre-June-2024 → period se bahar. 6. Gette gaon Dere (community hall, MPLAAD) lokarpan + Rs 30 lakh link road nirikshan (Eastern Sentinel, 'Minister, Rural Development and IPR') → pre-term mantri-kal → bahar. 7. Rabung Bridge (Migging-Tuting road) lokarpan (Eastern Sentinel, 27 Dec 2019; BRO Project Brahmank) → pre-term → bahar. 8. SUMP PFR survey ke liye Cabinet empowered high-level committee (indiatodayne.in/nenow.in, 23-24 Sep 2026, whitelisted) — Libang committee member hain, lekin ye committee-sadasyata hai, seat ka kaam nahi → reject. 9. NQAS certification — District Hospital Yingkiong + AAM Simong/Ramsing (Northeast Today, ~Aug 2026, whitelisted) — Libang ne teams ko sirf badhai di; koi nirmaan/lokarpan bhoomika nahi → reject. 10. Sep 30, 2026 SUMP virodh — Libang ka Yingkiong nivas tod-fod/vandalised (New Indian Express, arunachal24, nenow; PTI-adharit) — MLA peedit hain, aaropi nahi; FIR unpar nahi → negative ke manak fail → reject (negative nahi). 11. Section 163 BNSS orders, Yingkiong (Times of India, Oct 2026, whitelisted) — MLA ke nivas ka sirf zikr restricted area me; koi kaam nahi → reject. 12. CM Tuting visit / VVP karyakram (nenow/Arunachal Times/Eastern Sentinel, 22-23 Jan 2024) — CM Pema Khandu ke lokarpan (Nyigong bridge, CHC Jengging, micro hydels); Libang sirf upasthit → pre-term bhi → reject. 13. Eye OT + de-addiction centre Yingkiong (Arunachal Times, Jul 2021), public information & facilitation centre (Jul 2022), dialysis unit Yingkiong (Jan 2022), block-level health mela (Apr 2022) → sab pre-term mantri-kal → bahar. 14. Model residential school shilanyas, Linia, Lower Subansiri (Arunachal Times, Nov 2021) → pre-term + dusri seat → bahar. 15. NERCORMP multipurpose facility centre, Senua/Longding (Eastern Sentinel) → pre-term + dusra jila → bahar. 16. TRIHMS COVID testing lab (Apr 2020), MTC Pasighat (NVHCP), 5G/AI health launch (2023) → pre-term state-level mantri kaam → bahar. 17. Yingkiong-Bising road ki maang (nenow, Rajnath BRO story, ~May 2025, whitelisted) — Libang ne sarkar se 'expedite' karne ki apeal ki; sirf maang, koi dastaveji nateeja nahi → reject. 18. CM Advisor niyukti (nenow, Jun 2024) — appointment news, kaam nahi → reject. 19. Tenchuk prayer Dharamshala (arunachal24, Mar 2026) — Libang upasthit; dharmik karyakram, seat se bahar → reject.
// RETRY-LEADS (parent ke liye): A. 17 Aug 2026 triple lokarpan (MRF — Swachh Bharat Mission, Dept of Urban Affairs Yingkiong Division, EE Ramu Welly; Simar vendor market; GHSS Yingkiong academic building — Libang khud alumnus) — agar Arunachal Times / Eastern Sentinel / EastMojo / Arunachal24 ya DIPR press release me coverage mile to 3 entries (categories: Any/Solid-waste, Any/Market, School), badge news (ya sarkari agar DIPR mile), date 2026-08-17. Non-whitelist report: https://arunachalobserver.org/2026/08/19/libang-inaugurated-mrf-vendor-market-and-academic-building/ (kabhi entry mat banana — sirf lead). B. MLALAD itemized vitaran/work-order/sanction (FY 2025-26 se Rs 4 crore/seat/saal, usse pehle Rs 3 crore) — Tuting-Yingkiong ki koi itemized media/sarkari report abhi nahi mili; DIPR/G O watch rahe. C. NABARD/RIDF review (26 Jun 2026) ke baad Upper Siang me koi sanction/lokarpan whitelisted me aaye to follow-up karein.
// SUMMARY: works entries 0, negative entries 0. Khole-pade gaye whitelisted sources: 3 (The Arunachal Times — NABARD review, 26 Jun 2026; Eastern Sentinel — police station; EastMojo — Gonpa shilanyas, 24 Feb 2026). Baaki candidates search-result text se verify karke reject kiye gaye. Foundation correction (mantri NAHI) sahi mili; koi surgical edit prastavit nahi.
// Term: Jun 2024–2029. Elected on NPP ticket 2024; moved to PPA (Form-III, 12 May 2025, Gazette-notified Jun 2025).
// Mining result (2026-10-17): no valid entries found — all candidates failed quality gates. See REJECT-LOG.
// REJECT-LOG (oni-panyang):
// R1. Pillars of Brotherhood (Pertin Budum Kebang), Damro — Arunachal Times (MARIYANG, 9 Feb). REJECT: chief-guest unveiling only; monument initiated by community UKK team, materials from outside; no sarkari fund/role disclosed. Source: https://arunachaltimes.in/article/panyang-unveils-pillars-of-brotherhood-announces-to-plant-cherry-blossom
// R2. 500 cherry blossom saplings planting announcement (same article, Damro, Upper Siang) — REJECT: sirf ghoshna, no plantation/completion reported.
// R3. Community hall "will be built" remark (same article) — REJECT: sirf ghoshna, no sanction/work-order reported.
// R4. Inspection of landslide damage on Pasighat-Mariyang road, near Geying village & Pongging View Point — indiatodayne, 2024-07-04. REJECT: sirf nirikshan/daura, no work completion/sanction. Source: https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-mla-oni-panyang-inspects-landslide-damage-on-pasighat-mariyang-road-1042328-2024-07-04
// R5. Next-Gen GST reform public awareness programme, Mariyang market — Arunachal Times archive, 26 Sep 2025. REJECT: awareness event, not a physical work.
// R6. Empowered High-Level Committee membership for SUMP PFR survey (Cabinet, Sep 2026; HT/nenow/arunachal24/indiatodayne). REJECT: administrative role, not a works entry; no physical sanrachana. Source: https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-cabinet-forms-high-level-panel-to-oversee-upper-siang-project-survey-amid-local-opposition-1454413-2026-09-23
// R7. Komkar village SUMP-PFR MoU (Dec 2024, ANI/Arunachal Times) — MLA merely present at signing. REJECT: no personal bhoomika beyond attendance; consent-process event for a proposed national project, not a constituency work.
// R8. Geku SUMP-PFR MoU (Jun 2026) — CM acknowledged Panyang's facilitation role (thenewsmill, non-whitelist). REJECT: facilitation of a proposed project's consent process; no physical work, no fund deployed; PFR is only a study. Source: https://thenewsmill.com/2026/06/110-geku-households-back-siang-upper-multipurpose-project-report/
// R9. Vandalism of MLA residence amid SUMP protests, Geku (Jun 2026; indiatodayne + arunachal24). NOT-A-NEGATIVE: MLA is the victim, not the accused; no FIR/investigation against him; resurfaced campaign remark ("voters could vandalise his house if he ever supported the Siang dam") is media-reported political controversy, fails negative gate (no FIR, no accused-MLA). Sources: https://www.indiatodayne.in/arunachal-pradesh/video/arunachal-upper-siang-mlas-residence-vandalised-amid-sump-protests-1404981-2026-06-09 ; https://arunachal24.in/houses-vandalised-in-geku-amid-growing-opposition-to-siang-upper-multipurpose-project/
// R10. Damro Damey Musup community hall inauguration (May 2025, inaugurated by MP Tapir Gao; northeasttoday.in, non-whitelist). REJECT: dusre neta ke karyakram me maujoodgi; inaugurator MP, not MLA.
// R11. Sports events as chief guest (Tapor Gao Memorial Volleyball, Ruksin, Dec 2024; 3rd Independence Cup Football, Pasighat, Jul 2025; 4th NE Masters TT, Pasighat, Oct 2025; arunachal24). REJECT: samaroh/mukhya-atithi, no physical works.
// R12. War memorial inaugurations (1894 Mirem Batum Lingkang — Dy CM Chowna Mein, Mar 2025; Mipang Migang Mikmo, Gobuk — MP Tapir Gao, May 2025; Arunachal Times archive). REJECT: dusre neta ke karyakram me maujoodgi.
// R13. Mebo topper felicitation (indiatodayne, Sep 2025) — guest of honour, topper awards sponsored. REJECT: not a physical work.
// R14. CM Khandu projects visit to Mariyang-Geku (2023; thehillstimes.in, non-whitelist). REJECT: pre-term (prior MLA Kanggong Taku), non-whitelist.
// R15. Seva Sankalp Abhiyan at Mariyang (Arunachal Times, 27 Sep — VKV Pittung/Mariyang). REJECT: sarkari abhiyan ka shubharambh, no Panyang role mentioned.
// R16. NPP->PPA switch (May 2025; HT/Eastern Sentinel/arunachal24/EastMojo). Political event, not a works entry. Party-switch context only.
// RETRY-LEADS (oni-panyang):
// L1. Pillars of Brotherhood article shows dateline "MARIYANG, 9 Feb" only (no year in fetched text). If ever needed as a context item, verify year via article metadata; rejected as chief-guest-only item regardless.
// L2. Geku SUMP MoU Jun 2026 (110 households) — only non-whitelist report (thenewsmill) found with CM-acknowledgement detail. Check whether The Arunachal Times / Eastern Sentinel / indiatodayne carried a post-event report; if yes, reconsider under "community credit" rule (currently rejected: no physical work).
// L3. MLALAD work-order/sanction lists for Mariyang-Geku (FY 2024-25/2025-26) — not found in media; future mining runs should re-search for itemized MLALAD vitaran reports or DIPR Arunachal press releases on constituency works.
// ---- Upper Siang district batch END (0 entries, negatives 0) ----

// ---- East Siang district batch (researched 2026-10-17) ----
// COORDINATOR-DROP (ninong-ering): worker ki entry #5 (Rs 25 lakh vyaktigat yogdaan — personal charity/disaster relief = standing rule se NOT works) girai; reject-log me R-item ke roop me darj.
// Works entries: Ninong Ering — 37-Pasighat West (ST), East Siang, Arunachal Pradesh
// Term: Jun 2024–2029. Elected 2024 on BJP ticket from Pasighat West (8,049 votes).
// Term-note: Jun 2024 me 8th Assembly ke pro-tem Speaker the; baad me Advisor to Minister for Hydro Power Development (multiple 2025-26 reports) bane.
// Mining result (2026-10-17): 5 valid entries (sabhi Jun-Jul 2026 flash-flood ke baad Lesing water project + bridge/infra sanctions; The Arunachal Times).
// Year-verification: articles me "15 Jul ... restored on Wednesday" — 15 Jul 2026 budhwar hai (2025 me mangalwar); webindia123 ka 10 Jul 2026 article bhi isi 28 June flood + central team ki baat karta hai. Isliye dates 2026.

arunachalWorks['ninong-ering'] = [
  {
    title: 'Pasighat West ke MLA Ninong Ering ne 28 June 2026 ki flash flood ke baad Ledum ke mega water supply project ki pipeline marammat ke liye apne LAD fund se Rs 7 lakh sanction kiye',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/flash-flood-destroys-fishponds-animal-farms',
    date: '2026-07-05',
    note: '28 June 2026 ko Ledum nadi ki cloudburst flash flood ne Ledum gaon ke mega water supply project ke structures ko gambhir nuksan pahunchaya, jisse Pasighat West (Ruksin) kshetra ki peya-jal aapoorti thap ho gayi. MLA Ninong Ering ne apne LAD fund se Rs 7 lakh sanction kiye aur Water Resource Department ke engineers ko project se judi pipelines ki marammat ka nirdesh diya. Water Resource Department, Pasighat Division ne affected sites par men aur machines tainat kiye. Fund-srot: MLA LAD fund (FY 2025-26 se Rs 4 crore/seat/saal).',
    period: '2024-2029',
    stage: 'swikriti',
  },
  {
    title: 'Pasighat West ke MLA Ninong Ering ne Lesing mega water supply project ke liye pipes ki kharid aur renovation ke liye Rs 10 lakh sanction kiye, jisse Ledum aur Bilat gaon me peya-jal aapoorti bahal hui',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/water-supply-to-ledum-bilat-villages-restored',
    date: '2026-07-15',
    note: '28 June 2026 ki flash flood me Ledum ke Lesing mega water supply project ke nuksan ke baad, 15 July 2026 (budhwar) ko Ledum aur Bilat gaon me drinking water supply bahal ho gayi. MLA Ninong Ering ne pipes ki kharid aur Lesing project ke renovation ke liye Rs 10 lakh sanction kiye; unhone Korang me damaged project ka departmental officials ke saath khud daura kiya. PHE department ne kathin pahadi par bina motorable road ke pipes uthane ke liye haathiyon (elephants) ko lagaya. PHE ne kaha ki Mirem, Mikong, Niglok, Ngorlung, Ruksin aur Oyan gaon ki supply bhi jald bahal hogi. Fund-srot: MLA LAD fund. (5 July wali Rs 7 lakh sanction se alag, follow-up sanction.)',
    period: '2024-2029',
    stage: 'poora',
  },
  {
    title: 'Pasighat West ke MLA Ninong Ering ne flash flood me beh gaye Sido aur Tene gaon ke beech do wooden pulon ke punarnirman ke liye Rs 10 lakh sanction kiye',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/water-supply-to-ledum-bilat-villages-restored',
    date: '2026-07-15',
    note: '28 June 2026 ki flash flood me Sido aur Tene gaon ke beech ke do wooden bridges beh gaye the. MLA Ninong Ering ne in do pulon ke punarnirman ke liye Rs 10 lakh sanction kiye. Fund-srot: sarkari schemes / MLA LAD fund (article me "Besides government schemes and MLA LAD funds" ke context se).',
    period: '2024-2029',
    stage: 'swikriti',
  },
  {
    title: 'Pasighat West ke MLA Ninong Ering ne flood aur erosion se damaged Ledum ke Bokrang aur Dekam colony ke public infrastructure ke renovation ke liye Rs 10 lakh grant kiye',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/water-supply-to-ledum-bilat-villages-restored',
    date: '2026-07-15',
    note: '28 June 2026 ki flash flood aur erosion se Ledum ki Bokrang aur Dekam colony me public infrastructure damaged hua tha. MLA Ninong Ering ne iske renovation ke liye Rs 10 lakh grant kiye. Fund-srot: sarkari schemes / MLA LAD fund. Note: isi daure me unhone Rema nadi par damaged RCC bridge ke punarnirman ke liye PMGSY ke tahat scheme propose karne ka ashwasan diya — ye abhi prastav hai, sanction nahi (REJECT-LOG R17).',
    period: '2024-2029',
    stage: 'swikriti',
  }
];
arunachalWorks['tapi-darang'] = [
  {
    title: 'Pasighat East ke MLA Tapi Darang ne Pasighat Block me sarkari Custom Hiring Centre (CHC) office ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'India Today NE',
    sourceUrl: 'https://www.indiatodayne.in/amp/arunachal-pradesh/story/arunachal-pasighat-chc-office-inaugurated-to-promote-oil-palm-farming-in-east-siang-district-1169822-2025-02-12',
    date: '2025-02-12',
    note: 'CHC government-funded facility hai — NMEO-OP (National Mission on Edible Oils-Oil Palm) scheme ke tahat Rs 25 lakh ka one-time sarkari grant; kisanon ko tractor, grass cutter, chainsaw jaise machinery nominal rate par rent par milenge. Darang ne Pasighat East MLA ke roop me vyaktigat roop se lokarpan kiya; District Agriculture Officer Opang Moyong, CHC Chairman Dr. Otem Yomsu aur kisan maujood the. Fund central sarkar ki NMEO-OP scheme ka hai — shrey lokarpan/bhoomika tak capped. Event NPP-karyakaal me hua (Jun 2025 me PPA me gaye; note me disclosed).',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
arunachalWorks['oken-tayeng'] = [];
// Term: Jun 2024–2029. Elected 2024 on BJP ticket from Pasighat West (8,049 votes).
// Term-note: Jun 2024 me 8th Assembly ke pro-tem Speaker the; baad me Advisor to Minister for Hydro Power Development (multiple 2025-26 reports) bane.
// Mining result (2026-10-17): 5 valid entries (sabhi Jun-Jul 2026 flash-flood ke baad Lesing water project + bridge/infra sanctions; The Arunachal Times).
// Year-verification: articles me "15 Jul ... restored on Wednesday" — 15 Jul 2026 budhwar hai (2025 me mangalwar); webindia123 ka 10 Jul 2026 article bhi isi 28 June flood + central team ki baat karta hai. Isliye dates 2026.
// REJECT-LOG (ninong-ering):
// R1. CM Pema Khandu dwara Smart Guest House, Riverfront, District Library & e-Learning Centre aur Market Area Upgradation ka lokarpan, Pasighat (northeasttoday.in, 2026-10-07). REJECT: CM ne lokarpan kiya; Ering sirf maujood the (Dy CM, MP Tapir Gao, MLAs ke saath). Source: https://northeasttoday.in/northeast/arunachal-pradesh/arunachal-khandu-unveils-rs-25-65-cr-smart-guest-house-riverfront-and-other-projects-at-pasighat/
// R2. District Emporium ka lokarpan, Pasighat (indiatodayne.in, 2025-09-06) — mantri Nyato Dukam ne kiya; Ering sirf maujood. REJECT: dusre neta ke karyakram me maujoodgi. Source: https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-pasighat-gets-new-district-emporium-as-minister-nyato-dukam-champions-rural-artisans-1273500-2025-09-06
// R3. Governor dwara RRU Pasighat campus me drug-testing/psychosocial centres ka udghatan + Centre of Excellence foundation (ANI, 2025-10-06). REJECT: Governor ne kiya; Ering sirf maujood. Source: https://arunachalgovernor.gov.in/pr/2025/251006_Governor_digitally_unveils_Testing_of_Drugs.pdf
// R4. SAKSHAM learning hub ka udghatan, Pasighat (indiatodayne.in, 2025-07-07) — mantri P.D. Sona ne kiya; Ering sirf maujood. REJECT: dusre neta ke karyakram me maujoodgi. Source: https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-minister-inaugurates-state-of-the-art-learning-hub-in-pasighat-empower-young-minds-1240961-2025-07-07
// R5. "Ering seeks FDR funds for flood-hit East Siang" (Arunachal Times, 2026-07-04) — Ering ne CM aur Union Minister Kiren Rijiju se Flood Damage Repair scheme ke tahat funds ki demand ki aur officials ko proposal banane ka nirdesh diya. REJECT: sirf maang/prastav — koi mantri-ashwasan ya manzoori report nahi. Source: https://arunachaltimes.in/article/ering-seeks-fdr-funds-for-flood-hit-east-siang
// R6. NEIAFMR capacity expansion ka foundation (arunachal24.in, ~Jan 2024) — Union Minister Sonowal + CM ne kiya; Ering sirf maujood. REJECT: pre-term + sirf maujoodgi. Source: https://arunachal24.in/union-minister-sarbananda-sonowal-and-cm-pema-khandu-lay-foundation-stone-for-capacity-expansion-at-neiafmr-pasighat/
// R7. Bogong Banggo Kebang Market Complex ka foundation (nenow.in, 2021) — Dy CM Chowna Mein ne kiya. REJECT: pre-term (MP-karyakaal). Source: https://nenow.in/north-east-news/arunachal-deputy-cm-lays-foundation-stone-of-market-complex-at-pasighat.html
// R8. UPSC aspirants ko Rs 1 lakh each cash incentive (nenow.in, Jun 2025). REJECT: daan/rahat — cash incentive, bhautik nirmaan-yukt kaam nahi. Source: https://nenow.in/north-east-news/arunachal-pradesh/arunachal-mla-ninong-ering-empowers-upsc-aspirants-with-financial-aid.html
// R9. Mission APSSB 2026 coaching launch, 140 aspirants (Arunachal Times, 2026-03-31). REJECT: coaching sponsorship — bhautik sanrachna nahi. Source: https://arunachaltimes.in/article/erings-mission-apssb-2026-launched
// R10. 43 Ruksin gaon burahs ka Kaziranga exposure tour (hornbillnews.in, 2026-03-01). REJECT: source non-whitelist + awareness tour, nirmaan nahi. Source: https://www.hornbillnews.in/2026/03/43-ruksin-gaon-burahs-visit-kaziranga.html
// R11. Siang Upper Multipurpose Project ke support me bayan (indiatodayne.in, 2026-09-30; daijiworld/IANS, 2024-07-19). REJECT: rai/dawa — koi bhautik kaam nahi. Sources: https://www.indiatodayne.in/arunachal-pradesh/video/i-have-been-in-favour-of-mega-dams-arunachal-mla-ninong-ering-backs-siang-project-calls-for-informed-approach-1457298-2026-09-30 ; https://www.daijiworld.com/news/newsDisplay?newsID=1209087
// R12. AICRP-MAP&B annual group meeting, Pasighat (icar.org.in, Jan 2026) — chief guest. REJECT: mukhya-atithi, koi kaam nahi. Source: https://icar.org.in/en/33rd-annual-group-meeting-aicrp-medicinal-and-aromatic-plants-betelvine-organised
// R13. Daying Ering "Statue of Excellence" ka unveiling, Pasighat (northeasttoday.in, ~2026-08) — Dr. Tapi Ering (TMMS president) ne kiya; Ninong Ering sirf maujood. REJECT: dusre vyakti ne kiya. Source: https://northeasttoday.in/northeast/arunachal-pradesh/arunachal-statue-of-excellence-of-late-dr-daying-ering-unveiled-at-pasighat/
// R14. Rs 10 lakh school renovation sanction (Arunachal Times archive, 2022-05-25). REJECT: pre-term (MP-karyakaal). Source: https://archive.arunachaltimes.in/index.php/2022/05/25/ering-sanctions-rs-10-lakhs-for-school-renovation/
// R15. Niglok Clean & Green Panchayat shilanyas (easternecho.in, 2025-02) — mantri Ojing Tasing ne kiya; Ering sirf maujood; source non-whitelist. REJECT. Source: https://easternecho.in/2025/02/13/niglok-gram-panchayat-set-to-become-model-eco-village/
// R16. Voice of Adi singing finale me moral support (YouTube, 2026). REJECT: samaroh + source non-whitelist.
// R17. Rema nadi par damaged RCC bridge ke liye PMGSY ke tahat scheme propose karne ka ashwasan (Arunachal Times, 2026-07-15 — entry-source article me hi). REJECT: sirf prastav ka ashwasan, sanction nahi.
// R18. AIU Anveshan 2025 chief guest, Apex Professional University (nashik24/urbannewsonline, 2025-11) — REJECT: mukhya-atithi + sources non-whitelist.
// R19. East Siang Veteran Futsal League closing me dignitary (YouTube, 2026). REJECT: samaroh, source non-whitelist.
// NOT-A-NEGATIVE: NEHRLN ne July 2024 me Ering (aur Oni Panyang) ko Upper Siang me mega dams ko support dene par slam kiya (Arunachal Times via sandrp.in/2024/07/29) — civic-body criticism hai, FIR/adhikari-pusht jaanch nahi; negative gate fail. scroll.in (2026-10) SUMP protest article me Ering ka naam "dam banega" kehne walon me aaya — koi aarop/FIR Ering ke khilaf nahi; vandalism Oni Panyang ke ghar par hua. Paras Singh 2021 racial-remarks case me Ering complainant the, accused nahi (pre-term bhi). Negatives: 0.
// RETRY-LEADS (ninong-ering):
// L1. DIPR Arunachal press releases (East Siang / Pasighat West) — MLALAD vitaran/work-order ki itemized sarkari report mile to VALID; is run me nahi mili.
// L2. Eastern Sentinel archive (easter n sentinel.in) par 'Ninong Ering' site search — inspection/coordination snippets mile lekin itemized lokarpan/sanction report nahi; archive search dobara try karo.
// L3. Arunachal Times archive 'Ering' keyword search — 2024-26 me Lesing water project ke alawa MLALAD school/road works ki report nahi mili; dobara check karo.
// L4. FDR scheme outcome follow-up: "Ering seeks FDR funds" (2026-07-04) ke baad CM/Rijiju/central inter-ministerial team ke visits hue; FDR manzoori ki follow-up report mile to 'swikriti' entry mumkin.
// L5. Lesing mega water project ka tank-storage renovation "few weeks" me hona tha (5-Jul article); completion ki follow-up report nahi mili — mile to entry E1 ka stage update ho sakta hai.
// REJECT-LOG (ninong-ering) — COORDINATOR-DROP: R20. Rs 25 lakh vyaktigat yogdaan (water restoration) — vyaktigat charity/disaster-relief = standing rule se NOT works (worker ne borderline rakha tha, entry #5 se hata diya gaya).
// REJECT-LOG (tapi-darang, Pasighat East): 1. indiatodayne.in + arunachal24.in (2025-10-20) Sober Society de-addiction centre lokarpan — private NGO 'The Sober Society' ka nij centre; Darang sirf mukhya-atithi. 2. arunachal24.in + arunachaltimes.in (2026-01-30) Project Arohit launch — DC Sonalika Jiwani dwara conceptualised, district administration + departments dwara implemented; sarkari abhiyan ka keval shubharambh, nirmaan-yukt kaam nahi. 3. hindustanpioneer (2026-05-16) Tulang edible oil factory — private factory, mantri Nyato Dukam ne udghatan kiya; Darang sirf maujood; source non-whitelist. 4. northeasttoday.in (2026-10-07) CM Khandu ka Rs 25.65cr Smart Guest House + riverfront + District Library + Market upgradation lokarpan — CM ne kiya; Darang sirf maujood. 5. arunachal24.in (2025-09) Denam A:nam Pasighat Abhiyan launch — swachhta abhiyan ka shubharambh, nirmaan nahi. 6. easternsentinel.in + indiatodayne.in (2025-02-14) ABSU 12-hour bandh — Darang ne press ko kaha Balek Road renovation ke funds 'already sanctioned'; GO/swikriti document nahi; ghoshna jaisa dawa. 7. easternsentinel.in + archive.arunachaltimes.in (2024-06-26/27) DC office complex ka daura + 'priorities' — sirf daura/ashwasan. 8. arunachaltimes.in (2024-07-13) coordination meeting — review meeting; koi sarkari kaam ka nateeja nahi. 9. indiatodayne.in (2024-08-18) Siang flood-erosion survey — survey Mebo MLA + WRD officials ne kiya; Darang ne sirf Raneghat bridge par well-wish diye; vyaktigat bhoomika nahi. 10. arunachaltimes.in (2026-06) Union ministers + CM ka flood-damage assessment East Siang — Darang sirf maujood. 11. theweek.in (PTI, 2025-08-12) HIV awareness campaign — Health Minister ne launch kiya; Darang sirf saath + student rally me maujood. 12. arunachal24.in (2025-08) Rs 1,063cr Medical College (BPGH) consultative meeting — Darang sirf attendees me se ek. 13. indiatodayne.in (2025-07-07) SAKSHAM learning hub Pasighat — Minister Sona ne udghatan kiya; Darang sirf maujood. 14. webindia123 (ANI, 2025-10-07) Governor ka RRU campus me drug-testing + psychosocial centre udghatan — Governor ne kiya; Darang sirf maujood. 15. indiatodayne.in (2024-12-10) Pasighat Press Club renovation — Minister Dukam ne inspection kiya aur untied/MLA LAD fund se renovation ka ashwasan diya; Darang sirf saath; fund-ghoshna mantri ki. 16. arunkhabar.in + arunachal24.in + easternsentinel.in (2026-10-12) PMC marathon flag-off — keval marathon ka flag-off, nirmaan nahi. 17. indiatodayne.in (2026-06-01) Anti-Malaria Month chief guest — abhiyan ka shubharambh. 18. arunkhabar.in (2026-09-17) Seva Mera Yogdan / Swachhata Hi Seva flag-off — abhiyan launch; Darang ne keval vehicles flag-off kiye. 19. arunkhabar.in (2026-04-22) DPRC hub — MLA Taniya Soki ne udghatan kiya; Darang sirf Guest of Honour; source non-whitelist (DIPRO-sourced). Negatives: 0 — karyakaal (Jun 2024+) me established media par Darang ke khilaf koi FIR/janch/probe report nahi; 2024 ke halafname (myneta) me 0 criminal cases declared.
// RETRY-LEADS (tapi-darang): 1. Eastern Sentinel archive par 'Tapi Darang' ka direct search — search snippets me kai pages mile (daura/priorities/bandh) lekin vyaktigat lokarpan/shilanyas ka koi extra itemized piece index nahi hua; easternsentinel.in ke site search se dobara try karo. 2. Arunachal Times archive 'Darang' search — 2025-26 me MLALAD vitaran, school/hospital/road works ki itemized report nahi mili; archive.arunachaltimes.in ka keyword search retry karo. 3. DIPR Arunachal ke Pasighat-district press releases — Darang dwara MLALAD se distribution ki itemized media report nahi mili; DIPR portal par sarkari release ho to VALID ho sakta hai.
// REJECT-LOG (oken-tayeng):
// R1. "East Siang MLAs meet Sigar Military officials to push dual-use infra projects worth Rs 573 cr" (arunachal24.in, 2025-07-10) — Mebo-Dhola double-lane road (Rs 424.27 cr) + Taro Tamak bridge proposed by MLA to Army; proposal only, no sanction/work. REJECT: sirf maang/prastav. https://arunachal24.in/arunachal-east-siang-mlas-meet-sigar-military-officials-to-push-dual-use-infrastructure-projects-worth-rs-573-cr/
// R2. "CM Khandu & MLA Tayeng meet Oil India officials to discuss Taro-Tamak bridge construction" (arunachal24.in, 2025-03-15) — discussion meeting, no work/sanction. REJECT: sirf maang/prastav. https://arunachal24.in/arunachal-cm-khandu-mla-tayeng-meet-oil-india-officials-to-discuss-taro-tamak-bridge-construction/
// R3. "Arunachal's Mebo, Dambuk set for improved connectivity with bridge over Taro-Tamak: MLA Tayeng" (indiatodayne.in, 2025-03-15) — bridge proposal stage. REJECT: sirf maang/prastav. https://www.indiatodayne.in/arunachal-pradesh/video/arunachals-mebo-dambuk-set-for-improved-connectivity-with-bridge-over-taro-tamak-mla-tayeng-1184085-2025-03-15
// R4. "Arunachal: WRD, Mebo MLA survey Siang River to check flood erosion" (nenow.in, 2025-12-31) — ground survey done as per MLA direction; flood-control works only planned/crowdfunded future tense. REJECT: survey bina dastaveji nateeje ke. https://nenow.in/north-east-news/arunachal-pradesh/arunachal-wrd-mebo-mla-survey-siang-river-to-check-flood-rrosion-in-east-siang.html
// R5. "Arunachal: MLA Oken Tayeng, DC Sonalika Jiwani inspect flood-hit Mer and Gadum villages" (arunachal24.in, 2025-07-21) — nirikshan visit + Rs 228 cr proposal returned by Centre; assurances only. REJECT: sirf nirikshan + maang/prastav. https://arunachal24.in/arunachal-mla-oken-tayeng-dc-sonalika-jiwani-inspect-flood-hit-mer-and-gadum-villages/
// R6. "Oken Tayeng leads plantation drive in Mebo" (arunachal24.in, 2026-07) — Van Mahotsav plantation under ECMM, no construction work. REJECT: nirmaan-yukt kaam nahi. https://arunachal24.in/oken-tayeng-leads-plantation-drive-in-mebo/
// R7. "Siang flood warriors celebrate success of community-led flood control works in Borguli" (indiatodayne.in, 2025-08-21) — community-led works by Gekong Pertin; MLA only attendee + one of 148 contributors. REJECT: dusre ke kaam me maujoodgi. https://www.indiatodayne.in/arunachal-pradesh/story/siang-flood-warriors-celebrate-success-of-community-led-flood-control-works-in-borguli-1265188-2025-08-21
// R8. "Aohali declared 'zero hunting village'" (Arunachal Times, 2025-02-04) — welcome gate inaugurated by Home Minister's adviser Mutchu Mithi; MLA only present. REJECT: vyaktigat lokarpan nahi (lokarpan adviser ne kiya). http://archive.arunachaltimes.in/index.php/2025/02/04/aohali-declared-zero-hunting-village-2/
// R9. Mebo-Temi sister constituency partnership/MoU (Feb + Oct 2026) — CM-driven intent/MoU framework, no completed work. REJECT: intent/document, nirmaan nahi.
// R10. "Oken Tayeng named PPA Legislature Party leader" (PTI via outlets, 2025-07-28) — party role, not constituency work. REJECT.
// R11. Tulang edible oil factory opening, Pasighat (May 2026) — inaugurated by Minister Nyato Dukam; MLA merely present. REJECT: maujoodgi.
// R12. "MLA stresses coordination, quality work execution" (Arunachal Times, 2025-04) — departmental review meeting chaired by MLA. REJECT: meeting, kaam nahi. https://arunachaltimes.in/article/mla-stresses-coordination-quality-work-execution
// R13. "Arunachal: Mebo MLA Oken Tayeng backs village cleanliness drive with equipment distribution" (nenow.in, 2026-07-07) — 7 grass cutters distributed, funded by private individuals. REJECT: daan/rahat kaam, nirmaan nahi. https://m.nenow.in/article/arunachal-pradesh/arunachal-mebo-mla-oken-tayeng-backs-village-cleanliness-drive-with-equipment-distribution/519985/amp
// R14. "MLA inaugurates new school facilities" (Arunachal Times) — Pasighat East MLA Tapi Darang ka kaam, Oken Tayeng nahi. REJECT: naam-jaal (galat MLA). https://arunachaltimes.in/article/mla-inaugurates-new-school-facilities
// R15. Ex-servicemen rally felicitation + HDMT football closing ceremony (Eastern Sentinel, 2025) — MLA as special guest/facilitator. REJECT: maujoodgi.
// R16. "Siang erosion washes away power lines" visit, Namsing (Eastern Sentinel) — flood inspection visit by MLA. REJECT: sirf nirikshan.
// R17. "Arunachal: Mebo MLA pushes for sports and wildlife conservation" (indiatodayne.in, 2024-10-14) — cricket final attendance; renovation assurance for Borguli playground + community hall = future assurance only. REJECT: maujoodgi + ghoshna. https://www.indiatodayne.in/amp/arunachal-pradesh/story/arunachal-mebo-mla-pushes-for-sports-and-wildlife-conservation-1106342-2024-10-14
// R18. SAKD 2.0 inauguration at Kiyit (arunachalnews.in, Mar 2026) — non-whitelisted + sarkari abhiyan shubharambh. REJECT.
// R19. Mission Krishiveer Army launch (blogspot, Feb 2026) — non-whitelisted; Army initiative; MLA attendee. REJECT.
// R20. Selfie point/tree-top house at Aohali (YouTube) — non-whitelisted source (YouTube). REJECT.
// R21. Four NPP MLAs switch to PPA (Eastern Sentinel, 2025-06-16) — party politics, not works. REJECT.
// R22. Siang river erosion farmland stories (shillongnews.com etc, Sep 2026) — non-whitelisted; MLA "pursuing sanction" = proposal stage. REJECT.
// R23. NPP merger/political reports (dailypioneer etc) — not constituency works. REJECT.
// RETRY-LEADS (oken-tayeng):
// L1. Ngopok Korong Bailey bridge + Livelihood Service Centre (Bosi Didum Ane Integrated Farming Cluster) + restored Musup (community hall) at Ngopok, inaugurated by MLA on Thursday (reported 2026-08-13, northeasttoday.in). Non-whitelisted source only (northeasttoday.in; obnews.co is aggregator). Seek Arunachal Times / Eastern Sentinel / arunachal24 / nenow / indiatodayne / EastMojo coverage; fund source currently undisclosed in available report. If whitelisted coverage with fund disclosure found: 3 entries (Sadak/bridge, Any/livelihood centre, Any/musup hall) possible. https://northeasttoday.in/northeast/arunachal-pradesh/arunachal-mla-oken-tayeng-inaugurates-ngopok-korong-bridge-livelihood-centre-restored-musup-in-mebo/
// L2. Sanggo Residential School (Mebo village) child molestation case — MLA announced psychological counselling, trauma support and village/school-level child-safety awareness programmes (indiatodayne.in, 2025-10-31). Announced measures, completion not documented. If whitelisted follow-up reporting confirms counselling/awareness programmes were actually held: possible School/sarkari entry. https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-mebo-mla-condemns-child-molestation-incident-urges-community-solidarity-1297801-2025-10-31
// L3. Zero-hunting welcome gate at Aohali (Arunachal Times, 2025-02-04): inauguration was by Home Minister's adviser Mutchu Mithi, but "it was the local MLA's initiative to declare Aohali as zero hunting village" per the report. If a future whitelisted report shows the MLA personally inaugurating completed physical assets under Eco-Clean Mebo Mission with fund disclosure, re-evaluate.
// ---- East Siang district batch END (5 entries, negatives 0) ----

// ---- Dibang Valley district batch (researched 2026-10-17) ----
// COORDINATOR REVIEW: 1 worker ka report merge kiya gaya. Mopi Mihu ka 1 entry (Anini DH me DMFT-fund hui
// dental OPD ka lokarpan — fund DMFT + MoU dono report me disclosed; stage lokarpan). Mishmi Takin statue
// (fund undisclosed) aur tulip trial (vyaktigat-yogdaan jaisa) reject hue — retry-lead banaye gaye. CM/DCM ke
// karyakramon me maujoodgi ke saare leads reject. Date note ke mutabiq 30 May 2025 (article 31 May 2025).
arunachalWorks['mopi-mihu'] = [
  {
    title: 'Anini ke MLA Mopi Mihu ne jila hospital me District Mineral Fund Trust se fund hui dental OPD ka lokarpan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2025/05/31/mla-inaugurates-dental-opd-at-dh/',
    date: '2025-05-30',
    note: '30 May 2025 ko MLA Mopi Mihu ne Dibang Valley ke jila hospital (DH) Anini me dental OPD ka lokarpan kiya. OPD me dental chair, X-ray machine aur AVG sensor lage hain, aur ye suvidha District Mineral Fund Trust (DMFT) se fund hui hai. Medical Superintendent Dr Rita Mena aur Assistant Mineral Development Officer Anmol Singh ke beech DMFT ke tahat dental upkaran ke liye MoU par hastakshar hue. ZPC Theko Tayu bhi karyakram me upasthit the. Mihu ne kaha ki aanewali nayi medical building poori tarah susajjit hogi aur usme mortuary manzoor ho chuki hai.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (mopi-mihu, Anini): 1. Mishmi Takin statue unveiling, Anini (29 Jan 2026, nenow/arunachal24/easternsentinel) — MLA ne anavaran kiya lekin fund-srot undisclosed — shanka par reject; retry-lead (DIPR GO me DMFT/tourism budget mile to entry). 2. Tulip trial, Anini (7 Mar 2026, arunachal24) — "funded by Mopi Mihu, MLA" — vyaktigat yogdaan jaisa; koi sarkari sanrachna nahi. 3. Cabinet Aapke Dwar, Anini (1 Feb 2026) — DH, Circuit House, DPRC, museum, Sky Walk, tourism complex, airport ghoshna — sab CM ne kiye; MLA sirf maujood. 4. Reh Festival (Feb 2026) — CM ne 14 lokarpan + 2 MW Ange Water Micro Hydel shilanyas; MLA maujood. 5. Mishmi Hut + hostel-cum-guest house, Jollang Itanagar (Oct 2025) — DCM Chowna Mein ne kiya; MLA maujood. 6. Kibithoo flag/tourist infra (Nov 2025) — DCM ne kiya; sthal Anjaw jila (seat se bahar). 7. DCM takes stock of Dibang Multipurpose Project (Jan 2025) — nirikshan; NHPC par shrey nahi. 8. Raja urban dev review, Anini (Sep 2026) — samiksha baithak. 9. National Tourism Day nature guides certification (Jan 2026) — samaroh. 10. Anini Winter Fest 5.0 (Sep 2026) — mantri Balo Raja ne kiya; MLA maujood. 11. Naba Tade Tacho Memorial Football Tournament (Jul 2026) — MLA patron ke roop me maujood; khel samaroh. 12. PAC sitting (Oct 2026) — samiti me upasthiti. 13. Pre-term leads — I-Day 2021 inaugurations, Roing-Anini bus Dec 2020, ambulance Dec 2019, A2 turf ground Apr 2024, skill training Jan 2020 — sab 1 Jun 2024 se pehle. 14. Yoga Day 2025 — samaroh me bhagidari.
// RETRY-LEADS (mopi-mihu): 1. Mishmi Takin statue fund-srot (DIPR release/GO); 2. Tulip trial ka sarkari fund-srot; 3. 1 Feb 2026 Anini cabinet me MLA-pratinivedan ka CM dwara sarvajanik shrey (capped entry possible); 4. Vidhan Sabha 2025-26 me Mihu ke prashn/maang ke dastaveji nateeje (arunachaltimes/easternsentinel archive search); 5. DMFT-funded aur kaam Dibang Valley me (2024-26) ki itemized media report; 6. Etalin hydropower/land-compensation par sarvajanik shrey.
// ---- Dibang Valley district batch END (1 entry, negatives 0) ----

// ---- Lower Dibang Valley district batch (researched 2026-10-17) ----
// COORDINATOR REVIEW: 2 workers ke reports merge kiye gaye. Apum ka 1 entry (Malek sub-health centre lokarpan —
// bhoomika vyaktigat disclosed; fund-srot report me undisclosed — udghatan-matra class precedent par rakha, note
// me antar disclosed). Mithi ka 1 entry (Kebali/Balek/Horupahar me 3 sub-health centres ka lokarpan — bhoomika
// vyaktigat disclosed; fund-srot undisclosed — wahi precedent). NHPC CSR bus flag-off, DMP site visits, Dy CM ke
// karyakram (Dambuk) sab sahi reject hue. Negative: dono ke liye 0.
arunachalWorks['puinnyo-apum'] = [
  {
    title: 'Dambuk ke MLA Puinnyo Apum ne Malek gaon me naye sub-health centre ka lokarpan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://archive.arunachaltimes.in/index.php/2025/09/03/mla-inaugurates-sub-health-centre/',
    date: '2025-09-02',
    note: 'Roing dateline wali DIPRO report ke anusaar MLA ne Malek me sub-health centre ka lokarpan kiya; kendra Malek, Gergam aur Debanath gaon ke 1,000 se adhik logon ko sehat suvidha dega; karyakram me SP Ringu Ngupok, DMO Dr Worar Taku, PHED&WS EE John Lego sahit adhikari maujud the; gaon walon ke gyaapan par MLA ne sehat ke muddon ko prathmikta par uthane ka aashwasan diya; report me fund ka source nahi bataya gaya.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
arunachalWorks['mutchu-mithi'] = [
  {
    title: 'Roing ke MLA Mutchu Mithi ne Lower Dibang Valley ke Kebali, Balek aur Horupahar me 3 sarkari sub-health centres ka lokarpan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/mithi-inaugurates-3-sub-health-centres',
    date: '2026-06-22',
    note: 'Teenon centres 2014 me sarkar ne notify kiye the. MLA ne Health Department ko nirdesh diya ki saare avashyak davaaon ka stock rakha jaye aur gaonvalon se department ke saath sahyog ka aagrah kiya. Infrastructure development ke liye fund sanction ka mudda sarkar ke saath uthane ka aashwasan diya. Karyakram me DC Fwwrman Brahma, DMO Dr Worar Taku, Health aur PHE&WS departments ke adhikari, PRI members aur janata maujood the. Report me fund ka source nahi bataya gaya.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (puinnyo-apum, Dambuk): 1. NHPC CSR bus flag-off (Eastern Sentinel, Jun 2025) — NHPC ne bus donate ki, MLA ne sirf flag-off kiya; CSR samaroh. 2. Dibang Multipurpose Project site visits (indiatodayne Dec 2024; PTI/theweek Feb 2026) — NHPC project, MLA mantri ke saath; shrey nahi. 3. Dy CM Chowna Mein ki Dambuk visit (arunachal24 + indiatodayne, Jan 2025) — police station building lokarpan + Bongal Yapgo War Memorial shilanyas Dy CM ne kiya; MLA sirf maujood. 4. Union MSME minister review meeting (PTI/theprint, Apr 2025) — MLA ne SBI branch + water supply ki maang uthayi; sirf maang. 5. Tobacco-free Youth Campaign 3.0 launch (Arunachal Times, Oct 2025) — abhiyan shubharambh, nirmaan nahi. 6. Septage treatment plant Chowkham + Lohit organic unit (Arunachal Times, Apr 2025) — DCM ne kiya; MLA maujood. 7. CM Khandu ke Lower Dibang Valley projects (PTI/theweek, Sep 2025) — shilanyas CM ne kiya; MLA saath the. 8. MP Tai Tagak ka Ambir Megu Bhawan lokarpan, Jia (arunkhabar) — MP ka karyakram; non-whitelist. 9. Sisiri nadi machhuara rescue (arunachal24) — rahat-karya, nirmaan nahi. 10. Mirem Batum Lingkang war memorial, Adi Pasi (Eastern Sentinel) — DCM ne kiya; MLA attendee. 11. ABVP 12th state conference Tezu (Eastern Sentinel, Nov 2025) — atithi. 12. Traditional Festivals book release (Eastern Sentinel, Dec 2024) — Dy CM ne release ki.
// REJECT-LOG (mutchu-mithi, Roing): 1. Multipurpose indoor hall shilanyas (2018, Eastern Sentinel/Arunachal Times) — pre-term. 2. IOCL CSR medical equipment lokarpan, District Hospital Roing (Jun 2025, The Roing Times via findglocal) — non-whitelist + CSR samaroh. 3. Zero Hunting signage, Aohali (nenow, Feb 2025) — Mebo seat me mukhya-atithi ke roop me sanketik lokarpan; nirmaan nahi. 4. Bazar Shiv Mandir lokarpan, Roing (arunachal24, Oct 2023) — lokarpan Dy CM Chowna Mein ne kiya; Mithi sirf maujood. 5. RK Mission HS extension block, Narottam Nagar (arunachal24, Sep 2024) — mantriyon ne kiya; Mithi vishesh atithi. 6. CM Khandu dwara Lower Dibang Valley me hostel/road/bridge (PTI/theweek, Sep 2025) — CM ka kaam; MLA bhoomika undisclosed. 7. Roing water supply DMF Rs 1 crore+ nirnay (Northeast Today, Oct 2026) — non-whitelist; retry-lead. 8. 4th PM Youth Camp udghatan, Anini (arunkhabar/YouTube, Oct 2026) — shivir shubharambh. 9. GHSS Roing building nirikshan (YouTube, ~Oct 2026) — nirikshan + non-whitelist; Dec 2026 handover ke baad retry. 10. Schools me samagri vitaran (YouTube) — vyaktigat vitaran + non-whitelist. 11. Rescue cage daan, Mehao (Arunachal Times, Feb 2025) — Mukut Mithi (RS MP) ka kaam tha, Mutchu Mithi ka nahi (naam-jaal saaf); daan bhi reject. 12. Denlo model village nirnay (Arunachal Times, Jun 2018) — pre-term. 13. Roing fire: MLALAD Rs 50 lakh + Rs 5 lakh raahat (Aug 2018) — pre-term + rahat reject. 14. RIWATCH Documentation Center shilanyas (Nov 2017) — Mukut Mithi + pre-term. 15. Tiger advisory social media post (PTI/swadesi, Oct 2026) — sirf appeal.
// RETRY-LEADS (puinnyo-apum): 1. Water supply scheme + SBI branch Dambuk (Apr 2025 ki maang ka follow-up); 2. Electrical Sub-Division Dambuk (Dy CM ashwasan, indiatodayne Jan 2025) implementation; 3. Bongal Yapgo War Memorial completion; 4. Malek centre aur outlets par coverage; 5. MLALAD FY 2025-26 Dambuk itemized sanction/vitaran (sarkari portal).
// RETRY-LEADS (mutchu-mithi): 1. DMF water-supply decision (Oct 2026) ka whitelisted coverage — swikriti/poora-kaam stage; 2. GHSS Roing building handover (Dec 2026) ke baad lokarpan mile to entry; 3. Sub-health centres fund-sanction follow-up.
// ---- Lower Dibang Valley district batch END (2 entries, negatives 0) ----

// ---- Lohit district batch (researched 2026-10-17) ----
// COORDINATOR REVIEW: 1 worker ka report merge kiya gaya. Mohesh Chai ka 1 entry (Bekhuliang me NABARD LEDP-sponsored
// SHG Common Facility Centre ka vyaktigat lokarpan — fund NABARD LEDP + ArSRLM implementation dono disclosed; stage
// lokarpan; date 2026-03-31 weekday-crosscheck se pakki). Private hospital lokarpan (niji suvidha) aur YouTube-only
// lokarpan sahi reject hue. Negative: 0 (halafname ka 1 pending mamla akele negative nahi).
arunachalWorks['mohesh-chai'] = [
  {
    title: 'Tezu ke MLA Mohesh Chai ne Bekhuliang me SHG Common Facility Centre ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Eastern Sentinel',
    sourceUrl: 'http://easternsentinel.in/news/state/cfc-inaugurated-at-bekhuliang-village-to-boost-shg-livelihoods.html',
    date: '2026-03-31',
    note: 'Bekhuliang gaon (Sunpura block, Lohit) me hand-driven knitting machines se susajjit SHG Common Facility Centre ka lokarpan MLA Dr Mohesh Chai ne swayam kiya. CFC NABARD dwara sponsor kiye gaye Livelihood and Enterprise Development Programme (LEDP) ke tahat sthapit hai aur ise Arunachal State Rural Livelihoods Mission (ArSRLM) ne implement kiya. SDO Tezu, NABARD AGM, ZPM Sunpura aur DIPRO Lohit upasthit rahe.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (mohesh-chai, Tezu): 1. Peelomai Tayang Memorial Hospital lokarpan (18 Nov 2025, indiatodayne) — niji (private) aspatal (Ojing Pul ne sthapit kiya); sarkari sanrachna nahi — chief-guest shirkat. 2. IGGC Tezu Commerce Block lokarpan (Oct 2024) — DCM Chowna Mein ne kiya; Chai maujood. 3. PMGSY-III FDR sadak flag-off (Apr 2025) — RWD mantri P D Sona ne netritva kiya; Chai saath the. 4. Septage treatment plant + Lohit Organic unit shilanyas/lokarpan (Mar 2025) — DCM ne kiya; Chai maujood. 5. DCM ke Lohit tourism/connectivity projects (Glaw Lake) — DCM ka lokarpan. 6. Tana Bana 2025 handloom expo (Jan 2025) — karyakram shubharambh. 7. Skill upgradation training programme (Apr 2025) — karyakram shubharambh; Rs 5-crore hostel keval ghoshna. 8. Ni-kshay Mitra pledge (Sep 2025) — keval vachan. 9. GEC Tezu induction ceremony (Sep 2026) — upasthiti; sthapna sarkar ka kaam. 10. Police Welfare School classroom lokarpan (~Jul 2026) — keval YouTube (non-whitelist); retry-lead. 11. Paya bridge pragati nirikshan (Apr 2025) — sirf nirikshan (PMGSY). 12. Tezu schools visit (Jan 2025) — nirikshan + aashwasan. 13. Yumbulaghang Community Hall lokarpan (May 2026) — Rinpoche ne kiya. 14. Team Lohit DLMC meeting (Apr 2025) — baithak. 15. Seva Sankalp Abhiyan Loiliang — abhiyan, nirmaan nahi. 16. IIFL/REACHA homestay training ceremony (Feb 2025) — CSR/NGO karyakram; non-whitelist. 17. BIOFACH-2026 Germany delegation (Feb 2026) — videsh daura. 18. Indoor football stadium Tezu (Rs 36 cr, stalled since Oct 2023) — 2018 me CM ne shilanyas kiya tha; wartaman karyakaal me pragati nahi. 19. PMGSY-III Wakro road/bridge lokarpan (May 2025) — DCM ne kiya (Kamphai bridge); Chai upasthit.
// RETRY-LEADS (mohesh-chai): 1. Police Welfare School classroom building lokarpan ka whitelisted coverage (YouTube me dikha); 2. MLALAD FY 2025-26 itemized sanction/vitaran (Tezu-Sunpura); 3. Rs 5-crore training-cum-hostel complex (DDTH Tezu) construction start/complete report; 4. Hostel-cum-training centre ghoshna (Tana Bana 2025) ka poora-kaam follow-up.
// ---- Lohit district batch END (1 entry, negatives 0) ----

// ---- Anjaw district batch (researched 2026-10-17) ----
// COORDINATOR NOTE: Dasanglu Pul 13 Jun 2024 se Pema Khandu cabinet me mantri (WCD/Culture/S&T) hain — mantri-niyam lagu; sirf Hayuliang seat ke kaam rakhe gaye.
arunachalWorks['dasanglu-pul'] = [
  {
    title: 'Dasanglu Pul ne Anjaw ke Walla gaon me Government Upper Primary School (GUPS) ki nayi RCC school building ka udghatan kiya.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Arunachal24',
    sourceUrl: 'https://arunachal24.in/dasanglu-pul-reviews-development-schemes-in-anjaw-calls-for-time-bound-action/',
    date: '2026-08-17',
    note: 'Arunachal24 ke mutabik Pul ne GUPS Walla (Anjaw jila, Hayuliang Vidhan Sabha kshetra) me nayi RCC school building ka udghatan kiya; udghatan samaroh me Anjaw DC Millo Kojin aur SP Anurag Dwivedi maujood the; Pul ne kaha ki nayi school infrastructure bachchon ko surakshit aur anukool padhai ka mahaul degi.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Dasanglu Pul ne Walong ke Sarti gaon me Government Residential School (GRS) ke upgradation aur naye community shed ka shilanyas kiya.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'India Today NE',
    sourceUrl: 'https://www.indiatodayne.in/arunachal-pradesh/story/arunachal-minister-lays-foundation-for-school-upgrades-community-shed-in-walong-1137981-2024-12-15',
    date: '2024-12-15',
    note: 'India Today NE ke mutabik Pul (WCD mantri aur Hayuliang ke local MLA) ne Sarti (Walong circle, Hayuliang Vidhan Sabha kshetra) me GRS ke sudhaar aur naye community shed ke foundation stones rakhe; samaroh me 82nd Mountain Brigade ke Commander Brigadier Revetty Bhandari aur Deputy Commander Colonel Deepak Kataria maujood the. NOTE: Dono project Bharatiya Sena ke Operation Sadbhavna 2024-25 ke tahat kendriya fund se bante hain; report ke mutabik projects ki manjoori aur kriyanvayan me Sena ke Commanding Officer ki pramukh bhoomika thi — isliye Pul ka shrey seemit (shilanyas-bhoomika tak).',
    period: '2024-2029',
    stage: 'shilanyas',
  },
];
// REJECT-LOG (dasanglu-pul, Hayuliang): 1. BJP Mandal Office, Hawai ka udghatan (Aug 2025, India Today NE/Eastern Sentinel) — REJECT (party office ka nirmaan sarkari bhavan nahi; party-sangathan infrastructure). 2. GHSS Hayuliang me Rs 18.60 crore school project ka nirikshan (Mar 2025, Arunachal24) — REJECT (sirf nirikshan/daura, koi lokarpan/shilanyas nahi). 3. 2 MW Ampani Hydropower Project (Huiliang) ka nirikshan (Apr 2026, India Today NE/Arunachal Times) — REJECT (sirf nirikshan; pariyojana Cabinet Aapke Dwar se ghoshit, MLA ki vyaktigat bhoomika nahi). 4. Vibrant Villages Programme road Goiliang-Glotonglat ka nirikshan (Feb 2026, Syllad) — REJECT (source whitelist me nahi + sirf nirikshan + kendriya VVP bina vyaktigat bhoomika). 5. Kamphai Bridge (193.05m, PMGSY-III) aur Wakro circle road projects ka udghatan (May 2026, nenow.in/Arunachal Times) — REJECT (Deputy CM Chowna Mein ne udghatan kiya; Lohit jila, Hayuliang kshetra nahi; Pul keval sath maujood thi). 6. Dy CM dwara 15 projects ka udghatan, Walong/Tinai/Kibithoo/Musai/Kaho (Oct 2023 ya usse pehle, Eastern Sentinel/ANI) — REJECT (dusre neta ke karyakram me maujoodgi + karyakaal se pehle ki sambhavit tithi). 7. Tha Nala Bailey Bridge, Hayuliang-Chaglohagam road (Aug 2024, Eastern Sentinel) — REJECT (Indian Army + BRO ne udghatan kiya; MLA ki koi vyaktigat bhoomika report nahi). 8. CESHS-OIL CSR ambulance Walong PHC ko, flagged off by Pul (Dec 2025, UNI) — REJECT (CSR daan samaroh me keval upasthiti; ambulance bhautik suvidha ka vyaktigat lokarpan nahi). 9. Anjaw Tourism website launch (Jun 2026, India Today NE) — REJECT (digital launch; bhautik sarkari sanrachna nahi). 10. Monpani NH-113 landslide trek, road reopening by Jun 22 ka ashwasan + permanent bypass ki ghoshna (Jun 2025, India Today NE) — REJECT (keval ashwasan/ghoshna; NH kendriya agency NHIDCL/Bhartia Infra ka vishay; Pul ki vyaktigat kriyanvayan-bhoomika nahi). 11. PMAY-G beneficiary selection review + district monitoring committee meeting, Hawai (Aug 2026, Arunachal24) — REJECT (baithak/nirikshan, koi bhautik lokarpan ya MLALAD sanction nahi). 12. Dibang Valley tourism promotional video launch (May 2025, Arunachal Times) — REJECT (digital video; bhautik kaam nahi). 13. 2023 election petition (Guwahati HC ne Apr 2023 me 2019 election null-void kiya) — negative nahi (chunav-yachika akele negative nahi; 2024 me nirvirodh punah-chuni gayi; halafname me 0 criminal cases).
// ---- Anjaw district batch END (2 entries, negatives 0) ----

// ---- Namsai district batch (researched 2026-10-17) ----
// COORDINATOR NOTE: Chowna Mein ki worker ki 5 entries me se 3 rakhi gayin (2 non-whitelisted sources — Northeast Today, Sentinel Assam — girai); baaki teeno ke English titles Roman-Hinglish me rewrite kiye gaye. DyCM-niyam lagu.
arunachalWorks['chowna-mein'] = [
  {
    title: 'Chowna Mein ne Chongkham me Jal Sansadhan Vibhag ke Sub-Divisional Office bhawan ka udghatan kiya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Eastern Sentinel',
    sourceUrl: 'http://easternsentinel.in/news/state/dy-cm-inaugurates-office-infra-at-chongkham-wakro.html',
    date: '2025-06-18',
    note: 'Eastern Sentinel ke anusaar bhawan RE (Revised Estimate) scheme se fund hua hai; isse Chowkham me WRD karmchariyon ke samanvay aur field survey behtar hone ki ummeed hai. Usi din Wakro me Junior Engineer office ka udghatan hua tha — wo Lohit jile me hai, isliye is entry me nahi hai.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Chowna Mein ne Chongkam ke Government Higher Secondary School me 6 staff quarter bhavan ka udghatan kiya.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Arunachal24',
    sourceUrl: 'https://arunachal24.in/arunachal-chowna-mein-inaugurates-new-staff-quarters-at-chongkam/',
    date: '2025-05-28',
    note: 'Arunachal24 ke anusaar ye G+2 staff quarters Golden Jubilee Model School Scheme ke tahat bane; Dy CM ne mukhya-atithi ke roop me phita kaatkar plaque ka anavaran kiya aur principal ko bhawan saunpe.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
  {
    title: 'Chowna Mein ne Chowkham me NEC-funded mini football stadium ka udghatan kiya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/dcm-inaugurates-mini-football-stadium-pays-tribute-to-football-personalities',
    date: '2026-07-28',
    note: 'Arunachal Times ke anusaar stadium North Eastern Council (NEC) fund se bana aur Rural Works Department (RWD) Namsai ne kaam kiya; isme modern artificial turf football field aur darshak-suvidhayen hain. Udghatan me Namsai MLA Chau Zingnu Namchoom, Sports Secretary Abu Tayeng aur jila adhikari maujood the — isliye Dy CM ka shrey lokarpan-bhoomika tak seemit.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (chowna-mein, Chowkham): 1. Nadi Utsav 2025 (Namsai, 30,000 fingerlings release) — REJECT (sarkari abhiyan ka keval shubharambh). 2. Buddha Vihara inauguration at Nongtaw Kham-II, Namsai — REJECT (47-Namsai seat, Chowkham seat se bahar). 3. Foundation stone of Lohit Organic FPO Integrated Processing Unit at Medo, Wakro circle, Lohit district — REJECT (seat se bahar). 4. Chongkham-Brahmakund highway acceleration call in NHIDCL meeting (Rs 44,000 crore expansion, 61.15 km) — REJECT (sirf maang, rajya-stariya kendriya pariyojana). 5. PMGSY-III road and bridge inaugurations in Lohit district — REJECT (seat se bahar). 6. Viksit Bharat Sankalp outreach tour across Chongkham — REJECT (sirf daura/nirikshan, koi bhautik kaam nahi). 7. Flood-affected areas inspection at Chongkham-4, Gunanagar, Kherem, Alubari — REJECT (sirf nirikshan, purana karyakaal). 8. CM Pema Khandu inaugurated 18 projects worth Rs 163.48 crore (16 Feb 2024) — REJECT (pre-term; dusre neta ke karyakram me keval upasthiti). 9. Subansiri Lower Hydroelectric Project milestone — REJECT (Power vibhag ka rajya-stariya faisla, DyCM-niyam). 10. Golden Pagoda patronage (2010) / Sangken festival rebirth coverage — REJECT (pre-term). 11. Football Training Centre proposal + hybrid turf stadium at Wakro / stadiums at Namsai and Tezu — REJECT (sirf ghoshna). 12. Tai Khamti Heritage Research and Development Centre — REJECT (sirf ghoshna, ongoing). 13. KAT YEIN drinking water brand launch, handloom unit for Angulimala Welfare Society rehab centre, Independence Day exhibition stalls — REJECT (keval shubharambh / NGO unit, sarkari sanrachna nahi). 14. Inspection of Circuit House, Golden Jubilee School Building for GHSS, Tai Khamti Cultural Heritage Building and flood protection works at Allubari — REJECT (sirf nirikshan). 15. JE Office at Wakro inaugurated with WRD Chongkham office — REJECT (Lohit district, seat se bahar; Chowkham office entry me alag darj). Negatives: koi nahi — MLA khud aaropi wala FIR/janch wala mamla established media me nahi mila. COORDINATOR-DROP: 16. Septage Management and Treatment Plant udghatan (Northeast Today, 2026-03-31) — REJECT (source whitelist me nahi; namchoom reject-log me bhi wahi event DCM-led darj). 17. Arunachal Pali Vidyapith 60-bed hostel lokarpan (Sentinel Assam, 2026-01-15) — REJECT (source whitelist me nahi).
arunachalWorks['chau-zingnu-namchoom'] = [
  {
    title: 'Bhogamur me MLALAD fund se bana naya Sub-Centre bhawan (Ayushman Arogya Mandir) ka lokarpan Namsai MLA Chau Zingnu Namchoom ne 14 Feb 2026 ko kiya.',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Arunachal Times',
    sourceUrl: 'https://arunachaltimes.in/article/mla-inaugurates-new-sc-building',
    date: '2026-02-14',
    note: 'The Arunachal Times ke anusaar MLA ne 14 Feb 2026 (Shanivar) ko Bhogamur, Namsai jile me MLALAD fund se nirmit naya SC bhawan ka lokarpan kiya; karyakram me DC C R Khampa, DMO Dr Nang Soreya Namchoom aur NQAS external assessor Dr Samipjyoti Bora upasthit the. DC ne SC bhawan swikrit karne ke liye MLA ka aabhar jataya; HWC SC ka naam badalkar Ayushman Arogya Mandir rakha gaya aur suvidha national-level NQAS certification ki taraf badh rahi hai.',
    period: '2024-2029',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (chau-zingnu-namchoom, Namsai): 1. Blood bank foundation stone, Namsai District Hospital (indiatodayne, 6 Sep 2026) — REJECT (Health Minister Biyuram Wahge-led foundation laying; MLA sirf 'along with' the minister the, vyaktigat lokarpan nahi). 2. Punaai Care Pvt Ltd detergent unit, Piyong (Arunachal Times, 11 Apr 2025) — REJECT (private startup; sarkari sanrachna nahi). 3. Jivaka Hospital, Namsai (Arunachal Times, 30 Mar 2025) — REJECT (private hospital; DCM Chowna Mein ne lokarpan kiya, MLA saath me upasthit). 4. Septage management and treatment plant, Alubari/Chowkham (Arunachal Times, 1 Apr 2025) — REJECT (DCM ne lokarpan kiya; MLA ki keval upasthiti). 5. District Library annex / new-age learning centre, Namsai (arunachal24, 12 Feb 2026) — REJECT (DCM ne lokarpan kiya; MLA ne sirf sambodhit kiya). 6. Govt officers' quarters foundation, Namsai (indiatodayne/arunachal24, 29 Jan 2026) — REJECT (CM Pema Khandu ne shilanyas kiya; MLA saath me upasthit). 7. Mahabodhi Lord Buddha College ke naye bhawan (arunachalobserver, 16 Aug 2026) — REJECT (DCM ne lokarpan kiya; MLA ki keval upasthiti). 8. Multi-village water supply Wagunpather + Mokrun community hall + Wagun IV bridge (8 Dec 2023) — REJECT (purana karyakaal; Jun 2024 se pehle). 9. Lift water supply, Lathao (Dec 2022) — REJECT (purana karyakaal). 10. APST bus station + 100-bedded boys hostel shilanyas, Namsai (Eastern Sentinel, ~2016-17, Parliamentary Secretary era) — REJECT (purana karyakaal). 11. Nongtaw Buddhist projects foundation ceremony (arunachal24) — REJECT (DCM-led; MLAon ki keval upasthiti). 12. RWD Minister Sona ka Namsai project review + Mahadevpur sadak/pul nirikshan (Arunachal Times) — REJECT (sirf nirikshan; MLA ka koi vyaktigat lokarpan nahi). 13. Govt Secondary School Jaipur me smart classroom review (northeasttoday, 4 Aug 2026) — REJECT (sirf school visit/nirikshan). 14. Sampoornata Abhiyan Samman Samaroh (1 Aug 2025) — REJECT (MLA mukhya atithi the; 10% MLALAD skill-development pledge = keval ghoshna, koi itemized sanction nahi). 15. Oil palm plantation programme, Chowkham (sentinelassam, Sep 2025) — REJECT (bhashan + incentives issue uthane ka ashwasan; koi dastaveji nateeja nahi). 16. Chakma-Hajong JAC meeting (nenow, 17 Oct 2025) — REJECT (baithak/samvad matra; koi nateeja nahi). 17. Veterans Seva Kendra lokarpan, District Secretariat (arunachal24, 14 Aug 2025) — REJECT (report MLA ko lokarpankarta nahi batati; bhoomika aspasht). 18. CM Pema Khandu ke Rs 105 crore shilanyas, Namsai (Nov 2024) — REJECT (CM-led; MLA ki vyaktigat bhoomika report me nahi). 19. VKV Namsai school building lokarpan + Rs 20 lakh computer lab sanction (National Youth Day, 12 Jan 2025) — REJECT (keval source vkvapt.org, school ki apni site; whitelisted news portal nahi; kisi whitelisted outlet me coverage nahi mili). 20. NCP leader Likha Saaya ka press-conference aarop (echoofarunachal) — REJECT as negative (viraodhi-dal ka raajnaitik aarop matra; MLA ke khilaf koi FIR ya naam-daar adhikari-pusht janch report me nahi; strict negative criteria poora nahi). 21. Buddha Vihara lokarpan, Namsai (indiatodayne, 5 Jul 2025) — REJECT (DCM-led; MLA ki keval upasthiti). 22. IGP-SP office building lokarpan, Namsai (thehillstimes, May 2025) — REJECT (DCM-led; MLA saath me upasthit).
arunachalWorks['likha-soni'] = [
];
// REJECT-LOG (likha-soni, Lekang):
// 1. Eastern Sentinel: 'Lekang MLA intervenes to check illegal sand mining' (Mahadevpur, Aug 22; http://easternsentinel.in/news/state/lekang-mla-intervenes-to-check-illegal-sand-mining.html) — Likha Soni ne Murticamp village ke aavedan par illegal sand mining rukwayi (EAC Mahadevpur, OC Police, PRI leaders ke saath). REJECT: enforcement/inspection action hai — koi bhautik sarkari sanrachna ka lokarpan/shilanyas/swikriti/fund-linked kaam nahi.
// 2. IndiaTodayNE (25 Nov 2024): 'Arunachal CM lays foundation stones for development projects worth Rs 105 crore in Namsai' — Soni sirf event me 'present' the; lokarpan/shilanyas CM ne kiya. REJECT: dusre neta ke karyakram me maujoodgi, vyaktigat bhoomika nahi.
// 3. Northeast Now: 'Arunachal govt is ready to issue PRCs to Lekang residents: NCP legislator' (https://m.nenow.in/article/arunachal-pradesh/arunachal-govt-is-ready-to-issue-prcs-to-lekang-residents-ncp-legislator/420566) — PRC issue par media statement; vyaktigat philanthropic work ka generic daava (Binod Morang ka bayaan), lekin koi specific fund/structure/proof nahi. REJECT: sirf ghoshna/bayaan, koi dastaveji kaam nahi.
// 4. Northeast Today (~Aug 2026): 'Arunachal CM Khandu Meets Lekang CBOs, Vows Action On Long-Pending Demands' — Soni + Nikh Kamin CBO memorandum lekar CM se mile; CM ka ashwasan. REJECT: maang/prastav delegation, ashwasan CM ka — MLA ke naam dastaveji nateeja nahi.
// 5. Northeast Now (Dec 2025): 'MLA Likha Soni confident as panchayat poll campaign ends' — panchayat chunav campaign statement. REJECT: political campaign, works se unrelated.
// 6. Arunachal Times: 'MLA inaugurates new school facilities' (https://arunachaltimes.in/article/mla-inaugurates-new-school-facilities) — Pasighat East MLA Tapi Darang ka kaam hai, Likha Soni se sambandh nahi. REJECT: galat neta.
// 7. LatestLY (PTI, ~Jun 2025): 'Arunachal Guv Visits Namsai, Reviews Progress of Govt Schemes' — Governor ke visit me Soni ne briefing di; koi vyaktigat kaam nahi. REJECT: sarkari daure me maujoodgi.
// 8. Negative check: halafname ke 4 cases (IPC 420, 409, 468, 406, 467, 477A, 120B, 471; FIR 255/2019, 02/2019, RCBSK2007E0003, 04/2007) election-affidavit me declared hain; Jun 2024 ke baad unme koi nayi FIR/giraftari/chargesheet/dosh-siddhi/adhikari-pusht janch whitelisted media me report nahi hui. REJECT: pre-term mamle me current legal development nahi, isliye negative entry nahi.
// ---- Namsai district batch END (4 entries, negatives 0) ----

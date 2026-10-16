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

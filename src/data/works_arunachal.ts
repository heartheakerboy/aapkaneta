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


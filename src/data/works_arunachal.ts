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

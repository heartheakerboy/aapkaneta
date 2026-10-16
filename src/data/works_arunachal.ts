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

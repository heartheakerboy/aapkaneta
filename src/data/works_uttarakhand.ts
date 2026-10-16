// Uttarakhand — neta-war kaam (works) ka placeholder.
// Mining baad me hogi: Vidhayak Nidhi (Rs 5 crore/seat/saal) ke tahat vikas karyon ke record
// jama karke yahan jode jayenge. Abhi khaali export — all.ts me wiring live hai, koi page nahi tootega.
export const uttarakhandWorks: Record<string, any[]> = {};

// ---- Uttarkashi district batch (researched 2026-10-17) ----

uttarakhandWorks['suresh-singh-chauhan'] = [
  {
    title: 'MLA ne Bhatwari me Sanglai-Kujjan-Tihar road ke blacktopping aur Syaba road cutting ka bhoomi pujan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/uttarkashi/mla-inaugurated-the-work-of-syaba-and-sanglai-road-uttarkashi-news-c-54-1-uki1002-110989-2025-02-10',
    date: '2025-02-10',
    note: 'Sanglai-Kujjan-Tihar motor marg par damrikaran (blacktopping) aur Syaba gaon ki sadak kataan ka kaam shuru hone se pehle vyaktigat bhoomi pujan; Syaba road eco-sensitive zone ke kaaran atki thi, MLA ke prayason se paryavaran mantralay ne swikriti di. Fund: PMGSY (kendriya yojna) — shrey PMGSY yojna ko, MLA ki bhoomika shilanyas + clearance me madad.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'MLA ne Jaspur, Nirakot aur Silyan gaon ki sadkon ka shilanyas kiya',
    category: 'Sadak',
    badge: 'sarkari',
    sourceLabel: 'Akashvani News (newsonair.gov.in)',
    sourceUrl: 'https://newsonair.gov.in/hi/%e0%a4%97%e0%a4%82%e0%a4%97%e0%a5%8b%e0%a4%a4%e0%a5%8d%e0%a4%b0%e0%a5%80-%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%be%e0%a4%af%e0%a4%95-%e0%a4%b8%e0%a5%81%e0%a4%b0%e0%a5%87%e0%a4%b6-%e0%a4%b8%e0%a4%bf/',
    date: '2024-02-01',
    note: 'Gangotri MLA Suresh Singh Chauhan ne Uttarkashi jile ke Jaspur, Nirakot aur Silyan gaon me vibhinn sadkon ka vyaktigat shilanyas kiya; report ke mutabik sadkon se kshetron ke logon ka aavaagaman aasaan hoga. Date caveat: page par prakashan-taareekh nahi hai; page ki tasveer ka upload path (Feb 2024) aur photo-code ke aadhaar par date anumanit hai, pramanit nahi. Source khud sarkari prasaran portal (Akashvani) hai.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'Vidhayak Nidhi se 1529 yojnaon ke liye Rs 19.13 crore swikrit; FY 2023-24 aur 2024-25 me nidhi shat-pratishat kharch — dono saalon me jile ke akele 100% wale MLA',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/uttarkashi-sanjay-dobhal-leads-uttarkashi-mla-fund-spending-40386381.html',
    date: '2026-09-26',
    note: 'Zila Vikas Vibhag ke aankdon (22 Sep 2026 tak) ke mutabik Gangotri seat ko kul Rs 23.27 crore aavantan ke sapeksh 1529 vikas yojnaon ke liye Rs 19.13 crore swikrit (82.2% upyog); is vitteey varsh me Rs 4.08 crore shesh. FY-wise swikriti (lakh): 2022-23: 367.44; 2023-24: 490.00; 2024-25: 490.00; 2025-26: 484.70; 2026-27: 81.50. Khaas: Chauhan akele aise MLA hain jinhone FY 2023-24 aur 2024-25 dono me aavantit nidhi shat-pratishat kharch ki. Vidhayak Nidhi aadhikarik roop se FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila aankdon me asal aavantan lagbhag Rs 4.90 crore/saal darj hai.',
    period: '2022-2027',
    stage: 'swikriti'
  },
];
// REJECT-LOG (suresh-singh-chauhan, Gangotri):
// 1. Dainik Bhaskar interview — "chauron taraf vikas ka dawa" (50-bed critical care centre, dialysis machines, sinchai naharen): vyapak interview-dawa, koi specific dated lokarpan/shilanyas ya dastaveji sanction nahi — REJECT. https://www.bhaskar.com/local/uttarakhand/uttarkashi/news/gangotri-mla-suresh-singh-chauhan-claims-all-round-development-138192138.html
// 2. Dialysis centre lokarpan, jila aspatal Uttarkashi (4 machines + Rs 76.50 lakh bhawan, MLA+MP nidhi) — vyaktigat lokarpan tha lekin sirf local portals (piyushtimes, bbnbharat, trueindiannews) par; whitelist source nahi mila — REJECT (source). RETRY: Amar Ujala/Jagran me Oct 2024 coverage dobara dekho.
// 3. Dhauntari police chowki punah-sthapna + PHC Dhauntari uchhikaran ki CM ghoshna — sirf dhanaultiexpress (non-whitelisted); PHC hissa sirf ghoshna — REJECT. RETRY: sarkari shasanadesh ya whitelisted coverage.
// 4. "4 saal bemisal" karyakram ke dawe — Rs 6+ crore bus adda Uttarkashi, ~Rs 6.5 crore Nachiketa Tal trek route — sirf dhanaultiexpress, MLA ka dawa, whitelisted pushti nahi — REJECT. RETRY.
// 5. Raithal satellite centre CM dwara virtual udghatan (Amar Ujala, 13 Dec 2025) — CM ka karyakram, MLA sirf mukhya atithi — REJECT.
// 6. CM dwara 6 thane/20 chowki virtual udghatan Feb 2023 (garhninad) — CM ka karyakram, MLA sirf virtual maujood — REJECT.
// 7. Bhatwari/Chinyalisaur virat Hindu sammelan (Amar Ujala, Mar 2026) — samuday samaroh, MLA sirf maujood — REJECT.
// 8. Gangotri-Yamunotri kapat udghatan 2025 me maujoodgi — dharmik karyakram — REJECT.
// 9. Khel mahakumbh udghatan, Manera stadium — local portal + chief-guest bhoomika — REJECT.
// 10. Maangpatra/CM-mulakat stories (blogspot, dhanaultiexpress) — sirf maang + CM ghoshnaen; blogspot blacklisted — REJECT.
// 11. CM meets MLAs Mar 2026 (lokmattimes/ANI) — sirf baithak/maang, koi dastaveji nateeja nahi — REJECT.
// 12. Rain havoc Aug 2024 muavza maang — sirf maang/prastav — REJECT.
// 13. Gangotri yatra marg nirikshan — sirf nirikshan — REJECT.
// 14. "Sarkar jan jan ke dwar" camp (YouTube) — YouTube-only — REJECT.
// 15. Dharali disaster statements — non-whitelisted + sirf bayan — REJECT.
// 16. ETV Bharat — masjid vivaad bayan Oct 2024 — rajnaitik bayan, MLA par koi aarop nahi — negative nahi banta — REJECT.
// 17. "Suresh Chauhan" sexual harassment FIR — MP ka namesake — REJECT. 18. Brightpost maarpeet FIR — aaropi Umesh Sharma Kau (Raipur MLA) — REJECT. 19. Uttranews phone-tapping — Sumit Hridayesh (Haldwani) ka mamla — REJECT. 20. Oneindia criminal-cases list: 0 cases — negative ki pushti; entry nahi.

uttarakhandWorks['sanjay-dobhal'] = [
  {
    title: 'Yamunotri ke liye Vidhayak Nidhi se 2,455 yojnaon par Rs 20.78 crore swikrit — 89.3% kharch, Uttarkashi jile me sabse aage',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/uttarkashi-sanjay-dobhal-leads-uttarkashi-mla-fund-spending-40386381.html',
    date: '2026-09-26',
    note: 'Zila Vikas Vibhag ke aankdon (22 Sep 2026 tak) ke mutabik Yamunotri seat ko kul Rs 23.27 crore aavantan ke sapeksh 2,455 vikas yojnaon par Rs 20.78 crore swikrit (89.3% upyog) — Uttarkashi jile ki teenon seaton me sabse aage; is vitteey varsh me Rs 2.40 crore shesh. FY-wise swikriti (lakh): 2022-23: 366.51; 2023-24: 488.13; 2024-25: 484.91; 2025-26: 488.57; 2026-27: 250.37. Usi report me Purola: 1,036 yojnaon par Rs 19.81 crore (85.13%), Gangotri: 1,529 par Rs 19.13 crore (82.2%). Vidhayak Nidhi aadhikarik roop se FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila aankdon me asal aavantan lagbhag Rs 4.90 crore/saal darj hai. (Parent-add: worker ki report me ye aankda nahi tha; article parent ne khud kholkar padha hai.)',
    period: '2022-2027',
    stage: 'swikriti'
  },
  {
    title: 'Barkot me NH-134 blockade case me FIR — High Court ne MLA ki giraftari par interim rok lagayi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/dehradun/hc-halts-arrest-of-yamunotri-mla-150-protesters-for-barkot-highway-blockade/articleshow/124345973.cms',
    date: '2025-10-06',
    note: '6 Sept 2025 ko Barkot me police dwara ek yuvak ki maar-peet ke viral video ke baad Sanjay Dobhal ke netritva me pradarshankariyon ne pehle thana ghera, phir maang na manne par NH-134 block kar diya (ghanton traffic thap). Police ne public order bigadne aur national highway avrodh ke aarop me Dobhal samait 151 logon par multiple FIR darj ki. Nainital HC (single bench, Justice Ashish Naithani) ne 6 Oct 2025 ko sabhi 151 yachikakartaon ki giraftari par interim rok lagayi aur janch me sahyog ka nirdesh diya; FIR quash karne ki yachika lambit hai — mamla abhi aarop/janch stage par hai. MLA ka paksh: unke ek samarthak ko bina notice raat me ghar se uthaya gaya tha, FIR asahmati dabane ka prayas hai, aur shantipurn virodh unka samvaidhanik adhikar hai.',
    period: '2022-2027'
  },
];
// REJECT-LOG (sanjay-dobhal, Yamunotri):
// 1. Garhwal Post — HC stay against arrest (same matter, TOI se cover) — REJECT (non-whitelisted). 2. TOI — budget-neglect protest march — REJECT (sirf protest/maang). 3. TOI — march to CM house, detention, usi din riha, koi FIR nahi — REJECT. 4. ahd.uk.gov.in — Hanuman Chatti equine camp — REJECT (free camp + sirf mukhya atithi). 5-6. nationpress/webindia123 — CM meetings — REJECT (non-whitelisted, sirf mulaqat/maang). 7. Garhwal Post — CM interacts with MLAs — REJECT (non-whitelisted + sirf maang). 8. Garhwal Post — Mussoorie road altercation — REJECT (non-whitelisted protest). 9. Rediff — Silkyara interview — REJECT (non-whitelisted + sirf bayan; tunnel kendriya). 10. Garhwal Post — award ceremony — REJECT (sirf atithi). 11. theprint/krishijagran — CM 110 schemes event — REJECT (sirf maujood; theprint non-whitelisted). 12. YouTube videos — REJECT (YouTube-only). 13. ehimalayatimes PDF — REJECT (garbled, non-whitelisted). 14. Swarajya — PM Modi Yamunotri infra foundation Dec 2021 — REJECT (pre-term + kendriya). 15. Kharsali-Yamunotri ropeway Rs 166.82cr — REJECT (kendriya pariyojna; MLA ki vyaktigat bhoomika nahi). 16. COVID-kaaleen purana mamla — REJECT as negative (pre-term, karyakaal me koi legal development nahi). 17. PRS — 17 Vidhansabha questions — REJECT (koi dastaveji nateeja nahi). 18. Garhwal Post — election support Feb 2022 — REJECT (pre-term).
// RETRY-LEADS (dobhal): jila portal par Vidhayak Nidhi sanction-suchi (manual check); Amar Ujala/Dainik Jagran e-paper archive me "Sanjay Dobhal" search; Vidhansabha Q&A 2022-2026 me mantri-ashwasan.

uttarakhandWorks['durgeshwar-lal'] = [
  {
    title: 'MLA ne Purola-Kufara-Ratedi motor road ke chaudikaran aur damrikaran ka hawan karke shubharambh kiya — 8 km sadak, Rs 8.51 crore ki yojna, fund Pradhan Mantri Gram Sadak Yojana se',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/uttarkashi/purola-kufara-ratedi-road-will-be-improved-with-eight-and-a-half-crore-uttarkashi-news-c-54-sdrn1041-109661-2024-11-23',
    date: '2024-11-23',
    note: 'Purola vikas khand ki 8 km lambi Purola-Kufara-Ratedi motor road ke punarnirman ka MLA ka vyaktigat shubharambh. Chaar gaon ki 5000 aabadi ki lifeline; marg par thana, rajkiya mahavidyalaya, inter college aur balika inter college sthit. Fund PMGSY (kendriya yojna) se swikrit, yeh disclosed hai — kendriya yojna ki sthaniya suvidha ka MLA ka vyaktigat shilanyas.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'MLA ne Sarigaad-Gatu-Mola motor road ke navinikaran aur damrikaran ka bhoomi pujan karke shubharambh kiya — 16 km sadak, Rs 12.44 crore ki yojna, fund Pradhan Mantri Gram Sadak Yojana se',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/uttarkashi/road-renovation-work-started-uttarkashi-news-c-54-1-sdrn1041-109811-2024-12-01',
    date: '2024-12-01',
    note: 'Naugaon (Uttarkashi) me PMGSY ke tahat 16 km Sarigaad-Gatu-Mola gaon motor road ke navinikaran-damrikaran ka MLA ka vyaktigat bhoomi pujan-shubharambh. Fund PMGSY (kendriya yojna) se, yeh disclosed hai. Karyakram me poorv jila panchayat adhyaksh aur BJP mandal padadhikari maujood the.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'MLA ne Uchchatar Madhyamik Vidyalaya Chinwa (Mori) ke navenirmit bhavan ka lokarpan kiya — 2019 ki aapda me kshatigrast bhavan ka punarnirman, Rs 1.9962 crore ki lagat se',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/uttarkashi/higher-secondary-school-chinwa-mori-got-a-building-uttarkashi-news-c-54-1-uki1003-113237-2025-06-19',
    date: '2025-06-19',
    note: 'Mori ke Chinwa uchchatar madhyamik vidyalaya ka bhavan 2019 ki aapda me poori tarah kshatigrast ho gaya tha; chhatron ko pareshani ho rahi thi. MLA ne swayam Rs 1,99,62,000 ki lagat se bane naye bhavan ka vyaktigat lokarpan kiya aur bhavan ke liye bhoomi daan karne walon ko sammanit kiya. MLA ne kaha unhone CM se samasya batai thi, tab kshetra ki samasya door hui.',
    period: '2022-2027',
    stage: 'lokarpan'
  },
  {
    title: 'MLA ne Garh Ambedkar motor road ke sudridhikaran aur damrikaran ka lokarpan kiya — Naugaon block ke Khatl kshetra ki 5 km sadak',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'LiveHindustan (Hindustan Times)',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/uttarkashi/story-inauguration-of-dr-ambedkar-motor-road-enhances-connectivity-in-khatl-area-201765880978494.html',
    date: '2025-12-16',
    note: 'Khatl kshetra ki lifeline maani jaane wali Garh Ambedkar motor road ke sudridhikaran-damrikaran ka kaam poora hone par MLA ne uska vyaktigat lokarpan kiya aur marg kshetra ke aavaagaman ke liye sthaniya logon ko saunpa. MLA ne kaha 2027 tak Purola vidhan sabha ke sabhi gaon tak sadak pahunchane ka prayas hai. (Rashi worker-report me Rs 4.68 lakh di gayi hai — source se independent verify nahi hui, jaisa mila waisa darj.)',
    period: '2022-2027',
    stage: 'lokarpan'
  },
  {
    title: 'Vidhayak Nidhi se 1036 yojnaon par Rs 19.82 crore swikrit — 85.13% kharch, Uttarkashi jile me doosra sthan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/uttarkashi-sanjay-dobhal-leads-uttarkashi-mla-fund-spending-40386381.html',
    date: '2026-09-26',
    note: 'Zila Vikas Vibhag ke aankdon (22 Sep 2026 tak) ke mutabik Purola seat ko kul Rs 23.27 crore aavantan ke sapeksh 1036 yojnaon par Rs 19.82 crore swikrit (85.13% upyog) — jile me doosra sthan; is vitteey varsh me Rs 2.77 crore shesh. FY-wise swikriti (lakh): 2022-23: 367.50; 2023-24: 479.35; 2024-25: 440.50; 2025-26: 481.32; 2026-27: 213.30. Vidhayak Nidhi aadhikarik roop se FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila aankdon me asal aavantan lagbhag Rs 4.90 crore/saal darj hai. Article me MLA ka bayan bhi hai (nidhi samajik karyon/janhit me). (Parent-review: rashi worker ki 19.82 wali rakhi gayi — article ki table 1982.00 lakh = Rs 19.82 crore; article text me 19.81 rounded hai.)',
    period: '2022-2027',
    stage: 'swikriti'
  },
  {
    title: 'MGNREGA portal par MLA Durgeshwar Lal aur patni ke khaton me 2021-2025 ke beech Rs 22,962 ki mazdoori ka vivad — block prashasan ne janch aur doshi se vasuli ki ghoshna ki, MLA ne sajish ka aarop lagaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/dehradun/mgnrega-payments-of-rs-22k-to-purola-mla-wife-spark-row-officials-cite-clerical-error/articleshow/126081978.cms',
    date: '2025-12-20',
    note: 'MGNREGA portal ke anusar Rekcha gaon (Mori block) ke 11 karyon me MLA aur patni ko kul Rs 22,962 mile; unme se Rs 5,214 MLA banne ke baad ke karyon (2022-2025) se jude hain. Naam-daar adhikari-pusht adhikarik janch: BDO ne kaha mamla sangyan me aaya hai, sambandhit karmiyon se jaankari mangi jayegi aur doshi paye gaye vyakti se poori vasuli hogi; DPO ki report me job card MLA banne se pehle ke mile aur paisa wapas ho raha hai. MLA ka jawab: aarop nakare, ise chhavi bigadne ki sajish kaha; unke anusar job card MLA banne se pehle ka tha. Stage-framing: koi FIR darj nahi hui — janch/vasuli-prakriya ka elaan, apradh siddh nahi. TOI (national) + Amar Ujala (18-12-2025) corroboration; Odisha-calibrated negative rule (pusht janch + naamdar adhikari + jawab record par) ke tahat valid negative.',
    period: '2022-2027'
  },
];
// REJECT-LOG (durgeshwar-lal, Purola SC):
// 1. Singudi-Pipyara motor road udhghatan 14 Oct 2026 — MLA ne swayam kiya lekin source local portal (whitelist nahi) — REJECT. RETRY: whitelisted source.
// 2. CM Dhami Barnigad daura Rs 215-217cr 38 yojnayen 15 Oct 2026 — MLA sirf CM ka swagat kar rahe the — REJECT. 3. CM Dhami Purola daura Rs 210cr June 2025 — MLA sirf maujood — REJECT. 4. Mungarsanti ghoshnaen (26 Oct 2025, LiveHindustan) — sirf ghoshna, swikriti-suchi nahi — REJECT. 5. 26 Mahila Mangal Dal vitaran May 2026 — asal vitaran lekin local portal — REJECT. RETRY. 6. Damta Rs 2.5cr+ swikriti-patra vitaran Oct 2025 — local portal — REJECT. RETRY. 7. SH-48 EFC swikriti ANI — carriers non-whitelisted — REJECT. RETRY. 8. Purola up-jila chikitsalaya dawa (mukhyadhara.in) — local portal + dawa — REJECT. RETRY. 9. Jan 2024 MLA vs Forest Minister vivad (IE) — MLA ka apna pradarshan, koi FIR/janch nahi — REJECT. 10. May 2022 SDM complaint (NIE) — sirf shikayat, FIR pusht nahi — REJECT per bina-FIR rule. RETRY: FIR mile to negative. 11. Halafname ke purane mamle — pre-term, karyakaal me koi legal development nahi — REJECT. 12. MGNREGA ETV Bharat version — non-whitelisted aggregator; TOI+AU se entry bani — REJECT. 13. YouTube podcast — YouTube-only — REJECT. 14. 2022 chunav jeet coverage — out of scope.
// RETRY-LEADS (durgeshwar): upar 1, 5, 6, 7, 8, 10.

// ---- PARENT REVIEW (2026-10-17) ----
// 1. Jagran Vidhayak-Nidhi article parent ne KHUD kholkar padha: teenon MLAs ke aankde verify — Chauhan 1529/19.13cr (entry rakhi, note me "akele 100% wale" tathya joda), Dobhal ke liye parent-add entry bani (2455/20.78cr, jile me sabse aage; worker ke paas positive entry shunya thi), Durgeshwar 1036/19.82cr (table sum; article text 19.81 rounded).
// 2. Akashvani (newsonair.gov.in) entry parent ne khud kholi: "vyaktigat shilanyas" pusht; date page par nahi — tasveer upload path (Feb 2024) + photo-code ke aadhaar par 2024-02-01 anumanit, note me disclosed.
// 3. Durgeshwar MGNREGA negative rakha gaya: TOI national + Amar Ujala corroboration; naam-daar BDO ne janch ki pushti ki; MLA ka jawab record par; Odisha-calibrated rule (pusht janch, naamdar adhikari, jawab) ke tahat FIR-na-hone par bhi valid — Sanjay Sangma-drop precedent (chargesheet par HC stay + jawab anupalabdh) se alag hai, kyunki yahan jawab hai aur janch sakriya hai.
// 4. Garh Ambedkar road entry ki rashi (Rs 4.68 lakh) worker-report se aayi; independent verify nahi hui — note me caveat darj, entry rakhi (kaam poora + vyaktigat lokarpan pusht class hai).

// ---- Chamoli district batch (researched 2026-10-17) ----

uttarakhandWorks['bhupal-ram-tamta'] = [
  {
    title: 'Tharali-Deval-Wan marg par Rs 28.94 crore, Gwaldam-Nandkesari 18 km stent highway par Rs 15.07 crore aur Nandprayag-Nandanagar-Sutol-Kanol (km 27 se 40) par Rs 12.90 crore — teeno sadkon ke damarikaran/sudharikaran ke liye kul Rs 56.80 crore ki financial approval mili.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/chamoli-56-crore-80-lakh-rupees-approved-for-three-motor-roads-in-tharali-assembly-constituency-24064931.html',
    date: '2025-09-29',
    note: 'Dainik Jagran (Chamoli samvadata) ki post-event report ke mutabiq rajya sarkar ne teeno sadkon ke liye financial approval di — itemized sanction: Tharali-Deval-Wan (hot mix, satah sudhar, sudharikaran) Rs 28.94 crore; Gwaldam-Nandkesari 18 km stent highway (damarikaran, sudharikaran) Rs 15.07 crore; Nandprayag-Nandanagar-Sutol-Kanol km 27-40 (sudharikaran, damarikaran) Rs 12.90 crore. Ye Nanda Devi Rajjat (2027) yatra ke mukhya marg hain. Credit capped: Jagran report me swikriti ka shrey kshetriya Vidhayak Bhupal Ram Tamta ke prayason ko diya gaya hai — ye reporter ki framing hai, MLA ke apne dastavezi prastav ka ullekh report me nahi hai; kaam sarkari fund se hai, Vidhayak Nidhi se nahi. Date: article ki publish-taareekh se li gayi.',
    period: '2022-2027',
    stage: 'swikriti',
  },
];
// REJECT-LOG (bhupal-ram-tamta, Tharali SC):
// 1. devbhoomiheadlinesnews.com — Parkhal Mrityunjay Mahadev mandir beautification shilanyas (CM ghoshna, Rs 99.95 lakh, May 2026) — non-whitelist chhota portal; mandir sambandhit entry par whitelist mandatory.
// 2. uttarakhandhimalaya.in — PWD Tharali bhawan shilanyas "20 ko karenge" (Oct 2022) — non-whitelist + pre-event announcement.
// 3. ETV Bharat (23 Sep 2026) — Tharali-Dungri road Rs 9.73 crore, MLA bhoomi-poojan me maujood — non-whitelist.
// 4. ETV Bharat (16 Dec 2025) — Kulsari motor-bridge shilanyas par "high voltage drama" — non-whitelist + MLA program me pahunche hi nahi.
// 5. ETV Bharat (27 Jan 2024) — Lulti-Malbazwar road shilanyas (MP Tirath Singh Rawat ne kiya, MLA present) — non-whitelist + dusre neta ke karyakram me maujoodgi.
// 6. ETV Bharat (16 Dec 2024) — Devrada ward bahishkar; MLA ne CM se varta ka aashvasan diya — non-whitelist + sirf aashvasan, koi dastaveji nateeja nahi.
// 7. ETV Bharat (8 Mar 2024) — Dewal Kauthig mela udghatan + Rs 1.5 lakh ghoshna — non-whitelist + samaroh-maujoodgi + sirf ghoshna.
// 8. YouTube/Nanda News — Holi Milan 2026 me MLA ka dawa: 47 nayi sadkein, 14 motor pul, Rs 150 crore — YouTube-only + sirf ghoshna/dawa, koi swikriti-suchi nahi.
// 9. YouTube — Congress neta Sandeep Patwal ka palatwar — YouTube-only + raajnaitik aarop, koi FIR/janch nahi.
// 10. uttarakhandsamachar.com — Vidhayak Nidhi se mandir beautification ki ghoshna (2022) — non-whitelist + sirf grant-ghoshna.
// 11. Amar Ujala (25 Sep 2026) — Simli mahila base hospital me World Pharmacist Day speech — sirf samaroh me bhashan.
// 12. Amar Ujala (9 Oct 2026) — panchayat janpratinidhi samvad ka shubharambh — sirf samaroh udghatan.
// 13. Amar Ujala (25 Jan 2025) — panchayat chunav me Tharali ki teeno seat BJP haari — election politics, negative ke liye koi FIR/janch nahi.
// 14. garhwalpost.in — CM ke lokarpan-shilanyas karyakram (MLA maujood) — non-whitelist + CM ke karyakram me maujoodgi.
// 15. garhwalpost.in — MLA ke bete Jai Prakash Tamta ki rebel story (Jan 2025) — non-whitelist + parivar ka mamla.
// 16. newsable.asianetnews.com — CM se Bugyal vishay par MLA ki mulakat — syndicated, koi concrete kaam nahi.
// NEGATIVES (Tamta): FIR/mukadma wala koi whitelist lead nahi mila.

uttarakhandWorks['lakhpat-singh-butola'] = [];
// REJECT-LOG (lakhpat-singh-butola, Badrinath; Jul 2024 by-election se MLA; INC):
// 1. Upchunav jeet (13 Jul 2024) — Indian Express/aadi — chunav parinaam kaam nahi; seat pehle Rajendra Bhandari ke paas thi.
// 2. Badha vetan 6 mahine daan (Sep 2024, Chamoli aapda) — New Indian Express — daan/rahat par shrey nahi.
// 3. Vidhan Sabha me kagaz faadna (Feb 2025, Mantri Aggarwal ki pahadi tippani ke virodh) — ETV Bharat — non-whitelist + virodh-pradarshan kaam nahi.
// 4. Char Dham Yatra maange (Apr 2025) — Garhwal Post — non-whitelist + sirf maang, koi dastaveji nateeja nahi.
// 5. Mandir dan-chori par HC janch ki maang (Jul 2025) — Garhwal Post — non-whitelist + sirf maang; negative ke liye Butola khud aaropi nahi.
// 6. Chamoli CM karyakram me maujoodgi (Jul 2026) — India TV/aadi — CM ke 63 pariyojnaon ka shilanyas/lokarpan, Butola sirf stage par maujood.
// 7. Badrinath Dham kapat-khulan samaroh me maujoodgi (Apr 2025) — TOI — dhaarmik samaroh me maujoodgi.
// 8. Putla dahan virodh (Feb 2025) — Nitya Samachar UK — non-whitelist + raajnaitik virodh, koi FIR/janch nahi.
// 9. NAMESAKE TRAP: newsdrum 'From Bhasha' me Devprayag thana prabhari ka naam 'Lakhpat Singh Butola' — ye police adhikari hai, MLA nahi; records merge nahi kiye.
// NEGATIVES (Butola): koi yogya negative nahi — Butola khud kisi FIR/janch me aaropi ke roop me reported nahi hue.

uttarakhandWorks['anil-nautiyal'] = [
  {
    title: 'MLA Anil Nautiyal ki pahal par CM ne Gauchar PHC ke uchchikaran ki ghoshna ki; swasthya mahanideshak ne uchchikaran ka prastav swikriti hetu shasan ko bhej diya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/chamoli/proposal-for-upgradation-of-phc-gauchar-sent-to-the-government-karnpryag-news-c-48-1-kpg1002-116053-2025-07-02',
    date: '2025-07-02',
    note: 'Credit capped: Amar Ujala ki 2 Jul 2025 ki report ke mutabiq CM Pushkar Singh Dhami ne 2023 me aur phir Nov 2024 me Gauchar mele ke shubharambh par Gauchar swasthya kendra ke uchchikaran ki ghoshna ki, jiska aadhar MLA Anil Nautiyal ki pahal bataya gaya. DG Health ne uchchikaran ka prastav swikriti hetu shasan ko bhej diya; CMO Chamoli se pad-srijan ka prastav bhi mil gaya. Palika adhyaksh Sandeep Negi ne bhi is maang ko lekar swasthya sachiv se mulakat ki thi — shrey shared. July 2025 tak swikriti lambit thi; ye prastav-charan ki pahal entry hai, poora-kaam nahi.',
    period: '2022-2027',
    stage: 'prastav-shasan-me-lambit',
  },
  {
    title: 'Vidhayak Anil Nautiyal ne 2022 se ab tak Vidhayak Nidhi se Rs 22.08 crore ke karyon ki swikriti di; nidhi ka lagbhag 25 pratishat hissa schoolon par',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/dehradun/karnaprayag-mla-anil-nautiyal-sanctions-22-08-crore-works-roads-and-health-remain-concerns-uttarakhand-news-2026-10-06',
    date: '2026-10-06',
    note: 'Aggregate (varsh-vaar) reporting hai, item-by-item sanction-suchi nahi — poori disclosure ke saath shamil. Report anusaar kul aavanti Rs 23.28 crore, kul swikriti Rs 22.08 crore: 2022-23 me 3.68/3.68, 2023-24 me 4.90/4.90, 2024-25 me 4.90/4.89, 2025-26 me 4.90/4.69, 2026-27 me 4.90/3.92 crore. Nidhi ka ~25% hissa schoolon (jarjar school marammat, furniture, computer, khel-fitness upkaran) par; shesh mahila mangal dalon, margon, mandir saundaryikaran, khel maidanon par. Pehle do varshon ke ~90% aur baad ke varshon ke ~80% karya poore; chalu varsh me ~25% yojnaon me dhanrashi jaari. Gaon ke raston aur swasthya sevaon par kharch ko lekar kshetravasiyon ki aalochna bhi report me darj hai. FUND NOTE (parent-resolved 2026-10-17): aadhikarik adhikaar Rs 5 crore/seat/saal hai (Feb 2023 cabinet faisla, FY 2023-24 se; FY 2022-23 me Rs 3.75 crore — Amar Ujala ki Kotdwar fund-report Oct 2026 se pusht), lekin jila-star ke asal aavantan is report me Rs 4.90 crore/saal darj hain; dono aankde apni jagah sahi hain — adhikaar banam asal aavantan.',
    period: '2022-2027',
    stage: 'swikriti',
  },
];
// REJECT-LOG (anil-nautiyal, Karnaprayag):
// 1. Devradi Mela 2026 (20 Sep 2026) — mandir saundaryikaran shilanyas (CM ghoshna fund) — sirf uttarakhand-update.com/indiatodayheadlines (non-whitelisted).
// 2. Ganga Public School Mehalchauri (29 Mar 2026) — Rs 5 lakh Vidhayak Nidhi sabha-kaksh lokarpan + furniture ghoshna — sirf uttarakhand-update.com; furniture wali baat ghoshna thi.
// 3. Karnaprayag swasthya shivir (1585 mareez) — parvatjan.com/uttarakhandkinews (non-whitelisted); MLA ka kaam nahi (hospital ka shivir).
// 4. Maithan/rajya sthapana mela ghoshnaen (livehindustan, 12 Nov 2025) — mele ko Rs 2 lakh + schoolon ko Rs 10-10 lakh — sirf ghoshna.
// 5. CM Dhami ke Chamoli/Bharadisain shilanyas-lokarpan (Nov 2025) — MLA sirf maujood.
// 6. Gauchar Mela 2024 (etvbharat) — CM ka aabhar vyakt kiya — non-whitelist + CM ke kaam par dhanyavad.
// 7. Kalimath-Kotma, Jal-Chaumasi sadak (Jagran, 16 Oct 2026, Rs 3.75cr) — YE KEDARNATH ki MLA Asha Nautiyal ka karya hai, Anil Nautiyal ka nahi (pehchan mismatch — reject me pakda gaya).
// 8. webindia123 (14 Sep 2025) — CM se courtesy visit + maangen — sirf maang/aashwasan, koi dastaveji nateeja nahi.
// 9. Simli base-hospital padayatra (uttarakhand-update.com, 12 Oct 2026) — non-whitelist; aashvasan poora nahi hua.
// NEGATIVES (Nautiyal): established media me koi FIR/janch wala lead nahi mila.

// ---- Rudraprayag district batch (researched 2026-10-17) ----
// PARENT REVIEW (2026-10-17): worker ki 7 entries me se 3 hatayi — Chaudhary ki teeno shasanadesh entries
// (Jaily-Taila-Mehargaon sadak, Bachhansyun additional PHC, Purvi Bangar pashu-chikitsa kendra): ye CM-ghoshna
// par jaari sarkari shasanadesh ki MLA dwara keval jaankari thi, MLA ki koi dastavezi pahal/lokarpan nahi —
// ghoshna-class, isliye reject. Batch kul = 4 entries.

uttarakhandWorks['bharat-singh-chaudhary'] = [
  {
    title: 'Bachhansyun kshetra ke teen sarkari schools me karib Rs 1.8 crore ki yojnaon ka lokarpan aur shilanyas',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 22 May 2025',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/rudraprayag/inauguration-and-foundation-stone-laying-of-projects-worth-rs-18-crore-for-three-schools-rudraprayag-news-c-52-1-sdrn1032-112908-2025-05-22',
    date: '2025-05-22',
    note: 'GIC Bada me Rs 46 lakh ki prayogshala bhavan ka lokarpan; GIC Barsudi me Rs 36 lakh ke do kakshakakshon aur GIC Khedakhal me Rs 26 lakh ki smart class ka shilanyas. Kul Rs 1.8 crore ki yojnaayein. Fund ka source article me disclosed nahi — sarkari school-infra; Vidhayak Nidhi se nahi bataya gaya.',
    period: '2022-2027',
  },
  {
    title: 'Jakholi me REAP ke tahat karib Rs 55 lakh ki ajeevika yojnaon ka shilanyas aur lokarpan — cabinet mantri ke roop me apni seat me',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 24 Sep 2026',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/rudraprayag/jakholi-gifted-an-agri-business-center-restaurant-and-collection-center-rudraprayag-news-c-52-1-rpg1007-121164-2026-09-24',
    date: '2026-09-24',
    note: 'Agri-business centre ka bhoomipujan/shilanyas; mahila swayam sahayata samoohon ke restaurant-cafe aur krishi-audyanik utpadon ke collection centre ka lokarpan. REAP/NRLM ke tahat rajya sarkar ki yojna — rajya-stariya vibhagiya faisla nahi; 20 Mar 2026 se cabinet mantri (Gram Vikas, Laghu evam Sukshm Udyam, Khadi evam Gramodyog) ke roop me apni Rudraprayag seat (Jakholi block) me kiya gaya seat-stariya lokarpan/shilanyas.',
    period: '2022-2027',
  },
];
// REJECT-LOG (bharat-singh-chaudhary): Musaadung-Pali road shilanyas (zeenews, non-whitelist + protest) reject; Randhar-Badhanital-Baksir-Chenagad PMGSY Rs 23.77cr uddghatan (ETV Bharat, non-whitelist) reject — retry lead; Sem-Dungri road Rs 1.51cr (ETV Bharat) reject — retry lead; Bhardar 4 sadak Rs 65+cr (non-whitelist) reject — retry lead; Tilwara peyjal Rs 39.86cr SASCI (uttarakhand24x7) reject; Nauli sadak Rs 28.27L (uttarakhand24x7) reject; 4 sadak damrikaran Rs 3.40cr (tehelkauk) reject; Launga samudayik bhavan Vidhayak Nidhi Rs 4L (abitfar) reject — retry lead; Madola chauk (uttarakhandsamachar) reject; Vasudev mandir Rs 23L (pre-term 2021) reject; Kailash Bangar school lokarpan + Rs 5L ghoshna (rnsindianews, non-whitelist + ghoshna) reject; Nagrasu-Kot-Jasoli marg Rs 4.15cr sirf prastav/aaganan reject; SBI RSETI uddghatan (public.app, bank CSR) reject; school toilets Rs 1cr (newsonair, non-whitelist, koi lokarpan nahi) reject; Harak Singh ko chunauti (political bayanbazi) reject; Mahilaon ka shikayati patra Tilni truck hadsa (ETV Bharat Oct 2025, bina FIR) — negative nahi; Lasya Kauthig/Bachhansyun mele (mukhya-atithi + Rs 1.5L ghoshna) reject; viral audio (YouTube) reject; CM events maujoodgi reject; Kargil Vijay Diwas chief-guest reject; teeno shasanadesh entries (Jaily-Taila sadak, Bachhansyun PHC, Purvi Bangar pashu kendra) parent-review me reject — CM-ghoshna ki keval jaankari, MLA ki pahal nahi.

uttarakhandWorks['asha-nautiyal'] = [
  {
    title: 'Jagtoli (Dashjula) me Rs 98.72 lakh ki lagat se banne wale mini stadium ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 27 Jan 2025',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/rudraprayag/kedarnath-mla-laid-foundation-stone-of-mini-stadium-in-jagtoli-rudraprayag-news-c-5-1-drn1019-604830-2025-01-27',
    date: '2025-01-27',
    note: 'Kedarnath vidhayak Asha Nautiyal ne Dashjula ke Jagtoli me Rs 98.72 lakh ki lagat se banne wale mini stadium ka vyaktigat shilanyas kiya (Rajkiya Inter College Kandai Dashjula me Gantantra Diwas samaroh ke avsar par). Stadium me 200 m daud ke liye 6-lane track, kabaddi, kho-kho, volleyball aur football court ke saath shauchalay, store aur darshak bench banenge. Stage: shilanyas (karyarambh). Disclosure: vidhayak ne khud kaha ki yeh stadium mukhyamantri Pushkar Singh Dhami ki ghoshna ka parinam hai — swikriti CM ghoshna se, unki bhoomika shilanyas-charan me.',
    period: '2022-2027',
  },
  {
    title: 'Kalimath-Kotma-Jal-Chaumasi motor marg ke Rs 3.75 crore damrikaran-sudharikaran kary ka Kabyltha me bhumipujan-shubharambh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Jagran, 16 Oct 2026',
    sourceUrl: 'https://www.jagran.com/uttarakhand/rudraprayag-kalimath-kotma-road-improvement-3-cr-sanctioned-in-rudraprayag-40406544.html',
    date: '2026-10-15',
    note: 'Namesake-trap cleared: Dainik Jagran aur Amar Ujala DONO ne poore naam se "Kedarnath vidhayak Asha Nautiyal" likha hai; kshetra Kalimath ghati, Rudraprayag (Kedarnath seat) hai — Karnaprayag ke Anil Nautiyal se sambandhit nahi. Asha Nautiyal ne Kalimath-Kotma-Jal-Chaumasi motor marg ke damrikaran evam sudharikaran kary (lagat ~Rs 3.75 crore) ka Kabyltha me vidhivat bhumipujan karke nirman kary ka shubharambh kiya; mauke par PWD ke adhishasi abhiyanta Indrajeet Bose, jyeshth pramukh Rakesh Negi sahit sthaniya pratinidhi maujood the. Labhanvit gaon: Kalimath, Kaviltha, Kotma, Khunnu, Jaltalla, Jal Malla, Chaumasi. Stage: bhumipujan/karyarambh. Disclosure: yeh vibhagiya sadak yojna hai — swikriti me vidhayak ki vyaktigat bhoomika ka dastavezi saboot article me nahi; unki kendriya bhoomika shubharambh-charan me hai, isliye entry rakhi hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (asha-nautiyal): Gaurikund taptkund punaruddhar Vidhayak Nidhi Rs 15L (rajyasameeksha, non-whitelist) reject — retry lead; Tala-Barangali marg Rs 3.16cr bhumipujan (divyapahad/YouTube, non-whitelist) reject — retry lead; Unnati Cluster bhawan lokarpan Kaviltha (pahadraftar, non-whitelist) reject — retry lead; Mavdhar-Chamak sadak Rs 67.10L (jaltarashtra) reject; Evergreen school bhawan lokarpan (nayaadhyay) reject; CM mulaqat 4 Oct 2026 (maang hi, nateeja nahi) reject; Nagrasu-Kot-Jasoli marg Rs 4.15cr (MLA ki koi bhoomika nahi) reject; BPCL Hospital udghatan maujoodgi reject; kapat-khulna/mahashivratri karyakram maujoodgi reject; sheetkaleen yatra shubharambh maujoodgi reject; Dilmi school punah-sanchalan (bayan hi, ETV Bharat non-whitelist) reject; non-Hindu pravesh pratibandh maang (HT/Telegraph, political demand) reject; Basukedar aapda controversy (rahat vitaran) reject; viral misleading video par police patra (MLA khud complainant) — negative nahi; BKTC donation/RTI hospitality row (FIR suspended employee par; MLA aaropi nahi, denial diya) — negative nahi, watchlist (BKTC committee janch chal rahi hai).


// ---- Tehri Garhwal district batch (researched 2026-10-17) ----

// PARENT REVIEW (2026-10-17): workers se 7 entries aayi thi; 1 hatayi — Kishore Upadhyay ki Kantal-Andhiyargarhi-Sangaon swikriti entry: MLA ki bhoomika sirf swikriti ki jaankari media ko dena thi (shasanadesh-ki-sirf-jaankari class — Rudraprayag ruling se consistent). Batch kul = 6 entries.

// Works-mining fragment: Shakti Lal Shah (shakti-lal-shah), Ghanshali (SC), Tehri Garhwal
// BJP, MLA Mar 2022 - Mar 2027 (re-elected 2022: 20,949 votes, margin 10,285). Term 2022-2027.
// All sources verified open 2026-10-17. Bhaasha: Roman-script Hinglish only.
uttarakhandWorks['shakti-lal-shah'] = [
  {
    title: 'Dhamatoli ke Rajkiya Uchchtar Madhyamik Vidyalaya ka Inter star tak uchchikaran hua; smart class ka shubharambh; kshetra ke logon ne MLA Shaktilal Shah ko chaandi ka mukut pehnakar sammanit kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com',
    // Full article URL (traceability): https://www.amarujala.com/uttarakhand/tehri/mla-presented-with-a-silver-crown-for-upgrading-the-school-tehri-news-c-50-1-nth1001-121785-2026-10-11
    date: '2026-10-11',
    note: 'Uchchikaran sarkari nirnay hai — fund figure article me disclosed nahi, Vidhayak Nidhi ka koi ullekh nahi. MLA ki bhoomika maang tak seemit: unhone Feb 2026 me CM ke saamne 37-sutriya maang-patra me Dhamatoli school ke uchchikaran ki maang rakhi thi; uchchikaran ke baad school me smart class bhi shuru hui. Attribution capped — school ka upgrade sarkari kaam hai, vyaktigat lokarpan/shilanyas ka dawa nahi',
    period: '2022-2027',
    stage: 'swikriti',
  },
];

// ---- REJECT-LOG (shakti-lal-shah) ----
// 1. CM Dhami ka 26 Feb 2026 Ghansali daura — Rs 41.21 crore ki 8 yojanaon ka lokarpan/shilanyas (PMGSY Dhamatoli-Ghanshali-Akhodi aur Nageshwar Saud-Gona-Sarkanda road upgrade; GIC Kot Vishan bhavan punarnirman; Hanuman mandir ke paas 50m steel girder pul; tehsil Balganga aawasiya/anaawasiya bhavan; Gangi swasthya upkendra; Pilkhi PHC ka CHC me uchchikaran) — REJECT: coverage mirroruttarakhand/lokmattimes(ANI)/zeenews/indianmasterminds par, koi whitelisted source nahi; CM ka package hai, MLA ki bhoomika sirf swagat/aabhaar + 37-sutriya maang-patra (maang/attendance only, koi vyaktigat lokarpan nahi).
// 2. livehindustan 18 Nov 2025 — MLA ki press vaarta: 'CM ne PHC Pilkhi ko CHC ka darja diya, bhavan ke liye Rs 14.83 crore swikrit; Ghanshali me up-jila aspatal jald' — REJECT: ghoshna-class (CM-ghoshna par jaari shasanadesh ki sirf jaankari); MLA ka koi swatantra event nahi.
// 3. livehindustan 20 Dec 2025 — MLA ne kendriya mantri Nitin Gadkari se milkar 3 Ghanshali margon (Uttarkashi-Lambgaon-Kemundakhal-Chamiyala-Ghanshali-Tilwara; Uttarkashi-Ayarkhal-Budhakedar-Chamiyala-Ghanshali-Tilwara; Tipri-Gadoliya-Ghanshali-Chirbatiya-Moolgarh-Tilwara) ko national highway me shaamil karne ki maang ki — REJECT: sirf maang/prastav, koi dastaveji nateeja nahi.
// 4. YouTube video — Vikas Khand Bhilangana ka naya block bhavan (186 gram panchayat, Rs 2.5 crore lagat) ka lokarpan rajya sthapana divas par block pramukh + MLA dwara — REJECT: YouTube whitelisted nahi; sansthaagat bhavan ka saha-udghatan, kamzor attribution.
// 5. dainikjayantnews (~Mar 2023) — MLA ne Swami Vivekanand Vidya Mandir Mahavidyalaya Beleshwar me Rs 3 lakh Vidhayak Nidhi se nirmit kaksha-kaksh ka udghatan kiya; computer lab Bhilangana Hydro Power Project (Ghuttu Bhilang) ki CSR mad se — REJECT: not whitelisted; private college; computer lab CSR-funded (MLA fund nahi). RETRY LEAD: isi event ka whitelisted (Amar Ujala/Dainik Jagran Tehri) coverage dhoondho.
// 6. dainikjayantnews (~Nov 2020) — MLA ne Ghanshali Hanuman mandir ke paas Rs 5.52 lakh Vidhayak Nidhi se sthapit solar pumping plant (haath-pump par solar system, Jal Sansthan dwara nirmit) ka udghatan kiya — REJECT: pre-term (Mar 2022 se pehle) + not whitelisted.
// 7. newsonair.gov.in (Akashvani, 8 Mar 2025) — MLA ne aapda punarnirman karyon ki sameeksha baithak me Budhakedar/Ghuttu kshetron me kaam tez karne aur June se pehle poora karne ke nirdesh diye — REJECT: sirf nirikshan/sameeksha-nirdesh, koi poora hua kaam nahi; source bhi whitelist me nahi.
// 8. devbhumiemedia (Oct 2026) — Ghanshali ke 10 mandiron ke saundaryikaran ke liye Rs 1.30 crore swikrit (Budhakedar 20L, Beleshwar Mahadev 20L, Jagdishila Mata 20L, aadi); MLA ne CM ka aabhaar jataya — REJECT: not whitelisted + MLA ki bhoomika sirf aabhaar (koi vyaktigat shilanyas/lokarpan nahi); ye sarkari swikriti hai, MLA ka kaam nahi.
// 9. doonkhabar.com RTI report (~Sep 2026) — Shaktilal Shah ne Vidhayak Nidhi ka 55% kharch kiya — REJECT: not whitelisted; aggregate kharch-aankda hai, itemized kaam/vitaran nahi.
// 10. sachkiawaz.in (~2022 chunav kaal) — dharma-parivartan/Isaai dharm apnane ka aarop; MLA ne press vaarta me khandan kiya — REJECT: not whitelisted + khandan ho chuka + koi FIR/adhikari-pusht janch nahi; negative criteria poora nahi karta.
// 11. Dainik Jagran 3 Apr 2021 — 'Ghanshali ke BJP vidhayak Shaktilal Shah ka dhamki ka video viral' (Jal Sansthan/Jal Nigam adhikariyon ko 'boriya-bistar baandh ke rakho... rassi se baandhkar maarunga'); MLA ne kaha video edited/fake hai, kaaryavaahi karenge — PRE-TERM hone ke kaaran negative entry NAHI: vartaman karyakaal (Mar 2022+) me koi legal development nahi, koi FIR ya naam-daar adhikari-pusht janch ullikhit nahi; khandan darj hai.
// 12. navbharattimes.indiatimes.com — MLA ka bayan 'gaon ke log hi mujhe vidhayak nahi mante' viral — REJECT: self-deprecating bayan hai, negative (aarop/FIR/janch) nahi; whitelisted bhi nahi.
// 13. news.abplive.com 24 Nov 2024 — 'Shah' naam ke vyakti par sarkari adhikari banne ka dhokha/FIR (Gujarat) — REJECT: alag vyakti, hamare MLA se sambandh nahi.
// 14. garhwalpost.in — CM ke Feb 2026 Ghanshali daure ki report (37-sutriya maangen: Akhodi uchchikaran, Thati Bhatwara baadh suraksha, Dhamatoli school, mini stadium, Kothar-Saud sadak, Genwali Budhakedar/Pindwad up-swasthya kendra) — source ke roop me REJECT (whitelist me nahi); sirf maang-patra ki suchi hai, entry 1 ke attribution-context ke liye upyogi lead.
// NEGATIVES CHECK: koi negative entry nahi. Shakti Lal Shah ke khilaf myneta.info/ADR affidavit me 0 criminal cases darj hain. Upar ke items 10-13 me se koi bhi negative criteria (established media + FIR/adhikari-pusht janch + pehchan verify + jawab/anupasthiti disclosed) poora nahi karta.
// RETRY LEADS: (1) Amar Ujala/Dainik Jagran Tehri edition archive me 'Shaktilal Shah Ghanshali lokarpan/shilanyas' search — khaas taur par Beleshwar college kaksha-kaksh/computer-lab event (~Mar 2023, Rs 3 lakh Vidhayak Nidhi) ka whitelisted coverage; (2) Tehri jila official portal par Vidhayak Nidhi swikriti-suchiyan (Ghanshali) — itemized vitaran ke liye; (3) Uttarakhand Vidhan Sabha records — Shakti Lal Shah dwara pooche gaye taarankit prashn aur mantri-ashwasan ke dastaveji nateeje.

uttarakhandWorks['vinod-kandari'] = [];

// ---- REJECT-LOG (vinod-kandari) ----
// 1. garhwalpost.in: 'CM inaugurates, lays foundation stones of 160 schemes worth Rs 415 crore in Tehri' — Kandari ka naam sirf 'present on the occasion' wali list me hai. Mukhya atithi CM the; MLA ka personal lokarpan/shilanyas nahi. REJECT: dusre neta (CM) ke karyakram me maujoodgi.
// 2. garhwalpost.in: 'Govt working on mission to ensure rapid development in U'khand: Dhami' — phir sirf maujoodgi, koi personal kaam nahi. REJECT: sirf maujoodgi.
// 3. garhwalpost.in: 'Ministers, MLAs fail to spend even half of their MLA-LAD funds' — Kandari ne apni Vidhayak Nidhi ka 58% kharch kiya bataya gaya, lekin kisi specific kaam/work-order/sanction-suchi ka zikr NAHI. Itemized report nahi, isliye entry nahi ban sakti. RETRY LEAD: Vidhayak Nidhi sanction-suchi (district portal/RTI) se asal vitaran items nikalne par entry banegi.
// 4. thehawk.in: 'Uttarakhand CM Inaugurates Ved Shastra Research Center In Devparayag' — CM ne virtual mode me udghatan kiya; Kandari ka naam/sahbhaagita report me nahi. REJECT: CM ka kaam, MLA ka role nahi.
// 5. thehawk.in / newsd.in: 'BJP High Command Upset Over Devprayag Distillery' — distillery mudda, kaam nahi; Kandari aaropi nahi, negative bhi nahi. REJECT: na work, na negative.
// 6. youtube.com (VIP News 24x7): 'Rajya mantri ne Vidhayak ko vikas karyon par ghera' — YouTube video, whitelist ke bahar. REJECT: non-whitelisted source.
// 7. Affidavit/myneta.info: Kandari par 0 criminal cases declared. Oneindia 'MLAs with criminal cases' list me bhi 0. Negative-factory checks me koi FIR, naam-daar janch ya aarop nahi mile. NEGATIVES: koi nahi.
// 8. urbanacres.in/editorji.com CM-approval roundups: Devprayag constituency me ek swikriti (Dundeshwar Mahadev Mandir beautification, Rs 1.05 crore, Kirti Nagar block) mili, lekin ye CM-ghoshna par jaari swikriti ki sirf jaankari hai — MLA ke vyaktigat pratinivedan ka zikr nahi. REJECT: ghoshna-class.
// Note: multiple search rounds (EN + Hindi, inauguration/lokarpan/shilanyas/Vidhayak Nidhi angles) ke baad whitelisted sroton me Kandari ka koi personal lokarpan/shilanyas ya itemized Vidhayak Nidhi vitaran report nahi mila. Khali profile imandar vikalp hai.

// Worker: subodh-uniyal (Narendranagar, Tehri Garhwal, BJP, Mar 2022 - Mar 2027)
// Cabinet mantri note: works mining restricted to Narendranagar seat-level works only;
// state-level forest/technical-education decisions excluded by design.
uttarakhandWorks['subodh-uniyal'] = [];

// ---- REJECT-LOG (subodh-uniyal) ----
// 1. Tapovan Nagar Pumping Peyjal Yojana shilanyas, Tapovan, Narendranagar seat — Rs 4302.52 lakh
//    (event Fri 2026-01-02, reported 2026-01-03). Funding: AMRUT scheme (kendriya) per
//    uttrakhandkaaditya; Uniyal did vyaktigat shilanyas. REJECT: no whitelisted source found
//    (univarta.com/doonhorizon.in/hamaramahanagar.net/uttrakhandkaaditya.com only).
//    RETRY LEAD: same story on Amar Ujala / Dainik Jagran / TOI / India Today; if found,
//    entry with mantri-framing + fund disclosure (kendriya AMRUT fund) would be valid.
// 2. Mangla helipad, gram Mangla patti Dovi, Narendranagar seat — total Rs 75.68 lakh,
//    shasanadesh 2026-09-21, first instalment Rs 45,40,800 released FY 2026-27. REJECT: only
//    non-whitelisted portals (doonhorizon.in/uttarakhandaaj.com/jantaserishta.com).
//    RETRY LEAD: GO on sarkari shasanadesh portal (uk.gov.in) would make a valid 'sarkari' entry
//    (GO/itemized swikriti class).
// 3. 'Shaheed Vijay Singh Gursain Marg' naming + Rs 10 lakh Vidhyak Nidhi swikriti (gadhsamvedna.com).
//    REJECT: non-whitelisted + ghoshna-only (no work-order/vitaran evidence).
// 4. Rs 11 lakh announcement for Shyam Krishna Panwar Saraswati Shishu Mandir smart classes,
//    Muni Ki Reti (garhwalpost.in, Feb 2026). REJECT: non-whitelisted + ghoshna-only.
// 5. Rs 10 lakh announcement for Guru Ram Rai Public School classrooms, Narendranagar
//    (cobranewsuk.com). REJECT: non-whitelisted + ghoshna-only.
// 6. Rs 1 crore Vidhyak Nidhi swikriti for Palakot patti gram sabhas (ukstories.in, May 2023).
//    REJECT: non-whitelisted + ghoshna-only.
// 7. Central School approval for Narendranagar, DPR Rs 20 lakh via CPWD (garhwalpost.in, May 2022).
//    REJECT: non-whitelisted + kendriya approval without Uniyal's vyaktigat lokarpan/shilanyas.
// 8. CM's Tehri event: 160 schemes Rs 415 cr lokarpan/shilanyas (garhwalpost.in, Dec 2023).
//    REJECT: non-whitelisted + CM's program, Uniyal merely present.
// 9. Narendranagar development announcements at Kunjapuri fair Oct 2026 (polytechnic upgrade,
//    Kendriya Vidyalaya, law college, auditorium, Gaja hospital, ~Rs 50 cr sewer line)
//    (pioneeredge.in). REJECT: non-whitelisted + CM-ghoshna class.
// 10. Amar Ujala Tehri story 'many historical works for Narendranagar' (lokarpan/shilanyas tour,
//     ~Nov 2021). REJECT: pre-term (before Mar 2022).
// 11. Koteshwar/Kunjapuri fair inaugurations as chief guest (Amar Ujala, Jan 2026).
//     REJECT: religious/cultural samaroh presence, not sarkari kaam.
// 12. Rs 1 lakh ghoshna for Shaheed Bhag Singh Rawat smarak saundaryikaran at Koteshwar mela
//     (Amar Ujala, Jan 2026). REJECT: ghoshna class (no swikriti-suchi/vitaran).
// 13. Medical college protest, New Tehri (ThePrint/PTI, Oct 2026): locals allege Uniyal opposes
//     medical college at Iniya (New Tehri) and wants it shifted to Narendra Nagar.
//     NOT A NEGATIVE per strict rules: no FIR, no officer-confirmed inquiry, no crime alleged
//     against Uniyal personally — political policy dispute only. Noted for parent awareness.
// 14. Neer Garh waterfall scheme irregularity inquiry (etvbharat.com, Jun 2024): Rs 1 cr work in
//     Narendra Nagar forest division; Uniyal ORDERED the probe (Conservator of Forest Garhwal).
//     NOT A NEGATIVE: Uniyal is the inquiring authority, not the accused.
// 15. Forest-department/technical-education statewide decisions (TOI Uttarakhand@25 interview,
//     CAMPA Rs 439.50 cr, House of Himalayas, Herbal Mission): REJECT by minister-rule —
//     rajya-stariya vibhagiya faisle, not Narendranagar seat works.
// 16. Delhi-Dehradun expressway / Tehri pump-storage inaugurations: REJECT — NHAI/THDC kendriya
//     projects, no vyaktigat lokarpan by Uniyal.
// NET: 0 whitelisted, post-event, seat-level works found for Mar 2022-Mar 2027. Khali profile
// deliberate — kamzor attribution se khali profile behtar.

// Works-mining fragment: Vikram Singh Negi (vikram-singh-negi), Pratapnagar, Tehri Garhwal
// INC, MLA Mar 2022 - Mar 2027. Term 2022-2027. All sources verified open 2026-10-17.
uttarakhandWorks['vikram-singh-negi'] = [
  {
    title: 'MLA Vikram Singh Negi ne Lambgaon me Koti-Raulyalun-Baurgaon 500-metre missing-link motor road ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/tehri/construction-work-on-the-koti-raulyalun-baurgaon-road-has-begun-tehri-news-c-50-1-sdrn1016-121814-2026-10-13',
    date: '2026-10-13',
    note: 'Rs 25.58 lakh ki lagat ka sarkari kaam; MLA dwara vyaktigat shilanyas; lagat disclosed hai, fund source disclosed nahi; isse Baurgaon, Ujadgaon, Ratnau, Koti aur Raulyalun ke gaon ke graameenon ko laabh milega',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'MLA Vikram Singh Negi ne GIC Devatdhar ke naye school bhavan ka lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/tehri/inauguration-of-the-new-building-of-devatdhar-inter-college-new-tehri-news-c-50-1-sdrn1018-1255-2023-07-21',
    date: '2023-07-21',
    note: 'Karib Rs 1.12 crore ki lagat se nirmit bhavan; MLA dwara vyaktigat lokarpan; lagat disclosed hai, fund source disclosed nahi; isse Pratapnagar block me classrooms ki kami door hogi',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Pipaldali-Munda 8 km motor road ko vitteeya swikriti mili; MLA Vikram Singh Negi ne apne lagataar prayason ka shrey liya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/tehri/pipaldali-munda-eight-km-motor-road-gets-approval-tehri-news-c-50-1-sdrn1018-117405-2026-02-18',
    date: '2026-02-18',
    note: 'Karib 20 saal se adhar me latki 8 km sadak ki vitteeya swikriti dastaveji sarkari kaam hai; MLA ki bhoomika ka ekmatra aadhaar unka apna dawa hai — attribution capped; Pipaldali pul se Munda-Lalwali kshetra judenge',
    period: '2022-2027',
    stage: 'swikriti',
  },
];

// ---- REJECT-LOG (vikram-singh-negi) ----
// 1. pkgnews24 (2022) — 11-point demands raised in Assembly (Rajiv Gandhi school operation, Dobra-Lambgaon double-laning, university building, Sem Nagraja Dham etc.) — REJECT: not whitelisted source + sirf maang, no outcome.
// 2. pkgnews24 — Bal Vatika program inaugurated at Bhelunta as chief guest — REJECT: not whitelisted + ceremonial community program, no fund/kaam.
// 3. dainikjayantnews — Lok Sanskriti Bhavan (Rs ~14 lakh, SC sub-plan) lokarpan at Bharpur as chief guest — REJECT: not whitelisted; mukhya-atithi community event.
// 4. sarhadkasakshi — Shaheed Gopal Bisht smarak unveiling at Kandikhal (29 Sep 2022) — REJECT: not whitelisted; private memorial built by martyr's widow, not sarkari kaam.
// 5. garhninad/sarhadkasakshi — Vidhayak Nidhi se kuda-uthan gaadi dene ki GHOSHNA (Siloli, Jan 2026) — REJECT: not whitelisted + sirf ghoshna, no swikriti-suchi/vitaran.
// 6. LatestLY/ANI — CM Dhami approved Rs 3.61 crore for Syalgi-Juladgaon-Dodak-Thapla road in Pratapnagar — REJECT: ghoshna-class, no MLA attribution.
// 7. amarujala — BDC Pratapnagar meeting proposal to double-lane New Tehri-Jakh-Dobra-Lambgaon road (May 2022) — REJECT: proposal/maang class only.
// 8. livehindustan — Statehood-day shraddhanjali at Rampur Tiraha (Nov 2025) — REJECT: ceremonial, no kaam.
// 9. etvbharat — Tehri Lake Festival protocol dispute (Mar 2026) — REJECT: not whitelisted, not a work.
// 10. india.com/ABP/Oneindia election-result pages — REJECT: election coverage, not works.
// 11. devbhoomidarshan/rishikeshnews — MLA demanded CBCID probe in Keshav Thalwal police case — REJECT: not whitelisted + maang only.
// 12. youtube Baramas podcast — REJECT: YouTube not whitelisted; interview claims not verifiable per strict rules.
// NEGATIVES CHECK: no negative entries. Vikram Singh Negi has 0 criminal cases (Oneindia ADR list). FIR/controversy hits were other people: (a) Himachal Revenue Minister's son Vikram Singh Negi (Indian Express, Jul 2025 effigy FIR) — different person; (b) BJP MLA Mahendra Singh Negi, Dwarahat (2020 rape allegation) — different person; (c) AAP office-of-profit charge vs 20 MLAs (2016) — pre-term, no current-term legal development.
// RETRY LEADS: (1) Dainik Jagran Tehri edition search for 'Vikram Singh Negi Pratapnagar lokarpan/shilanyas'; (2) Tehri district official portal MLA-fund sanction lists for itemized Vidhayak Nidhi vitaran; (3) Uttarakhand Vidhan Sabha records for starred questions by him with minister ashwassan.

// Worker: Tehri seat / Kishore Upadhyay (BJP, karyakaal Mar 2022–Mar 2027)
// Searched: Amar Ujala, Live Hindustan, Garhwal Post, ETV Bharat (reject), nationpress (reject), ThePrint, TOI, IE
// Valid whitelisted entries: 2 (dono Sadak, badge news). Negatives: 0.

uttarakhandWorks['kishore-upadhyay'] = [{
    title: 'MLA Kishore Upadhyay ne Chamba block me teen sadkon ka shilanyas kiya — Sudana-Dhaulayani tok (1 km), Gunogi Chham-Dharkot (2 km) aur Nagni-Jadhdhargain via Gram Than se Syul Koti Band tak sadak nav-nirman',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/tehri/mla-upadhyay-laid-the-foundation-stone-for-three-roads-tehri-news-c-50-1-sdrn1016-116848-2026-01-16',
    date: '2026-01-16',
    note: 'MLA ne vyaktigat roop se pooja-archana ke saath shilanyas kiya aur Lonivi adhikariyon ko samay-gunvatta se kaam poora karne ke nirdesh diye. Report me darj lagat: Sudana-Dhaulayani tok Rs 38.84 lakh, Gunogi Chham-Dharkot Rs 84.28 lakh; teesri sadak ki lagat report me nahi. Fund sarkari yojana ka, shrey vyaktigat shilanyas ka.',
    stage: 'shilanyas',
    period: '2022-2027'
  },];

// ---- REJECT-LOG (kishore-upadhyay) ----
// 1. Sridev Suman Park punar-nirman lokarpan (Rs 2.03 crore, ADB vitta, jila vikas pradhikaran) — Amar Ujala, 30 Jan lokarpan. REJECT: lokarpan CM Pushkar Dhami ne kiya, MLA saath me maujood the — "dusre neta ke karyakram me maujoodgi" class.
// 2. CM ko 10-sutriya maang-patra (medical college, 200 km sadken, shuddh peyjal yojana, OBC ghoshna) — Garhwal Post, 10 Feb. REJECT: sirf maang/prastav.
// 3. CM Dhami se 9 June 2026 ko kshetra-vikas par charcha — nationpress. REJECT: sirf baithak/charcha, source bhi non-whitelisted.
// 4. Iniyan me medical college ka dawa (press conference, Pioneer Edge; ETV Bharat 3 Aug 2026; Garhninad) — REJECT: abhi cabinet-prastav/maang stage par, koi swikriti ya kaam nahi; aadhaar sirf MLA ka bayan; teeno source non-whitelisted.
// 5. CM ke Tehri daure me medical college + IIT ghoshna, Rs 530 crore yojnaon ka shilanyas/lokarpan — jansadan. REJECT: CM-ghoshna class, MLA ka vyaktigat shrey nahi; source bhi non-whitelisted.
// 6. Lamaridhar me 50-bed Ayush aspatal (2022 me CM ne shilanyas kiya tha) par vivad, poorv MLA Dhan Singh Negi ke aarop — garhgauravdarshan, Apr 2025. REJECT: non-whitelisted; shilanyas poorv-karyakaal/poorv MLA ke samay ka tha; sirf rajneetik aarop, koi dastaveji kaam nahi.
// 7. LiveHindustan press conference 12 Nov 2025 (Idiya medical college, jila aspatal me CCU, baandh visthapiton ko bhoomi ka malikana haq, ropeway prastav) — REJECT: ghoshna class ("karyavahi gatiman hai"), kaam shuru nahi hua.
// 8. Sadkon ki samiksha baithak, adhikariyon ko nirdesh — Amar Ujala, 9 Oct 2026. REJECT: sirf nirikshan/samiksha.
// 9. Jakhnidhar tehsil shifting vivad (Koshyar se APHC Petab), grameenon ka virodh — ETV Bharat, Apr 2025. REJECT: non-whitelisted; prashasanik nirnay ka vivad hai, vikas-kaam nahi; FIR/janch nahi, negative-entry yogya nahi.
// 10. PG College New Tehri me CM Medhavi Chhatravritti yojana ke praman-patra vitaran — rashtriyavichar. REJECT: non-whitelisted; mukhya-atithi samaroh, sarkari kaam nahi.
// 11. Deendayal Upadhyay Park saundaryikaran shilanyas, MLA mukhya atithi — garhgauravdarshan. REJECT: non-whitelisted; nagar palika karyakram, samuday samaroh class.
// 12. Vidhayak Nidhi kharch me RTI khulasa (Kishore Upadhyay ~30% sabse kam) — rainbownews. REJECT: non-whitelisted; FIR/adhikari-janch nahi, negative-entry niyam poora nahi hota.
// 13. 1000 MW pump storage project Tehri, PM se udghatan ki ummeed — Garhwal Post. REJECT: THDC kendriya/PSU pariyojna par shrey; rule me reject.
// 14. CM dwara 160 yojnaon (Rs 415 crore) ka udghatan/shilanyas Tehri me — Garhwal Post, ~Jan 2024. REJECT: CM ne kiya, MLA keval maujood the.
// 15. Jogena-Srikot 2.5 km motor marg shilanyas (Rs 72.57 lakh, CM Aantrik Sampark Yojana) — rnsindianews. RETRY LEAD: non-whitelisted source; Amar Ujala/Jagran me whitelisted report dhoondho.
// 16. FY 2023-24 me Rs 2.5 crore ki Vidhayak Nidhi yojnayein prastavit (MLA ka bayan) — newsonair.gov.in (AIR), 2 May 2025. RETRY LEAD: sarkari media par MLA ka dawa; itemized swikriti-suchi ya vitaran report whitelisted source me mile to "dawa"/news entry ban sakti hai.
// 17. Sri Dev Suman University Badshahithaul mudda, VC se charcha — Garhwal Post, ~2023. REJECT: charcha/maang, koi dastaveji nateeja nahi.
// 18. Private schools me gadbadi par DM ko patra — Garhwal Post, 18 Mar 2023. REJECT: patra/maang, kaam nahi.

uttarakhandWorks['pritam-singh-panwar'] = [
  {
    title: 'Dhanaulti ke do sadko ke punarnirman ke liye Rs 4.97 crore ki vittiya swikriti jaari, PWD ko tender jaldi karne ka nirdesh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/tehri/gift-to-dhanaulti-rs-497-crore-approved-for-two-roads-tehri-news-c-50-1-sdrn1016-115824-2025-11-20',
    date: '2025-11-20',
    note: 'Rajya sarkar ne Dhanaulti Vidhan Sabha ki do sadko ke punarnirman aur sudhar ke liye vittiya swikriti jaari ki — Laluri-Ghyakoti-Kyarda Chali 5 km motor marg Rs 4.16 crore aur Thatyur-Papra marg km 1-3 Rs 81.33 lakh; Additional Secretary Vineet Kumar ki taraf se shasanadesh jaari; credit capped — janpratinidhiyon ne CM Pushkar Singh Dhami, PWD mantri Satpal Maharaj aur MLA Pritam Singh Panwar ka aabhar jataya; MLA ne PWD Thatyur ke adhishasi abhiyanta ko tender jaldi jaari kar samaybadh aur gunvattapurn kaam karne ke nirdesh diye. Ye sarkari swikriti hai, Vidhayak Nidhi se nahi.',
    period: '2022-2027',
  },
];

// ---- REJECT-LOG (pritam-singh-panwar) ----
// 1. Ramolsari gaon sadak lokarpan (April 2026, Thauldhar block; vidhayak nidhi se Rs 10 lakh road) — REJECT: sirf non-whitelisted sources (pargatimediauk.com, ETV Bharat topic-page, YouTube shorts) — kholne layak whitelisted reporting nahi mili. Retry lead: kisi whitelisted outlet me same khabar aaye to valid entry banegi (MLA ne swayam lokarpan kiya).
// 2. Jaunpur block BDC sabhagar/atithi-grih/tile works lokarpan (29 Aug 2024, MLA + DM ne milkar lokarpan) — REJECT: source non-whitelisted (sarhadkasakshi.com, garhninad.com, thehillsofmussoorie.com). Kaam jila yojana mad se tha, fund disclosed, lekin whitelisted source nahi.
// 3. CM Dhami ka Dhanaulti karyakram (Nov 2022) — ~Rs 125 crore ki yojnaon ka lokarpan/shilanyas — REJECT: dusre neta (CM) ke karyakram me MLA sirf maujood/upasthit the; plus source newscubic.co.in non-whitelisted.
// 4. Amar Ujala 'Sahkari samiti ke sanchalak mandal ko MLA ne shapat dilai' (Jan 2026) — DD Upadhyay Krishi Kalyan Yojana ke tahat 45 krishakon ko ~Rs 50 lakh byaj-mukt rin cheque vitran karyakram me MLA mukhya atithi — REJECT: samudayik samaroh me mukhya-atithi upasthiti; kaam khud sarkari yojana ka rutine vitran, MLA ka yogdaan disclosed nahi.
// 5. Amar Ujala 'Samiti ki sanstuti par milegi Vidhayak Nidhi' (Thauldhar block baithak) — REJECT: publish ~2017 (current term se pehle), plus sirf ghoshna/allocator rule bina vitaran-suchi ke.
// 6. Garhwal Post 'Govt working on mission...' (district review) — REJECT: MLA sirf upasthit dignitary, koi attributable kaam nahi.
// 7. Telegraph/Rediff baarish-aapda Bilaundi Pul market story (May 2026) — MLA + mantri sadak me fanse — REJECT: durghatna report, kaam nahi.
// 8. Lok Bhavan kuch FIR stories me 'Pritam Singh' naam — REJECT: ye Chakrata ke Congress neta Pritam Singh hain (alag vyakti), Dhanaulti MLA Pritam Singh Panwar nahi.
// 9. 'Vijay Singh Panwar' (2022 me Pratapnagar se BJP ummeedwar) naam ke jaal se bachne ke liye unke naam wali koi khabar is profile me nahi dali.
// 10. Negatives: koi qualifying negative nahi mila — MLA Pritam Singh Panwar ke khilaf established media me koi FIR/janch report nahi mili.
// Retry leads: (a) Ramolsari sadak lokarpan ki whitelisted reporting dhoondho; (b) 'Pritam Panwar' Jagran/Amar Ujala Tehri section archives me district-pipeline se koi itemized Vidhayak Nidhi vitaran-suchi aaye to check karo.
// ---- Dehradun district batch (researched 2026-10-17) ----
// QA/parent-review notes (2026-10-17):
// 1. pritam-singh: worker ne title/note English me diye the + sourceUrl homepage URL tha — dono QA me theek kiye (Roman Hinglish rewrite + canonical article URL).
// 2. ganesh-joshi: worker ne article URLs nahi diye the (homepage URLs the) — QA ne canonical URLs khoje: entries 1-3 Jagran article, entries 4-5 livehindustan article; entry 6 (Salawala ward Rs 117.27L) ka article URL recover nahi hua — source-page-verify rule se drop, retry-lead me darj. stage 'Shilanyas' -> 'shilanyas' normalize kiya.
// 3. vinod-chamoli entry 1 ke note me date contradiction thi ("2026-05-26" vs "2025-05-26") — 2025-05-26 rakha (date field se match).
// 4. umesh-sharma-kau entry 1 ke Jagran URL se UTM params hataye (canonical).
// 5. livehindustan.com (HT Media ka Hindi daily Hindustan ka official digital platform) ko sthapit akhbaar mana gaya — Uttarkashi batch me bhi yahi niyam laagu tha. Do workers ne ise non-whitelist maan kar entries reject ki thi (unke reject-leads retry me hain) — inconsistent hai, lekin dono taraf documented hai.
// KUL: 49 entries (1+3+5+4+3+0+12+5+12+4), negatives 2 (kau, aggarwal).

uttarakhandWorks['pritam-singh'] = [
  {
    title: 'Chakrata MLA Pritam Singh ne Kandi-dhar se Hivaan tak nayi motor road ka lokarpan khud kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/dehradun/the-region-developed-only-during-congress-government-vikas-nagar-news-c-5-1-drn1013-717388-2025-06-17',
    date: '2025-06-16',
    note: 'Poori bani road Kandi-dhar, Retad, Kholra aur Hivaan gaonon ko jodti hai; report me fund-srot aur sadak banwane me MLA ki bhoomika ka ullekh nahi hai — karyakram me unki bhoomika vyaktigat lokarpan ki thi. Date anumanit: article 2025-06-17 ko prakashit hua aur karyakram "somvaar" ko bataya gaya; 2025-06-16 somvaar tha (calendar se verify).',
    period: '2022-2027',
  },
];

uttarakhandWorks['munna-singh-chauhan'] = [
  {
    title: 'Bheemawala me Jal Jeevan Mission ke tahat Rs 273.56 lakh ki peyjal yojana ka bhoomi-poojan — nal-koop, pump house, jalaashay aur pipeline vistaar',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/dehradun-city-mla-did-bhoomi-pujan-of-rs-273-lakh-56-thousand-drinking-water-scheme-in-bheemawala-23483149.html',
    date: '2023-07-26',
    note: 'Jal Jeevan Mission ke tahat sarkari yojana; nal-koop ke liye bhoomi sthaniya nivasi Ishwar Singh ne daan di; bhoomi-poojan/shilanyas vyaktigat roop se MLA Munna Singh Chauhan ne kiya; Jal Sansthan ke abhiyanta maujood the. Date page par prakashit tithi se.',
    period: '2022-2027',
    stage: 'bhoomi-poojan',
  },
  {
    title: 'GIC Chharba me Rs 11.76 lakh ke tin shed ka shilanyas aur GIC Badhwala me Rs 18.25 lakh ke tin shed ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/dehradun/facilities-will-increase-in-chharba-inter-colleges-vikas-nagar-news-c-39-1-vkn1004-127848-2025-12-31',
    date: '2025-12-31',
    note: 'Dono tin shed Mussoorie-Dehradun Vikas Pradhikaran (MDDA) dwara banaye gaye; shilanyas (Chharba) aur lokarpan (Badhwala) vyaktigat roop se MLA ne kiya; Block Pramukh aur janpratinidhi maujood the. Date page URL ki tithi se.',
    period: '2022-2027',
    stage: 'shilanyas-evam-lokarpan',
  },
  {
    title: 'Vidhayak ke avaidh khanan ka khulasa karne par police ki karvai — 11 dumper aur tractor-trolley seize, bazaar chauki prabhari sahit 3 policekarmi line-hajir',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/dehradun/11-vehicles-and-one-utility-seized-for-illegal-mining-vikas-nagar-news-c-39-1-sdrn1026-120921-2025-04-30',
    date: '2025-04-30',
    note: 'Date prakashan-tithi (post-event report): ghatna pichhle Ravivar ko — MLA ne Nawabgarh me avaidh khanan-samagri se bhari tractor-trolley khud pakdi aur police ke 35 minute der se pahunchne par "mahina bandha" ka aarop lagakar poore thane ko line-hajir karane ki maang ki; usi shaam SSP ne laparvahi par bazaar chauki prabhari aur 2 cheetah policekarmiyon ko line-hajir kiya; Budhvaar ko police abhiyaan me 7 tractor-trolley, 4 dumper aur 1 utility seize. Shrey seemit — karvai police prashasan ne ki, MLA ki bhoomika khulase/maang tak.',
    period: '2022-2027',
    stage: 'prashasanik-karvai-poori',
  },
];

uttarakhandWorks['sahdev-singh-pundir'] = [
  {
    title: 'MLA Sahdev Singh Pundir ne Dhoomnagar chowk se Kanchiwala, Chhota Rampur aur Telpura me sadkon ke nirman ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 28 Nov 2025',
    sourceUrl: 'https://www.amarujala.com/dehradun/road-construction-will-reduce-the-hassle-vikas-nagar-news-c-39-1-vkn1004-126877-2025-11-28',
    date: '2025-11-28',
    note: 'Sarkari sadak nirman karyon ka MLA dwara vyaktigat shilanyas; fund-srot report me specified nahi (keval pradesh sarkar ke netritva ka ullekh).',
    period: '2022-2027',
  },
  {
    title: 'MLA Sahdev Singh Pundir ne Shishambara ke gram Ramgarh me Rs 1.28 crore aur Bhuddi gram panchayat ke Chakmansha me Rs 67.51 lakh ki aantarik sadkon ke nirman ka shubharambh kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 3 Dec 2025',
    sourceUrl: 'https://www.amarujala.com/dehradun/road-construction-work-inaugurated-vikas-nagar-news-c-39-1-vkn1004-127003-2025-12-03',
    date: '2025-12-03',
    note: 'Sarkari aantarik sadak karyon ka MLA dwara vyaktigat shubharambh; fund-srot report me specified nahi (keval pradesh sarkar ka ullekh).',
    period: '2022-2027',
  },
  {
    title: 'MLA Sahdev Singh Pundir ne Lakshmipur gram panchayat ki kshatigrast sadkon ke Rs 99.14 lakh ke nirman ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 10 Dec 2025',
    sourceUrl: 'https://www.amarujala.com/dehradun/the-road-will-be-constructed-at-a-cost-of-rs-9914-lakh-vikas-nagar-news-c-39-1-vkn1004-127231-2025-12-10',
    date: '2025-12-10',
    note: 'Rajya yojana ke tahat sadak nirman; MLA dwara vyaktigat shilanyas. Fund = rajya sarkar ki yojana.',
    period: '2022-2027',
  },
  {
    title: 'MLA Sahdev Singh Pundir ne Selakui ki Ambewala gram sabha ki Sainik Colony me Rs 34.67 lakh ki do sadkon ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 15 Dec 2025',
    sourceUrl: 'https://www.amarujala.com/dehradun/mla-laid-the-foundation-stone-for-two-roads-vikas-nagar-news-c-39-1-vkn1004-127376-2025-12-15',
    date: '2025-12-15',
    note: 'Sainik Colony ke lane number 8 aur 9 me sadak nirman ka MLA dwara vyaktigat shilanyas; fund-srot report me specified nahi.',
    period: '2022-2027',
  },
  {
    title: 'MLA Sahdev Singh Pundir ne Shuklapur Pragati Vihar, Singhniwala aur Chakmansha me sadkon ke nirman ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 18 Jan 2026',
    sourceUrl: 'https://www.amarujala.com/dehradun/road-construction-will-bring-relief-to-the-villagers-vikas-nagar-news-c-39-1-sdrn1026-128367-2026-01-18',
    date: '2026-01-18',
    note: 'Kai sthanon par sadak nirman karyon ka MLA dwara vyaktigat shilanyas; lagat aur fund-srot report me specified nahi.',
    period: '2022-2027',
  },
];

uttarakhandWorks['vinod-chamoli'] = [
  {
    title: 'Mothrowala me Vidhayak Nidhi se Balidani Govind Singh Rangad ke naam samudayik bhavan ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/dehradun/former-mayor-and-mla-arrived-to-lay-the-foundation-stone-dehradun-news-c-5-1-drn1031-700624-2025-05-27',
    date: '2025-05-26',
    note: 'Mothrowala me 300 gaz zameen par samudayik bhavan ka shilanyas; bhavan Balidani Govind Singh Rangad ke naam par banega. Fund: Vidhayak Nidhi (khabar me rashi nahi di gayi). Shilanyas ke dauran nirdaliya parshad ke samarthakon ne virodh kiya (wahan parshad karyalay banana chahte the) — hungame ke beech vidhayak ne shilanyas karke karyakram pura kiya. Date anumanit: report (2025-05-27) me event "Somwar" likha hai, isliye 2025-05-26 chuna gaya (calendar se verify).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Turner Road ward aur Cantt Clement Town me lagbhag Rs 5 crore ki sadak-naali yojnaon ka shilanyas',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-vinod-chamoli-inaugurates-development-projects-worth-5-crores-in-turner-road-ward-201767444371178.html',
    date: '2026-01-03',
    note: 'Turner Road lane C-19, Kanshi Enclave, Fair Colony, Gurudwara Colony ki naali-sadak; Post Office Road lane 5, lane 10, lane 4B, Turner Road lane-11A; Ogal Bhatta basti me nale ke pushta-nirman — kul lagbhag Rs 5 crore ki yojnayein prarambh. Report me fund-srot ullekhit nahi hai. Date pakki: page par prakashan "Jan 03, 2026 06:16 pm IST" aur khabar me bhi "Shanivar" (verify: 2026-01-03 Shanivar tha).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Suswa nadi par Rs 4.30 crore ki baadh suraksha yojana ka poojan-shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-flood-protection-plan-launched-in-dharmapur-by-mla-vinod-chamoli-201781180829644.html',
    date: '2026-06-11',
    note: 'Suswa nadi ke Dudha Devi pull downstream par Rs 4.30 crore ki baadh suraksha yojana ka shilanyas; rajya sarkar ne pehli kist ke roop me Rs 1.72 crore jari kiye. Laabh: ward 85 Mothrowala, Nauka Nai Basti, Daudwala Nai Basti, Nauka Vihar sahit aaspaas ke ilake. Isi din Bindal aur Rispna nadi kinare baadh-niyantran hetu taar-jaal/pushton ke kaam ka bhi shilanyas hua. Date anumanit: khabar me event "Guruvar" likha hai; search crawl (~127 din purana, 2026-10-17 se) ke najdeeki Guruvar 2026-06-11 chuna gaya (crawl ka exact din = Guruvar, crawl-lag ko dhyan me rakha).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Kedarpur (ward 83) me Rs 70 lakh ke Sant Namdev Samudayik Bhavan ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-vinod-chamoli-lays-foundation-for-70-lakh-sant-namdev-community-building-in-kedarpur-201778762103631.html',
    date: '2026-05-14',
    note: 'Ward 83 Kedarpur me Ajabpur Khurd primary school ke nikat Bengali Kothi chauk par Rs 70 lakh lagat wale Sant Namdev Samudayik Bhavan ka shilanyas; isi din Kunj Vihar sthit Hanuman mandir ke jeernoddhar aur samudayik bhavan-nirman ka bhi shilanyas (unki lagat khabar me nahi). Fund-srot khabar me ullekhit nahi hai. Date anumanit: khabar me event "Guruvar" likha hai; search crawl (~155 din purana, 2026-10-17 se) ke najdeeki Guruvar 2026-05-14 chuna gaya.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
];

uttarakhandWorks['umesh-sharma-kau'] = [
  {
    title: 'Raipur MLA Umesh Sharma Kau ne Dalanwala me MDDA ke do parkon ke nirman/jeernoddhar (lagbhag Rs 90 lakh) ka kiya shilanyas — Nehru Colony ka park pehle hi poora',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://org432akamprepod.jagran.com/uttarakhand/dehradun-city-dehradun-parks-mdda-invests-90-lakh-for-green-spaces-40096336.html',
    date: '2026-01-04',
    note: 'Media-reported post-event karyakram — MLA ne vyaktigat roop se shilanyas kiya (photo-caption se bhi pusht). Fund MDDA ka (lagbhag Rs 90 lakh, dono park), Vidhayak Nidhi nahi — isliye credit karyakram-aayojan tak seemit, fund ka dawa nahi. Date inferred: Jagran ne 05 Jan 2026 subah 08:39 baje prakashit karke "ravivaar ko" likha — usse pehla ravivaar 4 Jan 2026 tha.',
    period: '2022-2027',
  },
  {
    title: 'Raipur MLA Umesh Sharma Kau ne Tapovan me shiksha nideshalaya ke paas nala-nirman ka kiya shubharambh — jal-nikasi aur swachhta me sudhaar ki ummeed',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-umesh-sharma-kau-launches-drain-construction-in-dehradun-for-improved-sanitation-201767521610113.html',
    date: '2026-01-04',
    note: 'Media-reported post-event Newswrap — MLA ne vidhivat shubharambh kiya. Report me fund-srot aur lagat disclosed nahi; credit karyakram tak seemit, fund ka dawa nahi. Date: article 04 Jan 2026 ko 3:43 pm IST prakashit, "ravivaar ko" — 4 Jan 2026 ravivaar tha, ghatna usi din ki.',
    period: '2022-2027',
  },
  {
    title: 'Dehradun ke prarambhik shiksha nideshalaya me vivaad — Raipur MLA Umesh Sharma Kau aur samarthakon par cross FIR darj, jaanch jaari',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/uttarakhand/dehradun/news/dehradun-education-directorate-assault-four-arrested-137276779.html',
    date: '2026-02-21',
    note: 'Aarop: 21 Feb 2026 ko Nanurkhera sthit nideshalaya me Raipur ke ek sarkari school ke naam-badlane ki maang par vivaad badha — samarthakon ne kursi fenki, todphod aur maarpeet hui, kuch log ghayal. Nideshak Ajay Kumar Naudiyal ki tehreer par Raipur thane me MLA Kau aur samarthakon par BNS 121(1) (sarkari karya me badha), 191(2) (balwa), 351(3) (jaan se maarne ki dhamki) samait dharaon me case darj; MLA ke gunner ki tehreer par agyaat logon par bhi cross FIR. Video footage ke aadhar par 4 giraftar — Arvind Pundir urf Kalli (history-sheeter), Rakesh Thapliyal, Lakshman Navani, Akshay Rana. Pehchan seat+naam se verified: report me "Raipur vidhayak Umesh Sharma Kau" — Khanpur ke nirdaliya MLA Umesh Kumar se alag vyakti (namesake trap se bachein). Dainik Bhaskar ki report me MLA ka paksh prakashit nahi mila — anupasthiti disclosed; cross FIR unke paksh ka hissa hai. FIR darj = aarop, dosh siddh nahi; jaanch jaari.',
    period: '2022-2027',
  },
];

uttarakhandWorks['khajan-dass'] = [];

uttarakhandWorks['savita-kapoor'] = [
  {
    title: 'MLA ne Yamuna Colony Ward 33 me Shiv Shakti Mandir parisar me tin shed nirmaan ka shilanyas kiya — kaam Vidhayak Nidhi se swikrit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-dehradun-mla-savita-kapoor-initiates-tin-shed-construction-and-tube-well-project-201763197173161.html',
    date: '2025-11-15',
    note: 'Ward 33 Yamuna Colony sthit Shiv Shakti Mandir parisar me tin shed nirmaan ka vyaktigat shilanyas; report ke mutabik kaam Vidhayak Nidhi se swikrit hai. Vidhayak Nidhi aadhikarik roop se FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila-aavantan me asal rakam lagbhag Rs 4.90 crore/saal darj hoti hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'MLA ne Seemadwar kshetra me tube well nirmaan ka shilanyas kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-dehradun-mla-savita-kapoor-initiates-tin-shed-construction-and-tube-well-project-201763197173161.html',
    date: '2025-11-15',
    note: 'Usi din Seemadwar kshetra me tube well nirmaan ka bhi vyaktigat shilanyas; report me is kaam ka fund-srot disclosed nahi hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'MLA ne Ward 42 Shastri Nagar me Vidhayak Nidhi se bani nali ka lokarpan kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-savita-kapoor-inaugurates-drain-construction-in-shastri-nagar-201763635774199.html',
    date: '2025-11-20',
    note: 'Vidhayak Nidhi se Ward 42 Shastri Nagar me nirmit nali ka vyaktigat lokarpan. Vidhayak Nidhi aadhikarik roop se FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila-aavantan me asal rakam lagbhag Rs 4.90 crore/saal darj hoti hai.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'MLA ne Yamuna Colony Ward 33 me CC sadak nirmaan ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-savita-kapoor-inaugurates-drain-construction-in-shastri-nagar-201763635774199.html',
    date: '2025-11-20',
    note: 'Usi din Yamuna Colony Ward 33 me CC sadak nirmaan ka vyaktigat shilanyas; report me is sadak ka fund-srot disclosed nahi hai (nali wale kaam ke liye Vidhayak Nidhi ka ullekh hai, sadak ke liye nahi).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'MLA ne Ballupur Ward 37 ke Durga Vihar me Vidhayak Nidhi se bani nali ka lokarpan kiya — pehle jal-bharao ki samasya thi',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-local-mla-savita-kapoor-initiates-drainage-work-in-ballupur-ward-37-201764764965055.html',
    date: '2025-12-03',
    note: 'Vidhayak Nidhi se Ward 37 Ballupur ke Durga Vihar me nirmit nali ka vyaktigat lokarpan; report ke mutabik pehle nali ki halat kharab thi jisse jal-bharao hota tha, kshetrvasiyon ki shikayat par MLA ne adhikariyon se samadhan ke nirdesh diye the. Vidhayak Nidhi aadhikarik roop se FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila-aavantan me asal rakam lagbhag Rs 4.90 crore/saal darj hoti hai.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'MLA ne Engineer Enclave Janakpuri me Uttarakhand Jal Nigam dwara swikrit sewer line ka shilanyas kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-savita-kapoor-inaugurates-sewer-line-project-in-janakpuri-uttarakhand-201776078413607.html',
    date: '2026-04-13',
    note: 'Uttarakhand Jal Nigam dwara swikrit sewer line nirmaan ka vyaktigat shilanyas; report ke mutabik kaam se kshetra ki lambe samay se chali aa rahi sewer nikasi samasya ka samadhan hoga.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'MLA ne Kaulagarh Prempur Mafi me Vidhayak Nidhi se banne wali CC sadak ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-mla-savita-kapoor-lays-foundation-stone-for-cc-road-in-kaulagard-prempur-mafi-201781175648605.html',
    date: '2026-06-11',
    note: 'Kaulagarh Prempur Mafi me Vidhayak Nidhi se nirmit hone wali CC sadak ka vyaktigat shilanyas. Vidhayak Nidhi aadhikarik roop se FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila-aavantan me asal rakam lagbhag Rs 4.90 crore/saal darj hoti hai. Date caveat: page par prakashan-taareekh nahi hai; search ke "127 days ago" stamp aur article me diye "Guruvaar" ke aadhaar par 2026-06-11 anumanit hai (date -d se Guruvaar verify kiya gaya).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'MLA ne Indiranagar Ward 39 me Swami Vivekanand Park ke saundaryakaran ka shilanyas kiya — kaam Vidhayak Nidhi se',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-swami-vivekanand-park-beautification-begins-in-indiranagar-ward-39-for-better-public-amenities-201781266460976.html',
    date: '2026-06-12',
    note: 'Ward 39 Indiranagar me Swami Vivekanand Park ke saundaryakaran kaam ka vyaktigat shilanyas; report ke mutabik kaam Vidhayak Nidhi se hoga. Vidhayak Nidhi aadhikarik roop se FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila-aavantan me asal rakam lagbhag Rs 4.90 crore/saal darj hoti hai. Date caveat: page par prakashan-taareekh nahi hai; search ke "126 days ago" stamp aur article me diye "Shukravaar" ke aadhaar par 2026-06-12 anumanit hai (date -d se Shukravaar verify kiya gaya).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'MLA ne Kaulagarh Ward 31 ke Prempur Mafi kshetra me sewer line kaam ka shilanyas kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-mla-savita-kapoor-inaugurates-sewer-line-and-road-construction-in-dehradun-201790425937105.html',
    date: '2026-09-25',
    note: 'Ward 31 Kaulagarh ke Prempur Mafi kshetra me sewer line nirmaan ka vyaktigat shilanyas; report me fund-srot disclosed nahi hai. MLA ka dawa (entry ka aadhaar nahi): pichhle sadhe chaar saalon me unki vidhansabha kshetra me Rs 30 crore se adhik lagat ke sewer line kaam hue hain. Date caveat: page par prakashan-taareekh nahi hai; search ke "20 days ago" stamp aur article me diye "Shukravaar" ke aadhaar par 2026-09-25 anumanit hai (date -d se Shukravaar verify kiya gaya).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'MLA ne Ganga Vihar me puliya-sadak nirmaan kaam ka lokarpan kiya — nirmaan MDDA dwara',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-mla-savita-kapoor-inaugurates-sewer-line-and-road-construction-in-dehradun-201790425937105.html',
    date: '2026-09-25',
    note: 'Ganga Vihar me puliya-sadak nirmaan ka vyaktigat lokarpan; report ke mutabik Ganga Vihar aur Shanti Vihar kshetron me sadak nirmaan ke kaam MDDA (Mussoorie Dehradun Vikas Pradhikaran) dwara kiye gaye the — shrey MDDA ke nirmaan ko, MLA ki bhoomika lokarpan me. Date caveat: upar wali entry ki tarah 2026-09-25 anumanit hai (Shukravaar verify kiya gaya).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'MLA ne Premnagar Kehari gaon me Vidhayak Nidhi se bani CC sadak aur nali ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/dehradun/mla-inaugurates-road-and-drain-in-premnagar-dehradun-news-c-5-drn1037-1085829-2026-10-09',
    date: '2026-10-09',
    note: 'Premnagar Kehari gaon me Vidhayak Nidhi se nirmit CC sadak va nali nirmaan ka vyaktigat lokarpan; report ke mutabik nirmaan se aavaagaman aur jal-nikasi dono me sudhar hoga. Vidhayak Nidhi aadhikarik roop se FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila-aavantan me asal rakam lagbhag Rs 4.90 crore/saal darj hoti hai.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'MLA ne Premnagar General Wing ke Shivpuri Lane-2 E me Vidhayak Nidhi se banne wali CC sadak ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-dehradun-mla-savita-kapoor-launches-cc-road-construction-in-shivpuri-lane-201791632518199.html',
    date: '2026-10-10',
    note: 'Premnagar General Wing sthit Shivpuri Lane-2 E me Vidhayak Nidhi se nirmit hone wali CC sadak ka vyaktigat shilanyas. Vidhayak Nidhi aadhikarik roop se FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila-aavantan me asal rakam lagbhag Rs 4.90 crore/saal darj hoti hai. Date caveat: page par prakashan-taareekh nahi hai; search ke "6 days ago" stamp aur article me diye "Shanivaar" ke aadhaar par 2026-10-10 anumanit hai (date -d se Shanivaar verify kiya gaya).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
];

uttarakhandWorks['ganesh-joshi'] = [
  {
    title: 'Cabinet mantri aur Mussoorie MLA Ganesh Joshi ne Salawala Bridge se Vijay Colony Bridge tak main road ke unnikaran karya ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/dehradun-city-20-crore-worth-of-projects-will-soon-be-implemented-in-mussoorie-40064060.html',
    date: '2025-12-06',
    note: 'Shilanyas karyakram (kaam shuru hona tha); cost Rs 11.71 crore; fund-srot report me nahi bataya gaya (rajya sarkar ki yojana); Joshi cabinet mantri bhi hain — MLA + mantri dual role disclosed, credit shilanyas tak seemit. Teeno shilanyas ek hi report/karyakram ke hain. Date: report 7 Dec 2025 ko prakashit, event "Shanivar" — 2025-12-06 Shanivar tha.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Mussoorie MLA Ganesh Joshi ne Ravindrapuri Dehradun me Ring Fence Programme ke tehet sewerage pariyojana ki aadharshila rakhi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/dehradun-city-20-crore-worth-of-projects-will-soon-be-implemented-in-mussoorie-40064060.html',
    date: '2025-12-06',
    note: 'Cost Rs 2.69 crore; Ring Fence Programme ke antargat; fund-srot ka vyora report me nahi; sirf shilanyas ki entry. Joshi cabinet mantri bhi hain — dual role disclosed.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Mussoorie MLA Ganesh Joshi ne Chandroti zila panchayat kshetra ki gram panchayaton me aantarik sadakon ke nirman ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/dehradun-city-20-crore-worth-of-projects-will-soon-be-implemented-in-mussoorie-40064060.html',
    date: '2025-12-06',
    note: 'Cost Rs 4.72 crore; shilanyas karyakram; fund-srot report me nahi diya gaya. Joshi cabinet mantri bhi hain — dual role disclosed.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Mussoorie MLA Ganesh Joshi ne Vilaspur Kadli me Rs 243.38 lakh ki peyjal yojana ka lokarpan kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-ganesh-joshi-launches-development-projects-worth-298-06-lakhs-in-vilasipur-kandali-201767356493380.html',
    date: '2026-01-02',
    note: 'Lokarpan (kaam poorn); Rs 243.38 lakh; fund-srot report me nahi bataya gaya; MLA cabinet mantri bhi hain — dual role disclosed. Usi karyakram me school-bhavan ka shilanyas bhi (agli entry). Date: report 2 Jan 2026 ko prakashit, event "Shukravar" — 2026-01-02 Shukravar tha.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Mussoorie MLA Ganesh Joshi ne CM ghoshna ke tehet 11 GRRC Junior High School me Rs 54.68 lakh ke vidyalay bhavan ka shilanyas aur bhoomi pujan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-ganesh-joshi-launches-development-projects-worth-298-06-lakhs-in-vilasipur-kandali-201767356493380.html',
    date: '2026-01-02',
    note: 'CM ki ghoshna ke antargat swikrit bhavan; shilanyas + bhoomi pujan; cost Rs 54.68 lakh; credit shilanyas tak seemit, swikriti sarkari. Joshi cabinet mantri bhi hain — dual role disclosed.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
];

uttarakhandWorks['brij-bhushan-gairola'] = [
  {
    title: 'Ramnagar Danda aur Talai Chak Thano me Rs 16.70 lakh ke Vidhayak Nidhi karyon ka lokarpan aur shilanyas',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rishikesh/story-mla-brijbhushan-gairola-initiates-development-projects-worth-16-70-lakhs-in-doonwala-constituency-201789131127875.html',
    date: '2026-09-11',
    note: 'Ramnagar Danda me Rs 3.20 lakh aur Rs 4 lakh ki do aantrik sadkon ka lokarpan; Talai Chak Thano me Rs 6.45 lakh se panchayat bhavan parisar me chardeewari va tin shed ka shilanyas aur Rs 3.05 lakh ki sadak ka lokarpan. Khaarcha-srot: Vidhayak Nidhi (source ke anusaar). Date anumanit: search-index ke "35 days ago" stamp aur article me diye "Shukravar" ke aadhaar par 2026-09-11 (Shukravar verify kiya gaya).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Badripur nale me Rs 4.60 crore ki baadh-suraksha deewar ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-construction-of-flood-protection-wall-launched-in-doiwala-uttarakhand-201790245592874.html',
    date: '2026-09-24',
    note: 'Rs 460.45 lakh ki lagat; Kailash Hospital ke paas se Doon University tak nirmaan; Badripur, Nawada, Pravesh Vihar, Poojawala ko laabh — kshetravasiyon ki lambe samay se maang thi. Khaarcha-srot source me specified nahi; MLA ne vyaktigat roop se shilanyas kiya. Date anumanit: "22 days ago" stamp aur "Guruvar" ke aadhaar par 2026-09-24 (verify kiya gaya).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Raika Badovala me tin shed aur Jolly Grant me CC marg ka lokarpan — Vidhayak Nidhi se Rs 8.82 lakh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rishikesh/story-mp-brijbhushan-gairola-prioritizes-development-of-basic-amenities-in-doiwala-201788000052464.html',
    date: '2026-08-29',
    note: 'Kul Rs 8.82 lakh ke do kaam; khaarcha-srot: Vidhayak Nidhi (source ke anusaar). Vidyarthiyon aur sthaniya logon ko suvidha.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Lachhiwala ward-1 me Rs 8.60 lakh ki do aantrik sadkon ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rishikesh/story-local-mla-brijbhushan-garola-prioritizes-development-with-new-roads-in-doon-valley-201786364006774.html',
    date: '2026-08-10',
    note: 'Khaarcha-srot: Vidhayak Nidhi (source ke anusaar).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Bullawala (Markham Grant) me Rs 49.73 lakh ki sadak ka shilanyas',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/rishikesh/mla-laid-the-foundation-stone-for-road-construction-rishikesh-news-c-38-1-sdrn1029-127623-2025-05-26',
    date: '2025-05-26',
    note: 'Graminon ki lambe samay se maang thi; MLA ne vidhi-vidhan se pooja-archana kar shilanyas kiya. Khaarcha-srot source me specified nahi.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Doiwala nagar palika ward-17 aur Bullawala me teen interlocking tile sadkon ka shilanyas — MDDA se Rs 34 lakh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rishikesh/story-infrastructure-development-in-doon-mla-brijbhushan-gairola-lays-foundation-for-interlocking-tile-roads-201768999647372.html',
    date: '2026-01-21',
    note: 'Khaarcha-srot: Mussoorie-Dehradun Vikas Pradhikaran (MDDA), Rs 34 lakh (source ke anusaar). Nirmaan agency MDDA; MLA ne vyaktigat roop se shilanyas kiya.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Athurwala me Nagraj mandir saundaryikaran (Rs 5 lakh) aur Karhaikala me kshatigrast puliya punarnirman (Rs 3.5 lakh) ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rishikesh/story-legislator-brijbhushan-gairola-initiates-development-projects-for-nagraj-temple-and-bridge-reconstruction-201784209503474.html',
    date: '2026-07-17',
    note: 'Khaarcha-srot source me specified nahi; MLA ne vyaktigat roop se shilanyas kiya.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Athurwala me Tehri-heritage ghantaghar nirmaan ko vittiya swikriti — kshetravasiyon ne vidhayak ka sammaan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rishikesh/story-historic-clock-tower-approved-in-athurwala-local-community-celebrates-201788864280573.html',
    date: '2026-09-08',
    note: 'Ghantaghar ko shasan se vittiya swikriti mili; swikriti rashi source me nahi. Credit capped: swikriti sarkari hai, MLA ki bhoomika maang uthane tak — source me isse aage ka daawa nahi. Date anumanit: "38 days ago" stamp aur "Mangalvar" ke aadhaar par 2026-09-08 (verify kiya gaya).',
    period: '2022-2027',
    stage: 'swikriti',
  },
  {
    title: 'Nathuwawala (ward-100, Rs 11 lakh) aur Natthanpur (ward-95, Rs 4.30 lakh) me aantrik sadkon ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-brijbhushan-gairola-inaugurates-internal-roads-in-doiwala-201785756529017.html',
    date: '2026-08-03',
    note: 'Kul Rs 15.30 lakh; khaarcha-srot: Vidhayak Nidhi (source ke anusaar). Date anumanit: "74 days ago" stamp aur "Somvar" ke aadhaar par 2026-08-03 (verify kiya gaya).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Nageshwarpuram Nakraunda me Rs 26 lakh ki aantrik sadkon ka bhoomi poojan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-brijbhushan-gairola-initiates-construction-of-internal-roads-in-dehradun-with-26-lakh-funding-201770880474638.html',
    date: '2026-02-12',
    note: 'Khaarcha-srot source me specified nahi; MLA ne vyaktigat roop se bhoomi poojan kar nirmaan ka shubharambh kiya.',
    period: '2022-2027',
    stage: 'bhoomi-poojan',
  },
  {
    title: 'Badri Kedar Enclave, Inderpur me Rs 7 lakh ki aantrik sadkon ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-brijbhushan-gairola-inaugurates-internal-roads-in-doiwala-constituency-201764334245608.html',
    date: '2025-11-28',
    note: 'Khaarcha-srot: Vidhayak Nidhi (source ke anusaar).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Mini Mussoorie Nawada me sadak aur Bhagirathi Enclave Natthanpur me samudayik bhavan tin shed-parapet ka lokarpan; Jagriti Vihar Natthanpur me sadkon ka bhoomi poojan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-dehradun-mla-brijbhushan-gairola-inaugurates-community-building-and-roads-in-doiwala-201767619766040.html',
    date: '2026-01-05',
    note: 'Khaarcha-srot: Vidhayak Nidhi (source ke anusaar); kaam ki rashi source me nahi.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
];

uttarakhandWorks['prem-chand-aggarwal'] = [
  {
    title: 'Rishikesh me Railway Road par interlocking sadak ka MLA ne lokarpan kiya — Rs 30 lakh Vidhayak Nidhi se bani, PWD ne nirman kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rishikesh/story-improved-infrastructure-rishikesh-mla-inaugurates-new-interlocking-road-201764673941978.html',
    date: '2025-12-02',
    note: 'Vidhayak Nidhi ke antargat swikrit, lok nirman vibhag ne nirman poora kiya; jarjar halat wali mukhya sadak par vyaktigat lokarpan. Ek non-whitelisted portal (janswar) isi event ko Rs 20 lakh batata hai — yahan HT Media ke Hindi daily Hindustan ke Rs 30 lakh ka aankda rakha gaya hai (livehindustan.com Hindustan ka official digital platform hai).',
    period: '2022-2027',
  },
  {
    title: 'MLA ne Rishikesh ke Tehri-visthapit Nirmal Block me Rs 150.99 crore ki sewer line pariyojna ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/rishikesh/laid-the-foundation-stone-of-sewer-line-project-rishikesh-news-c-5-1-drn1046-836351-2025-11-17',
    date: '2025-11-17',
    note: 'MLA ka vyaktigat shilanyas, sarkari sewerage pariyojna; report me fund ka srot (yojna) stated nahi hai — yah disclosed hai.',
    period: '2022-2027',
  },
  {
    title: 'MLA ne Haridwar Road par Gangeshwar Mahadev mandir me Rs 2 lakh ki Vidhayak Nidhi se bane tin shed ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/rishikesh/cabinet-minister-inaugurated-tin-shed-rishikesh-news-c-5-1-drn1046-631396-2025-03-02',
    date: '2025-03-01',
    note: 'Mandir samiti ki maang par Vidhayak Nidhi se tin shed lagaya gaya, MLA ne vyaktigat lokarpan kiya. Date inferred: canonical source 2025-03-02 ko publish hua, karyakram 1 March ko hua (ek anya report me 01 March stated; reasoning yahan disclosed hai).',
    period: '2022-2027',
  },
  {
    title: 'Rishikesh road-rage mamle me MLA par FIR — Rishikesh Kotwali me IPC 147/323/504 ke tahat mamla darj, dono pakshon ki shikayat',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/india/uttarakhand-mantri-aides-booked-for-thrashing-man-in-road-rage-case/articleshow/99971724.cms',
    date: '2023-05-03',
    note: 'FIR stage (stage-accurate framing; chargesheet/faisle ki confirmed update nahi mili). Shikayatkarta Surendra Singh Negi (party functionary); MLA ke saath unke gunner Gaurav Rana aur PRO Kaushal Bijlwan naamdar; SSP Dehradun Daleep Singh Kunwar ne FIR ki pushti ki. MLA ka jawab available hai: unke anusar Negi ne gali di, hamla kiya aur kurta phaad diya, gunner ko karyavahi karni padi (TOI, 3 May 2023). Gunner ne Negi aur Dharamveer Prajapati ke khilaf cross-complaint bhi darj karayi.',
    period: '2022-2027',
  },
];

// ---- REJECT-LOG (Dehradun, 5/13) ----
// pritam-singh: Mandoli-Ubheru marg ke liye CM se milkar dhan-swikriti ka ashwasan (sirf ghoshna); Tyuni workers meeting (political, koi kaam nahi); Chakrata kshetra-panchayat meeting me nirikshan; Garhwal Post me Chief Secretary ko memorandum (sirf maang); Health Minister nivas gherao (virodh, koi nateeja); CM se atikraman-karyavahi rokne ki maang (sirf maang); ETV Bharat Vidhayak-Nidhi % (non-whitelist + aggregate); 2012 ka CM-124-projects karyakram (pre-term + CM ki ghoshna); YouTube podcasts; Kalsi SIR voter-list meeting. Retry lead: koi nahi.
// munna-singh-chauhan: Garhwal Post ke Vikas Bharat Sankalp Yatra/Vartalap workshop (non-whitelist); ThePrint CM-Dhami Rs 260cr Vikasnagar karyakram 2 Jan 2022 (pre-term + CM ka); panchayat secretariat maang (maang, non-whitelist); Live Hindustan ki kayi post-event khabren (worker ne non-whitelist mana — parent note: livehindustan Hindustan ka official platform hai; ye entries whitelisted outlet par mile to retry); UUSDA nirikshan / monsoon baithak (sirf nirikshan/bayaan); Dainik Bhaskar NH-507 widening (kendriya pariyojna + MLA ka social-media dawa = reject); Ranwai mahotsav mukhya-atithi; 'love jihad' kotwali (MLA aaropi nahi); YouTube (gaushala/ramlila); 2022-purva CM karyakram. Namesake: Ayodhya wale divangat "sw. Munna Singh Chauhan" alag vyakti.
// sahdev-singh-pundir: HT CM-Dhami Sahaspur Rs 12.03cr road-widening shilanyas (CM ka karyakram, MLA sirf maujood); Amar Ujala SHG samman (samaroh); Manduwala hatya par SSP gyapan (law-and-order maang, koi nateeja); livehindustan ki kayi post-event khabren (worker ne non-whitelist mana — retry-lead upar, whitelisted outlet par mile to entry); etvbharat sadak-vivad (non-whitelist, koi FIR nahi); Congress ke "Whitehouse"/mining aarop (bina FIR/janch — reject). Negatives: 2017 "malafide cases" pre-term; 2022 halafname me 0 criminal cases.
// vinod-chamoli: pahadbharat Rs 5cr+ yojnaen (non-whitelist); newscubic 2021 (pre-term + non-whitelist); Garhwal Post "boycott of Govt functions" (virodh/bayaan); livehindustan drama-hall maang (sirf maang); hindustantimes.com 2017 dual-posts (pre-term); Sunday Guardian/NIE/sundayguardianlive (raajnaitik bayan); NIE "Uttarakhand BJP MLA rape case" 2020 (dusra MLA, Chamoli nahi); telegraphindia "Vinod" gang-rape (naam-sadrishya vyakti); thedailyjagran (sandehspad domain); garhwalpost Ankita Bhandari bayan; jagran results (Chamoli jila/sthan ya dusra vyakti). Retry: Deepnagar ward-82 community-bhavan lokarpan ki whitelist coverage.
// umesh-sharma-kau: NDTV 2020 Nadda-patra (pre-term); Raipur road-widening shilanyas Rs 364.72L (chhote portals — retry); Seva Sankalp camp (CM ka karyakram, maujoodgi); ICU Rs 1cr FY 2021-22 (pre-term); Himalayan Samoon cafe ribbon-cutting (private venture); Poly Kids annual function (mukhya-atithi); mayor shapath (maujoodgi); ETV Bharat mandir-daan (dhaarmik daan). Namesake: Khanpur ke Umesh Kumar ke FIR/firing maamle — alag vyakti, kabhi mat jodna.
// khajan-dass: TOI Assembly-NOC question (sirf prashn, koi nateeja); Amar Ujala Indira Market review (sirf nirikshan, MDDA ki pariyojna); Amar Ujala Saharanpur Road waterlogging inspection (Mayor ke saath nirikshan, fund Smart City+Nigam ka); Dainik Jagran RTI 66.11% (aggregate, koi itemized kaam nahi); Jagran Samvadi minority-education (mantri-niyam); NIE nikahnama (rajya-stariya policy); HT Haldwani ritual (raajnaitik bayan); trunk sewer sanyukt bhoomi pujan Rs 21.03cr (non-whitelist inextlive — retry: whitelist outlet par mile to entry); Indira Colony bhavan (non-whitelist); Shaheed Smarak shed (non-whitelist, rashi nahi); Seva Sankalp camp (vibhag ka kaam); DDRC (thedailyjagran domain sandehspad); ETV Bharat dharna (bina FIR); samaroh/commercial maujoodgiyan; review meetings. NEGATIVE (Rajaji Tiger Reserve shaadi vivad): case mantir samiti ke khilaf tha, mantri khud aaropi nahi; bete ki shaadi parivarik mamla — negative nahi bana.
// savita-kapoor: garhwalpost Valmiki Mandir sahayak-upkaran (non-whitelist + kalyan shivir); CM ka Harbans Kapoor Memorial Hall udghatan (MLA sirf maujood); CM review meetings; CM ka Rajpur Road shilanyas 2022; pioneeredge AYUSH; etvbharat Mar 2022 interview (pre-term); indiatimesgroup MDDA 3 park saundaryakaran (non-whitelist — retry: whitelisted coverage par entry); naveensamachar (wahi); latestly civic-body oath (maujoodgi); NIE/TOI Rekha Arya ke pati FIR (alag vyakti); etvbharat Ankita Bhandari virodh (Kapoor aaropi nahi); garhwalpost jayanti shraddhanjali (samaroh). Negative: 0 cases, koi FIR nahi.
// ganesh-joshi: Nagal Hatnala Rs 398.96L + Rs 23L Mandi + Rs 188.36L (garhwalpost/the-daily-jagran-aggregator — retry whitelisted); Barlowganj community hall Rs 11L (non-whitelist — retry); Gangol Panditwari (non-whitelist — retry); Vijay Colony Rs 38L+18L (garhwalpost — retry); Serki (chhota portal); Aryanagar community building (garhwalpost — retry); Pt Deendayal Park Landour (garhwalpost — retry); HT CM-Dhami Rs 17.8cr Mussoorie inauguration (CM ka karyakram); Jagran RTI 65.45% (aggregate); garhwalpost review meetings (nirikshan); opposition aarop (non-whitelist, bina FIR); Chhath money-distribution 2018 (pre-term); Shaktimaan ghoda 2016 (acquittal pre-term; Dec 2024 third-party petition par reserve judgment — naya FIR/janch nahi — negative nahi).
// brij-bhushan-gairola: zee24newslive/avikaluttarakhand/uttarakhandsamachar/bhaskarindialive(≠Dainik Bhaskar)/ravivardelhi (chhote portals — retry whitelist par); YouTube AK VAARTA/Fork Tales (YouTube-only); public.app Majri Grant vivaad (MLA aaropi nahi); Hindustan airport-vistarikaran ashwasan (sirf ashwasan); Amar Ujala Amrit Bharat Harrawala (kendriya, maujoodgi); Garhwal Post expressway pratikriya; uttarakhandsamachar Rahul-Gandhi putla/mukhya-atithi (samaroh). Namesake: Brij Bhushan Sharan Singh (ex-MP kushti case) — alag vyakti. Negative: koi FIR/janch nahi.
// prem-chand-aggarwal: Bapugram Rs 10L / Pratitnagar Rs 32L / Haripur Kalan / Gumaniwala Rs 15L ghoshnaen (sirf ghoshna); Rishikesh corridor swagat-bayaan (sirf statement); CM shahri-vikas karyakram (MLA sirf maujood); CM samiksha-baithak maang (charcha); Budget 2025-26 prastuti (mantri-niyam); JMG News/devbhumi kesari (non-whitelist); newsdastak100 Maya Kund sadken (non-whitelist — retry whitelisted); AIIMS convocation (maujoodgi); beta Piyush par van-kharab/avaydh sadak (parivar mamla, MLA aaropi nahi); 'Pahadi' tippani vivad (bina FIR/janch); sankhnaad ~2021 (pre-term + non-whitelist); speaker-kaam gumaniwala (pre-term). Negative bana: road-rage FIR (upar).
// ---- Dehradun district batch END (49 entries, negatives 2) ----

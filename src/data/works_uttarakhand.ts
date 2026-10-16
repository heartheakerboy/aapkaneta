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
// ---- Pauri Garhwal district batch (researched 2026-10-17) ----
// 6 workers; coordinator-merged. Kul: 31 entries (dhan-singh-rawat 12, satpal-maharaj 11, ritu-khanduri-bhushan 4, daleep-singh-rawat 2, raj-kumar-pori 1, renu-bisht 1 dawa). Negatives: 0.

uttarakhandWorks['dhan-singh-rawat'] = [
  {
    title: 'MLA ne Pabau block me Nautha-Buransi-Kulyani 7 km motor marg (lagbhag Rs 9.37 crore) aur Sainji-Kurgadkhal-Gwalkhada motor marg (Rs 96.13 lakh) ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/pabau-region-receives-the-gift-of-development-schemes-worth-crores-pauri-news-c-51-1-pri1001-116025-2026-10-14',
    date: '2026-10-14',
    note: 'Teen-divasiya kshetra bhraman ke antim din Pabau block (Sainji, Buransi, Jagteshwar, Nautha) me kul Rs 16.18 crore ki vikas yojnaon ka shilanyas-lokarpan hua; usi karyakram me dono sadkon ka vyaktigat shilanyas (Nautha-Buransi-Kulyani ka bhoomi pujan sahit). Fund: article me yojna-wise fund source disclosed nahi — sarkari vikas yojnaon ke tahat; MLA ki bhoomika shilanyas/lokarpan. Mantri ke roop me karyakram, lekin seat-stariya kaam.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'MLA ne RA Inter College Jagteshwar tak Rs 8.21 lakh ki interlocking tiles sadak ka lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/pabau-region-receives-the-gift-of-development-schemes-worth-crores-pauri-news-c-51-1-pri1001-116025-2026-10-14',
    date: '2026-10-14',
    note: 'Buransi mukhya marg se RA Inter College Jagteshwar tak bani interlocking tiles ka vyaktigat lokarpan; usi karyakram me school me Rs 23.80 lakh ke atirikt kaksh ka shilanyas bhi hua (alag entry). Fund source article me disclosed nahi.',
    period: '2022-2027',
    stage: 'lokarpan'
  },
  {
    title: 'MLA ne RA Inter College Jagteshwar me Rs 23.80 lakh ke atirikt kaksh ka shilanyas kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/pabau-region-receives-the-gift-of-development-schemes-worth-crores-pauri-news-c-51-1-pri1001-116025-2026-10-14',
    date: '2026-10-14',
    note: 'School me kaksh-vistar ka vyaktigat shilanyas; school pahunchne par chhatron ne swagat kiya aur sanskritik prastuti di. Fund source article me disclosed nahi.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'MLA ne Buransi ke Patulya Pauranik mandir ke sthal vikas aur prachin Bindeshwar mandir ke Rs 3 lakh ke sthal vikas karya ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/pabau-region-receives-the-gift-of-development-schemes-worth-crores-pauri-news-c-51-1-pri1001-116025-2026-10-14',
    date: '2026-10-14',
    note: 'Kshetra ki dharmik-sanskritik virasat ke sanrakshan ke liye dono mandir sthalon ka vyaktigat shilanyas; usi daure me Sainji-Chaulusain, GIC va Chaplodi-Faldadi sadak sudharyikaran karya bhi shamil the. Fund source article me disclosed nahi.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'MLA ne Khirsu block me Kanda Rampur Shiv mandir parisar (Rs 4 lakh: bench, rain-basera, sthal vikas) aur Devalgarh Rajarajeshwari mandir ke paas sadak-se-gufa marg va saundaryikaran (Rs 28.89 lakh) ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/minister-laid-the-foundation-stone-and-inaugurated-the-schemes-shrinagar-news-c-5-1-gkp1010-590405-2025-01-09',
    date: '2025-01-09',
    note: 'Khirsu block ke Kanda Rampur, Devalgarh, Bhatoli, Sarana gaon ke bhraman ke dauran vyaktigat shilanyas; usi daure me BJP sadasyata abhiyan bhi chala (rajnaitik gatividhi — kaam nahi). Fund source article me disclosed nahi.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'MLA ne Bhatoli gaon me Rs 10 lakh ke panchayat bhawan ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/minister-laid-the-foundation-stone-and-inaugurated-the-schemes-shrinagar-news-c-5-1-gkp1010-590405-2025-01-09',
    date: '2025-01-09',
    note: 'Khirsu block bhraman ke dauran panchayat bhawan ka vyaktigat lokarpan. Fund source article me disclosed nahi.',
    period: '2022-2027',
    stage: 'lokarpan'
  },
  {
    title: 'MLA ne Sarana gaon ki Rs 13.69 lakh ki sadak ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/minister-laid-the-foundation-stone-and-inaugurated-the-schemes-shrinagar-news-c-5-1-gkp1010-590405-2025-01-09',
    date: '2025-01-09',
    note: 'Taiyaar Sarana gaon sadak ka vyaktigat lokarpan (Khirsu block bhraman). Fund source article me disclosed nahi.',
    period: '2022-2027',
    stage: 'lokarpan'
  },
  {
    title: 'MLA ne Srinagar ke RA Inter College Sweet me Rs 22.68 lakh ke computer kaksh ka shilanyas kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/minister-laid-the-foundation-stone-of-the-girls-hostel-shrinagar-news-c-53-1-sri1002-117630-2025-10-16',
    date: '2025-10-16',
    note: 'Nagar nigam kshetra ke RA Inter College Sweet me computer kaksh ka vyaktigat shilanyas; mantri ke roop me kiya gaya lekin seat-stariya school ka kaam. Usi avsar par rajkiya medical college ke balika chhatrawas (Rs 701.65 lakh, rajya yojna 2024-25) ka shilanyas bhi hua — jo mantri-niyam ke tahat entry nahi bana (medical college vibhagiya pariyojna). Fund source article me disclosed nahi.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'MLA ne Pabau block me Rs 5.70 crore ki 39 vikas yojnaon ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/video/uttarakhand/pauri/video-pauri-cabinet-minister-dhan-singh-rawat-laid-the-foundation-stone-of-39-schemes-worth-rs-570-crore-in-pabau-2026-02-16',
    date: '2026-02-16',
    note: 'Khudeshwar maidan, Pabau me somvaar ko shilanyas (post-event video report, 16 Feb 2026). Article me yojna-wise suchi aur fund source disclosed nahi. Surang-nirman wali baat sirf bayan thi (sarvasammati par nirbhar) — kaam nahi, entry me shamil nahi.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'MLA ki ore se Dungripath-Chantikhal-Kherakhal 8 km marg ke damrikaran va sudharyikaran ke liye Rs 15.90 crore ka budget swikrit hua; PWD ne kaam shuru kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/the-journey-between-srinagar-and-rudraprayag-will-be-easy-the-dungripath-kherakhal-road-will-be-made-shiny-shrinagar-news-c-53-1-sri1002-119595-2026-01-13',
    date: '2026-01-13',
    note: 'Amar Ujala (13 Jan 2026) ke anusar cabinet mantri Dr Dhan Singh Rawat ki ore se Sep 2025 me Rs 1589.54 lakh (lagbhag Rs 15.90 crore) ka budget swikrit hua; LoNiVi Srinagar ke EE ke anusar sudharyikaran kaam shuru ho gaya hai — pehle charan me scupper nirman, phir chaudikaran va damrikaran. Credit capped: MLA ki bhoomika budget swikriti; nirman PWD dwara. Yah vaikalpik marg hai (Sirohbagad/Farasu bhuskhalan par), Srinagar-Khirsu-Rudraprayag kshetra ko labh.',
    period: '2022-2027',
    stage: 'swikriti'
  },
  {
    title: 'CM Dhami ne MLA ki maang par Srinagar me roz 15 ghante peyajal va poore nagar nigam kshetra me sewer line ke liye DPR milte hi tatkaal swikriti ka sarvajanik aashwasan diya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/dehradun/srinagar-cm-dhami-said-cooperation-is-a-medium-to-connect-the-society-and-move-towards-self-reliance-2025-10-13',
    date: '2025-10-13',
    note: 'Srinagar ke sahkarita mele me CM Pushkar Singh Dhami ne cabinet mantri/MLA Dr Dhan Singh Rawat ki maang ke anuroop sarvajanik aashwasan diya: purani peyajal lines badalkar nayi pipeline se 15 ghante roz paani aur nagar nigam ke poore kshetra me sewer line — DPR milte hi tatkaal swikriti. Credit capped: yah aashwasan hai, swikriti ya kaam shuru hona nahi.',
    period: '2022-2027'
  },
  {
    title: 'MLA ne Farasu me Rs 90 lakh ki lift sinchai yojna ka shilanyas kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/srinagar/story-dr-dhans-singh-rawat-unveils-113-crore-development-projects-in-farasu-201765110954947.html',
    date: '2025-12-07',
    note: 'Do-divasiya vidhansabha bhraman ke dauran Farasu me lift sinchai yojna ka vyaktigat shilanyas; nirman Laghu Daal Khand Srinagar dwara; pehle Sweet me pumping yojna swikrit hui thi. Article ki "Rs 113 crore ki saugaat" headline mantri ka samagra dawa hai — entry kewal pusht shilanyas tak seemit. Isi daure me Sweet ke railway-prabhavit 181 logon ko Rs 1.41 crore muavza-cheque vitran hua jo kendriya railway pariyojna ka vaidhanik muavza hai, MLA ka kaam nahi — entry nahi.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
];

uttarakhandWorks['raj-kumar-pori'] = [
  {
    title: 'Vikas Khand Pauri me Kyark-Bamthi motor marg ka lokarpan aur Kothar-Molkhandi motor marg ka shilanyas',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan, 13 Apr 2026',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-pauri-mla-rajkumar-pori-inaugurates-roads-focuses-on-infrastructure-development-201776074581079.html',
    date: '2026-04-13',
    note: 'MLA ne sarkari karyon ka vyaktigat lokarpan aur shilanyas kiya: Kyark-Bamthi motor marg ka lokarpan (purna karya) aur Kothar-Molkhandi motor marg ka shilanyas (nirman shuru hone wala). Article me in sadkon ke liye fund-srot ya lagat-rashi disclosed nahi hai; shrey MLA dwara kiye gaye udghatan/shilanyas tak seemit hai. MLA ka kaha: prathmikta purani sadkon ka damrikaran aur har gaon tak sadak. Post-event reporting hai, karyakaal Mar 2022+ ke andar.',
    period: '2022-2027',
  },
];

uttarakhandWorks['renu-bisht'] = [
  {
    title: 'MLA ka dawa — Rajya mela Gendi Kauthig sthal Thalnadi ki sadak par interlocking tile aur Khobra motor marg par damrikaran karwaya gaya',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'Hindustan (livehindustan.com)',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rishikesh/story-yamkeshwar-uday-mela-promotes-self-reliance-and-government-schemes-201790083273534.html',
    date: '2026-09-22',
    note: 'Yamkeshwar Uday Mela (Kasyali) ke manch se MLA Renu Bisht ka dawa: rajya mela Gendi Kauthig ke sthal Thalnadi ki sadak par interlocking tile ka kaam karwaya gaya aur Khobra motor marg par damrikaran karwaya gaya — donon kaam poora hone ka dawa, mele ke dauraan graminon ki suvidha ke liye. Ye keval MLA ka dawa hai; kaam ki koi swatantra sarkari ya media pushti report me nahi hai, aur fund (Vidhayak Nidhi ya koi anya) disclosed nahi hai — Vidhayak Nidhi se hone ka koi dastavej source me nahi. Post-event reporting: mela 22 Sep 2026 ko (mangalwar) hua, report usi shaam prakashit (date page metadata se pramanit).',
    period: '2022-2027'
  },
];

uttarakhandWorks['ritu-khanduri-bhushan'] = [
  {
    title: 'MLA ne punarnirmit Malan pul ka vyaktigat lokarpan kiya — pooja-archana aur ribbon kaatkar Kotdwar-Bhabar marg par vahan aavaagaman shuru karaya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/dehradun/kotdwar-news-assembly-speaker-ritu-khanduri-inaugurated-malan-bridge-vehicular-movement-started-2025-05-26',
    date: '2025-05-26',
    note: '2023 ki baadh me kshatigrast Malan pul ka PWD dwara punarnirman (PTI report ke mutabik Rs 26 crore se adhik ki sarkari laagat) poora hone par MLA ka vyaktigat lokarpan; CM Dhami karyakram me nahi aa sake, unhone Janta Inter College se virtual sambodhan diya. PTI report ke mutabik CM ne sarvajanik roop se pul ke punarnirman ke liye MLA ke do saal ke prayason ki sarahna ki. Fund: rajya sarkar (PWD) — shrey sarkar ko; MLA ki bhoomika lokarpan + prayas (shrey capped).',
    period: '2022-2027',
    stage: 'lokarpan'
  },
  {
    title: 'MLA ne Kanvashram, Kotdwar me Chakravarti Samrat Maharaj Bharat ki bhavya murti ka vidhivat udghatan karke jansamarpit kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/video/uttarakhand/kotdwar/video-magnificent-statue-of-emperor-bharat-was-formally-inaugurated-at-kanvashram-in-kotdwar-2026-01-23',
    date: '2026-01-23',
    note: 'CM Pushkar Singh Dhami ki ghoshna ke antargat "Maharaj Bharat ki murti sthapna evam manch nirman karya" — lagbhag Rs 79.74 lakh ki laagat se nirmit; Basant Panchami par MLA ka vyaktigat lokarpan, CM ne video sandesh diya. Saath me selfie point aur paryatak chitrakala bhi vikasit. Fund: rajya sarkar (CM ghoshna) — shrey sarkar ko, MLA ki bhoomika lokarpan (shrey capped).',
    period: '2022-2027',
    stage: 'lokarpan'
  },
  {
    title: 'MLA ke prayason se Kotdwar depot ke karyalaya aur bus adde ke liye shasan ne lagbhag Rs 10 crore jaari kiye — March 2024 me shilanyas, kaam antim charan me',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/pauri-garhwal-kotdwar-bus-stand-78year-wait-ends-for-uttarakhand-depot-40407042.html',
    date: '2026-10-16',
    note: '1948 me khule Uttarakhand Parivahan Nigam ke Kotdwar depot ko 78 saal tak apna bus adda nahi tha. Jagran ke mutabik kshetriya vidhayak Ritu Khanduri Bhushan ke prayason se shasan ne depot karyalaya aur bus adde ke nirman ke liye kareeb Rs 10 crore jaari kiye; March 2024 me shilanyas hua; naya bhawan bankar karyalaya shift ho gaya hai aur platform ka kaam antim charan me hai. Shrey shasan ko — dhanrashi shasan ne jaari ki; MLA ki bhoomika prayas tak seemit (shrey capped).',
    period: '2022-2027',
    stage: 'swikriti'
  },
  {
    title: 'Kotdwar seat par Vidhayak Nidhi se chaar saalon me 549 yojnaon ke liye Rs 18.73 crore swikrit — 353 kaam poore, 196 pragati par',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/kotdwar/kotdwar-mla-ritu-khanduri-mla-fund-18-73-crore-approved-in-four-years-353-of-549-development-works-completed-2026-10-07',
    date: '2026-10-07',
    note: 'Amar Ujala ki varsh-vaar report: FY 2022-23 me Rs 3.75 crore mili (171 karya swikrit, 157 poore); FY 2023-24 me Rs 5 crore (126 karya, 89 poore); FY 2024-25 me Rs 5 crore (133 karya, Rs 4.98 crore swikrit, 59 poore); FY 2025-26 me Rs 5 crore (119 karya, 48 poore). Nidhi se school sudridhikaran, furniture, sinchai gool, suraksha deewar, sampark marg, interlocking marg, mandir parisar saundaryikaran jaise kaam swikrit hue. Fund disclosure: Vidhayak Nidhi aadhikarik roop se FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila-star ke asal aavantan record me lagbhag Rs 4.90 crore/saal darj hai — report ke aankde sarkari aavantan-patra ke anusaar hain.',
    period: '2022-2027',
    stage: 'swikriti'
  },
];

uttarakhandWorks['daleep-singh-rawat'] = [
  {
    title: 'Lansdowne MLA Daleep Singh Rawat ne Jaiharkhal ke Bhitara Malla gaon ke liye jila yojana se swikrit 5 km sadak ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/kotdwar/state-government-is-determined-for-the-development-of-the-area-dilip-rawat-kotdwar-news-c-5-1-gkp1010-604781-2025-01-27',
    date: '2025-01-27',
    note: 'Jaiharkhal block ke Kaudiya patti, gram sabha Garhkot ke Bhitara Malla gaon tak 5 km sadak; shilanyas Satpuli-Chai motor marg par hue karyakram me pooja-archana ke saath vyaktigat roop se kiya. Fund: jila yojana (district plan) — Rs 20 lakh ki laagat se swikrit. Shrey disclosed: sadak ka kaam jila yojana ka hai, MLA ki bhoomika vyaktigat shilanyas tak seemit. Usi report me Jaiharkhal ke Sakmunda me jheel ki swikriti ka ullekh hai, lekin uske liye koi fund ya kaam-shuru ka byora nahi diya gaya — isliye entry me shamil nahi.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'Lansdowne me Vidhayak Nidhi se 4 saalon me 795 vikas karya swikrit, Rs 14.97 crore kharch — 521 kaam poore, 274 pragati par',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/lansdowne-mla-dilip-rawat-spends-14-97-crore-of-18-75-crore-mla-fund-521-of-795-works-completed-2026-10-13',
    date: '2026-10-13',
    note: 'Amar Ujala ki report ke mutabik 2012 se lagatar teesri baar vidhayak Daleep Singh Rawat ko pichhle 4 saalon me kul Rs 18.75 crore Vidhayak Nidhi mili; Rs 14.97 crore kharch, 795 karya swikrit, 521 poore, 274 pragati par. FY-wise: 2022-23 — Rs 3.75 crore me 199 karya swikrit (177 poore, 22 pragati par, 80% kharch); 2023-24 — Rs 5 crore me Rs 4.71 crore ke 230 karya (184 poore, 46 pragati par, 79%); 2024-25 — Rs 5 crore me Rs 4.65 crore ke 187 karya (123 poore, 64 pragati par, 82%); 2025-26 — Rs 5 crore me Rs 4.60 crore ke 179 karya (37 poore, 142 pragati par, 78%). MLA ke mutabik adhiktar karya school, college, chhote sampark marg aur saundaryikaran ke hain; ek sthaniya aalochak (Vikrant Khantwal, Sisaldi) ne nidhi ke chhote samanon tak seemit hone ka aarop lagaya — report me chhapa. Aadhikarik Vidhayak Nidhi FY 2023-24 se Rs 5 crore/seat/saal hai (FY 2022-23 me Rs 3.75 crore); jila aankdon me asal aavantan lagbhag Rs 4.90 crore/saal darj hai.',
    period: '2022-2027',
    stage: 'swikriti'
  },
];

uttarakhandWorks['satpal-maharaj'] = [
  {
    title: 'Pokhra vikas khand me lagbhag Rs 4 crore ki vikas yojnaon ka shilanyas kiya',
    category: 'Any',
    badge: 'sarkari',
    sourceLabel: 'Akashvani News, 6 Aug 2024',
    sourceUrl: 'https://newsonair.gov.in/hi/%e0%a4%b2%e0%a4%bf%e0%a4%95%e0%a4%be%e0%a4%b8-%e0%a4%ae%e0%a4%82%e0%a4%a4%e0%a5%8d%e0%a4%b0%e0%a5%80-%e0%a4%b8%e0%a4%a4%e0%a5%aa%e0%a4%be%e0%a4%b2/',
    date: '2024-08-06',
    note: 'Lok Nirman mantri aur Chaubattakhal MLA ke roop me Pokhra vikas khand me lagbhag Rs 4 crore ki vikas yojnaon ka vyaktigat shilanyas; karyakram me lokparv Harela ke tahat vriksharopan bhi kiya. Sarkari portal (Akashvani) ki report me yojnaon ka itemized vivran nahi hai. ETV Bharat (non-whitelisted) ke anusaar isi karyakram me Rs 338.82 lakh ke block karyalaya bhavan ka lokarpan aur Rs 60 lakh ke Type-3 bhavanon ka shilanyas bhi hua tha — iski pushti whitelisted source se nahi mili. Status: shilanyas.',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'Sendhar aur Bironkhal me 8 motor margon ke sudhar, vistar aur marammat karyon ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 17 Dec 2024',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/kotdwar/all-round-development-happening-under-the-leadership-of-pm-and-cm-satpal-maharaj-kotdwar-news-c-5-1-gkp1010-572501-2024-12-17',
    date: '2024-12-17',
    note: 'Rajkiya Inter College Sendhar aur Rajkiya Inter College Bironkhal me aayojit do karyakramon me kul Rs 19,42,71,000 ki yojnaon ka shilanyas-lokarpan; inme ye 8 sadak karya lokarpit hue: Bharoli-Maithana marg marammat Rs 30.35 lakh (PMGSY se PWD ko hastantarit), Bedikhal-Chorkhinda Rs 73.60 lakh, Bedikhal-Bhorad Rs 61.69 lakh, Kasani-Dheswani Rs 339.76 lakh, Bedikhal-Bharolikhal-Aroli marg ka Chandoli tak vistarikaran (dwitiya charan stage-1) Rs 133.58 lakh (rajya yojna), Bironkhal-Dumaila Talla-Bhamraikhal-Pakholi-Dunav Rs 133.17 lakh, Maithana-Ghansyali Rs 72.31 lakh, Jamri-Talai-Khatlagad-Mahadev sudharikaran-damrikaran Rs 139.36 lakh (rajya yojna). Sabhi karya Chaubattakhal seat ke andar; vyaktigat lokarpan. Status: lokarpan (purna karya).',
    period: '2022-2027',
  },
  {
    title: 'Bironkhal me swatantrata senani Jeet Singh Garhwali ki murti ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 17 Dec 2024',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/kotdwar/all-round-development-happening-under-the-leadership-of-pm-and-cm-satpal-maharaj-kotdwar-news-c-5-1-gkp1010-572501-2024-12-17',
    date: '2024-12-17',
    note: 'Upar wale karyakram me hi Bironkhal me swatantrata senani Jeet Singh Garhwali ki murti ka vyaktigat lokarpan kiya. Lagat article me darj nahi. Status: lokarpan.',
    period: '2022-2027',
  },
  {
    title: 'Pokhra block ki 4 gram panchayaton aur Ekeshwar ke Danda Malla me panchayat bhavanon ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 26 Dec 2025',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/in-chaubattakhal-projects-worth-26-crore-rupees-were-inaugurated-and-their-foundation-stones-were-laid-pauri-news-c-49-1-sdrn1007-120696-2025-12-26',
    date: '2025-12-26',
    note: 'Kul Rs 26 crore / 18 yojnaon ke lokarpan-shilanyas karyakram me Pokhra vikas khand ki gram panchayat Veenadhar, Kameri, Devrani, Aslot aur Ekeshwar vikas khand ki gram panchayat Danda Malla ke panchayat bhavanon ka vyaktigat lokarpan kiya. Article me lagat "50 lakh" (Pokhra ke 4 bhavan) aur "10 lakh" (Danda Malla) darj hai — kul ya prati-bhavan, ye spasht nahi. Status: lokarpan (purna karya).',
    period: '2022-2027',
  },
  {
    title: 'Devaradi gram Malli (Pokhra) me Rs 136.94 lakh ki sprinkler-adharit lift sinchai yojna ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 26 Dec 2025',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/in-chaubattakhal-projects-worth-26-crore-rupees-were-inaugurated-and-their-foundation-stones-were-laid-pauri-news-c-49-1-sdrn1007-120696-2025-12-26',
    date: '2025-12-26',
    note: 'Pokhra vikas khand ke Devaradi gram Malli me Rs 136.94 lakh lagat se banne wali sprinkler pranali adharit lift sinchai yojna ka vyaktigat shilanyas kiya. Fund/vibhag article me specify nahi. Status: shilanyas (nirmaan shuru hona).',
    period: '2022-2027',
    stage: 'shilanyas'
  },
  {
    title: 'Pakhri (Ekeshwar) me Rs 120 lakh ki solar on-grid lift sinchai yojna ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 26 Dec 2025',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/in-chaubattakhal-projects-worth-26-crore-rupees-were-inaugurated-and-their-foundation-stones-were-laid-pauri-news-c-49-1-sdrn1007-120696-2025-12-26',
    date: '2025-12-26',
    note: 'Ekeshwar vikas khand ke gram Pakhri me Rs 120 lakh ki dhanrashi se bani solar on-grid adharit lift sinchai yojna ke navnirman ka vyaktigat lokarpan kiya. Fund/vibhag article me specify nahi. Status: lokarpan (purna karya).',
    period: '2022-2027',
  },
  {
    title: 'Dadakhel se Kui tak 3 km Damdeval gramin motor marg (Rs 887.92 lakh, stage-1) ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 26 Dec 2025',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/in-chaubattakhal-projects-worth-26-crore-rupees-were-inaugurated-and-their-foundation-stones-were-laid-pauri-news-c-49-1-sdrn1007-120696-2025-12-26',
    date: '2025-12-26',
    note: 'Rs 887.92 lakh ki lagat se nirmit Pokhra vikas khand ke 3 km Damdeval motor marg par Dadakhel se gram Kui tak gramin motor marg nirmaan karya (stage-1) ka vyaktigat lokarpan kiya. Karya Chaubattakhal seat ke andar hai; PWD mantri ke roop me vibhag unka hai lekin udghatan kshetra-star ka vyaktigat hai. Fund-mad article me specify nahi. Status: lokarpan (purna karya).',
    period: '2022-2027',
  },
  {
    title: 'Chaubattakhal-Kui-Danta marg se Ulkhait tok ke Majgaon (SC) tak gramin motor marg (Rs 212.35 lakh) ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 26 Dec 2025',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pauri/in-chaubattakhal-projects-worth-26-crore-rupees-were-inaugurated-and-their-foundation-stones-were-laid-pauri-news-c-49-1-sdrn1007-120696-2025-12-26',
    date: '2025-12-26',
    note: 'Rs 212.35 lakh ki lagat se nirmit Chaubattakhal-Kui-Danta motor marg se Ulkhait tok ke Majgaon (anusuchit jati basti) tak gramin motor marg nirmaan ka vyaktigat lokarpan kiya. Fund-mad article me specify nahi. Status: lokarpan (purna karya).',
    period: '2022-2027',
  },
  {
    title: 'Rasiya Mahadev me Rs 3.88 crore lagat se bane paryatak guest house ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 6 Oct 2026',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/kotdwar/several-development-schemes-in-bironkhal-gain-momentum-maharaj-kotdwar-news-c-49-1-sdrn1007-127133-2026-10-06',
    date: '2026-10-06',
    note: 'Bironkhal kshetra ke Rasiya Mahadev me Rs 3.88 crore ki lagat se bane paryatak guest house (TRH) ka vyaktigat lokarpan kiya. Paryatan vibhag mantri ke roop me unka vibhag hai, lekin karya unki Chaubattakhal seat ke andar hai. Isi karyakram me kai yojnaon ke shilanyas ka bhi zikr hai, jinka itemized vivran article me nahi hai. Status: lokarpan (purna karya).',
    period: '2022-2027',
  },
  {
    title: 'Bijorapani-Kunjkhal-Kolakhal-Jaikot 8 km gramin motor marg (Rs 275.63 lakh) ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 7 Oct 2026',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/kotdwar/maharaj-laid-the-foundation-stones-for-projects-in-pokhra-and-jayharikhal-kotdwar-news-c-49-1-sdrn1007-127168-2026-10-07',
    date: '2026-10-07',
    note: 'Pokhra vikas khand me Rs 2,75,63,000 ki lagat se nirmit Bijorapani-Kunjkhal-Kolakhal-Jaikot marg par 8 km (gram Chinwadi tak) gramin motor marg ka vyaktigat lokarpan kiya. Kshetra-bhraman ke dauraan Kolakhal me bahuuddeshiya shivir me jansamasyaen bhi suni. Status: lokarpan (purna karya).',
    period: '2022-2027',
  },
  {
    title: 'Jaiharikhal ke Gherua me Rs 70.75 lakh ke link marg sudridhikaran aur 2.85 km Gherua-Gujarkhand-Malana motor marg (Rs 93.17 lakh) ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 7 Oct 2026',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/kotdwar/maharaj-laid-the-foundation-stones-for-projects-in-pokhra-and-jayharikhal-kotdwar-news-c-49-1-sdrn1007-127168-2026-10-07',
    date: '2026-10-07',
    note: 'Jaiharikhal vikas khand ke Gherua me Rs 70.75 lakh ke link marg sudridhikaran karya aur Rs 93.17 lakh lagat se 2.85 km lambe Gherua-Gujarkhand-Malana motor marg ka vyaktigat shilanyas kiya. Status: shilanyas (nirmaan shuru hona).',
    period: '2022-2027',
    stage: 'shilanyas'
  },
];
// ---- REJECT-LOG (Pauri Garhwal, 6/13) ----
// dhan-singh-rawat (Srinagar): Medical college girls hostel Rs 701.65L shilanyas (mantri-vibhagiya, reject); Base Hospital Shrikot critical-care block Rs 18.80cr (pre-event, reject — retry post-event); 3 helipad prastav (reject); Thalisain aapda-daura (nirikshan, reject); Tarakund vaade (ghoshna, reject); Pabau 39-schemes wala Rs 5.70cr shilanyas ENTRY bana; farasu railway muavza Rs 1.41cr (kendriya vaidhanik muavza, reject); CM Rs 20.79cr swikriti (MLA ka kaam nahi, reject); Kirtinagar peyajal (dusri seat, reject); pre-term 2019 items (reject); Rs 70cr Pabau event Jan 2024 (non-whitelist — retry whitelisted); Pabau-Paithani/Sep2023/Dec2023 daura items (garhwalpost — retry); dialysis dharna/BJP-vs-doctor bayan (rajnaitik, koi FIR nahi — negative nahi); barish-control viral video / PhD sawal (bayan-vivad, negative nahi); Rajasthan Dhan Singh Rawat 2018 FIR (namesake, doosra rajya — reject). MyNeta/Oneindia: 0 criminal cases.
// raj-kumar-pori (Pauri): chhote portals (citylivetoday, himtungvaani, devbhoomisamvad, cobranewsuk, khabaruttarakhand, garhwalpost, uttarakhandhimalaya, loksamvadtoday-blogspot) par kai sadak-shilanyas items — non-whitelist (retry whitelisted par); Baikunth Chaturdashi mela / football final / Jai Kandolia Mahotsav mukhya-atithi (samaroh, reject); livehindustan CM-ghoshna jaankari (ghoshna-class, reject); Vishwa Paryatan Diwas flag-off (ceremonial, reject); British-remark video (remark only, reject); Vidhansabha prashn pumping-yojana (sirf maang, reject). Mazar tin-shed vivad (Vidhayak Nidhi Rs 2L, VHP virodh) — established-media coverage nahi, FIR/janch nahi — negative nahi (watch). Purola namesake "Rajkumar" alag vyakti — trap avoided.
// renu-bisht (Yamkeshwar): Ankita Bhandari / Vanantra resort demolition allegation — koi FIR nahi, koi adhikari-pusht janch nahi, chargesheet me co-accused nahi, HC ne non-attribution accept kiya, MLA ka inkaar TOI me on-record — negative NAHI (retry: CBI Jan 2026 janch me FIR/officer-confirmed development aaye to); Telegraph Dec 2023 JCB-driver testimony (non-whitelist); Naudkhal-Jhaid sadak-nirast aarop (sangathan ka aarop, koi FIR/janch nahi — negative nahi); Congress gherao (protest, negative nahi); ETV 44% kharch (kam kharch apradh nahi). Works reject: Singtali bridge bhoomi-pujan maang (sirf maang); KV maang (sirf maang); Inter College bhavan udghatan CM ne (sirf maang); mini-stadium ghoshna CM ne (MLA maujood); medical camp/bahuddeshiya shivir (free camp + sarkari abhiyan); FB-post vivaad (rajnaitik); dharmik samaroh (samaroh); KV pre-event/ghoshna.
// ritu-khanduri-bhushan (Kotdwar): Speaker-pad sadan-gat faisle sab bahar; Malan-pul bhoomi-pujan Mar 2024 (ETV — retry); KSB pump press-release (retry); KV udghatan Jul 2025 (garhwalpost — retry); KV pre-event/ghoshna (reject); bus flag-off 16 Jun 2026 (non-whitelist — retry); Bhawar tubewells / Balashod tubewell-YouTube (retry whitelisted); ADB peyjal nirikshan (nirikshan, reject); school furniture / yatri sheds / ADB briefing (non-whitelist — retry); public gyms/computers (CSR mukhya-atithi, reject); free meal service (daan, reject); students felicitation / school annual function / book unveiling (samaroh, reject); vikas baithak (baithak, reject). Vidhan Sabha recruitment vivaad Sep 2022 (aarop poorv Speaker par; MLA aaropi nahi — negative nahi); Congress isteefa-maang Mar 2025 (rajnaitik, negative nahi). Halafname: 0 criminal cases.
// daleep-singh-rawat (Lansdowne): rename-virodh letter (sirf maang, reject); tiger-attack isteefa-dhamki (non-whitelist + bayan, reject); 2019 MCC FIR (pre-term, halafname me charges framed nahi — negative nahi); ETV waterfall "vikas" (non-whitelist + sirf prayas, reject); CM Rs 90cr Dec 2021 event (pre-term + CM ka karyakram, reject); YouTube Parsoli claims (YouTube-only, reject); 2022 morcha/khabaruttarakhand bayan (pre-term/rajnaitik, reject); Congress resignation-advice (vipakshi aarop, negative nahi). Namesake checks: Dhan Singh Rawat items alag rakhe. MLA ka bayan vs official: backgroundNote me naam-variant sentence joda gaya.
// satpal-maharaj (Chaubattakhal): PMGSY 11-road Rs 104.80cr swikriti (ghoshna + kendriya, reject); GGIC science ghoshna (reject); Barsund pumping Rs 29.83cr dawa (sanction-info only, reject); Oct-2026 bhashan dawe (1.33cr classrooms, 13cr road, sinchai — bina itemization, reject); check vitran/ABVP samman (samaroh, reject); ETV "CM aadesh avhelna" (non-whitelist, koi FIR nahi — negative nahi); Kedarnath gold vivad (khud commissioner janch baithai, khud aaropi nahi, koi FIR nahi — negative nahi); WPMS/292/2022 (chunav-yachika + pre-term, reject); Dinesh Pratap Singh vs ED (namesake, reject); Dehradun ring road PWD nirdesh (state-level mantri-kaam, reject); Manav Utthan Samiti karyakram (dhaarmik, reject); garhwalpost 64cr event / classrooms Dec 2024 (non-whitelist — retry); Jan 2021 93cr ghoshna (pre-term, reject).

// ---- Haridwar district batch (researched 2026-10-17) ----
// PARENT REVIEW: 21 researched entries me se 2 hatayi — (1) Virendra Kumar ka power-pole negative: bijli vibhag ki sirf shikayat thi, FIR darj hone ki report nahi + MLA khud is act ko nyochit action bata chuke (public act, lekin bina FIR/janch ke negative-niyam poora nahi hota) — FIR-watch lead; (2) Pradeep Batra ki Rishinagar sadak entry: sourceUrl sirf livehindustan.com homepage tha (canonical article URL nahi mila), date anumanit, fund undisclosed — retry lead. Virendra Kumar ke English titles Roman Hinglish me likhe gaye. Batch kul = 19 entries.

uttarakhandWorks['madan-kaushik'] = [
  {
    title: 'Ward 30 Bairagi Camp me Rs 6.8 crore ki 4 km sewer line aur pumping station ka nirman — MLA ne swayam shubharambh kiya (14 May 2026)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haridwar/story-haridwar-sewer-line-project-launched-6-8-crore-investment-for-better-infrastructure-201778757559325.html',
    date: '2026-05-14',
    stage: 'shilanyas',
    note: 'Madan Kaushik ne 14 May 2026 ko Nagar Nigam Haridwar ke Ward 30 Bairagi Camp basti me Rs 6.8 crore ki laagat se 4 km lambi sewer line aur ek pumping station ke nirman ka poojan kar vyaktigat shubharambh kiya; sthaniya parshad aur vibhagiya adhikari maujood the. March 2026 me cabinet mantri banne ke baad ka seat-specific vyaktigat karyakram hai, rajya-stariya vibhagiya faisla nahi.',
    period: '2022-2027',
  },
  {
    title: 'Bilveshwar Colony me mukhya dwar par automatic boom barrier ka udghatan aur Jhanda Ground me tile-bichhawan, deewar punarnirman aur parking sundarikaran karyon ki shuruaat',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/haridwar/development-work-begins-in-bilveshwar-colony-haridwar-news-c-149-1-hrd1003-5324-2026-10-14',
    date: '2026-10-14',
    stage: 'lokarpan',
    note: 'Cabinet mantri Madan Kaushik ne Bilveshwar Colony me mukhya dwar par automatic boom barrier ka udghatan kiya aur Jhanda Ground me tile-bichhawan, puliya tak kshatigrast deewar ke punarnirman aur parking sundarikaran karyon ki shuruaat karai; colony adhyaksh ke prayason ki sarahna ki. Report me fund ki rashi ya yojana ka ullekh nahi hai. Seat-specific vyaktigat karyakram hai, rajya-stariya vibhagiya faisla nahi.',
    period: '2022-2027',
  },
];

uttarakhandWorks['adesh-chauhan'] = [
  {
    title: 'MLA Adesh Chauhan ko Dehradun ki CBI court ne 2009 ke illegal detention mamle me doshi thahraya — 6 mahine ki saza, turant zamaanat mili',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/india/uttarakhand-mla-adesh-chauhan-convicted-2009-illegal-detention-case-10030596/',
    date: '2025-05-26',
    note: 'Dehradun ki CBI court ne Haridwar ke BHEL Ranipur ke BJP MLA Adesh Chauhan ko 2009 ke illegal detention mamle me doshi thahraya aur 6 mahine ki saza sunayi — faisle ke turant baad zamaanat mil gayi. Mamla 2009 ka hai (us waqt Chauhan BJP office-bearer the; MLA 2012 me bane), lekin Mar 2022 ke baad ka legal development hai — 2019 me High Court ne CBI janch ke aadesh diye, Oct 2019 me FIR darj hui, 2022 me MLA ke khilaf aarop tay hue, aur 26 May 2025 ko dosh-siddhi hui. Shaktiyon ne peedit Dheer Singh Chauhan ke 36 ghante ke avaidh police custody me rehne aur pin se banae gaye jakhmon se jhoothe saboot gadne ke aarop lagaye. MLA khud mukhya aaropi rahe (seat se pehchan), FIR/CBI janch adalati-aadesh se hui. Indian Express ki is report me MLA ki seedhi pratikriya shamil nahi hai; unke vakil ke hawale se faisle ko sessions court me chunauti dene ki baat PTI-adhikrit reports me ayi hai. Faisla appeal ke adheen hai.',
    period: '2022-2027',
  },
];

uttarakhandWorks['ravi-bahadur'] = [
  {
    title: 'MLA ne Sahdevpur me Rs 8 lakh ki interlocking-tiles sadak ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/haridwar/mla-ravi-bahadur-inaugurated-the-road-haridwar-news-c-35-1-sdrn1003-126280-2024-12-08',
    date: '2024-12-08',
    stage: 'lokarpan',
    note: 'Jwalapur MLA Ravi Bahadur ne Bahadrabad kshetra ke gram Sahdevpur me main road se Tejendra Sardar ke ghar tak Rs 8 lakh ki laagat se bani interlocking-tiles sadak ka vyaktigat lokarpan kiya. Fund: jila yojana (district plan) — report me MLA ne khud nidhi ki bhoomika darj hai. Post-event reporting.',
    period: '2022-2027',
  },
  {
    title: 'MLA ne Bandarjud Mujahidpur Satiwala me interlocking-tiles sadak ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haridwar/story-road-construction-initiated-in-jwalapur-by-mla-ravi-bahadur-201783340031239.html',
    date: '2026-07-06',
    stage: 'shilanyas',
    note: 'Jwalapur vishva-khand ke gram panchayat Bandarjud Mujahidpur Satiwala me interlocking-tiles sadak ka vyaktigat shilanyas; gram pradhan sahit gramin maujood. Report me laagat/nidhi ka ullekh nahi. Date: article me ghatna "somvaar ko" darj hai, isliye Monday 2026-07-06 rakhi gayi (crawl date ke aadhaar par anumanit).',
    period: '2022-2027',
  },
  {
    title: 'MLA ne Kota Muradnagar me sadak nirmaan karya ka shubharambh kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haridwar/story-social-dialogue-event-in-kota-muradnagar-support-for-mla-ravi-bahadur-and-road-construction-initiated-201782645385205.html',
    date: '2026-06-29',
    stage: 'shilanyas',
    note: 'Jansamvad karyakram me feeta katkar gaon me sadak nirmaan ka shubharambh; uske baad MLA ne galiyon ka bhraman karke samasyayen suni. Report me laagat/nidhi ka ullekh nahi. Date crawl metric ke aadhaar par anumanit hai.',
    period: '2022-2027',
  },
  {
    title: 'MLA ne Haridwar Nagar Nigam ke ward 42 me sadak nirmaan karya ka shubharambh kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haridwar/story-road-construction-started-9279273.html',
    date: '2024-02-03',
    stage: 'shilanyas',
    note: 'Haridwar Nagar Nigam ke ward 42 me sthaniya logon ke saath sadak nirmaan ka shubharambh. Report me laagat/nidhi ka ullekh nahi. Date article me darj 3 Feb 2024 se pramanit.',
    period: '2022-2027',
  },
  {
    title: 'Jwalapur kotwali me tehrir — Congress neta Jitendra Chaudhary ne MLA par phone par dhamki ka aarop lagaya, police janch shuru',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haridwar/story-congress-mla-ravi-bahadur-accused-of-threatening-party-worker-police-investigation-underway-201769522388388.html',
    date: '2026-01-27',
    note: 'MLA Ravi Bahadur par apni hi party ke neta (poorv mayor pratinidhi) Jitendra Chaudhary ko phone par jaan se marne ki dhamki dene ka aarop; Chaudhary ne Jwalapur kotwali me tehrir di aur suraksha mangi. Naam-daar adhikari-pusht janch: kotwali prabhari Kundan Singh Rana ne tehrir milne aur janch ka elaan kiya. Stage-framing: FIR darj hone ki report nahi — tehrir + janch ki sthiti, apradh siddh nahi; viral audio ki Hindustan ne pramanikta ki pushti nahi ki. MLA ka jawab: aarop niradhar aur bebuniyaad, ticket na milne ki ranjish ka natija. Corroboration: Amar Ujala (27 Jan 2026).',
    period: '2022-2027',
  },
];

uttarakhandWorks['mamta-rakesh'] = [
  {
    title: 'Congress MLA Mamta Rakesh ne Bhagwanpur ke Atal Sarovar sthit Valmiki shamshan ghat tak jaane wali sadak ka udghatan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/roorkee/mla-inaugurated-the-road-to-the-crematorium-roorkee-news-c-37-1-rrk1008-162414-2026-10-11',
    date: '2026-10-11',
    stage: 'lokarpan',
    note: 'Report me fund source disclosed nahi; MLA ne swayam sadak ka udghatan kiya, isliye bhoomika udghatan tak capped. Virodhi MLA hain, isliye shrey kaam shuru karane ki pahal tak seemit.',
    period: '2022-2027',
  },
  {
    title: 'Congress MLA Mamta Rakesh ne NH-73 toll plaza ke paas Bahadrabad, Dhanauri, Imli Khera, Bhagwanpur aur Gagledi ko jodne wali sadak ke nirmaan karya ka shubharambh kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/roorki/story-mamata-rakesh-initiates-road-construction-in-bhagwanpur-promotes-development-201763894030065.html',
    date: '2025-11-23',
    stage: 'shilanyas',
    note: 'Report me fund source disclosed nahi; MLA ne swayam nirmaan karya ka shubharambh kiya, isliye bhoomika shilanyas tak capped. Virodhi MLA hain, isliye shrey kaam shuru karane ki pahal tak seemit.',
    period: '2022-2027',
  },
  {
    title: 'Congress MLA Mamta Rakesh ne Bhagwanpur kshetra ke Sisauna gaon me interlocking sadak ka udghatan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/roorki/story-mamata-rakesh-inaugurates-interlocking-road-in-sisauna-emphasizes-rural-development-201778414771973.html',
    date: '2026-05-10',
    stage: 'lokarpan',
    note: 'Report me fund source disclosed nahi; MLA ne swayam sadak ka udghatan kiya, isliye bhoomika udghatan tak capped. Date story metadata se anumanit hai (~159 din pehle) — anuman disclosed hai.',
    period: '2022-2027',
  },
];

uttarakhandWorks['virendra-kumar'] = [
  {
    title: 'Jhabrera MLA Virendra Jati ne Rahimpur se Sarvagya School Shivpuram tak Rs 50 lakh ki sadak ka udghatan kiya (Jan 2026)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/roorki/story-virendra-jati-inaugurates-50-lakh-inr-road-project-in-jhabbreda-uttarakhand-201769001028750.html',
    date: '2026-01-21',
    stage: 'lokarpan',
    note: 'Vyaktigat udghatan ki post-event report; report me funding agency ka naam nahi hai, isliye fund attribution undisclosed rakha gaya hai. Pehchan: Jhabrera seat ke INC MLA (kendra mantri Virendra Kumar namesake se alag).',
    period: '2022-2027',
  },
  {
    title: 'Jhabrera MLA Virendra Jati ne Paniala gaon ke Ravidas Chowk par Rs 15 lakh ki sadak ka udghatan kiya (Sep 2026)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/dehradun/story-inauguration-of-1-5-million-inr-road-in-rudki-by-mla-virendra-jati-201789192101619.html',
    date: '2026-09-13',
    stage: 'lokarpan',
    note: 'Jila yojana ke tahat bani sadak ka vyaktigat udghatan (post-event report). Article page par prakashan-taareekh nahi dikhi — date search-index ke aadhaar par anumanit hai, disclosed hai.',
    period: '2022-2027',
  },
];

uttarakhandWorks['furkan-ahmad'] = [];

uttarakhandWorks['pradeep-batra'] = [];

uttarakhandWorks['umesh-kumar'] = [
  {
    title: 'Khanpur ke chhah gaon me sadak nirmaan karyon ka MLA Umesh Kumar dwara vyaktigat shubharambh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/roorki/story-umesh-kumar-launches-road-construction-projects-in-khanpur-constituency-201789646704564.html',
    date: '2026-09-17',
    stage: 'shilanyas',
    note: 'Kuaankheda, Saidabad, Kudi Netwala, Podowali, Mohanawala aur Khanpur me MLA ne vyaktigat roop se sadak nirmaan ka shubharambh kiya; report me fund/Vidhayak Nidhi ka zikr nahi; Kuaankheda me barsaat ke baad tatbandh ka ashwasan diya gaya (ashwasan hi — karya nahi). Pehchan: Khanpur seat ke IND MLA — Umesh Sharma Kau (Raipur) se alag.',
    period: '2022-2027',
  },
  {
    title: 'Sadan me MLA ke sawal par Khanpur ke chaar vidyalayon ke uchchikaran ki sarkari pushti: Chandrapuri Kala, Dandera, Balawali aur Landhaura school',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/roorki/story-umesh-kumar-raises-educational-upgrade-issue-in-khanpur-assembly-201773320275913.html',
    date: '2026-03-12',
    note: 'Credit capped — uchchikaran ki swikriti sarkar/shiksha vibhag ki hai; MLA Umesh Kumar ne Vidhan Sabha satra me sawal uthakar ye jawaab liya tha; fund disclosed nahi.',
    period: '2022-2027',
  },
  {
    title: 'Kunwar Pranav Singh Champion ke saath golee-chalan jhagde me MLA Umesh Kumar giraftar, BNS dharayon me case; CJM court se jamanat mili',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/dehradun/ex-bjp-mla-sent-to-judicial-custody-after-clash-with-successor/articleshow/117610479.cms',
    date: '2025-01-27',
    note: '26 Jan 2025 ko poorv MLA Champion ne Kumar ke camp office par firing ki; Kumar mauqe par maujood nahi the, baad me bandook lekar pahunche aur jawabee hamla kiya; Champion ki patni ki complaint par Roorkee police ne Kumar ko giraftar kiya aur BNS 191(3) samet rioting dharayon me charge kiya; CJM se jamanat par riha; dono pakshon ke hathiyar license radd kiye gaye; koi dosh-siddhi nahi — aage ka court nateeja report me nahi. MLA ki seedhi pratikriya TOI report me shamil nahi hai — anupasthiti disclosed hai.',
    period: '2022-2027',
  },
];

uttarakhandWorks['qazi-mohammad-nizamuddin'] = [
  {
    title: 'MLA ka dawa — Manglaur kshetra me do inter college ke liye nayi zameen unke prayason se allotted hui, nirmaan karya jald shuru hoga',
    category: 'School',
    badge: 'dawa',
    sourceLabel: 'Hindustan (HT Syndication reprint)',
    sourceUrl: 'https://www.htsyndication.com/hindustan-delhi/article/%E0%A4%AE%E0%A4%82%E0%A4%97%E0%A4%B2%E0%A5%8C%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%95%E0%A4%BE-%E0%A4%95%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%BE-%E0%A4%9C%E0%A4%BE%E0%A4%AF%E0%A4%97%E0%A4%BE-%E0%A4%9A%E0%A4%B9%E0%A5%81%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%80-%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B8%3A-%E0%A4%A8%E0%A4%BF%E0%A4%9C%E0%A4%BE%E0%A4%AE%E0%A5%81%E0%A4%A6%E0%A5%8D%E0%A4%A6%E0%A5%80%E0%A4%A8/86802223?request_locale=hn',
    date: '2024-12-17',
    note: 'MLA ka dawa — do inter college ki zameen unke prayason se allotted hone ka dawa; bhoomika "pahal" tak capped; fund undisclosed. Ekmatra aadhaar: virodhi MLA ki press-meet (17 Dec 2024, HT Syndication reprint — original livehindustan page search me nahi mila, isliye whitelist me HT Syndication ko Hindustan ke reprint ke roop me rakha gaya hai).',
    period: '2022-2027',
  },
  {
    title: 'MLA ka dawa — Manglaur me 33 KVA bijli ghar ki swikriti unke prayason se dilayi gayi',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Hindustan (HT Syndication reprint)',
    sourceUrl: 'https://www.htsyndication.com/hindustan-delhi/article/%E0%A4%AE%E0%A4%82%E0%A4%97%E0%A4%B2%E0%A5%8C%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%95%E0%A4%BE-%E0%A4%95%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%BE-%E0%A4%9C%E0%A4%BE%E0%A4%AF%E0%A4%97%E0%A4%BE-%E0%A4%9A%E0%A4%B9%E0%A5%81%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%80-%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B8%3A-%E0%A4%A8%E0%A4%BF%E0%A4%9C%E0%A4%BE%E0%A4%AE%E0%A5%81%E0%A4%A6%E0%A5%8D%E0%A4%A6%E0%A5%80%E0%A4%A8/86802223?request_locale=hn',
    date: '2024-12-17',
    note: 'MLA ka dawa — 33 KVA bijli ghar ki swikriti unke prayason se dilayi jaane ka dawa; bhoomika "pahal" tak capped; fund undisclosed. Ekmatra aadhaar: virodhi MLA ki press-meet (17 Dec 2024, HT Syndication reprint).',
    period: '2022-2027',
  },
  {
    title: 'MLA ka dawa — Manglaur roadways parisar ka jeernodhar unke prastav par kiya ja raha hai',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Hindustan (HT Syndication reprint)',
    sourceUrl: 'https://www.htsyndication.com/hindustan-delhi/article/%E0%A4%AE%E0%A4%82%E0%A4%97%E0%A4%B2%E0%A5%8C%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%95%E0%A4%BE-%E0%A4%95%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%BE-%E0%A4%9C%E0%A4%BE%E0%A4%AF%E0%A4%97%E0%A4%BE-%E0%A4%9A%E0%A4%B9%E0%A5%81%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%80-%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B8%3A-%E0%A4%A8%E0%A4%BF%E0%A4%9C%E0%A4%BE%E0%A4%AE%E0%A5%81%E0%A4%A6%E0%A5%8D%E0%A4%A6%E0%A5%80%E0%A4%A8/86802223?request_locale=hn',
    date: '2024-12-17',
    note: 'MLA ka dawa — roadways parisar ka jeernodhar unke prastav par hone ka dawa; bhoomika "pahal" tak capped; fund undisclosed. Ekmatra aadhaar: virodhi MLA ki press-meet (17 Dec 2024, HT Syndication reprint).',
    period: '2022-2027',
  },
];

uttarakhandWorks['shahzad'] = [];

uttarakhandWorks['anupama-rawat'] = [];

// ---- REJECT-LOG (Haridwar district 7/13 — consolidated) ----
// adesh-chauhan: pioneeredge (CM prog maujoodgi) reject; garhwalpost Amit-Shah-bete-fraud (wo peedit, kaam nahi); YouTube items reject; Tribune 2017 pre-term maujoodgi reject; non-whitelist conviction mirrors reject (IE whitelist source raha).
// ravi-bahadur: karmtimes Jaswala Rs 1cr + Budhwashaheed Rs 65L (non-whitelist); bahadrabadnews Rs 30L (non-whitelist); sauhardsandesh Pathri-Puranpur Rs 96L (non-whitelist); 2020 Yuva-Congress mukadma pre-term (negative nahi); toll-plaza dharna (virodh, kaam nahi); Gairsain Congress prashn (koi nateeja nahi); Baba Ramdev virodh 2019 pre-term.
// mamta-rakesh: elevated bridge DM-varta (sirf maang); Sirchandi health camp (rahat camp class); Rs 2.90cr talab saundaryikaran + Shahpur sadak + interlocking tiles (national24x7 non-whitelist); BD Inter College Vidhayak Nidhi tin shed (tahelkanews non-whitelist); private Sai Hospital (private event); ETV polling-day dharna (negative bar fail); PMAY aarop (unse aaropi nahi — unhone aarop lagaya tha).
// virendra-kumar: Teachers felicitation (chief guest only); sugarcane protest (virodh, kaam nahi); Roorkeehub 2019-20 delegation (pre-term + sirf maang); Union-minister Virendra Kumar namesake (exclude); Bihar Virendra Singh namesake (exclude); VIP News YouTube (retry lead).
// furkan-ahmad: Garhwal Post son-ruckus (parivar ka mamla, FIR nahi); 2021 meeting pre-term; SIR/newslaundry (kaam nahi); MyNeta 2020 COVID cases pre-term (negative nahi); HT 15-MLA suspension 2023 (group protest, negative bar fail).
// pradeep-batra: bus stand shilanyas (mantri-vibhagiya faisla); cold-milling ghoshna (ghoshna-class); karmtimes Solanipuram (non-whitelist, retry lead); 100 school bags (daan); mask fine 2021 pre-term; HC demolition SC stay 2020-21 pre-term; sister property aarop (parivar + non-whitelist); IIT events (maujoodgi).
// umesh-kumar: ETV Bharat 4-saal dawa press-meet (source + dawa); garhwalkipeeda Govardhanpur (non-whitelist + dusre neta ka udghatan); 30 Sep 2026 Govardhanpur shilanyas (pre-event); 2022 election petition (chunav-yachika akele negative nahi); Harish Rawat slugfest (bayan-bazi); Amroha farmhouse (aaropi nahi); bhagirath pratima (non-whitelist).
// qazi-mohammad-nizamuddin: "paanch crore sadkon ka jaal" (ghoshna); ETV RTI 76% (non-whitelist + predecessor tenure mix); devbhoomimedia 64 karya (purana karyakaal); ThePrint victory-process stone-pelting (aaropi nahi); subkuz death threats (victim, aaropi nahi); TOI CHC patient row (koi FIR/aarop nahi); SIR allegations (raajnaitik aarop); Ankita protest (raajnaitik).
// shahzad: Paithal Bujurg Rs 60L + Mohammadpur Bujurg + Bhikampur-Jeetpur Rs 22L + Sultanpur-Bhuwapur Rs 55L + Niranjanpur-Kankar Khata (sab non-whitelist, retry leads); NH-334A bypass patra (sirf maang); OBC scholarship patra (sirf maang); dargahpur Vidhayak Nidhi janch (show-cause adhikariyon par — MLA aaropi nahi, negative bar fail).
// anupama-rawat: Ravasan bridge janjagaran yatra (sirf maang, YouTube); smart-city/assembly prashn (koi nateeja nahi); district plan baithak (dusre neta ka karyakram); 2022 election coverage (pre-term era news).
// madan-kaushik: Jwalapur college solar handpump (seat-boundary risk — retry lead); Mukhiya Gali/ward drains/Kadachh (non-whitelist, retry leads); corridor/heritage-city ashwasan (whitelist coverage nahi); UG cabling 2021 (pre-term + maujoodgi); panchayat secretariats (mantri-vibhagiya); NDTV fraud case (aaropi nahi); land-grab aarop (sirf aarop, non-whitelist); library PIL (paksh me faisla).

// ---- Pithoragarh district batch (researched 2026-10-17) ----

uttarakhandWorks['vishan-singh'] = [
  {
    title: 'Vidhayak Vishan Singh ne Didihat CHC ko vidhayak nidhi se ambulance pradan ki (Jan 2026)',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pithoragarh/chc-got-ambulance-from-mla-fund-pithoragarh-news-c-230-1-pth1019-137349-2026-01-21',
    date: '2026-01-21',
    stage: 'poora-kaam',
    note: 'Amar Ujala ki 21 Jan 2026 ki post-event report ke mutabik Didihat ke MLA Vishan Singh ne apni Vidhayak Nidhi se Community Health Centre, Didihat ko ek ambulance saunpi; ab higher-center referral wale mareezon ko intezaar nahi karna padega. Disclosure: Amar Ujala ki 8 Feb 2026 ki follow-up report me block pramukh Narendra Singh Dhami ne aarop lagaya ki isi ambulance ka kiraya vasool ja raha hai; vidhayak ne sarkari niyamon ke anusaar istemaal ka dawa kiya — bina FIR/adhikarik janch ke, isliye ispar negative entry nahi banayi, sirf disclosure. (Media me naam Vishan/Bishan Singh Chufal/Chuphal bhi likha milta hai — Didihat seat se pehchan pakki hai.)',
    period: '2022-2027',
  },
];

uttarakhandWorks['harish-singh-dhami'] = [];

uttarakhandWorks['fakeer-ram'] = [];

uttarakhandWorks['mayukh-mahar'] = [
  {
    title: 'Saat din ke dharne ke baad prashasan ne Kwarban tak nayi sadak kaatne ka nirnay liya, PMGSY ne nirmaan shuru kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pithoragarh/construction-of-a-new-road-to-kwarban-begins-mla-and-villagers-lift-the-protest-pithoragarh-news-c-230-1-alm1001-135974-2025-12-16',
    date: '2025-12-16',
    stage: 'swikriti',
    note: 'Amar Ujala ki 16 Dec 2025 ki post-event report ke mutabik Beltadi-Kwarban sadak par pul na ban paane ke virodh me Pithoragarh ke MLA Mayukh Mahar ke netritva me saat din tak dharna hua; ADM aur PMGSY ke Executive Engineer dharnsthal pahunche aur Kwarban tak nayi sadak kaatne ka nirnay diya, 6 mahine me sadak poori karne ka lakshya bataya. Credit capped: sadak kaatne ka nirnay aur nirmaan prashasan/PMGSY ka hai — vidhayak ki asal bhoomika dharne ke netritva aur maang uthane tak hai, lekin maang ka dastaveji prashasnik nateeja mila hai. Disclosure: vidhayak ne isi mudde par apni Vidhayak Nidhi se Rs 10 lakh ki ghoshna bhi ki thi — wo bina swikriti-suchi ke ghoshna-class me reject hai.',
    period: '2022-2027',
  },
];

// ---- REJECT-LOG (vishan-singh — Didihat, BJP; researched 2026-10-17) ----
// 1. "Mera gaon meri sadak" lokarpan, Bhaishyudi — 69 lakh MGNREGA CC sadak ka lokarpan. Srot whitelist me nahi (newshomelive.co.in). URL: https://www.newshomelive.co.in/mla-inaugurated-mera-gav-meri-sadak/
// 2. Gairsain budget session maangein (Amar Ujala, 13 Mar 2026) — Didihat jila, Raotis nadi jhulapul, Munakot college maang. Sirf maang/prastav, koi dastaveji nateeja nahi.
// 3. CM Dhami swikritiyan Didihat kshetra me (Sep-Oct 2026) — Bhumidhara-Kumalgaon Rs 74.24L, Bhugaon link road Rs 49.85L, Tapri Ghat-Golmanu Rs 72.63L, Bhautadri CC road Rs 80L aadi. CM ki swikritiyan; MLA ki vyaktigat bhoomika nahi — ghoshna-class reject.
// 4. Chalmodi aapda daura (ETV Bharat, Sep 2025) — srot whitelist me nahi + sirf nirikshan/daura.
// 5. Didihat mini stadium survey (Amar Ujala, 19 Dec 2025) — sirf survey/ghoshna; MLA ki bhoomika report me nahi.
// 6. CM sahakarita mela Pithoragarh (Amar Ujala, 29 Oct 2025) — dusre neta ke karyakram me maujoodgi.
// 7. BJP chunav karyalaya shubharambh Didihat (livehindustan, 15 Mar 2024) — party karyakram, sarkari kaam nahi.
// 8. Ramasa Rs 1.36cr school funds (Amar Ujala, ~Feb 2021) — pre-term + shasanadesh-jaankari class.
// 9. Cricket final puraskar (Amar Ujala, ~2016) — pre-term + samaroh mukhya-atithi.
// 10. India-Nepal Kali nadi pul udghatan (2019) — pre-term.
// 11. Shaheed pratima anavaran Askot (samacharuttarakhandlive.com) — srot whitelist me nahi + samaroh class.
// 12. Nagar palika board meeting (livehindustan, Oct 2026) — palika meeting, MLA kaam nahi.
// NEGATIVE-CHECK: chay-bagan ceiling-land ADC notice (Jun 2023) — sirf chhote portals par; whitelisted coverage mile to negative (retry lead). Block pramukh ke sadak-quality + ambulance-kiraya aarop — bina FIR/janch, jawab record par, reject. Halafname ke 2 purane mamle — Mar 2022+ me koi legal development nahi.

// ---- REJECT-LOG (harish-singh-dhami — Dharchula, INC; researched 2026-10-17) ----
// 1. Jauljibi mele (Nov 2025) me CM ke saamne aarop — 50-60 CM-ghoshna yojnaon ka Rs 10L me nipatara; sirf aarop/maang, koi nateeja nahi (Amar Ujala video).
// 2. 34 karyon (2012-2025) ki CBI janch ki maang (Nov 2025) — sirf janch-maang, koi swikriti/vitaran-list nahi.
// 3. Assembly winter session me disaster compensation ki maang (Nov 2022) — sirf maang; aapda-package par shrey banned (HT).
// 4. Baluakot-Tawaghat seema-sadak par visfotak-aarop (Jan 2023) — aarop/maang, kendriya seema-sadak class (latestly).
// 5. Vishesh satra me teacher/PHC mudde + Gunji zameen virodh — sirf prashn/maang, koi mantri-ashwasan/nateeja nahi.
// 6. Jauljibi Mela 2024 — CM ne Rs 64.47cr ki 18 yojnaon ka lokarpan/shilanyas kiya; MLA sirf manch par upasthit (dusre neta ka karyakram).
// 7. Kali nadi motor pul shilanyas — CM ne kiya; kendriya seema-pul; MLA maujoodgi matra.
// 8. Samkot mobile tower (2019 Vidhayak Nidhi, Rs 30L) — non-whitelist + pre-term.
// 9. Rs 65.10cr yojnaon ka shilanyas (Amar Ujala, ~2013-era) — pre-term.
// 10. Vidhayak Nidhi payment par CDO takraar (2017-era) — pre-term + vivad, kaam nahi.
// 11. Covid-2nd wave me Rs 2cr Vidhayak Nidhi elaan (May 2021) — pre-term + daan/rahat class.
// 12. Aapda-kshetra ke liye Rs 10L Vidhayak Nidhi (Sep 2021) — pre-term + aapda class.
// 13. 2027 independent ladne ki dhamki / BJP-join rumors (Apr 2022) — rajneeti khabar, kaam nahi.
// 14. Adi Kailash sewerline aalochna (Nov 2025) — sirf aarop/maang, non-whitelist.
// 15. Dharchula communal tension (Mar 2024) — MLA khud aaropi nahi (shanti ki maang ki); Garhwal Post bhi non-whitelist.
// 16. Purva sainikon ka dharna-samarthan (2026) — samarthan matra; non-whitelist.
// NEGATIVE-CHECK: halafname ka purana IPC 332/504 (2007 Munisyari clash) — Mar 2022+ me koi legal development nahi; Mar 2024 tension me aaropi nahi. Koi negative nahi bana.

// ---- REJECT-LOG (fakeer-ram — Gangolihat (SC), BJP; researched 2026-10-17) ----
// 1. TOI "Migration crisis deepens in Pithoragarh village" — Pabhya gaon PMGSY road approved ka MLA bayan. Sirf dawa/statement, koi lokarpan/swikriti-suchi nahi.
// 2. CM Dhami Rs 61.98cr works lokarpan Pithoragarh + Chandak-Gangolihat motor bridge Rs 15.30cr swikriti — garhwalpost (non-whitelist) + CM ghoshna-class; MLA ka vyaktigat lokarpan nahi.
// 3. CM ki PMGSY review meeting me virtual maujoodgi — sirf maujoodgi (garhwalpost, non-whitelist).
// 4. YouTube videos (ex-MLA aarop, Chaukori bhoomi-haq, 2027 chunavi interview) — aggregator class; sarkar ka paksh-rakhna kaam nahi.
// 5. ETV Bharat profile — bete puncture shop; vyaktitv-profile, kaam nahi; non-whitelist.
// 6. DNA headline "BJP MLA booked for thrashing Dalit women" — aaropi ki pehchan verify nahi (headline me naam nahi); DNA non-whitelist; negative rules fail — reject.
// NEGATIVE-CHECK: koi FIR/na am-daar-adhikari-pusht janch Mar 2022+ me nahi mili. Retry-leads: outlet-internal search (Amar Ujala/Jagran/Hindustan site-search), TOI Pabhya-road follow-up, Vidhayak Nidhi itemized lists.

// ---- REJECT-LOG (mayukh-mahar — Pithoragarh, INC; researched 2026-10-17) ----
// 1. Kwarban pul-maang par Vidhayak Nidhi se Rs 10L ghoshna (Dec 2025) — sirf ghoshna, swikriti-suchi nahi.
// 2. Jhaulakhet mele me Bunkot-Baltadi shamshan marg ke liye Rs 5L ghoshna (Dec 2025) — sirf ghoshna.
// 3. Upartola daura — nirikshan + dhan-awantan ki moukhik baat; itemized swikriti nahi.
// 4. Nov 2023 dharna (6-sutri maangein) — sirf maang; CM-phone-ashwasan wala tukda non-whitelist.
// 5. Panchreshwar me naav + 6 life jacket daan (Feb 2026) — vyaktigat daan class.
// 6. Dyudi-Bhanar motor marg Rs 1.51cr swikriti — pre-term (~2016).
// 7. 2012-13 tenure ki teen kahaniyan (Rs 65.10cr shilanyas aadi) — sab pre-term.
// 8. PM Modi dwara Rs 4200cr pariyojnaon ka lokarpan (Oct 2023, PIB) — kendriya pariyojnaen, dusre neta ka karyakram.
// 9. CM Dhami Rs 165cr pariyojnaen (May 2026) — CM ke kaam; srot bhi non-whitelist (ETV Bharat).
// 10. BJP mahila morcha putla dahan (May 2026) — bina FIR bayan-bazi; non-whitelist.
// 11. Shaheed dwar udghatan samaroh — non-whitelist srot + samaroh class.
// 12. Whatsapp gali-galauj message jaanch (Amar Ujala, ~2015) — vidhayak shikayatkar paksh (aaropi nahi) + pre-term.
// NEGATIVE-CHECK: "Shamsher Singh Mahar" giraftari — namesake, vidhayak nahi. Party-anushasan notice — non-whitelist + bina FIR. Jan 2025 mayoral vivaad — party-vivad, negative class nahi. Koi negative nahi bana.

// ---- Bageshwar district batch (researched 2026-10-17) ----
uttarakhandWorks['parwati-dass'] = [
  {
    title: 'MLA Parwati Dass ne rajya yojana ke tahat Nadigaon tak aadhe km sadak ke nirman-karya ka shubharambh kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/bageshwar/story-half-kilometer-road-construction-in-nadigaon-under-state-scheme-costing-8-3-crores-201761907723029.html',
    date: '2025-10-31',
    note: 'Fund: rajya yojana, Rs 8.30 crore — aadhe km sadak + 2 m chaudi, 14 m unchi RCC retaining wall; Gomti pul ke paas karyakram. MLA ne swayam puja-archana ke baad nirman-karya ka shubharambh kiya (Kapkot MLA Suresh Gariya aadi maujood the). Bhoomika: vyaktigat shubharambh/shilanyas; sadak ki swikriti shasan star ki hai, article me ise Vidhayak Nidhi se nahi joda gaya.',
    period: '2022-2027'
  },
  {
    title: 'MLA Parwati Dass ne Bageshwar ke Venimadhav ward me numaish maidan ke paas bane naye children park ka vidhivat lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/uttarakhand/bageshwar/news/inauguration-of-childrens-park-in-bageshwar-136928467.html',
    date: '2026-01-13',
    note: 'Fund: Nagar Palika Bageshwar ki apni pehal — article ke mutabiq park nagar palika ne banwaya (adhyaksh Suresh Khetwal ka bayan); Vidhayak Nidhi se jodne ka koi zikr nahi. MLA ki asal bhoomika: keval vidhivat lokarpan; unhone nagar palika ki pehal ki sarahna ki. Credit capped: nirmaan nagar palika ka, MLA ka yogdaan lokarpan tak. Date andaza hai — article page par date nahi dikhi, search index ke aadhaar par lagbhag Jan 2026.',
    period: '2022-2027'
  }
];
uttarakhandWorks['suresh-gariya'] = [
  {
    title: 'Kapkot ke Anarsa gaon me Rs 1.34 crore ki lift-sinchai yojana ka lokarpan — Anarsa, San aur Harsila ke kisano ko milega laabh (jila yojana fund)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/bageshwar/story-farmers-in-kapkot-benefit-from-new-lift-irrigation-scheme-201780398043812.html',
    date: '2026-06-02',
    note: 'Rs 1.34 crore ki lift-sinchai yojana Anarsa, San aur Harsila gaonon ko seenchai degi; fund-srot article ke mutabiq jila yojana; MLA Suresh Gariya ne Anarsa gram panchayat karyakram me lokarpan kiya. Date andaza hai — article page par printed date nahi thi, search-crawl timing aur Tuesday-event hawale se li gayi. Credit capped: sarkari yojana ka udghatan, yojana-design ya fund ka shrey MLA ko nahi.',
    period: '2022-2027'
  },
  {
    title: 'Karuli Band se Gajli-Bijoriya tak Rs 1.67 crore ki motor sadak ka puja-archana ke saath karya-aarambh (rajya yojana)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/bageshwar/story-road-to-be-constructed-in-bageshwar-at-a-cost-of-rs-1-67-crore-201780484060852.html',
    date: '2026-06-03',
    note: 'Rs 1,67,47,000 ki Karuli Band se Gajli-Bijoriya motor sadak; fund rajya yojana; MLA ne puja-archana karke nirman-karya shuru karaya, ise varshon purani maang ka poora hona bataya. Date andaza hai — article page par printed date nahi thi, search-crawl timing se li gayi. Credit capped: PWD/rajya yojana ka kaam, MLA ne shubharambh kiya.',
    period: '2022-2027'
  },
  {
    title: 'Devendra ke Bharadi taxi stand par Rs 4.88 lakh ki lagat se bani nayi police chowki ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/bageshwar/story-new-police-post-inaugurated-at-bharadi-taxi-stand-to-enhance-security-201786615190160.html',
    date: '2026-08-13',
    note: 'Devendra (Kapkot) ke Bharadi taxi stand par nayi bani police chowki ka lokarpan MLA Suresh Gariya ne kiya; unhone taxi drivers ki samasyaon par baithak bhi ki. Article me fund-srot ka ullekh nahi — disclosed. Credit capped: MLA ne lokarpan kiya, nirman agency/fund undisclosed.',
    period: '2022-2027'
  },
  {
    title: 'Rajkiya Inter College Kapkot ke Rs 3.02 crore ke naye bhawan ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/bageshwar/story-inauguration-of-new-educational-building-at-rajkiya-inter-college-kapkot-by-mla-suresh-gadiya-201770462652441.html',
    date: '2026-02-07',
    note: 'Rajkiya Inter College Kapkot ke Rs 3,02,62,000 ke naye bhawan ka lokarpan MLA ne kiya; block pramukh, BEO aur school staff maujood the. Article me fund-srot ka ullekh nahi — disclosed. Credit capped: sarkari school bhawan ka shubharambh, nirman fund undisclosed.',
    period: '2022-2027'
  },
  {
    title: 'Kapkot me Shri Ram Mandir parisar ke vikas ka shilanyas — Rs 30 lakh, jila yojana se',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/bageshwar/story-development-of-shri-ram-temple-site-in-kapkot-with-30-lakh-investment-201765621307586.html',
    date: '2025-12-13',
    note: 'Kapkot me Shri Ram Mandir parisar ke vikas ke liye Rs 30 lakh; fund jila yojana; MLA ne bhoomi pujan ke saath shilanyas kiya. Credit capped: jila yojana ka kaam; dhaarmik sthal par sarkari vikas-nidhi ka upyog disclose kiya gaya hai.',
    period: '2022-2027'
  },
  {
    title: 'MLA ke apne gaon Seema me Ajenti Bubu mandir ka shilanyas — Rs 97.20 lakh, tourism vibhag ne CM ki ghoshna par jari kiye',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/bageshwar/story-construction-of-grand-bubu-temple-in-suresh-gadiya-s-village-with-97-20-lakhs-funding-201764328056070.html',
    date: '2025-11-28',
    note: 'MLA ke apne gaon Seema me Rs 97.20 lakh ka Ajenti Bubu mandir; CM Dhami ki ghoshna ke baad tourism vibhag ne fund jari kiya; MLA ne puja-archana ke saath shilanyas kiya; Harsila-se-gaanv sadak ki tarring ki ghoshna bhi hui. Credit capped: tourism dept/CM-ghoshna ka fund, MLA ne shilanyas kiya.',
    period: '2022-2027'
  }
];
// ---- REJECT-LOG (parwati-dass, Bageshwar SC) ----
// 1. Indoor stadium, Victor Mohan Joshi Inter College (Hindustan, 8 Nov 2025) — sirf ghoshna: Yuva Kalyan vibhag se Rs 475.04 lakh vittiya swikriti ki MLA dwara jaankari, koi vyaktigat shilanyas/lokarpan nahi. Srot: https://www.livehindustan.com/uttarakhand/bageshwar/story-uttarakhand-government-initiates-construction-of-modern-indoor-stadium-in-bageshwar-201762600356217.html
// 2. Garud-Bageshwar motor marg sudharikaran Rs 4.34 crore (Hindustan, 26 Nov 2025) — sirf ghoshna: MLA "ne bataya" Manaskhand yojana me 17.425 km marg ka kaam hoga, koi shubharambh nahi. Srot: https://www.livehindustan.com/uttarakhand/bageshwar/story-bageshwar-motorway-improvement-4-34-crore-for-garud-bageshwar-road-201764135822206.html
// 3. Shantabazar-Mathkhal-Tallidoba motor marg shilanyas Rs 78.90 lakh (Dainik Bhaskar, ~May 2026) — bhoomi poojan rajyamantri Shiv Singh Bisht ne kiya; CM-ghoshna project; MLA keval boli. Srot: https://www.bhaskar.com/local/uttarakhand/bageshwar/news/shantabazar-mathkhal-motor-road-inauguration-bageshwar-137909620.html
// 4. CT scan machine, jila aspatal Bageshwar (June 2024) — lokarpan swasthya mantri Dhan Singh Rawat ne (virtual) kiya; MLA keval maujood; pati ke karyakaal ka credit diya — maujoodgi + non-whitelisted sources.
// 5. Anandi Academy AI smart classrooms / science lab (devbhoomikhabarnetwork, ~Sep 2025) — private school samaroh, mukhya-atithi ceremonial + non-whitelisted.
// 6. Khel Mahakumbh / Vidhayak championship trophy (Hindustan, ~Sep 2026) — Rs 1 lakh cheque + trophy prize-distribution samaroh; koi sarkari kaam ka lokarpan nahi.
// 7. Rajya stariya taekwondo pratiyogita udghatan (Bhaskar, ~Jan 2026) — deep-prajwalan se tournament shubharambh; ceremonial.
// 8. Uttarayani mela volleyball pratiyogita udghatan (Hindustan, 14 Jan 2026) — khel pratiyogita shubharambh; ceremonial.
// 9. Kafaligair rajkiya mahavidyalaya 18 pad swikriti (Jagran, 28 Sep 2026) — shasanadesh ki jaankari; MLA ne keval CM/uchch shiksha mantri ka aabhaar jataya; sarkari-order info only.
// 10. Paldi Chhina-Karalapani-Kangad Chhina marg vistaar maang (Hindustan, ~Jun 2026) — poorv sainik/BDC ka gyapan; MLA ki purani ghoshna ka hawala; sirf maang.
// 11. Rahul Gandhi/Doval tippani press-varta (Hindustan, ~Oct 2026) — raajnaitik bayan; kaam nahi.
// 12. BDC baithak (Hindustan, 16 Dec 2025) — sanyukt deep-prajwalan + sameeksha baithak; nirikshan/baithak only.
// 13. Bal vigyan mahotsav (Amar Ujala, 9 Oct 2026) — CM ne shubharambh kiya; MLA keval maujood.
// 14. Kapkot me CM dwara 37 yojnaon ka lokarpan/shilanyas (rainbownews, Jan 2024) — CM ka karyakram; MLA maujood + non-whitelisted.
// 15. TB JOSH karyakram (devbhoomikhabarnetwork, Oct 2026) — mukhya-atithi ceremonial + non-whitelisted.
// 16. Rashtriya Balika Diwas puraskar (etvbharat, Jan 2024) — samman samaroh + non-whitelisted.
// 17. MLA ki tabiyat/airlift (kurmanchalnews/etvbharat, June 2024) — vyaktigat swasthya khabar; kaam nahi + non-whitelisted.
// 18. Bageshwar nagriya peyjal yojana Rs 68.63 crore tender (devbhoomikhabarnetwork etc, Oct 2026) — tender stage; MLA ne keval CM ka aabhaar; non-whitelisted + ghoshna/info only.
// 19. Vidhayak Nidhi kharch % reports (memoirspublishing Jan 2024 / samacharuttarakhand) — kul aankde, itemized soochi nahi; non-whitelisted.
// 20. CM sameeksha baithak (aapkimedia/lokmattimes) — MLA maujood + non-whitelisted.
// 21. PWD van-bhoomi prastav baithak (khabribox) — DM ke nirdesh, prashasnik baithak; non-whitelisted.
// 22. Pati Chandan Ram Dass ke karyakaal ke kaam — sakht niyam ke tahat credit nahi.
// ---- REJECT-LOG (suresh-gariya, Kapkot) ----
// 1. Saneti-Sangad motor road Rs 7.68 crore (Hindustan, Oct 2026) — passive-voice bhoomi pujan ('kiya gaya'), MLA attribution weak; poorv mantri Balwant Bhouriyal bhi manch par. Srot: https://www.livehindustan.com/uttarakhand/bageshwar/story-7-69-crore-saneti-sangaad-road-project-to-boost-rural-connectivity-in-bageshwar-201791975010842.html
// 2. Vivekananda Vidya Mandir Hichauri multi-purpose classroom (Hindustan, May 25 2025) — private Vidya Bharti school ka udghatan; sarkari kaam nahi; fund undisclosed. Srot: https://www.livehindustan.com/uttarakhand/bageshwar/story-inauguration-of-multi-purpose-classroom-at-vivekananda-vidya-mandir-by-mla-suresh-gadiya-201748172271462.amp.html
// 3. Darimkhet-Kanyalikot road Rs 1.56 crore swikriti (Hindustan) — sirf swikriti ki jaankari, MLA ne sirf bataya. Srot: https://www.livehindustan.com/uttarakhand/bageshwar/story-road-construction-approved-for-connectivity-in-kapkot-assembly-201782220446821.html
// 4. Kalanaband-Pant Kwairali muawza Rs 1.02 crore swikriti (Hindustan) — sirf swikriti ki jaankari. Srot: https://www.livehindustan.com/uttarakhand/bageshwar/story-government-approves-funds-for-road-construction-compensation-in-kapkot-assembly-201771325813676.html
// 5. Gauli Amar Gaushala Kanda udghatan (Oct 15 2026) — uttarakhandnewsvaani.com; non-whitelisted portal.
// 6. Dooni-Sukunda road shilanyas Rs 1.80 crore (graminvarta.com, ~Oct 2023) — non-whitelisted; RETRY-LEAD: whitelisted version.
// 7. Ankita murder case: Congress ne putla fukka (Hindustan, Dec 29 2025) — raajnaitik aarop (aaropi ko birthday wishes), MLA par FIR/official janch nahi; negative criteria fail. Srot: https://www.livehindustan.com/uttarakhand/bageshwar/story-congress-protests-birthday-wishes-for-accused-in-ankita-murder-case-201767003196749.html
// 8. Katyur mahotsav vivadit bayan + maafi (Hindustan, ~Apr 2026) — raajnaitik vivad, maafi maangi; FIR nahi; negative criteria fail. Srot: https://www.livehindustan.com/uttarakhand/bageshwar/story-controversy-over-mla-suresh-gadiya-s-statement-sparks-political-tension-in-kapkot-201775559950967.html
// 9. YouTube short 'aaropon par safai' — YouTube non-whitelisted.
// 10. TOI: Kapkot roads washed out (Jun 2024) — MLA sirf rahat-samanvay par quoted; koi vyaktigat kaam nahi.
// 11. Amar Ujala: disaster-preparedness review meeting (Jun 3 2025) — nirikshan-type baithak, koi dastaveji nateeja nahi.
// 12. Amar Ujala: Karmi-Toli road naamkaran after Hayat Singh Gadhiya (Jan 2 2026) — sarkari naming decision; MLA ne sirf jaankari di.
// 13. Garhwal Post: CM Dhami event — non-whitelisted + dusre neta ke karyakram me maujoodgi.
// 14. janjwar.com 2022 ticket-resignation story — non-whitelisted + pre-term politics; 'Sher Singh Garhia' alag vyakti — naam-bhram se bacha.
// PARENT QA (2026-10-17): Gariya worker ke 6 English titles ko Roman-Hinglish vaakyon me rewrite kiya (file standard ke mutabiq); Parwati Dass ke 2 titles me naam ki spelling foundation se match karke sudhari ('Parwati Das' -> 'Parwati Dass'). Bageshwar batch kul = 8 entries. State total ab 133.

// ---- Almora district batch (researched 2026-10-17) ----

uttarakhandWorks['madan-singh-bisht'] = [
  {
    title: 'Dwarahat ke Bipin Tripathi Kumaon Institute of Technology ke nideshak ke ghar par hangama karne ke aarop me Congress MLA Madan Singh Bisht ke khilaf IPC ki dhara 452, 427, 504 aur 506 ke tahat FIR darj hui',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'NDTV',
    sourceUrl: 'https://www.ndtv.com/india-news/case-against-uttarakhand-congress-mla-madan-singh-bisht-for-creating-chaos-at-college-directors-house-4400294',
    date: '2023-09-18',
    note: 'Nideshak KKS Mer ki shikayat par Dwarahat police ne FIR darj ki (CO Tilak Raj Verma ne pushti ki); MLA par ghar me ghuskar hangama, gaali-galauj aur dhamki ka aarop; nideshak ne apne aur parivar ke liye suraksha bhi maangi. MLA ka jawab: unhone bhi nideshak ke khilaf jawabdi shikayat di (baat-chit me protocol ullanghan ka aarop), press conference me karwai na hone par aamaran anshan aur Vidhansabha me visheshadhikar hanan prastav ki chetavani di. Stage-accurate: ye sirf FIR/booked ka charan hai, doshi sabit hona nahi. 17 Oct 2026 tak is mamle me chargesheet, giraftari, zamaanat ya bari ki koi whitelisted media reporting nahi mili. Pehchan Dwarahat seat se verified (BJP Lalkuan MLA Dr. Mohan Singh Bisht namesake se bacho).',
    period: '2022-2027',
  },
];
// ---- REJECT-LOG (madan-singh-bisht, Dwarahat) ----
// 1. LiveHindustan (~Sep 2026) peyaajal baithak: Rs 1.50 lakh + Rs 50 hazaar dene ki ghoshna — ghoshna-class reject.
// 2. thesundaypost.in interview (~Jan 2026): Rs 4.80cr/saal dawa — non-whitelisted.
// 3. YouTube (Jul 2026): Dhanari gaon road udghatan 2 videos — YouTube-only; RETRY-LEAD: whitelisted coverage.
// 4. ETV Bharat (Jun 2026): protocol bayan, hospital upgradation maang — non-whitelisted + maang.
// 5. Dainik Jagran (Jun 2026): bahuuddeshiya shivir hangama — aarop/maang only.
// 6. Amar Ujala (Nov 2025): Vidhansabha me Chaukhutia up-zila hospital sawal — maang only.
// 7. LiveHindustan (Jan 2026): NHM outsourcing karmiyon ka pratinidhimandal — ashwasan only.
// 8. LiveHindustan (Oct 2025): Chaukhutia andolan FB-post bayan — bayan only.
// 9. LiveHindustan (Nov 2025): 'Dr. Mohan Singh Bisht ne Lalkuan me Rs 3.36 crore ke kaam ka shilanyas/lokarpan kiya' — NAMESAKE (BJP Lalkuan MLA), Dwarahat wale nahi.
// 10. Amar Ujala (2014): 'pachas lakh swikrit' — pre-term (2012-17 karyakaal).
// 11. garhwalikumauniwarta.com: up-nibandhak camp karyalaya udghatan Dwarahat (~Jul 2022) — non-whitelisted; RETRY-LEAD: whitelisted archive.
// 12. ETV Bharat (Feb 2025): Mantri Premchand Agarwal se nokjhok — non-whitelisted + siyasi.
// 13. ETV Bharat (Sep 2023): FIR par BJP ka pradesh-bhar virodh — political fallout, naya legal development nahi.
// 14. uttarakhandlive.news (2021): 'poorv vidhayak' gaon-daura — pre-term + non-whitelisted.
// 15. oneindia.com criminal-cases: '0 case' — 2022 halafname ka purana data, FIR se pehle ka.
// 16. ETV Bharat/raibaartv (Jun 2026): 'apne star par kaam karwaye' dawa — non-whitelisted + aspecific.
// RETRY-LEADS: (a) up-nibandhak camp karyalaya udghatan (Jul 2022) ka whitelisted coverage; (b) Dhanari road udghatan (Jul 2026) ka whitelisted coverage; (c) FIR case ka follow-up (chargesheet/zamaanat/bari); (d) Vidhayak Nidhi 2022-26 itemized suchi.

uttarakhandWorks['mahesh-jeena'] = [
  {
    title: 'MLA Mahesh Jeena ne Bhikiyasain me Bhavani Devi Gram Samuh Pumping Yojana ke punargathan ka shilanyas kiya, swikrit lagat Rs 17.43 crore',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/almora/drinking-water-scheme-one-two-mlas-laid-the-foundation-stone-almora-news-c-8-1-93346-2023-03-26',
    date: '2023-03-26',
    note: 'Fund: rajya sarkar dwara swikrit Rs 17.43 crore, Bhavani Devi Gram Samuh Pumping Yojana punargathan, 34 gaon labhanvit. Shrey vivad disclosed: isi yojana ka shilanyas Ranikhet ke MLA Pramod Nainwal pehle kar chuke the, phir 23 Mar 2023 ko Mahesh Jeena ne Shiv Mandir Bhikiyasain me doosra shilanyas kiya. Shrey double-count nahi; MLA ki vyaktigat bhoomika sirf shilanyas tak.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Vidhayak Nidhi se Jhimar-Bhitakot motor marg se Bhatt Bakhli tak sampark sadak ka nirmaan shuru',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/almora/road-construction-work-started-from-mla-fund-almora-news-c-232-1-ksp1005-121789-2024-12-21',
    date: '2024-12-21',
    note: 'Fund: Vidhayak Nidhi (Amar Ujala reporting ke anusaar is nidhi se kaam shuru). Bhoomika disclosure: shubharambh khud MLA ne nahi, unke pratinidhi aur BJP mandal adhyaksh Sujeet Chaudhary ne karaya. Rashi Amar Ujala ne nahi chhapi. Borderline: vyaktigat shilanyas nahi, lekin Vidhayak Nidhi ka asal vitaran hai isliye shamil.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'MLA Mahesh Jeena ne Champanagar-Dotiyal se Jaspur gaon tak 600 meter sadak ke damarikaran ka shubharambh kiya, lagat Rs 41 lakh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/bageshwar/story-inauguration-of-road-asphalt-work-in-champanagar-by-mla-mahesh-jeena-201764766010507.html',
    date: '2025-12-03',
    note: 'Fund: PWD (Lonivi Pranteey Khand Ranikhet, sahayak abhiyanta Hem Joshi ne lagat batayi). MLA ne vyaktigat shubharambh kiya; yojana/fund rajya sarkar ka hai, vyaktigat shrey sirf udghatan tak.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Dehradun Municipal Commissioner Gaurav Kumar se durvyavhaar ke aarop me MLA Mahesh Jeena par FIR darj',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'NDTV',
    sourceUrl: 'https://www.ndtv.com/india-news/case-against-uttarakhand-bjp-mla-for-misbehaving-with-civic-body-official-5199793',
    date: '2024-03-08',
    note: 'Negative. Aaropi pehchaan verify: Salt (Almora) se BJP MLA Mahesh Jeena, seat match. Kotwali police station me FIR, IPC 147/186/504/506; CM Pushkar Singh Dhami ne Garhwal Commissioner Vinay Shankar Pandey ko 15 din me janch-report ka aadesh diya; IAS association ne ninda ki; 5 March 2024 ka viral video (Dehradun nagar nigam karyalaya me tender ko lekar han-gaama). MLA ka jawab report me shamil: unhone nagar ayukt ko gaali dene se inkaar kiya, kaha Haryana ki company ko tender se rokne ke dastavej maange the, adhikariyon ne unse durvyavhaar kiya. Outcome: janch report, zamaanat, bari ya stay ki khabar whitelisted media me aaj tak nahi mili — anupasthiti disclosed. The Hindu ne bhi 8 Mar 2024 ko wahi khabar chhapi (article67925239).',
    period: '2022-2027',
  },
];
// ---- REJECT-LOG (mahesh-jeena, Salt) ----
// 1. Dainik Bhaskar (~Jul 2026): Guru Gorakhnath mandir anudan ghoshna — Vidhayak Nidhi grant-ghoshna reject (rashi/vivaran article ne khud nahi diya).
// 2. prakritlok.com: Hinaula-Kane Khalpati PMGSY shilanyas (~Aug 2026, 12.4 km, Rs 147.21 lakh) — non-whitelisted; RETRY-LEAD.
// 3. public.app: CHC Salt BPHU bhavan shilanyas (Rs 50 lakh, 2 Jan 2026) — non-whitelisted; RETRY-LEAD.
// 4. allindiatvnews.in: GIC Jhipa nava-nirmit bhavan lokarpan (~Jan 2025) — non-whitelisted; RETRY-LEAD.
// 5. news.webindia123/business-standard/theprint/newsdrum/zeeNews: Dehradun FIR coverage — non-whitelisted (NDTV + The Hindu se entry bani).
// 6. COORDINATOR-DROP: Hindustan Sakarkhola JJM karyakram shubharambh (~Oct 2026) — karyakram-launch ceremonial (EJH-MACS precedent); sirf udghatan, kaam kendriya.
// 7. arunodaytimes.com: 'BJP's Big Bet on Salt' — non-whitelisted + chunaav-atkal.
// 8. newstrack.com: CM ko pahadi utpad bhent — non-whitelisted + shishtachar.
// 9. dainikshubharambhnews.com: adhikari samiksha baithak — non-whitelisted + daura.
// 10. dailynewsuk.in: MLA par hamla (Bhakuja, ~2021) — non-whitelisted + MLA peedit + pre-term.
// 11. YouTube viral video — non-whitelisted; ghatna negative entry me cover.
// 12. TOI oath (2021 by-election) — pre-term.
// 13. bdnindia.com/Hindustan Badaun/Amar Ujala Budaun: Mahesh Chandra Gupta (UP Badaun) — NAMESAKE, alag vyakti.
// COORDINATOR FIX: worker ke NDTV sourceUrl me 'bjp-mmla' typo tha — sahi URL 'bjp-mla' lagaya gaya; worker ke stage 'kaam shuru' ko 'shilanyas' normalize kiya.

uttarakhandWorks['pramod-nainwal'] = [
  {
    title: 'Vidhayak Pramod Nainwal ne apni Vidhayak Nidhi se Ranikhet ke Phaldakot me purva-sainik sangathan ka bhawan banwakar uska udghatan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/almora/story-ex-servicemen-organization-gets-new-office-building-in-ranikhet-201767266529348.html',
    date: '2026-01-01',
    note: 'Fund: Vidhayak Nidhi (article me rashi nahi di gayi). Bhoomika: MLA ne apni nidhi se bhawan banwaya aur vyaktigat roop se udghatan kiya — seedha Vidhayak Nidhi ka asal vitaran. Post-event reporting, page khola aur padha gaya.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Ranikhet ke up-jila aspataal me blood separation unit ka lokarpan Vidhayak Nainwal ne kiya, saath hi aspataal parisar me suraksha deewar aur sampark marg ka shilanyas',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/almora/story-blood-separation-unit-launched-in-ranikhet-hospital-to-save-multiple-lives-201782129664819.html',
    date: '2026-06-22',
    note: 'Fund-srot: article me spasht nahi (sarkari aspataal ki suvidha; Vidhayak Nidhi ka ullekh nahi). Bhoomika: MLA ne vyaktigat roop se blood separation unit ka lokarpan kiya; suraksha deewar/sampark marg ka shilanyas hua (article me kartaa spasht nahi). Date caveat: page par koi date stamp nahi hai; search-index age (~116 din, 2026-10-17 se) se anumaanit. Parent date confirm kare.',
    period: '2022-2027',
    stage: 'shilanyas-evam-lokarpan',
  },
  {
    title: 'Ranikhet me Rs 14 crore ki do PMGSY sadkon (Sauni-Titalikhet Rs 5 crore, Pantkotuli-Gagas Rs 9 crore) ke sudharikaran karyon ka kendriya mantri aur MLA ne milkar shubharambh kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/almora/road-construction-starts-ranikhet-news-c-232-1-alm1005-124871-2025-03-01',
    date: '2025-03-01',
    note: 'Fund: kendriya yojana PMGSY (Rs 5cr + Rs 9cr); kriyanvayan agency PMGSY. Bhoomika capped: shilanyas kendriya mantri Ajay Tamta ne kiya; MLA sanyukt shubharambh me the aur unka dawa hai ki sadkon ka prastav unhone sarkar ko saunpa tha aur CM se varta ki thi — credit yahin tak seemit. Date = article date (2025-03-01), event usi din ya thik pehle.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
];
// ---- REJECT-LOG (pramod-nainwal, Ranikhet) ----
// 1. livehindustan (~Oct 2026): 'Das crore se sanvregi Ranikhet sadken' — shilanyas kendriya mantri Ajay Tamta ne kiya; MLA maujood-matra.
// 2. livehindustan (~Apr 2026): media centre maang + nidhi ashwasan — maang/ghoshna.
// 3. livehindustan (Dec 2025): CM ghoshnaon par press-conference — ghoshna.
// 4. jagran (2025): Bhikiyasain visheshagya doctor ashwasan — daura + ashwasan.
// 5. ETV Bharat: (a) prashasanik bhawan + labour room lokarpan (Mar 2024, Rs 80L); (b) 4.76cr sadak shilanyas (Sep 2023); (c) hospital nirikshan (Sep 2024); (d) kuteer udyog ghoshna (Dec 2022) — non-whitelisted; (a)-(b) RETRY-LEAD.
// 6. devbhoomimaya/prakritlok/nainitalnews24/vaishnavinews/livenainital/ranikhetnews — non-whitelisted; events: dialysis unit (Oct 2026), sadak shilanyas (Sep 2023), shilapatt vivad (Oct 2026), Karchuli school reopening (Apr 2025) — RETRY-LEADS.
// 7. garhwalpost: CM karyakram maujoodgi — dusre neta ka karyakram.
// 8. newscubic/refersms: janta-darbar/birthday — kaam nahi.
// 9. Amar Ujala viral-audio (Apr 2024): Rs 30L thagi audio — MLA peedit paksh, audio apusht, koi FIR/janch nahi; NOT negative.
// 10. jagran (~Apr 2026): bhai ki maut par tahreer, 4 ke khilaf FIR — MLA complainant, parivarik; NOT negative.
// 11. Brother cartridge case (Sep 2024): bhai Satish Nainwal ki giraftari — family matter; NOT negative.
// 12. Horticulture scam/CBI janch — non-whitelisted, MLA aaropi nahi; NOT negative.
// 13. Land-grab aarop (ETV Bharat May 2024) — non-whitelisted, koi FIR nahi; NOT negative.
// COORDINATOR: entry 1 me stage 'lokarpan' joda (purn bhawan ka udghatan); entry 2 me stage 'shilanyas-evam-lokarpan' (sanyukt karyakram, purani precedent).

uttarakhandWorks['rekha-arya'] = [
  {
    title: 'Someshwar seat me Chautia-Nagpani-Deholi Sivali road ka lokarpan kiya — Mantri Rekha Arya ne apni Someshwar seat me district plan ke kaam ka uddghatan kiya',
    category: 'Sadak',
    badge: 'sarkari',
    sourceLabel: 'Akashvani News',
    sourceUrl: 'https://newsonair.gov.in/hi/%e0%a4%ae%e0%a4%82%e0%a4%a4%e0%a5%8d%e0%a4%b0%e0%a5%80-%e0%a4%b0%e0%a5%87%e0%a4%96%e0%a4%be-%e0%a4%86%e0%a4%b0%e0%a5%8d%e0%a4%af%e0%a4%be-%e0%a4%a8%e0%a5%87-%e0%a4%85%e0%a4%b2%e0%a5%8d%e0%a4%ae/',
    date: '2025-04-25',
    note: 'Fund-srot: jila yojana 2024-25, Almora (Vidhayak Nidhi se nahi — strot me ullekh nahi); lagat Rs 8.00 lakh (itemized aankda chhote portal coverage rashtrakilalkar.com ke anusar; Akashvani ne kul "Rs 8 crore se adhik" ke chaar kaam bataye). Asal bhoomika disclosure: Cabinet mantri (Dhami mantrimandal, Mahila evam Bal Vikas portfolio) ne Someshwar vidhayak ke roop me apni seat me vyaktigat lokarpan kiya — mantri-framing disclosed, rajya-stariya vibhagiya faisla nahi. Akashvani report 25 April 2025 ki; karyakram guruvar 24 April 2025 ko hua tha — post-event reporting.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Someshwar seat me Ida-Jairasi motor marg ke setu tak vistaar kaarya ka lokarpan kiya — Mantri Rekha Arya ne apni Someshwar seat me district plan ke kaam ka uddghatan kiya',
    category: 'Sadak',
    badge: 'sarkari',
    sourceLabel: 'Akashvani News',
    sourceUrl: 'https://newsonair.gov.in/hi/%e0%a4%ae%e0%a4%82%e0%a4%a4%e0%a5%8d%e0%a4%b0%e0%a5%80-%e0%a4%b0%e0%a5%87%e0%a4%96%e0%a4%be-%e0%a4%86%e0%a4%b0%e0%a5%8d%e0%a4%af%e0%a4%be-%e0%a4%a8%e0%a5%87-%e0%a4%85%e0%a4%b2%e0%a5%8d%e0%a4%ae/',
    date: '2025-04-25',
    note: 'Fund-srot: jila yojana 2024-25, Almora (Vidhayak Nidhi se nahi); lagat Rs 10.60 lakh (itemized aankda chhote portal coverage ke anusar). Asal bhoomika disclosure: Cabinet mantri (Mahila evam Bal Vikas portfolio) ne Someshwar vidhayak ke roop me apni seat me vyaktigat lokarpan kiya — mantri-framing disclosed.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Someshwar seat me Chautia-Kunlakhet-Bamsyun motor marg ke 5 km punarnirmaan ka shilanyas kiya — Mantri Rekha Arya ne lagbhag Rs 3 crore ki sadak pariyojna ki aadhaarshila rakhi',
    category: 'Sadak',
    badge: 'sarkari',
    sourceLabel: 'Akashvani News',
    sourceUrl: 'https://newsonair.gov.in/hi/%e0%a4%ae%e0%a4%82%e0%a4%a4%e0%a5%8d%e0%a4%b0%e0%a5%80-%e0%a4%b0%e0%a5%87%e0%a4%96%e0%a4%be-%e0%a4%86%e0%a4%b0%e0%a5%8d%e0%a4%af%e0%a4%be-%e0%a4%a8%e0%a5%87-%e0%a4%85%e0%a4%b2%e0%a5%8d%e0%a4%ae/',
    date: '2025-04-25',
    note: 'Fund-srot: rajya yojana (lagbhag Rs 3 crore; itemized Rs 309.16 lakh chhote portal coverage ke anusar); Vidhayak Nidhi se nahi. Asal bhoomika disclosure: Cabinet mantri ne Someshwar vidhayak ke roop me apni seat me vyaktigat shilanyas kiya — mantri-framing disclosed, rajya-stariya vibhagiya faisla nahi. Kuch coverage me yah kaam Ranikhet/Someshwar seema kshetra ka bataya gaya hai; Akashvani ne ise Someshwar seat ke kaamon ki suchi me gina.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Someshwar seat me Sher Vidyapeeth pumping peyjal yojna ke sudridhikaran ka shilanyas kiya — Mantri Rekha Arya ne Rs 4.89 crore ki paani pariyojna ki aadhaarshila rakhi',
    category: 'Paani',
    badge: 'sarkari',
    sourceLabel: 'Akashvani News',
    sourceUrl: 'https://newsonair.gov.in/hi/%e0%a4%ae%e0%a4%82%e0%a4%a4%e0%a5%8d%e0%a4%b0%e0%a5%80-%e0%a4%b0%e0%a5%87%e0%a4%96%e0%a4%be-%e0%a4%86%e0%a4%b0%e0%a5%8d%e0%a4%af%e0%a4%be-%e0%a4%a8%e0%a5%87-%e0%a4%85%e0%a4%b2%e0%a5%8d%e0%a4%ae/',
    date: '2025-04-25',
    note: 'Fund-srot: sarkari yojana (lagat Rs 489.93 lakh — Akashvani: "chaar crore navasi lakh"); Vidhayak Nidhi se nahi. Asal bhoomika disclosure: Cabinet mantri ne Someshwar vidhayak ke roop me apni seat me vyaktigat shilanyas kiya aur adhikariyon ko samay par kaam poora karne ke nirdesh diye — mantri-framing disclosed.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Someshwar seat ke Rait me Rs 97.89 lakh ke mini stadium ka shilanyas kiya — Khel mantri ke roop me Rekha Arya ne apni seat me khel suvidha ki neenv rakhi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan (livehindustan.com)',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/almora/story-cabinet-minister-rekha-arya-inaugurates-mini-stadium-and-x-ray-machine-in-rait-201765983367970.html',
    date: '2025-12-17',
    note: 'Fund-srot: sarkari kharcha, lagat Rs 97.89 lakh (strot: Hindustan). Asal bhoomika disclosure (mantri-niyam): Cabinet mantri ne khel mantri ke roop me apni Someshwar seat ("grih vidhansabha") me vyaktigat shilanyas kiya — seat-kaam hone se valid, rajya-stariya vibhagiya ghoshna nahi; portfolio disclosed. Post-event reporting (budhvar 17 Dec 2025).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Someshwar up jila aspatal me X-ray machine ka lokarpan kiya — Mantri Rekha Arya ne apni seat ke aspatal me navnirmit suvidha ka uddghatan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Hindustan (livehindustan.com)',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/almora/story-cabinet-minister-rekha-arya-inaugurates-mini-stadium-and-x-ray-machine-in-rait-201765983367970.html',
    date: '2025-12-17',
    note: 'Fund-srot: sarkari kharcha (navnirmit up jila aspatal, Someshwar); lagat strot me alag se ullekhit nahi. Asal bhoomika disclosure: Cabinet mantri ne Someshwar vidhayak ke roop me apni seat me vyaktigat lokarpan kiya — mantri-framing disclosed. Post-event reporting (17 Dec 2025).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Someshwar seat ke Kuwali gaon me Aadi Badrinath mandir ke saundaryikaran ka bhoomi-poojan aur shilanyas kiya — Mantri Rekha Arya ne Mandir Mala Mission ke Rs 89.80 lakh ke kaam ki neenv rakhi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan (livehindustan.com)',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/almora/story-rekha-arya-initiates-beautification-of-badrinath-and-pipleshwar-temples-in-kuwali-village-201775909288480.html',
    date: '2026-04-11',
    note: 'Fund-srot: Manaskhand Mandir Mala Mission yojana, swikrit dhanrashi Rs 89.80 lakh (sarkari yojana); Vidhayak Nidhi se nahi. Asal bhoomika disclosure: Cabinet mantri ("Someshwar vidhayak aur mantri") ne apni seat ke Majkhali mandal ke Kuwali gaon me mukhya atithi ke roop me vidhivat bhoomi-poojan/shilanyas kiya — seat-kaam valid, mantri-framing disclosed. Kuwali ka Someshwar seat me hona shakti samachar coverage ("Someshwar vidhansabha kshetra ke Majkhali mandal antargat Kuwali gaon") se confirm. Dainik Bhaskar ne bhi isi karyakram ko "Rs 1.41 crore schemes" ke roop me cover kiya — post-event reporting (shanivar 11 April 2026).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Someshwar seat ke Kuwali gaon me Pipleshwar Mahadev mandir ke saundaryikaran ka bhoomi-poojan aur shilanyas kiya — Mantri Rekha Arya ne Mandir Mala Mission ke Rs 51.41 lakh ke kaam ki neenv rakhi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan (livehindustan.com)',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/almora/story-rekha-arya-initiates-beautification-of-badrinath-and-pipleshwar-temples-in-kuwali-village-201775909288480.html',
    date: '2026-04-11',
    note: 'Fund-srot: Manaskhand Mandir Mala Mission yojana, swikrit dhanrashi Rs 51.41 lakh (sarkari yojana); Vidhayak Nidhi se nahi. Asal bhoomika disclosure: Cabinet mantri ne Someshwar vidhayak ke roop me apni seat me vyaktigat bhoomi-poojan/shilanyas kiya — mantri-framing disclosed. Post-event reporting (11 April 2026).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
];
// ---- REJECT-LOG (rekha-arya, Someshwar SC) ----
// 1. Garhwal Post (Feb 2025): GIC Silor Mahadev mini stadium + Dwarson-Kakdighat road (Rs 403.19L) + Kakdighat-Shitalakhet road (Rs 321.81L) udghatan — non-whitelisted; RETRY-LEAD.
// 2-6. janswar/garhwalkavikas/aakhriaankh/bharat-kesari/khabaruttarakhand (Dec 2025): Rait stadium + X-ray — non-whitelisted; event Hindustan se entry me.
// 7. rashtrakilalkar.com/uttarakhand.news/uttarakhand24.in (Apr 2025): 8-crore kaamon ka itemized vivaran — non-whitelisted; event Akashvani se grounded, aankde note me attributed.
// 8. uttarakhandjagran.in (Aug 2026): Jan Milan Vidhayak Nidhi sahyog GHOSHNA — non-whitelisted + ghoshna.
// 9. gauravnews.in (Nov 2025): sinchai Rs 90L 'swikriti' + Nidhi GHOSHNA — non-whitelisted + ghoshna.
// 10. mukhyadhara.in (~Aug 2026): kul Rs 25.5L Nidhi elaan — non-whitelisted + ghoshna.
// 11. Outlook/thenewsmill/uknationnews (Oct 2026): pati Girdhari Lal Sahu ke khilaf FIR — MLA SHIKAYATKARTA (aaropi nahi) + parivarik; negative reject.
// 12. YouTube: 'kya Rekha Arya dilayengi hat-trick' — non-whitelisted + electoral commentary.
// COORDINATOR: 4 Akashvani entries ka sourceUrl browser.open se verify kiya (25 Apr 2025 article, chaaron kaam cover); 2 mandir entries ka stage 'shilanyas-bhoomi pujan' se 'shilanyas' normalize kiya.

uttarakhandWorks['manoj-tewari'] = [];
// ---- REJECT-LOG (manoj-tewari, Almora) ----
// 1. nayaadhyay/uttranews/himshikharexpress: Rs 8.10cr PMGSY sadak shilanyas (Oct 2026) — non-whitelisted + shilanyas kendriya mantri Ajay Tamta ne kiya, MLA maujood-matra.
// 2. ncsm.gov.in (Mar 2024): Manaskhand Science Centre virtual lokarpan — CM ne kiya; MLA 'august presence' maujood-matra.
// 3. Hindustan (Dec 2025): Salla gaon Rs 4L peyjal tank ghoshna — Vidhayak Nidhi grant-ghoshna reject.
// 4. Hindustan (Dec 2025): sadak nidhi swikriti ghoshna (Rs 65.85L/116.13L/76.69L) — shasanadesh-info + ghoshna.
// 5. livehindustan (Dec 2024): NTD-Dhar Tooni sadak PIL + avmaanna yachika — advocacy, poora kaam nahi.
// 6. Amar Ujala (Oct 2026): Ankita Bhandari mombatti march — political protest.
// 7. Amar Ujala (Oct 2026): Sanskrit pratiyogita mukhya atithi — samaroh.
// 8. Garhwal Post (Jan 2026): AICC UP Sangathan Srijan Abhiyan nirikshak — party kaam.
// 9. ETV Bharat (Sep 2024): PWD dharna — andolan + non-whitelisted.
// 10. New Indian Express (Feb 2025): 'Hills vs Plains' Rule 58 bahas — maang, nateeja nahi.
// 11. Amar Ujala (2012-13): purane Vidhayak Nidhi items — pre-term.
// 12. Tribune (2009/2012/2017) — pre-term.
// 13. uttranews/nayaadhyay (Oct 2025/26): Dussehra mukhya atithi — samaroh + non-whitelisted.
// 14. khabribox — non-whitelisted.
// Namesake-guard: Dynamite News '3 SC/ST FIRs against Manoj Tiwari' — UP ka namesake; Deoghar airport FIR — Delhi BJP MP namesake. Almora INC MLA ke khilaf koi whitelisted FIR/janch nahi — negatives zero.

uttarakhandWorks['mohan-singh'] = [
  {
    title: 'Jalna-Tuledi aur Petshal-Bamanswal-Kapkot motor margon ka shilanyas — 4.025 km Jalna-Tuledi marg (Rs 72.85 lakh) aur 15.175 km Petshal-Bamanswal-Kapkot marg (Rs 309.66 lakh) ka bhoomi-poojan sahit shilanyas',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/almora/story-mohin-singh-mahra-inaugurates-two-road-projects-in-almora-for-better-connectivity-201790316426154.html',
    date: '2026-09-24',
    note: 'Nidhi srot: article me fund ka srot (Vidhayak Nidhi ya rajya yojana) nahi bataya gaya — karyadayi sanstha Lok Nirman Vibhag (PWD); vidhayak ne swayam bhoomi-poojan sahit shilanyas kiya aur PWD adhikariyon ko gunvatta ke saath samay par kaam poora karne ke nirdesh diye. Tithi caveat: page par prakashan-tithi nahi dikhi; article me "Guruvaar" ka ullekh aur search-index crawl timing (~26 Sep 2026) se 24 Sep 2026 anumaanit hai — parent verify karein. Shrey seemit: kaam PWD ka, shilanyas vidhayak ka.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Do motor margon ke damrikaran aur sudharikaran ka shilanyas — Chitai-Petshal-Bamswal-Suvakhan marg par damrikaran (Rs 466.27 lakh) aur Bartoli-Banthok marg par punarnirman-sudharikaran (Rs 283.07 lakh), kul lagat Rs 7.49 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/almora/foundation-stone-laid-for-asphalting-and-improvement-of-two-roads-in-jageshwar-vidhansabha-almora-news-c-232-1-shld1002-137269-2025-12-06',
    date: '2025-12-06',
    note: 'Nidhi srot: article me fund ka srot (Vidhayak Nidhi ya rajya yojana) nahi bataya gaya — karyadayi sanstha PWD; vidhayak ne swayam shilanyas kiya aur PWD adhikariyon ko gunvatta-samay-seema ke nirdesh diye. Hindustan (livehindustan) ne bhi 6 Dec 2025 ko isi karyakram ki report ki (kul lagat Rs 7.49 crore) — donon ke aankde mel khate hain (466.27 + 283.07 = 749.34 lakh). Shrey seemit: kaam PWD ka, shilanyas vidhayak ka.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
];
// ---- REJECT-LOG (mohan-singh, Jageshwar) ----
// 1. Amar Ujala (Apr 2025): Foota me Rs 5L ghoshna — ghoshna-class reject.
// 2. Hindustan (Dec 2025): school bhavan marammat chanda maang — nirikshan + ashwasan.
// 3. Hindustan (~Apr 2026): Khodi BJP karyakram yojana-ginana — party karyakram.
// 4. khabarsatyvartaa/satyapathnews/shreekedardarshan (~Apr 2025): Kheti-Malan-Jateshwar marg shilanyas (Rs 372.92L) — non-whitelisted; RETRY-LEAD.
// 5. devbhoomikhabar (2022): CM Shravani Mela maujoodgi — non-whitelisted + dusre neta ka karyakram.
// 6. Amar Ujala (Jul 2025): Shravani Mela shubharambh — dhaarmik samaroh.
// 7. Hindustan (Dec 2025): swikriti par CM-aabhar — ghoshna-type.
// 8. Hindustan (Nov 2025): PWD/van vibhag baithak-nirdesh — koi dastaveji nateeja nahi.
// 9. Amar Ujala (Nov 2025): Kheti-Jateshwar-Naini-Seraghat jodne ki kavaayad — maang/report stage.
// 10. YouTube: Bhagwat katha — platform + dhaarmik.
// 11. abitfar/binsartimes (Sep 2023): Congress aarop (SC-bahulya gaon vikas rukwaye) — non-whitelisted, koi FIR/pusht janch nahi; negative reject.
// 12. news100live (Sep 2026): Pitna tok shikayat — non-whitelisted; shikayat, FIR nahi.
// 13. uttranews (Mar 2022): Dhami ke liye seat chhodne ki peshkash — raajnaitik khabar.
// 14. findglocal: FB page mirror — FB platform.
// 15. nayaadhyay: Dec 2025 shilanyas duplicate — non-whitelisted.
// COORDINATOR NOTE: entry 1 ka sourceUrl Hindustan ka apna slug hai ('mohin-singh-mahra' — unki spelling); verbatim rakha gaya; entry 1 ki date (2026-09-24) anumaanit hai — note me disclosed, parent verify kare.
// PARENT QA (2026-10-17): Almora batch kul = 18 entries (Bisht 0+1neg, Jeena 3+1neg, Nainwal 3, Rekha Arya 8, Tewari 0, Mohan Singh 2). State total ab 151.
// ---- Champawat district batch (researched 2026-10-17) ----
// COORDINATOR REVIEW: Adhikari ki 4 entries me se 3 rakhi gayin — (1) Barakot Kamajyula-Bhanar road wali Dec 2025 entry
// (sirf DFC estimate, shasanadesh lambit) Jan 2026 wali asal prashasakiya-vittiya swikriti entry me supersede hui,
// isliye giri; (2) Kalasan mandir ka udghatan MLA ke pratinidhi ne kiya tha, vyaktigat roop se MLA maujood nahi
// the — entry Vidhayak Nidhi-vitaran class me rakhi gayi hai, bhoomika saaf disclosed. Dhami ki 5 entries me
// 2 apni Vidhayak Nidhi ke itemized vitaran aur 3 Champawat seat me vyaktigat lokarpan-shilanyas (fund rajya-yojnaon
// ka — CM-bhoomika note me disclosed); 5 rajya-stariya faisle sahi reject hue.

uttarakhandWorks['pushkar-singh-dhami'] = [
  {
    title: 'CM Dhami ne Champawat seat ke liye Rs 3.18 crore ki Vidhayak Nidhi avamukt ki — 113 gram panchayaton aur 151 nagarpalika bastiyon me 94 CC marg, 39 mandiron ka saundaryikaran sahit karya suchibaddh',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/champawat/mla-fund-in-champawat-champawat-news-c-8-1-53238-2023-02-14',
    date: '2023-02-14',
    note: 'Fund: Dhami ki Vidhayak Nidhi se avamukt rashi — suchi me 94 CC marg, 39 mandiron ka saundaryikaran, 3 puliya, 6 dharmshala, 2 charhadivari, 2 peyjal tank, 2 sarvajanik shauchalay, 5 suraksha divar, 6 naliyan, 1 wirecrate baadh-suraksha, 4 tin shed, 3 khel maidan vistarikaran, 2 kaksha kaksh, 1 snan ghat, 2 interlocking tiles, 1 dharmik kriyashala. Aadhikarik Vidhayak Nidhi FY 2022-23 me Rs 3.75 crore/saal thi; is suchi me avamukt rashi Rs 3.18 crore darj hai — antar note me saaf hai.',
    period: '2022-2027',
  },
  {
    title: 'Champawat me Dhami ki Vidhayak Nidhi se Rs 3 crore ke karya shuru — 127 se adhik sampark marg, 49 mandiron ka saundaryikaran, 13 vidyalayon ka punarnirman sahit suchibaddh',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/champawat/story-champawat-mla-fund-allocated-3-crore-for-development-of-temples-and-schools-201745491420566.amp.html',
    date: '2025-04-24',
    note: 'Fund: Vidhayak Nidhi (Aadhikarik FY 2023-24 se Rs 5 crore/saal; is report me Rs 3 crore ke karya shuru darj). Suchi: 127+ sampark marg, 49 mandiron ka saundaryikaran, 13 vidyalayon ka punarnirman, Ramleela manch, jan milan kendra, swagat gate, shauchalay, park saundaryikaran, khel samagri, CCTV, sinchai yojana, 2 pul, 12 naliyan, 6 suraksha divaren, 9 jan manch, 10 prangan. Report me ye bhi darj ki 2023-24 ki sampurna Vidhayak Nidhi samay se aavantit hui aur 2022-23 me Rs 3.75 crore se karya hue.',
    period: '2022-2027',
  },
  {
    title: 'Dhami ne Champawat me Rs 115.23 crore ki 43 yojnaon ka lokarpan-shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/champawat-cm-dhami-inaugurated-and-laid-the-foundation-stone-of-schemes-worth-115-crore-rs-40010555.html',
    date: '2025-10-15',
    note: 'Dhami ne vyaktigat roop se Champawat (GGIC karyakram) me 43 yojnaon ka lokarpan-shilanyas kiya — fund rajya sarkar ki yojnayen, Vidhayak Nidhi nahi. Usi manch se ki gayi rajya-stariya ghoshnaen (swadeshi appeal, madrasa board samapti) entry me shamil NAHI — wo reject-log me hain.',
    period: '2022-2027',
  },
  {
    title: 'Dhami ne Champawat me Rs 36.82 crore ki 17 yojnaon ka lokarpan-shilanyas kiya — Gandhi Chowk par 30-feet tiranga, sadak, ayurvedic chikitsalay aur parking karya sahit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/champawat-cm-dhami-unveils-36-crore-development-schemes-in-champawat-as-tricolor-flies-high-40190406.html',
    date: '2026-03-31',
    note: 'Dhami ne vyaktigat roop se Gandhi Chowk Champawat me lokarpan-shilanyas kiya — fund rajya sarkar ki yojnayen, Vidhayak Nidhi nahi. Lokarpan (Rs 7.12 crore): Tak Khandak-Karauli motor marg sudhar, collectorate parisar me karyalay-sah-parking, Rishweshwar mandir Lohaghat ke paas surface parking, Gandhi Chowk par 30-feet rashtriya dhwaj. Shilanyas (Rs 29.71 crore): Dudhori-Bhanauli marg, Basauti-Rokunwar marg, GIC Manch tak sadak, Ghatotkach mandir se Jhali mandir tak damrikaran, durghatna-sambhavit sthalon par surakshatmak karya, Raigaon/Rojal/Vardha Khan me ayurvedic chikitsalay, Khetikhan multilevel parking, durasth kshetron me wireless network, Lohaghat college me jalapurti sudhar aadi. Usi karyakram me dohraayi gayi ghoshnaon (Women Sports College Rs 257 crore, Science Centre Rs 58.52 crore) ka lokarpan nahi hua — wo ghoshna ke roop me reject-log me hain.',
    period: '2022-2027',
  },
  {
    title: 'Dhami ne Champawat me Rs 62.97 crore ki 50 pariyojnaon ka lokarpan-shilanyas kiya — 20 ka lokarpan (Rs 11.08 crore), 30 nayi ka shilanyas (Rs 51.89 crore)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/brand-stories/champawat-gets-rs-62-97-crore-boost-as-state-focuses-on-cyber-safety-and-soldier-welfare-201787890636849.html',
    date: '2026-08-27',
    note: 'Dhami ne vyaktigat roop se Dhura Ramlila Maidan (Mukhyamantri Sashakt Behna Utsav-2026) me lokarpan-shilanyas kiya — fund rajya sarkar ki yojnayen, Vidhayak Nidhi nahi. Kshetra: sadak, peyjal, sinchai, baadh-suraksha, dharmik paryatan. Usi manch par ghoshit atirikt karyon (Dhura peyjal yojana, sadken, wire-crate, jhula pul, tubewell aadi) ka lokarpan/shilanyas nahi hua — wo sirf ghoshna ke roop me reject-log me hain.',
    period: '2022-2027',
  },
];

uttarakhandWorks['khushal-singh-adhikari'] = [
  {
    title: 'Lohaghat nagar ke liye Saryu lift peyjal yojana ko vittiya swikriti mili — MLA ki maang par CM ne ghoshna ki thi',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/video/uttarakhand/champawat/video-regional-mla-khushal-singh-adhikari-has-expressed-happiness-over-the-approval-of-saryu-lift-drinking-water-scheme-in-lohaghat-2025-12-15',
    date: '2025-12-15',
    note: 'MLA ka dawa hai ki unke banne ke baad unki pehli pramukh maang Lohaghat nagar ke liye Saryu lift peyjal yojana thi, jise unki maang par CM Pushkar Singh Dhami ne Ramleela manch se ghoshna ki thi; Dec 2025 me yojana ko vittiya swikriti mili. Credit capped: maang se ghoshna se swikriti tak ka dawa MLA ka hai; actual swikriti rajya shasan ne di, fund sarkari. Yojana ki laagat report me nahi hai, aur nirman ki pragati is report me nahi hai.',
    period: '2022-2027',
  },
  {
    title: 'Lohaghat me Pati aur Barakot ki do sadkon ko prashasakiya aur vittiya swikriti mili — MLA ke prayason ka dawa',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/champawat/story-road-construction-approved-in-lohaghat-public-thanks-mla-khushal-singh-adhikari-201768647013781.html',
    date: '2026-01-17',
    stage: 'swikriti',
    note: 'Pati me Sango-Ghigharukot se Bans Baswadi tak 1.225 km aur Barakot me Kamajyula-Bhanar-Raighadi 7 km sadak ke punarnirman/sudharikaran ke liye shasan se prashasakiya aur vittiya swikriti mili; tender lagna baki tha. MLA ke anusar unke prayas se swikriti mili; swikriti sarkari hai, shrey share hoga (credit capped). Fund: shasan (laagat report me nahi). Dec 2025 ki DFC-estimate report (Rs 6 crore) isi sadak par thi — wo ghoshna-stage thi, isliye is entry me supersede hui.',
    period: '2022-2027',
  },
  {
    title: 'Tarigaon me MLA ki Vidhayak Nidhi se bane Kalasan mandir ka nirman poora — udghatan unke pratinidhi ne kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/pithoragarh/newly-constructed-kalsan-temple-inaugurated-in-tarigaon-pithoragarh-news-c-229-1-alm1014-144571-2026-09-19',
    date: '2026-09-19',
    note: 'Barakot block ke Tarigaon gaon me MLA Khushal Singh Adhikari ki Vidhayak Nidhi se Kalasan mandir ka nirman poora hua; udghatan unke pratinidhi Nanda Ballabh Bagouli ne kiya — vyaktigat roop se MLA maujood nahi the, isliye shrey vitaran tak seemit hai. Fund: Vidhayak Nidhi (asal vitaran, nirmit kary poora). Mandir ki laagat report me nahi hai.',
    period: '2022-2027',
  },
];

// REJECT-LOG (khushal-singh-adhikari, Lohaghat — INC; karyakaal Mar 2022+):
// 1. Amar Ujala (2026-09-04): CDO office par dharna (panchayat works me 15-25% commission ka aarop) — political protest, koi kshetra-kaam ka dastaveji nateeja nahi.
// 2. Hindustan: Chaudagoonth chaupal (Pati) me samasyayen suni — sirf daura, koi swikriti/lokarpan nahi.
// 3. livevns.news (2023-01-02): Gorakhnath mela sthal saundarikaran + CC marg ki ghoshna — whitelist-bahar source + sirf ghoshna.
// 4. champawatlive.in: Shaheed Shankar Datt Rai smarak lokarpan — whitelist-bahar chhota portal.
// 5. champawatlive.in: Saryu lift DPR tender — whitelist-bahar; wahi ghatna Amar Ujala se covered.
// 6. Amar Ujala (2025-02-20): Vidhansabha me hospital/PHC maang — sirf maang, koi dastaveji nateeja nahi.
// 7. Amar Ujala (2026-10-10): 26th Maa Durga mahotsav udghatan — mukhya-atithi samuday samaroh.
// 8. kalikumaunkhabar.com: Pasam school uchchikaran, MLA virtual — whitelist-bahar + dusre tantra ka karyakram.
// 9. devbhoomimaya.com (2024): Barahi Dham mela baithak — whitelist-bahar, routine baithak.
// 10. TOI + etvbharat: election petition (Fartyal) — chunav-yachika akele negative nahi; current-term me FIR/pusht janch nahi; myneta par 0 criminal cases; thekedaar-vyavsay ke aarop bina FIR negative nahi.
// 11. garhwalpost.in + doonkhabar.com: Vidhayak Nidhi kharch 34%/53% RTI reports — whitelist-bahar (retry lead: whitelisted source me aankde dhundho).
// 12. Dec 2025 Barakot road DFC-estimate (Hindustan) — ghoshna-stage; Jan 2026 sanction entry me supersede, reject.

// REJECT-LOG (pushkar-singh-dhami — Champawat seat; rajya-stariya reject items):
// 1. Oct 2026: 61.42-cr statewide swikriti package (Tanakpur/Banbasa hissa) — rajya-stariya CM faisla.
// 2. Oct 2026: IANS 70-cr statewide approvals me Purnagiri mela maintenance — rajya-stariya CM faisla + non-whitelisted.
// 3. 16.88-cr multi-district swikriti me Purnagiri mela — rajya-stariya CM faisla + non-whitelisted.
// 4. 124.21-cr free textbooks statewide — rajya-stariya CM faisla + non-whitelisted.
// 5. Oct 2025 Champawat event: swadeshi appeal + madrasa board samapti ghoshna (Jagran) — rajya-stariya policy ghoshna.
// 6. Oct 2026: Tanakpur gurdwara 1.44-cr kamre/hall swikriti (Amar Ujala) — sarkari swikriti lekin Dhami ka vyaktigat lokarpan/shilanyas ya MLA-nidhi bhoomika dastaveji nahi — borderline, sakht-niyam se reject.
// 7. Jun 2026: Champawat district hospital MRI lokarpan ~Rs 6 cr, ICICI Foundation CSR (HT) — CSR mukhya-atithi lokarpan — sakht reject.
// 8. Jun 2026: 20-cr critical care block + diagnostic wing + nursing hostel ghoshnaen (HT) — sirf ghoshna.
// 9. Aug 2026 event ki atirikt ghoshnaen (peyjal, sadken, wire-crate, jhula pul) — sirf ghoshna.
// 10. Mar 2026 event: Women Sports College 257 cr, Science Centre 58.52 cr — sirf ghoshna.
// 11. Mar 2026 ghoshna-suchi (Monpokhari-Nid road, Amodi-Chhatkot bypass, hand pump, fencing) — sirf ghoshna + non-whitelisted.
// 12. Jun 2026: Rs 123.79-cr/17-project event (Jim Corbett Trail, City Centre) — vyaktigat lokarpan tha lekin koi whitelisted source nahi — retry lead.
// 13. Jul 2026: Rs 65.95-cr baadh-suraksha shilanyas — non-whitelisted — retry lead.
// 14. Lohaghat Youth Congress Dhami-virodh — rajnaitik virodh, FIR/janch ke bina negative nahi.

// FOUNDATION EDIT: koi nahi — electionNote count 70 pehle aur baad me verify karna hai.

// ---- Nainital district batch (researched 2026-10-17) ----
// COORDINATOR QA (2026-10-17): Bhagat worker-note ka English vaakya Roman-Hinglish me kiya; Sarita Arya entry me stage joda; Kaira/Diwan ke 'shubharambh'/'bhumi-pujan' stage file-convention ('shilanyas'/'bhoomi-poojan') me map kiye; Diwan entry-1 'Shubharambh' -> 'lokarpan' (article headline me inauguration tha); Mohan Singh Bisht entry-2 ki date me inferred-caveat note me joda. Sab dates jo metadata se nikali gayi hain, unke note me caveat darj hai.

uttarakhandWorks['mohan-singh-bisht'] = [
  {
    title: 'Vidhayak Dr. Mohan Singh Bisht ne Lal Kuan me Rs 3.36 crore ki sadkon ka shilanyas aur lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Live Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haldwani/story-dr-mohan-singh-bisht-launches-development-projects-worth-3-36-crores-in-lal-kuan-201762526106702.html',
    date: '2025-11-07',
    note: 'Rajya yojana ke tahat karyakram: shilanyas — Dumka Bangar (Aashirvad Complex se Jaggi Bangar tak) aur Tularampur Evergreen School se Amba Vihar tak sadak nirmaan, plus 1600 meter lambi sarvajanik sadak; lokarpan — Haripur Shivdutt damarikaran (Haripur Shivdutt ko Himmatpur Motahaldu aur Halduchaur se jodne wala mahatvapurna marg), Haripur Shivdutt ki Yawat Colony marg par sadak nirmaan, aur Gorapadao mukhya chauraha se Gaulagate tak CC marg. Mishrit karyakram tha (shilanyas + lokarpan dono), isliye stage field nahi rakha.',
    period: '2022-2027',
  },
  {
    title: 'Sansad Ajay Bhatt aur Vidhayak Mohan Bisht ne Chorgalia road ke chaudikaran ka sanyukt shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/nainital/widening-of-chorgalia-road-begins-haldwani-news-c-337-1-hld1039-121865-2025-05-16',
    date: '2025-05-15',
    note: 'Rs 1.48 crore ki lagat se 130 meter lambi aur 3.5 meter chaudi sadak — Banbhoolpura railway crossing se Gaulapul tak (LONIVI/PWD kaam). Shilanyas MP Ajay Bhatt aur Lalkuan Vidhayak Mohan Bisht ne sanyukt roop se kiya; vidhayak ki bhumika maujoodgi se adhik thi (sah-shilanyaskarta ki). Fund kendriya ya MP nidhi ka nahi, rajya PWD kaam hai. Date caveat: article 16 May 2025 ka hai aur usme "brihaspativaar" ka ullekh hai, isliye event-date 15 May 2025 nirdharit ki gayi.',
    period: '2022-2027',
  },
];
// REJECT-LOG (mohan-singh-bisht, Lalkuan): 1. Amar Ujala (28 Oct 2024) — Chorgalia pashu-chikitsalaya vaccinator hatane par Pachuvakheda me graminon ka gherao/hangama — REJECT: MLA aaropi nahi, koi FIR/adhikari-pusht janch nahi. 2. Amar Ujala (5 Sep 2025) — Bindukhatta rajasva-gaon maang, CS-ashwasan — REJECT: sirf maang/ashwasan, koi dastaveji nateeja nahi. 3. Amar Ujala (19 Nov 2025) — CM vivekadhin kosh ke cheque — REJECT: daan/rahat. 4. LiveHindustan (15 Sep 2026) — tehsil day jansunwai — REJECT: nirikshan/daan. 5. LiveHindustan (~Sep 2026) — CM vivekadhin kosh ke cheque — REJECT: daan. 6. LiveHindustan (~Oct 2026) — samman samaroh me mukhya atithi — REJECT: samuday samaroh. 7. LiveHindustan (15 Oct 2025) — Nainital-Bareilly road nirikshan NHAI ke saath — REJECT: nirikshan + kendriya pariyojna. 8. LiveHindustan (~Aug 2026) — CHC Halduchaur multi-specialty shivir shubharambh — REJECT: asthayi shivir. 9. Amar Ujala (29 Oct 2025) — Vidhayak Nidhi aggregate (aavantan Rs 4.90cr, kharch Rs 3.27cr) — REJECT as entry: aggregate, itemized nahi (fund tathya context ke liye upyogi). 10. Amar Ujala (3 Aug 2023) — Amrit Bharat Lalkuan station shilanyas — REJECT: kendriya pariyojna par maujoodgi. 11. sachkitop/kumaunnews/kurmanchaltimes (Nov 2025) — 7 sadak (~Rs 4cr) — REJECT: non-whitelist, retry-lead. 12. samacharsangam — Siddh Baba mandir saundaryikaran lokarpan — REJECT: non-whitelist, retry-lead. 13. cwn.today — Halduchaud Ramlila manch saundaryikaran — REJECT: non-whitelist, retry-lead. 14. ETV Bharat — CHC Halduchaur 30-bed seva-shubharambh — REJECT: non-whitelist, retry-lead. 15. YouTube (Jun 2026) — Rs 5cr 3 sadak shilanyas — REJECT: YouTube-only, retry-lead. 16. Business Standard/newsbytes — Madan Singh Bisht/Delhi Mohan Singh Bisht — REJECT: naam ka jaal, alag vyakti. 17. webindia123 — Route-10 Rs 9.5cr — REJECT: page khula nahi + non-whitelist, retry-lead. 18. darpannews24x7 (Oct 2026) — pre-event — REJECT: pre-event + non-whitelist.

uttarakhandWorks['ram-singh-kaira'] = [
  {
    title: 'Nai se Chakdaland tak 4 km motor marg ka Vidhayak Nidhi se nirman karakar 26 Oct 2025 ko lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haldwani/story-ram-singh-kaida-inaugurates-chakdaland-motor-road-in-bhimtal-201761508473380.html',
    date: '2025-10-26',
    note: 'Gram sabha Chakdaland (Okhalkanda block) ke graminon ki lambe samay se maang par Vidhayak Nidhi se 4 km sadak ka nirman; Amar Ujala ne bhi isi karyakram ki khabar chhapi. Rashi report me ullikhit nahi.',
    period: '2022-2027',
  },
  {
    title: 'Bhimtal nagar me Jhijri ke paas Rs 1.80 crore ki parking ka 19 Nov 2025 ko shilanyas kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haldwani/story-bhima-tal-parking-construction-launched-by-mla-ram-singh-kaida-to-alleviate-traffic-congestion-201763560944387.html',
    date: '2025-11-19',
    note: 'Lagbhag 150 chhoti gadiyon ki kshamta; nagar ke jam se rahat aur paryatakon ko Bhimtal jheel ke liye suvidha. Nidhi ka srot report me ullikhit nahi. LG Inter College ke paas doosri parking ka nirman bhi jald karane ki ghoshna report me hai.',
    period: '2022-2027',
  },
  {
    title: 'Amdali-Bohrakun aur Tallital-Bheemeshwar mandir tak 4 km sadak par Rs 1.3 crore ke damrikaran ka 26 Nov 2025 ko shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/nainital/asphalting-work-started-in-bhimtal-with-an-expenditure-of-rs-1-crore-haldwani-news-c-418-1-shld1006-1450-2025-11-27',
    date: '2025-11-26',
    note: 'Lok Nirman Vibhag ka kaam (Amdali se Bohrakun, Tallital Ramleela maidan se Bheemeshwar mandir); gaddhon se vahan chalakon, yatriyon aur schooli bachchon ko pareshani thi. Headline me "ek crore" likha hai, body me Rs 1.3 crore — body ka aankda rakha gaya.',
    period: '2022-2027',
  },
  {
    title: 'Okhalkanda block ke Kalaagar-Dhura gram sabha me lambe samay se pratikshit motor marg ka 27 Jul 2026 ko lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/nainital/story-completion-of-long-awaited-motor-road-in-bhimtal-by-minister-ram-singh-kaida-201785159066225.html',
    date: '2026-07-27',
    note: 'Graminon ki maang par unhone marg nirman ke liye dhanrashi swikrit karai thi; nirman poora hone par swayam lokarpan. Sadak ke abhav me logon ko mukhya marg tak kai km paidal chalna padta tha. Rashi report me ullikhit nahi. Date caveat: page-metadata ("X days ago") + saptah-din milan se nirdharit, article me exact timestamp nahi tha.',
    period: '2022-2027',
  },
  {
    title: 'Bhimtal block me Chafi-Alchauna-Tada motor marg ke Rs 26 crore ke damrikaran evam sudharikaran ka 25 Sep 2026 ko shubharambh kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haldwani/story-infrastructure-development-initiatives-launched-in-bhimtal-by-minister-ram-singh-kaida-201790257200881.html',
    date: '2026-09-25',
    note: 'PWD adhikariyon se DPR taiyar karakar shasan ko bhejne ke nirdesh unhone diye the; swikriti ke baad kaam shuru. Kharab marg par barsaat me keechad se vahan phansne ki samasya thi. Date caveat: page-metadata + saptah-din milan se nirdharit.',
    period: '2022-2027',
  },
  {
    title: 'Vinayak sthit Goljyu devta mandir ke Rs 91 lakh ke saundaryikaran evam punarnirman ka 25 Sep 2026 ko bhumi pujan kiya',
    category: 'Any',
    badge: 'news',
    stage: 'bhoomi-poojan',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haldwani/story-infrastructure-development-initiatives-launched-in-bhimtal-by-minister-ram-singh-kaida-201790257200881.html',
    date: '2026-09-25',
    note: 'Mandir ko Mandir Mala Mission yojana me shamil karane ke baad bhumi pujan; mandir ke vikas karyon ke liye Rs 91 lakh ki dhanrashi swikrit. Ye yahi event tha jisme upar wali sadak-pariyojna ka bhi shubharambh hua.',
    period: '2022-2027',
  },
  {
    title: 'Rajkiya Mahavidyalaya Patlot ke Rs 4.37 crore se bane navnirmit bhavan ka 16 Oct 2026 ko lokarpan kiya',
    category: 'School',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/nainital/story-ram-singh-kaida-inaugurates-new-government-college-building-in-patlot-201792155871069.html',
    date: '2026-10-16',
    note: 'Bhavan nirman ke liye unke prayason se Rs 4.37 crore swikrit karaye gaye; mahavidyalaya ke liye bhumi ki registry ka kaam bhi unki bhumika se sampann. Bhugol evam Sanskriti vishay shuru karane ke prayas ka aashvasan diya. Mantri-pad ka ullekh disclosure ke liye: bhavan seat ke liye swikrit rajya-yojna ka hai.',
    period: '2022-2027',
  },
  {
    title: 'Bhimtal vidhansabha me PMGSY Phase-4 ke tahat lagbhag Rs 40 crore ki 6 sadak pariyojnaon ka 15 Oct 2026 ko shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/nainital/story-bhimtal-gets-six-pmgsy-road-projects-worth-around-40-crore-201792071419252.html',
    date: '2026-10-15',
    note: 'Sansaad Ajay Bhatt ke saath shilanyas; 2 naye margon ka nirman (Harinagar-Jangaliyagaon se Seemayal, Banna se Pinshela) aur 4 margon ka damrikaran/sudharikaran (Shyamkhet se Kud, Kulori se Pokhari, Jhutiya se Kanda Kaul, Chhidakhan se Matela Pokhari). Fund kendra ki PMGSY nidhi — prastav Kaira ne kendra sarkar ko bheje the, swikriti mili. MLA ka dawa (capped): Banna-Pinshela marg ka nirman poorv me Vidhayak Nidhi se karaya gaya tha (Hindustan, 21 Feb 2026).',
    period: '2022-2027',
  },
];
// REJECT-LOG (ram-singh-kaira, Bhimtal): 1. Bhimtal-Naukuchiatal marg sudharikaran Rs 2.45cr swikriti (~Aug 2026) — REJECT: sirf shasanadesh ki jaankari, dastaveji bhoomika nahi. 2. Nadgalgaon Rs 67.41L + Takura-Jamradi Rs 67.64L — REJECT: Kaira sirf announcer the. 3. Khujethi-Pataliya-Balna Rs 1.24cr shilanyas — REJECT: non-whitelist, retry-lead. 4. 7 pul Rs 8.74cr swikriti — REJECT: non-whitelist, retry-lead. 5. Sadbuga Inter College — REJECT: non-whitelist, retry-lead. 6. CM Lettibunga Rs 112.34cr — REJECT: CM ka karyakram, Kaira maujoodgi matra. 7. Kalaagar-Galni-Chamoli Rs 50L (aapda mad) — REJECT: aapda-package. 8. Jagran RTI Vidhayak Nidhi aggregate (62%) — REJECT: aggregate. 9. Mohna-Shiv Mandir Vidhayak Nidhi ghoshna — REJECT: grant-ghoshna. 10. AARGO EV Drive — REJECT: maujoodgi matra.

uttarakhandWorks['sarita-arya'] = [
  {
    title: 'Mangoli-Khamari-Thapla-Jalalgaon-Rokhar motor marg sudharikaran karya ka sanyukt shilanyas MP Ajay Bhatt ke saath kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/amp/video/uttarakhand/nainital/video-mp-mla-laid-the-foundation-stone-for-road-improvement-work-in-nainital-2025-05-20',
    date: '2025-05-19',
    note: 'CM Pushkar Singh Dhami ki 2024 Betalghat ghoshna ke tehat state PWD fund se SDBC/PC nirmaan aur kshatigrast diwaron ki marammat; tender ho chuka tha; MLA Nidhi ka fund nahi; shilanyas MP Ajay Bhatt ne MLA aur graminon ke saath kiya; report me lagat nahi di gayi. Amar Ujala headline dono ko sanyukt shilanyaskarta batati hai, isliye sirf maujoodgi nahi mana gaya. Date caveat: article 20 May 2025 ka hai, karyakram "somvaar" likha hai — isliye 19 May 2025.',
    period: '2022-2027',
  },
];
// REJECT-LOG (sarita-arya, Nainital SC): 1. Goswami Basti CC marg Rs 2L ghoshna (nainitalnews24) — REJECT: non-whitelist + ghoshna. 2. Valmiki Park ghoshna (takatakkhabre) — REJECT: non-whitelist + ghoshna. 3. St. Mary's Convent AI lab udghatan — REJECT: private school samaroh. 4. Ward vikas ghoshna (Amar Ujala, 3 Nov 2025) — REJECT: grant-ghoshna. 5. Vidhayak Nidhi aggregate Rs 4.02cr/4.90cr (Amar Ujala) — REJECT: aggregate (fund tathya foundation ke liye upyogi). 6. Pangot-Dechori dusri kist Rs 4.63cr — REJECT: shasanadesh ki jaankari matra. 7. Bahuddeshiya shivir — REJECT: nirikshan/shivir. 8. Betalghat bhoo-dhansaav nirikshan — REJECT: nirikshan. 9. Ratighat sharab-dukaan gyapan — REJECT: maang. 10. Betalghat maang-patra — REJECT: maang. 11. Vidhan Sabha maang-patra (van mantri) — REJECT: non-whitelist + maang. 12. CM Nainital Rs 121.52cr/112.34cr — REJECT: dusre neta ka karyakram. 13. Nanda Devi/Ramlila — REJECT: dhaarmik samaroh. 14. Kumaun University postal cover (TOI) — REJECT: mehmaan. 15. HC shift virodh (HT) — REJECT: rajnaitik bayan. 16. Polytechnic pratiyogita — REJECT: samaroh. 17. Rs 348cr daavon wali press conference (nainilive) — REJECT: non-whitelist + dawa. 18. Balika Inter College ghoshna — REJECT: non-whitelist + ghoshna. 19. Khutani sangrahalaya ghoshna — REJECT: non-whitelist + ghoshna. 20. Kabristan chahar-deewari shilanyas (devbhoomilive24) — REJECT: non-whitelist, retry-lead.

uttarakhandWorks['sumit-hridayesh'] = [
  {
    title: 'Sumit Hridayesh ne Haldwani ke Subhash Nagar (Awas Vikas) me Rs 26.98 lakh lagat ki DMF-swikrit sadak ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Hindustan (livehindustan.com)',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haldwani/story-mla-sumit-hridayesh-launches-road-project-in-haldwani-for-26-98-lakh-201781875693525.html',
    date: '2026-06-19',
    note: 'Hindustan ki headline lokarpan batati hai, report ki body me shilanyas ka ullekh bhi hai; report ke mutabik pariyojna Jila Khanij Foundation (DMF) se swikrit hai — DMF sarkari nidhi hai, isliye shrey disclose karke entry banti hai. Karyakram vyaktigat roop se Haldwani MLA Sumit Hridayesh ne kiya; unke bhashan me mata (late Dr. Indira Hridayesh) ka ullekh unka apna tha — unke karyakaal ka kaam yahan nahi gina gaya. Date caveat: page par prakashan-taareekh nahi dikhi; "shukrawar" ullekh + ~119 din purane metadata se 2026-06-19 (Friday) nirdharit, pramanit nahi.',
    period: '2022-2027',
  },
  {
    title: 'Sumit Hridayesh ne Haldwani ke Sheeshmahal (ward 2) me Harish Chandra Tiwari Jan Milan Kendra ke Rs 7.33 lakh lagat wale saundaryikaran karya ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Hindustan (livehindustan.com)',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haldwani/story-haldwani-mla-sumit-hrideyash-inaugurates-beautification-of-harish-chandra-tiwari-community-center-201782044021634.html',
    date: '2026-06-22',
    note: 'Rs 7.33 lakh lagat se Sheeshmahal sthit Harish Chandra Tiwari Jan Milan Kendra ke saundaryikaran karya ka vyaktigat lokarpan; report me fund ka srot (Vidhayak Nidhi ya anya) nahi bataya gaya hai. Date caveat: page par prakashan-taareekh nahi dikhi; ~117 din purane metadata se 2026-06-22 nirdharit, pramanit nahi.',
    period: '2022-2027',
  },
];
// REJECT-LOG (sumit-hridayesh, Haldwani): 1. Laturiya Maharaj Ashram Jan Milan Kendra Rs 25L shilanyas (Oct 2026) — REJECT: non-whitelist (retry-lead: Amar Ujala/Jagran/Hindustan print me khojo). 2. Aanchal milk booth shubharambh (Jul 2023) — REJECT: non-whitelist + co-op suvidha. 3. Phone-tapping saga (Oct 2026) — REJECT: MLA shikayatkarta hain, aaropi nahi. 4. Smart meter virodh — REJECT: rajnaitik virodh. 5. Vote Bachao press conference — REJECT: campaigning. 6. Vidhan Sabha me kagaz faadna — REJECT: sadan hungama, koi FIR nahi. 7. Banbhoolpura SC stay yachika — REJECT: valid entry type nahi. 8. Rattibha thread — REJECT: social media. 9. Oneindia cases list — REJECT: keval aankde, jawab nahi. 10. Nasha-mukt ghoshna — REJECT: ghoshna. 11. Ram Sena quote (IE) — REJECT: rajnaitik bayan. 12. CM Haldwani Rs 147cr udghatan — REJECT: dusre neta ka karyakram.

uttarakhandWorks['banshidhar-bhagat'] = [
  {
    title: 'MLA Banshidhar Bhagat ke prayason se Kaladhungi ki Kotabagh block ke Bajuniya Haldu gaon me Rs 50 lakh ke overhead water tank ka kaam shuru hua — pehli kist Rs 17.01 lakh Peyjal Nigam Ramnagar ko hastantarit, paisa Laghu Sinchai vibhag ki bachat (Rs 12.01 lakh) aur zila paryatan adhikari/KMVN ki avashesh rashi (Rs 5 lakh) se juta',
    category: 'Paani',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haldwani/story-permanent-solution-to-drinking-water-crisis-in-kotabagh-initiated-by-mla-banshidhar-bhagat-201789563933366.html',
    date: '2026-09-16',
    note: 'Hindustan ne swikriti ko MLA ke prayason ka natija bataya hai; poore tank ki lagat Rs 50 lakh hai, abhi tak sirf pehli kist jaari hui hai; Vidhayak Nidhi ka koi ullekh report me nahi hai, isliye Vidhayak Nidhi ka kaam na samjha jaye. Date caveat: article me exact taareekh nahi thi; "lagbhag 30 din purana" metadata + "budhvaar" ullekh ke milan se 2026-09-16 nirdharit.',
    period: '2022-2027',
  },
  {
    title: 'Kaladhungi ke Belpokhra gaon me Primary School Bachchinagar ke lagbhag Rs 25.69 lakh ki lagat se bane naye vidyalaya bhawan ka vidhayak Banshidhar Bhagat ne lokarpan kiya aur patta ka anavaran karke bhawan chhatra-chhatraon ko samarpit kiya',
    category: 'School',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haldwani/story-inauguration-of-new-school-building-in-haldwani-enhancing-education-and-community-engagement-201774271845246.html',
    date: '2026-03-23',
    note: 'Amar Ujala ne bhi isi event ki pushti ki hai; purana bhawan jarjar tha; fund ka srot dono reports me nahi bataya gaya hai.',
    period: '2022-2027',
  },
  {
    title: 'Vidhayak Banshidhar Bhagat ke prastav par CM Pushkar Singh Dhami ne Kaladhungi ke Kotabagh mukhya marg par jaam se rahat ke liye sinchai vibhag ki nahar ki covering aur bijli ke pol shift karke sadak chaudikaran ki ghoshna ki; PWD ko prastav banane ke nirdesh',
    category: 'Sadak',
    badge: 'news',
    stage: 'ghoshna',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haldwani/story-relief-from-traffic-jam-in-kotabagh-cm-announces-canal-covering-project-201763733180344.html',
    date: '2025-11-21',
    note: 'Ye keval ghoshna hai — abhi tak koi swikriti ya rashi nahi hai; PWD ko sirf prastav banane ko kaha gaya hai; CM ne MLA ke prastav ko sarvajanik roop se shrey diya, isliye credit capped karke accountability/pahal entry ke roop me rakha gaya hai, ghoshna stage ke saath.',
    period: '2022-2027',
  },
  {
    title: 'Kaladhungi nagar palika ke ward 6 me Rs 40 lakh ki sadak ke shilanyas ke dauran virodh kar rahi mahilaon ko vidhayak Banshidhar Bhagat ne mukadma darj karakar jail bhijwane ki dhamki di; Dainik Bhaskar ke anusaar mahilaon ne unke saamne zameen par sawal uthaye the',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/amp/local/uttarakhand/nainital/news/uttarakhand-bjp-mla-banshidhar-bhagat-threatens-jail-women-protesting-before-president-visit-update-136297169.html',
    date: '2025-10-29',
    note: 'Established media ki reporting hai; MLA ka jawab note me hai — unhone kaha virodh karne wale dusri party se the; naam-daar adhikari SDM Kaladhungi Vipin Chandra Pant ne zameen ki naap aur court me lambit maamle ki pushti ki; MLA ke khilaf koi FIR darj nahi hui; pradarshankariyon ke bete ki plotting sambandhi aarop parivar ka mamla hone se entry se baahar rakhe gaye; sadak nagar palika ka tender kaam hai isliye shilanyas positive entry ke liye reject kiya gaya. Stage-accurate: abhi tak koi FIR/kanuni karvai MLA ke khilaf nahi hui hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (banshidhar-bhagat, Kaladhungi): 1. Belpokhara internal roads Rs 145.10L + Fatehpur-Nawar-Sailani bridge — REJECT: sirf shasanadesh ki jaankari, dastaveji bhoomika nahi. 2. Ward 6 nagar palika Rs 40L road shilanyas — REJECT: nagar palika ka tender kaam (isi event ki jail-dhamki negative alag se darj hai). 3. CM Dhami Rs 114cr Kaladhungi event — REJECT: dusre neta ka karyakram + non-whitelist. 4. CM Dhami Rs 121cr Nainital projects — REJECT: CM ka karyakram + non-whitelist. 5. Belpadav jansunwai — REJECT: nirikshan/daura. 6. Bishtdhada/Lamachaur baithaken — REJECT: sangathanatmak. 7. Betalghat visit — REJECT: purani seat ka daura. 8. Rs 42cr sinchai shilanyas (~Mar 2023) — REJECT: non-whitelist, retry-lead. 9. Amar Ujala Vidhayak Nidhi table — REJECT: aggregate. 10. Oct 2022 devi-devta vivadit bayan — REJECT: whitelisted standalone nahi, retry-lead. 11. Jagran nikay chunav analysis + mandir pran-pratishtha — REJECT: analysis/upasthiti. 12. Kaladhungi hot-seat politics piece — REJECT: analysis.

uttarakhandWorks['diwan-singh-bisht'] = [
  {
    title: 'Ramnagar se Bhandarpani tak 8 km sadak ka damarikaran shuru, lagat Rs 1.21 crore',
    category: 'Sadak',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/nainital/mla-inaugurated-the-asphalt-work-ramnagar-news-c-239-1-ntl1004-107253-2025-05-19',
    date: '2025-05-19',
    note: 'Vidhayak ne swayam kaam ka shubharambh kiya. Kaam ki prakriti sarkari sadak damarikaran hai; fund ka srot report me nahi bataya gaya.',
    period: '2022-2027',
  },
  {
    title: 'Rajya Yojana ke tehat swikrit Rs 95.01 lakh ke marg nirman karyon ka bhumi pujan',
    category: 'Sadak',
    badge: 'news',
    stage: 'bhoomi-poojan',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/haldwani/story-ram-nagar-mla-diwan-singh-bisht-initiates-road-construction-with-95-01-lakhs-funding-201765539694286.html',
    date: '2025-12-12',
    note: 'Rajya Yojana ke antargat swikrit karyon ka bhumi pujan vidhayak ne kiya; karyon ki itemized suchi report me nahi hai.',
    period: '2022-2027',
  },
];
// REJECT-LOG (diwan-singh-bisht, Ramnagar): 1. CM rahat-kosh Rs 12.40L (129 parivar) — REJECT: daan/rahat. 2. CM vivekadheen kosh Rs 4.93L (35 parivar) — REJECT: daan/rahat. 3. Dainik Bhaskar — Maldhan Chaud swasthya shivir udghatan — REJECT: ek-divasiya shivir. 4. Dainik Bhaskar — Rs 38.57cr parking shasan swikriti — REJECT: shasanadesh ki jaankari matra. 5. ETV Bharat — Ranikhet Road parking lokarpan — REJECT: non-whitelist. 6. ETV Bharat — City Forest udghatan — REJECT: non-whitelist + dusre neta ka karyakram. 7. ETV Bharat — Bus port shilanyas — REJECT: non-whitelist + maujoodgi. 8. livehindustan/ETV — Dhangadhi pul (NHAI, Rs 29cr) lokarpan — REJECT: kendriya pariyojna + maujoodgi. 9. Durga Devi Maidanvan motor marg maang — REJECT: sirf maang/ashwasan. 10. Amar Ujala — CM se milkar samasyaon par charcha — REJECT: sirf maang/ashwasan. 11. Dainik Jagran — Bijrani/Sitabani safari punah-udghatan — REJECT: van vibhag ka event. 12. livehindustan — van karmiyon ke liye nishulk chikitsa shivir — REJECT: CSR/samaroh. 13. livehindustan — PNG College swarn jayanti — REJECT: samaroh. 14. livehindustan — Hanuman Dham sthapna divas — REJECT: maujoodgi. 15. livehindustan — andolankari samman — REJECT: samaroh. 16. Dainik Bhaskar — Census 2027 appeal — REJECT: kaam nahi. 17. roshnidarpan — hand-pump ghoshna — REJECT: non-whitelist + ghoshna. 18. meat row — REJECT: MLA aaropi nahi + non-whitelist. 19. thenewsbomb "Amar Shaheed Diwan Singh Bisht" — REJECT: alag vyakti. 20. TOI Ankita Bhandari resort — REJECT: alag mamla, ye MLA nahi.

// ---- Udham Singh Nagar district batch (researched 2026-10-17) ----

uttarakhandWorks['adesh-singh-chauhan'] = [
  {
    title: 'Jaspur ke vidhayak Adesh Singh Chauhan ne apni Vidhayak Nidhi se bani Fire Station ki sadak aur Sarvarkheda anaaj mandi ki sadak ka lokarpan kiya, dono par kul Rs 15 lakh kharch hue',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-local-mla-inaugurates-new-roads-with-fund-allocation-201790256049820.html',
    date: '2026-09-24',
    note: 'Post-event report. Patrampur road par Fire Station ki sadak aur Sarvarkheda anaaj mandi ki sadak — dono Vidhayak Nidhi se, vyaktigat lokarpan. Page par date nahi thi; article me event "Guruwaar" tha aur crawl se Sep 24, 2026 anumaanit hai (doosre independent worker ne bhi isi event ki pushti ki).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Vidhayak Adesh Singh Chauhan ne apni nidhi se Sanyasiwala, Lalpur aur Hariyawala gaon me bani Rs 17 lakh ki CC tiles sadkon ka lokarpan karaya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-mla-inaugurates-roads-in-jaspur-201785502972658.html',
    date: '2026-07-31',
    note: 'Post-event report. Teen gaon ki CC tiles sadkein (lagbhag Rs 17 lakh) Vidhayak Nidhi se bani, vyaktigat lokarpan. Page par date nahi thi; article me "Shukravaar" aur crawl se Jul 31, 2026 anumaanit hai (doosre independent worker ne bhi isi event ki pushti ki).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Vidhayak Adesh Singh Chauhan ne apni nidhi se Dharmapur, Shyamnagar, Babarkheda aur Kunda me bani Rs 40 lakh ki CC tiles sadkon ka lokarpan karaya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-mla-inaugurates-cc-tile-roads-in-four-villages-with-40-lakh-investment-201782736557875.html',
    date: '2026-06-29',
    note: 'Post-event report. Chaar gaon ki CC tiles sadkein (Rs 40 lakh) Vidhayak Nidhi se, vyaktigat lokarpan. Page par date nahi thi; article me "Somvaar" aur crawl se Jun 29, 2026 anumaanit hai (doosre independent worker ne bhi isi event ki pushti ki).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Adesh Singh Chauhan ne apni Vidhayak Nidhi se Pooranpur aur Nadehi gaon me bane Rs 15 lakh ke kharanja aur CC tiles sadkon ka lokarpan karaya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-mla-inaugurates-road-construction-projects-worth-1-5-million-in-puranpur-and-nadehi-villages-201782564076189.html',
    date: '2026-06-27',
    note: 'Post-event report. Do gaon me kharanja aur CC tiles sadkein (Rs 15 lakh) Vidhayak Nidhi se, vyaktigat lokarpan. Page par date nahi thi; article me "Shanivaar" aur crawl se Jun 27, 2026 anumaanit hai (doosre independent worker ne bhi isi event ki pushti ki).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Adesh Singh Chauhan ne Kaliyawala road par pashu chikitsalaya ki deewar, Gangwala aur Gaura Farm me CC tiles sadkon aur Rahmapur me kabristan ki kharanja sadak — kul Rs 25 lakh ke chaar karyon ka lokarpan karaya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-mla-orders-chauhan-inaugurates-25-lakhs-development-projects-in-jaspur-201777553894499.html',
    date: '2026-04-30',
    note: 'Post-event report. Vidhayak ne chaar karyon ka vyaktigat lokarpan kiya; BDO aur anya adhikari bhi maujood the. Article me fund ka srot (Vidhayak Nidhi ya sarkari yojana) spasht nahi kiya gaya isliye fund disclosure nahi joda gaya. Page par date nahi thi; article me "Guruwaar" aur crawl se Apr 30, 2026 anumaanit hai (doosre independent worker ne bhi isi event ki pushti ki).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Vidhayak Adesh Singh Chauhan ne apni nidhi se Bhogpur me do, Baintwala, Missarwala aur Kalyanpur me ek-ek — kul paanch CC tiles sadkon ka lokarpan karaya, kul lagat Rs 25 lakh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-mla-aadesh-chauhan-inaugurates-cc-tiles-roads-worth-25-lakhs-in-jaspur-201774875989663.html',
    date: '2026-03-29',
    note: 'Post-event report. Paanch CC tiles sadkein (Rs 25 lakh) Vidhayak Nidhi se, vyaktigat lokarpan. Page par date Mar 30, 2026 thi aur event "Ravivaar" ka tha, isliye event-date Mar 29, 2026 li gayi (doosre independent worker ne bhi isi event ki pushti ki).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Adesh Singh Chauhan ne Murliwala, Manjhra, Bagichi aur Bhagwantpur gaon me keechad-jalbharaav door karne wale Rs 40 lakh ke karyon — CC tiles sadken, mandir parisar me tin shed aur kabristan ki chaardeewari — ka lokarpan karaya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-vidhayak-aadesh-chauhan-inaugurates-40-lakh-rupees-development-works-in-jaspur-villages-201771593412579.html',
    date: '2026-02-20',
    note: 'Post-event report (Feb 20, 2026; event "Shukravaar" tha). Vidhayak ne chaar gaon me poore hue karyon ka vyaktigat lokarpan kiya. Article me fund ka srot (Vidhayak Nidhi ya anya) spasht nahi kiya gaya isliye fund disclosure nahi joda gaya (doosre independent worker ne bhi isi event ki pushti ki).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Vidhayak Adesh Singh Chauhan ne apni nidhi se Nivarmandi aur Manorathpur me CC tiles sadkon aur Aamka me madarsa kaksh — kul Rs 50 lakh ke vikas karyon ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-mla-aadesh-chauhan-inaugurates-development-projects-worth-50-lakh-in-jasipur-201770382771751.html',
    date: '2026-02-06',
    note: 'Post-event report (Feb 06, 2026; event "Shukravaar" tha). Gram Nivarmandi, Manorathpur me CC tiles sadkein aur Aamka me madarsa kaksh — Vidhayak Nidhi se Rs 50 lakh, vyaktigat lokarpan (doosre independent worker ne bhi isi event ki pushti ki).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Adesh Singh Chauhan ne Shivrajpur Patti aur Bailjudi gaon me Rs 14 lakh se bani teen CC tiles sadkon ka lokarpan karaya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-mla-inaugurates-rs-14-lakh-roads-in-jasapur-villages-201765540951221.html',
    date: '2025-12-12',
    note: 'Post-event report (Dec 12, 2025). Do gaon me teen CC tiles sadkein (Rs 14 lakh) ka vyaktigat lokarpan. Article me fund ka srot spasht nahi kiya gaya isliye fund disclosure nahi joda gaya (doosre independent worker ne bhi isi event ki pushti ki).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: '2012 ke Jaspur highway blockade case me Kashipur court ne Jaspur ke Congress MLA Adesh Singh Chauhan samet 24 aaropiyon ke khilaf non-bailable warrant jaari kiye',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/dehradun/2012-hway-blockade-ukhand-netas-seek-legal-relief-after-nbws/articleshow/134443427.cms',
    date: '2026-09-23',
    note: 'Negative entry (stage-accurate: NBW stage, trial pending). 15 Jul 2012 ko Kashipur-Jaspur highway jam par Jaspur kotwali me FIR darj hui thi; Oct 2014 me chargesheet par sangyaan, 2019 me sarkar ki case-vaapsi arzi kharij, 14 Aug 2026 ko Nainital High Court ne sarkar ki yachika kharij karke trial tez karne ka nirdesh diya — yahi vartaman karyakaal ka legal development hai; uske baad Kashipur court ne 24 aaropiyon ke khilaf NBW jaari kiye. Pehchan TOI me "Jaspur Congress MLA Aadesh Chauhan" se verify. TOI ne report kiya unse comment nahi mil saka — MLA ka jawab uplabdh nahi, anupasthiti disclosed hai. Koi conviction nahi; purana political protest-era case. Date: TOI byline TNN / Sep 23, 2026, 22:59 IST (coordinator-verified).',
    period: '2022-2027',
  },
];
// REJECT-LOG (adesh-singh-chauhan, Jaspur): 1. ASHA/bojan-mata samman samaroh (Hindustan, Sep 2026) — suit-vitran community samaroh, kaam nahi — REJECT. 2. "Congress sarkar bani to stadium banega" promise (Jagran, Sep 2025) — conditional ghoshna, koi dastaveji nateeja nahi — REJECT. 3. Patrampur jungle safari par maange (Jagran, Feb 2026) — maang + maukhik nirdesh, dastaveji nateeja nahi — REJECT. 4. Bhaanje ke apaharan-prayaas ka mamla (Amar Ujala, Aug 2025) — parivar ka mamla, MLA aaropi nahi — REJECT. 5. Kichha kotwali me doosre neta ke virodh me maujoodgi (Amar Ujala, Sep 2026) — political maujoodgi — REJECT. 6. Pritam Singh interview yatra zikr (Amar Ujala, Oct 2026) — political — REJECT. 7. Rajya andolankari samman samaroh (Amar Ujala, Nov 2025) — mukhya-atithi — REJECT. 8. CM Dhami ki Jaspur visit (mahanaad, ~Mar 2024) — CM ki Rs 28.20 crore ghoshnaen, sirf maang-patra + non-whitelist — REJECT. 9. Fire Station road mahanaad report (Sep 2026) — whitelist nahi, sirf date-corroboration — REJECT. 10. public.app video (Sep 2026) — non-whitelist — REJECT. 11. Dainik Bhaskar "Bharatpur Road se Dadhi Farm ~2 km sadak shilanyas" (~Aug 2026) — fund rashi+srot dono undisclosed, weak entry — REJECT. 12. "BJP MLA Adesh Chauhan sentenced 6 months by CBI court" (ETV/LatestLY/ET, May 2026) — namesake (Ranipur BJP MLA), hamare INC MLA nahi + parivar ka pre-term mamla — REJECT. 13. Ram Lalla idol remark controversy (OpIndia/HinduPost, Feb 2024) — koi FIR/janch nahi + non-whitelist — REJECT. 14. YouTube Jaspur jamin vivad dharna/firing aarop — YouTube-only, FIR pushti nahi — REJECT. RETRY-LEAD: khabaruttarakhand.com RTI Vidhayak Nidhi data (whitelist-bahar; aggregate: 251 prastav, Rs 1726.18 lakh, 250 swikrit, Rs 1594.13 lakh kharch, 228 poore/22 pragati). NOTE: do independent workers ne 9/9 works events alag-alag confirm kiye — cross-verified.

uttarakhandWorks['trilok-singh-cheema'] = [
  {
    title: 'Kashipur ke wardon aur gaon me Rs 1.5 crore ki nau sadkon ka shilanyas MLA Trilok Singh Cheema ne kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/udham-singh-nagar/nine-roads-will-be-constructed-at-a-cost-of-15-crores-kashipur-news-c-235-1-ksp1006-116206-2024-08-28',
    date: '2024-08-28',
    note: 'Vyakigat shilanyas event; MLA ne khud neev rakhi. Kul fund Rs 1.5 crore; fund ka srot report me nahi bataya gaya. Ward 1 Sainik Colony, Ward 2 Jaspur Khurd, Ward 3 Pashupati Vihar-Krishna Colony, Khadakpur Devipura line-paar colony me tiles marg, gram Paiga Dakshin me 100 meter kharanja, Ekta Colony me nala nirman shamil. Quality nirman ka MLA ka ashwasan.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Kashipur ki Krishna Colony me Rs 36 lakh ki 200 meter tiles sadak ka shilanyas MLA Trilok Singh Cheema ne kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/video/uttarakhand/udham-singh-nagar/video-mla-trilok-singh-cheema-laid-the-foundation-stone-for-the-tile-road-in-kashipur-2025-12-04',
    date: '2025-12-04',
    note: 'Vyakigat shilanyas; fund Rs 36 lakh, srot report me nahi. January ke ant tak sadak taiyaar hone ka MLA ka dawa; colony ki jal-bharao samasya se rahat ka uddeshya. Post-event Amar Ujala video report.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Kashipur ke Ward 5 Om Vihar Colony me do tiles sadkon ka shilanyas MLA Trilok Singh Cheema ne kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-kashipur-mla-trilok-singh-chima-lays-foundation-stone-for-two-roads-201765980914656.html',
    date: '2025-12-17',
    note: 'Vyakigat shilanyas event; Bahalla pulia se Jaiprakash ke ghar tak 120 meter tiles marg aur Chandrapal Yadav ke ghar se Balam Singh Niyal ke ghar tak 130 meter tiles marg. Fund ki rakam report me nahi, isliye fund ka srot undisclosed.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Gram Ramnagar-Kashipur me Rs 40.90 lakh ki do tiles sadkon ka shilanyas MLA Trilok Singh Cheema ne kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-trilok-singh-chima-launches-two-roads-construction-in-kashi-pur-worth-40-90-lakhs-201766840665171.html',
    date: '2025-12-27',
    note: 'Vyakigat shilanyas; kul Rs 40.90 lakh, fund ka srot report me nahi. Ramnagar-Kashipur me 240 meter tiles marg aur Ramchandra ke makan se Maniram ke makan ke paas CC road tak 130 meter tiles marg. Barsaat me jal-bharao se rahat ka uddeshya.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
];
// REJECT-LOG (trilok-singh-cheema, Kashipur): 1. ETV Bharat 2024-03-28 (ROB/bypass/nalika/parking uplabdhiyan) — non-whitelist + press-conference dawa matra — REJECT. 2. Amar Ujala video 2025-05-12 (CM ne 200-bed hospital Rs 65 crore sanctioned; 13 sadak Rs 10 crore) — CM-ghoshna ki MLA dwara sirf jaankari — REJECT. 3. Amar Ujala 2026-01-06 (Kuddiyowala sadak ghoshna) — sirf ghoshna — REJECT. 4. Suragilal News YouTube (2.16 lakh aid + Bhogpur sadak shilanyas) — YouTube-only — REJECT. 5. Hindustan 2026-02 (4.65 lakh, 19 beneficiaries) + Amar Ujala 2025-08-05 (1.45 lakh, 6 beneficiaries) CM Vivekadheen Kosh cheque vitaran — daan/rahat — REJECT. 6. Khabar Partal (Spectrum Mall salon udghatan) — non-whitelist + private business — REJECT. 7. Hindustan 2025-12-29 CM Championship Trophy sports event — mukhya-atithi samaroh — REJECT. 8. shabddoot.com do Ramlila shubharambh — non-whitelist + cultural — REJECT. 9. Hindustan Sep 2026 Seva Sankalp school event — chief-guest — REJECT. 10. ThePrint Oct 2022 UP Police firing/MLA protest — MLA ke khilaf kuch nahi — REJECT. AGE-LEAD (coordinator-verified): MyNeta 2022 halafnama (candidate_id 198) me age 55 + English Wikipedia "born 1967" — Oct 2026 me umr ~59.

uttarakhandWorks['yashpal-arya'] = [
  {
    title: 'Bajpur ki teen gram sabhaon me kul Rs 2 crore ki lagat se multipurpose bhavan aur paidal margon ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-yashpal-arya-lays-foundation-stones-for-multi-purpose-buildings-in-bazpur-201759241180011.html',
    date: '2025-09-30',
    note: 'Date article me chhapi nahi — Tuesday hone aur story-ID kram (28 Oct 2025 wali report se pehle) ke aadhaar par 30 Sep 2025 inferred, disclosed. Singhali, Bheekampuri aur Maholi Chain me Rs 60-60 lakh ke bhavan; report me fund srot (MLA Nidhi/state yojna) disclose nahi.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Bajpur ward 11 me sant nirankari bhawan ke paas Rs 11 lakh ki lagat se sadak ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-yashpal-arya-lays-foundation-stone-for-road-development-in-bajpur-criticizes-bjp-government-201761661466664.html',
    date: '2025-10-28',
    note: 'Ussi daure ki Rs 5 lakh mandir-hall aur Rs 15 lakh gurudwara ki ghoshnayen sirf announcement thi — koi shilanyas ya vitaran report me nahi, isliye unki entry nahi. Rajnaitik bayan entry nahi.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Kundeshwari kshetra me Rs 67 lakh ki lagat se marg ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-yashpal-arya-meets-locals-in-harsan-initiates-development-projects-in-kundeshwari-area-201762957205584.html',
    date: '2025-11-12',
    note: 'Vidhayak ke roop me kshetra-bhraman ka kaam; LoP ke vipakshi bayan entry me shaamil nahi. Fund srot report me disclose nahi.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Shivnagar me Rs 5 lakh ki lagat se bani sadak ka lokarpan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-yashpal-arya-meets-locals-in-harsan-initiates-development-projects-in-kundeshwari-area-201762957205584.html',
    date: '2025-11-12',
    note: 'Upar wale hi daure me lokarpan; vyaktigat lokarpan post-event report ke aadhaar par. Fund srot report me disclose nahi.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Bajpur ke Adarsh Kanya Inter College me nava-nirmit hall aur mahila sashaktikaran wall ka lokarpan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/kashipur/story-yashpal-arya-inaugurates-new-hall-and-women-empowerment-wall-at-adarsh-kanya-inter-college-201765460372069.html',
    date: '2025-12-11',
    note: 'Report me laagat aur fund srot disclose nahi; vyaktigat lokarpan post-event reporting ke aadhaar par entry.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (yashpal-arya, Bajpur): 1. inanews.org "70 lakh shilanyas-lokarpan" + blogspot mirror — non-whitelist — REJECT. 2. garjana.in "Rs 3 crore lokarpan-shilanyas" — non-whitelist — REJECT. 3. Jagran Sep 2026 Saini-community article — sirf mandir/gurudwara fund ghoshnayen (Rs 2-5 lakh), koi shilanyas nahi — REJECT. 4. LiveHindustan 28 Oct 2025 Rs 5 lakh mandir-hall + Rs 15 lakh gurudwara — sirf ghoshna — REJECT. 5. LiveHindustan May 2026 Harsan Rs 5 lakh road + Rs 6 lakh gurudwara — sirf ghoshna — REJECT. 6. LiveHindustan Sep 2026 Friday visit — Vidhayak Nidhi ghoshnayen bina vitaran — REJECT. 7. Amar Ujala 2025-05-03 camp-office — Rs 2.5 lakh temple ghoshna + sunwai — REJECT. 8. Amar Ujala "45 crore MLA fund released" Jun 2025 — generic district news — REJECT. 9. Jagran Eklavya Vidyalaya Rs 16.5 crore Dihori — pre-term (2017-22) — REJECT. 10. ANI/Latestly — CM Dhami Rs 16 crore Bajpur program Mar 2024 — dusre neta ka karyakram — REJECT. 11. Zee News GNM Medical College grass-cutting — non-whitelist + nirikshan — REJECT. 12. Voter-deletion letter, Mussoorie land aarop, budget/Ankita statements — LoP "rai", kaam nahi — REJECT. 13. Wikipedia/New Indian Express background pieces — koi kaam-entry nahi — REJECT.

uttarakhandWorks['arvind-pandey'] = [
  {
    title: 'MLA ka dawa — Gularbhoj me 13.5 km tourist sadak ke liye Rs 18.39 crore ki sarkari swikriti unke pratinivedan ka nateeja hai',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-road-construction-approved-in-gular-bhoj-to-boost-tourism-and-connectivity-201783943049603.html',
    date: '2026-07-14',
    note: 'Swikriti rajya shasan ki hai; MLA ne media ko iski ghoshna ki aur apne pratinivedan ka shrey liya — ekmatra aadhaar MLA ka apna bayan hai, isliye dawa badge. Pehli kist Rs 1.40 crore jaari hone ki sarkari report hai. Credit capped: rajya yojna ka kaam, MLA ki dastaveji bhoomika maang/pratinivedan aur ghoshna tak. Date search ke "95 days ago" se anumaanit (17 Oct 2026), reasoning disclosed.',
    period: '2022-2027',
  },
  {
    title: 'Majra Mardan me Dera Baba Bhuman Shah mandir tak jaane wale 400 meter marg ka MLA Arvind Pandey ne shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/amp/uttarakhand/udham-singh-nagar/the-mla-laid-the-foundation-stone-for-the-construction-of-the-temple-road-rudrapur-news-c-242-1-rdp1025-133540-2025-11-29',
    date: '2025-11-29',
    note: 'MLA ne khud fita kaatkar shilanyas kiya; unhone kaha graminon aur dera samarthakon ki varshon purani maang poori hui. Report me marg ki lagat ya fund ka srot nahi diya gaya hai — isliye fund disclosure wala hissa khaali hai. Mandir samiti ke adhyaksh aur sachiv sahit sthaniya log maujood the.',
    period: '2022-2027',
  },
  {
    title: 'Gadarpur SDM ne MLA Arvind Pandey ke Gularbhoj camp office par atikraman ka notice diya aur 15 din me hatane ko kaha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/udhamsingh-nagar-bjp-mla-arvind-pandey-said-administration-should-demolish-my-encroachment-soon-40149428.html',
    date: '2026-02-21',
    note: '19 Jan 2026 ko tehsil prashasan ne Gularbhoj ke Santosh Nagar ward 3 sthit camp office par atikraman ka notice bete Atul Pandey ko diya (15 din me hatane ke nirdesh). 21 Feb 2026 ko MLA ne khud SDM ko patra likhkar kaha atikraman turant toda jaye. SDM Richa Singh ne jawab diya ki notice ke anusar sambandhit paksh khud atikraman hatakar vibhag ko suchit kare. Karvayi tehsil janch aur High Court aadesh ke palan me hui (report me writ 192/2024 ka hawala). Koi FIR ya giraftari nahi hui; mamla notice stage par hai, dosh siddh nahi hua. MLA ka jawab note me hai.',
    period: '2022-2027',
  },
  {
    title: '2012 ke highway blockade case me Kashipur court ne NBW jaari kiya, Gadarpur MLA Arvind Pandey 24 aaropiyon me shamil hain',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/dehradun/2012-hway-blockade-ukhand-netas-seek-legal-relief-after-nbws/articleshow/134443427.cms',
    date: '2026-09-23',
    note: 'Negative entry (stage-accurate: NBW stage, trial pending). 15 July 2012 ko Jaspur me Kashipur-Jaspur highway jam; tatkalin Jaspur kotwali in-charge JC Pathak ki shikayat par police ne case darj kiya. Chargesheet par court ne Oct 2014 me sangyaan liya, 2019 me sarkar ki case-wapsi arzi kharij, High Court ne 14 Aug 2026 ko sarkar ki yachika kharij karke jald sunvai ka nirdesh diya — yahi vartaman karyakaal ka legal development hai; uske baad NBW jaari hue. Pehchan TOI me "Gadarpur BJP MLA Arvind Pandey" se verify. MLA ka jawab note me hai: "we respect the judiciary and will appear before the court and comply with the legal proceedings." Doshsiddhi nahi hui hai; NBW stage hai. Date: TOI byline TNN / Sep 23, 2026, 22:59 IST (coordinator-verified).',
    period: '2022-2027',
  },
];
// REJECT-LOG (arvind-pandey, Gadarpur): 1. Dineshpur Rs 2.12 crore swikriti (Hindustan, 2026-09-03) — COORDINATOR-DROP: shasanadesh ki sirf jaankari class, MLA ki bhoomika sirf media ko jaankari dena; Tehri/Rudraprayag rulings se mel — DROP. 2. Jagran "CM dhami gadarpur ko aaj denge saugaat" — pre-event announcement; CM ka lokarpan, MLA bhoomika nahi — REJECT. 3. Aaj Ki Kiran Keshowala 2.6 km sadak Rs 1.44 crore shilanyas + Rs 2 crore peyjal lokarpan — non-whitelist — REJECT. 4. Krishna Varta Rajpura ~4 km damri road — non-whitelist — REJECT. 5. Amar Ujala Gadarpur-Matkota chaudikaran (CM virtual shilanyas) — CM event, MLA bhoomika disclosed nahi — REJECT. 6. Amar Ujala Gadarpur CHC oxygen plant Rs 23.99 lakh Vidhayak Nidhi — sanction FY 2021-22 + shubharambh Oct 2021, pre-term — REJECT. 7. Jagran Rs 130 crore swikriti story — CM swikriti, MLA bhoomika nahi — REJECT. 8. Amar Ujala Gadarpur-Kichha chaar sadken (2026-10-15) — CM ghoshna par PWD tender — REJECT. 9. LiveHindustan kalyankari shivir — nirikshan/mukhya-atithi — REJECT. 10. Garhwal Post bhaiyon/parivar land-grab FIR aarop — parivar ka mamla, MLA khud aaropi nahi — REJECT. 11. Garhwal Post DGP narco test maang — non-whitelist + political — REJECT. 12. Wikipedia "SDM, CO ko dhamkane ka case" — pre-term, current legal development nahi — REJECT. 13. New Indian Express CM Dhami Gadarpur visit (2026-06-14) — political meeting — REJECT.

uttarakhandWorks['shiv-arora'] = [
  {
    title: 'Shivpur gaon me Vidhayak Nidhi se bane samudayik bhavan aur tin shed ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/udham-singh-nagar/community-centre-inaugurated-rudrapur-news-c-242-1-rdp1006-124897-2025-05-20',
    date: '2025-05-20',
    note: 'Vidhayak Nidhi se bana samudayik bhavan aur tin shed — MLA Shiv Arora ne vyaktigat roop se lokarpan kiya. Chunav ke samay Shivpur ke graminon ki maang thi jo poori hui. Tareekh URL se li gayi hai; article me byline-date nahi thi.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Transit Camp me Chamunda Mandir se jheel tak Rs 2 crore ki 450 meter sadak ka shilanyas',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/udham-singh-nagar/the-foundation-stone-was-laid-for-the-road-to-be-built-at-a-cost-of-two-crores-rudrapur-news-c-242-1-rdp1006-126031-2025-06-17',
    date: '2025-06-17',
    note: 'Rajya yojna (state scheme) se swikrit sadak; 12-14 meter chaudi, white topping technology. MLA ne khud kaha unhone ise rajya yojna se swikrit karwaya. Tareekh URL-slug se hai; article me event ravivaar ki shaam bataya gaya (15 June 2025).',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Chamunda Mandir-jheel wali Rs 2 crore ki 450 meter sadak ka lokarpan poora hone par',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-rudrapur-mla-inaugurates-new-road-connecting-lake-to-chamunda-temple-easing-traffic-issues-201778421096768.html',
    date: '2026-05-10',
    note: 'Upari shilanyas wali sadak ka poora-kaam lokarpan — MLA ne vyaktigat roop se phita kaata. Rajya yojna se Rs 2 crore ki swikriti, PWD ne banayi; MLA ka kehna hai unhone 2022 me vidhayak banne ke baad iska prastav CM ko bheja tha. Rudrapur ki pehli white-topping sadak. Tareekh article image-date (10 May 2026, ravivaar) se li gayi hai.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Khatola gaon me Rs 30 lakh ki Radhakantpur-Motipur sadak ka shilanyas',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-rudrapur-mla-shiv-arora-launches-development-projects-worth-over-1-3-crore-201768054999847.html',
    date: '2026-01-10',
    note: 'Khatola me Rs 1.3 crore se zyada ke vikas karyon ke ek hi event me se shilanyas hissa — MLA ne vyaktigat roop se narial toda. Fund ka srot article me itemized nahi bataya gaya, isliye credit capped hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Khatola me Rs 39 lakh ki 2.5 km sadak-satah sudhaar ka lokarpan, shaheed Asit Sarkar smarak-dwar aur Buksa Samaj Bhavan ka udghatan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-rudrapur-mla-shiv-arora-launches-development-projects-worth-over-1-3-crore-201768054999847.html',
    date: '2026-01-10',
    note: 'Ussi Khatola event ka lokarpan hissa — MLA ne vyaktigat roop se lokarpan/udghatan kiya. Rs 1.3 crore+ package me sadak, mandir saundaryikaran, sarvajanik bhavan, tin shed, gate shamil the.',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Barirai-Makarandpur me Vidhayak Nidhi se Rs 25 lakh ke vishaal tin shed ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-shiv-arora-fulfills-20-year-demand-with-construction-of-large-tin-shed-in-rudrapur-201766751451572.html',
    date: '2025-12-26',
    note: 'Vidhayak Nidhi se Rs 25 lakh ki lagat se banne wale tin shed ka MLA ne narial todkar shilanyas kiya. Article ke anusaar ye 20 saal purani maang thi — Bangali samaj ke dharmik-samajik ayojanon (sankirtan, bhandare, vivah) ke liye sthayi shed.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'MLA ka dawa — Rudrapur medical college me 100 MBBS seats ki kendriya manzoori unke lagatar prayason ka nateeja hai',
    category: 'Aspataal',
    badge: 'dawa',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/udham-singh-nagar/politics-started-on-rudrapur-medical-college-2026-10-14',
    date: '2026-10-14',
    note: 'MLA ne 2027-28 ke liye 100 MBBS seats ki kendriya swikriti ko apni badi uplabdhi bataya; unke anusaar unhone CM Dhami aur swasthya mantri se is mudde par lagatar baat ki thi. Caveat: shreya par vivaad hai — poorv MLA Rajesh Shukla ne bhi dawa kiya (Congress-sarkar ke samay shuruaat, kendra se Rs 345 crore aur CM se Rs 656 crore manzoor). Ekmatra aadhaar MLA ka apna bayan hai, isliye dawa badge.',
    period: '2022-2027',
  },
];
// REJECT-LOG (shiv-arora, Rudrapur): 1. TOI railway underpass (Oct/Nov 2025) — MP Ajay Bhatt bhoomi-pujan + MLA nirikshan-promise; kaam shuru nahi — REJECT. 2. CM Dhami Rudrapur launch events (2025) — CM ke karyakram, MLA upasthit — REJECT. 3. Hindustan 4 Jan 2026 Rs 10 crore MP-event — MP ne lokarpan/shilanyas kiya, MLA upasthit; vyaktigat bhoomika dastavej nahi — REJECT. 4. Garhwal Post heli service (Apr 2026) — non-whitelist + kendriya Udaan yojna — REJECT. 5. Garhwal Post CII zonal office (Oct 2026) — non-whitelist + private body — REJECT. 6. Amar Ujala Ram Baraat (Oct 2026) — samudayik utsav — REJECT. 7. Amar Ujala Punjabi Sammelan (Sep 2026) — raajnaitik — REJECT. 8. Ring road Rs 1100 crore — NHAI/rajya pariyojna, MLA tippani matra — REJECT. 9. SIR meeting vivaad (Jagran, Aug 2026) — FIR poorv-MLA Thukral ke khilaf; MLA ke khilaf FIR nahi — REJECT. 10. Gas booking fraud (The Week/PTI, Mar 2026) — shikayat/janch, koi fund/sanction nahi — REJECT. 11. TOI mazaar-demolition (Apr 2025) — MLA aaropi nahi — REJECT. 12. Vidhankesari Trishul/Damru chowk (Jun 2025) — non-whitelist + pre-event — REJECT. 13. Uttarakhandsatya advocate parking tin shed (Sep 2026) — non-whitelist — REJECT. 14. Vasundharadeep Maheshpur mandir lokarpan (Oct 2026) — non-whitelist — REJECT. 15. National News Network Bhadipura ramlila farsh (Oct 2026) — non-whitelist — REJECT. 16. Khabarpartal 4km hotmix road Rs 1.94cr (2025) — non-whitelist — REJECT. 17. Vasundharadeep Shivnagar mandir works (Oct 2026) — non-whitelist — REJECT. 18. Six Sigma health camp (2026) — CSR camp, MLA mukhya-atithi — REJECT. 19. YouTube putla-dahan (Aug 2026) — non-whitelist, FIR pushti nahi — REJECT.

uttarakhandWorks['tilak-raj-behar'] = [
  {
    title: 'Kichha me MLA Tilak Raj Behar ne Rs 13 lakh ke teen nirmit vikas karyon ka lokarpan kiya',
    category: 'Any',
    stage: 'lokarpan',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-mp-tilkaraj-behad-inaugurates-development-projects-worth-13-lakhs-in-kichha-201774960714058.html',
    date: '2026-03-31',
    note: 'Itemized reporting: Godavari Colony, Ramnagar me Rs 3 lakh ki CC sadak aur Idea Colony, Lalpur me samudayik bhavan me Rs 4.18 lakh ki tiles ka kaam Vidhayak Nidhi se hua; Bhamraula me kabristan ki nali-sadak (Rs 6 lakh) zila panchayat se bana. Teenon ka lokarpan MLA ne swayam kiya, fund srot disclosed. Date article par printed.',
    period: '2022-2027',
  },
  {
    title: 'Kichha me Aditya Chowk se DD Chowk tak sadak chaudikaran ke phase-1 ke Rs 2.75 crore ki prashasnik-vittiya swikriti mili',
    category: 'Sadak',
    stage: 'swikriti',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/udham-singh-nagar/along-with-road-widening-in-kichha-lights-will-be-installed-between-the-dividers-rudrapur-news-c-242-1-shld1013-132157-2025-10-29',
    date: '2025-10-29',
    note: 'State PWD ki sarkari sadak hai — fund kendriya/state shasan ka, MLA ka koi niji fund role nahi; credit capped. MLA ne press me swikriti ki jaankari di aur apne pratinivedan ka shrey liya. Date article par printed.',
    period: '2022-2027',
  },
  {
    title: 'Gangapur me Rs 5.52 lakh ki do CC sadkon ka lokarpan aur 1.65 km mandir marg par Rs 86.83 lakh ki rajya-yojna swikriti',
    category: 'Sadak',
    stage: 'lokarpan',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-mla-tilkaraj-behad-inaugurates-development-projects-worth-13-73-lakhs-in-gangapur-and-anandpur-201781958677665.html',
    date: '2026-06-20',
    note: 'Gangapur-Anandpur me MLA ne Vidhayak Nidhi ki bani do CC sadkon ka lokarpan kiya; 1.65 km lambe mandir marg ke liye rajya yojna ke tahat Rs 86.83 lakh ki swikriti mili (MLA ka dawa: unke prastav par swikriti, credit capped). Source me headline 13.07 lakh aur body 13.73 lakh me antar hai — body ka figure liya gaya. Date anumaanit: search 17 Oct 2026 ko "118 days ago" dikha rahi thi aur article me "Shanivar" ka ullekh — event 20 Jun 2026 (Saturday), reasoning disclosed.',
    period: '2022-2027',
  },
  {
    title: 'Bhagwanpur me Rs 9 lakh ki 5 sampark sadken aur Satuia me Rs 1.34 lakh ki CC sadak ka lokarpan',
    category: 'Sadak',
    stage: 'lokarpan',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-mp-tilkaraj-behad-inaugurates-development-works-worth-10-34-lakh-in-rural-areas-201781099178554.html',
    date: '2026-06-10',
    note: 'Gramin kshetra me 175-meter lambi 5 sampark sadken (Rs 9 lakh) aur Satuia ki CC sadak (Rs 1.34 lakh) ka vyaktigat lokarpan; Vidhayak Nidhi ka itemized vitaran. Bhaga me 2 km sadak ke damarikaran ki sirf ghoshna thi — entry nahi, reject-log me. Date anumaanit: search "128 days ago" + article me "Budhvar" ka ullekh — event 10 Jun 2026 (Wednesday), reasoning disclosed.',
    period: '2022-2027',
  },
  {
    title: 'Kachchi Khamariya, Lalpur me Rs 19.28 lakh ke vikas karyon ka lokarpan aur Rs 1.38 crore ki nayi yojnaon ki swikriti',
    category: 'Any',
    stage: 'lokarpan',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-local-mla-tilkaraj-behad-inaugurates-development-projects-worth-19-28-lakh-201782394510608.html',
    date: '2026-06-25',
    note: 'Itemized: Kachchi Khamariya me Rs 13.50 lakh ki sadak, Lalpur ki Vasundhara Colony me mandir me Rs 2.99 lakh ka saundaryikaran, aur Hotel City Park ke paas Rs 2.79 lakh ki CC sadak — teenon ka lokarpan MLA ne kiya. Rs 1.38 crore ki nayi yojnaon ki swikriti ka dawa MLA ka tha lekin itemized nahi — isliye wo alag entry nahi, sirf note me darj. Date anumaanit: search "113 days ago" + article me "Guruvar" ka ullekh — event 25 Jun 2026 (Thursday), reasoning disclosed.',
    period: '2022-2027',
  },
  {
    title: 'GGIC Kichha me Rs 5.72 crore se naye bhavanon ke nirman ki swikriti, pehli kist Rs 2.29 crore jari',
    category: 'School',
    stage: 'swikriti',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-new-buildings-approved-at-government-girls-inter-college-kichha-for-5-72-crores-201764684543505.html',
    date: '2025-12-02',
    note: 'CM ne har MLA se 10 vikas karyon ka prastav manga tha — MLA ne ladkiyon ke liye naye inter college ki maang rakhi; sarvekshan ke baad shasan ne GGIC Kichha me naye bhavan (12 kaksh, teen-manzila, hall + har tal par toilet, purane bhavanon ki Rs 40 lakh se marammat) ki Rs 5.72 crore ki manjuri di, pehli kist Rs 2.29 crore jari. Fund sarkari, credit capped. 10 crore ke community hall ka shasanadesh "jald jari hone wala" bataya gaya tha — wo sirf bhavishya ki ghoshna thi, entry nahi.',
    period: '2022-2027',
  },
];
// REJECT-LOG (tilak-raj-behar, Kichha): 1. Ramleela manch saundaryikaran Rs 10 lakh (Oct 2026) — uttarakhandsatya.com non-whitelist — REJECT. 2. Pantnagar karmchari sangathan karyalaya chhat (Oct 2026) — thekichha.com non-whitelist — REJECT. 3. Rs 92.07 lakh vikas karya Shantipuri/Jawahar Nagar (Jan 2026) — khabarraftaar.com non-whitelist — REJECT. 4. Maharajpur Mod Rs 2.08 lakh sadak (Feb 2025) — indianazar.com non-whitelist — REJECT. 5. Maharajpur CC sadak lokarpan (Jun 2026) — bharatnewstime.com non-whitelist — REJECT. 6. Shimla-Kuraiya road punarnirman (Oct 2026, Amar Ujala) — CM shilanyas kar chuke, MLA sirf maujood — REJECT. 7. Smart meter shav-yatra virodh (Feb 2025) — virodh, kaam nahi — REJECT. 8. Lohri samaroh shubharambh (Jan 2026) — maujoodgi — REJECT. 9. Ward 12 kabristan maang (Mar 2026, Hindustan) — sirf maang — REJECT. 10. Rs 10 crore community hall ghoshna — "shasanadesh jald" — REJECT. 11. Bhaga 2 km damarikaran — ghoshna matra — REJECT. 12. Breach of privilege (Nov 2022) — raajneetik mudda — REJECT. 13. Strongroom thappad vivaad (Sep 2026) — MLA shikaar, koi FIR nahi — REJECT. 14. Khan Farm bhoomi vivaad (Jun 2026, TOI/Opindia) — rival aarop, koi FIR/janch nahi — REJECT. 15. Darau DSC fraud/Pant varsity CSO aarop (2025-26) — MLA shikayatkar, aaropi nahi — REJECT.

uttarakhandWorks['saurabh-bahuguna'] = [
  {
    title: 'Saurabh Bahuguna ne Sitarganj ke Shantipuri number 4 Chandrapuri me lagbhag Rs 22 lakh ke vikas karyon ka shilanyas kiya, jinmein Shiv mandir me Rs 5 lakh ka tin shed aur do hotmix sadken shamil hain',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-minister-saurabh-bahuguna-initiates-development-projects-worth-22-lakhs-in-shantipuri-uttarakhand-201764329974184.html',
    date: '2025-11-28',
    note: 'Teenon karyon ka shilanyas Bahuguna ne vyaktigat roop se kiya — tin shed Rs 5 lakh, Shantipuri 4 se Beni Mazar tak Rs 8.75 lakh ki hotmix sadak, Shantipuri se Jaynagar tak Rs 8.34 lakh ki hotmix sadak. Ye unke mantri-era ka kaam hai; unke vibhag Pashupalan, Dairy Vikas, Matsyapalan, Ganna Vikas, Protocol, Kaushal Vikas/Rozgar hain — ye karyon un vibhagon se bahar ka hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Saurabh Bahuguna ne Sitarganj me Turkatisaur se Gaganpur tak Rs 95.20 lakh ki 4 km sadak ka shilanyas karke nirman karya shuru karaya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-saurabh-bahuguna-lays-foundation-stone-for-4-km-road-in-sitarganj-201774440382613.html',
    date: '2026-03-25',
    note: 'Khatima marg par Bateshwar ki chakki se Turkatisaur aur Kailashpuri nahar hote hue Gaganpur tak sadak; shasan se prashasnik evam vittiya swikriti mil chuki thi; Lok Nirman Vibhag karyadayi sanstha. Ye unke mantri-era ka kaam hai; unke vibhag Pashupalan, Dairy Vikas, Matsyapalan, Ganna Vikas, Protocol, Kaushal Vikas/Rozgar hain — sadak nirman un vibhagon se bahar ka karya hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Sitarganj ke gram Bara me 1.8 km sadak ke liye shasan ne Rs 1.07 crore ki prashasnik aur vittiya swikriti di, jiske liye MLA ke roop me Saurabh Bahuguna ne maang uthai thi',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-government-approves-1-07-crore-for-1-8-km-road-construction-in-sitarganj-201774875017252.html',
    date: '2026-03-30',
    note: 'Highway se shamshan ghat hote hue UP seema tak sadak; sanyukt sachiv Rajendra Singh Patiyal ne GO jaari kiya; rajya yojana se swikriti aur token money jaari. Kshetra ke logon ki maang par Bahuguna ne Lonivi ke mukhya abhiyanta ko aaganan banane ke nirdesh diye the. Ye unke mantri-era ka kaam hai; unke vibhag Pashupalan, Dairy Vikas, Matsyapalan, Ganna Vikas, Protocol, Kaushal Vikas/Rozgar hain — ye un vibhagon se bahar ka karya hai.',
    period: '2022-2027',
    stage: 'swikriti',
  },
  {
    title: 'Sitarganj me NH 74 se Baghauri tak 2 km grameen sadak ke chaudikaran aur sudridhikaran ke liye Rs 43 lakh ki vittiya evam prashasnik swikriti mili',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    sourceUrl: 'https://www.amarujala.com/uttarakhand/udham-singh-nagar/a-two-km-long-road-will-be-constructed-at-a-cost-of-rs-43-lakh-sitarganj-news-c-236-1-ktm1001-109198-2025-04-30',
    date: '2025-04-29',
    note: 'Anusachiv Subhash Chandra ne GO jaari kiya (article ke anusar mangalwar, yani 29 April 2025); rajya yojana se swikriti, token money jaari, Lonivi karyadayi sanstha. Bahuguna ki vyaktigat bhoomika sirf itni darj hai ki block pramukh Kamaljeet Kaur ne unka aabhaar jataya — credit capped. Ye unke mantri-era ka kaam hai; unke vibhag Pashupalan, Dairy Vikas, Matsyapalan, Ganna Vikas, Protocol, Kaushal Vikas/Rozgar hain — ye un vibhagon se bahar ka karya hai.',
    period: '2022-2027',
    stage: 'swikriti',
  },
  {
    title: 'Shaktifarm ke Primary Health Centre ka Community Health Centre me uchchikaran ho gaya, jiska shasanadesh swasthya sachiv ne jaari kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-community-health-center-upgradation-in-shaktifarm-enhanced-healthcare-facilities-announced-201763389698631.html',
    date: '2025-11-17',
    note: 'Swasthya sachiv Dr R. Rajesh Kumar ne GO jaari kiya; reporter ne uchchikaran ka shrey Bahuguna ke prayason ko diya, aur unhone khud CM Dhami ka aabhaar jataya — credit capped. Bhavan nirman aur visheshagya doctors ki tainati ab baaki hai. Ye unke mantri-era ka kaam hai; swasthya vibhag unke paas nahi (Subodh Uniyal ke paas hai), isliye ye unke mantri-vibhagon se bahar ka karya hai.',
    period: '2022-2027',
    stage: 'swikriti',
  },
  {
    title: 'Sitarganj shahar ki drainage vyavastha ke liye Rs 16.50 crore ki DPR taiyaar hui aur Saurabh Bahuguna ne uski swikriti dilayi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-sitarganj-municipality-achieves-development-milestones-in-one-year-201770464925308.html',
    date: '2026-02-07',
    note: 'Nagar palika ke ek saal ke report-karyakram me khulasa; Lonivi ke sahyog se DPR taiyaar, mantri ne swikriti dilayi — abhi DPR-star par hai, nirman swikriti pending. Credit reported "unke prayason se" — capped. Ye unke mantri-era ka kaam hai; unke vibhag Pashupalan, Dairy Vikas, Matsyapalan, Ganna Vikas, Protocol, Kaushal Vikas/Rozgar hain — drainage un vibhagon se bahar ka karya hai.',
    period: '2022-2027',
    stage: 'swikriti',
  },
  {
    title: 'RTI data ke mutabik Saurabh Bahuguna ne FY 2022-23 se June 2026 tak apni Vidhayak Nidhi ka 72 percent kharch kiya aur mantriyon me doosre sthan par rahe',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran',
    sourceUrl: 'https://www.jagran.com/uttarakhand/udhamsingh-nagar-uttarakhand-ministers-lag-behind-cm-dhami-in-mla-fund-spend-40368984.html',
    date: '2026-09-10',
    note: 'RTI karyakarta Nadeem Uddin ko gramya vikas aayukt karyalaya se mili jankari; kul Rs 1664 crore me se 66 percent kharch; Roorkee ke Pradeep Batra 77 percent ke saath pehle, Bahuguna 72 percent ke saath doosre. Ye unke mantri-era me seat par hui asal Vidhayak Nidhi vitaran ka documented record hai; aadhikarik Vidhayak Nidhi FY 2023-24 se Rs 5 crore/seat/saal (FY 2022-23 me Rs 3.75 crore) hai.',
    period: '2022-2027',
  },
  {
    title: 'Saurabh Bahuguna ne Shaktifarm ke Subhash Chowk par rajya vitt aayog mad se lage 121-feet unche high-mast tirange ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-inauguration-of-121-feet-flag-and-development-projects-in-shaktifarm-201789301370407.html',
    date: '2026-09-13',
    note: 'Nagar panchayat adhyaksh Sumit Mandal ke saath ravivaar ko lokarpan; fund disclosed: rajya vitt aayog mad. Usi karyakram me Rs 4.83 crore ke vikas karyon ka bhi shilanyas hua. Ye unke mantri-era ka kaam hai; unke vibhag Pashupalan, Dairy Vikas, Matsyapalan, Ganna Vikas, Protocol, Kaushal Vikas/Rozgar hain — ye un vibhagon se bahar ka karya hai. Date reasoning: article me "ravivaar" likha hai aur search timestamp lagbhag 33 din pehle ka hai, isliye 13 Sep 2026 (Sunday).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
  {
    title: 'Saurabh Bahuguna ne Shaktifarm me Rs 4.83 crore ke vikas karyon aur Rs 88.76 lakh ki teen aantrik sadkon ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-inauguration-of-121-feet-flag-and-development-projects-in-shaktifarm-201789301370407.html',
    date: '2026-09-13',
    note: 'Gurugram, Basgar aur Arvind Nagar kshetron me teen sadken (punarnirman), mukhya chauraha se gurudwara marg ki ore purani mandi ki sadak ka shilanyas, aur Gauri Kheda me tiles road ka lokarpan bhi isi din hua. Ye unke mantri-era ka kaam hai; unke vibhag Pashupalan, Dairy Vikas, Matsyapalan, Ganna Vikas, Protocol, Kaushal Vikas/Rozgar hain — ye un vibhagon se bahar ka karya hai.',
    period: '2022-2027',
    stage: 'shilanyas',
  },
  {
    title: 'Saurabh Bahuguna ne Rajkiya Uchchatar Madhyamik Vidyalaya Sisouna me inter tak uchchikrit kakshaon ka udghatan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Hindustan',
    sourceUrl: 'https://www.livehindustan.com/uttarakhand/rudrapur/story-minister-saurabh-bahuguna-honored-at-sisouna-school-elevation-ceremony-201790857329811.html',
    date: '2026-10-01',
    note: 'Vidyalaya ke inter college me uchchikrit hone par karyakram me udghatan; ab gaon me high school ke baad inter ki shiksha milegi. Ye unke mantri-era ka kaam hai; shiksha vibhag unke paas nahi (Dhan Singh Rawat ke paas hai), isliye ye unke mantri-vibhagon se bahar ka karya hai. Date reasoning: article me "guruwaar" likha hai aur crawl lagbhag 15 din pehle ka hai, isliye 1 Oct 2026 (Thursday).',
    period: '2022-2027',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (saurabh-bahuguna, Sitarganj): MANTRI-NIYAM rejects — 1. Prahlad Palasia Aqua Park Rs 58 crore + Rajnagar ice cream/powder plant Rs 52 crore — Matsyapalan vibhag inka hi + sirf ghoshna/ashwasan, shilanyas nahi — REJECT. 2. Shaktifarm vishal goshala ghoshna — Pashupalan vibhag inka + ghoshna matra — REJECT. 3. ITI/Skill development departmental kaam (Centres of Excellence, Tata MOU, ITI Sitarganj bhoomi poojan YouTube) — vibhag inka / non-whitelisted — REJECT. 4. Sitarganj tehsil bhavan udghatan (Aug 2024, Rs 407.53 lakh) — uk-stories/newstehkikat non-whitelisted — REJECT. 5. Bang Bhavan Shaktifarm shilanyas (May 2023, Rs 1.51 crore) — dainikjayantnews.com non-whitelisted; lokarpan (~Jan 2026) YouTube-only — REJECT. 6. Sitarganj-Bijti Majhola 4 km sadak shilanyas (Apr 2022, Rs 1.64 crore) — ETV Bharat non-whitelisted — REJECT. 7. Feb 20, 2023 sadak udghatan — uk-stories non-whitelisted — REJECT. 8. Gokul Nagar (Kichha) Rs 72 lakh dammar road shilanyas — vasundharadeep.news non-whitelisted — REJECT. 9. Gadharia Bagh-Noorpur Pico 1.5 km sadak lokarpan (Rs 71.91 lakh) — pahadbharat.com non-whitelisted — REJECT. 10. 5 km nagriye sadkon lokarpan (Rs 3.97 crore) + Rajnagar sadak shilanyas (Rs 1.05 crore), Mar 2023 — rnsindianews.com non-whitelisted — REJECT. 11. 100-bed Sitarganj aspataal CSR bhavan (Hindustan, ~May 2026) — page khula nahi (HTTP 402), snippet-only — REJECT. 12. Shaktifarm CHC bhavan DPR-exercise (Amar Ujala, Jan 2026) — CM ghoshna ka pre-work, Bahuguna ka sirf quote — REJECT. 13. 208-feet tiranga Sitarganj (Nov 2024) — khabarsagar.in non-whitelisted — REJECT. 14. Degree college Rs 5.5 crore building "ban kar taiyaar" — Hindustan me sirf MLA ka dawa, event nahi — REJECT. 15. "4 saal me 375 crore ke kaam" dawa — itemized nahi, MLA ka dawa — REJECT. 16. Shantipuri mini stadium + Gola nadi pul (Rs 18 crore estimate) — ashwasan/estimate, swikriti pending — REJECT. 17. Hi-tech library udghatan (2021, pre-term) + YouTube-only — REJECT. 18. MLA gunner maarpeet case (Oct 2021) — pre-term, wo aaropi nahi — REJECT. 19. Ration ghotala jaanch nirdesh — public.app non-whitelisted + wo khud aaropi nahi — REJECT. 20. Vijay Bahuguna (pita) purane Sitarganj vivad (2012) — parivar ke mamle — REJECT. NEGATIVE rejects — 21. Jul 2012 Prem Singh Rana FIR (marpeet/revolver) — pre-term, Mar 2022 ke baad legal development nahi — REJECT. 22. Oct 2022 hatya-sazish (4 giraftar, Hindu/NDTV/Tribune/TOI) — MLA khud VICTIM, aaropi nahi — REJECT. 23. Sisouna abhinandan samaroh / PG college seva sankalp / student union mulaqat — samaroh, kaam nahi — REJECT.

uttarakhandWorks['gopal-singh-rana'] = [];
// REJECT-LOG (gopal-singh-rana, Nanakmatta): 1. Hindustan (~Jun 2026) Khatima ward-12 70m sadak — Vidhayak Nidhi swikrit thi par mitti-bharan anumati na milne se kaam atka; post-event reporting nahi — REJECT. 2. Amar Ujala (2026-09-19) Echita-Bihi school upgradation dharna — sirf maang/dharna, nateeja nahi — REJECT. 3. Amar Ujala (Oct 2025) divyang-sahayarth mela shubharambh — mukhya-atithi samaroh — REJECT. 4. Amar Ujala (Sep 2025) poshan/street-plays — dusre karyakram me maujoodgi — REJECT. 5. Amar Ujala (2026-01-14) CM Khatima Uttarayani — CM ka lokarpan-shilanyas, MLA maujood — REJECT. 6. Dainik Jagran (Nov 2025) Janjatiya Gaurav Divas — CM ghoshnaen, gyapan poorv vidhayak ne diya — REJECT. 7. Dainik Bhaskar (Aug 2026) Adarsh Colony meet — sirf maang — REJECT. 8. Dainik Bhaskar (Aug 2026) women joining/SIR-BLO — raajnaitik, kaam nahi — REJECT. 9. Hindustan Ajay Bhatt Nanakmatta visit — MP announcements — REJECT. 10. ETV Bharat Naugawa Thaggu road — sirf bayan + non-whitelist — REJECT. 11. khabaruttarakhand.com/khabarkumoun.com/Garhwal Post RTI data (555 swikrit, 542 poorn, 74-83% kharch) — non-whitelist — REJECT. 12. chanakyamantra.com/uttarakhandawaaz.in Vidhansabha prashnottar (Sahib Manaskhand phase-2, Nanak Sagar Rs 30 lakh prastav) — non-whitelist + ashwasan — REJECT. 13. YouTube ward-17 criticism/election analysis — YouTube-only — REJECT. 14. panchjanya/uttarakhandlive24/naitikawaj/newsarenaindia CM karyakram coverage — dusre neta + non-whitelisted — REJECT. NOTE: profile khali — whitelisted sources me vyaktigat lokarpan/shilanyas/Vidhayak Nidhi vitaran ki post-event reporting nahi mili; khaali profile galat entry se behtar.

uttarakhandWorks['bhuwan-chandra-kapri'] = [];
// REJECT-LOG (bhuwan-chandra-kapri, Khatima): 1. LiveHindustan 13 Mar 2026 Gyanodaya Buddh Vihar 2 lakh Vidhayak Nidhi "ghoshna" — sirf ghoshna, vitaran nahi — REJECT. 2. LiveHindustan Pachauria 800m tiles road nirikshan — nirikshan/daura — REJECT. 3. LiveHindustan gaushala paidal march — virodh/maang — REJECT. 4. LiveHindustan 24 Nov 2025 gaon daura — daura/ashwasan — REJECT. 5. LiveHindustan 24 Dec 2025 Dynasty Modern Gurukul sports udghatan — private school mukhya-atithi — REJECT. 6. LiveHindustan CSD canteen exclusion shikayat — visheshadhikar vivaad — REJECT. 7. Amar Ujala 18 Jul 2024 badh press conference — 1 crore rahat ghoshna, vitaran nahi — REJECT. 8. nationalkhabar9 (2022) 10 vikas-kaam demand-list — maang + non-whitelist — REJECT. 9. CM Dhami Khatima lokarpan/shilanyas (bus stand Rs 11.27cr, gaushala Rs 7.23cr, Rs 33.36cr package, library/gym Rs 89 lakh) — dusre neta ke karyakram — REJECT. 10. Garhwal Post illegal mining virodh — virodh + non-whitelist — REJECT. 11. YouTube-only Vidhayak Nidhi 15% commission speech — YouTube-only — REJECT. 12. Hindustan Times winter session 2022 disaster relief maang — sirf maang — REJECT. 13. bebakuttarakhand badh ghoshna duplicate — non-whitelist + ghoshna — REJECT. NOTE: profile khali — Deputy LoP (sansthaagat pad) hain; Khatima ke bade lokarpan/shilanyas CM Dhami ke hain, isliye Kapri ke works me count nahi ho sakte; koi qualifying negative bhi nahi.

// ---- Udham Singh Nagar district batch END (46 entries, negatives 3) ----

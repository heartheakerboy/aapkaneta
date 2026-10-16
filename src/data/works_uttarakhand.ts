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
    note: 'Zila Vikas Vibhag ke aankdon (22 Sep 2026 tak) ke mutabik Gangotri seat ko kul Rs 23.27 crore aavantan ke sapeksh 1529 vikas yojnaon ke liye Rs 19.13 crore swikrit (82.2% upyog); is vitteey varsh me Rs 4.08 crore shesh. FY-wise swikriti (lakh): 2022-23: 367.44; 2023-24: 490.00; 2024-25: 490.00; 2025-26: 484.70; 2026-27: 81.50. Khaas: Chauhan akele aise MLA hain jinhone FY 2023-24 aur 2024-25 dono me aavantit nidhi shat-pratishat kharch ki. Vidhayak Nidhi FY 2025-26 se Rs 5 crore/seat/saal, usse pehle Rs 3.75 crore.',
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
    note: 'Zila Vikas Vibhag ke aankdon (22 Sep 2026 tak) ke mutabik Yamunotri seat ko kul Rs 23.27 crore aavantan ke sapeksh 2,455 vikas yojnaon par Rs 20.78 crore swikrit (89.3% upyog) — Uttarkashi jile ki teenon seaton me sabse aage; is vitteey varsh me Rs 2.40 crore shesh. FY-wise swikriti (lakh): 2022-23: 366.51; 2023-24: 488.13; 2024-25: 484.91; 2025-26: 488.57; 2026-27: 250.37. Usi report me Purola: 1,036 yojnaon par Rs 19.81 crore (85.13%), Gangotri: 1,529 par Rs 19.13 crore (82.2%). Vidhayak Nidhi FY 2025-26 se Rs 5 crore/seat/saal, usse pehle Rs 3.75 crore. (Parent-add: worker ki report me ye aankda nahi tha; article parent ne khud kholkar padha hai.)',
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
    note: 'Zila Vikas Vibhag ke aankdon (22 Sep 2026 tak) ke mutabik Purola seat ko kul Rs 23.27 crore aavantan ke sapeksh 1036 yojnaon par Rs 19.82 crore swikrit (85.13% upyog) — jile me doosra sthan; is vitteey varsh me Rs 2.77 crore shesh. FY-wise swikriti (lakh): 2022-23: 367.50; 2023-24: 479.35; 2024-25: 440.50; 2025-26: 481.32; 2026-27: 213.30. Vidhayak Nidhi FY 2025-26 se Rs 5 crore/seat/saal, usse pehle Rs 3.75 crore. Article me MLA ka bayan bhi hai (nidhi samajik karyon/janhit me). (Parent-review: rashi worker ki 19.82 wali rakhi gayi — article ki table 1982.00 lakh = Rs 19.82 crore; article text me 19.81 rounded hai.)',
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

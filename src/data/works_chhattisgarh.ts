// Chhattisgarh — neta-war kaam (works) ka placeholder.
// Mining baad me hogi: Vidhayak Nidhi ke tahat vikas karyon ke record
// jama karke yahan jode jayenge. Abhi khaali export — all.ts me wiring live hai, koi page nahi tootega.
export const chhattisgarhWorks: Record<string, any[]> = {};

// ---- Manendragarh-Chirmiri-Bharatpur district batch (researched 2026-10-17) ----

chhattisgarhWorks['renuka-singh-saruta'] = [];

// REJECT-LOG:
// 1. [Dainik Bhaskar (whitelisted), Sonhat, ~Nov-Dec 2025] 'MLA ne Rs 5 lakh ki CC sadak ka bhoomi pujan kiya'
//    (Vikas Nidhi se; GP Kachhar, Damuj-Labji, Baser; karmashela nritya ke saath swagat). Snippet se promising
//    lead tha lekin page 403 par block hua — khula hi nahi. Niyam 'sirf khula hua page source banta hai' par
//    REJECT. Coordinator retry kar sakta hai. URL:
//    https://www.bhaskar.com/local/chhattisgarh/ambikapur/news/the-mla-performed-the-groundbreaking-ceremony-for-a-road-worth-rs-5-lakh-136262066.html
// 2. [Dainik Bhaskar (whitelisted), Sonhat/Pusla-Kushmaha, ~Nov-Dec 2025] 'MLA ne CC sadak ka bhoomi pujan kiya'
//    (janchopal + samasya-samadhan). Page KHULA lekin Dainik Bhaskar app-paywall ke peeche content truncate tha —
//    fund/bhoomika ka koi detail nahi mila. Verification bina REJECT. URL:
//    https://www.bhaskar.com/local/chhattisgarh/ambikapur/news/mla-performed-the-ground-breaking-ceremony-of-the-cc-road-136254116.html
// 3. [Dainik Bhaskar (whitelisted), Sonhat] 'Improve health facilities in CHCs: Renuka' — CHC me Jeevandeep samiti
//    baithak + nirikshan. Page khula; SIRF nirikshan/daura, koi lokarpan/swikriti nahi → REJECT. URL:
//    https://www.bhaskar.com/local/chhattisgarh/ambikapur/news/improve-health-facilities-in-chcs-renuka-dbp-138567615.html
// 4. [Dainik Bhaskar (whitelisted), Manendragarh] 'Politics intensifies in Bharatpur-Sonhat over communication
//    facilities' — Ramgarh/Kotadol me BSNL towers ka 4G upgrade; MLA ise CM Vishnudev Sai sarkar ki uplabdhi
//    batati hain, apna 'sankalp' kehti hain. Page khula; kendriya/PSU pariyojna (BSNL) par vyaktigat bhoomika
//    disclosed nahi + poorv MLA Gulab Kamro credit vivaadit karte hain → REJECT. URL:
//    https://www.bhaskar.com/local/chhattisgarh/koriya/news/politics-intensifies-in-bharatpur-sonhat-over-communication-facilities-135784949.html
// 5. [Dainik Bhaskar (whitelisted), Sonhat/Ramgarh-Singhor, ~2026] Saraswati cycle yojana ke tahat class 9 ki
//    chhatraon ko cycle vitran (Swami Atmanand School Sonhat sahit). Sarkari yojana ka vitran = daan/rahat +
//    sarkari abhiyan → REJECT (page kholne ki zaroorat nahi padi, category se hi reject).
// 6. [Haribhoomi (whitelisted), 2024] Topper betiyon (Shifa B 96.50%, Ankita Rajak 91.20%) ko scooty dene ka
//    wada — vyaktigat uphaar/daan + pre-event ghoshna (aachar sanhita ke baad vitran ki yojna) → REJECT.
//    (gramyatrachhattisgarh par Teachers' Day karyakram me chaabi saunpi — chhota portal + daan hi hai.)
// 7. [ETV Bharat + thihacg.com — DONO whitelist me nahi] Mobile tower Assembly prashn: winter session me MLA ne
//    network-heen gaon ka mudda uthaya; CM ka uttar — 337 gaon me 290 me coverage, shesh 47 me se 40 ke liye
//    swikriti aur kaam pragati par, 10 Dec ko 513 towers ki swikriti. Vidhansabha prashn + mantri-ashwasan
//    (credit capped) VALID ho sakta tha, lekin source whitelisted nahi → REJECT.
// 8. [ibc24.in — whitelist me nahi, 2024] 8 toppers ko laptop + teachers ko Rs 11,000 protsahan + school ko
//    Vidhayak Nidhi se Rs 5 lakh dene ki GHOSHNA — sirf ghoshna, purnata ki khabar nahi → REJECT.
// 9. [ekjantakiawaaz.com — whitelist me nahi, Apr 2024] Svechhanudan (driver/niji staff/BJP karyakartaon ko
//    10-25 hazar) — discretionary grant, bhautik sanrachna nahi; source bhi whitelisted nahi → REJECT.
// 10. [aajkijandhara.com — whitelist me nahi, Sep 2024] Janpad Panchayat samiksha baithak; CHC Sonhat ke liye
//     Vidhayak Mad se shav vahan dene ki GHOSHNA — sirf ghoshna → REJECT.
// 11. [Haribhoomi (whitelisted), 2025] Beti Monika Singh ki jila panchayat jeet — parivar ka mamla, neta ka
//     kaam nahi → REJECT.
// 12. [Hindustan Times (whitelisted), ~Jan 2026] Bete Balwant Singh ka hit-and-run case — giraftari + jamanat.
//     Niyam 'Parivar ke mamle nahi' par negative ke roop me EXCLUDED. (Page 402 par khul nahi paya; snippet se
//     tathya liye. Neta khud aaropi nahi.)
// 13. [bansalnews.com — whitelist me nahi, Oct 2025] Sonhat Ravan Dahan munch se 'ghar aur sarkar me bhi Ravan'
//     bayan par Congress ka hamla — rajnaitik bayan, koi FIR/janch nahi → negative threshold fail → REJECT.
// 14. [nayipahal.com — whitelist me nahi, ~May 2026] Kathit 'audio kand': vidhayak pratinidhi Vaibhav Singh ne
//     Sonhat thane me likhit shikayat darj karayi (AI-generated audio ka aarop) — neta SHIKAYATKARTA hain,
//     aaropi nahi → negative nahi.
// 15. [the-journalist.com, pre-2023] CM Bhupesh Baghel ne Bharatpur-Sonhat ke liye 43 kaam (Rs 188 cr) ka
//     lokarpan/shilanyas kiya — Congress-kal ke kaam, vartaman karyakaal se pehle → REJECT.
// 16. [adani.news, Jan 2024] Ram Mandir pran-pratishtha par 2 diye jalane ki appeal — appeal, koi bhautik kaam
//     nahi → REJECT.
// 17. [dakshinkosal.com — whitelist me nahi, ~2025] 83 gaon me 4G saturation yojana; kendriya mantri Scindia ka
//     nirnay MLA ke anurodh par (unka X post) — kendriya pariyojna + source whitelisted nahi → REJECT.
// 18. CM-race coverage (businesstoday/indiatv, Dec 2023), chunav-parinam coverage (ABP/IANS/News18) — rajnaitik
//     khabar, kaam nahi → REJECT.
// 19. 2020 IIT-Delhi COVID study vivaad (Grokipedia/Wikipedia ullekh) — kendriya-mantri avadhi (pre-term) ka
//     mamla, wartaman karyakaal me koi legal development nahi → negative nahi.


chhattisgarhWorks['shyam-bihari-jaiswal'] = [];

// REJECT-LOG (shyam-bihari-jaiswal, Manendragarh):
// 1. Chirmiri bypass sadak bhoomipujan (Rs 7.46 cr, Sonawani Naka Domanhill se Korea colliery hote hue Pt. Deendayal Upadhyay Chowk Podi tak) + Sonawani Naka me Rs 25 lakh sanskritik bhavan ka lokarpan, 21 Sep 2026 — ETV Bharat (page khola aur padha; post-event report; mantri ne swayam bhoomipujan/lokarpan kiya; mantri ke shabdon me rashi CM Sai aur DyCM Arun Sao ne di). REJECT: ETV Bharat whitelist me nahi.
// 2. Chirmiri education bhoomipujan, 22 Dec 2025 — Nalanda Parisar 250-seater library Rs 4.29 cr + Shaskiya Uchchatar Madhyamik Vidyalaya Korea naya bhavan Rs 1.21 cr + navin Polytechnic College bhavan Rs 9.11 cr (kul Rs 14.61 cr) — ETV Bharat. REJECT: whitelist me nahi.
// 3. Chainpur (Manendragarh) zila panchayat bhavan bhoomipujan, Rs 3.01 cr, Mar 2026 — pinewz.com. REJECT: chhota portal, whitelist me nahi.
// 4. MCB sanyukt zila karyalaya bhavan bhoomipujan, Rs 18.43 cr, Chainpur subjail ke samne, Aug 2026 (contract 63/DL/2025-26, karyadesh 11 Mar 2026) — aajkadinnews.com. REJECT: chhota portal, whitelist me nahi.
// 5. Gondwana Marine Fossil Park / Jurassic Rock Garden udghatan, Manendragarh forest division, 28 Apr 2025 — The Hitavada (State Bureau). REJECT: established regional daily hai lekin whitelist me nahi.
// 6. Shaskiya Polytechnic College Chirmiri ka shubharambh, 4 Oct 2024 (ITI college ke asthai bhavan me) + Krishi Vishwavidyalaya/Nursing College ki ghoshna — cgimpact.org (DPR release ka republication). REJECT: whitelist me nahi; asthai bhavan me sansthan-shubharambh + keval ghoshnaen.
// 7. Chirmiri ke liye Rs 25.99 cr vikas karyon ki swikriti (DPR release 16 Jul 2025, Mukhyamantri Nagar Utthan Yojana/adhosanrachna/central lighting mad) — mediapassion.co.in. REJECT: DPR ka republication, whitelist me nahi + sirf swikriti-ghoshna.
// 8. Khadgawan block me 3 naye dhan uparjan kendra (Udhanapur, Kadrewa, Dewadand, kharif 2026-27) — apnachhattisgarh.com. REJECT: chhota portal, whitelist me nahi.
// 9. Manendragarh ke 25 schools me smart class shubharambh, 23 May 2025 (HDFC Bank CSR) — jantaserishta.com. REJECT: whitelist me nahi + CSR samaroh.
// 10. Chirmiri-Nagpur Road halt rail pariyojna bhu-arjan adhisoochana (198 bhukhand, 36.392 hectare, Rail Adhiniyam 1989) — news36garh.com / cnewsbharat.com. REJECT: whitelist me nahi + kendriya rail pariyojna, MLA ki vyaktigat bhoomika keval "prayas" ke dawe tak.
// 11. Manendragarh medical college — PM Modi ne shilanyas kiya (1 Nov 2025); 50-seat pravesh satra (Oct 2026, deshpraharinews/punjabkesari). REJECT: kendriya shilanyas + mantri-pada ka medical-education kaam (mantri-niyam).
// 12. Sadak hadse me ghayal ko niji vahan se aspatal pahunchana, Oct 2026 — vistaarnews.com / sargujhiyatimes.com. REJECT: rahat/madad kaam, vikas-kaam nahi.
// 13. Garba Season-3 samaroh me patni sang upasthiti, Oct 2026 — policewala.org.in / aajkadinnews.com. REJECT: sanskritik samaroh, whitelist me nahi.
// 14. PHE vibhag ko DMF mad se pickup vahan hari jhandi — amanpath.in. REJECT: vahan shubharambh samaroh, whitelist me nahi.
// 15. Arpa Mahotsav Bilaspur me 70 vikas karyon ka lokarpan/shilanyas (Rs 35.26 cr) — the-journalist.com. REJECT: Bilaspur (dusra zila), prabhari mantri ke roop me; whitelist me nahi.
// 16. 'Doctor Aapke Dwar' ambulance sewa shubharambh, Surajpur — public.app. REJECT: aggregator + dusra zila + abhiyan shubharambh.
// 17. Cancer hospital/SIMS nirikshan, Bilaspur, Oct 2026 — Amar Ujala. REJECT: dusra zila + mantri-pada ka nirikshan.
// 18. Budget anudan-mang bhashan, 11 Mar 2025 (Janakpur 100-bed hospital pravdhan sahit) — amarvaani.com (DPR release republication). REJECT: budget bhashan-ghoshna, whitelist me nahi.
// 19. Barkela reservoir naharon ke jirnoddhar hetu Rs 3.80 cr swikriti, May 2026 — lokmanjari.com. REJECT: vibhagiya swikriti, MLA ka ullekh/bhoomika nahi + chhota portal.
// 20. SECL Hasdeo kshetra dwara 1585 hectare vanbhoomi rajya shasan ko saunpi, Jan 2025 — insidestory.co.in. REJECT: kendriya PSU vishay, "prayas" ka dawa matra + chhota portal.
// 21. Janmadin profile / samarthakon ki pariyojna-soochi (nayipahal.com, policewala.org.in) — PR profile, Amrit Jal Mission/Rs 183 cr/Chirmiri-Nagpur rail Rs 601.90 cr/medical college Rs 323 cr jaise aankde bina swatantra dastavej ke. REJECT: dawa-matra, whitelist me nahi.
// 22. MCB swasthya vistar coverage (medical college/CT scan/dialysis, Oct 2026) — deshpraharinews.com / mp.punjabkesari.in. REJECT: mantri-pada ka rajya-stariya swasthya kaam (mantri-niyam); whitelist me nahi.
// 23. CG DPR sarkari portal: dprcg.gov.in DNS/timeout par unreachable raha; jansampark.cg.gov.in khola gaya lekin press-release archive ke discoverable pages nahi mile — isliye DPR releases ko sarkari-badge par verify nahi kiya ja saka. RETRY-LEAD dekhein.

// RETRY-LEADS (parent ke liye):
// A. Chirmiri bypass bhoomipujan (21 Sep 2026, Rs 7.46 cr) + Rs 25 lakh sanskritik bhavan lokarpan — ETV Bharat page khola aur padha gaya hai (post-event, vyaktigat bhoomipujan/lokarpan, fund-srot disclosed: CM + DyCM). Agar Haribhoomi/Dainik Bhaskar/Patrika/Navbharat me iski post-event reporting mile to Sadak + Any (2 entries) ban sakti hain.
// B. Chirmiri education bhoomipujan (22 Dec 2025, kul Rs 14.61 cr: Nalanda library Rs 4.29 cr, school bhavan Rs 1.21 cr, polytechnic Rs 9.11 cr) — whitelisted outlet me mile to School-category entries.
// C. DPR releases ("Manendragarh kshetra ko 25.99 crore", 16 Jul 2025; "Polytechnic Chirmiri shubharambh", 4 Oct 2024) — sarkari portal par mool release mile to sarkari-badge entries ban sakti hain.
// D. Chainpur zila panchayat bhavan (Rs 3.01 cr, Mar 2026) aur MCB sanyukt zila karyalaya (Rs 18.43 cr, Aug 2026) bhoomipujan — whitelisted coverage mile to entries.

// QA: 0 entries pass. Whitelisted sroton me Dec 2023+ ka koi vyaktigat lokarpan/shilanyas, GO-backed swikriti ya Vidhansabha-nateeja documented nahi mila; mantri-pada ki rajya-stariya swasthya coverage mantri-niyam se bahar. Profile khali rakhna niyam-anusar sahi hai. Negatives: koi nahi (halafname 0 cases; established media me FIR/jaanch nahi).


// ---- Manendragarh-Chirmiri-Bharatpur district batch END (0 works, 0 negatives) ----

// ---- Koriya district batch (researched 2026-10-17) ----

chhattisgarhWorks['bhaiya-lal-rajwade'] = [{
    title: 'Shivpur Charcha me Rs 4.22 crore ke Sewage Treatment Plant ka bhoomipujan — prabhari mantri Ramvichar Netam ke saath MLA Bhaiya Lal Rajwade ne Gandhi Jayanti par kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Patrika',
    sourceUrl: 'https://www.patrika.com/koria-news/sewage-treatment-plant-to-be-built-at-a-cost-of-4-crore-22-lakh-20953769',
    date: '2026-10-02',
    note: 'Patrika ki post-event report ke mutabik, Koriya ke prabhari mantri Ramvichar Netam aur Baikunthpur MLA Bhaiya Lal Rajwade ne 2 October (Gandhi Jayanti) ko Nagar Palika Shivpur Charcha me Rs 4.22 crore ke Sewage Treatment Plant ka bhoomipujan kiya. STP se nagar palika ke 25,000 aabadi wale 15 wardon ke gande paani ka treatment hoga, jisse jal pradushan ghatega aur Jhumka kshetra me paani ki gunvatta sudhregi. Koria Collector ke mutabik ye lambe samay se prateekshit kaam tha, van vibhag ke sahyog se zameen mili hai, aur shasan star par iski nirantar monitoring ho rahi hai. Stage ka sach: abhi sirf bhoomipujan hua hai, nirmaan kaam shuru hona baki hai. Shrey capped: bhoomipujan mantri Netam ne bhi saath me kiya; project ke fund ka srot article me nahi bataya gaya.',
    period: '2023-2028',
    stage: 'shilanyas-bhoomi pujan',
  },];

// REJECT-LOG (bhaiya-lal-rajwade):
// 1. MRI machine Rs 18.65 crore SECL CSR swikriti (ghatatighatana.com, 21 Aug 2026): source whitelist me nahi (chhota regional portal); MLA ne sirf SECL ke samaksh maang patra rakha tha — sirf maang = REJECT; kendriya PSU CSR par bina vyaktigat lokarpan ke shrey = REJECT.
// 2. DMF shasi parishad baithak me PM Awas/peyjal par sujhav (tarunchhattisgarhkorba.com): whitelist me nahi; sirf baithak/sujhav, koi bhautik kaam nahi = REJECT.
// 3. SECL kaamon ke liye vidhayak pratinidhi niyukti — Avinash Singh Thakur (tarunchhattisgarhkorba.com, 22 Aug 2025): whitelist me nahi; prashasanik niyukti, vikas-kaam nahi = REJECT.
// 4. Sewa Sankalp abhiyan — angan milan karyakram me upasthiti aur sambodhan (ghatatighatana.com, 16 Oct 2026): whitelist me nahi; sirf upasthiti, koi vikas-kaam nahi = REJECT.
// 5. Surajpur me pul-sadak Rs 48.72 crore swikriti (hindusthansamachar.in, 24 Jun 2025): ye LAXMI Rajwade (Bhatgaon mantri) ke prayason se hai — alag vyakti, confusion guardrail; plus mantri-pada ka kaam, Baikunthpur seat ka nahi = REJECT.
// 6. 200-bed jila chikitsalaya bhawan Rs 22.59 crore swikriti (pratidinrajdhani.in): shrey health minister Shyam Bihari Jaiswal ko, MLA ka koi ullekh nahi; source bhi chhota portal = REJECT.
// 7. "10 kaam" wish-list article (ghatatighatana.com, 7 Jan 2024): opinion/wish list, maangon ki soochi — pre-event maang = REJECT; whitelist me nahi.
// 8. Navratri me durga pooja pandalon ka daura (ghatatighatana.com, 3 Oct 2025): whitelist me nahi; sirf jan-sampark daura, koi kaam nahi = REJECT.
// 9. Mor Duar-Sai Sarkar me awas sarvekshan me pratikatmak bhagidari (tarunchhattisgarhkorba.com, Apr 2025): whitelist me nahi; sarkari abhiyan me bhagidari, vikas-kaam nahi = REJECT.
// 10. Sewa Sankalp jila karyashala me upasthiti (ghatatighatana.com, 4 Sep 2026): party abhiyan, sirf upasthiti = REJECT.
// 11. Teen shaskiya colleges me vidhayak pratinidhi niyukti (public.app): public.app reject-list me; prashasanik niyukti = REJECT.
// 12. PM dwara Eklavya Model school ka shilanyas (public.app, Nov 2025): kendriya project, PM ne kiya — MLA ki koi vyaktigat bhoomika nahi; source reject-list me = REJECT.
// 13. Nagarpalika chunav juloos/karyakarta sammelan (thetahkikatnews.com, 11 Oct 2026): chunav prachar, koi kaam nahi; whitelist me nahi = REJECT.
// 14. 'Aashirwad ka diya' appeal (newsnt24livenews.blogspot.com, Sep 2026): blogspot reject-list me; appeal hi, koi kaam nahi = REJECT.
// 15. DPR/jansampark press releases: Dec 2023+ ke karyakaal me inke naam se koi release search me nahi mili.
// 16. Negative check: (a) Gulab Kamro dwara maan-hani notice ki dhamki (ibc24, ~2022) — dhamki/notice, FIR/janch nahi, threshold poora nahi; (b) SP ko maarpeet ki shikayat-patra (jantaserishta, ~2021) — shikayat = FIR nahi; (c) viral video clips (gali/abusive bhasha) — na FIR na adhikarik janch; (d) ADR/Business Standard: Criminal Cases 'No'. Koi qualifying negative entry nahi.
//
// QA: 1 entry pass hui (Patrika, whitelisted; post-event report; bhoomipujan vyaktigat roop se mantri ke saath kiya — shrey capped, fund-srot undisclosed note me darj).


// ---- Koriya district batch END (1 works, 0 negatives) ----

// ---- Surajpur district batch (researched 2026-10-17) ----

chhattisgarhWorks['bhulan-singh-marabi'] = [];

// REJECT-LOG (bhulan-singh-marabi, Premnagar): 1. PMGSY Phase-4 Batch-1: 69.97 km sadak, Rs 54.99 crore, 20 gram panchayats (ghatatighatana.com, 21 Dec 2025; cnewsbharat.com) — non-whitelisted chhote portals; sirf swikriti-ghoshna (koi vyaktigat lokarpan/shilanyas nahi); shrey ka ekmatra aadhaar MLA ka dawa. REJECT. 2. "Vidhayak Premnagar ke prayas se 2108.86 lakh (Rs 21.09 crore) ke nirman karya swikrit" (cnewsbharat.com category listing) — chhota portal + sirf ghoshna. REJECT. 3. "Vrindavan se Salka marg ki swikriti" (cnewsbharat.com) — chhota portal + sirf ghoshna. REJECT. 4. Janardanpur (Premnagar block) Garjan Nala culvert bhoomi pujan, Rs 15.63 lakh, Adani Foundation/RRVUNL CSR (newsriveting.com, Apr 2025) — non-whitelist portal + CSR samaroh + koyla-kshetra company ka project, MLA ki vyaktigat bhoomika (fund nahi). REJECT. 5. Helmet vitran / yatayat jagrukta abhiyan (Haribhoomi, whitelisted) — pre-event announcement (bhavishya-kaar: "shuru karne ja rahe hain", post-event reporting nahi) + daan/rahat kaam. REJECT. 6. Ambedkar pratima wada-bhang par Bhim Army ka niwas-gherao (Dainik Bhaskar, whitelisted — page khola aur padha) — koi FIR/janch/bhrashtachar-aarop nahi; raajnaitik virodh, negative threshold poora nahi, aur kaam bhi nahi. REJECT. 7. Sarguja Olympic samapan, Ramanujnagar — mukhya atithi (chhattisgarharticle.in) — chhota portal + mukhya-atithi samaroh. REJECT. 8. Seva Sankalp abhiyan vridhjan samman, Mangal Bhavan Surajpur (jantakiawaz24.com) — chhota portal + mukhya-atithi samaroh. REJECT. 9. Red nadi Chhath ghat shramdan aur paudharopan (newschhattisgarh.in, Sep 2026) — chhota portal + sarkari abhiyan me maujoodgi, koi nirmaan nahi. REJECT. 10. Surajpur mother-son double murder site visit (Patrika, whitelisted) — mantri ke saath sirf mauka-muaayana/maujoodgi, koi kaam nahi. REJECT. 11. CM Vishnu Deo Sai Sushasan Tihar Kot Patna chaupal yatra (Dainik Bhaskar) — pre-event announcement ("doura karenge"), CM ka karyakram. REJECT. 12. Ram Charit Manas pratiyogita, Patna gram (public.app) — aggregator + dharmik samaroh. REJECT. 13. Bihar chunav jeet par jashn (public.app) — aggregator + raajnaitik samaroh. REJECT. 14. CM senior-citizens honour event, MLA sirf upasthit (newsontime.in / thenewsindia.co.in) — chhote portals + dusre neta ka karyakram. REJECT. 15. Sadak suraksha marathon Surajpur (apnachhattisgarh.com, Oct 2026) — chhota portal + MLA sirf upasthit, collector/SP ka karyakram. REJECT.
// RETRY-LEADS (parent ke liye): A. PMGSY Phase-4 Batch-1 swikriti (Rs 54.99 crore, 69.97 km, 20 GPs, Dec 2025) — agar ye sadkein 2026-27 me ban jayein aur koi whitelisted outlet (Bhaskar/Haribhoomi/Patrika) MLA ke vyaktigat lokarpan/shilanyas ki post-event reporting kare, to Sadak-category entry ban sakti hai; CG PMGSY sarkari portal par district-wise sanction list bhi check karein. B. Rs 21.09 crore ke "swikrit nirman karya" (cnewsbharat claim) — Collector-karyalaya ki itemized sanction list ya CG DPR press release mile to entry ban sakti hai.


chhattisgarhWorks['laxmi-rajwade'] = [];

// REJECT-LOG (laxmi-rajwade):
// 1. Rs 18.38 cr bhoomi-pujan — Shivnandpur me Rs 3.41 cr infra (Nakna talab ghat, footpath, Atal parisar, RCC naali, BT road) + PWD ki 2 sadken Rs 14.97 cr (Bhatgaon-Anragwa 6.00 km Rs 878.50 lakh; Pakni-Chendra 5.60 km Rs 618.63 lakh); unhone vyaktigat bhoomi-pujan/prarambh-pujan kiya (Feb 2026 est.; onlinebulletin.in, chhattisgarhaaj.com, cityhotnews.com). Spasht DPR-style release ("Raipur," dateline) lekin mool DPR release browser se khuli nahi (dprcg.gov.in unreachable; jansampark.cg.gov.in par indexed release nahi) — whitelist source nahi = REJECT.
// 2. 5 gaonon me CC sadak sah naali Rs 2.84 cr swikriti (Ajirma Rs 50.05 lakh, Jamdi Rs 49.20 lakh, Kunj Nagar Rs 55.12 lakh, Bundiya Rs 78.05 lakh, Maheshpur Rs 51.32 lakh), Mukhyamantri Gram Gauravpath Yojana — 26 Sep 2026 (channel4newsindia.com, khabardaar.co, lokvartanews.co.in). GO-backed swikriti hoti, lekin source whitelist me nahi = REJECT.
// 3. 2 sadkon ko budget swikriti Rs 8.48 cr (Kharra-Chikni Bhandarpara 17.50 km Rs 5.09 cr; Kunj Nagar-Jamdei Patelpara 13.20 km Rs 3.39 cr) — 28 Sep 2026 (apnachhattisgarh.com, lokvartanews.co.in). Whitelist me nahi = REJECT.
// 4. 33 sadkon ko prashasakiya swikriti Rs 150.56 cr, FY 2025-26, Bhaiyathan/Odgi vikas-khand — 31 Dec 2025 (dailychhattisgarh.com). Whitelist me nahi = REJECT.
// 5. PWD dwara Rs 48.72 cr pul-sadak swikriti, FY 2024-25, Surajpur jila — 24 Jun 2025 (hindusthansamachar.in, mavericknews30.com). Ye Laxmi Rajwade ke prayason se hai (Bhaiya Lal wali file me confusion note hai) lekin source whitelist me nahi; jila-star, seat-vishesh vivran nahi = REJECT.
// 6. Shivnandpur Nagar Panchayat me 31 karyon ko takniki swikriti Rs 2.33 cr (CC sadak, RCC naali, puliya, paver-block; UAD aadesh 6 Oct 2026) — Oct 2026 (mavericknews30.com). Whitelist me nahi = REJECT.
// 7. Telgaon mukhya marg-Barpara-Bundiya Chowk 5.50 km sadak ko prashasakiya swikriti Rs 543.67 lakh, FY 2026-27 budget — 14 Oct 2026 (shreekanchanpath.com). Whitelist me nahi = REJECT. (Note: Bhaiyathan VIKASKHAND hai, Bhaiyathan seat nahi — Bundiya Bhatgaon seat me hai, lekin source hi reject hai.)
// 8. Jaynagar-Kasapara 3.60 km sadak unnayan Rs 380.15 lakh — unhone karyaprarambh-pujan kiya (~Apr 2026; ghamasan.com). Whitelist me nahi = REJECT.
// 9. Birpur (NH-43) se Kevra ~18 km sadak chaudikaran Rs 3041.18 lakh PWD prashasakiya swikriti (swatantrasamay.com; tithi aspasht). Whitelist me nahi = REJECT.
// 10. Brijeshwar Sagar jalashay navinikaran Rs 4.94 cr swikriti — 11 Jun 2026 (janpukarcg.in). Whitelist me nahi = REJECT.
// 11. Bundiya aur Barsera (Bhaiyathan vikas-khand) me naye dhaan uparjan kendra — khadya vibhag ka aadesh, kharif 2026-27 — 1 Sep 2026 (shreekanchanpath.com, janpukarcg.in). Whitelist me nahi; bhautik kaam unke dwara nahi = REJECT.
// 12. Bhatgaon ke 7 dhaan uparjan kendra suvidha-sampann — 23 Sep 2026 (janpukarcg.in). Aspasht, whitelist me nahi = REJECT.
// 13. Latori CHC ko ALS 108 ambulance — unhone Seva Sankalp Abhiyan me hari jhandi dikhayi; ghoshna Swasthya Mantri Shyam Bihari Jaiswal ne ki thi — 14 Oct 2026 (apnachhattisgarh.com, amritsandesh.com, onechhattisgarh.com). Ambulance flag-off bhautik sanrachna ka lokarpan nahi; shrey vibhajit; source whitelist me nahi = REJECT.
// 14. Chandni Biharpar ko ambulance hari jhandi — 29 Jul 2026 (janpukarcg.in). Whitelist me nahi = REJECT.
// 15. Divyang Dhaneshwar Sahu (Kasalgiri) ko tricycle — 14 Oct 2026 (apnachhattisgarh.com). Daan/rahat kaam = REJECT (niyam).
// 16. PMGSY kharab sadkon par Collector ko patra — nirikshan/mararmmat ke nirdesh — 13-14 Oct 2026 (groundreporting.in, kadwaghut.com, jantaserishta.com, cgsandesh.com). Sirf nirikshan/nirdesh, koi bhautik kaam nahi; whitelist me nahi = REJECT.
// 17. Jan-sampark daura — Kamlapur, Pahadgaon, Pandonnagar — 13 Jun 2026 (theworldopinion.com). Sirf daura = REJECT.
// 18. Sadak suraksha marathon/bike rally, Surajpur — 13 Oct 2026 (punjabkesari MP). Karyakram me shirkat, vikas-kaam nahi; outlet whitelist me nahi = REJECT.
// 19. Holi Milan karyakram, Bhatgaon — Mar 2024 (indiaherald.com). Rajnaitik karyakram = REJECT.
// 20. Nagar Panchayat Jaijaipur (SAKTI jila) me 29 karyon ka bhoomi-pujan Rs 3.30 cr — Dec 2024 (mavericknews30.com). Seat se BAHAR (Sakti, Bhatgaon nahi) = REJECT.
// 21. Rajya-stariya WCD kaam — Anganwadi online bharti launch, Har Ghar Munga abhiyan, Mahtari Vandan, Paldanauli (Odgi) me Purak Poshan Aahar unit shubharambh 16 Feb 2026 (rkexpose.com) = mantri-niyam se REJECT (rajya-stariya yojna/faisle nahi).
// 22. Latori tehsil me water filter sthapna (10 Jun 2026), Silfili mandi rahat (21 May 2026), doorsthan anchalon me peyjal sankat door (6 Jun 2026) — sab janpukarcg.in; aspasht + whitelist me nahi = REJECT.
// 23. Dainik Bhaskar (bhaskar.com): shaheed ASI ke ghar daura (Sukma/Jagargunda — seat se bahar) aur jhusi chhatra aspatal daura (Apr 2026) — dono sirf daura/sahanubhuti, koi kaam nahi = REJECT. cgbhaskar.com (Har Ghar Munga) Dainik Bhaskar nahi + rajya-abhiyan = REJECT.
// 24. NEGATIVE CHECK: (a) WhatsApp hack Oct 2026 (TOI ne cover kiya) — ve PEEDIT hain, aaropi nahi; cyber cell me unhone shikayat darj karayi — threshold poora nahi. (b) Lahpatra toll plaza vivaad 3 Sep 2026 (english.dainikjagranmpcg.com) — aarop kafile ke sadasya (PA/driver — pehchan vivadit) par, mantri ne khandan kiya; unke khilaf FIR sthapit nahi; outlet whitelist me nahi — threshold poora nahi. (c) Sunny Leone/Mahatari Vandan farzi labharthi (thestatesman.com) — vyavasthaagat dhokhadhadi, FIR thag ke khilaf; ve vyaktigat aaropi nahi + rajya-yojna mamla — threshold poora nahi. ADR/Business Standard: Criminal Cases 'No'. Koi qualifying negative nahi.
// 25. DPR/Jansampark: dprcg.gov.in browser se unreachable (network error); jansampark.cg.gov.in ka homepage khula lekin koi indexed press-release page search me nahi mili — isliye koi sarkari-badge source cite nahi ho saka. Chhote portals par DPR-style releases maujood hain (upar #1, #2, #3) lekin "sirf khula hua page source" niyam se cite nahi kiye ja sakte.
//
// QA: ~17 web searches (Hindi/English/news-vertical). Whitelisted outlets (The Hindu, IE, HT, NDTV, India Today, TOI, Dainik Bhaskar, Patrika, Navbharat, Haribhoomi, PTI) par inke Bhatgaon seat-vishesh karyon ki koi coverage indexed nahi mili; CG DPR releases sulabh nahi. Isliye khaali profile (0 entries) — niyam ke mutabik sahi parinam.


// ---- Surajpur district batch END (1 works, 0 negatives) ----

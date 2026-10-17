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

// ---- Balrampur district batch (researched 2026-10-17) ----

// CONSOLIDATED FRAGMENT — Chhattisgarh batch 2 (Balrampur + Surguja), researched 2026-10-17


// REJECT-LOG: Shakuntala Singh Portey (BJP, Pratappur ST, Balrampur)
// 1. [english.dainikjagranmpcg.com, 2025-05-08] 'Sushasan Tihaar me adhikariyon ko daant' → REJECT: non-whitelist outlet (regional spin-off, jagran.com nahi) + event adhikariyon par narazgi hai, koi vikas kaam nahi — https://english.dainikjagranmpcg.com/states/chhattisgarh/mahasamund-lpg-scam-2-food-officers-gas-agency-operator-arrested/article-17983
// 2. [aryanage.com, 2025-05-25] 'Good Governance camp me adhikariyon ko warning (Tukkudand)' → REJECT: aggregator, whitelist me nahi + kaam ki entry nahi — https://www.aryanage.com/article/36558/shakuntala-singh-porte-sparks-debate-after-strict-warning-to-officials
// 3. [refersms.com, 2024-07-26] 'CM ne janmadin par badhai di' → REJECT: shubhkamna khabar, vikas kaam nahi + non-whitelist — https://www.refersms.com/chhattisgarh-cm-shakuntala-singh-porte-2024-07-26/
// 4. [dainikchhattisgarhwatch.com, pre-2023] 'Bhawanipur me samudayik bhawan ka lokarpan' → REJECT: galat vyakti (Kasdol ki Shakuntala Sahu, INC, purana karyakaal) + non-whitelist — https://dainikchhattisgarhwatch.com/tag/mla-inaugurated-community-building-in-bhawanipur/feed/
// 5. [Business Standard, 2023] 'halafname me Criminal Cases: Yes flag' → REJECT as negative: halafname ka pending mamla akele negative nahi hota; koi FIR/janch ki established-media khabar nahi mili — https://www.business-standard.com/amp/elections/chhattisgarh-elections/shakuntala-singh-portey-candidate-30042
// 6. [news18.com, 2023] 'candidate profile: 0 criminal cases' → REJECT: chunav profile hai, karyakaal ka kaam nahi — https://www.news18.com/elections/assembly/chhattisgarh/shakuntala-singh-portey-candidate-s26aed2008a006e2023c003/
// NOTE: 10+ search rounds (Hindi/English dono spellings, whitelist site-scoped, news vertical, DPR CG query) me Dec 2023 ke baad ka koi bhi whitelist-press-reported lokarpan/shilanyas/sadak/paani/school/aspataal kaam nahi mila. Galat entry se khali profile behtar — array khali rakha gaya.
chhattisgarhWorks['shakuntala-singh-portey'] = [];

// Chhattisgarh works-mining worker fragment (researched 2026-10-17): ram-vichar-netam
// (Ram Vichar Netam, BJP, Ramanujganj ST, Balrampur district).
// Foundation: 2023 me Ramanujganj (ST) se 99,574 vote (54.58%) lekar jeete; runner-up
// Dr. Ajay Kumar Tirkey (INC, 69,911) ko 29,663 maton se haraya. 17 Dec 2023 ko Protem
// Speaker rahe; 22 Dec 2023 se CG sarkar me MANTRI — Krishi, Anusuchit Janjati Vikas.
// SAKHT MANTRI-NIYAM lagu: sirf Ramanujganj seat ke vishesh kaam; rajya-stariya
// krishi/tribal-vikas faisle kaam NAHI; Protem Speaker bhoomika kaam NAHI.
// Poorv karyakaal (Ramanujganj MLA 2008-2013, Rajya Sabha MP Jun 2016-Jun 2022,
// Raman Singh sarkar me mantri 2003-2013) ke kaam is profile me NAHI.
// Halafnama: koi criminal case nahi (Business Standard/myneta.info).
// RESULT: whitelisted + khule hue sources se koi VALID entry nahi mili — profile khaali.
// Teen promising leads (Oct 2026 ke do events, Jan 2025 ka ek event) sirf non-whitelisted
// portals par hain; CG DPR press note (samachar kramank 1587/2026) maujood hai lekin
// dprcg.gov.in is VM se khul nahi paya — coordinator retry kar sakta hai. Sab neeche darj.

chhattisgarhWorks['ram-vichar-netam'] = [];

// REJECT-LOG:
// 1. [pradeshkhabar.in + offbeatnews.in + cgtoday.in + khabar30.in + etvbharat.com — KOI BHI
//    whitelist me nahi; 9-10 Oct 2026] 'Krishi mantri Ram Vichar Netam ne Van Vatika
//    Ramanujganj me Rs 149.70 lakh ke eco-tourism vikas karyon ka bhoomi pujan kiya'
//    (Paryavaran Vaniki Yojana, Van Vibhag Balrampur; bal vatika/jal vatika/saundarya vatika;
//    prastav 1 Aug 2026, swikriti 1 Sep 2026). Seat-specific bhautik kaam ka strong lead tha
//    lekin koi whitelisted source nahi mila. CG DPR press note 'samachar kramank: 1587/2026'
//    maujood hai (pradeshkhabar ne DPR release se uthaya), lekin dprcg.gov.in is VM se DNS par
//    khul nahi paya aur jansampark.cg.gov.in ke press section ka URL navigate nahi ho paya.
//    Niyam 'khul na sakne wala page source nahi' par REJECT. **RETRY LEAD** — coordinator DPR
//    release kholkar badge 'sarkari' entry bana sakta hai. URL (non-whitelisted, sirf lead):
//    https://pradeshkhabar.in/?p=237347
//    https://www.etvbharat.com/hi/state/ramanujganj-van-vatika-will-be-developed-as-eco-tourism-hub-in-balrampur-cts26101000957
// 2. [offbeatnews.in + pradeshkhabar.in — whitelist me nahi; 9-10 Oct 2026] 'Ramanujganj me
//    Pando samaj ke liye 3 pre-matric chhatravason ka shubharambh; Rs 1.52 crore ke 13
//    anganwadi bhavan aur Rs 54 lakh ki 5 puliyaon ka lokarpan; Rs 1.02 crore ke 8 uchit
//    mulya dukan-sah-godam bhavanon ka bhoomi pujan — mantri Netam ne kiya'
//    (Ramanujganj balak/balika + Dindo balak chhatravas, kul 150 seats; anganwadi gaon:
//    Hariharpur, Lodha, Trikunda, Belkurta, Chiniya, Dolangi, Kamalpur, Pachawal, Salvahi,
//    Tambeshwarnagar, Tatathar, Tetardih, Bhanvarmal — sab Ramanujganj tehsil/seat me).
//    Seat-specific bhautik sanrachnaon ka lokarpan/bhoomi pujan — VALID ho sakta tha, lekin
//    source whitelisted nahi → REJECT. **RETRY LEAD** — DPR press note dhoondhkar verify karo.
//    NOTE: 8 godam Ramchandrapur vikas-khand me hain — us block ka seat (Ramanujganj vs Samri)
//    verify kiye bina entry me shamil mat karna. URL (non-whitelisted, sirf lead):
//    https://offbeatnews.in/development-gift-to-pando-samaj-at-ramanujganj-three-hostels-inaugurat/
//    https://pradeshkhabar.in/?p=237350
// 3. [cgmp.co.in — whitelist me nahi; ~Jan 2025] 'Krishi mantri Netam ne Daura me Rs 781.59
//    lakh ke vikas karyon ka bhoomi pujan kiya; Mahrajganj, Ranhat aur Daura me Mahatari
//    Sadan (pratyek Rs 24.70 lakh, FY 2024-25 swikriti) ka bhoomi pujan'
//    (Balrampur vikas-khand; mantri ne kaha 'lagbhag Rs 8 crore ke karyon ka bhoomi pujan').
//    Seat-specific lagta hai lekin source whitelisted nahi → REJECT. **RETRY LEAD** —
//    Daura/Mahrajganj/Ranhat (Balrampur tehsil) ka seat bhi verify karna hoga (Ramanujganj
//    AC me Balrampur tehsil ka keval kuchh hissa hai). URL (non-whitelisted, sirf lead):
//    https://www.cgmp.co.in/agriculture-minister-ramvichar-netam-performed-bhoomi-pujan-of-development-works-worth-rs-781-59-lakh-in-daura/101252/
// 4. [lokmanjari.com — whitelist me nahi] CM Vishnudev Sai ke Balrampur jile ke karyakram me
//    kai pariyojnaon ka lokarpan/shilanyas (Eklavya school Nawapara/Wadrafnagar, Tameshwar
//    Nagar airstrip upgrade, Maharajganj-Pachawal sadak Rs 2.16 cr, swasthya kendra) —
//    'Tribal Affairs Minister Shri Ramvichar Netam ... present' — Netam SIRF upasthit the,
//    lokarpan CM ne kiya → dusre neta ke karyakram me maujoodgi → REJECT.
//    URL: https://www.lokmanjari.com/article.php?page=8&menuid=1
// 5. [Haribhoomi (whitelisted), 24 Mar 2026] 'Jila Samvad' interview: mantri Netam ka dawa ki
//    'do saal me bharosa badha, Balrampur rajya ka sabse vikasit jila hoga' — sadak, bijli,
//    paani, sinchai, shiksha, swasthya ki kamiyan door karne ka wada. Koi vishesh purn kaam
//    fund/bhoomika ke saath disclosed nahi — sirf ghoshna/dawe → REJECT.
//    URL: https://www1.haribhoomi.com/state-local/chhattishgarh/news/district-dialogue-agriculture-minister-ramvichar-netam-dr-himanshu-dwivedi-balrampur-developed-88181
// 6. [PTI via ThePrint/NDTV/rediff, Dec 2023] Protem Speaker shapath (17 Dec 2023, Raj Bhavan)
//    — pad/bhoomika hai, bhautik kaam nahi → REJECT (mantri-niyam me bhi excluded).
// 7. Mantri-roop ke rajya-stariya faisle — IGKV paper leak me FIR/janch ke nirdesh (lalluram.com,
//    chaturpost.com — dono whitelist me nahi; waise bhi Raipur ka mamla), krishi sameeksha
//    baithken, Niyad Nellanar jaisi yojnaon par bayan — SAKHT MANTRI-NIYAM par sab REJECT
//    (rajya-stariya krishi/tribal-vikas faisle kaam nahi).
// 8. Chunav-parinam coverage (ABP/ Navbharat Times, Dec 2023), cabinet-vistar coverage
//    (Haribhoomi/Business Standard, Dec 2023) — rajnaitik khabar, kaam nahi → REJECT.
// 9. [ANI via webindia123, Dec 2021] RS MP ke roop me Netam ne Balrampur prashasan par BJP
//    karyakartaon par 'false FIR' ka aarop lagaya — neta SHIKAYATKARTA the, aaropi nahi;
//    pre-term (2021) mamla → negative nahi. URL: https://news.webindia123.com/news/Articles/India/20211213/3872588.html
// 10. Salwa Judum (Grokipedia 'controversies' ullekh): Netam 2005-2008 me Grih Mantri the;
//     SC ne 2011 me Salwa Judum ko asanvaidhanik ghoshit kiya. Lekin neta par koi FIR nahi,
//     koi naam-daar adhikari-pusht janch nahi, aur vartaman karyakaal (Dec 2023+) me koi
//     legal development nahi → pre-term mamla, negative threshold fail → EXCLUDED.
//     (Halafnama: 'No criminal cases' — Business Standard/myneta.info.)
// 11. [lalluram.com/chaturpost.com — whitelist me nahi] IGKV paper leak: mantri ne FIR ke
//     nirdesh diye — ve aaropi nahi, prashasanik kadam → negative nahi.
// 12. Neta ke X handle (@ramvicharnetam) ke dawe/post — social media source nahi banta → REJECT.
// 13. [dailychhattisgarh.com — whitelist me nahi; 31 Jan 2026] Mahasamund pashu-chikitsa
//     deekshant samaroh me 'vishisht atithi' ke roop me upasthiti — mukhya-atithi/samaroh,
//     seat se bahar, kaam nahi → REJECT.

// REJECT-LOG: Udhheshwari Paikra (BJP, Samri ST, Balrampur)
// 1. [DailyChhattisgarh, 2024-03-16] 'Bakaspar jalashay unnayan ka bhoomipujan — Rs 2.84 crore, vidhayak ki pahal par rashi swikrit; saath hi Hanspur/Ghutradih baandh poojan aur Ratasili-Kusmi-Karaundha ~15 km sadak (lagbhag Rs 44 crore) ka bhoomipujan' → REJECT: source not whitelist (DailyChhattisgarh small regional portal, not in whitelist list). URL: https://www.dailychhattisgarh.com/surajpur/211259/rss-feeds.php
// 2. [livevns.news, 2025-05-05] 'Lava jalashay sinchai pariyojana ka bhoomipujan — lagbhag Rs 25.99 crore, tender se Sincere Construction Co., 6+ gaon labhanvit (Hindustan Samachar wire)' → REJECT: source not whitelist (Varanasi-based small outlet livevns.news; HS wire on non-established outlet). URL: https://livevns.news/state/chhattisgarh/bhoomi-pujan-of-lava-reservoir-irrigation-projectphp/cid16669817.htm
// 3. [Dainik Bhaskar (bhaskar.com), ~2026-03] 'Samri vidhayak ne Bario ke shaskiya school me bachchiyon ko cycle baanti (Beti Bachao Beti Padhao)' → REJECT: daan/vitran kaam — works rules me daan/rahat kaam excluded. URL: https://www.bhaskar.com/amp/local/chhattisgarh/ambikapur/news/samari-mla-paikra-distributed-bicycles-136636668.html
// 4. [Dainik Bhaskar (bhaskar.com), ~2026-03] 'Uchchatar madhyamik vidyalaya ke nirmanadhin bhavan ka nirikshan, PWD engineer ko phone par samjhais' → REJECT: sirf nirikshan/daura — excluded. URL: https://www.bhaskar.com/amp/local/chhattisgarh/ambikapur/news/samari-mla-paikra-distributed-bicycles-136636668.html
// 5. [cgtoday.in, 2026-09-28] 'Bario me Mahatari Sadan ka lokarpan, vidhayak ne chhath ghat me shramdan kiya' → REJECT: source not whitelist (CG Today small portal). URL: https://cgtoday.in/mahatari-sadan-inaugurated-barisi-mla-smt-udheshwari-paikra-donates-shramdaan-chhath-ghat/
// 6. [public.app, ~2026-10] 'Semra me Rs 24.70 lakh ke Mahatari Sadan ka lokarpan vidhayak ne kiya' → REJECT: aggregator explicitly excluded (public.app). URL: https://public.app/video/sp_967ahikkpg5yx
// 7. [cgaajkiawaaj.in, 2026-09-18] 'Azadi ke baad pehli baar bhet-mulakat karyakram — Asanpani Bairadih me bijli/paani/sadak ki samasya suni, CC sadak ka ashwasan' → REJECT: source not whitelist (small portal) + keval ashwasan/maang — excluded. URL: https://www.cgaajkiawaaj.in/2026/09/blog-post_18.html
// 8. [arthparkash.com, ~2026-10] 'BJP vidhayak banam SDM — Rajpur college road CC sadak bhoomipujan karyakram me SDM ke na aane par vivaad, 24 ghante ka ultimatum' → REJECT: source not whitelist + siyasi/prashasanik vivaad hai, koi kaam (work) nahi. URL: https://www.arthparkash.com/balrampur-bjp-mla-vs-sdm-uddheshwari
// 9. [ibc24.in, ~2025-02] 'Sarna Pooja me vidhayak ka khaas andaz — Basant Panchami par adivasi nritya me shamil' → REJECT: source not whitelist + sanskritik karyakram me bhagidari, kaam nahi. URL: https://www.ibc24.in/chhattisgarh/balrampur/sarna-pooja-mla-udheshwari-paikra-this-mlas-special-style-was-seen-in-sarna-pooja-2927857.html
// 10. [DailyChhattisgarh, 2025-12-12] 'Atmanirbhar Bharat Sankalp Abhiyan / mahila sammelan me vidhayak mukhya atithi' → REJECT: source not whitelist + mukhya-atithi samaroh — excluded. URL: https://www.dailychhattisgarh.com/balrampur/285688/-
// NEGATIVES: halafname ka pending mamla (IPC 147/341/34) — current term (Dec 2023+) me koi girafaari/chargesheet/verdict established media me nahi mila. Arth Parkash SDM vivaad me koi FIR/janch nahi. 0 negative entries.
// Retry-leads: none (saare key pages khul gaye; reject sab source-rule/work-rule par hai, open-failure par nahi).
chhattisgarhWorks['udhheshwari-paikra'] = [];

// ---- Balrampur district batch END (1 work, 0 negatives) ----

// ---- Surguja district batch (researched 2026-10-17) ----

// AapkaNeta.org — Chhattisgarh works fragment
// MLA: Prabodh Minz (prabodh-minz), Lundra (ST), Surguja, BJP
// Karyakaal: 2023-2028 (shapath Dec 2023). Researched 2026-10-17.
// RESULT: koi bhi entry whitelist + post-event verification rules par khari
// nahi utri. Print leads (Haribhoomi/Navbharat epaper clippings) text-tools se
// padhe nahi ja sake (JS-rendered epaper pages) — isliye retry-leads, entry nahi.

chhattisgarhWorks['prabodh-minz'] = [];

// REJECT-LOG: Prabodh Minz
// 1. [Haribhoomi print, 15 Sep 2026] 'Vidhayak ne kiya sadak nirman ka bhoomi pujan — Chhindkalo Kotiya se Shivpur tak Rs 8.26 crore sadak; bhoomi pujan 13 Sep 2026 ko Minj ne kiya' → LEAD (entry nahi): epaper.haribhoomi.com par 15 Sep 2026 Bilaspur edition archive me maujood hai (https://epaper.haribhoomi.com/view/63832/15092026-bilaspur-main) lekin page-images JS-rendered hain — khabar ka text khola/padha NAHI ja saka; sirf @prabodhminj ke IG collage (15 Sep 2026) par clipping dikhi jo source nahi. RETRY-LEADS L1 me rakha.
// 2. [Amrit Sandesh print, 15 Sep 2026] 'Chhindkalo Kotiya se Shivpur Rs 8.26 crore sadak ka bhoomi pujan Minj ne kiya' (IG collage par clipping) → REJECT: Amrit Sandesh whitelist me nahi hai.
// 3. [Navbharat print, 23 Aug 2026, Ambikapur] 'Education is necessary for success in life: MLA' + schoolgirls ko cycle vitran ki tasveeren (IG collage par clipping) → REJECT: Shala Praveshotsav/sarkari yojna ka karyakram; bhautik sanrachna ka lokarpan/shilanyas nahi; cycle vitran = sarkari abhiyan ke dauran vitran; print page khula bhi nahi.
// 4. [Haribhoomi print, 08 Jul 2026 + 11 Jul 2026, Bilaspur Surguja ed., page 3] 'schooli chhatraon ko cycle vitran' + 'MLA sankul stariya shala pravesh utsav me shamil, tilak lagakar karaya shala pravesh' (IG collage par clipping) → REJECT: Shala Praveshotsav sarkari abhiyan hai; Minj ne keval bhag liya/vitran kiya — vikas-sanrachna nahi.
// 5. [News24 Chhattisgarh, 22 Jun 2026] 'Lundra me Rs 27 crore sadak pariyojna ka Minj dwara surprise inspection; PWD adhikariyon ko fatkara' (IG/FB reel) → REJECT: (a) sirf nirikshan — nirikshan entry nahi banta; (b) non-whitelisted outlet.
// 6. [Swadesh News, 11 Sep 2026] 'MLA Prabodh Minj ke prayason se sadkon ke liye karodon swikrit — Amgasi-Kunni road ~Rs 27 crore, Ghutun-Kesra tender, Katinda-Barpara ~Rs 17 crore' (FB reel) → REJECT: (a) non-whitelisted; (b) sirf swikriti/ghoshna — bhoomi pujan/lokarpan nahi.
// 7. [National News Live, 11 Sep 2026] wahi sadak-pariyojna story (FB reel) → REJECT: non-whitelisted + ghoshna-only.
// 8. [Dainik Bhaskar print, 06-07-2026, Ambikapur ed.] 'Dr. Mukherjee ke rashtra nirman me yogdan ko kiya yaad — Samudayik Bhavan Lundra me BJP smaran karyakram; MP Chintamani Maharaj + MLA Minj maujood' (IG par clipping) → REJECT: party karyakram me maujoodgi; vikas-karya nahi.
// 9. [IG @prabodhminj, 14 Jun 2026] 'Dhaurpur me naye shaskiya college ka shilanyas/bhoomi pujan — akhbar clippings ka collage' → REJECT: (a) IG whitelist me nahi; (b) kaunsi akhbar, post-event hai ya pre-event ghoshna — verify nahi ho saka. NOTE: Dhaurpur college ki ghoshna khud CM Baghel ne May 2022 me ki thi (pre-term).
// 10. [IG @prabodhminj reel, 18 Jan 2026] 'bhoomi-pujan + fawde se shilanyas, Rs 284.01 lakh ki pariyojnaen' → REJECT: IG non-whitelisted; pariyojna pehchani nahi ja saki, fund-source disclose nahi.
// 11. [IG reel, 02 Oct 2026] 'Angan Milan Seva, Lundra — Poshan Maah karyakram me deep prajvalan, neta-bhoj' → REJECT: sarkari abhiyan ka keval shubharambh; bhautik sanrachna nahi.
// 12. [IG post, 07 Apr 2026] 'BJP 47th foundation day — Minj chief guest' (6 Apr 2026 akhbar clipping ke saath) → REJECT: party karyakram.
// 13. [Grand News Chhattisgarh via IG, 10 Sep 2026] 'Seva Sankalp Abhiyan — PM Modi ke 25 saal par BJP karyakram, Minj ne sambodhit kiya' → REJECT: party abhiyan + non-whitelisted.
// 14. [IG video, 25 Sep 2026] 'Anganwadi Kendra Lalmati (1), Gram Panchayat Lalmati ka udghatan — ribbon-cutting' → REJECT: IG non-whitelisted + ribbon katne wala vyakti Minj hai ya nahi, verify nahi ho saka.
// 15. [DD YouTube 'Jan Samvad', Aug 2026] 'Lundra me janmat — mixed opinion' (FB reel par) → REJECT: YouTube whitelist me nahi; opinion hai, works-entry nahi.
// 16. [Lok Manjari/TNINS, 10 Jun 2024] 'CM Vishnu Deo Sai ka Delhi Tribal Youth Hostel daura — Lundra MLA Shri Prabodh Minj were also present' → REJECT: maujoodgi; CM ka karyakram, MLA ki vyaktigat bhoomika disclosed nahi. URL: https://www.lokmanjari.com/article.php?page=17&menuid=1
// 17. [Lok Manjari/TNINS, 01 Oct 2024] 'Siyan Samman karyakram, Surajpur — attendee suchi me Lundra MLA Shri Prabodh Minj' → REJECT: maujoodgi; pre-event attendee list, post-event reporting bhi nahi.
// 18. [organiser.org, 13 Sep 2023] 'BJP ticket par Christian candidate ko lekar delisting samarthakon ka virodh' → REJECT: (a) pre-term (chunav se pehle ka vivad); (b) koi FIR ya adhikari-pusht janch nahi; (c) wartaman karyakaal me koi legal development nahi. Negative niyam poora nahi hota. URL: https://organiser.org/2023/09/13/195562/bharat/chhattisgarh-bjp-in-dock-over-candidature-of-christian-leader-from-tribal-dominated-lundra-constituency/
// 19. [myneta.info / Business Standard] 'halafnama: 0 criminal cases' → NOTE (context only): halafname ke pending mamle akele negative nahi, aur yahan koi mamla hai hi nahi. URL: https://www.myneta.info/Chhattisgarh2023/candidate.php?candidate_id=341
// 20. [ETV Bharat, 07 Dec 2023] 'First Christian MLA from BJP to take oath in Chhattisgarh' → REJECT: chunav-pashchat ghatna, works-entry nahi. URL: https://www.etvbharat.com/english/state/chhattisgarh/first-christian-mla-from-bjp-to-take-oath-in-chhattisgarh/na20231207070945664664007
// 21. [PRS India, mlatrack/prabodh-minz] 'Vidhansabha activity: upasthiti 91.8%, prashn 58 (period 03-12-2023 to 20-03-2026)' → NOTE: kisi prashn/maang ka dastaveji nateeja ya mantri-ashwasan whitelisted media me nahi mila; isliye entry nahi. URL: https://prsindia.org/mlatrack/prabodh-minz

// RETRY-LEADS: Prabodh Minz
// L1. Haribhoomi epaper, 15 Sep 2026 — 'Vidhayak ne kiya sadak nirman ka bhoomi pujan' (event: 13 Sep 2026; Chhindkalo Kotiya se Shivpur sadak, Rs 8.26 crore; bhoomi pujan Minj ne kiya). STATUS: print me post-event reporting maujood hai (Amrit Sandesh ne bhi chhapa, 15 Sep 2026) lekin epaper page-images JS-rendered — text tools se verify nahi ho saka. Archive: https://epaper.haribhoomi.com/view/63832/15092026-bilaspur-main (Bilaspur Surguja sub-edition, page 3 ke aaspaas dhoondho). Live-browser ya epaper subscription se verify hote hi entry banao (category: Sadak; badge: news).
// L2. Dhaurpur shaskiya college shilanyas (June 2026) — IG par akhbar clippings dikhi; kis akhbar me, post-event hai ya nahi — whitelisted outlet (Dainik Bhaskar/Haribhoomi/Navbharat/Patrika) me coverage mile to entry (category: School; badge: news).
// L3. 18 Jan 2026 bhoomi-pujan (Rs 284.01 lakh) — pariyojna ki pehchan aur whitelisted print coverage dhoondho.
// L4. CG DPR/jansampark (dip.cg.nic.in) press releases — 'Prabodh Minj' ya 'Lundra' keyword par — is worker ne check nahi kiya; badge 'sarkari' ki sambhavna.
// L5. Lundra ke liye itemized Vidhayak Nidhi swikriti suchi — sarkari portal ya whitelisted media me nahi mili; mile to GO-backed swikriti entry.

// REJECT-LOG: Rajesh Agrawal
// 1. [dailychhattisgarh, 21-Aug-2024] 'Lakhanpur NP ward 8 me Rs 20 lakh ka naya meat market, MLA ki pahal, lokarpan' → REJECT: outlet whitelist me nahi; URL https://www.dailychhattisgarh.com/surguja/230737/rss-feeds.php
// 2. [dailychhattisgarh, 09-Nov-2024] 'Katghora se Ambikapur NH-130 four-lane ko Gadkari ki swikriti, MLA ne patra likha tha' → REJECT: outlet whitelist me nahi; kendriya pariyojna me vyaktigat bhoomika ka ekmatra saboot non-whitelisted; URL https://www.dailychhattisgarh.com/surguja/240411/rss-feeds.php
// 3. [ghatatighatana, 23-Nov-2024] 'Lakhanpur Atmanand school me Rs 14.98 lakh paver block ka bhoomi-pujan MLA dwara' → REJECT: outlet whitelist me nahi; URL https://www.ghatatighatana.com/2024/11/23/136169/
// 4. [ghatatighatana, 25-Dec-2023] 'Ambikapur me 5 naye transformer (Rs 22 lakh) ka lokarpan MLA dwara' → REJECT: outlet whitelist me nahi; state bijli company ka kaam, vyaktigat bhoomika/fund nahi; URL https://www.ghatatighatana.com/2023/12/25/100120/
// 5. [ghatatighatana, 16-Nov-2025] 'Kunni me Rs 46.56 crore ke pul/sadak/bazaar shed/CHC ka bhoomi-pujan' → REJECT: Lundra vidhansabha seat, Ambikapur seat nahi; outlet whitelist me nahi; URL https://www.ghatatighatana.com/2025/11/16/184336/
// 6. [indiaxnews, Jul-2025] 'MLA ki pahal se Ambikapur seat ke vikas karyon ko Rs 49.41 crore ki swikriti' → LEAD: site payment-block (dead), outlet whitelist me nahi; whitelisted outlet me talash retry; URL https://www.indiaxnews.com/2025/07/4941.html
// 7. [cgmp.co.in/cityhotnews, 27-Apr-2026] 'Lakhanpur NP me Rs 283 lakh ki sadak/nali/samudayik pariyojnaon ka bhoomi-pujan mantri dwara' → LEAD: DPR press-note style lekin outlet whitelist me nahi; sarkari DPR portal par retry; URL https://www.cgmp.co.in/the-nature-of-lakhanpur-nagar-panchayat-will-change-with-the-expansion-of-basic-facilities-cabinet-minister-rajesh-aggarwal-has-announced-development-projects-worth-rs-283-lakh/159051/
// 8. [dailychhattisgarh/media24news, 11-Dec-2025] 'Binkara GP me Saraswati Shishu Mandir school bhawan, Rs 20 lakh Vidhayak Nidhi, bhoomi-pujan' → LEAD: outlet whitelist me nahi; DPR/whitelisted outlet me talash retry; URL https://www.dailychhattisgarh.com/surguja/285549/-
// 9. [vistaarnews, ~Sep-2026] 'Badhal sadkon ko lekar mantri ke bangle ka gherao, pradarshankariyon se aashvasan' → REJECT: outlet whitelist me nahi; virodh-pradarshan, kaam nahi; URL https://vistaarnews.com/chhattisgarh/surguja/ambikapur-sadak-ke-liye-mantri-rajesh-agarwal-bangla-gherao-baarish-mein-pradarshan-chai-laddu-aalu-chap/
// 10. [bhaskar.com, 2026] 'CM Sai ne Ambikapur BJP karyalay (Rs 2 crore) ka bhoomi-pujan kiya, Rajesh Agrawal upasthit' → REJECT: CM ka karyakram, party karyalay, MLA sirf upasthit; URL https://www.bhaskar.com/amp/local/chhattisgarh/ambikapur/news/cm-vishnu-deo-sai-surguja-bjp-office-bhumi-pujan-137105837.html
// 11. [bhaskar.com, Apr-2026] 'Ambikapur Lalamati me Agroha Trust Palace (150 kamre) ka bhoomi-pujan; MP Brijmohan chief guest, mantri vishisht atithi' → REJECT: samaj/community bhavan (daan se), mantri sirf atithi; URL https://www.bhaskar.com/local/chhattisgarh/ambikapur/news/mmp-brijmohan-critiques-congress-ambikapur-agroha-bhavan-bhumi-pujan-137743045.html
// 12. [bhaskarhindi.com (IANS), 16-Oct-2026] 'Surguja me 35 sarkari schoolon me free NEET-JEE online coaching (DMF fund), 17 Oct ko mantri dwara shubharambh' → REJECT: sarkari abhiyan ka keval shubharambh; URL https://www.bhaskarhindi.com/other/hindi-no-more-expensive-coaching-free-neet-jee-classes-to-35-govt-schools-in-surguja-20261016203603-1377710
// 13. [haribhoomi.com, 15-Mar-2026] 'Kathavachak Ramanuragi Maharaj ka viral video: mantri ne Lakhanpur me katha karai, Rs 15 lakh nahi diye; mantri ne aarop jhoothe bataye' → REJECT as negative: FIR ya naam-daar adhikari-pusht janch nahi; sirf contested aarop-praty aarop; URL https://www.haribhoomi.com/state-local/chhattishgarh/news/ambikapur-rajesh-agarwal-allegations-preacher-demanded-rs-15-lakh-govt-funds-religious-not-possible-86861/amp
// 14. [visionnewsservice, 2025] 'Ramgarh mahotsav ka shubharambh MLA ke mukhya aatithya me' → REJECT: outlet whitelist me nahi; sanskritik mahotsav ka shubharambh; URL https://visionnewsservice.in/single-page/129374
// 15. [cgprayagnews, Oct-2024] 'PM Modi ne Maa Mahamaya airport Darima ka virtual udghatan kiya; MLA upasthit' → REJECT: outlet whitelist me nahi; PM ke karyakram me maujoodgi; URL https://cgprayagnews.com/virtual-inauguration-of-maa-mahamaya-airport-darima/
// 16. [visionnewsservice/indianmasterminds, Apr-2026] 'Lundra kisan sammelan me CM Sai ne Rs 281 crore pariyojnaon ka lokarpan-bhoomi-pujan kiya' → REJECT: CM ka karyakram, Ambikapur seat nahi (Lundra), MLA ki vyaktigat bhoomika nahi; URL https://indianmasterminds.com/news/chhattisgarh-vishnu-deo-sai-281-crore-development-projects-farmers-196750/
// 17. [univarta (PTI), 17-Apr-2026] 'Mainpat kshetra me paryatan suvidhaon ke shed ka bhoomi-pujan' → REJECT: Mainpat Sitapur seat me hai, Ambikapur seat nahi; mantri-portfolio paryatan nirnay (strict mantri-niyam); URL https://www.univarta.com/news/madhya-pradesh-chhattisgarh/story/3814049.html
// 18. [yashbharat/bansalnews] 'SSP Rajesh Agrawal ki fake Facebook ID / SP Rajesh Agrawal ne 3 policekarmiyon ko nilambit kiya' → REJECT: ye Surguja SP (police adhikari) hain, MLA Rajesh Agrawal nahi; URL https://www.yashbharat.com/big-audacity-of-cyber-thugs-in-chhattisgarh-surguja-ssp-rajesh-aggarwal-created-fake-facebook-id/
// 19. [clipper28, 15-Sep-2026] 'Sarguja sambhag me 44 sadak karyon ko Rs 1093.73 crore ki prashasakiya swikriti' → REJECT: outlet whitelist me nahi; rajya sarkar ki sambhag-stariya swikriti, MLA ki vyaktigat bhoomika darj nahi; URL https://clipper28.com/road-infrastructure-in-surguja-division-to-receive-a-historic-boost/
// 20. [mediapassion, 20-Apr-2026] 'Ambikapur me Shri Agroha Palace ka bhoomi-pujan mantri dwara' → REJECT: outlet whitelist me nahi; samaj bhavan (item 11 ke same event); URL (see item 11)
// 21. [public.app video, Aug-2026] 'Lakhanpur me machhli beej vitran, mantri atithi' → REJECT: outlet whitelist me nahi; vibhagiya yojna ka vitran karyakram, kaam nahi; URL https://public.app/video/sp_xrao4p2kcp568
chhattisgarhWorks['rajesh-agrawal'] = [
  {
    title: 'Tourism and Culture Minister Rajesh Agrawal ne Ambikapur kshetra me Rs 7 crore lagat wale pul ka bhoomi-pujan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Univarta (PTI)',
    sourceUrl: 'https://www.univarta.com/news/madhya-pradesh-chhattisgarh/story/3814049.html',
    date: '2026-04-17',
    note: 'PTI/Univarta ke mutabik mantri Rajesh Agrawal ne shukrawar ko Ambikapur kshetra me Rs 7 crore ki lagat se banne wale pul ka bhoomi-pujan kiya; isi khabar me Mainpat kshetra ke paryatan shed ka bhi zikr hai jo Ambikapur seat se bahar hai.',
    period: '2023-2028',
  },
];

// REJECT-LOG: Ramkumar Toppo (BJP, Sitapur ST)
// 1. [The Times of India, Nov 2023] 'Caste certificate controversy surrounds BJP candidate' → REJECT: pre-term vivad (Oct-Nov 2023, chunav se pehle); current karyakaal me HC ka final faisla / certificate radd-bahali / chargesheet jaisa koi legal development established media me nahi mila — https://timesofindia.indiatimes.com/city/raipur/caste-certificate-controversy-surrounds-bjp-candidate-in-chhattisgarh-elections/articleshow/104854694.cms
// 2. [Chhattisgarh Aaj, 2024] Maa Mahamaya Airport ke lokarpan-virual shubharambh samaroh me 'vidhayak Sitapur Shri Ramkumar Toppo' upasthit → REJECT: sirf dusre ke karyakram me maujoodgi, koi vyaktigat bhoomika ya fund nahi; outlet whitelist me nahi — https://chhattisgarhaaj.com/article-cg.php?page=929&menuid=11
// 3. [Fatafat News, 8 Sep 2026] 'Shikshak Sadan ki maang poori hone par shikshakon ne vidhayak Ramkumar Toppo ke prati aabhaar jataya' (Ambikapur) → REJECT: whitelist me nahi (chhota portal); community-claimed shrey, fund ya bhautik structure disclose nahi — https://fatafatnews.com/?f=331373921
// 4. [Fatafat News, 4 Aug 2025] 'Shivalay me jalabhishek ke saath vidhayak Ramkumar Toppo sang kanwariyon ki kanwar mahayatra sampann' → REJECT: dharmik karyakram me upasthiti, vikas karya nahi; whitelist me nahi — https://fatafatnews.com/?f=567051914
// 5. [Lok Manjari, 1 Oct 2024] CM ke 'Siyan Samman' karyakram me Sitapur MLA Ramkumar Toppo upasthit → REJECT: dusre neta (CM) ke karyakram me maujoodgi — https://www.lokmanjari.com/article.php?page=8&menuid=1
// 6. [The Journalist, 2025] Karma Mahotsav karyakram me MLA Ramkumar Toppo upasthit → REJECT: karyakram me upasthiti, vikas karya nahi; whitelist me nahi — https://www.the-journalist.com/?p=40317
// 7. [IBC24 topic page, Jun 2026] Tehsildar case updates (samarthakon ka surrender, hadtaal khatm) → REJECT/LEAD: IBC24 whitelist me nahi; negative pehle hi Indian Express se cover — https://www.ibc24.in/topic/sitapur-mla-controversy
// 8. [General works search] Vidhayak Nidhi, lokarpan, shilanyas, bhoomipoojan, CG jansampark — kisi bhi whitelist outlet me Ramkumar Toppo ke karyakaal ke kisi vikas karya ki post-event reporting nahi mili → REJECT (no evidence; shanka par reject)
chhattisgarhWorks['ramkumar-toppo'] = [
  {
    title: 'Nayab tehsildar se maarpeet ke aarop me Sitapur MLA Ramkumar Toppo par FIR darj',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/india/ramkumar-toppo-fir-revenue-official-assault-case-10712151/',
    date: '2026-05-28',
    note: 'NEGATIVE: Chhattisgarh ke BJP MLA Ramkumar Toppo aur unke ek darjan se zyada sahyogiyon par Surguja jile me revenue adhikari (nayab tehsildar Tushar Manik) se maarpeet ke aarop me FIR darj. Vivad parole se judi dastavez par hastakshar ko lekar hua; mahila (MLA ki rishtedar) ki shikayat par adhikari ke khilaf counter-FIR bhi. Stage: FIR / janch — final faisla abhi nahi. Article me MLA ka paksh/comment darj nahi hai.',
    period: '2023-2028',
  },
];

// ---- Surguja district batch END (1 work, 1 negative) ----

// ---- Jashpur district batch (researched 2026-10-17) ----

chhattisgarhWorks['raimuni-bhagat'] = [
  {
    title: 'Jesus Christ par tippani ke mamle me Jashpur court ne MLA ke khilaf BNS 196/299/302 me criminal case register karne ka order diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI via Telegraph India',
    sourceUrl: 'https://www.telegraphindia.com/india/chhattisgarh-court-files-case-against-bjp-mla-for-remarks-on-jesus-christ-summons-her/cid/2076251',
    date: '2025-01-08',
    note: "NEGATIVE: PTI (Telegraph India, 08.01.25) ke anusar Jashpur ke Judicial Magistrate First Class Anil Kumar Chauhan ne 6 Jan 2025 ko BJP vidhayak Raymuni Bhagat (Jashpur seat) ke khilaf BNS sections 196 (dharmik aadhar par samoohon me dushmani failana), 299 aur 302 ke tehet criminal case register karne ka order diya. Ghatna 1 Sep 2024 ki hai: Asta thana kshetra ke Dhekni village me ek karyakram me unhone Jesus Christ aur dharmantaran par sthaniya boli me tippani ki thi; video viral hua aur Christian samaj ne jile ke sabhi thanon me shikayat di. Police ne janch me koi objectionable content nahi paya aur shikayatkarta ko court jane ko kaha; complainant Herman Kujur (advocate Vishnu Kuldeep) ne 10 Dec 2024 ko court me parivad diya; 6 gawahon ke bayan aur video CD ki janch ke baad court ne 'sufficient substance' mana aur 10 Jan 2025 ko peshi ka notice diya. Report me MLA ka jawab/paksh prakashit nahi hai — ye anupasthiti yahan disclose ki ja rahi hai.",
    period: '2023-2028'
  },
  {
    title: 'MLA ke dharne ke baad Sanna me shasakiya bhoomi par avaidh nirman par prashasan ne bulldozer chalaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Haribhoomi',
    sourceUrl: 'https://www.haribhoomi.com/state-local/chhattisgarh/jashpur-mla-raimuni-bhagat-demanding-action-illegal-construction-659688',
    date: '2025-12-20',
    note: 'Haribhoomi (20 Dec 2025) ke anusar Jashpur jile ke Sanna me court ke stay order ke bawajood shasakiya bhoomi par ho rahe avaidh nirman ke khilaf MLA Raimuni Bhagat sainkon karyakartaon aur graminon ke saath kadake ki thand me dharne par baithin aur prashasan se turant karyavahi ki maang ki; uske baad prashasan ne bulldozer se avaidh nirman dhwast kiya. Credit capped: prashasanik karyavahi unke hastakshep ka dastaveji nateeja, nirman prashasan ne toda.',
    period: '2023-2028'
  },
];

chhattisgarhWorks['gomati-sai'] = [
  {
    title: 'Pathalgaon me 9 sadkon ke liye Rs 25.91 crore ki PWD prashasakiya svikriti — MLA ki maang par',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Haribhoomi',
    sourceUrl: 'https://www.haribhoomi.com/state-local/chhattishgarh/news/jashpur-pathalgaon-mla-gomti-sai-construction-road-projects-approval-25-91-crores-received-77570',
    date: '2025-03-30',
    note: 'Haribhoomi (Jitendra Soni, Jashpur) ke anusar Chhattisgarh sarkar ke nirdesh par Lok Nirman Vibhag ne Pathalgaon vidhansabha ki 9 sadak pariyojnaon ke liye kul Rs 25.91 crore ki prashasakiya svikriti di; report ise MLA Gomati Sai ke prayas/pahal ka nateeja batati hai aur MLA ne svikriti par mukhyamantri ka aabhar vyakt kiya. Credit: sarkar/PWD ki svikriti, MLA ki maang par. Itemized: Bandhanpur-Chhatasarai 2.85 km Rs 2.73 cr; Palidih Basti-Lakhjhar petrol pump 2.60 km Rs 3.06 cr; Chongribahar Gadla mod-Kotga pul 2.50 km Rs 2.98 cr; Tildega Atal Chowk-Amakani 2.26 km Rs 2.01 cr; Surajgarh middle school-Gauthan 2.55 km Rs 2.16 cr; Saraitola-Barpara 3.20 km Rs 2.35 cr; Kansabel-Shabdmanda 2.10 km Rs 2.23 cr; Mudabahla Karrajor-Dhanupara-Kadro 5.30 km Rs 6.34 cr; Farsatoli-Kolhenjhariya 2.20 km Rs 2.01 cr.',
    period: '2023-2028'
  },
];

chhattisgarhWorks['vishnu-deo-sai'] = [];

// REJECT-LOG (CM-niyam par): nalanda parisar bhoomipujan (Rs 4.37cr), 50-bed hospital bhoomipujan, 9 kaam (Rs 9.65cr, 20 Jun 2026) — sab non-whitelist (vedantsamachar, navpradesh, thefrontpage24); e-paper/whitelist retry.
// Jashpur district batch END (3 works, 1 negative)


// ---- Raigarh district batch (researched 2026-10-17) ----

chhattisgarhWorks['om-prakash-choudhary'] = [
  {
    title: 'Vitta Mantri ki pahal par Gajmar Pahar ko dharmik paryatan sthal ke roop me vikas — sadak, pakke raste aur buniyadi suvidhaen ban rahi hain',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/chhattisgarh/raigarh/news/raigarh-cm-bhumi-pujan-hanuman-statue-tourism-jobs-137879667.html',
    date: '2026-05-07',
    note: 'Dainik Bhaskar (7 May 2026) ke anusar Raigarh ke Gajmar Pahar (Sankatmochan Hanuman Mandir, 1980 se aastha kendra) ko paryatan sthal ke roop me vikasit karne ki yojna mantri O.P. Choudhary ki pahal par chal rahi hai; pahar tak sadak, pakke raste aur anya buniyadi suvidhaon ka sarkari kaam page par documented hai. Wahan 51-feet kansya Hanuman pratima ki sthapana ka bhoomi-pujan unhone khud kiya, lekin page saaf kehta hai pratima jansahayog (public contribution) se banti hai — pratima ka shrey unka sarkari kaam nahi, isliye disclose kiya gaya hai. Credit: pahal ka shrey mantri-MLA ko, kaam sarkari suvidhaon tak seemit.',
    period: '2023-2028'
  },
];

chhattisgarhWorks['vidyawati-sidar'] = [];

// REJECT-LOG (vidyawati-sidar, INC, Lailunga ST): 9 rejects — whitelisted me koi post-event reporting nahi; vipakshi MLA ki coverage patli. Pati Kunjbihari Sidar ka nidhan (Patrika, 2026-08-09) parivarik ghatna, negative nahi; Mudagaon coal-block protest giraftari (non-whitelist, FIR/janch nahi) negative threshold se bahar. Leads: Nakti demolition punarvas order; Haribhoomi/Bhaskar/Patrika Raigarh edition archives.

chhattisgarhWorks['laljeet-singh-rathia'] = [];

// REJECT-LOG (laljeet-singh-rathia, INC, Dharamjaigarh ST): 12 rejects. IE (10 Jan 2026) "Congress MLA arrested in cheating case" = Baleshwar Sahu (Jaijaipur), naam-jaal clear; Adani/Purunga koyla virodh me MLA ka samarthan = andolan, works nahi; Dharamjaigarh godam bhoomipujan MP Radheshyam Rathia ne karaya, MLA ki bhoomika nahi. Lead: cgvidhansabha Q.1867 (Mar 2025) nirman-karya prashn ka mantri-jawab whitelisted me mile to entry.

chhattisgarhWorks['umesh-patel'] = [];

// REJECT-LOG (umesh-patel, INC, Kharsia): 13 rejects. Pita (Nanda Kumar Patel) ke mamle bilkul alag rakhe; 2018-23 mantri-kaal ke kaam purane tenure ke, entry nahi; Kohardipa transformer (public.app) rejected source; 'Millet on Wheels' flag-off CM ne kiya, wo upasthit. Koi qualifying negative nahi. Leads: CG DPR/jansampark press releases (dprcg.gov.in VM se unreachable); Raigarh zila-panchayat Vidhayak Nidhi utilization reports.
// Raigarh district batch END (1 work, 0 negatives)


// ---- Sarangarh-Bilaigarh district batch (researched 2026-10-17) ----

chhattisgarhWorks['uttari-ganpat-jangde'] = [];

// REJECT-LOG (uttari-ganpat-jangde, Sarangarh): 1. "Congress MLA's provocative speech in CG — told the youth we have to vandalize the collectorate, also reminded of Balodabazar incident" (the-journalist.com tag page, ~669 days purani entry; page khola aur padha) — non-whitelist outlet + FIR pati ke khilaf (parivar ka mamla, negative niyam me excluded) + MLA khud aaropi nahi + viral-video dawa, koi FIR/janch MLA ke khilaf documented nahi. REJECT. 2. "Chief Minister Shri Sai to give a gift of development works worth Rs 186 crore to Sarangarh-Bilaigarh district on August 11" (theworldopinion.com, 2025-08-10; snippet padha) — non-whitelist + PRE-EVENT announcement (post-event reporting nahi) + Uttari Ganpat Jangde sirf "special guests" ki soochi me — dusre neta (CM) ke karyakram me maujoodgi. REJECT. 3. CM Bhupesh Baghel ka 2022 me Sarangarh-Bilaigarh jile ka udghatan + Rs 540 crore ke karyon ki saughat (the-journalist.com, indianeconomicobserver.com; ~Sept 2022) — pre-term (Dec 2023 se pehle), CM ke karya, MLA ki bhoomika nahi. REJECT. 4. CM Vishnu Deo Sai ka Sarangarh me Govt Lochan Prasad Pandey College parisar me Rs 186 crore (Rs 96 crore lokarpan + Rs 90 crore bhoomi-pujan) ka karyakram (indianmasterminds.com; ~Aug 2025) — CM ke sarkari karya, Uttari Ganpat Jangde ka koi vyaktigat lokarpan/bhoomika documented nahi; page khola nahi gaya kyonki snippet me hi MLA se sambandh nahi tha. REJECT/LOG. 5. Candidate-profile pages (business-standard.com, news18/beta, ibc24.in, abplive election results, myneta.info) — chunavi jaankari/affidavit, koi karya nahi. REJECT. 6. "Sarangarh-Bilaigarh jile se badi khabar" type YouTube results — YouTube/aggregator, whitelist me nahi. REJECT.
// RETRY-LEADS (parent ke liye): A. the-journalist.com provocative-speech story (pati par FIR ~Dec 2024): agar established whitelisted media (Bhaskar/Patrika/Haribhoomi/Express) ne us video/FIR par post-event reporting ki aur usme MLA ke khilaf koi FIR ya officer-pusht janch documented ho, to negative entry par vichar ho sakta hai; filhaal non-whitelist + parivar-mamla hone se rejected. B. CG Vidhan Sabha karyawahi/question lists (Dec 2023+): opposition MLA ke liye ye mukhya documented-kaarya rasta hai — unke prashnon par mantri ka likhit uttar/ashwasan mila to 'dastaveji nateeja' entry ban sakti hai; PRS mlatrack page par activity hai lekin srot (cgvidhansabha.gov.in) ki jaanch pending. C. Sarangarh block ke school/aspataal/sadak lokarpan 2024-26 me unki mukhya-atithi bhoomika — whitelisted outlets me post-event reporting dikhe to entry ban sakti hai; filhaal kuch nahi mila.

chhattisgarhWorks['kavita-pran-lahrey'] = [];

// REJECT-LOG (shanka ho to reject; galat entry se khali profile behtar)
// ============================================================
// R1. Bhaskar 'MLA flags off new ambulance' (Bilaigarh, ~Jul 2026):
//     snippet ke anusar shasakiya samudaayik swasthya kendra me do
//     nai 108 ambulances ka shubharambh/hari jhandi — sarkari yojana
//     ki seva ka keval shubharambh; koi bhautik sanrachna ka vyaktigat
//     lokarpan nahi, MLA-nidhi disclosure nahi. REJECT (shubharambh).
//     Page khul nahi saka (bhaskar.com 403). URL:
//     https://www.bhaskar.com/local/chhattisgarh/raipur/bilaigarh/news/mla-flags-off-new-ambulance-dbp-137615115.html
//     Lead: live-browser retry par page kholein; agar page me MLA-nidhi
//     se ambulance-ki vyavastha ka dastavej ho to entry ban sakti hai.
// R2. Bhaskar 'MLA office opens on completion of 2 years, former Dy CM
//     Singhdev joins' (Sarangarh, ~Feb 2026): karyalay ka udghatan +
//     karyakaal-utsav — raajnaitik samaroh; koi jan-hit sanrachna nahi.
//     REJECT. URL: https://www.bhaskar.com/amp/local/chhattisgarh/raigarh/sarangarh/news/mla39s-office-opens-on-completion-of-2-years-former-deputy-cm-singhdev-joins-136612257.html
// R3. CG Vidhan Sabha prashn-suchi (sarkari PDF, 14 Jul 2026, prashn
//     273): MLA ka Bilaigarh ki jarnajar/lambit sadkon par prashn;
//     mantri (Dy CM Arun Sao) ka uttar — '(k)(kh)(g) jankari pustakalay
//     me rakhe parishisht anusar; (gh) karyavahi prakriyadhin, nischit
//     tithi batana sambhav nahi.' Dastaveji nateeja/mantri-ashwasan
//     nahi. REJECT (prashn; nateeja nahi). URL:
//     http://cgvidhansabha.gov.in/hindi_new/satra/sixth_assembly/Tenth/q14072026.pdf
//     Lead: Parishisht 'A'/'B' (library annexures) me agar sadak-wise
//     svikriti ho to GO-svikriti route se entry.
// R4. Usi PDF me MLA ka prashn 303 (nal-jal/yojanaon ke pani-tanki:
//     299 tankiyan purn, 207 me niyamit aapoorti) — mantri ka
//     sankhyatmak uttar; koi nai svikriti/ashwasan nahi. REJECT
//     (soochna-prashn, nateeja nahi). Lead: annexure 'A'/'B' me
//     gaon-war suchi mile to water-tank completion ko GO-backed
//     samiksha ke roop me track karo (credit capped).
// R5. dailychhattisgarh.com (non-whitelist) 'Vidhyak ne kiya cricket
//     spardha ka udghatan' (Sarsinwa, 5 Jan 2024): khel-samaroh ka
//     mukhya-atithi udghatan; koi bhautik sanrachna nahi. REJECT.
//     URL: https://www.dailychhattisgarh.com/sarangarh-bilaigarh/202379/rss-feeds.php
// R6. public.app (non-whitelist) Bar-Nawapara abhyaran daura (Mar 2026):
//     sirf nirikshan/daura + samasya-sunwai; koi sanrachna/svikriti
//     nahi. REJECT. URL: https://public.app/video/sp_xjvcreev45cc4
// R7. public.app (non-whitelist) Jaijaipur sadbhavana bhavan samman
//     samaroh (Oct 2025): sirf upasthiti. REJECT.
//     URL: https://public.app/amp_video/sp_9nm85svgeaxlm
// R8. mpnewstimes.com (non-whitelist) nagar-panchayat Bhatgaon me
//     bhrashtachar ke khilaf dharna: virodh/pradarshan; SDM ne
//     ashwasan diya, dastaveji nateeja nahi. REJECT (sirf maang).
//     URL: https://mpnewstimes.com/article/mla-lahare-opened-a-front-against-corruption-sat-on-a-dharna
// R9. Haribhoomi (whitelisted) karmveer-ratna samman samaroh (Bemetara):
//     MLA mukhya-atithi ke roop me upasthit; koi bhautik sanrachna
//     nahi. REJECT. URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/state-level-honors-ceremony-bemetara-teachers-honored-karmveer-ratna-samman-87061/amp
// R10. hindi.hashtagu.in (non-whitelist) vidhansabha prashn (Mar 2025):
//      Bilaigarh schools se laptop/computer wapas lene par mantri ka
//      likhit uttar (smart-class/ICT lab ka tathyatmak vivaran); koi
//      nai svikriti/ashwasan nahi. REJECT. URL:
//      https://hindi.hashtagu.in/tag/assembly-session/feed
// R11. CM Bhupesh Baghel dwara Bilaigarh me Rs 74.38 crore ke 47
//      karyon ka lokarpan/shilanyas (thenewsindia.in etc., Dec 2022):
//      karyakaal se PEHLE; dusre neta ka karyakram. Scope se bahar.
//      REJECT. URL: https://www.thenewsindia.in/topstory.php?articleid=1666
// R12. Bhaskar 'Congress MLA Kavita danced on Chhattisgarhi song':
//      niji video; kaam nahi. REJECT.
//      URL: https://www.bhaskar.com/local/chhattisgarh/raigarh/sarangarh/news/congress-mla-kavita-danced-on-chhattisgarhi-song-132446623.html
// R13. Bhaskar 'Youth Congress district VP niyukti' aur 'BJP called all
//      MLAs': party-sangathanatmak chunav khabrein; unka naam sirf
//      ullekh me. REJECT.
// R14. asianetnews/kadwaghut (non-whitelist) Sarangarh khel-mahakumbh
//      (Oct 2026): mantri ke ghoshna-program me MLA sirf upasthit.
//      REJECT (dusre neta ka karyakram/maujoodgi).
// R15. aimamedia.org FB-post FIR-maang: MLA complainant; koi aarop un
//      par nahi. Negative nahi; source non-whitelist. LOG only.
//      URL: https://aimamedia.org/newsdetails.aspx?nid=467969
//
// ============================================================
// RETRY-LEADS (parent ke liye)
// A. Bhaskar ambulance page (R1): 403 par block hua; live browser se
//    retry. Agar MLA-nidhi se ambulance vyavastha ho to valid entry.
// B. Vidhan Sabha Q-273/Q-303 annexures (R3/R4): parishisht 'A'/'B' me
//    sadak-war svikriti ya gaon-war nal-jal sthiti mile to sarkari
//    dastavej-backed entries ban sakti hain (credit capped).
// C. Vidhayak-nidhi sanction list: Sarangarh-Bilaigarh jila portal par
//    Bilaigarh (SC) ke liye 2024-26 ki itemized Vidhayak Nidhi suchi
//    dhoondho — itemized sanction lists valid hain.
// D. Bhaskar/Haribhoomi me 2025-26 ke Bilaigarh bhoomipujan/lokarpan
//    ki post-event reporting — filhaal koi whitelisted reporting nahi
//    mili; MLA karyalay ka 2-year note (Feb 2026) sanket deta hai ki
//    field activity kam covered rahi hai.
// ============================================================

// ---- Sarangarh-Bilaigarh district batch END (0 works, 0 negatives) ----


// ---- Korba district batch (researched 2026-10-17) ----

chhattisgarhWorks['phool-singh-rathiya'] = [];

// REJECT-LOG (phool-singh-rathiya, Rampur): 1. "Vidhayak Phoolsingh Rathiya ne lakhon ki lagat se banne wali vikas karya ki bhoomipujan" (jaijoharindiatv.com, 20/5/2025; page khola, post-event reporting) — Gram Panchayat Khutakuda (tehsil Kartala) me Diharin Dai mandir parisar me Rs 10 lakh samuday bhavan ka bhoomipujan, saath Ghinara-Khutakuda pakki sadak + light suvidha ke dawe — NON-WHITELIST outlet + fund source undisclosed + aadhaar keval MLA ka dawa (dawe wali bhasha: "itihaas me pehli baar"). RETRY-LEAD neeche. REJECT. 2. "Demand for dam in Katangnala, 1600 acres will be irrigated, 200 farmers will benefit" (Dainik Bhaskar/amp, ~10 mahine purani) — whitelisted, lekin SIRF MAANG/prastav: Madanpur panchayat ke grameenon ne baandh ki maang ki, vidhayak 5 km paidal gaye, "prashasan se charcha karenge" ashwasan diya — koi swikriti/GO/dastaveji nateeja nahi. REJECT. 3. "Vidhayak nidhi se vibhinn gramon ke vikas ke liye 2.56 crore rupaye swikrit" (tarunchhattisgarhkorba.com, 2026-09-28; itemized list) — Janpad Panchayat BALAUDA + AKALTARA (Janjgir-Champa) ke karya; Rampur/Korba se sambandh nahi, alag vidhayak ka nidhi-prastav; outlet non-whitelisted bhi. REJECT. 4. "Rampur me daudegii electric city bus! Vidhayak Phoolsingh Rathiya ne collector ko likha patra" (vedantsamachar.in, 2026-09-03) — sirf maang-patra (e-bus ki maang), non-whitelisted. REJECT. 5. "Congress vidhayak Phoolsingh Rathiya ne collector ko likha patra, farzi gram sabha ke dwara gaun khanij NOC ko nirast" (indiakhabar24.co.in, 2024-09-04) — collector ko shikayat/maang-patra (Fatteganj NOC + Girari atikraman); koi karya/fund/nateeja nahi; non-whitelisted; MLA khud aaropi nahi — negative nahi. REJECT. 6. "Rampur vidhayak Phoolsingh Rathiya ne collector ko patra likhkar aabkari upnirikshak Mukesh Pandey ke sthanantaran ki maang ki" (public.app video) — sirf maang; public.app whitelist me explicitly excluded. REJECT. 7. "Sansad Jyotsna Mahant evam Rampur vidhayak Phool Singh Rathiya ne gram Kachhar, Tilaidad, Kodiyaghat me grameenon se bhent-mulakat" (tarunchhattisgarhkorba.com) — sirf nirikshan/daura + MP ke karyakram me maujoodgi; non-whitelisted. REJECT. 8. "DMF Korba shasi parishad baithak — 2026-27 ke prastavit karyon ko swikriti" (ujjwalpradesh.com / adityabharat.com) — mantri Lakhanlal Devangan ki adhyakshta; vidhayak ki keval upasthiti; non-whitelisted. REJECT. 9. "Congress MLA will not reside in MLA colony being built in Raipur Nakti Gaon" (patrika.com — whitelisted, 10 vidhayakon ne CM ko patra likha jinme Phool Singh Rathiya bhi) — virodh-patra/advocacy; koi bhautik sanrachna/fund/nateeja nahi; negative nahi. REJECT. 10. "BJP ki mahila neta ki gundagardi — vidhayak Phool Singh Rathiya ne SP ko likha patra" (humsamvet.com, June 2025) — keval advocacy-patra (BJP netri Jyoti Mahant ke khilaf karwai ki maang); non-whitelisted. REJECT. 11. "Congress economic blockade VIP Chowk" (haribhoomi.com, 22 July 2025 — whitelisted) — party ke chakkajam me maujoodgi (Katghora-Amhikaapur NH130 par); virodh-pradarshan, koi karya nahi. REJECT. 12. Vidhayak pratinidhi Jay Kishan Patel par Rajgamar chowki me jaatigat gaali-galauj + maarpeet ki FIR, counter-case bhi (newsaction.co.in + vedantsamachar.in, 3 Jan 2026; ghatna 31.12.2025) — AAROPI pratinidhi hai, MLA khud nahi ("parivar/seva ke mamle" excluded logic); dono outlets non-whitelisted; negative niyam (established media + MLA khud aaropi + FIR/janch) poora nahi hota — negative entry NAHI. RETRY-LEAD neeche. REJECT. 13. "Rampur vidhan sabha kshetra me 232.93 crore uddhatan aur shilanyas" (arbtimes.in / dainiktribuneonline.com, Oct 2026) — NAAM-JAAL: ye HIMACHAL PRADESH ke Rampur Bushehr (Shimla) me CM Sukhvinder Sukhu ka karyakram hai, Chhattisgarh ke Rampur se koi sambandh nahi. REJECT. 14. Haribhoomi: "MP ke Congress vidhayak Phool Singh Baraiya ka publicity stunt" (Dec 2023) — alag vyakti (Madhya Pradesh), naam-samanata ka jaal. REJECT. 15. "Hasdev nadi par bane pul ki railing hui kshatigrast — vidhayak Phool Singh Rathiya ne collector ko likha patra" (khabarurja.com) — sirf marammat ki maang-patra (Gram Panchayat Kudurmal); non-whitelisted. REJECT. 16. Candidate-profile/election-results (zeenews, abplive, news18, business-standard, oneindia, myneta.info, wikipedia) — chunavi jaankari/affidavit, koi karya nahi. REJECT.
// RETRY-LEADS (parent ke liye): A. Khutakuda samuday bhavan (Rs 10 lakh) bhoomipujan, 20/5/2025 — abhi keval jaijoharindiatv.com (non-whitelisted) par documented; bhoomipujan post-event hai aur bhautik sanrachna bhi. Agar Dainik Bhaskar/Patrika/Haribhoomi/Navbharat ne isi event par post-event reporting ki ho (fund source disclosed ke saath), to VALID entry ban sakti hai; dikkat: sanrachna mandir parisar me hai — "sarkari sanrachna" hona verify karna hoga. B. Vidhayak pratinidhi Jay Kishan Patel par Rajgamar chowki FIR (Jan 2026): agar whitelisted media (Bhaskar/Patrika/Haribhoomi/Express) ne is par reporting ki AUR usme Phool Singh Rathiya ke KHILAF khud koi FIR/naam-daar adhikari-pusht janch documented ho, to negative entry par vichar; pratinidhi akele par negative niyam poora nahi hota. C. CG Vidhan Sabha karyawahi (cgvidhansabha.gov.in): opposition MLA ke prashn/maang ka likhit uttar ya mantri-ashwasan mila ho to 'dastaveji nateeja' entry ban sakti hai; karyakaal Dec 2023 se — prashn-kosh ki srot-seedhi jaanch pending.

chhattisgarhWorks['premchand-patel'] = [
  {
    title: 'Katghora ke Ranjana se Litiyakhar tak 3.35 km ki PWD sadak ka bhoomipujan — Rs 2.87 crore, purani maang poori hone ka dawa',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/chhattisgarh/bilaspur/news/bhoomipujan-road-to-be-built-from-ranjana-to-litiyakhar-at-a-cost-of-rs-287-crore-136520165.html',
    date: '2026-02',
    note: 'Dainik Bhaskar ki post-event report ke anusar Katghora vidhayak Premchand Patel ne Ranjana se Litiyakhar tak 3.35 kilometre sadak ka bhoomipujan kiya; 2 crore 87 lakh rupaye ki lagat se nirmaan PWD vibhag karayega. Vidhayak ne kaha ki sadak ki purani maang thi, jise poora kiya gaya hai, aur sadak banne se graminon ki aawajahi aasan hogi. Karyakram me sarpanch Mamta Markam, Litiyakhar sarpanch Bhajan Singh, SDO Satish Pandey sahit anek log upasthit the. DATE SACH: page par exact date nahi milti — ’8 mahine pehle’ marker se February 2026 approximate hai. FUND SACH: article sirf PWD vibhag dwara nirmaan batata hai, fund ka srot (vidhayak nidhi / rajya yojna) disclose nahi hai. Stage: abhi sirf bhoomipujan hua hai, nirmaan baaki.',
    period: '2023-2028',
    stage: 'shilanyas-bhoomi pujan',
  },
  {
    title: 'Hardibazar (Boida) ke shaskiya uchchatar madhyamik school ke Rs 1.18 crore ke bhavan ka bhoomipujan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/chhattisgarh/bilaspur/news/mla-patel-performed-the-groundbreaking-ceremony-of-the-school-building-dbp-137378281.html',
    date: '2026-05',
    note: 'Dainik Bhaskar ki post-event report ke anusar Hardibazar kshetra ki gram panchayat Boida ke shaskiya uchchatar madhyamik school ke bhavan nirmaan ka bhoomipujan Katghora vidhayak Premchand Patel ne kiya; 1 crore 18 lakh rupaye ki lagat se school bhavan banega. Karyakram Pandit Revati Raman Tiwari dwara sampann karaya gaya. DATE SACH: page par exact date nahi milti — ’5 mahine pehle’ marker se May 2026 approximate hai. FUND SACH: article me fund ka srot (vidhayak nidhi / shiksha vibhag) disclose nahi hai. Stage: abhi sirf bhoomipujan hua hai, nirmaan baaki.',
    period: '2023-2028',
    stage: 'shilanyas-bhoomi pujan',
  },
];

// REJECT-LOG (premchand-patel, Katghora):
// 1. Sahastrabahu Chowk namkaran, Katghora (Amar Ujala, Oct 2025): CM Vishnu Deo Sai ne chowk ka lokarpan kiya, vidhayak sirf maujood — outlet whitelist me NAHI + dusre neta ke karyakram me maujoodgi = REJECT.
// 2. Gauri-Gaura Utsav, Boida (Amar Ujala, Jan 2026): vidhayak dharmik utsav me mukhya atithi — whitelist me nahi + samaroh me maujoodgi = REJECT.
// 3. Kanberi (Kanberi) Rs 21 crore PM Janman bhoomipujan, 2 Mar 2026 (vedantsamachar.in / chhattisgarhaaj.com): mantri Lakhan Lal Dewangan ne bhoomipujan kiya, vidhayak sirf karyakram ke adhyaksh — chhote portals (whitelist nahi) + mantri ka kaam, MLA ki vyaktigat bhoomika nahi = REJECT.
// 4. Gopalpur industrial area bhoomipujan, Apr 2026 (reportwire.in): mantri ka kaam, MLA sirf upasthit — whitelist nahi + maujoodgi = REJECT.
// 5. Cycle vitran karyakram, govt kanya school Katghora (tarunchhattisgarhkorba.com): mukhya atithi, whitelist nahi + daan/vitran kaam = REJECT.
// 6. Sarpanch Sangh Katghora ne CM se mulakat, maang patra (Dainik Bhaskar, whitelisted — page na khula; snippet): sirf maang/prastav, koi nateeja nahi = REJECT.
// 7. Cricket tournament Hardibazar (Dainik Bhaskar): mukhya atithi puraskar vitran — mukhya-atithi/CSR samaroh = REJECT.
// 8. Guru Ghasidas Jayanti, Mongra Basti (Dainik Bhaskar): vishisht atithi, dharmik samaroh — maujoodgi = REJECT.
// 9. NSS camp shubharambh, govt college Hardibazar (Dainik Bhaskar): sarkari abhiyan ka keval shubharambh = REJECT.
// 10. Rs 2.56 crore 'vidhayak nidhi' swikriti (tarunchhattisgarhkorba.com, 28 Sep 2026): chhota portal (whitelist nahi); text Baloda/Akaltara janpad ki bat karta hai — Katghora ke MLA se link bhi saaf nahi; itemized GO-backed list nahi = REJECT. RETRY-LEAD: Collector-karyalaya ki itemized Vidhayak Nidhi utilization report mile to check karein.
// 11. SECL Deepka CHC (Hardibazar) demolition par MLA ke netritva me GM office gherao + tala-band (blackoutnews.in, satysanwad.com, navchetnanewscg.com, Sep 2026): sab chhote portals (whitelist nahi); virodh-andolan, koi bhautik kaam nahi = REJECT. (PSU-mamla niyam bhi laagu.)
// 12. Hardibazar-Deepka sadak SECL ko 'ultimatum', Dec 2023 (ghatatighatana.com): chhota portal + sirf maang/dhamki, PSU sadak — bina vyaktigat lokarpan ke shrey nahi = REJECT.
// 13. 'Vikasit Bharat' Seva Jyoti Yatra sabha, Korba (tarunchhattisgarhkorba.com, Oct 2026): mantri ki sabha, MLA sirf upasthit — whitelist nahi + maujoodgi = REJECT.
// 14. ASI Ashwani Verma drink-and-drive case (Patrika, whitelisted): 'thana prabhari Premchand Patel (Sahu)' alag vyakti hai (police officer) — naam-jaal, ye MLA nahi = REJECT.
// 15. NEGATIVE CHECK: Business Standard ADR data (2023 halafname) me 'Criminal Cases: No'; FIR/naam-daar adhikari-pusht janch wala koi qualifying negative established media me nahi mila.

chhattisgarhWorks['tuleshwar-hira-singh-markam'] = [];

// REJECT-LOG (tuleshwar-hira-singh-markam, Pali-Tanakhar): 1. \"MLA will perform Bhoomi Pujan for development works in Chaitma\" (bhaskar.com WHITELISTED, page khola aur padha — https://www.bhaskar.com/local/chhattisgarh/korba/news/mla-will-perform-bhoomi-pujan-for-development-works-in-chaitma-136040464.html; ~Sept/Oct 2025) — PRE-EVENT announcement (\"1 October ko ... bhoomi-pujan KARENGE\": Chaitma gram panchayat me shiv mandir railing, Gandhi bag, Mahtari sadan, anganwadi bhawan) — post-event reporting nahi mili. REJECT. 2. Jalashayon/naharon ke rakhrakhav me kathit aniyamitta — tarankit prashn, Vidhan Sabha budget session 2026 (tarunchhattisgarhkorba.com; page ka title \"Lovely Battery House\" mislabel hai) — NON-WHITELIST outlet + sirf prashn/maang, koi mantri-uttar ya janch-aadesh documented nahi. REJECT. 3. CM Vishnu Deo Sai se mulakat — Pasan ITI, Chotia/Korbi college, Pali-Chaitma grid station, handpump swikriti ki maang (satysanwad.com; ~Sept 2026) — NON-WHITELIST + sirf maang/prastav. REJECT. 4. Vidhayak Nidhi se janpad panchayat Pondi-Uproda ke 25 grameen kshetron ko paani tanker (~2024; publicforum750.com) — NON-WHITELIST chhota portal + PR-style dawa copy + rashi/itemized list disclosed nahi. REJECT. 5. Nitin Gadkari se mulakat — Kotmi-Pasan-Katghora marg (rajya marg 04, 80.20 km) ko Rashtriya Rajmarg ghohsit karne ka gyapan (vedantsamachar.in; 08 Aug 2025) — NON-WHITELIST + sirf gyapan/maang, ashwasan dastaveji nateeja nahi. REJECT. 6. Potapani aur Makhanpur (Manjhapara) me do samudaayik bhavanon ka bhoomi-pujan (public.app; 23 Aug 2025) — public.app whitelist me explicitly REJECTED + fund/bhoomika disclosed nahi. REJECT. 7. Band patthar khadan me BALCO fly-ash dumping band karane ki maang — environment board ko patra (lalluram.com; March 2026) — NON-WHITELIST + sirf patra/maang. REJECT. 8. DMF governing council meeting maujoodgi, Korba (thechhattisgarh.com March 2025; adityabharat.com/saahassamachar.in FY 2026-27 approval) — NON-WHITELIST + mantri ki adhyakshata wale karyakram me KEVAL maujoodgi. REJECT. 9. Vishva Adivasi Divas Pali karyakram me mukhya-atithi (cgimpact.org; Aug 2025) — NON-WHITELIST + mukhya-atithi samaroh. REJECT. 10. Mobile/WhatsApp hack — parcel call ke baad number hack, Rs 76,000 ki maang (amarujala.com, ibc24.in, vistaarnews.com, statemirror.com, english.dainikjagranmpcg.com; ~23 Sept 2026) — MLA VICTIM (Pali thana complaint, cyber cell janch); MLA khud aaropi nahi isliye negative entry nahi; aur work entry bhi nahi. Amar Ujala/Dainik Jagran MPCG English whitelist me NAHI hain. REJECT. 11. Candidate/election-profile pages (business-standard, news18, oneindia, navbharattimes, wikipedia, myneta.info, prsindia) — chunavi/affidavit jaankari, koi karya nahi. REJECT. 12. gondwanasamay.com (e-paper/blogspot-type) — Hira Singh Markam jayanti par patrika vimochan — NON-WHITELIST + samaroh. REJECT.
// RETRY-LEADS (parent ke liye): A. Chaitma bhoomi-pujan (01 Oct 2025; shiv mandir railing, Gandhi bag, Mahtari sadan, anganwadi bhawan, gram panchayat Chaitma) — Bhaskar par sirf pre-event announcement tha; kisi whitelisted outlet me iska post-event reporting (lokarpan/completion ya fund disclosure) mile to entry ban sakti hai; gram Chaitma/Pali-khand ke local editions me dhundhein. B. Water-tanker dawa (publicforum750.com, ~2024; Vidhayak Nidhi se Pondi-Uproda janpad ke 25 gaon) — whitelisted outlet me post-event/itemized coverage mile to check karein. C. Vidhan Sabha questions (jalashay/nahar tarankit prashn budget session 2026; excise adhyaksh dhyanakarshan) — mantri ka likhit uttar ya janch-aadesh cgvidhansabha.gov.in par documented ho to 'dastaveji nateeja' entry ho sakti hai; karyawahi ki jaanch pending. NAAM-JAAL NOTE: Hira Singh Markam = divangat pita (nidhan 2020), unke pre-2020 karyon ko is karyakaal me mat jodein; Duleshwari Sidar = INC pratyashi (runner-up), Jyotsna Mahant = Korba LS MP (unke MPLADS karya valid nahi), Mohit Ram = poorv INC MLA (2018 winner).

chhattisgarhWorks['lakhanlal-devangan'] = [];

// REJECT-LOG (lakhanlal-devangan, Korba, mantri — sirf seat-kaam):
// 1. Rs 36.73cr Korba jalpraday yojana vistaar bhoomipujan (15 Jun 2026, Imli Duggoo, Mantri ne Mahapaur ke saath kiya) — univarta.com (UNI wire) par post-event report mili thi, lekin UNI CG whitelist me NAHI hai (sirf PTI-based wires chalte hain; UNI Tripura session me bhi reject hua tha) → REJECT. Whitelisted (Bhaskar/Patrika/Haribhoomi/Navbharat) post-event coverage mile to entry sambhav. (Worker file: cg4_worker_lakhanlal-devangan_works.ts)
// 2. Rs 17.50cr road re-carpeting swikriti (DMF, 13 sadak) — rashtrabodh.com, non-whitelist → REJECT (whitelisted itemized swikriti mile to entry).
// 3. Rs 3.08cr schools bhoomipujan sampann, 6 Mar 2026 (32 schools shauchalay + 21 kitchen shed, DMF) — chhattisgarhaaj.com, non-whitelist → REJECT.
// 4. Rs 2.19cr Nehru Auditorium bhoomipujan + Rs 77L Balkonagar — newz24india.in, non-whitelist → REJECT.
// 5. CSR-funded (BALCO community building/park/drain, education kits) — mukhya-atithi/shubharambh → REJECT.
// 6. Mantri-portfolio rajya-stariya faisle (Gopalpur industrial area, shram vibhag, excise list) — sirf seat-kaam niyam → REJECT.
// 7. Pre-event announcements (1.08cr, 3.08cr pre-reports), samaroh (yoga/flag/rajyotsav/mahakumbh chief-guest), ghoshna-only (Rs 7L pandal, college dome), kendriya/PSU (PM Janman roads, ESIC hospital, CSPDCL substation) — sab REJECT.
// Negatives: excise transfer-list vivad = portfolio prashasanik mamla (MLA aaropi nahi); Mahant ke ret/koyla aarop = sirf bhashan (FIR/janch nahi); pratinidhi pitai = MLA aaropi nahi → sab REJECT.

// ---- Korba district batch END (2 works, 0 negatives) ----


// ---- Gaurela-Pendra-Marwahi district batch (researched 2026-10-17) ----

chhattisgarhWorks['pranav-kumar-marpachi'] = [];

// REJECT-LOG (shanka ho to reject; galat entry se khali profile behtar)
// ============================================================
// R1. Larkeni dhan uparjan kendra ka aakasmik nirikshan (Jan 2026,
//     Bhaskar local GPM) — keval nirikshan/daura; koi sanrachna,
//     svikriti ya fund nahi. REJECT.
//     URL: https://www.bhaskar.com/amp/local/chhattisgarh/gaurela/news/marwahi-mla-inspected-the-paddy-procurement-center-136890685.html
// R2. Dhanauli dhan uparjan kendra nirikshan (Jan 2026) — keval
//     public.app video par; whitelist nahi + keval nirikshan. REJECT.
//     URL: https://public.app/amp_video/sp_4mh0mk97xgbz8
// R3. Modi sarkar ke 12 saal par Pendra me 3-divsiya chhayachitra
//     pradarshani ka shubharambh (17-19 Jun 2026, lokswar.in) —
//     sarkari abhiyan ka keval shubharambh; bhautik sanrachna nahi;
//     source bhi whitelist me nahi. REJECT.
//     URL: https://www.lokswar.in/12-years-of-modi-government-three-day-photo-exhibition-inaugurated-in-pendra-showcasing-achievements-in-development-and-public-welfare/
// R4. Yuva karyakram me bhashan (Oct 2026, apnachhattisgarh.com) —
//     keval samaroh-bhashan; source whitelist me nahi. REJECT.
//     URL: https://apnachhattisgarh.com/archives/27186
// R5. Atal janmashatabdi sammelan me mukhya-atithi upasthiti
//     (Aug 2026) — keval public.app par; samaroh upasthiti. REJECT.
//     URL: https://public.app/video/sp_whhkksnu9ifss
// R6. Janmadin par talwar-waali video (15 Aug 2024, tirandaj.com) —
//     vyaktigat janmadin samaroh; works nahi, negative nahi (R-no FIR).
//     REJECT (works context).
//     URL: https://tirandaj.com/2024/08/marwahi-mla-raised-sword-in-hand-on-birthday/
// R7. Madhya Kshetra Adivasi Vikas Pradhikaran upadhyaksh niyukti
//     (Sep 2024, Amar Ujala) — sangathanatmak/pad-bhoomika; works
//     nahi. REJECT.
//     URL: https://www.amarujala.com/chhattisgarh/cm-vishnudeo-sai-cabinet-meeting-amendment-in-reorganization-order-of-five-development-authorities-2024-09-20?src=story-related-links
// R8. Pradhikaran ki Korba baithak (Sep 2025): budget 50 se 75 crore,
//     Korba ke sports complex/pul ki svikriti (etvbharat.com,
//     univarta.com-PTI) — adhyaksh CM the; Marpachi upadhyaksh ke roop
//     me upasthit; svikrit kaam Korba ke, Marwahi ke nahi aur MLA ki
//     vyaktigat bhoomika ka shrey cited sources me nahi. ETV Bharat
//     whitelist me nahi. REJECT (dusre neta ka karyakram / bina
//     vyaktigat bhoomika ke shrey).
//     URLs: https://www.etvbharat.com/hi/!state/decision-of-tribal-development-authority-meeting-in-korba-chhattisgarh-news-cts25091005208
//           https://www.univarta.com/news/madhya-pradesh-chhattisgarh/story/3572528.html
// R9. Sarangarh me gantantra-divas dhwajarohan mukhya-atithi (Jan 2026,
//     dailychhattisgarh.com) — samaroh; source whitelist nahi. REJECT.
//     URL: https://www.dailychhattisgarh.com/sarangarh-bilaigarh/250402/daily-chhattisgarh
// R10. Chunav-jeet reporting (Bhaskar, Navbharat Times, Dec 2023) —
//      works nahi. REJECT.
//
// RETRY-LEADS (whitelisted source me version mile to entry bane):
// L1. Vidhayak Nidhi (Rs 4 cr/seat/saal, 2023-24 se 3 saal) ki itemized
//     sanction/vitaran suchi Marwahi ke liye — GPM jila NIC / jansampark
//     portal ya Dainik Bhaskar/Patrika/Haribhoomi me khabar dhoondho.
// L2. Madhya Kshetra Adivasi Vikas Pradhikaran se GPM jile me svikrit
//     kaam (pradhikaran ka kshetra Marwahi ko cover karta hai; MLA
//     upadhyaksh hain) — Haribhoomi/Patrika/Bhaskar me itemized svikriti
//     khabar mile to 'news' entry sambhav, shrey capped (sarkar/
//     pradhikaran ki svikriti, MLA ki maang/upadhyaksh bhoomika par).
// L3. Paddy-procurement nirikshan (R1, Bhaskar): yadi isi nirikshan ke
//     baad koi svikrit kaam/order (GO) nikla ho to alag entry ban sakti
//     hai — abhi keval nirikshan hai.
// ============================================================

export default chhattisgarhWorks;

// ---- Gaurela-Pendra-Marwahi district batch END (0 works, 0 negatives) ----

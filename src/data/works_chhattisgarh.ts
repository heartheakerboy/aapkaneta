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


// ---- Gaurela-Pendra-Marwahi district batch END (0 works, 0 negatives) ----

// ---- Bilaspur district batch (researched 2026-10-17) ----

chhattisgarhWorks['atal-shrivastava'] = [
  {
    title: 'Bilaspur High Court ne June 2026 ki status report ke aadhar par Kota MLA Atal Shrivastava sahit janpratinidhiyon ke khilaf lambit aapradhik prakarnon ki tezi se sunvai ke nirdesh diye — Shrivastava ke khilaf mamla adalat me vicharadhin hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Patrika',
    sourceUrl: 'https://www.patrika.com/bilaspur-news/high-court-orders-speedy-hearing-of-criminal-cases-against-mps-mlas-20796063',
    date: '2026-08-01',
    note: 'Patrika ki page-report ke mutabik, Bilaspur High Court ki division bench (Chief Justice Ramesh Sinha aur Justice Ravindra Kumar Agrawal) ne sansadon, vidhayakon, poorv sansadon aur poorv vidhayakon ke khilaf darj aapradhik prakarnon ki jaldi sunvai karne ke nirdesh nichli adalaton ko diye. Nyaymitra Dr. N.K. Shukla ne sunvai me division bench ko bataya ki pichhli status report ke mukable do lambit aapradhik mamalon ka nirakaran hua hai. June 2026 ki sthiti ke anusaar, Bilaspur jile se sambandhit aapradhik prakaran me Kota vidhayak Atal Shrivastava va anya ke khilaf mamla vicharadhin hai. Division bench ne agli sunvai 25 August tay karke Registrar (Judicial) ko sabhi trial courts se taza report lekar updated status prastut karne ka nirdesh diya. Disclosure: article me Shrivastava ka koi jawab nahi diya gaya hai; jamanat ki sthiti bhi nahi batayi gayi; ye 2023 halafname ke lambit mamalon ka vartaman karyakaal (June-Aug 2026) me nyayik vikas hai — High Court monitoring order — dosh-siddhi nahi hui hai. Stage: vicharadhin.',
    period: '2023-2028',
  },
];

// REJECT-LOG (atal-shrivastava):
// 1. Ratanpur-Kota NH-130 kshatigrast puliya — mahachakkajam ghoshna 21 Sep 2024 (cbn36.com, 20 Sep 2024): source whitelist me nahi (chhota portal); khud page par darj hai ki Vidhan Sabha me prashn uthane par mantri ne ashwasan diya tha, lekin mahino tak kaam shuru nahi hua aur koi rashi avontit nahi hui — koi dastaveji nateeja/kaam nahi; sirf andolan ki ghoshna (pre-event) = REJECT. Lead: kisi whitelisted outlet ne puliya ke nirman-kaam ya 21 Sep 2024 ke chakkajam ka follow-up cover nahi kiya.
// 2. Bilasa Devi Kewat Airport par VS prashn (Haribhoomi, 27 Feb 2024 — 'Kota MLA ne airport par poocha sawal: CM Sai bole- Bilaspur airport ka kaam ho raha poora'): whitelisted outlet, lekin page open nahi ho saka (fetch fail — dubara try nahi kiya gaya); snippet me CM Vishnu Deo Sai ka likhit uttar — Rs 23.99 crore pravdhan, runway/lighting/night-landing kaam, 286.65 acre sainya bhoomi par Raksha Mantralaya se swikriti, 1012 acre ke liye Rs 93 crore ka bhugtan. Lead: MLA ne sawal uthaya tha (credit capped hota), lekin airport Bilaspur shahar (Chakarbhatha) me hai — Kota seat ke bahar sambhav — aur page khul na saka isliye entry nahi. URL: https://www1.haribhoomi.com/state-local/chhattishgarh/news/kota-mla-asked-question-on-the-cm-sai-said-the-work-of-bilaspur-is-being-completed-2024-02-27-12084/amp
// 3. Bhaskar — Rajasthan politics tehsildar-MLA vivad par bayan (bhaskar.com, ~June 2026): khula page — sirf raajnaitik bayanbaazi (satta-paksh vidhayak par aarop, CM/Grihmantri par nishana); Kota seat ka koi vikas-kaam nahi = REJECT.
// 4. Bhaskar — Girodpuri dham Guru Ghasidas mela me upasthiti poorv CM Bhupesh Baghel ke saath (~May 2026): dharmik mele me upasthiti, koi bhautik kaam nahi = REJECT.
// 5. Navbharat Times — Kota kshetra me paani/bijli ki killat par Collector se mulakat (May 2024): khud whitelisted, lekin sirf samasya-uthana/baithak; kaam nahi hua, fund disclosed nahi = REJECT.
// 6. Amar Ujala — 15th Finance Commission rashi asaman vitran par Collectorate gyapan (10 Jun 2025): Amar Ujala whitelist me nahi; sirf gyapan/maang, koi kaam nahi = REJECT.
// 7. dailychhattisgarh — Sarv Yadav Samaj karyakram me Vidhayak Nidhi se Rs 10 lakh samajik bhavan hetu swikriti ki GHOSHNA: source whitelist me nahi; aur Vidhayak Nidhi grant-ghoshna rule se hi REJECT (koi itemized sanction list nahi) = REJECT. Lead: itemized Vidhayak Nidhi sanction lists (Bhaskar/Patrika/Haribhoomi/Navbharat) is MLA ke liye kahin nahi mili.
// 8. cgwall.in — Tenganmada railway underbridge band na karne ke liye DRM ko patra (Dec 2025): source whitelist me nahi; sirf patra/maang, koi dastaveji nateeja nahi = REJECT.
// 9. sandhyasamikshak.com — Sarnath Express 66 din radd hone par Railway Mantri ko patra (25 Nov 2025): source whitelist me nahi; sirf patra/virodh, koi nateeja nahi = REJECT.
// 10. khaskhabarchhattisgarh.com — Congress jiladhyaksh Vijay Kesharwani dwara nagar-nikay natijon par MLA ki aalochna: source whitelist me nahi; party-internal raajnaitik aarop — FIR/janch nahi, negative threshold poora nahi = REJECT.
// 11. Ratanpur DHP bhavan Rs 8.65 crore bhoomipujan (acn18.com, 15 Oct 2026): source whitelist me nahi; bhoomipujan kendriya rajya mantri Tokhan Sahu ne kiya — MLA sirf upasthit tha (dusre neta ke karyakram me maujoodgi) = REJECT. Note: ye MP (Tokhan Sahu, Bilaspur LS) ka kaam bhi nahi darj hota — kendriya suvidha.
// 12. TOI — 'Kota: FIR against Cong MLA, 20 others' (23 Sep 2026): galat pehchan — ye Rajasthan ke Kota ka Pipalda MLA Chetan Patel Kolana hai, hamare MLA Atal Shrivastava nahi; confusion guardrail = REJECT.
// 13. lalluram.com — jila aspatal marpeet mamla (Jun 2025): FIR hospital karmchari Yadavendra Kashyap ke KHILAF darj hui — MLA ke pratinidhi Sinu Rao peedit the; MLA khud aaropi nahi = negative nahi, REJECT.
// 14. satyagyansamagam.com — sarkari zameen vivad (khasra 801/1 etc.) me MLA ka naam maang-soochi me: source whitelist me nahi; sirf hastakshep ki maang, MLA par koi aarop nahi = REJECT.
// 15. newsdawncg.com — Delhi 'Gyanesh Kumar hatao' andolan me bhagidari (Oct 2026): source whitelist me nahi; raajnaitik andolan me bhagidari, vikas-kaam nahi = REJECT.
// 16. sbharatnews.com — Hitgrahi Card yojana shubharambh (paryatan mandal adhyaksh ke roop me): pre-term (2022, MLA banne se pehle) + source whitelist me nahi = REJECT.
// 17. Khul na saka page: Haribhoomi airport wala page fetch fail hua (upar #2 me lead darj). Patrika ka negative page poori tarah khul kar padha gaya — wahi ekmatra entry.
// 18. Negative screening: nwnews24/dakshinkosal ne HC status report ka hawala dekar BNS dharaon me case/aarop-tay hone ka dawa kiya — dono whitelisted nahi; snippet-bharosa nahi; Patrika (whitelisted, khula page) me 'mamla vicharadhin' darj hai — entry isi par aadharit hai, BNS-dhara detail cite nahi ki gayi. Halafname ke 3 pending mamle akele negative nahi — yahan 2023+ ka nyayik vikas (June 2026 status + Aug 2026 HC speedy-hearing order) hai isliye entry valid hai. Election petition show-cause/negative: koi nahi mila.
// 19. Vidhayak Nidhi itemized lists: Bhaskar/Patrika/Haribhoomi/Navbharat me is MLA ke liye koi itemized sanction list nahi mili (sirf upar #7 ki ghoshna mili, jo reject hai). MLA nidhi Rs 4 crore/seat/saal ka record online uplabdh nahi (foundation note).
//
// QA: 1 entry pass hui (Patrika, whitelisted, poora page kholkar padha; established media + seat-se naam-pahchan 'Kota vidhayak Atal Shrivastava' + HC status report/division bench order = officer-pusht + 2023+ legal development + stage-accurate 'vicharadhin' framing; article me jawab/anupasthiti disclosed). Koi positive works entry whitelisted source se nahi mili — profile ka works section khaali rakhna galat entry se behtar hai.
chhattisgarhWorks['dharamjeet-singh'] = [];

// REJECT-LOG (dharamjeet-singh, Takhatpur):
// 1. Naidunia Bilaspur e-paper PDF (19 Sep 2026; page khola aur padha gaya): gram Chitawar me MLA Dharmjeet Singh ne Rs 49 lakh se adhik ke vikas karyon ka bhoomipoojan kiya — samudayik bhavan, school ke 2 atirikt kaksh (Rs 10 lakh aur Rs 12.59 lakh swikrit), Rs 20 lakh ka nala pulia; plus Sakraha shasakiya vidyalaya me Saraswati Cycle Yojana ke tahat 51 balikaon ko cycle vitran aur Rs 6.50 lakh ke prarthana shed ka bhoomipoojan. REJECT: Naidunia/Jagran whitelist me nahi. Ye sabse majboot lead hai (retry-lead A).
// 2. jantaserishta.com: gram Ganiyari me panchayat bhavan ka lokarpan (MLA mukhya atithi) — Chhattisgarh Mahtari pratima anavaran ko lekar swasahayta samuh mahilaon ka hungama/chakjam; mahilaon ne MLA aur sarpanch ko khari-khoti sunai. REJECT: source whitelist me nahi; event vivadit raha (negative threshold nahi — koi FIR/adhikari-pusht janch nahi). Retry-lead B.
// 3. Rs 78.51 lakh ke CC sadak + nali bhoomipoojan (gram Dharampura aur Birkona, 12 Oct 2026) — Deputy CM Vijay Sharma (Kawardha MLA) ne bhoomipoojan kiya; Takhatpur MLA Dharmjeet Singh sirf karyakram me maujood/sambodhit (jantaserishta/ajkinews/dainikvishwapariwar — teeno whitelist se bahar). REJECT: dusre neta ka kaam; dono gaon Kawardha kshetra ke hain, Takhatpur seat ke nahi.
// 4. Haribhoomi (12 Feb 2025, whitelisted): nikay chunav me MLA ne kaha '14 mahine ke vikas karyon ko ginaya'. REJECT: political statement; koi konkret kaam documented nahi.
// 5. Haribhoomi (18 Dec 2024, whitelisted): Vidhan Sabha sheetkaleen satr me B.Ed abhyarthiyon ke samarthan me mudda uthaya (anupoorak budget ke dauran). REJECT: sirf maang — koi dastaveji nateeja/mantri-ashwasan report nahi hua.
// 6. Haribhoomi (1 Sep 2026, whitelisted): Delhi me BJP pradesh adhyaksh Kiran Singh Dev ke hospital me halchaal poochne pahunche (kendriya mantri Tokhan Sahu ke saath). REJECT: vikas-kaam nahi.
// 7. Haribhoomi (budget session 2025, whitelisted): Rajyapal ke abhibhashan par siyasat me MLA ka bayan (Congress par naxal-samarthan ka palatwar). REJECT: bayan, works nahi.
// 8. Lokswar: Vidhan Sabha me Vidhayak Nidhi 10 crore karne ki maang + JNU me Hidma samarthan wale naroon ka virodh. REJECT: sirf maang; source whitelist me nahi.
// 9. rajdhanihalchal.com: Seva Sankalp Abhiyan jila-stariya shivir (Bhakurra Navapara, Takhatpur block) me MLA mukhya atithi; 392 me se 356 maangon ka nirakaran, mahila samuhon ko Rs 48 lakh sahayata. REJECT: sarkari abhiyan me mukhya-atithi maujoodgi; source whitelist me nahi.
// 10. Patrika (whitelisted): CM Vishnu Deo Sai ne Takhatpur-Barela ke beech Maniyari nadi par Rs 3.76 crore pul ka bhoomipoojan kiya; Gaudham yojana ka shubharambh Takhatpur block ke gram Lakhasar se (14 Mar 2026). REJECT: CM/sarkari karyakram; MLA ki vyaktigat bhoomika disclosed nahi.
// 11. Patrika (whitelisted): PM Awas Yojana rashi vilamb par Nagar Palika Takhatpur ke CEO ko notice. REJECT: shasan ki adhikari-karvai; MLA ka kaam nahi.
// 12. newsplus21.com / lalluram.com (whitelisted nahi): MLA ke naam/foto ka durupayog kar fake Facebook ID bana paison ki maang — MLA ne Bilaspur SSP ko complaint ki. REJECT: MLA peedit/shikayatkarta hai, aaropi nahi; negative nahi.
// 13. Times of India: JCC-J se nishkasan (2022) aur BJP me shamil hona (Aug 2023). REJECT: pre-term.
// 14. cgmitan.com: MLA ka grih-nagar Pandariya daura (shok-samvedana/bhet-mulakat, Aug 2024). REJECT: karya nahi; source whitelist me nahi.
// 15. Vidhayak Nidhi itemized sanction lists: Collector-office/Bilaspur zila ke kisi sarkari portal ya whitelisted outlet par Takhatpur MLA ke naam par itemized list nahi mili (Dainik Bhaskar/Haribhoomi/Patrika/Navbharat me khoj).
// 16. gramayatrachhattisgarh.com 'peyjjal rashi se sadak nirman ki janch' (Dharmjeet Singh ne mudda uthaya). REJECT: purani assembly ka mamla (JCCJ Vidhan-mandal era, Lormi) — pre-term.
// 17. dainandini.in: Chhath Ghat swachhta karyakram me MLA ki upasthiti (Sep 2026). REJECT: abhiyan me maujoodgi; source whitelist me nahi.

// RETRY-LEADS (parent ke liye):
// A. Chitawar Rs 49 lakh+ bhoomipoojan (Naidunia e-paper PDF 19 Sep 2026, khola/padha gaya hai): samudayik bhavan + 2 atirikt school kaksh (Rs 10L + Rs 12.59L swikrit) + Rs 20L nala pulia. Agar Haribhoomi/Dainik Bhaskar/Patrika/Navbharat me post-event ya bhoomipoojan reporting mile to entry (category: Sadak/School/Any per item; badge: news; note me fund disclosed + MLA ki vyaktigat bhoomika).
// B. Ganiyari panchayat bhavan lokarpan — whitelisted source par MLA ke vyaktigat lokarpan ki pushti ho to entry (hungama note me disclosed ho).
// C. Bilaspur collector-office/zila portal par Takhatpur Vidhayak Nidhi sanction list mile to sarkari-badge entries (Rs 4 crore/seat/saal).

// QA: 0 entries pass. Whitelisted sroton me Dec 2023+ ka koi vyaktigat lokarpan/shilanyas, GO-backed swikriti, ya Vidhansabha-maang ka dastaveji nateeja documented nahi mila. Sabstantive leads (Chitawar bhoomipoojan, Ganiyari lokarpan) non-whitelisted portals par hain (retry-leads me darj). Profile khali rakhna niyam-anusar sahi hai — galat entry se khali profile behtar. Negatives: koi nahi (myneta 0 cases; established media me FIR/adhikari-pusht janch nahi; fake-FB-ID mamle me MLA peedit hai).
chhattisgarhWorks['dharamlal-kaushik'] = [];

// REJECT-LOG:
// --- Whitelisted sources (khole gaye ya snippet se verify) ---
// 1. [Haribhoomi (whitelisted), page KHOLA, 5 Mar 2025] Budget session me Amaldih ki
//    sarkari zameen awantan par prashn — 'Rs 56 crore ki zameen Rs 9 crore me kyun di';
//    Revenue mantri Tankram Verma ne awantan se inkar kiya (zameen shasan ke naam darj).
//    Ye accountability-prashn hai, Bilha ka vikas-kaam nahi; koi dastaveji nateeja nahi
//    (sirf prashn, mantri ka inkar). Category 'sirf prashn/maang, nateeja nahi' → REJECT. URL:
//    https://www.haribhoomi.com/state-local/chhattishgarh/news/cg-assembly-budget-session-government-land-allotment-mla-dharamlal-kaushik-raipur-74292
// 2. [Dainik Bhaskar (whitelisted), Godhi gaon (Bilha), ~May 2026] 'Bilaspur Controversy:
//    MLA Dharamlal vs Congress Leader Heated Argument' — Sushasan Tihar shivir me Congress
//    neta Rajendra Shukla se manch par teekhi behas, 'chor-chor' naare. Rajnaitik vivaad,
//    koi FIR/janch nahi; negative threshold fail; koi kaam nahi → REJECT. URL:
//    https://dainik.bhaskar.com/dRFPWlVUz3b
// 3. [Dainik Bhaskar (whitelisted), Raipur, ~May 2026] 'MLA's mobile phone stolen, Congress
//    raises questions' — morning walk ke dauran MLA se mobile loot; ve PEEDIT hain, aaropi
//    nahi. Na kaam, na negative (threshold: MLA khud aaropi ho) → REJECT. URL:
//    https://www.bhaskar.com/local/chhattisgarh/bilaspur/news/mla39s-mobile-phone-stolen-congress-raises-questions-dbp-137971568.html
// 4. [Dainik Bhaskar (whitelisted), Bilha, ~June 2026] Vishva Paryavaran Diwas par paudharopan
//    + safai abhiyan; MLA ne sandesh diya. Abhiyan/shubharambh, koi bhautik sanrachna nahi
//    → REJECT. URL:
//    https://www.bhaskar.com/local/chhattisgarh/bilaspur/bilha/news/plants-were-planted-in-bilha-on-world-environment-day-and-a-cleanliness-drive-was-launched-dbp-138136769.html
// 5. [Dainik Bhaskar (whitelisted), Kormi, ~Jan 2026] Mahila Morcha pradesh upaadhyaksh Punita
//    Dahariya ki MLA se shishtachar bhet. Sangathanatmak mulakat, koi kaam nahi → REJECT. URL:
//    https://www.bhaskar.com/amp/local/chhattisgarh/bilaspur/news/state-vice-president-of-mahila-morcha-punita-met-mla-kaushik-136727624.html
// 6. [Dainik Bhaskar (whitelisted), Bilaspur, Aug 2025] Shaheed Vinod Singh Kaushik smriti me
//    medhavi chhatra samman samaroh — MLA vishisht atithi suchi me. Mukhya-atithi samaroh
//    → REJECT. URL:
//    https://www.bhaskar.com/amp/local/chhattisgarh/bilaspur/news/meritorious-students-will-be-honored-on-12th-in-memory-of-martyr-vinod-135642505.html
// 7. [New Indian Express (whitelisted), Mar 2026] CM Vishnu Deo Sai ka kisan karyakram
//    (Chakrabhata PHC upgrade, Mangla school, Rahangi playground, samudaay bhavan ghoshnaen)
//    — ghoshnaen CM ki; MLA ne sirf swagat kiya. Dusre neta ke karyakram me maujoodgi +
//    sirf ghoshna → REJECT. URL:
//    https://www.newindianexpress.com/business/press-releases/2026/Mar/01/chief-minister-shri-vishnu-deo-sai-reaffirms-commitment-to-farmers-dignity-and-prosperity
// 8. [Patrika (whitelisted), ~2020] Netapratipaksh-kaaleen Ambikapur press conference
//    (dhaan khareed par Congress sarkar par hamla) — PRE-TERM (2023 se pehle) → REJECT. URL:
//    https://www.patrika.com/ambikapur-news/dharamlal-kaushik-leader-of-opposition-dharamlal-attack-on-government-6523352
// --- Non-whitelisted leads (source whitelist me nahi; coordinator retry kar sakta hai) ---
// 9. [shuru.co.in — whitelist me NAHI, ~8 Apr 2026] Darri-Dhuma-Silpahri marg (Rs 7.32 crore,
//    3.75m chaudai) ka bhoomi pujan — MLA mukhya atithi, vidhivat pujan kiya. Bhautik sadak +
//    vyaktigat bhoomika VALID ho sakta tha, lekin source whitelisted nahi → REJECT. URL:
//    https://shuru.co.in/post/7b7daaf8-5343-4b5b-bd9a-5887169260e6
// 10. [shuru.co.in — whitelist me NAHI, ~Feb 2026] Kendriya Sadak Nidhi se 28 km sadak
//     (Sirgitti, Sarwani, Pasid, Bartori, Dagori; Rs 68.43 crore) ka bhoomi pujan — MLA
//     shaamil, puja-archana ki. Source whitelisted nahi → REJECT. URL:
//     https://shuru.co.in:443/post/4359f4e6-2b3e-4670-a710-b4bf7eabd8c3
// 11. [shuru.co.in — whitelist me NAHI, 28 Mar 2026] Sirgitti me Rs 1 crore ke vikas karyon
//     ka bhoomi pujan (Bannakdih chowk se railway underbridge tak 3 km street-light/
//     vidyutikaran). Source whitelisted nahi → REJECT. URL:
//     https://shuru.co.in:443/post/9bb8f410-affd-413b-bc98-273a7fa58040
// 12. [shuru.co.in — whitelist me NAHI, ~Mar 2025] Chakarbhata PM Shri Swami Atmanand school
//     me Rs 7.63 lakh ke art-and-craft kaksh ka udghatan (Samagra Shiksha) + Saraswati cycle
//     vitran. Bhautik kaksh ka vyaktigat udghatan VALID ho sakta tha, lekin source whitelisted
//     nahi; cycle vitran = daan/rahat → REJECT. URL:
//     https://shuru.co.in/post/4041a4c2-71a6-46f4-b665-f69924c3fe3d
// 13. [shuru.co.in — whitelist me NAHI, ~Dec 2025] Rashtriya pulse polio abhiyan ka shubharambh
//     (Bilha). Abhiyaan ka shubharambh → REJECT. URL:
//     https://shuru.co.in/post/af0a530f-1141-441c-b72b-c53ab66d0e9d
// 14. [shuru.co.in + thesootr.com — DONO whitelist me nahi, Dec 2024 winter session] Jal Jeevan
//     Mission bhrashtachar par MLA ka prashn: Bilha/Patharia block me 211 me se 119 kaam
//     apoorn; 7 firm doshi, 1 FIR (Vijay Salunkhe), 6 ke anubandh nirast, janch samiti gathit.
//     Vidhansabha prashn ka dastaveji nateeja (credit capped) VALID ho sakta tha, lekin source
//     whitelisted nahi → REJECT. Whitelisted coverage mile to coordinator entry bana sakta hai. URLs:
//     https://shuru.co.in:443/post/9268b510-2500-4fdf-a967-099bd75c2077
//     https://thesootr.com/rss/tags/bilaspur
// 15. [newsaction.co.in — whitelist me NAHI, 31 Dec 2025] 'MLA ki anushansa par Bilha ko Rs 55
//     lakh ki saugat — CM ne 6 gram-panchayat vikas karyon ko swikriti di'. Mantri/CM ka
//     sarvajanik shrey (capped) VALID ho sakta tha, lekin source whitelisted nahi → REJECT.
//     Coordinator whitelisted coverage dhoondhe. URL: https://newsaction.co.in/archives/date/2025/12
// 16. [sabkasandesh.com — whitelist me NAHI, ~Aug 2024] Nagar Panchayat Bodri ko Nagar Palika
//     ka darja — MLA ke netritva me CM ko aavedan, CM ne ghoshna ki. Sirf maang + CM ki
//     ghoshna, source whitelisted nahi → REJECT. URL: https://sabkasandesh.com/233966/
// 17. [hamarsangwari.com — whitelist me NAHI, ~Oct 2026] Sirgitti me Rs 13 crore ke sports
//     complex ki prashasnik swikriti — Second Inning cricket committee ki maang, MLA ne Dy CM
//     Arun Sao se charcha karke shasan star par pahunchaya (portal ka dawa). Samudaay ka
//     sarvajanik shrey (capped) VALID ho sakta tha, lekin source whitelisted nahi + abhi sirf
//     swikriti → REJECT. URL: https://hamarsangwari.com/?p=37608
// 18. [nayabharat.live — non-established clone, Navbharat (whitelist) NAHI, Nov 2025] CM Sai ka
//     Rs 329 crore Bilaspur karyakram (Sirgitti-Sarwani-Pasid-Amaldiha-Bartori-Dagori marg
//     Rs 69.79 crore ka shilanyas sahit) — CM ka karyakram, MLA ki vyaktigat bhoomika disclosed
//     nahi + source established nahi → REJECT. URL:
//     https://nayabharat.live/cg-news-this-district-of-chhattisgarh-got-a-gift-worth-crores-cm-sai-inaugurated-development-works-worth-more-than-rs-329-crores/
// 19. [bharatiyadigitalnews.in — whitelist me NAHI, ~2025] Atal Parisar Bilha ka lokarpan +
//     Dy CM Arun Sao ne Rs 16 crore ke vikas karyon ki ghoshna ki; karyakram ki adhyakshata
//     MLA ne ki. Ghoshnaen Dy CM ki (sirf ghoshna), source whitelisted nahi → REJECT. URL:
//     https://bharatiyadigitalnews.in/single/15407
// 20. [vandebharatlivetvnews.com — whitelist me NAHI, ~Oct 2024] Bilha block ke Sarwani me PM
//     Awas Yojana (grameen) ke 9,422 awason ka bhoomi pujan (Rs 11,306.40 lakh) — MLA, kendriya
//     mantri Tokhan Sahu ke saath shaamil. Kendriya yojana ka vitran = daan/rahat +
//     source whitelisted nahi → REJECT. URL:
//     https://vandebharatlivetvnews.com/%e0%a4%aa%e0%a5%80%e0%a4%8f%e0%a4%ae-%e0%a4%86%e0%a4%b5%e0%a4%b8-%e0%a4%af%e0%a5%8b%e0%a4%9c%e0%a4%a8%e0%a4%be-%e0%a4%95%e0%a5%87-%e0%a4%a4%e0%a4%bf/
// 21. [navbharattimes24x7.in — copycat domain, asli Navbharat NAHI, 2025] Swami Atmanand school
//     Sargaon me Saraswati cycle vitran; MLA mukhya atithi. Sarkari yojana ka vitran =
//     daan/rahat + Sargaon Mungeli jile me (Bilha seat nahi lagta) → REJECT. URL:
//     https://navbharattimes24x7.in/facilities-provided-to-girl-students-for-spreading-education-are-a-boon-for-their-bright-future-dharamlal-kaushik/
// 22. [chhattisgarhaaj.com — whitelist me NAHI, 2025] Hirri (Bilha block) Sushasan Tihar shivir
//     me MLA mukhya atithi — KCC, Noni Sashaktikaran, pension, Ayushman, ration card vitran.
//     Sarkari yojanaon ka vitran = daan/rahat → REJECT. URL:
//     https://chhattisgarhaaj.com/article-cg.php?page=184&menuid=20
// 23. [dainikchhattisgarhwatch.com — whitelist me NAHI, 30 Jul 2026] Press club 'Hamar Pahuna'
//     me MLA ke dawe: Arpa-Bhaisajhar sinchai pariyojna antim charan, Patharia barrage ke liye
//     Rs 55 crore, Dagauri rail line ke aage sinchai vistar ke liye Rs 70 crore swikrit.
//     Keval MLA ke dawe (dawa framing) — lekin source whitelisted nahi → REJECT. URL:
//     https://dainikchhattisgarhwatch.com/2026/07/30/state-moving-towards-a-new-direction-of-development-under-bjp-government-dharamlal-kaushik/
// 24. [shuru.co.in — whitelist me NAHI, ~Dec 2025] WATCH-ITEM: Bilha se Bilha Mod tak sadak
//     (jiska bhoomi pujan MLA ne kiya tha) me gunvatta-heen divider kaam ki sthaniya shikayat.
//     Non-whitelisted source ki shikayat; koi FIR/adhikari-pusht janch nahi → negative nahi,
//     lekin coordinator note kare. URL:
//     https://shuru.co.in:443/post/bd7b096c-e6c0-4428-9fa5-674979892ca8
// 25. [shuru.co.in — whitelist me NAHI, ~Feb 2026] Dadha-Bodri marg: MLA ne bhoomi pujan kiya
//     tha 'magar nirman karya nahi ho paya' — sthaniya shikayat. Bhoomi-pujan ke baad kaam
//     na hona; non-whitelisted → REJECT, coordinator whitelisted coverage me verify kare. URL:
//     https://shuru.co.in/post/ee5022ac-6753-456b-ae53-ab264da70d73
// --- Vidhayak Nidhi ---
// 26. Collector Bilaspur / bilaspur.nic.in par Bilha seat ki itemized Vidhayak Nidhi sanction
//     lists online nahi mili (foundation note bhi kehta hai neta-war kharch ka record online
//     uplabdh nahi hai). Khoj jaari rakhe — coordinator DPR/collector soochna se retry kare.
// --- Negatives (sakht threshold) ---
// 27. Koi negative nahi mila: MLA khud kisi FIR ya naam-daar adhikari-pusht janch me aaropi
//     nahi. Mobile-theft me ve peedit the (Bhaskar #3). Jal Jeevan/PSC ghotalon me ve prashn
//     uthane wale hain, aaropi nahi. Jhiram janch aayog ke khilaf unki ~2013 ki HC yachika
//     pre-term hai, koi FIR/janch unke khilaf nahi. Parivar ke mamle koi nahi mile.
// --- Naam-jaal check ---
// 28. Siyaram Kaushik (INC) 2023 me inke pratidvandi the — alag vyakti. Kisi bhi mili hui
//     khabar me dono ke naam uljhe hue nahi mile. Bhaskar ki 2017 ki Pathariya manch-vivaad
//     khabar (BJP pradesh adhyaksh vs tatkalin MLA Siyaram) pre-term rajnaitik ghatna hai,
//     karyakaal se bahar → REJECT.
chhattisgarhWorks['amar-agarwal'] = [];

// REJECT-LOG (amar-agarwal):
// 1. Jan 7, 2026: 10+ karyakramon me bhoomipujan/lokarpan — ward 66 PMC Sejes shasakiya school (Rs 20 lakh
//    bhoomipujan), ward 63 Arvind Nagar samudayik bhavan boundary wall (Rs 22 lakh lokarpan), ward 60 Kachchh
//    Gurjar Kshatriya Samaj Bhavan (Rs 15 lakh additional room bhoomipujan), Sejes Atmanand School Tarbahar
//    (Rs 47.96 lakh bhoomipujan), 27 Kholi Chowk Guru Teg Bahadur Dwar jeernodhar, Shiv Mandir Shubham Vihar
//    (Rs 260.74 lakh, 38 kaam bhoomipujan). Page khulakar verify hua
//    (https://newsaction.co.in/archives/152577, 07 Jan 2026) lekin outlet whitelist me NAHI = REJECT.
//    Note: yahi events ka koi whitelist-outlet (Haribhoomi/Navbharat/Patrika/Bhaskar) version search me nahi mila.
// 2. ~Sep 2026 (19 din purani khabar): vidhayak ke prastavon par ~Rs 5.36 crore ke vikas karyon ki "saugat"
//    — schools/colleges me additional rooms, toilets, furniture, samudayik bhavan, boundary wall + 30 shasakiya
//    sansthanon me Rs 30 lakh ke water cooler (lokswar.in, portal). Sirf ghoshna/prastav, whitelist me NAHI,
//    itemized GO nahi = REJECT (niyam: Vidhayak Nidhi ki grant-ghoshna bhi REJECT).
// 3. May 2025 (~511 din purani): unke prayason se Rs 2 crore+ ki swikriti — schools me Rs 45.5 lakh, samudayik
//    bhavanon me Rs 56 lakh + Rs 90 lakh, open gym Rs 13 lakh (aapkiaawaz.net, portal). Ghoshna/sarkari-vivran
//    ke bina, whitelist me NAHI = REJECT.
// 4. Feb 2026 est.: Sakri zone-1 me Rs 45.47 crore ke lokarpan/shilanyas ka karyakram unke aur MP Tokhan Sahu
//    ke naam nimantran-patra se gayab hone par sthagit (Haribhoomi: haribhoomi.com/...-661536; khabar36.com).
//    Event hua hi NAHI; unke karyakram ka kaam nahi — REJECT. (Negative nahi: factionalism ki charcha hai,
//    unke khilaf koi aarop/FIR nahi.)
// 5. Oct 30, 2024: PM Modi ne CIMS Super Specialty Hospital Bilaspur ka virtual lokarpan kiya; ve maujood the
//    (Telegraph India). Dusre neta ke karyakram me maujoodgi matra = REJECT.
// 6. Jan 6-7, 2026: CM Vishnu Deo Sai ki adhyakshata me Bilaspur urban development samiksha baithak (Arpa SADA,
//    CIMS naye hospital building AS tez, airport vistar) — ve sahit 3 MLAs maujood (thehitavada.com,
//    oneindia.com). Sirf upasthiti; faisle CM/rajya sarkar ke = REJECT (Smart City/nagar-nigam kaam bina
//    seedhi MLA-bhoomika ke nahi).
// 7. Aug 13, 2025: CM ne Bilaspur me Rs 260 crore+ ke kaamon ka lokarpan/shilanyas kiya — ve maujood
//    (newz24india.in). CM ke karyakram me maujoodgi = REJECT.
// 8. Mar 14, 2026: CM ne Gaudham Yojana launch ki, ve maujood (thestatesman.com). Rajya-yojna launch me
//    maujoodgi = REJECT.
// 9. Jan 2026: Ganatantra Divas jhandarohan vivaad — 3 senior MLAs (ve sahit) ko jhandarohan ka avsar na milna
//    (english.dainikjagranmpcg.com). Vikas-kaam se sambandhit nahi = REJECT. (Negative bhi nahi — unke
//    khilaf koi aarop nahi.)
// 10. Nov 2025: CREDAI Property Expo ka unhone shubharambh kiya (newsdawncg.com). CSR/niji-abhiyan ka
//    shubharambh, bhautik sarkari sanrachna nahi = REJECT.
// 11. Oct 2026: Maharaj Agrasen Jayanti par pratima par malyarpan (hamarsangwari.com). Karyakram-shirkat,
//    vikas-kaam nahi = REJECT.
// 12. Election coverage (2023 jeet, ex-minister profiles — TOI, ET, IE/PTI, ThePrint, rediff): kaam nahi,
//    sirf parichay/pardshbhoomi = REJECT (kaam-count me nahi).
// 13. Vidhayak Nidhi itemized lists: Bilaspur jila ki Collector-office se nikalne wali koi public itemized
//    Vidhayak Nidhi sanction list unke naam par web par indexed nahi mili; CG DPR releases browser se
//    uplabdh nahi hui. Isliye koi sarkari-badge (sarkari) entry possible nahi.
// 14. NEGATIVE CHECK: Indian Express "Chhattisgarh Congress MLA arrested" — Congress MLA (Bhilai Nagar) ka
//    mamla, ye nahi; Business Standard: "Criminal Cases: No" (2023 halafnama). Unhe aaropi banane wali koi
//    established-media report 2023+ me nahi mili. Koi qualifying negative nahi.
//
// QA: ~14 web searches (Hindi + English) + 1 page-open. Haribhoomi/Navbharat/Patrika/Dainik Bhaskar par
// inke Dec 2023+ Bilaspur seat-vishesh karyon ki koi coverage indexed nahi mili; chhote portals par mile
// 3 leads (#1, #2, #3) whitelist-rule se cite nahi ho sakte. Isliye khaali profile (0 entries) — niyam ke
// mutabik sahi parinam. Agar inme se koi story whitelist outlet par mile, to whitelist URL se entries banai
// ja sakti hain (Jan 7, 2026 wali events: Rs 20 lakh ward-66 school bhoomipujan, Rs 22 lakh ward-63 boundary
// wall lokarpan, Rs 15 lakh ward-60 samaj bhavan room bhoomipujan, Rs 47.96 lakh Tarbahar school bhoomipujan,
// Rs 260.74 lakh/38 kaam Shiv Mandir Shubham Vihar bhoomipujan — sabhi vyaktigat bhoomipujan/lokarpan, badge news).
chhattisgarhWorks['shushant-shukla'] = [
  {
    title: 'Mopka (Bilaspur) me Rs 13.84 crore ka multipurpose indoor stadium — Khelo India mad se prashasakiya svikriti, Beltara MLA ki maang par',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/chhattisgarh/bilaspur/news/1390-crore-received-for-multipurpose-indoor-stadium-135173166.html',
    date: '2025-06',
    note: 'Dainik Bhaskar ke anusar kendra ki Khelo India yojana ke mad se Bilaspur ke Mopka me Rs 13.84 crore ki lagat se multipurpose indoor stadium (badminton court, volleyball, basketball, shopping complex, cafe) ki prashasakiya svikriti mili; Beltara vidhayak Sushant Shukla kendriya yuva-karya mantri Mansukh Mandaviya se satat patrachar aur Delhi me mulakat karke maang uthate rahe the aur CM Vishnu Deo Sai se bhi appeal ki thi. Fund: Rs 7.50 crore kendra sarkar degi, shesh rajya sarkar. Credit: sarkaron ki svikriti, MLA ki maang par (capped). Date: page par relative date (~1 saal pehle); search record ke anusar ~Jun 2025.',
    period: '2023-2028',
    stage: 'svikriti'
  },
  {
    title: 'Vidhan Sabha prashn par Beltara me jameen-panjiyan gadbadi ki janch ka vittmantri ka ailan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Haribhoomi',
    sourceUrl: 'https://www.haribhoomi.com/state-local/chhattishgarh/news/op-choudhary-mlas-revenue-department-beltara-registration-irregularities-investigation-38006/amp',
    date: '2024-07-25',
    note: 'Haribhoomi ke anusar Chhattisgarh Vidhan Sabha ke prashnkal me Beltara vidhayak Sushant Shukla ne jameenon ke panjiyan me gadbadi (kotwari jameen ki bikri, bina Aadhaar/PAN verification ke panjiyan) ka mudda uthaya; jawab me vittmantri O.P. Choudhary ne Beltara vidhan sabha kshetra me panjiyan gadbadi ki janch karane ka ailan kiya aur registry vibhag me vigilance cell ke gathan ki jankari di. Credit: mantri ka ailan/ashwasan; MLA ne mudda uthaya (capped).',
    period: '2023-2028',
    stage: 'mantri-ashwasan'
  }
];

// REJECT-LOG (shushant-shukla, Beltara):
// 1. [Dainik Bhaskar (whitelisted), ~Jun 2026] 'Belthara MLA Sushant Shukla: 10 Crore Development Work Approved' — nagriya prashasan vibhag ne MLA ki pahal par 18 wardon me Rs 10 crore ke kaam ki SVIKRITI di; nivida shuru. Page khola aur padha. Sirf svikriti/ghoshna (kaam shuru bhi nahi hue) → REJECT. URL: https://www.bhaskar.com/g/local/chhattisgarh/bilaspur/news/belthara-mla-sushant-shukla-10-crore-development-work-approved-137586774.html
// 2. [Haribhoomi (whitelisted), 17 Jan 2024] 'Yuva vidhayak ne dikhaye tevar' — Khuntaghat shasakiya primary shala ka nirikshan; tiles ki jagah flooring par thikedar/JD ko fatkar, pradhan pathak ka vetan kata. Sirf nirikshan/daura, koi lokarpan/swikriti nahi → REJECT. URL: https://www.haribhoomi.com/amp/state-local/chhattishgarh/news/young-mla-showed-attitude-angry-seeing-flooring-instead-tiles-classroom-headmistress-s-act-caught-5189/amp
// 3. [Haribhoomi (whitelisted), 17 Feb 2024] 'Rahul Gandhi ke khilaf shikayat' — MLA ne Sarkanda thane me Rahul Gandhi ke khilaf likhit shikayat di (PM Modi par tippani). Raajnaitik kadam, koi vikas-kaam nahi → REJECT. URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/complaint-against-rahul-gandhi-mla-sushant-shukla-approaches-police-comments-pm-modi-2024-02-17-10405/amp
// 4. [Navbharat Times (whitelisted), 19 Jul 2026] Baadh-prabhavit kshetron ka daura — ghutne-tak paani me coloniyon ka nirikshan, adhikariyon ko rahat ke nirdesh. Sirf daura/nirikshan, koi bhautik nirmaan nahi → REJECT. URL: https://navbharattimes.indiatimes.com/state/chhattisgarh/raipur/mla-sushant-shukla-meet-residents-and-issues-directives-to-officials-heavy-rain-in-bilaspur/articleshow/132491260.cms
// 5. [Navbharat Times (whitelisted), 16 Dec 2025] Ration-card mudde par MLA ne apni hi sarkar ko ghera — khadya mantri ne aarop kharij kiye, koi janch/ashwasan nahi. Sirf prashn, koi dastaveji nateeja nahi → REJECT. URL: https://navbharattimes.indiatimes.com/state/chhattisgarh/raipur/assembly-winter-session-issue-of-ration-cards-bjp-mla-criticized-his-own-government-expressing-dissatisfaction-with-the-minister-response/articleshow/126003182.cms
// 6. [Dainik Bhaskar (whitelisted), ~Aug 2026] Amarkantak me 4 CG vidhayakon ki Narmada puja — dharmik yatra, koi kaam nahi → REJECT. URL: https://www.bhaskar.com/local/chhattisgarh/gaurela/news/amarkantak-chhattisgarh-mla-narmada-puja-mahadev-darshan-visit-138687163.html
// 7. [Dainik Bhaskar (whitelisted), ~Sep 2025] Teeja-Pora festival Beltara — mahilaon ke liye samaroh, saadi-suhag ka saman vitran. Samaroh/vitran, koi nirmaan nahi → REJECT. URL: https://www.bhaskar.com/local/chhattisgarh/bilaspur/news/teeja-pora-festival-celebrated-in-beltara-video-135696520.html
// 8. [Dainik Bhaskar (whitelisted), ~May 2026] DMF baithak me bullet par aaye MLA — human-interest, koi kaam nahi → REJECT. URL: https://dainik.bhaskar.com/wEgfMier62b
// 9. [Haribhoomi (whitelisted), 5 Mar 2025] Sarpdansh-muavza farziwada (Rs 17 crore, 431 log) — MLA ke sawal par rajaswa mantri Tankram Verma ne janch ki ghoshna ki. Ye Bilaspur jile-stariya mudda hai (sirf Beltara seat ka nahi), aur janch ka parinaam documented nahi; shanka par REJECT, lead rakha. URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/raipur-minister-tankaram-verma-mla-sushant-shukla-snake-bite-74317
// 10. [newsdawncg.com (non-whitelist), 23 Sep 2026] Beltara ki 5 panchayaton (Danganiya, Khaira-D, Basaha, Limha, Korbi) me Rs 18.67 crore ke kaam ka bhoomi pujan/shilapujan; PMGSY sadkein (Danganiya 2.70 km Rs 2.50 cr, Limha 10.10 km Rs 10.25 cr sahit), up-swasthya kendra, CC sadak — MLA mukhya atithi. Non-whitelisted portal → REJECT. URL: https://newsdawncg.com/?p=34451
// 11. [newsdawncg.com (non-whitelist), ~Oct 2026] Mukhyamantri Nagrotthan yojana se zone-7 me Rs 18.96 crore ki svikriti (Mata Karma Chowk-Mopka bypass Rs 9.38 cr, Khamtarai road Rs 4.58 cr, Chatidih shopping complex Rs 4.99 cr) — 'MLA ki pahal par' ka ekmatra aadhaar dawa; non-whitelist + sirf svikriti → REJECT. URL: https://newsdawncg.com/?p=35173
// 12. [nationalcrimenewss.blogspot.com (blogspot — sakht reject), 24 Sep 2026] 6 panchayaton me Rs 13.94 crore ke kaam ka bhoomi pujan/shilapujan/lokarpan — blogspot → REJECT. URL: http://nationalcrimenewss.blogspot.com/2026/09/beltara-development-works-13-94-crore-six-gram-panchayats.html
// 13. [sbharatnews.com (non-whitelist), ~Dec 2024] Semartal, Lakhram, Lagra me 3 Mahatari Sadan (kul Rs 74.10 lakh) ka bhoomi pujan — sarkari yojana ka samaroh + non-whitelist → REJECT. URL: https://sbharatnews.com/?p=121087
// 14. [hamarsangwari.com (non-whitelist), ~Oct 2026] Ward-50 Lingiyadih me sadak-nali nirmaan ka bhoomi pujan — parshad ka karyakram; MLA ki vyaktigat bhoomika/fund undisclosed + non-whitelist → REJECT. URL: https://hamarsangwari.com/?p=37872
// 15. [khabar36.com (non-whitelist)] Sakri me Rs 50 crore ke lokarpan-bhoomi pujan ka karyakram TAL GAYA; Beltara seat ka nahi (Takhatpur/Bilaspur) → REJECT. URL: https://khabar36.com/the-union-minister-of-states-name-was-not-included-in-the-inauguration-and-foundation-stone-laying-ceremony-program/
// RETRY-LEADS (parent ke liye):
// A. Bhaskar ka Rs 10 crore svikriti report (~Jun 2026, 18 wards) — agar 2026-27 me ye sadak/nali/paani ke kaam bane aur Bhaskar/Haribhoomi/Patrika me MLA ke vyaktigat lokarpan ki post-event reporting aaye to Sadak/Paani entries ban sakti hain.
// B. blogspot par darj Lakhanpur (Basin Pat) me Vidhayak Nidhi se Rs 10 lakh ki boundary-wall ka lokarpan (Oct 2026) — agar koi whitelisted outlet iski post-event reporting kare to Vidhayak Nidhi lokarpan entry ban sakti hai (fund disclosed: Vidhayak Nidhi).
// C. newsdawncg ke Rs 18.67 crore bhoomi pujan (Sep 2026) / Rs 13.94 crore (Sep 2026) reports — agar whitelisted outlet (Bhaskar/Haribhoomi/Patrika) inhi karyakramon ki post-event reporting kare to Sadak/School/Aspataal entries ban sakti hain; PMGSY sarkari portal par sanction list bhi check karein.
// D. Vidhayak Nidhi itemized lists: Collector Bilaspur karyalaya ki itemized sanction lists online nahi mili — DPR/CG press ya Collector notice-board check karna hoga.
// E. Mahatari Sadan bhoomi pujan (~Dec 2024, sbharatnews) — sarkari yojana hai, whitelisted reporting mile to hi vichaar.
// F. Sarpdansh-muavza janch (Haribhoomi, 5 Mar 2025, Rs 17 crore farziwada) — mantri ne janch ghoshit ki thi; janch ka parinaam documented ho to entry ban sakti hai (Beltara-seat framing me saavdhaani).
chhattisgarhWorks['dilip-lahariya'] = [];

// REJECT-LOG (dilip-lahariya, Masturi SC):
// 1. Malhar-Chilhati marg (via Dhangawan, Okhar, Gidhpuri, Bahtara, Bhatchaura, Chilhati), 25 km, Rs 55.43 crore ki prashaskiya swikriti — page khola aur padha (apnachhattisgarh.com, 1 Oct 2026; 2024-25 budget me MLA ki pahal, PWD prakkalan/NOC ke baad mantralay-star se swikriti ka dava). REJECT: source whitelist me nahi (chhota portal). Post-event/prashaskiya swikriti hone ke karan ye sabse majboot lead hai.
// 2. Naidunia Bilaspur e-paper (30 Jul 2026) me Masturi seat-report: MLA ka dava 'dhai saal me vikas ko mili gati, sadak ke liye fund jaari karaya' + nivasi-quote wala 'vaade nibhe bhi, kai abhi adhure'. REJECT: Jagran/Naidunia whitelist me nahi + keval MLA ka dava (dawa-entry ka bhi yogya nahi — koi konkret kaam/documented bhoomika nahi).
// 3. Bhaskar 'The strength of Congress is its workers: MLA Lahariya' (Chilhati, Panchpedi; ~600 karyakarta sammelan) — Dainik Bhaskar (whitelisted). REJECT: party karyakram, vikas-kaam nahi.
// 4. Bhaskar 'Congress MLA Report card LokSabha election' — whitelisted outlet, Masturi seat par BJP ki ~2,000 vote lead ka vishleshan. REJECT: chunavi vishleshan, works nahi.
// 5. 'Mor Duar-Sai Sarkar' abhiyan ke tahat Beltukari (Masturi block) me PMAY-G Awaas Plus 2.0 survey me MLA ki bhagidari — gramayatrachhattisgarh.com (Apr 2025). REJECT: abhiyan-shubharambh/survey me maujoodgi; whitelist me nahi.
// 6. Swatantrata Divas 2024 par Pachpedi me dhvajarohan/flag-hoisting — satyagrahnews.in. REJECT: samaroh, whitelist me nahi.
// 7. Veerani Public School Sipat varshik utsav me mukhya atithi (Dec 2023) — dainikchhattisgarhwatch.com. REJECT: CSR/mukhya-atithi samaroh, whitelist me nahi.
// 8. Vishva Adivasi Divas samaroah, Aamakoni (Pachpedi) me mukhya atithi — apnachhattisgarh.com. REJECT: samaroh, whitelist me nahi.
// 9. Bhaskar 'Trained employees on the SIR process' (Masturi, Block Congress Committee baithak ki adhyakshata) — Dainik Bhaskar (whitelisted). REJECT: party baithak, works nahi.
// 10. Delhi 'Gyanesh Kumar Hatao' andolan me bhagidari ke liye ravana, Oct 2026 — newsdawncg.com. REJECT: party andolan, whitelist me nahi.
// 11. 'Masturi: 47 karyon ke liye 3.5 crore ki swikriti' (Feb 2026) — public.app video snippet. REJECT: aggregator + snippet-matra; page khola nahi ja saka aur MLA ka naam snippet me nahi.
// 12. Vidhayak Nidhi itemized sanction lists: Collector-office/Bilaspur zila se Dilip Lahariya ke naam par koi itemized list whitelisted outlet ya sarkari portal par nahi mili. Khoj me sirf samanya 'swikriti' khabren (onlinebulletin.in, gramayatrachhattisgarh.com) aayin jisme MLA ka vyaktigat ullekh nahi.
// 13. SIMS swasthi samiti baithak (Sep 2024) me upasthiti — hashtagu.in tag feed se utha text (mool reporting aspasht). REJECT: samiti-bhaithak me upasthiti-matra; MLA ke Masturi seat ke kaam se sambandhit nahi.
// 14. Feb 2025 bhitaraghat shikayat (PCC poorv sachiv Ravi Shrivas ne zila adhyaksh ko patra, MLA + putra Arvind par panchayat chunav me adhikrit pratyashi ke khilaf kaam ka aarop; audio viral ka dava) — ibc24.in / cbn36.com. REJECT: intra-party political shikayat, criminal/FIR nahi; dono source whitelist me nahi. Negative threshold poora nahi.

// RETRY-LEADS (parent ke liye):
// A. Malhar-Chilhati 25 km sadak, Rs 55.43 crore prashaskiya swikriti (page khola/padha gaya hai; MLA ki vyaktigat pahal ka dava, 2025-26 budget). Agar Haribhoomi/Dainik Bhaskar/Patrika/Navbharat me post-event ya sanction reporting mile to Sadak-category entry (badge: news, note me sarkari prashaskiya swikriti + MLA ki pahal ka srot-capped credit).
// B. Naidunia 30 Jul 2026 seat-report me MLA ka 'sadak fund jaari karaya' ka dava — kisi whitelisted outlet me konkret sadak + rakam ke saath report hui to dawa-entry sambhav.
// C. CG DPR/jansampark portal par Masturi/Masturi-block Vidhayak Nidhi sanction list — milne par sarkari-badge entries.

// QA: 0 entries pass. Whitelisted sroton me Dec 2023+ ka koi vyaktigat lokarpan/shilanyas, GO-backed swikriti, ya Vidhansabha-maang ka dastaveji nateeja documented nahi mila. Sabhi substantive leads non-whitelisted portals par hain (retry-leads me darj). Profile khali rakhna niyam-anusar sahi hai — galat entry se khali profile behtar. Negatives: koi nahi (2023 halafname 0 cases; established media me FIR/jaanch nahi; 2018 ka case bina 2023+ legal development ke negative nahi).

// ---- Bilaspur district batch END (2 works, 1 negative; 3 others empty; state total 12) ----


// ---- Mungeli district batch (researched 2026-10-17) ----
chhattisgarhWorks['arun-sao'] = [
  {
    title: 'Deputy CM and Lormi MLA Arun Sao granted Rs 15.59 crore administrative sanction for construction of five roads in Lormi constituency to improve connectivity, including Gram Hadgaon se Kotri marg (2.70 km).',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/chhattisgarh/mungeli/lormi/news/1559-crore-approved-for-five-roads-in-lormi-137192198.html',
    date: '2026-02-13',
    note: 'Dainik Bhaskar reports administrative sanction (prashaskiya swikriti) of Rs 15.59 crore for five roads in Arun Sao ke apne Lormi vidhansabha kshetra. Work is at sanction stage only — no lokarpan or completion report yet.',
    period: '2023-2028',
    stage: 'swikriti',
  },
];
// REJECT-LOG (arun-sao):
chhattisgarhWorks['punnulal-mohle'] = [
];
// REJECT-LOG (punnulal-mohle, Mungeli): 1. "Mega PTM (parent-teacher meeting) under chief hospitality of MLA Punnulal Mohle at PM Shri SeGes Daupara" (aajkaaalap.com, 6/8/2024; 2024-25 session) — muhle keval mukhya atithi the; koi bhautik sanrachna/fund nahi; outlet NON-WHITELIST. REJECT. 2. "11 saal par jila BJP karyalaya Mungeli me karyashala, mukhya vakta vidhayak Mohle" (navbharattimes24x7.in, ~Jun 2025) — party ka sankalp-se-siddhi program; koi sarkari karya nahi; outlet NON-WHITELIST (lookalike clone). REJECT. 3. "Loksuraj/Bhent-Mulakat jaisa samasya-samadhan shivir, gram Kanteli (Mungeli block)" (reportwire.in, ~Jul 2024) — 355 avedan, 234 ka turant nistaran, poshan kits; adhikariyon ko dant bhi lagi — shivir/daura format, koi bhautik karya/fund swikriti nahi; outlet NON-WHITELIST. REJECT. 4. "CM Vishnudev Sai ne Mungeli jila granthalaya me Rs 29.90 lakh ke atirikt kaksh ka lokarpan kiya" (nwnews24.com, 20/5/2025) — lokarpan MUKHYAMANTRI ne kiya; Mohle keval upasthit the; dusre neta ke karyakram me maujoodgi + outlet NON-WHITELIST. REJECT. 5. "Vidhayak evam collector ne Mungeli shahar me vibhinn nirman karyon ka avalokan kiya" (navbharattimes24x7.in) — SIRF NIRIKSHAN/daura (road crossing naala, Tarbanda talab, Balani chowk); outlet NON-WHITELIST. REJECT. 6. "Nandghat-Mungeli road four-lane at Rs 137.81 crore" (channel24india.com) — state highway project; Mohle ki vyaktigat bhoomika documented nahi (shrey Dy CM Arun Sao ko); kendriya/state badi pariyojna me shrey nahi; outlet NON-WHITELIST. REJECT. 7. "CM Sai inaugurates Rs 69 crore projects at gram Madku (Mungeli), 25 Sep 2026" (nationpress.com) — CM ka karyakram; Mohle ki bhoomika documented nahi; outlet NON-WHITELIST. REJECT. 8. "Punnulal Mohle ke dwara vidhan sabha kshetra Mungeli me shakkar karkhana prarambh kiye jaane ke sambandh me ashaskiya sankalp" (prawakta.com, winter session ~2024) — SIRF PRASTAV/sankalp (pre-session agenda reporting); koi mantri-ashwasan/dastaveji nateeja nahi; outlet NON-WHITELIST. REJECT. 9. "Rajyotsav ka samapan Mungeli, vidhayak mukhya atithi" (Dainik Bhaskar, ~Nov 2025) — whitelisted, lekin sanskritik samaroh ka mukhya-atithi karya; koi bhautik sarkari sanrachna/fund nahi. REJECT. 10. "Yoga Day: Mungeli me vidhayak Punnulal Mohle VIP guest" (Dainik Bhaskar, 2024/2025) — whitelisted, lekin ceremonial guest listing; koi karya nahi. REJECT. 11. "Janjatiya Gaurav Divas, Mungeli me vidhayak Mohle mukhya atithi" (amarvaani.com, 13/11/2025) — jila-stariya samaroh me mukhya-atithi; outlet NON-WHITELIST; koi karya nahi. REJECT. 12. "Mungeli: BJP vidhayak ke chachere bhai Adheen Mohle sahit 3 ki sadak hadse me maut" (India TV Hindi, 15/10/2026) — pariwar ka mamla; MLA khud aaropi nahi — negative niyam poora nahi hota. REJECT. 13. "Congress demands dismissal of Chhattisgarh Food Minister (Punnulal Mohile)" (Times of India, ~Feb 2015) — PRE-TERM (2008-2018 mantri karyakaal) ka mamla; wartaman karyakaal me koi legal development nahi; negative entry NAHI ban sakti. REJECT. 14. "Panchayat-3 jaisa kabootar wala scene — Independence Day Mungeli, vidhayak ne kiya dhwajarohan" (jagran.com, 21/8/2024) — dhwajarohan samaroh; koi karya nahi. REJECT. 15. "BJP MLA Punnulal Mohle injured — sadshyata abhiyan me gadhde me fisal kar gire" (jantaserishta.com, 3/10/2024) — vyaktigat hadsa news; koi karya/negative nahi. REJECT.
// ---- Mungeli district batch END (1 entries) ----

// ---- Janjgir-Champa district batch (researched 2026-10-17) ----
chhattisgarhWorks['raghavendra-kumar-singh'] = [
  {
    title: 'MLA Raghavendra Kumar Singh ne Paharia gaon me Vidhayak Nidhi se swikrit Rs 6 lakh ki CC road ke nirmaan ka bhoomi pujan gramwasiyon, panchayat pratinidhiyon aur kshetriya janpratinidhiyon ki upasthiti me kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/chhattisgarh/janjgir/baloda/news/cc-road-to-be-built-in-paharia-for-rs-6-lakh-mla-performed-bhoomi-pujan-136049752.html',
    date: '2025-09-30',
    note: 'Dainik Bhaskar ki post-event report ke anusaar, Maa Annadharidai ki pavan dhara Paharia me vidhayak ne Vidhayak Nidhi se swikrit Rs 6 lakh laagat ki CC road ka bhoomi pujan kiya; karyakram me gramwasi, panchayat pratinidhi aur kshetriya janpratinidhi upasthit the. Fund: Vidhayak Nidhi (Rs 6 lakh). Kaam Akaltara seat ke Paharia gaon me; vyaktigat bhoomika (bhoomi pujan) aur fund — dono disclosed. Date search-result metadata (last-updated ~382 din pehle) se anumaanit; page text me date nahi dikhi.',
    period: '2023-2028',
    stage: 'shilanyas-bhoomi pujan',
  },
];
// REJECT-LOG (raghavendra-kumar-singh):
chhattisgarhWorks['byas-kashyap'] = [
  {
    title: 'Police ne 30 June 2025 ko kharab sadak ki maang par kiye gaye lagbhag 5 ghante ke chakkajam ke baad Janjgir-Champa MLA Vyas Kashyap aur unke 11 sahyogiyon ke khilaf City Kotwali Janjgir me kes darj kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Haribhoomi',
    sourceUrl: 'https://www.haribhoomi.com/state-local/chhattishgarh/janjgir-champa-jaijaipur-mla-baleshwar-sahu-arrested-vyas-kashyap-case-registered-635112',
    date: '2025-07-01',
    note: 'Haribhoomi (1 Jul 2025) ke anusaar, Jarve–Peethampur marg ki jara halat ke virodh me 30 June 2025 ko lagbhag 5 ghante tak chakkajam kiya gaya, jisme schooli bachchon ko bhi shamil kiya gaya; uske baad sarpaanch, up-sarpaanch, jila panchayat sadasya aur janpad sadasya sahit MLA Vyas Kashyap par City Kotwali Janjgir me kes darj hua. Report me MLA ki pratikriya ka koi ullekh nahi tha; isi report me giraftari ka koi zikr bhi nahi tha — sirf kes darj hone ki reporting. Pehchan: halafnama me naam ‘Byas Kashyap’ (S/o Shaniram Kashyap, INC, Janjgir-Champa) hai — report me ‘Vyas Kashyap’ spelling.',
    period: '2023-2028',
  },
];
// REJECT-LOG (byas-kashyap — Janjgir-Champa (INC), karyakaal Dec 2023–2028):
chhattisgarhWorks['sheshraj-harvansh'] = [
  {
    title: 'Vidhan Sabha Budget Satra 2025 me MLA ke prashn par Indira Nikunj Mana Ropani se jude 5 van adhikari-karmchari nilambit — van mantri ne PCCF janch karai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Patrika',
    sourceUrl: 'https://www.patrika.com/raipur-news/cg-news-many-officers-and-employees-of-the-forest-department-have-been-suspended-19477596',
    date: '2025-03-22',
    note: 'Patrika (Raipur edition) ke anusar CG Vidhan Sabha ke Budget Satra 2025 me Pamgarh MLA Sheshraj Harvansh ne Indira Nikunj Mana Ropani me sanchalit Kunwaradev Mahila Swa-Sahayata Samooh ke karya-sanchalan par prashn uthaya; van mantri Kedar Kashyap ko vibhag ki taraf se jo jawab dilaye gaye wo galat the. Mantri ne gambhirta se lete hue Pradhan Mukhya Van Sanrakshak evam Van Bal Pramukh ko janch ke nirdesh diye; PCCF V. Srinivas Rao ki adhyakshata me samiti (APCCF Naved Shujauddin, CCF Raipur Raju Agasimani) ne tathya chhupane ki pushti ki. Parinaam: Raipur vanmandal ke Raipur parikshetra adhikari Satish Mishra, Mana nursery prabhari vanpal Teja Singh Sahu, vanmandal karyalay ke sahayak grade-02 Avinash Walde aur Pradeep Tiwari, parikshetra karyalay ke lipik Ajit Dadhsena — kul 5 nilambit; vanmandaladhikari Loknath Patel evam up-vanmandaladhikari Vishwanath Mukherjee ke viruddh shasan-star par anushasanatmak karyavahi ka patrachar. Credit capped: MLA ka prashn tha; nilamban-karyavahi van mantri ki janch-aadesh ka nateeja hai. Mamla Raipur vanmandal ka hai (Pamgarh seat se bahar) — prashn inhone uthaya.',
    period: '2023-2028'
  }
];
// REJECT-LOG (shanka ho to reject; galat entry se khali profile behtar)
// ---- Janjgir-Champa district batch END (3 entries) ----

// ---- Sakti district batch (researched 2026-10-17) ----
chhattisgarhWorks['charan-das-mahant'] = [
  {
    title: 'Mahant ke likhit prashn ke jawab me mantri ne sadan ko bataya — Jan 2024 se Jan 2025 tak 171 audyogik durghatnaon me 124 mazdooron ki maut, 86 ghayal; mritakon ke aashriton ko Rs 17.24 crore muavza aur ghayalon ko Rs 60.32 lakh sahayta di gayi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI (ThePrint)',
    sourceUrl: 'https://theprint.in/india/171-industrial-accidents-left-124-workers-dead-86-injured-in-chhattisgarh-in-13-months/2536248/?amp',
    date: '2025-03-06',
    note: '6 Mar 2025 ko Vidhansabha me Netapratipaksh Charan Das Mahant ke likhit prashn par Vaanijya evam Udyog Mantri Lakhan Lal Dewangan ka likhit jawab — 1 Jan 2024 se 31 Jan 2025 tak rajya ke audyogik ikaiyon me 171 durghatnaen; 124 mazdoor mrit, 86 ghayal; mritakon ke parijanon ko Rs 17,23,68,454 muavza aur ghayalon ko Rs 60,32,342 sahayta rashi di gayi. Mantri ne yeh bhi sweekara ki mritak parivaron ke punarvas ka koi pravdhan nahi hai. Mahant ka prashn rajya-stariya tha (Sakti seat vishesh nahi) — shrey seemit (credit capped); muavza sarkari pravdhan se hua, MLA ne swayam nahi diya.',
    period: '2023-2028',
  },
  {
    title: 'Charan Das Mahant par Rajnandgaon me IPC dhara 506 (aapradhik dhamki) ke tahat FIR — PM Modi ke khilaf chunavi rally me vivadit bayan ke baad ECI ke nirdesh par kaaryavaahi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Navbharat Times',
    sourceUrl: 'https://navbharattimes.indiatimes.com/state/chhattisgarh/raipur/chhattisgarh-news-case-registered-against-leader-of-opposition-charan-das-mahant-hate-speech-against-pm-modi/articleshow/109080812.cms',
    date: '2024-04-05',
    note: '5 Apr 2024 (shukravaar) ko Rajnandgaon ke Kotwali thane me Mahant par IPC dhara 506 ke tahat FIR darj — Zila Nirvachan Adhikari ke nirdesh par, Bharat Nirvachan Aayog ke kaaryavaahi aadesh ke baad. Aarop: Mahant ne 2-3 Apr 2024 ko Rajnandgaon me Bhupesh Baghel ki namankan rally ko sambodhit karte hue PM Modi ke khilaf "lathi marne" wala bayan diya tha. Mahant Congress ke star-pracharak the — isliye rajya ke CEO/Zila Nirvachan Adhikari seedhe kaaryavaahi nahi kar sakte the aur kendriya Aayog ne sangyaan liya. Vivad badhne par Mahant ne maafi maangi (source ke anusaar). FIR ke baad charge-sheet, giraftaari ya muqadme ki pragati in sroton me darj nahi — isliye stage-accurate framing: kewal FIR darj hone ka tathya. Mahant ki pehchan: Chhattisgarh Vidhansabha me Netapratipaksh aur Sakti se vidhayak.',
    period: '2023-2028',
  },
];
// REJECT-LOG (charan-das-mahant):
chhattisgarhWorks['ramkumar-yadav'] = [
];
// REJECT-LOG (ramkumar-yadav — Chandrapur (INC), karyakaal Dec 2023–2028):
chhattisgarhWorks['baleshwar-sahu'] = [
  {
    title: 'Bilaspur High Court ne sansadon aur vidhayakon ke khilaf lambit aapradhik prakarnon ki tezi se sunvai ke nirdesh diye — June 2026 ki status report ke mutabik Janjgir-Champa jile me Jaijaipur MLA Baleshwar Sahu se jude mamle ki sunvai jaari hai aur abhiyojan paksh ke sakshya darj kiye ja rahe hain',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Patrika',
    sourceUrl: 'https://www.patrika.com/bilaspur-news/high-court-orders-speedy-hearing-of-criminal-cases-against-mps-mlas-20796063',
    date: '2026-08-01',
    note: 'Patrika ki page-report ke mutabik Bilaspur High Court ki division bench (Chief Justice Ramesh Sinha aur Justice Ravindra Kumar Agrawal) ne sansadon, vidhayakon, poorv sansadon aur poorv vidhayakon ke khilaf darj aapradhik prakarnon ki jaldi sunvai karne ke nirdesh nichli adalaton ko diye. Nyaymitra Dr. N.K. Shukla ne sunvai me division bench ko bataya ki pichhli status report ke mukable do lambit aapradhik mamalon ka nirakaran hua hai. June 2026 ki sthiti ke anusaar Janjgir-Champa jile me vidhayak Baleshwar Sahu va anya se jude mamalon ki sunvai chal rahi hai; aapradhik prakaran me abhiyojan paksh ke sakshya darj kiye jaane ki prakriya jaari hai. Division bench ne agli sunvai 25 August tay karke Registrar (Judicial) ko sabhi trial courts se taza report lekar updated status prastut karne ka nirdesh diya. Disclosure: article me Baleshwar Sahu ka koi jawab nahi diya gaya hai; koi dosh-siddhi nahi hui hai; ye 2023 halafname ke lambit mamalon ka vartaman karyakaal (June-Aug 2026) me nyayik vikas hai — High Court monitoring order, trial jaari.',
    period: '2023-2028',
  },
  {
    title: 'Jaijaipur MLA Baleshwar Sahu ko 9 January 2026 ko dhokhadhadi aur jaalsazi ke aarop me giraftar kiya gaya — police ne chargesheet adalat me prastut ki, CJM court ne sangyan lene ke baad nyayik hirasat me bheja, mamla abhi bhi vicharadhin hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/chhattisgarh/chhattisgarh-congress-mla-arrested-in-cheating-case/article70491406.ece',
    date: '2026-01-09',
    note: 'The Hindu (Raipur, 9 January 2026) ki report ke mutabik Chhattisgarh ke Janjgir-Champa jile me Congress MLA Baleshwar Sahu (Jaijaipur) ko dhokhadhadi ke mamle me 9 January 2026 ko giraftar kiya gaya; police ne ek kisan ke saath lagbhag Rs 47 lakh ki dhokhadhadi ka aarop lagaya. Police adhikari ke anusaar 2015 se 2020 ke beech jab Sahu Bamhanidih me District Cooperative Society ke manager the, unhone complainant Ram Kumar Sharma ko 50 acre zameen par Kisan Credit Card loan lene ki salah di; awedak ke naam HDFC Bank Champa me khata khulwaya gaya, awedak se blank cheque liya gaya aur Rs 24 lakh Sahu aur unki patni ke khate me transfer kiye gaye; aarop hai ki awedak ke hastakshar aur anguthe ke nishan jaal karke kul Rs 42.78 lakh nikal liye gaye. Police statement ke mutabik Champa police station me darj prakaran ki janch aur sakshya-sankalan ke baad Gautam Rathore aur Jaijaipur ke MLA Baleshwar Sahu ke khilaf aarop siddh paaye gaye aur 9.1.2026 ko adalat me challan prastut kiya gaya; challan par CJM court ne sangyan liya, jail warrant jaari hua aur aaropi ki regular bail court ne kharij kar di. Disclosure: article me Sahu ka koi jawab nahi diya gaya hai; koi dosh-siddhi nahi hui hai; pre-term (2015-2020) aaropon par vartaman karyakaal (Jan 2026) me nyayik vikas — mamla vicharadhin.',
    period: '2023-2028',
  },
  {
    title: '14 January 2026 ko Janjgir-Champa jila adalat ne dhokhadhadi ke mamle me Jaijaipur MLA Baleshwar Sahu ko jamanat de di — Rs 50,000 ke do surety bond par district jail se rihai, mamla abhi bhi vicharadhin hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI (The Week)',
    sourceUrl: 'https://www.theweek.in/wire-updates/national/2026/01/14/chhattisgarh-congress-mla-gets-bail-in-cheating-case-released-from-jail.amp.html',
    date: '2026-01-14',
    note: 'PTI (Janjgir-Champa, 14 January 2026) ki report ke mutabik jile ki adalat ne Congress MLA Baleshwar Sahu (Jaijaipur) ko dhokhadhadi ke mamle me jamanat de di, jiske baad ve district jail se riha ho gaye; unki giraftari 9 January ko hui thi. Vakeel Rajesh Pandey ke mutabik District and Additional Sessions Judge Ganesh Ram Patel ne mangalwar ko bail arji suni aur budhwar ko faisla sunaya; adalat ne Rs 50,000-50,000 ke do surety bond par jamanat manjoor ki. Sahu ne patrakaron se kaha ki unhe BJP sarkar ke dabav me ek jhoothe aur pehle se taiyar kiye gaye mamle me fasaya gaya hai aur unke khilaf jaalsazi ya kisi aur galat kaam ka koi saboot nahi mila; unhone poori aur nishpaksh janch ki maang ki. Report ke mutabik Rajkumar Sharma (Sara Gaon police station area) ki shikayat par October 2025 me Sahu aur Gautam Rathore ke khilaf prakaran darj hua tha; aarop hai ki 2015-2020 me jab Sahu Bamhanidih me cooperative society ke manager the aur Rathore salesman the, dono ne Sharma ke parivar ko thaga — 50 acre zameen par Kisan Credit Card loan ki salah di, Champa ke private bank me khata khulwaya, blank cheque liya, Rs 24 lakh Sahu aur unki patni ke khate me transfer kiye aur Sharma, unki maa aur patni ke hastakshar tatha anguthe ke nishan jaal karke Rs 42.78 lakh nikal liye. Disclosure: bail milne ke baad bhi koi dosh-siddhi nahi hui hai; pre-term aaropon (2015-2020) par vartaman karyakaal (Jan 2026) me nyayik vikas — mamla vicharadhin.',
    period: '2023-2028',
  },
];
// REJECT-LOG (baleshwar-sahu):
// ---- Sakti district batch END (5 entries) ----

// ---- Mahasamund district batch (researched 2026-10-17) ----
// Worker fragment: chaturi-nand (Chaturi Nand) — Saraipali (SC), INC
// Mining window: Dec 2023 – 17 Oct 2026. Sources checked: The Hindu, Indian Express,
// Hindustan Times, NDTV, India Today, Times of India, Dainik Bhaskar, Patrika, Navbharat,
// Haribhoomi, PTI-on-established-outlets. Roman-script Hinglish only.

chhattisgarhWorks['chaturi-nand'] = [
  // No valid works entries: no whitelist outlet published post-event reporting of
  // her personal lokarpan/shilanyas, itemized Vidhayak Nidhi vitaran, or
  // documentary sanction outcomes attributable to her in Dec 2023 – Oct 2026.
];

// ===== REJECT-LOG (leads only — not entries) =====
// L1. Saraipali ko Rs 175 crore ke vikas karyon ka lokarpan/bhoomipujan — Up CM Arun Sao
//     ne 23 Sep 2026 ko nai mandi prangan Saraipali me kiya; MLA Chaturi Nand sirf
//     upasthit thi. Rule: dusre neta ke karyakram me maujoodgi = REJECT. Coverage bhi
//     non-whitelist par hai (theindiaking.com, ekhabri.com, cgsandesh.com,
//     theindependentmedia.in). MLA ka koi vyaktigat lokarpan ya fund disclosure nahi.
// L2. Bhikhapali-Kokdi marg par uchch-stariya pul (Rs 4.83 crore) aur Rajadih-Bhalukona
//     3.80 km sadak (Rs 4.99 crore) ki PWD prashaskiya swikriti, FY 2025-26 —
//     thenaradnews24.com (Oct 2026). Source whitelist me nahi = REJECT. MLA ki vidhansabha
//     prashn-maang ka dastaveji nateeja bataya gaya, lekin established outlet par
//     coverage mile to dobara mulyankan ho sakta hai.
// L3. Palidih-Chhui-Pali marg 18.29 km unnyan (Rs 32.93 crore), PWD FY 2024-25 swikriti —
//     vandebharatlivetvnews.com. Whitelist me nahi = REJECT.
// L4. Kokdi-Chakarda road 2.64 crore budget — aimamedia.org (Feb 2026). Whitelist me nahi = REJECT.
// L5. Kendua me navin mahavidyalaya ki maang, Ghatkachhar me middle school unnyan —
//     vidhansabha yachika, aajkijandhara.com (Dec 2024). Sirf maang/prastav = REJECT.
// L6. Haribhoomi (15 Feb 2024): Speaker ne prashn-kaal me unke police vetan-bhatta
//     prashn ki prashansa ki — seat-kaam nahi, sirf vidhansabha prashn = REJECT.
// L7. Patrika items: civic-chunav paryavekshak niyukti (Sep 2026), DEO office gherao
//     (protest), Raigarh gangrape jaanch samiti me sadasya — political activity,
//     seat-kaam nahi = REJECT.
// L8. Nakti gaon me vidhayak colony ke virodh me CM ko patra — bhilaitoday.com
//     (non-whitelist), Raipur-sambandhit siyasi mudda, seat-kaam nahi = REJECT.

// ===== NEGATIVES =====
// None. 2023 halafnama me zero criminal cases; established media me MLA ke khilaf koi
// FIR, naam-daar jaanch ya nyayik vikas report nahi mila. Family matters excluded.

// worker: sampat-agrawal (Basna, BJP)
// count: 2 valid entries (dono Dainik Bhaskar post-event reporting — vyaktigat bhoomipoojan, bhautik sarkari sanrachna)
// NOTE on dates: Bhaskar pages printed date nahi dikhate.
//  - Gudhiyari: search stamp "314 days before 2026-10-17" (i.e. ~2025-12-07); article me event "शनिवार को" tha —
//    2025-12-06 Saturday hai. Date approximate: 2025-12-06.
//  - Kamar Para: in-page byline "पिथौरा 9 महीने पहले" — 2026-10-17 se 9 mahine pehle ~2026-01-17. Approximate.
// NOTE on fund: dono Bhaskar reports me fund-srot (Vidhayak Nidhi ya koi yojana) disclosed nahi hai — credit bhoomipoojan ki bhoomika tak capped.
chhattisgarhWorks['sampat-agrawal'] = [
  {
    title: 'Basna Vidhayak Sampat Agrawal ne Gudhiyari gaon ke dhan-mandi parisar me Rs 10 lakh ki CC road ka bhoomipoojan kiya.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/chhattisgarh/mahasamund/basna/news/a-new-road-will-be-built-so-that-farmers-do-not-face-any-problem-in-going-to-gudhiyari-mandi-136604109.html',
    date: '2025-12-06',
    note: 'Bhaskar reports MLA ne vyaktigat roop se bhoomipoojan kiya; mandi parisar ki CC road se kisanon aur vyapariyon ko mandi tak aasaan pahunch milegi. Fund-srot page par disclosed nahi hai — credit sirf bhoomipoojan ki vyaktigat bhoomika tak capped. Bhoomipoojan ke baad unhone dhan-mandi ka nirikshan bhi kiya.',
    period: '2023-2028',
    stage: 'shilanyas',
  },
  {
    title: 'Basna Vidhayak Sampat Agrawal ne Pithora janpad ki gram panchayat Bheethideeh ke Kamar Para me Rs 14.70 lakh ki CC road ka bhoomipoojan kiya.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/amp/local/chhattisgarh/mahasamund/pithora/news/road-will-be-built-in-kamar-para-at-a-cost-of-rs-147-lakh-136150855.html',
    date: '2026-01-17',
    note: 'Bhaskar reports MLA ne vyaktigat roop se bhoomipoojan kiya; uddeshya Kamar Para ke raste ko sugam banana. Fund-srot page par disclosed nahi hai — credit sirf bhoomipoojan ki vyaktigat bhoomika tak capped. Date in-page byline "9 mahine pehle" se approximate.',
    period: '2023-2028',
    stage: 'shilanyas',
  },
];
// REJECT-LOG (sampat-agrawal):
// 1. Basna me 'Sambal' child neuro development & physiotherapy centre ka shubharambh (dhindora24.com, ~Sep 2026) — REJECT: outlet whitelist par nahi; MLA ne sirf badhai/upasthiti di, unka project nahi (dusre ka karyakram me maujoodgi).
// 2. Gidhli-Kharora marg ki bachon ki maang (cgsandesh.com, Oct 2026) — REJECT: sirf maang (children's appeal), koi karyawah; outlet non-whitelisted.
// 3. Barekel (Pithora janpad) Rs 2.39 crore road bhoomipoojan (chhattisgarhprimetime.com, Apr 17 2025) — REJECT: outlet whitelist par nahi. LEAD: whitelisted source me yehi khabar mile to entry bane.
// 4. Saldih-Bahadurpur marg Rs 14.30 crore prashasakiya swikriti (savera24news.in, Oct 2025; MLA ki prayason ka shrey) — REJECT: outlet whitelist par nahi. LEAD: Bhaskar/Haribhoomi/Patrika me version mile to capped 'swikriti' entry bane.
// 5. Agroha Dham Raigarh lokarpan (haribhoomi.com, Sep 2026) — REJECT: MLA sirf upasthit the; Raigarh unki seat nahi, unka project nahi (maujoodgi).
// 6. Heart-attack hospitalization Sep 2024 (media24media.com, primestv.in, johar36garh.com) — REJECT: vyaktigat sehat ki khabar, works nahi; sources bhi non-whitelisted.
// 7. 'Aadi Karmayogi' 3-divasiya prashikshan ka shubharambh, Mahasamund (public.app video, Sep 2025) — REJECT: abhiyan ke keval shubharambh; outlet non-whitelisted.

// Worker fragment: dwarikadhish-yadav (Dwarikadhish Yadav) — Khallari, INC
// Mining window: Dec 2023 – 17 Oct 2026. Sources checked: The Hindu, Indian Express,
// Hindustan Times, NDTV, India Today, Times of India, Dainik Bhaskar, Patrika, Navbharat,
// Haribhoomi, PTI-on-established-outlets. Roman-script Hinglish only.
// Search angles used: lokarpan/shilanyas/bhoomipujan/udghatan + name variants
// (dwarikadhish/dwarkadhish/dwarikadheesh/dwarkadheesh) on Bhaskar/Haribhoomi/Navbharat/Patrika/TOI.

chhattisgarhWorks['dwarikadhish-yadav'] = [
  // No valid works entries: kisi bhi whitelist outlet me Dec 2023 – Oct 2026 ke dauraan
  // unke vyaktigat lokarpan/shilanyas (bhautik sarkari sanrachna), itemized Vidhayak Nidhi
  // vitaran, ya dastaveji swikriti-nateeje ki post-event reporting nahi mili.
];

// ===== REJECT-LOG (leads only — not entries) =====
// L1. Bagbahra indoor stadium — MLA ne Oct 2024 press conference me dawa kiya ki unki
//     'ji-tod koshish' se stadium ka nirman hua (Dainik Bhaskar, whitelisted, post-event).
//     REJECT: (a) nirman pichle karyakal (2018-2023, Congress sarkar ke samay) me hua —
//     Dec 2023 window ka seat-kaam nahi; (b) udghatan Mahasamund MP (BJP) ne kiya, MLA ne
//     nahi — unka vyaktigat lokarpan/shilanyas nahi; (c) page par fund-srot disclosed
//     nahi. Credit sirf dawa tak, window se bahar = entry nahi.
// L2. Bhurkoni gaon me navnirmit Sahu Complex ka lokarpan, MLA ne kiya (Dainik Bhaskar,
//     ~Dec 2024). REJECT: page khula nahi (403); samudayik bhavan hai — sarkari sanrachna
//     nahi, fund disclosure bhi nahi. LEAD: fund vyaktigat-sarkari dikhe to dobara dekhein.
// L3. Khallari ko Rs 33 crore sadak swikriti (awaradbari-komadhi-kolda... 13.38cr +
//     bhurkoni-kharadarha 19.58cr), newsbharatlive.in (Oct 2026). REJECT: outlet
//     whitelist me nahi; shrey Mahasamund MP Rupkumari Chaudhary ko, MLA ki koi
//     vyaktigat bhoomika nahi — bina bhoomika ke shrey nahi.
// L4. Bagbahra CHC Jeevan Deep Samiti baithak ki adhyakshata, 2024-25 karyayojana par
//     charcha (dailychhattisgarh.com, Dec 2024). REJECT: routine baithak/nirikshan,
//     koi nirman/vitaran/swikriti nahi; outlet bhi whitelist me nahi.
// L5. Bagbahra CMO-nimantraan vivad (stadium udghatan me 'chaparasi ke hath' nimantraan
//     par MLA ka CMO se vivad, Bhaskar Oct 2024). REJECT: prashasnik-siyasi vivad,
//     seat-kaam nahi.
// L6. Congress press conference Apr 2024 (Haribhoomi): CM Vishnu Deo Sai ke bayan ka
//     virodh. REJECT: siyasi bayan, works nahi.
// L7. Sushasan Tihar par sarkar par prahar (Bhaskar, ~May 2026). REJECT: siyasi
//     vaktavya, works nahi.
// L8. District Congress president Mahasamund niyukti (Nov 2025, lokmattimes). REJECT:
//     party pad, seat-kaam nahi.
// L9. Congress Nyay Yatra me samarthakon sahit shamil (dailychhattisgarh, Sep 2024).
//     REJECT: siyasi gatividhi; outlet bhi whitelist me nahi.
// L10. Nagariya nikay placement karmchariyon ki anishchitkalin hadtaal ko samarthan
//      (dailychhattisgarh, Dec 2024). REJECT: virodh-pradarshan ka samarthan, works
//      nahi; outlet bhi whitelist me nahi.
// L11. CG Unfiltered YouTube ground report (Padkipali, Bagbahra block): grameenon ne
//      MLA ko sadak-pul ki kami par 10 me 0 diye. REJECT: YouTube whitelist me nahi;
//      ye 'kaam' ka record nahi, asantosh ki reporting hai — kaam me daala nahi ja sakta.

// ===== NEGATIVES =====
// None. 2023 halafname me 0 criminal cases (foundation note ke anusaar 2018 ke
// halafname wala 1 case — IPC 506/147/148/341/323/294/149 — pre-term affidavit case
// hai, vartaman karyakal me koi legal development nahi, isliye negative NAHI).
// Established media me MLA ke khilaf koi FIR, naam-daar jaanch ya nyayik vikas report
// nahi mila. Family matters excluded.

// Worker fragment: yogeshwar-raju-sinha (Yogeshwar Raju Sinha) — Mahasamund, BJP
// Mining window: Dec 2023 – 17 Oct 2026. Sources checked: The Hindu, Indian Express,
// Hindustan Times, NDTV, India Today, Times of India, Dainik Bhaskar, Patrika, Navbharat,
// Haribhoomi, PTI-on-established-outlets, sarkari portals. Roman-script Hinglish only.

chhattisgarhWorks['yogeshwar-raju-sinha'] = [
  // No valid works entries: no whitelist outlet published post-event reporting of
  // his personal lokarpan/shilanyas, itemized Vidhayak Nidhi vitaran, or
  // documentary sanction outcomes attributable to him in Dec 2023 – Oct 2026.
];

// ===== REJECT-LOG (leads only — not entries) =====
// L1. Samoda-Achhola samuh jalpraday yojana MBR ka bhoomipujan/shilanyas, gram Achhola,
//     12 Jul 2024 (event Friday; reported 13-Jul-2024). MLA ne swayam bhoomipujan kiya;
//     Jal Jeevan Mission, lagbhag 48 gaon, ~Rs 66.58 crore ki yojana (PHE EE ke mutabik).
//     Rule: strong lead (vyaktigat shilanyas, bhautik sarkari sanrachna) lekin coverage
//     SIRF dailychhattisgarh.com par — whitelist me nahi = REJECT. Bhaskar/Patrika/
//     Navbharat/Haribhoomi par coverage mile to dobara mulyankan ho sakta hai.
//     Dhyan: yojana ki swikriti 2021 ki hai aur work-order Oct 2023 ka (MLA ke karyakal
//     se pehle) — credit shilanyas tak hi cap hoga.
// L2. Shahri Ayushman Aarogya Mandir, Nayapara (shahri prathmik swasthya kendra ke tahat)
//     ka shubharambh, 26 Nov 2024 (Tuesday). MLA ne swayam shubharambh kiya; Nagar
//     Palika adhyaksh Rashi Mahilang, CMHO Dr. P. Kudesia, CGMSC engineer upasthit;
//     4 centres — Mauharibhantha, Gudrupara, Kumharpara, Pitiyajhar. Coverage:
//     dailychhattisgarh.com + khabarwala.news — dono whitelist me nahi = REJECT.
//     Rashtriya Shahri Swasthya Mission ki sarkari yojana hai — credit shubharambh
//     tak hi cap hoga; fund disclosure report me nahi.
// L3. Mahtari Sadan: Mahasamund seat me do charanon me kul 5 swikrit (Jhalap, Patewa,
//     Khatti phase 1 — Khatti ka lokarpan ho chuka; Birconi + Bhorin phase 2).
//     MLA ne 4 Dec 2025 ko Bhorin me prastavit Mahtari Sadan ka sthal nirIkshan kiya.
//     Rule: sirf nirIkshan = REJECT. Khatti ke lokarpan me MLA ki vyaktigat bhoomika
//     established nahi. Coverage dailychhattisgarh.com (whitelist nahi).
// L4. PG Mahavidyalaya varshikotsav: atirikt kaksh nirman ke liye Rs 10 lakh swikrit
//     (MLA/janbhagidari) + bore khanann par dhanyavad; manch se 400-seat hall aur
//     gym ke liye atirikt kaksh ki ghoshna. Coverage dailychhattisgarh.com. Rs 10 lakh
//     wali swikriti itemized-sanction lead hai lekin source whitelist me nahi; manch
//     ki ghoshna = sirf ghoshna = REJECT.
// L5. Sushaasan Tihaar samadhan shivir, Kodar (May 2026): MLA ne sadak swikritiyon ki
//     jankari di — Lahangar se Pidi marg Rs 5.23 crore swikrit (tender baki), Patewa
//     se Raipur marg Rs 11 crore, Parsadih-Lahangar, Saradih-Bansivani, Nawapara-
//     Achhridih, Patewa-Khallari, Patai Mata road ki swikritiyan. Coverage:
//     dailychhattisgarh.com + shorsandesh.in. Sirf shivir-manch par ghoshna/dawa =
//     REJECT. Kisi bhi marg ka bhoomipujan ya tender GO-backed dastavej nahi mila.
// L6. Gram Jivtara bhet-mulakat, 8 Jun 2026 — sadak/shade ki maangein, nirIkshan ka
//     ashwasan. Sirf maang + ashwasan, koi dastaveji nateeja nahi = REJECT.
//     (dailychhattisgarh.com, whitelist nahi).
// L7. Sirpur paryatan corridor: MLA ne 29 Dec 2025 ko Dharmasv-paryatan mantri Rajesh
//     Agrawal se milkar prastav rakha (Bhoramdev corridor ki tarj par Sirpur corridor,
//     Kodar jalashay ko circuit se jodna); mantri ne karwai ka ashwasan diya.
//     dailychhattisgarh.com. VS-maang + ashwasan pattern hai lekin source whitelist
//     me nahi = REJECT. Whitelist outlet par coverage mile to capped credit entry
//     sambhav.
// L8. CC road nirman ka bhoomipujan, Mahasamund, 5 Dec 2025 — sirf headline fragment
//     (dailychhattisgarh.com); vivaran nahi mila = REJECT.
// L9. Dainik Bhaskar ('MLA Sinha listened to Mann Ki Baat', ~Nov 2025): vidhayak ne
//     karyalaya me PM Mann Ki Baat ka 127th episode dekha. Karyakram me maujoodgi,
//     seat-kaam nahi = REJECT.
// L10. Budget 2025 pratikriya (dailychhattisgarh.com, ~Mar 2025): MLA ke mutabik budget
//      me Sikasar-Kodar nahar linking Rs 3.047 crore prashaskiya swikriti, Mohamela-
//      Sirpur barrage Rs 690 crore, nursing college Mahasamund, Kasdol-Gariaband marg,
//      Jhalap-Rayatun Achanakpur Rs 15 crore, Jobha-Pidi-Sirpur sadak-pul, Sirpur me
//      meditation centre/museum/riverfront Rs 36 crore. Sirf MLA ka dawa sarkari
//      budget ghoshnaon par — vyaktigat bhoomika established nahi = REJECT
//      (source bhi whitelist me nahi).
// L11. Viksit Bharat Sankalp Yatra shivir me adhyakshata/sahbhagita (Dec 2023) —
//      abhiyan me maujoodgi = REJECT (dailychhattisgarh.com).
// L12. Anganwadi 'Ek Ped Maa Ke Naam' vriksharopan karyakram ka shubharambh
//      (visionnewsservice.in) — abhiyan ka shubharambh = REJECT (non-whitelist).
// L13. Haribhoomi (1 Jul 2026): 'Jila Samvad' karyakram 5 Jul 2026 ki ghoshna —
//      pre-event announcement = REJECT. Post-event report me bhi ye samvad
//      karyakram hota, seat-kaam nahi.
// L14. media24media.com (Oct 2024): PM Awas karyakram me mantri Dayal Das Baghel ne
//      21,000+ hitgrahiyon ko swikriti-patra diye; MLA sath me upasthit. Dusre neta
//      ke karyakram me maujoodgi = REJECT (source bhi non-whitelist).
// L15. ncrsamacharlive.in: Sen samaj Sirpur mahasabha me MLA ne Sen Mangal Bhavan ke
//      adhure nirman hetu Rs 7 lakh sahayog rashi ki ghoshna ki (sansad pratinidhi
//      ke Rs 10 lakh samet kul Rs 17 lakh). Samaj-samaroh me daan/ghoshna =
//      REJECT (source bhi non-whitelist).
// NEGATIVES: Dec 2023 – Oct 2026 me established media me MLA ke khilaf koi FIR,
// naam-daar janch ya vartaman-term nyayik vikas nahi mila. Halafname me koi
// criminal case nahi (record se match).

// ---- Mahasamund district batch END (2 works, 0 negatives) ----

// ---- Baloda Bazar district batch (researched 2026-10-17) ----
// Worker fragment: sandeep-sahu (Sandeep Sahu) — Kasdol, INC
// Mining window: Dec 2023 – 17 Oct 2026. Sources checked: The Hindu, Indian Express,
// Hindustan Times, NDTV, India Today, Times of India, Dainik Bhaskar, Patrika, Navbharat,
// Haribhoomi, PTI-on-established-outlets, plus sarkari portals. Roman-script Hinglish only.
// NOTE: Naam-jaal — isi Kasdol seat ke IND candidate Sandeep Sahu (S/o Jawahir Prasad Sahu,
// umr 28, 1,003 votes) alag vyakti hain; inke baare me mile leads inko credit nahi.

chhattisgarhWorks['sandeep-sahu'] = [
  // No valid works entries: whitelist outlet par Dec 2023 – Oct 2026 me inke
  // vyaktigat lokarpan/shilanyas, itemized Vidhayak Nidhi vitaran, ya dastaveji
  // sanction-nateeje ki koi post-event reporting nahi mili.
];

// ===== REJECT-LOG (leads only — not entries) =====
// L1. khabarshatak.in (tag page, 20 Nov 2025): "Shaheed Santram Sahu Smriti Samudayik
//     Swasthya Kendra Kasdol me li gayi saamuhik pratigya" — Kasdol-ke-swasthya-kendra
//     se juda program. Source whitelist me nahi (REJECT), aur MLA Sandeep Sahu ki
//     vyaktigat bhoomika/fund disclosure page par sthapit nahi. Aage whitelist par
//     coverage mile to mulyankan ho sakta hai.
// L2. centralchronicle.in e-paper (27 Nov 2025, p.8): "MLA Sahu ... secured approval
//     for significant road development projects totaling over Rs.10 crore" — Kharkhara-
//     Rasela Road (18.71 km), Madwadih-Sirrikhurd Road (10.05 km), Chhura block,
//     pothole repairs Rs 5.1 crore. YE DUSRE SAHU HAIN: Chhura block + Gariaband jila
//     + photo me "Rohit Sahu MLA" likha hai (Rohit Sahu = Congress, Gariaband ke
//     padosi kshetra ke MLA). Kasdol/Baloda Bazar se sambandh nahi + source bhi
//     whitelist me nahi = REJECT (galat vyakti).
// L3. Election-period coverage (Oct-Nov 2023): Congress ne sitting MLA Shakuntala Sahu
//     ka ticket kaatkar Sandeep Sahu ko Kasdol se ummeedwar banaya; 3 Dec 2023 ko jeet
//     (1,36,362 votes, margin 33,765). Ye election khabren hain, seat-ke-kaam nahi;
//     sources bhi election-result aggregator type = REJECT.
// L4. Adani.news story "constable Sandeep Sahu" (Bemetara transfer letter) — naam-jaal:
//     police constable Sandeep Sahu, Bemetara ke MLA se jude mamle ka hai; Kasdol MLA
//     Sandeep Sahu se koi sambandh nahi = REJECT (galat vyakti).
// L5. cgfrontline.com Koriya e-paper PDF (Mar 2026) — garbled OCR, Kasdol/MLA Sandeep
//     Sahu se juda koi pathyaable vyaktigat kaam nahi = REJECT (lead bhi nahi).
// L6. MLALAD itemized sanction reports: CG arthik-aankiki nideshalay ke Rs 118.80 crore
//     vitaran (FY 2023-24) ki the-journalist.com report (non-whitelist) me sirf
//     district-wise kul raashi hai — Baloda Bazar jile ko Rs 5.28 crore (3 assembly
//     seats milakar); Kasdol MLA-wise itemized vitaran sarkari portal par locate nahi
//     ho saka. Lead hai, entry nahi = REJECT.

// ===== NEGATIVES =====
// None. 2023 halafnama me zero criminal cases; established media me MLA ke khilaf koi
// FIR, naam-daar jaanch ya nyayik vikas report nahi mila. Family matters excluded.

// Worker fragment: tank-ram-verma (Tank Ram Verma) — Baloda Bazar, BJP
// Cabinet minister since 22 Dec 2023. Mantri rule applied: only Baloda Bazar
// seat works; state-level departmental decisions excluded.
// Mining window: Dec 2023 – 17 Oct 2026. Sources checked: The Hindu,
// Indian Express, Hindustan Times, NDTV, India Today, Times of India,
// Dainik Bhaskar, Patrika, Navbharat, Haribhoomi, PTI-on-established-outlets.
// Roman-script Hinglish only. Name variants seen: Tank Ram Verma / Tankram
// Verma / Tankaram Verma.

chhattisgarhWorks['tank-ram-verma'] = [
  // No valid works entries: no whitelisted outlet with an openable page carried
  // post-event reporting of his personal lokarpan/shilanyas of a physical
  // sarkari structure in the Baloda Bazar seat, itemized Vidhayak Nidhi
  // vitaran, or a documentary sanction outcome attributable to him in
  // Dec 2023 – Oct 2026.
];

// ===== REJECT-LOG (leads only — not entries) =====
// L1. Baloda Bazar nagar palika: Rs 32 lakh hat bazaar (ward 13) lokarpan +
//     Rs 3.40 crore sabzi bazaar (ward 10) bhoomipujan by Verma himself —
//     Dainik Bhaskar, post-event, seat ke andar. URL:
//     https://www.bhaskar.com/amp/local/chhattisgarh/baloda/news/vegetable-market-started-to-be-built-commercial-complex-prepared-dbp-137437067.html
//     Page browser me 403 par reject hua (khula nahi) — "khul na sakne wala page
//     source nahi" niyam ke tahat retry lead. Dobaara khulne par entry ban sakti
//     hai (badge: news, category: Any, stage: lokarpit + shilanyas).
// L2. Gram Saguni (Tilda block, Raipur district) me rangmanch + Amrit Sarovar
//     lokarpan by Verma; saath hi 50 gaonon me lighton ke liye Rs 2 crore ki
//     swikriti aur seat me lagbhag Rs 15 crore ke karyon ki swikriti ka dawa —
//     indiatimes.com (Times Internet), Sep 2026. REJECT: (a) Saguni/Tilda
//     Baloda Bazar seat ke bahar hai (mantri-niyam); (b) swikriti-sankhyaen
//     sirf mantri ke dawe par hain, koi itemized sarkari dastavej nahi;
//     (c) outlet bhi whitelist ki shabdaavali ("Times of India") se seedha mel
//     nahi khata — DPR press note ka punarlekhan hai.
// L3. CM Vishnu Deo Sai ke Suhela (Nov 2024, ~Rs 195 crore) aur Sonakhan
//     (Rs 101.44 crore, 119 works) karyakram — Haribhoomi + Patrika. Verma sirf
//     upasthit; lokarpan/bhoomipujan CM ne kiya = dusre neta ke karyakram me
//     maujoodgi = REJECT. Suhela event me unka dawa ("Rs 100 crore+ sadak
//     swikriti") bhi sirf CM-karyakram ka hissa, itemized nahi.
// L4. Suhela me Rs 63 lakh tehsil karyalaya bhavan ka bhoomipujan + Bharat
//     Mata/Chhattisgarh Mahtari murtiyon ka anavaran — adani.news (~Jan 2024).
//     REJECT: outlet whitelist me nahi; whitelisted outlet par is khabar ka
//     koi corroboration nahi mila.
// L5. Tilda-Nevara nagar palika me Rs 44.25 lakh ke karyon ka bhoomipujan —
//     mavericknews30.com. REJECT: (a) Tilda-Nevara seat ke bahar hai
//     (mantri-niyam); (b) outlet whitelist me nahi.
// L6. Haribhoomi: Nari Shakti Vandan Sammelan (16 Apr 2026), Baloda Bazar —
//     Verma mukhya atithi. Sirf samaroh/mukhya-atithi bhoomika = REJECT.
// L7. Patrika (revenue grant Rs 4808 crore, FY 2026-27) aur Patrika CG
//     Assembly land-allotment prashn — rajya-stariya vibhaagiya faisle/prashn,
//     seat-kaam nahi = REJECT.
// L8. "Rs 700 crore se adhik ke vikas karyon ki swikriti" dawa (Oct 2026,
//     Tandwa karyakram) — ghamasan.com, apnachhattisgarh.com,
//     pratidinrajdhani.in, delhiuptodate.com. REJECT: sabhi outlet whitelist
//     me nahi; keval mantri ka dawa, itemized/dastaveji sanction nahi.
// L9. Baloda Bazar me Seva Setu Camp (3,888 labharthi, cheques/pramanpatra) —
//     cleanarticle.com. REJECT: outlet whitelist me nahi; camp/abhiyan
//     vitaran, bhautik sanrachna nahi.
// L10. Par sabhader (Baloda Bazar) me District Transport Office bhavan ka
//      udghatan 5 Oct 2026 — Transport Minister Kedar Kashyap ne kiya, Verma
//      sirf upasthit (primelookindia.com, non-whitelist). Dusre mantri ka
//      lokarpan = REJECT.
// L11. Baloda Bazar nagar palika me Rs 2.21 crore ke 34 karyon ki swikriti
//      (ward-wise itemized) — lokmanjari.com TNINS feed. REJECT: outlet
//      whitelist me nahi; sarkari dastavej se confirm nahi.

// ===== NEGATIVES =====
// None. 2023 halafnama me zero criminal cases; established media me MLA ke
// khilaf koi FIR, naam-daar jaanch ya vartaman-term nyayik vikas report nahi
// mila. Family matters excluded.

// ============================================================
// AapkaNeta.org — works-mining worker fragment
// MLA: indra-kumar-sao — Indra Kumar Sao, INC, Bhatapara,
// Baloda Bazar-Bhatapara district, Chhattisgarh
// Karyakaal: Dec 2023+ (2023-2028). Pehchan pakki foundation record
// se (INDRA KUMAR SAO, INC, Bhatapara; Wikipedia unhe "Inder Kumar
// Sao" likhta hai — seat se pehchan pakki). Vidhayak Nidhi CG:
// Rs 4 crore/seat/saal.
// Halafnama note: 2023 me 1 pending criminal case (IPC 147, 341) —
// affidavit-disclosed pending case akele negative NAHI (standing rule).
// Worker: MLA works-mining (subagent), report date 2026-10-17
// ============================================================


chhattisgarhWorks['indra-kumar-sao'] = [];

// ============================================================
// NEGATIVES: 0 (criteria me koi negative nahi banti)
// — Unka halafnama-pending case (IPC 147, 341) akele negative NAHI:
//   standing rule; janch/nyayik-vikas ke bina sirf pending case.
// — Haribhoomi (whitelisted, 20 Apr 2025, kholi/padhi) 'PSO suicide'
//   khabar: PSO Digendra/Digeshwar Gagda ne Bhatapara me MLA-nivas
//   ke quarter me self-gunshot se aatmahatya ki. MLA khud kisi FIR
//   me aaropi nahi; PTI/mathrubhumi (established outlet, PTI-fed,
//   https://english.mathrubhumi.com/amp/news/india/congress-mla-indra-sao-personal-security-officer-suicide-2c1a889d)
//   ke anusar police-probe me prima facie family issues. Koi naam-daar
//   janch MLA ke khilaf nahi. Negative nahi.
//   URL: https://www1.haribhoomi.com/state-local/chhattishgarh/news/mla-indra-sao-pso-commit-suicide-shot-himself-lmg-gun-jashpur-80346/amp
// — Navbharat (whitelisted, 9 Oct 2026, kholi/padhi) 'Bhatapara MLA
//   vehicle attack': gram Kadar me agyaat logon ne chalte vehicle par
//   pathrav kiya; MLA pidit hain, aaropi nahi. Complaint darj, giraftari
//   baki. Negative nahi; kaam bhi nahi.
//   URL: https://navbharatlive.com/chhattisgarh/baloda-bazar/bhatapara-mla-vehicle-attack-aid23
// — Jan 2025 car accident (news24online, ibc24, jantaserishta — sab
//   non-whitelist): Mahakumbh jate hue Sonbhadra (UP) me truck se
//   takkar; parivar sahit surakshit. Niji hadsa; negative nahi.
// ============================================================

// ============================================================
// REJECT-LOG (shanka ho to reject; galat entry se khali profile behtar)
// ============================================================
// R1. Vidhayak Nidhi bhoomipujan series (Feb 2024) — dailychhattisgarh.com
//     (non-whitelist; pages browser me 403 par khul nahi sake, sirf
//     search snippet se facts; isliye lead hai, entry nahi):
//     - 18 Feb 2024: gram panchayat Devarani, Tonatar, Machabhat,
//       Datrengi me Vidhayak Nidhi se CC road bhoomipujan.
//       URL: https://www.dailychhattisgarh.com/chhattisgarh/2/baloda-bazar/168
//     - 29 Feb 2024: gram Khapri (S) me CC road (Rs 5 lakh) + shasakiya
//       high school me atirikt kaksh (Rs 6 lakh) ka bhoomipujan, Vidhayak
//       Nidhi se.
//       URL: https://www.dailychhattisgarh.com/cg-article/36/news/3330
//     - 23 Feb 2024 (report 28 Feb): Simga block ke gram Dhobni me
//       gramvasi-maang par Vidhayak Nidhi se swikrit CC road ka bhoomipujan;
//       gram Nawagaon me Janpad-sadasya nidhi se rangmanch ka bhoomipujan
//       (Janpad nidhi — iska credit MLA ka nahi).
//       URL: https://www.dailychhattisgarh.com/chhattisgarh/2/baloda-bazar/165
//     Ye itemized, MLA-nidhi-disclosed bhoomipujan hote to VALID bante,
//     LEKIN source whitelist me nahi hai. Lead: inhi ghatnaon ko
//     whitelisted outlet (Bhaskar/Haribhoomi/Patrika/Navbharat) par
//     corroborate karke hi entry banayein; dailychhattisgarh link se
//     seedha entry NAHI. Kisi whitelisted source par is coverage ka trace
//     nahi mila (8+ searches).
// R2. 6 Sep 2024, dailychhattisgarh.com (non-whitelist): MLA ne Dilli me
//     kendriya mantri Nitin Gadkari ko gyapan dekar Balodabazar-Bhatapara-
//     Limtra 45km marg ko NH se jodne ki maang rakhi; mantri ne
//     'sambandhit adhikariyon ko preshit kar karwai ke nirdesh' diye.
//     Dastaveji mantri-nirdesh (ashwasan) hota to credit-capped entry
//     banti, LEKIN (a) source whitelist me nahi, (b) vishay NH/NH-linked
//     road hai jispar keval maang bina swikriti ke reject-category hai.
//     Lead: whitelisted source par Gadkari-nirdesh ke follow-up ya swikriti
//     mile tohi entry.
//     URL: https://www.dailychhattisgarh.com/baloda-bazar/232724/rss-feeds.php
// R3. 30 Jun 2024 (jantaserishta, non-whitelist): CM Sai ne Bhatapara me
//     Rani Durgavati karyakram me 3 ghoshnaen ki (Rs 22 lakh samajik
//     bhawan ahata, Rs 25 lakh CC road, Rs 1.30 crore Gurra-Jogidweep
//     sadak). Ghoshna CM ki hai; MLA karyakram me bas maujood. REJECT
//     (keval ghoshna; dusre neta ke karyakram me maujoodgi).
//     URL: https://www.jantaserishta.com/local/chhattisgarh/cm-sai-made-3-big-announcements-in-bhatapara-3360008
// R4. May 2023 (udaibharat/news36/thegazette — pre-term, non-whitelist):
//     CM Bhupesh Baghel ki Bhatapara ke liye ghoshnaen (school, mandi,
//     thana, stadium). Chunav-purva, CM ki ghoshnaen. REJECT.
// R5. Bhaskar 'Gauthans are closed...' (Simga, ~Jan 2026, whitelisted,
//     snippet se): Bhupesh Baghel ke karyakram me MLA Indra Sao ne bhi
//     sambodhit kiya; sarpanch ne manch se dhamakheda-chaurenga sadak ki
//     maang rakhi, samaj-bhawan prastav rakha. Sirf maang/prastav;
//     MLA ki koi svikriti nahi. REJECT (sirf maang).
//     URL: https://www.bhaskar.com/local/chhattisgarh/raipur/simga/news/gauthans-are-closed-to-prevent-manure-from-reaching-the-fields-destroying-5-lakh-hectares-of-farmland-bhupesh-baghel-136753453.html
// R6. Bhaskar 'Congress collected 15,000 signatures in Bhatapara' (~Jan
//     2026, whitelisted, kholi snippet se): 'vote chor gaddi chhod'
//     hastakshar-abhiyan — raajnaitik abhiyan; koi jan-hit sanrachna
//     nahi. REJECT.
//     URL: https://www.bhaskar.com/amp/local/chhattisgarh/raipur/bhatapara/news/congress-collected-15000-signatures-in-bhatapara-136327895.html
// R7. Bhaskar 'BJP government steeped in corruption' (May 2026,
//     whitelisted, snippet se): MLA ka bhrashtachar par bayan +
//     Nipania dhan-sangrahan kendra ki uchch-stariya janch ki maang.
//     Sirf bayan/maang; koi dastaveji nateeja nahi. REJECT.
//     URL: https://www.bhaskar.com/amp/local/chhattisgarh/raipur/bhatapara/news/the-bjp-government-in-the-state-is-steeped-in-corruption-indra-saw-dbp-137412156.html
// R8. public.app video (karan52inhnews, 30 Nov 2025): Nipania-Dhaneli-
//     Mopka dhan-kharidi kendron ka nirikshan — sirf nirikshan.
//     Source bhi non-whitelist. REJECT.
//     URL: https://public.app/amp_video/sp_hzx5dovd46uo8
// R9. agkhabar.com (non-whitelist, ~Sep 2026): Surajpura gothan me mrit
//     gauvansh par MLA ne sawal uthaye, chara-paani ki maang. Sirf maang;
//     non-whitelist. REJECT.
//     URL: https://agkhabar.com/%E0%A4%B8%E0%A5%82%E0%A4%B0%E0%A4%9C%E0%A4%AA%E0%A5%81%E0%A4%B0%E0%A4%BE-%E0%A4%97%E0%A5%8B%E0%A4%A0%E0%A4%A8-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AE%E0%A5%83%E0%A4%A4-%E0%A4%97%E0%A5%8C/
// R10. Haribhoomi 'Balodabazar-Bhatapara: Rs 195 crore works lokarpan-
//     bhoomipujan' (Dec 2025): CM Sai ka karyakram; up-CM Arun Sao,
//     mantri shamil; MLA ki vyaktigat bhoomika koi nahi. REJECT (dusre
//     neta ke karyakram).
// R11. dailychhattisgarh 'Sushasan Tihar sirf paperbaji' (7 Jun 2026,
//     non-whitelist): MLA ka sarkar par bayan — raajnaitik bayan, kaam
//     nahi. REJECT.
// ============================================================

// ---- Baloda Bazar district batch END (0 works, 0 negatives) ----

// ---- Raipur district batch (researched 2026-10-17) ----

chhattisgarhWorks['anuj-sharma'] = [
  {
    title: 'MLA Anuj Sharma ki lagataar maang par Chhattisgarh shasan ne Dharsiwa block mukhyalaya me naye up-panjiyak karyalaya ki adhisoochana jari kar di, jisse 60 gaon ke logon ko registry ke liye Raipur jaane ki zarurat nahi rahegi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Haribhoomi',
    sourceUrl: 'https://www.haribhoomi.com/state-local/chhattishgarh/news/dharsiwa-big-gift-mla-anuj-sharma-sub-registrar-office-60-village-direct-benefit-98522',
    date: '2026-06-05',
    note: 'Haribhoomi ne MLA ki lagataar pahal aur prayason ko shrey diya; CG shasan ki adhisoochana jari ho chuki thi. 60 gaon cover honge; logon ke anusar ye lambe samay se ki ja rahi maang thi aur graminon ne MLA ka aabhar vyakt kiya; MLA ne swikriti ke liye Mukhyamantri aur Rajaswa Mantri ka aabhar vyakt kiya. Credit capped to MLA demand/effort — office ke nirman ka shrey uske paas nahi.',
    period: '2023-2028',
    stage: 'swikriti',
  },
];

// REJECT-LOG (anuj-sharma):
// REJECT-LOG (anuj-sharma):
// 1. 11 Oct 2026: gram Khapri me Shri Maa Banjari Shakti Peeth trust parisar me Rs 20 lakh ke rangmanch shed
//    ka bhoomi poojan/shilanyas unhone kiya (pradeshvad.com, khabarchalisa.com — dono khule aur padhe gaye).
//    Dono outlets whitelist me NAHI = REJECT. Fund source unspecified (sirf "rashi swikrit" — Vidhayak Nidhi
//    ya koi aur fund disclosed nahi). RETRY-LEAD: agar Haribhoomi/Bhaskar/Patrika/Navbharat par isi event ki
//    coverage mile aur fund disclosed ho, to vyaktigat shilanyas entry ban sakti hai (badge news, stage shilanyas).
// 2. Dharsiwa up-panjiyak karyalaya ka aupcharik udghatan unke kar-kamalon se — samdarshinews.com archive
//    ("pahle hi din 12 dastavejon ki registry"). Outlet whitelist me NAHI = REJECT (entry #1 ko stage
//    lokarpan tak badhane ke liye whitelist uddhatan-coverage chahiye). RETRY-LEAD.
// 3. 17 Dec 2024 (winter session, day 2): Dharsiwa me avaidh plotting ka mudda unhone dhyanakarshan prastav se
//    uthaya; Rajaswa Mantri Tankram Verma ne samiti gathan + naye niyamon ka aashwasan diya; Speaker Dr. Raman
//    Singh ne Vidhan Sabha ke aas-paas ke mamle me 1 mahine me karvayi ke nirdesh diye
//    (dailychhattisgarh.com, npg.news, cgnn.in, obnews.co — sab khule/padhe gaye). Koi bhi outlet whitelist
//    me NAHI = REJECT. RETRY-LEAD: PTI ya established outlet (TH/IE/HT/TOI/PTI) ki isi session ki coverage mile
//    to valid ho sakta hai (badge news, stage mantri-ashwasan, credit capped).
// 4. Budget session: avaidh plotting par prashn — mantri ka jawab (232 conversion prakaran niptaye, 19
//    shikayaton par karvayi prakriyadhin) (npg.news). Outlet whitelist me NAHI = REJECT. RETRY-LEAD (upar #3 jaisa).
// 5. 26 Sep 2025 (event): Siltara sthit Godavari plant hadse (6 mazduron ki mrityu) me 2 sthaniya mazduron ke
//    parivaron ko company (Rs 46 lakh) + Vidhayak Nidhi (pratyek parivar ko Rs 50-50 hazar) se aarthik sahayata
//    unhone saunpi (lokshakti.in). Outlet whitelist me NAHI + raahat/daan kaam = REJECT (niyam: raahat kaam REJECT).
// 6. CM Vishnu Deo Sai ne Dharsiwa CHC ke liye DMF (lagbhag Rs 19.65 lakh) se khareedi ambulance ko hari jhandi
//    dikhai; MLA ne kaha ki kshetra ko aadhunik ambulance ki zarurat lambe samay se thi
//    (indianmasterminds.com). Outlet whitelist me NAHI + CM ke karyakram me maujoodgi/shirkat matra, unki
//    vyaktigat bhoomika (fund/procurement me) unclear = REJECT. RETRY-LEAD: whitelist coverage jisme unki
//    maang/bhoomika spasht ho.
// 7. Bhaskar (Aug 2025 est.): Delhi me Union Road Transport Minister Nitin Gadkari se mulakat — NH-30 par gram
//    Sankra me underpass (VUP) ki swikriti ke liye aabhar vyakt (bhaskar.com). Kendriya pariyojna (NH) par
//    bina bhoomika ke shrey; sirf mulakat/aabhar, vyaktigat lokarpan nahi = REJECT.
// 8. Bhaskar (Aug 2025 est.): Delhi me Union Labour Minister Mansukh Mandaviya se mulakat — Dharsiwa audyogik
//    kshetra ke shramikon ki samasyaon par charcha, mantri ka sakaratmak rukh/aashwasan (bhaskar.com).
//    Sirf baithak + aashwasan, koi dastaveji nateeja nahi = REJECT (maang/bhaent matra).
// 9. Haribhoomi (Dec 2024): Atal Bihari Vajpayee jayanti par CM Vishnu Deo Sai ne 115 Atal parisaron ka virtual
//    lokarpan kiya; Dharsiwa seat ke nagar panchayat Kura aur Kharora bhi shamil; ve maujood the. CM ke
//    karyakram me maujoodgi matra = REJECT (unke karyakram ka kaam nahi).
// 10. Haribhoomi: Dharsiwa me Jeevanddeep samiti ki baithak me ve shamil hue; April se sonography suvidha aur
//    doctoron ki kami door karne ki baat kahi. Meeting/aashwasan matra, koi poorn bhautik kaam nahi = REJECT.
// 11. awamdoot.com: shala praveshotsav me mukhya atithi ke roop me shamil hue (Kharora Bharat Lal school, Tor,
//    Barabanda), bachchon ko kitabein/cycle vitarit. Sarkari abhiyan ke shubharambh me mukhya-atithi shirkat
//    + outlet whitelist me nahi = REJECT.
// 12. jantakiaawaz.in leads (chhota portal, whitelist me NAHI): (a) 06 Oct: Amasivni/Kachna me Rs 39.77 lakh
//    ke vikas karyon (2 anganwadi bhavan Rs 23.18 lakh, Yadav samaj samudayik bhavan Rs 5 lakh) ka bhoomi
//    poojan; (b) 05 Jul: gram Raikheda me vikas karyon ka bhoomi poojan/lokarpan; (c) Nalwa Steel par dhyanakarshan.
//    Sab REJECT (whitelist nahi). RETRY-LEADS: inhi events ki whitelist coverage mile to entry ban sakti hai.
// 13. cg24news.in: monsoon session 2025 me unke prashn (police aarakshak bharti, PMAY — 1212 avedanon me 349
//    aavason ki swikriti, CM Gram Sadak Yojana sadak-mararmmat). Outlet whitelist me NAHI + prashnon ka koi
//    dastaveji nateeja nahi = REJECT.
// 14. pradeshvad.com: Paras-trai school me danveer Dau Poshan Lal Chandravanshi smriti smarak ka lokarpan
//    unke kar-kamalon se. Outlet whitelist me NAHI + smarak-unveiling (samaroh/shirkat prakar) = REJECT.
// 15. Election coverage (Business Standard/ABP/Oneindia 2023 jeet): kaam nahi, sirf parichay = REJECT.
// 16. NEGATIVE CHECK: established media me unhe aaropi banane wali koi FIR, naam-daar adhikari-pusht janch, ya
//    in-term nyayik vikas ki report 2023+ me nahi mili. Patrika (07 Oct 2026): unka mobile number hack hua aur
//    us number se paisa manga ja raha hai — isme ve PEEDIT hain, aaropi nahi; negative nahi banta. Affidavit me
//    0 criminal cases. Koi qualifying negative nahi — profile me koi negative entry nahi.
// 17. Vidhayak Nidhi itemized sanction lists: unke naam ki koi public itemized Vidhayak Nidhi swikriti-soochi web
//    par indexed nahi mili; isliye sarkari-badge (sarkari) entry possible nahi hui.
// 18. Film/sangeet puraskar/samaroh coverage (Kairav/stardom coverage): film-abhineta background hai, lekin
//    niyam ke mutabik sirf sarkari MLA-kaam gina — samaroh coverage REJECT.
// QA: ~10 web searches (Hindi + English) + 1 page-open (Haribhoomi). Whitelist outlets par unke Dec 2023+
// Dharsiwa seat-vishesh karyon ki keval 1 qualifying coverage mili (sub-registrar office). Baaki leads
// non-whitelist outlets par the ya quality-niyam (sirf maang/mulakat/maujoodgi/raahat) me reject hue.

chhattisgarhWorks['motilal-sahu'] = [];

// REJECT-LOG (motilal-sahu):
// REJECT-LOG:
// --- Non-whitelisted leads (source whitelist me nahi; coordinator retry kar sakta hai) ---
// 1. [cleanarticle.com — AGGREGATOR, whitelist me NAHI, page KHOLA, published 2026-08-25]
//    Daldalsivni area (Kushabhau Thakre Ward 7, RMC Zone 9) me Gram Panchayat bhavan ke
//    paas naye open-air manch ke nirman ka bhoomi pujan — MLA ne narial fodkar/phalda se
//    karyakram kiya; MIC sadasya Khem Kumar Sen, parshad Mohan Sahu/Devdutt Dwivedi,
//    karyapal abhiyanta Sharad Dhruv upasthit. Rs 9.98 lakh MLA kshetr-nidhi se swikrit.
//    MLA ne karyapal abhiyanta ko turant kaam shuru karne + samay-seema/gunvatta ka nirdesh
//    diya. Bhautik sanrachna ka vyaktigat bhoomi pujan + fund disclosed — VALID ho sakta
//    tha, lekin source aggregator hai (whitelisted nahi) aur kisi whitelisted outlet
//    (Bhaskar/Haribhoomi/Patrika/Navbharat/TOI) par isi khabar ka version nahi mila →
//    REJECT. Coordinator whitelisted coverage mile to entry bana sakta hai. URL:
//    https://cleanarticle.com/raipur-rural-mla-motilal-sahu-gifted-a-wonderful-facility-to-the-citizens-by-performing-the-bhoomi-pujan-ground-breaking-ceremony-for-the-construction-of-a-new-open-air-stage-near-the-gram-panchayat/
// 2. [reportwire.in — whitelist me NAHI, Nov 2025] CM Vishnu Deo Sai ne Chhattisgarh Housing
//    Board ki Rs 2060 crore ki 55 awasiya pariyojnaon ka udghatan (Shankar Nagar BTI Ground).
//    MLA Motilal Sahu upasthiton ki lambi soochi me ek naam. CM ka karyakram, MLA ki
//    vyaktigat bhoomika disclosed nahi; dusre neta ke karyakram me maujoodgi → REJECT. URL:
//    https://reportwire.in/india/chhattisgarh/chief-minister-shri-vishnu-deo-sai-inaugurates-housing-boards-residential-projects-worth-rs-2060-crore
// 3. [the-journalist.com — whitelist me NAHI, ~Jul 2025] 'Integrated development of rural and
//    urban areas' par CM ka karyakram; MLA Sahu upasthiton ki soochi me. Koi kaam,
//    koi bhoomika → REJECT. URL:
//    https://www.the-journalist.com/raipur-integrated-development-of-rural-and-urban-areas-is-necessary-for-the-all-round-development-of-chhattisgarh-chief-minister-shri-sai/
// 4. [Deccan Herald — whitelist me NAHI, 2026-10-12] Prathamesh Hospital (private) ka udghatan;
//    MLA Sahu upasthit. Private aspataal ka udghatan + sirf maujoodgi → REJECT. URL:
//    https://www.deccanherald.com/dhbrandpr/building-a-healthy-and-developed-chhattisgarh-is-our-governments-commitment-chief-minister-shri-vishnu-deo-sai-4179393
// 5. [english.dainikjagranmpcg.com — whitelist me NAHI, ~Sep 2026] PM Modi ke 'Mann Ki Baat'
//    ke 138ve episode ka saarvajanik shravan (Raipur, ~40,000 log; Tarun Chugh ka world-record
//    dawa). MLA Motilal Sahu upasthit netaon me se ek. Rajnaitik karyakram, koi kaam nahi →
//    REJECT. URL:
//    https://english.dainikjagranmpcg.com/states/chhattisgarh/raipur-40000-hear-modis-mann-ki-baat/article-34470
// 6. [indianmasterminds.com — whitelist me NAHI, 2026-10-08] CM ki statewide 'Seva Jyoti'
//    campaign; MLA Sahu upasthiton me. Koi kaam nahi → REJECT. URL:
//    https://indianmasterminds.com/news/chhattisgarh-seva-jyoti-sankalp-chowks-modi-25-years-240440/
// 7. [lokmanjari.com — whitelist me NAHI] Union Budget 2025-26 me rail infrastructure ke liye
//    historic allocation; MoS Tokhan Sahu ki bhoomika. Kendriya vishay, MLA ki koi bhoomika
//    nahi → REJECT. URL: https://www.lokmanjari.com/chhattisgarh.php?articleid=1785
// 8. [etvbharat.com — whitelist EXPLICITLY excludes ETV Bharat, Nov 2025] PM Modi ne Nava
//    Raipur me naye Chhattisgarh Vidhan Sabha bhavan ka udghatan + Rs 14,260 crore pariyojnaon
//    ka shilanyas. PM-star ka karyakram, MLA ki vyaktigat bhoomika nahi + source excluded →
//    REJECT. URL:
//    https://www.etvbharat.com/en/videos/watch-live-pm-modi-inaugurates-new-building-of-chhattisgarh-vidhansabha-enn25110101780
// --- Whitelist me na mili khabren (search-level, khola nahi ja saka) ---
// 9. Bhaskar/Haribhoomi/Patrika/Navbharat par 'Motilal Sahu' + 'bhoomi pujan/lokarpan/shilanyas'
//    se koi Raipur Gramin-kshetra vikas-khabar search me nahi aayi. Dainik Jagran ke epaper
//    PDF (epaperapi.jagran.com, 15 Dec 2025 Raipur edition) search result me aaya lekin
//    Jagran whitelist me nahi aur PDF-scrape me Sahu-sambandhi entry verify nahi ho saki.
// --- Vidhayak Nidhi ---
// 10. Collector Raipur / raipur.nic.in par Raipur City Gramin seat ki itemized Vidhayak Nidhi
//     sanction lists online nahi mili (foundation note bhi kehta hai neta-war kharch ka record
//     online uplabdh nahi hai). Khoj jaari rakhe — coordinator DPR/collector soochna se
//     retry kare.
// --- Negatives (sakht threshold) ---
// 11. Koi negative nahi mila: MLA khud kisi FIR ya naam-daar adhikari-pusht janch me aaropi
//     nahi. Affidavit (myneta.info, 2023) me criminal cases = 0. Vivad/aarop/FIR/girftari par
//     alag search me koi established-media report nahi.
// --- Naam-jaal check ---
// 12. [casemine.com — CHHATTISGARH High Court order, 2024] 'MOTILAL SAHU v. STATE OF
//     CHHATTISGARH' — Crime No. 98/2024, Excise Circle Dharsiwa, CG Excise Act 34(2); Motilal
//     Sahu + Yuvraj Sahu ko zamaanat. Ye ALAG vyakti lagta hai (Dharsiwa excise mamla;
//     MLA ke affidavit me 0 cases; karyakshetr Raipur Gramin). MLA se jodne ka koi aadhaar
//     nahi → negative NAHI, sirf naam-jaal ke liye darj. URL:
//     https://www.casemine.com/judgement/in/6740db64fb5e170c8f499f43?locale=en_US

chhattisgarhWorks['rajesh-munat'] = [
  {
    title: 'Tatibandh ke Shaheed Bhagat Singh ward me pradesh ke pehle hi-tech Mahatari Sadan sah Anganwadi Kendra ka lokarpan — MLA Rajesh Munat ki pehal par lagbhag Rs 86 lakh ki lagat se 4500 sqft me nirman',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/chhattisgarh/raipur/news/raipur-smart-mahatari-sadan-inauguration-mla-munat-137154435.html',
    date: '2026-02-11',
    note: 'Dainik Bhaskar ke anusar kendra MLA Rajesh Munat ki pehal par lagbhag Rs 86 lakh ki lagat se banaya gaya; unhone lokarpan kiya. Fund ka srot report me Vidhayak Nidhi ke roop me nahi bataya gaya (Mahatari Sadan rajya sarkar ki yojana hai) — fund disclosure: nirman lagat ~Rs 86 lakh; bhoomika: MLA ki pehal + vyaktigat lokarpan. Kendra me smart classroom, indoor/outdoor play area, hygienic kitchen, dining hall, divyangjan sahit alag washroom hain; sanchalan samajik sanstha (Maharashtra Mandal) ko saunpa gaya. Date inferred: Bhaskar snippet me "6 mahine pehle" (search index ~251 din pehle); lalluram pre-event me "kal lokarpan" (~249 din pehle); lokarpan Feb 2026 ke dusre saptah me — exact date pending. DISCLOSURE: Bhaskar page ka direct fetch 403 par block hua (bot-block); upar ke tathya usi page ke search-index snippet se hain — parent live browser se page kholkar date/lagat verify kare.',
    period: '2023-2028',
    stage: 'lokarpan'
  }
];

// REJECT-LOG (rajesh-munat):
// REJECT-LOG (rajesh-munat, Raipur City West)
// Shanka ho to reject — galat entry se khali profile behtar.
// ============================================================
// R1. Pratidin Rajdhani 'Vikas ka Paschim model' bundle (~Jan 2026):
// Prerana Blind School (Hirapur) me Rs 25 lakh ke kakshon ka bhoomi-pujan
// (Vidhayak Nidhi); PWD se Rs 2.17 crore sadak karya (Amapara, Tatyapara,
// Agrasen Chowk, Telghani Naka, Ramsagarpura) ka shubharambh; Karbala
// Talab me Rs 25 lakh kids-zone ka bhoomi-pujan; gram Atari me Rs 20 lakh
// samudaayik bhavan ka lokarpan. VALID-type events, LEKIN sirf
// pratidinrajdhani.in par — whitelist me NAHI. REJECT. Lead: whitelisted
// (Bhaskar/Haribhoomi/Navbharat/Patrika) version dhoondho (RL-A).
// R2. Usi bundle ke GHOSHNA items: Hirapur Housing Board Colony jeernoddhar
// ke liye Rs 25 lakh 'tatkal svikriti'; Jarway me Rs 9 crore park ki ghoshna;
// boundary wall ke liye Rs 10 lakh ki ghoshna — sirf ghoshna (Vidhayak Nidhi
// grant-ghoshna bhi reject niyam me hai). HARD REJECT.
// R3. Nalanda Parisar Phase-2 bhoomi-pujan, Rs 21.07 crore, NIT GE Road
// (23 Jan 2026): shilanyas Deputy CM Arun Sao ne kiya; Munat keval upasthit
// the — unka vyaktigat lokarpan/shilanyas NAHI; fund state ka (Urban
// Administration dept). Coverage: khabarshatak.in, chhattisgarhaajtak.com,
// pratidinrajdhani.in — sab NON-WHITELIST. REJECT (dusre neta ke karyakram
// me maujoodgi).
// R4. Rs 65.45 crore package ki MANJURI (Jul 2025): 22.84 cr Central Library,
// 19.99 cr Mahadevghat Phase-1, 19.61 cr Thakkar Bapa ward water tank +
// pipeline, 3 cr Chhuiha talab — sirf manjuri/ghoshna (lalluram.com,
// dailychhattisgarh.com — NON-WHITELIST). HARD REJECT (sirf ghoshna).
// Actual shilanyas/lokarpan ka whitelist version mile to retry (RL-D).
// R5. Kota me shaskiya naveen mahavidyalaya ka shilanyas (4 May 2025;
// 2024 me Munat ne budget pravdhan karaya, zameen uchch shiksha vibhag ko
// dilayi): cg24news.in / sarvochyachhattisgarhnews.in — NON-WHITELIST.
// REJECT. Lead: whitelisted version (RL-C).
// R6. Central Chronicle e-paper (12 May 2025): Sardar Vallabhbhai Patel +
// Sant Ramdas wards (Zone 7) me 6 vikas karyon ka udghatan, svikrit lagat
// Rs 1.18 cr — Munat ne udghatan kiya. Central Chronicle whitelist me NAHI.
// REJECT. Lead: whitelisted version (RL-C).
// R7. Ward 19, Zone 8: ~Rs 48 lakh drainage/gande-paani nikasi karyon ka
// bhoomi-pujan (cg24news.in) — NON-WHITELIST. REJECT. Lead (RL-C).
// R8. Danveer Bhamashah ward 26, Zone 2: CC sadaken + samudaayik bhavan
// (itemized list, bhoomi-pujan) — chhattisgarhaaj.com, NON-WHITELIST.
// REJECT. Lead (RL-C).
// R9. Mahadevghat (Ward 69, Zone 8) navnirmit samudaayik bhavan ka lokarpan —
// jantaserishta.com, NON-WHITELIST. REJECT. Lead (RL-C).
// R10. School unnayan list (26 Aug 2024, dailychhattisgarh.com): Mayaram Surjan
// school synthetic tennis court Rs 16.34L (khel vibhag), Daganiya cycle stand
// Rs 5L (DMF), RD Tiwari prayer shed Rs 10L (DMF) aadi — MLA ka bayan/dawa,
// outlet NON-WHITELIST. REJECT. Lead (RL-C).
// R11. Vipr Nagar Mahatari Sadan + Mahila Yoga/Zumba center (~Rs 80L),
// lokarpan '14 June' (sachaaptak.co.in, inhnews.in): PRE-EVENT ('hoga') +
// lokarpan MP Brijmohan Agrawal karne wale the, Munat keval adhyakshata +
// NON-WHITELIST. REJECT.
// R12. Mega Health Camp Dec 2025 (bhaskar.com + patrika.com — WHITELISTED):
// muft 5-divsiya swasthya shivir — niyam me explicit REJECT
// ('daan/rahat kaam/muft shivir'). HARD REJECT (pre-2023 legacy camp bhi).
// R13. Skywalk press conference (TOI, ~May 2025): Munat ne 2017-era skywalk
// pariyojna ka bachav kiya — political bayan, koi karya nahi; pariyojna
// pre-2018. REJECT.
// R14. Kanwar Yatra (bhaskar.com, whitelist, ~Jul 2024): dharmik yatra,
// Munat ayojak — karya nahi. REJECT.
// R15. Haribhoomi: Congress par tanj (nikay chunav), PM Modi airport mulakat —
// bayan, karya nahi. REJECT.
// R16. Railway projects (PM Modi, 12 Mar 2024 — pre-term; Munat keval upasthit);
// Atal Complex udghatan (channel24india; Munat upasthit) — kendriya/state
// pariyojna par bina vyaktigat bhoomika ke shrey nahi. REJECT.
// R17. Patrika: Bharat Mata ki Aarti (Aug 2025); Republic Day 2026 flag-duty
// (Khairagarh) — samaroh/duty, karya nahi. REJECT.
// R18. Yadav Thethwar sammelan me samaj ko Rs 15 lakh dene ki ghoshna
// (adani.news) — ghoshna + samudaayik samaroh. REJECT.
// R19. jantaserishta.com (5 Dec 2024): Munat ke tweets — Sant Ramdas ward me
// Rs 35L+ bhoomi-pujan (Karma Chowk saundaryikaran Rs 20L), Tatyapara
// damrikaran Rs 1 cr shubharambh — Twitter/X-sourced, NON-WHITELIST. REJECT.
// Lead (RL-C).
// R20. Election/candidate-profile pages (wikipedia, prsindia, business-standard,
// oneindia, republicworld) — chunavi/affidavit jaankari, koi karya nahi.
// REJECT.
// ============================================================

// ============================================================
// FINAL
// ============================================================

chhattisgarhWorks['purandar-mishra'] = [];

// REJECT-LOG (purandar-mishra):
// REJECT-LOG (purandar-mishra):
// 1. BTI Ground Shankar Nagar me 8 high-mast lights (Rs 80 lakh) ka shubharambh — MLA + Mayor Meenal Choubey, RMC, state grant (Oct 2026): dainikvishwapariwar.com, post-event reporting hai, par whitelist me nahi = REJECT. LEAD: Dainik Bhaskar/Haribhoomi/Patrika me coverage dhundho (16-16 light wale 8 poles, RMC Vidyut Vibhag).
// 2. Havaldar Abdul Hamid Ward 35 me Rs 75 lakh nali-nirman yojna ka bhoomi-pujan (30 May 2025, Ahilyabai Holkar 300vi jayanti event): khabarchalisa.com, cg24news.in — whitelist me nahi = REJECT. LEAD.
// 3. Shahid Veernarayan Singh Ward 33 (Dheebar Para, Satnami Para, Anand Vihar, Aavanti Vihar, Kavita Nagar, Geetanjali Nagar) me Rs 1 crore se upar ke darjan-bhar vikas karyon (CC road, nali, puliya, garden, shauchalaya) ka bhoomi-pujan — Adhosanrachna mad + Vidhayak Nidhi (Dec 2024): hn24.in — whitelist me nahi = REJECT. LEAD.
// 4. Shankar Nagar Ward 30 me 5 sthanon par Rs 25 lakh (shed, CC road, nali, puliya) ka bhoomi-pujan — Mayor Ejaz Dhebar ke saath (3 Mar 2024): dailychhattisgarh.com — whitelist me nahi = REJECT. LEAD.
// 5. Civil Line Ward 46, Utkal Basti Gauri Shankar mandir ke paas navin sarvajanik shauchalaya ka bhoomi-pujan (Oct 2025): kuberbhoomi.com — whitelist me nahi = REJECT. LEAD.
// 6. Panchsheel Nagar Ward 46 me Vidhayak Nidhi se Rs 20 lakh udyaan saundaryikaran ka bhoomi-pujan (Feb 2026): kuberbhoomi.com — whitelist me nahi = REJECT. LEAD.
// 7. Guru Ghasidas Ward 48 (Shatabdi Nagar, Kashiram Nagar, Telibandha) me 4 karyon ka bhoomi-pujan — anganwadi bhavan Rs 11.69 lakh (DMF), samudayik bhavan Rs 5 lakh, shiv mandir atirikt kaksh Rs 3 lakh (Vidhayak Nidhi), shamshan ghat Rs 12.55 lakh: chhattisgarhaaj.com — whitelist me nahi = REJECT. LEAD.
// 8. 1-saal karyakaal report — 22 wards me Rs 22 crore se adhik (Vidhayak Nidhi + CM Adhosanrachna mad + prabhari mantri mad + DMF + dharmasva mad): thenaradnews24.com, nkcnews.com — whitelist me nahi; samagra dawa, itemized list nahi = REJECT. LEAD.
// 9. Dhhai-saal vikas yatra dawa — 438 karya, Rs 1722.40 crore vibhagiya samkit (RMC 401 karya Rs 48.80 crore, PWD 17 karya Rs 1295.71 crore, 700-bed medical college Rs 376 crore, DMF 19 karya Rs 1.89 crore): dainikvishwapariwar.com — whitelist me nahi; bada hissa PWD/state projects (bina vyaktigat bhoomika ke), samagra MLA-dawa = REJECT. LEAD (retries me har component par whitelisted/G.O. coverage dhundho).
// 10. Aane wale samay ke Rs 160.62 crore ke prastav (Khamhardih 25-W jalaagar Rs 23.34 crore, Bhainsthan working women hostel Rs 17 crore, Pandri commercial campus Rs 67 crore, Grass Memorial school khel maidan Rs 15 crore): SIRF prastav/ghoshna, post-event kaam nahi = REJECT (dainikvishwapariwar, whitelist nahi).
// 11. Sindoor Park, Durgapalli (Basna Block, Mahasamund) — CM Vishnu Deo Sai ne lokarpan kiya (15 Aug 2025); Mishra ne jameen khareedkar high school ko daan di thi: seat ke BAHAR (Mahasamund jila, Basna block) + daan-karya = REJECT (orissadiary/facenfacts, whitelist nahi).
// 12. Gayatri Nagar Jagannath mandir (CG ka sabse bada) — inki sthapna, par term se pehle ka = REJECT (odishabytes, wikipedia; pre-Dec-2023).
// 13. PM Modi railway projects Rs 250 crore lokarpan (26 Feb 2024, Raipur station): Mishra sirf maujood the; kendriya pariyojna, vyaktigat bhoomika nahi = REJECT (TOI, whitelist par bhi hai par niyam se reject).
// 14. CG Housing Board Rs 2060 crore avasiya pariyojna shubharambh (Nov 2025): Mishra sirf maujood; CM ka karyakram = REJECT (patrika.com, whitelist par bhi hai par niyam se reject).
// 15. Rojgar mela Budhapara (7-8 Oct 2026): Mishra sirf upasthit; sarkari abhiyan = REJECT (thestatesman/deccanherald, whitelist nahi waise bhi).
// 16. Shramik Mahasammelan Balbir Juneja stadium (Sep 2026, CM ke 3 ghoshnaen + Rs 51.32 crore DBT): Mishra sirf shamil hue; sarkari yojna = REJECT (lokvartanews, whitelist nahi).
// 17. Teachers pension maang (CTET prantiya mahasabha) — CM tak baat pahunchane ka bharosa: SIRF MAANG/ashwasan; dastaveji nateeja nahi = REJECT (cgwall.in, whitelist nahi).
// 18. Club/parties par ankush ki maang (raipur me nude party vivaad): rajneetik bayan, kaam nahi = REJECT (cgdastak.com, whitelist nahi).
// 19. NEGATIVE CHECK: Bhaskar (naxaliyon ko 'bhai' kahne ka vivaad, Diwali 2025) aur Patrika (Rahul Gandhi 'brush' tippani) — rajneetik bayan-vivaad; koi FIR, naam-daar adhikari-pusht janch ya nyayik vikas nahi = negative nahi. Patrika (Deepak Baij dwara Congress karyalay hamele par FIR ki MAANG — 2026): keval FIR-ki-maang, koi darj FIR/janch nahi = negative nahi. Navbharat Times (cyber fraud — Nitin Nabin ke PA banakar Rs 10,000 thagi; aaropi pakda gaya): Mishra victim, aaropi nahi = negative nahi. NITI: halafname me 0 pending cases; negative ka koi aadhaar nahi. Koi negative entry nahi.
//
// QA: ~10 web searches (Hindi + English, 2026-10-17). Whitelisted outlets (Bhaskar, Patrika, Navbharat, Haribhoomi, TOI, PTI) par Mishra ke seat-vishesh bhautik karyon ki koi post-event reporting nahi mili — unki saari karya-coverage chhote portals (dainikvishwapariwar, khabarchalisa, hn24, kuberbhoomi, thenaradnews24, nkcnews, dailychhattisgarh, chhattisgarhaaj, divyamaharashtramandal, haritanjaliexpress) par hai, jo whitelist me nahi. Isliye array khaali; profile khaali rehna niyam-anusaar theek hai. RETRY-LEADS: reject #1 (high-mast lights Rs 80 lakh, Oct 2026), #2 (Ward 35 nali Rs 75 lakh, May 2025) aur #3 (Ward 33 Rs 1 crore+, Dec 2024) par whitelisted coverage ya CG Jansampark (dprcg.nic.in / jansampark.cg.nic.in) press release mile to entries banao. Vidhayak Nidhi ki koi itemized sanction list public/whitelisted roop me nahi mili.

chhattisgarhWorks['sunil-kumar-soni'] = [];

// REJECT-LOG (sunil-kumar-soni):
// REJECT-LOG (sunil-kumar-soni):
// 1. ~2026 (July 2026 se pehle; chhattisgarhaaj.com: https://www.chhattisgarhaaj.com/chhattisgarh.php?articleid=32244):
//    Dr. Khubchand Baghel ward 68 (purana Changorabhattha, RMC zone 5) me ~Rs 43 lakh ke vivid vikas karyon
//    ka unhone Mahapaur Meenal Choubey aur sabhapati Suryakant Rathod sahit bhoomipujan kiya; Rs 20 lakh ki
//    nayi pipe line (Changorabhattha–Raipura pani-tanki command area prithak karne ka kaam — July 2026 tak
//    payjal samasya ke sthayi nidan ka dawa). Event hua (post-event reporting), vyaktigat bhoomipujan,
//    fund (RMC/adhosanrachna) partially disclosed — LEKIN outlet whitelist me NAHI = REJECT. Note: is
//    event ka koi whitelist-outlet (Haribhoomi/Navbharat/Patrika/Bhaskar) version search me nahi mila;
//    wahi story whitelist URL par mile to Paani-category entry ban sakti hai (badge news).
// 2. ~2026 (chhattisgarh.co: https://chhattisgarh.co/news-detail/324287): Dr. Vipin Bihari Sur ward me Rs 1
//    crore se adhik ke vikas karyon ka lokarpan + bhoomipujan — Rs 25 lakh ke karyon ka bhoomipujan, Rs 77.53
//    lakh ke karyon ka lokarpan; unhone "Raipur Dakshin ka sarvangin vikas hi hamara sankalp" kaha.
//    Vyaktigat lokarpan/bhoomipujan, rashi disclosed — LEKIN outlet whitelist me NAHI = REJECT. Whitelist
//    version mile to entry ban sakti hai.
// 3. ~2025 (kuberbhoomi.com: https://kuberbhoomi.com/?p=97538): Shaheed Rajeev Pandey ward 62 (RMC zone 6,
//    Sanjay Nagar Shiv Mandir Bakra Market ke samip) me kul 8 naye vikas karyon (adhosanrachna mad 1,
//    Vidhayak Nidhi 5, prabhari mantri nidhi 1, SANSAD NIDHI 1) par kul Rs 52.60 lakh ki swikrit lagat se
//    unhone Mahapaur sahit bhoomipujan kiya; unhone kaha janta ki maang par Vidhayak Nidhi se kaam swikrit
//    kiye, 6 mahine me labh milega. TEEN wajah se REJECT: (a) outlet whitelist me NAHI; (b) 1 kaam Sansad
//    Nidhi (MPLADS) ka hai — niyam se MPLADS kaam inke nahi; (c) fund-mishran me vyaktigat MLA-shrey
//    alag nahi ho sakta. NOTE: isi event me Vidhayak Nidhi se 4 nagriko (Daulal Sahu, Gopichand Hemne,
//    Vinod Kumar Devangan, Ganesh Ram Sahu) ko Rs 3-3 lakh ke cheque aarthik sahayata ke roop me — ye
//    daan/rahat kaam hai, vikas-kaam nahi = REJECT (niyam: daan/rahat/muft shivir REJECT).
// 4. Apr 2025 est. (pratidinrajdhani.in, Sushasan Tihar 2025): unhone Mahapaur sahit RMC zone 5 ke shiviron
//    (Dr. Khubchand Baghel ward, Bhakt Mata Karma ward) ka nirikshan kiya; adhikariyon ko nirdesh diye.
//    SIRF nirikshan/daura, koi bhautik sanrachna ka lokarpan/shilanyas nahi; outlet bhi whitelist me NAHI
//    = REJECT.
// 5. 1 Oct 2026 (prawakta.com): Sewa Sankalp Abhiyan ke block-stariya bhashan/chitrakala pratiyogita
//    (Govt. J.N. Pandey Higher Secondary School, Raipur) me mukhya-atithi ke roop me shirkat; bhashan diya.
//    Karyakram-shirkat/samaroh, vikas-kaam nahi; outlet whitelist me NAHI = REJECT.
// 6. Sep 2025 (newsriveting.com): CM ke Nagar Kirtan karyakram (Guru Tegh Bahadur 350th martyrdom anniversary)
//    me ve maujood the. Dusre neta ke karyakram me maujoodgi matra = REJECT.
// 7. ~Feb 2026 est. (channel24india.com): CM ne 115 shahron me Atal Complexes ka udghatan/shilanyas kiya;
//    ve (Rajesh Munat, Purandar Mishra sahit) karyakram me maujood the. Maujoodgi matra, unka vyaktigat
//    lokarpan nahi; outlet whitelist me NAHI = REJECT.
// 8. ~Dec 2025 (pratidintime.com): CM Vishnu Deo Sai ne Raipur ke 23 vikas karyon ka lokarpan/shilanyas
//    kiya — Raipur South me Datrenga Mor–Chandra Town–Mahadev Ghat road (Rs 2.99 crore), road repair/BT
//    topping (Rs 2.52 crore), multiple city roads BT topping/patch repair (Rs 2.71 crore). Inka naam
//    report me maujoodgi me bhi nahi; faisle/kaam CM-rajya sarkar ke, vyaktigat MLA-bhoomika nahi;
//    outlet whitelist me NAHI = REJECT (niyam: Smart City/RMC/NH ke kaam bina vyaktigat MLA-bhoomika ke nahi).
// 9. Upchunav prachar dawe (jantaserishta.com, jantakikalam.com — Oct-Nov 2024): unke mahapaur/sansad
//    karyakaal ki uplabdhi-suchi — 33 pani-tanki + 150 MLD filter plant, Gaurav Path, linking road,
//    Nagar Nigam bhavan (White House), Budha Talab saundaryikaran, Tatibandh flyover (Rs 119 crore),
//    railway station unnayan (Rs 480 crore), 75 km four-lane NH swikriti. Sab MP/MAHAPAUR-kaaleen kaam
//    = niyam se EXCLUDED; outlets bhi whitelist me NAHI = REJECT.
// 10. Election coverage (PTI via ThePrint/newsdrum, Statesman, Dainik Bhaskar, Indian Express profile):
//     upchunav ghoshna/jeet/shapath (shapath 28 Nov 2024, Haribhoomi) — parichay/pardshbhoomi matra,
//     koi vikas-kaam nahi = REJECT (kaam-count me nahi).
// 11. Vidhayak Nidhi itemized lists: Raipur jila Collector-office se nikalne wali koi public itemized
//     Vidhayak Nidhi sanction list unke naam par web par indexed nahi mili; CG DPR/jansampark press
//     releases inke naam par search me nahi mili. Isliye koi sarkari-badge (sarkari) entry possible nahi.
// 12. NEGATIVE CHECK: 2024 halafnama ka 1 criminal case — BJP ke C-7 form (bjpcg.com PDF) ke anusaar:
//     JMFC Raipur ne IPC 147,148,149,427,294,448 me unhe "punishment till the court is adjourned for the
//     day" + Rs 1000 fine ke saath doshmukt kiya; complainant ne appeal ki; C.R.R. 453/2019 (04.10.2023)
//     Chhattisgarh HC Bilaspur me lambit. Ye sab Nov 2024 se PEHLE ka vikas hai; Nov 2024 ke baad is
//     mamle ke kisi nyayik vikas (charge-framing/trial-pragati/HC order) ki koi established-media report
//     nahi mili. Akele affidavit-record/HC-lambit par negative nahi banta (niyam) = koi negative entry
//     NAHI. (UP/MP/Haryana ke "Sunil Soni" wale court cases alag vyakti hain — confusion guardrail.)
//
// QA: ~11 web searches (Hindi + English, whitelist-outlet-targeted site: queries sahit) + page-open nahi
// (whitelist URL mila hi nahi — sirf non-whitelist leads mile, jinhe kholkar verify karne ki zaroorat
// whitelist-rule ke tahat nahi thi). Haribhoomi/Bhaskar/Patrika/Navbharat par inke Nov 2024+ Raipur City
// South seat-vishesh karyon ki koi coverage indexed nahi mili; chhote portals par mile 4 bhoomipujan/
// lokarpan leads (#1, #2, #3) whitelist-rule se cite nahi ho sakte. Isliye khaali profile (0 entries) —
// niyam ke mutabik sahi parinam. Agar inme se koi story whitelist outlet par mile (khaas taur par #1
// Changorabhattha Rs 43 lakh pipe line bhoomipujan ya #3 ward-62 Rs 52.60 lakh bhoomipujan — Sansad Nidhi
// wala hissa hatakar), to whitelist URL se entries banai ja sakti hain.

chhattisgarhWorks['guru-khushwant-saheb'] = [
  {
    title: 'Mantri Guru Khushwant Saheb ki pahal par Arang ke Bhainsa me nayi police chowki ki sthapna ko shasan-stariya swikriti, 13 naye pad manjur',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Patrika',
    sourceUrl: 'https://www.patrika.com/raipur-news/arang-new-police-chowki-13-posts-approved-20938585',
    date: '2026-09-26',
    note: 'Seat-relevance: gram Bhainsa, Arang vidhansabha. Report ke mutabiq police chowki ki sthapna ko shasan star se swikriti mili aur 13 naye pad manjur hue; Patrika ke anusar ye swikriti cabinet mantri Guru Khushwant Saheb ke prayason se mili. Fund ka srot report me disclosed nahi; chowki bhavan nirman ka fund stage page par clear nahi.',
    period: '2023-2028',
    stage: 'swikriti',
  },
  {
    title: 'Mantri Guru Khushwant Saheb ki pahal par Arang ke Bhainsa ke sarkari schoolon me Rs 54.13 lakh ke teen nirman karyon (shed, ahata, 3 atirikt kaksh) ko swikriti',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Patrika',
    sourceUrl: 'https://www.patrika.com/raipur-news/arang-school-development-guru-khushwant-saheb-54-lakh-20928344',
    date: '2026-09-22',
    note: 'Seat-relevance: gram Bhainsa, Arang vidhansabha. Shaskiya High School Bhainsa me shed (Rs 20 lakh) + ahata (Rs 20 lakh) aur Shaskiya Navin Prathmik Shala Bhainsa me 3 atirikt kaksh (Rs 14.13 lakh) — kul Rs 54.13 lakh. Patrika ke anusar rashi mantri Guru Khushwant Saheb ki pahal par manjur hui; mantri ne swikriti ke liye CM Vishnu Deo Sai aur shiksha mantri ka aabhar jataya.',
    period: '2023-2028',
    stage: 'swikriti',
  },
];

// REJECT-LOG (guru-khushwant-saheb):
// REJECT-LOG (guru-khushwant-saheb):
// 1. REJECT (sirf ghoshna) — haribhoomi.com (14 Oct 2026): Jaroud (Umaria) jagrata me munch se Sahu Samaj Bhavan Rs 10 lakh + CC road Rs 10 lakh ki ghoshna — whitelist source hai lekin sirf ghoshna, koi swikriti/sanction evidence nahi. URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/jagrata-jaraud-minister-guru-khushwant-saheb-attends-honors-meritorious-students-117532
// 2. REJECT (source) — thenaradnews24.com (Oct 2026): wahi Jaroud jagrata Rs 20 lakh ghoshna — non-whitelisted chhota portal + sirf ghoshna. URL: https://thenaradnews24.com/grand-devotional-jagrata-was-held-in-village-jaraud-umaria-cabinet-minister-guru-khushwant-saheb-gave-rs-20-lakh-for-development-works/
// 3. REJECT (source) — awamdoot.com (12 Jan 2025): gram Nardaha me "karodon rupaye ke vikas karyon ka lokarpan" — tag-page listing, non-whitelisted aggregator; koi whitelisted post-event report nahi mili. URL: http://awamdoot.com/tag/%e0%a4%b5%e0%a4%bf%e0%a4%95%e0%a4%be%e0%a4%b8-%e0%a4%95%e0%a4%be%e0%a4%b0%e0%a5%8d%e0%a4%af%e0%a5%8b%e0%a4%82-%e0%a4%95%e0%a4%be-%e0%a4%b2%e0%a5%8b%e0%a4%95%e0%a4%be%e0%a4%b0%e0%a5%8d%e0%a4%aa/
// 4. REJECT (source + dusre neta ka karyakram) — asiannewsservice.in / reportwire.in (23 Dec 2024): Dy CM Arun Sao dwara Arang bus stand par 4 nagariya nikayon me Rs 14.34 crore ke karyon ka lokarpan/bhoomipujan; MLA sirf upasthit — non-whitelisted + maujoodgi. URL: https://asiannewsservice.in/en/sao-inaugurates-and-lays-foundation-stones-for-development-works-worth-rs-14-34-crore-in-four-urban-bodies/
// 5. REJECT (source + CM ka kaam) — indianmasterminds.com (Jul 2026): CM Sai dwara Samoda Nagar Panchayat me Rs 128 crore se adhik ki pariyojnaon ka lokarpan/shilanyas — non-whitelisted; MLA ki vyaktigat bhoomika nahi. URL: http://indianmasterminds.com/news/chhattisgarh-cm-vishnu-deo-sai-launches-rs128-crore-development-projects-arang-216179/
// 6. REJECT (source + CM ka kaam) — indianmasterminds.com (Oct 2025): Bhandarpuri mele me CM dwara Rs 162 crore ki pariyojnaon ka aarambh — non-whitelisted; MLA sirf upasthit. URL: https://indianmasterminds.com/news/cm-vishnu-deo-sai-launches-rs162-crore-projects-bhandapuri-fair-149742/
// 7. REJECT (source + budget ghoshna) — pratidinrajdhani.in (Dec 2025): anupurak budget me Arang hetu Sendh jalashay 2000 lakh, Navagaon gramon me sadak 3000 lakh, mahavidyalaya bhavan hetu 363.995 lakh — non-whitelisted; budget-pravaadhan ghoshna, sanction report nahi. URL: https://pratidinrajdhani.in/historic-development-gift-to-arang-assembly-in-the-silver-jubilee-year/
// 8. REJECT (source) — rnsindia.co.in (4 Feb 2026): PWD dwara Godhi-Todgaon-Badgaon marg (9 km) ke chaudikaran hetu Rs 2155.97 lakh ki prashasanik swikriti — non-whitelisted (RNS India). URL: https://rnsindia.co.in/?p=164036
// 9. REJECT (source) — dainikchhattisgarhwatch.com (18 Jul 2025): PWD prashasanik aadesh 17 Jul 2025 anusar Bhansoj-Barcha-Malidih-Khauli marg hetu Rs 21.22 crore ki swikriti — non-whitelisted chhota portal. URL: https://dainikchhattisgarhwatch.com/2025/07/18/breaking-due-to-the-initiative-of-mla-guru-khuswant-saheb-arang-got-the-gift-of-development-works-worth-more-than-21-crores/
// 10. REJECT (source) — dainikchhattisgarhwatch.com (Apr 2026): Shaskiya Badriprasad Lodhi Mahavidyalaya (Arang) me 300-seater auditorium hetu Rs 8.66 crore (866.28 lakh) ki prashasanik swikriti — non-whitelisted chhota portal. URL: https://dainikchhattisgarhwatch.com/2026/04/07/cabinet-minister-guru-khushwant-saheb-gave-a-big-gift-to-the-area-₹8-66-crore-approved-for-auditorium-in-arang/
// 11. REJECT (source) — news36garh.com (Sep 2026): Nagar Palika Arang kshetra me sangrahalay bhavan hetu Rs 25.35 lakh ki prashasanik swikriti (sanskriti vibhag aadesh, 24 Aug 2026 vitt sahmati) — non-whitelisted. URL: https://news36garh.com/109781/
// 12. REJECT (source) — cgprayagnews.com (Oct 2026): Ji Ram Ji ke tahat Arang ke 20 gaonon me panchayat bhavan hetu Rs 3.98 crore ki swikriti — non-whitelisted. URL: https://cgprayagnews.com/ji-ram-ji-gram-panchayat/
// 13. REJECT (source + maang) — khabarchhattisgarhnews.com (Aug 2024): Tulsi/Kesla/Dhaurabhata minor nahar ki CM dwara saughat + MLA ki kanya mahavidyalaya/sabzi bazaar/Mordhwaj mahotsav Rs 10 lakh ki MAANG — non-whitelisted; MLA ke items sirf maang. URL: https://khabarchhattisgarhnews.com/माइनर-नहर-की-मिली-सौगात-मु/
// 14. REJECT (source + CM ka kaam + maang) — asiannewsservice.in / thestates.news (Aug 2024): CM dwara Arang me 5 ladkiyon ke chatravason ka lokarpan (Rs 8.06 crore); MLA ki request par Bhandarpuri Gurudwara parisar hetu Rs 17 crore ki swikriti — non-whitelisted; lokarpan CM ka, Rs 17 crore MLA ki maang ka nateeja. URL: https://asiannewsservice.in/en/cm-sai-inaugurated-five-hostels-with-accommodation-facility-for-300-girls/
// 15. REJECT (source + CM ghoshna + gair-Arang ansh) — kuberbhoomi.com (2 Apr 2025): Bhandarpuri Moti Mahal hetu Rs 17 crore ka budget pravadhan, Girodpuri mela anudan 25L→50L, shed ghoshna, Aurabandha (Mungeli) teerth darja — non-whitelisted; CM ki ghoshnaen; Girodpuri/Aurabandha Arang seat se baahar. URL: https://kuberbhoomi.com/?p=71983
// 16. REJECT (source) — khabarshatak.in (Sep 2025): Bhandarpuri Dham me navin PHC hetu Rs 75 lakh ki prashasanik swikriti + staff padon ki swikriti, mantri ke prayason ka shrey — non-whitelisted. URL: https://khabarshatak.in/due-to-the-efforts-of-cabinet-minister-guru-khuswant-saheb-ji-bhandarpuri-dham-got-administrative-approval-for-staff-for-health-facility/
// 17. REJECT (negative nahi banta) — bhaskar.com (May 2025): Bemetara (Nawagarh) me MLA ki gadi par pathrao, police janch — MLA peedit hai, aaropi nahi; koi FIR unke khilaf nahi; halafname me 0 cases. URL: https://www.bhaskar.com/local/chhattisgarh/news/chhattisgarh-bemetara-attack-on-bjp-mla-khuswants-car-video-135435899.html
// 18. REJECT (kaam nahi) — haribhoomi.com: cabinet vistar background, Dahariya se bayan-bazi (rajnaitik vivad), Sakti jile ka prabhar — vikas-kaam nahi. URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/district-dialogue-minister-guru-khushwant-saheb-chhattisgarh-establish-itself-tourism-state-103159
// 19. REJECT (mantri-niyam + maujoodgi) — patrika.com (Oct 2026): Amari Silk/Khadi karyakram me Kaushal Vikas mantri ke roop me upasthiti — vibhagiya rajya-stariya karyakram, Arang seat ka kaam nahi. URL: https://www.patrika.com/amp/raipur-news/amari-silk-brand-to-give-chhattisgarh-new-identity-create-20954969
// 20. REJECT (kaam nahi) — lalluram.com (Oct 2026): Arang band vivad sulah — non-whitelisted; vivad-samadhan, vikas-kaam nahi. URL: https://lalluram.com/cg-morning-news-cm-sai-visits-janjgir-champa-today-read-more/
// 21. REJECT (source + gair-Arang) — thenewdunia.com (Nov 2024): Gariaband me Birsa Munda jayanti par Rs 19 crore ke karyon ka shilanyas mukhya atithi ke roop me — Nai Duniya whitelist me nahi; Gariaband Arang seat se baahar. URL: https://thenewdunia.com/chief-guest-guru-khushwant-saheb-laid-the-foundation-stone-of-development-works-worth-more-than-rs-19-crore-on-the-birth-anniversary-of-lord-birsa-munda-in-gariaband-district/
// 22. REJECT (kaam nahi) — devdiscourse/etvbharat/uniindia (Aug 2025): cabinet vistar ki khabrein — vikas-kaam nahi (ETV Bharat/UNI whitelist-baahar vaise bhi).

// RETRY-LEADS (agar whitelisted source ya sarkari portal par mile to entry ban sakti hai):
// A. Rs 21.22 crore: Bhansoj-Barcha-Malidih-Khauli marg chaudikaran (PWD prashasanik aadesh 17 Jul 2025) — reject #9.
// B. Rs 8.66 crore: Badriprasad Lodhi Mahavidyalaya (Arang) 300-seater auditorium (ucch shiksha vibhag, Apr 2026) — reject #10.
// C. Rs 25.35 lakh: Arang me sangrahalay bhavan (sanskriti vibhag aadesh Aug 2026) — reject #11.
// D. Rs 75 lakh + staff: Bhandarpuri Dham navin PHC — reject #16.
// E. Nardaha me karodon ke lokarpan (12 Jan 2025) — reject #3.

chhattisgarhWorks['indra-kumar-sahu'] = [
  {
    title: 'Abhanpur ke 15 gram panchayaton me samudaayik panchayat bhawan nirman ke liye Rs 299.91 lakh ki prashasakiya svikriti — MLA ke vishesh prayason ka shrey',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Haribhoomi',
    sourceUrl: 'https://www.haribhoomi.com/state-local/chhattishgarh/news/abhanpur-mla-indra-kumar-sahu-15-gram-panchayat-bhawan-construction-funds-117628',
    date: '2026-10-14',
    note: 'Haribhoomi (Shyamkishore Sharma, Nawapara-Rajim) ke anusar Jila Panchayat, Raipur ne Viksit Bharat Rozgar evam Aajeevika Guarantee Mission Grameen ke tahat Abhanpur block ki 15 gram panchayaton me samudaayik panchayat bhawan nirman ke liye kul Rs 299.91 lakh (~Rs 2.99 crore) ki prashasakiya svikriti di; report ise MLA Indra Kumar Sahu ke vishesh prayason ka nateeja batati hai aur MLA ne svikriti par kshetra ki janata ko badhai di. Credit: prashasakiya svikriti (sarkar/Jila Panchayat), report ka shrey MLA ke prayas ko — capped. Fund Vidhayak Nidhi nahi, scheme-fund hai. Itemized: Ugetra 19.99 lakh; Koliyari 20 lakh; Gotiyardih 20 lakh; Ghont 20 lakh; Chhachhanpairi 20 lakh; Chhanta 20 lakh; Jawaibandha 19.99 lakh; Paragaon 20 lakh; Baktara 19.99 lakh; Bhothidih 19.99 lakh; Nimora 19.99 lakh; Bharenga 19.99 lakh; Mohdi 19.99 lakh; Lamkeni 19.99 lakh; Sonesilli 19.99 lakh.',
    period: '2023-2028',
    stage: 'svikriti'
  }
];

// REJECT-LOG (indra-kumar-sahu):
// REJECT-LOG (shanka ho to reject; galat entry se khali profile behtar)
// ============================================================
// R1. Gram Bendri me naveen shaskiya mahavidyalaya ki swikriti (Budget
//     2024-25, 9 Feb 2024; MLA ne ~Dec 2023 Atal Jayanti karyakram me maang
//     ki thi, CM ne vaada kiya tha) — sirf cgprayagnews.com par. Source
//     whitelist me nahi. REJECT. Lead: whitelisted outlet (Bhaskar/Patrika/
//     Haribhoomi/Navbharat) me isi khabar ka version dhoondho; mile to
//     VALID 'School' entry (stage: svikriti) ban sakti hai. Budget detail
//     (Rs 2 cr provision, Naveen Raipur sangeet college ke saath) daily
//     chhattisgarh par bhi hai — ye bhi whitelist me nahi.
// R2. Baktara + Mohdi me CC sadak sah nali nirman Rs 1.14 crore (1,14,84,690)
//     ki prashasakiya svikriti (Mukhyamantri Gram Sadak evam Vikas Yojna) —
//     sirf cgprayagnews.com par. Whitelist nahi. REJECT. Lead: whitelisted
//     version check.
// R3. Nawapara Samudayik Swasthya Kendra me blood storage suvidha ka
//     shubharambh/udghatan — sirf cgprayagnews.com ke related-link me ullekh.
//     Kholne layak whitelisted page nahi. REJECT. Lead: whitelisted report
//     dhoondho (udghatan = Aspataal category entry sambhav).
// R4. Vidhansabha me Nawapara swasthya vyavastha ka mudda — MLA ka prashn,
//     swasthya mantri (Shyam Bihari Jaiswal) ka ashwasan (salagnikaran samapt)
//     — sirf cgprayagnews.com par (~Mar 2024). Whitelist nahi. REJECT. Lead:
//     whitelisted version mile to 'Aspataal' entry (mantri-ashwasan, credit
//     capped) sambhav.
// R5. Gram Tamasivni me kai vikas karyon ka bhoomi poojan/lokarpan (30 Jun
//     2025) — sirf public.app video page par. Whitelist nahi. REJECT. Lead:
//     whitelisted report check.
// R6. Gram Bhothidih me shala pravesh utsav (30 Jun 2025) me mukhya-atithi
//     ke roop me shamil — samaroh-maujoodgi, koi bhautik sanrachna nahi.
//     REJECT. Source bhi public.app (non-whitelisted).
// R7. Viral video: 'gaddar' tippani (Bhaskar, ~Apr 2026) — Bhaskar ne khud
//     pushti nahi ki; koi FIR/probe nahi. Negative criteria nahi milte.
//     REJECT as negative. Retry-lead: adhikari-pusht janch/FIR/nyayik vikas
//     mile to punah mulyankan.
// R8. Bhaskar (Nawapara Rajim): Sushasan Tihar/bhoomi poojan karyakram me
//     MP Brijmohan Agrawal ke saath MLA ki upasthiti — dusre neta (MP) ke
//     karyakram me maujoodgi. REJECT.
// R9. MP Brijmohan Agrawal ki Rs 1.15 crore ghoshnaon par 13 karyon ki vittiya
//     svikriti (Abhanpur block: Tari, Paragaon, Koliyari, Nawagaon — Rs 55
//     lakh) — MP ka kaam, samdarshinews.com (non-whitelisted). REJECT (MP
//     kaam + non-whitelisted source).
// R10. Guru Ghasidas mandir shubharambh (Abhanpur ward 5, 8 Dec 2025) —
//     mukhya-atithi mantri Guru Khushwant, MLA sirf upasthit; public.app
//     (non-whitelisted). REJECT.
// R11. KharKhara-Rasela road (18.71 km) + Madwadih-Sirrikhurd road
//     (10.05 km, Rs 3.18 cr) svikriti, Rs 10 cr+ — Central Chronicle e-paper
//     (Nov 2025) me dikha, lekin sandarbh Rohit Sahu (Rajim MLA) ka lagta
//     hai, Chhura block Abhanpur seat me nahi; source whitelist me bhi nahi.
//     REJECT (galat vyakti/seat + non-whitelisted).
// R12. MLA LADS portal: Abhanpur MLA ne 7 karyon ke liye Rs 35 lakh ki
//     svikriti/anushansa (May 2025) — sirf amarchhattisgarh.com par.
//     Whitelist nahi. REJECT. Lead: itemized sanction list hai — whitelisted
//     outlet ya sarkari portal par version mile to VALID entry sambhav.
// R13. Viksit Bharat Sankalp Yatra karyakram me upasthiti (Thand, Jawaibandha,
//     Jamgaon, Girola — Dec 2023) — sarkari abhiyan me mukhya-atithi
//     upasthiti; koi vyaktigat lokarpan/bhoomipujan nahi. REJECT. Source bhi
//     dailychhattisgarh.com (non-whitelisted).
// R14. Nimora me divya katha karyakram me shamil/ashirwad (Mar 2025) —
//     samajik-dharmik karyakram me upasthiti; works nahi. REJECT. Source
//     theindiaking.com (non-whitelisted).
// R15. Election-2023 background pieces (Jagran, npg.news, Business Standard,
//     Wikipedia) — term ke kaam nahi, chunav coverage. REJECT.
// R16. Karma mandir nirman bhoomipujan (Jun 2023) — karyakaal se pehle ka,
//     aur source cgprayagnews (non-whitelisted). REJECT.
//
// RETRY-LEADS (whitelisted source me version mile to entry bane):
// L1. Bendri mahavidyalaya svikriti (R1) — School category, stage: svikriti.
// L2. Baktara/Mohdi CC sadak-nali Rs 1.14 cr (R2) — Sadak, stage: svikriti.
// L3. Nawapara CHC blood storage udghatan (R3) — Aspataal, stage: lokarpan.
// L4. Vidhansabha swasthya prashn + mantri ashwasan (R4) — Aspataal, credit
//     capped.
// L5. Tamasivni bhoomipujan/lokarpan (R5) — bhautik sanrachna confirm ho to.
// L6. MLA LADS 7 kaam/Rs 35 lakh itemized list (R12) — Any, stage: svikriti.
// ============================================================

// ---- Raipur district batch END (5 works, 0 negatives) ----


// ---- Gariaband district batch (researched 2026-10-17) ----

chhattisgarhWorks['rohit-sahu'] = [
  {
    title: 'Rajim vidhayak Rohit Sahu ne Chaubebandha mela sthal tak jaane wali Rs 34 crore ki shortcut sadak ke nirman ka bhoomipujan kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/chhattisgarh/ambikapur/news/access-to-the-rajim-fair-site-is-easier-a-shortcut-two-lane-road-will-be-built-dbp-137533406.html',
    date: '2026-03-25',
    note: 'Dainik Bhaskar ke mutabik, Rajim Kumbh Kalp ka mela sthal Triveni Sangam se hatkar Chaubebandha (Rajim se 5 km) ho gaya hai; Laxman Jhule ke paas Mahanadi ke kinare se Chaubebandha tak nayi shortcut sadak banegi, jisse Triveni Sangam aur mela sthal ke beech doori 3.5 km reh jayegi. Sarkar ne is sadak ke liye Rs 34 crore ki prashasanik swikriti di hai; budhvar ko Rajim vidhayak Rohit Sahu ne is sadak ke nirman ka bhoomipujan kiya. Sai mandir se Chaubebandha tak purani single-lane sadak ke two-lane ke liye bhi Rs 9 crore ki swikriti mili hai. Vidhayak ne kaha ki sadak shraddhaluon aur nagarwasiyon ke liye atyant labhkari hogi aur swikriti ke liye CM Vishnu Deo Sai ka aabhar jataya — swikriti rajya sarkar ki hai, isliye shrey seemit. Karyakram ki adhyakshata Nagar Palika adhyaksh Mahesh Yadav ne ki.',
    period: '2023-2028',
    stage: 'shilanyas',
  },
  {
    title: 'Bilaspur High Court ne sansad-vidhayakon ke lambit aapradhik mamalon ki speedy hearing ke nirdesh diye — June 2026 status report ke anusaar Gariaband jile ki vibhinn adalaton me Rohit Sahu se jude aapradhik prakaran lambit hain, mamla vicharadhin hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Patrika',
    sourceUrl: 'https://www.patrika.com/bilaspur-news/high-court-orders-speedy-hearing-of-criminal-cases-against-mps-mlas-20796063',
    date: '2026-08-01',
    note: 'Patrika ki page-report ke mutabik, Bilaspur High Court ki division bench (Chief Justice Ramesh Sinha aur Justice Ravindra Kumar Agrawal) ne sansadon, vidhayakon, poorv sansadon aur poorv vidhayakon ke khilaf darj aapradhik prakarnon ki jald sunvai ke nirdesh nichli adalaton ko diye. Nyaymitra Dr. N.K. Shukla ne sunvai me bataya ki pichhli status report ke mukable Raipur aur Kabirdham ke do lambit aapradhik mamalon ka nirakaran hua hai. June 2026 ki sthiti ke anusaar, Gariaband jile ki vibhinn adalaton me Rohit Sahu, Damrudhar Pujari aur Govardhan Manjhi se jude aapradhik prakaran lambit hain aur sambandhit adalaton me prakriya jari hai. Division bench ne agli sunvai 25 August tay karke Registrar (Judicial) ko sabhi trial courts se taza report lekar updated status prastut karne ka nirdesh diya. Disclosure: article me Rohit Sahu ko shabdasha Rajim ke vidhayak ke roop me naamankit nahi kiya gaya — naam Gariaband-jila context me aaya hai, isliye pehchan savdhani sahit darj hai; article me unka koi jawab nahi diya gaya hai aur jamanat ki sthiti nahi batayi gayi hai; 2023 halafname me 0 criminal cases darj hain jabki June 2026 ki HC status report me lambit prakaran darj hai — ye vartaman karyakaal ka nyayik vikas hai, dosh-siddhi nahi hui hai.',
    period: '2023-2028',
  },
];

// ===== REJECT-LOG (rohit-sahu — Rajim, BJP) =====
// L1. REJECT (source) — cgprayagnews.com (~28 Sep 2026): gram Jenjra (Rajim ke samip)
//     me Saraswati Shishu Mandir ke nava-nirmit bhavan ka lokarpan + anya vikas karyon
//     ka bhoomipujan, mukhya atithi vidhayak Rohit Sahu — post-event hai lekin source
//     whitelist me nahi. URL: https://cgprayagnews.com/inaugurated-the-building-ssvm/
// L2. REJECT (source + ghoshna) — cgprayagnews.com (~21 Sep 2026): vikas-khand Chhura,
//     gram panchayat Sivni — Rs 17.84 lakh ke nirman karyon ka lokarpan + ~Rs 69 lakh
//     ke karyon ka bhoomipujan (upswasthya kendra 28.51L, 2 samudayik bhavan, tinshed,
//     Rajpur me prarthana shed); sath me sweccha-anudan se 7 hitgrahiyon ko 5-5 hazar
//     dene ki GHOSHNA (ghoshna reject-niyam). Source bhi whitelist me nahi.
//     URL: https://cgprayagnews.com/living-up-to-expectations-is-my-resolve/
// L3. REJECT (source) — chhattisgarhcrimes.in / cgprayagnews.com / bulandtimes.com
//     (24-25 Sep 2026): Rajim-Chhura 45 km marg chaudikaran, Rs 145.62 crore, vidhayak
//     Rohit Sahu dwara bhoomipujan — post-event hai lekin teeno sources whitelist me
//     nahi; kisi whitelisted outlet par iski post-event reporting nahi mili.
//     URLs: https://chhattisgarhcrimes.in/chhattisgarh-crime-4740/ ;
//     https://cgprayagnews.com/rajim-chhura-road-widening/ ; https://www.bulandtimes.com/38779
// L4. REJECT (source) — cgprayagnews.com (8 Oct 2026): Parsada Joshi se Tila anicut tak
//     pakki sadak, Rs 4.70 crore ki swikriti 'vidhayak ke prayas se' — keval swikriti
//     ki khabar, bhoomipujan/lokarpan nahi; source whitelist me nahi.
//     URL: https://cgprayagnews.com/tila-anicut-paved-road/
// L5. REJECT (source) — cgprayagnews.com (15 Oct 2026): Gariaband me jila-stariya
//     bahuuddeshiya stadium hetu khel vibhag se Rs 7.60 crore ki prashasanik swikriti,
//     'vidhayak Rohit Sahu ke prayason se' — source whitelist me nahi.
//     URL: https://cgprayagnews.com/construction-of-a-multi-purpose-stadium/
// L6. REJECT (source) — dailychhattisgarh.com (1 Apr 2026): Rajim me PWD anuvibhagiya
//     adhikari karyalaya ke navin bhavan hetu Rs 61.79 lakh ki prashasanik swikriti,
//     'vidhayak ke vishesh prayason se' — source whitelist me nahi.
//     URL: https://www.dailychhattisgarh.com/gariaband/297398/rss-feeds.php
// L7. REJECT (source) — centralchronicle.in e-paper (27 Nov 2025, p.8): 'Rohit Sahu MLA'
//     ne Chhura block me Rs 10 crore se adhik ki sadak pariyojnaon ki swikriti dilayi —
//     Kharkhara-Rasela Road (18.71 km), Madwadih-Sirrikhurd Road (10.05 km, Rs 3.18 cr),
//     pothole repairs Rs 5.1 crore — source whitelist me nahi. NOTE: sandeep-sahu worker
//     ke log me ise 'Congress MLA' bataya gaya tha — galat; Chhura block Gariaband me
//     hai aur photo-caption 'Rohit Sahu MLA' hamare BJP Rajim MLA ke liye hai.
//     URL: http://centralchronicle.in/wp-content/uploads/2025/11/27112025-cc-rpr_compressed.pdf
// L8. RETRY LEAD (page khul na saka) — Haribhoomi (11 Sep 2024): 'Vidhayak ki pahal rang
//     lai: Rajim me sarvasuvidhayukt bus stand nirman ke liye bhoomi ka adhigrahan' —
//     mansoon satr me VS me maang par nagriya prashasan mantri Arun Sao ne Rs 2 crore
//     bus-stand manjoori ka ailaan kiya; Collector Deepak Agrawal ne 9 Sep 2024 ko
//     khasra 799/6 me 1.65 hectare zameen awantit ki; tehsildar ne mauke par seemankan
//     kiya, vidhayak maujood the. Ye VS-maang ka dastaveji nateeja (credit capped) +
//     zameen-awantan jaisa strong candidate tha, lekin page khul na saka
//     (www1.haribhoomi.com host resolve fail; retry nishedh) isliye entry nahi banai —
//     sirf search-snippet aadharit lead hai. didinews.co.in par wahi katha
//     (non-whitelisted) mili. Retry par page khule to entry ban sakti hai.
//     URL: https://www1.haribhoomi.com/state-local/chhattishgarh/news/rajim-bus-stand-construction-collector-deepak-agarwal-national-highway-46494
// L9. REJECT (judgment call — prashasanik shivir, bhautik kaam nahi) — Haribhoomi
//     (16 Mar 2026, khola aur padha): vidhayak ke nirdesh par Rajim SDM Vishal Maharana
//     ne anuvibhag ke sabhi rajasva mandalon me vishesh shivir lagane ke aadesh diye
//     (naamantaran/batwara/seemankan/truti-sudhar; 16/18/20/23/25 March 2026 ko 5 sthal).
//     Ye collector-baithak ke nirdesh ka prashasanik parinam hai — VS-floor ki maang/
//     prashn ka dastaveji nateeja wala credit-capped niyam yahan lagu nahi hota; koi
//     bhautik sanrachna, fund ya sanction nahi. Parent chahe to punah vichaar kare.
//     URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/rajim-mla-rohit-sahu-initiative-to-resolve-revenue-related-issues-special-camp-87081/amp
// L10. REJECT (sirf ghoshna + dusre neta ka ailaan) — Haribhoomi (16 Feb 2026): Rajim
//     Kumbh Kalp 2026 samapan samaroh me CM Vishnu Deo Sai ne Sangam tat par bairaj
//     nirman ki ghoshna ki; vidhayak Rohit Sahu ne keval Haribhoomi se charcha me
//     pratikriya di ('headline: vidhayak ki mehnat rang lai') — bairaj bana nahi,
//     pre-event ghoshna; MLA ki vyaktigat bhoomika sthapit nahi. Bhaskar ki sadak wali
//     khabar me bhi 'Rs 200 crore bairaj ailaan' ka ullekh — ghoshna matra.
//     URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/rajim-mla-rohit-sahu-cm-vishnudev-sai-barrage-construction-83422/amp
// L11. REJECT (sirf nirdesh, koi lokarpan/shilanyas nahi) — Bhaskar (~Aug 2026): Kukda
//     pickup weir se pani chhodne par Rajim-Fingeshwar ke kisanon ko rahat; 'kshetriya
//     vidhayak Rohit Sahu ne sangyaan liya, adhikariyon ko nirdesh diye' — nirdesh
//     matra, koi bhautik kaam ya fund disclosure nahi.
//     URL: https://www.bhaskar.com/local/chhattisgarh/ambikapur/news/water-released-from-kukda-pickup-weir-brings-relief-to-farmers-of-rajim-fingeshwar-dbp-138661818.html
// L12. REJECT (ceremonial maujoodgi) — Bhaskar (~Aug 2026): Fingeshwar se Rajim tak
//     Kanwar Yatra ka janpratinidhiyon dwara swagat; 'Rajim vidhayak Rohit Sahu maujood
//     rahe' — dharmik yatra me upasthiti, vikas-kaam nahi.
//     URL: https://www.bhaskar.com/local/chhattisgarh/ambikapur/news/kanwar-yatra-reached-rajim-from-fingeshwar-dbp-138701906.html
// L13. REJECT (sirf nirikshan) — Bhaskar (~Aug 2026): vidhayak Rohit Sahu ne Rajim ke
//     Swami Atmanand Utkrisht Vidyalaya ka auchak nirikshan kiya — nirikshan matra,
//     koi lokarpan/shilanyas/swikriti nahi.
//     URL: https://www.bhaskar.com/local/chhattisgarh/ambikapur/news/asked-students-about-their-level-of-studies-told-teachers-to-pay-special-attention-to-weak-students-dbp-138690426.html
// L14. REJECT (galat vyakti — naam-jaal guard) — Patrika: 'Jail se riha honge Jaijaipur
//     vidhayak Baleshwar Sahu' (KCC loan dhokhadhadi, Oct FIR, Jan 2026 bail) — ye
//     Baleshwar Sahu (INC, Jaijaipur, Janjgir-Champa) hain, hamare Rohit Sahu nahi.
//     URL: https://www.patrika.com/janjgir-champa-news/breaking-news-congress-mla-baleshwar-sahu-gets-bail-in-farmer-fraud-case-20258999
// L15. REJECT (galat vyakti) — 'Rohit Sahu' FIR/aarop search par mile: (a) Rohit Kumar
//     Sahu (pita Anand Ram Sahu), Rajnandgaon — dhokhadhadi mamle me SHIKAYATKARTA;
//     (b) Rohit Sahu (pita Ramgopal Sahu, 29), Bilaspur — DJ pickup vehicle case me
//     aaropi. Dono Rajim MLA se sambandhit nahi.
// L16. REJECT (election khabren, karyakaal work nahi) — 2023 result coverage: Bhaskar
//     Gariaband result page, Business Standard Rajim constituency, asianetnews,
//     khabarbharat36, news24carate — sab Dec 2023 ke chunav-parinam, koi vikas-kaam nahi.
// L17. RETRY LEAD — Vidhayak Nidhi (Rs 4 crore/seat/saal, 2022-23 se): whitelist outlets
//     par Rajim MLA-wise koi itemized sanction list nahi mili; CG arthik-aankiki / DPR
//     portal par agle pass me specific search (Rajim LAD sanction 2024-26) ho sakti hai.
// L18. REJECT (dusre neta ka karyakram + non-whitelisted) — the-journalist.com: Rajim
//     Kumbh Kalp taiyariyon ka ACS dwara nirikshan; MLA ki vyaktigat bhoomika nahi;
//     source bhi whitelist me nahi.

// ===== NEGATIVES (screening) =====
// Patrika HC speedy-trial story (upar entry #2) ke alawa established media me MLA ke
// khilaf koi FIR, naam-daar adhikari-pusht jaanch ya nyayik vikas ki koi aur reporting
// nahi mili. 'Rohit Sahu Rajim FIR/aarop' search par sirf asambandhit namesakes mile
// (L15). Parivar ke mamle nahi mile. Chunav-yachika nahi mili.

// QA: ~10 search rounds (Hindi + English; site-restricted bhaskar/patrika/haribhoomi;
// Devanagari + Roman spellings; negative terms FIR/aarop/mamla; naam-jaal check).
// Dono entries ke pages KHUD KHOLKAR padhe gaye (Bhaskar sadak-bhoomipujan;
// Patrika HC order — page metadata: Published 2026-08-01T14:26:57+05:30).
// Date derivation (entry #1): page par visible dateline nahi thi; article me bhoomipujan
// 'budhvar ko' bataya gaya hai aur search-index recency (~205 din) 25 Mar 2026 ki or
// ishara karti hai; 2026-03-25 budhvar hai (date -d verified) — isliye date 2026-03-25.
// JUDGMENT-CALL FLAGS (parent/coordinator dhyan de): (a) Negative entry me page par
// shabdasha 'Rajim ke vidhayak' nahi likha — naam Gariaband-jila paragraph me aaya hai;
// parent-verified lead hai aur Chhattisgarh ki sakriya raajneeti me dusra Rohit Sahu
// nahi mila, isliye entry VALID mani gayi, pehchan-caveat note me disclosed hai.
// (b) Entry #1 ka stage 'shilanyas' (bhoomipujan); fund Rs 34 crore sarkari prashasanik
// swikriti — swikriti ka shrey CM ko (MLA ne khud aabhar jataya), note me capped.
// (c) L9 revenue-shivir reject ek seema-rekha nirnay hai — parent chahe to entry me
// badal sakta hai. (d) L8 bus-stand ek majboot retry candidate hai (VS-maang ->
// mantri-ailaan -> zameen-awantan, Sep 2024) — page khulne par entry ban sakti hai.

chhattisgarhWorks['janak-ram-dhruw'] = [];

// ============================================================
// NEGATIVES: 0
// — Business Standard halafnama-data: Criminal Cases: No.
// — Wikipedia ka March 2024 security-return prakaran (zilla prashasan ne
//   sarkari awas nahi diya, isliye MLA ne suraksha-karmi wapas bheje) unka
//   apna virodh-pradarshan hai; MLA khud aaropi wali FIR/adhikari-pusht
//   janch nahi. Criteria me negative nahi aata. Source coverage:
//   https://en.wikipedia.org/wiki/Janak_Dhruw
// — Chunav-yachika ya avaidh ret-khanan aarop (political bayanbazi) me
//   koi FIR/adhikari-pusht janch unke khilaf nahi mili. Negative: NIL.
// ============================================================

// ============================================================
// REJECT-LOG (shanka ho to reject; galat entry se khali profile behtar)
// Koi bhi whitelist source par karyakaal 2023-2028 ka valid work nahi
// mila. Profile khali rakhi gayi hai.
// ============================================================
// R1. Pairi Udgam Bhatigarh + Sikasar jalashay ko paryatan sthal ghoshit
//     karane ki Vidhan Sabha maang (Feb 2024) — paryatan mantri Brijmohan
//     Agrawal ne sadan me hi ghoshna ki. Criteria me maang ka dastaveji
//     nateeja hone se sambhavit entry thi, lekin coverage sirf
//     samvetsrijan.com (whitelist me nahi) aur streetbuzz.co.in
//     (aggregator, whitelist me nahi) par hai. REJECT (source).
//     URLs: https://samvetsrijan.com/02/19/top-news/state/123698/
//           https://streetbuzz.co.in/newsapp//view/post:470867
//     Lead: Bhaskar/Haribhoomi/Patrika me isi ghoshna ka version mile to
//     'Assembly' category me credit-capped entry bane.
// R2. Gujra me navnirmit samudayik bhavan lokarpan (1 Jan 2025, naye saal
//     ke daure me) — coverage sirf dailychhattisgarh.com par
//     (whitelist me nahi). REJECT (source).
//     URL: https://www.dailychhattisgarh.com/chhattisgarh/11/gariaband/85
//     Lead: Bhaskar/Haribhoomi/Patrika me isi lokarpan ka version mile to
//     entry bane; note: 'gujra' gaon Bindranawagarh kshetra me hai.
// R3. Butenga gaon me sadak + aanganwadi bhavan ki maang par 'jald pura
//     karenge' ashwasan (Navakhai, 8 Sep 2024) — sirf maang/ashwasan, koi
//     bhautik sanrachna/svikriti nahi; source bhi dailychhattisgarh.com
//     (whitelist me nahi). REJECT.
//     URL: https://www.dailychhattisgarh.com/gariaband/233033/daily-chhattisgarh
// R4. Darripara (Mainpur) me tendua-hamle me balika ki maut par parivar se
//     mulakat, muavze ka ashwasan (2 Sep 2024) — rahat/ashwasan kaam, koi
//     sanrachna nahi; source bhi dailychhattisgarh.com. REJECT.
//     URL: https://www.dailychhattisgarh.com/cg-article/36/news/2418
// R5. PMGSY 139.80 crore bhugtan/tender par Vidhan Sabha me saval,
//     Deputy CM Vijay Sharma ka likhit jawab (19 Mar 2026 per npg.news)
//     — npg.news whitelist me nahi; saval rajya-stariya PMGSY mudda hai,
//     kshetra-vishesh kaam ka nateeja nahi. REJECT (source).
//     URL: https://npg.news/chhattisgarh/chhattisgarh-vidhansabha-me-gunja-cbi-janch-ke-mudda-latest-cg-news-hindi-npg-19-03-2023-1307299
//     Lead: yahi saval-jawab CG Vidhan Sabha records me ho to bhi assembly
//     question ke roop me credit capped rahega.
// R6. Gariaband ISKCON mandir (Rs 15 crore) bhoomipujan me upasthiti
//     (Dec 2025 per mpcg.ndtv.in) — MLA sirf upasthit atithi; vyaktigat
//     bhoomika nahi. REJECT (maujoodgi).
//     URL: https://mpcg.ndtv.in/chhattisgarh-news/gariaband-iskcon-temple-bhoomipujan-raman-singh-9863214
// R7. Avairdh ret-khanan par BJP par aarop (mpcgtimes.com) — political
//     bayanbazi; koi FIR/adhikari-pusht janch MLA ke khilaf nahi; source
//     bhi whitelist me nahi. REJECT.
//     URL: https://mpcgtimes.com/chhattisgarh/gariaband-illegal-sand-mining-mla-rohit-sahu-and-jan-dhruv
// R8. Navakhai milan samaroh, Durga puja, college samaroh, Mahatari Vandan
//     samman samaroh me mukhya-atithi/upasthiti (public.app, cgprayagnews,
//     dailychhattisgarh) — samaroh/upasthiti, koi bhautik sanrachna nahi.
//     REJECT. Sources bhi whitelist me nahi.
// R9. PCC adhyaksh daud (Bhaskar, 2026) + Balodabazar giraftari par
//     press-conference (Aug 2024) — party-sangathan/political, works nahi.
//     REJECT.
//     URL: https://www.bhaskar.com/local/chhattisgarh/raipur/news/chhattisgarh-congress-pcc-president-delhi-tribal-leaders-meeting-138498688.html
// R10. Sukma me Polavaram pariyojna virodh (Jun 2026, public.app) —
//      dusre jile ka virodh-andolan, koi sanrachna nahi. REJECT.
//
// RETRY-LEADS (whitelisted source me version mile to entry bane):
// L1. R1 ka Pairi Udgam/Sikasar paryatan-sthal ghoshna — Haribhoomi,
//     Bhaskar, Patrika, Navbharat me khabar dhoondho.
// L2. R2 ka Gujra samudayik bhavan lokarpan — whitelisted version.
// L3. Vidhayak Nidhi (Rs 4 cr/seat/saal) ki itemized sanction/vitaran
//     report Janak Ram Dhruw ke liye kisi whitelisted outlet par nahi mili
//     — Gariaband NIC/jansampark portal par suchi check karne ka lead.
// ============================================================


// ---- Gariaband district batch END (1 work, 1 negative) ----

// ---- Dhamtari district batch (researched 2026-10-17) ----

chhattisgarhWorks['ambika-markam'] = [
  {
    title: 'Sihawa MLA Ambika Markam ne vidhayak nidhi se Nagri block ke Chhipli gaon me bane samudayik shed ka lokarpan kiya',
    category: 'Any',
    stage: 'lokarpan',
    date: '2025-10',
    note: 'Nagri block ke Chhipli gaon me vidhayak nidhi se karaye gaye shed nirman ka lokarpan Sihawa MLA Ambika Markam ne kiya. Khabar ke anusar unhone kaha ki is shed se gramvasiyon ko samajik, sanskritik aur samudayik karyakramon ke aayojan ke liye ek susajjit aur surakshit jagah milegi. Fund disclosed (vidhayak nidhi) aur MLA ne swayam lokarpan kiya — sirf maujoodgi nahi. Date caveat: page par exact tithi nahi thi; ’10 mahine pehle’ dikha (crawl ~Aug 2026) aur search-index lagbhag Oct 2025 par hai, isliye month-level date 2025-10 rakhi gayi hai. (Dainik Bhaskar, post-event reporting)',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com:443/local/chhattisgarh/dhamtari/nagri/news/inauguration-of-shed-constructed-in-chipli-136057848.html',
    badge: 'news',
    period: '2023-2028',
  },
];

// ============================================================
// NEGATIVES: 0 (criteria me koi negative nahi banti)
// — Halafnama (2023): criminal cases 0 (myneta.info archive;
//   Business Standard ADR summary: Criminal Cases: No).
// — Bhaskar (whitelisted, ~3 mahine pehle) ki naam-pattika khabar:
//   janpad panchayat Dhamtari ke panchayat sansadhan kendra ke gate
//   ke bahar Sihawa MLA ki naam-pattika kachre ki tarah fenki mili —
//   isme MLA par koi aarop nahi; ve pidit-paksh hain (unke samman
//   ko thes), aaropi nahi. Negative nahi; sirf LOG.
// — Vartaman karyakaal me MLA ke khilaf koi FIR, naam-daar
//   adhikari-pusht janch, ya nyayik vikas whitelisted media me nahi
//   mila; halafnama-pending aankda bhi shunya hai.
// ============================================================

// ============================================================
// REJECT-LOG (ambika-markam — shanka ho to reject)
// ============================================================
// R1. Bhaskar 'Sihawa MLA sent devotees from Dhamtari on pilgrimage
//     to Raipur' (~9 mahine pehle; 27 Oct ka karyakram): mukhyamantri
//     teerth-darshan yojana ke tahat shradhaluon ke dal ko Raipur
//     railway station par hari jhandi dikhakar ravana kiya — sarkari
//     yojana ki seva ka keval shubharambh/flag-off; koi bhautik
//     sanrachna ya nidhi-disclosure nahi. REJECT (shubharambh).
//     URL: https://www.bhaskar.com/amp/local/chhattisgarh/dhamtari/nagri/news/sihawa-mla-sent-devotees-from-dhamtari-on-pilgrimage-to-raipur-136277727.html
// R2. Bhaskar 'The name plate of the Sihawa MLA was thrown in a
//     corner of the district' (~3 mahine pehle): janpad panchayat
//     Dhamtari gate ke bahar MLA ki naam-pattika kachre me fenki
//     mili — kaam nahi; MLA par aarop nahi. REJECT (kaam nahi);
//     negative-criteria me bhi fail (sirf LOG). URL:
//     https://www.bhaskar.com/local/chhattisgarh/dhamtari/news/the-name-plate-of-the-sihawa-mla-was-thrown-in-a-corner-of-the-district-dbp-137763637.html
// R3. Haribhoomi (whitelisted, page khola/padha, 22 Dec 2024):
//     sheetkaleen satra me van-adhikar vitran patta par MLA ka
//     prashn — 2021-22 se 2024 tak Sihawa kshetra ke samudayik van
//     adhikar aavedan/vitran/varg-war jankari maangi; mantri
//     Ramvichar Netam ne tathyatmak uttar diya; adhyaksh Raman Singh
//     ne mantri ko lambit prakaran jald niptane ko kaha. Soochna-prashn;
//     koi nai svikriti, mantri-ashwasan ya dastaveji nateeja nahi;
//     adhyaksh ka aam nirdesh ashwasan nahi. REJECT (prashn; nateeja
//     nahi). URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/sihawa-mla-ambika-markam-forest-rights-distribution-legislative-assembly-63660/amp
// R4. dailychhattisgarh.com (7 Feb 2024): Karneshwar mahadev mandir
//     pahunch marg par bhavya pravesh dwar banane ki MLA ki GHOSHNA
//     — keval ghoshna + non-whitelist source. REJECT.
//     Retry lead: whitelisted source par post-event reporting
//     (pravesh dwar bana/poorna) mile to entry ban sakti hai.
//     URL: https://www.dailychhattisgarh.com/chhattisgarh/9/dhamtari/132
// R5. cgmitan.com 'Sihawa ko mila 181.50 lakh ka svikrit budget'
//     (~Mar 2025; sadak/pul/sinchai suchi sahit): non-whitelist
//     portal par MLA ke karyalay ki press-release jaisa text; koi
//     GO/dastavej citation nahi. REJECT (source).
//     Retry lead: whitelisted outlet ya sarkari portal par
//     Sihawa budget/svikriti suchi. URL:
//     https://cgmitan.com/the-area-got-a-big-gift-due-to-the-tireless-efforts-of-mla-ambika-markam-sihawa-assembly-constituency-got-an-approved-budget-of-rs-181-50-lakh-rs-16-77-lakh-will-be-spent-this-year/
// R6. cgmitan/gangaprakash/nayabharat.live 'Narhar jalprapat ko
//     paryatan kshetra ka darja, Rs 18.19 lakh svikrit' (Mar 2025):
//     teeno non-whitelist portal par ek jaisa syndicated text; CG
//     paryatan board ki svikriti ka dawa bina sarkari aadesh ke.
//     REJECT (source). Retry lead: chhattisgarh paryatan board ka
//     svikriti aadesh (sarkari portal/GO) — mile to 'sarkari' badge
//     entry. URL: https://cgmitan.com/tourism-gets-new-identity-in-sihawa-assembly-constituency-narhar-waterfall-got-the-status-of-tourist-area-due-to-the-efforts-of-mla-ambika-markam/
// R7. dabangchhattisgarhia.com (30 Aug 2024, Magarlod daura):
//     (a) bujurg divyangon ko tricycle vitran — daan/vitran kaam,
//     REJECT; (b) gram Kapalphodi me Sahu samaj bhavan me kitchen
//     shed nirman ka bhoomipujan — bhautik sanrachna ka vyaktigat
//     bhoomipujan siddhant me VALID, par source non-whitelist.
//     REJECT (source). Retry lead: whitelisted coverage mile to
//     entry. URL: https://www.dabangchhattisgarhia.com/2024/08/blog-post_972.html
// R8. dabangchhattisgarhia.com (Nov 2025): Likma, Kallemeta,
//     Navagaon, Sakra gram panchayaton ko pani tanker vitran +
//     cgmitan (Aug 2025): Nagri nagar panchayat ko pani tanker —
//     tanker/tanki vitran = daan/rahat prakriti; dono non-whitelist.
//     REJECT. URLs: https://www.dabangchhattisgarhia.com/2025/11/blog-post_76.html
//     aur https://cgmitan.com/sihawa-mla-ambika-markam-gave-a-big-gift-to-nagari-nagar-panchayat-distribution-of-water-tankers/
// R9. public.app (Sep 2026): 'kaam mera, naam kisi aur ka' — Kajal
//     nadi pul svikriti ka shrey vivad; MLA ne jila panchayat
//     adhyaksh par jhoothe shrey ka aarop lagaya — rajneetik shrey-
//     vivad; non-whitelist. REJECT (credit-dava; kaam ka dastavej
//     nahi). URL: https://public.app/video/sp_pe765abm0ok47
// R10. public.app (13 Jun 2026): Kerengaon–Gattasilli marg par
//     Sendur nadi par uchch-stariya pul ke liye CG sarkar se
//     Rs 9.60 crore ki svikriti; 'MLA ke prayason se' framing —
//     non-whitelist source; GO/sarkari aadesh ka citation nahi.
//     REJECT (source). Retry lead: whitelisted outlet ya sarkari
//     aadesh. URL: https://public.app/video/sp_53ye23bfobd5v
// R11. etvbharat.com (Aug 2024): MLA ne suraksha badhane ki maang
//     (1-4 ka permanent bal) — vyaktigat suraksha maang; kaam nahi;
//     source bhi non-whitelist. REJECT.
//     URL: https://www.etvbharat.com/hi/!state/dhamtari-sihawa-congress-mla-demanded-from-government-to-increase-security-chhattisgarh-news-cts24082301950
// R12. dabangchhattisgarhia.com (Oct 2023): Nagri me Congress
//     chunavi karyalay ka udghatan (namankan se pehle) — pre-term
//     + rajneetik karyakram. REJECT.
//     URL: https://www.dabangchhattisgarhia.com/2023/10/blog-post_560.html
// R13. idn24news.in (Sep 2024): Kantakurirdi me Shiv mahapuran
//     katha-sthal ka MLAon (Omkar Sahu + Ambika Markam) dwara
//     nirikshan — sirf nirikshan/daura; non-whitelist. REJECT.
//     URL: https://www.idn24news.in/2024/09/blog-post_29.html
// R14. dabangchhattisgarhia.com (Sep 2025): Eid-ul-Azha par muslim
//     samaj ko badhai/sambodhan — samajik-rajneetik; kaam nahi.
//     REJECT. URL: https://www.dabangchhattisgarhia.com/2025/09/blog-post_64.html
//
// RETRY LEADS (live-browser/agale pass ke liye):
// — Chhipli shed lokarpan ki exact tithi (Bhaskar page par sirf
//   '10 mahine pehle'); dhamtari Bhaskar print-archive ya janpad
//   portal se exact date pakki ki ja sakti hai.
// — Vidhayak nidhi sanction list: dhamtari.nic.in / janpad portal
//   par Sihawa (MLA Ambika Markam) ki itemized svikriti suchi —
//   mile to itemized entries (sarkari badge).
// — Narhar jalprapat Rs 18.19 lakh + Sendur pul Rs 9.60 crore:
//   CG paryatan board / PWD ke svikriti aadesh sarkari portal par.
// — Kapalphodi kitchen shed bhoomipujan: whitelisted outlet scan.
//
// QA: 15 news searches + 3 source pages kholkar padhe (Bhaskar
// Chhipli shed — VALID entry; Haribhoomi van-adhikar prashn — reject;
// Bhaskar pilgimage/name-plate snippets — reject/log). Whitelisted
// outlets par Dec 2023 ke baad ka ekmatra qualifying kaam Chhipli
// shed lokarpan hai. PROFILE: 1 entry, negatives 0, rejects 14.

chhattisgarhWorks['ajay-chandrakar'] = [];

// REJECT-LOG (ajay-chandrakar, Kurud):
// A. WORKS-JAISE LEADS — sab dakshinkosal.com / dailychhattisgarh.com par mile (dono whitelist me nahi), isliye koi entry nahi bani:
// 1. Bhalujhulan audyogik kshetra bhoomipujan (13 Feb 2026, post-event; page khola aur padha): 11 hectare par 39 plots, kul Rs 7.94 crore (CSIDC MD ke hawale se); karyakram ke mukhya atithi MLA Ajay Chandrakar, adhyakshata CSIDC chairman Rajeev Agrawal ne ki. VALID hota (vyaktigat bhoomipujan, fund disclosed) lekin source whitelist me nahi. URL: https://dakshinkosal.com/industrial-area-to-be-opened-in-bhalujhulan-of-kurud/
// 2. Bhendri (Magarlod block) me nav-nirmit 6-bed Primary Health Centre ka lokarpan (11 Jan 2026): MLA ne ribbon katkar udghatan kiya; lagat Rs 75 lakh (snippet). Source dailychhattisgarh (whitelist me nahi). URL: https://www.dailychhattisgarh.com/cg-article/36/news/180
// 3. Kurud vikas-khand ki gram panchayaton me Rs 1.20 crore (Rs 120.80 lakh) ke 20 karyon ki itemized prashasnik swikriti — CC road, samudayik bhavan, muktidham shed, rangmanch; 'MLA ki anushansa par' (snippet, ~Sep 2026). Itemized sanction list VALID hoti, lekin source dakshinkosal (whitelist me nahi). URL: https://dakshinkosal.com/kurud-development-news/
// 4. Rs 3.13 crore ke vikas karyon ki prashasnik swikriti (~Jul 2026): Kurud nagar me CC road/parking/nahar-kinare sadak/JD Colony bypass + 8 gaon me samudayik shed (Khapri, Maraud, Gadadih, Ganeshpur, Chorbhatti, Alekhuta, Mauri-kala, Singdehi). Source dakshinkosal. URL: https://dakshinkosal.com/kurud-development-works-approved/
// 5. Gram Kokdi (Khaira), Kosmarra, Charota me Rs 2 crore se adhik ke kaam (CC sadak + naali; pratyek panchayat ~Rs 66.75-66.82 lakh; published 18 Sep 2026). Source dakshinkosal. URL: https://dakshinkosal.com/cg-kurud-assembly-development/
// 6. Kurud nagar underground cable project Rs 6.31 crore (Rs 6,31,26,555): CSPDCL ne 17 Sep 2026 ko karyadesh 2135/2136 jari kiye; Kargil Chowk-Deendayal Chowk (Rs 2.74 cr) + Kargil Chowk-Bajrang Chowk (Rs 3.58 cr). 'MLA ne manjoori dilayi' (snippet). Source dakshinkosal. URL: https://dakshinkosal.com/kurud-power-infrastructure-update/
// 7. Shitkalin satra Dec 2025 ke pratham anupurak budget me Kurud ke liye ~Rs 80 crore: Kareli Badi + Bhalujhulan audyogik kshetra (pratyek Rs 25.66 cr), PG College Kurud chhatravas (Rs 2.73 cr), Silouti college bhavan (Rs 1 cr), ITI G. Jamgaon (Rs 1 cr + 8 pad), Kurud jal aapurti (Rs 7.70 cr), Bhakhara-Bhateli jal (Rs 16.14 cr); 'MLA ke prayason se'. GO-backed swikriti hoti, lekin source dakshinkosal. URL: https://dakshinkosal.com/kurud-gets-a-gift-worth-crores-in-the-supplementary-budget/
// 8. Shaskiya Polytechnic College Kurud bhavan ke liye Rs 16.97 crore ki swikriti (3 Sep 2025; sanstha bhavan Rs 9.11 cr + chhatravas + awas; 12 acre, Rakhi mod). Source dakshinkosal. URL: https://dakshinkosal.com/polytechnic-college-kurud/
// 9. Naveen Shaskiya Polytechnic Kurud ko AICTE manjoori (2025-26 satra; 4 diploma courses x 60 seats; Old Girls Hostel parisar, Nahar Road). Source dakshinkosal; sansthan-shubharambh bhi hai. URL: https://dakshinkosal.com/new-government-polytechnic-kurud-hub-of-education-kurud/
// 10. Kurud me BA-LLB shaskiya mahavidyalaya bhavan ke liye Rs 4.66 crore (Rs 4,65,84,000) ki prashasnik swikriti (27 Sep 2025): 'uchch shiksha aayukt ne MLA ke prastav ko sweekarte hue'. Source dailychhattisgarh. URL: https://www.dailychhattisgarh.com/dhamtari/277370/-4-66-
// 11. Kurud me 'Chhattisgarh ka pehla amphitheater' Rs 3.81 crore — bhoomipujan me MLA ne swayam kaha (snippet, ~Jul 2025). Source dakshinkosal. URL: https://dakshinkosal.com/first-amphitheater-in-kurud-mla-ajay-chandrakar-vision/
// 12. Kurud + Bhakhara me octagonal street pole/LED light: Kurud Rs 126.07 lakh + Bhakhara Rs 73.58 lakh (adhosanrachna/paryavaran upkar nidhi; ~Mar 2026). Source dakshinkosal. URL: https://dakshinkosal.com/a-gift-worth-crores-for-kurud-and-bhakhara/
// 13. Teen gaon (Parkhanda, Semra-B, Megha) me smart garden: Paryavaran Vaniki Yojana 2025-26 se Rs 45 lakh (15-15 lakh), 'MLA ki vishesh anushansa par' (snippet, ~Feb 2026). Source dakshinkosal. URL: https://dakshinkosal.com/smart-garden-to-be-built-with-rs-45-lakh/
// 14. Smart library + van vibhag karyalaya lokarpan (22 Mar 2026): page khola — PRE-EVENT announcement ('aaj karenge'; published 21 Mar 2026), MLA mukhya atithi. Pre-event + source whitelist me nahi. URL: https://dakshinkosal.com/ajay-chandrakar-will-inaugurate-the-state-of-the-art-smart-library-and-forest-department-office/
// 15. Kurud ko Nagar Palika ka darja — Chhattisgarh rajpatra adhisoochna 13 Aug 2025; Haribhoomi article (search-text me: 'MLA ke doordrishti, samarpan aur satat prayason ke bina sambhav nahi'; prastav nagar panchayat adhyaksh Jyoti Bhanu Chandrakar ne rakha tha) — lekin Haribhoomi page ka URL live-check me unavailable raha, khola nahi ja saka. dakshinkosal version: https://dakshinkosal.com/kurud-has-the-status-of-mila-municipality/ — whitelist me nahi. Prashasnik upgrade (bhautik sanrachna nahi) + khula whitelisted source nahi.
// 16. Kareli Badi + Khatti ko Nagar Panchayat ka darja (rajpatra adhisoochna; CM ne Mahatari Sadan samaroh me ailaan kiya tha; ~Nov 2025). Source dakshinkosal. URL: https://dakshinkosal.com/kareli-badi-will-get-the-status-of-nagar-panchayat/
// B. QUALITY-PAR REJECT (whitelisted ya sarkari source hote hue bhi):
// 17. Kurud Nagar Palika ka vidhivat shubharambh + ~Rs 17 crore ke karyon ka lokarpan/shilanyas (12 Jan 2026): dakshinkosal PRE-EVENT ('karenge'); post-event ETV Bharat (13 Jan 2026) ke mutabik shubharambh/lokarpan/shilanyas Dy CM Arun Sao ne kiya, MLA ne keval adhyakshata ki. Dusre neta ke karyakram me adhyakshata/maujoodgi = REJECT; ETV whitelist me nahi. URLs: https://dakshinkosal.com/ajay-chandrakar-will-formally-inaugurate-the-municipality/ , https://www.etvbharat.com/hi/chhattisgarh/_swami-vivekananda-birth-anniversary
// 18. Mahatari Sadan samaroh, Kareli Badi (~Sep 2025): CM ne Dhamtari jile ke liye Rs 83 crore package ki GHOSHNA ki (Kareli Badi college, ITI G. Jamgaon, Kurud-Bhakhara jal yojna Rs 30 cr, Baronda anicut Rs 45 cr, Kurud nagar panchayat Rs 2 cr, Bhakhara Rs 1.5 cr, Khatti anicut Rs 5 cr, Kurud ko nagar palika parishad ka darja). Sirf ghoshnaen; MLA ne keval CM ka swagat kiya (maujoodgi). thefrontpage24 whitelist me nahi; informatics.nic.in (sarkari) me MLA 'prominently present' matra. URLs: https://thefrontpage24.com/?p=3730 , https://informatics.nic.in/news/1583
// 19. PM Modi dwara Kurud Kendriya Vidyalaya ke nav-nirmit bhavan ka virtual lokarpan (Feb 2024): kendriya pariyojna; udghatan PM ne kiya; uplabdh report me MLA upasthit suchi me nahi (Domnlal Korsewada, Lalit Chandrakar the). 24ghanteonline whitelist me nahi. URL: https://24ghanteonline.com/pm-modi-virtually-inaugurated-bhilai-iit/
// 20. Haribhoomi: kendriya mantri Mansukh Mandaviya se mulakat (~Feb 2026) — Kurud vikas par charcha + maang-patra; keval maang, koi nateeja nahi. URL: https://www1.haribhoomi.com/state-local/chhattishgarh/news/raipur-mla-ajay-chandrakar-minister-mansukh-mandaviya-political-issues-60515/amp
// C. RAJNAITIK / NON-WORK coverage — kaam nahi:
// 21. Haribhoomi: BJP sadasyata abhiyan — 10,000 sadasya lakshya poora (~Feb 2026). Party kaam. URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/kurud-mla-ajay-chandrakar-bjp-organization-membership-campaign-46951/amp
// 22. Haribhoomi: 'The Sabarmati Report' ke 31 shows book karke kshetra-vasiyon ko film dikhana (~Nov-Dec 2024). Party/PR event. URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/the-sabarmati-report-mla-ajay-chandrakar-bjp-kurud-dhamtari--60028
// 23. Haribhoomi: BJP Vijay Aabhar rally, Kurud (22 Feb 2025) — chunavi rally, Congress par tanj. URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/bjp-vijay-aabhar-rally-mla-ajay-chandrakar-took-a-dig-at-congress-72823
// 24. Dainik Bhaskar: Jawara visarjan shobhayatra, Kurud (~Oct 2025) — MLA ne nivas par jawara poojan kiya; dharmik upasthiti. URL: https://www.bhaskar.com/amp/local/chhattisgarh/dhamtari/kurud/news/a-flood-of-devotees-gathered-for-the-immersion-of-the-sacred-thread-in-kurud-136075297.html
// 25. Dainik Bhaskar: Atmanirbhar Bharat karyakram baithak (~Oct 2025) — party karyakram, mukhya vakta. URL: https://www.bhaskar.com/amp/local/chhattisgarh/dhamtari/news/self-reliant-india-program-in-kurud-today-136173098.html
// 26. Patrika: Congress CM-face par tanj ('jale hue kartus', ~Sep 2026). Rajnaitik bayan. URL: https://www.patrika.com/raipur-news/congress-cm-face-ajay-chandrakar-statement-20930326
// 27. inkquest (whitelist me nahi): sheetkalin satra Dec 2025 me MLA ne apni hi sarkar ki 'Chhattisgarh Vision-2047' par sawal uthaye; Congress MLA Sangeeta Sinha ka CM-offer chutkula. Keval bahas, koi dastaveji nateeja nahi. URL: https://inkquest.in/news/Congress-MLA-in-the-Assembly-offered-to-make-Ajay-Chandrakar-the-CM
// 28. breakinnow (whitelist me nahi): Sankalp Seva Abhiyan bhashan, Kurud (~Sep 2026). Rajnaitik bhashan. URL: https://breakinnow.com/it-is-easiest-to-find-fault-ajay-chandrakar-said-in-kurud-the-public/
// 29. HT (2021): 'Clarify who is trying to destabilise CG govt' — karyakaal se pehle (Congress-kal). URL: https://www.hindustantimes.com/india-news/clarify-who-is-trying-to-destabilise-chhattisgarh-govt-bjp-mla-asks-baghel-101629974663233.html
// 30. kadwaghut: Risali ward-25 me 'Hamar Clinic' bhoomipujan 'vidhayak Chandrakar' dwara — ye LALIT Chandrakar (Durg Gramin) hain, Ajay nahi. Galat vyakti. URL: https://kadwaghut.com/?p=353942
// 31. dailychhattisgarh: Sushasan Tihar shivir, Kurud (5 Jun 2026) — nagar palika adhyaksh ne shubharambh kiya; MLA ka ullekh nahi. URL: https://www.dailychhattisgarh.com/dhamtari/304516/-
// D. NEGATIVES — koi nahi bana (jaanch poori):
// 32. Patrika (page khola, 3 Oct 2026): viral video me MLA ne adhikari ke liye 'dikhta to usko gaad deta' kaha (kisan-pani mudde par); Congress ne bhasha par hamla kiya. Koi FIR/janch nahi — rajnaitik bayan, negative threshold fail. URL: http://patrika.com/raipur-news/bjp-leader-ajay-chandrakar-officer-threat-video-20955314 (thesootr par bhi yahi vivaad, koi kanuni karyavahi nahi: https://thesootr.com/state/chhattisgarh/ajay-chandrakar-viral-video-controversial-statement/articleshow/134655807.html)
// 33. Patrika (page khola, 22 Sep 2026) + New Indian Express (whitelisted): MLA ne Supriya Shrinate aur Neha Singh Rathore ke khilaf Dhamtari civil court me MANHANI ka dawa dayar kiya; FIR Shrinate/Rathore ke khilaf (BJP pravakta ki shikayat par) darj. MLA VADI/shikayat-paksh me hain, aaropi NAHI — negative nahi. URLs: https://www.patrika.com/raipur-news/viral-video-controversy-ajay-chandrakar-20927443 , https://www.newindianexpress.com/india/2026/Sep/22/chhattisgarh-bjp-mla-initiate-defamation-case-against-congress-leader-supriya-shrinate-singer-neha-rathore
// 34. Patrika (~Sep 2026): MLA par social-media abhadr tippani par BJP karyakartaon ki shikayat par yuvak Pushpendra Kumar giraftar (dhara 151). MLA peedit/shikayat-paksh; aaropi nahi — negative nahi. URL: https://www.patrika.com/dhamtari-news/kurud-mla-ajay-chandrakar-social-media-comment-arrest-20935040
// 35. 2023 halafnama (Business Standard/ADR): Criminal Cases: No. URL: https://www.business-standard.com/elections/chhattisgarh-elections/ajay-chandrakar-candidate-30455
// 36. Jansampark CG portal (site: search): 'Chandrakar Kurud lokarpan' par koi press release nahi mili.

// RETRY-LEADS (parent/coordinator ke liye — whitelisted source mile to entry ban sakti hai):
// A. Bhalujhulan audyogik kshetra bhoomipujan (13 Feb 2026; MLA mukhya atithi; Rs 7.94 cr; CSIDC) — Haribhoomi/Dainik Bhaskar/Patrika me post-event report mile to 'Any', stage 'shilanyas-bhoomi pujan', badge 'news'. Page khola gaya: https://dakshinkosal.com/industrial-area-to-be-opened-in-bhalujhulan-of-kurud/
// B. Bhendri PHC lokarpan (11 Jan 2026; MLA ne ribbon kata; Rs 75 lakh) — whitelisted post-event mile to 'Aspataal', stage 'lokarpan'. https://www.dailychhattisgarh.com/cg-article/36/news/180
// C. Rs 1.20 crore itemized sanction list (20 kaam, Kurud block; MLA anushansa) — whitelisted outlet me mile to 'Any'/'Sadak', stage 'swikriti'. https://dakshinkosal.com/kurud-development-news/
// D. Law College bhavan Rs 4.66 crore prashasnik swikriti (27 Sep 2025; MLA prastav) — whitelisted mile to 'School', stage 'swikriti'. https://www.dailychhattisgarh.com/dhamtari/277370/-4-66-
// E. Polytechnic bhavan Rs 16.97 crore swikriti (Sep 2025) — whitelisted mile to 'School', stage 'swikriti'. https://dakshinkosal.com/polytechnic-college-kurud/
// F. Anupurak budget Dec 2025 (~Rs 80 cr Kurud: audyogik kshetra, college chhatravas, ITI, jal yojnaen) — budget dastavej ya whitelisted coverage mile to GO-backed 'swikriti' entries (credit capped). https://dakshinkosal.com/kurud-gets-a-gift-worth-crores-in-the-supplementary-budget/
// G. Kurud Nagar Palika rajpatra adhisoochna (13 Aug 2025) — Haribhoomi article ka URL live-check me nahi mila; retry par khule to 'Any' (credit capped, prastav nagar panchayat adhyaksh ka tha).
// H. Amphitheater bhoomipujan Rs 3.81 crore (~Jul 2025) — whitelisted mile to 'Any', stage 'shilanyas-bhoomi pujan'. https://dakshinkosal.com/first-amphitheater-in-kurud-mla-ajay-chandrakar-vision/
// I. Underground cable Rs 6.31 crore (karyadesh 17 Sep 2026) — whitelisted mile to 'Any', stage 'swikriti'. https://dakshinkosal.com/kurud-power-infrastructure-update/

// QA: 0 entries pass. Whitelisted sroton (Patrika, Haribhoomi, Dainik Bhaskar, Indian Express group, HT, NDTV, TOI, India Today) me Dec 2023+ ka koi vyaktigat lokarpan/shilanyas, itemized Vidhayak-Nidhi soochi, GO-backed swikriti ya Vidhansabha-nateeja documented nahi mila. Sabstantive kaam ki coverage keval non-whitelisted regional portals (dakshinkosal.com, dailychhattisgarh.com) par hai. Negatives: koi nahi (halafname me 0 criminal cases; established media me MLA ke khilaf koi FIR/janch nahi; dono vivaad me MLA vadi/peedit-paksh). Profile khali rakhna niyam-anusar sahi hai.

// ---- Chhattisgarh — Kurud (Dhamtari) batch END (0 entries, negatives 0) ----

chhattisgarhWorks['onkar-sahu'] = [
  {
    title: 'Dhamtari ke vidhayak Onkar Sahu ne Telinsatti me Sahu samaj ke samudayik bhavan ka bhoomipujan aur anganwadi bhavan ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/chhattisgarh/dhamtari/news/inauguration-of-anganwadi-building-in-teelinsatti-136005356.html',
    date: '2025-12',
    note: 'Dainik Bhaskar (Dhamtari) ki post-event report ke mutabik vidhayak Onkar Sahu ne Telinsatti me Sahu samaj ke samudayik bhavan ka bhoomipujan aur anganwadi bhavan ka lokarpan kiya; unhone kaha ki samudayik bhavan kisi bhi samaj ki gatividhiyon aur karyakramon ka kendra hota hai. Disclosure: page par report ka samay "10 mahine pehle" dikhaya gaya hai (Oct 2026 se ginne par ~Dec 2025); poora article app-gated hai, isliye karya ki lagat ya fund ka source accessible hisse me disclosed nahi hai; anganwadi bhavan sarkari sanrachna hai aur samudayik bhavan samaj ka nirmaan (gair-sarkari) hai — dono karyakramon me vidhayak ki vyaktigat bhoomika (bhoomipujan/lokarpan) page par documented hai.',
    period: '2023-2028',
  },
];

// REJECT-LOG (onkar-sahu, Dhamtari):
// 1. public.app video (Sep 16, 2026) — "Dhamtari ke gram Khartuli me navnirmit kalamanch ka lokarpan; vidhayak Onkar Sahu ne vidhayak nidhi se bane manch ka udghatan kiya" — public.app whitelist me explicitly excluded = REJECT. URL: https://public.app/video/sp_0xfioz8jtwofw
// 2. chhattisgarhcrimes.in — Satiyara gaon (Gangrel baandh) daura: "vidhayak ne Rs 9 lakh ki lagat se banne wali CC road ka bhoomipujan kiya; paryatan sthal banane ka sankalp" — outlet whitelist me nahi; baaki hissa sirf ghoshna/ashwasan = REJECT. URL: https://chhattisgarhcrimes.in/dhamtari-se/
// 3. dailychhattisgarh.com — "Vidhayak ne kiya atirikt kaksh nirman ka lokarpan" (Tirra Koliyari shaskiya prathmik shala, 28-Feb-2024; Mongragahan shaskiya high school, 02-Jan-2024) — outlet whitelist me nahi = REJECT. URL: https://www.dailychhattisgarh.com/chhattisgarh/9/dhamtari/126
// 4. sankalpbharatnews.com — Vindhyavasini ward me Valmiki samajik bhavan ka lokarpan (mahapaur + parshad nidhi se nirmit) — outlet whitelist me nahi; fund mahapaur/parshad nidhi ka, MLA ki keval upasthiti = REJECT. URL: https://sankalpbharatnews.com/?p=38418
// 5. dhamtarinews.com — "Bodra (S) me vikas karyon ka lokarpan, Ramdhuni pratiyogita me shamil hue vidhayak Onkar Sahu" — outlet whitelist me nahi = REJECT. URL: https://dhamtarinews.com/
// 6. Dainik Bhaskar — "Politics over development work in Dhamtari" (hitech bus stand + Ratnabandha/Sihava/Rudri road chaudikaran ki swikriti par shrey-vivad) — whitelisted, lekin MLA ka daawa Bhupesh Baghel sarkar ke daur ki swikritiyon par hai (pre-term, Dec 2023 se pehle) aur BJP mahapaur daave ka khandan karte hain; contested pre-term credit, koi dastaveji sanrachna/fund bhoomika nahi = REJECT. URL: https://www.bhaskar.com/amp/local/chhattisgarh/dhamtari/news/politics-over-development-work-in-dhamtari-135013291.html
// 7. Dainik Bhaskar — "Development will now gain momentum: Omkar" (Chhattisgarh budget par MLA ka daawa ki Dhamtari me vikas ko gati milegi) — whitelisted, lekin page truncated aur keval sarkari budget par daawa; koi itemized list ya vyaktigat kaam nahi = sirf ghoshna, REJECT. URL: https://www.bhaskar.com/local/chhattisgarh/dhamtari/news/development-will-now-gain-momentum-omkar-137309423.html
// 8. Dainik Bhaskar — "Dhamtari MLA Protest Road Block" (Amdi gaon me chakka jam, 6 sutriya maangein; adhikariyon ke ashwasan par samapt) — whitelisted, lekin virodh-pradarshan hai; koi poorn karya/fund/nateeja nahi = REJECT. URL: https://www.bhaskar.com/amp/local/chhattisgarh/dhamtari/news/dhamtari-mla-protest-road-block-police-remove-137123081.html
// 9. Dainik Bhaskar — Holi milan samaroh (vidhayak niwas, Rudri) — whitelisted, lekin sanskritik samaroh; koi vikas-kaam nahi = REJECT. URL: https://www.bhaskar.com/amp/local/chhattisgarh/dhamtari/news/dhamtari-congress-leaders-workers-celebrate-holi-137435526.html
// 10. Haribhoomi — "Jila Samvad Dhamtari" (MLA Onkar Sahu 5ve satr me charcha me shamil) — whitelisted, lekin media ka charcha-karyakram; koi karya nahi = REJECT. URL: https://www.haribhoomi.com/state-local/chhattishgarh/news/district-dialogue-dhamtari-dr-himanshu-dwivedi-discuss-key-issues-83935
// 11. NDTV (mpcg.ndtv.in topic page) — "Dhamtari: Bijanapuri me maans-sammelan me chanda maang par yuvaon ne vidhayak ko khadeda" — whitelisted outlet par ghatna ki khabar, lekin koi FIR/janch/nyayik vikas nahi; negative-threshold poora nahi hota = negative entry NAHI, lead ke roop me darj. URL: https://mpcg.ndtv.in/topic/omkar-sahu
// 12. npg.news — "CG Congress News: Congress vidhayak ko mili jamanat" — NAAM-JAAL: ye Jaijaipur (Janjgir-Champa) ke MLA Baleshwar Sahu ka dhokhadhadi mamla hai, Dhamtari ke Onkar Sahu ka nahi = REJECT. URL: https://npg.news/amp/politics/cg-congress-news-congress-vidhayak-ko-mili-jamant-satr-nyayalay-ne-di-jmanat-1303548
// 13. glibs.in — National Herald mamle par BJP karyalaya gherav me vidhayak/purv-vidhayak sadak par gire — Onkar Sahu ka naam is ghatna me nahi; outlet non-whitelisted bhi = REJECT. URL: https://glibs.in/mla-and-former-mla-fell-face-down-on-the-road-even-before-the-siege/
// 14. sankalpbharatnews.com (do profile-style lekh) — "majboot vipaksh ki bhoomika" wale samanya daave; outlet non-whitelisted; koi vishisht karya/fund nahi = REJECT. URLs: https://sankalpbharatnews.com/?p=70491, https://sankalpbharatnews.com/?p=71821, https://sankalpbharatnews.com/?p=70432
// 15. Business Standard candidate page — halafnama/chunav-aankde (Criminal Cases: No); koi vikas-kaam nahi = REJECT (lead ke roop me darj). URL: https://www.business-standard.com/elections/chhattisgarh-elections/onkar-sahu-candidate-30442
// 16. Vidhayak Nidhi (Rs 4 crore/seat/saal): Bhaskar/Patrika/Haribhoomi/Navbharat me is MLA ki koi itemized sanction list nahi mili; sarkari portal par bhi Dhamtari seat ki Vidhayak Nidhi suchi online uplabdh nahi = entry nahi, lead ke roop me darj.
// 17. Chunav-yachika: koi chunav-yachika/show-cause ka established-media report nahi mila.
// 18. Khul na sake page: Bhaskar ka Telinsatti page poori tarah khola aur padha (accessible hissa); uska AMP version 403 par fail hua — retry nahi kiya; poora article app-gated hone ki disclosure entry note me darj hai.
//
// QA: 1 entry pass — Dainik Bhaskar (whitelisted, page kholkar padha) ki post-event reporting: Telinsatti me vidhayak Onkar Sahu ne anganwadi bhavan (sarkari sanrachna) ka vyaktigat lokarpan aur samudayik bhavan ka bhoomipujan kiya; pehchan "Dhamtari vidhayak Onkar Sahu" se pakki; date page ke relative timestamp ("10 mahine pehle", ~Dec 2025) se month-precision me; fund undisclosed hone ki disclosure note me; koi stage field nahi; 0 negatives — affidavit me Criminal Cases: No aur established media me FIR/janch/dosh-siddhi wala koi vartaman-karyakaal mamla nahi mila; naam-jaal (Baleshwar Sahu, Jaijaipur) se bache.

// ---- Dhamtari district batch END (2 works, 0 negatives) ----

// ---- Balod district batch (researched 2026-10-17) ----

chhattisgarhWorks['sangeeta-sinha'] = [];

// REJECT-LOG (sangeeta-sinha):
// R1. Balod me lift irrigation pariyojna ka bhoomipujan (Nov 2024; ~8 km nahar, Rs 2.84 crore, 356 hectare, aadha-darjan gaon) — ETV Bharat ne cover kiya, jisme MLA ne "hamne prayas kiya" ka shrey liya.
//     Outlet whitelist me NAHI (ETV Bharat), aur credit framing sirf MLA ke dawe par. Koi whitelisted outlet me version nahi mila. REJECT (source + dawa-only).
//     URL: https://www.etvbharat.com/hi/!state/irrigation-project-foundation-stone-laying-in-balod-half-a-dozen-villages-will-get-benefit-chhattisgarh-news-cts24112604206
// R2. dailybalodnews.com ke teen leads — outlet whitelist me NAHI (chhota portal), sab REJECT: (a) Narbada gaon me ~Rs 50 lakh ke karyon ka lokarpan;
//     (b) "mool budget 2023-24 me 117 crore se adhik ke 17 kaam" — itemized sanrachna/vivaran nahi; (c) jansampark anudan mad se 52 hitgrahiyon ko Rs 3.25 lakh (2022 ka — purana karyakaal + daan/rahat prakriti).
//     URLs: https://dailybalodnews.com/?author=3&page=512&paged=741 ; https://dailybalodnews.com/?cat=8&paged=226 ; https://dailybalodnews.com/?paged=18&m=2022
// R3. Haribhoomi (Feb 2024, mela-madai session story): Sangeeta Sinha ne Sanjari Balod chikitsalaya me doctoron ke rikt padon par vidhansabha me sawal uthaya;
//     mantri Shyambihari Jaiswal ka uttar ("naam bata do, 24 ghante me niyukti") vyangyaatmak tha — koi dastaveji nateeja/mantri-ashwasan nahi. Sirf prashn = REJECT.
//     URL: https://www1.haribhoomi.com/state-local/chhattishgarh/news/big-announcement-mela-madai-rs-50-lakh-bastar-dussehra-ramaram-mahotsav-goncha-festival-2024-02-16-10203/amp (page khola nahi — search snippet se pada; khulne layak page nahi = retry lead)
// R4. Dainik Bhaskar — Gurur block ke Armarikala gaon me jila-stariya jan-samasya nivaran shivir me MLA ki upasthiti (PM Awas praman-patra vitaran adi).
//     Sarkari shivir me maujoodgi, vyaktigat bhoomika nahi = REJECT.
//     URL: https://www.bhaskar.com/local/chhattisgarh/balod/news/pm-awas-yojana-completion-certificates-given-for-new-houses-dbp-137598303.html
// R5. Dainik Bhaskar — garba video (2022 ka, 4 saal purana) aur dhan-kharidi par block Congress baithak — karyakram-shirkat/baithak; koi kaam nahi = REJECT.
//     URLs: https://www.bhaskar.com/local/chhattisgarh/balod/news/chhattisgarh-news-mla-played-garba-fiercely-with-the-people-130394469.html ;
//     https://www.bhaskar.com/local/chhattisgarh/durg-bhilai/gurur/news/paddy-procurement-block-congress-appoints-blas-136504040.html
// R6. Navbharat Times — mahila-apradh par grihmantri se aankde maangne wala sawal (Jul 2026 story). Sirf prashn; koi seat-vishesh kaam/nateeja nahi = REJECT.
//     URL: https://navbharattimes.indiatimes.com/state/chhattisgarh/raipur/bjp-or-congress-government-crimes-committed-against-women-home-minister-presents-data-raipur-records-number-of-abductions/articleshow/132433382.cms
// R7. Patrika — Balod acid-attack peedita se aspatal me mulakat, doshiyon ko sakht saza ki maang (Oct 2026). Sahanubhooti visit; bhautik kaam nahi = REJECT.
//     URL: https://www.patrika.com/crime-news/police-form-a-protective-ring-to-save-them-20964246
// R8. Haribhoomi/Patrika/NBT — May 2026 me Chhattisgarh Mahila Congress ki karyakari adhyaksh niyukti. Sangathanik pad; seat-vishesh works nahi = REJECT.
//     URLs: https://www.haribhoomi.com/state-local/chhattishgarh/news/congress-mla-sangeeta-sinha-appointed-working-president-of-women-wing-93946 ;
//     https://www.patrika.com/raipur-news/mla-sangeeta-becomes-acting-state-president-of-mahila-congress-20553802
// R9. visionnewsservice.in — DMFT baithak me kuposhit bachche god lena. Outlet whitelist me nahi + prateekatmak rahat-kaam = REJECT.
//     URL: https://visionnewsservice.in/single-page/136309
// R10. NEGATIVE CHECK: (a) myneta.info 2023 affidavit + Business Standard ADR data — criminal cases 'No' (declared cases 0). Halafname ka akele koi negative nahi.
//      (b) jantaserishta.com par BJP karyakarta ka video-aarop (juaa/satta/avaidh sharab sanrakshan). Outlet whitelist me nahi, article khud kahta hai aaropon ki
//      swatantra pushti nahi hui, koi FIR/adhikari-pusht janch nahi — qualifying negative nahi = REJECT (log-only).
//      URL: https://jantaserishta.com/local/chhattisgarh/congress-mla-from-balod-4793658
//
// RETRY-LEADS:
// L1. Lift irrigation bhoomipujan (R1) — Haribhoomi/Bhaskar/Patrika me post-event reporting mile to entry sambhav (bhoomipujan, sarkari project, Rs 2.84 cr, badge news/dawa).
// L2. Vidhayak Nidhi (Rs 4 cr/seat/saal) ki itemized sanction list Sangeeta Sinha ke liye kisi whitelisted outlet par nahi mili; balod.gov.in par suchi nahi dikhi — jila NIC/jansampark portal par retry.
//
// QA: ~12 web searches (Hindi/English). Whitelist outlets par Dec-2023+ ke Sanjari Balod seat-vishesh bhautik karyon (lokarpan/shilanyas/itemized svikriti) ki koi coverage indexed nahi mili;
// unki maujooda-term media presence lagbhag poori tarah raajnaitik (vidhansabha sawal, virodh, sangathan) hai. Isliye khaali profile (0 entries) — niyam ke mutabik galat entry se khali behtar.


chhattisgarhWorks['anila-bhendia'] = [];
// REJECT-LOG (anila-bhendia, Dondi Lohara): 1. Dainik Bhaskar: "MLA announces construction of community hall in Seoni" (~mid-2026; Rani Durgavati balidan diwas, Gondwana samaj ki maang par manch se ghoshna) — page khola, text paywall/truncated ("app par padhen"); keval ghoshna, execution verified nahi; rule ke mutabik sirf-ghoshna REJECT. URL: https://www.bhaskar.com/local/chhattisgarh/durg-bhilai/daundi-lohara/news/mla-announces-construction-of-community-hall-in-seoni-dbp-138290694.html 2. Dainik Bhaskar: "Congress took care of people of all sections" (Dec 2023; Sivni/Jatadah/Sahgaon/etc gram-daura + Congress ki reeti-neeti par bhashan) — sirf nirikshan/daura + bhashan, koi nirmaan-kaam nahi. REJECT. URL: https://www.bhaskar.com/local/chhattisgarh/durg-bhilai/daundi-lohara/news/congress-took-care-of-people-of-all-sections-anila-bhediya-132288893.html 3. Dainik Bhaskar: Maa Danteshwari mandir, Themabujurg me dev-madai me pooja (~Jan 2026) — dharmik karyakram me upasthiti, kaam nahi. REJECT. URL: https://www.bhaskar.com/amp/local/chhattisgarh/balod/news/the-mla-offered-prayers-at-the-maa-danteshwari-temple-136261959.html 4. jantaserishta.com: Rengni/Jogibhat/Batera/Sivni me samudayik bhavan, mangal bhavan, CC road, school kaksh ka bhoomipujan (2022) — mantri-kaaryakaal (pre-term), current-term seat-kaam nahi. REJECT. URL: https://jantaserishta.com/cg-dpr/protecting-the-interests-of-farmers-villagers-and-laborers-of-the-state-is-the-top-priority-of-the-chhattisgarh-government-minister-anila-bhendia-1368992 5. jantaserishta.com: 36 mahila SHG ko Rs 23.70 lakh cheque (Feb 2022, mantri role me) — pre-term + daan/cheque-vitaran, kaam nahi. REJECT. URL: https://jantaserishta.com/local/chhattisgarh/minister-anila-bhediya-provided-a-check-of-rs-2370-lakh-to-make-women-self-reliant-1150772 6. public.app: Chhattisgarh Budget 2026 ko "vikas-virodhi" batana (Feb 24, 2026) — aggregator platform REJECT + sirf bayaan, koi seat-kaam nahi. REJECT. URL: https://public.app/amp_video/sp_0awm71q9zx3gb 7. dailybalodnews.com: Amrit 2.0 jalpraday yojana bhoomipujan, Nagar Panchayat Dondi Lohara (Nov 2025; Dy CM ka karyakram, Anila ne adhyakshata ki) — chhota non-whitelist portal + dusre neta ka sarkari karyakram, vyaktigat bhoomika documented nahi. REJECT. 8. dailybalodnews.com: Gram Punarakasa (Khairakatta) dharmik-sanskritik karyakram me mukhya-atithi (Jan 2026) — non-whitelist + mukhya-atithi samaroh, kaam nahi. REJECT. 9. dailybalodnews.com: Mahila Diwas feature, Anila + Sangeeta Sinha profile (Mar 2026) — profile piece, koi kaam nahi. REJECT. URL: https://dailybalodnews.com/?p=85718 10. ETV Bharat: Pota Cabin (Bijapur) maamle par Vidhan Sabha me hungama/walkout; Anila ne hostel superintendent ke khilaf FIR-shielding ka aarop lagaya — non-whitelist outlet + collective opposition walkout, koi vyaktigat dastaveji nateeja (janch/ashwasan) documented nahi. REJECT. URL: https://www.etvbharat.com/amp/en/state/uproar-in-chhattisgarh-assembly-over-pota-cabin-case-opposition-stages-walkout-enn26031605150 11. Dainik Jagran (english MP-CG edition): no-confidence debate me Anila ne samuhik-vivah me nakli mangalsutra vitran ka mudda uthaya; mantri Laxmi Rajwade boli Balod se koi shikayat nahi mili — Jagran whitelist me nahi (Navbharat alag outlet hai) + mantri ka inkar, koi nateeja nahi. REJECT. 12. Zee News: Rajya Sabha chunav me vote-disclose karne ka aarop (Saroj Pandey ke agent ne lagaya, Anila ne khandan kiya; Saroj Pandey vs Lekhram Sahu upchunav, ~2020 era) — pre-term + Zee whitelist me nahi + koi FIR/nyayik vikas nahi + jawab (khandan) maujood — negative niyam poora nahi. REJECT/LOG. URL: https://zeenews.india.com/india/rajya-sabha-polls-congress-mla-anila-bhediya-accused-of-disclosing-vote-2093028.html 13. the-journalist.com: 2024 Lok Sabha chunav me Anila ko Theog (Shimla, Himachal) ka observer banaya gaya — party sangathan role, dusre rajya ka, seat-kaam nahi; non-whitelist. REJECT. URL: https://www.the-journalist.com/2-leaders-of-chhattisgarh-and-congress-got-big-responsibility-of-lok-sabha-chhaya-verma-chopal-anila-will-be-the-observer-of-theog/ 14. visionnewsservice.in: DMF shasi parishad baithak me MP/saath ke MLAon ke saath kuposhit bacche god lene ki ghoshna — chhota non-whitelist portal + samuhik gatividhi, vyaktigat shrey documented nahi + daan/rahat-type kaam. REJECT. URL: https://visionnewsservice.in/single-page/136309 15. IBC24/ind24.tv: 2023 chunav voting/result coverage ("lagatar teesri baar jeet", IBC24 interview) — electoral news, kaam nahi; dono hi non-whitelist. REJECT. URL: https://www.ibc24.in/chhattisgarh/cg-dondilohara-result-2023-or-the-ticket-is-canceled-or-the-election-is-lost-this-woman-leader-of-congress-broke-this-tradition-1864178.html
// RETRY-LEADS (parent ke liye): A. Seoni community hall (Bhaskar, ~June 2026) — follow-up execution/report dikhe (lokarpan ya nirman-pragati, whitelisted outlet par) to entry route khul sakta hai; filhaal keval manch-ghoshna. B. Vidhayak Nidhi itemized lists — Balod jila/Dondi Lohara ki swikriti-suchiyan sarkari portal ya whitelisted media par dikhen to itemized entry route; MP wali s3waas PDF (VIDHAYAK NIDHI 2025-26, Sailana entries) CG ki nahi thi. C. CG Vidhan Sabha ki karyawahi/question-list — Pota Cabin hangame ke baad Collector/mantri ka likhit ashwasan ya nakli-mangalsutra mudde par koi janch-adesh whitelisted outlet par dikhe to 'dastaveji nateeja' wala entry route khul sakta hai (opposition MLA ke liye mukhya rasta).
// SOURCES OPENED AND READ (research 2026-10-17): Bhaskar Seoni community-hall page (khola; text paywalled/truncated); Bhaskar Danteshwari-mandir page (search snippet se); baaki sabhi leads search-result snippets se verify hue — whitelisted me koi qualifying item nahi mila.

chhattisgarhWorks['kunwer-singh-nishad'] = [
  // No valid works entries: no whitelist outlet published post-event reporting of
  // his personal lokarpan/shilanyas, itemized Vidhayak Nidhi vitaran, or
  // documentary sanction outcomes attributable to him in Dec 2023 – Oct 2026.
];

// ===== REJECT-LOG (leads only — not entries) =====
// L1. Bhaskar (open + full read, ~Mar 2026): Narmadadham Sursuli me Nishad Samaj
//     samudayik bhavan ka lokarpan — MLA wife sahit shamil hue; bhavan nishad samaj
//     dwara nirmit, sarkari sanrachna nahi; koi fund disclosure nahi. Rule: vyaktigat
//     lokarpan keval bhautik sarkari sanrachna ka (fund+bhoomika disclosed) = REJECT.
//     https://www.bhaskar.com/amp/local/chhattisgarh/durg-bhilai/anda/news/education-is-considered-the-most-powerful-medium-for-the-progress-of-society-137033795.html
// L2. Patrika (29 Sep 2026): Arjuni-Devri underbridge me 7 din se paani — MLA ne
//     narazgi jatai, railway adhikariyon se sampark kiya; koi dastaveji nateeja ya
//     mantri/adhikari-ashwasan report nahi. Sirf prashn/maang = REJECT.
//     https://www.patrika.com/exclusive/motor-pump-submerged-in-water-20947022
// L3. Patrika (Feb 2026): Balod me 163 jodon ka samuhik vivah — MLA sirf vishesh
//     upasthiti me; karyakram mahila bal vikas vibhag ka. Dusre karyakram me
//     maujoodgi = REJECT. https://www.patrika.com/balod-news/today-163-couples-will-tie-the-knot-with-vedic-mantras-20336863
// L4. Patrika (~Feb 2021): Gauraiyadham me sangrahalaya banane ka sansadiya-sachiv
//     roop me statement — pre-term, sirf intent/ghohshna, koi vikas nateeja nahi.
//     Pre-term + sirf ghoshna = REJECT. https://www.patrika.com/balod-news/gauraiyaadhaam-is-not-in-the-list-of-tourist-places-6714762
// L5. Haribhoomi (budget session report, 2025): MLA 50+ prashn puchhne walon me —
//     sirf prashn tally, koi seat-kaam ya dastaveji nateeja nahi = REJECT.
//     https://www.haribhoomi.com/state-local/chhattishgarh/news/cg-assembly-budget-session-10-congress-5-bjp-mla-full-form-5-ruling-mlas-remained-silent-76576
// L6. Haribhoomi (14 Feb 2024): budget satra ke saatven din badhte apradh ka mudda
//     MLA ne uthaya — sirf mudda, koi dastaveji nateeja/ashwasan report nahi = REJECT.
//     https://www1.haribhoomi.com/state-local/chhattishgarh/news/seventh-day-of-budget-session-2024-02-13-9668/amp
// L7. Bhaskar (paddy deadline article, ~Dec 2025): MLA ne dhan uthav shortage aur
//     khareed-limit ka mudda Vidhan Sabha me sahkarita mantri ke samaksh uthaya —
//     prashn ka dastaveji nateeja ya mantri-ashwasan report me nahi = REJECT.
//     https://www.bhaskar.com/local/chhattisgarh/balod/news/the-new-deadline-for-paddy-harvesting-is-april-30th-in-case-of-shortages-the-committee-manager-will-be-held-responsible-and-an-fir-will-be-lodged-136681010.html
// L8. Bhaskar (~Jan 2026): Nishad Samaj ke punah pradesh adhyaksh chune jaane par
//     Tarribharada me samman — samaj activity, seat-kaam nahi = REJECT.
//     https://www.bhaskar.com/local/chhattisgarh/durg-bhilai/tarribharada/news/kunwar-singh-was-honored-on-becoming-the-state-president-again-136929832.html
// L9. dailybalodnews (~Jan 2024): shaskiya primary shala Daukidih me smart class ka
//     shubharambh aur jan-sahyog se manch ka bhoomipujan — non-whitelist portal =
//     REJECT. https://dailybalodnews.com/?p=53847
// L10. dailybalodnews (Mar 2026): 'Holi par saugat' — state budget 2026-27 me
//      sinchai/sadak/pul kaaron ki samavesh ka 'prayas'-level credit; non-whitelist
//      portal, pre-event/budget announcement = REJECT. https://dailybalodnews.com/?p=85532
// L11. dailybalodnews archives (Dec 2024-Jan 2025): Chichbodh swasthya kendra bhavan
//      aur mandir-stage ka bhoomipujan, bhajan sandhya, vaarshik utsav me maujoodgi —
//      non-whitelist portal = REJECT. https://dailybalodnews.com/?cat=5&page=26&paged=21
// L12. public.app (Apr 2026): Degrapar Karma Jayanti me bhavan ke liye Rs 10 lakh
//      dene ki ghoshna — REJECT-listed source + sirf grant-ghoshna = REJECT.
//      https://public.app/amp_video/sp_5j5eoqmm4hde5
// L13. public.app (Oct 2025): Arjunda me shikshak samman samaroh — samman samaroh,
//      koi karya nahi; REJECT-listed source = REJECT. https://public.app/amp_video/sp_7oz0jl0o2x2hq
// L14. cgmitan/news24carate (Jun 2024): Kesara (Patan) Nishad bhavan lokarpan —
//      non-whitelist portals; mukhya atithi Bhupesh Baghel, MLA sirf adhyaksh roop
//      me samaj karyakram me; samaj bhavan, koi sarkari fund nahi = REJECT.
//      https://cgmitan.com/the-importance-of-nishads-has-been-described-since-the-time-of-mythology-ramayana-and-mahabharata-nishad-society-is-hardworking-honest-and-dutiful-bhupesh-baghel/
// L15. pradeshruchi (Aug 2026): sinchai paani ke liye Collector ko patra —
//      non-whitelist portal + sirf maang/patra, koi dastaveji nateeja nahi = REJECT.
//      https://pradeshruchi.com/?tag=politics-public-service
// L16. Whitelist sweep (The Hindu, Indian Express, NDTV, India Today, TOI): MLA par
//      koi seat-work reporting nahi mili; sirf chunav-result profiles (ADR halafnama
//      summary) — seat-kaam nahi = REJECT.

// ===== NEGATIVES =====
// None. 2023 halafnama (ADR/Business Standard) me criminal cases: No. ThePrint PTI
// item me Mathura (UP) Congress spokesperson 'Kunwar Singh Nishad' — UP ka alag
// vyakti, Gunderdehi MLA se sambandhit nahi. Established media me MLA ke khilaf koi
// FIR, naam-daar jaanch ya vartaman-karyakaal nyayik vikas nahi mila. Family matters
// excluded.

// ---- Balod district batch END (0 works, 0 negatives) ----// ---- Durg district batch (researched 2026-10-17) ----
// 6 MLA: bhupesh-baghel (Patan, INC, purva-CM), lalit-chandrakar (Durg Gramin, BJP),
// gajendra-yadav (Durg City, BJP, mantri Aug 2025), devendra-yadav (Bhilai Nagar, INC),
// rikesh-sen (Vaishali Nagar, BJP), domanlal-korsewada (Ahiwara SC, BJP).
// Foundation record pehle padhe: bhupesh-baghel 63, Patan, INC, ex-CM 17 Dec 2018-3 Dec 2023,
// 1 affidavit case; lalit-chandrakar 49, Durg Gramin (ex DURG-RURAL), BJP, 0 cases;
// gajendra-yadav 45, Durg City, BJP, 1 affidavit case (IPC 147/341), mantri 20 Aug 2025
// (School Education, Village Industries, Law); devendra-yadav 33, Bhilai Nagar, INC,
// 4 affidavit cases; rikesh-sen 42, Vaishali Nagar, BJP, 2 affidavit cases;
// korsewada 75, Ahiwara SC, BJP, 0 cases, oldest MLA, MLA since 2008, returned 2023.
// NAAM-JAAL: Devendra Singh Yadav (Balodabazar Congress) alag vyakti hai — uske entries
// devendra-yadav (Bhilai Nagar) se nahi milane.
// QA (coordinator ne khud 6 source pages padhe): Bhupesh IE Mahadev page, NBT sex-CD page,
// HT Devendra arrest page, Haribhoomi shav-yatra page (Rs 5 lakh jurmana ka tathya page par
// NAHI mila — worker draft me galat darj tha, hata diya), Haribhoomi bail page (URL khud
// dhoondhi: .../news/balodabazar-violence-mla-devendra-yadav-supreme-court-bail-72458,
// 20 Feb 2025), Bhaskar Lalit page, NBT Rikesh page. Note-grounding niyam: note me SIRF
// cited page ke tathya (IE entry se ED/Asim Das/TOI wale tathya hata diye; NDTV entry se
// non-page tathya hata diye; Rikesh entry poorn roop se Hinglish me likhi gayi — worker
// English me likh aaya tha). Har MLA ka chhattisgarhWorks['<slug>'] assignment lazmi.
// Negatives me koi stage field NAHI (verified: grep).
chhattisgarhWorks['bhupesh-baghel'] = [
  {
    title: 'Mahadev app mamle me CBI FIR me purva-CM Bhupesh Baghel aaropi — nivas-parisaron par chhaape ke 6 din baad FIR me naamzad; EOW ne March 2024 me book kiya, August 2024 me case CBI ko transfer hua',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/india/cbi-books-ex-chhattisgarh-cm-baghel-in-mahadev-betting-app-case-9919177/',
    date: '2025-04-02',
    note: 'Indian Express (2 Apr 2025) ki reporting: Mahadev gambling app case me unke niji aur sarkari nivas-parisaron par chhaape ke 6 din baad CBI sutron ne unhe FIR me aaropi ke roop me naamzad kiya; EOW ne pehle March 2024 me unhe book kiya tha; August 2024 me case CBI ko transfer hua, CBI ne FIR darj ki (contents public nahi); FIR me unke alava 18 aur aaropi hain. Baghel ka jawab page par hai: unhone kisi shamiliyat se inkaar kiya aur ED ki karyavahi ko rajnaitik bataya. Bete Chaitanya Baghel ki ED giraftari (Jul 2025) parivar ka mamla hai — is entry se nahi jodi gayi.',
    period: '2023-2028',
  },
  {
    title: 'Sex-CD mamle me 24 Jan 2026 ke charge-framing aadesh ke khilaf purva-CM Bhupesh Baghel ko High Court se antarim raahat — special CBI court ki aage ki karyavahi par rok',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Navbharat Times',
    sourceUrl: 'https://navbharattimes.indiatimes.com/state/chhattisgarh/raipur/major-relief-for-bhupesh-baghel-in-cd-scandal-high-court-stays-trial-morphed-video-of-rajesh-munat-had-gone-viral/articleshow/132738759.cms',
    date: '2026-07-30',
    note: 'Navbharat Times (30 Jul 2026) ki reporting: Chhattisgarh High Court (Bilaspur) ne Baghel ki yachika par antarim raahat di aur CBI ki special court me chal rahi aage ki karyavahi par rok laga di; Baghel ne 24 Jan 2026 ke special court ke aarop-tay (charge-framing) aadesh ko chunauti di thi; detailed order ka intezaar; aarop hai ki unhone BJP neta/purva mantri Rajesh Munat ki chhavi kharab karne ke liye CD viral karwayi thi; 2017 me Munat ka morphed video viral hua tha. Unka jawab page par darj nahi (anupasthiti disclosed).',
    period: '2023-2028',
  },
];

// REJECT-LOG (bhupesh-baghel): 1. Bete Chaitanya Baghel ki ED giraftari (Jul 2025) — parivar ka mamla; established report me Bhupesh Baghel usi mamle me aaropi nahi = attributed NAHI. 2. Purva-CM-kaal (2018-23) ke kaam — vartaman MLA-roop ke seat-kaam nahi = excluded. 3. Retries: kala-manch lokarpan (non-whitelist), Vidhayak Nidhi itemized list (nahi mili).
chhattisgarhWorks['lalit-chandrakar'] = [
  {
    title: 'MLA Lalit Chandrakar ne Ruabandha ward-2 me Rs 10 lakh ki lagat se bane Satnam Samaj ke samajik bhavan ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    sourceUrl: 'https://www.bhaskar.com/local/chhattisgarh/durg-bhilai/news/satnam-samaj-gets-new-building-in-ruabandha-inauguration-takes-place-136888280.html',
    date: '2026-01-06',
    note: 'Dainik Bhaskar ki post-event reporting: MLA ne vyaktigat roop se lokarpan kiya; bhavan ki lagat Rs 10 lakh batayi gayi; bhavan Satnam Samaj ko samarpit; fund-source page par disclosed nahi. Disclosure: page par event-date timestamp nahi hai; date page-metadata ke relative timestamp (~7 mahine pehle) se anumaanit hai.',
    period: '2023-2028',
    stage: 'lokarpan',
  },
];

// REJECT-LOG (lalit-chandrakar): Hammar clinic bhoomipujan (kadwaghut), Nagpura boundary wall + Mahatari Sadan (dakshinapath), Vivekanand Marg (emsindia), Nikum college (cgmitan), Nikum Ullas Navbharat udghatan (cgmitan), Amlidih gurukul (thecgnews), PM Awas chaabi vitran (tricityexpress), Ruabandha duplicate (dainikvishwapariwar) — sab non-whitelist = retry-leads.
chhattisgarhWorks['gajendra-yadav'] = [];

// REJECT-LOG (gajendra-yadav, Durg City, mantri): 16 rejects — sab se mukhya: (1) Bhaskar 'Durg me ab school ki garmi-pariksha timing' = mantri-niyamay bhoomika, seat-kaam nahi; (2) Patrika 'Durg me Rs 42 crore ke vikas karyon ka bhoomipujan/lokarpan' = pre-event ghoshna; (3) NDTV 'Durg me 100 dinon me 50 sarkaari bhavan' = sirf ghoshna; (4) Bhaskar 'Durg me naya bus stand' = proposal-matrr; (5) Haribhoomi 'Durg me 15 smart classrooms' = mantri-bhoomika, seat-specific nahi; (6) mantri-bangalow/CM-alo house = personal; (7) rest — nagar-nigam/municipal bina vyaktigat bhoomika, ya pre-event ghoshna, ya non-whitelist.
chhattisgarhWorks['devendra-yadav'] = [
  {
    title: 'Balodabazar hinsa (Rs 12 crore aagjani) mamle me Congress MLA Devendra Yadav 17 Aug 2024 ko giraftar — SP Vijay Agrawal ne teen notice/samman ke baad karyavahi ki; MLA ka jawab: karyakartaon ko jhoothe phansaaya gaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan Times',
    sourceUrl: 'https://www.hindustantimes.com/cities/others/cong-mla-devendra-yadav-arrested-in-100-crore-balodabazar-arson-case-101723909831897.html',
    date: '2024-08-18',
    note: 'HT (18 Aug 2024) ki reporting: Balodabazar hinsa mamle me Bhilai Nagar ke Congress MLA Devendra Yadav 17 Aug 2024 ko giraftar; SP Vijay Agrawal ke anusar teen notice/samman ke baad karyavahi hui; nyayik hirasat (20 Aug tak remand); dharaen 153A/120B/147/186/353/307 aur PDPP; 10 Jun 2024 ki hinsa — 100+ vahan, sarkari bhavan aur records me aag, 50+ policekarmi ghayal; sarkar ne Rs 12 crore ka dava kiya. Yadav ka jawab: Congress karyakartaon ko jhoothe phansaaya gaya, ve poochtachh ke liye upasthit hue. Bhupesh Baghel ki pratikriya: ye rajnaitik badla (political vendetta) hai.',
    period: '2023-2028',
  },
  {
    title: 'Balodabazar hinsa mamle me lagbhag 6 mahine jail ke baad Supreme Court ne Bhilai Nagar MLA Devendra Yadav ko 20 Feb 2025 ko jamanat di — mantri Dayaldas Baghel: nyayalay ka faisla sarvamanya hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Haribhoomi',
    sourceUrl: 'https://www.haribhoomi.com/state-local/chhattishgarh/news/balodabazar-violence-mla-devendra-yadav-supreme-court-bail-72458',
    date: '2025-02-20',
    note: 'Haribhoomi (20 Feb 2025) ki reporting: Balodabazar hinsa mamle me lagbhag 6 mahine (17 Aug 2024 se) jail me rehne ke baad Supreme Court ne Devendra Yadav ki jamanat yachika manzoor ki; Congress ne ise satya ki jeet bataya; mantri Dayaldas Baghel ne kaha nyayalay ka faisla sarvamanya hai, us par ve tippani nahi karenge; TS Singhdeo ne bhi ise nyay ki jeet bataya. Jamanat ke baad trial ki prakriya adalat me vicharadheen rahi (Patrika 1 Aug 2026 HC report).',
    period: '2023-2028',
  },
  {
    title: 'Balodabazar hinsa mamle me sunvai ki gati par High Court sakriya — 18 jilo ki adalaton se purane mamalon ki report talab (Aug 2026)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Patrika',
    sourceUrl: 'https://www.patrika.com/news/chhattisgarh-2026/chhattisgarh-high-court-seeks-report-from-18-district-courts-20198125',
    date: '2026-08-01',
    note: 'Patrika (1 Aug 2026) ki reporting: Bilaspur High Court ne 18 jilo ki adalaton se Devendra Yadav ke mamalon sahit purane mamalon ki nyayik prakriya ki report maangi; sunvai ki gati ab High Court ki nigrani me — vartaman karyakaal ka nyayik vikas. Unka jawab page par darj nahi (anupasthiti disclosed).',
    period: '2023-2028',
  },
  {
    title: 'Mantri Dayaldas Baghel ki prateekatmak shav-yatra nikalne par Bhilai Nagar MLA Devendra Yadav samet 17 Congress netaon par FIR — 300+ gauvansh maut par 9 May ka virodh',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Haribhoomi',
    sourceUrl: 'https://www.haribhoomi.com/state-local/chhattishgarh/news/bhilai-minister-dayaldas-baghel-mla-devendra-yadav-fir-registered-95093',
    date: '2026-05-12',
    note: 'Haribhoomi (12 May 2026) ki reporting: Durg jile ke Jhiriya gaon me 300+ gauvansh ki maut ke mamle me mantri Dayaldas Baghel ki prateekatmak shav-yatra nikalne par MLA Devendra Yadav samet 17 Congress netaon par FIR; mantri ke paksh se Chandu thane me shikayat darj; 9 May ka virodh. Yadav ka jawab: hum Yaduvanshi hain, gau mata ka shoshan bardasht nahi karenge; BJP gau mata ke naam par vote leti hai. Congress ne ise janhit ka mudda bataya; BJP ne ise rajnaitik drama bataya. (Note: worker draft me darj \"Rs 5 lakh jurmana\" page par nahi mila — hata diya.)',
    period: '2023-2028',
  },
  {
    title: 'Coal-levy mamle me EOW/ACB ne Bhilai Nagar MLA Devendra Yadav ko notice diya — 5 Oct 2026 ko Raipur special court me upasthit hone ka nirdesh',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'NDTV',
    sourceUrl: 'https://mpcg.ndtv.in/videos/shows/ndtvmpcg-exclusive/cg-mla-devendra-yadav-gets-eow-acb-notice-in-coal-scam-case-10385805',
    date: '2026-10-02',
    note: 'NDTV (2 Oct 2026) ki video-report: Bhilai ke MLA Devendra Yadav ko EOW/ACB ne notice diya; 5 Oct 2026 ko Raipur special court me upasthit hone ka nirdesh; mamla coal-levy se juda; pehle se chargesheet dakhil; anek dharaon me mamla darj. Unka jawab page par darj nahi (anupasthiti disclosed).',
    period: '2023-2028',
  },
];

// REJECT-LOG (devendra-yadav): affidavit ke pending mamle akele = negative nahi; public.app/FB leads non-whitelist.
chhattisgarhWorks['rikesh-sen'] = [
  {
    title: 'BSP me loha-kabad chori ka mudda Vaishali Nagar MLA Rikesh Sen ne lagatar uthaya — rajya sarkar ne 25 Sep 2026 ko CBI janch ko sahmati di; 21 giraftariyan, Rs 3.22 crore ka maal zabt',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Navbharat Times',
    sourceUrl: 'https://navbharattimes.indiatimes.com/state/chhattisgarh/raipur/chhattisgarh-government-approves-cbi-probe-into-iron-theft-case-at-bhilai-steel-plant/articleshow/134565425.cms',
    date: '2026-09-29',
    note: 'NBT (29 Sep 2026) ki reporting: Bhilai Steel Plant me loha-kabad chori ki janch ab CBI karegi; rajya sarkar ne 25 September 2026 ko adhisuchna jaari ki; Vaishali Nagar MLA Rikesh Sen ne mudda lagatar uthaya (page ke anusar) aur unhone Union Home Minister Amit Shah, CM Vishnu Deo Sai aur Dy CM Vijay Sharma ka aabhar jataya; Purani Bhilai thane ka mamla; flue dust me chhipakar chori ka tarika; 21 log giraftar (BJP padadhikari aur BSP adhikari samet); Rs 3.22 crore ka scrap, vahan aur machine zabt; May 2026 me police ne Hathkhoj ke vyapari se maal baramad kiya. Disclosure: yeh Vidhansabha-maang ka dastaveji nateeja hai (bhautik nirman nahi); janch ka faisla rajya sarkar ka tha.',
    period: '2023-2028',
  },
];

// REJECT-LOG (rikesh-sen): college Rs 4.98 crore PM-USHA sanction (dailychhattisgarh, Haribhoomi page 404), Rs 9.16 crore road bhoomipujan (cgbhaskar), Rs 5.25 crore Priyadarshini sanction (cgbhaskar), Rs 2.78 crore market works (thecgkhabar), 41 anganwadi (dailychhattisgarh), 16 Gen Z schemes ghoshna (patrika), AI chatbot (haribhoomi), PM Awas mulakat (haribhoomi, maang-matrr), Rs 1 spectacles (haribhoomi, daan), free water plant (bhaskar, daan) — sab non-whitelist ya rule-excluded = retry-leads.
chhattisgarhWorks['domanlal-korsewada'] = [];

// REJECT-LOG (domanlal-korsewada): whitelisted leads nahi mile (non-whitelist leads matrr); retries: Vidhayak Nidhi itemized list.

// ---- Durg district batch END (2 works, 7 negatives) ----

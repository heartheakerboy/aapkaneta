// Karnataka — neta-war kaam (works) ka placeholder.
// Mining baad me hogi: MLA kshetra-vikas nidhi ke tahat vikas karyon ke record
// jama karke yahan jode jayenge. Abhi khaali export — all.ts me wiring live hai, koi page nahi tootega.
// Karyakaal: 16th Karnataka Vidhan Sabha, 2023-2028.
// Fund tathya: Karnataka me MLA kshetra vikas nidhi (KLLADS/MLALAD) ki vartaman sthiti
// foundation-research me verify hogi — yahan sirf established-source tathya jode jayenge.
// Whitelist (Karnataka): The Hindu, Indian Express (incl. newindianexpress.com), Hindustan Times,
// NDTV, India Today, Times of India, Deccan Chronicle, The Hans India, PTI (established outlet par).
export const karnatakaWorks: Record<string, any[]> = {};


// ============================================================================
// BATCH 1 (Bagalkot + Ballari + Bangalore Rural — 3/31 jile)
// ============================================================================

// --- Bagalkot ---

// REJECT-LOG (timmapur-ramappa-balappa): Republic Day 2025 Bagalkot me Akka Cafe/canteen ghoshna (sirf ghoshna, post-event nahi; Hindu 26 Jan 2025); Bagalkot Medical College shilanyas CM ne kiya (MLA sirf maujood; TOI); Excise vibhaagiya kaam (NIE 3 Sep 2025) — mantri-kaam, seat kaam nahi; Sameerwadi ganne ke nuksaan ka nirikshan + ashwasan (DC 15 Nov 2025) — daura akela; plant festival shubharambh (newskarnataka, non-whitelist). Halafname ke 2 pending mamle akele negative nahi.
karnatakaWorks['timmapur-ramappa-balappa'] = [];

// QA-DROP (coordinator, siddu-savadi): worker ne Nov 2020 Mahalingapura dhakka-mukki (Indian Express) ka negative diya tha — pre-term ghatna, May 2023 ke baad koi nyayik vikas nahi (worker ne khud disclose kiya). Negative-rule fail — DROPPED. REJECT-LOG: Rani Channamma statue unveiling (IBC, non-whitelist + statue bhautik sarkari sanrachna nahi); CM Bommai dwara Feb 2023 Teradala lokarpan (pre-term); TOI Hubballi bypoll/budget coverage (seat-scope bahar).
karnatakaWorks['siddu-savadi'] = [];

// REJECT-LOG (jagadeesh-shivayya-gudagunti): CMIDP fund bhedbhaav par MLA ki HC PIL (WP 32024/2025, Hindu 29 Oct 2025) — yachika hai, kaam nahi; negative bhi nahi (MLA petitioner hai). DSS protest/speech (Hindu Oct 2023) — koi kaam/FIR nahi. Rajya Sabha MP Iranna Kadadi ka MPLADS (Govt Kannada HPS smart boards) — MP ka kaam. WATCH: PIL hearing Jan 21, 2026 — parity aadesh + sanction hua to swikriti entry possible.
karnatakaWorks['jagadeesh-shivayya-gudagunti'] = [];

// REJECT-LOG (j-t-patil): Heggur GP building + solid waste processing unit lokarpan (IBC 3 Oct 2025) — event valid, source non-whitelist; Indira Canteen nirikshan (DH 21 Sep 2026) — daura akela; TOI "PDO to task" — drama, kaam nahi; Kadarakoppa/Anawala lift irrigation shilanyas (Hindu 12 Oct 2026) — CM karenge, MLA sirf prep-meeting me; rain-damage daura + maang (IBC, non-whitelist); May 2021 "refutes charge" (pre-term). RETRY-LEAD: Heggur lokarpan ka whitelisted outlet coverage mile to entry.
karnatakaWorks['j-t-patil'] = [];

// REJECT-LOG (b-b-chimmanakatti): Immadi Pulakeshi statue shilanyas Badami me CM ne kiya (MLA sirf maujood; Hindu 19 Jan 2026); Chalukya Utsav CM ne udghatan kiya (Hindu 19-20 Jan 2026) — event, sanrachna nahi; Mena Basadi road (Tourism Minister ne clear kiya, pre-event); fire station udghatan (Home Minister ne, publictv non-whitelist). PEHCHAAN-QA: vartaman MLA Bhimsen (putra) hain — pita B.B. Chimmanakatti ke 2018-20 mamle (indiankanoon, daijiworld) mix nahi hue, sahi reject.
karnatakaWorks['b-b-chimmanakatti'] = [];

// REJECT-LOG (umesh-hullappa-meti): 2026 bypoll-vijeta (Apr 2026, pita H.Y. Meti ke nidhan Nov 2025 ke baad) — karyakaal sirf May 2026 se. Bagalkot Govt Medical College shilanyas CM ne kiya (MLA banne se pehle, + pita ka credit); MLA ne sirf nirikshan kiya (TOI Oct 2026); Almatti land-acquisition meeting (Asianet, non-whitelist + maang akeli); drought assessment daura (DH Oct 2026) — daura akela. Pita ke 2017 mamle beta par nahi.
karnatakaWorks['umesh-hullappa-meti'] = [];

// QA: vijayanand-kashappanavar mantri (Small Scale Industries, 3 Aug 2026) bane — pad hai, Hungund seat ka kaam nahi. REJECT-LOG: Badami me CM dwara Pulakeshi statue shilanyas (MLA sirf maujood; Hindu 19 Jan 2026); Upper Krishna/Malaprabha badi pariyojnayein — vyaktigat bhoomika nahi; 2013-18 ke TOI/toplines purane mamle (pre-period); halafname ke 11 pending mamle akele negative nahi. MLA ka apna pink-granite quarry proposal (KSPCB docs) — vyapar, kaam nahi.
karnatakaWorks['vijayanand-shivashankarappa-kashappanavar'] = [];

// --- Ballari ---

// REJECT-LOG (j-n-ganesh): Rs 80 crore education ailaan (newskarnataka, 12 Sep 2024) — non-whitelist + sirf ghoshna (Hampadevanahalli hostel + Emmiganoor college prastav-star par); Anand Singh assault case (FIR Jan 2019, bail Apr 2019) — pre-period, May 2023 ke baad koi nyayik vikas nahi; Janardhan Reddy ka canal-water road-block (DC Oct 2026) — dusre neta ka kaam. KHDC chairman (Jan 2024) — pad hai, kaam nahi.
karnatakaWorks['j-n-ganesh'] = [];

// FLAG (coordinator → parent): worker ne election records se Siruguppa ko ST-reserved bataya; foundation brief me SC tha. Foundation me change NAHI kiya — verify karna baki. REJECT-LOG: Budget 2026-27 Praja Soudha prastav (bharathorizon, non-whitelist + pre-event); generic tenders me MLA ki vyaktigat bhoomika nahi; halafname me 2023 me zero criminal cases.
karnatakaWorks['b-m-nagaraja'] = [];

// Valmiki Corporation saga — 6 stage-accurate entries (pehle teen 2024, baad wale teen 2026). MLA khud aaropi, sab The Hindu/Deccan Herald par khole-padhne gaye. SEAT-QA (coordinator → parent): worker ne seat "Ballari Rural" pakki ki — brief me "Ballari" thi; foundation record verify karna baki (koi edit nahi ki).
karnatakaWorks['b-nagendra'] = [
  {
    title: 'Valmiki Corporation vittiya aniyamittaon ke aaropon ke beech Ballari Rural MLA B. Nagendra ne Karnataka cabinet se mantri-pad se istifa diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/valmiki-corporation-fraud-karnataka-minister-b-nagendra-resigns/article68259020.ece',
    date: '2024-06-06',
    note: 'Scheduled Tribes Welfare, Youth Empowerment and Sports mantri aur Ballari Rural ke four-time MLA B. Nagendra ne 6 June 2024 ko press conference me istifa ka elaan kiya aur CM Siddaramaiah ko istifa-patra saumpa. Istife ke peeche Karnataka Maharshi Valmiki Scheduled Tribes Development Corporation se paiso ke avaidh transfer ke aarop the; ghotaala corporation ke accounts superintendent Chandrasekharan P. ki 26 May ko maut ke baad saamne aaya, jinke death note me illegal transfer ka aarop tha. Nagendra ne kaha ve apne vivek se, nishpaksh jaanch sunischit karne ke liye istifa de rahe hain aur CM ya Dy CM ka koi dabav nahi tha. SIT ne us samay tak corporation ke former MD J.B. Padmanabh aur accountant Parushurama G. ko giraftaar kiya tha; BJP ne Vidhana Soudha se Raj Bhavan tak march nikaalkar Nagendra aur CM ke istife ki maang ki thi.',
    period: '2023-2028',
  },
  {
    title: 'Valmiki Corporation ghotaale me ED ne Ballari Rural MLA B. Nagendra ko money-laundering jaanch me giraftaar kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/former-minister-b-nagendra-remanded-to-judicial-custody-in-connection-with-alleged-scam-in-karnataka-maharshi-valmiki-scheduled-tribes-development-corporation/article68432181.ece',
    date: '2024-07-12',
    note: 'Enforcement Directorate ne 12 July 2024 ko B. Nagendra ko Prevention of Money Laundering Act (PMLA) ke tahat giraftaar kiya; giraftaari se pehle 13 ghante se zyada poochtaachh hui aur agency ne chaar rajyon me 23 parisaron par talashi li thi. Special court ne pehle 6 din, phir 5 din ki ED hirasat di; 22 July ko unhe 14 din ki nyayik hirasat me bheja gaya. ED ka dawa tha ki Valmiki Corporation se takreeban Rs 89.63 crore ka avaidh transfer hua aur paisa May 2024 ke Ballari Lok Sabha chunaav me lagaya gaya; agency ne unhe apne chargesheet me ghotaale ka mastermind bataya. Nagendra ka jawab — unhone kaha unhe corporation me hone wali gatividhiyon ki koi jaankari nahi thi, unhe phasaya ja raha hai, aur ED ko sahyog na karne ka aarop bhi galat hai. Death note me Chandrasekharan ne dawa kiya tha ki adhikariyon ne mantri ke nirdesh ka hawala dekar transfer ke liye dabav dala tha.',
    period: '2023-2028',
  },
  {
    title: 'Valmiki Corporation mamle me special court se jamanat milne par Ballari Rural MLA B. Nagendra Parappana Agrahara jail se riha hue',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/arrested-mlas-nagendra-and-munirathna-released-after-being-granted-bail/article68759662.ece',
    date: '2024-10-14',
    note: 'Special Court of Sessions (former/present MPs-MLAs ke khilaaf aaparaadhik mamle) ne 14 October 2024 ko B. Nagendra ko jamanat di, jiska mukhya aadhaar tha ki rajya sarkar ki SIT ki chargesheet me unhe aaropi nahi banaya gaya tha aur us case me trial abhi shuru nahi hua tha. Ve 16 October 2024 ko Bengaluru ke Parappana Agrahara central jail se riha hue — lagbhag 3 mahine jail me rahe. Rihaai ke baad unhone aarop lagaya ki ED ne un par CM Siddaramaiah aur Dy CM D.K. Shivakumar ka naam ghotaale me lene ka dabav dala, jise unhone thukra diya; unhone ye bhi kaha ki SIT ne unka naam saaf kiya tha. Unhone ghotaale me koi bhoomika hone se inkaar kiya aur dawa kiya ki paisa ka koi durupyog nahi hua. Baad me ED ne Karnataka High Court me jamanat radd karne ki yachika dayar ki, jis par court ne Nagendra ko notice jaari kiya.',
    period: '2023-2028',
  },
  {
    title: 'B Nagendra 3 August 2026 ko Karnataka cabinet me dobara mantri bane, CM Shivakumar ne kaha official report me ve Valmiki ghotaale me shaamil nahi paye gaye',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/karnataka/cm-shivakumar-defends-nagendras-induction-says-karnataka-will-get-woman-minister-in-a-couple-of-days-4124629',
    date: '2026-08-03',
    note: 'Deccan Herald ki 26 Aug 2026 ki report ke anusaar CM D K Shivakumar ne India Today Roundtable me B Nagendra ko cabinet me shaamil karne ka bachav kiya aur kaha ki Nagendra ko mantri tab banaya gaya jab ek official report me ve Karnataka Maharshi Valmiki Scheduled Tribes Development Corporation ke Rs 89-crore ghotaale me shaamil nahi paye gaye. CM ke shabd the: “It was not Nagendra who did it”, aur unhone kaha ki jaanch me 95% paisa vasool ho chuka hai. Report me darj hai ki Shivakumar ne 3 August ko cabinet ka vistaar karke 19 mantri shaamil kiye the, jabki BJP Nagendra ko hatane ki maang par vidhanmandal ke andar aur bahar virodh kar rahi thi. Iss report me Nagendra ka apna koi bayan darj nahi hai. Date-note: report me “August 3” likha hai aur report 26 Aug 2026 ko publish hui, isliye tithi 2026-08-03 rakhi gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'CBI ne Governor Thaawarchand Gehlot se B Nagendra ke khilaaf Valmiki case me prosecution sanction manga, Governor ne Council of Ministers se salah maangi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/karnataka/resigning-to-ensure-congress-govt-under-kharge-shivakumar-remains-unblemished-b-nagendra-4127784',
    date: '2026-08-28',
    note: 'Deccan Herald ki 29 Aug 2026 ki report ke anusaar CBI ne B Nagendra ke khilaaf Valmiki Corporation case me prosecution ke liye Governor Thaawarchand Gehlot se sanction ka anurodh kiya tha, aur Governor ne iss anurodh par Council of Ministers se salah maangi thi, jisse sarkar kathin sthiti me pad gayi thi. Report me sanction-anurodh ki sahi tithi darj nahi hai, isliye entry ki date report ki ghatna-tithi 2026-08-28 rakhi gayi hai. Iss report me sanction par Nagendra ka seedha koi bayan darj nahi hai, lekin unhone jaanch agencies ko “selective in action” batate hue kaha tha ki ve BJP aur JD(S) ke netaon jaise H D Kumaraswamy ko nazarandaaz karti hain.',
    period: '2023-2028',
  },
  {
    title: 'B Nagendra ne 28 August 2026 ko Valmiki ghotaale ke dabav me Karnataka cabinet se doosri baar istifa diya, kaha party ki chhavi par daag na lage isliye khud istifa de rahe hain',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/karnataka/resigning-to-ensure-congress-govt-under-kharge-shivakumar-remains-unblemished-b-nagendra-4127784',
    date: '2026-08-28',
    note: 'Deccan Herald ki report ke anusaar Planning and Statistics mantri B Nagendra ne Friday (28 Aug 2026) ko D K Shivakumar cabinet se “voluntarily” istifa de diya. Press meet me bhavuk hote hue unhone kaha: “I am resigning on my own will to ensure that the Congress government and the party’s image under Mallikarjun Kharge, Rahul Gandhi and Chief Minister D K Shivakumar remains unblemished.” Ye mantri banne ke keval 25 din baad aur Valmiki Corporation fund-diversion par cabinet se unka doosra istifa tha; pehla istifa June 2024 me Siddaramaiah cabinet se Tribal Welfare mantri ke roop me diya tha. Elan se pehle Nagendra Delhi me kendriya netritva se vichaar-vimarsh ke baad Bengaluru laute aur CM se mile; unhone kaha ki CM ne unse kaha tha ve “not at fault” hain. Unhone BJP par Dalit hone ke kaaran nishaana banane ka aarop lagaya aur ise “modern-day Manuvadis” ki saazish bataya, kisi bhi bhoomika se inkaar kiya aur kaha ki SIT aur CID ne unhe clean chit di thi jabki “Centre’s puppet ED” ne unhe giraftaar karke teen mahine jail bheja tha. Unhone BJP ko “people’s court” me saamna karne ki chunauti di aur apni vidhansabha seat se bhi istifa dene ki peshkash ki. Date-note: report me “Friday” likha hai aur report 29 Aug 2026 ko publish hui; calendar se 28 Aug 2026 Friday tha, isliye tithi 2026-08-28 rakhi gayi hai.',
    period: '2023-2028',
  },
];

karnatakaWorks['nara-bharath-reddy'] = [
  {
    title: 'Ballari City ke MLA Nara Bharath Reddy ne Karimaremmana Colony me naye Namma Clinic ka lokarpan kiya',
    category: 'Aspataal',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/namma-clinic-inaugurated-in-ballari/article69850557.ece',
    date: '2025-07-24',
    note: 'The Hindu ke anusaar MLA ne Ballari sheher ke Karimaremmana Colony me naye Namma Clinic ka udghatan kiya (report me Thursday likha hai — calendar check se 24 July 2025 Thursday tha); clinic zila prashasan, Zilla Panchayat, District Health and Family Welfare Department aur Ballari City Corporation ki sanyukt pahal par sthapit hui; zila bhar me 2023-24 me 12 aur 2024-25 me 8 aur Namma Clinics (jisme 6 Ballari sheher ke) sanction hue; usi din Srirampura Colony aur APMC Yard me bhi clinics khule lekin unme MLA ke udghatan ka zikr nahi; fund-srot srot me ghoshit nahi (LAD/KLLADS ka zikr nahi).',
    period: '2023-2028',
  },
  {
    title: 'MLA Nara Bharath Reddy ke patra par vidhi mantri ne Ballari District Court Complex ke liye Rs 21.90 crore jari karne ka ashwasan diya',
    category: 'Any',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/release-of-pending-funds-assured-for-work-on-court-complex-in-ballari/article67180351.ece',
    date: '2023-08-10',
    note: 'The Hindu ke anusaar MLA ke patra par Law and Parliamentary Affairs Minister H.K. Patil ne Cabinet me mudda uthane ka ashwasan diya aur Finance Department ko patra likha; court complex ki lagat pehle Rs 85 crore thi, baad me High Court ke nirdeshon par Rs 121.90 crore (revised) hui, jisme se Rs 21.90 crore jari hona baaki tha; report ke waqt tak rihai hui nahi thi — dastaveji nateeja mantri ka ashwasan aur patra hai, MLA ka credit is maang ko uthane tak seemit.',
    period: '2023-2028',
  },
];

// REJECT-LOG (e-annapoorna-tukaram): JSW Foundation dialysis machines CSR-daan (MLA sirf udgataka; Hindu 27 Jun 2025); KDP meeting me Jindal plant pradushan chetawani (DH 11 Aug 2026) — maang akeli; NIE interview (25 Nov 2024) — plans-only; Oct 2024 Sadhana Samavesha ke Rs 400 crore credit pati E. Tukaram (us samay MLA) ka — galat vyakti + pre-term. Halafname me zero criminal cases.
karnatakaWorks['e-annapoorna-tukaram'] = [];

// --- Bangalore Rural ---

// REJECT-LOG (sharath-kumar-bachegowda): KEONICS chairman conclave bhashan (Moneycontrol) — state-role; mandir rath parivaar kharch (publicnext, non-whitelist); metro feasibility ghoshna (Asianet/HT, sirf ghoshna); KJ George dwara solar plant udghatan (Hindu) — MLA sirf maujood; sikshana.org CSR launch — NGO site + abhiyan shubharambh; 2021 FIR samarthakon ke khilaaf (MLA aaropi nahi, pre-period). Pita MP B.N. Bachegowda ke kaam mix nahi hue.
karnatakaWorks['sharath-kumar-bachegowda'] = [];

karnatakaWorks['k-h-muniyappa'] = [
  {
    title: 'CM ne Kempegowda Study Centre at Bengaluru University announce kiya jab Mantri K H Muniyappa ne apne Devanahalli seat me uske liye 9.5 acre zameen allot kar di',
    category: 'Any',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/karnataka/2026/Jun/28/bengaluru-pays-rich-tributes-to-visionary-founder',
    date: '2026-06-27',
    note: 'CM D K Shivakumar ne Kempegowda ki 517vi jayanti samaroh (BDA Nadaprabhu Kempegowda Layout) me ghoshna ki ki Bengaluru University me Kempegowda Study Centre banega aur Minister K H Muniyappa ne apne seat me centre ke liye 9.5 acre zameen allot ki hai. Stage swikriti hai kyunki centre ka shilanyas ya nirman abhi report nahi hua — sirf zameen allotment poora hua aur sthapna ka faisla ghoshit hua. Centre ke liye fund-srot ghoshit nahi. Date inferred: article 28 Jun 2026 ko update hua aur samaroh “Saturday” ko tha, to event 27 Jun 2026 ko hua.',
    period: '2023-2028',
  },
];

// REJECT-LOG (dheeraj-muniraj): Doddaballapur me treated-water virodh (TOI) — maang akeli; Ohmium gigafactory launch (Hindu) — Union mantri ne kiya, MLA maujood; AJAX SSK centre (mediabulletins, CSR + non-whitelist); ESIC hospital udghatan (Union mantri ne; jharkhandstatenews non-whitelist); saree event/company office — kaam nahi; Devaraj Urs school shilanyas (Education Minister ne, NIE) — MLA maujood. Negative-QA: Crime 18/2023 FIR HC ne Dec 2024 me quash ki — whitelisted media coverage nahi, aur ye raahat hai; KJ George smart-meter SLP me MLA complainant tha, aaropi nahi.
karnatakaWorks['dheeraj-muniraj'] = [];

// REJECT-LOG (n-shreenivasaiah): Vrishabhavati Lift Irrigation shilanyas CM ne kiya (MLA maujood; ANI 4 Mar 2024); guddali puja DCM ne ki (NIE May 2025) — MLA maujood akeli; second-airport virodh patra (TOI Mar 2025) — maang akeli; Somasekhar-waapsi raajnaitik khabar; Citizen report-card (Hindu Jun 2025) — performance-report, kaam nahi; topbengaluru "plans" (non-whitelist + ghoshna). Court-case hits dusre Srinivasaiah logon ke — identity mismatch.
karnatakaWorks['n-shreenivasaiah'] = [];

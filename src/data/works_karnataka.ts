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


// ============================================================================
// BATCH 2 (Bangalore Urban — pehla hissa, 14 seats — 4/31 jile)
// ============================================================================
// KA BATCH 2 — Bangalore Urban (pehla hissa: Yelahanka, Krishnarajapuram, Byatarayanapura,
// Yeshwantpur, Rajarajeshwarinagar, Dasarahalli, Mahalakshmi Layout, Malleshwaram, Hebbal,
// Pulakeshinagar, Sarvagnanagar, C.V. Raman Nagar, Shivajinagar, Shanti Nagar) — 4/31 jile

// --- Yelahanka ---

// REJECT-LOG (s-r-vishwanath): HT Oct 2024 — baadh-grast apartment ka bulldozer par daura (nirikshan akela); NIE Sep 2026 — Bellahalli 125-bed aspataal shilanyas mantri ne kiya, article me Vishwanath ka naam tak nahi; NIE May 2025 — Ambedkar murti anavaran CM ne kiya (siraf maujood); TOI Jan 2026 — do 125-bed aspataal sarkari budget nirnay (bhoomika nahi); India Education Diary Jul 2025 — Avalahalli school CSR upgrade me sirf mukhya-atithi; Construction World Jan 2022 flyover shilanyas (pre-term, non-whitelist); DH Jun 2025 60,000-seat stadium ghoshna (DKS ki, bhoomika nahi). NEGATIVE-QA: NDTV Jul 2026 rowdy-sheeter janmdin maujoodgi — MLA aaropi nahi, koi FIR nahi; The Hindu Dec 2021 hatya-sajish aarop — MLA shikayatkarta tha, aaropi nahi; Indian Kanoon Crl.Apl.1060/2025 snippet rahat ki taraf ishara (whitelist coverage nahi, 403).
karnatakaWorks['s-r-vishwanath'] = [
  {
    title: 'Yelahanka MLA S R Vishwanath ke Vidhansabha prashn ke jawab me Sports mantri ne ghoshna ki ki Mavallipura me 100-acre Sports City banega',
    category: 'Any',
    badge: 'news',
    stage: 'ghoshna',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/100-acre-sports-city-yelahanka-soon-karnataka-minister-nagendra-9161839/',
    date: '2024-02-14',
    note: 'The Indian Express ke anusaar Sports and Youth Empowerment mantri B Nagendra ka likhit jawab Vidhansabha me Yelahanka MLA S R Vishwanath ke prashn par aaya: Mavallipura (Yelahanka ke paas) me 100 acre par Sports City banega; shuruaati prastav 60 acre ka tha, khel vibhag ne revenue department se 40 acre aur maange hain. Mantri ne kaha kaam zameen milne aur state cabinet ki manzoori ke baad shuru hoga, aur ye sarkar ya private players ke saath milkar banega. Credit capped: MLA ka credit sirf prashn uthane tak hai; ghoshna mantri ki hai aur report ke samay zameen transfer aur cabinet manzoori dono lambit thi.',
    period: '2023-2028',
  },
];

// --- Krishnarajapuram ---

// REJECT-LOG (byrati-basavaraj): Samruddhi Layout concrete road samman (Bangalore Mirror Oct 2024, non-whitelist); Rs 55-lakh Basavanagar building lokarpan 2022 (pre-term + non-whitelist); Sai Layout Rs 14-crore drain (TOI Jul 2025 — MLA sirf bayan, bhoomika nahi); KR Puram Lake bhoomi puja (IE Jan 2022, pre-term); Whitefield-Krishnarajapuram metro (PM ne inaugurate kiya, bhoomika nahi); traffic constable assault/Lokayukta complaint (pre-2023, karyakaal me vikas nahi); Hindu Dec 2023 rishtedar road-block — parivar ka mamla. RETRY-LEAD: IE legal-news “Karnataka HC asks why no action against cops who protected murder suspects” (oral observation) — 5vi entry possible; DH ki seedhi coverage (aggregator re-publish se nahi); KR Puram KLLADS itemized lists.
karnatakaWorks['byrati-basavaraj'] = [
  {
    title: 'Bharathinagar me realtor V G Shivaprakash urf Biklu Shiva ki hatya me K R Puram MLA Byrathi Basavaraj FIR me aaropi number 5',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/bjp-mla-byrathi-basavaraj-among-five-booked-for-murder-of-realtor/article69817678.ece/amp/',
    date: '2025-07-16',
    note: 'The Hindu ke anusaar 16 July 2025 ko mrtak ki maa Vijayalakshmi ki shikayat par FIR darj hui, jinhone kaha unhone 15 July 2025 ko Bharathinagar me hatya apni aankhon se dekhi. Unka aarop tha ki unke bete ko February 2025 se ek sampatti vivaad par MLA ke sahyogiyon se jaan ke khatre mil rahe the aur K R Puram MLA ke uksane par hatya hui; MLA ko FIR me aaropi number 5 bataya gaya. Basavaraj ne kisi bhi sanliptata se inkaar kiya, police karyawahi par sawal uthaya, rajnaitik sajish ka aarop lagaya aur kaha ve aaropon ka kanooni roop se samna karenge. Date-note: shikayat 16 July 2025 ko darj hui, isliye tithi wahi rakhi gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Biklu Shiva hatya case me special court ne Byrathi Basavaraj ki agrim jamanat yachika kharij ki; ve farar ghoshit hue',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/realtor-murder-case-sessions-court-rejects-anticipatory-bail-plea-of-byrathi-basavaraj/article70431073.ece/amp/',
    date: '2025-12-23',
    note: 'The Hindu ke anusaar MPs/MLAs ke aaparaadhik mamalon wali Special Court of Sessions ne Tuesday (23 December 2025) ko unki agrim jamanat yachika kharij kar di aur CID ne unhe pakadne ke prayas tez kar diye kyunki ve farar the. CID ne Monday ko 17 aaropiyon ke khilaaf chargesheet dayar ki thi lekin MLA ke khilaaf chargesheet abhi dayar nahi hui thi — unhe farar aaropi bataya gaya. 19 December ko Karnataka High Court ne unke khilaaf KCOCA lagane ko kharij kar diya tha lekin agrim jamanat ke liye sessions court jaane ka nirdesh diya tha; CID unke khilaaf Look Out Notice ki prakriya me bhi thi. Date-note: report Tuesday ke faisle ki hai — 23 December 2025 Tuesday tha, isliye tithi 2025-12-23 rakhi gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Supreme Court ne yachika par vichar se inkaar kiya to CID ne Byrathi Basavaraj ko Kempegowda International Airport par giraftaar kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan Times (PTI)',
    sourceUrl: 'https://www.hindustantimes.com/india-news/bjp-mla-byrathi-basavaraj-arrested-at-bengaluru-airport-in-murder-case-101770913139106.html',
    date: '2026-02-12',
    note: 'Hindustan Times (PTI) ke anusaar Thursday shaam ko unhe Terminal-1 par Ahmedabad se aane ke baad giraftaar kiya gaya — Supreme Court ne Karnataka High Court ke agrim-jamanat na dene wale aadesh ko chunauti dene wali unki yachika par vichar se inkaar kar diya tha. KR Puram MLA ko 15 July 2025 ko Bharathi Nagar me hack karke maar dale gaye V G Shivaprakash urf Biklu Shivu ki hatya ki FIR me paanchvaan aaropi banaya gaya tha; janchkartaon ne hatya ko February 2025 ke Kithaganur kshetra ki zameen par pratidvandvi dabedaaron ke beech sampatti vivaad se joda.',
    period: '2023-2028',
  },
  {
    title: 'Biklu Shiva hatya case ke 20 aaropiyon me sabse pehle Byrathi Basavaraj ko special court ne sashart jamanat di',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/byrathi-basavaraj-bail-bikla-shiva-murder-case-bengaluru-10579415/',
    date: '2026-03-12',
    note: 'Indian Express ki report (13 March 2026 ko publish; court ne Thursday ko jamanat di — 12 March 2026 Thursday tha, isliye tithi 2026-03-12 rakhi gayi hai) ke anusaar July 2025 me V G Shivaprakash urf Bikla Shiva ki hatya me 12 February 2026 ko giraftaar Basavaraj Rs 2,00,000 ke vyaktigat muchalke aur utni hi rashi ke do zamanati par riha hue — sharton ke saath: janch agency ke saamne jab bulaya jaye hazir honge, poora sahyog karenge, court ki likhit anumati ke bina adhikaar-kshetra se bahar nahi jayenge ya videsh nahi jayenge. Court ne kaha MLA ko hatya se jodne wala koi seedha saboot nahi tha aur saha-aaropiyon ke ikbaliya bayan kamzor saboot the; ghatna se turant pehle anya aaropiyon se unhe jodne wala koi electronic saboot ya call record bhi nahi tha. 20 January ko Supreme Court ne faisla diya tha ki unke khilaaf KCOCA hatane wale High Court aadesh ko bandhan-kari misal nahi mana jayega.',
    period: '2023-2028',
  },
];

// --- Byatarayanapura ---

// REJECT-LOG (krishna-byre-gowda): Vidyashilp CSR school upgrade (daijiworld Sep 2023, non-whitelist); 248 NURM-BSUP houses title deeds (ANI-feed non-whitelist) — retry-lead; Hebbal Lake wetland nirikshan (DH May 2026, lake Hebbal seat me); Kogilu-Sampigehalli road petition (nagrik-maang); Rs 70 crore footpath ghoshna (DH, citywide); Blue Line metro fatkaar (Hindu Dec 2025, sirf nirikshan); Bengaluru Lake Run flag-off (abhiyan event); eAasthi 2.0 launch (citywide seva). NEGATIVE-QA: Garudanapalya 21.16-acre land-grab aarop (Hindu ×2/NIE/TOI, Dec 2025) — BJP/LoP ne aarop lagaya, mantri ne Vidhansabha me khandan kiya; KOI FIR/chargesheet/Lokayukta-adesh/adalati-notice nahi — sirf aarop + istife ki maang → negative-rule FAIL, WATCH (Lokayukta complaint ya adalat-notice aaye to entry). Missing posters FIR (Amruthahalli, MLA lakshya tha, aaropi nahi). Halafname ke 7 pending mamle akele negative nahi. DATE-NOTE: TOI Rs 88.5-crore article ki exact publish date page se pusht nahi hui (search-index metadata se 2026-07-02 anumaanit) — QA verify karein. SEAT-NOTE: Bellahalli aspataal Yelahanka taluk me hai lekin NIE ne use Byatarayanapura kshetra ki swasthya-kami se spasht joda hai + mantri ka vyaktigat shilanyas + 4-5 saal ka unka prayas — entry rakhi, disclosure ke saath.
karnatakaWorks['krishna-byre-gowda'] = [
  {
    title: 'Krishna Byre Gowda ne Bellahalli me Rs 75 crore ke 125-bed sarkari aspataal ka shilanyas kiya, jo Byatarayanapura kshetra ki swasthya-suvidha ki lambi kami ko door karega',
    category: 'Aspataal',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/karnataka/2026/Sep/21/north-bengaluru-to-get-rs-75-cr-125-bed-govt-hospital',
    date: '2026-09-21',
    note: 'New Indian Express ke anusaar Bengaluru Development Minister Krishna Byre Gowda ne 20 September 2026 (Ravivar) ko Bellahalli, Yelahanka taluk me Rs 75 crore ke 125-bed sarkari aspataal ka shilanyas kiya — bhautik sthal Yelahanka taluk me hai, lekin report ke anusaar ye pariyojana Byatarayanapura kshetra me swasthya suvidhaon ki lambe samay se chali aa rahi kami ko door karegi, aur mantri ne kaha ve ise pichhle chaar-paanch saalon se apne kshetra ke pratinidhi ke roop me aage badha rahe the. Teen-manzila imarat me kai visheshagya chikitsa sewayen hongi; bhavishya me do manjil aur jodkar kshamta 125 se 250 bed tak badhane ki yojana hai. Shilanyas samaroh me Swasthya Mantri U.T. Khader, MLA Dinesh Gundu Rao aur anya janpratinidhi maujood the. Fund-srot report me ghoshit nahi (sarkari pariyojna).',
    period: '2023-2028',
  },
  {
    title: 'Sarkari aadesh ke tahat Rs 2,000 crore ke Bengaluru package me Byatarayanapura ko sabse bada kshetra-war aavantan — Rs 88.5 crore mila',
    category: 'Any',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/bengaluru/byre-gowda-defends-fund-allocation-says-congress-seats-were-starved-under-bjp-rule/articleshow/132099793.cms',
    date: '2026-07-02',
    note: 'TOI ke sarkari aadesh (government order) ke vishleshan ke anusaar Rs 2,000 crore ke Bengaluru buniyadi-dhancha package ke tahat Byatarayanapura ko sabse bada pehchana gaya kshetra-war aavantan — Rs 88.5 crore — mila. Bengaluru Development Minister Krishna Byre Gowda ne aavantan ka bachav karte hue kaha ki pichhli BJP sarkar ke karyakaal me Congress-vidhayakon wale kshetron ko buniyadi-dhancha nidhi me vyavasthit roop se kam hissa mila tha. Credit capped: ye sarkari package hai — MLA ka vyaktigat swikriti-kadam report me darj nahi; entry ka aadhaar GO-backed seat-aavantan hai. Date-note: report ki exact publish date page se pusht nahi hui; search-index metadata ke adhar par 2026-07-02 rakhi gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Rajya Cabinet ne Byatarayanapura ke vikas karyon ke liye Rs 90 crore manzoor kiye — kachra-plant durgandh niyantran aur sadak-naali marammat ke liye',
    category: 'Any',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/karnataka/bengaluru/karnataka-cabinet-clears-rs-250-crore-for-development-works-in-yeshwantpur-byatarayanapura-4184581',
    date: '2026-10-16',
    note: 'Deccan Herald ke anusaar rajya Cabinet ne 15 October 2026 ko Yeshwantpur aur Byatarayanapura kshetron ke liye kul Rs 250 crore ke vikas karyon ko manzoori di, jisme se Byatarayanapura ko Rs 90 crore milega. Karya: kachra processing plants aur landfill se aane wali durgandh par niyantran tatha sadkon aur naaliyon ki marammat. Kshetra Mahadevapura se seema sajha karta hai aur yahan ek bada dumping yard hai. Karyon ko Bengaluru Solid Waste Management Ltd (BSWML) ke zariye kiya jayega. Credit capped: ye cabinet manzoori hai — MLA ka vyaktigat swikriti-kadam report me darj nahi; entry ka aadhaar seat-level itemized sanction hai.',
    period: '2023-2028',
  },
];

// --- Yeshwantpur ---

// REJECT-LOG (s-t-somashekhar): WORKS — Rajakaluve barrier lokarpan Rs 18 crore (10 June 2026) event valid par coverage ibcworldnews (non-whitelist) — whitelisted coverage mile to retry; Cabinet Rs 250 crore (DH 16 Oct 2026) MLA-bhoomika nahi; Rs 50 crore per-constituency grant (Hindu Jul 2025) blanket scheme; Yeshwantpur railway redevelopment Rs 377 crore (railway pariyojna, bhoomika nahi); Gruha Lakshmi celebration (abhiyan-maujoodgi); 110 gaon paani maang (sirf maang). NEGATIVES — Rs 12 crore BDA bribery Lokayukta FIR (18 Sep 2022) + SC stay-se inkaar (Oct 2022, IE/HT) pre-term; May 2023 ke baad koi chargesheet/aadesh/notice whitelist me nahi; Feb 2024 Rajya Sabha cross-voting + May 2025 BJP se 6-saal nishkashan — party karyawahi akele negative nahi; TOI “prison DIG Somashekhar” alag vyakti hai. FLAG (parent): BJP nishkashan — foundation party BJP hi rahegi (expulsion rule); electionNote me disclosure ho to theek.
// RETRY-LEADS: Rajakaluve whitelisted coverage ya GO; BDA case chargesheet/court order; kla.kar.nic.in par unke questions/mantri-ashwasan.
karnatakaWorks['s-t-somashekhar'] = [];
// --- Rajarajeshwarinagar ---

// REJECT-LOG (munirathna): Kempe Gowda playground school shilanyas (Hindu Nov 2022, pre-term); RR Nagar arch Mysuru Road flyovers (pre-term + BBMP); July 2019 resignation quote (pre-term + maang); BJP show cause Sep 2024 (party karyawahi); Law Minister ka Speaker ko nilamban patra (political demand, standalone negative nahi); Nov 30 2024 FIR murder-plan/voyeurism (Bangalore Mirror, non-whitelist) — RETRY-LEAD; Sep 2025 interim anticipatory bail (barandbench, non-whitelist) — RETRY-LEAD; May 2026 discharge order Spl.CC.No.2252/2024 (sirf court-order PDF, non-whitelist) — RETRY-LEAD (discharge sirf atrocity/153A/504/506 hisson par). BRIEF-CORRECTION: brief me “ED maamle” tha — Munirathna par koi ED action nahi mila (TH Oct 16 2024 headline ka ED hissa Nagendra ka tha). Halafname ke 8 pending mamle akele negative nahi. RETRY-LEADS: rape-case trial 2026 status; RR Nagar KLLADS sarkari record.
karnatakaWorks['munirathna'] = [
  {
    title: 'BBMP thekedar Cheluvaraju ki shikayat par do FIRs ke baad Rajarajeshwarinagar MLA Munirathna Kolar se giraftaar, do din ki police custody mili',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/bengaluru/bjp-mla-munirathna-arrested-two-day-police-custody-following-serious-allegations/articleshow/113373366.cms',
    date: '2024-09-14',
    note: 'TOI ke anusaar RR Nagar ke BJP MLA aur former minister Munirathna Naidu ko Saturday (14 September 2024) ko Kolar se giraftaar kiya gaya; raat ko Yelahanka me magistrate ke samne pesh kiya gaya — police ne ek hafte ki custody maangi thi lekin judge ne sirf do din ki police custody di. Vyalikaval police station me unke khilaaf do alag cases darj hue. BBMP contractor Cheluvaraju (44) ki shikayat par Munirathna ke saath unke gunman Vijay Kumar, PA Abhishek aur aide Vasanth Kumar ko bhi aaropi banaya gaya; criminal intimidation, dhamki dekar vasuli ki koshish aur cheating ke tahat case darj hua. Police ne audio clippings japt ki jinme Naidu kathit taur par Cheluvaraju ko gaali dete aur kachra-uthane/gaadiyon ke kaam par rishwat maangte sunai de rahe the; clippings FSL bhejane aur voice samples lene baaki the. Doosri shikayat former BBMP corporator Velu Nayakar ne ki thi — jaatiwadi tippani aur parivaar ki mahilaon ki maryada ko thes ka aarop. MLA ka jawab — unhone kaha ye cases unke khilaaf political conspiracy ka hissa hain.',
    period: '2023-2028',
  },
  {
    title: 'Kaggalipura rape/sexual-harassment case me giraftari ke baad special court ne Rajarajeshwarinagar MLA Munirathna ko 5 October tak SIT custody me bheja',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/bjp-mla-munirathna-sent-to-sit-custody-till-october-5-9586884/',
    date: '2024-09-24',
    note: 'Indian Express ke anusaar Bengaluru ki special court ne Tuesday ko kathit rape aur harassment ke aaropon me giraftaar BJP MLA Munirathna ko 5 October tak Special Investigation Team (SIT) ki custody me bhej diya. Unhe 40-saal ki social worker ke saath baar-baar rape, honey-trapping aur ek political opponent ko HIV se infect karne ke case me giraftaar kiya gaya tha. Congress-led Karnataka sarkar ne BJP MLA ke khilaaf teen aaparaadhik mamlo ki jaanch ke liye IPS officer B K Singh ki adhyakshata me SIT gathit ki thi. Unhe IPC ki dhaaraon 376 (repeated rape), 354 (sexual harassment), 354(C) (voyeurism), 506, 504, 120(B), 149, 384 (extortion), 406, 308 aur IT Act ke tahat book kiya gaya. Isse pehle unhe do anya mamlo me jamanat mili thi jisme Vokkaliga aur Dalit samudaayon ke vyaktiyon par apmaan-janak tippaniyon ka aarop tha. Law and Parliamentary Affairs Minister H K Patil ne Assembly Speaker ko patra likhkar Munirathna ke nilamban aur ethics committee gathan ki maang ki thi. Date-note: report me Tuesday likha hai — 24 September 2024 Tuesday tha. Iss report me MLA ka koi bayan darj nahi hai.',
    period: '2023-2028',
  },
  {
    title: 'Rape case me special court se jamanat milne par Rajarajeshwarinagar MLA Munirathna Parappana Agrahara jail se riha hue',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/rape-accused-bengaluru-bjp-mla-rr-munirathna-walks-out-prison-9623098/',
    date: '2024-10-16',
    note: 'Indian Express ke anusaar Karnataka ke BJP MLA RR Munirathna Wednesday ko ek mahine jail me rehne ke baad Bengaluru ke Parappana Agrahara Central Prison se bahar aaye; 40-saal ki mahila dwara darj rape case me court order ke baad rihaai hui. MLA ke khilaaf rape, sexual harassment, voyeurism, criminal intimidation, extortion, promoting enmity, mahila ki maryada ko thes aur SC/ST (Prevention of Atrocities) Act ki dhaaraon ke tahat aarop hain. Isse pehle unhe atrocity case me jamanat aur criminal intimidation case me anticipatory bail mil chuki thi. MP/MLAs ke liye Special Court ne unhe janchkartaon ke samne zaroorat padne par hazir hone, court ki anumati ke bina adhikaar-kshetra se bahar na jaane, gawahon ko dhamkane aur sabooton se chhedchhaad na karne ka nirdesh diya. Date-note: jamanat ka court order Monday (14 October) ko aaya aur rihaai Wednesday (16 October) ko hui. Iss report me MLA ka koi bayan darj nahi hai.',
    period: '2023-2028',
  },
  {
    title: 'SIT ne Rajarajeshwarinagar BJP MLA Munirathna ke khilaaf rape, honeytrap aur AIDS failane ki koshish ke aaropon me 2,481-page chargesheet dayar ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/sit-chargesheets-munirathna-for-rape-honeytrap-and-attempt-to-infect-others-with-aids/article69034590.ece',
    date: '2024-12-17',
    note: 'The Hindu ke anusaar R.R. Nagar BJP MLA Munirathna ke kathit apraadhon ki jaanch kar rahi Special Investigation Team (SIT) ne unhe rape, honey trap aur AIDS failane ki koshish ke aaropon me chargesheet kiya hai. 2,481-page chargesheet me 146 gawahon ke bayan aur 850 dastavej saboot ke roop me hain; 146 me se aath gawah magistrate ke samne bayan darj kara chuke hain; police ne kuch videos bhi baramad kiye jinme kathit taur par Munirathna ne honeytrap karke recording ki thi. Chargesheet 17 December ko Special Court of Magistrate for Criminal Cases against Former and Present MPs and MLAs ke samne submit hui. Ek political activist ne shikayat ki thi ki Munirathna ne pandemic ke dauraan unse dosti ki, rape kiya, video record karke blackmail kiya, aur ek HIV-positive mahila ka istemal karke apne political virodhiyon ko honeytrap karne me madad ke liye majboor kiya. Jaanch me ye bhi saamne aaya ki Munirathna aur inspector Iyan Reddy ne tatkalin Revenue Minister aur ab ke Leader of Opposition R. Ashok ko HIV-infected blood se infect karne ki saazish rachi thi, jo nakaam rahi. FIR ke aath sandigdhon me se SIT ne MLA Munirathna, police inspector Iyan Reddy aur sahyogi Srinivas P. aur Sudhakar R. ko chargesheet kiya; unhe IPC dhaara 376(2)(n), 270, 354C aur IT Act 2000 dhaara 66E ke tahat charge kiya gaya. Date-note: report 27 December 2024 ko publish hui. Iss report me MLA ka koi bayan darj nahi hai.',
    period: '2023-2028',
  },
  {
    title: 'Karnataka High Court ne Munirathna ke khilaaf teen mamlo ki SIT jaanch ke gathan ko chunauti dene wali unki yachika kharij ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/karnataka-hc-bjp-mla-munirathnas-plea-sit-probe-cases-9880324/',
    date: '2025-03-07',
    note: 'Indian Express ke anusaar Karnataka High Court ne BJP MLA aur former minister Munirathna Naidu ki us yachika ko kharij kar diya jisme unhone Congress sarkar dwara unke khilaaf pichhle saal darj teen alag mamlo ki jaanch ke liye special investigation team (SIT) ke gathan ko chunauti di thi. Teen aarop: Bengaluru civil contractor Cheluvaraju se solid waste disposal contract ke liye Rs 20 lakh maangna; ek contractor ke saath kathit maukhik durvyavahar par SC/ST (Prevention of Atrocities) Act, 1989 ke tahat atyachar; aur apne kshetra ki ek political worker ka kathit rape. MLA ne dalil di thi ki aarop purane hain, SIT me aadesh me kahe gaye CID ke adhikari shaamil nahi hain, aur SIT ko report court ke bajay sarkar ko saunpi gayi hai. High Court ne unki saari dalilein kharij karke SIT ka gathan barkaraar rakha. Court ne sanket diya ki vasuli ke kathit mamle 2019 tak seemit nahi balki paanch saal tak chale, jisse contractor tang aakar 2024 me shikayat darj karai — “therefore, the investigation is not hit by delay,” court ne 7 March ko faisla diya.',
    period: '2023-2028',
  },
  {
    title: 'SIT ne BJP MLA Munirathna ke khilaaf do mamlo me special court ke samne supplementary chargesheets dayar ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/sit-files-supplementary-chargesheet-against-bjp-mla-munirathna/article69502627.ece',
    date: '2025-04-29',
    note: 'The Hindu ke anusaar BJP MLA Munirathna ke case ki jaanch kar rahi Special Investigation Team (SIT) ne Special Court ke samne do mamlo me supplementary chargesheets dayar ki hain. RR Nagar MLA par jaatiwadi gaaliyan dene, rape, voyeurism aur khatarnak bimari failane ki koshish ke aarop hain. Chargesheet me Munirathna ke alawa Hebbagodi station ke inspector Ayyanna Reddy aur unke do sahyogi P. Srinivas aur Sudhakar ko bhi charge kiya gaya hai. SIT ka gathan September 2024 me hua tha jab victims ne MLA ke khilaaf aarop saarvajanik kiye the. Iss report me MLA ka koi bayan darj nahi hai.',
    period: '2023-2028',
  },
  {
    title: 'RMC Yard police ne gangrape ki shikayat par Rajarajeshwarinagar MLA Munirathna aur teen sahyogiyon ke khilaaf FIR darj ki, SIT ko saunpi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/karnataka-bjp-mla-munirathna-gang-rape-case-sit-probe-10022649/lite/',
    date: '2025-05-20',
    note: 'Indian Express ke anusaar special investigation team (SIT) ne Karnataka BJP MLA Munirathna ke khilaaf wo case apne haath me liya jisme 40-saal ki mahila ne unpar apne sahyogiyon se apna gang rape karwane, apmaan-janak vyavahar aur ghaatak virus inject karne ka aarop lagaya tha. Police ne Tuesday ko Munirathna aur unke kathit sahyogiyon Vasantha, Channakeshawa aur Kamal ko book kiya tha. FIR ke anusaar ghatna 11 June 2023 ko MLA ke office me hui; mahila ne Monday ko kathit taur par aatmahatya ki koshish ki, bach gayi aur report karne ka faisla kiya. Aaropiyon ko IPC dhaaraon 376D (gang rape), 270, 354, 506 ke tahat book kiya gaya. Date-note: report me Tuesday likha hai — 20 May 2025 Tuesday tha. Iss report me MLA ka koi bayan darj nahi hai.',
    period: '2023-2028',
  },
  {
    title: 'SIT ne gangrape ke aaropon me Rajarajeshwarinagar MLA Munirathna aur sahyogiyon ko clean chit dete hue ‘B’ report dayar ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/karnataka-bjp-mla-munirathna-naidu-sit-clean-chit-gangrape-case-10229772/',
    date: '2025-09-04',
    note: 'Indian Express ke anusaar BJP MLA Munirathna Naidu aur unke sahyogiyon ke khilaaf gangrape ke aaropon ki jaanch kar rahi Special Investigation Team (SIT) ne Wednesday ko court ke samne closure report dayar ki, jisme aaropon ko saabit karne ke liye paryapt saboot na hone ka hawala diya gaya; SIT ne special court ko bataya ki May me darj shikayat jhoothi payi gayi. Case RMC Yard police station dwara 20 May 2025 ko darj FIR se juda tha. Bengaluru me elected representatives ke liye special court ke samne ‘B’ report dayar ki gayi — sabooton ki kami ke kaaran aarop saabit nahi ho sake. MLA ka jawab — unhone closure report ko vindication bataya aur kaha ye political badle ka hissa tha. Iss closure ke bavjood unhe anya mamlo me kanooni chunautiyon ka saamna hai — SIT unke khilaaf alag mamlo me do chargesheets aur ek supplementary chargesheet dayar kar chuki hai; ek case Kaggalipura ka hai (IPC 376(2)(n) rape aarop) aur doosra kathit jaatiwadi gaaliyon se juda hai.',
    period: '2023-2028',
  },
];

// --- Dasarahalli ---

// REJECT-LOG (s-muniraju): LiveLaw/indiankanoon WP 16180/2024 — Muniraju ne Dasarahalli ke tenderon par yachika dayar ki (MLA petitioner, aaropi nahi) — negative nahi, kaam bhi nahi; 2016 land-grab case 2016 me kharij; 2023 halafname me 0 criminal cases; KLLADS itemized lists nahi mili.
karnatakaWorks['s-muniraju'] = [
  {
    title: 'Vidhana Sabha ke Winter Session me Dasarahalli MLA Muniraju ke prashn par Dy CM Shivakumar ne Jalahalli Cross underpass par stakeholders ki baithak ka ashwasan diya',
    category: 'Sadak',
    badge: 'news',
    stage: 'ghoshna',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/jalahalli-and-kanteerava-underpasses-inch-towards-revival-will-the-momentum-sustain/article70416495.ece',
    date: '2025-12-19',
    note: 'The Hindu (19 Dec 2025, khola-padha) ke anusaar Vidhana Sabha ke Winter Session me Dasarahalli MLA Muniraju ke prashn ka jawab dete hue Dy CM D.K. Shivakumar (Bengaluru Development portfolio) ne kaha ki ve Jalahalli Cross underpass par jald sabhi stakeholders — jisme Leader of Opposition R. Ashok bhi shamil — ke saath baithak karke mudde suljhayenge aur kaam shuru karenge. Unhone bataya ki zameen malikon ke muavje ke liye kul Rs 139 crore aavantit hai; 48 sampatti malikon ko Rs 85 crore ka bhugtan ho chuka hai jabki Rs 53 crore ka bhugtan abhi baki hai, aur deri ka karan adhikansh malikon ka Transferable Development Rights (TDR) sweekar karne se inkar tha. Junction ka aadha hissa Dasarahalli vidhansabha kshetra me aur aadha Rajarajeshwari Nagar me aata hai; ye chhah saal purani BBMP yojna hai jo zameen-adhigrahan aur muavja muddon par atki thi. Credit capped: MLA ka credit sirf prashn uthane tak seemit hai — swikriti ya nirman me unki vyaktigat bhoomika ka dastavezi saboot article me nahi hai; ye BBMP ki sadak pariyojna hai.',
    period: '2023-2028',
  },
];
// --- Mahalakshmi Layout ---

// REJECT-LOG (k-gopalaiah): WORKS — newskarnataka.com (monsoon inspection Mar 2026) non-whitelist + nirikshan akela; GBA package me Mahalakshmi Layout ko Rs 40 crore (newspointapp aggregator, non-whitelist; sarkari aavantan, vyaktigat bhoomika nahi) — reject; koi whitelisted post-event lokarpan/shilanyas coverage nahi mili. NEGATIVES — Feb 2024 Kamakshipalya FIR: ex-corporator Padmaraj ki intimidation (deccanchronicle) — FIR me Gopalaiah SHIKAYATKARTA hain, aaropi nahi (negative nahi); molasses-export Rs 80 crore kickback aarop (citizenmatters voter guide, pre-term Congress aarop) — koi FIR/chargesheet/janch nahi (negative nahi); 2023 halafname me 0 criminal cases. RETRY-LEADS: monsoon inspection ke dauran shuru hue kaamon ka whitelisted post-event coverage; KLLADS itemized lists.
karnatakaWorks['k-gopalaiah'] = [];

// --- Malleshwaram ---

// REJECT-LOG (c-n-ashwath-narayan): PSI recruitment scam SIT peshi Feb 2025 (IANS via mangalorean/ommcomnews/lokmattimes — non-whitelist; gawah-poochtaachh, FIR me naam nahi); Congress aarop (Hindu op-ed Apr 2023 me BHAI par aarop, MLA par FIR kabhi nahi) — aarop akela; GBA package Malleshwaram Rs 40 crore (newspointapp aggregator, non-whitelist); Manipal Hospital CATH Lab udghatan May 2025 (Bangalore Mirror, non-whitelist + niji aspataal); Malleshwaram Sports Complex meeting (nammaward.in, non-whitelist + meeting); voter-data WhatsApp vivaad Apr 2023 (pre-term); Smart Malleshwara/CUPHC Palace Guttahalli 2022 (pre-term + mantri-bhoomika). Halafname ke 2 pending mamle akele negative nahi. RETRY-LEAD: FIR quash yachika ka antim aadesh whitelist par mile to stage-update.
karnatakaWorks['c-n-ashwath-narayan'] = [
  {
    title: 'Malleshwaram BJP MLA Dr C.N. Ashwath Narayan ke CM Siddaramaiah par “finish off” wali tippani par Mysuru me darj FIR ki jaanch par Karnataka High Court ne chaar hafton ki rok lagai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan Times',
    sourceUrl: 'https://www.hindustantimes.com/cities/bengaluru-news/karnataka-high-court-stays-investigation-into-former-minister-s-controversial-statement-about-finishing-off-cm-siddaramaiah-101685475412922.html',
    date: '2023-05-30',
    note: 'Karnataka High Court ki single judge bench (Justice M. Naga Prasanna) ne 30 May 2023 ko Malleshwaram BJP MLA aur purva mantri C.N. Ashwath Narayan ke khilaaf darj FIR ki jaanch par chaar hafton ki rok lagai. Narayan ne FIR ko quash karne ki yachika dayar ki thi. Unke vakeel ne tark diya ki tippani Siddaramaiah ko chunaav me harane ke iraade se thi; Congress netaon ne February me shikayat ki thi jis par NCR darj hui thi; sarkar badalne ke baad 24 May ko Devaraja police station, Mysuru me nayi shikayat par durbhaavna se FIR darj ki gayi; criminal intimidation, rioting aur deliberate incitement ke aaropon ka koi uchit saboot nahi, shikayatkarta ghatnasthal par maujood nahi tha, bhashan ke baad koi danga nahi hua aur IPC Section 153 ke tatva bante nahi. Lok abhiyojak ne virodh karte hue kaha ki ye jamanati mamla hai isliye rok nahi lagni chahiye, lekin bench ne FIR par rok ka aadesh jaari karke rajya sarkar ko notice diya. Ghatna: 15 February 2023 ko Mandya ke Sathanur me BJP karyakartaon ki sabha me unhone karyakartaon se kaha tha ki Uri Gowda aur Nanje Gowda ne jis tarah Tipu Sultan ko khatm kiya tha, usi tarah Siddaramaiah ko “finish off” karo. KPCC secretary M. Lakshman ne Mysuru me shikayat ki thi lekin police ne FIR darj nahi ki thi; 24 May ko taaza shikayat par IPC 506 (jaan se maarne ki dhamki) aur 153 (dangon ke liye uksana) ke tahat FIR darj hui. Stage-note: ye FIR+interim-stay ka charan hai; ghatna pre-term ki hai lekin FIR (24 May 2023) aur stay (30 May 2023) karyakaal ke andar hue — in-term nyayik vikas.',
    period: '2023-2028',
  },
];

// --- Hebbal ---

// REJECT-LOG (byrathi-suresh): Hebbal hospital foundation / Hebbal flyover Rs 80cr / Hebbal-UAS tunnel Rs 1,139.7cr — sab CM/DCM ke events, Suresh sirf upasthit; MUDA-ED summons — gawah-notice; CC.No.25189/2024 chargesheet — whitelist media coverage nahi; Mangaluru RuB inauguration — seat bahar; MGNVY grants — statewide; vote-theft allegation / Mercedes daava / Rakesh death allegations / journalists manhandled — bina-FIR aarop; smart TVs — pre-term; 2019 attack — victim the. RETRY-LEADS: CC.No.25189/2024 whitelist coverage + quash outcome; TOI/DH Bengaluru print archives + BBMP ward GOs. FLAG (parent): Deccan Herald Sep 2026 unhe ‘Transport Minister’ keh raha hai, Urban Development nahi — foundation me portfolio verify karein.
karnatakaWorks['byrathi-suresh'] = [
  {
    title: 'Fire Safety Department ki shikayat par darj karyawahi radd — Karnataka High Court ne August 2024 me Byrathi Suresh ke commercial complex me fire-safety ullanghan ke mamle ki karyawahi quash ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/high-court-quashes-proceedings-against-karnataka-minister-byrathi-suresh-fire-safety-violations-9559755/',
    date: '2024-08-29',
    note: 'The Indian Express ki report (28 Aug 2024 ko Justice M. Nagaprasanna ka faisla; report me September ka ullekh — calendar se faisla 29 August 2024 ko hua, isliye tithi 2024-08-29 rakhi gayi hai) ke anusaar Karnataka High Court ne unke commercial complex (jo unhone 2014 me khareeda tha) me fire-safety upakaran na hone ke aarop par Fire Safety Department ki 2 April 2019 ki shikayat se darj karyawahi ko quash kar diya. Court ne kaha complaint 13 mahine baad darj hui thi jabki CrPC Section 468 ke tahat limitation 6 mahine thi. Mantri ke vakil ka tark tha ki CrPC aur sambandhit kanoon ke mutabiq shikayat darj karne ki 1 saal ki avadhi nikal chuki thi. Stage-note: ye rahat/exoneration ka charan hai — pre-term shikayat, karyakaal me antim nyayik vikas. MLA ka jawab — report me vakil ke tark ke roop me darj hai.',
    period: '2023-2028',
  },
];

// --- Pulakeshinagar ---

// REJECT-LOG (a-c-srinivasa): NIE 13 May 2025 — DCM ne Pulakeshi Nagar me 4MLD BWSSB reservoir ka shilanyas kiya (dusre neta ka event, MLA sirf maujood); school/hospital sirf maang + DCM ki conditional ghoshna — koi dastavezi nateeja nahi; countryandpolitics.in Sep 2025 — GBA Commissioner ke saath joint inspection (non-whitelist + daura akela); Bangalore Mirror — Mosque Road overbridge meeting (meeting akeli); newspointapp/Udayavani — GBA package me Pulakeshinagar Rs 95/100 crore (aggregator non-whitelist, ghoshanatmak); newskarnataka — Cauvery Phase 5 launch (CM/DCM event). Halafname ke mamle akele negative nahi. SEAT-QA: The Hindu ne khud ‘A.C. Srinivas, Pulekeshinagar MLA’ bataya — seat-pehchan pakki. NOTE: worker ke note me ‘jaan ch-ka’ typo mila — merge me ‘jaanch ka’ theek kiya. RETRY-LEADS: school/hospital sanction whitelist par mile to entry; SST case chargesheet/adalati vikas mile to negative-update.
karnatakaWorks['a-c-srinivasa'] = [
  {
    title: 'Pulakeshinagar MLA A.C. Srinivas aur unke samarthakon ke khilaaf Static Surveillance Team ke videographer se haathapaai ke aarop me Section 353 ke tahat mamla darj',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/bangalore/case-filed-against-pulekeshinagar-mla-and-supporters-for-manhandling-static-surveillance-team-videographer/article68023619.ece',
    date: '2024-04-03',
    note: 'The Hindu ke anusaar 2 April 2024 ko M.M. Road sthit apne karyalay par A.C. Srinivas (report me ‘Pulekeshinagar MLA’ likha hai) aur unke samarthakon ke khilaaf SST team leader Manjula Saravana ki shikayat par police ne Section 353 (lok-sevak ko kartavya se rokne ke liye hamla ya aaparaadhik bal) ke tahat mamla darj karke aage jaanch ka elaan kiya. Shikayat me kaha gaya ki SST team chunaav aayog ki anumati ke bina aayojit baithak ki shikayat par nirikshan ke liye aayi thi; karyalay me kshetra ki paani-samasya par charcha ke liye sauon log jama the; jab SST ke videographer ne recording shuru ki to bheed ne use gher liya, uska pehchan-patra maanga, team se haathapaai ki, video cheen liya aur recording delete kar di — shikayat me ise model code of conduct ka ullanghan bhi bataya gaya. Police ne kaha aaropiyon ko bayan ke liye poochtaachh par bulaya jayega. Iss report me MLA ka koi jawab darj nahi hai (anupasthiti disclosed). Stage-note: ye mamla-darj/jaanch ka charan hai — report me chargesheet ya adalati faisle ka zikr nahi.',
    period: '2023-2028',
  },
];
// --- Sarvagnanagar ---

// REJECT-LOG (k-j-george): 100-bed HRBR hospital nirikshan (PTI Mar 2025, sirf nirikshan); Hennur Biodiversity Park makeover Rs 2.75 crore (ghoshna/pre-event); Govt Kannada Model School Kadugondanahalli classrooms (mangalorean, non-whitelist); R.S. Palya school (Embassy CSR, non-whitelist); Dr. Rajkumar Park Kammanahalli (non-whitelist); Banaswadi RO plant (non-whitelist); Umar Nagar crematorium (non-whitelist); Banaswadi auditorium + Kacharakanahalli lake sports infra (non-whitelist); white-topping/footpath nirikshan (daura akela); HRBR drainage launch (non-whitelist + fund undisclosed); IT surveys Jul 2025 (india.com non-whitelist) — whitelisted coverage mile to negative; defamation case — George shikayatkarta (negative nahi); land-grab aarop 2017 (pre-term); ED complaint 2019 (pre-term). RETRY-LEADS: SC ne 25 Sep 2026 ko smart-meter SLP kharij ki (sirf livelaw, whitelist coverage mile to 5vi entry); seat-level udghatanon ka whitelist coverage; 100-bed HRBR hospital lokarpan.
// QA (coordinator): Kuvempu park dono entries KPTCL CSR-funded hain lekin MLA ne khud shilanyas/udghatan kiya aur fund disclosed hai — mantri-niyam exception (AP batch-5 Lokesh CSR precedent) ke tahat rakhi gayi; Ganapathy entry pre-term mamle ka in-term antim nyayik vikas (SC ne hastakshep se inkaar kiya) — stage-accurate rahat entry.
karnatakaWorks['k-j-george'] = [
  {
    title: 'DySP M.K. Ganapathy ki 2016 me maut ke mamle me Supreme Court ne K.J. George ke paksh wale High Court aadesh ke khilaf vishesh anumati yachika kharij ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/karnataka-dysps-death-sc-dismisses-plea-against-karnataka-hc-minister-k-j-george-cops-9539355/',
    date: '2024-08-27',
    note: 'Justices Bela M. Trivedi aur Satish Chandra Sharma ki peeth ne Ganapathy ke bhai ki vishesh anumati yachika kharij karte hue kaha — “We are not inclined to interfere with the impugned judgment(s) and order(s) passed by the high court. The special leave petition stands dismissed.” Ye yachika Karnataka High Court ke 4 Nov 2020 ke aadesh ke khilaf thi, jisme CBI ki closure report ko barkarar rakha gaya tha. 51-varshiya DySP M.K. Ganapathy ne 7 July 2016 ko Madikeri ke ek hotel me atmahatya ki thi; parivar ne unke ek TV interview ke aadhar par George aur do varishth IPS adhikariyon A.M. Prasad aur Pranab Mohanty par atmahatya ke liye uksane ka aarop lagaya tha. CID ne pehle closure maanga; 2017 me Supreme Court ne mamla CBI ko saunpa; CBI ne 108 gawahon ke bayaan darj karke nishkarsh nikala koi foul play nahi tha aur ye spasht atmahatya ka mamla tha. 28 Aug 2020 ko sessions court ne CBI report kharij kar trial ka aadesh diya tha, jise Nov 2020 me High Court ne kharij kar diya tha. Ghatna ke baad hue hungame par George ne mantri-pad se istifa diya tha. Stage-note: ye aarop-kharij/exoneration ka antim nyayik vikas hai — mamla pre-term ka hai, lekin SLP kharij karyakaal (Aug 2024) me hui. Date-note: IE report 29 Aug 2024 ko update hui; faisla “Tuesday” ko hua — 27 Aug 2024 Tuesday tha, isliye tithi 2024-08-27 rakhi gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'K.J. George ne van mantri Eshwar Khandre ke saath HBR Layout 5th Block me Rs 4.65 crore ke KPTCL theme park ka shilanyas kiya',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'ThePrint (PTI)',
    sourceUrl: 'https://theprint.in/india/karnataka-power-transmission-corporation-to-build-theme-park-using-csr-funds-in-bengaluru/2505806/?amp',
    date: '2025-02-21',
    note: 'ThePrint (PTI) ke anusaar KPTCL station ke paas, HBR Layout 5th Block me banne wale theme park ka shilanyas — anumaanit laagat Rs 4.65 crore, KPTCL ke CSR fund se. Shilanyas Energy Minister K.J. George aur Forest, Ecology and Environment Minister Eshwar Khandre ne sanyukt roop se kiya. Park me training center, grameen khelon ki suvidhaein, open-air theatre, walking paths, open gym, drinking water units aur toilets banne the. Fund-disclosure: KPTCL urja vibhag ka PSU hai (George ke mantri-portfolio ka); paisa CSR ka hai, MLA kshetra nidhi ka nahi.',
    period: '2023-2028',
  },
  {
    title: 'Smart meter tender me bhrashtachar ki shikayat par special court ne K.J. George aur do BESCOM adhikariyon ke mamle me Lokayukta SP se report maangne ka aadesh diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/karnataka-high-court-stays-proceedings-against-minister-kj-george-and-two-bureaucrats-on-complaint-of-illegalities-in-smart-meter-tender-process/article69901543.ece',
    date: '2025-07-23',
    note: 'BJP vidhayakon C.N. Ashwath Narayan, S.R. Vishwanath aur Dheeraj Muniraj ne smart meter tender me bhrashtachar ki shikayat lekar April 2025 me special court ka darwaza khatkhataya tha, kyunki Lokayukta police ne unki shikayat par koi action nahi liya tha. 23 July 2025 ko MPs/MLAs ke khilaaf aapradhik mamalon wali Special Court of Sessions ne Lokayukta ke SP ko shikayat par report dene ka aadesh diya. Shikayat me aarop tha ki M/s Rajashree Electricals Pvt. Ltd. (REPL), Davangere “benami and shell company being operated by agents or henchmen of Mr. George” hai aur tender ke kai zaroori niyam nazarandaaz karke use badhi keemat par smart meter ka theka diya gaya; ye bhi aarop tha ki Additional Chief Secretary (Energy) Gaurav Gupta, tatkalin BESCOM MD Mahantesh Bilagi aur Ramesh H.J. ne George ke saath milkar rajya ke khazane ko bhari nuksaan pahunchaya. George aur dono adhikariyon ne saare aaropon se inkaar kiya aur kaha unke khilaf apradh banane wali koi samagri nahi hai. Stage-note: ye shikayat par jaanch-report ke aadesh ka charan hai — dosh-siddhi nahi.',
    period: '2023-2028',
  },
  {
    title: 'Karnataka High Court ne smart meter tender shikayat par K.J. George aur do adhikariyon ke khilaaf special court ki karyavahi par antarim rok lagayi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/karnataka-high-court-stays-proceedings-against-minister-kj-george-and-two-bureaucrats-on-complaint-of-illegalities-in-smart-meter-tender-process/article69901543.ece',
    date: '2025-08-06',
    note: 'Justice M.I. Arun ne George, Mahantesh Bilagi (tatkalin BESCOM MD) aur Ramesh H.J. (director-technical, BESCOM) ki alag-alag yachikaon par special court ke saamne karyavahi par antarim rok lagayi. Yachikakartaon ne 23 July 2025 ke aadesh ki vaidhata ko chunauti dete hue tark diya ki PC Act ki dhara 17-A ke tahat saksham adhikari ki poorv-anumati ke bina jaanch ka aadesh nahi ho sakta tha aur report prashasanik uchchadhikari se maangi jaani chahiye thi, police adhikari se nahi. Saare aaropon se inkaar karte hue George aur adhikariyon ne kaha unke khilaf jaanch ki maang karne wala koi apradh banta hi nahi.',
    period: '2023-2028',
  },
  {
    title: 'Karnataka High Court ne smart meter tender me koi apradhikta na paakar K.J. George aur do adhikariyon ke khilaaf aapradhik karyavahi kharij kar di',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/tender-for-smart-meters-karnataka-high-court-quashes-complaint-of-criminal-wrong-against-minister-kj-george-and-two-officials/article70349742.ece',
    date: '2025-12-02',
    note: 'Justice M.I. Arun ne George, Mahantesh Bilagi aur Ramesh H.J. ki yachikaein manzoor karte hue trial court ki aapradhik karyavahi kharij kar di. Court ne kaha safal bidder ke paksh me tender diye jaane me “no criminality can be attributed”; tender prakriya me KTPP Act ka ullanghan adhiktam civil vivaad ya PIL ka vishay ho sakta hai, apradhik nahi. Court ne spasht kiya shikayatkartaon ka ye case nahi tha ki theka dete samay paisa liya gaya — unka aarop tha poori tender prakriya safal bidder ko fayda pahunchane ke liye design ki gayi thi, jo “shell company and front of Mr. George” hai; lekin court ne paya kisi bidder ko avaidh roop se ayogya nahi thahraya gaya, chayan pardarshi tha, safal bidder Rajashree Electricals Pvt. Ltd. (REPL), Davangere ko koi vishesh laabh nahi diya gaya, tender shartein antim hone ke baad badli nahi gayin, aur BESCOM ne theka milne ke baad bidder se apne paksh me behtar sharton par baatcheet ki. Stage-note: ye aapradhik shikayat kharij ka rahat-charan hai.',
    period: '2023-2028',
  },
  {
    title: 'K.J. George ne Bengaluru Development mantri Krishna Byre Gowda ke saath HBR Layout me Rs 4.65 crore ke Kuvempu Theme Park ka udghatan kiya',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/karnataka/2026/Aug/12/rs-465-crore-theme-park-transforms-unused-space-at-bengalurus-hbr-layout',
    date: '2026-08-11',
    note: 'New Indian Express ke anusaar Bengaluru Development mantri Krishna Byre Gowda aur K.J. George ne HBR Layout, Sarvagnanagar Assembly constituency me Rs 4.65 crore ke Kuvempu Theme Park ka udghatan kiya. Park Karnataka Power Transmission Corporation Ltd (KPTCL) ne apne CSR fund se 1,500 sqm me banaya hai — 700-metre walking track, 100-seat open-air theatre, drinking water facility, toilets, flagpole, gazebo, Nandini milk outlet aur HOPCOMS store ke liye jagah, bachchon ke play equipment, open gym, stone benches, vishesh paudhe aur lighting system. Byre Gowda ne kaha KPTCL ne apni sampatti janta ke liye kholi aur jhadiyon se bhari jagah ko park me badal diya. Fund-disclosure: KPTCL urja vibhag ka PSU hai (George ke mantri-portfolio ka); paisa CSR ka hai, MLA kshetra nidhi ka nahi. Date-note: NIE report 12 Aug 2026 ko update hui; karyakram “Tuesday” ko hua — 11 Aug 2026 Tuesday tha, isliye tithi 2026-08-11 rakhi gayi hai.',
    period: '2023-2028',
  },
];

// --- C.V. Raman Nagar ---

// REJECT-LOG (s-raghu): Kaggadasapura Lake progress visit (NIE 23 Jun 2024 — sirf nirikshan + ashwasan, shilanyas/lokarpan nahi); elevated corridor open letter (DH 27 Sep 2026 — MLA ka dastavezi kadam nahi); May 2021 vaccination-camp aarop (TNM, pre-term + detailed non-whitelist); Oct 2021 WhatsApp group aarop (residentswatch, pre-term + non-whitelist); citizenmatters trackers (pre-term); indiankanoon “Raghu” cases (pehchan mismatch — alag vyakti); BBMP-levy writ (MLA yachikakarta, aaropi nahi); Bangalore Mirror stories (non-whitelist); GBGB dissent (party politics); 2020 BBMP committee (pre-term). Pehchan-QA: myneta 2023 — S. Raghu (BJP), C.V. Raman Nagar (SC), S/o Late T Subramanya; 2023 halafname me 0 criminal cases. RETRY-LEADS: Kaggadasapura Lake lokarpan whitelist par mile to entry; PM-ABHIM 100-bed critical care centre lokarpan whitelist par mile to entry; seat ke liye itemized sanction list.
karnatakaWorks['s-raghu'] = [];

// --- Shivajinagar ---

// REJECT-LOG (rizwan-arshad): Govt Women’s Degree College shilanyas Nov 2024 (islamicvoice.com, non-whitelist + passive voice ‘attended by MLA’, fund undisclosed); Charaka Superspeciality Hospital lokarpan 2 Sep 2024 (CM/DKS/mantri ne kiya, MLA sirf maujood; medicalbuyer.co.in non-whitelist); Russell Market Rs 40 crore revamp (Hindu/ToI/IE 2025 — DPR tender + ‘will be’ star, sirf ghoshna); Shivajinagar metro sports complex (TNIE Oct 2024 — ‘plans being readied’, sirf prastav); Chandni Chowk plaza (TNIE Mar 2023 — pre-term + Smart City); Hafizia school bhoomi-pujan Sep 2021 (pre-term); GBGB house committee chairman (legislative process, kaam nahi); GBA Rs 2000 crore constituency grants (newspointapp/Udayavani, non-whitelist). NEGATIVE-QA: HC ne election petition 26 Mar 2024 ko quash ki (Lakshmidevi vs Arshad) — MLA respondent, aaropi nahi (rahat, negative nahi); Form 7/SIR complaint Oct 2026 (MLA complainant); defamation case (ETV Bharat Feb 2024, MLA complainant + non-whitelist); cabinet mantri 3 Aug 2026 (pad hai, seat ka kaam nahi); halafname mamle akele negative nahi. RETRY-LEADS: Women’s Degree College ka whitelisted coverage ya GO; Vidhan Sabha mantri-ashwasan; KLLADS itemized lists; Russell Market lokarpan post-event.
karnatakaWorks['rizwan-arshad'] = [];

// --- Shanti Nagar ---

// REJECT-LOG (n-a-haris): dementia-friendly initiative (TOI Sep 2026 — abhiyan-shubharambh); CMIDP Rs 50 crore/MLA grant (daijiworld ghoshna, non-whitelist; whitelisted coverage generic 28 constituencies, Shantinagar itemized nahi); cabinet Rs 2,296 crore Bengaluru grant Oct 2025 (NIE generic; Shantinagar Rs 92.45 crore sirf Bangalore Mirror, non-whitelist; itemized sirf NammaBNP NGO tracker); Hebbal flyover loop Rs 80 crore (CM ne inaugurate kiya, seat bahar); BDA chairman pad/Open House/site take-back (pad + BDA-wide); Jogupalya community halls meeting (Bangalore Mirror Dec 2022, pre-term + non-whitelist). NEGATIVES — election petition (The Hindu Feb 2024; SC dismissal Jul 2024) — halafname mamla akela, negative nahi; beta Mohammed Haris Nalapad ke saare mamle (Unocoin bitcoin chargesheet IE Jun 2026; RSS defamation stay; Jan 2024 FIR; ED crypto searches; 2018 pub brawl) — parivar bahar, MLA khud aaropi nahi; statue/Haris Circle 2021 (pre-term); Domlur theatre 2022 (pre-term + non-whitelist). RETRY-LEADS: Oct 2025 cabinet CMIDP Shantinagar itemized GO (badge sarkari); community hall Akkithimmanahalli lokarpan whitelist par mile to entry.
karnatakaWorks['n-a-haris'] = [];



// ============================================================================
// BATCH 3 (Bangalore Urban — doosra hissa, 14 seats, 5/31 jile)
// ============================================================================

// --- Gandhi Nagar ---

karnatakaWorks['dinesh-gundu-rao'] = [
  {
    title: 'Gandhi Nagar ke Tank Bund Road par 418-metre white-topped sadak ka lokarpan, Rs 8.74 crore ki lagat aur fire hydrants ke saath',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/karnataka/bengaluru/bengalurus-gandhinagar-gets-white-topped-roads-with-fire-hydrants-4098157',
    date: '2026-08-03',
    note: 'Deccan Herald ke anusar Greater Bengaluru Development Minister Krishna Byre Gowda aur Gandhinagar MLA Dinesh Gundu Rao ne sanyukt roop se fire hydrants se lais nayi white-topped sadkon ka lokarpan kiya. 418-metre Tank Bund Road (Upparpet police station se Shantala Junction tak) Rs 8.74 crore me bani. Rao ne kaha ki Gandhinagar Pete ki sankeern sadkon par aag lagne par fire engine ke pahunchne me dikkat hoti hai, isliye nayi sadkon par turant paani uplabdh karane ke liye fire hydrants lagaye gaye hain. (tithi-inferred: article 2026-08-04 subah publish hua, usme “on Monday” lokarpan likha hai — 2026-08-03 Somvaar tha)',
    period: '2023-2028',
    stage: 'lokarpan',
  },
  {
    title: 'Gandhi Nagar ki RT Street par 645-metre white-topped sadak ka lokarpan, Rs 2.52 crore me poori hui, fire hydrants bhi lage',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/karnataka/bengaluru/bengalurus-gandhinagar-gets-white-topped-roads-with-fire-hydrants-4098157',
    date: '2026-08-03',
    note: 'Usi sanyukt lokarpan karyakram me 645-metre RT Street (Srinivasa Mandira Road se Avenue Road tak) ka bhi lokarpan hua, jo Rs 2.52 crore me poori hui. Krishna Byre Gowda ne bataya ki project me BWSSB water supply aur underground sewerage, paidal footpaths aur utility ducts shamil hain. Rao ne kaha ki Gandhinagar aur Majestic Bengaluru ke sabse purane ilakon me hain, jahan sadkon ka upgrade charnon me hota aaya hai. (tithi-inferred: Entry 1 wala hi karyakram — 2026-08-03)',
    period: '2023-2028',
    stage: 'lokarpan',
  },
  {
    title: 'RSS sadasya ki criminal defamation shikayat me Dinesh Gundu Rao ke khilaf magistrate court ne case khatm kiya; shikayatakarta ki challenge par High Court ne sabko sessions court bheja',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/legal-news/karnataka-hc-priyank-kharge-nalapad-rss-defamation-case-10902459/',
    date: '2026-10-01',
    note: 'RSS sadasya Tejas A ne Priyank Kharge, Dinesh Gundu Rao aur Mohammed Haris Nalapad ke khilaf criminal defamation ki shikayat ki — aarop tha ki unhone sarvajanik bayanon me RSS aur uske sadasyon par avaidh, asamajik aur aapattijanak karyon ka aarop lagakar sangathan ko nakaratmak roshni me pesh kiya. Magistrate court ne 27 June ko shikayat par cognisance li, lekin Dinesh Gundu Rao ke khilaf case khatm kar diya — court me unka jawab tha ki unke bayan Tejas ya kisi pehchane jaane wale vyakti ke khilaf nahi the, balki Kharge aur unke parivar ko mili death threats ki ninda ke sandarbh me diye gaye the. Shikayatakarta ne Rao ko khatm karne wale aadesh ko challenge kiya; Karnataka High Court (Justice Anant Ramanath Hegde) ne 1 October 2026 ko Kharge-Nalapad ki quashing arzi par unhe sessions court me revision petition dayar karne ka nirdesh diya aur Tejas ko bhi sessions court bheja. (tithi: 1 October 2026 — HC ke taza aadesh ki; article updated Oct 1, 2026).',
    period: '2023-2028',
  },
];
// REJECT-LOG (dinesh-gundu-rao): CM Siddaramaiah ne Chickpet + Gandhinagar white-topping lokarpan kiya (ETV Bharat Oct 2025 — non-whitelist + lokarpan CM ne, MLA maujood); NIE Oct 2025 Bengaluru Rs 1.20 lakh crore boost (CM/DCM ka karyakram); TOI Ejipura PHC lokarpan (Sep 2023 — Ejipura Gandhi Nagar me nahi + mantri niyam); Hindu Mangaluru MGNVY 2.0 shilanyas (Rs 165cr, district in-charge, seat bahar); Hindu Mangaluru nursing hostel lokarpan (seat bahar + mantri); IE Mangaluru UPHC (non-whitelist aggregator PDF); ETV Bharat Gundu Rao (pita) murti anavaran (parivar niyam + CM ne kiya + non-whitelist); citizenmatters 2023 interview (non-whitelist + pre-term daave); bangalorenewsnetwork K.J. George white-topping (pre-term + dusre ka karyakram); Yatnal cases (ANI Jun 2026 — DGR aaropi nahi, parivar mamla); NIE prison academy lokarpan (CM ne kiya, Home ka kaam); private hospital launches (mantri niyam + private). COORDINATOR-QA: negative note ko IE Oct 1, 2026 article tak simplify kiya (worker ne 3 pages ke facts mix kiye the); DH white-topping article khud kholkar verify kiya — donon entries valid, tithi-inference verified.

// --- Rajaji Nagar ---

// REJECT-LOG (s-suresh-kumar): mini-forest park Kamakshipalya (Bangalore Mirror — non-whitelist + fund/bhoomika undisclosed + May 2023+ vyaktigat lokarpan nahi); Lokayukta complaint over biased contracts (BM Jul 3, 2026 — sirf complaint, FIR me MLA aaropi nahi → negative NAHI); Hindu Apr 2023 pre-election plans (yojana, kaam nahi); DH Jul 21, 2026 PoP idol letter (maang); TOI metro-land letter + cycling feat + IPL tickets (letters/personal); BM 'traffic cop for a day' (stunt); ETV Bharat auto-training launch (abhiyan + non-whitelist); IBC World News vehicle clearance (abhiyan + non-whitelist); Gayathridevi Park pool (HC ne PIL par roka, kaam adhoora); BMTF denotification FIR 2012 (pre-term); Himachal 'Suresh Kumar' khabrein (galat vyakti).
karnatakaWorks['s-suresh-kumar'] = [];

// --- Govindaraj Nagar ---

// REJECT-LOG (priya-krishna): Rs 100cr grant allocation Govindrajnagar (+27 GBA seats, Jun 2026, newspointapp/Udayavani aggregator — ghoshna); Rs 415cr foundation stone CM Siddaramaiah + Rs 8cr slum-housing inauguration pita M Krishnappa ne (DC 2017 — pre-term + parivar niyam); Platform 65 restaurant inauguration (ap7am/fnbnews — private business, maujoodgi); KLE Law College walkathon flag-off (ceremonial, private college); Hindu 'Corridors of Power' drainage/footpath mentions (in-progress, koi lokarpan nahi); Hindu birthday flexes (Apr 2025 — civic-violation news); election coverage (pre-term). NEGATIVES: Lokayukta assets FIR/raids 2012-14 (family-centric, pre-term); 2016 land-grab private complaint Srirangapatna (stay, pre-term); 2023 halafname unlawful-assembly FIR (Sathanur PS) — May 2023+ nyayik vikas nahi → sab reject.
karnatakaWorks['priya-krishna'] = [];

// --- Vijay Nagar ---

karnatakaWorks['m-krishnappa-vijay-nagar'] = [
  {
    title: 'Vijayanagar me Rs 13 crore ke Krishnadevaraya Palike Bazaar ka udghatan hua, ye Dakshin Bharat ka pehla bhoomigat vataanookoolit bazaar hai jisme 79 dukaanen hain',
    category: 'Rojgar',
    badge: 'news',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/karnataka/bengaluru/south-indias-first-underground-ac-market-opens-in-bengaluru-3164067',
    date: '2024-08-25',
    note: 'CM Siddaramaiah ne Vijayanagar MLA M. Krishnappa ke saath Rs 13 crore ke Krishnadevaraya Palike Bazaar ka udghatan kiya. Bazaar MLA ki soch thi (Delhi ke Palika Bazaar ko dekhne ke baad unhone 2017 me ye pariyojna maangi; udghatan me CM ne unhe shrey diya). Fund disclosed: BBMP se Rs 13 crore (2017-18 me Rs 5 crore + 2021-22 me Rs 8 crore); 1,365 sqm, 79 dukaanen (~9 sqm pratyek), central AC ke saath 31 dukaanon me individual AC, 8 pravesh, 2 escalator, 1 lift. (unke bete Priya Krishna, jo Govindrajanagar ke MLA hain, bhi maujood the — beta sirf aaya tha; pariyojna ka shrey Vijayanagar MLA ka hai.)',
    period: '2023-2028',
    stage: 'lokarpan',
  },
];
// REJECT-LOG (m-krishnappa-vijay-nagar): Kanaka Bhavan/JP Park/Ranga Mandira/Ambedkar Bhavan/Kempegowda Commercial Complex fund daave (DH — sirf MLA ka dawa, ghoshna); bogus khata review meeting (Hindu Nov 2025 — nirikshan); Gangondanahalli fire visit (Hindu Feb 2024 — ashvasan); IPL screening (TOI Jun 2025 — event); Ram Mandir Rs 10 lakh daan (Republic World — non-whitelist + daan); Rs 100cr GBA grant (newspointapp — aggregator + ghoshna); NIE vendor story Jan 2018 (pre-term); Lokayukta raids 2012 (pre-term, vikas nahi); cabinet berth pieces (politics); Citizen Matters tracker 2017-18 (pre-term + non-whitelist); DC 2017 (pre-term). NEGATIVES: halafname ka 1 pending mamla akele NAHI; BJP Bengaluru South wale namesake ke mamle mix NAHI kiye.

// --- Chamrajpet ---

karnatakaWorks['b-z-zameer-ahmed-khan'] = [
  {
    title: 'Lokayukta police ne Zameer Ahmed Khan ko aay se adhik sampatti ke mamle me poochtachh ke liye summon bheja, 3 December ko hazir hone ko kaha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/zameer-ahmed-khan-summoned-to-appear-before-lokayukta-police-in-da-case/article68876873.ece',
    date: '2024-11-17',
    note: 'Karnataka Lokayukta police ne November 2024 me B. Z. Zameer Ahmed Khan ko disproportionate assets (DA) mamle me 3 December ko poochtachh ke liye hazir hone ka summon bheja. Mamle ki jadh: ED ne August 2021 me IMA ponzi scam ki jaanch me unse jude thikaanon par chhapa mara; ED ne unke khilaf chargesheet dayar nahi ki, lekin DA ki report tatkalin Anti-Corruption Bureau (ACB) ko bheji jisne FIR darj ki; ACB September 2022 me bhang hui aur mamla Lokayukta police ko transfer ho gaya; jaanch ab phir shuru hui hai aur summon isi ke tehet bheja gaya. Article me Khan ka jawab ya unki pratikriya darj nahi.',
    period: '2023-2028',
  },
  {
    title: 'Karnataka Lokayukta police ne Governor se Zameer Ahmed Khan ke khilaf Prevention of Corruption Act ke tehet mukadma chalane ki anumati maangi; chargesheet dayar karne ka prastav',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'http://indianexpress.com/article/cities/bangalore/zameer-ahmed-khan-disproportionate-assets-case-lokayukta-prosecution-sanction-10785377/',
    date: '2026-07-14',
    note: 'Lokayukta police ne 9 July ko Governor Thawarchand Gehlot ko patra likhkar Congress MLA Zameer Ahmed Khan ke khilaf Prevention of Corruption Act ke tehet mukadma chalane ki anumati maangi, taaki Special Lokayukta Court me chargesheet dayar ki ja sake. 2021 ki FIR ED ki soochna par adharit thi jisme Rs 87.44 crore ke disproportionate assets ka aarop tha; jaanch me lagbhag Rs 26 crore ki adhik sampatti payi gayi. Pichhle saal Karnataka High Court ne Khan ki jaanch band karne ki arzi kharij kar di thi. Jaanch unki 2013-2018 ke mantri-kal ki sampatti se sambandhit hai. Article me Khan ka jawab ya pratikriya darj nahi.',
    period: '2023-2028',
  },
];
// REJECT-LOG (b-z-zameer-ahmed-khan): Hubballi PU college udghatan (TOI 2024 — mantri karya, seat bahar); Ballari 862 makaan shilanyas (Hindu Jan 2026 — district in-charge, seat bahar); Chamarajpet police stations udghatan (BM — CM ne kiya, bhoomika nahi); Mysuru 1,440 makaan shilanyas (Star of Mysore — seat bahar); News18 interview 'Rs 400cr mile' (sirf dawa); Manipur students Rs 2 lakh sahayata (newsdrum — daan + non-whitelist); 2-acre zameen vivaad (Organiser — non-whitelist, vivaad); Nasha Mukt programme (Business Standard SMPL — abhiyan); Chikkajala KHB township nirikshan (Public TV — nirikshan/ghoshna, seat bahar); Haj Ghar 2012 (pre-term); Citizen Matters tracker (pre-term). Halafname ke 5 pending mamle akele negative NAHI.
// COORDINATOR-QA: donon negatives whitelisted pages se verify (Hindu summon Nov 2024; IE prosecution-sanction Jul 2026 — cross-outlets se corroborate). MINISTER-STHITI hal: IE (14 Jul 2026) ke mutabik Zameer June 3, 2026 ke pehle cabinet me NAHI the, lekin 3 Aug 2026 ko cabinet me vaapas aaye aur 12 Aug 2026 ko HOUSING portfolio mila (Times Now / ANI via lokmattimes / latestly). Waqf & Minority Welfare ab U. T. Khader ke paas. Brief ka 'mantri' sahi hai — portfolio sirf Housing.

// --- Chickpet ---

// QA-DROP (coordinator, uday-garudachar): worker ki negative entry (false-affidavit conviction → HC quash 24 Apr 2024) DROPPED — primary source TOI page 403 par khulti nahi (worker fail, coordinator retry bhi fail). Note-grounding rule ke tahat unreadable page source nahi ban sakta. RETRY-LEAD (live-browser): https://timesofindia.indiatimes.com/city/bengaluru/hc-nixes-orders-against-bjp-mla-in-affidavit-case/articleshow/109636639.cms — khulne par valid relief-entry (chain: Oct 2022 special court conviction → Sep 2023 sessions appeal kharij → 24 Apr 2024 HC quash).
// IDENTITY CORRECTION (worker): brief me 'Garudachar 2018 me haare the' galat tha — ve 2018 me JEETE the (R. V. Devraj ko harakar); 2023 me seat retain ki. Foundation 2023 electionNote sahi hai, koi edit nahi.
// REJECT-LOG (uday-garudachar): VV Puram Food Street bhoomi-pujan Dec 2022 (Public TV — non-whitelist + pre-term); Gandhi Bazaar flower market Rs 22cr (Hindu Nov 2025 — Basavanagudi seat me, bhoomika nahi); BBMP Rs 9.5cr upgrade (TOI/HT — pre-event); HOPCOMS mela (Hindu — abhiyan); Parvatipura PMAY houses 2022 (Public TV — pre-term); hospital/jewellery karyakram (maujoodgi); Garuda Mall/EWS aarop (citizenmatters 2013 — non-whitelist, vikas nahi); 2023 halafname 3 cases akele NAHI.
karnatakaWorks['uday-garudachar'] = [];

// --- Basavanagudi ---

// REJECT-LOG (l-a-ravi-subramanya): Kadalekai Parishe festival (NIE/TOI Nov 2025 — event, quotes); Basavanagudi garbage rounds (BM Jun 2026 — nirikshan); garbage complaints (BM Sep 2026 — nirikshan); legislature committee waste inspection (DH — seat bahar); Gunasheela Hospital jubilee (dusre ka karyakram); Swachcha Shakthi park (BM Mar 2023 — pre-term + MP ne kiya); CCTV cameras (TOI 2017 — pre-term); school funds 2018/Gavipuram/BWSSB (pre-term); Heritage Corridor prastav (Jan 2023 — ghoshna/pre-term). NEGATIVE-QA: halafname ka 1 pending mamla akele NAHI; IE 'Shadow of 2020 bank scam' (May 2023 — sirf profile mention, vikas nahi). RETRY-LEAD (standing): https://kllads.kar.nic.in/ — sarkari MLA-LAD works portal, worker browser.open fail; live-browser par per-seat works check ka standing lead.
karnatakaWorks['l-a-ravi-subramanya'] = [];

// --- Padmanabhanagar ---

karnatakaWorks['r-ashoka'] = [
  {
    title: 'Supreme Court ne R. Ashoka ke khilaf Bagar Hukum zameen allotment case me darj Karnataka ACB ki FIR ko radd kar diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI (The Week)',
    sourceUrl: 'https://www.theweek.in/wire-updates/national/2025/12/17/lgd31-sc-mla-corruption-case.html',
    date: '2025-12-17',
    note: 'Supreme Court ki bench (Justices Sanjay Karol, Vipul M. Pancholi) ne Karnataka ACB ki FIR radd karte hue kaha ki shikayatkartaon ki taraf se unki credibility par sawal uthane ki koshish thi aur karye politically motivated aur malice se prerit lage. FIR unke Bengaluru South Taluk Bagar Hukum Land Regularisation Committee ke head ke karyakal me zameen allotment me aniyamittataon ki janch ke liye darj hui thi; aarop tha ki SC/ST aur garibon ke liye sarkari zameen ka avaidh allotment unke parivar, siyasi followers aur corporators ko kiya gaya. SC ne Karnataka HC ka quashing-petition kharij karne wala aadesh radd kiya; janch bina state sarkar ki sanction ke shuru hui thi — record me sanction hone ka koi saboot nahi mila, isliye ACB ki preliminary report, FIR aur uske baad ki saari karyavahi express bar ke bavjood chali. (tithi: PTI wire 17 December 2025 — adesh usi din ya usse pehle ka)',
    period: '2023-2028',
  },
];
// REJECT-LOG (r-ashoka): Iwo Jima park (TOI Jan 2022 — pre-term); Agarwal Eye Hospital (pre-term + private + non-whitelist); Malabar Grandma Home (maujoodgi, CSR); Ram Lalla Deepotsava (pre-event + party); Hindu garbage review (sirf nirdesh); nammabnp.org tracker (NGO, 'Approved'); cityairnews/dailyprabhat daave (bayanbaazi); LoP pad-karye (sab — LoP niyam); metro purple line (pre-term + state); Ashokavana park (Wikipedia — koi whitelist source nahi). COORDINATOR-QA: PTI (The Week) page khud kholkar verify kiya — SC-quash relief entry valid.

// --- B.T.M. Layout ---

// REJECT-LOG (ramalinga-reddy): double-decker flyover Ragigudda-CSB Rs 449cr (IE Jul 2024 — BMRCL metro pariyojna + mantri bhoomika, seat-lokarpan nahi); Rs 47cr Ejipura buffer-road (ibcworldnews — non-whitelist); Rs 27cr BTM civic works review (Hindu Nov 2025 — nirikshan, re-tender); free auto training (NIE Feb 2026 — abhiyan + CSR); Madiwala Lake Rs 15cr (Hindu Dec 2025 — GBA commissioner ke nirdesh, bhoomika nahi); analyzer handover UPHC Tavarekere (Rotary — non-whitelist + CSR); NammaBNP tracker (NGO, 'Approved'); metro station renaming (siasat — maang). NEGATIVES: halafname ke 4 cases akele NAHI; May 2023+ me koi FIR/chargesheet/janch nahi. Note: mantri mantri Ramalinga Reddy rahe; Aug 2026 cabinet me unhe Forest, Ecology & Environment mila (Times Now/ANI 12 Aug 2026) — mantri-niyam badla nahi.
karnatakaWorks['ramalinga-reddy'] = [];

// --- Jayanagar ---

// REJECT-LOG (c-k-ramamurthy): pothole protest (TOI Sep 2025 — adhoora kaam, protest coverage); delayed white-topping (TOI Apr 2026 — adhoora + dawa); footpath letter (BM — maang); Apollo Run (maujoodgi, non-whitelist); recount/chunav-vivad (TOI Mar 2025 + Jan 2026 — recount akele negative nahi); halafname 3 cases (akele nahi); Form-7/SIR voter-deletion vivaad (DH Oct 2026 — FIR BJP workers ke khilaf, MLA aaropi nahi → negative NAHI; WATCH: next cycle me nazar rakho).
karnatakaWorks['c-k-ramamurthy'] = [];

// --- Mahadevapura ---

// REJECT-LOG (manjula-s): Varthur maternity hospital renovation (TOI Jul 2023 — MLA sirf maujood, citizen group ne kiya); Rs 25cr grant/Rs 700-800cr demand (TOI Sep 2025 — maang); Rs 50cr grant (newspointapp Jun 2026 — aggregator + ghoshna); Sumadhura road (private, maujoodgi); Akshaya Patra kitchen (private event); Elevated Corridor (BM — state project, non-whitelist); KLLADS utilization — Hindu (14 Jun 2025) + NIE (15 Jun 2025) citizens' report card: unke Rs 4 crore KLLADS me se ZERO allocate hua (absence ki pushti). NEGATIVES: koi nahi (halafname 0 cases). PEHCHAAN-QA: BWSSB chairperson 'N. Manjula' confuse nahi ki; pati Aravind Limbavali ke purane kaam credit nahi kiye.
karnatakaWorks['manjula-s'] = [];

// --- Bommanahalli ---

// REJECT-LOG (m-satish-reddy): Swaccha Graha Kalika Kendra (Hindu Aug 2023 — pre-term); Cauvery 5th stage (CM+DCM ne dedicate kiya, bhoomika nahi); double-decker flyover 1 May 2026 (BMRCL — maujoodgi); Vintage Car Park 2019 (pre-term); ABV stadium 2022 (pre-term); Rs 60cr allocation (newspointapp — aggregator + ghoshna); GO EC HQ (private, non-whitelist); stray dog Zero Hour (maang); KCDC plant dawa (IE May 2023 — poll se pehle); bribery charge (DH via Dailyhunt — aggregator). NEGATIVES — land grab allegation (citizenmatters — non-whitelist); bed-blocking scam (Hindu May 2021 — pre-term, sirf aarop); supari case (Feb 2023 — MLA peedit, pre-term); SUVs aag (NIE 2021 — MLA peedit, pre-term).
karnatakaWorks['m-satish-reddy'] = [];

// --- Bengaluru South ---

// REJECT-LOG (m-krishnappa-bengaluru-south): Doddathoguru Lake rejuvenation (infosys.com Nov 2025 — chief guest, CSR fund, bhoomika nahi); Metro Pink Line trial ride (TOI Sep 2026 — rajya pariyojna); BBMP property-tax protest (TOI 2024 — virodh); KDP meeting (DH Sep 2026 — upasthiti); IndiaWaterPortal lake story (citizens-led, non-whitelist); Anjanapura protest 2021 (pre-term); Bingipura Lake 2021 (pre-term); Hindu road review 2021 (pre-term); Nagarothana Rs 206cr (BM 2022 — pre-term). PEHCHAAN-JAAL (INC namesake Vijay Nagar wale M. Krishnappa — mix NAHI): 215-foot flagpole (OneIndia Jan 2024); DH 'Billionaire MLA ministerial demand' (Aug 2026); DC 'He feeds the poor' (2017). NEGATIVES: halafname 0 cases; 2014 Lokayukta denotification matter (pre-term + Governor ne recommendation reject ki).
karnatakaWorks['m-krishnappa-bengaluru-south'] = [];

// --- Anekal ---

// REJECT-LOG (b-shivanna): KSPCB chairman appointment (DH Sep 2026 — pad, seat-kaam nahi); Anekal 78 works lokarpan (NIE May 2025 — D K Shivakumar ne kiya, dusre ka karyakram); stadium ghoshna (NIE May 2026 — CM ki ghoshna, KHB fund); 8 villages revenue records transfer (Asianet Newsable Aug 2026 — Vidhansabha-maang ka nateeja jaisa, lekin non-whitelist → reject; whitelisted coverage mile to entry possible); Kiran Mazumdar-Shaw sadak-vivad (maang); KSPCB state-level faisla (DH Oct 2026 — seat-level nahi); Rs 45cr grant dawa (newspointapp — aggregator). NEGATIVES: 2018 IT raid (pre-term + daijiworld non-whitelist); Bommasandra murder allegation (citizenmatters — non-whitelist).
karnatakaWorks['b-shivanna'] = [];

// === BATCH 4: Belagavi (6/31) — 18 MLAs, 18 assignments ===
// --- Nippani ---
karnatakaWorks['shashikala-annasaheb-jolle'] = [
  {
    title: 'Karnataka High Court ne 5 April 2024 ko 2023 Nippani vidhansabha chunav ke matdata-riswat-khori aarop wale case me MLA Shashikala Jolle ke khilaf chal rahi poori karyawahi ko radd kar diya, jisse unhe poori raahat mili',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/karnataka-hc-fir-bjp-mp-raghavendra-case-mla-shashikala-jolle-9281298/',
    date: '2024-04-20',
    note: 'Nippani Town police ne 2023 assembly polls ke dauran chunaavi riswat-khori ka aarop lagakar case darj kiya tha aur chargesheet file hui thi, jisme Shashikala Jolle khud aaropi (accused no. 2) thi — unke liye prachar kar rahe ek vyakti ke paas Rs 10,000 nagad, voter list aur BJP chinha wale handbill milne ka aarop tha. MLA ke counsel ne dalil di ki shikayat/chargesheet se koi apradh banta hi nahi, jabki prosecution ne trial ki maang ki. Justice Krishna Dixit ki bench ne maana ki jabt nagad rakhna IPC Section 171(E) ke tahat riswat nahi banta aur RP Act ka voter-parivahan wala aarop bhi lagu nahi hota, isliye CC No. 2990/2023 (Crime No. 52/2023) ki poori karyawahi radd kar di gayi. Maamla 2023 ke chunav se juda hai lekin nyayik faisla vartaman karyakaal (May 2023 ke baad) ka hai.',
    period: '2023-2028',
  },
];


// --- Chikkodi-Sadalga ---
karnatakaWorks['ganesh-prakash-hukkeri'] = [];


// --- Athani ---
karnatakaWorks['laxman-sangappa-savadi'] = [
  {
    title: 'CM Siddaramaiah ne Athani taluk ke Kottalagi me Kottalagi-Ammajeshwari lift irrigation project ka shilanyas kiya — lagbhag Rs 1,500 crore ki pariyojana se 19,274 hectare khet ko sinchai milegi',
    category: 'Paani',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/centre-creating-hurdles-for-irrigation-projects-says-cm/articleshow/108280785.cms',
    date: '2024-03-06',
    period: '2023-2028',
    note: 'TOI (Hubballi) ke mutabik CM Siddaramaiah ne Athani taluk ke Kottalagi me iss lift irrigation project ka shilanyas rakha; pariyojana lagbhag Rs 1,500 crore ki hai aur 19,274 hectare krishi-bhoomi ko sinchai degi. CM ne local MLA Laxman Savadi ki bhoomika ka ullekh karte hue kaha: “Savadi did not demand a ministerial berth but this irrigation project” — yani Savadi ki maang ka dastaveji nateeja. The Hindu (6 Mar 2024) ne bhi iss shilanyas samaroh ki pushti ki hai; event me MLA Savadi maujood the. Credit capped: shilanyas CM ne kiya, Savadi ki bhoomika maang rakhne tak seemit darj hai. Date-note: The Hindu ki report 6 March 2024 ko publish hui aur event ko “Wednesday” bataya — 6 March 2024 Wednesday tha, isliye tithi 2024-03-06 rakhi gayi hai.',
  },
  {
    title: 'Athani police ne DCC bank union neta Ningaraj Karennavar par hamle ke aarop me MLA Laxman Savadi, unke bete Chidanand Savadi aur samarthakon par FIR darj ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/karnataka-mla-laxman-savadi-his-son-and-followers-booked-for-assault-of-dcc-bank-worker/article70473606.ece/amp/',
    date: '2026-01-05',
    period: '2023-2028',
    note: 'The Hindu (5 Jan 2026) ke mutabik Athani police ne MLA Laxman Savadi, unke bete Chidanand Savadi aur samarthakon ke khilaaf DCC Bank union leader Ningaraj Karennavar par hamle ke aarop me FIR darj ki. FIR ke mutabik 3 Jan 2026 ko Athani sthit MLA ke niwas par MLA ne Karennavar ko DCC bank karmchari (MLA ke rishtedaar) ke transfer ka aarop lagate hue thappad maara; bete ne kamar me laat maari; 6-8 logon ne maarpeet ki, jisse Karennavar gambhir ghayal hue aur unhe Belagavi ke private aspatal me bharti karaya gaya. BNS ki dhaarayein 189(2), 191(2), 115(2), 351(2), 352(2), 190 (gairkanooni jamaavda, maarpeet, jaan se maarne ki dhamki, apshabd) me mamla Athani Police Station me darj hua. Savadi ka jawab (4 Jan 2026, The Hindu): unhone aarop se inkaar karte hue kaha — “Neither I nor my supporters are involved in the incident in any way”; Karennavar khud union maslon par charcha ke liye aaye the. MLA samarthakon ne Karennavar ke khilaaf SC/ST (Prevention of Atrocities) Act me prati-shikayat darj karayi aur Athani me virodh pradarshan karke aarop ko jhootha bataya. Stage: sirf FIR star — giraftari ya chargesheet ki established-media reporting ab tak nahi mili; whitelist media me koi raahat (stay/jamanat) bhi darj nahi hai.',
  },
];


// --- Kagwad ---
karnatakaWorks['bharamgouda-alagouda-kage'] = [];


// --- Kudachi SC ---
karnatakaWorks['mahendra-kallappa-tammannavar'] = [];


// --- Raibag SC ---
karnatakaWorks['duryodhan-mahalingappa-aihole'] = [];


// --- Hukkeri ---
karnatakaWorks['nikhil-umesh-katti'] = [];


// --- Arabhavi ---
karnatakaWorks['balachandra-laxmanrao-jarkiholi'] = [];


// --- Gokak ---
karnatakaWorks['ramesh-laxmanrao-jarkiholi'] = [
  {
    title: 'Karnataka State Cooperative Apex Bank ki shikayat par BJP MLA aur purva-mantri Ramesh Jarkiholi aur do anyon ke khilaf Rs 232.88 crore ke loan ki sharton ke ullanghan me cheating ka case darj',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI',
    sourceUrl: 'https://www.business-standard.com/amp/india-news/bjp-mla-ramesh-jarkiholi-booked-for-cheating-karnataka-cooperative-bank-124010700844_1.html',
    date: '2024-01-07',
    note: 'Press Trust of India (Bengaluru): Vishveshwarapuram police ne BJP MLA aur purva-mantri Ramesh Jarkiholi aur do anyon ke khilaf case darj kiya — aarop tha ki Karnataka Cooperative Apex Bank aur uske group ke any banks se liye gaye loan ki sharton ka ullanghan hua. FIR ke anusaar bank ke general manager ne shikayat ki ki Soubhagya Laxmi Sugars Ltd ke Chairman aur Managing Director Ramesh Jarkiholi aur company ke do directors Vasant V Patil aur Shankar A Pawade ne 12 July 2013 se 31 March 2017 tak firm ki sthapna aur vistaar ke liye Rs 232.88 crore ka loan liya; 31 August 2023 tak bakaaya raashi Rs 439.07 crore thi. Shart thi ki loan chukte hone tak firm ke managing director aur directors nahi badle jayenge, lekin shikayat ke anusaar aaropiyon ne bank ko bina bataye apni jagah anjaan vyaktiyon ko niyukt kar diya ‘with an intention to cheat’. Case IPC ki dhaara 406 (criminal breach of trust), 420 (cheating) aur 34 ke tahat darj hua.',
    period: '2023-2028',
  },
  {
    title: 'CID ne Karnataka State Cooperative Apex Bank se Rs 439.12 crore ki kathit dhokhadhadi me BJP MLA Ramesh Jarkiholi aur unke do sahyogiyon ke khilaf 4,888-page ki chargesheet dakhal ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/cid-files-chargesheet-against-ramesh-jarkiholi/article69491660.ece',
    date: '2025-04-25',
    note: 'The Hindu (Bengaluru, 25 April 2025): Criminal Investigation Department (CID) ne BJP MLA aur purva-mantri Ramesh Jarkiholi aur unke do sahyogiyon ke khilaf chargesheet dakhal ki — aarop hai ki unhone Karnataka State Cooperative Apex Bank Ltd. aur chaar district central cooperative (DCC) banks se kul Rs 439.12 crore ki dhokhadhadi ki. Sootron ke anusaar 4,888-page ki chargesheet Tuesday, 22 April ko dakhal hui, Karnataka High Court ki anumati ke baad — Jarkiholi ne FIR radd karne ke liye High Court me yachika di thi aur usi yachika ki sunvai ke dauraan court ne CID ko chargesheet dakhal karne ki anumati di. Mamla 2013 se 2017 ke beech Gokak-sthit Sowbhagya Lakshmi Sugars ko Karnataka State Cooperative Apex Bank aur Vijayapura, Tumakuru, Dakshina Kannada aur Uttara Kannada ke DCC banks dwara diye gaye Rs 232.88 crore ke loan se juda hai; us dauraan Jarkiholi company ke chairman aur managing director the aur board me unke do sahyogi Vasanth V. Patil aur Shankar C. Pavade director the. Shart thi ki loan chukte hone tak banks ki jaankari ke bina board me koi badlav nahi hoga, lekin Jarkiholi, Patil aur Pavade ne banks ko bina suchit kiye company chhod di aur loan bhi chukta nahi hua — byaj aur jurmaane sahit bakaaya Rs 439.12 crore ho gaya. CID ke Economic Offences Wing ne janch ki aur purva-mantri aur unke do sahyogiyon ko cheating sahit anye apraadhon me chargesheet kiya. Jiss din CID ne chargesheet dakhal ki, usi din company ne bakaaye ka kuch hissa bank ko chuka diya.',
    period: '2023-2028',
  },
  {
    title: 'Chargesheet dakhal hone se thoda pehle Ramesh Jarkiholi ne bank ko Rs 120 crore chukaye; CID ne kaha jaanch jaari hai aur supplementary chargesheet aayegi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/bengaluru/ramesh-jarkiholi-repays-rs-120-crore-beforecid-files-chargesheet-in-bank-fraud-case/articleshow/120652000.cms',
    date: '2025-04-25',
    note: 'The Times of India (Bengaluru): CID ne BJP MLA aur purva-mantri Ramesh Jarkiholi aur anyon ke khilaf cheating ke case me special court me chargesheet dakhal ki — aarop hai ki unhone Karnataka Cooperative Apex Bank se Rs 439 crore ki dhokhadhadi ki. Shikayat January 2024 me VV Puram police station me bank ke general manager ne darj ki thi: Gokak ki Soubhagya Laxmi Sugars Ltd ke chairman aur managing director Jarkiholi aur directors Vasant V Patil aur Shankar A Pawade ne July 2013 se March 2017 tak firm ki sthapna-vistaar ke liye bank aur uske group ke lenders se Rs 232 crore liye, lekin unhone shart ka ullanghan kiya ki loan chukte hone tak firm board of directors me badlav nahi karegi — shikayat me likha hai ‘Instead, the accused persons appointed others, and this was done with an intention to cheat’. Baad me case CID ko transfer hua, janch SP (financial intelligence) Raghavendra Hegde ki team ne ki. Jarkiholi aur anyon ne FIR radd karne ke liye High Court ka darwaza khatkhataya lekin safal nahi hue; HC ke green signal ke baad CID ne chargesheet dakhal ki (TOI ke anusaar 15 April; The Hindu ne chargesheet dakhal ki taareekh 22 April batayi). Chargesheet lagbhag 5,000 pages ki hai aur usme 70 gawahon ke bayan hain, Rs 439 crore ki dhokhadhadi ka aarop hai. Chargesheet dakhal hone se thoda pehle Jarkiholi ne bank ko Rs 120 crore chuka diye — chargesheet me is repayment ka zikr nahi hai. Ek senior CID officer ne STOI ko bataya ki bank adhikaariyon ne Rs 120 crore ke bhugtaan ki suchna di hai aur jaanch abhi poori nahi hui hai, isliye CID supplementary chargesheet dakhal karegi.',
    period: '2023-2028',
  },
];


// --- Yemkanmardi ST ---
karnatakaWorks['satish-laxmanrao-jarkiholi'] = [
  {
    title: 'ED ne 9-10 September 2026 ko Karnataka ke PWD mantri aur Yemkanmardi MLA Satish Jarkiholi se jude 21 thikanon par FEMA ke tahat searches ki, Rs 3.3 crore unaccounted cash aur ~Rs 15 lakh videshi currency zabt ki, aur PWD contracts me riswat tatha ghoshit-na-ki-gayi videshi niveshon ke dastavej milne ka aarop lagaya — Jarkiholi ne galat kaam se inkar karte hue jaanch me sahyog ka wada kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/satish-jarkiholi-karnataka-ed-searches-rs-3-3-crore-cash-seizure-10874707/lite/',
    date: '2026-09-12',
    note: 'ED ke anusaar Bengaluru, Belagavi, Gokak aur Kolkata me 21 premises par searches hue — inme PWD mantri Satish Jarkiholi, unki beti aur Chikkodi MP Priyanka Jarkiholi, bete Rahul Jarkiholi, behnoi YD Manjunath, OSD/PA Malagouda Patil aur associates se jude thikane shamil. Rs 3.3 crore unaccounted Indian currency, ~Rs 15 lakh ke US dollar/euro, digital devices aur aise dastavej zabt hue jo ED ke anusaar PWD me aniyamittaon aur contractors se riswat lene ka sanket dete hain; ED ka aarop hai ki Jarkiholi ne Congo ki gold-mining company Magnitude Star SARL me lagbhag 40% hissa liya aur Zambia/Congo ki mining companies me cash nivesh unauthorized channels se kiya gaya. Jarkiholi ka jawab: Opposition leaders ko nishana banaya ja raha hai, ‘I may have made some minor mistakes’, yeh ‘search and not a raid’ hai, FEMA violation ka notice mila hai, videshi nivesh abhi nahi hua — sirf RBI sahit agencies se permission maangi thi, cash par pariwar ne ownership claim kiya hai aur kanooni prakriya se wapas maangenge, jaanch me poora sahyog karenge. Jaanch jaari hai; abhi tak FIR/chargesheet ki khabar nahi.',
    period: '2023-2028',
  },
];


// --- Belgaum Uttar ---
karnatakaWorks['asif-raju-sait'] = [
  {
    title: 'Belgaum Uttar ke MLA Asif (Raju) Sait ne Sardar High School campus ke Karnataka Public School me Rs 5 crore ke naye classrooms ki bhoomi puja ki',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/rs-8cr-boost-for-belagavi-kps-mla-performs-bhoomi-puja-for-new-classrooms-labs/articleshow/133428328.cms',
    date: '2026-08-22',
    note: 'Page ke “Published” metadata me 2026-08-22T22:40:00+05:30 hai aur text me “on Saturday” — 22 Aug 2026 Saturday hai, isliye date pakki. MLA Asif Sait ne Sardar High School campus ke Karnataka Public School (KPS) me Rs 5 crore ki lagat se banne wale naye classrooms ki bhoomi puja ki; unhone ise Rs 8 crore ke kul development package ka hissa bataya jo sarkari school ko model educational institution banayega. DDPI Leelavati Hiremath ne kaha ki school ke vikas ke liye Rs 8 crore se adhik ka anudan minister Satish Jarkiholi ne dilwaya tha — matlab bhoomi puja MLA ne ki, fund minister dwara secured. Sansthan me lagbhag 2,000 vidyarthi padhte hain; avsar par deputy commissioner Mohammad Roshan, police commissioner Bhushan Gulabrao Borase, deputy mayor Hanumant Kongali, BEO Ravi Bhajantri aur Malagouda Patil maujood the.',
    period: '2023-2028',
    stage: 'shilanyas',
  },
  {
    title: 'Belgaum Uttar ke MLA Asif (Raju) Sait ne Karnataka Public School me Smart City pariyojna ke tahat Rs 3 crore ke robotics, language aur virtual laboratories ka udghatan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/rs-8cr-boost-for-belagavi-kps-mla-performs-bhoomi-puja-for-new-classrooms-labs/articleshow/133428328.cms',
    date: '2026-08-22',
    note: 'Page ke “Published” metadata me 2026-08-22T22:40:00+05:30 hai aur text me “on Saturday” — 22 Aug 2026 Saturday hai, isliye date pakki. MLA Asif Sait ne Smart City project ke tahat Rs 3 crore ki lagat se taiyaar robotics, language aur virtual laboratories ka udghatan kiya; isi Rs 8 crore package me smart educational facilities, virtual learning infrastructure aur workshop upgrades shaamil hain. Inka uddeshya vidyarthiyon ko modern, technology-driven learning ke avsar dena aur skill-based education majboot karna hai.',
    period: '2023-2028',
    stage: 'lokarpan',
  },
];


// --- Belgaum Dakshin ---
karnatakaWorks['abhay-patil'] = [
  {
    title: 'Belagavi ke Vaccine Depot me Senior Citizens Corner ka MLA Abhay Patil ne lokarpan kiya, jisme open-air theatre, sangeet kaksh, pustakalay, khel kaksh aur open-air vyayamshala bana hai.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/senior-citizens-corner-inaugurated-at-vaccine-depot-in-belagavi/article68973507.ece',
    date: '2024-12-08',
    note: 'The Hindu ne likha ki MLA Abhay Patil ne Vaccine Depot me senior citizens corner ka lokarpan kiya. Suvidhaon me open-air theatre, sangeet kaksh (tabla, guitar, violin, mouth organ aadi), pustakalay evam vachanalay, khel kaksh (table tennis, carrom, chess) aur halki kasrat ke liye open-air vyayamshala hai. MLA ne ise desh me apne prakar ki pehli pahal bataya, kaha ki unhone shahar me ek aur jagah Usabari Katte ke liye fund diya hai aur corner ki gatividhiyon ke liye vaarshik fund denge — fund ki rashi lekh me nahi batayi. Tithi anumanit: lekh 11 Dec 2024 ko chhapa aur lokarpan haal me hua bataya gaya, isi se tithi li gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Belagavi Dakshin me Rani Channamma Nagar Stage 1 aur 2 (Zone 6 aur 3A) me 24x7 paani supply yojna ka MLA Abhay Patil ne shubharambh kiya, jisse lagbhag 1,500 parivaaron ko laabh milega.',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/belagavis-24x7-drinking-water-upply-reaches-new-wards/articleshow/123337333.cms',
    date: '2025-08-15',
    note: 'TOI ne likha ki MLA Abhay Patil ne Belagavi Dakshin me Rani Channamma Nagar Stage 1 aur 2 (Zone 6 aur 3A) me 24x7 paani supply yojna ka shubharambh kiya; karyakram me BCC mayor Mangesh Pawar aur deputy mayor Vani Vilas Joshi maujood the. Yojna KUIDFC ke tahat Karnataka Urban Water Supply Modernisation Project (KUWSMP) me chal rahi hai, karyanvayan me L&T shamil hai; abhi lagbhag 1,500 ghar ko roz paani milega aur trial run ke baad dono zone me nirantar dabav wali 24x7 supply hogi. Tithi anumanit: lekh me Swatantrata Divas ke avsar par aur Shukravaar shaam likha hai; 15 Aug 2025 Shukravaar tha, isi se tithi li gayi.',
    period: '2023-2028',
  },
];


// --- Belgaum Rural ---
karnatakaWorks['laxmi-r-hebbalkar'] = [];


// --- Khanapur ---
karnatakaWorks['vithal-somanna-halagekar'] = [];


// --- Kittur ---
karnatakaWorks['babasaheb-devanagouda-patil'] = [];


// --- Bailhongal ---
karnatakaWorks['mahantesh-shivanand-koujalagi'] = [];

// REJECT-LOG (mahantesh-shivanand-koujalagi)
// R1: 50-bed Critical Care Unit (CCU), Bailhongal taluk hospital ka shilanyas (event 16 Feb 2026) — TOI (whitelisted,
//     kholkar padha) + The Hindu (published 17 Feb 2026, whitelisted, kholkar padha) — REJECT: shilanyas Health Minister
//     Dinesh Gundu Rao ne kiya (dusre neta ka karyakram); MLA Mahantesh Koujalagi ki bhoomika = maujoodgi + event-stariy
//     maang (compound wall ke liye fund, ambulance fuel allowance). Mantri ne MLA ki maang par compound wall ke liye
//     Rs 2 crore ki ghoshna ki — ye Vidhansabha maang ka dastaveji nateeja nahi, event-level maang par mantri ki ghoshna
//     hai (credit capped bhi nahi banta). MLA ka 'CCU ke liye Rs 23 crore jaari ho chuke' wala dawa mantri ke project
//     par hai — dawa-only, vyaktigat bhoomika/fund disclosed nahi.
//     URLs: https://timesofindia.indiatimes.com/city/hubballi/health-min-lays-foundation-for-50-bed-critical-care-unit-at-bailhongal-taluk-hosp/articleshow/128432965.cms
//     https://www.thehindu.com/news/national/karnataka/work-on-three-rural-health-facilities-in-belagavi-district-launched-by-minister-dinesh-gundu-rao/article70639422.ece
// R2: Assembly Question Hour (19 Feb 2024) — Bailhongal MLA ne taluk prashasanik bhavano ki marammat ka sawal uthaya;
//     Revenue Minister Krishna Byregowda ne 49 naye talukon me 2-3 saal me bhavan-nirman ki anumati ka ashwasan diya —
//     ANI-adharit outlets (Public TV English, The News Mill, webindia123, Take One) — REJECT: koi whitelisted outlet
//     (The Hindu/Indian Express/HT/NDTV/India Today/TOI/Deccan Herald/PTI) me iski coverage nahi mili — whitelist rule.
//     RETRY-LEAD: whitelisted coverage mile to 'Vidhansabha maang + mantri-ashwasan' (credit capped) entry sambhav.
//     URL: https://english.publictv.in/revenue-minister-govt-committed-to-construct-administrative-buildings-for-new-taluks/
// R3: KSFC chairman niyukti (26 Jan 2024, NIE 'Karnataka: 34 MLAs made chiefs of boards') — REJECT: pad-niyukti,
//     seat-stariy vikas-kaam nahi.
// R4: Sangolli Rayanna Utsav / Sainik School rock garden lokarpan, Bailhongal taluk (Jan 2024) — nammabelagavinews,
//     countryandpolitics — REJECT: CM-led karyakram + non-whitelisted outlets.
// R5: Centre ki Rs 106 crore Belagavi road sanctions (Bailhongal taluk me Asundi-Hittangi-Suttgatti road, Rs 6 crore) —
//     REJECT: kendra-sarkar (Nitin Gadkari) ki swikriti, MLA ki bhoomika nahi; outlets bhi non-whitelist
//     (allaboutbelgaum, newsonprojects).
// R6: 2025 budget me 'Bailhongal town ring road ka DPR' prastav (NIE) — REJECT: budget-ghoshna/prastav, koi swikriti
//     ya kaam nahi.
// R7: Sri Channavrushabendra lift irrigation shilanyas, Nesargi (publicnext) — REJECT: Kittur seat ka kaam
//     (MLA Babasaheb Patil ke prayas), Bailhongal seat ke bahar.
// R8: COVID positive (Jul 2020, NIE/The Hindu) aur Vidhana Soudha ke saamne car accident (Public TV) — REJECT:
//     pre-term news events, vikas-kaam nahi.
// R9: KMF chairman (The Hindu, Oct 2020) — REJECT: pre-term pad-bhoomika.
// NEGATIVES: 0 — Halafname ka 1 mamla = RP Act Sec 127-A (Crime No. 224/2016, CC No. 31408/2021, Market PS Belagavi);
//     Karnataka HC (Crl. Petition No. 5528/2022, Sep 2022, Justice S. Sunil Dutt Yadav) ne chargesheet set aside karke
//     mamla prarambhik stage par wapas bheja (raahat) — pre-term, May 2023+ koi nyayik vikas established media me nahi
//     mila, isliye negative entry nahi (rule: pre-term tabhi jab vartaman vikas). Search results me mile baaki 'Mahantesh'
//     naam wale court mamle doosre vyaktiyon ke hain (IAS Mahantesh Bilagi aadi) — pehchan mismatch. May 2023+ me MLA ke
//     khilaf koi FIR/chargesheet/confirmed janch whitelisted media me nahi mili.
// RETRY-LEADS (parent ke liye):
//  - R2 Assembly-prashn (19 Feb 2024): ANI copy ka whitelisted version (The Hindu/Deccan Herald/TOI/PTI) mile to
//    credit-capped entry sambhav.
//  - CCU compound wall (Rs 2 crore, Feb 2026): mantri ki event-ghoshna thi; bhavishya me MLA-led shilanyas/lokarpan ki
//    whitelisted post-event reporting aaye to entry banegi.
// FOUNDATION CROSS-CHECK: slug 'mahantesh-shivanand-koujalagi' karnataka.ts + ka_mla_g1.ts dono me maujood, works: [] —
// is fragment se koi antar nahi; fund KLLADS (Rs 2 crore/seat/varsh) pehle se darj; criminalCases: 1 halafname se mel
// khata hai. FLAG (minor, foundation-level): education 'LLB (Special), Karnataka University, Dharwad (1996)' vs
// indialeader 'B.Com 1998 + LLB 2002' — parent verify kare.


// --- Saundatti Yellamma ---
karnatakaWorks['vishwas-vasant-vaidya'] = [];


// --- Ramdurg ---
karnatakaWorks['ashok-mahadevappa-pattan'] = [];

// ============================================================================
// BATCH 5 (Bidar + Chamarajanagar + Chikkaballapura + Chikmagalur — 10/31 jile)
// ============================================================================
// Kul: 21 entries / 20 assignments. Vartaman rajya kul (grep): entries 53 -> 74,
// assignments 62 -> 82.
// QA (coordinator): prabhu-chavan ki Salar News entry DROP (whitelist-bahar srot;
// event valid tha, whitelisted coverage mile to restore). rahim-khan ki LiveLaw
// entry KEPT (established national legal outlet; HC order verdictum par khud verify;
// flag report me). LiveLaw sourceUrl lowercase me sudhara.
// electionNote guard: 221 (koi foundation edit nahi — Khandre backgroundNote portfolio
// wording ka flag parent ko report me).

// --- Bidar ---

// REJECT-LOG (sharanu-salagar): R-1: The Hindu/IE 2021-23 bypoll aur election coverage — chunav-reporting, kaam nahi. R-2: Cattle-smuggling raid Apr 2026 (Asianet Newsable) — raid/abhiyan, bhautik sanrachna ka lokarpan/shilanyas nahi + non-whitelist. R-3: Basavakalyan main road ke liye Rs 3 crore grant ka ela mantri Eshwar Khandre ne kiya (tubidy video) — non-whitelist + mantri-kaam, MLA ka vyaktigat event nahi. R-4: Peer Pasha/Anubhava Mantapa survey maang (coastaldigest, 2022) — maang akeli, kaam nahi. R-5: KLA Question-812 — Hakki-Pikki Mudabi prashn (kla.kar.nic.in PDF) — prashn akela, mantri-jawab/dastavezi nateeja nahi. R-6: Indian Express political profile (Jul 2023) — profile, kaam nahi. NEGATIVE-R: Bakrid case me NBW (42nd ACJM, Jun 2026) sirf Salar/Bharat Horizon par — non-whitelist, whitelist coverage mile to stage-update. Affidavit ka COVID mamla (C.C. 8434/2023, Crime 11/2022) Karnataka HC ne 24 Aug 2023 ko quash kiya (indiankanoon CRL.P 6495/2023) — raahat hai, negative nahi.
karnatakaWorks['sharanu-salagar'] = [
  {
    title: 'Basavakalyan ke Hiremath colony me Bakrid ke dauran ek Muslim parivar ke ghar me ghuskar dhamkane ke aarop me BJP MLA Sharanu Salagar aur 8 anya ke khilaf July 2023 me FIR darj — Salagar ne Qurbani ritual par sawal uthaye aur dhamki di, aarop page me darj',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/bjp-mla-eight-others-booked-for-threatening-family-during-bakrid-celebrations/article67054179.ece/amp/',
    date: '2023-07-07',
    note: 'Page kholkar padha (published 7 Jul 2023): Basava Kalyan police ne BJP MLA Sharanu Salagar aur 8 anya ke khilaf case darj kiya — shikayatkarta Inamullah Mehraj Khan (Hiremath colony, Basavakalyan) ka aarop hai ki 1 Jul 2023 ko Bakrid ke dauran Salagar ek darjan samarthakon ke saath unke ghar me ghuse, parivar ko gaaliyan di, Qurbani ritual par sawal uthaye aur dhamki di (“if the Muslims are allowed to continue with such acts, the Hindus would vacate the locality”). Viral video ka zikr bhi. Saath me Khan aur unke pita Mazhar Khan ke khilaf Karnataka Prevention of Slaughter and Preservation of Cattle Act, 2020 ke tahat suo motu case bhi darj. MLA ka jawab article me darj nahi. Stage: FIR.',
    period: '2023-2028',
  },
  {
    title: '2023 chunav ke liye udhar liye gaye Rs 99 lakh na lautaane aur band account ka cheque dene ke aarop me Basavakalyan BJP MLA Sharanu Salagar ke khilaf Dec 2025 me cheating case darj',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/bjp-mla-sharanu-salagar-booked-for-failure-to-repay-loan/article70450229.ece/amp/',
    date: '2025-12-27',
    note: 'Page kholkar padha (published 29 Dec 2025; case Bengaluru ACJM ke nirdesh par Saturday = 27 Dec 2025 ko darj): Shikayatkarta Sanjukumar Sugure (Jai Shankar Colony, Basavakalyan; MLA ke door ke rishtedar) ka aarop — Salagar ne 2023 Vidhansabha chunav ke dauran Jan-Feb 2023 me Rs 99 lakh udhar liye, 6 mahine me lautaane ka wada kiya, lekin 2.5 saal baad bhi rakam wapas nahi hui. 14 Sep 2025 ko parivarik baithak me Salagar ne rakam maani aur cheque diya, lekin cheque deposit par “account closed” bolkar bounce hua; repayment maangne par unki patni aur bete ko gaali-dhamki dene ka bhi aarop. Case Basavakalyan Police Station me darj, janch jaari. MLA ka jawab article me darj nahi. Stage: FIR.',
    period: '2023-2028',
  },
];

// REJECT-LOG (siddu-patil): KDP meeting Bidar me 5 Jan 2026 ko MLC Bhimrao Patil se dhakka-mukki (TOI Hubballi, Indian Express, ETV Bharat, Deccan Chronicle, ThePrint) — koi police complaint/FIR nahi (ThePrint: "Neither of the two sides have filed a police complaint so far") — negative-rule fail (FIR/chargesheet/janch nahi), kaam bhi nahi. NH-367 Bidar–Humnabad 47 km widening ka shilanyas/lokarpan Nitin Gadkari ne 14 July 2025 ko Sagara me kiya (PIB; NIE par Rs 345 crore) — NH kaam, MLA ki vyaktigat bhoomika documented nahi — reject. Molkera blast (Humnabad taluk) ke baad nirikshan + uchch-stariya jaanch ki maang (newsnext.live) — daura/maang akeli + source non-whitelist — reject. Aug 2024 me Humnabad government girls/boys high school ka nirikshan (Wikipedia trail) — nirikshan akela — reject. Drought padayatra me maujoodgi (Deccan Herald) — political, kaam nahi. Halafname ke 3 pending mamle (myneta: CC 341/2020 me charges 25 Mar 2021 ko framed — pre-term; Cr 62/2021 aur Cr 76/2023 me charges framed nahi) — karyakaal me established media par koi nyayik vikas nahi — akele negative nahi. PRS MLA track par attendance 93% (May 2023–Dec 2024) — prashn-nateeja documented nahi, kaam nahi.
karnatakaWorks['siddu-patil'] = [];

// REJECT-LOG (shailendra-beldale): Aurad (S) gaon me Health and Wellness Center shilanyas (~March 2026, lagbhag Rs 65 lakh, Gudali Puja ke baad) — MLA ne shilanyas kiya (IBC World News/City Hilights, BSE epaper PDF me) — non-whitelist outlet, isliye entry nahi; retry-lead. Goranalli-B 110/11 kV substation shilanyas mantri Eshwar Khandre ne kiya, MLA sirf maujood the (The Hindu, 17 May 2026) — dusre neta ke event me maujoodgi. Bidar district administrative complex bhumi puja mantri Khandre ne ki, MLA maujood + thekedaaron se appeal (The Hindu, 16 Aug 2025) — dusre neta ka kaam. 800 Article 371(J) quota karmiyon ke liye CM D.K. Shivakumar ko gyaapan (ibcworldnews, 22 Sep 2026) — maang akeli, dastaveji nateeja nahi. Changalera helmet vitran, janmdin karyakram (ibcworldnews, 2 Oct 2026) — daan/CSR samaroh, bhautik sanrachna nahi. Sugarcane aag nirikshan (YouTube/GLOBAL STREAM NEWS) — daura akela + non-whitelist. Halafname ka 1 pending mamla (IPC 143/147/341/149, 2018 page) — pre-period; halafname ke pending mamle akele negative nahi.
karnatakaWorks['shailendra-beldale'] = [
  {
    title: 'Karnataka High Court ne March 2025 me Bidar South MLA Shailendra Beldale ke khilaaf chunavi halafname me galat niwas-pate ke aarop par dayar niji shikayat ko radd kar diya, kaha Section 125A me sirf Chunav Aayog shikayat darj kar sakta hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/only-election-commission-has-right-to-register-complaint-against-candidate-for-filling-false-affidavit-karnataka-high-court/article69322054.ece',
    date: '2025-03-07',
    note: 'Justice M. Nagaprasanna ne Mahadevapura MLA Manjula Limbavali aur Bidar South MLA Shailendra Beldale ke khilaaf 2023 vidhansabha chunav ke halafname me galat khulase ke aarop par dayar niji shikayaton ko radd kiya. Shikayatkarta ka aarop tha ki Dr. Beldale ne apne niwas-pate ke baare me galat jaankari di thi jabki ve wahan rehte nahi the — MLA ne iss aarop se inkaar kiya. Adalat ne faisala diya ki Representation of the People Act, 1951 ki Section 125A ke tahat apraadh ki shikayat sirf Election Commission kar sakta hai (Section 195(1) CrPC ki rok ke kaaran), aur matdata ko sirf chunav-yachika ka adhikaar hai. Adalat ne halafname ke khulase ke mudde par koi faisala nahi diya. Date-note: adalat ka faisala 7 March 2025 ka hai (Supreme Court ke October 2026 ke faisale me darj); The Hindu ne ise 12 March 2025 ko report kiya. Ye entry mamle ka pehla nyayik charan darj karti hai — aaropi ke roop me MLA ka naam aaya lekin adalat ne unhe poori raahat di.',
    period: '2023-2028',
  },
  {
    title: 'Supreme Court ne October 2026 me niji chunav-halafnama shikayaton ko qaabil maana lekin Bidar South MLA Shailendra Beldale ke khilaaf mamla dobara kholne se inkaar kiya, kaha doshasiddhi ki sambhavna na ke barabar hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/private-complaints-over-false-election-affidavits-need-no-official-sanction-supreme-court-4187384',
    date: '2026-10-16',
    note: 'Justice Dipankar Datta aur Justice Sheel Nagu ki peeth ne 16 October 2026 ko Rajkumar Madki ki appeal par faisala diya. Madki ne August 2023 me Dr. Shailendra Beldale (Bidar ke MLA) ke khilaaf niji shikayat dayar ki thi, jisme aarop tha ki unhone 2023 ke namankan-patron ke saath wale halafname me galat niwas-pata diya tha; Karnataka High Court ne 7 March 2025 ko ye shikayat radd kar di thi. Supreme Court ne High Court ke kaanuni tark se asahmati jatayi aur kaha ki Section 125A, RP Act ke tahat niji vyakti ki shikayat par adalat gyaan le sakti hai — iske liye Election Commission ya kisi lok-sevak ki shikayat zaroori nahi. Lekin adalat ne Beldale ke khilaaf vishesh mamle ko dobara kholne se inkaar kar diya: record ke dastavezon se galat ghoshna ka aarop khandit ho gaya tha aur doshasiddhi ki sambhavna na ke barabar thi; mukadma jaari rakhna adalat ka samay vyarth karna hota. Isliye High Court ka radd karne wala aadesh, alag aadhaaron par, barkarar raha. Report me Beldale ka seedha koi bayan darj nahi hai; adalat me unki pairavi varishth adhivakta Anand Sanjay M. Nuli ne ki. Date-note: faisala 16 October 2026 ka hai; Deccan Herald ne ise 18 October 2026 ko prakashit kiya. Ye entry mamle ka doosra nyayik charan darj karti hai — kaanuni sawal par High Court ka tark palta, lekin Beldale ke khilaaf koi karyawahi dobara shuru nahi hui.',
    period: '2023-2028',
  },
];

// REJECT-LOG (rahim-khan): Rajya mantri (Municipal Administration + Hajj, oath 27 May 2023) hain — sirf Bidar seat ke kaam gine. The Hindu admin-complex bhumi puja: shilanyas CM ne 16 Apr 2025 ko rakha tha, Rahim Khan sirf bhoomi puja me maujood the (mantri-pade) — dusre neta ka event; Rs 200 cr corporation grant = ghoshna/maang ("steps being taken", "we have urged CM"). Deccan Chronicle (Malegaon, padha gaya): Rs 5 cr PHC "approved" ka elaan baadh-daura me — GO number nahi, sirf ghoshna; RETRY-LEAD: GO/shilanyas mile to Aspataal entry. TOI (BRIMS ortho OTs, ~mid-Aug 2026, KKRDB Rs 1.2 cr): udghatan zila prabhari mantri Eshwar Khandre ne kiya, unhone MLA Rahim Khan ke "joint efforts" ka credit diya — page fetch 403 blocked, snippet se entry nahi; RETRY-LEAD: live browser verify. TOI (Kushalnagar TMC building): Madikeri, seat ke bahar + mantri-pade. The Hindu (Somanna railway shilanyas, Jun 2025): MoS Railways ka event, Rahim Khan sirf maujood; railway bina vyaktigat bhoomika. The Hindu (Kalyana Parva, Basavakalyan): seat ke bahar; dharmik samaroh ka udghatan, sanrachna nahi. The Hindu (dengue meeting Jul 2024; ATM robbery spot visit Jan 2025): daura akele. Vartha Bharati/IBC (Rs 150 cr roads Mandya-Hassan-Chamarajanagar): Vidhana Parishad me mantri-jawab — mantri-pade, seat ke bahar. publicnext (Rs 50 cr constituency grant + Malegaon bridge priority, Sep 2025): non-whitelist + sirf ghoshna. mpositive/AIMA (DCM post ki maang): non-whitelist + maang. TOI liveblog (Waqf protest, Eidgah): protest, kaam nahi. tconews (KWJA conference): non-whitelist + event maujoodgi. KLLADS neta-war utilization: public record uplabdh nahi (foundation note me pehle se darj).
// QA (coordinator): source LiveLaw established national legal outlet hai (whitelist me nahi, lekin credible); HC order (Crl.P No. 8071/2023, NC: 2026:KHC:42062) verdictum par verify hua — entry KEPT, flag parent ke liye report me.
karnatakaWorks['rahim-khan'] = [
  {
    title: '2023 ke chunaav-prachaar ke dauraan loudspeaker 2 minute der tak chalane ke aarop me darj FIR ko Karnataka High Court ne 7 August 2026 ko radd kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'LiveLaw',
    sourceUrl: 'https://www.livelaw.in/high-court/karnataka-high-court/karnataka-high-court-quashes-fir-against-mla-using-loudspeaker-547691',
    date: '2026-08-07',
    note: 'LiveLaw (report 7 Sep 2026) aur HC order (Crl.P No. 8071/2023, NC: 2026:KHC:42062, Justice M. Nagaprasanna, order dated 7 Aug 2026 — verdictum par order padha gaya): Bidar Rural Police Station me 5 May 2023 ko Crime No. 40/2023 darj hua — flying squad ki shikayat par, 2023 Karnataka Assembly chunaav prachaar ke dauraan 10 PM ki seema ke baad loudspeaker 10:02 PM tak chalne ka aarop (Rahim Khan tab Bidar Uttar se Congress pratyashi the); dharaayen IPC 143, 147, 290 r/w 149 aur Karnataka Police Act 1963 ki Sec 109. Rahim Khan ki yachika (Adv. Naveed Ahmed): unki ghadi me 10 PM baje the, flying squad ki ghadi me 10:02 hone par apraadh nahi banta — aise ullanghan ke liye koi “standard clock” nirdharit nahi hai. Rajya ka paksh (Addl. SPP): tathya gambhir roop se vivadit hai, karyawahi radd nahi ho sakti. Adalat ne Supreme Court ke State of Haryana v. Bhajan Lal (1992) ke hawale se kaha — keval 2 minute ka antar apraadh nahi ban sakta — aur Addl. JMFC II Court Bidar ke samaksh lambit karyawahi radd kar di. Vartaman charan: raahat (quash).',
    period: '2023-2028',
  },
];

// REJECT-LOG (eshwar-khandre): Bidar District Administrative Complex bhoomi-pujan (Hindu) — Bidar shahar me, seat ke BAHAR; shilanyas CM ne 16 Apr ko pehle kiya tha, Khandre ne sirf puja ki — mantri-prabhari bhoomika. Dr Channabasava Pattadadevaru Arboretum, Inchur (Bhalki taluk) udghatan (Bangalore Mirror, ~Sep 2026) — van-vibhag ki Rs 5-crore pariyojana ka mantri-pade se udghatan (RDPR mantri + jila prabhari), departmental kaam; outlet bhi explicit whitelist me nahi. Belagavi me Veerashaiva-Lingayat free hostel udghatan (Hindu, ~Dec 2025) — seat bahar + Mahasabha ki niji sanstha ka bhavan. Khanapur Junction goods shed + RUB (newsdrum/PTI, May 2025) — shilanyas Union Minister V. Somanna karenge, Khandre ki koi vyaktigat bhoomika nahi (railway reject). Jan 2025 Republic Day bhashan me hospital upgrades (Bhalki Taluk Hospital 100→150 samet) — sirf ghoshna, koi lokarpan/shilanyas nahi. TOI Aug 2026: 1,400 RDPR bharti, Rs 200 cr Bidar City Corp, KKRDB jila-aankde — mantri-vibhag ke rajya faisle; Bhalki Taluk Hospital expansion "under way" sirf ghoshna. TOI Oct 2025: Rs 500 cr KKRDB Bidar jila ailaan — jila-level ghoshna. Hindu Mar 2026 drinking-water samiksha baithak + Aug 2025 barish samiksha baithak — mantri daura/nirdesh akela. Anubhava Mantapa 2021 — pre-term. bharathorizon ka Rs 7,200 cr Narayanpura article — seat "Koppal" galat likha (Bhalki sahi), non-whitelist + unreliable. Koi negative nahi: affidavit ke 7 mamle pre-term; FIR/court news me Khandre mantri ke roop me jaanch-aadeshkarta hain (Toxic tree-felling, Shivamogga, leopard, BM Kaval) — swayam aaropi nahi, karyakaal me unke khilaaf koi nyayik vikas nahi.
karnatakaWorks['eshwar-khandre'] = [
  {
    title: '19 July 2025 ko Bhalki me Rs 14.75 crore ke state-of-the-art sports complex ka shilanyas Eshwar Khandre ne khud kiya, jiska uddeshya graameen yuvakon ko khelon ki ore aakarshit karna bataya gaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/foundation-stone-laid-for-1475-crore-sports-complex-in-bhalki/article69831800.ece/amp/',
    date: '2025-07-19',
    note: 'The Hindu (Kalaburagi, 19 Jul 2025) ke anusaar us samay Forest Minister aur Bidar jile ke prabhari mantri Eshwar B. Khandre ne shanivar 19 July 2025 ko Bhalki (Bidar jila) me takreeban Rs 14.75 crore ki lagat se banne wale state-of-the-art sports complex ka shilanyas kiya. Article me unhe "Forest Minister and Bidar district In charge" bataya gaya hai — bhoomika is roop me disclosed; pariyojana unke van-vibhag ki nahi, Bhalki seat ki bhautik sarkari sanrachna hai. Fund-srot article me ghoshit nahi hai. Unke shabdon me uddeshya graameen yuvakon me khel-pratibha ki pehchan aur khel-infrastructure dena tha, aur karyakram ke ant me unhone yuvakon ko nasha-mukti ka sankalp bhi dilaya.',
    period: '2023-2028',
  },
];

// REJECT-LOG (prabhu-chavan): 8 REJECT — Rs 84 crore Karanja Reservoir paani project "initiated" (sirf ghoshna, koi shilanyas/GO/udghatan nahi); Chikli (U)/Mudhol/Hippalgaon solar project inspection (nirikshan akela, IBC World News Oct 2026); Aurad (B) ke 20 wards + pashu-aspataal + public hospital nirikshan (nirikshan akela); The Hindu May 2023: Modi/Shah ko patra (MP Khuba par aarop, kaam-suchi nahi); Oct 2022 CM Bommai vaada 36 tanks Rs 698-700 cr (pre-term + sirf ghoshna); The Hindu Jun 2023 contaminated-water hospital daura (daura akela); NewsKarnataka May 2024 party-karyakram wapasi (kaam nahi); YouTube/Bidar CEO video (source reject + MLA bhoomika nahi). NEGATIVE: koi nahi — (a) The Week/PTI Jul 2025 me beta rape-case me booked (parivar ka mamla); (b) First India/ANI Jul 2026 Deepak Patil ki UP SIT complaint Ram Mandir donation par (sirf complaint, FIR/chargesheet/janch nahi); (c) Salar epaper 23-3-2025 me Bidar DC ke khilaf warrant (aaropi MLA nahi) — teeno negatives ke sakht niyam par fail.
// QA-DROP (coordinator): worker ne Rs 1.23 crore Aurad (B) udghatan ki entry di thi — event valid lagta tha lekin srot salarnews.in whitelist me NAHI hai; whitelisted outlet coverage mile to restore karo.
karnatakaWorks['prabhu-chavan'] = [];

// --- Chamarajanagar ---

// REJECT-LOG (m-r-manjunath): PG Palya wildlife safari facility launch at Lokkanahalli, Hanur taluk (2 Dec 2023; Star of Mysore 6 Dec 2023, page khola-gaya) — event me MLA ki bhoomika hai lekin source non-whitelist; Cauvery Wildlife Sanctuary firing victims ko Rs 15L/family muaavza ghoshna (Aug 2026; TOI whitelisted) — daan/rahat + niji kharch (Rs 10L personal funds), REJECT; The Hindu (12 May 2025) backward-taluks committee me MLA ne sinchai-priority aur forest-border villages me road-connectivity ki maang uthai — maang akeli; Uduthorehalla Rs 490 crore water project (Hindu Mar 2026) — MP Sunil Bose ka prastav, CM ki ghoshna, MLA ki bhoomika nahi; Hanur PHC 50-bed taluk hospital upgrade + Gopinatham/Odeyarapalya PHCs, PG Palya CHC (bharathorizon, non-whitelist, page khola-gaya) — sarkar ki sanction, MLA sirf "pushed". Negatives: koi nahi (halafnama: criminal cases 0; karyakaal me MLA-khud-aaropi koi FIR/chargesheet/nyayik vikas nahi mila). RETRY-LEADS: PG Palya safari launch ka whitelisted outlet coverage; Hanur hospital upgrade ka MLA-dwara-shilanyas/lokarpan kabhi ho to.
karnatakaWorks['m-r-manjunath'] = [];

// REJECT-LOG (a-r-krishnamurthy): The Hindu 'Five guarantees expo' (16 Jan) — teen-din ki pradarshani ka shubharambh (abhiyan, bhautik sanrachna nahi); The Hindu '17 villages 4G' — PM ne virtually commission kiya, MLA sirf maujood (kendra pariyojna, dusre neta ka event); The Hindu '2.5 tmcft Cauvery plan' (May) — minister-farmer meeting me MLA maujood, plan-star ghoshna; CM Shivakumar Kollegal daura 30 Sep 2026 — Ambedkar Bhavan lokarpan + 25+ shilanyas CM ne kiye (saptashwatv/nationpress/starofmysore, non-whitelist), MLA sirf maujood + Yelandur/ Hanur alag seats; TOI land-sanction (5 acre Mudigunda) — MLA ki bhoomika sirf 'urging' quote, swikriti-bhoomika dastavezi nahi; TOI Rs 48 crore release — page 403 par block, snippet me vyaktigat bhoomika nahi ('elected representatives, including MLAs' generic); car accident + K.R. Co-op Bank felicitation (starofmysore, non-whitelist) — event nahi. NEGATIVES: halafname me zero criminal cases (myneta ID 7468); established media me MLA aaropi koi FIR/chargesheet/janch/nyayik vikas nahi — IE ki FIR story Sakleshpur ke JD(S) MLA ki hai (alag vyakti).
karnatakaWorks['a-r-krishnamurthy'] = [
  {
    title: 'Kollegal Mega Health Mela me MLA A. R. Krishnamurthy ki maang par Health Minister Dinesh Gundu Rao ne Kollegal taluk hospital me radiologist niyukti aur blood bank sthapna ka ashwasan diya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/40-taluks-to-get-dialysis-units-specialists-to-be-appointed-soon-minister/article67789543.ece',
    date: '2024-01-29',
    note: 'The Hindu ke anusaar 29 January 2024 ko Kollegal town me aayojit Mega Health Mela me Kollegal MLA A. R. Krishnamurthy ne Health and Family Welfare Minister Dinesh Gundu Rao ke saamne Kollegal taluk hospital ke liye radiologist ki niyukti (rikta pad marijon ko pareshan kar raha tha) aur ek blood bank ki maang rakhi. Mantri ne jawab me kaha ki radiologist niyukt karne ke liye kadam uthaye jayenge aur blood bank jald sthapit hoga; unhone yeh bhi ashwasan diya ki woh CM se 8 taluk hospitals (jinme Kollegal hospital shamil) ke upgrade ke prastav par baat karenge. Dastaveji nateeja mantri ka ashwasan hai — implementation ka page par ullekh nahi hai; MLA ka credit maang rakhne tak seemit. Fund-srot page par ghoshit nahi.',
    period: '2023-2028',
  },
];

// REJECT-LOG (c-puttarangashetty): Suvarnavathi reservoir Rs 43 crore tourism project — sirf sarkar ko prastav bheja, fund "expected to be sanctioned soon" (The Hindu, Feb 2026) — prastav akela, lokarpan/shilanyas nahi; Rs 15 crore swimming pool district stadium — prastav akela (The Hindu); 2-day water sports festival inauguration (The Hindu) — abhiyan shubharambh; guarantee-schemes exhibition inauguration (The Hindu, 10 Jul 2025) — expo shubharambh, sanrachna nahi; Hosa Malangi drinking water project — CM Siddaramaiah ne cabinet me approve kiya, MLA sirf samarthak bayan (TOI snippet, May 2025) — vyaktigat bhoomika/GO nahi, aur dono TOI pages 403 par khule nahi; MSIL Chairman (HT/PTI, 26 Jan 2024) aur Animal Husbandry-Sericulture mantri (3 Aug 2026, D.K. Shivakumar cabinet) — pad hain, seat-kaam nahi; law college building/4 acre + science training centre (publicnext, non-whitelist + ghoshna akeli); Mekedatu padayatra COVID case — HC ne karyawahi radd ki (28 Jul 2023, indiankanoon), lekin established media me MLA ka naam aaropi ke roop me nahi — negative rule fail; halafname ke 2 pending mamle akele negative nahi. RETRY-LEAD: Hosa Malangi project (shilanyas/lokarpan/GO mile to entry); Suvarnavathi Rs 43 crore sanction par WATCH.
karnatakaWorks['c-puttarangashetty'] = [
  {
    title: 'Vidhana Soudha cash-haul case me special Lokayukta court ne C. Puttarangashetty ke khilaaf adhuri jaanch par Lokayukta police ko teen mahine me punah jaanch ka nirdesh diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/karnataka/2025/Feb/01/special-court-wants-proper-probe-against-former-minister-puttaranga-shetty',
    date: '2025-01-31',
    note: 'New Indian Express ki 1 Feb 2025 ki report ke anusaar special Lokayukta court ke Judge K.M. Radhakrishna ne Friday (31 Jan 2025) ko Lokayukta police ki chargesheet par gambhir aapatti jatate hue jaanch adhuri batayi aur teen mahine ke andar punah jaanch karke report dene ka nirdesh diya; saath hi Shetty ke contract-adharit vyaktigat sahayak S.J. Mohan Kumar ko discharge karne se inkaar kiya. Mamla January 2019 ka hai: Vidhana Soudha police ne Prevention of Corruption Act ke tahat case darj kiya tha jab Mohan Kumar ke paas bag me Rs 25.76 lakh nakad mile the (case baad me ACB, phir Lokayukta police ko transfer hua). Chargesheet me kaha gaya tha ki 3-4 Jan 2019 ko Mohan Kumar ke paas mila Rs 25.76 lakh thekedaaron se aaya avaidh labh tha, jo mantri ko sarkari kripao ke liye diya jana tha taaki civil works ke liye grant sanction ho. Lokayukta police ne chargesheet sirf Mohan Kumar ke khilaaf dayar ki aur paanch anya aaropiyon ko saboot na milne ka hawala dekar hata diya; Shetty ko gawah mana gaya. Magistrate ke saamne Section 164 CrPC ke tahat darj Nandana (A4) aur Manjunatha (A5) ke bayan ke anusaar thekedaaron ne Mohan Kumar ko paisa diya tha, aur court ne kaha ki record se pata chalta hai ki mantri grant sanction ke liye 6% commission ki ummeed rakhte the. MLA ka koi jawab report me darj nahi hai. Stage-note: ye 2019 ke karyakal ka mamla hai, lekin 31 Jan 2025 ka adalat-aadesh vartaman karyakal (2023-2028) ka nyayik vikas hai; is aadesh tak Shetty chargesheet me aaropi nahi the. Date-note: report 1 Feb 2025 ko publish hui aur aadesh ko "Friday" bataya gaya — calendar se 31 Jan 2025 Friday tha, isliye tithi 2025-01-31 rakhi gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Vidhana Soudha cash-haul case me Bengaluru special court ne Lokayukta police ki report kharij ki aur 45 din me punah jaanch ka nirdesh diya; C. Puttarangashetty case me aaropi rahe hain',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/legal-news/tainted-and-shabby-investigation-bengaluru-court-rejects-lokayukta-report-in-vidhan-soudha-cash-haul-case-10717092/',
    date: '2026-05-26',
    note: 'Indian Express ki 31 May 2026 ki report ke anusaar Bengaluru special court ke Judge K.M. Radhakrishna ne 26 May 2026 ke aadesh me 2019 ke Vidhana Soudha cash-haul case me Karnataka Lokayukta Police ki report kharij kar di aur jaanch ko "eye-washing purpose" ke liye ki gayi "tainted and shabby investigation" bataya. Report me darj hai ki "Former backward classes welfare minister and Congress MLA C Puttarangashetty was an accused in the case" — case tab darj hua jab Vidhana Soudha parisar me ek vyakti Rs 25.76 lakh nakad le jate pakda gaya. Judge ne kaha ki 31.01.2025 ke aadesh me batayi gayi gambhir kamiyon par aavashyak jaanch ko kinare kar diya gaya, aur "the then Minister" ki sanliptata dikhane wale mahatvapurna saboot ko dabane ke liye "all possible efforts" kiye gaye; jaanch agency ne "prime accused" ko chhodne ko sahi thahrane ke liye niji vyaktiyon ko additional chargesheet me aaropi No. 4 se 11 banaya. Court ne Lokayukta report kharij karke aadesh ki satya pratilipi Karnataka Lokayukta Police Wing ke ADGP aur IGP ko bhejne ka nirdesh diya taaki uparokt tippaniyon ke aalok me punah jaanch ho aur 45 din ke andar report court me pesh ki jaye. 4 Jan 2019 ko ek patrakar ki suchna par Vidhana Soudha police ne Mohan Kumar ko roka tha, jiske paas Rs 25.76 lakh nakad mile; aarop tha ki ye paisa kai thekedaaron se jodkar us samay backward classes welfare mantri rahe Puttarangashetty ke liye avaidh bhugtan ke roop me ikattha kiya gaya tha. Mohan Kumar giraftaar hua; poorv mantri ko prime accused banaya gaya lekin baad me unka naam case se hata diya gaya. MLA ka koi jawab report me darj nahi hai. Stage-note: mamla 2019 ka hai (poorv karyakal), lekin 26 May 2026 ka kharij-aadesh vartaman karyakal ka nyayik vikas hai; aadesh tak Shetty chargesheet me aaropi nahi the. Date-note: report 31 May 2026 ko publish hui; aadesh ki tithi report me 26 May di gayi hai, isliye tithi 2026-05-26 rakhi gayi hai.',
    period: '2023-2028',
  },
];

// REJECT-LOG (h-m-ganesh-prasad): Gundlupet, INC. Research 2026-10-19. Whitelisted established media me MLA ke vyaktigat seat-level vikas kaam (lokarpan/shilanyas/GO-swikriti) ka koi post-event record nahi mila. SABSE MAZBOOT LEAD (The Hindu, 21 Apr 2026, post-event, khola-padha): CM Siddaramaiah ne Gundlupet me Rs 523 crore ke kaamon ka shilanyas/lokarpan kiya — 110 talabon ko bharne ka Rs 475 crore ka project sahit — aur CM ne kaha 'This was possible due to the efforts of Ganesh Prasad, local MLA'; lekin lokarpan/shilanyas CM ne kiya, MLA sirf maujood the → dusre neta ka event, vyaktigat lokarpan nahi → REJECT (credit sirf CM ke bhashan ka). Terakanambi PHC ka 30-bed hospital me upgrade, traffic police station aur Kanaka Bhavan budget-ailaan — ghoshna-star par, MLA ka vyaktigat kaam nahi. Amrut Project drinking-water works — CM ne udghatan kiya (Star of Mysore, non-whitelist + pre-event) → REJECT. Nanjangud street-vendors food zone lokarpan (Star of Mysore, Feb 2025) — Nanjangud seat ka kaam, Nanjangud MLA ka udghatan; Ganesh Prasad sirf maujood + bayan → REJECT. Kalisu Foundation library (Varuna seat) — NGO ka kaam, MLA sirf attendee → REJECT. Bandipur safari-ban board meeting (TOI) aur night-ban bayan (NIE, Apr 2025) — policy-bayan, bhautik sanrachna nahi → REJECT. Drought nirikshan Dy CM ke saath (DH/TOI, Sep 2026) — daura akela → REJECT. Wildlife Week 2026 chief guest (TOI) — event → REJECT. Teachers' Day KDP meeting bayan (publicnext, aggregator) — non-whitelist, aur 'Rs 5 crore education me 2022-23' pre-term ka dawa → REJECT. PEHCHAAN-QA: 'Cong MLA charged with attempt to murder' (Business Standard, 2019) wale 'Ganesh' Kampli ke J.N. Ganesh hain — hamare MLA NAHI; NIE (Aug 2023) ka 'HC tells Ganesh to file reply' actor Ganesh Kisan (Gundlupet land) hain — MLA NAHI. NEGATIVE-CHECK: Jun 2016 me pita H.S. Mahadeva Prasad ke mantri-pad par rehte unke bete (hamare MLA) par Chamarajanagar me sarkari zameen par avaidh granite quarry ke aarop (Wikipedia; NIE Jan 2017 me 'son accused of illegal granite quarrying' ki pushti) — PRE-TERM; May 2023 ke baad koi FIR/chargesheet/nyayik aadesh/notice ka term-vikas nahi mila, aur halafname me criminalCases: 0 → negative-rule fail, koi negative entry nahi. RETRY-LEADS: (1) publicnext (non-whitelist, Sep 2025) ka dawa — 'Rs 18 crore ka residential school Bommanahalli me, udghatan kuch din me' — agar whitelisted outlet par post-event inauguration coverage mile to entry; (2) 110-lakes/Amrut GO-sanction me MLA ki sifarish ka naam mile to sanction-entry possible.
karnatakaWorks['h-m-ganesh-prasad'] = [];

// --- Chikkaballapura ---

// REJECT-LOG (k-h-puttaswamy-gowda): Saakshath Suddi e-paper (non-whitelist; 23-28 Jul 2026 issue) — "MLA K.H. Puttaswamy Gowda on Tuesday inaugurated development works worth Rs 1.70 crore in Tondebhavi and several villages of Gauribidanur taluk under the Public Works Department and the MLA's discretionary fund" (drinking water units, drains, bus shelters in Tondebhavi, Kadaradevarahalli, Pothenahalli, Bevinahalli, Mallasandra, Taridalu, Hoskote, Gedare, Allipura); saath me Rs 12-crore Karnataka Public School building ka foundation stone Govt High School campus par. Event valid lagta hai lekin source non-whitelist → RETRY-LEAD: whitelisted outlet coverage mile to entry. Dhruva Properties blog (non-whitelist, real-estate marketing) ne Oct 2025 ka Rs 3 crore road inauguration dawa kiya — unsourced, low-priority lead. alipur.info victory rally (May 2023) — event, kaam nahi. N.H. Shivashankar Reddy (INC, runner-up) ki chunav-yachika Puttaswamy Gowda ke khilaaf — HC ne kharij ki ("Election Petition is dismissed", sooperkanoon) — chunav-yachika akele negative nahi. FIR 120/2018 (Navanagar PS, Bagalkot, 20.04.2018) sirf kharij yachika me exhibit tha; pre-term; karyakaal me koi nyayik vikas nahi; myneta par 0 criminal cases — negative nahi.
karnatakaWorks['k-h-puttaswamy-gowda'] = [];

// REJECT-LOG (s-n-subbareddy): IBC HN Valley piece (24 Bagepalli lakes ko pani) — non-whitelist + "foundation stone-laying soon" = pre-event/announcement, MLA sirf quoted; Marvell/United Way 'Rural Rising' CSR (Bagepalli Taluk Govt Hospital ko ambulance, 2 Anganwadi, 150 solar streetlights, water purifiers) — CSR samaroh, MLA ki koi bhoomika nahi (businessnewsweek/mediaexpress24, non-whitelist anyway); Aug 2026 cabinet-berth bandh (publictv/rediff) — protest event, kaam nahi; Karnataka State Seeds Corporation chairmanship (Jan 2024) — pad hai, seat kaam nahi; Sep 2023 NIE me CM Siddaramaiah ka Kannada Bhavana lokarpan + Rs 150 crore works shilanyas — dusre neta ka kaam; 2018 ke Hindu rebellion piece — pre-term; courtbook.in ka dawa (chunav void nahi hua) — non-whitelist + NIE/Hindu/news18/verdictum se viprit, ignore. WATCH: SC ne 27 Feb 2026 ko HC void-aadesh par stay diya (verdictum, NON-WHITELISTED, khola-padha: CJI Surya Kant + Justice Joymalya Bagchi, "petitioner shall continue to be a duly elected MLA", posted week commencing 07.09.2026, C.A. No.2419/2026 — Kapil Sibal appeared) — whitelisted outlet coverage mile to stay-entry banao; Sep 2026 ke baad hearing outcome ki koi khabar nahi; ED FEMA probe me July 2025 ke baad chargesheet/attachment/show-cause ki khabar nahi.
karnatakaWorks['s-n-subbareddy'] = [
  {
    title: 'Bagepalli MLA S N Subba Reddy ke prastav par Karnataka cabinet ne seemavarti shahar Bagepalli ka naam badalkar Bhagyanagara karne ko manzoori di',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan Times',
    sourceUrl: 'https://www.hindustantimes.com/cities/bengaluru-news/karnatakas-bagepalli-becomes-bhagyanagara-why-the-border-town-is-renamed-now-101751522668228.html',
    date: '2025-07-02',
    note: 'Hindustan Times ki report ke mutabik, Karnataka cabinet ne seemavarti shahar Bagepalli ka naam badalkar Bhagyanagara karne ko manzoori di; naam badalne ka prastav local MLA S.N. Subba Reddy se aaya tha aur cabinet ne Nandi Hills (Chikkaballapur) me hui meeting me ise manzoori di. CM Siddaramaiah ne kaha ki ye naamkaran local legislator ke anurodh par kiya gaya — unka tark tha ki “palli” pratyay Telugu bhasha se aaya hai. Inferred-date disclosure: HT page par prakashan-tithi printed nahi thi; report jis Nandi Hills cabinet meeting ka varnan karti hai use ETV Bharat/UNI/Mathrubhumi coverage ne 2 July 2025 (Budhwar) bataya hai, isliye yehi tithi li gayi hai. Credit capped: prastav MLA ka, faisla cabinet ka.',
    period: '2023-2028',
  },
  {
    title: 'Karnataka High Court ne S N Subbareddy ka 2023 Bagepalli chunav halafname me jhoothi ghoshna par void ghoshit kiya, par BJP ke C Muniraju ko vijeta ghoshit karne se inkaar kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/karnataka/2026/Feb/18/karnataka-hc-declared-bagepalli-mla-subbareddys-election-void-for-false-declaration-of-assets-liabilities',
    date: '2026-02-16',
    note: 'New Indian Express ki report ke mutabik, Karnataka High Court (Justice M G S Kamal) ne 16 February 2026 ko Bagepalli Congress MLA S N Subbareddy ka 2023 ka chunav void ghoshit karte hue use radd kar diya — wajah: namankan ke samay halafname me dues ko ‘Nil’ ghoshit karna aur apni aur apni patni ki aay ke sroton, Bengaluru ke vyavsay (sharaab sahit) aur unke current account balances, swamitva wali krishi bhoomi ki prakriti aur lagbhag bazaar mulya ka khulasa na karna; court ne ise RP Act 1951 ki dhara 123(2) ke tahat “corrupt practice” maana jo dhara 100(1)(b) ke tahat chunav void karne ka aadhaar hai. Court ne BJP ke hare hue ummidwar C Muniraju ki yachika aanshik roop se manzoor ki, lekin unhe vijeta ghoshit karne ki maang kharij kar di (Muniraju 19,179 voton se hare the; unse aage kitne vote corrupt practice se mile, iska koi tathya nahi mila). Subbareddy ke vakil ne Supreme Court me appeal ke liye faisle par stay manga, jise court ne thukra diya; Registry ko aadesh Speaker aur Election Commissioner ko bhejne ka nirdesh diya gaya. MLA ka jawab: Subbareddy ne dawa kiya ki property tax ka bhugtaan na hona unke karmachariyon ki anjaane me hui galti thi aur chhupane ya gumrah karne ka koi iraada nahi tha — court ne ise sweekar nahi kiya.',
    period: '2023-2028',
  },
  {
    title: 'ED ne Bagepalli Congress MLA S N Subba Reddy se jude Bengaluru ke paanch parisaron par kathit videshi sampattiyon par FEMA jaanch me chhaape maare',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/ed-raid-on-bagepalli-congress-mla-sn-subba-reddy-in-karnataka/article69795144.ece',
    date: '2025-07-10',
    note: 'The Hindu ki 10 July 2025 ki report ke mutabik, Enforcement Directorate (ED) ne Bagepalli Congress MLA S N Subba Reddy se jude Bengaluru ke paanch parisaron par chhaape maare — Foreign Exchange Management Act (FEMA), 1999 ke kathit ullanghan ke sambandh me. Chhaape Reddy ke Bengaluru sthit nivas, unke vyavsayik pratishthaanon aur pramukh sahyogiyon ke yahan padhe. ED ke anusaar chhaape Reddy aur unke parivar ke sadasyon ki kathit aghoshit videshi sampattiyon se jude the — “aaraopon me Malaysia, Hong Kong aur Germany sahit adhikaar-kshetron me videshi bank khaton me rakhe gaye paise, vaahan khareedne me nivesh aur achal sampattiyon” ka vivran tha. Report me us samay MLA ka koi bayan darj nahi tha.',
    period: '2023-2028',
  },
  {
    title: 'ED chhaapon ke baad Bagepalli MLA S N Subba Reddy ne videshi sampatti ke aaropon se inkaar kiya, bola siyasi rival ne shikayat karayi aur ED ne 14 July ko poochtaachh ke liye bulaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'ThePrint (PTI)',
    sourceUrl: 'https://theprint.in/india/cong-mla-subba-reddy-blames-political-rival-for-ed-raids-over-alleged-foreign-assets/2687679/?amp',
    date: '2025-07-11',
    note: 'PTI ki 11 July 2025 ki report (ThePrint par) ke mutabik, Congress MLA S N Subba Reddy ne patrakaron se kaha ki unke nivas aur paanch anya parisaron par ED ke chhaape ek siyasi rival ki shikayat par hue the; unhone kisi bhi videshi sampatti ke swamitva se inkaar kiya aur bataya ki ED ne unhe 14 July ko poochtaachh ke liye bulaya hai. Chhaape FEMA ki dhara 37 ke tahat pade the; jaanch Reddy aur unke parivar ke sadasyon ki kathit videshi bank jama, vaahanon me nivesh aur Malaysia, Hong Kong aur Germany sahit deshon me achal sampattiyon se judi thi. Reddy ne kaha: “Maine ED adhikariyon se kaha ki agar videsh me ek paise ka bhi nivesh ho to main apni poori sampatti aapki sarkar ko daan kar dunga.” Unke anusaar, kuch din pehle ek dost ne WhatsApp par bataya tha ki Veeraswamy Rangaswamy naam ke kisi vyakti ne unke naam par videshi bank khata dikhane wala jaali dastavej banaya hai; unhone Bengaluru North Division ke Cyber Crime Cell me shikayat karne ki koshish ki, jahan police ne kaha ki koi vishesh vyakti shamil nahi hai isliye wapas bhej diya. Unhone dawa kiya ki unhone saaf-suthra jeevan jiya hai aur sarkar ko kabhi dhokha nahi diya.',
    period: '2023-2028',
  },
];

// REJECT-LOG (pradeep-eshwar): ToI "Mission Admission 2025" (7 Jun 2025) — career-guidance/counselling program, bhautik sarkari sanrachna ka lokarpan/shilanyas nahi; ibcworldnews Anganwadi appointment orders (Feb 2026) — event, MLA sirf maujood, non-whitelist; indiaherald "free CET/NEET center" — non-whitelist aggregator + sirf ghoshna; slipper-hurling incident (IE/ToI, Jun 2026) — kaam nahi; JD(S)/BJP "demand FIR against Pradeep Eshwar" (ToI, Jun 2026) — sirf maang, FIR register hone ka koi record nahi → negative nahi; BJP EC complaint over remarks (Apr 2026, Lokmat/PunjabKesari) — shikayat akeli, FIR-aaropi column me naam nahi → negative nahi; Bigg Boss house entry par Speaker ko complaint (oneindia, Oct 2023) — shikayat akeli, non-whitelist; stone-pelting at residence (Hindu, Jun 2024) — MLA victim the, aaropi nahi; ToI 2023 election profile — pre-term. 2023-2026 ke dauraan Chikkaballapur me inke dwara lokarpan/shilanyas ki koi whitelisted-outlet coverage nahi mili.
karnatakaWorks['pradeep-eshwar'] = [
  {
    title: 'Pradeep Eshwar ke surprise school inspections aur 4 September ko shiksha vibhaag ko likhe patra ke baad Chikkaballapur ke 180 sarkari school shikshakon ko Block Education Officer dwara show-cause notice jaari kiya gaya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'NDTV',
    sourceUrl: 'https://www.ndtv.com/education/180-karnataka-government-school-teachers-issued-notices-after-class-7-students-struggle-with-basic-maths-kannada-12068067',
    date: '2026-09-15',
    note: 'MLA ki maang/patra ka dastaveji nateeja — credit capped: kaarravaai shiksha vibhaag ne ki. Chikkaballapur MLA Pradeep Eshwar ne constituency ke kai sarkari primary schools ka surprise inspection kiya; Class 7 ke kuch students simple addition-subtraction aur basic Kannada alphabet likhne me asafal mile. Iske baad MLA ne 4 September ko authorities ko patra likha; Chikkaballapura ke Block Education Officer ke karyalaya ne 15 September ko show-cause notice jaari kiya. MLA ke nirdesh ke baad Education Coordinators, BRPs aur CRPs ne Chikkaballapura Taluk ke sarkari aur aided primary schools me Class 7 students ke tests kiye; "severely lagging behind in learning" students aur unhe padhane wale teachers ki list shiksha vibhaag ko saunpi gayi. Notice me teachers se poochha gaya ki minimum expected learning levels kyon hasil nahi hue aur jawab ke baad niyamanusar disciplinary action ka nirdesh diya gaya. Varsh 2026 inferred hai: NDTV page ~19-20 Sep 2026 ka crawl (~Sep 20, 2026 published) aur usme Sept 4/Sept 15 ki tareekhen hain — reasoning yahan disclose kiya gaya hai.',
    period: '2023-2028',
  },
];

// REJECT-LOG (b-n-ravikumar): CM Siddaramaiah dwara Sidlaghatta me hi-tech silkworm market ka shilanyas (NIE 25 Nov 2025) — CM ka kaam, MLA ka koi vyaktigat bhoomika note me disclose nahi; mini Vidhana Soudha maang akeli. Nandi Hills cabinet se Rs 123 crore Bengaluru North campus phase-2 (Amaravathi gaon, Shidlaghatta taluk) swikriti (NIE 3 Jul 2025) — cabinet faisla, MLA-bhoomika nahi. Nikhil Kumaraswamy dwara giraftar JD(S) karyakarta ke parivar se mulakat, MLA BN Ravikumar sirf saath me (TOI) — raajnaitik daura, kaam nahi. Rajeev Gowda audio-clip/FIR mamla (IE/Hindu, Jan 2026) — aaropi Congress neta Rajeev Gowda; MLA sirf shikayat-praptakarta, FIR column me naam nahi — negative nahi. Halafname me zero criminal cases; May 2023 ke baad MLA ke khilaf koi FIR/chargesheet/nyayik vikas nahi mila.
karnatakaWorks['b-n-ravikumar'] = [];

// REJECT-LOG (m-c-sudhakar): (1) POSITIVE — 0 entries: whitelisted outlet par MLA ka koi vyaktigat lokarpan/shilanyas (bhautik sarkari sanrachna, Chintamani seat me) ki post-event reporting nahi mili. (a) UGCET Seat Allocation Manthana (The Hindu, 28 Jun 2025) — Chintamani ke VTU-affiliated engineering college me program ka udghatan unhone Uchch Shiksha mantri ke roop me kiya — mantri-kaam + abhiyan shubharambh, seat-kaam nahi. (b) Chintamani me govt engineering college ki ghoshna (The Hindu) — sirf ghoshna; aur shiksha-vibhag ka rajya faisla = mantri-kaam. (c) Rs 8.94 crore Chintamani taluk works 'released' ki ghoshna, progress review meeting (IBC World News, Oct 2025) — sirf ghoshna + non-whitelist outlet + district-incharge-minister bhoomika. (d) Maulana Azad Model School, Chintamani ko 1-acre sarkari zameen ki ghoshna (IBC, page 298) — sirf ghoshna + non-whitelist. (e) Yettinahole project committee nirikshan, Sakleshpur (The Hindu, 14 Oct 2026) — vidhayak-samiti daura akela; seat-scope bahar. (f) Chintamani Public Hospital additional floor, Rs 9.98 crore sarkari swikriti (devdiscourse, Sep 2025, agency copy) — state cabinet ka GO faisla, MLA ki vyaktigat bhoomika disclosed nahi; outlet bhi non-whitelist. (g) CM ke Rs 2,000 crore Sidlaghatta projects me 'district incharge minister M.C. Sudhakar ki maang par Mini Vidhana Soudha' (timesmahesha, Nov 2025) — CM ka event/ghoshna, MLA sirf maujood; non-whitelist outlet. (2) NEGATIVE — 0 entries: Deccan Herald (8 Jul 2026, kholkar padha — whitelisted) me Karnataka HC (Justice M Nagaprasanna) ne 2017 sarkari zameen-hadapne mamle me pita A Chowda Reddy aur ex-Chintamani municipality commissioner B H Narayanappa ki quashing yachikaein khaarij ki. Court ne note kiya ki samagri se Reddy, unke bete — 'former minister and current Chintamani MLA M C Sudhakar' aur M C Balaji — 'direct beneficiaries' prateet hote hain, lekin FIR (2017) me unke naam 'conspicuously absent' hain; FIR me sirf Reddy, Narayanappa, Jayaramaiah aur Shamiulla (deceased) aaropi hain. 24 Apr 2016 ki shikayat (R Venkataramana) me Reddy, bete Balaji aur Sudhakar par Kannampalli (Chintamani taluk) me 1.19 acre sarkari zameen hadapne ka aarop tha; court ne 37 sites ka naksha dekha aur kaha ki 'beneficiaries... remain outside the dragnet of crime' par 'gambhir chinta' ka vishay hai, lekin jaanch-stage par hone se aage tippani se inkaar kiya. Yachikaein Reddy aur Narayanappa ne dayar ki thi (Sudhakar ne nahi). Yachikakartaon ka tark: shikayat ki tithi par Reddy ya bete MLA nahi the, poori shikayat rajnaitik-prerit hai. NEGATIVE-RULE FAIL: 'Shikayat lekin FIR-aaropi column me naam nahi = NAHI' — 2016 shikayat me naam tha, FIR-aaropi column me nahi; court ne unhe aaropi nahi banaya; plus 'parivar ke mamle NAHI' (mukhyatah pita ke khilaf mamla). Isliye negative entry nahi banayi.
// RETRY-LEADS: WATCH (land-grab: bhavishya me FIR/chargesheet me M C Sudhakar ka naam aaropi ke roop me aaye to stage-accurate negative entry banegi); Maulana Azad Model School 1-acre land (IBC, non-whitelist): MLA-led lokarpan/shilanyas ki whitelisted post-event reporting mile to 'School' entry; Chintamani Hospital additional floor (Rs 9.98 crore, state sanction Sep 2025): MLA ke vyaktigat lokarpan ki whitelisted post-event reporting mile to 'Aspataal' entry; Rs 8.94 crore Chintamani taluk works (IBC Oct 2025): currently sirf release-ghoshna; koi bhautik lokarpan report mile to review.
karnatakaWorks['m-c-sudhakar'] = [];

// --- Chikmagalur ---

// REJECT-LOG (t-d-rajegowda): Health minister Dinesh Gundu Rao dwara Honnavalli 100-bed hospital shilanyas + Koppa Mother-Child Hospital lokarpan (TOI, Oct 2025) — MLA sirf maujood (KREDL chairman ke roop me), vyaktigat lokarpan/shilanyas nahi; Tunga barrage Rs 89 crore (publicnext, ~Nov 2025) — non-whitelist, MLA ki vyaktigat bhoomika ka whitelisted pramaan nahi; TOI 'Sringeri hobbled by lack of development' (Jul 2025) — activist aalochana, koi FIR/chargesheet nahi (negative-rule fail); kisan shikayat meeting (ibcworldnews, Oct 2026) — non-whitelist + ashwasan akela; postal-ballot recount vivad (HC election petition Apr 2026 → May 2026 recount me Jeevaraj vijayi ghoshit → SC ne 12 May 2026 ko Rajegowda ko antarim rahat di) — chunav-yachika akele negative nahi, ballot-tampering FIR Jeevaraj ke khilaf thi, Rajegowda ke khilaf nahi; 2022 death-threat claim — pre-term. Halafname me 0 criminal cases (2023). WATCH: Lokayukta mamle me 2026 ki koi sthiti (chargesheet/closure) whitelisted coverage me nahi mili.
karnatakaWorks['t-d-rajegowda'] = [
  {
    title: 'Sringeri MLA T D Rajegowda ne NR Pura taluk me navy-nirmit Seetur gram panchayat bhavan ka lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/drinking-water-and-infra-projects-under-way-in-sringeri-constituency/articleshow/125468350.cms',
    date: '2025-11-20',
    note: 'MLA ne NR Pura taluk me bani nayi Seetur gram panchayat building ka vyaktigat roop se lokarpan kiya. Usi avsar par unhone bataya ki JJM ke tahat Rs 60 crore aur Bhadra-Tunga se sthayi peyjal ke liye Rs 700 crore manjoor hua, NR Pura ke aath gram panchayaton ko Rs 45-45 lakh jaari, Kudregundi-Hallibailu sadak ke liye Rs 4.5 crore manjoor, Shedagaru ko Rs 34 lakh, Belluru pashu chikitsalaya ko Rs 34 lakh, school-anganwadiyon ko Rs 25 lakh aur gramin sadkon ke liye Rs 75 lakh manjoor — ye sab ghoshna-star ki daave hain; keval gram panchayat bhavan purn bhautik sanrachna thi. Fund-srot: ghoshit nahi.',
    period: '2023-2028',
  },
  {
    title: 'Sringeri MLA T D Rajegowda aur unke parivar ke khilaf Lokayukta police ne Prevention of Corruption Act ke tahat FIR darj ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/karnataka-lokayukta-police-book-congress-mla-td-raje-gowda-on-corruption-charges/article70093532.ece/amp/',
    date: '2025-09-23',
    note: 'Chikkamagaluru Lokayukta police ne Bengaluru ke special court for public representatives ke 16 September ke aadesh par 23 September 2025 ko (The Hindu me 25 September ko prakashit) MLA T.D. Raje Gowda aur unke parivar ke khilaf Prevention of Corruption Act, 1988 ke tahat FIR darj ki. Koppa ke Dinesh H.K. ne court me shikayat dayar karke jaanch maangi thi — aarop: pad ka durupyog, raj-kosh aur aaykar vibhag se dhokha, gyaat aay-sroton se zyada sampatti; M/s Shabana Ramzan partnership firm ke lenden ka hawala — 266 acre coffee estate, 2019 ke baad patni D.K. Pushpa (48% share) aur beta Rajdev T.R. partner bane; Rs 55.75 crore (Standard Chartered), Rs 66 crore (Bank of Baroda) aur Rs 81.95 lakh (Karnataka Bank) ke rin chukane ke bawajood MLA ne halafname me salana aay Rs 40 lakh ghoshit ki thi. Dhyaan dene layak: 2023 me Lokayukta SP ki discreet inquiry ne aaropon se MLA ko mukt kiya tha, lekin shikayatkarta ke virodh par court ne FIR ka aadesh diya. MLA ka jawab: iss report me darj nahi; raids ke baad (New Indian Express, 1 Oct 2025) unhone kaha ve Lokayukta adhikariyon se sahyog karenge aur aarop rajneetik hain.',
    period: '2023-2028',
  },
  {
    title: 'Lokayukta police ne Sringeri MLA T D Rajegowda ke char parisaron par disproportionate-assets mamle me chhape maare',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/karnataka-lokayukta-searches-congress-mla-t-d-rajegowdas-properties-10280241/',
    date: '2025-09-30',
    note: 'Karnataka Lokayukta ne 30 September 2025 ko Sringeri MLA T D Rajegowda se jude char sthanon — Khandya hobli ke Basapura gaon sthit niwas aur farmhouse sahit — par chhape maare; adhikariyon ne dastawez aur sakshya ikatthe kiye. Chhape 23 September ki FIR (special court ke aadesh par; shikayat Koppa ke Dinesh H.K. ki) ke baad hue; FIR me Rajegowda, unki patni D K Pushpa aur bete Rajdev T.R. aaropi hain. Aarop: M/s Shaban Ramzan partnership firm ke lenden ke zariye gyaat aay se zyada sampatti — salana aay Rs 40 lakh ghoshit hone ke bawajood Rs 55.75 crore (Standard Chartered), Rs 42 lakh (SBI), Rs 66 crore (Bank of Baroda) aur Rs 81.95 lakh (Karnataka Bank) ke rin chukaye gaye. MLA ka jawab: unhone kaha ve Lokayukta adhikariyon se sahyog karenge aur aarop rajneetik prerana se hain (New Indian Express, 1 October 2025).',
    period: '2023-2028',
  },
];

// REJECT-LOG (nayana-motamma): publicnext title deeds (242 beneficiaries, Mar 2026) — aggregator + minister K.J. Ramachandran ne diye, MLA sirf maujood; publicnext 94C deeds 54 beneficiaries (Jul 2025) — aggregator; Devaramane tourist blueprint — aggregator + blueprint/prastav akela; Kalasa hospital digital X-ray machine (Rs 10 lakh taluk grant, Feb 2026) — aggregator + upkaran-khareed, lokarpan coverage nahi; Kalasa Town Panchayat proposal (Mar 2026) — aggregator + prastav-star par; Hindu road restoration/Bettadamane bridge (May 2025) — mantri-ashwasan, MLA sirf maujood; TOI schoolboys-pothole (Oct 2026) — BJP neta ka aarop akela, jawab nahi mila; NIE Kasturirangan Assembly speech (Sep 2026) — neetigat bayan, kaam nahi. Negative-QA: TOI Congress rebel (corruption aarop party-netaon ke — FIR/janch nahi, party-vivad akele negative nahi); TNIE saffron-shawl/Mutalik dais par CM ki fakar (Aug 2025) — party-anushasan, negative nahi; Instagram vulgar comments par vyakti giraftaar (Jan 2026) — aaropi dusra vyakti, MLA shikayatkarta; Form-7/SIR Form 7 deletions (Sep-Oct 2026) — MLA shikayatkarta, aaropi nahi; halafname me zero criminal cases. Koi valid negative nahi.
karnatakaWorks['nayana-motamma'] = [
  {
    title: 'Mudigere ki MLA Nayana Motamma ne Machagondanahalli sarkari school me Viveka Yojana ke tahat Rs 53 lakh ki lagat se bane chaar-kamron wale naye school bhavan ka udghatan kiya',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/cities/bengaluru/2025/Apr/20/double-power-how-two-teachers-revived-a-village-school-with-heart-and-grit',
    date: '2025-04-20',
    note: 'Machagondanahalli gaon (Mudigere taluk, Chikkamagaluru district) ke sarkari school me Viveka Yojana ke tahat Rs 53 lakh ki lagat se bana chaar-kamron wala naya bhavan Mudigere MLA Nayana Motamma ne udghatan karke lokarpit kiya. Bhoomika udghatan (inauguration) disclosed hai; fund-srot Viveka Yojana (rajya sarkar ki school-infrastructure yojana), KLLADS linkage ghoshit nahi. Date inferred: article 20 April 2025 ko update hua aur udghatan "recently" hua bataya gaya, isliye event April 2025 ke aaspaas hua. School me teachers Hina Tabassum aur Razia Sultana ke kaam par article ka focus hai, lekin udghatan-tathya page me saaf likha hai.',
    period: '2023-2028',
  },
];

// REJECT-LOG (h-d-thammaiah): R1 TOI 19 Nov 2025 bus article — mantri Ramalinga Reddy ne naya bus station + KSRTC aavasiya bhavanon ka udghatan kiya, mantri K J George ne Rs 19.9/20 crore hi-tech bus station ka shilanyas rakha (MLA sirf maujood) — dusre neta ka kaam; Tarikere (Rs 9.2 cr) aur Kadur (Rs 6 cr) bus station — dusri seats. R2 publicnext cricket stadium 12 acre aarakshan (25 Nov 2025) — non-whitelist + bhoomi aarakshan, sanrachna nahi. R3 publicnext medical college bijli House mudda — non-whitelist + sirf maang (permanent substation sirf prastav). R4 edexlive City Central Library naya bhavan udghatan 5 Oct 2024 — non-whitelist, MP + MLA + 2 MLC sab maujood, MLA-led nahi. R5 bharathorizon organic/millet mela udghatan — non-whitelist + event, sanrachna nahi. R6 webindia123 Yagachi drainage line shilanyas — non-whitelist + mantri K J George ka kaam. R7 NIE 10 Oct 2024 — Satish Jarkiholi dwara Tarikere seat me sadak kaam ka shilanyas — dusri seat + mantri ka kaam (Thammaiah ne sirf mantri ko bulaya tha). R8 publicnext 9 Sep 2025 press conf — Bhadra sub-valley, hi-tech bus stand, stadium, super specialty hospital 'sapne' — sirf ghoshna. R9 TOI 'Cong devpt initiatives' — CADA adhyaksh ka party dawa (Rs 2,500 crore), MLA vyaktigat bhoomika nahi. R10 saptashwatv lake tragedy condolence + 'DK Shivakumar will become CM' bayan — raajneetik, kaam nahi. R11 publicnext Urdu rally me community hall ashwasan — sirf ghoshna + non-whitelist. R12 medicaldialogues district surgeon badlav — non-whitelist + personnel matter, vikas-kaam nahi. R13 publicnext medical college infra aalochana — bayan, kaam nahi.
// NEGATIVES: 0 — indiankanoon 'H.D.Thammaiah vs State of Karnataka' (7 Jan 2020): Crime No. 187/2014 / Spl C.C. 820/2018 ke proceedings quash (raahat), pre-term, May 2023+ koi nyayik vikas nahi; halafnama me criminalCases: 0 se mel. Negative rule fail.
// RETRY-LEADS: (a) KLLADS neta-war kharch ka public record (foundation me bhi darj: uplabdh nahi) mile to entry; (b) Bhadra sub-valley / hi-tech bus stand / super specialty hospital ka MLA-led shilanyas/lokarpan whitelisted coverage me mile to entries; (c) Rs 27.5 crore sadak karyon ke vastavik lokarpan ki post-event coverage aaye to entry 1 ka upgrade; (d) Volvo seva ka vastavik shubharambh + skywalk nirman shuru hone ki coverage aaye to entry 2 ka upgrade.
// FOUNDATION CROSS-CHECK: slug 'h-d-thammaiah' karnataka.ts me maujood — seat 'Chikmagalur', party 'Indian National Congress' (INC), donon entries ki TOI coverage ('Chikkamagaluru MLA HD Thammaiah') se mel khate hain; criminalCases: 0 halafname se mel khata hai. Party me koi badlav nahi.
karnatakaWorks['h-d-thammaiah'] = [
  {
    title: 'Chikkamagaluru ki barish se kharab sadkon ke liye MLA H D Thammaiah ke prayason se Rs 27.5 crore swikrit hue, jismein SFC ke Rs 10 crore jaari karke work order diye gaye',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/state-govt-allocates-rs-27-5-cr-for-road-development-in-chikkamagaluru/articleshow/124790550.cms',
    date: '2025-10-24',
    note: 'MLA H D Thammaiah ne bataya ki barish aur UGD/Amrut karyon se kharab sadkon ke liye ve mukhyamantri, shahari vikas mantri aur nagar prashasan mantri se mile, jinke baad city council ko vishesh anudan mile. State Finance Commission (SFC) yojana ke tehat Rs 10 crore jaari ho chuke hain aur work order bhi diye ja chuke hain; iske alawa Rs 12.5 crore vishesh anudan se aur Rs 5 crore alpasankhyak vibhaag se (adhik alpasankhyak aabadi wale kshetron ki sadkon ke liye) kul Rs 27.5 crore sadak vikas ke liye uplabdh hue. Credit capped: anudan mantriyon ne diye, MLA ki maang ka dastaveji nateeja hai. Fund-srot: SFC + vishesh anudan + alpasankhyak vibhaag (KLLADS nahi).',
    period: '2023-2028',
  },
  {
    title: 'Chikkamagaluru MLA H D Thammaiah ki maang par parivahan mantri ne Mysuru-Chikkamagaluru Volvo bus seva aur purane aur naye bus addaon ke beech skywalk ki ghoshna ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/hi-tech-bus-services-infra-projects-announced-for-chikkamagaluru/articleshow/125417343.cms',
    date: '2025-11-19',
    note: 'Parivahan mantri Ramalinga Reddy ne Chikkamagaluru me naye bus station aur KSRTC aavasiya bhavanon ka udghatan kiya aur do Volvo bason ke saath Chikkamagaluru-Mysuru hi-tech bus seva (2-3 mahine me poori hone ki sambhavna) tatha donon bus addaon ke beech skywalk ko manzuri di. Page saaf likhta hai ki ye ghoshnaayein Chikkamagaluru MLA H D Thammaiah ki maang ke jawab me aayi theen. Credit capped: udghatan/shilanyas mantriyon ne kiye (MLA ne nahi); MLA ka shrey maang ke dastaveji nateeje tak seemit hai. Fund-srot ghoshit nahi (sarkari yojana).',
    period: '2023-2028',
  },
];

// REJECT-LOG (g-h-srinivasa): Ajjampura railway over bridge shilanyas (Hindu, 31 May 2026) — kendriya mantri V. Somanna ne shilanyas kiya; G.H. Srinivas, Tarikere MLA sirf upasthit — dusre neta ka event; Tarikere me PWD karyon ke shilanyas karyakram me PWD mantri Satish Jarkiholi ne bhag liya, Chikkamagaluru MLA Thammaiah ne sambodhan kiya (Hindu, 9 Oct 2024, page khola) — MLA ki vyaktigat bhoomika nahi; Tarikere bus station (Rs 9.2 crore) shilanyas Transport mantri Ramalinga Reddy/K.J. George ke karyakram me (TOI, Nov 2025; publicnext) — MLA ka role disclosed nahi; CADA adhyaksh K.P. Amshumanth ke daave (TOI, Nov 2025): Tarikere taluk me Rs 9 crore Lakkavalli hospital, Rs 29.2 crore bus station, Rs 250 crore peyjal (400 gaon) — ghoshna/daawa, lokarpan nahi; tendua-hamle ke peedita parivar ko Rs 20 lakh ka check (Hindu, Nov 2025) — rahat, reject; Hindu Corridors of Power (Feb 2024): patni Vani Srinivas gram panchayaton me sarkari karyon ke shilanyas samarohon me unki jagah jaati hain, beti Rachana GP meetings — MLA ka khud ka documented lokarpan nahi; felicitation samaroh me samarthakon ke jhagde me yuvak ki hatya (The South First, 5 Jun 2023) — MLA aaropi nahi, FIR-aaropi column me naam nahi, negative nahi; 2013 chunav par HC yachika (2014, indiankanoon) — pre-term + chunav-yachika akele negative nahi; Rs 3.97 crore model school Somashevara layout + Rs 9.18 crore bus stand (IBC World News, May 2026) — non-whitelist outlet + raajnaitik khandan me zikr, MLA ka event nahi.
karnatakaWorks['g-h-srinivasa'] = [];

// REJECT-LOG (k-s-anand, researched 2026-10-19): 131 revenue sub-villages (publicnext, Nov 2025) — MLA ne khud poora credit Revenue Minister Krishna Byre Gowda ko diya, isliye MLA kaam nahi; outlet bhi non-whitelist. Vedavathi paani vivad me shanti ki appeal (Public TV English, Apr 2025) — daura akela, kaam nahi. Maravanji biryani food-poisoning par Kadur hospital visit (Asianet Newsable, Nov 2023) — visit akela. KJ Ramachandran ka Kadur drought daura (The Hindu, Nov 2023) — mantri-daura, MLA maujood akela. District-level Rs 2,500 crore development dawa (TOI, Nov 2025, Cong DCC president ka bayan) — Kadur bus stand Rs 6 crore sarkari swikriti hai lekin MLA ki vyaktigat bhoomika report me nahi. Birur-Shivamogga rail FLS (Sansad eParLib) — railway vishay, MLA bhoomika nahi. NEGATIVE-CHECK: South First (13 Aug 2023) constable B.S. Latha suspension story me MLA par transfer ka aarop tha, lekin MLA ne seedha inkaar kiya, unke khilaaf koi FIR/chargesheet nahi (shikayat akeli), outlet non-whitelist — negative-rule fail. Halafname ke 2 pending mamle (FIR 188/2019, FIR 240/2022; CC 85/22 me charge Mar 2021) pre-term hain aur karyakaal me inme koi nyayik vikas (naya aadesh/chargesheet/giraftari) ka record nahi mila — negative akele pending-mamle par nahi banta.
karnatakaWorks['k-s-anand'] = [];
// ============================================================================
// BATCH 6 (Chitradurga + Dakshina Kannada + Davanagere — 13/31 jile)
// ============================================================================

// --- Chitradurga ---

// n-y-gopalakrishna (Molakalmuru-ST, INC) — REJECT-LOG (researched 2026-10-19): whitelisted outlets (The Hindu, Indian Express, HT, NDTV, India Today, TOI, Deccan Herald, PTI) me May 2023–Oct 2026 tak Molakalmuru seat par N. Y. Gopalakrishna ka koi dastavezi bhautik vikas kaam nahi mila — profile khaali rakhi gayi hai. Har lead ka kaaran: (1) Check-dam ka shilanyas — Jinagi Holla, Nagasamudra me Rs 3cr ka check-dam shilanyas; Siddapur, Hanumapura, Machenahalli, Nagasamudra, Heroor me aur check-dam ki ghoshna (publicnext.com, Dec 2025) — outlet whitelist me nahi, REJECT. (2) PDO baithak me garmiyon se pehle paani sankat rokne ki chetawani aur Molakalmuru bus stand ke liye transport minister se fund ki baat (publicnext.com, Mar 2026) — outlet non-whitelist + sirf baithak/chetawani/maang, REJECT. (3) KSRTC bus stand aur depot ka inauguration na hona (publicnext.com, Mar 2026) — non-whitelist; stand B. Sriramulu ke tenure (BJP sarkar, Rs 10cr) me bana, dusre neta ka kaam, REJECT. (4) Molakalmuru ko Andhra Pradesh ya Challakere me merge karne ka siyasi bayan (newindianexpress.com, 17 Aug 2026 — whitelisted par) — sirf siyasi bayan, bhautik kaam nahi; negative bhi nahi (FIR/janch/adalat nahi), REJECT. (5) Ambedkar Bhavan site ka nirikshan — sirf nirikshan, REJECT. (6) B. Sriramulu dwara potholes/hospital/hostel/houses par hamla (publicnext.com/ibcworldnews.com, Feb 2026) — opposition ka siyasi aarop, non-whitelist, negative criteria fail (FIR nahi), REJECT. (7) english.revoi.in par MLA ka khud ka bayan ki Molakalmuru me drainage, sadak, school nahi banwa paya — non-whitelist + negative criteria fail, REJECT. (8) TOI: seven-time MLA ne ministerial berth maangi (May 2025, Nayakanahatti) — whitelisted par siyasi maang, kaam nahi, REJECT. KLLADS (Rs 2cr/seat/varsh) ka istemal kisi whitelisted source me sourced nahi mila — fund joda nahi. Negatives: established media me Molakalmuru (INC) N. Y. Gopalakrishna ke khilaaf koi FIR/chargesheet/janch ya karyakaal me nyayik vikas nahi mila (dhyan rahe: SC/ST case me Infosys co-founder Kris Gopalakrishnan alag vyakti hain). Halafname ke mamle akele negative nahi — koi negative entry nahi.
karnatakaWorks['n-y-gopalakrishna'] = [];

// t-raghumurthy (Challakere ST, INC; Chitradurga district) — REJECT-LOG: whitelist (The Hindu, Indian Express incl. newindianexpress.com, HT, NDTV, India Today, TOI, Deccan Herald, PTI) me May 2023–Oct 2026 tak T. Raghumurthy ke naam se Challakere seat me koi vyaktigat lokarpan/shilanyas, itemized sanction list, ya GO-backed swikriti NAHI mili. Deccan Herald (whitelist) ne Aug 2026 cabinet expansion coverage me unhe Challakere ke 3-time MLA aur pehli-baar minister ke roop me darj kiya — ohda, kaam nahi. Rejected leads: (1) publicnext.com (non-whitelist) Sanikere Gram Panchayat building Rs 60 lakh ka lokarpan (Nov 2025) — non-whitelist, REJECT; usi portal par Parashuramapura ko taluk banane ki maang (Aug 2025) — non-whitelist + sirf maang/prastav, REJECT. (2) NIE (whitelist) Sep 2026: Upper Bhadra ke tahat Gonuru Lake par CM D.K. Shivakumar ki Ganga puja — Raghumurthy ne sirf ghoshna ki (district in-charge minister ke roop me); CM ka karyakram, MLA ka vyaktigat lokarpan nahi, REJECT; ibcworldnews (non-whitelist) ka Lakkavalli intake-point puja wala sanskaran bhi non-whitelist + Chikkamagaluru district (seat ke bahar) + rajya pariyojna, REJECT. (3) nationpress/IANS (non-whitelist) Oct 2026: ST Welfare Minister ke roop me Chamarajanagar ke tribal hamlets ka daura aur adhikariyon ko nirdesh — seat (Challakere) ke bahar ka kaam, REJECT (rule: seat ke bahar ka kaam entry NAHI). (4) ANI via asianet newsable (Aug 2026): Molakalmuru ko Andhra/Challakere me vilay ka sujhav — dusre MLA N.Y. Gopalakrishna ka bayaan, Raghumurthy pakshkaar nahi; raajneetik vivad, kaam nahi, REJECT. (5) NIE Sep 2023 (new districts): CM dwara Kannada Bhavana lokarpan + Rs 150cr works ke shilanyas — CM ka karyakram, MLA ka vyaktigat lokarpan nahi, REJECT. (6) The Hindu Apr 2016 drought action-plan — pre-term (2016), aur MLA sirf maujood the (minister H. Anjaneya ne yojna ghoshit ki), REJECT. KSSIDC chairman niyukti (Jan 2024, Oneindia non-whitelist) — ohda, seat ka kaam nahi. KLLADS fund ka koi sourced tathya kisi whitelist source me nahi — fund dawa nahi joda. Negatives: myneta.info Karnataka 2023 halafname (candidate_id 7890) me 'No criminal cases' declared; ADR ki Aug 2026 cabinet-expansion report me bhi 0 cases — halafname akele negative-rule fail. indiankanoon.org par 'N Raghumurthy vs State of Karnataka' (Feb 2024) — yachikakarta N. Raghumurthy Challakere ke Tahasildar hain (S/o T. Ningappa Nayaka), MLA T. Raghumurthy (S/o T. Thippaiah) nahi — pehchan fail, REJECT. Established media me MLA khud kisi FIR/chargesheet/confirmed jaanch me aaropi nahi; karyakaal me koi nyayik vikas nahi — koi negative entry nahi. Foundation cross-check: works_karnataka.ts me 't-raghumurthy'/'Challakere' ki koi entry pehle se nahi — koi antar nahi. Profile khali rakhi gayi.
karnatakaWorks['t-raghumurthy'] = [];

// FRAGMENT: k-c-veerendra-puppy (K. C. Veerendra alias Puppy, Chitradurga, INC) — 2023-2028 works research
// Researched 2026-10-19. Positive works: ZERO qualifying (whitelisted outlet par koi lokarpan/shilanyas/sanction nahi mila).
// Negative: 1 major in-term matter — ED ka online-betting/money-laundering case (Aug 2025 se): giraftari, custody-extension, HC se giraftari-vaidh, charge sheet, zamaanaat. Conviction NAHI hui hai.

karnatakaWorks['k-c-veerendra-puppy'] = [
  {
    title: 'ED ne Karnataka Congress MLA K. C. Veerendra ko online-betting case me giraftaar kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI (Rediff)',
    sourceUrl: 'https://m.rediff.com/news/commentary/2025/aug/23/ed-arrests-karnataka-congress-mla-in-illegal-betting-case/820edb1e06fa71e133a184f5f199a880',
    date: '2025-08-23',
    note: 'PTI ki report (Rediff par) ke anusar ED ne Chitradurga ke Congress MLA K. C. Veerendra (alias Puppy) ko Sikkim ke Gangtok se illegal online aur offline betting se jude money-laundering case me anti-money-laundering kanoon ke tehat giraftaar kiya. ED ke dawe: raids me lagbhag Rs 12 crore cash (jisme lagbhag Rs 1 crore videshi currency sahit), Rs 6 crore ke sone ke zevar, lagbhag 10 kg chandi aur chaar vaahan jabt kiye gaye. Agency ne bataya ki 50 saal ke MLA ko Gangtok ke designated magistrate ke saamne pesh karke transit remand liya gaya taaki unhe Bengaluru court me pesh kiya ja sake; Veerendra apne sahyogiyon ke saath casino lease lene ke business visit par Gangtok gaye the. Ab tak koi conviction nahi hua hai.',
    period: '2023-2028'
  },
  {
    title: 'Veerendra ki ED custody court ne 6 din badhai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/karnataka/2025/Aug/29/karnataka-congress-mlas-ed-custody-extended-by-six-more-days',
    date: '2025-08-29',
    note: 'New Indian Express ki report ke anusar Special Court for People\u2019s Representatives ne Chitradurga Congress MLA K. C. Veerendra ki ED custody 6 din aur badhai. 22-23 Aug ko 31 sthanon par chhaape mare gaye the (Chitradurga jile me 6 sthan sahit); Rs 1 crore videshi currency, Rs 6 crore ke sone ke zevar, 10 kg chandi, Rs 12 crore cash aur chaar vaahan PMLA ke tehat jabt kiye gaye. MLA ke vakil ne zamaanat maangi, ED ne 15 din aur custody maangi. Date inference: report 29 Aug 2025 ko update hui; court ka custody-extension aadesh isi tareekh ka hai.',
    period: '2023-2028'
  },
  {
    title: 'Karnataka HC ne Veerendra ki ED giraftari ko vaidh mana, patni ki yachika kharij',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/karnataka-high-court-finds-no-illegality-in-arrest-of-mla-veerendra-by-ed-in-money-laundering-case/article70167680.ece',
    date: '2025-10-15',
    note: 'The Hindu ki report ke anusar Karnataka High Court ne K. C. Veerendra ki patni R. D. Chaitra ki yachika kharij kar di jisme ED ki giraftari ki vaidhata par sawaal uthaya gaya tha. Justice M. I. Arun ne kaha ki ED ke paas yeh maan-ne ke liye kaafi kaaran maujood hain ki Veerendra PMLA ke tehat money-laundering ke doshiyon ke roop me aaropit hain. Court ne yeh bhi kaha ki giraftari ke baad Veerendra zamaanat ke liye jurisdictional court ja sakte hain. Yachika ka jawab (court ne patni ki yachika par gaur kiya, MLA ki giraftari ko sahi paaya).',
    period: '2023-2028'
  },
  {
    title: 'Online-betting case me ED ke charge sheet ke baad Veerendra ko zamaanat mili',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/arrested-ed-illegal-online-betting-congress-mla-k-c-veerendra-bail-grand-welcome-10448237/',
    date: '2025-12-30',
    note: 'Indian Express ki report ke anusar illegal online aur offline betting case me giraftaar Congress MLA K. C. Veerendra (alias Puppy) ko Bengaluru ke Special Court for People\u2019s Representatives ne zamaanat di, jiske baad Veerendra Parappana Agrahara Central Prison se riha hue. ED ke dawe: Veerendra ne cash chhupane ke liye kayi shell companies kholi, Dubai se King567 betting application unke bhatije Pruthvi N Raj ke zariye chal rahi thi, aur Veerendra Sri Lanka, Nepal aur Georgia me casinos bhi kisi aur ke naam par chala rahe the. Do raids me Rs 100 crore se zyada ki sampatti jabt hui, jisme Rs 40.69 crore bank/demat accounts me aur Rs 14.46 crore 262 mule accounts me freeze kiye gaye. Ab tak koi conviction nahi hua hai. Date inference: report Dec 2025 ki hai aur rihaai ko \u2018Tuesday evening\u2019 bataya gaya hai; 30 Dec 2025 Tuesday ko padta hai (search-crawl se lagbhag 292 din pehle), isliye 2025-12-30 rakha gaya hai.',
    period: '2023-2028'
  },
  {
    title: 'ED ne Veerendra ki Rs 177 crore ki sampatti kurk ki; case me kul Rs 320 crore se zyada ki attachment',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/karnataka/2026/Jan/30/online-betting-case-ed-attaches-rs-177-crore-assets-of-congress-mla-kc-veerendra-in-karnataka',
    date: '2026-01-30',
    note: 'New Indian Express ki report ke anusar ED ne Congress MLA K. C. Veerendra se judi movable aur immovable sampattiyon par Rs 177.30 crore ki provisional attachment ka aadesh diya; iske saath PMLA ke tehat case me kul Rs 320 crore se zyada ki sampatti attach ho gayi. ED ke anusar jaanch me Rs 2,300 crore se zyada ke proceeds of crime pehchane gaye jo illegal online betting aur gambling se bane aur multiple layers se launder kiye gaye. ED ne Veerendra ko PMLA ki dhara 19 ke tehat giraftaar kiya tha aur Special PMLA Court ke saamne prosecution complaint dayar ki thi. Date inference: report URL path /2026/Jan/30/ ke anusar 2026-01-30.',
    period: '2023-2028'
  }
];

// REJECT-LOG (k-c-veerendra-puppy):
// 1. ibcworldnews.com, 15 Jun 2026 — MLA K C Veerendra Pappi launches development works (Singapore, Betta Nagenahalli, Vidyanagar me Rs 2.85 crore ke roads ki bhoomi puja): REJECT — outlet whitelist me NAHI hai (chhota portal); sirf bhoomi puja event ki coverage, sanction document ka koi zikr nahi.
// 2. ibcworldnews.com, 14 Jun 2026 — MLA Veerendra Pappi pledges village development works (Sondekol/Kakkere me Rs 20 lakh + Rs 55 lakh + Rs 40 lakh ki sanctions ka dawa): REJECT — outlet whitelist me NAHI; kewal MLA ke dawe par aadharit, sarkari sanction ka koi dastavej nahi.
// 3. ibcworldnews.com, 07 May 2026 — MLA promises upgradation of Rudrabhoomi facilities in Chitradurga: REJECT — outlet whitelist me NAHI; sirf nirikshan + aashwasan, koi kaam shuru nahi.
// 4. ibcworldnews.com, 28 Jun 2026 — Kempegowda Jayanti par MLA ka bhashan: REJECT — samaroh me bhashan, vikas-karya nahi.
// 5. youtube.com (News18 Kannada short) — SP ke saath jhagde ka video: REJECT — YouTube whitelist me NAHI; vikas-karya nahi.
// 6. The Week (23 Aug 2025) — 2016 ka IT case (bathroom se Rs 5.70 crore nayi currency aur 32 kg sone ki zabti): REJECT — pre-term mamla (Dec 2016), karyakaal me is par koi nayi nyayik pragati nahi.
// 7. newsable.asianetnews.com (IANS) — 18 Oct 2025 ko Bengaluru court me Veerendra ke khilaf charge sheet: charge-sheet ki ghatna VALID hai lekin outlet whitelist me NAHI; New Indian Express (whitelist) ki 30 Jan 2026 report me prosecution complaint ka zikr hai, isliye use entry banayi gayi, ye source alag se add NAHI kiya gaya.
// 8. zee news (IANS, Feb 2026) — supplementary charge sheet (anya aaropiyon ke naam, Veerendra main accused): REJECT — outlet whitelist me NAHI.
// 9. Mathrubhumi English (Feb 2026) — supplementary prosecution complaint: REJECT — outlet whitelist me NAHI.
// 10. Chitradurga MP Govind Karjol ke MPLADS kaam: koi aisa kaam jisme MLA ki bhoomika dikhi ho, nahi mila; MP ke kaam entry NAHI karne ka niyam.
// NOTE: MLA ke halafname me darj 2016 ka IT case pre-term hai aur is karyakaal me us par koi court order/report established media me nahi mili — isliye negative entry me shamil nahi.

// QA: 10 candidates screened, 5 qualifying negative entries, 0 qualifying works. Whitelisted outlets (The Hindu, Indian Express, New Indian Express) par karyakaal ke koi vyaktigat vikas-karya (lokarpan/shilanyas/itemized sanction) nahi mile.

// B. G. Govindappa — Hosadurga (INC) — karyakaal May 2023+
// Whitelisted sources (The Hindu, Indian Express, Hindustan Times, NDTV,
// India Today, Times of India, Deccan Herald, PTI outlets, sarkari portals)
// me in-term vyaktigat karyon ki koi report nahi mili. Profile khali rakha
// gaya hai; neeche har rejected lead ka kaaran srot ke saath darj hai.

// REJECT-LOG:
// 1. GFGC Hosadurga furniture handover (26-04-2025) — Karnataka Food and Civil
//    Supplies Corporation (KFCSC) ki CSR initiative me Rs 16 lakh ka furniture
//    daan; MLA B G Govindappa (KFCSC Chairman + CDC Chairman) ne haath saunpa.
//    Srot: gfgc.karnataka.gov.in sarkari portal report (khud kholkar padha).
//    REJECT: "mukhya-atithi/CSR samaroh" rules ke tahat reject — CSR samaroh
//    + kaam corporation ka, MLA ka vyaktigat MLA-fund ka nahi.
// 2. Mallappanahalli Jali Lake inauguration/handover (30-03-2026) — SKDRDP
//    (NGO) ka Nammuru Namma kere karyakram, MLA chief guest ke roop me
//    maujood. Srot: skdrdpindia.org (whitelist me nahi). REJECT: non-whitelisted
//    srot + karyakram me maujoodgi; koi vyaktigat sanrachna-bhoomika nahi.
// 3. Mining-affected areas review meeting, taluk panchayat hall (13-06-2025) —
//    MLA ne adhikariyon ko fatkar lagayi, kaam ek mahine me poora karne ka
//    nirdesh. Srot: publicnext.com (whitelist me nahi). REJECT: non-whitelisted
//    + sirf nirikshan/baithak, koi lokarpan/shilanyas/swikriti nahi.
// 4. Agricultural implements awareness workshop (16-05-2025) — MLA ne vendors
//    ko gram-stariya uplabdhata ka nirdesh diya. Srot: publicnext.com
//    (whitelist me nahi). REJECT: non-whitelisted + sirf baithak/vyakhyan.
// 5. Crime Nos. 205/2023 aur 206/2023 (Hosadurga PS, dt. 07-05-2023 — IPC
//    171C/171F, Child Labour Act, RP Act 123(3B)) — Karnataka High Court
//    (Justice M. Nagaprasanna, Crl.P.Nos 10876/2023 aur 10938/2023) ne donon
//    FIRs petitioner ke khilaf radd ki. REJECT: pre-term FIR + in-term
//    nyayik raahat to hai, lekin koi established media coverage nahi mili
//    (sirf casemine.com legal database) — negative rules whitelist mandatory
//    hai, isliye include nahi kiya.
// 6. Defamation suit (2009, daijiworld) — tab ke sports minister Gulihatti
//    Shekhar ne ex-MLA B G Govindappa par Holalkere civil court me defamation
//    case (IPC 499/500/501/502) mining-aaropon par. REJECT: pre-term mamla,
//    karyakaal me koi nyayik vikas nahi.
// 7. Myneta 2023 halafnama: FIR 107/2020, Srirampura PS (Sec 267 / Disaster
//    Management Act, charges framed 29-12-2022). REJECT: "halafname ke mamle
//    akele NAHI" rule — media-sourced FIR/janch ka dastavej nahi mila.
// 8. CM Infrastructure Development Programme (July 2025) — sabhi 224 seats ke
//    liye Rs 50 crore/constituency swikrit. REJECT: state-level sarkari ghoshna,
//    Hosadurga ke liye MLA ki vyaktigat dastaveji bhoomika ka koi srot nahi;
//    sirf ghoshna.

karnatakaWorks['b-g-govindappa'] = [];

// m-chandrappa (Holalkere, SC, BJP) — REJECT-LOG: whitelist (The Hindu, Indian Express, HT, NDTV, India Today, TOI, Deccan Herald, PTI) me May 2023–Oct 2026 tak M. Chandrappa ke naam se Holalkere me KOI dastaveji vikas kaam nahi mila — profile khaali rakhi. Rejected leads: (1) publicnext (Feb 2025): Thanigehalli me Rs 3cr ki CC, sadak kaamon ka shilanyas, Rs 1.50cr ka naya check dam aur Ingukere vikas — post-event in-term lekin publicnext whitelist me nahi, REJECT. (2) ThePrint/ANI (20 Mar 2023): CM Bommai ne Holalkere me vikas karyon ka lokarpan kiya — pre-term (May 2023 se pehle) + dusre neta (CM) + ThePrint whitelist me nahi, REJECT. (3) HT (Invest Karnataka Conclave): Chandrappa ne Suvarna Soudha me vidhansabha satra me Invest Karnataka Conclave 2022 ke MoU par sawal uthaya, mantri M.B. Patil ne jawab diya — sirf prashna, koi dastaveji nateeja/ashwasan nahi, REJECT. (4) The Hindu (29 Mar 2024): bete Raghuchandan ke liye Chitradurga LS ticket par asantosh, samarthakon ki baithak — party politics, na kaam na negative (party karyawahi akele negative nahi), REJECT. (5) The Hindu (4 Apr 2024): dissidence 'died down' — party matter, REJECT. (6) publicnext (Dec 2025): Hirekandavadi me Daliton ko aavantit zameen ki kharid par Anjaneya ke aarop, Chandrappa ka press conference me khandan aur 'ek inch bhi sabit ho to rajneeti se sanyas' ki chunauti — established media nahi, FIR/chargesheet/janch nahi, shikayat-rule se negative NAHI. (7) publicnext (Dec 2025): Adanur parivaar ka satyagraha — gram panchayat PDO aur MLA ne samjhaute me ghar banane ka ashwasan diya tha lekin bana nahi — non-whitelist + vikas kaam nahi + FIR/aaropi nahi, REJECT. (8) Indian Express (Aug 2022): midday meal food poisoning me 'Holalkere BJP MLA Chandrappa spot par nahi aaye' — pre-term (2022), REJECT. (9) myneta 2023 affidavit (candidate_id 7319): halafname ke mamle akele negative nahi, rule se bahar. (10) SKDRDP (Dec 2024): Holalkere me 'Vikasa Soudha' project office ka lokarpan Rev. D. Veerendra Heggade ne kiya, profit mantri D. Sudhakar ne baanta, scholarship ex-minister Anjaneya ne — NGO building, Chandrappa ka koi dastaveji role nahi, REJECT. (11) Deccan Herald (Sep 2026): Chitradurga KSRTC city bus — Chandrappa ka zikr nahi, irrelevant. (12) kmerc.karnataka.gov.in: Holalkere taluk me 101 anganwadi bhavan / 153 anganwadi upgradation / Hirekandavadi-Tanigehally CC road (Rs 6cr) ke CEPMIZ prastav — mass proposals, MLA ki vyaktigat dastaveji bhoomika nahi, REJECT. (13) TOI/HT/cnbctv18 election pages (May 2023): chunav parinaam, kaam nahi. KLLADS (Rs 2cr/seat/varsh) ka istemal kisi whitelist source me sourced nahi mila — fund dawa nahi joda. Negatives: 2023 halafname check kiya (halafname akele negative nahi); koi established media me FIR/chargesheet/janch ya in-term nyayik vikas nahi — koi negative entry nahi. Foundation cross-check: works_karnataka.ts me 'm-chandrappa' ki koi entry pehle se nahi — koi antar nahi.
karnatakaWorks['m-chandrappa'] = [];

// --- Dakshina Kannada ---

// harish-poonja (Belthangady, BJP) — REJECT-LOG: whitelist (The Hindu, Indian Express, HT, NDTV, India Today, TOI, Deccan Herald, PTI) me May 2023–Oct 2026 tak Harish Poonja ke naam se Belthangady seat par KOI dastaveji vikas kaam nahi mila — teeno entries negative (in-term FIR) hain. (1) Kabaddi stadium / 2 kabaddi mats via MLAAD — source sirf newskarnataka.com (non-whitelist); Rs 9 crore ki swikriti pichhli BJP sarkar ki (pre-term), mats ki rakam sourced nahi — REJECT. (2) 55 sarkari schools me MRPL CSR toilets Rs 5.50 crore — daijiworld (non-whitelist), kaam 2020 ka (pre-term), CSR fund — REJECT. (3) Sacred Heart College free eye check-up camp (Sep 2024) — daijiworld media release (non-whitelist), MLA sirf udghatan-atithi, MCF CSR karyakram — REJECT. (4) NH spur roads (Periyashanthi-Paichar, Guruvayanakere-Bajagoli) — TOI: MP Brijesh Chowta + Poonja ne kendriya mantri Gadkari se anurodh kiya, Gadkari ne sakaratmak jawab diya — sirf prastav, swikriti nahi — REJECT. (5) Kumki/kana bana/soppina betta notification withdrawal ki maang (The Hindu, Jul 2024) — sirf maang — REJECT. (6) DK ka naam Mangaluru rakhne ka prastav — sirf prastav (daijiworld, non-whitelist bhi) — REJECT. (7) Rs 57 crore CRIF road projects — MP Brijesh Chowta ka announcement (The Hindu); Poonja ki vyaktigat dastaveji bhoomika nahi — MP ke kaam, REJECT. (8) Crop insurance payout me girawat ka aarop (Oct 2026) — aarop-jawaab ka mudda, vikas kaam nahi — REJECT. (9) NH-73 land acquisition aniyamitta ka aarop aur janch-maang (newindianexpress, Apr 2026) — sirf aarop — REJECT. (10) Van adhikari ko apshabd ka FIR (Oct 2024) — UNI snippet me zikr, kisi whitelist outlet par coverage nahi mili — REJECT (retry lead). (11) Police-station case me High Court stay ka dawa — sirf thenewsminute (non-whitelist) me; whitelisted confirmation nahi — note me stay dawa nahi joda, REJECT. (12) Kalaji fund protest (2020, mangaloretoday) — pre-term + shikayat, FIR nahi — REJECT. (13) Bhagawadhwaja video vivad (Mar 2022) — pre-term + bhashan, kaam nahi — REJECT. (14) TOI ka May 2025 FIR article (timesofindia...amp_articleshow/120876310.cms) — browser.open par HTTP 403, page khul nahi saka (retry lead); usi ghatna ke tathya The Hindu (amp) se confirm karke entry The Hindu source par rakhi. (15) KLLADS (Rs 2cr/seat/varsh) ka istemal Belthangady ke liye kisi whitelist source me sourced nahi mila — fund dawa nahi joda. Negatives: teeno entries me FIR established media par hai aur MLA khud aaropi hai; jawab aur nyayik vikas note me disclosed hai.
// NOTE: Neeche ke saare titles/notes Roman-script Hinglish me hain (Devanagari/Kannada script nahi), currency "Rs" me.
karnatakaWorks['harish-poonja'] = [
  {
    title: 'Belthangady police ne MLA Harish Poonja ke khilaf police station me hungama karne aur bina anumati pradarshan karne par do FIR darj ki.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/threat-to-police-should-we-let-off-harish-poonja-just-because-he-is-an-mla-asks-siddaramaiah/article68215604.ece',
    date: '2024-05-19',
    note: 'The Hindu ke anusar police ne 19 May 2024 ko MLA ke khilaf case darj kiya, kyunki unhone 18 May ki raat Belthangady police station me hungama kiya tha — wahan BJP Yuva Morcha ke taluk adhyaksh Shashiraj Shetty ki giraftari ka virodh ho raha tha (Shetty par Melantabettu me avaidh patthar khadan aur visfotak rakhne ka aarop tha). 21 May ko doosri FIR darj hui, kyunki 20 May ko Vikasa Soudha ke samne Shetty ki giraftari ke khilaf bina anumati pradarshan hua tha. CM Siddaramaiah ne 25 May ko bataya ki MLA par IPC ki dhara 353 (public servant ko kartavya se rokna) ke tahat FIR hai jo non-bailable hai aur dosh siddh hone par 7 saal tak ki saza ho sakti hai; unhone kaha ki MLA ke khilaf police ko dhamkane ke do case darj hain. MLA ka paksh (Hindustan Times ke anusar): BJP pradesh adhyaksh B.Y. Vijayendra ne kaha ki Shetty ko police ne galat phasaya aur FIR sarkar ke badle ki bhavna se darj ki gayi; giraftari rokne ki BJP ne Dakshina Kannada Bandh ki dhamki bhi di thi. Nyayik vikas: Karnataka High Court ke quashment order (CC No.18210/2024, Belthangady court) ke anusar police ne chargesheet daakhil kar di thi aur case trial court me lambit hai. Stage-accurate: FIR + chargesheet + trial-court case lambit; koi antim adalati faisla source me darj nahi.',
    period: '2023-2028',
  },
  {
    title: 'Uppinangady police ne MLA Harish Poonja ke khilaf Tekkar ke Gopalakrishna Temple me Brahmakalashotsava ke dharmika sabha me kathit bhadkau bhashan par BNS ke tahat FIR darj ki.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/temple-committee-apologises-to-muslims-hurt-by-belthangady-mlas-remarks/article69570966.ece',
    date: '2025-05-04',
    note: 'The Hindu ke anusar 3 May 2025 ko Belthangady taluk ke Tekkar gaon me Bhattarabailu Gopalakrishna Temple ke Brahmakalashotsava ke dharmika sabha karyakram me MLA ne kathit taur par ek samuday ko lakshya karke bhadkau bhashan diya — unhone Brahamkalashotsava aayojan samiti ke lagaye tubelights ko nuksan pahunchane ka aarop Muslims ke ek varg par lagaya aur aayojan samiti se sawal kiya ki Muslims ko karyakram me kyun bulaya gaya. Shikayat ke baad Uppinangady police ne 4 May 2025 ko FIR darj ki; The Hindu ke anusar BNS ki dhara 353(2) lagi (TOI ke anusar BNS ki dhara 196 bhi lagi — lekin TOI ka page 403 par khul nahi saka, retry lead). MLA ka paksh: 5 May ko Mangaluru me press se baat me unhone bhashan ko sahi thahraya aur kaha ki unhone apne shabdon se sirf Hindu samaj ko jagaya hai; sarkar ne ise sampradayik mana. Nyayik vikas (court reporting, LiveLaw/newskarnataka ke anusar): police ne May 2025 me chargesheet daakhil ki; MLA ne High Court me FIR radd karne ki yachika dayi aur 22 May 2025 ko Justice S. Rachaiah ki vacation bench ne agali sunvai (18 June) tak karyavahi par antarim rok lagai. Stage-accurate: FIR + chargesheet + High Court ne karyavahi par rok lagai; koi antim adalati faisla source me darj nahi.',
    period: '2023-2028',
  },
  {
    title: 'Belthangady police ne MLA Harish Poonja ke khilaf unke is dawe par FIR darj ki ki CM Siddaramaiah 24 Hindu karyakartaon ki hatya ke zimmedaar hain.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'NDTV',
    sourceUrl: 'https://www.ndtv.com/karnataka-news/case-filed-against-karnataka-mla-for-hate-speech-against-siddaramaiah-4066780',
    date: '2023-05-25',
    note: 'NDTV ke anusar Dakshina Kannada jile ki Belthangady police ne Belthangady ke BJP MLA Harish Poonja aur ek anya vyakti ke khilaf CM Siddaramaiah ke khilaf kathit hate speech par case darj kiya. Poonja ne 22 May 2023 ko Belthangady me apne vijay bhashan me aarop lagaya tha ki Siddaramaiah jile me 24 Hindu karyakartaon ki maut ke zimmedaar hain; bhashan ke audio-video viral hue the. Mahila Congress karyakarta Namita K. Poojary ki shikayat par MLA aur karyakram aayojak Jayant Kotiyan par IPC ki dhara 153 (danga bhadkane ke irade se uksana), 153A (dharm aadi ke aadhar par samuhon me dushmani badhana) aur 505 (lok-upadrav ke liye uksane wale bayan) ke tahat case darj hua; Dakshina Kannada SP Vikram Amathe ne FIR ki pushti ki. Tithi anumanit: lekh me Guruvar ko FIR darj hona likha hai aur lekh 25 May 2023 ko prakashit hua; 25 May 2023 Guruvar tha, isi se tithi li gayi hai. MLA ka turant jawab lekh me darj nahi; nyayik vikas (court reporting ke anusar): MLA ne High Court me yachika dayi aur court ne janch par rok lagai. Stage-accurate: FIR darj + High Court ne janch par rok lagai; koi antim adalati faisla source me darj nahi.',
    period: '2023-2028',
  },
];

// umanatha-kotian — 0 works + 0 negatives
// Moodabidri (delimitation ke baad: Mulki-Moodabidri), BJP — MLA record pakka:
// May 2023 me seat barkarar (Umanath Kotian 86,925 vote; Congress ke Mithun M. Rai 64,457 — oneindia result page);
// 2018 me pehli baar BJP ne yahan khaata khola tha (The Hindu election profile, article66788661).
// Poorv me Karnataka Tulu Sahitya Academy ke adhyaksh rahe (ye tenure pre-term hai).
// Karyakaal May 2023+ me ye VIPAKSHI MLA hain (sarkar Congress ki) — whitelisted media
// (The Hindu, TOI, DH, NIE, HT, NDTV, India Today, PTI) me unke vyaktigat lokarpan/shilanyas
// ki koi post-event report NAHI mili. Jo leads mile, sab ya to sirf maang/prastav,
// ya dusre netaon ke karyakram me maujoodgi, ya CSR/mela/dharmik samaroh nikle.
// Isliye profile KHALI hai — khali profile theek hai (standing rule).
// Fund note: KLLADS (Rs 2cr/seat/varsh) se juda koi itemized suchi ya fund-disclosure
// kisi bhi whitelisted srot me nahi mila — isliye koi fund joda nahi gaya ("ghoshit nahi").
karnatakaWorks['umanatha-kotian'] = [];

// REJECT-LOG (umanatha-kotian):
// 1. Deccan Herald "Karnataka yet to release Rs 73 lakh compensation for loss of crops in elephant menace"
//    (.../karnataka-yet-to-release-rs-73-lakh-compensation-for-loss-of-crops-in-elephant-menace-4128333,
//    29 Aug 2026 — browser.open se kholkar padha): DISHA review meeting me Kotian ne Mangaluru airport
//    kshetra ke jalbharao ka mudda uthaya; PWD adhikariyon ne KEVAL Rs 23 crore ka prastav banaya hai
//    (Kandavara GP ke rajakaluve ke liye), Bajpe Town Panchayat hisse ka estimate bhi abhi banna hai.
//    REJECT — sirf maang/prastav; koi manzoori/GO/shilanyas/lokarpan nahi. (TOI ki DISHA-meet story
//    articleshow/133615548.cms, Sep 2026 — wahi tathya, wahi rejection.)
// 2. The Hindu "MLA inaugurates fruits fair at Pilikula" (article68320708.ece, 22 Jun 2024):
//    Pilikula Nisargadhama me 2-divasiya phal mela ka udghatan. REJECT — mela/utsav ka udghatan;
//    koi bhautik sarkari sanrachna nahi.
// 3. TOI "233 Beneficiaries Get Artificial Limbs" (articleshow/104434560.cms, Oct 2023):
//    MRPL ke 7-divasiya muft artificial limb camp (CSR) ka udghatan MLA ne kiya.
//    REJECT — CSR samaroh; mukhya-atithi bhoomika (standing rule: CSR samaroh reject).
// 4. New Indian Express / The Hindu / TOI / PTI — "Praja Soudha" Mulki taluk prashasanik bhawan
//    (14 Mar 2026; NIE .../2026/Mar/14/district-level-sits-to-be-set-up...; TH article70743363.ece;
//    TOI articleshow/129578941.cms): udghatan Revenue Minister Krishna Byre Gowda aur district
//    in-charge Minister Dinesh Gundu Rao ne kiya (Rs 12 crore bhawan); Kotian sirf maujood/presided.
//    REJECT — dusre neta ke karyakram me maujoodgi.
// 5. The Hindu "Home Minister to lay foundation stone for new police quarters in Mangaluru"
//    (article70639742.ece, 16 Feb 2026): Moodbidri ke naye police quarters ka udghatan Home Minister
//    G. Parameshwara ne kiya; report me Kotian ka ullekh bhi nahi. REJECT.
// 6. The Hindu "BJP legislators accuse DK administration of interfering in the rights of MLAs"
//    (article67180198.ece, Aug 2023): Iruvail GP me Rajiv Gandhi Seva Kendra + GP office ka udghatan
//    31 July ko HONA THA — protocol vivaad par RADD ho gaya, kabhi hua nahi. REJECT — radd karyakram;
//    koi kaam nahi (ye rajnaitik khabar hai, works nahi).
// 7. The Hindu "MLA asks district administration to prevent sewage flow into Nandini river"
//    (article69377617.ece, 26 Mar 2025): Khandevu fishing festival ke liye Nandini nadi me sewage
//    rokne ki maang. REJECT — sirf maang, koi parinaam darj nahi.
// 8. The Hindu "Despite demand, KSRTC yet to apply for new route permits in Dakshina Kannada"
//    (article70267135.ece, 11 Nov 2025): review meeting me Mangaluru-Moodbidri permit par HC stay ka
//    mudda uthaya. REJECT — sirf maang/charcha, koi dastaveji nateeja nahi.
// 9. Mangalore Today "Alva's Medical College inaugurated in Moodbidri" (~Sep 2025): udghatan Union
//    Minister Pralhad Joshi ne kiya; Kotian sirf maujood. REJECT — whitelist bahar + dusre neta ke
//    karyakram me maujoodgi + niji shikshan sanstha.
// 10. Daijiworld "Mangaluru: Maravoor set to get new bridge" (newsID=1315109, 22 May 2026):
//     SH-67 par Maravoor me Rs 40 crore ka naya bridge; tender prakriya chal rahi hai; MLA ne purane
//     bridge par 2 saal pehle kharch hue Rs 6 crore ka zikr kiya. REJECT — whitelist bahar (daijiworld)
//     + tender abhi chal raha hai, koi shilanyas/lokarpan nahi.
// 11. publicnext.com "Rs 92.51 crore for Mulki Taluk Drinking Water Project" (~Jan 2026):
//     Republic Day samaroh me MLA ka DAWA — Mulki Nagar Panchayat drinking water scheme ke liye
//     Rs 55.55 crore + Rs 36.96 crore (kul Rs 92.51 crore) sanctioned, kaam pragati par. REJECT —
//     aggregator, whitelist bahar; koi GO/manzoori-dastavej nahi. RETRY-LEAD: kisi whitelisted outlet
//     me post-event report ya sarkari GO mile to "dawa"-badge entry ban sakti hai.
// 12. publicnext.com "Mulki: Efforts to solve drinking water problem" (7 Feb 2026): Lingappaiahkadu
//     Nagabana (KS Rao Nagar) me Rs 7 lakh ka drinking water plant — MLA ke LRDF se Rs 5 lakh + 15th
//     Finance Commission se Rs 2 lakh — ka udghatan MLA ne kiya; Vijayapura Colony me Narayana Guru
//     Road ke naam-patal ka anaavaran bhi. REJECT — aggregator, whitelist bahar. RETRY-LEAD (sabse
//     majboot): whitelisted outlet me post-event report mile to VALID entry banegi — vyaktigat
//     lokarpan, fund disclosed (Rs 5 lakh LRDF + Rs 2 lakh 15th FC), bhautik sanrachna.
// 13. ibcworldnews epaper (Oct 2026) + Deccan Herald "MRPL announces Rs 1.20 crore compensation..."
//     (4167405, Oct 2026): MRPL CHTU blast ke baad management ne Rs 90 lakh muavza + Rs 10 lakh
//     medical insurance (contract workers sahit) par sahamati di; Kotian ne MD se baatcheet ki.
//     REJECT — company ka muavza (sarkari fund/sanrachna nahi); vivaad-samadhan, works nahi.
//     (DH story me muavza minister U.T. Khader ke hastakshep par; Kotian sirf protest me maujood.)
// 14. TOI "'DC ignored MLA in decision to hold kambala in Pilikula'" (articleshow/113139655.cms,
//     Sep 2024): DC ke khilaf privilege motion ki dhamki — rajnaitik vivaad. REJECT — kaam nahi;
//     negative bhi NAHI (koi FIR nahi).
// 15. TOI "Remark against speaker: Won't apologise, says suspended MLA Umanath Kotian"
//     (articleshow/119419372.cms, Mar 2025): 18 BJP MLAs ke saath 6-mahine ka sadan-nilamban.
//     NEGATIVE NAHI — sadan/party karyawahi akele negative nahi (standing rule).
// 16. HT "Ruckus hits Karnataka assembly, 10 BJP MLAs suspended" (Jul 2023, 101689794704037-amp)
//     + related: Kotian sahit 10 MLAs ka session-nilamban. NEGATIVE NAHI — wahi rule.
// 17. TOI "'MLA wanted fertile land to be acquired for industry'" (articleshow/99681601.cms,
//     Apr 2023): May 2020 ke patra (pre-term) ka chunavi vivaad; MLA ne aarop nakara. Pre-term +
//     koi FIR nahi — NEGATIVE NAHI.
// 18. Daijiworld "Mangaluru: Permude church reopens in splendour" (newsID=1331690, 16 Oct 2026):
//     church diamond jubilee me shirkat. REJECT — dharmik samaroh me maujoodgi + whitelist bahar.
// 19. Daijiworld "Fortune Aura launched in Moodbidri" (newsID=1300093, Dec 2026): niji residential
//     project ka site-office udghatan. REJECT — niji project + whitelist bahar.
// 20. Mangalore Today "CM Bommai inaugurates Anna Dasoha building in Moodbidri" (27 Apr 2022):
//     udghatan CM ne kiya; pre-term. REJECT — pre-term + dusre neta ka karyakram.
// 21. Bellevision "Newly-built Primary Health Centre at Bajpe offered unto society": udghatan mantri
//     ne kiya, Kotian ne adhyakshata ki; BJP-sarkar kaal (pre-term). REJECT — whitelist bahar +
//     pre-term + dusre neta ka udghatan.
// 22. Mangalore Today "Coastal MLAs seek integrated development, higher budget allocation"
//     (13 Feb 2026): Coastal Development Board meeting me water metro/tourism fund ki maang.
//     REJECT — sirf maang + whitelist bahar.
// 23. Indian Express "Moral policing incidents rise in Karnataka" (Oct 2021): pre-term; MLA aaropi
//     NAHI (aaropiyon ko thane se le jane ka zikr). NEGATIVE NAHI — pre-term + FIR me naam nahi.
// 24. Daijiworld "MLA Umanath Kotian dismisses allegation of pending case" (Aug 2018): ADR survey me
//     IPC 363 ke dawe ka khandan; purana protest-case court se disposed. Pre-term + halafname ke
//     mamle akele negative NAHI.
// 25. TOI "Second edition of Tulunad Conclave on Aug 23" (articleshow/133123623.cms, Aug 2026):
//     conclave me shirkat. REJECT — sanskritik karyakram, kaam nahi.
// 26. TOI "Legislators demand budget allocation for coastal development" (articleshow/128268927.cms,
//     Feb 2025): budget me fund ki maang. REJECT — sirf maang.
// 27. TOI "MLAs demand that administration control laterite stone price" (articleshow/125254306.cms,
//     Nov 2025): DISHA meeting me thekedaaron par karrawai ki maang. REJECT — sirf maang.
// 28. TOI "BJP delegation submits 44 demands to CM ahead of cabinet meeting"
//     (articleshow/134215523.cms, Sep 2026): 44 maangon ka gyaapan. REJECT — sirf maang.
// NEGATIVE leads: upar #15, #16, #17, #23, #24 sab reject — is karyakaal me MLA ke khilaf koi FIR/
// chargesheet/janch ya nyayik vikas established media me NAHI mila. Negatives = 0.

// bharath-shetty-y — Dr Y. Bharath Shetty (Mangalore City North, BJP); karyakaal May 2023+; doosri baar ke MLA (2018 se).
// Mining: 0 works + 2 negatives (dono in-term FIR, MLA khud aaropi, established media, jawab disclosed).
// Works: whitelist outlets (The Hindu, Indian Express, HT, NDTV, India Today, TOI, Deccan Herald, PTI) me May 2023–Oct 2026 tak
// MLA ke vyaktigat lokarpan/shilanyas ya dastaveji sanction wala koi seat-level bhautik kaam nahi mila.
// Sabse mazboot lead (The Hindu, Surathkal-Bajpe RoB concreting, Rs 78 lakh tender, MLA ne adhikariyon ki baithak ki adhyakshata ki)
// browser.open par 403 aane se source verify nahi ho saka — RETRY-LEADS me darj, entry nahi banayi.
// Fund note: KLLADS (Rs 2cr/seat/varsh) ka istemal kisi whitelist source me kisi vishisht kaam ke liye cited nahi mila — ghoshit nahi.
// Halafnama (myneta.info, Karnataka 2023): 0 declared criminal cases — halafnama akele negative nahi, entry nahi.
// Sab entries Roman-script Hinglish me hain; currency Rs me; negative entries me stage field nahi.
karnatakaWorks['bharath-shetty-y'] = [
  {
    title: 'St Gerosa English Higher Primary School vivad me Mangalore City North MLA Y. Bharath Shetty ke khilaf FIR darj hone par Vidhansabha me hungama hua, jisme Grih Mantri ne sadan me bayan diya ki MLA virodh ke samay school me maujood nahi the.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/karnataka/2024/Feb/16/st-gerosa-school-issue-ruckus-over-fir-against-mangaluru-bjp-mla',
    date: '2024-02-16',
    note: 'NIE ne likha ki St Gerosa English Higher Primary School vivad me Mangaluru North BJP MLA Bharath Shetty Y ke khilaf police ne FIR darj ki, jisse sadan me hungama hua. Grih Mantri G Parameshwara ne sadan me bayan diya ki unhone police commissioner se verify kiya hai — MLA us samay school me nahi the jahan ek teacher ke kathit bayan par virodh hua tha — aur dono pakshon par aage ki jaanch ke baad hi doshiyon par kaarvai hogi. Vipaksh ne FIR darj karne wale sub-inspector ke turant nilamban ki maang ki, jise mantri ne thukra diya. MLA Shetty ne sadan me apna paksh rakhte hue kaha ki ve us samay Bengaluru ja rahe the (boarding pass ka hawala diya) aur phir bhi unpar gair-zamanati mamla darj kiya gaya. Tithi: lekh 16 Feb 2024 ko prakashit hua; sadan ka hungama Guruvaar (15 Feb) ko hua — isi aadhar par tithi li gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Rahul Gandhi par kathit uksaane wale bayan ko lekar Mangaluru North MLA Y. Bharath Shetty ke khilaf Kavoor police station me BNS ki dharaon me FIR darj hui aur police ne unhe jaanch team ke samne pesh hone ka notice bheja.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/india/bjp-mla-bharath-shetty-booked-for-remarks-against-rahul-gandhi-9445289/',
    date: '2024-07-10',
    note: 'Indian Express ne likha ki Karnataka BJP MLA Y Bharath Shetty ke khilaf Kavoor (Mangaluru) me ek karyakram me Congress MP aur Lok Sabha me Vipaksh ke Neta Rahul Gandhi ke khilaf kathit uksaane wale bayan par mamla darj hua. FIR ke mutabik 8 Jul ko Shetty ne kaha tha ki Rahul Gandhi ko Parliament ke andar band karke thappad marna chahiye. Congress neta Anil K ki shikayat par Mangaluru Police Commissioner Anupam Agarwal ke anusaar FIR darj ki gayi; Shetty par Bharatiya Nyaya Sanhita 2023 ki dhara 351(3) (criminal intimidation) aur 353 (public mischief ke liye uksaane wale bayan) lagayi gayin, aur ek police adhikari ne bataya ki Shetty ko jaanch team ke samne pesh hone ka notice bheja gaya. Tithi anumanit: IE ne 10 Jul 2024 ko FIR darj hone ki khabar prakashit ki. Adalat se raahat: 19 Jul 2024 ko Karnataka High Court ne FIR par rok lagayi thi — ye tathya barandbench/scroll.in se hai, kisi whitelist outlet me iski pushti nahi mili, isliye stage-framing ki live-browser se pushti karne yogya hai.',
    period: '2023-2028',
  },
];

/*
REJECT-LOG (bharath-shetty-y):
1. mangalorean.com — "MLA Dr Bharath Shetty Lays Foundation Stone for RGUHS Regional Centre in City" (Oct 2020)
   URL: https://www.mangalorean.com/mla-dr-bharath-shetty-lays-foundation-stone-for-rguhs-regional-centre-in-city/
   REJECT: pre-term (karyakaal May 2023 se) + non-whitelist portal.
2. mangaloretoday.com — "Mangaluru: CM lays foundation for RGUHS Regional Centre at Maryhill" (17 Jan 2025)
   URL: https://www.mangaloretoday.com/main/Mangaluru-CM-lays-foundation-for-RGUHS-Regional-Centre-at-Maryhill.html
   REJECT: non-whitelist + shilanyas CM Siddaramaiah ne kiya, MLA Bharath Shetty sirf upasthit the. (Dusre neta ka kaam.)
3. TOI — "Mla Bharath Shetty Launches High-tech Bus Stand At Surathkal" (Dec 2022)
   URL: https://timesofindia.indiatimes.com/city/mangaluru/mla-bharath-shetty-launches-high-tech-bus-stand-at-surathkal/articleshow/96696816.cms
   REJECT: pre-term (Dec 2022).
4. daijiworld.com — "Mangaluru: MCC zonal office inaugurated at Surathkal" (Aug 2022)
   URL: https://www.daijiworld.com/news/newsDisplay?newsID=991563
   REJECT: pre-term + udghatan district in-charge minister Sunil Kumar ne kiya. (Dusre neta ka kaam.)
5. The Hindu — "37 km Port connectivity road to be illuminated with street lights" (24 Apr 2025)
   URL: https://www.thehindu.com/news/cities/Mangalore/37-km-port-connectivity-road-to-be-illuminated-with-street-lights-dakshina-kannada-mp/article69486710.ece/amp/
   REJECT: MLA ne MP se Surathkal-MRPL Road ke liye atirikt RoB ki sirf maang ki — maang ka dastaveji nateeja nahi mila. (Sirf maang/prastav.)
6. daijiworld.com / mangalorean.com — HYDGEN 20 MW electrolyser manufacturing facility inauguration, Ganjimutt (Oct 2026)
   URL: https://www.daijiworld.com/news/newsDisplay?newsID=1331638
   REJECT: niji company ki facility ka udghatan; MP ke saath atithi bhoomika — bhautik sarkari sanrachna nahi. (Niji kharch/CSR jaisa karyakram.)
7. mangaloretoday.com — "George Fernandes Road inaugurated" (7 Jul 2024)
   URL: http://www.mangaloretoday.com/main/George-Fernandes-Road-inaugurated.html
   REJECT: non-whitelist + udghatan Mayor aur Mangaluru South MLA Vedavyas Kamath ne kiya; MLA Bharath Shetty sirf upasthit. (Dusre neta ke karyakram me maujoodgi.)
8. daijiworld.com — "Sitting MLA Dr Bharath Shetty releases 30-point manifesto" (6 May 2023)
   URL: https://www.daijiworld.com/news/newsDisplay?newsID=1077302
   REJECT: chunaav ghoshna-patra — sirf ghoshna, kaam nahi.
9. daijiworld.com / mangaloretoday.com — "Rs 2,250 crore grants secured in past 5 years" (25 Apr 2023)
   URL: https://www.daijiworld.com/index.php/news/newsDisplay?newsID=1073693
   REJECT: pre-term dawa (2018-2023 karyakaal ka) + kul rashi ka dawa, itemized kaam nahi. (Sirf MLA ke dawe par bina item ke entry nahi.)
10. mangaloretoday.com — "MLA Bharat Shetty demands 15 crore for pothole repairs" (15 Sep 2025)
    URL: https://www.mangaloretoday.com/main/Mangaluru-City-North-MLA-Bharat-Shetty-demands-15-crore-for-pothole-repairs-warns-of-protests-against-govt-inaction.html
    REJECT: non-whitelist + fund ki sirf maang, swikriti ya kaam nahi. (Sirf maang.)
11. mangaloretoday.com — "MLA alleges he was not invited to Minister Dinesh Gundu Rao's Pacchanadi STP inspection" (5 Mar 2026)
    URL: https://www.mangaloretoday.com/main/Mangaluru-MLA-Dr-Bharath-Shetty-alleges-he-was-not-invited-to-Minister-Dinesh-Gundu-Rao-s-Pacchanadi-STP-inspection.html
    REJECT: non-whitelist + district in-charge minister ke karyakram par shikayat — MLA ka apna kaam nahi. (Dusre neta ka karyakram.)
12. TOI — "MP lays foundation for devpt of Mulki, Surathkal railway stations" (Jan 2025)
    URL: https://timesofindia.indiatimes.com/city/mangaluru/mp-lays-foundation-for-devpt-of-mulki-surathkal-railway-stations/articleshow/117750784.cms
    REJECT: shilanyas MP Capt Brijesh Chowta ne kiya; MLA Surathkal karyakram me sirf upasthit the. (Dusre neta ka kaam — MP ke MPLADS/kendriya kaam.)
13. mangaloretoday.com — "PM Modi lays foundation stone for redevelopment Mangaluru Junction Railway station virtually" (6 Aug 2023)
    URL: https://www.mangaloretoday.com/mainnewsprint/PM-Modi-lays-foundation-stone-for-redevelopment-Mangaluru-Junction-Railway-station-virtually.html
    REJECT: non-whitelist + PM/MP ka kendriya karyakram; MLA sirf upasthit. (Dusre neta ke karyakram me maujoodgi.)
14. Deccan Herald / TOI — MRPL blast, Jokatte (Oct 2026): MLA ne spot ka daura kiya aur jaanch + muavze ki maang ki
    URL: https://www.deccanherald.com/india/karnataka/mangaluru/high-impact-mrpl-blast-damages-4000-roof-tiles-of-pezar-church-triggers-panic-across-mangaluru-4166008
    REJECT: sirf nirikshan/daura + muavza-jaanch ki maang — bhautik kaam ya sanction nahi. (Sirf nirikshan + sirf maang.)
15. Deccan Herald — "St Agnes College: Students and ABVP activists protest against Dasara exams" (12 Oct 2026)
    URL: https://www.deccanherald.com/india/karnataka/mangaluru/students-abvp-activists-protest-against-semester-exams-during-dasara-at-st-agnes-college-in-mangaluru-4179588
    REJECT: MLA ka bayan (exams na rakhe jayein) — vikas kaam nahi.
16. Deccan Herald — "Six arrested for stone pelting at mosque in Mangaluru's Katipalla" (Sep 2024): aaropi "Bharath Shetty (26), Ashraya Colony"
    URL: https://www.deccanherald.com/india/karnataka/six-arrested-for-stone-pelting-at-mosque-in-mangalurus-katipalla-3192643
    REJECT as negative: vyakti galat — 26 saal ka aaropi, MLA Dr Y. Bharath Shetty nahi. (Name collision.)
17. myneta.info Karnataka 2023 — Dr Y. Bharath Shetty: declared criminal cases 0, assets ~Rs 11.39 crore
    URL: https://myneta.info/karnataka2018/candidate.php?candidate_id=6620&scan=original
    REJECT as negative: halafname ke 0 pending mamle — halafname akele negative nahi, aur in-term FIR wali dono entries alag se darj hain.
18. mangaloretoday.com — "MLA Bharath Shetty inspects places ideal for Covid care centres" (6 May 2021)
    URL: https://www.mangaloretoday.com/main/MLA-Bharath-Shetty-inspects-places-ideal-for-Covid-care-centres.html
    REJECT: pre-term + sirf nirikshan.

RETRY-LEADS:
- The Hindu — "RoB concreting work on Surathkal-Bajpe road to start after festival, says MLA Bharath Shetty"
  URL: https://www.thehindu.com/news/cities/Mangalore/rob-concreting-work-on-surathkal-bajpe-road-to-start-after-festival-says-mla-bharath-shetty/article68605222.ece/amp/
  Tathya (search snippet se): MLA Y. Bharath Shetty ne MCC zonal office Surathkal me adhikariyon ki baithak ki adhyakshata ki; MCC Surathkal-Bajpe (MRPL) road ke railway overbridge ki satah ka concreting karega; Rs 78 lakh ka tender pehle hi award ho chuka tha, kaam Ganesh Chaturthi ke baad shuru hoga; RoB dono taraf ke approaches ka concreting pehle se chal raha tha; Surathkal-Chokkabettu Cross ka hissa bhi vikasit hoga.
  Anumanit tithi: lekh me "Mangalvaar" aur "Ganesh Chaturthi ke baad" ka ullekh — 2024 me 3 Sep Mangalvaar tha aur Ganesh Chaturthi 7 Sep ko thi, isliye anumanit tithi 2024-09-03.
  ROK: browser.open par HTTP 403 aaya (page seedha khula nahi) — isliye sourceUrl cite karke entry nahi banayi. Live-browser se page kholkar verify karo; verify hote hi category Sadak, badge news ki entry ban sakti hai (Rs 78 lakh tender + MLA ki adhyakshata wali bhoomika disclosed).
- Sambhavit future lead: Karnataka Vidhansabha karyavahi (aplegislature/kla portal — sarkari) me MLA ke sawalon par mantri-ashwasan mil sakte hain; live-browser ya direct fetch se verify karna hoga.
*/

// FRAGMENT: d-vedavyas-kamath (D. Vedavyas Kamath, Mangalore City South, BJP) — 2023-2028 works research
// Researched 2026-10-19. Positive works: 2 qualifying (Jeppu enclave sanyukt lokarpan — The Hindu, Feb 2025; Padil PHC navinikaran lokarpan MLA LAD fund se — TOI, Jan 2026).
// Negative: 1 in-term matter — St Gerosa School virodh par FIR (Feb 2024, PTI/EdexLive) + Special Court se agrim zamaanat (Feb 2024, The Hindu). Conviction NAHI hui hai.

karnatakaWorks['d-vedavyas-kamath'] = [
  {
    title: 'MLA D. Vedavyasa Kamath ne Jeppu me UPHC, pashu chikitsalaya, MCC staff ke 8 flat, bus bay aur walking path wale enclave ka sanyukt lokarpan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/newly-inaugurated-govt-health-facility-closed-amidst-political-one-upmanship/article69216080.ece',
    date: '2025-02-09',
    note: 'The Hindu ki report ke anusar Mayor Manoj Kumar, Mangaluru City South MLA D. Vedavyasa Kamath aur MP Capt. Brijesh Chowta ne 9 Feb 2025 (Ravivar) ko Jeppu ke enclave ka lokarpan kiya — isme naya Urban Primary Health Centre (UPHC), pashu chikitsalaya, MCC staff ke aath flat, bus bay aur walking path shamil hain. Kamath ne kaha ki ve Mayor ke aamantran par karyakram me shamil hue; suvidhayen MCC ki zameen par Mangaluru Smart City Limited ke Rs 7.85 crore se bani hain, jisme kendra sarkar ka bada hissa hai. Vivad: jilha prabhari mantri Dinesh Gundu Rao ko aamantrit na kiye jane par 13 Feb ko jilha swasthya adhikari ke aadesh se UPHC band kar diya gaya tha; koi sarkari adhikari lokarpan karyakram me maujood nahi tha.',
    period: '2023-2028'
  },
  {
    title: 'MLA D. Vedavyas Kamath ne Padil ke Primary Health Centre ke navinikaran ka lokarpan kiya — naya kamra aur ceiling MLA LAD fund se bane',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/health-workers-not-paid-for-3-4-months-mla/articleshow/126531621.cms',
    date: '2026-01-14',
    note: 'TOI ki report ke anusar MLA D. Vedavyas Kamath ne MCC seema me Padil ke navinikrit Primary Health Centre ka lokarpan kiya. Unhone bataya ki marijon ke liye behtar suvidhaon hetu naya kamra aur achhi tarah susajjit ceiling unke MLA local area development fund ki madad se banwaye gaye (raashi ghoshit nahi). Alape, Kannur, Maroli, Bajal, Shakthinagar aur Kulasekhar sahit 6 wardon ke lagbhag 30,000 se 40,000 logon ko labh milega; MRPL ne table-kursiyan uplabdh karayin. Date inference: TOI report ~Jan 2026 ki hai aur event ko ‘Wednesday’ bataya gaya hai; 14 Jan 2026 Budhwar ko padta hai, isliye 2026-01-14 rakha gaya hai.',
    period: '2023-2028'
  },
  {
    title: 'St Gerosa School virodh mamle me Mangaluru South police ne MLA Vedavyas Kamath sahit 5 logon ke khilaf FIR darj ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI (EdexLive)',
    sourceUrl: 'https://www.edexlive.com/news/2024/Feb/15/case-registered-against-two-bjp-mlas-three-others-in-st-gerosa-school-issue-40341.html',
    date: '2024-02-14',
    note: 'PTI ki report (EdexLive par, published 15 Feb 2024) ke anusar Mangaluru South police ne 14 Feb ko St Gerosa School ke bahar 12 Feb ke virodh ke sambandh me case darj kiya; FIR me Mangaluru City South MLA Vedavyas Kamath sahit 5 logon ko aaropi banaya gaya — anyon me Mangaluru City North MLA Y. Bharath Shetty, corporators Sandeep Garodi aur Bharat Kumar, aur VHP neta Sharan Pumpwell. Aarop: chhatron se ‘Jai Shri Ram’ ke naare lagwana aur Hindu-Christian samudayon ke beech dushmani bhadkana; dharaen 143, 153A, 295A, 505(2), 506 aur 149 IPC. School prabandhan ne police ko bataya ki Kamath ne bina spashtikaran liye school ke saamne virodh shuru kiya tha; school ke anusar shikshika ne aisa kuch nahi kaha tha jo viral audio me daava kiya gaya. Ab tak koi conviction nahi hua hai.',
    period: '2023-2028'
  },
];

// RETRY-LEAD (coordinator QA-DROP): Special Court dwara St Gerosa School case me paanchon aaropiyon ko agrim zamaanat (The Hindu 21 Feb 2024, article67871856.ece) — The Hindu ka page browser.open par HTTP 403 par nahi khula, tathya sirf indexed snippet se mile; niyam ke tahat khula-na-page source nahi ban sakta. FIR negative entry rakhi gayi hai; bail-relief live-browser se page khulne par restore karo. Isi case me Y. Bharath Shetty par bhi FIR hai (fragment ka6_worker_bharath-shetty-y.ts dekho).

// REJECT-LOG (d-vedavyas-kamath):
// 1. Kadri Padavu drainage bhoomi puja (Rs 25 lakh, PWD special grant, 22nd Kadri Padavu ward, May 2026) — srot: ibcworldnews.com. REJECT: outlet whitelist me NAHI (chhota portal).
// 2. Land Trades ‘Laxmi Govind’ aavasiya project lokarpan (Alvares Road, Sep 2026) — srot: mangalorean.com. REJECT: niji developer ka aavasiya project; mukhya-atithi bhoomika + outlet whitelist me nahi.
// 3. Land Trades ‘Adira’ 42nd project lokarpan (Urva, Nov 2023) — srot: mangalorean.com. REJECT: niji developer ka project; mukhya-atithi bhoomika + outlet whitelist me nahi.
// 4. George Fernandes Road naamkaran lokarpan (Circuit House–Bejai Circle, 6 Jul 2024) — srot: daijiworld.com. REJECT: sadak ka naamkaran-samaroh; koi bhautik nirmaan-bhoomika nahi + outlet whitelist me nahi.
// 5. Kadri ground–City Hospital concrete road bhoomi pujan (~Oct 2026) — srot: TOI (whitelisted). REJECT: TOI me sirf ek pankti ka zikr (‘MLA ne bhoomi pujan kiya’); fund/raashi aur swikriti dene wale nikay ka koi vivaran nahi — VALID rule me fund+bhoomika disclosed chahiye.
// 6. Congress ki shikayat (Barke PS, Aug 2024, MLC Ivan D’Souza ke khilaf bayan par FIR ki maang) — srot: The Hindu (whitelisted). REJECT: keval shikayat; FIR darj hone ki koi khabar nahi — ‘shikayat lekin FIR-aaropi column me naam nahi = NAHI’.
// 7. Brahma Kalashotsava (Sri Krishna Bhajana Mandir, Shakthi Nagar) maarpeet ka FIR + Karnataka HC dwara FIR radd (Jul 2026) — srot: deccanchronicle.com aur newskarnataka.com. REJECT: donon outlet whitelist me NAHI; negative rules me established-media whitelist mandatory hai.
// 8. St Agnes College exam-row me ABVP virodh ‘orchestrate’ karne ka Congress ka aarop (TOI, Oct 2026) — srot: TOI (whitelisted). REJECT: keval rajnaitik aarop; koi FIR/case/janch nahi.
// 9. St Agnes exam-row par nagrikon ki aalochana (daijiworld/newskarnataka, Oct 2026) — REJECT: keval aalochana + outlets whitelist me nahi.
// 10. High Court Circuit Bench (Mangaluru) ki maang — CM ko patra (Sep 2024), Vidhansabha me mudda — srot: newskarnataka.com. REJECT: sirf maang/prastav; koi dastaveji nateeja nahi + outlet whitelist me nahi.
// 11. White Paper ki maang (The Hindu, Apr 2026), solid-waste press conference (The Hindu, Nov 2025), monsoon-taiyari aarop (The Hindu, May 2026) — REJECT: vipakshi aarop/maang matra; koi lokarpan/shilanyas/swikriti nahi.
// 12. MGNVY-2 ke Rs 200 crore ke kaam ruke hone ka aarop (TOI, Sep 2026) — REJECT: rajya sarkar par aarop matra.
// 13. Bus terminal-cum-healthcare complex shilanyas (Mangaladevi/Jeppu, Sep 2022) — srot: The Hindu. REJECT: pre-term (karyakaal May 2023+); in-term vikas (Feb 2025 lokarpan) alag entry me darj hai.
// 14. Alake Market lokarpan (Oct 2020) aur University College classrooms shilanyas (Feb 2021) — REJECT: pre-term.
// 15. Praja Soudha lokarpan par CM se Smart City fund ka shrey-vivad (TOI, May 2025) — REJECT: kendriya pariyojna (Smart City) par shrey ka vivad; MLA ki vyaktigat dastaveji bhoomika nahi.
// 16. Kudla da Pili Parba sanskritik samaroh ki adhyakshata (The Hindu, Oct 2026) — REJECT: sanskritik samaroh; vikas-karya nahi.
// 17. Myneta 2023 halafnama ke mamle — REJECT: ‘halafname ke mamle akele NAHI’ rule; media-sourced FIR/janch ka dastavej nahi mila.

// QA: 21 candidates screened, 2 qualifying positive entries + 2 qualifying negative entries (1 FIR + 1 raahat).
// NOTE: St Gerosa bail wali The Hindu report ka poora page browser.open par HTTP 403 (access denied) aaya — retry nahi kiya gaya (recovery rule). Us article ke key facts (judge, bond, sharten, ‘Wednesday’, FIR date 14 Feb) The Hindu ke indexed snippet se verify kiye gaye hain; parent QA chahe to dobara verify kar le.

// u-t-khader (Mangalore, INC) — REJECT-LOG:
// 1. Residential Government PU College for minority girls, Mangaluru seat (The Hindu, 15 Mar 2025) — 2025-26 Budget me ullekh, "April 2026 se shuru hone ki sambhavna"; pre-event announcement, abhi shuru nahi hua; REJECT (sirf ghoshna).
// 2. "Smart surveillance network soon across Mangaluru constituency" (TOI, ~Jun 2026) — AI camera pariyojna ka pre-sanction announcement ("discussions held"); REJECT (pre-event); swikriti ka tathya The Hindu 1 Jun 2026 wale khule page se liya.
// 3. "New bridge across Nethravati will promote tourism: Khader" (TOI, Dec 2024, articleshow/116749033) — page 403 par khul nahi saka; retry ki anumati nahi thi isliye "khulkar padha" rule par source ke roop me istemal nahi; REJECT. Pulon ke tathya TOI ke Feb 2026 wale khule page se liye.
// 4. Mahakalipadpu twin railway underbridges (The Hindu, Jan 2026) — idea Khader ke district in-charge minister karyakaal (2018-19, pad, pre-term) ka, MLC Ivan D'Souza ke saath sanyukt; udghatan mantriyon dwara Speaker ke roop me; is karyakaal me vyaktigat MLA-star ki dastaveji bhoomika nahi; REJECT.
// 5. Adyar-Harekala vented dam-cum-bridge, Rs 174 crore (The Hindu profile, Jun 2026) — "pehle" sakar hua, pre-term; REJECT.
// 6. Kotepura-Bolar pul Rs 200 crore + Bolar-Sajipanadu-Thumbe Rs 60 crore (The Hindu profile, Jun 2026) — "fillip milne ki ummeed", drishti/bhavishya ki baat; REJECT (sirf ghoshna).
// 7. "Khader: Funds won't impede cabinet projects" (TOI, Sep 2026) — Wenlock hospital 200-bed expansion aadi teenon coastal jilon ke cabinet faisle; mantri pad ke karye; REJECT (vishesh niyam).
// 8. Rs 300 crore MESCOM underground cabling announcement (mangaloretoday/newskarnataka, Apr 2026) — non-whitelist portal; REJECT. Bijli tathya TOI (whitelist) ke khule page se.
// 9. Rs 186 crore Ullal underground power / Sajipa-Thumbe Rs 62 crore / Kannada Bhavan Thiruvail (daijiworld, coastaldigest, mangaloretoday versions) — non-whitelist; REJECT. Tathya The Hindu/TOI ke khule pages se. (Kannada Bhavan Thiruvail waise bhi seat ke bahar — Mangalore City North.)
// 10. Kotekar-Ullal bridge Rs 252 crore "tenders soon" (mangaloretoday, Feb 2026) — non-whitelist; REJECT; tathya TOI se.
// 11. Karnire me charitable trust ke 7 ghar lokarpan (mpositive.in/varthabharati) — niji trust ka kaam, Kaup seat (seat ke bahar); REJECT.
// 12. Deralakatte Nursing College building lokarpan (mpositive.in) — Ullal Charitable Trust (niji) ki building; REJECT.
// 13. Energia corporate service center (mpositive.in) — niji company ka karyalaya; REJECT.
// 14. Press Day celebrations udghatan (daijiworld) — samaroh; REJECT.
// 15. India Paddle Festival logo launch (karnatakafirst) — pre-event samaroh; REJECT.
// 16. Koragajja circle gherao FIR (May 2026; siasat/rediff/newskarnataka) — FIR Khader ke PSO ki shikayat par 10-11 vyaktiyon ke KHILAF darj; Khader complainant/pidit hain, aaropi NAHI; negative nahi.
// 17. AI camera kharid me aniyamitta ka aarop (organiser.org, Feb 2025) — non-whitelist; RTI-aadharit aarop, koi FIR/chargesheet/nyayik vikas whitelisted media me nahi; negative nahi.
// 18. Counterfeit drugs SIT / McGann hospital janch (newindianexpress/deccanchronicle/ibcworldnews) — Khader mantri ke roop me janch ke aadesh de rahe hain (pad ke karye), ve aaropi nahi; negative nahi.
// 19. "Khader lays foundation for road concretisation" (mangaloretoday) — non-whitelist; REJECT.
// 20. Rs 6 crore Calamity Relief Fund, Kotepura-Boliyar vikas (The Hindu 28 Nov 2024 page se) — rahat fund ka upyog; REJECT (daan/rahat).
// 21. Pavoor-Uliya hanging footbridge Rs 12 crore CM approval (mangaloretoday) — non-whitelist; REJECT.
// 22. 18 gram panchayats ko Rs 1.5 crore pratyek (mangaloretoday, Apr 2025) — non-whitelist; REJECT.
// 23. Thokkottu-Olapete footbridge prastav (TOI Dec 2024, 403 page) — prastav matra + page khula nahi; REJECT.
// 24. Balepuni district prison "funds assured" (gkseries) — ashwasan + non-whitelist; REJECT.
// 25. Shramika School Ullal / Sajipanadu police station / GTTC maang (bharathorizon) — non-whitelist; REJECT.
// 26. ACP office complex Rs 20 crore (mangaloretoday) — non-whitelist; REJECT.
// 27. Sea erosion Rs 200 crore earmark (mangaloretoday/gkseries) — non-whitelist; REJECT.
// 28. DC office Padil + indoor stadium Urwa (coastaldigest) — CM dwara udghatan (dusre neta), sthal bhi City South seat me; REJECT.
// 29. mpositive.in tag pages — aggregator-type; REJECT.
// KLLADS: kisi bhi srot ne neta-war kharch spasht roop se nahi kaha; sabhi entries me fund sarkari yojanaon/swikriti se hai, KLLADS "ghoshit nahi".
karnatakaWorks['u-t-khader'] = [
  {
    title: 'Mangalore ke MLA U. T. Khader ne Ullal me Rs 200 crore ki bijli infrastructure swikriti dilwai, jisme underground cables, Kotekar me naya MESCOM sub-station aur Thokkottu sub-station ka 32 kV se 132 kV tak upgrade shaamil hai',
    category: 'Bijli',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/karnataka-govt-sanctions-over-300-crore-for-creating-power-road-infrastructure-facilities-in-ullal-says-ut-khader/article68924015.ece',
    date: '2024-11-28',
    note: 'Page ke “Published” metadata me 2024-11-28T21:42:00+05:30 hai aur text me “on Thursday” — 28 Nov 2024 Thursday hai, isliye date pakki. Speaker aur Mangaluru MLA U. T. Khader ne bataya ki rajya sarkar ne Ullal me bijli aur sadak infrastructure banane-sudharne ke liye Rs 300 crore se adhik swikrit kiye hain, jisme se Rs 200 crore sirf bijli infrastructure ke liye hai. Mangaluru se Ullal tak alag power supply line bichhegi, Kotekar me naya MESCOM sub-station banega aur Thokkottu ka sub-station 32 kV se 132 kV ka hoga, jisse Ullal vasiyon ko bar-bar ki bijli katoti se rahat milegi. Khader ne kaha ki Speaker ka kartavya nibhate hue ve apne nirvachan kshetra ki vikas zarooraton ke liye anudan dilwane me safal rahe hain. Fund sarkari yojanaon se; KLLADS ghoshit nahi.',
    period: '2023-2028',
  },
  {
    title: 'Mangalore ke MLA U. T. Khader ne Ullal me sadak karyon ke liye Rs 100 crore aur road junction sudhar karyon ke liye Rs 25 crore ki swikriti dilwai',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/karnataka-govt-sanctions-over-300-crore-for-creating-power-road-infrastructure-facilities-in-ullal-says-ut-khader/article68924015.ece',
    date: '2024-11-28',
    note: 'Page ke “Published” metadata me 2024-11-28T21:42:00+05:30 hai aur text me “on Thursday” — 28 Nov 2024 Thursday hai, isliye date pakki. U. T. Khader ne bataya ki sadak karyon ke liye Rs 100 crore swikrit hue hain aur road junction sudhar karyon ke liye Rs 25 crore istemal honge. Ye ghoshna unhi Rs 300 crore se adhik ke package ka hissa hai jo rajya sarkar ne Ullal ke bijli aur sadak infrastructure ke liye swikrit kiya. Khader ne kaha ki Speaker ka kartavya nibhate hue ve apne nirvachan kshetra ki vikas zarooraton ke liye anudan dilwane me safal rahe hain. Fund sarkari yojanaon se; KLLADS ghoshit nahi.',
    period: '2023-2028',
  },
  {
    title: 'Mangalore (erstwhile Ullal) seat ke sarkari high schools, pre-university aur degree colleges ke basic infrastructure ko majboot karne ke liye Rs 5 crore swikrit hue',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/karnataka-govt-sanctions-over-300-crore-for-creating-power-road-infrastructure-facilities-in-ullal-says-ut-khader/article68924015.ece',
    date: '2024-11-28',
    note: 'Page ke “Published” metadata me 2024-11-28T21:42:00+05:30 hai aur text me “on Thursday” — 28 Nov 2024 Thursday hai, isliye date pakki. U. T. Khader ne bataya ki unke Mangaluru (erstwhile Ullal) nirvachan kshetra me sarkari high schools, pre-university aur degree colleges ke basic infrastructure ko majboot karne ke liye lagbhag Rs 5 crore kharch kiye jayenge. Ye ghoshna unhi press conference me hui jisme Ullal ke liye Rs 300 crore se adhik ke bijli-sadak package ki swikriti batayi gayi thi. Fund sarkari; KLLADS ghoshit nahi.',
    period: '2023-2028',
  },
  {
    title: 'Pajir me do acre zameen par naya fire station banega aur Konaje me naya circuit house banane ki sarkari swikriti mili',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/karnataka-govt-sanctions-over-300-crore-for-creating-power-road-infrastructure-facilities-in-ullal-says-ut-khader/article68924015.ece',
    date: '2024-11-28',
    note: 'Page ke “Published” metadata me 2024-11-28T21:42:00+05:30 hai aur text me “on Thursday” — 28 Nov 2024 Thursday hai, isliye date pakki. U. T. Khader ne bataya ki rajya sarkar ne Pajir me do acre zameen par naya fire station swikrit kiya hai aur Konaje me naya circuit house banane ki swikriti di hai. Ye ghoshna unhi press conference me hui jisme Ullal ke liye Rs 300 crore se adhik ke bijli-sadak package ki swikriti batayi gayi thi. Fund sarkari; KLLADS ghoshit nahi.',
    period: '2023-2028',
  },
  {
    title: 'Netravati kinare Kallapu-Sajipa riverfront road pariyojna ke liye sarkar ne aur Rs 40 crore swikrit kiye, kul swikriti Rs 160 crore lagat ka 25 pratishat hui',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/govt-grants-another-40-crore-for-ongoing-kallapu-sajipa-riverfront-road-project-says-ut-khader/article69497341.ece',
    date: '2025-04-28',
    note: 'Page par “Published - April 28, 2025 12:03 am IST” hai, isliye date pakki. Legislative Assembly Speaker aur Mangaluru MLA U. T. Khader ne Ravivar ko bataya ki rajya sarkar ne chal rahi Kallapu-Sajipa riverfront road pariyojna ke liye aur Rs 40 crore swikrit kiye hain. Isse pehle sarkar Rs 15 crore swikrit kar chuki thi; Rs 40 crore ki nayi swikriti ke saath sarkar ne Rs 160 crore ki kul pariyojna lagat ka 25 pratishat swikrit kar diya hai. Ye pariyojna Netravati nadi ke kinare charanon me chal rahi hai. Fund sarkari; KLLADS ghoshit nahi.',
    period: '2023-2028',
  },
  {
    title: 'Mangalore seat me monsoon se kharab hui sadakon ki marammat ke liye vibhinn sarkari yojanaon ke tahat Rs 90 crore swikrit hue',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/govt-sanctions-90-crore-for-repairings-roads-in-mangaluru-assembly-constituency-says-ut-khader/article70057045.ece/amp/',
    date: '2025-09-16',
    note: 'Page par “Published - September 16, 2025 08:26 pm IST” hai aur text me “on Tuesday” — 16 Sep 2025 Tuesday hai, isliye date pakki. Legislative Assembly Speaker aur Mangaluru ke MLA U. T. Khader ne bataya ki rajya sarkar ne unke nirvachan kshetra me sadakon ki marammat ke liye vibhinn yojanaon ke tahat Rs 90 crore swikrit kiye hain. Ye sadken monsoon ki bhari barish se kharab hui thin. Anudan se Thokkottu-Mudipu, Abbakka Circle-Kotepura, Abbakka Circle-Kodi aur Kotekar-Deralakatte sadakon ki marammat hogi; barish rukne ke baad kaam shuru hoga. Fund sarkari yojanaon se; KLLADS ghoshit nahi.',
    period: '2023-2028',
  },
  {
    title: 'Ullal shahar me Rs 186 crore ki underground power cable pariyojna KPTCL ke madhyam se lagegi, tender prakriya shuru; 33 kV sub-station ka 110 kV me Rs 96 crore ka upgrade bhi swikrit',
    category: 'Bijli',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/ullal-to-get-rs-186-crore-underground-power-cable-network/articleshow/128042213.cms',
    date: '2026-02-07',
    note: 'Page par prakashan tithi dikhai nahi di; reasoning: search metadata me lagbhag 254 din pehle (19 Oct 2026 se ginti par 7 Feb 2026) aur text me “told reporters on Saturday” — 7 Feb 2026 Saturday hai, isliye date 2026-02-07 anumaanit lekin majboot. Speaker U. T. Khader ke nirvachan kshetra ke Ullal shahar ko Rs 186 crore ki underground power cable pariyojna swikrit hui; Mangaluru seat ke MLA Khader ne Shanivar ko bataya ki tender prakriya ke baad kaam jald shuru hoga. Tender nikalne ki prakriya chal rahi hai; pariyojna Ullal shahar ke saundaryakaran ka hissa bhi hai; kaam poora hone par shahar me live overhead bijli cables nahi rahenge. Gharo-chhaton ke upar se guzarne wali high-tension/low-tension lines aur gharon ke andar lage bijli ke khambe nagrikon ke liye khatra hain; jagah ki kami se MESCOM khambe hata nahi pata — underground cabling se ye samasya hal hogi. Pariyojna Karnataka Power Transmission Corporation Limited (KPTCL) ke madhyam se hogi. Ullal me nirbadh bijli ke liye maujuda 33 kV sub-station ki kshamta Rs 96 crore ki lagat se 110 kV ki jayegi. Page me Mangaluru city ke liye Rs 60 crore ki alag pariyojna ka bhi ullekh hai jo inki seat ke bahar hai, isliye usse entry me shaamil nahi kiya. Fund sarkari; KLLADS ghoshit nahi.',
    period: '2023-2028',
  },
  {
    title: 'Netravati nadi par Kotepura (Ullal) se Bolar tak 1.5 km lambe pul ke liye Rs 252 crore ki pariyojna ke tender jald niklenge, Sajipa-Thumbe ke beech Rs 62 crore ka pul bhi banega',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/ullal-to-get-rs-186-crore-underground-power-cable-network/articleshow/128042213.cms',
    date: '2026-02-07',
    note: 'Page par prakashan tithi dikhai nahi di; reasoning: search metadata me lagbhag 254 din pehle (19 Oct 2026 se ginti par 7 Feb 2026) aur text me “told reporters on Saturday” — 7 Feb 2026 Saturday hai, isliye date 2026-02-07 anumaanit lekin majboot. Ullal ke Kotepura aur Mangaluru ke Bolar ke beech Netravati nadi par prastavit pul ke baare me Khader ne kaha ki Rs 252 crore ki pariyojna ke tender jald nikale jayenge. 1.5 km lamba pul Arab Sagar ke nazdeeki drishya dene ke liye design hoga aur paryatan vikas par vishesh dhyan rahega; pul ke neeche hotel, restaurant aur park jaisi suvidhaen vikasit hongi; saptahant me sham 4 se 8 baje tak pul par yatayat band rahega taaki paryatan gatividhiyan ho saken. Netravati nadi par Sajipa aur Thumbe ke beech Rs 62 crore ki lagat se ek aur pul banega. Fund sarkari; KLLADS ghoshit nahi.',
    period: '2023-2028',
  },
  {
    title: 'Mangalore seat me Abbakka Bhavana ke liye Rs 8 crore aur Beary Bhavana ke liye Rs 6 crore swikrit hue',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/ullal-to-get-rs-186-crore-underground-power-cable-network/articleshow/128042213.cms',
    date: '2026-02-07',
    note: 'Page par prakashan tithi dikhai nahi di; reasoning: search metadata me lagbhag 254 din pehle (19 Oct 2026 se ginti par 7 Feb 2026) aur text me “told reporters on Saturday” — 7 Feb 2026 Saturday hai, isliye date 2026-02-07 anumaanit lekin majboot. Khader ne bataya ki Mangaluru nirvachan kshetra me Abbakka Bhavana ke liye Rs 8 crore aur Beary Bhavana ke liye Rs 6 crore swikrit hue hain. Page me ye bhi hai ki Kannada aur sanskriti mantri Shivaraj S. Tangadagi 15 Feb ko asthai roop se inka shilanyas karenge — ye karyakram dusre mantri ka aur bhavishya ka hai, isliye entry swikriti par hai, shilanyas par nahi. Fund sarkari; KLLADS ghoshit nahi.',
    period: '2023-2028',
  },
  {
    title: 'Mangalore (erstwhile Ullal) seat me traffic enforcement aur crime investigation ke liye AI-based cameras lagane par Rs 20 crore ki sarkari swikriti mili',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/government-sanctions-20-crore-for-installation-of-ai-cameras-in-ullal/article71049327.ece',
    date: '2026-06-01',
    note: 'Page par “Published - June 01, 2026 08:56 pm IST” hai aur text me “in Mangaluru on Monday” — 1 Jun 2026 Monday hai, isliye date pakki. Rajya sarkar ne traffic enforcement aur crime investigation ke liye Mangaluru (erstwhile Ullal) nirvachan kshetra me AI-based cameras lagane ke liye Rs 20 crore swikrit kiye; is kshetra ka pratinidhitva karne wale Assembly Speaker U. T. Khader ne Somvar ko Mangaluru me ye ghoshna ki. Cameras nirvachan kshetra ke pramukh sthanon par aur Kerala se Mangaluru shahar ke pravesh binduon par lagenge; andaruni ilakon me CCTV cameras lagenge. Inka upyog mukhyatah traffic enforcement ke liye hoga. Mangaluru Smart City Limited ke lagaye AI cameras me abhi Ullal, Deralakatte aur aaspaas ke kshetra cover nahi hote; naye cameras crime investigation me bhi kaam aayenge. Khader ne bataya ki Mangaluru City police ke paramarsh se prastav sarkar ko bheja gaya tha jise kuch din pehle manzoori mili. Pariyojna ke tahat cameras ke feed dekhne aur us par karyavahi ke liye alag command centre banane ka prastav hai; Karnataka State Police Housing Corporation pariyojna ka karyanvayan karegi. Kshetra ke niji shikshan sansthan cameras ke rakh-rakhav ka zimma lenge aur command centre ke karmiyon ka vetan bhi denge. Fund sarkari; KLLADS ghoshit nahi.',
    period: '2023-2028',
  },
];

// ============================================================================
// KA6 WORKER — u-rajesh-naik (Bantval, BJP)
// Karyakaal: May 2023+. Pehchan: Rajesh Naik U, S/o Late Ramesh Naik.
// Halafnama: koi aapradhik mamla nahi.
// ============================================================================

// REJECT-LOG (u-rajesh-naik):
// POSITIVE LEADS (sab whitelist outlet par khole-padhne gaye):
// - The Hindu 19 Mar 2025 (Paschima Vahini): Vidhansabha budget charcha me MLA ne Paschima Vahini scheme (vented dams) ke liye Rs 500 crore ki maang ki; saath hi Daddalakadu sarkari school ke liye Sri Durga Charitable Trust school-adoption scheme ke renewal ki maang. Dono sirf maang — koi dastaveji nateeja/ashwasan nahi. REJECT (sirf maang).
// - The Hindu 9 Sep 2025: Dakshina Kannada ke BJP MLAs ne raat me Yakshagana/natak performances ki anumati ki maang — MLA janagraha convention me bole. Bhashan/maang, kaam nahi. REJECT.
// - The Hindu 9 Jul 2025: sand/laterite protest (Vedavyasa Kamath lead) — MLA ne Mines dept ke khali pad par sawal uthaya. Virodh/bayan, kaam nahi. REJECT.
// - The Hindu ~Sep 2024: Bantwal TMC councillor/ex-president par inflammatory post ka case — MLA ne SP ko karwai ke liye kaha. MLA aaropi nahi; kaam bhi nahi. REJECT.
// - The Hindu 14 Jan 2024: MLA hit-and-run me ghayal — ve khud shikar the, case driver Mohammed Sufail par. Negative nahi. REJECT.
// - The Hindu Nov 2025: laterite permits KDP meeting — MLA ne keemat par tippani ki. Charcha, kaam nahi. REJECT.
// - Deccan Herald Oct 2026: Mangaluru High Court circuit bench — MLAs Rajesh Naik aur Vedavyasa Kamath ne concerted effort ka aagrah kiya. Sirf maang. REJECT.
// - NIE 19 Dec 2025: BPL card income limit — MLA ne Vidhansabha me prashn uthaya. Question Hour, kaam nahi. REJECT.
// - The Hindu 10 Aug 2023: BJP MLAs ka dharna-chetawani (protocol breach); Irvattur GP me 'Swachha Sankeerna' unit ka MLA dwara udghatan PDO ne cancel kiya — karyakram hua hi nahi. REJECT.
// - TOI Feb 2025 (Oddoor Energy bio-CNG plant): MLA ke NIJI farm Oddoor Farms par unka apna private CNG plant — vyapar, sarkari kaam nahi. REJECT (niji kharch/vyapar).
// - PTI/Business Standard Dec 2018: Indira Canteen udghatan me MLA se durvyavahar — pre-term (2018) + ve shikayat-karta the. REJECT.
// - The Hindu 5 Jun 2021: Vamadapadavu CHC oxygen plant — pre-term + udghatan mantri ne kiya, MLA sirf maujood. REJECT.
// - Daijiworld (non-whitelist) in-term leads: Sep 2025 Jakribettu Namma Clinic lokarpan (15th Finance Commission/PMHIM sanction); Feb 2026 Siddakatte fish market + Sangabettu crematorium statues lokarpan; May 2026 rail projects memorandum V Somanna ko (maang). Source whitelist bahar — entry nahi, RETRY-LEAD agar whitelisted outlet coverage mile.
//
// NEGATIVE-QA (galat pehchan wale 'Rajesh Naik' alag kiye gaye):
// - The Hindu 13 Aug 2025: Lokayukta ne Bantwal Deputy Tahsildar 'Rajesh Naika' ko Rs 20,000 rishwat me giraftaar kiya — ye TALUK ADHIKARI hain, MLA U. Rajesh Naik NAHI. Pehchan-galat — REJECT.
// - TOI 2025: Surathkal police ne 'Rajesh Naik alias Raj/Raju Pamadi' (21 cases, Manchi-Udupi niwasi) ko giraftaar kiya — dusra vyakti. REJECT.
// - NIE Nov 2020: Congress neta Ramanath Rai ne MLA ki PATNI Usha R Naik par laterite permit durupyog ka aarop — pre-term (2020) + parivar ka mamla (MLA aaropi nahi). REJECT.
// - In-term (May 2023+) me MLA khud par koi FIR/chargesheet/giraftaari/nyayik aadesh established media me nahi mila; halafnama me zero criminal cases.
//
// RETRY-LEADS:
// - TOI ~Aug 2026 'Suspension bridge safety fix hangs in limbo': Badagabellur-Muthuru suspension bridge ki marammat ka MLA ne ashwasan diya, kaha funds MLA area development fund (KLLADS) se aayenge. Page browser.open par 403 — khul nahi saka, isliye entry nahi. Srot spasht KLLADS kahe to swikriti-entry possible.
// - TOI ~Aug 2024 'Ban on Heavy Vehicles: MLA Introduces Free Mini Bus Service on Addoor Bridge': page 403 — khul nahi saka. Srot me fund-srot saaf hua to hi entry (niji kharch hua to reject).
karnatakaWorks['u-rajesh-naik'] = [];

// ashok-kumar-rai (Puttur, INC) — REJECT-LOG: (1) TOI "Puttur MLA Announces Major Drinking Water Project" (Oct 2024, articleshow/114662153.cms) — page 403 par khul nahi saka; "khulkar padha" rule par fail, retry lead (waise bhi wahi event The Hindu ke Oct 2024 page se cover ho gaya). (2) ibcworldnews.com — Kaniyar (Keyyur gram panchayat) me Rs 65 lakh bridge ki foundation stone (8 May 2026, byline "City Hilights") — non-whitelist portal, source REJECT. (3) nammakudlaenglish.com — medical college Dec 2027 se classes story — non-whitelist, REJECT. (4) mirrornow.in — Rs 50 lakh road development announcement (5 Oct 2026) — non-whitelist + sirf ghoshna, REJECT. (5) newsable.asianetnews.com — "Ashok Jana-Mana 2025" kapda vitran (1 lakh log) — non-whitelist + daan/charity (MLA ke trust ka karyakram), REJECT. (6) TOI (Dec 2024) — 30-bed Ayush Hospital Kabaka ki "request" — sirf maang, nateeja nahi, REJECT. (7) The Hindu (Oct 2024) — 20 acre par synthetic-track stadium "he has plans" — sirf yojana, REJECT. (8) The Hindu (Oct 2024) — Rs 570 crore NABARD tourism DPR submitted — prastav, REJECT. (9) TOI (Jan 2026) — 400-bed hospital ke liye "Rs 450 crore expected to be sanctioned", DPR pending — sirf ghoshna, REJECT. (10) TOI (Jan 2026) — Rs 8 crore Hindu temples + Rs 9 crore minority communities earmarks — itemized nahi, vague dawa, REJECT. (11) Deccan Herald (Sep 2026) — KRIDL engineers ke khilaf CM ko bhrashtachar ka patra — aarop-patra hai, vikas kaam nahi, koi nateeja nahi, REJECT. (12) Deccan Herald/newskarnataka/starofmysore — Mysuru Dasara Kambala (Oct 2026) — sanskritik karyakram, seat ke bahar (Mysuru), sarkari sanrachna nahi; AWBI-niyam ullanghan wala DH piece sirf activist ki shikayat hai, MLA ke khilaf FIR nahi — negative bhi nahi, REJECT. (13) TOI bhoomi-puja page — "veterinary college in Koila will be inaugurated in a month or two" — pre-event, REJECT. (14) The Hindu (Oct 2024) — Jana Mana me 75,000 logon ko kapda vitran — daan, REJECT. (15) Mysuru Kambala udghatan me MLA sirf deep prajwalan karne wale atithi the — dusre aayojan me maujoodgi, REJECT. KLLADS: neta-war kharch ka public record kisi whitelist source me nahi mila — fund dawa nahi joda. Cross-check: scratch me 'ashok-kumar-rai' ki koi works entry pehle se nahi (sirf ka_mla_g7.ts me profile hai) — koi antar nahi.
karnatakaWorks['ashok-kumar-rai'] = [
  {
    title: 'MLA ka dawa — Puttur me Rs 1,010 crore ki peyjal pariyojna swikrit hui hai, jisme se Rs 400 crore jari ho chuke hain aur kaam chal raha hai; Sullia ke 28 gaon bhi isse paani payenge',
    category: 'Paani',
    badge: 'dawa',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/comprehensive-development-of-puttur-constituency-by-strengthening-infrastructure-is-priority-says-ashok-kumar-rai/article68803192.ece/amp/',
    date: '2024-10-26',
    note: 'The Hindu (published 27 Oct 2024) ke mutabik MLA Ashok Kumar Rai ne 26 Oct 2024 (Saturday) ko Mangaluru me presspersons se kaha ki sarkar ne Puttur ke liye Rs 1,010 crore ki drinking water project swikrit ki hai, jisme se Rs 400 crore pehle hi swikrit ho chuke hain aur kaam chal raha hai; ye pariyojna Sullia constituency ke 28 gaonon ko bhi peyjal degi. Poora lekh MLA ke press-conference bayanon par aadharit hai, isliye badge dawa rakha gaya hai. Date: page par "Saturday, October 26" saaf likha hai.',
    period: '2023-2028',
  },
  {
    title: 'MLA ka dawa — Puttur me Kabaka-Vitla four-lane concrete sadak ke liye Rs 10 crore, Bettampady-Panaje PWD sadak ke liye Rs 6 crore aur Puttur-Uppinangady four-lane concrete sadak ke liye Rs 12 crore swikrit hue hain',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/puttur-mla-boasts-of-getting-rs-2k-cr-for-his-constituency/articleshow/126488490.cms',
    date: '2026-01-12',
    note: 'TOI ke mutabik MLA Ashok Kumar Rai ne press conference me kaha: "The govt sanctioned Rs 10 crore for a 4-lane concrete road from Kabaka to Vitla, Rs 6 crore for upgrading the PWD road from Bettampady to Panaje, and Rs 12 crore to convert the Puttur-Uppinangady road into a 4-lane concrete road." Unhone ye bhi dawa kiya ki karyabhar sambhalne ke baad se constituency ke liye kul Rs 2,259 crore swikrit hue hain (2023-24 me Rs 1,479 crore, 2024-25 me Rs 529 crore, 2025-26 me Rs 251 crore). Poora lekh MLA ke press-conference bayanon par aadharit hai, isliye badge dawa rakha gaya hai. Date: search result me "Last Updated: 280 days ago" (19 Oct 2026 se) aur page par "press conference on Monday" — 12 Jan 2026 Monday tha, isliye date pakki.',
    period: '2023-2028',
  },
  {
    title: 'MLA ka dawa — Puttur me 629 pariyojnaon ka Rs 50 crore ka tender poora ho gaya hai, paanch thekedaron ko work order jari hue hain aur 13% fund release ho chuka hai',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/puttur-mla-boasts-of-getting-rs-2k-cr-for-his-constituency/articleshow/126488490.cms',
    date: '2026-01-12',
    note: 'TOI ke mutabik MLA Ashok Kumar Rai ne press conference me kaha ki is saal 629 pariyojnaon ka Rs 50 crore ka tender process poora ho gaya hai, paanch thekedaron ko work order jari kiye gaye hain aur 13% fund pehle hi release ho chuka hai. Ye upar wali entry wale hi press conference ka hissa hai, isliye badge dawa rakha gaya hai. Date: 12 Jan 2026 (Monday) — upar wali entry me reasoning darj hai.',
    period: '2023-2028',
  },
  {
    title: 'Puttur me sarkari medical college ki neev ke taur par 300-bed aspatal ke nirman ko Rajya Finance Department ne 27 November ko sahmati di, jiska aadesh MLA ne press conference me patrakaron ko dikhaya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/finance-department-approves-300-bed-govt-hospital-as-a-prelude-to-open-government-medical-college-in-puttur-says-mla-ashok-kumar-rai/article70345039.ece',
    date: '2025-12-01',
    note: 'The Hindu (published 1 Dec 2025, 07:40 pm IST) ke mutabik State Finance Department ne Department of Medical Education ke zariye Puttur me 300-bed aspatal banane ki sahmati di, taaki 2025-26 budget me ghoshit sarkari medical college ka rasta saaf ho. MLA Ashok Kumar Rai ne Puttur me press conference me bataya ki sahmati 27 November ko mili thi aur unhone Finance Department ka aadesh patrakaron ko dikhaya. College Bannur me 40 acre zameen par prastavit hai; MLA ke anuman me medical college par lagbhag Rs 1,000 crore kharch aa sakta hai. DPR dedh mahine me aur aspatal bhawan ke liye tender uske do mahine me aane the; CM Siddaramaiah baad me shilanyas karenge.',
    period: '2023-2028',
  },
  {
    title: 'Puttur ke Sediyapu (Bannur) me Rs 180 crore ki lagat se 300-bed aspatal ke nirman ka sarkari aadesh jari hua; medical education department ne design aur structural plans ko antim anumati de di aur tender prakriya bhi poori ho gayi',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/govt-hosp-dream-in-puttur-inches-closer-to-reality/articleshow/129661955.cms',
    date: '2026-03-17',
    note: 'TOI ke mutabik sarkar ne 300-bed aspatal ke nirman ka official order jari kiya; aspatal Puttur taluk ke Bannur gaon ke Sediyapu me Rs 180 crore ke swikrit budget se banega. MLA Ashok Kumar Rai ne bataya ki fund ke saath-saath medical education department ne aspatal bhawan ke design aur structural plans ko final approval de diya hai; project ke liye 40 acre zameen aarakshit hai aur tender process poori ho chuki hai. Pehle maujooda aspatal parisar me medical college sambhav nahi paya gaya tha, isliye 4 Dec 2025 ke sarkari aadesh se project health department se medical education department ko transfer hua tha. Asparal banne ke baad medical college bhawan ka kaam shuru hoga. Date inferred: page par byline date nahi hai; search result me "Last Updated: 215 days ago" (19 Oct 2026 se ≈ 19 Mar 2026) aur page par "govt on Tuesday issued an official order" — 17 Mar 2026 Tuesday tha, isliye order ki date 2026-03-17 rakhi gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Puttur ke MLA Ashok Kumar Rai ne prastavit sarkari medical college ke hisse ke taur par Rs 180 crore ki lagat se banne wale 300-bed aspatal ki bhoomi puja ki',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/mla-holds-bhoomi-pooja-for-300-bed-hospital-in-puttur/articleshow/134490190.cms',
    date: '2026-09-25',
    note: 'TOI ke mutabik MLA Ashok Kumar Rai ne Puttur me banne wale Government Medical College ke hisse ke taur par Rs 180 crore ki anumaanit lagat se banne wale 300-bed aspatal ki bhoomi puja (groundbreaking ceremony) ki. MLA ne kaha ki CM D.K. Shivakumar medical college ka shilanyas karenge; unke dawe ke mutabik poorv CM Siddaramaiah ne prastav ko manzoori di thi aur Shivakumar ne project ke liye Rs 550 crore swikrit kiye hain. MLA ne ye bhi kaha ki Puttur me medical college 40 saal purani maang hai aur unhone Vidhansabha satron me is par 14 baar bola hai. Date: page par "on Friday" likha hai aur search result me "Last Updated: 24 days ago" (19 Oct 2026 se) — 25 Sep 2026 Friday tha, isliye date pakki.',
    period: '2023-2028',
    stage: 'shilanyas',
  },
  {
    title: 'Puttur taluk ke Bajathur ke Bidiradi me 6.2 acre par Dr BR Ambedkar Residential School complex ke liye 821 pedon ki katayi ki sarkari anumati mili, jisse school ke nirman ka rasta saaf hua',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/rto-track-ambedkar-school-in-puttur-taluk-get-govt-nod-mla-ashok-kumar-rai/articleshow/130996954.cms',
    date: '2026-05-10',
    note: 'TOI ke mutabik rajya sarkar ne Puttur taluk ke Mundoor aur Bajathur me kul 1,088 pedon ki katayi ki anumati di; sarkar ne Karnataka Preservation of Trees Act ki dhara 8(3) ke tahat ped hatane ka nirdesh diya. Isme Bajathur gaon ke Bidiradi me 6.2 acre zameen se 821 ped hatane ki anumati shaamil hai, jahan samaj kalyan vibhag ke tahat anusuchit jaati, anusuchit janjaati aur samajik-aarthik roop se pichhde vidyarthiyon ke liye Dr BR Ambedkar Residential School complex prastavit hai. MLA Ashok Kumar Rai ne press release me kaha ki anumati lambit hone se dono projects atke the aur van mantri ko anurodh bheje gaye the; unke shabd: "With the govt now issuing orders for tree felling, the hurdles for both projects have been cleared and the development works are expected to commence shortly" — matlab report ke samay nirman shuru nahi hua tha, entry sirf sarkari anumati (GO) tak seemit hai. Date inferred: page par byline date nahi; search result me "Last Updated: 162 days ago" (19 Oct 2026 se ≈ 10 May 2026).',
    period: '2023-2028',
  },
  {
    title: 'Puttur taluk ke Mundoor me 4 acre sarkari zameen par RTO driving track aur driver training centre ke liye 267 pedon ki katayi ki sarkari anumati mili, jisse project ka rasta saaf hua',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/rto-track-ambedkar-school-in-puttur-taluk-get-govt-nod-mla-ashok-kumar-rai/articleshow/130996954.cms',
    date: '2026-05-10',
    note: 'TOI ke mutabik Mundoor gaon me Mangaluru Social Forestry Division ke tahat 4 acre sarkari zameen par lage 267 ped RTO driving track aur driver training centre ke liye hataye jayenge; sarkar ne Karnataka Preservation of Trees Act ki dhara 8(3) ke tahat kaarvai ka nirdesh diya hai. Ye upar wali school-entry wale hi sarkari aadesh ka hissa hai — dono projects ki rukavat ek saath door hui. Nirman "expected to commence shortly" tha, isliye entry sirf sarkari anumati (GO) tak seemit hai. Date inferred: upar wali entry me reasoning darj hai (10 May 2026).',
    period: '2023-2028',
  },
  {
    title: 'Kepu (Bantwal taluk) me ‘koli anka’ (murgon ki ladai) ke aarop me Puttur ke MLA Ashok Kumar Rai samet 17 logon par Vitla police ne case darj kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/ashok-kumar-rai-sanjeeva-matandoor-booked-cockfighting-karnataka-police-10433026/',
    date: '2025-12-20',
    note: 'Indian Express (Bengaluru, 22 Dec 2025) ke mutabik Dakshina Kannada police ne Kepu gaon me murgon ki ladai ke aarop me Puttur Congress MLA Ashok Kumar Rai samet 43 logon ko do alag mamlo me book kiya. Pehle mamle me Vitla police ne Saturday ko Rai aur 16 any logon ko book kiya — tip-off par chhape me Muralidhara Rai ke dhan ke khet me bheed aur ladai ke liye laye gaye murge mile; MLA maujood the aur unhone adhikariyon ko giraftar karne ya event rokne ki chunauti di (aarop); police ne 22 murge aur ladai me istemal hone wale tez dhaar wale hathiyar zabt kiye. Dono mamle BNS aur Prevention of Cruelty to Animals Act ke tahat darj hue. MLA ka jawab: ‘koli anka’ sthaniya Ullalthi shrine ki 800 saal purani parampara ka hissa hai, sthaniya logon ki mannat ke taur par hota hai, isme koi satta nahi lagta; unhone kaha ki event se pehle sthaniya adhikariyon se anumati maangi gayi thi aur "No law bans koli anka". Stage: sirf case/FIR darj — chargesheet ya adalati faisle ki reporting nahi mili. Date: IE ne booking ko "Saturday" bataya aur The Hindu ne 20 Dec 2025 (11:44 pm) ko case darj hone ki khabar di; 20 Dec 2025 Saturday tha, isliye date 2025-12-20 rakhi gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Bantwal Court ke niyantran wali sampatti par do purani imaraton ko earthmover se dhahane ke aarop me Puttur ke MLA Ashok Kumar Rai aur Mahalingeshwara mandir ke prabandh trustee par Puttur Town Police ne case darj kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/cities/Mangalore/puttur-mla-mahalingeshwara-temple-trustee-booked/article70881543.ece',
    date: '2026-04-17',
    note: 'The Hindu (published 19 Apr 2026) ke mutabik Puttur Town Police ne Puttur MLA Ashok Kumar Rai, Puttur Mahalingeshwara mandir ke managing trustee Ishwarbhat Panjigudde aur any logon ke khilaf Bantwal Court ke niyantran wali sampatti me ghuspaith (trespass) ke aarop me case darj kiya. Shikayat court-niyukt receiver Aravind Rao Kedige ne ki thi — Senior Civil Judge aur JMFC Court, Bantwal ne 26 Feb 2019 ke aadesh se unhe mandir ke saamne Kedige pariwar ki 9.79 acre zameen ka receiver niyukt kiya tha (2018 ki Final Decree yachika se juda partition suit). Shikayat me aarop hai ki MLA, Panjigudde aur kuch any logon ne 14 Apr 2026 ko us zameen par do purani imaratein earthmover se dhaha di; shikayatkarta ke mutabik 100 saal purani imaratein theen aur Rs 2 crore se adhik ka nuksan hua. Legal opinion ke aadhar par police ne 17 April ko BNS ki dhara 329(3) aur 324(2) ke tahat shikayat darj ki. MLA ka jawab: Ullalti ‘bhoota’ har saal usi sankeern raste se Mahalingeshwara devta se milne aate hain, 40,000 se adhik shraddhalu jama hote hain; bhagdad se bachne ke liye rasta chauda karne ko court ke aadesh ke anusaar earthmover se imaratein dhahayi gayin; "The action was for the benefit of the devotees. I am ready to face any number of complaints for this." Stage: sirf case darj — chargesheet ya adalati faisle ki reporting nahi mili. Date: page par "registered the complaint on April 17" aur "Published - April 19, 2026" — isliye date 2026-04-17 rakhi gayi hai.',
    period: '2023-2028',
  },
];

// bhageerathi-murulya (Sullia, SC, BJP) — REJECT-LOG: whitelist (The Hindu, Indian Express, HT, NDTV, India Today, TOI, Deccan Herald, PTI) me May 2023–Oct 2026 tak Bhageerathi Murulya ke naam se Sullia me 2 dastaveji kaam mile — dono media badge ke saath rakhe (credit capped/disclosure ke saath). (1) The Hindu, 15 Apr 2025: MP Capt Brijesh Chowta ne Sullia taluk me Rs 6 crore ki 2 road projects (Nintikallu-Bellare 6.2 km Rs 3.72cr; Sullia-Paichar-Bellare 3.8 km Rs 2.28cr, Central Road Infrastructure Fund) ka shilanyas kiya; MLA sirf maujood thi — dusre neta (MP) ka kaam, REJECT. (2) The Hindu, 16 Oct 2025: Kaniyoor station ko Yeladka sthanantarit kar full terminal banane ka sujhav — sirf maang/prastav, REJECT. (3) TOI + The Hindu, Nov 2025: rajya me kanoon-vyavastha dhwast hone ke aarop — raajneetik bayan, vikas kaam nahi, REJECT. (4) asianetnews (newsable), Jun 2026: Kayarthodi Sri Mahavishnu Temple road ka MLA dwara lokarpan; Rs 24 lakh lagat (Rs 20 lakh grant unki sifarish par CM se) — kaam in-term aur dastaveji tha lekin outlet non-whitelist, REJECT. (5) daijiworld, Jun 2026: Sullia shahar me bijli ka khamba sadak ke beech me — MLA ne sthal ka nirikshan kiya — sirf nirikshan + non-whitelist, REJECT. (6) newskarnataka/mangaloretoday, Aug 2026: hathi-sankat par sthayi upay (solar fencing) ki maang — sirf maang + non-whitelist, REJECT. (7) The Hindu, 19 Jun 2025: ‘state ne 2 saal me naye projects ke liye koi fund nahi diya’ — ye bayan Mangaluru City South MLA Vedavyasa Kamath ka tha, Murulya ka nahi — dusre MLA, REJECT. KLLADS (Rs 2cr/seat/varsh) ka vyaktigat istemal kisi whitelist source me sourced nahi mila — fund dawa nahi joda. Negatives: (a) The Hindu, 8 Jan 2026: Facebook par apmanjanak ‘Shraddhanjali’ post par Bantwal Rural police me shikayat darj (BNS Sec 352) — MLA khud peedit (victim) thi, aaropi nahi — negative NAHI. (b) myneta.info 2023 halafnama: 0 criminal cases — negative-rule fail, koi negative entry nahi. Foundation cross-check: karnataka.ts me ‘bhageerathi-murulya’ ki works khaali ([]) — koi antar nahi.
karnatakaWorks['bhageerathi-murulya'] = [
  {
    title: 'Sullia taluk ke Thodikana gaon ke sarkari Higher Primary School me local MLA funds se bana auditorium Amrit Mahotsav ke dauran hue vikas karyon me shamil hai.',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/govt-school-in-sullia-to-celebrate-amrit-mahotsav-on-jan-22/articleshow/126531565.cms',
    date: '2026-01-22',
    note: 'TOI ne likha ki Sullia taluk ke Thodikana ka Govt Higher Primary School apni 75vi varshgaanth par 22 Jan ko Amrit Mahotsav manayega; is silsile me hue vikas karyon me ‘local MLA funds’ se bana auditorium shamil hai. Saath hi gram panchayat funds se interlock, ek abhibhavak ke saujanya se football maidan, puratan chhatron ka band set aur nariyal-chadhne wali machine ka hastantaran bhi hua. Lekh me MLA ka naam nahi diya gaya hai — lekin May 2023 se Sullia ke MLA Bhagirathi Murulya hi hain, isliye ‘local MLA funds’ unhi se joda gaya hai (credit capped). Fund ki rashi lekh me ghoshit nahi. Tithi anumanit hai: lekh Nov 2025 me update hua tha aur 22 Jan ka samaroh aane wala bataya gaya tha, isi se 2026-01-22 li gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Sullia depot ke liye 10 nayi KSRTC buses aur drivers-conductors ki maang par parivahan mantri ne 6 mahine me buses dene ka ashwasan diya; CM ko 35 maangon ka gyapan bhi saunpa gaya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mangaluru/sullia-mla-urges-minister-to-sanction-ksrtc-buses/articleshow/133766698.cms',
    date: '2026-08-24',
    note: 'TOI ne likha ki BJP MLA Bhagirathi Murulya ne parivahan mantri Byrathi Suresh se milkar Sullia depot ke liye 10 nayi buses aur drivers-conductors ki maang rakhi; mantri ne ashwasan diya ki sarkar ko 6 mahine me nayi buses milengi, uske baad Sullia ko buses aur staff diye jayenge. MLA ne CM D.K. Shivakumar ko 18 Sep ko Mangaluru me hone wali cabinet meeting se pehle Sullia kshetra ki 35 pramukh maangon ka gyapan bhi saunpa — jinme 1837 ke Amara Sullia swatantrata sangharsh ki yaad me Kedambadi Ramegowda Theme Park, 33 kV lines ko underground cable me badalna, aur Tulu ko rajya ki doosri aadhikarik bhasha ghoshit karna shamil hai. Disclosure: buses abhi mili nahi hain, sirf mantri ka ashwasan hai — credit capped. Ye Vidhansabha floor ki maang nahi, mantri se mulakat aur CM ko gyapan tha. Tithi anumanit hai: lekh 18 Sep 2026 ki cabinet meeting se pehle chhapa aur TOI metadata ke mutabiq lagbhag 55 din pehle update hua tha, isi se tithi li gayi hai.',
    period: '2023-2028',
  },
];

// --- Davanagere ---

// QA-DROP (coordinator, b-devendrappa): worker ne Election Petition No. 19/2023 par 2 'negative' entries banayi theen
// (HC ne dismissal-arzi kharij ki — petition maintainable; SC ne karyavahi par stay diya). Chunav-yachika AKELE
// negative NAHI hoti (standing rule) — chaahe HC ka interim aadesh ho, stage-accurate relief bhi yahin banta hai
// jab poori yachika khaarij/niptaan ho, interim par nahi. Fragment ka6_worker_b-devendrappa.ts scratch me preserved hai.
// WATCH: SC stay ke baad koi final HC order aaye to us par entry possible. REJECT-LOG fragment file me.
// FOUNDATION CROSS-CHECK: slug 'b-devendrappa' karnataka.ts me maujood — seat 'Jagalur', party 'Indian National Congress' (INC).
karnatakaWorks['b-devendrappa'] = [];

// b-p-harish (Harihar, BJP) — REJECT-LOG:
// 1. The Hindu (22 Jul 2024): "Govt. finding it tough to get land for cemeteries, playgrounds, hospitals" — Revenue Minister Krishna Byre Gowda ne B.P. Harish ke Harihar ke liye kabrastan ki zameen ke prashna par kaha sarkar zameen jutane me sangharsh kar rahi hai. Sirf prashna; mantri se koi ashwasan/nateeja nahi mila — REJECT (sirf maang/prashna). URL: https://www.thehindu.com/news/national/karnataka/govt-finding-it-tough-to-get-land-for-cemeteries-playgrounds-hospitals/article68432594.ece
// 2. Retired soldiers ko sites allot karne ki ghoshna (lokmattimes/thefreedompress/newkerala/mangalorean, 9 Mar 2026; IANS copy) — Harish ne Vidhansabha me prashna uthaya tha, mantri ne poore rajya me sites allot karne ki ghoshna ki. REJECT: kisi bhi whitelisted outlet (Hindu/IE/HT/NDTV/India Today/TOI/Deccan Herald/PTI-on-established) par iss event ki coverage nahi mili; sirf IANS-syndicated chhote portals. URL: https://www.lokmattimes.com/national/karnataka-govt-to-allot-sites-to-retired-soldiers-across-state-minister/
// 3. LiveLaw (14 Aug 2026): NEET protest ke dauran BJP MLA par ande phenkne ke mamle me engineering student par FIR par Karnataka HC ka interim stay — FIR complainant B.P. Harish ne darj karayi thi; Harish aaropi nahi, gawah/shikayatakarta. REJECT as negative (MLA khud aaropi nahi). URL: https://Www.livelaw.in/high-court/karnataka-high-court/karnataka-high-court-interim-stay-fir-engineering-egg-attack-incident-against-bjp-mla-b-p-harish-545897
// 4. Bharathorizon (Jan 2026): Kadajji gaon me talab se mitti uthane ke vivad me Dalit kisan Kantharaj par jati-gat tippani ke aarop me Harish par DCRIE police station me FIR — REJECT: sirf chhota portal, whitelisted established outlet par koi coverage nahi mili, verify nahi ho saka. URL: https://bharathorizon.com/politics/state-politics/bjp-mla-bp-harish-faces-fir-for-casteist-remarks-in-davangere.html
// 5. Minister S.S. Mallikarjun dwara Harish ke khilaaf apshabd ka vivad (NDTV/hansindia, Sep 2026) — mantri ne aapattijanak bhasha istemal ki; Harish yahan peedhit-paksh; koi FIR/janch nahi. REJECT as negative (MLA khud aaropi nahi); REJECT as work (sirf rajnaitik vivad). URL: https://www.ndtv.com/india-news/beat-him-with-slippers-karnataka-minister-abuses-bjp-mla-on-camera-12021717?pfrom=home-ndtv_mainnavigation
// 6. DNA India (27 Mar 2010): "BJP MLA demands ban on mining activities in Karnataka" — B.P. Harish ne 2010 me mining ban ki maang ki thi; karyakaal May 2023+ se pehle ka mamla, bina in-term vikas. REJECT.
// 7. Star of Mysore ke K. Harishgowda (Chamaraja, Congress) ke saare works — NAMESAKE: ye B.P. Harish (Harihar, BJP) nahi hain. REJECT.
// 8. Citizen Matters ka N.A. Haris (Shantinagar) ka LAD-fund article — NAMESAKE: alag neta, alag seat. REJECT.
// 9. TOI (21 Jan 2022): Bommai ka Harihar ko Varanasi jaisa banane ka wada — pre-term; Harish ki koi vyaktigat bhoomika darj nahi. REJECT.
// 10. Fund: KLLADS Rs 2cr/seat/varsh — Harish ki seat par kharch ke kisi spasht source ka pata nahi chala; koi fund line nahi jodi. Notes me "ghoshit nahi" kisi entry me lagu nahi hua.
// IDENTITY QA: saare kaam sirf B.P. Harish (Harihar, BJP; pita Basavanagowda P, jeet 63,924 vote, N.H. Srinivasa ko 4,304 vote se haraaya) tak seemit; "Harish" naam ke anya netaon (K. Harishgowda, N.A. Haris, G.D. Harish Gowda) se koi mix nahi.
karnatakaWorks['b-p-harish'] = [
  {
    title: 'Bhadra reservoir se kharif fasal ke liye Harihar sahit right-bank canal ke 4 branch canals (Anaveri, Davangere, Malebennur, Harihar) me 120 din tak pani chhodne ka nirnay — Harish ne IAC baithak me talab me pani ki jaldi maang uthai thi',
    category: 'Paani',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/water-to-be-released-from-bhadra-reservoir-for-kharif-crops-for-120-days-from-tuesday/article69838371.ece',
    date: '2025-07-21',
    period: '2023-2028',
    note: 'The Hindu (21 Jul 2025) ke mutabik Shivamogga me Irrigation Advisory Committee (IAC) ki baithak me Bhadra reservoir se kharif fasal ke liye command area me 22 Jul 2025 se 120 din tak pani chhodne ka nirnay liya gaya; member-secretary R. Ravichandra ne usi din water-release timetable ki notification jaari ki. Baithak me mantri Madhu Bangarappa adhyaksh the; command-area ke vidhayakon B.P. Harish, D.G. Shantana Gowda aur Latha Mallikarjun ne maang ki thi ki talab (tail-end) ke kisanon ko fayda mile isliye pani turant jaldi chhoda jaye. Credit capped: pani chhodne ka nirnay committee ka tha; Harish maang uthane wale kayi vidhayakon me se ek the. Date-note: article 21 Jul 2025 ko publish hua, baithak usi din (Somvar) aur release 22 Jul (Mangalvar) se.',
  },
  {
    title: 'Davangere ke kisanon ke virodh par Bhadra right-bank canal se Chikkamagaluru-Chitradurga ke liye nayi peya-jal pariyojna ka kaam rokne ka nirnay — Harish design-badalne ki maang me shamil the',
    category: 'Paani',
    badge: 'news',
    stage: 'swikriti',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/water-project-to-benefit-parts-of-chikkamagaluru-chitradurga-irks-farmers-in-davangere/article69776155.ece',
    date: '2025-07-06',
    period: '2023-2028',
    note: 'The Hindu (6 Jul 2025) ke mutabik poorv mantri M.P. Renukacharya, Harihar MLA B.P. Harish, KRRS neta K.T. Gangadhar aur anyon ne Bhadra right-bank canal par Lakkavalli me naye outlet se Chikkamagaluru-Chitradurga ke gaon/kasbon ko peya-jal dene wali pariyojna ke design ka virodh kiya, kahte hue ki outlet talab ke kisanon ka pani rok lega; unki maang thi ki outlet ki jagah alag aqueduct bane. 23 June ko mantri D. Sudhakar ki adhyakshata me baithak me nirnay hua ki IISc Bengaluru ke experts ki technical rai aane tak kaam rok diya jayega. Credit capped: virodh Davangere ke kisan sangathanon aur kayi netaon ka sanyukt tha; Harish unme se ek the. Date-note: article 6 Jul 2025 ko publish hua; sambandhit baithak 23 June ko hui thi.',
  },
  {
    title: '2023 ke chunaav-ke-baad Dalit samuday par kathit tippani ke mamle me Bengaluru ki special court ne BJP MLA B.P. Harish ke khilaaf giraftari warrant jaari kiya — lagatar pesh na hone par',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/bp-harish-arrest-warrant-dalit-remarks-case-karnataka-10676973/',
    date: '2026-05-06',
    period: '2023-2028',
    note: 'Indian Express (7 May 2026) ke mutabik Bengaluru ki elected-representatives special court ke judge Santosh Gajanan Bhat ne BJP MLA B.P. Harish (Harihar, Davangere) ke khilaaf giraftari warrant jaari kiya kyunki wo mamle me baar-baar court me pesh nahi hue; court ne police ko unhe pesh karne ka nirdesh bhi diya. Mamla 2023 ke Assembly chunaav ke baad ka hai: Harish par aarop hai ki jeet par badhai dene aaye Dalit samuday ke logon par unhone aapattijanak tippani ki aur kaha ki party ne community ke liye internal reservation laya phir bhi unhone BJP ko vote nahi diya. Harish ne baad me maafi maangi thi, lekin BSP neta D. Hanumanthappa ne unke ek public event me apni tippani ka bachav karne ke baad Harihar Town police station me shikayat darj karayi. Stage: sirf giraftari-warrant star — chargesheet ya dosh-siddhi ki koi reporting nahi mili. Date-note: IE ki report 7 May 2026 (Guruvaar) ko publish hui aur warrant ko "Wednesday" jaari bataya gaya; Asia/Kolkata calendar ke hisab se 6 May 2026 Wednesday tha, isliye tithi 2026-05-06 rakhi gayi hai.',
  },
  {
    title: 'Davangere ki mahila SP Uma Prashanth par apmanjanak tippani ke aarop me Harihar BJP MLA B.P. Harish par KTJ Nagar police station me FIR darj hui',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/karnataka/2025/Sep/04/fir-against-bjp-mla-bp-harish-for-remark-against-sp',
    date: '2025-09-03',
    period: '2023-2028',
    note: 'New Indian Express (4 Sep 2025) ke mutabik Harihar BJP MLA B.P. Harish ke khilaaf Davangere ke KTJ Nagar police station me FIR darj ki gayi. SP Uma Prashanth ne shikayat ki thi ki 2 Sep 2025 ki press conference me Harish ne unhe Shamanuru pariwar ke darwaze par "pomeranian dog" ki tarah intezar karti bataya; unhone kaha tha ki MLA ke meeting me aane par SP uchit abhivadan nahi karti, lekin Shamanuru pariwar ke logon ke liye gate par intezar karti hain. BNS ki dhaarayein 132, 351(2) aur 79 ke tahat mamla darj hua. Akhil Bharat Veerashaiva-Lingayat Mahasabha ke Davangere taluk adhyaksh Shambhu Urekondi ne maafi ki maang ki aur chetavni di ki public me maafi na maange par teevra virodh hoga. Stage: sirf FIR star — chargesheet ya dosh-siddhi ki koi reporting nahi mili. Date-note: NIE ki report 4 Sep 2025 ko update hui aur FIR ko "Wednesday" bataya gaya; calendar ke hisab se 3 Sep 2025 Wednesday tha, isliye tithi 2025-09-03 rakhi gayi hai.',
  },
];

// FRAGMENT: s-s-mallikarjun (S. S. Mallikarjun, Davanagere North, INC) — 2023-2028 works research
// Mantri portfolio (foundation record + Deccan Herald 12 Aug 2026 se verify): Mines and Geology; Horticulture.
// Researched 2026-10-19. Positive works: ZERO qualifying (whitelisted outlet par Davanagere North seat ka
// koi vyaktigat lokarpan/shilanyas/itemized sanction nahi mila; mile hue sabhi kaam mantri-vibhaag ke
// rajya-stariya faisle, CM-led events, ya seat ke bahar ke the).
// Negative: 1 major in-term matter — Dec 2022 me Davanagere farmhouse par Wildlife Act raid, FIR me MLA khud
// aaropi, aur 6 Oct 2023 ko Karnataka HC ne karyavahi prakriya-dosh par radd ki (in-term nyayik vikas, raahat).

karnatakaWorks['s-s-mallikarjun'] = [
  {
    title: 'Karnataka HC ne Davanagere North ke MLA S. S. Mallikarjun ke khilaf Wildlife Protection Act ki karyavahi prakriya-dosh ke aadhar par radd ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/karnataka-hc-horticulture-minister-wildlife-protection-act-case-quashed-8992312/lite/',
    date: '2023-10-06',
    note: 'The Indian Express ki report ke anusar Karnataka High Court ne 6 Oct 2023 ko Horticulture Minister S. S. Mallikarjun (Davanagere North ke Congress MLA) aur unke bhai S. S. Ganesh sahit sabhi aaropiyon ke khilaf Wildlife (Protection) Act ke tehat chal rahi aapradhik karyavahi radd kar di. Justice M. Nagaprasanna ki single-judge bench ne kaha ki search aur seizure ke baad Forest Officer ko Wildlife Offence Register me saara vivaran darj karke Wildlife Offence Report taiyaar karni chahiye thi, lekin poori prakriya ulta-pulta (topsy-turvy) hui aur magistrate dwara dohra (dual) cognizance lena bhi niyam-viruddh tha — ye ‘incurable illegalities’ the. Case ka pichhla vikaas: Dec 2022 me minister ke Davanagere farmhouse par chhaapa pada aur 29 jungli jaanwar (10 blackbuck, 7 cheetal, 7 jungli suar, 3 nevle, 2 siyaar) baramad hue; farmhouse karmchari Senthil (Bengaluru me hiran ki khaal/sing/haad ki bikri par giraftaar) ke bayaan ke aadhar par Assistant Conservator of Forests ne FIR darj ki jisme minister aur unke bhai ko aaropi banaya gaya; report magistrate ke saamne pesh hui aur cognizance liya gaya, ek alag case me criminal conspiracy ki dhara bhi jodi gayi. HC ke is aadesh se MLA ko case se raahat mili; koi conviction nahi hua hai. Date inference: page 20 Oct 2023 ko prakashit hua aur aadesh ko ‘October 6’ bataya gaya hai, isliye 2023-10-06 rakha gaya hai.',
    period: '2023-2028'
  }
];

// REJECT-LOG (s-s-mallikarjun):
// 1. lawstreet.co, 14 Mar 2024 — HC notice on plea against naming government buildings after living Congress ministers (Mallikarjun + father Shamanur Shivashankarappa; bus stand, lake, ZP sabhangana, corporation meeting hall): REJECT — outlet whitelist me NAHI hai; kisi bhi whitelisted outlet par iski coverage nahi mili, isliye entry NAHI.
// 2. newsable.asianetnews.com, Jan 2026 — Karnataka Anna Bhagya case: FIR against minister's aide Mohammed Jameer over alleged rice hoarding in Davanagere: REJECT — outlet whitelist me NAHI; FIR me MLA KHUD aaropi NAHI (aaropi sahyogi hai; BJP ka 'mastermind' ka aarop rajneetik aarop hai, FIR-aaropi column me MLA ka naam nahi).
// 3. thehansindia.com, Sep 2026 — Davanagere-Harihar Urban Development Authority plans 200-acre layout (Karur), meeting chaired by district in-charge minister: REJECT — outlet whitelist me NAHI; zila-prabhari mantri ki bhoomika me authority ki baithak ka faisla, Davanagere North seat ka vyaktigat MLA-kaam nahi; keval prastav-taiyaari ka nirdesh.
// 4. The Hindu, 16 Jun 2025 — CM Siddaramaiah laid foundation for development projects worth Rs 1,350 crore in Davanagere district: REJECT — CM dwara udghatan/shilanyas; MLA ki vyaktigat dastaveji bhoomika (fund + bhoomika disclosed) ka koi zikr nahi; dusre neta ke karyakram me maujoodgi.
// 5. newsnext.live, Mar 2026 — Budget 2026-27: Rs 100 crore package (Davanagere South SC/ST/minority areas) + Rs 64 crore horticulture cold storage in district: REJECT — outlet whitelist me NAHI; CM ki budget ghoshna (sirf ghoshna); MLA ki vyaktigat bhoomika nahi; package Davanagere South seat (putra ki seat) ke liye hai.
// 6. timesofindia.indiatimes.com — 'Davanagere to be made model district' (Mallikarjun as sports/youth services and district-in-charge minister, Rs 230.89 crore works claim): REJECT — pre-term mamla (lagbhag 25 saal purana, ~2001; karyakaal 2023-2028 ke bahar), is par karyakaal me koi naya nyayik/prakashit vikas nahi.
// 7. ssmallikarjun.in — MLA ki apni website (sustainable mining, road connectivity to 100+ villages, healthcare access claims): REJECT — sirf apne dawe; post-event reporting nahi; vikas-karya nahi.
// 8. deccanherald.com, 29 Sep 2026 — 'Basavanthappa pleads with fellow Minister S S Mallikarjun to take him into confidence': REJECT — samudaayik samman samaroh me rajneetik bayaan; vikas-karya nahi.
// 9. saptashwatv.com, Oct 2026 — Lalbagh AI Welcome Gates launched by S.S. Mallikarjun: REJECT — outlet whitelist me NAHI; Bengaluru ka kaam (Davanagere North seat ke bahar); mantri-vibhaag (horticulture) ka rajya kaam.
// 10. starofmysore.com, Sep 2026 — Mallikarjun listed as inaugurator of Mysuru Dasara Flower Show: REJECT — outlet whitelist me NAHI; samaroh/utsav ka udghatan (keval shubharambh), bhautik sarkari sanrachna ka kaam nahi.
// 11. Parivaar firewall — patni Dr. Prabha Mallikarjun (Davanagere MP) ke Lok Sabha prashn (PMGSY Phase 4, STPI Davanagere IT hub): MP ke MPLADS/prashn wale kaam, MLA par NAHI; entry NAHI. Putra Samarth Mallikarjun (Davanagere South MLA, 2026 by-election) ke kaam/mamle: pita par NAHI aur ulta bhi NAHI; teenon record alag rakhe gaye.
// 12. Lokmattimes/economicobserver/ibcworldnews epapers — Mallikarjun se judi khabrein mili (bypoll campaign, cabinet reshuffle): REJECT — ye sab outlets whitelist me NAHI; aur ye vikas-karya nahi, rajneetik coverage hai.
// NOTE: Foundation fund field me KLLADS 'Rs 2 crore/seat/varsh' darj hai; kisi bhi whitelisted source ne is MLA ke sandarbh me iska upyog/nidhi-avaantn spasht nahi kaha, isliye works me fund disclosure ke bina joda nahi gaya.

// QA: 15 candidates screened, 1 qualifying negative entry (in-term HC order with relief), 0 qualifying positive works. Portfolio verified: Mines and Geology; Horticulture (Deccan Herald, 12 Aug 2026).

// samarth-mallikarjun — 0 works + 0 negatives
// Mined 2026-10-19. Fragment khud merge mat karo.

// Pehchan pakki: Davanagere South (Davanagere jila, Karnataka Vidhan
// Sabha seat 107), INC. 2026 upchunav me jeet — polling 9 Apr 2026,
// ginti/jeet 4 May 2026: 69,578 vote; BJP ke Shrinivasa T. Dasakariyappa
// (63,870) ko 5,708 maton se haraya (New Indian Express, 04 May 2026;
// ECI numbers wiki par bhi). Oath/pad grahan 4 May 2026. Poorv MLA:
// dada Shamanuru Shivashankarappa (seat Dec 2025 me unki mrityu par
// khaali hui). Pita: S. S. Mallikarjun (Davanagere North ke MLA,
// Karnataka sarkar me mantri). Maa: Prabha Mallikarjun (Davanagere
// Lok Sabha MP). Janm: 2 Feb 1999, Davanagere.
// PARIVAAR FIREWALL (sakht): pita S. S. Mallikarjun ke kaam/mamle
// putra par NAHI jode; maa Prabha Mallikarjun ke MPLADS kaam putra
// par NAHI jode; dada ke pichhle karyakaal ke kaam in par NAHI jode.
// Karyakaal: sirf apni jeet (4 May 2026) se — 2026 se pehle ka kuch
// bhi entry NAHI. Tenure ~5.5 mahine (Oct 2026 tak) — chhota tenure.

karnatakaWorks['samarth-mallikarjun'] = [];

// ===== REJECT-LOG: Samarth Mallikarjun (Davanagere South, INC) =====
// Chhote tenure + bhadkau/parivaar-dominated coverage ke kaaran
// whitelisted outlets me May 2026 ke baad unki VYAKTIGAT vikas-gatividhi
// (lokarpan/shilanyas/sanction list/GO-swikriti) ki koi post-event
// reporting NAHI mili. Election/bypoll reporting prachur hai, lekin
// woh kaam NAHI hai.

// --- WORKS LEADS (har ek khoja/padha; sab REJECT) ---
// 1. Karnataka Budget 2026-27: Davanagere South ke SC/ST/alpasankhyak
//    kshetron ke liye Rs 100 crore package, 12,000 MT cold storage,
//    Mayakonda PHC ko CHC banana, Matsyadarshini outlet, 150-capacity
//    hostel (newsnext.live, ~Mar 2026, budget pesh hone par). YE CM
//    Siddaramaiah ki BUDGET GHOSHNA hai, Samarth ka koi lokarpan/
//    bhoomika nahi; aur ye jeet (4 May 2026) se PEHLE ka hai (polling
//    9 Apr 2026; budget March me pesh hua). REJECT (pre-term; sarkar ki
//    ghoshna, MLA ki vyaktigat bhoomika nahi). sourceUrl:
//    https://newsnext.live/karnataka/major-allocations-announced-for-davanagere-and-bagalkot-in-budget-ahead-of-bypoll/
// 2. The Hindu / New Indian Express / Times of India / The News Minute
//    (Mar-May 2026): nomination (20 Mar 2026), CM roadshow, deputy CM
//    bayan, polling-day reporting, ginti aur jeet ki khabar, "reduced
//    margin" vishleshan. Sab chunav reporting; koi bhautik sanrachna
//    ka vyaktigat lokarpan/shilanyas nahi. REJECT (chunav reporting).
//    sourceUrls:
//    https://www.thehindu.com/news/national/karnataka/davangere-bypoll-eight-candidates-file-nominations/article70766269.ece/amp/
//    https://www.newindianexpress.com/states/karnataka/2026/May/04/congress-wrests-two-bypolls-seats-in-karnataka
//    https://www.thehindu.com/news/national/karnataka/davanagere-south-grandsons-victory-with-reduced-margin-in-shamanur-bastion-matter-of-concern/article70939063.ece
// 3. The Hindu (06 May 2026, "Davanagere South bypolls: Sadiq Pahilwan,
//    Congress MLA Rizwan Arshad congratulate CM Siddaramaiah") — jeet
//    ke baad minority leaders ki CM se shishtachar bhet; shuddh
//    party-politics. REJECT (party karyawahi; koi vikas kaam nahi).
//    sourceUrl:
//    https://www.thehindu.com/news/national/karnataka/davanagere-south-bypolls-sadiq-pahilwan-congress-mla-rizwan-arshad-congratulate-cm-siddaramaiah/article70946176.ece
// 4. New Indian Express (05 Apr 2026, "Samarth walks untrodden paths in
//    Davanagere South") — jeet se PEHLE ka campaign profile piece
//    (maa Prabha ka bayan: "He will make Davanagere South one of the
//    best constituencies"). Pre-term vaade/interview, koi dastaveji
//    kaam nahi. REJECT (pre-term; campaign profile, ghoshna nahi).
//    sourceUrl:
//    https://www.newindianexpress.com/states/karnataka/2026/Apr/05/samarth-walks-untrodden-paths-in-davanagere-south
// 5. Karnataka sarkari portal/DIPR par Samarth ke naam koi
//    itemized KLLADS sanction list, GO ya shilanyas/lokarpan press
//    release (May-Oct 2026) NAHI mila. KLLADS fund: ghoshit nahi.
// 6. Vidhan Sabha me inki koi maang ka dastaveji nateeja/ashwasan
//    whitelisted media me report NAHI hua.

// --- NEGATIVES CHECK (koi qualify NAHI hua) ---
// 1. New Indian Express (13 Mar 2024, "Karnataka HC issues notice to
//    MLA Shamanur, Minister Mallikarjun on PIL against public infra
//    being named after politicians") — PIL me prativadi: dada
//    Shivashankarappa aur PITA S. S. Mallikarjun; Samarth na prativadi
//    hai na aaropi, aur mamla pre-term (2024) hai, in-term koi vikas
//    (adalati aadesh/notice) report nahi hua. REJECT as negative
//    (parivaar firewall + pre-term; pehchan galat hogi). sourceUrl:
//    https://www.newindianexpress.com/amp/story/states/karnataka/2024/Mar/13/karnataka-hc-issues-notice-to-mla-shamanur-minister-mallikarjun-on-pil-against-public-infra-being-named-after-politicians
// 2. Sep 2026 war-of-words (IANS: Minister S. S. Mallikarjun vs BJP
//    MLA B. P. Harish — Harihar veterinary hospital lokarpan ke dauraan
//    paani ki maang par apshabd). Lokarpan aur tippaniyan PITA ki,
//    Harihar seat me — Samarth is ghatna se juda nahi. REJECT as
//    negative (pita ka mamla; parivaar firewall; Davanagere South se
//    bahar). sourceUrl:
//    https://www.lokmattimes.com/national/war-of-words-between-karnataka-minister-mallikarjun-bjp-mla-harish-spark-public-concern/
// 3. Deccan Herald (29 Sep 2026, Basavanthappa ki S. S. Mallikarjun se
//    apeel) — pita se sambandhit mantri-stariya mamla; Samarth ka
//    ullekh tak nahi. REJECT (parivaar firewall). sourceUrl:
//    https://www.deccanherald.com/india/karnataka/basavanthappa-pleads-with-fellow-minister-s-s-mallikarjun-to-take-him-into-confidence-4164493
// 4. Maa Prabha Mallikarjun ke Sansad-sabha (PMGSY) sawal — MPLADS/
//    Sansad ke mamle; firewall ke tahat putra par NAHI. REJECT.
// 5. Samarth ke khilaf established media me koi FIR/chargesheet/janch
//    ya adalati aadesh/notice report NAHI hua. Halafname ke mamle
//    (publicly reported nahi) akele negative NAHI — koi entry nahi.

// NEGATIVES: koi nahi. Fund (KLLADS): srot me ghoshit nahi.

// k-s-basavanthappa (Mayakonda SC, Davangere, INC) — researched 2026-10-19 — 0 works + 0 negatives.
// Pehchan (grounded): K. S. Basavanthappa, INC, first-time MLA from Mayakonda (SC), Davangere district — 2023 me
// 70,916 votes se jeete (runner-up independent B. M. Pushpa Vageeshaswamy). 3 Aug 2026 ko D. K. Shivakumar cabinet
// me minister baney; 12 Aug 2026 ko Muzrai, Fisheries, Ports and Inland Water portfolios miley. Pourakarmikas ke
// bete (Sangappa Pailwan aur Hanumakka), 'Ambulance Basavanthappa' ke naam se mashhoor, 2014 me Anagodu se zilla
// panchayat member rahe, 2018 me Mayakonda se haare. Sources: Deccan Herald (opened 2026-10-19), The Hindu election page, Wikipedia/ECI figures.
// Whitelisted media (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, Deccan Herald,
// PTI-on-established-outlet) me May 2023 se ab tak is MLA ke Mayakonda seat-level vyaktigat lokarpan/shilanyas,
// GO-backed swikriti, itemized sanction list ya dastaveji Vidhansabha-nateeja ka koi post-event proof nahi mila.
// Sarkari portal/DIPR press release me bhi naam se koi release nahi mili. Isliye array khaali rakha gaya hai —
// khali profile theek hai.
// REJECT-LOG:
// R1: Deccan Herald (5 Aug 2026, opened): 'Karnataka Cabinet expansion | Pourakarmikas' son becomes minister' —
//     journey profile; koi seat-level kaam nahi — REJECT (profile piece).
//     URL: https://www.deccanherald.com/india/karnataka/karnataka-cabinet-expansion-pourakarmikas-son-becomes-minister-4099613
// R2: Deccan Herald (29 Sep 2026, opened): 'Basavanthappa pleads with fellow Minister S S Mallikarjun to take him
//     into confidence' — Gandhi Nagar (Davangere city, Davangere North seat) ki maangon par appeal; na koi
//     dastaveji nateeja, na Mayakonda seat — REJECT (sirf maang/appeal + seat ke bahar).
//     URL: https://www.deccanherald.com/india/karnataka/basavanthappa-pleads-with-fellow-minister-s-s-mallikarjun-to-take-him-into-confidence-4164493
// R3: Deccan Herald (~16 Aug 2026): 'Winds of change in Muzrai dept as Dalit takes over as minister' — minister
//     appointment ki symbolism story; koi seat-level work nahi — REJECT (appointment coverage).
//     URL: https://www.deccanherald.com/india/karnataka/winds-of-change-in-muzrai-dept-as-dalit-takes-over-as-minister-4113472
// R4: TOI Hubballi (Sep 2026): 'Poor upkeep of Huligemma shrine irks muzrai minister' — Huligi (Koppal) mandir ka
//     nirikshan + officials ko fatkaar — REJECT (seat ke bahar + sirf nirikshan/daura).
//     URL: https://timesofindia.indiatimes.com/city/hubballi/poor-upkeep-of-huligemma-shrine-irks-muzrai-minister/articleshow/133688529.cms
// R5: Deccan Herald (8 Sep 2026): leopard attack me injured forest watcher se hospital visit — REJECT
//     (sirf daura/nirikshan; koi lokarpan/swikriti nahi).
//     URL: https://www.deccanherald.com/india/karnataka/davangere-forest-watcher-injured-in-leopard-attack-during-rescue-ops-4139460
// R6: daijiworld (16 Sep 2026): 'Priority to comprehensive development of Malpe all-weather port' — Malpe (Udupi)
//     par minister ka bayan — REJECT (seat ke bahar + sirf ghoshna; outlet bhi whitelist me nahi).
//     URL: https://daijiworld.com/news/newsDisplay?newsID=1325902
// R7: forpressrelease (3 Jun 2026): Aahwahan Foundation school inauguration, Kolkunthe (Davangere) — MLA 'esteemed
//     presence' me kai dignitaries ke saath — REJECT (CSR mukhya-atithi samaroh + outlet whitelist me nahi).
//     URL: https://www.forpressrelease.com/forpressrelease/672162/17/aahwahan-foundation-transforms-government-higher-primary-school-village-kolkunthe-davanagere-district-karnataka
// R8: newsnext.live (Mar 2026): budget 2026-27 me Mayakonda PHC ka CHC me upgrade — CM ka budget ghoshna, MLA ki
//     vyaktigat dastaveji bhoomika nahi — REJECT (dusre neta ki ghoshna + outlet whitelist me nahi).
//     URL: https://newsnext.live/karnataka/major-allocations-announced-for-davanagere-and-bagalkot-in-budget-ahead-of-bypoll/
// R9: coastaldigest (Jan 2026): 'Yediyurappa promises to carve out new Mayakonda taluk' — purv CM ka vaada, is MLA
//     se sambandh nahi — REJECT (dusre neta ki ghoshna + outlet whitelist me nahi).
//     URL: http://www.coastaldigest.com/yediyurappa-promises-carve-out-new-mayakonda-taluk?page=1
// R10: thesouthfirst minister-profile: pending criminal case (Siddapura PS) ka daawa — outlet whitelist me nahi,
//     article khud contradictory hai (aage 'no criminal cases' likha hai), aur halafname ke mamle akele negative
//     nahi (rule) — negative entry nahi. REJECT.
//     URL: https://thesouthfirst.com/karnataka/from-ambulance-basavanthappa-to-dharam-singhs-son-karnatakas-new-ministers/
// Fund: KLLADS (Rs 2cr/seat/varsh) jodne ke liye koi spasht source nahi mila — 'ghoshit nahi' status; fragment me
// koi fund line nahi.
// NEGATIVE CHECK: whitelisted media me May 2023 se ab tak is MLA ke khilaf koi FIR/chargesheet/janch ya in-term
// nyayik vikas (adalat ka aadesh/notice) ki reporting nahi mili. Isliye koi negative entry nahi.
karnatakaWorks['k-s-basavanthappa'] = [];

// basavaraju-v-shivaganga — 0 works + 0 negatives (researched 2026-10-19)
// Pehchan: Basavaraju V. Shivaganga, INC, Channagiri (Davanagere jila), 16th Karnataka Vidhansabha 2023-2028,
// 78,263 vote, margin 16,435 (runner-up Madal Mallikarjuna, IND); first-time MLA; Davanagere jila Kisan
// Congress adhyaksh (ANI/firstindia report ke anusar).
// Whitelisted media (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, Deccan
// Herald, PTI on established outlet) me May 2023+ koi VALID work lead nahi mila — saare lead political
// bayan, party-vivad ya rival ke aarop nikle; koi vyaktigat lokarpan/shilanyas bhautik sarkari sanrachna ka,
// GO-backed swikriti, itemized sanction list ya dastaveji Vidhansabha-nateeja nahi mila. Khali profile theek hai.
karnatakaWorks['basavaraju-v-shivaganga'] = [];

// REJECT-LOG (basavaraju-v-shivaganga)
// R1: Garbhwati van-adhikari par vivadaspad tippani (KDP review meeting, Channagiri) — Hindustan Times,
//     16 Oct 2025 (India Today ki reporting ke hawale) — MLA ne garbhwati Range Forest Officer (Shweta) ki
//     anupasthiti par sexist tippaniyan ki, notice jari karne ka nirdesh diya. NEGATIVE NAHI: whitelisted
//     coverage me MLA ke khilaf koi FIR/chargesheet/janch ya karyakaal me koi nyayik vikas (adalat ka
//     aadesh/notice) report nahi hua. Congress Disciplinary Committee show-cause ki khabar sirf The Logical
//     Indian (whitelisted NAHI) ne di — aur niyam ke anusar "Party karyawahi akele negative NAHI".
//     URL: https://www.hindustantimes.com/india-news/pregnancy-an-excuse-karnataka-congress-mla-shivaganga-basavaraj-backlash-for-sexist-remarks-against-pregnant-officer-101760594589067.html
// R2: CM-change bayan par Congress show-cause (Aug 2025, PTI via theweek.in/m.rediff.com) — MLA ne kaha DK
//     Shivakumar December tak CM banenge; KPCC Disciplinary Committee (coordinator Nivedith Alwa) ne 7 din me
//     jawab manga. NEGATIVE NAHI: party karyawahi akele negative nahi; works se sambandh nahi.
//     URL: http://theweek.in/wire-updates/national/2025/08/17/mes6-ka-cong-mla-notice.html
// R3: MP Renukacharya ke ret-khanan (sand) aarop par press conference — Times of India (Hubballi),
//     16 Jun 2025 — MLA ne Renukacharya ke 'sand smuggling' aarop ka khandan kiya ("legitimate sand trading,
//     not smuggling"; khud ko nirdosh bataya, devtaon ke saamne kasam ki chunauti). NEGATIVE NAHI: rival neta
//     ka political aarop; koi FIR/chargesheet/janch ya adalati vikas report nahi; works entry bhi nahi.
//     URL: https://timesofindia.indiatimes.com/city/hubballi/mla-shivaganga-exposes-ls-poll-agreement-financial-dealings-of-renukacharya/articleshow/122096564.cms
// R4: "DK Shivakumar ko CM banao" / 5-10 DyCM posts ki maang — Deccan Chronicle (create-5-deputy-cm-posts...,
//     2024) aur Times of India (karnataka-to-see-rotational-cm..., 25 Mar 2025) — sirf political bayan;
//     REJECT (sirf ghoshna/bayan; works kaam nahi).
//     URLs: https://www.deccanchronicle.com/southern-states/karnataka/create-5-deputy-cm-posts-in-karnataka-demands-congress-mla-basavaraju-shivaganga-900983
//           https://timesofindia.indiatimes.com/india/karnataka-to-see-rotational-cm-mla-claims-shivakumar-will-take-over-in-december/articleshow/118665774.cms
// R5: Davanagere jila prabhari mantri SS Mallikarjun ke hatane ki maang (DK Shivakumar ko chitthi, Dec 2024) —
//     firstindia.co.in (ANI) / thenewsmill.com — REJECT: party-level political maang (sirf maang/prastav);
//     outlet whitelisted nahi; works kaam nahi.
//     URL: https://firstindia.co.in/news/india/Channagiri-mla-basavaraju-v-shivaganga-demands-replacement-of-davangere-district-in-charge-minister-mallikarjun
// R6: Bhadra jalashay jal-vivad par tippani ("recent water policies have disadvantaged his constituency";
//     mantriyon se charcha ki maang) — devdiscourse.com (agency inputs, ~Sep 2026) — REJECT: sirf maang,
//     koi dastaveji nateeja/ashwasan nahi; outlet whitelisted nahi.
//     URL: https://www.devdiscourse.com/article/politics/3975049-political-rifts-unveiled-harsh-words-ignite-controversy-among-senior-leaders
// R7: Mallikarjun vs BP Harish war-of-words ki ninda ("enough of politics") — newsable.asianetnews.com,
//     ~Sep 2026 — REJECT: political bayan; works kaam nahi; outlet whitelisted nahi.
//     URL: https://newsable.asianetnews.com/india/k-taka-mla-slams-senior-leaders-war-of-words-feels-enough-of-politics-articleshow-ua8u5dg
// R8: IBC World News "CM-DCM Delhi trip" bayan (Jan 2026) — REJECT: political bayan; works kaam nahi;
//     outlet whitelisted nahi. URL: http://ibcworldnews.com/2026/01/17/cm-dcm-delhi-trip-signals-political-change-ahead-mla/
// R9: Purv Channagiri MLA Madal Virupakshappa (BJP) ka Mar 2023 Lokayukta rishwat mamla — purv MLA ka hai,
//     pre-term hai, aur is MLA (Shivaganga) se sambandh nahi — REJECT (galat vyakti + pre-term).
// NEGATIVES: whitelisted media me May 2023+ MLA (pehchan: Channagiri seat, INC) ke khilaf koi FIR/chargesheet/
//     janch ya karyakaal me koi nyayik vikas (adalat ka aadesh/notice) nahi mila. R1 aur R3 ke mamle aarop/
//     bayan tak seemit rahe, koi kaanuni janch report nahi hui. Halafname ke mamle akele negative nahi (niyam).
// FUND-NOTE: KLLADS (Rs 2 crore/seat/varsh) ka koi srot-spasht ullekh Channagiri/MLA ke sandarbh me nahi mila —
//     isliye koi fund entry nahi; "ghoshit nahi" ki sthiti bhi kahin darj nahi.
// SEARCH-SCOPE: 8 alag web searches (development/foundation-stone/inauguration/water/road/school/hospital
//     angles + Deccan Herald/The Hindu specific) + 2 whitelisted articles poore kholkar padhe gaye (HT,
//     ToI-Hubballi). Kannada-regional whitelisted coverage me bhi koi works lead nahi mila. RETRY-LEAD: koi
//     thos nahi — live-browser se Channagiri ke sthaniya sarkari/DIPR press releases me MLA ke vyaktigat
//     lokarpan/shilanyas ka dastavej mile to entry ban sakti hai; filhal khali profile sahi hai.

// FRAGMENT: d-g-shanthana-gowda (D. G. Shanthana Gowda, Honnali, INC) — 2023-2028 works research
// Researched 2026-10-19. Positive works: ZERO qualifying (whitelisted outlet par karyakaal ka koi vyaktigat lokarpan/shilanyas/itemized sanction nahi mila).
// Negatives: halafname ke 2 pending case darj hain (PAR 33/2023 CrPC 107; PAR 192/2022 IPC 143/147/323/307/504/506/149) lekin halafname ke mamle akele qualifying NAHI;
// karyakaal me koi FIR/chargesheet/adalt-order jisme MLA aaropi ho, established media me nahi mili. Isliye negative entry: ZERO.

karnatakaWorks['d-g-shanthana-gowda'] = [];

// REJECT-LOG (d-g-shanthana-gowda):
// 1. vijayavani.net, 16 Jun 2025 — "Shaikshanik abhivruddhige sarkara needuttide saulabhya" (Nyamati Govt First Grade College ke cultural/sports/NSS closing ceremony ka udghatan, MLA ne bhashan diya): REJECT — outlet whitelist me NAHI; samaroh ka udghatan/bhashan, koi bhautik sarkari sanrachna ka kaam nahi; promise/fund ka zikr nahi.
// 2. vijayavani.net, Nov 2023 (Rajyotsava) — Honnali me Rajyotsava samaroh me MLA ka bhashan; Tumminkatte road widening ke baad Kannada flagstaff, Jayachamarajendra circle name board aur Bhuvaneshwari statue lagwane ka bharosa: REJECT — outlet whitelist me NAHI; sirf vaada/bharosa, koi shuru/hua kaam nahi; pre/post-event works ka koi sanction nahi.
// 3. newindianexpress.com, 07 Sep 2023 — "New districts: CM will not commit due to fund crunch" (Kannada Bhavana ka udghatan + Rs 150 crore ke works ke shilanyas): REJECT — ye ghatna Madhugiri (Tumakuru) ki thi, Honnali ki NAHI; galat seat.
// 4. vijaykarnataka.com, 2016 — Honnali town me Rs 3.25 crore ke water reservoir + pipeline ka lokarpan (MLA ne kiya): REJECT — pre-term (2016, is karyakaal se bahar); outlet whitelist me bhi NAHI.
// 5. deccanherald.com, 05 Aug 2026 — "No resentment over denial of ministerial berth" (Honnali MLA ne mantri-pad na milne par narazgi se inkaar, corporation/board adhyaksh ki ummeed): REJECT — vikas-karya nahi, political statement; works category me qualify nahi karta.
// 6. newsnext.live, Feb 2026 (budget 2026-27 coverage) — Honnali me KSRTC ka naya bus stand + depot; Davanagere district me cold storage, Mayakonda PHC upgrade: REJECT — outlet whitelist me NAHI; CM budget ghoshna hai, MLA ki vyaktigat dastaveji bhoomika ka koi zikr nahi; sirf ghoshna.
// 7. myneta.info affidavit (Karnataka 2023) — 2 pending cases (PAR:33/2023, Section-107 CrPC, Honnali Tashildar Court; PAR:192/2022, IPC 143/147/323/307/504/506/149, District Court Davanagere): REJECT — halafname ke mamle akele negative entry NAHI banate; inme se 192/2022 pre-term FIR hai aur dono me karyakaal ki koi nyayik pragati (chargesheet/FIR/adalt-order) established media me nahi mili.
// 8. myneta.info 2008/2013 affidavits — 2007 aur 2009 ke purane case (charges framed 2007/2009): REJECT — pre-term mamle, karyakaal me koi nayi nyayik vikas nahi.
// 9. english.publictv.in, May 2023 — former MLA M. P. Renukacharya haar ke baad seat ka daura, apne karyakaal ke kaamo ki taraf ishara: REJECT — ye dusre neta (poorv MLA, BJP) ke baare me hai; D. G. Shanthana Gowda se sambandh nahi.
// 10. Karnataka DIPR/karvarta press releases: naam par targeted search me karyakaal ka koi lokarpan/shilanyas press release nahi mili.

// QA: 10 candidates screened, 0 qualifying entries. Whitelisted outlets (The Hindu, Indian Express, New Indian Express, Deccan Herald, Times of India) par is karyakaal ke koi vyaktigat vikas-karya (lokarpan/shilanyas/itemized sanction) aur koi qualifying negative nahi mile. Profile khali rakhi gayi.

// ============================================================================
// BATCH 7 (Dharwad + Gadag + Hassan — 15/31 jile)
// ============================================================================

// --- Dharwad ---

// REJECT-LOG (n-h-konaraddi):
// - TOI "Cong MLA taking credit for BJP's work, alleges Munenakoppa" (~2026-02-04, inferred from search index): Opposition ka political credit-dispute aarop; Benni/Benne-Tuppari Rs 200 cr mega irrigation/flood project; koi FIR/criminal angle nahi; badi pariyojna me MLA ki vyaktigat bhoomika disputed -> REJECT (negative bhi nahi)
// - The Hindu "CM, DCM to initiate Rs 200 crore Benni Halla flood control project on Feb 8" (2026-02-07): Pre-event announcement source -> REJECT
// - The Hindu "Flood control project launched to help 37 villages in two north Karnataka districts" (2026-02-08): CM ne foundation stone lagaya; MLA ki bhoomika sirf appeal; credit disputed (Munenakoppa); badi pariyojna -> REJECT (shanka thi, entry nahi banayi)
// - publicnext "Annigeri: Mla Konaraddi's work should be given Shabhashgiri: Minister Santosh Lad" (2025-05-27): non-whitelisted source; inauguration Minister Santosh Lad ne kiya, MLA ne nahi; MLA ki bhoomika vague ("active in bringing funds") -> REJECT + RETRY-LEAD (whitelisted outlet par khojo)
// - TOI "Navalgund to implement ready-made building tech" (~2024-01-25, page text me "special buses Jan 23-30" se inferred): 3000 houses ka plan/ghoshna; CM foundation stone "expected" kabhi hua nahi -> REJECT (ghoshna)
// - TOI "CM, DCM and mins attend MLA Konaraddi's son's wedding reception in Navalgund" (~2025-12-07, "316 days ago" se inferred): mass marriage social/personal event; sarkari sanrachna nahi -> REJECT
// - publicnext "Navalgund is all set to celebrate mass marriages" (2025-12-06): pre-event announcement + non-whitelisted -> REJECT
// - The Hindu "Despite losing her father, Navalgund student attends SSLC exam first" (~2025-03-28, "572 days ago" se inferred): MLA ki pocket se rent + Ashraya house ka waada; niji kharch/ghoshna -> REJECT
// - Deccan Herald "Navalgund MLA urges govt to declare Dharwad drought-hit" (~2026-08-31, "49 days ago" se inferred): sirf memorandum/maang -> REJECT
// - The Hindu "Ensure requisite coordination in drought relief works" (2023-11-24): drought meeting me bayaan; nirikshan/daura category -> REJECT
// - The Hindu "Three-day Dry Chilli Mela begins in Hubballi" (2026-02-06): mela shubharambh; MLA ne event inaugurate kiya, sanrachna nahi -> REJECT
// - The Hindu "Minister unveils new rate card for Indira canteens in Dharwad" (2024-09-12): MLA sirf maujood tha, lokarpan Minister ne kiya -> REJECT
// - The Hindu "Museum dedicated to Sir Siddappa Kambali inaugurated in Hubballi" (2023-09-12): MLA sirf maujood tha -> REJECT
// - The Hindu/TOI "Navalgund Bypass Road" (2025-05-15): NH project, MP Pralhad Joshi ka credit; seat ke kaam me MLA ki bhoomika nahi -> REJECT
// - newindianexpress "New districts: CM will not commit due to fund crunch" (2023-09-07): Madhugiri ka maamla, Navalgund nahi -> REJECT (irrelevant)
// - The Hindu "Minister leads protest march in Dharwad in support of Siddaramaiah" (2024-08-19): political protest march; work nahi, negative bhi nahi -> REJECT
// - TOI "Man stabs self amid property dispute" (~2026-07-10, "111 days ago" se inferred): incident MLA office ke bahar hua, MLA aaropi nahi -> NEGATIVE NAHI
// - indiankanoon "Sri Ningareddy Hanumareddy Konareddy vs State of Karnataka" (quashing petition, order 2022-03-04): 2008 ka purana case (Crime No.108/2008), pre-2023; MLA khud petitioner; May 2023+ ka koi nyayik vikas nahi -> NEGATIVE NAHI
// - myneta.info affidavit (NI Act 138, cognizance): halafname ka maamla akele negative nahi -> NEGATIVE NAHI
karnatakaWorks['n-h-konaraddi'] =  [];
// REJECT-LOG (m-r-patil):
// - The Hindu, "Inam Veerapur residents air grievances as MLA, Deputy Commissioner visit them" (visited crime spot after honour killing): ghatna-sthal ka nirikshan/daura, koi vikas kaam nahi — REJECT.
// - The Hindu, "Three-day Dry Chilli Mela begins in Hubballi" (2026-01-23; Patil co-inaugurated mela): abhiyan/event ka shubharambh, bhautik sarkari sanrachna nahi — REJECT.
// - The Hindu, "Crop loss in around one lakh hectare in Dharwad district; Santosh Lad promises adequate compensation" (2025-08-23): mantri ke karyakram me moujudgi — REJECT.
// - bharathorizon.com, "Dharwad District Holds Public Meeting; 151 Grievances Submitted" (Jana Samparka Sabhe, Kundgol): whitelist-bahar source + mantri ke karyakram me moujudgi — REJECT.
// - publicnext.com, "Kundgol: New office-bearers to be sworn in as government employees' bhavan" (KSGEA Rs 60 lakh demand; Patil 'promised'): whitelist-bahar portal + ghoshna/promise, kaam swikrit nahi — REJECT.
// - publicnext.com, "Kundgol: Is it true that the bill sanctioned at a stage of work worth lakhs of rupees is in progress?": whitelist-bahar portal + MLA ki bhoomika/fund disclosed nahi — REJECT.
// - lokmattimes.com Kundgol news topic page: local aggregator, 2023 election-campaign content — REJECT.
// - NDTV/HT/NIE (Mar 2025): 18 BJP MLAs suspension + revocation (M R Patil named): party-karyawahi/political matter, koi vikas kaam nahi — REJECT.
// - NIE/TOI 2019 bypoll stories: karyakaal se pehle (2019), election politics — REJECT.
// - TOI 2019 byelection "party hopper" story: Hirekeur (B.C. Patil) ke baare me hai, Kundgol ke M.R. Patil ke baare me nahi — party-badlav ka koi pramaan nahi mila.
// - Negatives: whitelisted sources par MLA M.R. Patil ke khilaaf koi FIR/chargesheet/nyayik vikas (May 2023+) nahi mila — negative count: 0.
karnatakaWorks['m-r-patil'] =  [
  {
    title: 'Kundgol ke MLA M.R. Patil ki maang par Kendra ne Noolvi Cross par NH-48 ke Rs 12.5 crore underpass ko swikriti di aur bhoomi puja hui',
    category: 'Any', badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/centre-is-committed-to-bringing-down-road-accidents-on-national-highways-says-joshi/article69096514.ece',
    date: '2025-01-13',
    note: 'Kendra sarkar ne Pune-Bengaluru National Highway (NH-48) par Noolvi Cross ke paas Rs 12.5 crore ki lagat se ek underpass swikrit kiya; Union Minister Pralhad Joshi ne MLA M.R. Patil aur sthaniya janpratinidhiyon ke saath bhoomi puja ki. Patil ne bataya ki Noolvi Cross par baar-baar ho rahe haadson ke mudde ko unhone Union Minister ke dhyaan me laya, jinhone unhe Nitin Gadkari se milne ke liye New Delhi bulaya, aur uske baad Kendra ne kaam swikrit kiya. NHAI ke adhikari aur aas-paas ke gaon ke nivasi karyakram me maujood the. Swikriti Kendra/NHAI ki hai, MLA ne maang aur follow-up me vyaktigat bhoomika nibhayi (credit capped). Fund: KLLADS se koi ghoshna nahi.',
    period: '2023-2028',
  },
];
// REJECT-LOG (abbayya-prasad):
// - 'Bhoo Suraksha' land-record digitalisation inauguration, Mini Vidhana Soudha Hubballi (The Hindu, published 2024-02-10, event 'on Saturday' = 2024-02-10, source https://www.thehindu.com/news/national/karnataka/now-public-can-get-their-records-anytime-ksdb-chairman-prasad-abbayya/article67832878.ece/amp/) — REJECT: abhiyan/shubharambh of a process, not a bhautik sarkari sanrachna lokarpan.
// - Prajaseva Andolan inauguration, Old Hubballi (TOI, ~Sep 2026, https://timesofindia.indiatimes.com/city/hubballi/prajaseva-drive-launched-in-hubballi-mla-stresses-doorstep-governance/articleshow/134145654.cms) — REJECT: campaign shubharambh.
// - KLE JGMM medical college/hospital inauguration (TOI, ~Sep 2026, https://timesofindia.indiatimes.com/city/hubballi/union-min-inaugurates-kle-medical-college-hospital-in-hubballi/articleshow/134358116.cms) — REJECT: mere attendance as guest; Union Minister inaugurated.
// - Pulse polio programme launch at Namma Clinic, SS Krishna Nagar (TOI, ~Dec 2025, https://timesofindia.indiatimes.com/city/hubballi/pulse-polio-programme-launched-in-hubballi-to-ensure-child-health-and-development/articleshow/126107852.cms) — REJECT: abhiyan launch.
// - KSDB chairman spot inspection / encroachment-clearance drive on New English School–Indi Pump Circle Road (The Hindu, published 2024-08-10, https://www.thehindu.com/news/national/karnataka/ksdb-chairman-asks-officials-to-clear-encroachments-on-hubballi-road/article68509941.ece) — REJECT: nirikshan/daura; new bridge Rs 12cr only proposed (detailed plan submitted, approval awaited); 100-bed super-speciality hospital visit = inspection.
// - Old Hubballi road-widening (New English School to Indi Pump Circle, est Rs 5.7cr) survey/valuation stage (ET Infra, published 2026-10-07, https://infra.economictimes.indiatimes.com/news/roads-highways/old-hubballi-to-undergo-major-road-widening-1-2-km-stretch-to-expand-for-better-traffic-flow/124360221) — REJECT: project at survey/proposal stage, no lokarpan/shilanyas by MLA.
// - 42,345 PMAY house distribution event off Mantur Road, Hubballi (The Hindu, published 2026-01-24, https://www.thehindu.com/news/national/karnataka/42345-pm-awas-yojana-houses-to-be-distributed-in-hubballi/article70543067.ece) — REJECT: state-level programme symbolically inaugurated by CM; MLA's role only preparatory (venue visits) — badi pariyojna bina vyaktigat lokarpan-bhoomika.
// - KSDB Mantur Road 1,300 houses progress review, 30-bed community health centre announcement, Janata Bazar/Ganeshpet fish market stall allotment plan (The Hindu, published 2026-09-28, https://www.thehindu.com/news/national/karnataka/550-of-1300-ksdb-houses-will-be-inaugurated-soon-abbayya/article68694599.ece) — REJECT: nirikshan + ghoshna/maang, no inaugurated structure.
// - Multi-level car parking by demolishing historic Kannada school, Hubballi (lokmattimes.com, 2026-01-12, https://www.lokmattimes.com/national/move-to-demolish-historic-kannada-school-for-multi-level-car-parking-draws-flak/amp/) — REJECT: proposal/DPR stage + draws flak; source also not whitelisted (auto-published feed).
// - Old Hubballi 100-bed hospital → taluk hospital handover advocacy (TOI, 2026-05; https://timesofindia.indiatimes.com/city/hubballi/old-hubballi-hospital-all-set-to-get-taluk-hospital-status/articleshow/121522100.cms and https://timesofindia.indiatimes.com/city/hubballi/old-hubballi-hospital-handover-stuck-in-formalities/articleshow/123749984.cms) — REJECT: salah/mandate (letter to HDMC), formalities not initiated; maang/prastav, no inaugurated structure.
// - Ward 65 CC road, Gurusiddheshwar Nagar, CM special grant (panasiabiz.com, 2026-10-10, https://panasiabiz.com/117573/hubballi-ward-65-cc-road-gurusiddheshwar-nagar/) — REJECT: source not whitelisted (aggregator); no whitelisted corroboration found.
// - Ministerial-berth protests/violence for Abbayya (The Hindu Jun 2026; auzz.news) — REJECT: political demand, not a work; no party action anyway.
// - Cricket betting racket case (The Hindu, 2016) — REJECT: pre-May 2023.
// - HC quashes transfer of brother Keshav Abbayya to KMCRI on MLA's recommendation (The Hindu, published Dec 2025, https://www.thehindu.com/news/national/karnataka/karnataka-high-court-quashes-transfer-of-hubballi-dharwad-east-mla-prasad-abbayyas-brother-to-kmcri-on-his-recommendation-to-minister/article70403136.ece) — REJECT as negative: parivar ka mamla; no FIR/chargesheet against MLA himself; court quashed administrative order, no accused status, no disclosed response.
// - Fund note: KLLADS 'Rs 2cr/seat/varsh' — is worker ko kisi bhi Abbayya-source me KLLADS ka amount vyaktigat seat-wise disclose nahi mila; both entries me fund 'ghoshit nahi' hai (police-station entry me renovation amount police commissioner ne diya, renovation ke liye, KLLADS nahi).
// - Party change: NIL — woh May 2023 se lekar Oct 2026 tak lagatar INC me hain (cabinet-berth coverage The Hindu Jun 2026, Wikipedia). Koi party-badlav nahi.
// RETRY-LEADS: none open — all leads resolved. (TOI police-station date inferred from '463 days ago' + 'on Sunday' => 2025-07-13; noted in reasoning.)
karnatakaWorks['abbayya-prasad'] =  [
{
    title: 'Prasad Abbayya ne 12 May 2025 ko Hubballi-Dharwad East Assembly kshetra me paanch naye Namma Clinic outlets (M. Aralikatti, Soniya Gandhi Nagar, Padadayyana Hakkala, Medar Oni, Janglipet Waddar Oni) ka vyaktigat lokarpan kiya.',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/five-namma-clinics-opened-in-hubballi/article69567984.ece',
    date: '2025-05-12',
    note: 'MLA aur KSDB chairman ke roop me paancho clinics ka vyaktigat lokarpan; clinics Hubballi-Dharwad East seat me hain. Source ke mutabik Congress sarkar ne paanch clinics sanction kiye, lekin koi rashi nahi di gayi, isliye fund ghoshit nahi.',
    period: '2023-2028',
  },

{
    title: 'Prasad Abbayya ne Old Hubballi thane ka uske asthayi sthan Babu Jagjivan Ram Community Hall par lokarpan kiya, jab tak mukhya bhavan ka punarnirman ho raha hai.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/old-hubballi-police-station-shifted-due-to-renovation/articleshow/122421780.cms',
    date: '2025-07-13',
    note: 'Purane station ko renovation ke liye sthanantarit kiya gaya aur MLA ne naye sthan par station ka lokarpan kiya. Police commissioner ke mutabik renovation Rs 5 crore me 11 mahine me poora hona hai. (Reasoning: article ki date page par nahi dikhi; search metadata me “463 days ago” plus “on Sunday” se 2025-07-13 inferred — ye Sunday tha.)',
    period: '2023-2028',
  },

];
// REJECT-LOG (mahesh-tenginakai)
// Seat: Hubli-Dharwad Central | Party: BJP | Karyakaal: May 2023+
// ---
// R1. The Hindu, 2026-05-09 — "Central grants to be sought for Rs 100 cr road development" (https://www.thehindu.com/news/national/karnataka/central-grants-to-be-sought-for-100-cr-road-development-says-mla-mahesh-tenginakai/article70357905.ece/amp/) — sirf prastav/maang; proposal "soon will be submitted" stage — pre-event/maang, REJECT.
// R2. TOI, hubballi city — "Vacate Hubballi Suburban police stn for flyover project: MLA" (https://timesofindia.indiatimes.com/city/hubballi/vacate-hubballi-suburban-police-stn-for-flyover-project-mla/articleshow/125699850.cms) — review meeting me police ko building vacate karne ka nirdesh — nirikshan/daura category, REJECT.
// R3. TOI, Dec 2025 — "Build Expo–2025 inaugurated" (https://timesofindia.indiatimes.com/city/hubballi/build-expo2025-inaugurated/articleshow/126193613.cms) — ACCE/Turbo Steel exhibition ka inauguration — abhiyan/event ka shubharambh, bhautik sanrachna nahi, REJECT.
// R4. TOI — "MLA seeks to plug wastewater inflow for lake development" (https://timesofindia.indiatimes.com/city/hubballi/mla-seeks-to-plug-wastewater-inflow-for-lake-development/articleshow/118364725.cms) — Nagashetty Koppa lake ka nirikshan + adhikariyon ko nirdesh — nirikshan, REJECT.
// R5. Deccan Herald — "Plans afoot to breathe new life into four major lakes in Hubballi" (https://www.deccanherald.com/india/karnataka/plans-afoot-to-breathe-new-life-into-four-major-lakes-in-karnatakas-hubballi-4096097) — sirf yojana (Rs 3.3cr/2.5cr/3.1cr/2.25cr lakhs) — ghoshna stage, kaam shuru nahi, REJECT.
// R6. The Hindu, ~Feb 2025 — "Tenginakai upset over slow pace of tank renovation work initiated four years ago" (https://www.thehindu.com/news/national/karnataka/tenginakai-upset-over-slow-pace-of-tank-renovation-work-initiated-four-years-ago/article69234797.ece) — Nagashettikoppa tank ka nirikshan + adhikariyon ko fatkaar — nirikshan/shikayat, REJECT.
// R7. The Hindu — "PM-VBRY aimed at encouraging employees, employers: Mahesh Tenginakai" (https://www.thehindu.com/news/national/karnataka/pm-vbry-aimed-at-encouraging-employees-employers-mahesh-tenginakai/article71126001.ece) — EPFO outreach programme me shirkat — event, REJECT.
// R8. The Hindu, 2026-05-23 — "Hubballi Dharwad Central MLA tells officials to facilitate export of mangoes grown in region" (https://www.thehindu.com/news/national/karnataka/hubballi-dharwad-central-mla-tells-officials-to-facilitate-export-of-mangoes-grown-in-region/article71015035.ece) — Mango Mela-2026 ka inauguration — mela/event, REJECT.
// R9. TOI — "Union minister Pralhad Joshi inaugurates water sports at Unkal lake" (https://timesofindia.indiatimes.com/city/hubballi/union-minister-pralhad-joshi-inaugurates-water-sports-at-unkal-lake/articleshow/124197525.cms) — Union Minister Joshi ke karyakram me MLA ki maujoodgi — dusre neta ka kaam, REJECT.
// R10. The Hindu story (2026-05-09) me Rs 13 cr "additional grants" — Gadkari ne delegation ki maang par swikrit ki; delegation Union Minister Pralhad Joshi ke netritva me gaya; cited page par MLA ka vyaktigat role/pratinidhimandal me upasthiti spasht nahi — credit attributable nahi, REJECT.
// R11. The Hindu, 2024-06-14 — blood donation camp/jatha ka inauguration + flag-off — event, REJECT.
// R12. The Hindu, 2023-09-27 — World Tourism Day programme (Horatti ne kiya udghatan; MLA ne zip line ki baat ki) — maang/speech, REJECT.
// R13. Hindustan Times — Hampi rape case par sarkar ki alochna (PTI) — rajnaitik bayan, REJECT.
// R14. ETV Bharat (Oct 2026) — sugarcane farmers ke Delhi flight tickets — M.R. Patil ne apne kharch par book kiye (dusre MLA); Tenginakai sirf saath ja rahe hain — niji kharch + dusra neta, REJECT.
// R15. panasiabiz — GopanKoppa College 40th anniversary me shirkat — non-whitelisted chhota portal + maujoodgi, REJECT.
// R16. techwordnews — elevated road progress review — non-whitelisted + nirikshan, REJECT.
// ---
// NEGATIVES: established media me Mahesh Tenginakai par May 2023+ ka koi FIR/chargesheet/janch nahi mila. pune.news wala piece MLA dwara Assembly me FIR uddhrit karna hai (woh aaropi nahi). Halafnama ya parivaar ke mamle ke tathya nahi mile. Party-badlav: koi nahi (2023 me BJP ticket par jeete, ab bhi BJP).
karnatakaWorks['mahesh-tenginakai'] =  [
{
    title: 'MLA Mahesh Tenginakai ne 8 May 2026 ko Hubballi me IT Park ke saamne wali concrete road ka bhoomi puja kiya aur kaha ki road ka kaam chaar mahine me poora hoga.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/flyover-will-be-opened-for-traffic-by-december-end-mla/article70956246.ece',
    date: '2026-05-08',
    note: 'The Hindu ke anusaar, elevated road kaam ke nirikshan ke dauraan MLA Mahesh Tenginakai ne Hubballi me IT Park ke saamne wali concrete road ka bhoomi puja kiya; unhone kaha ki road ka kaam chaar mahine me poora hoga. Road ki lagat srot me ghoshit nahi. Note: isi khabar me Kittur Chennamma Circle elevated road ke neeche concrete roads ke liye Nitin Gadkari dwara swikrit Rs 13 cr additional grants ka zikr hai — woh delegation Union Minister Pralhad Joshi ke netritva me gaya tha, MLA ki vyaktigat bhoomika srot me spasht nahi, isliye usko credit ke roop me nahi joda gaya.',
    period: '2023-2028',
  },

];
// REJECT-LOG (aravind-bellad):
// - Wrestling/gym hall bhoomi pooja, Dharwad District Stadium, Rs 1 crore, 11 Sep 2026 — hubballitimes.com (NON-WHITELISTED: chhota Kannada portal). Fund-role lead hai; whitelisted source par coverage mile to dobara kholo. Possible seat-bahar (Dharwad town).
// - Jayadeva Hospital inspection, Hubballi (TOI, Feb 2025) — NIRI KSHAN/daura only; badi pariyojna (Rs 250 cr, PM ne foundation stone rakha) bina vyaktigat bhoomika.
// - Devragudihal road, Rs 6 crore grant (The Hindu, Oct 2025) — grant Congress sarkar ke baad release; Bellad ka vyaktigat shrey vivaadit/khandit; koi lokarpan/shilanyas unke dwara nahi.
// - Hubballi international-class sports complex, Lohia Nagar, Rs 175 crore (TOI, May 2025) — Smart City project, Union min Pralhad Joshi ne deadline di; Bellad ki bhoomika sirf charcha/meeting me; badi pariyojna bina vyaktigat bhoomika.
// - Dharwad multi-facility sports complex (CSR Rs 50 crore, The Hindu) — Union ministers ne inaugurate kiya; Bellad ki bhoomika nahi.
// - Bantara Sangha golden jubilee inauguration (TOI) — samudaayik utsav; bhautik sarkari sanrachna NAHI.
// - 'Dharwad's Role in Indian Freedom Struggle' exhibition (TOI, ~Aug 2024) — expo udghatan; infrastructure NAHI.
// - Rajyotsava tableau procession flag-off (TOI, Nov 2023) — utsav; infrastructure NAHI.
// - Dharwad/Hubballi city bus terminals inauguration (TOI) — Bellad ne sirf date batayi; transport minister ne udghatan kiya.
// - CBT Dharwad visit/grievances (publicnext.com, Dec 2025) — nirikshan; source bhi non-whitelisted.
// - Bellad letter to CS for probe into Hubballi event (The Hindu, Oct 2025) — pad-karya/prakriya; koi bhautik kaam nahi.
// - Infosys credit-claim war-of-words as standalone — keval daava/vivad nahi liya; sirf Assembly-demand + dastaveji nateeja (entry 2) liya gaya.
// - Jan 3, 2024 courted arrest, Hubballi protest (The Hindu) — khud giraftari di (vi rodh), FIR me AAROP NAHI; negative criteria poora nahi hota.
// - Phone-tapping allegation (New Indian Express, Jun 2021) — Bellad SHIKAYATKARTA tha, aaropi nahi; aur May 2023 se pehle.
// - Party-badlav: koi nahi mila; Bellad May 2013 se lagatar BJP.
// - Dy LoP pad (25 Dec 2023 se) — Assembly records se pakka (Karnataka Legislative Assembly pages + multiple Assembly-reporting articles); pad-ke-office functions works me GINE NAHI.
// - KLLADS fund: kisi whitelisted srot ne is karyakaal me vyay ka ghoshit vivaran nahi diya — 'ghoshit nahi'.
//
// RETRY-LEADS (aravind-bellad):
// 1. Wrestling hall + gym hall bhoomi pooja, Dharwad District Stadium (Rs 1 crore, Dept of Youth Empowerment and Sports, 11 Sep 2026) — abhi sirf hubballitimes par; The Hindu/Deccan Herald/TOI par coverage mile to entry banao.
// 2. 'Sports complex in my constituency in Hubballi' — Bellad ne TOI (2025) me kaha ve Hubballi me apne constituency me sports complex bana rahe hain; koi lokarpan/shilanyas-report nahi mili. Coverage mile to kholo.
karnatakaWorks['aravind-bellad'] =  [
{
    title: 'Arvind Bellad ne 20 Jan 2024 ko Navanagar, Hubballi me Rs 3 crore ke HD-BRTS hi-tech traffic park ka shilanyas kiya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/hi-tech-traffic-park-project-of-hd-brts-hits-a-roadblock/articleshow/118653291.cms',
    date: '2024-01-20',
    note: 'TOI ke anusaar, MLA Arvind Bellad ne 20 Jan 2024 ko pariyojna ka shilanyas kiya. Rs 3 crore ki pariyojna, Bengaluru ke directorate of urban land transport se swikrit, Navanagar BRTS bus stop ke paas HDMC ki 7,250 sq m zameen par banegi — bachchon ko yatayat-niyam, sanket aur sadak-suraksha sikhane ke liye; Jan 2024 me nirman shuru hua lekin thekedaar aur drawing me dikkaton se vilamb report hua.',
    period: '2023-2028',
  },

{
    title: 'Vidhansabha me Bellad dwara Infosys ke poore na hue rozgar-ke-vaadon ko uthane ke baad, Infosys ne Jun 2024 me apne Hubballi vikas-kendra ke liye sthanantaran-protsahan ghoshit kiye (shrey capped aur vivaadit).',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu BusinessLine',
    sourceUrl: 'https://www.thehindubusinessline.com/info-tech/bjp-mla-bellad-claims-credit-for-infosys-huballi-shift-former-cfo-criticices-move/article68302793.ece/amp/',
    date: '2024-06-18',
    note: 'BusinessLine ke anusaar, Bellad ne Infosys ke rozgar-pratibaddhata poori na karne ka mudda Vidhansabha me uthaya tha — uske lagbhag chaar mahine baad Infosys ne (17 Jun 2024) apne 50-acre, 5,000-kshamta wale Hubballi vikas-kendra me sthanantarit hone wale karmiyon ko Rs 8 lakh tak ke protsahan ghoshit kiye. Infosys ke purva CFO Mohandas Pai ne shrey ko chunauti di, kaha ki shift anya karanon se hui aur Bellad ki aalochna ne logon ko dara diya; Infosys ne tippani se inkaar kiya. Kaaran-sambandh sthapit nahi; shrey capped.',
    period: '2023-2028',
  },

];
// REJECT-LOG (santosh-lad, Kalghatgi, INC; mantri Shram/Labour; term May 2023+):
// 1. IBC World News, 2025-09-08 — "Library to Be Established for Rs 2.2 Cr" — Lad laid foundation stone for new library near Yuva Shakti Circle, Kalaghatgi town, under Town Panchayat Urban Upgradation Project. REJECT: source not in whitelist (ibcworldnews.com).
// 2. The Hindu (article70213848.ece), ~2025-10 — "Over 3,000 applications disposed of in 17 Janata Darshan events, says Lad" — Lad inaugurated 18th Janata Darshan in Kalghatgi. REJECT: grievance meeting inauguration, not a physical structure.
// 3. The Hindu (article66977080.ece), 2023-06-16 — review meeting on Dharwad drinking water; Bedti Nala feasibility study asked. REJECT: maang/prastav (feasibility study only), no documented outcome.
// 4. Times of India (articleshow/105304414.cms), 2023-11 — inaugurated 70th All India Cooperative Week programme at Kalghatgi. REJECT: event inauguration, not physical infra.
// 5. Times of India (articleshow/129907188.cms), ~2026-03 — Machapur village hailstorm relief; 50,000 roof tiles via Santosh Lad Foundation. REJECT: CSR/daan/rahat/niji kharch (private foundation relief).
// 6. Times of India (articleshow/121462465.cms), ~2025-05 — Rs 200 crore desilting of Benne Halla/Tuppari Halla. REJECT: Hubballi taluk = seat-bahar ka kaam; also announcement/pre-event.
// 7. Times of India (articleshow/124323536.cms), ~2025-10 — laid foundation stone for Rs 10 crore HDMC/PWD/Hescom works, Ward 34 Vishal Nagar, Hubballi. REJECT: seat-bahar (Hubballi city).
// 8. publicnext.com, 2025-12-31 — Balageri bridge (Benachi, Alnavar) Rs 2 crore work started "on special interest of Minister Santosh Lad". REJECT: source not whitelisted (publicnext.com).
// 9. newsable.asianetnews.com, 2026-05-13 — Kalaghatgi 24/7 water supply Rs 35.38 crore "from June 15" announcement. REJECT: source not whitelisted + pre-event announcement.
// 10. hubballitimes.com, 2025-05 — mobile health clinic vehicles flagged off in Dharwad. REJECT: source not whitelisted + department-level scheme, not Kalghatgi-seat work.
// 11. publicnext.com, 2024-09-24 — sugar factory promise for Kalaghatgi farmers unfulfilled (15-year-old promise). REJECT: source not whitelisted + ghoshna (promise, not done).
// 12. Times of India (articleshow/85360650.cms), 2021 — mega flag procession FIR (Covid norms), Kalghatgi. REJECT: pre-term (2021, karyakaal May 2023+); FIR was against organisers, not Lad personally.
karnatakaWorks['santosh-lad'] =  [];

// --- Gadag ---

// REJECT-LOG (chandru-lamani):
// 1. 18 BJP MLAs ka 6-month suspension (The Hindu/Hindustan Times/PTI, 21 March 2025, revocation May 2025): collective legislative disciplinary action thi — koi FIR/chargesheet/janch nahi, MLA khud aaropi nahi; negative criterion pura nahi hota. REJECT.
// 2. Free SSLC coaching camp (newindianexpress.com, 1 June 2025): pichhle 5 saalon se chalti Lamani Fans' club ki niji pehel; bhautik sarkari sanrachna nahi, fund disclosed nahi — CSR/daan shreni me REJECT.
// 3. SKDRDP silicon chamber at Shirahatti crematorium (skdrdpindia.org, 23 Sep 2025): source whitelist me nahi (NGO site); MLA sirf 'presence' me maujood tha, vyaktigat bhoomika disclosed nahi. REJECT.
// 4. Kannada Sahitya Sammelana logo unveiling (publicnext.com, 7 Feb 2026): whitelist se bahar aggregator; abhiyan/event shubharambh, koi work nahi. REJECT.
// 5. Conditional bail (yespunjab.com/lokmattimes.com, 11 March 2026): source whitelist me nahi, page khola bhi nahi gaya; Sirf case ka stage-update hai. REJECT (retry-lead me bhi nahi — negative entry already verified hai).
// PARTY CHANGE: koi nahi mila (2023 se BJP hi).
// RETRY-LEADS: The Hindu arrest article (fetch par 403 — baad me retry):
//   https://www.thehindu.com/news/national/karnataka/karnataka-bjp-mla-chandru-lamani-arrested-for-accepting-5-lakh-bribe/article70659968.ece/amp/
karnatakaWorks['chandru-lamani'] =  [
{
    title: 'Shirahatti ke BJP MLA Chandru Lamani ko Lokayukta police ne Rs 5 lakh bribe lete hue pakadkar arrest kiya; Minor Irrigation Department ke kaam ke liye Rs 11 lakh maangne ka aarop.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/karnataka/2026/Feb/21/lokayukta-police-arrest-bjp-mla-his-two-pas-while-accepting-rs-5-lakh-bribe-in-gadag',
    date: '2026-02-21',
    note: 'Karnataka Lokayukta police ne 21 February 2026 ko Shirahatti (Gadag) ke BJP MLA Chandru Lamani aur unke do personal assistants (Manjunath Valmiki, Gurunaik) ko Rs 5 lakh bribe accept karte hue arrest kiya. Official statement ke anusaar unhone complainant Vijay Pujar (class-1 contractor, Chincholi, Gadag) se Minor Irrigation Department ke construction work — sadak ke dono taraf retaining wall — ke liye Rs 11 lakh bribe maangi thi. Lokayukta police ne Prevention of Corruption Act ke tehat crime register kiya, trap lay karke giraftari ki, aur further investigation underway hai.',
    period: '2023-2028',
  },

];
// REJECT-LOG (h-k-patil): H. K. Patil (Gadag, INC; Law/Parliamentary Affairs mantri)
// R1. The Hindu, 2025-06-04 — "Plan unveiled for comprehensive development of Gadag-Betageri": Gadag-Betageri Business, Culture and Exhibition Authority ka plan unveiling; actual inauguration Rahim Khan ne kiya; Rs 500 cr sirf plan figure (yojna/ghoshna, bhautik sanrachna ka lokarpan nahi). REJECT.
// R2. The Hindu, 2025-06-04 — "Laying emphasis on skill development, CM inaugurates G-NTTF in Gadag": lokarpan CM Siddaramaiah ne kiya; Patil sirf upasthit/CM ne unke prayason ki sarahna ki. REJECT (dusre neta ke karyakram me maujoodgi).
// R3. The Hindu, 2023-11-02 — "Monolithic pillar in Gadag to mark Karnataka-50": Karnataka Suvarna Stambha ka unveiling CM ne agle din kiya; Patil ne sirf puja ki. REJECT (CM ka lokarpan).
// R4. The Hindu, 2023-09-02 — "Gadag gets state-of-the-art synthetic turf hockey stadium": dedicate H. C. Mahadevappa ne kiya; Patil ne adhyakshata ki. REJECT (dusre mantri ka karyakram).
// R5. ibcworldnews.com, 2026-05-26 — Rs 1 cr CC road works (Ward 34/35, Kalasapur Road), Rs 5 lakh gym equipment, Anganwadi building inauguration: source whitelist me NAHI. REJECT (non-whitelist). RETRY-LEAD: whitelisted outlet me cross-check layak.
// R6. ibcworldnews.com, 2026-05-01 — Anganwadi centres Ward 21/22/27, SCP/TSP commercial shops, Gangimadi model Anganwadi shilanyas: source whitelist me NAHI. REJECT (non-whitelist). RETRY-LEAD: whitelisted outlet me cross-check layak.
// R7. publicnext.com, ~2025-11 — Kanivi village works (playground, GP sub-office Rs 41 lakh, school rooms Rs 18 lakh, Ambedkar Bhavan Rs 33 lakh): source whitelist me NAHI. REJECT (non-whitelist). RETRY-LEAD: whitelisted outlet me cross-check layak.
// R8. Sep-Oct 2026 drought-hit ultimatum coverage (ANI/freepressjournal/asianet/publictv/lokmattimes): Gadag ko drought-hit ghoshit karne ki maang/resign ki dhamki — maang, kaam nahi. REJECT.
// R9. bharathorizon.com — Veeranna P Beelagi ne Patil ko Facebook video me dhamki di (FIR Patil ke khilaf NAHI, Patil victim/complainant side; source bhi non-whitelist). REJECT (negative valid nahi).
// R10. Indian Express, 2025-07-02 — illegal mining cases par Patil-led subcommittee: vibhagiya mantri karya, seat ka bhautik kaam nahi. REJECT.
// NEGATIVE check: May 2023+ me H. K. Patil KHUD aaropi ho — aisa FIR/chargesheet/janch ya nyayik vikas whitelisted media me NAHI mila. Negative entries: 0.
// REASONING (inferred date): TOI Lakkundi article me event "on Saturday" aur search metadata "170 days ago" — 2026-10-19 se 170 din pehle = 2026-05-02, jo Saturday hai; isliye date 2026-05-02 (inferred).
karnatakaWorks['h-k-patil'] =  [
{
    title: 'Mantri H. K. Patil ne Gadag taluk ke Mallasamudra gaon me talab-vikas ke liye bhoomi puja ki, jiske liye Rs 62 lakh ka grant diya gaya hai',
    category: 'Any', badge: 'news',
    sourceLabel: 'The Hindu', sourceUrl: 'https://www.thehindu.com/news/national/karnataka/hk-patil-initiates-various-development-works-in-gadag-district/article69777326.ece/amp/',
    date: '2025-07-05',
    note: 'The Hindu ke anusaar, mantri ne Gadag jile ke Mallasamudra gaon me talab ke vikas ke liye bhoomi puja ki, jiske liye Rs 62 lakh ka grant diya gaya hai; unhone nagrikon se nidhi ka sahi istemal aur bhoo-jal recharge me sahyog ki appeal ki.',
    period: '2023-2028',
  },

{
    title: 'Mantri H. K. Patil ne Mallasamudra me Dr. A.P.J. Kalam Residential School ke school bhavan aur pustakalaya ke nirman ke liye bhoomi puja ki, jiske liye Rs 7.33 crore ka grant hai',
    category: 'Any', badge: 'news',
    sourceLabel: 'The Hindu', sourceUrl: 'https://www.thehindu.com/news/national/karnataka/hk-patil-initiates-various-development-works-in-gadag-district/article69777326.ece/amp/',
    date: '2025-07-05',
    note: 'The Hindu ke anusaar, mantri ne usi gaon me Dr. A.P.J. Kalam Residential School ke school bhavan aur pustakalaya ke nirman ke liye bhoomi puja ki, jiske liye Rs 7.33 crore ka grant diya gaya hai.',
    period: '2023-2028',
  },

{
    title: 'Mantri H. K. Patil ne Mallasamudra me State highway se District Armed Reserve Police karyalay tak 1.6 km sadak ke liye bhoomi puja ki; RDPR se Rs 1 crore aur apni sthaniya kshetra-vikas nidhi se Rs 50 lakh unhone swikrit kiye',
    category: 'Any', badge: 'news',
    sourceLabel: 'The Hindu', sourceUrl: 'https://www.thehindu.com/news/national/karnataka/hk-patil-initiates-various-development-works-in-gadag-district/article69777326.ece/amp/',
    date: '2025-07-05',
    note: 'The Hindu ke anusaar, mantri ne 1.6 km sadak ki bhoomi puja ki; RDPR vibhag ne Rs 1 crore ka grant jaari kiya aur Patil ne apni local area development fund se Rs 50 lakh swikrit kiye. Srot me varshik LAD nidhi ki kul rashi nahi hai, isliye KLLADS ka varshik kul dawa nahi kiya gaya.',
    period: '2023-2028',
  },

{
    title: 'Paryatan mantri H. K. Patil ne Lakkundi me chhah smarakon ke sanrakshan-vikas karyon ka shilanyas kiya aur das kuon/mandiron ka anavaran kiya; Rs 10.2 crore mad-var jaari',
    category: 'Any', badge: 'news',
    sourceLabel: 'Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/lakkundi-will-be-made-a-leading-archaeological-centre-tourism-minister-hk-patil/articleshow/130721796.cms',
    date: '2026-05-02',
    note: 'Times of India ke anusaar, Patil ne chhah smarakon ke sanrakshan-vikas karyon ka udghatan, 10 kuon aur mandiron ka anavaran aur Lakkundi me puratatvik anveshan saptah ka shubharambh kiya; Rs 10.2 crore jaari hue — Halagundi ke Basaveshwara Mandir ko Rs 1.6 cr, Kanner Well ko Rs 1.7 cr, Mallikarjuna Mandir ko Rs 1.7 cr, Virupaksheshwara Mandir ko Rs 1.8 cr, Chandramouleshwara Mandir ko Rs 1.8 cr aur Kalmath Gate and Well ko Rs 1.5 cr. Karyakram ki tithi 2026-05-02 inferred hai (upar REASONING dekhein); Lakkundi Gadag taluk me Gadag Assembly seat ke andar hai.',
    period: '2023-2028',
  },

];
// REJECT-LOG (gurupadagouda-patil): Gurupadagouda Sanganagouda Patil (G.S. Patil), Ron, INC — 4-time MLA (1989/1999/2013/2023); Karnataka Assembly Speaker since 14 Aug 2026. Term window checked: May 2023+.
// - Speaker election coverage (PTI via ThePrint 2026-08-14 https://theprint.in/india/cong-mla-g-s-patil-elected-karnataka-assembly-speaker/3014529/?amp ; The Week 2026-08-14 https://www.theweek.in/news/india/2026/08/14/who-is-g-s-patil-meet-the-new-speaker-of-karnataka-assembly.amp.html ; Deccan Chronicle 2026-08-14 https://www.deccanchronicle.com/southern-states/karnataka/gs-patil-elected-karnataka-assembly-speaker-1979083): political post, Assembly office function — REJECT per task (Speaker ke pad-karye works NAHI).
// - The Hindu 2026-07-05 "H.K. Patil initiates various development works in Gadag district" (https://www.thehindu.com/news/national/karnataka/hk-patil-initiates-various-development-works-in-gadag-district/article69777326.ece/amp/): G.S. Patil present ONLY as attendee ("Chairman of Minerals Development Corporation and MLA G.S. Patil ... were present") at H.K. Patil's (Gadag MLA) works inauguration — dusre neta ke karyakram me maujoodgi — REJECT. (H.K. Patil = alag vyakti, Gadag seat; works uske the, G.S. Patil ke nahi.)
// - Daijiworld profile 2026-08-14 (https://www.daijiworld.com/index.php/news/newsDisplay?newsID=1322759): lists lakes, GTTC/polytechnic sanction, Malaprabha barrage, roads — source whitelist me NAHI + described works purane karyakaal ke hain (S.M. Krishna CM era / 1989-2004 terms), May 2023+ ka kuch nahi — REJECT.
// - Drought-list items (TOI/newindianexpress Sep-Oct 2026): H.K. Patil (Gadag MLA) ki maang/threat; Ron taluk listed as drought-affected but that was H.K. Patil's pressure, not G.S. Patil's works — REJECT.
// - Negatives search: "RD Patil"/"Rudragowda Patil" exam-scam cases (Kalaburagi, KCOCA) = DUSRA vyakti, Gurupadagouda se sambandh nahi — koi negative nahi mila.
// - Party: INC consistently (1989, 1999, 2013, 2023; Wikipedia/PRS/PTI) — koi party-badlav nahi.
// - May 2023+ ke Ron-seat works par whitelisted sources (The Hindu/IE/HT/NDTV/India Today/TOI/Deccan Herald/PTI) me koi vyaktigat lokarpan, shilanyas, sanction, GO, ya itemized list nahi mili. Fund: ghoshit nahi.
karnatakaWorks['gurupadagouda-patil'] =  [];
// REJECT-LOG (c-c-patil): leads srot+date ke saath
// 1. ibcworldnews.com 2025-08-28: 'MLA CC Patil Demands NIA Probe into Dharmasthala Case' — protest at Shivaji Circle, Naragund demanding NIA takeover. Political demand/protest, not a work. Source not whitelisted either.
// 2. publicnext.com 2025-05-22: Jan Aushadhi Kendra event at Gadag — C.C. Patil listed as merely 'present'. Mere presence at another's programme; source not whitelisted.
// 3. ibcworldnews.com 2026-09-29: 'BJP workers stage protest over Gadag water crisis' — protest led by C.C. Patil in Gadag city. Protest = demand, not a work; Gadag city is Gadag seat (H.K. Patil), outside Nargund seat; source not whitelisted.
// 4. countryandpolitics.in 2025-07-19: DISHA committee meeting Gadag — C.C. Patil 'held in-depth discussions' on water supply with MP Basavaraj Bommai. Review meeting discussion, not a work; source not whitelisted.
// 5. infra.economictimes.indiatimes.com 2021-09-06: as PWD minister flagged off Rs 517 crore Chitradurga-Shivamogga highway. PRE-PERIOD (before May 2023); ministerial/statewide, not Nargund-seat work.
// 6. newindianexpress.com 2022-04-20: 'Will clear pending bills worth Rs 4k crore: PWD Minister CC Patil'. PRE-PERIOD; ministerial statement, not Nargund-seat work.
// 7. Drought stories Sep-Oct 2026 (siasat.com, asianetnews.com, deccanchronicle.com, lokmattimes.com): the resigning/ultimatum MLA 'Patil' is Yashwanthrayagowda Patil (Indi, Congress) and the Gadag drought-demand MLA is H.K. Patil (Gadag, Congress). DIFFERENT PERSONS, not C.C. Patil (Nargund, BJP).
// 8. thenamesdictionary.com reference to 'Karnataka video clip controversy' (Feb 2012, ministers allegedly watching clips on mobile in Assembly). PRE-PERIOD by 11+ years; halafname-era matter alone; no May 2023+ judicial development.
// 9. trends.glance.com (news18 syndication) 'K'taka Assembly adopts resolutions' — 'Patil' cited on ethanol/Mahadayi resolutions is not C.C. Patil; assembly-resolution participation is not a personal Nargund-seat work.
// POSITIVE leads from whitelisted media post-May 2023: NONE FOUND (C.C. Patil is an opposition MLA since May 2023; whitelisted coverage is political/demand-type only).
// NEGATIVES: NONE. 2023 election affidavit (myneta.info) shows 0 criminal cases declared; no May 2023+ FIR/chargesheet/investigation naming him as accused in established media.
// PARTY-BADLAV: none — BJP throughout (2018, 2023 wins from Nargund).
// RETRY-LEADS: none.
karnatakaWorks['c-c-patil'] =  [];

// --- Hassan ---

// REJECT-LOG (c-n-balakrishna):
// 1. The Hindu — "JD(S) MLA alleges discrimination by Karnataka govt. in granting funds for development works" (article ID 69909422; date not verified — direct fetch returned HTTP 403; from search metadata ~Aug 2025). REJECT: fund demand/complaint, not a work. MLA C.N. Balakrishna told media in Hassan he had received no development funds for his constituency — a grievance, not a lokarpan/shilanyas/sanction.
// 2. Times of India (Mysuru) — "Statue installation ceremony of Jain monk at Shravanabelagola on Nov 9" (https://timesofindia.indiatimes.com/city/mysuru/statue-installation-ceremony-of-jain-monk-at-shravanabelagola-on-nov-9/articleshow/125093248.cms). REJECT: pre-event announcement (published before Nov 9, 2025) + mere presence — local MLA C.N. Balakrishna listed only as an attendee at the VP-led ceremony. Not his project, no personal role disclosed.
// 3. publicnext.com — "Non-bailable warrant issued for Magadi MLA Balakrishna". REJECT: different person — H.C. Balakrishna, Congress MLA from Magadi constituency, not C.N. Balakrishna of Shravanabelagola. Also non-whitelisted source.
// 4. ThePrint (PTI feed) / urallnews.com — "Guarantee schemes made finances harder to manage, says Karnataka minister". REJECT: different person — H C Balakrishna, Karnataka minister holding municipal administration portfolio (Congress), not JD(S) MLA C.N. Balakrishna. Also urallnews is non-whitelisted aggregator.
// 5. Star of Mysore — "VP C.P. Radhakrishnan to visit Melukote temple and Shravanabelagola on Nov 9". REJECT: non-whitelisted source + pre-event announcement + mere presence (same as #2).
// 6. Star of Mysore / TOI items about "MLAs receiving Rs 50 crore" style generic claims — no item tied a specific work by C.N. Balakrishna to a physical structure.
// 7. myneta.info affidavit (Karnataka 2023, candidate_id=7721): declared criminal cases = 0. INFO only — halafname ke mamle akele negative nahi; no established-media allegation naming C.N. Balakrishna as accused in FIR/chargesheet/probe found for May 2023+.
//
// RETRY-LEAD:
// - The Hindu article 69909422 (fund discrimination claim): direct page fetch returned HTTP 403; retry with the non-AMP URL (https://www.thehindu.com/news/national/karnataka/jds-mla-alleges-discrimination-by-karnataka-govt-in-granting-funds-for-development-works/article69909422.ece) to confirm the date and exact wording. NOTE: even with the date, this item is a fund demand/complaint and would stay REJECTED as a work entry; retry is only for reject-log precision.
karnatakaWorks['c-n-balakrishna'] =  [];
// REJECT-LOG (k-m-shivalinge-gowda):
// 1. The Hindu, 2026-01-11 (article70501686) — MLA ka bayan ki unhone 'JD(S)-Congress rule' (pre-May 2023 tenure) me taluk ke liye govt engineering college sanction karwaya tha, jo Mosale Hosahalli shift ho gaya; ab book of works nikalne ka plan. REJECT: karyakaal May 2023 se pehle ka kaam + ghoshna/plan, koi naya lokarpan nahi.
// 2. The Hindu, 2024-02-23 (article67878850) — CM Siddaramaiah ka Arsikere daura: Kana Bhavan Banavara ka CM ne lokarpan kiya; CM ne Rs 137.18 crore ke kaamon ka shilanyas kiya. REJECT: CM ka karyakram, Shivalinge Gowda ki vyaktigat bhoomika/fund disclose nahi; dusre neta ke event me maujoodgi.
// 3. indianeconomicobserver, Feb 2024 — Assembly me Arsikere MLA ne DCM Shivakumar ko land acquisition suljhane ke liye saraha. REJECT: whitelisted source nahi + maang ka dastavezi nateeja nahi, sirf tareef.
// 4. auzz.news (aggregator), 2026-08-15 — 'Shivalinge Gowda to prioritize Yettinahole, Hassan airport, drought relief'. REJECT: aggregator + irade ka bayan, ghoshna.
// 5. The Hindu, 2026-10-18 (article71599838) — Excise Minister Gowda ne Hasanamba festival works ka bhumipooja kiya, Hassan town me. REJECT: seat-bahar (Hassan town, Arsikere seat nahi) + festival kharch, sthayi sarkari sanrachna nahi.
// 6. ETV Bharat (not whitelisted), 2025-01-13 — KEA building shilanyas me KHB chairman ke taur par maujoodgi. REJECT: not whitelisted + Bengaluru event, seat-bahar.
// 7. newkerala (not whitelisted), May 2026 — Bengaluru stadium groundbreaking me KHB chairman ke taur par. REJECT: not whitelisted + seat-bahar.
// 8. 'Bribe' remark controversy, Sep 2026 (NDTV Profit/Asianet/Siasat/TNM) — Governor ko complaint pahunchi; koi FIR/chargesheet naam me nahi. REJECT as negative: non-whitelisted sources + FIR/chargesheet establish nahi; complaint bina FIR ke negative criteria me nahi aata.
// RETRY-LEADS: none (koi whitelisted khula-nahi page jisme valid work dikha ho nahi mila)
karnatakaWorks['k-m-shivalinge-gowda'] =  [];
// REJECT-LOG (h-k-suresh):
// - NH-373 Hassan-Belur 4-lane widening, Rs 470.8 crore (TOI, 2026-09-12): Centre-approved project; vyaktigat bhoomika MP Shreyas Patel ko shrey diya gaya, MLA H K Suresh ki bhoomika ya shrey ullekh nahi — REJECT (badi pariyojna bina vyaktigat bhoomika).
// - Gadkari ne 22 NH projects ka shilanyas/lokarpan kiya, inme Belur-Hassan 4-lane bhi (Mar 2024, FIINS/agency feeds): Union govt karyakram, MLA ka vyaktigat lokarpan nahi — REJECT.
// - Yettinahole project par Assembly me prashn (ANI/indianeconomicobserver, 2024-02-13): sirf prashn pucha, dastaveji nateeja/ashwasan disclosed nahi; outlet whitelist me nahi — REJECT.
// - Belur building collapse me muaavze ki maang (The Hindu, 2025-03-14): MLA ne sirf maang uthai aur TMC adhikariyon ki laparwahi ka aarop lagaya, koi ghoshit nateeja nahi — REJECT (maang/prastav).
// - Forest officers ka MLA ke khilaf protest (TOI, 2025-02-20): verbal abuse ke aarop; FIR/chargesheet me naam nahi — REJECT (negative invalid, sirf complaint).
// - Medical reimbursement Rs 98.78 lakh (daijiworld, 2026-10-07): whitelist me nahi (aggregator-type regional portal) — REJECT.
// - Trader suicide FIR story (siasat.com, 2026-10-14): whitelist me nahi; TOI ka whitelisted version istemal kiya — REJECT (duplicate/non-whitelisted).
// - Cross-voting par Dharmasthala me shapath (UNI/mangaloretoday, 2026-06-30): party-internal vivad, na vikas-karya na negative — REJECT.
// - Ganesha murti defiling par bandh/agitation (TOI, 2025-09-22): protest karyakram, vikas-karya nahi — REJECT.
karnatakaWorks['h-k-suresh'] =  [
{
    title: 'Belur ke vyapari Nagesh ki aatmahatya se jude mamle me MLA H. K. Suresh ke khilaf FIR darj hui, BJP ne kaha janch rajnitik',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/bjp-seeks-sp-led-probe-into-fir-against-belur-mla/articleshow/134975008.cms',
    date: '2026-10-16',
    note: 'Belur taluk ki BJP ikai ne aarop lagaya ki vyapari Nagesh ki aatmahatya se jude mamle me sthaniya MLA H. K. Suresh ke khilaf darj FIR rajnaitik roop se prerit hai, aur Hassan SP Shubhanwita se swayam janch ka netritva karne ki maang ki. BJP ikai ke adhyaksh Sanjay Gowri ne kaha ki Nalinakshi ki shikayat me dukaan-chaabi vivaad Nagesh ki pareshaani ka kaarak bataya gaya tha aur un par lagbhag Rs 40 lakh ka karz tha. BJP netaon ne kaha ki is mamle me MLA ki koi bhoomika nahi thi aur nishpaksh vistrut janch ki maang ki.',
    period: '2023-2028',
  },

];
// REJECT-LOG (swaroop-prakash):
// - The Hindu, 13-01-2025: "Revanna says he will ensure all development works of Hassan are completed" — Swaroop sirf H.D. Revanna ki press conference me maujood the; dusre neta ka karyakram. REJECT.
// - The Hindu, 22-06-2023: "Hassan MLA visits rain-hit areas" — barish-prabhavit ilakon ka daura/nirikshan, koi lokarpan/shilanyas nahi. REJECT.
// - Deccan Herald, ~08-10-2026: JD(S) protest against DC on Ganesha idol immersion at Devigere — protest/political activity, koi vikas karya nahi. REJECT.
// - The Hindu, 30-06-2025: "JD(S) leaders, workers stage protest against Cong. govt. in Hassan" — Swaroop ne protest me hissa liya; koi vikas karya nahi. REJECT.
// - The Hindu, 24-01-2026 (HDK Hassan rally): Swaroop sirf upasthit netaon me the; vyaktigat bhoomika nahi. REJECT.
// - Asianet Newsable, 09-10-2025: Hasanamba Temple festival — Swaroop ne dharmik samaroh ki adhyakshata ki; aggregator-ish source, koi vikas karya nahi. REJECT.
// - campusvarta.com + karnatakajesuits.org, 03-06-2023: St Joseph's College building — Governor ne inauguration kiya, Swaroop sirf guest; chhote portal, whitelist bahar. REJECT.
// - publicnext.com, 04-11-2025: Sanjeevini Co-operative Hospital president re-election — whitelist-bahar chhota portal; ghoshna/yojna, koi lokarpan nahi. REJECT.
// - TOI Mysuru, 2026 budget stories: Hassan ko Rs 200 crore (Nagar Vikas Yojana 2.0) aur CM dwara Rs 298 crore ke programmes ka lokarpan — CM/sarkari ghoshna, Swaroop ki vyaktigat bhoomika nahi. REJECT.
// - The Hindu, 13-05-2024: Prajwal Revanna case me Swaroop ki giraftari ki maang — political statement, vikas karya nahi. REJECT.
// - mangalorean.com / lokmattimes.com, ~Mar-2025: pen-drive case chargesheet par Swaroop ki tippani — wo khud aaropi nahi, negative entry layak nahi. REJECT (no negative).
// - janamitra.co, 26-03-2025: "Swaroop Prakash performed a puja to mark the completion of a road project worth Rs 1 crore" — chhota Kannada portal, whitelist bahar. REJECT (RETRY-LEAD me).
// - janamitra.co, 01-12-2025: "MLA Swaroop Prakash inaugurates clean drinking water unit in Yediyur village" — chhota Kannada portal, whitelist bahar. REJECT (RETRY-LEAD me).
// - Negative check: established whitelisted media me Swaroop Prakash khud kisi FIR/chargesheet me aaropi nahi mile. Prajwal Revanna pen-drive case me unke rishtedaron/party workers ke naam aaye, lekin unka apna naam aaropi column me nahi. → koi negative entry nahi.
// - Party-badlav: Jan 2026 tak (The Hindu HDK rally report) Swaroop ab bhi JD(S) me hain. Koi flag nahi.
//
// RETRY-LEADs (whitelist outlet me coverage nahi mila; parent chaahe to cross-check karaye):
// - "Swaroop Prakash performed a puja to mark the completion of a road project worth Rs 1 crore" — janamitra.co, 2025-03-26 (chhota portal; bade outlet me nahi dikha)
// - "MLA Swaroop Prakash inaugurates clean drinking water unit in Yediyur village" — janamitra.co, 2025-12-01 (chhota portal; bade outlet me nahi dikha)
karnatakaWorks['swaroop-prakash'] =  [
  {
    title: 'Deputy CM D.K. Shivakumar ne Hassan MLA Swaroop Prakash ke Vidhansabha sawal ke jawab me Kyatanahalli lift irrigation project ko December 2024 tak poora karne ka ashwasan diya',
    category: 'Any', badge: 'news',
    sourceLabel: 'The Hindu', sourceUrl: 'https://www.thehindu.com/news/national/karnataka/kyatanahalli-lift-irrigation-project-will-be-completed-by-december-says-dks/article67630855.ece',
    date: '2023-12-12',
    note: 'Swaroop ne 12 Dec 2023 ko Assembly me Kyatanahalli project ki sthiti par sawal uthaya tha. Jawab me Water Resources mantri ne kaha — Yagachi reservoir ke Left Bank canal se 0.464 tmc pani uthakar Hassan taluk ke gaon me 5,685 acre sinchai ka project Dec 2024 tak poora hoga; doosra charan 2016 se chala aa raha tha aur NH-373 (Chikkamagaluru-Bilikere Road) ko kaatne wale kaam ki approval me deri ke kaaran ruka tha. Credit capped: Swaroop ne sirf sawal uthaya tha, pariyojna sarkari hai.',
    period: '2023-2028',
  },
  {
    title: 'Infrastructure Development mantri M.B. Patil ne Hassan MLA Swaroop Prakash ke Vidhansabha sawal par Hassan airport 2024-25 tak poora hone ka vishwas dilaya',
    category: 'Any', badge: 'news',
    sourceLabel: 'The Hindu', sourceUrl: 'https://www.thehindu.com/news/national/karnataka/hassan-airport-to-be-completed-in-2024-25-says-mb-patil/article67634480.ece/amp/',
    date: '2023-12-13',
    note: 'Swaroop ne Belagavi session me Hassan airport ki sthiti par sawal uthaya tha. Jawab me mantri ne bataya — Boovanahalli (Hassan City ke paas) 536 acre par ban rahe airport ki anumanit laagat Rs 193.65 crore hai aur ab tak Rs 164.70 crore jaari hue; pehla charan 62.4% aur doosra 12.14% poora hua; airport ATR-72 flights ke liye design hai. Credit capped: Swaroop ne sirf sawal uthaya tha, pariyojna 2007 se purani sarkari yojna hai.',
    period: '2023-2028',
  },
];
// REJECT-LOG (h-d-revanna):
// - The Hindu, 2025-01-13 ("Revanna says he will ensure all development works of Hassan are completed"):
//   press conference me Revanna ne Hassan outer ring road aur Holenarasipur-Arakalgud ke beech
//   150 acres par industries ke plan GHOSHIT kiye ("I will ensure all the works... are completed").
//   REJECT: ghoshna/prastav — koi sampann lokarpan/shilanyas nahi. Pehchan: Holenarasipur JD(S) MLA.
// - The Hindu, 2026-03-13 snippet ("PM Modi will be invited to inaugurate Hassan mega dairy"):
//   HAMUL general body ne PM Modi ko mega dairy (Rs 850 cr+, Holenarasipur seat me sthit) ke
//   udghaatan par aamantrit karne ka prastav diya; Revanna HAMUL president ki haisiyat se bol rahe the.
//   REJECT: pre-event announcement + cooperative-sanstha ki bhoomika (MLA seat-karyakram nahi),
//   aur koi vyaktigat MLA bhoomika/nirvaachit-nidhi jod nahi.
// - Bangalore Mirror, 2024-03-11 (Gadkari NH projects, Rs 4000 cr, Mysuru): Holenarasipur bypass/ROB
//   shamil hai lekin udghaatan/shilanyas kendriya mantri ka — Revanna ki vyaktigat bhoomika nahi.
//   REJECT: badi pariyojna bina vyaktigat bhoomika.
// - The Hindu, 2024-05-01 ("Revanna holds rituals at his home in Holenarasipur"): niji homa/puja.
//   REJECT: karyalaya-kaam nahi.
// - The Hindu, 2024-05-22 ("Revanna visits temples, holds meeting with party leaders in Hassan"):
//   mandir daura + JD(S) party meeting. REJECT: nirikshan/daura + party karyakram.
// - The Hindu, 2024-10-07 snippet (2007 ka archive): 220-kV substation Yachenahalli,
//   Malali PHC (Rs 35 lakh), anganwadi (Rs 5 lakh) — sampann lokarpan LEKIN karyakaal se pehle (Oct 2007).
//   REJECT: May 2023+ karyakaal ke bahar.
//
// REASONING (inferred dates): chargesheet entry ki date 2024-08-02 cited Indian Express report ki
// publication date hai; page me sirf "filed this week" kaha gaya hai, exact filing-day page par
// nahi likha. HC bail-refusal entry ki date 2024-08-28 hai — Indian Express page (Aug 29) "on
// Wednesday" kehta hai, aur Aug 28, 2024 Wednesday tha. The Hindu chargesheet page (Aug 1, 2024)
// fetch par 403 block hua — RETRY-LEAD. KLLADS/MLA-nidhi works ke liye whitelisted source nahi
// mila — RETRY-LEAD (query badal kar dobara).
// PARIVAAR-NIYAM check: sabhi entries me pehchan Holenarasipur ke JD(S) MLA H. D. Revanna se pakki
// ki gayi; unke putra Prajwal Revanna ke mamle/saza/charan bilkul shamil nahi. Party-badlav: nahi
// mila (JD(S) barkaraar).
//
// RETRY-LEADs:
// 1. The Hindu chargesheet article (published Aug 1, 2024, "SIT files chargesheet against H.D.
//    Revanna and Bhavani Revanna in abduction case") — page fetch 403 par block hua; browser se retry.
// 2. Holenarasipur seat ke MLA-nidhi/KLLADS works (May 2023+): whitelisted outlet me abhi tak koi
//    lokarpan/shilanyas itemized list nahi mili; naye query se retry.
karnatakaWorks['h-d-revanna'] =  [
{
    title: 'JD(S) MLA H. D. Revanna ko SIT ne 4 May 2024 ko K. R. Nagar apharan-mamle me giraftar kiya; vishesh adalat se shart-jamanat (Rs 5 lakh bond, desh-chhodne par rok) milne par 14 May 2024 ko jail se riha hue.',
    category: 'Any', badge: 'news',
    sourceLabel: 'PTI via ThePrint', sourceUrl: 'https://theprint.in/india/jds-mla-h-d-revanna-walks-out-of-prison-in-woman-kidnap-case/2084908/',
    date: '2024-05-14',
    note: 'Page ke anusaar: mahila ke bete ki shikayat par case darj hua tha; SIT ne 4 May ko Revanna ko giraftar kiya, 3-din ki police custody (8 May tak), phir 14 May tak nyayik hirasat; Special Court for Elected Representatives ke judge Santhosh Gajanan Bhat ne 13 May ko shart-jamanat di — Rs 5 lakh bond, desh chhodne par rok, aur victim ya sambandhit pakshon ko prabhavit na karne ki shart; 14 May ko jail se riha. Mahila ko 4 May ko Mysuru ke Hunsur taluk ke farmhouse se bacha liya gaya tha, usi din giraftari se kuch ghante pehle.',
    period: '2023-2028',
  },

{
    title: 'SIT ne Holenarasipur MLA H. D. Revanna, unki patni aur chhah sahyogiyon ke khilaf IPC dhara 364A ke tahat apharan-mamle me chargesheet dakhil ki (2 Aug 2024 ko report).',
    category: 'Any', badge: 'news',
    sourceLabel: 'Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/bangalore/prajwal-revanna-rape-victim-kidnap-case-sit-chargesheet-9490698/',
    date: '2024-08-02',
    note: 'Page ke anusaar: SIT ne special court for elected representatives me chargesheet dakhil ki; H D Revanna, Bhavani Revanna aur chhah sahayogi — sab par IPC ki gambheer kidnapping dhara 364A ke tahat aarop; mamla us mahila ke apharan ka hai jo unke ghar par domestic help thi, jise 29 April ko associates le gaye the; K R Nagar police station me 2 May ko FIR hui, Revanna 4 May ko giraftar hue aur 13 May ko jamanat mili. Bhavani Revanna 7 June ko Karnataka High Court se agrim jamanat pa chuki thin.',
    period: '2023-2028',
  },

{
    title: 'Karnataka High Court ne 28 Aug 2024 ko H. D. Revanna ki apharan-mamle wali jamanat radd karne ki SIT yachika kharij kar di.',
    category: 'Any', badge: 'news',
    sourceLabel: 'Indian Express', sourceUrl: 'https://indianexpress.com/article/cities/bangalore/karnataka-high-court-revanna-rape-case-9538982/',
    date: '2024-08-28',
    note: 'Page ke anusaar: Justice M Nagaprasanna ne SIT ki yachika kharij ki; SIT ne 31 May ko special court ke 13 May ke jamanat-aadesh ko IPC Section 364A ki galat vyakhya ke aadhar par chunauti di thi; Revanna ke vakil ne kaha ki 364A ka mukhya tatva (maut ka bhay) maujood nahi; High Court ne chhah sah-aaropiyon ko bhi jamanat de di.',
    period: '2023-2028',
  },

{
    title: 'Holenarasipur Town thane me 28 Apr 2024 ko H. D. Revanna ke khilaf yaun-utpeedan ka mamla darj hua; adalat ne 16 May 2024 ko antarim jamanat di.',
    category: 'Any', badge: 'news',
    sourceLabel: 'PTI via ThePrint', sourceUrl: 'https://theprint.in/india/jds-mla-h-d-revanna-gets-interim-bail-in-sexual-harassment-case/2088312/',
    date: '2024-05-16',
    note: 'Page ke anusaar: 47-saal ki house help ke mamle me 28 April ko Holenarasipur town police station me case darj hua; 42nd ACMM ne 16 May ko antarim rahat di; SIT ne hirasat maangi thi, adalat ne donon paksh sunne ke baad aadesh surakshit rakha; Revanna ke vakilon ne agrim jamanat ki arzi di thi.',
    period: '2023-2028',
  },

{
    title: '42vi Additional Chief Metropolitan Magistrate Court ne 20 May 2024 ko H. D. Revanna ko yaun-utpeedan mamle me jamanat de di.',
    category: 'Any', badge: 'news',
    sourceLabel: 'PTI via Business Standard', sourceUrl: 'https://www.business-standard.com/india-news/karnataka-jds-leader-h-d-revanna-granted-bail-in-sexual-assault-case-124052000717_1.html',
    date: '2024-05-20',
    note: 'Page ke anusaar: Judge Preeth J ne SIT ki apattiyan sunne se inkar karke jamanat di; case 28 April ko Holenarasipur town police station me darj hua tha; page me background ke taur par ye bhi darj hai ki Revanna 4 May ko apharan-mamle me giraftar hue the, 4-din ki police custody ke baad nyayik hirasat me rahe aur nyayik hirasat ke ant me MPs/MLAs ki special court se shart-jamanat mili.',
    period: '2023-2028',
  },

{
    title: 'High Court ne IPC dhara 354 ka aarop radd karne ke baad trial court ne 29 Dec 2025 ko H. D. Revanna ko yaun-utpeedan mamle se discharge kar diya; 13 Jul 2026 ko Supreme Court ne radd-karne ke khilaf rajya ki appeal par notice jari kiya.',
    category: 'Any', badge: 'news',
    sourceLabel: 'The New Indian Express', sourceUrl: 'https://www.newindianexpress.com/states/karnataka/2026/Jul/13/sc-seeks-hd-revannas-reply-on-karnataka-plea-against-quashing-of-section-354-charge',
    date: '2026-07-13',
    note: 'Page (PTI inputs) ke anusaar: Karnataka High Court ne 19 November 2025 ko IPC Section 354 ka aarop radd kiya lekin 354A (sexual harassment) barkaraar rakha aur trial court ko shikayat-dairi me deri ko lekar limitation jaanchne ka nirdesh diya; uske baad trial court ne 29 December 2025 ko Revanna ko 354A mamle se discharge kar diya; 13 July 2026 ko Supreme Court (Justices J B Pardiwala aur K Vinod Chandran) ne State ki appeal par Revanna ko notice jari karke jawab-dawa dakhil karne ka nirdesh diya; State ki appeal par sunvai lambit hai.',
    period: '2023-2028',
  },

];
// REJECT-LOG (a-manju):
// 1. The Hindu (2023-03-07) — "Manju holds meeting with his supporters, make them take oath": political meeting before joining JD(S); not a development work. REJECT.
// 2. The Hindu (2023-02-04) — "A. Manju gets offer to contest from Arkalgud on JD(S) ticket": pre-election announcement; pre-May 2023 anyway. REJECT.
// 3. Deccan Chronicle (2023-02-05) — "Kumaraswamy evinces interest in JDS ticket for his political foe Manju": pre-election; Feb 2023. REJECT.
// 4. The Hindu (2016-10-17) — "Work on Ganganalu Lift Irrigation Project in Arkalgud taluk to begin soon": 2016, minister-era (then as Minister), not May 2023+. REJECT.
// 5. The Hindu (2016-11-01) — "Manju spells out development works implemented in Hassan district": 2016, minister-era. REJECT.
// 6. The Hindu (2015-09-19) — "Will strive for development of Hassan: A. Manju": 2015, minister-era; generic assurance, no personal inauguration/fund. REJECT.
// 7. New Indian Express (2020-01-22) — "Senior BJP leader A Manju contests PLD Bank director post": Jan 2020, co-op bank election, not an MLA work. REJECT.
// 8. The Hindu (2025-06-30) — "JD(S) leaders, workers stage protest against Cong. govt. in Hassan": Manju only alleged houses sanctioned on bribes in his constituency; political protest, no personal work/fund disclosed. REJECT.
// 9. Times of India (2026-08-27) — "Hassan sees sharp spike in child sexual assault cases": Manju only raised an Assembly question; no personal work. REJECT.
// 10. Indian Express (2024-05-05) — "Prajwal Revanna case": Congress worker Naveen Gowda alleged he gave the pen drive to Manju; Manju denied it and no FIR ever named him as accused. Complaint without FIR-accused name = NOT a valid negative. REJECT.
// 11. Deccan Herald (2026-10-08) — "JD(S) protest: Hassan leaders slam DC over Ganesha idol immersion ban notice": protest attendance, not a work. REJECT.
// 12. Kodagu First (2024-02, New Indian Express pick) — Assembly land-lease debate: Manju intervened in a debate; Assembly demand, not a documented result/assurance for his seat. REJECT.
// RETRY-LEADS (a-manju): none — all leads resolved to dated sources above.
karnatakaWorks['a-manju'] =  [];
// REJECT-LOG (cement-manju):
// [1] publicnext.com (2026-02-17): "Sakleshpur: A new step in development; Bhoomi Pujan of Rs 3 crore road in Sakleshpur" - MLA ne Venkatahalli-Madanapur-Radige-Hanabalu villages (Kyamanahalli Gram Panchayat) wali Rs 3 crore sadak ka bhoomi pujan kiya.
//      REJECT: publicnext.com whitelist me NAHI (aggregator-type chhota portal). Whitelisted source par koi coverage nahi mili.
// [2] publicnext.com (2026-03-10): "Sakleshpur: MLA raises voice in the House for appointment of veterinary doctors" - Assembly me Animal Husbandry Dept ke khali posts bharne + 24-hr animal ambulance ki maang.
//      REJECT: sirf maang/prastav, koi dastaveji nateeja/ashwasan nahi; source bhi whitelisted nahi.
// [3] publicnext.com (2025-12-18): "Justice for Arjuna's elephant death: Cement Manju demands withdrawal of case against activists" - Assembly me 19 activists ke khilaf case wapas lene ki maang.
//      REJECT: sirf maang (withdrawal documented nahi); source bhi whitelisted nahi.
// [4] publicnext.com (2026-03-30): "Sakleshpur: D.V. Sabbamma Devi Temple in Vanagur Sadananda Gowda's visit" - MLA ne ex-CM D.V. Sadananda Gowda ka temple visit par swagat kiya.
//      REJECT: dusre neta ke karyakram me maujoodgi; source bhi whitelisted nahi.
// [5] publicnext.com (2026-04-04): "Heavy rains lashed villages in Alur taluk... MLA Cement Manju visits" - baarish se nuksan wale gaonon ka nirikshan, officials ko relief nirdesh.
//      REJECT: nirikshan/daura; rahat/nirdesh entry VALID list me nahi; source bhi whitelisted nahi.
// [6] skdrdpindia.org (2025-12-02): "SKDRDP Organizes Women's Empowerment Programme in Alur" - SKDRDP (NGO) ka Jnanavikasa Awareness Programme, MLA ne udghatan kiya.
//      REJECT: NGO/niji sanstha ka karyakram, sarkari sanrachna nahi (CSR/daan/niji category); vyaktigat sarkari bhoomika bhi nahi.
// [7] newindianexpress.com (2026-08-13): "Vande Bharat trial run begins on Shiradi Ghat" + deccanherald.com (2026-08-13): "Vande Bharat trial run on Shiradi ghat to study technical feasibility" - Sakleshpur Junction par MLA ne trial run flag-off kiya / puja ki.
//      REJECT: Kendra sarkar ke bade rail project ka ceremonial flag-off/trial; koi fund/bhoomika MLA ki disclosed nahi ("badi pariyojna bina vyaktigat bhoomika"); source whitelisted hone par bhi entry-validity fail.
// [8] thehindu.com (2025-10-28): "Karnataka Pollution Control Board Chairperson calls for protection of rivers" - KSPCB golden jubilee programme me MLA bhi maujood (MP, MLC, dusre MLAs ke saath).
//      REJECT: sirf maujoodgi, koi vyaktigat bhoomika nahi.
// [9] thehindu.com (2025-07-30): "BJP leaders, workers stage protest in Karnataka's Hassan over shortage of fertilizers" - BJP Raitha Morcha protest, MLAs H.K. Suresh + Cement Manju ke saath.
//      REJECT: protest/dharna - VALID category nahi (koi karya/inauguration nahi).
// [10] timesofindia.indiatimes.com (Dec 2025): "BJP protests over farmers' issues in Hassan" - farmers' issues par BJP protest me MLA ka bayan.
//      REJECT: protest/dharna - VALID category nahi.
// [11] kodagufirst.in (date n/a): Assembly me coffee growers ko encroached sarkari land 30-year lease par dene ki maang.
//      REJECT: sirf maang; source whitelisted nahi.
// [12] PTI via latestly.com (2024-09-06): CM Siddaramaiah ne Hebbanahalli, Sakleshpur taluk me Yettinahole integrated drinking water project ka first phase launch kiya (Rs 23,251.66 crore).
//      REJECT: CM ka karyakram; MLA ki koi vyaktigat bhoomika darj nahi ("badi pariyojna bina vyaktigat bhoomika"). latestly.com whitelisted established outlet bhi nahi.
// Negatives: Cement Manju (S Manjunatha) ke khilaf established media me koi FIR/chargesheet/janch/judicial development nahi mili. Unka 2023 election affidavit myneta.info par cited hai lekin whitelisted media coverage bina us par negative entry nahi banti ("Halafname ke mamle akele NAHI"). Party-badlav ka koi sanket nahi (2023 se BJP; karyakaal 2023-2028).
karnatakaWorks['cement-manju'] =  [];

// Batch 8: Haveri + Kalaburagi + Kodagu (16/31 jile; 17 assignments; QA-DROPS (coordinator): mantar-gowda ki 4 entries (TOI pages 403 par khule nahi — 'khul na sakne wala page source nahi' niyam) aur 1 negative (complaint me naam, darj FIR me MLA aaropi nahi — FIR-accused-column niyam) — sab retry-leads; bhojaraj ki entry (The Hindu amp 403 — tathya search-index se, khuli page se nahi) retry-lead par drop).

// Haveri — srinivas-mane

karnatakaWorks['srinivas-mane'] = [];

// Haveri — yasir-ahmed-khan-pathan

karnatakaWorks['yasir-ahmed-khan-pathan'] = [];

// Haveri — rudrappa-manappa-lamani

karnatakaWorks['rudrappa-manappa-lamani'] = [
  {
    title: 'Tungabhadra nadi par Kancharagatti ke paas Rs 150 crore ke barrage-cum-bridge ko KNNL ne manzoori di jisse Guttal aur Haveri shahar ki peyjal samasya door hogi',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Times of India (Hubballi)',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/rs-150-crore-sanctioned-for-tungabhadra-barrage-cum-bridge-to-ease-haveris-water-woes/articleshow/121372289.cms',
    date: '2025-01-25',
    note: 'Karnataka Neeravari Nigam Limited (KNNL) ke board ne 25 Jan 2025 ko Rs 150 crore ki swikriti di; turant Rs 50 crore aabantit aur DPR ke liye Rs 50 lakh rakhe gaye. Barrage se Budapanahalli Lift Irrigation ke 17 talab aur Guttal-Haveri shahar ka peyjal sankat hal hoga — 20 saal purani maang thi. Article ke mutabik deputy speaker aur Haveri MLA Rudrappa Lamani aur jila prabhari mantri Shivanand Patil ke samarthan se ye aage badha, isliye credit saamuhik hai, Lamani akele nahi. Sarkari cabinet ki antim prashasanik manzoori abhi baki thi (CM ka cabinet me le jaane ka ashwasan). Tithi ki tark-vyavastha: article me board-meeting ki tarikh 25 Jan 2025 darj hai, wahi sanstan tarikh ke roop me li gayi hai; article ki report May 2025 ki hai.',
    period: '2023-2028',
    stage: 'swikriti',
  },
  {
    title: 'Haveri jile ke liye super speciality hospital ki maang par CM ne ghoshna ki jo Lamani ne HIMS lokarpan samaroh me dusre netaon ke saath uthayi thi',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Times of India (Hubballi)',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/cm-announces-super-speciality-hospital-cancer-hospital-in-each-district/articleshow/126399839.cms',
    date: '2026-01-07',
    note: 'Haveri Institute of Medical Sciences ke lokarpan samaroh me deputy speaker aur Haveri MLA Rudrappa Lamani ne super speciality hospital ki maang rakhi thi; CM Siddaramaiah ne Haveri jile ke liye super speciality hospital ki ghoshna ki. Maang saamuhik thi (purv CM Bommai, mantri Shivanand Patil aur H. K. Patil, Lamani, Byadgi MLA Shivannavar) aur ghoshna CM ki thi, isliye credit capped hai. Abhi ghoshna-stage hi hai — nirman ki sthiti srot me darj nahi. Tithi ki tark-vyavastha: article me samaroh “Wednesday” ko hua darj hai aur “8th January” trending me hai, isse event ki tarikh 7 Jan 2026 (Budhwar) nishchit hui.',
    period: '2023-2028',
    stage: 'ghoshna',
  },
  {
    title: 'Khana aur Bhugarbh Vigyan vibhag ne Hunasikatti ki pathar khadan par anadhikrit utkhanan ke liye Rs 3 crore ka notice diya jisme Lamani khud lease-holder hain',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/karnataka/haveri-district-minister-rudrappa-lamani-fined-rs-3-crore-for-illegal-quarrying-4150154',
    date: '2026-09-18',
    note: 'Ranebennur taluk ke Hunasikatti ke paas khadan ka mining lease Lamani ke naam hai; KSRSAC drone survey aur vibhagiya jaanch me seema se zyada utkhanan milne par Rs 3 crore ka notice mila — 3 kishton me 6 mahine me bhugtan. Haveri jile me 60 se zyada khadan malikon par aisi karwai hui. Lamani ka jawab (Deccan Herald, 21 Sep 2026) bhi darj hai: unhone kaha ye sirf notice hai, jurmana nahi, aur vibhag se review ka ashwasan mila hai. FIR/chargesheet ki koi report nahi mili — mamla adhikarik jaanch aur vibhagiya notice ke star par hai, imaandaari se isi roop me darj kiya gaya hai. (Indian Express ne bhi 18 Sep 2026 ko iski pushti ki.)',
    period: '2023-2028',
  },
];

// Haveri — basavaraj-neelappa-shivannanavar

karnatakaWorks['basavaraj-neelappa-shivannanavar'] = [];

// Haveri — ujaneshwar-basavannappa-banakar

karnatakaWorks['ujaneshwar-basavannappa-banakar'] = [
  {
    title: 'Hirekerur aur Rattihalli talukon ke 88 talabon me Tungabhadra se paani bharne ki Sarvagna yojna ke poore fund jaari hone aur yojna poori hone ka shrey MLA U. B. Banakar ne Congress sarkar ko diya, aur 8 July 2026 se motaron se talabon me paani bharna shuru hone ka daawa kiya.',
    category: 'Paani',
    badge: 'dawa',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/karnataka/minister-visits-sarvagna-project-site-as-filling-of-88-tanks-begin-4073930',
    date: '2026-07-15',
    note: 'Deccan Herald ne likha ki Sarvagna Tank Filling Scheme ke tahat Hirekerur aur Rattihalli talukon ke 42 gaonon ke 88 talabon me Tungabhadra nadi se paani bhara ja raha hai; Ukkadagatri gaon (Harihar taluk) ke paas pump se paani uthaya jata hai; yojna ka maksad peene, ghar-istiimaal aur kheti ka paani aur bhujal star sudharna hai. Sarkari aadesh 25 Oct 2019 ke mutabiq yojna ko Rs 185 crore ki prashasanik swikriti mili thi; kul storage 671.67 million cft; project ki motoron ka test-run 8 Oct 2025 ko hua; mantri ke 3 July ke nirdesh ke baad 8 July se teen motaren chalakar 88 talabon me paani bharna shuru hua. MLA U. B. Banakar ne kaha ki Congress sarkar ne yojna ke poore fund jaari kar diye aur kisano ke kalyan ke liye ise poora kar diya. Fund release aur completion ka shrey sirf MLA ke bayan par aadharit hai — yojna ki manzoori 2019 ki hai, jo inke karyakaal (May 2023) se pehle ki hai — isliye shrey credit-capped rakha gaya hai aur badge daawa hai.',
    period: '2023-2028',
  },
  {
    title: 'Hirekerur ke Madag Masur ke vikas ke liye Rs 52 crore ki swikriti milne aur tender prakriya jaari hone ka daawa MLA U. B. Banakar ne kiya.',
    category: 'Paani',
    badge: 'dawa',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/karnataka/minister-visits-sarvagna-project-site-as-filling-of-88-tanks-begin-4073930',
    date: '2026-07-15',
    note: 'Deccan Herald ke lekh me MLA U. B. Banakar ne kaha ki Madag Masur ke vikas ke liye Rs 52 crore swikrit hue hain aur tender prakriya chal rahi hai. Swikriti ka tathya sirf MLA ke bayan par aadharit hai — lekh me iska GO ya sarkari dastavej nahi diya gaya — isliye badge daawa rakha gaya hai. (Pichhbhumi: Feb 2024 me Banakar ne Assembly me Madag Masur left/right bank canal ke vikas ka sawal uthaya tha, lekin us coverage ka koi whitelisted source nahi mila — dekhein retry-lead.)',
    period: '2023-2028',
  },
];

// Haveri — prakash-koliwad

karnatakaWorks['prakash-koliwad'] = [
  {
    title: 'MLA Prakash Koliwad ke netritva me MLA grant se Ranebennur taluk office parisar me 1971 ke yudh ka aitihasik T-55 Shivashakti tank sthapit hua',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/historic-indo-pak-war-tank-shivashakti-installed-in-ranebennur/articleshow/123369561.cms',
    date: '2025-08-15',
    note: 'The Times of India (Haveri): Haveri jila prashasan ne 79vein Swatantrata Diwas par Ranebennur taluk office parisar me 1971 ke Bharat-Pak yudh ka aitihasik T-55 tank sthapit kiya. TOI ke anusaar tank ka anavaran MLA Prakash Koliwad ke netritva me MLA grant ke tahat hua. Tank Bharatiya Sena ki assault regiment ka tha aur Pune ke Kirkee Central Army Fighting Vehicle Depot se laya gaya; Russia se khareeda gaya yah T-55 tank 1966 se 1977 tak mukhya yuddhak tank raha aur 1971 ke Bangla mukti yuddh me aham bhoomika nibhai. Iska naam Shiva Shakti rakha gaya hai aur sthapna se shahar ki sanskritik-shaikshik pratishtha badhne ki ummeed jatayi gayi hai. Fund disclosure: srot ne spasht roop se ‘MLA grant’ bataya — Karnataka me vidhayak anudan KLLADS (Karnataka Legislators Local Area Development Scheme) ke tahat milta hai, jisme har MLA ko saalana Rs 2 crore vikas karyon ki sifarish ka adhikaar hai; tank ki vyaktigat lagat ka ankda srot ne nahi diya. Date reasoning: lekh me ‘79th Independence Day’ likha hai, arthaat 15 August 2025.',
    period: '2023-2028',
    stage: 'lokarpan',
  },
  {
    title: 'Vidhan Sabha me Prakash Koliwad ke prashn par sarkar ne agle saal tak sabhi jilon me vishesh bachchon ke Early Intervention Centre banane ka elaan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'NDTV',
    sourceUrl: 'https://www.ndtv.com/health/ktaka-govt-to-set-up-early-intervention-centres-for-specially-abled-children-in-all-districts-by-next-year-11204695',
    date: '2026-03-12',
    note: 'NDTV (syndicated feed): Karnataka sarkar ne Vidhan Sabha me elaan kiya ki Rashtriya Bala Swasthya Karyakram ke tahat sabhi jilon me District Early Intervention Centres agle saal tak banaye jayenge. Swasthya mantri Dinesh Gundu Rao ne yah ghoshna sadan me Congress MLA Prakash Koliwad ke prashn ka jawab dete hue ki. Koliwad ne mudda uthaya tha ki Haveri jile me abhi koi DEIC nahi hai aur sthapna ke prastav bhi manzoor nahi hue hain; unhone kaha ki Ranebennur me sirf 137 vishesh bachche registered hain jabki anuman lagbhag 18,000 ka hai, aur taluk star par tele-therapy aur tele-counselling ke saath digital tracking ki maang rakhi. Mantri ne kaha ki filhaal rajya me 17 DEIC kaam kar rahe hain aur Koppal me ek aur jald shuru hoga; unhone mudda uthane ke liye Koliwad ki sarahna bhi ki. Credit capped: faisla, ghoshna aur fund sarkar ka hai — Koliwad ki bhoomika Vidhan Sabha me prashn uthane aur Haveri ke liye DEIC ki maang rakhne tak seemit rahi. Date reasoning: lekh me ‘announced on Thursday’ aur ‘Last Updated 221 days ago’ (19 Oct 2026 se ginte hue) — dono Thursday 12 March 2026 par milte hain.',
    period: '2023-2028',
  },
];

// Kalaburagi — m-y-patil

karnatakaWorks['m-y-patil'] = [];

// Kalaburagi — ajay-dharam-singh

karnatakaWorks['ajay-dharam-singh'] = [
  {
    title: 'Jewargi taluk me Rs 73.75 crore ki lagat se naya Government Tool Room and Training Centre (GTTC) — cabinet se manzoori ke baad KKRDB yojna ke tahat sthapit hoga',
    category: 'School',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/cabinet-clears-gttc-centre-for-jewargi-7375-crore-project-to-boost-skill-training/article70931941.ece',
    date: '2026-05-02',
    note: 'State Cabinet ne 30 April 2026 ki baithak me prastav manzoor kiya; kendra KKRDB yojna ke tahat Rs 73.75 crore ki laagat se banega; campus me aadhunik training block, workshop, machine, chhatravas aur staff quarter honge; AI/ML aur Electronics-Communication Engineering me diploma plus short-term skill courses milenge; saalana 750 se zyada vidyarthi prashikshit honge. Shrey: nirnay Cabinet ka hai; Jewargi MLA aur KKRDB chairman ke roop me Ajay Singh ne media note jari karke ghoshna ki — vyaktigat bhoomika ghoshna/jankari tak capped. KLLADS ka zikr srot me nahi.',
    period: '2023-2028',
  },
  {
    title: 'Mallabad Lift Irrigation Project ki Phase I, II, III ki bachi hui vitran-naharon ke karyon ki swikriti — KBJNL ki 140vi board baithak me faisla, kaam tezi se aage badhega',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/works-on-mallabad-lift-irrigation-project-expedited/article68406688.ece',
    date: '2024-07-15', // page ke khud ke stamp ‘Published - July 15, 2024 10:08 pm IST’ ke aadhaar par
    note: 'Jewargi MLA aur KKRDB chairman Ajay Singh ki vigyapti ke mutabik Jal Sansadhan Mantri D.K. Shivakumar ne adhikariyon ko tender prakriya poori karne ka nirdesh diya; KBJNL ki 140vi board baithak ne pariyojana ke karyanvayan ko manzoori di aur teenon charanon ki pending distributary karyon ke liye anudan ke nirdesh hue; pariyojana 33,860 hectare khet — Yadrami taluk ke 38 gaon aur Jewargi taluk ke 20 gaon — ko sinchit karegi. Shrey: faisla KBJNL board ka aur nirdesh Mantri ka hai; MLA ne vijyapti jari karke kisaano ki char-dashak purani maang ke dastaveji nateeje ki ghoshna ki — vyaktigat bhoomika capped. KLLADS ka zikr srot me nahi.',
    period: '2023-2028',
  },
  {
    title: 'Mallabad Lift Irrigation ki bachi hui Phase 1, 2, 3 distributary naharon ke liye Rs 359.6 crore ke tenderon ki swikriti — Jevargi taluk ke kisaano ke liye dastaveji nateeja',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/kbjnl-sanctions-rs-359-cr-for-completion-of-mallabad-lift-irrigation-project/articleshow/117530817.cms',
    date: '2025-01-24', // INFERRED — page par prakashan tithi metadata me nahi dikhi; crawl metadata (‘633 din pehle’ — 2026-10-19 ki tithi se) aur 2025 copyright/trending topics se anuman: lagbhag January 2025 ka chautha hafta. Reasoning note me darj.
    note: 'CM ke nivas par hui KBJNL ki 142vi baithak ne pending karyon ke liye Rs 359.6 crore ke tender manzoor kiye; Jevargi taluk (Krishna Upper Bank Project ka Phase 3) me Lift 1, 2, 3 ki pramukh naharein taiyaar ho chuki thi; bachi 26,716 hectare ki distributary naharein isi tender se poori hongi; 68 gaon (Jewargi + Shahapur taluk) aur 33,860 hectare labhanvit. Shrey: nirnay KBJNL board ka tha, adhyakshata CM Siddaramaiah aur Jal Sansadhan Mantri D.K. Shivakumar ne ki; Jewargi MLA Ajay Singh ne TOI se baat me tender prakriya turant shuru hone ki pushti ki — vyaktigat bhoomika capped. KLLADS ka zikr srot me nahi.',
    period: '2023-2028',
  },
];

// Kalaburagi — priyank-kharge

karnatakaWorks['priyank-kharge'] = [
  {
    title: 'Priyank Kharge ne Chittapur shahar me AMRUT 2.0 ke tehet do badi peya-jal pariyojnaon ka shilanyas kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/87-villages-in-chittapur-constituency-to-be-developed-at-a-cost-of-150-crore-says-karnataka-minister-priyank-kharge/article69572133.ece',
    date: '2025-05-13',
    note: 'The Hindu ke anusaar Priyank Kharge ne 13 May 2025 ko Chittapur shahar me AMRUT 2.0 yojna ke tehet do peya-jal pariyojnaon ka shilanyas kiya. Pehli pariyojna Kagina nadi se Chittapur ko paani pahunchayegi aur iski lagat Rs 45.53 crore hai; dusri Bhima nadi se Wadi ko paani degi aur iski lagat Rs 32.81 crore hai. Dono pariyojnaon ke 18 mahine me poori tarah chalu hone ki ummeed hai aur 125 litre prati vyakti prati din paani milega. Khabar 14 May 2025 ko prakashit hui thi.',
    period: '2023-2028',
    stage: 'shilanyas',
  },
  {
    title: 'Priyank Kharge ne Chittapur shahar me Rs 18.41 crore ki lagat se bane naye Praja Soudha ka udghatan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/priyank-kharge-delegation-will-be-taken-to-centre-urging-to-include-koli-kabbaliga-community-in-sts-list/article69772944.ece',
    date: '2025-07-04',
    note: 'The Hindu ke anusaar Priyank Kharge ne 4 July 2025 ko Chittapur shahar me Rs 18.41 crore ki lagat se bane naye Praja Soudha ka udghatan kiya. Purane Mini Vidhana Soudha ka naam badalkar Praja Soudha rakha gaya hai. Udghatan karyakram me 517 labharthiyon ko vibhinn sarkari yojnaon ke laabh bante gaye. Kisi fund scheme ka naam page par nahi diya gaya hai.',
    period: '2023-2028',
    stage: 'lokarpan',
  },
  {
    title: 'RSS par manhanikarak tippani ke aarop me niji shikayat: adalat ne Priyank Kharge ko sammon bheja, peshi ke baad zamaanat par riha hue; sessions court ne kaaryavaahi par rok lagayi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Deccan Herald',
    sourceUrl: 'https://www.deccanherald.com/india/karnataka/remarks-on-rss-court-stays-proceedings-against-priyank-nalapad-4174235',
    date: '2026-10-08',
    note: 'Deccan Herald ke anusaar Bengaluru ke RSS sadasya Tejas A ne November 2025 me niji shikayat darj karai thi ki Priyank Kharge ne RSS ke khilaf manhanikarak tippani ki hai. Vishesh magistrate adalat ne sangyaan lekar Priyank Kharge aur Mohammad Haris Nalapad ko sammon bheje; dono adalat me pesh hue aur zamaanat par riha hue. Unki punarvichar yachika me kaha gaya ki shikayatkarta peedit paksh sabit nahi hue isliye unhe shikayat ka adhikaar nahi hai. Sessions court ne 7 October 2026 ko kaaryavaahi par rok lagate hue shikayatkarta ko notice diya aur mamla 30 October 2026 ke liye lagaya. Dinesh Gundu Rao ke khilaf aarop magistrate adalat ne kharij kar diye the.',
    period: '2023-2028',
  },
];

// Kalaburagi — sharanprakash-rudrappa-patil

karnatakaWorks['sharanprakash-rudrappa-patil'] = [
  {
    title: 'Sedam kasbe ke liye Khachur Barrage se peene ka paani laane wali Rs 47.85 crore ki pariyojna ka shilanyas kiya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/foundation-stone-laid-for-4785-crore-project-to-draw-water-from-khachur-barrage-for-sedam-in-karnataka/article70267784.ece',
    date: '2025-11-11',
    note: 'The Hindu ki post-event report (published 12 Nov 2025; date event ki hai — reasoning note me) ke mutabik, Dr. Patil ne 11 November 2025 ko Ashraya Colony (Survey No. 705) me bhoomi puja karke Sedam kasbe ke liye Khachur Barrage se paani laane wali Rs 47.85 crore ki pariyojna ka shilanyas kiya. Yojana kendra-praayojit AMRUT 2.0 ke tahat hai aur kasbe me paanch naye overhead paani ke tank (Ashraya Colony, Chincholi Road, Kalaburagi Road sahit any sthanon par) banenge. Unke daave ke mutabik dedh saal me har niwasi ko roz 135 litre saaf paani milega — ye lakshya unka bayan hai, pusti honi baki hai. Stage ka sach: shilanyas ho chuka hai, nirmaan kaam abhi hona baki hai.',
    period: '2023-2028',
    stage: 'shilanyas',
  },
  {
    title: 'Sedam Taluk Hospital ki bistar kshamta 150 tak badhai aur upgradation ke liye Rs 5 crore ka atirikt anudan swikrit hua',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/foundation-stone-laid-for-4785-crore-project-to-draw-water-from-khachur-barrage-for-sedam-in-karnataka/article70267784.ece',
    date: '2025-11-11',
    note: 'Usi The Hindu report me shilanyas karyakram ke dauraan unhone bataya ki Sedam Taluk Hospital ki bed capacity 150 tak badha di gayi hai aur uske upgradation ke liye Rs 5 crore ka atirikt anudan swikrit hua hai. Ye unka bayan hai — GO ya swikriti-aadesh ka pratyaksh dastavej article me nahi diya gaya, isliye credit unke media-reported daave tak seemit hai.',
    period: '2023-2028',
  },
  {
    title: 'Sedam me Rs 56 crore ki bhumigat naali (UGD) network mazbooti aur STP pariyojna ka kaam antim charan me pahuncha',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/foundation-stone-laid-for-4785-crore-project-to-draw-water-from-khachur-barrage-for-sedam-in-karnataka/article70267784.ece',
    date: '2025-11-11',
    note: 'Usi report me unhone bataya ki Sedam me bhumigat naali (UGD) network mazboot karne ka Rs 56 crore ka kaam — jisme Sewage Treatment Plant (STP) bhi shamil hai — chal raha hai aur sirf 800 metre kaam baki hai. Ye unka bayan hai; shilanyas/lokarpan ka koi swatantra dastavej article me nahi hai, isliye credit unke media-reported daave tak seemit hai.',
    period: '2023-2028',
  },
];

// Kalaburagi — avinash-umesh-jadhav

karnatakaWorks['avinash-umesh-jadhav'] = [];

// Kalaburagi — basawaraj-mattimudu

karnatakaWorks['basawaraj-mattimudu'] = [];

// Kalaburagi — allamprabhu-patil

karnatakaWorks['allamprabhu-patil'] = [
  {
  title: 'Kalaburagi Dakshin ke MLA Allamprabhu Patil ne Melkunda (B) gaon me naye gram panchayat bhavan ka udghatan kiya',
  category: 'Any',
  badge: 'news',
  sourceLabel: 'The Hindu',
  sourceUrl: 'https://www.thehindu.com/news/national/karnataka/government-reaching-peoples-doorstep-through-janaspandana-allamprabhu-patil/article69887402.ece',
  date: '2025-08-02',
  note: 'The Hindu ki report ke mutabik MLA ne Janaspandana grievance redressal meet se pehle naye gram panchayat bhavan ka udghatan kiya. Bhavan ki lagat ya kosh ka srot report me nahi diya gaya — fund disclosed nahi, isliye credit lokarpan tak seemit. Usi samaroh me MLA ne CM grants se sadak aur buniyadi suvidhaon ke sudhaar ka dawa kiya, lekin uska koi alag post-event saboot report me nahi hai.',
  period: '2023-2028',
},
];

// Kalaburagi — kaneez-fatima

karnatakaWorks['kaneez-fatima'] = [
  {
    title: 'Kaneez Fatima ne Kalaburagi me Masjid-e-Mahbas ke paas sadak aur drainage vikas karyon ka shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/kaneez-fatima-lays-foundation-stone-for-road-drainage-works-in-kalaburagi/article70932217.ece',
    date: '2026-05-01',
    note: 'KKRDB ki 2025-26 action plan ke tehet PWD ke zariye liye gaye karyon ki anumaanit laagat Rs 130 lakh hai; Kaneez Fatima ne khud 1 May 2026 ko shaam 5.30 baje shilanyas kiya. Date page par di gayi tithi ke aadhaar par li gayi hai (khabar 2 May 2026 ko prakashit hui).',
    period: '2023-2028',
    stage: 'shilanyas',
  },
];

// Kalaburagi — bhojaraj

karnatakaWorks['bhojaraj'] = [];

// Kodagu — mantar-gowda

karnatakaWorks['mantar-gowda'] = [
  {
    title: 'Madikeri ke KoIMS Teaching Hospital me Anti-Rabies Unit aur Dialysis Unit ka lokarpan — MLA Mantar Gowda ne suvidhaon ka udghatan kiya',
    category: 'Aspataal',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/kodagu-hospital-gets-dialysis-anti-rabies-units/article69893023.ece',
    date: '2025-08-04',
    note: 'The Hindu ke anusaar Kodagu Institute of Medical Sciences (KoIMS) Teaching Hospital, Madikeri me Anti-Rabies Unit aur Dialysis Unit launch hui; Madikeri ke MLA Mantar Gowda ne suvidhaon ka udghatan kiya. MLA ne KoIMS ko full-fledged multi-specialty hospital banane ki pratibaddhta doharai aur kaha ve sansthan me swasthya suvidhaon ke vistar ke liye sarkar se anudan dilane ka prayas karenge. Udghatan ke samay KoIMS Dean Lokesh Kumar, District Surgeon Nanjundayya, Medical Superintendent Somashekar aur varishth swasthya adhikari maujood the. Fund-srot report me ghoshit nahi (LAD/KLLADS ka zikr nahi). Date-note: report 4 Aug 2025 ko publish hui; event ki alag tithi report me darj nahi, isliye tithi report ki rakhi gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'KoIMS Teaching Hospital Madikeri me upgraded Dental Department aur OPG X-ray machine ka lokarpan — MLA Mantar Gowda ne udghatan kiya',
    category: 'Aspataal',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/upgraded-dental-unit-inaugurated-at-koims-teaching-hospital-in-madikeri/article69892964.ece',
    date: '2025-08-03',
    note: 'The Hindu ke anusaar KoIMS Teaching Hospital, Madikeri me naya upgraded Dental Department aur OPG (Orthopantomogram) X-ray machine ka udghatan MLA Mantar Gowda ne kiya; ye suvidhayein kshetra me dental swasthya sewaon ko majboot karne ke liye hain. Dental vibhag pichhle paanch varshon se karyarat hai aur Danta Bhagya Yojane ke tahat 45 varsh se upar ke BPL card-dharakon ko muft denture deta hai; pichhle 4-5 varshon me Ayushman Bharat-Arogya Karnataka (AB-ARK) ke tahat 250 se zyada oral aur maxillofacial surgery muft ki gayi hain. Fund-srot report me ghoshit nahi. Date-note: report me ‘Sunday’ likha hai aur report 4 Aug 2025 (Monday) ko publish hui, isliye tithi 2025-08-03 rakhi gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Madikeri, Kushalnagar aur Virajpet me Rs 12 crore ki legacy waste bioremediation pariyojna ka shubharambh — Mysuru MP ke saath MLA ne launch kiya, Swachh Bharat Abhiyan ke tahat 1.52 lakh tonne kachre ka vaigyanik niptaan hoga',
    category: 'Any',
    badge: 'news',
    stage: 'lokarpan',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/project-for-scientific-disposal-of-legacy-waste-launched-in-kodagu/article69442883.ece',
    date: '2025-04-11',
    note: 'The Hindu ke anusaar Madikeri, Kushalnagar aur Virajpet me legacy waste ke vaigyanik niptaan ki Rs 12 crore ki pariyojna launch hui; Madikeri ke MLA Mantar Gowda aur Mysuru ke MP Yaduveer Krishnadatta Chamaraja Wadiyar ne ise Madikeri ke Subramanyanagar me Swachh Bharat Abhiyan yojna ke tahat launch kiya. MLA ke anusaar lagbhag 1.52 lakh tonne legacy waste — jisme Madikeri ka lagbhag 76,636 tonne shamil hai — bioremediation ke tahat liya gaya hai; MP ke anusaar pariyojna lagat ka 50% kendriya funding hai. Credit-cap: ye sanyukt launch tha (MLA + MP); pariyojna teen shaharon me hai jinme Virajpet dusre MLA (A.S. Ponnanna) ki seat me padta hai. Date-note: report me ‘Friday’ likha hai aur report 12 Apr 2025 (Saturday) ko publish hui, isliye tithi 2025-04-11 rakhi gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Madikeri ke Gandhi Memorial Park (Raj Ghat model) ke liye MLA Local Area Development Fund se Rs 10 lakh dene ka MLA Mantar Gowda ka ashwasan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/madikeris-gandhi-memorial-park-set-to-get-a-major-facelift/article67706041.ece/amp/',
    date: '2024-01-04',
    note: 'The Hindu ke anusaar Kodagu prabhari mantri N.S. Boseraju ne Madikeri me ban rahe Gandhi Memorial Park ke karyon ka nirikshan kiya aur kaha sarkar ne karyon ke liye Rs 50 lakh swikrit kiye hain aur atirikt Rs 5 lakh bhi jaari honge; MLA Mantar Gowda ne kaam jald poora karne par zor diya aur MLA local area development fund se Rs 10 lakh dene ka ashwasan diya, saath hi atirikt anudan ke liye kadam uthane ki baat kahi. Sarvodaya Samiti ke poorv adhyaksh T.P. Ramesh ke anusaar park Raj Ghat (New Delhi) ki tarah banaya jana hai. Credit-cap: ye ashwasan hai — vastavik swikriti ya vitran ki pushti is report me nahi hai; KLLADS ke tahat (Rs 2 crore/seat/varsh ka adhikaar) Rs 10 lakh ka ashwasan.',
    period: '2023-2028',
  },
  {
    title: 'Madikeri me Field Marshal K.M. Cariappa ki pratima aur aaspaas ke park ke vikas ke liye MLA Local Area Development Fund se Rs 3 lakh ki swikriti — MLA Mantar Gowda ne estimate milne par grant ghoshit ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/grant-of-3-lakh-sanctioned-for-development-of-field-marshal-km-cariappas-statue-in-karnatakas-madikeri/article70212493.ece/amp/',
    date: '2025-10-28',
    note: 'The Hindu ke anusaar Madikeri ke MLA Mantar Gowda ne Bharat ke pehle Commander-in-Chief Field Marshal K.M. Cariappa ki pratima aur uske aaspaas ke park ke vikas ke liye MLA Local Area Development Fund se Rs 3 lakh ka anudan swikrit kiya. Rajiv Gandhi Panchayat Raj Organisation ke zila adhyaksh Tennira Maina aur Madikeri City Municipal Council ki manoneet sadasya Mandira Sada Muddappa ne prastavit karyon ka estimate saunpa, jiske jawab me MLA ne grant ghoshit ki. MLA ne kaha Field Marshal Cariappa aur General K.S. Thimayya asadharan sainya neta the aur unke yogdaan ka samman har Bharatiya ka kartavya hai. KLLADS (Rs 2 crore/seat/varsh) ke adhikaar me se Rs 3 lakh ki itemized swikriti. Date-note: report 28 Oct 2025 (Tuesday) ko publish hui aur ‘Tuesday’ ko estimate saunpa gaya, isliye tithi 2025-10-28 rakhi gayi hai.',
    period: '2023-2028',
  },
];

// Kodagu — a-s-ponnanna

karnatakaWorks['a-s-ponnanna'] = [
  {
    title: 'Virajpet ke MLA A. S. Ponnanna ne Thithimathi me MGNREGA me kaam karne wali mahilaon ke chhote bachchon ke liye bane Koosina Mane kendra ka lokarpan kiya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/koosina-mane-at-thithimathi-to-benefit-mgnrega-workers/article67752969.ece',
    date: '2024-01-17',
    note: 'The Hindu ne likha ki Thithimathi (Virajpet taluk) me bane shishu dekhbhal kendra ka MLA aur CM ke kanuni salaahkar A. S. Ponnanna ne lokarpan kiya; kendra me 6 mahine se 3 saal tak ke bachchon ki dekhbhal prashikshit sevikaon dwara hoti hai aur sevikao ko yojna ke tahat roz Rs 316 milta hai. Koosina Mane yojna ki ghoshna CM Siddaramaiah ne budget me ki thi aur sarkar ka lakshya lagbhag 4,000 aise kendra kholna tha; ye unme se ek hai. Tithi anumanit: lekh 18 Jan 2024 ko chhapa, photo-caption me Budhvaar ko launch bataya (17 Jan 2024 Budhvaar tha), body me Guruvaar ko lokarpan — karyakram 17–18 Jan ka, launch-tithi li gayi hai. Kendra ke liye MLA ke niji fund ka koi ullekh lekh me nahi hai.',
    period: '2023-2028',
  },
  {
    title: 'Virajpet ke MLA A. S. Ponnanna ne Ponnampet taluk ke Srimangala gaon me Sri Krishna Mandir tak jaane wali sadak ka lokarpan kiya, jo unke dwara di gayi Rs 15 lakh ki grant se bani thi.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/ajjikuttira-sp-ponnanna-inaugurates-new-roads-in-ponnampet-taluk/articleshow/121077671.cms',
    date: '2025-05-11',
    note: 'TOI ne likha ki MLA A. S. Ponnanna ne Srimangala gaon (Ponnampet taluk) me Sri Krishna Mandir tak ki sadak ka lokarpan kiya; sadak Rs 15 lakh ki grant se bani jo unhone khud di thi, kyunki unhone dekha tha ki ye sadak kai saalon se nahi bani thi. Tithi anumanit: page par prakashan-tithi nahi dikhi; search-engine crawl lagbhag 11 May 2025 ka hai, isi se tithi li gayi hai. Grant ko lekh ne KLLADS nahi bataya, isliye waisa dawa nahi joda gaya.',
    period: '2023-2028',
  },
  {
    title: 'Virajpet ke MLA A. S. Ponnanna ne Ponnampet taluk ke T. Shettigeri gaon ki seema me Rs 22 lakh ki lagat se bani sadak ka lokarpan kiya.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/ajjikuttira-sp-ponnanna-inaugurates-new-roads-in-ponnampet-taluk/articleshow/121077671.cms',
    date: '2025-05-11',
    note: 'TOI ne likha ki MLA ne T. Shettigeri gaon ki seema (Ponnampet taluk) me Rs 22 lakh ki lagat se bani sadak ka bhi lokarpan kiya; ye usi Rs 37 lakh ke sadak-karyakram ka hissa tha jisme Srimangala ki sadak bhi shamil thi. Tithi anumanit: search-engine crawl lagbhag 11 May 2025 ka hai, isi se tithi li gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Virajpet ke MLA A. S. Ponnanna ne Ponnampet taluk me Mysuru–Gonikoppal mukhya sadak ke chune hue hisson par Rs 3.8 crore ke sadak vikas karyon ki bhoomi puja ki, jisme Thithimathi shahar ki seema me Thithimathi Bridge se Devarapura tak ki sadak bhi shamil hai.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/mla-ponnanna-launches-development-works-in-ponnampet-taluk/articleshow/126457247.cms',
    date: '2026-01-10',
    note: 'TOI ne likha ki MLA ne Ponnampet taluk me kul Rs 10.7 crore ke vikas karyon ki shuruaat ki; isme Mysuru–Gonikoppal mukhya sadak ke chune hue hisson par Rs 3.8 crore ke karyon ki bhoomi puja bhi thi, jisme Thithimathi Bridge se Devarapura tak ki sadak shamil hai. Unhone adhikariyon ko kaam jaldi aur gunvatta ke saath poora karne ka nirdesh diya. Tithi anumanit: lekh me ‘Shanivaar’ likha hai aur search-engine crawl lagbhag 11 Jan 2026 (Ravivaar) ka hai — usse pehla Shanivaar 10 Jan 2026 tha, isi se tithi li gayi hai.',
    period: '2023-2028',
    stage: 'shilanyas',
  },
  {
    title: 'Virajpet ke MLA A. S. Ponnanna ne Mysuru–Ponnampet mukhya sadak par Devarapura se Seagethodu Bridge tak ki poori hui 4.34 km lambi sadak ka lokarpan kiya, jo Rs 3.5 crore ki lagat se bani thi.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/mla-ponnanna-launches-development-works-in-ponnampet-taluk/articleshow/126457247.cms',
    date: '2026-01-10',
    note: 'TOI ne likha ki MLA ne Mysuru–Ponnampet mukhya sadak par Devarapura se Seagethodu Bridge tak ki 4.34 km lambi, poori hui sadak ka lokarpan kiya; iski lagat Rs 3.5 crore thi. Tithi anumanit: lekh me ‘Shanivaar’ likha hai; crawl ke hisaab se 10 Jan 2026 (Shanivaar) li gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Virajpet ke MLA A. S. Ponnanna ne Gonikoppal–Ponnampet mukhya sadak ke Balaji–Jodubiti hisse (Mayamudi–Balaji–Jodubiti–Kunda) par Rs 1 crore ke anudan se sadak chaudaikaran aur dobara damrikaran kaam ka shubharambh kiya, jiska shilanyas samaroh Jodubiti me hua.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/mla-ponnanna-launches-development-works-in-ponnampet-taluk/articleshow/126457247.cms',
    date: '2026-01-10',
    note: 'TOI ne likha ki MLA ne Gonikoppal–Ponnampet mukhya sadak ke Balaji–Jodubiti hisse (Mayamudi–Balaji–Jodubiti–Kunda) par sadak chaudaikaran aur re-asphalting kaam Rs 1 crore ke anudan se shuru karwaya; shilanyas samaroh Jodubiti me hua. Tithi anumanit: 10 Jan 2026 (Shanivaar).',
    period: '2023-2028',
    stage: 'shilanyas',
  },
  {
    title: 'Virajpet ke MLA A. S. Ponnanna ne Hudikeri me nayi bani Hudikeri–Kalathode sadak ka lokarpan kiya, jo Rs 5 lakh ki lagat se bani thi.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/mla-ponnanna-launches-development-works-in-ponnampet-taluk/articleshow/126457247.cms',
    date: '2026-01-10',
    note: 'TOI ne likha ki MLA ne Hudikeri me nayi nirmit Hudikeri–Kalathode sadak ka lokarpan kiya, jo Rs 5 lakh ki lagat se bani thi. Tithi anumanit: 10 Jan 2026 (Shanivaar).',
    period: '2023-2028',
  },
  {
    title: 'Virajpet ke MLA A. S. Ponnanna ne Hudikeri ke Mukkatimani me Rs 42 lakh ke vishesh anudan se bichi nayi 11 kV bijli line ka shubharambh kiya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/mla-ponnanna-launches-development-works-in-ponnampet-taluk/articleshow/126457247.cms',
    date: '2026-01-10',
    note: 'TOI ne likha ki MLA ne Hudikeri ke Mukkatimani me Rs 42 lakh ke vishesh anudan se taiyaar hui nayi 11 kV bijli line ka shubharambh kiya. Tithi anumanit: 10 Jan 2026 (Shanivaar).',
    period: '2023-2028',
  },
  {
    title: 'Virajpet ke MLA A. S. Ponnanna ne Hudikeri ke paas Madikeri–Kutta sadak par Pokaletodu hisse me pul ke punarnirman ke liye Rs 2 crore ke anudan ki ghoshna ke saath us sthal par bhoomi puja ki.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/mla-ponnanna-launches-development-works-in-ponnampet-taluk/articleshow/126457247.cms',
    date: '2026-01-10',
    note: 'TOI ne likha ki MLA ne Hudikeri ke paas Madikeri–Kutta sadak par Pokaletodu hisse me pul ke punarnirman ke liye Rs 2 crore ke anudan ki ghoshna ki aur usi sthal par bhoomi puja ki; avsar par State Sports Authority ke upaadhyaksh Cheppudeera Arun Machiah aadi maujood the. Tithi anumanit: 10 Jan 2026 (Shanivaar).',
    period: '2023-2028',
    stage: 'shilanyas',
  },
  {
    title: 'Virajpet ke MLA A. S. Ponnanna ne Talacauvery mandir ke paas naye bane Bhandara Mane bhavan ka lokarpan kiya, jo lagbhag Rs 1 crore ki lagat se Greater Bengaluru Authority ke anudan se bana tha.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/talacauvery-gears-up-for-cauvery-theerthodbhava-on-saturday/article71592889.ece',
    date: '2026-10-16',
    note: 'The Hindu ne likha ki CM ke raajnaitik sachiv aur Virajpet MLA A. S. Ponnanna ne Cauvery Theerthodbhava se pehle Shukravaar ko Talacauvery ka daura karke mandir ke paas naye nirmit Bhandara Mane bhavan ka lokarpan kiya; bhavan lagbhag Rs 1 crore ki lagat se Greater Bengaluru Authority (GBA) ke anudan se bana tha. Tithi pakki: lekh 16 Oct 2026 ko chhapa aur ‘Shukravaar’ ka daura bataya — 16 Oct 2026 Shukravaar tha.',
    period: '2023-2028',
  },
  {
    title: 'Virajpet ke MLA A. S. Ponnanna ne Kodagu ke Thithimathi ke paas Cheeni Hudlu Haadi me Rs 4.84 crore ki bijli pariyojna ka lokarpan kiya, jisse Jungle Haadi, Ayur Suruli Haadi, Cheeni Hudlu Haadi aur Chombu Kaadu Haadi ki aadiwasi bastiyon me pehli baar bijli pahunchi.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/karnataka/2026/Oct/13/karnataka-mla-as-ponnanna-inaugurates-484-crore-power-project-in-kodagu-district',
    date: '2026-10-13',
    note: 'The New Indian Express ne likha ki MLA A. S. Ponnanna ne Rs 4.84 crore ki bijli pariyojna ka lokarpan kiya, jisse Thithimathi (Ponnampet taluk) ke jungle-kinare ki chaar aadiwasi bastiyon — Jungle Haadi, Ayur Suruli Haadi, Cheeni Hudlu Haadi aur Chombu Kaadu Haadi — me pehli baar bijli aayi; yahan Jenu Kuruba, Paniyera Yerava aur Panjari Yerava samudaayon ke 185 se adhik parivaar rehte hain. Sthaniya nivasi C. Ramu ke anusaar pariyojna chaar mahine pehle poori ho gayi thi aur bastiyon ke logon ne khud MLA se lokarpan karne ka aagrah kiya tha; unhone ye bhi kaha ki vartamaan MLA ke prayason se yahan achchhi sadken bani hain. Pariyojna ke fund-srot ka ullekh lekh me nahi hai, isliye koi fund dawa nahi joda gaya. Tithi anumanit: lekh 13 Oct 2026 ko chhapa aur ‘is hafte’ lokarpan bataya, isi se tithi li gayi hai.',
    period: '2023-2028',
  },
];

// ============ KARNATAKA BATCH 9 — Kolar jila (coordinator merge) ============
karnatakaWorks['g-k-venkatashivareddy'] = [];

// REJECT-LOG (g-k-venkatashivareddy, Srinivaspur, JD(S) — May 2023 ke baad whitelist coverage me koi qualifying work/negative nahi mila; khali profile hi sahi):
// 1. Vijaya Karnataka (13 Jul 2025, Punganur Cross JD(S) karyakarta sammelan me MLA ka bhashan): MLA ne dawa kiya — Ganga Kalyana Yojana me 300 borewell karwaye; vidhayak nidhi se Rs 4 crore SC colonies ke vikas me lage; kshetra vishesh yojnaon me sadak vikas ke liye anudan manzoor karwaya lekin K. R. Ramesh Kumar/Nazeer Ahmed ke dabav se 26 sadak kaamon par rok lagi; Vidhana Soudha adhikariyon par 13% commission ka aarop. REJECT: (a) whitelist source NAHI (Vijaya Karnataka); (b) rajnaitik bhashan ke dawe — kisi bhautik sanrachna ka post-event lokarpan/shilanyas dastavej nahi; (c) borewell/sadak fund "manzoor karwaya" = ghoshna/dawa ki shreni, fund+date+bhoomika ka verify nahi; (d) 13% wala aarop officials par hai, MLA par NAHI (negative bhi nahi).
// 2. VKNews.in (Sep 2025, Shri Kshetra Dharmasthala Janjagriti Vedike madyavarjan shivir): MLA ne vyasan-mukt samaj par bhashan diya. REJECT: sarkari/trust abhiyan ka shubharambh/bhashan, vyaktigat bhautik kaam nahi; non-whitelist.
// 3. Deccan Herald / Nation Press (10 Aug 2026): CM D. K. Shivakumar ne Malur me 'Sadhana Sambhrama' par ~Rs 3,200 crore ke kaam udghatit/shilanyas kiye. REJECT: Malur seat (kshetra se bahar) + dusre neta (CM) ka event — maujoodgi par entry NAHI.
// 4. Nitin Gadkari NH projects (10 Mar 2024, Mysuru): 22 projects me Srinivasapura bypass bhi shamil (newkerala/fiinews/PTI copies). REJECT: kendriya pariyojna; MLA ki vyaktigat dastaveji bhoomika ka koi saboot nahi.
// 5. The Hindu (06 Jan 2024): Lokayukta ne Srinivasapura taluk ke sarkari schools me gadbadi ki janch ka aadesh diya (mid-day meal funds, teacher absenteeism — anonymous complaint). REJECT (negative): aaropi school adhikari/headmaster hain, MLA ka naam aaropi column me NAHI.
// 6. The New Indian Express (03 Feb 2026): Upa Lokayukta Justice Veerappa ne Srinivasapura taluk ki 25 gram panchayaton ke khilaf suo motu complaint par model-taluk drive. REJECT (negative): aarop GPs par hain, MLA par NAHI.
// 7. Indian Kanoon (Karnataka HC order 06 Feb 2021, Crl.P. 1625/2020): K. R. Ramesh Kumar ki defamation complaint (P.C.R. 4/2020, IPC 388/499/500/501/506) ke khilaf Venkatashiva Reddy ki quash petition. REJECT (negative): pre-term case, May 2023 ke baad koi nyayik vikas nahi mila.
// 8. 2000s-2015 ke transport-permit writ cases (Casemine/CourtKutchehry): stage-carriage permit renewal/variation ke civil mukadme. REJECT (negative): civil, pre-term, aaparadhik mamla nahi.
// 9. KC Valley project, Yettinahole project, Kolar district ka Jal Sanchay national award (IBC World News, Nov 2025): Srinivasapura taluk par fayda sambhav lekin MLA ki vyaktigat bhoomika ka koi dastavej/srot nahi. REJECT: kendriya/rajya pariyojna bina vyaktigat bhoomika.
// 10. The Hindu election interview (Apr 2023): "Local officials failed to deliver funds/schemes" — pre-term chunav interview, koi kaam nahi. REJECT.
// 11. Congress councillor stabbing, Srinivasapura (The South First, May 2023, chunav ke samay): MLA khud aaropi nahi, JD(S) ne political angle kharij kiya. REJECT (negative).
// 12. Vidhansabha questions/demands: kla.kar.nic.in par MLA ke prashnon ka koi post-event nateeja/mantri-ashwasan qualifying srot me nahi mila — sirf maang ki shreni, REJECT.

// RETRY-LEADS (whitelist srot milte hi re-evaluate):
// A. KLLADS (kllads.kar.nic.in) sarkari portal par 2023-24/2024-25 me Srinivaspur seat ke sanctioned/recommended works ki list — 'sarkari' badge entry ban sakti hai.
// B. Vijaya Karnataka (13 Jul 2025) ke 300-borewell/Rs 4cr-MLA-fund dawon par agar The Hindu/IE/DH/TOI/PTI ki post-event reporting mile to entry par vichaar.

// samruddhi-v-manjunath (Mulbagal SC, JD(S)) — REJECT-LOG: (1) Lord Rama banner-tearing incident, Jan 2024 (Indian Express lite): Kolar BJP MP S. Muniswamy aur Mulbagal JD(S) MLA Samruddhi V. Manjunath ne Jahangir Mohalla/Gungunte Palya gaon ka daura kiya — S IRF daura/maujoodgi, koi vikas-karya nahi; (2) Prajwal Revanna pen-drive expose par action ki maang (thesouthfirst, May 2024, non-whitelist + sirf political bayan); (3) Nikhil Kumaraswamy ki padayatra me saath (The Hindu, Aug 2024) — political event, kaam nahi; (4) Free health check-up camp ka udghatan, First Grade College Mulbagal (SDUAHER college website, Jul 2023) — non-whitelist source + CSR/abhiyan event, bhautik sarkari sanrachna ka lokarpan/shilanyas nahi; (5) Film producer — Kannada film Brindavihari (cinemaexpress, Sep 2026) — private business, kaam nahi; (6) Fake caste certificate case (newskarnataka archive, 2018) — PURV MLA G. Manjunatha ke khilaf, galat vyakti + pre-term; (7) Kumaraswamy media interaction me maujoodgi (nationpress/organiser, Oct 2026, non-whitelist) — presence only; (8) KLLADS: Rs 2cr/seat/varsh fund record me darj hai lekin Mulbagal ke liye itemized sifarish/kharch ka koi itemized source nahi mila; (9) Halafnama ke 2 pending mamle (Mulbagal Rural PS: IPC 171H + Child Labour Act; IPC 171E/188, 2018) — pre-term affidavit matters, May 2023 ke baad koi nyayik vikas whitelist media me nahi mila — 'halafname akele' rule se negative nahi. NEGATIVES: koi bhi whitelist media me May 2023+ FIR/chargesheet/confirmed janch NAHI mili jisme MLA khud aaropi ho. RETRY-LEAD: Deccan Herald/TOI par 'Mulbagal' keyword se periodic re-check — seat chhoti coverage wali hai; Kannada press (Prajavani/Udayavani) whitelist-bahar hai, unke leads ko whitelisted outlet confirm kare to hi entry.
karnatakaWorks['samruddhi-v-manjunath'] = [];

// roopa-kala-m (Kolar Gold Field SC, INC) — REJECT-LOG: (1) Shakti scheme bus launch (11 Jun 2023, Robertsonpet, NDTV/ET Now/thesouthfirst): sarkari abhiyan shubharambh — REJECT; bus-chalane par KSRTC Kolar division ne janch ka aadesh diya tha (The Hindu via Wikipedia citation) lekin FIR/chargesheet/adlatt koi nyayik vikas nahi — negative NAHI. (2) Integrated township prashn — The Hindu (14 Mar 2025): Question Hour me Roopakala M ke prashn par Urban Development Minister B. S. Suresh ne kaha KGF me koi bada kaam shuru nahi hua, sirf boundary demarcate hui; 1,000 acre BGML bhoomi par 700 acre industry + 300 acre township, PPP model, feasibility report ke baad kadam — Vidhansabha prashn ka dastaveji nateeja, credit capped ke saath entry rakhi. (3) Rail-roko RPF case (FIR Cr. No. 1269/2017, 19 Oct 2017, Marikuppam station; Railways Act 147/145(b)/174(a)): halafname (myneta) me cognizance JMFC Bangarpet; Karnataka HC me Criminal Petition (2021 se interim stay) aur 20 Dec 2023 ko order (Smt Roopakala M @ Roopa Shashidhar vs State by Post Commander/RPF) — pre-term FIR ka post-May-2023 nyayik vikas hai, lekin sources sirf legal databases hain (indiankanoon — browser par 403, casemine — captcha wall); kisi whitelist established media me is case ya 20-12-2023 ke order ki coverage nahi mili — negative entry NAHI, RETRY-LEAD. (4) Election Petition No. 3 of 2023 (Dr. Ramesh Babu V M vs Roopakala M), HC order 16 Jan 2025: 'chunav-yachika akele' rule se negative NAHI — RETRY-LEAD: order ka outcome + whitelist media coverage dhoondo. (5) Sec 171(H) RP Act, Cr. No. 175/2018, Bethamangala Police (myneta 2018): pre-term halafname mamla akele, May 2023+ koi nyayik vikas nahi mila — negative NAHI. (6) Congress MLAs war of words (TNIE/NDTV, 23-25 Sep 2026): Bangarpet MLA S. N. Narayanaswamy ke aarop ('will deal with you') — aarop akele, FIR/janch/court nahi; party-internal mamla — negative NAHI. (7) 2026 war-of-words ke baad Congress MLAs ka CM D. K. Shivakumar se meeting (TNIE, 5 Oct 2026): vikas charcha/general rajneeti, koi dastaveji kaam nahi — REJECT. (8) KGF industrial township tender (moneycontrol, Jul 2026): sarkari pariyojna (feasibility consultant tender) — MLA ki vyaktigat dastaveji bhoomika nahi — REJECT. (9) Kolar district Jal Sanchay award (ibcworldnews, Nov 2025): jila-stariya sarkari uplabdhi, MLA ki disclosed bhoomika nahi — REJECT. (10) BGML tailing-dumps mining revival (The Hindu, Jun 2024): Cabinet-level kendriya/rajya nirnay, MLA ki vyaktigat bhoomika nahi — REJECT. (11) 2022 BEML land integrated township question (Business Standard, 16 Sep 2022): pre-term (2023 karyakaal se pehle) — REJECT. (12) Chairperson Karnataka Handicrafts Industrial Development Corporation (Jan 2024, Wikipedia-cited): pad, vikas-kaam nahi — REJECT. (13) MP Mallesh Babu ke MPLADS (sitharaman/MPLADS news me Kolar district): MP ke kaam — REJECT. KLLADS fund: Roopa Kala dwara sifarish kiye gaye itemized works ka koi whitelist source nahi mila — fund dawa nahi joda. FOUNDATION CROSS-CHECK: src/data/karnataka.ts me 'roopa-kala-m' entry maujood (Kolar Gold Field SC, INC, works: []) — party field sahi hai, koi flag nahi; is fragment ki 1 entry foundation ke khali works se antar rakhti hai (merge par dhyan dein).
karnatakaWorks['roopa-kala-m'] = [
  {
    title: 'Vidhansabha Question Hour me MLA Roopakala M ke prashn par Urban Development Minister B. S. Suresh ne kaha ki KGF me integrated township par abhi tak koi bada kaam shuru nahi hua hai, sirf boundary demarcate hui hai; 1,000 acre BGML bhoomi par feasibility report ke baad PPP model se 700 acre industry aur 300 acre township banane ka ashwasan mila.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/not-much-work-done-on-integrated-township-project-in-kgf-minister/article69329676.ece',
    date: '2025-03-14',
    note: 'The Hindu (14 Mar 2025) ne likha ki Question Hour me Roopakala M (Congress) ke prashn ke jawab me Urban Development Minister B. S. Suresh ne kaha ki State Budget 2024-25 me ghoshit integrated townships me KGF wali pariyojna (lagbhag 1,000 acre BGML bhoomi; 700 acre industry + 300 acre township) par abhi tak koi bada kaam shuru nahi hua, sirf boundary demarcate hui aur boundary ki patthariyan rakhi gayi; consulting agency ki feasibility report ke baad PPP model se action hoga. MLA ne mantri se pariyojna tez karne ka aagrah kiya kyunki isse sthaniya logon ko rozgar milega. Credit capped: ye MLA ke kaam ka nateeja nahi, sirf unke prashn par mantri ka dastaveji jawab/ashwasan hai.',
    period: '2023-2028',
  },
];

// s-n-narayanaswamy-k-m (Bangarapet SC, INC, Karnataka — karyakaal May 2023+) — REJECT-LOG:
// WORKS — koi bhi VALID entry nahi mili (whitelist media me MLA ka vyaktigat lokarpan/shilanyas nahi):
// (1) KUIDFC chairman niyukti (26 Jan 2024; New Indian Express "34 MLAs made chiefs of boards", Wikipedia) — board/corporation ka pad, seat-level bhautik kaam nahi; KUIDFC statewide urban infrastructure, Bangarapet seat ka nirdharit kaam nahi → REJECT.
// (2) Cabinet-berth virodh: Bangarpet bandh, bike rally, road-block (Aug 2026; Deccan Herald, The Week, dailyworld) — mantri-pad ki maang/rajneeti, vikas-kaam nahi → REJECT.
// (3) Vidhansabha me KGF MLA Roopa Kala Shashidhar se table-thokne wala jhagda (Sep 2026; NIE, NDTV) — assembly incident, koi FIR/chargesheet nahi, kaam nahi → REJECT.
// (4) Kolar-Chikkaballapur ke Congress MLAs ki CM Shivakumar se mulaqat (Oct 2026; New Indian Express) — "development issues" par charcha + DCC bank ghotaale ki janch ki maang; sirf meeting/maang, dastaveji nateeja nahi → REJECT (sirf maang/prastav).
// (5) Bangarpet station ka Amrit Bharat redevelopment (curlytales/Times Now) — kendriya railway yojana, MLA ki vyaktigat dastaveji bhoomika nahi → REJECT.
// (6) CM Shivakumar ka Malur 'Sadhana Sambhrama' (Rs 3,200 crore; Deccan Herald) — dusri seat (Malur) + CM ka karyakram, Narayanaswamy ki bhoomika nahi → REJECT.
// (7) KLLADS (Rs 2cr/seat/varsh) — scheme ka fund record foundation (karnataka.ts) me darj hai, lekin is MLA dwara sifarish kiye gaye itemized Bangarapet works ka koi whitelist source nahi mila → fund bina itemized source ke entry nahi.
// (8) DevDiscourse (May 2026): former Bangarpet MLA M Narayanaswamy ka Congress me shamil hona — alag vyakti (M Narayanaswamy), is MLA se sambandhit nahi → REJECT.
// NEGATIVES (REJECTED):
// (a) Crime No.126/2023 — chunav-abhiyan me 04.05.2023 ko cash se bhare vahan (jo 20.04.2023 ko bech diya gaya tha) ke aadhar par IPC 171E/171B + RP Act ke aarop; Karnataka HC ne criminal petition (S N Narayana Swamy K M v. State of Karnataka) me proceedings/investigation quash ki (casemine.com judgment text) → REJECT: (i) source non-whitelist (casemine, legal database — whitelist me nahi); (ii) FIR pre-term (May 2023 se pehle). Watch-item ke roop me lead.
// (b) Halafnama 2023 (News18/ADR): 1 criminal case — sambhavatah upar wala hi mamla; 'halafname ke mamle akele' rule → REJECT.
// (c) Janata Darshan mamle me MP Muniswamy ki Governor ko shikayat (minister Byrathi Suresh + SP par) — MLA us shikayat me aaropi nahi; aur MLA ne MP ke khilaf jo counter-FIR karayi, usme MLA shikayatkarta (aaropi nahi) → negative-rule fail.
// RETRY-LEADS: (i) Janata Darshan FIRs (Gulpet police) ke baad chargesheet/quash/janch-band ka koi whitelist update — mile to negative entry update karo; (ii) The Hindu ka FIR wala article direct fetch par 403 mila — live browser me kholkar verify karo; (iii) Crime 126/2023 HC quash order ka whitelisted coverage (The Hindu/Deccan Herald/IE) mile to watch-item ko negative me badlo (stage: adalati raahat — quash).
// FOUNDATION CROSS-CHECK: karnataka.ts me slug 's-n-narayanaswamy-k-m' (Bangarapet SC, INC), works: [], fund KLLADS allocated Rs 2cr/seat/varsh, utilized null — is fragment (works 0, negative 1) se koi antar nahi. Party field (INC) sahi hai, flag karne ko kuch nahi.
karnatakaWorks['s-n-narayanaswamy-k-m'] = [
  {
    title: 'Janata Darshan karyakram me BJP MP S Muniswamy se manch-par jhagde ke baad MLA S N Narayanaswamy par bhi Gulpet police me FIR darj — shanti-bhang ke liye jaanboojhkar apmaan aur aapradhik dhamki ke aarop',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/kolar-mp-and-mla-clash-in-public-programme-file-fir-and-counter-fir/article67366820.ece',
    date: '2023-09-30',
    note: 'The Hindu ke mutabiq 25 Sept 2023 ko Kolar me Janata Darshan karyakram ke manch par BJP MP S Muniswamy aur Congress MLA S N Narayanaswamy (Bangarpet) ke beech zabani jhagda hua — MP ne MLA par zameen-hadapne walon (bhu kallaru) ke saath manch par baithne ka aarop lagaya, dono ne ek-dusre ko galiyan di aur lagbhag haathapai ho gayi. Dono ne Gulpet police me ek-dusre ke khilaf case darj karaya; police ne dono ke khilaf jaanboojhkar apmaan karke shanti-bhang uksane aur aapradhik dhamki ke tahat do FIR darj ki. BJP Yuva Morcha ke Balaji R. ki shikayat me aarop tha ki MLA ne MP ko galiyan di aur dhamki di. MLA ka jawab (report me darj): MP ne unpar zameen-hadapne walon ke saath milkar zameen-vivad suljhane ka aarop lagaya tha, is par unhone MP ko aarop sabit karne ki chunauti di, jis se jhagda hua. Stage: FIR darj (Gulpet police); police karyakram ki video recording jama karke janch kar rahi hai; chargesheet, giraftari ya adalati raahat ki koi report research-tithi (19 Oct 2026) tak nahi mili. Disclosure: The Hindu ka page direct fetch par 403 mila, isliye tathya The Hindu ke indexed article text se liye gaye; IANS wire (daijiworld, 30 Sept 2023) aur New Indian Express ki ghatna-report (26 Sept 2023, poori kholi-verified, MLA ko “Bangarpet Congress MLA SN Narayanaswamy” ke roop me pehchana) me ghatna ki pushti hoti hai. Credit: kewal FIR/janch ka tathya; dosh siddh nahi hua hai.',
    period: '2023-2028',
  },
];

// kothur-g-manjunatha (Kolar seat, Kolar jila, INC) — researched 2026-10-19 — 0 works + 1 negative entry.
// Pehchan (grounded, web): Kothur G. Manjunatha (Kottur Manjunath / G. Manjunath bhi likha jata hai),
// Kolar seat se INC ke MLA; 13 May 2023 ko chune gaye (ThePrint-PTI: 83,990 vote, 30,761 margin se jeet,
// runner-up C. M. R. Srinath, JD(S)). Pehle 2013-2018 tak Mulbagal (SC seat) se Independent MLA rahe;
// 2018 me Karnataka High Court ne galat jati-pramanpatra ke aadhar par unka chunav radd kiya tha.
// Party-field flag: KOI NAHI — sabhi sroton me (Indian Express: "the Congress MLA from Kolar";
// The Hindu: "Kolar Congress MLA"; ThePrint-PTI: "Congress leader Kothur G Manjunath") INC hi pusht hai.
// REJECT-LOG (whitelist: The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, Deccan Herald, PTI-on-established-outlet):
// 1. ibcworldnews.com (8 Dec 2025): "Development Work Worth Rs 1,041 Crore Completed in Kolar, MLA Kottur Manjunath Asserts" — whitelist me NAHI (chhota portal); "inaugurated several development projects" aspasht (kaun se kaam, pata nahi); Rs 60 lakh grant "next state budget" me — bhavishya ki ghoshna; Bangarpet Road/ring road — yojna-stariya ashwasan — REJECT.
// 2. Deccan Herald (18 Oct 2026): "No lift, no ramp: Kolar taluk office leaves elderly struggling" — Tahsildar ke anusar MLA ne CSR fund se lift lagwane ki pehal ki — CSR kharch = niyam se REJECT (CSR/daan/niji kharch ke kaam).
// 3. Deccan Herald (Sep 2026): Kottur Manjunath Kolar-Chikkaballapur DCC Bank ke president nirvirodh chune gaye — sahkari bank ka pad hai, bhautik vikas-kaam nahi — REJECT.
// 4. Deccan Herald: Malur me 'Sadhana Sambhrama' karyakram me CM D.K. Shivakumar ne Rs 3,200 crore ke karyon ka shilanyas/lokarpan kiya — CM ka karyakram, Malur seat (Manjunath ki seat nahi), Manjunath ki vyaktigat dastaveji bhoomika srot me nahi — REJECT.
// 5. The Hindu (24 Feb 2026, khola-padha): Vemagal ki Tata-Airbus helicopter assembly unit ko bijli kaatne ki dhamki, panchayat ko licence renew na karne ka nirdesh — rajnaitik vivad hai; lekh me koi FIR/shikayat/janch/adalati vikas nahi — work nahi, negative bhi nahi — REJECT.
// 6. UNI copy (uniindia.com: 3 Jun 2024 "Cong MLA acknowledges BJP returning to power"; May 2025 Sindoor-row items) — UNI whitelist me spasht roop se REJECT hai — srot nahi banaya.
// 7. organiser.org + newskarnataka.com (May 2025): Operation Sindoor par tippani ko lekar Banashankari Police Station (Bengaluru) me FIR/shikayat ka daava — dono whitelist ke bahar; The Hindu (18 May 2025) ki isi prakaran ki coverage me FIR ka koi ullekh NAHI — sthapit media se FIR-darj ki pushti nahi — negative entry NAHI (neeche retry-lead).
// 8. hapka.info (aggregator): 2023 halafname me "1 criminal case" ka daava — aggregator srot + halafname-mamle akele = negative nahi; koi FIR/chargesheet vivaran nahi — REJECT.
// 9. New Indian Express (18 Jan 2024): single-judge ne Manjunatha ki yachika kharij ki — New Indian Express whitelist me NAHI (whitelist me keval "Indian Express" hai); isi mamle ka navintam vikas (Apr 2026 division-bench dismissal) whitelisted Indian Express se entry me liya gaya — alag entry nahi banai.
// 10. Whitelisted outlets par May 2023 ke baad Manjunath ke vyaktigat shilanyas/lokarpan (sadak, school bhavan, paani tank, aspatal bhavan aadi), GO-backed swikriti me unki dastaveji bhoomika, ya vidhansabha-prashn ke dastaveji nateeje ki koi khabar nahi mili — isliye works 0.
// NEGATIVE NOTE: Neeche 1 negative entry hai — Indian Express (whitelisted, 19 Apr 2026) par aadharit, Karnataka HC division-bench ka 17 Apr 2026 ka aadesh (May 2023 ke baad ka nyayik vikas). Ye "chunav-yachika akele" nahi hai: 2013-2018 wali chunav-yachika ka faisla 2018 me ho chuka tha; vartaman karyawahi unki apni writ-appeal thi jo DCVC ke jati-pramanpatra nishkarsh ko chunauti deti thi — adalat ne use kharij kiya. Unka paksh (prakriyatmak takniki tark) note me darj hai; stage-accurate framing rakhi gayi hai (koi FIR/chargesheet report nahi, dosh-siddhi nahi; rajya ko keval karyawahi ki swatantrata).
// RETRY-LEADS: (a) Operation Sindoor FIR (Banashankari PS, Bengaluru, May 2025) — organiser.org/newskarnataka ke daave ki Deccan Herald/TOI/The Hindu/Indian Express par pushti mile to negative entry ban sakti hai; (b) Feb 2026 Airbus-bijli dhamki par Tata Advanced Systems ya kisi paksh ne police shikayat/FIR ki ho to check karein; (c) ibcworldnews (8 Dec 2025) ke Rs 1,041 crore daave ya Dodda Hasala karyakram ki whitelisted outlet par dastaveji coverage mile to works entry sambhav; (d) KLLADS (Rs 2 crore/saal/MLA — ka_research_notes.md me The Hindu Dec 2025 se verified) se Kolar me kiye karyon ki GO/sarkari-portal suchi mile to 'sarkari' badge entry.
// NOTE: Neeche ke saare titles/notes Roman-script Hinglish me hain (Devanagari/Kannada script nahi), currency 'Rs' me. Negative entries me 'stage' field NAHI hai.
karnatakaWorks['kothur-g-manjunatha'] = [
  {
    title: 'Karnataka High Court ne Kolar ke Congress MLA G. Manjunatha ki appeal kharij ki — SC jati-pramanpatra avaidh hone ka DCVC nishkarsh barkarar; adalat ne kaha rajya uchit aapradhik ya prashasanik karyawahi shuru karne ke liye swatantra hai',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/legal-news/karnataka-hc-mla-manjunatha-false-caste-certificate-case-10645090/',
    date: '2026-04-19',
    note: 'NEGATIVE entry. Indian Express (19 Apr 2026) ke anusar Karnataka High Court ki division bench (Chief Justice Vibhu Bakhru aur Justice C.M. Poonacha) ne 17 April 2026 ke aadesh me Kolar ke Congress MLA G. Manjunatha ki appeal kharij kar di aur District Caste Verification Committee (DCVC) ki report ko barkarar rakha, jisne unka Scheduled Caste pramanpatra avaidh thahraya tha. Adalat ne paya ki ve Budga Jangam (SC) ke bajay Byragi samuday (OBC) ke hain; Tahsildar ke endorsement se pata chala ki pramanpatra “misusing the computer at the Tahsildar\u2019s office” ke jariye banaya gaya tha aur iske jaari hone ka koi sarkari record maujood nahi hai. Bench ne kaha ki “There is a serious allegation of obtaining a false caste certificate against the appellant” aur rajya uchit aapradhik ya prashasanik karyawahi shuru karne ke liye swatantra hai. Manjunatha ka paksh: unki appeal mukhyatah prakriyatmak takniki aadhar par thi — single judge ka faisla 8 mahine tak reserve rakhne ke baad sunaya gaya tha (Supreme Court ke Anil Rai v. State of Bihar disha-nirdeshon ka hawala) — adalat ne is tark ko kharij kar diya. Prishthabhoomi: 2018 me High Court ne galat jati-dave ke aadhar par unka (Mulbagal seat se) chunav radd kiya tha; 2020 me Supreme Court ke nirdesh par DCVC janch hui; Jan 2024 me single judge ne unki yachika kharij ki thi. Stage disclosure: report me unke khilaf koi FIR ya chargesheet darj hone ki khabar NAHI hai — adalat ne keval rajya ko karyawahi ki swatantrata di hai, dosh-siddhi nahi hui hai. Ye faisla unki vartaman Kolar seat (samanya seat) ko seedha prabhavit nahi karta — lekh me vartaman vidhayak pad ke viruddh koi aadesh nahi hai.',
    period: '2023-2028',
  },
];
// COUNTS: works 0, negatives 1. Sources: The Indian Express (1).

// k-y-nanjegowda (Malur, INC, Karnataka — karyakaal May 2023+) — REJECT-LOG:
// WORKS — koi bhi VALID entry nahi mili (whitelist media me MLA ka vyaktigat lokarpan/shilanyas nahi):
// (1) Deccan Herald (11 Aug 2026): Deputy CM D.K. Shivakumar ne Malur me Rs 3,200 crore ke kaamon ka udghatan/shilanyas kiya; MLA K.Y. Nanjegowda sirf maujood the aur unhone bayan diya ("it is a historic day... development works worth Rs 3,200 crore are being undertaken under the leadership of Siddaramaiah and D.K. Shivakumar") → REJECT (dusre neta ka karyakram; sirf upasthiti).
// (2) Economic Times (Oct 2022): Allcargo logistics park (Malur) ka udghatan MLA ne kiya — lekin pre-term (Oct 2022, karyakaal se pehle) aur niji company ka project → REJECT (pre-term + niji).
// (3) IndiaCSR (2021): Wistron WeCare CSR oxygen generator plant, Malur govt hospital — MLA ne udghatan kiya, lekin pre-term (2021) aur CSR/daan → REJECT (pre-term + CSR).
// (4) Vidhansabha maang/prashn ka dastaveji nateeja, mantri-ashwasan, GO/order-backed swikriti, ya KLLADS fund se itemized kaam — koi whitelist source nahi mila.
// NEGATIVES (REJECTED):
// (1) Chunav-yachika (K.S. Manjunath Gowda, BJP): Karnataka HC ne Sept 2025 me Nanjegowda ka 2023 chunav radd karke recount ka aadesh diya; SC ne 14 Oct 2025 ko stay diya; SC ne 5 Feb 2026 ko recount ke baad unki jeet barkarar rakhi (New Indian Express / The Hindu) → REJECT: 'chunav-yachika akele' rule.
// (2) BJP ka 54 'fake' votes ka aarop, Malur SIR (Deccan Herald, 10 Oct 2026): siyasi aarop; MLA kisi FIR/janch me aaropi nahi → REJECT.
// (3) Halafnama ke mamle akele — koi nyayik vikas nahi → REJECT (rule).
// RETRY-LEADS: (a) Land-grant case me chargesheet ki sthiti (The Hindu Sept 2023 ke baad koi whitelist update nahi mila); (b) ED provisional attachment (Jul 2025) ke baad confirmation/Adjudicating Authority ka faisla; (c) Kannada press (Prajavani/Vijayavani — whitelist-bahar) me Malur lokarpan ke leads — confirm hone par hi entry.
karnatakaWorks['k-y-nanjegowda'] = [
  {
    title: 'Sarkari zameen aavantan me farzi dastavejon se apatron ko lagbhag 80 acre dene ke kathit aarop par High Court ne jaanch ki anumati di',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/karnataka-high-court-allows-investigation-against-malur-mla-in-criminal-case-for-granting-government-land-to-ineligible-persons-based-on-forged-documents/article67365769.ece',
    date: '2023-09-30',
    note: 'The Hindu ke mutabiq Karnataka High Court (Justice M. Nagaprasanna) ne Nanjegowda aur committee ke teen anya sadasyon ki yachika kharij karke Malur taluk Land Grant Committee ke adhyaksh ke roop me 2019 me lagbhag 80 acre sarkari zameen apatron (mrit vyaktiyon sahit) ko farzi dastavejon par dene ke kathit aarop me jaanch ki anumati di; court ne Nov 2022 me jaanch par laga stay bhi hataya. Special Court (MP/MLA cases) ke 15 Oct 2022 ke aadesh par Malur police ne FIR darj ki thi. Chargesheet ki koi report abhi tak saamne nahi aayi; report me MLA ka jawab nahi mila. Credit: kewal adalati tathya; dosh siddh nahi hua hai.',
    period: '2023-2028',
  },
  {
    title: 'ED ne PMLA ke tahat MLA ke ghar aur KOMUL karyalaya par chhapemari ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/karnataka/2024/jan/09/ed-raids-premisesof-malur-congressmla-nanjegowda-2649259.html',
    date: '2024-01-09',
    note: 'TNIE ke mutabiq Enforcement Directorate ne Malur me Nanjegowda ke ghar aur KOMUL ke prashasanik block par money-laundering jaanch (PMLA) ke tahat chhapemari ki; chhapemari zameen-aavantan mamle se judi thi. MLA aur directors ne aaropon se inkaar kiya; Nanjegowda ne kaha aarop sirf unki chhavi kharab karne ke liye hain aur chayan keval merit par hoga. Stage: janch/chhapemari; giraftari ya chargesheet ki report nahi. Credit: sirf ED ki karvai ka tathya; dosh siddh nahi hua hai.',
    period: '2023-2028',
  },
  {
    title: 'ED ne KOMUL bharti ghotaale me MLA ki lagbhag Rs 1.32 crore ki sampatti provisional attach ki; MLA ko “principal architect” bataya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/states/karnataka/2025/Jul/18/ed-attaches-assets-worth-rs-132-crore-of-malur-congress-mla-ky-nanjegowda',
    date: '2025-07-18',
    note: 'TNIE ke mutabiq ED Bengaluru zonal office ne 16 Jul 2025 ko PMLA ke tahat 2023 KOMUL bharti ghotaale me Nanjegowda aur anyon ki lagbhag Rs 1.32 crore ki sampatti provisional attach ki. ED ka aarop: Nanjegowda (tatkalin chairman, KOMUL) is “mega scam” ke “principal architect” the; bharti prakriya me hera-pheri se Rs 1,56,50,000 ka proceeds of crime bana aur unhone Rs 80 lakh ka avaidh labh uthaya; ED ne zameen-aavantan mamle me money-laundering case bhi darj kiya aur MP/MLA Special Court me shikayat di. Stage: provisional attachment (final nahi); attachment wali report me MLA ka jawab nahi mila — lekin TNIE ki chhapemari wali report (Jan 2024) me MLA ne bharti se jude aaropon se inkaar kiya tha. Credit: sirf ED ke aarop/karvai; dosh siddh nahi hua hai.',
    period: '2023-2028',
  },
];


// ============ KARNATAKA BATCH 9 — Koppal jila (coordinator merge) ============
// doddanagouda-patil (Kushtagi, BJP; term 20 May 2023+; Opposition chief whip 27 Dec 2023+) — REJECT-LOG:
// (1) Vijayavani (30 Oct 2024): taluk-stariya 'Pratibha Karanji' karyakram ka Kushtagi ke PCH Bhavan me uddghatan — karyakram-shubharambh, bhautik sarkari sanrachna ka lokarpan/shilanyas nahi; Vijayavani whitelist me nahi, REJECT.
// (2) Prajavani (18 Oct 2026): Dasra/Navratri par Kushtagi ke Kalikadevi mandir me puran-pravachan karyakram me vakta ke roop me maujoodgi — dharmik karyakram, sarkari fund disclosed nahi; Prajavani whitelist me nahi, REJECT.
// (3) Navasamaja (Oct 2026) / OpIndia: diesel shortage par Kushtagi depot ke bahar BJP karyakarton ke saath pradarshan — virodh-pradarshan, vikas kaam nahi, REJECT.
// (4) Gadag (Talakal)–Kushtagi 56 km rail line lokarpan + Train 17328 (MoSR V. Somanna) — kendriya pariyojna, MLA ki vyaktigat dastaveji bhoomika ka koi whitelist source nahi, REJECT.
// (5) TOI Hubballi (Jul 2025): Vijayendra ke BJP state president par tippani — raajneetik bayan, kaam nahi, REJECT.
// (6) PTI (ThePrint 21 Mar 2025; ABP 11 Aug 2025): 18 BJP MLAs ka 6-mahine ka suspension (budget-session hungama me Speaker ki kursi tak gherav) — isme chief whip Doddanagouda Patil bhi the. Vidhan-Sabha anushasanik karyawahi hai; koi FIR/chargesheet/janch/adalati aadesh nahi — 'party karyawahi akele' rule se negative NAHI. Suspension 25 May 2025 ko wapas bhi le li gayi (11 Aug 2025 ko Sadan ne ratify kiya).
// (7) Karnataka HC CrLP 7545/2023 (indiankanoon): MLA ne FIR dated 06.04.2023 (Tavaregere PS, Kushtagi Circle; Crime 41/2023; dhara 171(F) IPC + Sec 7 Religious Institutions (Prevention of Misuse) Act) ko quash karne ki 482 petition file ki, 24 Aug 2023 ka aadesh. FIR pre-term (chunav-kal ki) hai aur mamle par koi whitelist established-media reporting nahi mili — negative-rule me 'established media' condition fail, isliye negative NAHI. RETRY LEAD: agar kisi whitelist outlet me is mamle ki coverage mile to phir stage check karo.
// (8) 2013 ka election-code case (Hungund CC 590/2013, 171H IPC) — 2014 ka HC case, pre-term + bina vartaman vikas, REJECT.
// (9) 'Pakistan Zindabad' slogans complaint (Feb 2024): shikayat Patil NE DARJ KI (Vidhana Soudha PS) — ve complainant hain, aaropi nahi, negative NAHI.
// (10) The Hindu (11 Dec 2025) PHC/CHC khaali padon par unke prashn ke jawab me mantri ne ek mahine me pad bharne ka aashwasan diya — 'Vidhansabha prashn ka dastaveji nateeja / mantri-ashwasan' rule se ENTRY banayi gayi hai (credit capped: aashwasan rajya-stariya tha, seat-specific swikriti nahi).
// (11) KLLADS (Rs 2cr/seat/varsh) ka unke istemal par koi whitelist-sourced tathya nahi mila — fund disclosure joda nahi.
// Foundation cross-check: src/data/karnataka.ts me slug 'doddanagouda-patil' ka profile maujood hai (party: BJP — field sahi; works: [] — koi pehle se entry nahi). Fragment file me karnatakaWorks['doddanagouda-patil'] se assign hota hai — dohrane/antar ka risk nahi. Background me criminalCases: 1 (halafnama-stariya mamla) darj hai — halafname-ke-mamle-akele rule se negative NAHI.
// Party-field flag: koi nahi — foundation me party BJP sahi darj hai (term 2023–2028, BJP).
karnatakaWorks['doddanagouda-patil'] = [
  {
    title: 'Kushtagi MLA Doddanagouda Patil ke Vidhansabha prashn par Health Minister Dinesh Gundu Rao ne PHCs, CHCs aur taluk aspatalon me visheshagya doctor, medical officer, nurse aur pharmacist ke khaali padon ko ek mahine me bharne ka aashwasan diya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/panel-to-study-setting-up-of-phcs-chcs-dinesh-gundu-rao/article70384154.ece',
    date: '2025-12-11',
    note: 'The Hindu ke mutabik Assembly session (Belagavi) me Kushtagi MLA Doddanagouda Patil ke prashn ke jawab me Minister Dinesh Gundu Rao ne kaha ki PHCs, CHCs aur taluk hospitals me specialist doctors, medical officers, nurses aur pharmacists ke khaali pad ek mahine me bhar diye jayenge; 337 specialist doctors aur 250 medical officers ke pad contract par bharne ki anumati di ja chuki hai, sarkari kota se medical padhai poori karne walon ki compulsory sarkari seva ke tahat 1,500 doctors ke pad bharne ke kadam uthaye gaye hain, aur Finance Department ne 120 specialist doctors aur 100 medical officers ki bharti par sehmati di hai. Credit capped: mantri ka aashwasan rajya-stariya tha, Kushtagi seat ke liye koi seat-specific swikriti lekh me darj nahi hai. MLA ka jawab lekh me shamil nahi hai.',
    period: '2023-2028',
  },
];

// shivaraj-tangadagi (Kanakagiri SC, INC — mantri; karyakaal May 2023+) — REJECT-LOG:
// WORKS — koi bhi VALID entry nahi mili (whitelist media me May 2023+ ka Kanakagiri seat ka vyaktigat lokarpan/shilanyas nahi):
// (1) The Hindu (Apr 2026, whitelist): "Minister calls for grand Kanakagiri Utsav starting May 16" — Sri Kanakachalapati temple parisar me taiyari-bethak ki adhyakshata, 18 committees, helicopter rides/sports meet/kavigoshti ki yojana, utsav ki tithiyan 9-10 May se badalkar 16-17 May 2026 ki gayin — ye festival-event ki taiyari-bethak hai, bhautik sarkari sanrachna ka lokarpan/shilanyas NAHI → REJECT (sarkari abhiyan/event).
// (2) Deccan Chronicle (Nov 2023, non-whitelist): Chief Minister's Amrutha Nagarothana Phase-IV Rs 1,799.76 lakh ke kaamon ka shilanyas Basaveshwara Circle, Koppal city me — ye Koppal seat hai, Kanakagiri seat NAHI; Tavaragera/Kukanur/Yelaburga/Kanakagiri/Karatagi me tech-drainage "proposal submitted, cabinet approval pending" = sirf prastav; Kukanur/Karatagi/Kanakagiri taluks ke liye Rs 500 crore drinking water "securing" = sirf daava/ghoshna → REJECT (seat ke bahar + sirf ghoshna/prastav + source whitelist me nahi).
// (3) Budget 2025-26 annexure (kannada.oneindia.com PDF, non-whitelist): Kanakagiri hospital ko 100-bedded taluk hospital me badalne ka budget-faisla — CM ka rajya-budget faisla, MLA ki vyaktigat dastaveji bhoomika nahi → REJECT (rajya pariyojna).
// (4) publicnext.com (Dec 2023, non-whitelist): Basarihal/Gowripura gram panchayaton ke gaonon ka mass contact programme daura, samasya-suchi aur ashwasan — sirf daura/ashwasan → REJECT (source whitelist me bhi nahi).
// (5) The Hindu (2015): "Minister Tangadagi is misusing his powers" — pre-term (pehla karyakaal) me forum ka aarop ki wo Hulihydara GP bhrashtachar ujagar karne wale Dalit chhatron par hamle ke aaropiyon ko bacha rahe hain — unke khilaf koi FIR, chargesheet ya nyayik vikas nahi → REJECT (work bhi nahi, negative bhi nahi).
// NEGATIVES — 1 VALID entry bani (NIE, 27 Mar 2024):
// (1) The New Indian Express (27 Mar 2024, whitelist): Modi ke khilaf kathit apshabd wale viral video ke 2 din baad Koppal police ne unke khilaf complaint darj ki — wo Koppal LS candidate Rajshekar Hitnal ke liye Congress prachar me bole the ki Modi ka naam lene wale yuvon ko thappad marna chahiye; BJP netaon (Pralhad Joshi, Basavaraj Bommai) ne virodh kiya; varishth police adhikari ne kaha janch report ke aadhar par karwai hogi. Tangadagi ne jawab diya: Congress neta ke taur par wo BJP ki tareef nahi kar sakte — "As the Congress leader should I praise BJP?" Stage: sirf complaint darj + police janch ka elaan; FIR number, chargesheet ya adalati aadesh ki khabar nahi mili → ENTRY BANAYI (stage-accurate framing ke saath).
// NEGATIVES — REJECT:
// (2) TOI Hubballi (Mar 2025, whitelist): RTI se Kanakagiri Utsav 2023-24 ke kharch me financial irregularities ka activist Ravi Agoli ka aarop (Rs 8.23 crore budget; 2.56 tonne brinjal Rs 75/kg = Rs 1.92 lakh; 145 kg adrak Rs 36,250; "aadhe funds ka durupyog"); Agoli ne Governor/CM/chief secretary ko complaint bheji (officials/contractors ke khilaf janch ki maang); Tangadagi ne aaropon ko khariz kiya; BJP MLA Gali Janardhana Reddy ne counter-aarop lagaya. → REJECT: MLA KHUD FIR-aaropi-column me nahi; unke khilaf koi FIR/chargesheet/janch ya adalati vikas nahi.
// (3) TOI Hubballi (Sep 2025, whitelist): Malligawada Cross se Malligawada gaon tak (Kanakagiri taluk) RDPR ki Rs 40 lakh, lagbhag 2 km sadak 6 mahine me toot gayi; mantri ne maana ki kuch kaam substandard hain aur thekedaar se bina atirikt fund ke poora stretch dobara asphalt karane ka aadesh diya. → REJECT: unke khilaf koi FIR/janch/adalt vikas nahi; vyaktigat lokarpan ki khabar bhi nahi (isliye work entry bhi nahi).
// (4) Indian Kanoon (14 Jun 2024, legal database — whitelist nahi): Crl.P 5517/2024 aur 5518/2024 — Karatagi PS ke Cr.No.223/2022 aur 224/2022 (2022 ke protest cases, chargesheet dayar) ke khilaf unhone High Court me quash petitions dayar ki. → REJECT: ghatna pre-term (2022); legal-database source whitelist me nahi; ye protest cases hain aur yachika unhone khud dayar ki hai (naya aarop nahi).
// (5) citytoday.media (Jul 2025, non-whitelist): ek Swamiji ka aarop ki Backward Classes Welfare department me Rs 1.5 crore grant release ke liye mantri ne bribe maangi, court ka 26 Mar 2025 ka order cited. → REJECT: source whitelist me NAHI, koi established-media corroboration nahi mili. RETRY-LEAD: is aarop ya kisi nyayik vikas ki The Hindu/TOI/Deccan Herald/PTI coverage.
// (6) newsnext.live (non-whitelist): Kanakagiri Utsav taiyari-bethak me unke bete Shashank ka stage par baithna (protocol vivad); mantri ne galti maani. → REJECT: family/protocol controversy, koi FIR/janch/adalt vikas nahi.
// RETRY-LEADS: (a) citytoday Swamiji bribe-aarop ki whitelist coverage/nyayik vikas; (b) NIE Mar 2024 Modi-jibe complaint ka follow-up (koi FIR/chargesheet/faisla aaya kya); (c) Kanakagiri seat ke vyaktigat lokarpan/shilanyas (sadak/school/paani/aspataal bhavan) ki koi bhi whitelist coverage.
// Roman-Hinglish note: works = 0 entries; negatives = 1 entry (NIE police complaint + janch, Mar 2024). Koi party-field flag nahi (INC confirm).
karnatakaWorks['shivaraj-tangadagi'] = [
  {
    title: 'Modi ke khilaf “thappad” wale bayan par Koppal police ne unke khilaf complaint darj ki; police janch report ke aadhar par karwai ka elaan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The New Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/karnataka/2024/Mar/27/karnataka-complaint-against-minister-tangadagi-for-anti-modi-jibe',
    date: '2024-03-27',
    note: 'NIE ke mutabik March 2024 me Koppal me Congress ke prachar me (Koppal LS candidate Rajshekar Hitnal ke liye) unhone kaha ki Modi ka naam lene wale yuvon ko thappad marna chahiye; viral video ke 2 din baad Koppal police ne unke khilaf shikayat darj ki; BJP netaon (Pralhad Joshi, Basavaraj Bommai) ne virodh kiya; varishth police adhikari ne kaha janch report ke aadhar par karwai hogi. Tangadagi ne jawab me kaha ki Congress neta ke taur par wo BJP ki tareef nahi kar sakte — “As the Congress leader should I praise BJP?” Stage: sirf complaint darj + police janch ka elaan; FIR number, chargesheet ya adalati aadesh ki khabar nahi mili. Tithi URL path (2024/Mar/27) se li gayi hai.',
    period: '2023-2028',
  },
];

// basavaraj-rayareddy (Yelburga, INC — Aug 2026 se Uchch Shiksha Mantri; karyakaal May 2023+) — REJECT-LOG:
// WORKS — koi bhi VALID entry nahi mili (whitelist media me May 2023+ ka seat-level vyaktigat lokarpan/shilanyas nahi):
// (1) Government PU College building Gunnal (New Indian Express, 9 Sep 2026): Rayareddi "inauguration of a Government Pre-University College at Gunnanala village in Koppal taluk" par bole the — lekin page me 'Gunnanala, Koppal taluk' likha hai jabki ek IBC World News report (non-whitelist) usee 'Gunnal village, Yelburga taluk' (Yelburga seat) batati hai, aur 'Koppal taluk' me Gunhalli (Kolur GP) naam ka alag gaon bhi maujood hai. Sthan/taluk ki shanka door nahi hui (seat ke bahar ka risk) → REJECT, RETRY-LEAD: gaon ka sahi naam/taluk (Gunnal vs Gunnanala/Gunhalli) whitelist source se confirm hone par entry banegi. Note: dono reports me lagat bhi ghoshit nahi (IBC ke Rs 2.5 crore ka daava whitelist nahi).
// (2) IBC World News (8 Sep 2026, non-whitelist): 34 lakes Yelburga-Kukunoor ka Rs 970 crore project "15-20 din me shuru"; Gunnal PU college building Rs 2.5 crore lokarpan; classrooms Bukanatti Rs 30 lakh / Hirevankalkunta Rs 60 lakh / Balootagi Rs 60 lakh; Kallabhavi bridge shilanyas Rs 3.5 crore; Hosalli CC road+drainage shilanyas Rs 1 crore; Balootagi bridge-cum-barrage Rs 1.8 crore — page me minister ne karyakramon me hissa liya. Source whitelist me NAHI → entry NAHI; RETRY-LEAD: inhi kaamon ki The Hindu/TOI/Deccan Herald/PTI coverage dhundho, tab entry.
// (3) Deccan Chronicle (Feb 2026, non-whitelist): "18 new high schools sanctioned in 2.5 years, 15 me buildings taiyaar; Huligudda, Nelajeri, Sompur me zameen ki kami; Rs 1 lakh/acre apni jeb se offer" — ghoshna + niji-kharch ka prastav, source bhi whitelist me nahi → REJECT (apne fund ki ghoshna + niji kharch).
// (4) New Indian Express (7 Mar 2025, whitelist): Budget me Yelburga me naya nursing college (Kalyan-Karnataka Rs 5,000 crore package) — CM ka budget-faisla, MLA ki vyaktigat dastaveji bhoomika nahi → REJECT (rajya pariyojna).
// (5) TOI Hubballi: "Don't shut Koppal varsity, Rayareddy, Kyavatar urge CM" — CM ko likha patra (sirf maang), university district-level, mantri-bante-pahle ka bayan → REJECT.
// (6) The Hindu (Apr 2025): "Karnataka No. 1 in corruption" wale bayan ka khandan; (The Print/UNI Jul 2024–2025): guarantee-schemes vs development ke bayan; "Why shouldn't I become CM?" (TOI) — sab political bayan, kaam nahi → REJECT.
// (7) Public TV English (Aug 2026): cabinet expansion ke baad district review meeting ka bayan; Deccan Herald (Sep 2026): 32 universities ka review tour — vibhag ke rajya-stariya kaam, seat-level nahi → REJECT (mantri-niyam).
// (8) Hindustan Times (Oct 2025, whitelist): sand-mafia ki shikayat CM ko patra me — patra/shikayat, bhoomika nahi; kaam nahi → REJECT (sirf shikayat).
// (9) The Hindu (Aug 2015): Hirehalla project punarvas gaon — pre-term (May 2023 se pahle) → REJECT.
// (10) Daijiworld (Jun 2025, non-whitelist): Yarehanchinal road repair — source whitelist nahi; article me MLA ko petitions "koi jawab nahi mila" — kaam bhi nahi → REJECT.
// (11) New Indian Express (9 Sep 2026): "Yelburga-Kushtagi ko drought list me shamil karne ki ghoshna agle hafte" — drought-list maang/ghoshna, kaam nahi → REJECT (sirf ghoshna).
// (12) Kuknoor me Basaveshwara/Ambedkar/Sangolli Rayanna moorti shilanyas (IBC page/319, non-whitelist): shilanyas mantri Shivananda Patil ne kiya, MLA sirf adhyakshata me; moorti = dharmik/cultural sanrachna bina sarkari fund disclosure ke → REJECT.
// (13) KLLADS/itemized fund kharch, GO/order-backed swikriti, ya Vidhansabha maang ka dastaveji nateeja — koi itemized whitelist source nahi mila.
// NEGATIVES — koi bhi VALID entry nahi:
// (1) TOI (Sep 2026, whitelist): K.S. Eshwarappa ne "suo motu FIR" ki MAANG ki (dharm par kathit tippani: mutt-mandir na jaane aur Islam ko superior batane ka aarop) — lekin koi FIR register hone, janch, ya adalati vikas ki khabar nahi mili; mantri ne newindianexpress.com (3 Sep 2026) me jawab diya ("maine kisi dharm ko bura nahi kaha"). FIR-acused-column me naam nahi, sirf FIR ki maang → REJECT (rule: shikayat/maang akele negative nahi). RETRY-LEAD: baad me koi FIR darj hui kya, check.
// (2) Myneta 2018 affidavit profile: "No criminal cases" — halafname me declared case nahi; vaise bhi 'halafname ke mamle akele' rule se negative nahi.
// (3) Pre-term ke kisi maamle me May 2023 ke baad ka nyayik vikas — whitelist media me nahi mila.
// RETRY-LEADS: (a) 8 Sep 2026 ke Gunnal/Gunnanala PU college lokarpan ke sahi gaon+taluk ka whitelist confirmation; (b) IBC ke upar-wale kaam-list (classrooms, bridges, CC road) ki whitelist coverage; (c) Deccan Chronicle ke 18-schools daave ki Deccan Herald/PTI coverage; (d) Eshwarappa FIR-maang ka follow-up.
karnatakaWorks['basavaraj-rayareddy'] = [];

// raghavendra-hitnal (Koppal, INC, May 2023+) — REJECT-LOG:
// WORKS — koi bhi VALID entry nahi mili (whitelist media me MLA ka vyaktigat lokarpan/shilanyas nahi):
// (1) Amrutha Nagarothana Phase-IV: Rs 1,799.76 lakh ke kaamon ka shilanyas (Deccan Chronicle, Basaveshwara Circle Koppal) — shilanyas mantri Shivaraj Tangadagi ne kiya, MLA sirf adhyakshata/maujoodgi me the → REJECT (dusre neta ka karyakram; page ab 403 deta hai — retry lead).
// (2) NH-50 flyover Hosalli–Hitnal (The Hindu, Oct 2025): Rs 19.43 crore NHAI project ka udghatan MP K. Rajashekar Hitnal (bhai) ne kiya; MLA sirf maujood the aur CM ke 6 Oct Koppal daure ka elaan kiya → REJECT (MP/family + kendriya project + sirf maujoodgi; parivaar-niyam).
// (3) ROB, Hitnal village LC-77 (The Hindu/Deccan Chronicle, Jan 2026): Rs 27 crore, Union MoS V. Somanna ne shilanyas kiya (Railway fully funded); MLA ne protocol-vivad me hissa liya, udghatan nahi kiya → REJECT (kendriya project + dusre neta ka karyakram).
// (4) CM Siddaramaiah ka 6 Oct 2025 Koppal daura (The Hindu, pre-event): KIMS 450-bed hospital udghatan + super-specialty shilanyas + Rs 2,000 crore ke kaam — CM ke the; MLA sirf taiyariyon me mantri ke saath → REJECT (pre-event announcement + dusre neta ka karyakram).
// (5) Tungabhadra dam 33 crest gates dedication, Munirabad (The Hindu, pre-event, June 2026): udghatan CM D.K. Shivakumar ne kiya; MLA ne adhyakshata ki → REJECT (pre-event + dusre neta ka karyakram).
// (6) TOI Hubballi: Hublot ghadi (~Rs 18 lakh) gossip, ministerial-berth maang, MLC cross-voting bayan — political/gossip, kaam nahi → REJECT.
// (7) The Print (Dec 2024): guarantee schemes ka development par prabhav — political bayan → REJECT.
// (8) KLLADS/itemized fund kharch ya GO/order-backed swikriti ka koi itemized whitelist source nahi mila; Vidhansabha maang ka dastaveji nateeja bhi nahi mila.
// NEGATIVES — koi bhi VALID entry nahi:
// (1) CRL.P 3392/2023 (indiankanoon.org court order, PRIMARY legal doc — established media nahi): Alwandi PS FIR 06.04.2023, Cr. 30/2023, u/s 171(F) IPC + Sec 7 Religious Institutions (Prevention of Misuse) Act 1988, 'Ragavendar Hitnal S/O Basavaraj Hitnal, Kurab, Hitnal village' — Karnataka High Court ne 02.06.2023 ko FIR QUASH kar di (May 2023 ke baad nyayik vikas; stage: quashed). Lekin kisi bhi whitelist outlet (The Hindu/IE/HT/NDTV/India Today/TOI/Deccan Herald/PTI) me is maamle ki koi coverage NAHI mili → 'established media' shart poori nahi → negative entry NAHI. RETRY-LEAD: HC order date 2 June 2023 ke aaspaas local press check.
// (2) Hatti-Mundargi jhadap, Atrocities Act durupyog ka aarop (IBC World News, Oct 2026 — non-whitelist): BJP neta B. Sriramulu ka siyasi aarop hai; MLA khud kisi FIR/janch/chargesheet me aaropi NAHI; koi nyayik vikas nahi → REJECT (party-allegation akele).
// (3) Marakumbi (2014) Dalit-atrocities case me 101 ko aajivan karavas (PTI, Oct 2024): MLA ka naam kahi aaropi ke roop me nahi → REJECT.
// (4) Bharat Horizon: CM aawas ke bahar samarthakon ka virodh (non-whitelist) — koi legal tathya nahi → REJECT.
// (5) Halafnama ke mamle: myneta 2023 affidavit se koi pre-term pending maamla saamne nahi aaya; vaise bhi 'halafname akele' rule se negative nahi.
// RETRY-LEADS: (a) Deccan Chronicle Amrutha Nagarothana page (403) phir se kholne ki koshish; (b) Kannada press (Prajavani/Vijayavani — whitelist-bahar) me Hitnal ke lokarpan ke leads; confirm hone par hi entry.
karnatakaWorks['raghavendra-hitnal'] = [];


// ============ KARNATAKA BATCH 9 — Mandya jila (coordinator merge) ============
// ka9 worker — P. M. Narendraswamy (Malavalli SC, INC)
// REJECT-LOG:
// R1. TOI pre-event article "CM to lay foundation stone for Praja Soudha in Malavalli n Dec 21"
//     (articleshow/126042818.cms) — PRE-EVENT ghoshna; rule ke mutabik pre-event announcement source NAHI.
// R2. Taluk Journalists' Association building shilanyas (upar R1 hi article me) — sirf ghoshna,
//     post-event reporting nahi mili; entry nahi, lead: post-event confirm ho to future run me jodo.
// R3. The Hindu 2024-02-18 "Siddaramaiah assures consider demand for inclusion of Narendraswamy
//     in Cabinet" — CM ne Malavalli me "slew of developmental projects" ke lokarpan/shilanyas kiye
//     (post-event, The Hindu) lekin article PAYWALLED hai; project-wise list quoted page par nahi dikhi.
//     Lead: full text mile to kaam-wise entries banao.
// R4. publicnext.com "human-animal conflict / railway barricade" — vidhansabha prashn ka minister-jawab
//     hai, lekin source whitelist me NAHI (aggregator) — retry: whitelisted outlet me coverage dhoondo.
// R5. Prajavani 2026-10-03 (CC road/drainage Kenchanadoddi-Chottanahalli, canal modernisation,
//     degree college building, polytechnic) — whitelist me NAHI (Kannada paper Prajavani whitelist me nahi);
//     lead: in kaamon ki whitelisted reporting mile to entries banao.
// R6. Asianet Suvarna (Kannada) JDS leaders Congress join — party event; kaam nahi; whitelist me bhi nahi.
// R7. Deccan Herald 2026-10-16 Farmers' Dasara (Mysuru) — mantri-haisiyat se karyakram; seat ke BAHAR;
//     vyaktigat seat-level sanrachna kaam nahi.
// R8. Deccan Herald Cauvery Theerthodbhava (Talacauvery) — sirf maujoodgi; Kodagu me, seat se bahar.
// R9. KSPCB chairman nomination (The Hindu 2025-02-05) — political appointment; vikas-kaam nahi.
// R10. Siasat/IANS "Cong MLA bats for CM Siddaramaiah" — political statement; kaam nahi; source bhi whitelist-bahar.
// R11. Deccan Herald KSPCB political-appointment article (Aug 2026) — post/appointment ki charcha;
//     MLA ke khilaf FIR/janch ka ilzaam NAHI — negative layak nahi.
// R12. Negative check: myneta.info 2023 affidavit me 1 declared case dikhta hai, lekin "halafname ke mamle
//      akele" rule se REJECT; 2013 election petition (Indian Kanoon, 2016) pre-term hai — REJECT.
//      Whitelisted media me May 2023 ke baad MLA khud accused wali koi FIR/chargesheet/adalt-vikas
//      reporting nahi mili — negatives: ZERO.

// QA-DROP (coordinator): p-m-narendraswamy ki Praja Soudha entry — shilanyas CM ne kiya tha; MLA ki bhoomika sirf CM-visit ka aayojan aur dhanyavad thi
// (aamantran/maujoodgi), isliye entry rules fail karti hai. Fragment me preserved, merge me = [];
karnatakaWorks['p-m-narendraswamy'] = [];

// k-m-udaya (Maddur, INC) — REJECT-LOG: whitelist (The Hindu, Indian Express, HT, NDTV, India Today, TOI, Deccan Herald, PTI) me May 2023–Oct 2026 tak Maddur seat me K. M. Uday ke vyaktigat lokarpan/shilanyas wale ek hi dastaveji nateeja mila — 100-feet road ki swikriti (mantri-ashwasan), jo media badge ke saath rakha. (1) 28 Jul 2025 ka Rs 1,146 crore Maddur launch event (The Hindu, TOI, New Indian Express): CM Siddaramaiah aur DCM D. K. Shivakumar ne 87 pariyojnaon ka shilanyas/lokarpan kiya; Uday sirf upasthit the, vyaktigat dastaveji bhoomika nahi — dusre neta ke karyakram me maujoodgi, REJECT. (2) The Hindu (27 Jul 2025): wahi event ka pre-event announcement — pre-event source, REJECT. (3) Rs 2 crore ki zameen ka daan Maddur me Congress Bhavan ke liye (The Hindu, 28 Jul 2025) — niji kharch/daan, REJECT. (4) TOI auto-stand article (Oct 2026): Uday ka dawa "karyakaal me Rs 2,000 crore ke vikas kaam" — sirf MLA ka apna dawa, koi specific kaam nahi, REJECT. (5) TOI (Oct 2026): Uday ne Maddur me avaidh auto-rickshaw stand ki dhwast ka bachav kiya — vikas kaam nahi, REJECT. (6) TOI (Jan 2026): Gejjalagere gram panchayat ko Maddur city municipality me vilay ka bachav — policy decision defense, koi bhautik sanrachna nahi, REJECT. (7) Cauvery Neeravari Nigam Limited ke Rs 560 crore ke kaam (The Hindu, 28 Jul 2025) — rajya sarkari pariyojna, MLA ki dastaveji bhoomika nahi, REJECT. (8) Sulekere me Rs 34-crore lake development project (TOI, Lokayukta daura) — sarkari pariyojna, Uday ki bhoomika dastavez me nahi, REJECT. (9) Mandya MP H. D. Kumaraswamy dwara CSR fund se Maddur me auto-rickshaw stand ka shilanyas (TOI, Oct 2026) — dusre neta (MP) ka kaam, REJECT. Negatives: (a) Operation Kamala allegation — 2019 ki ghatna jab Uday BJP me the (TNIE, 14 Mar 2023; Wikipedia): koi FIR/charge-sheet/janch nahi, pre-term bina vartaman vikas ke — negative-rule fail, REJECT. (b) Sep 2025 Maddur stone-pelting me FIRs — CT Ravi aur lagbhag 500 pradarshankariyon ke khilaf, Uday aaropi nahi (Indian Express, Sep 2025) — REJECT. (c) myneta.info halafname 2023 me 3 criminal cases — halafname ke mamle akele, REJECT. (d) Mandya hostel superintendent par Lokayukta raid (Sep 2026) — retired adhikari ke khilaf, Uday se koi sambandh nahi, REJECT. KLLADS (Rs 2cr/seat/varsh) ka istemal kisi whitelist source me sourced nahi mila — fund dawa nahi joda. Foundation cross-check: ka9_worker set me 'k-m-udaya' ki koi pehle se file nahi (pehli entry).
karnatakaWorks['k-m-udaya'] = [
  {
    title: 'Maddur MLA K. M. Uday ke lambe samay se lambit prastav par sarkar ne Maddur seat me 100-feet road pariyojna ko swikriti di, jiski ghoshna CM Siddaramaiah ne 28 Jul 2025 ko Maddur me hue vikas karyakram me ki.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/maddur-cm-hits-out-at-bjp-for-false-claims-on-states-finances/article69865147.ece',
    date: '2025-07-28',
    note: 'The Hindu ke mutabiq CM Siddaramaiah ne kaha ki Maddur ke MLA K. M. Uday ki appeal par sarkar ne Mandya/Maddur seat me 100-feet road ke nirman ki pariyojna ko swikriti de di hai; CM ne Uday ko “bolte kam hain, kaam zyada karte hain” bataya. TOI ne ise Uday ke long-pending proposal ka sarkari approval likha. Swikriti ki ghoshna 28 Jul 2025 ko Rs 1,146 crore ke Maddur vikas launch karyakram me hui. Road pariyojna ki laagat aur fund-srot report me ghoshit nahi. Credit capped: ye mantri-ashwasan hai — swikriti ki ghoshna mili hai, road ke banne ya pura hone ki reporting nahi.',
    period: '2023-2028',
  },
];

// darshan-puttannaiah (Melukote, SKP — Sarvodaya Karnataka Paksha; Karnataka Foundation Phase 9 worker fragment) — REJECT-LOG: (1) Grievance-redressal mobile app ka udghatan, Dudda gram panchayat, Melukote (TOI, post-event reporting; article date page par print nahi — crawl metadata ke hisaab se lagbhag Jul–Aug 2025): MLA ne vyaktigat taur par inaugurate kiya aur 'Don't Come to Govt Offices–The Office Will Come to Your Doorstep' karyakram ke tahat 1,310 gharon ka data entry ka daawa — lekin digital app hai, bhautik sarkari sanrachna ka lokarpan/shilanyas nahi; GO/order ya Vidhansabha-prashn ka dastaveji nateeja bhi cited nahi — 'sarkari abhiyan shubharambh' rule se REJECT; lead ke taur par coordinator punah vichaar kar sakta hai; (2) Melkote town transformation plan — Dasoha meals, buggy service, UGD upgrade, eco-tourism, handloom revival (TOI, Nov 2024): sab yojna/ghoshna, kisi ka poora hua/post-event reporting nahi — 'sirf ghoshna' rule se REJECT; (3) Hemavathi canal modernisation (Rs 20 crore) bhoomi-pooja, Jakkanahalli (The Hindu, 14 Jul 2024): bhoomi-pooja mantri N. Cheluvarayaswamy ne ki, Darshan sirf maujood + maangein uthaayi (Jakkanahalli me aspatal ki maang, Holalu–Jakkanahalli road repair ki maang) — dusre neta ke karyakram me maujoodgi + sirf maang — REJECT; (4) Khelo India indoor stadium foundation, Mandya (Union mantriyon ne rakha, Mar 2026): Mandya seat me, Melukote ke bahar; Darshan sirf maujood — 'seat ke bahar ke kaam' + dusre neta — REJECT; (5) Cauvery SC implead application, KRRS ki taraf se (The Hindu, Sep 2023): kanooni/virodh-rajneeti, karyakaal-kaam nahi — REJECT; (6) Kambala-Dasara virodh: Siddaramaiah se milkar maang (Deccan Herald, Sep 2026): sirf maang/prastav, kaam nahi — REJECT; (7) RSS karyalaya udghatan me maujoodgi par aalochana (TOI, Jan 2024): political event, kaam nahi — REJECT; (8) 'US visa' protest — kuch Melukote nivasiyon ka DC office ke bahar virodh (Indian Express/New Indian Express, 01 Oct 2026): MLA ki anupasthiti par aalochana hai, lekin koi FIR/chargesheet/adalati vikas nahi — negative criteria (stage-accurate legal negative) poora nahi — REJECT; (9) Actor Darshan Thoogudeepa murder case (Renukaswamy case) ki saari 'Darshan' FIR/court khabren — ALAG VYAKTI (film actor), MLA Darshan Puttannaiah se pehchan-takrar nahi honi chahiye — REJECT; (10) Dhanushkoti rocks graffiti clean-up drive, Puttannaiah Foundation (Star of Mysore, Jul 2025): non-whitelist source + foundation/NGO swayamsevi abhiyan — REJECT; (11) 'Rs 50 crore per MLA' fund release par Darshan ka bayan (Jul 2025, English Bombay Samachar — non-whitelist): sirf bayan, koi GO/sanction dokument cited nahi — REJECT; (12) Pita K. S. Puttannaiah ke kaam/mamle (parivaar-niyam): 2023 me TOI ne pita ke samay ke Rs 2 crore mandir-road fund ka zikr kiya — pita ke kaam, in par nahi — REJECT. NEGATIVES: May 2023 ke baad MLA Darshan Puttannaiah khud aaropi hon — koi FIR/chargesheet/janch ya nyayik vikas whitelist media me NAHI mili. RETRY-LEAD: Deccan Herald/TOI par 'Melukote' + 'Darshan' keyword se periodic re-check — app entry (1) ko coordinator vichaar sakta hai; Kannada press (Prajavani/Udayavani) whitelist-bahar, lead mile to whitelisted outlet se confirm karo. PARTY-FIELD FLAG: koi nahi — party SKP (Sarvodaya Karnataka Paksha) pehle se darj ke anusaar.
// Roman-Hinglish note: koi bhi whitelist source se May 2023+ ke seat-level bhautik vikas-kaam ka post-event saboot nahi mila, isliye fragment khali hai.
karnatakaWorks['darshan-puttannaiah'] = [];

// ravikumar-gowda (Mandya, INC) — REJECT-LOG: (1) The Hindu (2026-01, crawl 112d ago): Union Minister H. D. Kumaraswamy ne Sri Jayachamarajendra Wadiyar Market ka udghatan kiya; MLA Ravikumar sirf maujood the aur fund par bola (Rs 10cr Union + local bodies se) — dusre neta (Mandya MP HDK) ke karyakram me maujoodgi + MP-area funds; entry NAHI; (2) TOI Kere Angala Rs 70cr grant (2026-07-19 ke aaspaas, articleshow/132542971.cms, page open karke padha): MLA ne 'announced' — retaining wall phase-1 'completed', phase-2 ka bhoomi pooja 'next week', baaki works tender-stage — pre-event announcement + inspection; kisi bhautik sanrachna ka unke haathon lokarpan/shilanyas report me NAHI — entry NAHI; (3) The Hindu SSLC results (May 2026): MLA ne Mandya University me stadium Rs 2cr + basketball court Rs 4cr 'within six months' banane ki ghoshna ki — sirf ghoshna — entry NAHI; (4) The Hindu Gandhi Bhavan (Jan 2026): district in-charge minister N. Chaluvarayaswamy ne udghatan kiya; MLA maujood the — presence only — entry NAHI; (5) TOI talent-felicitation speech / TOI economic-growth speech (2025) — bhashan, koi kaam nahi; (6) TOI Yuva Sambhrama cancellation (Apr 2026): MLA ne nirikshan ke baad event cancel ki ghoshna ki — inspection/announcement — entry NAHI; (7) IBC World News women-projects inspection (Aug 2026): Akka Cafe/Stree Mart/MIMS/trauma centre — sirf nirikshan + proposed projects, non-whitelist source bhi — entry NAHI; (8) Deccan Herald sting-operation (Oct 2026): MLA sting ki shikayat ka aaropi-karta, khud aaropi NAHI — negative NAHI; (9) Feb 2024 Rajya Sabha bribery FIR (The Hindu + Indian Express, WHITELIST): MLA Ravikumar Ganiga ne Kupendra Reddy ke khilaf shikayat darj karayi — MLA COMPLAINANT hai, aaropi NAHI — negative NAHI; (10) Aug 2024 defamation complaint: BJP gen-sec P. Rajeev ne MLA ke khilaf Hubballi Suburban PS me shikayat di — kewal non-whitelist sources (deccanchronicle/peoplic) par, FIR-accused column me naam ka koi whitelisted praman NAHI — 'shikayat me naam lekin FIR-accused-column me naam nahi' rule se negative NAHI; (11) BJP MLC N. Ravikumar ke FIR/anticipatory-bail mamle (Chief Secy/Fouzia Taranum comments, 2025) — ye Mandya MLA NAHI hain, alag vyakti (BJP MLC) — confusion se bachne ke liye darj; (12) Feb 2025 VC canal accident (Star of Mysore): MLA ne 3 mritakon ke parivar ko 'from his pocket' Rs 1 lakh diye — niji daan/rahat — entry NAHI; (13) Janata Darshan / E-Swathu / Munnade Mandya Vision-2035 agri session / Mekedatu bayan — sarkari abhiyan shubharambh / maang / bayan, koi bhautik sanrachna NAHI. NEGATIVES: May 2023+ me whitelist media par MLA Ganiga Ravikumar ke khilaf FIR/chargesheet/janch YA nyayik vikas (woh khud aaropi ho) ka koi praman NAHI mila. RETRY-LEAD: Deccan Herald/TOI/The Hindu par 'Mandya MLA' + 'Ravi Ganiga'/'Ravikumar Ganiga' keywords se periodic re-check — Mandya city works zyada tar minister ya MP ke events me cover hote hain; KLLADS itemized kharch ka whitelist source abhi tak nahi mila.
karnatakaWorks['ravikumar-gowda'] = [];

// =============================================================================
// REJECT-LOG — ramesha-bandisiddegowda (Shrirangapattana, INC, Karnataka)
// Karya-kaam: May 2023+ term. Koi bhi lead VALID-shreni me nahi aaya,
// isliye karnatakaWorks entry KHAALI hai. (Galat entry se khali profile behtar.)
// =============================================================================
//
// WORKS LEADS (sab REJECT):
// 1. Brindavan Gardens musical fountain lokarpan, KRS (Star of Mysore,
//    16 Oct 2023) — REJECT: Agri Minister Cheluvarayaswamy ne lokarpan kiya;
//    MLA sirf maujood the (dusre neta ke karyakram me maujoodgi) + non-whitelist.
// 2. CESC UG cable review meeting, Mysuru (TOI/Star of Mysore, Oct 2026) —
//    REJECT: CESC chairman ke roop me sirf nirdesh; lokarpan/shilanyas nahi;
//    Mysuru city (seat ke bahar).
// 3. Chamarajanagar tribal hamlets bijli connection ashwasan (TOI, Apr 2025) —
//    REJECT: dusre jile ka mamla (seat ke bahar) + sirf ashwasan, koi nateeja nahi.
// 4. International Democracy Day programme lokarpan, Mandya (TOI, Sep 2025) —
//    REJECT: karyakram lokarpan, bhautik sarkari sanrachna nahi.
// 5. Cauvery water bayan (TOI, Sep 2026) — REJECT: sirf bayan.
// 6. Bengaluru-Mysuru Expressway toll rokne ke liye CM ko patra (The Hindu,
//    Jun 2023) — REJECT: sirf maang/prastav; dastaveji nateeja nahi.
// 7. Srirangapatna Dasara taiyari nirikshan (IBC World News, Oct 2026) —
//    REJECT: sirf nirikshan/nirdesh + non-whitelist.
// 8. CM ki Srirangapatna ghoshnaein — Arekere ke 12 talab lift irrigation,
//    Shramika Residential School (TOI, ~Mar 2026) — REJECT: rajya pariyojna;
//    MLA ki vyaktigat dastaveji bhoomika nahi.
// 9. Brindavan Gardens barish nirikshan (Star of Mysore, May 2023) —
//    REJECT: sirf nirikshan.
// 10. Mandya city development plan meeting (TOI, Aug 2025) — REJECT: MLA ne
//     meeting me sirf tippani ki; koi kaam lokarpan/shilanyas nahi.
// 11. Deccan Herald Srirangapatna Dasara (Oct 2026) — REJECT: MLA sirf upasthit;
//     tyohar/karyakram, works nahi.
// 12. MLA fund utilization article (coastaldigest) — REJECT: non-whitelist +
//     pre-term (Ambarish zamaane ke sanket).
// 13. Dr. B.R. Ambedkar Bhavan shilanyas, Srirangapatna (Aug 2025) —
//     REJECT: Social Welfare Minister H.C. Mahadevappa ne shilanyas kiya;
//     dusre neta ka karyakram.
// 14. CM ne Maddur/Mandya me Rs 1146.7 cr pariyojnaon ka shilanyas/lokarpan
//     (TOI, Jul 2025) — REJECT: CM ne kiya; MLA ka zikr bhi nahi.
//
// NEGATIVE LEADS (dono REJECT):
// A. Karnataka HC notice — alleged false affidavit 2023 election (New Indian
//    Express, 25 Sep 2026; https://www.newindianexpress.com/amp/story/states/
//    karnataka/2026/Sep/25/srirangapatna-mla-gets-hc-notice-over-alleged-false-
//    affidavit-filed-during-2023-assembly-polls): HC ne ECI/CEO/MLA ko notice
//    diya; Section 223 BNSS + Section 125A RP Act ke tahat Bogadi ki properties
//    halafname me chhodne ka aarop. — REJECT: rule "halafname ke mamle akele"
//    saaf mana karta hai. (Aadesh/noticed 2026; koi charge/FIR stage nahi.)
// B. Arekere maternity hospital misuse — maa ke janmdin ke liye backstage
//    (Mathrubhumi English, 22 Aug 2026) — REJECT: non-whitelist source + koi
//    FIR/adalt/janch stage nahi; sirf backlash. Health Minister ne janch ka
//    ashwasan diya — ashwasan negative stage nahi.
//
// RETRY-LEADS: koi nahi. 8 alag search angles me whitelist English press me
// Ramesha Bandisiddegowda ke seat-level lokarpan/shilanyas ka ek bhi post-event
// report nahi mila. Kannada naam-spelling (Ramesh Babu/Ramesh B) wale bhi
// try kiye. Kannada-media me lead ho sakta hai, lekin whitelist English me nahi.
//
// PARTY-FIELD FLAG: koi nahi — INC sabhi sources me confirm (2023 election +
// Wikipedia + TOI).
// =============================================================================

karnatakaWorks['ramesha-bandisiddegowda'] = [];

// n-chaluvaraya-swamy (Nagamangala, INC — Krishi Mantri, May 2023+; MANTRI-NIYAM: sirf Nagamangala seat ke kaam, Krishi vibhag ke rajya faisle/yojnayein/state-level karyakram NAHI)
// REJECT-LOG — WORKS (May 2023+ me whitelist media se koi VALID seat-level vyaktigat lokarpan/shilanyas nahi mila):
// (1) The Hindu (27 Jan 2025, post-event reporting): Minister in-charge N. Cheluvarayaswamy ke Bellur (Nagamangala taluk) Jana Samparka Sabha me (a) Nagamangala RTO par unemployed-yuva driving school ki GHOSHNA (9.5 acre zameen Transport Dept ko, documents diye) — sirf ghoshna, building abhi bani nahi → REJECT; (b) Bellur me Rs 31 crore ka drinking-water-supply project: \"foundation stone has been laid\" — kaun ne rakha, report me agent nahi diya (passive) → vyaktigat bhoomika verify nahi, REJECT; (c) sarkari PU college building (Rs 1 crore) aur sarkari primary school building (Rs 55 lakh) \"have been inaugurated\" — passive voice, minister ne khud udghatan kiya ya nahi, report nahi kehti → shanka par REJECT; (d) Social Welfare Dept hostel ka shilanyas (Rs 5 crore) — wahi passive-attribution samasya → REJECT; (e) Bhoo Suraksha Yojana digitisation launch, Nagamangala Taluk Office — sarkari abhiyan shubharambh → REJECT; (f) Bellur Town Panchayat limits expansion + drainage Rs 70 crore / roads Rs 7 crore \"taken up\" — ghoshna/jari, poora hua nahi → REJECT; (g) 1.30 acre KSRTC bus-stand zameen ke documents diye — abhi sirf zameen pahchan, sanrachna nahi → REJECT. RETRY-LEAD: Bellur school/college buildings aur Rs 31 crore water project ke lokarpan/shilanyas me minister ki vyaktigat bhoomika ki whitelist confirmation mile to entry.
// (2) The Hindu (13 Jan 2024): Ayush Seva Grama launch, Shikaripura village, Nagamangala taluk — sarkari AYUSH abhiyan ka shubharambh, sthal Nagamangala seat me hai lekin bhautik sanrachna ka vyaktigat lokarpan nahi → REJECT.
// (3) skdrdpindia.org (2026): Arakere village (Nagamangala taluk) me SKDRDP ka 600th Shuddha Ganga clean-drinking-water unit minister ne commission kiya (motor on) — NGO (SKDRDP/BC Trust) ka unit, minister sirf guest-launch; source whitelist me NAHI → REJECT.
// (4) TOI (Jun 2025): Cheluvarayaswamy ne KR Pet taluk me development projects inaugurate kiye — KR Pet seat Nagamangala se BAHAR → REJECT (mantri-niyam + seat-niyam).
// (5) TOI: Chikka Mandya me naya labour building udghatan — Mandya town, Nagamangala seat ke bahar → REJECT.
// (6) TOI (Jul 2025): CM Siddaramaiah ne Mandya me development projects ke foundation stones rakhe; Cheluvarayaswamy sirf maujood — dusre neta ka karyakram, maujoodgi par entry NAHI (rule me CM-ke-shilanyas-me-maujoodgi explicit reject) → REJECT.
// (7) New Indian Express (6 Sep 2023): minister ne Nagamangala me press ko Cauvery/KRS water par bayan diya — political/policy bayan, kaam nahi → REJECT.
// (8) The Hindu (Jul 2025): reservoirs full / agri activity bayan (Bagina at KRS) — bayan, kaam nahi → REJECT.
// (9) TOI (Jan 2026): 320-acre Nagamangala land scam me minister ne karvai ka ashwasan diya, Lokayukta raids ka zikr — minister khud aaropi NAHI (kaam bhi nahi, negative bhi nahi) → REJECT.
// (10) KLLADS itemized fund kharch, GO/order-backed swikriti, ya Vidhansabha maang ka dastaveji nateeja — koi whitelist source nahi mila.
// REJECT-LOG — NEGATIVES (May 2023+ me whitelist/established media me koi stage-qualifying legal negative nahi):
// (1) Indian Express (8 Aug 2023, whitelist): Krishi Vibhag ke 7 Assistant Directors (Mandya, Malavalli, KR Pet, Pandavapura, Nagamangala, Srirangapatna, Maddur) ne Governor ko patra me aarop lagaya ki minister Joint Director ke zariye Rs 6-8 lakh ka dabav bana rahe hain; Governor Thawarchand Gehlot ne Chief Secretary Vandita Sharma ko action lene ko likha; minister ne charges ko \"fake\" batakar kharij kiya aur CM se patra ki janch karane ki maang ki. REJECT: koi FIR register hone, chargesheet, janch aadesh ya adalati vikas ki khabar nahi mili — shikayat + Governor-forward akele rule ke \"FIR/chargesheet/janch ya nyayik vikas\" ko poora nahi karte. RETRY-LEAD: kya CM ne probe ka aadesh diya / koi Lokayukta/FIR stage aaya — follow-up.
// (2) Karnataka Land Grabbing Prohibition Special Court proceedings LGC(P) No.485/2023 aur LGC(S) No.409/2023 (orders dated 28.03.2024 aur 19.06.2024) — N Chaluvarayaswamy (Ejjalghatta village, Nagamangala taluk, Bengaluru zameen mamla) ne in proceedings ko quash karane ke liye Karnataka HC me WP No.24250/2024 dayar kiya (Casemine record). REJECT: koi bhi whitelist/established-media coverage nahi mili (sirf Casemine legal-database + organiser.org, dono whitelist-bahar); sirf yachika dayar karne ka tathya rule me \"yachika akele nahi\" hai. RETRY-LEAD: The Hindu/IE/TOI/DH/PTI me in LGC proceedings ya summons-stay par reporting dhundho.
// (3) Star of Mysore (10-11 Nov 2024): Mysuru ke private hotel me minister aur Congress neta Keelara Jayaram ke beech kathit maar-peet (physical altercation) ki khabar; C.S. Puttaraju ne Jayaram ko \"aane-pramana\" ki chunauti di; dono pakshon ne inkaar kiya (\"deny scuffle\"). REJECT: source whitelist me NAHI (sirf Star of Mysore), koi FIR/chargesheet/janch/adalati vikas nahi, dono pakshon ka inkaar on record.
// (4) ThePrint (19 Dec, PTI, whitelist) par \"Minister rejects land grab allegation in voluntary statement in Karnataka Assembly\" — khola to pata chala ye K. Krishna Byre Gowda (Revenue Minister, Kolar Garudanapalya mamla) par hai, N. Chaluvaraya Swamy par NAHI → galat vyakti, REJECT.
// (5) Myneta 2023 affidavit — halafname ke mamle akele negative nahi (rule), alag se koi nyayik vikas nahi mila.
// RETRY-LEADS: (a) Bellur (Jan 2025) school/college/water-project lokarpan-shilanyas me minister ki vyaktigat bhoomika ki whitelist confirmation; (b) Aug 2023 bribe-letter mamle ka follow-up (probe ordered? FIR?); (c) LGC 409/2023 aur 485/2023 proceedings par whitelist/PTI coverage; (d) Nagamangala 320-acre land scam me aage ki karvai (whitelist) — note: is mamle me minister aaropi nahi, sirf karvai-karne-wale.
// PARTY-FIELD FLAG: koi nahi — party INC pehle se darj ke anusaar (foundation slug: n-chaluvaraya-swamy).
// Roman-Hinglish note: May 2023+ ke seat-level bhautik vikas-kaam ya stage-qualifying legal negative ka whitelist-sourced post-event saboot nahi mila, isliye fragment khali hai.
karnatakaWorks['n-chaluvaraya-swamy'] = [];

// h-t-manju (Krishnarajapet / K.R. Pet, JD(S) — karyakaal May 2023+) — REJECT-LOG:
// WORKS:
// (1) TOI Mysuru (post-event reporting): jile ki pehli Plastic Waste Management (PWM) unit, Swachh Bharat Mission ke tahat, Shettahalli gaon (Chaudenahalli gram panchayat, K.R. Pet taluk) — MLA H.T. Manju ne vyaktigat taur par lokarpan kiya; iske kaam-shuruaat par entry BANAYI gayi (fund/lagat report me ghoshit nahi). Usi article ka pani-sankat wala hissa — MLA aur ZP CEO ka Krishnapura/Borapura/Ramanahalli gaonon ka daura, adhikariyon ko nirdesh — 'sirf nirikshan/daura' rule se REJECT.
// (2) The Hindu (24 Jun 2025): Mantri N. Cheluvarayaswamy ne K.R. Pet me ~Rs 10 crore 66/11 kV substation (Beeruvalli), Rs 1.25 crore KSRTC bus stand (Akki Hebbalu), farmer facilitation centre, PU college classrooms, boys' hostel, polytechnic/engineering college blocks ka udghatan kiya — MLA H.T. Manju sirf maujood the → REJECT (dusre neta ka karyakram; upasthiti par entry NAHI).
// (3) Organiser.org (Dec 2025, non-whitelist bhi): MLA ne Vidhana Soudha me press conference karke KSDL (Karnataka Soaps & Detergents Ltd) me sandalwood-oil khareed me mega bhrashtachar ka AAROP lagaya — wo aaropi NAHI, aarop lagane wale hain; daava hi daava, koi dastaveji nateeja (FIR/janch-aadesh) cited nahi → REJECT (work/negative dono criteria poore nahi).
// (4) News18 Kannada YouTube (Swachhatotsava cleanliness drive): MLA ne Hemavathi Layout park me safai abhiyan me bhag liya — YouTube source whitelist me NAHI + 'sarkari abhiyan shubharambh/drive' → REJECT.
// NEGATIVES:
// (5) The Hindu (Jul 2025, whitelist): Karnataka Public School, K.R. Pet me SDMC ke faisle par Rs 2,500–5,000 saalana fee vasoolne ki shikayat — MLA H.T. Manju SDMC ke adhyaksh hain (sthaneeya MLA hone se ex-officio); Commissioner of Public Instruction ne DC Mandya ko janch karne ka nirdesh diya. REJECT: shikayat me naam par FIR/aaropi-column me MLA ka naam NAHI; ye school-fee ki prashasanik shikayat hai, MLA khud aaparadhik aaropi nahi; adalati vikas (FIR/chargesheet/court order) ka koi sanket nahi.
// (6) Star of Mysore (18 Mar 2020): ZP sadasya ke roop me MLA par Mines & Geology Dept ne K.R. Pet taluk me illegal stone quarrying par Rs 11 crore ka jurmana lagaya. REJECT: pre-term (Mar 2020), source whitelist me NAHI, May 2023 ke baad koi nyayik vikas nahi mila.
// (7) CaseMine (captcha-walled, non-whitelist): 'Mr. H.T. Manju v. The State of Karnataka' — Karnataka High Court (Justice M. Nagaprasanna); MLA C.C. No.941/2012 (Crime No.119/2012, IPC 143/341/504 r/w 149 — 28-05-2012 ka quarry-strike/highway-block mamla) me aaropi No.20, chargesheet dayar; unhone quash petition dayar ki. CaseMine metadata ke hisaab se order ~Nov 2024 ka (post-May-2023 nyayik vikas). ENTRY NAHI BANAYI kyunki: (a) source whitelist me NAHI (CaseMine legal aggregator hai), (b) order ka parinam (quash hua ya kharij) captcha ke peeche verify nahi ho saka, (c) is HC order ki whitelist media coverage nahi mili. RETRY-LEAD: is judgment ka parinam (date + allowed/dismissed) + The Hindu/TOI/Deccan Herald me coverage milne par negative entry banegi.
// (8) Chunav-dissent khabren (TOI, Deccan Chronicle, Jan 2023 — pre-term ticket-vivad): party ki andaruni ladai, kaam/negative nahi → REJECT.
// Roman-Hinglish note: works = 1 entry (PWM unit lokarpan, TOI, tithi anumaanit); negatives = 0 (criteria-poorak koi whitelist media negative nahi mili — item 7 retry-lead hai).
karnatakaWorks['h-t-manju'] = [
  {
    title: 'K.R. Pet taluk ke Shettahalli gaon me Swachh Bharat Mission ke tahat jile ki pehli Plastic Waste Management unit ka lokarpan MLA ne kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/mysuru/take-preventive-steps-to-avoid-drinking-water-crisis-krishnarajapet-mla/articleshow/133976604.cms',
    date: '2026-09-09',
    note: 'MLA H.T. Manju ne Chaudenahalli gram panchayat ke Shettahalli gaon me bani unit ka lokarpan kiya; ZP CEO K.R. Nandini ne bataya ki unit me plastic kachra ikattha karke, alag karke, process aur bale karke recycle kiya jayega aur mahila self-help groups kachra sangrah me lagi hain. Report me unit ki lagat ya fund ka srot ghoshit nahi tha — credit sirf lokarpan ki bhoomika tak. Tithi anumaanit hai: TOI page metadata (~19 Oct 2026 ko dekhe gaye search result me “Last Updated: 40 days ago”) aur article me ghatna ko “Wednesday” bataya gaya hai; nazdeek ka Wednesday 9 Sep 2026 tha (date command se verified).',
    period: '2023-2028',
  },
];


// ============ KARNATAKA BATCH 10 — Mysuru jila (coordinator merge, 11 MLA) ============
karnatakaWorks['k-venkatesh'] = [];

karnatakaWorks['d-ravishankar'] = [];



karnatakaWorks['g-d-harish-gowda'] = [];

karnatakaWorks['anil-chikkamadhu'] = [];

karnatakaWorks['darshan-dhruvanarayana'] = [];

karnatakaWorks['g-t-devegowda'] = [];

karnatakaWorks['t-s-srivatsa'] = [
  {
    title: 'Kuruba samudaay par apmaan-janak tippani ke aarop me Krishnaraja MLA T. S. Srivatsa aur Chalavadi Narayanaswamy par BNS ki dhara 353(2) ke tehat FIR darj hui, aur Bengaluru court ne 20 Sep 2025 ko dono netaon ko antarim jamanat de di.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'PTI via The Week',
    sourceUrl: 'https://www.theweek.in/wire-updates/national/2025/09/20/lgm2-ka-court-bjp-leaders-bail.amp.html',
    date: '2025-09-20',
    note: 'PTI wire (page kholkar verify kiya) ke anusar Hubballi ke kisan ki shikayat par FIR darj hui — aarop tha ki netaon ne CM Siddaramaiah ke virodh aur Kuruba samudaay ko ST darja dene ki maang ke virodh me samudaay ka apmaan kiya. City Civil and Sessions court ke nyayadhish Santosh Gajanan Bhat ne BNS ki dhara 482(1) ke tehat antarim jamanat di: giraftari ki sthiti me rihaai, Rs 1 lakh ka personal bond + ek jamanati, 15 din me janch adhikari ke saamne hazir hone ka nirdesh, aur raahat mukhya yachika ke nistaran tak jaari. MLA ka jawab is page par uplabdh nahi — anupasthiti disclose ki ja rahi hai. (Stage note: isi FIR ka HC quash 20 Aug 2026 ko hua tha, lekin wo sirf barandbench jaise non-whitelisted portal par reported hai, isliye yahan cite nahi kiya; retry-lead me rakha hai.)',
    period: '2023-2028',
  },
];


karnatakaWorks['k-harish-gowda'] = [];





karnatakaWorks['tanveer-sait'] = [];

karnatakaWorks['siddaramaiah'] = [
  {
    title: 'CM Siddaramaiah ne apni Varuna seat me Rs 1,107.72 crore ke vikas karyon ka shilanyas kiya — kai vibhagon ke projects ek hi karyakram me launch (Mysuru, 9 Aug 2025)',
    category: 'Any',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/karnataka-cm-siddaramaiah-launches-projects-worth-1107-crore-for-varuna-constituency/article69913973.ece',
    date: '2025-08-09',
    period: '2023-2028',
    note: 'The Hindu (9 Aug 2025, Mysuru) ke mutabik Siddaramaiah ne Varuna assembly constituency me Rs 1,107.72 crore ke vikas karyon ka shilanyas/launch kiya; karyakram me Chamarajanagar ke MP Sunil Bose, MLC Yathindra Siddaramaiah, Mysuru prabhari mantri H. C. Mahadevappa aur zila prashasan ke adhikari maujood the. Credit capped: karyakram CM ke roop me kiya gaya lekin kaam poori tarah Varuna seat ke hain, isliye seat-work ke roop me darj. Fund ka srot ghoshit nahi.',
  },
  {
    title: 'Siddaramaiah ne Varuna ke Kuppya gaon me Rs 323.04 crore ke 154 karyon (15 vibhag) ka lokarpan aur shilanyas kiya — is package me Rs 100 crore ka NIMHANS-type mansik-swasthya aur de-addiction kendra bhi shamil (18 Jan 2026)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/chief-minister-siddaramaiah-launches-development-works-worth-324-crore-in-varuna-assembly-constituency/article70522178.ece',
    date: '2026-01-18',
    period: '2023-2028',
    note: 'The Hindu ke mutabik Siddaramaiah (jo Varuna seat ka pratinidhitva karte hain) ne Mysuru zila prashasan aur zila panchayat ke karyakram me Kupya/Kuppya gaon me Rs 323.04 crore ke karya launch kiye; Siddaramaiah ne kaha ki 2024 me Rs 501 crore aur 2025 me Rs 1,108 crore ke karya launch hue the — ye aankde unke dawe ke roop me darj hain, alag entry nahi. Fund ka srot ghoshit nahi.',
  },
  {
    title: 'Varuna ke Gudamadanahalli me Rs 100 crore ki NIMHANS-type mansik-swasthya sanstha aur de-addiction centre ka shilanyas hua — MMCRI ke adheen banegi, Revenue vibhag ne zameen transfer ki (19 Jan 2026)',
    category: 'Aspataal',
    badge: 'news',
    stage: 'shilanyas',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/nimhans-type-healthcare-facility-to-come-up-in-mysuru/article70525763.ece',
    date: '2026-01-19',
    period: '2023-2028',
    note: 'The Hindu (19 Jan 2026, Mysuru) ke mutabik Siddaramaiah ne Varuna assembly constituency ke Gudamadanahalli gaon (Mysuru taluk) me Rs 100 crore ki NIMHANS-type swasthya sanstha ka shilanyas rakha; Revenue vibhag ne zaroori zameen Mysore Medical College and Research Institute (MMCRI) ko transfer kar di hai jiske adheen sanstha banegi. Pehle charan me ek acre par G+5 building aur G+1 de-addiction centre banega; neurosurgery, neuro-radiology, neuro-anaesthesia aur neuro-psychiatry vibhag honge; blood bank, laboratory aur rehabilitation centre bhi pehle charan me. Fund ka srot ghoshit nahi.',
  },
  {
    title: 'MUDA site-allotment mamle me Governor ki Sec 17A jaanch-swikriti (19 Aug 2024), Karnataka HC ne swikriti barkarar rakhi (24 Sept 2024), special court ke nirdesh par Mysuru Lokayukta police ne Siddaramaiah aur anyon par FIR darj ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/muda-case-bengaluru-special-court-accepts-b-report-filed-by-lokayukta-police-giving-clean-chit-to-siddaramaiah-and-wife-parvathi/article70560918.ece',
    date: '2024-09-25',
    period: '2023-2028',
    note: 'The Hindu ke mutabik Karnataka ke Governor ne 19 Aug 2024 ko Prevention of Corruption Act, 1988 ki dhara 17A ke tahat Siddaramaiah ke khilaf jaanch ki swikriti di; 24 Sept 2024 ko Karnataka HC ne swikriti ko barkarar rakhte hue kaha ki shikayat me lagaye aaropon par jaanch zaroori hai; iske baad special court ne 25 Sept 2024 ko Lokayukta police Mysuru ke SP ko Siddaramaiah aur anyon par FIR darj karke jaanch ke nirdesh diye. Mamla MUDA dwara unki patni B. M. Parvathi ko Rs 56 crore ke 14 sites ke aavant me aniyamitta/bhrashtachar ke aarop ka tha. Jawab: iss The Hindu report me us samay unka pratyaksh jawab darj nahi hai. Stage: FIR star — negative entry me stage field nahi rakha gaya.',
  },
  {
    title: 'Lokayukta police ne MUDA mamle me Feb 2025 me B-report dakhil ki — Siddaramaiah, unki patni, sale aur mool zameen-malik ke khilaf bhrashtachar ka saboot nahi mila; shikayat-karta ne report ko chunauti di aur CBI jaanch maangi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/legal-news/bengaluru-court-accepts-lokayukta-clean-chit-for-cm-siddaramaiah-in-muda-case-10499884/lite/',
    date: '2025-02-01',
    period: '2023-2028',
    note: 'Indian Express ke mutabik Karnataka Lokayukta police ne Feb 2025 me B-report (closure report) dakhil ki jisme Siddaramaiah, unki patni B. M. Parvathi, sale Mallikarjun Swamy aur mool zameen-malik J. Devaraj ke khilaf bhrashtachar ke aarop sthapit karne ke liye saboot ka abhav bataya gaya; report ko Mysuru me MUDA dwara zameen-aavant me bade star ke bhrashtachar ki jaanch poori hone tak abeyance me rakha gaya. Shikayat-karta RTI activist Snehamayi Krishna ne closure report ko chunauti di aur CBI jaanch ki maang ki. Jawab/raahat tathya: vivaad ke baad 2024 me patni ne 14 housing sites MUDA ko wapas kar di thi. Stage: jaanch-closure — negative entry me stage field nahi rakha gaya. Date-note: page me keval "February 2025" darj hai, isliye tithi 2025-02-01 (maah-star) rakhi gayi hai.',
  },
  {
    title: 'Bengaluru special court ne 28 Jan 2026 ko Lokayukta ki B-report sweekar ki — Siddaramaiah aur unki patni B. M. Parvathi ko MUDA ke 14-sites mamle me clean chit; shikayat-karta ki virodh-yachika kharij, anya aaropiyon par jaanch jaari rahegi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/muda-case-bengaluru-special-court-accepts-b-report-filed-by-lokayukta-police-giving-clean-chit-to-siddaramaiah-and-wife-parvathi/article70560918.ece',
    date: '2026-01-28',
    period: '2023-2028',
    note: 'The Hindu (28 Jan 2026, Bengaluru) ke mutabik MPs/MLAs ke khilaf aapradhik mamalon ke special court ke judge Santosh Gajanan Bhat ne Karnataka Lokayukta police ki B-report sweekar karte hue Siddaramaiah aur unki patni B. M. Parvathi ko MUDA dwara Rs 56 crore ke 14 sites ke aavant me aniyamitta/bhrashtachar ke aarop se clean chit di; shikayat-karta Snehamayi Krishna (Mysuru-based social activist) ki virodh-yachika kharij kar di; saath hi adalat ne kaha ki anya aaropiyon ke khilaf jaanch jaari rahegi. Ye mamle ka raahat charan hai. Stage: adalati clean-chit — negative entry me stage field nahi rakha gaya.',
  },
];

karnatakaWorks['h-c-mahadevappa'] = [];


// ============ KARNATAKA BATCH 10 — Raichur jila (coordinator merge, 7 MLA) ============

karnatakaWorks['basanagouda-daddal'] = [
  {
    title: 'Valmiki ST Development Corporation ghotala jaanch me ED ne adhyaksh aur Raichur Rural MLA Basanagouda Daddal ke thikanon par chhape mare aur SIT ne unse ghanton poochhtach ki, lekin August 2024 ki 3,072-page chargesheet me unhe aaropi nahi banaya gaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://www.newindianexpress.com/amp/story/states/karnataka/2024/Aug/06/valmiki-st-corporation-row-nagendra-daddal-not-in-sit-chargesheet',
    date: '2024-08-06',
    note: 'The Indian Express ke anusaar SIT ne August 2024 me corporation ghotala mamle me 12 logon ke khilaf 3,072-page chargesheet dayar ki, lekin corporation ke adhyaksh aur Raichur Rural MLA Basanagouda Daddal ka naam aaropiyon me nahi tha. Usse pehle SIT ne Daddal se ghanton poochhtach ki thi, aur ED ne PMLA ke tahat Daddal ke parisaron par chhape mare, jahan agency ke anusaar dhokhe se nikali gayi rakam ke prabandhan se jude dastavej mile. Is article me Daddal ka koi jawab quote nahi hua hai (jawab ki anupasthiti disclose ki jati hai). Raahat pramukh roop se: Daddal ko kabhi aaropi nahi banaya gaya — SIT ki chargesheet me unka naam nahi aaya.',
    period: '2023-2028',
  },
];


karnatakaWorks['dr-shivaraj-patil'] = [];


karnatakaWorks['g-hampayya-nayak'] = [];


karnatakaWorks['karemma'] = [
  {
    title: 'Raichur KDP baithak me Karemma ki maang par jila-prabhari mantri ne DC ko nirdesh diya ki Devadurga ke dono toll plaza ki vasuli PWD-mantri se baithak hone tak asthaayi roop se rok di jaye.',
    category: 'Any', badge: 'news',
    sourceLabel: 'Times of India', sourceUrl: 'https://timesofindia.indiatimes.com/city/hubballi/congress-mlas-express-dissatisfaction-during-raichur-kdp-meeting/articleshow/122770296.cms',
    date: '2025-07-18',
    note: 'Page ke anusaar: JD(S) MLA Karemma Nayak (Devadurga) ne KDP baithak me zameen par baithkar virodh kiya — Devadurga ke vikas ke liye fund na milne, 33 PDOs ke nilamban ke baad sirf 6 bache hone, aur 40 km ke dayre me do toll plaza hone ka mudda uthaya; unhone kaha ki Nitin Gadkari ke bayan ke mutabik 60 km me do toll nahi hone chahiye. Unki maang par jila-prabhari mantri ne DC Nitish K ko nirdesh diya ki PWD-mantri se baithak hone tak toll vasuli asthaayi roop se rokne ke upay kiye jayen; isi ashwasan par unhone virodh samapt kiya. Credit capped: ye asthaayi rok ka ashwasan hai, bhautik sanrachna ka sampann kaam nahi; rok ke aage amal hua ya nahi, page par iska zikr nahi; fund ka srot ghoshit nahi.',
    period: '2023-2028',
  },
];


karnatakaWorks['manappa-d-vajjal'] = [];

karnatakaWorks['hampanagouda-badarli'] = [];
karnatakaWorks['basan-gouda-turvihal'] = [];


// ============================================================================
// BATCH 11 (Ramanagara + Shivamogga + Tumakuru — 21/31 jile)
// ============================================================================
// Coordinator QA (batch 11): m-t-krishnappa entry QA-DROP (Hindu page 403, snippet-only facts — retry lead);
// b-suresh-gowda note ko coordinator ne khud khole HT page (3 June 2025) tak grounded karke rewrite kiya (reply-absence disclosed);
// d-k-shivakumar medical-college entry The Hindu search-corroborated (cabinet approval Oct 2025, Rs 550cr, RGUHS);
// sangameshwara acquittal: BarandBench+LiveLaw (established legal media, do-outlet corroboration — Rahim-Khan precedent);
// araga-jnanendra FIR: IE headline me 'booked' — aaropi column me naam; note se meta-jumla hataya.

// --- Ramanagara ---

// REJECT-LOG (h-c-balakrishna) — Magadi (AC 182), INC, 5-time MLA; 2023 me 94,650 vote, A. Manjunath (JD(S), 82,811) ko 11,839 se haraya.
// Pehchan pakki: ye WAHI H.C. Balakrishna hain jo 26 Jan 2024 ko Karnataka State Road Development Corporation chairman bane aur 3 Aug 2026 ko
// D.K. Shivakumar cabinet me Municipal Administration mantri bane. C.N. Balakrishna (Shravanabelagola, JD(S)) ALAG vyakti hain — unke items yahan mix nahi hue.
// Nandamuri Balakrishna (Hindupur) bhi alag hain.
//
// WORKS — sab reject:
// 1. YG Gudda lift irrigation project shilanyas, Magadi (New Indian Express, 5 Mar 2026): shilanyas DCM D.K. Shivakumar ne kiya; MLA sirf dais par maujood,
//    bhashan me DK brothers ki tareef ki. REJECT: dusre neta ke karyakram me maujoodgi, MLA ne shilanyas nahi kiya.
// 2. Magadi town me D.K. Shivakumar dwara vikas karyon ka shilanyas/lokarpan (IBC World News, non-whitelist): phir DKS ka event, MLA sirf maujood.
//    REJECT: source non-whitelist + MLA ki vyaktigat bhoomika disclosed nahi.
// 3. Kempegowda statue relocation + Rs 40 crore hospital ka dawa (Bangalore Mirror, Oct 2025): MLA ka bayan (faisle ka bachav); "government has sanctioned" —
//    MLA ki vyaktigat bhoomika/fund-scheme disclosed nahi; statue shift lokarpan/shilanyas nahi. REJECT; RETRY-LEAD neeche.
// 4. Magadi Fort ke liye Rs 103 crore cabinet manzoori (New Indian Express, 3 Jul 2025): cabinet ka faisla; MLA ki vyaktigat bhoomika article me nahi.
//    REJECT; RETRY-LEAD neeche.
// 5. Express link canal pariyojna (lagbhag Rs 1,000 crore; 83 Magadi lakes; The Hindu): sarkari pariyojna, article me MLA ka naam/bhoomika nahi. REJECT.
// 6. KSRDC chairman niyukti (Jan 2024): pad hai, kaam nahi. REJECT.
// 7. Bidadi township par bayan/aarop (The Hindu, NIE; June 2026): sirf rajnaitik bayan. REJECT.
// 8. "Black magic" par K.N. Rajanna ko jawab (The Hindu, 22 Apr 2026): bayan akela. REJECT.
// 9. Guarantee schemes par mantri-bayan (ThePrint/PTI, 27 Sep 2026): mantri ka bayan, kaam nahi. REJECT.
// 10. Urban local bodies ko mantri-nirdesh (Times of India, Sep 2026): mantri-pada ka kaam, seat-scope ke bahar. REJECT.
// 11. Halafnama 2023: 2 criminal cases declared — halafname ke pending mamle akele negative nahi; entry bhi nahi.
//
// NEGATIVES — sab reject (koi entry nahi):
// N1. 42nd ACMM Court Bengaluru dwara non-bailable warrant (published 2026-04-04): 2018 MCC violation trial me baar-baar peshi par na aane par NBW;
//     mamla 2018 chunav me Ramanagara taluk ke resort me bina anumati meeting + sharab vyavastha (IPC/RP Act/Excise Act). Substantively ye May 2023+
//     nyayik vikas hai aur MLA khud aaropi hain — LEKIN sources sirf Dailyhunt (aggregator) aur publicnext.com (non-whitelisted) hain; task whitelist
//     (Hindu/IE/HT/NDTV/IndiaToday/TOI/DH/PTI) me koi coverage nahi mila. RETRY-LEAD: whitelisted outlet coverage + uske baad ka stage (pesh hua ya
//     jamanat) verify karke stage-accurate entry possible. MLA ka jawab srot me darj nahi.
// N2. Kudur PS C.C.No.30762/2021: 14 Nov 2024 ko XLII Addl. CJM Bengaluru (MP/MLA special court) ne H.C. Balakrishna (A1 — pehchan pakki: S/o H.G.
//     Channappa, Hulikatte village, Magadi taluk) ko Sec 248(1) CrPC ke tahat 143/147/353/504/506 IPC se BARI kar diya. Ye May 2023+ nyayik vikas
//     (raahat) hai, lekin FIR pre-term (Jan 2017 Kudur PS ghatna) aur koi whitelisted established-media coverage nahi — sirf indiankanoon court record
//     (established media nahi); 2017 ki ghatna par Deccan Chronicle report task whitelist me nahi. REJECT as entry.
// N3. JDS PIL Feb 2024 (NIE): gift-card shikayat me Magadi ka naam; PIL ECI ke khilaaf thi, Balakrishna respondent/accused nahi; FIR/chargesheet/probe
//     ka aadesh nahi. Shikayat me naam lekin FIR ke aaropi column me naam nahi = negative nahi. REJECT.
//
// RETRY-LEADS (coordinator ke liye):
// R1. NBW 2026-04-04: whitelisted outlet (Hindu/IE/HT/NDTV/IndiaToday/TOI/DH/PTI-on-established) coverage dhoondo; sath me warrant ke baad ka stage
//     (adalat me peshi / warrant wapas / jamanat) aur MLA ka jawab — stage-accurate entry tabhi.
// R2. Kempegowda statue site par Rs 40 crore hospital: whitelisted outlet me MLA ki vyaktigat bhoomika/fund ke sath sanction/lokarpan mile to entry.
// R3. Magadi Fort Rs 103 crore: MLA ki Vidhansabha maang/prashn ka dastaveji nateeja (mantri-ashwasan/GO) mile to credit-capped entry possible.
//
// NOTE: KLLADS Rs 2cr/seat/varsh — kisi bhi item me fund-srot srot ne spasht nahi kaha, isliye koi fund disclosure jodne layak item hi nahi mila.
karnatakaWorks['h-c-balakrishna'] = [];

// REJECT-LOG — H. A. Iqbal Hussain (INC), Ramanagara (AC 183), kaaryakaal May 2023+
// 1. Mayaganahalli Gram Panchayat hall lokarpan (Sep 26, 2025, IBC World News): source whitelist me nahi — REJECT.
// 2. Ramanagara city bus launch (Sep 15, 2025, Public TV): source whitelist me nahi; flag-off mantri ne kiya, MLA ki bhoomika keval patra — REJECT.
// 3. Bus shelter bhoomi puja delay (Mar 28, 2026, IBC World News): source whitelist me nahi; puja hui hi nahi — REJECT.
// 4. TOI BMTC '25km barrier' article (Sep 2025): whitelist source par MLA ka ullekh hi nahi; mantri ki pariyojna — REJECT.
// 5. The Hindu medical-college shifting row (Sep 27, 2023): 2007 se 5vi bhoomi puja; sarkari/university pariyojna, vyaktigat swikriti nahi — keval shubharambh — REJECT.
// 6. Daijiworld BMTC story (Sep 17, 2025): source whitelist me nahi — REJECT.
// 7. Lokayukta land-grab complaint (Public TV, Jan 2025): source whitelist me nahi; sirf shikayat, MLA ke khilaaf FIR/chargesheet nahi — REJECT.
// 8. Viral video-call FIR (South First/Asianet, May 2024): FIR agyaat sharartiyon ke khilaaf, MLA aaropi nahi; source whitelist me nahi — REJECT.
// 9. Election petition (Mar 2024 order): election petition akele negative nahi — REJECT.
// 10. JDS PIL on poll corruption (New Indian Express, Feb 2024): notice ECI/SEC ko, MLA aaropi nahi — REJECT.
// 11. The Hindu advocates protest (Feb 2024): FIR me MLA aaropi nahi; pradarshankariyon ka dabav ka aarop matra — REJECT.
// 12. Budget criticism stories (Deccan Herald/udayavani, Mar 2026): keval rajneeti/maang, koi kaam nahi — REJECT.
karnatakaWorks['h-a-iqbal-hussain'] = [];

// WORKS-RESEARCH — D. K. Shivakumar (INC), Kanakapura (AC 184), kaaryakaal May 2023+
// Pehchan pakki: src/data/karnataka.ts (slug d-k-shivakumar) — Kanakapura, INC, Winner 2023
// (143,023 vote; runner-up Nagaraju JD(S), 20,631 vote). CM rule laagu: sirf Kanakapura seat ke kaam.
// REJECT-LOG:
// 1. Axis Bank ki Dodda Alahalli branch ka lokarpan (Feb 17, 2025, biznewsdesk/apnnews): niji bank
//    ki branch, sarkari sanrachna nahi; sources whitelist me bhi nahi — REJECT.
// 2. Cauvery se Kanakapura taluk ke 250 gaon ko peyjal (The Hindu, Jul 22, 2025): yojna ki
//    ghoshna ("plan would be formulated"); "kicked off" ka dawa bina GO ke — pre-event announcement,
//    REJECT + lead (GO/sanction mile to phir vichaar).
// 3. Medical college shilanyas (May 14, 2026 ko hone ki ghoshna thi): PTI Jun 7, 2026 — "foundation
//    stone ... will soon be laid", matlab tab tak hua nahi tha — REJECT + lead.
// 4. Infosys ke saath mahila-baal aspataal "operational" (Janaspandana dawa, Jul 21, 2025):
//    whitelist source par lokarpan ka record nahi mila — REJECT + lead.
// 5. Hathi-rok 50 km deewar: sirf MLA ka dawa, koi itemized sanction nahi — REJECT.
// 6. Schools ke liye 25 acre zameen daan (New Indian Express, Nov 9, 2024): daan — REJECT.
// 7. Kodihalli sabzi mandi lokarpan (Jul 21, 2025): sirf unke tweet + publictv (whitelist bahar) par
//    ullekh; whitelist source par khabar nahi mili — REJECT + lead.
// 8. Maddur (Mandya) me Rs 1,146 crore pariyojnaon ka shilanyas (Jul 28, 2025): seat ke bahar — REJECT.
// 9. Hebbal 125-bistar sarkari aspataal: seat ke bahar (Bengaluru) — REJECT.
// 10. S. M. Krishna naam ki Rs 631 crore sadak (Bengaluru): seat ke bahar — REJECT.
// 11. Jun 7, 2026 ko metro se Kanakapura daura: yatra, koi kaam nahi — REJECT.
// 12. Bengaluru tunnel road / elevated corridor virodh: Bengaluru mantri-kaam, seat se bahar — REJECT.
karnatakaWorks['d-k-shivakumar'] = [
  {
    title: 'Rajya Cabinet ne Kanakapura Medical College ko prashasanik swikriti di hai, jis par lagbhag Rs 550 crore kharch honge aur 150 MBBS seatein hongi.',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/karnataka-uncertainty-over-medical-college-in-ramanagara-continues/article70155059.ece',
    date: '2025-10-26',
    note: 'The Hindu ke anusar, Cabinet ne October 2025 me Kanakapura Medical College (autonomous status, 150 MBBS seats) ko prashasanik swikriti di; pariyojna me medical college, 300 bistar ka aspataal, ladka-ladki hostel aur staff quarter shamil hain; poori laagat Rajiv Gandhi University of Health Sciences (RGUHS) uthaegi; NMC se anumodan abhi baki hai.',
    period: '2023-2028',
  },
  {
    title: 'Shivakumar ka dawa hai ki Kanakapura seat me 13 CSR-funded Karnataka Public Schools ban rahe hain aur har school par Rs 9 se Rs 12 crore kharch ho rahe hain.',
    category: 'School',
    badge: 'dawa',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/nodal-officers-to-monitor-csr-funded-public-schools-diversion-of-corporate-funds-flagged/article69641307.ece',
    date: '2025-05-31',
    note: 'The Hindu me chhapi inki baatcheet ke anusar yah unka dawa hai — "We are building 13 CSR KPSs in my constituency"; school corporate CSR fund se ban rahe hain, sarkari fund se nahi; nirmaan ki dheemi gati par unhone khud narazgi jatayi thi.',
    period: '2023-2028',
  },
  {
    title: 'Supreme Court ne Shivakumar ke khilaf ED ka PMLA money-laundering mamla khatm kar diya hai.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan Times',
    sourceUrl: 'https://www.hindustantimes.com/india-news/sc-quashes-ed-case-against-karnataka-deputy-chief-minister-dk-shivakumar-101709630544062.html',
    date: '2024-03-05',
    note: 'Hindustan Times ke anusar, Justices Surya Kant aur K. V. Viswanathan ki peeth ne November 2023 ke Pavana Dibbur faisle ka hawala dekar kaha ki sirf IPC Section 120B (criminal conspiracy) ke aadhar par PMLA jaanch nahi chal sakti; ASG ne yah sweekar kiya; ED ko review petition safal hone par aadesh wapas lene ki chhoot di gayi; ED case me Shivakumar September 2019 me giraftar hue the.',
    period: '2023-2028',
  },
  {
    title: 'Supreme Court ne CBI ke disproportionate assets case ko radd karne ki Shivakumar ki yachika kharij kar di hai.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/sc-rejects-dk-shivakumar-plea-to-dismiss-cbi-corruption-case/article68405974.ece/amp/',
    date: '2024-07-15',
    note: 'The Hindu ke anusar, Justices Bela M. Trivedi aur S. C. Sharma ki peeth ne kaha ki mamla Prevention of Corruption Act ke tehat gambhir hai aur radd nahi ho sakta; Karnataka High Court ka October 2023 ka aadesh barkarar raha; Shivakumar ne kaha tha ki adalat jo kahega use maanenge.',
    period: '2023-2028',
  },
  {
    title: 'Karnataka High Court ne CBI ki us yachika ko ‘non-maintainable’ batakar kharij kar diya hai jisme sarkar ke consent wapas lene ke faisle ko chunauti di gayi thi.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/top-news-of-the-day-high-court-rejects-cbi-plea-to-continue-probe-against-karnataka-deputy-cm-shivakumar-two-ysr-congress-rajya-sabha-mps-resign-six-more-likely-to-follow-suit-and-more/article68581424.ece',
    date: '2024-08-29',
    note: 'The Hindu ke anusar, High Court ne kaha ki CBI ko consent-wapsi ko chunauti dene ke liye Supreme Court jana hoga; Rs 74.93 crore ke disproportionate assets mamle ki jaanch ab Karnataka Lokayukta ke paas hai.',
    period: '2023-2028',
  },
  {
    title: 'Supreme Court ne consent wapas lene ke khilaf CBI ki yachika ki sunvai Justice Surya Kant ki adhyakshata wali peeth ko saunpi hai.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/supreme-court-assigns-cbi-plea-on-shivakumar-case-to-justice-kants-bench/article70081630.ece',
    date: '2025-09-22',
    note: 'Taareekh aadesh ki hai (article 23 September 2025 ko prakashit hua). The Hindu ke anusar, CJI B. R. Gavai ne kaha ki mamla pehle Justice Kant wali peeth ne dekha tha; High Court ne August 2024 me CBI ki yachika kharij ki thi; mamla vicharadhin hai.',
    period: '2023-2028',
  },
  {
    title: 'Income tax case me special court ne trial ki karyavahi shuru kar di hai.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/karnataka-cm-designate-d-k-shivakumar-gets-2-year-foreign-travel-relief-in-2018-income-tax-case-10718604/',
    date: '2025-09-04',
    note: 'Indian Express ke anusar, special court ne 4 September 2025 ko Shivakumar, Anjaneya Hanumanthaiah aur Rajendra ke khilaf charge se pehle saboot ki prakriya shuru ki; IT vibhag ne November 2021 me Rs 8.59 crore ke case me chargesheet dayar ki thi; trial vicharadhin hai.',
    period: '2023-2028',
  },
  {
    title: 'Special court ne 2018 ke income tax case me Shivakumar ko do saal tak videsh yatra ki anumati de di hai.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/karnataka-cm-designate-d-k-shivakumar-gets-2-year-foreign-travel-relief-in-2018-income-tax-case-10718604/',
    date: '2026-05-15',
    note: 'Taareekh aadesh ki hai (article 1 June 2026 ko prakashit hua). Indian Express ke anusar, court ne USA, Europe, UK, Australia, Russia aur Arab deshon ki yatra ki ijazat di; shartein: yatra se pehle IT vibhag ko suchit karna hoga aur trial ke liye adalat me upasthit hona hoga; Rs 8.59 crore ka IT case vicharadhin hai.',
    period: '2023-2028',
  },
];

// KA11 WORKER — C. P. Yogeshwara (Channapatna, INC, upchunav 13 Nov 2024)
// Pehchan: src/data/karnataka.ts line 5652-5680 — slug 'c-p-yogeshwara',
// Channapatna (AC 185), INC, tenure start '2024' (2024-2028). Pehle ke saare
// karya (2024 upchunav se pehle ke) is record par NAHI liye gaye.
//
// REJECT-LOG (sources kholkar padhe gaye; establishment-media whitelist):
// 1. REJECT (pre-term): 1 Oct 2022 — Rs 50 crore ke development works ka
//    shilanyas, Bhyrapatna (newsdrum, PTI). Tab BJP ke MLC the, upchunav se
//    pehle; kaaryakaal ke bahar.
// 2. REJECT (dusre neta ka karyakram + CSR): 12 Sep 2025 — Kodamballi me
//    govt school ka shilanyas (PTI via newsdrum). Bengaluru Rural MP
//    C. N. Manjunath ne kiya, Biocon CSR fund; MLA sirf maujood the.
// 3. REJECT (dusre neta ka karyakram; non-whitelist): ~July 2026 — Yelekeri
//    Gate par ROB ka lokarpan, freepressjournal. Railway/MoSR V. Somanna ka
//    karyakram; MLA ne sirf 'graced the occasion'.
// 4. REJECT (chunav-se-pehle ki ghoshna): Oct 2024 — D. K. Shivakumar ne
//    Rs 500 crore ke projects ka waada kiya tha (The Hindu / varthabharati,
//    PTI). Campaign announcement, upchunav se pehle.
// 5. REJECT (pre-term): Iggalur barrage se lift-irrigation, 100+ tanks/2011-14
//    (Bangalore Mirror 2016; TNIE 8 Nov 2024). 2024 se pehle ke kaam.
// 6. REJECT (vyaktigat bhoomika nahi): 10 Sep 2026 — Rs 128 crore UGD project,
//    Channapatna (TNIE). Upa Lokayukta ke suomoto + DC ki report par sanction;
//    page me MLA ki vyaktigat bhoomika ka zikr nahi.
// 7. SAVDHANI (mantri): 'Aug 2026 cabinet' ki koi established-media/whitelist
//    report nahi mili; foundation record me sirf MLA tenure (2024-2028) hai.
//    Isliye sirf Channapatna seat ke kaam hi dekhe gaye.
// 8. NEGATIVES: MDBL/SFIO mamle (FIR 2006, chargesheets 2010-2012) pre-term
//    hain; May 2023 ke baad ki koi established-media judicial development
//    nahi mili (casemine/indiankanoon court records whitelist me nahi).
//    Soraba ka 354 wala case (Shimoga district) dusre vyakti ka lagta hai,
//    attribution nahi kiya gaya. H. D. Kumaraswamy ke mamle inpar nahi liye.
//
// Natija: koyi whitelist-worthy in-term (2024 upchunav ke baad) vyaktigat
// lokarpan/shilanyas, GO-backed swikriti ya itemized sanction-list established
// media me nahi mili. = [];
karnatakaWorks['c-p-yogeshwara'] = [];

// --- Shivamogga ---

// sharada-puryanaik (Shimoga Rural (SC), JD(S); MLA 2023-2028; Jul 2023 se JD(S) legislature party ki deputy leader — pehli mahila) — REJECT-LOG: May 2023+ ke daur me whitelist media me Shimoga Rural seat par inke naam se koi bhi dastaveji vyaktigat vikas-kaam (lokarpan/shilanyas/GO-backed swikriti) nahi mila. REJECT: (1) The Hindu 23 Mar 2025: Purdal me Barehalla dam repair ka foundation stone mantri Madhu Bangarappa ne rakha (Gudali Puja); MLA sirf maujood thin — dusre neta ka karyakram, REJECT. (2) The Hindu 28 Jan 2026: Forest Minister Eshwar Khandre ke Shettihalli nirikshan me saath theen — daura, REJECT. (3) The Hindu 13 May 2025: Anupinakatte me temple structure demolition par spot visit + mandir dobara banane ki maang — maang, REJECT. (4) The Hindu 14 Apr 2026: Ambedkar Jayanti karyakram me shirkat — upasthiti, REJECT. (5) Mangalorean/IANS 21 Jan 2026: Bhadra canal tragedy site visit — nirikshan, REJECT (non-whitelist bhi). (6) sharadapuryanaik.com (khud ki site): Hunasoodu Tanda CC road Rs 15 lakh MADB grant ka dawa — page khola nahi ja saka (browser grant fail), koi date ya vyaktigat lokarpan ki pushti nahi; date/bhoomika pusht na hone se dawa-grade me bhi nahi rakha — REJECT, future research lead. (7) Usi site par: Anganwadi smartphones distribution, FPO share certificates, Shivamogga-Chennai train service inauguration, COVID essentials — sab distribution/upasthiti/pre-term, REJECT. (8) The Hindu 4 May 2023: EC flying squad ki shikayat par Kumsi police ne JD(S) candidate Sharada Puryanaik ke khilaf Hubbanahalli (Balekoppa GP, 2 May 2023 campaign) me bachchon ke istemal par Child Labour (Prohibition and Regulation) Act, 1986 ke tahat case darj kiya — pre-term FIR, lekin in-term nyayik vikas (chargesheet + quash) hua isliye negative entry valid. NEGATIVE (valid, in-term, stage-accurate): LiveLaw 12 Jun 2026 — Karnataka HC ne chargesheet wali karyavahi radd ki; MLA khud aaropi + Shimoga (Rural) seat-pehchan + chargesheet (Kumsi PS Crime No. 0073/2023) + vakil ka jawab disclosed + aakhri stage (quashed). Quash ki coverage sirf LiveLaw me mili (whitelist outlets me nahi) — stage-accurate reporting ke liye LiveLaw cited, The Hindu FIR corroboration is log me. KLLADS ka neta-war kharch kisi source me nahi mila — fund joda nahi.
karnatakaWorks['sharada-puryanaik'] = [
  {
    title: 'Karnataka High Court ne 12 June 2026 ko Shimoga Rural ki JD(S) MLA Sharada Puryanaik ke khilaf May 2023 ki chunav rally me bachchon ke istemal ke aarop par Kumsi Police ki chargesheet wali saari aage ki karyavahi radd kar di.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'LiveLaw',
    sourceUrl: 'https://www.livelaw.in/high-court/karnataka-high-court/karnataka-high-court-quashes-case-janata-dal-mla-sharada-purya-children-political-rally-case-537674',
    date: '2026-06-12',
    note: 'LiveLaw ne likha ki Justice M. Nagaprasanna ki single judge bench ne kaha ki campaign venue ke paas bachchon ki mahaz maujoodgi se Juvenile Justice Act ki Section 75/77 aur Child & Adolescent Labour (Prohibition and Regulation) Act ki Section 14 aakarshit nahi hote. Background: Election Commission ke flying squad ki shikayat par Hubannahalli me May 2023 ki rally me bachchon ke dikhai dene par Kumsi Police Station (Crime No. 0073/2023) ne chargesheet file ki thi; trial court ne Feb 2024 me cognizance li aur karyavahi XLII Addl. CJM, Bengaluru City ke saamne pending thi. MLA ke vakil ne kaha tha ki unhone bachchon ko rally me nahi bulaya tha — paas me school hone se bachche khud rally me shamil ho gaye the. Jan 2025 ke interim order me bhi court ne yehi prima facie tippani ki thi. Case title: Sharada Purya Naik vs. State of Karnataka & Anr.; CRL.P No. 13717/2024; citation 2026 LiveLaw (Kar) 205. Aage ka vikas whitelist media me darj nahi mila; abhi ki stage: mamla radd (quashed).',
    period: '2023-2028',
  },
];

// b-k-sangameshwara (Bhadravati, INC, karyakaal 2023-2028) — worker report 2026-10-19
// PEHCHAN: slug 'b-k-sangameshwara', name 'B. K. Sangameshwara', party INC, post MLA, seat Bhadravati (src/data/karnataka.ts).
// REJECT-LOG:
// 1. KRIDL/Land Army chairman appointment (New Indian Express, 27 Jan 2024) — board pad hai; seat me koi vyaktigat lokarpan/shilanyas darj nahi; seat ke bahar ka role -> REJECT.
// 2. Rajkumar/Puneeth Rajkumar mandir anavaran, Bhadravati (TOI, Jan 2026, Rs 35 lakh) — fans association ne banwaya; MLA sirf maujood the aur tareef ki -> dusre ke karyakram me maujoodgi -> REJECT.
// 3. Indira canteen, Holehonnur, Bhadravati taluk (The Hindu, 14 Mar 2026) — udghatan minister Madhu Bangarappa ne kiya; Sangameshwara ka naam tak nahi -> vyaktigat bhoomika nahi -> REJECT.
// 4. Ministerial berth ki maangein (The Hindu 2 Jun 2026, Deccan Herald Sep 2026) — dusre logon (Mahasabha, SBUDA chief) ki maang -> REJECT.
// 5. Retirement/son support ghoshna, Kudligere (Nov 2025, udayavani/publicnext) — rajnaitik ghoshna, non-whitelist aggregator -> REJECT.
// 6. Dharmik bayan vivad (TOI, Sep 2025) — bayan/vivad, koi bhautik kaam nahi; complaint-column unnamed -> negative bhi nahi -> REJECT.
// 7. 2019 forest official dhamki video (The Hindu, 6 Jan 2019) — pre-term; May 2023+ me koi nyayik vikas nahi -> REJECT.
// 8. SBUDA chief ka CM se Rs 500 crore works ki maang (Deccan Herald, Sep 2026) — maang/pre-event -> REJECT.
// 9. KLLADS neta-war kharch ka public record uplabdh nahi (srot kahe tabhi jodein) -> koi entry nahi.
// 10. No whitelisted-media works entry (sadak/paani/school/aspataal) mili May 2023+ ke liye inka naam jodkar.
// NEGATIVES: 2010 ka maarpeet mamla (Spl.CC.No.828/2018) — pre-term, lekin 22 Sep 2026 ko in-term bari-faisala aaya (BarandBench + LiveLaw, established legal media) -> stage-accurate negative entry darj.
karnatakaWorks['b-k-sangameshwara'] = [
  {
    title: 'Bengaluru ki vishesh adalat ne 22 September 2026 ko Bhadravati ke Congress MLA B. K. Sangameshwara aur chaar anyon ko 2010 ke kathit maarpeet mamle me sandeh ka laabh dekar sabhi aaropon se bari kar diya, aur doshi adhikaariyon par karwai ke liye mamla Acquittal Review Committee ke paas rakhne ka nirdesh diya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'BarandBench',
    sourceUrl: 'https://www.barandbench.com/news/litigation/bengaluru-court-acquits-congress-mla-sangamesha-four-others-in-2010-attack-case',
    date: '2026-09-22',
    note: 'Faisala Spl.CC.No.828/2018 me LXXXI Additional City Civil and Sessions Judge Shivaprasad K. B., Bengaluru ne 22 September 2026 ko sunaya; BarandBench ne 24 September 2026 ko report kiya aur LiveLaw ne bhi usi din khabar ki pushti ki. Pehchan: dono reports me inhe sitting Congress MLA B. K. Sangameshwara (report me Sangamesha) likha gaya hai — Bhadravati ke vartaman MLA; faisle me aaropi no.1 ka pata Bhadravathi, Shimoga darj hai. Aarop: IPC ki dhaara 120-B (criminal conspiracy), 147 (rioting), 307 r/w 149 (attempt to murder) aur 326 r/w 149 (dangerous weapons se grievous hurt). Mamla May 2010 ka hai: kaha gaya ki Haladamma Devi utsav ke kushti karyakram ke udghatan ke baad Sangameshwara aur sathiyon ne Bhadravati me C. Mahesh Kumar aur unki behen Jayamma par kathit hamla kiya; Paper Town police station me FIR darj hui thi. Court ne janch me gambhir khamiyan payi: mentally ill vyakti Jagadish (aaropi no.6) ko politically prabhavshali aaropiyon ko bachane ke liye ‘scapegoat’ banaya gaya — unhe 2018 me hi discharge kiya ja chuka tha; complainant ki ghatnasthal par upasthiti par gambhir sandeh; gawahon ke bayanon me virodhabhas aur ghatna ke teen alag-alag versions. In sab par court ne aaropiyon ko sandeh ka laabh diya aur bari kar diya; victim ko compensation ki sifarish nahi ki. Court ne state ko nirdesh diya ki mamla Acquittal Review Committee ke saamne rakha jaye taaki doshi adhikaariyon ki pehchan karke unpar karwai ho. Bachav paksh ke vakil C. H. Hanumantharaya the. Mamla pre-term (2010) ka hai, lekin bari-faisala karyakaal (2023-2028) ke andar aaya hai, isliye stage-accurate darj kiya gaya.',
    period: '2023-2028',
  },
];

// KA11 worker fragment — S. N. Channabasappa (BJP), Shimoga MLA (2023-2028).
// Seat/seat record: ~/workspace/aapkaneta/src/data/karnataka.ts (slug 's-n-channabasappa').
//
// REJECT-LOG (sab reject, karan sahit):
// - Tunga river bypass bridge lokarpan (The Hindu, 2023-12-18): article me saaf nahi ki lokarpan kisne kiya; MLA sirf maujood the; project Union Ministry of Road Transport & Highways ka, Rs 20.16 crore; MLA ka credit-daawa MP ke saath shared tha — vyaktigat lokarpan nahi.
// - KSCA indoor stadium (Rs 4.9 crore) shilanyas (Deccan Herald, Sep 2026): MP B. Y. Raghavendra ne udghatan kiya, MLA sirf atithi the — dusre neta ke karyakram me maujoodgi.
// - Mahatma Gandhi Nagara Vikas Yojana (Rs 127.5 crore) + Tunga pollution rok (Rs 40 crore) shilanyas (The Hindu, 2026-05-02): mantri Byrathi Suresh ne shilanyas kiya, MLA maujood the.
// - Gopala Extension road naming (The Hindu): Bangarappa naamkaran samaroh, MLA maujoodgi.
// - Migrant workers housing complex lokarpan, Sidlipura (The Hindu, 2025-08-04): mantri Santosh Lad ne udghatan kiya, MLA maujood the.
// - Job fair udghatan (The Hindu, Feb 2026): abhiyan shubharambh — REJECT.
// - Phase II drinking water project (TOI): 'jaldi shuru hoga' wali ghoshna, pre-event announcement — REJECT.
// - Mahalakshmi Sweets 48th outlet (Star of Mysore): niji business — REJECT.
// - Wildlife photography exhibition (The Hindu, 2024-10-07): temporary exhibition ka udghatan, bhautik sarkari sanrachna nahi — REJECT.
// - PM Modi airport/Smart City karyakram (Feb 2023): pre-term, dusre neta ke karyakram — REJECT.
// - Negatives: established media me May 2023 ke baad MLA ke khilaf koi FIR/chargesheet/janch nahi mili; halafnama ka 1 purana mamla affidavit-cases-alone niyam se negative nahi.
karnatakaWorks['s-n-channabasappa'] = [
  {
    title: 'Shivamogga ke Mahatma Gandhi Park me bane Wildlife Interpretation Centre aur Science Park ka lokarpan MLA S. N. Channabasappa ne kiya, ye Shivamogga Smart City pariyojana ka hissa hai.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hindu',
    sourceUrl: 'https://www.thehindu.com/news/national/karnataka/wildlife-interpretation-centre-and-science-park-inaugurated-at-mahatma-gandhi-park-in-shivamogga/article70656218.ece',
    date: '2026-02-20',
    note: 'Shivamogga City Corporation ke adhikari upasthit the; report me fund ka aankda nahi diya gaya, isliye KLLADS ka zikr nahi joda gaya.',
    period: '2023-2028',
  },
];

// araga-jnanendra (Tirthahalli, BJP; purva Grih Mantri) — REJECT-LOG: May 2023+ ke daur me whitelist (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, Deccan Herald, PTI) me Tirthahalli seat ke koi bhi dastaveji vyaktigat vikas-kaam (lokarpan/shilanyas/GO-backed swikriti) Araga Jnanendra ke naam par nahi mile. REJECT: (1) Deccan Herald 21 Sep 2026: CM Shivakumar ne Thirthahalli ke Rameshwara temple ke liye Rs 1cr grant diya — Jnanendra sirf maujood the, dusre neta ka karyakram, REJECT. (2) Deccan Herald 7 Oct 2026: Rs 800cr labour welfare fund scam ka aarop — Jnanendra ki janch-maang/bayan, FIR nahi, REJECT. (3) Public TV Aug 2023: murder spot visit — nirikshan/daura, REJECT. (4) TOI Mar 2026: Kopparige Gudda hill destruction me tahsildar ko phatkaar — kaam nahi, REJECT. (5) New Indian Express Sep 2026: Kasturirangan Assembly bayan — raajneetik, REJECT. (6) IBC World News Jul 2026: McGann Hospital maternal death ka mantri ke saamne mudda — koi bhautik sanrachna nahi, REJECT. (7) newskarnataka Jul 2026: PWD mantri ka Agumbe Ghat nirikshan — Jnanendra sirf saath the, dusre neta ka daura, REJECT. (8) Prasad Netralaya Thirthahalli retina dept lokarpan 2018 — pre-term, REJECT. (9) PM ke Feb 2023 Shivamogga projects (NH-169 Bharathipura bridge) — pre-term + PM ka kaam, REJECT. (10) Grih Mantri-kal ke karye (police station buildings, Mysuru prison Oct 2022) — purva mantri pad-karye, seat ke kaam nahi, REJECT. KLLADS ka neta-war istemal kisi whitelist source me nahi mila — fund joda nahi. NEGATIVE (valid, in-term): Indian Express 4 Aug 2023 — Kalaburagi police ne Congress worker Rajeev Jane ki shikayat par Jnanendra par IPC dhara 504 ke tahat FIR darj ki (non-cognisable, magistrate clearance ke baad); tippani 2 Aug 2023 ko Thirthahalli me Kasturirangan report virodh me hui thi; Jnanendra ne khed vyakt kiya tha. In-term FIR + MLA khud aaropi + seat-pehchan + jawab disclosed + stage-accurate — negative entry rakhi.
karnatakaWorks['araga-jnanendra'] = [
  {
    title: 'Thirthahalli MLA Araga Jnanendra par 3 Aug 2023 ko Kalaburagi police ne Congress president Mallikarjun Kharge ke baare me vivadit tippani karne par IPC ki dhara 504 ke tahat FIR darj ki.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Indian Express',
    sourceUrl: 'https://indianexpress.com/article/cities/bangalore/ex-karnataka-home-minister-araga-jnanendra-booked-remarks-mallikarjun-kharges-skin-colour-8876363/',
    date: '2023-08-03',
    note: 'Indian Express ne likha ki Kalaburagi police ne Congress worker Rajeev Jane ki shikayat par 3 Aug 2023 ko Jnanendra ke khilaf IPC dhara 504 (intentional insult with intent to provoke breach of peace) ke tahat mamla darj kiya; ye non-cognisable crime tha aur local magistrate se clearance ke baad register hua. Tippani 2 Aug 2023 ko Thirthahalli me Kasturirangan committee report ke implementation ke khilaf virodh pradarshan me hui thi. Jnanendra ne baad me khed vyakt kiya aur kaha ki Kharge ko vishesh roop se target karne ka unka irada nahi tha. Aage ka nyayik vikas (chargesheet/faisla) whitelist media me darj nahi mila.',
    period: '2023-2028',
  },
];

// REJECT-LOG for slug 'b-y-vijayendra' (B. Y. Vijayendra, BJP, Shikaripura; tenure 2023-2028)
// Record verified in src/data/karnataka.ts lines 3473-3489 (seat Shikaripura, party BJP, tenure start 2023).
//
// Searches run (2026-10-19): English web searches for Vijayendra + Shikaripura + inauguration/
// foundation-stone/development works across 2023-2026, including Deccan Herald/The Hindu-scoped queries.
// RESULTS: zero usable entries. Reasons:
// 1. Almost all coverage of Vijayendra since Nov 2023 is in his capacity as Karnataka BJP state
//    president (political statements, protests, padyatras, budget memoranda) -> REJECT per rule
//    (pad-karye/party-karye works NAHI).
// 2. PM Modi Feb 2023 Shivamogga projects (Shikaripura Town bypass NH 766C, Rs 215 cr road works,
//    Rs 990 cr Shivamogga-Shikaripura-Ranebennur rail line, Jal Jeevan Mission multi-village schemes)
//    -> pre-term (Feb 27, 2023; tenure starts May 2023) AND PM's event, no personal role -> REJECT.
// 3. Father B. S. Yediyurappa's 2021 CM-era Shivamogga/Shikaripura works (Rs 1,800 cr package, Rs 850 cr
//    lake-filling project, hospital upgradation May 2022) -> pita ke kaam/mamle inpar BILKUL NAHI -> REJECT.
// 4. Sigandur bridge dedication (Gadkari, 14 Jul 2025, Sagara taluk) - Vijayendra only listed as
//    'present' -> dusre neta ke karyakram me maujoodgi -> REJECT.
// 5. Sep 2026 IANS report: Congress allegation that Vijayendra received Rs 17 cr bribe via RTGS in his
//    father's name -> bare political allegation, no named FIR/chargesheet/probe stage in established
//    media -> REJECT per negatives rules (shikayat without accused-column action = NAHI).
// 6. Feb 2025 BJP delegation memorandum seeking grants (Rs 15,000 cr Bengaluru, Rs 10 cr grants) ->
//    maang/prastav -> REJECT. Oct 2026 'Seva Sankalpa' foot march -> abhiyan -> REJECT.
// 7. Father's POCSO case (2024) -> parivar, BILKUL NAHI -> excluded.
// LEAD for future: if a GO-backed KLLADS Shikaripura sanction list naming Vijayendra appears, add it.
karnatakaWorks['b-y-vijayendra'] = [];

// REJECT-LOG for slug 'madhu-bangarappa' (Madhu Bangarappa, INC, Sorab; tenure 2023-2028)
// Record verified in src/data/karnataka.ts lines 3504-3533 (seat Sorab, party INC,
// tenure 2023-2028, mantri School Shiksha; pita late S. Bangarappa, purva CM).
// Kaaryakaal: May 2023+. Mantri-niyam: sirf Sorab seat ke kaam; shiksha-vibhag ke rajya faisle NAHI.
// Pita S. Bangarappa ke mamle inpar NAHI.
// RESULT: 0 works + 1 negative (researched 2026-10-19).
//
// REJECTED works leads (sab sources khole/parhe gaye; shanka = reject):
// R1. The Hindu, 3 Jul 2025 — "Cabinet clears projects for Sorab and Bhadravati taluks, says
//     Madhu Bangarappa": State Cabinet ne Sorab taluk ke liye kul Rs 168.8 crore ke projects
//     clear kiye (Dandavathi par barrage Rs 38.5 crore — 15 tank bharna; Dandavathi+Varada par
//     barrage aur bridge-cum-barrage Rs 54.7 crore; Gudavi me Varada par barrage Rs 75.60 crore —
//     32 tank). REJECT — ghoshna: cabinet ka faisla, Madhu ne sirf Shivamogga district
//     in-charge mantri ke roop me announce kiya; MLA ki vyaktigat shilanyas/lokarpan ya GO-backed
//     bhoomika dastavej nahi. RETRY-LEAD: in barrages ka shilanyas/lokarpan agar Madhu ne baad
//     me khud kiya ho to whitelisted outlet me check karo.
//     URL: https://www.thehindu.com/news/national/karnataka/cabinet-clears-projects-for-sorab-and-bhadravati-taluks-says-madhu-bangarappa/article69768605.ece
// R2. The Hindu, 16 Aug 2024 — Madhu Bangarappa ne Sorab taluk ke Kubatur ke government higher
//     primary school ko study materials, furniture waghera Rs 10 lakh ka daan diya (pita
//     S. Bangarappa ka school tha). REJECT — daan/niji kharch (vyaktigat daan, sarkari kaam nahi).
//     URL: https://www.thehindu.com/news/national/karnataka/school-education-minister-madhu-bangarappa-donates-study-materials-furniture-worth-10-lakh-to-govt-school-at-kubatur/article68533502.ece
// R3. The Hindu, Jan 2024 (Republic Day speech, Shivamogga) — Madhu ne kaha sarkar Sorab taluk me
//     Dr. B. R. Ambedkar ke naam par residential school banayegi (saath hi Sharavathi land-grant
//     aashwasan). REJECT — sirf ghoshna/ashwasan; koi sanction/lokarpan/shilanyas nahi.
//     URL: https://www.thehindu.com/news/national/karnataka/govt-will-resolve-land-grant-issue-madhu-bangarappa-assures-people-affected-by-sharavathi-project-in-shivamogga/article67779339.ece/amp/
// R4. The Hindu, 27 Nov 2024 — Madhu ne kaha sarkar Chandragutti (Sorab taluk, Renukamba Temple
//     sthal) ka vikas basic amenities ke saath karegi (tourism). REJECT — sirf iraada/ghoshna;
//     'would develop' matra; koi dastaveji nateeja nahi.
//     URL: https://www.thehindu.com/news/national/karnataka/madhu-bangarappa-favours-all-major-govt-offices-of-shivamogga-under-one-roof-in-the-city/article68919049.ece/amp/
// R5. The Hindu, 11 Dec 2025 — school infrastructure grants release (Hubballi Dharwad Central MLA
//     ke prashn ka jawab; shoes-socks, toilets, classrooms funds). REJECT — mantri-niyam: ye
//     shiksha-vibhag ka rajya-stariya faisla/jawab hai, Sorab seat ka kaam nahi.
//     URL: https://www.thehindu.com/news/national/karnataka/funds-released-for-development-of-school-infrastructure-madhu-bangarappa/article70384232.ece
// R6. The Hindu (mypresstoday listing) — "Minister Madhu Bangarappa visits Sorab, holds review
//     meeting". REJECT — sirf nirikshan/daura/review meeting.
// R7. IBC World News, 12 May 2026 — Hanchi gaon bus stand se Kuniteppa tak Rs 50 lakh ki
//     concrete sadak ka Madhu ne shilanyas kiya (Sorab me). REJECT — outlet whitelist me nahi
//     (IBC World News). RETRY-LEAD: live-browser se Deccan Herald/The Hindu/TOI me isi event
//     (12 May 2026) ki whitelisted coverage dhoondho — mil jaye to VALID shilanyas entry banegi.
//     URL: https://www.ibcworldnews.com/news/minister-madhu-bangarappa-urges-officials-to-speed-up-development-works
// R8. New Indian Express, 12 Oct 2025 — Madhu ne CM ka dhanyavaad kiya "sanctioning funds for
//     building roads in Sorab" par; Bhadra reservoir crest-gates badalne ka daawa apne prayason
//     se. REJECT — outlet whitelist me nahi (NIE); zila in-charge mantri ki capacity ka daawa,
//     Sorab seat ke MLA ke vyaktigat kaam ka dastavej nahi.
//     URL: https://www.newindianexpress.com/states/karnataka/2025/Oct/12/karnataka-to-recruit-18000-teachers-for-government-and-aided-schools-says-minister-madhu-bangarappa
// R9. Vartha Bharati (English), ~2025 — district review meeting: Gudavi, Yadagoppa, Dandavati,
//     Varada par bridge-cum-barrages Rs 160 crore ke kaam shuru karne ke nirdesh. REJECT — outlet
//     whitelist me nahi + nirikshan/nirdesh (koi post-event lokarpan/shilanyas nahi).
//     URL: https://english.varthabharati.in/karnataka/madhu-bangarappa-warns-forest-officials-against-forceful-evicting-farmers-citing-court-orders
// R10. Kundapur auditorium lokarpan (Daijiworld, Feb 2024, Nagooru school, Byndoor). REJECT —
//      outlet whitelist me nahi + seat ke bahar (Byndoor, Udupi), Sorab ka kaam nahi.
// R11. Pre-term coverage: 2018 LS bypoll campaign, 2009 Dandavati protest (Samajwadi Party ke
//      samay). REJECT — pre-term.
// R12. Pita S. Bangarappa (purva CM) ke mamle/yaadein — pita ke mamle inpar NAHI (rule).
// R13. The Hindu, 28 Nov 2024 — Shivamogga police ne Madhu Bangarappa par apattijanak social
//      media post karne wale vyakti ke khilaf case darj kiya. REJECT as negative — FIR aaropi
//      column me Madhu ka naam nahi; wo shikayat me peedit paksh hain. Negative nahi.
//      URL: https://www.thehindu.com/news/national/karnataka/police-book-case-against-man-posting-objectionable-content-about-madhu-bangarappa/article68923428.ece
// R14. Halafname ke 2 pending aapradhik mamle (background record, criminalCases 2) — REJECT as
//      negative: affidavit ke pending mamle akele negative NAHI (rule); Jun 2023+ me inka koi
//      nyayik vikas whitelisted media me nahi mila.
//
// NEGATIVES (accepted: 1):
// N1. Cheque-bounce conviction — NDTV (whitelisted), 30 Dec 2023. Pre-term mamla (2011 ka cheque)
//     me in-term nyayik vikas (30 Dec 2023 ki sajaa) — rule: "pre-term sirf jab in-term
//     development ho". MLA khud aaropi + doshi thahraya gaya; jawab disclosed.
karnatakaWorks['madhu-bangarappa'] = [
  {
    title: '2011 ke cheque-bounce mamle me Bengaluru ki Special Court (Jan Pratinidhi Mamle) ne Sorab MLA aur Shiksha Mantri Madhu Bangarappa ko doshi thahraya aur Rs 6.96 crore ka jurmana lagaya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'NDTV',
    sourceUrl: 'https://www.ndtv.com/india-news/karnataka-minister-madhu-bangarappa-convicted-in-cheque-bounce-case-fined-rs-6-96-crore-4764945',
    date: '2023-12-30',
    note: 'NDTV (syndicated feed) ki 30 December 2023 ki report ke mutabik, Bengaluru ki Special Court (Jan Pratinidhi Mamle) ke XLII Additional Chief Metropolitan Magistrate Judge Preeth J ne Akash Audio-Video Pvt Ltd ko pehla aur uske director Madhu Bangarappa ko doosra aaropi batate hue dono ko Negotiable Instruments Act ki Section 138 ke tahat doshi thahraya aur Rs 6,96,70,000 ka jurmana lagaya — jurmana ada na karne par Bangarappa ko 6 mahine ki sadharan kaid ka aadesh; jurmane me se Rs 6,96,60,000 shikayatkarta Rajesh Exports ko muavze ke roop me aur Rs 10,000 sarkar ko dena tha. Shikayat ke anusaar Akash Audio-Video ne Rajesh Exports se Rs 6 crore ka inter-corporate deposit liya tha aur Bangarappa ne Rs 6.6 crore ka cheque jaari kiya tha jo 27 November 2011 ko bounce ho gaya; Rajesh Exports 2012 me court gaya aur mamla 2022 me special court transfer hua. Bangarappa ki case radd karane ki High Court yachika 2022 me khariz ho chuki thi, aur 26 December 2023 ko baaki Rs 6.10 crore 30 January 2024 tak chukane ka unka vachanpatra special court ne yeh kehkar naamanzur kar diya ki aaropi adalat ke samaksh baar-baar vachanpatra dene ki aadat rakhte hain lekin unka paalan nahi karte. Court ne mamle ko kheenche jaane ke liye unke ravaiye ki naaraazgi bhi vyakt ki. Madhu Bangarappa ka jawab: ANI ke anusaar (Rediff/Devdiscourse ke zariye) unhone Hubli me kaha ki ye ek settled matter tha aur BJP neta jaanboojhkar 26 December ke purane aadesh ko uchhaal rahe the. Stage: conviction (in-term nyayik vikas, 30 Dec 2023). Pre-term mamla lekin in-term vikas — isiliye negative me darj; Sorab seat ke vikas-karyon se iska sambandh nahi.',
    period: '2023-2028',
  },
];

// Worker: ka11 — Sagar / Belur Gopalkrishna (INC) — 19 Oct 2026
// Record check: slug 'belur-gopalkrishna', constituency 'Sagar' (sagar), party INC,
// tenure 2023-2028. Karyakaal: May 2023+. Pehchan pakki: 2023 me Sagar se
// 88,988 vote lekar jeete; Kagodu Thimmappa ke bhatije; KSFIC chairman 26 Jan 2024 se.
// RESULT: koi whitelisted-source valid works entry nahi mili — array khaali.
karnatakaWorks['belur-gopalkrishna'] = [];

// REJECT-LOG
// 1. Sagar Maha Ganapati mandir ka shilanyas (pehla charan Rs 50 lakh + mukhya dwar/baramada
//    Rs 15 lakh, kul Rs 65 lakh) - sirf publicnext.com (aggregator, whitelist me nahi) ne
//    cover kiya; kisi whitelisted outlet me is shilanyas ki khabar nahi mili. Lead ke roop
//    me rakha, entry nahi.
// 2. Sagar Sandalwood Complex me Rs 65 lakh ke kaam (canteen Rs 8 lakh + school room Rs 35 lakh)
//    aur 109 makanon ki baat - MLA dwara "manjoori" ki ghoshna/review meeting ki khabar,
//    koi vyaktigat lokarpan/shilanyas nahi; aur srot publicnext (aggregator). Dono wajah se reject.
// 3. Nehru Maidan (Sagar) me stage/toilet/dressing room ke liye Rs 40 lakh ki manjoori ka dawa -
//    sports meet ke udghatan ke samay ghoshna; manjoori-dawa, bhautik kaam ka lokarpan nahi;
//    srot bhi publicnext. Reject.
// 4. Taluk me Pragatipatha yojana ke tahat 30 km sadak (Rs 22 crore), 253 footbridges ki manjoori,
//    bus stand Rs 3.50 crore, Sakhi kendra Rs 50 lakh, doctor-nurse hostel Rs 1.20 crore ka dawa -
//    adhikari-baithak me ghoshna, koi lokarpan nahi; srot publicnext. Reject.
// 5. Sharavathi nadi ka paani Bengaluru ko nahi jayega (The Hindu, 21 Oct 2024) - sarkar ko
//    di gayi rai/aashwasan, maang/prastav category; koi bhautik sarkari sanrachna nahi. Reject.
// 6. Sharavathi Pumped Storage Project ko samarthan (TOI, Oct 2025) - pariyojna ke liye maang/samarthan,
//    MLA ki vyaktigat bhoomika me koi lokarpan/shilanyas nahi. Reject.
// 7. Sigandur Chowdeshwari bridge (Rs 473 crore) ka vivaad - udghatan Gadkari ne kiya, state sarkar
//    ke pratinidhi shamil nahi hue (The Hindu/TOI, Jul 2025); MLA ne khud virodh kiya, koi bhoomika
//    nahi. Reject.
// 8. Cabinet berth maang (Deccan Herald/The Hindu, Jun 2026) aur Aug 2026 me cabinet vistar se
//    chootne par isteefe ki ghoshna - raajnaitik vishay, vikas-kaam nahi. Reject.
// 9. Housing allotment ghotaale par mantri ke isteefe ki maang (The Hindu, 23 Jun 2025) - maang,
//    koi kaam nahi. Reject.
// 10. Well-sealing vivaad (Economic Times/TOI, 8 Oct 2026) - MLA ke ghar ke saamne kuwa band karne
//     ke aarop, lekin koi FIR/chargesheet/janch/nyayik vikas report nahi hui; MLA ne dastavez
//     dikhakar jawab diya. NEGATIVES ke criteria (FIR/chargesheet/janch ya in-term nyayik vikas)
//     poore nahi hue, isliye negative entry nahi.
// 11. KSFIC chairman (26 Jan 2024) ke roop me koi khaas kaam - whitelisted media me koi reporting
//     nahi mili; sirf regional aggregators par chairman hone ka zikr. Reject.
// 12. The Hindu, Deccan Herald, Indian Express, TOI, NDTV me "inaugurated/foundation stone/lokarpan"
//     angles se lagbhag 8 alag khojen chalayin - inke naam se juda koi sadak/paani/school/aspataal
//     ka vyaktigat lokarpan ya shilanyas whitelisted srot me nahi mila. Profile imaandari se khaali.

// --- Tumakuru ---

// c-b-suresh-babu (Chikkanayakanhalli, JD(S); 4-term MLA; JD(S) legislature party leader 2024) — REJECT-LOG: May 2023+ ke daur me whitelist (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, Deccan Herald, PTI) me Chikkanayakanhalli seat ke koi bhi dastaveji vyaktigat vikas-kaam (lokarpan/shilanyas/GO-backed swikriti/itemized sanction list) C. B. Suresh Babu ke naam par nahi mile. REJECT: (1) JD(S) legislature party leader appointment (Jul 2024, PTI via ThePrint/deccan etc.) — raajneetik pad, kaam nahi, REJECT. (2) Vidhan Sabha Feb 2024 me Upper Bhadra project par prashn (daijiworld/indianeconomicobserver) — maang/prastav; Dy CM ka jawab me Rs 856cr approvals ka ullekh purani swikritiyan hain, koi dastavezi nateeja nahi, REJECT. (3) Vidhan Sabha me Chikkanayakanahalli me sharab ki illegal dukaano par prashn (TOI, Dec 2025) — maang; mantri ka jawab sirf raids/491 cases ki jankari, nateeja nahi, REJECT. (4) Sembcorp 60KWp rooftop solar inauguration at Sri Sathya Sai Karunyaniketanam Gurukul Tumakuru (Jul 11, 2024 press release) — CSR samaroh me maujoodgi, dusre sangathan ka karyakram, REJECT. (5) The Hindu May 2018: 'sarkar ne 62 shauchalay units banaye, MLA ne aur 40 banaye' — pre-term + dawa-form me, in-term vikas nahi, REJECT. (6) PIB: V. Somanna dwara Tumakuru region me 15 ROBs/RUBs, Rs 125cr — kendriya mantri/MP ka kaam; MLA ki vyaktigat bhoomika nahi, REJECT. (7) Indian Express Jul 2025: Upa Lokayukta dwara Chikkanayakanahalli taluk me 300 acre van bhoomi par 80,000 paudhon ka abhiyan — MLA ka kaam nahi, REJECT. (8) South First ground report (pre-poll, May 2023): nagarikon ke 'past works' ke bayan — in-term nahi, generic, REJECT. (9) The Hindu HPV vaccination drive Chikkanayakanahalli taluk (GO, Jul 2025) — sarkari yojana, MLA ki vyaktigat bhoomika nahi, REJECT. KLLADS ka neta-war istemal kisi whitelist source me nahi mila — fund joda nahi. NEGATIVE (valid, in-term): Times of India + The Hindu, 4-5 Nov 2024 — Lokayukta SIT pramukh ADGP M. Chandrasekhar ki shikayat par Bengaluru ke Sanjay Nagar police station me H. D. Kumaraswamy, Nikhil Kumaraswamy aur C. B. Suresh Babu ke khilaf BNS dhara 224 (threat of injury to public servant) ke tahat FIR darj. MLA khud teesra aaropi + 'Chikkanayakanahalli MLA' ke roop me pehchan + jawab disclosed (Kumaraswamy: 'When did I threaten him? ... we will face it in court') + stage-accurate (FIR-stage; chargesheet whitelist me darj nahi mili).
karnatakaWorks['c-b-suresh-babu'] = [
  {
    title: 'Bengaluru ke Sanjay Nagar police station me Lokayukta SIT pramukh ADGP M. Chandrasekhar ko dhamkane ke aarop me Chikkanayakanahalli MLA C. B. Suresh Babu ke khilaf 4 Nov 2024 ko BNS ki dhara 224 ke tahat FIR darj hui.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Times of India',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/bengaluru/when-did-i-threaten-him-hd-kumaraswamy-responds-after-karnataka-police-book-him-for-threatening-officer/articleshow/114972424.cms',
    date: '2024-11-04',
    note: 'TOI ne likha ki FIR Monday shaam ko Sanjay Nagar police station, Bengaluru me darj hui (5 Nov 2024 ki report me ‘Monday evening’ — 4 Nov 2024 se inferred). Shikayat 11 Oct 2024 ko ADGP M. Chandrasekhar (Lokayukta SIT pramukh, jo illegal mining case crime no. 16/2024 me H. D. Kumaraswamy ke khilaf janch kar rahe the) ne di thi. Aaroop: 28-29 Sep 2024 ki press conferences me jhoothe aarop aur dhamki; Suresh Babu ne Chandrasekhar ke khilaf jhoothe aarop lagaye, Chief Secretary ko karwai ki maang wala patra likha aur use social media par share kiya, aur dhamki di. Jawab: Kumaraswamy ne kaha ‘When did I threaten him? He has filed a complaint, let him, we will face it in court… It is all being done politically by the state govt and him.’ The Hindu (5 Nov 2024, premium) ne bhi FIR ki tasdeeq ki: ‘Union Minister H.D. Kumaraswamy, his son Nikhil Kumaraswamy and JD(S) leader Suresh Babu’ ke khilaf BNS 224. Chargesheet ya aage ka nyayik vikas whitelist media me darj nahi mila — FIR stage par stage-accurate.',
    period: '2023-2028',
  },
];

// Karnataka/Tiptur batch fragment (researched 2026-10-19) — DO NOT export; appended to karnataka.ts
// MLA: K. Shadakshari (INC), Tiptur, term 2023-2028. Record confirmed in src/data/karnataka.ts.

// REJECT-LOG (k-shadakshari):
// 1. Tiptur Multi-Village Drinking Water Supply Project (Rs 430 crore+): foundation stone 2023 me PM Narendra Modi ne Tumakuru me rakha (lokmattimes, PMO statement se) — Shadakshari May 2023 se pehle MLA nahi the, unki vyaktigat bhoomika nahi — dusre neta ka karyakram, REJECT.
// 2. SKDRDP Tiptur Gandhi Smriti and Navajeevana Member Felicitation Program (skdrdpindia.org, Oct 2025): Union Minister V. Somanna aur MLA Shadakshari ne inauguration lead kiya — SKDRDP ka CSR-type samaroH (lake rejuvenation/scholarship listings), sarakari sanrachna ka lokarpan/shilanyas nahi; presence ceremonial — CSR samaroh rule se REJECT.
// 3. Rotary Club of Tiptur clock installation (Rotary Spectrum bulletin PDF): Rotary CSR initiative, DG Rtn. Elizabeth Cherian ne inaugurate kiya — MLA sirf presence me the; CSR samaroh + dusre ke karyakram me maujoodgi, REJECT.
// 4. Yeshasvini Cooperative Trust doctor appointment row (Indian Express, Oct 2025): Shadakshari ne Dr Sridhar (Kumar Hospital, Tiptur) ka naam trustee ke liye recommend kiya; RSS link par appointment wapas hui, MLA ne regret express kiya. MLA par koi FIR/chargesheet/janch nahi; khud aaropi nahi; sawal-bhi-nahi — NEGATIVE rule ke tahat entry nahi.
// 5. 2015 land-grab padayatra complaint (The Hindu, Jul 2015): farmers ne MLA ke BHAI aur parivar par jamin-hadap ka aarop lagaya — parivar ka mamla, pre-term, FIR/nyayik vikas nahi — parivar + pre-term rule se REJECT.
// 6. Delhi hospital visit story (Economic Times, Jun 2026): CM D K Shivakumar ne bimar MLA Shadakshari ko Delhi hospital me dekha — personal health news, vikas-kaam nahi, REJECT.
// 7. B C Nagesh funeral report (Deccan Herald, Aug 2026): Shadakshari ne national flag Nagesh ki patni ko saunpa — ceremonial maujoodgi, REJECT.
// 8. Lingayat representation / cabinet lobbying stories (The Hindu May 2026, New Indian Express Jun 2026): minister-berth ki maang — maang/prastav category, REJECT.
// 9. 403-type blocks: koi whitelist URL 403 nahi diya is research me; koi retry lead nahi bacha.
// 10. Vidhansabha record (The Hindu, Corridors of Power): Assembly me Shadakshari ne school-fund ki complaint uthai — maang ka dastaveji nateeja (swikriti) nahi mila, REJECT.
// LEAD (future): Kannada media (Prajavani/Vijayakarnataka/Udayavani) me Tiptur Kshetra ke road/water/school inaugurations ki sambhavna — English whitelist me coverage abhi tak nahi mili; 74+ umr ke MLA June 2026 me lambe samay se bimar (Delhi hospital) rahe, isliye low-profile plausible hai.
karnatakaWorks['k-shadakshari'] = [];

// m-t-krishnappa (M T Krishnappa, Turuvekere, JD(S); karyakaal 2023-2028) — worker report 2026-10-19
// PEHCHAN: slug 'm-t-krishnappa', name 'M T Krishnappa', party Janata Dal (Secular), post MLA, seat Turuvekere (src/data/karnataka.ts lines 3939-3969). S/o Late M Thimmaiah — Turuvekere ke purva BJP netao se alag pehchan pakki. 2023 me 68,163 vote lekar jeete; runner-up Masala Jayaram (BJP, 58,240 vote).
// REJECT-LOG:
// 1. Ration card 'Aahaar Adalat' udghatan (publicnext.com, 2025) — non-whitelist outlet + sarkari abhiyan ka shubharambh -> REJECT.
// 2. Thiruvekere me sarkari karmchariyon ke June-July transfers par rok ki maang (newskarnataka.com, 6 Aug 2024) — maang/daura nahi, koi dastaveji nateeja nahi + non-whitelist -> REJECT.
// 3. Turuvekere me 25,000 cattle ka free insurance cover (Asianet Newsable, 22 Sep 2026) — MLA sirf karyakram me vaktavy de rahe the; scheme milk society ki, vyaktigat sanrachna/bhoomika nahi -> REJECT.
// 4. SIR forms door-to-door distribution ki maang (ANI, 6 Jul 2026; lokmattimes/latestly etc.) — maang, koi kaam nahi -> REJECT.
// 5. Myneta affidavit ke 8 mamle (IPC 353/504/506/34/269, DM Act) — pre-term affidavit cases; May 2023+ me koi nyayik vikas whitelist media me nahi -> REJECT (affidavit cases alone = NAHI).
// 6. CRL.P 7702/2023 (Karnataka HC, 6 Oct 2023) — Krishnappa M.T. S/o Thimmaiah ki khud ki quash petition; pre-term FIR ka bachav-artha filing, aarop me in-term pragati nahi; outcome unverified -> REJECT (lead: outcome verify kiya ja sakta hai).
// 7. CRL.P 923/2017 (Karnataka HC, 12 Jun 2020) — Crime No.18/2017 quash (IPC 509/504/353); pre-term -> REJECT.
// 8. Whitelist (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, Deccan Herald, PTI) me May 2023+ ka inke naam ka koi bhi vyaktigat lokarpan/shilanyas/GO-backed swikriti/Sadak|Paani|School|Aspataal kaam nahi mila — 6 search rounds (works, inauguration/foundation, site-restricted DH/TOI/NIE, KLLADS/sanction, bhoomi-pooja) khaali.
// 9. KLLADS neta-war kharch ka public record uplabdh nahi (srot kahe tabhi jodein) -> koi entry nahi.
// NEGATIVE (valid, in-term): The Hindu (1 Jun 2025) — Gubbi police ne 31 May 2025 ko D Rampura (Gubbi taluk) me Hemavati Express Link Canal ke virodh me hue hinsak pradarshan ke baad 13 FIR me "Turuvekere JD(S) MLA M. T. Krishnappa" ka naam darj kiya; 100 se zyada log aaropi — nishedhagyao ka ullanghan, highway block, tyre jalana, patharbaazi, sarkari sampatti ko nuksan; ek police inspector ghayal. MLA khud aaropi + seat-pehchan + in-term FIR + jawab disclosed (kisi resolution ki khabar nahi mili) + stage-accurate -> negative entry darj.
// QA-DROP (coordinator): worker ne The Hindu page (31 May 2025 Hemavati virodh, 13 FIR) se Krishnappa ko aaropi bataya tha — lekin page browser.open par 403 deta hai (worker aur coordinator dono ne verify kiya); facts sirf search snippets se the. Khul na sakne wala page source nahi ho sakta — entry DROPPED. RETRY-LEAD: whitelisted outlet ka khulne-wala page mile to restore.
karnatakaWorks['m-t-krishnappa'] = [];

// REJECT-LOG — H. D. Ranganath (Kunigal, INC), period 2023-2028
// Record pakki: src/data/karnataka.ts slug 'h-d-ranganath', Dr. H D Ranganath, INC, MLA Kunigal (2023-2028).
// Whitelisted media khoje gaye: The Hindu, Indian Express, Hindustan Times, New Indian Express (TOI/NIE
// coverage bhi scan hua). Niche ke leads khole-padhe gaye aur sab REJECT hue:
//
// 1. Hemavathi Express Link Canal (work resumed 31 May 2025, GO 19 Oct 2024, first phase ~Rs 615 crore,
//    3.01 TMC Kunigal) — The Hindu/Indian Express/HT/Hindustan Times: REJECT. Pariyojna sarkari hai;
//    shilanyas DyCM D. K. Shivakumar ne 2024 LS chunav se pehle rakha tha; Ranganath ki bhoomika sirf
//    media me wakalat/bayaan (May-Jun 2025) — koi dastaveji Vidhansabha-maang-nateeja ya vyaktigat
//    lokarpan/shilanyas nahi. Credit cap bhi lagu nahi hota kyunki unki maang ka nateeja dastavej me nahi.
// 2. Kunigal Stud Farm integrated township — The Hindu: REJECT, sirf unka prastav; feasibility abhi baki.
// 3. Kisanon se shaadi karne wali mahilaon ko special allowance ki maang — PTI (Feb 2026): REJECT, maang/prastav.
// 4. Sahkari rinon ko lekar mantri ki aalochana (budget bhashan, Mar 2025) — The Hindu: REJECT, bhashan; nateeja nahi.
// 5. Free knee surgery (27 Jun 2023, IANS/ap7am): REJECT — daan/rahat; aur ap7am whitelist me nahi.
// 6. Mansik rogi ki safai (Jun 2025) — New Indian Express: REJECT — daan/rahat, koi bhautik sarkari sanrachna nahi.
// 7. Kannada Bhavana lokarpan / Rs 150 crore shilanyas (Sep 2023) — New Indian Express: REJECT, 'He' CM
//    Siddaramaiah the (Madhugiri), Ranganath se sambandh nahi.
// 8. Kunigal engineering college ka aarambh (Sep 2026) — New Indian Express: REJECT, ghoshna Deputy CM
//    Parameshwara ne ki; Ranganath sirf site taiyaar karne ko kahaa gaya.
// NEGATIVES: KPCC show-cause notice (leadership-change bayaan, The Hindu) — party action alone, REJECT.
// Koi FIR/chargesheet/janch/judicial vikas established media me nahi mila.
// NATEEJA: works = [] (khaali).
karnatakaWorks['h-d-ranganath'] = [];

// REJECT-LOG: G. B. Jyothi Ganesh (BJP, Tumkur City) — works: 0 accepted, 0 negatives
// Research 2026-10-19 (kaaryakaal May 2023+). Record verified in src/data/karnataka.ts:
// slug 'g-b-jyothi-ganesh', Tumkur City, BJP, 2023-2028.
// REJECTED leads (sab sources khole/parhe gaye; shanka = reject):
// 1. EPFO Regional Office building, Tumkur — inaugurated (virtual) by MoS Rameshwar Teli, 1 Nov 2023;
//    MLA sirf 'present at site' the. Dusre neta ke karyakram me maujoodgi — REJECT.
//    (eduindex.org / indiaeducationdiary.in — mirror of PIB press note)
// 2. Bheemasandra Limited Height Subway (LC No. 43) — inaugurated by Union MoS V. Somanna,
//    MLA sirf maujood the. Dusre neta ke karyakram me maujoodgi — REJECT. (freepressjournal.in)
// 3. Tumakuru Railway Station redevelopment + ABSS foundation stone (PIB) — MoS Somanna ka
//    karyakram, MLA attendee. REJECT. (pib.gov.in)
// 4. Thimmarajanahalli railway connectivity inspection — MoS Somanna inspection, MLA attendee. REJECT.
// 5. 'Jnanasiri' campus dedication, Tumakuru — Governor/Ministers ka karyakram, MLA attendee. REJECT.
// 6. Greater Tumakuru Rs 645 crore project launch — district in-charge minister ka karyakram,
//    MLA attendee. Pariyojna bina vyaktigat bhoomika — REJECT. (publicnext.com)
// 7. ULB budget allocation speech in Assembly (The Hindu, 20 Mar 2025) — budget par maang/speech,
//    dastaveji nateeja nahi — REJECT. (whitelisted lekin kaam nahi)
// 8. Dibbur 64-room slum housing + Mahatma Gandhi Nagar Vikas Yojana remarks — bhashan/speech,
//    swikriti/shilanyas ka dastavej nahi — REJECT. (publicnext.com)
// 9. Hemavathi Express Link Canal protest (The Hindu, Indian Express, PTI, 31 May 2025) —
//    protest/agitation, vyaktigat vikas kaam nahi — REJECT. (whitelisted lekin virodh-pradarshan)
// 10. Veerashaiva-Lingayat meet clash (Oct 2026) — election campaign appeal/event — REJECT. (ANI via asianetnews)
// 11. SIR electoral-roll remarks (ANI, Jul 2025) — press statement, kaam nahi — REJECT.
// 12. SKDRDP Shuddhaganga pure-water unit inauguration, Mariyammanagara — NGO (SKDRDP) ka
//     event + non-whitelist source (skdrdpindia.org) — CSR/NGO samaroh, REJECT.
// 13. Metro Cash & Carry store inauguration (2020) — pre-term + private business — REJECT.
// 14. Ganesha immersion procession participation (Deccan Herald, Sep 2026) — event maujoodgi — REJECT.
// 15. CIT Gubbi Teachers Day 2021 chief-guest — pre-term — REJECT.
// NEGATIVES: koi established-media negative nahi. coastaldigest.com wali 'MLA Ganesh' attempt-to-murder
// khabar KAMPLI ke Congress MLA (J. N. Ganesh) ki hai — ye seat/party se mel nahi khati, isliye
// discard. Inke affidavit me criminalCases 0 hai. Election-petition ya pre-term ke in-term vikas
// ki khabar nahi mili.
// NOTE: Opposition MLA (BJP, Congress-ruled state) — whitelisted media me vyaktigat lokarpan/shilanyas
// ki koi citable khabar nahi mili; KLLADS neta-war public record uplabdh nahi.
karnatakaWorks['g-b-jyothi-ganesh'] = [];

// b-suresh-gowda (Tumkur Rural, BJP, MLA May 2023+; pehchan pakki: karnataka.ts slug 'b-suresh-gowda', Tumkur Rural, BJP, 2023 me 89,191 vote, runner-up D C Gowri Shankar JD(S))
// REJECT-LOG — works: 0 accepted (whitelist me May 2023+ ka koi bhi vyaktigat lokarpan/shilanyas/GO-backed swikriti inke naam par nahi mila):
// (1) Yellapur Govt Higher Primary School shilanyas (publicnext, 12 Jan 2026) — REJECT: non-whitelist chhota portal.
// (2) JJM shilanyas Nagavalli/Mayammanapalya/Sasalayyanapalya (publicnext, Nov 2025) — REJECT: non-whitelist.
// (3) 3 road overbridges shilanyas (The Hindu, 10 Apr 2025) — REJECT: Union Mantri V. Somanna ka karyakram; Gowda sirf maujood aur dhanyavad — dusre neta ke karyakram me maujoodgi.
// (4) Greater Tumakuru Rs 645cr launch (publicnext, 8 Nov 2025) — REJECT: non-whitelist + Gowda sirf maujood.
// (5) Jnanasiri campus dedication (publicnext, 8 Nov 2025) — REJECT: non-whitelist + maujoodgi.
// (6) Midday meal call-attention notice (The Hindu, 28 Jan 2026) — REJECT: maang; mantri Madhu Bangarappa ka ashwasan matra ('strict action if complaints'), koi dastaveji sanction/nateeja nahi.
// (7) 14 panchayats ka BMC merger prastav drop (publicnext, Jan 2026) — REJECT: non-whitelist + prastav girna, vyaktigat bhoomika maang tak.
// (8) Garbage disposal par panchayat officials ke khilaf karyavahi ki maang (publicnext, 20 Dec 2025) — REJECT: non-whitelist + sirf maang.
// (9) Nagavalli school ko model school banane ka wada (publicnext) — REJECT: non-whitelist + ghoshna.
// (10) Amanikere ropeway/zipline (publicnext, Dec 2025) — REJECT: non-whitelist + Smart City pariyojna, Gowda ki bhoomika nahi.
// (11) Honnudike Teppotsava me saree vitaran (publicnext) — REJECT: non-whitelist + dharmik/daan.
// (12) Beti ka temple me SI se vivad/FIR (Deccan Herald, Indian Express, NDTV, TOI, Aug 2025) — REJECT: parivar rule (aaropi beti, MLA khud nahi).
// (13) Cheluvarayaswamy maan-hani case (The Hindu/IE, Feb 2025) — REJECT: NAMESAKE MIX — aaropi Nagamangala ka JD(S) ummidwar Suresh Gowda hai, Tumkur Rural ke BJP MLA B Suresh Gowda nahi.
// (14) Lokayukta PC Act case me 30 Jan 2024 ko acquittal (indiankanoon, Spl.CC 1342/2021) — REJECT as negative: in-term nyayik vikas (acquittal) hai lekin koi whitelist media coverage nahi mila.
// (15) Tumakuru Town Police CC 30764/21 acquittal (indiankanoon, 15 Feb 2023) — REJECT: pre-term faisla.
// (16) KLLADS: karnataka.ts me fund record darj hai; neta-war itemized sifarish ka koi itemized source nahi mila — fund joda nahi.
// NEGATIVES: 1 valid (in-term FIR, established media, MLA khud aaropi + seat-pehchan, jawab disclosed, stage-accurate) — Hemavati Express Link Canal virodh, May 2025.
karnatakaWorks['b-suresh-gowda'] = [
  {
    title: 'Tumakuru police ne Hemavati Express Link Canal virodh pradarshan ke silsile me Tumkur Rural MLA B Suresh Gowda samet 100 se zyada logon par 13 FIR darj ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan Times',
    sourceUrl: 'https://www.hindustantimes.com/india-news/home-minister-visits-tumakuru-after-hemavathi-protest-101748891423779.html',
    date: '2025-06-03',
    note: 'HT (3 June 2025) ke anusar, 31 May 2025 ke Hemavati Link Canal virodh ke baad police ne 13 FIR darj ki jinme ‘Tumakuru Rural BJP MLA B Suresh Gowda’ ka naam bhi shamil hai; koi giraftari nahi hui aur Grih Mantri G. Parameshwara ne kaha ki sarkar in police cases ki sameeksha karegi. Virodhiyon ne prohibitory orders ka ullanghan kiya, tyres jalaye, traffic roka aur upkaran (JCB sahit) ko nuksan pahunchaya; ek inspector (Lohit) ghayal hua. Is HT article me MLA ka apna jawab darj nahi hai. (Tithi HT article ki hai — 3 June 2025; FIRs 31 May ke virodh ke baad darj hui.)',
    period: '2023-2028',
  },
];

// REJECT-LOG for slug 'g-parameshwara' (Dr. G. Parameshwara, INC, Koratagere (SC); MLA 2023-2028; Dy CM 3 Jun 2026 se, Revenue + Sports; pehle Grih Mantri)
// Record verified in src/data/karnataka.ts lines 4062-4084 (seat Koratagere (SC), party INC, tenure 2023-2028).
// Research 2026-10-19: English web searches across whitelist outlets (The Hindu, Indian Express, Hindustan Times, NDTV, India Today, Times of India, Deccan Herald, PTI/UNI wire) for Parameshwara + Koratagere + inauguration/foundation-stone/development works, 2023-2026, plus ED/Ranya Rao negative angle.
// RESULTS: 0 works entries, 0 negatives. SAKHT Dy CM RULE lagoo hua — sirf Koratagere seat ke vyaktigat MLA-kaam; Grih vibhag ke rajya faisle, district in-charge kaarye, party/rajya ki ghoshnayen SAB BAHAR.
// 1. Dr B R Ambedkar Residential School inauguration, Kolala, Koratagere Taluk (PTI, Dec 2022) — pre-term (May 2023 se pehle); report me Home Minister Araga Jnanendra bhi maujood; vyaktigat bhoomika unclear — REJECT (pre-term + dusre neta ka karyakram).
// 2. Hemavathi drinking water project (Koratagere + Madhugiri constituencies ko paani) — UNI/PTI 2 Jun 2025: Parameshwara ne project ka bachav Home Minister ke roop me kiya; project Irrigation Department ka hai; MLA-level ka koi dastaveji shilanyas/lokarpan nahi — REJECT (rajya faisla + minister bhoomika).
// 3. Rs 645 crore Tumakuru city projects launch (publicnext) — district in-charge minister ke roop me kiye; projects Tumakuru city me, Koratagere seat me nahi — REJECT (seat ke bahar + pad-karye).
// 4. Greater Tumakuru/Greater Bengaluru proposal, Tumakuru metro proposal, Rs 5 crore welcome arch (Hindustan Times quoting Deccan Herald) — sab proposals/ghoshnayen, Tumakuru city-level, district in-charge bhoomika — REJECT (ghoshna + pad-karye).
// 5. Yettinahole Byragondlu dam compensation issue (New Indian Express, 22 Jun 2025) — Dy CM Shivakumar ne unhe Koratagere farmers ki compensation suljhane ki zimmedari di; ye minister-level karya hai, seat ka bhautik vikas-kaam nahi — REJECT (pad-karye).
// 6. Koratagere taluk drinking water scheme par MoS V Somanna se charcha (New Indian Express, 10 Jun 2025) — sirf maang/charcha, koi dastaveji nateeja nahi — REJECT (maang/prastav).
// 7. Pavagada Rs 2,529 crore multi-village water project inauguration (21 Jul 2025, projxnews) — CM ne kiya, wo Home Minister ke roop me sirf maujood the; project Pavagada/Chitradurga/Vijayanagara me hai, Koratagere seat me nahi — REJECT (dusre neta ka karyakram + seat ke bahar).
// 8. Ground reports (South First, Economic Times) me 2018-2023 ke Koratagere kaamon ke aam zikr (4 residential schools, sadak, swasthya) — pre-term claims, itemized/in-term nahi — REJECT (pre-term + sirf dawa).
// 9. 2026 ke 3rd-anniversary 'Tumakuru Mega Conference' ki taiyari (indiasnews/indianeconomicobserver, May 2026) — district in-charge bhoomika me karyakram ki taiyari, Koratagere seat ka vyaktigat kaam nahi — REJECT (pad-karye).
// 10. Tumakuru Metro DPR (moneycontrol, 23 May 2026) — unhone Home Minister/Dy CM ke roop me DPR placement ki baat kahi; rajya-level project, seat kaam nahi — REJECT.
// NEGATIVE ANGLE (searched, REJECTED): Ranya Rao gold-smuggling case — ED ne 21 May 2025 ko unke trust ke institutions (Sri Siddhartha Medical College, SSIT, Tumakuru) par PMLA raids kiye; trust par Rs 40 lakh credit-card payment ka shaq. LEKIN: Feb 2026 ED prosecution complaint me accused sirf Ranya Rao, Tarun Konduru Raju, Sahil Sakariya Jain hain — Parameshwara ka naam kisi FIR/chargesheet me accused ke roop me nahi aya; unhone poora sahyog diya aur khud 'wedding gift' ki baat batayi (PTI via NDTV/LatestLY). Rule: 'Shikayat-but-accused-column-unnamed = NAHI' — isliye negative entry NAHI rakhi.
// Affidavit ke 3 criminal cases — 'affidavit cases alone = NAHI' — negative nahi.
// KLLADS ka neta-war istemal kisi whitelist source me nahi mila — fund joda nahi.
// LEAD for future: agar Koratagere seat ke liye GO-backed KLLADS/Dy CM-nidhi swikriti suchi unke naam ke saath mile, to entry banegi.
karnatakaWorks['g-parameshwara'] = [];

// REJECT-LOG — ka11 worker s-r-srinivas-vasu (Gubbi, INC)
// Pehchan pakki: src/data/karnataka.ts slug 's-r-srinivas-vasu', name 'S R Srinivas (Vasu)', Gubbi, INC, 5th term, May 2023+.
//
// Sources padhe aur REJECT kiye gaye:
// 1. Deccan Herald 'Gubbi residents air a litany of woes' (05-09-2026) — padha; MLA S R Srinivas sirf sadak-karyon ki kharab quality par narazgi
//    jataate hain aur Gubbi town stadium ke liye zameen-transfer + Rs 5-10 crore sanction ki MAANG karte hain; koi manjur-shuda lokarpan/shilanyas
//    ya fund-manzoori darj nahi. MAANG hone se REJECT.
// 2. PIB/FPj — Kallipalya Gate (Gubbi) RUB ka shilanyas Union MoS V. Somanna ne kiya; MLA sirf karyakram me MAUJOOD tha.
//    Dusre neta ke karyakram me maujoodgi hone se REJECT.
// 3. PIB — D. Rampura/Billepalya/Bandihalli RUB (Gubbi area, Apr 2025 / Jun 2026) — sab MoS Railways V. Somanna ke karyakram;
//    MLA ki vyaktigat bhoomika darj nahi. REJECT.
// 4. The Hindu — Hemavathi Express Link Canal virodh; MLA ne canal ka VIRODH jataaya (not joined protest) — virodh-bayaan
//    koi vyaktigat karya/lokarpan nahi. REJECT.
// 5. LatestLY/ANI — Vrishabhavati lift irrigation shilanyas Nelamangala me CM ne kiya; 'Congress MLA Srinivas' ki taareef
//    Nelamangala ke karyakram me thi (seat ke bahar), MLA ka khud ka lokarpan nahi. REJECT.
// 6. business-standard/ETAuto — KSRTC fare hike bayan (Jul 2024) — KSRTC Chairman ki haisiyat se bayan; Gubbi seat ka
//    bhautik sarkari sanrachna-works nahi, Vidhansabha-maang ka dastaveji nateeja nahi. REJECT.
// 7. kannadanewsnow — KSRTC Chairman se istifa-ghoshna — non-whitelisted chhota portal + KSRTC state role, seat-work nahi. REJECT.
// 8. Star of Mysore 'MLA Vasu' coverage — ye MYSURU Chamaraja ke MLA Vasu hain, Gubbi ke S R Srinivas (Vasu) nahi. Pehchan mismatch. REJECT.
// 9. NEGATIVES — halafname me 1 aapradhik mamla darj hai, lekin established media me MLA KHUD aaropi ho aisa May 2023+ ka koi
//    FIR/chargesheet/giraftari/janch ya nyayik vikas nahi mila. Affidavit cases alone se REJECT. 2005 ka Congress-neta par humle ka
//    purana case aur 2022 Rajya Sabha cross-voting aarop (Revanna ka bayan, koi FIR/chargesheet nahi) — in-term nyayik vikas ke bina REJECT.
// 10. TOI election-result pages, Wikipedia, oneindia profile, PRS mlatrack — sirf election bio/attendance, works nahi. REJECT.
//
// Nateeja: whitelist-eligible established media me in-term koi valid karya-entry nahi mili. = [];
karnatakaWorks['s-r-srinivas-vasu'] = [];

// t-b-jayachandra (Sira, INC) — REJECT-LOG: whitelist (The Hindu, Indian Express, HT, NDTV, India Today, TOI, Deccan Herald, PTI) me May 2023–Oct 2026 tak Sira seat par T. B. Jayachandra ka koi VYAKTIGAT lokarpan/shilanyas, fund-disclosed itemized sanction, ya dastaveji nateeja nahi mila — sab REJECT. (1) The Hindu Yettinahole tank-bharo demand (2024): sirf maang, REJECT. (2) The Hindu second-airport Sira pitch (Apr 2025): 42 MLAs ki chitthi/ghoshna, maang, REJECT. (3) TOI/Express Upper Bhadra 3tmcft trial (Sep 2026): mantri T Raghumurthy ne udghatan kiya, Jayachandra sirf 5 MLAs ke saath button dabane me the — dusre neta ke karyakram me maujoodgi, REJECT. (4) Express 2 power substations (Jul 2024, Rs 12.62cr + Rs 14.33cr): "they inaugurated" — mantri KJ George ke karyakram me maujoodgi + dono Koratagere taluk/Sankenahalli me (Sira seat ke bahar), REJECT. (5) TOI Tumakuru abattoir (Nov 2025): sirf quote (kisan payment par), vyaktigat lokarpan nahi, REJECT. (6) Sembcorp solar inauguration (Jul 2024): Sadguru Madhusudan Sai ne udghatan kiya, Jayachandra atithi — maujoodgi, REJECT. (7) TOI Seebi forest fencing (2025): Jayachandra ne sirf prastav diya — maang/prastav, REJECT. (8) Interim Assembly Speaker niyukti (Aug 2026, Star of Mysore, non-whitelist): pad nahi vikas kaam, REJECT. KLLADS (Rs 2cr/seat/varsh) ka Sira-MLA-war istemal kisi whitelist source me sourced nahi — fund joda nahi. Negatives: (a) EP No. 2 of 2020 vs C M Rajesh Gowda — High Court ne 25 Jul 2023 ko infructuous batakar khariz kiya (indiankanoon; whitelisted established media me bhi nahi) — election petition alone, negative NAHI. (b) 2023 halafname ke 6 mamle — National Herald virodh (IPC 188), Mekedatu padayatra ke 4, maan-hani (IPC 500) — affidavit cases alone, in-term FIR/chargesheet/janch ka koi established-media record nahi, negative NAHI. Purva-mantri rule: sirf 2023-2028 Sira kaam gina; 2013-18 mantri-kal ke Hemavathi/railway kaam exclude. Foundation cross-check: works_karnataka.ts me 't-b-jayachandra' ki koi entry pehle se nahi — koi antar nahi.
karnatakaWorks['t-b-jayachandra'] = [];

// h-v-venkatesh (Pavagada (SC), INC, karyakaal 2023-2028) — worker report 2026-10-19
// PEHCHAN: slug 'h-v-venkatesh', name 'H V Venkatesh', party Indian National Congress (INC), post MLA,
// seat 'Pavagada (SC)', Tumakuru zila (src/data/karnataka.ts lines 4156-4165). Kaaryakaal: May 2023+.
// REJECT-LOG:
// 1. The Hindu 21 Jul 2025: CM Siddaramaiah ne Pavagada me Rs 2,529 crore ki multi-village drinking water project ka lokarpan kiya (Tungabhadra backwaters se 270 gaon, 17.5 lakh labharthi) — Venkatesh ka naam sirf 'other district MLAs attended' me aata hai; dusre neta ka karyakram, vyaktigat bhoomika nahi -> REJECT.
// 2. Publicnext (aggregator, non-whitelist) 22 Jul 2025: CM ne Pavagada me Rs 700 crore ke works ka lokarpan/shilanyas kiya, MLA Venkatesh ne karyakram ki adhyakshata ki — source whitelist me nahi, aur adhyakshata lokarpan nahi -> REJECT.
// 3. New Indian Express 23 Jan 2025: H. V. Venkatesha TUMUL (Tumakuru Milk Union) president bane — siyasi-board pad, seat ka koi bhautik vikas-kaam nahi -> REJECT.
// 4. Myneta affidavit: 2023 chunav halafname me koi criminal case nahi darj ('Crime-O-Meter: No criminal cases') — affidavit cases alone negative entry nahi banate, aur koi FIR/chargesheet whitelist media me nahi mila -> negative nahi.
// 5. Baaki poore web par inke naam par koi vyaktigat lokarpan/shilanyas, itemized sanction list ya GO-backed swikriti whitelist media me nahi mili. Kannada sthaniya press (non-whitelist) me bhi koi bharosa-yogya personal works record nahi mila; shanka ho to reject -> koi entry nahi.
// 6. KLLADS (Rs 2cr/seat/varsh) ka inke dwara kiya gaya vyay kisi srot ne itemized darj nahi kiya -> fund entry nahi.
// NEGATIVES: koi nahi (established media me May 2023+ me MLA khud par FIR/chargesheet/janch ka koi record nahi; halafname me zero criminal cases).
karnatakaWorks['h-v-venkatesh'] = [];

// REJECT-LOG — kyathasandra-n-rajanna (Kyathasandra N. Rajanna, INC, Madhugiri)
// Period: 2023-2028. Pehchan pakki: Madhugiri seat se — ye wahi K. N. Rajanna hain jo
// May 2023 se Aug 2025 tak Cooperation Minister rahe (Aug 2025 me cabinet se hataye gaye).
// 'Purva mantri' niyam: sirf vartaman Madhugiri seat ke kaam; minister-kaaryakaal ke
// statewide cooperative karyakram is seat ke works me shamil nahi.
//
// Sources khole/padhe gaye: New Indian Express, The Hindu, Times of India (whitelist)
// + leads (non-whitelist): newskarnataka.com, newsnext.live, freepressjournal.in,
// daijiworld.com, publictv.in, thenewsmill.com.
//
// 1. REJECT — CM Siddaramaiah, Madhugiri, 6 Sep 2023 (New Indian Express, whitelist):
//    CM ne Kannada Bhavana ka lokarpan kiya aur Rs 150 crore ke vikas karyon ka
//    shilanyas rakha; Rajanna ne sirf 'Madhugiri district' ki maang uthayi thi.
//    Karan: dusre neta ke karyakram me maujoodgi; Rajanna ki vyaktigat bhoomika nahi.
//    URL: https://www.newindianexpress.com/states/karnataka/2023/sep/07/new-districts-cm-will-not-commit-dueto-fund-crunch-2612454.html
//
// 2. REJECT — Madhugiri ko jila banane ki maang (Sep 2023, The Hindu + New Indian Express):
//    Maang/prastav/goshna — kaam hua hi nahi. Karan: maang + ghoshna REJECT.
//    URL: https://www.thehindu.com/news/national/karnataka/govt-is-considering-carving-out-madhugiri-district-cm-siddaramaiah/article67277234.ece
//
// 3. REJECT — Madhugiri hill cable car / ropeway project (announcement, 2024):
//    Rajanna ke bayaan ke mutabiq July 2025 tak poora hona tha; established media me
//    vyaktigat lokarpan/shilanyas ka koi saboot nahi. Karan: ghoshna; pre-event.
//    Lead: https://newskarnataka.com/tumakuru/karnatakas-madhugiri-ekashila-hill-to-get-cable-car-system-by-july-2025/10082024/
//
// 4. REJECT — Madhugiri railway station foundation ceremony (newsnext.live, NON-WHITELIST):
//    Union MoS V. Somanna ka project; Rajanna 'jointly performed' ke roop me darj
//    (freepressjournal kehta hai 'present'). Karan: dusre neta ke karyakram me
//    maujoodgi + srot whitelist me nahi. Lead agar whitelisted coverage mile.
//    URL: https://newsnext.live/karnataka/two-major-railway-projects-set-to-transform-connectivity-in-madhugiri-sira-and-pavagada-by-2027/
//
// 5. REJECT — Bijawara (Madhugiri taluk) me PACS/Dudh-sangh godown bhavan ka lokarpan
//    (10 Aug 2024, newskarnataka.com, NON-WHITELIST): Rajanna ne 'inaugurated' kiya
//    per report. Karan: srot whitelist me nahi — established outlet par coverage
//    mila to dobara verify karna. Lead.
//    URL: https://newskarnataka.com/tumakuru/karnatakas-madhugiri-ekashila-hill-to-get-cable-car-system-by-july-2025/10082024/
//
// 6. REJECT — Yettinahole Stage-1 inauguration, Hebbanahalli (6 Sep 2024, The Hindu):
//    CM/DCM ke netritva me; Rajanna sirf 'present' (Hassan district in-charge).
//    Karan: dusre neta ka karyakram + seat ke bahar.
//    URL: https://www.thehindu.com/news/national/karnataka/karnataka-cm-siddaramaiah-inaugurates-stage-1-of-yettinahole-project-offers-bagina-at-hebbanahalli/article68613038.ece/amp/
//
// 7. REJECT — Tumakuru Sadhana Samavesha (19 May 2025, Rs 662 crore projects):
//    CM-led district event; Rajanna ka vyaktigat lokarpan/shilanyas darj nahi.
//    Karan: dusre neta ke karyakram me maujoodgi; bhoomika clear nahi.
//
// 8. NEGATIVE CHECK — 'honey-trap' controversy (Mar 2025, The Hindu):
//    Rajanna Vidhansabha me bole ki unhe honey-trap karne ki 'koshish' hui; koi FIR
//    darj nahi hui (khud shikayat nahi di); CID sirf enquiry kar rahi hai.
//    Karan: Rajanna KHUD aaropi nahi — target tha; FIR/chargesheet/janch nahi.
//    NEGATIVE ENTRY NAHI.
//    URL: https://www.thehindu.com/news/national/karnataka/cid-begins-enquiry-into-alleged-attempts-to-honey-trap-rajanna/article69382424.ece
//
// 9. NEGATIVE CHECK — Aug 2025 cabinet ouster (PTI via The Week, 12 Aug 2025):
//    'Vote theft' wale bayaan par party ne cabinet se hataya; Rajanna ko kisi case me
//    naamzad aaropi nahi banaya gaya. Karan: party action alone = NEGATIVE NAHI.
//    URL: https://www.theweek.in/wire-updates/national/2025/08/12/mds9-ka-rajanna-supporters-furore.html
//
// NATEEJA: whitelist par May 2023+ me Madhugiri seat ke andar Rajanna ke vyaktigat
// lokarpan/shilanyas wala koi physical sarkari sanrachna ka saboot nahi mila.
// Works array khaali rakha gaya hai.
karnatakaWorks['kyathasandra-n-rajanna'] = [];

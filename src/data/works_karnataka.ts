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


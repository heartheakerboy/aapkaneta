// Researched neta profiles — Bio + "Janta ki rai" (verdict / samarthan / aalochna).
// Niyam: har tathya aur har rai-bindu ke saath khola gaya srot; banawati quote kabhi nahi.
// Jahan kisi neta ka researched profile nahi hai, wahan NetaProfile.astro halafnama,
// chunav-note aur works record se auto-bio + record-tathya banata hai.
import type { ProfileExtra } from './pilot';

export const profiles: Record<string, ProfileExtra> = {
  // ---- Akhil Gogoi (researched 2026-10-14) ----
  'akhil-gogoi': {
    bio: [
      'Akhil Gogoi Assam ke un netaon me se hain jinki pehchan vidhayak banne se bahut pehle ki hai — ek kisan-andolan neta aur RTI karyakarta ke roop me. 2002–2005 ke beech Golaghat ke Tengani kshetra me katan (erosion) se visthapit parivaron ko zameen ke patte dilane wale andolan se ve rajyabhar me charcha me aaye. 2005 me unhone Krishak Mukti Sangram Samiti (KMSS) ki sthapna ki, jisne RTI ke zariye PDS aur NREGA ke ghotalon ko ujagar kiya aur bade bandhon (big dams) ke khilaf lambe andolan chalaye. Bhrashtachar-virodhi kaam ke liye unhe 2008 me Shanmugam Manjunath Integrity Award aur 2010 me National RTI Award mila.',
      '2019 me CAA-virodhi andolan ka pramukh chehra rehne ke baad unhe December 2019 me UAPA ke tahat giraftar kiya gaya aur ve 567 din jail me rahe. Jail me rehte hue hi unhone October 2020 me Raijor Dal ki sthapna ki aur 2021 ka chunav nirdaliya ummidwar ke roop me ladkar Sibsagar se jeeta — bina prachar kiye, jail se chunav jeetne wale ve Assam ke pehle vyakti bane. 2026 me ve Raijor Dal ke ummidwar ke roop me usi seat se dobara jeete. PTI ko diye sakshatkaron me ve baar-baar keh chuke hain ki ve khud ko peshewar neta se zyada ek karyakarta mante hain.',
    ],
    verdict: [
      {
        label: '2021 — 57,219 vote',
        detail: 'Jeet ka antar 11,875 • BJP ki Surabhi Rajkonwari doosre sthan par • jail me rehte hue, bina prachar kiye jeet',
        sourceLabel: 'Times of India / ECI parinaam',
        sourceUrl: 'https://timesofindia.indiatimes.com/india/sibsagar-election-results-2026-bjps-kushal-dowari-vs-rajjor-dals-akhil-gogoi-/articleshow/130631865.cms',
      },
      {
        label: '2026 — 86,521 vote',
        detail: 'Jeet ka antar 17,272 • BJP ke Kushal Dowari (69,249 vote) doosre sthan par • seat barkarar',
        sourceLabel: 'PTI (The Week)',
        sourceUrl: 'https://www.theweek.in/wire-updates/national/2026/05/04/assam-akhil-gogoi-wins-sibsagar-seat-for-2nd-consecutive-term.html',
      },
    ],
    verdictNote:
      'Do lagatar chunavon me Sibsagar ke matdataon ne unhe chuna, aur 2026 me jeet ka antar 2021 se badh gaya. Kisi bhi neta ke baare me janta ki rai ka isse pakka aur napaa-tula saboot nahi hota.',
    support: [
      {
        head: 'Zameen aur kisan ki awaaz',
        text: 'Tengani andolan se lekar KMSS ke RTI abhiyanon tak, samarthak unhe garibon, kisanon aur visthapiton ke liye ladne wala neta mante hain — ye chhavi do dashak ke andolanon se bani hai.',
        sourceLabel: 'PTI, Firstpost',
        sourceUrl: 'https://www.firstpost.com/politics/assam-assembly-election-2021-akhil-gogoi-profile-jailed-anti-caa-activist-is-known-to-expose-corruption-through-rti-9445781.html',
      },
      {
        head: '2021 ka vyaktigat samarthan',
        text: 'Jab ve jail me the, unki 85-varshiya maa aur swayamsevakon ne Sibsagar me ghar-ghar jaakar prachar kiya — samarthan sirf party ka nahi, vyaktigat star ka dikhai diya.',
        sourceLabel: 'Firstpost',
        sourceUrl: 'https://www.firstpost.com/politics/assam-assembly-election-2021-akhil-gogoi-profile-jailed-anti-caa-activist-is-known-to-expose-corruption-through-rti-9445781.html',
      },
      {
        head: 'Vipaksh ka akela vijeta chehra',
        text: '2026 me gathbandhan ke teen pramukh "Gogoi" chehron me ve akela jeetne wale rahe, isliye samarthak unhe sarkar ke sabse mukhar virodhi ke roop me dekhte hain.',
        sourceLabel: 'Hub Network, India TV',
        sourceUrl: 'https://hubnetwork.in/assam-assembly-polls-2026-split-verdict-for-the-three-gogois/',
      },
    ],
    criticism: [
      {
        head: 'Congress ne saath chhoda',
        text: 'September 2026 me Congress ne Raijor Dal se gathbandhan tod diya — Gogoi par gathbandhan ke usoolon ke khilaf bayanbaazi ke aarop lage, aur Congress netaon ne ye tak kaha ki Sibsagar ki jeet unke samarthan ke bina sambhav nahi thi.',
        sourceLabel: 'India TV News, Sep 2026',
        sourceUrl: 'https://www.indiatvnews.com/north-east/assam/congress-snaps-ties-with-akhil-gogoi-led-raijor-dal-in-assam-over-malicious-propaganda-2026-09-03-1053168',
      },
      {
        head: 'Mamle aur giraftariyan',
        text: '2019 me NIA ne unhe CAA-virodhi hinsak pradarshanon se judav ke aarop me UAPA ke tahat giraftar kiya tha. Gogoi aur unki party in aaropon ko hamesha rajnaitik badle ki karyavahi batate aaye hain; 2021 me ve jail se riha hue.',
        sourceLabel: 'PTI, Firstpost',
        sourceUrl: 'https://theprint.in/india/not-happy-as-mla-as-activist-raised-peoples-issues-more-akhil-gogoi/1437359/',
      },
      {
        head: 'Halafname ke 21 mamle',
        text: '2026 ke halafname ke anusaar unpar 21 aaparaadhik mamle darj hain — media reporting ke anusaar inka bada hissa unke andolan-karyakaal ke dauraan darj hua hai; kisi mamle me dosh-siddhi (conviction) ki koi report nahi hai.',
        sourceLabel: 'ECI halafnama / myneta.info',
        sourceUrl: 'https://myneta.info/Assam2026/candidate.php?candidate_id=89',
      },
    ],
  },

  // ---- Wave 1-A (Maharashtra + Gujarat) (researched 2026-10-14) ----
// ---- Devendra Gangadhar Fadnavis (Maharashtra CM) ----
  'devendra-gangadhar-fadnavis': {
    bio: [
      "Devendra Gangadharrao Fadnavis ka janm 22 July 1970 ko Nagpur me hua. RSS se jude ABVP ke zariye chhatra rajneeti se aaye — 22 saal ki umar me Nagpur nagar nigam ke corporator bane aur 1997 me Nagpur ke mayor (karyakaal 1997-99). 2013-15 me BJP ke Maharashtra pradesh adhyaksh rahe. 31 October 2014 ko Maharashtra ke mukhyamantri bane aur 2019 tak is pad par rahe; 2019-22 me vidhansabha me vipaksh ke neta, 2022-24 me Eknath Shinde sarkar me up-mukhyamantri, aur 5 December 2024 ko teesri baar mukhyamantri bane. Party: BJP.",
      "1999 se lagatar MLA hain — pehle Nagpur West (1999, 2004), phir parisiman ke baad Nagpur South West (2009, 2014, 2019, 2024) se. 2024 me 1,29,401 vote lekar Congress ke Prafulla Vinodrao Gudadhe (89,691 vote) ko 39,710 vote ke antar se haraya — is seat se lagatar chauthi aur kul chhathi vidhansabha jeet. Jeet ka antar 2019 ke mukable kam raha, lekin BJP ke itihaas ke sabse behtar pradarshan (132 seatein) ne unhe teesri baar CM ki kursi dilayi. Vartaman me Maharashtra ke mukhyamantri hain.",
    ],
    verdict: [
      { label: "2024 — 1,29,401 vote", detail: "Jeet ka antar 39,710 • Prafulla Vinodrao Gudadhe (Congress) doosre sthan par", sourceLabel: "Financial Express", sourceUrl: "https://www.financialexpress.com/india-news/nagpur-south-west-election-result-2024-live-updates-devendra-fadnavis-bjp-praful-gudhadhe-congress-surendra-shravan-dongre-bsp-winner-runner-up-nagpur-south-west-election-news-today/3674316/" },
    ],
    verdictNote: "Ye unki is seat se lagatar chauthi aur kul chhathi vidhansabha jeet thi; jeet ka antar 2019 ke mukable kam raha, lekin Mahayuti ke 235-seat wale aitihasik janadesh ne unhe teesri baar mukhyamantri banaya.",
    support: [
      { head: "Infrastructure push ke liye jaane jaate hain", text: "Indian Express ke anusaar unke netritva (2014 se CM aur Dy CM ke karyakaal me) Maharashtra me 701-km Samruddhi Mahamarg, Atal Setu (Mumbai Trans Harbour Link), Mumbai Metro ke corridors, coastal road aur Navi Mumbai airport jaise mega projects aage badhe — Samruddhi Mahamarg ne Nagpur-Mumbai safar lagbhag 17 ghante se ghata kar 8 ghante kiya. ThePrint ke anusaar unhone \"war room\" ke zariye in projects ki nigrani ki; samarthak unhe \"Infrastructure Man\" kehte hain.", sourceLabel: "Indian Express / ThePrint", sourceUrl: "https://indianexpress.com/article/cities/mumbai/coffee-table-book-captures-impact-of-infra-projects-in-maharashtra-under-fadnavis-10059501/lite/" },
      { head: "2024 me aitihasik janadesh ke saath wapsi", text: "Mint (PTI) ke anusaar 2024 me BJP ne Maharashtra me apna sabse behtar pradarshan kiya — 132 seatein, lagbhag 90% strike rate; Fadnavis party ke sabse pramukh chehre rahe aur unhe RSS ka bharosa bhi mila (ABVP ke zariye rajneeti me aaye; RSS ne chunav se pehle lagbhag 60,000 chhoti baithaken ki). 4 December 2024 ko BJP vidhayak dal ne unhe neta chuna aur 5 December ko teesri baar CM ki shapath dilayi.", sourceLabel: "Mint (PTI)", sourceUrl: "https://www.livemint.com/elections/maharashtracmswearingindevendrafadnavis5keysuccessfactorsthatworked-rss-bjp-weak-congress-ek-hai-to-safe-hai-11733375829991.html?utm_source%3Dshare%26utm_medium%3Dsocial%26utm_campaign%3Dshare_via_web" },
      { head: "Prashasanik kadai aur kanoon-vyavastha par dhyan", text: "ThePrint ke anusaar CM banne par unhone har vibhag ke liye 100-day programme chalaya jiski sameeksha Quality Council of India se karwai. Grih vibhag apne paas rakhte hue Gadchiroli me Naxal virodhi abhiyan ko aage badhaya — varishth Maoist neta ke atmasamarpan par unhe pratidvandi Uddhav Thackeray ki Shiv Sena se bhi sarahna mili; 2022 ke baad Vidarbha me Rs 1.23 lakh crore ke nivesh aane ki baat bhi kahi gayi.", sourceLabel: "ThePrint", sourceUrl: "https://theprint.in/politics/1-year-of-fadnavis-3-0-iron-grip-on-power-sidelined-shinde-big-infra-push-a-messy-balance-sheet/2799756/" },
    ],
    criticism: [
      { head: "Maratha aarakshan andolan me nishane par", text: "Indian Express ke anusaar Maratha quota karyakarta Manoj Jarange-Patil ne seedhe Fadnavis ko nishana banaya aur aarop lagaya ki unhone Maratha samudaay ko aarakshan se vanchit rakha aur satta ka istemal samudaay ke khilaf kiya; 2024 chunav se pehle unhone Fadnavis ko satta se bedakhal karne ka aahvan kiya tha. Ye aarop hain, adalat ya jaanch se sabit tathya nahi.", sourceLabel: "Indian Express", sourceUrl: "https://indianexpress.com/article/cities/pune/jarange-breathes-fire-at-fadnavis-says-he-tried-to-wreck-lives-of-marathas-9622031/" },
      { head: "2019 ki 80-ghante ki sarkar", text: "NDTV ke anusaar 23 November 2019 ko subah-savere Raj Bhavan me Ajit Pawar ke saath shapath lekar unhone sirf 80 ghante chalne wali sarkar banayi; Ajit Pawar ke peeche hatne par 3 din me istifa dena pada. Fadnavis ne khud ise \"mistake\" kaha aur maana ki isse unke samarthakon me unki chhavi \"substantially dented\" hui. Aalochak ise parda-dari wali satta-hathiyane ki koshish ke roop me dekhte hain; unka bachav tha ki Shiv Sena ne chunav-poorv gathbandhan todkar \"peeth me chhura ghonpa\" tha.", sourceLabel: "NDTV", sourceUrl: "https://www.ndtv.com/india-news/forming-government-with-ajit-pawar-was-a-mistake-devendra-fadnavis-2456734" },
      { head: "Chunav halafnama mamla — adalat se bari", text: "Times of India ke anusaar Supreme Court ne October 2019 me Bombay High Court ki clean chit radd karke 2014 ke halafname me do aapradhik mamle (1996, 1998 ke) na batane ke aarop par trial ka aadesh diya tha; unki review yachika February 2020 me khariz ho gayi. Bar & Bench ke anusaar Nagpur ki adalat ne 2023 me retrial ke baad unhe bari kar diya — adalat ne maana ki halafname me chook unke vakil ki thi, janboojhkar chhupane ka irada (mens rea) sabit nahi hua. Vartaman sthiti: is mamle me koi doshasiddhi ya lambit mukadma nahi hai.", sourceLabel: "Times of India / Bar & Bench", sourceUrl: "https://timesofindia.indiatimes.com/india/poll-affidavit-case-sc-dismisses-plea-of-devendra-fadnavis-seeking-review-of-2019-verdict/articleshow/74454857.cms" },
    ],
  },

  // ---- Eknath Sambhaji Shinde (Maharashtra Dy CM) ----
  'eknath-sambhaji-shinde': {
    bio: [
      "Eknath Sambhaji Shinde ka janm 9 February 1964 ko Satara jile ke Dare gaon me hua; parivar kaam ki talash me Thane aa gaya. Graduation poori kiye bina padhai chhodi aur kuch waqt auto-rickshaw chalakar parivar ka saath diya. Thane me Shiv Sena ke sthaniya neta Anand Dighe se judkar rajneeti me aaye, unke deputy bane, aur 2001 me Dighe ke nidhan ke baad Thane-Palghar me party ko majboot kiya. 1997 me Thane Municipal Corporation ke corporator, 2005 me Sena ke Thane jila pramukh bane; 2004 me pehli baar MLA chune gaye aur 2009 se Kopri-Pachpakhadi se lagaatar jeet rahe hain (5-time MLA). 2014 me thode waqt Leader of Opposition rahe, phir 2014-19 me BJP-Sena sarkar me mantri (Public Works, Urban Development) aur MVA sarkar (2019-22) me Urban Development mantri rahe. June 2022 me unhone darjanon vidhayakon ke saath Uddhav Thackeray ke khilaf bagawat ki, MVA sarkar giri, aur 30 June 2022 ko BJP ke samarthan se Maharashtra ke mukhyamantri bane (Devendra Fadnavis deputy CM). February 2023 me Election Commission ne Shiv Sena ka naam aur dhanush-baan chinh unke gutt ko de diya.",
      "2024 ke Maharashtra assembly chunav me Shinde Kopri-Pachpakhadi se 1,59,060 vote lekar jeete — Kedar Prakash Dighe (Shiv Sena UBT, Anand Dighe ke bhatije) ko 1,20,717 vote ke antar se haraya, jo unke sabhi chunavon me sabse bada jeet antar raha. Unke netritva me Shiv Sena ne 81 me se 57 seeten jeetin jabki Uddhav Thackeray ki UBT sirf 20 par ruki. Mahayuti ki badi jeet ke bavajud mukhyamantri pad BJP ke Devendra Fadnavis ko gaya; Shinde ne 5 December 2024 ko Fadnavis ke netritva wali sarkar me up-mukhyamantri ke roop me shapath li. Vartaman me ve Maharashtra ke Deputy Chief Minister hain.",
    ],
    verdict: [
      { label: "2024 — 1,59,060 vote", detail: "Jeet ka antar 1,20,717 • Kedar Prakash Dighe (Shiv Sena UBT) doosre sthan par", sourceLabel: "CNBC-TV18 / ECI parinaam", sourceUrl: "https://www.cnbctv18.com/india/politics/kopri-pachpakhadi-election-results-2024-live-shiv-sena-eknath-shinde-vs-kedar-prakash-dighe-19513575.htm" },
    ],
    verdictNote: "2024 me Mahayuti ki prachand jeet ke baad bhi CM pad BJP ke paas gaya — ye parinaam Shinde ki Thane me pakad ko pakka karta hai, lekin sarkar ke andar unki sthiti mukhyamantri se up-mukhyamantri par aayi.",
    support: [
      { head: "Ladki Bahin Yojana — mahilaon ko seedha paisa", text: "Unki sarkar ne garib parivaron ki mahilaon ke liye cash transfer scheme (Ladki Bahin Yojana) shuru ki, jise Mahayuti ki 2024 jeet ka game-changer mana gaya; is yojna ki lokpriyata ki wajah se unhe samarthakon me Ladka Bhau ka khitab mila.", sourceLabel: "PTI / ThePrint", sourceUrl: "https://theprint.in/india/political-journey-of-eknath-shinde-from-rebel-to-action-man-to-ladka-bhau/2388943/?amp" },
      { head: "Infrastructure push aur 24/7 kaam ki chhavi", text: "CM ke roop me unhone Mumbai coastal road, Atal Setu (Mumbai Trans Harbour Link), metro, Navi Mumbai airport, Samruddhi Mahamarg aur Dharavi redevelopment jaise bade projects ko aage badhaya; PTI profile me unhe doer aur 24/7 politician bataya gaya jo aksar aadhi raat tak kaam karte the.", sourceLabel: "PTI / ThePrint", sourceUrl: "https://theprint.in/india/political-journey-of-eknath-shinde-from-rebel-to-action-man-to-ladka-bhau/2388943/?amp" },
      { head: "2024 me Shiv Sena ko 57 seet ka janadesh", text: "Unke netritva me Shiv Sena ne 81 me se 57 assembly seeten jeetin jabki Uddhav Thackeray ki UBT sirf 20 par ruki — isse unke daave ko bal mila ki asli Shiv Sena unke saath hai.", sourceLabel: "PTI / ThePrint", sourceUrl: "https://theprint.in/india/political-journey-of-eknath-shinde-from-rebel-to-action-man-to-ladka-bhau/2388943/?amp" },
    ],
    criticism: [
      { head: "Bagawat par gaddari ka aarop; ED ke dabav ka daava", text: "UBT gutt aur uske samarthak Shinde ko gaddar kehte hain aur aarop lagate hain ki bagawat ke peeche ED/CBI ka dabav tha. Shinde ne is aarop ka khandan kiya hai — unke anusar aaropon me koi sachchai nahi, aur unka kehna hai ki sirf 1-2 vidhayak central agencies ki jaanch ke daayre me the, baaki ka ED ya kisi aur central jaanch se koi lena-dena nahi.", sourceLabel: "The New Indian Express", sourceUrl: "https://www.newindianexpress.com/nation/2022/jul/05/why-did-shinde-revolt-against-uddhav-now-maharashtra-cm-heres-what-he-has-to-say-2473247.html" },
      { head: "Disqualification par Speaker ke faisle ko opposition ne rajnaitik bataya", text: "January 2024 me Assembly Speaker Rahul Narwekar ne Shinde gutt ko asli Shiv Sena mana aur Shinde sahit vidhayakon ke khilaf disqualification yachikayein kharij kar di — koi MLA ayogya nahi hua. Uddhav Thackeray ne ise loktantra ki hatya bataya aur Supreme Court ka darwaza khatkhataya. Shinde ka jawab raha ki unhone koi galat kaam nahi kiya — pehle Election Commission aur phir Speaker ne unke paksh me faisla diya. Note: May 2023 me Supreme Court pehle hi keh chuka hai ki MVA sarkar par floor test ka Governor ka aadesh galat tha.", sourceLabel: "The Hindu / Frontline", sourceUrl: "http://frontline.thehindu.com/politics/maharashtra-speaker-rahul-narwekar-verdict-in-shiv-sena-mla-disqualification-case-ignites-political-controversy-intensifies-rift-between-eknath-shinde-uddhav-thackeray-factions/article67730255.ece" },
      { head: "Supreme Court me ECI ke chinh-faisle par sunwai jaari (vartaman kanooni sthiti)", text: "Shinde gutt ko Shiv Sena ka naam aur dhanush-baan chinh dene ke ECI ke faisle ko UBT ne Supreme Court me chunauti di hai. September-October 2026 me sunwai phir shuru hui — bench sawal utha rahi hai ki dal-badal ke aaropiyon ko party chinh kaise diya ja sakta hai; Shinde ke vakil ka tark hai ki legislative majority ka test kanoonan sahi tha. Sunwai abhi adhuri hai — koi antim faisla nahi aaya, aur ab tak Shinde ya unke kisi MLA ko ayogya nahi thahraya gaya.", sourceLabel: "The New Indian Express", sourceUrl: "https://www.newindianexpress.com/india/2026/Oct/06/can-shiv-sena-symbol-go-to-those-accused-of-constitutional-sin-of-defection-sc-asks" },
    ],
  },

  // ---- Aditya Uddhav Thackeray (Worli MLA, Shiv Sena UBT) ----
  'aditya-uddhav-thackeray': {
    bio: [
      "Aaditya Uddhav Thackeray ka janm 13 June 1990 ko Mumbai me hua; wo Shiv Sena sansthapak Bal Thackeray ke pote aur Shiv Sena (UBT) pramukh Uddhav Thackeray ke bete hain. Unhone St. Xavier's College se itihaas me BA aur KC Law College se LLB kiya, 2010 me Yuva Sena ke adhyaksh bane aur 2018 me Shiv Sena ke neta niyukt hue. 2019 me wo Worli se chunav ladkar Thackeray parivar ke pehle chunav ladne aur jeetne wale sadasya bane, aur 30 December 2019 se 2022 ke madhya tak MVA sarkar me cabinet mantri rahe — paryavaran aur jalvayu parivartan, paryatan, protocol vibhag, saath hi Mumbai upanagar ke guardian mantri ke roop me. Unki pehchan Aarey Metro car shed virodh aur March 2022 me Mumbai Climate Action Plan (MCAP) — 2050 tak net-zero ka lakshya rakhne wali Bharat ki pehli sheher-jalvaayu yojana — se bani.",
      "2024 Maharashtra assembly chunav me unhone Worli seat se doosri baar jeet darj ki — 63,324 vote lekar Shiv Sena (Shinde) ke Milind Deora (54,523 vote) ko 8,801 vote ke antar se haraya; 2019 me unka jeet ka antar 67,427 vote tha. Chunav ke baad wo Shiv Sena (UBT) ke legislature party leader chune gaye. 2022 ke vibhajan ke baad se unki party MVA vipaksh ka hissa hai, jabki Eknath Shinde ki Shiv Sena sattaaroodh Mahayuti me hai. Disha Salian maut mamle me Bombay High Court ke aadesh par CBI jaanch chal rahi hai, jisme unhone kisi bhi galat kaam se inkar kiya hai.",
    ],
    verdict: [
      { label: "2024 — 63,324 vote", detail: "Jeet ka antar 8,801 • doosre sthan par Milind Deora (Shiv Sena, Shinde gut) — 54,523 vote", sourceLabel: "Times of India / ECI parinaam", sourceUrl: "https://timesofindia.indiatimes.com/elections/assembly-elections/maharashtra/worli-election-results-2024-mvas-aditya-thackeray-against-mahayutis-milind-deora/articleshow/115584521.cms" },
    ],
    verdictNote: "2019 me 67,427 vote ke antar se jeetne wale Thackeray ne 2024 me seedhi Sena-vs-Sena takkar me Worli bachayi, lekin antar ghatkar 8,801 vote reh gaya.",
    support: [
      { head: "Mumbai Climate Action Plan — Bharat ki pehli sheher jalvaayu yojana", text: "Unke mantri karyakal me March 2022 me BMC ne WRI India aur C40 Cities ke technical sahyog se MCAP launch kiya — 240 page ka 30 saal ka roadmap, 2050 tak net-zero ka lakshya (Bharat ke 2070 lakshya se 20 saal pehle), 6 sectors aur 24 priority actions ke saath. Indian Express ne ise Bharat ka pehla sheher climate action plan bataya; Thackeray ne ise aane wale do dashakon ka sabse mahatvapurna dastavez bataya.", sourceLabel: "Indian Express", sourceUrl: "https://indianexpress.com/article/cities/mumbai/city-sets-green-targets-for-2050-as-mumbais-climate-action-plan-unveiled-7818395/lite/" },
      { head: "Aarey harit kshetra ki raksha ka faisla", text: "MVA sarkar ke satta me aate hi November 2019 me Aarey Colony me Metro-3 car shed par rok lagai gayi aur site ko Kanjurmarg shift karne ka faisla hua, jise paryavaran samoohon ne Mumbai ke haryali kshetra ki raksha ke roop me saraha. ThePrint ke anusar unki Aarey virodhi muhimm ne unhe kaafi prashansak dilaye; ye rok June 2022 tak kayam rahi.", sourceLabel: "New Indian Express", sourceUrl: "https://www.newindianexpress.com/cities/mumbai/2022/Jul/21/maharashtra-paves-way-for-metro-car-shed-at-mumbais-aarey-site-lifts-2019-stay-2479311.html" },
      { head: "Single-use plastic ban aur shahari sudhar", text: "ThePrint ke anusar, mantri banne ke baad unhone Maharashtra bhar me single-use plastic ban aur malls ko raat bhar khula rakhne jaise faislon me pehal ki ya mahatvapurna bhoomika nibhai. Samarthak kehte hain ki ye kadam unhe yuva, shahari voter ke liye adhunik aur paryavaran-sanvedi neta ke roop me sthapit karte hain.", sourceLabel: "ThePrint", sourceUrl: "https://theprint.in/politics/shiv-sena-scion-aaditya-thackeray-takes-lead-role-in-govt-matters-not-all-are-pleased/464109/?noamp=mobile" },
    ],
    criticism: [
      { head: "Aarey rok — \"sheer ego\" aur Metro me deri ka aarop", text: "Devendra Fadnavis ne Aarey car shed par rok ko \"sheer ego\" karar diya aur kaha ki Manoj Saunik committee ne Kanjurmarg ki bajay Aarey ki sifarish ki thi, jise Uddhav sarkar ne khariz kar diya. Unke mutabik Kanjurmarg site par swamitva vivad aur mukadmebaji ne lagbhag 2.5 saal tak Metro-3 ka kaam rokkar rakha, aur Supreme Court ne November 2022 me car shed wapas Aarey shift karne ke faisle par rok lagane se inkar kar diya. Thackeray paksh ka kehna hai ki faisla paryavaran ki raksha ke liye tha, jiska paryavaran samoohon ne samarthan kiya tha.", sourceLabel: "New Indian Express", sourceUrl: "https://www.newindianexpress.com/cities/mumbai/2022/Jul/21/maharashtra-paves-way-for-metro-car-shed-at-mumbais-aarey-site-lifts-2019-stay-2479311.html" },
      { head: "Disha Salian mamla — CBI jaanch jari, koi aarop tay nahi", text: "Sushant Singh Rajput ki poorv manager Disha Salian ki June 2020 me maut ke mamle me Bombay High Court ke aadesh par CBI ne FIR darj ki hai; adalat ne saaf kiya tha ki kisi vyakti ko aaropi na mana jaye jab tak jaanch me paryapt samagri na mile. Maharashtra ke mantri Nitesh Rane ne dawa kiya ki unka naam FIR me kai baar aaya hai — ye aarop adalat me sthapit nahi hue hain. Thackeray ne kisi bhi galat kaam se inkar karte hue kaha hai ki unke naam ko is mamle se jodna saboot-vihin charitra-hanan hai aur rajneetik maksad se ho raha hai.", sourceLabel: "New Indian Express", sourceUrl: "https://www.newindianexpress.com/states/maharashtra/2026/Oct/05/disha-salian-death-probe-bjp-minister-claims-aaditya-thackeray-may-leave-country" },
      { head: "Sarkar me bhoomika par gathbandhan me asammati", text: "ThePrint ke anusar MVA ke dauran NCP aur Congress ke srot ne apatti jatayi thi ki Thackeray apne vibhag se bahar ki baithakon me hastakshep karte hain, aur Sena ke ek varishth neta ne Eknath Shinde ke saath satta-sangharsh ki chetavni di thi. Kuch civil servants ne bhi unhe \"administrative greenhorn\" batate hue asahajta jatayi. Dusri taraf Congress pravakta Sachin Sawant ne kaha ki unki upasthiti hastakshep nahi karti aur ye vibhagon ko seekhne ke liye ho sakti hai.", sourceLabel: "ThePrint", sourceUrl: "https://theprint.in/politics/shiv-sena-scion-aaditya-thackeray-takes-lead-role-in-govt-matters-not-all-are-pleased/464109/?noamp=mobile" },
    ],
  },

  // ---- Bhupendrabhai Rajnikant Patel (Gujarat CM) ----
  'bhupendrabhai-rajnikant-patel': {
    bio: [
      "Bhupendrabhai Rajnikant Patel ka janm 15 July 1962 ko Ahmedabad me hua; unhone Government Polytechnic Ahmedabad se civil engineering me diploma liya aur ve Rashtriya Swayamsevak Sangh ke sadasya hain. Unhone apna rajniti safar 1995 me Memnagar nagarpalika ki standing committee ke adhyaksh ke roop me shuru kiya — 1999-2000 aur 2004-2006 me nagarpalika adhyaksh rahe, 2008-2010 me Ahmedabad Municipal Corporation school board ke vice-chairman, 2010-2015 me Thaltej se corporator aur usi dauran AMC standing committee ke chairman, aur 2015 me Ahmedabad Urban Development Authority (AUDA) ke chairman bane.",
      "2017 me ve pehli baar Ghatlodia se vidhayak chune gaye — ye seat pehle Anandiben Patel ke paas thi — aur lagbhag 1.17 lakh vote ke antar se jeete. September 2021 me Vijay Rupani ke achanak isteefe ke baad 12 September ko ve BJP vidhayak dal ke neta chune gaye aur 13 September 2021 ko Gujarat ke 17ve mukhyamantri ke roop me shapath li. 2022 ke chunav me BJP ne 156 seeton ka record banaya, Patel dobara Ghatlodia se 1.92 lakh vote ke antar se jeete aur 12 December 2022 ko doosri baar mukhyamantri (18ve CM) ke roop me shapath li; ve abhi bhi Gujarat ke mukhyamantri hain.",
    ],
    verdict: [
      { label: "2022 — 2,12,480 vote", detail: "Jeet ka antar lagbhag 1.92 lakh (1,92,263) • Congress ki Amiben Yagnik doosre sthan par", sourceLabel: "The Economic Times (PTI) / ECI parinaam", sourceUrl: "https://economictimes.indiatimes.com/news/elections/assembly-elections/gujarat/gujarat-elections-cm-bhupendra-patel-wins-from-ghatlodia/articleshow/96085241.cms" },
    ],
    verdictNote: "Ye jeet 2022 ke Gujarat chunav ke sabse bade antaron me se ek thi; iske turant baad BJP ne Patel ko doosri baar mukhyamantri ghoshit kiya aur unhone 12 December 2022 ko shapath li.",
    support: [
      { head: "2022 me BJP ko Gujarat me itihaasik 156 seeton ki jeet dilayi", text: "ANI ke anusaar BJP ne 182 me se 156 seetein jeetin — 1960 me Gujarat ke gathan ke baad kisi party ki sabse badi jeet, aur party ki Gujarat me lagatar saatwi chunavi jeet. Congress sirf 17 aur AAP sirf 5 seetein jeet saki. PM Modi ne is parinaam ko \"phenomenal\" kaha aur party ne Patel ko hi doosri baar CM ghoshit kiya.", sourceLabel: "Hindustan Times", sourceUrl: "https://www.hindustantimes.com/elections/gujarat-assembly-election/election-results-2022-bhupendra-breaks-narendra-s-gujarat-record-congress-wrests-himachal-pradesh-from-bjp-101670518370619.html" },
      { head: "Semiconductor ke liye dedicated policy wala desh ka pehla rajya", text: "PTI ke anusaar CM Patel ne Gujarat Semiconductor Policy 2022-2027 ki ghoshna ki, jisse Gujarat semiconductor aur display utpadan ke liye dedicated policy wala desh ka pehla rajya bana. Policy me Dholera me \"Semicon City\", pehle 200 acre zameen par 75 pratishat tak subsidy aur agle paanch saalon me 2 lakh naukriyon ka lakshya rakha gaya.", sourceLabel: "The Economic Times (PTI)", sourceUrl: "https://economictimes.indiatimes.com/industry/cons-products/electronics/gujarat-announces-semiconductor-policy-to-attract-new-investments/articleshow/93160929.cms" },
      { head: "Shaant, low-profile prashasak ki chhavi", text: "Hindustan Times ne unhe party ka \"60-year-old soft-spoken face\" bataya. Lambi nagarpalika aur AUDA ki prashasanik prishthabhoomi ke kaaran party ne unhe pehli baar MLA banne ke turant baad CM pad ke liye chuna — is faisle ko unki prashasak ke roop me chhavi ka sanket mana gaya.", sourceLabel: "Hindustan Times", sourceUrl: "https://www.hindustantimes.com/elections/gujarat-assembly-election/election-results-2022-bhupendra-breaks-narendra-s-gujarat-record-congress-wrests-himachal-pradesh-from-bjp-101670518370619.html" },
    ],
    criticism: [
      { head: "Morbi pul haadsa (Oct 2022): vipaksh ne naitik zimmedari par CM ke isteefe ki maang ki", text: "30 October 2022 ko Morbi me Machchhu nadi par British-era jhoola pul tootne se 135 se zyada logon ki maut hui. Congress neta Digvijaya Singh ne ise \"government-made tragedy\" batakar CM Bhupendra Patel ke isteefe ki maang ki, aur P. Chidambaram ne kaha ki sarkar ki taraf se na koi maafi aayi na koi isteefa. Sarkar ka jawab tha ki FIR darj hui, Oreva samuh ke adhikariyon sahit kai log giraftar hue aur PM Modi ne swayam review meeting ki. Is mamle me Patel par vyaktigat roop se koi aarop nahi hai; Oreva MD Jaysukh Patel aur anya aaropiyon par culpable homicide ke charges hain — Supreme Court ne March 2024 me Jaysukh Patel ko zamaanat di aur April 2025 me Morbi court ne unki discharge yachika kharij kar di, ab trial aage badhega.", sourceLabel: "Telegraph India / Indian Express", sourceUrl: "https://www.telegraphindia.com/india/morbi-bridge-collapse-senior-congress-leader-digvijaya-singh-demands-gujarat-chief-minister-bhupendra-patels-resignation/cid/1895449" },
      { head: "Rajkot TRP game zone aag (May 2024): vipaksh ne sarkar ko \"gambhir nahi\" kaha", text: "25 May 2024 ko Rajkot ke TRP game zone me aag se 27 logon (chaar bachchon sahit) ki maut hui. Congress ne aarop lagaya ki sarkar gambhir nahi hai aur sirf chhote adhikariyon ko suspend karke badi zimmedariyon ko bacha rahi hai; Gujarat High Court ne bhi sarkar ki inaction par kade sawaal uthaye. CM ne SIT gathit ki aur mrutakon ke parivaron ke liye Rs 4 lakh ki ex-gratia ghoshna ki. Police ne ab tak 15 logon ko giraftar kiya hai, mamla abhi adalat me vicharadhin hai aur peedit parivar tez sunvai ki maang karte rahe hain.", sourceLabel: "ThePrint (PTI) / Telegraph India (PTI)", sourceUrl: "https://theprint.in/india/not-serious-only-suspending-junior-officials-cong-slams-bjp-govt-in-gujarat-over-rajkot-fire/2105152/" },
    ],
  },

  // ---- Jignesh Mevani (Vadgam MLA, Congress) ----
  'jignesh-mevani': {
    bio: [
      "Jignesh Mevani ka janm 11 December 1980 ko Ahmedabad me hua; unhone Gujarat University se BA aur LLB ki degree li aur journalism me PG diploma ke baad ek saptahik patra me patrakar ka kaam kiya. Patrakarita chhodkar ve Jan Sangharsh Manch se jude aur Dalit adhikaaron ke liye kaam shuru kiya. 2016 me Una me char Dalit yuvkon ki sarvajanik pitai ke baad unhone Una Dalit Atyachar Ladat Samiti aur Rashtriya Dalit Adhikar Manch ke zariye virodh ka netritva kiya — 15,000 se zyada logon ki Dalit Asmita Yatra (Ahmedabad se Una, 370 km) August 2016 me Una me ek bade sammelan par khatm hui — aur isi andolan se ve rashtriya pehchan wale Dalit neta bane. The Hindu ne unhe Gujarat me Ambedkarite andolan ke neta ke roop me pesh kiya hai.",
      "2017 me ve Vadgam (SC) se nirdaliya ummidwar ke roop me chunaav lade — Congress ne apna ummidwar hatakar unka samarthan kiya — aur BJP ke Vijaykumar Chakravarti ko 19,696 voton se harakar pehli baar MLA bane. September 2021 me ve aupcharik roop se Congress me shaamil hue aur Gujarat Congress ke working president bane. 2022 me unhone Congress ke ticket par Vadgam se dobara chunaav lada aur BJP ke Manibhai Jethabhai Vaghela (jo 2017 se pehle 2012-2017 me yahi seat jeet chuke the aur Congress chhodkar BJP me aaye the) ko 4,928 voton ke sankeern antar se haraya; is mukable me AAP ke Dalpatbhai Bhatia aur AIMIM ke Kalpesh Sundhia bhi maidan me the. Vartaman me ve Gujarat Vidhan Sabha me Vadgam ke Congress MLA hain.",
    ],
    verdict: [
      { label: "2022 — 94,765 vote", detail: "Jeet ka antar 4,928 • BJP ke Manibhai Jethabhai Vaghela doosre sthan par (89,837 vote)", sourceLabel: "Zee News", sourceUrl: "https://zeenews.india.com/india/live-updates/vadgam-sc-gujarat-assembly-election-2022-result-live-updates-vidhan-sabha-chunav-jignesh-mevani-vs-manibhai-jethabhai-vaghela-vs-dalpatbhai-dahyabhai-bhatiya-aap-vs-bjp-vs-congress-vote-share-2545424/amp" },
    ],
    verdictNote: "2022 me BJP ne Gujarat ki 182 me se record 156 seat jeeti thi; us lehar ke bawajood Vadgam Congress ki kul 17 jeeton me se ek raha. 2017 ke 19,696 ke antar ke mukable 2022 ki jeet bahut sankeern thi — AAP aur AIMIM ke maidan me aane ke baad mukabla chaturkoniya ho gaya tha.",
    support: [
      { head: "Una andolan se Dalit adhikaar ki rashtriya awaaz", text: "2016 ke Una mamle ke baad Mevani ne Gujarat bhar me Daliton ko jodkar Dalit Asmita Yatra nikali aur bhoomi-hin Daliton ko paanch ekad zameen dene ki maang uthai; unke samarthak unhe sadkon se sadan tak Dalit muddon ko pahunchane wala neta mante hain aur The Hindu ke profile me unhe Gujarat ke Ambedkarite andolan ka neta bataya gaya hai.", sourceLabel: "The Hindu", sourceUrl: "https://www.thehindu.com/news/national/jignesh-mevani-the-dalit-young-turk/article65368379.ece" },
      { head: "Daliton ki zameen ke liye ladai; virodh mamlo me kai baar bari", text: "Saroda gaon ke Daliton ko kagaz par aavantit zameen ka kabza dilane ke liye 2017 me kiye gaye rail-roko andolan ke mamle me January 2024 me court ne Mevani samet 31 aaropiyon ko sandeh ka labh dekar bari kar diya; isse pehle November 2023 aur October 2022 me 2016 ke do aur virodh mamlo me bhi ve bari ho chuke hain — samarthak ise unke andolanon ki naitik jeet mante hain.", sourceLabel: "Indian Express", sourceUrl: "https://indianexpress.com/article/cities/ahmedabad/gujarat-court-acquits-cong-mla-jignesh-mevani-30-others-in-2017-rail-blockade-case-9111669/" },
      { head: "Vadgam me Muslim-Dalit samarthan aadhar; Congress ka Dalit chehra", text: "PTI ki reporting ke mutabik Vadgam ke lagbhag 2.94 lakh matdataon me se kareeb 90,000 Muslim aur 44,000 Dalit matdata nirnayak bhoomika nibhate hain; 2022 me Mevani ne inhi samudayon ke bharose BJP ki record lehar me seat bachaai. Congress ne unhe Gujarat ikai ka working president banakar party ka pramukh Dalit chehra banaya hai.", sourceLabel: "ThePrint (PTI)", sourceUrl: "https://theprint.in/india/gujarat-polls-dalit-leader-jignesh-mevani-retains-vadgam-for-congress-with-slim-margin/1255616/" },
    ],
    criticism: [
      { head: "Gujarat mantri ka \"rashtra se dhokha\" wala bayan; Mevani ka jawab", text: "December 2022 me Gujarat ke mantri Jagdish Vishwakarma (Jagdish Panchal) ne Vadgam ke matdataon par BJP ko na jitane ke liye \"rashtra ko dhokha\" dene ka aarop lagaya. Is par Mevani ne jawab diya ki mantri isliye naraaz hain kyunki BJP karodon Rs kharch karke bhi seat nahi jeet saki, graminon ka apmaan karne ke bajay unhe haar pachani seekhni chahiye.", sourceLabel: "ThePrint (PTI)", sourceUrl: "https://theprint.in/india/gujarat-minister-says-vadgam-voters-betrayed-nation-by-electing-jignesh-mevani/1269683/" },
      { head: "Assam me 2022 ki giraftariyan; sabse taza adalati sthiti (December 2025)", text: "April 2022 me PM Modi par ek tweet ke mamle me Kokrajhar ke ek BJP neta ki shikayat par Assam Police ne Mevani ko Palanpur (Gujarat) se giraftar kiya; zamaanat milte hi Guwahati se Kokrajhar le jaate samay ek mahila police adhikari se durvyavahar ke aarop me doosra mamla darj karke dobara giraftar kiya gaya. Mevani ne dono mamlon ko BJP ki raajnitik badle ki kaarvai bataya aur Barpeta court ne zamaanat dete hue police par \"farzi FIR\" darj karne ki baat kahi. Taza sthiti: 2 December 2025 ko Gauhati High Court ne IPC ki dhara 354 (adhiktam 5 saal ki saza) ka aarop khatm kar diya — court ne kaha ise jaari rakhna \"kanooni prakriya ka durupyog\" hoga — lekin IPC dhara 352 (adhiktam 3 mahine ki saza ya Rs 500 jurmana) par trial jaari rahega.", sourceLabel: "Indian Express", sourceUrl: "https://indianexpress.com/article/cities/ahmedabad/gauhati-hc-discharges-mevani-2022-assault-case-filed-woman-cop-10397089/" },
      { head: "2016-17 ke virodh mamlo me saza; appeal ki sthiti", text: "September 2022 me Ahmedabad ki ek court ne Gujarat University ke Law Bhavan ko Ambedkar Bhavan naam dene ki maang wale 2016 ke road-blockade mamle me Mevani samet 19 logon ko 6 mahine ki saza sunai; October 2022 me sessions court ne saza ko appeal ke niptare tak nilambit karke Rs 15,000 ke bond par zamaanat de di — is appeal ka antim faisla abhi khabron me uplabdh nahi hai. Isi tarah May 2022 me 2017 ki \"Azadi Kooch\" rally bina anumati nikalne ke mamle me mili 3 mahine ki saza par bhi appeal lambit hai. Mevani ka stand raha hai ki ye virodh ke adhikar se jude mamle hain aur raajnitik badle ki bhavna se darj kiye gaye.", sourceLabel: "The Hindu / Indian Express", sourceUrl: "https://indianexpress.com/article/cities/ahmedabad/gujarat-mla-jignesh-mevani-court-jail-sentence-bail-8222292/lite/" },
    ],
  },

  // ---- Alpesh Khodaji Thakor (Gandhinagar South MLA, BJP) ----
  'alpesh-khodaji-thakor': {
    bio: [
      "Alpesh Khodaji Thakor Gujarat ke OBC neta hain jo pehle samajik karyakarta ke roop me ubhre. Unhone Gujarat Kshatriya Thakor Sena ki sthapna ki aur 2015 me Patidar quota andolan ke dauran OBC-SC-ST Ekta Manch ke convener ke roop me Hardik Patel ke andolan ka virodh karke limelight me aaye. 23 October 2017 ko ve Congress me shamil hue.",
      "2017 me unhone Radhanpur se Congress ticket par chunav jeeta. April 2019 me unhone Congress chhod di — unka aarop tha ki party netritva ne unke saath baar-baar apmaan jaisa vyavhaar kiya. 5 July 2019 ko Rajya Sabha upchunavon me BJP ummidwaron ke paksh me vote dene ke baad unhone MLA pad se istifa diya aur July 2019 me BJP me shamil ho gaye. October 2019 me Radhanpur upchunav me ve BJP ticket par Congress ke Raghubhai Desai se 3,807 votes se haar gaye. December 2022 me BJP ne unhe Gandhinagar South se ticket diya aur ve 1,34,051 votes ke saath jeetkar vartaman me Gandhinagar South ke BJP MLA hain.",
    ],
    verdict: [
      { label: "2022 — 1,34,051 vote", detail: "Jeet ka antar 43,064 • Congress ke Himanshu Patel doosre sthan par", sourceLabel: "Times of India / ECI parinaam", sourceUrl: "https://timesofindia.indiatimes.com/india/elections-2022-winners-and-losers/photostory/96112673.cms" },
    ],
    verdictNote: "2019 ke Radhanpur upchunav me haar ke baad ye jeet unki majboot wapsi thi — 43,064 votes ka antar spasht janadesh dikhata hai.",
    support: [
      { head: "OBC samudaay ke pramukh chehre ke roop me ubhre", text: "2015 ke Patidar quota andolan ke samay OBC-SC-ST Ekta Manch ke convener bane aur aarakshan vyavastha bachane ki maang uthayi; Gujarat Kshatriya Thakor Sena ke zariye Thakor samudaay me unhone bada samarthan joda.", sourceLabel: "NDTV", sourceUrl: "https://www.ndtv.com/people/gujarat-elections-2022-5-points-on-alpesh-thakor-bjps-candidate-from-gandhinagar-south-3504540" },
      { head: "2022 me virodh ke bawajood badi jeet", text: "Apni hi party aur apne hi Thakor samudaay ke ek hisse ke virodh ke bawajood unhone 1,34,051 vote paakar Congress ummidwar ko 43,064 votes se haraya.", sourceLabel: "Times of India", sourceUrl: "https://timesofindia.indiatimes.com/india/elections-2022-winners-and-losers/photostory/96112673.cms" },
      { head: "Pidita ke liye nyay ki maang ka daava", text: "2018 me Sabarkantha me 14 mahine ki bachchi ke rape ke baad unhone pidita ke liye nyay ki maang uthayi thi; unka kehna hai ki unka ya unke sangathan ka pravasiyon par hue hamlo se koi lena-dena nahi tha, aur unhone UP aur Bihar ke mukhyamantriyon ko patra likhkar sadbhavna upvas bhi rakha.", sourceLabel: "NDTV", sourceUrl: "https://www.ndtv.com/india-news/no-role-in-attack-on-migrants-in-gujarat-says-congress-mla-alpesh-thakor-1929557" },
    ],
    criticism: [
      { head: "2019 me dal-badal ka aarop", text: "Congress MLA hote hue 5 July 2019 ko Rajya Sabha upchunavon me BJP ke paksh me vote diya, phir MLA pad se istifa dekar July 2019 me BJP me shamil ho gaye — Congress ne ise janadesh ke saath dhokha kaha. October 2019 me Radhanpur upchunav me ve Congress ke Raghubhai Desai se 3,807 votes se haar gaye (73,603 banam 77,410). Unka jawab: Congress me unhe baar-baar apmanit kiya gaya aur BJP me jana unki community aur logon ke hit me tha.", sourceLabel: "The Hindu / Business Standard", sourceUrl: "https://www.business-standard.com/article/news-ani/gujarat-bjp-candidate-alpesh-thakor-loses-radhanpur-by-poll-119102401512_1.html" },
      { head: "Pravasi majdooron par hamle uksane ka aarop (2018)", text: "Sabarkantha rape ke baad Hindi-bhashi pravasiyon par hamle hue to BJP ne Thakor aur unki Gujarat Kshatriya-Thakor Sena par hinsa bhadkane ka aarop lagaya; kuch FIRs me sangathan ka naam aaya. January 2019 me Muzaffarpur court ne ek yachika par unke aur tatkalin Gujarat CM Vijay Rupani ke khilaf FIR darj karne ka aadesh diya. Thakor ne aarop se inkaar kiya — unka kehna tha ki ve sirf rape pidita ke liye nyay maang rahe the.", sourceLabel: "Press Trust of India", sourceUrl: "https://www.business-standard.com/amp/article/pti-stories/court-orders-fir-against-gujarat-cm-alpesh-thakor-for-attacks-on-migrants-from-bihar-119012200937_1.html" },
      { head: "Kanooni mamle — vartaman sthiti", text: "2022 ke ECI halafname (ADR/myneta.info) ke anusaar unke khilaf 6 criminal cases pending ghoshit hain; koi conviction darj nahi hai. Inhi me August 2018 ka Gandhinagar sharab-adde par chhapaemari ka mamla bhi hai, jisme police ne un par aur Hardik Patel-Jignesh Mevani par house-trespass aur false evidence ka case darj kiya tha; teeno netaon ne ise police ki chehra-bachao kaarvai bataya tha.", sourceLabel: "ADR (myneta.info) / DNA", sourceUrl: "https://myneta.info/gujarat2022/index.php?action=summary&subAction=crime&sort=criminal&page=1" },
    ],
  },

  // ---- Wave 1-B (UP + Madhya Pradesh) (researched 2026-10-14) ----
// ---- adityanath (from wave1b_adityanath.ts) ----
  'adityanath': {
    bio: [
      'Yogi Adityanath ka janm 5 June 1972 ko Pauri Garhwal (tab ka Uttar Pradesh, ab Uttarakhand) me Ajay Singh Bisht ke naam se hua. Wo Gorakhnath Math ke Mahant Avaidyanath ke shishya bane aur September 2014 me apne guru ke nidhan ke baad Gorakhnath Math ke Mahant ki gaddi par baithe, jo pad wo aaj bhi nibha rahe hain. 1998 me guru ke nirdesh par rajneeti me aaye aur Gorakhpur Lok Sabha seat se 26 saal ki umr me jeetkar desh ke sabse yuva sansadon me se ek bane; 2017 tak lagatar paanch baar wahan se sansad rahe.',
      '2017 me BJP ko Uttar Pradesh me prachand bahumat milne ke baad 19 March 2017 ko wo rajya ke Mukhyamantri bane. 2022 me BJP ki lagatar doosri jeet ke baad wo tees saal me pehli party ke roop me wapas satta me aaye aur unhone Gorakhpur Urban seat se pehla vidhan sabha chunav ladkar jeeta. Wo UP ke pehle Mukhyamantri hain jinhone lagatar do karyakal poore kiye hain, aur unhone 2002 me Hindu Yuva Vahini naam ka sangathan bhi banaya tha.',
    ],
    verdict: [
      {
        label: '2022 — 1,65,499 vote',
        detail: 'Jeet ka antar 1,03,390 • runner-up: Subhawati Upendra Shukla (Samajwadi Party, 62,109 vote) doosre sthan par',
        sourceLabel: 'PTI / The Hindu BusinessLine',
        sourceUrl: 'https://www.thehindubusinessline.com/news/national/up-elections-yogi-adityanath-wins-gorakhpur-urban-seat-with-whopping-margin-of-103-lakh-votes/article65213602.ece',
      },
    ],
    verdictNote:
      'Ye unka pehla vidhan sabha chunav tha aur unhe kul padhe vote ka 66.18 pratishat mila, jabki SP ummidwar ko 24.84 pratishat vote mile.',
    support: [
      {
        head: 'Mafia ke khilaf abhiyan',
        text: 'UP sarkar ke October 2026 ke aankdon ke mutabiq 2017 se police ne encounters me 303 apraadhi mare, inaamghosit 23,601 apraadhi jail bheje aur Gangsters Act ke tahat Rs 15,233 crore ki sampatti zabt ki. Samarthak isey "mafia raaj" khatm karne ka saboot batate hain.',
        sourceLabel: 'ANI / The Economic Times',
        sourceUrl: 'https://economictimes.indiatimes.com/news/india/over-23000-criminals-arrested-rs-15233-cr-mafia-assets-seized-up-govt-highlights-improved-law-and-order-in-state/articleshow/134652938.cms',
      },
      {
        head: 'Expressway ka jaal',
        text: '29 April 2026 ko PM Narendra Modi ne 594 km lambi Ganga Expressway (Meerut-Prayagraj) ka udghatan kiya. Samarthak kehte hain ki Yogi sarkar me Purvanchal aur Bundelkhand Expressway sahit rajya me expressway network se connectivity aur udyog dono ko raftaar mili.',
        sourceLabel: 'Indian Express',
        sourceUrl: 'https://indianexpress.com/article/cities/lucknow/ganga-expressway-toll-free-travel-dates-rates-meerut-prayagraj-10665623/',
      },
      {
        head: 'Nivesh ka daava',
        text: 'UP Global Investors Summit-2023 me Rs 33.5 lakh crore ke nivesh prastaav aane ka daava sarkar ne kiya, jis se 93 lakh rozgar ke avsar paida hone ki baat kahi gayi aur pehli baar 75 jilon ke liye prastaav aaye. Samarthak kehte hain sudhare kanoon-vyavastha ne UP ko nivesh ke liye surakshit gantavya banaya.',
        sourceLabel: 'Hindustan Times',
        sourceUrl: 'https://www.hindustantimes.com/cities/lucknow-news/up-global-investors-summit-yogi-adityanath-says-groups-of-ministers-senior-officers-to-implement-mous-101676224408219.html?utm_source=linkedin',
      },
    ],
    criticism: [
      {
        head: 'Bulldozer justice par sawal',
        text: 'Aalochak aarop lagate hain ki Yogi sarkar me aparaad ke aaropiyon ke gharon par bulldozer chalakar saja di jaati hai, kabhi-kabhi chuninda taur par. Supreme Court ne 13 November 2024 ko pan-India guidelines di ki bina due process ke dhansti todna unconstitutional hai. Sarkar ka jawab hai ki ye karyavai awaidh nirmaan aur mafia sampatti par hoti hai.',
        sourceLabel: 'Indian Express',
        sourceUrl: 'https://indianexpress.com/article/explained/explained-law/sc-guidelines-illegal-demolitions-9667414/',
      },
      {
        head: '"Thoko niti" ka aarop',
        text: 'Vipaksh aarop lagata hai ki Yogi sarkar "thoko niti" ya farzi encounters ki neeti par chalti hai, jabki sarkari adhikari is aarop se inkaar karte hain. Aalochak kehte hain ki encounter ke aankde adalati prakriya ko bypass karne ka darshaate hain; sarkar kehti hai ye aparaadh par seedhi karyavai hai.',
        sourceLabel: 'NDTV / PTI',
        sourceUrl: 'https://www.ndtv.com/india-news/up-assembly-elections-results-2022-yogi-adityanath-the-monk-who-would-be-chief-minister-again-2815247',
      },
      {
        head: '2007 hate-speech case band',
        text: '2007 me Gorakhpur me hinsa se jode gaye ek kathit hate speech ko lekar Yogi Adityanath par mukadma chalne ki maang uthi thi. Allahabad High Court ne February 2018 me sanction se inkaar me koi prakriyagat galti nahi pai, aur Supreme Court ne August 2022 me chunauti kharij kar di, closure report ke saath mamla band ho gaya, halanki kanoon ka sawal khula chhoda gaya.',
        sourceLabel: 'The Times of India',
        sourceUrl: 'https://timesofindia.indiatimes.com/india/hate-speech-involving-yogi-adityanath-supreme-court-dismisses-plea-against-hc-order/articleshow/93792586.cms',
      },
    ],
  },
  // ---- akhilesh (from wave1b_akhilesh.ts) ----
  'akhilesh': {
    bio: [
      "Akhilesh Yadav ka janm 1 July 1973 ko Saifai (Etawah) me hua; ve Samajwadi Party ke sansthapak Mulayam Singh Yadav ke bete hain. Unhone Dholpur Military School se padhai ke baad Mysore University se civil environment engineering me degree aur 1998 me University of Sydney (Australia) se environmental engineering me Masters kiya. 27 saal ki umr me 2000 me Kannauj upchunav jeetkar ve pehli baar Lok Sabha pahunche, aur 2012 me 38 saal ki umr me Uttar Pradesh ke sabse yuva mukhyamantri bane.",
      "Mukhyamantri ke roop me unka karyakaal 2012 se 2017 tak raha; January 2017 me ve Samajwadi Party ke rashtriya adhyaksh bane aur tab se is pad par hain. 2022 me Karhal se pehli baar Vidhan Sabha chunav jeetkar ve UP Vidhan Sabha me vipaksh ke neta bane, aur June 2024 me Kannauj Lok Sabha seat jeetne ke baad Karhal se istifa dekar ab Kannauj se MP hain.",
    ],
    verdict: [
      {
        label: "2022 — 1.47 lakh se zyada vote",
        detail: "Jeet ka antar 67,000 se zyada vote • runner-up S.P. Singh Baghel (BJP) doosre sthan par (80,045 vote)",
        sourceLabel: "Hindustan Times",
        sourceUrl: "https://www.hindustantimes.com/elections/uttar-pradesh-assembly-election/up-assembly-election-result-akhilesh-yadav-builds-massive-early-lead-in-karhal-101646886107439.html",
      },
    ],
    verdictNote: "Ye unka pehla Vidhan Sabha chunav tha; jeet ke baad ve UP Vidhan Sabha me vipaksh ke neta bane. June 2024 me Kannauj Lok Sabha seat jeetne par unhone Karhal seat se istifa de diya.",
    support: [
      {
        head: "302 km Agra-Lucknow Expressway",
        text: "2016 me unhone 302 km lambe Agra-Lucknow Expressway ka udghatan kiya, jo February 2017 me janta ke liye khula; ye unke mukhyamantri-karyakaal ka sabse bada vikas-daava raha.",
        sourceLabel: "NDTV",
        sourceUrl: "https://www.ndtv.com/india-news/akhilesh-yadav-as-bjps-tejasvi-surya-praises-agra-lucknow-expressway-we-made-it-2775037",
      },
      {
        head: "16 lakh se zyada muft laptop",
        text: "Mukhyamantri rehte 2012 se 2016 tak high school aur intermediate pass chhatron ko 16 lakh se zyada laptop baante gaye; ye yojna unki yuva-kendrit chhavi ka aadhar bani.",
        sourceLabel: "PTI",
        sourceUrl: "https://theprint.in/india/akhilesh-reminds-bjp-of-promise-to-provide-laptops-to-students-ducks-queries-on-bypolls/1020330/",
      },
      {
        head: "2024 me SP ki wapsi",
        text: "Unki netritva me SP ne 2024 Lok Sabha chunav me Uttar Pradesh ki 37 seatein jeetin — pichle chunavon ki haar ke baad party ki zabardast wapsi.",
        sourceLabel: "The Indian Express",
        sourceUrl: "https://indianexpress.com/article/india/uttar-pradesh-election-results-2024-live-updates-lok-sabha-result-bjp-sp-congress-9369370/",
      },
    ],
    criticism: [
      {
        head: "Budaun par kanoon-vyavastha par sawal",
        text: "2014 me Budaun kand ke baad unki sarkar par kanoon-vyavastha ko lekar teekhi aalochna hui; patrakar ke sawal par unki vyangyatmak tippani ki bhi aalochna hui, jabki unhone kaha ki mamle me karyavahi ho rahi hai aur giraftariyan hui hain.",
        sourceLabel: "The Indian Express",
        sourceUrl: "https://indianexpress.com/article/india/india-others/budaun-case-akhilesh-loses-cool/",
      },
      {
        head: "Lagatar chunavi haar (2014-2022)",
        text: "Unki adhyakshata me SP ko 2014 Lok Sabha, 2017 Vidhan Sabha, 2019 Lok Sabha aur 2022 Vidhan Sabha chunavon me lagatar badi haar mili — 2024 ki wapsi se pehle ye unki netritva-kshamta par sabse bada sawal tha.",
        sourceLabel: "Hindustan Times",
        sourceUrl: "https://www.hindustantimes.com/cities/lucknow-news/amid-challenges-akhilesh-set-to-be-re-elected-sp-chief-for-3rd-term-101664305827254.html",
      },
      {
        head: "Halafname me 3 aapradhik mamle",
        text: "2024 ke Lok Sabha halafname me unhone 3 lambit aapradhik mamle ghoshit kiye, jinme se koi gambhir prakriti ka nahi bataya gaya; kul ghoshit sampatti lagbhag Rs 42 crore thi.",
        sourceLabel: "The Hindu",
        sourceUrl: "https://www.thehindu.com/elections/candidates/LokSabha2024/akhilesh-yadav-6236/",
      },
    ],
  },
  // ---- akhilesh-yadav (from wave1b_akhilesh.ts) ----
  'akhilesh-yadav': {
    bio: [
      "Akhilesh Yadav ka janm 1 July 1973 ko Saifai (Etawah) me hua; ve Samajwadi Party ke sansthapak Mulayam Singh Yadav ke bete hain. Unhone Dholpur Military School se padhai ke baad Mysore University se civil environment engineering me degree aur 1998 me University of Sydney (Australia) se environmental engineering me Masters kiya. 27 saal ki umr me 2000 me Kannauj upchunav jeetkar ve pehli baar Lok Sabha pahunche, aur 2012 me 38 saal ki umr me Uttar Pradesh ke sabse yuva mukhyamantri bane.",
      "Mukhyamantri ke roop me unka karyakaal 2012 se 2017 tak raha; January 2017 me ve Samajwadi Party ke rashtriya adhyaksh bane aur tab se is pad par hain. 2022 me Karhal se pehli baar Vidhan Sabha chunav jeetkar ve UP Vidhan Sabha me vipaksh ke neta bane, aur June 2024 me Kannauj Lok Sabha seat jeetne ke baad Karhal se istifa dekar ab Kannauj se MP hain.",
    ],
    verdict: [
      {
        label: "2024 — 1,70,922 vote ke antar se jeet",
        detail: "Jeet ka antar 1,70,922 • runner-up Subrat Pathak (BJP) doosre sthan par",
        sourceLabel: "The Indian Express",
        sourceUrl: "https://indianexpress.com/article/india/uttar-pradesh-election-results-2024-live-updates-lok-sabha-result-bjp-sp-congress-9369370/",
      },
    ],
    verdictNote: "2024 me SP ne UP me 37 Lok Sabha seatein jeetin; Akhilesh ne Karhal Vidhan Sabha seat chhodkar Kannauj se MP ke roop me kaam karne ka faisla kiya.",
    support: [
      {
        head: "302 km Agra-Lucknow Expressway",
        text: "2016 me unhone 302 km lambe Agra-Lucknow Expressway ka udghatan kiya, jo February 2017 me janta ke liye khula; ye unke mukhyamantri-karyakaal ka sabse bada vikas-daava raha.",
        sourceLabel: "NDTV",
        sourceUrl: "https://www.ndtv.com/india-news/akhilesh-yadav-as-bjps-tejasvi-surya-praises-agra-lucknow-expressway-we-made-it-2775037",
      },
      {
        head: "16 lakh se zyada muft laptop",
        text: "Mukhyamantri rehte 2012 se 2016 tak high school aur intermediate pass chhatron ko 16 lakh se zyada laptop baante gaye; ye yojna unki yuva-kendrit chhavi ka aadhar bani.",
        sourceLabel: "PTI",
        sourceUrl: "https://theprint.in/india/akhilesh-reminds-bjp-of-promise-to-provide-laptops-to-students-ducks-queries-on-bypolls/1020330/",
      },
      {
        head: "2024 me SP ki wapsi",
        text: "Unki netritva me SP ne 2024 Lok Sabha chunav me Uttar Pradesh ki 37 seatein jeetin — pichle chunavon ki haar ke baad party ki zabardast wapsi.",
        sourceLabel: "The Indian Express",
        sourceUrl: "https://indianexpress.com/article/india/uttar-pradesh-election-results-2024-live-updates-lok-sabha-result-bjp-sp-congress-9369370/",
      },
    ],
    criticism: [
      {
        head: "Budaun par kanoon-vyavastha par sawal",
        text: "2014 me Budaun kand ke baad unki sarkar par kanoon-vyavastha ko lekar teekhi aalochna hui; patrakar ke sawal par unki vyangyatmak tippani ki bhi aalochna hui, jabki unhone kaha ki mamle me karyavahi ho rahi hai aur giraftariyan hui hain.",
        sourceLabel: "The Indian Express",
        sourceUrl: "https://indianexpress.com/article/india/india-others/budaun-case-akhilesh-loses-cool/",
      },
      {
        head: "Lagatar chunavi haar (2014-2022)",
        text: "Unki adhyakshata me SP ko 2014 Lok Sabha, 2017 Vidhan Sabha, 2019 Lok Sabha aur 2022 Vidhan Sabha chunavon me lagatar badi haar mili — 2024 ki wapsi se pehle ye unki netritva-kshamta par sabse bada sawal tha.",
        sourceLabel: "Hindustan Times",
        sourceUrl: "https://www.hindustantimes.com/cities/lucknow-news/amid-challenges-akhilesh-set-to-be-re-elected-sp-chief-for-3rd-term-101664305827254.html",
      },
      {
        head: "Halafname me 3 aapradhik mamle",
        text: "2024 ke Lok Sabha halafname me unhone 3 lambit aapradhik mamle ghoshit kiye, jinme se koi gambhir prakriti ka nahi bataya gaya; kul ghoshit sampatti lagbhag Rs 42 crore thi.",
        sourceLabel: "The Hindu",
        sourceUrl: "https://www.thehindu.com/elections/candidates/LokSabha2024/akhilesh-yadav-6236/",
      },
    ],
  },
  // ---- dr-mohan-yadav (from wave1b_mohanyadav.ts) ----
  'dr-mohan-yadav': {
    bio: [
      "Dr. Mohan Yadav ka janm 25 March 1965 ko Ujjain me hua. Unki poori rajnaitik neev RSS aur ABVP me hai — unhone 1980 ke dashak ki shuruaat me Ujjain me Akhil Bharatiya Vidyarthi Parishad (ABVP) se judkar chhatra neta ke roop me rajniti shuru ki. 1982 me Madhav Science College chhatra sangh ke saha-sachiv aur 1984 me adhyaksh bane, 1991-92 me ABVP ke rashtriya sachiv aur 1993-95 me Ujjain shahar me RSS ke Kshetra Pracharak rahe. Padhaai bhi saath chali: BSc, LLB, MA (Political Science) aur MBA ke baad 2014 me Vikram University, Ujjain se PhD poori ki — apne pehle MLA karyakaal ke dauraan. 2004-10 me Ujjain Vikas Pradhikaran ke adhyaksh (do baar) aur 2011-13 me MP Tourism Development Corporation ke adhyaksh rahe.",
      "2013 me pehli baar Ujjain South se vidhayak bane, 2018 aur 2023 me seat barkarar rakhte hue lagatar teesri baar MLA bane; July 2020 se Dec 2023 tak Shivraj Singh Chouhan sarkar me Higher Education Minister rahe. 2023 ke vidhan sabha chunav me BJP ne bina CM chehre ke 163 seeton ke saath jeet haasil ki, aur 11 Dec 2023 ko BJP vidhayak dal ne Mohan Yadav ko apna neta chuna — 13 Dec 2023 ko unhone MP ke 19ve mukhyamantri ke roop me shapath li, char baar ke CM Shivraj Singh Chouhan ke uttaradhikari ke roop me. Business Standard ke anusaar Chouhan ne khud unka naam prastavit kiya tha; pichhle 20 saalon me OBC samudaay se rajya ke chauthe mukhyamantri bane. CM ke roop me unhone pehli cabinet me hi dharmik sthalon par loudspeaker par SC/NGT disha-nirdeshon ke anusaar rok aur khule me maas-ande ki bikri par rok ke faisle liye, aur Ladli Behna Yojana ko Nov 2025 se Rs 1,500 prati maah tak badhaya.",
    ],
    verdict: [
      {
        label: '2023 — 95,699 vote',
        detail: 'Jeet ka antar 12,941 vote • runner-up Chetan Premnarayan Yadav (Congress) doosre sthan par, 82,758 vote ke saath',
        sourceLabel: 'Business Standard (ECI aankde) + CNBC TV18',
        sourceUrl: 'https://www.business-standard.com/elections/madhya-pradesh-elections/ujjain-south-constituency-347',
      },
    ],
    verdictNote:
      'Teesri lagatar jeet ke kuch hi din baad 13 Dec 2023 ko mukhyamantri ki shapath li; Ujjain South 2003 se BJP ka gadh mana jata hai.',
    support: [
      {
        head: 'Sangathanik pasandgi',
        text: 'CM daud ke bade naam (Shivraj Singh Chouhan sahit) hote hue bhi vidhayak dal ne unhe neta chuna — Business Standard ke anusaar Chouhan ne khud unka naam prastavit kiya tha. RSS ke karibi maane jaate hain aur OBC chehre ke roop me BJP ki Lok Sabha 2024 se pehle ki ranniti me fit baithe.',
        sourceLabel: 'Business Standard',
        sourceUrl: 'https://www.business-standard.com/elections/madhya-pradesh-elections/mohan-yadav-to-be-next-chief-minister-of-madhya-pradesh-who-is-he-123121200964_1.html',
      },
      {
        head: 'Pehle din ke faisle',
        text: 'Shapath wale din pehli cabinet me dharmik va sarvajanik sthalon par bina anumat ke loudspeaker/DJ par Supreme Court (2005) va NGT ke disha-nirdeshon ke anusaar pratibandh aur khule me maas-ande ki bikri par rok ka aadesh diya; har zila me sound level ki jaanch ke liye flying squad banane ke nirdesh diye.',
        sourceLabel: 'News18 (Moneycontrol)',
        sourceUrl: 'https://www.moneycontrol.com/news/india/in-1st-big-move-as-mp-cm-mohan-yadav-bans-loudspeakers-at-religious-places-open-sale-of-meat-11900781.html',
      },
      {
        head: 'Ladli Behna badhaya',
        text: 'BJP ki flagship Ladli Behna Yojana ko aage badhaya — Nov 2025 se mahana Rs 1,500; Sept 2026 ki 40vi kist tak lagbhag 1.25 crore labharthiyon tak pahunch. Unke anusaar yojana ki shuruaat se 58,000 crore Rs se zyada labharthiyon ko diye gaye.',
        sourceLabel: 'The Hindu',
        sourceUrl: 'https://www.thehindu.com/news/national/madhya-pradesh/ladli-behna-scheme-has-turned-out-to-be-very-expensive-says-madhya-pradesh-cm/article71552264.ece',
      },
    ],
    criticism: [
      {
        head: 'Bina chehre ka chunav',
        text: 'BJP ne 2023 ka chunav bina CM chehre ke (Modi ke naam par) lada; parinaam ke 8 din baad unexpected pick par Congress ne sawal uthaye. Jairam Ramesh ne X par unpar Ujjain masterplan me gadbadi ke gambhir aarop lagaye — ye aarop abhi saabit nahi hue hain.',
        sourceLabel: 'PTI (Telegraph India)',
        sourceUrl: 'https://www.telegraphindia.com/amp/india/is-this-modis-guarantee-for-madhya-pradesh-congress-slams-bjp-for-picking-mohan-yadav-as-chief-minister/cid/1986306',
      },
      {
        head: 'Zameen kharid ke aarop',
        text: 'June 2026 me MP Congress adhyaksh Jitu Patwari ne CM par karyakaal ke dauraan parivaar ki zameen 100 se 335 acre hone ka aarop lagaya (Indian Express ki report ke aadhaar par) aur Supreme Court ke baithte nyayadhish se jaanch maangi. BJP adhyaksh Hemant Khandelwal ne aaropon ko poori tarah niradhar bataya — CM ke 17 acre me koi badlav nahi hua, aur ve 2017 me hi Siddhivinayak Company ke director pad se istifa de chuke the. Aarop abhi pramanit nahi hue.',
        sourceLabel: 'PTI (ABP Live)',
        sourceUrl: 'https://news.abplive.com/cities/madhya-pradesh-land-row-bjp-rejects-allegations-against-cm-mohan-yadav-accuses-congress-of-targeting-obc-leaders-1852382',
      },
      {
        head: 'Ramcharitmanas vivad',
        text: 'Higher Education Minister ke roop me 2021 me BA philosophy ke pehle saal me Ramcharitmanas ko vaikalpik vishay banane va Kulpati ko Kulguru kehne ke prastav ko aalochakon ne shiksha ke bhagwakaran ke roop me dekha. Unhone ise yuvaon me mulya va santulit netritva ke liye zaroori bataya.',
        sourceLabel: 'New Indian Express',
        sourceUrl: 'http://www.newindianexpress.com/nation/2023/dec/11/mohan-yadav-bjps-fresh-obc-face-with-rss-roots-emerges-as-madhya-pradeshs-next-cm-2640577.html',
      },
    ],
  },
  // ---- rahul-gandhi (from wave1b_rahul.ts) ----
  'rahul-gandhi': {
    bio: [
      'Rahul Gandhi ka janm 19 June 1970 ko Delhi me Rajiv Gandhi aur Sonia Gandhi ke ghar hua. Unhone Doon School, St. Stephen’s College aur Harvard me padhai ke baad Rollins College (Florida) se 1994 me graduate kiya aur 1995 me Trinity College, Cambridge se Development Studies me M.Phil kiya. 2004 me Amethi Lok Sabha seat se rajneeti me pravesh kiya aur 2019 tak wahan se sansad rahe; 2019 me Amethi me BJP ki Smriti Irani se haar gaye, lekin Kerala ki Wayanad seat se jeetkar Lok Sabha me bane rahe.',
      'September 2022 se January 2023 tak unhone Kanyakumari se Kashmir tak lagbhag 4,000 km ki Bharat Jodo Yatra 145 din me poori ki, aur January-March 2024 me Manipur se Mumbai tak Bharat Jodo Nyay Yatra nikali. 2024 ke aam chunav me ve Rae Bareli aur Wayanad dono seat se jeete, lekin 18 June 2024 se Wayanad se istifa dekar Rae Bareli seat rakhi. June 2024 me Congress ne unhe Lok Sabha me Vipaksh ka Neta banaya — 10 saal me pehli baar ye pad bhara gaya.',
    ],
    verdict: [
      {
        label: '2024 — 6,87,649 vote',
        detail: 'Jeet ka antar 3,90,030 • runner-up Dinesh Pratap Singh (BJP) doosre sthan par',
        sourceLabel: 'The Hindu (ECI aankde)',
        sourceUrl: 'https://www.thehindu.com/elections/lok-sabha/rahul-gandhi-wins-rae-bareli-lok-sabha-seat-uttar-pradesh-election-results/article68251586.ece',
      },
    ],
    verdictNote:
      '2024 me ve Wayanad se bhi jeete the, lekin Rae Bareli seat rakhne ka faisla kiya — 18 June 2024 se Wayanad se unka istifa swikrit hua. 2019 me isi seat par Sonia Gandhi 1,67,178 vote ke antar se jeeti thi; is baar jeet ka antar dugne se bhi zyada raha.',
    support: [
      {
        head: 'Yatraon se jan-sampark',
        text: 'Kanyakumari se Kashmir tak 145 din ki padayatra aur phir Manipur se Mumbai tak Nyay Yatra ke zariye unhone seedha jan-sampark banaya. Congress netaon ka kehna hai ki in yatraon ne unki jan-chhavi badli aur party ko punarjivit kiya.',
        sourceLabel: 'The Hindu',
        sourceUrl: 'https://www.thehindu.com/news/national/bharat-jodo-yatra-was-massive-booster-dose-for-congress-says-jairam-ramesh/article68616688.ece',
      },
      {
        head: 'Jaati janganana ki maang',
        text: 'Mallikarjun Kharge ke saath milkar unhone PM Modi ko patra likhkar sahi jaati janganana ki maang ki — unka kehna hai ki sahi aankdon ke bina samajik nyay ki neetiyan prabhavi dhang se lagu nahi ho sakti. Ye mudda ve lagatar uthate rahe hain.',
        sourceLabel: 'Indian Express',
        sourceUrl: 'https://indianexpress.com/article/india/mallikarjun-kharge-rahul-gandhi-pm-narendra-modi-letter-caste-census-10848819/',
      },
      {
        head: 'LoP: sakriya vipaksh',
        text: 'June 2024 me Lok Sabha me Vipaksh ke Neta bante hi unhone NEET paper leak mudde par sarkar ko ghera aur pariksha pranali me vyavasthit sudhar ki maang uthayi. Samarthak kehte hain ve yuvaon aur chhatron ke muddon ko sansad me mukhar roop se uthate hain.',
        sourceLabel: 'The Hindu',
        sourceUrl: 'https://www.thehindu.com/news/national/there-is-a-very-serious-problem-with-our-examination-system-rahul-gandhi-questions-govt-on-neet-paper-leak-in-lok-sabha/article68431571.ece',
      },
    ],
    criticism: [
      {
        head: 'Surat maan-hani mamla',
        text: '2019 me Kolar rally me Modi surname par tippani ko lekar BJP MLA Purnesh Modi ne unpar maan-hani ka mukadma kiya tha; Surat court ne unhe doshi thahrakar 2 saal ki saza sunayi, jis par unki Lok Sabha sadasyata chali gayi. August 2023 me Supreme Court ne dosh-siddhi par rok lagayi aur sadasyata bahal hui; court ne unki tippaniyon ko achche swad me nahi bataya tha.',
        sourceLabel: 'Indian Express',
        sourceUrl: 'https://indianexpress.com/article/india/rahul-gandhi-defamation-cases-savarkar-modi-amit-shah-rss-10174021/',
      },
      {
        head: 'Galwan tippani par SC fatkaar',
        text: 'August 2025 me Supreme Court ne 2020 ke Galwan jhadap ke baad Bhartiya Sena par unki kathit tippaniyon ko lekar unhe sakht shabdon me fatkara. Aalochak ise unki vivaadit bayanbazi ka ek aur udaharan batate hain; usi dauran Bharat Jodo Yatra se jude ek maan-hani mamle me court ne karyavahi par rok bhi lagayi thi.',
        sourceLabel: 'Indian Express',
        sourceUrl: 'https://indianexpress.com/article/india/rahul-gandhi-defamation-cases-savarkar-modi-amit-shah-rss-10174021/',
      },
      {
        head: 'Vote chori par ECI ka jawab',
        text: 'August 2025 me unhone ECI par Bengaluru Central ki Mahadevpura seat me 1 lakh se zyada vote churane ka aarop lagaya. ECI ne saboot sahit likhit halafnama manga aur kaha ki vote chori jaise shabd matdataon aur chunav karmiyon ki nishtha par hamla hain. Aalochak kehte hain bina thos saboot ke sanvedhanik sanstha par aarop lagana uchit nahi.',
        sourceLabel: 'The Hindu',
        sourceUrl: 'https://www.thehindu.com/news/national/give-proof-dont-use-dirty-phrases-like-vote-chori-ec-to-opposition/article69931990.ece',
      },
    ],
  },
  // ---- jyotiraditya-m-scindia (from wave1b_scindia.ts) ----
  'jyotiraditya-m-scindia': {
    bio: [
      'Gwalior ke poorv shahi parivar se aane wale Jyotiraditya Scindia ne pita Madhavrao Scindia ke nidhan ke baad 2002 ke upchunav se Guna se chunavi shuruaat ki aur 2004, 2009 aur 2014 me Congress ke ticket par lagatar jeet darj ki — unki dadi Vijayaraje Scindia aur pita Madhavrao Scindia bhi isi seat se sansad reh chuke hain. 2019 me apne hi poorv sahyogi Krishna Pal Yadav (BJP) se 1,25,000 se zyada vote ke antar se haare, jo 2002 ke baad unki pehli Lok Sabha haar thi. March 2020 me 18 saal purani Congress chhodkar 22 samarthak vidhayakon ke saath BJP me shamil hue, Rajya Sabha gaye aur kendriya mantrimandal me Nagrik Uddayan portfolio sambhala (baad me Ispat mantralaya bhi). 2024 me pehli baar BJP ke ticket par Guna se lade aur 9,23,302 vote pakar 5,40,929 ke antar se jeete; aam chunav ke baad ve Sanchar Mantri aur Poorvottar Kshetra Vikas Mantri bane.',
      'Sanchar Mantri ke roop me unke karyakal me BSNL ne 18 saal me pehli baar lagatar do timahi shuddh labh darj kiya — FY25 ki doosri timahi me Rs 262 crore aur teesri timahi me Rs 280 crore — jabki grahak aadhar June 2024 ke 8.5 crore se badhkar 9.1 crore ho gaya; India Post ke liye 24 aur 48 ghante ki guaranteed delivery aur DIGIPIN address system ki ghoshna bhi hui. Apne sansadiya kshetra me ve sakriya MP ke roop me dikhe — Guna-Gwalior kshetra me lagbhag Rs 200 crore ki pariyojnaen (railway overbridge, Guna sports complex, bijli substation) aage badhai, khaad vitaran me gadbadi aur avaidh bajri khanan par adhikariyon se seedhi karwai karwai, aur June 2026 me chaar din ke Guna daure me lagbhag Rs 350 crore ki pariyojnaon (Rs 278 crore ka power substation, solar plant, ITI bhawan, MEMU train) ka udghatan-shilanyas kiya.',
    ],
    verdict: [
      {
        label: '2024 — 9,23,302 vote',
        detail: 'Jeet ka antar 5,40,929 • runner-up Yadvendra Rao Deshraj Singh (Congress) doosre sthan par',
        sourceLabel: 'The Hindu (PTI)',
        sourceUrl: 'https://www.thehindu.com/elections/lok-sabha/jyotiraditya-scindia-election-results-2024-guna/article68249445.ece',
      },
    ],
    verdictNote: '2019 me isi seat se haarne ke baad 2024 me pehli baar BJP ke ticket par Guna se jeet — parivarik gadh me unki wapsi ka sabse spasht sanket.',
    support: [
      {
        head: 'BSNL ka 18 saal baad munafa',
        text: 'Sanchar Mantri ke karyakal me BSNL ne 18 saal me pehli baar lagatar do timahi shuddh labh kamaya — FY25 ki Q2 me Rs 262 crore aur Q3 me Rs 280 crore; grahak aadhar June 2024 ke 8.5 crore se badhkar 9.1 crore ho gaya.',
        sourceLabel: 'The New Indian Express',
        sourceUrl: 'https://www.newindianexpress.com/business/2025/Oct/17/bsnl-showing-signs-of-revival-with-customer-additions-in-recent-months-scindia',
      },
      {
        head: 'Guna me vikas par zor',
        text: 'Guna-Gwalior kshetra me lagbhag Rs 200 crore ki pariyojnaen aage badhai — do railway overbridge, Guna sports complex aur bijli substation; khaad vitaran me gadbadi aur avaidh bajri khanan par adhikariyon se seedhi karwai karwai.',
        sourceLabel: 'The Indian Express',
        sourceUrl: 'https://indianexpress.com/article/political-pulse/why-scindia-governance-overdrive-gwalior-turf-simmering-tussle-10416429/',
      },
      {
        head: 'Dal-badal ke baad bhi jan-samarthan',
        text: '2020 ke dal-badal ke baad upchunavon me Congress ne unhe gaddar batakar prachar kiya, lekin The Hindu ke anusar ye mudda matdataon me khaas asar nahi dikha saka — BJP ne 28 me se 19 seeten jeetin aur 22 me se 15 baghi vidhayak bhi jeete.',
        sourceLabel: 'The Hindu',
        sourceUrl: 'https://www.thehindu.com/news/national/madhya-pradesh-bypolls-bjp-wins-19-out-of-28-seats-congress-bags-nine/article33075071.ece',
      },
    ],
    criticism: [
      {
        head: '2020 dal-badal par gaddar ka aarop',
        text: 'March 2020 me 18 saal purani Congress ko 22 vidhayakon sahit chhodkar BJP me jaane par Congress ne unhe janadesh se vishwasghat ka aarop lagaya. Scindia ka jawab: Kamal Nath sarkar ne karz-mafi jaise vaade poore nahi kiye, 15 mahine tak unhone har darwaza khatkhataya, aur vaade todne wale hi asli gaddar the.',
        sourceLabel: 'The Hindu (PTI)',
        sourceUrl: 'https://www.thehindu.com/news/national/other-states/kamal-nath-digvijaya-biggest-gaddars-bjp-will-win-majority-of-seats-in-bypolls-scindia/article32944015.ece/amp/',
      },
      {
        head: 'Shahi andaz ki chhavi par sawal',
        text: 'September 2026 me Guna me sadak ki maang rakhne par ek matdata ko ye bhasha na istemal karne ki hidayat ka video viral hua, jise lekar social media par unke shahi parivar ki prishthabhoomi ka hawala dekar aalochna hui. Halanki usi daure me unhone Rs 5.34 crore ke degree college samet kai pariyojnaon ka udghatan bhi kiya tha.',
        sourceLabel: 'Outlook India',
        sourceUrl: 'https://www.outlookindia.com/national/jyotiraditya-scindia-faces-backlash-over-viral-guna-road-video-never-use-this-language',
      },
      {
        head: '2019: apne gadh me haar',
        text: '2002 ke upchunav se 2014 tak Guna se lagatar jeetne ke baad 2019 me apne hi poorv sahyogi Krishna Pal Yadav (BJP) se 1,25,000 se zyada vote ke antar se haare — parivarik gadh me unke liye ye bada jhatka tha, jiski bharpai unhone 2024 me 5.4 lakh ke antar se jeetkar ki.',
        sourceLabel: 'Business Standard',
        sourceUrl: 'https://www.business-standard.com/elections/lok-sabha-election/lok-sabha-elections-scindia-s-quest-to-reclaim-guna-seat-intensifies-124042601255_1.html',
      },
    ],
  },
  // ---- shivraj-singh-chouhan (from wave1b_shivraj.ts) ----
  'shivraj-singh-chouhan': {
    bio: [
      'Shivraj Singh Chouhan ka janm 5 March 1959 ko Madhya Pradesh ke Sehore jile ke Jait gaon me ek kisan parivar me hua. 13 saal ki umr me ve RSS se jude, Emergency (1976-77) ke dauran jail gaye, aur Barkatullah University, Bhopal se Philosophy me MA me gold medal hasil kiya. 1990 me Budhni se pehli baar MLA bane, phir 1991 se 2005 tak Vidisha se paanch baar Lok Sabha saansad rahe. 29 November 2005 ko ve Madhya Pradesh ke mukhyamantri bane aur kul lagbhag 18 saal (2005-18 aur 2020-23) tak is pad par rahe — rajya ke sabse lambe samay tak CM.',
      "CM ke roop me unhe 'Mama' ke naam se lokpriyata mili; Ladli Laxmi Yojna, Mukhyamantri Kanyadan Yojna aur Teerth Darshan Yojna jaise kalyan karyakram, 24 ghante bijli aur Indore ko lagatar saat baar 'sabse saaf shehar' ka darja unke karyakal ki pehchan bane. March 2023 me unhone Mukhyamantri Ladli Behna Yojna shuru ki — mahilaon ko seedhi masik aarthik madad — jise 2023 vidhan sabha chunav me BJP ki jeet ka game-changer mana gaya. Vidisha se 2024 Lok Sabha jeet ke baad ve kendra me Krishi evam Kisan Kalyan Mantri bane.",
    ],
    verdict: [
      {
        label: '2024 — 11,16,460 vote',
        detail: 'Jeet ka antar 8,21,408 • runner-up Pratap Bhanu Sharma (Congress) doosre sthan par',
        sourceLabel: 'The Hindu',
        sourceUrl: 'https://www.thehindu.com/elections/lok-sabha/madhya-pradesh-election-results-2024-live/article68210890.ece/amp/',
      },
    ],
    verdictNote: 'Vidisha se ye unki chhathi Lok Sabha jeet thi — 1991 se 2005 tak ve isi seat se paanch baar saansad rah chuke the.',
    support: [
      {
        head: 'Ladli Behna game-changer',
        text: 'March 2023 me unhone Mukhyamantri Ladli Behna Yojna launch ki — mahilaon ko masik aarthik madad (Rs 1000 se shuru, baad me Rs 1250); lakshya 1 crore mahilaen aur budget me Rs 8,000 crore ka pravdhan. CNBC ke anusaar 2023 vidhan sabha chunav me mahila matdan 74.22% se badhkar 76.25% hua aur yojna ko BJP ki jeet ka game-changer mana gaya.',
        sourceLabel: 'CNBC TV18',
        sourceUrl: 'https://www.cnbctv18.com/politics/madhya-pradesh-election-result-2023-landslide-victory-for-bjp-congress-struggles-shivraj-singh-chouhan-kamal-nath-18473501.htm',
      },
      {
        head: 'PM Dhan-Dhaanya Yojna',
        text: 'Kendriya Krishi Mantri ke roop me unke karyakal me July 2025 me cabinet ne PM Dhan-Dhaanya Krishi Yojna ko manzoori di — saalana Rs 24,000 crore ka kharch, 6 saal, 100 jile, 11 mantralayon ki 36 yojnaon ka convergence; lagbhag 1.7 crore kisanon tak pahunch ka lakshya. Chouhan ne kaha ki yojna zilon ke beech utpadakta ke antar ko mitayegi.',
        sourceLabel: 'Financial Express',
        sourceUrl: 'https://www.financialexpress.com/india-news/pm-dhan-dhaanya-yojana-to-get-annual-outlay-of-rs-24000-cr/3916904/',
      },
      {
        head: 'Pehle saal ki samiksha',
        text: 'October 2026 me unhone PMDDKY ke pehle saal ki samiksha ki — pehla saal buniyaad par, doosra saal "dikhne wale parinaam" par kendrit hoga; Gaya (Bihar), Nagaur (Rajasthan) aur Umaria (MP) sarvshreshth jile ghoshit hue. Unhone 22 October se 30 November 2026 tak "Khet Bachao Abhiyan" (mitti ki sehat ke liye santulit khaad) ka elaan bhi kiya.',
        sourceLabel: 'IANS (hi INDiA)',
        sourceUrl: 'https://hiindia.com/pms-dhan-dhaanya-krishi-yojana-to-boost-farmers-incomes-shivraj-chouhan/',
      },
    ],
    criticism: [
      {
        head: 'Mandsaur 2017 firing',
        text: 'June 2017 me Mandsaur me karz maafi aur labhkari daam ki maang par kisan andolan hinsak hua; 6 June ko Pipliamandi me police firing me 5 kisan mare gaye — ye unke CM karyakal ka sabse bada daag mana jata hai. Chouhan ne 10 June se "shanti upvas" rakha aur lagbhag 28 ghante baad samapt kiya; MSP se neeche khareed ko apradh ghoshit karne, Rs 1,000 crore ke Price Stabilisation Fund aur kisan ki sahamati ke bina zameen adhigrahan na karne ki ghoshna ki.',
        sourceLabel: 'Business Standard (IANS)',
        sourceUrl: 'https://www.business-standard.com/article/current-affairs/peace-returns-to-mandsaur-shivraj-singh-chouhan-ends-fast-117061100597_1.html',
      },
      {
        head: 'Vyapam: aarop kharij',
        text: 'Congress (Digvijaya Singh) ne Vyapam bharti ghotala jaanch me hard disk se chhedchhad aur Chouhan ki bhoomika ka aarop lagaya tha. CBI ne 490 logon par charge sheet dayar ki lekin Chouhan ko clean chit de di — CFSL jaanch ke mutabik hard disk me koi chhedchhad nahi mili; unpar kabhi aarop tay nahi hue.',
        sourceLabel: 'Business Standard (IANS)',
        sourceUrl: 'https://www.business-standard.com/article/news-ians/vyapam-scam-cbi-charge-sheet-names-490-mp-cm-gets-clean-chit-117103101520_1.html',
      },
      {
        head: '2023: CM chehra nahi',
        text: '2023 vidhan sabha chunav me BJP ne unhe CM chehra ghoshit nahi kiya; is par unke kinare kiye jane ki atkalen lagi aur ve bhavuk bhi dikhe. Lekin chunaav ke baad ve kendriya mantrimandal me aaye aur 2024 me Vidisha se 8 lakh se zyada ke antar se Lok Sabha jeete.',
        sourceLabel: 'CNBC TV18',
        sourceUrl: 'https://www.cnbctv18.com/politics/madhya-pradesh-election-result-2023-landslide-victory-for-bjp-congress-struggles-shivraj-singh-chouhan-kamal-nath-18473501.htm',
      },
    ],
  },

  // ---- Wave 1-C (Bihar + Rajasthan) (researched 2026-10-14) ----
'samrat-choudhary': {
  bio: [
    'Samrat Choudhary ka janm 16 November 1968 ko Munger zila ke Lakhanpur gaon me hua. Ve ek rajnaitik parivar se aate hain — unke pita Shakuni Choudhary chhe baar vidhayak rahe aur unki maa Parvati Devi Tarapur seat se vidhayak rahin. Unnat shiksha unhone Madurai Kamaraj University se prapt ki. 1990 me unhone rajniti me kadam rakha aur May 1999 me Rabri Devi ki sarkar me Bihar ke Krishi Mantri bane. 2000 aur 2010 me ve Parbatta seat se vidhayak chune gaye, 2010 me vidhan sabha me vipaksh ke chief whip bhi rahe. June 2014 me unhone Jitan Ram Manjhi ki sarkar me Shahari Vikas evam Awas Mantri ka pad sambhala.',
    'RJD se rajnaitik safar shuru karke ve 2014 me JD(U) me aaye aur 2017 me BJP me shamil hue — uske baad unka uday tez raha. 2020 me ve Legislative Council ke sadasya (MLC) bane, March 2023 me BJP ke Bihar Pradesh Adhyaksh, aur January 2024 me Up-Mukhyamantri — unke paas Vitt, Swasthya, Shahari Vikas aur Home jaise ahem vibhag rahe. 2022 me unhone Nitish Kumar ke khilaf kesariya pagdi baandhi thi, jo July 2024 me Ayodhya me Saryu snan ke baad utari. Nitish Kumar ke istefe ke baad 14 April 2026 ko ve NDA ke vidhayak dal ke neta chune gaye, aur 15 April 2026 ko unhone Bihar ke Mukhyamantri ke roop me shapath li — rajya ke pehle BJP Mukhyamantri.',
  ],
  verdict: [
    {
      label: '2025 — 1,22,480 vote',
      detail: 'Jeet ka antar 45,843 • RJD ke Arun Kumar (76,637 vote) doosre sthan par • 15 saal baad Tarapur me vapsi',
      sourceLabel: 'Hindustan Times / ECI aankde',
      sourceUrl: 'https://www.hindustantimes.com/india-news/tarapur-bihar-election-result-2025-live-samrat-choudhary-arun-kumar-santosh-singh-winner-vote-margin-latest-updates-101763061019405.html',
    },
  ],
  verdictNote:
    '45,843 vote ka antar Tarapur ke kul valid vote ka lagbhag 21 pratishat tha — ye seedhe-seedhe saaf janadesh tha, kangal jeet nahi.',
  support: [
    {
      head: 'Amit Shah ka khula samarthan',
      text: 'October 2025 me Tarapur ki rally me Amit Shah ne kaha tha ki agar Samrat Choudhary jeete to kendra unhe badi zimmedari dega — chhah mahine baad wahi hua. ThePrint ke anusaar party ke senior neta unki nou saal me CM tak ki yatra ko meteoric rise batate hain.',
      sourceLabel: 'ThePrint',
      sourceUrl: 'https://theprint.in/india/why-bjp-picked-samrat-chaudhary-as-its-first-bihar-cm-luv-kush-equation-isnt-the-only-reason/2904662/',
    },
    {
      head: 'Kushwaha samuday ka pehla CM',
      text: 'Samarthak aur party neta is niyukti ko Kushwaha (Koeri) samuday ke liye aitihasik mante hain — teen din ke ek transitional CM ko chhod dein to is samuday se pehle koi Bihar ka CM nahi bana tha. ThePrint ke anusaar BJP netaon ne Luv-Kush samikaran ko barkarar rakhne aur non-Yadav OBC vote ko jode rakhne ko is chunav ki badi wajah bataya.',
      sourceLabel: 'ThePrint, The Tribune',
      sourceUrl: 'https://theprint.in/india/why-bjp-picked-samrat-chaudhary-as-its-first-bihar-cm-luv-kush-equation-isnt-the-only-reason/2904662/',
    },
    {
      head: 'Teen CM ke saath mantri ka tajurba',
      text: 'Samarthak unke prashasanik tajurbe ko taakat mante hain — Rabri Devi, Jitan Ram Manjhi aur Nitish Kumar, teeno ki sarkaron me mantri rahe, aur Up-Mukhyamantri ke roop me Vitt, Swasthya, Shahari Vikas aur Home vibhag sambhale. IIT Patna ke Aditya Raj ThePrint ko batate hain ki party ne unhe ek-ek karke zimmedariyan dekar CM pad ke liye taiyaar kiya.',
      sourceLabel: 'The Economic Times, ThePrint',
      sourceUrl: 'https://theprint.in/india/why-bjp-picked-samrat-chaudhary-as-its-first-bihar-cm-luv-kush-equation-isnt-the-only-reason/2904662/',
    },
  ],
  criticism: [
    {
      head: 'Selected CM ka aarop',
      text: '24 April 2026 ke floor test me vipaksh ke neta Tejashwi Yadav ne kaha ki ek chune hue Mukhyamantri ko hatakar ek selected CM laya gaya hai — unka aarop tha ki BJP ne Nitish Kumar ko rajnaitik roop se khatam kar diya jabki 2025 ka janadesh unke naam par mila tha. Ye RJD ka aarop hai — prakriya ki drishti se unhe vidhayak dal ka neta chuna gaya tha.',
      sourceLabel: 'ABP Live',
      sourceUrl: 'https://news.abplive.com/cities/bihar-floor-test-tejashwi-takes-jibe-at-selected-cm-samrat-choudhary-questions-bjp-leadership-1838410',
    },
    {
      head: 'Jamui ki nabalik peedita ki tasveer',
      text: 'September 2026 me Choudhary ne X par Jamui chhedkhani ki nabalik peedita ke saath apni tasveer sajha ki, jo baad me hata li gayi. Tejashwi Yadav ne screenshot save karke POCSO Act ke ullanghan ka aarop lagaya aur Misa Bharti ne FIR ki maang ki. Deccan Herald ke anusaar NDA netaon ki taraf se us waqt koi tippani nahi aayi. Ye virodhiyon ka aarop hai.',
      sourceLabel: 'Deccan Herald',
      sourceUrl: 'https://www.deccanherald.com/india/bihar/jamui-molestation-case-bihar-cm-samrat-choudhary-faces-criticism-for-revealing-minor-girls-identity-4158979',
    },
    {
      head: 'Degree aur halafname par sawal',
      text: 'Chunav se pehle Jan Suraaj ke Prashant Kishor ne aarop lagaya tha ki PhD ka dawa karne wale Choudhary ne matriculation tak pass nahi kiya aur chunavi halafname me umr galat likhi — Choudhary ne in aaropon ka khandan kiya tha. The Tribune ne purani reporting ka hawala diya ki 2000 me umr-vivaad ke chalte unhe mantri pad se hataya gaya tha; Choudhary ka kehna hai ki us samay unhe Lalu sarkar ne phansaya tha.',
      sourceLabel: 'ThePrint, The Tribune',
      sourceUrl: 'https://theprint.in/india/why-bjp-picked-samrat-chaudhary-as-its-first-bihar-cm-luv-kush-equation-isnt-the-only-reason/2904662/',
    },
  ],
},
  'tejashwi-prasad-yadav': {
    bio: [
      'Tejashwi Yadav ka safar cricket ke maidan se Bihar ki rajneeti tak ka hai. 9 November 1989 ko janme ve Lalu Prasad Yadav aur Rabri Devi ke chhote bete hain. Kishoravastha me ve ek honhaar cricketer the — Virat Kohli ki kaptaani wali Delhi U-15 team me khele, 2008 ke India U-19 World Cup squad ke standby rahe, Jharkhand ke liye Ranji Trophy me pratham shreni ka ek match khela, aur kai season tak Delhi Daredevils ke squad me bench par baithe rahe, magar IPL me kabhi ek match nahi khel sake. 2015 me unhone cricket se sannyas lekar rajneeti me kadam rakha aur Raghopur se pehli baar vidhayak chune gaye — usi saal ve 26 saal ki umr me desh ke sabse yuva up-mukhyamantri bane (Indian Express).',
      '2020 ke chunav me ve Mahagathbandhan ke mukhyamantri chehra the aur "10 lakh sarkari naukri" ke vade ne unke prachar ko zabardast pratikriya dilayi — RJD vidhansabha me sabse badi party bani (The Hindu). 2020-25 tak ve vipaksh ke neta rahe. Beech me 17 mahine ke Mahagathbandhan karyakaal me phir up-mukhyamantri bante hue unhone 2 November 2023 ko Gandhi Maidan me ek hi din me 1,20,336 shikshakon ko niyukti patra bantwaye — isse unki "rojgar wali" chhavi mazboot hui. 2025 me ve Raghopur se teesri baar vidhayak chune gaye.',
    ],
    verdict: [
      {
        label: '2025 — 1,18,597 vote',
        detail: 'Jeet ka antar 14,532 • BJP ke Satish Kumar (1,04,065 vote) doosre sthan par • Raghopur seat lagatar teesri baar, 2015 se isi seat par kabiz',
        sourceLabel: 'PTI / ECI parinaam',
        sourceUrl: 'https://sahilonline.org/tejashwi-yadav-wins-raghopur-seat-secures-14532-vote-lead-over-bjp-candidate',
      },
    ],
    verdictNote:
      'Ve 2015 se Raghopur se lagatar jeet rahe hain — har baar BJP ke Satish Kumar ko hara kar. Jeet ka antar 2015 me 22,733 aur 2020 me 38,174 tha, jo 2025 me ghat kar 14,532 reh gaya, magar seat unke paas hi rahi.',
    support: [
      {
        head: 'Rojgar ka mudda unki pehchan',
        text: 'Samarthak unhe berozgari ko Bihar ki rajneeti ke kendra me lane wala neta mante hain. 2020 ke "10 lakh naukri" vade se lekar 17 mahine ke up-mukhyamantri karyakaal tak — jisme RJD ka daava hai ki 5 lakh se zyada naukriyan di gayin — party ne "naukri matlab Tejashwi Yadav" ka nara diya. RJD ke Rajya Sabha sadasya Sanjay Yadav ke anusaar Tejashwi ki wajah se hi rojgar rajya ke raajnaitik vimarsh ka kendriya mudda bana.',
        sourceLabel: 'TOI, Nov 2024',
        sourceUrl: 'https://timesofindia.indiatimes.com/city/patna/rjd-celebrates-tejashwi-yadavs-job-creation-initiatives-in-bihar/articleshow/114896500.cms',
      },
      {
        head: 'Mahilaon ke liye samman-sahayata ka vada',
        text: '2025 ke manifesto "Bihar ka Tejashwi Pran" me unhone "Mai Bahin Maan Yojana" ke tahat mahilaon ko har mahine Rs 2,500 ki aarthik sahayata aur har parivar ke ek sadasya ko sarkari naukri ka vada kiya. Samarthak ise garib mahilaon ke liye samman-sahayata aur samajik nyay ki raah ke roop me dekhte hain.',
        sourceLabel: 'PTI (dnaindia)',
        sourceUrl: 'https://www.dnaindia.com/india/report-bihar-elections-2025-mahagathbandhan-releases-poll-manifesto-tejashwi-pran-patra-promises-govt-jobs-rs-2500-monthly-for-women-rjd-congress-3185728/amp',
      },
      {
        head: 'Raghopur me lagatar jeet',
        text: 'Samarthak 2015 se Raghopur par unki lagatar jeet ko seat par unki vyaktigat pakad ka saboot mante hain. 2025 me unhone wahi BJP ummidwar Satish Kumar ko teesri baar hara kar seat ki hat-trick poori ki — ye unke parivarik gadh me unki nirantarta dikhata hai.',
        sourceLabel: 'PTI',
        sourceUrl: 'https://www.devdiscourse.com/article/politics/3698064-tejashwi-yadav-secures-raghopur-hat-trick-in-bihar',
      },
    ],
    criticism: [
      {
        head: 'IRCTC-LARA mamle me charge-framing',
        text: 'ED ke money-laundering mamle me Rouse Avenue Court ne 10 September 2026 ko Tejashwi sahit 9 aaropiyon par aarop tay karne ka aadesh diya — ED ke anusaar Sujata Hotels ke nideshakon ne Patna ki zameen kam daam par Delight Marketing ko di, jiske share baad me Rabri Devi aur Tejashwi Yadav ko nam-matra ke daam par transfer hue aur company ka naam badal kar Lara Projects rakha gaya. Nyayadhish ke tabadle ki prakriyagat wajah se aupcharik framing 3 October ko tal kar 30 October 2026 tak sthagit hui. CBI mamle me 13 October 2025 ko hi unpar aaparaadhik saazish aur dhokhadhadi ke aarop tay ho chuke hain. Tejashwi ise shuru se "rajnaitik badle ki karyavahi" batate aaye hain.',
        sourceLabel: 'PTI (Deccan Herald), The Hindu',
        sourceUrl: 'https://www.deccanherald.com/amp/story/india/irctc-scam-case-delhi-court-defers-formal-framing-of-money-laundering-charges-against-lalu-yadav-8-others-4169215',
      },
      {
        head: '"Jungle raj" ki wapsi ka aarop',
        text: '2025 ke chunav prachar me Amit Shah aur Nitish Kumar ne matdataon ko chetavni di ki RJD ki satta wapsi "jungle raj" ki wapsi hogi. Shah ne Muzaffarpur ki sabha me kaha ki agar Tejashwi mukhyamantri bane to "apaharan, firouti aur hatya ke liye teen naye vibhag" khul jayenge. Tejashwi ne iska jawab dete hue kaha ki NDA shasan ki vifaltaon se dhyan bhatka rahi hai.',
        sourceLabel: 'The Hindu, Oct 2025',
        sourceUrl: 'https://www.thehindu.com/elections/bihar-assembly/amit-shah-nitish-kumar-warn-of-the-return-of-jungle-raj-with-the-rjd-tejashwi-pushes-back/article70229599.ece/amp/',
      },
      {
        head: 'Vade "jhooth ka pulinda"',
        text: 'Manifesto "Bihar ka Tejashwi Pran" jari hone ke turant baad BJP neta Ravi Shankar Prasad ne ise "jhooth ka pulinda" kaha. Kendriya mantri Piyush Goyal ne har parivar ke ek sadasya ko sarkari naukri ke vade ko arthik roop se asambhav bataya aur kaha ki ye "jhooth ka pulinda" hai, jabki JD(U) ne bhi 2.76 crore parivaron ko naukri dene ki vyavaharikta par sawal uthaye.',
        sourceLabel: 'PTI, ANI',
        sourceUrl: 'https://www.ahmedabadmirror.com/india-bloc-unveils-bihar-manifesto/81901642.html',
      },
    ],
  },
'bhajan-lal-sharma': {
  bio: [
    'Bhajan Lal Sharma Bharatpur jile ke Nadbai kshetra ke Atari gaon ke mool nivasi hain aur Brahmin samudaay se aate hain. Unki rajneeti ki shuruat RSS ke chhatra sangathan ABVP se hui — 1990 me Kashmiri Panditon par hamlo ke khilaf Srinagar march ke dauraan ve Udhampur me giraftar hue, aur 1992 me Ayodhya me Ram mandir andolan ke dauraan jail gaye. 27 saal ki umr me ve sarpanch bane aur lagatar do baar is pad par rahe; uske baad BJYM ke jila adhyaksh (teen baar), BJP ke Bharatpur jila mantri aur adhyaksh, pradesh upadhyaksh aur phir pradesh mahamantri bane. Teen dashak tak sangathan me kaam karne ke kaaran BJP me ve "organisation man" ke roop me jane jate hain. Chunav halafname ke anusaar unhone Rajasthan Vishwavidyalaya se rajniti shastra me MA kiya hai.',
    '2023 me ve pehli baar BJP ke ummidwar ke roop me Sanganer se vidhayak ka chunav lade aur 48,081 voton ke antar se jeete — 2003 me ve Rajasthan Samajik Nyay Manch ke ticket par Nadbai se chunav ladkar paanchve sthan par rahe the. 12 December 2023 ko vidhayak dal ki baithak me poorv mukhyamantri Vasundhara Raje ne khud unka naam prastavit kiya aur ve Rajasthan ke mukhyamantri chune gaye; pehli baar vidhayak bante hi seedhe CM ki kursi tak pahunchna rajya ki rajneeti me durlabh hai. CM ke roop me unki pehchan paper-leak ke khilaf sakhti se bani — shapath wale din hi unhone SIT ke gathan ka ailaan kiya, jo 16 December 2023 ko gathit hui.',
  ],
  verdict: [
    {
      label: '2023 — 1,45,162 vote',
      detail: 'Jeet ka antar 48,081 • Congress ke Pushpendra Bhardwaj (97,081 vote) doosre sthan par • BJP ne seat barkarar rakhi',
      sourceLabel: 'Business Standard / ECI parinaam',
      sourceUrl: 'https://www.business-standard.com/elections/rajasthan-elections/sanganer-constituency-535',
    },
  ],
  verdictNote:
    'Pehli baar vidhayak bante hi seedhe mukhyamantri banna Rajasthan ki rajneeti me durlabh hai — Sanganer ke matdataon ne unhe 48,081 voton ke spasht antar se jitaya, jo ECI ke aankdon me darj hai.',
  support: [
    {
      head: 'Sangathan ka aadmi, kendriya netritva ka bharosa',
      text: 'Chaar baar pradesh mahamantri aur teen dashak sangathan me kaam — CM ki daud me unka naam tha hi nahi, phir bhi 12 December 2023 ko Vasundhara Raje ne khud unka naam vidhayak dal ke neta ke roop me prastavit kiya. PTI ke anusaar ve 2021 ke Bengal chunav me Amit Shah ke abhiyan sahayak rahe, jinse senior neta prabhavit bataye gaye.',
      sourceLabel: 'PTI, Indian Express',
      sourceUrl: 'https://indianexpress.com/about/bhajan-lal-sharma/',
    },
    {
      head: 'Paper-leak par turant SIT',
      text: 'Shapath wale din hi unhone paper-leak mamlo ki jaanch ke liye SIT ka ailaan kiya; SIT 16 December 2023 ko gathit hui. PTI ke anusaar SOG ne 56 prashikshu up-nirikshakon sahit kai aaropiyon ko giraftar kiya, aur Sharma ka daava hai ki dedh saal me ek bhi paper leak nahi hua aur parikshayen pardarshi tareeke se hui.',
      sourceLabel: 'PTI (The Week)',
      sourceUrl: 'https://www.theweek.in/wire-updates/national/2025/08/29/des135-rj-paper-leak-cm.amp.html',
    },
    {
      head: 'Do saal me koi bada bhrashtachar ka aarop nahi',
      text: 'Indian Express (March 2026) ke anusaar Gehlot sarkar ke paper-leak, mid-day meal ghotala aur red diary jaise vivaadon ke ulat Sharma sarkar par ab tak koi bada vivaad ya bhrashtachar ka aarop nahi laga hai.',
      sourceLabel: 'Indian Express',
      sourceUrl: 'https://indianexpress.com/article/political-pulse/rajasthan-bjp-stalwarts-bhajan-lal-sharma-struggles-find-feet-10585245/',
    },
  ],
  criticism: [
    {
      head: 'Anubhavheen hone ka vipakshi hamla',
      text: 'Poorv mukhyamantri Ashok Gehlot ne kaha ki Sharma yuva hain, pehli baar vidhayak aur pehli baar mukhyamantri bane, isliye bahut si cheezein nahi jante. Deputy CM Prem Chand Bairwa ne jawab diya ki ve pradhanmantri ke vision ko aage badha rahe hain aur unka kaam janta sarah rahi hai, isliye Gehlot ko ye hazam nahi ho raha.',
      sourceLabel: 'NDTV',
      sourceUrl: 'https://www.ndtv.com/india-news/rajasthan-chief-minister-bhajan-lal-sharma-is-young-does-not-know-many-things-says-ashok-gehlot-8779272',
    },
    {
      head: 'Naukarshahi par nirbharta ka aarop',
      text: 'Indian Express (March 2026) ke anusaar rajya ke rajnaitik halqon me, BJP ke ek hisse sahit, unhe anubhavheen aur naukarshahi par atyadhik nirbhar mana jata hai. BJP vidhayakon Shankar Singh Rawat aur Gopal Sharma ne aarop lagaya ki sarkar afsaron par nirbhar hai aur vidhayakon tatha karyakartaon ki sunvai nahi hoti.',
      sourceLabel: 'Indian Express',
      sourceUrl: 'https://indianexpress.com/article/political-pulse/rajasthan-bjp-stalwarts-bhajan-lal-sharma-struggles-find-feet-10585245/',
    },
    {
      head: 'SI bharti pariksha par nirnay me deri',
      text: '2021 ki SI bharti pariksha me vyapak paper-leak ke baad High Court ne 28 August 2025 ko poori pariksha radd kar di. Swarajya ke anusaar SIT, SOG aur up-samiti se jaanch ki neenv sarkar ne khud taiyaar ki thi, lekin adalat me sarkar ne pariksha radd na karne ka paksh rakha aur faisle me deri par adalat ki fatkaar bhi jhelni padi — jis par unki nirnay-kshamta par sawal uthe.',
      sourceLabel: 'Swarajya',
      sourceUrl: 'https://swarajyamag.com/states/bhajan-lal-sharmas-missed-moment-rajasthan-high-court-cancels-si-exam-over-corruption',
    },
  ],
},
'ashok-gehlot': {
  bio: [
    'Ashok Gehlot Rajasthan Congress ke sabse anubhavi netaon me gine jate hain. 1980 me ve Jodhpur se pehli baar Lok Sabha chunav jeete; 1982-84 me Indira Gandhi sarkar me tourism, civil aviation aur sports ke deputy minister rahe, phir Rajiv Gandhi sarkar me tourism aur civil aviation ke minister of state bane. 1991-93 me P V Narasimha Rao sarkar me textiles ke minister of state (independent charge) rahe. 1985, 1994 aur 1997 me ve Rajasthan Congress ke pradesh adhyaksh rahe aur 2013-18 me AICC ke general secretary. 1998 me unke netritva me Congress ne 1990 aur 1993 ki lagatar haar ke baad Rajasthan me jabardast wapasi ki.',
    '1998 me Sardarpura se vidhan sabha chunav jeetkar ve pehli baar Rajasthan ke mukhyamantri bane aur 2003 tak is pad par rahe; phir 2008-13 aur 2018-23 me do aur karyakal poore kiye — teen baar CM. Sardarpura se ve 1998 ke baad har vidhan sabha chunav jeete hain. Media me unka upnaam Jadugar hai — The Hindu ne 2023 me likha tha ki jadugar samuday se aane wale Gehlot matdataon par apna jadu chala sakte hain, jabki The Tribune ne isi upnaam ke saath unki kalyankari yojnaon ka zikr kiya: Chiranjeevi Swasthya Bima Yojana me Rs 25 lakh tak cashless ilaj, 100 unit tak muft gharleu bijli, kisanon ko 2000 unit tak muft bijli, Rs 500 ke LPG cylinder, mahilayon ko muft mobile phone aur Indira Rasoi.',
  ],
  verdict: [
    {
      label: '2023 — 96,859 vote',
      detail: 'Jeet ka antar 26,396 • BJP ke Dr Mahendra Rathore (70,463 vote) doosre sthan par • pradesh me BJP ki sarkar bante hue bhi seat barkarar',
      sourceLabel: 'NDTV / ECI parinaam',
      sourceUrl: 'https://www.ndtv.com/elections/rajasthan-assembly-election-results-2023/sardarpura',
    },
  ],
  verdictNote:
    'BJP ki wave me Congress sirf 69 seat par simat gayi, lekin Sardarpura ke matdataon ne Gehlot ko chhathi baar lagatar chuna — 26,396 vote ke antar ke saath. Kisi bhi neta ke baare me janta ki rai ka isse pakka aur napaa-tula saboot nahi hota.',
  support: [
    {
      head: 'Kalyankari yojnaon ki pehchan',
      text: 'Chiranjeevi Swasthya Bima Yojana Rs 25 lakh tak cashless ilaj ke saath deshbhar me mashhoor hui; uske saath 100 unit muft gharleu bijli, kisanon ko 2000 unit tak muft bijli, Rs 500 ke LPG cylinder, mahilayon ko muft mobile phone aur Indira Rasoi — The Tribune ke anusaar inhi yojnaon ke dam par Gehlot 2023 ka chunav jeetne ki ummeed lagaye the. BJP sarkar ne baad me inme se kam se kam 10 yojnaon ko naye naam se jaari rakha, matlab yojnaon ki lokpriyata ko virodhi sarkar bhi nakar nahi saki.',
      sourceLabel: 'The Tribune, The Statesman',
      sourceUrl: 'https://www.thestatesman.com/india/bjp-govt-in-rajasthan-rechristens-10-schemes-of-previous-gehlot-regime-1503370012.html',
    },
    {
      head: 'Jadugar ki chhavi aur labharthi-kendrit sarkar',
      text: 'Media me unka upnaam Jadugar hai, aur The Hindu ne 2023 me likha tha ki unki sarkar ka yojnaon ka pitara har varg ke liye bhara hai — Labharthi Utsav jaise ayojanon me ve khud video conference par labharthiyon se yojnaon ka hisab lete dikhe. Ye seedhi labharthi-pahunch unke samarthan ka aadhar bani.',
      sourceLabel: 'The Hindu',
      sourceUrl: 'https://www.thehindu.com/opinion/op-ed/ashok-gehlot-tries-out-his-welfare-card/article66943667.ece/amp/',
    },
    {
      head: 'Sardarpura me lagatar vishwas',
      text: 'India TV ke anusaar Sardarpura Congress ka gadh mana jata hai aur Gehlot 1998 se yahan har chunav jeete hain; 2018 me unhe 63 pratishat vote mile the. 2023 me pradesh me BJP ki sarkar bante hue bhi ye seat unhone 26,396 ke antar se barkarar rakhi.',
      sourceLabel: 'India TV',
      sourceUrl: 'https://www.indiatvnews.com/rajasthan/ashok-gehlot-files-nomination-from-sadarpura-assembly-constituency-rajasthan-elections-congress-bjp-vasundhara-raje-latest-updates-2023-11-06-901434',
    },
  ],
  criticism: [
    {
      head: 'Paper-leak par BJP ke hamle',
      text: 'Oct 2023 me chunav se pehle sarkari bharti parikshon ke paper-leak mudde par kendriya mantri Gajendra Singh Shekhawat ne Gehlot sarkar ko sadi ki sabse bhrasht sarkar tak kaha; ED ne paper-leak case me Congress pradesh adhyaksh ke thikanon par chhapa mara. Gehlot ka jawab tha ki sarkar girane me nakaam rehkar BJP kendriya agencies ke zariye unhe nishana bana rahi hai.',
      sourceLabel: 'The Hindu',
      sourceUrl: 'https://www.thehindu.com/news/national/other-states/congress-politicising-ed-raids-in-rajasthan-exam-paper-leak-case-bjp/article67461480.ece/amp/',
    },
    {
      head: 'Law-and-order par sawal',
      text: '2023 chunav prachar me PM Modi ne khud Gehlot ke Sardarpura kshetra me rally karke rajya me law-and-order bigadne, pichhle saal Jodhpur me hui sampradayik hinsa aur tushtikaran ki niti ke aarop lagaye; sath me red diary me Congress ke bhrashtachar ke record hone ka daava doharaya. Gehlot ne red diary ko BJP mukhyalay ki rachi sazish batakar kharij kiya.',
      sourceLabel: 'Business Standard',
      sourceUrl: 'https://www.business-standard.com/amp/elections/rajasthan-elections/pm-modi-attacks-rajasthan-govt-on-paper-leaks-corruption-law-order-123100600500_1.html',
    },
    {
      head: 'Pilot ke saath tanav',
      text: 'Dono paksh — 2020 ke vidroh ke baad Gehlot ne Pilot ko nikamma, nakara kaha, aur Nov 2022 me NDTV interview me gaddar tak kaha, daava kiya ki 2020 ka vidroh BJP ke paise se hua tha. Pilot ne ise mud-slinging aur false and baseless aarop bataya, kaha ki aise shabd unke sanskaron me nahi. Sept 2022 me Gehlot ke samarthak vidhayakon ne CLP baithak ka bahishkar kar diya tha, jiske baad Gehlot ne Sonia Gandhi se maafi maangi aur Congress adhyaksh ka chunav ladne se inkar kar diya.',
      sourceLabel: 'CNBC TV18, Business Standard',
      sourceUrl: 'https://www.cnbctv18.com/politics/ashok-gehlot-calls-sachin-pilot-gaddar-as-tug-of-war-for-rajasthan-cm-post-continues-15259091.htm/amp',
    },
  ],
},
  'sachin-pilot': {
    bio: [
      'Sachin Pilot (janm 7 September 1977) Congress neta Rajesh Pilot ke bete hain — Rajesh Pilot 2000 me Dausa me sadak haadse me nidhan hone tak kendriya mantri rahe the. St Stephens College (Delhi) se angrezi sahitya me degree, IMT Ghaziabad se marketing me diploma aur University of Pennsylvania ke Wharton School se MBA ke baad unhone BBC ke Delhi bureau aur General Motors me do saal kaam kiya. Ve Bhartiya Sena ki Territorial Army me Captain bhi hain.',
      '2004 me Dausa se Lok Sabha chunaav jeetkar ve 26 saal ki umr me desh ke sabse yuva sansad bane; 2009 me Ajmer se dobara jeete aur UPA sarkar me 2009-12 me Communications and IT ke rajya mantri, phir 2012-14 me Corporate Affairs ke swatantra prabhar wale rajya mantri rahe. 2014 me Ajmer se haar ke baad ve Rajasthan Congress ke adhyaksh bane — paanch saal me paanch lakh km se zyada yatra karke party ko 2013 ki 21 seaton se nikal kar 2018 me satta me lautaya. 2018-20 me ve up-mukhyamantri rahe, lekin July 2020 me 18 vidhayakon ke saath ki gayi bagawat ke baad unhe dono padon se hata diya gaya; kendriya netritva ke hastakshep se sulah hui aur Tonk se 2018 aur 2023 me lagatar jeete.',
    ],
    verdict: [
      {
        label: '2023 — 105,812 vote',
        detail: 'Jeet ka antar 29,475 • BJP ke Ajit Singh Mehta (76,337 vote) doosre sthan par • 56.12% vote share ke saath seat barkarar',
        sourceLabel: 'ECI results (Business Standard)',
        sourceUrl: 'https://www.business-standard.com/elections/rajasthan-elections/tonk-constituency-576',
      },
    ],
    verdictNote:
      '2023 me poore Rajasthan me Congress ki haar ke bawajood Tonk ke matdataon ne Pilot ko saaf antar se dobara chuna — kisi bhi neta ke baare me janta ki rai ka isse pakka aur napaa-tula saboot nahi hota.',
    support: [
      {
        head: 'Gujjar samudaay me majboot pakad',
        text: 'Congress unhe Gujjar matdataon me khaas pakad wala neta manti hai — kul vote base ka 6 se 10 pratishat hissa rakhne wale is samudaay me unki sweekariti party ke liye chunavi taakat hai. 2023 me PM Modi ne bhi unke naam par Gujjaron ko sambodhit karke is asar ko sweekara.',
        sourceLabel: 'NDTV',
        sourceUrl: 'https://www.ndtv.com/india-news/rajasthan-assembly-election-news-sachin-pilot-sachin-pilot-the-congress-rajasthan-chief-minister-in-waiting-4604508',
      },
      {
        head: 'Yuva matdataon ka pasandida chehra',
        text: 'Rajasthan me unhe youth icon mana jata hai — rallyon me yuva samarthakon ka khula samarthan milta hai aur unki charismatic chhavi party ki yuvaon tak pahunch badhati hai.',
        sourceLabel: 'NDTV',
        sourceUrl: 'https://www.ndtv.com/india-news/rajasthan-assembly-election-news-sachin-pilot-sachin-pilot-the-congress-rajasthan-chief-minister-in-waiting-4604508',
      },
      {
        head: '2018 me Congress ki wapasi ke sutradhar',
        text: 'PCC adhyaksh ke roop me unhone party ko haathon-hath joda — Congress karyakartaon ke anusaar unke approach ne party ke andar aur bahar dono taraf samarthak banaye, aur 2013 ki 21 seaton se 2018 me satta me wapasi ka shrey mukhya roop se unki mehnat ko jata hai.',
        sourceLabel: 'Livemint, Indian Express',
        sourceUrl: 'https://www.livemint.com/Politics/mw9bXuyTh0VX5qPkc7uRBK/Sachin-Pilot-the-pilot-who-helped-drive-Congress-to-victory.html?facet=amp',
      },
    ],
    criticism: [
      {
        head: '2020 ki bagawat ka daag',
        text: 'July 2020 me apni hi sarkar ke khilaf 18 vidhayakon ke saath khule virodh ke baad unhe up-mukhyamantri aur Rajasthan Congress adhyaksh dono padon se hataya gaya. Aalochakon ne ise satta ka khel bataya, jabki Pilot ka kehna tha ki ve sarkar ke kaamkaj se asantushti jata rahe the. Sulah ke baad unhone kaha ki Congress adhyaksh ne jo tay kiya hai, usi par chalenge.',
        sourceLabel: 'The New Indian Express, Aug 2020',
        sourceUrl: 'https://www.newindianexpress.com/amp/story/nation/2020/Aug/14/after-gehlot-pilot-patch-up-congress-to-move-confidence-motion-in-rajasthan-assembly-2183112.html',
      },
      {
        head: 'Gehlot ke teekhe hamle',
        text: '2020 ke baad Ashok Gehlot ne unhe "nikamma" aur "nakara" kaha aur unpar sarkar girane ki sajish ka aarop lagaya. Pilot ne 2022 me iska jawab halke andaz me diya — kaha ki Gehlot anubhavi varishth hain, isliye bura nahi mante aur unka dhyan sarkar ki wapasi par hai.',
        sourceLabel: 'The New Indian Express, June 2022',
        sourceUrl: 'https://www.newindianexpress.com/nation/2022/jun/28/dont-take-offence-togehlots-comment-pilot-2470507.html',
      },
      {
        head: 'CM pad ka sawal jo peechha nahi chhodta',
        text: '2018 me Gehlot ke CM banne ke baad se unki har khabar CM-pad ki daud se judi rahi. Aalochakon ka kehna hai ki zyadatar party vidhayakon ki nishtha Gehlot ke saath rahi aur kuch unhe sahkarmiyon ke liye mushkil batate hain, jabki samarthakon ka maanana hai ki unhone 2018 ki jeet me yogdaan ke dam par CM ka haq kama liya tha. Pilot ne 2023 me kaha ki CM chehra ghoshit karne ki parampara nahi hai — chunav ke baad vidhayak faisla karenge.',
        sourceLabel: 'Indian Express, NDTV',
        sourceUrl: 'https://indianexpress.com/article/political-pulse/the-sachin-pilot-story-eyes-on-the-sky-but-clipped-wings-8550930/lite/',
      },
    ],
  },
  // ---- Vijay Kumar Sinha (researched 2026-10-14) ----
  'vijay-kumar-sinha': {
    bio: [
      'Vijay Kumar Sinha BJP ke varishth neta hain jinhone Lakhisarai se 2005 me pehli baar chunav jeeta; usi saal dobara hue chunav me haarne ke baad 2010 se ye seat lagaatar jeet rahe hain. BJP ke yuva morcha (BJYM) aur Kisan Morcha ke rajya mahasachiv ke padon se sangathan me kaam karte hue ve 2017-2020 me Nitish Kumar sarkar me Shram Sansadhan Mantri rahe, aur RSS se unka purana judaav hai.',
      '2020 me ve Bihar Vidhan Sabha ke Speaker chune gaye aur 25 November 2020 se 24 August 2022 tak is pad par rahe; August 2022 me satta parivartan ke baad Mahagathbandhan ne unke khilaf avishwas prastav laya, jiske beech unhone istifa diya. 2022-2024 me ve Vidhan Sabha me Vipaksh ke Neta rahe, aur January 2024 me Samrat Choudhary ke saath Nitish Kumar sarkar me Deputy CM bane — ye zimmedari ve 2026 tak nibhate rahe.',
    ],
    verdict: [
      {
        label: '2025 — 1,22,408 vote',
        detail: 'Jeet ka antar 24,940 • Congress ke Amaresh Kumar (97,468 vote) doosre sthan par • lagaatar chauthi jeet (2010, 2015, 2020, 2025)',
        sourceLabel: 'CNBC TV18 / ECI parinaam',
        sourceUrl: 'https://www.cnbctv18.com/india/politics/lakhisarai-election-result-2025-can-bihar-dy-cm-vijay-kumar-sinha-continue-his-winning-streak-19736586.htm/amp',
      },
    ],
    verdictNote:
      '2010 se lagaatar chaar chunavon me Lakhisarai ke matdataon ne unhe chuna, aur 2025 me jeet ka antar (24,940) 2020 ke antar (10,483) se dugna se bhi zyada raha.',
    support: [
      {
        head: 'Sadan ke sheersh pad par sudhar-kaam',
        text: 'Speaker ke roop me unke karyakal me Bihar Assembly ki centenary celebrations hui; Rashtrapati Ram Nath Kovind ne Shatabdi Smriti Stambh ka shilanyas kiya aur unke sankalpon ki sarahna ki. Sinha ne sadan ko digital yug se jodne par zor diya — online prashn-uttar aur webcasting ko badhava mila.',
        sourceLabel: 'Hindustan Times, Oct 2021',
        sourceUrl: 'https://www.hindustantimes.com/cities/others/bihar-assembly-celebration-kovind-lauds-prohibition-recalls-his-ties-to-state-101634832568895-amp.html',
      },
      {
        head: 'Chaar lagatar jeet ka record',
        text: '2010, 2015, 2020 aur 2025 — chaar chunavon me unhone Lakhisarai barkarar rakha; CNBC TV18 ke anusaar ye seat unka gadh rahi hai aur 2025 me unhone pichhle chunavon se bada antar hasil kiya.',
        sourceLabel: 'CNBC TV18',
        sourceUrl: 'https://www.cnbctv18.com/india/politics/lakhisarai-election-result-2025-can-bihar-dy-cm-vijay-kumar-sinha-continue-his-winning-streak-19736586.htm/amp',
      },
      {
        head: 'Sarkar me lambi zimmedari',
        text: 'Mantri (2017-2020), Speaker (2020-2022), Vipaksh ke Neta (2022-2024) aur phir Deputy CM (2024 se) — pichle ek dashak me ve Bihar ki satta ke lagbhag har sheersh bhoomika me rahe, jo party aur sarkar ke unpar bharose ko dikhata hai.',
        sourceLabel: 'Hindustan Times',
        sourceUrl: 'https://www.hindustantimes.com/elections/assembly-election/bihar/candidates/vijay-kumar-sinha-114',
      },
    ],
    criticism: [
      {
        head: 'Speaker par avishwas prastav',
        text: 'August 2022 me satta badalne ke baad Mahagathbandhan ne unke khilaf avishwas prastav laya; RJD ke Shakti Yadav ne unhe "undemocratic and dictatorial" bataya aur Congress ke Rajesh Rathore ne naitikta ka hawala dekar istife ki maang ki. Sinha ne aaropon ko be-buniyad bataya aur kaha ve Chair ki garima ke liye prastav ka samna karenge, lekin 24 August 2022 ko trust vote se pehle unhone istifa de diya.',
        sourceLabel: 'The New Indian Express (PTI)',
        sourceUrl: 'https://www.newindianexpress.com/nation/2022/aug/24/vijay-sinha-resigns-as-bihar-speaker-ahead-of-trust-vote-assembly-adjourned-till-2-pm-2490874.html',
      },
      {
        head: 'Do voter card ka aarop',
        text: 'August 2025 me Tejashwi Yadav aur Congress ne aarop lagaya ki unke naam Lakhisarai aur Bankipur dono seats ki voter list me hain (alag-alag umr ke saath), aur Election Commission ne unhe 14 August tak jawab dene ka notice bheja. Sinha ne kaha unhone April 2024 me Lakhisarai me naam judwane ka avedan diya tha, Bankipur se naam hatane ka form receipt sahit bhara tha, aur ve sirf ek jagah se vote dete hain — aaropon ko unhone galat bataya.',
        sourceLabel: 'PTI (NewsDrum)',
        sourceUrl: 'https://www.newsdrum.in/national/ec-sends-notice-to-bihar-dy-cm-vijay-kumar-sinha-for-possessing-2-voter-cards-officials-9646707',
      },
      {
        head: 'Apne hi kshetra me virodh',
        text: '6 November 2025 ko matdaan ke din Lakhisarai ke Khuriyari gaon me kuch graminon ne unki gaadi par gobar aur chappal phenki aur "Vijay Sinha murdabad" ke naare lagaye; Bhaskar ki ground report ke mutabik graminon ka kehna tha ki 20 saalon se unke gaon ki sadak nahi bani. Unki "bulldozer" wali tippani par vivaad hua; Sinha ne kaha sadak ka tender manzoor ho chuka hai aur kaam shuru hai, aur ise RJD-Congress ki gundagardi bataya.',
        sourceLabel: 'Bhaskar English (ground report)',
        sourceUrl: 'https://www.bhaskarenglish.in/local/bihar/news/why-was-deputy-cm-vijay-sinhas-convoy-attacked-in-lakhisarai-bihar-phase-1-voting-136356024.html',
      },
    ],
  },

  // ---- Wave 1-D (Delhi + Assam) (researched 2026-10-14) ----
'rekha-gupta': {
    bio: [
      "Rekha Gupta ka janm Haryana ke Jind jile ke Nandgarh gaon me hua; parivar unke do saal ke hone par Delhi aa gaya, jahan unke pita State Bank of India me kaam karte the. Delhi Vishwavidyalaya ke Daulat Ram College me padhai ke dauran 1993 me woh Akhil Bharatiya Vidyarthi Parishad (ABVP) se judin. 1994 me woh Daulat Ram College Students Union ki general secretary bani, 1995-96 me Delhi University Students Union (DUSU) ki general secretary aur 1996-97 me DUSU ki president chuni gayin - chhatra rajneeti ke dauran unhone campus me mahila suraksha aur chhatron ke transport jaise mudde uthaye.",
      "DUSU ke baad woh ABVP me sakriya rahin aur 2002 me BJP me shamil ho gayin. 2007 me North Pitampura ward se Municipal Corporation of Delhi (MCD) ki councillor chuni gayin aur 2012 me dobara jeetin; isi dauran woh South Delhi Municipal Corporation ki mayor bhi rahin. 2022 me Shalimar Bagh ward se councillor jeetne ke baad woh MCD mayoral chunav me BJP ki ummidwar thi, jisme woh AAP ki Shelly Oberoi se haar gayin. Shalimar Bagh se Vidhan Sabha ka chunav unhone 2015 aur 2020 me bhi lada tha, dono baar AAP ki Bandana Kumari se haari (kramshah 10,978 aur 3,440 vote ke antar se); 2025 me teesri baar me jeet mili. February 2025 me BJP legislature party ne unhe Delhi ki mukhyamantri ke liye chuna aur 20 February 2025 ko Ramlila Maidan me unhone shapath li - woh Delhi ki chauthi mahila mukhyamantri hain (Sushma Swaraj, Sheila Dikshit aur Atishi ke baad).",
    ],
    verdict: [
      {
        label: "2025 Delhi Vidhan Sabha chunav - Shalimar Bagh",
        detail:
          "Rekha Gupta (BJP) ko 68,200 vote (59.95%) mile aur unhone AAP ki Bandana Kumari (38,605 vote, 33.93%) ko 29,595 vote ke antar se haraya; teesre sthan par Congress ke Praveen Jain (4,892 vote) rahe.",
        sourceLabel: "Oneindia (ECI-sourced results)",
        sourceUrl: "https://www.oneindia.com/shalimar-bagh-assembly-elections-dl-14/",
      },
    ],
    verdictNote:
      "Gupta ne yahi seat 2015 aur 2020 me bhi Bandana Kumari ke khilaf ladi thi aur dono baar haari thi (kramshah 10,978 aur 3,440 vote ke antar se); 2025 me unhe teesri baar me jeet mili - Indian Express.",
    support: [
      {
        head: "26 saal se zyada baad BJP ki Delhi me wapasi",
        text: "Rekha Gupta ka CM banna us BJP jeet ka parinam tha jisne party ko 26 saal se zyada arse ke baad Delhi ki satta me wapas laaya (PTI/The Telegraph). Unki niyukti ko party ke liye ek aitihasik badlav ke roop me dekha gaya.",
        sourceLabel: "The Telegraph (PTI)",
        sourceUrl:
          "https://telegraphindia.com/amp/india/rekha-gupta-alleges-congress-and-aam-aadmi-party-of-not-addressing-issues-of-delhi-people-says-bjp-is-transparent/cid/2084868",
      },
      {
        head: "Pehli baar ki MLA, par sangathan me lamba safar",
        text: "Shalimar Bagh se pehli baar Vidhan Sabha jeetne ke bavjood BJP legislature party ne unhe mukhyamantri chuna. Unka safar 1993 me ABVP aur 2002 me BJP se shuru hua - BJYM Delhi secretary, uske national secretary (2005 tak), Delhi BJP Mahila Morcha general secretary, BJP Mahila Morcha national vice-chairperson, UP Mahila Morcha in-charge aur BJP National Executive ki sadasya rah chuki hain. CM banne par woh BJP-shasit rajya ya kendra shasit pradesh ki ekmatra mahila mukhyamantri thi (Indian Express).",
        sourceLabel: "Indian Express",
        sourceUrl:
          "https://indianexpress.com/article/political-pulse/delhi-fourth-woman-cm-who-is-rekha-gupta-9845043/lite/",
      },
      {
        head: "Teen baar councillor - prashasanik anubhav",
        text: "2007 aur 2012 me MCD councillor, South Delhi Municipal Corporation ki mayor aur 2022 me Shalimar Bagh ward se councillor jeet - party sahyogiyon ne unhe anubhavi prashasak bataya. Indian Express ne MCD Leader of Opposition Raja Iqbal Singh ka bayaan darj kiya ki unke paas 'vast experience' hai aur woh logon ki shikayaton ke prati samvedansheel hain; councillor Shikha Bharadwaj ne unhe 'good administrator, friendly, and bold' kaha.",
        sourceLabel: "Indian Express",
        sourceUrl:
          "https://indianexpress.com/article/political-pulse/delhi-fourth-woman-cm-who-is-rekha-gupta-9845043/lite/",
      },
    ],
    criticism: [
      {
        head: "AAP ka aarop - 'sarkar chalane ke layak nahi'",
        text: "AAP neta aur Vidhan Sabha me vipaksh ki neta Atishi ne March 2025 me aarop lagaya ki BJP ke satta me aane ke baad Delhi me bijli katoti badh gayi hai; unhone kaha ki BJP 'sarkar chalane ke layak nahi' hai aur 24 ghante bijli ka model fail ho gaya hai. (Yeh AAP ka aarop hai; us report me BJP ka khandan darj nahi tha.)",
        sourceLabel: "Zee News",
        sourceUrl:
          "https://zeenews.india.com/india/not-eligible-to-run-government-aap-s-atishi-slams-bjp-over-rise-in-power-cuts-in-delhi-2879910.html",
      },
      {
        head: "Mahilaon ko Rs 2,500 ke wade par AAP ka hamla",
        text: "Atishi ne aarop lagaya ki BJP ne chunav me mahilaon ko har mahine Rs 2,500 dene ka wada kiya tha, lekin 8 March 2025 aur phir 8 March 2026 guzarne ke baad bhi yeh rakam mahilaon ke khaton me nahi pahunchi; unhone kaha ki BJP ne is wade par mahilaon ke vote liye. March 2025 me unhone Vidhan Sabha me bhi yeh mudda uthaya tha. (AAP ka aarop; in reports me BJP sarkar ka seedha jawab darj nahi tha.)",
        sourceLabel: "The Economic Times",
        sourceUrl:
          "https://economictimes.indiatimes.com/news/politics-and-nation/aaps-atishi-attacks-delhi-bjp-govt-over-monthly-allowance-for-women-mps-defection/articleshow/130571753.cms",
      },
    ],
  },

  'parvesh-sahib-singh': {
    bio: [
      'Parvesh Sahib Singh Verma ka janm 7 November 1977 ko hua. Ve Delhi ke poorv mukhyamantri Sahib Singh Verma ke bete hain. Unhone Delhi Public School, R.K. Puram se schooling ki, phir Delhi University ke Kirori Mal College se graduation aur Fore School of Management se MBA kiya. Unke chacha Azad Singh North Delhi Municipal Corporation ke mayor rahe aur 2013 me Mundka seat se BJP ticket par vidhan sabha chunav lade the.',
      'Verma ki chunavi shuruaat 2013 me hui jab unhone Mehrauli se tatkalin vidhan sabha adhyaksh Yoganand Shastri ko haraya. 2014 me ve West Delhi se Lok Sabha sansad bane aur 2019 me seat barkarar rakhi - is baar 578,486 voton ke antar se jeet darj ki, jo Delhi ke chunavi itihas ka sabse bada jeet ka antar tha. Unhone 2024 ka Lok Sabha chunav nahi lada. 2025 me BJP ne unhe New Delhi seat se utaara jahan unhone AAP sanyojak aur poorv mukhyamantri Arvind Kejriwal ko haraya, aur 20 February 2025 ko Rekha Gupta ke netritva wali Delhi cabinet me mantri ke roop me shapath li. Unhe PWD, water, legislative affairs, irrigation aur flood control vibhag mile.',
    ],
    verdict: [
      {
        label: '2025 Delhi Vidhan Sabha chunav - New Delhi',
        detail: 'Parvesh Sahib Singh Verma (BJP) ko 30,088 vote mile; Arvind Kejriwal (AAP) ko 25,999 vote mile. Jeet ka antar 4,089 vote raha. Ye aankde Election Commission of India ke hain.',
        sourceLabel: 'Hindustan Times',
        sourceUrl: 'https://www.hindustantimes.com/india-news/who-is-parvesh-sahib-singh-verma-101738681976742.html',
      },
    ],
    verdictNote:
      'New Delhi us samay AAP ke rashtriya sanyojak aur Delhi ke poorv mukhyamantri Arvind Kejriwal ki seat thi - unhe harana 2025 ke Delhi chunav ka sabse charchit natija tha, aur isi jeet ke baad Verma ko Delhi CM pad ka prabal daavedar mana gaya.',
    support: [
      {
        head: 'West Delhi se do baar, 2019 me record antar',
        text: '2014 me West Delhi se pehli baar Lok Sabha sansad bane aur 2019 me seat barkarar rakhi. 2019 me unhone 578,486 voton ke antar se jeet darj ki - Delhi ke chunavi itihas ka sabse bada jeet ka antar. Sansad ke roop me ve Salaries and Allowances ki sanyukt samiti aur Urban Development ki sthayi samiti ke sadasya rahe.',
        sourceLabel: 'Hindustan Times',
        sourceUrl: 'https://www.hindustantimes.com/india-news/who-is-parvesh-sahib-singh-verma-101738681976742.html',
      },
      {
        head: '2025 jeet ke baad cabinet me jagah',
        text: 'Kejriwal ko harane ke turant baad unhe Delhi CM pad ka prabal daavedar mana gaya. Unhe pramukh Jat neta ke roop me dekha gaya aur unki cabinet me entry ko BJP ke Jat matdataon me samarthan mazboot karne wala kadam mana gaya. 20 February 2025 ko shapath ke baad unhe PWD, water, legislative affairs, irrigation aur flood control vibhag mile.',
        sourceLabel: 'The New Indian Express',
        sourceUrl: 'https://www.newindianexpress.com/cities/delhi/2025/Feb/20/delhi-portfolios-announced-cm-rekha-gupta-keeps-finance-wcd-parvesh-verma-gets-pwd-water',
      },
      {
        head: 'Chunav me vikas ka agenda',
        text: '2025 ke prachar me unhone mahilaon ke liye Ladli yojna, yuvaon ke liye rozgar, purani pension yojnaon ko jaari karna, Yamuna ki safai aur 15,000 basen jaisi prathmiktayen rakhin. New Delhi seat ke liye unhone NDMC ke muster roll va ad hoc karmiyon ka niyamitkaran aur jhuggi-vasiyon ke liye pakke makaan ki baat kahi - yehi unke samarthakon ka badlav ka narrative tha.',
        sourceLabel: 'The Hindu',
        sourceUrl: 'https://www.thehindu.com/elections/delhi-assembly/delhi-polls-allegations-of-vote-buying-baseless-as-kejriwal-fears-defeat-says-parvesh-verma/article69104867.ece',
      },
    ],
    criticism: [
      {
        head: 'Vote khareedne ke aarop',
        text: 'January 2025 me AAP ne aarop lagaya ki Verma New Delhi me mahilaon ko Rs 1,100, joote, sariyan aur kambal baant rahe hain, aur Election Commission se karyavahi ki maang ki. Verma ne aaropon ko niradhar bataya aur kaha ki ye Kejriwal ki aasann haar ke dar ka natija hain.',
        sourceLabel: 'The Hindu',
        sourceUrl: 'https://www.thehindu.com/elections/delhi-assembly/delhi-polls-allegations-of-vote-buying-baseless-as-kejriwal-fears-defeat-says-parvesh-verma/article69104867.ece',
      },
      {
        head: 'Kejriwal ki shikayat par EC ki jaanch',
        text: 'Kejriwal ne Chief Election Commissioner Rajiv Kumar se milkar aupcharik shikayat di, jisme Verma par khuleaam nakad baantne ka aarop tha. 9 January 2025 ko Election Commission ne Delhi ke Chief Electoral Officer ko aadesh diya ki shikayat ki jaanch ho, vaastavik tathya pata lagaye jayen aur Model Code of Conduct va chunavi kanoonon ke tahat turant uchit karyavahi ki jaye, saath hi Action Taken Report bhi bheji jaye.',
        sourceLabel: 'ABP News',
        sourceUrl: 'https://news.abplive.com/elections/ascertain-facts-take-action-poll-body-s-action-against-parvesh-verma-after-kejriwal-s-complaint-1742968/amp',
      },
      {
        head: 'Vivadit tippaniyan aur adalati sthiti',
        text: '2020 ke vidhan sabha prachar me Kejriwal ko terrorist kehne par Election Commission ne unpar 24 ghante ka prachar ban lagaya tha (Hindustan Times). January 2020 me Shaheen Bagh ke CAA-virodhi pradarshankariyon par unki kathit tippani par CPI(M) netaon ne FIR darj karane ki maang ki thi - trial court (August 2020) aur Delhi High Court ne inkar kar diya, aur Supreme Court ne 29 April 2026 ko faisla diya ki koi sangya apradh nahi banta. Alag se, unke 2025 ke chunavi halafname me 1 aapradhik mamla ghoshit hai, jisme koi gambhir prakriti ka nahi hai - ye aankda ECI affidavit par aadharit The Hindu/ADR candidate page se hai.',
        sourceLabel: 'The Times of India',
        sourceUrl: 'https://timesofindia.indiatimes.com/legal/hate-speeches-in-2020-delhi-caa-protest-no-cognisable-offence-made-out-against-anurag-thakur-parvesh-verma-says-supreme-court/articleshow/130672278.cms',
      },
    ],
  },

  'gopal-rai': {
    bio: [
      "Gopal Rai ka janm 10 May 1975 ko Uttar Pradesh ke Mau jile me hua aur unhone Lucknow University se Sociology me Master ki degree li. 1992 me unhone Lucknow University me All India Students Association se apna raajnaitik safar shuru kiya. Student days me unpar goli chali, jisse ve aanshik roop se paralysed hue, lekin iske baad bhi ve saarvajanik jeevan me sakriya rahe. Anna Hazare ke bhrashtachar-virodhi andolan me ve ek tez vakta ke roop me ubhre, aur Arvind Kejriwal ke saath unka rishta India Against Corruption ke dinon se hai. November 2012 me Aam Aadmi Party ke gathan ke baad unhone party ka grassroots network khada karne me badi bhoomika nibhai, aur ve party ki sarvochch nirnayak ikai Political Affairs Committee ke sadasya bane. 2013 me Babarpur se unhone pehla chunav lada aur teesre sthan par rahe.",
      "2015 me Gopal Rai ne Babarpur se BJP ke Naresh Gaur ko 35,271 vote ke antar se harakar pehli baar MLA bane aur Kejriwal cabinet me Transport aur Labour mantri bane. 2016 me app-based premium bus service scheme ko lekar vivad ke baad unhone mantri pad se istifa diya. 2020 me unhone Gaur ko phir 33,062 vote ke antar se harakar seat barkarar rakhi. Uske baad ve Environment, Forest, Wildlife, Development aur General Administration jaise vibhagon ke mantri rahe — Kejriwal cabinet (2015-2024) aur phir Atishi sarkar me. Environment mantri ke roop me unhone October 2020 me Green Delhi app launch karwaya (pradushan ki shikayaton ke liye), Green War Room banaya aur 'Yuddh Pradushan Ke Viruddh' abhiyan chalaya. May 2017 se ve AAP ke Delhi Convenor bhi hain. 2025 me unhone lagatar teesri baar Babarpur se jeet darj ki.",
    ],
    verdict: [
      {
        label: "2025 Delhi Vidhan Sabha chunav — Babarpur seat",
        detail: "Gopal Rai (AAP) ne 76,192 vote paakar BJP ke Anil Kumar Vashisht ko 18,994 vote ke antar se haraya aur lagatar teesri baar Babarpur se MLA bane. 2020 me unhone isi seat par BJP ke Naresh Gaur ko 33,062 vote ke antar se haraya tha.",
        sourceLabel: "Indian Express",
        sourceUrl: "https://indianexpress.com/elections/babarpur-delhi-assembly-election-results-2025-live-winner-runner-up-candidates-9823097/",
      },
    ],
    verdictNote: "2025 me AAP Delhi ki satta se bahar ho gayi, lekin Rai ne apni seat bacha li. Haan, jeet ka antar pichhle chunav (33,062) se lagbhag aadha ho gaya (18,994).",
    support: [
      {
        head: "Babarpur se lagatar teesri jeet",
        text: "Rai ne 2015 (35,271 ka antar), 2020 (33,062 ka antar) aur 2025 (18,994 ka antar) me lagatar teesri baar Babarpur se jeet darj ki. 2025 ki jeet khaas isliye maani gayi kyonki us chunav me AAP ko poore Delhi me bada jhatka laga tha, lekin Rai un chune hue AAP netaon me rahe jinhone apni seat bacha li.",
        sourceLabel: "Indian Express; India TV",
        sourceUrl: "https://indianexpress.com/elections/babarpur-delhi-assembly-election-results-2025-live-winner-runner-up-candidates-9823097/",
      },
      {
        head: "Environment mantri ke roop me anti-pollution pehlein",
        text: "Environment mantri ke roop me unhone pradushan se ladne ke liye Green Delhi app (October 2020) launch karwaya, jiske zariye log kachra jalane, industrial pradushan aur dhool ki shikayat kar sakte the, aur Delhi Secretariat me Green War Room banaya. Unke daave ke mutabiq 2016 me Delhi me achche AQI wale din 109 the, jo unke karyakal me badhkar 2024 me 208 ho gaye.",
        sourceLabel: "Business Standard (PTI); The Times of India",
        sourceUrl: "https://www.business-standard.com/article/current-affairs/kejriwal-to-launch-green-delhi-app-to-redress-complaints-of-pollution-120102701308_1.html",
      },
      {
        head: "AAP ke sthayi sangathan chehre",
        text: "May 2017 se ve AAP ke Delhi Convenor hain aur party ki Political Affairs Committee ke sadasya bhi. Anna andolan ke dinon se Kejriwal ke saath jude Rai ko party ke grassroots volunteer network ka nirmaata maana jata hai, aur ve 2015 se lagatar Delhi cabinet me mantri rahe — pehle Kejriwal cabinet me, phir Atishi sarkar me.",
        sourceLabel: "NDTV; India TV",
        sourceUrl: "https://www.ndtv.com/india-news/delhi-assembly-elections-5-points-on-gopal-rai-aap-s-babarpur-candidate-7391379",
      },
    ],
    criticism: [
      {
        head: "CAG report (April 2025) par vipaksh ka hamla",
        text: "1 April 2025 ko Delhi Assembly me CAG ki 'Prevention and Mitigation of Vehicular Air Pollution in Delhi' report rakhi gayi, jisme AQI monitoring stations ki galat jagah, PUC certificate system me gadbadi aur public transport buson ki kami jaisi khaamiyan darj thi. Delhi ke Environment mantri Manjinder Singh Sirsa ne aarop lagaya ki pichhli AAP sarkar ne pradushan niyantran ko 'compromised' kiya, aur Delhi Congress adhyaksh Devender Yadav ne ise Kejriwal sarkar ki nishkriyata par gambhir aarop bataya. Rai ne jawab me kaha ki report me bhrashtachar ka koi saboot nahi mila aur AAP sarkar hi pradushan ke khilaf kadam uthane me sabse aage rahi.",
        sourceLabel: "The Times of India",
        sourceUrl: "https://timesofindia.indiatimes.com/city/delhi/cag-report-highlights-air-pollution-challenges-and-irregularities-in-delhi/articleshow/119880350.cms",
      },
      {
        head: "Delhi HC ka criminal contempt notice (May 2026)",
        text: "22 May 2026 ko Delhi High Court ne Gopal Rai aur ek patrakar ke khilaf criminal contempt ke notice jaari kiye. Aarop hai ki excise policy case me Justice Sharma ko bias batane wale coordinated social media campaign me ve shaamil the. Justice Sharma ne baad me case se khud ko alag kar liya aur mamla Justice Manoj Jain ko transfer ho gaya. Is karyavaahi ka koi antim faisla abhi saamne nahi aaya hai.",
        sourceLabel: "National Herald (IANS)",
        sourceUrl: "https://www.nationalheraldindia.com/national/delhi-hc-issues-contempt-notices-to-gopal-rai-and-journalist-over-posts-targeting-judge",
      },
      {
        head: "2016 me premium bus scheme vivad ke baad istifa",
        text: "2016 me, jab ve Transport mantri the, app-based premium bus service scheme me bhrashtachar ke aaropon ke baad unhone mantri pad se istifa de diya. AAP ne istife ki wajah unki sehat se judi chintaen batayi. Unke khilaf is mamle me koi aarop-patra ya adalati faisla established reporting me nahi mila.",
        sourceLabel: "NDTV",
        sourceUrl: "https://www.ndtv.com/india-news/delhi-assembly-elections-5-points-on-gopal-rai-aap-s-babarpur-candidate-7391379",
      },
    ],
  },

  'vijender-gupta': {
    bio: [
      "Vijender Gupta (born 14 August 1963) is a senior BJP leader from Delhi and an alumnus of Shri Ram College of Commerce. He began politics in 1980 with the Janata Vidyarthi Morcha and became president of the Bharatiya Janata Yuva Morcha in 1995. His electoral journey started in 1997 as an MCD councillor from Rohini, where he won three times and held posts including Chairman of the Law and General Purpose Committee, Deputy Chairman of the House Tax Committee, and Chairman of the MCD Standing Committee. He served as president of the Delhi BJP unit from 2010 to 2013. He lost the 2009 Lok Sabha election from Chandni Chowk to Kapil Sibal and the 2013 Delhi Assembly election to Arvind Kejriwal.",
      "Gupta won the Rohini Assembly seat in 2015, becoming one of only three BJP MLAs elected that year, and was appointed Leader of the Opposition in the Delhi Assembly. He retained Rohini in 2020, defeating AAP's Rajesh Nama Bansiwala by more than 12,000 votes, and won again in 2025 with 70,365 votes and a margin of 37,816 votes, reported as the highest winning margin among BJP candidates in that election. In February 2025 he was nominated and elected Speaker of the Eighth Delhi Legislative Assembly."
    ],
    verdict: [
      {
        label: 'Rohini Assembly Election 2025',
        detail: "BJP's Vijender Gupta won Rohini for the third straight term with 70,365 votes, defeating AAP's Pardeep Mittal (32,549 votes) by a margin of 37,816 votes. Congress candidate Sumesh Gupta finished third with 3,765 votes.",
        sourceLabel: 'India TV (as per Election Commission data)',
        sourceUrl: 'https://www.indiatvnews.com/delhi/rohini-assembly-election-result-live-vote-counting-vijender-gupta-aap-pradeep-mittal-congress-sumesh-gupta-2025-02-08-974524'
      }
    ],
    verdictNote: "Ye unki Rohini se lagatar teesri jeet hai (2015, 2020, 2025), aur 2025 ka jeet ka antar BJP ummidvaron me sabse zyada raha.",
    support: [
      {
        head: 'Rohini par majboot seat-pakad',
        text: "2015 me jab BJP sirf 3 seat jeeti thi, tab bhi Gupta Rohini se jeete the, aur 2020 aur 2025 me bhi seat banaye rakhi. 2025 me unka 37,816 vote ka antar BJP ummidvaron me sabse zyada tha. Reporting me unhe Rohini ka 'Gupta Ji' kaha gaya hai.",
        sourceLabel: 'CNBC TV18 (PTI report)',
        sourceUrl: 'https://www.cnbctv18.com/india/bjp-rohini-mla-vijender-gupta-set-to-become-speaker-of-delhi-assembly-19561970.htm'
      },
      {
        head: 'LoP ke roop me CAG reports ka mudda',
        text: "Leader of Opposition ke roop me Gupta ne Delhi High Court me Kejriwal sarkar dwara 14 CAG reports ko pesh na karne ka mudda uthaya. January 2025 me High Court ne in reports ko sadan me pesh karne ka order diya. BJP ne ise chunav me AAP par bhrashtachar chhupane ke aarop ki kahani banaya.",
        sourceLabel: 'CNBC TV18 (PTI report)',
        sourceUrl: 'https://www.cnbctv18.com/india/bjp-rohini-mla-vijender-gupta-set-to-become-speaker-of-delhi-assembly-19561970.htm'
      },
      {
        head: '2025 me Delhi Assembly ke Speaker',
        text: "BJP ki Delhi me 26 saal baad satta me wapsi ke baad nayi sadan ke pehle session me Gupta Delhi Assembly ke Speaker chune gaye. Isse pehle ve Delhi BJP adhyaksh (2010-2013) bhi rahe chuke hain.",
        sourceLabel: 'ABP Live',
        sourceUrl: 'https://news.abplive.com/cities/rohini-bjp-mla-vijender-gupta-elected-as-delhi-assembly-speaker-1753594'
      }
    ],
    criticism: [
      {
        head: 'Kailash Gahlot defamation case',
        text: "DTC ki 1,000 low-floor bus khareed me aniyamittaon ke unke aaropon par us samay ke Delhi transport minister Kailash Gahlot ne un par alag-alag civil aur criminal defamation suits file kiye. October 2021 me Rouse Avenue court ne unhe criminal defamation case me accused ke roop me summon kiya. Gupta ne kaha tha ki summoning 'pre-summoning stage ke baad ek bahut routine procedure' hai aur unka paksh abhi suna jana baaki hai. September 2022 me Delhi High Court ne dono pakshon ko settlement explore karne ko kaha, Gupta ko social media par rok lagane se inkar kiya, aur tippani ki ki opposition ko sarkar se sawal poochne ka adhikar hai. Koi dosh-siddhi (conviction) report nahi hui hai.",
        sourceLabel: 'Hindustan Times / The Indian Express',
        sourceUrl: 'https://www.hindustantimes.com/cities/delhi-news/delhi-court-summons-vijender-gupta-in-defamation-case-by-kailash-gahlot-101633977068618.html'
      },
      {
        head: 'October 2024 bus marshal vivaad',
        text: "October 2024 me AAP netaon ne LG house ke bahar ek mahila bus marshal (Pankaj) ke saath kathit maar-peet aur jaati-adharit bhedbhav ke aarop me Gupta ke khilaf do police complaints darj karayeen. AAP mantri Saurabh Bharadwaj aur up-sabhapaati Rakhi Birla ne ye shikayatein ki thin. Isse pehle Gupta ne khud Secretariat me 'indecent behaviour' aur jhadap ko lekar Bharadwaj aur teen AAP MLAs ke khilaf FIR darj karayi thi. Dono tarah ki shikayatein complaint/FIR stage par hi rahin; kisi charge-sheet ya dosh-siddhi ki public reporting nahi mili.",
        sourceLabel: 'ABP Live (PTI wire)',
        sourceUrl: 'https://news.abplive.com/cities/delhi-news-aap-saurabh-bharadwaj-file-police-complaints-against-bjp-mla-vijender-gupta-over-caste-discrimination-physically-assaulting-female-bus-marshal-1722484'
      },
      {
        head: 'Speaker chune jaane ke din AAP ka virodh',
        text: "24 February 2025 ko jab Gupta Speaker chune gaye, tabhi AAP MLAs ne sadan me virodh kiya. Atishi ne aarop lagaya ki CM office se Dr BR Ambedkar aur Bhagat Singh ki tasveerein hata di gayi hain. Speaker Gupta ne kaha ki ye ek 'courtesy address' tha, opposition ko ise raajneetik manch nahi banana chahiye, aur sadan ki maryada banaye rakhni chahiye.",
        sourceLabel: 'ABP Live',
        sourceUrl: 'https://news.abplive.com/cities/rohini-bjp-mla-vijender-gupta-elected-as-delhi-assembly-speaker-1753594'
      }
    ],
  },

  'himanta-biswa-sarma': {
    bio: [
      "Himanta Biswa Sarma ka rajneetik safar 1979-85 ke Assam Agitation se shuru hua, jahan ve AASU netritva ke saath kaam karte the. 1990 ke dashak me Congress me shamil hue aur 2001 me Jalukbari se pehli baar vidhansabha jeete (us waqt AGP ke Bhrigu Kumar Phukan ko haraya). 2001 se Tarun Gogoi sarkar me mantri bane — shuruaat me krishi, planning aur development ke state minister, baad me swasthya, vitt aur shiksha jaise ahem vibhag. 2011 me Congress ki teesri lagatar jeet me unki ranneeti par party ne bharosa kiya, lekin usi karyakaal me Gogoi ke bete Gaurav Gogoi se unke matbhed badhe aur ve kinare kar diye gaye. 2015 me unhone mantrimandal, vidhansabha aur party — teeno se isteefa diya; us waqt CM Tarun Gogoi ne unke jaane par sirf do shabd kahe — good riddance. August 2015 me ve BJP me shamil ho gaye. Gauhati University se unhone 1992 me political science me MA aur PhD, aur 1995 me LLB kiya, aur rajneeti me aane se pehle Gauhati High Court me paanch saal vakaalat ki.",
      "BJP me aate hi Sarma party ki poorvottar-ranneeti ke kendra me aa gaye. 2016 me Sarbananda Sonowal ke saath milkar Assam me BJP ki pehli sarkar banane me unki bhoomika nirnayak rahi, aur unhone vitt, swasthya, shiksha aur lok-nirmaan jaise vibhag sambhale. BJP-led North-East Democratic Alliance (NEDA) ke convenor ke roop me unhone poorvottar ke aathon rajyon ko NDA ke dayre me lane me pivotal bhoomika nibhai — Manipur me 2017 ki sarkar ka gathan aur Arunachal Pradesh me party ki pakad isi daur ki misaal hai. 2021 me Sonowal ke baad ve Assam ke CM bane, aur 2026 ke chunav me BJP ko 126 me se 82 seeton ke saath teesri lagatar jeet dila kar doosre karyakaal ke liye shapath li. Samarthak unhe pyaar se Mama kehte hain, aur party ke andar unki chhavi vikas ke saath-saath Hindutva ki rajneeti par zor dene wale neta ki hai.",
    ],
    verdict: [
      {
        label: "Jalukbari — Assam chunav 2026 (ECI aankde)",
        detail: "Himanta Biswa Sarma (BJP) — 1,27,151 vote. Runner-up: Bidisha Neog (Congress) — 37,717 vote. Jeet ka antar: 89,434 vote. Isi seat par nirdaliya Dipika Das ko 2,546 vote aur NOTA ko 3,440 vote mile.",
        sourceLabel: "The Sentinel (Assam)",
        sourceUrl: "https://www.sentinelassam.com/cities/guwahati-city/assam-election-results-2026-nda-sweeps-all-kamrup-metro-seats-himanta-biswa-sarma-wins-jalukbari-by-landslide",
      },
    ],
    verdictNote: "Jalukbari ve 2001 se lagatar jeet rahe hain — pehle Congress, phir BJP ke ticket par. 2026 me unki jeet BJP ki 82-seaton wali teesri lagatar jeet ka hissa rahi, jiske baad unhone kaha ki ruling alliance ko jeet milna abhootpoorv hai.",
    support: [
      {
        head: "Poorvottar me BJP ke ranneetikar",
        text: "NEDA convenor ke roop me unhone poorvottar ke aathon rajyon ko NDA ke dayre me lane me pivotal bhoomika nibhai; party unhe kshetra ka political brain maanti hai. 2026 ke chunav me unhone poore prachar ka bojh khud uthaya aur party unhe PM Modi aur Amit Shah ke baad sabse zyada maang wale star campaigneron me ginti hai.",
        sourceLabel: "ThePrint",
        sourceUrl: "https://theprint.in/elections/rise-rise-of-himanta-biswa-sarma-bjps-northeast-mama-poll-machine-in-assam/2920714/",
      },
      {
        head: "Teesri lagatar jeet ka netritva",
        text: "2026 me BJP ne Assam me 126 me se 82 seeten jeetin — party ki teesri lagatar jeet. Sarma ne kaha ki ye ruling alliance ke liye abhootpoorv jeet hai aur ise hat-trick bataya. PTI ke profile ke anusaar is jeet ne kshetra me party ki badhti jadon ko bhi darshaya.",
        sourceLabel: "PTI (NDTV Profit)",
        sourceUrl: "https://www.ndtvprofit.com/india/final-results-of-assam-election-2026-check-how-many-seats-bjp-congress-bopf-and-other-parties-won-11447779",
      },
      {
        head: "Vikas aur kalyan ka agenda",
        text: "Chunav se kuch mahine pehle Orunodoi scheme ke tahat mahilaon ko milne wali financial assistance badhane ka unka kadam game-changer raha, aur infrastructure development ne unhe vikas-parak dynamic leader ka tag dilaya. PTI profile ke anusaar unhone vaada kiya ki pehle karyakaal ka vikas-yatra ka safar doosre karyakaal me aage badhega.",
        sourceLabel: "ThePrint",
        sourceUrl: "https://theprint.in/elections/rise-rise-of-himanta-biswa-sarma-bjps-northeast-mama-poll-machine-in-assam/2920714/",
      },
    ],
    criticism: [
      {
        head: "Bayanbaazi par sampradayik rajneeti ka aarop",
        text: "Vipaksh aur analysts unki bayanbaazi ko divisive kehte hain — 2026 me BJP ke kendriya netritva ko hi Assam unit se unka AI-generated video social media se hatwana pada, jisme ve skull-cap wale do vyaktiyon (jinme se ek Gaurav Gogoi the) ki tasveer par goli chalate dikhaye gaye the; kai rajyon me unke khilaf shikayaten darj hui. Sarma ne kaha ki unhe us video ki koi jankari nahi hai, lekin Bangladeshi ghuspethiyon par unka stand wahi raha. Congress pradesh adhyaksh Gaurav Gogoi ne unpar sampradayik rajneeti ka aarop lagaya aur iski tulna Tarun Gogoi ke shasan se ki.",
        sourceLabel: "ThePrint",
        sourceUrl: "https://theprint.in/elections/rise-rise-of-himanta-biswa-sarma-bjps-northeast-mama-poll-machine-in-assam/2920714/",
      },
      {
        head: "Eviction drives par aalochna",
        text: "2021 se chal rahe eviction drives par vipaksh ne tez aalochna ki hai — Gaurav Gogoi ne madrasa aur eviction policies ke saath fake encounters ka aarop lagaya, aur bataya gaya ki beghar hue logon me zyada tar Bengali-speaking Muslim hain, jinka kehna hai ki Brahmaputra ke katav se unki zameen beh gayi thi. Jawab me Sarma ne kaha ki Centre drive ke poorn roop se saath hai, 2021 se 160 sq km se zyada zameen encroachment-free ka daava kiya, aur char residents ko zameen ke patte na dene ka thikra purani Congress sarkaron par phoda.",
        sourceLabel: "PTI (Madhyamam)",
        sourceUrl: "https://madhyamamonline.com/india/centre-completely-supports-eviction-drive-himanta-biswa-sarma-1442614",
      },
      {
        head: "Congress-kaalkhand par bhrashtachar ke aarop",
        text: "Congress ne unke mantri-kaalkhand par baar-baar bhrashtachar ke aarop lagaye; PTI profile ke anusaar Sarma ne in sabhi aaropon se inkaar kiya. Congress neta Pawan Khera ke aaropon par unke khilaf maan-haani ka FIR bhi darj hua, aur ye vivad Supreme Court ke ek order me bhi darj hua jisme Khera ko rahat mili thi.",
        sourceLabel: "PTI (The Week)",
        sourceUrl: "https://www.theweek.in/wire-updates/national/2026/05/12/himanta-biswa-sarma-from-cong-rebel-to-bjps-northeast-face.html",
      },
    ],
  },

  'sarbananda-sonowal': {
    bio: [
      "Sarbananda Sonowal ka siyasat me aana chhatra-andolan se hua. Wo 1992 se 1999 tak All Assam Students Union (AASU) ke adhyaksh rahe. AASU adhyaksh ke roop me unhone Supreme Court me IMDT Act (1983) ko chunauti di, jise adalat ne 2005 me asavvaidhanik batakar khatm kar diya — isi ke baad unhe AASU ne 'Jatiya Nayak' ka samman diya. 1999 me wo Asom Gana Parishad (AGP) me aaye, 2001 me Moran se Assam Vidhan Sabha ke liye chune gaye aur 2004 me Dibrugarh se pehli baar Lok Sabha MP bane. 2009 me wo isi seat par chunav haar gaye aur 2011 me BJP me shamil ho gaye; 2012 me Assam BJP ke adhyaksh bane.",
      "2014 me wo Lakhimpur se Lok Sabha jeete aur kendra me Sports aur Youth Affairs mantri bane. 2016 me BJP ne unhe chehra banakar Assam me pehli baar sarkar banayi — wo Assam ke pehle BJP CM bane aur 2021 tak ye pad sambhala. 2021 me cabinet me shamil hue aur Ports, Shipping and Waterways plus Ayush mantri bane; 2024 me teesri baar Modi cabinet me shamil hue aur ye mantri-pad kayam raha. 2024 me wo Dibrugarh se dobara Lok Sabha MP chune gaye."
    ],
    verdict: [
      {
        label: '2024 Lok Sabha chunav — Dibrugarh',
        detail: '6,93,762 vote (54.27% vote share) mile; jeet ka antar 2,79,321 vote raha. Runner-up Lurinjyoti Gogoi (Assam Jatiya Parishad) ko 4,14,441 vote mile.',
        sourceLabel: 'Times of India',
        sourceUrl: 'https://timesofindia.indiatimes.com/elections/lok-sabha-elections/assam/news/dibrugarh-election-results-2024-assam-dibrugarh-lok-sabha-elections-poll-result-updates-sarbananda-sonowal-bjp-manoj-dhanowar-aap-lurinjyoti-gogoi-assam-jatiya-parishad/articleshow/110653371.cms'
      }
    ],
    verdictNote: 'Runner-up Lurinjyoti Gogoi AASU ke poorv adhyaksh the aur PTI ke mutabiq vipaksh ke sanyukt ummidwar the — phir bhi Sonowal ko lagbhag dhaai lakh voton se zyada ka antar mila. Dibrugarh seat BJP ke paas bani rahi.',
    support: [
      {
        head: 'Assam ke pehle BJP CM — 2016 ka aitihasik faisla',
        text: "2016 me Sonowal ko chehra banakar BJP ne North East me pehli baar sarkar banayi aur Assam ki 126 seats me se 60 jeeti; NDTV ke mutabiq party ne Upper Assam me sweep kiya. Wo Assam ke pehle BJP CM bane.",
        sourceLabel: 'NDTV',
        sourceUrl: 'https://www.ndtv.com/india-news/sarbananda-sonowal-back-in-pm-modis-cabinet-for-a-second-time-2481652'
      },
      {
        head: 'Kehndriya mantri ke roop me Brahmaputra pariyojnaen',
        text: "Ports, Shipping and Waterways mantri ke roop me unhone National Waterway-2 (Brahmaputra) par Dibrugarh me Bogibeel tourist-cum-cargo terminal aur customs-immigration complex ka udghatan karaya; 2026 me desh ke pehle nadi-lighthouse ki neev rakhi — Bogibeel sahit char jagah, kul laagat lagbhag Rs 84 crore.",
        sourceLabel: 'The Sentinel (Assam)',
        sourceUrl: 'https://www.sentinelassam.com/topheadlines/indias-first-river-lighthouses-to-come-up-on-brahmaputra-in-historic-first'
      },
      {
        head: 'Swachh chhavi wale neta ki pehchan',
        text: "PTI ke profile me unhe 'considered by most as an honest politician' bataya gaya, jinhone bhrashtachar ke khilaf party ki ladai aage badhayi; NDTV ke mutabiq 2021 ke CM faisle me unki 'good image' BJP ke liye mushkil chunaav thi.",
        sourceLabel: 'PTI (via NewsDrum)',
        sourceUrl: 'https://www.newsdrum.in/national/from-student-politics-to-cm-to-union-minister-sonowals-power-packed-journey-4743983'
      }
    ],
    criticism: [
      {
        head: "CAA virodh me 'Jatiya Nayak' par sawal",
        text: "2019-20 me CAA virodh ke dauran purane AASU saathiyon ne CM Sonowal par 'ultimate betrayal' ka aarop lagaya, kyonki unki sarkar kendra ko vidheyak na lane ke liye mana nahi saki (PTI). Congress ne unhe 'CAA par janta ke krodh' ka samna karne wala batakar BJP chhodne tak ko kaha. Sonowal ne iska jawab Congress par prashn uthakar diya — unhone kaha NE ke vikas par sawal ka Congress ke paas 'moral right' nahi hai.",
        sourceLabel: 'PTI (via NewsDrum)',
        sourceUrl: 'https://www.newsdrum.in/national/from-student-politics-to-cm-to-union-minister-sonowals-power-packed-journey-4743983'
      },
      {
        head: '2021: CM ki kursi jane par vipaksh ke aarop',
        text: "2026 me Congress MP Gaurav Gogoi ne aarop lagaya ki Sonowal ko coal syndicate ke khilaf rukh ke karan CM se hataya gaya — ye aarop ke roop me report hua hai, iski swatantra pushti nahi hai. Khud Sonowal ne bhoomika badalne ko hamesha party ka faisla bataya: 'nation first, party second and self last'.",
        sourceLabel: 'Pratidin Time',
        sourceUrl: 'https://www.pratidintime.com/top-stories/sonowal-was-removed-as-cm-for-opposing-coal-syndicate-says-gaurav-gogoi-9306249'
      },
      {
        head: '2024 me AJP ki kadi chunauti',
        text: "2024 me unke khilaf Assam Jatiya Parishad ke Lurinjyoti Gogoi utre — jo AASU ke poorv adhyaksh the aur PTI ke mutabiq vipaksh ke sanyukt ummidwar the. Chunav se pehle ise unke liye kadi chunauti mana gaya, lekin natija Sonowal ke paksh me 2,79,321 voton ke antar se raha.",
        sourceLabel: 'Times of India',
        sourceUrl: 'https://timesofindia.indiatimes.com/elections/lok-sabha-elections/assam/news/dibrugarh-election-results-2024-assam-dibrugarh-lok-sabha-elections-poll-result-updates-sarbananda-sonowal-bjp-manoj-dhanowar-aap-lurinjyoti-gogoi-assam-jatiya-parishad/articleshow/110653371.cms'
      }
    ]
  },
};

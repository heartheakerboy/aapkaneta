// Madhya Pradesh ke MLAs ka news/RTI-verified kaam (district-wise batches).
// Key = neta slug, value = Work[] entries. Neutral, source-cited entries only.
// (Abhi khaali — works mining baad me hogi.)
export const mpWorks: Record<string, any[]> = {};

// ---- Agar-Malwa district batch (researched 2026-10-13) ----
// Agar-Malwa district batch fragment (researched 2026-10-13) — DO NOT export; appended to works_mp.ts
mpWorks['bhairon-singh-bapu'] = [
  {
    title: 'Susner me Sheetla Mata mandir aur Bagadawat Dham me nirman karyon ke liye 5 lakh ka vidhayak-nidhi sanction',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Aug 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/rajgarh/news/an-amount-of-rs-20-lakh-has-been-approved-for-various-development-works-in-the-city-dbp-137987810.html',
    date: '2026-08',
    note: 'Bhaskar ke mutabik Susner nagar ke vibhinn vikas karyon ke liye vidhayak Bhairon Singh Bapu aur Rajya Sabha sansad Digvijay Singh dwara kul Rs. 20 lakh swikrit kiye gaye; isme se Rs. 5 lakh vidhayak-nidhi se Sheetla Mata mandir aur Bagadawat Dham me nirman karyon ke liye swikrit hue. Status: swikriti — nirman karyanwayan ki alag khabar nahi mili. Caveat: tithi article me "2 mahine pehle" likhi thi (Aug 2026, est.); isi Rs. 5 lakh ki ghoshna Oct 2024 ki Mahashtami par bhi hui thi (sthaniya report) — double-counting se bachne ke liye ek hi entry rakhi hai.',
    period: '2023-2028',
  },
];
mpWorks['madhav-singh'] = [
  {
    title: 'Gram Bhayana me lagbhag 24 lakh ki puliya ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'ETV Bharat, 9 Nov 2025',
    sourceUrl: 'https://www.etvbharat.com/hi/state/agar-malwa-mla-and-nagar-panchayat-president-dispute-over-culvert-foundation-ston-oppose-program-madhya-pradesh-news-mps25110902990',
    date: '2025-11-09',
    note: 'Agar-Malwa ke gram Bhayana me lagbhag Rs. 24 lakh ki lagat se banne wali puliya ka bhoomi-pujan vidhayak Madhav Singh (Madhu Gehlot) ne kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Note: isi karyakram me Janpad adhyaksh khaimi ke virodh ki khabar bhi hai (party ke andar ka vivaad); puliya ka kaam swayam par iska koi asar nahi — isliye entry rakhi hai.',
    period: '2023-2028',
  },
];

// ---- Alirajpur district batch (researched 2026-10-13) ----
// Alirajpur (ST) batch 1 — Chouhan Nagar Singh (researched 2026-10-13) — DO NOT export; appended to works_mp.ts
mpWorks['chouhan-nagar-singh'] = [
  {
    title: 'Chandpur me adivasi senior balak chhatravas bhavan (lagat Rs. 4.12 crore) ka bhoomi-pujan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'CGINFO24, 10 Jan 2025',
    sourceUrl: 'https://cginfo24.com/2025/01/10/minister-nagar-performed-bhoomi-pujan-of-the-tribal-senior-boys-hostel-building/',
    date: '2025-01-10',
    note: 'Alirajpur jile ke Chandpur me Rs. 4.12 crore ki lagat se banne wale adivasi senior balak chhatravas bhavan ka bhoomi-pujan unhone kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: khabar press-release style me Bhopal dateline se aayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Sorwa gaon me 33 KV vidyut grid (lagat Rs. 3.25 crore) ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 25 May 2025',
    sourceUrl: 'https://www.freepressjournal.in/bhopal/minister-nagar-singh-chouhan-performs-bhoomi-pujan-for-electricity-grid-and-road-project-in-alirajpur',
    date: '2025-05-25',
    note: 'Sorwa gaon (Alirajpur) me Rs. 3.25 crore ki lagat wale 33 KV vidyut grid ka bhoomi-pujan unhone kiya; FPJ ke mutabik ye unke chunav-se-pehle ke vaade ko poora karta hai (kshetra ko ab tak Alirajpur aur Sodwa se baari-baari bijli milti thi). Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Sorwa me 9.2 km sadak — Pratap Falia se Darwadia Falia (lagat Rs. 13.69 crore) — ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 25 May 2025',
    sourceUrl: 'https://www.freepressjournal.in/bhopal/minister-nagar-singh-chouhan-performs-bhoomi-pujan-for-electricity-grid-and-road-project-in-alirajpur',
    date: '2025-05-25',
    note: 'Usi karyakram me Pratap Falia se Darwadia Falia tak 9.20 km sadak pariyojna (lagat Rs. 13.69 crore) ka bhoomi-pujan bhi unhone kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Sondwa block me Chilwat Mathwad se Dhanbaydi tak 7 km sadak (lagat Rs. 785.16 lakh) ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Vinay Ujala, 28 Jan 2026 (est.)',
    sourceUrl: 'http://vinayujala.com/news.php?id=strong-road-network-leads-to-overall-development-of-villages-minister-chauhan-600811',
    date: '2026-01-28',
    note: 'Sondwa block ke gram Chilwat Mathwad se Dhanbaydi tak 7 km sadak marg (lagat Rs. 785.16 lakh) ka bhoomi-pujan unhone kiya; karyakram me PWD ke adhikari bhi maujood the. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: article me tithi "budhwar" ke roop me likhi thi; image URL dir (202601) aur crawl timing ke aadhar par 28 Jan 2026 (est.) maani hai.',
    period: '2023-2028',
  },
  {
    title: 'Vegalgav barrage (Rs. 3.11 crore) aur Achpai talab (Rs. 3.87 crore) ka lokarpan — sinchai/jal-sangrahan',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'CNewsBharat, 2 Feb 2026',
    sourceUrl: 'https://cnewsbharat.com/hindi/news/alirajpur-157494',
    date: '2026-02-02',
    note: 'Unhone gram Vegalgav me Vegalgav barrage (lagat Rs. 3,11,82,000) aur gram Achpai me Achpai talab (lagat Rs. 3,87,32,000) ka lokarpan kiya; report ke mutabik dono jal-sanrachnaon se jal-uplabdhata badhegi aur sinchai vyavastha sudridh hogi. Status: lokarpan (nirman purn, janata ko samarpit).',
    period: '2023-2028',
  },
  {
    title: 'Chikhli ke Uchla Falia aur Zhari Falia me 2 vidyut DP ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'CNewsBharat, 2 Feb 2026',
    sourceUrl: 'https://cnewsbharat.com/hindi/news/alirajpur-157494',
    date: '2026-02-02',
    note: 'Usi pravas me unhone gram Chikhli ke Uchla Falia aur Zhari Falia me 2 vidyut DP ka lokarpan kiya, jisse low-voltage aur bijli-aapurti ki samasya se rahat milegi. Status: lokarpan (DP sthapit, vidyut pravah prarambh).',
    period: '2023-2028',
  },
  {
    title: 'Zila aspataal ke paas public garden ke liye Rs. 66 lakh anudan ki ghoshna (prastav unke dwara)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 3 Mar 2026',
    sourceUrl: 'https://www.freepressjournal.in/indore/indore-news-66-lakh-grant-for-construction-of-public-garden-in-aalirajpur',
    date: '2026-03-03',
    note: 'Nagarsingh Chouhan aur BJP jila adhyaksh ke prastav par, nagariya prashasan mantri Kailash Vijayvargiya ne zila aspataal ke paas public garden ke liye Rs. 66 lakh ke anudan ki ghoshna ki. Status: ghoshna — FPJ ke mutabik "funds would be disbursed promptly following departmental formalities", yaani disbursal us samay pending tha; swikriti/vividhikaran ki alag khabar nahi mili. Caveat: ghoshna doosre mantri dwara hui, unka concrete role prastavak ke roop me hai.',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak-nidhi se Pipliawat, Dedkunda, Badadli aur Baydiya me vidyut DP ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'CNewsBharat, 14 Jun 2026 (est.)',
    sourceUrl: 'https://cnewsbharat.com/hindi/news/alirajpur-172521',
    date: '2026-06-14',
    note: 'Unhone vidhayak-nidhi se swikrit vidyutikaran karyon ke tahat gram Pipliawat, gram Dedkunda, gram Badadli aur gram Baydiya ke 2 falion me sthapit vidyut DP ka lokarpan kiya. Report ke mutabik grameenon ki maang par vidhayak-nidhi se karyon ko swikriti dekar purn karaya gaya. Status: lokarpan (DP sthapit, vidyut pravah prarambh). Caveat: article par print tithi nahi thi; image upload dir (14-June-2026) ke aadhar par tithi est. hai.',
    period: '2023-2028',
  },
  {
    title: 'Sukhi Bawdi me Ayushman Arogya Mandir up-swasthya kendra ka shubharambh',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Navabharat, 13 Sep 2026',
    sourceUrl: 'https://navabharat.com/?p=569633',
    date: '2026-09-13',
    note: 'Unhone Sukhi Bawdi me Ayushman Arogya Mandir up-swasthya kendra ka shubharambh kiya; report ke mutabik Sukhi Bawdi aur aaspaas ki falion ke grameenon ko ab prathmik swasthya sewaen sthaniya star par milengi (garbhvati mahilaon ki jaanch sahit). Status: lokarpan/shubharambh (kendra prarambh).',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak-nidhi se 3 vidyut DP — Sukhi Bawdi ke Mervadi Falia (5.6 lakh), Sastiya Falia (3.573 lakh) aur Darza ke Dhamodi Falia (4.867 lakh) — ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Navabharat, 13 Sep 2026',
    sourceUrl: 'https://navabharat.com/?p=569633',
    date: '2026-09-13',
    note: 'Usi pravas me unhone vidhayak-nidhi se sthapit 3 vidyut DP ka lokarpan kar vidyut pravah prarambh kiya — Sukhi Bawdi ke Mervadi Falia (Rs. 5.6 lakh), Sastiya Falia (Rs. 3,57,300) aur gram Darza ke Dhamodi Falia (Rs. 4,86,730). Status: lokarpan (DP sthapit, vidyut pravah prarambh).',
    period: '2023-2028',
  },
  {
    title: 'Phoolmal me 50-seater naveen balak chhatravas ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Navabharat, 13 Sep 2026',
    sourceUrl: 'https://navabharat.com/?p=569633',
    date: '2026-09-13',
    note: 'Unhone Phoolmal me 50-seater naveen balak chhatravas ka lokarpan kiya. Status: lokarpan (chhatravas taiyar, janata ko samarpit).',
    period: '2023-2028',
  },
];
// Alirajpur district batch fragment (researched 2026-10-13) — DO NOT export; appended to works_mp.ts
mpWorks['sena-mahesh-patel'] = [
  {
    title: 'Jobat kshetra me 2.5 crore ke 6 nirman karyon ki prashasanik swikriti (4 puliya, samudayik bhavan, manglik bhavan)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'SJ News MP, Mar 2024 (est.)',
    sourceUrl: 'https://sjnewsmp.com/?p=26340',
    date: '2024-03',
    note: 'Vidhayak Sena Mahesh Patel ki anushansa par 2.5 crore ke lagbhag 6 karyon ki prashasanik swikriti: puliya Patel faliya gram Ambua (65.11 lakh), puliya Bhurgaata faliya gram Salkheda (64.36 lakh), puliya Bilgaata faliya gram Indersingh ki Chauki (47.56 lakh), samudayik bhavan Harijan faliya gram Badi Khattali (26.72 lakh), manglik bhavan Shiv faliya gram Dabdi (26.72 lakh), puliya Temri faliya gram Thapli (25.50 lakh). Status: swikriti — article ke anusar bhoomi-pujan aane wale dinon me hona tha (stage alag khabar me nahi mila, sirf Indersingh ki Chauki wali puliya ka bhoomi-pujan Jan 2025 me report hua — neeche alag entry).',
    period: '2023-2028',
  },
  {
    title: '10 nistar talab (gaon ke paani ke talab) ke nirman ki 8 crore se adhik ki prashasanik swikriti',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Jhabua Live, 5 Mar 2024',
    sourceUrl: 'https://jhabualive.com/alirajpur/%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%be%e0%a4%af%e0%a4%95-%e0%a4%b8%e0%a5%87%e0%a4%a8%e0%a4%be-%e0%a4%aa%e0%a4%9f%e0%a5%87%e0%a4%b2-%e0%a4%95%e0%a5%80-%e0%a4%85%e0%a4%a8%e0%a5%81%e0%a4%b6%e0%a4%82/',
    date: '2024-03-05',
    note: 'Vidhayak ki anushansa par 10 nistar talabon ke nirman ki prashasanik swikriti (kul lagbhag 8.14 crore): Richkhodra faliya gram Jamli (130 lakh), Devka faliya Katkunwa (49 lakh), Pachaimli faliya Chamar Begda (51.80 lakh), Jhotarada faliya Amankunwa (49.62 lakh), Rochli faliya Mathna (128.96 lakh), Maudi faliya Gerughati (30.06 lakh), Semal faliya Miriyawat (45 lakh), Bamna faliya Kakadbari (74.40 lakh), Patel faliya Pastar (125 lakh), Tadvi faliya Panguda (130 lakh). Status: swikriti — bhoomi-pujan aane wale dinon me hona tha; karyanwayan/purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Gram Ublad me 5.94 lakh ki vidyut DP ka lokarpan (vidhayak nidhi)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Jhabua Live, 5 Nov 2024',
    sourceUrl: 'https://jhabualive.com/alirajpur/%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%be%e0%a4%af%e0%a4%95-%e0%a4%b8%e0%a5%87%e0%a4%a8%e0%a4%be-%e0%a4%ae%e0%a4%b9%e0%a5%87%e0%a4%b6-%e0%a4%aa%e0%a4%9f%e0%a5%87%e0%a4%b2-%e0%a4%a8%e0%a5%87-%e0%a4%95-2/',
    date: '2024-11-05',
    note: 'Vikhand Jobat ke gram Ublad me 5,94,179 rupaye ki lagat se vidhayak nidhi se swikrit vidyut DP (transformer) ka vidhayak ne nariyal fodkar lokarpan kiya. Status: lokarpan — karya purn, grameenon ko bijli milni shuru. Note: sambodhan me vidhayak ne kaha ki ve pehle isi gram me puliya ka udghatan kar chuki hain (Ublad puliya udghatan ki alag khabar nahi mili, isliye uski entry nahi banayi).',
    period: '2023-2028',
  },
  {
    title: 'Indersingh ki Chauki (Bilgata faliya) me 47.56 lakh ki puliya ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Jhabua Live, 31 Jan 2025',
    sourceUrl: 'https://jhabualive.com/alirajpur/%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%be%e0%a4%af%e0%a4%95-%e0%a4%b8%e0%a5%87%e0%a4%a8%e0%a4%be-%e0%a4%ae%e0%a4%b9%e0%a5%87%e0%a4%b6-%e0%a4%aa%e0%a4%9f%e0%a5%87%e0%a4%b2-%e0%a4%a8%e0%a5%87-47-%e0%a4%b2/',
    date: '2025-01-31',
    note: 'Gram panchayat Indersingh ki Chauki ke Bilgata faliya me 47.56 lakh ki lagat se banne wali puliya ka vidhayak ne bhoomi-pujan kiya. Status: bhoomi-pujan — nirman shuru hona tha, purnata ki alag khabar nahi mili. Note: yahi karya March 2024 wali 2.5 crore ki swikriti-soochi me shamil tha — yahan stage-update entry hai, double-count nahi.',
    period: '2023-2028',
  },
  {
    title: 'Gram Badi Khattali me 1.07 crore ke vikas karyon ka bhoomi-pujan (samudayik bhavan + retaining wall)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Alirajpur News, May 2025',
    sourceUrl: 'https://www.alirajpurnews.in/2025/05/2780.html',
    date: '2025-05',
    note: 'Vidhayak ki anushansa par gram Badi Khattali me kul lagbhag 1.07 crore ke karyon ka bhoomi-pujan: samudayik bhavan (25 lakh) aur retaining wall (82 lakh). Cabinet mantri Nagar Singh Chauhan mukhya atithi the. Status: bhoomi-pujan — nirman shuru hona tha. Caveat: 25 lakh ka samudayik bhavan March 2024 ki swikriti-soochi ke 26.72 lakh wale samudayik bhavan se sambandhit ho sakta hai — is entry ko swikriti nahi, bhoomi-pujan stage ki khabar mana gaya hai taaki double-count na ho. Retaining wall (82 lakh) nayi swikriti hai. Usi karyakram me sanskar-grih ki sirf maang rakhi gayi thi — swikriti/bhoomi-pujan nahi, isliye entry me shamil nahi.',
    period: '2023-2028',
  },
  {
    title: 'Semalaya (Paneri Sigand faliya) aur Badaguda (Wadli faliya) me vidyut DP vistaar karyon ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'KBS TV News, 1 Jun 2025',
    sourceUrl: 'https://www.kbstvnews.com/2025/06/jobat-mla-sena-mahesh-patel-inaugurated.html',
    date: '2025-06-01',
    note: 'Vidhayak ne gram panchayat Semalaya (Paneri Sigand faliya) me vidyut DP vistaar karya ka lokarpan kiya aur Badaguda gram panchayat kshetra ke Wadli faliya me naveen vidyut DP vistaar line ka feeta katkar udghatan kiya. Status: lokarpan — karya purn.',
    period: '2023-2028',
  },
  {
    title: 'Masni nadi paar faliya aur Bhiti Patel faliya me vidyut DP ka lokarpan (vidhayak nidhi, kul 12.01 lakh)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Jansampark Khabar, 11 Oct 2025',
    sourceUrl: 'https://jansamparkkhabar.com/archives/12794',
    date: '2025-10-11',
    note: 'Vidhayak nidhi se gram Masni nadi paar faliya (5.36 lakh) aur gram Bhiti Patel faliya (6.65 lakh) me vidyut DP lagakar vidhayak ne lokarpan kiya. Status: lokarpan — karya purn, grameenon ko sthayi bijli suvidha milni shuru.',
    period: '2023-2028',
  },
  {
    title: 'Gram panchayat Puniyawat me 2 km niji-kharch ki sadak ka nirman (Semla faliya tak)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Oct 2025 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/alirajpur/news/mla-built-a-road-in-alirajpur-at-his-own-expense-136087517.html',
    date: '2025-10',
    note: 'Gram panchayat Puniyawat me Semla faliya tak lagbhag 2 km lambi sadak ka nirman niji kharch se hua — vidhayak Sena Mahesh Patel aur unke pati (Adivasi Vikas Parishad ke pradesh upadhyaksh Mahesh Patel) ke sahyog se. 30-40 parivar labhanvit; barish me aavagaman, school, aspatal aur bazaar tak pahunch aasan hui. Status: purn — sarkari nidhi se nahi, vyaktigat kharch se bana karya; tithi article me nahi thi (Oct 2025, est.).',
    period: '2023-2028',
  },
  {
    title: '30 crore se adhik ki 7 sadak pariyojnaon ka bhoomi-pujan (7 Dec 2025)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Khabar Digital, 7 Dec 2025',
    sourceUrl: 'https://khabardigital.com/madhya-pradesh/jobat-road-construction-projects-bhoomipujan-minister-nagar-singh-chauhan-mla-sena-mahesh-patel/',
    date: '2025-12-07',
    note: 'Vidhayak dwara sadan me prastut prastavon ke aadhar par swikrit 7 sadak pariyojnaon (30 crore se adhik lagat) ka cabinet mantri Nagar Singh Chauhan aur vidhayak ne sanyukt roop se bhoomi-pujan kiya: Borkundiya main road se Talab faliya, Chhotipol main road se Chhota Bhavta, Kakadbadi main road se Singadiya-Bamniya faliya, Barjhar higher secondary school se Mori faliya, Barjhar Baneshwar Mahadev se Mahendra main road, Badgaon panchayat bhavan se Bariya faliya, Ringol Malmasuri se Khandivav hote hue Bhandari faliya tak. Status: bhoomi-pujan sampann — nirman karya shuru. Note: swikriti ki ghoshna me 8 sadaken (32.08 crore) batayi gayi thi (Voice of Jhabua, Dec 2025); bhoomi-pujan 7 pariyojnaon ka hua — Sejawada main road se Kheriya faliya wali sadak ghoshna-soochi se baahar rahi.',
    period: '2023-2028',
  },
  {
    title: '4 gramon me kul 27.95 lakh ke vidyut DP ka lokarpan (Bilasa, Nehtada, Sindhi, Bhanpur Pali)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Bhopal Samachar, 10 Feb 2026',
    sourceUrl: 'https://www.bhopalsamachar.com/2026/02/blog-post.html',
    date: '2026-02-10',
    note: 'Vidhayak ne ek din me 4 sthanon par vidyut DP ka lokarpan kiya: gram Bilasa ke Chaukidar faliya (7.07 lakh), gram Nehtada ke Shivni faliya (6.55 lakh), gram Sindhi ke Gadariya faliya (6.93 lakh), gram Bhanpur Pali (7.39 lakh) — kul 27.95 lakh. Status: lokarpan — karya purn.',
    period: '2023-2028',
  },
  {
    title: '54 jirnajirn school bhavanon ke navin nirman ki swikriti (lagbhag 10.44 crore se adhik)',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Navabharat, 13 Apr 2026',
    sourceUrl: 'https://navabharat.com/?p=445820',
    date: '2026-04-13',
    note: 'Vidhayak ke satat prayason se Jobat vidhan sabha kshetra ke 54 jirnajirn/asurakshit school bhavanon ke liye navin bhavan nirman ki swikriti — Udaygarh, Alirajpur, Jobat, Katthiwada aur Chandrashekhar Azad Nagar vikas-khandon ke vidyalaya shamil; nirman evam marammat par lagbhag 10.44 crore se adhik kharch hoga. Status: swikriti — vidhayak ne samay-seema me purnata ke liye satat nigrani ka aashwasan diya; karyanwayan ki alag khabar nahi mili.',
    period: '2023-2028',
  },
];
// ---- Anuppur district batch (researched 2026-10-13) ----
// Dilip Jaiswal — Kotma (AC-86), BJP, Anuppur district, MP — researched 2026-10-13
// Tenure: Dec 2023+ (MLA Kotma; also MoS (Independent Charge), Cottage & Village Industries, MP govt)
// Sources: Hindi + English news search (Dec 2023–2026); har source browser.open se verify.
// Katkona event 22 Feb 2024: wahi din (Thursday) ka hai — publish date = event date.
// DO NOT export; appended to works_mp.ts
mpWorks['dilip-jaiswal'] = [
  {
    title: 'Katkona (Kotma block) me Rs. 22 lakh ka navin up-swasthya kendra — lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'B4Times India, 22 Feb 2024',
    sourceUrl: 'https://b4timesindia.com/97163/',
    date: '2024-02-22',
    note: 'Kotma block ki Katkona gram panchayat me Rs. 22 lakh se nirmit navin up-swasthya kendra ka lokarpan unhone swayam kiya. Status: lokarpan (nirman purn, janata ko samarpit). Caveat: khabar press-release style me hai; wahi samachar me unko mantri pad se sambodhit kiya gaya hai, lekin karyakram unke nirvachan kshetra (Kotma block) me tha aur bhoomika unki vyaktigat thi.',
    period: '2023-2028',
  },
  {
    title: 'Katkona me Rs. 38 lakh ki gaushala — lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'B4Times India, 22 Feb 2024',
    sourceUrl: 'https://b4timesindia.com/97163/',
    date: '2024-02-22',
    note: 'Usi Katkona karyakram me Rs. 38 lakh se bani gaushala ka lokarpan bhi unhone kiya. Status: lokarpan (nirman purn, janata ko samarpit). Kul 4 pariyojnaon (Rs. 1.47 crore) ka lokarpan/shilanyas ek hi karyakram me hua tha.',
    period: '2023-2028',
  },
  {
    title: 'Katkona me Rs. 20 lakh ka naya gram panchayat bhavan — shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'B4Times India, 22 Feb 2024',
    sourceUrl: 'https://b4timesindia.com/97163/',
    date: '2024-02-22',
    note: 'Usi karyakram me Rs. 20 lakh ki lagat se banne wale naye gram panchayat bhavan ka shilanyas unhone kiya. Status: shilanyas — nirman karya shuru hona tha, purnata ki alag khabar nahi mili; sanction ko completion nahi mana gaya hai.',
    period: '2023-2028',
  },
  {
    title: 'Katkona se Harri pahunch gravel marg (Rs. 67 lakh) — shilanyas',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'B4Times India, 22 Feb 2024',
    sourceUrl: 'https://b4timesindia.com/97163/',
    date: '2024-02-22',
    note: 'Rs. 67 lakh ki lagat wale Katkona se Harri pahunch gravel marg nirman karya ka shilanyas unhone kiya. Status: shilanyas — nirman karya shuru hona tha, purnata ki alag khabar nahi mili; sanction ko completion nahi mana gaya hai.',
    period: '2023-2028',
  },
];

// REJECTED (8): 1) Baihatola anganwadi bhoomi-pujan Rs. 11.22L (25 Sep 2026) — sirf Dailyhunt aggregator + public.app par mila, koi canonical source nahi; 2) Sajah nala hadsa me vidhayak-nidhi se 25-25 hazar ki ghoshna (navabharat, 7 Jul 2025) — ghatna Anuppur shahar ki thi (Kotma AC ke bahar), ghoshna-mat; 3) Anuppur me scooty vitran karyakram — doosri AC, event-upasthiti (weak attribution); 4) Anuppur BJP jila karyalaya bhoomi-pujan — YouTube-only source + party karyakram; 5) Kotma building-collapse bayan (ANI/latestly, Apr 2026) — sirf media statement, kaam nahi; 6) Bangawan school/aspataal expose video — YouTube-only, kaam nahi; 7) CM ka Anuppur me Rs. 443cr karyakram — CM ka program, Jaiswal ki concrete bhoomika unclear; 8) Bihar ke "Dr. Dilip Kumar Jaiswal" — alag vyakti.
// Bisahu Lal Singh — Anuppur (ST), BJP, Anuppur district, MP (AC-87)
// Current status: Dec 2023 se sirf vidhayak; Mohan Yadav sarkar me MANTri NAHI hain
// (Dec 25, 2023 cabinet expansion me jagah nahi mili — The Week / Deccan Chronicle).
// Isliye statewide-mantri-faisla exclusion apply karne ki zaroorat nahi; sirf
// Dec 2023 ke baad ke constituency-level kaam liye gaye.
mpWorks['bisahu-lal-singh'] = [
  {
    title: 'Jamuna Colliery (Pasan) me sarkari utkrisht uchchatar madhyamik vidyalaya ke 5.45 crore ke naveen bhavan ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Live Good Morning, 20 May 2025',
    sourceUrl: 'https://livegoodmorning.com/%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A5%8D%E0%A4%AF/%E0%A4%85%E0%A4%A8%E0%A5%82%E0%A4%AA%E0%A4%AA%E0%A5%81%E0%A4%B0/anuppur-news-mla-inaugurated-the-new-building-of-anuppurs/cid16751913.htm',
    date: '2025-05-18',
    note: 'Aadivasi vikas vibhag ke antargat Rs. 545.24 lakh ki lagat se nirmit Shaskiya Utkrisht Uchchatar Madhyamik Vidyalaya, Jamuna Colliery (Nagarpalika Pasan) ke naveen bhavan ka lokarpan 18 May 2025 ko vidhayak Bisahulal Singh ne mukhya atithi ke roop me kiya. Unhone swayam kaha ki unhone is bhavan ka bhoomi-pujan bhi kiya tha. Status: lokarpan — kaam purn ho chuka hai (nirman adhoora nahi). Note: is school ka bhoomi-pujan pichhle tenure me hua hoga, lekin lokarpan khud Dec 2023 ke baad ka hai aur neta ne khud lokarpan kiya — isliye tenure rule me aata hai.',
    period: '2023-2028',
  },
];
// REJECT LOG (Bisahu Lal Singh, Anuppur ST):
// 1. "21 crore ke vikas karyon ka bhoomi-pujan/lokarpan" (ETV Bharat, Sep 2020) — TENURE FAIL: Dec 2023 se pehle, mantri-kaaryakaal ka kaam. Reject.
// 2. "302.17 crore ke vikas karyon ka bhoomi-pujan/lokarpan, CM Shivraj" (Zee News, 2020 by-election se pehle) — TENURE FAIL (2020) + neta sirf upasthit the, bhoomi-pujan CM ne kiya. Reject.
// 3. Hari-Barri marg pul/swikriti (publicpravakta, Oct 2021) — TENURE FAIL (2021). Reject.
// 4. Kapildhara (Amarkantak) marg bhoomi-pujan, 5.10 km, Rs. 10.18 crore (livevns.news/Hindustan Samachar, Sep 2025) — WEAK ATTRIBUTION: bhoomi-pujan PWD mantri Rakesh Singh ne kiya, 2 anya mantri + MP + kai neta maujood; Bisahulal Singh sirf mehmaano me ek. Sirf maujoodgi. Reject.
// 5. Jaitahari-Jhaantal (Ghoghra nala/Tipan nadi) pul — MAANG/PROPOSAL: neta ne 9 Jan 2025 ko CM ko patra likha aur 29 Jul 2025 ko dhyan-akarshan suchna di; koi swikriti/karya nahi (newsjunctionmpchhattisgarh, Jul 2025). Sirf maang. Reject.
// 6. Anuppur me kendriya krishi mahavidyalaya + vishesh package ki maang (Hindustan Samachar/dabangpublicpravakta, Dec 2025) — MAANG/PROPOSAL: kendriya krishi mantri ko patra likha, koi swikriti nahi. Reject.
// 7. Cholna me Son nadi par Rs. 12 crore pul ka bhoomi-pujan — YouTube-ONLY source + TENURE FAIL (~2022, video dated 1410 days ago). Reject.
// 8. Guruudi nala pul shilanyas (YouTube video, Oct 2026) — YouTube-ONLY source; text/news source nahi mila. Reject.
// 9. Seva-Setu Abhiyan shivir, Pasan (YouTube/Dainik Swaraj Vani, Oct 2026) — YouTube-ONLY + sirf maujoodgi (neta mukhya atithi; labharthiyon ko sarkari camp se yojna-labh). Reject.
// 10. Seva se Sankalp Abhiyan / 40 medhaviyon ko scooty vitran (indiapublickhabar, Oct 2026) — WEAK ATTRIBUTION: neta karyakram me maujood the; scooty vitran aur sankalp mantri Dilip Jaiswal dwara. Sirf maujoodgi. Reject.
// 11. Amarkantak Ramghat suspension (jhula) pul, Rs. 10 crore (ETV Bharat, Jun 2025) — NO ATTRIBUTION: paryatan vibhag ki PRASAD yojna ka kaam; neta se koi sambandh nahi. Reject.
// 12. FB/IG self-posted daawe — nahi mile; koi daawa entry nahi banayi.
// Kul: 1 entry qualified, 12 leads reject.
// Madhya Pradesh ke MLAs ka news/RTI-verified kaam — Anuppur district batch (researched 2026-10-13)
// Key = neta slug, value = Work[] entries. Neutral, source-cited entries only.
// Phundelal Singh Marko (Pushprajgarh ST, AC-88, INC) — koi qualifying kaam nahi mila.
// Dec 2023 me teesri baar chune gaye; BJP sarkar me vipakshi (INC) vidhayak hain.
// Hindi + English dono me 7+ targeted searches (Dec 2023–2026) ke baad bhi unke naam par
// koi completed/sanction/bhoomi-pujan/lokarpan/shilanyas/ghoshna wala kaam news me nahi mila.
// Jo mila wo sab andolan/maang ya purane karyakaal ka tha (reject log neeche).
// Wajah: vipakshi vidhayak ke vidhayak-nidhi karyon ki khabar sthaniya press me kam,
// aur 2024 Lok Sabha (Shahdol) chunav ladhne ke baad unki coverage zyadatar
// rajnaitik (dharna/chakkajam/gyapan) rahi, vikas-karya nahi.
mpWorks['phundelal-singh-marko'] = [];

// ---- REJECT LOG (phundelal-singh-marko) ----
// 1. publicpravakta.com, Apr 2023 — Rajendragram me Bhagwan Parshuram dharmshala ke liye
//    Rs. 10 lakh vidhayak-nidhi ki ghoshna + bhoomi-pujan.
//    REJECT: tenure rule — April 2023 current tenure (Dec 2023–) se pehle, pichhle karyakaal (2018-2023) ka.
//    URL: https://www.publicpravakta.com/2023/04/publicpravaktacom_23.html
// 2. Amar Ujala, 10 Jul 2025 — khaad ki kami par Karaundi tiraha par chakkajam/dharna (3 ghante highway jam).
//    REJECT: protest/andolan — koi kaam nahi; "sirf nirikshan/daura NAHI" rule ke dayre me bhi nahi aata.
//    URL: https://www.amarujala.com/video/madhya-pradesh/anuppur/pushparajgarh-mla-blocked-shahdol-amarkantak-main-road-due-to-non-availability-of-fertilizers-to-farmers-anuppur-news-c-1-1-noi1222-3152719-2025-07-10
// 3. Amar Ujala, 22 Sep 2026 — Lakhoura me MNREGA majdoori (2023-24 se Sep 2026 tak lambit) + Lakhaura-Nandpur-Bonda marg poora karane ki maang par dharna.
//    REJECT: sirf maang/protest — marg "poora karane ki maang" hai, kaam ki ghoshna/sanction/lokarpan nahi.
//    URL: https://www.amarujala.com/madhya-pradesh/anuppur/anuppur-congress-protest-over-pending-demands-shahdol-amarkantak-road-blocked-tourists-stranded-2026-09-22
// 4. Bhaskar Hindi, 13 Jul 2026 — unke netritva me Congress ne Anuppur railway adhikari ko gyapan (train stoppage, foot-overbridge, overbridge maangein).
//    REJECT: sirf maang/gyapan — koi kaam swikrit ya poora nahi.
//    URL: https://www.bhaskarhindi.com/city/anuppur/congress-submits-memorandum-regarding-railway-issues-1327635
// 5. Bhaskar Hindi, 28 May 2025 — Giruikhurd ganja baramdagi sthal ka nirikshan + vidhan sabha me mudda uthane ki baat.
//    REJECT: nirikshan/daura + maang — koi kaam nahi.
//    URL: https://www.bhaskarhindi.com/city/shahdol/shahdol-news-congress-district-president-and-pushparajgarh-mla-reached-giruikhurd-shahdol-city-news-updates-1146008
// 6. Free Press Journal, Dec 2024 — Dindori se mazdoor palayan par Omkar Markam ke saath vidhan sabha me dharna.
//    REJECT: vidhayi/sadan activity — kshetra ka kaam nahi.
//    URL: https://www.freepressjournal.in/bhopal/state-assembly-day-2-round-up-congress-mlas-stage-dharna-inside-well-withdrawal-of-cases-against-rallyists-sought-more
// 7. Dainik Bhaskar, Aug 2026 (Rajnandgaon edition) — 56.50 lakh ke vikas karyon (yatri prateekshalay, samudayik bhavan, CC road) ka bhoomi-pujan.
//    REJECT: galat geography + bina naam — article me vidhayak ka naam hi nahi hai aur ye Chhattisgarh ke
//    Rajnandgaon edition ki khabar hai (Dighwadi, Hathra, Khardi, Khadgaon, Pusewada); Pushprajgarh/Anuppur se jodna galat hoga.
//    URL: https://www.bhaskar.com/local/chhattisgarh/rajnandgaon/news/bhoomipujan-was-done-for-the-construction-of-community-hall-and-passenger-waiting-room-dbp-138597470.html
// 8. meadiasamacharsambhagshahdol.blogspot.com, Oct 2025 — Basniha hostel me "apne kote se sadak banwane" ka aarop,
//    lekin poora lekh bhrashtachar/boundary-todna/dhamki ka aarop-patra hai.
//    REJECT: low-credibility blog + vivadaspad aarop-lekh — news-verified kaam nahi.
//    URL: http://meadiasamacharsambhagshahdol.blogspot.com/2025/10/blog-post_16.html
// 9. YouTube (BSP24NEWS, 2025) — chakkajam, sadan-bhashan waghera ke kai videos.
//    REJECT: YouTube-only sources task rules me allowed hi nahi.
// 10. News18/Oneindia/NDTV/The Hindu/BS/Wikipedia/TOI election profiles — jeet, affidavit, 2024 Shahdol LS ummidwari.
//     REJECT: background info only — koi kaam ka zikr nahi.
// SARKARI CHECK: MP Vidhan Sabha/Anuppur jila site par vidhayak-nidhi suchi ki koi saarvajanik entry is
// neta ke naam par trace nahi hui; isliye koi 'sarkari' badge entry bhi nahi bani.


// ---- Ashok Nagar district batch (researched 2026-10-13) ----
// Ashok Nagar district batch 1 — Haribaboo Rai (Ashok Nagar SC, INC) + Jagannath Singh Raghuwanshi (Chanderi, BJP) (researched 2026-10-13) — DO NOT export; appended to works_mp.ts
mpWorks['haribaboo-rai'] = [
  {
    title: 'Ashoknagar shahar ki Garib Rath, Guru Dham aur Ganganagar colonies me bijli sankat par vidhayak-nidhi se transformer dene ki ghoshna',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Dainik Bhaskar, Aug 2025 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/ashoknagar/news/coolers-and-fans-are-not-working-due-to-frequent-power-cuts-135719521.html',
    date: '2025-08-20',
    note: 'Bhaskar ke mutabik bijli sankat se pareshan colony-wasiyon ke virodh ke baad vidhayak mauke par pahunche aur adhikariyon se baat ki; unhone kaha ki ve apni vidhayak-nidhi se transformer uplabdh karayenge. Status: ghoshna (dawa) — swikriti ya transformer lagne ki alag khabar nahi mili. Caveat: tithi article par print nahi thi; search-index ("419 din pehle") aur article me likhe "budhwar" se cross-check karke 20 Aug 2025 (est.) maani hai.',
    period: '2023-2028',
  },
];
mpWorks['jagannath-singh-raghuwanshi'] = [];
// NOTE (2026-10-13): Jagannath Singh Raghuwanshi (Chanderi, BJP) — qualifying kaam nahi mila, profile khaali chhodi. Khali profile weak attribution se behtar.

/*
RESEARCH REPORT (Ashok Nagar district batch 1, researched 2026-10-13):

ENTRIES: 1 (haribaboo-rai: 1; jagannath-singh-raghuwanshi: 0).
SOURCES READ (khole aur padhe gaye): 11.
- Dainik Bhaskar (local Ashoknagar) — bijli-sankat article: Haribaboo Rai ki vidhayak-nidhi se transformer dene ki ghoshna → 1 'dawa' entry (stage: ghoshna). Tithi 20 Aug 2025 (est.) — search-index + "budhwar" cross-check se.
- Navbharat Times — Haribaboo Rai ke PA ka rishwat maamla: MLA ne khud apne PA ko pakadkar collector se shikayat ki, PA suspend; nilambit PA ne badle me MLA par nidhi-commission ke aarop lagaye. NEGATIVE entry nahi banayi — PA ke aaropon par koi case/status report me nahi (rebuttal bhi nahi); sirf aarop = bar poora nahi karta.
- ETV Bharat — bijli chakkajam samarthan: MLA ne sirf ashwasan diya, koi concrete kaam nahi → reject (sirf ashwasan).
- ETV Bharat — police challan vivaad: MLA ne challan kam karne ko kaha, SP ne khari-khari sunayi → reject (ye kaam nahi, controversy hai).
- YouTube — Haribaboo Rai ka zila-aspataal nirikshan video → reject (YouTube-only + sirf nirikshan).
- VocalTV (Hindustan Samachar wire) — Scindia ki Ashoknagar city-plan review: Haribaboo Rai us baithak me maujood hi nahi the (Brajendra Singh Yadav + Raghuwanshi the) → weak attribution, reject.
- YouTube — "Vidhayak Raghuwanshi ne kiya sadak nirman ka bhoomi-pujan" → reject (YouTube-only, bina text corroboration).
- public.app — Isagarh mini-kit vitran me Raghuwanshi ki maujoodgi → reject (public.app-only).
- bccnewsind/cgimpact — Janmashtami 2024 Chanderi: CM Mohan Yadav ne 2.60 cr ke 4 karyon ka bhoomi-pujan aur 11.33 cr ke 3 karyon ka lokarpan kiya; Raghuwanshi manch par maujood/sambodhit → reject (CM ka kaam; MLA ki concrete bhoomika article me saaf nahi — weak attribution).
- Sahara Samachar / Punjab Kesari — Raghuwanshi ne Scindia se train ki maang ki (Kamal Nath ki tareef wala maamla) → reject (sirf maang).
- zee24.in — sthapna-diwas karyakram me kalakaron ko 11-11 hazar ki ghoshna: "MLA tatha zila shiksha vibhag dwara" — attribution ambiguous + raashi trivial → reject.
- thesootr — Scindia ne 5 vidhayakon (Chanderi MLA sahit) ke saath Gadkari se mulakat → reject (maang-meeting, koi swikrit kaam nahi).
- swatantrasamay.com — Vikas Yatra Feb 2023 (tenure se pehle, tab ve zila panchayat adhyaksh the) → reject (pre-Dec-2023).
- emsindia — zila vikas salahkar samiti baithak (Dec 2025): dono MLA sirf maujood → reject (sirf maujoodgi).

CAVEATS: Bhaskar article par print tithi nahi thi; tithi est. hai aur note me disclose ki gayi hai. Dono profiles par tenure (Dec 2023) se pehle ke kaam nahi diye gaye.
*/

// Ashok Nagar district batch — Brajendra Singh Yadav (BJP, Mungaoli AC-34) (researched 2026-10-13) — DO NOT export; appended to works_mp.ts
mpWorks['brajendra-singh-yadav'] = [
  {
    title: 'Maharashtra (Sangli/Kolhapur) me bandhak banae gaye Mungawali ke 80+ shramikon ki mukti — vidhayak ke hastakshep se police karyavahi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Nai Duniya, 26 Dec 2025',
    sourceUrl: 'https://www.naidunia.com/madhya-pradesh/ashoknagar-80-labourers-from-ashoknagar-held-hostage-in-maharashtra-rescued-after-mla-intervention-8420063',
    date: '2025-12-26',
    note: 'Mungawali kshetra ke Aaksi Chakk, Jaroli, Tinsi aur Belai gaon ke 80+ shramik Maharashtra ke Sangli/Kolhapur me ganna katai ke dauraan bandhak banae gaye — majdooron ko Maharashtra le jaane wala bichauliya majdoori ke paise lekar farar ho gaya tha, uske baad thekedaar ne shramikon ko aage Kolhapur le jakar bandhak bana liya (bandhak shramikon se maarpeet ki suchna bhi). Suchna milte hi vidhayak ne tatkal Sangli (Maharashtra) ke police adhikshak aur Ashoknagar SP se sampark karke poore ghatnakram se avgat karaya; unke hastakshep ke baad police karyavahi se sabhi shramik mukt hue, Mungawali thana prabhari Arvind Singh Kachhwah ne thekedaar se majdoori ka bhugtan bhi karaya — sabhi shramik surakshit apne ghar laut rahe hain. Status: hastakshep safal — parinam prapt. Caveat: ye swikrit vikas-nirman karya nahi, balki ek news-verified jan-pratinidhi hastakshep hai (dataset me isi tarah ke hastakshep entries ki misaal hai); Free Press Journal (25 Dec 2025) ne bhi isi ghatna ki swatantra roop se pushti ki hai.',
    period: '2023-2028',
  },
];

// ---- Research report (2026-10-13) — brajendra-singh-yadav (Mungaoli AC-34, Ashok Nagar) ----
// Entries: 1 (Free Press Journal + Nai Duniya — do swatantra credible text sources, dono poori tarah padhe).
// Sources poori tarah khole/padhe: 4 (mpfirst.in Mudra Kala bridge 13 Aug 2024; Free Press Journal 80 labourers 25 Dec 2025;
// Nai Duniya 80 labourers 26 Dec 2025; Navbharat hospital inspection 14 Feb 2026). Ek Dainik Bhaskar short-link desktop-app par
// redirect hui (padhi nahi ja saki — vaise bhi Meerut/UP ki "Mundali" khabar thi, galat sthan/vyakti).
// Searches: Hindi + English + news vertical me ~12 queries (bhumi-pujan/lokarpan/vidhayak-nidhi/swikrit/school/aspataal/peyjal
// sabdo ke saath; naam ki alag-alag vartaniyan: Brajendra/Brijendra/ब्रजेंद्र/बृजेंद्र — Brajendra Singh Rathore Jhansi-UP ko
// hamesha bahar rakha).
// REJECT kiya gaya:
// 1. Mudra Kala gaon pul (Rs. 2 crore, mpfirst.in, 13 Aug 2024): swikriti kendriya mantri Jyotiraditya Scindia ne di; article
//    khud kehta hai vidhayak ko grameenon ne kai baar shikayat ki par "sirf ashwasan" mila — MLA attribution weak/negative, reject.
// 2. Scindia ka Mungaoli daura (sabkikhabar.com): 78 karyon (Rs. 14.24 crore) ka lokarpan/shilanyas Scindia ne kiya — MLA ko
//    credit nahi, weak attribution, reject.
// 3. Parkana–Barkheda 5 km sadak (Rs. 5 crore) ka bhoomi-pujan (public.app, 29 Feb 2024): vidhayak ne khud kiya tha, par
//    public.app-only — text corroboration nahi mila, niyam-anusar reject.
// 4. Mungaoli civil aspataal ka aauchak nirikshan (Navbharat, 14 Feb 2026): nirikshan + baithak, sirf prastav/charcha —
//    nirikshan-only kaam nahi, reject.
// 5. "Mundali" 25 lakh sadak (Dainik Bhaskar): Meerut, Uttar Pradesh ka maamla — galat vyakti/sthan, reject.
// 6. MP-vs-MLA jhadap "Mungaoli mini smart city" baithak (mpbreakingnews.in): Dec 2023 se pehle ka daur (collector Manju Sharma,
//    MP K.P. Yadav ka samay) + vivaad hai, kaam nahi, reject.
// 7. Madhavrao Scindia moorti anavaran karyakram (mpbreakingnews.in): MLA sirf maujood vakta tha — weak attribution, reject.
// 8. Hindu Sammelan me bailgadi (Bhaskar/NBT, Jan 2026): event hai, kaam nahi, reject.
// 9. Scindia daure ki taiyariyon ka nirikshan (public.app, 8 Oct 2025): doosre neta ke karyakram ka nirikshan — reject.
// 10. Thubon anganwadi me moringa powder (public.app, 27 Oct 2025): public.app-only, corroboration nahi — reject.
// 11. YouTube-only videos (sadak hadse me ghaayalon ki madad; Scindia ke karyakram ka sambodhan): text corroboration nahi — reject.
// 12. Koi bhi FB/IG self-posted dawa (dawa badge) layak news-reported claim nahi mila; neta ke khilaf koi credible negative
//    khabar (case/allegation) bhi is avadhi me nahi mili.
// NISHKARSH: Dec 2023 ke baad ka koi news-verified vikas-nirman kaam (sadak/paani/school/aspataal/nidhi-sanction) is MLA ke naam
// par text source me nahi mila — vah Mohan Yadav sarkar me mantri nahi hain, isliye news visibility kam hai. Ek hi qualifying
// entry rakhi hai: FPJ + Nai Duniya dono se verify hua 80+ shramikon ka safal hastakshep (25-26 Dec 2025). Khali profile se behtar
// hai kyunki attribution mazboot hai, weak nahi.

// ---- Balaghat district batch (researched 2026-10-13) ----
// Balaghat district batch 1 — Sanjay Uikey (Baihar ST, INC) + Rajkumar Karrahe (Lanji, BJP)
// Researched 2026-10-14. Fragment — DO NOT export; coordinator appends to src/data/works_mp.ts
// Tenure check: dono Dec 2023 me chune gaye — saari entries Dec 2023 ke baad ki hain. period: '2023-2028'.

mpWorks['sanjay-uikey'] = [
  {
    title: 'Baihar me lagbhag 2 dozen naye anganwadi bhavanon (pratyek 11.22 lakh) ki swikriti — vidhayak ki pehal se',
    category: 'School',
    badge: 'news',
    sourceLabel: 'SeeTimes, Mar 2026 (est.)',
    sourceUrl: 'https://seetimes.in/351609/',
    date: '2026-03',
    note: 'SeeTimes ke mutabik Baihar vidhansabha me rajya ayojana mad se lagbhag 2 dozen naveen anganwadi bhavanon (pratyek 11.22 lakh) ki swikriti vidhayak Sanjay Uikey ke lagatar aur prabhavi prayason se mili; report ke anusar kshetra me anganwadi bhavanon ki kami/jarjjar sthiti ko vidhayak ne shasan star par uthaya tha. Status: swikriti — nirman shuru/purnata ki alag khabar nahi mili. Caveat: (1) article par print tithi nahi thi; search-engine last-updated ke aadhar par Mar 2026 (est.) maani hai. (2) Single local outlet; swikriti ka attribution report par aadharit hai, swatantra roop se verify nahi hui. (3) Nidhi rajya yojna mad ki hai, vidhayak-nidhi ki nahi — credit-pardarshita.',
    period: '2023-2028',
  },
];

mpWorks['rajkumar-karrahe'] = [
  {
    title: 'Kirnapur me janpad panchayat parisar ke paas Shiv mandir me 3 lakh ke sabha-manch ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dakshinapath, 1 May 2025',
    sourceUrl: 'https://dakshinapath.com/news/45693/33',
    date: '2025-05-01',
    note: 'Kirnapur (Lanji-Kirnapur kshetra) me 1 May 2025 ko vidhayak Rajkumar Karrahe ne janpad panchayat parisar ke samip sthit Shiv mandir me 3 lakh ki swikrit rashi se sabha-manch nirman ka bhoomi-pujan kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Kirnapur ke New Gujari Chowk me 25 lakh ke samudayik bhavan ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dakshinapath, 1 May 2025',
    sourceUrl: 'https://dakshinapath.com/news/45693/33',
    date: '2025-05-01',
    note: 'Usi karyakram me vidhayak ne Kirnapur ke New Gujari Chowk me 25 lakh ki swikrit rashi se samudayik bhavan nirman ka bhoomi-pujan kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Kirnapur me 18.25 lakh ke shaskiya basic school bhavan ka bhoomi-pujan (Sarva Shiksha Abhiyan)',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Dakshinapath, 1 May 2025',
    sourceUrl: 'https://dakshinapath.com/news/45693/33',
    date: '2025-05-01',
    note: 'Usi karyakram me vidhayak ne Sarva Shiksha Abhiyan ke tahat swikrit 18.25 lakh ki lagat se shaskiya basic school ke naveen bhavan nirman ka bhoomi-pujan kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Rajegaon-Kirnapur-Lanji-Aamgaon 57.40 km marg ko four-lane highway banane ki swikriti',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Tathya Wani, 8 Aug 2026',
    sourceUrl: 'https://tathyawani.com/major-boost-for-lanji-kirnapur-thanks-to-mla-rajkumar-karrahes-efforts-57-km-road-to-be-widened-to-four-lanes/',
    date: '2026-08-08',
    note: 'Tathya Wani ke mutabik vidhayak Rajkumar Karrahe ke prayason ke baad Rajegaon-Kirnapur-Lanji-Aamgaon marg (lagbhag 57.40 km) ko four-lane highway ke roop me vikasit karne ki swikriti mil gayi hai; report me ise kshetr ki sadak suvidhaon ke liye mahatvapurn kadam bataya gaya hai. Status: swikriti — article ke anusar ab nirman shuru hone ka intezar tha; karyanwayan ki alag khabar nahi mili. Caveat: (1) Single local outlet; swikriti me vidhayak ki bhoomika report par aadharit hai (state/budget-level yojna, unka role "prayas" ke roop me). (2) Swikriti ki ghoshna budget-pariprekshya me hui hai — tender/karyanwayan pending.',
    period: '2023-2028',
  },
  {
    title: 'Umri (Lanji) me vidhayak-nidhi aur anya yojnaon ke karib 2.24 crore ke vikas karyon ke bhoomi-pujan ki ghoshna',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Bahujan Sangathak, 9 Dec (est. 2025)',
    sourceUrl: 'https://www.bahujansangathak.com/news/post-1252.html',
    date: '2025-12',
    note: 'Bahujan Sangathak ke mutabik gram panchayat Umri (Janpad Panchayat Lanji) me 9 December ko vidhayak Rajkumar Karrahe ke hastse kai vikas karyon ka bhoomi-pujan hona tha: (1) PM Khanij Kshetra Kalyan Yojana se Surendra Patle ke ghar se mokshadham tak 300 meter CC road — 10.5 lakh; (2) vidhayak-nidhi se toran dwar — 3.5 lakh; (3) PM Gram Sadak Yojana se Umri se Bori marg — 2,02,12,000; (4) 15ve vitta (janpad-star untied mad) se shaskiya prathmik-sah-madhyamik shala Umri me boundary wall — 6 lakh; (5) vidhayak-nidhi se Vitthal Rukhmai mandir ke paas sabha manch — 2 lakh. Status: ghoshna — article preview style me likha tha ("aaj ... kiya jana hai"), yaani karyakram se pehle ki report; bhoomi-pujan sampann hone ya karyon ke karyanwayan ki alag khabar nahi mili. Caveat: article me saal nahi likha tha (sirf "9 December"); publish/crawl timing ke aadhar par Dec 2025 (est.) maana hai — tenure (2023-2028) ke andar.',
    period: '2023-2028',
  },
];
// Balaghat district batch 2 — Madhu Bhau Bhagat (Paraswada AC-110, INC) + Anubha Munjare (Balaghat AC-111, INC)
// Researched 2026-10-14. Tenure: Dec 2023– (current MLAs, opposition in BJP govt).
// DO NOT export; appended to works_mp.ts by coordinator.
// Fragment me koi export declaration nahi rakhi hai (instructions ke anusar).

// ---- Anubha Munjare — Balaghat (AC-111), INC, Balaghat district ----
mpWorks['anubha-munjare'] = [
  {
    title: 'Pathari laghu jalashay ki naharon ke sudridhikaran evam lining ko lagbhag 2.70 crore ki punarikshit prashasanik swikriti (Khamaria block, 30+ gaon)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'SeeTimes, 7 Oct 2026 (est.)',
    sourceUrl: 'https://seetimes.in/390213/',
    date: '2026-10-07',
    note: 'Balaghat vidhan sabha kshetra ke Pathari laghu jalashay ki naharon ke sudridhikaran/lining karya (lagbhag Rs. 2.70 crore) ko punarikshit prashasanik swikriti mili; report ke mutabik isse Khamaria block ke 30 se adhik gramon ke kisanon ko sinchai-labh ki ummeed hai. Vidhayak ki concrete bhoomika: unhone ye vishay lagatar CM Mohan Yadav aur jal sansadhan vibhag ke apar mukhya sachiv ke samaksh uthaya aur vidhan sabha me bhi Pathari jalashay ki naharon ki sthiti ka mudda uthaya (vidhan sabha abhilekh me Rs. 270.37 lakh ka prastav RRR mad ke antargat). Swikriti par unhone CM Mohan Yadav aur jal sansadhan mantri Tulsiram Silawat ka aabhar vyakt kiya. Credit-pardarshita: swikriti ka faisla madhya pradesh shasan ka hai; vidhayak ki bhoomika satat maang/anushansa ki rahi. Status: swikriti — report ke mutabik nivida aur anya vibhagiya prakriyaen us samay baki thin; nirman prarambh ki alag khabar nahi mili. Caveat: article par print tithi nahi thi; search-index ("7 din pehle") se 7 Oct 2026 (est.) maani hai.',
    period: '2023-2028',
  },
  {
    title: 'Balaghat-Lalbarra kshetra me 12 naveen anganwadi bhavanon ki swikriti (pratyek 11.22 lakh, kul lagbhag 1.35 crore)',
    category: 'School',
    badge: 'news',
    sourceLabel: 'SeeTimes, Mar 2026 (est.)',
    sourceUrl: 'https://seetimes.in/351415/',
    date: '2026-03',
    note: '17 Dec 2025 ke vidhan sabha vishesh satra me bhavan-vihin anganwadi kendron ka mudda uthane, mahila-bal vikas mantri Nirmala Bhuria ko patra/mang-patra bhejne aur Bhopal me unse pratyaksh bhet kar maang rakhne ke baad Balaghat vidhan sabha kshetra me 12 naveen anganwadi bhavanon ki swikriti mili — pratyek Rs. 11.22 lakh, kul Rs. 1,34,64,000. Sthan: gram panchayat Bharveli (kendra 04, kendra 07), gram panchayat Bagholi (kendra 03), gram Ranikuthar mini, gram Chandrapuri ke Sarjatola, Rategaon ke Awastola, Balaghat nagarpalika kshetra ward 08 (kendra 21), Prem Nagar (kendra 80), kendra 54, Budhi (kendra 32), Itwariganj (kendra 41), Saraswati Nagar (kendra 62). Category School: anganwadi pre-school shiksha + poshan kendra hai (mahila-bal vikas vibhag). Credit-pardarshita: pradesh ke 2532 anganwadi bhavanon ki statewide swikriti mantri Nirmala Bhuria ne di; vidhayak ki concrete bhoomika sadan me dhyan-akarshan + patra + mantri se pratyaksh bhet rahi, jiske baad unke kshetra ko ye 12 bhavan mile. Status: swikriti — nirman us samay shuru hona baki tha. Caveat: article par print tithi nahi thi; search-index (198 din pehle) se Mar 2026 (est.) maani hai.',
    period: '2023-2028',
  },
  {
    title: 'Gram panchayat Pandarwani Lalbarra me main road se Visarjan Ghat tak cement sadak (7.50 lakh) ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'SeeTimes, Mar 2026 (est.)',
    sourceUrl: 'https://seetimes.in/350903/',
    date: '2026-03',
    note: 'Vidhayak ki anushansa par gaun khanij fund (minor mineral fund) se gram panchayat Pandarwani Lalbarra ko Rs. 7.50 lakh ki lagat se cement sadak ki swikriti mili thi; main road se Visarjan Ghat tak ki is sadak ka bhoomi-pujan pichhli Shardiya Navratri (Oct 2025, isi tenure me) me vidhayak ne kiya tha aur lokarpan is Chaitra Navratri me vidhayak ne kiya. Maa Satbahini mandir samiti Lalbarra aur grameenon ki maang par ye karya hua; report ke mutabik visarjan ghat me Janmashtami, Phulera, Ganesh utsav, Navratri, Durga utsav aadi parvon me bhari bheed aati hai, pakki sadak se barish me bhi dikkat nahi hogi. Status: lokarpan (nirman purn, janata ko samarpit). Note: bhoomi-pujan ki swatantra khabar nahi mili — ye jankari isi article ke hawale se di gayi hai. Caveat: article par print tithi nahi thi; search-index (200 din pehle) + Chaitra Navratri 2026 ke aadhar par Mar 2026 (est.) maani hai.',
    period: '2023-2028',
  },
  {
    title: 'Pandarwani Lalbarra ke Sindhi Mohalla ward 10 me CC sadak aur CC nali nirman (15th Finance Commission) ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Nayak Darpan, 24 Jan 2026',
    sourceUrl: 'https://www.nayakdarpan.com/news-details.php?id=88',
    date: '2026-01-24',
    note: 'Lalbarra nagar mukhyalay ki gram panchayat Pandarwani Lalbarra ke Sindhi Mohalla ward 10 me cement-concrete sadak aur cement-concrete nali nirman karyon ka bhoomi-pujan vidhayak ne kiya; sarpanch Anees Khan ke mutabik ye karya 15th Finance Commission mad se swikrit hain. Usi karyakram me 18 hitgrahiyon ko antyeshti sahayata ke tahat 5-5 hazar rupaye (kul Rs. 90,000) diye gaye aur panchayat ki sabhi 7 anganbadiyon ko samagri (weighing machine, kursi, table, parda, gilaf, almari, BP machine sahit) vitrit ki gayi. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
];
// ---- Madhu Bhau Bhagat — Paraswada (AC-110), INC, Balaghat district ----
// Dec 2023 me chune gaye (INC, vipakshi vidhayak). Hindi + English me 10+ targeted
// searches (Dec 2023–2026; naam ki vartaniyan: Madhu Bhagat/Madhu Bhau Bhagat/मधु भगत/मधु भाऊ भगत)
// ke baad bhi unke naam par koi news-verified vikas-kaam (swikriti/bhoomi-pujan/lokarpan/shilanyas/ghoshna)
// text source me nahi mila. Jo mila wo sab andolan/maang/nirikshan, tenure se pehle ka, ya
// YouTube-only/public.app-only tha (reject log neeche). Khali profile weak attribution se behtar.
mpWorks['madhu-bhau-bhagat'] = [];

// ==================== RESEARCH REPORT (Balaghat district batch 2, 2026-10-14) ====================
//
// ANUBHA MUNJARE (Balaghat AC-111, INC) — 4 entries qualified.
// Har source browser.open se khola-padhha gaya. Sources:
// - seetimes.in/390213/ (Pathari jalashay, est. 7 Oct 2026) — sanction entry (Paani).
// - seetimes.in/351415/ (12 anganwadi bhavan, est. Mar 2026) — sanction entry (School).
// - seetimes.in/350903/ (Visarjan Ghat sadak, est. Mar 2026) — lokarpan entry (Sadak).
// - nayakdarpan.com/news-details.php?id=88 (24 Jan 2026, print tithi) — bhoomi-pujan entry (Sadak).
// REJECTED (6):
// 1. public.app video (Sep 2025) — nagar palika ward 2 me sadakon ka bhoomi-pujan/lokarpan — public.app-ONLY, text corroboration nahi mila. Reject.
// 2. public.app video (Sep 2025) — gram Bagholi me vidhayak-nidhi + 15th FC karyon ka lokarpan/bhoomi-pujan (1 Sep) — public.app-ONLY, corroboration nahi. Reject.
// 3. mpbreakingnews.in (Oct 2026) — overbridge nirman se jam par vidhayak mauke par pahunchin, adhikariyon ko diversion durust karne ke nirdesh — sirf daura/nirdesh, kaam nahi. Reject.
// 4. emsindia.com (4 May 2026) — Devi Talab me Congress ka shramdaan/safai (Jal Ganga Samvardhan Abhiyan) — prateekatmak andolan/shramdaan, kaam nahi. Reject.
// 5. malhaarmedia.com — "pehli baar ki vidhayak ki prathmiktaen" interview (Jan 2024) — background/priority bayan, koi kaam nahi. Reject.
// 6. Bhaskar English — Waraseoni railway overbridge inauguration row — ye Vivek Patel (Waraseoni MLA) ka maamla hai; Munjare ka koi sambandh nahi. Reject.
//
// MADHU BHAU BHAGAT (Paraswada AC-110, INC) — 0 entries. Profile khaali.
// REJECTED (9):
// 1. nayakdarpan.com/news-details.php?id=82 (Jan 2026) — Bhikewada samudayik bhavan adhura: 2018 ka bhoomi-pujan (pichhle tenure ka) aaj tak apurn — TENURE FAIL + ye kaam nahi, alochanatmak opinion piece. Negative entry ke bar (credible reporting + allegation/case status) ko poora nahi karta. Reject.
// 2. thetribalpost.com/2025/09 (Sep 2025) — Paraswada ke adivasi gaon (Shailla/Malkhedi) me sadak nahi bani — alochanatmak lekh; koi kaam report nahi hua. Reject (sirf aalochna, kaam nahi).
// 3. YouTube (BGT khabar) — Paraswada aspataal me bhrashtachar par nirikshan/bayan — YouTube-ONLY + sirf nirikshan/daura. Reject.
// 4. YouTube (halchal news) — barish me tooti puliya ka nirikshan — YouTube-ONLY + sirf nirikshan. Reject.
// 5. YouTube (supreme power news) — Ghusitola me sadak samasya, rajaswa amle ne seemankan kiya — YouTube-ONLY; seemankan prashasanik kadam hai, kaam nahi. Reject.
// 6. public.app (Apr 2026) — Bagdara me 47 lakh ke samudayik bhavan ka bhoomi-pujan: Madhu Bhagat sirf atithi-soochi me (Jalamsingh Patel, Sarvjeet Singh Lodhi, Bharti Pardhi, Rajkumar Karrahe sahit kai janpratinidhi) — weak attribution + public.app-ONLY. Reject.
// 7. Zee News Hindi (24 Dec 2024) — avaidh sharab par andolan ki chetavani — andolan/chetavani hai, kaam nahi. Reject.
// 8. ETV Bharat (23 Jan 2026) — PM Janman yojna ki Paraswada wali sadak (Mar 2024) par pul nahi bana — kendra yojna ka kaam; neta se koi attribution nahi. Reject.
// 9. MP Vidhan Sabha zero-hour suchi (2026) — Karnapur me naveen udyog hetu vidyut substation na shuru hone ka mudda — sadan me dhyan-akarshan, kaam nahi. Reject.
// FB/IG self-posted daawe: koi news-reported dawa layak claim nahi mila; koi 'dawa' entry nahi banayi.
// Note: dono neta BJP sarkar me vipakshi (INC) vidhayak hain; vipakshi vidhayakon ke vikas-karyon ki
// text-news coverage aam taur par kam hoti hai — isliye Bhagat ki profile khaali chhodi gayi hai.
// Balaghat district batch 3 — Vivek Vicky Patel (Waraseoni AC-112, INC) + Gaurav Singh Pardhi (Katangi AC-113, BJP)
// Researched 2026-10-14. Tenure: Dec 2023– (current MLAs; Patel opposition, Pardhi BJP/ruling side).
// DO NOT export; appended to works_mp.ts by coordinator.
// Fragment me `export const` line nahi rakhi hai (instructions ke anusar).

// ---- Vivek Vicky Patel — Waraseoni (AC-112), INC, Balaghat district ----
mpWorks['vivek-vicky-patel'] = [
  {
    title: 'Kochwahi me Rs. 1.17 crore ki lagat se bane naveen high school bhavan ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'SeeTimes, 3 Feb 2026 (est.)',
    sourceUrl: 'https://seetimes.in/343654/',
    date: '2026-02-03',
    note: 'Waraseoni kshetra ke gram panchayat Kochwahi me Rs. 1.17 crore ki lagat se bane naveen high school bhavan ka lokarpan unhone kiya; bhavan me aadhunik kakshaen, library, karyalaya kaksh, prayogshala aadi suvidhaen uplabdh hain. Status: lokarpan (bhavan taiyar, janata ko samarpit). Caveat: khabar press-release style me aayi hai; purnata ka alag satyapan nahi mila.',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak-nidhi se Waraseoni ke 8 aur Khairlanji ke 12 gram panchayaton ko fire-fighter paani tanker ki saugaat',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'SeeTimes, 10 Feb 2026 (est.)',
    sourceUrl: 'https://seetimes.in/344757/',
    date: '2026-02-10',
    note: 'Unhone apni vidhayak-nidhi se Waraseoni janpad panchayat kshetra ki 8 aur Khairlanji janpad panchayat kshetra ki 12 gram panchayaton ko fire-fighter paani tanker pradhan kiye; tanker sarpanchon ki upasthiti me supurd kiye gaye. Report ke mutabik pichle varsh bhi unhone 10 se adhik gram panchayaton ko aise tanker uplabdh karaye the. Status: vitran purn (nidhi se kharid, panchayaton ko saunpe gaye).',
    period: '2023-2028',
  },
  {
    title: 'Gram Arambha me 7 lakh ke sabhamanch aur Hanuman mandir parisar me cementikaran ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'SeeTimes, 22 Dec 2025 (est.)',
    sourceUrl: 'https://seetimes.in/339920/',
    date: '2025-12-22',
    note: 'Gram panchayat Arambha me 7 lakh ki lagat se banne wale sabhamanch aur Hanuman mandir parisar me cementikaran ka bhoomi-pujan unhone kiya; report ke mutabik ye varsh 2025-26 ki vidhayak-nidhi se hone wale karyon me shamil hain. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Gram Rengajhari me 8 lakh ki CC sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'SeeTimes, 22 Dec 2025 (est.)',
    sourceUrl: 'https://seetimes.in/339920/',
    date: '2025-12-22',
    note: 'Usi karyakram me gram Rengajhari me 8 lakh ki lagat se banne wali CC sadak ka bhoomi-pujan bhi unhone kiya (vidhayak-nidhi 2025-26). Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Pipariya me 15 lakh ke samudayik bhavan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'SeeTimes, 7 Jul 2026 (est.)',
    sourceUrl: 'https://seetimes.in/373812/',
    date: '2026-07-07',
    note: 'Janpad panchayat kshetra ki gram panchayat Pipariya me 15 lakh ki lagat se bane samudayik bhavan ka lokarpan unhone kiya; karyakram Gondwana circle ke tatvadhhan me Bhagwan Birsa Munda ki pratima ke lokarpan ke saath aayojit hua tha. Status: lokarpan (bhavan taiyar, janata ko samarpit). Caveat: khabar press-release style me aayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Ghoghariya ghat se Enkatola ke madhya 8 lakh ki pipe puliya ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'SeeTimes, 7 Jul 2026 (est.)',
    sourceUrl: 'https://seetimes.in/373812/',
    date: '2026-07-07',
    note: 'Usi karyakram me Ghoghariya ghat se Enkatola ke madhya 8 lakh ki lagat se bani pipe puliya ka lokarpan bhi unhone kiya. Status: lokarpan (puliya taiyar, janata ko samarpit).',
    period: '2023-2028',
  },
];

// ---- Gaurav Singh Pardhi — Katangi (AC-113), BJP, Balaghat district ----
mpWorks['gaurav-singh-pardhi'] = [
  {
    title: 'Sirpur me 500 MT kshamta ke godam (lagat Rs. 52.32 lakh) ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Mooknayak News, May 2026 (est.)',
    sourceUrl: 'https://www.mooknayaknews.com/2026/05/%E0%A4%B8%E0%A4%BF%E0%A4%B0%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%94%E0%A4%B0-%E0%A4%AC%E0%A4%A8%E0%A5%87%E0%A4%B0%E0%A4%BE-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B8/',
    date: '2026-05',
    note: 'Katangi kshetra ke gram Sirpur me kisanon ko behtar bhandaran suvidha ke liye 500 metric ton kshamta wale godam (lagat Rs. 52.32 lakh) ke nirman ka bhoomi-pujan unhone kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: khabar press-release style me aayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Sirpur me 11.11 lakh ki CC sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Mooknayak News, May 2026 (est.)',
    sourceUrl: 'https://www.mooknayaknews.com/2026/05/%E0%A4%B8%E0%A4%BF%E0%A4%B0%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%94%E0%A4%B0-%E0%A4%AC%E0%A4%A8%E0%A5%87%E0%A4%B0%E0%A4%BE-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B8/',
    date: '2026-05',
    note: 'Usi karyakram me gram Sirpur me 11.11 lakh ki lagat se banne wali CC sadak ka bhoomi-pujan bhi unhone kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Sirpur me zila panchayat sadasya mad se bane samudayik kaksh (lagat Rs. 2 lakh) ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Mooknayak News, May 2026 (est.)',
    sourceUrl: 'https://www.mooknayaknews.com/2026/05/%E0%A4%B8%E0%A4%BF%E0%A4%B0%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%94%E0%A4%B0-%E0%A4%AC%E0%A4%A8%E0%A5%87%E0%A4%B0%E0%A4%BE-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B8/',
    date: '2026-05',
    note: 'Zila panchayat sadasya mad se nirmit Rs. 2 lakh lagat ke samudayik kaksh ka lokarpan unhone kiya. Status: lokarpan (kaksh taiyar, janata ko samarpit). Credit-pardarshita: swikriti/nidhi zila panchayat sadasya mad ki thi; unki bhoomika lokarpan-karta ki hai.',
    period: '2023-2028',
  },
  {
    title: 'Banera me rajya vitt aayog mad se 12 lakh ki CC sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Mooknayak News, May 2026 (est.)',
    sourceUrl: 'https://www.mooknayaknews.com/2026/05/%E0%A4%B8%E0%A4%BF%E0%A4%B0%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%94%E0%A4%B0-%E0%A4%AC%E0%A4%A8%E0%A5%87%E0%A4%B0%E0%A4%BE-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B8/',
    date: '2026-05',
    note: 'Gram Banera me rajya vitt aayog mad se lagbhag 12 lakh ki lagat se banne wali CC sadak ke nirman ka bhoomi-pujan unhone kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Hathoda me Paraswara–Sanvargaon–Hathoda marg (5.30 km, lagat Rs. 415 lakh) ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Mooknayak News, May 2026 (est.)',
    sourceUrl: 'https://www.mooknayaknews.com/2026/05/%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B8-%E0%A4%95%E0%A5%80-%E0%A4%B0%E0%A4%AB%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B0-%E0%A4%A4%E0%A5%87%E0%A4%9C-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%AF/',
    date: '2026-05',
    note: 'Gram Hathoda me lok nirman vibhag dwara swikrit Paraswara–Sanvargaon–Hathoda marg (lambai 5.30 km, lagat lagbhag Rs. 415 lakh) ka bhoomi-pujan unhone kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: article body me unhe mukhya atithi ke roop me bataya gaya hai jabki headline bhoomi-pujan unke dwara batati hai — press-release style khabar hai. Credit-pardarshita: sadak PWD-swrikrit pariyojna hai.',
    period: '2023-2028',
  },
  {
    title: 'Gram Mohgaon me CC sadak ka bhoomi-pujan (11 Apr 2026)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'SeeTimes, 11 Apr 2026',
    sourceUrl: 'https://seetimes.in/354720/',
    date: '2026-04-11',
    note: '11 April 2026 ko unhone gram panchayat Mohgaon me CC sadak nirman karya ki aadhaarshila rakhi/bhoomi-pujan kiya; report me lagat ka ullekh nahi hai. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: khabar press-release style me aayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Gram Nandi me CC sadak aur nali nirman ka bhoomi-pujan (11 Apr 2026)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'SeeTimes, 11 Apr 2026',
    sourceUrl: 'https://seetimes.in/354720/',
    date: '2026-04-11',
    note: 'Usi din unhone gram panchayat Nandi me CC sadak ke saath vyavasthit nali nirman karya ka bhoomi-pujan kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Gram Paraswaraghat me CC sadak ka bhoomi-pujan (11 Apr 2026)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'SeeTimes, 11 Apr 2026',
    sourceUrl: 'https://seetimes.in/354720/',
    date: '2026-04-11',
    note: 'Usi din unhone gram panchayat Paraswaraghat me CC sadak nirman karya ka bhoomi-pujan kiya. Status: bhoomi-pujan. Caveat: Naidunia (13 Jul 2026) ne isi gaon ki rajya vitt aayog mad se 11.99 lakh lagat ki CC sadak me nirman ke 3 din baad gaddhe padne aur ghatiya samagri ke aarop ki khabar chhapi; aarop thekedaar/panchayat par tha, vidhayak par nahi — thekedaar ne safai di, grameenon ne collector se jaanch ki maang ki. Ye entry sirf bhoomi-pujan ki hai; nirman-gunvatta se vidhayak ka seedha sambandh report me nahi hai.',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak-nidhi se Nagar Parishad Katangi ko tractor evam trolley pradhan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'National Press Times, 17 Oct 2025',
    sourceUrl: 'https://nationalpresstimes.com/2025/10/17/mla-gaurav-pardhi-provided-tractor-and-trolley-to-katangi-municipal-council/',
    date: '2025-10-17',
    note: 'Unhone apni vidhayak-nidhi se Nagar Parishad Katangi ko ek tractor evam trolley pradhan kiye; sankshipt poojan karyakram ke baad nagar parishad ko saunpe gaye. Report ke mutabik inka upyog nagar me chal rahe nirman/vikas karyon me hoga. Status: hastantaran purn (nidhi se kharid, parishad ko saunpe gaye).',
    period: '2023-2028',
  },
];

// ---- Barwani district batch (researched 2026-10-13) ----
// Barwani district batch 1 — Montu Solanki (Sendhwa ST AC-187) + Bala Bachchan (Rajpur ST AC-188) (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
mpWorks['montu-solanki'] = [
  {
    title: 'Sendhwa kshetra ki 5 sadkon ko pradesh budget me swikriti — vidhayak ke satat prayason se (Kundiya–Medliyapani 4 km nav-nirman Rs. 6 cr + 4 margon ka sandharan)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Janoday Punch, 18 Feb 2026',
    sourceUrl: 'https://janodaypunch.com/main-news/efforts-of-sendhwa-mla-montu-solanki-bear-fruits-5-roads-approved-in-the-budget/',
    date: '2026-02-18',
    note: 'Janoday Punch ke mutabik Sendhwa vishan-sabha kshetra ki 5 sadkon ko pradesh sarkar ke budget me swikriti mili: gram Kundiya se Medliyapani marg (4 km, nav-nirman, anumaanit lagat Rs. 6 crore), Varla–Bakharli (5.80 km, sandharan, Rs. 4.06 crore), Hingwa–Varla (4.97 km, sandharan, Rs. 3.73 crore), Padachha pahunch marg (5 km, sandharan, Rs. 3.75 crore), Hingwa pahunch marg (3 km, sandharan, Rs. 1.80 crore). Report me vidhayak ki concrete bhoomika darj hai — unhone Dec 2023 ke vishan-sabha satra me Kundiya–Medliyapani sadak ka prashna lagakar maang rakhi thi aur mukhyamantri/sambandhit mantri ko patra likhe the. Status: swikriti — karyanwayan (tender/nirman-prarambh/purnata) ki alag khabar nahi mili. Caveat: swikriti ko nirman-purnata na samjha jaye; stage explicit "swikriti" hi hai.',
    period: '2023-2028',
  },
];
mpWorks['bala-bachchan'] = [
  {
    title: 'Bhamori gram me vidhayak-nidhi se 2 manglik bhavanon (kul Rs. 8 lakh) ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Jul 2025 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/barwani/news/bhoomipujan-of-two-auspicious-buildings-was-done-in-bhamori-135486824.html',
    date: '2025-07',
    note: 'Dainik Bhaskar ke mutabik Rajpur vidhayak Bala Bachchan ne gram Bhamori me vidhayak-nidhi se banne wale 2 manglik bhavanon ka bhoomi-pujan kiya: Shri Ram mandir ke paas sarvjanik manglik bhavan (lagat Rs. 5 lakh) aur Jai Mujay Maa mandir ke paas Bhilala samaj ke Mujalde parivar ka manglik bhavan (lagat Rs. 3 lakh); dono ke liye kul Rs. 8 lakh swikrit. Status: bhoomi-pujan — nirman karyanwayan/purnata ki alag khabar nahi mili. Caveat: article me ghatna "shanivaar" likhi thi aur search-index me "450 din pehle" dikha; 19 Jul 2025 ko shanivaar tha — isi aadhar par Jul 2025 (est.) maani hai. Ye unke mantri-kaam nahi, MLA-roop me vidhayak-nidhi ka kaam hai.',
    period: '2023-2028',
  },
];

// ---- REJECT LOG (researched 2026-10-14) ----
// montu-solanki:
// R1. Kalikundi pul bhoomi-pujan (Sendhwa) — sirf YouTube video mila (title: "Sendhwa कालीकुंडी पुल भूमिपूजन"), koi news-source nahi → reject (YouTube-only rule).
// R2. Free Press Journal — World Indigenous Peoples Day, Jhopali (teacher shortage, tribal rights demand) — sirf maang/allegation, koi concrete kaam/nidhi/shilanyas nahi → reject (sirf maang).
// R3. Free Press Journal — Janpad panchayat Sendhwa me dastavez jalane par action ki maang (minister ko patra) — allegation/demand, work nahi → reject.
// R4. Dainik Jagran English — Niwali protest me BEO ke khilaf andolan/police rok — virodh-pradarshan, work nahi → reject.
// R5. bansalnews.com — Congress block-adhyaksh niyukti par PCC ko patra — party-internal matter, sarkari kaam nahi → reject.
// R6. public.app — JAYS ke saath dharna (shiksha-swasthya mudde) — protest + public.app-only source → reject.
// R7. Nimad Junction podcast (YouTube) — interview, koi verifiable kaam nahi → reject.
// R8. Zee News — 1400 km cycle yatra Tirupati Balaji (Sep 2024) — vyaktigat/dharmik yatra, vikas-kaam nahi → reject.
// bala-bachchan:
// R9. NDTV/New Indian Express/Zee — Dec 2019 "join Congress for MLA funds" vivaad — date Dec 2019 + mantri-era (Home Minister, Kamal Nath sarkar) → reject (Dec 2023 se pehle + mantri-kaam excluded).
// R10. public.app — Moharram par garibon ko bhojan-vitran (Jun 2025) — unhone sirf dusron ke kaam ki prashansa ki (weak attribution) + public.app-only → reject.
// R11. public.app — Ojhar me Gavli samaj manglik bhavan ki chhat-bharai pujan (Oct 2025) — sirf upasthiti/poojan, unka nidhi/shilanyas nahi + public.app-only → reject.
// R12. public.app — Sant Shri Singaji Mahavidyalaya me Gandhi Jayanti karyakram (Oct 2025) — sirf bhashan/upasthiti + public.app-only → reject.
// R13. rewakipukar.com — Meghwal samaj pratinidhimandal ko pratyek gaon me manglik bhavan hetu Rs. 5 lakh ka ashwasan — (a) article me koi tithi nahi aur image-path 2023/09 ka hai (Dec 2023 se pehle ka ho sakta hai), (b) ashwasan/dawa hai, swikriti/bhoomi-pujan ka satyapan nahi → reject (date unverifiable + sirf ashwasan).
// R14. Dainik Bhaskar — Barwani me Congress ka ED-putla-dahan virodh — protest, work nahi → reject.
// R15. policepublicnews.com — unke ghar me nakabjani ke 3 aaropi giraftar (Feb 2025) — crime news, unka kaam nahi → reject.
// R16. aajtak/lokmat/nishaanebaz — beti Prerna ki sadak-hadse me mrityu (Jan 2026) — vyaktigat tragedy, work nahi → reject (note: is shok ki wajah se unke kuch public karyakram raddhe/rally-postpone hue the, lekin wo work-entry layak nahi).
// NOTE: Bala Bachchan ke mantri-era (2018–2020 Deputy CM/Home Minister) ke sabhi vikas-kaam task-rules ke tahat excluded rakhe gaye hain; keval Dec 2023 ke baad ke MLA-roop ke kaam liye gaye.
// Barwani district batch 2 — Shyam Barde (Pansemal ST, BJP) + Rajan Mandloi (Badwani ST, INC)
// Researched 2026-10-14 — DO NOT export; appended to works_mp.ts
mpWorks['shyam-barde'] = [
  {
    title: 'Mograpani gaon me vidyut khambhe aur distribution transformer ki sthapana ka bhoomi-pujan — dashakon se bina bijli wale pahadi gaon ka vidyutikaran shuru',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 8 May 2026',
    sourceUrl: 'https://www.freepressjournal.in/indore/electricity-reaches-remote-mograpani-village-after-mla-shyam-barde-performed-for-installation-electric-poles-in-pansemalmla-shyam-barde-performed-for-installation-electric-poles-in-pansemal',
    date: '2026-05-08',
    note: 'Pansemal/Khetia ke door-daraz pahadi gaon Mograpani me dashakon se bijli nahi thi; FPJ ke mutabik vidhayak Shyam Barde ne vidyut khambhon aur distribution transformer ki sthapana ka bhoomi-pujan kiya, jisse gaon ke vidyutikaran ka karya prarambh hua. Status: bhoomi-pujan — khambhe/transformer lagne ka karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: yojna sarkari (state vidyut vibhag) hai; vidhayak ki bhoomika bhoomi-pujan aur maang uthane ki rahi (FPJ ke mutabik grameenon ne unhe pehle ke dauron me bijli ki samasya batayi thi).',
    period: '2023-2028',
  },
  {
    title: 'Baygor gram panchayat ke Malgaon me naveen CC road (lagat Rs. 24.97 lakh) ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Janoday Punch, Dec 2025 (est.)',
    sourceUrl: 'https://janodaypunch.com/khargone-badwani/pansemel-mla-barde-inaugurated-development-works-worth-crores-and-performed-bhoomi-pujan/',
    date: '2025-12',
    note: 'Janpad panchayat Pansemal ke gram panchayat Baygor ke Malgaon me Rs. 24,97,000 ki lagat wali naveen CC road ka bhoomi-pujan vidhayak Shyam Barde ne (BJP jila adhyaksh Ajay Yadav ke saath) kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: article me tithi explicit nahi thi; image dir (2025/12) aur crawl timing ke aadhar par Dec 2025 (est.) maani hai.',
    period: '2023-2028',
  },
  {
    title: 'Watershed Mahotsav me naveen talab (lagat Rs. 14 lakh) ka bhoomi-pujan',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Janoday Punch, Dec 2025 (est.)',
    sourceUrl: 'https://janodaypunch.com/khargone-badwani/pansemel-mla-barde-inaugurated-development-works-worth-crores-and-performed-bhoomi-pujan/',
    date: '2025-12',
    note: 'Usi karyakram-mala me Watershed Mahotsav ke dauran Rs. 14 lakh ki lagat wale naveen talab ka bhoomi-pujan hua; watershed vibhag ke jila adhikari bhi maujood the. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Note: article headline me "lokarpan" ka bhi zikr hai lekin body me kisi purn hue karya ka lokarpan specify nahi hai — isliye sirf bhoomi-pujan wali entries banayi hain.',
    period: '2023-2028',
  },
];
mpWorks['rajan-mandloi'] = [
  {
    title: 'Vidhayak nidhi se Pati vikas-khand ki 14 gram panchayaton ko paani ke tanker — garmi me peya-jal rahat',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Aug 2025 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/barwani/news/14-villages-in-barwani-got-the-gift-of-water-135734002.html',
    date: '2025-08',
    note: 'Bhaskar ke mutabik vidhayak Rajan Mandloi ne apni vidhayak nidhi se Pati vikas-khand ki 14 gram panchayaton (Piparkund, Ubadgad, Shivni, Sawariyapani, Kandra, Harla, Rosar, Kumbhkhet, Rosmal, Semlet, Chikalkuanwadi, Atrasambha, Pakhalya, Gara) ko paani ke tanker diye; Pati mukhyalaya me pooja-archana ke baad vitran karyakram hua. Status: vitran purn — tanker sarpanchon/grameenon ko saupe gaye (garmi ke dinon me samajik/dharmik karyon hetu peya-jal ke liye). Caveat: tithi article me explicit nahi thi; crawl timing ke aadhar par Aug 2025 (est.) maani hai.',
    period: '2023-2028',
  },
  {
    title: 'Varishth Nagrik Pensioner Association, Badwani ke bhavan-nirman ke liye 5 lakh ka vidhayak-nidhi sanction',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Jun 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/barwani/news/pensioners-appealed-to-cooperate-in-building-construction-dbp-138120591.html',
    date: '2026-06',
    note: 'Bhaskar ke mutabik Varishth Nagrik Pensioner Association Badwani ki maasik baithak me jiladhyaksh ne bataya ki bhavan-nirman ke liye vidhayak Rajan Mandloi ne Rs. 5 lakh swikrit kiye hain. Status: swikriti — association ke mutabik is rashi se bhavan-nirman purn nahi ho sakta, isliye sadasyon se sahyog ki appeal hui; nirman prarambh/purnata ki alag khabar nahi mili. Caveat: tithi explicit nahi thi; crawl timing ke aadhar par Jun 2026 (est.) maani hai.',
    period: '2023-2028',
  },
  {
    title: 'Badwani shahar me garmi-se-pehle jal-sankat: apni nidhi ke 5-6 tanker shahar ke wardon me jal-vitran me lagaye',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'RNI News, 25 Mar 2026',
    sourceUrl: 'https://www.rninews.co.in/severe-water-crisis-strikes-even-before-the-onset-of-summer/',
    date: '2026-03-25',
    note: 'Garmi se pehle hi Badwani shahar me peya-jal sankat (aandhi se 125 HP ki motoren jalne par ~50% vyavastha prabhavit) ke dauran vidhayak Rajan Mandloi ne apni nidhi se grameen kshetron me vitran ke liye rakhe 5-6 tankeron ko shahar ke wardon me jal-vitran me laga diya; Pala Bazar se tanker bharkar vibhinn wardon me pahunchaye gaye. Status: rahat-karya sampann (emergency water distribution). Caveat: ye tanker nagar-palika ke atirikt upay the; sankat ka sthayi samadhan nagar-palika/PHE vibhag ke haath me raha.',
    period: '2023-2028',
  },
];
// REJECT LOG (Barwani district batch 2 — Shyam Barde / Rajan Mandloi, researched 2026-10-14):
// --- Shyam Barde (shyam-barde, Pansemal ST) ---
// 1. Rakhi Bujurg–Ganor (Maharashtra) aur Dhavdi–Ranipur–Toranmal sadak (lagbhag 2.5–4 crore) ka bhoomi-pujan, Jan 2026 — YouTube-ONLY sources (KBS TV News, Aasha Express News). Text/news source nahi mila. Reject.
// 2. Gram panchayat Temla me Rs. 15 lakh ki naveen CC road ka bhoomi-pujan (2 Jan 2026) — public.app-ONLY source. Reject (public.app-only rule).
// 3. Rakhi Bujurg me school boundary-wall ki ghoshna + scooty/cycle vitran (Khabar Madhya Pradesh) — YouTube-ONLY; ghoshna ka karyanwayan aur cycle/scooty (sarkari yojna) me vidhayak ki concrete bhoomika text source se verify nahi. Reject.
// 4. PWD mantri Rakesh Singh dwara Silawad me Rs. 18 crore sadak-pul pariyojnaon ka bhoomi-pujan (FPJ, May 2026) — WEAK ATTRIBUTION: bhoomi-pujan mantri ne kiya; Barde sirf upasthit dignitaries me ek. Sirf maujoodgi. Reject.
// 5. Mograpani ke baad Kambipani hamlet me peya-jal sankat ka "review" + Collector se baat (FPJ, May 2026) — sirf nirikshan/daura; koi swikriti/karya nahi. Reject.
// 6. "Crores ke vikas karyon ki saugat" (jansamparkkhabar, Nov 2024) — vague press-release; Jamnia/Saloon/Budhgaon ke naam par bina karya-vivaran; koi concrete karya named nahi. Reject.
// 7. Sendhwa–Khetia NH-752G 2-lane sadak, Rs. 615.61 crore swikriti (ETV Bharat, Dec 2024) — NO ATTRIBUTION: swikriti kendra sarkar ki, pehal sansad Gajendra Patel ki; Barde se koi sambandh nahi. Reject.
// --- Rajan Mandloi (rajan-mandloi, Badwani ST) ---
// 8. Jhanda Chowk vendor mall (Rs. 3.10 crore) lokarpan vivad — YouTube-ONLY + MLA ne karyakram ka bahishkar kiya; unka karya nahi, political controversy. Reject.
// 9. Bhopaliyamal gaon (Rosmal panchayat) daura/chaupal (Bhaskar, Sep 2025 est.) — sirf daura; samasyaen suni, adhikariyon ko phone/patra ka ashwasan; koi concrete karya/swikriti nahi. Reject.
// 10. Bijli katoti par kisan-hangama + andolan ki chetavani (RNI News, Oct 2026) — opposition/protest; koi karya nahi. Reject.
// 11. Sardar Sarovar visthapiton ke punarvas par prashasan par aarop (ETV Bharat, Sep 2026) — aarop/virodh; koi concrete karya nahi. Reject.
// 12. School-sankat reports (ETV Bharat, 2024–2026: Khedi falia, jarjar bhavan, jhopdi-school) — MLA ki tippani/mudda uthana; unka karya nahi. Reject.
// 13. Datia by-election jeet ka jashn, Barwani (Bhaskar, Aug 2026) — political event; koi karya nahi. Reject.
// 14. Muni-sangh ki agwani, Badwani (Shreephal Jain News) — dharmik karyakram me upasthiti; koi karya nahi. Reject.
// 15. Badwani bypass Rs. 42 crore + Deb/Devanli pul (Naidunia, Sep 2026) — CM ki ghoshna, sansad ki pehal; Mandloi se koi sambandh nahi. Reject.
// Kul: 6 entries qualified (3 + 3), 15 leads reject.

// ---- Betul district batch (researched 2026-10-13/14) ----
// Betul district batch 1 — Multai, Amla (SC), Betul (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
mpWorks['chandrashekhar-deshmukh'] = [
  {
    title: 'Ashta (Prabhat Pattan block) me 200 meter CC sadak ka bhoomi-pujan — vidhayak-nidhi se Rs. 7.75 lakh sanction',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hum India News, 28 Sep 2026',
    sourceUrl: 'https://humindianews.com/aashta-mein-200-meter-cc-road-ka-bhumi-pujan/',
    date: '2026-09-28',
    note: 'Gram Ashta me grameenon ki lambe samay ki maang par vidhayak Chandrashekhar Deshmukh ne vidhayak-nidhi se Rs. 7.75 lakh ki CC sadak (200 meter) ki swikriti dilayi aur bhoomi-pujan kiya. Status: bhoomi-pujan — nirman shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: '21 swasthya sansthanon (CHC Multai, CHC Prabhat Pattan aur 19 up-swasthya kendra) me mortuary refrigerator khareed ki prashaskiya swikriti — prati fridge Rs. 1.98 lakh',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'National Breaking Times, 20 Nov 2025',
    sourceUrl: 'https://www.nationalbreakingtimes.in/2025/11/21.html',
    date: '2025-11-20',
    note: 'Report ke mutabik unke prayason se samudayik swasthya kendra Multai, Prabhat Pattan sahit kul 19 up-swasthya kendron (kul 21 sansthan) me shav-sanrakshan fridge (mortuary refrigerator) khareedne ki prashaskiya swikriti mili; prati fridge Rs. 1.98 lakh swikrit. Status: prashaskiya swikriti — khareed/sthapana ki alag khabar nahi mili. Caveat: khabar press-release style me hai.',
    period: '2023-2028',
  },
  {
    title: '17 sinchai pariyojnaon ki swikriti (unke prayason se) — lagbhag 5688 hectare krishi bhoomi sinchit hogi',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Hum India News, Jan 2026 (est.)',
    sourceUrl: 'https://humindianews.com/%E0%A4%AE%E0%A5%81%E0%A4%B2%E0%A4%A4%E0%A4%BE%E0%A4%88-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%87%E0%A4%A4%E0%A5%8D%E0%A4%B0/',
    date: '2026-01',
    note: 'Khabar ke mutabik unke prayason se Multai vidhansabha kshetra me 17 sinchai pariyojnaon ko swikriti mili, jinse lagbhag 5688 hectare krishi bhoomi sinchit hogi. Status: swikriti — nirman/purnata ki alag khabar nahi mili. Caveat: ye unke "do varsh ke karyakal" par press-release style ka samiksha-lekh hai; vyaktigat pariyojnaon ke swikriti-aadesh swatantra roop se nahi mile.',
    period: '2023-2028',
  },
  {
    title: 'Multai block ke 15 high/higher-secondary schools me chhatraon ki cycle-suraksha hetu Rs. 67.50 lakh se cycle-stand nirman swikrit',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Hum India News, Jan 2026 (est.)',
    sourceUrl: 'https://humindianews.com/%E0%A4%AE%E0%A5%81%E0%A4%B2%E0%A4%A4%E0%A4%BE%E0%A4%88-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%87%E0%A4%A4%E0%A5%8D%E0%A4%B0/',
    date: '2026-01',
    note: 'Usi samiksha-lekh ke mutabik Multai vikas-khand ke 15 high school evam higher-secondary vidyalayon me chhatraon ki cyclon ki suraksha ke liye Rs. 67.50 lakh ki lagat se cycle-stand nirman swikrit karaya gaya. Status: swikriti — nirman/purnata ki alag khabar nahi mili. Caveat: press-release style source; swatantra swikriti-aadesh nahi mile.',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak-nidhi 2025 se swikrit karya: 32 gramon me water-tanker (Rs. 86.40 lakh), 14 gramon me yatri-pratikshalaya (Rs. 36.73 lakh), sadak-marammat v anya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hum India News, Jan 2026 (est.)',
    sourceUrl: 'https://humindianews.com/%E0%A4%AE%E0%A5%81%E0%A4%B2%E0%A4%A4%E0%A4%BE%E0%A4%88-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%87%E0%A4%A4%E0%A5%8D%E0%A4%B0/',
    date: '2026-01',
    note: 'Khabar ke mutabik varsh 2025 me vidhayak-nidhi se swikrit karyon me pramukh: 32 gramon me water-tanker (Rs. 86.40 lakh), 14 gramon me yatri-pratikshalaya (Rs. 36.73 lakh), 9 gramon me sadak-marammat (Rs. 17.32 lakh), Temjhra-Barai me transformer sthanantaran (Rs. 5.19 lakh), nagar-palika vachnalaya furniture (Rs. 1 lakh), Bhilai me nali-nirman (Rs. 6 lakh), 2 gramon me tin-shed/samudayik bhavan (Rs. 6 lakh) aur 1 gram me gravel sadak (Rs. 6.70 lakh). Status: swikriti — karyanwayan/purnata ki alag khabar nahi mili. Caveat: press-release style source.',
    period: '2023-2028',
  },
  {
    title: 'Vishesh-nidhi 2024-25 se swikrit pramukh karya: 19 gramon me samudayik bhavan (Rs. 3.27 crore), 22 gramon me gravel sadak (Rs. 5.21 crore), Tiwarkhed stop-dam, Tapti Sarovar sluice-gate v anya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hum India News, Jan 2026 (est.)',
    sourceUrl: 'https://humindianews.com/%E0%A4%AE%E0%A5%81%E0%A4%B2%E0%A4%A4%E0%A4%BE%E0%A4%88-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%87%E0%A4%A4%E0%A5%8D%E0%A4%B0/',
    date: '2026-01',
    note: 'Khabar ke mutabik vishesh-nidhi 2024-25 se swikrit karyon me pramukh: 19 gramon me samudayik bhavan (Rs. 3.27 crore), 22 gramon me gravel sadaken (Rs. 5.21 crore), 11 gramon me puliya (Rs. 2.03 crore), 6 gramon me cement sadak (Rs. 99.70 lakh), 6 schoolon me boundary-wall (Rs. 78.80 lakh), Tiwarkhed me stop-dam (Rs. 36.30 lakh), Tapti Sarovar sluice-gate (Rs. 17 lakh), Shani talab saundaryikaran (Rs. 25 lakh), Birulbazar bus-stand cementikaran (Rs. 37.90 lakh) v anya. Status: swikriti — karyanwayan/purnata ki alag khabar nahi mili. Caveat: press-release style source.',
    period: '2023-2028',
  },
  {
    title: 'CM stamp-duty fund 2024 se swikrit karya: 15 gramon me samudayik bhavan (Rs. 2.09 crore), 10 gramon me puliya (Rs. 1.40 crore), 13 gramon me CC sadak (Rs. 1.09 crore) v anya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hum India News, Jan 2026 (est.)',
    sourceUrl: 'https://humindianews.com/%E0%A4%AE%E0%A5%81%E0%A4%B2%E0%A4%A4%E0%A4%BE%E0%A4%88-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%87%E0%A4%A4%E0%A5%8D%E0%A4%B0/',
    date: '2026-01',
    note: 'Khabar ke mutabik varsh 2024 me mukhyamantri stamp-duty mad se swikrit karyon me pramukh: 15 gramon me 3-set yukt samudayik bhavan (Rs. 2,08,87,000), 10 gramon me puliya-nirman (Rs. 1,39,84,000), 13 gramon me CC cement sadaken (Rs. 1,09,41,000), 5 gramon me shaskiya vidyalayon ki boundary-wall (Rs. 48.84 lakh), 3 gramon me samudayik bhavan (Rs. 48 lakh), 2 gramon me talab-ghat nirman (Rs. 37.94 lakh), 3 gramon me mokshdham yatri-pratikshalaya (Rs. 23.50 lakh), Dahua me shopping-complex (Rs. 18 lakh) aur 3 gramon me sanskritik manch (Rs. 13.50 lakh). Status: swikriti — karyanwayan/purnata ki alag khabar nahi mili. Caveat: press-release style source.',
    period: '2023-2028',
  },
];

// Betul district batch 1 — Amla (SC) (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
mpWorks['dr-yogesh-pandagre'] = [
  {
    title: 'Amla ke Vinoba Ward (ward 4) me Rs. 29 lakh ka Chhatrapati Shivaji Sanskritik Bhavan — unhone mukhya-atithi ke roop me lokarpan kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sahara Samachaar, Sep 2026 (est.)',
    sourceUrl: 'https://saharasamachaar.com/due-to-the-efforts-of-councilor-diksha-vinoba-ward-got-the-gift/',
    date: '2026-09',
    note: 'Nagar-palika parishad Amla dwara Sant Vinoba ward kramank 4 me nirmit Rs. 29 lakh ke Chhatrapati Shivaji Sanskritik Bhavan ka lokarpan vidhayak Dr. Yogesh Pandagre ne nagar-palika adhyaksh aadi ke saath mukhya-atithi ke roop me fita katkar kiya. Status: lokarpan (bhavan nirmit, janata ko samarpit). Pardarshita: khabar ke mutabik bhavan ke liye prayas ward-parshad Deeksha Mayur Surajekar ka tha; vidhayak ki bhoomika lokarpan-karta ke roop me thi.',
    period: '2023-2028',
  },
  {
    title: 'Betul CMHO tabadla vivad: sthanantarit CMHO ki writ me High Court ne notice jari kiya — 21 din me paksh rakhne ko kaha (koi dosh-siddhi nahi)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Zee News (Hindi), Sep 2026 (est.)',
    sourceUrl: 'https://zeenews.india.com/hindi/india/madhya-pradesh-chhattisgarh/trending-news/amla-and-tikamgarh-mla-notice-of-high-court-for-two-contenders-for-one-cmho-chair-mpsn/862897',
    date: '2026-09',
    note: 'Zee News ke mutabik tabadla-shuda Betul CMHO Dr. A.K. Tiwari ne apne tabadle ke khilaf High Court me writ lagayi, jisme Amla vidhayak Dr. Yogesh Pandagre (aur Tikamgarh vidhayak Rakesh Giri) ko bhi party banaya gaya; High Court ne notice jari kar 21 din me paksh rakhne ko kaha. Tiwari ka aarop hai ki vidhayakon ne unhe "vivadit"/farzi-kam ka aaropi thahraate hue tabadle ke liye chitthi likhi thi. Status: lambit writ me notice — koi dosh-siddhi ya adesh nahi; is khabar me vidhayak ka pratikriya (rebuttal) darj nahi hai.',
    period: '2023-2028',
  },
];

// Betul district batch 1 — Betul (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
mpWorks['hemant-vijay-khandelwal'] = [
  {
    title: 'Betul me zila ki pehli white-topping sadak (Rs. 3.24 crore) ka bhoomi-pujan — 7 meter chaudi, 20-25 saal tikau',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'S News Times, 9 Jun 2025',
    sourceUrl: 'https://www.snewstimes.com/2025/06/09/betul-ki-khabar-the-picture-of-the-city-will-change-in-the-coming-one-year-hemant-khandelwal/',
    date: '2025-06-09',
    note: 'Vidhayak Hemant Khandelwal ne kendriya rajya-mantri D.D. Uikey ke saath Rs. 3.24 crore ki lagat wali zila ki pehli white-topping sadak ka bhoomi-pujan kiya; report ke mutabik sadak 7 meter chaudi aur agle 20-25 varshon tak tikau hogi. Status: bhoomi-pujan — nirman shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Betul-Khedi marg par Machna nadi par 4-lane pul + pahunch marg (Rs. 18.43 crore) ka bhoomi-pujan — unke prayason se lagat Rs. 6 se Rs. 18 crore aur chaudai 30 se 60 feet hui',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'S News Times, 18 Jan 2026',
    sourceUrl: 'https://www.snewstimes.com/2026/01/18/betul-news-we-will-make-every-vision-for-the-development-of-betul-a-reality-hemant/',
    date: '2026-01-18',
    note: 'Karbala Ghat par kendriya rajya-mantri Durga Das Uikey aur vidhayak Hemant Khandelwal ne Betul-Khedi marg par Machna nadi par pul evam pahunch marg (kul prashaskiya lagat Rs. 18.43 crore; 100 meter lamba, 18.5 meter chauda 4-lane pul) ka bhoomi-pujan kiya; 18 mah me purn karne ka lakshya. Uikey ke mutabik pul unke satat prayason ka parinam hai; Khandelwal ke mutabik jan-bhavna ko dekhte hue lagat Rs. 6 crore se badhakar Rs. 18 crore aur chaudai 30 feet se 60 feet ki gayi. Status: bhoomi-pujan — nirman shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Bhashan me daave: Rs. 100 crore drainage-swikriti, antarrajyiya bus-stand swikriti, Rs. 28 crore ki 2-lane sadak (BJP karyalaya se abkari tak) sahit kai pariyojnaen swikrit',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'S News Times, 9 Jun 2025',
    sourceUrl: 'https://www.snewstimes.com/2025/06/09/betul-ki-khabar-the-picture-of-the-city-will-change-in-the-coming-one-year-hemant-khandelwal/',
    date: '2025-06-09',
    note: 'White-topping sadak ke bhoomi-pujan karyakram me apne bhashan me unhone daava kiya ki: kendra sarkar se shahar ke drainage-system ke liye Rs. 100 crore ki swikriti mil chuki hai; antarrajyiya bus-stand ki swikriti ke baad highway par 9 ekad zameen ki talash jaari hai; Rs. 28 crore ki lagat se BJP karyalaya se abkari tak 2-lane sadak, Kargil Chowk se Karbal tak marg aur Gandhi Chowk par parking ke saath dukaano ke project swikrit ho chuke hain. Status: daava/ghoshna — inme se kisi bhi swikriti-aadesh ya karyanwayan ki swatantra pushti nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Betul me PPP-mode medical college ka shilanyas (23 Dec 2025) — khabar me unke prayason ko 3 janpratinidhiyon me shrey; shilanyas JP Nadda aur CM ne kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Bansal News, 22 Dec 2025 (karyakram ki pushti IANS via Lokmat Times, 23 Dec 2025)',
    sourceUrl: 'https://bansalnews.com/madhya-pradesh/mp-betul-ppp-mode-medical-college-foundation-stone-jp-nadda-mohan-yadav-hindi-news-zvj-10932168',
    date: '2025-12-23',
    note: 'Bansal News ke mutabik Betul ko PPP-mode medical college ki saugat jile ke janpratinidhiyon — visheshkar kendriya mantri Durga Das Uikey, prabhari-mantri Narendra Shivaji Patel aur vidhayak/BJP pradesh-adhyaksh Hemant Khandelwal — ke prayason se mili. 23 Dec 2025 ko kendriya swasthya-mantri J.P. Nadda aur CM Dr. Mohan Yadav ne Betul police-ground me shilanyas kiya; college Kosmi kshetra me banega. Status: shilanyas/bhoomi-pujan — nirman shuru hona tha. Pardarshita: unki bhoomika "prayas" ke roop me 3 netaon ke saath sanyukt shrey hai; shilanyas Nadda/CM ne kiya.',
    period: '2023-2028',
  },
  {
    title: 'Sohagpur, Gorakhar aur Bagholi me Rs. 42 lakh ke 3 samudayik bhavanon ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Jagriti Times, 8 Oct 2026',
    sourceUrl: 'https://jagrititimes.com/politics/development-priorities-to-be-determined-through-public-dialogue-khandelwal/',
    date: '2026-10-08',
    note: 'Mukhyamantri Jan-Vishwas karyakram ke tahat Betul me 5 cluster baithakon ke dauran unhone Sohagpur, Gorakhar aur Bagholi me kul Rs. 42 lakh ki lagat se nirmit 3 samudayik bhavanon ka lokarpan kiya. Status: lokarpan (bhavan nirmit, janata ko samarpit).',
    period: '2023-2028',
  },
];

// Note (defensible-empty): donon MLAs Dec 2023 ke baad ke karyakal me hain. Hindi + English me
// ~10 round ki targeted searches (Bhaskar/Patrika local, ETV Bharat, Naidunia, Betul Update WP API,
// ETV Bharat MP, national portals) ke baad koi bhi bhoomi-pujan/lokarpan/vidhayak-nidhi sanction
// khabar nahi mili jisme in do MLAs ki concrete bhoomika ho. Dono ke naam waali ekmatra substantiv
// news (Indian Masterminds, Dec 2025 — Betul MLA delegation CM ke saath) weak attribution par
// reject hui. Arrays isliye khaali hain — entries nahi milin, research nahi ki gayi aisi baat nahi.
mpWorks['ganga-sajjan-singh-uikey'] = [
  // KHAALI (researched 2026-10-14): post-Dec 2023 kaam par koi verifiable news/sarkari source nahi milin.
];
mpWorks['mahendra-singh-chouhan'] = [
  // KHAALI (researched 2026-10-14): post-Dec 2023 kaam par koi verifiable news/sarkari source nahi milin.
];
// ---- Bhind district batch (researched 2026-10-14) ----
mpWorks['hemant-satyadev-katare'] = [
  {
    title: 'Gram Rajpura me Keshwanand Maharaj Rajpura Dham ke vikas/jirnodhar ke liye Rs. 10 lakh ki vidhayak-nidhi swikriti',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Voice of MP, 15 Jan 2026 (vistar: Jagran Today, 15 Jan 2026)',
    sourceUrl: 'https://voiceofmp.com/user/description/Description_control/news_description/336661',
    date: '2026-01-15',
    note: '"Aapka Beta Aapke Dwar" karyakram ke tahat 3-divasiya kshetra-bhraman ke dauran unhone gram Rajpura sthit Keshwanand Maharaj Rajpura Dham ke vikas evam jirnodhar ke liye Rs. 10 lakh ki swikriti pradan ki; Jagran Today ke mutabik unhone mauke par hi apni vidhayak-nidhi se patra jaari karke anushansa ki. Jagran Today ke mutabik usi dauran Maharani Avantibai ki pratima ka anavaran aur dham-prangan ki wall ka nirman "shuru karakar pura kiya gaya". Status: swikriti (vidhayak-nidhi patra jaari) — wall-nirman/pratima-anavaran purn bataya gaya hai.',
    period: '2023-2028',
  },
  {
    title: 'Kshetra-bhraman me lagbhag 15 gram-panchayaton me sadak aadi buniyadi karyon ke liye vidhayak-nidhi se mauke-par swikriti/anushansa',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Jagran Today, 15 Jan 2026 (pushti: Voice of MP, 15 Jan 2026)',
    sourceUrl: 'https://jagrantodaynews.in/12306',
    date: '2026-01-15',
    note: 'Usi 3-divasiya "Aapka Beta Aapke Dwar" daure me unhone lagbhag 15 se adhik gram-panchayaton ka bhraman karke gaon-vason se sujhav liye aur mauke par hi apni vidhayak-nidhi se patra jaari karke lakhon rupaye ke vikas karyon ki anushansa ki. Jagran Today ke mutabik gram Aharolighaat me sadak-nirman ke saath gram Kathelan, Navlihar, Raipura (Ghinauchi), Hulapura, Mudiyakhada, Deenpura, Gajna, Soi, Kadaura me sadak-nirman ke liye rashi manzoor karai gayi. Status: swikriti/anushansa (patra mauke par jaari) — vyaktigat rashiyan article me nahi di gayin ("lakhon ke karya"); karyanwayan ki alag khabar nahi mili.',
    period: '2023-2028',
  },
];
mpWorks['narendra-singh-kushwah'] = [
  {
    title: 'Gram Tehngur me panchayat bhavan (lagbhag Rs. 37 lakh) ka bhoomi-pujan aur shala bhavan ki boundary-wall (Rs. 5.20 lakh) ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'E Khabar Today, Sep 2025 (est.)',
    sourceUrl: 'https://ekhabartoday.com/khabare-jilo-se/panchayat-bhawan-will-be-constructed-in-this-village-of/cid17344800.htm',
    date: '2025-09',
    note: 'Bhind vidhansabha ke gram Tehngur me unhone panchayat bhavan ke liye bhoomi-pujan aur shala bhavan ki boundary-wall ka lokarpan kiya. Article ke body ke mutabik panchayat bhavan Rs. 37 lakh ki lagat se banega (headline me 35 lakh likha hai) aur boundary-wall ka nirman Rs. 5.20 lakh ki lagat se ho chuka hai. Status: panchayat bhavan = bhoomi-pujan (nirman shuru hona tha); boundary-wall = lokarpan (nirman purn). Caveat: article par print tithi nahi thi; search-index ("407 din pehle") ke aadhar par Sep 2025 (est.) maani hai.',
    period: '2023-2028',
  },
  {
    title: 'Press conference me daava: 2 saal me Rs. 600 crore ke karya swikrit, adhikansh shuru — kuch purn',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Patrika, 2 Jan 2026',
    sourceUrl: 'https://www.patrika.com/bhind-news/works-worth-600-crore-rupees-sanctioned-and-construction-started-in-two-years-mla-20226507',
    date: '2026-01-02',
    note: 'BJP shasan ke 2 saal pure hone par Rest House, Bhind me patrakaron se charcha me unhone daava kiya ki 2 saal me Rs. 600 crore ke karya shasan-star se swikrit karwakar adhikansh shuru ho chuke hain aur kuch pure bhi ho chuke hain. Mukhya daave: Rs. 149 crore ki ring road (nirman antim charan me), Rs. 126.80 crore ka sewer phase-2 (tender ho chuke), railway crossing par Rs. 42 crore ka ROB (ban raha hai), Babedi-Nadrali marg Rs. 8.28 crore (kaam shuru), Umari-Sagra-Nayagaon-Tehngur-UP road Rs. 49 crore (manzoor), Kuwari nadi ke Kachongra ghat par Rs. 19 crore ka pul (swikrit), Gauri Sarovar par Rs. 6 crore (sadak/retaining wall) + Rs. 2.25 crore ke karya, Ayush aspataal bhavan Rs. 12.50 crore (swikrit), Sandipani school bhavan Rs. 50 crore, MJS parisar me law college Rs. 9.59 crore, medical college Phoop se Bhind (85 bigha aavantan + Rs. 2.45 crore boundary-wall), Nagar Nigam seema ka gazette notification, Nunhata food park ka prastav Bhopal bheja, 20 gram-panchayaton me pratyek Rs. 27 lakh, 8 panchayaton me pratyek Rs. 37.50 lakh panchayat bhavan, 5 gaon me pratyek Rs. 30 lakh muktidham, nal-jal aapurti "15 din me" shuru hone ka daava. Status: daava/ghoshna — ye vidhayak ke apne daave hain press conference se; inme se kisi bhi swikriti-aadesh ya karyanwayan ki swatantra pushti nahi mili. Pardarshita: ring road, sewer, ROB, medical college jaise bade kaam rajya-sarkar ki pariyojnaen hain — unki vyaktigat bhoomika ka swatantra praman nahi mila.',
    period: '2023-2028',
  },
];
mpWorks['ambrish-sharma-guddu'] = [
  {
    title: 'CM ke Lahar daure me Rs. 117 crore ke 50 vikas karyon ka bhoomi-pujan/lokarpan — unki anushansa par swikrit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar Hindi, 24 May 2025 (anushansa-bhoomika: Bhaskar English, 23 May 2025)',
    sourceUrl: 'https://www.bhaskarhindi.com/city/bhopal/a-new-industrial-center-will-be-established-in-lahar-chief-minister-dr-mohan-yadav-bhoomi-pujan-and-inauguration-of-50-development-works-costing-rs-117-crore-1144773',
    date: '2025-05-23',
    note: '23 May 2025 ko CM Dr. Mohan Yadav ne Lahar (Maa Mangaladevi ground, mahila sw-sahayata samuh sammelan) ke daure me Rs. 117 crore se adhik lagat ke 33 vikas karyon ka bhoomi-pujan aur 17 karyon ka lokarpan kiya (kul 50 karya — sadak, bijli, peyjal, swasthya, shiksha kshetron se jude). Bhaskar English ke mutabik ye pariyojnaen "BJP MLA Ambrish Sharma ki anushansa (recommendations) par swikrit" hui thin; ve swayam karyakram me maujood the. Usi manch se CM ne Lahar me naya audyogik kendra sthapit karne aur Machhand-Aswar ko nagar parishad banane ki ghoshna bhi ki. Status: 33 karya = bhoomi-pujan, 17 = lokarpan, audyogik kendra/nagar parishad = ghoshna. Pardarshita: bhoomi-pujan/lokarpan CM ne kiya; unki concrete bhoomika anushansa (recommendation) ke roop me hai — swikriti aur kriyanwayan rajya-sarkar dwara.',
    period: '2023-2028',
  },
];

mpWorks['rakesh-shukla'] = [
  {
    title: 'Gram Pachera me 884.60 lakh ki 7 km sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Jagran Today, 29 Jan 2026',
    sourceUrl: 'https://jagrantodaynews.in/13037',
    date: '2026-01-29',
    note: 'Bhind jile ke Mehgaon block ke gram Pachera me Rs. 884.60 lakh ki lagat se 7 km lambi sadak ka bhoomi-pujan Rakesh Shukla ne kiya; sadak Mauja Mehgaon road se NH-719 (Gwalior-Etawah road) ko vaaya sub-jail Mehgaon bypass jodegi. Status: bhoomi-pujan — nirman shuru hona tha, purnata ki alag khabar nahi mili. Corroboration: Navabharat me bhi yahi khabar (884.60 lakh, 7 km, Pachera) prakashit hui hai. Caveat: article me unhe "navin evam navkaraniya urja mantri" kaha gaya hai, lekin ye kaam poornatah Mehgaon kshetra-specific hai — isliye mantri-star exclusion apply nahi hota.',
    period: '2023-2028',
  },
  {
    title: 'Mehgaon vidhansabha me 705.18 lakh ki 4 sadak pariyojnaon ka bhoomi-pujan (Kheriya Bagh, Gitaur)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, May 2026',
    sourceUrl: 'https://www.bhaskar.com/local/mp/bhind/news/roads-are-a-means-to-improve-rural-living-standards-minister-dbp-137980591.html',
    date: '2026-05-19',
    note: 'Rakesh Shukla ne Mehgaon vidhansabha kshetra me kul Rs. 705.18 lakh ki lagat wali 4 sadak pariyojnaon ka bhoomi-pujan kiya; sabse badi pariyojna gram Kheriya Bagh me lagbhag Rs. 284.98 lakh ki 2.5 km lambi sadak hai (Gwalior main road se Kheriya Bagh hote hue Moroli tak). Status: bhoomi-pujan — purnata ki alag khabar nahi mili. Corroboration: Jagran Today (15 May 2026) ne program ki advance soochna di thi — 19 May ko Kheriya Bagh me 3 margon ka aur Gitaur me Siddh Baba sthan par 1 marg ka bhoomi-pujan, jo Bhaskar ke "4 sadak pariyojnaon" se mel khata hai. Caveat: Bhaskar ka article text chhota hai; poora vivaran Jagran Today ki advance report se corroborate hai. Ye kaam poornatah Mehgaon kshetra-specific hai.',
    period: '2023-2028',
  },
  {
    title: 'Mehgaon me 1.2 crore ke Ramleela maidan aur Puttu Baba ki pratima ki ghoshna',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'News Chetna (Hindustan Samachar wire), 22 Jan 2024',
    sourceUrl: 'https://newschetna.com/2024/01/minister-rakesh-shukla-announced-to-build-a-grand/',
    date: '2024-01-22',
    note: 'Ayodhya me Ram mandir pran-pratishtha ke din Mehgaon me aayojit karyakram me Rakesh Shukla ne ghoshna ki ki jis sthal par karyakram ho raha hai use Ramleela maidan ke roop me vikasit kiya jayega — Rs. 1 crore 20 lakh ki lagat se nirman karya karaye jayenge taaki har saal 22 January ko dharmik karyakram ho sake; saath hi Mehgaon ke chaurahye par Puttu Baba (1008 Purushottam Das Maharaj) ki bhavya pratima sthapit karne ki ghoshna ki. Status: GHOSHNA — karyakram-sthal par bhoomi-pujan to hua, lekin vaastavik nirman purn hone ya shuru hone ki alag khabar nahi mili. Credit-pardarshita: ghoshna ke samay ve cabinet mantri the, lekin ye ghoshna Mehgaon kshetra-specific karyakram me unke dwara ki gayi thi (rajya-bhar ka faisla nahi), isliye rakhi gayi hai.',
    period: '2023-2028',
  },
];

mpWorks['keshav-singh-desai'] = [
  {
    title: 'Gohad ward 16 ke Gohadi kshetra me 1.30 crore ki CC sadkon ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Jagran Today, 12 Feb 2026',
    sourceUrl: 'https://jagrantodaynews.in/13747',
    date: '2026-02-12',
    note: 'Gohad nagar ke ward 16 antargat Gohadi kshetra ki vibhinn galiyon me lagbhag Rs. 35 lakh ki CC sadkon ka bhoomi-pujan vidhayak Keshav Desai ne kiya; saath hi Rapta se Gohadi tak lagbhag Rs. 17 lakh tatha Gohadi main road se Murari ke makan tak lagbhag Rs. 78 lakh ki CC sadkon ka bhi bhoomi-pujan hua (kul lagbhag Rs. 1.30 crore). Status: bhoomi-pujan — nirman shuru hona tha, purnata ki alag khabar nahi mili. Corroboration: Atulya Bharat Chetna me bhi yahi karyakram (35+17+78 lakh, ward 16) report hua hai. Karyakram me nagar palika adhyaksh pati Jagdish Mahaur aur ward 16 ki parshad Rajbeti upasthit the.',
    period: '2023-2028',
  },
  {
    title: 'Gram Bhagwasa me vidhayak-nidhi (7 lakh) se bani CC sadak ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Atulya Bharat Chetna, 23 Dec 2025',
    sourceUrl: 'https://atulyabharatchetna.org.in/archives/43988',
    date: '2025-12-23',
    note: 'Gohad vidhayak Keshav Desai ne gram Bhagwasa me CC sadak ka lokarpan kiya; grameenon ki maang par unhone apni vidhayak-nidhi se Rs. 7 lakh swikrit kiye the. Status: lokarpan — kaam purn ho chuka hai (article ke shirshak "vidhayak ne CC road ka kiya lokarpan" aur body me nidhi-swikriti ka ullekh dono maujood hain).',
    period: '2023-2028',
  },
  {
    title: 'Gram panchayat Tukeda me 2 CC sadken aur gaon ka pravesh-dwar — kul 19.50 lakh ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Jan 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com/amp/local/mp/bhind/news/there-should-be-no-compromise-on-quality-mla-136879138.html',
    date: '2026-01',
    note: 'Gohad vidhayak Keshav Desai ne gram panchayat Tukeda me do CC sadkon ke nirman ka bhoomi-pujan kiya — ek sadak Ramroop ke makan se Suresh Singh ke makan tak (Rs. 6 lakh), doosri Sarnam Singh ke makan se Hanuman mandir tak (Rs. 5.50 lakh); saath hi Tukeda gaon ka pravesh-dwar bhi banaya jayega. Dono sadkon aur gate par kul Rs. 19.50 lakh kharch honge. Status: bhoomi-pujan — nirman shuru hona tha, purnata ki alag khabar nahi mili. Caveat: article par "7 mahine pehle" ka relative label tha (crawl ke aadhar par Jan 2026 est.); exact tithi article me nahi hai. Neta ne karyakram me nirman ki gunvatta par zor diya.',
    period: '2023-2028',
  },
  {
    title: 'Gram panchayat Lahchura ke Maho gaon me vidhayak-nidhi se bani CC sadak ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Jagran Today, 28 Feb 2026',
    sourceUrl: 'https://jagrantodaynews.in/14592',
    date: '2026-02-28',
    note: 'Gram panchayat Lahchura ke Maho gaon me vidhayak-nidhi se nirmit nayi CC sadak ka lokarpan vidhayak Keshav Desai ne 28 February (Shanivaar) ko poojan-archan ke saath kiya. Status: lokarpan — kaam purn ho chuka hai.',
    period: '2023-2028',
  },
  {
    title: 'Mahatma Jyotirao Phule Park ke nirman ke liye vidhayak-nidhi se 10 lakh ki ghoshna',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Jagran Today, 23 Feb 2026',
    sourceUrl: 'https://jagrantodaynews.in/14311',
    date: '2026-02-23',
    note: 'Mahatma Jyotiba Phule Park me Shrimad Bhagwat katha karyakram me padhare Gohad vidhayak Keshav Desai ne prastavit Mahatma Jyotirao Phule Park ke nirman karya ke liye apni vidhayak-nidhi se Rs. 10 lakh dene ki ghoshna ki. Status: GHOSHNA — nidhi-swikriti ki ghoshna hui hai; vaastavik swikriti-patra ya nirman shuru hone ki alag khabar nahi mili.',
    period: '2023-2028',
  },
];

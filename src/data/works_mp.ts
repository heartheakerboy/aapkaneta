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

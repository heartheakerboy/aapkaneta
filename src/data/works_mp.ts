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

// ---- Bhopal district batch (researched 2026-10-14) ----
// Bhopal district batch 1 fragment (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
// MLAs: vishnu-khatri (Berasia SC), atif-arif-aqueel (Bhopal Uttar),
//        vishvas-sarang (Narela, minister — sirf Narela kshetra ke kaam), bhagwandas-sabnani (Bhopal Dakshin-Paschim)

mpWorks['vishvas-sarang'] = [
  {
    title: 'Narela ke Ward 37 aur 38 me Rs. 24.78 crore ke 10 vikas karyon ka bhoomi-pujan (sadak, sewer, peya-jal, naali, park)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran (MP-CG), 20 Jul 2026',
    sourceUrl: 'https://www.dainikjagranmpcg.com/state/madhya-pradesh/development-work-worth-%E2%82%B9-2478-crore-started-in-narela-bhopal/article-59257',
    date: '2026-07-19',
    note: '19 Jul 2026 (Ravivar) ko Vishvas Sarang ne Narela ke Ward 37 (lagbhag Rs. 8.04 crore) aur Ward 38 (lagbhag Rs. 16.74 crore) me kul Rs. 24.78 crore ke 10 karyon ka bhoomi-pujan kiya: sewer network vistaar (AMRUT ke tahat), peya-jal pipeline, sadak/naali nirman (Ward 38 me Ashoka Garden thana se Ektapuri hote hue Semra sabzi mandi tak lagbhag Rs. 6 crore ki CC sadak sahit), park sudhaar aur Semra mandi me lagbhag Rs. 20 lakh ka sarvajanik shauchalaya. Status: bhoomi-pujan — karyanwayan ki alag khabar nahi mili. Usi karyakram me Kailash Sarang Park me taiyaar open gym ka lokarpan bhi hua. Disclosure: Sarang mantri hain, lekin ye karyakram unke apne Narela kshetra ke karyon ka tha — isliye rakha hai.',
    period: '2023-2028',
  },
  {
    title: 'Narela ka teesra CM Rise School: Govindpura (BHEL) me lagbhag Rs. 23.71 crore ke naveen bhavan ka bhoomi-pujan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 16 Mar 2024',
    sourceUrl: 'https://www.amarujala.com/madhya-pradesh/bhopal/bhopal-news-third-cm-rise-school-will-be-built-in-narela-at-a-cost-of-rs-23-crore-will-be-ready-in-18-months-2024-03-16',
    date: '2024-03-16',
    note: 'Shaskiya Uchchtar Madhyamik Vidyalaya Govindpura (BHEL) me lagbhag Rs. 23.71 crore ki anumanit lagat se banne wale CM Rise School ke naveen bhavan ka bhoomi-pujan Vishvas Sarang ne 16 Mar 2024 ko kiya — Amar Ujala ke mutabik ye unke Narela kshetra ka teesra CM Rise School hai; nirman avadhi lagbhag 18 mahine batayi gayi (43 classroom, 5 lab, 3 library, auditorium sahit). Status: bhoomi-pujan — purnata ki alag khabar nahi mili. Disclosure: CM Rise rajya sarkar ki yojna hai, lekin bhoomi-pujan unhone apne kshetra ke vidhayak ke roop me kiya — isliye rakha hai.',
    period: '2023-2028',
  },
  {
    title: 'Narela ke Ward 38 me sadak-nirman aur saundaryakaran karyon ka shilanyas (Semra, Purushottam Nagar)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Bhaskar English, Nov 2025 (est.)',
    sourceUrl: 'https://www.bhaskarenglish.in/local/mp/news/mp-minister-vishvas-sarang-foundation-development-works-narela-ward-38-road-construction-beautification-135497830.html',
    date: '2025-11',
    note: 'Vishvas Sarang ne Narela ke Ward 38 me kai vikas karyon ka shilanyas kiya: Semra me Shiv Mandir ke paas aur Purushottam Nagar me sadak-nirman aur saundaryakaran. Status: shilanyas — lagat ka aankda report me nahi tha; purnata ki alag khabar nahi mili. Caveat: tithi article ke "11 months ago" timestamp se anumanit hai (Nov 2025, est.); upar wali Rs. 24.78 crore wali entry ke kuch sthal (Semra, Purushottam Nagar) overlap karte hain — lekin ye doosra, alag event tha, isliye alag entry rakhi hai. Disclosure: Sarang mantri hain, lekin karyakram unke apne Narela kshetra me tha — isliye rakha hai.',
    period: '2023-2028',
  },
];

mpWorks['bhagwandas-sabnani'] = [
  {
    title: 'Ward 33 (Bhim Nagar) me lagbhag Rs. 30 lakh ki CC sadak aur naali nirman ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Shabd Sangram, 19 Apr 2025',
    sourceUrl: 'https://shabdsangram.com/?p=6761',
    date: '2025-04-19',
    note: '19 Apr 2025 ko Dakshin-Paschim kshetra ke Ward 33 me CC road aur naali nirman karyon ke liye vidhayak Bhagwandas Sabnani aur Mahapaur Malti Rai ne sanyukt roop se bhoomi-pujan kiya; lagat lagbhag Rs. 30 lakh batayi gayi. Status: bhoomi-pujan — purnata ki alag khabar nahi mili. Note: article Jan-Sampark press-note shaili me hai; sthal, rakam aur stage article me saaf likhe hain.',
    period: '2023-2028',
  },
  {
    title: 'Dakshin-Paschim kshetra ke bauddh viharon me lagbhag Rs. 45 lakh ke nirman/saundaryakaran karyon ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Shabd Sangram, 7 Apr 2025',
    sourceUrl: 'https://shabdsangram.com/?p=6246',
    date: '2025-04-07',
    note: '7 Apr 2025 ko vidhayak Bhagwandas Sabnani ne Shravasti Buddh Vihar, Rahul Nagar me lagbhag Rs. 45 lakh ki lagat se kshetra ke samast bauddh viharon me hone wale nirman aur saundaryakaran karyon ka bhoomi-pujan kiya. Status: bhoomi-pujan — purnata ki alag khabar nahi mili. Note: article Jan-Sampark press-note shaili me hai; rakam aur stage saaf likhe hain.',
    period: '2023-2028',
  },
  {
    title: 'Ward 26 (Suraj Nagar) me Mukhya Mantri Sanjeevani Clinic ke naveen kakshon ka lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'MP Today, 16 Mar 2024',
    sourceUrl: 'https://mptoday.org.in/99571/',
    date: '2024-03-16',
    note: '16 Mar 2024 (Lok Sabha aachar-sanhita se ek din pehle) ko vidhayak Bhagwandas Sabnani ne Dakshin-Paschim kshetra ke Ward 26, Suraj Nagar me Mukhya Mantri Sanjeevani Clinic ke naveen kakshon ka lokarpan kiya; kshetriya parshad Rajmani Uike bhi upasthit the. Status: lokarpan (nirman purn) — lagat ka aankda report me nahi tha.',
    period: '2023-2028',
  },
  {
    title: 'Ward 25 (Chandrashekhar School parisar) me Rs. 20,57,660 ke vikas karyon ka bhoomi-pujan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'CGINFO24, 9 Aug 2024',
    sourceUrl: 'https://cginfo24.com/2024/08/09/mla-bhagwandas-sabnani-performed-the-bhoomi-pujan-for-development-works-in-ward-25-of-south-west-assembly/',
    date: '2024-08-09',
    note: '9 Aug 2024 ko vidhayak Bhagwandas Sabnani ne Ward 25 ke Chandrashekhar School parisar me Rs. 20,57,660 ki rashi se hone wale karyon ka bhoomi-pujan kiya: boundary wall, paver block, jhule, furniture aur anya marammat karya. Status: bhoomi-pujan — purnata ki alag khabar nahi mili. Caveat: CGINFO24 chhota kshetriya news portal hai; article press-note shaili me hai — isi wajah se detail cross-verify nahi ho payi, lekin sthal/rakam/stage sab article me saaf likhe hain.',
    period: '2023-2028',
  },
];

// vishnu-khatri (Berasia SC): khaali — credibility check par koi entry nahi bani. Reject-log:
// 1. CM Rise School Rs. 36.34 crore bhoomi-pujan + Itkhedi school Rs. 1.75 crore lokarpan (mpjankrantinews.in) — event lagbhag Mar 2023 ka hai (pre-tenure), REJECT.
// 2. Vikas Yatra (Feb 2023) me sadak bhoomi-pujan/lokarpan ke daave (ncrsamacharlive.in, swatantrasamay.com) — pre-tenure, REJECT.
// 3. Berasia me Sandipani School lokarpan + four-lane road ghoshna (indianmasterminds.com, Aug 2026) — CM ka karyakram; Khatri ki sirf upasthiti/bhashan, koi concrete bhoomika (nidhi/shilanyas/anushansa) report nahi, REJECT.
// 4. Unke X account ka daava: Behrawal-Barkhedi Dev-Bilakho 20 km sadak (~Rs. 10 crore) — self-post, kisi news me report nahi hua, REJECT (dawa ke liye news report chahiye).
// 5. 33 gram panchayaton ko paani tanker vitran (YouTube NN81) — YouTube-only source, REJECT.
// 6. Sadak suraksha jagrukta abhiyan — BJP karyakarta ki pehal, Khatri sirf agrim-badhai paane wale, REJECT.
// 7. SS Hospital (Harrakheda) udghatan me upasthiti; accident ke baad hospital daura — sirf maujoodgi/sawedna, REJECT.
mpWorks['vishnu-khatri'] = [];

// atif-arif-aqueel (Bhopal Uttar): khaali — credibility check par koi entry nahi bani. Reject-log:
// 1. Metro Orange Line Phase-2 virodh (Bhaskar English ~Mar 2026; FPJ/ETV Bharat Oct 2026) — virodh/protest, koi vikas karya nahi; Gadkari ko double-decker bridge ki chitthi — sirf maang/proposal, REJECT.
// 2. Vidhan Sabha me gaay ko rashtriya pashu ghoshit karne ka sankalp (Feb 2026) — vidhayi maang, vikas karya nahi, REJECT.
// 3. Aawara kutton par dhyanakarshan (budget session 2026) — vidhayi sawal, vikas karya nahi, REJECT.
// Note: vipakshi vidhayak hone ke kaaran unke khud ke nidhi/shilanyas/lokarpan ki koi credible news Dec 2023 ke baad nahi mili — khaali profile weak attribution se behtar.
mpWorks['atif-arif-aqueel'] = [];

// General reject-log (Bhopal batch 1):
// - Sarang: Govindpura CM Rise school bhoomi-pujan (Mar 2024) — Amar Ujala ki entry me shamil hai; mptoday wala Mar-2024 wala article usi event ka dusra report hai (double-count nahi).
// - Sarang: Ashoka Garden ke Vivekananda Park par lokarpan-credit vivaad (mpbreakingnews.in) — lagbhag Mar 2020 ka purana mamla (pre-tenure), REJECT.
// - Sabnani: Ayurved Chikitsalaya naveen bhavan bhoomi-pujan (Sep 2026) me sirf upasthiti — mantri Inder Singh Parmar ka karyakram, koi concrete bhoomika nahi, REJECT.
// - Sabnani: Jawahar Chowk par Durga Utsav jhanki-sthal bhoomi-pujan (Sep 2026) — utsav-sajja, vikas karya nahi, REJECT.
// - Sabnani: Gandhi Jayanti swachhata abhiyan me sahbhagita (Oct 2026) — sirf sahbhagita, REJECT.

// Bhopal district batch w2 (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
// Slugs: arif-masood (Bhopal Madhya AC-153, INC), krishna-gaur (Govindpura AC-154, BJP, mantri),
// rameshwar-sharma (Huzur AC-155, BJP)

mpWorks['arif-masood'] = [
  // Negative entry (santulit, dosh-siddhi ka daava nahi): Indira Priyadarshini College manyata-radd
  // mamle me MP High Court ne FIR + SIT ka nirdesh diya tha (Aug 2025), jise Supreme Court ne
  // 10 Mar 2026 ko set aside kar diya; mamla HC me merits par lambit hai. Vikas-karya ki koi
  // satyapit khabar nahi mili — isliye positive entries khaali.
  {
    title: 'Indira Priyadarshini College manyata-radd mamle me Supreme Court se rahat — HC ka FIR/SIT nirdesh radd, mamla HC me merits par lambit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran English, 10 Mar 2026',
    sourceUrl: 'https://english.dainikjagranmpcg.com/states/madhya-pradesh/supreme-court-grants-relief-to-congress-mla-arif-masood/article-15144',
    date: '2026-03-10',
    note: 'NEGATIVE entry. Aman Education Society (sachiv: Arif Masood) dwara sanchalit Khanugaon sthit Indira Priyadarshini College ki manyata Higher Education Department ne 9 Jun 2025 ko jali dastavezon ke aarop par radd ki thi; MP High Court ne FIR darj karne aur SIT gathan ka nirdesh diya tha. SC (Justice J.K. Maheshwari, Justice Atul Chandurkar) ne HC ke antarim nirdeshon ko set aside kiya — kaha ki sarkar ka jawab aane se pehle itne sakht nirdesh zaroori nahi the. Mamla abhi bhi High Court me merits par lambit hai — dosh-siddhi ka koi daava nahi. Caveat: shikayat purv vidhayak Dhruvnarayan Singh ne ki thi (rajnaitik prtispardha ka pehlu bhi hai).',
    period: '2023-2028',
  },
];

mpWorks['krishna-gaur'] = [
  {
    title: 'Ward 73 (Shiv Nagar Phase 1-3, Anant Nagar) me sadak aur naali karyon ka bhoomi-pujan — kul 74.48 lakh',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Bhaskar English, Jun 2025 (est.)',
    sourceUrl: 'https://www.bhaskarenglish.in/local/mp/bhopal/news/krishna-gaur-bhoomi-poojan-road-drain-construction-ward-73-bhopal-shiv-nagar-anant-nagar-development-135310276.html',
    date: '2025-06',
    note: 'Govindpura vidhayak tatha Rajya Mantri (Swatantra Prabhar) Krishna Gaur ne Ward 73 ke parshad Raju Rathore ke saath milkar sadak-naali nirmaan karyon ka bhoomi-pujan kiya: Shiv Nagar Phase-3 (Prahlad Wali Gali naali), Phase-2 (Suraj Premium School ke peeche naali), Phase-1 (Sachin Gaur ke nivas ke saamne sadak-naali), Phase-3 (Chhote Zindbaba ke paas sadak-naali). Status: bhoomi-pujan — karyanwayan/purnata ki alag khabar nahi mili. Caveat: tithi page par "1 year ago" thi (est. Jun 2025); BJP ke bayaan ke hawale se report.',
    period: '2023-2028',
  },
  {
    title: 'Govindpura kshetra me 70 lakh ke vikas karyon ka bhoomi-pujan — Rajat Vihar, Durga Nagar (Ward 54), Kunjan Nagar, Bagsevania',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Central Chronicle, Jun 2025 (est.)',
    sourceUrl: 'https://www.centralchronicle.com/krishna-gaur-performs-bhoomi-pujan-of-development-projects/',
    date: '2025-06',
    note: 'Rajat Vihar Colony me 5 lakh ke paver-block aur 7 lakh ki CC sadak ka bhoomi-pujan; Ward 54 ke Durga Nagar mandir parisar me paver-block aur mandir roofing; Sterling Castles me paver-block; Kunjan Nagar me naali aur park nirmaan; Kabirpanthi Samaj Bhawan ka unnayan; Bagsevania me park-sadak karyon ki shuruaat. Status: bhoomi-pujan/karyarambh — purnata ki alag khabar nahi mili. Caveat: tithi "476 days ago" thi (est. Jun 2025, Balidan Diwas ke din — 23 Jun 2025 se milti-julti).',
    period: '2023-2028',
  },
  {
    title: 'Ward 65 me 52 lakh ke vikas karyon ka bhoomi-pujan — ITI Staff Campus sanskritik manch, Gautam Nagar naali-sadak, Geet Bungalow Phase-5',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Central Chronicle, Jun 2025 (est.)',
    sourceUrl: 'https://www.centralchronicle.com/krishna-gaur-performs-bhoomi-pujan-of-development-projects-2/',
    date: '2025-06',
    note: 'ITI Staff Campus me 5 lakh ke sanskritik manch ka nirmaan shuru; Gautam Nagar me 14.88 lakh ki RCC naali aur CC sadak ka bhoomi-pujan; Chanakyapuri me 5.57 lakh ki naali; Geet Bungalow Phase-5 me 26 lakh ki RCC naali-CC sadak ka shilanyas; Indus Park Phase-2 me vriksharopan. Status: bhoomi-pujan/karyarambh — purnata ki alag khabar nahi mili. Caveat: tithi "475 days ago" thi (est. Jun 2025).',
    period: '2023-2028',
  },
  {
    title: 'Ward-61 (Lavkush Nagar, Khajuri Kalan) me mandir saundaryikaran ke liye 5 lakh ki vidhayak-nidhi ki ghoshna',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Central Chronicle, Apr 2025 (est.)',
    sourceUrl: 'https://www.centralchronicle.com/minister-krishna-gaur-listens-to-govindpura-residents/',
    date: '2025-04',
    note: 'Ward-61 ke achanak nirikshan dauran Lavkush Nagar/Samridhi Parisar (Khajuri Kalan) me jal-jamav ki shikayat par Krishna Gaur ne atikraman hatane, naali safai aur mandir ke chaaron taraf paver-block lagane ke nirdesh diye, aur mandir saundaryikaran ke liye apni vidhayak-nidhi se 5 lakh rupaye dene ki ghoshna ki. Status: ghoshna — swikriti/vitran ki alag sarkari pushti nahi mili. Disclosure: yehi article mukhyatah nirikshan-aadeshon par hai (jo niyam-anusar ginne layak nahi); sirf 5 lakh ki ghoshna entry me hai. Caveat: tithi "542 days ago" thi (est. Apr 2025).',
    period: '2023-2028',
  },
  {
    title: 'Ayodhya Bypass par BMC-NHAI severage line vivad ka samadhan — mantri Krishna Gaur ki uchch-stariya baithak ke baad sahamati',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Jagran English, 14 May 2026',
    sourceUrl: 'https://english.dainikjagranmpcg.com/states/madhya-pradesh/ayodhya-bypass-sewage-dispute-resolved-after-minister%E2%80%99s-meeting/article-18231',
    date: '2026-05-14',
    note: '16-km 10-lane Ayodhya Bypass par severage pipeline bichhane ko lekar BMC aur NHAI ke beech gatirodh tha (NHAI 33-metre restricted zone ka hawala de raha tha). Krishna Gaur ne dono vibhagon ke adhikariyon ki uchch-stariya baithak bulai; hastakshep ke baad NHAI ne sadak ke dono taraf 4-4 metre jagah dene par sahamati di, aur Bhanpur ke 60 MLD STP se judi severage line ke liye 3 takniki vikalp pehchane gaye. Disclosure: hastakshep mantri ke roop me tha (unke vibhag ka vishay nahi), lekin Ayodhya Bypass/Bhanpur belt Govindpura kshetra sahit purvi Bhopal ke 5 lakh+ nivasiyon ko prabhavit karta hai; rajya-bhar ke vibhagiya faisle exclude kiye gaye hain, ye shahar-stariya samadhan hai. Status: samadhan ghoshit — pipeline ka karyanwayan takniki anumodanon ke baad shuru hona tha.',
    period: '2023-2028',
  },
];

mpWorks['rameshwar-sharma'] = [
  {
    title: '11 Mile Khajuri Junction (Bhopal-Indore highway) par 31 crore ke 6-lane flyover ka bhoomi-pujan — Vidhan Sabha Adhyaksh ke saath',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 5 Nov 2025',
    sourceUrl: 'https://www.freepressjournal.in/bhopal/mp-news-6-lane-flyover-worth-31-crore-to-be-built-on-bhopal-indore-highway-to-be-completed-before-simhastha',
    date: '2025-11-05',
    note: 'Huzur vidhayak Rameshwar Sharma ne Vidhan Sabha Adhyaksh Narendra Singh Tomar ke saath milkar 850-metre lambe 6-lane flyover ka bhoomi-pujan kiya; nirmaan MPRDC karegi, lakshya Simhastha-2028 se pehle (18 mahine me) purnata. Status: bhoomi-pujan — nirmaan shuru hona tha. Disclosure: ye rajya pariyojna hai (MPRDC), lekin Sharma ne sanyukt roop se bhoomi-pujan kiya aur pariyojna unke Huzur kshetra me hai — isliye pardarshita ke saath rakha gaya hai. Isi article ke mutabik pichhle 5 dinon me kshetra me 100 crore+ ke karyon ke shilanyas hue (Mandakini-Danishkunj 4-lane sadak, Sukhi Sewania 6-lane flyover) — unke alag-alag shilanyas ki pushti nahi mili, isliye alag entry nahi.',
    period: '2023-2028',
  },
  {
    title: 'Gram Sikandarabad me Ram mandir nirmaan ke liye 5 lakh ki vidhayak-nidhi ki ghoshna',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Bhaskar English, Dec 2024 (est.)',
    sourceUrl: 'https://www.bhaskarenglish.in/local/mp/bhopal/news/shrimad-bhagwat-katha-ends-with-a-call-for-unity-as-villagers-pledge-support-for-ram-temple-134053942.html',
    date: '2024-12',
    note: 'Sikandarabad gaon me 7-divasiya Shrimad Bhagwat Katha ke samapan par Huzur vidhayak Rameshwar Sharma ne gaon ke Ram mandir nirmaan ke liye apni nidhi se 5 lakh rupaye dene ki ghoshna ki; unki ghoshna ke baad graminon ne 30 minute me 60 lakh se adhik ka sahyog aur zameen daan ki ghoshna ki. Status: ghoshna — nidhi vitran ya mandir nirmaan ki alag pushti nahi mili. Caveat: tithi page par "1 year ago" thi (est. Dec 2024); ye dharmik nirmaan hetu nidhi-ghoshna hai, vikas-karya ki shreni me dhyan se rakha gaya hai.',
    period: '2023-2028',
  },
];

// REJECT-LOG (bhopal_w2, 2026-10-14)
// — arif-masood: Run-4 Master Plan marathon (FPJ, 9 Sep 2026) — sirf maang/protest, kaam nahi.
//   Master Plan 2047 draft par sarkar ko credit-sawal (IANS, 26 Sep 2026) — tippani, kaam nahi.
//   Metro khodai par Vidhan Sabha me sawal (TOI, ~Aug 2025) — sawal-jawab, kaam nahi.
//   Waqf (Amendment) Act virodh / Ujjain mosque row par appeal / Bhojshala verdict tippani — rajnaitik bayan, kaam nahi.
//   tfipost.com ka "20-year college fraud" article — pakshpatpurna outlet; HC FIR/SIT nirdesh wali khabar ko
//   Dainik Jagran English ki SC-relief wali santulit reporting ke saath entry me shamil kiya; tfipost ka daava alag se nahi.
// — krishna-gaur: Ward-61 nirikshan (Central Chronicle, Apr 2025) ke aadesh-nirdesh — sirf nirikshan; sirf 5 lakh
//   ki ghoshna entry me hai. Master Plan 2047 par mantri-bayaan (IANS, Sep 2026) — tippani, kaam nahi.
//   Bhoj-Narmada Dwar bhoomi-pujan (Central Chronicle, ~May 2025) — CM ka karyakram, Gaur sirf upasthit; exclude.
//   CM ka 155-cr severage + Sandipani School + stadium karyakram (FPJ, Nov 2025) — CM ka shilanyas/lokarpan,
//   Gaur sirf upasthit; exclude. Unke vibhag (Backward Classes/Minority Welfare) ke rajya-bhar ke faisle — niyam se exclude.
// — rameshwar-sharma: Bairagarh 305-cr flyover / Lalghat grade separator / Sant Nagar flyover / Phatak Road ROB /
//   3 FOBs / Rose Garden vistar / Bhaunri talab / Kalkheda Panchayat Bhawan / PM Awas Kalkheda ke nirikshan
//   (Bhaskar English + Dainik Jagran English, ~Dec 2025-Jan 2026) — sirf nirikshan-nirdesh, kaam ki shuruaat/purnata nahi.
//   CM ke 9 dwar ghoshna karyakram (FPJ, Dec 2025) — CM ki ghoshna, Sharma aayojak matra; exclude.
//   CM ka 155-cr severage bhoomi-pujan + Katara Barrai Sandipani School + Banjari stadium lokarpan (FPJ, Nov 2025) —
//   CM ke shilanyas/lokarpan; Sharma ne bhashan me Ram Leela Ground ki maang rakhi (maang = reject).
//   IISER Bhopal-ATRI campus shilanyas (TOI, Oct 2026) — Amit Shah/CM ka karyakram, Sharma sirf ganmanya; exclude.
//   Owaisi-Qazi Camp bayan vivad (Lokmat Times, Sep 2026) — rajnaitik bayan, kaam nahi; negative entry layak gambhir
//   mamla nahi (koi case/FIR ki credible khabar nahi mili).
// — SOURCES REJECTED: youtube.com shorts (NationMirror), newsorbit.info (aggregator-style), itdcindia.com,
//   public.app-type, FB/IG self-posts — niyam-anusar istemal nahi.

// ---- Burhanpur district batch (researched 2026-10-13) ----
mpWorks['archana-chitnis'] = [
  {
    title: 'Vidhayak vishesh nidhi se Burhanpur nagar nigam kshetra ke liye Rs. 2.94 crore ke vikas karyon (sadak, nali, samudayik bhavan) ki swikriti',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sadaiv News, 15 Oct 2025',
    sourceUrl: 'https://sadaiv.net/burhanpur/burhanpur-got-a-gift-due-to-the-efforts-of-mp-development-package-of-%e2%82%b9-1-50-crore-approved-for-10-wards/',
    date: '2025-10-15',
    note: 'Nagriya prashasan evam vikas vibhag ne vidhayak vishesh nidhi se FY 2025-26 me Burhanpur vidhansabha kshetra ke nagariya kshetra me vibhinn vikas/adhosanrachna karyon ke liye Rs. 2.94 crore swikrit kiye — nagar nigam ke vibhinn wardon me sadakon, naliyon aur samudayik bhavanon sahit nirman karya shamil. Status: swikriti — karyanwayan/purnata ki alag khabar nahi mili. Caveat: usi article me sansad ke Rs. 1.50 crore package (10 wards) ki bhi khabar hai — wo sansad ki nidhi hai, is entry me nahi gini.',
    period: '2023-2028',
  },
  {
    title: 'Shanwara chauraha se Lalbagh chauraha tak divider par Rs. 50 lakh ki railing ka nirman — unke prastav par vidhayak vishesh nidhi se swikriti',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Sadaiv News, 15 Oct 2025',
    sourceUrl: 'https://sadaiv.net/burhanpur/burhanpur-got-a-gift-due-to-the-efforts-of-mp-development-package-of-%e2%82%b9-1-50-crore-approved-for-10-wards/',
    date: '2025-10-15',
    note: 'Unke anusaar Shanwara–Lalbagh marg atyant vyast hai (railway station road + badi aabadi); divider par railing na hone se maveshi aate the aur durghatnayen ho rahi thi. Unhone shasan ko prastav bheja, jiske baad vidhayak vishesh nidhi se Rs. 50 lakh ki swikriti mili. Status: swikriti — nirman karyanwayan ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Gram Mohammadpura me Pt. Shivnath Shastri shaskiya ayurved mahavidyalaya-chikitsalaya pahunch marg (1 km, 20 ft cementikrit, lagat Rs. 67 lakh) ki swikriti',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Pradesh Patrika, Jun 2025',
    sourceUrl: 'https://www.pradeshpatrika.com/2025/06/67.html',
    date: '2025-06',
    note: 'Unke prayason se mahavidyalaya-chikitsalaya pahunch marg ke liye lagbhag Rs. 67 lakh ki swikriti mili — 20 ft chauda, 1 km lamba cementikrit marg; vidhayak nidhi aur mahavidyalaya ki rashi se swikriti. Status: swikriti — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Note: Dec 2024 me Bhopal me mahavidyalaya ki sadharan-sabha baithak me bhi is marg par charcha hui thi.',
    period: '2023-2028',
  },
  {
    title: 'Burhanpur me 2 nagar-van (lagat lagbhag Rs. 2 crore) — Chinchala (4.5 hectare) aur Bhagwati Mata mandir kshetra (50 hectare) — unke prastav par kendra sarkar ki manjuri',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'ETV Bharat, 22 Nov 2025',
    sourceUrl: 'https://www.etvbharat.com/hi/state/burhanpur-two-city-forests-developed-central-government-approves-madhya-pradesh-news-mps25112202208',
    date: '2025-11-22',
    note: 'ETV Bharat ke mutabik unhone kendra sarkar ke samaksh Burhanpur me nagar-van vikasit karne ka prastav rakha tha; kendra ne swikriti di. Lalbagh sthit Chinchala me 4.5 hectare aur Bhagwati Mata mandir kshetra me 50 hectare — kul lagbhag 55 hectare, lagat lagbhag Rs. 2 crore. Swikriti ke baad unhone van vibhag ke adhikariyon ke saath prastavit sthalon ka nirikshan bhi kiya. Status: kendriya manjuri + sthal-nirikshan — vikas-karya prarambh ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Jila panchayat kshetra-5 ke gram panchayaton me vidhayak vishesh nidhi se Rs. 1.07 crore (title) / lagbhag Rs. 1.78 crore (body) ke vikas karyon ki swikriti',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Lucky Express News, 13 Jan 2025',
    sourceUrl: 'https://luckyexpressnews.com/1594/',
    date: '2025-01-13',
    note: 'Mukhyamantri adhosanrachna vikas karyon ke antargat vidhayak vishesh nidhi se Fofnarkala, Pipaririyat, Turakgurhada, Badsingi, Maitha, Bhavsa, Malveer, Jambupani, Khamni, Bakkhari, Raigaon, Bambhada aur Mohad gram panchayaton me vibhinn karya swikrit — gaon ke aantrik marg, samudayik bhavan, sabha mandap, teen shed, saundaryikaran, pravesh dwar, shamshan ghat, vidyut pole/street light, kheton tak pahunch marg ka murmikaran, shaskiya school ke paas boundary wall aadi. Unke anusaar kuch karya prarambh bhi kara diye gaye. Status: swikriti (kuch karya prarambh). Caveat: article ke title me "1.07 crore" aur body me "lagbhag 1.78 crore se adhik" — aankde me visangati; dono darj kiye hain.',
    period: '2023-2028',
  },
  {
    title: 'Samajik/samudayik bhavanon ke liye vidhayak vishesh nidhi se kul lagbhag Rs. 81.6 lakh ki swikritiyan (Koshthi samaj Lalbagh 36 lakh sahit)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Harf Harf Aaina, 18 Jun 2026',
    sourceUrl: 'https://harfharfaaina.wordpress.com/2026/06/18/hinglaj-nata-praan-pratishtha-me-sammilit-hui-vidhayak/',
    date: '2026-06-18',
    note: 'Hinglaj Mata pran-pratishtha karyakram me unhone bataya ki vidhayak vishesh nidhi se: Lalbagh me Koshthi samaj ke adhure bhavan ke karya ko purn karne hetu Rs. 36 lakh (nirman karya pragatirat), Datt mandir sthit bhavan Rs. 17 lakh (karya jaari), Gandhi Colony Marimata mandir sabha mandap Rs. 12.30 lakh, Gulabganj Shiv mandir bhavan Rs. 10 lakh (tender jaari), IG Jijau Suryavanshi Kshatriya Maratha samaj bhavan saundaryikaran Rs. 6.30 lakh. Status: mishrit — kuch pragatirat, kuch tender/swikriti stage. Disclosure: ye chhota sthaniya blog hai; aankde karyakram me unke bayan par aadharit. Note: isi bayan me "poorv me Rs. 25 lakh se Sakalpanch Neve samaj bhavan nirmit" ka daava bhi tha — uski tithi nahi mili, isliye tenure-rule ke tahat usse entry me nahi gina.',
    period: '2023-2028',
  },
  {
    title: 'Unke prayason ka daava: Burhanpur jile me ek saath 22 MBBS bond chikitsakon ki padsthapana (swasthya vibhag ke aadesh se)',
    category: 'Aspataal',
    badge: 'dawa',
    sourceLabel: 'AIMAMedia, 2026-09 (est.)',
    sourceUrl: 'https://aimamedia.org/newsdetails.aspx?nid=772448',
    date: '2026-09 (est.)',
    note: 'Dawa: unke nirantar prayason (CM Mohan Yadav aur swasthya mantri Rajendra Shukla se sampark) ke parinamswaroop Lok Swasthya evam Chikitsa Shiksha vibhag ke aadesh se jile ko ek saath 22 MBBS bond chikitsak mile — jila chikitsalaya (Sw. Nandkumar Singh Chauhan) me 5, CHC Shahpur 4, Lalbagh 3, Nepanagar 3, Khaknar 3 aur PHC Sival/Basad/Amulla/Bodarli me 1-1. Disclosure: padsthapana vibhagiya aadesh se hui; isme unki bhoomika (maang/prayas) ka daava news-reported hai, swatantra roop se verify nahi hua. Article me March 2026 me jila chikitsalaya me Medicine/ENT visheshagyon ki padsthapana ka daava bhi hai. Caveat: article par prakashan-tithi darj nahi; March 2026 ke ullekh aur crawl pattern ke aadhar par Sep 2026 anumaanit.',
    period: '2023-2028',
  },
];
mpWorks['manju-rajendra-dadu'] = [
  {
    title: 'Sadak-pul aur panchayat bhavanon ke liye Rs. 118.85 crore ki swikriti — unke pryas se',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Sadaiv News, 21 Dec 2024',
    sourceUrl: 'https://sadaiv.net/burhanpur/mla-manju-dadus-efforts-bear-fruit-approval-of-rs-118-crore-for-roads-and-panchayat-buildings-in-nepanagar/',
    date: '2024-12-21',
    note: 'Sadaiv News ke mutabik unhone PWD mantri Rakesh Singh aur Panchayat-Gramin Vikas mantri Prahlad Patel se milkar kul Rs. 118.85 crore ki vikas karyon ki swikriti dilayi. Isme sadak-pul karye (Ghagharla-Neemsethi-Piplod-Khandwa marg 26.45 cr, Hasanpura-Dahinala-Mandwa marg 26.20 cr, Asir-Chandni marg par Pandhar nadi par pul 25 cr, Nepanagar railway station-Mandwa high school marg 12.48 cr, Ambada-Manmodiya-Shankarpura 6.96 cr, Kanapur-Bhoraghat 6.77 cr, Gondari-Dangurla 5.69 cr, Nimna-Chamartanda 3.92 cr, Manjrod-Susarkheda 2.29 cr) aur 8 panchayat bhavan (Khaknar Kala 46.52 lakh; Piplapani, Badnapur, Jamuniya, Amulla Kala, Tajnapur, Rayatlai, Dawali Kala — pratyek 37.49 lakh) shamil hain. Status: swikriti — nirman karyanwayan ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Rs. 12.08 crore ke vikas karyon ka lokarpan aur bhoomi-pujan — sansad Gyaneshwar Patil ke saath sanyukt',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, 11 Oct 2025',
    sourceUrl: 'https://www.bhaskar.com/amp/local/mp/burhanpur/news/inauguration-and-bhoomi-pujan-of-development-works-worth-rs-128-crore-in-nepanagar-136146811.html',
    date: '2025-10-11',
    note: 'Bhaskar ke mutabik Khandwa sansad Gyaneshwar Patil aur vidhayak Manju Rajendra Dadu ne sanyukt roop se Nepanagar kshetra me lagbhag Rs. 12.08 crore ke karyon ka lokarpan aur bhoomi-pujan kiya. Pramukh karye: gram Doiphokia me 47 lakh ka Sant Shri Namdev vyayamshala (samudayik bhavan) lokarpan, Saikheda Kala me 38.05 lakh ki gaushala lokarpan, shasakiya utkrisht vidyalaya Khaknar ka 5.36 crore ka naveen bhavan lokarpan, Padri Khadki aur Pangri me 2.75 crore pratyek lagat ke 50-seater chhatravas, aur Saikheda Kala me 37.50 lakh ka Atal Gram Sadan (naveen panchayat bhavan) bhoomi-pujan. Status: lokarpan/bhoomi-pujan (kuch purn, kuch nirmaanadheen). Caveat: ye karyakram sansad ke saath sanyukt tha — shreya sanyukt hai; vidhayak ke liye "pramukh sthaniya sahyog" note kiya gaya hai. Corroborated by Sadaiv News, same date.',
    period: '2023-2028',
  },
  {
    title: 'Lagbhag 80 lakh ke graameen vikas karyon ka bhoomi-pujan aur lokarpan (CC sadak, puliya, panchayat bhavan, sabha mandap)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Apr 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/burhanpur/news/nepanagar-vidhayak-manju-dadu-launches-80-lakh-development-works-137713284.html',
    date: '2026-04 (est.)',
    note: 'Bhaskar ke mutabik unhone Nepanagar kshetra me lagbhag Rs. 80 lakh ke vibhinn vikas karyon ka bhoomi-pujan aur lokarpan kiya. Pramukh karye: gram panchayat Bhauraghat me 10 lakh ka CC road, Sainkhedakala-Nandurakala me 10 lakh ka puliya nirman, Nandkheda me 11 lakh ka puliya nirman, Sindhkhedakala me 20 lakh ke gram panchayat bhavan ka lokarpan, Gulai-Gopalpura me 4 lakh ka chabutra nirman, Mahalgurada me 10 lakh ka CC road, Devrimal-Nevrikalan me 10 lakh ka puliya nirman, aur Sukhpuri me 5 lakh ka sabha mandap nirman. Status: bhoomi-pujan/lokarpan — purnata ya karyanwayan ki alag khabar nahi mili. Caveat: article me tithi "guruvaar" likhi thi (search-index "180 days ago" ke aadhar par Apr 2026, est.).',
    period: '2023-2028',
  },
  {
    title: 'Nepanagar me 5 naveen shasakiya high school bhavanon ki swikriti (kul Rs. 19.81 crore)',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, May 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/burhanpur/news/nepanagar-vidhayak-manju-dadu-efforts-5-new-high-school-buildings-approved-137902341.html',
    date: '2026-05 (est.)',
    note: 'Bhaskar ke mutabik Nepanagar vidhansabha me 5 naveen shasakiya high school bhavanon ke nirman ko swikriti mili hai (kul lagat Rs. 19.81 crore; pratyek bhavan 396.26 lakh). Ye swikriti vidhayak Manju Rajendra Dadu ke prayason se mili hai (CM Mohan Yadav aur Janjati Karya mantri Kunwar Vijay Shah ka aabhar vyakt). School: Haseenabad, Nawtha, Haiderpur, Palasur, Manjrod Khurd. Status: swikriti — bhoomi-pujan/nirman karyanwayan ki alag khabar nahi mili. Caveat: search-index "156 days ago" ke aadhar par May 2026 (est.).',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak nidhi se 12 gram panchayaton ko Rs. 22.91 lakh ke motorpump-sahit pani ke tanker (peyjul + firefighting)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Jun 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/burhanpur/news/burhanpur-mla-manju-dadu-water-tankers-fire-fighting-help-12-villages-138125419.html',
    date: '2026-06 (est.)',
    note: 'Bhaskar ke mutabik unhone apni vidhayak nidhi se Rs. 22.91 lakh ki lagat se 12 gram panchayaton ko motorpump-sahit atyadhunik pani ke tanker pradan kiye. Labharthi gram: Badnapur, Amba, Sukta, Dhaba, Dariyapur Kalan, Mohangarh-Nana Nagari, Utambi, Bhagwaniya, Salbad, Jalandra, Rahmanpura, Nasirabad, Ghagharla. Uddeshya: garmi me peyjul aapoorti sunischit karna aur aagjani me tatkaal sahayta (firefighter ke roop me). Status: vitran ho chuka — purnata. Caveat: search-index "129 days ago" ke aadhar par Jun 2026 (est.).',
    period: '2023-2028',
  },
];

// ---- Chhatarpur district batch (researched 2026-10-14) ----
// Chhatarpur batch 1 — Kamakhya Pratap Singh, Ahirwar Dileep, Arvind Pateriya (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
// ---- Chhatarpur district batch 1 (researched 2026-10-14) — DO NOT export; appended to works_mp.ts ----
// Kamakhya Pratap Singh (Teeka Raja, Maharajpur), Ahirwar Dileep (Chandla SC, minister), Arvind Pateriya (Rajnagar).
mpWorks['kamakhya-pratap-singh-teeka-raja'] = [
  {
    title: 'Naugaon me Kendriya Vidyalaya khulne ki prakriya shuru — unke 5 Jan 2025 ke patra par kendriya shiksha rajya mantri ka javab',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Prakhar Gyan, 16 Sep 2025',
    sourceUrl: 'https://prakhargyan.com/naugaanv-ko-milegaa-bddaa-tohphaa-bccon-kii-aankhon-men-spnon-kii-cmk-kendriiy-vidyaaly-kholne-kii-prkriyaa-shuruu/',
    date: '2025-09-16',
    note: 'Report ke mutabik vidhayak ne 5 Jan 2025 ko kendriya shiksha mantralay ko patra likhkar Naugaon me Kendriya Vidyalaya ki maang rakhi thi; kendriya shiksha rajya mantri (swatantra prabhar) Jayant Chaudhary ne 4 Sep ko likhe patra me pushti ki ki Naugaon me naye Kendriya Vidyalaya ka prastav Kendriya Vidyalaya Sangathan (KVS) tak pahunch chuka hai aur prakriya shuru ho chuki hai. Status: prakriya shuru — antim manjoori saksham pradhikari dwara vistrit janch ke baad; vidyalay abhi sthapit/manjur nahi hua. Credit-pardarshita: article spasht likhta hai ki ye unki pahal/patra par hua; antim nirnay kendra ka hai.',
    period: '2023-2028',
  },
];

mpWorks['ahirwar-dileep'] = [
  {
    title: 'Chandla me double-lock khaad godam ka shubharambh (feeta kaatkar)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Great News, 12 Nov 2024',
    sourceUrl: 'https://www.thegreat-news.in/2024/11/12/%e0%a4%b0%e0%a4%be%e0%a4%9c%e0%a5%8d%e0%a4%af%e0%a4%ae%e0%a4%82%e0%a4%a4%e0%a5%8d%e0%a4%b0%e0%a5%80-%e0%a4%a6%e0%a4%bf%e0%a4%b2%e0%a5%80%e0%a4%aa-%e0%a4%85%e0%a4%b9%e0%a4%bf%e0%a4%b0%e0%a4%b5-2/',
    date: '2024-11-12',
    note: 'Unhone collector Parth Jaiswal ke saath Chandla me double-lock khaad godam ka feeta kaatkar shubharambh kiya; report ke mutabik ab kisanon ko DAP, urea aur NPK khaad shasan ki nirdharit daron par Chandla me hi milegi (pehle Lavkushnagar/Gadhimalhara se laate the). Status: lokarpan/shubharambh — godam operational. Credit-pardarshita: ye rajya sarkar ki pariyojna hai; unki concrete bhoomika shubharambh-karyakram me mukhya atithi ke roop me spasht hai. Note: ye van-rajya-mantri ke roop me ki gayi Chandla-constituency-specific gatividhi hai (minister-rule: sirf kshetra-specific kaam liya gaya hai).',
    period: '2023-2028',
  },
  {
    title: 'Chandla vidhansabha me kul ~15.5 km ki 2 sadkon (lagat Rs. 2.23 crore + Rs. 6.51 crore) ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'NaiDunia (epaper), 19 Apr 2026',
    sourceUrl: 'https://epaperapi.jagran.com/naiduniaEpaper/19042026/gwalior/18cht-pg16-0215733503.pdf',
    date: '2026-04-19',
    note: 'NaiDunia (Bundelkhand page, 19 Apr 2026) ke mutabik unhone Sarbai dateline ki khabar me bataya: janpad panchayat Gaurihaar ke Gauhani gram panchayat ke Veton Purwa me Rs. 2.23 crore ki lagat se lagbhag 2.30 km lambi sadak, aur Sarbai se Goyara tak Rs. 6.51 crore ki lagat se 13.20 km lambi sadak — dono ka bhoomi-pujan unhone kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Credit-pardarshita: sadke shasan/parishad ki pariyojnaen hain; unki concrete bhoomika bhoomi-pujan-karta ke roop me article me spasht hai. Note: ye van-rajya-mantri ke roop me ki gayi Chandla-constituency-specific gatividhi hai; unke Anuppur-prabhari-mantri kshetra ya kendriya van-vibhag ke kaam is list me nahi liye gaye.',
    period: '2023-2028',
  },
];

mpWorks['arvind-pateriya'] = [
  {
    title: 'Chandranagar me shasakiya prathmik swasthya kendra bhavan ka bhoomi-pujan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'First Khabar, Dec 2024 (est.)',
    sourceUrl: 'https://firstkhabar.com/mla-arvind-pateria-visited-the-area-under-the-chief-ministers-public-welfare-campaign/',
    date: '2024-12',
    note: 'Mukhyamantri Jan Kalyan Abhiyan ke dauran Chandranagar gram (police chowki ke bagal) me shasakiya prathmik swasthya kendra ke bhavan-nirman ka bhoomi-pujan unhone kiya; article me kaha gaya ki swasthya kendra ki lambe samay se chali aa rahi maang poori hone ja rahi hai. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: article me lagat "1.59.00 lakh" likhi hai — ye sankhya aspasht hai (sambhavatah Rs. 1.59 crore = 159 lakh, mudran-truti); lagat ko vahi rakha hai jo article me likha hai. Date: article ki index "668 days ago" (~Dec 2024) se est.; Jan Kalyan Abhiyan Dec 2024 me shuru hua tha.',
    period: '2023-2028',
  },
  {
    title: 'Bamnora gram me sadak nirman aur nali nirman karyon ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'First Khabar, Dec 2024 (est.)',
    sourceUrl: 'https://firstkhabar.com/mla-arvind-pateria-visited-the-area-under-the-chief-ministers-public-welfare-campaign/',
    date: '2024-12',
    note: 'Usi Mukhyamantri Jan Kalyan Abhiyan pravas me Bamnora gram me sadak nirman aur nali nirman ke liye bhoomi-pujan unhone kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Date: wahi article, Dec 2024 (est.).',
    period: '2023-2028',
  },
  {
    title: 'Rajnagar vidhansabha me 28 crore se adhik lagat ki 8 sadak pariyojnaon ka teen-divasiya daure me bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, late 2025 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/chhatarpur/khajuraho/news/bhumipujan-of-roads-worth-rs-28-crore-in-rajnagar-136298465.html',
    date: '2025-11',
    note: 'Bhaskar ke mutabik vidhayak ne apne teen-divasiya daure me Rs. 28 crore se adhik lagat wali sadak pariyojnaon ka bhoomi-pujan kiya; pramukh marg: Vikrampur se Station Purwa (Rs. 3.76 crore), Chowar gram se Jamunia (Rs. 4.50 crore), Rangoli Pi gram se Parba Purwa (Rs. 5 lakh — article me yahi sankhya), Sanjaynagar se Jhinna (Rs. 1.70 crore), Rampur se Rekha gram (Rs. 4.50 crore), Bhera se Talgaon (Rs. 5.62 crore), Nandgram se Pachloran Purwa (Rs. 3.61 crore), Bamnora gram se Mau Masania (Rs. 5 crore). Bhaskar ke mutabik in sadkon se 15-20 hazar graminon ko aavagaman ki suvidha milegi. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: date Bhaskar ke "9 mahine pehle" aur search-index timing (~Nov 2025) ke aadhar par est. hai. Note: isi daure ka Jamunia-focused alag Bhaskar lekh double-counting se bachne ke liye reject-list me rakha hai.',
    period: '2023-2028',
  },
];

// REJECT-LOG (researched 2026-10-14):
// KEPT: kamakhya-pratap-singh-teeka-raja = 1; ahirwar-dileep = 2; arvind-pateriya = 3.
// REJECTED — Kamakhya Pratap Singh (Teeka Raja):
// - navbharattimes: 15 Aug 2026 ko graminon ka 40 km paidal march, ratri 1:30 baje vidhayak se baatchit — sirf "3-4 din me tender prakriya" ka aashwasan; aashwasan kaam nahi (rule: sirf maang/aashwasan nahi).
// - patrika.com: Maharajpur CHC / Naugaon-Bijawar civil hospital nirman vilamb — MLA ka naam article me nahi; weak attribution.
// - YouTube-only: Naugaon civil hospital feeta-kaat shubharambh (Bharat Samvad/CM News clips), Raja Yadavendra Singh stadium vriksharopan, Harpalpur vikas karyakram — YouTube-only sources bilkul nahi.
// - public.app-only: Harpalpur nagar palika samiksha baithak (nal-jal nirdesh) — public.app-only sources bilkul nahi.
// REJECTED — Ahirwar Dileep (Chandla, van-rajya-mantri):
// - dailypioneer (PTI): Basrahi (Chandla) me school ke chhatron ne kafila roka — sadak+biji ki maang par sirf "road construction will start soon" ka aashwasan; aashwasan kaam nahi. (Constituency-specific tha phir bhi reject.)
// - Free Press Journal / ETV Bharat: kafile ki gaadi ne e-rickshaw ko takkar (Oct 2025) — kafile ke vahan ki durghatna; MLA par seedha aarop nahi, police gaadi ki talash me — guilt-by-association negative, tangential; reject.
// - Free Press Journal: kisan ke khet ki aag bujhane me madad — vyaktigat kshan, kaam (work) nahi.
// - voiceofmp.com: mahilaon ka "sadak nahi" virodh (~Jan 2024) — user-submitted portal, kamzor source; negative ke liye credible editorial reporting chahiye thi; reject.
// - trikaldarshitagat.com "real nayak" promotional piece — prashansa-lekh, koi concrete sourced kaam nahi; reject.
// - YouTube-only: viklang shivir (Chandla), khet me aag video, aabhaar yatra, Amarkantak/Pushparajgarh bhooth baithak (Anuppur prabhari kshetra — constituency-specific bhi nahi).
// REJECTED — Arvind Pateriya (Rajnagar):
// - Bhaskar ka Jamunia 2.5 km sadak (Rs. 4 crore) lekh — upar wale 28-crore teen-divasiya daure ka hi hissa (Jamunia+Vikrampur dono list me); double-counting se bachne ke liye alag entry nahi.
// - lalluram.com / Punjab Kesari: Seva Setu shivir me adhikariyon ko fatkaar — ghatna (event), kaam nahi.
// - voiceofmp.com: Mukhyamantri Jan Vishwas Abhiyan shivir ka shubharambh — shivir udghatan ghatna hai, vikas-kaam nahi.
// - public.app: gram Pahadi me Rs. 37.50 lakh panchayat bhavan bhoomi-pujan — public.app-only source bilkul nahi.
// - YouTube-only: Namo talab marammat daava, Lavkushnagar jila maang, vikas karyon ka avalokan, mela aagman, janmadin — YouTube-only sources bilkul nahi.
// Chhatarpur batch 2 — Lalita Yadav, Bablu Rajesh Shukla (researched 2026-10-14; bahin-ramsiya-bharti defensible empty) — DO NOT export; appended to works_mp.ts
// Chhatarpur district batch 2 (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
// MLAs: lalita-yadav (Chhatarpur, BJP), bablu-rajesh-shukla (Bijawar, BJP), bahin-ramsiya-bharti (Malhara, INC)
mpWorks['lalita-yadav'] = [
  {
    title: 'Gram Pathapur me Rs. 54.11 lakh ke vikas karyon ka bhoomi-pujan aur lokarpan — vidhayak vishesh nidhi se',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Navabharat, 22 Dec 2025',
    sourceUrl: 'https://navabharat.com/?p=364197',
    date: '2025-12-22',
    note: 'Navabharat ke mutabik Pathapur me kul Rs. 54.11 lakh ke vikas karya unke prayason se swikrit hue; unki upasthiti me bhoomi-pujan aur lokarpan hua. Karye: vidhayak vishesh nidhi se parishad mohalla ke paas Rs. 25 lakh ka Manglik Bhavan nirman (bhoomi-pujan), gaon me nali nirman, school parisar evam Gaud basti se gram ki or CC road, shaskiya school parisar me boundary wall, aur bade Badka Hanuman mandir parisar sahit chabutra/baithak nirman ka lokarpan. Status: bhoomi-pujan + lokarpan (mishrit — kuch karya poorn, kuch nirmaanadheen).',
    period: '2023-2028',
  },
  {
    title: 'Gram Nandagay Kalan me Rs. 1.47 crore ke adhunik high school bhavan (720 sqm) ka bhoomi-pujan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Tarun Mitra, 16 Mar 2024',
    sourceUrl: 'https://www.tarunmitra.in/state/madhya-pradesh/high-school-building-will-be-built-in-nandagay-kalan-with/article-29719',
    date: '2024-03-16',
    note: 'Tarun Mitra ke mutabik unhone Chhatarpur vidhansabha ke gram Nandagay Kalan me ek crore 47 lakh ki lagat se 720 varg meter me banne wale adhunik high school bhavan ka bhoomi-pujan kiya. Bhavan me pracharya kaksh, staff room, library, art & craft room, science lab, chhatr-chhatraon ke alag-alag shauchalay aur computer shiksha ki vyavastha hogi; unke anusaar 9 mahine me bhavan taiyar hoga. Nirman agency PIU. Status: bhoomi-pujan — nirman karyanwayan/purnata ki alag khabar nahi mili. Caveat: article me school ki swikriti me unke prayas/anushansa ka explicit ullekh nahi hai — entry unke dwara bhoomi-pujan ke aadhar par hai. Note: article ki body me gaon ka naam Nadgaein Kala bhi darj hai (headline me Nandgae Kalan).',
    period: '2023-2028',
  },
  {
    title: 'Kunjan mandir (bypass road) tak Rs. 21.29 lakh ke damar sadak ki swikriti aur bhoomi-pujan — unki chunavi ghoshna par',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Tarun Mitra, 16 Mar 2024',
    sourceUrl: 'https://www.tarunmitra.in/state/madhya-pradesh/high-school-building-will-be-built-in-nandagay-kalan-with/article-29719',
    date: '2024-03-16',
    note: 'Tarun Mitra ke mutabik vidhansabha chunav prachar ke dauran unhone Kunjan mandir tak pahunch sugam banane ka vada kiya tha; jeetne ke baad unhone Rs. 21 lakh 29 hazar ki damar sadak swikrit karayi aur swayam uska bhoomi-pujan kar nirman karya ki shuruaat ki. Nirman agency: Nagar Palika; ek varsh me poornata ka lakshya bataya gaya. Status: bhoomi-pujan — purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
];
mpWorks['bablu-rajesh-shukla'] = [
  {
    title: 'Bijawar me Rs. 11.34 crore ke 50-bistar civil aspatal ke karya ka bhoomi-pujan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'LiveVNS (Hindustan Samachar wire), 6 Mar 2024',
    sourceUrl: 'https://livevns.news/state/madhyapradesh/%E0%A4%9B%E0%A4%A4%E0%A4%B0%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B0%E0%A4%BE%E0%A4%A4-%E0%A4%AD%E0%A4%B0-%E0%A4%9A%E0%A4%B2%E0%A4%BE-%E0%A4%B6%E0%A4%BE%E0%A4%AF%E0%A4%B0%E0%A5%80-%E0%A4%95%E0%A4%BE-%E0%A4%A6%E0%A5%8C%E0%A4%B0-%E0%A4%B6%E0%A4%BE%E0%A4%AF%E0%A4%B0%E0%A5%8B%E0%A4%82-%E0%A4%A8%E0%A5%87-%E0%A4%B2%E0%A5%82%E0%A4%9F%E0%A5%80-%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%A4%E0%A4%BE%E0%A4%93%E0%A4%82-%E0%A4%95%E0%A5%80/cid13754207.htm',
    date: '2024-03-06',
    note: 'LiveVNS ke mutabik Bijawar vidhayak Rajesh Shukla (Bablu) ne jansamanya ki maujoodgi me vedik vidhi-vidhan se naveen 50-bistar civil aspatal ki aadharshila rakhkar karya ka bhoomi-pujan kiya. Aspatal Rs. 11.34 crore ki lagat se adhunik suvidhaon se lais taiyar hoga; unka bayan ki ab Bijawar kshetra ke logon ko Chhatarpur nahi jana padega. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: article me aspatal ki swikriti me unke prayas/anushansa ka explicit ullekh nahi hai — entry unke dwara bhoomi-pujan ke aadhar par hai. Note: ye khabar Hindustan Samachar ((Hi.Sa.)) wire ki hai, jo LiveVNS par republish hui.',
    period: '2023-2028',
  },
  {
    title: 'Devra me Rs. 3 crore ke vidyut sub-station ka lokarpan (kendra ki RDSS yojana) — lagbhag dedh darjan gaon labhanvit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'LiveVNS (Hindustan Samachar wire), 6 Mar 2024',
    sourceUrl: 'https://livevns.news/state/madhyapradesh/%E0%A4%9B%E0%A4%A4%E0%A4%B0%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B0%E0%A4%BE%E0%A4%A4-%E0%A4%AD%E0%A4%B0-%E0%A4%9A%E0%A4%B2%E0%A4%BE-%E0%A4%B6%E0%A4%BE%E0%A4%AF%E0%A4%B0%E0%A5%80-%E0%A4%95%E0%A4%BE-%E0%A4%A6%E0%A5%8C%E0%A4%B0-%E0%A4%B6%E0%A4%BE%E0%A4%AF%E0%A4%B0%E0%A5%80-%E0%A4%95%E0%A4%BE-%E0%A4%A6%E0%A5%8C%E0%A4%B0-%E0%A4%B6%E0%A4%BE%E0%A4%AF%E0%A4%B0%E0%A5%8B%E0%A4%82-%E0%A4%A8%E0%A5%87-%E0%A4%B2%E0%A5%82%E0%A4%9F%E0%A5%80-%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%A4%E0%A4%BE%E0%A4%93%E0%A4%82-%E0%A4%95%E0%A5%80/cid13754207.htm',
    date: '2024-03-06',
    note: 'Usi LiveVNS report ke mutabik unhone vidhansabha kshetra ke Devra me Rs. 3 crore ki lagat se taiyar vidyut sub-station ka lokarpan kiya. Sub-station kendra sarkar ki RDSS vidyutikaran yojana ke tahat bana hai (kshamta 5000 kW, 4 feeder — Devra gharelu/krishi, Motigarh gharelu/krishi); isse lagbhag dedh darjan gaon (Motigarh, Amrauniya, Majhguvan, Kupiya, Devra, Tapariyan, Lahar, Patra, Dharampura, Udaypura aadi) — lagbhag 4000 gharelu aur 1500 krishi upbhokta — labhanvit honge. Status: lokarpan (poorn). Credit-pardarshita: nirman kendra sarkar ki RDSS yojana ke tahat hua; unki bhoomika lokarpan/karyakram tak seemit hai — note me darj.',
    period: '2023-2028',
  },
];
// bahin-ramsiya-bharti: koi entry nahi — Dec 2023 se tenure me koi news/sarkari-verified kaam nahi mila. Unki news coverage mukhya roop se political/viral videos tak seemit hai (Bamnora–Hirapur sadak patchwork ka nirikshan, jan-kalyan karyakram me sarkar ki aalochana ka viral video, Bharat Vikas Yatra me maujoodgi) — inme se koi bhi vikas-karya nahi banta. Weak attribution se profile bharne se behtar khaali rakhna hai; vipakshi MLA hone ke kaaran vidhayak-nidhi karyon ki khabar bhi uplabdh nahi mili.
// REJECT-LOG (2026-10-14 research):
// lalita-yadav rejects (9):
// - public.app: Dhadari gaon Rs. 55 lakh bhoomi-pujan (23 Dec 2025) — REJECT: public.app-only source allowed nahi.
// - public.app: Bandhikala Rs. 1.11 crore bhoomi-pujan/lokarpan (29 Dec 2025) — REJECT: public.app-only.
// - public.app: Gangayach gaon Rs. 1 crore+ saugat (10 Dec 2025) — REJECT: public.app-only.
// - YouTube: "7 crore se Chhatarpur ki sadakon ki marammat" ka unka daava — REJECT: YouTube-only source.
// - YouTube: gram Dehri ke liye Pathapur main road se Banarsi Sarkar mandir tak Rs. 19.75 lakh sudur sadak bhoomi-pujan (11 Apr 2025) — REJECT: YouTube-only.
// - YouTube: medical college nirmaan-sthal ka nirikshan — REJECT: YouTube-only + sirf nirikshan, kaam nahi.
// - Amar Ujala, 29 Aug 2025: Rs. 2.2 crore ka Shri Krishna Dham — REJECT: CM Mohan Yadav ki ghoshna/pariyojna; unhone sirf media ko jankari di — concrete bhoomika nahi (weak attribution).
// - Patrika: Nagar Palika budget Rs. 564 crore, har ward ko Rs. 25 lakh, 4 nayi paani tankiyan — REJECT: Nagar Palika parishad ka nirnay; baithak me unki maujoodgi concrete bhoomika nahi (weak attribution).
// - FreePressJournal aadi: baadh-prabhavit ilakon ka daura/rahat nirdesh (Jul 2025) — REJECT: rahat-daura/nirikshan hai, vikas-karya nahi.
// bablu-rajesh-shukla rejects (5):
// - mptezkhabar: jan-sanvad yatra me kul Rs. 43 lakh ki ghoshnaen + Mahuajhala–Alpur 15.99 lakh sadak bhoomi-pujan + Kishangarh–Nagda 1.51 crore sadak bhoomi-pujan — REJECT: tenure se pehle ki khabar (2022-era), tenure rule.
// - Amar Ujala, 15 Jul 2025: Bijawar me Shivraj Singh Chauhan dwara rope gaye paudhe 3 mahine me sukhe — REJECT: woh kendriya mantri ke karyakram me sirf maujood the (weak attribution).
// - Amar Ujata, 19 Dec 2024: CM Mohan Yadav dwara Satai me Rs. 162 crore ke karyon ka lokarpan/bhoomi-pujan — REJECT: CM ka karyakram; unhone sirf swagat kiya (weak attribution).
// - Zee News: SP se nishkasan (Rajya Sabha vote, 2020-era) — REJECT: purani political khabar, kaam nahi.
// - YouTube (Bundelkhand 24x7): Ken-Betwa visthapiton se mulakat — REJECT: YouTube-only + mulakat hai, vikas-karya nahi.
// bahin-ramsiya-bharti rejects (5):
// - bhaskarenglish.in: Bamnora–Hirapur sadak patchwork ka aakasmik nirikshan — REJECT: sirf nirikshan/aalochana, kaam nahi.
// - inhnews.in: collector ke rokne par bhi sarkari yojanaon ki pol kholne wala viral video — REJECT: political event, vikas-karya nahi.
// - Punjab Kesari: Viksit Bharat Sankalp Yatra me maujoodgi — REJECT: sarkari karyakram me maujoodgi matra (weak attribution).
// - YouTube/Bundeli Bauchaar: "tevar/aaina" wale videos — REJECT: YouTube-only.
// - indialeader.com: "initiated several development projects" jaise generic daave — REJECT: vague, koi verifiable specifics nahi; page me factual errors bhi hain.

// ---- Chhindwara district batch (researched 2026-10-14) ----

mpWorks['sunil-uikey'] = [
  {
    title: 'Parasia me vidhayak ke shopping complex ka 726 sq ft atikraman nagar palika ne dhwast kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Patrika, Sep 2025',
    sourceUrl: 'https://www.patrika.com/chhindwara-news/demolition-of-junnardeo-mla-sunil-uikey-shopping-complex-he-alleged-bjp-mp-news-19934915',
    date: '2025-09',
    note: 'Patrika ke mutabik Dongar Parasia nagar palika ne vidhayak Sunil Uikey ke Parasia-sthit shopping complex ke pichhe naale ke paas lagbhag 726 sq ft bhoomi par atikraman mankar pakka nirman (toilet/bathroom/store room) dhwast kar diya; nagar palika adhyaksh Vinod Malvi ki shikayat par CMO ne notice dekar 3 din ka ultimatum diya tha. Uikey ka khandan: nirman ki anumati thi, aur unhone kisan andolan me sansad Vivek Bunty Sahu ke khilaf awaz uthayi thi isliye rajnaitik badle ki karrawai hai. Status: prashasanik karrawai (dhwast) — vidhayak ka pratikhandan bhi darj hai; koi adlati faisla ki khabar nahi mili. Negative entry — karya nahi, lekin vyakti se juda credible-reported ghatna hai.',
    period: '2023-2028',
  },
];

mpWorks['kamlesh-pratap-shah'] = [
  {
    title: 'Amarwara me 17.62 crore ke 4 shala bhavan aur 2 senior girls hostel ke nirman ki ghoshna',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Satpura Express, 7 Aug 2025',
    sourceUrl: 'https://satpudaexpress.com/?p=19479',
    date: '2025-08-07',
    note: 'Satpura Express ke mutabik vidhayak Kamlesh Pratap Shah ne vidhansabha satra ke dauran CM Dr. Mohan Yadav se milkar Amarwara kshetra me schoolon/chhatravason ke nirman ki maang rakhi thi; outlet ke mutabik shasan ne maang swikar kar Rs. 17.62 crore ki swikriti ki ghoshna ki: shaskiya kanya HSS Amarwara (Rs. 2.18 cr), shaskiya HSS Paunar (Rs. 2.18 cr), shaskiya high school gram Hirri (Rs. 2.18 cr), shaskiya HSS Khireti (Rs. 2.18 cr), senior girls hostel Partapur (Rs. 4.44 cr) aur senior girls hostel Gourpani (Rs. 4.44 cr). Status: GHOSHNA — khabar me koi sanction order number ya sarkari GO ka ullekh nahi hai, isliye ise dastavezi swikriti ke roop me darj nahi kiya gaya; nirman karya shuru/lokarpan ki alag khabar bhi nahi mili. Caveat: shreya outlet vidhayak ki maang ko deta hai (vidhayak ne CM/siksha mantri ko dhanyavad diya hai).',
    period: '2023-2028',
  },
  {
    title: 'Singodi-Khireti 28.30 km marg (Rs. 78.76 crore) ke unnayan ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Atulya Bharat Chetna, 20 Sep 2026',
    sourceUrl: 'https://atulyabharatchetna.org.in/archives/179315',
    date: '2026-09-20',
    note: 'Outlet ke mutabik Singodi-Hivarkhedi-Manegaon-Pipariya Gumani-Aklama-Khurshipar-Khireti marg ke unnayan (single se double lane, 28.30 km, lagat Rs. 78.76 crore se adhik) ka bhoomi-pujan gram panchayat Khakarachaurai me PWD mantri aur jile ke prabhari mantri Rakesh Singh ne kiya; vidhayak Kamlesh Pratap Shah karyakram me maujood rahe aur outlet unki "pehal"/anushansa ko swikriti ka shreya deta hai. Poornata ka lakshya Oct 2027. Status: bhoomi-pujan (mantri dwara) — nirman purnata ki khabar nahi. Pardarshita note: ye rajya sarkar (PWD) ki pariyojna hai; vidhayak ki bhoomika maang/anushansa aur upasthiti tak simit rahi, seedha bhoomi-pujan unhone nahi kiya.',
    period: '2023-2028',
  },
];

mpWorks['choudhary-sujeet-mersingh'] = [
  {
    title: 'Loni kala-Kanaka Dham sadak (Rs. 7 lakh vidhayak-nidhi) ka bhoomi-pujan; Kanaka Dham me shed-saundaryikaran ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'KBP News, Apr 2025',
    sourceUrl: 'https://kbpnews.in/?p=5160',
    date: '2025-04',
    note: 'KBP News ke mutabik Chourai vidhayak Sujeet Choudhary ne Loni kala sthit Kanaka Dham me (251-kundiya Sita Ram mahayagya ke sandarbh me) mukhya marg se mandir pahunch marg ki sadak ka bhoomi-pujan kiya — ye sadak vidhayak-nidhi se Rs. 7 lakh ki rashi se banegi — aur mandir me shade evam saundaryikaran karya ka lokarpan kiya. Status: sadak — bhoomi-pujan; shed/saundaryikaran — lokarpan (poorna). Caveat: tithi image metadata (Apr 2025) se li gayi hai.',
    period: '2023-2028',
  },
];

mpWorks['vijay-revnath-chore'] = [
  {
    title: 'Swechchanudan me 17.5 lakh ki gadbadi ka aarop — BJP ka RTI-adhara par press conference',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Bhaskar Hindi, 21 Sep 2025',
    sourceUrl: 'https://www.bhaskarhindi.com/city/chhindwara/saunsar-mla-choure-gave-rs-175-lakh-as-voluntary-grant-to-his-personal-assistant-and-his-family-1189447',
    date: '2025-09-21',
    note: 'Bhaskar Hindi ke mutabik Pandhurna/Chhindwara BJP ne Sausar karyalay me patrakar varta karke vidhayak Vijay Revnath Chore par aarop lagaya ki unhone 11 Apr 2023 se 6 Mar 2025 ke beech apni anushansa par nij sahayak Chandrashekhar Ganorkar, unki patni Neelima Ganorkar aur bhai Anil Ganorkar sahit parivar ke khaaton me naam badal-badalkar kul Rs. 17.50 lakh ki swechchanudan rashi aavantit karayi (BJP neta Sandeep Mohod ne kul ghotala lagbhag Rs. 20 lakh bataya; RTI-karyakarta Munna Kalam ke dastavezon ka hawala). BJP ne janch agencies se janch aur High Court jane ki chetawani di. Status: AAROP — patrakar varta ka daava; vidhayak ka khandan/paksh khabar me shamil nahi; koi FIR, janch ya adlati karrawai ki khabar nahi mili. Negative entry — credible reporting, allegation status explicit.',
    period: '2023-2028',
  },
];

// kamal-nath (Chhindwara, INC): RE-VERIFY (2026-10-14) par profile defensibly EMPTY rakha hai.
// Nov 2024 ke vidhayak-nidhi wale 3 daave (Rs.85L/41 karya — Dainik Yashonnati; Rs.50L/33 karya aur Rs.80L/52 karya — Satpuda Express)
// dono lekh kholkar padhe gaye: dono press-note style ki ghoshna-khabrein hain — koi sanction order number, work-order ya GO reference nahi;
// sakht niyam (press-release se aage ka saboot lazmi) par teeno entries HATA di gayin. Note: ye daave vidhayak-nidhi (MLA fund) ke the,
// sansad-nidhi (MP fund) ke nahi — lekin saboot ki kasauti par pure na utarne se entry nahi rakhi gayi.

mpWorks['sohanlal-balmik'] = [
  {
    title: 'Parasia civil aspataal me three-phase bijli connection ke liye Rs. 2 lakh vidhayak-nidhi swikrit',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Naidunia, 19 Oct 2025',
    sourceUrl: 'https://www.naidunia.com/madhya-pradesh/bhopal-chhindwaras-parasia-hospital-lacks-basic-facilities-amidst-cough-syrup-tragedy-8410392',
    date: '2025-10-19',
    note: 'Naidunia ke mutabik Parasia civil aspataal me three-phase bijli connection na hone se kharidi hui X-ray machine ek saal se dibbe me band padi thi (sonography machine bhi radiologist na hone se band). Iske baad Parasia vidhayak Sohanlal Balmik ne Rs. 2 lakh vidhayak-nidhi se swikrit kiye; connection lene ki prakriya prarambh honi thi. Status: swikriti — connection/karyanvayan ki alag khabar nahi mili; article swayam sandigdh hai ki machine kab chalegi. Prasang: Coldrif kaf-sirup se 15 bachchon ki maut ke baad aspataal ki badhali ujagar hui thi — ye swikriti usi sandarbh me aayi.',
    period: '2023-2028',
  },
  {
    title: 'Chhath puja ke liye Pench nadi ka gate kholne ki maang par chakka-jam — vidhayak sahit 40 par FIR',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala, 11 Nov 2024',
    sourceUrl: 'https://www.amarujala.com/madhya-pradesh/chhindwara/parasia-mla-approaches-sp-sp-expresses-displeasure-over-fir-in-chhath-puja-protest-says-it-is-wrong-to-block-road-chhindwara-news-c-1-1-noi1218-2304520-2024-11-11',
    date: '2024-11-11',
    note: 'Amar Ujala ke mutabik 6 Nov 2024 ko Chhath puja ke liye Newton (Parasia) me Pench nadi ka bandh-gate kholne ki maang par vidhayak Sohanlal Balmik ke netritva me Congress karyakartao ne mukhya marg par chakka-jam kiya (lagbhag ek ghante yatayat badhit); Parasia police ne vidhayak sahit 40 logon par BNS ki dhara 126-2 (sarvajanik sthan par yatayat avruddh karna) aur 189-2 (gairkanuni jamawda) me prakaran darj kiya. Baad me vidhayak SP karyalaya pahunche aur karwayi ko anavashyak bataya. Status: FIR darj — iske aage case ki sthiti ki koi khabar nahi mili. Caveat: ye vikas-karya nahi, virodh-pradarshan se juda case hai — negative entry ke roop me darj.',
    period: '2023-2028',
  },
];

mpWorks['neelesh-pusaram-uikey'] = [
  {
    title: 'Gram panchayat Gujarkhedi me Bhagwan Birsa Munda pratima sthal par rangmanch nirman ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Satyarath, 2 Jan 2026',
    sourceUrl: 'https://satyarath.com/news/180730',
    date: '2026-01-02',
    note: 'Satyarath ke mutabik Pandhurna vidhayak Neelesh Uikey ki pehal par gram panchayat Gujarkhedi me Bhagwan Birsa Munda ki pratima sthal par rangmanch nirman karya ka bhoomi-pujan 2 Jan 2026 ko sampann hua; karyakram me jila Congress adhyaksh Jatan Uikey, janpad adhyaksh Lata Tumdam, sarpanch Sangeeta Dhurve sahit janpratinidhi maujood the. Status: bhoomi-pujan — nirman karyanvayan/purnata ki alag khabar nahi mili. Caveat: article me karya ki lagat darj nahi hai.',
    period: '2023-2028',
  },
];

// ---- Damoh district batch (researched 2026-10-14) ----
// Damoh batch — lakhan-patel (Pathariya AC-54), jayant-malaiya (Damoh AC-55),
// dharmendra-bhav-singh-lodhi (Jabera AC-56), umadevi-lalchand-khatik (Hatta SC AC-57).
// DO NOT export; appended to works_mp.ts

mpWorks['lakhan-patel'] = [
  {
    title: 'Bakaini (Pathariya) me Rs 354.50 lakh ki lagat se bana 33/11 kV (5 MVA) vidyut upkendra ka lokarpan — RDSS yojna',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sahara Samachaar, 22 Nov 2025',
    sourceUrl: 'https://saharasamachaar.com/new-strength-to-power-system-in-patharia-cabinet-minister-lakhan-patel/',
    date: '2025-11-22',
    note: 'Article ke mutabik unhone Pathariya vidhansabha ke gram Bakaini me RDSS yojna ke tahat Rs. 354.50 lakh ki lagat se bane 33/11 kV (5 MVA) vidyut upkendra ka lokarpan kiya; isse 21 gaon ko sthir bijli aapurti ka labh milne ka daava (voltage samasya aur bijli katauti se rahat). Status: lokarpan — upkendra chalu. Credit-pardarshita: ye rajya bijli vibhag (RDSS) ki pariyojna hai; unki concrete bhoomika lokarpan-karta ke roop me article me spasht hai (Damoh sansad Rahul Singh Lodhi, jila panchayat adhyaksh aadi karyakram me maujud the). Note: ye pashupalan-mantri (MoS, swatantra prabhar) ke roop me ki gayi Pathariya-kshetra-specific gatividhi hai; unke vibhag ke rajya-stariya faisle is list me nahi liye gaye.',
    period: '2023-2028',
  },
];

mpWorks['jayant-malaiya'] = [
  {
    title: 'Kankali Mata mandir aur Jata Shankar muktidham me Rs 44 lakh se adhik ke nirman karyon ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Atal News 24, 26 Sep 2025',
    sourceUrl: 'https://www.atalnews24.com/2025/09/44.html',
    date: '2025-09-26',
    note: 'Unhone Bajaria 05 sthit Kankali Mata mandir me Rs. 24 lakh ki lagat se boundary wall/shed aadi, aur Jata Shankar sthit muktidham me Rs. 20.04 lakh ki lagat se boundary wall, shed, guard room aadi ke nirman ka bhoomi-pujan kiya; CMO ke mutabik ye CM Monitor Yojna ke tahat hain. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Credit-pardarshita: ye nagar-palika/shasan ki pariyojnaen hain; unki bhoomika bhoomi-pujan-karta ke roop me spasht. Note: usi article me Jata Shankar–Dharampura ring road ke gaddhon ki samasya bhi uthayi gayi hai — ye nagar-palika ke jimme ka mudda hai, unpar vyaktigat aarop nahi hai; santulit jaankari ke liye ullekh kiya gaya hai.',
    period: '2023-2028',
  },
  {
    title: 'Gram Datla me Rs 10 lakh ki lagat se bane samudayik bhavan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Jan Jagran 24, 21 Mar 2026',
    sourceUrl: 'http://www.janjagran24.com/2026/03/blog-post_21.html',
    date: '2026-03-21',
    note: 'Article ke mutabik unhone gram Datla me Rs. 10 lakh ki lagat se nirmit samudayik bhavan ka lokarpan kiya. Status: lokarpan.',
    period: '2023-2028',
  },
  {
    title: 'Gram Semra Madia me shed ke neeche CC nirman karya ka shubharambh/lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Jan Jagran 24, 21 Mar 2026',
    sourceUrl: 'http://www.janjagran24.com/2026/03/blog-post_21.html',
    date: '2026-03-21',
    note: 'Article ke mutabik unhone gram Semra Madia me shed ke neeche CC (concrete) nirman karya ka shubharambh/lokarpan kiya. Status: shubharambh/lokarpan.',
    period: '2023-2028',
  },
  {
    title: 'Gram Abhana me Rs 25 lakh ki lagat se bane samudayik bhavan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Jan Jagran 24, 21 Mar 2026',
    sourceUrl: 'http://www.janjagran24.com/2026/03/blog-post_21.html',
    date: '2026-03-21',
    note: 'Article ke mutabik unhone gram Abhana me Rs. 25 lakh ki lagat se bane samudayik bhavan ka lokarpan kar graminon ko samarpit kiya. Status: lokarpan.',
    period: '2023-2028',
  },
  {
    title: 'Damoh Medical College ke PPP-sanchalan ka virodh — CM se mulakat; sarkar ne PPP se inkar ka elan kiya',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'IANS (Lokmat Times), 24 Sep 2026',
    sourceUrl: 'https://www.lokmattimes.com/national/mp-govt-rules-out-ppp-model-for-state-medical-colleges-amid-damoh-row/',
    date: '2026-09-24',
    note: 'Unhone CM Mohan Yadav se milkar maang rakhi ki lagbhag Rs. 350 crore sarkari kharch se ban rahe Damoh Medical College ka sanchalan sarkar khud kare, ise niji haathon (PPP) me na diya jaye — unka tark tha ki janta par adhik fees/mahange ilaaj ka bojh padega. Iske baad Deputy CM Rajendra Shukla ne bayan diya ki rajya-nidhi se bane/ban rahe medical college PPP me nahi diye jayenge, sarkar hi sanchalan karegi. Status: maang sweekrit (sarkari elan) — college ka nirman unka kaam nahi hai, ye rajya sarkar ki pariyojna hai; yahan sirf unki pahal aur uska parinam darj hai, nirman/sanchalan ka shrey unhe nahi diya ja raha. Sirf Dec 2023+ ke karyakaal ki ghatna hai.',
    period: '2023-2028',
  },
  {
    title: 'Press conference me Damoh vidhansabha ke karya-account ka dawa (2024-25 aur 2025-26 ka hisaab)',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Atal News 24, 27 Aug 2026',
    sourceUrl: 'https://www.atalnews24.com/2026/08/blog-post_27.html',
    date: '2026-08-27',
    note: 'DISCLOSURE: ye vidhayak ka swayam-daava hai jo press conference me news me report hua — aankde unke diye gaye hain, swatantra roop se satyapit nahi hain (badge: dawa). Article ke mutabik unhone daava kiya: nagariya kshetra me CM adhossanrachna mad se 2024-25 me 22 karyon par Rs. 4.76 crore aur 2025-26 me 26 karyon par Rs. 4.99 crore kharch; grameen me 109 karyon par Rs. 12.74 crore; vidhayak-nidhi (MLA fund — ye vidhayak-nidhi hai, sansad-nidhi/MP fund nahi) se nagariya me 129 karyon par Rs. 2.76 crore aur grameen me 159 karyon par Rs. 3.09 crore; kul 75 sadken swikrit; 50-bistar critical care health block ka lokarpan; 46 aanganbadi bhavan swikrit (Rs. 5.15 crore); Amrit 2.0 me 3 talabon ka saundaryikaran; 24-ghante peyjal ke liye second rising line aur sewer line yojna. Status: daava — swatantra verification ke bina vikas-karya ke roop me nahi gina gaya.',
    period: '2023-2028',
  },
];

mpWorks['dharmendra-bhav-singh-lodhi'] = [
  {
    title: 'Sunwaha (Jabera block) me Rs 314 lakh ki pakki sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Pi Newz, 18 Nov 2025',
    sourceUrl: 'https://pinewz.com/hindi/video/madhya-pradesh/damoh-paved-road-inaugurated-in-sunwaha-development-path-worth-314-lakh-1763428785059',
    date: '2025-11-18',
    note: 'Unhone Jabera block ke Sunwaha me Rs. 314 lakh ki lagat se banne wali pakki sadak ka bhoomi-pujan kiya; ilaka barish me daldal-ban jata tha aur lambe samay se sadak ki maang thi. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Credit-pardarshita: shasan ki pariyojna; unki bhoomika bhoomi-pujan-karta ke roop me spasht. Note: ye sanskriti-paryatan mantri ke roop me ki gayi Jabera-kshetra-specific gatividhi hai; unke vibhag ke rajya-stariya faisle is list me nahi liye gaye. Disclosure: Pi Newz chhota local portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Gram Lamtra (Gubarakalan) me Mangal Bhavan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Atal News 24, 10 Jan 2025',
    sourceUrl: 'https://www.atalnews24.com/2025/01/blog-post_10.html',
    date: '2025-01-10',
    note: 'Janpad Jabera ki gram panchayat Gubarakalan ke gram Lamtra me bane Mangal Bhavan ka unhone lokarpan kiya. Caveat: article me lagat "20 laagat rupaye" likhi hai — sankhya aspasht hai (sambhavatah Rs. 20 lakh), isliye lagat ko vahi rakha hai jo article me likha hai. Status: lokarpan. Note: mantri-rule disclosure — ye Jabera-kshetra-specific gatividhi hai; sanskriti-paryatan vibhag ke rajya-stariya faisle is list me nahi liye gaye.',
    period: '2023-2028',
  },
  {
    title: 'Gram Ramsalaiya me Rs 37.49 lakh ke Atal Gram Sushasan Bhavan ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Atal News 24, 10 Jan 2025',
    sourceUrl: 'https://www.atalnews24.com/2025/01/blog-post_10.html',
    date: '2025-01-10',
    note: 'Unhone gram Ramsalaiya me Rs. 37.49 lakh ki lagat se banne wale Atal Gram Sushasan Bhavan ka bhoomi-pujan kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Note: mantri-rule disclosure jaise upar.',
    period: '2023-2028',
  },
  {
    title: 'Pauri Mangarh me saptahik haat bazaar ka shubharambh',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Atal News 24, 10 Jan 2025',
    sourceUrl: 'https://www.atalnews24.com/2025/01/blog-post_10.html',
    date: '2025-01-10',
    note: 'Gram Kodakala ke karyakram ke dauran unhone Pauri Mangarh me saptahik haat bazaar ka shubharambh kiya. Status: shubharambh. Note: mantri-rule disclosure jaise upar.',
    period: '2023-2028',
  },
  {
    title: 'Gram Patloni (Tejgarh mandal) me Rs 17.04 lakh ke naveen talab ka lokarpan',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Jan Jagran 24, 21 Mar 2026',
    sourceUrl: 'http://www.janjagran24.com/2026/03/blog-post_21.html',
    date: '2026-03-21',
    note: 'Mandal Tejgarh ke gram Patloni me Rs. 17.04 lakh ki lagat se bane naveen talab ka unhone (Damoh sansad Rahul Singh aur jiladhyaksh ke saath) lokarpan kiya; sinchai aur jal-sanrakshan ka labh bataya gaya. Status: lokarpan. Credit-pardarshita: shasan ki pariyojna; unki bhoomika lokarpan-karta ke roop me spasht. Note: mantri-rule disclosure jaise upar.',
    period: '2023-2028',
  },
  {
    title: 'Tejgarh se tehsil marg tak Rs 6 lakh ki CC sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Jan Jagran 24, 21 Mar 2026',
    sourceUrl: 'http://www.janjagran24.com/2026/03/blog-post_21.html',
    date: '2026-03-21',
    note: 'Unhone Tejgarh se tehsil marg tak Rs. 6 lakh ki lagat se banne wali CC sadak ka bhoomi-pujan kiya; barish me aavagaman ki samasya se rahat ka daava. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Note: mantri-rule disclosure jaise upar.',
    period: '2023-2028',
  },
];

mpWorks['umadevi-lalchand-khatik'] = [
  {
    title: 'Laltek (Hatta) me bina prashasanik aadesh ghar todne ka aarop — driver ne kaha vidhayak ke kehne par kiya; tehsildar ne machine zabt ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Zee News, Jun 2026 (est.)',
    sourceUrl: 'https://zeenews.india.com/hindi/india/madhya-pradesh-chhattisgarh/damoh/damoh-house-demolished-without-government-order-tehsildar-seizes-machine-allegations-against-mla-uma-devi/3252769',
    date: '2026-06',
    note: 'Zee News ke mutabik Hatta me Central School ke paas Laltek me ek niji poclain machine ne dashakon se reh rahe ek garib adivasi parivar ka kaccha ghar gira diya; ye kisi prashasanik aadesh ke tahat nahi tha — tehsildar ne machine zabt kara di. Machine ke driver ne daava kiya ki usne vidhayak Uma Devi Khatik ke kehne par ye kiya; sthaniya mahilaon ne aarop lagaya ki vidhayak ne us kshetra me zameen li hai jise keemti banane ke liye ye karwaya gaya. Case sthiti: article me kisi FIR/mukadme ka ullekh nahi hai; tehsildar dwara machine zabt karne tak ki jaankari hai. Vidhayak ka jawab: article me unka paksh uplabdh nahi hai. Status: aarop (apramanit) — dosh siddh nahi hua hai; ye entry aarop ki reporting hai, faisla nahi. Date: search-index timing (~Jun 2026) se est.',
    period: '2023-2028',
  },
];

// REJECT-LOG (Damoh district batch, researched 2026-10-14):
// KEPT: lakhan-patel = 1; jayant-malaiya = 6; dharmendra-bhav-singh-lodhi = 6; umadevi-lalchand-khatik = 1.
// REJECTED — Lakhan Patel (Pathariya, MoS):
// - public.app (Patharia News): Bakaini/Nandarai me Rs. 1161.96 lakh ke vikas karyon ka lokarpan/bhoomi-pujan — public.app-only source bilkul nahi; non-public.app source nahi mila (Bhaskar/Jagran search me nahi aaya), isliye reject.
// - public.app: Semra Buzurg me Rs. 522.52 lakh sadak ka bhoomi-pujan (Nov 2025) — public.app-only, reject.
// - public.app: Pathariya me Atal Vatika ka lokarpan (Amrit 2.0) — public.app-only, reject.
// - atalnews24 (Dec 2023): Pathariya ki jal-samasya par swayam Sunar nadi par kaam karwana — nirikshan/nigrani, kaam (work) nahi; reject.
// REJECTED — Jayant Malaiya (Damoh):
// - janjagran24 (Mar 2026): gram Imlai me Rs. 15 lakh samudayik bhavan ka lokarpan "karenge" — bhavishya-tatkaal (future tense), hua nahi; announcement, reject.
// - janjagran24 (Mar 2026): gram Bansa Tarkheda me stamp dam ka nirikshan — nirikshan, reject.
// - atalnews24 (Aug 2026 press conference): TET pariksha ke khilaf gyapan — ghatna/maang, kaam nahi; reject.
// - Bhumika Bhaskar (2020) aur atalnews24 (Feb 2023) ke purane lekh — karyakaal se pehle, reject.
// REJECTED — Dharmendra Singh Lodhi (Jabera, mantri):
// - atalnews24 (Jan 2025): gram Sahasna me CM Jan Kalyan shivir me shamil — karyakram me maujoodgi, kaam nahi; reject.
// - atalnews24 (Jan 2025): Kodakala karyakram me haziri — maujoodgi, reject.
// - janjagran24 (Mar 2026): Radheshyam petrol pump ka shubharambh — niji pratishthan, unka kaam nahi; reject.
// - janjagran24 (Mar 2026): TET gyapan — ghatna/maang, reject.
// - Bhumika Bhaskar (2020) model school hostels bhoomi-pujan — karyakaal se pehle, reject.
// REJECTED — Umadevi Khatik (Hatta SC):
// - public.app: gram panchayat Baleh me Rs. 98 lakh vikas karyon (samudayik bhavan, CC, nali) ka bhoomi-pujan — public.app-only, reject.
// - navabharat.com: Hatta hospital parisar me swachhata abhiyan me shramdaan — ghatna, kaam nahi; reject.
// - ETV Bharat: Sagar sambhag baithak me sujhav (adhikariyon ki upasthiti, hospital staff) — sujhav/maang, kaam nahi; reject.
// - Patrika: prabhari mantri se do jila-mantriyon ki shikayat ("Hatta me karyalay khol lein, main istifa de deti hoon") — rajnitik ghatna, kaam nahi; reject.
// - YouTube-only: Hatta-Patera marg par helmet appeal ka viral video — YouTube-only, reject.
// NOTE: Umadevi Khatik ke paas is batch me koi positive vikas-karya entry nahi mili (saboot wale sources me); unki ekmatra entry Zee News wali aarop-reporting hai.


// ---- Datia district batch (researched 2026-10-14) ----
// Datia batch — pradeep-agrawal (Sewda AC-20, BJP, karyakaal Dec 2023+),
// phool-singh-baraiya (Bhander SC AC-21, INC, karyakaal Dec 2023+),
// ghanshyam-singh (Datia AC-22, INC, karyakaal Jul 2026+ — upchunav vijeta; Rajendra Bharti
// ki Apr 2026 ayogyata ke baad; data me Rajendra Bharti ka koi profile nahi — unke naam par
// koi entry nahi banayi gayi).
// DO NOT export; appended to works_mp.ts

mpWorks['pradeep-agrawal'] = [
  {
    title: 'Indergarh ke Ward 2 me vidhayak-nidhi se Rs 4-4 lakh ke do samudayik bhavanon ka bhoomi-pujan — Koteshwar/Hanuman mandir ke paas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Feb 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com/amp/local/mp/datia/indergarh/news/instead-of-30-beds-the-hospital-will-have-50-beds-mla-136504919.html',
    date: '2026-02',
    note: 'Dainik Bhaskar ke mutabik Indergarh nagar ke basti Ward 2 me Koteshwar mandir aur Hanuman ji mandir ke paas vidhayak-nidhi (MLA fund — ye vidhayak-nidhi hai, sansad-nidhi/MP fund nahi) se Rs. 4-4 lakh ki lagat ke do samudayik bhavanon ka nirman hoga; bhoomi-pujan unhone mukhya atithi ke roop me kiya, jisse sadhu-santon ke baithne aur dharmik ayojanon ki vyavastha ho sakegi. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Note: usi karyakram me unhone 30-bistar aspatal ko 50-bistar karne ke liye shasan ko patra bhejne ki baat kahi — ye maang/patra hai, kaam nahi, isliye entry me nahi liya gaya; ring road aur kheton tak sadak ki baat prastav thi, kaam nahi. Date: page par "8 mahine pehle" — Feb 2026 est.',
    period: '2023-2028',
  },
  {
    title: 'Indergarh me asthayi bus stand ka shubharambh — mukhya atithi ke roop me shamil',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'NCR Samachar Live, Sep 2026 (est.)',
    sourceUrl: 'https://ncrsamacharlive.in/latest/madhya-pradesh-inauguration-of-temporary-bus-stand-in-indargarh-town-relief-from-traffic-congestion-expected',
    date: '2026-09',
    note: 'NCR Samachar Live ke mutabik Indergarh nagar me Datia Road (State Bank ke saamne) khaali zameen par asthayi bus stand ka shubharambh unke mukhyatithya me hua; yatriyon ke liye tin-shed aur sulabh shauchalay ki vyavastha batayi gayi; shahar me ghusne wale charon raston ko jald ring road se jodne ka kaam shuru hone ki baat kahi gayi. Status: shubharambh. Credit-pardarshita: ye nagar parishad ka kaam hai; unki bhoomika mukhya-atithi ke roop me shubharambh-karta ki hai — nirman ka shrey unhe nahi diya ja raha. Disclosure: NCR Samachar Live chhota local portal hai. Date: page par tithi nahi di gayi; crawl timing se Sep 2026 est.',
    period: '2023-2028',
  },
];

mpWorks['ghanshyam-singh'] = [
  {
    title: 'Nirvachan ko Jabalpur High Court me chunauti — 1991 ke case ki jaankari chhupane ka aarop; yachika sunvai ke liye lambit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'News18 Hindi, 22 Sep 2026',
    sourceUrl: 'https://hindi.news18.com/news/madhya-pradesh/datia-petition-against-ghanshyam-singh-of-congress-in-jabalpur-highcourt-local18-10856114.html',
    date: '2026-09-22',
    note: 'News18 Hindi ke mutabik BJP neta/advocate Deepak Belpatri ne advocate Shivam Gautam ke madhyam se 17 Sep 2026 ko Jabalpur High Court me chunav yachika dayar ki; aarop hai ki unhone Datia upchunav ke halafname me 1991 me Rajiv Gandhi ki hatya ke baad Datia me virodh-pradarshan/chakka-jam ke dauran darj FIR ki jaankari chhupayi. Case sthiti: yachika dayar, sunvai lambit; yachika dayar hone matra se sadasyata samapt nahi hui hai. Vidhayak ka jawab: unhone aaropon ko sire se kharij kiya — kehna hai ki 1991 ke mamle ki jaankari unke sangyan me nahi thi, halafname me unhi mamlo ka ullekh hota hai jo kanooni prakriya ke dayre me aate hain, aur ye rajnaitik sajish hai. Status: aarop (apramanit) — dosh siddh nahi hua hai; ye entry aarop ki reporting hai, faisla nahi. Note: ye unke Jul 2026 ke baad ke karyakaal ki ghatna hai (shapath 6 Sep 2026); is avadhi ka koi vikas-karya saboot wale sources me nahi mila — profile me vikas-karya entry nahi hai. (Swadesh News, 22 Sep 2026 me bhi yahi yachika report hui hai.)',
    period: '2023-2028',
  },
];

// NOTE: phool-singh-baraiya (Bhander SC) — is batch me saboot wale sources me koi vikas-karya nahi mila;
// unki khabrein keval rajnaitik bayan/vivadon (controversial statements) par hain — koi entry nahi banayi gayi.
// Profile khaali rehna imaandari hai.

// REJECT-LOG (Datia district batch, researched 2026-10-14):
// KEPT: pradeep-agrawal = 2; phool-singh-baraiya = 0 (profile khaali); ghanshyam-singh = 1 (aarop-reporting).
// REJECTED — Pradeep Agrawal (Sewda, BJP):
// - public.app (Indergarh News, Sep 2026): gram Bara (Siddh Baba mandir) me Rs 42 lakh ke karyon (ghat 35L, pravesh dwar 3L, CC road 4.5L) ka bhoomi-pujan/lokarpan — public.app-only source bilkul nahi; non-public.app source nahi mila, reject.
// - public.app (Seondha News, Nov 2025): Bhaguapura thane ki Rs 3 lakh boundary wall ka SP ke saath lokarpan — public.app-only, reject.
// - FPJ/navabharat/indianmasterminds (Feb 2026): CM Mohan Yadav ka Datia daura — Rs 550 cr pariyojnaon ka lokarpan/bhoomi-pujan, Sindh pul (Rs 47 cr) — Agrawal manch par keval maujud (maujoodgi); CM ke karyakram me maujoodgi kaam nahi, reject.
// - Dainik Bhaskar (~May 2026): Khairona Ghat tak PWD sadak ka nirikshan, SDO/thekedar ko nirdesh, nidhi se rashi ka ashwasan — nirikshan/nirdesh/ashwasan, kaam nahi; reject.
// - Bhaskar lekh ke andar ke hisse: 50-bistar aspatal ke liye shasan ko patra (maang), ring road/khet-sadak (prastav) — maang/prastav, reject.
// - YouTube-only: sant ka "ashirwad" video, paudharopan, kanoon-vyavastha par bayan, shapath samaroh — YouTube-only/ghatna, reject.
// REJECTED — Phool Singh Baraiya (Bhander SC, INC):
// - Deccan Chronicle/FPJ (Jan/Sep 2026): "rape theory" wale vivadit bayan — rajnaitik bhashan, aarop/case ka structure nahi; kaam nahi, reject.
// - Bhaskar English (Jan 2026): SC/ST MLAs ko "dogs" kehne wala bayan — bhashan; reject.
// - Zee News: Imarti Devi ke samarthan me bayan — rajnaitik bayan; reject.
// - ETV Bharat (May 2025): Morena Jatav Mahapanchayat me bhashan — rajnaitik karyakram; reject.
// - Rewariyasat (Dec 2023): muh kala karne ka chunav-stunt — rajnaitik stunt; reject.
// - YouTube: putla dahan, "bhusa bhar denge" clips — YouTube-only/bhashan; reject.
// REJECTED — Ghanshyam Singh (Datia, INC, Jul 2026+):
// - ThePrint/FPJ/kashmirreader (Aug 2026): upchunav jeet ki khabrein — ghatna (jeet), kaam nahi; reject.
// - UNI Varta (Sep 2026): Vidhan Sabha adhyaksh se shapath — ghatna; reject.
// - Rajendra Bharti (poorv Datia MLA, Apr 2026 me ayogya ghoshit): data me unka koi profile nahi hai — unke naam par koi entry nahi banayi gayi.
// - Unke poorv karyakaal (Datia 1993/2003, Sewda 2018) ki koi khabar — karyakaal se pehle, niyam se bahar.
// ---- Dewas district batch (researched 2026-10-14) ----
// Dewas batch — Dewas jile ke 5 MLA (sabhi BJP, karyakaal Dec 2023+):
// dr-rajesh-sonkar (Sonkatch SC AC-170), gayatri-raje-puar (Dewas AC-171),
// manoj-narayansingh-choudhari (Hatpipliya AC-172), aashish-govind-sharma
// (Khategaon AC-173), murli-bhawara (Bagli ST AC-174).
// Note: kisi bhi MLA ke liye swikriti-stage ki entry nahi hai — GO/sanction-order
// number wali pakki swikriti report kisi article me nahi mili (ghoshna-type
// dave ghoshna stage par rakhe gaye hain). murli-bhawara ki CM-mulakat wali
// "swikriti" khabar bhi isi niyam se ghoshna rakhi gayi (Chhindwara precedent).
// DO NOT export; appended to works_mp.ts

mpWorks['dr-rajesh-sonkar'] = [
  {
    title: 'Gram Panchayat Budhanagaon me Rs 4 lakh ki CC sadak ka bhumi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Bharat Sagar News, Aug 2024',
    date: '2024-08',
    sourceUrl: 'https://www.bharatsagar.page/2024/08/4.html',
    note: 'Portal ke mutabik vidhayak Dr. Rajesh Sonkar ne swayam bhumi-pujan kiya (poojan-archa Pandit Rohit Sharma ne karwaya); sarpanch aur janpad pratinidhi upasthit the. Status: bhumi-pujan — nirman poora hone ki pushti article me nahi. Chhota local blog-portal (bharatsagar.page) — disclosure.',
    period: '2023-2028',
  },
  {
    title: 'Piplrawan me Rs 10.96 crore ke karyon ka bhumi-pujan aur Rs 3.82 crore ke karyon ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Samaachar24, Apr 2026',
    date: '2026-04',
    sourceUrl: 'https://samaachar24.com/peepalrawa-vikas-karya-23-crore-sonkatch/',
    note: 'Portal ke mutabik Nagar Parishad Piplrawan me vidhayak ne bhumi-pujan kiya: Amrit 2.0 ke tehat jalpraday pariyojana, STP, Mukti Dham, talab saundaryikaran, MRF centre, composting plant, fish parlour, nali, gumti (lagbhag 10.96 crore); aur lokarpan kiya: Mukhyamantri Adhosanrachna Yojana ke tehat CC road-nali, Ward 15 me park, purane kuen ka jirnodhar, bus stand complex (lagbhag 3.82 crore). Credit-pardarshita: ye sab rajya/kendra yojanaon ke kaam hain; vidhayak ki concrete bhoomika = unhone swayam bhumi-pujan/lokarpan kiya. Vidhayak-nidhi ka ullekh nahi. Status: bhumi-pujan + lokarpan. Chhota local portal (samaachar24.com) — disclosure.',
    period: '2023-2028',
  },
  {
    title: 'Piplrawan bypass (lagbhag Rs 9 crore) ki ghoshna',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Samaachar24, Apr 2026',
    date: '2026-04',
    sourceUrl: 'https://samaachar24.com/peepalrawa-vikas-karya-23-crore-sonkatch/',
    note: 'Usi Piplrawan karyakram me portal ne bypass ko "sabse badi saughat" bataya, lekin article me bypass ka bhumi-pujan ya swikriti ka koi saboot nahi — bhasha bhavishya-kalin ("banne wala") hai, isliye stage ghoshna rakha gaya hai, swikriti nahi. Chhota local portal (samaachar24.com) — disclosure. Status: ghoshna.',
    period: '2023-2028',
  },
  {
    title: 'Budget 2026 me Sonkatch ke 13 margon aur pul ke pravdhan ki ghoshna',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Truth24, Feb 2026',
    date: '2026-02',
    sourceUrl: 'https://truth24.co.in/2026/02/vidhayk-sonkr-ke-pryas-se-sonkchchh-ko-vikas-kee-aitihasik-saugat/',
    note: 'Truth24 ke mutabik MP Budget 2026 me Sonkatch ke liye margon ka pravdhan hua: Old Tonkkhurd bypass (0.90 km), Pagrawat-Lakumadhi, Chidawad-Dhota (14 km), Tonkkala-Tonkkhurd-Deoli-Patadiya-Iklera-Piplrawan-Balon-Berchha (63 km) sahit 13 marg, plus Sonkatch-Gandharvapuri marg par pul. Portal ne ise "vidhayak ke prayason se swikrit" bataya, lekin article me GO/work-order number nahi — isliye stage ghoshna (swikriti nahi). Kaam shuru ya poore hone ki pushti nahi. Chhota local portal (truth24.co.in) — disclosure. Status: ghoshna.',
    period: '2023-2028',
  },
  {
    title: 'Gram Shedu me Rs 25 lakh ke tin shed karyon ki ghoshna',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Aaj Tak24x7, Sep 2026',
    date: '2026-09',
    sourceUrl: 'https://aajtak24x7.in/archives/53531',
    note: 'Devanarayan Jayanti karyakram me graminon ki maang par vidhayak ne ghoshna ki: Ramdevji mandir ke samne 15 lakh ka sarvajanik tin shed, Dev Kawaja mandir me 5 lakh ka tin shed, gram me 5 lakh ki rashi, aur peene ke pani ke liye tanker. "Jitni maang utni ghoshna" — kaam shuru hone ki pushti nahi, isliye stage ghoshna. Vidhayak-nidhi (MLA fund) ka ullekh article me nahi hai. Chhota local portal (aajtak24x7.in — asli Aaj Tak/aajtak.in se sambandhit nahi) — disclosure. Status: ghoshna.',
    period: '2023-2028',
  },
  {
    title: 'Gram Gagarnia (Bhilkhedi) me Devanarayan mandir par Rs 12 lakh ke tin shed ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Aaj Tak24x7, Sep 2026',
    date: '2026-09',
    sourceUrl: 'https://aajtak24x7.in/archives/53531',
    note: 'Portal ke mutabik 12 lakh se bane bhavya tin shed ka lokarpan Devanarayan Jayanti ke din vidhayak Dr. Rajesh Sonkar ke sannidhya me hua. Status: lokarpan. Chhota local portal (aajtak24x7.in — asli Aaj Tak se sambandhit nahi) — disclosure.',
    period: '2023-2028',
  },
];

mpWorks['gayatri-raje-puar'] = [
  {
    title: '18 crore ke sadak karyon ka bhoomi-pujan: Gajra Gears-BNP Gate (7.80 cr) aur Beema-Karmdeep (11.17 cr) CC road + 4 ward works',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Bharat Sagar News, Sep 2026',
    date: '2026-09-01',
    sourceUrl: 'https://www.bharatsagar.page/2026/09/18.html',
    note: 'Stage: shilanyas/bhoomi-pujan — 1 Sep 2026 (Mangalwar) ko MLA ne khud kiya, mahapaur/sabhapati/jiladhyaksh maujood. Mukhyamantri Shahari Adhosanrachna Vikas Yojana (state scheme) ke tahat: 7.80 cr me Gajra Gears chaurahe se BNP Gate tak CC road + service road + widening + divider + stormwater drain + street light + pathway + greenery; 11.17 cr me Beema tirahe se Karmdeep chauraha tak sadak nirman. Isi event me Ward 28 (10.61 lakh), Ward 13 Sitaraam Nagar (10.65 lakh), Ward 11 Alkapuri (24.80 lakh white topping) aur Beema Road-Mukherjee Nagar (39.30 lakh) ke CC road/pavers works ka bhi bhoomi-pujan. Credit-pardarshita: ye vidhayak-nidhi nahi — rajya yojana + nagar nigam ke kaam hain, MLA ne bhoomi-pujan kiya. Status: kaam shuru (bhoomi-pujan stage). Source chhota local portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Naveen tehsil karyalaya bhawan (Ujjain Road, Dewas) ka udghatan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Bharat Sagar News, Jan 2024',
    date: '2024-01-26',
    sourceUrl: 'https://www.bharatsagar.page/2024/01/blog-post_276.html',
    note: 'Stage: lokarpan (inauguration) — 26 Jan 2024 (Shukrawar) ko MLA ne udghatan kiya; 29 Jan 2024 se tehsil karyalaya ne naye bhawan me kaam shuru kiya. Bhawan Ujjain Road par Nagar Nigam depot ke paas bana; purana tehsil office purane collector bhawan ke saath toda gaya tha. Credit-pardarshita: sarkari nirman, MLA ne udghatan kiya. Status: poora hua kaam, karyalaya shift ho gaya. Source chhota local portal hai.',
    period: '2023-2028',
  },
  {
    title: '2.42 crore ke ward-level karyon ka bhoomi-pujan (11 wards: CC road, pavers, garden, boundary wall, high-mast)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Samacharline, Nov 2024',
    date: '2024-11-26',
    sourceUrl: 'https://samacharline.in/%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%be%e0%a4%af%e0%a4%95-%e0%a4%b6%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%ae%e0%a4%82%e0%a4%a4-%e0%a4%97%e0%a4%be%e0%a4%af%e0%a4%a4%e0%b0%80%e0%a4%b0%e0%a5%80-%e0%a4%b0/',
    note: 'Stage: bhoomi-pujan — 26 Nov 2024 ko MLA ne khud kiya (mahapaur, sabhapati, parshad maujood). Ward 3, 7, 10, 12, 13, 16, 24, 35, 39, 41, 43 me CC road, pavers block, garden vikas, boundary wall, high-mast light aadi. Credit-pardarshita: nagar nigam ke kaam, MLA ne bhoomi-pujan kiya; ye vidhayak-nidhi ki ghoshna-type khabar nahi, bhoomi-pujan event ki reporting hai. Status: kaam shuru (bhoomi-pujan stage). Source chhota local portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Balgarh talab (Ward 43) ka 1.5 crore se kayakalp — lokarpan',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Hamara Dewas, Mar 2025',
    date: '2025-03-21',
    sourceUrl: 'https://www.hamaradewas.com/2025/03/1-50.html',
    note: 'Stage: lokarpan (poora hua kaam) — 21 Mar 2025 ko MLA ne udghatan kiya. Nagar Nigam Dewas ne talab jeernoddhar/saundaryikaran karwaya: pathway, lighting, fencing aadi, 1.5 crore lagat. Credit-pardarshita: kaam nagar nigam ka; MLA ne lokarpan kiya. Status: poora aur lokarpit. Source chhota local portal hai.',
    period: '2023-2028',
  },
  {
    title: '80 lakh ke 5 ward karyon ka bhoomi-pujan (Ward 4 CC road, Ward 15-16 pavers, Ward 19 Sheetla Mata garden, Ward 42 samajik bhawan)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Voice of MP, Sep 2026 (est.)',
    date: '2026-09',
    sourceUrl: 'https://voiceofmp.com/news/338827',
    note: 'Stage: bhoomi-pujan — MLA mukhya atithi; Ward 4 me CC road, Ward 15-16 me pavers block (20-20 lakh), Ward 19 Gautam Nagar Sheetla Mata mandir garden me boundary wall + pavers (20 lakh), Ward 42 Balaji Nagar me samajik-sanskritik bhawan (10 lakh). Credit-pardarshita: nagar nigam ke kaam, MLA ne bhoomi-pujan kiya. Status: kaam shuru (bhoomi-pujan stage). Article par date nahi thi — crawl recency aur naye jiladhyaksh (Raisingh Sendhav) ke aadhar par Sep 2026 anumanit, isliye sourceLabel me (est.) joda. Source chhota local portal hai.',
    period: '2023-2028',
  },
  {
    title: '125 crore ke Dewas road package ki ghoshna (Ujjain Road-Nagukhedi four-lane, MG Marg, ward works)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dewas Live, Nov 2024',
    date: '2024-11-15',
    sourceUrl: 'https://dewaslive.com/mla-shrimant-pawar-development-projects-dewas-5036.html',
    note: 'Stage: ghoshna — bina GO/order-number ke swikriti ka dawa nahi mana ja sakta, isliye swikriti stage nahi di. Ghoshna mahapaur/vidhayak pratinidhi Durgesh Agrawal ne "vidhayak ke netritva me" di. Article me 92.53 cr (Ujjain Road-Nagukhedi four-lane) ki DPR swikrit aur 6 cr MG Marg ki swikriti+tender ka dawa hai, par koi GO/order number nahi. Ward works (7.5 cr) me 2.5 cr vidhayak-nidhi (ye vidhayak-nidhi/MLA fund hai, sansad-nidhi/MP fund nahi) + 5 cr nigam nidhi. Credit-pardarshita: ye rajya (Mukhyamantri Adhosanrachna) aur nagar-nigam yojnaon ke kaam; MLA ki seedhi bhoomika article me sirf "netritva" ke roop me report hui. Status: ghoshna stage; inhi me se Gajra Gears-BNP Gate aur Beema-Karmdeep ke revised-scope works ka bhoomi-pujan Sep 2026 me hua (alag entry dekhen).',
    period: '2023-2028',
  },
];

mpWorks['manoj-narayansingh-choudhari'] = [
  {
    title: 'Hatpipliya town: Rs 1.6 cr Chapra-Indore road entrance to Bajrang Chowraha widening + Rs 50 lakh Bajrang Chowraha to old bus stand road — lokarpan/bhoomi-pujan by MLA',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Bharat Sagar, Oct 2024',
    date: '2024-10',
    sourceUrl: 'https://www.bharatsagar.page/2024/10/blog-post_52.html',
    note: 'Navratri 2024: ~Rs 3.15 cr ke Hatpipliya Nagar Parishad works package ka lokarpan aur bhoomi-pujan vidhayak Manoj Choudhari ke mukhya atithya me hua. Status: poora hua kaam ka lokarpan + naye kaam ka bhoomi-pujan, dono ek hi karyakram me. Credit-pardarshita: vidhayak ki bhoomika karyakram (mukhya atithi) tak; kaam Nagar Parishad ke. GO/order number article me nahi. Chhota local portal.',
    period: '2023-2028',
  },
  {
    title: 'Hatpipliya town: Rs 50 lakh Narmada pani tanki nirmaan — lokarpan/bhoomi-pujan by MLA',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Bharat Sagar, Oct 2024',
    date: '2024-10',
    sourceUrl: 'https://www.bharatsagar.page/2024/10/blog-post_52.html',
    note: 'Usi Rs 3.15 cr package me Rs 50 lakh ki Narmada pani tanki ka nirmaan (Nagar Parishad dwara); lokarpan/bhoomi-pujan vidhayak ke mukhya atithya me. Status: poora hua kaam ka lokarpan + naye kaam ka bhoomi-pujan. Credit-pardarshita: karyakram-bhoomika tak hi; GO/order number article me nahi. Chhota local portal.',
    period: '2023-2028',
  },
  {
    title: 'Khajuriya Bina: Narmada peyjal tank-to-tap water supply ka shubharambh by MLA',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Bharat Sagar, Jan 2026',
    date: '2026-01',
    sourceUrl: 'https://www.bharatsagar.page/2026/01/blog-post_2.html',
    note: 'Rajya sarkar ki Narmada peyjal yojana (Rs 247 cr) ka sthaniya shubharambh — vidhayak mukhya atithi, unhone pani chalu karaya. Status: poora hua kaam ka shubharambh (launched/completed). Credit-pardarshita: yojana rajya sarkar ki hai; vidhayak ki bhoomika shubharambh-karyakram tak seemit. Chhota local portal.',
    period: '2023-2028',
  },
  {
    title: 'Khajuriya Bina: Rs 25 lakh samuhik bhavan + Rs 4 lakh mandir chadar set — bhoomi-pujan by MLA',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Bharat Sagar, Jan 2026',
    date: '2026-01',
    sourceUrl: 'https://www.bharatsagar.page/2026/01/blog-post_2.html',
    note: 'Usi shubharambh-karyakram me Rs 25 lakh ke samuhik bhavan aur Rs 4 lakh ke mandir chadar set ka bhoomi-pujan sampann hua. Status: shilanyas/bhoomi-pujan (kaam shuru hone wala). Nidhi ka srot (vidhayak-nidhi ya anya) article me spasht nahi. Chhota local portal.',
    period: '2023-2028',
  },
  {
    title: 'Shivpur Mundla: Rs 10 lakh main puliya nirmaan — bhoomi-pujan by MLA',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Voice of MP, Jan 2026 (est.)',
    date: '2026-01',
    sourceUrl: 'https://voiceofmp.com/user/description/Description_control/news_description/336153',
    note: 'Nevri kshetra ke gram Shivpur Mundla me Rs 10 lakh ki mukhya puliya ke nirmaan ka bhoomi-pujan vidhayak ke mukhya atithya me sampann hua. Status: shilanyas/bhoomi-pujan (kaam shuru hone wala). Date article par nahi thi — image filename timestamp (2026-01-10) se anumaanit. Chhota local portal.',
    period: '2023-2028',
  },
  {
    title: 'Shivpur Mundla: baal vatika — lokarpan by MLA',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Voice of MP, Jan 2026 (est.)',
    date: '2026-01',
    sourceUrl: 'https://voiceofmp.com/user/description/Description_control/news_description/336153',
    note: 'Usi karyakram me Shivpur Mundla ki baal vatika ka lokarpan hua. Status: poora hua kaam ka lokarpan. Date article par nahi thi — image filename timestamp (2026-01-10) se anumaanit. Chhota local portal.',
    period: '2023-2028',
  },
];

mpWorks['aashish-govind-sharma'] = [
  {
    title: 'Harangaon me lagbhag Rs 1 crore lagat se naya bus stand bhavan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar (est. Apr 2026)',
    date: '2026-04',
    sourceUrl: 'https://www.bhaskar.com/local/mp/dewas/khategaon/news/ashish-sharma-inaugurates-bus-stand-harangaon-vikas-ghoshna-137654800.html',
    note: 'Khategaon janpad ke Harangaon gaon me naya bus stand bhavan (lagbhag Rs 1 crore) ka lokarpan swayam MLA Aashish Sharma ne kiya, Dainik Bhaskar ki report ke anusar. Credit-pardarshita: ye sarkari bus stand pariyojna thi, MLA ki concrete bhoomika lokarpan thi. Status: poora hua kaam / lokarpan.',
    period: '2023-2028',
  },
  {
    title: 'Khategaon me Rs 37.34 crore lagat se CM Rise school bhavan ka bhoomi-pujan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar (est. Mar 2024)',
    date: '2024-03',
    sourceUrl: 'https://www.bhaskar.com/local/mp/dewas/khategaon/news/cm-rise-school-building-will-be-built-with-rs-3734-crores-132729934.html',
    note: 'Lok Sabha chunav ki aachar sanhita lagne se pehle MLA Aashish Sharma ne Khategaon me CM Rise school bhavan (Rs 37.34 crore, 86 kamre) ka bhoomi-pujan kiya. Credit-pardarshita: ye rajya sarkar ki CM Rise yojana ka bhavan hai, MLA ki concrete bhoomika bhoomi-pujan thi. Status: shilanyas-bhoomi pujan.',
    period: '2023-2028',
  },
  {
    title: 'Khategaon nagar me Rs 1.32 crore RCC nala ka bhoomi-pujan aur Rs 4 lakh CC road ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'rashtiyaekta.com, Jan 2025 (chhota local portal)',
    date: '2025-01-12',
    sourceUrl: 'https://rashtiyaekta.com/a-gift-of-crores-to-khategaon-mla-ashish-sharma-performed-bhoomi-pujan/',
    note: 'Khategaon nagar parishad me SDRF ke tahat wards 3, 4, 9, 11 me Rs 1.32 crore RCC nala nirman ka bhoomi-pujan aur ward 4 me Rs 4 lakh CC road ka lokarpan MLA Aashish Sharma ke mukhya atithya me hua. Credit-pardarshita: SDRF rajya sarkar ka fund, karyanvayan nagar parishad ka; MLA ki concrete bhoomika bhoomi-pujan/lokarpan karyakram thi. Disclosure: rashtiyaekta.com chhota local portal hai. Status: shilanyas-bhoomi pujan + poora hua kaam / lokarpan.',
    period: '2023-2028',
  },
  {
    title: 'Khategaon ward 3 me CC road aur RCC nala ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'bhoomiindianews.in, Mar 2025 (chhota local portal)',
    date: '2025-03-23',
    sourceUrl: 'https://bhoomiindianews.in/17164/',
    note: '23.3.2025 ko Khategaon ward 3 me CC road aur RCC nala ka lokarpan MLA Aashish Sharma ke mukhya atithya me hua. MLA ne apne sambodhan me dawa kiya ki PWD ke adhin jameen hone ke karan badha thi, jise unhone PWD minister se baat karke prashast karaya — ye MLA ka swayam ka dawa hai, swatantra pushti nahi. Disclosure: bhoomiindianews.in chhota local portal hai. Status: poora hua kaam / lokarpan.',
    period: '2023-2028',
  },
  {
    title: 'Panigaon me Rs 1 crore lagat se naye prathmik swasthya kendra bhavan ka bhoomi-pujan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'rashtiyaekta.com, Dec 2024 (chhota local portal)',
    date: '2024-12-31',
    sourceUrl: 'https://rashtiyaekta.com/new-building-of-primary-health-center-worth-rs-1-crore-will-be-constructed-in-this-village-of-khategaon-assembly/',
    note: 'Khategaon vidhan sabha ke Panigaon gaon me naye prathmik swasthya kendra bhavan (lagbhag Rs 1 crore) ka bhoomi-pujan MLA Aashish Sharma ne kiya. Credit-pardarshita: ye sarkari health-infra pariyojna hai, MLA ki concrete bhoomika bhoomi-pujan thi. Disclosure: rashtiyaekta.com chhota local portal hai. Status: shilanyas-bhoomi pujan.',
    period: '2023-2028',
  },
  {
    title: 'Harangaon me samudayik bhavan, nadi par puliya, transformer aur college/CM Rise school ki ghoshna',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar (est. Apr 2026)',
    date: '2026-04',
    sourceUrl: 'https://www.bhaskar.com/local/mp/dewas/khategaon/news/ashish-sharma-inaugurates-bus-stand-harangaon-vikas-ghoshna-137654800.html',
    note: 'Bus stand lokarpan manch se MLA ne Harangaon ke liye samudayik bhavan, purane Ameli marg par nadi par puliya, naya bijli transformer, badi bus sewa, aur bhavishya me college/CM Rise school khulne ki ghoshnaein ki. Article me inke liye koi GO/swikriti order ka zikr nahi — isliye ye ghoshna stage par hai, swikriti nahi. Status: ghoshna.',
    period: '2023-2028',
  },
];

mpWorks['murli-bhawara'] = [
  {
    title: 'Ranjit Bridge (Kalisindh nadi) ka bhoomi pujan — Ranjit Dam se Jatashankar Lok, ~100 gaon judenge, Rs 1.09 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Free Press Journal, May 2026',
    date: '2026-05',
    sourceUrl: 'https://www.freepressjournal.in/topnews/mla-murli-bhanwra-performs-bhoomi-pujan-for-ranjit-bridge-in-mps-bagli-over-100-villages-to-benefit',
    note: 'MLA Murli Bhanwra ne Kalisindh nadi par proposed Ranjit Bridge ka bhoomi pujan kiya; PWD officer (Santosh Gupta) ke anusar lagat Rs 1.09 crore, 6 mahine me poorn hone ka lakshya; pull Ranjit Dam ko Jatashankar Lok se jodta hai aur ghati ke neeche ke ~100 gaon ko Bagli shahar se jodega — ilake ki lambe samay se pending maang. Credit-pardarshita: ye PWD/raajya-sarkaar ka project hai, MLA ki bhoomika bhoomi pujan karna (article unki commitment ko project se jodta hai, PWD officer ne lagat/timeline di). Status: shilanyas-bhoomi pujan.',
    period: '2023-2028',
  },
  {
    title: 'Bhamori Gram Panchayat me 240m CC road ka bhoomi pujan (Imli Chauraha se Gaushala tak), Rs 10 lakh — vidhayak nidhi',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, Dec 2025',
    date: '2025-12',
    sourceUrl: 'https://www.patrika.com/dewas-news/240-meter-long-cc-road-will-be-constructed-at-a-cost-of-10-lakh-rupees-20199305',
    note: 'Bhamori Gram Panchayat me Imli Chauraha se Gaushala tak ~240m CC road ka MLA ne bhoomi pujan kiya; lagat Rs 10 lakh. Ye vidhayak-nidhi (MLA fund) hai, sansad-nidhi (MP fund) nahi. Article ke infobox ke anusar nirman karya shuru ho gaya hai (bhoomi pujan sampann). Status: shilanyas-bhoomi pujan, kaam shuru.',
    period: '2023-2028',
  },
  {
    title: 'CM se Loharda nagar parishad vikas karyon hetu Rs 1 crore aur Karneshwar Mandir saundaryikaran hetu Rs 20 lakh ki ghoshna',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribal Post, May 2025',
    date: '2025-05',
    sourceUrl: 'https://www.thetribalpost.com/2025/05/blog-post_94.html',
    note: 'Bagli MLA ke saath Loharda aur Karnawad nagar parishad ke pratinidhiyon ne CM Dr. Mohan Yadav se saunjanya bhent ki; CM ne Loharda nagar parishad ke vikas karyon hetu Rs 1 crore aur Karnawad ke Karneshwar Mahadev mandir ke saundaryikaran hetu Rs 20 lakh dene ki ghoshna ki. Credit-pardarshita: ye CM/raajya-sarkaar ki ghoshna hai — MLA ki concrete bhoomika maang uthana aur pratinidhimandal CM tak le jana (article title "vidhayak ke prayason se" ka dawa karta hai). Note: chhota local portal hai; article me GO/sanction-order number nahi — isliye stage ghoshna, swikriti nahi. Status: ghoshna.',
    period: '2023-2028',
  },
];

// PARENT QA NOTE (2026-10-14): murli-bhawara ki Glibs (chhota local portal, ekmatra source) wali
// 'antarjateeya vivah virodh' negative entry HATA di gayi — negative entry ke liye hamara star
// credible (rashtriya/established) reporting + case/FIR/adhikarik karwai ki sthiti hai; isme na
// koi case tha, na MLA ka paksh; sirf samudaik virodh tha. Kamzor attribution se khaali behtar.

// REJECT-LOG (Dewas district batch, researched 2026-10-14):
// KEPT: dr-rajesh-sonkar = 6; gayatri-raje-puar = 6; manoj-narayansingh-choudhari = 6; aashish-govind-sharma = 6; murli-bhawara = 3 (ek negative entry parent QA me hati). Total 27.
// REJECTED — Dr. Rajesh Sonkar (Sonkatch SC, BJP):
// - Truth24 (Oct 2026): Narmada-Kalisindh link pariyojna ka pumping-house nirikshan — sirf nirikshan/daura, reject.
// - Truth24 (Oct 2026): "182 gaon ko Narmada jal milega" — bhavishya-khabar ("milegi"), reject.
// - Truth24.live (Jul 2025): collector se vikas karyon par charcha/baithak — maang/prastav level, reject.
// - ETV Bharat (Dec 2025): helicopter se school bachchon ki sair (niji kharch ka karyakram) — vikas karya nahi, reject.
// - Mantri Vijayvargiya ka Sonkatch Rs 17.54 cr bhoomi-pujan/lokarpan event (29 Oct 2025): bhumi-pujan/lokarpan mantri ne kiya; MLA keval maujood — keval maujoodgi, reject.
// - stgrevamp.news18.com election pages — staging/preprod mirror, reject.
// - YouTube Shorts (Raebareli Report): galat vyakti (Shatrohan Sonkar) + YouTube-only, reject.
// - epaperapi.jagran.com Naiduniya PDF OCR snippet: poora article kholkar padhna sambhav nahi — snippet se entry banana mana hai, reject.
// REJECTED — Gayatri Raje Puar (Dewas, BJP):
// - dewastimes.com (~2021): 4.34 cr lokarpan event — Dec 2023 se pehle, reject.
// - constructionworld.in: CM Shivraj ko CM bataya = pre-Dec 2023, reject.
// - dewastimes.com (~2018): nagar nigam prashasanik bhawan lokarpan — pre-term, reject.
// - npg.news (7 Aug 2024): CM Mohan Yadav ke 172 cr event me MLA ki keval maujoodgi, reject.
// - maabhagwatitimes.in (Sep 2024): mahapaur sammelan sambodhan — keval maujoodgi, reject.
// - maabhagwatitimes.in (Oct 2023): pre-term + keval rajnaitik bayan, reject.
// - public.app (Dec 2025): bhandare me shamil hona — maujoodgi + public.app-only, reject.
// - Kosar Express YouTube (Dec 2023): vijay julus — YouTube-only, reject.
// - devdiscourse.com: cricket celebration par jaanch ki maang — rajnaitik bayan, reject.
// - patrika.com: royal family property dispute — parivar ka case MLA par kabhi nahi, reject.
// - pinewz.com (9 Jul 2025): video-only page, kamzor attribution, reject.
// - voiceofmp.com news/338824: duplicate URL (canonical news/338827 liya), reject.
// REJECTED — Manoj Narayansingh Choudhari (Hatpipliya, BJP):
// - Rajouda-Kelod-Doublechowki road ~Rs 97.62-98 cr (Amar Ujala/ABP Live/aadi, Sep 2026): CM ne virtually bhoomi-pujan kiya; MLA sirf karyakram me maujood — keval maujoodgi, reject.
// - Sukhaliya-Tigariya road ~Rs 11.4 cr (Sep 2026): sirf CM-ki-ghoshna, MLA ka role nahi, reject.
// - Shivpur Mundla mandir chadar Rs 5 lakh (voiceofmp): ghoshna-type khabar, sanction saboot nahi, reject.
// - Hatpipliya civil hospital nirikshan (bharatsagar, Jul 2025): sirf nirikshan, reject.
// - Bhaunrasa toll plaza par bhatije Nikhil Chaudhary ka hungama (Patrika/Amar Ujala, Aug 2025): parivar ka case MLA par kabhi nahi, reject.
// - TOI video (Feb 2023): sahayak par hamla — pre-term + sahayak ka case, reject.
// - Zee News (~2018): MLA ka road accident — pre-term vyaktigat durghatna, reject.
// - News18 (Mar 2020): bhai ki habeas corpus yachika — pre-term siyasi mamla, reject.
// - bharatsagar 2019/2022 articles: pre-term, reject.
// - public.app videos (panchayat bhavan lokarpan, Borkheda-Dabri marg, CM-mulakat): public.app-only, reject.
// - YouTube "Vikas Purush Manoj Chaudhary" (Sep 2026): YouTube-only promo, reject.
// REJECTED — Aashish Govind Sharma (Khategaon, BJP):
// - indiancrimenews.com (Nemawar, ~Oct 2023): pre-term, reject.
// - public.app video (18 Sep 2026, blood storage unit): public.app-only, reject.
// - YouTube videos (blood storage, raincoat, tubewell, interview, mandal karyakram, chia beej): YouTube-only, reject.
// - pradeshvistar.com (8 Jan 2025, samiksha baithak): sirf samiksha/daura, reject.
// - hamaradewas.com (20 Jun 2025, Indore Index hospital "Kilkari" kendra): kshetra se bahar + keval upasthiti, reject.
// - seetimes/thebharatnow/eksatbulletin (Rajoda-Kelod road): Hatpipliya ka kaam; Khategaon MLA keval manch par — keval maujoodgi, reject.
// - bharathorizon.com (DISHA meeting): keval upasthiti, reject.
// - dainikjagranmpcg English (budget session): vidhan sabha mudda — kshetra ka kaam nahi, reject.
// - bhoomiindianews volleyball association: pad, vikas kaam nahi, reject.
// - etvbharat/divyahimachal/ujjwalhimachal: galat vyakti (HP Hamirpur ke Ashish Sharma), reject.
// - Business Standard/Wikipedia/News18/TOI/Oneindia: keval chunav data, reject.
// REJECTED — Murli Bhawara (Bagli ST, BJP):
// - public.app video (Karneshwar mandir Annapurna Kaksh lokarpan, MLA nidhi Rs 12L): public.app-only — non-public.app source nahi mila, reject.
// - public.app video (Satwas CM-bhent, Mar 2024): public.app-only + koi concrete kaam nahi, reject.
// - malwaabhitak.com: nirman karyon ki sameeksha baithak — sirf nirikshan, reject.
// - YouTube ("3 crore vikas karyon ka bhoomi pujan"): YouTube-only, reject.
// - YouTube (Tiranga yatra, Satwas): YouTube-only + publicity event, reject.
// - pratahkal.com (Radheshyam Bairwa, Baran): galat vyakti/galat kshetra, reject.
// - FPJ (Rs 10 crore grant): rajya-sarkaar grant, MLA ki concrete bhoomika nahi — kamzor attribution, reject.
// - anokhateer.com (CM ghoshnaein: thana/awas/godam): MLA keval upasthit — maujoodgi, reject.
// - Zee News ("Tejomahal" bayan): sirf rajnaitik bayan, reject.
// NOTE: murli-bhawara ki CM-mulakat wali khabar (The Tribal Post, May 2025) me "swikriti" shabd tha, lekin GO/sanction-order number ke bina Chhindwara-precedent se stage GHOSHNA rakha gaya — swikriti nahi.

// ---- Dhar district batch (researched 2026-10-14) ----
// Dhar jile ke 7 MLA (karyakaal Dec 2023+), AC number order me:
// pratap-grewal (Pratap Grewal (Sardarpur ST AC-196, INC))
// umang-singhar (Umang Singhar (Gandhwani ST AC-197, INC, Leader of Opposition))
// baghel-surendra-singh-honey (Baghel Surendra Singh Honey (Kukshi ST AC-198, INC))
// dr-hiralal-alawa (Dr. Hiralal Alawa (Manawar ST AC-199, INC))
// kalusingh-thakur (Kalusingh Thakur (Dharampuri ST AC-200, BJP))
// neena-vikram-verma (Neena Vikram Verma (Dhar AC-201, BJP))
// bhanwarsingh-shekhawat-babu-ji (Bhanwarsingh Shekhawat Babu Ji (Badnawar AC-202, INC))
// Kul entries: Pratap Grewal 9, Kalusingh Thakur 6, Hiralal Alawa 6 (3 news + 3 dawa),
// Bhanwarsingh Shekhawat 4, Umang Singhar 1, Surendra Singh Honey 0 (khaali), Neena Vikram Verma 0 (khaali).
// Note: swikriti-stage sirf wahi jahan pakki sanction report mili (Singhar — Taraghati nahar Rs 1.52 cr prashasnik swikriti,
// shasan-dwara-swikriti article me spasht; bina GO/order-number ke sab ghoshna rakha gaya — Chhindwara precedent).
// Kisi bhi MLA ki vidhayak-nidhi press-ghoshna bina sanction/work-order saboot ke nahi jodi.
// DO NOT export; appended to works_mp.ts

mpWorks['pratap-grewal'] = [
  {
    title: 'Gram Nandlai me Rs 37.5 lakh ke naveen panchayat bhawan ka bhumi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Chetak Times, Jul 2025',
    date: '2025-07',
    sourceUrl: 'https://chetaktimes.com/news-in-hindi-sardarpur-dhar-mla-bhumi-pujan-2/',
    note: 'Status: bhumi-pujan — MLA Pratap Grewal ne khud bhumi-pujan kiya; shasan se pehli kisht Rs 18.75 lakh gram panchayat ko mil chuki hai. Credit-pardarshita: yojna rajya-sarkar ki (panchayat bhawan) hai, par bhumi-pujan ki concrete bhoomika MLA ki apni hai. Source chhota local portal hai (chetaktimes.com) — disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Gram Bandedi me Rs 37.5 lakh ke naveen panchayat bhawan ka bhumi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Dec 2025',
    date: '2025-12',
    sourceUrl: 'https://www.bhaskar.com/local/mp/dhar/news/a-new-panchayat-bhawan-will-be-built-in-bandedi-for-rs-3750-lakh-136668730.html',
    note: 'Status: bhumi-pujan — MLA ne khud bhumi-pujan kiya; news me unka bayan hai ki unhone vidhan sabha me jarrar panchayat bhawano ka mudda uthaya tha jiske baad swikriti mili. Credit-pardarshita: Bandedi ka naam Aug 2025 ki 17 Atal Seva Sadan wali mantri-karyakram list me bhi tha — ye Dec 2025 ka alag reported event hai, isliye dobara bhumi-pujan ki sambhavna note ki ja rahi hai.',
    period: '2023-2028',
  },
  {
    title: 'Rajgarh ke Gram Piparani me goshala ke liye Rs 5.88 lakh ke 25 kVA transformer ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Chetak Times, Jan 2026',
    date: '2026-01',
    sourceUrl: 'https://chetaktimes.com/news-in-hindi-rajgarh-piparni-gaushala/',
    note: 'Status: lokarpan (poora hua) — Shrimad Bhagwat Adivasi Bhagat Goshala, Piparani; ye vidhayak-nidhi (MLA fund) ka kaam hai, sansad-nidhi (MP fund) nahi. Source chhota local portal hai (chetaktimes.com) — disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Sardarpur nagar me Rs 30 lakh ke sarv-suvidhayukt community hall ka bhumi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Chetak Times, Sep 2026',
    date: '2026-09',
    sourceUrl: 'https://chetaktimes.com/सरदारपुर-में-30-लाख-की-लागत-स/',
    note: 'Status: bhumi-pujan — MLA Pratap Grewal ne any janpratinidhiyon ke saath bhumi-pujan kiya. Source chhota local portal hai (chetaktimes.com) — disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Gram Khamaliya me Rs 12.97 lakh ke naveen anganwadi bhawan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Chetak Times, Apr 2025',
    date: '2025-04',
    sourceUrl: 'https://chetaktimes.com/news-in-hindi-sardarpur-dhar-aangnwadi-lokarpan/',
    note: 'Status: lokarpan (poora hua) — nirmaan poorn hone ke baad MLA ne lokarpan kiya; news me MLA ke prayason se swikriti milne ka zikr hai. Source chhota local portal hai (chetaktimes.com) — disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Gram Labariya me Rs 51 lakh ke ekikrit madhyamik vidyalaya naveen bhawan ka bhumi-pujan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Chetak Times, Feb 2025',
    date: '2025-02',
    sourceUrl: 'https://chetaktimes.com/news-in-hindi-sardarpur-dhar-mla-bhumipujan/',
    note: 'Status: bhumi-pujan — MLA ne khud neev rakhi; jarrar madhyamik bhawan ki jagah naya bhawan. Source chhota local portal hai (chetaktimes.com) — disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Gram Labariya me Rs 15.86 lakh ke prathmik vidyalaya atirikt kakshon ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Chetak Times, Feb 2025',
    date: '2025-02',
    sourceUrl: 'https://chetaktimes.com/news-in-hindi-sardarpur-dhar-mla-bhumipujan/',
    note: 'Status: lokarpan (poora hua) — usi karyakram me nirmit atirikt bhawan ka lokarpan. Source chhota local portal hai (chetaktimes.com) — disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Sardarpur Model School me tube-well khanan ki ghoshna (peyjhal samasya ke samadhan ke liye)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Dec 2025',
    date: '2025-12',
    sourceUrl: 'https://www.bhaskar.com/local/mp/dhar/news/three-day-annual-sports-competition-inaugurated-at-model-school-dhar-136706231.html',
    note: 'Status: ghoshna — khel pratiyogita karyakram me MLA ne March me naveen tube-well khanan ki ghoshna ki; poornata ki aage ki news nahi mili. Ye news-report hai, MLA ka swayam ka dawa nahi.',
    period: '2023-2028',
  },
  {
    title: 'Rajgarh nagar ke wards 1,5,6,11,12,14 me Rs 1.18 crore ke sadak karyon ka bhumi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Chetak Times, May 2026',
    date: '2026-05',
    sourceUrl: 'https://chetaktimes.com/%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A4%97%E0%A4%A2%E0%A4%BC-%E0%A4%A8%E0%A4%97%E0%A4%B0-%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%B7%E0%A4%A6-%E0%A4%B8%E0%A4%AD%E0%A4%BE%E0%A4%95%E0%A4%95%E0%A5%8D%E0%A4%B7/',
    note: 'Status: bhumi-pujan — MLA Pratap Grewal mukhya atithi ke roop me; pavers + damrikaran karya (ward-wise: 8L/9L/37L/25L/4.5L/32L). Credit-pardarshita: karya nagar parishad ka hai, MLA ki bhoomika karyakram ki adhyakshata/mukhya atithi ke roop me hai. Source chhota local portal hai (chetaktimes.com) — disclosure ke saath.',
    period: '2023-2028',
  },
];
// REJECT-LOG (pratap-grewal):
// 1. Sardarpur civil hospital Rs 11 crore naya bhawan lokarpan (chetaktimes, Aug 2025) — REJECT: lokarpan prabhari mantri Kailash Vijayvargiya ne kiya, MLA sirf vishisht atithi/maujoodgi; state project me MLA ki concrete bhoomika nahi.
// 2. Narmada micro-sinchai talab demand + Dhar ko sukhagrasht ghoshna maang (chetaktimes, Sep/Oct 2026) — REJECT: sirf maang/gyapan, koi kaam nahi.
// 3. Kharif fasal bima Rs 5.5 crore (chetaktimes, ~Aug 2026) — REJECT: vidhan sabha prashn ki advocacy ka parinaam, nirmaan/vikas-kaam nahi; jaankari vidhayak karyalaya se.
// 4. Sardarpur civil hospital me stree-rog visheshagya padsthapana (chetaktimes, Jun 2026) — REJECT: prashn ka advocacy outcome (staff posting), vikas-kaam nahi.
// 5. Kachhla-Chaubara 4 km PMGSY sadak (ekhabartoday, ~May 2025) — REJECT: sirf prastav Delhi bheja gaya, swikriti nahi.
// 6. Sardarpur hospital me Rs 35 lakh oxygen plant bhumi-pujan (veblr video, ~Jan 2025) — REJECT: video-only source; text coverage nahi mili.
// 7. Budget 2026 me Bidpada-Chaukirunda + Mohankheda bypass Rs 7 crore swikriti (public.app-only, ~Feb 2026) — REJECT: source rule (public.app-only) + sirf MLA ka bayan, koi GO/order number nahi.
// 8. Ganesh pratima vitaran, ward bhraman/daura, jansunwai me gyapan, safai-karmi hadtal me maujoodgi, football pratiyogita udghatan (YouTube/chetaktimes) — REJECT: nirikshan/daura/maujoodgi ya dharmik-social, vikas-kaam nahi.
// 9. Civil hospital oxygen plant punah aarambh (chetaktimes, Jun 2026) — REJECT: BMO ke prayas ka shrey; MLA ka yogdan corona-kaal ka purana, is karyakaal ka nahi.
// 10. Rajya-stariya shaleya football pratiyogita udghatan (chetaktimes, ~Sep 2026) — REJECT: sirf karyakram me maujoodgi.

mpWorks['umang-singhar'] = [
  {
    title: 'Taraghati nahar (Indira Gandhi jalashay Amba-soti nahar yojana) west weir Ogee wall sudhaar-marammmat — Rs 1.52 crore prashasnik swikriti',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Amar Ujala',
    date: '2026-10',
    sourceUrl: 'https://www.amarujala.com/madhya-pradesh/dhar/approval-granted-following-the-initiative-of-leader-of-dhar-news-c-1-1-noi1504-4817296-2026-10-10',
    note: 'Gandhwani AC ke Tanda anchal me Taraghati nahar ke west weir me Ogee wall ki marammat ke liye shasan ne Rs 1.52 crore ki prashasnik swikriti di (stage: swikriti — article me shasan-dwara-swikriti spasht). MLA Umang Singhar ki concrete bhoomika: Tanda daure me kisanon ke gyapan ke baad 22 May 2025 ko shasan ko patra likhkar rashi ki maang ki thi. Labh: Amba-soti, Kalidevi, Badda, Muhaja, Tanda ke kisan (hazaaron hectare sinchai). Credit-pardarshita: kaam sarkari fund se swikrit hua, vidhayak-nidhi nahi; swikriti shasan ne di, MLA ki bhoomika pahal/patra tak seemit — article me spasht.',
    period: '2023-2028',
  },
];
// REJECT-LOG (umang-singhar): (1) Naidunia Gandhwani report-card (~June 2023): pre-Dec 2023 karyakaal ke dawe (nal-jal Rs 134 cr, Man dam Rs 300 cr etc.) — sab MLA ke swayam-dawe, bina independent verification; REJECT (pre-term + dawa). (2) NDTV mud-funeral story (Vasli gaon): grameenon ke aarop + BJP ka sawal, lekin na FIR/case, na MLA ka jawab — negative-entry criteria fail; REJECT. (3) FreePressJournal birthday story (Jan 2026): Piplkheda anathashram dining hall ke liye Rs 2 lakh vyaktigat daan + laptop — personal charity, public work nahi; REJECT. (4) Bhaskar English Akhada power-grid plaque story: Akhada gaon Bagh block (Kukshi AC) me hai — Gandhwani kshetra se bahar + swikriti 2022 (pre-term); REJECT. (5) YouTube Ganesh-pratima video (Sep 2026): YouTube-only source + bachchon ki maangon par "manjur karne ki baat" = future promise; REJECT. (6) Punjab Kesari sookha article (Oct 2026): sirf CM se maang/survey ki demand; REJECT (sirf maang). (7) ETV Bharat salary/vikas-nidhi bhedbhaav (Dec 2024): rajnaitik bayan, koi thos kaam nahi; REJECT. (8) Monsoon-session virodh, Bhagirathpura press-conference, Maharashtra chunav paryavekshak, HC election petition, excise-case stay — sab LoP/state-level ya vyaktigat kaanuni mamle; REJECT. (9) Wikipedia "constituency work" (Gandhwani hospital mahila doctor, Garadi pulia): keval MLA ki khud ki website se sourced, koi tareekh/khabar nahi — self-publication; REJECT.

mpWorks['baghel-surendra-singh-honey'] = [
  // NO QUALIFYING ENTRIES — 2023-2028 period me is MLA ke koi thos vikas-kaam
  // credible news me nahi mile jo sakht niyam pure karte hon.
  // Khaali profile imaandari hai. Reject log neeche.
];
// REJECT-LOG (baghel-surendra-singh-honey):
// 1. public.app (Dahi CHC transformer bhoomipujan, 18 Sep 2025) — REJECT: public.app-only source,
//    aur follow-up me 4 mahine baad bhi kaam shuru nahi hua tha.
// 2. FreePressJournal, 1 Oct 2026 — Dahi me rally (Tantya Mama/Dahi micro lift sinchai, bijli, college ki maang) — REJECT: sirf maang/protest.
// 3. FreePressJournal — Kukshi thana protest (Shree Cement limestone, 2 yuva riha ki maang) — REJECT: vikas-kaam nahi.
// 4. Rajwada Darpan, 6 Oct 2026 — Dahi micro lift sinchai pariyojna poori (Rs 1324 cr) — REJECT: rajya sarkari pariyojna (2019 me swikrit);
//    article me MLA ki concrete bhoomika nahi (unhone sirf paani ki maang me rally nikali).
// 5. bichhu.com interview (27 May 2023) — MLA ka dawa: 2018-20 me mantri ke roop me Kukshi micro lift (Rs 2191 cr)
//    + Dahi micro lift (Rs 1085 cr) swikrit — REJECT: Dec 2023 se pehle ka kaam.
// 6. Bhelpowernews/IndiaPrime24/Dainik Agnipath/Navbharat Times — pariwarik dahej pratadna FIR (bahu Kamya Singh ke aarop) — REJECT: parivar ka case kabhi nahi.
// 7. Patrika (Oct 2025) — CM ke Bhilala samaj karyakram me MLA ki maujoodgi — REJECT: sirf maujoodgi.
// 8. Zee News — bike se Narmada jal lekar Ayodhya yatra (Jan 2024) — REJECT: vikas-kaam nahi.
// 9. G9News — 2023 baadh me rahat kary (Sep 2023) — REJECT: Dec 2023 se pehle.

mpWorks['dr-hiralal-alawa'] = [
  {
    title: 'Manawar Civil Hospital (Rs 9.51 cr) — naya bhawan lokarpit, Semalda Road',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    date: '2026-05',
    sourceUrl: 'https://www.bhaskar.com/local/mp/dhar/manawar/news/manawar-civil-hospital-inauguration-mla-hiralal-alawa-questions-credit-138264832.html',
    note: 'State sarkar ki puri hui pariyojna ka lokarpan; MLA Dr. Hiralal Alawa ne khud ribbon-kaatkar aur puja karke aupcharik shubharambh kiya (~May 2026). Credit-pardarshita: BJP ki kendreey rajyamantri Savitri Thakur ne isse pehle ek Jan Kalyan shivir me hospital janata ko samarpit kiya tha; MLA ka dawa hai ki 2019 se maang uthayi aur Kamalnath/Shivraj/Mohan Yadav — teenon sarkaron ko patra + vidhansabha prashnon se prayas kiya. Hospital ki buniyad unke pehle karyakal (2018-23) me padi thi, lekin lokarpan Dec 2023 ke baad ka hai, isliye period-eligible. Hospital ke liye Rs 5 lakh vidhayak-nidhi ki ghoshna ka sanction saboot nahi mila (ghoshna reject); 100-bed vistar abhi sirf uthaya gaya mudda hai, kaam nahi.',
    period: '2023-2028',
  },
  {
    title: 'Mandavada gram panchayat me vidyut DP (transformer) ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    date: '2025-11',
    sourceUrl: 'https://www.bhaskar.com/local/mp/dhar/manawar/news/manawar-mla-inaugurated-the-electricity-dp-in-mandavada-136393547.html',
    note: 'Puri hui chhoti pariyojna ka lokarpan — MLA ne swayam DP ka uddghatan kiya. Usi karyakram me mandir-nirman ke liye vidhayak-nidhi se Rs 50,000 ki ghoshna sirf press-ghoshna thi, sanction/work-order saboot nahi — isliye ghoshna entry me shaamil nahi.',
    period: '2023-2028',
  },
  {
    title: 'Utavat (Khedapura) me Rs 10 lakh ka Manglik Bhavan — bhoomi pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    date: '2026-04',
    sourceUrl: 'https://www.bhaskar.com/local/mp/dhar/manawar/news/utavat-khedapura-manglik-bhavan-bhumi-pujan-dr-alawa-137595352.html',
    note: 'Ye VIDHAYAK-NIDHI (MLA fund) ka kaam hai — sansad-nidhi (MP fund) nahi. Sarpanch Mohan Dawar ki maang par MLA ne apni nidhi se swikriti di aur khud bhoomi pujan kiya (~Apr 2026) — shilanyas stage.',
    period: '2023-2028',
  },
  {
    title: '1300 crore ki group nal-jal pradai yojana swikrit ka MLA ka dawa (Manawar+Umarban block)',
    category: 'Paani',
    badge: 'dawa',
    sourceLabel: 'Swaraj Vani',
    date: '2026-08',
    sourceUrl: 'https://swarajvani.com/manawar-mla-dr-hiralal-alawa-development-8-years/',
    note: 'MLA ka swayam ka dawa jo news me report hua (27 Aug 2026) — article me koi GO/order number nahi, sanction swatantra roop se verify nahi hui. Dawe ke anusaar Manawar aur Umarban block ki har gram panchayat tak Narmada ka paani pahunchega. Dawa badge = bina independent saboot ka dawa, poora disclosure.',
    period: '2023-2028',
  },
  {
    title: 'SH-38 par Mangod-Manawar-Khalghat four-lane swikrit + Semalda/Man nadi pulon ka MLA ka dawa',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'Swaraj Vani',
    date: '2026-08',
    sourceUrl: 'https://swarajvani.com/manawar-mla-dr-hiralal-alawa-development-8-years/',
    note: 'MLA ka swayam ka dawa (27 Aug 2026), bina GO/order number — swatantra verification nahi. Credit-pardarshita: SH-38 ke Barwaha-Dhamnod section ka cabinet approval (Rs 2508.21 cr, July 2026) alag khabar me mila, lekin Mangod-Manawar-Khalghat section ki swikriti ka swatantra saboot nahi mila. Narmada par Semalda bridge (Rs 68 cr) aur Man nadi par Bakaner/Devra pulon ka kaam bhi dawe me shaamil — in par PWD/tender stage ki swatantra khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'College, CM Rise school, sports complex, Eklavya parisar, kanya chhatravas — shiksha bundle ka MLA ka dawa',
    category: 'School',
    badge: 'dawa',
    sourceLabel: 'Swaraj Vani',
    date: '2026-08',
    sourceUrl: 'https://swarajvani.com/manawar-mla-dr-hiralal-alawa-development-8-years/',
    note: 'MLA ke swayam ke dawe (27 Aug 2026 news report): Updi me Rs 5 cr college bhawan, Rs 40 cr kanya shiksha parisar, Updi+Bakaner me CM Rise school, Semalda Road par CM Rise school, Updi me Rs 5 cr sports complex, Devla me Rs 39 cr Eklavya aawasiya parisar, 100-seater kanya chhatravas. Kisi par GO/order number nahi; swatantra verification nahi — dawa badge. Note: Dec 2025 me Bhaskar ke nirikshan article se Umarban me college/Eklavya nirman-adhheen hona confirm hota hai, lekin wo article sirf nirikshan tha (entry nahi ban sakti).',
    period: '2023-2028',
  },
];
// REJECT-LOG (dr-hiralal-alawa): (1) medicalbuyer.co.in/FPJ — 50-bed hospital ka foundation-stone ~Nov 2022, Kamalnath-sarkar approval; Dec 2023 se pehle → REJECT. (2) vicharnewslivetv.com Mar 2020 — Man Dam group water scheme (257.67 cr) aur 108 ambulance (2019) — pehle karyakal → REJECT. (3) aajtak24.in Jan 2021 — bhoomi-pujan/lokarpan samaroh 2021 ka + mukhya atithi mantri Rajvardhan Singh, MLA sirf maujood → REJECT. (4) bhaskar.com Dec 2025 — Umarban college/Eklavya ka sirf nirikshan/daura → REJECT. (5) DP lokarpan article ki mandir Rs 50,000 ghoshna + hospital article ki Rs 5 lakh vidhayak-nidhi ghoshna — press-ghoshna, sanction/work-order saboot nahi → REJECT. (6) FPJ May 2025 — sharabandi bayan, koi thos kaam nahi → REJECT. (7) FIR May 2026 (IANS): aarop+sthiti hai lekin Alawa ka apna jawab nahi mila (sirf LoP ki pratikriya) aur ye works-related nahi, political protest case hai → negative entry REJECT. (8) YouTube-only videos (dharna, Semalda bridge, Bakaner CM Rise), public.app, FB/IG — source-type REJECT. (9) Future "karenge": medical/veterinary/engineering college (agar Congress sarkar aayi to), hospital 100-bed vistar ka mudda → REJECT. (10) swarajvani ke sabhi "swikriti" dawe me GO/order number nahi — sirf dawa badge par entry, sanction badge nahi.

mpWorks['kalusingh-thakur'] = [
  {
    title: 'Nalchha block me 2 naye talabon ka bhumi-pujan: Nayapura (Bhadkia GP) Rs 9.25 crore aur Aakho (Amkho GP) Rs 4.94 crore — Jal Sansadhan Vibhag Dhar banayega',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'CNews Bharat',
    date: '2026-10',
    sourceUrl: 'https://cnewsbharat.com/hindi/news/nalchha-130870',
    note: 'Stage: shilanyas/bhumi-pujan — kaam shuru hone se pehle ka charan. Credit-pardarshita: talab sarkari (Jal Sansadhan Vibhag, Dhar) banayega; vidhayak ne mukhya atithi ke roop me bhumi-pujan kiya; article ke mutabik graminon ki lambe samay se maang thi. Chhota local portal (cnewsbharat.com) — disclosure. Article me jaankari ka shrey vidhayak ke media pratinidhi Ashok Mirdwal ko diya gaya hai; article par prakashan tithi chhapi nahi — search-index crawl (~Oct 2026) se anumanit.',
    period: '2023-2028',
  },
  {
    title: 'Nalchha me 2 nistar talabon ka bhumi-pujan: Bhadkia (Rs 39.82 lakh) aur Lunera (Rs 39.82 lakh)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'CNews Bharat',
    date: '2026-08',
    sourceUrl: 'https://cnewsbharat.com/hindi/news/dhar-128500',
    note: 'Stage: shilanyas/bhumi-pujan. Credit-pardarshita: sarkari yojana ke tehat talab; vidhayak ne bhumi-pujan kiya; article me CM Dr Mohan Yadav ke netritva ka zikr — Dec 2023 ke baad ka kaam confirm. Chhota local portal (cnewsbharat.com) — disclosure. Jaankari vidhayak ke media pratinidhi Ashok Mirdwal dwara di gayi; prakashan tithi chhapi nahi — crawl (~Aug 2026) se anumanit.',
    period: '2023-2028',
  },
  {
    title: 'Nalchha janpad me 3 barrage bhandhon ka bhumi-pujan: Banjaripura (Rs 4.21 crore), Awalipura (Rs 4.21 crore), Guljarjiri-Patalnagpur (lagat article me nahi)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'CNews Bharat',
    date: '2025-11',
    sourceUrl: 'https://cnewsbharat.com/hindi/news/nalcha-148089',
    note: 'Stage: shilanyas/bhumi-pujan — uddeshya sinchai ke liye paani. Credit-pardarshita: vidhayak ne graminon ke saath bhumi-pujan kiya; article me CM Dr Mohan Yadav ke netritva ka zikr — Dec 2023 ke baad ka kaam confirm. Chhota local portal (cnewsbharat.com) — disclosure. Jaankari vidhayak ke media pratinidhi Ashok Mirdwal dwara di gayi; prakashan tithi chhapi nahi — crawl (~Nov 2025) se anumanit.',
    period: '2023-2028',
  },
  {
    title: 'Nalchha ki Dhaal gram panchayat me Jogi Bhadak nale par bandh ka bhumi-pujan — Rs 4.25 crore',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'CNews Bharat',
    date: '2026-09',
    sourceUrl: 'https://cnewsbharat.com/hindi/news/nalchha-128301',
    note: 'Stage: shilanyas/bhumi-pujan; vidhayak ka bayan: kshetra me paani ki kami nahi rehne denge. Credit-pardarshita: sarkari pariyojna ka bhumi-pujan vidhayak ne kiya. Chhota local portal (cnewsbharat.com) — disclosure. Jaankari vidhayak ke media pratinidhi Ashok Mirdwal dwara di gayi; prakashan tithi chhapi nahi — crawl (~Sep 2026) se anumanit.',
    period: '2023-2028',
  },
  {
    title: 'Naye Janpad Panchayat Nalchha karyalaya bhawan ka bhumi-pujan — MP shasan dwara Rs 5.25 crore+ swikrit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Police Public News',
    date: '2026-02',
    sourceUrl: 'https://policepublicnews.com/public/bhoomi-pujan-of-construction-of-new-building-of-district-panchayat-nalchha-office-of-dharampuri-assembly-constituency-no-200-of-dhar-district-regional-mla-hon',
    note: 'Stage: shilanyas/bhumi-pujan — 6 Feb 2026 (Shukrawar; tithi article par spasht chhapi hai). Credit-pardarshita: bhawan MP shasan dwara swikrit (article me RES vibhag ke engineer ka zikr); vidhayak mukhya atithi ke roop me bhumi-pujan me shamil hue. Chhota local portal (policepublicnews.com) — disclosure.',
    period: '2023-2028',
  },
  {
    title: 'Dhamnod me MP ke pehle Sahakar Samriddhi Super Bazaar ka lokarpan (B-PACS campus)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar',
    date: '2026-07',
    sourceUrl: 'https://www.bhaskar.com/local/mp/dhar/dhamnod/news/dhamnod-sahakar-samriddhi-super-bazaar-inauguration-savithri-thakur-138353238.html',
    note: 'Stage: lokarpan (poora hua kaam) — super bazaar khul gaya hai, rozmarra ka samaan saste daamon par milega. Credit-pardarshita: MP shasan ki "Sahkarita se Samriddhi" yojana ki pariyojna; lokarpan Kendriya Mantri Savitri Thakur, MP State Cooperative Bank prashasak Mahendra Singh Yadav aur vidhayak Kalu Singh Thakur ne sanyukt roop se kiya — vidhayak ki concrete bhoomika saha-udghatak (co-inaugurator) ke roop me. Dainik Bhaskar. Prakashan tithi article par chhapi nahi — search index se ~Jul 2026 anumanit.',
    period: '2023-2028',
  },
];
// REJECT-LOG (kalusingh-thakur):
// 1. Hunger-strike vs Savitri Thakur + BJP show-cause notice (FPJ x3, Punjab Kesari, Amar Ujala, Vistaar News, ETV Bharat, Paliwalwani, PradeshLive, Nishaanebaz) — REJECT: raajnaitik vivaad/protest announcement; koi vikas-kaam nahi.
// 2. Honey-trap/blackmail case (NDTV mpcg, lalluram) — REJECT: vyaktigat vivaad, kaam nahi; parivaar angle bhi (do patniyan) — family kabhi nahi.
// 3. Assault/land-grab dispute, Jitu Patwari via Patrika — REJECT: vyaktigat vivaad; MLA ke khilaaf FIR/case nahi (FIR MLA ki shikayat par hamlaavaron ke khilaaf); negative-entry bar poora nahi karta; kaam nahi.
// 4. YouTube "Nalchha me khel maidan ke liye 2 lakh dene ki ghoshna" — REJECT: YouTube-only source + sirf ghoshna (bina sanction saboot).
// 5. YouTube bhoomi-pujan videos (peptech time, misc) — REJECT: YouTube-only.
// 6. dainik.bhaskar short link "Vidhayak ne dhai crore ki vikas pariyojnaon ka..." — REJECT: kaun se MLA/kshetra clear nahi, verify nahi ho paya.
// 7. Toll-booth manhandling 2014 (India.com) — REJECT: 2023 se pehle + vyaktigat ghatna, kaam nahi.
// 8. Bhopal dharna (mpbreakingnews) — REJECT: 2018-23 karyakaal ki khabar (Congress MLA Panchilal Meda ke samay ki), Dec 2023 se pehle; kaam nahi.
// 9. TopNews YouTube "gaali-baaz" video — REJECT: YouTube-only + kaam nahi.
// 10. Biography/affidavit pages (npg.news, myneta.info) — not works, entry nahi banayi.

mpWorks['neena-vikram-verma'] = [
];
// REJECT-LOG (neena-vikram-verma):
// 1. mpbreakingnews.in "Vidhayak Neena Verma ne kiya vikas karyon ka bhoomipujan aur lokarpan" (vidhayak-nidhi Rs 50 lakh — Kailash Nagar sampwell Rs 9.15 lakh, Luniyapura/Banjara Basti CC road + sanskritik manch): canonical URL khud khola to 2020 ka COVID article khula (slug mismatch/stale search index); Wayback fetch bhi fail (500). Snippet se entry banane ka niyam nahi — unverifiable, isliye REJECT.
// 2. Harit Vikas Udyan, Pithampur (freepressjournal.in, 2026-03-24; khud padha): Hyundai Mobis CSR + World Vision India + Pithampur nagarpalika ka project; MLA ne sirf udghatan/ribbon-cut kiya, article me koi concrete bhoomika nahi — REJECT (maujoodgi).
// 3. Triveni Harit Setu: vidhayak nidhi se Rs 10 lakh ki GHOSHNA (Savitri Thakur ke karyakram me); YouTube-only source + sanction/work-order ka koi saboot nahi — REJECT (press-ghoshna bina sanction proof).
// 4. Dhar medical college bhoomipujan (ntvtime.com, 2025-12-23; Rs 266 cr PPP; khud padha): article me MLA sirf "maujood rahengi", koi concrete bhoomika nahi; CM/state project — REJECT.
// 5. Railway overbridge Dhar-Gunawad (FPJ): udghatan Savitri Thakur ne kiya, MLA sirf upasthit — REJECT.
// 6. Swimming pool, Uday Ranjan Club Dhar (FPJ): MLA sirf upasthit, prashansa — REJECT.
// 7. CM Rs 1869 cr irrigation project bhoomipujan (FPJ): MLA sirf upasthit — REJECT.
// 8. Kailash Vijayvargiya press conference + DISHA review meeting (FPJ/dhar.nic.in): MLA sirf upasthit — REJECT.
// 9. Student art exhibition, Govt College of Fine Arts (FPJ): Union Minister ke saath sirf udghatan — REJECT.
// 10. Aajivika fresh mela udghatan (dhar.nic.in): event, thos vikas-kaam nahi — REJECT.
// 11. BJP workers conference (FPJ): party event, kaam nahi — REJECT.
// 12. YouTube "CM ne Dhar ko saugat, Neena Verma ki mehnat rang layi": YouTube-only source — source rules ke tahat REJECT.
// 13. Pravesh Verma victory celebrations (Amar Ujala, Feb 2025): parivarik/personal khabar, vikas-kaam nahi — REJECT.
// 14. Affidavit/election data (myneta.info, Business Standard, Wikipedia, DNA): profile info, kaam nahi — REJECT.
// NOTE: Dec 2023+ ka koi bhi thos vikas-kaam aise source se verify NAHI hua jo sakht niyamon par khara utre. Khaali profile imaandari hai.

mpWorks['bhanwarsingh-shekhawat-babu-ji'] = [
  {
    title: 'Sadalpur kshetra ke gramon (Sarvania sahit) me Rs 10 lakh ki CC sadak ka bhumi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Free Press Journal',
    date: '2025-04',
    sourceUrl: 'https://www.freepressjournal.in/indore/mla-shekhawat-performs-bhoomi-pujan-of-two-roads-in-badnawar',
    note: 'Stage: shilanyas/bhumi-pujan — Sadalpur kshetra ke gramon me (Sarvania ka naam) Rs 10 lakh ki CC sadak ka bhumi-pujan; vidhayak ne daure me Sant Raidas ki pratima par malyarpan kiya. Article me fund source nahi bataya gaya; koi sanction order number nahi. Status: kaam shuru (bhumi-pujan stage).',
    period: '2023-2028',
  },
  {
    title: 'Khacharoda gaon me Rs 6 lakh ki CC sadak ka bhumi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Free Press Journal',
    date: '2025-04',
    sourceUrl: 'https://www.freepressjournal.in/indore/mla-shekhawat-performs-bhoomi-pujan-of-two-roads-in-badnawar',
    note: 'Stage: shilanyas/bhumi-pujan — Badnawar kshetra ke Khacharoda gaon me Rs 6 lakh ki CC sadak ka bhumi-pujan. Article me fund source nahi bataya gaya; koi sanction order number nahi. Status: kaam shuru (bhumi-pujan stage).',
    period: '2023-2028',
  },
  {
    title: 'Mundla gaon me Rs 4 lakh ke vidyut transformer ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Free Press Journal',
    date: '2025-04',
    sourceUrl: 'https://www.freepressjournal.in/indore/mla-shekhawat-performs-bhoomi-pujan-of-two-roads-in-badnawar',
    note: 'Stage: poora hua / lokarpan — Mundla gaon me Rs 4 lakh ka transformer lagakar vidhayak ne udghatan kiya. Article me fund source nahi bataya gaya. Status: poora aur lokarpit.',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak-nidhi se Badnawar chaupatiyon par yatri pratikshalaya ka nirman (poora)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Satya Grah Live',
    date: '2024-11',
    sourceUrl: 'https://www.satyagrahlive.com/main-news/%e0%a4%a7%e0%a4%be%e0%a4%b0%e0%a5%a4-%e0%a4%bf%e0%a4%a7%e0%a4%be%e0%a4%af%e0%a4%95-%e0%a4%b6%e0%a5%87%e0%a4%96%e0%a4%be%e0%a4%b5%e0%a4%a4-%e0%a4%95%e0%a5%87-%e0%a4%ab%e0%a5%8b%e0%a4%9f/',
    note: 'Stage: poora hua kaam — VIDHAYAK-NIDHI (MLA fund) se Badnawar ki Badi Chaupati par yatri pratikshalaya bana; article me Chhokla, Semlia, Kalora, Bhesola chaupatiyon par bhi pratikshalaya ka zikr hai. Ye khabar pratidvandiyon dwara in pratikshalayon par lagi vidhayak ki tasveer virupit karne ki report se saamne aayi (is ghatna me vidhayak peedit the, aaropi nahi). Chhota local portal (Satya Grah Live) — disclosure. Tithi lagbhag (~Nov 2024, page metadata ke anusaar).',
    period: '2023-2028',
  },
];
// REJECT-LOG (bhanwarsingh-shekhawat-babu-ji):
// - FPJ usi article me: Satkui Dham (Babarda) Shiv mandir ke liye Rs 9.5 lakh shed fund + Rs 10 lakh dharmik karyon ki ghoshna — sirf ghoshna, sanction/work-order saboot nahi → reject.
// - FPJ usi article me: Kandaria prastavit hospital ke liye tehsildar/housing board ko zameen-aawantan ke nirdesh — sirf nirikshan/nirdesh, kaam nahi → reject.
// - Atulya Bharat Chetna (Oct 2026): collector-meeting ke vishay (sukha ghoshna, doctor posting, Sadalpur/Kesur/Bijur pani, sadak swikriti, tubewell, district court waiting room vidhayak-nidhi se) — sab sirf maang/prastav/vishay uthana, pakki swikriti nahi → reject.
// - FPJ 'Shekhawat Raises Farmers And Tribal Land Issues' (~Jun 2026): khad + PM MITRA zameen-adhigrahan par sarkar ko patra — sirf patr-vyavahar → reject.
// - YouTube (Satyam): Gondikheda talab sthal-nirikshan + Paikunda vidhayak-nidhi shed lokarpan — YouTube-only source, niyam par reject.
// - Chunav/campaign pieces (The Hindu, newsdrum, IndiaTV, Amar Ujala Sep 2023, Patrika, newsd.in, thesootr): campaign vaade / pre-Dec 2023 → reject.
// - hindi.news18.com Karam dam (Aug 2022): pre-2023 siyasat → reject.
// - nationpress.com Beawar classrooms + firstindia.co.in Jodhpur waterlogging: Gajendra Singh Shekhawat — galat vyakti → reject.
// - Zee News statue (Sikar ke shaheed Bhanwar Singh Shekhawat): galat vyakti → reject.
// - public.app 'Babuji Premier League 2' cricket event: public.app-only source + khel event, vikas-kaam nahi → reject.
// - Negative entries: koi nahi — 2013 Apex Bank loan-settlement case me current case status + vidhayak ka jawab record par nahi; satyagrahlive ghatna me vidhayak peedit the, aaropi nahi.

// REJECT-LOG (Dhar district batch, researched 2026-10-14) — kul 55+ items; vistarit log har MLA block ke saath upar:
// - Pratap Grewal: 10 (mantri-lokarpan me sirf maujoodgi, maang/gyapan, prastav, video-only, public.app-only bina GO)
// - Umang Singhar: 9 (LoP state-level siyasat, pre-term dawe, personal charity, YouTube-only, bina FIR wala aarop)
// - Surendra Singh Honey: 9 (public.app-only, sirf maang/protest, rajya pariyojna bina MLA bhoomika, pre-2023 dawa, parivar case, sirf maujoodgi)
// - Hiralal Alawa: 10 (pre-Dec 2023 works, sirf nirikshan, press-ghoshna bina sanction saboot, bina-jawab wala FIR negative, YouTube-only, future promises)
// - Kalusingh Thakur: 10 (raajnaitik vivaad, honey-trap, bina-FIR assault dispute, YouTube-only, pre-2023, verify na ho saka short-link)
// - Neena Vikram Verma: 14 (sirf upasthiti x8, CSR ribbon-cut, YouTube-only, unverifiable broken-slug story, party/parivarik khabrein)
// - Bhanwarsingh Shekhawat: 17 (ghoshna bina sanction, nirdesh/nirakshan, patr-vyavahar, YouTube-only, pre-2023, galat vyakti x2, public.app-only)

// ---- Dindori district batch (researched 2026-10-14) ----
// Dindori jile ke 2 MLA (karyakaal Dec 2023+), AC number order me:
// omprakash-dhurwey (Omprakash Dhurwey (Shahpura (ST) AC-103, BJP))
// omkar-singh-markam (Omkar Singh Markam (Dindori (ST) AC-104, INC; 2018-2020 mantri the — mantri-karyakaal ke kaam bilkul nahi liye)
// Kul entries: Omprakash Dhurwey 8, Omkar Singh Markam 1.
// Note: swikriti-stage sirf wahi jahan pakki sanction report mili — is batch me koi swikriti entry nahi; sab lokarpan/shilanyas/vitaran (poora hua) stage par.
// Kisi bhi MLA ki vidhayak-nidhi press-ghoshna bina sanction/work-order saboot ke nahi jodi (Markam ki table-kursi entry me actual distribution ki ground-report hai, isliye li gayi).
// Dhurve batch ka kshetra-verification coordinator ne ECI delimitation se kiya: Shahpura AC-103 = Shahpura tehsil + Shahpur aur Amarpur RI Circles (Dindori tehsil).
// DO NOT export; appended to works_mp.ts

mpWorks['omprakash-dhurwey'] = [
  {
    title: 'Kanchanpur Raiyat (Shahpura) me khel maidan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sewa Johar MPCG, Jan 2025',
    date: '2025-01',
    sourceUrl: 'https://sewajoharmpcg.com/?p=12588',
    note: 'Status: lokarpan — kaam poora, vidhayak ne lokarpan kiya. Credit-pardarshita: Mukhyamantri Jan Kalyan Abhiyan ke shivir me mukhya atithi ke roop me lokarpan; kaam shasakiya yojna/prashasan ka hai, MLA ki vyaktigat nidhi ka ullekh nahi. Source chhota local portal (Sewa Johar MPCG) — disclosure ke saath joda gaya.',
    period: '2023-2028',
  },
  {
    title: 'Kanchanpur Raiyat me CC road ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Sewa Johar MPCG, Jan 2025',
    date: '2025-01',
    sourceUrl: 'https://sewajoharmpcg.com/?p=12588',
    note: 'Status: lokarpan — CC road ka kaam poora, vidhayak ne lokarpan kiya. Credit-pardarshita: shivir me mukhya atithi ke roop me lokarpan; shasakiya kaam, vyaktigat swikriti ka dawa report nahi. Source chhota local portal (Sewa Johar MPCG) — disclosure ke saath joda gaya.',
    period: '2023-2028',
  },
  {
    title: 'Kanchanpur me ek anya CC road ka bhumi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Sewa Johar MPCG, Jan 2025',
    date: '2025-01',
    sourceUrl: 'https://sewajoharmpcg.com/?p=12588',
    note: 'Status: shilanyas/bhumi-pujan — nirman shuru hona baki, laagat report nahi. Credit-pardarshita: shivir me mukhya atithi ke roop me bhumi-pujan; shasakiya kaam. Source chhota local portal (Sewa Johar MPCG) — disclosure ke saath joda gaya.',
    period: '2023-2028',
  },
  {
    title: 'Banki me Rs 14.48 lakh (MGNREGA) ke checkdam aur rangmanch ka bhumi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sewa Johar MPCG, Jan 2025',
    date: '2025-01',
    sourceUrl: 'https://sewajoharmpcg.com/?p=12588',
    note: 'Status: shilanyas/bhumi-pujan — MGNREGA ke tahat checkdam aur rangmanch, kul laagat Rs 14.48 lakh (dono kaam sanyukt report). Credit-pardarshita: MLA ne bhumi-pujan kiya; fund MGNREGA (shasakiya yojna) ka hai — ye vidhayak-nidhi nahi hai, aur sansad-nidhi (MP fund) to bilkul nahi. Source chhota local portal (Sewa Johar MPCG) — disclosure ke saath joda gaya.',
    period: '2023-2028',
  },
  {
    title: 'Banki me CC road ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Sewa Johar MPCG, Jan 2025',
    date: '2025-01',
    sourceUrl: 'https://sewajoharmpcg.com/?p=12588',
    note: 'Status: lokarpan — CC road ka kaam poora, vidhayak ne lokarpan kiya. Credit-pardarshita: shivir me mukhya atithi ke roop me lokarpan; shasakiya kaam. Source chhota local portal (Sewa Johar MPCG) — disclosure ke saath joda gaya.',
    period: '2023-2028',
  },
  {
    title: 'Lalpur (Raypura, Shahpura) me Rs 10 lakh vidhayak-nidhi CC road — nirman poora, gunvatta par vivaad',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'The Narmada Express, Mar 2026',
    date: '2026-03',
    sourceUrl: 'https://thenarmadaexpress.com/road-cracks-in-lalpur-just-two-hours-after-construction-villagers-complain-to-sdm-shahpura-mla-performed-groundbreaking-ceremony/',
    note: 'Status: nirman poora lekin gunvatta vivaad — sadak banne ke 2 ghante me kayi jagah dararein; graminon ne bhrashtachar/gunvatta ke aarop lagaye, SDM ko shikayat, SDM ne janch ka aashwasan diya; koi FIR/case ya vidhayak ka jawab report nahi — isliye negative entry ke maapdand poore nahi hote, ye normal works entry hai. Ye vidhayak-nidhi (MLA fund) hai, sansad-nidhi (MP fund) nahi. Bhumi-pujan vidhayak ne kiya tha. Source chhota local portal (The Narmada Express) — disclosure ke saath joda gaya.',
    period: '2023-2028',
  },
  {
    title: 'Kui aur Ramguda me sadak, samudayik bhavan aur buniyadi suvidhaon ka bhumi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Amar Ujala, Feb 2026',
    date: '2026-02',
    sourceUrl: 'https://www.amarujala.com/video/madhya-pradesh/dindori/development-works-launched-in-kui-and-ramguda-dindori-news-c-1-1-noi1225-3924739-2026-02-07',
    note: 'Status: shilanyas/bhumi-pujan — sadak nirman, samudayik bhavan aur buniyadi suvidhaon se jude kayi kaam; vyaktigat laagat report nahi; MLA ne kaha dono panchayaton me kai nayi yojnayen swikrit hain. Credit-pardarshita: shasakiya yojnaon ke kaam, MLA ne bhumi-pujan kiya aur adhikariyon ko samay-seema me gunvatta ke saath poora karne ke nirdesh diye. Attribution-pardarshita: article swayam ise Shahpura vidhayak ka karyakram batata hai; Ramguda GP Shahpura AC factbook me suchit hai aur Kui Mal village directory me Shahpura AC ke antargat — kshetra ke andar ki pushti.',
    period: '2023-2028',
  },
  {
    title: 'Shahpur me Ghunsi nadi ghat nirman ka bhumi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Pride Kadam, Jan 2025',
    date: '2025-01',
    sourceUrl: 'https://www.pridekadam.co.in/2025/01/47264/',
    note: 'Status: shilanyas/bhumi-pujan — Ghunsi nadi par ghat nirman; laagat report nahi. Credit-pardarshita: Dindori-cluster shivir (Dindori janpad) me MLA mukhya atithi ke roop me bhumi-pujan; Shahpur RI circle Shahpura AC (103) ke andar aata hai isliye kshetra ke andar mana gaya; kaam shasakiya yojna ka. Source chhota local portal (Pride Kadam) — disclosure ke saath joda gaya.',
    period: '2023-2028',
  },
];

mpWorks['omkar-singh-markam'] = [
  {
    title: 'Dindori ke school-college me Rs 2.5 crore vidhayak-nidhi se 1000+ table-kursi vitarit',
    category: 'School',
    badge: 'news',
    sourceLabel: 'ETV Bharat, May 2026',
    date: '2026-05',
    sourceUrl: 'https://www.etvbharat.com/hi/state/dhindori-school-furniture-fund-mla-omkar-singh-markam-distributes-chair-table-written-personal-name-mps26051600950',
    note: 'Status: vitarit (poora) — ETV Bharat ki ground-report ke mutabik vidhayak ne apni vidhan sabha ke school-college me lagbhag Rs 2.5 crore ki lagat se 1000 se adhik table-kursi kharidi aur baanti; sarkari college ke pradhyapak ne milna pushti kiya. Ye vidhayak-nidhi (MLA fund) hai, sansad-nidhi (MP fund) nahi. Credit-pardarshita: har table-kursi par vidhayak ka naam bada sticker lagaya gaya, jilaa prashasan se shikayat + collector ne jaanch samiti banayi + prabhari mantri Pratima Bagri ne jaanch ke aadesh diye (article ke anusaar). Vidhayak ka jawab: "janheet ka kaam kiya hai, bachche zameen par baithte the; vidhayak-nidhi ke kaam me naam likhwane me kuch galat nahi". FIR ya case ka zikr report me nahi — jaanch ki sthiti ke baare me aage ki khabar nahi mili, isliye negative entry nahi banayi, sirf kaam ki entry poore disclosure ke saath.',
    period: '2023-2028',
  },
];

// REJECT-LOG (Dindori district batch, researched 2026-10-14):
// - Omprakash Dhurwey: 13 (YouTube-only x2, public.app-only x3, Dec-2023-se-pehle ka x1 (saath me doosre MLA par aarop), MLA-vs-Collector vivaad bina case, kamzor AC-attribution x2 (Dindori-cluster works jahan AC verify nahi hua), vague Trilok News x1, election profiles, PM-Modi projects, galat-vyakti Bhilwara x3)
// - Omkar Singh Markam: 16 (sirf maang/prastav x2 (rail corridor patra, MGNREGA chetawani), mantri-karyakaal ki khabar x1, galat vyakti x4 (sab Dhurve ke kaam), Dec-2023-se-pehle x1, rajya-stariya ghoshna bina MLA bhoomika x2, sirf maujoodgi x2, YouTube-only x1, profile/biography/party-sangathan news x3)
// Vistarit reject-log dono worker fragments me: ~/workspace/aapkaneta_scratch/dindori_dhurwey.ts, ~/workspace/aapkaneta_scratch/dindori_markam.ts
// ---- Guna district batch (researched 2026-10-14) ----
// Guna jila: 4 MLA. Panna Lal Shakya (BJP, Guna SC AC-29): 11 entries. Priyanka Penchi (BJP, Chachoura AC-30): 2 entries. Rishi Agrawal (INC, Bamori AC-28): 0 (khali profile). Jaivardhan Singh (INC, Raghogarh AC-31): 0 (khali profile). Coordinator audit: Penchi ki Beenaganj hospital 'swikriti' entry blog-only hone par hatayi gayi; sabhi entries period 2023-2028, Dec 2023+ karyakaal.

mpWorks['panna-lal-shakya'] = [
  {
    title: 'Hilgana ke Gaader me Rs 20 lakh ki gravel sadak — vidhayak-nidhi se swikrit',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 17 Jan 2026',
    sourceUrl: 'https://www.patrika.com/guna-news/mla-pannalal-shakya-report-card-guna-mla-fund-ignored-education-mp-news-20266539',
    date: '2026-01-17',
    note: 'Patrika ne yojana evam sankhyiki vibhag ke hawale se likha: FY 2025-26 ki Rs 2.5 crore vidhayak-nidhi me se 28 anushansit prastavon par 19 karya swikrit hue (kul Rs 2.5 crore), in me se ek ye gravel road hai. GO number khabar me nahi. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. Disclosure: Patrika ki alochana bhi saath me — 19 swikrit karyon me ek bhi shiksha/swasthya se nahi juda tha.',
    period: '2023-2028',
  },
  {
    title: 'Semra me Rs 10 lakh ka kharanja — vidhayak-nidhi se swikrit',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 17 Jan 2026',
    sourceUrl: 'https://www.patrika.com/guna-news/mla-pannalal-shakya-report-card-guna-mla-fund-ignored-education-mp-news-20266539',
    date: '2026-01-17',
    note: 'Usi Patrika report ke mutabik FY 2025-26 ki vidhayak-nidhi se swikrit 19 karyon me se ek: Semra me Rs 10 lakh ka kharanja. GO number khabar me nahi. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. Disclosure: Patrika ne report me ye bhi likha ki karya chuninda panchayaton (Vinayak Khedi, Mahugadha, Bhaura) me concentrate rahe aur kuch gaon walon ko sirf ashwasan mila.',
    period: '2023-2028',
  },
  {
    title: 'Khajuri me Rs 25 lakh ki CC sadak — vidhayak-nidhi se swikrit',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 17 Jan 2026',
    sourceUrl: 'https://www.patrika.com/guna-news/mla-pannalal-shakya-report-card-guna-mla-fund-ignored-education-mp-news-20266539',
    date: '2026-01-17',
    note: 'FY 2025-26 vidhayak-nidhi ke 19 swikrit karyon me se ek: Khajuri me Rs 25 lakh ki CC road (Patrika, yojana evam sankhyiki vibhag ke hawale se). GO number khabar me nahi. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi.',
    period: '2023-2028',
  },
  {
    title: 'Richhera me Rs 12 lakh ki CC sadak — vidhayak-nidhi se swikrit',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 17 Jan 2026',
    sourceUrl: 'https://www.patrika.com/guna-news/mla-pannalal-shakya-report-card-guna-mla-fund-ignored-education-mp-news-20266539',
    date: '2026-01-17',
    note: 'FY 2025-26 vidhayak-nidhi ke 19 swikrit karyon me se ek: Richhera me Rs 12 lakh ki CC road (Patrika, yojana evam sankhyiki vibhag ke hawale se). GO number khabar me nahi. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi.',
    period: '2023-2028',
  },
  {
    title: 'Budhakheda me Rs 15 lakh ki sadak — vidhayak-nidhi se swikrit',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 17 Jan 2026',
    sourceUrl: 'https://www.patrika.com/guna-news/mla-pannalal-shakya-report-card-guna-mla-fund-ignored-education-mp-news-20266539',
    date: '2026-01-17',
    note: 'FY 2025-26 vidhayak-nidhi ke 19 swikrit karyon me se ek: Budhakheda me Rs 15 lakh ki sadak (Patrika, yojana evam sankhyiki vibhag ke hawale se). GO number khabar me nahi. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi.',
    period: '2023-2028',
  },
  {
    title: 'Gedabarra me Rs 20 lakh ka check dam — vidhayak-nidhi se swikrit',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Patrika, 17 Jan 2026',
    sourceUrl: 'https://www.patrika.com/guna-news/mla-pannalal-shakya-report-card-guna-mla-fund-ignored-education-mp-news-20266539',
    date: '2026-01-17',
    note: 'FY 2025-26 vidhayak-nidhi ke 19 swikrit karyon me se ek: Gedabarra me Rs 20 lakh ka check dam (jal sanrakshan; Patrika, yojana evam sankhyiki vibhag ke hawale se). GO number khabar me nahi. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi.',
    period: '2023-2028',
  },
  {
    title: 'Jetadongar me Rs 10 lakh ka stop dam — vidhayak-nidhi se swikrit',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Patrika, 17 Jan 2026',
    sourceUrl: 'https://www.patrika.com/guna-news/mla-pannalal-shakya-report-card-guna-mla-fund-ignored-education-mp-news-20266539',
    date: '2026-01-17',
    note: 'FY 2025-26 vidhayak-nidhi ke 19 swikrit karyon me se ek: Jetadongar me Rs 10 lakh ka stop dam (jal sanrakshan; Patrika, yojana evam sankhyiki vibhag ke hawale se). GO number khabar me nahi. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi.',
    period: '2023-2028',
  },
  {
    title: 'Mahugadha me Rs 15 lakh ki boundary wall — vidhayak-nidhi se swikrit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Patrika, 17 Jan 2026',
    sourceUrl: 'https://www.patrika.com/guna-news/mla-pannalal-shakya-report-card-guna-mla-fund-ignored-education-mp-news-20266539',
    date: '2026-01-17',
    note: 'FY 2025-26 vidhayak-nidhi ke 19 swikrit karyon me se ek: Mahugadha me Rs 15 lakh ki boundary wall (Patrika, yojana evam sankhyiki vibhag ke hawale se). GO number khabar me nahi. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. Disclosure: Patrika ke mutabik Mahugadha ko vidhayak-nidhi se "bharpur hissa" mila.',
    period: '2023-2028',
  },
  {
    title: 'Mahugadha me Rs 20 lakh ka pavers karya — vidhayak-nidhi se swikrit',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 17 Jan 2026',
    sourceUrl: 'https://www.patrika.com/guna-news/mla-pannalal-shakya-report-card-guna-mla-fund-ignored-education-mp-news-20266539',
    date: '2026-01-17',
    note: 'FY 2025-26 vidhayak-nidhi ke 19 swikrit karyon me se ek: Mahugadha me Rs 20 lakh ka pavers kary (Patrika, yojana evam sankhyiki vibhag ke hawale se). GO number khabar me nahi. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi.',
    period: '2023-2028',
  },
  {
    title: 'Bhaura me Rs 25 lakh se puliya aur naali nirman — vidhayak-nidhi se swikrit',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 17 Jan 2026',
    sourceUrl: 'https://www.patrika.com/guna-news/mla-pannalal-shakya-report-card-guna-mla-fund-ignored-education-mp-news-20266539',
    date: '2026-01-17',
    note: 'FY 2025-26 vidhayak-nidhi ke 19 swikrit karyon me se ek: Bhaura me Rs 25 lakh ke puliya aur naali nirman (Patrika, yojana evam sankhyiki vibhag ke hawale se). GO number khabar me nahi. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. Disclosure: Patrika ke mutabik Bhaura ko vidhayak-nidhi se "bharpur hissa" mila.',
    period: '2023-2028',
  },
  {
    title: 'Gulabganj road (Cant chauraha–Gulabganj, ~1.5 km, Rs 3 crore ghoshna)',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'ETV Bharat, 19 Sep 2026',
    sourceUrl: 'https://www.etvbharat.com/hi/state/guna-gulabganj-road-villagers-demand-warning-jyotiraditya-scindia-displeasure-pannalal-shakya-explanation-mps26091904708',
    date: '2026-09-19',
    note: 'GHOSHNA STAGE. ETV Bharat: graminon ne sadak ki maang par MP Scindia ka kafila roka ("road nahin to vote nahin", video viral); aadhe ghante baad munch se MP Scindia ne ghoshna ki ki CM ki Rs 15 crore vishesh adhosaunchana nidhi (har MLA ko milne wali, "Mukhya Mantri Adhosanrachana Yojana") me se Rs 3 crore is sadak ke liye swikrit karwayenge; DPR taiyaar; kaam monsoon ke baad; collector ko nirdesh. MLA Panna Lal Shakya ka apna dawa (ETV se baatcheet me): "4 mahine se prayas kar rahe hain, CM sachivalaya ko 4 mahine pehle application bheja tha; barish me sadak ka kaam hota nahi isliye ruka tha, sirf rashi aani shesh thi." POORA DISCLOSURE: ghoshna MP ne ki, MLA ne nahi; sanction order/GO number khabar me nahi; fund CM adhosaunchana yojana ka MLA-quota hai — ye vidhayak-nidhi (Rs 2.5 crore LAD) bhi nahi aur sansad-nidhi (MP fund) bhi nahi (doosre portals ne ise "vidhayak nidhi" likha, lekin ETV me Scindia ke shabdon me CM ki vishesh nidhi hai).',
    period: '2023-2028',
  },
];

// REJECT-LOG (har rejected item, ek line me — kyun reject):
// 1. Bansalnews, 27 Nov 2025 (khola tha): Rs 52 crore ke 2 railway overbridge ka bhoomi-pujan — ye LS sansad Scindia ka karyakram tha; MLA sirf manch par bole, khud kaha 'Maharaj sahab ki kripa hai... ye sabhi Guna vidhan sabha me hue hain'; unki koi nidhi/anushansa/lokarpan-bhoomika spasht nahi — Scindia-rule REJECT. https://bansalnews.com/madhya-pradesh/guna-bjp-mla-pannalal-shakya-vs-collector-wks-10817666
// 2. AajTak 11 Mar 2026 + Amar Ujala 9 Mar 2026 (AajTak khola tha): hammer se PWD sadak quality nirikshan — sirf nirikshan/daura, koi kaam/bhoomi-pujan/lokarpan nahi — REJECT. https://www.aajtak.in/madhya-pradesh/story/mp-bjp-mla-pannalal-shakya-hammer-inspection-pwd-road-quality-guna-news-lcln-strc-2492443-2026-03-11
// 3. Vocaltv (+ livevns mirror), 8 Sep 2025: 69th rajya-stariya shaleya krida pratiyogita (boxing/judo) udghatan — karyakram me sirf maujoodgi/shubharambh, koi kshetra-kaam nahi — REJECT. https://vocaltv.in/madhya-pradesh/guna-mla-shakya-inaugurated-the-69th-state-level-sphp/cid17378402.htm
// 4. RNI News, Feb-Mar 2025: Dastak abhiyan (2nd phase) ka vitamin-A khurak pilakar shubharambh — sarkari abhiyan ka mukhya-atithi shubharambh, koi kaam nahi — REJECT. https://www.rninews.com/दस्तक-अभियान-के-द्वितीय-चरण-का-विधायक-ने-विटामिन-‘ए’-की-दवा-पिलाकर
// 5. 14-15 Jul 2024 (Times Now / India.com / Zee Salaam / thesootr / ETV Bharat): PM College of Excellence udghatan par "degree se kuch nahi hoga, puncture repair shop kholo" bayan — bayan-vivad + karyakram haziri; negative entry nahi (koi FIR/case/adhikarik karwai nahi, koi neta-jawab angle bhi case-level nahi) — REJECT. https://www.timesnownews.com/india/madhya-pradesh-bjp-mlas-advice-to-college-students-skip-degrees-open-puncture-repair-shops-article-111759772
// 6. Sep 2025 (Bhaskar English / Lokmat Times / TOI): "civil war / 18-30 saal walon ko mandatory military training" bayan — bayan-vivad; party ne Bhopal talba kiya lekin koi FIR/case/adhikarik karwai nahi — established reporting me case/FIR nahi, isliye negative entry nahi banti — REJECT. https://www.bhaskarenglish.in/local/mp/news/india-to-face-nepal-like-unrest-says-bjp-mla-pannalal-shakya-warns-of-domestic-conflict-135894800.html
// 7. NIE, Aug 2026: Devi Sita par "maut ka saamaan" bayan — bayan-vivad; chhote-portal statement-khabar negative entry ke bar (aarop + case/FIR + adhikarik karwai) ko poora nahi karti — REJECT.
// 8. Punjab Kesari, 5 Oct 2026: atikraman-hatayo abhiyan par collector par tanj ("upar se ghanti baj gayi") — sirf bayan/tanj, koi kaam nahi — REJECT. https://m.mp.punjabkesari.in/madhya-pradesh/news/bjp-mla-pannalal-shakya-takes-a-dig-at-the-action-taken-on-scindia-s-instruction-2386571?amp
// 9. FPJ, Sep 2026: Rs 30.47 crore theme road (Chintaharan–Ambedkar Chowk) bhoomi-pujan — CSR (GAIL/HFCL) funding, Scindia ka karyakram; MLA ki bhoomika/nidhi/anushansa khabar me spasht nahi — Scindia-rule REJECT. https://www.freepressjournal.in/amp/indore/scindia-lays-foundation-for-3047crore-theme-road-project-in-guna
// 10. Lokmat Times, 29 Jun 2026: Rs 350 crore pariyojnaon ke lokarpan/shilanyas (solar plant, ITI, substations, sadaken) — sab Scindia ke karyakram/lokarpan; MLA ki concrete bhoomika khabar me spasht nahi — Scindia-rule REJECT. https://www.lokmattimes.com/national/mp-scindia-lays-foundation-for-rs350-crore-development-projects-in-guna/
// 11. NBT / PeoplesUpdate, Dec 2025: Scindia se phone-par mazak ("hello pannalal ji, mera khayal rakhiega") — rajnetik banter, koi kaam nahi — REJECT. https://navbharattimes.indiatimes.com/state/madhya-pradesh/guna/scindia-fears-the-mla-he-says-on-the-phone-hello-pannalal-ji-please-take-care-of-me-hes-seen-taking-a-dig-at-the-guna-mla/articleshow/125694476.cms
// 12. sabkikhabar, Jun 2026: BJP pradesh adhyaksh dwara fatkar (Scindia-kheme ke mantriyon par bayanbaji) — party-internal mamla; koi FIR/case/adhikarik karwai nahi — negative entry nahi — REJECT. https://sabkikhabar.com/news.php?id=bhopal%20-1-629308
// 13. Naidunia, Sep 2025: "farzi misabandi pension le rahe hain" bayan (krida pratiyogita munch par) — sirf bayan, koi kaam nahi — REJECT. https://www.naidunia.com/madhya-pradesh/guna-guna-bjp-mla-pannalal-shakya-made-a-big-claim-8404616
// 14. 2023-28 tenure me koi sarkari GO/order, alag lokarpan/bhoomi-pujan ya hospital/school/water ka concrete kaam (Dec 2023 ke baad ka) kisi credible source me nahi mila; uparokt 11 entries hi poora qualifying set hain. Patrika ki 19 swikrit me se 10 hi list me the — baaki 9 ke naam/ rakam khabar me nahi the, isliye entry nahi ban sakti.

// PARENT QA NOTE (2026-10-14): priyanka-penchi ki Kumbhraj pariyojna (Rs 5,138 cr) wali swikriti entry
// HATA di gayi — ekmatra source ek blogspot blog tha; itni badi rajya-pariyojna + swikriti stage ke liye
// established media/sarkari praman chahiye (wahi standard jo Beenaganj entry par coordinator ne lagaya tha).
// Project ka astitva alag baat hai; MLA-prayas ka dawa is saboot par entry ke layak nahi.
mpWorks['priyanka-penchi'] = [
  {
    title: 'Chachoura ke liye Rs 54.60 crore ki sadak-flyover yojna aur 5881 naye PMAY awas — MLA ka swikriti-dawa',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'Reportage News International (RNI), 13 June 2025',
    sourceUrl: 'https://www.rninews.com/मुख्यमंत्री-से-मिलीं-चाचौड़ा-विधायक-प्रियंका-मीणा',
    date: '2025-06-13',
    note: 'Poora disclosure: ye MLA ka swayam ka dawa hai jo report me chhapa — unhone CM se bhet karke Rs 54.60 crore ki sadak-flyover yojna aur PMAY ke tahat 5881 naye awason ki swikriti par aabhar jataya. Report me koi GO/adisuchana sankhya ya sanction-order ka praman nahi diya gaya, isliye ye sirf ghoshna/dawa stage par record hai. Fund vidhayak-nidhi nahi lagta (lagat state budget jaisi), sansad-nidhi bhi nahi.',
    period: '2023-2028',
  },
];

// REJECT-LOG (har rejected item ek line me: kyun reject)
// 1. satyarath.com/news/79342 (Aug 2024, "13 karyaon ki manzoori" press-note): source fetch failed — khud padh nahi sake, snippet se entry banana allowed nahi.
// 2. gramsparshmadhusudangarh.blogspot.com/2024/10 (Oct 2024, MLA ki samiksha baithak): sirf nirikshan/nirdesh — kaam nahi.
// 3. vocaltv.in — mantri Govind Singh Rajput ne Rs 815.64 lakh (26 karyaon) ka bhoomi-pujan/lokarpan kiya, Chachoura Beenaganj (Apr 2025): MLA sirf upasthit — maujoodgi kaam nahi.
// 4. bhaskar.com — Kumbhraj nava-nirmit tehsil bhavan (Jan 2026): collector ne shubharambh kiya, MLA baad me pahunchi aur nirikshan kiya — sirf nirikshan.
// 5. samarsaleel.com — Teligao Jan-Vishwas abhiyan (Oct 2026): jan-samvad + adhikariyon ko nirdesh — kaam nahi.
// 6. samarsaleel.com — Beenaganj swasthya/netra shivir (Oct 2026): 480 students ki janch, MLA ne 20 chashme baante — karyakram me maujoodgi, sthayi nirman/kaam nahi.
// 7. navbharattimes.indiatimes.com / sabkikhabar / bansalnews — Beenaganj kabaddi-maidan stage vivad (Sep 2026): bayan/vivad khabar — negative entry ka criteria poora nahi karta (koi aarop + case/FIR/adhikarik karwai MLA par nahi); kaam bhi nahi.
// 8. TOI / bhaskarenglish / npg.news — MLA vs Guna SP Ankit Soni patra-vivad (May-Jun 2025): police-transfer par aarop-vivad; MLA ke viruddh koi case/FIR/karwai nahi, IG ne "sulajh gaya" kaha — negative-entry rule poora nahi karta.
// 9. NDTV / Indian Express / latestly — Balaram Mahotsav me MLA Pannalal Shakya ke bayan par Penchi ki apatti (Aug 2026): doosre neta ke bayan par apatti — MLA ka kaam ya unpar vivad nahi.
// 10. hindi.news18.com — CM ke samne "Narendra Singh Modi" galti (Jul 2025): zabani-chook ki khabar — kaam ya negative entry nahi.
// 11. mp.punjabkesari.in — MLA ne CM ko Kumbhraj bandh/dam-sthan par shikayati patra likha (Oct 2025): sirf maang/patra — kaam nahi.
// 12. lokmattimes.com — Scindia ne Guna me Rs 350 crore pariyojnaon ki neev (Jul 2026): LS sansad ka karyakram, MLA ki bhoomika khabar me spasht nahi — reject.
// 13. Coordinator audit (2026-10-14): Worker ne Beenaganj CHC ke 50-bistar civil hospital me unnayan ki 'CM swikriti' entry di thi (gramsparshmadhusudangarh.blogspot.com, Jul 2026) — ekmatra chhota kshetriya blog, koi GO/sanction-order number nahi, aur established media me is specific unnayan ki koi pushti nahi — swikriti-stage rule (Chhindwara precedent) fail hone par entry hatayi gayi.

mpWorks['rishi-agrawal'] = [
  // EMPTY PROFILE — qualifying entry nahi mili.
  // Dec 2023 se ab tak Hindi+English news me ~10 targeted searches + 6 sources khud khole gaye.
  // Mili hui saari items reject-rules me aayi (REJECT-LOG neeche). Isliye profile khaali rakha hai.
];

// REJECT-LOG (har rejected item ek line me — kyun reject):
// 1. Fatehgarh State Highway gunvatta-vivad (YouTube, politicswala) — REJECT: source YouTube-only (allowed nahi) + sirf nirikshan/daura (thekedaar ko daant), kaam nahi.
// 2. Naidunia 02-08-2026: sadak hadse ke ghayalon ko apni gaadi se aspatal pahunchaya (Khairikhata road) — REJECT: manviya karya hai, vikas-kaam (work) nahi; source khud khola.
// 3. Navbharat Times 12-10-2026: bamori ke yuvakon ne apne paiso se (sawa lakh+) 2 sarkari school (Madhai, Tarapur) sudhare; MLA sirf karyakram me mukhya atithi the, bhashan se prerana — REJECT: sirf maujoodgi/prerana, MLA ki concrete bhoomika ya nidhi nahi; source khud khola.
// 4. Gram Sparsh blog 25-06-2025: baadh rahat daura (Fatehgarh/Vishnupura/Kapasi/Banda), niji kharch se raahat kit — REJECT: rahat-karya vikas-kaam nahi + blog source; source khud khola.
// 5. PublicTV Samachar 26-08-2025: bamori college bhawan (2019 me swikrit, 17-03-2023 ko 5.34 cr prashasnik swikriti — dono tenure se pehle); MLA ne vidhan sabha me sawal uthaya, uske baad 14-05-2025 ko bhawan Guna PG college ko saunpa gaya, lekin padhane wale pad abhi bhi swikrit nahi, taala laga hai — REJECT: kaam pre-tenure + MLA ki bhoomika sirf sawal; source khud khola.
// 6. ETV Bharat 24-11-2025: makka MSP press-varta (sarkar par aarop) — REJECT: rajnaitik bayan/aarop, koi vikas-kaam nahi; source khud khola.
// 7. Prabhasakshi 19-09-2026: Scindia ne Guna (Pannalal Shakya) vidhayak-nidhi se 3 cr sadak manjur ki — REJECT: doosre vidhayak (Guna AC) ki nidhi, Rishi Agrawal ka koi role nahi, kshetra bhi Bamori nahi; source khud khola.
// 8. NTV Time (Mar 2025): Fatehgarh me school chhatrao ka hadsa, MLA mauqe par pahunche — REJECT: sirf maujoodgi, kaam nahi.
// 9. TheDelhiToday: kisan ki maut par BJP booth adhyaksh nishkasit, MLA ka sarkar par bayan — REJECT: rajnaitik bayan, vikas-kaam nahi.
// 10. MP First: bamori ke schoolon ki badhali (2020 BJP sarkar ke davo par) — REJECT: pre-tenure sandarbh, Rishi Agrawal ka koi kaam nahi.
// 11. public.app: Scindia ne 11.64 cr ki 3 sadakon ka lokarpan kiya, MLA maujood — REJECT: source public.app-only (allowed nahi) + Scindia karyakram me sirf haziri, MLA ki nidhi/bhoomi-pujan spasht nahi.
// 12. YouTube (Khabar MP): Marki-Mahu aspatal bhawan me aniyamitta par MLA ki fatkaar — REJECT: YouTube-only + sirf nirikshan/daant, kaam nahi.
// 13. Naam-doppelganger filter: Premchand Agrawal (Rishikesh, Uttarakhand) aur Brijmohan Agrawal (Raipur MP) ki khabrein — REJECT: galat vyakti, Bamori/Guna se sambandh nahi.

mpWorks['jaivardhan-singh'] = [];

// REJECT-LOG (har rejected item, ek line me — kyun reject):
// 1. Jansamachar24, 13 Dec 2025, "Muni Nirlep Sagar Marg lokarpan": road ka naamkaran Nagar Palika Raghogarh-Vijaypur ne kiya tha, MLA sirf pattika-anavaran me mukhya atithi (siraf maujoodgi) — REJECT. https://jansamachar24.com/?p=79090
// 2. Wahi khabar: "gaonshaala ke liye naye satra me April me tin shed ke liye Rs 5 lakh vidhayak-nidhi se swikrit karenge" — bhavishya ki ghoshna ("karenge"), sanction order/GO ka koi saboot nahi — REJECT (ghoshna + future work). https://jansamachar24.com/?p=79090
// 3. public.app-only, 3 Mar 2025: Mahadevapura me Tantya Mama pratima par vidhayak-nidhi se Rs 10 lakh ki ghoshna — SOURCE REJECT (public.app-only) + ghoshna-type khabar, koi sanction saboot nahi. https://public.app/video/sp_sh3j3ane0kqxt
// 4. public.app-only, 6 Mar 2025: Raghogarh nagar palika me vikas-samiksha baithak (sirf nirdesh/baithak, koi kaam nahi) — SOURCE REJECT + sirf baithak. https://public.app/amp_video/sp_09h1uz1ul40lc
// 5. public.app-only, 2 Oct 2026 (dated, Raghogarh bus-stand building inspection): sirf nirikshan (inspection), koi kaam/bhoomi-pujan/lokarpan nahi — SOURCE REJECT + inspection-only. https://public.app/video/sp_ag8lg615xf7e0
// 6. public.app-only, 21 Dec 2025: Raghogarh ward-6 Shah samaj samudayik bhavan lokarpan (fita kaatna) — SOURCE REJECT (public.app-only), koi non-aggregator alternate source nahi mili. https://public.app/video/sp_mkosfzwys9f2n
// 7. public.app-only, 26 Jan: Rajnakhedi Veer Maharaj dev sthal par CC kharanja + pavers block lokarpan — SOURCE REJECT (public.app-only). https://public.app/video/sp_90aoq5i22k178
// 8. public.app-only, 4 Sep: Gram panchayat Barod (Aron) me naveen panchayat bhavan + samudayik bhavan lokarpan — SOURCE REJECT (public.app-only); non-public.app duplicate source nahi mili. https://public.app/video/sp_p9dk944otqe3h
// 9. theSootr: Guna ke Maksuranganj me "kagaz me chal rahe" farzi aspataal par CM sveccha-anudan se Rs 48 lakh — MLA ke vidhan-sabha sawal se khulasa hua; ye vidhanik nigrani (oversight) hai, koi development kaam nahi — REJECT (not a work). https://thesootr.com/state/madhya-pradesh/fake-hospital-revealed-cm-relief-fund-fraud-9635859
// 10. Aug 2025 se kai sources: Guna jila Congress adhyaksh niyukti par virodh/pragyaapan — sangathanik rajneeti, kshetra-kaam nahi — REJECT.
// 11. Vidhan-sabha budget session Mar 2025 me schoolon me 7000 shikshakon ki kami ka sawal — sawal/mang, kaam nahi — REJECT.
// 12. 2018-20 mantri-karyakaal ke kaam (metro MoU, e-rickshaw, shav-vahan nirdesh): task instructions ke hisab se current karyakaal (Dec 2023-) se pehle ka sab kuch REJECT — NOT TAKEN.

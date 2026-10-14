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

// ---- Gwalior district batch (researched 2026-10-14) ----
// Gwalior jila: 6 MLA. Sahab Singh Gurjar (INC, Gwalior Rural AC-14): 1 entry (negative: BNS FIR Jul 2024, ThePrint/PTI — teeno paksh spasht; karyakaal me koi verified vikas-kaam nahi). Pradhuman Singh Tomar (BJP, Gwalior AC-15, Urja Mantri): 2 entries (Hazira Civil Hospital ICU/CT/ultrasound lokarpan — personal pehal + Power Grid CSR, credit-transparency; Ward-15 park bhoomi-pujan) — sabhi urja-vibhag ke rajya-stariya kaam reject. Dr Satish Sikarwar (INC, Gwalior East AC-16): 4 entries (Ward 28/22 CC sadak, mandir jeernoddhar + nala, Parihar/Shiv Nagar galiyan — sab MLA dwara khud kiye gaye bhoomi-pujan, chhote local portal disclosure). Narayan Singh Kushwah (BJP, Gwalior South AC-17, mantri): 4 entries (Ward 37 Laxmiganj Rs 1.20cr + Jivajiganj Rs 45L kayakalp sadak bhoomi-pujan; Ward 38 Kalkavihar Rs 11L, Navgrah Colony Rs 15L CC sadak bhoomi-pujan — sab AC-17 ke kshetriya kaam, kayakalp state-scheme ka shrey note me disclose; 2 glitched URLs coordinator ne verify karke theek kiye). Mohan Singh Rathore (BJP, Bhitarwar AC-18): 3 entries (Bhitarwar mandi Rs 1.23cr vittiya swikriti — board-issued, small portal disclosure; Deendayal stadium bhoomi-pujan Rs 2.19cr vidhayak-nidhi — Scindia ne bhoomi-pujan kiya, nidhi MLA ki, baaki events reject; Bhitarwar bypass daawa — dawa badge/ghoshna). Suresh Raje (INC, Dabra SC AC-19): 4 entries (Salaiya + Bhaisnari CC sadak lokarpan; 5 + 6 panchayaton ko tanker vitran — alag-alag panchayat suchi, duplicate nahi). Coordinator audit: sabhi entries period 2023-2028, Dec 2023+ karyakaal; Scindia-events me sirf-maujoodgi wali sab entries reject (Needam ROB, CM/Scindia lokarpan events).

mpWorks['sahab-singh-gurjar'] = [
  {
    title: 'Gwalior me Mau Pahari ki mahilaon se maar-peet ka aarop — BNS 115(2) aur 296 ke tahat MLA ke khilaf FIR darj, MLA ne aaropon se inkaar kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'ThePrint (PTI), 30 Jul 2024',
    sourceUrl: 'https://theprint.in/india/congress-mla-booked-for-attacking-women-he-claims-political-conspiracy/2199288/',
    date: '2024-07-30',
    note: 'Aarop: Mau Pahari gaon ki mahilayein kharab bijli transformer ki samasya lekar MLA ke Ohadpur (Mahalgaon) niwas par gayi thi; unka dawa hai ki wahan maar-peet hui aur baal khinche gaye. SP Dharmveer Singh ke mutabik likhit shikayat par BNS ki dharaon 115(2) aur 296 me FIR darj hui, jaanch jaari. MLA ka jawab: aarop niradhar, unhone turant sambandhit adhikariyon se baat karke samasya suljhane ke nirdesh diye, poora mamla rajneetik saazish hai. Koi vikas-kaam nahi hai — karyakaal (2023-2028) ke dauran darj mamle ki PTI agency reporting hai; court me dosh-siddh hone ki khabar nahi mili.',
    period: '2023-2028',
  },
];

mpWorks['pradhuman-singh-tomar'] = [
  {
    title: 'Civil Hospital Hazira me ICU, 32-slice CT scan aur ultrasound suvidha ka lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Pradesh Times News, 4 Jan 2025',
    sourceUrl: 'https://pradeshtimesnews.com/icu-ct-scan-and-ultrasonography-machines-were-inaugurated-in-civil-hospital-hazira-gwalior/',
    date: '2025-01-04',
    note: 'Khabar ke mutabiq ye suvidhayein Tomar ki vyaktigat pehal par, unke bade bhai Sw. Devendra Singh Tomar ki smriti me shuru hui; shubharambh unki mata Sudha Tomar ke kar-kamlon se hua. Power Grid Corporation ne CSR mad se Rs 3 crore diye, jinse CT scan aur ultrasound machine khareedi gayi; furniture, AC aur do kakshon ka navinikaran bhi hua. Mool site par tarikh print nahi thi; usee khabar ke republication (ctnewsweb, khud khola gaya) par 2025-01-04 darj hai, jo khabar ke shanivar ke zikr se mel khata hai. Cath lab ki sthapna bhavishya ki yojna hai, is entry me shamil nahi. Ye vidhayak-nidhi nahi, CSR fund hai, sansad-nidhi (MP fund) bhi nahi.',
    period: '2023-2028',
  },
  {
    title: 'Upnagar Gwalior ke Ward-15, Line No. 4 Birla Nagar me Rs 88.65 lakh ke park ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindusthan Samachar, 7 Nov 2025',
    sourceUrl: 'https://www.hindusthansamachar.in/Encyc/2025/11/7/All-round-development-of-Gwalior-is-our-goal-Energ.php',
    date: '2025-11-07',
    note: 'Tomar ne swayam bhoomi-pujan kiya; khabar me fund ka srot (vidhayak-nidhi ya anya) nahi bataya gaya, isliye nidhi ka koi dawa nahi kiya gaya. Usi khabar me JC mill shramikon ko bhu-khand adhikar wale sankhya-dawon ka swatantra satyapan nahi mila, isliye wo is entry me shamil nahi.',
    period: '2023-2028',
  },
];

mpWorks['dr-satish-sikarwar'] = [
  {
    title: 'Ward 28 ke Adivasi Mohalla aur Bhimnagar me Rs 13 lakh ki CC sadkon ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Nand Kesari, 21 Jan 2025',
    sourceUrl: 'https://nandkesari.com/2025/01/21/%E0%A4%97%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A4%BF%E0%A4%AF%E0%A4%B0-%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%AF%E0%A4%95-%E0%A4%A1%E0%A5%89/',
    date: '2025-01-21',
    note: 'Vidhaayak ne khud kshetriya parshad aur MIC member Gayatri Sudhir Mandelia ke saath bhoomi-pujan kiya — ye sirf maujoodgi nahi, unki apni concrete bhoomika hai. Khabar me GO number ya work order ka zikr nahi hai, isliye stage sirf bhoomi-pujan likha gaya hai, swikriti nahi. Fund ka source khabar me spasht nahi hai, isliye vidhayak-nidhi ka dawa nahi kiya gaya; ye sansad-nidhi (MP fund) nahi hai. Chhota local portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Ward 22 ke Siddheshwar Nagar gali no 4 me Rs 16.5 lakh ki CC sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Chambal Breaking, 24 Sep 2025',
    sourceUrl: 'https://chambalbreaking.com/2025/09/gwalior-22/',
    date: '2025-09-24',
    note: 'Vidhaayak ne khud MIC member Gayatri Sudhir Mandelia aur parshad Pramod Khare ke saath bhoomi-pujan kiya — ye sirf maujoodgi nahi, unki apni concrete bhoomika hai. Kaam Siddheshwar Nagar gali no 4 se Gurjar Mohalla tak ki galiyon me hai. Khabar me GO number ya work order ka zikr nahi hai, isliye stage sirf bhoomi-pujan likha gaya hai, swikriti nahi. Fund ka source khabar me spasht nahi hai — ye sansad-nidhi (MP fund) nahi hai. Chhota local portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Ward 28 me Rs 18 lakh se Shitala Mata mandir ke jeernoddhar aur nala-nirman ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Chambal Breaking, 24 Sep 2025',
    sourceUrl: 'https://chambalbreaking.com/2025/09/gwalior-22/',
    date: '2025-09-24',
    note: 'Vidhaayak ne khud MIC member Gayatri Sudhir Mandelia aur parshad Pramod Khare ke saath bhoomi-pujan kiya — ye sirf maujoodgi nahi, unki apni concrete bhoomika hai. Rs 18 lakh ki lagat mandir jeernoddhar aur nala-nirman dono ke liye batayi gayi hai. Khabar me GO number ya work order ka zikr nahi hai, isliye stage sirf bhoomi-pujan likha gaya hai, swikriti nahi. Fund ka source khabar me spasht nahi hai — ye sansad-nidhi (MP fund) nahi hai. Chhota local portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Parihar Mohalla aur Shiv Nagar ki galiyon me CC sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Chambal Breaking, 24 Sep 2025',
    sourceUrl: 'https://chambalbreaking.com/2025/09/gwalior-22/',
    date: '2025-09-24',
    note: 'Vidhaayak ne khud MIC member Gayatri Sudhir Mandelia aur parshad Pramod Khare ke saath bhoomi-pujan kiya — ye sirf maujoodgi nahi, unki apni concrete bhoomika hai. Lagat khabar me nahi batayi gayi. Khabar me GO number ya work order ka zikr nahi hai, isliye stage sirf bhoomi-pujan likha gaya hai, swikriti nahi. Fund ka source khabar me spasht nahi hai — ye sansad-nidhi (MP fund) nahi hai. Chhota local portal hai.',
    period: '2023-2028',
  },
];

mpWorks['narayan-singh-kushwah'] = [
  {
    title: 'Ward 37 Laxmiganj me Rs 1.20 crore ki sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Live VNS (Hindustan Samachar), 28 Feb 2025',
    sourceUrl: 'https://livevns.news/state/madhyapradesh/government-committed-to-expanding-basic-facilities.php/cid16297696.htm',
    date: '2025-02-28',
    note: 'Gwalior South ke ward 37 me Muladas ki Kho, Fuljhadi karkhane ke peeche Laxmiganj me kayakalp yojana ke tehat Rs 1.20 crore ki sadak ka bhoomi-pujan khud Narayan Singh Kushwah ne sthaniya kanyaon se karaya. Ye sarkari kayakalp yojana (shahari sadak karyakram) ka kaam hai, vidhayak-nidhi nahi. GO number khabar me nahi diya gaya. Source chhota local portal hai jo Hindustan Samachar wire ki khabar chhaapta hai.',
    period: '2023-2028',
  },
  {
    title: 'Ward 37 Jivajiganj me Rs 45 lakh ki sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Live VNS (Hindustan Samachar), 28 Feb 2025',
    sourceUrl: 'https://livevns.news/state/madhyapradesh/government-committed-to-expanding-basic-facilities.php/cid16297696.htm',
    date: '2025-02-28',
    note: 'Gwalior South ke ward 37 me Nimmaji ki Kho, Jivajiganj ki galiyon me kayakalp yojana ke tehat Rs 45 lakh ki sadak ka bhoomi-pujan khud Narayan Singh Kushwah ne sthaniya kanyaon se karaya. Ye sarkari kayakalp yojana ka kaam hai, vidhayak-nidhi nahi. GO number khabar me nahi diya gaya. Source chhota local portal hai jo Hindustan Samachar wire ki khabar chhaapta hai.',
    period: '2023-2028',
  },
  {
    title: 'Ward 38 Kalkavihar me Rs 11 lakh ki CC sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Live VNS (Hindustan Samachar), 1 Dec 2024',
    sourceUrl: 'https://livevns.news/amp/state/madhyapradesh/minister-narayan-singh-kushwah.php/cid15806956.htm',
    date: '2024-12-01',
    note: 'Gwalior South ke ward 38 me Gali number 3, Kalkavihar Beldar ka Pura me Rs 11 lakh ki CC sadak ka bhoomi-pujan khud Narayan Singh Kushwah ne kiya, kshetriya janpratinidhiyon aur nagrikon ki upasthiti me. Nidhi ka srot khabar me nahi bataya gaya, GO number bhi nahi. Source chhota local portal hai jo Hindustan Samachar wire ki khabar chhaapta hai.',
    period: '2023-2028',
  },
  {
    title: 'Ward 38 Navgrah Colony Sector-1 me Rs 15 lakh ki CC sadak ka bhoomi-pujan — vidhayak-nidhi se',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Oneindia Hindi, 28 Apr 2025',
    sourceUrl: 'https://hindi.oneindia.com/news/gwalior/mp-road-development-work-inauguration-gwalior-madhya-pradesh-news-1281191.html',
    date: '2025-04-28',
    note: 'Gwalior South ke ward 38 me Navgrah Colony Sector-1 ki galiyon me CC sadkon ka bhoomi-pujan khud Narayan Singh Kushwah ne sthaniya kanyaon se karaya. Khabar ke mutabik Rs 15 lakh unhone apni vidhayak-nidhi se manjur ki hai, par GO/adesh ka zikr nahi hai. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi.',
    period: '2023-2028',
  },
];

mpWorks['mohan-singh-rathore'] = [
  {
    title: 'Bhitarwar me nayi krishi upaj mandi ke liye Rs 1.23 crore ki vittiya swikriti — vipanan board ne jaari ki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Aam Sabha, 23 Jul 2026',
    sourceUrl: 'https://dainikaamsabha.com/path-cleared-for-construction-of-new-agricultural-produce-market-in-bhitarwar/',
    date: '2026-07-23',
    note: 'MP Rajya Krishi Vipanan Board ne 13 July ko 24.339 hectare shaskiya bhoomi ke premium aur bhu-bhatak ke liye vittiya swikriti jaari ki. Khabar ke anusar vidhayak ne 10 July ko board ke ayukt se milkar maang rakhi thi, jis par board ne 4 din me swikriti di — vidhayak ki concrete bhoomika yahin hai. Ye swikriti vipanan board ki nidhi se hai, vidhayak-nidhi ya sansad-nidhi (MP fund) nahi. Source chhota sthaniya portal hai — disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Bhitarwar me Pt. Deendayal Upadhyay stadium ka bhoomi-pujan — Rs 2.19 crore vidhayak-nidhi se',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'India Today MP, 24 Mar 2025',
    sourceUrl: 'https://indiatodaymp.com/pandit-deendayal-upadhyay-stadium-to-be-built-in-bhitarwar-union-minister-scindia-inaugurated-the-development-work-of-crores-in-bhitarwar/',
    date: '2025-03-24',
    note: 'Karyakram me bhoomi-pujan kendriya mantri Jyotiraditya Scindia ne kiya, lekin stadium vidhayak-nidhi se ban raha hai — yahi vidhayak ki concrete bhoomika hai. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. Karyakram ke baaki lokarpan aur bhoomi-pujan (SDO karyalay, nagar panchayat bhawan, jal pradaya, substation) Scindia ne kiye, jisme vidhayak sirf maujood the — ve profile me jode nahi gaye.',
    period: '2023-2028',
  },
  {
    title: 'Bhitarwar bypass sadak ko budget satra me manjuri — vidhayak ka daawa',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'Hriday Stambha, 21 Feb 2026',
    sourceUrl: 'https://hridaystambha.com/mla-pc-bhitarwar/',
    date: '2026-02-21',
    note: 'Vidhayak ne press-conference me daawa kiya ki Rs 20 crore lagat ki 6 km lambi bypass sadak ko budget satra me manjuri mili hai aur PWD ne prakriya shuru kar di hai. Khabar me koi GO ya sanction order number nahi diya gaya, isliye stage ghoshna maana gaya hai. Press-conference ke baad vidhayak ne PWD adhikariyon ke saath prastavit marg ka sthal nirikshan bhi kiya. Ye vidhayak ka swayam-daawa hai — swatantra pushti khabar me nahi hai.',
    period: '2023-2028',
  },
];

mpWorks['suresh-raje'] = [
  {
    title: 'Gram Salaiya me Rs 7.5 lakh ki 250 meter CC sadak ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, 5 Apr 2026',
    sourceUrl: 'https://www.bhaskar.com/local/mp/gwalior/dabra/news/dabbra-mla-inaugurates-cc-road-in-salaiya-village-137621279.html',
    date: '2026-04-05',
    note: 'Dabra vidhansabha ke gram panchayat Veermadhana ke gram Salaiya me 250 meter lambi CC sadak bankar taiyaar; vidhayak Suresh Raje ne khud lokarpan kiya, sarpanch Rajkumari Naresh aur up-sarpanch Bhupendra Yadav maujood rahe. Nirman vidhayak-nidhi ki Rs 7.5 lakh rashi se hua. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. GO/sanction order number khabar me nahi; sadak poori hui hai isliye stage lokarpan.',
    period: '2023-2028',
  },
  {
    title: 'Gram Bhaisnari me Rs 10 lakh ki CC sadak ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, 25 Mar 2026',
    sourceUrl: 'https://www.bhaskar.com/local/mp/gwalior/dabra/news/dabra-mla-suresh-raje-inaugurates-10-lakh-cc-road-bhaisnari-village-137530752.html',
    date: '2026-03-25',
    note: 'Dabra ki gram panchayat Bhaisnari me main road se Rajoriya mohalla tak bani CC sadak ka lokarpan vidhayak Suresh Raje ne mukhya atithi ke roop me kiya. Grameenon ki maang par vidhayak ne apni nidhi se Rs 10 lakh swikrit kiye the; sadak bankar taiyaar ho gayi. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. GO number khabar me nahi; sadak poori hui hai isliye stage lokarpan (swikriti nahi) likhi hai.',
    period: '2023-2028',
  },
  {
    title: 'Dabra ki 5 gram panchayaton ko firefighter-yukt paani ke tanker — vidhayak-nidhi se vitran',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, 28 Sep 2025',
    sourceUrl: 'https://www.bhaskar.com/local/mp/gwalior/dabra/news/5-panchayats-got-water-tankers-from-mla-fund-136037789.html',
    date: '2025-09-28',
    note: 'Varsh 2025-26 ki vidhayak-nidhi se banwaye gaye firefighter upkaran-yukt paani ke tanker vidhayak karyalaya par Khadbai, Chetupada, Arushi, Ajaygarh aur Putti gram panchayaton ke sarpanchon/sachivon ko saupe gaye; vidhayak ne tankeron ka poojan karke supurd kiya. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. Kul rashi ka zikr khabar me nahi; stage poora hua/vitran.',
    period: '2023-2028',
  },
  {
    title: 'Dabra ki 6 gram panchayaton ko firefighter-yukt paani ke tanker — vidhayak-nidhi se vitran',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, 26 Sep 2025',
    sourceUrl: 'https://www.bhaskar.com/local/mp/gwalior/dabra/news/firefighter-equipment-given-to-6-panchayats-in-dabra-136021131.html',
    date: '2025-09-26',
    note: 'Varsh 2025-26 ki vidhayak-nidhi se nirmeet firefighter upkaran-yukt paani ke tanker vidhayak karyalaya me Nunhari, Devra, Bhaisnari, Bijakpur, Kariyavati aur Jhadoli gram panchayaton ko saupe gaye; vidhayak ne poojan ke baad supurd kiya. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. Kul rashi ka zikr khabar me nahi; stage poora hua/vitran.',
    period: '2023-2028',
  },
];
// ---- Harda district batch (researched 2026-10-14) ----
// Coordinator: Harda jila, 2 MLA (donon INC, karyakaal Dec 2023+)
// Sare sources khud kholkar padhe gaye hain. Sare titles/notes Roman Hinglish.

mpWorks['abhijeet-shah-ankit-baba'] = [
  {
    title: 'Gram Basigarh (Khirkia) me Rs 10.22 lakh ke anganwadi bhavan ka bhoomi pujan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Makdai Express24, 12 Dec 2023',
    sourceUrl: 'https://makdaiexpress24.com/timarni-%e0%a4%9f%e0%a4%bf%e0%a4%ae%e0%a4%b0%e0%a4%a8%e0%a5%80-%e0%a4%b8%e0%a4%bf%e0%a4%b0%e0%a4%be%e0%a4%b2%e0%a5%80-%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%be%e0%a4%af%e0%a4%95-%e0%a4%85%e0%a4%ad/',
    date: '2023-12-12',
    note: 'Chunav jeetne ke baad apne karyakaal ka pehla bhoomi pujan — Khirkia vikas khand ke gram Basigarh me Rs 10.22 lakh ki lagat se banne wale anganwadi bhavan ka bhoomi pujan swayam vidhayak Abhijeet Shah ne kiya; janpad adhyaksha Ranushri Dashrath Patel, janpad sadasya Hari Shankar Kajle sahit sthaniya neta maujood rahe. Srot chhota sthaniya portal hai (Makdai Express24, Harda) — ye disclosure note me rakha ja raha hai.',
    period: '2023-2028',
  },
  {
    title: 'Timarni me 19 sadkon ki swikriti ki ghoshna (press-conference me dawa)',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'The Tribal Post, 20 Aug 2025',
    sourceUrl: 'https://www.thetribalpost.com/2025/08/19.html',
    date: '2025-08-20',
    note: 'Ye MLA ka apna dawa hai jo press-conference me report hua — isliye badge dawa hai, news nahi. Vidhayak ne kaha ki 23 sadkon ki maang me se 19 sadkon ko sarkar ne swikrit kiya, aur ye unke prayason ka nateeja hai; poorv vidhayak Sanjay Shah ke shrey-lene ke dawe ko unhone nakara. Khabar me koi sanction order/GO number ya vibhagiya data nahi hai — bina pakke saboot ke swikriti nahi maani ja sakti, isliye stage sirf ghoshna likhi hai. Srot chhota sthaniya portal hai (The Tribal Post) — disclosure note me rakha gaya hai.',
    period: '2023-2028',
  },
];

mpWorks['dr-ram-kishore-dogne'] = [
  {
    title: 'Gram Gahal me Rs 5 lakh ki 120-meter CC sadak ka bhoomi pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Makdai Express24, 3 Jan 2025',
    sourceUrl: 'https://makdaiexpress24.com/cc-road-will-be-built-at-a-cost-of-rs-5-lakh-mla-mr-dogne-performed-the-bhoomi-pujan-of-120-meter-cc-road-construction-work/',
    date: '2025-01-03',
    note: 'Gram panchayat Gahal me Chaitram Khodre ke ghar se Gurjar Bhavan tak banne wali 120-meter CC sadak ka bhoomi pujan swayam vidhayak Dr. Ram Kishore Dogne ne kiya. Kaam vidhayak-nidhi ki Rs 5 lakh rashi se hoga — ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. Sarpanch Rukmani Baghel aur grameen maujood rahe. Srot chhota sthaniya portal hai (Makdai Express24, Harda) — disclosure note me rakha gaya hai.',
    period: '2023-2028',
  },
  {
    title: 'Gram Handiya ke Ganesh Mandal Chowk par Rs 3 lakh ke chhat-chabutra ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribal Post, 25 Aug 2025',
    sourceUrl: 'https://www.thetribalpost.com/2025/08/blog-post_61.html',
    date: '2025-08-25',
    note: 'Vitt varsh 2024-25 me vidhayak-nidhi se swikrit Rs 3 lakh ki lagat se bana chhat-chabutra (Ganesh Mandal Chowk, gram Handiya) bankar taiyaar hua; swayam vidhayak ne uska lokarpan kiya. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. Nirman poora hua hai isliye stage lokarpan (swikriti nahi) likhi hai. Srot chhota sthaniya portal hai (The Tribal Post) — disclosure note me rakha gaya hai.',
    period: '2023-2028',
  },
  {
    title: 'Gram Handiya ke Ward 01 me Rs 2.5 lakh ke sarvajanik chhat-chabutra ka bhoomi pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Tribal Post, 25 Aug 2025',
    sourceUrl: 'https://www.thetribalpost.com/2025/08/blog-post_61.html',
    date: '2025-08-25',
    note: 'Sanskritik karyakramon ke aayojan hetu gram Handiya ke Ward 01 me vidhayak-nidhi ki Rs 2.5 lakh rashi se swikrit sarvajanik chhat-chabutra nirman ka bhoomi pujan swayam vidhayak Dr. Ram Kishore Dogne ne grameenon ke saath milkar kiya. Ye vidhayak-nidhi hai, sansad-nidhi (MP fund) nahi. Srot chhota sthaniya portal hai (The Tribal Post) — disclosure note me rakha gaya hai.',
    period: '2023-2028',
  },
];

// ---- REJECT LOG (Harda batch) ----
// ABHIJEET SHAH (Timarni) — rejects:
// 1. Ganesh pratima nishulk vitran (Makdai Express24, Sep 2025) — dharmik muft vitran apne kharche par; verifiable public work nahi, reject.
// 2. Rs 50,000 apni salary se Mannasa gaon ki sadak/puliya ke liye (pradeshgaurav.com, Aug 2025) — vyaktigat nakad sahayata, documented public work nahi; saath me "200 meter sadak vidhayak-nidhi se swikrit" sirf press ghoshna thi, sanction order/work-order ka saboot nahi — Chhindwara niyam se reject.
// 3. "Vidhan Sabha me mudda uthayenge, PWD se sadak banwayenge" — bhavishya ka vaada, reject.
// RAM KISHORE DOGNE (Harda) — rejects:
// 1. Vidhan Sabha me dhoti pehenkar virodh (DNA, 2015-era) — pichle karyakaal ka + virodh, kaam nahi, reject.
// 2. PM Kisan karyakram me maujoodgi (Pawan City, Oct 2024) — PM yojana ke karyakram me sirf maujoodgi, reject.
// 3. Collector ko protocol-violation shikayat patra (Makdai Express24 / Anokha Teer, Mar 2024) — shikayat patra/gyapan, kaam nahi; jin pattharon ki baat hai wo PM ke virtual program ke sarkari karyaon ke the, reject.
// 4. Pokharni-Harda sadak ko lekar 35 km padyatra + gyapan (Sep 2026, MP Breaking News / Anokha Teer) — dharna/yatra/maang, kaam nahi; sadak ke dikhai dene wale bhoomi pujan ka shrey BJP ke poorv mantri Kamal Patel ko (article me credit-war) — MLA ke "Rs 17 crore manzoor karaya" counter-dave ka koi sanction saboot nahi, reject.
// 5. Gandhi kutiya (ETV Bharat, Oct 2019) — 2013-18 wale pichle karyakaal ka kaam, current tenure se bahar, reject.
// Koi negative entry nahi mili. Donon profiles me entries hain — koi khaali profile nahi rahi.

// ---- Indore district batch (researched 2026-10-14) ----
// Indore (MP ka 21va jila): 9/9 MLA (sab BJP, karyakaal Dec 2023+). Coordinator QA notes:
// - Golu Shukla ki Ward-64 entry (madhyapradeshdarshan.com, gambling-spam se polluted domain) coordinator ne hatayi.
// - Mahendra Hardia ki NBT Urdu-school entry (attached URL sambandhit nahi) hatayi.
// - Usha Thakur ki Nai Dunia Hasalpur entry (khabar verify nahi hui; attached URL galat) hatayi; AMRUT-2 wali entry ka badge dawa (MLA ka swayam ka "we have approved" dawa, GO nahi).
// - Silawat ki Shipra Rs. 61cr sadak entry (lokarpan PWD mantri ne kiya, Silawat sirf sah-mejban) hatayi.
// - Vijayvargiya entries 1-3 ke URLs par shaq hua tha — coordinator ne teeno articles khud kholkar verify kiye: FPJ sewer (solar-city headline wala article), FPJ kafir-remark event, ETV Malharganj — content sahi, rakhi gayi. Sirf Malharganj wali rashi (Rs. 7cr) verify nahi hui, hatayi.
// - Manoj Patel ki cabinet-sanction entry ka badge sarkari->news (Patrika report = news, sarkari record nahi).
// - Silawat fragment me galti se dohra 'const mpWorks' declaration tha — coordinator ne strip kiya (warna TS duplicate-declaration error aata).
// Works research: Manoj Nirbhay Singh Patel, Depalpur AC-203 (Indore, MP), BJP, Dec 2023-
// Sources opened and read directly. 2 entries pass; rest in REJECT-LOG.

mpWorks['manoj-nirbhay-singh-patel'] = [
  {
    title: 'Gautampura station par Indore-Jodhpur Express ka stoppage shuru — sansad ke saath sanyukt hari jhandi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Lalluram, 6 Sep 2025',
    sourceUrl: 'https://lalluram.com/mp-news-the-wait-is-over-indore-jodhpur-express-train-stops-at-gautampura-mp-and-mla-flagged-off/',
    date: '2025-09-05',
    note: 'Gautampura railway station par 5 Sep 2025 ko pehli baar Indore-Jodhpur Express ka stoppage hua; railway ne Sansad Shankar Lalwani aur Vidhayak Manoj Patel ko aamantrit karke train ko hari jhandi dikhwai. Stage: lokarpan (pehli train stoppage se seva shuru; MP ne aur platform + footbridge ki ghoshna ki — wo alag future ghoshna hai). Credit-pardarshita: 11 saal purani jan-maang thi; article ke mutabik Sansad ne Rail Mantri ko patra likha tha (maang ka netritva MP ka); MLA ki concrete bhoomika railway ke aamantran par sanyukt hari jhandi thi. Disclosure: source chhota regional portal (Lalluram, Raipur-based) hai, established media nahi.\nStatus: lokarpan/poora (stoppage 5 Sep 2025 se shuru).',
    period: '2023-2028',
  },
];
// PARENT QA NOTE (2026-10-14): manoj-patel ki Indore-Depalpur four-lane 'cabinet swikriti' entry HATA di —
// ye 12-sadak rajya package tha, MLA ki bhoomika sirf 'lambe samay se prayas' thi; koi dastavezi
// concrete kadam article me nahi (Guna/Penchi Kumbhraj precedent — rajya-pariyojna + prayas-dawa = entry nahi).
// Gautampura train entry rakhi hai: lokarpan-bhoomika unki thi, MP ke netritva ka disclosure note me hai.


// REJECT-LOG
// 1. EMS-India report (CM Mohan Yadav Depalpur visit, 26 Nov 2025): Rs. 1538 crore Chambal-Maan lift irrigation sanction + Indore-Depalpur 4-lane ghoshna + Gautampura college + PHC->CHC upgrade. REJECT as MLA entry: MLA sirf maujooda tha (maujoodgi rule); ye CM ki sarkari ghoshnaen hain, unki concrete bhoomika article me nahi.
// 2. Agnialok (Rs. 1.12 crore Resham Kendra-Birgoda road damrikaran, Shivraj era): REJECT — pre-Dec 2023 ("poorv vidhayak" + Shivraj CM), karyakaal se pehle ka kaam.
// 3. HinduismNow Global Press (Depalpur Rs. 100 crore Vishnu temple, trust chaired by MLA): REJECT — private religious trust ka project hai, vidhayak-nidhi/sarkari karya nahi; 1968-69 se chali aa rahi parampara ka trust nirmaan.
// 4. Rangeelapradesh (Depalpur-Sanwer Rs. 78.66 crore road cracks; MLA ki chuppi ka aarop): REJECT — negative-entry rule fail (chhota portal, bina case/FIR/adhikarik karwai, neta ka jawab bhi nahi); 2018 ka bhoomi-pujan bhi current tenure se pehle ka hai.
// 5. TOI + FPJ (Depalpur 100-day Swachh campaign; MLA ne sabse saaf ward ko Rs. 11 lakh personal award ghoshit): REJECT — bhavishya-ki ghoshna-type khabar (award promise, bina poorn karyanvayan saboot), campaign khud IMC ka tha.
// 6. public.app video (Nandbag ward 16 lokarpan): REJECT — banned source (public.app-only).
// 7. DNA India (election-time "koi vikas nahi" candidate speech, 2013-era story): REJECT — pre-election statement, current karyakaal ka karya nahi.
// 8. Amar Ujala (ticket protest rallies, Sep 2023): REJECT — election-time political khabar, karya nahi.
// 9. Times Now (Kailas Vijayvargiya effigy burn, Dec 2023): REJECT — political news, kshetra-kaam nahi.

// Kailash Vijayvargiya (BJP) — Indore-1 AC-204, term Dec 2023+; CABINET MANTRI (Nagriya Vikas)
// Mantri-niyam sakhti se: unke vibhag ke rajya-stariya faisle liye HI NAHI — sirf Indore-1 seat ke
// thos kaam jisme unki constituency-bhoomika (swayam shilanyas/lokarpan, ward corporator ke saath
// kshetra-karyakram) article me spasht ho. Researched 2026-10-14. Har entry khud khole gaye
// canonical article se; snippet se koi entry nahi bani.

mpWorks['kailash-vijayvargiya'] = [
  {
    title: 'Indore-1 (wards 13-17) me Rs. 53 crore ke sewer works ka bhoomi-pujan (AMRUT 2.0 + nigam nidhi)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 20 Nov 2025',
    sourceUrl: 'https://www.freepressjournal.in/indore/indore-news-city-to-become-solar-city-says-urban-development-minister-kailash-vijayvargiya',
    date: '2025-11-18',
    note: 'FPJ ke mutabik Vijayvargiya aur mahapaur Pushyamitra Bhargav ne milkar assembly constituency-1 me Rs. 53 crore ke vikas karyon ka bhoomi-pujan kiya: (1) AMRUT 2.0 package-02 — Rs. 40 crore, 30 km sewer network (250-900 mm), Ward 16-17, ~42,000 labharthi, Kanh nadi/nalon ki safai me sahayak; (2) nagar-nigam nidhi — Rs. 13 crore, 3.5 km primary sewer line (300-1200 mm) Laxmibai Statue se RR City tak, Chhota Bangarda Road par, Wards 13, 14, 16, ~32,000 labharthi. Stage: shilanyas-bhoomi pujan (karya hone wala tha; poora hone ki report nahi). Credit-paradarshita: AMRUT 2.0 kendra/rajya yojna aur nigam nidhi hai — unki Indore-1 ke MLA ke naate concrete bhoomika article me spasht hai (unhone swayam apne kshetra me mahapaur ke saath bhoomi-pujan kiya). Mantri-niyam ke mutabik ye seat-kaam hai, statewide ghoshna nahi. Article me event "Tuesday" bataya aur publish 2025-11-20 hua — event date 2025-11-18 maani gayi.\nStatus: bhoomi-pujan ho chuka; karya pragati par (poorna hone ki alag report nahi mili).',
    period: '2023-2028',
  },
  {
    title: 'Ward 1 aur 5 (Indore-1) me Rs. 2.39 crore ke 10 vikas karyon ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 23 Jun 2026',
    sourceUrl: 'https://www.freepressjournal.in/indore/cabinet-minister-kailash-vijayvargiya-rows-over-kafir-remark-on-roads-welfare-benefits',
    date: '2026-06-21',
    note: 'FPJ ke mutabik Indore-1 vidhansabha kshetra ke ek karyakram me Vijayvargiya ne Ward 1 aur Ward 5 ke kul 10 vikas karyon (kul lagat Rs. 2.39 crore) ki ghoshna ki aur unke shilanyas kiye. Karyaon ke prakar (sadak/paani aadi) article me specify nahi. Stage: shilanyas — article me "announced and laid the foundation stones". Credit-paradarshita: unhone swayam apne kshetra me shilanyas kiya; yojna/nidhi ka strot article me specify nahi, isliye vidhayak-nidhi ka dawa nahi. Event "Sunday" ko hua, article publish 2026-06-23 — event date 2026-06-21 maani gayi.\nStatus: shilanyas/ghoshna (poorna hone ki alag report nahi mili).',
    period: '2023-2028',
  },
  {
    title: 'Ward 6 (Malharganj, Indore-1) me vikas karyon ka lokarpan aur bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'ETV Bharat, 21 Sep 2026 (FPJ corroboration, 22 Sep 2026)',
    sourceUrl: 'https://www.etvbharat.com/hi/state/indore-kailash-vijayvargiya-controversy-remark-bjp-female-councilor-regarding-physical-build-mps26092102263',
    date: '2026-09-20',
    note: 'ETV Bharat ke mutabik 20 September 2026 (Ravivar) ko Vijayvargiya ne sansad Shankar Lalwani ke saath Ward 6 (Malharganj) me vikas karyon ka lokarpan aur bhoomi-pujan kiya. FPJ ne iski pushti ki: "development works foundation ceremony" Ward 6, Assembly Constituency No. 1 me aayojit hui, karyon ki lagat (researcher ne Rs. 7 crore se adhik likhi thi, lekin khole gaye sources me rashi verify nahi hui — isliye rashi hatayi gayi). Karyaon ke prakar article me specify nahi. Stage: lokarpan + shilanyas (ETV ne dono shabdon ka prayog kiya). Credit-paradarshita: unhone apne kshetra (Indore-1) me swayam lokarpan/bhoomi-pujan kiya — seat-kaam; CM/PM ke karyakram me sirf maujoodgi wala mamla nahi. Isi karyakram ka vivad wala hissa (mahila parshad par tipni, baad me khed vyakt) negative entry ke yogya nahi — bayan-vivad hai, koi case/FIR/adhikarik karwai nahi.\nStatus: lokarpan + shilanyas sampann (20 Sep 2026).',
    period: '2023-2028',
  },
  {
    title: 'Ward-15 (Bijasan, Indore-1) me Rs. 1.65 crore ki sadak works ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 28 Jul 2025',
    sourceUrl: 'https://www.freepressjournal.in/indore/3-crore-development-works-in-indores-ward-15',
    date: '2025-07-27',
    note: 'FPJ ke mutabik Vijayvargiya ne Ward-15 me Rs. 3 crore ke vikas karyon ka udghatan/shilanyas kiya: Rs. 1.65 crore ki sadak works ka lokarpan aur Rs. 1.35 crore ke anya vikas karyon ka shilanyas (ward parshad Mamta Sunere ke saath). Is entry me sadak wala hissa. Stage: lokarpan — article me "inaugurated"; poora hone ki independent pushti article me nahi. Credit-paradarshita: unhone swayam udghatan kiya. Ward-mapping disclosure: article me "assembly constituency-1" ka explicit zikr nahi; lekin current ward-numbering me Indore-2 = wards 18-34 (Wikipedia Indore-2 page), aur FPJ/Naidunia/Webdunia ki reports wards 1, 5, 6, 7, 13, 14, 16, 17 ko AC-1 batati hain — is aadhar par Ward-15 (Bijasan) Indore-1 block (wards 1-17) me aata hai. Event "Sunday" ko hua, article publish 2025-07-28 — event date 2025-07-27 maani gayi.\nStatus: lokarpan sampann (Jul 2025).',
    period: '2023-2028',
  },
  {
    title: 'Ward-15 (Bijasan, Indore-1) me Rs. 1.35 crore ke vikas karyon ka shilanyas',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 28 Jul 2025',
    sourceUrl: 'https://www.freepressjournal.in/indore/3-crore-development-works-in-indores-ward-15',
    date: '2025-07-27',
    note: 'FPJ ke mutabik Vijayvargiya ne Ward-15 me Rs. 1.65 crore sadak-lokarpan ke saath Rs. 1.35 crore ke anya vikas karyon (prakar specify nahi) ka shilanyas kiya. Stage: shilanyas — article me "laid the foundation". Credit-paradarshita aur ward-mapping disclosure: pichhli entry jaisa — unhone swayam shilanyas kiya; Ward-15 Indore-1 block me aata hai (disclosure note pichhli entry me).\nStatus: shilanyas sampann (Jul 2025).',
    period: '2023-2028',
  },
];

// REJECT-LOG (mantri-niyam sakhti se lagaya gaya):
// 1. Naidunia epaper 05/04/2026 (Ward 7, Rs. 10 crore bhoomi-pujan + lokarpan) — PDF browser.open par
//    fetch timeout; source khud khola nahi ja saka, isliye snippet se entry nahi bani. Corroborating
//    web article nahi mila. (SKIP — verify nahi ho saka)
// 2. CM Mohan Yadav ka Rs. 1000 crore bhoomi-pujan/lokarpan (20 Dec 2024, FPJ/paliwalwani) — CM ne kiya,
//    Vijayvargiya karyakram me sirf maujood the. REJECT: CM ke karyakram me sirf maujoodgi.
// 3. Mukhyamantri Jan Kalyan Parv Rs. 1249 crore (FPJ, Dec 2024) — CM ne inaugurate kiya,
//    Vijayvargiya attendees me. REJECT: sirf maujoodgi.
// 4. Bhaskar English: Rau seat me Rs. 8 crore sadak ka bhoomi-pujan (2025) — REJECT: kshetra se bahar (Rau).
// 5. thesootr: Indore ke liye Rs. 3000 crore vikas baithak (Jan 2025) — REJECT: mantri ke naate shahar-stariya
//    baithak/ghoshna + CM se bhoomi-pujan "future me" (future-khabar); seat-kaam nahi.
// 6. Ujjain Simhastha Rs. 2312 crore cabinet swikriti (mpfirst, Dec 2024) — REJECT: kshetra se bahar +
//    mantri-stariya rajya faisla.
// 7. Patrika: aajeevan sahyog nidhi Rs. 48 lakh (Indore-1 sabse kam) — REJECT: party fund collection,
//    vikas karya nahi.
// 8. FPJ 'Chhatron ki Goonj' (Sep 2026) me Narmada pipeline se paani-sudhaar aur Sanjeevani Clinic ka zikr —
//    REJECT: koi naya thos karya nahi; article me unhone clinic ka udghatan kiya aisa dawa nahi.
// 9. Sandhya Yadav remark controversy (FPJ/ETV Bharat/ABP, Sep 2026) — REJECT negative entry:
//    bayan-vivad, unhone khed vyakt kiya; koi case/FIR/adhikarik karwai nahi.
// 10. Patrika/Amar Ujala: Indore-1 me avaidh nasha karobar, BJP netaon ka DCP ko gyapan (Oct 2026) —
//    REJECT negative entry: kshetra ka law-order mudda hai, unpar koi aarop/case/jawab ka sawal nahi.
// 11. YouTube-only (MP News TV): "Akash Vijayvargiya ne Narmada line ka bhoomi-pujan kiya" —
//    REJECT: YouTube-only source + galat vyakti (Akash, Kailash nahi).
// 12. Amar Ujala: Sehore me Rs. 51 crore vikas karya — REJECT: kshetra se bahar.
// 13. ANN News: Manesar me ULB sammelan me bhashan — REJECT: sirf bayan, koi seat-karya nahi.
// 14. Vidhayak-nidhi ke naam par koi established-media report me thos karya nahi mila — ghoshna-type
//    press khabar bina sanction/work-order ke REJECT niyam ke tahat shaamil nahi ki gayi.

// Ramesh Mendola (BJP) — Indore-2 AC-205, term Dec 2023+
// Researched 2026-10-14. Established sources preferred; every entry from a page read directly.

mpWorks['ramesh-mendola'] = [
  {
    title: 'Sahastrarjun Dham ki chardeewari ka bhoomi-pujan, vidhayak nidhi se Rs. 1.14 crore (Indore, MR-10)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Shivhare Vaani, 11 Mar 2024',
    sourceUrl: 'https://shivharevaani.com/thank-you-dada-dayalu-mla-mendola-gave-rs-1-14-crore-for-the-boundary-wall-of-sahastrarjun-dham-in-indore/',
    date: '2024-03-10',
    note: 'MR-10 toll bridge ke paas ek-acre bhukhand par prastavit Bhagwan Rajrajeshwar Sahastrarjun Dham ki chardeewari (boundary wall) ka 10 Mar 2024 ko bhoomi-pujan hua, mukhya atithi Ramesh Mendola — unhone apni vidhayak nidhi se Rs. 1.14 crore ki dhanrashi di. Bhoomi-pujan ke saath hi nirman karya shuru ho gaya. Credit-pardarshita: Khajrana crossing se metro ke liye hatayi gayi Sahastrabahu pratima ke punarsthapna-hetu bhukhand bhi Mendola ke prayason se Kalchuri samaj ko prashasan ne aavantit kiya tha; is entry ka Rs. 1.14 crore VIDHAYAK NIDHI hai (sansad nidhi/MP fund nahi). Source chhota community portal hai (Shivhare Vaani — Kalchuri samaj portal) — disclosure sahit include. Source me sanction/work-order document nahi, lekin ye ghoshna-matra nahi: bhoomi-pujan event vaastav me hua aur karya shuru hua.\nStatus: bhoomi-pujan ho gaya, nirman shuru (Mar 2024).',
    period: '2023-2028',
  },
  {
    title: 'Janjirwala Chowraha–Atal Dwar road ka 60-ft chaudikaran — bhoomi-pujan (Indore-2)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 2 Mar 2026',
    sourceUrl: 'https://www.patrika.com/bhopal-news/mp-news-road-to-be-widened-to-60-feet-obstructing-constructions-to-be-removed-20394870',
    date: '2025-09',
    note: 'Janjirwala Chowraha se Laxmi Memorial Hospital, Nehru Nagar Road No. 9 se hote hue Atal Dwar tak road ko 60 ft chauda karne ka bhoomi-pujan vidhayak Ramesh Mendola, mayor Pushyamitra Bhargav aur jankarya prabhari Rajendra Rathore ne ~Sep 2025 (article se 6 mahine pehle) kiya tha. Lagat article me nahi likhi. Patrika (2 Mar 2026) ke anusaar nagar nigam ne kaam shuru kar diya hai (Narmada line shift, storm-water line). Credit-pardarshita: nagar-nigam ka master-plan karya; article me MLA ki concrete bhoomika = bhoomi-pujan ke 3 karton me se ek (kshetriya vidhayak ke roop me). thesootr ke ek alag report me is road ke liye sarkar dwara Rs. 10 crore ka budget manzoor hone ka dawa hai, lekin wo stalled/delayed par focus karti hai — isliye usse entry nahi banaya.\nStatus: bhoomi-pujan Sep 2025; karya shuru (Mar 2026).',
    period: '2023-2028',
  },
  {
    title: 'Nandanagar aur Kabitkhedi me sports complexes ka bhoomi-pujan (Rs. 15.30 crore + Rs. 10.10 crore)',
    category: 'Any',
    badge: 'news',
    sourceUrl: 'https://www.agniban.com/25-crore-sports-complexes-to-be-built-in-nandanagar-and-kabitkhedi/',
    sourceLabel: 'Agniban, 27 Oct 2025',
    date: '2025-10-27',
    note: 'Nagar nigam dwara Rs. 25 crore se zyada ke 2 sports complexes: Nandanagar (Road 11 aur 30 ke beech sarkari zameen, Rs. 15.30 crore) aur Kabitkhedi (quarters ke paas, Rs. 10.10 crore). Article ke anusaar "pehle se prastav taiyaar kar rashi manzoor kar di gayi thi" — dono jagah 27 Oct 2025 ko CM Mohan Yadav ne mantri Kailash Vijayvargiya aur vidhayak Ramesh Mendola ki maujoodgi me bhoomi-pujan kiya. Credit-pardarshita: nagar-nigam pariyojna; MLA ki concrete bhoomika article me spasht hai — Vidhan Sabha-2 me sports complex na hone ki shikayat khiladiyon ne unse ki thi, jiske chalte unhone prastav karakar Rs. 15.30 crore ki rashi manzoor karayi. Rashi manzoori ki reporting established media (Agniban Hindi daily) par hai.\nStatus: bhoomi-pujan ho gaya (Oct 2025); swikriti/rashi manzoor, nirman baki.',
    period: '2023-2028',
  },
  {
    title: 'MR-10 me Chandragupta Maurya Chowraha ka redevelopment — bhoomi-pujan (Rs. 1 crore se adhik)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, ~Aug 2026',
    sourceUrl: 'https://www.bhaskar.com/g/local/mp/indore/news/indore-chandragupta-maurya-square-redevelopment-kailash-vijayvargiya-138621647.html',
    date: '2026-08',
    note: 'MR-10 kshetra me Chandragupta Maurya Chowraha ke aadhunikikaran (metro corridor ke neeche service road, rotary/junction vikas, footpath, LED street light, green belt, drainage) ka bhoomi-pujan mantri Kailash Vijayvargiya aur KSHETRIYA VIDHAYAK Ramesh Mendola ne milkar kiya; lagat "kareeb Rs. 1 crore se adhik". Credit-pardarshita: sarkari/nagar-nigam pariyojna (Simhastha-2028 ki taiyaari ka hissa); MLA ki concrete bhoomika = kshetriya vidhayak ke roop me sah-bhoomi-pujan-karta. Lagat ka exact aankda article me nahi.\nStatus: bhoomi-pujan ho gaya; nirman baki.',
    period: '2023-2028',
  },
];

// REJECT-LOG:
// 1. Zee News (Feb 2020) — Scindia ko patra — REJECT: karyakaal se pehle ka siyasi patra, koi kshetra-kaam nahi.
// 2. Webdunia (Jun 2026) — CM Yadav ne Indore vikas karyon ki samiksha ki; Mendola meeting me maujood — REJECT: sirf maujoodgi, koi concrete kaam nahi.
// 3. FPJ "Corporators Express Anger Over Incomplete Works" — Indore-2 ward corporators ki shikayat meeting (Mendola maujood) — REJECT: shikayat-baithak; Mendola ka koi udgat/shilanyas/swikriti wala karya nahi.
// 4. Constructionworld — Banganga railway crossing–MR-10 ISBT road ka bhoomi-pujan MP Shankar Lalwani ne kiya; Mendola sirf upasthit — REJECT: dusre neta ka karya, sirf maujoodgi.
// 5. FPJ "State Setting New Dimensions Of Development" (MP State Foundation Day) — Mendola manch par upasthit — REJECT: sirf maujoodgi.
// 6. onlinebulletin.in — Malwa Mill–Patnipura pul ka bhoomi-pujan (~6 crore), Mendola upasthit — REJECT: sirf upasthiti; article me unki koi concrete bhoomika (nidhi/shilanyas/anushansa) nahi.
// 7. mpnewstv.com (Mar 2024) — PM Modi ne video-conference se Pardesipura ready-made park (186 crore) ka bhoomi-pujan kiya; Mendola maujood — REJECT: PM ka karya, sirf maujoodgi.
// 8. Grokipedia — "Rs. 9.3 crore ke infra works ka inauguration" ka dawa — REJECT: wiki aggregation, established media ka traceable source nahi mila; blog/wiki se entry nahi banti.
// 9. Bhaskar — Bhikshuk Punarvas Kendra inauguration (social justice dept) — Mendola ne bas sambodhit kiya — REJECT: vibhagiya karya, unka kaam/shilanyas nahi.
// 10. Bhaskar "Ward 33 Talk: Councillor Manoj Mishra" — Narmada pani supply ki charcha — REJECT: sirf charcha/interview, koi kaam nahi.
// 11. Patrika "Gen-Z followers" (Jul 2026) — social media stat — REJECT: vikas karya nahi.
// 12. thesootr (24 Jan 2025) — Mendola ne road chaudikaran par atikraman-muavza ki maang ki — REJECT: sirf maang/bahas, koi kaam/swikriti nahi.
// 13. Amar Ujala (Nov 2025) — 100-ft road par jan-virodh — REJECT: protest story; Mendola ki koi concrete bhoomika nahi (ilake ke vidhayak ke roop me ullekh-matra).
// 14. Nai Dunia / Patrika (30 Jun 2025) — Mendola MP Olympic Association adhyaksh chune gaye — REJECT: sports prashasan ka pad, kshetra-vikas karya nahi.
// 15. Nai Dunia — India–New Zealand softball MoU (softball federation adhyaksh ke roop me) — REJECT: rashtriya sports-bhoomika, kshetra-kaam nahi.
// 16. ETV Bharat (Jul 2024) — Mendola ka CM ko patra: dukaano par dukandaar ka naam likhne ki maang — REJECT: policy-patra/maang, koi vikas karya nahi.
// 17. archyde.com — MLA Trophy night cricket tournament me Mendola upasthit — REJECT: event attendance, vikas karya nahi.
// 18. FPJ — CM Mohan Yadav ke mayor mega employment fair inauguration me Mendola upasthit — REJECT: CM ka karyakram, sirf maujoodgi.
// 19. thesootr — Janjirwala–Atal Dwar road ka Rs. 10 crore budget manzoor lekin kaam atka — context entry Patrika entry me note ki gayi; alag entry nahi (stalled report, swikriti dawa single chhote portal ka).

// Golu Shukla alias Rakesh Shukla (BJP) — Indore-3 AC-206 (Indore jila, MP), karyakaal Dec 2023+
// Researched 2026-10-14. Established media preferred; har entry ka page khud khola gaya.
// Note: stablished media (Bhaskar/Patrika/Nai Dunia/FPJ/ETV) me inke NAAM PAR apna koi vikas karya (shilanyas/lokarpan/swikriti) report nahi mila —
// zyadatar coverage nirikshan/daura, CM-karyakram me upasthiti, ya vivaad/bayan ki hai.

mpWorks['golu-shukla-alias-rakesh-shukla'] = [
  {
    title: 'Hathipala pul ka lokarpan (lagat Rs. 4.97 crore)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Ghamasan, 15 Jul 2024',
    sourceUrl: 'https://ghamasan.com/india/madhya-pradesh/indore-news/the-mayor-inaugurated-the-hathi-pala-bridge-constructed-at-a-cost-of-5-crores-383020',
    date: '2024-07-15',
    note: 'AC-3 ke madhyakshetra me ~70 saal purane 20-ft chaude jirna Hathipala pul ki jagah 4-lane naya pul (125 ft lamba, 60 ft chauda, footpath + central median + 180 ft approach road) — Rs. 4.97 crore (lagbhag Rs. 5 crore) ki lagat se nirmit — ka 15 Jul 2024 ko lokarpan mahapaur Pushyamitra Bhargav, sansad Shankar Lalwani AUR KSHETRIYA VIDHAYAK Rakesh Golu Shukla ne milkar kiya. Juni Indore, Sarwate bus stand, Chandrabhaga, Jawahar Marg, Champabag, South Toda kshetraon ko suvidha. Credit-pardarshita: ye NAGAR NIGAM (IMC) pariyojna hai; iska bhoomi-pujan 2023 me hua tha (karyakaal se pehle) — MLA ki concrete bhoomika = sanyukt lokarpan-karta (mahapaur + sansad ke saath), unki nidhi/anushansa ka ullekh article me nahi. Source chhota local portal (Ghamasan) hai — disclosure sahit include.\nStatus: karya poora, lokarpan 15 Jul 2024.',
    period: '2023-2028',
  },
];

// REJECT-LOG:
// 1. thesootr.com (27 Oct 2025) — CM Mohan Yadav ne AC-3 me vikas karyon ka bhoomi-pujan kiya, Golu Shukla samarthak narebazi — REJECT: karyon ka koi thos vivaran (kya/lagat) nahi; MLA sirf upasthit.
// 2. FPJ (Jul 2026) — Mayor + MLA ne Madhumilan–Chhawani master-plan road ka NIRIKSHAN kiya — REJECT: sirf nirikshan/daura.
// 3. navabharat.com — Chandrabhaga–Kalalkui masjid road (Rs. 10.26 crore) ka nirikshan, MLA maujood — REJECT: sirf nirikshan.
// 4. mpnewstv.com — Madhu Milan chowraha vikas/saundaryikaran ka nirikshan — REJECT: sirf nirikshan.
// 5. indianmasterminds.com (23 Jul 2026) — CM ne Rs. 175 crore double-layer flyover ka udghatan kiya; Golu Shukla upasthit — REJECT: CM ka karyakram, sirf maujoodgi.
// 6. FPJ (Oct 2025) — CM ne Rs. 80 crore (Amrit 2.0/Kayakalp) karyon ka bhoomi-pujan kiya; MLA upasthit — REJECT: CM ka karya, sirf maujoodgi.
// 7. FPJ (Dec 2024) — CM ne Rs. 1249 crore Jan Kalyan Parv karyon ka udghatan/bhoomi-pujan kiya; MLA upasthit — REJECT: sirf maujoodgi.
// 8. globalmirror/dailyaawaz/shabdsangram/hindusthansamachar — wahi CM bhoomi-pujan (riverfront Rs. 19.25 crore, paani tanki Rs. 12 crore, stadium Rs. 5 crore); MLA sirf "upasthit" — REJECT: sirf maujoodgi.
// 9. morningstiffnesspodcast.org / obnews.co — Ward-64 Rs. 4.25 crore karyon ka bhoomi-pujan; article me MLA sirf "attended" — REJECT: concrete bhoomika nahi + scraper/mirror domains.
// 10. Amar Ujala — BJP sahyog nidhi me Golu Shukla ne Rs. 51 lakh dene ki ghoshna — REJECT: party fund, vikas karya nahi.
// 11. bhaskar.com — Bhopal adhikariyon ke samne MLAs ki baithak; Golu Shukla ne tanker badhane/60-crore sports hub ki MAANG ki — REJECT: sirf maang.
// 12. ETV Bharat — Golu Shukla ne mayor ko colony-renaming ka patra/prastav bheja — REJECT: sirf prastav/patra.
// 13. Amar Ujala (Dec 2024) — Muslim bastiyon ke naam badalne ki maang — REJECT: sirf maang/prastav.
// 14. Amar Ujala (Oct 2025) — Dussehra manch se "jihadi" vivadit bayan — REJECT: bina case/FIR wala vivaad/bayan, negative entry nahi banti.
// 15. Patrika — vidhayak-putra Rudraksh Shukla par Dewas mandir pujari se marpeet ka aarop — REJECT: parivar ka mamla, MLA par kabhi nahi.
// 16. TOI / Economic Times (Sep 2025/2026) — Malhar Ashram akhada decay; MLA ke prayas se bana toilet abhi functional nahi — REJECT: kaam adhoora/standalone detail nahi.
// 17. emsindia.com (22 Nov 2025) — MLA ki anushansa par Malhar Ashram me naye kushti hall + changing rooms SWIKRIT, bhoomi-pujan hua — REJECT (technical): page JS-rendered, article text khud padha nahi ja saka; snippet se entry banana mana hai. (Virodhabhas: ETV Bharat Sep 2026 me akhada abhi bhi jarjar — swikrit karya ka execution sandigdh.)
// 18. madhyabharat.net — "Rakesh Shukla ko Sheopur-Ashoknagar ka prabhar" — REJECT: koi anya Rakesh Shukla (Indore-3 ke MLA nahi), galat vyakti.
// 19. Patrika — Indore-1 me school bulldozer mamla — REJECT: anya kshetra/vyakti, Golu Shukla ka koi sambandh nahi.
// 20. gdcindore.com — Dental College ke 2 naye block ka CM ne udghatan kiya; Golu Shukla upasthit — REJECT: sirf maujoodgi.
// 21. samacharnama.com — CM ne 4 flyover (Rs. 222.25 crore) ka lokarpan kiya; MLA upasthit — REJECT: sirf maujoodgi.
// 22. mavericknews30.com — naye hospital building (Rs. 528 crore) karyakram; Golu Shukla ne swagat bhashan diya — REJECT: vibhagiya karya, unka shilanyas/lokarpan nahi.

// Malini Laxmansingh Gaur — BJP — Indore-4 AC-207 (Indore jila, MP) — karyakaal Dec 2023 se
// Research date: 2026-10-14. Search coverage: Dainik Bhaskar, Nai Dunia, Free Press Journal,
// ETV Bharat, navabharat.com, loktantranews, paliwalwani, thesootr (Hindi + English).
// Pass hui entries: 2 (dono June 2025, dono ward-level nagar-nigam karyon ke bhoomi-pujan jisme
// MLA khud maujood rehkar bhoomi-pujan me shamil hui). Profile khaali nahi hai.

mpWorks['malini-laxmansingh-gaur'] = [
  {
    title: 'Indore-4 (Ward 71) me Rs 4.50 crore ke vikas karyon ka bhoomi-pujan (Sanjeevani clinic, udyaan, sadak-paani/drainage line)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, 4 Jun 2025',
    sourceUrl: 'https://www.bhaskar.com/local/mp/indore/news/ward-71-will-be-developed-with-rs-450-crore-135166565.html',
    date: '2025-06-04', // article me "budhwar" likha tha; search-index ki date 2025-06-04 (budhwar) se match karti hai,
    note: 'Kya hua: Nagar nigam ke Rs 4.50 crore ke karyon — Sanjeevani clinic, udyaan, sadak-paani ki line, drainage line aur storm-water line — ka bhoomi-pujan mahapaur Pushyamitra Bhargav aur vidhayak Malini Gaur ne kiya. Stage: shilanyas-bhoomi pujan. Credit-pardarshita: ye karya nagar-nigam ke hain (vidhayak-nidhi ka zikr nahi); MLA ki concrete bhoomika — kshetriya vidhayak ke roop me bhoomi-pujan me mahapaur ke saath shamil hona — article me spasht likhi hai. Status: bhoomi-pujan ho chuka; nirman progress par report nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Indore-4 (Ward 72) me Rs 6.50 crore ke 14 vikas karyon ka bhoomi-pujan (school bhawan, drainage, udyaan, sadak ka cementikaran)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Navbharat.com, Jun 2025 (chhota local portal — disclosure)',
    sourceUrl: 'https://navabharat.com/?p=223506',
    date: '2025-06', // article me exact date print nahi; photo-filename aur contemporaneous reporting se June 2025 pakka,
    note: 'Kya hua: Nagar nigam dwara Ward 72 me Rs 6.50 crore lagat ke 14 vikas karyon — school bhawan nirman, drainage line, udyaanon ka jeernoddhar, sadkon ka cementikaran — ka bhoomi-pujan mahapaur Pushyamitra Bhargav evam vidhayak Malini Gaur ne kiya. Article me hi ye bhi report hai ki zone-15 ke antargat Ward 72 me Rs 6.60 crore ki 13 pariyojnaon ko nagar nigam ne swikriti di hai. Stage: shilanyas-bhoomi pujan. Credit-pardarshita: karya aur swikriti dono nagar-nigam ki hain; MLA ki concrete bhoomika — kshetriya vidhayak ke roop me bhoomi-pujan karna — article me spasht hai. Disclosure: navabharat.com chhota local portal hai; isi event ki reporting paliwalwani.com par bhi milti hai (cross-confirmation). Ward 72 ka Indore-4 (AC-207) me hona Dainik Bhaskar ki report se verify hai. Status: bhoomi-pujan ho chuka; nirman progress par report nahi mili.',
    period: '2023-2028',
  },
];

// ============================================================================
// REJECT-LOG (1-line kaaran har rejected candidate ke liye)
// ============================================================================
// 1. loktantranews.co.in Ward 71 Rs 4.50cr lokarpan/bhoomi-pujan — REJECT: diya gaya URL
//    ab koi aur article serve karta hai (Datia/Bankipur/Manjalpur bypoll, 2026) — original
//    content replace ho chuka, verify impossible (Dainik Bhaskar se event verify ho gaya, isliye loss nahi).
// 2. Amar Ujala "Bataiye Vidhayakji" interview (Jun 2023) — REJECT: karyakaal (Dec 2023) se pehle ki khabar; daawe purane karyakaal ke.
// 3. thesootr.com Ward 82 me Rs 2 crore+ bhoomi-pujan — REJECT: MLA ko bulaya hi nahi gaya,
//    ve maujood nahi thi; nagar-nigam event me unki koi concrete bhoomika nahi.
// 4. Airport Terminal-1 inauguration (IANS syndicated, Mar 2025) — REJECT: CM ke karyakram me
//    sirf upasthit dignitaries me naam; koi concrete MLA bhoomika nahi.
// 5. Free Press Journal — Estimates Committee study-tour meeting (2025) — REJECT: committee
//    meeting me sadasya ke roop me upasthiti; kshetra-kaam se sambandhit nahi.
// 6. business-standard / TOI / newsbytes swachhta-era stories (2015-2018) — REJECT: mahapaur
//    karyakaal ki khabaren; Dec 2023 se pehle.
// 7. dainikdopahar.in vidhayak-nidhi kharcha stats (116 karya, Rs 239.79 lakh) — REJECT:
//    2018-tenure ki khabar (pehli-baar MLA Akash Vijayvargiya ka zikr), pre-Dec-2023; aggregate
//    stat bhi hai, koi specific kaam nahi.
// 8. indoredilse.com dialysis center udghatan — REJECT: unhone MAHAPAUR ke roop me udghatan
//    kiya tha (pre-2020); karyakaal se pehle.
// 9. Naidunia Ghazwa-e-Hind poster story (Nov 2024) — REJECT: MLA ke bete (Eklavya Gaur) par
//    khabar; parivar ka maamla MLA par kabhi nahi.
// 10. Dainik Bhaskar Ward 72 jan-samvad (Mayor) — REJECT: sirf mahapaur ka karyakram; MLA ka
//    zikr tak nahi. (Iska istemaal sirf Ward 72 ke AC-4 me hone ki pushti ke liye hua.)
// 11. bhaskarenglish.in — BJP ke IMC me 25 saal jashn — REJECT: aam rajnaitik karyakram,
//     sirf upasthiti; koi thos kaam nahi.
// 12. ghamasan.com karyakarta sammelan (Ward 72, LS-chunav 2024) — REJECT: chunavi meeting me
//     upasthiti; koi kaam nahi.

// Mahendra Hardia (BJP) — Indore-5 AC-208, term Dec 2023+
// Researched 2026-10-14. Established sources preferred; every entry from a page read directly.

mpWorks['mahendra-hardia'] = [
  {
    title: 'Ward 48 me Narmada pipeline ka lokarpan (lagat Rs. 1.25 crore)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 23 Mar 2026',
    sourceUrl: 'https://www.freepressjournal.in/indore/indore-news-infrastructure-development-projects-worth-225-crore-launched-in-ward-48',
    date: '2026-03-23',
    note: 'Ward 48 (Indore-5) me Rs. 2.25 crore ke infra works launch kiye gaye; usme se Rs. 1.25 crore ki Narmada pipeline — Krishi Nagar water tank se Barah Patthar Square tak, 25-30 saal purani line badli jayegi (Lalaram Nagar, Padmavati Colony, Geeta Nagar, Greater Tirupati Colony ko fayda). Stage: lokarpan (launch/inauguration Sunday, Mayor Pushyamitra Bhargav ke saath MLA Mahendra Hardia ne udghatit kiye). Credit-paradarshita: ye nagar-nigam ka project hai; article me MLA ki concrete bhoomika = launch event me co-inaugurator aur paani ke dabav/dushit-pani ki samasya uthana. MLA fund ka zikr article me nahi hai.\nStatus: udghatit/launched (Mar 2026).',
    period: '2023-2028',
  },
  {
    title: 'Barah Patthar se Ward Vihar tak cement road ka lokarpan (lagat Rs. 80 lakh)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 23 Mar 2026',
    sourceUrl: 'https://www.freepressjournal.in/indore/indore-news-infrastructure-development-projects-worth-225-crore-launched-in-ward-48',
    date: '2026-03-23',
    note: 'Ward 48 (Indore-5) ke Rs. 2.25 crore works me se Barah Patthar se Ward Vihar tak Rs. 80 lakh ki cement-concrete road — launch Mayor Pushyamitra Bhargav aur MLA Mahendra Hardia ne milkar kiya, Barah Patthar Square (St Paul School ke paas). Stage: lokarpan. Credit-paradarshita: nagar-nigam karya; MLA ki bhoomika launch me sah-udghatak ki, article me koi alag fund/nidhi ka dawa nahi.\nStatus: udghatit/launched (Mar 2026).',
    period: '2023-2028',
  },
];

// Usha Babu Singh Thakur (BJP) — Dr. Ambedkar Nagar-Mhow AC-209 (Indore jila), term Dec 2023+
// NOTE: ye pehle mantri reh chuki hain (2018-Dec 2023 karyakaal) — us purane karyakaal ke kaam yahan nahi liye gaye.
// Researched 2026-10-14. Established sources preferred; har entry ko page kholkar khud padha gaya.

mpWorks['usha-babu-singh-thakur'] = [
  {
    title: 'Mhow me AMRUT 2 ke tahat Rs. 38 crore ki nayi paani-pipeline aur tanki ki ghoshna',
    category: 'Paani',
    badge: 'dawa',
    sourceLabel: 'ANI (via Lokmat Times), 24 Jan 2026',
    sourceUrl: 'https://www.lokmattimes.com/national/proper-treatment-is-being-provided-to-all-says-mhow-mla-usha-thakur-as-several-people-detected-with-jaundice-symptoms/',
    date: '2026-01-23',
    note: 'Mhow ke Chander Marg/Moti Mahal ilakon me jaundice prakop (20+ bachche prabhavit) ke baad MLA Usha Thakur ne ANI ko bataya ki AMRUT 2 yojna ke tahat Rs. 38 crore ki pariyojna swikrit ki gayi hai — isme nayi paani ki tanki ka nirman jald shuru hoga aur Mhow ka poora paani-pipeline network (lagbhag 50 saal purana) badla jayega. Credit-pardarshita: AMRUT 2 kendra sarkar ki yojna hai; "swikrit ki gayi hai" MLA ka ANI ko diya gaya dawa hai, GO/work-order ya vibhagiya swikriti ki pakki report nahi mili — isliye niyamanusaar stage ghoshna likha gaya, swikriti nahi.\nStatus: ghoshna (Jan 2026); karyanvayan ki sthiti pata nahi.',
    period: '2023-2028',
  },
];

// REJECT-LOG:
// 1. YouTube (Vande Bharat News): "Gangliya Khedi me 44 lakh ke vikas karyon ka lokarpan" — REJECT: YouTube-only source, niyam anusaar reject.
// 2. Free Press Journal, 24 Jan 2026: "Jaundice cases under control in Mhow" — REJECT: MLA sirf collector ke saath prabhavit ilakon ka daura/nirikshan karti hain; koi kaam, swikriti ya udghat nahi — sirf nirikshan/daura.
// 3. hbtvnews + indianmasterminds, Feb 2026: CM Mohan Yadav dwara Mhow me 85 crore ke karyon ka lokarpan/bhoomi-pujan (Sandeepani school 38 crore, Nanaji Deshmukh tourist site 4.50 crore, Azad Sarovar park 1 crore) — REJECT: CM ka karyakram; lokarpan/bhoomi-pujan CM ne kiye. MLA ki documented bhoomika sirf karyakram aayojan/hosting thi (chhota portal); unki nidhi, swikriti ya anushansa ka saboot nahi — niyam anusaar CM-ke-karyakram ki maujoodgi/hosting par credit nahi banta.
// 4. Free Press Journal, Sep 2026: Janapav me CM dwara Parshuram Lok/Shri Krishna Lok ka bhoomi-pujan (Rs. 17 crore) — REJECT: CM ka karyakram, MLA sirf maujood thin; unki koi concrete bhoomika (nidhi/shilanyas/anushansa) article me nahi.
// 5. thesootr: "CM swecchhanudan rashi apne samarthakon ko baanti" — REJECT: case/FIR ke bina vyaktigat aarop wali negative khabar; plus ye niji sansthaon ko vivekadhheen anudan ki baat hai, thos vikas-karya nahi.
// 6. thesootr (purana): Kailash Vijayvargiya ke kshetra me nigam ki karwai rukwana + rasuka ki maang — REJECT: purani khabar, bina case ke aarop; koi official karwai ki sthiti nahi.
// 7. bansalnews: Van vibhag karmchari ka JCB/tractor zabt maamle me "dakaiti" ki shikayat (minister-era, ve "Paryatan Mantri" thin) — REJECT: Dec 2023 se pehle ka karyakaal; plus sirf shikayat, FIR/case ki pushti nahi.
// 8. hindi.oneindia, Feb 2023: Vikas Yatra me bhoomi-pujan/lokarpan ("mantri Usha Thakur") — REJECT: Dec 2023 se pehle (mantri karyakaal) ka kaam.
// 9. medicalbuyer.co.in (~2022): Madhya Bharat Hospital me ICU/PICU ka lokarpan — REJECT: mantri-karyakaal ka kaam (Dec 2023 se pehle).
// 10. ghamasan.com (~2021): Oxygen plant ke liye vidhayak-nidhi se Rs. 60 lakh — REJECT: purana karyakaal (Dec 2023 se pehle).
// 11. inhnews.in: Himaleshwar Dham (Shajapur) bhoomi-pujan me shirkat — REJECT: kshetra se bahar (Kalapipal, Shajapur jila), sirf guest ki maujoodgi.
// 12. ETV Bharat/naidunia, Apr 2025: "vote bechne wale agle janm me bhed-bakri" wala bayan — REJECT: bayan/vivad, koi vikas-karya nahi.
// 13. latestly.com (2019): Godse ko "rashtrawadi" kahna — REJECT: purana bayan-vivad, bina case ke; koi works context nahi.
// 14. webdunia/naidunia, Sep 2026: Garba me gair-Hindoo entry par bayan — REJECT: bayan/vivad, koi vikas-karya nahi.
// 15. newsonair.gov.in, Jun 2024: 12th Vishwa Hindi Samman — REJECT: puraskar, kshetra-kaam nahi.
// 16. lokmattimes, Apr 2026: BJP media team me pravakta niyukti — REJECT: party bhoomika, vikas-karya nahi.

// WORKS RESEARCH FRAGMENT — Madhu Verma (Rau AC-210, Indore, BJP, Dec 2023 se)
// Identity check: Rau, Indore ke MLA Madhu Verma ki hi khabrein li gayi hain;
// anya sheharon/rajyon ke milte-julte naam wale vyaktiyon ki khabrein reject ki gayi hain.
// Research date: 2026-10-14. Profile khaali NAHI hai — 2 entries pass.

mpWorks['madhu-verma'] = [
  {
    title: 'Rau (Ward 79) me Rs. 17.35 crore sewer line ka bhoomi-pujan (AMRUT 2.0, 27 km line)',
    category: 'Any', // sewerage infrastructure,
    badge: 'news',
    sourceLabel: 'Free Press Journal, 30 Nov 2025',
    sourceUrl: 'https://www.freepressjournal.in/indore/indore-news-bhoomi-pujan-of-17-crore-sewer-line-project-in-rau',
    date: '2025-11-30',
    note: 'Ward 79, Rau Assembly me 27 km lambi sewer line (250-700 mm dia) ka bhoomi-pujan — lagat Rs. 17.35 crore, AMRUT 2.0 ke Package-04 ke tahat. Bhoomi-pujan Indore ke Mayor Pushyamitra Bhargav aur MLA Madhu Verma ne milkar kiya. Funding: Centre + State + Indore Municipal Corporation (joint). Completion target: 15 mahine. ~19,000 nagrikon ko fayda (Sukh Niwas, Ahirkhedi, Kundan Nagar, Vidur Nagar, Akash Nagar, Chitrakoot Nagar). Credit-pardarshita: yeh kendra/rajya/IMC ki AMRUT 2.0 pariyojna hai, MLA ki nidhi nahi; article ke mutabik MLA ne bhoomi-pujan kiya aur kaha ki sewer line kshetra ke nagrikon ki badi maang thi — yahi unki concrete bhoomika hai. Status: shilanyas/bhoomi-pujan (kaam shuru hua, poora nahi).',
    period: '2023-2028',
  },
  {
    title: 'Rau ke 14 gaon me Rs. 11 crore ke vikas kaam swikrit (Aashray Nidhi, Panchayat vibhag)',
    category: 'Any', // mixed: drainage, peya-jal pipeline, aajeevika bhawan, vyayamshala,
    badge: 'news',
    sourceLabel: 'Patrika, 11 Oct 2026',
    sourceUrl: 'https://www.patrika.com/indore-news/development-flow-indore-villages-via-aashray-nidhi-11-crore-approved-works-20976375',
    date: '2026-10-11',
    note: 'Rau Vidhan Sabha ke 14 gaon (Badiya Keema, Bihadriya, Devguradia, Dudhiya, Nainod, Sinhasa, Navda Panth, Bak, Sanavadiya, Rangwasa, Tillour Khurd, Sindoda, Bisnavda aadi) me drainage, peya-jal pipeline, aajeevika bhawan/sahayata kendra, vyayamshala, khel maidan, shmashan ghat bhawan jaise kaam — kul Rs. 11 crore swikrit. Stage: SWIKRITI — Panchayat vibhag ne 11 crore ki rashi swikrit ki, kaam jald shuru honge (poora/lokarpan nahi). Fund-pardarshita: yeh VIDHAYAK-NIDHI NAHI hai — Aashray Nidhi hai (MP Gram Panchayat (Coloniyon ka Vikas) Niyam 2014 ke tahat colonizeron se li gayi fee, jo Indore jila panchayat ke khate me jama thi). Credit-pardarshita: Patrika ke mutabik MLA Madhu Verma ke lambe prayason ke baad Panchayat vibhag ne rashi swikrit ki; Patrika ke mudde uthane (12 Sep 2025 article) ke baad Gramin Vikas Mantri Prahlad Patel ne disha-nirdesh jaari kiye the, uske baad MLA lagatar prayas kar rahe the. Status: swikriti (established media me vibhagiya swikriti ki pakki report).',
    period: '2023-2028',
  },
];

/*
REJECT-LOG (Madhu Verma, Rau — identity confirmed in every check):
1. YouTube video "Rau vidhan sabha me vikas ki raftar tez, Rs. 500 crore kary pragati par" — REJECT: YouTube-only source allowed nahi; 500 crore ka dawa bhi bina article-saboot.
2. YouTube video "Rs. 1.43 crore sadak-puliya ka bhoomi-pujan" (Satya ko Samarpit news channel) — REJECT: YouTube-only; kab ki khabar, date verify nahi.
3. YouTube "Mp Darpan News Live — Tillor bujurg/Muhadi gaon jal, Jhanjhar basti bijli bhoomi-pujan" — REJECT: YouTube-only; established print/portal article nahi mila.
4. YouTube "Rau me MLA Madhu Verma ka action — high-tension line hataayi" (MP News TV) — REJECT: YouTube-only; nirikshan/action khabar, thos kaam (fund/stage) ka saboot nahi.
5. MPBreakingNews — "Vidhayak Neena Verma" (Dhar, 50 lakh works, garden upgradation) — REJECT: galat vyakti (Neena Vikram Verma, Dhar ki vidhayak), Rau ke Madhu Verma nahi.
6. ETV Bharat — "Delhi me RO water cooler, Mantri Pravesh Verma" — REJECT: galat vyakti (Delhi ke jal-mantri Parvesh Verma), Rau ke Madhu Verma nahi.
7. Wikipedia "Madhu Verma (economist)" — REJECT: galat vyakti (environmental economist).
8. Loktantranews.co.in — "Hotel Pride se City Forest link road, Rs. 29.52 crore bhoomi-pujan (Mayor + Madhu Verma)" — REJECT: khola hua canonical URL ab unrelated article (cancer-patient story) khol raha hai — verify nahi ho paya, isliye source nahi li.
9. FPJ "State Foundation Day" (Kailash Vijayvargiya event, MLA maujood) — REJECT: mantri ke karyakram me sirf maujoodgi, MLA ki concrete bhoomika nahi.
10. BhaskarEnglish "BJP 25 years in Indore Municipal Corporation" — REJECT: sirf maujoodgi, koi vikas-kaam nahi.
11. IndianMasterminds "CM Mohan Yadav Rs. 15.9 crore road project Indore" — REJECT: CM ka karyakram; MLA Madhu Verma sirf upasthit dignitaries ki list me, concrete bhoomika nahi.
12. Zee News (Sep 2023) — "Rau me bhoomi-pujan par munch-munch, Jitu Patwari vs Madhu Verma" — REJECT: karyakaal se pehle (chunav se pehle, Sep 2023) ki chunavi khabar; thos kaam nahi.
13. TheSootr — "JP Nadda ka Madhu Verma ke liye roadshow, Indore" — REJECT: chunav-prachar khabar, karyakaal se pehle; vikas-kaam nahi.
14. LiveHindustan (Sep 2024) — "CPR dekar vidhayak ki jaan bachi" — REJECT: health incident, vikas-kaam nahi.
15. ANT/YouTube — "Shahid Major Hamza ke ghar Kailash Vijayvargiya aur Madhu Verma" — REJECT: YouTube-only; shok-santapna visit, vikas-kaam nahi.
*/

// WORKS FRAGMENT — Tulsiram Silawat, Sanwer (SC) AC-211, Indore — BJP — Water Resources cabinet minister
// MLA tenure: Dec 2023 onwards. MANTRI-NIYAM APPLIED: Jal Sansadhan ministry ke rajya-stariya faisle
// (statewide sinchai/pariyojna-ghoshnaen, Narmada-Shipra link, Sevarkhedi-Silarkhedi jaise CM programs me maujoodgi)
// sab REJECT — sirf Sanwer SEAT ke thos kaam liye gaye jisme constituency-bhoomika spasht thi.
// Profile khaali NAHI hai — 8 entries pass.


mpWorks['tulsiram-silawat'] = [
  {
    title: 'Sanwer me 100+ infrastructure projects ka lokarpan + shilanyas (lagat Rs. 12 crore)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Construction World, 20 May 2025',
    sourceUrl: 'https://www.constructionworld.in/policy-updates-and-economic-news/silawat-launches-projects-worth-rs-120-million-in-sanwer/73804',
    date: '2025-05-18',
    note: 'Sanwer me 18 May 2025 ko badey sarvajanik karyakram me Silawat ne swayam 100 se zyada civic projects (CC sadak, drainage, stormwater line, pul-puliya, anganwadi kendra, community hall, shamshan ghat, playground, public garden) ka lokarpan aur shilanyas kiya. Kul lagat Rs. 12 crore se zyada (Rs 120 million). Stage: mixed — kuch lokarpan (poora), kuch shilanyas. Metro rail/six-lane bypass/court building jaise 2028 ke "plans" ghoshna the, is entry me nahi. Status: lokarpan + shilanyas poorn.',
    period: '2023-2028',
  },
  {
    title: 'Sanwer Ward-7 me barrage aur water filtration plant (lagat Rs. 5 crore)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Construction World, 20 May 2025',
    sourceUrl: 'https://www.constructionworld.in/policy-updates-and-economic-news/silawat-launches-projects-worth-rs-120-million-in-sanwer/73804',
    date: '2025-05-18',
    note: 'Upar wale Sanwer karyakram me sabse badi yojna: Ward-7 me barrage + water filtration plant (Rs 50 million = Rs. 5 crore) launch ki gayi; Ward-3 me Khandelwal Pump se rest house tak paver block road (Rs. 1 crore) bhi launch. Stage: launch/shilanyas. Credit-pardarshita: ye nagar-parishad/seat-level civic works hain, Silawat ne swayam Sanwer me launch kiye — unke vibhag (Jal Sansadhan) ki rajya-stariya policy se alag. Status: launch/shilanyas poorn.',
    period: '2023-2028',
  },
  {
    title: 'Dharampuri (Sanwer) sub-health centre ka 6-bed PHC me upgrade — Cabinet swikriti (lagat Rs. 3.25 crore)',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 21 Jul 2026',
    sourceUrl: 'https://www.freepressjournal.in/indore/mp-govt-approves-325-crore-to-upgrade-dharampuri-health-centre-in-sanwer',
    date: '2026-07-20',
    note: 'MP Cabinet ne 20 Jul 2026 ki Jagdishpur meeting me Sanwer vidhansabha ke gram Dharampuri ke sub-health centre ko 6-bed Primary Health Centre me upgrade karne ki Rs. 3.25 crore ki swikriti di. Silawat (Sanwer MLA + mantri) ne prastav rakhne ki jaankari di. Building, medical equipment, furniture, MBBS officer, pathology lab, institutional delivery suvidhaen shamil. Stage: swikriti (cabinet decision — established media FPJ ki pakki report). Credit-pardarshita: health dept/cabinet ka faisla hai, lekin Silawat ne apni seat ke liye prastav ke roop me isko seat-kaam ke taur par push kiya. Status: cabinet swikriti poorn.',
    period: '2023-2028',
  },
  {
    title: 'Sanwer me Ratnatalai talab ke punarutthan kaaryaon ka lokarpan (lagat Rs. 71.57 lakh)',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 23 Jun 2025',
    sourceUrl: 'https://www.freepressjournal.in/indore/indore-efforts-to-revive-ratnatalai-pond-get-financial-wings-tulsiram-silawat-inaugurates-revitalisation-works',
    date: '2025-06-22',
    note: 'Sanwer seat me 1972 ke Ratnatalai talab ke revitalisation kaarya Silawat ne swayam 22 Jun 2025 ko inaugurate kiye. Latest phase me Rs. 71.57 lakh (2024 me swikrit) — 1100m upstream pitching, 1000m paver block, pedaropan, CC steps; talab Sanwer nagar parishad ko maintenance ke liye handover ghoshit. Stage: lokarpan (kaarya poore). Credit-pardarshita (mantri-niyam): talab mool roop se unke vibhag (Jal Sansadhan) ka tha aur Jal Ganga Samvardhan Abhiyan ke antargat hai — lekin ye seat-level project hai jiska lokarpan unhone Sanwer me swayam kiya, isliye seat-kaam ke roop me liya gaya; rajya-stariya policy-faisla alag rakha gaya. Status: lokarpan poorn.',
    period: '2023-2028',
  },
  {
    title: 'Mangliya (Sanwer) me 50-bed AYUSH aspatal — civil work poora (lagat lagbhag Rs. 6 crore)',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'The Times of India, Apr 2025',
    sourceUrl: 'https://timesofindia.indiatimes.com/city/indore/indore-to-get-largest-ayush-hospital-in-division-in-may/articleshow/120595334.cms',
    date: '2025-04',
    note: 'Sanwer seat ke Mangliya me Indore division ka sabse bada 50-bed AYUSH aspatal — civil work poora (~Rs. 6 crore); medical equipment installation baaki thi. Silawat ne AYUSH mantri se lagbhag Rs. 10.26 crore ke allocation (ramp, retaining wall, equipment, herbal garden, fire system) ka anurodh kiya. Stage: civil work poora / near-completion. Credit-pardarshita: aspatal AYUSH vibhag ka hai; Silawat ki bhoomika — allocation ke liye mantri-stariya anurodh aur seat me hospital ki push — TOI me spasht hai. Rs. 10.26 crore sirf anurodh (maang) tha, swikriti ka dawa nahi — isliye ghoshna nahi, sirf near-completion entry. Status: civil work poora.',
    period: '2023-2028',
  },
  {
    title: 'Sanwer nagar parishad me Rs. 3.72 crore ke vikas karyaon ka shilanyas + lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindusthan Samachar wire via livevns.news (chhota portal — disclosure), 19 Jan 2024',
    sourceUrl: 'https://livevns.news/state/madhyapradesh/bhoomi-pujan-and-inaugurated-development-worksphp/cid13367450.htm',
    date: '2024-01-19',
    note: 'Silawat ne Sanwer nagar parishad me Rs. 3.72 crore ke kaarya kiye: naye nagar parishad bhavan ka shilanyas (Rs. 1.2471 crore), 5 anganwadi kendron ka lokarpan (Rs. 37.5 lakh), ghar-ghar kachra sangrahan ke liye 5 kachra vaahan (Rs. 37.5 lakh), plus CC road, nali nirmaan, paver block saundaryakaran (6 sthanon par). Stage: mixed — shilanyas + lokarpan. Nagar parishad ke seat-level kaarya hain, Silawat ne swayam kiye. Source chhota portal par Hindusthan Samachar wire — disclosure. Status: shilanyas + lokarpan poorn.',
    period: '2023-2028',
  },
  {
    title: 'Sanwer ke Ward-36 me Rs. 2.5 crore ke kaarya — 6 garden lokarpan + peyjal pipeline bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'India Live News 24 (chhota portal — disclosure), 12 Apr 2026',
    sourceUrl: 'https://indialivenews24.co.in/a-big-gift-of-development-in-indore-ward-36-minister-tulsiram-silavat-inaugurated-works-worth-rs-2-5-crore-and-performed-bhoomi-pujan/',
    date: '2026-04-12',
    note: 'Sanwer vidhansabha ke antargat nagariya Ward-36 me Silawat ne lagbhag Rs. 2.5 crore ke kaaryaon ka lokarpan + bhoomi-pujan kiya: 6 adhunik garden (lighting, gazebo, fountain, open gym, yog kendra, bachchon ke jhule) ka lokarpan; Tirumala Greens/Tirumala/Dhanlaxmi sectors ke liye nayi peyjal pipeline ka bhoomi-pujan. Stage: mixed — lokarpan + shilanyas. Unke "100 crore ke kaarya poore" wale dawe ko entry me nahi liya (neta ka dawa, saboot nahi). Source chhota portal — disclosure. Status: lokarpan + shilanyas poorn.',
    period: '2023-2028',
  },
];

// REJECT-LOG (sab candidates jo screen hue par nahi pass):
// 1. Imlikheda (Sanwer) 33/11 KV power grid lokarpan (Bansal News article) — REJECT: Drishti IAS record se
//    cross-check par pata chala grid ka bhoomi-pujan Feb 2023 aur lokarpan Aug 2023 me ho chuka tha;
//    Bansal piece recycled/purani khabar hai — Dec 2023 karyakaal se pehle ka kaam.
// 2. Shipra se Paned sadak bhoomi-pujan (Bansal News, "Shivraj sarkar") — REJECT: Shivraj-era (2023 se pehle) khabar.
// 3. DNA India "MLA's fund used to develop infrastructure" — REJECT: purane karyakaal (2013-18) ki report.
// 4. CM Mohan Yadav ka Indore me Rs. 1000 crore vikas karya lokarpan-bhoomi-pujan (Dec 2024, Paliwalwani) —
//    REJECT: CM ka program; Silawat ki maujoodgi mantri ke naate thi, seat-kaam me unki concrete bhoomika nahi.
// 5. Sevarkhedi-Silarkhedi Rs. 614 crore pariyojna bhoomi-pujan (Amar Ujala, Jan 2025) — REJECT: CM + unke
//    vibhag (Jal Sansadhan) ka rajya-stariya project; Sanwer seat ka kaam nahi; Silawat sirf upasthit the.
// 6. Mangliya me 7 Sep 2026 ko Rs. 43 crore+ ka lokarpan-bhoomi-pujan (Atulya Bharat Chetna) — REJECT: publish
//    ke samay future-khabar thi ("aayojit kiya jayega"); karyakram hua ya nahi, established media se verify nahi
//    ho saka. Chhota portal.
// 7. Nai Dunia preprod mirror (org496gtr7prepod.naidunia.com) — REJECT: preprod/staging URL; canonical URL nahi mili.
// 8. FPJ "Sanjivani Clinics, Yoga Sheds, Roads Inaugurated In Indore" (Ward-72) — REJECT: Indore shahar ka kaam,
//    Sanwer seat ke bahar; Silawat ki bhoomika nagar-nigam karyakram me atithi ki.
// 9. "Simhastha 2028 plans" (metro rail, six-lane bypass, court building Rs. 36 crore, ITI, college library,
//    railway station upgrade, Krishi Mandi Rs. 9 crore — Construction World me Silawat ke statements) — REJECT:
//    sirf "karenge" future-yojnaen, DPR stage; thos kaam nahi.
// 10. Vidhayak-nidhi ghoshna-type press khabar bina sanction/work-order saboot ke — aisi koi entry li hi nahi gayi.
// 11. Negative entry — koi credible reporting me case/FIR/adhikarik karwai ke saath neta-par-aarop nahi mila; skip.


// ---- Indore district batch REJECT-LOG (2026-10-14) ----
// Manoj Patel: 9 reject — CM ki Depalpur ghoshnaen (sirf maujoodgi), Shivraj-era damrikaran (pre-term), private temple trust, bina-case road-crack allegation, future award ghoshna, public.app video, election speeches.
// Vijayvargiya: 14 reject — CM ke Rs. 1000cr/1249cr programs (maujoodgi), Rau/Sehore/Ujjain (kshetra-bahar/mantri-faisla), Rs. 3000cr baithak (future), party fund, bayan-vivad (bina case), YouTube-only galat vyakti.
// Ramesh Mendola: 19 reject — CM/PM events (maujoodgi), maang-patra/vivad, MP Olympic/federation bhoomika, Grokipedia wiki-dawa.
// Golu Shukla: 22 reject — CM events (maujoodgi), nirikshan, maang-patra, bina-case vivad, parivar ka mamla, galat vyakti, mirror domain, party fund, minor karya; + coordinator ne 1 pass entry (Ward-64, polluted domain) hatayi.
// Malini Gaur: 12 reject — replaced URL, pre-tenure interview, bin-bulaye event, CM events, mayor-era (pre-term), vidhayak-nidhi stats purane tenure ke, parivar (beta) khabar.
// Mahendra Hardia: 7 reject — pre-term Vikas Parv, bina-proof vidhayak-nidhi dawa, petition appeal, CM event maujoodgi, vivad/maang khabrein; + coordinator ne 1 pass entry (NBT URL mismatch) hatayi.
// Usha Thakur: 16 reject — YouTube-only, nirikshan, CM events (maujoodgi), bina-case aarop, purana mantri-karyakaal, kshetra-bahar, bayan/vivad; + coordinator ne 1 pass entry (Nai Dunia story unverified) hatayi — profile 1 entry.
// Madhu Verma: 15 reject — 5 YouTube-only, 3 galat vyakti, 1 broken URL, 6 sirf-maujoodgi/pre-term/non-work.
// Silawat: 11 reject — recycled pre-tenure khabar, Shivraj-era, purana MLA-fund article, CM program maujoodgi, kshetra-bahar, future announcement, preprod mirror, Simhastha plans, bina-proof nidhi ghoshna; + coordinator ne 1 pass entry (Shipra, PWD mantri ka lokarpan) hatayi.

// ---- Jabalpur district batch (researched 2026-10-14) ----
// Jabalpur batch — ajay-vishnoi (Patan AC-95, BJP, poorv mantri), neeraj-singh-lodhi (Bargi AC-96, BJP), lakhan-ghanghoria (Jabalpur Purba SC AC-97, INC, poorv mantri), abhilash-pandey (Jabalpur Uttar AC-98, BJP), ashok-ishwardas-rohani (Jabalpur Cantt. AC-99, BJP), rakesh-singh (Jabalpur Paschim AC-100, BJP, cabinet mantri PWD), sushil-kumar-tiwari-indu-bhaiya (Panagar AC-101, BJP), santosh-varkade (Sihora ST AC-102, BJP).
// DO NOT export; appended to works_mp.ts

mpWorks['ajay-vishnoi'] = [

  {
    title: 'Nagar Parishad Patan me Rs 88.12 lakh ke vikas karyon ka lokarpan v bhoomi-pujan — Vidhayak Ajay Vishnoi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'News24.net.in, 7 Oct 2024',
    sourceUrl: 'https://news24.net.in/2024/10/07/15860/',
    date: '2024-10-07',
    note: 'Article ke mutabik Patan Vidhayak Ajay Vishnoi ne 7 Oct 2024 ko Nagar Parishad Patan me Rs 88.12 lakh ki lagat se banne wale vividh vikas karyon ka lokarpan v bhoomi-pujan kiya; karyakram me Nagar Parishad adhyaksh, samast parshad aur mukhya nagar palika adhikari maujood the. Credit-pardarshita: ye nikay ke vikas karyon ka lokarpan/bhoomi-pujan hai jisme vidhayak ki bhoomika lokarpan-karta v bhoomi-pujan-karta ke roop me article me spasht hai; vidhayak-nidhi ka ullekh article me nahi hai. Disclosure: ye chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Kayakalp abhiyan ke tahat Patan me Rs 90 lakh ki cement-concrete sadkon aur Nag talab me pedal boat ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Majholi Darpan, 7 Oct 2024',
    sourceUrl: 'https://majholidarpan.com/paddle-boat-was-also-inaugurated-in-nag-talab/',
    date: '2024-10-07',
    note: 'Article ke mutabik Nagar Parishad Patan ne Kayakalp abhiyan ke antargat lagbhag Rs 90 lakh ki lagat se bani cement-concrete sadkon ka tatha Nag talab par pedal boat ka lokarpan Vidhayak Ajay Vishnoi ke mukhya atithya me hua; sadkein poori ban chuki hain (lokarpan stage). Credit-pardarshita: sadak aur boat nagar nikay ki pariyojna hain, vidhayak ne lokarpan-karta ke roop me unka lokarpan kiya, article me ye bhoomika spasht hai. Disclosure: ye chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Majhauli me Rs 10 crore ke samudayik swasthya kendra ke naveen bhavan ka bhoomi-pujan — Up-Mukhyamantri v Sansad ke saath Vidhayak Ajay Vishnoi',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Majholi Darpan, 6 Oct 2024',
    sourceUrl: 'https://majholidarpan.com/madhya-pradesh-will-become-the-countrys-top-state-in-the-field-of-health-deputy-chief-minister-shri-shukla/',
    date: '2024-10-06',
    note: 'Article ke mutabik Majhauli me Rs 10 crore ki lagat se banne wale samudayik swasthya kendra ke naveen bhavan ka bhoomi-pujan Up-Mukhyamantri Rajendra Shukla, Sansad Ashish Dube aur Vidhayak Ajay Vishnoi ne sanyukt roop se vidhivat pooja-archna karke kiya; stage bhoomi-pujan hai, kaam abhi shuru hua hai. Credit-pardarshita: ye rajya-sarkar ki pariyojna hai, lekin article me vidhayak ki concrete bhoomika spasht hai (sanyukt bhoomi-pujan-karta) aur Sansad ne bhavan ki swikriti ko unke sakriya prayason ka nateej bataya. Disclosure: ye chhota sthaniya portal hai; date article ki hai, karyakram pichhle din hua tha.',
    period: '2023-2028',
  },
  {
    title: 'Janpad Panchayat Majhauli ke naveen bhavan ka bhoomi-pujan — Vidhayak Ajay Vishnoi ki adhyakshata me',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Majholi Darpan, 28 Nov 2024',
    sourceUrl: 'https://majholidarpan.com/the-new-building-of-janpad-panchayat-majhauli-was-inaugurated/',
    date: '2024-11-28',
    note: 'Article ke mutabik Janpad Panchayat Majhauli ke naveen bhavan ka bhoomi-pujan Patan vidhayak Ajay Vishnoi aur Janpad adhyaksha Vidya Dinesh Chaurasia ki adhyakshata me hua; article kehta hai ki vidhayak ne ye bhavan Janpad Panchayat Majhauli ko pradan kiya; lagat ka ullekh article me nahi hai; stage bhoomi-pujan hai. Credit-pardarshita: vidhayak ki bhoomika bhoomi-pujan-adhyaksh ke roop me article me spasht hai, lekin lagat aur nidh-srot article me diye gaye nahi. Disclosure: ye chhota sthaniya portal hai.',
    period: '2023-2028',
  },
];

mpWorks['neeraj-singh-lodhi'] = [

  {
    title: 'Charagwan ke Raghav warehouse ka aakasmik nirikshan karke sada gehun ka ghotala ujagar, kayee adhikari nilambit',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'World Swaraj News, 15 May 2024',
    sourceUrl: 'https://worldswarajnews.com/rotten-wheat-found-in-a-warehouse-during-inspection-many-officers-suspended/',
    date: '2024-05-15',
    note: 'Article ke mutabik Bargi vidhayak Neeraj Singh Lodhi aur tehsildar Ravindra Patel ne Charagwan ke paas Shahpura sthit Raghav warehouse ka aakasmik nirikshan kiya, jahan samarthan-mulya par kharide gaye 212 kisanon ke 25800 quintal gehun me purana, ghuna hua aur Non-FAQ gehun paya gaya (kul kharidi Rs 6.19 crore, jisme se Rs 4.56 crore ka bhugtan ho chuka tha). Iske baad nodal adhikari Raghunath Kudouliya, JSO Bhavna Tiwari aur Kunjam Singh Rajput tatkal prabhav se nilambit kiye gaye, MPWLC shaka-prabandhak Priyanka Patharia ke nilamban ka prastav bheja gaya, aur ADM/DSC/SDM dwara janch jaari rahi. Status: karyavai poorn (nirikshan ke seedhe parinam me adhikariyon par nilamban). Credit-pardarshita: ye sirf nirikshan-daura nahi tha; unke nirikshan se ghotala ujagar hua aur prashasan ne dastavezi karyavai ki. Disclosure: ye chhota sthaniya portal hai; yahi khabar lokraag.com par bhi chhapi hai.',
    period: '2023-2028',
  },
];

mpWorks['lakhan-ghanghoria'] = [

  {
    title: 'Jabalpur Purba ke Thakkar Gram ward me Haddi Godam se Ghatiya Colony tak sadak nirman ka bhoomi-pujan — vidhayak-nidhi + parshad-nidhi se rashi swikrit',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'SeaTimes.in, 15 Feb 2026',
    sourceUrl: 'http://seetimes.in/345565/',
    date: '2026-02-15',
    note: 'Article ke mutabik Jabalpur Purba ke Thakkar Gram ward me Haddi Godam se Ghatiya Colony jaane wali jirjit sadak ke nirman ka bhoomi-pujan hua; ye antim shesh maarg tha jo baaki tha. Vidhayak Lakhan Ghanghoria aur parshad Ghulam Hussain ke prayason se vidhayak-nidhi aur parshad-nidhi dono mad se rashi swikrit karke karya shuru karaya gaya. Status: bhoomi-pujan — nirman karya shuru. Credit-pardarshita: kaam nagar-nigam ke antargat vidhayak/parshad-nidhi ka hai; unki bhoomika prayas + bhoomi-pujan-karta ke roop me article me spasht hai. Note: ye vidhayak-nidhi (MLA fund) se pass sadak hai, sansad-nidhi (MP fund) nahi. Disclosure: ye chhota sthaniya Jabalpur portal hai, isliye is entry ko savdhaani se lein.',
    period: '2023-2028',
  },
  {
    title: 'Jabalpur Purba ke Motilal Nehru ward me vidhayak-nidhi se sadak ka sang-e-buniyad aur 60 parivaron ko swecchha-nidhi se rashi',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'BAZ Media, 24 Jan 2025',
    sourceUrl: 'https://bazmedia.in/news/national/madhya-pradesh/jabalpur/2025/01/24/motilal-nehru-ward-sange-buniyad/',
    date: '2025-01-24',
    note: 'Article ke mutabik purv parshad Syed Tahir ke anurodh par vidhayak Lakhan Ghanghoria ne Motilal Nehru ward me Shera Bori wale se Taj Kirana tak aur Masjid Noore Madina wali sadak ke nirman ka sang-e-buniyad rakha; ye sadak vidhayak-nidhi (MLA fund) se pass karai gayi thi, sansad-nidhi nahi. Status: sang-e-buniyad/bhoomi-pujan — nirman karya shuru hona tha. Isi karyakram me unhone lagbhag 60 jaruratmand parivaron ko apni swecchha-nidhi se bachchon ki padhai aadi ke liye rashi bhi pradaan ki. Credit-pardarshita: sadak vidhayak-nidhi ki hai, yehi uska strot hai. Disclosure: ye chhota sthaniya Jabalpur portal hai, isliye is entry ko savdhaani se lein.',
    period: '2023-2028',
  },
  {
    title: 'NHM adhikari ke maan-hani maamle me Jabalpur MP-MLA court ne vidhayak ko notice jari kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'ABP Live (IANS), 4 Dec 2025',
    sourceUrl: 'https://news.abplive.com/cities/madhya-pradesh-court-issues-notice-to-congress-leaders-defamation-case-1815163',
    date: '2025-12-04',
    note: 'ABP Live (IANS feed) ke mutabik Jabalpur MP-MLA court ne Congress vidhayakon Umang Singhar, Ajay Singh aur Lakhan Ghanghoria ko National Health Mission ke DPM Vijay Pandey ke maan-hani maamle me jawab dene ka notice jari kiya; sabko 26 Jan 2026 ko adalat me hazir hone ko kaha gaya. Prishthabhoomi: Ghanghoria ne Aug 2025 me Vidhan Sabha me dhyanakarshan prastav ke jariye Pandey par fake marksheet aur bhrashtachar ka aarop lagaya tha; Dy CM Rajendra Shukla dwara gathit janch-committee ne aaropon ko incorrect/baseless paya, jiske baad Pandey ne defamation case dayer kiya. Neta ka jawab article me nahi diya gaya hai. Ye negative entry hai aur case pending hai; isse nirdoosh/doshi koi bhi nishkarsh na nikala jaye.',
    period: '2023-2028',
  },
];

mpWorks['abhilash-pandey'] = [

  {
    title: 'Rajiv Gandhi ward me Rs 1.49 crore ki 3 sadkon ka bhoomi-pujan — vidhayak ne mahapaur ke saath shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hind Ekta Times, 6 Oct 2026',
    sourceUrl: 'https://www.hindektatimes.com/251638/',
    date: '2026-10-06',
    note: 'Article ke mutabik vidhayak Dr. Abhilash Pandey ne mahapaur Jagat Bahadur Singh Annu aur parshad Madhubala Rajput ke saath Rajiv Gandhi ward me teen sadak-karyon ka bhoomi-pujan kiya: flyover se Ram Janaki mandir tak Rs 41 lakh ki sadak, GT parisar me Rs 51 lakh ki M-30 CC sadak, aur Nasha Mukti Kendra Sulabh Shauchalaya se JDA Garden tak Rs 57 lakh ki sadak. Status: bhoomi-pujan — nirman karya shuru hona tha. Credit-pardarshita: ye nagar-nigam ki pariyojnaen hain; unki bhoomika bhoomi-pujan-karta ke roop me article me spasht hai, vidhayak-nidhi ka paisa hone ka koi dawa nahi hai. Note: ye chhota sthaniya portal hai, tathyon ka swatantra satyapan nahi ho saka.',
    period: '2023-2028',
  },
  {
    title: 'Char wardon me Rs 2.25 crore ke sadak-naali-paver block karyon ka bhoomi-pujan — mahapaur ke saath vidhayak ne shilanyas kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Crime Bhaskar News (Bhaskar Crime), Feb 2026',
    sourceUrl: 'https://www.crimebhaskarnews.com/2026/02/225.html',
    date: '2026-02-01',
    note: 'Article ke mutabik mahapaur Jagat Bahadur Singh Annu aur vidhayak Dr. Abhilash Pandey ne Mahatma Gandhi, Swami Dayanand Saraswati, Pt. Bhawani Prasad Tiwari aur Subhadra Kumari Chauhan wardon me Rs 2.25 crore ki lagat se damrikrit sadken, nala-naliyan aur sadak kinare paver block lagane ke karyon ka bhoomi-pujan kiya; Kamla Nehru Nagar ward me covered naali aur Gol Bazar kshetra me sadak-naali bhi shamil hain. Status: bhoomi-pujan — karya shuru hona tha. Credit-pardarshita: ye nagar-nigam ke karyakram hain; unki bhoomika bhoomi-pujan-karta ke roop me spasht hai. Note: ye chhota sthaniya portal hai aur page par sateek tithi prakashit nahi hai — portal ke /2026/02/ archive se February 2026 pakka hai, isliye mahine ka pehla din placeholder ke roop me diya gaya hai.',
    period: '2023-2028',
  },
  {
    title: 'Press conference me vidhayak ka dawa: Rs 52 crore ki sadak-naali, Rs 70 lakh ki paani tanki aur flyover approach road sahit kai kaam pragati par',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'The Hitavada, 10 Dec 2025',
    sourceUrl: 'https://www.thehitavada.com/Encyc/2025/12/10/focus-remains-on-improving-roads-drinking-water-edn-jobs-agriculture.html',
    date: '2025-12-10',
    note: 'Established media me report unke apne dawe: vidhayak ne press conference me kaha ki Rs 52 crore ki sadak-naali ka karya tez gati se chal raha hai, Rs 70 lakh ka overhead water tank aur sewer line ka vistaar pragati par hai, Rs 234 crore ki flyover approach road aur Rs 3 crore ka garden project aage badh raha hai, Rs 181 crore ka Sanjeevani Nagar flyover traffic dabav kam karega, aur Rs 481 crore ki lagat se naya ITI bhawan aur krishi mandi ban rahe hain. Status: dawa — ye unke swayam ke dawe hain; GO ya swatantra satyapan ke bina swikriti/poornata ka dawa nahi kiya ja sakta. Credit-pardarshita: ye rajya/nagar-nigam ki pariyojnaen hain, article me vidhayak-nidhi ka paisa hone ka koi dawa nahi hai.',
    period: '2023-2028',
  },
];

mpWorks['ashok-ishwardas-rohani'] = [

  {
    title: 'Ranjhi me Rs 640 lakh ki lagat se bane sanyukt anuvibhagiya rajaswa v tehsil bhavan ka lokarpan — adhyakshata me MLA Rohani',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Agniban, 7 Oct 2024',
    sourceUrl: 'https://www.agniban.com/tehsil-building-built-at-rs-640-lakh-inaugurated-in-ranjhi/',
    date: '2024-10-06',
    note: 'Article ke mutabik Ranjhi me Rs 640 lakh ki lagat se bane naye sanyukt anuvibhagiya rajaswa v tehsil bhavan ka lokarpan Shardiya Navratri ke avsar par hua; mukhya atithi sansad Ashish Dubey the aur vidhayak Ashok Rohani ne adhyakshata ki. Status: lokarpan — bhavan nirmit aur karyarambh ho chuka tha. Credit-pardarshita: ye shasan ki pariyojna hai; feita mukhya atithi (sansad) ne kata, vidhayak ki bhoomika adhyakshata ke roop me article me spasht hai. Collector ne Shanti Nagar kshetra me awasiya patta kaam shuru hone me unke yogdan ka bhi jikr kiya.',
    period: '2023-2028',
  },
  {
    title: 'Shaheed Chandrashekhar Azad Ward me Rs 80 lakh ki smart sadak ka bhoomi-pujan — Kumar Kirana se St. Gabriel School hote Ghoshal Complex tak',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Arya Samay, 8 Dec 2025',
    sourceUrl: 'https://aryasamay.com/jabalpur-news-कैंट-विधानसभा-के-शहीद-चन्द्रशेखर-आजाद-वार्ड-में-बनेगी-स्मार्ट-सड़क-विधायक-रोहाणी-ने-किया-भूमिपूजन',
    date: '2025-12-08',
    note: 'Article ke mutabik Shaheed Chandrashekhar Azad Ward me lagbhag Rs 80 lakh ki lagat se Kumar Kirana se St. Gabriel School hote Ghoshal Complex tak sadak ka chaudi karan hona tha, sadak ke dono taraf paver block, sundar lamp post aur vidyut pol lagne the; is karya ka bhoomi-pujan vidhayak Ashok Rohani ne somvar ko kiya. Status: bhoomi-pujan — nirman karya shuru hona tha. Credit-pardarshita: ye nagar-palika/shasan ki pariyojna hai; unki bhoomika bhoomi-pujan-karta ke roop me article me spasht hai. Source-disclosure: Arya Samay ek chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Amanala (Shaheed Chandrashekhar Azad Ward) me Rs 30 lakh ke vikas karyon ka bhoomi-pujan — community hall, CC sadak, naali',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hitavada, 22 Dec 2025',
    sourceUrl: 'https://www.thehitavada.com/Encyc/2025/12/22/mla-rohani-performs-bhoomipujan-of-devpt-works-in-amanala-area.html',
    date: '2025-12-21',
    note: 'Article ke mutabik Cantt kshetra ke Amanala kshetra (Shaheed Chandrashekhar Azad Ward) me Rs 30 lakh ke vikas karyon — ek community hall, CC sadak aur naali (drainage) vyavastha — ka bhoomi-pujan vidhayak Ashok Rohani ne ravivaar ko kiya. Status: bhoomi-pujan — nirman karya shuru hona tha. Credit-pardarshita: ye nagar-palika/shasan ki pariyojna hai; unki bhoomika bhoomi-pujan-karta ke roop me article me spasht hai.',
    period: '2023-2028',
  },
  {
    title: 'Lala Lajpat Rai Ward me lagbhag Rs 80 lakh ki CC sadkon ka bhoomi-pujan — Jaggi Building se Champa Nagar, Adarsh Nagar se Kshirsagar',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Navabharat, 7 Sep 2026',
    sourceUrl: 'https://navabharat.com/?p=564055',
    date: '2026-09-07',
    note: 'Article ke mutabik Cantt kshetra ke Lala Lajpat Rai Ward me lagbhag Rs 80 lakh ki lagat se vibhinn CC sadkon — Jaggi Building se Champa Nagar tak, Adarsh Nagar se Kshirsagar tak, Vishwakarma mohalle ki sadkon aur ward ki anya sadkon — ke nirman ka bhoomi-pujan vidhayak Ashok Ishwardas Rohani ne vidhi-vidhan se kiya. Status: bhoomi-pujan — nirman karya shuru hona tha. Credit-pardarshita: ye nagar-palika/shasan ki pariyojna hai; unki bhoomika bhoomi-pujan-karta ke roop me article me spasht hai.',
    period: '2023-2028',
  },
  {
    title: 'Ranjhi kshetra me lagbhag Rs 52 lakh ke adhunik fire station ka bhoomi-pujan — mahapaur ke saath MLA Rohani',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Nai Dunia e-paper, 5 Jun 2026',
    sourceUrl: 'https://epaperapi.jagran.com/naiduniaEpaper/05062026/jabalpur/04jab-pg11-0015752510.pdf',
    date: '2026-06-04',
    note: 'E-paper (5 Jun 2026, page 11) ke mutabik Ranjhi aur aas-paas ke kshetra me lambe samay se mahsoos ki ja rahi aavashyakta ke baad lagbhag Rs 52 lakh ki lagat se adhunik suvidhaon se lais naye fire station ke nirman karya ka bhoomi-pujan guruvar ko mahapaur Jagat Bahadur Singh aur Cantt vidhayak Ashok Rohani ne kiya. Status: bhoomi-pujan — nirman karya shuru hona tha. Credit-pardarshita: ye nagar-nigam/shasan ki pariyojna hai; unki bhoomika mahapaur ke saath bhoomi-pujan-karta ke roop me spasht hai. Note: e-paper ka OCR text kuch jagah garbad tha, lekin photo-caption aur mukhya tathya spasht hain.',
    period: '2023-2028',
  },
  {
    title: 'Ranjhi me lagbhag Rs 75 lakh ke 10 MVA power transformer ka lokarpan — low-voltage se lagbhag 15,000 abadi ko rahat',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Arya Samay, 27 Aug 2026',
    sourceUrl: 'https://aryasamay.com/jabalpur-news/jabalpur-ranjhi-low-voltage-issue-resolved-10mva-transformer-inauguration',
    date: '2026-08-27',
    note: 'Article ke mutabik Ranjhi kshetra me lagbhag Rs 75 lakh ki lagat se sthapit 10 MVA kshamta wale naye power transformer ka vidhivat lokarpan/udghatan Cantt vidhayak Ashok Rohani ne kiya; isse Gokalpur, Bajrang Nagar, Sharda Nagar, Shanti Nagar, Ramnagar aadi kshetron ko low-voltage aur overloading se mukti milegi aur lagbhag 15,000 abadi ko bijli katauti aur voltage ki pareshani se rahat milegi. Status: lokarpan — transformer sthapit aur chalu. Credit-pardarshita: ye vidyut vibhag (shasan) ki pariyojna hai; unki bhoomika lokarpan-karta ke roop me article me spasht hai. Source-disclosure: Arya Samay ek chhota sthaniya portal hai.',
    period: '2023-2028',
  },
];

mpWorks['rakesh-singh'] = [

  {
    title: 'Jabalpur Paschim ke 8 wardon me Rs 24 crore ke vikas karyon ka bhoomi-pujan evam lokarpan — sadak, nali, talab saundaryikaran, paani tanki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Hitavada, 15 Mar 2026',
    sourceUrl: 'https://www.thehitavada.com/Encyc/2026/3/15/rakesh-singh-lays-foundation-stone-for-works-worth-rs-24-crore-in-8-wards-of-west-assembly-constituency-.html',
    date: '2026-03-13',
    note: 'Article ke mutabik unhone svayam Paschim Vidhan Sabha ke 8 wardon me lagbhag Rs 24 crore ke vikas karyon ka lokarpan evam bhoomi-pujan kiya — sadak, nali, rangmanch, talab saundaryikaran, tin shed, paver block aur paani ki tanki shamil. Karyakram 13 Mar 2026 ko hua (Hindusthan Samachar ki dated dateline se). Status: bhoomi-pujan + lokarpan — nirman karya shuru ya poora ho chuka. Credit-pardarshita: ye nagar-palika/shasan ki pariyojnaen hain; unki bhoomika bhoomi-pujan evam lokarpan-karta ke roop me article me spasht hai. Vidhayak-nidhi ka dawa nahi hai, isliye vidhayak-nidhi nahi likha. Note: ye unki Jabalpur Paschim seat-specific gatividhi hai; unke PWD vibhag ke rajya-stariya faisle is list me nahi liye gaye. Isi karyakram me unhone flyover, ropeway, Narmada ghat vikas, Thakurtal zoo (Rs 300 crore) jaise shehar-stariya vishayon ka zikr kiya — ye sabhi keval zikr/yojnaen thi, alag entry nahi.',
    period: '2023-2028',
  },
  {
    title: 'Jabalpur Paschim me Rs 22 crore ke vikas karyon ka bhoomi-pujan — Bandarariya Tiraha se Mahanadda flyover bridge tak Rs 11 crore ki white-topping sadak sahit',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Arya Samay, 26 Mar 2025',
    sourceUrl: 'https://aryasamay.com/Jabalpur-News:-Minister-Singh-performed-the-Bhoomi-Pujan-of-various-development-works-to-be-built-at-a-cost-of-22-crores,-announced-undergrounding-of-electricity-cables-from-Katanga-Tiraha-to-Chhoti-Line,-road-widening',
    date: '2025-03-26',
    note: 'Article ke mutabik unhone svayam Paschim Vidhan Sabha kshetra ke Rs 22 crore ke vikas karyon ka bhoomi-pujan kiya — isme lagbhag Rs 11 crore ki lagat se Bandarariya Tiraha se Mahanadda flyover bridge tak white-topping, Tara Singh Mahanadda se Gupteshwar Paan Shop tak sadak, aur Gupteshwar Bandarariya Tiraha se MGM School railway crossing tak marg nirman shamil. Status: bhoomi-pujan — nirman karya shuru hona tha. Credit-pardarshita: ye shasan/nagar-kshetra ki pariyojnaen hain; unki bhoomika bhoomi-pujan-karta ke roop me article me spasht hai. Vidhayak-nidhi ka dawa nahi hai. Disclosure: Arya Samay chhota sthaniya portal hai; tithi (26 Mar 2025) Jai Lok ki usi din ki report se pusht hai. Isi karyakram me Katanga Tiraha se Chhoti Line tak bijli ke taaron ko underground karne ki keval ghoshna hui thi — ghoshna par koi entry nahi. Unke PWD vibhag ke rajya-stariya faisle is list me nahi liye gaye.',
    period: '2023-2028',
  },
];

mpWorks['sushil-kumar-tiwari-indu-bhaiya'] = [

  {
    title: 'Panagar ke Padwar gaon me Rs 65 lakh ki lagat se swasthya kendra ka bhoomi-pujan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Yash Bharat, 2 Sep 2024',
    sourceUrl: 'https://yashbharat.co.in/विधायक-इंदु-तिवारी-ने-दी-प/',
    date: '2024-09-02',
    note: 'Article ke mutabik Panagar vidhan sabha ke Bareala ke paas Padwar gaon me Rs 65 lakh ki lagat se banne wale swasthya kendra ka bhoomi-pujan vidhayak Sushil Kumar Tiwari Indu ne kiya, karyakram me sarpanch aur hazaaron graamin maujood the aur gaonwasiyon ne varshon se lambit swaasthya-suvidha ki maang par abhaar jataya. Status: bhoomi-pujan — nirman karya shuru hona tha; lokarpan ki report article me nahi hai. Credit-pardarshita: unki bhoomika bhoomi-pujan-karta ke roop me article me spasht hai; pariyojna ka fund-srot article me ullekh nahi hai isliye vidhayak-nidhi ka dawa nahi kiya gaya. Yash Bharat ek sthaniya Jabalpur portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Panagar nagar ke Bhagat Singh ward me Rs 15 lakh ke bhawan/rangmanch ka sansad ke saath bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'SeeTimes, 8 Jan 2026',
    sourceUrl: 'http://seetimes.in/338486/',
    date: '2026-01-08',
    note: 'Article ke mutabik Panagar nagar ke Bhagat Singh ward me sansad-nidhi (MPLAD) se swikrit Rs 15 lakh ki lagat se banne wale bhawan/rangmanch ka bhoomi-pujan sansad Ashish Dubey aur sthaniya vidhayak Sushil Kumar Tiwari Indu ke dwara sanyukt roop se sampann hua. Status: bhoomi-pujan — nirman shuru hona tha; lokarpan ki report article me nahi hai. Credit-pardarshita: ye sansad-nidhi (MP fund) ki pariyojna hai, vidhayak-nidhi nahi; MLA ki bhoomika saha-bhoomi-pujan-karta ke roop me article me spasht hai. SeeTimes ek chhota sthaniya Jabalpur portal hai.',
    period: '2023-2028',
  },
];

mpWorks['santosh-varkade'] = [

  {
    title: 'Kundam ke Padhariya gaon me aspatal ke liye Rs 50 lakh ki 1 acre zameen ka daan, nirman karya shuru',
    category: 'Aspataal',
    badge: 'dawa',
    sourceLabel: 'The CSR Journal, 5 Jul 2024',
    sourceUrl: 'https://thecsrjournal.in/jabalpur-mla-santosh-barkade-donated-land-50-lakh-rupees-for-hospital-hindi',
    date: '2024-07-05',
    note: 'Article ke mutabik Sihora (ST) ke BJP vidhayak Santosh Barkade ne Kundam tehsil ke Padhariya gaon ke bahar Rs 50 lakh bazaar keemat ki ek acre zameen loan lekar kharidi aur aspatal banane ke liye daan kar di. Madhya Pradesh sarkar ne unke prayason ke baad ilaake me prathmik swasthya kendra (PHC) banane ka faisla karke rashi de di thi, lekin aspatal ke liye zameen nahi mil rahi thi — unke daan se ye rukawat door hui. Unhone portal ko bataya ki is zameen par aspatal ka kaam shuru bhi ho gaya hai aur isse aaspaas ke lagbhag 60 gaonon ke hazaron grameenon ko sehat suvidha milegi. Status: zameen ka daan poora (completed), nirman shuru — ye unke khud ke bayan par aadharit dawa hai. Credit-pardarshita: ye shasan ki swikrit pariyojna (PHC) hai, rashi sarkar ne di thi; unki bhoomika zameen uplabdh karane wale daata ke roop me article me spasht hai; ye vidhayak-nidhi ka paisa nahi hai. Disclosure: ye chhota web portal hai aur story mukhya roop se vidhayak ke khud ke interview par aadharit hai.',
    period: '2023-2028',
  },
];

// REJECT-LOG (Jabalpur district batch, researched 2026-10-14):
// KEPT: ajay-vishnoi = 4; neeraj-singh-lodhi = 1; lakhan-ghanghoria = 3; abhilash-pandey = 3; ashok-ishwardas-rohani = 6.; rakesh-singh = 2; sushil-kumar-tiwari-indu-bhaiya = 2; santosh-varkade = 1.
// REJECTED — Ajay Vishnoi (Patan, ex-mantri):
// - palpalindia, 23 Mar 2021 — purana karyakaal (Dec 2023 se pehle), reject.
// - ETV Bharat, 26 Feb 2024 (Rs 15 crore vidhayak-nidhi ka "hisab") — vidhayak-nidhi ki ghoshna-type press khabar, bina sanction/work-order saboot ke sirf MLA ka dawa, reject.
// - Amar Ujala, Oct 2024 (fake BJP membership ke liye paise maangne ka phone) — MLA ne khud thane me complaint ki; unpar koi case/FIR nahi, works khabar nahi, reject.
// - Bhaskar English / thesootr, Feb 2025 (dhaan khareed ghotala — CM ko 3-page shikayat, collector ne jaanch team banai) — shikayat/maang, poora kaam nahi; jaanch parinam unknown, reject.
// - ETV Bharat, 21 Aug 2026 (khastahal sadkon par apni hi sarkar par aarop) — alochna/bayan, koi poora kaam nahi, reject.
// - Navbharat Times / Free Press Journal, Jul 2026 (Jabalpur-Patan road widening me deri par narazgi) — maang/patra, kaam shuru nahi, reject.
// - delhibulletin, 3 May 2025 (Patan me ~Rs 12 crore 100-bed civil hospital bhavan + Nunser me ~Rs 2.9 crore PHC ka shubharambh) — lokarpan Up-Mukhyamantri ne kiya, MLA sirf maujood the; concrete bhoomika nahi, reject.
// - Majholi Darpan (Majhauli anganwadi bhavan jirna — 28 Feb 2022 ka lokarpan) — purana karyakaal, reject.
// - Bundeli Khabar (Tanya Convent school sports samapan — mashal daud) — sirf mukhya atithi ke roop me maujoodgi, koi kaam nahi, reject.
// - mplive24, Jun 2026 (Gond sammelan preview) — karyakram announcement, kaam nahi, reject.
// - thesootr (Aniruddhacharya gurukul bhoomi-pujan) — MLA sirf upasthit, doosre vidhayak (Bahoriband) ke kshetra ka karyakram, reject.
// - Majholi Darpan, 25 Feb 2026 (Jharia samaj dharmshala, Ranital — MLA ke karakamalon se lokarpan) — samaj ka apna nirman, lagat/nidh-srot ka ullekh nahi, kamzor attribution, reject.
// REJECTED — Neeraj Singh Lodhi (Bargi):
// - mpnewscast.com: 2.21 crore road bhoomi-pujan with mayor (snippet: "pahal") — article fetch timeout, khola nahi ja saka; snippet-se-entry mana, reject.
// - Zee News Hindi / palpalindia: sword-cake birthday video (Sep 2025) — viral video controversy, bina case/FIR/action; negative-entry bar poora nahi, reject.
// - latestly/ANI: Bargi dam cruise tragedy (30 Apr 2026) — sirf rescue quotes; disaster-response statement, kaam nahi, reject.
// - The Hitavada (May 2026): BJP spokesperson ke roop me Congress par hamla — shuddh rajnitik bayan, reject.
// - khabarkesri: Sewa Sankalp deepotsav, Bhedaghat (Sep 2026) — dharmik/campaign event, reject.
// - palpalindia/bazmedia: Jabalpur–Pune/Bandra train flag-off (24 May 2026) — PWD mantri ke karyakram me sirf maujoodgi, reject.
// - ETV Bharat: CM's Sandipani School bhoomi-pujan, Bargi Hills (13 May 2025) — CM ka karyakram, unki concrete bhoomika nahi, reject.
// - Identity traps (naama-rashi): Amar Ujala Lucknow "Neeraj Singh" 74 roads; Punjab Kesari Himachal "Neeraj Nayyar" stadium; "RTI activist Neeraj Mishra" (Bargi tunnel scam); Hitavada Dec 2025 roads article = Abhilash Pandey (Jabalpur North); "Neeraj Lodhi" Fatehpur UP candidate; Pradyuman Singh Lodhi (Bada Malhera); Virendra Singh Lodhi (Banda); Pritam Lodhi (Shivpuri); MP Tourism Minister "Lodhi" (Dharmendra Singh Lodhi); Damoh truck driver "Neeraj Singh Lodhi" (22) — sab galat vyakti, reject.
// - YouTube-only videos (Chargawan arrival; 25-lakh MLA-fund bhoomi-pujan — wo bhi Jabalpur Purba, Bargi nahi) — YouTube-only, reject.
// - Election/affidavit pages (news18/ndtv/myneta/business-standard/wikipedia) — chunav record, works nahi, reject.
// REJECTED — Lakhan Ghanghoria (Jabalpur Purba SC, INC):
// - newsinvestigation.tv (30 Dec 2022): 3 wardon me 3 sadak, Rs 43.64 lakh — publish date pre-term (Dec 2023 se pehle), reject.
// - Patrika (Sihora article): mantri roop me Sihora me lokarpan/bhoomi-pujan (Rs 5.85 cr + Rs 5.58 cr) — purane mantri-karyakaal (2018-2020) ka kaam + kshetra bhi Jabalpur Purba nahi, reject.
// - agniban.com: Chitranjan ward me Rs 67 lakh CC sadak/nali bhoomi-pujan — article ~2022 ka (pre-term), reject.
// - public.app: Seth Govinddas ward, Rs 27 lakh, 4 sadkon ka bhoomi-pujan (22 Sep 2026) — public.app-only, reject.
// - public.app: Kheramai ward, Rs 25 lakh vidhayak-nidhi sadak bhoomi-pujan (22 Dec 2025) — public.app-only, reject.
// - public.app: Sanjay Gandhi ward, Rs 46 lakh nirman bhoomi-pujan (2 Jan 2026) — public.app-only, reject.
// - YouTube (Shrey TV): Subhash ward, Rs 30 lakh vidhayak-nidhi sadak bhoomi-pujan + borewell — YouTube-only, reject.
// - YouTube: Sanjay Gandhi ward me anek nirman karyon ka lokarpan — YouTube-only, reject.
// - YouTube (India Khabar 24 / GRAMIN TRUTH): Sanjay Gandhi ward me vikas karyon ki aadharshila — YouTube-only, reject.
// - ETV Bharat (4 Dec 2024): 4-km flyover ka route-badlav ki maang + aandolan ki chetavani — sirf maang/prastav, reject.
// - TOI (May 2025): Ambedkar Chowk–Abdul Hamid Chowk flyover ke liye High Court me petition — sirf maang (court petition), reject.
// - ETV Bharat (6 Dec 2025): Vidhan Sabha me Rani Durgavati Vishwavidyalaya ke B.Tech course par sawal — Assembly question, works nahi, reject.
// - khabardigital.com: police prashasan ko law & order par gyapan — sirf maang/gyapan, reject.
// REJECTED — Abhilash Pandey (Jabalpur Uttar):
// - Shrey TV / Saral News Jabalpur YouTube videos (JP Narayan ward Rs 11.70 lakh bhoomi-pujan; Shanti Nagar/Trimurti Nagar transformer bhoomi-pujan; Rs 17 crore sadak + Rs 8.5 crore DPR + 5000 parivaron ko free leasehold ki ghoshnaen) — YouTube-only, reject.
// - ETV Bharat: MPEB office todphod me BJP karyakartaon par FIR; vidhayak ne thane me dharna diya — case/FIR karyakartaon par hai, vidhayak par nahi; negative-entry ka bar poora nahi, reject.
// - NBT MP-Chhattisgarh YouTube (wahi MPEB kissa) — YouTube-only, reject.
// - The Print (30 Jul 2025): Sanskrit me sawal — vidhansabha charcha, kshetra-kaam nahi, reject.
// - The Print (Mar 2025): junk food par bahas — vidhansabha charcha, reject.
// - The Hitavada (Aug 2025): Gadkari + CM dwara MP ke sabse lambe flyover ka lokarpan — CM/Union mantri ka karyakram, vidhayak sirf maujood, reject.
// - NationPress: CM dwara janmadin ki badhai (13 Jun 2026) — koi kaam nahi, reject.
// - webindia123 (Jan 2024): Gadkari/CM dwara 9 sadak pariyojnaon (Rs 2367 crore) ka bhoomi-pujan/lokarpan — mantri-stariya karyakram, vidhayak ki concrete bhoomika nahi, reject.
// - thesootr.com (MP Budget 2026): budget-bahas me vidhayak ke dawe (Mehta petrol pump–Agrasen Chowk Rs 17 crore CC road, ITI–Deendayal overbridge Rs 371 crore swikrit) — Entry 3 (Hitavada dawa) me samaan prakriti ke dawe cover hain; alag GO/saboot nahi, duplicate-dawa reject.
// - Sandhyabandhu: Gohalpur thane me vakilon ka hungama — kaun Pandey aspasht + koi kshetra-kaam nahi, reject.
// - Sunday Guardian (2023): ticket-virodh — karyakaal se pehle, reject.
// - Oneindia/ABP/Business Standard election profiles — sirf background, koi kaam nahi.
// REJECTED — Ashok Ishwardas Rohani (Jabalpur Cantt.):
// - public.app (8 Sep 2026): 80 lakh bhoomi-pujan, Lala Lajpat Rai Ward — public.app-only, reject.
// - Crime Bhaskar News (Jun 2023): CC sadak bhoomi-pujan Cantt — pre-term, reject.
// - Crime Bhaskar News (2020): corona warriors samman — purana + samman samaroh, reject.
// - The Hitavada (May 2026): Furniture Cluster ke liye CM ko gyapan — sirf maang/prastav, reject.
// - The Hitavada (Sep 2026): CM se mulakat, industry appeal + Manegaon-Mohania police outpost demand — sirf maang, reject.
// - Arya Samay: Bhainsasur Baba Road oxygen park, sena adhikariyon ke saath sthal nirikshan — sirf nirikshan/"karenge" khabar, reject.
// - Navabharat / Seetimes: Brigadier ke samne 12 maangen (Cantt board baithak) — sirf maang, reject.
// - Arya Samay (May 2025): Khandari naale ka nirikshan — sirf nirikshan, reject.
// - The Hitavada (15 Dec 2025): Gorabazar thana bhavan bhoomi-pujan — bhoomi-pujan Dy CM ne kiya, MLA sirf maujood, reject.
// - The Hitavada (20 Apr 2026): PWD mantri ka bhoomi-pujan/lokarpan karyakram — sirf maujoodgi, reject.
// - Hindusthan Samachar (23 Sep 2026): Seva Sankalp Yatra swagat — sirf maujoodgi, reject.
// - Seetimes (Mar 2026): British Fort School (Ranjhi) ka udghatan — private school, reject.
// - Pratham Today (Jun 2025): pitaji ki jayanti par swasthya shivir — asthayi event, durable kaam nahi, reject.
// - Patrika: heart attack khabar — personal health news, reject.
// REJECTED — Rakesh Singh (Jabalpur Paschim, PWD mantri):
// - The Hitavada (20 Apr 2026): "Rs 250 crore across the city" — PWD mantri ke roop me vibhagiya bhoomi-pujan (Ayurvedic College Gaurighat, Ranjhi-Pipariya-Umaria road, airport-ring road, cantt white-topping) + rajya-stariya yojnaen (Lok Path app, Lok Kalyan Sarovars) — seat-specific nahi, reject.
// - ETV Bharat (2 Jul 2026): Vivek Tankha se rajnitik bayaan-baazi; PWD se Jabalpur ko "saade teen hazaar crore" ka dawa — sirf daawa/bayaan, koi seat-specific kaam nahi, reject.
// - Arya Samay (Rs 22 crore article ke andar): Katanga Tiraha–Chhoti Line bijli-taar undergrounding aur sadak-choudikaran ki keval ghoshna — bhoomi-pujan nahi hua, reject.
// - Free Press Journal: CM Rise School (IT Park Bargi Hills) ka bhoomi-pujan CM Mohan Yadav ne kiya; Rakesh Singh sirf upasthit; sthal West seat nahi — reject.
// - The Hitavada (2 Apr 2025): West Assembly me "chaupal" — sirf nirikshan/shikayat-sunvai, reject.
// - Arya Samay (2025): Katanga Tiraha–Gaurighat sewer/Amrit 2.0 restoration par narazgi — sirf nirikshan/fatkaar, reject.
// - Hindusthan Samachar (24 Dec 2025): Rs 40 crore ka lokarpan/bhoomi-pujan Panagar Vidhan Sabha me — West seat se bahar, reject.
// - Rashtra Chandika: Gaurighat/Tilwara ghat vikas ka chunavi-abhiyaan (Nov 2023) vaada — pre-tenure ghoshna, reject.
// - Free Press Journal: Durgawati Memorial — shilanyas PM Modi ne kiya (2023), kaam shuru hi nahi; Rakesh Singh sirf committee me — reject.
// - Business Standard/IndiaTV candidate profiles — sirf election data, reject.
// - Arya Samay: 57-saal upeksha, Rs 11,000 crore flyover, 117 km ring road, airport/railway station, Rs 3,200 crore budget jaise shehar-stariya bade daave — bina GO/data ke swikriti = sirf ghoshna, reject.
// REJECTED — Sushil Kumar Tiwari "Indu Bhaiya" (Panagar):
// - mpnewscast.com: ward-73 M-30 CC road Rs 1.48 crore ka bhoomi-pujan — snippet mila lekin article page fetch timeout; snippet-se-entry mana, reject.
// - hindusthansamachar.in (24 Dec 2025): mantri Rakesh Singh ke Rs 40 crore Panagar kaam — MLA ki concrete bhoomika nahi, mantri ka kaam, reject.
// - public.app video: Pariyat nadi par Rs 7.99–8 crore pul ka bhoomi-pujan — public.app-only + bhoomi-pujan mantri Prahlad Patel ne kiya, MLA sirf maujood, reject.
// - rashtrabaan.in (Aug 2024): patwari pitai ka aarop — ek chhote portal ki single report, bina established-media coverage aur bina FIR/case status ke, reject.
// - zeenews.india.com: jan se maarne ki dhamki wali khabar — COVID-kaalin (pre-Dec 2023), reject.
// - janmatnews.co.in / seetimes.in: Bawdi Utsav me mukhya-atithi ke roop me maujoodgi — sirf maujoodgi, reject.
// - crimebhaskarnews.com: 5 school bhavanon ka CM dwara virtual lokarpan — Oct 2020, pre-term, reject.
// - haribhoomi.com (28 Jan 2025): Timri hatya virodh me chakka-jam me maujoodgi — sirf maujoodgi, reject.
// - Nai Dunia e-paper (31 July 2026): Panagar "report card" — garbled OCR, concrete kaam extract nahi, reject.
// - mpbreakingnews.in (Oct 2026): Sandipani vidyalaya works — Narsinghpur/Gadarwara kshetra, Panagar se bahar, reject.
// - aditinews.com: Mahakumbh bhandare me maujoodgi — sirf maujoodgi, reject.
// REJECTED — Santosh Varkade (Sihora ST):
// - News24 YouTube story (santosh barkade ne loan lekar hospital ke liye daan di zameen) — YouTube-only, reject.
// - Bhaskar English (three-day-old baby airlift): CM air-ambulance (RBSK) sarkari yojana — sirf maujoodgi, reject.
// - Bhaskar English (bus-Durga-pandal accident): hadsa-sthal par sirf maujoodgi, reject.
// - obnews.co / themobiworld.com (Sihora stone-pelting): shanti ki appeal, kaam nahi, reject.
// - YouTube (Chain Singh Varkade bhoomi-pujan): galat vyakti (Maharashtra) + YouTube-only, reject.
// - Free Press Journal (Sihora district-status protest): andolan/vivaad reporting; neta ke khilaf nahi — koi works entry nahi, reject.
// - nationpress.com (CM birthday wish): ceremonial, reject.
// - Election records (myneta/News18/NDTV/Oneindia/Wikipedia/Business Standard/Indian Express/ABP Live): chunav-halafnama/profile, kshetra-kaam nahi, reject.

// ---- Jhabua district batch (researched 2026-10-14) ----
// Jhabua batch — dr-vikrant-bhuria (Jhabua ST AC-193, INC), veersingh-bhuriya (Thandla ST AC-194, INC), nirmala-dileepsingh-bhuria (Petlawad ST AC-195, BJP, Mahila evam Bal Vikas cabinet mantri).
// NOTE: veersingh-bhuriya ko empty array nahi diya gaya — unke liye ek entry mili hai. dr-vikrant-bhuria ke liye koi pass hone wali entry nahi mili (profile khaali rahegi).

mpWorks['nirmala-dileepsingh-bhuria'] = [

  {
    title: 'Jhabua jile me 12 nai sadkon (70.08 km) ke Rs 25.74 crore nirman ki PWD dwara manzoori — Vidhayak Nirmala Bhuria ke prayason se',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 5 Dec 2025',
    sourceUrl: 'https://www.patrika.com/jhabua-news/road-construction-sanctioned-nirmala-bhuriya-jhabua-mp-news-20150151',
    date: '2025-12-05',
    note: 'Patrika ke mutabik Lok Nirman Vibhag ne Jhabua jile me 12 nai sadkon (kul lambai 70.08 km, lagat Rs 25.74 crore) ke nirman ko manzoori di hai; pariyojna vittiya varsh 2025-26 ke anupoorak budget me shamil hai aur tender-prakriya ke baad nirmaan shuru hoga — stage swikriti hai, nirmaan abhi shuru nahi hua. Credit-pardarshita: article kehta hai ki Nirmala Bhuria ne kshetra-bhraman me sthaniya logon se jarjar sadkon ki samasya suni, swayam sadak-prastav taiyaar karke PWD mantri Rakesh Singh ko bheje aur vyaktigat mulakat me manzoori ka aagrah kiya; wo Mahila evam Bal Vikas vibhag ki cabinet mantri hain, lekin article me in sadkon ke liye unki bhoomika unke dastavezi prayason ke roop me spasht hai. 12 sadkon ki poori soochi article me di gayi hai (Moor-Ityaveli Petlawad marg, Jhiri-Umarkot–Deoli Mansiva marg, Jamli-Samli marg aadi).',
    period: '2023-2028',
  },
  {
    title: 'Petlawad me Bamania road overbridge (railway LC-72) ke Rs 21.59 crore nirman ki prashasanik swikriti — Vidhayak Nirmala Bhuria ke prayason se',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 21 Jan 2026',
    sourceUrl: 'https://www.patrika.com/jhabua-news/new-overbridge-will-be-built-in-madhya-pradesh-at-a-cost-of-rs-21-59-crore-20280579',
    date: '2026-01-21',
    note: 'Patrika ke mutabik Lok Nirman Vibhag ne Petlawad Vidhan Sabha kshetra ke tahat Ratlam-Bamania bypass rajya marg par Dahod-Ratlam section ke railway level crossing-72 (km 609/10-12) par road overbridge ke nirman ki prashasanik swikriti jaari ki hai; anumaanit lagat Rs 21.59 crore, vittiya varsh 2025-26 ke budget pravdhanon ke tahat manzoori, aur Patrika ke swikriti-box me swikriti-tithi 3 Jan 2026 darj hai — stage swikriti hai, nirmaan shuru nahi hua. Credit-pardarshita: article kehta hai ki kshetriya vidhayak evam Mahila evam Bal Vikas mantri Nirmala Bhuria ne is overbridge ke liye nirantar prayas kiye aur CM Dr Mohan Yadav v PWD mantri Rakesh Singh ne prastav ko manzoori di; wo cabinet mantri hain lekin article me vidhayak ke prayason ka dastavezi ullekh hai.',
    period: '2023-2028',
  },
  {
    title: 'Petlawad ke Khardu Chhoti gaon me Rs 4.65 crore ke sinchai barrage ka bhoomi-pujan — Vidhayak Nirmala Bhuria',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Dainik Jagran (English), 5 Apr 2026',
    sourceUrl: 'https://english.dainikjagranmpcg.com/states/madhya-pradesh/rs-465-crore-barrage-to-irrigate-280-hectares-in-jhabua/article-16553',
    date: '2026-04-04',
    note: 'Dainik Jagran ke mutabik Cabinet Mantri Nirmala Bhuria ne 4 Apr 2026 ko Jhabua jile ke Petlawad Vidhan Sabha kshetra ke gaon Khardu Chhoti me Rs 4.65 crore ki lagat se banne wale sinchai barrage ka bhoomi-pujan kiya; barrage se lagbhag 280 hectare krishi bhumi ko sinchai milegi. Jal Sansadhan Vibhag ke executive engineer Vipin Patidar samet vibhagiya adhikari karyakram me maujood the aur vibhag nirmaan ki nigrani karega — stage bhoomi-pujan hai, nirmaan abhi shuru hona hai. Credit-pardarshita: ye rajya-sarkar (Jal Sansadhan Vibhag) ki pariyojna hai, lekin article me vidhayak ki bhoomika bhoomi-pujan-karta ke roop me spasht hai aur karyakram unke Vidhan Sabha kshetra me hua.',
    period: '2023-2028',
  },
  {
    title: 'Nagar Parishad Petlawad me lagbhag Rs 8 crore ke vikas karyon ka lokarpan v bhoomi-pujan — Vidhayak Nirmala Bhuria',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'The Free Press Journal, 13 Jul 2026',
    sourceUrl: 'https://www.freepressjournal.in/indore/cabinet-minister-nirmala-bhuria-inaugurates-development-works-worth-7994-crore-in-mps-petlawad',
    date: '2026-07-13',
    note: 'FPJ ke mutabik Cabinet Mantri Nirmala Bhuria ne 13 Jul 2026 ko Nagar Parishad Petlawad me vikas karyon ka lokarpan v bhoomi-pujan kiya: Pampavati nadi par Tejaji Mandir se Phuta Mandir tak sadak nirman (Rs 481.49 lakh), Amrit 2.0 yojana ke tahat Muktidham me bagicha (Rs 14.54 lakh), ward-8 me samudayik bhavan (Rs 28.86 lakh) aur angrezi-madhyam chhatrawas (Rs 275.43 lakh) — kul lagbhag Rs 8 crore; stage sanyukt lokarpan v bhoomi-pujan. Ankdon me pardarshita: FPJ ki headline me "Rs 799.4 crore" likha hai, lekin article ke andar diye gaye item-wise aankde (481.49+14.54+28.86+275.43 lakh) kul lagbhag Rs 8 crore hote hain; do Hindi sthaniya portalon (samachar20.online, todayliveindia.in) ne bhi lagbhag Rs 8 crore hi likha hai, isliye title me Rs 8 crore rakha gaya hai. Credit-pardarshita: ye nagar parishad/vibhagiya pariyojnaen hain, vidhayak (jo cabinet mantri bhi hain) ne apne Vidhan Sabha kshetra me inka lokarpan v bhoomi-pujan kiya, article me ye bhoomika spasht hai.',
    period: '2023-2028',
  },
];

mpWorks['veersingh-bhuriya'] = [

  {
    title: 'Meghnagar block ki gram panchayat Vadli Pada me Janpad-nidhi (15th Finance Commission) ke pullia v check-dam karyon ka bhoomi-pujan — Vidhayak Veersingh Bhuriya',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'New India Times (Jhabua), 3 Mar 2025',
    sourceUrl: 'https://www.newindiatimes.net/?p=148799',
    date: '2025-03-03',
    note: 'Article ke mutabik Thandla vidhayak Veersingh Bhuriya aur Janpad adhyaksha Lalita Mukesh Muniya ne Jhabua jile ke Meghnagar vikas-khand ki gram panchayat Vadli Pada me Janpad-nidhi se 15th Finance Commission ke tahat hone wale lakhon rupaye ke pullia-nirman v check-dam karyon ka pooja-archna karke bhoomi-pujan kiya; article me lagat ka nirdisht aankda nahi diya gaya hai — stage bhoomi-pujan hai. Credit-pardarshita: vidhayak ki bhoomika bhoomi-pujan-karta ke roop me article me spasht hai; ye Janpad-nidhi ke kaam hain, vidhayak-nidhi (MLA fund) ka ullekh article me nahi hai. Disclosure: ye chhota sthaniya portal hai (New India Times, Jhabua bureau).',
    period: '2023-2028',
  },
];

// REJECT-LOG (Jhabua district batch, researched 2026-10-14):
// REJECTED — Dr. Vikrant Bhuria (Jhabua ST, INC):
// - TOI/Zee News (Feb 2025): All India Adivasi Congress ke rashtriya adhyaksh ki niyukti — party post, kshetra-kaam nahi, reject.
// - Zee News (Apr 2024): mantri Nagar Singh Chauhan par vivadit bayan par Alirajpur thane me dhara 188 me FIR — chunavi-prachar ka bayan-vivad; office ke durupayog/bhrashtachar ka mamla nahi, negative-entry ke manak (case + arop ke bawjood) par bhi sirf bayan-vivad hone se reject.
// - Zee News: Petlawad ke Para gaon me nal-jal yojana par dharne me PHE adhikariyon ko thappad marne ki dhamki — virodh/dharna/maang, reject.
// - TheSootr (Mar 2025): vidhayak swecchhanudan nidhi ke durupayog ka arop (Mathias Bhuria ki Rajyapal ko shikayat, Vikrant v unke pita Kantilal dono par) — sirf shikayat, koi FIR/case ki sthiti nahi; pita ke maamle attribution-wirodh niyam se waise bhi kabhi nahi, reject.
// - ETV Bharat (12 Feb 2024): PM Modi ke Jhabua daure par tipanni, adivasi anchal ke liye maangein — sirf bayan/maang, reject.
// - Telegraph/ThePrint/TOI (Nov 2023): palayan par chunav-kaleen features — chunav data/sandarbh, kaam nahi, reject.
// REJECTED — Veersingh Bhuriya (Thandla ST, INC):
// - Zee News (Jan 2021): Thandla block me nal-jal yojanaon ka bhoomi-pujan — pre-tenure (Dec 2023 se pehle), reject.
// - Zee News/NewsArenaIndia (Apr 2024): Madrani rally me "haath kaat do" bayan par EC dwara dhara 188 me FIR — chunavi bayan-vivad; sirf bayan hone se negative entry nahi banti, reject.
// - samachar20.online (9 Oct 2026): Seva Sankalp abhiyan me Badi Dhamni jungle me paudharopan, SDM ke saath — ceremonial maujoodgi, durable kaam nahi, reject.
// - YouTube/Public Voice News (~Jun 2026): Thandla me Rs 1.05 crore ke samudayik bhavan ka bhoomi-pujan — YouTube-only, canonical news nahi mili, reject.
// - newindiatimes.net (Sep 2026): kshatigrast pullia marammat aur chhatrawas seat-vriddhi ke liye collector/sahayak aayukt ko patra — sirf maang/patra, reject.
// - Business Standard video (Jun 2019): triple-riding challan par police se behas — pre-term, kaam nahi, reject.
// REJECTED — Nirmala Dileepsingh Bhuria (Petlawad ST, BJP):
// - public.app (19 Dec 2025): Petlawad me Rs 4.08 crore ke circuit house ka bhoomi-pujan — public.app-only, canonical coverage nahi mili, reject.
// - YouTube (~Mar 2026): Ramgarh me Rs 3.79 crore ke stop-dam ka bhoomi-pujan — YouTube-only, canonical news nahi mili, reject.
// - FPJ (Sep 2025): CM Mohan Yadav ka Jhabua me Rs 345 crore ka karyakram (Petlawad blast shraddhanjali + CM ghoshnaen) — wo sirf maujood thi; CM ki pariyojnaen, unki concrete bhoomika nahi, reject.
// - mahikigunj e-paper: poorv-chunav vishleshan (~2023) — chunav coverage, kaam nahi, reject.
// NOTED: Nirmala Bhuria Mahila evam Bal Vikas vibhag ki cabinet mantri hain — unki entries sirf Petlawad Vidhan Sabha kshetra-specific karyon par hain; article me unki bhoomika (prayas/bhoomi-pujan/lokarpan) dastavezi hai.

// ---- Katni district batch (researched 2026-10-14) ----
// ---- Dhirendra Bahadur Singh (Dhiru) — Barwara ST (AC-91), BJP, Katni district ----
mpWorks['dhirendra-bahadur-singh-dhiru'] = [
  {
    title: 'Paharua gram panchayat me nava-nirmit up-swasthya kendra ka MLA Dhiru ne kiya lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Kalyug Ki Kalam, 9 Oct 2026',
    sourceUrl: 'https://kalyugkikalam.com/new-gift-to-health-facilities-in-paharua-mla-dhirendra-bahadur-singh-inaugurated-the-newly-constructed-sub-health-center/',
    date: '2026-10-09',
    note: 'Dhimarkheda janpad panchayat ke gram panchayat Paharua me nava-nirmit up-swasthya kendra ka bhawan taiyar hone par vidhayak Dhirendra Bahadur Singh ne karyakram me shamil hokar lokarpan kiya; sarpanch Sharda Prasad Mahobia, Ajay Gupta sahit vibhagiya adhikari maujud the. Stage: lokarpan (purnata). Credit-transparency: article me kis nidhi se bhawan bana iska ullekh nahi hai — sirf MLA dwara lokarpan documented hai. Disclosure: source chhota local portal hai (Kalayug Ki Kalam, Dhimarkheda edition).',
    period: '2023-2028',
  },
  {
    title: 'Simaria panchayat bhawan (Rs 20 lakh) ka sansad Himadri Singh ke saath MLA Dhiru ne kiya bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Kalyug Ki Kalam, 5 Oct 2026',
    sourceUrl: 'https://kalyugkikalam.com/panchayat-building-will-be-built-in-simaria-at-a-cost-of-rs-20-lakh-mp-himadri-singh-and-mla-dhirendra-singh-performed-the-panchayat-under-the-bhoomi-pujan-seva-setu-campaign/',
    date: '2026-10-05',
    note: 'Dhimarkheda janpad ki gram panchayat Simaria me Rs 20 lakh ki lagat se banne wale panchayat bhawan ka Shahdol sansad Himadri Singh aur Barwara vidhayak Dhirendra Bahadur Singh ne Seva Setu abhiyan ke tahat vidhivat bhoomi-pujan kiya; panchayat parisar me vriksharopan bhi hua. Stage: bhoomi-pujan (nirman shuru). Credit-transparency: rashi SANSAD nidhi (MPLADS) se swikrit hai, vidhayak-nidhi nahi — MLA ki concrete bhoomika sansad ke saath bhoomi-pujan me upasthiti hai, fund ka shrey sansad nidhi ka hai. Disclosure: source chhota local portal hai (Kalayug Ki Kalam, Dhimarkheda edition).',
    period: '2023-2028',
  },
];

// ---- Sanjay Satyendra Pathak — Vijayraghavgarh (AC-92), BJP, Katni district ----
// Note: sirf Dec 2023+ ka MLA-karya; poorv mantri-karyakaal (2016-2018) aur usse pehle ke kaam poori tarah baahar.
mpWorks['sanjay-satyendra-pathak'] = [
  {
    title: 'Rs 17.5 crore ke vikas karyon ka MLA Sanjay Pathak ne kiya bhoomi-pujan (Vijayraghavgarh)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Yashbharat, 29 Feb 2024',
    sourceUrl: 'https://www.yashbharat.com/bhoomipujan-of-development-works-worth-rs-17-crore-56-lakhs-done-in-vijayraghavgarh-assembly/',
    date: '2024-02-29',
    note: 'Vikasit Bharat Vikasit Madhya Pradesh karyakram ke dauran vidhan sabha kshetra ke lagbhag Rs 17.5 crore ke karyon ka bhoomi-pujan vidhayak ne kiya: 97 naveen krishi transformer (Rs 6.31 crore), 43 samudayik/mangal bhawan (Rs 11.2 crore), CC road aur saundaryikaran karya. Stage: bhoomi-pujan; kuch karyon ka virtual shilanyas PM Narendra Modi ne kiya. Credit-transparency: ye kendra-rajya pariyojnaon ka samoohik karyakram tha — MLA ki concrete bhoomika sthaniya bhoomi-pujan hai; unka dawa hai ki karyakaal ke pehle do mahine me unhone 97 krishi transformer swikrit karaye (swayam-dawa, full disclosure).',
    period: '2023-2028',
  },
  {
    title: 'Kaimor me water fountain saundaryikaran ka lokarpan aur 15 wardon me Rs 2 crore sadak karyon ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'RPKP India News, 14 Jul 2024',
    sourceUrl: 'https://rpkpindianews.com/archives/36718',
    date: '2024-07-13',
    note: 'Kaimor nagar me rashtriya dhwaj stambh kshetra ke park me high-strength water fountain sahit anya sanrachnaon ke saundaryikaran karyon ka lokarpan aur Kaimor nagar ke 15 wardon me sadkon ke damarikaran va CC road paver block ke lagbhag Rs 2 crore ke nirman karyon ka bhoomi-pujan vidhayak Sanjay Satyendra Pathak ne 13 Jul 2024 ko kiya; nagar parishad adhyaksh Manisha Ajay Sharma sahit janpratinidhi maujud the (post-event report). Stage: lokarpan (saundaryikaran) + bhoomi-pujan (sadak karya). Disclosure: source chhota local portal hai (RPKP India News).',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak-nidhi se 8 gram panchayaton ko 8 paani tanker vitrit',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Lokvaad, 5 Apr 2025',
    sourceUrl: 'https://lokvaad.com/archives/696',
    date: '2025-04-05',
    note: 'Garmi se pehle vidhayak Sanjay Pathak ne apni vidhayak-nidhi (MLA fund, sansad-nidhi nahi) se 8 water tanker 8 gram panchayaton — Badari, Mehangaon, Amehta, Kalhara, Kuthiya Mahgawan, Baran Mahgawan, Itaura, Hadarhata — ke sarpanchon ko saupe; peyjal aapoorti ke saath dharmik/samajik karyakramon aur aagjani me bachav kary me upyog honge. Stage: vitran/purnata (tanker vastav me saunpe gaye, sirf ghoshna nahi). Disclosure: source chhota local portal hai (Lokvaad).',
    period: '2023-2028',
  },
  {
    title: 'Janpad panchayat Vijayraghavgarh me video-conference hall ka lokarpan, baithak kaksh ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Yashbharat, 27 Jan 2026',
    sourceUrl: 'https://www.yashbharat.com/mla-sanjay-pathak-inaugurated-bhoomi-pujan-for-public-facilities-at-vijayraghavgarh-district-office/',
    date: '2026-01-27',
    note: 'Gantantra Diwas (26 Jan 2026) par janpad panchayat karyalaya me vidhayak ne video-conference hall ka lokarpan tatha baithak kaksh ka bhoomi-pujan, boundary wall-sah-dukanon aur mahila-purush shauchalay sahit kiya. Rs 25 lakh ke meeting hall ko bada banane ke liye vidhayak-nidhi (MLA fund, sansad-nidhi nahi) se Rs 15 lakh aur furniture ka paisa alag se dene ki ghoshna ki — ye unka commitment hai, sanction proof report me nahi. Stage: lokarpan (VC hall) + bhoomi-pujan (hall); Rs 15 lakh ka hissa ghoshna star par. Disclosure: karyakalap ki fund-sanction ya work-order report me documented nahi.',
    period: '2023-2028',
  },
  {
    title: 'Anupurak budget me Rs 40 crore ke do pul (Katni nadi, Mahanadi) va sampark sadken — bajatiya swikriti',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Yashbharat, 23 Jul 2026',
    sourceUrl: 'https://www.yashbharat.com/in-the-supplementary-budget-vijayraghavgarh-assembly-got-the-gift-of-two-bridges-worth-rs-40-crores-after-the-efforts-of-mla-sanjay-pathak/',
    date: '2026-07-23',
    note: 'MP vidhan sabha ke mansoon satra me anupurak budget me Vijayraghavgarh ko lagbhag Rs 40 crore ki bajatiya swikriti mili: Katni nadi par gram Ghunsur–Mohas uchch-stariya pul + 3 km sadak (Bhenswahi/Ghunsur ko Kanti kshetra se jodega) aur Mahanadi par gram Bakeli–Gudeha/Pipra pul + 8.5 km sadak. Stage: swikriti (bajatiya swikriti — tareekh+rakam ke saath pakki media report; abhi bhoomi-pujan nahi). Credit-transparency: CM Mohan Yadav dwara swikrit rajya-bajat nirnay; MLA ki dastavezi pahal — May 2026 me CM se bhet karke patra se prastav (article me documented), jiska seedha parinam swikriti me dikha. Note: isi khabar ka madhyapradeshsamacharchannel wala URL dead (404) tha.',
    period: '2023-2028',
  },
  {
    title: 'MP High Court me aapradhik avmanana karyavahi: Pathak ki bina-shart maafi swikar, kadak chetavani',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'India TV Hindi, 22 Jul 2026',
    sourceUrl: 'https://www.indiatv.in/madhya-pradesh/bjp-mla-sanjay-pathak-gets-relief-from-high-court-regarding-matter-of-calling-judge-gives-warning-apology-accepted-2026-07-22-1232807',
    date: '2026-07-22',
    note: 'Negative entry: Katni ke Ashutosh Dixit ki yachika (Pathak se sambandhit company ke khilaf lagbhag Rs 1200 crore ke avaidh utkhanan recovery ka aarop — disclosure: khanan ka aarop COMPANY par hai, Pathak khud us mamle me pakshkar nahi, isliye khanan ghotala Pathak par attribute nahi) ki sunvai me 1 Sep 2025 ko Pathak ne nyayamurti Vishal Mishra ko call/message karne ka prayas kiya; judge ne khud ko sunvai se alag kiya aur High Court ne swatah-sangyan aapradhik avmanana karyavahi (Contempt Petition Criminal No. 5/2026) chalai. Pathak ne vyaktigat roop se upasthit hokar bina-shart maafi mangi (dawa: galti se dial, shishtachar sandesh matra, badha ka irada nahi). High Court ne Contempt Act dhara 13 ke tahat maafi swikar ki aur bhavishya me dohrane par kadak chetavani di. Stage: adhikarik karwai poorn (nirnay 22 Jul 2026).',
    period: '2023-2028',
  },
  {
    title: '1135 ekad adivasi zameen kharid me fariwade ka aarop: adivasi sangathanon ka Katni Collectorate par pradarshan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Patrika, 19 Nov 2025',
    sourceUrl: 'https://www.patrika.com/katni-news/strong-protest-against-mla-sanjay-pathak-in-katni-20113543',
    date: '2025-11-19',
    note: 'Negative entry: aarop hai ki Pathak ne apne chaar adivasi karmchariyon (Natthu Kol, Prahlad Kol, Rakesh Singh Gaud, Raghuraj Singh Gaud) ko mohra banakar Dindori, Jabalpur, Umaria, Katni aur Seoni me lagbhag 1135 ekad Baiga adivasi zameen farzi tareeke se kharidi; shikayat SP ko 9 Jun 2025 aur Collector ko 29 Sep 2025 ko di gayi; Youth Congress, GGP sahit adivasi sangathanon ne 19 Nov 2025 ko Katni Collectorate ka gherav kiya. Adhikarik karwai ki sthiti: police janch shuru (ASP ne shikayatkarta ke bayan darj kiye — chhote local portal rashtrarakshak ki report, disclosure), Rashtriya Adivasi Ayog ne 15 Sep ko 5 jilon ke collectorn se jawab manga (Bhaskar English; Dindori collector ke anusar SDM ke paryavekshan me janch). Abhi FIR ya chargesheet ki khabar nahi; Pathak ka jawab reporting me uplabdh nahi mila. Aarop seedha Pathak par hai (parivar/company nahi).',
    period: '2023-2028',
  },
];

/*
REJECT-LOG (Katni batch 1 — har lead jo article kholkar check hui, pass nahi hui):
1. [Dhiru] News18 Hindi (8 Aug 2026) — ITI Dhimarkheda ko lekar vidhayak ki samarthakon se bahas: sirf vivad/virodh ki khabar, koi lokarpan/swikriti/ghoshna nahi — entry-worthy kaam nahi.
2. [Dhiru] Janlok Times — ITI Dhimarkheda (Umariyapan) ka aukaat nirikshan: sirf nirikshan/daura — REJECT.
3. [Dhiru] Kalyug Ki Kalam — Dhimarkheda me 'Sarkar Aapke Dwar' shivir me upasthiti/jaiza: sirf karyakram me maujoodgi, koi concrete kaam nahi — REJECT.
4. [Dhiru] YouTube (India Ahead) — 'Thakur Dhirendra Singh' Noida/UP ka vidhayak: galat vyakti + YouTube-only source — REJECT.
5. [Dhiru] ABP/Oneindia/NDTV/Business Standard election profiles: keval chunaavi data, koi karya nahi — REJECT.
6. [Pathak] Trilok News — Vijayraghavgarh me pravesh dwar, 100-ft tiranga, water cooler ka lokarpan: page open hi nahi hua (fetch fail), snippet-only — unverifiable — REJECT.
7. [Pathak] Yashbharat pre-event (Kaimor, 13 Jul 2024) — 'karenge' wali future announcement; post-event report RPKP se entry li — REJECT (duplicate/future).
8. [Pathak] Yashbharat (11 Mar 2026) — MP cabinet ne Kaimor ESIC aushadhalaya swikrit: CM ka rajya nirnay, MLA ki concrete bhoomika nahi (sirf aabhar vyakt) — REJECT.
9. [Pathak] Wikipedia/Sarasjanvaad — Harihar Teerth Dham bhoomi-pujan Jun 2023: karyakaal (Dec 2023) se pehle — REJECT.
10. [Pathak] The Tribune — Aadhaar card tampering: Pathak khud shikayatkarta (victim), un par koi aarop nahi, kshetra-kaam nahi — REJECT.
11. [Pathak] CNBC TV18 / Oneindia contempt stories: India TV Hindi wala canonical article li gayi — REJECT (duplicate coverage).
12. [Pathak] madhyapradeshsamacharchannel (40 crore pul): URL dead (404), snippet-only; wahi khabar Yashbharat se verify karke entry li — REJECT (dead source).
*/

// ---- Sandeep Shriprasad Jaiswal — Murwara (AC-93), BJP, Katni district ----
mpWorks['sandeep-shriprasad-jaiswal'] = [
  {
    title: 'Vidhayak Sandeep Jaiswal ne Kanhwara-Dithwara bypass ka lokarpan kiya, ek schooli bachchi ne kaata feeta',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Nidar Awaaz, Jun 2026 (est.)',
    sourceUrl: 'https://nidarawaj.live/2026/06/bchchee-ke-hathon-huaa-knhvara-baypas-ka-lokarpan-vidhayk-sandeep-jaysval-ne-diya-naree-shkti-ka-sandesh/',
    date: '2026-06-16',
    note: 'Gram Kanhwara (Katni rural mandal, Murwara AC) me vidhayak ne bahupratikshit Kanhwara-Dithwara bypass sadak ka lokarpan karke janta ko samarpit kiya; parampra todkar ek schooli bachchi se feeta katwaya. Stage: lokarpan (work complete). Credit-transparency: sadak PWD/shasan mad se bani (yehi bypass unke Dec 2024 ke anupoorak-budget swikriti dawon ki suchi me bhi tha, ab ground par lokarpan ho gaya). Source chhota local portal hai — disclosure.',
    period: '2023-2028',
  },
  {
    title: 'Pahadi Nivar govt high school me naye paver block ka bhoomi-pujan, vidhayak ne rakhi adhaarshila',
    category: 'School',
    badge: 'news',
    sourceLabel: 'MP Samachar Channel, 3 Oct 2026',
    sourceUrl: 'https://www.madhyapradeshsamacharchannel.com/2026/10/blog-post_566.html',
    date: '2026-10-03',
    note: 'Shaskiya High School Pahadi Nivar me navin paver-block nirman kaary ka vidhivat bhoomi-pujan; vidhayak Sandeep Jaiswal ne chhatraon se pooja karakar adhaarshila rakhi; janpad CEO, sarpanch aur shikshak upasthit. Stage: bhoomi-pujan (work start). Lagat article me nahi di gayi. Source chhota local portal hai — disclosure.',
    period: '2023-2028',
  },
  {
    title: 'Supplementary budget me Murwara ke liye 16 yojnaon (lagbhag Rs 700-800 crore) ki swikriti ka dawa',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'MP Samachar Channel, Dec 2024 (est.)',
    sourceUrl: 'https://www.madhyapradeshsamacharchannel.com/2024/12/800.html',
    date: '2024-12-01',
    note: 'Patrakar-varta me vidhayak ka dawa: MP shasan ke varsh 2024-25 anupoorak budget me Murwara AC ki 16 yojnaon ko swikriti mili — Mangal Nagar-Jharra Tikuriya aur Gayatri Nagar-Civil Line ROB, Takhla fatak aur Amirgany Padarwara fatak par ROB, ring road, Kanhwara bypass, Katayeghat-Kailwara Khurd pul-sadak sahit sadak-chaudikaran. Stage: swikriti (claimed). Full disclosure: ye vidhayak ke swayam ke press-conference ka dawa hai; article me alag-alag swikriti aadesh/GO number nahi diye gaye, isliye badge dawa rakha gaya hai. Source chhota local portal hai — disclosure.',
    period: '2023-2028',
  },
];

// ---- Pranay Prabhat Pandey (Guddu Bhaiya) — Bahoriband (AC-94), BJP, Katni district ----
mpWorks['pranay-prabhat-pandey-guddu-bhaiya'] = [
  {
    title: 'Rampatan se Hathiyagarh tak Rs 5.72 crore ki 3.73 km sadak ka kaam shuru, 40 gaon ko 20 km ka chakkar khatm',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Naidunia, 24 Aug 2026',
    sourceUrl: 'https://www.naidunia.com/madhya-pradesh/katni-a-road-is-being-carved-through-the-mountain-in-katnis-bahoriband-the-journey-will-be-shortened-by-20-km-8459333',
    date: '2026-08-24',
    note: 'Bahoriband AC ke dashakon purane pratikshit marg par vidhayak Pranay Pandey ki pahal par PWD ne Rs 5.72 crore ki lagat se 3.73 km sadak ko swikriti dekar kaam shuru karaya; Kaimur pahad ki 25 m unchi chattan katkar 22 m chaudai me rasta banaya ja raha hai; lagbhag 40 gaon ki 50,000+ abadi ko labh, 20 km ka lamba chakkar bachega. Stage: swikriti + kaam shuru (construction in progress). Credit-transparency: shasan ka PWD kaam hai; vidhayak ki concrete bhoomika (CM aur vibhagiya mantriyon ko prastav bhejna) article me spasht hai.',
    period: '2023-2028',
  },
  {
    title: 'Badkheda Neem me Rs 25 lakh ke samudayik bhavan aur Rs 3 lakh ke rangmanch ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Yashbharat.com, 15 Jan 2026',
    sourceUrl: 'https://www.yashbharat.com/mla-pranay-pandey-performed-bhoomi-pujan-and-inaugurated-the-foundation-stone-of-development-works-in-badkheda-neem/',
    date: '2026-01-15',
    note: 'Gram panchayat Badkheda Neem (Bahoriband vikas-khand) me vidhayak ne mukhya atithi ke roop me state-level se prapt stamp-shulk mad se Rs 25 lakh lagat ke samudayik bhavan aur Rs 3 lakh lagat ke rangmanch ka vidhivat bhoomi-pujan kiya; sarparch, janpad sadasya aur BJP padadhikari upasthit. Stage: bhoomi-pujan (work start). Source chhota local portal hai — disclosure.',
    period: '2023-2028',
  },
  {
    title: 'Badkheda Neem me Hanuman mandir ke paas Rs 2.5 lakh ke navnirmit rangmanch ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Yashbharat.com, 15 Jan 2026',
    sourceUrl: 'https://www.yashbharat.com/mla-pranay-pandey-performed-bhoomi-pujan-and-inaugurated-the-foundation-stone-of-development-works-in-badkheda-neem/',
    date: '2026-01-15',
    note: 'Ussi karyakram me vidhayak ne Hanuman mandir ke sameep Rs 2.50 lakh ki lagat se bane navnirmit rangmanch ka lokarpan kiya. Stage: lokarpan (work complete). Source chhota local portal hai — disclosure.',
    period: '2023-2028',
  },
  {
    title: 'Rs 2.72 crore ke swasthya karyon ka bhoomi-pujan — 2 up-swasthya kendra aur 3 Ayush aushadhalay',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'India Pol Khol, Aug 2024 (est.)',
    sourceUrl: 'https://indiapolkhol.in/mla-pranay-pandey-performed-bhoomi-pujan-of-development-works-worth-rs-2-crore-72-lakh/',
    date: '2024-08-09',
    note: 'Vidhayak ne Imaliya aur Kooda gaon me 65-65 lakh ke do up-swasthya kendra (doctor clinic, labour room, 2-bed ward, ANM niwas sahit) aur Kooda, Kaudiya, Bilhari me 47.58-47.58 lakh ke teen Ayush aushadhalay bhavanon ka bhoomi-pujan kiya; BMO aur swasthya vibhag ke adhikari upasthit. Stage: bhoomi-pujan (work start). Source chhota local portal hai — disclosure.',
    period: '2023-2028',
  },
];

// ---- REJECT-LOG (Katni batch2: Murwara + Bahoriband) ----
// SANDEEP JAISWAL (Murwara):
// 1. rpkpindianews vikas-yatra (30 lakh ke lokarpan/bhoomi-pujan) — REJECT: article 8 Feb 2023 ka, karyakaal (Dec 2023) se pehle.
// 2. Tilak College 50-seater kanya chhatravas lokarpan (Rs 1.2 cr, mpnewscast) — REJECT: ~Aug 2023 (CM Shivraj era), pre-term.
// 3. Kuthla high school bhavan ka bhoomi-pujan (Patrika, Jan 2026) — REJECT: bhoomi-pujan CM Mohan Yadav ne kiya; vidhayak ki concrete bhoomika nahi.
// 4. Vidhan Sabha me PWD budget par bhashan / maang (YouTube) — REJECT: YouTube-only source + sirf maang/prastav, kaam nahi.
// 5. Ghantaghar-Jagannath Chowk sadak sawal (news24you) — REJECT: sirf sawal/maang, swikriti/work-order proof nahi.
// 6. Prabal Srishti blogspot (800-cr press conference ka dup) — REJECT: blogspot-only, swikriti ke liye; wahi dawa chhote local portal se liya gaya.
// 7. mp samachar 2026/07 article (Sanjay Pathak, Vijayraghavgarh) — REJECT: doosre MLA ki AC.
// PRANAY PANDEY (Bahoriband):
// 8. mpnewscast 194.93 lakh prashasnik swikriti (26 July) — REJECT: ~July 2023, pre-term (karyakaal se pehle).
// 9. Bhuta talab tourism nirikshan (India Pol Khol, ~Jul 2025) — REJECT: sirf nirikshan + collector ko maang-patra; swikriti/lokarpan nahi.
// 10. graminkhabarmp profile puff-piece (Dec 2024) — REJECT: samanya prashansa, koi concrete kaam/stage nahi.
// 11. thesootr (Sihora ke works par vidhan sabha sawal) — REJECT: doosri AC (Sihora) ka mudda, apna kaam nahi.
// 12. News18 bus-driving viral video — REJECT: irrelevant (kaam se sambandh nahi).
// 13. newsonair: CM dwara Bahoriband lift micro-irrigation project (May 2024, Rs 1011 cr) — REJECT: CM ki rajya-pariyojna; vidhayak ki concrete bhoomika article me nahi.
// 14. Business Standard/ABP candidate profiles — REJECT: election data, works nahi.

// ---- Khandwa district batch (researched 2026-10-14) ----
// Khandwa batch — narayan-patel (Mandhata AC-175, BJP), kunwar-vijay-shah (Harsud ST AC-176, BJP, Janjatiya Karya cabinet mantri), kanchan-mukesh-tanve (Khandwa SC AC-177, BJP), chaya-more (Pandhana ST AC-178, BJP).
// NOTE: narayan-patel ke liye koi pass hone wali entry nahi mili (profile imaandari se khaali rahegi) — unko koi empty array nahi diya gaya.

mpWorks['kunwar-vijay-shah'] = [

  {
    title: 'Harsud ke Jamni Gurjar me Rs 2.20 crore ke senior kanya chhatravas bhawan ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Pawan City (Khandwa local portal), 20 Sep 2025',
    sourceUrl: 'https://pawancity.com/minister-shah-inaugurated-the-hostel-building-and-worshiped-the-land-for-the-construction-work-of-cc-road/',
    date: '2025-09-20',
    note: 'Lokarpan stage — naya senior kanya chhatravas bhawan (Jamni Gurjar, Harsud AC) Rs 2.20 crore lagat se poorn hokar bana; mantri ne swayam phita kaatkar lokarpan kiya. Fund-srot news me spasht nahi (shasakiya/janjatiya vibhaagiya yojana sambhav); vidhayak-nidhi hone ka dawa report me nahi. Mantri-role disclosure: ye inke apne kshetra aur inke vibhaag se juda kaam hai, lekin rajya-stariya vibhaagiya faisla nahi. Source chhota local portal hai, disclosure.',
    period: '2023-2028',
  },
  {
    title: 'Harsud ke Jamni Gurjar me kanya shiksha parisar tak Rs 40 lakh ki CC pahunch-sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Pawan City (Khandwa local portal), 20 Sep 2025',
    sourceUrl: 'https://pawancity.com/minister-shah-inaugurated-the-hostel-building-and-worshiped-the-land-for-the-construction-work-of-cc-road/',
    date: '2025-09-20',
    note: 'Shilanyas/bhoomi-pujan stage — Jamni Gurjar (Harsud AC) me mukhya marg se kanya shiksha parisar tak lagbhag Rs 40 lakh lagat ki cement-concrete pahunch sadak ka bhoomi-pujan mantri ne swayam kiya. Fund-srot report me spasht nahi; vidhayak-nidhi hone ka dawa nahi. Mantri-role disclosure: kshetra aur vibhaag dono se juda kaam, rajya-stariya faisla nahi. Source chhota local portal hai, disclosure.',
    period: '2023-2028',
  },
  {
    title: 'Harsud ke Rajur me kanya shiksha parisar ke liye CC pahunch-sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Pawan City (Khandwa local portal), 20 Sep 2025',
    sourceUrl: 'https://pawancity.com/minister-shah-inaugurated-the-hostel-building-and-worshiped-the-land-for-the-construction-work-of-cc-road/',
    date: '2025-09-20',
    note: 'Shilanyas/bhoomi-pujan stage — gram Rajur (Harsud AC) me kanya shiksha parisar ke liye cement-concrete pahunch sadak ka bhoomi-pujan mantri ne swayam kiya (SDM bhi maujood the). Lagat report me nahi di gayi; fund-srot vidhayak-nidhi hone ka dawa nahi. Mantri-role disclosure: kshetra se juda kaam. Source chhota local portal hai, disclosure.',
    period: '2023-2028',
  },
  {
    title: 'Harsud ke Roshni gaon me Rs 1.36 crore ke integrated farming cluster ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Krishak Jagat, 6 Jan 2026',
    sourceUrl: 'https://www.krishakjagat.org/news/the-lakhpati-didi-concept-is-becoming-a-reality-in-khandwa-district/',
    date: '2026-01-06',
    note: 'Shilanyas/bhoomi-pujan stage — Pradhan Mantri Matsya Sampada Yojana ke tahat swikrit lagbhag Rs 1.36 crore ke integrated farming cluster (pond biofloc, 7 biofloc tanks, cage culture) ka bhoomi-pujan gram Roshni, Khalwa block (Harsud AC) me mantri ne swayam kiya. Yojana ka naam aur vibhaag spasht hai; report me kendriya GO/adesh quoted nahi isliye stage bhoomi-pujan hi rakha. Mantri-role disclosure: kendriya/rajya yojana ka project hai, lekin karyakram inke Vidhan Sabha kshetra me inke dwara kiya gaya. Hindusthan Samachar ne bhi isi event ki report di thi (2 Jan 2026).',
    period: '2023-2028',
  },
  {
    title: 'Col Sofiya Qureshi par vivadit bayan ke mamle me FIR, SC-SIT jaanch aur maafi — abhiyojan-swikriti pending',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Rediff, 31 Aug 2026',
    sourceUrl: 'https://www.rediff.com/news/report/remarks-on-col-sofiya-sanction-awaited-to-prosecute-mp-minister-sc-told/20260831.htm',
    date: '2026-08-31',
    note: 'Negative entry. Aarop: Operation Sindoor ke baad 11 May 2025 ko Raikunda (Indore) me Col Sofiya Qureshi par vivadit tippani (video par). Karwai: MP High Court ne suo motu cognisance lekar FIR ka aadesh diya, FIR Manpur thana (Mhow) me darj hui; Supreme Court ne SIT gathit ki, SIT jaanch poorn, report sealed cover me. Neta ka jawab: Shah ne sarvajanik roop se khed vyakt kiya; lekin court ne July 2025 me maafi record par na hone par fatkaar lagayi. Status (31 Aug 2026): chargesheet ke liye competent authority se abhiyojan-swikriti pending; SC ne mamla sthagit kiya. Ye court-adhaarrit vivad hai, party-virodh nahi; nirdoosh/doshi koi nishkarsh na nikala jaye.',
    period: '2023-2028',
  },
];

mpWorks['kanchan-mukesh-tanve'] = [

  {
    title: 'Khandwa me Rs 8.43 crore ke 11 shahari vikas karyaon ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, 15 Jul 2026',
    sourceUrl: 'https://www.bhaskar.com:443/local/mp/khandwa/news/khandwa-mla-kanchan-tanve-bjp-controversy-development-inauguration-138452401.html',
    date: '2026-07-15',
    note: 'Stage bhoomi-pujan/shilanyas hai, kaam poore nahi hue. Bhaskar ke mutabik budget vidhayak ke liye reserve vishesh CM adhosanrachna mad se swikrit tha. Credit-spashtata: mahapaur ne CM ko shrey diya, vidhayak ne dawa kiya ki unki vishesh nidhi se swikrit karakar CM ne manzoori di; vibhagiya swikriti-dastavej ka independent saboot article me nahi. Karyaon me Ram eshwar kund aur Padamkund jeernoddhar, muktidham soundaryikaran, mandiron aur purane bus stand ka soundaryikaran, CC road, tin shade aur bagicha shamil. Isme koi sansad-nidhi nahi hai.',
    period: '2023-2028',
  },
  {
    title: 'Khandwa me vidhayak-nidhi se Rs 5 lakh ke tin shed ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Trilok Drishti, 19 Sep 2026',
    sourceUrl: 'https://trilokdrishti.com/?p=364817',
    date: '2026-09-19',
    note: 'Tin shed bankar taiyaar, lokarpan ho chuka — stage poora hai; chhote local portal ki report hai, disclosure. Vidhayak ne bataya ki Gurav Samaj ke vikas karyaon ke liye kul Rs 10 lakh swikrit kiye gaye hain (5 lakh tin shed, 3 lakh CC road, 2 lakh nali) — ye unka apna dawa hai; CC road aur nali ke kaam shuru ya poore hone ka saboot report me nahi. Isme koi sansad-nidhi shamil nahi hai.',
    period: '2023-2028',
  },
];

mpWorks['chaya-more'] = [

  {
    title: 'Pandhana kshetra ki 20 gram panchayaton ko vidhayak-nidhi se 5500-litre GI paani tanker ka vitran',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Jun 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com:443/local/mp/khandwa/pandhana/news/approval-certificates-were-presented-to-the-beneficiaries-and-tankers-were-presented-to-10-panchayats-dbp-138196011.html',
    date: '2026-06-14',
    note: '12-14 June 2026 ko janpad panchayat Pandhana ke jankalyan shivir ke samapan par vidhayak Chaya More ne janpad ki 10 gram panchayaton (Balrampur, Diwal, Makarla, Nankheda, Anjangaon, Rajgarh Diwal, Rajgarh Singot, Pabai Khurd, Jamli Kala, Piploud Khas) ko paani tanker saupe; Nai Dunia ke mutabik ye vidhayak kshetra vikas nidhi se 20 panchayaton ko diye gaye 5500-litre GI tanker ka hissa tha (Chhegaonmakhan janpad ki 10 panchayaton ko pehle vitrit, Pandhana ki 10 ko 14 June ko). Tankeron ka sanchalan-rakhrakhav gram panchayaton ke paas rahega. Status: vitran poora. Disclosure: kul rashi ka aankda article me nahi tha; tithi Nai Dunia ke usi event ke 14 Jun 2026 ank se cross-check karke li gayi.',
    period: '2023-2028',
  },
];

// REJECT-LOG Khandwa: narayan-patel — CM-karyakram maujoodgi (FPJ Oct 2026), public.app-only, sirf maang/gyapan, sirf bayaan (99 noto), temple-nidhi ghotala-aarop (Bhaskar 403 — khud verify nahi ho paya, imaandari se reject), pre-term, blogspot-only, YouTube-only, 14 PWD swikrit kaam (dastavezi bhoomika nahi); vijay-shah — CM 18-works maujoodgi, hospital lokarpan maujoodgi, PM Modi VC package maujoodgi, public.app-only, pre-term Vikas Parv, Khandwa-city ghoshna, bhashan-daave (roti-machines, college buses, aur chhatravas/fencing ghoshna), Vikas Yatra prachaar, panchayat-audit 2019-24, missing posters, Chhanera blogspot; kanchan-tanve — YouTube-only (Rs 432cr lift), ring road swikriti YouTube-only, CM Harsud karyakram maujoodgi, nirikshan/dauare, sirf maang (reject ho gayi), PM College ribbon-cut (bhoomika nahi), bina-case Pandhana-road shrey vivaad, MLA-mahapaur khinchtan, Trilok News tanker (fetch fail — verify nahi ho paya); chaya-more — maang/gyapan, self-reported report-card dawa (46 sadaken/52 pul/Rs 199cr — bina GO), CM ki Rs 301cr sinchai pariyojna (bhoomika nahi), bus stand aadhaarshila (CM), Sandipani shubharambh (CM), YouTube-only nirikshan, hospital visit, ICU health news, Praneet More (galat vyakti), CM-daure ki taiyari.

// ---- Khargone district batch (researched 2026-10-14) ----
// Khargone (MP) — 6 MLA, karyakaal Dec 2023 se. Do-Sachin identity check: Sachin Birla = Badwaha (BJP), Sachin Subhashchandra Yadav = Kasrawad (INC, ex-krishi mantri) — har khabar me seat/slug verify kiya; javelin khiladi Sachin Yadav galat vyakti ke roop me reject. Har source khud kholkar padha gaya.

mpWorks['smt-jhuma-solanki'] = [
  {
    title: 'Dhar me kisan andolan ke dauran NH-blockade ke aarop me FIR — 26 Congress netaon me vidhayak ka naam bhi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'IANS via Lokmat Times, 9 May 2026',
    sourceUrl: 'https://www.lokmattimes.com/national/fir-against-congress-mlas-workers-over-nh-blockade-during-farmers-stir-in-mps-dhar/',
    date: '2026-05-09',
    note: 'NEGATIVE entry. IANS ke mutabik Dhar police ne 7 May 2026 ko Khalghat (Indore-Ahmedabad NH four-lane) par statewide Congress kisan andolan ke dauran National Highway block karne ke aarop me lagbhag 26 Congress netaon aur saikdon karyakartao par FIR darj ki; FIR me Bhikangaon ki vidhayak Jhuma Solanki ka naam bhi hai. BNS ki dharaon — gairkanuni jamawda, galat tareeke se rokna, sarvajanik marg avaruddh karna — ke tahat prakaran darj; janch jaari, aage ki karwai lambit. Article me vidhayak ka vyaktigat paksh nahi hai; LoP Umang Singhar (jo khud aaropi hain) ne FIR ko kisanon ki aawaz dabane ka aarop bataya aur andolan jaari rakhne ki baat kahi. Status: FIR darj — dosh-siddhi ka koi daava nahi. Caveat: ye vikas-karya nahi, virodh-pradarshan se juda case hai — negative entry ke roop me darj.',
    period: '2023-2028',
  },
];

mpWorks['sachin-birla'] = [
  {
    title: 'Barwaha ko agri-hub banane ki ghoshna — lagbhag Rs 50 crore ke mandi upgrade, Baidia mirchi mandi vistar ke liye 9 hectare adhigrahan notification',
    category: 'Any',
    badge: 'dawa',
    sourceLabel: 'Free Press Journal, 28 Apr 2026',
    sourceUrl: 'https://www.freepressjournal.in/indore/khargones-barwaha-to-be-developed-as-agricultural-hub-50-crore-upgrade-planned',
    date: '2026-04-28',
    note: 'FPJ me vidhayak ke bayan ke mutabik Barwaha vidhan sabha ko agri-hub banaya jayega; unhone Bhopal me State Agricultural Marketing Board ke MD Kumar Purushottam se Baidia, Barwaha aur Sanawad ki krishi upaj mandiyon ke upgrade par vistrit charcha ki aur kaha ki CM Dr Mohan Yadav ki ghoshnaon ka kriyanvayan hoga — lagbhag Rs 50 crore ki suvidhaen (shed, sadak, bijli, paani, safai). Baidia mirchi mandi ko lagbhag 43 acre tak vistar ke liye 9 hectare atirikt zameen ke adhigrahan ka notification jaari hua hai; cold storage bhi banega. Status: GHOSHNA — swikriti ka koi GO/sanction order article me nahi; kriyanvayan shuru hone ki alag khabar nahi mili. Credit-pardarshita: Rs 50 crore/CM ghoshna rajya package hai; MLA ki dastavezi bhoomika Mandi Board MD se charcha aur ghoshna tak hai. Poori khabar MLA ke swayam ke bayan par based hai — isliye dawa badge.',
    period: '2023-2028',
  },
];

mpWorks['rajkumar-mev'] = [
  {
    title: 'Maheshwar me 5 gram panchayaton me Rs 2.18 crore ke vikas karyon ka bhoomi-pujan/shilanyas aur Rs 11.22 lakh ki anganwadi ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Jan 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/khargone/maheshwar/news/bhumi-pujan-of-development-works-worth-rs-218-crore-in-maheshwar-136893864.html',
    date: '2026-01',
    note: 'Maheshwar vidhan sabha ke vidhayak Rajkumar Mev ne Mandleshwar mandal ki 5 gram panchayaton (Jalud, Chhoti Khargone, Sulgaon, Jhapdi, Nandra) me kul Rs 2.18 crore ki lagat ke vikas karyon ka bhoomi-pujan, shilanyas aur lokarpan kiya — Jalud me Rs 5 lakh ka samudayik bhavan, Chhoti Khargone me Rs 23 lakh ki CC road aur Rs 13 lakh ki naali, Sulgaon me Rs 25 lakh ki puliya aur Rs 25 lakh ka naala, Nandra me Rs 25 lakh ki retaining wall aur Rs 24 lakh ki puliya ka bhoomi-pujan; Jhapdi Harsgaon me Rs 11.22 lakh ki bani hui anganwadi ka lokarpan (plus Rs 25 lakh retaining wall, Rs 18 lakh CC road, Rs 24 lakh boundary wall ka bhoomi-pujan). Status: bhoomi-pujan/shilanyas + lokarpan (nirman purnata ki alag khabar nahi mili). Caveat: tithi Bhaskar search-index timing (~Jan 2026) se est. — article text me exact date print me nahi dikhi.',
    period: '2023-2028',
  },
  {
    title: 'Maheshwar me Rs 82.50 lakh ke kaam — Balwada me CC road ka bhoomi-pujan, Rupala me gram panchayat bhavan ka lokarpan, Machalpurkhurd me CC road ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Jun 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/khargone/maheshwar/news/balwada-cc-road-rupala-village-panchayat-bhavan-inauguration-138286490.html',
    date: '2026-06',
    note: 'Maheshwar vidhan sabha me lagbhag Rs 82.50 lakh ke vikas karyon ka bhoomi-pujan aur lokarpan — vidhayak Rajkumar Mev mukhya atithi rahe. Gram panchayat Balwada me Rs 20 lakh ki lagat se bazaar chowk me CC road ka bhoomi-pujan, gram Rupala me Rs 37.50 lakh se navnirmit gram panchayat bhavan ka lokarpan, aur gram Machalpurkhurd me Rs 25 lakh ki lagat wali CC road ka bhoomi-pujan. Status: bhoomi-pujan + lokarpan (nirman purnata ki alag khabar nahi mili). Caveat: tithi search-index timing (~Jun 2026) se est.',
    period: '2023-2028',
  },
  {
    title: 'Mandleshwar me Badwah-Dhamnod marg par Rs 29.34 lakh ke divider ka bhoomi-pujan — kaam shuru hokar 8 din me prashasan ne roka',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Swarajvani (Dainik Swaraj Vani), 10 Oct 2026',
    sourceUrl: 'https://swarajvani.com/rs-29-34-lakh-divider-construction-on-badwah/',
    date: '2026-06-16',
    note: 'Mandleshwar kshetr me Badwah-Dhamnod marg par sadak-suraksha mad se Rs 29.34 lakh ki lagat wale divider ka bhoomi-pujan kshetriya vidhayak Rajkumar Mev ne 16 June ko kiya tha; 30 September se kaam shuru hua aur 8 din chala, phir BJP parshadon ke virodh ke baad SDM ke maukhik nirdesh par nayab tehsildar ne kaam rukwa diya (parshad ne sirf aanshik sanshodhan ki maang ki thi, phir bhi poora kaam ruka — prashasanik vivaad jaari). Status: bhoomi-pujan (kaam adhoora — vivaad ke kaaran ruka; dobara shuru hone ki khabar nahi mili). Caveat: Swarajvani chhota sthaniya portal hai — kaam-rukne ka vivaran usi ke mutabik. Credit-pardarshita: ye sadak-suraksha mad ka sarkari kaam hai, MLA ne bhoomi-pujan kiya.',
    period: '2023-2028',
  },
];

mpWorks['sachin-subhashchandra-yadav'] = [
  {
    title: 'Dhar me kisan andolan ke dauran NH-blockade ke aarop me FIR — aaropiyon me poorv mantri Sachin Yadav ka naam bhi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'IANS via Lokmat Times, 9 May 2026',
    sourceUrl: 'https://www.lokmattimes.com/national/fir-against-congress-mlas-workers-over-nh-blockade-during-farmers-stir-in-mps-dhar/',
    date: '2026-05-09',
    note: 'NEGATIVE entry. IANS ke mutabik Dhar police ne 7 May 2026 ko Khalghat (Indore-Ahmedabad NH four-lane) par statewide Congress kisan andolan ke dauran National Highway block karne ke aarop me lagbhag 26 Congress netaon aur saikdon karyakartao par FIR darj ki; FIR me "poorv mantri Sachin Yadav" ka naam bhi hai — pehchaan Kasrawad ke vidhayak Sachin Yadav se verify (Kamal Nath sarkar me krishi mantri, 2018-2020). BNS ki dharaon — gairkanuni jamawda, galat tareeke se rokna, sarvajanik marg avaruddh karna — ke tahat prakaran darj; janch jaari, aage ki karwai lambit. Article me vidhayak ka vyaktigat paksh nahi hai; LoP Umang Singhar (jo khud aaropi hain) ne FIR ko kisanon ki aawaz dabane ka aarop bataya. Status: FIR darj — dosh-siddhi ka koi daava nahi. Caveat: ye vikas-karya nahi, virodh-pradarshan se juda case hai — negative entry ke roop me darj. Mantri-karyakaal (2018-2020) ke kaam is batch me shaamil nahi kiye gaye.',
    period: '2023-2028',
  },
];

// balkrishn-patidar: profile KHAALI — pass hone layak koi thos kshetra-kaam credible source se verify nahi hua (sirf CM-karyakram maujoodgi, maang/bhashan, sansad-nidhi karyakram me maujoodgi mili; sab REJECT-LOG me).

mpWorks['kedar-chidabhai-dawar'] = [
  {
    title: 'Dhar me kisan andolan ke dauran NH-blockade ke aarop me FIR — 26 Congress netaon me vidhayak ka naam bhi',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'IANS via Lokmat Times, 9 May 2026',
    sourceUrl: 'https://www.lokmattimes.com/national/fir-against-congress-mlas-workers-over-nh-blockade-during-farmers-stir-in-mps-dhar/',
    date: '2026-05-09',
    note: 'NEGATIVE entry. IANS ke mutabik Dhar police ne 7 May 2026 ko Khalghat (Indore-Ahmedabad NH four-lane) par statewide Congress kisan andolan ke dauran National Highway block karne ke aarop me lagbhag 26 Congress netaon aur saikdon karyakartao par FIR darj ki; FIR me Bhagwanpura ke vidhayak Kedar Dawar ka naam bhi hai. BNS ki dharaon — gairkanuni jamawda, galat tareeke se rokna, sarvajanik marg avaruddh karna — ke tahat prakaran darj; janch jaari, aage ki karwai lambit. Article me vidhayak ka vyaktigat paksh nahi hai; LoP Umang Singhar (jo khud aaropi hain) ne FIR ko kisanon ki aawaz dabane ka aarop bataya aur andolan jaari rakhne ki baat kahi. Status: FIR darj — dosh-siddhi ka koi daava nahi. Caveat: ye vikas-karya nahi, virodh-pradarshan se juda case hai — negative entry ke roop me darj.',
    period: '2023-2028',
  },
];

// ---- Khargone district batch REJECT-LOG (2026-10-14) ----
// smt-jhuma-solanki: Bhaskar (Aug 2026) vidhan-sabha me khaad/moong/sinchai maang (sirf maang/bayan, vipaksh — kaam nahi); Bhagoriya utsav me shirkat (sanskritik karyakram, kaam nahi); navabharat seat-analysis (rajnaitik vishleshan, kaam nahi).
// sachin-birla: FPJ Sanawad Amba-Rodia nirikshan (sirf nirikshan/ashwasan, thos kaam nahi); YouTube Bediya 65-lakh bhoomi-pujan + "mini-Indore" yojana (YouTube-only); dal-badal sadasyata vivaad (2021-22, pre-term + rajnaitik); public.app Radha-Krishna mandir bhoomi-pujan (public.app-only).
// rajkumar-mev: YouTube 82.50-lakh works (YouTube-only — wahi story Bhaskar se verified, isliye Bhaskar entry rakhi); FPJ CM-mulaqat (sirf maang/prastav — stadium/bagicha).
// sachin-subhashchandra-yadav: YouTube ICU/lab shubharambh 2021 (pre-term + YouTube-only); Ram-mandir chanda abhiyan (daan abhiyan, kaam nahi); YouTube tanker "pichhle varshon" (YouTube-only + pre-term); Kasrawad kisan paidal-march (andolan/maang); javelin khiladi Sachin Yadav (GALAT VYAKTI).
// balkrishn-patidar: CM Jan-Abhaar Yatra bhashan + nimad-sambhag/krishi-college maang (maujoodgi + maang); FPJ CM bonanza (sirf maujoodgi); Bhaskar Yadav Samaj Bhavan (Rs 10 lakh sansad-nidhi — MLA sirf maujood); Bhujaria parv shaurya-pradarshan (sanskritik, kaam nahi); 2023 virodh-video (pre-term). PROFILE KHAALI.
// kedar-chidabhai-dawar: YouTube Segav + Bistan up-tehsil (Rs 85 lakh) bhoomi-pujan (YouTube-only); World Tribal Day avkash-patra (sirf maang); Dagadkhedi dharna (andolan, YouTube-only); soybean MSP pradarshan (andolan); 2021 "gumshuda" poster virodh (pre-term); 2020 BJP-samarthan (pre-term).

// ---- Mandla district batch (researched 2026-10-14) ----

mpWorks['narayan-singh-patta'] = [
  {
    title: 'Bhua-Bichhiya me NH-30 par Rs 76.21 lakh ke decorative pole aur LED light ka lokarpan — vishesh nidhi ka 2-charan kaam, mantri ke saath sanyukt feeta katkar',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Mahaveer News 29, 2 Aug 2026',
    sourceUrl: 'https://mahaveernews29.in/49509/',
    date: '2026-08-02',
    note: 'Nagar parishad Bhua-Bichhiya kshetr me vishesh nidhi se Rs 76.21 lakh ki lagat se hue saundaryikaran karya ka lokarpan — PHE cabinet mantri Sampatiya Uikey aur Bichhiya vidhayak Narayan Singh Patta ne sanyukt roop se feeta katkar NH-30 par lage decorative pole evam LED light ka shubharambh kiya. Nagar parishad ne kaam 2 charanon me poora kiya: pehla charan Danitola tiraha se shaskiya prathmik shala Bhua tak divider ke madhya, doosra charan prathmik shala Bhua se Banjari Mata mandir tak. Status: lokarpan (nirman poorn). Credit-pardarshita: ye sarkari vishesh-nidhi ka nagar-parishad ka kaam hai; MLA ki concrete bhoomika kshetr ke vidhayak ke roop me sanyukt lokarpan hai. Caveat: Mahaveer News 29 chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Ghughri ke samudayik swasthya kendra me vidhayak nidhi se water purifier-cum-cold unit ka lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Mahaveer News 29, 7 Feb 2026',
    sourceUrl: 'https://mahaveernews29.in/41129/',
    date: '2026-02-07',
    note: 'Bichhiya vidhan sabha ke vidhayak Narayan Singh Patta ne apni vidhayak nidhi se shaskiya samudayik swasthya kendra Ghughri ko water purifier sahit cold unit samarpit ki — vidhivat poojan ke saath lokarpan; khand chikitsa adhikari, takniki visheshagya evam aspatal staff upasthit. Hospital me lambe samay se shuddh peyjal ki samasya thi, vishesh roop se garmi me teemardaron ko bahar jana padta tha; ye vidhayak-nidhi ka kaam hai, sansad-nidhi (MP fund) nahi. Status: lokarpan (machine sthapit, chalu). Caveat: Mahaveer News 29 chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Ghughri me vidhayak nidhi se bani Rani Durgavati aur Tyagi ji Maharaj ki 2 pratimayen gram panchayat ko saunpi — sthapna manch taiyaar, bhavya unavaran baki',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Mahaveer News 29, 22 Feb 2026',
    sourceUrl: 'https://mahaveernews29.in/41875/',
    date: '2026-02-22',
    note: 'Bichhiya vidhayak Narayan Singh Patta ne vidhayak nidhi ke madhyam se taiyaar ki gayi Veerangana Rani Durgavati aur Param Poojya Tyagi ji Maharaj ki bhavya pratimayen Ghughri me vidhivat roop se gram panchayat evam sthaniya nagrikon ko saunp di — do pramukh sthanon par sthapna ka nirnay, sthapna sthal par bhavya manch taiyaar; shubh muhurat me jan-samaroh ke saath unavaran ki ghoshna. Ye vidhayak-nidhi ka kaam hai, sansad-nidhi nahi. Status: nirman poorn + saunpa (unavaran samaroh baki). Caveat: Mahaveer News 29 chhota sthaniya portal hai.',
    period: '2023-2028',
  },
];

mpWorks['chainsingh-warkade'] = [
  {
    title: 'Narayanganj ke Kumbheshwar ghat (Kumha) par vidhayak nidhi se Rs 10 lakh ki navnirmit seedhiyon ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Mahaveer News 29, 27 May 2026',
    sourceUrl: 'https://mahaveernews29.in/45844/',
    date: '2026-05-27',
    note: 'Nivas vidhan sabha ke vidhayak Chainsingh Warkade ke mukhya atithya me vikas khand Narayanganj ki gram panchayat Kumha me Maa Narmada ke pavan tat par sthit aitihasik Kumbheshwar ghat ki navnirmit seedhiyon ka lokarpan hua — Jal Ganga Samvardhan Abhiyan evam Ganga Dussehra ke uplakshya me karyakram; shraddhaluon ki varshon purani maang par vidhayak nidhi se Rs 10 lakh ki lagat se seedhi nirman karaya gaya. Ye vidhayak-nidhi ka kaam hai, sansad-nidhi (MP fund) nahi. Status: lokarpan (nirman poorn). Caveat: Mahaveer News 29 chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Padriya se Narayanganj pahunch marg ka pakka nirman — vidhayak nidhi se Rs 10 lakh, bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Mahaveer News 29, 10 Mar 2025',
    sourceUrl: 'https://mahaveernews29.in/27840/',
    date: '2025-03-10',
    note: 'Janpad panchayat Narayanganj ki gram panchayat Padriya me varshon se jarjar-kachche Padriya se Narayanganj pahunch marg ke pakke nirman ke liye Nivas vidhayak Chainsingh Warkade ne apni vidhayak nidhi se Rs 10 lakh ki rashi di aur swayam bhoomi-pujan kiya; sarpanch, sachiv evam sthaniya prashasan upasthit. Ye vidhayak-nidhi ka kaam hai, sansad-nidhi nahi. Status: bhoomi-pujan (nirman shuru hone wala tha; poornata ki alag khabar nahi mili). Caveat: Mahaveer News 29 chhota sthaniya portal hai.',
    period: '2023-2028',
  },
];

mpWorks['sampatiya-uikey'] = [
  {
    title: 'Jarga-Jargi me samudayik bhavan (parikrama ashram) aur Rs 12 lakh ke haat-bazaar shed ka bhoomi-pujan; Raja Shankar Shah-Raghunath Shah pratimaon ka anavaran',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindustan Samachar via Vocal TV, 29 Aug 2025',
    sourceUrl: 'https://vocaltv.in/madhya-pradesh/unveiled-the-statue-of-raja-shankar-shah-and-raghuphp/cid17334189.htm',
    date: '2025-08-29',
    note: 'Lok swasthya yantriki mantri Sampatiya Uikey ne Mandla jile ke Jarga-Jargi gaon me amar shaheed Raja Shankar Shah aur Raghunath Shah ki pratimaon ka anavaran kiya aur gaon ke vikas ke liye samudayik bhavan (parikrama ashram) evam Rs 12 lakh ki lagat se banne wale haat-bazaar shed ka bhoomi-pujan kiya. Isi karyakram me unki vidhayak nidhi se Rs 50 lakh (bijli vyavastha) aur gram panchayat Khursipar me rangmanch ke liye Rs 2 lakh ki ghoshnaen hui — ye ghoshnaen bina sanction/work-order saboot ke entry me nahi li gayi (ghoshna-type press khabar rule). Status: bhoomi-pujan + anavaran. Credit-pardarshita: article me wo mantri ke roop me karyakram kar rahi thin; karya Mandla jile me hai. Source Hindustan Samachar news agency hai.',
    period: '2023-2028',
  },
];
// PARENT QA NOTE (2026-10-14, Mandla batch): uikey ki 2 entries HATA di — (1) tiger safari zoo ghoshna:
// CM ka ailaan unki maang par tha, maang+ghoshna entry nahi banti; (2) JJM Rs 1000cr 'commission' negative:
// aarop ekmatra poorv-vidhayak ki PM ko shikayat par tha — koi FIR/case/janch unke viruddh pakshkar ke
// roop me nahi, sirf vibhagiya report-maang; negative-entry manak par nahi utri (Dewas/Vikrant precedent).


// ---- Mandla district batch REJECT-LOG (2026-10-14) ----
// narayan-singh-patta: News18 Hindi (20 Sep 2026) ghurgwara marg — graminon ne chanda karke khud sadak banai; MLA ne sirf bayan diya (vidhan sabha yachika me maang uthai, sanction nahi hui) — thos kaam nahi; Amar Ujala (25 Feb 2026) vidhan-sabha budget charcha me sadak-gunvatta par bayan — sirf bayan/vipakshi aalochna; mahaveernews29 CM event (4 Oct 2026) 74 works (Rs 460+ crore) ka bhoomi-pujan/lokarpan — CM-karyakram, Patta ka naam tak article me nahi, sirf maujoodgi hoti to bhi reject; sansad sadak-suraksha samiti baithak me maujoodgi — sirf maujoodgi; YouTube Shiv Mahapuran dance video — sanskritik karyakram, kaam nahi.
// chainsingh-warkade: mahaveernews29 Maa Karma Devi mandir Pipariya — Warkade ne sirf vidhayak nidhi se Rs 10 lakh dene ki GHOSHNA ki (sanction/work-order saboot nahi), bhoomi-pujan doosron ne kiya, mandir Sahu samaj banwa raha hai — ghoshna-type reject; YouTube "vividh nirman karyon ka bhoomi-pujan v lokarpan" video — YouTube-only; public.app Narayanganj Shankarganj-Babliya pul nirikshan — public.app-only + sirf nirikshan; YouTube "sarkar par nishana" — virodh/bayan, kaam nahi.
// sampatiya-uikey: Zee News Mandla 45 gaon paani-sankat — mantri ne sirf bijli vibhag/PHE adhikariyon ko sudhar ke nirdesh diye, thos kaam nahi — nirdesh/ashwasan reject; udaipurkiran.org bal mela — vidhayak nidhi se Rs 5 lakh kaksh-nirman ki GHOSHNA — ghoshna-type reject; vocaltv Jarga-Jargi karyakram me Rs 50 lakh (bijli) + Rs 2 lakh (rangmanch) ghoshnaen — bina sanction saboot, ghoshna-type reject (bhoomi-pujan wali entry rakhi); mahaveernews29 CM event me maujoodgi/bhashan — CM-karyakram, sirf maujoodgi; ghughri/mohgaon college + MSME processing unit ghoshnaen — CM ki ghoshnaen, Uikey ki concrete bhoomika article me spasht nahi.

// ---- Mandsaur district batch (researched 2026-10-14) ----
mpWorks['vipin-jain'] = [
  {
    title: 'Budget 2024-25 me Mandsaur kshetra ke liye Rs 8.45 crore ke sadak-puliya nirman karyon ki swikriti',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 4 Jul 2024',
    sourceUrl: 'https://sanskardarshan.com/2024/07/04/rs-8-45-crore-in-the-budget-construction-work-of-mandsaur/',
    date: '2024-07-04',
    note: 'Vidhayak Vipin Jain dwara budget satr 2024-25 me mang-patra dene ke baad Mandsaur kshetra ke liye Rs 8.45 crore ke sadak aur puliya nirman karyon ki swikriti mili: Ghatavda se Kochvi (via Topakheda-Balaji) 4 km pahunch marg (lagat Rs 3.20 crore), aur Multanpura pahunch marg + Mainpuriya pahunch marg + puliya nirman (lagat Rs 5.25 crore). Status: swikriti — in karyon ki maang lambe samay se grameen kar rahe the; nirman purnata ki alag khabar nahi mili. Credit-pardarshita: swikriti rajya budget se, vibhagiya mad se; unki concrete bhoomika = CM/Deputy CM/vibhag ko patra likhkar mang uthana. Caveat: source chhota sthaniya portal hai (Sanskardarshan).',
    period: '2023-2028',
  },
  {
    title: 'Mukhyamantri Gram Sadak evam Avasarrachna Yojana se Rs 1.10 crore ke nirman karyon ki swikriti — stop dam, CC roads aur tin shed',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Vocal TV (Hindustan Samachar), 17 Jun 2024',
    sourceUrl: 'https://vocaltv.in/madhya-pradesh/construction-works-worth-rs-1-crore-10-lakh-got-approvalphp/cid14759934.htm',
    date: '2024-06-17',
    note: 'Vidhayak Vipin Jain ki anushansa par Mandsaur kshetra ki gram panchayaton me kul Rs 1.10 crore ke nirman karyon ki swikriti mili; unhone February me Vidhan Sabha satr ke dauran CM Mohan Yadav aur Deputy CM Jagdish Devda ko patra saunpa tha, jiske baad Mukhyamantri Gram Sadak evam Avasarrachna Yojana antargat takneeki swikriti ke baad rashiyan swikrit hui. Pramukh karya: gram Majeshra me Somli nadi par stop dam (Rs 24.51 lakh), Multanpura ke mukhya bazaar me CC road (Rs 20 lakh), Bhavgarh me bus stand par CC road (Rs 20 lakh), Khilchipura/Nalcha me CC road (Rs 10 lakh), Richhabachcha me manglik karyakramon ke liye tin shed (Rs 10 lakh). Status: swikriti — nirman karyanwayan ki alag khabar nahi mili. Fund-srot: rajya yojana (vibhag), vidhayak-nidhi nahi; credit-pardarshita: swikriti sarkar se, unki concrete bhoomika = anushansa + patra. Caveat: source chhota sthaniya portal hai (Vocal TV, Hindustan Samachar syndicated).',
    period: '2023-2028',
  },
  {
    title: 'Mandsaur kshetra ki 12 gram panchayaton me Rs 2.70 crore ki lagat se samudayik bhavanon ki swikriti',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Feb 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/mandsaur/news/community-halls-will-be-built-in-12-panchayats-of-mandsaur-136410763.html',
    date: '2026-02',
    note: 'Mandsaur Vidhan Sabha kshetra ki 12 gram panchayaton me samudayik bhavanon ke nirman ke liye kul Rs 2.70 crore ki swikriti vidhayak Vipin Jain ki anushansa par mili; unhone CM Mohan Yadav, Deputy CM Jagdish Devda aur Panchayat evam Gramin Vikas Mantri Prahlad Patel ko patra likhkar anurodh kiya tha. Alavda Khedi, Palasia, Jawasia, Tolkhedi, Dhandhoda, Nimbod, Naugawa, Maukhedi aur Behpur me pratyek Rs 25 lakh, aur Rajar Khedi, Damdam aur Adhari Nirdhari me pratyek Rs 15 lakh ki lagat se bhavan banenge. Status: swikriti — nirman shuru hona tha, purnata ki alag khabar nahi mili. Fund-srot: vibhag (Panchayat), vidhayak-nidhi nahi. Caveat: tithi article me "8 mahine pehle" likhi thi (Feb 2026, est.).',
    period: '2023-2028',
  },
  {
    title: 'Shivna Shuddhikaran Abhiyan — May 2025 se har Ravivar shramdaan, vidhayak ke netritva me nadi safai ka lagatar janabhiyan',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Jun 2026 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/mandsaur/news/mandsaur-shivna-river-cleaning-campaign-girls-shramdaan-138190931.html',
    date: '2026-06',
    note: 'Mandsaur vidhayak Vipin Jain ke netritva aur aahvan par Shivna nadi ko swachch banane ka saptahik shramdaan abhiyan May 2025 se lagatar chal raha hai; Bhaskar ke mutabik 129ve din (Ravivar) bhi Pashupatinath mandir kshetra ke ghaton se lagbhag ek trolley gaad aur kachra nikala gaya, aur ghat swachch hue. Abhiyan me har Ravivar subah shramdaani ikatthe hote hain; sthaniya reporton ke mutabik nadi jal-kumbhi se lagbhag mukt hui aur shraddhaluon ne safai ki sarahna ki. Status: chalu lagatar janabhiyan (seedha parinam — nadi safai), koi sarkari sanction/fund involved nahi, ye unki swayam ki documented pahal hai. Caveat: tithi search-crawl se anumaanit hai (Jun 2026, est.); kisi vipakshi dawa/dharna se juda kaam nahi hai.',
    period: '2023-2028',
  },
];
mpWorks['jagdish-devda'] = [
  {
    title: 'Chawli me lagbhag Rs 4 crore ke vikas karyon ka bhoomi-pujan, Borkhedi se Babukheda via Chawli sadak par Rs 3.91 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 16 Jan 2026',
    sourceUrl: 'https://www.patrika.com/bhopal-news/mla-minister-jagdish-devda-got-250-roads-constructed-in-malhargarh-20266117',
    date: '2026-01-16',
    note: 'Malhargarh ke gram Chawli me Jagdish Devda ne swayam lagbhag Rs 4 crore ke vikas karyon ka bhoomi-pujan kiya, jisme Rs 3.91 crore ki lagat se banne wali Borkhedi se Babukheda via Chawli sadak bhi shamil hai; karyakram me zila panchayat adhyaksh, zila yojana samiti sadasya aur zila adhikari upasthit the. Status: bhoomi-pujan — nirman karyanwayan ki alag khabar nahi mili. Fund-srot article me spasht nahi (sarkari sadak karya); credit-pardarshita: bhoomi-pujan unhone swayam kiya, swikriti/kaar-yojana sarkari.',
    period: '2023-2028',
  },
  {
    title: 'Akya Bika me kul Rs 9.38 crore ki 3 sadkon ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Patrika, 16 Jan 2026',
    sourceUrl: 'https://www.patrika.com/bhopal-news/mla-minister-jagdish-devda-got-250-roads-constructed-in-malhargarh-20266117',
    date: '2026-01-16',
    note: 'Akya Bika me Jagdish Devda ne 3 sadkon ka bhoomi-pujan kiya: Kheda se Takraved sadak (Rs 3.02 crore), Akya Bika se Magrana sadak (Rs 3.83 crore) aur Dhani se Bheruji sadak (Rs 2.38 crore) — kul lagat Rs 9.38 crore. Status: bhoomi-pujan — nirman karyanwayan ki alag khabar nahi mili. Fund-srot article me spasht nahi; bhoomi-pujan unhone swayam kiya.',
    period: '2023-2028',
  },
  {
    title: 'Malhargarh vidhansabha me lagbhag 250 sadkon ke nirman-purn hone ka unka dawa',
    category: 'Sadak',
    badge: 'dawa',
    sourceLabel: 'Patrika, 16 Jan 2026',
    sourceUrl: 'https://www.patrika.com/bhopal-news/mla-minister-jagdish-devda-got-250-roads-constructed-in-malhargarh-20266117',
    date: '2026-01-16',
    note: 'Patrika ke karyakram-report me Jagdish Devda ka swayam ka dawa prakashit hua ki Malhargarh vidhansabha kshetra me lagbhag 250 sadkon ka nirman purn kiya ja chuka hai. Status: dawa — ye unka apna bayan hai jo news me report hua; iski swatantra pushti (sarkari record/RTI) nahi mili, aur sadak-wise suchi article me nahi di gayi. Poorna disclosure: ye sthiti-kathhan hai, karyanwayan-saboot nahi.',
    period: '2023-2028',
  },
  {
    title: 'Ghatavda aur Limbavas me kul Rs 8.59 crore ke sadak karyon ka lokarpan aur bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Daily Pioneer, 8 Jun 2025',
    sourceUrl: 'https://dailypioneer.com/news/deputy-cm-jagdish-devda-inaugurates-rs-8-59-crore-development-works',
    date: '2025-06-08',
    note: 'Ghatavda me Jagdish Devda ne Ghatavda se Kochvi via Topakheda Balaji sadak (Rs 4.60 crore) ka bhoomi-pujan kiya aur nirmit Ghatavda se Balkeshwar Mahadev sampark marg (Rs 1.75 crore) ka lokarpan kiya; Limbavas me Limbavas se Apukhedi sadak (Rs 2.23 crore) ka bhoomi-pujan kiya — kul Rs 8.59 crore. Status: 1 sadak lokarpan (purn), 2 sadkein bhoomi-pujan; bhoomi-pujan wali sadkon ke purn hone ki alag khabar nahi mili. Fund-srot article me spasht nahi; karyakram unki maujudgi me hua, swikriti-srot sarkari.',
    period: '2023-2028',
  },
  {
    title: 'Ranakheda me 3 sadkon ka lokarpan/bhoomi-pujan: Lachhakhedi-Eshakpura marg ka lokarpan aur Lodh-Bhukhi Buzurg marg ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindusthan Samachar, 29 Dec 2025',
    sourceUrl: 'https://www.hindusthansamachar.in/Encyc/2025/12/29/Irrigation-water-will-reach-every-field-through-th.php',
    date: '2025-12-29',
    note: 'Gram Ranakheda ke karyakram me Jagdish Devda ne swayam 3 sadak karyon ka lokarpan/bhoomi-pujan kiya: Lachhakhedi se Eshakpura Banshkhedi Fanta pahunch marg via Rathana (Rs 6.64 crore) ka lokarpan, Rupavali se Bhatana marg (Rs 91.13 lakh) ka lokarpan aur Lodh se Bhukhi Buzurg via Bardiyafanta marg (Rs 2.78 crore) ka bhoomi-pujan. Status: 2 lokarpan (purn), 1 bhoomi-pujan; nirman-poornata ki swatantra pushti article me nahi. Fund-srot article me spasht nahi.',
    period: '2023-2028',
  },
  {
    title: 'Gram Paldi me Rs 65 lakh ke Ayushman Arogya Mandir ka lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Hindusthan Samachar, 29 Dec 2025',
    sourceUrl: 'https://www.hindusthansamachar.in/Encyc/2025/12/29/Irrigation-water-will-reach-every-field-through-th.php',
    date: '2025-12-29',
    note: 'Ranakheda karyakram me Jagdish Devda ne Rs 65 lakh ki lagat se nirmit Ayushman Arogya Mandir, Paldi ka lokarpan kiya — swasthya suvidha janata ke liye khul gayi. Status: lokarpan (purn). Fund-srot: swasthya vibhag/sarkari yojana (article me fund-srot ka spasht ullekh nahi); credit-pardarshita: bhavan sarkari yojana ka hai, lokarpan unhone swayam kiya.',
    period: '2023-2028',
  },
  {
    title: 'Kamalpura, Bilantri aur Ranakheda me anganwadi bhavanon ka lokarpan, Bilantri me mangalik bhavan ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Hindusthan Samachar, 29 Dec 2025',
    sourceUrl: 'https://www.hindusthansamachar.in/Encyc/2025/12/29/Irrigation-water-will-reach-every-field-through-th.php',
    date: '2025-12-29',
    note: 'Ranakheda karyakram me Jagdish Devda ne gram Kamalpura, Bilantri aur Ranakheda ke anganwadi bhavanon ka lokarpan kiya aur gram panchayat Bilantri me mangalik bhavan ka bhoomi-pujan kiya. Status: 3 anganwadi bhavan lokarpan (purn), mangalik bhavan bhoomi-pujan — nirman ki alag khabar nahi mili. Fund-srot article me spasht nahi.',
    period: '2023-2028',
  },
  {
    title: 'Pipliya Karadiya kshetra me 3 sadkon ka lokarpan aur bhoomi-pujan: Lilda-Nahargarh Pityakhedi marg par Rs 7.86 crore',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Hindusthan Samachar, 29 Dec 2025',
    sourceUrl: 'https://www.hindusthansamachar.in//Encyc/2025/12/29/Mandsaur-Development-works-Inauguration.php',
    date: '2025-12-29',
    note: 'Gram Pipliya Karadiya ke karyakram me Jagdish Devda ne 3 sadak karyon ka lokarpan/bhoomi-pujan kiya: Lilda se Nahargarh Pityakhedi marg (Rs 7.86 crore) ka bhoomi-pujan, Pipliya Karadiya se high school pahunch marg (Rs 1.07 crore) ka lokarpan aur Khanderiyamaru se Nawankhedi marg (Rs 1.77 crore) ka lokarpan. Status: 2 lokarpan (purn), 1 bhoomi-pujan; nirman-karyanwayan ki swatantra pushti article me nahi. Fund-srot article me spasht nahi.',
    period: '2023-2028',
  },
  {
    title: 'Suri aur Pipliya Karadiya ke shasakiya higher secondary school bhavanon ka lokarpan (kul Rs 8.90 crore)',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Hindusthan Samachar, 29 Dec 2025',
    sourceUrl: 'https://www.hindusthansamachar.in//Encyc/2025/12/29/Mandsaur-Development-works-Inauguration.php',
    date: '2025-12-29',
    note: 'Pipliya Karadiya karyakram me Jagdish Devda ne swayam 2 shasakiya higher secondary school bhavanon ka lokarpan kiya: Suri (Rs 6.90 crore) aur Pipliya Karadiya (Rs 1.99 crore) — dono bhavan nirmit avastha me janata ko samarpit. Status: lokarpan (purn). Fund-srot: sarkari/vibhagiya (article me spasht ullekh nahi); credit-pardarshita: bhavan-nirman sarkari karya, lokarpan unki vyaktigat maujudgi me hua.',
    period: '2023-2028',
  },
  {
    title: 'Palyamaru aur Lilda me 2 Ayushman Arogya Mandiron ka lokarpan (Rs 65-65 lakh)',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Hindusthan Samachar, 29 Dec 2025',
    sourceUrl: 'https://www.hindusthansamachar.in//Encyc/2025/12/29/Mandsaur-Development-works-Inauguration.php',
    date: '2025-12-29',
    note: 'Pipliya Karadiya karyakram me Jagdish Devda ne gram Palyamaru aur gram Lilda me Rs 65-65 lakh ki lagat se nirmit 2 Ayushman Arogya Mandiron ka lokarpan kiya — dono swasthya kendra janata ke liye khul gaye. Status: lokarpan (purn). Fund-srot: swasthya vibhag/sarkari yojana (article me spasht ullekh nahi); credit-pardarshita: kendra sarkari yojana ke, lokarpan unhone swayam kiya.',
    period: '2023-2028',
  },
  {
    title: 'Malhargarh me CM Rise School (Rs 33.66 crore) aur Takraved high school bhavan (Rs 1.72 crore) ka lokarpan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Vocal TV (Hindusthan Samachar byline), 31 Jan 2025',
    sourceUrl: 'https://vocaltv.in/madhya-pradesh/cm-rise-school-equipped-with-all-facilities-will-ephp/cid16150150.htm',
    date: '2025-01-31',
    note: 'Malhargarh me Jagdish Devda ne Rs 33.66 crore ki lagat se nirmit CM Rise School Malhargarh aur Rs 1.72 crore se nirmit Takraved high school bhavan ka lokarpan kiya. Status: lokarpan (purn). Caveat: Vocal TV chhota local portal hai; CM Rise School rajya-sarkar ki yojana hai (swikriti/nirman sarkari) — unki dastavezi bhoomika karyakram me swayam lokarpan ki hai, credit-pardarshita ke saath rakha gaya hai.',
    period: '2023-2028',
  },
  {
    title: 'Malhargarh me Rs 1.31 crore ke SDM karyalaya bhavan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Vocal TV (Hindusthan Samachar byline), 31 Jan 2025',
    sourceUrl: 'https://vocaltv.in/madhya-pradesh/cm-rise-school-equipped-with-all-facilities-will-ephp/cid16150150.htm',
    date: '2025-01-31',
    note: 'Jagdish Devda ne Rs 1.31 crore ki lagat se nirmit SDM karyalaya Malhargarh ka lokarpan kiya — prashasnik bhavan karyashil hua. Status: lokarpan (purn). Caveat: Vocal TV chhota local portal hai; fund-srot article me spasht nahi; credit-pardarshita: bhavan sarkari, lokarpan unhone swayam kiya.',
    period: '2023-2028',
  },
  {
    title: 'Barkheda Dev me Rs 65 lakh ke up-swasthya kendra ka bhoomi-pujan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Vocal TV (Hindusthan Samachar byline), 31 Jan 2025',
    sourceUrl: 'https://vocaltv.in/madhya-pradesh/cm-rise-school-equipped-with-all-facilities-will-ephp/cid16150150.htm',
    date: '2025-01-31',
    note: 'Jagdish Devda ne Barkheda Dev me Rs 65 lakh ki lagat se nirmit hone wale up-swasthya kendra ka bhoomi-pujan kiya. Status: bhoomi-pujan — nirman-purnata ki alag khabar nahi mili. Caveat: Vocal TV chhota local portal hai; fund-srot article me spasht nahi.',
    period: '2023-2028',
  },
];
mpWorks['dung-hardeep-singh'] = [
  {
    title: 'Galiyara me Sitamau road se Dharakhedi tak Rs 556.34 lakh ki pakki sadak ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 4 Oct 2024',
    sourceUrl: 'https://sanskardarshan.com/2024/10/04/mla-dang-said-shri-krishna-sudama-gaushala-in-chikla90719/',
    date: '2024-10-03',
    note: 'Sanskardarshan ke mutabik Suwasra vidhan sabha kshetra ke gram panchayat Galiyara me Sitamau road se Dharakhedi tak lagat Rs 556.34 lakh se banne wali pakki sadak ka bhoomi-pujan vidhayak Hardeep Singh Dung ne kiya. Stage: bhoomi-pujan — nirman karya ke poorno hone ya lokarpan ki alag khabar nahi mili. Fund-srot: report me spasht nahi (vibhagiya yojna ka ullekh nahi, vidhayak-nidhi ka bhi ullekh nahi). Source chhota sthaniya portal hai, isliye disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Chikla me Shri Krishna Sudama gaushala ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 4 Oct 2024',
    sourceUrl: 'https://sanskardarshan.com/2024/10/04/mla-dang-said-shri-krishna-sudama-gaushala-in-chikla90719/',
    date: '2024-10-03',
    note: 'Sanskardarshan ke mutabik Navratri ki Pratipada tithi (3 Oct 2024) ko Suwasra kshetra ke gram Chikla me Shri Krishna Sudama gaushala ka lokarpan vidhayak Hardeep Singh Dung ne kiya. Stage: lokarpan (poora hua kaam). Fund-srot: report me spasht nahi. Source chhota sthaniya portal hai, isliye disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Chikla se Mamadev sadak nirman ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 4 Oct 2024',
    sourceUrl: 'https://sanskardarshan.com/2024/10/04/mla-dang-said-shri-krishna-sudama-gaushala-in-chikla90719/',
    date: '2024-10-03',
    note: 'Sanskardarshan ke mutabik gram Chikla me Chikla se Mamadev tak sadak nirman karya ka bhoomi-pujan vidhayak Hardeep Singh Dung ne kiya. Stage: bhoomi-pujan — nirman karya ke poorno hone ya lokarpan ki alag khabar nahi mili; lagat report me nahi di gayi. Fund-srot: report me spasht nahi. Source chhota sthaniya portal hai, isliye disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Chikla me khel maidan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 4 Oct 2024',
    sourceUrl: 'https://sanskardarshan.com/2024/10/04/mla-dang-said-shri-krishna-sudama-gaushala-in-chikla90719/',
    date: '2024-10-03',
    note: 'Sanskardarshan ke mutabik gram Chikla me khel maidan ka lokarpan vidhayak Hardeep Singh Dung ne kiya (usi din gaushala lokarpan aur Chikla-Mamadev sadak ke bhoomi-pujan ke saath). Stage: lokarpan (poora hua kaam). Fund-srot: report me spasht nahi. Source chhota sthaniya portal hai, isliye disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Govardhanpura me Rs 10 lakh vidhayak-nidhi se CC road ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 21 Jan 2025',
    sourceUrl: 'https://sanskardarshan.com/2025/01/21/govardhanpura-mein-cc-road-ka-vidhayak/',
    date: '2025-01-20',
    note: 'Sanskardarshan ke mutabik Suwasra kshetra ke gram Govardhanpura me 20 Jan 2025 ko vidhayak Hardeep Singh Dung ne Mukesh Suryavanshi ke makaan se Prabhu Lal Suryavanshi ke makaan tak banne wali cement-concrete sadak ka bhoomi-pujan kiya; ye karya Rs 10 lakh vidhayak-nidhi se swikrit hai. Stage: bhoomi-pujan — nirman karya ke poorno hone ya lokarpan ki alag khabar nahi mili. Fund-srot: vidhayak-nidhi. Source chhota sthaniya portal hai, isliye disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Govardhanpura me khel maidan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 21 Jan 2025',
    sourceUrl: 'https://sanskardarshan.com/2025/01/21/govardhanpura-mein-cc-road-ka-vidhayak/',
    date: '2025-01-20',
    note: 'Sanskardarshan ke mutabik gram Govardhanpura me khel maidan ka lokarpan vidhayak Hardeep Singh Dung ke mukhya atithya me kiya gaya (usi din CC road ke bhoomi-pujan ke saath). Stage: lokarpan (poora hua kaam). Fund-srot: report me spasht nahi. Source chhota sthaniya portal hai, isliye disclosure ke saath.',
    period: '2023-2028',
  },
  {
    title: 'Suwasra nagar me 52 Quarter se Suwasra gaon chaupati tak Rs 181.60 lakh ke divider marg ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 8 Mar 2024',
    sourceUrl: 'https://sanskardarshan.com/2024/03/08/development-worth-crores-of-rupees-in-suwasra-municipal-council/',
    date: '2024-03-08',
    note: 'Sanskardarshan ke mutabik 8 Mar 2024 ko Suwasra nagar parishad ke karyakram me 52 Quarter se Suwasra gaon chaupati tak (lagbhag 700 meter) banne wale divider marg ka bhoomi-pujan vidhayak Hardeep Singh Dung ne kiya; report ke mutabik Kayakalp Abhiyan ke tahat Ward 10 aur 02 me CC road, divider aur tubular pole karyon ki lagat Rs 181.60 lakh hai. Stage: bhoomi-pujan — nirman karya ke poorno hone ya lokarpan ki alag khabar nahi mili. Credit pardarshita: ye shasan/nagar parishad ki Kayakalp Abhiyan pariyojna hai — swikriti nagar parishad/shasan se; vidhayak ki dastavezi bhoomika bhoomi-pujan tak hai. Fund-srot: vibhag/shasan (Kayakalp Abhiyan). Note: headline me kul Rs 181.80 lakh likha tha, par karya-wise body me Rs 181.60 lakh diya gaya — body ka ankda rakha hai. Source chhota sthaniya portal hai, isliye disclosure ke saath.',
    period: '2023-2028',
  },
];
mpWorks['chandar-singh-sisodiya'] = [
  {
    title: 'Gram Navali me Rs 1.39 crore ke shasakiya school bhavan ka bhoomi-pujan',
    category: 'School',
    badge: 'news',
    sourceLabel: 'Primes TV, 8 Nov 2025',
    sourceUrl: 'https://primestv.in/497565/',
    date: '2025-11-08',
    note: 'Primes TV (8 Nov 2025) ke mutabik Bhanpura tehsil ke gram Navali ke shasakiya vidyalaya parisar me Rs 1.39 crore ki lagat se banne wale school bhavan ka bhoomi-pujan vidhayak Chandar Singh Sisodiya ne kiya; isi karyakram me unhone shasan ki yojana ke tahat vidyalaya ke balak-balikao ko saikilen bhi vitrit ki. Stage: bhoomi-pujan — nirman karya ke poorno hone ya lokarpan ki alag khabar nahi mili. Credit pardarshita: ye vibhagiya (shiksha vibhag/shasan) pariyojna hai; vidhayak ki dastavezi bhoomika bhoomi-pujan aur karyakram tak hai — pariyojna ki swikriti unki taraf se report nahi hui. Fund-srot: vibhag (report me vidhayak-nidhi ka ullekh nahi). Source chhota local portal hai, isliye disclosure ke saath.',
    period: '2023-2028',
  },
];
// REJECT-LOG Mandsaur: vipin-jain — Shivna samiksha (nirikshan), Pashupatinath Lok udghatan (CM, sirf upasthiti), "shreya lene ka aarop" (bina FIR/case, na entry na shreya), LPG rally/dharna/bayan, pre-election vaade, YouTube/public.app-only, staging-mirror source; jagdish-devda — micro-irrigation future promise, pre-term nidhi-ghoshna, CM-visit pre-term, YouTube-only bhoomi-pujan, Saraswati murti (minor), biography piece, yatra swagat (maujoodgi), finance-minister budget presentations (rajya-stariya); dung-hardeep-singh — pre-term mantri-kaam, rajya-budget package (sirf 'prayas' dawa), Ayushman lokarpan me sirf maujoodgi, Namami Gange event (koi nirman nahi), birthday fluff, bypoll khabar, YouTube/public.app-only, galat-vyakti murder/FIR khabrein, 2019 sawal (pre-term); chandar-singh-sisodiya — Garoth-Ujjain four-lane (NHAI, sirf feeita), Dial-112 lokarpan (ceremonial), railway gate (PM event upasthiti), CM Dudhakhedi package (maang=aparyapt), Pashupatinath Lok (maujoodgi), pre-term Vikas Yatra/galat vyakti, Dec 2022 tehsil bhoomi-pujan (pre-term), Dashpur Disha + viral video controversies (koi FIR/case nahi).
// Coordinator QA NOTE: dung-hardeep-singh ki Kaleshwar-CC-road entry HATA di — worker ne swayam 'karta passive, attribution kamzor' flag kiya tha.

// ---- Mauganj district batch (researched 2026-10-14) ----
mpWorks['pradeep-patel'] = [
  {
    title: 'Hanumana Nagar Parishad me Rs 31 lakh ki 850 m PCC sadak ka bhoomi pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, 16 Oct 2024 (est.)',
    sourceUrl: 'https://www.bhaskar.com/local/mp/mauganj/news/mla-performed-bhoomi-pujan-of-pcc-road-in-mauganj-133814332.html',
    date: '2024-10-16',
    note: 'Hanumana Nagar Parishad (Mauganj AC-71) me vidhayak Pradeep Patel ne Rs 31 lakh ki 850 metre PCC sadak ka bhoomi pujan kiya — ward 3/11, Fatehbahadur ke ghar se seedhi pahunch marg aur college ke peeche Muslim basti tak; sadak-nirman ka tender Shri Sai Associate Satna ko mila. Stage: shilanyas/bhoomi pujan. Kaam sarkari yojana ka hai (Mukhyamantri Adhosanrachna Chaturth Charan) — vidhayak-nidhi nahi; vidhayak ne samaroh me bhoomi pujan karke concrete bhoomika nibhayi. Tareekh-anishchitta: page par publish-date nahi dikhti — article me "Budhvar" ke ullekh aur crawl metadata ("728 din pehle") se 16 Oct 2024 nikli jo Budhvar bhi hai; halki anishchitta rahe.',
    period: '2023-2028',
  },
];
// REJECT-LOG Mauganj (2026-10-14): pradeep-patel — Hanumana Rs 8cr tehsil bhavan lokarpan me sirf adhyakshata (mukhya atithi sansad), Salaiya Jal Ganga Abhiyan me sirf mukhya-atithi upasthiti (koi lagat/attribution nahi), public.app-only chhatravas lokarpan, YouTube-only park/sadak/divider items, CM ke 14 Dec 2024 (Rs 5,041cr lift irrigation shilanyas) aur Sep 2025 (Devtalab Rs 241.33cr) karyakramo me sirf upasthiti, gym vidhayak-nidhi pre-term (~2022), Devra Mahadevan JCB/Musa-gang/jameen-dharna controversies (development work nahi, negative bar par bhi nahi), Bansagar "prayas" dawa, galat-vyakti sainik story. girish-gautam — PROFILE KHAALI: Dec 2023+ me Deotalab ke thos kshetra-kaam ka koi verify-yogya item nahi mila. Mazboot lead reject: Naigarhi Rs 11.63cr vikas-karyon ka bhumi pujan (Aug 2025) jisme mukhya atithi the + unka Rs 12cr paryatan-yojana swikriti ka dawa — Bhaskar page (dainik.bhaskar.com/TUxDonB2LVb) is VM se 403/stub aur newse7live URL dead; SNIPPET-ONLY isliye entry nahi banayi — parent agent live-browser se verify karke dawa-badge par dobara evaluate kar sakta hai. Aur rejects: CM Mohan Yadav 7 Sep 2025 Devtalab Rs 241.33cr karyakram (maujoodgi + ghoshnaein, koi GO nahi), Speaker-kaal ke sab kaam (pre-term), swachhata-shramdaan/meeting, YouTube-only school lokarpan, public.app-only samman, indiaheadline24 negative piece (bina karyavahi), Khamdih karyakram (AC-bahar), jila-formation (sarkar ka faisla).
// ---- Morena district batch (researched 2026-10-14) ----
mpWorks['smt-sarla-vijendra-rawat'] = [
];
mpWorks['pankaj-upadhyay'] = [
  {
    title: 'Joura vidhayak Pankaj Upadhyay par Rasodhna gaon ka Amrit Talab (survey 217) JCB se samtal karke khet banane aur 98 bigha patte ki zameen kabzane ka aarop laga; Collector ne SDM Joura ko 3 din me jaanch report dene ke aadesh diye, vidhayak ne aarop nakarte hue prashasan ko jaanch ki chunauti di.',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'ETV Bharat, 30 Sep 2025',
    sourceUrl: 'https://www.etvbharat.com/hi/!state/congress-mla-pankaj-upadhyay-accused-of-encroaching-pond-and-98-bighas-of-leased-land-morena-collector-orders-investigation-madhya-pradesh-news-mps25093001370',
    date: '2025-09-30',
    note: '30 Sep 2025 ki ETV Bharat report ke mutabiq Joura tehsil ke Rasodhna gaon ke lagbhag 50 kisan poorv vidhayak Subedar Singh Rajodha ke netritv me Collector Ankit Asthana se mile aur aarop lagaya ki vidhayak Pankaj Upadhyay ne survey number 217 par sthit Amrit Talab (Madhya Pradesh Panchayat evam Gramin Vikas Vibhag dwara nirmit) ko bulldozer/JCB se samtal karke khet bana liya aur kisanon ko dara-dhamkakar 98 bigha patte ki zameen apne naam karakar kabza kar liya; Collector ne SDM Joura ko 3 din me jaanch report pesh karne ke nirdesh diye aur jaanch ke baad karyavahi ka aashwasan diya. Stage: aarop + prashasanik jaanch ke aadesh; 14 Oct 2026 tak koi FIR, giraftari ya jaanch ke antim nishkarsh ki koi saarvjanik report nahi mili. Fund-pardarshita: ye vikas-kaar yojna ka mamla nahi hai, isliye vidhayak-nidhi ya sanction ki baat lagu nahi hoti. Credit-pardarshita: aarop graminon aur poorv vidhayak (BJP) ne lagaye; vidhayak ka jawab report me shamil hai — unhone kaha ki unke paas koi sarkari zameen nahi hai aur na unhone kisi sarkari zameen par kabza kiya hai, prashasan jaanch kara le, aur aarop ko Kailaras sugar-mill andolan ke khilaf rajniti bataya. Disclosure: ye negative entry hai — siddh apradh nahi, keval aarop aur jaanch-aadesh; SDM jaanch ka antim nateeja saarvjanik reporting me upalabdh nahi hua.',
    period: '2023-2028',
  },
];
mpWorks['aidal-singh-kansana'] = [
];
mpWorks['dinesh-gurjar'] = [
];
mpWorks['narendra-singh-tomar'] = [
];
// PARENT QA NOTE (2026-10-14, Morena batch): tomar ki 2 Surjanpur entries HATA di — dono kaam
// (CM Rise School bhoomi-pujan, up-swasthya kendra shilanyas) CM Mohan Yadav ne apne karyakram me
// kiye the; Tomar ki bhoomika sirf maujoodgi + sansad ke prastav-patra saunpna thi. Titles khud
// 'Tomar karyakram me maujood the' kehte the — maujoodgi+maang entry nahi banti (Silawat-Shipra
// aur Indore-Patel precedents). Profile imaandari se khaali.
mpWorks['devendra-ramnarayan-sakhwar'] = [
];

// REJECT-LOG Morena district batch (2026-10-14) — sankshipt; per-MLA poori logs ~/workspace/aapkaneta_scratch/morena_*.ts me.
// sarla-rawat: KHAALI — Kwari pul swikriti (public.app video + maang-patra ghoshna, bina GO), Rs 2L nidhi-ghoshna (bina sanction), nirikshan, CM-karyakram upasthiti; cyber-fraud/maarpeet parivar ke mamle (negative bar fail); rupaye-video pre-term.
// pankaj-upadhyay: POSITIVE khaali — sugar-mill andolan/dharna/prashn (virodh), toll-prashn, chakkajam, bayan; 1 NEGATIVE entry rakhi (Amrit Talab/zameen-kabza aarop, ETV Bharat + Collector ka SDM-jaanch aadesh + unka jawab).
// aidal-kansana: KHAALI — 37.62cr PWD sadken (naam tak nahi), chaupal bhoomi-pujan (AC-anishchit, fund undisclosed), mantri-roop awas/mandi/162cr package upasthiti; beta-ret-khanan parivar ka mamla; FPJ criticism (bina case).
// dinesh-gurjar: KHAALI — JJM-aarop (bina FIR/case, gaonwasiyon ka aarop), nirikshan, dharna, blogspot/bayan; galat-vyakti items (Sahab Singh Gurjar) check hue.
// narendra-singh-tomar: 3 me se 2 rakhi (Surjanpur me CM Rise School ka bhoomi pujan + swasthya kendra ka shilanyas/lokarpan — dono CM ne kiye, Tomar ne prastav-patra saunpe, note me poora disclosure; do-srot stage-antar bhi disclose); entry 3 HATA di (CM ki maang-par ghoshna — 'maang aparyapt' niyam). Rejects: AC-bahar (Shanichara/Morena shahar), YouTube/public.app-only, future-khabar, kendra-mantri-kaal pre-term.
// devendra-ramnarayan-sakhwar: KHAALI — CM-karyakram upasthiti, JJM prashn (sirf sawal), bus-stand maang, pre-term, virodh, symbolic feeta-katan; galat-vyakti (Satish Sikarwar) reject; ek Bhaskar page app-redirect par khula nahi.

// ---- Narmadapuram district batch (researched 2026-10-14) ----
// Narmadapuram district batch fragment (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
mpWorks['premshankar-verma'] = [
  {
    title: '8 gramon me yatri-pratikshalaya (Rs. 2,59,942 prati) ke liye vidhayak-nidhi se swikriti',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Khabar Par Nazar, 16 July 2024',
    sourceUrl: 'https://khabarparnajar.com/rs-51-lakh-30-thousand-190-approved-for-25-works-from-mla-fund%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%be%e0%a4%af%e0%a4%95-%e0%a4%a8%e0%a4%bf%e0%a4%a7%e0%a4%bf-%e0%a4%b8%e0%a5%87-25-%e0%a4%95%e0%a4%be/',
    date: '2024-07-16',
    note: 'Seoni-Malwa vidhansabha ke 8 gramon (Bhilakhedi, Daudijhunkar, Saheli, Bhilatdev, Bharlay, Ravanpipal, Babadiyabhau, Hirankheda) me men-road par yatri-pratikshalaya banane ke liye vidhayak Premshankar Verma ki vidhayak-nidhi se Rs. 2,59,942 prati-gram ke hisab se kul lagbhag Rs. 20.8 lakh swikrit hue (jila-star ki suchi, jisme 3 vidhansabhaon ke 25 karya shamil the). Status: swikriti — karyanwayan/purnata ki alag khabar nahi mili. Caveat: Khabar Par Nazar chhota sthaniya portal hai — disclosure.',
    period: '2023-2028',
  },
];
// Dr. Sita Saran Sharma (BJP) — Hoshangabad AC-137, Narmadapuram jila (MP). Researched 2026-10-14.
// Karyakaal Dec 2023 se; poorv-Vidhan Sabha Adhyaksh-kaal (2014-2018 sahit) ke saare kaam reject.
// Constituency = Narmadapuram nagar palika + Itarsi nagar palika.
mpWorks['dr-sita-saran-sharma'] = [
  {
    title: 'Itarsi ke ward 31 aur 32 me vidhayak-nidhi swikriti se mukhya CC road ka bhoomi-pujan hua',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Narmadanchal News, Oct 2026 (tithi est.)',
    sourceUrl: 'https://narmadanchal.com/cc-road-to-be-constructed-using-mla-funds-groundbreaking-ceremony-held/',
    date: '2026-10-02',
    note: 'Itarsi ke bazaar kshetra ke ward 31 aur 32 ki mukhya CC road ka bhoomi-pujan vidhayak-nidhi ki swikriti se hua; karyakram ke mukhya atithi swayam vidhayak Dr. Sita Saran Sharma the aur npa adhyaksh Pankaj Choure vishesh atithi. Stage: shilanyas (bhoomi-pujan) — nirman poora hone ki khabar abhi nahi mili. Credit-paradarshita: fund vidhayak-nidhi hai, rajya yojana nahi. Disclosure: Narmadanchal News chhota kshetriya portal hai (lekhak Rohit Nage — Dainik Bhaskar, Dainik Jagran sahit 30+ saal ke patrakarita anubhav ke saath).',
    period: '2023-2028',
  },
  {
    title: 'Itarsi ke ward 1 me vidhayak-nidhi se lagbhag Rs 10 lakh ki 195 meter CC road ka bhoomi-pujan hua',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Narmadanchal News, Oct 2026 (tithi est.)',
    sourceUrl: 'https://narmadanchal.com/ground-breaking-ceremony-held-for-a-195-meter-cc-road-in-ward-1-at-a-cost-of-10-lakh-development-gains-momentum/',
    date: '2026-10-02',
    note: 'Ward 1 me Gulbi Chacha ke makaan se Jyoti School tak banne wali 195 meter lambi CC road (lagbhag Rs 10 lakh) ka bhoomi-pujan npa adhyaksh Pankaj Choure aur ward parshad Dilip Goswami ne kiya. Stage: shilanyas — nirman poora hone ki khabar abhi nahi mili. Credit-paradarshita: vidhayak Dr. Sita Saran Sharma swayam karyakram me upasthit nahi the, lekin fund unhi ki vidhayak-nidhi hai aur kshetrawasiyon ne unhe iske liye aabhaar vyakt kiya. Disclosure: Narmadanchal News chhota kshetriya portal hai.',
    period: '2023-2028',
  },
];
// COORDINATOR QA NOTE (2026-10-14): is file ki 3rd entry (CM se Rs 15 crore ki 'ghoshna',
// vidhayak ke vishesh aagrah par) HATA di — sirf maang par CM ka ailaan entry nahi banta
// (Tomar-Surjanpur / Uikey-tiger-safari precedents); GO/vibhagiya pramanik data bhi nahi tha.
// Narmadapuram district batch — researched 2026-10-14
// MLA: Vijaypal Singh (BJP), Sohagpur AC-138. Term: Dec 2023 onwards.
// Fragment for appending into works_mp.ts — DO NOT export.
mpWorks['vijaypal-singh'] = [
  {
    title: 'Gram Sausarkheda me Rs. 65 lakh ke up-swasthya kendra bhavan ka bhoomi-pujan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Ink Press News, 9 Mar 2025',
    sourceUrl: 'https://www.inkpressnews.in.net/65-लाख-से-ग्राम-सौसारखेड़ा-म/',
    date: '2025-03-09',
    note: 'Sohagpur tahsil ke gram Sausarkheda me Lok Swasthya evam Parivar Kalyan Vibhag, MP ke 15ve Vitt Aayog me swikrit National Health Mission karya-yojna ke antargat Rs. 65 lakh se swikrit up-swasthya kendra bhavan ke nirman karya ka bhoomi-pujan hua; mukhya atithi kshetriya sansad Darshan Singh Choudhary the aur karyakram ki adhyakshta vidhayak Vijaypal Singh ne ki. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Fund: 15th Finance Commission/NHM (rajya/kendra yojna), vidhayak-nidhi nahi. Credit-paradarshita: ye sarkari yojna ka kaam hai jisme unhone adhyakshta ki; manch se unhone dawa kiya ki 65-65 lakh ke chaar aur up-swasthya kendra bhi swikrit ho gaye hain — un chaaron ke sthan/naam report me nahi hain, isliye wo dawa yahan entry nahi bana. Caveat: Ink Press News Sohagpur ka chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Sohagpur me Rs. 9.19 crore ke 50-bistariya samudayik swasthya kendra aur Sonpur me Rs. 65 lakh ke up-swasthya kendra ka bhoomi-pujan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'AKN News India, 22 Mar 2025 (est.)',
    sourceUrl: 'https://www.aknnewsindia.com/2025/03/9-19-50-65.html',
    date: '2025-03-22',
    note: 'Lok Swasthya evam Parivar Kalyan Vibhag ke antargat shaskiya samudayik swasthya kendra Sohagpur ke unnayan (50 bistariya, lagat Rs. 9.19 crore) aur 15ve Vitt Aayog/NHM me swikrit gram Sonpur ke up-swasthya kendra bhavan (lagat Rs. 65 lakh) ke nirman karyon ka bhoomi-pujan ek hi karyakram me hua; mukhya atithi swasthya mantri Narendra Shivaji Patel the, vishesh atithi sansad Darshan Singh Choudhary aur Rajya Sabha sansad Maya Naroliya the, aur adhyakshta vidhayak Vijaypal Singh ne ki. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Fund: swasthya vibhag (rajya yojna) + 15th FC/NHM, vidhayak-nidhi nahi. Credit-paradarshita: ye sarkari yojnaon ke kaam hain jisme unhone adhyakshta ki; swikriti/vibhagiya nirdesh ka shrey mantri aur vibhag ka hai. Caveat: AKN News India chhota sthaniya portal hai; tithi article me nahi thi — photo file-naam (IMG-20250322) ke aadhar par 22 Mar 2025 (est.) maani hai.',
    period: '2023-2028',
  },
  {
    title: 'Gram Sangakheda Kalan me lagbhag Rs. 9 crore ke vibhinn vikas karyon ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Janta Express Live, 4 Sep 2025',
    sourceUrl: 'https://jantaexpresslive.com/सोहागपुर-में-विकास-कार्य/',
    date: '2025-09-04',
    note: 'Sohagpur vidhansabha kshetra ke gram Sangakheda Kalan me lagbhag Rs. 9 crore ki lagat ke vibhinn vikas karyon ka bhoomi-pujan Lok Sabha sansad Darshan Singh Choudhary, Rajya Sabha sansad Maya Naroliya aur vidhayak Vijaypal Singh ne sanyukt roop se vidhivat kiya. Status: bhoomi-pujan — karyon ka vivaran aur purnata ki alag khabar report me nahi hai. Fund: article me yojna/fund spasht nahi — sansadon aur vidhayak ka sanyukt karyakram hone se ye sarkari yojnaon (rajya yojna) ke kaam lagte hain, vidhayak-nidhi nahi. Credit-paradarshita: unhone bhoomi-pujan me bhag liya; karyakram me sansad mukhya atithi the. Caveat: Janta Express Live Narmadapuram ka chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Gram Sangakheda me Prem Nagar sadak-naali aur nav-nirmit Ayurvedic dispensary bhavan ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Janta Express Live, 4 Sep 2025',
    sourceUrl: 'https://jantaexpresslive.com/सोहागपुर-में-विकास-कार्य/',
    date: '2025-09-04',
    note: 'Usi karyakram me gram Sangakheda me Prem Nagar Sangakheda road-naali aur nav-nirmit Ayurvedic dispensary bhavan ka lokarpan bhi hua; karyakram me sansad Darshan Singh Choudhary, Rajya Sabha sansad Maya Naroliya aur vidhayak Vijaypal Singh maujood the. Status: lokarpan (nirman purn, janata ko samarpit). Fund: article me yojna/fund spasht nahi — sarkari yojna ka kaam lagta hai, vidhayak-nidhi nahi. Credit-paradarshita: lokarpan me unhone bhag liya; sansad ne kaha ki unke "kushal netritva" me kshetra me lagatar lokarpan ho rahe hain (ye sansad ka dawa hai, vibhagiya record nahi). Caveat: Janta Express Live Narmadapuram ka chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Gram Tamcharu, Khargawali Dhana aur Mudiyakheda me 5.40 km sadak (lagat Rs. 675.03 lakh) ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceUrl: 'https://satyakiawaaz.com/?p=7107',
    sourceLabel: 'Satya Ki Awaaz, 28 Nov 2025',
    date: '2025-11-28',
    note: 'Vikaskhand Makhannagar ke gram Tamcharu, Khargawali Dhana (saade teen gaon) aur Mudiyakheda me Lok Nirman Vibhag, Narmadapuram dwara 5.40 km lambai ki sadak nirman yojna (kul lagat Rs. 675.03 lakh) ka bhoomi-pujan vidhayak Vijaypal Singh dwara kiya gaya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Fund: Lok Nirman Vibhag (rajya yojna), vidhayak-nidhi nahi. Credit-paradarshita: bhoomi-pujan unhone kiya; sadak PWD ki swikrit yojna hai, unki vyaktigat swikriti ka dawa report me nahi hai. Caveat: Satya Ki Awaaz Narmadapuram ka chhota sthaniya portal hai (tathya WhatsApp-tasveeron ke aadhar par).',
    period: '2023-2028',
  },
  {
    title: 'Gram Sukri se Mankwada tak sadak evam pul nirman (lagat Rs. 254 lakh) ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Ink Press News, Aug 2026 (est.)',
    sourceUrl: 'https://www.inkpressnews.in.net/%E0%A4%B8%E0%A5%8B%E0%A4%B9%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%AF%E0%A4%95-%E0%A4%B5%E0%A4%BF%E0%A4%9C%E0%A4%AF%E0%A4%AA%E0%A4%BE%E0%A4%B2-5/',
    date: '2026-08',
    note: 'Sohagpur vidhansabha kshetra me gram Sukri se Mankwada tak prastavit sadak evam pul nirman karya (kul lagat Rs. 254 lakh) ka bhoomi-pujan vidhayak Vijaypal Singh dwara vidhivat kiya gaya; isse Sukri, Mankwada sahit aaspaas ke grameen anchalon me aavaagaman sugam hone ki apeksha hai. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Fund: article me yojna/fund spasht nahi — "pradesh sarkar" ke hawaale se sarkari yojna ka kaam lagta hai, vidhayak-nidhi nahi. Credit-paradarshita: bhoomi-pujan unhone kiya; swikriti ka vibhagiya aadesh report me nahi hai. Caveat: Ink Press News Sohagpur ka chhota sthaniya portal hai; article me tithi nahi thi — crawl timing (Aug 2026) aur "guruvaar" ke hawaale par Aug 2026 (est.) maani hai.',
    period: '2023-2028',
  },
  {
    title: 'Pawarkheda Khurd aur Madhawan me kul Rs. 42 lakh ke nirman karyon ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Ink Press News, Aug 2026 (est.)',
    sourceUrl: 'https://www.inkpressnews.in.net/%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%AF%E0%A4%95-%E0%A4%A0%E0%A4%BE-%E0%A4%B5%E0%A4%BF%E0%A4%9C%E0%A4%AF%E0%A4%AA%E0%A4%BE%E0%A4%B2-%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%B9-%E0%A4%A8%E0%A5%87/',
    date: '2026-08',
    note: 'Vikaskhand Makhannagar ki do gram panchayaton me kul Rs. 42 lakh ki lagat se nirman karyon ka bhoomi-pujan hua; karyakramon ki adhyakshta vidhayak Vijaypal Singh ne ki. Pawarkheda Khurd me ekikrit shaskiya madhyamik shala parisar me Rs. 19 lakh ka samudayik mangal bhavan, aur gram Madhawan me Rs. 19 lakh ka samudayik mangal bhavan tatha Rs. 4 lakh ka mata mandir parisar me atirikt kaksh — in sabka bhoomi-pujan ek hi dauran hua; karyakram me kaksha 1-5 ke vidyarthiyon ko school bag bhi vitrit kiye gaye. Status: bhoomi-pujan — nirman karya shuru hone the, purnata ki alag khabar nahi mili. Fund: article me yojna/fund spasht nahi — "shasan" ke hawaale se sarkari yojna ke kaam lagte hain, vidhayak-nidhi nahi. Credit-paradarshita: unhone adhyakshta/bhoomi-pujan kiya; swikriti ka vibhagiya aadesh report me nahi hai. Caveat: Ink Press News Sohagpur ka chhota sthaniya portal hai; article me tithi nahi thi — crawl timing (Aug 2026) ke aadhar par Aug 2026 (est.) maani hai.',
    period: '2023-2028',
  },
];
// Thakur Das Nagwanshi (BJP) — Pipariya (SC) AC-139, Narmadapuram (MP). Karyakaal Dec 2023 se.
mpWorks['thakur-das-nagwanshi'] = [
  {
    title: 'Pipariya kshetra ke 14 gaon ke liye vidhayak-nidhi se 14 GI water tanker (5500 litre, 9x16 naye tyre) ki prashasnik swikriti, har tanker Rs. 1,60,761 ka',
    category: 'Paani',
    badge: 'news',
    sourceLabel: 'Khabar Par Najar, 16 Jul 2024',
    sourceUrl: 'https://khabarparnajar.com/rs-51-lakh-30-thousand-190-approved-for-25-works-from-mla-fund%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%be%e0%a4%af%e0%a4%95-%e0%a4%a8%e0%a4%bf%e0%a4%a7%e0%a4%bf-%e0%a4%b8%e0%a5%87-25-%e0%a4%95%e0%a4%be/',
    date: '2024-07-16',
    note: 'Collector karyalaya (Jila Yojana evam Sankhyiki, Narmadapuram) ki press-vijnyapti ke anusaar vidhayak Thakurdas Nagwanshi ki anushansa par vidhayak-nidhi se gram Sighodi (2 tanker), Khidiya, Matkuli (2), Tekapar, Kanhwar, Singanama, Nandiya, Gadaghat, Nayagaon, Nibhaura, Purenarandhir aur Malhanwada me kul 14 GI water tanker (5500 litre kshamta, 9x16 naye tyre sahit) ki prashasnik swikriti jari hui; pratyek tanker Rs. 1,60,761 ka. Status: swikriti — tanker vitaran ya karyanvayan ki alag khabar nahi mili. Caveat: Khabar Par Najar chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Pipariya aur Bankhedi janpad ke 10 gaon me yatri pratikshalaya (Model-3) ke liye kul Rs. 25,99,420 ki prashasnik swikriti',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Khabar Par Najar, Jan 2026 (est.)',
    sourceUrl: 'https://khabarparnajar.com/administrative-approval-issued-for-construction-works-in-pipariya-and-seoni-malwa-assembly-constituencies-%e0%a4%b5%e0%a4%bf%e0%a4%a7%e0%a4%be%e0%a4%a8%e0%a4%b8%e0%a4%ad%e0%a4%be-%e0%a4%95%e0%a5%8d/',
    date: '2026-01',
    note: 'Collector karyalaya (Jila Yojana evam Sankhyiki, Narmadapuram) ke anusaar Vidhayak Nirvachan Kshetra Vikas Yojana ke tahat vidhayak Thakurdas Nagwanshi ki anushansa par 10 nirman karyon ke liye kul Rs. 25,99,420 ki prashasnik swikriti jari hui — janpad Pipariya ke gram Kajrota, Jamada (Khedapati Mata mandir ke paas), Pachua (talab ke paas), Semrirandhir (mukhya marg), Ghana Tola Katiyadhana, aur janpad Bankhedi ke gram Maharajganj (Mata mandir ke paas), Banwari (Puraina road), Samanapur (Khaira road), Anhai (Jamunia road), Tinsri (main road) me yatri pratikshalaya Model-3, pratyek Rs. 2,59,942 ka. Status: swikriti — nirman poornata ki alag khabar nahi mili. Caveat: article par prakashan-tithi nahi dikhi; search-index crawl timing ke aadhar par Jan 2026 anumaanit hai (isse pehle ki bhi ho sakti hai); Khabar Par Najar chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Surelakalan me poshan vatika ke liye nalakuup khanan (Rs. 2,24,000) aur Pipariya ke shasakiya vidyalaya pustakalaya ke liye pustak-kray (Rs. 2,00,000) ki prashasnik swikriti',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Khabar Par Najar, Jan 2026 (est.)',
    sourceUrl: 'https://khabarparnajar.com/administrative-approval-of-rs-04-lakh-24-thousand-issued-for-02-works-recommended-by-mla-pipariya-shri-nagvanshi/',
    date: '2026-01',
    note: 'Vidhayak Thakurdas Nagwanshi ki anushansa par Collector Sania Meena dwara 2 karyon ke liye kul Rs. 4,24,000 ki prashasnik swikriti jari hui: janpad Pipariya ki gram panchayat Surelakalan me poshan vatika me peyjal ke liye nalakuup khanan (Rs. 2,24,000), aur nagar panchayat Pipariya ke shasakiya Ramnarayan Agrawal uchch madhyamik vidyalaya ke pustakalaya me mahapurusho, kala, sanskriti, gyan-vigyan aadi vishayon ki pustak-kray (Rs. 2,00,000). Fund: swikriti me vidhayak-nidhi aur panchayat-nidhi dono ki rashi shamil hai — kis kaam me kitna hissa vidhayak-nidhi ka hai, article me spasht nahi. Status: swikriti — karyanvayan ki alag khabar nahi mili. Caveat: article par prakashan-tithi nahi dikhi; search-index crawl timing ke aadhar par Jan 2026 anumaanit hai (isse pehle ki bhi ho sakti hai); Khabar Par Najar chhota sthaniya portal hai.',
    period: '2023-2028',
  },
];

// ---- Narmadapuram district batch REJECT-LOG (2026-10-14) ----
// NOTE: sharma ki CM Rs 15cr ghoshna entry coordinator-QA me hata di gayi (maang+ghoshna rule).
// REJECT-LOG premshankar-verma:
// 1. narmadasamay.com/?p=34637 (Ward 9 CC road, bhoomi-pujan) — 11 July 2023: PRE-TERM.
// 2. regionalvoicenews.com/?p=408 (Rs. 10 lakh vidhayak-nidhi ghoshna, Kurmi Kshatriya Gaur Samaj bhawan) — sirf ghoshna, sanction/work-order saboot nahi.
// 3. narmadanchal.com/mla-verma-performed-bhoomi-pujan-and-inauguration-of-8-and-a-half-lakhs — ~Nov 2021: PRE-TERM.
// 4. mediawala.in CM visit (Apr 2026, 1000-crore works) — MLA sirf upasthit/bolega; karta CM; rajya-pariyojna me unki concrete bhoomika nahi.
// 5. aknnewsindia.com 2025/05 CM visit — MLA ne CM se MAANG ki (sinchai/college/saundaryikaran); sirf maang.
// 6. regionalvoicenews.com/?p=371 (Rs. 33 cr Sonasaavari-Saanwalkheda road, ADB) — karta MLA Sitasaran Sharma; Premshankar sirf maujood.
// 7. narmadasamay.com/?p=20223 (Vikas Yatra, Babadiyabhau) — sansad/CM yojna; MLA sirf maujoodgi.
// 8. hindsantri.com (Sep 2026 swachhata abhiyan, bus stand) — karyakram me maujoodgi; vikas-karya nahi.
// 9. public.app/video (PWD minister se mulakat) — maang/charcha; public.app-only source bhi.
// 10. narmadanchal.com CC road (Itarsi ward 31-32) — Dr. Sitasaran Sharma ki nidhi, kshetra se bahar/galat vyakti.
// 11. narmadasamay.com/?p=8749 (MP sthapna divas, MP gaan) — program; vikas-karya nahi.
// 12. YouTube videos (samiksha baithak; 2021 daura) — YouTube-only source; ek pre-term bhi.
// 13. dailyprabhat.com MCC case (Oct 2023) — PRE-TERM + sirf election-time shikayat; FIR/case sthiti uplabdh nahi.
// REJECT-LOG dr-sita-saran-sharma:
// 1. Vivekanand Ghat 41.75 lakh bhoomi-pujan + 4 wardon me 128 lakh ke karyon ka bhoomi-pujan/lokarpan (27 May 2025, AKN News India/mpnewscast) — karyakram ke mukhya atithi sansad Darshan Singh Choudhary the, karyanvayan nagar palika ka; vidhayak sirf saha-mukhya atithi → sirf maujoodgi.
// 2. Pandit Bhawani Prasad Mishra Chowk 46.78 lakh saundaryikaran-choudikaran ka lokarpan + 19.96 lakh sulabh complex + ward 16/17/18/28 me 433.47 lakh ke bhoomi-pujan/lokarpan (5 June 2025, newsindia24x7) — npa ka karyakram; vidhayak sirf kai mukhya atithiyon me se ek → sirf maujoodgi.
// 3. Tawa nadi par naya pul (~Rs 150 crore) ka double bhoomi-pujan (Oct 2023, Zee News/swatantrasamay) — pre-term (Dec 2023 se pehle ka aachar-sanhita-kaalin karyakram).
// 4. CM Mohan Yadav ka Narmadapuram karyakram (May 2025, INH News) — vidhayak sirf upasthit janpratinidhiyon me se ek → sirf maujoodgi.
// 5. Itarsi ward 9 me Rs 40 lakh (4 RCC naliyan + 3 CC sadken) ka bhoomi-pujan (Oct 2026, narmadanchal) — fund source unclear, vidhayak ki concrete bhoomika unclear (sirf saha-mukhya atithi) → kamzor attribution.
// 6. Itarsi ward 26/11/12 me CC road ka npa adhyaksh/EE dwara nirikshan (narmadanchal) — sirf nirikshan.
// 7. Narmada ke liye Rs 500 crore (Amarkantak se Bharuch) swikriti ka sansad ka bayan (May 2025) — sansad ka Lok Sabha-level dawa, vidhayak ka kshetra-kaam nahi.
// 8. Narmada Lok corridor "jaldi bhoomi-pujan karenge" (May 2025) — bhavishya ghoshna, koi kaam shuru nahi hua.
// 9. Ma Rajrajeshwari mandir me murti sthanantaran/pran-pratishtha (5 June 2025) — dharmik karyakram, vikas-kaam nahi.
// 10. FreePressJournal chief-whip niyukti ki charcha — afwah/atkalen, kshetra-kaam nahi.
// REJECT-LOG vijaypal-singh:
// 1. aditinews.com (16 Feb 2023) / mpnewscast.com / narmadasamay.com (Feb 2023): Vikas Yatra me 6+ crore / 3+ crore ke lokarpan-bhoomi pujan — pre-term (Dec 2023 se pehle), isliye reject.
// 2. narmadanchal.com (nal-jal yojnaon ka bhoomi-pujan/lokarpan, sansad Rao Udaypratap Singh ke saath): ~2021 ka purana article, pre-term — reject.
// 3. Zee News Hindi (2 Oct 2023): Tawa nadi par Rs. ~150 crore pul ka bhoomi-pujan (sansad ke saath; Narmadapuram vidhayak ne 3 din baad dobara kiya) — pre-term — reject.
// 4. ETV Bharat (2 Nov 2023): chunav-purv interview me 2008-2023 ke karyon ka dawa — pre-term dawa, term ke baad ka koi concrete kaam nahi — reject.
// 5. public.app (7 Jun 2026): "103.53 km sadak nirman/sudridhikaran ko swikriti, vidhayak ke prayason se" — sirf public.app par (video post); public.app-only source niyam se reject; swikriti ka GO/vibhagiya aadesh bhi nahi dikha.
// 6. YouTube-only videos (Vikas Yatra sambandhi) — YouTube-only source niyam se reject.
// 7. "Vijaypal Mirdha" (Degana, Rajasthan) se jude vivaad/charge ke hits — galat vyakti; AC-138 Sohagpur ke Vijaypal Singh se sambandhit nahi — reject.
// 8. bansalnews.com (Ashoknagar vidhayak par HC) — dusre vidhayak ka mamla — reject.
// 9. Ink Press News article me vidhayak ka manch-dawa ("65-65 lakh ke chaar aur up-swasthya kendra swikrit") — sthan/naam bina sirf dawa; swikriti ka saboot nahi — entry nahi bani, entry 1 ke note me darj.
// Negative entry: koi credible FIR/case/janch ki khabar nahi mili (affidavit me 0 criminal cases); negative entry nahi jodi.
// REJECT-LOG thakur-das-nagwanshi:
// 1. satyakiawaaz.com (Oct 2026) — 'Anantganga Aankh Jaanch Kendra evam Optical' ka udghatan: Shankaracharya Netralaya, Jhoteshwar dwara sanchalit NIJI kendra; MLA ne sirf feeta kaatkar udghatan kiya — koi nidhi, fund ya bhoomika nahi; sirf karyakram me maujoodgi. REJECT.
// 2. bhaskar.com (Jul 2026 est.) — Pipariya janpad sabhagar me vikas karyon ki samiksha baithak: CM Rise school bhavan poora karne ke nirdesh, shikshak-kami par ashwasan aadi — koi concrete kaam ya charan nahi; sirf samiksha/nirdesh. REJECT.
// 3. bhaskar.com (Aug 2026 est.) — Bankhedi me Ol nadi pul ka lokarpan: udghatan mantri Rao Udaypratap Singh ne kiya; MLA sirf upasthit; rajya pariyojna me MLA ki concrete bhoomika spasht nahi; mantri ke karyakram me sirf maujoodgi. REJECT.
// 4. jantaexpresslive.com — gram panchayat Bijanwada ke karyon ki MLA dwara sarahna: panchayat ka kaam hai, MLA ka apna koi kaam nahi. REJECT.
// 5. makdaiexpress24.com — vidhayak-nidhi se 5.65 lakh (Khairua me CC road/nali, 2021): pre-term. REJECT.
// 6. bhaskarhindi.com (19 Nov 2020) — 47 logon ko vidhayak svechchhanudan se 2.09 lakh aarthik sahayata: pre-term. REJECT.
// 7. narmadakiran.blogspot.com (Dec 2024) — Dokri Kheda vikas ke liye 'vidhayak-nidhi se rashi dene ki baat kahi': blogspot-only source + sirf ghoshna-type baat, koi swikriti-aadesh saboot nahi. REJECT.
// 8. zeenews.india.com / sabkikhabar.com — talwar-bana kartab aur 'sher dance' viral videos: kshetra-kaam nahi. REJECT.
// 9. atulyabharatchetna.org.in (Sep-Oct 2026) — mantri Rao Udaypratap Singh se pratinidhimandal ki saujanya bhet: sirf charcha/baithak, koi concrete kaam nahi. REJECT.
// 10. aajkakhulasa.com — commissioner ke saath baithak me CM Rise school me kami ka mudda: sirf mudda/mang, koi kaam nahi. REJECT.
// 11. statenews.ai (Jul 2026) — kotwaron dwara tehsildar/MLA ko gyapan: sirf mang/gyapan. REJECT.


// ---- Narsinghpur district batch (researched 2026-10-14) ----
// Coordinator QA (2026-10-14): charon workers ki fragments sameen me; vishwanath empty (honest),
// prahlad 10 entries me mantri-scope + ECI delimitation geography check verified; uday negative
// (adalati kharij) poori karyavahi-status ke saath; koi scaffolding comment nahi, notes single-paragraph.

// Narsinghpur district batch — Mahendra Nagesh (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
mpWorks['mahendra-nagesh'] = [
  {
    title: 'Gotegaon kshetra me kul Rs. 16.961 crore ke 20 vikas karyon ka lokarpan — mukhyataya grameen sadken (Viksit Bharat-Viksit MP program me local karyakram)',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Ananttvlive, 29 Feb 2024',
    sourceUrl: 'https://ananttvlive.com/states/madhyapradesh/gotegaon-assembly-gets-crores-of-gifts/cid13703458.htm',
    date: '2024-02-29',
    note: 'Gotegaon janpad panchayat sabhagar me hue karyakram me vidhayak Mahendra Nagesh (mukhyatithi) ne kshetra ke 20 vikas karyon ka lokarpan kiya; kul lagat lagbhag Rs. 16.961 crore batayi gayi. Karya-suchi me Maa Narmada Kumargaon ghat par CD nirman aur grameen sadken shamil thi (OVI road se Belkhedi Tikari, Gochar se Poniya Tikari, Jamuniya road se Kamodi, Rehli se Kodiya, Jharakhurpa Tigadda Tapariya, NH-22 Gotegaon se Lurhata, Bahoripar se Salaiya, Lalpur se Piper Pani, Jamuniya se Jamuniya Tola, Katkahi se Silwani, Gram Tola se Pura Dafai, Kandhrapur se Chhoti Simari aadi). Status: lokarpan. Credit-pardarshita: ye "Viksit Bharat, Viksit Madhya Pradesh" rajya karyakram ka hissa tha jisme PM Narendra Modi virtual jude the; sthaniya lokarpan-karyakram me unki mukhyatithi ke roop me concrete bhoomika report hui hai, isliye entry rakhi gayi hai. Caveat: chhota sthaniya portal (ananttvlive); karya-wise alag-alag rakam ki suchi article me nahi di gayi.',
    period: '2023-2028',
  },
];

// REJECT-LOG (mahendra-nagesh, researched 2026-10-14):
// - mpbreakingnews.in (~11 Oct 2026, CM Mohan Yadav Narsinghpur event): CM ne jile ke 175 crore+ ke 31 karyon ka lokarpan/bhoomi-pujan kiya; Gotegaon AC ke 2 sadak-lokarpan (Simariya-Chargawan se Kuklah-Saliwara marg 3.49 cr, Bagaspur-Sahajpur se Bakauri marg 5.60 cr), 20 gaon me nal-jal (9.20 cr), 4 sadak-bhoomipujan (6.36+6.07+3.19+3.14 cr), 5 school bhawan (4.30 cr) aadi — lekin CM karyakram; MLA Mahendra Nagesh ki koi concrete bhoomika article me report nahi, sirf maujoodgi/sadharan upasthiti sambhav. REJECT (sirf maujoodgi / credit aspasht).
// - The Hitavada, 14 May 2026 (Mungwani, Ladli Bahna event): MLA ne CM se Mungwani me naya college khulne ki maang rakhi; CM ne sakaratmak jawab diya aur ghoshna ki — sirf maang + bhavishya ki ghoshna, koi GO/sanction nahi; saath hi Mungwani Gotegaon AC ke bahar ka kshetra hai. REJECT (maang + bhavishya-ghoshna + kshetra-bahar).
// - ncrsamacharlive.in (Gotegaonkheda 33/11 KV upkendra, 3 crore swikrit, FY 2024-25 budget): prastav kendriya mantri Prahlad Singh Patel ne energy mantri ko bheja, energy mantri Pradyumn Singh Tomar ne manzoori di; MLA ke "prayas" ka sirf aabhaar-vyakya, concrete dastavezi kadam report nahi. REJECT (credit aspasht — prastav/svikriti doosron ki).
// - mpbignews.com/samacharnama.com, ~8 Oct 2026 (Gotegaon kshetra me 6.7 crore ki PMGSY sadak 18 mahine me kshatigrast — Sakal road se OB road Magardha-Belkhedi, Mahka-Gutauri ke beech Shedh nadi kataav): nagarigon ka bhrashtachar ka aarop adhikariyon/thekedaaron par; MLA ka naam article me nahi, koi FIR/janch-karyavahi ya adhikarik sthiti report nahi. Negative-entry niyam ke mutabik REJECT (aarop bina karyavahi ke).
// - livevns.news / khabarbhoomi.com, ~1 Feb 2024 (Bagaspur me 55 lakh ke karyon ka lokarpan-bhoomipujan): mantri Prahlad Singh Patel ne kiya; MLA sirf maujood the. REJECT (sirf maujoodgi).
// - ananttvlive.com, 1 Apr 2025 (School Chale Hum pravesh-utsav, CM Rise vidyalaya Gotegaon): MLA school program me gaye, bachchon se mile — karyakram me maujoodgi, koi vikas-karya nahi. REJECT.
// - yashbharat.co.in, ~Jan 2024 (Viksit Bharat Sankalp Yatra, Gotegaon nagarpalika): Ujjwala 2.0 gas connection vitran; MLA ki adhyakshata me karyakram — yojana labh-vitran, koi naya kaam nahi. REJECT.
// - atulyabharatchetna.org.in, ~8 Oct 2026 (Narmada tat par 1500 paudhon ka ropan): MLA maujood the; Sakal ghat nirman sirf prastav (mantri ko diya gaya), swikriti nahi. REJECT (maang/prastav).
// - YouTube (KBS TV, ~Sep 2026): PM ke janmdin par svasthya kendra me phal-vitran — sirf sewa-karyakram, vikas-karya nahi; waise bhi YouTube-only source reject. REJECT.
// - YouTube (Prime TV, ~Apr 2026): MLA ke saale par ANM dwara mansik-pratadna ka aarop — parivar ka mamla (un par KABHI nahi) + YouTube-only + FIR/janch ki pakki sthiti nahi. REJECT.
// - theweek.in PTI, 15 May 2025 (Gotegaon Sainik school ka naam Maninagendra Singh par rakhne ka CPI(M) virodh): MLA ka isme koi sambandh report nahi. REJECT (aprāsangik).
// - samanya note: profile khaali nahi — 1 entry mili; kamzor attribution wali khabrein (jaise mantri/CM karyakramon me maujoodgi) jodne se parhez kiya gaya.

// Narsinghpur district batch — Prahlad Singh Patel (Narsingpur AC-119, BJP) (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
// Note: Cabinet Mantri (Panchayat evam Gramin Vikas) hain — mantri-niyam lagoo: sirf Narsingpur AC ke thos kshetra-kaam liye gaye hain,
// rajya-stariya vibhagiya faisle/ghoshnaen/daure nahi. Geography check: ECI delimitation ke mutabik AC-119 = poori Kareli tehsil + Narsinghpur
// tehsil ke kuchh hisse; neeche ke sabhi sthan (Tinsra, Amgaon, Kareli, Umaria, Tindni, Nayakheda, Richhai) Kareli tehsil me hain.
mpWorks['prahlad-singh-patel'] = [
  {
    title: 'Tinsra me PMGSY ke tahat Amgaon se Dilheri marg par Rs. 1.21 crore ke pul ka shilanyas',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'LiveVNS (Hindushtan Samachar wire), 4 Jan 2024',
    sourceUrl: 'https://livevns.news/state/madhyapradesh/objective-of-vikas-bharat-sankalp-yatra-is-to-providephp/cid13226983.htm',
    date: '2024-01-04',
    note: 'Vikasit Bharat Sankalp Yatra ke dauran unhone Narsinghpur jile ke gram Tinsra me Pradhan Mantri Gram Sadak Yojana me Amgaon se Dilheri marg par Rs. 1.21 crore ki lagat se banne wale pul ka shilanyas kiya. Status: shilanyas/bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: June 2026 ke daura-karyakram me Tinsra me ek pul ke lokarpan ka ullekh tha (sambhavatah yahi pul), lekin uska post-event report nahi mila.',
    period: '2023-2028',
  },
  {
    title: 'Amgaon me 15th Finance Commission aur MNREGA se nirmit CC road ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'LiveVNS (Hindushtan Samachar wire), 4 Jan 2024',
    sourceUrl: 'https://livevns.news/state/madhyapradesh/objective-of-vikas-bharat-sankalp-yatra-is-to-providephp/cid13226983.htm',
    date: '2024-01-04',
    note: 'Usi Tinsra karyakram me unhone Amgaon me 15th Finance Commission aur MNREGA se sanyukt roop se nirmit CC road ka lokarpan kiya. Status: lokarpan (sadak nirmit, janata ko samarpit).',
    period: '2023-2028',
  },
  {
    title: 'Kareli me Barman Chauraha se Imaliya tak 1.5 km CC sadak (Rs. 276.41 lakh) aur SDRF ki puliya (Rs. 78.05 lakh) ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Newzfatafat (Hindushtan Samachar wire), 13 Jul 2024',
    sourceUrl: 'https://newzfatafat.com/rajya/inaugurated-the-construction-of-road-and-culvertphp/cid14935929.htm',
    date: '2024-07-13',
    note: 'Swatantrata sangram senani Harivishnu Kamath ke janmdivas par unhone Kareli shahar ke Ganesh ward me Barman Chauraha Kareli se Imaliya tak Rs. 276.41 lakh ki lagat ki 1.50 km lambi CC sadak aur SDRF ke antargat Rs. 78.05 lakh ki lagat ki puliya ke nirman karya ka lokarpan kiya. Status: lokarpan (sadak-puliya nirmit, janata ko samarpit). Disclosure: article me poorv Rajya Sabha sansad Kailash Soni ke hawale se likha hai ki ye damar sadak poorv vidhayak Jalam Singh Patel ke karyakal me swikrit hui thi — swikriti pre-term hai, lokarpan inke karyakal me hua.',
    period: '2023-2028',
  },
  {
    title: 'Umaria me Rs. 65 lakh ke up-swasthya kendra aur Rs. 3.3 lakh ki CC road ka bhoomi-pujan; naali nirman ka udghatan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Ujjwal Pradesh, 19 Nov 2024',
    sourceUrl: 'https://www.ujjwalpradesh.com/minister-patel-inaugurated-various-construction-works-and-performed-bhoomi-pujan/',
    date: '2024-11-19',
    note: 'Janpad panchayat Kareli ki gram panchayat Umaria me Awas Pakhwada karyakram me unhone Rs. 65 lakh ki lagat se banne wale up-swasthya kendra aur Rs. 3.30 lakh ki CC road ka bhoomi-pujan kiya, saath hi naali nirman karya ka udghatan bhi kiya; PM Awas Yojana-Gramin ke swikriti patra bhi vitrit kiye. Status: bhoomi-pujan/udghatan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili. Caveat: tithi wire dateline (Bhopal, 19 November) se li hai.',
    period: '2023-2028',
  },
  {
    title: 'Nayakheda se Tapariya Tola pahunch marg (Rs. 21 lakh) ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Ujjwal Pradesh, 19 Nov 2024',
    sourceUrl: 'https://www.ujjwalpradesh.com/minister-patel-inaugurated-various-construction-works-and-performed-bhoomi-pujan/',
    date: '2024-11-19',
    note: 'Gram panchayat Nayakheda me unhone Rs. 21 lakh ki lagat se bane Nayakheda se Tapariya Tola pahunch marg ka lokarpan kiya. Status: lokarpan (marg nirmit, janata ko samarpit). Caveat: tithi wire dateline (Bhopal, 19 November) se li hai.',
    period: '2023-2028',
  },
  {
    title: 'Tindni me Shed nadi par Narsinghpur-Simariya-Tindni marg ke 150-meter uchch-stariya pul ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Ujjwal Pradesh, 19 Nov 2024',
    sourceUrl: 'https://www.ujjwalpradesh.com/minister-patel-inaugurated-various-construction-works-and-performed-bhoomi-pujan/',
    date: '2024-11-19',
    note: 'Tindni me Shed nadi par nirmit Narsinghpur-Simariya-Tindni marg ke 150 meter lambe uchch-stariya pul ka lokarpan unhone kiya; report ke mutabik pul banne se Narsinghpur jila mukhyalaya ka fasla kam hua hai. Status: lokarpan (pul nirmit, yatayat hetu khula). Caveat: tithi wire dateline (Bhopal, 19 November) se li hai.',
    period: '2023-2028',
  },
  {
    title: 'Nayakheda-Imaliya-Gargata-Gararu marg par uchch-stariya pul ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Ujjwal Pradesh, 19 Nov 2024',
    sourceUrl: 'https://www.ujjwalpradesh.com/minister-patel-inaugurated-various-construction-works-and-performed-bhoomi-pujan/',
    date: '2024-11-19',
    note: 'Usi pravas me unhone Nayakheda-Imaliya-Gargata-Gararu marg par uchch-stariya pul ka bhi lokarpan kiya. Status: lokarpan (pul nirmit, yatayat hetu khula). Caveat: tithi wire dateline (Bhopal, 19 November) se li hai; pul ki lagat article me nahi di gayi thi.',
    period: '2023-2028',
  },
  {
    title: 'Kareli basti me Rs. 50 lakh ke Unnati Samudayik Prashikshan Kendra ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Yash Bharat, 9 Mar 2025',
    sourceUrl: 'https://yashbharat.co.in/मंत्री-प्रहलाद-पटेल-ने-कि/',
    date: '2025-03-08',
    note: 'Antarashtriya Mahila Divas (8 March 2025) par aayojit karyakram me unhone vikas-khand Kareli ke antargat Kareli basti me Rs. 50 lakh ki lagat se nav-nirmit Unnati Samudayik Prashikshan Kendra ka feeta katkar lokarpan kiya. Status: lokarpan (kendra nirmit, janata ko samarpit). Note: usi karyakram me 1132 swasahayata samoohon ko Rs. 28.27 crore ke bank cheque vitrit hue — ye Aajeevika Mission ki rajya-yojana ka vitaran tha, alag entry nahi banayi.',
    period: '2023-2028',
  },
  {
    title: 'Kareli basti me Rs. 5 lakh ke Bhagwan Birsa Munda Bhavan ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Yash Bharat, 9 Mar 2025',
    sourceUrl: 'https://yashbharat.co.in/मंत्री-प्रहलाद-पटेल-ने-कि/',
    date: '2025-03-08',
    note: 'Usi Mahila Divas karyakram me unhone Kareli basti me Rs. 5 lakh ki lagat se nirmit hone wale Bhagwan Birsa Munda Bhavan ka bhoomi-pujan kiya. Status: bhoomi-pujan — nirman karya shuru hona tha, purnata ki alag khabar nahi mili.',
    period: '2023-2028',
  },
  {
    title: 'Richhai me lagbhag Rs. 50 lakh ke karyon ka lokarpan-bhoomi-pujan — Ayushman Arogya Mandir UHC, sudur sadak, samudayik bhavan, anganwadi',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Vocal TV (Hindushtan Samachar wire), 11 Apr 2025',
    sourceUrl: 'https://vocaltv.in/madhya-pradesh/patel-inaugurated-various-works-and-performed-bhoophp/cid16549896.htm',
    date: '2025-04-11',
    note: 'Kareli janpad panchayat ke gram Richhai me unhone lagbhag Rs. 50 lakh ki lagat ke Ayushman Arogya Mandir up-swasthya kendra, Dane Dada se Mrigendranath dham ki ore sudur sadak, samudayik bhavan aur anganwadi kendra kramank-2 ka lokarpan, aur khel maidan samtalikaran, seedhi evam retaining wall nirman karya ka bhoomi-pujan kiya; UHC ke liye bhoomi daan dene wale Pramod Kumar Choudhary ka samman bhi kiya. Status: lokarpan + bhoomi-pujan — UHC/sadak/bhavan/anganwadi taiyar, khel-maidan karya shuru hona tha.',
    period: '2023-2028',
  },
];

// ---- REJECT LOG (prahlad-singh-patel, researched 2026-10-14) ----
// Mantri-niyam note: ye Cabinet Mantri (Panchayat evam Gramin Vikas) hain — vibhag ke rajya-stariya faisle,
// rajya-yojanaon ki ghoshnaen aur mantri-roop ke daure/bhashan entry me nahi liye gaye.
// 1. khabarbhoomi.com (~Jan/Feb 2024) — Bagaspur gram panchayat me Rs. 55 lakh ke vikas karyon ka lokarpan/bhoomi-pujan.
//    REJECT: kshetra-bahar — karyakram me "vidhayak Mahendra Nagesh" maujood the; Mahendra Nagesh Gotegaon AC (118) ke
//    vidhayak hain (atulyabharatchetna, Oct 2026), isliye Bagaspur Narsingpur AC-119 se bahar ka kshetra hai.
//    URL: https://khabarbhoomi.com/inauguration-and-bhoomi-pujan-of-development-works-worth-rs-55-lakh-done-in-gram-panchayat-bagaspur/
// 2. CM Mohan Yadav ka Narsinghpur daura (Oct 2026; punjabkesari/indianmasterminds/mpbreakingnews) — Sandipani school lokarpan,
//    Rs. 540 cr road, riverfront, Gita Bhawan aadi CM ghoshnaen.
//    REJECT: CM ke karyakram me sirf maujoodgi + CM ki ghoshnaen — inki vyaktigat dastavezi bhoomika nahi.
// 3. Sainik School, Gotegaon (IANS/newsnation, Apr 2025) — Patel ne Raksha Mantri se milkar PPP-mode school ki approval dilayi.
//    REJECT: kshetra-bahar (Gotegaon AC-118, inka grih-nagar lekin Narsingpur AC nahi) + parivar-foundation ka PPP school.
// 4. loknathnews.com (1 Oct 2026) — Imlai me Rs. 65 lakh swasthya kendra, lokarpan ke baad bhi tala.
//    REJECT: kshetra-bahar — Imlai Damoh jile ka gram hai, Narsinghpur ka nahi (search snippet bhramak tha).
// 5. polkholnewz.com (11 Jan 2026) — 12 Jan ko Suatla me PHC lokarpan + samudayik bhavan bhoomi-pujan ka daura-karyakram.
//    REJECT: pre-event schedule — karyakram hone ka post-event report nahi mila.
// 6. khabar24livetv.com (9 Jun 2026) — 10-11 June daura schedule: Tinsra pul lokarpan, Simariyakala pul bhoomi-pujan,
//    Dilheri gaushala lokarpan, Naktua Atal Gram Seva Sadan bhoomi-pujan, Yashoda Garden me Rs. 346.75 lakh ki 6 sadkon ka lokarpan.
//    REJECT: pre-event schedule — kisi bhi kaam ka post-event report nahi mila.
// 7. khabar24livetv.com (1 Aug 2026) — 1-2 Aug daura schedule (swasthya/vikas saugaat).
//    REJECT: pre-event schedule — post-event report nahi mila.
// 8. aimamedia.org — 14 April ko One Stop Centre (jila aspatal) lokarpan ka daura-karyakram.
//    REJECT: pre-event schedule — actual lokarpan ki khabar nahi mili.
// 9. tarunmitra.in (~Mar 2026) — Devakachar nal-jal yojana lokarpan + Kapuri me Kheda nadi pul (Rs. 127.04 lakh) bhoomi-pujan ka schedule.
//    REJECT: pre-event schedule — post-event report nahi mila.
// 10. atulyabharatchetna.org.in (Oct 2026) — Narsinghpur nagarpalika seema vistar (13 gram panchayatein) — "mantri ki pahal".
//     REJECT: sirf prastav (proposed) — antim nirnay prakriya poori nahi hui.
// 11. shuru.co.in — jila aspatal me 2 dialysis machines ka shubharambh.
//     REJECT: machines Rajya Sabha sansad Vivek Tankha ki SANSAD-nidhi se; Patel ne sirf shubharambh kiya — unka kaam/nidhi nahi.
// 12. IANS via lokmattimes/prokerala (4-5 Jun 2026) — Singri nadi punaruddhhar, Jal Ganga Samvardhan Abhiyan par mantri-bayan.
//     REJECT: mantri-niyam — rajya-stariya abhiyan par bayan, Narsingpur AC ka thos dastavezi kaam nahi.
// 13. newzfatafat.com (~Dec 2024) — PMGSY green-technology workshop, Bhopal.
//     REJECT: rajya-stariya vibhagiya karyakram — kshetra-kaam nahi.
// 14. freepressjournal.in — shmashan-ghat approach-road/suraksha par vibhagiya circular.
//     REJECT: rajya-stariya vibhagiya ghoshna — Narsingpur AC ka thos kaam nahi.
// 15. etvbharat.com (1 Nov 2025) — nasha, Bagaspur sony-khadan, Gadarwara sadak par interview-bayan.
//     REJECT: mantri-bhashan/bayan — koi thos kaam nahi.
// 16. bansalnews.com — Khandwa me "naali-road ke paise mangne mat aana" bayan.
//     REJECT: bayan — kaam nahi.
// 17. YouTube-only videos (atal sushasan bhavan Khilchipur/Jirapur, Waraseoni j.p. bhavan aadi).
//     REJECT: YouTube-only source-type; upar ke dono sthan waise bhi Narsingpur AC se bahar hain.
// 18. Election profiles (ABP/FE/Statesman, Oct-Dec 2023) — jeet, background.
//     REJECT: background info only — koi kaam ka zikr nahi.
// 19. Accident news (Nov 2023, Amarwara) — pre-term + koi kaam nahi.
//     REJECT: pre-Dec 2023.
// 20. emsindia.com (31 Oct 2025 / 26 Dec 2025) — Sardar Patel jayanti, Veer Bal Diwas karyakram.
//     REJECT: samaroh/maujoodgi — koi kaam nahi.
// SARKARI CHECK: mpinfo.org (DPR) par inke naam se Narsingpur-AC-specific lokarpan/bhoomi-pujan ki koi alag press-vigyapti
// trace nahi hui jo upar shamil na ho; isliye koi 'sarkari' badge entry nahi bani. Vidhayak-nidhi ki itemized
// sanction-soochi bhi saarvajanik roop me nahi mili — vidhayak-nidhi ghoshna-type khabrein bina sanction saboot ke nahi li gayin.

// Vishwanath Singh (Mulam Bhaiya) — BJP, Tendukheda AC-120, Narsinghpur jila (MP)
// Karyakaal: Dec 2023 se (2023 me Sanjay Sharma ko 12,347 maton se harakar jeete)
// researched 2026-10-14. Profile KHAALI rakhi gayi — 12+ targeted searches (Hindi +
// English) ke baad Tendukheda kshetra me unki concrete bhoomika wali koi qualifying
// entry (swikriti/bhoomi-pujan/lokarpan) kisi valid source par nahi mili.
mpWorks['vishwanath-singh-mulam-bhaiya'] = [];
// REJECT-LOG vishwanath-singh-mulam-bhaiya (2026-10-14):
// 1. khabar24livetv.com/category/nation/tendukheda-vidhan-sabha-kothiya-narmada-ghat-sadak (24 Dec 2025) — gram Kothiya se Narmada ghat tak ~Rs 371.28 lakh ki CC sadak ka bhoomi-pujan; article me "क्षेत्रीय सांसद दर्शन सिंह क्षेत्रीय विधायक श्री विश्वनाथ सिंह पटेल ने ... भूमि पूजन किया" — MP + MLA dono ne milkar kiya; fund source/scheme/sanikriti ka koi zikr nahi. Kiska kaam, kiski nidhi — attribution adhoora. KAMZOR ATTRIBUTION → reject. (Note: agar fund source vidhayak-nidhi nikle to dobara vichar yogya.)
// 2. khabar24livetv.com/category/nation/liga-bhaurijhar-se-narmadaji-tak-cc-road-poojan (24 Dec 2025) — Liga se Narmada ghat tak Rs 97.91 lakh CC sadak ka bhoomi-pujan; sirf 2-line ki khabar, MP pehle + MLA uske baad attendees list me; fund source nahi. KAMZOR ATTRIBUTION → reject.
// 3. khabar24livetv.com/category/nation/ek-crore-se-adhik-vikas-karyon-ki-saugat (19 Jul 2026) — Kaudiya/Lilwani/Sadoomar me 1 crore+ ke bhoomi-pujan/lokarpan; article KHUD kehta hai "गाडरवारा विधानसभा क्षेत्र के ग्राम" — KSHETRA-BAHAR (Gadarwara AC); Tendukheda MLA sirf MP ke saath mukhya atithi → reject.
// 4. khabar24livetv.com/category/nation/gram-lilwani-vikas-saugat-up-swasthya-kendra-cc-sadak (18 Jul 2026) — Lilwani me up-swasthya kendra + CC sadkon ka lokarpan; sthan "ग्राम पंचायत लिलवानी, जनपद पंचायत चावरपाठा" — KSHETRA-BAHAR (Chawarpatha = Gadarwara AC); MLA Tendukheda sirf MP ke saath mukhya atithi → reject.
// 5. khabar24livetv.com/category/nation/tendukheda-kshetra-vikas-karyon-saugat (17 Jul 2026) — upar wale karyakramon ki ADVANCE GHOSHNA ("karenge bhoomi-pujan"); bhavishya ki khabar + MP-led → reject.
// 6. public.app video sp_c5wm6rv53d9ih (13 Nov 2025) — Vohani me vidhayak-nidhi se Rs 10 lakh CC sadak ka bhoomi-pujan — public.app-ONLY source → reject.
// 7. public.app video sp_kdu9zy9ov32yl (13 Nov 2025) — gram panchayat Chirachira ke gram Sujwara me Rs 10 lakh CC sadak bhoomi-pujan (vidhayak-nidhi) + Rs 6.67 lakh tin-shed/chabutara lokarpan — public.app-ONLY source → reject.
// 8. public.app video sp_6gepjzaauc4x0 (Nov 2025) — Karhaiya aur Barha me Rs 15-15 lakh ke samudayik bhavanon ka bhoomi-pujan — public.app-ONLY source → reject.
// 9. public.app video sp_109x4wwmmy16r — gram Nainwara me Rs 15 lakh samudayik bhavan ka bhoomi-pujan — public.app-ONLY source → reject.
// 10. public.app video sp_psvz6sg6pc2el — Tendukheda nagar palika ward 9 me chaupati par Rs 12.59 lakh tin-shed — public.app-ONLY source (aur "Tendukheda, Damoh" tag bhi) → reject.
// 11. public.app video sp_weo37yp9u2mc1 — shaskiya mahavidyalaya Sihora ka auchak nirikshan — SIRF NIRIKSHAN → reject.
// 12. public.app video sp_68krcvsmccd2y — Harai shaskiya school me muft cycle vitran karyakram me shamil — SIRF KARYAKRAM me maujoodgi → reject.
// 13. public.app video sp_h8c8nzgktr8n4 (Kareli News) — gram Reechha me pulse polio abhiyan me shamil — SIRF KARYAKRAM me maujoodgi → reject.
// 14. public.app video sp_9pba8fckiw813 (Kareli News, 13 Nov 2025) — janjatiya gaurav yatra rath ko hari jhandi — KARYAKRAM, vikas-karya nahi → reject.
// 15. public.app video sp_ordj2gyicflzv (Kareli News) — Khulri me seva-sankalp abhiyan chitrakala pratiyogita me shamil — KARYAKRAM → reject.
// 16. bhaskar.com/local/mp/narsinghpur/news/bjp-mla-launched-cleanliness-drive-on-gandhi-jayanti-133737265.html (2 Oct 2024) — Gandhi Jayanti par swachhta abhiyan — KARYAKRAM, vikas-karya nahi → reject.
// 17. jantaexpresslive.com/city-pride-day-... (Dec 2025) — Tendukheda Nagar Gaurav Diwas me mukhya atithi — KARYAKRAM me maujoodgi, vikas-karya nahi → reject.
// 18. khabar24livetv.com/category/nation/ek-vriksh-shahid-aashish-sharma-nam-vriksharopan (9 Sep 2026) — shaheed Ashish Sharma ki smriti me vriksharopan — KARYAKRAM → reject.
// 19. khabar24livetv.com/category/religion/gadarwara-thairi-ghat-shri-sitaram-mahayagya-2026 (12 Oct 2026) — Mahayagya ke bhoomi-pujan me upasthiti — DHARMIK KARYAKRAM → reject.
// 20. khabar24livetv.com/category/education/tendukheda-vidhayak-vishwanath-singh-patel-praveshotsav (1 Apr 2026) — Bhaurjhir shaskiya school me "School Chale Hum" praveshotsav me shamil — KARYAKRAM me maujoodgi → reject.
// 21. livevns.news / vocaltv.in (11 Apr 2025, hindusthan samachar) — mantri Prahlad Singh Patel ke Reechhai karyakram me MLA sirf upasthit ("इस अवसर पर विधायक विश्वनाथ सिंह पटेल ... मौजूद थे"); karyakram mantri ka tha → sirf maujoodgi → reject.
// 22. thehitavada.com/Encyc/2026/1/1/minister-patel-performs-bhoomi-pujan-of-atal-good-governance-building.html (Jan 2026) — mantri ke Atal Sushasan Bhavan bhoomi-pujan me MLA ne sirf apne vichar vyakt kiye — MANTri ke karyakram me maujoodgi → reject.
// 23. aditinews.com/madhya-pradesh/meeting-concluded-regarding-preliminary-preparations-for-barman-fair-2026 — Barman mela-2026 ki taiyari baithak (collector adhyaksh, MLA "vishesh maujoodgi"; shauchalay marammat ka SUJHAV diya) — sirf baithak/sujhav, koi concrete kaam nahi → reject.
// 24. peoplesupdate.com (monsoon session 2026 report) — Tendukheda MLA ne sadan me Sihora ko janpad panchayat banane ki MAANG uthai — sirf maang → reject.
// 25. youtube.com videos (Barman mela charcha; sadAN me vaktavya; Tendukheda Nagar Gaurav Diwas; Sant Ravidas mandir-park bhoomi-pujan short; aalha gayan) — YouTube-ONLY source → reject.
// 26. election-result pages (NDTV/Business Standard/Times of India/Oneindia/ABP/Zee/IndiaTV) — Dec 2023 ke baad ke karyakaal ke vikas-kaam nahi → reject.
// NOTE (naam-bhram se bachav): MP me DO Tendukheda hain — Narsinghpur ka AC-120 (in profile) aur Damoh jile ka kasba (Jabera AC). aanchaalikkhabre/jabalpurdarpan ke "nagar parishad Tendukheda me vidhayak Dharmendra Singh Lodhi" wale hits DAMOH ke Tendukheda ke hain — galat kshetra → reject. ncrsamacharlive ka Namo Upvan article bhi Damoh-sansad wala → reject.
// Negative entry: affidavit me 0 criminal cases (myneta); searches me koi credible FIR/case/janch ki khabar nahi mili — isliye koi negative entry nahi jodi.

// ---- Narsinghpur district batch — uday-pratap-singh (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
// Pehchan-note: MP ke Shiksha-Parivahan mantri (Rao) Uday Pratap Singh hi Gadarwara AC-121 ke MLA hain
// (NDTV/OneIndia/Wikipedia — portfolio: Transport and School Education, constituency Gadarwara).
// Mantri-niyam lagaya gaya: rajya-stariya vibhagiya faisle (NCERT/RTE/Sandipani nirnay) excluded;
// sansad-kaal (2009-2023, Hoshangabad) ke kaam excluded. Qualifying kshetra-kaam koi nahi mila —
// profile seedha kaam-ke-hisab se lagbhag khaali; sirf ek negative entry (adalati karyavahi kharij) mili.
mpWorks['uday-pratap-singh'] = [
  {
    title: 'Tiranga Yatra 2024 me rashtriya jhande ke apman ke aarop par MP-MLA Court ne shikayat kharij ki (Gadarwara)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Free Press Journal, 17 Sep 2026',
    sourceUrl: 'https://www.freepressjournal.in/bhopal/minister-rao-uday-pratap-singh-national-flag-case-no-sufficient-evidence-mp-mla-court-dismisses-complaint-over-insulting-tricolour-during-tiranga-yatra-in-2024',
    date: '2026-09-17',
    note: 'Negative entry: 11 Aug 2024 ko Gadarwara me Tiranga Yatra ke dauran khule jeep me sawar mantri ki gaadi ke bonnet par laga tiranga unke pairon ko chhu raha tha — isi aarop par Gotegaon (Narsinghpur) nivasi Kaushal Silawat ne Prevention of Insults to National Honour Act, 1971 ke tahat karyavahi ki maang ki; shikayatkarta ke anusar Gadarwara police ne FIR darj nahi ki, isliye March 2026 me MP-MLA Court ne mantri ko notice diya. 16 Sep 2026 ko Judicial Magistrate DP Sutrakar ne shikayat kharij kar di: sakshya aparyapt — tasveer me gaadi ka number saaf nahi, aur koi saboot nahi ki jhanda mantri ke nirdesh par lagaya gaya tha. Mantri ka jawab reporting me uplabdh nahi. Koi dosh-siddhi nahi; karyavahi kharij-star par poorn.',
    period: '2023-2028',
  },
];

/*
REJECT-LOG (uday-pratap-singh — har lead jo kholkar check hui, pass nahi hui):
1. Indian Masterminds + Indian Economic Observer (9 Jun 2025) — CM Mohan Yadav dwara Gadarwara me 135 karyon (Rs 80.46 crore: 67 lokarpan + 68 bhoomi-pujan) ka karyakram; Uday Pratap Singh ne CM ka aabhar jataya aur Gadarwara talab ke Rs 2 crore saundaryikaran ko CM ka uphaar bataya. Unki koi dastavezi bhoomika nahi — sirf maujoodgi + CM ka shrey. Reject (weak attribution/sirf maujoodgi).
2. looknewsindia (15 Nov 2024) — Dangha-Chandankheda (Gadarwara kshetra) me Birsa Munda pratima ka bhoomi-pujan; Dangaha me vivah bhavan ke liye Rs 30 lakh 'daan' ki ghoshna + Rs 2.5 lakh ka chabutara swikrit. Site khud kholi to 'Account Suspended' mili; alternate source nahi mila — snippet se entry banana mana hai. Reject (unverifiable).
3. Free Press Journal, Bhopal (2026) — CM dwara Rs 155 crore sewage bhoomi-pujan + Katara Barrai Sandipani school udghatan me mantri sirf upasthit. Bhopal ka karyakram — kshetra-bahar + sirf maujoodgi. Reject.
4. Bhaskar English (Mar 2025) NCERT anivarya ghoshna + ET-Education (Oct 2026) RTE Rs 502 crore/Narsinghpur Sandipani udghatan + obnews (drinking-water galat jankari) — sab rajya-stariya vibhagiya nirnay/bayan. Reject (mantri-niyam: sirf Gadarwara seat ke thos kaam).
5. YouTube — Balaghat BK 09 railway overbridge ka prabhari-mantri ke roop me udghatan: kshetra-bahar (Balaghat) + YouTube-only source. Reject.
6. YouTube 'Bimb ek pratibimb anek' documentary — UP ke kavi Uday Pratap Singh (janm 1932, Mainpuri) — galat vyakti. Reject.
7. YouTube 'Gadarwara vikas karyon ke liye karodon ki rashi', Maharana Pratap Ward gyapan, kisan shikayat, swatantrata divas bhashan — koi thos lokarpan/swikriti nahi + YouTube-only. Reject.
8. Sansad TV (Mar 2022) — sansad-kaal ka karyakram. Reject (pre-term).
9. obnews/drinking-water aur '1000 schools closed' stories — mantri ke rajya-stariya bayaan, koi Gadarwara-specific kaam nahi. Reject.
10. DNA/Zee (2013) BJP joining stories — pre-term + kaam nahi. Reject.
*/

// ---- Neemuch district batch (researched 2026-10-14) ----
// Neemuch district — Aniruddha (Madhav) Maroo, BJP, Manasa AC-228 (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
mpWorks['aniruddha-madhav-maroo'] = [
  {
    title: 'Padada me 9 PWD sadkon (kul Rs 13.22 crore) ka bhoomi-pujan, jisme Padada-Gangabawdi 2.70 km (Rs 3.50 crore) sadak shamil',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Malwa Halchal, 29 Feb 2024',
    sourceUrl: 'https://malwahalchal.com/local-news/5528/',
    date: '2024-02-29',
    note: 'PM Modi ke Viksit Bharat Viksit MP VC karyakram ke dauraan Padada panchayat me vidhayak ne 9 PWD sadkon ka bhoomi-pujan kiya — Palda-Chhota Palda 1.24 km (Rs 1.15 cr), Devran bypass 1 km (Rs 1.01 cr), Bakya Kheda pahunch marg 1 km (Rs 1.01 cr), Pratappura pahunch marg 1 km (Rs 1.02 cr), Bardia-Bhopali 1.60 km (Rs 1.15 cr), Mokdi chauraha-Nagpura 1.50 km (Rs 1.35 cr), Basantpura-Barodiya 2.50 km (Rs 1.98 cr), Manasa-Kanjarada road se Deken (Kanjarada bypass) 1.02 km (Rs 1.05 cr), aur Padada-Gangabawdi 2.70 km (Rs 3.50 cr); kul 13.22 cr. Gangabawdi sadak ka virtual bhoomi-pujan PM Modi ne kiya; article ke mutabik vidhayak ki anushansa par vidhansabha budget me is sadak ki swikriti mili thi — aazadi ke 70 saal me Gangabawdi ki pehli pakki sadak hogi. Status: bhoomi-pujan — nirman purnata ki alag khabar nahi mili. Disclosure: chhota local portal (Malwa Halchal); sarkari PWD sadken, vidhayak-nidhi nahi.',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak-nidhi ke Rs 15.12 crore aur sansad-nidhi ke Rs 4.50 crore ke vikas karyon ka lokarpan aur bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Malwa Halchal, 29 Feb 2024',
    sourceUrl: 'https://malwahalchal.com/local-news/5528/',
    date: '2024-02-29',
    note: 'Usi Padada karyakram me vidhayak ne vidhayak-nidhi se bane/ban rahe karyon (Rs 15.12 cr) aur sansad-nidhi ke karyon (Rs 4.50 cr) ka lokarpan-bhoomi-pujan khud kiya. Fund-spashtata: vidhayak-nidhi aur sansad-nidhi alag-alag rakam me batayi gayi — sansad-nidhi ke karya sansad ki nidhi se hain, lokarpan MLA ne kiya. Kaamon ki itemized soochi article me nahi hai. Status: lokarpan/bhoomi-pujan sampann. Disclosure: chhota local portal.',
    period: '2023-2028',
  },
  {
    title: 'Manasa me Rs 12.58 crore ki lagat se banne wale Sanyukt Anuvibhagiya Adhikari (SDO) karyalaya bhavan ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Voice of MP, 26 Jun 2025',
    sourceUrl: 'https://voiceofmp.com/user/description/Description_control/news_description/319472',
    date: '2025-06-26',
    note: 'Vidhayak ne Manasa me sanyukt SDO karyalaya ke nirman ka bhoomi-pujan kiya; Rs 12.58 cr ki lagat ka sarkari prashasnik bhavan jisse kshetra me prashasnik sewaon ki pahunch aur gati badhne ki ummeed jatayi gayi. Karyakram me BJP jiladhyaksh, SDM Manasa aur prashasnik adhikari upasthit the. Status: bhoomi-pujan — nirman pragati ki alag khabar nahi mili. Disclosure: chhota local portal (Voice of MP); yojna/vibhag ka naam article me nahi.',
    period: '2023-2028',
  },
  {
    title: 'Gram Matarundi (panchayat Padada) me Rs 66.36 lakh ke swikrit vikas karyon ka bhoomi-pujan aur lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Voice of MP, 25 Jul 2025',
    sourceUrl: 'https://voiceofmp.com/user/description/Description_control/news_description/322534',
    date: '2025-07-25',
    note: 'Vidhayak ne Matarundi me Rs 66.36 lakh ke swikrit vikas karyon ka bhoomi-pujan aur lokarpan kiya — kuch karya poorn (lokarpan) aur kuch shuru (bhoomi-pujan). Article me sadak, bhavan aur anya moolbhoot suvidhaon ka zikr hai lekin itemized soochi nahi di gayi; fund ka srot (vidhayak-nidhi ya sarkari yojna) article me nahi bataya gaya. Status: kuch karya poorn, kuch nirmanadheen. Disclosure: chhota local portal.',
    period: '2023-2028',
  },
  {
    title: 'Gram Bani se Barkheda tak 2.90 km sadak (Rs 376.91 lakh) ka bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Voice of MP, 12 Mar 2026',
    sourceUrl: 'https://voiceofmp.com/user/description/Description_control/news_description/341854',
    date: '2026-03-12',
    note: 'Vidhayak ne Bani-Barkheda 2.90 km sadak ka bhoomi-pujan kiya; lagat Rs 376.91 lakh batayi gayi aur isse mandi-sampartk aur aapatkaleen swasthya pahunch me sudhar ki ummeed jatayi gayi. Yojna/vibhag ka naam article me nahi — sarkari sadak pariyojna, vidhayak-nidhi ka dawa nahi. Status: bhoomi-pujan — nirman purnata ki alag khabar nahi mili. Disclosure: chhota local portal; tithi article me "guruvaar" likhi thi (12 Mar 2026 guruvaar se mel).',
    period: '2023-2028',
  },
  {
    title: 'Manasa me rashtriya star ka aadhunik swimming pool (lagbhag poorn) — vidhayak ki pahal par bani khel pariyojna',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Voice of MP, Mar 2026',
    sourceUrl: 'https://voiceofmp.com/user/description/Description_control/news_description/343263',
    date: '2026-03',
    note: 'MP Swimming Sangh ki baithak me ullekh ke sath report hua ki Manasa ka lagbhag 25x50 meter ka aadhunik swimming pool lagbhag bankar taiyaar hai aur rashtriya star ki tairaki pratiyogitaon ke layak bataya gaya; dono reports (Mar 2026 aur Jun 2026) me ise vidhayak ki pahal/prayason se bani pariyojna bataya gaya hai. Nirman lagat aur fund ka srot articles me nahi bataya gaya. Status: lagbhag poorn, vidhivat lokarpan pending (report ke mutabik). Disclosure: chhota local portal.',
    period: '2023-2028',
  },
  {
    title: 'Samriddh Didi abhiyan ke tahat Manasa vikas-khand me CMTC prashikshan kendra ka shubharambh; mahila swayam-sahayta samoohon ko Rs 12 lakh ke rin swikriti patra',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Voice of MP, Jan 2026',
    sourceUrl: 'https://voiceofmp.com/user/description/Description_control/news_description/337802',
    date: '2026-01',
    note: 'MP Deendayal Antyodaya Yojna-Rajya Gramin Aajeevika Mission ke tahat 25 Jan 2026 ko kendriya mantri ne 36 CMTC kendron ka online shubharambh kiya tha; isi kram me vidhayak ne Manasa vikas-khand ke kendra ka sthaniya shubharambh kiya aur gramin mahila swayam-sahayta samoohon ko Rs 12 lakh ke rin swikriti patra vitrit kiye. Yeh kendra/rajya mission ki pariyojna hai — vidhayak ki bhoomika block-stariya udghatan aur rin-patra vitran tak seemit. Status: shubharambh sampann. Disclosure: chhota local portal.',
    period: '2023-2028',
  },
];
// REJECT-LOG aniruddha-madhav-maroo: Gandhi Sagar (Chachor-Baloda) 5km pul swikriti — YouTube-only source, established media me pushti nahi; Kailash Vijayvargiya dwara Manasa me 36 karyon ka lokarpan/bhoomi-pujan (voiceofmp 326991) — mantri karyakram, MLA sirf upasthit/vakta; Neemuch-Rampura-Jhalawar 4-lane cabinet swikriti (voiceofmp 358326) — rajya cabinet pariyojna, MLA sirf press-varta me tarif; BJP jila karyalaya bhoomi-pujan Neemuch (Free Press Journal) — MLA sirf upasthit; karyakaal report-card (voiceofmp 353700) — sirf dawe, koi concrete pariyojna nahi; Moya-Bhadwa sadak + samudayik bhavan (hindikhabarwaala, Nov 2022) — Dec 2023 se pehle; Naya Malaheda sadak + up-swasthya kendra (hindikhabarwaala, Dec 2022) — Dec 2023 se pehle; 24 sadkon par re-graveling (pradeshhalchal, 17 Apr 2022) — Dec 2023 se pehle; malwanewsexpress 5528 — malwahalchal wali Padada khabar ka mirror (duplicate). Negative entries: koi nahi — koi vishvasniya report me aarop + FIR/case/janch nahi mili.
mpWorks['dilip-singh-parihar'] = [
  {
    title: 'Gram Palasoda me prathamik swasthya kendra ke naveen bhavan nirman ke liye Rs 1.59 crore ki prashasnik swikriti mili',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Dabang Malwa, 7 Jan 2025',
    sourceUrl: 'https://dabangmalwa.in/?p=2025',
    date: '2025-01-07',
    note: 'Palasoda primary health centre ke naye bhavan ke liye Rs 1.59 crore ki prashasnik swikriti shasan se mili; stage swikriti hai, kaam shuru ya poora hone ki khabar nahi. Fund sarkari hai (lok swasthya evam chikitsa shiksha vibhag) — vidhayak nidhi nahi. Vidhayak Dilip Singh Parihar ke prayason se swikriti dilane ki bhoomika ka dawa hai, aur unhone CM aur swasthya mantri ka aabhaar vyakt kiya. Disclosure: chhota local portal (Dabang Malwa) ki report, koi sarkari GO copy uplabdh nahi.',
    period: '2023-2028',
  },
  {
    title: 'Neemuch vidhansabha ki 31 gram panchayaton me Rs 15 lakh prati panchayat dome nirman ki prashasnik swikriti, kul Rs 6.45 crore se adhik ke kaam',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 29 Feb 2024',
    sourceUrl: 'https://sanskardarshan.com/2024/02/29/15-lakh-each-in-31-gram-panchayats-on-the-initiative-of-mla-parihar/',
    date: '2024-02-29',
    note: 'Stage swikriti hai: 31 gram panchayaton me Rs 15-15 lakh ke dome (community hall) ki swikriti, Aanvarimataji me yatri vishram shed ke liye Rs 40 lakh, Neemuch nagar me 5 dome ke liye Rs 1 crore, Jeeran nagar me dome ke liye Rs 40 lakh — prashasnik swikriti Panchayat evam Gramin Vikas Vibhag aur Nagariya Vikas evam Awas Vibhag se mili. Fund sarkari yojnao ka hai, vidhayak nidhi nahi. Credit-pardarshita: khabar me shrey vidhayak Dilip Singh Parihar aur sansad Sudhir Gupta dono ke prayason ko diya gaya hai, CM aur vitt mantri ka aabhaar vyakt hua. Disclosure: chhota local portal (Sanskardarshan e-paper) ki report; panchayat-war suchi di gayi hai.',
    period: '2023-2028',
  },
  {
    title: 'Gram Borkhedi Kalan me lagbhag Rs 20 lakh ke vikas karyon ka bhoomi-pujan aur dome ka lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 3 Sep 2025',
    sourceUrl: 'https://sanskardarshan.com/2025/09/03/samachar-madhya-pradesh-nimach-03-september-2/',
    date: '2025-09',
    note: 'Gram Borkhedi Kalan me lagbhag Rs 20 lakh ke vikas karyon ka bhoomi-pujan aur bane hue dome ka lokarpan vidhayak Dilip Singh Parihar ne kiya; stage: naye karyon ke liye bhoomi-pujan (shuruaat) aur dome ke liye lokarpan (poora). Fund ka srot khabar me spasht nahi, isliye vidhayak nidhi ka dawa nahi kiya gaya. Vidhayak karyakram me upasthit hokar karyon ka udghatan/shilanyas kar rahe the. Disclosure: chhota local portal (Sanskardarshan e-paper) ki report; karyon ki item-war suchi poori nahi di gayi.',
    period: '2023-2028',
  },
  {
    title: 'Gram Sarjana me Rs 3.35 lakh aur Rs 2.02 lakh ki CC sadak ka bhoomi-pujan aur Rs 14.50 lakh ke sarvajanik dome ka lokarpan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 3 Sep 2025',
    sourceUrl: 'https://sanskardarshan.com/2025/09/03/samachar-madhya-pradesh-nimach-03-september-2/',
    date: '2025-09',
    note: 'Gram Sarjana me Ghanshyam Patidar ke makan se Radheshyam Kharol ke makan tak Rs 3.35 lakh ki CC road aur Neemuch jane wale raste ki puliya par Rs 2.02 lakh ki CC road ka bhoomi-pujan (stage: shuruaat), aur Rs 14.50 lakh ki lagat se nirmit sarvajanik dome ka lokarpan (stage: poora) vidhayak Dilip Singh Parihar ne kiya. Fund ka srot khabar me spasht nahi. Disclosure: chhota local portal (Sanskardarshan e-paper) ki report.',
    period: '2023-2028',
  },
  {
    title: 'Vananchal gram panchayat Ghasundi Jagir ke Barkati aur Bhopatpura me lagbhag Rs 23 lakh ke vikas karyon ka bhoomi-pujan aur lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 31 Aug 2025',
    sourceUrl: 'https://sanskardarshan.com/2025/08/30/samachar-madhya-pradesh-nimach-31-august-2/',
    date: '2025-08-30',
    note: 'Ghasundi Jagir panchayat ke gram Barkati aur Bhopatpura me lagbhag Rs 23 lakh ke vikas karyon ka bhoomi-pujan aur lokarpan vidhayak Dilip Singh Parihar ne kiya; stage: kuch karyon ka lokarpan (poora) aur kuch ka bhoomi-pujan (shuruaat), item-war vivaran khabar me nahi. Fund ka srot spasht nahi, vidhayak nidhi ka dawa nahi. Usi karyakram me vidhayak dwara Rs 6.50 lakh ki ghoshna bhi ki gayi thi, lekin bina swikriti praman ke use entry nahi banaya gaya.',
    period: '2023-2028',
  },
  {
    title: 'Gram Bamanbardi me Rs 1.28 crore ki swikrit sadak, dome aur peyjal pariyojnaon ka lokarpan aur bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Voice of MP, Nov 2025',
    sourceUrl: 'https://voiceofmp.com/user/description/Description_control/news_description/330640',
    date: '2025-11',
    note: 'Gram Bamanbardi me Rs 1.28 crore ki lagat se swikrit sadak, dome aur peyjal (sadak nirman, peyjal aapurti vistar, dome unnayan) pariyojnaon ka lokarpan evam bhoomi-pujan vidhayak Dilip Singh Parihar ne kiya; stage: swikrit karyon me kuch ka lokarpan (poora) aur kuch ka bhoomi-pujan, jis ke baad vibhagon ko nivida prakriya poori kar kaam shuru karne ke nirdesh diye gaye. Fund swikrit pariyojnao ka hai, vidhayak nidhi ka ullekh nahi. Disclosure: chhota local portal (Voice of MP) ki report; lekh me tithi ki line nahi thi, tasveer timestamp ke aadhar par Nov 2025.',
    period: '2023-2028',
  },
  {
    title: 'Gram panchayat Bamaniya me Rs 1.33 crore ke vikas karyon ka lokarpan aur dome ka bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Voice of MP, 9 Nov 2025',
    sourceUrl: 'https://voiceofmp.com/user/description/Description_control/news_description/330723',
    date: '2025-11-09',
    note: 'Gram panchayat Bamaniya me kul Rs 1.33 crore ke karyon me se 15ven/5ven vitt aayog tatha MNREGA nidhi se swikrit Rs 1.18 crore ke vikas karyon ka lokarpan (stage: poora) aur Rs 15 lakh ke dome nirman ka bhoomi-pujan (stage: shuruaat) vidhayak Dilip Singh Parihar ne kiya. Fund-pardarshita: vitt aayog aur MNREGA ki sarkari nidhi, vidhayak nidhi nahi. Vidhayak ki concrete bhoomika udghatan/shilanyas karyakram ki hai. Disclosure: chhota local portal (Voice of MP) ki report.',
    period: '2023-2028',
  },
];

// REJECT-LOG dilip-singh-parihar: thesootr Mehnonot Nagar sadak protest — bina adhikarik karyavahi ke nagrik virodh; thetimesofmp Ward 3-4 dharna — adhikarik karyavahi/FIR bina negative; neemuchtoday YouTube Neemuch-Jhalawar four-lane — YouTube-only source; FPJ CM stadium+airport ghoshna — sirf maang par CM ghoshna, swikriti nahi; FPJ Rs 190 cr pragati — vidhayak sirf nirikshan/monitoring; FPJ Bhadwamata Rs 5 cr — sirf maha-aarti maujoodgi; newz24india CM Rampura karyakram — sirf maujoodgi; mediahousepress green-energy bhashan — bhashan, kaam nahi; voiceofmp CM Neemuch daura 352685 — CM ke kaam, vidhayak bhoomika apusht; sanskardarshan CM Rise school nirikshan Sep 2024 — sirf nirikshan; sanskardarshan Feb 2023 vikas yatra — pre-Dec 2023; sanskardarshan Aug 2023 vidhayak nidhi 5 lakh — pre-Dec 2023; sangharshsamarpansamaachaar/neemuchtoday Rs 15 lakh dharamshala ghoshna + Rs 1 cr road aashwasan — vidhayak nidhi ghoshna-type bina swikriti; dabangmalwa Palasoda Rs 25 lakh community hall — swikriti ka GO/work-order praman nahi; ghasundi jagir Rs 6.5 lakh ghoshna — bina swikriti ghoshna; ET/PTI Jhalawar-Neemuch four-lane — CM ghoshna, vidhayak bhoomika apusht; kriti sanstha gyapan — sirf maang/gyapan.
mpWorks['omprakash-sakhlecha'] = [
  {
    title: 'Jawad evam Singoli krishi upaj mandi parisaron me aadhunik suvidhaon se yukt 2 Kisan Bhavano ke nirman ki prashasnik swikriti, kul Rs 2.5 crore (har mandi ke liye Rs 1.25 crore)',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 03 Sep 2025',
    sourceUrl: 'https://sanskardarshan.com/2025/09/03/samachar-madhya-pradesh-nimach-03-september-2/',
    date: '2024-09-06',
    note: 'Kisan Kalyan evam Krishi Vikas Vibhag ne letter kramank 1560 dinank 06.09.2024 ke madhyam se Jawad aur Singoli mandi parisaron me 2 Kisan Bhavano ke nirman ki swikriti di; stage swikriti hai (swikriti-patra ki tareekh, letter number aur rakam — har mandi ke liye Rs 1.25 crore — news me spasht). Fund-pardarshita: rashi ka pravdhan Mandi Board nidhi/Kisan Sadak Nidhi mad se hoga — sarkari board fund, vidhayak-nidhi nahi. Credit-pardarshita: report ke anusar ye swikriti MLA Omprakash Saklecha ki pahal aur prayason se mili. Status: swikriti ke baad nirman shuru nahi hua tha; nirdesh tha ki dono mandiyon me vistrit prakkalan taiyar kar mandi samiti ke prastav ke saath bheja jaye. Disclosure: Sanskardarshan ek chhota sthaniya portal hai; swikriti ke tareekh/rakam/letter-number news report par aadharit hain.',
    period: '2023-2028',
  },
  {
    title: 'Jawad krishi upaj mandi me Rs 1.25 crore lagat se Kisan Bhavan ka bhoomipujan, mandi parisar me dome ka lokarpan, health app aur Sewa Se Prasannata abhiyan charan-2 ka shubharambh',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Sanskardarshan, 10 Sep 2025',
    sourceUrl: 'https://sanskardarshan.com/2025/09/10/samachar-madhya-pradesh-nimach-10-september-2/',
    date: '2025-09-09',
    note: '9 Sep 2025 ko Krishi Upaj Mandi Jawad me MLA Omprakash Saklecha ke netritva me aayojit karyakram me Rs 1.25 crore lagat wale Jawad Kisan Bhavan ka bhoomipujan hua — ye 06.09.2024 ki prashasnik swikriti ka agla charan hai; stage shilanyas-bhoomi-pujan hai, nirman abhi shuru hona baki. Usi karyakram me mandi parisar me dome ka lokarpan, face-scanning se 14 prakar ke swasthya pareekshan wala health app, aur Sewa Se Prasannata abhiyan ke dwitiya charan ka shubharambh bhi hua. Fund-pardarshita: Kisan Bhavan ki rashi Mandi Board nidhi/Kisan Sadak Nidhi se — sarkari board fund, vidhayak-nidhi nahi; dome/health app ke fund ka byora news me nahi. Credit-pardarshita: karyakram MLA ke netritva me hua; mukhya atithi (virtual) poorv Rajya Sabha sansad Vinay Sahasrabuddhe, Dr. Vijay Bhatkar bhi upasthit the. Disclosure: Sanskardarshan ek chhota sthaniya portal hai.',
    period: '2023-2028',
  },
  {
    title: 'Jawad ke 30 shaskiya schoolon me Project Deep ke tahat AI shiksha ka shubharambh, kaksha 9-12 ke 1500 bachchon ko ICT lab me saal-bhar free training',
    category: 'School',
    badge: 'news',
    sourceLabel: 'ETV Bharat, 11 Sep 2025',
    sourceUrl: 'https://www.etvbharat.com/hi/!state/neemuch-district-jawad-first-state-city-students-study-ai-modern-ict-labs-ready-schools-under-project-deep-madhya-pradesh-news-mps25091102294',
    date: '2025-09-09',
    note: 'MLA Omprakash Saklecha ke prayason se 9 Sep 2025 ko Krishi Upaj Mandi Jawad me Project Deep ka shubharambh hua; stage shubharambh/ghoshna hai — training shuru hui hai, outcome abhi pending. Jawad kshetra ke 30 sarkari schoolon me ICT lab taiyaar ki gayi hain jahan kaksha 9vi se 12vi tak ke 1500 bachchon ko saal-bhar free training milegi (pehle 6 mahine basic computer, agle 6 mahine specialization; lagbhag 150 courses — AI, cyber security, digital freelancing aadi; school ke baad roz 2 ghante vishesh classes). Course design me Dr. Vijay Bhatkar ki Maharashtra Knowledge Corporation (MKCL) ka sahyog hai. Fund-pardarshita: MLA ke apne dawe ke anusar bachchon ki shiksha ka kharch ve swayam vahen karenge — ye na to vidhayak-nidhi hai na sarkari yojna, personal kharch ka dawa hai (Sanskardarshan, sthaniya portal). Credit-pardarshita: poori pahal MLA ke netritva me hui; ETV Bharat ne event ko cover kiya.',
    period: '2023-2028',
  },
  {
    title: 'Bangred gram me lagbhag Rs 65 lakh ki lagat se nirmit naveen up-swasthya kendra (Ayushman Arogya Mandir) bhavan ka lokarpan',
    category: 'Aspataal',
    badge: 'news',
    sourceLabel: 'Patrika, 21 Jun 2026',
    sourceUrl: 'https://www.patrika.com/neemuch-news/angry-villagers-protest-against-bjp-mla-video-over-unfulfilled-promises-20685440',
    date: '2026-06-21',
    note: 'Jawad AC ke Bangred gram me lagbhag Rs 65 lakh ki lagat se nirmit naveen up-swasthya kendra bhavan (Ayushman Arogya Mandir) ka lokarpan 21 Jun 2026 ko MLA Omprakash Saklecha ne kiya; stage poora/lokarpan hai. Fund-pardarshita: ye sarkari swasthya vibhag ka kaam hai (Ayushman Arogya Mandir yojna) — vidhayak-nidhi nahi. Credit-pardarshita: MLA ki concrete bhoomika mukhya atithi ke roop me lokarpan karna thi; bhavan ki swikriti ya fund MLA se nahi aaya. Disclosure: lokarpan karyakram me Kheda Bangred–Bangred sadak ki maang par grameen virodh hua — grameenon ka aarop hai ki sadak varshon se kharab hai aur chunavi wada poora nahi hua; MLA paksh ki koi adhikarik pratikriya report nahi hui aur koi FIR/jaanch nahi, isliye ye negative entry ke niyam me nahi aata. Free Press Journal ne isi event ko bhoomipujan likha tha, lekin Patrika ke anusar naya-nirmit bhavan ka lokarpan tha.',
    period: '2023-2028',
  },
];
// REJECT-LOG omprakash-sakhlecha: July 2023 ke Madawda (Rs 17 lakh), Dhamnia (Rs 13 lakh) bhoomipujan — pre-Dec 2023 mantri-kaal; July 2023 biotech park/udyog-kshetra (Rs 6.5 cr swikriti) — pre-Dec 2023 mantri-kaal; Amar Ujala Sep 2025 — PM janmdin par 14000 students ko Rs 50 lakh sewa-fund — one-time charity event, koi vikas-kaam nahi; Bhaskar Jul 2026 — CM Mohan Yadav ki Bhadva Mata mandir ke liye Rs 17 cr ghoshna — CM ki ghoshna, MLA sirf manch par; VocalTV Apr 2025 — CM Rise School Jawad lokarpan ki taiyari ka nirikshan — sirf nirikshan + CM karyakram me maujoodgi; Sanskardarshan Dec 2023 — Viksit Bharat Yatra me Kishanpura sadak-sudhar/samudayik bhavan ke nirdesh — sirf daura/nirdesh, koi stage nahi; Bangred sadak-virodh ka chunavi-vaade ka aarop — koi FIR/jaanch nahi, negative-entry niyam fail; YouTube videos (Politics Wala, MalwanchalMitra) — YouTube-only source; Divyabhaskar Bhalvav pul — Gujarat ke alag MLA (Janak Talaviya), galat vyakti.
// ---- Neemuch district batch REJECT-LOG (2026-10-14): per-MLA reject-logs upar unke blocks me hain ----

// ---- Niwari district batch (researched 2026-10-14) ----
// Niwari district — Anil Jain, BJP, Niwari AC-46 (researched 2026-10-14) — DO NOT export; appended to works_mp.ts
mpWorks['anil-jain'] = [
  {
    title: 'Niwari me lagbhag Rs 3 crore ki lagat se bane Swami Vivekananda Auditorium ka vidhayak Anil Jain ne kiya lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'NDTV MP-Chhattisgarh, Oct 2025',
    sourceUrl: 'https://mpcg.ndtv.in/madhya-pradesh-news/niwari-mla-anil-jain-spoke-this-at-inauguration-program-of-swami-vivekananda-auditorium-of-niwari-8089012/amp/1',
    date: '2025-10',
    note: 'NDTV MP-Chhattisgarh ki report ke anusaar Niwari me lagbhag Rs 3 crore ki lagat se nirmit Swami Vivekananda Auditorium ka lokarpan Niwari vidhayak Anil Jain ne kiya; isi karyakram me unhone jila parisiman ko lekar bayan bhi diya; report me fund ka srot (vidhayak nidhi ya vibhagiya budget) spasht nahi hai isliye fund-disclosure sambhav nahi; report par sahi prakashan tareekh uplabdh nahi hai, isliye mahina lagbhag October 2025 mana gaya hai; isi khabar me medical college kholne ki unhone keval ichchha jatayi thi, koi swikriti ya pariyojna ghoshit nahi hui.',
    period: '2023-2028',
  },
  {
    title: 'Prithvipur janpad ki Sunoniya Khas aur Sunoniya Paschimi gram panchayaton me CC sadak nirmaan karyon ka vidhayak Anil Jain ne kiya bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Today India News MP, 28 May 2026',
    sourceUrl: 'https://todayindianewsmp.live/2026/05/nivaadee-ko-milee-vikas-karyon-kee-saugat-vidhayk-anil-jain-ne-kiya-bhoomipoojn-aur-lokarpan/',
    date: '2026-05-28',
    note: 'Today India News MP (sthaniya portal, disclosure) ki report ke anusaar Niwari vidhayak Anil Jain ne janpad panchayat Prithvipur ki Sunoniya Khas aur Sunoniya Paschimi gram panchayaton me CC sadak nirmaan karyon ka vidhi-vidhan se bhoomi-pujan kiya; report me lagat aur fund ka srot nahi bataya gaya hai isliye rakam aur vidhayak-nidhi ya sarkari-yojana ka daava nahi kiya ja sakta; stage shilanyas-bhoomi pujan hai, poornata ki pushti nahi hai.',
    period: '2023-2028',
  },
  {
    title: 'Sunoniya Khas aur Sunoniya Paschimi me naveen anganwadi bhavan aur navnirmit panchayat bhavan ka vidhayak Anil Jain ne kiya lokarpan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Today India News MP, 28 May 2026',
    sourceUrl: 'https://todayindianewsmp.live/2026/05/nivaadee-ko-milee-vikas-karyon-kee-saugat-vidhayk-anil-jain-ne-kiya-bhoomipoojn-aur-lokarpan/',
    date: '2026-05-28',
    note: 'Usi karyakram ki report ke anusaar vidhayak Anil Jain ne Sunoniya Khas aur Sunoniya Paschimi me naveen anganwadi bhavan tatha navnirmit panchayat bhavan ka lokarpan kiya; lagat aur fund-srot ki jaankari report me nahi hai; stage lokarpan (poora) hai; sthaniya portal ki khabar hone ke kaaran swatantra pushti uplabdh nahi hai.',
    period: '2023-2028',
  },
  {
    title: 'Asati Khas gram panchayat me lagbhag Rs 40 lakh se adhik ki lagat wale CC road aur naali nirmaan karyon ka vidhayak Anil Jain ne kiya bhoomi-pujan',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Today India News MP, 29 May 2026',
    sourceUrl: 'https://todayindianewsmp.live/2026/05/nivaadee-ko-milee-vikas-kee-saugat-vidhayk-anil-jain-ne-asatee-khas-men-kiya-40-lakh-ke-karyon-ka-bhoomipoojn/',
    date: '2026-05-29',
    note: 'Today India News MP (sthaniya portal, disclosure) ki report ke anusaar 29 May 2026 ko janpad panchayat Niwari ki gram panchayat Asati Khas me Niwari vidhayak Anil Jain ne lagbhag Rs 40 lakh se adhik ki lagat se hone wale CC road aur naali nirmaan karyon ka bhoomi-pujan karke shubharambh kiya; fund ka srot report me spasht nahi hai, vidhayak nidhi ka daava nahi hai; stage shilanyas-bhoomi pujan hai.',
    period: '2023-2028',
  },
  {
    title: 'Teharka gram me lagbhag Rs 1.5 crore ki lagat se banne wale aadhunik stadium ka vidhayak Anil Jain ne Vishva Paryavaran Divas par kiya bhoomi-pujan',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'RNI News, 5 Jun 2026',
    sourceUrl: 'https://www.rninews.co.in/tehrka-in-niwari-received-the-gift-of-a-stadium-worth-one-and-a-half-crore-rupees-mla-anil-jain-performed-the-foundation-stone-ceremony/',
    date: '2026-06-05',
    note: 'RNI News (sthaniya portal, disclosure) ki report ke anusaar 5 June 2026 ko Niwari vidhayak Anil Jain ne Teharka gram me lagbhag Rs 1.5 crore ki lagat se banne wale aadhunik stadium ka bhoomi-pujan kiya; report ke anusaar yuvaon ki lambe samay se chali aa rahi maang ko manzoori mili hai, lekin manzoori aadesh ya GO ka ullekh nahi hai aur fund-srot spasht nahi hai isliye vidhayak nidhi ka daava nahi hai; stage bhoomi-pujan hai.',
    period: '2023-2028',
  },
  {
    title: 'Dainik Bhaskar ki ground investigation me vidhayak nidhi ke kayi karyon ke kagazon par poora par sthal par gayab hone ka aarop; jila prashasan ki jaanch samiti ne October 2025 me karya maujood hone ka daava kiya, Bhaskar ne punah jaanch me us daave ko kharij kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Bhaskar English (Dainik Bhaskar), Oct 2025',
    sourceUrl: 'https://www.bhaskarenglish.in/amp/local/mp/news/niwari-administrations-false-claim-to-hide-temple-theft-report-stated-mla-fund-works-were-present-on-site-ground-reality-revealed-nothing-actually-built-or-visible-136288876.html',
    date: '2025-10',
    note: 'NEGATIVE entry. Dainik Bhaskar ki Sunday Big Story investigation (26 Oct 2025) me aarop lagaya gaya ki Niwari me vidhayak nidhi se swikrit kayi karya — Taricharkalan ke Badi Mata mandir parisar me Rs 4 lakh ka hall (rashi 9 August 2023 ko jaari, vartamaan karyakaal se pehle), Teharka me 2019 me Rs 3.06 lakh ka yatri prateekshalaya aur Ramgarh Churara me 2018 me Rs 2 lakh ki boundary wall — sarkari kagazon me poorna dikhaye gaye jabki sthal par kuch bana hi nahi, saath hi swechchha nidhi ke durupyog ke aarop bhi lage; is par jila prashasan ne tehsildar Jagdish Randhawa aur sahayak yantri Ram Milan Patel ki do-sadasyiya jaanch samiti gathit ki jisne 28 October 2025 ki report me sabhi karya sthal par maujood hone ka daava kiya, jise Bhaskar ne dobara sthal-jaanch karke galat bataya; vidhayak Anil Jain ne likhit jawab me swechchha nidhi ka aavantan apna adhikaar bataya aur durupyog se inkaar kiya, lekin fund-diversion ya galat dastavejon ke aaropon ka jawab nahi diya; poorv sarpanch Geeta Ahirwar ne farji hastakshar ka aarop lagakar police me shikayat ki jisme koi karyavahi nahi hui; koi FIR ya adalati mamla darj hone ki soochna nahi hai — dhyaan rahe ki aaropit karyon ki rashi mukhyatah December 2023 se pehle ke karyakaal ki hai, jabki jaanch-vivaad vartamaan karyakaal (October 2025) ka hai; koi nishkarsh na nikala jaye.',
    period: '2023-2028',
  },
];

// ---- Niwari district batch REJECT-LOG (2026-10-14) ----
// PARENT QA NOTE (2026-10-14): worker ki 86-sadak (CM Majra-Tola Yojana ghoshna, Nishaanebaz) entry HATA di —
// rajya yojana ki ghoshna thi jisme MLA ki 'pahal' chhote portal ki reporting par aadharit thi; koi GO/sanction
// nahi; Tomar/Uikey precedents (maang par ailaan entry nahi banti).
// nitendra-singh-rathore (Prithvipur AC-45): profile KHAALI — koi pass-worthy entry nahi. Rejects: Zee News CM food-processing-unit ailaan (maang par ailaan); todayindianewsmp bayan/palatwar (kaam nahi, dubious source); YouTube-only Keshavgarh lokarpan (source reject + detail nahi); public.app CHC shivir nirikshan + Tiranga Yatra maujoodgi (source + sirf daura); livehindustan galat vyakti (Nagendra Rathore, Farrukhabad UP); narmadanchal CC road (Sitasharan Sharma ka ilaka, inka kshetra nahi); Zee News Shishupal-audio (aarop doosre par, Nitendra ka bayan sirf); Business Standard ADR criminal-cases stat (koi khabar/karyavahi nahi); YouTube bayan-video.
// anil-jain (Niwari AC-46): 6 entries PASS (86-road ghoshna QA me hati). Rejects: lalluram clean-chit story (bina FIR/case ke na negative, na kaam); indianmasterminds CM-visit (sirf maujoodgi); thehitavada Ram Raja Lok (CM ghoshnaen, bhoomika nahi; Orchha phase-2 kshetra-bahar); YouTube stadium videos (source reject); public.app Poha Khas shilanyas (source reject); Jal Arpan Divas (jagrukta karyakram, kaam nahi); Seva Jyoti Yatra (nirdesh bhar, swikriti nahi); medical college ichchha (bhavishya, reject); jila-8-years roundup (specific kaam nahi); myneta/oneindia/wiki/abplive profile pages (kaam nahi); YouTube samudayik-bhavan video (source reject); 26 Jul 2026 CM event 193cr/59 karya (CM-stariya, sirf maujoodgi).

// ---- Panna district batch (researched 2026-10-14) ----
mpWorks['prahlad-lodhi'] = [
  {
    title: 'Pawai ke Simaria me 132 kV power substation ka lokarpan vidhayak Prahlad Lodhi ne ribbon kaatkar kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'ITN National (indiantvnews.in), 26 Jun 2024',
    sourceUrl: 'https://indiantvnews.in/archives/49128',
    date: '2024-06-26',
    note: 'Simaria (Pawai tehsil, Pawai AC-58 ke andar) me 132 kV power substation ka shubharambh vidhayak Prahlad Lodhi ne ribbon kaatkar kiya. Report ke mutabik station se hi 33 kV supply chalu kar di gayi, jis se Simaria kshetra ki low-voltage samasya ka samadhan aur Hinota-Damoh feeders se nirbaadh supply ka dawa kiya gaya. Karyapalak abhiyanta Pawai (Mukesh Chaure) ka bayan bhi darj hai. Stage: lokarpan (poora kaam). Credit-pardarshita: portal ne substation ko vidhayak ke vishesh prayas se bana bataya hai, lekin khud report ye bhi likhti hai ki station Adani Group ne Ludhani gram ke najdeek sthapit kiya — vishesh-prayas wala dawa reportar ka hai, GO ya prashasnik swikriti-doc se satyapit nahi. Fund-srot Adani Group ka nivesh lagta hai, vidhayak-nidhi ya rajya-yojana hone ka saboot report me nahi. Disclosure: ye chhota local portal (ITN National, Pawai-based reporter) hai, established media nahi.',
    period: '2023-2028',
  },
];
// COORDINATOR QA NOTE (2026-10-14, Panna batch): lodhi ki Rs 125 crore 4-sadak 'swikriti' entry HATA di —
// swikriti CM/Lok Nirman Mantri ke star par mili thi; worker ne khud likha 'unke vyaktigat prayas ka
// swatantra satyapan nahi hai' — sirf maang + aabhaar. Penchi-Kumbhraj precedent: rajya-pariyojna ki
// swikriti MLA ki entry NAHI banti jab tak unka dastavezi concrete kadam na ho.

mpWorks['brijendra-pratap-singh'] = [
  {
    title: 'Panna Janpad Panchayat parisar me Rs 525.67 lakh ke atyadhunik bahu-uddeshiya karyalaya bhavan ka bhoomi-pujan, Panna vidhayak Brijendra Pratap Singh mukhya atithi rahe',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Bhaskarhindi, 27 Mar 2026',
    sourceUrl: 'https://www.bhaskarhindi.com/city/panna/panna-news-a-state-of-the-art-janpad-panchayat-office-costing-over-five-crore-rupees-is-set-to-be-constructed-mla-brijendra-pratap-singh-performed-the-groundbreaking-ceremony-1271260',
    date: '2026-03-27',
    note: 'Panna shahar ke Janpad Panchayat parisar me lagbhag Rs 525.67 lakh ki lagat se banne wale naye karyalaya bhavan ka bhoomi-pujan 26 Mar 2026 ko sampann hua; vidhayak mukhya atithi the. Stage: shilanyas-bhoomi pujan; nirman shuru hona baki hai. Fund-srot sarkari yojana (departmental) hai, vidhayak-nidhi ka koi ullekh nahi; article me MLA ke swayam kisi rakam ke dawe ki reporting nahi hai, isliye badge news rakha hai. Source Bhaskarhindi ka sthaniya Panna page hai (established regional media). Status: nirmanadheen-apekshit.',
    period: '2023-2028',
  },
  {
    title: 'Ajaygarh kshetra me Kathgaon se Makri tak 3 km sadak (Rs 362.23 lakh, Lok Nirman Vibhag) ka bhoomi-pujan 14 Mar 2026 ko Panna vidhayak ne mukhya atithi ke roop me kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Bhaskarhindi, 16 Mar 2026',
    sourceUrl: 'https://www.bhaskarhindi.com/city/panna/panna-news-former-minister-and-mla-brijendra-pratap-singh-performed-the-groundbreaking-ceremony-for-the-kathgaon-makri-road-1265782',
    date: '2026-03-14',
    note: 'Lok Nirman Vibhag dwara swikrit 3 km sadak pariyojna ke liye shasan se Rs 362.23 lakh ki swikriti mili aur 14 Mar 2026 ko bhoomi-pujan hua. ECI Delimitation Order 2008 ke anusar Panna AC-60 me poora Ajaigarh tehsil shamil hai, isliye ye seat ke andar ka kaam hai. Stage: shilanyas; fund-srot rajya sarkar (PWD) hai. Badge news hai kyunki article me swikriti aur rakam ki pakki reporting hai, MLA ke swayam dawe ka ullekh nahi. Status: nirmanadheen.',
    period: '2023-2028',
  },
  {
    title: 'Panna shahar me Rs 125 lakh ki lagat se nirmit pul ka lokarpan 7 Oct 2025 ko Panna vidhayak ne phita katkar kiya',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Bhaskarhindi, 7 Oct 2025',
    sourceUrl: 'https://www.bhaskarhindi.com/city/panna/panna-news-inauguration-of-bridge-constructed-at-a-cost-of-rs-125-lakh-panna-mla-brijendra-pratap-singh-emphasized-on-development-works-1195559',
    date: '2025-10-07',
    note: 'Panna shahar (Kilkilia nadi/Pran Nath mandir kshetra) me bana Rs 125 lakh lagat ka pul poorna hokar lokarpit hua; Nagar Palika adhyaksh Meena Pandey bhi upasthit thin. Stage: poora hua kaam/lokarpan. Article me vidhayak ke do bayan bhi hain — Jugal Kishore Lok lane ki ghoshna aur Kilkilia saundaryikaran ke prayas — lekin dono ke liye koi GO/rakam/swikriti nahi hai, isliye unhe entry nahi banaya, sirf lokarpit pul ko liya. Fund-srot ka spasht ullekh nahi (nagarpalika kshetra ka kaam). Status: poorna.',
    period: '2023-2028',
  },
  {
    title: 'Panna Nagar Palika parisar ke renovation karyon aur mukhya dwar par lage sensor-gate ka lokarpan 6 Apr 2026 ko vidhayak ne kiya',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Bhaskarhindi, 6 Apr 2026',
    sourceUrl: 'https://www.bhaskarhindi.com/city/panna/panna-news-mla-brajendra-pratap-singh-inaugurated-the-newly-constructed-entrance-gate-and-premises-of-the-panna-municipality-1276347',
    date: '2026-04-06',
    note: 'Nagar Palika Parishad Panna ke karyalaya parisar me hue renovation karyon ka lokarpan vidhayak ne shila-pattika ka anaavaran karke aur mukhya dwar ke sensor-gate ka phita katkar kiya; karyakram ki adhyakshata napa adhyaksh Meena Pandey ne ki. Stage: poora hua kaam/lokarpan. Article me lagat/rakam ya fund-srot (vidhayak-nidhi vs nagarpalika) ka koi ullekh nahi hai, isliye fund-srot agyaat rakha hai. Status: poorna.',
    period: '2023-2028',
  },
  {
    title: 'Bandha Bariyarpur bandh ke neeche Ken nadi par Rs 36 crore ki lagat se pul-nirman ki 2025-26 ke anupurak budget me swikriti mili; nirman Lok Nirman Vibhag karega',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'Umh News India, 3 Dec 2025',
    sourceUrl: 'https://umhnewsindia.in/gift-of-development-work-due-to-efforts-of-panna-mla/',
    date: '2025-12-03',
    note: 'Ajaygarh tehsil ke gramvasiyon ko Khajuraho (Chhatarpur) jaane ke liye 60 km ghoomkar jana padta tha; pul banne par 13 km ka seedha sampark milega. Article me 2025-26 ke anupurak budget me swikriti, Rs 36 crore ki lagat aur PWD se nirman ki pakki reporting hai (tareekh 3 Dec 2025), isliye stage swikriti liya hai. Location Ajaigarh tehsil = ECI delimitation ke anusar Panna AC-60 ke andar. Credit-pardarshita: article ise vidhayak ke prayason ka parinaam batata hai lekin isme MLA ka swayam ka uddhrit dawa nahi hai, isliye badge news hai. Disclosure: Umh News India chhota sthaniya portal hai; yahi khabar cnewsbharat par bhi chhapi hai lekin dono hi chhote portal hain — swikriti ke liye GO/sanction-order ki swatantra pushti nahi mili. Fund-srot rajya sarkar (PWD). Status: swikrit, nirman baki.',
    period: '2023-2028',
  },
];

mpWorks['rajesh-kumar-verma'] = [
  {
    title: 'Vidhayak Dr. Rajesh Verma ne gram panchayat Harira mein Rs25 lakh ki lagat se bani CC road aur naali ka lokarpan kiya.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'BhaskarHindi, 30 Dec 2025',
    sourceUrl: 'https://www.bhaskarhindi.com/city/panna/panna-news-mla-rajesh-verma-inaugurated-a-25-lakh-rupee-concrete-road-in-harira-village-1232690',
    date: '2025-12-30',
    note: 'Stage: poora hua kaam — CC road + naali nirman poora, vidhayak ne lokarpan kiya (Dec 2023+ tenure). Rakam Rs25 lakh. Fund-srot article me specified nahi (vidhayak-nidhi/sarkari yojana ka ullekh nahi), isliye credit-pardarshita: vidhayak mukhya atithi ke roop me lokarpan me shamil, fund-srot ajnaat. Event date article publication (30 Dec 2025) ke aas-paas hai. Note: isi article me vidhayak ka moukhik dawa ("100 sadakein swikrit, 28 ka kaam March-April me shuru") bina GO/tareekh ke tha — ghoshna mana gaya, alag entry nahi banayi. Source BhaskarHindi ka Panna city edition hai (established media).',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak ne 21 Dec 2025 ko gram Makari Kuthar mein Rs40 lakh ke kaamon (puliya, CC sadak aur naali) ka lokarpan aur bhoomipujan kiya.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'BhaskarHindi, 22 Dec 2025',
    sourceUrl: 'https://www.bhaskarhindi.com/city/panna/panna-news-in-makari-kuthar-village-the-gunnor-mla-inaugurated-and-laid-the-foundation-stone-for-construction-projects-worth-40-lakh-rupees-1229333',
    date: '2025-12-21',
    note: 'Stage: lokarpan + bhoomipujan — kuchh kaam poore (lokarpan) aur kuchh shuru (bhoomipujan), kul lagat Rs40 lakh. Panchayat-stariya sadak/puliya/naali. Fund-srot article me specified nahi; credit-pardarshita: vidhayak ne karyakram kiya, scheme/fund ajnaat. Event date 21 Dec 2025 (Ravivar), article 22 Dec 2025 ko publish. Mukhya karyapal adhikari Janpad Panna aur anya prashasanik adhikari maujood — sarkari nirman ki pushti hoti hai. Source BhaskarHindi Panna edition (established media).',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak ne gram panchayat Kot Khamariya mein Rs20 lakh ki lagat ke CC road ka lokarpan kiya.',
    category: 'Sadak',
    badge: 'news',
    sourceLabel: 'cnewsbharat (local portal, reporter Rafi Siddiqui)',
    sourceUrl: 'https://cnewsbharat.com/hindi/news/panna-141784',
    date: '2025-11',
    note: 'Stage: poora hua kaam — Rs20 lakh ki CC road ka lokarpan, saath hi Rs11.20 lakh ke anganwadi bhavan ka bhoomipujan (alag entry dekhein). Fund-srot article me specified nahi; credit-pardarshita: vidhayak mukhya atithi, fund-srot ajnaat. IMPORTANT DATE DISCLOSURE: page par publication date maujood nahi thi; article kehta hai "Ravivar ko". Usi kahani ka coverage Nov 2025 me mila (public.app listing "Last Updated: 408 days ago", BhaskarHindi article slug me same title), isliye date ko "2025-11" anumanit maana gaya hai — pakki tareekh verify nahi. Source chhota local portal hai (cnewsbharat, reporter naam sahit) — disclosure ke saath include kiya gaya.',
    period: '2023-2028',
  },
  {
    title: 'Vidhayak ne gram panchayat Kot Khamariya mein Rs11.20 lakh ki lagat se banne wale anganwadi bhavan ka bhoomipujan kiya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'cnewsbharat (local portal, reporter Rafi Siddiqui)',
    sourceUrl: 'https://cnewsbharat.com/hindi/news/panna-141784',
    date: '2025-11',
    note: 'Stage: bhoomipujan — Rs11.20 lakh ke anganwadi bhavan nirman ka shubharambh; vidhayak ke anusaar bhavan se bachchon ke vikas aur sthaniya teeka-karan ki suvidha milegi. Fund-srot specified nahi. Date disclosure pichli entry jaisa: page par date nahi, "Ravivar" event, Nov 2025 coverage se anumanit "2025-11" — pakki tareekh verify nahi. Chhota local portal, reporter ke naam ke saath, disclosure sahit include. Anganwadi bhavan "School/Aspataal" categories me fit nahi hota, isliye category "Any" (bal-kalyan/samanya bhavan).',
    period: '2023-2028',
  },
  {
    title: '4 July ko vidhayak ne Saleha gram panchayat mein Rs37.49 lakh ke Atal Gram Sushasan Bhavan aur Rs12.50 lakh ke samudayik bhavan ka bhoomipujan kiya.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'Dainik Bhaskar, Aug 2025',
    sourceUrl: 'https://www.bhaskar.com/local/mp/panna/news/encroachment-removed-from-in-front-of-atal-sushasan-bhawan-under-construction-135781438.html',
    date: '2025-07-04',
    note: 'Stage: bhoomipujan + swikriti — established media (Dainik Bhaskar) me rakam aur tareekh ke saath report: Sushasan Bhavan ke liye Rs37.49 lakh aur samudayik bhavan ke liye Rs12.50 lakh ki rashi swikrit; 4 July ko vidhayak ne bhoomipujan kiya. Year disclosure: article Aug 2025 ka hai aur "4 July" ko past event batata hai, isliye 4 July 2025 mana gaya. Fund-srot scheme ke naam ke saath specified nahi, lekin rakam swikrit ki established-media report hai. Vidhayak ke karyakram ke roop me shreya unhi ko jata hai, lekin yojana sarkari hai — yeh credit-pardarshita note me saaf hai.',
    period: '2023-2028',
  },
  {
    title: 'Makar Sankranti (14 Jan 2026) ko vidhayak ne gram panchayat Sigaura (Pandvan–Sigaura) mein lagbhag Rs15 lakh ke samudayik bhavan ka bhoomipujan kiya; fund FY 2025-26 ke additional stamp duty head se.',
    category: 'Any',
    badge: 'news',
    sourceLabel: 'BhaskarHindi, 15 Jan 2026',
    sourceUrl: 'https://www.bhaskarhindi.com/city/panna/panna-news-on-the-occasion-of-makar-sankranti-singaura-received-a-gift-of-development-mla-dr-rajesh-verma-performed-the-groundbreaking-ceremony-for-a-community-hall-worth-15-lakh-rupees-1239629',
    date: '2026-01-14',
    note: 'Stage: bhoomipujan + swikriti — established media me rakam (~Rs15 lakh) aur budget-head ke saath: additional stamp duty mad ke tahat FY 2025-26 ke budget se bhawan banega. Gunnaor vidhansabha ke andar Sigaura panchayat me sthit. Fund-srot rajya yojana (stamp duty head) — vidhayak-nidhi/sansad-nidhi nahi. Vidhayak ne shilapatt ka anaavaran karke bhoomipujan kiya; sarkari fund ki swikriti ke saath kaam shuru hua. Event Makar Sankranti 14 Jan 2026, article 15 Jan 2026 ko publish.',
    period: '2023-2028',
  },
];

// ---- Panna district batch REJECT-LOG (2026-10-14) ----
// prahlad-lodhi (Pawai AC-58): 1 entry PASS (Simaria 132kV substation lokarpan). Rejects: YouTube-only 4.25cr road bhoomi-pujan; YouTube-only Maa Kalehi sanskritik bhavan + vishramgrah ghoshna; YouTube Rajdhanitak janpad karyalay bhavan; 2019 jail-saza case (pre-term, works-item nahi); SDM-shikayat patra (kaam nahi); Starsamachar CM Amanganj karyakram (maujoodgi); sharab-taskar peecha (law-and-order, works nahi); Bolero-durghatna aspatal visit (daura); Zee News zameen-hadpane aarop (shikayat matra, FIR/case nahi); birthday wish (irrelevant).
// rajesh-kumar-verma (Gunnaor SC AC-59): 6 entries PASS. Rejects: RNI News Amanganj coaching (kshetra-bahar); CM-se 6-sadak swikriti anurodh (sirf maang); Gunnaor micro-sinchai maang (sirf maang); Midhasan nadi punruddhar maang (sirf maang); Devendranagar bypass/NH-39 maang (sirf maang); Barsobha pul nirikshan (sirf daura); samiksha baithak + ADIP tricycle (yojana-vitaran); public.app 79.09cr sadak swikriti (source reject); public.app Katakha items (source reject + kshetra-bahar); YouTube items x2; CM 24 Jul 2026 Gunnaor karyakram (maujoodgi); BhaskarHindi Telegram share 403 (use nahi).
// brijendra-pratap-singh (Panna AC-60): 5 entries PASS. Rejects: 22 Mar 2026 doura-preview ghoshna (karenge khabar); CM 24 Jul 2026 184.83cr Panna karyakram (maujoodgi); Mukhyamantri Scooty vitaran (yojana, kaam nahi); CM Amanganj 106cr (maujoodgi + Gunnaor seat); Chhatrasal college aashwasan (sirf maang); Delhi Shivraj Chouhan bhet/PMGSY prastav (sirf maang); Salaiya sadak YouTube-only; Jila Vikas Salahkar baithak (nirikshan); Dharampur tehsil/Atal Sushasan Bhavan (rajya faisla, sirf udghatan-karta); Panna-Pahadikheda sadak 67.10cr (pre-term); Atal Nagar Vatika (sansad mukhya atithi); Buxwah daura 2021 (pre-term + doosri seat).

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

// Puducherry — neta-war kaam (works) ka placeholder.
// Mining baad me hogi: MLA kshetra-vikas nidhi (MLALADS) ke tahat vikas karyon ke record
// jama karke yahan jode jayenge. Abhi khaali export — all.ts me wiring live hai, koi page nahi tootega.
// Karyakaal: 16th Puducherry Vidhan Sabha, 2026-2031.
// Fund tathya: MLALADS — Rs 3 crore/seat/varsh (GO Ms.No.14/LAS/A1/2025, 13-08-2025; FY 2025-26 se Rs 2cr -> Rs 3cr;
// sabhi nirvachit (30) + nominated (3, jab niyukt hon) sadasyon par laagu).
// Whitelist (Puducherry): The Hindu, Indian Express (incl. newindianexpress.com), Hindustan Times,
// NDTV, India Today, Times of India, The Telegraph (India), PTI (established outlet par).
export const puducherryWorks: Record<string, any[]> = {};

// ============================================================================
// BATCH 1 (saare 30 MLA — karyakaal May 2026+, sabhi profiles imaandaari se khaali)
// ============================================================================

// PUDUCHERRY — Oupalam — A. Anbalagan (AIADMK, pro-tem Speaker)
// Mining date: 2026-10-19
//
// REJECT-LOG (sakht quality rules ke tahat reject):
// 1. Pro-tem Speaker appointment/shapath (May 15-20, 2026) — PTI/The Hindu Business Line,
//    Times of India, The Hindu — REJECT: pad-karye (Speaker ke roop me sadan sanchalan/oath)
//    works me ginta NAHI. Task me saaf mana hai.
// 2. Pro-tem Speaker ne Aug 2026 Budget session chair kiya; Oct 2026 me bypoll jeete MLA
//    Ashok Anand ko shapath dilayi (The Hindu, article71584082.ece, 5 din purani) — REJECT:
//    pad-karye, Oupalam seat se sambandh nahi.
// 3. Election coverage (jeet 4 May 2026, 9099 votes, margin 1026; candidate list/assets)
//    — The Hindu / Indian Express / TOI / NIE / ABP — REJECT: chunavi coverage kaam nahi.
// 4. MGR birth-anniversary procession/statue garlanding (The Hindu, Jan 17, 2026) — REJECT:
//    samaroh + pre-term (Jan 2026, karyakaal se pehle).
// 5. 2015 water-dharna, 2015 housing-subsidy road-roko, 2014 PWD water-maang (Business Standard/PTI)
//    — REJECT: pre-term (2014-15).
// 6. AIADMK "wish list of schemes" budget memo March 2025 (The Hindu) — REJECT: pre-term + sirf maang.
// 7. countryandpolitics.in budget-session highlights (1 Sep 2026): Anbalagan ne Home Minister se
//    MLA Vaiyapuri Manikandan par traffic case quash karne ki maang ki — REJECT: (a) outlet
//    whitelist me nahi; (b) dusre MLA ke liye case-quash maang, Oupalam seat ka kaam nahi;
//    ashwasan/nateeja dastavezi nahi.
// 8. myneta.info affidavit: 4 criminal cases (IPC 171H/188 charges related) — REJECT as negative:
//    pre-term ke affidavit-declared purane cases hain; May 2026+ me koi FIR/chargesheet/adalt-ka-adesh
//    vikas nahi mila. Sirf yachika/charges-column-shikayat nahi.
// 9. Budget session Aug 2026 me financial-sanctions delay / bureaucratic bottleneck items
//    (countryandpolitics.in) — REJECT: whitelist me nahi + vyaktigat bhoomika-nateeja nahi.
//
// RETRY-LEAD (future mining ke liye):
// - Aug 2026 Budget session me Anbalagan dwara Oupalam se sambandhit uthaye gaye mudde
//   (maang/ashwasan) — The Hindu/Express par archive search se check karna.
// - py.gov.in press-release portal par "Anbalagan" search — abhi koi usable URL nahi mila.
// - MLALADS itemized sanction list (Oupalam seat, 2026-27) — Lad/panel portal par publish
//   hone par GO-backed swikriti entry ban sakegi.

puducherryWorks['a-anbalagan'] = [];

// PUDUCHERRY — Mudaliarpet — A. Johnkumar (BJP)
// Mining date: 2026-10-19
// Record verified from src/data/puducherry.ts: A. Johnkumar, party Bharatiya Janata Party (BJP),
// constituency Mudaliarpet, tenure 2026-2031, post MLA.
// Karyakaal niyam: sirf May 2026 ke baad ke kaam/ghatnayein (period '2026-2031').
// Parivar firewall: putra Richards Johnkumar (Vivilian Richards, purva MLA) ke purane kaam/mamle
// bilkul bahar — pita-putra ke record sakhti se alag.
// Note: Johnkumar ne 2026 me Kamaraj Nagar se Mudaliarpet switch kiya (May 4, 2026 ko 12,945 votes se
// jeet, margin 2,371 vs L. Sambath). Nayi (16vi) sarkar me cabinet me NAHI hain — Aug 6, 2026 ke
// portfolio notification (TNIE) me unka naam nahi; mantri rahe the 14 Jul 2025 se 4 May 2026 tak
// (purani vidhansabha, Kamaraj Nagar seat).
// ~10 search rounds (browser.search, news vertical sahit) + pages padhkar: ZERO valid works entries.
// Bhaasha: Roman-script Hinglish titles/comments (Devanagari/Tamil script bilkul nahi). Currency Rs.

// REJECT-LOG (har reject candidate ek-numbered point):
// 1. Chunav-jeet stories (TOI 4 May 2026, Indian Express, TOI liveblog, Oneindia) — A. Johnkumar BJP ne
//    Mudaliarpet se 12,945 votes (41.49%) se jeeta, L. Sambath (DMK) se 2,371 ka margin. REJECT: chunav
//    result works entry nahi; koi bhautik kaam/inauguration nahi.
// 2. Kamatchi Amman Temple land case — Madras HC (Justice S.M. Subramaniam) ne Sept 2023 me father-son duo
//    (A. John Kumar + putra Richards) ko property wapas karne aur CB-CID jaanch me sahyog ka nirdesh diya;
//    2023 me CB-CID case registered. Hindu Munnani ne Jul 2025 me isi par virodh kiya. REJECT (negative
//    nahi ban paya): sab kuch pre-term hai; May 2026+ me koi nayi FIR/chargesheet/adalat-aadesh/notice
//    established media me nahi mila; sirf yachika/protest akele negative nahi banta. Sources:
//    https://www.thehindu.com/news/national/tamil-nadu/madras-high-court-directs-two-bjp-mlas-in-puducherry-to-return-temple-property-to-prove-their-bona-fide/article67348011.ece/amp/ ,
//    https://www.thehindu.com/news/national/tamil-nadu/opposition-turns-heat-on-ainrc-bjp-combine-in-puducherry/article69817926.ece/amp/
// 3. Parivar firewall — putra Richards Johnkumar ke mamle (Nellithope ke purva MLA, 2023 temple case me
//    sah-aaropi, bus-stand renaming procession Mar 2025): REJECT — firewall, A. Johnkumar par bilkul nahi.
// 4. The Hindu (29 Jun 2026) "Rangasamy urges entrepreneurs to invest in Puducherry" — CII event me "MLA A.
//    John Kumar" participants me. REJECT: keval maujoodgi/upasthiti; koi bhautik kaam, fund ya bhoomika nahi.
// 5. TNIE (6 Aug 2026) portfolio allocation notification — 6-sadasyiya Council of Ministers; Johnkumar ka naam
//    kahin nahi. REJECT: koi kaam nahi, sirf roster; nayi sarkar me mantri-pad nahi.
// 6. TNIE/The Week (Jul 2025) minister shapath-grahan, Raj Nivas, Kamaraj Nagar MLA ke taur par. REJECT:
//    pre-term (Jul 2025), purani vidhansabha/seat ka mamla.
// 7. TNIE (29 Jun 2025) "Decks cleared for induction of new minister" — minister banne ki sambhavna.
//    REJECT: pre-term aur pre-event news.
// 8. Newsdrum/PTI (Jan 2026) desalination plant ke virodh me memorandum — REJECT: pre-term (Jan 2026).
// 9. scoopf (THG, 8 Oct 2026) PWD desilting of drains — Mettuvoikkal, Pallavoikkal Mudaliarpet areas se
//    guzarti hain. REJECT: PWD adhikari ka kaam; MLA ki vyaktigat dastavezi bhoomika/fund disclosure nahi.
// 10. LAD GO (Ms.No.12/LAS/A5/2025, 27.06.2025) — MLA-LAD 2024-25/2025-26 me Mudaliarpet ko Rs 215.15 lakh
//     (PM local body). REJECT: purani vidhansabha ke MLA (L. Sambath) ke daur ka fund; Johnkumar ke
//     karyakaal ka sanction nahi. Source: https://lad.py.gov.in/sites/default/files/go-ms-2025.pdf
// 11. ADR reports (criminal/financial background + election expenditure, 2026) — affidavits ka data; REJECT:
//     works/negative dono nahi, sirf data.
// 12. Naam-trap: Tamil search results me "Gyanesh Kumar" (Chief Election Commissioner) ke khilaf Congress
//     andolan — ye humare A. Johnkumar nahi; seedha reject, seedha galat pair-up se bacha.
// 13. Thelocalreport/TNIE/TOI dynasty-candidate stories (Mar-Apr 2026) — pre-term politics, REJECT.
// RETRY-LEADS: (a) py.gov.in / lad.py.gov.in ke press releases ka periodical search ("John Kumar"
//     + "Mudaliarpet") — browser.search me portal index sahi se nahi aaya; (b) The Hindu Puducherry bureau
//     ki Sep-Oct 2026 ki Mudaliarpet stories (e-paper archive); (c) LAD ke 2026-27 sanction GOs (Jul 2026 ke
//     baad ke) me seat-wise "Works Sanctioned" documents — naye karyakaal ki pehli GO-backed list milegi to
//     swikriti entry ban sakti hai; (d) L-G ke 25 Aug 2026 address ke baad MLALADS Rs 3 crore hike par naye
//     term ke works approval GOs.

puducherryWorks['a-johnkumar'] = [];

// PUDUCHERRY — Mannadipet — A. Namassivayam (BJP)
// Mining date: 2026-10-19
// Record verified from src/data/puducherry.ts: A. Namassivayam, party Bharatiya Janata Party (BJP),
// constituency Mannadipet, tenure 2026-2031, post MLA.
// Term 16th Puducherry Assembly (May 2026 se). Mantra-niyam lagu: Home Mantri ke taur par
// UT-stariya faisle REJECT — sirf Mannadipet seat ke vyaktigat kaam ginne hain.
// 6 search rounds (browser.search news vertical + pages padhkar) ke baad result: ZERO valid entries.
// Bhaasha: Roman-script Hinglish titles/comments (Devanagari/Tamil script bilkul nahi). Currency Rs.

// REJECT-LOG (har reject candidate ek-numbered point):
// 1. The Hindu (13 Oct 2026) "Rejuvenated temple pond handed over to local community" — Katterikuppam
//    village, Mannadipet Commune Panchayat me Mariamman temple pond ka rejuvenation. REJECT: inaugurator
//    LG K. Kailashnathan the, kaam Whirlpool India Limited ne CSR ke tahat kiya; Namassivayam sirf karyakram
//    me "attended" — MLA ki vyaktigat dastaveji bhoomika ya fund disclosure nahi. Source:
//    https://scoopfeeds.com/article/ac9294c9-1378-5d5c-be4b-b5f8c4d1193c
// 2. Akashvani (newsonair.gov.in, 9 Aug 2026) Har Ghar Tiranga yatra + President's Police Colour ceremony —
//    REJECT: Union Home Minister Amit Shah ka karyakram, Namassivayam ki maujoodgi matra; UT-stariya mantri
//    bhoomika, seat ka kaam nahi. Source: https://newsonair.gov.in/home-minister-amit-shah-says-3-new-criminal-laws-are-based-on-3-important-pillars-technology-timeline-and-trust/
// 3. The Hindu (2 Jan 2026) spurious drugs CBI probe par Namassivayam vs V. Narayanasamy bayan — REJECT: term
//    se pehle (Jan 2026) bhi hai aur mantri-bayanbaazi hai, seat-works nahi.
// 4. newindianexpress.com (6 Aug 2026) portfolio allocation (Home/Electricity/Education/Law/Animal Husbandry/
//    Forest & Wildlife) — REJECT: mantri-pad ke UT-stariya vibhagiya faisle mantra-niyam me REJECT.
// 5. newindianexpress.com (28 Sep 2026) + TOI — SP A. Subramanian par sexual harassment complaint me Madras HC
//    direction. REJECT (negative nahi): aaropi SP hai, Namassivayam aaropi nahi; unke khilaf FIR/chargesheet/
//    court direction kuch nahi.
// 6. newindianexpress.com (30 Aug 2025) power privatisation row (Adani Electricity) — REJECT: pre-term
//    (Aug 2025) aur UT-stariya vibhagiya mamla.
// 7. Election-result stories (TOI/Indian Express/TOI liveblog, 4 May 2026) Mannadipet jeet (15,918 votes,
//    margin 6,110) — REJECT: chunav result works entry nahi.
// 8. NDA govt oath (13-14 May 2026, newstodaynet) minister ke taur par shapath — REJECT: oath/position, kaam nahi.
// 9. Portfolio/industry CII stories (newsdrum Jul 2026, The Hindu 2021) — REJECT: UT-stariya industry policy,
//    seat ka bhautik kaam nahi.
// 10. Naam-trap check: Tamil Nadu ke Namakkal bypass wali The Hindu stories me Namassivayam ka koi lena-dena
//     nahi (wo EV Velu ki stories hain) — seat se galat pair-up se bacha; koi doosra TN neta "Namassivayam" nahi mila.
// RETRY-LEADS: (a) py.gov.in / lad.py.gov.in press releases me "Mannadipet" + "Namassivayam" ka periodical
// search — public portal index browser.search me nahi aaya; (b) The Hindu Puducherry bureau ki Sept-Oct 2026
// ki Mannadipet stories (e-paper archive check); (c) MLALADS GO Ms.No.14/LAS/A1/2025 ke baad ke LAD sanction
// GOs me seat-wise list dekhna.

puducherryWorks['a-namassivayam'] = [];

// PUDUCHERRY — Thirubhuvanai SC — A.K. Sai J. Saravanan Kumar (TVK)
// Mined: 2026-10-19 (subagent works-mining round; karyakaal May 2026+ only, period '2026-2031')
// Pehchan pakki: S/o Arumugam alias Krishnan, age 53; foundation record (src/data/puducherry.ts)
// se utha: 2026 me Thirubhuvanai (SC) se TVK ticket par jeet — 9740 votes, margin 701,
// runner-up B. Kobiga (AINRC, 9039). TVK ki Puducherry me 2 seats me se ek.
// Purana itihaas (pre-term, sab REJECT): 2021-2026 Oussudu (SC) BJP MLA + mantri
// (Civil Supplies/DRDA, phir Adi Dravidar Welfare); June 2025 me mantri-pad se
// istifa; March 2026 me BJP ticket na milne par TVK me shamil.
// 2026-2031 karyakaal me whitelisted sources par koi valid works entry NAHI mili —
// profile khaali (= []; khaali profile theek hai).

puducherryWorks['ak-sai-j-saravanan-kumar'] = [];

// REJECT-LOG (ak-sai-j-saravanan-kumar, mined 2026-10-19)
// 1. PTI/TOI — "TVK goes solo in Puducherry polls, names candidates for 30 seats"
//    (22-23 Mar 2026): A.K. Sai J. Saravanan Kumar ko Thirubhuvanai se TVK nominee
//    ghoshit; BJP ticket na milne par BJP chhodi — REJECT (chunav se pehle ki
//    ghoshna; karyakaal May 2026 se pehle; party-gatividhi, kaam nahi).
// 2. Oneindia — "BJP announces 9 candidates, Oussudu MLA Saravanan Kumar dropped"
//    (23 Mar 2026): BJP ne Oussudu ticket se hataya; samarthako ka virodh — REJECT
//    (pre-term party politics; na kaam, na negative).
// 3. PTI/newsdrum — "Puducherry Adi Dravidar Welfare Minister Saravanan Kumar quits"
//    (27 Jun 2025): mantri-pad se istifa, BJP MLA bane rahe — REJECT (pre-term,
//    karyakaal May 2026 se pehle; istifa works entry nahi).
// 4. DRDA govern1.com page — "MERI MAATI MERA DESH" (9 Aug 2023) aur MGNREGA bhumi-pujan
//    (26 Jun 2023) me mantri ke roop me upasthiti — REJECT (pre-term; 2021-2026 ke
//    mantri-karyakaal ki gatividhiyan; May 2026+ se bahar).
// 5. LiveLaw/ians — "Madras HC quashes FIR against TVK MLA ECR Saravanan over
//    unauthorised hoardings" (Oct 2026): NAAM-TRAP — ye Tamil Nadu ke Sholinganallur
//    MLA ECR P. Saravanan hain, hamare Puducherry Thirubhuvanai MLA A.K. Sai J.
//    Saravanan Kumar NAHI — REJECT (galat vyakti).
// 6. ANI/Newsable — "TVK functionary arrested in Pudukkottai over Rs 25 crore fraud"
//    (12 May 2026): NAAM-TRAP — TVK central district executive member 'Saravanan' ko
//    Pudukkottai me giraftaar; reports me hamare MLA ke roop me pehchan NAHI —
//    REJECT (galat/apehchan vyakti; FIR-aaropi column me MLA ka naam nahi).
// 7. myneta/ADR 2026 affidavit — 2 criminal cases (ek 'Voluntarily causing hurt by
//    dangerous weapons or means' ka charge) — REJECT as negative (halafname ke
//    pre-term tathya; May 2026+ me koi FIR/chargesheet/adlat-adadesh ka vikas nahi
//    mila; 'sirf halafnama' negative nahi banta).
// 8. TNIE — "Scrap nominated MLA system in Puducherry: DMK" (29 Jun 2025): LoP R. Siva
//    ne Sai Saravanan Kumar ko mantri-pad se hatane ki ninda ki — REJECT (pre-term,
//    DMK ka aarop/bayaan; MLA khud aaropi nahi; party politics).
// 9. TNIE — "Opposition members evicted from Puducherry Assembly" (24 Mar 2025):
//    Sai Saravanan Kumar (tab mantri) prashn ka jawab de rahe the jab virodh hua —
//    REJECT (pre-term; sirf maukhik uttar; koi dastaveji nateeja nahi).
// 10. TOI — "Newly elected Puducherry MLAs sworn in by pro-tem speaker" (May 2026):
//     shapath-grahan ki report; TVK ke B Ramu ka zikr, Saravanan Kumar ka vyaktigat
//     zikr nahi — REJECT (sirf samaroh/upasthiti; koi bhautik sanrachna ya swikriti nahi).
// 11. Live result pages (TOI/IE/BT/devdiscourse/ET/Wikipedia, 4 May 2026): jeet ki
//     khabar (9740 votes, margin 701) — REJECT (chunav-nateeja; works entry nahi).
//
// RETRY-LEADS (parent/live-browser ke liye):
// A. Sarkari LAD portal (lad.py.gov.in) — 2026-27 ke MLALADS Rs 3 crore (GO Ms.No.14/LAS/A1/2025)
//    ke tahat Thirubhuvanai ke liye anushansit karyon ki suchi; live browser se portal par
//    constituency-war kaam nikale jayein to 'swikriti' entries ban sakti hain (badge sarkari).
// B. The Hindu Puducherry section me August 2026 budget session ki vyaktigat MLA-war
//    coverage (assembly prashn + mantri-ashwasan) — whitelisted, lekin search se Saravanan
//    Kumar ka vyaktigat zikr nahi mila; live browser se Hindu/NIE puducherry archive khangalein.
// C. TVK-backed Thattanchavady bypoll (Oct 2026) campaign me MLA ki maujoodgi ki khabar
//    aaye to REJECT hi rahegi (party campaign, kaam nahi) — isliye lead nahi.
// D. Pudukkottai fraud 'Saravanan' ko dobara MLA se jodne ki koi koshish mat karna —
//    naam-trap confirmed, alag vyakti hai.

// PUDUCHERRY — Karaikal South — A.M.H. Nazeem (DMK, LoP)
// Mining date: 2026-10-19
// Record verified from src/data/puducherry.ts: A.M.H. Nazeem, party Dravida Munnetra Kazhagam (DMK),
// constituency Karaikal South, tenure 2026-2031, post MLA.
// Karyakaal sirf May 2026 se. LoP-niyam lagu: LoP-ke-roop me pad-karye, virodh-gatividhiyan,
// party/office ke bayan REJECT — sirf Karaikal South SEAT ke vyaktigat kaam ginne hain.
// 6 search rounds (browser.search general + news vertical; pages padhkar) ke baad result: ZERO valid entries.
// Bhaasha: Roman-script Hinglish titles/comments (Devanagari/Tamil script bilkul nahi). Currency Rs.

// REJECT-LOG (har reject candidate ek-numbered point; pad-karye rejects included):
// 1. The Hindu (13 May 2026) "Nazeem elected DMK legislature party leader in Puducherry" — REJECT: LoP
//    pad-karye (party leader election). Source:
//    https://www.thehindu.com/news/cities/puducherry/nazeem-elected-dmk-legislature-party-leader-in-puducherry/article70969673.ece
// 2. PTI via newsdrum.in (11 May 2026) "DMK elects Nazeem as floor leader of Puducherry assembly" — REJECT:
//    LoP pad-karye. Source: https://www.newsdrum.in/national/dmk-elects-nazeem-as-floor-leader-of-puducherry-assembly-11824194
// 3. newstodaynet (12 May 2026, UNI) "Nazeem elected DMK Legislature Party leader in Pondy" — REJECT: LoP
//    pad-karye. Source: https://newstodaynet.com/2026/05/12/nazeem-elected-dmk-legislature-party-leader-in-pondy/
// 4. The Hindu (Mar 2026) "DMK banks on 'Stalin model', faces a tough fight from BJP in Karaikal" — REJECT:
//    term se pehle ka campaign coverage; sirf election bayanbaazi, seat ka kaam nahi. Source:
//    https://www.thehindu.com/elections/puducherry-assembly/dmk-banks-on-stalin-model-faces-a-tough-fight-from-bjp-in-karaikal-south/article70799129.ece
// 5. The Hindu (9 Jul 2023) "Karaikal MLA puts forth demands to Railway Board" — REJECT: pre-term (2023)
//    aur sirf maang/prastav (memorandum), dastavezi nateeja nahi. Source:
//    https://www.thehindu.com/news/cities/Tiruchirapalli/karaikal-mla-puts-forth-demands-to-railway-board/article67060527.ece/amp/
// 6. The Hindu (archive 2010) NIT-Karaikal foundation ceremony — REJECT: purana karyakaal ka item; Nazeem
//    sirf samaroh me maujood. Premium-gated, waisa bhi pre-term.
// 7. newindianexpress.com (11 Jul 2024) "Karaikal General Hospital to get Rs. 9 crore MRI scan centre" —
//    REJECT: pre-term (2024) aur sirf hospital daura/baithak (inspection-style), bhautik bhoomika nahi.
//    Source: https://www.newindianexpress.com/states/tamil-nadu/2024/Jul/12/karaikal-general-hospital-to-get-rs-9-crore-mri-scan-centre-by-year-end
// 8. newindianexpress.com (5 Jul 2022) Karaikal diarrhoea outbreak review — REJECT: pre-term aur sirf
//    daura/samksha baithak, kaam nahi. Source:
//    https://www.newindianexpress.com/states/tamil-nadu/2022/Jul/05/government-taking-steps-to-prevent-recurrence-of-diarrhoea-outbreak-in-futurepuducherrylg-2473318.html
// 9. Election-result stories (Indian Express/ET/abplive/businesstoday, 4 May 2026) — Karaikal South jeet
//    (12,543 votes, margin 5,862). REJECT: chunav result works entry nahi.
// 10. Wikipedia "Developments in Karaikal under his career" (Chandra Theertham tank, JIPMER Karaikal, NIT,
//     fishing harbour) — REJECT: purane karyakaal (pre-May 2026) ke dawe; term me koi nayi entry nahi.
// 11. py.gov.in CM file 2026 (budget speech PDF) me Karaikal ke liye sarkari ghoshnaein (Manambedu check dam
//     Rs 12 crore, Paravaipettai 2 MLD sewage plant) — REJECT: sarkari yojna-ghoshna; Nazeem ki vyaktigat
//     dastaveji bhoomika ya fund attribution nahi. Source: https://py.gov.in/sites/default/files/cmfile2026eng.pdf
// 12. myneta.info (Puducherry 2026 affidavit) — 2 criminal cases. REJECT (negative nahi): sirf purani
//     affidavit ki jankari; May 2026 ke baad koi FIR/chargesheet/janch ya nyayik vikas nahi mila.
// 13. PM Modi (1 Mar 2026) Puducherry/Karaikal project inaugurations (NIT block, railway lines etc.) —
//     REJECT: kendra-sarkar ke kaam, Nazeem ki bhoomika nahi.
// RETRY-LEADS: (a) py.gov.in / lad.py.gov.in press-release index me "Karaikal South" + "Nazeem" ka periodical
// search — sarkari portal search browser me index nahi hota; (b) The Hindu Puducherry bureau June-Oct 2026
// ki Karaikal editions (e-paper archive); (c) MLALADS GO Ms.No.14/LAS/A1/2025 ke baad LAD sanction GOs me
// seat-wise itemized list; (d) Deccan Chronicle Karaikal pages (whitelist par hai lekin search me na aayi).

puducherryWorks['amh-nazeem'] = [];

// PUDUCHERRY — Thattanchavady — Ashok Anand (AINRC, upchunav vijeta)
// Mining date: 2026-10-19 (karyakaal shuru 9 Oct 2026 counting; shapath ~14 Oct 2026 — karyakaal ~10 din)
// KARYAKAAL: sirf Oct 2026+ (upchunav vijeta). Purana DA case ka disclosure foundation me pehle se hai —
// May 2026+ me is par koi NYAYIK VIKAS (adalat ka aadesh/notice/giraftaari) nahi mila, isliye negative NAHI.

// REJECT-LOG:
// - The Hindu / Deccan Chronicle / NIE / ETV Bharat / IndiaTV / Statesman par sirf upchunav coverage:
//   counting-9-Oct win (13,358 votes, margin 8,482) aur shapath (pro-tem speaker) — chunav jeet ki khabar = kaam nahi → REJECT.
// - Anand ka win ke baad bayan "education and health care ko priority dunga" (The Hindu, 9 Oct 2026) — sirf ghoshna → REJECT.
// - Madras HC ka 6 Aug 2026 ka order (DA case me saza set aside) Oct se pehle ka hai aur pratikool nahi — negative ki eligibility hi nahi.
// - MLALADS (Rs 3 crore/seat/varsh): kisi bhi source me is MLA ki MLALADS sanction ka ullekh nahi; fund disclosure ka koi aadhaar nahi mila.
// - Local/portals: sirf aggregator hits (odishabytes, dailyhunt, latestly, inshorts, nationpress) — whitelist me nahi → REJECT.
// - Koi lokarpan/shilanyas/swikriti/ashwasan (vidhansabha-dastavez ke saath) Oct 9–19 ke beech nahi mila.

puducherryWorks['ashok-anand'] = [];

// PUDUCHERRY — Kadirgamam — Azhagu Azhaganantham (IND)
// Foundation record verified: Azhagu @ Azhaganantham (IND), Kadirgamam seat,
// 16vi Vidhan Sabha (May 2026+), 14633 votes, margin 7004. criminalCases: 0.
// Mining date: 2026-10-19. Searched name variants: Azhagu Azhaganantham, Azhaganatham,
// Azhaganandham, S. S. Azhagu @ Azhaganantham, plus site:thehindu.com /
// site:timesofindia.indiatimes.com restrictions and news-vertical queries.
// Net searches: election coverage only. Zero whitelist-source works items found.
//
// REJECT-LOG:
// 1. TOI city/puducherry wall-collapse article (Mettupalayam Heavy Vehicle Lorry
//    Terminal, monsoon 2026; date not visible on fetched page) — MLA naam CM ke
//    nirikshan-dal ke saath "accompanied by" me aaya hai; koi MLA-dwaar nirdeshit
//    lokarpan/shilanyas/swikriti nahi. REJECT: sirf nirikshan me maujoodgi.
// 2. New Indian Express 2026-05-06 ("NDA 2.0 government talks intensify,
//    Rangasamy is AINRC House leader") — "Independent MLA Azhagu alias
//    Azhaganantham, elected from Kadirgamam, called on him [Rangasamy]" —
//    sarkar-gathan ke baad shishtachar bhet; koi bhautik kaam/ghoshna nahi.
//    REJECT: sirf ghoshna/varta-mulakaat, karyakram-ghoshna me bhoomika nahi.
// 3. TOI/IE/Frontline election-result pieces (May 2026) — sirf jeet ki khabar,
//    karyakaal ke kaam ka ullekh nahi. REJECT: pre-term/chunav coverage.
// 4. py.gov.in / lad.py.gov.in GO PDFs naming Azhaganantham — search me koi nahi
//    mila; MLALADS sanction list me naam absent (itemized source nahi mila).
// RETRY-LEADS:
// A. August 2026 budget session me MLA ne koi sawal/maang uthayi ya nahi —
//    Vidhansabha records/TOI puducherry coverage me "Kadirgamam" keyword se retry.
// B. MLALADS 2026-27 pehli tranche ki itemized sanction list release ho tab
//    lad.py.gov.in par naam ki khoj retry karo (abhi list mili nahi).
// NEGATIVES: myneta/ADR 2026 affidavit me criminalCases = 0; established media
// me May 2026 ke baad FIR/chargesheet/janch/yachika-vikas wala koi ullekh nahi mila.
puducherryWorks['azhagu-azhaganantham'] = [];

// PUDUCHERRY — Manavely — B. Ramu (TVK)
// mining-date: 2026-10-19
// Record check: slug 'b-ramu', name 'B. Ramu', party 'Tamilaga Vettri Kazhagam' (TVK),
// seat Manavely. Background: age 66, 10th Pass, criminalCases 0, assets Rs 35,62,32,853.
// Karyakaal: May 2026+. Period: '2026-2031'.
//
// REJECT-LOG (sakht niyam ke tahat reject ya anupayogi mile):
// 1. indianexpress.com/elections/manavely-election-result-live-updates... (2026-05-04) —
//    sirf chunav-nateeja table, koi works-ghatna nahi. REJECT (works nahi).
// 2. timesofindia liveblog manavely-assembly-election-results-2026 (2026-05-04) —
//    sirf counting updates, koi works nahi. REJECT.
// 3. news.abplive.com Manavely result live (2026-05-04) — sirf result, works nahi. REJECT.
// 4. devdiscourse.com TVK Breakthrough (2026-05-04, PTI agency) — sirf jeet ki khabar,
//    koi karya/shilanyas/lokarpan nahi. REJECT (works nahi).
// 5. indianexpress.com "NDA retains Puducherry" analysis (2026-05-04) — sirf election
//    analysis, Manavely ke kaam ka zikr nahi. REJECT.
// 6. newstodaynet.com/manavely-20 (2026-05-03) — seat profile, chunav se pehle ki
//    background jaankari, koi MLA karya nahi. REJECT.
// 7. lad.py.gov.in physical-achievements-past-five-yrs-lad.pdf — 2023-24 ke data,
//    May 2026 se pehle ka, aur B. Ramu ka naam nahi. REJECT (pre-term + naam nahi).
// 8. lad.py.gov.in go-ms-2025.pdf — MLALADS works list ka AMENDMENT (kaam ke prakar),
//    koi MLA-specific swikriti nahi. REJECT.
// 9. newsable.asianetnews.com "Puducherry's vision: MLA fund hiked to Rs 3 crore"
//    (2026-08-25, ANI) — LG ka budget bhashan, B. Ramu se juda koi itemized kaam nahi.
//    REJECT (sirf ghoshna, MLA bhoomika nahi).
// 10. news.abplive.com Puducherry Budget 2025-26 MLALAD hike — PTI-based budget khabar,
//     purani sarkar ke waqt ki, koi Manavely kaam nahi. REJECT.
// 11. Negative check: myneta record me criminalCases 0; established media me
//     May 2026+ me B. Ramu par FIR/chargesheet/janch ya adalat ka aadesh —
//     kuch nahi mila. Negative entries: koi nahi.
//
// Search rounds: "B Ramu Manavely MLA TVK", "B. Ramu Manavely MLA development works
// inauguration", ""Ramu" Manavely MLA "foundation stone"", "Manavely MLA Ramu
// thehindu/indianexpress", ""B Ramu" TVK MLA assembly Puducherry news 2026",
// "Manavely constituency development MLA Ramu road water school", ""Manavely" "Ramu"
// MLA Puducherry assembly demand", ""B. Ramu" TVK Sep/Oct/Aug 2026", "Puducherry
// MLALADS works sanction list Manavely MLA 2026", ""Ramu" Manavely TVK Jul/Jun 2026".
// Natija: chunav-natija coverage ke siwa koi whitelisted works/negative coverage nahi.

puducherryWorks['b-ramu'] = [];

// PUDUCHERRY — Villianur — B. Ravicoumar (AINRC)
// Mining date: 2026-10-19
// Foundation record verified: slug 'b-ravicoumar', name 'B. Ravicoumar', party 'All India N.R. Congress', constituency 'Villianur' (villianur)
// Term window: May 2026+ only (16th Vidhan Sabha). Period: '2026-2031'.
// RESULT: no whitelist-valid works entries found. Empty array.
//
// REJECT-LOG:
// 1. Election coverage only — Indian Express / TOI / HT / Business Today / Oneindia Villianur result pages
//    (May 4, 2026): confirm B. Ravicoumar (AINRC) won with 16,970 votes, margin 1,970 over R. Siva (DMK).
//    No post-May-2026 works (inauguration/shilanyas/sanction) in any whitelisted outlet. REJECTED: pre-term/chunav.
// 2. The Hindu (2024-10-28): "New high-level bridge near Villianur open to traffic" — Sankaraparani river bridge,
//    opened by LG + CM, foundation 2022. Pre-term (2022-2024); MLA Ravicoumar not involved. REJECTED: pre-term.
// 3. ADR India report (Puducherry Assembly Elections 2026): B. Ravicoumar, Villianur, 2 criminal cases —
//    FIR RC0322024A0014 (CBI ACB Chennai, Prevention of Corruption Act 13(2) r/w 13(1)(e)/(b), IPC 109),
//    SPL.C.C.No.02/2025 before Hon'ble Special Judge, Puducherry (charges not framed). Same FIR as The Hindu
//    stories (2024-10-20: CBI registered disproportionate-assets case against B. Ravicoumar, data entry operator,
//    Villianur Commune Panchayat; 2025-05-09: he was suspended). Pre-term matter. Rule: pre-term matter counts
//    only with May 2026+ judicial development (court order/notice). Searched The Hindu / LiveLaw / news vertical
//    through Oct 2026 — no May 2026+ development in whitelisted media. REJECTED: no qualifying negative entry.
//    (Note: ADR India is not on the whitelist; The Hindu stories are pre-term only.)
// 4. Name trap avoided: Villupuram MP D. Ravikumar (VCK) — different person (Villupuram LS, Tamil Nadu), not
//    Villianur MLA. All such hits rejected by seat check.
// 5. TNIE 2026-08-14 Villianur petrol-bomb extortion arrest — local crime story, MLA not involved. REJECTED.
// 6. lad.py.gov.in GO (go-ms-2025.pdf): MLALADS 2024-25/2025-26 allocation table lists Villianur Rs 215.15 lakh
//    generic release to local bodies — not an MLA-attributed specific work. REJECTED: no individual work/fund role.
// 7. No sarkari portal (py.gov.in / lad.py.gov.in release), GO PDF, or Akashvani/DD item attributing a physical
//    government structure inauguration/foundation/sanction to MLA B. Ravicoumar post-May 2026 found.
//
// RETRY-LEADS (next mining round):
// - Check The Hindu Puducherry section fresh for "Ravicoumar" + MLALADS sanction lists on lad.py.gov.in
//   (scheme-level GOs do not name works; look for itemized MLA-wise lists).
// - Watch for any post-May-2026 judicial development in SPL.C.C.No.02/2025 (Special Judge, Puducherry) in
//   The Hindu/LiveLaw — would qualify as negative entry then.
// - Deccan Chronicle / Indian Express Puducherry pages occasionally carry MLA constituency events.
puducherryWorks['b-ravicoumar'] = [];

// PUDUCHERRY — Ariankuppam — C. Aiyappan (AINRC)
// Mining date: 2026-10-19
// Record verified from src/data/puducherry.ts: C. Aiyappan @ Mouttayappan, party All India N.R. Congress
// (AINRC), constituency Ariankuppam, tenure 2026-2031, post MLA, 16th Puducherry Assembly (May 2026 se).
// Karyakaal-mantra: SIRF May 2026 ke baad ke kaam/ghatnayein.
// 5 search rounds (general + quoted name + "Mouttayappan" spelling + whitelist-sited queries + news
// vertical + negative/court-case check) ke baad result: ZERO valid entries. Khali profile theek hai.
// Bhaasha: Roman-script Hinglish titles/comments (Devanagari/Tamil script bilkul nahi). Currency Rs.

// REJECT-LOG (har reject candidate ek-numbered point):
// 1. ANI wire relay (newswav.com / newkerala.com / indianeconomicobserver.com, 10 May 2026) — "Ariankuppam
//    MLA expresses gratitude to voters, vows to continue CM's welfare schemes". REJECT: sirf press-statement
//    me ashwasan/ghoshna ("ensure CM schemes reach Ariankuppam", "bridge between govt and citizens") — koi
//    bhautik sarkari sanrachna ka vyaktigat lokarpan/shilanyas/swikriti nahi, fund disclosure nahi. Plus
//    relay outlets (newswav/newkerala/indianeconomicobserver) whitelist me nahi; ANI wire bhi established
//    outlet par print chahiye thi jo nahi mili.
// 2. Election-result stories (TOI 4 May 2026, India Today, ABP Live, Business Today, Oneindia, TOI liveblog)
//    — Aiyappan @ Mouttayappan 14,210 votes, margin 603 over Vizayalakshmy Djeamourthy. REJECT: chunav result
//    works entry nahi; 4 May karyakaal (May 2026) ke shuruaati kinare par bhi kaam nahi hai.
// 3. bharathorizon.com (pre-result page) — "Aiyappan highlights his tenure's achievements, including road
//    repairs and school upgrades". REJECT: pre-result campaign claim, source non-whitelist aggregator,
//    koi vyaktigat bhautik kaam dastavez nahi; term May 2026 se pehle ka daura bhi nahi.
// 4. ADR/myneta criminal data (Puducherry Assembly 2026 winning-candidates report; myneta candidate_id=82)
//    — Ariyankuppam PS Cr.No. 176/2012, S.C. No. 13/2020, II Addl Sessions Judge Puducherry, IPC
//    109/302/34 + Arms Act 27(1), charges framed 29 Oct 2021, pending. NOT a negative entry: pre-term mamla
//    hai aur May 2026+ me koi nyayik vikas (adalat aadesh/notice/hearing-report) established media me nahi
//    mila — jawab disclosure ka sawaal hi nahi uthta. indiankanoon/courtkutchehry/sooperkanoon results jo
//    mile wo Tamil Nadu ke alag "Ayyappan" mamle hain (seat/person se galat pair-up nahi kiya).
// 5. Naam-trap check: Delhi Ayyappa temple Sabareesam building (Amit Shah, mangalorean.com) aur Andhra
//    Pradesh Assembly Speaker Ch. Ayyanna Patrudu (thehansindia.com / The Hindu Amaravati quarters story)
//    — "Ayyappa/Ayyanna" milte-julte naam, Ariankuppam se koi sambandh nahi. Galat pair-up se bacha.
// RETRY-LEADS: (a) py.gov.in / lad.py.gov.in press releases me "Aiyappan" + "Ariankuppam" ka periodical
// search — public portal index browser.search me nahi aaya; (b) The Hindu / newindianexpress.com ke
// Puducherry bureau ki Jun-Oct 2026 ki Ariankuppam stories (e-paper archive); (c) MLALADS
// (GO Ms.No.14/LAS/A1/2025, Rs 3 crore/seat/varsh) ke tahat Ariankuppam ki sanction list agar kisi GO PDF
// ya lad.py.gov.in release me mile to entry banegi; (d) PM Modi ke ~Mar 2026 ke Rs 2700-crore Puducherry
// package me Ariankuppam ki koi item agar Aiyappan ke vyaktigat lokarpan ke saath media me mile to alag se
// dekho (abhi us package ki koi story unke vyaktigat bhoomika ke saath nahi mili).

puducherryWorks['c-aiyappan'] = [];

// PUDUCHERRY — Nedungadu SC — Dr. V. Vigneswaran (IND)
// Mining date: 2026-10-19
// Record confirmed from src/data/puducherry.ts: slug 'dr-v-vigneswaran', name 'Dr. V. Vigneswaran',
// party Independent (IND), constituency Nedungadu, district Karaikal.
//
// Search coverage: 8 search rounds ("Vigneswaran Nedungadu MLA", "Nedungadu MLA foundation stone",
// inauguration/water/road/school variants, assembly-demands, spelling variant "Vigneshwaran",
// Karaikal MLA BJP-support, criminal-case check). All results pre-term (election victory,
// affidavits, March-2026 The Hindu "rebel nominations" piece, Frontline May-2026 BJP-support note)
// or unrelated. The Hindu Puducherry section page is login-walled. No post-May-2026 lokarpan,
// shilanyas, swikriti, kaam-shuru, MLALADS itemized list, Vidhansabha-demand outcome, or negative
// (FIR/chargesheet/janch ya May 2026+ nyayik vikas) found on whitelisted outlets.
//
// REJECT-LOG:
// - REJECT: The Hindu 2026-03-25 "Rebel nominations strain alliances in Karaikal" — pre-term
//   (nomination filing; pre-May-2026, out of tenure).
// - REJECT: Frontline 2026-05 (election analysis) — sirf rajneetik tippani ki "Vigneswaran has
//   already cast his lot with the BJP"; koi kaam/udaahran nahi, works rule par VALID nahi.
// - REJECT: myneta.info / ADR affidavit entries (criminal case: IPC 143/341/283/149, charges
//   related to unlawful assembly etc.) — pre-term declaration, aur May 2026 ke baad koi FIR,
//   chargesheet, janch ya nyayik vikas established source par nahi mila; negative rule par NAHI.
// - REJECT: All election-result pages (Indian Express, TOI, ABP, Business Today, Oneindia,
//   News18, latestly/PTI April-2026) — chunavi coverage, kaam nahi.
// - NOTE: The Hindu print edition 2026-05-05 uses spelling "V. Vigneshwaran" — variant spelling
//   round me bhi koi post-term works news nahi mila.
//
// Retry leads for later workers: The Hindu Puducherry/Karaikal print editions (login wall ke
// peeche), newindianexpress.com Karaikal bureau, Deccan Chronicle Karaikal pages, Tamil
// press (Dinamalar/Dinamani Karaikal editions) — MLALADS itemized works list ya lokarpan news
// ke liye dobara scan.

puducherryWorks['dr-v-vigneswaran'] = [];

// PUDUCHERRY — Embalam SC — E. Mohandoss (AINRC)
// Mining date: 2026-10-19
// Record verified from src/data/puducherry.ts: E. Mohandoss, party All India N.R. Congress (AINRC),
// constituency Embalam (SC reserved, seat 21), post MLA, tenure 2026-2031.
// Term: 16th Puducherry Legislative Assembly (May 2026 se — karya-kaal May 2026+ hi maanya).
// 8 search rounds (browser.search news vertical + Tamil variant + whitelisted-outlet site queries + Dinamalar
// page kholkar padha) ke baad result: ZERO valid works entries, ZERO negatives.
// Bhaasha: Roman-script Hinglish titles/comments (Devanagari/Tamil script bilkul nahi). Currency Rs.

// REJECT-LOG (har reject candidate ek-numbered point):
// 1. Election-result stories (TOI/Indian Express/ABP/Business Today/CNBC TV18, 4 May 2026) Embalam jeet
//    (16,017 votes, margin 4,061 vs M. Candassamy INC) — REJECT: chunav result works entry nahi.
// 2. The Hindu (24 Mar 2026) AINRC candidate list — Mohandoss ko Embalam (SC) se ticket — REJECT: term se
//    pehle (Mar 2026) aur candidate announcement, works nahi.
// 3. Dinamalar (mid-Oct 2026, story padhi gayi) "do samuday nal koodathirku Rs 25 lakh ke saaman" — Mohandoss
//    ne Embalam ke Pillaiyarkuppam aur Aladimedu gaon ke community welfare halls ko Adi Dravidar Welfare
//    Department ke zariye utensils/chairs/tables/air coolers/cupboards vitarit kiye — REJECT (do kaaran):
//    (a) Dinamalar whitelist me NAHI; (b) category hi daan/vitaran hai (bhautik sarkari sanrachna ka
//    lokarpan/shilanyas nahi), MLALADS ka ullekh bhi nahi. Source (lead matra):
//    https://www.dinamalar.com/amp/news/puducherry/supplies-to-two-community-welfare-centres-for-rs-25-lakhs-mohandas-mla-supply/4347544
// 4. newspointapp.com (TOI feed mirror, May 2026) oath story — Mohandoss ne "God and NR" (Rangasamy) ke naam
//    shapath li — REJECT: shapath-ceremony, kaam nahi; outlet whitelist me bhi nahi.
// 5. ADR election-expenditure PDF (adrindia.org) — Mohandoss sabse kam chunav kharch wale MLAs me #1
//    (Rs 2,86,815) — REJECT: election data, works nahi; negative to bilkul nahi.
// 6. newindianexpress.com (4 May 2026) liveblog "NR Congress workers celebrate E Mohandoss's win" — REJECT:
//    jeet-ka jashn, works nahi.
// 7. Naam-trap check: The Hindu ke "Mohandoss" wale doosre results Chennai ke activist Sneha Mohandoss aur
//    advocate A. Mohandoss ke the (rent-control contempt case) — dono ka Puducherry MLA se koi lena-dena
//    nahi; galat pair-up se bacha. "Embalam Selvam" (Speaker, Manavely MLA) bhi alag vyakti hai.
// 8. Negatives scan: browser.search me Mohandoss ke khilaf May 2026+ me koi FIR/chargesheet/janch/adalati
//    aadesh established media me NAHI mila — negative bhi zero.
// RETRY-LEADS: (a) py.gov.in / lad.py.gov.in press releases + GO PDF index me "Embalam" + "Mohandoss"
// periodical search — public portal index browser.search me nahi aaya; (b) The Hindu Puducherry bureau ki
// Jun-Oct 2026 ki rural-seat stories (e-paper archive check — The Hindu site: query se sirf 2021 ke results
// aaye); (c) whitelisted English outlet me Dinamalar wale community-hall episode ka koi version mile to uski
// category par vichaar — tab bhi vitaran-event category me REJECT sambhav.

puducherryWorks['e-mohandoss'] = [];

// PUDUCHERRY — Orleampeth — G. Nehru (NMK)
// Mining date: 2026-10-19
// Identity: G. Nehru alias Couppoussamy / Kuppusamy, Neyam Makkal Kazhagam (NMK),
// Orleampeth MLA, 2026 vijeta (9960 votes, margin 1201 over DMK ke S. Gopal).
// NMK TVK-led Alliance me March 2026 se (The Hindu, 23 Mar 2026).
// Karyaakaal window: May 2026+ (16vi Vidhan Sabha). Period: '2026-2031'.
//
// REJECT-LOG (7 search rounds; sab reject):
// - K.N. Nehru (TN Municipal Administration Minister, Tiruchi road/drain lokarpan) — naam-trap, alag vyakti. REJECT.
// - Nehru Olekar (Haveri, Karnataka BJP MLA) corruption case — naam-trap, alag vyakti. REJECT.
// - K.N. Nehru disproportionate-assets case (2013) — naam-trap + pre-term. REJECT.
// - The Hindu 2022-06-02: PWD office me sit-in (Smart City/projects Orleanpet me ignore) — pre-term (karyakaal se pehle). REJECT.
// - The Hindu 2025-09/12: assembly eviction protests; 2025-12-27 Union Minister event me "MLAs G. Nehru" maujoodgi — dusre neta ke karyakram me maujoodgi, sab pre-May-2026. REJECT.
// - TNIE 2025-10-27 + The Hindu 2025-10-28: NMK party launch — party-political event, karya/works nahi; pre-term. REJECT.
// - The Hindu 2026-03-23: TVK-NMK alliance, 2 seats — pre-poll politics, works nahi. REJECT.
// - PM Modi Puducherry visit 1 Mar 2026 (Rs 2700 crore projects) — pre-term + PM ka karyakram, MLA ki vyaktigat bhoomika nahi. REJECT.
// - PTI (webindia123, 27 Mar 2025): statehood resolution — pre-term (15vi Sabha). REJECT.
// - Newsdrum (ANI, 14 Aug 2024): statehood resolution — pre-term. REJECT.
// - Business Standard/PTI 2015: Corporation for Welfare of Backward Classes dharna (Orleanpet loans) — pre-term. REJECT.
// - The Hindu 2023-03 (Business Standard AMP): CM se siddha college sawal — pre-term. REJECT.
// - kapitoshka.info (14 saal purana mirror): 2011 Grand Bazar daura — pre-term + chhota portal. REJECT.
// - neyampuducherry.in: vyaktigat party website, Jan 2025 items (pre-term); whitelist me nahi. REJECT.
// - onefivenine.com locality pages: sirf MLA ka naam-listing, kaam nahi. REJECT.
// - ADR 2026 winner report: 4 criminal cases (IPC 143/283/149/186/188, 2021/2023 FIRs, andolan/road-obstruction type, serious 0, charges framed nahi) — pre-term FIRs; May 2026+ me koi nyayik vikas (aadesh/notice/chargesheet) established media me NAHI mila. Negative entry layak nahi.
// - Post-May-2026 whitelist outlets me G. Nehru ke vyaktigat lokarpan/shilanyas/swikriti/ashwasan ki koi entry NAHI mili (The Hindu/TNIE/TOI/HT/NDTV/India Today/DC/PTI sab check kiye).
//
// Retry leads: (1) August 2026 Budget session ke dauraan Orleampeth-specific maang — local e-paper me dhoondho;
// (2) py.gov.in GO/LAD press releases me Orleampeth seat ka zikr — 'lad.py.gov.in' par seat-wise MLALADS soochi check karo.

puducherryWorks['g-nehru'] = [];

// PUDUCHERRY — Thirunallar — G.N.S. Rajasekaran (BJP, mantri)
// Mining date: 2026-10-19
// Record verified from src/data/puducherry.ts: G.N.S. Rajasekaran, party Bharatiya Janata Party (BJP),
// constituency Thirunallar, tenure 2026-2031, post MLA.
// Karyakaal May 2026 se (16vi Vidhan Sabha). Mantra-niyam lagu: 17 June 2026 ko mantri pad ki shapath,
// portfolio (6 Aug 2026 se): Agriculture and Farmers Welfare, Sports and Youth Affairs, DRDA,
// Community Development, Rural Development, Sainik Welfare (sarkari page https://py.gov.in/node/1477).
// UT-stariya vibhagiya kaam REJECT — sirf Thirunallar seat ke vyaktigat kaam ginne hain.
// 10 search rounds (browser.search news vertical + pages padhkar) ke baad result: ZERO valid entries.
// Bhaasha: Roman-script Hinglish titles/comments (Devanagari/Tamil script bilkul nahi). Currency Rs.

// REJECT-LOG (har reject candidate ek-numbered point):
// 1. TOI/Business Today/oneindia (4 May 2026) Thirunallar election result: G.N.S. Rajasekaran (BJP)
//    16,829 votes se jeete, margin 9,526 — REJECT: chunav result works entry nahi.
//    Source: https://timesofindia.indiatimes.com/elections/assembly-elections/puducherry/constituency-show/thirunallar
// 2. PTI via ThePrint/newindianexpress/The Hindu (9-17 Jun 2026) cabinet expansion — Rajavelu,
//    Sivakolundhu, GNS Rajasekaran ne 17 June 2026 ko Lok Niwas me mantri pad ki shapath li.
//    REJECT: oath/position, seat ka bhautik kaam nahi.
//    Source: https://www.newindianexpress.com/states/tamil-nadu/2026/Jun/17/rajavelu-sivakolundhu-rajasekaran-sworn-in-as-ministers-in-puducherry
// 3. Portfolio allocation (6 Aug 2026, oneindia profile + py.gov.in sarkari page) — Agriculture and Farmers
//    Welfare, Sports and Youth Affairs, DRDA, Community Development, Rural Development, Sainik Welfare.
//    REJECT: mantra-niyam ke tahat UT-stariya vibhagiya faisle REJECT; seat ke vyaktigat kaam nahi.
//    Source: https://py.gov.in/node/1477
// 4. ICAR/latestly ANI (1 Sep 2026) Union Minister Rajiv Ranjan Singh ka PMMSY fisheries launch,
//    Karaikal seaweed centre (Rs 1.92 crore) ke udghatan me Rajasekaran ki maujoodgi diganitaries me
//    suchit — REJECT: dusre neta (Union Minister) ke karyakram me sirf maujoodgi; vyaktigat lokarpan
//    ya fund disclosure nahi.
//    Source: https://icar.org.in/en/union-minister-shri-rajiv-ranjan-singh-visits-icar-cmfri-kochi-exhibition-stall-puducherry
// 5. Karaikal-Peralam railway line (23 km, Rs 373 crore) ka 11 Oct 2026 ko PM Modi dwara udghatan —
//    line Thirunallar se guzarti hai, Thirunallar Saneeswara mandir ki tirth-seva uplabdhata badhne ka
//    zikr — REJECT: PM/Railways ka pariyojana; Rajasekaran ki vyaktigat bhoomika ka koi dastavej nahi.
//    Source: https://linksgraph.com/en/pm-dedicates-to-the-nation-karaikal-peralam-new-railway-line
// 6. myneta.info affidavit: 1 criminal case — Crime No 35/2021, Thirunallar Town P.S. (IPC 143, 269, 270,
//    149 + DM Act 51(b)), charges framed 19 Mar 2021, status pending — NOT a negative entry:
//    pre-term (2021, COVID-era lockdown-violation sections) aur May 2026 ke baad koi nyayik vikas
//    established media me nahi mila; pre-term mamla tabhi jab May 2026+ vikas ho.
//    Source: https://www.myneta.info/Puducherry2026/candidate.php?candidate_id=113
// 7. The Hindu (6 Mar 2026, Sani Peyarchi arrangements) + business-standard (2015) Thirunallar mandir
//    queue complex (Rs 4.72 crore) / Yatri Niwas shilanyas — REJECT: dono pre-term ya prashasan ke
//    kaam; Rajasekaran se sambandh nahi.
//    Source: https://www.thehindu.com/news/cities/Tiruchirapalli/karaikal-district-administration-gears-up-for-sani-peyarchi-at-thirunallar-temple-on-march-6/article70699563.ece
// 8. ADR expenditure report (BJP candidate list stories, TOI 22 Mar 2026) — REJECT: candidate
//    ghoshna/naaam-soochi, kaam nahi.
//    Source: https://timesofindia.indiatimes.com/india/puducherry-polls-bjp-names-another-candidate-for-karaikal-south-check-full-list/articleshow/129729017.cms
// 9. MLALADS GOs (lad.py.gov.in): G.O. Ms.No.12/LAS/A5/2025 (27.06.2025) fund release 2024-25/2025-26
//    phases ke liye — REJECT: pre-term (16vi Sabha se pehle) sanctions; seat-wise 2026-27 ki suchi nahi mili.
//    Source: https://lad.py.gov.in/sites/default/files/go-ms-2025.pdf
// 10. The Hindu (9 Jun 2026) ne Rajasekaran ko "nominated BJP legislator during previous tenure" bataya,
//     jabki newindianexpress (17 Jun 2026) ne "second consecutive term" likha — biographical virodh;
//     dono hi works entry nahi; record me darj karne layak nahi.
// RETRY-LEADS: (a) The Hindu Karaikal bureau ki Sept-Oct 2026 ki Thirunallar stories ka e-paper archive
// check — browser.search me index nahi aaya; (b) py.gov.in press-release search me "Thirunallar" +
// "Rajasekaran" 2026-27 ke LAD sanction GOs nikalne par itemized swikriti mil sakti hai; (c) MLALADS
// Rs 3 crore hike (GO Ms.No.14/LAS/A1/2025) ke baad ki seat-wise sanction lists lad.py.gov.in par
// periodical check.

puducherryWorks['gns-rajasekaran'] = [];

// PUDUCHERRY — Kamaraj Nagar — Jose Charles Martin (LJK)
// Mining date: 2026-10-19
// MLA (16vi Vidhan Sabha), elected 4 May 2026 from Kamaraj Nagar (LJK, NDA),
// assumed office 4 May 2026 per Wikipedia; LJK founder; son of Santiago Martin.
// Karyakaal: May 2026+ only. Result: NO valid works found — empty profile.
//
// REJECT-LOG (sakht):
// 1. Indian Express political-pulse profile (pre-election): "Rs 10 crore per year CSR, Rs 50 crore in five years"
//    pledge — sirf chunavi ghoshna (da wa, koi lokarpan/sanikriti nahi) → REJECT (sirf ghoshna).
// 2. IINVSYS LinkedIn company post: "AI-powered smart infrastructure" inauguration me MLA ki
//    maujoodgi/bharosa — LinkedIn social post hai (whitelist me nahi), vendor ka promotional content,
//    koi established-media coverage nahi mili → REJECT; retry-lead (whitelisted media me coverage mile to phir dekho).
// 3. CM budget 2026-27 PDF (py.gov.in, sarkari): Kamaraj Nagar sahit 4 constituencies me Rs 92.74 crore
//    drinking-water works — sarkar ki ghoshna hai, MLA ki vyaktigat dastaveji bhoomika nahi → REJECT.
// 4. LinkedIn-style/campaign items: victory coverage (IE/TOI/Week/PTI, May 2026) — chunav result, kaam nahi → REJECT.
// 5. Minister hone ki khabrein (The Federal, TOI, May 2026): cabinet expansion 17 Jun 2026 me Jose
//    mantri NAHI bana (NIE: swearing-in me maujood bhi nahi tha) → koi work nahi.
// 6. NEGATIVES check: ADR affidavit me 5 pending criminal cases (ED ka SC No. 533/2018 me Accused No. 15
//    sahit) — SAB pre-term ghoshit halafname ke tathya; May 2026+ me koi nayi FIR/chargesheet/court
//    order Jose Charles Martin ke khilaf established media me nahi mili → negative NAHI.
// 7. Pre-term items (chhune se pehle ka hissa): Lenin Durai ki EC complaint (March 2026, shikayat,
//    FIR nahi), Deepavali gift vivaad (Oct 2025) — pre-term, negative nahi.
// 8. Assembly session me sawaal/maang: May-Oct 2026 me Kamaraj Nagar MLA ke kisi bhi Vidhansabha
//    dastavezi natije/ashwasan ki whitelisted report nahi mili.
//
// Retry-leads: (a) IINVSYS AI infrastructure inauguration — The Hindu/NIE/TOI me coverage ho to lokarpan
// entry ban sakti hai (date/sthan/Kamaraj Nagar connection verify karna); (b) MLALADS
// (GO Ms.No.14/LAS/A1/2025, Rs 3 crore/seat/varsh) — koi srot ab tak MLALADS kahe nahi mila, fund
// disclosure "ghoshit nahi" par rahegi; (c) lad.py.gov.in / py.gov.in releases me "Jose Charles Martin"
// naam se search karte rehna.

puducherryWorks['jose-charles-martin'] = [];

// PUDUCHERRY — Ozhukarai — K. Narayanasamy (AINRC)
// Mining date: 2026-10-19
// Foundation record verified: slug 'k-narayanasamy', name 'K. Narayanasamy alias Nithyanandam', party 'All India N.R. Congress', constituency 'Ozhukarai' (ozhukarai)
// Term window: May 2026+ only (16th Vidhan Sabha). Period: '2026-2031'.
// Identity: age 37, MBA Cardiff University 2014, criminalCases 0. The Hindu (2026-05-20) ne 13 new faces me
// 'K. Narayanasamy alias Nithyanandam of the AINRC representing Ozhukarai constituency' likha — identity confirmed.
// RESULT: no whitelist-valid works entries found. Empty array.
//
// REJECT-LOG:
// 1. Election coverage only — TOI / Indian Express / Business Today / ABP Live / Oneindia Ozhukarai result pages
//    (May 4, 2026): K. Narayanasamy alias Nithyanandam (AINRC) jeete 12,635 votes, margin 4,234 over Sasibalan (TVK).
//    Koi post-May-2026 kaam (lokarpan/shilanyas/swikriti) whitelist outlet me nahi. REJECTED: pre-term/chunav.
// 2. NAAM-TRAP (galat vyakti) — purva CM V. Narayanasamy (Congress) ke saare hits reject:
//    a. The Hindu 2026-03-08: 'Puducherry Assembly election: Congress will lead alliance ... says Narayanasamy'
//       — former CM, Congress; pre-term. REJECTED: galat vyakti + pre-term.
//    b. The Hindu 2025-10-24: 'Puducherry BJP MLA hits back at Congress leader Narayanasamy on Deepavali gift issue'
//       — 'the former Chief Minister'. REJECTED: galat vyakti + pre-term.
//    c. The Hindu 2026-01-24: 'Narayanasamy will contest Assembly polls, says PCC chief' — former CM. REJECTED: galat vyakti.
//    d. The Hindu 2026-05-28: 'Congress leader slams NDA over delay in completion of Cabinet formation' — former CM
//       (post-term date but vyakti galat; final results me Congress ne ticket bhi nahi diya tha). REJECTED: galat vyakti.
//    e. newindianexpress.com 2025-04-02: 'Former CM V Narayanasamy, Congress leaders held for stir against cops'
//       — protest arrest, former CM. REJECTED: galat vyakti + pre-term.
//    f. The Hindu 2025-11-04/2025-11-10: drug procurement/VAC probe stories — 'Former Chief Minister V. Narayanasamy'.
//       REJECTED: galat vyakti + pre-term.
//    g. indiankanoon 'Narayanasamy vs Inspector Of Police' (2023, chit-fund agent Narayanasamy) — unrelated person. REJECTED: galat vyakti.
// 3. uzhavarkarai.in (MLA ki apni site, self-published): vision promises BY 2027/2028 — free coaching centres,
//    24x7 paani, primary care unit, sakhi centres — May 2026 review ke saath 'STATUS LIVE'. Sirf ghoshna/wade,
//    koi documented completed work nahi, aur whitelist outlet nahi. REJECTED: sirf ghoshna + self-promo.
// 4. The Hindu 2026-05-20: 'Rangasamy, Ministers take oath as MLAs' — identity confirmation ke liye use kiya,
//    koi work nahi. REJECTED: not a work (shapath-grahan ceremony).
// 5. Sarkari portal check: py.gov.in / lad.py.gov.in par Ozhukarai/K. Narayanasamy ke naam se koi GO PDF,
//    press release ya MLALADS itemized sanction list (post-May 2026) nahi mili. Koi generic MLALADS release
//    vyaktigat kaam attribute nahi karta. REJECTED: no MLA-attributed work.
// 6. Negatives: foundation file me criminalCases 0; K. Narayanasamy (Ozhukarai, AINRC) ke khilaf FIR/chargesheet/
//    janch/adlati aadesh ki koi khabar established media me May 2026+ me nahi mili. Purva-CM wale mamle (item 2)
//    galat vyakti ke hain — negative entry me nahi jode ja sakte. RESULT: koi negative entry nahi.
//
// RETRY-LEADS (next mining round):
// - The Hindu Puducherry section / newindianexpress.com Tamil Nadu edition me 'Nithyanandam' + Ozhukarai
//   ke naam se taza khoj — naya MLA hai, coverage dheere badh sakta hai.
// - lad.py.gov.in par MLALADS itemized MLA-wise sanction lists dekho (generic release tables kaam nahi).
// - Local Pondy Tamil outlets (Dinamani/Dinamalar/Hindu Tamil) coverage ho sakta hai lekin whitelist me nahi —
//   sirf lead ke roop me use, entry ke liye whitelist confirmation lazmi.
puducherryWorks['k-narayanasamy'] = [];

// PUDUCHERRY — Yanam — Malladi Krishna Rao (AINRC, mantri)
// mining-date: 2026-10-19
// seat-karyakal: May 2026+ | period: 2026-2031
// FOUNDATION FILE ME KOI EDIT NAHI — push/deploy NAHI
//
// REJECT-LOG (sabhi may-2026+ ke baad ke items, whitelist outlets par mile):
// 1. REJECT (vibhag-faisla + sirf ghoshna): 'Fish to be provided in midday meals in Puducherry, Yanam government schools' — newindianexpress.com, 2026-09-24. Matsya-mantri ke roop me meeting-chair announcement; UT-wide policy pilot (Puducherry + Yanam me ek-ek school). Koi bhautik sanrachna ka lokarpan/shilanyas nahi, fund disclosure nahi — Yanam-seat ka vyaktigat kaam nahi.
// 2. REJECT (sirf yojana-ghoshna, vyaktigat dastaveji bhoomika nahi): 'Pondicherry University to establish community college in Yanam' — PTI via ET Education, 2026-06-06. Vishvavidyalaya ki apni pahal; Malladi sirf 6-June meeting me Yanam-pratinidhi ke roop me upasthit. College ki modaltiya-shilanyas/lokarpan ki khabar nahi.
// 3. REJECT (sirf maang): Rs 12 crore Yanam (Dept. of Fisheries to NH) road sanction ki request — daily Pioneer / ETV Bharat, 2026-10-08/09. Gadkari se 'positively consider' ki baat hui; sanction/manzuri nahi. Lead me retry-lead banaya gaya hai.
// 4. REJECT (vibhag/UT-stariya): Nitin Gadkari flyover Rs 1500 crore (Puducherry–Cuddalore) — CM ki chitthi; Malladi ne Delhi me haatho-haath saunpi. Puducherry kshetra, Yanam seat nahi.
// 5. REJECT (vibhag/UT-stariya): Cruise market assessment letter, Container Terminal-11 DPR (Sagarmala 2.0) — The Hindu, 2026-10-16. Ports vibhag, chaaron kshetro ka.
// 6. REJECT (samaroh + UT-stariya): Pondy Melange 2027 logo/promotional video — quicknewsnow.in / lokmattimes.com (VMPL/ANI press note, 2026-10-17). Promo video release samaroh; Yanam-seat ka kaam nahi.
// 7. REJECT (chunav-khabar): Deccan Chronicle 'Malladi Krishna Rao Wins Yanam Assembly Seat for Sixth Time', 2026-05-04 — chunav parinam; works-entry nahi.
// NEGATIVES: koi nahi mila. Post-May-2026 FIR/chargesheet/janch ya nyayik vikas MLA ke khilaf established media me nahi mila. Purana 2017 medical-admissions vivaad (TOI, 2017) May-2026+ me koi nyayik vikas nahi — bahar.
//
// RETRY-LEADS:
// A. Rs 12 crore Yanam fisheries-to-NH road: Gadkari ki 10-day deadline (Oct 2026) par sanction ka result — agle karyakal me 'sanction' khabar check karo.
// B. Pondicherry University Yanam community college: kya baad me shilanyas/lokarpan hua aur kya MLA ki vyaktigat bhoomika darj hui — check karo.
// C. Yanam Yanamadurru drain / LIDAR canal projects (Rs 14 crore, Deccan Chronicle 2026-08-17) — ye Andhra Pradesh sarkar (Nimmala Ramanaidu) ke hain; Yanam seat ke mantri se sambandh ho tabhi dhyan do.
//
// PROFILE: khali — shak-par-manan se reject karke lead bana diya gaya.

puducherryWorks['malladi-krishna-rao'] = [];

// PUDUCHERRY — Mangalam — N. Rangasamy (AINRC, CM)
// mining-date: 2026-10-19
// Identity confirmed from src/data/puducherry.ts: N. Rangasamy, AINRC, Mangalam seat,
// retained Mangalam after winning both Thattanchavady and Mangalam in April 2026
// (resigned Thattanchavady May 2026); oath as CM 13 May 2026.
// Name-traps avoided: K. Narayanasamy (Ozhukarai MLA, AINRC) and former CM V. Narayanasamy
// are different people; all candidates cross-checked by seat (Mangalam) before use.
//
// REJECT-LOG (sab entries CM-role / UT-level / pre-term / non-works isliye reject):
// R1. Oath-taking as CM for 5th term, 13 May 2026 (TOI, Scroll, Organiser, freepressjournal)
//     — UT-level event, not a Mangalam-seat work. REJECT.
// R2. Retention of Mangalam seat + resignation from Thattanchavady, 18 May 2026 (The Hindu)
//     — seat-related but an election-procedure fact, not a development work. REJECT.
// R3. Thattanchavady by-election and AINRC retention, Oct 2026 (The Hindu, newindianexpress,
//     abplive, thestatesman) — different seat, election news. REJECT.
// R4. Rs 14,300 crore tax-free UT budget presented by Rangasamy (TOI/newspointapp) — CM as
//     finance minister, UT-level ghoshna, koi Mangalam-specific bhautik kaam nahi. REJECT.
// R5. Cauvery water Mekedatu stand, 29 May 2026 (The Hindu) — UT policy statement. REJECT.
// R6. Pondicherry University 25% quota memorandum, Dec 2025 (Deccan Chronicle) — pre-term
//     AND UT-level. REJECT.
// R7. Bhoomi pooja for Villianur subzone comprehensive water supply scheme (The Hindu,
//     Jan 7, 2026) — pre-term (Jan 2026), karyaakaal May 2026+ ke bahar. REJECT.
// R8. Old ET foundation stories (Rs 10.04 cr Oulgaret water scheme; Rs 8.5 cr Ellaipillaichavady
//     scheme; NH Ellaipillaichavady-Ariyur road) — purvavarti karyakaalon ke, 2026-2031 se bahar,
//     aur kuch Mangalam seat ke bahar bhi. REJECT.
// R9. The Week interview (Apr 2026) — CM statements, koi lokarpan/shilanyas nahi. REJECT.
// R10. IMFL licence irregularities allegations by Congress demanding CBI probe (ainvest) —
//      sirf aarop/maang, koi FIR ya nyayik vikas May 2026+ me Rangasamy par cited nahi. Negative
//      criteria (FIR/chargesheet/janch ya adalat ka aadesh, MLA khud aaropi) poora nahi. REJECT.
// R11. TN minister property-dispute assault case in Puducherry court (menafn/lokmattimes) —
//      aadhaar TN minister par, N. Rangasamy se koi sambandh nahi. REJECT.
// R12. Karnataka HC contempt order against advocate S. Rangaswamy — vyakti alag, CM se sambandh
//      nahi. REJECT.
// R13. Congress-raised corruption charges quoted by ex-CM V. Narayanasamy (The Hindu, Nov 2025)
//      — pre-term political rhetoric, no FIR/judicial development. REJECT.
// R14. PM Modi Puducherry projects Rs 2,700 cr (Mar 2026, business-standard) — pre-term, PM ke
//      projects. REJECT.
// RETRY-LEAD: thehindu.com / newindianexpress.com ke Puducherry city pages par "Rangasamy" +
// "Mangalam"/"Villianur"/"Kurumbapet" searches me abhi koi post-May-2026 lokarpan/shilanyas nahi
// mila; naye khulaase aane par dubara khojna chahiye (py.gov.in press releases bhi check karna).
// Naam-spelling dhyan: media me "N. Rangasamy" aur "N. Rangaswamy" dono use hote hain.

puducherryWorks['n-rangasamy'] = [];

// PUDUCHERRY — Oussudu SC — P. Karthikeyan (INC)
// Mining date: 2026-10-19 (karyakaal shuru May 2026, counting 4 May 2026 — karyakaal ~5.5 mahine)
// SEAT/party verification: puducherry.ts record — naam 'P. Karthikeyan', party INC, seat Oussudu (SC). Wikipedia/Election
// Commission-based sources par bhi yehi seat/party (15,400 votes, margin 4,018). 2011 me bhi isi seat se AINRC MLA rahe,
// 2026 me Congress ticket par jeete — naam-trap se bachne ke liye sirf "Puducherry/Oussudu" sandarbh wale sources dekhe.
// Tamil Nadu ke DMK MLA Vasantham Karthikeyan (Rishivandhiyam, TN) aur Nellithope seat wale DMK ke Karthikeyan (V. Cartigueyane)
// alag vyakti hain — inke naam par aayi khabron ko REJECT kiya.

// KARYAKAAL: sirf May 2026+ (16vi Vidhan Sabha May 2026). Isse pehle ka kuch nahi.

// REJECT-LOG:
// - Whitelist outlets (The Hindu, Indian Express, TOI, NIE, NDTV, India Today, HT, Deccan Chronicle, PTI-est-outlet):
//   May–Oct 2026 me MLA ke baare me koi whitelist outlet me lokarpan/shilanyas/swikriti/ashwasan ki khabar NAHI.
//   Sab coverage chunav-nateeje tak seemit hai (May 4 counting win) — chunav jeet ki khabar = kaam nahi.
// - The Hindu ka Sep 2025 ka article (industry-friendly legislations) pichhli Vidhan Sabha ka hai (May 2026 se pehle) → REJECT.
// - Business Standard/PTI 2015 ka "Members criticise delay in distribution of free house" (house-site pattas par sawal) aur
//   2016 ke model-code complaint (flying squad case) dono purane karyakaal ke hain — May 2026+ se pehle → REJECT.
// - nationpress.com (Congress committees piece, Feb 2026) — aggregator/small portal, whitelist me nahi → REJECT.
// - 2026 ka cabinet expansion / oath coverage me MLA Karthikeyan ka koi naam nahi.
// - Post-term negatives: koi FIR/chargesheet/janch jisme MLA khud aaropi ho, May 2026+ me koi nyayik vikas (adalat ka aadesh/notice)
//   nahi mila. ADR/myneta affidavit par criminal cases ka column pre-term declaration hai, vikas nahi → negative NAHI.
// - MLALADS (Rs 3 crore/seat/varsh, GO Ms.No.14/LAS/A1/2025): kisi bhi source me is MLA ki MLALADS sanction ka ullekh nahi;
//   fund disclosure ka koi aadhaar nahi mila.
// - Local searches (Oussudu June–Aug 2026 inauguration, Oussudu MLA foundation stone/road/water/school) — koi relevant hit nahi.
// - RETRY LEADS (agasat nigrani ke liye): The Hindu / New Indian Express Puducherry desk par "Oussudu" aur "P. Karthikeyan"
//   keyword watch; py.gov.in / lad.py.gov.in press-release section me MLA-sanctioned works ki talash; Assembly session
//   proceedings (Q&A) me MLA ke sawalon ke dastavezi natijon ki jaanch.

puducherryWorks['p-karthikeyan'] = [];

// PUDUCHERRY — Nettapakkam SC — P. Rajavelu (AINRC, mantri)
// Mining date: 2026-10-19
// Record pakka: P. Rajavelu, AINRC, Nettapakkam (SC), age 65, 2026 me 13,665 votes se jeete (INC G. Anbarasan ko 6,689 se haraya).
// Cabinet Mantri — 17 June 2026 ko shapath (Adi Dravidar Welfare + Art & Culture + Housing + IT + Economics & Statistics + Stationery & Printing).
// Tenure: May 2026 se; period sirf 2026-2031.
//
// WORKS = [] — koi valid entry nahi mili (khali profile).
//
// REJECT-LOG (sab karyakaal/mantra-niyam/shreni ke aadhaar par):
// 1. PTI/Business Standard "Foundation laid for drinking water project in Pondy" (23 Jan 2014) — Rs 1.3 crore ka overhead water tank, Krimambakkampet — PRE-TERM (2014), karyakaal se bahar.
// 2. Business Standard PTI "Open spl health camps in rural areas" (Feb 2017) — swine flu health camp ki maang Nettapakkam ke liye — PRE-TERM (2017), karyakaal se bahar.
// 3. Business Standard PTI "Govt focuses on welfare of downtrodden" (May 2015) — Embalam SC seat me housing subsidy vitaran — PRE-TERM (2015), karyakaal se bahar (wo Nettapakkam ke MLA tab the hi nahi).
// 4. newindianexpress.com (9 Oct 2026) "Puducherry seeks centre's aid to upgrade data centre" — Delhi me IT ministers ki meeting me Rajavelu ki baat — MANTRA-NIYAM: UT-stariya vibhagiya faisla, seat ka vyaktigat kaam nahi.
// 5. The Hindu (10 Oct 2026, scoopfeeds mirror) "More than 60 Startups incubated from Atal Incubation Centre" — India Mobile Congress, Delhi me bayaan — MANTRA-NIYAM: vibhagiya/UT-stariya, seat ka kaam nahi.
// 6. The Hindu (9 June 2026) "Puducherry Cabinet expansion soon..." + NIE (17 June 2026) shapath ki khabar + NIE/TOI (Aug 2026) portfolio allocation — mantri-pada ki ghoshna, kaam/lokarpan/shilanyas nahi — REJECT (sirf ghoshna/niyanukti).
// 7. Chunav-khabren (ABP Live, Indian Express, TOI, Oneindia — 4 May 2026) — jeet ki report, works nahi — REJECT.
//
// NEGATIVES: koi nahi mila. myneta.info (candidate_id=114) par 2026 affidavit me criminal cases = 0. Personal roop se aaropi banaane wali FIR/chargesheet/janch ya May 2026+ ka nyayik vikas whitelist media me nahi mila.
//
// RETRY-LEADS (shanka wale, abhi source/seedhi tasdeeq nahi):
// 1. py.gov.in ke press releases / lad.py.gov.in par "Nettapakkam" + Rajavelu — Nettapakkam segment me koi sarkari karyakram (vitaran/lokarpan) ho to wahan milega. (May 2026+ ki seema rahe.)
// 2. The Hindu ke Puducherry pages (https://www.thehindu.com/news/cities/puducherry/) par "Rajavelu" khojo — mantri ke roop me Nettapakkam me koi karyakram hua to wahan milega.
// 3. The New Indian Express Puducherry desk — "Minister Rajavelu" ke naam se August-October 2026 ki khabren — seat-specific ho to hi le.
//
// Note: Rajavelu Cabinet Mantri hain isliye adhikansh khabren UT-stariya hain — Nettapakkam seat ka vyaktigat kaam tabhi jodo jab source me seat ka naam ya segment gaon saaf likha ho.

puducherryWorks['p-rajavelu'] = [];

// PUDUCHERRY — Karaikal North — P.R.N. Thirumurugan (AINRC)
// Mining date: 2026-10-19
// Karyaakaal scope: SIRF May 2026 ke baad (16vi Vidhan Sabha). Period: 2026-2031.
//
// MLA status: 4 May 2026 ko Karaikal North se chauthi baar jeet (12,731 votes;
// nearest rival A.M. Ranjith, INC — 10,078 votes; jeet ka antar 2,653 votes).
// May 2026 ke baad mantri pad NAHI — 13 May 2026 ko nayi cabinet bani aur
// 17 June 2026 ko cabinet expansion hua (P Rajavelu, V P Sivakolundhu, G N S
// Rajasekaran inducted); Thirumurugan mantri-mandal me wapas NAHI liye gaye.
// Ab sirf MLA (Karaikal North).
//
// REJECT-LOG (padhi hui cheezen, qualify nahi ki):
// 1. Election jeet (4 May 2026) — election result work entry NAHI; list me nahi.
// 2. The Hindu (Mar 2024): NABARD-funded Karaikal sadak yojnaon ka shilanyas —
//    us samay Thirumurugan mantri ke roop me maujood the, lekin event May 2026
//    se PEHLE; period ke bahar; reject.
// 3. newindianexpress (June 2024): Karaikal me PWD sinchai-nahar gaad-nikaal
//    kaam ka aarambh — us samay mantri ke roop me jhande se shuru kiya;
//    May 2026 se pehle; reject.
// 4. newindianexpress (Feb 2024): JIPMER Karaikal campus udghatan — PM Modi ka
//    karyakram; Thirumurugan sirf maujood the; reject (dusre neta ka karyakram,
//    aur period se pehle).
// 5. The Hindu (Mar 2026): 'N.R. Congress pitches united MLAs plank for
//    Karaikal development' — chunav-prachar me Thirumurugan ke dawe/prastav
//    (green harbour, Nandalar-Vanjur road, synthetic track, beach works);
//    sirf ghoshna/prastav, koi dastavezi nateeja nahi; reject.
// 6. Business Today / Economic Times / Times Now live-blogs — election news,
//    work nahi; reject.
// 7. Tsunami memorial (Dec 2025, adda247 summary) me shraddhanjali —
//    samaroh/shraddhanjali, work nahi; reject.
// 8. newindianexpress (May 2025): senior-citizens home Karaikal Muthiyor Illam
//    udghatan — us samay mantri the, lekin May 2026 se pehle; reject.
//
// NEGATIVES: koi qualifying negative nahi mili (neeche lead dekho).
// ADR 2026 winning-candidates report (self-declared affidavit) ke anusaar
// Thirumurugan ne 2 criminal cases ghoshit kiye hain:
// (a) FIR Cr. No. 121/2002, T.R. Pattinam P.S. — IPC 379 + Sec 39 Indian
//     Electricity Act 1910 — C.C. 88/2005, Judicial Magistrate-II Karaikal;
//     charges framed 23 Apr 2015 (pending case);
// (b) IPC 294 + 353 me 31 Jul 2014 ko conviction (S.T.R. 682/2009, JM-II
//     Karaikal; 1 saal simple imprisonment + Rs 1000 fine IPC 353 ke liye);
//     appeal — Criminal Appeal No. 5/2014, Sessions Judge Karaikal.
// Ye sirf self-declared affidavit ke aankde hain — kisi bhi whitelisted outlet
// (The Hindu / Indian Express / HT / NDTV / India Today / TOI / Deccan
// Chronicle / PTI-on-outlet) me in cases par FIR-report ya May 2026 ke baad
// ka nyayik vikas (adalat ka aadesh/notice/sunvai) nahi mila. 2021 me
// newindianexpress ne ADR ke hawale se IPC 307 (attempt to murder) ka
// self-declared charge likha tha, lekin wo bhi sirf affidavit-data tha.
// Isliye negative-entry ke yogya NAHI.
//
// RETRY-LEADS:
// 1. Upar wale 2 criminal cases me May 2026 ke baad koi nyayik vikas hua ho
//    (adalat ka aadesh/notice/appeal faisla) to whitelisted outlet ki report
//    dhoondho; mile to negative entry banao.
// 2. Karaikal North ke MLALADS sanction lists — lad.py.gov.in / py.gov.in par
//    GO PDF dhoondho (GO Ms.No.14/LAS/A1/2025 — Rs 3 crore/seat/varsh).
// 3. The Hindu Trichy/Karaikal edition aur newindianexpress ke Karaikal pages
//    par May 2026 ke baad 'Thirumurugan' keyword se dobara check karo — ab
//    sirf MLA hain, isliye coverage kam hogi.
// 4. Srot: ADR 2026 report (canonical PDF):
//    https://adrindia.org/sites/default/files/Puducherry_Assembly_Elections_2026_Criminal_and_Financial_background_details_of_Winning_Candidates_Eng.pdf

puducherryWorks['prn-thirumurugan'] = [];

// PUDUCHERRY - Indira Nagar - P.V. Aroumougame @ AKD (AINRC)
// Mining date: 2026-10-19
//
// Record (src/data/puducherry.ts se padha, pakka):
//   slug: pv-aroumougame | name: P.V. Aroumougame @ AKD | party: All India N.R. Congress
//   seat: Indira Nagar (no. 8, Puducherry district) | 16vi Vidhan Sabha 2026-2031
//   2026 me 12640 votes se jeete, margin sirf 584 (is batch ka sabse kam margin).
//   Pehle Government Whip the (15vi Vidhan Sabha, The Hindu Mar 2026).
//
// NATEEJA: Khaali profile - 0 entries.
//
// REJECT-LOG (8 search rounds; tamam variations: Aroumougame / Arumugam / A.K.D. Arumugham / AKD Arumugam):
// 1. Sirf election-result pages mile (TOI, Indian Express, Oneindia, moneycontrol, news18, mapsofindia, ADR PDFs,
//    myneta affidavit). Koi May 2026+ ka kaam/inauguration/shilanyas/gooshna news NAHI.
// 2. PTI item "7 AINRC MLAs urge Speaker for statehood" (Jul 9) - 2025 ka hai (15vi Vidhan Sabha, pre-term), reject.
// 3. LatestLY/NewsDrum "motion of thanks seconded by government whip A K D Arumugham" - Aug 2022 ka hai, pre-term, reject.
// 4. The Hindu "AINRC fixes candidates for 16 seats" (24 Mar 2026) - pre-poll candidate list; sirf "Government Whip
//    V. Aroumougame from Indira Nagar" naam aaya. Chunav announcement - works NAHI, reject.
// 5. Wikipedia A.K.D. Arumugam stub - sirf career facts, koi works news NAHI.
// 6. py.gov.in press-release search me koi Aroumougame entry nahi mili.
// 7. Standard Post Puducherry PDFs (June/July/Aug 2026 editions) search index me aaye lekin content extraction
//    me unme MLA ka naam verify nahi ho saka - whitelisted outlet bhi nahi, isliye istemal NAHI.
// 8. NEGATIVES: koi FIR/chargesheet/adlat-aadesh/chunaav-yachika May 2026+ me established media me NAHI mili.
//    myneta 2026 affidavit: "No criminal cases". Isliye negatives = 0.
// 9. MLALADS fund disclosure: koi itemized sanction list mili nahi; fund mention ki zaroorat nahi padi.
//
// RETRY LEADS:
// R1. py.gov.in > Information & Publicity > Press Releases (May-Oct 2026) me "Indira Nagar" khojo - wahan se
//     kabhi kabhi local shilanyas/lokarpan ki releases milti hain jo search index me nahi aati.
// R2. The Hindu Puducherry section (tag: Puducherry, Jul-Sep 2026) me Indira Nagar constituency news khojo -
//     tender wale firsttender hit se pata chala ki Indira Nagar me Priyadarshini Nagar (Gorimedu) road works
//     ke tenders aaye hain; agar inme se kisi ka lokarpan/shilanyas MLA dwara hua ho to entry bane.
// R3. Next run me "AKD Arumugam" spelling se Tamil-media-English portals (whitelist wale) dobara try karo.

puducherryWorks['pv-aroumougame'] = [];

// PUDUCHERRY — Bahour — R. Senthil Kumar (DMK)
// Mining date: 2026-10-19. Worker brief: sirf May 2026+ (karyakaal 2026-2031).
// NATEEJA: Koi qualifying work entry NAHI mili — profile khali (puducherryWorks['r-senthil-kumar'] = [];).
// 10 search rounds: inauguration/foundation-stone/road/water/school/assembly-question/MLALADS/negative/controversy/protest variations.
//
// REJECT-LOG (shanka ho to reject — ye sab reject hue):
// R1. The Hindu, 16 Jul 2025: CM ne Bahour me Rs ~2 crore ka bus stand (Rurban Mission) ka lokarpan kiya; Senthil Kumar sirf "attended the inaugural".
//     REJECT: (a) pre-term (Jul 2025); (b) lokarpan CM ne kiya, MLA ki vyaktigat dastaveji bhoomika nahi — dusre neta ke karyakram me maujoodgi.
// R2. The Hindu, 6 Jun 2025: Bahour mini bus stand + indoor stadium abhi khula nahi; MLA ne "government se request karoonga" kaha.
//     REJECT: (a) pre-term; (b) sirf maang/ashwasan, koi dastavezi nateeja nahi.
// R3. Devdiscourse (agencies), 12 Aug 2024: CM ne Sadan me bataya ki excise revenue se sadkein/suvidhayein; R Senthil Kumar ne sawal uthaya tha.
//     REJECT: (a) pre-term; (b) Vidhansabha sawal ka jawab sarkari neeti ka aam bayan hai — Bahour-specific dastavezi nateeja nahi; credit capped bhi nahi ban sakta.
// R4. New Indian Express, 31 Jan 2024: Velrampet-Olandai/Murungappakkam jheel pradushan par DMK ka bhook-hartal; Senthil Kumar shamil.
//     REJECT: (a) pre-term; (b) abhiyaan/protest — koi bhautik sarkari sanrachna ka lokarpan/shilanyas/swikriti nahi.
// R5. The Hindu, 20 May 2026: Shapath Malayalam me (French request reject); TOI, May 2026: 13 May 2026 ko DMK legislature party ke deputy leader chune gaye.
//     REJECT: samaroh/rajneetik pad — development work nahi. (NOTE: The Hindu ne naam "A. Senthil Kumar" likha — galat lagta hai; foundation/myneta/Wikipedia ke mutabik R. Senthil Kumar.)
// R6. lad.py.gov.in GO (go-ms-2025.pdf): MLA-LAD Scheme FY 2024-25 (II) + 2025-26 (I) ke tahat Bahour (BCP) ko BE 2025-26 me 215.15 lakh.
//     REJECT: constituency-level fund release; MLA-vishesh itemized sanction list nahi — kisi ek kaam ka credit/fund disclosure nahi ban sakta.
// R7. Koi bhi May 2026+ ka bhautik kaam (lokarpan/shilanyas/swikriti/kaam-shuru) — sadak/paani/bijli/school/aspataal — whitelisted media me NAHI mila.
//     Negatives bhi koi nahi: koi FIR/chargesheet/janch, koi nyayik vikas, koi established-media aarop May 2026+ me nahi. (Foundation: declared criminal cases 0.)
//
// RETRY-LEADS (parent ke liye; 2-3 mahine baad ya Tamil-media sweep par):
// L1. lad.py.gov.in par FY 2026-27 ke MLA-LAD itemized sanction lists jab publish hon — Bahour BCP ke kaam valid honge.
// L2. 16vi Vidhan Sabha ke sessions (2026 ke monsoon/winter sessions) me unki Bahour-specific maangon ke dastavezi nateeja/ashwasan.
// L3. The Hindu/New Indian Express Puducherry editions me "Bahour" keyword par Oct 2026 ke baad ki coverage (lokarpan/shilanyas).
// L4. Tamil press (Dinamani/Dinakaran/Maalai Malar) — whitelist me nahi, isliye worker ne khola nahi; browser-agent se sweep karayi ja sakti hai.
//
// pehchan pakki: R. Senthil Kumar (DMK), Bahour, 2026 dobara vijeta (10520 votes, margin 2397), age 47, no declared criminal cases (foundation record se).
puducherryWorks['r-senthil-kumar'] = [];

// PUDUCHERRY — Kalapet — Senthil Ramesh (DMK)
// Mining date: 2026-10-19 (karyakaal shuru May 2026; counting 4 May 2026 — karyakaal ~5.5 mahine)
// SEAT/party verification: puducherry.ts record — naam 'Senthil @ Ramesh', party DMK (Dravida Munnetra Kazhagam),
// seat Kalapet. Indian Express/TOI/Wikipedia par bhi yehi seat/party (12,069 votes, margin 447, BJP ke
// sitting MLA P.M.L. Kalyanasundaram ko haraya). 2021 me yehi vyakti independent the (9,769 votes, runner-up) —
// 'A. Senthil @ Ramesh' naam-trap se bachne ke liye sirf Kalapet sandarbh wale sources dekhe.
// KARYAKAAL: sirf May 2026+ (16vi Vidhan Sabha May 2026). Isse pehle ka kuch nahi.

// REJECT-LOG (senthil-ramesh):
// 1. Chunav coverage (TOI, Indian Express, Business Today, ABP, Oneindia — May 2026): jeet ki khabar,
//    candidate background, vote margin. Chunav jeet = kaam nahi → REJECT (pre-term/term-start event).
// 2. New Indian Express "DMK to contest 13 seats, allots 1 to VCK in Puducherry" (25 Mar 2026):
//    "A Senthil (Kalapet)" candidate list me naam — ticket ghoshna, karyakaal se pehle, kaam nahi → REJECT.
// 3. ADR "Criminal and Financial background details of Winning Candidates" (adrindia.org PDF, Page 24):
//    Senthil Alias Ramesh — 11 cases (4 charges extortion IPC 386, 1 kidnapping IPC 364A, 1 murder IPC 302),
//    charges framed NAHI. Ye halafname ki pre-term declaration hai — May 2026+ me is par koi vikas
//    (FIR/chargesheet/janch/adalt ka aadesh) nahi mila → negative NAHI. "Halafname ke pending mamle akele negative NAHI."
// 4. myneta.info candidate page (candidate_id=122) — affidavit details; karyakaal vikas nahi → REJECT as entry.
// 5. Name-collision: "Senthil" par aane wale sab TN ke ex-minister Senthil Balaji (TASMAC/MLA-poaching/PMLA) ke
//    mamle hain — vyakti galat (Kalapet ke DMK MLA se koi sambandh nahi) → REJECT.
// 6. py.gov.in archive tenders (NIT 8, 14, 17 — Kalapet seat me road/cremation shed, notice 09-02-2026):
//    Oulgaret Municipality ke kaam, May 2026 se pehle aur bina MLA ki vyaktigat dastavezi bhoomika → REJECT.
// 7. CM speech document (py.gov.in, Tsunami Rehabilitation Colony Kalapet water supply — Rs 97.19 crore):
//    sarkari yojana lekin MLA ki vyaktigat bhoomika/fund-role ka ullekh nahi → REJECT (fund+bhoomika undisclosed).
// 8. MLALADS GO Ms.No.14/LAS/A1/2025 (lad.py.gov.in, 13-08-2025 — Rs 3 crore/seat/varsh ki pushti):
//    sarkari dastavez lekin is MLA ki kisi sanction list ka ullekh nahi — itemized sanction list nahi mili → fund disclosure ka koi aadhaar nahi.
// 9. Local searches (Kalapet MLA June–Sep 2026 inauguration/foundation stone, "Senthil Ramesh" Puducherry development,
//    newindianexpress/thehindu/toi Kalapet MLA 2026) — whitelist outlet me koi relevant hit nahi; sab chunav-coverage.
// 10. Negatives: established media me May 2026+ me MLA khud aaropi ho — aisa koi FIR/chargesheet/janch ya
//     nyayik vikas nahi mila. Party karyawahi/family/parivar — kuch nahi. Chunav-yachika — nahi.
//
// RETRY-LEADS (agasat nigrani ke liye):
// - The Hindu / New Indian Express Puducherry desk par "Kalapet" + "Senthil" keyword watch.
// - lad.py.gov.in / py.gov.in press-release section me MLA ke MLALADS sanction orders (itemized GO).
// - Assembly session proceedings (Q&A) me MLA ke sawalon ke dastavezi natije/ashwasan.
// - newstodaynet.com (News Today) ka Kalapet constituency profile — election-special page tha (2 May 2026), karyakaal coverage nahi; local source whitelist se bahar.

puducherryWorks['senthil-ramesh'] = [];

// PUDUCHERRY — Mahe — T. Ashok Kumar (IND, nirdaliya)
// Mining date: 2026-10-19 (karyakaal May 2026 se; chunav jeet 4 May 2026: 8,375 votes, margin 1,115)
// Foundation (src/data/puducherry.ts, bina edit): Adv. T. Ashok Kumar, Mahe seat 29,
// party Independent, INC ke Ramesh Parambath ko haraya. Pesha: Professor/rent/agriculture.
// Koi criminal case nahi (ADR/myneta).

// REJECT-LOG:
// - Whitelisted outlets (The Hindu, Indian Express, TOI, NDTV, India Today, Deccan Chronicle, NIE, PTI)
//   me sirf chunav coverage: 4 May 2026 win announcement (The Hindu live blog "Independent candidate
//   Ashok Kumar wins in Mahe", Indian Express result page, TOI constituency page). Chunav jeet ki khabar
//   = kaam nahi → REJECT. Yehi stories wiki/citation me bhi hain (Indian Express 4 May 2026 = sabse
//   majboot election source), lekin works ke liye koi bhi event post-May-2026 nahi.
// - Mahe development stories: "renovated railway station, upgraded hospitals and schools, approved road works,
//   Mahe walkway project delays, Tagore Park neglect" (The Hindu, Dec 2025 — "As Kerala votes, Mahe cries
//   for its own election") — sab Ramesh Parambath ke karyakaal/pre-term ke sandarbh me hain. JIPMER hospital
//   Mahe ki khabar LG announcement hai, MLA ki vyaktigat bhoomika nahi → REJECT (May 2026 se pehle ka sandarbh + seat-bahar bhoomika).
// - "Ashok Kumar" searches me Ashok Kumar Rai (Puttur, Karnataka MLA) ke results aate hain — alag vyakti,
//   Puducherry/Mahe se sambandh nahi → discard.
// - Budget session Aug 2026 (motion of thanks debate): Deccan Chronicle ki coverage me Mahe MLA ka naam ya
//   Mahe-seat ka koi ullekh nahi — seat-specific maang/dastavezi nateeja nahi mila → lead banane layak bhi nahi.
// - MLALADS (Rs 3 crore/seat/varsh): kisi bhi source me is MLA ki MLALADS sanction/itemized list ka ullekh
//   nahi — fund disclosure ka koi aadhaar nahi mila.
// - Negatives: "Ashok Kumar Mahe FIR/court/case" searches me sirf unrelated Ashok Kumars aaye (Delhi HC
//   CBI case, Odisha complaint etc.) — is MLA ke khilaf koi FIR/chargesheet/nyayik vikas nahi mila.
//   ADR (2026): koi criminal case nahi (foundation note se pakka).
// - Aggregator/chhote portals (bharathorizon, news24online, odishabytes etc.) par bhi sirf election win
//   coverage — whitelist criteria poora nahi karta → REJECT.
// RETRY-LEADS (May 2026+ works, koi praman abhi nahi):
// - py.gov.in press releases me "Ashok Kumar" + Mahe keyword par baad me search karna (lokarpan/shilanyas
//   releases sarkari badge ke liye sabse accha source).
// - The Hindu / NIE Puducherry section me "Mahe" keyword archive check (Mahe Joint Forum of Residents
//   Associations ke Dec 2026 protest demands: roads, street lighting, walkway — agar MLA ne us par koi
//   swikriti/lokarpan kiya ho to).
// - MLALADS list (GO Ms.No.14/LAS/A1/2025 ke tahat Mahe seat allocations) lad.py.gov.in par dhoondhna.

puducherryWorks['t-ashok-kumar'] = [];

// PUDUCHERRY — Neravy T.R. Pattinam — T.K.S.M. Meenatchisundaram (BJP)
// Mining date: 2026-10-19 (worker: tksm-meenatchisundaram)
// Foundation record verified: T.K.S.M. Meenatchisundaram, Bharatiya Janata Party,
// MLA, Neravy T.R. Pattinam (tenure 2026-2031, src/data/puducherry.ts line 862).
// KARYAKAAL FILTER: sirf May 2026 ke baad ke kaam/ghatnayein.
//
// REJECT-LOG (6 search rounds, sab election coverage thi):
// 1. R1 "TKSM Meenatchisundaram MLA Neravy Pattinam works inaugurated" —
//    sirf election result pages (Oneindia, Indian Express, News18). Kaam par kuch nahi.
// 2. R2 "Meenatchisundaram Neravy T R Pattinam MLA" — TOI/Indian Express election
//    result + Wikipedia biography (2026 chunav jeet, 10,818 votes). Works NAHI.
// 3. R3 '"Meenatchisundaram" MLA Karaikal inaugurated' — election lists, ADR report,
//    pre-election candidate lists. Kaam NAHI.
// 4. R4 '"Meenatchisundaram" MLA foundation stone Puducherry' — ADR assets report
//    (10 crore+ assets, 0 criminal cases), The Hindu pre-election candidate list,
//    election results. Kaam NAHI.
// 5. R5 "Meenatchisundaram Neravy MLA thehindu.com 2026" + "newindianexpress.com" —
//    sirf 2026 chunav coverage. Whitelisted outlets par is MLA ke karyakaal (May 2026+)
//    ke kisi lokarpan/shilanyas/swikriti ka koi report NAHI.
// 6. R6 "Neravy TR Pattinam MLA road drinking water project Puducherry government
//    2026" — mila LG ka budget-speech (MLALADS 2 se 3 crore), lekin is MLA ki
//    vyaktigat bhoomika ka koi ullekh NAHI — REJECT (bina MLA ki dastaveji bhoomika).
// 7. Negative check "Meenatchisundaram Neravy MLA case FIR arrest probe controversy" —
//    saare parinaam alag-alag vyaktiyon ke hain (Tamil Nadu ke anya Meenakshi Sundaram
//    cases). myneta.info/ADR (Puducherry2026 winners list): Tksm Meenatchisundaram ke
//    against CRIMINAL CASES = 0. Koi negative entry layak ghatna NAHI mili.
//
// NOTE: MLA pratham-baar chune gaye hain (May 2026 me seat sambhali), isliye abhi tak
// whitelisted sroton me koi dastaveji kaam ka praman NAHI. Profile khaali rakhi gayi hai.
//
// RETRY-LEADS: (a) agle 3-6 mah me "Meenatchisundaram Neravy" par phir search — MLALADS
// (Rs 3 crore/seat/varsh, GO Ms.No.14/LAS/A1/2025) sanction lists lad.py.gov.in par
// aane par itemized entries ban sakti hain; (b) py.gov.in press-release archive me
// Karaikal/Neravy ke lokarpan/shilanyas events me MLA ki maujoodgi check karo —
// sirf maujoodgi ho to REJECT (vyaktigat bhoomika chahiye).

puducherryWorks['tksm-meenatchisundaram'] = [];

// PUDUCHERRY — Nellithope — V. Cartigueyane (DMK)
// Mining date: 2026-10-19
// Foundation record verified from src/data/puducherry.ts: slug 'v-cartigueyane',
// name 'V. Cartigueyane', party DMK (Dravida Munnetra Kazhagam), seat Nellithope.
// Election: 8226 votes, margin 850 over Independent Omsakthisekar (2026).
// Karyakaal: May 2026 se 16vi Vidhan Sabha. Opposition MLA (DMK; sarkar AINRC-BJP gathbandhan).
//
// REJECT-LOG (sab whitelist me koi qualified work-report nahi mili):
// 1. Election result reports (May 2026: Indian Express, Times of India, The Hindu,
//    Business Today, Moneycontrol, Oneindia) — chunav coverage, karyakaal ka kaam nahi.
// 2. The Hindu 26-Jun-2026: Omsakthisekar ne Cartigueyane ki jeet ko Madras High
//    Court me election petition se challenge kiya; yahi ek petition numbered hui.
//    REJECT as negative — rule: 'Chunav-yachika akele NAHI'. MLA aaropi nahi,
//    FIR/chargesheet nahi, sirf yachika. Retry lead: petition ke trial/order ki
//    khabar (news badge) par nazar rakho — faisla aaye to negative-relevant ho sakta hai.
// 3. Pre-term (2021) race coverage (The Hindu 16-Mar-2021) — karyakaal se pehle, NA.
// 4. Nellithope constituency water-supply revamp (LG address, py.gov.in cmfile2026eng,
//    Rs 92.74 crore across Uppalam/Kamaraj Nagar/Ozhukarai/Nellithope) — sarkari
//    yojana ka kaam, MLA ki vyaktigat dastavezi bhoomika ka koi saboot nahi. Credit nahi.
// 5. MLA-LAD allocation sheet (lad.py.gov.in GO-Ms-2025) — generic allocation
//    (Rs 215.15 lakh/seat), koi itemized Cartigueyane work-list nahi. Fund data
//    foundation file me pehle se darj hai.
// 6. Facebook/YouTube/aggregator hits — whitelist REJECT, khoje bhi nahi gaye.
// 7. Nellithope road/drain tenders (firsttender/pondicherry-tenders) — nagar-palika
//    tender, MLA ki bhoomika dastavezi nahi. REJECT.
//
// Fund note: foundation me MLALADS Rs 3 crore/seat/varsh darj hai; is worker ko koi
// itemized sanction list nahi mili jisme MLALADS ka zikr ho, isliye koi fund entry nahi.
//
// Negatives: KOI NAHI (election petition alone = negative nahi; koi FIR/chargesheet/
// nyayik vikas MLA ke khilaf nahi mila).
// Retry-leads: (a) election petition trial/order (The Hindu follow-up);
// (b) 2026-27 MLA-LAD itemized work list lad.py.gov.in par jab publish ho;
// (c) Nellithope me koi lokarpan/shilanyas jisme MLA ki maujoodgi ho (news badge source se).

puducherryWorks['v-cartigueyane'] = [];

// PUDUCHERRY — Muthialpet — Vaiyapuri Manikandan (AINRC)
// Mining date: 2026-10-19
// Record verified from src/data/puducherry.ts: Vaiyapuri Manikandan, party All India N.R. Congress (AINRC),
// constituency Muthialpet, tenure 2026-2031, post MLA. Age 44, 2026 vijeta (8,382 votes, margin 952).
// Umayal Agencies ke owner; 1 criminal case (3 serious IPC — IPC 452/324/506, Muthialpet PS case 2022, ADR);
// koi conviction nahi. Pehle AIADMK se 2016 me isi seat par jeet chuke; 2026 me AINRC ticket par jeete.
// KARYAKAAL: sirf May 2026+ (16vi Vidhan Sabha May 2026 me bani).
// 9 search rounds (browser.search + news vertical; exact-name queries, alternate spelling "Vayyapuri",
// "Muthialpet MLA" variants, works/fund/assembly/speech angles). Whitelisted outlets par is MLA ka koi
// lokarpan/shilanyas/swikriti/fund-release ya assembly-ashwasan May 2026+ me nahi mila.
// Result: ZERO valid entries — khali profile theek hai.
// Bhaasha: Roman-script Hinglish titles/comments (Devanagari/Tamil script bilkul nahi). Currency Rs.

// REJECT-LOG (har reject candidate ek-numbered point):
// 1. UNI (4 May 2026) "AINRC candidate Vayyapuri Manikandan wins Muthialpet seat in Pondy" — jeet ki
//    khabar (8,382 votes, margin 952). REJECT: chunav result works entry nahi.
//    Source: http://www.uniindia.com/ainrc-candidate-vayyapuri-manikandan-wins-muthialpet-seat-in-pondy/south/news/3831706.html
// 2. TOI / Indian Express / ET / ABP Live / Business Today liveblogs (4-5 May 2026) — counting updates,
//    winner lists. REJECT: chunav coverage; koi kaam/ghatna nahi.
// 3. UNI (22 Mar 2026) "Vayyapuri Manikandan quits AIADMK ahead of Apr 9 polls, likely to join AINRC" —
//    REJECT: May 2026 se pehle + party-switch, seat-works nahi.
//    Source: https://uniindia.com/vayyapuri-manikandan-quits-aiadmk-ahead-of-apr-9-polls-likely-to-join-ainrc/south/news/3783368.html
// 4. The Hindu (24 Dec 2022) "Case against former legislator Vayyapuri Manikantan and 14 others for
//    rioting" — Muthialpet PS case (IPC 143/147/452/427/324/506; Ezhaimariamman Koil Street pub-virodh).
//    REJECT: pre-term (2022); wahi case jo background me darj hai. Negative check neeche.
//    Source: https://www.thehindu.com/news/cities/puducherry/case-against-former-legislator-vayyapuri-manikantan-and-14-others-for-rioting/article66300886.ece
// 5. NeVA notice (Legislative Assembly Secretariat, dt. 25.08.2026) — Vaiyapuri Manikandan ko
//    2026-27 ke liye Panel of Presiding Members me nominate kiya gaya. REJECT: vidhan-sabha ki aantrik
//    duty/niyukti hai — bhautik sarkari sanrachna ka lokarpan/shilanyas/swikriti ya fund nahi.
//    Source: https://neva.gov.in/NeVA/PY/FileStructures//Notices/64bba601-04c3-4b21-9dad-fad65121f8ee.pdf
// 6. New Indian Express (11 Dec 2020) — AIADMK MLA ke roop me PWD Assistant Engineer ke khilaf
//    breach-of-privilege shikayat (TV Nagar flooding, Karuvadikuppam canal). REJECT: pre-term (2020);
//    maang/shikayat bhi kaam nahi.
//    Source: https://www.newindianexpress.com/states/tamil-nadu/2020/Dec/11/puducherry-mla-files-breach-of-privilege-complaint-against-pwd-official-2234792.html
// 7. Business Standard (PTI, 19 Jul 2016 + 29 Oct 2017) — market building kholne ki maang par road-roko
//    aur Lt. Governor Kiran Bedi ke Muthialpet daure par pradarshan; The Statesman (12 Mar 2019) CM relief
//    fund cheques ki ECI-shikayat; TOI (2019) Singapore visit par CBI maang. REJECT: sab pre-term
//    (2016-2019) — virodh/shikayat, koi kaam nahi.
// 8. MLALADS (Rs 3 crore/seat/varsh, GO Ms.No.14/LAS/A1/2025): lad.py.gov.in ka release statement
//    2025 (dt. 27.06.2025) pichhli Vidhan Sabha ka hai — is MLA/seat ki itemized sanction list usme nahi.
//    REJECT: fund disclosure ka aadhaar nahi mila (16vi Sabha ki release ka sarkari dastavez abhi nahi mila).
// 9. firsttender.com (crawl Oct 2026) — Bharathidasan Govt College for Women library block me UPVC windows
//    ka sub-work tender (Muthialpet constituency). REJECT: aggregator (whitelist me nahi) + tender paper me
//    MLA ki koi vyaktigat bhoomika/fund-disclosure nahi.
// 10. "Puducherry MLA Manikandan MLALADS works sanctioned" jaise fund-angle queries par koi whitelisted
//     source me is MLA ke kisi sanction/allotment ka ullekh nahi → entry hi nahi bani.
//
// NEGATIVE CHECK:
// - myneta.info + adrindia.org (ECI affidavit): 1 criminal case — Muthialpet PS 2022 (IPC 452/324/506);
//   koi conviction nahi. Ye mamla pre-term hai aur May 2026+ me is par koi NYAYIK VIKAS (chargesheet/
//   charges-framed/adlaat ka aadesh/notice) kisi established media me nahi mila. → Negative entry NAHI.
// - Naya FIR/case/janch (May 2026+) is MLA ke khilaf kisi whitelisted outlet me report nahi hua.
// - Party karyawahi ya chunav-yachika ka koi mamla nahi.
//
// RETRY-LEADS:
// (a) lad.py.gov.in press-release/GO archive me 16vi Vidhan Sabha ki MLALADS release (2026-27 first phase)
//     ka periodical search — Muthialpet seat ki itemized sanction list mil sakti hai (abhi release hui hi
//     nahi lagti).
// (b) The Hindu Puducherry bureau / newindianexpress.com ki Jun-Oct 2026 ki e-paper archive me
//     "Muthialpet" keyword check — PWD ke desilting kaam (Oct 2026, Rs 1.99 crore urban) me MLA ki bhoomika
//     ka ullekh ho sakta hai (abhi koi MLA-ulleg nahi mila).
// (c) NeVA Puducherry Assembly session (Aug/Sep 2026) ke starred/unstarred questions — MLA dwara uthaaye
//     gaye Muthialpet muddon ka sarkari jawab/ashwasan mil jaye to "ashwasan" entry ban sakti hai (credit capped).
// (d) Panel-of-Presiding-Members duty (point 5 upar) — niyukti hai, works entry kabhi nahi banegi.

puducherryWorks['vaiyapuri-manikandan'] = [];

// PUDUCHERRY — Raj Bhavan — Vignesh Kannan (DMK)
// Mining date: 2026-10-19
// Record verified from src/data/puducherry.ts: Vignesh Kannan, party Dravida Munnetra Kazhagam (DMK),
// constituency Raj Bhavan, tenure 2026-2031, post MLA. Age 27, 2026 vijeta (7,304 votes, margin 287).
// KARYAKAAL: sirf May 2026+ (16vi Vidhan Sabha May 2026 me bani). Naam-trap dhyaan: seat ka naam "Raj Bhavan"
// LG-nivaas (Lt. Governor) ke Raj Bhavan se alag hai — sirf MLA ki seat-se sambandhit entries ginni jati.
// 8 search rounds (browser.search + news vertical; exact-name queries + "MLA Puducherry" + assembly +
// MLALADS-adjacent variants). Whitelist outlets par is MLA ka koi lokarpan/shilanyas/swikriti/inspection
// report nahi mila. Result: ZERO valid entries — khali profile theek hai.
// Bhaasha: Roman-script Hinglish titles/comments (Devanagari/Tamil script bilkul nahi). Currency Rs.

// REJECT-LOG (har reject candidate ek-numbered point):
// 1. PTI via ThePrint (31 Aug 2026) "Opposition DMK legislator stages novel protest against traffic congestion"
//    — Vignesh Kannan ne traffic congestion ke virodh me apne ghar se Assembly tak paidal chalkar virodh
//    pradarshan kiya. REJECT: virodh-pradarshan hai — bhautik sanrachna ka lokarpan/shilanyas/swikriti ya
//    vidhansabha-dastavezi ashwasan nahi; works-ginna-yogya nahi. Source:
//    https://theprint.in/india/opposition-dmk-legislator-stages-novel-protest-against-traffic-congestion/3030026/
// 2. GIRI showroom opening (25-26 Sep 2026; fmlive.in / expressnews.asia / businessmicro.in — press release
//    copies) — Shri Vignesh Kannan, MLA "Distinguished guests" me upasthit; Chief Guest CM N. Rangasamy ne
//    niji showroom ka udghatan kiya. REJECT: dusre ke niji karyakram me maujoodgi; MLA ka koi karyakram/fund
//    nahi; outlets whitelist me bhi nahi. Source: https://www.fmlive.in/giri-opens-39th-showroom-and-cultural-hub-on-mg-road-puducherry/
// 3. Oath-taking stories (TOI, 14 May 2026, articleshow/131229606.cms) — shapath ke dauran "Kannan Pugazh
//    Onguga" ka naara. REJECT: shapath-karyakram/naara — kaam nahi.
// 4. Election coverage (TOI / Indian Express / TNIE liveblog, 4-5 May 2026) — Raj Bhavan jeet 7,304 votes,
//    margin 287. REJECT: chunav result works entry nahi.
// 5. Pre-term (The Hindu, 19 Mar 2026) DMK me shamil hone ki khabar (Stalin ke samaksh Chennai me) —
//    REJECT: May 2026 se pehle + party-joining, seat-works nahi. Source:
//    https://www.thehindu.com/elections/puducherry-assembly/independent-mla-representing-thirubhuvanai-joins-dmk/article70762325.ece
// 6. Poll preview stories (Asianet Newsable 4 Apr 2026, Mathrubhumi 4 Apr 2026) me Raj Bhavan ke mudde
//    (traffic, drainage) — REJECT: pre-term chunav coverage, MLA ke karyakram ki khabar nahi.
// 7. Negative check (myneta.info + adrindia.org, ECI affidavit): 2 criminal cases — FIR 1911/2020 aur
//    1912/2020 (Auroville PS, IPC 147/506(i)/143, Sec 51 DM Act 2005), charges framed NAHI, conviction NAHI.
//    Dono cases 2020 ke = pre-term, aur May 2026+ me koi NYAYIK VIKAS (chargesheet/charges-framed/adlaat ka
//    aadesh/notice) nahi mila. → Negative entry NAHI. Party karyawahi ka koi mamla nahi.
// 8. MLALADS (Rs 3 crore/seat/varsh, GO Ms.No.14/LAS/A1/2025): is MLA ke kisi sanction/allotment ka kisi
//    whitelisted source me ullekh nahi — fund disclosure ka aadhaar nahi mila, isliye entry me ghoshit-nahi
//    bhi nahi joda gaya (entry hi nahi bani).
// 9. Desilting/drain stories (The Hindu scoopfeeds copy, 17 Oct 2026) — PWD ke shahari naalon ki desilting
//    Rs 1.99 crore par; Vignesh Kannan ka koi ullekh ya bhoomika nahi → REJECT.
// 10. Aggregator/pr items (newspointapp TOI copy, businesstoday, localreport, india.com) — ya to election
//     coverage ke duplicates hain ya whitelist me nahi → REJECT.
//
// RETRY-LEADS:
// (a) py.gov.in / lad.py.gov.in press-release archive me "Raj Bhavan" + "Vignesh Kannan" periodical search —
//     portal index browser.search me nahi aaya; seat-level MLALADS/works press note mil sakta hai.
// (b) The Hindu Puducherry bureau ki Aug-Oct 2026 ki e-paper archive check (traffic-protest story ka The Hindu
//     version mil sakta hai — lekin wo bhi protest hi rahega, works nahi).
// (c) Puducherry Vidhan Sabha ke Zero Hour/Calling Attention records me inke uthaaye gaye muddon ke
//     sarkari jawaab (ashwasan) ki khoj — abhi koi dastavez nahi mila.

puducherryWorks['vignesh-kannan'] = [];

// PUDUCHERRY — Lawspet — V.P. Sivakolundhu (AINRC, mantri)
// Mining date: 2026-10-19
// Record pakka: slug 'vp-sivakolundhu', name 'V.P. Sivakolundhu', AINRC, Lawspet seat.
// Mantri (17 Jun 2026 se): Civil Supplies & Consumer Affairs, Social Welfare,
// Backward Class Welfare, Women & Child Development, Minority Affairs.
// Karyakaal: 2026-2031 (sirf May 2026 ke baad ke kaam — usse pehle ka kuch nahi).
// Bhai V.P. Ramalingam (BJP adhyaksh) ke kaam bilkul alag record — firewall pakka.

// REJECT-LOG (saare sakht niyamon ke anusaar reject, entry nahi banayi):
// 1. Anganwadi — "Puducherry seeks centre's approval for new child care centres"
//    (TNIE, 10 Oct 2026, https://www.newindianexpress.com/states/tamil-nadu/2026/Oct/10/puducherry-seeks-centres-approval-for-new-child-care-centres)
//    REJECT: vibhagiya faisle (UT-stariya Women & Child Development); mantri-nirnya UT star par,
//    Lawspet seat ka vyaktigat kaam nahi. Aur ye sirf maang/ghoshna hai — kaam nahi.
// 2. Diwali ration kits — 3 lakh ration-card holders ko Deepavali thoguppu (dinaparavai.com, 14 Oct 2026,
//    https://dinaparavai.com/archives/65836) — REJECT: (a) whitelist me nahi (chhota portal),
//    (b) vibhagiya faisle — poore UT ka Civil Supplies ka nirnay, seat-specific nahi, sirf ghoshna.
// 3. Solar plant exhibition dekhna — Kurinji Nagar samudaya nalakoodam me solar pradarshani ka
//    nirikshan (Dinamalar photo-brief, 14 Oct 2026, https://www.dinamalar.com/photos/today-photos/498778)
//    REJECT: sirf nirikshan/daura; whitelist me nahi.
// 4. Mantri shapath — The Hindu (9/17 Jun 2026) — REJECT: pad-dharan samaroh, kaam nahi.
// 5. Portfolio allocation (TNIE, 6 Aug 2026) — REJECT: vibhagiya faisle/goshna, seat ka kaam nahi.
// 6. Bhai V.P. Ramalingam ki Raj Bhavan haar (TOI/TNIE, 2026) — REJECT: parivar firewall (alag record).
// 7. Purani ghatnayein (2016-21 MPLAD kaam ka The Hindu dawa, 2016; 2019 car-pelting) — REJECT: karyakaal se pehle.

// RETRY-LEAD (ek entry ke layak lagne wala kissa, lekin whitelist source nahi mila):
// Dinamalar (1-2 Oct 2026): "Rs 46.90 lakh me Lawspet seat ke Topigana aur Madubedu ilaakon me
// purane kshatigrast peyajal pipelines aur ghar-connection badalkar nayi pipelines bichhane ka kaam
// (PWD ke madhyam se) mantri Sivakolundhu ne shuru karwaya" — Dinamalar report ke mutabik PWD
// engineers aur sthaniya janata maujood thi. Ye Lawspet seat ka vyaktigat bhautik kaam
// (kaam-shuru) ke roop me yogy HOTA, lekin Dinamalar project whitelist me NAHI hai.
// URL: https://www.dinamalar.com/amp/news/puducherry/minister-inaugurates-drinking-water-pipeline-project-at-a-cost-of-rs-4690-lakh/4337388
// Retry: isi kisse ka (a) whitelisted outlet (The Hindu/TNIE/TOI/DC/HT/NDTV/India Today/PTI) par
// coverage dhoondho, ya (b) py.gov.in DIPR press release se sarkari confirmation lo —
// tabhi entry banana (badge: news ya sarkari; stage: kaam-shuru; category: Paani; fund: ghoshit nahi).

puducherryWorks['vp-sivakolundhu'] = [];

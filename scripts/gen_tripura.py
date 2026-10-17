#!/usr/bin/env python3
"""Tripura foundation data generator — 60 MLA neta records + 60 constituencies.
Source notes: ~/workspace/aapkaneta/research/tripura_winners_scratch.txt (verified 2026-10-17).
Writes ~/workspace/aapkaneta/src/data/tripura.ts"""

import json, os

OUT = os.path.expanduser("~/workspace/aapkaneta/src/data/tripura.ts")

FUND = {
    "scheme": "MLALADS",
    "allocated": "Rs 75 lakh",
    "utilized": None,
    "utilizationPct": None,
    "note": "Tripura me vidhayak nidhi \"MLALADS\" (MLA Local Area Development Scheme) ke naam se hai — Jan 2024 me sarkar ne Rs 75 lakh prati vidhan sabha kshetra prati saal ki ghoshna ki (FY 2024-25 se lagu; isse pehle Rs 50 lakh). Vipakshi MLAs ne Rs 1 crore ki maang ki thi (PTI/newsdrum.in, Jan 2024). Neta-war kharch ka record online uplabdh nahi hai.",
}

def t(post, constituency, slug, party, start, end):
    return {"post": post, "constituency": constituency, "constituencySlug": slug,
            "party": party, "start": start, "end": end}

def bg(age, education, cases, assets, liab, url, note):
    return {"age": age, "education": education, "criminalCases": cases, "assets": assets,
            "liabilities": liab, "mynetaUrl": url, "backgroundNote": note}

# (seat, const_name, cslug, district, resv, mla_slug, mla_name, party_full, pshort,
#  tenure_start, tenure_end, election_note, age, education, cases, assets, liab, myneta_id, bg_note)
R = [
(1,"Simna (ST)","simna","West Tripura","ST","brishaketu-debbarma","Brishaketu Debbarma","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Simna se TMP ke ticket par jeete: 22,757 votes. Runner-up Kumodh Debbarma (CPI-M) — 5,811 votes. Margin 16,946. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "43","Graduate Professional — LLB (Hons), Tripura Govt Law College, Tripura University (2007)",0,"Rs 1,47,67,097","Rs 24,95,364","6957",
 "Pehchan pakki: Brishaketu Debbarma, TMP, Simna (ST) — affidavit page par naam, seat aur party match. Umr 43 (2023 halafnama, ADR-adharit profile); S/o Rabindra Debbarma; pesha Advocate & Ex MLA; shiksha LLB (Hons) Tripura Govt Law College, Tripura University (2007). Koi criminal case nahi. 7 Mar 2024 se Mantrimandal me — Industries & Commerce (Minister of State); TMP ke sarkar me aane (7 Mar 2024, tripartite agreement) ke baad mantri bane."),

(2,"Mohanpur","mohanpur","West Tripura","GEN","ratan-lal-nath","Ratan Lal Nath","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Mohanpur se BJP ke ticket par jeete: 19,663 votes. Runner-up Tapas Dey (TMP) — 12,278 votes. Margin 7,385. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "72","Graduate Professional — LLB, Calcutta University (1979); BA, MBB College (1972)",1,"Rs 2,60,54,154","Rs 19,83,370","7051",
 "Pehchan pakki: Ratan Lal Nath, BJP, Mohanpur — affidavit page par naam, seat aur party match. Umr 72 (2023 halafnama, ADR-adharit profile); S/o sw. Debendra Kumar Nath; pesha Social Work; shiksha LLB Calcutta University (1979), BA MBB College (1972). 1 case darj: IPC 500 (manhani) — CR 34/2018, JM 1st Class Court No 5 Agartala, cognizance 19.01.2018, charges framed 04 Dec 2021. Mantrimandal me: Power, Agriculture & Farmers Welfare (Mar 2023 se)."),

(3,"Bamutia (SC)","bamutia","West Tripura","SC","nayan-sarkar","Nayan Sarkar","Communist Party of India (Marxist)","CPI(M)","2023","2028",
 "2023 Vidhan Sabha chunav me Bamutia se CPI(M) ke ticket par jeete: 20,119 votes. Runner-up Krishnadhan Das (BJP) — 18,093 votes. Margin 2,026. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "32","Post Graduate — MA Education, ICFAI University (2020)",0,"Rs 19,11,696","Rs 5,82,254","6768",
 "Pehchan pakki: Nayan Sarkar, CPI(M), Bamutia (SC) — affidavit page par naam, seat aur party match. Umr 32 (2023 halafnama, ADR-adharit profile); S/o sw. Haricharan Sarkar; pesha Farmer (rubber plantation se aamdani); shiksha MA Education, ICFAI University (2020). Koi criminal case nahi."),

(4,"Barjala (SC)","barjala","West Tripura","SC","sudip-sarkar","Sudip Sarkar","Communist Party of India (Marxist)","CPI(M)","2023","2028",
 "2023 Vidhan Sabha chunav me Barjala se CPI(M) ke ticket par jeete: 21,486 votes. Runner-up Dilip Kumar Das (BJP) — 19,697 votes. Margin 1,789. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "49","10th Pass — Madhyamik, Sukhamoy H.S. School (1993)",0,"Rs 57,75,979","Rs 0","6770",
 "Pehchan pakki: Sudip Sarkar, CPI(M), Barjala (SC) — affidavit page par naam, seat aur party match. Umr 49 (2023 halafnama, ADR-adharit profile); S/o sw. Jatindra Chandra Sarkar; pesha Agriculture Farmer; shiksha Madhyamik, Sukhamoy H.S. School (1993). Koi criminal case nahi."),

(5,"Khayerpur","khayerpur","West Tripura","GEN","ratan-chakraborty","Ratan Chakraborty","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Khayerpur se BJP ke ticket par jeete: 22,453 votes. Runner-up Pabitra Kar (CPI-M) — 18,343 votes. Margin 4,110. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "72","Graduate — BA, MBB College, Calcutta University (1971)",0,"Rs 3,84,19,718","Rs 0","6927",
 "Pehchan pakki: Ratan Chakraborty, BJP, Khayerpur — affidavit page par naam, seat aur party match. Umr 72 (2023 halafnama, ADR-adharit profile); S/o sw. Fatik Chakraborty; pesha Social Service; shiksha BA, MBB College, Calcutta University (1971). Koi criminal case nahi. 2018 me bhi jeete the (halafnama 2018 ke record me upalabdh)."),

(6,"Agartala","agartala","West Tripura","GEN","sudip-roy-barman","Sudip Roy Barman","Indian National Congress","INC","2023","2028",
 "2023 Vidhan Sabha chunav me Agartala se INC ke ticket par jeete: 26,435 votes. Runner-up Papiya Dutta (BJP) — 18,273 votes. Margin 8,162. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "59","Graduate Professional — BE (Mechanical), Calcutta University (1989); LLB, Tripura University (1992)",3,"Rs 9,07,91,072","Rs 38,00,000","6877",
 "Pehchan pakki: Sudip Roy Barman, INC, Agartala — ADR winners table me naam, seat aur party match (affidavit page ka 2023 ka render toota hua hai — keval assets dikhe; umar Wikipedia (janm 4 Feb 1966) se, case-sankhya ADR winners table (3) se). Umr 59 (janm 4 Feb 1966, Wikipedia); S/o sw. Samir Ranjan Barman; pesha Social Service & Advocate; shiksha BE (Mechanical) Calcutta University (1989), LLB Tripura University (1992). 3 case darj (2023 affidavit; 2018 affidavit me IPC 326/333/307/148/149/353). 1998 se Agartala ke MLA; 2018 me BJP se jeete, Feb 2022 me BJP chhodkar Congress me wapas; Mar 2018–Jun 2019 Tripura sarkar me mantri (Health, PWD, Industries & Commerce, Science & Technology)."),

(7,"Ramnagar","ramnagar","West Tripura","GEN","dipak-majumder","Dipak Majumder","Bharatiya Janata Party","BJP","2024","2028",
 "19 Apr 2024 ko hue upchunav me Ramnagar se BJP ke ticket par jeete: 25,380 votes. Runner-up Ratan Das (CPI-M) — 7,366 votes. Margin 18,014; NOTA 887; turnout 71.19%. Chunav BJP MLA Surajit Datta ke nidhan (28 Dec 2023) ke baad hua tha.",
 "64","Graduate — BA",0,"Rs 1,07,62,202","Rs 0","7076",
 "Pehchan pakki: Dipak Majumder, BJP, Ramnagar : Bye Election on 19-04-2024 — affidavit page par naam, seat aur party match. Umr 64 (2024 upchunav halafnama, ADR-adharit profile); S/o sw. Nanigopal Majumder; pesha Private Building Developer and Social Service; shiksha Graduate (BA). Koi criminal case nahi. Upchunav se pehle Agartala Municipal Corporation ke Mayor the; purane Congress neta — 2018 se pehle BJP me aaye, 2013 me Khowai se ladkar haare, 2023 me Khowai se CPI(M) ke khilaf BJP ticket par haare."),

(8,"Town Bordowali","town-bordowali","West Tripura","GEN","manik-saha","Manik Saha","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Town Bordowali se BJP ke ticket par jeete: 19,586 votes. Runner-up Ashish Kumar Saha (INC) — 18,329 votes. Margin 1,257. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "70","Post Graduate — Master of Dental Surgery, KGMC, Lucknow University (1995)",0,"Rs 13,90,29,020","Rs 13,27,977","6874",
 "Pehchan pakki: Manik Saha, BJP, Town Bordowali — affidavit page par naam, seat aur party match. Umr 70 (2023 halafnama, ADR-adharit profile); S/o sw. Makhan Lal Saha; pesha Professor of Tripura Medical College as Dental Surgeon (private practice bhi); shiksha MDS, KGMC, Lucknow University (1995). Koi criminal case nahi. 15 May 2022 se Tripura ke Mukhyamantri (pehle Rajya Sabha MP, Tripura BJP adhyaksh). Second Saha ministry (8 Mar 2023 se): Home, Health & Family Welfare, PWD sahit 30+ vibhag khud ke paas."),

(9,"Banamalipur","banamalipur","West Tripura","GEN","gopal-chandra-roy","Gopal Chandra Roy","Indian National Congress","INC","2023","2028",
 "2023 Vidhan Sabha chunav me Banamalipur se INC ke ticket par jeete: 17,128 votes. Runner-up Rajib Bhattacharjee (BJP) — 15,759 votes. Margin 1,369. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "72","Graduate Professional — B.Com, LLB, Calcutta University (1978)",2,"Rs 2,35,44,211","Rs 11,79,035","6892",
 "Pehchan pakki: Gopal Chandra Roy, INC, Banamalipur — affidavit page par naam, seat aur party match. Umr 72 (2023 halafnama, ADR-adharit profile); S/o sw. Brajbashi Roy; pesha Social Work and Legal Practitioner; shiksha B.Com, LLB, Calcutta University (1978). 2 case darj: IPC 120B/341/500/501 (East Agartala PS 2018 EAG 082; CR 01/2019) — conspiracy, wrongful restraint, defamation."),

(10,"Majlishpur","majlishpur","West Tripura","GEN","sushanta-chowdhury","Sushanta Chowdhury","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Majlishpur se BJP ke ticket par jeete: 21,349 votes. Runner-up Sanjoy Das (CPI-M) — 16,177 votes. Margin 5,172. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "43","Graduate Professional — BBA, Guwahati University (2003); Diploma in IT, Sikkim Manipal University (2004)",1,"Rs 75,64,121","Rs 16,40,690","7048",
 "Pehchan pakki: Sushanta Chowdhury, BJP, Majlishpur — affidavit page par naam, seat aur party match. Umr 43 (2023 halafnama, ADR-adharit profile); S/o Shyamal Chowdhury; pesha Social Service; shiksha BBA Guwahati University (2003), Diploma IT Sikkim Manipal University (2004). 1 case darj: IPC 325/307/379/506/148/149/427/120B (Ranir Bazar PS 005/2023, 18.01.2023). Mantrimandal me: Food & Civil Supplies, Transport, Tourism (Mar 2023 se)."),

(11,"Mandaibazar (ST)","mandaibazar","West Tripura","ST","swapna-debbarma","Swapna Debbarma","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Mandaibazar se TMP ke ticket par jeeti: 28,726 votes. Runner-up Radhacharan Debbarma (CPI-M) — 7,077 votes. Margin 21,649. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "49","10th Pass — Metric, NIOS (2019)",0,"Rs 9,65,613","Rs 1,50,000","6978",
 "Pehchan pakki: Swapna Debbarma, TMP, Mandaibazar (ST) — affidavit page par naam, seat aur party match. Umr 49 (2023 halafnama, ADR-adharit profile); W/o Mintu Debbarma; pesha House Wife; shiksha Metric, NIOS (2019). Koi criminal case nahi."),

(12,"Takarjala (ST)","takarjala","Sepahijala","ST","biswajit-kalai","Biswajit Kalai","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Takarjala se TMP ke ticket par jeete: 34,717 votes. Runner-up Bidhan Debbarma (IPFT) — 2,262 votes. Margin 32,455 (rajya ka sabse bada margin). 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "41","Post Graduate — MA Sociology, Madurai Kamraj University (2010)",0,"Rs 13,21,768","Rs 0","7063",
 "Pehchan pakki: Biswajit Kalai, TMP, Takarjala (ST) — affidavit page par naam, seat aur party match. Umr 41 (2023 halafnama, ADR-adharit profile); S/o Buchiram Kalai; pesha Social Worker (aamdani Business se); shiksha MA Sociology, Madurai Kamraj University (2010). Koi criminal case nahi."),

(13,"Pratapgarh (SC)","pratapgarh","West Tripura","SC","ramu-das","Ramu Das","Communist Party of India (Marxist)","CPI(M)","2023","2028",
 "2023 Vidhan Sabha chunav me Pratapgarh se CPI(M) ke ticket par jeete: 26,422 votes. Runner-up Rebati Mohan Das (BJP) — 24,336 votes. Margin 2,086. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "42","Post Graduate — MA Political Science, Tripura University (2005); M.Phil, Vinayaka Missions University, Tamil Nadu (2009)",0,"Rs 8,31,877","Rs 0","6797",
 "Pehchan pakki: Ramu Das, CPI(M), Pratapgarh (SC) — affidavit page par naam, seat aur party match. Umr 42 (2023 halafnama, ADR-adharit profile); S/o sw. Sudhan Das; pesha Social Service & Political Activist; shiksha MA Political Science Tripura University (2005), M.Phil Binayaka (Vinayaka) Missions University Tamil Nadu (2009). Koi criminal case nahi; aamdani CPI(M) party ke whole-timer ke roop me."),

(14,"Badharghat (SC)","badharghat","West Tripura","SC","mina-rani-sarkar","Mina Rani Sarkar","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Badharghat se BJP ke ticket par jeeti: 27,427 votes. Runner-up Partha Ranjan Sarkar (AIFB) — 26,138 votes. Margin 1,289. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "58","Graduate — BA Pass, Calcutta University (1987)",0,"Rs 24,23,530","Rs 0","6994",
 "Pehchan pakki: Mina Rani Sarkar, BJP, Badharghat (SC) — affidavit page par naam, seat aur party match. Umr 58 (2023 halafnama, ADR-adharit profile); D/o sw. Manmohan Sarkar; pesha Social Worker (avivahit); shiksha BA Pass, Calcutta University (1987). Koi criminal case nahi."),

(15,"Kamalasagar","kamalasagar","Sepahijala","GEN","antara-sarkar-deb","Antara Sarkar Deb","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Kamalasagar se BJP ke ticket par jeeti: 19,052 votes. Runner-up Hiranmay Debnath (CPI-M) — 17,308 votes. Margin 1,744. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "53","10th Pass — Madhyamik, Tripura Board (1992)",0,"Rs 73,647","Rs 0","7031",
 "Pehchan pakki: Antara Sarkar Deb, BJP, Kamalasagar — affidavit page par naam, seat aur party match. Umr 53 (2023 halafnama, ADR-adharit profile); W/o Tapan Kumar Deb; pesha Social Service; shiksha Madhyamik, Tripura Board (1992). Koi criminal case nahi. 2023 ke sabhi vijetaon me sabse kam ghoshit sampatti (Rs 73,647)."),

(16,"Bishalgarh","bishalgarh","Sepahijala","GEN","sushanta-deb","Sushanta Deb","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Bishalgarh se BJP ke ticket par jeete: 22,314 votes. Runner-up Partha Pratim Majumder (CPI-M) — 20,988 votes. Margin 1,326. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "33","12th Pass — HS, Tripura Board (2007)",2,"Rs 23,64,289","Rs 5,386","6985",
 "Pehchan pakki: Sushanta Deb, BJP, Bishalgarh — affidavit page par naam, seat aur party match. Umr 33 (2023 halafnama, ADR-adharit profile); S/o Sankar Chandra Deb; pesha Social Service; shiksha HS, Tripura Board (2007). 2 case darj: IPC 307/325/147/148/149/427/448 (Bishalgarh PS 125/2022, 70/2021) — hatya ka prayas sahit."),

(17,"Golaghati (ST)","golaghati","Sepahijala","ST","manab-debbarma","Manab Debbarma","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Golaghati se TMP ke ticket par jeete: 19,800 votes. Runner-up Himani Debbarma (BJP) — 10,602 votes. Margin 9,198. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "42","Others — Diploma in Pharmacy, RIPSAT Agartala (2008)",0,"Rs 1,72,93,247","Rs 0","7017",
 "Pehchan pakki: Manab Debbarma, TMP, Golaghati (ST) — affidavit page par naam, seat aur party match. Umr 42 (2023 halafnama, ADR-adharit profile); S/o sw. Sudhindra Debbarma; pesha Social Worker; shiksha Diploma in Pharmacy, RIPSAT Agartala (2008). Koi criminal case nahi."),

(18,"Suryamaninagar","suryamaninagar","West Tripura","GEN","ram-prasad-paul","Ram Prasad Paul","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Suryamaninagar se BJP ke ticket par jeete: 24,991 votes. Runner-up Susanta Chakraborty (INC) — 23,083 votes. Margin 1,908. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "55","8th Pass — Class VIII (1982)",0,"Rs 1,66,21,657","Rs 20,00,000","6962",
 "Pehchan pakki: Ram Prasad Paul, BJP, Suryamaninagar — affidavit page par naam, seat aur party match. Umr 55 (2023 halafnama, ADR-adharit profile); S/o sw. Krishnadhan Paul; pesha Politics, Social worker & Business; shiksha 8th Pass (1982). Koi criminal case nahi. 28 Mar 2023 se Vidhan Sabha ke Upadhyaksh (Deputy Speaker); Speaker Biswa Bandhu Sen ke nidhan (26 Dec 2025) ke baad Mar 2026 tak Acting Speaker rahe."),

(19,"Charilam (ST)","charilam","Sepahijala","ST","subodh-deb-barma","Subodh Deb Barma","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Charilam se TMP ke ticket par jeete: 13,657 votes. Runner-up Jishnu Dev Varma (BJP) — 12,799 votes. Margin 858 (rajya ka sabse chhota jeet-antaron me se ek). 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "51","Post Graduate — MA Philosophy, NEHU Shillong (1998)",0,"Rs 50,65,456","Rs 0","7005",
 "Pehchan pakki: Subodh Deb Barma, TMP, Charilam (ST) — affidavit page par naam, seat aur party match. Umr 51 (2023 halafnama, ADR-adharit profile); S/o sw. Sushil Debbarma; pesha Social Service & Self Employee; shiksha MA Philosophy, NEHU Shillong (1998). Koi criminal case nahi."),

(20,"Boxanagar","boxanagar","Sepahijala","GEN","tafajjal-hossain","Tafajjal Hossain","Bharatiya Janata Party","BJP","2023","2028",
 "5 Sep 2023 ko hue upchunav me Boxanagar se BJP ke ticket par jeete: 34,146 votes. Runner-up Mizan Hossain (CPI-M) — 3,909 votes. Margin 30,237. Chunav CPI(M) MLA Samsul Haque ke nidhan (19 Jul 2023) ke baad hua tha.",
 "51","8th Pass — Madhyamik Plucked, TBSE (1990)",1,"Rs 4,01,782","Rs 0","7069",
 "Pehchan pakki: Tafajjal Hossain, BJP, Boxanagar : Bye Election on 05-09-2023 — affidavit page par naam, seat aur party match. Umr 51 (2023 upchunav halafnama, ADR-adharit profile); S/o sw. Kanu Miah; pesha Social Service; shiksha 8th Pass, Madhyamik Plucked TBSE (1990). 1 case darj: IPC 506/148/341/323. Feb 2023 me isi seat se CPI(M) ke Samsul Haque se 4,849 votes se haare the; upchunav me jeetkar BJP ticket par jeetne wale pehle Muslim MLA bane."),

(21,"Nalchar (SC)","nalchar","Sepahijala","SC","kishor-barman","Kishor Barman","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Nalchar se BJP ke ticket par jeete: 20,836 votes. Runner-up Tapan Chandra Das (CPI-M) — 18,452 votes. Margin 2,384. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "42","Post Graduate — MA Bengali, Tripura University (2004)",0,"Rs 46,31,056","Rs 0","6937",
 "Pehchan pakki: Kishor Barman, BJP, Nalchar (SC) — affidavit page par naam, seat aur party match. Umr 42 (2023 halafnama, ADR-adharit profile); S/o Amar Chand Barman; pesha Social Worker & Business; shiksha MA Bengali, Tripura University (2004). Koi criminal case nahi. 3 Jul 2025 se Mantrimandal me — Panchayat, Higher Education, GA (Political); isi ke saath cabinet apni poori 12 sadasyon ki sankhya par pahuncha."),

(22,"Sonamura","sonamura","Sepahijala","GEN","shyamal-chakraborty","Shyamal Chakraborty","Communist Party of India (Marxist)","CPI(M)","2023","2028",
 "2023 Vidhan Sabha chunav me Sonamura se CPI(M) ke ticket par jeete: 20,039 votes. Runner-up Debabrata Bhattacharjee (BJP) — 17,624 votes. Margin 2,415. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "67","12th Pass — HS, N.C. Institution Sonamura, WB Board (1973)",1,"Rs 1,24,34,074","Rs 0","6807",
 "Pehchan pakki: Shyamal Chakraborty, CPI(M), Sonamura — affidavit page par naam, seat aur party match. Umr 67 (2023 halafnama, ADR-adharit profile); S/o sw. Upendra Chakraborty; pesha Social Worker (aamdani kheti aur MLA bhatte se); shiksha HS, N.C. Institution Sonamura, WB Board (1973). 1 case darj: Tripura Police Act Sec 82 (JTP PS GD entry 17, 15/06/2021; CR(TP) 26/21, CJM Sonamura, charges framed 06 Aug 2022)."),

(23,"Dhanpur","dhanpur","Sepahijala","GEN","bindu-debnath","Bindu Debnath","Bharatiya Janata Party","BJP","2023","2028",
 "5 Sep 2023 ko hue upchunav me Dhanpur se BJP ke ticket par jeete: 30,017 votes. Runner-up Kaushik Chanda (CPI-M) — 11,146 votes. Margin 18,871. Chunav kendriya mantri Pratima Bhoumik ke MLA pad se istife (Lok Sabha sadasyata barkarar rakhne) ke baad hua tha.",
 "42","Graduate — BA Pass, Tripura University (2004)",1,"Rs 18,36,223","Rs 1,19,813","7075",
 "Pehchan pakki: Bindu Debnath, BJP, Dhanpur : Bye Election on 05-09-2023 — affidavit page par naam, seat aur party match. Umr 42 (2023 upchunav halafnama, ADR-adharit profile); S/o sw. Nibaran Debnath; pesha Social Worker; shiksha BA Pass, Tripura University (2004). 1 case darj: IPC 506/148/341/323. Pratima Bhoumik ke bhai hain (Bhoumik Feb 2023 me isi seat se jeeti thi)."),

(24,"Ramchandraghat (ST)","ramchandraghat","Khowai","ST","ranjit-debbarma","Ranjit Debbarma","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Ramchandraghat se TMP ke ticket par jeete: 23,143 votes. Runner-up Ranjit Debbarma (CPI-M) — 6,941 votes. Margin 16,202. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "59","12th Pass — HS, Bodhjung Boys H.S. (+2) School Agartala, TBSE (1984)",1,"Rs 9,44,009","Rs 0","6951",
 "Pehchan pakki: Ranjit Debbarma, TMP, Ramchandraghat (ST) — affidavit page par naam, seat aur party match. Umr 59 (2023 halafnama, ADR-adharit profile); S/o Krishna Debbarma; pesha Social Worker & Self Employed; shiksha 12th Pass, Bodhjung Boys H.S. School Agartala, TBSE (1984). 1 gambhir case darj: IPC 120B/121A/122/153A/153B/34 + UAPA Sec 10(A), 10(B) (East Agartala PS 38/1998, ST (T-2) 162/2013, ADJ Court No 5 West Tripura, charges framed 28 Jul 2012)."),

(25,"Khowai","khowai","Khowai","GEN","nirmal-biswas","Nirmal Biswas","Communist Party of India (Marxist)","CPI(M)","2023","2028",
 "2023 Vidhan Sabha chunav me Khowai se CPI(M) ke ticket par jeete: 19,696 votes. Runner-up Subrata Majumdar (BJP) — 18,656 votes. Margin 1,040. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "48","Graduate — BA, DDM College, Tripura University (1996)",0,"Rs 27,18,448","Rs 25,00,000","6930",
 "Pehchan pakki: Nirmal Biswas, CPI(M), Khowai — affidavit page par naam, seat aur party match. Umr 48 (2023 halafnama, ADR-adharit profile); S/o sw. Nripendra Biswas; pesha Social Service (aamdani krishi bhoomi aur MLA pension se); shiksha BA, DDM College, Tripura University (1996). Koi criminal case nahi."),

(26,"Asharambari (ST)","asharambari","Khowai","ST","animesh-debbarma","Animesh Debbarma","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Asharambari se TMP ke ticket par jeete: 23,838 votes. Runner-up Jayanti Deb Barma (IPFT) — 5,510 votes. Margin 18,328. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "53","Graduate Professional — B.Tech (CSE), NERIST, Arunachal Pradesh (1994)",0,"Rs 1,31,10,962","Rs 2,57,004","6973",
 "Pehchan pakki: Animesh Debbarma, TMP, Asharambari (ST) — affidavit page par naam, seat aur party match. Umr 53 (2023 halafnama, ADR-adharit profile); S/o Sri Rathindra Debbarma; halafnama ke samay TTAADC ke Dy CEM; shiksha B.Tech (CSE), NERIST Arunachal Pradesh (1994). Koi criminal case nahi. TMP ke sarkar me aane se pehle Vipaksh ke neta (ex-LoP); 7 Mar 2024 se Mantrimandal me — Forest vibhag."),

(27,"Kalyanpur-Pramodenagar","kalyanpur-pramodenagar","Khowai","GEN","pinaki-das-chowdhury","Pinaki Das Chowdhury","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Kalyanpur-Pramodenagar se BJP ke ticket par jeete: 17,903 votes. Runner-up Manihar Debbarma (TMP) — 11,290 votes. Margin 6,613. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "46","12th Pass — HS, Tripura Board (1998)",0,"Rs 36,52,397","Rs 22,98,800","6914",
 "Pehchan pakki: Pinaki Das Chowdhury, BJP, Kalyanpur-Pramodenagar — affidavit page par naam, seat aur party match. Umr 46 (2023 halafnama, ADR-adharit profile); S/o sw. Prankrishna Das Chowdhury; pesha Social Service; shiksha HS, Tripura Board (1998). Koi criminal case nahi. 2018 me bhi ladkar haare the."),

(28,"Teliamura","teliamura","Khowai","GEN","kalyani-saha-roy","Kalyani Saha Roy","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Teliamura se BJP ke ticket par jeeti: 16,755 votes. Runner-up Ashok Kumar Baidya (INC) — 12,603 votes. Margin 4,152. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "55","Graduate Professional — LLB, Tripura University (1998); B.Sc. (Hons) Zoology, Tripura University (1990)",0,"Rs 2,88,72,866","Rs 33,39,317","6965",
 "Pehchan pakki: Kalyani Saha Roy, BJP, Teliamura — affidavit page par naam, seat aur party match. Umr 55 (2023 halafnama, ADR-adharit profile); D/o Sri Dinesh Chandra Saha; pesha Social Service; shiksha LLB Tripura University (1998), B.Sc. (Hons) Zoology Tripura University (1990). Koi criminal case nahi. Vidhan Sabha ki Govt Chief Whip (halafnama me pati ke peshe ke roop me bhi ullekhit)."),

(29,"Krishnapur (ST)","krishnapur","Khowai","ST","bikash-debbarma","Bikash Debbarma","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Krishnapur se BJP ke ticket par jeete: 13,800 votes. Runner-up Mahendra Debbarma (TMP) — 11,162 votes. Margin 2,638. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "54","10th Pass — Madhyamik Plucked, TBSE (1989)",0,"Rs 56,05,529","Rs 8,67,000","7045",
 "Pehchan pakki: Bikash Debbarma, BJP, Krishnapur (ST) — affidavit page par naam, seat aur party match. Umr 54 (2023 halafnama, ADR-adharit profile); S/o Suresh Debbarma; pesha Social Worker; shiksha Madhyamik Plucked, TBSE (1989). Koi criminal case nahi. Mantrimandal me: Tribal Welfare, Handloom-Handicrafts-Sericulture, Statistics (Mar 2023 se)."),

(30,"Bagma (ST)","bagma","Gomati","ST","ram-pada-jamatia","Ram Pada Jamatia","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Bagma se BJP ke ticket par jeete: 19,482 votes. Runner-up Purna Chandra Jamatia (TMP) — 17,399 votes. Margin 2,083. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "66","12th Pass — HS, Bishranganj HS School, WB Board (1974)",0,"Rs 1,36,63,307","Rs 6,00,000","6834",
 "Pehchan pakki: Ram Pada Jamatia, BJP, Bagma (ST) — affidavit page par naam, seat aur party match. Umr 66 (2023 halafnama, ADR-adharit profile); S/o sw. Nimai Pada Jamatia; pesha Pensioner cum Social Worker (ONGC se retired; pehle Tripura Jute Mill me kaam); shiksha HS, Bishranganj HS School, WB Board (1974). Koi criminal case nahi. 2017 me BJP me aaye; 2018 aur 2023 me Bagma se jeete; 2022–23 me mantri (Tribal Welfare; Industry & Commerce — Handloom, Handicrafts, Sericulture); 18 Mar 2026 ko Vidhan Sabha ke Speaker nirvirodh chune gaye (1972 ke baad sirf doosre Janajati Speaker)."),

(31,"Radhakishorpur","radhakishorpur","Gomati","GEN","pranajit-singha-roy","Pranajit Singha Roy","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Radhakishorpur se BJP ke ticket par jeete: 24,421 votes. Runner-up Srikanta Datta (RSP) — 17,007 votes. Margin 7,414. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "62","Graduate — BA, MBB College, Calcutta University (1980)",0,"Rs 7,32,92,599","Rs 21,04,600","6861",
 "Pehchan pakki: Pranajit Singha Roy, BJP, Radhakishorpur — affidavit page par naam, seat aur party match. Umr 62 (2023 halafnama, ADR-adharit profile); S/o sw. Jogendra Chandra Singha Roy; pesha Business; shiksha BA, MBB College, Calcutta University (1980). Koi criminal case nahi. Mantrimandal me: Finance, Planning & Coordination, Information Technology (Mar 2023 se)."),

(32,"Matarbari","matarbari","Gomati","GEN","abhishek-debroy","Abhishek Debroy","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Matarbari se BJP ke ticket par jeete: 25,494 votes. Runner-up Pranajit Roy (INC) — 16,453 votes. Margin 9,041. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "40","Graduate Professional — Bachelor of Pharmacy, Rajiv Gandhi University of Health Sciences, Karnataka (2020)",0,"Rs 56,24,268","Rs 50,27,395","6983",
 "Pehchan pakki: Abhishek Debroy, BJP, Matarbari — affidavit page par naam, seat aur party match. Umr 40 (2023 halafnama, ADR-adharit profile); S/o Himangshu Debroy; pesha Business (dawaiyon ka wholesale); shiksha Bachelor of Pharmacy, Rajiv Gandhi University of Health Sciences, Karnataka (2020). Koi criminal case nahi."),

(33,"Kakraban-Salgarh (SC)","kakraban-salgarh","Gomati","SC","jitendra-majumder","Jitendra Majumder","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Kakraban-Salgarh se BJP ke ticket par jeete: 23,625 votes. Runner-up Ratan Bhowmik (CPI-M) — 18,574 votes. Margin 5,051. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "69","Graduate — BA, Ramthakur College Agartala, Calcutta University (1978)",1,"Rs 68,13,424","Rs 35,00,000","6911",
 "Pehchan pakki: Jitendra Majumder, BJP, Kakraban-Salgarh (SC) — affidavit page par naam, seat aur party match. Umr 69 (2023 halafnama, ADR-adharit profile); S/o sw. Radha Krishna Majumder; pesha Cultivation; shiksha BA, Ramthakur College Agartala, Calcutta University (1978). 1 case darj: NI Act Sec 138 (cheque-bounce) — CR(NI) 65/2022, JMFC Udaipur."),

(34,"Rajnagar (SC)","rajnagar","South Tripura","SC","swapna-majumder","Swapna Majumder","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Rajnagar se BJP ke ticket par jeeti: 20,849 votes. Runner-up Sudhan Das (CPI-M) — 19,514 votes. Margin 1,335. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "48","Graduate — BA Pass, Tripura University (1997)",0,"Rs 1,44,443","Rs 0","6864",
 "Pehchan pakki: Swapna Majumder, BJP, Rajnagar (SC) — affidavit page par naam, seat aur party match. Umr 48 (2023 halafnama, ADR-adharit profile); W/o Asim Majumdar; pesha Social Service; shiksha BA Pass, Tripura University (1997). Koi criminal case nahi."),

(35,"Belonia","belonia","South Tripura","GEN","dipankar-sen","Dipankar Sen","Communist Party of India (Marxist)","CPI(M)","2023","2028",
 "2023 Vidhan Sabha chunav me Belonia se CPI(M) ke ticket par jeete: 20,016 votes. Runner-up Goutam Sarkar (BJP) — 19,613 votes. Margin 403 (rajya ka sabse chhota margin). 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "59","12th Pass — HS (1983), Vidyapith H.S. School Belonia",4,"Rs 27,02,371","Rs 0","6771",
 "Pehchan pakki: Dipankar Sen, CPI(M), Belonia — affidavit page par naam, seat aur party match. Umr 59 (2023 halafnama, ADR-adharit profile); S/o sw. Narendra Kishore Sen; pesha Social Service (party whole-timer); shiksha HS (1983), Vidyapith H.S. School Belonia. 4 case darj: IPC 353 (Belonia PS 222/2020) + 3 Tripura Police Act misc cases."),

(36,"Santirbazar (ST)","santirbazar","South Tripura","ST","pramod-reang","Pramod Reang","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Santirbazar se BJP ke ticket par jeete: 18,709 votes. Runner-up Harendra Reang (TMP) — 14,615 votes. Margin 4,094. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "42","12th Pass — Class XII, Umshyrpi College, Shillong (1995)",0,"Rs 19,36,540","Rs 23,76,864","6868",
 "Pehchan pakki: Pramod Reang, BJP, Santirbazar (ST) — affidavit page par naam, seat aur party match. Umr 42 (2023 halafnama, ADR-adharit profile); S/o Chitur Reang; pesha Social Service (aamdani bhatte aur rubber plantation se); shiksha Class XII, Umshyrpi College, Shillong (1995). Koi criminal case nahi. 2018 me bhi ladkar haare the."),

(37,"Hrishyamukh","hrishyamukh","South Tripura","GEN","asoke-chandra-mitra","Asoke Chandra Mitra","Communist Party of India (Marxist)","CPI(M)","2023","2028",
 "2023 Vidhan Sabha chunav me Hrishyamukh se CPI(M) ke ticket par jeete: 19,986 votes. Runner-up Dipayan Choudhury (BJP) — 18,568 votes. Margin 1,418. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "74","Graduate Professional — B.Sc, MBB College (1969); B.Ed (1981)",0,"Rs 1,05,15,807","Rs 0","6781",
 "Pehchan pakki: Asoke Ch. Mitra, CPI(M), Hrishyamukh — affidavit page par naam, seat aur party match. Umr 74 (2023 halafnama, ADR-adharit profile); S/o sw. Ramesh Chandra Mitra; pesha Retired Govt Teacher; shiksha B.Sc, MBB College (1969), B.Ed (1981). Koi criminal case nahi."),

(38,"Jolaibari (ST)","jolaibari","South Tripura","ST","sukla-charan-noatia","Sukla Charan Noatia","Indigenous People's Front of Tripura","IPFT","2023","2028",
 "2023 Vidhan Sabha chunav me Jolaibari se IPFT ke ticket par jeete: 17,621 votes. Runner-up Debendra Tripura (CPI-M) — 17,246 votes. Margin 375. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "30","12th Pass — CBSE (2008)",0,"Rs 2,06,560","Rs 0","6907",
 "Pehchan pakki: Sukla Charan Noatia, IPFT, Jolaibari (ST) — affidavit page par naam, seat aur party match. Umr 30 (2023 halafnama, ADR-adharit profile); S/o sw. Rashmani Noatia; pesha Social Activist; shiksha 12th, CBSE (2008). Koi criminal case nahi. IPFT ke eklaute MLA aur Mantrimandal me IPFT ke eklaute mantri — Cooperation, Tribal Welfare (TRP & PTG), Minority Welfare (Mar 2023 se)."),

(39,"Manu (ST)","manu","South Tripura","ST","mailafru-mog","Mailafru Mog","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Manu se BJP ke ticket par jeete: 15,469 votes. Runner-up Pravat Chowdhury (CPI-M) — 14,922 votes. Margin 547. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "52","8th Pass — Madhyamik, TBSE (1992)",1,"Rs 4,92,173","Rs 0","6855",
 "Pehchan pakki: Mailafru Mog, BJP, Manu (ST) — affidavit page par naam, seat aur party match. Umr 52 (2023 halafnama, ADR-adharit profile); S/o Kejari Mog; pesha Social Service and Self Employed; shiksha Madhyamik, TBSE (1992). 1 case darj: IPC 506/148/149/341/427 (Manubazar PS 14/2021, charges framed 28 Jun 2022)."),

(40,"Sabroom","sabroom","South Tripura","GEN","jitendra-chaudhury","Jitendra Chaudhury","Communist Party of India (Marxist)","CPI(M)","2023","2028",
 "2023 Vidhan Sabha chunav me Sabroom se CPI(M) ke ticket par jeete: 21,801 votes. Runner-up Sankar Roy (BJP) — 21,405 votes. Margin 396. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "65","12th Pass — HS, Umakanta Academy School, TBSE (1980)",3,"Rs 2,34,85,594","Rs 1,15,955","6804",
 "Pehchan pakki: Jitendra Chaudhury, CPI(M), Sabroom — affidavit page par naam, seat aur party match. Umr 65 (2023 halafnama, ADR-adharit profile); S/o sw. Matahari Chaudhury; pesha Political Activist (aamdani poorv MP ki pension aur MLA bhatte se); shiksha HS, Umakanta Academy School, TBSE (1980). 3 case darj: (1) 112/2020 West Agartala, IPC 188/270/34 + Epidemic Issues Act Sec 3 + Tripura Police Act Sec 82; (2) 73/2021 Amtali PS, IPC 120B/153/153A/109/506; (3) PS Case 56/2021, IPC 153/120B/506. 2014–19 me Tripura East se Lok Sabha MP rahe; 6 Mar 2024 se Vidhan Sabha me Vipaksh ke neta (Leader of Opposition)."),

(41,"Ampinagar (ST)","ampinagar","Gomati","ST","pathan-lal-jamatia","Pathan Lal Jamatia","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Ampinagar se TMP ke ticket par jeete: 21,525 votes. Runner-up Patal Kanya Jamatia (BJP) — 9,339 votes. Margin 12,186. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "41","Post Graduate — MA Education, Tripura University (2007)",0,"Rs 18,40,453","Rs 3,31,812","6830",
 "Pehchan pakki: Pathan Lal Jamatia, TMP, Ampinagar (ST) — affidavit page par naam, seat aur party match. Umr 41 (2023 halafnama, ADR-adharit profile); S/o sw. Bichitra Sadhan Jamatia; pesha Social Service; shiksha MA Education, Tripura University (2007). Koi criminal case nahi."),

(42,"Amarpur","amarpur","Gomati","GEN","ranjit-das","Ranjit Das","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Amarpur se BJP ke ticket par jeete: 17,989 votes. Runner-up Parimal Debnath (CPI-M) — 13,395 votes. Margin 4,594. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "59","12th Pass — HS (1998), Amarpur H/S School",0,"Rs 24,53,315","Rs 0","6880",
 "Pehchan pakki: Ranjit Das, BJP, Amarpur — affidavit page par naam, seat aur party match. Umr 59 (2023 halafnama, ADR-adharit profile); S/o sw. Ramesh Das; pesha Cultivation & Social Works; shiksha 12th Pass, HS (1998) Amarpur H/S School. 2023 me koi criminal case nahi (2018 me 2 case the)."),

(43,"Karbook (ST)","karbook","Gomati","ST","sanjoy-manik-tripura","Sanjoy Manik Tripura","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Karbook se TMP ke ticket par jeete: 16,647 votes. Runner-up Ashim Kumar Tripura (BJP) — 12,200 votes. Margin 4,447. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "44","12th Pass — HS, Nutan Bazar School Amarpur (2002)",1,"Rs 10,65,835","Rs 1,34,366","6926",
 "Pehchan pakki: Sanjoy Manik Tripura, TMP, Karbook (ST) — affidavit page par naam, seat aur party match. Umr 44 (2023 halafnama, ADR-adharit profile); S/o sw. Biswa Manik Tripura; pesha Self Employed; shiksha 12th Pass, Nutan Bazar School Amarpur (2002). 1 case darj: IPC 506/353/323/427/34 (Karbook PS 07/2021)."),

(44,"Raima Valley (ST)","raima-valley","Dhalai","ST","nandita-debbarma","Nandita Debbarma","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Raima Valley se TMP ke ticket par jeeti: 19,269 votes. Runner-up Bikash Chakma (BJP) — 15,827 votes. Margin 3,442. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "40","8th Pass — Madhyamik Plucked, TBSE (2000)",0,"Rs 63,000","Rs 71,376","7057",
 "Pehchan pakki: Nandita Debbarma (Reang), TMP, Raima Valley (ST) — affidavit page par naam, seat aur party match. Umr 40 (2023 halafnama, ADR-adharit profile); D/o Chahen Reang; pesha Housewife; shiksha 8th Pass, Madhyamik Plucked TBSE (2000). Koi criminal case nahi."),

(45,"Kamalpur","kamalpur","Dhalai","GEN","manoj-kanti-deb","Manoj Kanti Deb","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Kamalpur se BJP ke ticket par jeete: 18,287 votes. Runner-up Rubi Ghosh (INC) — 13,027 votes. Margin 5,260. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "42","Graduate — BSc (Hons) Zoology, G.C. College Silchar, Guwahati University (1991)",0,"Rs 50,10,052","Rs 0","6917",
 "Pehchan pakki: Manoj Kanti Deb, BJP, Kamalpur — affidavit page par naam, seat aur party match. Umr 42 (2023 halafnama, ADR-adharit profile); S/o sw. Madhu Sudan Deb; pesha Social Service; shiksha BSc (Hons) Zoology, G.C. College Silchar, Guwahati University (1991). 2023 me koi criminal case nahi (2018 me 2 case the)."),

(46,"Surma (SC)","surma","Dhalai","SC","swapna-das-paul","Swapna Das Paul","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Surma se BJP ke ticket par jeeti: 17,313 votes. Runner-up Anjan Das (CPI-M) — 12,475 votes. Margin 4,838. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "48","12th Pass — Higher Secondary, TBSE (2020)",0,"Rs 76,22,220","Rs 8,40,000","6872",
 "Pehchan pakki: Swapna Das Paul, BJP, Surma (SC) — affidavit page par naam, seat aur party match. Umr 48 (2023 halafnama, ADR-adharit profile); W/o Paritosh Paul; pesha House Wife; shiksha Higher Secondary, TBSE (2020). Koi criminal case nahi. 2018 me bhi Surma se jeeti thi."),

(47,"Ambassa (ST)","ambassa","Dhalai","ST","chitta-ranjan-debbarma","Chitta Ranjan Debbarma","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Ambassa se TMP ke ticket par jeete: 15,317 votes. Runner-up Suchitra Debbarma (BJP) — 14,824 votes. Margin 493. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "62","Post Graduate — MA Economics, NEHU Shillong (1988)",0,"Rs 1,92,68,445","Rs 0","6884",
 "Pehchan pakki: Chitta Ranjan Debbarma, TMP, Ambassa (ST) — affidavit page par naam, seat aur party match (affidavit spelling \"Chitta Ranjan\"; Wikipedia me \"Chittaranjan\" likha hai). Umr 62 (2023 halafnama, ADR-adharit profile); S/o Shri Abhimohan Debbarma; pesha Social Worker; shiksha MA Economics, NEHU Shillong (1988). Koi criminal case nahi. Speaker chunav (18 Mar 2026) me TMP ke prastav ke samarthakon me the."),

(48,"Karamcherra (ST)","karamcherra","Dhalai","ST","paul-dangshu","Paul Dangshu","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Karamcherra se TMP ke ticket par jeete: 20,496 votes. Runner-up Braja Lal Tripura (BJP) — 9,901 votes. Margin 10,595. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "31","10th Pass — Madhyamik, Tripura Board (2009)",0,"Rs 8,34,427","Rs 0","7039",
 "Pehchan pakki: Paul Dangshu, TMP, Karamcherra (ST) — affidavit page par naam, seat aur party match. Umr 31 (2023 halafnama, ADR-adharit profile); S/o Pratap Dangshu; pesha Self Employed and Social Worker; shiksha 10th Pass, Tripura Board (2009). Koi criminal case nahi."),

(49,"Chawamanu (ST)","chawamanu","Dhalai","ST","sambhu-lal-chakma","Sambhu Lal Chakma","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Chawamanu se BJP ke ticket par jeete: 16,644 votes. Runner-up Hangsa Kumar Tripura (TMP) — 13,745 votes. Margin 2,899. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "33","Graduate Professional — BSW, Himalayan University (2017)",0,"Rs 15,72,543","Rs 23,90,257","7010",
 "Pehchan pakki: Sambhu Lal Chakma, BJP, Chawamanu (ST) — affidavit page par naam, seat aur party match. Umr 33 (2023 halafnama, ADR-adharit profile); S/o Kripamoy Chakma; pesha Social Service; shiksha BSW, Himalayan University (2017). Koi criminal case nahi. 2018 me bhi ladkar haare the."),

(50,"Pabiachhara (SC)","pabiachhara","Unakoti","SC","bhagaban-chandra-das","Bhagaban Chandra Das","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Pabiachhara se BJP ke ticket par jeete: 19,542 votes. Runner-up Satyaban Das (INC) — 19,134 votes. Margin 408. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "49","8th Pass — VIII, Dudhpur High School (1990)",0,"Rs 98,60,757","Rs 53,18,810","6826",
 "Pehchan pakki: Bhagaban Chandra Das, BJP, Pabiachhara (SC) — affidavit page par naam, seat aur party match (affidavit par poora naam \"BHAGABAN CHANDRA DAS\"; brief me chhota \"Bhagaban Das\" tha — affidavit spelling li gayi hai). Umr 49 (2023 halafnama, ADR-adharit profile); S/o sw. Rakesh Das; pesha Social Service; shiksha 8th Pass, Dudhpur High School (1990). Koi criminal case nahi. 2018 me bhi Pabiachhara se jeete the."),

(51,"Fatikroy (SC)","fatikroy","Unakoti","SC","sudhangshu-das","Sudhangshu Das","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Fatikroy se BJP ke ticket par jeete: 19,570 votes. Runner-up Subrata Das (CPI-M) — 14,458 votes. Margin 5,112. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "35","Graduate — BA (Hons), Tripura University, RKM Kailashahar (2011)",0,"Rs 77,61,964","Rs 12,61,582","6848",
 "Pehchan pakki: Sudhangshu Das, BJP, Fatikroy (SC) — affidavit page par naam, seat aur party match. Umr 35 (2023 halafnama, ADR-adharit profile); S/o sw. Indubhushan Das; pesha Social Service; shiksha BA (Hons), Tripura University, RKM Kailashahar (2011). Koi criminal case nahi. Mantrimandal me: SC Welfare, Animal Resource Development, Fisheries (Mar 2023 se)."),

(52,"Chandipur","chandipur","Unakoti","GEN","tinku-roy","Tinku Roy","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Chandipur se BJP ke ticket par jeete: 17,395 votes. Runner-up Krishnendu Choudhury (CPI-M) — 16,818 votes. Margin 577. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "47","12th Pass — HS (2004), Madhya Bharat, Gwalior",0,"Rs 4,36,82,067","Rs 50,67,164","6894",
 "Pehchan pakki: Tinku Roy, BJP, Chandipur — affidavit page par naam, seat aur party match. Umr 47 (2023 halafnama, ADR-adharit profile); S/o sw. Manoranjan Roy; pesha Business; shiksha HS (2004), Madhya Bharat, Gwalior. Koi criminal case nahi. 2018 me bhi jeete the. Mantrimandal me: Youth Affairs & Sports, Labour (Mar 2023 se)."),

(53,"Kailashahar","kailashahar","Unakoti","GEN","birajit-sinha","Birajit Sinha","Indian National Congress","INC","2023","2028",
 "2023 Vidhan Sabha chunav me Kailashahar se INC ke ticket par jeete: 25,300 votes. Runner-up Moboshor Ali (BJP) — 15,614 votes. Margin 9,686. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "71","12th Pass — Higher Secondary, West Bengal Board (1975)",3,"Rs 2,94,48,721","Rs 12,74,127","6909",
 "Pehchan pakki: Birajit Sinha, INC, Kailashahar — affidavit page par naam, seat aur party match. Umr 71 (2023 halafnama, ADR-adharit profile); S/o sw. Bijoy Singha; pesha Agriculture & Engaged in Social Service; shiksha Higher Secondary, West Bengal Board (1975). 3 case darj: (1) IPC 120B/341 (2018 EAG 082, East Agartala PS; PRC(SP)04/2019); (2) TP Act Sec 82 (PR 820/2020, Radha Kishorpur PS; CR(TP) 82/2021); (3) DOSH-SIDDHI: Arms Act Sec 30 — 11 Nov 2013 ko 3 mahine SI + Rs 1000 jurmana, appeal par Supreme Court (Criminal Appeal 1473/2015) ne saja 1 mahine kar di. Congress Legislature Party ke neta (Vidhan Sabha me Congress ke 3 MLAs ke neta)."),

(54,"Kadamtala-Kurti","kadamtala-kurti","North Tripura","GEN","islam-uddin","Islam Uddin","Communist Party of India (Marxist)","CPI(M)","2023","2028",
 "2023 Vidhan Sabha chunav me Kadamtala-Kurti se CPI(M) ke ticket par jeete: 20,012 votes. Runner-up Dilip Tanti (BJP) — 18,120 votes. Margin 1,892. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "49","Graduate — BA, Tripura University (1995)",2,"Rs 18,76,972","Rs 22,36,766","6817",
 "Pehchan pakki: Islam Uddin, CPI(M), Kadamtala-Kurti — affidavit page par naam, seat aur party match. Umr 49 (2023 halafnama, ADR-adharit profile); S/o sw. Abdul Chattar; pesha Social Service; shiksha BA, Tripura University (1995). 2 case darj: IPC 506/326/323/34/148/149 (Kadamtala PS 2018 KDL075, charges framed Jun 2022; 2017 KDL054, charges framed Feb 2019)."),

(55,"Bagbassa","bagbassa","North Tripura","GEN","jadab-lal-debnath","Jadab Lal Debnath","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Bagbassa se BJP ke ticket par jeete: 18,905 votes. Runner-up Bijita Nath (CPI-M) — 17,444 votes. Margin 1,461. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "55","12th Pass — HS (+2), Tripura Board (1986), Padmapur HS School",0,"Rs 79,39,339","Rs 0","6887",
 "Pehchan pakki: Jadab Lal Debnath, BJP, Bagbassa — affidavit page par naam, seat aur party match. Umr 55 (2023 halafnama, ADR-adharit profile); S/o sw. Akshay Kumar Debnath; pesha Business; shiksha HS (+2), Tripura Board (1986), Padmapur HS School. Koi criminal case nahi."),

(56,"Dharmanagar","dharmanagar","North Tripura","GEN","jahar-chakraborti","Jahar Chakraborti","Bharatiya Janata Party","BJP","2026","2028",
 "9 Apr 2026 ko hue upchunav me Dharmanagar se BJP ke ticket par jeete: 24,291 votes. CPI(M) ke Amitabha Datta — 6,001 votes; Congress ke Chayan Bhattacharya — 5,936 votes. Margin 18,290 (runner-up se). Turnout 79.84%. Chunav Vidhan Sabha Speaker Biswa Bandhu Sen ke nidhan (26 Dec 2025) ke baad hua tha; parinaam 4 May 2026 ko.",
 "58","Graduate — BA, Tripura University (1991)",0,"Rs 8,44,05,813","Rs 4,95,000","7080",
 "Pehchan pakki: Jahar Chakraborti, BJP, Dharmanagar : Bye Election on 09-04-2026 — affidavit page par naam, seat aur party match. Umr 58 (2026 upchunav halafnama, ADR-adharit profile); S/o sw. Saradindu Chakraborty; pesha Business & Social Service; shiksha BA, Tripura University (1991). Koi criminal case nahi."),

(57,"Jubarajnagar","jubarajnagar","North Tripura","GEN","sailendra-chandra-nath","Sailendra Chandra Nath","Communist Party of India (Marxist)","CPI(M)","2023","2028",
 "2023 Vidhan Sabha chunav me Jubarajnagar se CPI(M) ke ticket par jeete: 19,386 votes. Runner-up Malina Debnath (BJP) — 19,090 votes. Margin 296. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "56","Graduate — B.Com, Tripura University (1988); ICWA(I) (1993)",0,"Rs 2,00,04,605","Rs 22,23,101","6816",
 "Pehchan pakki: Sailendra Chandra Nath, CPI(M), Jubarajnagar — affidavit page par naam, seat aur party match. Umr 56 (2023 halafnama, ADR-adharit profile); S/o sw. Tarani Kumar Nath; pesha Business; shiksha B.Com, Tripura University (1988), ICWA(I) (1993). Koi criminal case nahi. 2018 me bhi ladkar haare the."),

(58,"Panisagar","panisagar","North Tripura","GEN","binay-bhushan-das","Binay Bhushan Das","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Panisagar se BJP ke ticket par jeete: 15,745 votes. Runner-up Sital Das (CPI-M) — 13,247 votes. Margin 2,498. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "63","Graduate Professional — LLB, Gauhati University (1993); BA, Calcutta University (1982)",0,"Rs 2,70,07,729","Rs 39,54,774","6939",
 "Pehchan pakki: Binay Bhushan Das, BJP, Panisagar — affidavit page par naam, seat aur party match. Umr 63 (2023 halafnama, ADR-adharit profile); S/o sw. Birendra Kumar Das; pesha Advocate (aamdani MLA bhatte se); shiksha LLB, Gauhati University (1993), BA, Calcutta University (1982). Koi criminal case nahi. 2018 me bhi Panisagar se jeete the."),

(59,"Pencharthal (ST)","pencharthal","North Tripura","ST","santana-chakma","Santana Chakma","Bharatiya Janata Party","BJP","2023","2028",
 "2023 Vidhan Sabha chunav me Pencharthal se BJP ke ticket par jeeti: 17,781 votes. Runner-up Sadhan Kumar Chakma (CPI-M) — 9,808 votes. Margin 7,973. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "38","Post Graduate — Master in Social Work, IGNOU Agartala (2016)",0,"Rs 4,77,002","Rs 21,94,442","6941",
 "Pehchan pakki: Santana Chakma, BJP, Pencharthal (ST) (myneta par \"PECHARTHAL\" likha hai) — affidavit page par naam, seat aur party match. Umr 38 (2023 halafnama, ADR-adharit profile); D/o sw. Chandra Dhan Chakma; pesha Social Worker; shiksha Master in Social Work, IGNOU Agartala (2016). Koi criminal case nahi. Mantrimandal ki eklauti mahila mantri — Industries & Commerce, OBC Welfare (Mar 2023 se). North Tripura ki Guardian Minister."),

(60,"Kanchanpur (ST)","kanchanpur","North Tripura","ST","philip-kumar-reang","Philip Kumar Reang","Tipra Motha Party","TMP","2023","2028",
 "2023 Vidhan Sabha chunav me Kanchanpur se TMP ke ticket par jeete: 15,413 votes. Runner-up Rajendra Reang (CPI-M) — 10,522 votes. Margin 4,891. 16 Feb 2023 ko matdan, 2 Mar 2023 ko parinaam.",
 "38","Post Graduate — MA English, Madurai Kamraj University (2009)",1,"Rs 26,67,272","Rs 0","7034",
 "Pehchan pakki: Philip Kumar Reang, TMP, Kanchanpur (ST) — affidavit page par naam, seat aur party match (affidavit + ADR-winners table + Wikipedia sab me \"Philip\" — single l; brief me \"Phillip\" likha tha, affidavit spelling li gayi hai). Umr 38 (2023 halafnama, ADR-adharit profile); S/o Drao Kumar Reang; pesha Social Activist and Self Employee; shiksha MA English, Madurai Kamraj University (2009). 1 case darj: IPC 326/506/148/149/341/353/323 (Kanchanpur PS 68/2019, charges framed 10 Aug 2022)."),
]

HEADER = """// Tripura foundation — 13vi Tripura Vidhan Sabha (matdan 16 Feb 2023, parinaam 2 Mar 2023;
// karyakaal 2023-2028). Kul 60 seats (20 ST + 10 SC + 30 GEN).
// CM: Manik Saha (BJP, Town Bordowali) — 15 May 2022 se. Speaker: Ram Pada Jamatia (BJP, Bagma)
// — 18 Mar 2026 se nirvirodh chune gaye (Biswa Bandhu Sen ke nidhan 26 Dec 2025 ke baad; beech me
// Ram Prasad Paul Acting Speaker rahe). Deputy Speaker: Ram Prasad Paul (BJP, Suryamaninagar)
// — 28 Mar 2023 se. LoP: Jitendra Chaudhury (CPI-M, Sabroom) — 6 Mar 2024 se.
// Daliya sthiti (wartaman): BJP 33, TMP 13, CPI(M) 10, INC 3, IPFT 1 = 60. 2023 ke natije: BJP 32,
// TMP 13, CPI(M) 11, INC 3, IPFT 1. Badlav upchunavon se: Boxanagar + Dhanpur (5 Sep 2023 — BJP ne
// Boxanagar CPI(M) se chheena, Dhanpur barkarar rakha), Ramnagar (19 Apr 2024 — Surajit Datta ke nidhan
// ke baad Dipak Majumder), Dharmanagar (9 Apr 2026 — Speaker Biswa Bandhu Sen ke nidhan ke baad
// Jahar Chakraborti).
// Cabinet (12 sadasya): Saha (CM: Home, Health, PWD + 30 vibhag), Ratan Lal Nath (Power, Agriculture),
// Pranajit Singha Roy (Finance, Planning, IT), Sushanta Chowdhury (Food & Civil Supplies, Transport,
// Tourism), Santana Chakma (Industries & Commerce, OBC Welfare — eklauti mahila mantri),
// Tinku Roy (Youth Affairs & Sports, Labour), Bikash Debbarma (Tribal Welfare, Handloom-Sericulture,
// Statistics), Sudhangshu Das (SC Welfare, Animal Resource, Fisheries), Sukla Charan Noatia — IPFT
// (Cooperation, Tribal Welfare TRP&PTG, Minority Welfare), Animesh Debbarma — TMP (Forest,
// 7 Mar 2024 se), Brishaketu Debbarma — TMP (Industries & Commerce MoS, 7 Mar 2024 se),
// Kishor Barman (Panchayat, Higher Education, GA Political, 3 Jul 2025 se).
// Congress Legislature Party neta: Birajit Sinha. Govt Chief Whip: Kalyani Saha Roy.
// MLA nidhi: "MLALADS" — Jan 2024 me sarkar ne Rs 75 lakh prati vidhan sabha kshetra prati saal
// ki ghoshna ki (FY 2024-25 se lagu; isse pehle Rs 50 lakh); vipaksh ne Rs 1 crore ki maang ki thi
// (PTI/newsdrum.in); neta-war kharch ka record online uplabdh nahi hai.
// Background data = ECI affidavit via myneta.info/Tripura2023 (verified 2026-10-17) — 60/60 ke
// verified records mile (53 winners + 4 bypoll winners; Sudip Roy Barman ka 2023 affidavit page
// toota hua hai — unki entry ADR winners table + purane affidavits + Wikipedia se, note me saaf).
// Naam spellings MyNeta affidavit + ADR-ECI report ke hisaab se (Wikipedia/brief ke 2 galat
// carry-forward sudhare gaye: Philip Kumar Reang (brief me "Phillip"), Bhagaban Chandra Das
// (brief me chhota "Bhagaban Das")). Seat-name variants: Mandaibazar (MyNeta "Mandai Bazar"),
// Pecharthal (MyNeta "PECHARTHAL"), Town Bordowali (MyNeta "Town Bardowali").
// ADR 2023 winners report: 16/60 (27%) winners ne criminal cases ghoshit kiye; 21 crorepati;
// ausat sampatti Rs 1.52 crore; 9 mahila MLA.
// Saara user-facing text Roman-script Hinglish me hai (koi Devanagari ya ₹ nahi — "Rs" likha gaya hai).
import type { Neta, Constituency } from './pilot';

"""

def ts_str(s):
    if s is None: return "null"
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"

def render_neta(r):
    (seat, cname, cslug, dist, resv, mslug, mname, pfull, pshort, tstart, tend,
     enote, age, edu, cases, assets, liab, mid, bnote) = r
    f = FUND
    out = []
    out.append("  {")
    out.append(f"    slug: {ts_str(mslug)},")
    out.append(f"    name: {ts_str(mname)},")
    out.append(f"    party: {ts_str(pfull)},")
    out.append(f"    partyShort: {ts_str(pshort)},")
    out.append(f"    post: 'MLA',")
    out.append(f"    state: 'Tripura',")
    out.append(f"    constituency: {ts_str(cname)},")
    out.append(f"    constituencySlug: {ts_str(cslug)},")
    out.append("    tenures: [")
    out.append(f"      {{ post: 'MLA', constituency: {ts_str(cname)}, constituencySlug: {ts_str(cslug)}, party: {ts_str(pfull)}, start: '{tstart}', end: '{tend}' }},")
    out.append("    ],")
    out.append("    works: [],")
    out.append("    fund: {")
    out.append(f"      scheme: {ts_str(f['scheme'])},")
    out.append(f"      allocated: {ts_str(f['allocated'])}, utilized: null, utilizationPct: null,")
    out.append(f"      note: {ts_str(f['note'])},")
    out.append("    },")
    out.append("    background: {")
    out.append(f"      age: '{age}',")
    out.append(f"      education: {ts_str(edu)},")
    out.append(f"      criminalCases: {cases},")
    out.append(f"      assets: {ts_str(assets)},")
    out.append(f"      liabilities: {ts_str(liab)},")
    out.append(f"      mynetaUrl: 'https://myneta.info/Tripura2023/candidate.php?candidate_id={mid}',")
    out.append(f"      backgroundNote: {ts_str(bnote)},")
    out.append("    },")
    out.append(f"    electionNote: {ts_str(enote)},")
    out.append("  },")
    return "\n".join(out)

def render_const(r):
    (seat, cname, cslug, dist, resv) = r[0], r[1], r[2], r[3], r[4]
    return (f"  {{ slug: {ts_str(cslug)}, name: {ts_str(cname)}, type: 'Vidhan Sabha', number: {seat}, "
            f"district: {ts_str(dist)}, reservation: '{resv}', state: 'Tripura' }},")

parts = [HEADER, "export const tripuraNetas: Neta[] = ["]
parts += [render_neta(r) for r in R]
parts.append("];\n")
parts.append("export const tripuraConstituencies: Constituency[] = [")
parts += [render_const(r) for r in R]
parts.append("];\n")

with open(OUT, "w") as fh:
    fh.write("\n".join(parts))
print("wrote", OUT, len(R), "netas")

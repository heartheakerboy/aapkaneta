# AapkaNeta.org — MVP Blueprint
**Vision:** "Har neta ka hisaab, har nagrik ke haath." — India ka pehla RTI-verified neta work-tracker.
**Status:** Idea → Blueprint (2026-10-12) | **Naam locked:** aapkaneta.org (domain available, khareedna baaki)
**Strategy:** Palghar pilot → Maharashtra (288 MLA) → Pure Bharat (MP layer, phir MLA state-by-state)

---

## 1. Pilot Scope — Palghar District (Phase 1)

7 profile pages: 6 MLA + 1 MP. Data verified 2026-10-12 (2024 election results).

### Assembly (Maharashtra Vidhan Sabha 2024)

| Seat | Constituency No. | MLA | Party |
|------|-----------------|-----|-------|
| Dahanu (ST) | 128 | Vinod Bhiva Nikole | CPI(M) |
| Vikramgad (ST) | 129 | Harishchandra Sakharam Bhoye | BJP |
| Palghar (ST) | 130 | Rajendra Dhedya Gavit | Shiv Sena (SHS) |
| Boisar (ST) | 131 | Vilas Sukur Tare | Shiv Sena (SHS) |
| Nalasopara | 132 | Rajan Balkrishna Naik | BJP |
| Vasai | 133 | Sneha Dube Pandit | BJP |

### Lok Sabha

| Seat | MP (2024) | Party |
|------|-----------|-------|
| Palghar (ST) | Dr. Hemant Vishnu Savara | BJP |

**Note:** Rajendra Gavit ka case interesting hai — pehle MP rahe (2018–2019), ab MLA hain. Isi liye "tenure-wise" tracking zaroori hai: ek hi neta ke alag-alag karyakaal alag dikhenge.

Sources: ECI results via Economic Times / Oneindia / Wikipedia (Palghar Lok Sabha constituency).

---

## 2. Site Structure (MVP pages)

1. **Homepage** — hero search ("Apna area likho"), Palghar ke 7 neta cards, "taaza verified kaam" feed, RTI drive CTA
2. **Neta profile page** (`/neta/<slug>`) — poora hisaab-kitab (neeche detail)
3. **Constituency page** (`/kshetra/<slug>`) — area ka map, current + past neta, kaam ki list
4. **Tulna (Compare)** (`/tulna`) — 2 neta side-by-side: fund utilization, verified kaam count, tenure
5. **Hamari Methodology** (`/methodology`) — neutrality policy, verification badges, correction policy (trust ka foundation)
6. **RTI lagao** (`/rti`) — apne neta par RTI kaise lagayein, template + @rtibyfiroz integration
7. **About** — About Us me Instagram (rtibyfiroz) + LinkedIn links (standing rule)

---

## 3. Neta Profile Page — Sections

1. **Header:** photo, naam, party, pad (MLA/MP), constituency, karyakaal (2024–2029)
2. **Scorecard strip:** fund utilization % (MPLADS/MLALADS), verified kaam count, RTI-pending count
3. **Karyakaal timeline:** har tenure alag — pehle MP the, ab MLA hain, to dono alag section
4. **Kaam ki list** (category-wise: Sadak, Paani, Bijli, School, Aspataal, Rojgar):
   - Har kaam: title, category, status, **verification badge**, source link, date
5. **Fund utilization:** MPLADS (MP ke liye — official portal data) / MLALADS (MLA ke liye — RTI se)
6. **Chunav background:** pichhle chunav result, vote share, ECI affidavit highlights (myneta.info link)
7. **Vivaad (agar ho):** sirf sourced facts, dono paksh — koi allegation bina source ke nahi
8. **CTA:** "Is neta par RTI lagao" + "Galat info dikhi? Correction bhejo"

---

## 4. Verification Badge System (trust ka core)

| Badge | Matlab | Source |
|-------|--------|--------|
| 🟢 Sarkari Record | Govt portal/document se confirmed | MPLADS portal, GR, maharashtra.gov.in |
| 🟢 RTI Verified | RTI reply se confirmed | RTI response scan (site par hosted) |
| 🟡 News Report | Reputed news me chhapa | Link ke saath (2+ source preferred) |
| ⚪ Dawa | Neta/party ka daawa, unverified | "Satyaapan baaki" label ke saath |

**Rule:** Bina badge ke koi "kaam" list me nahi. Dawa wale alag section me, halka label.

---

## 5. Data Model (D1 tables — Cloudflare)

- `netas` — id, naam, party, photo, current_post, bio
- `constituencies` — id, naam, type (assembly/lok_sabha), district, state, reservation
- `tenures` — id, neta_id, constituency_id, post, start, end, election_year
- `works` — id, neta_id, tenure_id, title, category, status, badge, description
- `sources` — id, work_id, type (rti/govt/news/claim), url_or_file, date
- `funds` — id, neta_id, tenure_id, scheme (MPLADS/MLALADS), allocated, utilized, year
- `corrections` — id, work_id, reported_by, note, status (moderation queue)

---

## 6. Data Sources (priority order)

1. **MPLADS portal** (mplads.gov.in) — MP fund allocation vs utilization, constituency-wise. Maharashtra ke MPs ne sirf 13% use kiya (HT report) — yehi hamara launch story angle hai.
2. **ECI affidavits / myneta.info (ADR)** — neta background: criminal cases, assets, education. Link-out, copy nahi.
3. **Maharashtra legislature site** — MLA list, questions asked.
4. **RTI replies** — MLALADS data (online nahi milta — State Information Commission ka order bhi portal khol nahi paya), specific kaam ka verification. **Ye hamari moat hai.**
5. **News archives** — kaam ke announcements ka record.
6. **Crowdsourced (moderated)** — public corrections + photo evidence, review ke baad publish.

---

## 7. RTI Flywheel (@rtibyfiroz integration)

- Har mahine **"RTI Drive"**: ek constituency pick karo, followers ko ready-made RTI template do ("mere MLA ne 2024–25 me MLALADS se kaun se kaam kiye?")
- Aaye hue RTI replies → scan → site par "RTI Verified" badge ke saath publish
- RTI page par monthly carousel: "Is mahine X netaon ka hisaab aaya" → site par traffic loop
- Ye loop koi competitor copy nahi kar sakta — audience + process dono hamare paas hain.

---

## 8. Neutrality & Legal Guardrails (non-negotiable)

- **Facts + sources, koi adjectives nahi:** "sadak bani" (source ke saath), "nikamma neta" kabhi nahi.
- **"Record ke anusaar" framing:** "MPLADS record ke anusaar ₹X me se ₹Y kharch hue" — claim hum nahi, record bol raha hai.
- **Dono paksh:** vivaad section me neta ka jawab bhi, agar available ho.
- **Correction policy:** 48-hour correction SLA, public correction log (trust badhta hai).
- **No unverified allegations:** criminal record sirf ECI affidavit/myneta.info se, apne shabd me nahi.
- **Party-wise balance check:** har publish batch me check — kisi ek party ke neta target nahi ho rahe.

---

## 9. Tech Stack

- **Astro** (static, fast, SEO-friendly) + **Cloudflare Pages** + **D1** — user ka standard stack
- **Hindi-first** content; URLs me English slugs (`/neta/hemant-savara`)
- Images: neta photos — ECI/official portraits (public domain-ish); khud ki AI image mat banao netaon ki (misuse risk)
- Sitemap + schema.org (Person + GovernmentOrganization) — Google me "hemant savara kaam" search par rank

## 10. Language Plan

- **Phase 1 (Palghar pilot): Hindi** — RTI audience Hindi hai, content pipeline ready
- **Phase 2 (Maharashtra): + Marathi** — native-style, word-to-word nahi (standing rule)
- **Phase 3 (pan-India): + English** — data pages, SEO

---

## 11. Build Phases

### Phase 0 — Setup (week 1)
- [ ] Domain khareedo: aapkaneta.org (user action — Cloudflare Registrar)
- [ ] Repo banao: `aapkaneta` (Astro + D1, Pages deploy)
- [ ] D1 schema apply (section 5)
- [ ] Design system: neutral civic look (tiranga-accent minimal, kisi party ka rang dominate na kare)

### Phase 1 — Palghar Pilot (week 2–3)
- [ ] 7 profile pages live (6 MLA + 1 MP) — ECI/myneta background + MPLADS data (MP ke liye)
- [ ] Homepage + Tulna + Methodology pages
- [ ] Pehli RTI drive launch (@rtibyfiroz se — 6 seats par MLALADS templates)
- [ ] Soft launch → feedback → iterate

### Phase 2 — Maharashtra 288 (month 2–4)
- [ ] Baaki 282 MLA profiles (template-driven, data dheere-dheere)
- [ ] 48 MPs ke MPLADS utilization pages (central data — fast win)
- [ ] Monthly RTI drives district-wise
- [ ] Marathi version launch

### Phase 3 — Pure Bharat (month 5+)
- [ ] **MP layer pehle (543):** MPLADS data central hai — ek jhatke me pan-India coverage
- [ ] **MLA layer state-by-state:** har state me RTI network + state portals (UP, Bihar, MP... priority: jahan audience zyada)
- [ ] Municipal corporators (Phase 4) — sabse local, sabse viral

---

## 12. Monetization

- **AdSense** — civic-info content advertiser-safe hai (sensitive me nahi girta agar language neutral rahe)
- **Election season packages** — "Apne kshetra ka hisaab" widgets news sites ko embed (backlink + brand)
- **Kabhi nahi:** kisi party/neta se paid listing — ek baar hua to trust khatam, site khatam

## 13. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Neta/supporters ka pressure ya legal notice | Facts + sources only; correction SLA; har page par methodology link |
| Data stale ho jana | RTI drive calendar (quarterly refresh per constituency) |
| Ek party ke khilaf dikhne ka aarop | Publish-time balance check; methodology page public |
| Scale par moderation load | Crowdsource → AI triage → human review (user final authority) |

---

## 14. Immediate Next Actions

- [ ] **User:** aapkaneta.org domain khareedo
- [ ] **Muse:** repo + D1 schema + base design setup
- [ ] **Muse:** Hemant Savara (MP Palghar) ka MPLADS data nikalo — pilot ka pehla solid page
- [ ] **User + Muse:** pehli RTI drive ke 6 templates banao (har Palghar seat ke liye)

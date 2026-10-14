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
};

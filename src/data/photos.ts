// Neta profile photos — Wikimedia Commons ke free-license sroton se.
// Har entry khud Commons file page par verify ki gayi hai (license + pehchan).
// Photo na hone par NetaProfile initials-avatar dikhata hai.
// GODL-India = Government Open Data License-India (sarkari open license, attribution ke saath muft upyog).
// "Attribution" = Commons ka attribution-only free license (Bihar IPRD).

export interface NetaPhoto {
  /** public/ ke saapeksh path, jaise /neta-photos/slug.webp */
  file: string;
  credit: string;
  license: string;
  sourceUrl: string;
}

export const photos: Record<string, NetaPhoto> = {
  'devendra-gangadhar-fadnavis': {
    file: '/neta-photos/devendra-gangadhar-fadnavis.webp',
    credit: 'Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Shri_Devendra_Gangadharrao_Fadnavis.jpg',
  },
  'eknath-sambhaji-shinde': {
    file: '/neta-photos/eknath-sambhaji-shinde.webp',
    credit: 'Real96kmaratha',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eknath_Shinde_SS.jpg',
  },
  'aditya-uddhav-thackeray': {
    file: '/neta-photos/aditya-uddhav-thackeray.webp',
    credit: 'Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Shri_Aaditya_Thackeray_-_2020_(cropped).jpg',
  },
  'bhupendrabhai-rajnikant-patel': {
    file: '/neta-photos/bhupendrabhai-rajnikant-patel.webp',
    credit: 'Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bhupendra_Patel_(cropped).jpg',
  },
  'jignesh-mevani': {
    file: '/neta-photos/jignesh-mevani.webp',
    credit: 'Gazal world',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jignesh_Mevani_Social_activist.jpg',
  },
  'bhajan-lal-sharma': {
    file: '/neta-photos/bhajan-lal-sharma.webp',
    credit: 'Vice President\'s Secretariat',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bhajan_Lal_Sharma_and_deputies_meets_VP_of_India.jpg',
  },
  'ashok-gehlot': {
    file: '/neta-photos/ashok-gehlot.webp',
    credit: 'Prime Minister\'s Office',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:PM_and_Gehlot_inaugurate_various_projects_at_Nathdwara_2023.jpg',
  },
  'sachin-pilot': {
    file: '/neta-photos/sachin-pilot.webp',
    credit: 'World Economic Forum from Cologny, Switzerland',
    license: 'CC BY-SA 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sachin_Pilot_at_the_India_Economic_Summit_2010_cropped.jpg',
  },
  'adityanath': {
    file: '/neta-photos/adityanath.webp',
    credit: 'Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yogi_Adityanath_2026.jpg',
  },
  'akhilesh-yadav': {
    file: '/neta-photos/akhilesh-yadav.webp',
    credit: 'HarshY17',
    license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Akhilesh_Yadav_544.jpg',
  },
  'rahul-gandhi': {
    file: '/neta-photos/rahul-gandhi.webp',
    credit: 'Himanshu Arya Khowal',
    license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rahul_Gandhi.png',
  },
  'rekha-gupta': {
    file: '/neta-photos/rekha-gupta.webp',
    credit: 'Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chief_Minister_of_Delhi,_Smt._Rekha_Gupta.jpg',
  },
  'parvesh-sahib-singh': {
    file: '/neta-photos/parvesh-sahib-singh.webp',
    credit: 'Vice President\'s Secretariat',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Parvesh_Verma_(cropped).jpg',
  },
  'vijender-gupta': {
    file: '/neta-photos/vijender-gupta.webp',
    credit: 'Ministry of Parliamentary Affairs',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Shri_Vijender_Gupta,_Speaker_of_the_Delhi_Legislative_Assembly.jpg',
  },
  'dr-mohan-yadav': {
    file: '/neta-photos/dr-mohan-yadav.webp',
    credit: 'Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mohan_Yadav,_Chief_Minister_of_Madhya_Pradesh.jpg',
  },
  'shivraj-singh-chouhan': {
    file: '/neta-photos/shivraj-singh-chouhan.webp',
    credit: 'President\'s Secretariat',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Shivraj_Singh_Chouhan_2025.jpg',
  },
  'jyotiraditya-m-scindia': {
    file: '/neta-photos/jyotiraditya-m-scindia.webp',
    credit: 'Ministry of Communication',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:H20250428182531.jpg',
  },
  'samrat-choudhary': {
    file: '/neta-photos/samrat-choudhary.webp',
    credit: 'Information and public relations department Government of Bihar',
    license: 'Attribution',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Samrat_Chaudhary_in_Rajgir.jpg',
  },
  'vijay-kumar-sinha': {
    file: '/neta-photos/vijay-kumar-sinha.webp',
    credit: 'Government of Bihar, India',
    license: 'Attribution',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Shri_Vijay_Kumar_Sinha.jpg',
  },
  'himanta-biswa-sarma': {
    file: '/neta-photos/himanta-biswa-sarma.webp',
    credit: 'President\'s Secretariat',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Himanta_Biswa_Sarma_in_2026.jpg',
  },
  'sarbananda-sonowal': {
    file: '/neta-photos/sarbananda-sonowal.webp',
    credit: 'Institution:Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sarbananda_Sonowal_with_PM_Modi_(cropped).jpg',
  },
  'gaurav-gogoi': {
    file: '/neta-photos/gaurav-gogoi.webp',
    credit: 'Gaurav Gogoi',
    license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gaurav_Gogoi_2024_(cropped).jpg',
  },
  'adv-v-d-satheesan': {
    file: '/neta-photos/adv-v-d-satheesan.webp',
    credit: 'Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:VD_Satheesan.jpg',
  },
  'pramod-sawant': {
    file: '/neta-photos/pramod-sawant.webp',
    credit: 'Goa University',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pramod_Sawant_at_the_inauguration_of_the_Chhatrapati_Shivaji_Maharaj_Chair_in_Goa_University_(cropped).jpg',
  },
  'c-joseph-vijay': {
    file: '/neta-photos/c-joseph-vijay.webp',
    credit: 'Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:JosephVijay.jpg',
  },
  'yumnam-khemchand-singh': {
    file: '/neta-photos/yumnam-khemchand-singh.webp',
    credit: 'assembly.mn.gov',
    license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:YumnamKhemchandSingh_(cropped).webp',
  },
  'lalduhoma': {
    file: '/neta-photos/lalduhoma.webp',
    credit: 'Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lalduhoma.jpg',
  },
  'neiphiu-rio': {
    file: '/neta-photos/neiphiu-rio.webp',
    credit: 'Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Neiphiu_Rio.jpg',
  },
  'omar-abdullah': {
    file: '/neta-photos/omar-abdullah.webp',
    credit: 'Prime Minister\'s Office',
    license: 'GODL-India',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Omar_Abdullah,_Chief_Minister_of_Jammu_%26_Kashmir.jpg',
  },
};

// Combined dataset: Palghar pilot (rich) + Maharashtra 282 (generated) + Gujarat + Rajasthan
import { netas as pilotNetas, constituencies as pilotConsts, badgeMeta } from './pilot';
import { mhaNetas, mhaConstituencies } from './maharashtra';
import { mpNetas, mpConstituencies } from './mp';
import { rsNetas, rsConstituencies } from './rs';
import { gujNetas, gujConstituencies } from './gujarat';
import { gujMpNetas, gujMpConstituencies } from './gujarat_mp';
import { gujRsNetas, gujRsConstituencies } from './gujarat_rs';
import { rajNetas, rajConstituencies } from './rajasthan';
import { rajMpNetas, rajMpConstituencies } from './rajasthan_mp';
import { rajRsNetas, rajRsConstituencies } from './rajasthan_rs';
import { upNetas, upConstituencies } from './uttar_pradesh';
import { upMpNetas, upMpConstituencies } from './up_mp';
import { upRsNetas, upRsConstituencies } from './up_rs';
import { delhiNetas, delhiConstituencies } from './delhi';
import { delhiMpNetas, delhiMpConstituencies } from './delhi_mp';
import { delhiRsNetas, delhiRsConstituencies } from './delhi_rs';
import { madhyaPradeshNetas, madhyaPradeshConstituencies } from './madhya_pradesh';
import { mpMpNetas, mpMpConstituencies } from './mp_mp';
import { mpRsNetas, mpRsConstituencies } from './mp_rs';
import { biharNetas, biharConstituencies } from './bihar';
import { biharMpNetas, biharMpConstituencies } from './bihar_mp';
import { biharRsNetas, biharRsConstituencies } from './bihar_rs';
import { assamNetas, assamConstituencies } from './assam';
import { assamMpNetas, assamMpConstituencies } from './assam_mp';
import { assamRsNetas, assamRsConstituencies } from './assam_rs';
import { keralaNetas, keralaConstituencies } from './kerala';
import { keralaMpNetas, keralaMpConstituencies } from './kerala_mp';
import { keralaRsNetas } from './kerala_rs';
import { goaNetas, goaConstituencies } from './goa';
import { goaMpNetas, goaMpConstituencies } from './goa_mp';
import { goaRsNetas } from './goa_rs';
import { tamilNaduNetas, tamilNaduConstituencies } from './tamilnadu';
import { tamilNaduMpNetas, tamilNaduMpConstituencies } from './tamilnadu_mp';
import { tamilNaduRsNetas } from './tamilnadu_rs';
import { manipurNetas, manipurConstituencies } from './manipur';
import { manipurMpNetas, manipurMpConstituencies } from './manipur_mp';
import { manipurRsNetas } from './manipur_rs';
import { mizoramNetas, mizoramConstituencies } from './mizoram';
import { mizoramMpNetas, mizoramMpConstituencies } from './mizoram_mp';
import { mizoramRsNetas } from './mizoram_rs';
import { nagalandNetas, nagalandConstituencies } from './nagaland';
import { nagalandMpNetas, nagalandMpConstituencies } from './nagaland_mp';
import { nagalandRsNetas } from './nagaland_rs';
import { jammuKashmirNetas, jammuKashmirConstituencies } from './jammukashmir';
import { jammuKashmirMpNetas, jammuKashmirMpConstituencies } from './jammukashmir_mp';
import { jammuKashmirRsNetas } from './jammukashmir_rs';
import { sikkimNetas, sikkimConstituencies } from './sikkim';
import { sikkimMpNetas, sikkimMpConstituencies } from './sikkim_mp';
import { sikkimRsNetas } from './sikkim_rs';
import { himachalNetas, himachalConstituencies } from './himachal';
import { himachalMpNetas, himachalMpConstituencies } from './himachal_mp';
import { himachalRsNetas } from './himachal_rs';
import { odishaNetas, odishaConstituencies } from './odisha';
import { odishaMpNetas, odishaMpConstituencies } from './odisha_mp';
import { odishaRsNetas } from './odisha_rs';
import { meghalayaNetas, meghalayaConstituencies } from './meghalaya';
import { uttarakhandNetas, uttarakhandConstituencies } from './uttarakhand';
import { arunachalNetas, arunachalConstituencies } from './arunachal';
import { meghalayaMpNetas, meghalayaMpConstituencies } from './meghalaya_mp';
import { uttarakhandMpNetas, uttarakhandMpConstituencies } from './uttarakhand_mp';
import { arunachalMpNetas, arunachalMpConstituencies } from './arunachal_mp';
import { meghalayaRsNetas } from './meghalaya_rs';
import { uttarakhandRsNetas } from './uttarakhand_rs';
import { arunachalRsNetas } from './arunachal_rs';
import { mhaWorks } from './works_mha';
import { gujWorks } from './works_guj';
import { rajWorks } from './works_raj';
import { upWorks } from './works_up';
import { delhiWorks } from './works_delhi';
import { mpWorks } from './works_mp';
import { biharWorks } from './works_bihar';
import { assamWorks } from './works_assam';
import { keralaWorks } from './works_kerala';
import { goaWorks } from './works_goa';
import { tamilNaduWorks } from './works_tamilnadu';
import { manipurWorks } from './works_manipur';
import { mizoramWorks } from './works_mizoram';
import { nagalandWorks } from './works_nagaland';
import { jammuKashmirWorks } from './works_jammukashmir';
import { sikkimWorks } from './works_sikkim';
import { himachalWorks } from './works_himachal';
import { odishaWorks } from './works_odisha';
import { meghalayaWorks } from './works_meghalaya';
import { uttarakhandWorks } from './works_uttarakhand';
import { arunachalWorks } from './works_arunachal';
import { prevMha } from './prev_mha';
import { prevGuj } from './prev_guj';
import { prevRaj } from './prev_raj';
import { prevUp } from './prev_up';
import { prevMp } from './prev_mp';
import { prevBihar } from './prev_bihar';
import { prevAssam } from './prev_assam';
import { prevKerala } from './prev_kerala';
import { prevGoa } from './prev_goa';
import { prevTamilNadu } from './prev_tamilnadu';
import { prevManipur } from './prev_manipur';
import { prevMizoram } from './prev_mizoram';
import { prevNagaland } from './prev_nagaland';
import { prevSikkim } from './prev_sikkim';
import { prevHimachal } from './prev_himachal';
import { prevOdisha } from './prev_odisha';
import { prevMeghalayaNetas } from './prev_meghalaya';
import { prevUttarakhandNetas } from './prev_uttarakhand';
import { prevArunachalNetas } from './prev_arunachal';
import type { Neta, Constituency } from './pilot';

export const allNetas: Neta[] = [...pilotNetas, ...mhaNetas, ...mpNetas, ...rsNetas, ...gujNetas, ...gujMpNetas, ...gujRsNetas, ...rajNetas, ...rajMpNetas, ...rajRsNetas, ...upNetas, ...upMpNetas, ...upRsNetas, ...delhiNetas, ...delhiMpNetas, ...delhiRsNetas, ...madhyaPradeshNetas, ...mpMpNetas, ...mpRsNetas, ...biharNetas, ...biharMpNetas, ...biharRsNetas, ...assamNetas, ...assamMpNetas, ...assamRsNetas, ...keralaNetas, ...keralaMpNetas, ...keralaRsNetas, ...goaNetas, ...goaMpNetas, ...goaRsNetas, ...tamilNaduNetas, ...tamilNaduMpNetas, ...tamilNaduRsNetas, ...manipurNetas, ...manipurMpNetas, ...manipurRsNetas, ...mizoramNetas, ...mizoramMpNetas, ...mizoramRsNetas, ...nagalandNetas, ...nagalandMpNetas, ...nagalandRsNetas, ...jammuKashmirNetas, ...jammuKashmirMpNetas, ...jammuKashmirRsNetas, ...sikkimNetas, ...sikkimMpNetas, ...sikkimRsNetas, ...himachalNetas, ...himachalMpNetas, ...himachalRsNetas, ...odishaNetas, ...odishaMpNetas, ...odishaRsNetas, ...meghalayaNetas, ...meghalayaMpNetas, ...meghalayaRsNetas, ...uttarakhandNetas, ...uttarakhandMpNetas, ...uttarakhandRsNetas, ...arunachalNetas, ...arunachalMpNetas, ...arunachalRsNetas];
export const allConstituencies: Constituency[] = [...pilotConsts, ...mhaConstituencies, ...mpConstituencies, ...rsConstituencies, ...gujConstituencies, ...gujMpConstituencies, ...gujRsConstituencies, ...rajConstituencies, ...rajMpConstituencies, ...rajRsConstituencies, ...upConstituencies, ...upMpConstituencies, ...upRsConstituencies, ...delhiConstituencies, ...delhiMpConstituencies, ...delhiRsConstituencies, ...madhyaPradeshConstituencies, ...mpMpConstituencies, ...mpRsConstituencies, ...biharConstituencies, ...biharMpConstituencies, ...biharRsConstituencies, ...assamConstituencies, ...assamMpConstituencies, ...assamRsConstituencies, ...keralaConstituencies, ...keralaMpConstituencies, ...goaConstituencies, ...goaMpConstituencies, ...tamilNaduConstituencies, ...tamilNaduMpConstituencies, ...manipurConstituencies, ...manipurMpConstituencies, ...mizoramConstituencies, ...mizoramMpConstituencies, ...nagalandConstituencies, ...nagalandMpConstituencies, ...jammuKashmirConstituencies, ...jammuKashmirMpConstituencies, ...sikkimConstituencies, ...sikkimMpConstituencies, ...himachalConstituencies, ...himachalMpConstituencies, ...odishaConstituencies, ...odishaMpConstituencies, ...meghalayaConstituencies, ...meghalayaMpConstituencies, ...uttarakhandConstituencies, ...uttarakhandMpConstituencies, ...arunachalConstituencies, ...arunachalMpConstituencies];

// Overlay verified work entries (district batches) onto generated profiles
for (const n of allNetas) {
  const w = (n.state === 'Arunachal Pradesh' ? arunachalWorks : (n.state === 'Uttarakhand' ? uttarakhandWorks : (n.state === 'Meghalaya' ? meghalayaWorks : n.state === 'Odisha' ? odishaWorks : n.state === 'Himachal Pradesh' ? himachalWorks : n.state === 'Sikkim' ? sikkimWorks : n.state === 'Jammu & Kashmir' ? jammuKashmirWorks : n.state === 'Nagaland' ? nagalandWorks : n.state === 'Mizoram' ? mizoramWorks : n.state === 'Manipur' ? manipurWorks : n.state === 'Tamil Nadu' ? tamilNaduWorks : n.state === 'Goa' ? goaWorks : n.state === 'Kerala' ? keralaWorks : n.state === 'Assam' ? assamWorks : n.state === 'Bihar' ? biharWorks : n.state === 'Madhya Pradesh' ? mpWorks : n.state === 'Delhi' ? delhiWorks : n.state === 'Uttar Pradesh' ? upWorks : n.state === 'Rajasthan' ? rajWorks : n.state === 'Gujarat' ? gujWorks : mhaWorks)))[n.slug];
  if (w && w.length) n.works = [...n.works, ...w];
}

// Overlay previous-election affidavit comparison data (2018 vs 2023 for MP, 2017 vs 2022 for UP, etc.)
for (const n of allNetas) {
  n.prevAffidavit = ((n.state === 'Arunachal Pradesh' ? prevArunachalNetas : (n.state === 'Uttarakhand' ? prevUttarakhandNetas : (n.state === 'Meghalaya' ? prevMeghalayaNetas : n.state === 'Odisha' ? prevOdisha : n.state === 'Himachal Pradesh' ? prevHimachal : n.state === 'Sikkim' ? prevSikkim : n.state === 'Jammu & Kashmir' ? null : n.state === 'Nagaland' ? prevNagaland : n.state === 'Mizoram' ? prevMizoram : n.state === 'Manipur' ? prevManipur : n.state === 'Tamil Nadu' ? prevTamilNadu : n.state === 'Goa' ? prevGoa : n.state === 'Kerala' ? prevKerala : n.state === 'Assam' ? prevAssam : n.state === 'Delhi' ? null : n.state === 'Bihar' ? prevBihar : n.state === 'Uttar Pradesh' ? prevUp : n.state === 'Rajasthan' ? prevRaj : n.state === 'Gujarat' ? prevGuj : n.state === 'Madhya Pradesh' ? prevMp : prevMha) ?? {})))[n.slug] ?? null;
}

// State helpers
export const isGujarat = (n: Neta | Constituency): boolean => (n as Neta).state === 'Gujarat';
export const isRajasthan = (n: Neta | Constituency): boolean => (n as Neta).state === 'Rajasthan';
export const isUttarPradesh = (n: Neta | Constituency): boolean => (n as Neta).state === 'Uttar Pradesh';
export const isDelhi = (n: Neta | Constituency): boolean => (n as Neta).state === 'Delhi';
export const isMadhyaPradesh = (n: Neta | Constituency): boolean => (n as Neta).state === 'Madhya Pradesh';
export const isBihar = (n: Neta | Constituency): boolean => (n as Neta).state === 'Bihar';
export const isAssam = (n: Neta | Constituency): boolean => (n as Neta).state === 'Assam';
export const isKerala = (n: Neta | Constituency): boolean => (n as Neta).state === 'Kerala';
export const isGoa = (n: Neta | Constituency): boolean => (n as Neta).state === 'Goa';
export const isTamilNadu = (n: Neta | Constituency): boolean => (n as Neta).state === 'Tamil Nadu';
export const isManipur = (n: Neta | Constituency): boolean => (n as Neta).state === 'Manipur';
export const isMizoram = (n: Neta | Constituency): boolean => (n as Neta).state === 'Mizoram';
export const isNagaland = (n: Neta | Constituency): boolean => (n as Neta).state === 'Nagaland';
export const isJammuKashmir = (n: Neta | Constituency): boolean => (n as Neta).state === 'Jammu & Kashmir';
export const isSikkim = (n: Neta | Constituency): boolean => (n as Neta).state === 'Sikkim';
export const isHimachal = (n: Neta | Constituency): boolean => (n as Neta).state === 'Himachal Pradesh';
export const isOdisha = (n: Neta | Constituency): boolean => (n as Neta).state === 'Odisha';
export const isMeghalaya = (n: Neta | Constituency): boolean => (n as Neta).state === 'Meghalaya';
export const isUttarakhand = (n: Neta | Constituency): boolean => (n as Neta).state === 'Uttarakhand';
export const isArunachal = (n: Neta | Constituency): boolean => (n as Neta).state === 'Arunachal Pradesh';
export const mhaNetasAll: Neta[] = allNetas.filter(n => !isGujarat(n) && !isRajasthan(n) && !isUttarPradesh(n) && !isDelhi(n) && !isMadhyaPradesh(n) && !isBihar(n) && !isAssam(n) && !isKerala(n) && !isGoa(n) && !isTamilNadu(n) && !isManipur(n) && !isMizoram(n) && !isNagaland(n) && !isJammuKashmir(n) && !isSikkim(n) && !isHimachal(n) && !isOdisha(n) && !isMeghalaya(n) && !isUttarakhand(n) && !isArunachal(n));
export const gujNetasAll: Neta[] = allNetas.filter(isGujarat);
export const rajNetasAll: Neta[] = allNetas.filter(isRajasthan);
export const upNetasAll: Neta[] = allNetas.filter(isUttarPradesh);
export const delhiNetasAll: Neta[] = allNetas.filter(isDelhi);
export const mpStateNetasAll: Neta[] = allNetas.filter(isMadhyaPradesh);
export const biharNetasAll: Neta[] = allNetas.filter(isBihar);
export const assamNetasAll: Neta[] = allNetas.filter(isAssam);
export const keralaNetasAll: Neta[] = allNetas.filter(isKerala);
export const goaNetasAll: Neta[] = allNetas.filter(isGoa);
export const tamilNaduNetasAll: Neta[] = allNetas.filter(isTamilNadu);
export const manipurNetasAll: Neta[] = allNetas.filter(isManipur);
export const mizoramNetasAll: Neta[] = allNetas.filter(isMizoram);
export const nagalandNetasAll: Neta[] = allNetas.filter(isNagaland);
export const jammuKashmirNetasAll: Neta[] = allNetas.filter(isJammuKashmir);
export const sikkimNetasAll: Neta[] = allNetas.filter(isSikkim);
export const himachalNetasAll: Neta[] = allNetas.filter(isHimachal);
export const odishaNetasAll: Neta[] = allNetas.filter(isOdisha);
export const meghalayaNetasAll: Neta[] = allNetas.filter(isMeghalaya);
export const uttarakhandNetasAll: Neta[] = allNetas.filter(isUttarakhand);
export const arunachalNetasAll: Neta[] = allNetas.filter(isArunachal);
export const mhaConstsAll: Constituency[] = allConstituencies.filter(c => !isGujarat(c) && !isRajasthan(c) && !isUttarPradesh(c) && !isDelhi(c) && !isMadhyaPradesh(c) && !isBihar(c) && !isAssam(c) && !isKerala(c) && !isGoa(c) && !isTamilNadu(c) && !isManipur(c) && !isMizoram(c) && !isNagaland(c) && !isJammuKashmir(c) && !isSikkim(c) && !isHimachal(c) && !isOdisha(c) && !isMeghalaya(c) && !isUttarakhand(c) && !isArunachal(c));
export const gujConstsAll: Constituency[] = allConstituencies.filter(isGujarat);
export const rajConstsAll: Constituency[] = allConstituencies.filter(isRajasthan);
export const upConstsAll: Constituency[] = allConstituencies.filter(isUttarPradesh);
export const delhiConstsAll: Constituency[] = allConstituencies.filter(isDelhi);
export const mpStateConstsAll: Constituency[] = allConstituencies.filter(isMadhyaPradesh);
export const biharConstsAll: Constituency[] = allConstituencies.filter(isBihar);
export const assamConstsAll: Constituency[] = allConstituencies.filter(isAssam);
export const keralaConstsAll: Constituency[] = allConstituencies.filter(isKerala);
export const goaConstsAll: Constituency[] = allConstituencies.filter(isGoa);
export const tamilNaduConstsAll: Constituency[] = allConstituencies.filter(isTamilNadu);
export const manipurConstsAll: Constituency[] = allConstituencies.filter(isManipur);
export const mizoramConstsAll: Constituency[] = allConstituencies.filter(isMizoram);
export const nagalandConstsAll: Constituency[] = allConstituencies.filter(isNagaland);
export const jammuKashmirConstsAll: Constituency[] = allConstituencies.filter(isJammuKashmir);
export const sikkimConstsAll: Constituency[] = allConstituencies.filter(isSikkim);
export const himachalConstsAll: Constituency[] = allConstituencies.filter(isHimachal);
export const odishaConstsAll: Constituency[] = allConstituencies.filter(isOdisha);
export const meghalayaConstsAll: Constituency[] = allConstituencies.filter(isMeghalaya);
export const uttarakhandConstsAll: Constituency[] = allConstituencies.filter(isUttarakhand);
export const arunachalConstsAll: Constituency[] = allConstituencies.filter(isArunachal);

export function statePrefix(n: Neta | Constituency): string {
  return isArunachal(n) ? '/arunachal' : isUttarakhand(n) ? '/uttarakhand' : isMeghalaya(n) ? '/meghalaya' : isOdisha(n) ? '/odisha' : isHimachal(n) ? '/himachal' : isSikkim(n) ? '/sikkim' : isJammuKashmir(n) ? '/jammu-kashmir' : isNagaland(n) ? '/nagaland' : isMizoram(n) ? '/mizoram' : isManipur(n) ? '/manipur' : isTamilNadu(n) ? '/tamil-nadu' : isGoa(n) ? '/goa' : isKerala(n) ? '/kerala' : isAssam(n) ? '/assam' : isDelhi(n) ? '/delhi' : isMadhyaPradesh(n) ? '/madhya-pradesh' : isBihar(n) ? '/bihar' : isUttarPradesh(n) ? '/uttar-pradesh' : isRajasthan(n) ? '/rajasthan' : isGujarat(n) ? '/gujarat' : '';
}

export function netaUrl(n: Neta): string {
  return `${statePrefix(n)}/neta/${n.slug}/`;
}
export function kshetraUrl(c: Constituency): string {
  return `${statePrefix(c)}/kshetra/${c.slug}/`;
}

export function getNeta(slug: string): Neta | undefined {
  return allNetas.find((n) => n.slug === slug);
}

export function getConstituency(slug: string): Constituency | undefined {
  return allConstituencies.find((c) => c.slug === slug);
}

export function netasByConstituency(slug: string): Neta[] {
  return allNetas.filter((n) => n.tenures.some((t) => t.constituencySlug === slug));
}

export { badgeMeta };
export type { Neta, Constituency };

// Aliases so pages keep working unchanged
export const netas = allNetas;
export const constituencies = allConstituencies;

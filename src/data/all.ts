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
import { mhaWorks } from './works_mha';
import { gujWorks } from './works_guj';
import { rajWorks } from './works_raj';
import { upWorks } from './works_up';
import { delhiWorks } from './works_delhi';
import { prevMha } from './prev_mha';
import { prevGuj } from './prev_guj';
import { prevRaj } from './prev_raj';
import { prevUp } from './prev_up';
import type { Neta, Constituency } from './pilot';

export const allNetas: Neta[] = [...pilotNetas, ...mhaNetas, ...mpNetas, ...rsNetas, ...gujNetas, ...gujMpNetas, ...gujRsNetas, ...rajNetas, ...rajMpNetas, ...rajRsNetas, ...upNetas, ...upMpNetas, ...upRsNetas, ...delhiNetas, ...delhiMpNetas, ...delhiRsNetas];
export const allConstituencies: Constituency[] = [...pilotConsts, ...mhaConstituencies, ...mpConstituencies, ...rsConstituencies, ...gujConstituencies, ...gujMpConstituencies, ...gujRsConstituencies, ...rajConstituencies, ...rajMpConstituencies, ...rajRsConstituencies, ...upConstituencies, ...upMpConstituencies, ...upRsConstituencies, ...delhiConstituencies, ...delhiMpConstituencies, ...delhiRsConstituencies];

// Overlay verified work entries (district batches) onto generated profiles
for (const n of allNetas) {
  const w = (n.state === 'Delhi' ? delhiWorks : n.state === 'Uttar Pradesh' ? upWorks : n.state === 'Rajasthan' ? rajWorks : n.state === 'Gujarat' ? gujWorks : mhaWorks)[n.slug];
  if (w && w.length) n.works = [...n.works, ...w];
}

// Overlay previous-election affidavit comparison data (2017 vs 2022 for UP)
for (const n of allNetas) {
  n.prevAffidavit = ((n.state === 'Delhi' ? null : n.state === 'Uttar Pradesh' ? prevUp : n.state === 'Rajasthan' ? prevRaj : (n.state === 'Gujarat' ? prevGuj : prevMha)) ?? {})[n.slug] ?? null;
}

// State helpers
export const isGujarat = (n: Neta | Constituency): boolean => (n as Neta).state === 'Gujarat';
export const isRajasthan = (n: Neta | Constituency): boolean => (n as Neta).state === 'Rajasthan';
export const isUttarPradesh = (n: Neta | Constituency): boolean => (n as Neta).state === 'Uttar Pradesh';
export const isDelhi = (n: Neta | Constituency): boolean => (n as Neta).state === 'Delhi';
export const mhaNetasAll: Neta[] = allNetas.filter(n => !isGujarat(n) && !isRajasthan(n) && !isUttarPradesh(n) && !isDelhi(n));
export const gujNetasAll: Neta[] = allNetas.filter(isGujarat);
export const rajNetasAll: Neta[] = allNetas.filter(isRajasthan);
export const upNetasAll: Neta[] = allNetas.filter(isUttarPradesh);
export const delhiNetasAll: Neta[] = allNetas.filter(isDelhi);
export const mhaConstsAll: Constituency[] = allConstituencies.filter(c => !isGujarat(c) && !isRajasthan(c) && !isUttarPradesh(c) && !isDelhi(c));
export const gujConstsAll: Constituency[] = allConstituencies.filter(isGujarat);
export const rajConstsAll: Constituency[] = allConstituencies.filter(isRajasthan);
export const upConstsAll: Constituency[] = allConstituencies.filter(isUttarPradesh);
export const delhiConstsAll: Constituency[] = allConstituencies.filter(isDelhi);

export function statePrefix(n: Neta | Constituency): string {
  return isDelhi(n) ? '/delhi' : isUttarPradesh(n) ? '/uttar-pradesh' : isRajasthan(n) ? '/rajasthan' : isGujarat(n) ? '/gujarat' : '';
}

export function netaUrl(n: Neta): string {
  return `${statePrefix(n)}/neta/${n.slug}`;
}
export function kshetraUrl(c: Constituency): string {
  return `${statePrefix(c)}/kshetra/${c.slug}`;
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

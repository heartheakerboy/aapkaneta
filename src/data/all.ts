// Combined dataset: Palghar pilot (rich) + Maharashtra 282 (generated) + Gujarat
import { netas as pilotNetas, constituencies as pilotConsts, badgeMeta } from './pilot';
import { mhaNetas, mhaConstituencies } from './maharashtra';
import { mpNetas, mpConstituencies } from './mp';
import { rsNetas, rsConstituencies } from './rs';
import { gujNetas, gujConstituencies } from './gujarat';
import { gujMpNetas, gujMpConstituencies } from './gujarat_mp';
import { gujRsNetas, gujRsConstituencies } from './gujarat_rs';
import { mhaWorks } from './works_mha';
import { gujWorks } from './works_guj';
import type { Neta, Constituency } from './pilot';

export const allNetas: Neta[] = [...pilotNetas, ...mhaNetas, ...mpNetas, ...rsNetas, ...gujNetas, ...gujMpNetas, ...gujRsNetas];
export const allConstituencies: Constituency[] = [...pilotConsts, ...mhaConstituencies, ...mpConstituencies, ...rsConstituencies, ...gujConstituencies, ...gujMpConstituencies, ...gujRsConstituencies];

// Overlay verified work entries (district batches) onto generated profiles
for (const n of allNetas) {
  const w = (n.state === 'Gujarat' ? gujWorks : mhaWorks)[n.slug];
  if (w && w.length) n.works = [...n.works, ...w];
}

// State helpers
export const isGujarat = (n: Neta | Constituency): boolean => (n as Neta).state === 'Gujarat';
export const mhaNetasAll: Neta[] = allNetas.filter(n => !isGujarat(n));
export const gujNetasAll: Neta[] = allNetas.filter(isGujarat);
export const mhaConstsAll: Constituency[] = allConstituencies.filter(c => !isGujarat(c));
export const gujConstsAll: Constituency[] = allConstituencies.filter(isGujarat);

export function netaUrl(n: Neta): string {
  return `${isGujarat(n) ? '/gujarat' : ''}/neta/${n.slug}`;
}
export function kshetraUrl(c: Constituency): string {
  return `${isGujarat(c) ? '/gujarat' : ''}/kshetra/${c.slug}`;
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

// Combined dataset: Palghar pilot (rich) + Maharashtra 282 (generated)
import { netas as pilotNetas, constituencies as pilotConsts, badgeMeta } from './pilot';
import { mhaNetas, mhaConstituencies } from './maharashtra';
import { mpNetas, mpConstituencies } from './mp';
import { rsNetas, rsConstituencies } from './rs';
import { mhaWorks } from './works_mha';
import type { Neta, Constituency } from './pilot';

export const allNetas: Neta[] = [...pilotNetas, ...mhaNetas, ...mpNetas, ...rsNetas];
export const allConstituencies: Constituency[] = [...pilotConsts, ...mhaConstituencies, ...mpConstituencies, ...rsConstituencies];

// Overlay verified work entries (district batches) onto generated profiles
for (const n of allNetas) {
  const w = mhaWorks[n.slug];
  if (w && w.length) n.works = [...n.works, ...w];
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

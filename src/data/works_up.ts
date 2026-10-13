// Uttar Pradesh verified work entries (district-wise batches).
// Rajasthan pattern: mining batches append entries here as they are verified.
// Key = neta slug, value = Work[] entries. Neutral, source-cited entries only.
import type { Work } from './pilot';

export const upWorks: Record<string, Work[]> = {};

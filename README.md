# AapkaNeta.org

**Har neta ka hisaab, har nagrik ke haath.** — India ka RTI-verified neta work-tracker.

Pilot: Palghar jila, Maharashtra (6 MLA + 1 MP). Roadmap: Maharashtra 288 → Pure Bharat.

## Stack
- Astro 5 (static) + Cloudflare Pages
- D1 database `aapkaneta-db` (schema: `scripts/cf_d1.py schema <uuid>`)
- Content Hindi-first; URLs English slugs

## Develop
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
```

## Deploy
```bash
~/workspace/skills/cloudflare/bin/cloudflare-pages-deploy dist --project-name aapkaneta
```

## Data usool
Bina verification badge ke koi "kaam" list nahi hota. Badges: Sarkari Record / RTI Verified / News Report / Dawa. Detail: `BLUEPRINT.md`.

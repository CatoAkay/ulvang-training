# Ulvang Training

Premium Nordic ski training website for a coaching concept led by former elite athletes Laila Kveli, Jerry Ahrlin, Jørgen Appelkvist Ulvang, and Ane Appelkvist Ulvang.

## 🌐 Live

Deploy to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🏔️ Om prosjektet

Ulvang Training er et digitalt treningskonsept for langrenn og Ski Classics. Nettsiden presenterer konseptet, trenerne, treningsinnholdet og samler inn interessemeldinger fra potensielle deltakere.

---

## ✅ Nåværende status

Nettsiden er fullbygget og klar for produksjon.

### Implementerte seksjoner

| Seksjon | Beskrivelse |
|---|---|
| **Navigation** | Sticky navbar, transparent → mørk ved scroll, mobilmeny |
| **Hero** | Fullskjerm med hero-bilde, animert overskrift, stats-bar og CTA |
| **Konseptet** | Tokolonne-layout med sesongkronikk-kort |
| **Hva du får** | 7 animerte feature-kort (treningsprogram, styrke, teknikk, digitale økter, samlinger, oppfølging, fellesskap) |
| **Trenere** | 4-kolonne grid med coachkort – klikk åpner animert modal med fullbiografi |
| **Samlinger** | Samlingsoversikt med feature-liste |
| **Hvorfor oss** | Tillitstbygging med statistikk og Team Engcon-kort |
| **Deltakere** | Testimonials (placeholder, klar til å erstattes) |
| **Meld interesse** | React Hook Form med validering, simulert innsending, suksess-tilstand |
| **FAQ** | Tilgjengelig trekkspillkomponent med 8 spørsmål |
| **Footer** | Navigasjon, kontakt, trenere, sosiale medier, copyright og utviklerkredit |

### Bilder

Alle bilder er lagt inn og kobles opp via Vite-import (hash-navngitt og cacheoptimalisert):

| Fil | Brukes i |
|---|---|
| `src/assets/hero.jpg` | Hero-seksjon |
| `src/assets/lailaKveli.jpg` | Laila Kveli – coachkort og modal |
| `src/assets/jerryAhrlin.jpg` | Jerry Ahrlin – coachkort og modal |
| `src/assets/joergenUlvang.jpg` | Jørgen Appelkvist Ulvang – coachkort og modal |
| `src/assets/aneUlvang.jpg` | Ane Appelkvist Ulvang – coachkort og modal |

---

## 🛠️ Tech Stack

| Teknologi | Versjon | Bruk |
|---|---|---|
| React | 19 | UI-rammeverk |
| TypeScript | 6 | Typesikkerhet |
| Vite | 8 | Build-verktøy |
| Framer Motion | 12 | Animasjoner |
| Lucide React | latest | Ikoner |
| React Hook Form | 7 | Skjemahåndtering |
| CSS Modules | – | Scopede stiler |
| Space Grotesk + Inter | – | Google Fonts |

---

## 🏗️ Prosjektstruktur

```
src/
├── assets/              # Bilder (hero, coaches)
├── components/
│   ├── Navigation/      # Sticky nav med mobilmeny
│   ├── CoachModal/      # Animert modal med trenerbiografi
│   └── FaqAccordion/    # Tilgjengelig FAQ-trekkspill
├── data/
│   ├── coaches.ts       # Trenerdata og biografier
│   ├── faq.ts           # FAQ-innhold
│   └── testimonials.ts  # Testimonials (placeholder)
├── hooks/
│   └── useScrollPosition.ts
├── sections/
│   ├── Hero/
│   ├── About/
│   ├── Features/
│   ├── Coaches/
│   ├── TrainingCamps/
│   ├── WhyUs/
│   ├── Testimonials/
│   ├── Contact/
│   ├── FAQ/
│   └── Footer/
├── styles/
│   └── variables.css    # Design tokens
└── types/
    └── index.ts
```

---

## 🚀 Kom i gang

```bash
# Installer avhengigheter
pnpm install

# Start dev-server
pnpm dev

# Bygg for produksjon
pnpm build

# Forhåndsvis produksjonsbygg
pnpm preview
```

> **Node-versjon:** Prosjektet bruker Node 22 (LTS). Se `.nvmrc`.  
> Bruk `nvm use` i prosjektmappen for å bytte automatisk.

---

## 🚢 Deploy til Vercel

Prosjektet er konfigurert for Vercel via `vercel.json`:

```json
{
  "buildCommand": "pnpm run build",
  "installCommand": "pnpm install --frozen-lockfile",
  "outputDirectory": "dist"
}
```

**Steg:**
1. Push til GitHub
2. Importer repo på [vercel.com/new](https://vercel.com/new)
3. Vercel leser `vercel.json` og `.nvmrc` automatisk
4. Deploy kjøres med pnpm og Node 22

---

## 📋 Gjenstående før lansering

- [ ] Erstatt placeholder-testimonials med ekte tilbakemeldinger fra deltakere
- [ ] Koble kontaktskjema til backend/e-posttjeneste (se `src/sections/Contact/Contact.tsx`)
- [ ] Legg til faktiske lenker til sosiale medier i Footer
- [ ] Oppdater kontakt-e-post i Footer
- [ ] Sett korrekt domene i `index.html` (Open Graph `og:url`)
- [ ] Legg til `public/og-image.jpg` for sosiale delinger

---

## 📬 Kontaktskjema – backend-integrasjon

Skjemaet simulerer innsending for øyeblikket. Se `submitForm`-funksjonen i `src/sections/Contact/Contact.tsx` for TODO-kommentarer. Anbefalte alternativer:

- [Resend](https://resend.com) – e-post-API
- [Formspree](https://formspree.io) – ingen backend nødvendig
- [Netlify Forms](https://docs.netlify.com/forms/setup/) – hvis deployet på Netlify
- Egendefinert API-endepunkt

---

## 🎨 Design tokens

Alle tokens er definert i `src/styles/variables.css`:

| Token | Verdi | Bruk |
|---|---|---|
| `--color-bg` | `#07090e` | Sidebakgrunn |
| `--color-accent` | `#5ba3c9` | Isblå aksent |
| `--color-text` | `#e8edf4` | Primærtekst |
| `--font-heading` | Space Grotesk | Overskrifter |
| `--font-body` | Inter | Brødtekst |

---

## 👤 Utvikler

Designed & Developed by [Cato Akay](https://www.linkedin.com/in/cato-hilmi-akay-5058a7173/)

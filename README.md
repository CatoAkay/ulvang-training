# XC Performance

Premium Nordic ski training website for a coaching concept led by former elite athletes Laila Kveli, Jerry Ahrlin, Jørgen Appelkvist Ulvang, and Ane Appelkvist Ulvang.

## 🌐 Live

Deploy to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🏔️ Om prosjektet

XC Performance er et digitalt treningskonsept for langrenn og Ski Classics. Nettsiden presenterer konseptet, trenerne, treningsinnholdet og samler inn interessemeldinger fra potensielle deltakere.

---

## ✅ Nåværende status

Nettsiden er fullbygget og klar for produksjon.

### Implementerte seksjoner

| Seksjon | Beskrivelse |
|---|---|
| **Navigation** | Sticky navbar, transparent → mørk ved scroll, mobilmeny, språkveksler (NO/SV/EN) |
| **Hero** | Fullskjerm med hero-bilde, animert overskrift, stats-bar og CTA |
| **Konseptet** | Tokolonne-layout med sesongkronikk-kort |
| **Hva du får** | 7 animerte feature-kort (treningsprogram, styrke, teknikk, digitale økter, samlinger, oppfølging, fellesskap) |
| **Trenere** | 4-kolonne grid med coachkort – klikk åpner animert modal med fullbiografi |
| **Priser** | Tydelige priskort (årsmedlemskap + samlingspriser) |
| **Samlinger** | Samlingsoversikt med Mora camp-kort og påmeldingsmodal |
| **Hvorfor oss** | Tillitsbygging med statistikk og Team Engcon-kort |
| **Deltakere** | Testimonials (placeholder, klar til å erstattes) |
| **Meld interesse** | React Hook Form med validering, EmailJS-integrasjon, suksess-tilstand |
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
│   ├── Navigation/      # Sticky nav med mobilmeny + språkveksler
│   ├── CoachModal/      # Animert modal med trenerbiografi
│   ├── CampRegistrationModal/  # Mora-samling påmeldingsmodal
│   └── FaqAccordion/    # Tilgjengelig FAQ-trekkspill
├── context/
│   └── LanguageContext.tsx   # Språkkontext (NO/SV/EN) med localStorage
├── data/
│   ├── coaches.ts       # Statisk trenerdata (id, foto, lokasjon)
│   ├── faq.ts           # FAQ-innhold (NO – brukes som fallback)
│   └── testimonials.ts  # Testimonials (placeholder)
├── hooks/
│   └── useScrollPosition.ts
├── i18n/
│   ├── types.ts         # Translation interface
│   ├── index.ts         # Eksporterer translations og LANG_LABELS
│   ├── no.ts            # 🇳🇴 Norsk (kildespråk)
│   ├── sv.ts            # 🇸🇪 Svensk
│   └── en.ts            # 🇬🇧 Engelsk
├── sections/
│   ├── Hero/
│   ├── About/
│   ├── Features/
│   ├── Coaches/
│   ├── Pricing/
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

## 🌐 Flerspråklig støtte (NO / SV / EN)

Nettsiden støtter norsk, svensk og engelsk. Valgt språk lagres i `localStorage` og huskes mellom besøk.

### Arkitektur

| Fil | Ansvar |
|---|---|
| `src/i18n/types.ts` | Fullstendig `Translation`-interface med alle tekstfelter |
| `src/i18n/no.ts` | Norsk – kildespråk, brukes som referanse |
| `src/i18n/sv.ts` | Svensk |
| `src/i18n/en.ts` | Engelsk |
| `src/i18n/index.ts` | Samler alle oversettelser i ett `translations`-objekt |
| `src/context/LanguageContext.tsx` | React Context med `useLanguage()` hook |

### Bruke oversettelser i en komponent

```tsx
import { useLanguage } from '../../context/LanguageContext';

export default function MySection() {
  const { t } = useLanguage();
  return <h1>{t.hero.headlineLine1}</h1>;
}
```

### Bytte språk

```tsx
const { lang, setLang } = useLanguage();
setLang('sv'); // 'no' | 'sv' | 'en'
```

### Legge til / endre tekst

1. Åpne `src/i18n/types.ts` og legg til feltet i `Translation`-interfacet
2. Legg til verdien i `src/i18n/no.ts` (norsk – kildespråk)
3. Legg til tilsvarende verdi i `src/i18n/sv.ts` og `src/i18n/en.ts`
4. TypeScript vil rapportere feil hvis en oversettelse mangler

### Viktig: EmailJS og skjemafelt

Skjema-variabelnavn sendt til EmailJS er **ikke** oversatt – kun display-tekster endres:

**Kontaktskjema** (`template_39rs5hy`):
`name`, `email`, `phone`, `experience`, `goal`, `message`

**Samlingspåmelding** (`template_491cugn`):
`camp_name`, `first_name`, `last_name`, `email`, `phone`, `address`,
`arrival_day`, `accommodation`, `roommate`, `allergies`, `message`, `consent`, `language`

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
- [ ] Legg til faktiske lenker til sosiale medier i Footer
- [ ] Oppdater kontakt-e-post i Footer
- [ ] Sett korrekt domene i `index.html` (Open Graph `og:url`)
- [ ] Legg til `public/og-image.jpg` for sosiale delinger

---

## 📬 EmailJS-integrasjon

Begge skjemaer bruker EmailJS. Sett følgende miljøvariabler (se `.env.example`):

```
VITE_EMAILJS_PUBLIC_KEY=...
VITE_EMAILJS_SERVICE_ID=service_2iorjdh
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_39rs5hy
VITE_EMAILJS_CAMP_TEMPLATE_ID=template_491cugn
```

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

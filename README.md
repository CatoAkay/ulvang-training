# Ulvang Training

Premium Nordic ski training website for a coaching concept led by former elite athletes Laila Kveli, Jerry Ahrlin, Jørgen Appelkvist Ulvang, and Ane Appelkvist Ulvang.

## 🌐 Live

Deploy to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🏔️ About the Project

Ulvang Training is a digital coaching concept for cross-country skiing and Ski Classics. The website presents the concept, the coaches, training offerings, and collects interest registrations.

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** – build tool
- **Framer Motion** – animations
- **Lucide React** – icons
- **React Hook Form** – form handling
- **CSS Modules** – scoped styling
- **Google Fonts** – Space Grotesk + Inter

## 🏗️ Project Structure

```
src/
├── assets/          # Static assets (hero image, etc.)
├── components/
│   ├── Navigation/  # Sticky nav with mobile menu
│   ├── CoachModal/  # Animated coach bio modal
│   └── FaqAccordion/ # Accessible FAQ accordion
├── data/
│   ├── coaches.ts   # Coach profiles and biographies
│   ├── faq.ts       # FAQ content
│   └── testimonials.ts # Testimonials (placeholders)
├── hooks/
│   └── useScrollPosition.ts
├── sections/
│   ├── Hero/         # Full-screen hero
│   ├── About/        # Concept explanation
│   ├── Features/     # What you get (7 cards)
│   ├── Coaches/      # Coach grid + modal
│   ├── TrainingCamps/ # Physical camps info
│   ├── WhyUs/        # Trust section with stats
│   ├── Testimonials/ # Social proof
│   ├── Contact/      # Interest registration form
│   ├── FAQ/          # Accordion FAQ
│   └── Footer/       # Footer with nav
├── styles/
│   └── variables.css # Design tokens (colors, spacing)
└── types/
    └── index.ts      # TypeScript interfaces
```

## 🚀 Getting Started

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📸 Images

Images should come from:
`https://lightroom.adobe.com/shares/c2ae63b881f148378c5b8947bade0033`

To replace images:
1. **Hero image** – Replace `src/assets/hero.png`
2. **Coach photos** – Set `photo` field in `src/data/coaches.ts`
3. **OG image** – Add `public/og-image.jpg`

## 📋 TODO Before Launch

- [ ] Replace `hero.png` with actual high-res hero photo
- [ ] Add coach photos to `src/data/coaches.ts`
- [ ] Add `public/og-image.jpg`
- [ ] Connect contact form to backend (see `src/sections/Contact/Contact.tsx`)
- [ ] Replace placeholder testimonials with real ones
- [ ] Add actual social media links in `src/sections/Footer/Footer.tsx`
- [ ] Update contact email in Footer
- [ ] Set actual domain in `index.html` Open Graph tags

## 📬 Contact Form Integration

The form currently simulates submission. See `src/sections/Contact/Contact.tsx` – the `submitForm` function has TODO comments. Options: Resend, Formspree, Netlify Forms, or a custom API endpoint.

## 🚢 Deploy to Vercel

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite – `vercel.json` is pre-configured

## 🎨 Design Tokens

All tokens are in `src/styles/variables.css`:

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#07090e` | Page background |
| `--color-accent` | `#5ba3c9` | Ice blue accent |
| `--color-text` | `#e8edf4` | Primary text |
| `--font-heading` | Space Grotesk | Headings |
| `--font-body` | Inter | Body copy |

export type Lang = 'no' | 'sv' | 'en';

export interface CoachTranslation {
  role: string;
  shortBio: string;
  fullBio: string[];
  achievements: string[];
}

export interface FaqTranslation {
  question: string;
  answer: string;
}

export interface TestimonialTranslation {
  quote: string;
  name: string;
  details: string;
  achievement?: string;
}

export interface PricingService {
  title: string;
  description: string;
  includes: string[];
  note?: string;
  price: string;   // fully formatted, e.g. "SEK 1 490,-"
  cta: string;
}

export interface Translation {
  lang: Lang;

  nav: {
    links: Array<{ label: string; href: string }>;
    cta: string;
  };

  hero: {
    badge: string;
    headlineLine1: string;
    headlineAccent: string;
    sub: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollText: string;
    stats: Array<{ number: string; label: string }>;
  };

  about: {
    label: string;
    heading: string;   // use \n for line break
    body: [string, string];
    pillars: Array<{ title: string; desc: string }>;
    card: { title: string; sub: string };
    timeline: Array<{ title: string; desc: string }>;
  };

  features: {
    label: string;
    heading: string;   // use \n for line break
    sub: string;
    items: Array<{ tag: string; title: string; desc: string }>;
  };

  coaches: {
    label: string;
    heading: string;
    sub: string;
    readMore: string;
    modal: { bioSection: string; achievementsSection: string };
    items: CoachTranslation[];
  };

  pricing: {
    label: string;
    heading: string;   // use \n for line break
    sub: string;
    recommended: string;
    membership: {
      label: string;
      period: string;
      features: string[];
      cta: string;
    };
    campCards: Array<{
      label: string;
      subLabel: string;
      period: string;
      tag: string | null;
      features: string[];
      cta: string;
    }>;
    services: PricingService[];
    servicesLabel: string;
    note: string;
  };

  camps: {
    label: string;
    heading: string;
    sub: string;
    nextCamp: {
      eyebrow: string;
      month: string;
      duration: string;
      desc: string;
      programLabel: string;
      highlights: string[];
      spots: string;
      cta: string;
    };
    infoCards: Array<{ title: string; desc: string }>;
    bodyText: [string, string];
    featureCard: {
      imgLabel: string;
      items: Array<{ bold: string; rest: string }>;
      pricingNote: { strong: string; rest: string };
    };
  };

  campModal: {
    eyebrow: string;
    title: string;
    deadline: { label: string; date: string };
    formNote: string;
    meta: { date: string; location: string; participants: string };
    fields: {
      firstName: { label: string; placeholder: string; error: string };
      lastName: { label: string; placeholder: string; error: string };
      email: { label: string; placeholder: string; error: string; patternError: string };
      phone: { label: string; placeholder: string; error: string };
      address: { label: string; placeholder: string; error: string };
      arrivalDay: { label: string; placeholder: string; error: string; hint: string };
      accommodation: { label: string; placeholder: string; error: string; hint: string };
      roommate: { label: string; placeholder: string };
      allergies: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
      consent: { text: string; error: string };
    };
    arrivalOptions: Array<{ value: string; label: string }>;
    accommodationOptions: Array<{ value: string; label: string }>;
    submit: string;
    submitting: string;
    sendError: string;
    success: { title: string; sub: string; close: string };
    consentYes: string;
    consentNo: string;
  };

  whyUs: {
    label: string;
    heading: string;   // use \n for line break
    bodyText: [string, string];
    reasons: Array<{ title: string; desc: string }>;
    stats: Array<{ value: string; desc: string }>;
    teamCard: { title: string; desc: string };
    classicsCard: { title: string; desc: string };
  };

  testimonials: {
    label: string;
    heading: string;
    disclaimer: string;
    items: TestimonialTranslation[];
  };

  contact: {
    label: string;
    heading: string;   // use \n for line break
    bodyText: string;
    infoItems: Array<{ title: string; desc: string }>;
    form: {
      title: string;
      sub: string;
      submit: string;
      submitting: string;
      sendError: string;
      success: { title: string; sub: string };
      fields: {
        navn: { label: string; placeholder: string; error: string };
        epost: { label: string; placeholder: string; error: string; patternError: string };
        telefon: { label: string; placeholder: string };
        erfaring: {
          label: string;
          placeholder: string;
          error: string;
          options: Array<{ value: string; label: string }>;
        };
        maal: {
          label: string;
          placeholder: string;
          error: string;
          options: Array<{ value: string; label: string }>;
        };
        melding: { label: string; placeholder: string };
      };
    };
  };

  faq: {
    label: string;
    heading: string;   // use \n for line break
    sub: string;
    cta: string;
    items: FaqTranslation[];
  };

  footer: {
    brandDesc: string;
    navTitle: string;
    coachesTitle: string;
    contactTitle: string;
    contactCta: string;
    copyright: string;
    legal: { privacy: string; terms: string; cookies: string };
    navLinks: Array<{ label: string; href: string }>;
  };
}


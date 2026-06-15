export interface Coach {
  id: string;
  name: string;
  role: string;
  location: string;
  age: number;
  shortBio: string;
  fullBio: string[];
  achievements: string[];
  photo?: string; // Path to photo - replace with actual image path
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  details: string;
  achievement?: string;
}

export interface ContactFormData {
  navn: string;
  epost: string;
  telefon?: string;
  erfaring: string;
  maal: string;
  melding?: string;
}


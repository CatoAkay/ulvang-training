export type { Lang, Translation, CoachTranslation, FaqTranslation, TestimonialTranslation } from './types';
export { no } from './no';
export { sv } from './sv';
export { en } from './en';

import { no } from './no';
import { sv } from './sv';
import { en } from './en';
import type { Lang, Translation } from './types';

export const translations: Record<Lang, Translation> = { no, sv, en };

export const LANG_LABELS: Record<Lang, string> = {
  no: 'NO',
  sv: 'SV',
  en: 'EN',
};


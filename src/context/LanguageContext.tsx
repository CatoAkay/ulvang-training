import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { translations, LANG_LABELS } from '../i18n';
import type { Lang, Translation } from '../i18n';

const STORAGE_KEY = 'xcp-lang';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
  langLabels: Record<Lang, string>;
  langs: Lang[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'no' || stored === 'sv' || stored === 'en') return stored;
  } catch {
    // localStorage unavailable
  }
  return 'no';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  // Keep document lang attribute in sync
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang],
    langLabels: LANG_LABELS,
    langs: ['no', 'sv', 'en'] as Lang[],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}


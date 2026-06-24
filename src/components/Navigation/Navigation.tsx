import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mountain } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Navigation.module.css';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navigation() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, setLang, langs, langLabels } = useLanguage();

  const handleNav = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        role="navigation"
        aria-label="Hovednavigasjon"
      >
        <div className={`container ${styles.inner}`}>
          <div
            className={styles.logo}
            onClick={() => scrollToSection('hero')}
            role="button"
            tabIndex={0}
            aria-label="Tilbake til toppen – XC Performance"
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection('hero')}
          >
            <div className={styles.logoMark}>
              <Mountain size={20} strokeWidth={2.5} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>XC Performance</span>
              <span className={styles.logoSub}>Nordic Endurance</span>
            </div>
          </div>

          <nav className={styles.desktopNav}>
            {t.nav.links.map((item) => (
              <button
                key={item.href}
                className={styles.navLink}
                onClick={() => handleNav(item.href)}
              >
                {item.label}
              </button>
            ))}

            {/* Language toggle – desktop */}
            <div className={styles.langToggle} role="group" aria-label="Select language">
              {langs.map((l) => (
                <button
                  key={l}
                  className={`${styles.langBtn} ${lang === l ? styles.activeLang : ''}`}
                  onClick={() => setLang(l)}
                  aria-label={`Switch to ${langLabels[l]}`}
                  aria-pressed={lang === l}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>

            <button
              className={styles.navCta}
              onClick={() => scrollToSection('kontakt')}
            >
              {t.nav.cta}
            </button>
          </nav>

          <button
            className={`${styles.mobileToggle} ${mobileOpen ? styles.open : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {t.nav.links.map((item, i) => (
              <motion.button
                key={item.href}
                className={styles.mobileNavLink}
                onClick={() => handleNav(item.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              className={styles.mobileCta}
              onClick={() => handleNav('kontakt')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              {t.nav.cta}
            </motion.button>

            {/* Language toggle – mobile */}
            <motion.div
              className={styles.mobileLangToggle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
              role="group"
              aria-label="Select language"
            >
              {langs.map((l) => (
                <button
                  key={l}
                  className={`${styles.mobileLangBtn} ${lang === l ? styles.activeLang : ''}`}
                  onClick={() => setLang(l)}
                  aria-label={`Switch to ${langLabels[l]}`}
                  aria-pressed={lang === l}
                >
                  {langLabels[l]}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

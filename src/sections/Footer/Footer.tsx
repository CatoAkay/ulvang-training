import { Mountain, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const coachLinks = [
  'Laila Kveli',
  'Jerry Ahrlin',
  'Jørgen Appelkvist Ulvang',
  'Ane Appelkvist Ulvang',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoMark}><Mountain size={20} strokeWidth={2.5} /></div>
              <div className={styles.logoText}>
                <span className={styles.logoName}>XC Performance</span>
                <span className={styles.logoSub}>Nordic Endurance</span>
              </div>
            </div>
            <p className={styles.brandDesc}>{t.footer.brandDesc}</p>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.col}>
            <div className={styles.colTitle}>{t.footer.navTitle}</div>
            <nav className={styles.colLinks} aria-label="Footer-navigasjon">
              {t.footer.navLinks.map((link) => (
                <button key={link.href} className={styles.colLink} onClick={() => scrollToSection(link.href)}>
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Coaches */}
          <div className={styles.col}>
            <div className={styles.colTitle}>{t.footer.coachesTitle}</div>
            <div className={styles.colLinks}>
              {coachLinks.map((name) => (
                <button key={name} className={styles.colLink} onClick={() => scrollToSection('trenere')}>
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <div className={styles.colTitle}>{t.footer.contactTitle}</div>
            <div className={styles.contactItem}>
              <Mail size={14} />
              <span>kontakt@xcperformance.no</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={14} />
              <span>Trondheim & Östersund</span>
            </div>
            <button className={styles.colLink} onClick={() => scrollToSection('kontakt')} style={{ marginTop: '8px' }}>
              {t.footer.contactCta}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>© {year} XC Performance. {t.footer.copyright}</p>
          <div className={styles.bottomLinks}>
            <button className={styles.bottomLink}>{t.footer.legal.privacy}</button>
            <button className={styles.bottomLink}>{t.footer.legal.terms}</button>
            <button className={styles.bottomLink}>{t.footer.legal.cookies}</button>
          </div>
        </div>

        {/* Developer credit */}
        <div className={styles.devCredit}>
          <p className={styles.devCreditText}>
            Designed &amp; Developed by{' '}
            <a href="https://www.linkedin.com/in/cato-hilmi-akay-5058a7173/" target="_blank" rel="noopener noreferrer" className={styles.devCreditLink} aria-label="Cato Akay – LinkedIn (opens in new tab)">
              Cato Akay
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

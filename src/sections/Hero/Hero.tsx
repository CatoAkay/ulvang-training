import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import heroImg from '../../assets/fjell.jpg';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className={styles.hero} aria-label="Forside">
      <div className={styles.bg}>
        <img src={heroImg} alt="Skiløper i nordisk vinterlandskap" className={styles.bgImg} loading="eager" fetchPriority="high" />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>{t.hero.scrollText}</span>
        <div className={styles.scrollLine} />
      </div>

      <div className={styles.content}>
        <div className="container">
          <motion.div className={styles.inner} variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className={styles.badge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>{t.hero.badge}</span>
            </motion.div>

            <motion.h1 variants={item} className={styles.headline}>
              {t.hero.headlineLine1}<br />
              <span className={styles.headlineAccent}>{t.hero.headlineAccent}</span>
            </motion.h1>

            <motion.p variants={item} className={styles.sub}>
              {t.hero.sub.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 ? <br /> : null}</span>
              ))}
            </motion.p>

            <motion.div variants={item} className={styles.description}>
              {t.hero.description.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </motion.div>

            <motion.div variants={item} className={styles.ctas}>
              <button className={styles.ctaPrimary} onClick={() => scrollToSection('kontakt')} aria-label={t.hero.ctaPrimary}>
                {t.hero.ctaPrimary}
                <ChevronRight size={18} />
              </button>
              <button className={styles.ctaSecondary} onClick={() => scrollToSection('konseptet')} aria-label={t.hero.ctaSecondary}>
                {t.hero.ctaSecondary}
                <ArrowDown size={16} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div className={styles.statsBar} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}>
        <div className={`container ${styles.statsInner}`}>
          {t.hero.stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statNumber}>
                {stat.number.split('\n').map((line, j) => (
                  <span key={j}>{line}{j === 0 && stat.number.includes('\n') ? <br /> : null}</span>
                ))}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
              {i < t.hero.stats.length - 1 && <div className={styles.statDivider} aria-hidden="true" />}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
// TODO: Replace with actual hero image from Lightroom gallery
// https://lightroom.adobe.com/shares/c2ae63b881f148378c5b8947bade0033
import heroImg from '../../assets/hero.jpg';
import styles from './Hero.module.css';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Forside">
      {/* Background */}
      <div className={styles.bg}>
        {/* TODO: Replace heroImg with actual image from Lightroom gallery */}
        <img
          src={heroImg}
          alt="Skiløper i nordisk vinterlandskap"
          className={styles.bgImg}
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className="container">
          <motion.div
            className={styles.inner}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className={styles.badge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>Langrenn & Ski Classics</span>
            </motion.div>

            <motion.h1 variants={item} className={styles.headline}>
              Tren som<br />
              <span className={styles.headlineAccent}>en eliteutøver</span>
            </motion.h1>

            <motion.p variants={item} className={styles.sub}>
              Strukturert skitrening med<br />
              tidligere proffere
            </motion.p>

            <motion.p variants={item} className={styles.description}>
              Digital treningsveiledning, ukentlige treningsøkter og fysiske samlinger –
              ledet av Laila Kveli, Jerry Ahrlin og Team Engcon-trenerne.
              For deg som vil gjennomføre eller forbedre deg i langrenn og Ski Classics.
            </motion.p>

            <motion.div variants={item} className={styles.ctas}>
              <button
                className={styles.ctaPrimary}
                onClick={() => scrollToSection('kontakt')}
                aria-label="Meld interesse for treningskonseptet"
              >
                Meld interesse
                <ChevronRight size={18} />
              </button>
              <button
                className={styles.ctaSecondary}
                onClick={() => scrollToSection('konseptet')}
                aria-label="Les mer om konseptet"
              >
                Les mer
                <ArrowDown size={16} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        className={styles.statsBar}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className={`container ${styles.statsInner}`}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>2×</div>
            <div className={styles.statLabel}>Vasaloppet-vinner</div>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <div className={styles.statNumber}>4</div>
            <div className={styles.statLabel}>Trenere</div>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <div className={styles.statNumber}>Team<br />Engcon</div>
            <div className={styles.statLabel}>Verdens beste lag</div>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <div className={styles.statNumber}>365</div>
            <div className={styles.statLabel}>Dager i året</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


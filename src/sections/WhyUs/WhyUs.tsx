import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Target, Zap, Shield, Trophy, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './WhyUs.module.css';

const REASON_ICONS = [<Award size={20} />, <Target size={20} />, <Zap size={20} />, <Shield size={20} />];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const { t } = useLanguage();
  const w = t.whyUs;

  return (
    <section id="om-oss" className={styles.section} aria-labelledby="whyus-heading">
      <div className="container">
        <motion.div ref={ref} className={styles.inner} variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          {/* Left */}
          <div className={styles.left}>
            <motion.div variants={fadeUp}>
              <span className={styles.label}>{w.label}</span>
              <h2 id="whyus-heading" className={styles.heading}>
                {w.heading.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 ? <br /> : null}</span>
                ))}
              </h2>
              <p className={styles.bodyText}>{w.bodyText[0]}</p>
              <p className={styles.bodyText}>{w.bodyText[1]}</p>
            </motion.div>

            <motion.div variants={stagger} className={styles.reasons}>
              {w.reasons.map((r, i) => (
                <motion.div key={i} variants={fadeUp} className={styles.reason}>
                  <div className={styles.reasonIcon}>{REASON_ICONS[i]}</div>
                  <div>
                    <div className={styles.reasonTitle}>{r.title}</div>
                    <div className={styles.reasonDesc}>{r.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <motion.div variants={fadeUp} className={styles.statsGrid}>
              {w.stats.map((s, i) => (
                <div key={i} className={styles.statCard}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statDesc}>{s.desc}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className={styles.teamCard}>
              <div className={styles.teamCardIcon}><Trophy size={26} /></div>
              <div>
                <div className={styles.teamCardTitle}>{w.teamCard.title}</div>
                <div className={styles.teamCardDesc}>{w.teamCard.desc}</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.teamCard}>
              <div className={styles.teamCardIcon}><Star size={26} /></div>
              <div>
                <div className={styles.teamCardTitle}>{w.classicsCard.title}</div>
                <div className={styles.teamCardDesc}>{w.classicsCard.desc}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

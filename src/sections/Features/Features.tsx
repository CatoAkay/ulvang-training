import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ClipboardList, Dumbbell, Video, Monitor, Users, HeartPulse, Mountain } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Features.module.css';

const ICONS = [
  <ClipboardList size={24} />,
  <Dumbbell size={24} />,
  <Video size={24} />,
  <Monitor size={24} />,
  <Users size={24} />,
  <HeartPulse size={24} />,
  <Mountain size={24} />,
];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: i * 0.08 } }),
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  return (
    <section id="tilbud" className={styles.section} aria-labelledby="features-heading">
      <div className="container">
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className={styles.label}>{t.features.label}</span>
          <h2 id="features-heading" className={styles.heading}>
            {t.features.heading.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 ? <br /> : null}</span>
            ))}
          </h2>
          <p className={styles.sub}>{t.features.sub}</p>
        </motion.div>

        <div ref={ref} className={styles.grid}>
          {t.features.items.map((f, i) => (
            <motion.div key={i} className={styles.card} custom={i} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} whileHover={{ scale: 1.01 }}>
              <div className={styles.cardIcon}>{ICONS[i]}</div>
              <div className={styles.cardTag}>{f.tag}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Laptop, Users, MapPin, Trophy } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './About.module.css';

const PILLAR_ICONS = [<Laptop size={22} />, <Users size={22} />, <MapPin size={22} />, <Trophy size={22} />];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

function HeadingWithBreak({ text }: { text: string }) {
  const parts = text.split('\n');
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>{p}{i < parts.length - 1 ? <br /> : null}</span>
      ))}
    </>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section id="konseptet" className={styles.section} aria-labelledby="about-heading">
      <div className="container">
        <motion.div ref={ref} className={styles.inner} variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          {/* Left */}
          <div className={styles.left}>
            <motion.div variants={fadeUp}>
              <span className={styles.label}>{t.about.label}</span>
              <h2 id="about-heading" className={styles.heading}>
                <HeadingWithBreak text={t.about.heading} />
              </h2>
              <p className={styles.body}>{t.about.body[0]}</p>
              <p className={styles.body}>{t.about.body[1]}</p>
            </motion.div>

            <motion.div variants={stagger} className={styles.pillars}>
              {t.about.pillars.map((p, i) => (
                <motion.div key={i} variants={fadeUp} className={styles.pillar}>
                  <div className={styles.pillarIcon}>{PILLAR_ICONS[i]}</div>
                  <div>
                    <div className={styles.pillarTitle}>{p.title}</div>
                    <div className={styles.pillarDesc}>{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div variants={fadeUp} className={styles.right}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}><Trophy size={26} /></div>
                <div>
                  <div className={styles.cardTitle}>{t.about.card.title}</div>
                  <div className={styles.cardSub}>{t.about.card.sub}</div>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.timeline}>
                  {t.about.timeline.map((item, i) => (
                    <div key={i} className={styles.timelineItem}>
                      <div className={styles.timelineLeft}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineLine} />
                      </div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineTitle}>{item.title}</div>
                        <div className={styles.timelineDesc}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

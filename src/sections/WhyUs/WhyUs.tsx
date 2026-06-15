import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Target, Zap, Shield, Trophy, Star } from 'lucide-react';
import styles from './WhyUs.module.css';

const reasons = [
  {
    icon: <Award size={20} />,
    title: 'Tidligere eliteutøvere',
    desc: 'Alle trenere har konkurrert på nasjonalt eller internasjonalt nivå og kjenner veien til toppen.',
  },
  {
    icon: <Target size={20} />,
    title: 'Individuell oppfølging',
    desc: 'Du er ikke bare et nummer. Trenerne kjenner deg og dine mål, og justerer opplegget deretter.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Vitenskapelig tilnærming',
    desc: 'Periodisering, belastningsstyring og teknikkarbeid basert på forskning og eliteerfaring.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Ski Classics-ekspertise',
    desc: 'Direkte tilknytning til Team Engcon – verdens beste langrennslag i Ski Classics-serien.',
  },
];

const stats = [
  { value: '2×', desc: 'Vasaloppet-seiere (Laila Kveli 2013 & 2014)' },
  { value: '20+', desc: 'Års samlet trenererfaring' },
  { value: '4', desc: 'Tidligere eliteutøvere som trenere' },
  { value: '#1', desc: 'Team Engcon – verdens beste langlpslag' },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} aria-labelledby="whyus-heading">
      <div className="container">
        <motion.div
          ref={ref}
          className={styles.inner}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Left */}
          <div className={styles.left}>
            <motion.div variants={fadeUp}>
              <span className={styles.label}>Hvorfor oss</span>
              <h2 id="whyus-heading" className={styles.heading}>
                Elitebakgrunn.<br />
                Mosjonistforståelse.
              </h2>
              <p className={styles.bodyText}>
                Vi vet hva som skal til for å nå toppen – og vi vet hva som motiverer
                mosjonisten som vil gjennomføre sitt første Vasaloppet. Kombinasjonen er
                vår styrke.
              </p>
              <p className={styles.bodyText}>
                Gjennom Team Engcon har vi bygget et system som fungerer på
                elitenivå. Nå tar vi det til deg.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={styles.reasons}>
              {reasons.map((r, i) => (
                <motion.div key={i} variants={fadeUp} className={styles.reason}>
                  <div className={styles.reasonIcon}>{r.icon}</div>
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
              {stats.map((s, i) => (
                <div key={i} className={styles.statCard}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statDesc}>{s.desc}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className={styles.teamCard}>
              <div className={styles.teamCardIcon}>
                <Trophy size={26} />
              </div>
              <div>
                <div className={styles.teamCardTitle}>Team Engcon</div>
                <div className={styles.teamCardDesc}>
                  Stiftet av Laila Kveli og Jerry Ahrlin i 2019.
                  I dag verdens ledende Ski Classics-lag – og kjernen i dette konseptet.
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.teamCard}>
              <div className={styles.teamCardIcon}>
                <Star size={26} />
              </div>
              <div>
                <div className={styles.teamCardTitle}>Ski Classics-ekspertise</div>
                <div className={styles.teamCardDesc}>
                  Med direkte erfaring fra Vasaloppet, Birkebeinerrennet og øvrige
                  Ski Classics-løp gir vi deg unik innsikt og forberedelse.
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


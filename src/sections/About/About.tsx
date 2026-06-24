import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Laptop, Users, MapPin, Trophy } from 'lucide-react';
import styles from './About.module.css';

const pillars = [
  {
    icon: <Laptop size={22} />,
    title: 'Digital treningsveiledning',
    desc: 'Personlig treningsprogram og oppfølging gjennom hele året – alltid tilgjengelig digitalt.',
  },
  {
    icon: <Users size={22} />,
    title: 'Digitale treningsøkter',
    desc: 'Digitale gruppeøkter annenhver uke, ledet av erfarne trenere med toppidrettsbakgrunn.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Fysiske samlinger',
    desc: '2–3 fysiske samlinger i løpet av høsten for teknikk, fellesskap og motivasjon.',
  },
  {
    icon: <Trophy size={22} />,
    title: 'Vasaloppet-support',
    desc: 'Spesifikk forberedelse og støtte under Vasaloppet 2027 for deg som tar steget.',
  },
];

const timelineItems = [
  {
    title: 'Høst – Oppstart & Styrke',
    desc: 'Treningsprogram settes opp. Styrke og teknikkarbeid, fysiske samlinger.',
  },
  {
    title: 'Vinter – Ski & Vasaloppet',
    desc: 'Skitrening starter. Teknikkanalyse, digitale økt-presentasjoner og forberedelse mot Vasaloppet.',
  },
  {
    title: 'Vår – Avkoblingsperiode',
    desc: 'Avkoblingsperiode etter sesongens høydepunkter. Evaluering og planlegging videre.',
  },
  {
    title: 'Sommer – Grunnlag',
    desc: 'Kondisjon, styrke og teknikkfundamentet legges for neste sesong.',
  },
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

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="konseptet" className={styles.section} aria-labelledby="about-heading">
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
              <span className={styles.label}>Konseptet</span>
              <h2 id="about-heading" className={styles.heading}>
                Strukturert trening<br />hele året
              </h2>
              <p className={styles.body}>
                Vi er fire tidligere langrennsprofiler som har slått seg sammen for å gi deg
                tilgang til eliteoppfølging – uansett nivå. Konseptet kombinerer strukturert
                digital coaching med verdien av inspirerende fysiske samlinger.
              </p>
              <p className={styles.body}>
                Som deltaker får du et helhetlig opplegg rettet mot dine mål –
                enten du sikter mot Vasaloppet, Ski Classics eller helt nye skimål.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={styles.pillars}>
              {pillars.map((p, i) => (
                <motion.div key={i} variants={fadeUp} className={styles.pillar}>
                  <div className={styles.pillarIcon}>{p.icon}</div>
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
                <div className={styles.cardIcon}>
                  <Trophy size={26} />
                </div>
                <div>
                  <div className={styles.cardTitle}>Sesongen 2026/27</div>
                  <div className={styles.cardSub}>Fra oppstart til Vasaloppet</div>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.timeline}>
                  {timelineItems.map((item, i) => (
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


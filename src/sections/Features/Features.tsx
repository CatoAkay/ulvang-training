import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ClipboardList,
  Dumbbell,
  Video,
  Monitor,
  Users,
  HeartPulse,
  Mountain,
} from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    icon: <ClipboardList size={24} />,
    tag: 'Inkludert',
    title: 'Treningsprogram',
    desc: 'Individuelt tilpasset treningsprogram som tar deg gjennom hele sesongen med riktig belastning, periodisering og progresjon.',
  },
  {
    icon: <Dumbbell size={24} />,
    tag: 'Inkludert',
    title: 'Styrkeprogram',
    desc: 'Spesifikt styrkeprogram for langrenn – fokus på kjernemuskulatur, overkropp og funksjonell styrke.',
  },
  {
    icon: <Video size={24} />,
    tag: 'Inkludert',
    title: 'Teknikkanalyse',
    desc: 'Videoanalyse av teknikk på rulleski og ski – med konkret tilbakemelding fra erfarne trenere etter begge typer underlag.',
  },
  {
    icon: <Monitor size={24} />,
    tag: 'Ukentlig',
    title: 'Digitale treningsøkter',
    desc: 'Én digital gruppetrening i uken ledet av trenerne. Gjennomgang, motivasjon og faglig påfyll.',
  },
  {
    icon: <Users size={24} />,
    tag: 'Fysisk',
    title: 'Samlinger',
    desc: '2–3 fysiske samlinger i løpet av høsten. Teknikk på rulleski og snø, fellesskap og motiverende rammer.',
  },
  {
    icon: <HeartPulse size={24} />,
    tag: 'Løpende',
    title: 'Oppfølging',
    desc: 'Tett individuell oppfølging gjennom sesongen. Trenerne er tilgjengelige og justerer opplegget underveis.',
  },
  {
    icon: <Mountain size={24} />,
    tag: 'Eksklusivt',
    title: 'Fellesskap',
    desc: 'Bli en del av et motiverende treningsfellesskap med like interesserte utøvere – fra mosjonist til seriøs.',
  },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.08 },
  }),
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tilbud" className={styles.section} aria-labelledby="features-heading">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>Hva du får</span>
          <h2 id="features-heading" className={styles.heading}>
            Alt du trenger<br />for å lykkes
          </h2>
          <p className={styles.sub}>
            Et komplett treningskonsept utviklet av tidligere eliteutøvere –
            tilpasset din hverdag og dine mål.
          </p>
        </motion.div>

        <div ref={ref} className={styles.grid}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={styles.card}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              whileHover={{ scale: 1.01 }}
            >
              <div className={styles.cardIcon}>{f.icon}</div>
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


import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Users, CheckCircle, Mountain, ChevronRight, AlertCircle } from 'lucide-react';
import styles from './TrainingCamps.module.css';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const camps = [
  {
    icon: <Calendar size={22} />,
    title: 'Høstsamlinger',
    desc: '2–3 fysiske samlinger gjennom høsten med fokus på teknikk, styrke og fellesskap.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Sentralt beliggende',
    desc: 'Samlinger på steder som er lett tilgjengelige, med god infrastruktur for langrenn og styrketrening.',
  },
  {
    icon: <Users size={22} />,
    title: 'Åpent for alle',
    desc: 'Både medlemmer og ikke-medlemmer kan delta – men som medlem får du en betydelig lavere pris.',
  },
];

const featureItems = [
  { text: <><strong>Teknikkanalyse på rulleski og ski</strong> – grundig gjennomgang og analyse</> },
  { text: <><strong>Styrketreningsøkter</strong> med trenerveiledning</> },
  { text: <><strong>Faglige presentasjoner</strong> om periodisering og restitusjon</> },
  { text: <><strong>Fellesøkter</strong> og motiverende miljø</> },
  { text: <><strong>Vasaloppet 2027</strong> – felles forberedelse og støtte</> },
];

const nextCampHighlights = [
  'Teknikkanalyse på rulleski',
  'Styrketreningsøkt med trenerne',
  'Faglig gjennomgang av sesongplan',
  'Fellesøkt og sosialt program',
];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function TrainingCamps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="samlinger" className={styles.section} aria-labelledby="camps-heading">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">

        {/* Section header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>Samlinger</span>
          <h2 id="camps-heading" className={styles.heading}>
            Trening i fellesskap
          </h2>
          <p className={styles.sub}>
            Ingenting slår motivasjonen av å trene side om side med likesinnede og
            faglig sterke trenere – i vakre omgivelser.
          </p>
        </motion.div>

        {/* Neste samling card */}
        <motion.div
          className={styles.nextCamp}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
          aria-label="Neste samling: 4.–6. september 2026, Mora, Sverige"
        >
          <div className={styles.nextCampLeft}>
            <div className={styles.nextCampEyebrow}>
              <span className={styles.nextCampPulse} aria-hidden="true" />
              Neste samling
            </div>
            <div className={styles.nextCampDateBlock}>
              <div className={styles.nextCampMonth}>September 2026</div>
              <div className={styles.nextCampDays}>4.–6.</div>
            </div>
            <div className={styles.nextCampMeta}>
              <div className={styles.nextCampMetaItem}>
                <MapPin size={14} aria-hidden="true" />
                Mora, Sverige
              </div>
              <div className={styles.nextCampMetaItem}>
                <Calendar size={14} aria-hidden="true" />
                3 dager
              </div>
            </div>
            <p className={styles.nextCampDesc}>
              Høstens første samling setter tonen for sesongen –
              teknikk på rulleski, styrkearbeid og fellesskap med trenerne i Mora.
            </p>
          </div>

          <div className={styles.nextCampDivider} aria-hidden="true" />

          <div className={styles.nextCampRight}>
            <div className={styles.nextCampProgramLabel}>Programmet inkluderer</div>
            <ul className={styles.nextCampList} aria-label="Programmet inkluderer">
              {nextCampHighlights.map((item, i) => (
                <li key={i} className={styles.nextCampListItem}>
                  <CheckCircle size={13} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.nextCampSpotsWrapper}>
              <div className={styles.nextCampSpots}>
                <AlertCircle size={14} aria-hidden="true" />
                Begrenset antall plasser
              </div>
            </div>
            <button
              className={styles.nextCampCta}
              onClick={() => scrollToSection('kontakt')}
              aria-label="Sikre din plass på samlingen i Mora"
            >
              Sikre din plass
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        {/* Two-column info */}
        <motion.div
          ref={ref}
          className={styles.content}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <div className={styles.left}>
            <motion.p variants={fadeUp} className={styles.bodyText}>
              Som en del av treningskonseptet inviterer vi til fysiske samlinger gjennom
              høstsesongen. Her møtes du ansikt til ansikt med trenerne og de andre deltakerne,
              og vi arbeider konkret med teknikk på rulleski og snø, styrke og det mentale aspektet ved
              langrenn.
            </motion.p>
            <motion.p variants={fadeUp} className={styles.bodyText}>
              Det er også mulig å melde seg på samlinger uten fast medlemskap i
              treningsgruppen – men som ordinært medlem får du en betydelig rabatt.
            </motion.p>
            <motion.div variants={stagger} className={styles.camps}>
              {camps.map((c, i) => (
                <motion.div key={i} variants={fadeUp} className={styles.campCard}>
                  <div className={styles.campIcon}>{c.icon}</div>
                  <div>
                    <div className={styles.campTitle}>{c.title}</div>
                    <div className={styles.campDesc}>{c.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className={styles.right}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardImg}>
                <Mountain size={140} strokeWidth={0.5} />
                <span className={styles.featureCardImgLabel}>Høstsamlinger 2026</span>
              </div>
              <div className={styles.featureCardBody}>
                <ul className={styles.featureList} aria-label="Hva er inkludert">
                  {featureItems.map((item, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={styles.featureCheck} aria-hidden="true">
                        <CheckCircle size={13} />
                      </span>
                      <span className={styles.featureItemText}>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.pricingNote}>
                  <strong>Medlemsrabatt:</strong> Som fast medlem i treningsgruppen
                  får du lavere pris på alle samlinger. Ikke-medlemmer kan delta,
                  men til en høyere pris.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

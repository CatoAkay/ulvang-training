import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { coaches } from '../../data/coaches';
import type { Coach } from '../../types';
import CoachModal from '../../components/CoachModal/CoachModal';
import styles from './Coaches.module.css';

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay: i * 0.1 },
  }),
};

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('');
}

export default function Coaches() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  return (
    <section id="trenere" className={styles.section} aria-labelledby="coaches-heading">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>Trenerne</span>
          <h2 id="coaches-heading" className={styles.heading}>
            Lær av de beste
          </h2>
          <p className={styles.sub}>
            Tidligere eliteutøvere og sertifiserte trenere – med hundrevis av
            konkurransedager og år i verdenseliten.
          </p>
        </motion.div>

        <div ref={ref} className={styles.grid}>
          {coaches.map((coach, i) => (
            <motion.article
              key={coach.id}
              className={styles.card}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              onClick={() => setSelectedCoach(coach)}
              role="button"
              tabIndex={0}
              aria-label={`Les mer om ${coach.name}`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedCoach(coach)}
            >
              <div className={styles.photo}>
                {coach.photo ? (
                  <img src={coach.photo} alt={`${coach.name}, ${coach.role}`} loading="lazy" />
                ) : (
                  <div className={styles.photoPlaceholder}>
                    <div className={styles.photoInitials}>{getInitials(coach.name)}</div>
                  </div>
                )}
                <div className={styles.photoOverlay} aria-hidden="true" />
              </div>

              <div className={styles.info}>
                <div className={styles.teamBadge}>Team Engcon</div>
                <div className={styles.coachRole}>{coach.role}</div>
                <h3 className={styles.coachName}>{coach.name}</h3>
                <p className={styles.coachBio}>{coach.shortBio}</p>
                <button
                  className={styles.readMore}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCoach(coach);
                  }}
                  aria-label={`Les mer om ${coach.name}`}
                >
                  Les mer <ChevronRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <CoachModal
        coach={selectedCoach}
        onClose={() => setSelectedCoach(null)}
      />
    </section>
  );
}


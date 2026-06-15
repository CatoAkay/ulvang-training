import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay: i * 0.1 },
  }),
};

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>Deltakere</span>
          <h2 id="testimonials-heading" className={styles.heading}>
            Det sier de som trener med oss
          </h2>
        </motion.div>

        <div ref={ref} className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className={styles.card}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <Quote size={28} className={styles.quoteIcon} aria-hidden="true" />
              <p className={styles.quote}>{t.quote}</p>
              <footer className={styles.footer}>
                <div className={styles.person}>
                  <cite className={styles.name}>{t.name}</cite>
                  <div className={styles.details}>{t.details}</div>
                </div>
                {t.achievement && (
                  <div className={styles.achievement}>{t.achievement}</div>
                )}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* TODO: Replace placeholder testimonials with real ones from participants */}
        <p className={styles.disclaimer}>
          * Illustrative eksempler – erstattes med ekte tilbakemeldinger fra deltakere
        </p>
      </div>
    </section>
  );
}


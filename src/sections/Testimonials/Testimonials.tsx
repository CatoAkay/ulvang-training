import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
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
  const { t } = useLanguage();

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>{t.testimonials.label}</span>
          <h2 id="testimonials-heading" className={styles.heading}>
            {t.testimonials.heading}
          </h2>
        </motion.div>

        <div ref={ref} className={styles.grid}>
          {t.testimonials.items.map((testimonial, i) => (
            <motion.blockquote
              key={i}
              className={styles.card}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <Quote size={28} className={styles.quoteIcon} aria-hidden="true" />
              <p className={styles.quote}>{testimonial.quote}</p>
              <footer className={styles.footer}>
                <div className={styles.person}>
                  <cite className={styles.name}>{testimonial.name}</cite>
                  <div className={styles.details}>{testimonial.details}</div>
                </div>
                {testimonial.achievement && (
                  <div className={styles.achievement}>{testimonial.achievement}</div>
                )}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <p className={styles.disclaimer}>{t.testimonials.disclaimer}</p>
      </div>
    </section>
  );
}


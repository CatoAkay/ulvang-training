import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { useLanguage } from '../../context/LanguageContext';
import styles from './FAQ.module.css';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className="container">
        <motion.div
          ref={ref}
          className={styles.inner}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.left}>
            <span className={styles.label}>{t.faq.label}</span>
            <h2 id="faq-heading" className={styles.heading}>
              {t.faq.heading.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 ? <br /> : null}</span>
              ))}
            </h2>
            <p className={styles.sub}>{t.faq.sub}</p>
            <button
              className={styles.ctaLink}
              onClick={() => scrollToSection('kontakt')}
              aria-label={t.faq.cta}
            >
              <MessageCircle size={16} />
              {t.faq.cta}
            </button>
          </div>

          <div className={styles.right}>
            <FaqAccordion items={t.faq.items} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


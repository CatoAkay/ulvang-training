import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { faqItems } from '../../data/faq';
import styles from './FAQ.module.css';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

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
            <span className={styles.label}>FAQ</span>
            <h2 id="faq-heading" className={styles.heading}>
              Spørsmål<br />& svar
            </h2>
            <p className={styles.sub}>
              Ikke funnet svar på det du lurer på?
              Ta kontakt direkte, så hjelper vi deg.
            </p>
            <button
              className={styles.ctaLink}
              onClick={() => scrollToSection('kontakt')}
              aria-label="Gå til kontaktskjema"
            >
              <MessageCircle size={16} />
              Still et spørsmål
            </button>
          </div>

          <div className={styles.right}>
            <FaqAccordion items={faqItems} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


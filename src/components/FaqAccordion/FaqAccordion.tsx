import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { FaqItem } from '../../types';
import styles from './FaqAccordion.module.css';

interface Props {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div role="list">
      {items.map((item, i) => (
        <div key={i} className={styles.item} role="listitem">
          <button
            className={styles.trigger}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-trigger-${i}`}
          >
            <span className={`${styles.question} ${openIndex === i ? styles.open : ''}`}>
              {item.question}
            </span>
            <span className={styles.icon} aria-hidden="true">
              {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className={styles.answerWrapper}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className={styles.answer}>{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}


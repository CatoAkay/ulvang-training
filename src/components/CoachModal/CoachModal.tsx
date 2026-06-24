import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import type { Coach } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import styles from './CoachModal.module.css';

interface Props {
  coach: Coach | null;
  onClose: () => void;
}

export default function CoachModal({ coach, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (coach) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [coach, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (coach) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [coach]);

  const initials = coach
    ? coach.name.split(' ').map((n) => n[0]).slice(0, 2).join('')
    : '';

  return (
    <AnimatePresence>
      {coach && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Profil: ${coach.name}`}
        >
          <motion.div
            ref={modalRef}
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Lukk"
            >
              <X size={18} />
            </button>

            <div className={styles.header}>
              <div className={styles.photoWrapper}>
                {coach.photo ? (
                  <img src={coach.photo} alt={coach.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div className={styles.photoPlaceholder}>{initials}</div>
                )}
              </div>
              <div className={styles.headerInfo}>
                <div className={styles.role}>{coach.role}</div>
                <h2 className={styles.name}>{coach.name}</h2>
                <div className={styles.location}>
                  <MapPin size={13} />
                  {coach.location}
                </div>
              </div>
            </div>

            <div className={styles.body}>
              <div className={styles.bioSection}>
                <h3>{t.coaches.modal.bioSection}</h3>
                {coach.fullBio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className={styles.divider} />

              <div className={styles.achievementsSection}>
                <h3>{t.coaches.modal.achievementsSection}</h3>
                <ul className={styles.achievementsList}>
                  {coach.achievements.map((item, i) => (
                    <li key={i} className={styles.achievement}>
                      <span className={styles.achievementDot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


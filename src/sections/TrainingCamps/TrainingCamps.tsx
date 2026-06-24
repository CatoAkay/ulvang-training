import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Users, CheckCircle, Mountain, ChevronRight, AlertCircle } from 'lucide-react';
import CampRegistrationModal from '../../components/CampRegistrationModal/CampRegistrationModal';
import { useLanguage } from '../../context/LanguageContext';
import styles from './TrainingCamps.module.css';

const CAMP_INFO_ICONS = [<Calendar size={22} />, <MapPin size={22} />, <Users size={22} />];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function TrainingCamps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();
  const c = t.camps;

  return (
    <section id="samlinger" className={styles.section} aria-labelledby="camps-heading">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">

        {/* Section header */}
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className={styles.label}>{c.label}</span>
          <h2 id="camps-heading" className={styles.heading}>{c.heading}</h2>
          <p className={styles.sub}>{c.sub}</p>
        </motion.div>

        {/* Next camp card */}
        <motion.div
          className={styles.nextCamp}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
          aria-label={`${c.nextCamp.eyebrow}: 4.–6. september 2026, Mora, Sverige`}
        >
          <div className={styles.nextCampLeft}>
            <div className={styles.nextCampEyebrow}>
              <span className={styles.nextCampPulse} aria-hidden="true" />
              {c.nextCamp.eyebrow}
            </div>
            <div className={styles.nextCampDateBlock}>
              <div className={styles.nextCampMonth}>{c.nextCamp.month}</div>
              <div className={styles.nextCampDays}>4.–6.</div>
            </div>
            <div className={styles.nextCampMeta}>
              <div className={styles.nextCampMetaItem}><MapPin size={14} aria-hidden="true" />Mora, Sverige</div>
              <div className={styles.nextCampMetaItem}><Calendar size={14} aria-hidden="true" />{c.nextCamp.duration}</div>
            </div>
            <p className={styles.nextCampDesc}>{c.nextCamp.desc}</p>
          </div>

          <div className={styles.nextCampDivider} aria-hidden="true" />

          <div className={styles.nextCampRight}>
            <div className={styles.nextCampProgramLabel}>{c.nextCamp.programLabel}</div>
            <ul className={styles.nextCampList} aria-label={c.nextCamp.programLabel}>
              {c.nextCamp.highlights.map((item, i) => (
                <li key={i} className={styles.nextCampListItem}>
                  <CheckCircle size={13} aria-hidden="true" />{item}
                </li>
              ))}
            </ul>
            <div className={styles.nextCampSpotsWrapper}>
              <div className={styles.nextCampSpots}>
                <AlertCircle size={14} aria-hidden="true" />{c.nextCamp.spots}
              </div>
            </div>
            <button className={styles.nextCampCta} onClick={() => setModalOpen(true)} aria-label={c.nextCamp.cta}>
              {c.nextCamp.cta}<ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        {/* Two-column info */}
        <motion.div ref={ref} className={styles.content} variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <div className={styles.left}>
            <motion.p variants={fadeUp} className={styles.bodyText}>{c.bodyText[0]}</motion.p>
            <motion.p variants={fadeUp} className={styles.bodyText}>{c.bodyText[1]}</motion.p>
            <motion.div variants={stagger} className={styles.camps}>
              {c.infoCards.map((card, i) => (
                <motion.div key={i} variants={fadeUp} className={styles.campCard}>
                  <div className={styles.campIcon}>{CAMP_INFO_ICONS[i]}</div>
                  <div>
                    <div className={styles.campTitle}>{card.title}</div>
                    <div className={styles.campDesc}>{card.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className={styles.right}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardImg}>
                <Mountain size={140} strokeWidth={0.5} />
                <span className={styles.featureCardImgLabel}>{c.featureCard.imgLabel}</span>
              </div>
              <div className={styles.featureCardBody}>
                <ul className={styles.featureList} aria-label={c.nextCamp.programLabel}>
                  {c.featureCard.items.map((item, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={styles.featureCheck} aria-hidden="true"><CheckCircle size={13} /></span>
                      <span className={styles.featureItemText}>
                        <strong>{item.bold}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className={styles.pricingNote}>
                  <strong>{c.featureCard.pricingNote.strong}</strong>
                  {c.featureCard.pricingNote.rest}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Camp registration modal */}
        <CampRegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </section>
  );
}

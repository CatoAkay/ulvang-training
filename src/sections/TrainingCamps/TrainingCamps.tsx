import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Users, CheckCircle, Mountain, ChevronRight, AlertCircle, Clock } from 'lucide-react';
import CampRegistrationModal from '../../components/CampRegistrationModal/CampRegistrationModal';
import { CAMPS } from '../../data/camps';
import type { CampEntry } from '../../data/camps';
import { useLanguage } from '../../context/LanguageContext';
import styles from './TrainingCamps.module.css';

const CAMP_INFO_ICONS = [<Calendar size={22} />, <MapPin size={22} />, <Users size={22} />];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function TrainingCamps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const [activeCamp, setActiveCamp] = useState<CampEntry | null>(null);
  const { t, lang } = useLanguage();
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

        {/* Camp cards grid */}
        <motion.div
          ref={ref}
          className={styles.campCardsGrid}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          {CAMPS.map((camp) => {
            const cl = camp.locale[lang];
            return (
              <div
                key={camp.id}
                className={`${styles.campListCard} ${!camp.registrationOpen ? styles.campListCardSoon : ''}`}
                aria-label={`${cl.title}: ${cl.meta.date}, ${cl.locationDisplay}`}
              >
                {/* Card visual header */}
                <div className={styles.campListCardImg}>
                  <Mountain size={80} strokeWidth={0.5} aria-hidden="true" />
                  <span className={styles.campListCardImgLabel}>{cl.imgLabel}</span>
                  {!camp.registrationOpen && (
                    <span className={styles.campSoonBadge}>
                      <Clock size={11} aria-hidden="true" />{cl.registrationSoonLabel}
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className={styles.campListCardBody}>
                  <div className={styles.campListEyebrow}>
                    <span className={styles.nextCampPulse} aria-hidden="true" />
                    {cl.eyebrow}
                  </div>

                  <div className={styles.campListDateBlock}>
                    <div className={styles.nextCampMonth}>{cl.month}</div>
                    <div className={styles.nextCampDays}>{cl.dateDisplay}</div>
                  </div>

                  <div className={styles.nextCampMeta}>
                    <div className={styles.nextCampMetaItem}><MapPin size={13} aria-hidden="true" />{cl.locationDisplay}</div>
                    <div className={styles.nextCampMetaItem}><Calendar size={13} aria-hidden="true" />{cl.duration}</div>
                  </div>

                  <p className={styles.campListDesc}>{cl.description}</p>

                  <div className={styles.nextCampProgramLabel}>{c.nextCamp.programLabel}</div>
                  <ul className={styles.nextCampList} aria-label={c.nextCamp.programLabel}>
                    {cl.highlights.map((item, i) => (
                      <li key={i} className={styles.nextCampListItem}>
                        <CheckCircle size={13} aria-hidden="true" />{item}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.nextCampSpotsWrapper}>
                    <div className={styles.nextCampSpots}>
                      <AlertCircle size={14} aria-hidden="true" />{cl.spotsLabel}
                    </div>
                  </div>

                  <button
                    className={styles.nextCampCta}
                    onClick={() => camp.modalEnabled && setActiveCamp(camp)}
                    disabled={!camp.modalEnabled}
                    aria-label={cl.ctaLabel}
                  >
                    {cl.ctaLabel}<ChevronRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Two-column info */}
        <motion.div className={styles.content} variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
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

        {/* Shared camp registration modal */}
        {activeCamp && (
          <CampRegistrationModal
            isOpen
            onClose={() => setActiveCamp(null)}
            camp={activeCamp}
          />
        )}
      </div>
    </section>
  );
}

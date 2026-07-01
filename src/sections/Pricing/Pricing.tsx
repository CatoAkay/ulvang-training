import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ChevronRight, Star, Dumbbell, Video, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Pricing.module.css';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: i * 0.1 } }),
};

// Prices are in SEK and don't change with language
const MEMBERSHIP_PRICE = '4 999';
const CAMP_PRICES = ['3 495', '4 495'];
const CURRENCY = 'SEK';

const SERVICE_ICONS = [
  <Dumbbell size={22} />,
  <Video size={22} />,
  <MessageCircle size={22} />,
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const { t } = useLanguage();

  const membership = t.pricing.membership;
  const campCards = t.pricing.campCards;
  const services = t.pricing.services;

  return (
    <section id="priser" className={styles.section} aria-labelledby="pricing-heading">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className={styles.label}>{t.pricing.label}</span>
          <h2 id="pricing-heading" className={styles.heading}>
            {t.pricing.heading.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 ? <br /> : null}</span>
            ))}
          </h2>
          <p className={styles.sub}>{t.pricing.sub}</p>
        </motion.div>

        <div ref={ref} className={styles.grid}>
          {/* Membership card */}
          <motion.div className={`${styles.card} ${styles.membershipCard}`} custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <div className={styles.cardInner}>
              <div className={styles.cardTop}>
                <div className={styles.cardLabelRow}>
                  <span className={styles.cardLabel}>{membership.label}</span>
                  <span className={styles.memberBadge}><Star size={11} aria-hidden="true" />{t.pricing.recommended}</span>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.priceCurrency}>{CURRENCY}</span>
                  <span className={styles.priceAmount}>{MEMBERSHIP_PRICE}</span>
                  <span className={styles.pricePeriod}>/{membership.period}</span>
                </div>
              </div>
              <div className={styles.divider} aria-hidden="true" />
              <ul className={styles.featureList} aria-label={membership.label}>
                {membership.features.map((f, i) => (
                  <li key={i} className={styles.featureItem}>
                    <CheckCircle size={14} aria-hidden="true" className={styles.featureIcon} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.ctaPrimary} onClick={() => scrollToSection('kontakt')} aria-label={membership.cta}>
                {membership.cta}<ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          {/* Camp cards */}
          <div className={styles.campCardsWrapper}>
            {campCards.map((card, i) => (
              <motion.div key={i} className={`${styles.card} ${i === 1 ? styles.highlighted : ''}`} custom={i + 1} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
                <div className={styles.cardInner}>
                  {card.tag && <div className={styles.cardTag}>{card.tag}</div>}
                  <div className={styles.cardTop}>
                    <div className={styles.cardLabel}>{card.label}</div>
                    <div className={styles.cardSubLabel}>{card.subLabel}</div>
                    <div className={styles.priceRow}>
                      <span className={styles.priceCurrency}>{CURRENCY}</span>
                      <span className={styles.priceAmount}>{CAMP_PRICES[i]}</span>
                      <span className={styles.pricePeriod}>/{card.period}</span>
                    </div>
                  </div>
                  <div className={styles.divider} aria-hidden="true" />
                  <ul className={styles.featureList} aria-label={card.subLabel}>
                    {card.features.map((f, fi) => (
                      <li key={fi} className={styles.featureItem}>
                        <CheckCircle size={14} aria-hidden="true" className={styles.featureIcon} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={i === 1 ? styles.ctaPrimary : styles.ctaSecondary}
                    onClick={() => scrollToSection('samlinger')}
                    aria-label={card.cta}
                  >
                    {card.cta}<ChevronRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p className={styles.note} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.5 }}>
          {t.pricing.note}
        </motion.p>

        {/* Individual services */}
        {services.length > 0 && (
          <motion.div
            className={styles.servicesSection}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div className={styles.servicesSectionHeader}>
              <span className={styles.servicesSectionLabel}>{t.pricing.servicesLabel}</span>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  className={styles.serviceCard}
                  custom={i + 3}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                >
                  <div className={styles.serviceIconWrap} aria-hidden="true">
                    {SERVICE_ICONS[i]}
                  </div>

                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>

                  {service.includes.length > 0 && (
                    <>
                      <div className={styles.divider} aria-hidden="true" />
                      <ul className={styles.serviceIncludes} aria-label={`${service.title} – inkludert`}>
                        {service.includes.map((item, j) => (
                          <li key={j} className={styles.serviceIncludeItem}>
                            <CheckCircle size={13} aria-hidden="true" className={styles.featureIcon} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {service.note && (
                    <p className={styles.serviceNote}>{service.note}</p>
                  )}

                  <div className={styles.servicePriceRow}>
                    <span className={styles.servicePrice}>{service.price}</span>
                  </div>

                  <button
                    className={styles.ctaSecondary}
                    onClick={() => scrollToSection('kontakt')}
                    aria-label={service.cta}
                    style={{ marginTop: '20px' }}
                  >
                    {service.cta}<ChevronRight size={16} aria-hidden="true" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

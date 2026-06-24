import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ChevronRight, Star } from 'lucide-react';
import styles from './Pricing.module.css';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const membershipCard = {
  label: 'Årsmedlemskap',
  price: '4 999',
  currency: 'SEK',
  period: 'per år',
  highlight: false,
  tag: null as string | null,
  features: [
    'Individuelt tilpasset treningsprogram',
    'Styrkeprogram for langrenn',
    'Digitale treningsøkter annenhver uke',
    'Tett oppfølging fra trenerne',
    'Teknikkanalyse (rulleski og snø)',
    'Rabattert pris på alle samlinger',
    'Tilgang til treningsfellesskapet',
  ],
};

const campCards = [
  {
    label: 'Samling',
    subLabel: 'For medlemmer',
    price: '3 495',
    currency: 'SEK',
    period: 'per samling',
    highlight: false,
    tag: null as string | null,
    features: [
      'Teknikkanalyse på rulleski',
      'Styrketreningsøkt med trenerne',
      'Faglig gjennomgang av sesongplan',
      'Fellesøkt og sosialt program',
      'Krever aktivt årsmedlemskap',
    ],
  },
  {
    label: 'Samling',
    subLabel: 'Uten medlemskap',
    price: '4 495',
    currency: 'SEK',
    period: 'per samling',
    highlight: true,
    tag: 'Prøv konseptet',
    features: [
      'Teknikkanalyse på rulleski',
      'Styrketreningsøkt med trenerne',
      'Faglig gjennomgang av sesongplan',
      'Fellesøkt og sosialt program',
      'Ingen forutgående medlemskap nødvendig',
    ],
  },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="priser" className={styles.section} aria-labelledby="pricing-heading">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>Priser</span>
          <h2 id="pricing-heading" className={styles.heading}>
            Invester i din<br />utvikling
          </h2>
          <p className={styles.sub}>
            Transparent prising – ingen skjulte kostnader. Som medlem får du lavest pris
            på samlinger gjennom hele sesongen.
          </p>
        </motion.div>

        <div ref={ref} className={styles.grid}>
          {/* Membership card */}
          <motion.div
            className={`${styles.card} ${styles.membershipCard}`}
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardTop}>
                <div className={styles.cardLabelRow}>
                  <span className={styles.cardLabel}>{membershipCard.label}</span>
                  <span className={styles.memberBadge}>
                    <Star size={11} aria-hidden="true" />
                    Anbefalt
                  </span>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.priceCurrency}>{membershipCard.currency}</span>
                  <span className={styles.priceAmount}>{membershipCard.price}</span>
                  <span className={styles.pricePeriod}>/{membershipCard.period}</span>
                </div>
              </div>

              <div className={styles.divider} aria-hidden="true" />

              <ul className={styles.featureList} aria-label="Inkludert i årsmedlemskap">
                {membershipCard.features.map((f, i) => (
                  <li key={i} className={styles.featureItem}>
                    <CheckCircle size={14} aria-hidden="true" className={styles.featureIcon} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={styles.ctaPrimary}
                onClick={() => scrollToSection('kontakt')}
                aria-label="Meld interesse for årsmedlemskap"
              >
                Meld interesse
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          {/* Camp cards */}
          <div className={styles.campCardsWrapper}>
            {campCards.map((card, i) => (
              <motion.div
                key={i}
                className={`${styles.card} ${card.highlight ? styles.highlighted : ''}`}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
              >
                <div className={styles.cardInner}>
                  {card.tag && (
                    <div className={styles.cardTag}>{card.tag}</div>
                  )}
                  <div className={styles.cardTop}>
                    <div className={styles.cardLabel}>{card.label}</div>
                    <div className={styles.cardSubLabel}>{card.subLabel}</div>
                    <div className={styles.priceRow}>
                      <span className={styles.priceCurrency}>{card.currency}</span>
                      <span className={styles.priceAmount}>{card.price}</span>
                      <span className={styles.pricePeriod}>/{card.period}</span>
                    </div>
                  </div>

                  <div className={styles.divider} aria-hidden="true" />

                  <ul className={styles.featureList} aria-label={`Inkludert – ${card.subLabel}`}>
                    {card.features.map((f, fi) => (
                      <li key={fi} className={styles.featureItem}>
                        <CheckCircle size={14} aria-hidden="true" className={styles.featureIcon} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={card.highlight ? styles.ctaPrimary : styles.ctaSecondary}
                    onClick={() => scrollToSection('samlinger')}
                    aria-label={`Se samlinger – ${card.subLabel}`}
                  >
                    Se samlinger
                    <ChevronRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.p
          className={styles.note}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          * Enkeltdagsregistrering er tilgjengelig for samlinger: 1 900 SEK (medlem) / 2 400 SEK (ikke-medlem).
          Mat, hotell og reise faktureres separat.
        </motion.p>
      </div>
    </section>
  );
}


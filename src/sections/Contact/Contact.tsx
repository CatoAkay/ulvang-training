import { useState } from 'react';
import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Calendar, Laptop, Users } from 'lucide-react';
import type { ContactFormData } from '../../types';
import styles from './Contact.module.css';

// TODO: Replace this simulated submission with real backend/email service integration
// Options: Resend, Formspree, Netlify Forms, custom API endpoint, etc.
async function submitForm(data: ContactFormData): Promise<void> {
  // TODO: Replace with actual API call, e.g.:
  // await fetch('/api/interest', { method: 'POST', body: JSON.stringify(data) });
  console.log('Form submitted (simulation):', data);
  await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulate network delay
}

const infoItems = [
  {
    icon: <Calendar size={20} />,
    title: 'Oppstart høst 2026',
    desc: 'Vi planlegger oppstart av treningsgruppen til høst 2026.',
  },
  {
    icon: <Laptop size={20} />,
    title: 'Digitalt første',
    desc: 'Konseptet kjøres primært digitalt – perfekt uansett hvor du bor.',
  },
  {
    icon: <Users size={20} />,
    title: 'Begrenset plasser',
    desc: 'For å sikre god oppfølging tar vi inn et begrenset antall deltakere.',
  },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      await submitForm(data);
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="kontakt" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <motion.div
          ref={ref}
          className={styles.inner}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Left */}
          <div className={styles.left}>
            <motion.div variants={fadeUp}>
              <span className={styles.label}>Kom i gang</span>
              <h2 id="contact-heading" className={styles.heading}>
                Meld din<br />interesse
              </h2>
              <p className={styles.bodyText}>
                Fyll ut skjemaet, så tar vi kontakt med mer informasjon om konseptet,
                priser og oppstart. Det er uforpliktende.
              </p>
            </motion.div>

            <motion.ul variants={fadeUp} className={styles.infoList} aria-label="Praktisk informasjon">
              {infoItems.map((item, i) => (
                <li key={i} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{item.icon}</div>
                  <div>
                    <div className={styles.infoTitle}>{item.title}</div>
                    <div className={styles.infoDesc}>{item.desc}</div>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right */}
          <motion.div variants={fadeUp} className={styles.formCard}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className={styles.formTitle}>Meld interesse</div>
                  <div className={styles.formSub}>
                    Alle felter merket <span aria-hidden="true">*</span> er påkrevd
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="navn" className={styles.label2}>
                          Navn <span className={styles.required} aria-hidden="true">*</span>
                        </label>
                        <input
                          id="navn"
                          type="text"
                          placeholder="Ola Nordmann"
                          autoComplete="name"
                          className={`${styles.input} ${errors.navn ? styles.error : ''}`}
                          aria-required="true"
                          aria-invalid={!!errors.navn}
                          {...register('navn', { required: 'Navn er påkrevd' })}
                        />
                        {errors.navn && (
                          <span className={styles.errorMsg} role="alert">{errors.navn.message}</span>
                        )}
                      </div>

                      <div className={styles.field}>
                        <label htmlFor="epost" className={styles.label2}>
                          E-post <span className={styles.required} aria-hidden="true">*</span>
                        </label>
                        <input
                          id="epost"
                          type="email"
                          placeholder="ola@eksempel.no"
                          autoComplete="email"
                          className={`${styles.input} ${errors.epost ? styles.error : ''}`}
                          aria-required="true"
                          aria-invalid={!!errors.epost}
                          {...register('epost', {
                            required: 'E-post er påkrevd',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Ugyldig e-postadresse',
                            },
                          })}
                        />
                        {errors.epost && (
                          <span className={styles.errorMsg} role="alert">{errors.epost.message}</span>
                        )}
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="telefon" className={styles.label2}>Telefon</label>
                      <input
                        id="telefon"
                        type="tel"
                        placeholder="+47 000 00 000"
                        autoComplete="tel"
                        className={styles.input}
                        {...register('telefon')}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="erfaring" className={styles.label2}>
                        Erfaring <span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <select
                        id="erfaring"
                        className={`${styles.select} ${errors.erfaring ? styles.error : ''}`}
                        aria-required="true"
                        aria-invalid={!!errors.erfaring}
                        defaultValue=""
                        {...register('erfaring', { required: 'Velg din erfaringsbakgrunn' })}
                      >
                        <option value="" disabled>Velg din erfaringsbakgrunn</option>
                        <option value="nybegynner">Nybegynner – har ikke gått langrenn</option>
                        <option value="mosjonist">Mosjonist – går noen ganger i året</option>
                        <option value="aktiv">Aktiv – trener regelmessig</option>
                        <option value="konkurranseutover">Konkurranseutøver – deltar i løp</option>
                        <option value="elite">Eliteutøver / har vært det</option>
                      </select>
                      {errors.erfaring && (
                        <span className={styles.errorMsg} role="alert">{errors.erfaring.message}</span>
                      )}
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="maal" className={styles.label2}>
                        Hovedmål <span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <select
                        id="maal"
                        className={`${styles.select} ${errors.maal ? styles.error : ''}`}
                        aria-required="true"
                        aria-invalid={!!errors.maal}
                        defaultValue=""
                        {...register('maal', { required: 'Velg ditt hovedmål' })}
                      >
                        <option value="" disabled>Velg ditt primære mål</option>
                        <option value="vasaloppet">Gjennomføre Vasaloppet 2027</option>
                        <option value="skiclassics">Delta i Ski Classics</option>
                        <option value="forbedre">Forbedre meg i langrenn generelt</option>
                        <option value="birken">Birkebeinerrennet eller lignende</option>
                        <option value="mosjonere">Trene mer strukturert / mosjonere</option>
                      </select>
                      {errors.maal && (
                        <span className={styles.errorMsg} role="alert">{errors.maal.message}</span>
                      )}
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="melding" className={styles.label2}>Melding</label>
                      <textarea
                        id="melding"
                        rows={4}
                        placeholder="Fortell oss litt om deg selv og hva du ønsker å oppnå..."
                        className={styles.textarea}
                        {...register('melding')}
                      />
                    </div>

                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={isLoading}
                      aria-label="Send interessemelding"
                    >
                      {isLoading ? (
                        'Sender...'
                      ) : (
                        <>
                          Send melding
                          <Send size={17} />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  className={styles.successCard}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.successIcon}>
                    <CheckCircle size={32} />
                  </div>
                  <div className={styles.successTitle}>Takk for din interesse!</div>
                  <p className={styles.successSub}>
                    Vi har mottatt din melding og tar kontakt snart med mer
                    informasjon om konseptet og oppstart.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



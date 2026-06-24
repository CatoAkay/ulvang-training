import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Calendar, Laptop, Users, AlertTriangle } from 'lucide-react';
import type { ContactFormData } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Contact.module.css';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string || 'service_2iorjdh';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID as string || 'template_39rs5hy';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

async function submitForm(data: ContactFormData): Promise<void> {
  if (!EMAILJS_PUBLIC_KEY) {
    throw new Error('VITE_EMAILJS_PUBLIC_KEY is not set. Check your .env file.');
  }
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      name:       data.navn,
      email:      data.epost,
      phone:      data.telefon ?? '',
      experience: data.erfaring,
      goal:       data.maal,
      message:    data.melding ?? '',
    },
    { publicKey: EMAILJS_PUBLIC_KEY },
  );
}

const INFO_ICONS = [<Calendar size={20} />, <Laptop size={20} />, <Users size={20} />];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const { t, lang } = useLanguage();
  const f = t.contact.form;

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setSendError(null);
    try {
      await submitForm(data);
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendError(f.sendError);
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
              <span className={styles.label}>{t.contact.label}</span>
              <h2 id="contact-heading" className={styles.heading}>
                {t.contact.heading.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 ? <br /> : null}</span>
                ))}
              </h2>
              <p className={styles.bodyText}>{t.contact.bodyText}</p>
            </motion.div>

            <motion.ul variants={fadeUp} className={styles.infoList} aria-label="Praktisk informasjon">
              {t.contact.infoItems.map((item, i) => (
                <li key={i} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{INFO_ICONS[i]}</div>
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
                <motion.div key={`form-${lang}`} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className={styles.formTitle}>{f.title}</div>
                  <div className={styles.formSub}>
                    {f.sub.replace('*', '')} <span aria-hidden="true">*</span>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="navn" className={styles.label2}>
                          {f.fields.navn.label} <span className={styles.required} aria-hidden="true">*</span>
                        </label>
                        <input
                          id="navn"
                          type="text"
                          placeholder={f.fields.navn.placeholder}
                          autoComplete="name"
                          className={`${styles.input} ${errors.navn ? styles.error : ''}`}
                          aria-required="true"
                          aria-invalid={!!errors.navn}
                          {...register('navn', { required: f.fields.navn.error })}
                        />
                        {errors.navn && <span className={styles.errorMsg} role="alert">{errors.navn.message}</span>}
                      </div>

                      <div className={styles.field}>
                        <label htmlFor="epost" className={styles.label2}>
                          {f.fields.epost.label} <span className={styles.required} aria-hidden="true">*</span>
                        </label>
                        <input
                          id="epost"
                          type="email"
                          placeholder={f.fields.epost.placeholder}
                          autoComplete="email"
                          className={`${styles.input} ${errors.epost ? styles.error : ''}`}
                          aria-required="true"
                          aria-invalid={!!errors.epost}
                          {...register('epost', {
                            required: f.fields.epost.error,
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: f.fields.epost.patternError },
                          })}
                        />
                        {errors.epost && <span className={styles.errorMsg} role="alert">{errors.epost.message}</span>}
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="telefon" className={styles.label2}>{f.fields.telefon.label}</label>
                      <input
                        id="telefon"
                        type="tel"
                        placeholder={f.fields.telefon.placeholder}
                        autoComplete="tel"
                        className={styles.input}
                        {...register('telefon')}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="erfaring" className={styles.label2}>
                        {f.fields.erfaring.label} <span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <select
                        id="erfaring"
                        className={`${styles.select} ${errors.erfaring ? styles.error : ''}`}
                        aria-required="true"
                        aria-invalid={!!errors.erfaring}
                        defaultValue=""
                        {...register('erfaring', { required: f.fields.erfaring.error })}
                      >
                        <option value="" disabled>{f.fields.erfaring.placeholder}</option>
                        {f.fields.erfaring.options.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                      {errors.erfaring && <span className={styles.errorMsg} role="alert">{errors.erfaring.message}</span>}
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="maal" className={styles.label2}>
                        {f.fields.maal.label} <span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <select
                        id="maal"
                        className={`${styles.select} ${errors.maal ? styles.error : ''}`}
                        aria-required="true"
                        aria-invalid={!!errors.maal}
                        defaultValue=""
                        {...register('maal', { required: f.fields.maal.error })}
                      >
                        <option value="" disabled>{f.fields.maal.placeholder}</option>
                        {f.fields.maal.options.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                      {errors.maal && <span className={styles.errorMsg} role="alert">{errors.maal.message}</span>}
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="melding" className={styles.label2}>{f.fields.melding.label}</label>
                      <textarea
                        id="melding"
                        rows={4}
                        placeholder={f.fields.melding.placeholder}
                        className={styles.textarea}
                        {...register('melding')}
                      />
                    </div>

                    {sendError && (
                      <div className={styles.sendError} role="alert">
                        <AlertTriangle size={15} aria-hidden="true" />
                        {sendError}
                      </div>
                    )}

                    <button type="submit" className={styles.submitBtn} disabled={isLoading} aria-label={f.submit}>
                      {isLoading ? f.submitting : (<>{f.submit}<Send size={17} /></>)}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="success" className={styles.successCard} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                  <div className={styles.successIcon}><CheckCircle size={32} /></div>
                  <div className={styles.successTitle}>{f.success.title}</div>
                  <p className={styles.successSub}>{f.success.sub}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



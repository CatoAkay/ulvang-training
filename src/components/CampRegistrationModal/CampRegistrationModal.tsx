import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { X, Send, CheckCircle, AlertTriangle, MapPin, Calendar, Users } from 'lucide-react';
import type { CampRegistrationFormData } from '../../types';
import type { CampEntry } from '../../data/camps';
import { useLanguage } from '../../context/LanguageContext';
import styles from './CampRegistrationModal.module.css';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string || 'service_2iorjdh';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CAMP_TEMPLATE_ID as string || 'template_491cugn';
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const needsRoommate = (acc: string) =>
  acc.startsWith('Dobbeltrom') || acc.startsWith('Hytte') || acc.startsWith('Dub') || acc.startsWith('Stu');

interface Props {
  isOpen: boolean;
  onClose: () => void;
  camp: CampEntry;
}

export default function CampRegistrationModal({ isOpen, onClose, camp }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const { t, lang } = useLanguage();
  const m = t.campModal;
  const cl = camp.locale[lang];

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<CampRegistrationFormData>({ mode: 'onBlur' });
  const selectedAccommodation = watch('accommodation', '');

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) { reset(); setSubmitted(false); setSendError(null); }
  }, [isOpen, reset, lang]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const onSubmit = async (data: CampRegistrationFormData) => {
    setIsLoading(true);
    setSendError(null);
    try {
      if (!PUBLIC_KEY) throw new Error('VITE_EMAILJS_PUBLIC_KEY is not set.');
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          camp_name:     camp.emailCampName,
          first_name:    data.firstName,
          last_name:     data.lastName,
          email:         data.email,
          phone:         data.phone,
          address:       data.address,
          arrival_day:   data.arrivalDay,
          accommodation: data.accommodation,
          roommate:      data.roommate ?? '',
          allergies:     data.allergies ?? '',
          message:       data.message ?? '',
          consent:       data.consent ? m.consentYes : m.consentNo,
          language:      lang,
        },
        { publicKey: PUBLIC_KEY },
      );
      setSubmitted(true);
    } catch (err) {
      console.error('CampModal EmailJS error:', err);
      setSendError(m.sendError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className={styles.overlay}
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={cl.title}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerContent}>
                <div className={styles.eyebrow}>
                  <span className={styles.pulse} aria-hidden="true" />
                  {cl.eyebrow}
                </div>
                <h2 className={styles.title}>{cl.title}</h2>
                <div className={styles.meta}>
                  <span className={styles.metaItem}><Calendar size={13} aria-hidden="true" />{cl.meta.date}</span>
                  <span className={styles.metaItem}><MapPin size={13} aria-hidden="true" />{cl.meta.location}</span>
                  <span className={styles.metaItem}><Users size={13} aria-hidden="true" />{cl.meta.participants}</span>
                </div>
              </div>
              <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            {/* Deadline banner */}
            <div className={styles.deadlineBanner} role="note">
              <AlertTriangle size={14} aria-hidden="true" />
              <span>{m.deadlineLabel} <strong>{cl.deadlineDate}</strong></span>
            </div>

            {/* Body */}
            <div className={styles.body}>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div key={`form-${lang}-${camp.id}`} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className={styles.formNote}>{cl.formNote}</p>

                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      {/* Name row */}
                      <div className={styles.row}>
                        <div className={styles.field}>
                          <label htmlFor="cf-firstName" className={styles.fieldLabel}>
                            {m.fields.firstName.label} <span className={styles.required} aria-hidden="true">*</span>
                          </label>
                          <input id="cf-firstName" type="text" autoComplete="given-name"
                            placeholder={m.fields.firstName.placeholder}
                            className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                            aria-required="true" aria-invalid={!!errors.firstName}
                            {...register('firstName', { required: m.fields.firstName.error })} />
                          {errors.firstName && <span className={styles.errorMsg} role="alert">{errors.firstName.message}</span>}
                        </div>
                        <div className={styles.field}>
                          <label htmlFor="cf-lastName" className={styles.fieldLabel}>
                            {m.fields.lastName.label} <span className={styles.required} aria-hidden="true">*</span>
                          </label>
                          <input id="cf-lastName" type="text" autoComplete="family-name"
                            placeholder={m.fields.lastName.placeholder}
                            className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                            aria-required="true" aria-invalid={!!errors.lastName}
                            {...register('lastName', { required: m.fields.lastName.error })} />
                          {errors.lastName && <span className={styles.errorMsg} role="alert">{errors.lastName.message}</span>}
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className={styles.row}>
                        <div className={styles.field}>
                          <label htmlFor="cf-email" className={styles.fieldLabel}>
                            {m.fields.email.label} <span className={styles.required} aria-hidden="true">*</span>
                          </label>
                          <input id="cf-email" type="email" autoComplete="email"
                            placeholder={m.fields.email.placeholder}
                            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                            aria-required="true" aria-invalid={!!errors.email}
                            {...register('email', { required: m.fields.email.error, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: m.fields.email.patternError } })} />
                          {errors.email && <span className={styles.errorMsg} role="alert">{errors.email.message}</span>}
                        </div>
                        <div className={styles.field}>
                          <label htmlFor="cf-phone" className={styles.fieldLabel}>
                            {m.fields.phone.label} <span className={styles.required} aria-hidden="true">*</span>
                          </label>
                          <input id="cf-phone" type="tel" autoComplete="tel"
                            placeholder={m.fields.phone.placeholder}
                            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                            aria-required="true" aria-invalid={!!errors.phone}
                            {...register('phone', { required: m.fields.phone.error })} />
                          {errors.phone && <span className={styles.errorMsg} role="alert">{errors.phone.message}</span>}
                        </div>
                      </div>

                      {/* Address */}
                      <div className={styles.field}>
                        <label htmlFor="cf-address" className={styles.fieldLabel}>
                          {m.fields.address.label} <span className={styles.required} aria-hidden="true">*</span>
                        </label>
                        <input id="cf-address" type="text" autoComplete="street-address"
                          placeholder={m.fields.address.placeholder}
                          className={`${styles.input} ${errors.address ? styles.inputError : ''}`}
                          aria-required="true" aria-invalid={!!errors.address}
                          {...register('address', { required: m.fields.address.error })} />
                        {errors.address && <span className={styles.errorMsg} role="alert">{errors.address.message}</span>}
                      </div>

                      {/* Arrival day */}
                      <div className={styles.field}>
                        <label htmlFor="cf-arrivalDay" className={styles.fieldLabel}>
                          {m.fields.arrivalDay.label} <span className={styles.required} aria-hidden="true">*</span>
                        </label>
                        <select id="cf-arrivalDay" defaultValue=""
                          className={`${styles.select} ${errors.arrivalDay ? styles.inputError : ''}`}
                          aria-required="true" aria-invalid={!!errors.arrivalDay}
                          {...register('arrivalDay', { required: m.fields.arrivalDay.error })}>
                          <option value="" disabled>{m.fields.arrivalDay.placeholder}</option>
                          {cl.arrivalOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                        {errors.arrivalDay && <span className={styles.errorMsg} role="alert">{errors.arrivalDay.message}</span>}
                        <span className={styles.fieldHint}>{cl.arrivalHint}</span>
                      </div>

                      {/* Accommodation */}
                      <div className={styles.field}>
                        <label htmlFor="cf-accommodation" className={styles.fieldLabel}>
                          {m.fields.accommodation.label} <span className={styles.required} aria-hidden="true">*</span>
                        </label>
                        <select id="cf-accommodation" defaultValue=""
                          className={`${styles.select} ${errors.accommodation ? styles.inputError : ''}`}
                          aria-required="true" aria-invalid={!!errors.accommodation}
                          {...register('accommodation', { required: m.fields.accommodation.error })}>
                          <option value="" disabled>{m.fields.accommodation.placeholder}</option>
                          {cl.accommodationOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                        {errors.accommodation && <span className={styles.errorMsg} role="alert">{errors.accommodation.message}</span>}
                        <span className={styles.fieldHint}>{cl.accommodationHint}</span>
                      </div>

                      {/* Roommate – conditional */}
                      {needsRoommate(selectedAccommodation) && (
                        <motion.div className={styles.field} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}>
                          <label htmlFor="cf-roommate" className={styles.fieldLabel}>{m.fields.roommate.label}</label>
                          <input id="cf-roommate" type="text" placeholder={m.fields.roommate.placeholder} className={styles.input} {...register('roommate')} />
                        </motion.div>
                      )}

                      {/* Allergies */}
                      <div className={styles.field}>
                        <label htmlFor="cf-allergies" className={styles.fieldLabel}>{m.fields.allergies.label}</label>
                        <input id="cf-allergies" type="text" placeholder={m.fields.allergies.placeholder} className={styles.input} {...register('allergies')} />
                      </div>

                      {/* Message */}
                      <div className={styles.field}>
                        <label htmlFor="cf-message" className={styles.fieldLabel}>{m.fields.message.label}</label>
                        <textarea id="cf-message" rows={3} placeholder={m.fields.message.placeholder} className={styles.textarea} {...register('message')} />
                      </div>

                      {/* Consent */}
                      <div className={`${styles.field} ${styles.consentField}`}>
                        <label className={styles.consentLabel}>
                          <input type="checkbox" className={styles.checkbox} aria-required="true" aria-invalid={!!errors.consent}
                            {...register('consent', { required: m.fields.consent.error })} />
                          <span className={styles.consentText}>
                            {m.fields.consent.text} <span className={styles.required} aria-hidden="true">*</span>
                          </span>
                        </label>
                        {errors.consent && <span className={styles.errorMsg} role="alert">{errors.consent.message}</span>}
                      </div>

                      {sendError && (
                        <div className={styles.sendError} role="alert">
                          <AlertTriangle size={15} aria-hidden="true" />{sendError}
                        </div>
                      )}

                      <button type="submit" className={styles.submitBtn} disabled={isLoading} aria-label={m.submit}>
                        {isLoading ? m.submitting : (<>{m.submit}<Send size={16} aria-hidden="true" /></>)}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div key="success" className={styles.successState} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                    <div className={styles.successIcon}><CheckCircle size={36} /></div>
                    <div className={styles.successTitle}>{m.success.title}</div>
                    <p className={styles.successSub}>{cl.successSub}</p>
                    <button className={styles.closeBtnSuccess} onClick={onClose}>{m.success.close}</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

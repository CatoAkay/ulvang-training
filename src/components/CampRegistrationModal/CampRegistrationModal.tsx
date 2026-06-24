import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { X, Send, CheckCircle, AlertTriangle, MapPin, Calendar, Users } from 'lucide-react';
import type { CampRegistrationFormData } from '../../types';
import styles from './CampRegistrationModal.module.css';

// ─── EmailJS config ───────────────────────────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string || 'service_2iorjdh';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CAMP_TEMPLATE_ID as string || 'template_491cugn';
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const CAMP_NAME = 'Mora 4.–6. september 2026';

// Accommodation options – structured for easy future translation
const ACCOMMODATION_OPTIONS = [
  { value: 'Enkeltrom, 830 SEK/natt inkl. frokost', label: 'Enkeltrom – 830 SEK/natt inkl. frokost' },
  { value: 'Dobbeltrom, 950 SEK/natt inkl. frokost', label: 'Dobbeltrom – 950 SEK/natt inkl. frokost' },
  { value: 'Hytte 4-seng, 1030 SEK (frokost ikke inkludert)', label: 'Hytte 4-seng – 1 030 SEK (frokost ikke inkludert)' },
  { value: 'Hytte 5-seng, 1490 SEK (frokost ikke inkludert)', label: 'Hytte 5-seng – 1 490 SEK (frokost ikke inkludert)' },
  { value: 'Ordner overnatting selv', label: 'Jeg ordner overnatting selv' },
];

const ARRIVAL_OPTIONS = [
  { value: 'Torsdag 3/9', label: 'Torsdag 3. september' },
  { value: 'Fredag 4/9', label: 'Fredag 4. september' },
];

const needsRoommate = (acc: string) =>
  acc.startsWith('Dobbeltrom') || acc.startsWith('Hytte');

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CampRegistrationModal({ isOpen, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CampRegistrationFormData>({ mode: 'onBlur' });

  const selectedAccommodation = watch('accommodation', '');

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      reset();
      setSubmitted(false);
      setSendError(null);
    }
  }, [isOpen, reset]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const onSubmit = async (data: CampRegistrationFormData) => {
    setIsLoading(true);
    setSendError(null);
    try {
      if (!PUBLIC_KEY) {
        throw new Error('VITE_EMAILJS_PUBLIC_KEY is not set.');
      }
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          camp_name:   CAMP_NAME,
          first_name:  data.firstName,
          last_name:   data.lastName,
          email:       data.email,
          phone:       data.phone,
          address:     data.address,
          arrival_day: data.arrivalDay,
          accommodation: data.accommodation,
          roommate:    data.roommate ?? '',
          allergies:   data.allergies ?? '',
          message:     data.message ?? '',
          consent:     data.consent ? 'Ja' : 'Nei',
        },
        { publicKey: PUBLIC_KEY },
      );
      setSubmitted(true);
    } catch (err) {
      console.error('CampModal EmailJS error:', err);
      setSendError(
        'Noe gikk galt ved innsending. Sjekk internettforbindelsen og prøv igjen, ' +
        'eller kontakt oss på kontakt@xcperformance.no',
      );
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
          aria-label="Påmelding Mora samling"
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
                  Påmelding
                </div>
                <h2 className={styles.title}>Mora samling</h2>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <Calendar size={13} aria-hidden="true" />
                    4.–6. september 2026
                  </span>
                  <span className={styles.metaItem}>
                    <MapPin size={13} aria-hidden="true" />
                    Mora Parken, Sverige
                  </span>
                  <span className={styles.metaItem}>
                    <Users size={13} aria-hidden="true" />
                    Maks 30 deltakere
                  </span>
                </div>
              </div>
              <button
                className={styles.closeBtn}
                onClick={onClose}
                aria-label="Lukk påmeldingsskjema"
              >
                <X size={18} />
              </button>
            </div>

            {/* Deadline notice */}
            <div className={styles.deadlineBanner} role="note">
              <AlertTriangle size={14} aria-hidden="true" />
              <span>Påmeldingsfrist: <strong>28. juli 2026</strong></span>
            </div>

            {/* Body */}
            <div className={styles.body}>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className={styles.formNote}>
                      Alle felter merket <span className={styles.required} aria-hidden="true">*</span> er påkrevd.
                      Mat, hotell og reise faktureres separat direkte til hotellet/deg.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} noValidate>

                      {/* Name row */}
                      <div className={styles.row}>
                        <div className={styles.field}>
                          <label htmlFor="cf-firstName" className={styles.fieldLabel}>
                            Fornavn <span className={styles.required} aria-hidden="true">*</span>
                          </label>
                          <input
                            id="cf-firstName"
                            type="text"
                            autoComplete="given-name"
                            placeholder="Ola"
                            className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                            aria-required="true"
                            aria-invalid={!!errors.firstName}
                            {...register('firstName', { required: 'Fornavn er påkrevd' })}
                          />
                          {errors.firstName && (
                            <span className={styles.errorMsg} role="alert">{errors.firstName.message}</span>
                          )}
                        </div>
                        <div className={styles.field}>
                          <label htmlFor="cf-lastName" className={styles.fieldLabel}>
                            Etternavn <span className={styles.required} aria-hidden="true">*</span>
                          </label>
                          <input
                            id="cf-lastName"
                            type="text"
                            autoComplete="family-name"
                            placeholder="Nordmann"
                            className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                            aria-required="true"
                            aria-invalid={!!errors.lastName}
                            {...register('lastName', { required: 'Etternavn er påkrevd' })}
                          />
                          {errors.lastName && (
                            <span className={styles.errorMsg} role="alert">{errors.lastName.message}</span>
                          )}
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className={styles.row}>
                        <div className={styles.field}>
                          <label htmlFor="cf-email" className={styles.fieldLabel}>
                            E-post <span className={styles.required} aria-hidden="true">*</span>
                          </label>
                          <input
                            id="cf-email"
                            type="email"
                            autoComplete="email"
                            placeholder="ola@eksempel.no"
                            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                            aria-required="true"
                            aria-invalid={!!errors.email}
                            {...register('email', {
                              required: 'E-post er påkrevd',
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Ugyldig e-postadresse',
                              },
                            })}
                          />
                          {errors.email && (
                            <span className={styles.errorMsg} role="alert">{errors.email.message}</span>
                          )}
                        </div>
                        <div className={styles.field}>
                          <label htmlFor="cf-phone" className={styles.fieldLabel}>
                            Telefon <span className={styles.required} aria-hidden="true">*</span>
                          </label>
                          <input
                            id="cf-phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+47 000 00 000"
                            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                            aria-required="true"
                            aria-invalid={!!errors.phone}
                            {...register('phone', { required: 'Telefonnummer er påkrevd' })}
                          />
                          {errors.phone && (
                            <span className={styles.errorMsg} role="alert">{errors.phone.message}</span>
                          )}
                        </div>
                      </div>

                      {/* Address */}
                      <div className={styles.field}>
                        <label htmlFor="cf-address" className={styles.fieldLabel}>
                          Adresse <span className={styles.required} aria-hidden="true">*</span>
                        </label>
                        <input
                          id="cf-address"
                          type="text"
                          autoComplete="street-address"
                          placeholder="Gateveien 1, 0000 Oslo"
                          className={`${styles.input} ${errors.address ? styles.inputError : ''}`}
                          aria-required="true"
                          aria-invalid={!!errors.address}
                          {...register('address', { required: 'Adresse er påkrevd' })}
                        />
                        {errors.address && (
                          <span className={styles.errorMsg} role="alert">{errors.address.message}</span>
                        )}
                      </div>

                      {/* Arrival day */}
                      <div className={styles.field}>
                        <label htmlFor="cf-arrivalDay" className={styles.fieldLabel}>
                          Ankomstdag <span className={styles.required} aria-hidden="true">*</span>
                        </label>
                        <select
                          id="cf-arrivalDay"
                          defaultValue=""
                          className={`${styles.select} ${errors.arrivalDay ? styles.inputError : ''}`}
                          aria-required="true"
                          aria-invalid={!!errors.arrivalDay}
                          {...register('arrivalDay', { required: 'Velg ankomstdag' })}
                        >
                          <option value="" disabled>Velg ankomstdag</option>
                          {ARRIVAL_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                        {errors.arrivalDay && (
                          <span className={styles.errorMsg} role="alert">{errors.arrivalDay.message}</span>
                        )}
                        <span className={styles.fieldHint}>
                          Valgfri felles økt torsdag kveld kl. 19:00 (995 SEK, min. 5 deltakere).
                        </span>
                      </div>

                      {/* Accommodation */}
                      <div className={styles.field}>
                        <label htmlFor="cf-accommodation" className={styles.fieldLabel}>
                          Overnatting <span className={styles.required} aria-hidden="true">*</span>
                        </label>
                        <select
                          id="cf-accommodation"
                          defaultValue=""
                          className={`${styles.select} ${errors.accommodation ? styles.inputError : ''}`}
                          aria-required="true"
                          aria-invalid={!!errors.accommodation}
                          {...register('accommodation', { required: 'Velg overnattingsalternativ' })}
                        >
                          <option value="" disabled>Velg overnattingsalternativ</option>
                          {ACCOMMODATION_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                        {errors.accommodation && (
                          <span className={styles.errorMsg} role="alert">{errors.accommodation.message}</span>
                        )}
                        <span className={styles.fieldHint}>
                          Overnatting og mat betales direkte til hotellet. XC Performance fakturerer kun leirkostnader.
                        </span>
                      </div>

                      {/* Roommate – conditional */}
                      {needsRoommate(selectedAccommodation) && (
                        <motion.div
                          className={styles.field}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <label htmlFor="cf-roommate" className={styles.fieldLabel}>
                            Ønsket romkamerat
                          </label>
                          <input
                            id="cf-roommate"
                            type="text"
                            placeholder="Fullt navn på ønsket romkamerat (valgfritt)"
                            className={styles.input}
                            {...register('roommate')}
                          />
                        </motion.div>
                      )}

                      {/* Allergies */}
                      <div className={styles.field}>
                        <label htmlFor="cf-allergies" className={styles.fieldLabel}>
                          Allergier eller spesielle kostbehov
                        </label>
                        <input
                          id="cf-allergies"
                          type="text"
                          placeholder="F.eks. glutenintoleranse, nøttallergi... (valgfritt)"
                          className={styles.input}
                          {...register('allergies')}
                        />
                      </div>

                      {/* Message */}
                      <div className={styles.field}>
                        <label htmlFor="cf-message" className={styles.fieldLabel}>
                          Melding / tilleggsinformasjon
                        </label>
                        <textarea
                          id="cf-message"
                          rows={3}
                          placeholder="Spørsmål, kommentarer eller annet du vil at vi skal vite... (valgfritt)"
                          className={styles.textarea}
                          {...register('message')}
                        />
                      </div>

                      {/* Consent */}
                      <div className={`${styles.field} ${styles.consentField}`}>
                        <label className={styles.consentLabel}>
                          <input
                            type="checkbox"
                            className={styles.checkbox}
                            aria-required="true"
                            aria-invalid={!!errors.consent}
                            {...register('consent', {
                              required: 'Du må bekrefte at du har forstått betalingsbetingelsene',
                            })}
                          />
                          <span className={styles.consentText}>
                            Jeg forstår at mat, hotell og reise <strong>ikke er inkludert</strong> i samlingsprisen
                            og betales separat. Reise bookes og betales av deltaker selv. XC Performance
                            fakturerer kun leirkostnadene.{' '}
                            <span className={styles.required} aria-hidden="true">*</span>
                          </span>
                        </label>
                        {errors.consent && (
                          <span className={styles.errorMsg} role="alert">{errors.consent.message}</span>
                        )}
                      </div>

                      {/* Error */}
                      {sendError && (
                        <div className={styles.sendError} role="alert">
                          <AlertTriangle size={15} aria-hidden="true" />
                          {sendError}
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isLoading}
                        aria-label="Send påmelding til Mora samling"
                      >
                        {isLoading ? (
                          'Sender...'
                        ) : (
                          <>
                            Send påmelding
                            <Send size={16} aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    className={styles.successState}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={styles.successIcon}>
                      <CheckCircle size={36} />
                    </div>
                    <div className={styles.successTitle}>Påmelding mottatt!</div>
                    <p className={styles.successSub}>
                      Takk for din påmelding til Mora samlingen 4.–6. september 2026.
                      Vi tar kontakt med bekreftelse og praktisk informasjon.
                    </p>
                    <button className={styles.closeBtnSuccess} onClick={onClose}>
                      Lukk
                    </button>
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


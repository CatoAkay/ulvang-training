import type { Lang } from '../i18n/types';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface CampOption {
  value: string;
  label: string;
}

export interface CampLocale {
  // Modal header
  eyebrow: string;
  title: string;
  deadlineDate: string;
  formNote: string;
  meta: { date: string; location: string; participants: string };
  arrivalHint: string;
  accommodationHint: string;
  arrivalOptions: CampOption[];
  accommodationOptions: CampOption[];
  successSub: string;

  // Optional camp-specific cost / policy notes, rendered as distinct blocks
  // in the registration modal when present. Kept optional so existing
  // camps (which embed this information inside formNote/accommodationHint)
  // are unaffected.
  additionalCosts?: string;          // e.g. meal / trail-pass costs paid directly to the hotel
  hotelResponsibilityNote?: string;  // hotel booking & hotel-cancellation responsibility
  cancellationPolicyNote?: string;   // XC Performance camp cancellation policy

  // Camp card display
  month: string;
  dateDisplay: string;       // e.g. "4.–6."
  locationDisplay: string;   // e.g. "Mora, Sverige"
  duration: string;
  description: string;
  highlights: string[];
  spotsLabel: string;
  ctaLabel: string;
  registrationSoonLabel: string;
  imgLabel: string;
}

export interface CampEntry {
  id: string;
  emailCampName: string;
  modalEnabled: boolean;
  registrationOpen: boolean;
  // Optional: not all camps have a published XC Performance camp fee yet.
  memberPrice?: number;
  nonMemberPrice?: number;
  singleDayMemberPrice?: number;
  singleDayNonMemberPrice?: number;
  locale: Record<Lang, CampLocale>;
}

// ── Data ──────────────────────────────────────────────────────────────────────

export const CAMPS: CampEntry[] = [
  // ── Mora ──────────────────────────────────────────────────────────────────
  {
    id: 'mora',
    emailCampName: 'Mora 4.–6. september 2026',
    modalEnabled: true,
    registrationOpen: true,
    memberPrice: 3495,
    nonMemberPrice: 4495,
    singleDayMemberPrice: 1900,
    singleDayNonMemberPrice: 2400,
    locale: {
      no: {
        eyebrow: 'Påmelding',
        title: 'Mora samling',
        deadlineDate: '28. juli 2026',
        formNote:
          'Alle felter merket * er påkrevd. Mat, hotell og reise faktureres separat direkte til hotellet/deg.',
        meta: {
          date: '4.–6. september 2026',
          location: 'Mora Parken, Sverige',
          participants: 'Maks 30 deltakere',
        },
        arrivalHint: 'Valgfri felles økt torsdag kveld kl. 19:00 (995 SEK, min. 5 deltakere).',
        accommodationHint:
          'Overnatting og mat betales direkte til hotellet. XC Performance fakturerer kun leirkostnader.',
        arrivalOptions: [
          { value: 'Torsdag 3/9', label: 'Torsdag 3. september' },
          { value: 'Fredag 4/9', label: 'Fredag 4. september' },
        ],
        accommodationOptions: [
          { value: 'Enkeltrom, 830 SEK/natt inkl. frokost', label: 'Enkeltrom – 830 SEK/natt inkl. frokost' },
          { value: 'Dobbeltrom, 950 SEK/natt inkl. frokost', label: 'Dobbeltrom – 950 SEK/natt inkl. frokost' },
          { value: 'Hytte 4-seng, 1030 SEK (frokost ikke inkludert)', label: 'Hytte 4-seng – 1 030 SEK (frokost ikke inkludert)' },
          { value: 'Hytte 5-seng, 1490 SEK (frokost ikke inkludert)', label: 'Hytte 5-seng – 1 490 SEK (frokost ikke inkludert)' },
          { value: 'Ordner overnatting selv', label: 'Jeg ordner overnatting selv' },
        ],
        successSub:
          'Takk for din påmelding til Mora samlingen 4.–6. september 2026. Vi tar kontakt med bekreftelse og praktisk informasjon.',
        month: 'September 2026',
        dateDisplay: '4.–6.',
        locationDisplay: 'Mora, Sverige',
        duration: '3 dager',
        description:
          'Høstens første samling setter tonen for sesongen – teknikk på rulleski, styrkearbeid og fellesskap med trenerne i Mora.',
        highlights: [
          'Teknikktrening på rulleski',
          'Styrketreningsøkt med trenerne',
          'Faglig gjennomgang av sesongplan',
          'Fellesøkt og sosialt program',
        ],
        spotsLabel: 'Begrenset antall plasser',
        ctaLabel: 'Sikre din plass',
        registrationSoonLabel: 'Åpner snart',
        imgLabel: 'Høstsamling 2026',
      },
      sv: {
        eyebrow: 'Anmälan',
        title: 'Mora läger',
        deadlineDate: '28 juli 2026',
        formNote:
          'Alla fält markerade med * är obligatoriska. Mat, hotell och resa faktureras separat direkt till hotellet/dig.',
        meta: {
          date: '4–6 september 2026',
          location: 'Mora Parken, Sverige',
          participants: 'Max 30 deltagare',
        },
        arrivalHint: 'Valfritt gemensamt pass torsdagskväll kl. 19:00 (995 SEK, minst 5 deltagare).',
        accommodationHint:
          'Boende och mat betalas direkt till hotellet. XC Performance fakturerar endast lägerkostnader.',
        arrivalOptions: [
          { value: 'Torsdag 3/9', label: 'Torsdag 3 september' },
          { value: 'Fredag 4/9', label: 'Fredag 4 september' },
        ],
        accommodationOptions: [
          { value: 'Enkeltrom, 830 SEK/natt inkl. frokost', label: 'Enkelrum – 830 SEK/natt inkl. frukost' },
          { value: 'Dobbeltrom, 950 SEK/natt inkl. frokost', label: 'Dubbelrum – 950 SEK/natt inkl. frukost' },
          { value: 'Hytte 4-seng, 1030 SEK (frokost ikke inkludert)', label: 'Stuga 4-bädd – 1 030 SEK (frukost ej inkl.)' },
          { value: 'Hytte 5-seng, 1490 SEK (frokost ikke inkludert)', label: 'Stuga 5-bädd – 1 490 SEK (frukost ej inkl.)' },
          { value: 'Ordner overnatting selv', label: 'Jag ordnar boende själv' },
        ],
        successSub:
          'Tack för din anmälan till Mora lägret 4–6 september 2026. Vi återkommer med bekräftelse och praktisk information.',
        month: 'September 2026',
        dateDisplay: '4–6',
        locationDisplay: 'Mora, Sverige',
        duration: '3 dagar',
        description:
          'Höstens första läger sätter tonen för säsongen – teknik på rullskidor, styrkearbete och gemenskap med tränarna i Mora.',
        highlights: [
          'Teknikträning på rullskidor',
          'Styrketräningspass med tränarna',
          'Genomgång av säsongsplan',
          'Grupppass och socialt program',
        ],
        spotsLabel: 'Begränsat antal platser',
        ctaLabel: 'Säkra din plats',
        registrationSoonLabel: 'Öppnar snart',
        imgLabel: 'Höstläger 2026',
      },
      en: {
        eyebrow: 'Registration',
        title: 'Mora camp',
        deadlineDate: '28 July 2026',
        formNote:
          'All fields marked * are required. Food, hotel and travel are invoiced separately directly to the hotel/you.',
        meta: {
          date: '4–6 September 2026',
          location: 'Mora Parken, Sweden',
          participants: 'Max 30 participants',
        },
        arrivalHint: 'Optional group session Thursday evening at 19:00 (995 SEK, min. 5 participants).',
        accommodationHint:
          'Accommodation and food are paid directly to the hotel. XC Performance invoices camp costs only.',
        arrivalOptions: [
          { value: 'Torsdag 3/9', label: 'Thursday, 3 September' },
          { value: 'Fredag 4/9', label: 'Friday, 4 September' },
        ],
        accommodationOptions: [
          { value: 'Enkeltrom, 830 SEK/natt inkl. frokost', label: 'Single room – 830 SEK/night incl. breakfast' },
          { value: 'Dobbeltrom, 950 SEK/natt inkl. frokost', label: 'Double room – 950 SEK/night incl. breakfast' },
          { value: 'Hytte 4-seng, 1030 SEK (frokost ikke inkludert)', label: 'Cabin 4-bed – 1,030 SEK (breakfast not included)' },
          { value: 'Hytte 5-seng, 1490 SEK (frokost ikke inkludert)', label: 'Cabin 5-bed – 1,490 SEK (breakfast not included)' },
          { value: 'Ordner overnatting selv', label: 'I will arrange my own accommodation' },
        ],
        successSub:
          'Thank you for registering for the Mora camp, 4–6 September 2026. We will be in touch with confirmation and practical information.',
        month: 'September 2026',
        dateDisplay: '4–6',
        locationDisplay: 'Mora, Sweden',
        duration: '3 days',
        description:
          "Autumn's first camp sets the tone for the season – technique on roller skis, strength work and community with the coaches in Mora.",
        highlights: [
          'Technique training on roller skis',
          'Strength training session with coaches',
          'Season plan walkthrough',
          'Group session and social programme',
        ],
        spotsLabel: 'Limited spots available',
        ctaLabel: 'Secure your spot',
        registrationSoonLabel: 'Opening soon',
        imgLabel: 'Autumn camp 2026',
      },
    },
  },

  // ── Östersund ─────────────────────────────────────────────────────────────
  {
    id: 'ostersund',
    emailCampName: 'Östersund 8–10 January 2027',
    modalEnabled: true,
    registrationOpen: false, // Registration opens 1 August
    memberPrice: 3495,
    nonMemberPrice: 4495,
    singleDayMemberPrice: 1900,
    singleDayNonMemberPrice: 2400,
    locale: {
      no: {
        eyebrow: 'Påmelding',
        title: 'Östersund samling',
        deadlineDate: '20. desember 2026',
        formNote:
          'Alle felter merket * er påkrevd. Mat, hotell og reise faktureres separat direkte til hotellet/deg. ' +
          'Ved avmelding etter én uke før samlingen starter, faktureres 50 % av samlingsprisen.',
        meta: {
          date: '8.–10. januar 2027',
          location: 'Hotel Östersund, Sverige',
          participants: 'Maks 30 deltakere',
        },
        arrivalHint: 'Valgfri felles økt torsdag kveld kl. 19:00 (995 SEK, min. 5 deltakere).',
        accommodationHint:
          'Overnatting og mat betales direkte til hotellet. XC Performance fakturerer kun leirkostnader. ' +
          'Lunsj: 125 SEK/hverdag. Middag: 135 SEK.',
        arrivalOptions: [
          { value: 'Torsdag 7/1', label: 'Torsdag 7. januar' },
          { value: 'Fredag 8/1', label: 'Fredag 8. januar (oppstart kl. 09:30)' },
        ],
        accommodationOptions: [
          { value: 'Enkeltrom, 850 SEK/natt inkl. frokost', label: 'Enkeltrom – 850 SEK/natt inkl. frokost' },
          { value: 'Dobbeltrom, 950 SEK/natt inkl. frokost', label: 'Dobbeltrom – 950 SEK/natt inkl. frokost' },
          { value: 'Ordner overnatting selv', label: 'Jeg ordner overnatting selv' },
        ],
        successSub:
          'Takk for din påmelding til Östersund samlingen 8.–10. januar 2027. Vi tar kontakt med bekreftelse og praktisk informasjon.',
        month: 'Januar 2027',
        dateDisplay: '8.–10.',
        locationDisplay: 'Östersund, Sverige',
        duration: '3 dager',
        description:
          'Vinterkick med ski, teknikk og fellesskap i Östersund – starten på innesesongen med fokus på skiteknikk og forberedelse mot langløpene.',
        highlights: [
          'Skitrening og teknikkanalyse',
          'Styrketreningsøkt med trenerne',
          'Faglig gjennomgang av sesongplan',
          'Fellesøkt og sosialt program',
        ],
        spotsLabel: 'Begrenset antall plasser',
        ctaLabel: 'Meld deg på',
        registrationSoonLabel: 'Påmelding åpner 1. august',
        imgLabel: 'Vintersamling 2027',
      },
      sv: {
        eyebrow: 'Anmälan',
        title: 'Östersund läger',
        deadlineDate: '20 december 2026',
        formNote:
          'Alla fält markerade med * är obligatoriska. Mat, hotell och resa faktureras separat direkt till hotellet/dig. ' +
          'Vid avbokning senare än en vecka före lägret startar faktureras 50 % av lägerkostnaden.',
        meta: {
          date: '8–10 januari 2027',
          location: 'Hotel Östersund, Sverige',
          participants: 'Max 30 deltagare',
        },
        arrivalHint: 'Valfritt gemensamt pass torsdagskväll kl. 19:00 (995 SEK, minst 5 deltagare).',
        accommodationHint:
          'Boende och mat betalas direkt till hotellet. XC Performance fakturerar endast lägerkostnader. ' +
          'Lunch: 125 SEK/vardag. Middag: 135 SEK.',
        arrivalOptions: [
          { value: 'Torsdag 7/1', label: 'Torsdag 7 januari' },
          { value: 'Fredag 8/1', label: 'Fredag 8 januari (start kl. 09:30)' },
        ],
        accommodationOptions: [
          { value: 'Enkeltrom, 850 SEK/natt inkl. frokost', label: 'Enkelrum – 850 SEK/natt inkl. frukost' },
          { value: 'Dobbeltrom, 950 SEK/natt inkl. frokost', label: 'Dubbelrum – 950 SEK/natt inkl. frukost' },
          { value: 'Ordner overnatting selv', label: 'Jag ordnar boende själv' },
        ],
        successSub:
          'Tack för din anmälan till Östersund lägret 8–10 januari 2027. Vi återkommer med bekräftelse och praktisk information.',
        month: 'Januari 2027',
        dateDisplay: '8–10',
        locationDisplay: 'Östersund, Sverige',
        duration: '3 dagar',
        description:
          'Vinterkick med skidor, teknik och gemenskap i Östersund – starten på innersäsongen med fokus på skidteknik och förberedelse inför langloppen.',
        highlights: [
          'Skidåkning och teknikanalys',
          'Styrketräningspass med tränarna',
          'Genomgång av säsongsplan',
          'Grupppass och socialt program',
        ],
        spotsLabel: 'Begränsat antal platser',
        ctaLabel: 'Anmäl dig',
        registrationSoonLabel: 'Anmälan öppnar 1 augusti',
        imgLabel: 'Vinterläger 2027',
      },
      en: {
        eyebrow: 'Registration',
        title: 'Östersund camp',
        deadlineDate: '20 December 2026',
        formNote:
          'All fields marked * are required. Food, hotel and travel are invoiced separately directly to the hotel/you. ' +
          'Late cancellation: if cancelled later than one week before the camp starts, 50% of the camp fee will be invoiced.',
        meta: {
          date: '8–10 January 2027',
          location: 'Hotel Östersund, Sweden',
          participants: 'Max 30 participants',
        },
        arrivalHint: 'Optional group session Thursday evening at 19:00 (995 SEK, min. 5 participants).',
        accommodationHint:
          'Accommodation and food are paid directly to the hotel. XC Performance invoices camp costs only. ' +
          'Lunch: 125 SEK/weekday. Dinner: 135 SEK.',
        arrivalOptions: [
          { value: 'Torsdag 7/1', label: 'Thursday, 7 January' },
          { value: 'Fredag 8/1', label: 'Friday, 8 January (start 09:30)' },
        ],
        accommodationOptions: [
          { value: 'Enkeltrom, 850 SEK/natt inkl. frokost', label: 'Single room – 850 SEK/night incl. breakfast' },
          { value: 'Dobbeltrom, 950 SEK/natt inkl. frokost', label: 'Double room – 950 SEK/night incl. breakfast' },
          { value: 'Ordner overnatting selv', label: 'I will arrange my own accommodation' },
        ],
        successSub:
          'Thank you for registering for the Östersund camp, 8–10 January 2027. We will be in touch with confirmation and practical information.',
        month: 'January 2027',
        dateDisplay: '8–10',
        locationDisplay: 'Östersund, Sweden',
        duration: '3 days',
        description:
          'Winter kick-off with skiing, technique and community in Östersund – the start of the in-season with focus on ski technique and preparation for the ski classics.',
        highlights: [
          'Skiing and technique analysis',
          'Strength training session with coaches',
          'Season plan walkthrough',
          'Group session and social programme',
        ],
        spotsLabel: 'Limited spots available',
        ctaLabel: 'Register',
        registrationSoonLabel: 'Registration opens 1 August',
        imgLabel: 'Winter camp 2027',
      },
    },
  },

  // ── Östersund – Early Snow (November) ──────────────────────────────────────
  // A separate, new camp. Must not be confused with the January 'ostersund' camp above.
  {
    id: 'ostersund-november',
    emailCampName: 'Östersund 27–29 November 2026',
    modalEnabled: true,
    registrationOpen: true,
    locale: {
      no: {
        eyebrow: 'Påmelding',
        title: 'Tidligsnøsamling 2026',
        deadlineDate: '15. november 2026',
        formNote:
          'Alle felter merket * er påkrevd. Overnatting, mat og sporkort betales direkte til hotellet/deg – se kostnadsoversikt under.',
        meta: {
          date: '27.–29. november 2026',
          location: 'Hotell Östersund, Sverige',
          participants: 'Maks 30 deltakere',
        },
        arrivalHint: 'Oppmøte og felles oppstart fredag 27. november. Valgfri ankomst kvelden før, torsdag 26. november, for de som ønsker det.',
        accommodationHint:
          'Overnatting betales direkte til hotellet. XC Performance fakturerer kun leirkostnader.',
        arrivalOptions: [
          { value: 'Torsdag 26/11', label: 'Torsdag 26. november' },
          { value: 'Fredag 27/11', label: 'Fredag 27. november' },
        ],
        accommodationOptions: [
          { value: 'Enkeltrom, 1095 SEK/natt', label: 'Enkeltrom – 1 095 SEK/natt' },
          { value: 'Dobbeltrom, 1195 SEK/natt', label: 'Dobbeltrom – 1 195 SEK/natt' },
        ],
        successSub:
          'Takk for din påmelding til Tidligsnøsamlingen i Östersund 27.–29. november 2026. Vi tar kontakt med bekreftelse og praktisk informasjon.',
        month: 'November 2026',
        dateDisplay: '27.–29.',
        locationDisplay: 'Östersund, Sverige',
        duration: '3 dager',
        description:
          'Oppstart på snø med fokus på teknikk og utholdenhet. Faglig utbytte og sosialt fellesskap.',
        highlights: [
          'Samling på tidligsnø i Östersund',
          'Teknikktrening på snø',
          'Utholdenhetsøkter',
          'Faglig utbytte og sosialt fellesskap',
        ],
        spotsLabel: 'Begrenset antall plasser',
        ctaLabel: 'Sikre din plass',
        registrationSoonLabel: 'Åpner snart',
        imgLabel: 'Tidligsnøsamling 2026',
        additionalCosts:
          'Lunsj: 135 SEK. Middag: 165 SEK. Sporkort: 90 SEK. Alle beløp betales direkte til hotellet/arrangør, i tillegg til XC Performance sin leirpris.',
        hotelResponsibilityNote:
          'Booking av rom gjøres av den enkelte deltaker direkte hos Hotell Östersund. Alle deltakere er selv ansvarlig for avbestilling til hotellet dersom man ikke kommer likevel.',
        cancellationPolicyNote:
          'Ved avbestilling av samlingen etter 15. november må deltakeren dekke 50 % av XC Performance sin samlingspris.',
      },
      sv: {
        eyebrow: 'Anmälan',
        title: 'Tidigsnöläger 2026',
        deadlineDate: '15 november 2026',
        formNote:
          'Alla fält markerade med * är obligatoriska. Boende, mat och spårkort betalas direkt till hotellet/dig – se kostnadsöversikt nedan.',
        meta: {
          date: '27–29 november 2026',
          location: 'Hotell Östersund, Sverige',
          participants: 'Max 30 deltagare',
        },
        arrivalHint: 'Ankomst och gemensam start fredag 27 november. Valfri ankomst kvällen innan, torsdag 26 november, för de som önskar.',
        accommodationHint:
          'Boende betalas direkt till hotellet. XC Performance fakturerar endast lägerkostnader.',
        arrivalOptions: [
          { value: 'Torsdag 26/11', label: 'Torsdag 26 november' },
          { value: 'Fredag 27/11', label: 'Fredag 27 november' },
        ],
        accommodationOptions: [
          { value: 'Enkeltrom, 1095 SEK/natt', label: 'Enkelrum – 1 095 SEK/natt' },
          { value: 'Dobbeltrom, 1195 SEK/natt', label: 'Dubbelrum – 1 195 SEK/natt' },
        ],
        successSub:
          'Tack för din anmälan till Tidigsnölägret i Östersund 27–29 november 2026. Vi återkommer med bekräftelse och praktisk information.',
        month: 'November 2026',
        dateDisplay: '27–29',
        locationDisplay: 'Östersund, Sverige',
        duration: '3 dagar',
        description:
          'Start på snö med fokus på teknik och uthållighet. Kunskapsutbyte och social gemenskap.',
        highlights: [
          'Läger på tidig snö i Östersund',
          'Teknikträning på snö',
          'Uthållighetspass',
          'Kunskapsutbyte och social gemenskap',
        ],
        spotsLabel: 'Begränsat antal platser',
        ctaLabel: 'Säkra din plats',
        registrationSoonLabel: 'Öppnar snart',
        imgLabel: 'Tidigsnöläger 2026',
        additionalCosts:
          'Lunch: 135 SEK. Middag: 165 SEK. Spårkort: 90 SEK. Alla belopp betalas direkt till hotellet/arrangören, utöver XC Performance lägeravgift.',
        hotelResponsibilityNote:
          'Bokning av rum görs av varje deltagare direkt hos Hotell Östersund. Alla deltagare ansvarar själva för avbokning till hotellet om man ändå inte kommer.',
        cancellationPolicyNote:
          'Vid avbokning av lägret efter 15 november måste deltagaren stå för 50 % av XC Performance lägerpris.',
      },
      en: {
        eyebrow: 'Registration',
        title: 'Early Snow Camp 2026',
        deadlineDate: '15 November 2026',
        formNote:
          'All fields marked * are required. Accommodation, meals and trail pass are invoiced separately directly to the hotel/you – see the cost overview below.',
        meta: {
          date: '27–29 November 2026',
          location: 'Hotell Östersund, Sweden',
          participants: 'Max 30 participants',
        },
        arrivalHint: 'Arrival and joint start Friday, 27 November. Optional early arrival the evening before, Thursday 26 November, for those who prefer it.',
        accommodationHint:
          'Accommodation is paid directly to the hotel. XC Performance invoices camp costs only.',
        arrivalOptions: [
          { value: 'Torsdag 26/11', label: 'Thursday 26 November' },
          { value: 'Fredag 27/11', label: 'Friday, 27 November' },
        ],
        accommodationOptions: [
          { value: 'Enkeltrom, 1095 SEK/natt', label: 'Single room – 1,095 SEK/night' },
          { value: 'Dobbeltrom, 1195 SEK/natt', label: 'Double room – 1,195 SEK/night' },
        ],
        successSub:
          'Thank you for registering for the Early Snow Camp in Östersund, 27–29 November 2026. We will be in touch with confirmation and practical information.',
        month: 'November 2026',
        dateDisplay: '27–29',
        locationDisplay: 'Östersund, Sweden',
        duration: '3 days',
        description:
          'An early start on snow with a focus on technique and endurance. Professional development and social community.',
        highlights: [
          'Early-season snow camp in Östersund',
          'On-snow technique training',
          'Endurance sessions',
          'Professional development and social community',
        ],
        spotsLabel: 'Limited spots available',
        ctaLabel: 'Secure your spot',
        registrationSoonLabel: 'Opening soon',
        imgLabel: 'Early Snow Camp 2026',
        additionalCosts:
          'Lunch: 135 SEK. Dinner: 165 SEK. Trail pass: 90 SEK. All amounts are paid directly to the hotel/organiser, in addition to the XC Performance camp fee.',
        hotelResponsibilityNote:
          'Room bookings are made individually by each participant directly with Hotell Östersund. All participants are themselves responsible for cancelling their hotel booking if they are unable to attend.',
        cancellationPolicyNote:
          'If the camp registration is cancelled after 15 November, the participant must cover 50% of the XC Performance camp fee.',
      },
    },
  },
];


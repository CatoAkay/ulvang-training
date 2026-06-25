import type { Translation } from './types';

export const no: Translation = {
  lang: 'no',

  nav: {
    links: [
      { label: 'Hjem', href: 'hero' },
      { label: 'Konseptet', href: 'konseptet' },
      { label: 'Tilbud', href: 'tilbud' },
      { label: 'Trenere', href: 'trenere' },
      { label: 'Samlinger', href: 'samlinger' },
    ],
    cta: 'Meld interesse',
  },

  hero: {
    badge: 'Langrenn & langløp',
    headlineLine1: 'Tren som',
    headlineAccent: 'en eliteutøver',
    sub: 'Strukturert skitrening',
    description:
      'Ta treningen til neste nivå med strukturert oppfølging fra tidligere eliteutøvere.\n' +
      'Gjennom digitale treningsplaner, digitale økter og inspirerende samlinger får du tilgang til kunnskap og erfaring fra Laila Kveli, Jerry Ahrlin, Jørgen Appelkvist Ulvang og Ane Appelkvist Ulvang.\n' +
      'For deg som ønsker å utvikle deg som langrennsløper, gjennomføre langløp eller nå nye mål i skisporet.',
    ctaPrimary: 'Meld interesse',
    ctaSecondary: 'Les mer',
    scrollText: 'Scroll',
    stats: [
      { number: '2×', label: 'Vasaloppet-vinner' },
      { number: '4', label: 'Trenere' },
      { number: 'Team\nEngcon', label: 'Verdens beste lag' },
      { number: '365', label: 'Dager i året' },
    ],
  },

  about: {
    label: 'Konseptet',
    heading: 'Strukturert trening\nhele året',
    body: [
      'Vi er fire tidligere langrennsprofiler som har slått seg sammen for å gi deg tilgang til eliteoppfølging – uansett nivå. Konseptet kombinerer strukturert digital coaching med verdien av inspirerende fysiske samlinger.',
      'Som deltaker får du et helhetlig opplegg rettet mot dine mål – enten du sikter mot Vasaloppet, langløp eller helt nye skimål.',
    ],
    pillars: [
      { title: 'Digital treningsveiledning', desc: 'Personlig treningsprogram og oppfølging gjennom hele året – alltid tilgjengelig digitalt.' },
      { title: 'Digitale treningsøkter', desc: 'Digitale gruppeøkter annenhver uke, ledet av erfarne trenere med toppidrettsbakgrunn.' },
      { title: 'Fysiske samlinger', desc: '2–3 fysiske samlinger i løpet av høsten for teknikk, fellesskap og motivasjon.' },
      { title: 'Vasaloppet-support', desc: 'Spesifikk forberedelse og støtte under Vasaloppet 2027 for deg som tar steget.' },
    ],
    card: { title: 'Sesongen 2026/27', sub: 'Fra oppstart til Vasaloppet' },
    timeline: [
      { title: 'Høst – Oppstart & Styrke', desc: 'Treningsprogram settes opp. Styrke og teknikkarbeid, fysiske samlinger.' },
      { title: 'Vinter – Ski & Vasaloppet', desc: 'Skitrening starter. Teknikkanalyse, digitale økt-presentasjoner og forberedelse mot Vasaloppet.' },
      { title: 'Vår – Avkoblingsperiode', desc: 'Avkoblingsperiode etter sesongens høydepunkter. Evaluering og planlegging videre.' },
      { title: 'Sommer – Grunnlag', desc: 'Kondisjon, styrke og teknikkfundamentet legges for neste sesong.' },
    ],
  },

  features: {
    label: 'Hva du får',
    heading: 'Alt du trenger\nfor å lykkes',
    sub: 'Et komplett treningskonsept utviklet av tidligere eliteutøvere – tilpasset din hverdag og dine mål.',
    items: [
      { tag: 'Inkludert', title: 'Treningsprogram', desc: 'Treningsprogram som tar deg gjennom sesongen og hjelper deg å nå dine mål.' },
      { tag: 'Inkludert', title: 'Styrkeprogram', desc: 'Spesifikt styrkeprogram for langrenn – fokus på kjernemuskulatur, overkropp og funksjonell styrke.' },
      { tag: 'Annenhver uke', title: 'Digitale treningsøkter', desc: 'Digital gruppetrening annenhver uke ledet av trenerne. Gjennomgang, motivasjon og faglig påfyll.' },
      { tag: 'Fysisk', title: 'Samlinger', desc: '2–3 fysiske samlinger i løpet av høsten. Teknikk på rulleski og snø, fellesskap og motiverende rammer.' },
      { tag: 'Løpende', title: 'Oppfølging', desc: 'Tett individuell oppfølging gjennom sesongen. Trenerne er tilgjengelige og justerer opplegget underveis.' },
      { tag: 'Eksklusivt', title: 'Fellesskap', desc: 'Bli en del av et motiverende treningsfellesskap med like interesserte utøvere – fra mosjonist til seriøs.' },
    ],
  },

  coaches: {
    label: 'Trenerne',
    heading: 'Lær av de beste',
    sub: 'Tidligere eliteutøvere og sertifiserte trenere – med hundrevis av konkurransedager og år i verdenseliten.',
    readMore: 'Les mer',
    modal: { bioSection: 'Biografi', achievementsSection: 'Meritter' },
    items: [
      {
        role: 'Trener & Grunnlegger',
        shortBio: 'To Vasaloppet-seiere og grunnlegger av Team Engcon – verdens beste langrennslag.',
        fullBio: [
          'Jeg er 38 år og bor i Östersund. Våren 2022 satte jeg punktum for min egen karriere som langrennslöper.',
          'Da kunne jeg se tilbake på to Vasaloppet-seiere i 2013 og 2014 som karrierens absolutte høydepunkt. Med seieren i 2014 var jeg den første kvinnelige utøver som vant Vasaloppet på blanke ski.',
          'I slutten av min karriere startet jeg og min mann sammen Team Engcon. Det startet som en liten satsing der jeg var en av få løpere, men har i dag blitt verdens beste langrennslag.',
          'Jeg har studert idrettsfag ved Nord Universitet, og er i dag underveis på psykologiprogrammet ved Mittuniversitetet i Östersund.',
          'Jeg har både under min egen karriere og i etterkant jobbet med treningsplanlegging, teknikktrening og bedriftshelse – friskvård. Det å kunne bruke mine egne erfaringer til å hjelpe andre å nå sine mål er noe som virkelig motiverer meg.',
        ],
        achievements: [
          'Vasaloppet-vinner 2013',
          'Vasaloppet-vinner 2014 – første kvinner på blanke ski',
          'Grunnlegger av Team Engcon',
          'Studerer psykologi ved Mittuniversitetet',
          'Ekspert i teknikktrening og treningsplanlegging',
        ],
      },
      {
        role: 'Trener & Grunnlegger',
        shortBio: '2. plass Vasaloppet to år på rad. Pionér innen staking som konkurransestrategi.',
        fullBio: [
          'Jag är 48 år gammal och bor i Östersund. 2019 startade jag tillsammans med min fru Laila Kveli upp Team Engcon som sedan dess tävlar i langløp.',
          'Idag jobbar jag både med teamet och med friskvård inom företaget.',
          'Jag har alltid drivits av att utveckla och testa mig fram för att nå mina uppsatta mål. Efter några år inom den traditionella skidåkningen så ändrade jag fokus och började köra långlopp 2006, där stakningen blev ett allt viktigare vapen för att vinna.',
          'Jag var 2:a i Vasaloppet 2006 och 2007, och i Vasaloppet 2008 bestämde jag mig för att staka loppet och slutade då på en 3:e plats.',
          'Sedan jag själv avslutade min karriär 2016 har jag följt utvecklingen på nära håll som ledare. Under många år har jag hjälpt motionärer att nå sina mål, och i det här konceptet hoppas jag nu kunna motivera och hjälpa er att bli bättre skidåkare.',
        ],
        achievements: [
          '2. plass Vasaloppet 2006',
          '2. plass Vasaloppet 2007',
          '3. plass Vasaloppet 2008 – stakede hele løpet',
          'Grunnlegger av Team Engcon (2019)',
          'Erfaren trener for mosjonister og eliteutøvere',
        ],
      },
      {
        role: 'Hovedtrener & Fysioterapeut',
        shortBio: 'Trener for Team Engcon og fysioterapeut. Kombinerer toppidrettserfaringen med vitenskapelig tilnærming.',
        fullBio: [
          'Jeg er 32 år og bor i Trondheim. Jeg har studert fysioterapi og idrettsfag ved NTNU og Nord Universitet, og jobber i dag som trener for Team Engcon og fysioterapeut ved Trondheim Idrettsklinikk.',
          'Som aktiv utøver konkurrerte jeg i langrenn på nasjonalt og internasjonalt nivå frem til 2021. De siste 2 årene har jeg jobbet som hovedtrener for Team Engcon, og har i tillegg erfaring som trener for tradisjonelle langrennslöpere og langlöpere på både mosjonist og elitenivå.',
          'Min kompetanse er bygget gjennom erfaring både som utøver, trener og fysioterapeut. Jeg har en særlig interesse for utholdenhetstrening i langrenn, med fokus på teknikk, motorikk og styrketrening.',
          'I tillegg er jeg opptatt av hvordan monitorering og analyse av treningsbelastning kan brukes for å forebygge skader og legge til rette for best mulig prestasjonsutvikling over tid.',
        ],
        achievements: [
          'Konkurrerte nasjonalt og internasjonalt til 2021',
          'Hovedtrener for Team Engcon',
          'Fysioterapeut ved Trondheim Idrettsklinikk',
          'MSc idrettsfag, NTNU og Nord Universitet',
          'Spesialist i skadeforebygging og treningsbelastning',
        ],
      },
      {
        role: 'Trener & Utøver',
        shortBio: 'Nylig pensjonert toppidrettsutøver med sprint-bakgrunn. Deltok i langløp vinteren 2025/26.',
        fullBio: [
          'Jeg er 31 år, bor i Trondheim og har igjen ett år i en master i medier, kommunikasjon og informasjonsteknologi.',
          'Jeg har drevet med langrenn hele livet og har vært så heldig å få oppleve mange år som toppidrettsutøver på nasjonalt og internasjonalt nivå, med sprint som hovedfokus.',
          'Etter mange år som toppidrettsutøver bestemte jeg meg i vår, 2026, for å legge opp som profesjonell langrennslöper. Gjennom karrieren har jeg lært mye om hva som kreves for å utvikle seg over tid – både fysisk og mentalt – og hvor viktig kontinuitet, motivasjon og treningsglede er for å lykkes.',
          'Selv om jeg har en bakgrunn fra tradisjonelt langrenn, har interessen for langlöp vokst de siste årene. Sommeren og høsten 2025 trente jeg mye sammen med Team Engcon, noe som ga meg verdifull innsikt i treningshverdagen og kravene som stilles i langløp.',
          'Vinteren 2025/26 deltok jeg i fire langløp-renn, og fikk selv kjenne på både utfordringene og fascinasjonen ved denne formen for langrenn.',
          'Jeg brenner for å dele erfaringene jeg har opparbeidet meg gjennom mange år i skisporten, og hjelpe andre med å nå sine mål – enten målet er å gjennomföre sitt første langlöp, forbedre plasseringene i konkurranser eller rett og slett få mer ut av treningen.',
        ],
        achievements: [
          'Toppidrettsutøver på nasjonalt og internasjonalt nivå',
          'Sprint-spesialist i tradisjonelt langrenn',
          'Deltok i 4 langløp-renn 2025/26',
          'Trente med Team Engcon 2025',
          'Master i medier, kommunikasjon og IT',
        ],
      },
    ],
  },

  pricing: {
    label: 'Priser',
    heading: 'Invester i din\nutvikling',
    sub: 'Transparent prising – ingen skjulte kostnader. Som medlem får du lavest pris på samlinger gjennom hele sesongen.',
    recommended: 'Anbefalt',
    membership: {
      label: 'Årsmedlemskap',
      period: 'per år',
      features: [
        'Individuelt tilpasset treningsprogram',
        'Styrkeprogram for langrenn',
        'Digitale treningsøkter annenhver uke',
        'Tett oppfølging fra trenerne',
        'Teknikkanalyse (rulleski og snø)',
        'Rabattert pris på alle samlinger',
        'Rabatterte priser på ski, staver, treningsbekledning og utstyr.',
        'Tilgang til treningsfellesskapet',
      ],
      cta: 'Meld interesse',
    },
    campCards: [
      {
        label: 'Samling',
        subLabel: 'For medlemmer',
        period: 'per samling',
        tag: null,
        features: [
          'Teknikkanalyse på rulleski',
          'Styrketreningsøkt med trenerne',
          'Faglig gjennomgang av sesongplan',
          'Fellesøkt og sosialt program',
          'Krever aktivt årsmedlemskap',
        ],
        cta: 'Se samlinger',
      },
      {
        label: 'Samling',
        subLabel: 'Uten medlemskap',
        period: 'per samling',
        tag: 'Prøv konseptet',
        features: [
          'Teknikkanalyse på rulleski',
          'Styrketreningsøkt med trenerne',
          'Faglig gjennomgang av sesongplan',
          'Fellesøkt og sosialt program',
          'Ingen forutgående medlemskap nødvendig',
        ],
        cta: 'Se samlinger',
      },
    ],
    note: '* Enkeltdagsregistrering er tilgjengelig for samlinger: 1 900 SEK (medlem) / 2 400 SEK (ikke-medlem). Mat, hotell og reise faktureres separat.',
    servicesLabel: 'Individuelle tjenester',
    services: [
      {
        title: 'Individuelt styrkeprogram',
        description: 'Individuelt tilpasset styrketreningsprogram til ditt nivå og dine mål.',
        includes: [
          '30 minutters samtale med en av våre trenere',
          'Detaljert treningsprogram',
          'Beskrivelse av gjennomføring og utførelse',
        ],
        price: 'SEK 1 490,-',
        cta: 'Meld interesse',
      },
      {
        title: 'Individuell teknikanalyse',
        description: 'Individuell teknikanalyse med personlig gjennomgang.',
        includes: [
          '30 minutters samtale med en av våre trenere',
          'Gjennomgang av personlige utviklingsmål',
          'Arbeidsoppgaver og videre fokus',
        ],
        price: 'SEK 1 290,-',
        cta: 'Meld interesse',
      },
      {
        title: 'Individuell treningssamtale',
        description: '45 minutters individuell treningssamtale med en av våre trenere.',
        includes: [],
        note: 'Du velger selv hvilken trener du ønsker å snakke med.',
        price: 'SEK 1 490,-',
        cta: 'Meld interesse',
      },
    ],
  },

  camps: {
    label: 'Samlinger',
    heading: 'Trening i fellesskap',
    sub: 'Ingenting slår motivasjonen av å trene side om side med likesinnede og faglig sterke trenere – i vakre omgivelser.',
    nextCamp: {
      eyebrow: 'Neste samling',
      month: 'September 2026',
      duration: '3 dager',
      desc: 'Høstens første samling setter tonen for sesongen – teknikk på rulleski, styrkearbeid og fellesskap med trenerne i Mora.',
      programLabel: 'Programmet inkluderer',
      highlights: [
        'Teknikkanalyse på rulleski',
        'Styrketreningsøkt med trenerne',
        'Faglig gjennomgang av sesongplan',
        'Fellesøkt og sosialt program',
      ],
      spots: 'Begrenset antall plasser',
      cta: 'Sikre din plass',
    },
    infoCards: [
      { title: 'Høstsamlinger', desc: '2–3 fysiske samlinger gjennom høsten med fokus på teknikk, styrke og fellesskap.' },
      { title: 'Sentralt beliggende', desc: 'Samlinger på steder som er lett tilgjengelige, med god infrastruktur for langrenn og styrketrening.' },
      { title: 'Åpent for alle', desc: 'Både medlemmer og ikke-medlemmer kan delta – men som medlem får du en betydelig lavere pris.' },
    ],
    bodyText: [
      'Som en del av treningskonseptet inviterer vi til fysiske samlinger gjennom høstsesongen. Her møtes du ansikt til ansikt med trenerne og de andre deltakerne, og vi arbeider konkret med teknikk på rulleski og snø, styrke og det mentale aspektet ved langrenn.',
      'Det er også mulig å melde seg på samlinger uten fast medlemskap i treningsgruppen – men som ordinært medlem får du en betydelig rabatt.',
    ],
    featureCard: {
      imgLabel: 'Høstsamlinger 2026',
      items: [
        { bold: 'Teknikkanalyse på rulleski og ski', rest: '– grundig gjennomgang og analyse' },
        { bold: 'Styrketreningsøkter', rest: 'med trenerveiledning' },
        { bold: 'Faglige presentasjoner', rest: 'om periodisering og restitusjon' },
        { bold: 'Fellesøkter', rest: 'og motiverende miljø' },
        { bold: 'Vasaloppet 2027', rest: '– felles forberedelse og støtte' },
      ],
      pricingNote: {
        strong: 'Medlemsrabatt:',
        rest: ' Som fast medlem i treningsgruppen får du lavere pris på alle samlinger. Ikke-medlemmer kan delta, men til en høyere pris.',
      },
    },
  },

  campModal: {
    eyebrow: 'Påmelding',
    title: 'Mora samling',
    deadline: { label: 'Påmeldingsfrist:', date: '28. juli 2026' },
    formNote: 'Alle felter merket * er påkrevd. Mat, hotell og reise faktureres separat direkte til hotellet/deg.',
    meta: {
      date: '4.–6. september 2026',
      location: 'Mora Parken, Sverige',
      participants: 'Maks 30 deltakere',
    },
    fields: {
      firstName: { label: 'Fornavn', placeholder: 'Ola', error: 'Fornavn er påkrevd' },
      lastName: { label: 'Etternavn', placeholder: 'Nordmann', error: 'Etternavn er påkrevd' },
      email: { label: 'E-post', placeholder: 'ola@eksempel.no', error: 'E-post er påkrevd', patternError: 'Ugyldig e-postadresse' },
      phone: { label: 'Telefon', placeholder: '+47 000 00 000', error: 'Telefonnummer er påkrevd' },
      address: { label: 'Adresse', placeholder: 'Gateveien 1, 0000 Oslo', error: 'Adresse er påkrevd' },
      arrivalDay: {
        label: 'Ankomstdag',
        placeholder: 'Velg ankomstdag',
        error: 'Velg ankomstdag',
        hint: 'Valgfri felles økt torsdag kveld kl. 19:00 (995 SEK, min. 5 deltakere).',
      },
      accommodation: {
        label: 'Overnatting',
        placeholder: 'Velg overnattingsalternativ',
        error: 'Velg overnattingsalternativ',
        hint: 'Overnatting og mat betales direkte til hotellet. XC Performance fakturerer kun leirkostnader.',
      },
      roommate: { label: 'Ønsket romkamerat', placeholder: 'Fullt navn på ønsket romkamerat (valgfritt)' },
      allergies: { label: 'Allergier eller spesielle kostbehov', placeholder: 'F.eks. glutenintoleranse, nøttallergi... (valgfritt)' },
      message: { label: 'Melding / tilleggsinformasjon', placeholder: 'Spørsmål, kommentarer eller annet du vil at vi skal vite... (valgfritt)' },
      consent: {
        text: 'Jeg forstår at mat, hotell og reise ikke er inkludert i samlingsprisen og betales separat. Reise bookes og betales av deltaker selv. XC Performance fakturerer kun leirkostnadene.',
        error: 'Du må bekrefte at du har forstått betalingsbetingelsene',
      },
    },
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
    submit: 'Send påmelding',
    submitting: 'Sender...',
    sendError: 'Noe gikk galt ved innsending. Sjekk internettforbindelsen og prøv igjen, eller kontakt oss på kontakt@xcperformance.no',
    success: {
      title: 'Påmelding mottatt!',
      sub: 'Takk for din påmelding til Mora samlingen 4.–6. september 2026. Vi tar kontakt med bekreftelse og praktisk informasjon.',
      close: 'Lukk',
    },
    consentYes: 'Ja',
    consentNo: 'Nei',
  },

  whyUs: {
    label: 'Hvorfor oss',
    heading: 'Elitebakgrunn.\nMosjonistforståelse.',
    bodyText: [
      'Vi vet hva som skal til for å nå toppen – og vi vet hva som motiverer mosjonisten som vil gjennomføre sitt første Vasaloppet. Kombinasjonen er vår styrke.',
      'Gjennom Team Engcon har vi bygget et system som fungerer på elitenivå. Nå tar vi det til deg.',
    ],
    reasons: [
      { title: 'Tidligere eliteutøvere', desc: 'Alle trenere har konkurrert på nasjonalt eller internasjonalt nivå og kjenner veien til toppen.' },
      { title: 'Individuell oppfølging', desc: 'Du er ikke bare et nummer. Trenerne kjenner deg og dine mål, og justerer opplegget deretter.' },
      { title: 'Vitenskapelig tilnærming', desc: 'Periodisering, belastningsstyring og teknikkarbeid basert på forskning og eliteerfaring.' },
      { title: 'Langløp-ekspertise', desc: 'Direkte tilknytning til Team Engcon – verdens beste langrennslag i langløp-serien.' },
    ],
    stats: [
      { value: '2×', desc: 'Vasaloppet-seiere (Laila Kveli 2013 & 2014)' },
      { value: '20+', desc: 'Års samlet trenererfaring' },
      { value: '4', desc: 'Tidligere eliteutøvere som trenere' },
      { value: '#1', desc: 'Team Engcon – verdens beste langrennslag' },
    ],
    teamCard: {
      title: 'Team Engcon',
      desc: 'Stiftet av Laila Kveli og Jerry Ahrlin i 2019. I dag verdens ledende langløp-lag – og kjernen i dette konseptet.',
    },
    classicsCard: {
      title: 'Langløp-ekspertise',
      desc: 'Med direkte erfaring fra Vasaloppet, Birkebeinerrennet og øvrige langløp-løp gir vi deg unik innsikt og forberedelse.',
    },
  },

  testimonials: {
    label: 'Deltakere',
    heading: 'Det sier de som trener med oss',
    disclaimer: 'Tilbakemeldinger fra deltakere',
    items: [
      {
        quote: 'Etter ett år med strukturert trening under XC Performance fullførte jeg mitt første Vasaloppet. Oppfølgingen og de digitale treningsøktene var helt avgjørende for at jeg kom i mål.',
        name: 'Martin',
        details: '31 år',
        achievement: 'Fullførte Vasaloppet 2026',
      },
      {
        quote: 'Jeg har trent i mange år uten system. Med XC Performance fikk jeg endelig en plan som faktisk fungerte – og trenere som virkelig bryr seg om fremgangen din.',
        name: 'Sigve',
        details: '32 år',
        achievement: 'Forbedret seg 45 min i Birkebeinerrennet',
      },
      {
        quote: 'Kombinasjonen av digital oppfølging og fysiske samlinger er perfekt for oss som bor spredt rundt i landet. Fellesskapet er unikt og motivasjonen har aldri vært høyere.',
        name: 'Hanna',
        details: '41 år',
        achievement: 'Debuterte i langløp 2026',
      },
    ],
  },

  contact: {
    label: 'Kom i gang',
    heading: 'Meld din\ninteresse',
    bodyText: 'Fyll ut skjemaet, så tar vi kontakt med mer informasjon om konseptet, priser og oppstart. Det er uforpliktende.',
    infoItems: [
      { title: 'Oppstart høst 2026', desc: 'Vi planlegger oppstart av treningsgruppen til høst 2026.' },
      { title: 'Digitalt første', desc: 'Konseptet kjøres primært digitalt – perfekt uansett hvor du bor.' },
      { title: 'Begrenset plasser', desc: 'For å sikre god oppfølging tar vi inn et begrenset antall deltakere.' },
    ],
    form: {
      title: 'Meld interesse',
      sub: 'Alle felter merket * er påkrevd',
      submit: 'Send melding',
      submitting: 'Sender...',
      sendError: 'Noe gikk galt ved sending. Sjekk internettforbindelsen og prøv igjen, eller kontakt oss direkte på kontakt@xcperformance.no',
      success: {
        title: 'Takk for din interesse!',
        sub: 'Vi har mottatt din melding og tar kontakt snart med mer informasjon om konseptet og oppstart.',
      },
      fields: {
        navn: { label: 'Navn', placeholder: 'Ola Nordmann', error: 'Navn er påkrevd' },
        epost: { label: 'E-post', placeholder: 'ola@eksempel.no', error: 'E-post er påkrevd', patternError: 'Ugyldig e-postadresse' },
        telefon: { label: 'Telefon', placeholder: '+47 000 00 000' },
        erfaring: {
          label: 'Erfaring',
          placeholder: 'Velg din erfaringsbakgrunn',
          error: 'Velg din erfaringsbakgrunn',
          options: [
            { value: 'nybegynner', label: 'Nybegynner – har ikke gått langrenn' },
            { value: 'mosjonist', label: 'Mosjonist – går noen ganger i året' },
            { value: 'aktiv', label: 'Aktiv – trener regelmessig' },
            { value: 'konkurranseutover', label: 'Konkurranseutøver – deltar i løp' },
            { value: 'elite', label: 'Eliteutøver / har vært det' },
          ],
        },
        maal: {
          label: 'Hovedmål',
          placeholder: 'Velg ditt primære mål',
          error: 'Velg ditt hovedmål',
          options: [
            { value: 'vasaloppet', label: 'Gjennomføre Vasaloppet 2027' },
            { value: 'skiclassics', label: 'Delta i langløp' },
            { value: 'forbedre', label: 'Forbedre meg i langrenn generelt' },
            { value: 'birken', label: 'Birkebeinerrennet eller lignende' },
            { value: 'mosjonere', label: 'Trene mer strukturert / mosjonere' },
          ],
        },
        melding: { label: 'Melding', placeholder: 'Fortell oss litt om deg selv og hva du ønsker å oppnå...' },
      },
    },
  },

  faq: {
    label: 'FAQ',
    heading: 'Spørsmål\n& svar',
    sub: 'Ikke funnet svar på det du lurer på? Ta kontakt direkte, så hjelper vi deg.',
    cta: 'Still et spørsmål',
    items: [
      { question: 'Hvem passer dette for?', answer: 'Konseptet passer for alle som ønsker strukturert trening mot langrenn og langløp – enten du er erfaren mosjonist eller relativt ny i sporten. Vi tar deg imot uansett nivå og tilpasser opplegget etter dine mål og forutsetninger.' },
      { question: 'Må jeg være erfaren skiløper for å delta?', answer: 'Nei. Vi tar imot både erfarne og mindre erfarne utøvere. Det viktigste er at du har et ønske om å utvikle deg og er villig til å trene strukturert gjennom året. Vi setter opp individuelle mål og tilpasser treningsprogrammet.' },
      { question: 'Hvordan fungerer den digitale oppfølgingen?', answer: 'Som medlem får du digital treningsveiledning gjennom hele året, tilgang til digitale treningsøkter annenhver uke, og løpende oppfølging. Vi bruker digitale plattformer for kommunikasjon, treningslogging og videoanalyse av teknikk.' },
      { question: 'Hva er inkludert i treningsprogrammet?', answer: 'Medlemskap inkluderer personlig treningsprogram, styrkeprogram, teknikkanalyse, digitale treningsøkter annenhver uke, oppfølging gjennom sesongen, og mulighet til å delta på fysiske samlinger til redusert pris. I tillegg inngår opplegg og støtte under Vasaloppet 2027.' },
      { question: 'Kan jeg delta på samlinger uten å være medlem?', answer: 'Ja, det er mulig å melde seg på fysiske samlinger selv om du ikke er fast medlem i treningsgruppen. Prisen vil da være noe høyere enn for medlemmer. Ta kontakt for mer informasjon om prisnivå og tilgjengelighet.' },
      { question: 'Hvor mange fysiske samlinger er det?', answer: 'Det planlegges 2–3 fysiske samlinger i løpet av høsten. Vi har fokus på teknikk, styrke og fellesskap. Lokasjon og datoer kommuniseres til medlemmer i god tid.' },
      { question: 'Hva skjer under Vasaloppet 2027?', answer: 'For deg som ønsker å delta i Vasaloppet 2027 legger vi opp til spesifikk forberedelse mot løpet, og vi vil være tilstede med support og støtte under arrangementet. Dette er en del av det helhetlige tilbudet for motiverte utøvere.' },
      { question: 'Hva koster medlemskapet?', answer: 'Årsmedlemskap koster 4 999 SEK. Samlinger faktureres separat: 3 495 SEK for medlemmer, 4 495 SEK for ikke-medlemmer. Se priseksjonen for full oversikt.' },
    ],
  },

  footer: {
    brandDesc: 'Strukturert skitrening for deg som vil forbedre deg i langrenn og langløp – ledet av tidligere eliteutøvere og trenere fra Team Engcon.',
    navTitle: 'Navigasjon',
    coachesTitle: 'Trenere',
    contactTitle: 'Kontakt',
    contactCta: 'Meld interesse →',
    copyright: 'Alle rettigheter forbeholdt.',
    legal: { privacy: 'Personvern', terms: 'Vilkår', cookies: 'Cookies' },
    navLinks: [
      { label: 'Hjem', href: 'hero' },
      { label: 'Konseptet', href: 'konseptet' },
      { label: 'Hva du får', href: 'tilbud' },
      { label: 'Trenere', href: 'trenere' },
      { label: 'Samlinger', href: 'samlinger' },
      { label: 'FAQ', href: 'faq' },
    ],
  },
};


import type { Translation } from './types';

export const sv: Translation = {
  lang: 'sv',

  nav: {
    links: [
      { label: 'Hem', href: 'hero' },
      { label: 'Konceptet', href: 'konseptet' },
      { label: 'Erbjudande', href: 'tilbud' },
      { label: 'Priser', href: 'priser' },
      { label: 'Tränare', href: 'trenere' },
      { label: 'Läger', href: 'samlinger' },
      { label: 'Om oss', href: 'om-oss' },
    ],
    cta: 'Anmäl intresse',
  },

  hero: {
    badge: 'Längdskidåkning & langløp',
    headlineLine1: 'Träna som',
    headlineAccent: 'en elitidrottare',
    sub: 'Strukturerad skidträning',
    description:
      'Ta din träning till nästa nivå med strukturerad uppföljning från tidigare elitåkare.\n' +
      'Genom digitala träningsplaner, onlineträning och inspirerande läger får du tillgång till kunskap och erfarenhet från Laila Kveli, Jerry Ahrlin, Jørgen Appelkvist Ulvang och Ane Appelkvist Ulvang.\n' +
      'För dig som vill utvecklas som längdskidåkare, genomföra langløp eller nå nya mål i skidspåret.',
    ctaPrimary: 'Anmäl intresse',
    ctaSecondary: 'Läs mer',
    scrollText: 'Scrolla',
    stats: [
      { number: '2×', label: 'Vasaloppssegrare' },
      { number: '4', label: 'Tränare' },
      { number: 'Team\nEngcon', label: 'Världens bästa lag' },
      { number: '365', label: 'Dagar om året' },
    ],
  },

  about: {
    label: 'Konceptet',
    heading: 'Strukturerad träning\nhela året',
    body: [
      'Vi är fyra tidigare längdskidåkare på elitnivå som har gått samman för att ge dig tillgång till elituppföljning – oavsett nivå. Konceptet kombinerar strukturerad digital coaching med värdet av inspirerande fysiska läger.',
      'Som deltagare får du ett heltäckande upplägg anpassat efter dina mål – oavsett om du siktar mot Vasaloppet, langløp eller helt nya skidmål.',
    ],
    pillars: [
      { title: 'Digital träningsvägledning', desc: 'Personligt träningsprogram och uppföljning hela året – alltid tillgängligt digitalt.' },
      { title: 'Digitala träningspass', desc: 'Digitala grupppass varannan vecka, ledda av erfarna tränare med elitidrott­bakgrund.' },
      { title: 'Fysiska läger', desc: '2–3 fysiska läger under hösten för teknik, gemenskap och motivation.' },
      { title: 'Vasaloppsstöd', desc: 'Specifik förberedelse och stöd under Vasaloppet 2027 för dig som tar steget.' },
    ],
    card: { title: 'Säsongen 2026/27', sub: 'Från start till Vasaloppet' },
    timeline: [
      { title: 'Höst – Uppstart & Styrka', desc: 'Träningsprogram sätts upp. Styrke- och teknikarbete, fysiska läger.' },
      { title: 'Vinter – Skidor & Vasaloppet', desc: 'Skidträning startar. Teknikanalys, digitala sessionspresentationer och förberedelse inför Vasaloppet.' },
      { title: 'Vår – Återhämtningsperiod', desc: 'Återhämtningsperiod efter säsongens höjdpunkter. Utvärdering och planering framåt.' },
      { title: 'Sommar – Grund', desc: 'Kondition, styrka och teknikfundamentet läggs för nästa säsong.' },
    ],
  },

  features: {
    label: 'Vad du får',
    heading: 'Allt du behöver\nför att lyckas',
    sub: 'Ett komplett träningskoncept utvecklat av tidigare elitidrottare – anpassat efter din vardag och dina mål.',
    items: [
      { tag: 'Ingår', title: 'Träningsprogram', desc: 'Träningsprogram som tar dig genom säsongen och hjälper dig att nå dina mål.' },
      { tag: 'Ingår', title: 'Styrkeprogram', desc: 'Specifikt styrkeprogram för längdskidåkning – fokus på bålstyrka, överkropp och funktionell styrka.' },
      { tag: 'Varannan vecka', title: 'Digitala träningspass', desc: 'Digitalt gruppträningspass varannan vecka lett av tränarna. Genomgång, motivation och kunskapspåfyllning.' },
      { tag: 'Fysiskt', title: 'Läger', desc: '2–3 fysiska läger under hösten. Teknik på rullskidor och snö, gemenskap och inspirerande miljö.' },
      { tag: 'Löpande', title: 'Uppföljning', desc: 'Tät individuell uppföljning genom säsongen. Tränarna finns tillgängliga och justerar upplägget längs vägen.' },
      { tag: 'Exklusivt', title: 'Gemenskap', desc: 'Bli en del av en motiverande träningsgemenskap med likasinnade utövare – från motionär till tävlingsinriktad.' },
    ],
  },

  coaches: {
    label: 'Tränarna',
    heading: 'Lär av de bästa',
    sub: 'Tidigare elitidrottare och certifierade tränare – med hundratals tävlingsdagar och år i världseliten.',
    readMore: 'Läs mer',
    modal: { bioSection: 'Biografi', achievementsSection: 'Meriter' },
    items: [
      {
        role: 'Tränare & Grundare',
        shortBio: 'Två Vasaloppsegrar och grundare av Team Engcon – världens bästa längdskidlag.',
        fullBio: [
          'Jag är 38 år och bor i Östersund. Våren 2022 avslutade jag min karriär som längdskidåkare.',
          'Jag kan se tillbaka på två Vasaloppsegrar 2013 och 2014 som karriärens absoluta höjdpunkter. Med segern 2014 var jag den första kvinnliga utövaren som vann Vasaloppet på kalla skidor.',
          'I slutet av min karriär startade jag och min man Team Engcon. Det började som en liten satsning där jag var en av få åkare, men har idag blivit världens bästa längdskidlag.',
          'Jag har studerat idrottsvetenskap vid Nord Universitet och läser nu psykologiprogrammet vid Mittuniversitetet i Östersund.',
          'Jag har både under min aktiva karriär och efteråt arbetat med träningsplanering, teknikträning och företagshälsa. Att kunna använda mina egna erfarenheter för att hjälpa andra nå sina mål är något som verkligen motiverar mig.',
        ],
        achievements: [
          'Vasaloppssegrare 2013',
          'Vasaloppssegrare 2014 – första kvinna på kalla skidor',
          'Grundare av Team Engcon',
          'Studerar psykologi vid Mittuniversitetet',
          'Expert inom teknikträning och träningsplanering',
        ],
      },
      {
        role: 'Tränare & Grundare',
        shortBio: '2:a i Vasaloppet två år i rad. Pionjär inom stakning som tävlingsstrategi.',
        fullBio: [
          'Jag är 48 år gammal och bor i Östersund. 2019 startade jag tillsammans med min fru Laila Kveli upp Team Engcon som sedan dess tävlar i langløp.',
          'Idag jobbar jag både med teamet och med friskvård inom företaget.',
          'Jag har alltid drivits av att utveckla och testa mig fram för att nå mina uppsatta mål. Efter några år inom den traditionella skidåkningen så ändrade jag fokus och började köra långlopp 2006, där stakningen blev ett allt viktigare vapen för att vinna.',
          'Jag var 2:a i Vasaloppet 2006 och 2007, och i Vasaloppet 2008 bestämde jag mig för att staka loppet och slutade då på en 3:e plats.',
          'Sedan jag själv avslutade min karriär 2016 har jag följt utvecklingen på nära håll som ledare. Under många år har jag hjälpt motionärer att nå sina mål, och i det här konceptet hoppas jag nu kunna motivera och hjälpa er att bli bättre skidåkare.',
        ],
        achievements: [
          '2:a i Vasaloppet 2006',
          '2:a i Vasaloppet 2007',
          '3:a i Vasaloppet 2008 – stakade hela loppet',
          'Grundare av Team Engcon (2019)',
          'Erfaren tränare för motionärer och elitidrottare',
        ],
      },
      {
        role: 'Chefstränare & Fysioterapeut',
        shortBio: 'Tränare för Team Engcon och fysioterapeut. Kombinerar elitidrott­erfarenheten med vetenskaplig approach.',
        fullBio: [
          'Jag är 32 år och bor i Trondheim. Jag har studerat fysioterapi och idrottsvetenskap vid NTNU och Nord Universitet, och arbetar idag som tränare för Team Engcon och fysioterapeut vid Trondheim Idrettsklinikk.',
          'Som aktiv utövare tävlade jag i längdskidåkning på nationell och internationell nivå fram till 2021. De senaste 2 åren har jag arbetat som chefstränare för Team Engcon och har erfarenhet som tränare för traditionella längdskidåkare på både motionärs- och elitnivå.',
          'Min kompetens är byggd genom erfarenhet som utövare, tränare och fysioterapeut. Jag har ett särskilt intresse för uthållighetsträning inom längdskidåkning med fokus på teknik, motorik och styrketräning.',
          'Dessutom är jag intresserad av hur monitorering och analys av träningsbelastning kan användas för att förebygga skador och möjliggöra bästa möjliga prestationsutveckling över tid.',
        ],
        achievements: [
          'Tävlade nationellt och internationellt till 2021',
          'Chefstränare för Team Engcon',
          'Fysioterapeut vid Trondheim Idrettsklinikk',
          'MSc idrottsvetenskap, NTNU och Nord Universitet',
          'Specialist inom skadeförebyggande och träningsbelastning',
        ],
      },
      {
        role: 'Tränare & Idrottare',
        shortBio: 'Nyligen avslutad karriär som elitatlet med sprintbakgrund. Deltog i langløp vintern 2025/26.',
        fullBio: [
          'Jag är 31 år, bor i Trondheim och har ett år kvar på en master i media, kommunikation och informationsteknologi.',
          'Jag har sysslat med längdskidåkning hela livet och har haft förmånen att uppleva många år som elitatlet på nationell och internationell nivå, med sprint som huvudfokus.',
          'Efter många år som elitatlet bestämde jag mig våren 2026 för att avsluta karriären som professionell längdskidåkare. Genom karriären har jag lärt mig mycket om vad som krävs för att utvecklas över tid – både fysiskt och mentalt – och hur viktig kontinuitet, motivation och träningsglädje är för att lyckas.',
          'Även om jag har en bakgrund från traditionell längdskidåkning har intresset för längdlopp vuxit de senaste åren. Sommaren och hösten 2025 tränade jag mycket med Team Engcon, vilket gav mig värdefull insikt i träningsvardagen och de krav som ställs i langløp.',
          'Vintern 2025/26 deltog jag i fyra langløp-tävlingar och fick uppleva både utmaningarna och fascinationen med denna form av skidåkning.',
          'Jag brinner för att dela med mig av de erfarenheter jag samlat på mig under många år i skidsporten, och hjälpa andra att nå sina mål – oavsett om målet är att genomföra sitt första längdlopp, förbättra placeringar i tävlingar eller helt enkelt få mer ut av träningen.',
        ],
        achievements: [
          'Elitatlet på nationell och internationell nivå',
          'Sprintspecialist inom traditionell längdskidåkning',
          'Deltog i 4 langløp-tävlingar 2025/26',
          'Tränade med Team Engcon 2025',
          'Master i media, kommunikation och IT',
        ],
      },
    ],
  },

  pricing: {
    label: 'Priser',
    heading: 'Investera i din\nutveckling',
    sub: 'Transparent prissättning – inga dolda kostnader. Som medlem får du lägst pris på läger under hela säsongen.',
    recommended: 'Rekommenderas',
    membership: {
      label: 'Årsmedlemskap',
      period: 'per år',
      membershipPeriod: '1 augusti 2026 – 31 juli 2027',
      features: [
        'Träningsprogram',
        'Styrkeprogram för längdskidåkning',
        'Digitala träningspass varannan vecka',
        'Rabatterat pris på alla läger',
        'Rabatterade priser på skidor, stavar, träningskläder och utrustning.',
        'Tillgång till träningsgemenskapen',
      ],
      cta: 'Anmäl intresse',
    },
    campCards: [
      {
        label: 'Läger',
        subLabel: 'För medlemmar',
        period: 'per läger',
        tag: null,
        features: [
          'Teknikanalys på rullskidor',
          'Styrketräningspass med tränarna',
          'Genomgång av säsongsplan',
          'Grupppass och socialt program',
          'Kräver aktivt årsmedlemskap',
        ],
        cta: 'Se läger',
      },
      {
        label: 'Läger',
        subLabel: 'Utan medlemskap',
        period: 'per läger',
        tag: 'Prova konceptet',
        features: [
          'Teknikanalys på rullskidor',
          'Styrketräningspass med tränarna',
          'Genomgång av säsongsplan',
          'Grupppass och socialt program',
          'Inget föregående medlemskap krävs',
        ],
        cta: 'Se läger',
      },
    ],
    note: '* Endagsregistrering finns tillgänglig för läger: 1 900 SEK (medlem) / 2 400 SEK (icke-medlem). Mat, hotell och resa faktureras separat.',
    servicesLabel: 'Individuella tjänster',
    services: [
      {
        title: 'Individuellt styrkeprogram',
        description: 'Individuellt anpassat styrketräningsprogram till din nivå och dina mål.',
        includes: [
          '30 minuters samtal med en av våra tränare',
          'Detaljerat träningsprogram',
          'Beskrivning av genomförande och utförande',
        ],
        price: 'SEK 1 490:-',
        cta: 'Anmäl intresse',
      },
      {
        title: 'Individuell teknikanalys',
        description: 'Individuell teknikanalys med personlig genomgång.',
        includes: [
          '30 minuters samtal med en av våra tränare',
          'Genomgång av personliga utvecklingsmål',
          'Uppgifter och fortsatt fokus',
        ],
        price: 'SEK 1 290:-',
        cta: 'Anmäl intresse',
      },
      {
        title: 'Individuellt träningssamtal',
        description: '45 minuters individuellt träningssamtal med en av våra tränare.',
        includes: [],
        note: 'Du väljer själv vilken tränare du vill prata med.',
        price: 'SEK 1 490:-',
        cta: 'Anmäl intresse',
      },
    ],
  },

  camps: {
    label: 'Läger',
    heading: 'Träning i gemenskap',
    sub: 'Inget slår motivationen av att träna sida vid sida med likasinnade och duktiga tränare – i vackra omgivningar.',
    nextCamp: {
      eyebrow: 'Nästa läger',
      month: 'September 2026',
      duration: '3 dagar',
      desc: 'Höstens första läger sätter tonen för säsongen – teknik på rullskidor, styrkearbete och gemenskap med tränarna i Mora.',
      programLabel: 'Programmet inkluderar',
      highlights: [
        'Teknikanalys på rullskidor',
        'Styrketräningspass med tränarna',
        'Genomgång av säsongsplan',
        'Grupppass och socialt program',
      ],
      spots: 'Begränsat antal platser',
      cta: 'Säkra din plats',
    },
    infoCards: [
      { title: 'Höstläger', desc: '2–3 fysiska läger under hösten med fokus på teknik, styrka och gemenskap.' },
      { title: 'Centralt beläget', desc: 'Läger på platser som är lättillgängliga med god infrastruktur för längdskidåkning och styrketräning.' },
      { title: 'Öppet för alla', desc: 'Både medlemmar och icke-medlemmar kan delta – men som medlem får du ett betydligt lägre pris.' },
    ],
    bodyText: [
      'Som en del av träningskonceptet bjuder vi in till fysiska läger under höstsäsongen. Här möts du ansikte mot ansikte med tränarna och de andra deltagarna, och vi arbetar konkret med teknik på rullskidor och snö, styrka och den mentala aspekten av längdskidåkning.',
      'Det är också möjligt att anmäla sig till läger utan fast medlemskap i träningsgruppen – men som ordinarie medlem får du en betydlig rabatt.',
    ],
    featureCard: {
      imgLabel: 'Höstläger 2026',
      items: [
        { bold: 'Teknikanalys på rullskidor och skidor', rest: '– grundlig genomgång och analys' },
        { bold: 'Styrketräningspass', rest: 'med tränarhandledning' },
        { bold: 'Utbildningspresentationer', rest: 'om periodisering och återhämtning' },
        { bold: 'Grupppass', rest: 'och motiverande miljö' },
        { bold: 'Vasaloppet 2027', rest: '– gemensam förberedelse och stöd' },
      ],
      pricingNote: {
        strong: 'Medlemsrabatt:',
        rest: ' Som fast medlem i träningsgruppen får du lägre pris på alla läger. Icke-medlemmar kan delta, men till ett högre pris.',
      },
    },
  },

  campModal: {
    deadlineLabel: 'Anmälningsdeadline:',
    fields: {
      firstName: { label: 'Förnamn', placeholder: 'Erik', error: 'Förnamn är obligatoriskt' },
      lastName: { label: 'Efternamn', placeholder: 'Svensson', error: 'Efternamn är obligatoriskt' },
      email: { label: 'E-post', placeholder: 'erik@exempel.se', error: 'E-post är obligatorisk', patternError: 'Ogiltig e-postadress' },
      phone: { label: 'Telefon', placeholder: '+46 70 000 00 00', error: 'Telefonnummer är obligatoriskt' },
      address: { label: 'Adress', placeholder: 'Storgatan 1, 123 45 Stockholm', error: 'Adress är obligatorisk' },
      arrivalDay: {
        label: 'Ankomstdag',
        placeholder: 'Välj ankomstdag',
        error: 'Välj ankomstdag',
      },
      accommodation: {
        label: 'Boende',
        placeholder: 'Välj boendealternativ',
        error: 'Välj boendealternativ',
      },
      roommate: { label: 'Önskad rumspartner', placeholder: 'Fullt namn på önskad rumspartner (valfritt)' },
      allergies: { label: 'Allergier eller speciella kostbehov', placeholder: 't.ex. glutenintolerans, nötallergi... (valfritt)' },
      message: { label: 'Meddelande / övrig information', placeholder: 'Frågor, kommentarer eller annat du vill att vi ska veta... (valfritt)' },
      consent: {
        text: 'Jag förstår att mat, hotell och resa inte ingår i lägerpriset och betalas separat. Resa bokas och betalas av deltagaren själv. XC Performance fakturerar endast lägerkostnaderna.',
        error: 'Du måste bekräfta att du förstått betalningsvillkoren',
      },
    },
    submit: 'Skicka anmälan',
    submitting: 'Skickar...',
    sendError: 'Något gick fel vid inskickning. Kontrollera internetanslutningen och försök igen, eller kontakta oss på kontakt@xcperformance.no',
    success: {
      title: 'Anmälan mottagen!',
      close: 'Stäng',
    },
    consentYes: 'Ja',
    consentNo: 'Nej',
  },

  whyUs: {
    label: 'Varför oss',
    heading: 'Elitbakgrund.\nMotionärsförståelse.',
    bodyText: [
      'Vi vet vad som krävs för att nå toppen – och vi vet vad som motiverar motionären som vill genomföra sitt första Vasaloppet. Kombinationen är vår styrka.',
      'Genom Team Engcon har vi byggt ett system som fungerar på elitnivå. Nu tar vi det till dig.',
    ],
    reasons: [
      { title: 'Tidigare elitidrottare', desc: 'Alla tränare har tävlat på nationell eller internationell nivå och känner vägen till toppen.' },
      { title: 'Individuell uppföljning', desc: 'Du är inte bara ett nummer. Tränarna känner dig och dina mål och justerar upplägget därefter.' },
      { title: 'Vetenskaplig approach', desc: 'Periodisering, belastningsstyrning och teknikarbete baserat på forskning och eliterfaren­het.' },
      { title: 'Langløp-expertis', desc: 'Direkt koppling till Team Engcon – världens bästa längdskidlag i langløp-serien.' },
    ],
    stats: [
      { value: '2×', desc: 'Vasaloppsegrar (Laila Kveli 2013 & 2014)' },
      { value: '20+', desc: 'Års samlad tränarerfarenhet' },
      { value: '4', desc: 'Tidigare elitidrottare som tränare' },
      { value: '#1', desc: 'Team Engcon – världens bästa längdskidlag' },
    ],
    teamCard: {
      title: 'Team Engcon',
      desc: 'Grundat av Laila Kveli och Jerry Ahrlin 2019. Idag världens ledande langløp-lag – och kärnan i detta koncept.',
    },
    classicsCard: {
      title: 'Langløp-expertis',
      desc: 'Med direkt erfarenhet från Vasaloppet, Birkebeinerrennet och övriga langløp-lopp ger vi dig unik insikt och förberedelse.',
    },
  },

  testimonials: {
    label: 'Deltagare',
    heading: 'Det säger de som tränar med oss',
    disclaimer: 'Återkoppling från deltagare',
    items: [
      {
        quote: 'Efter ett år med strukturerad träning under XC Performance genomförde jag mitt första Vasaloppet. Uppföljningen och de digitala träningspassen var helt avgörande för att jag kom i mål.',
        name: 'Martin',
        details: '31',
        achievement: 'Genomförde Vasaloppet 2026',
      },
      {
        quote: 'Jag har tränat i många år utan system. Med XC Performance fick jag äntligen en plan som faktiskt fungerade – och tränare som verkligen bryr sig om din framgång.',
        name: 'Sigve',
        details: '32 år',
        achievement: 'Förbättrade sig 45 min i Birkebeinerrennet',
      },
      {
        quote: 'Kombinationen av digital uppföljning och fysiska läger är perfekt för oss som bor utspridda i landet. Gemenskapen är unik och motivationen har aldrig varit högre.',
        name: 'Hanna',
        details: '41 år',
        achievement: 'Debuterade i langløp 2026',
      },
    ],
  },

  contact: {
    label: 'Kom igång',
    heading: 'Anmäl ditt\nintresse',
    bodyText: 'Fyll i formuläret så kontaktar vi dig med mer information om konceptet, priser och uppstart. Det är inte bindande.',
    infoItems: [
      { title: 'Uppstart höst 2026', desc: 'Vi planerar uppstart av träningsgruppen till hösten 2026.' },
      { title: 'Digitalt först', desc: 'Konceptet körs primärt digitalt – perfekt oavsett var du bor.' },
      { title: 'Begränsat antal platser', desc: 'För att säkerställa bra uppföljning tar vi in ett begränsat antal deltagare.' },
    ],
    form: {
      title: 'Anmäl intresse',
      sub: 'Alla fält markerade med * är obligatoriska',
      submit: 'Skicka meddelande',
      submitting: 'Skickar...',
      sendError: 'Något gick fel vid sändning. Kontrollera internetanslutningen och försök igen, eller kontakta oss direkt på kontakt@xcperformance.no',
      success: {
        title: 'Tack för ditt intresse!',
        sub: 'Vi har tagit emot ditt meddelande och återkommer snart med mer information om konceptet och uppstart.',
      },
      fields: {
        navn: { label: 'Namn', placeholder: 'Erik Svensson', error: 'Namn är obligatoriskt' },
        epost: { label: 'E-post', placeholder: 'erik@exempel.se', error: 'E-post är obligatorisk', patternError: 'Ogiltig e-postadress' },
        telefon: { label: 'Telefon', placeholder: '+46 70 000 00 00' },
        erfaring: {
          label: 'Erfarenhet',
          placeholder: 'Välj din erfarenhetsbakgrund',
          error: 'Välj din erfarenhetsbakgrund',
          options: [
            { value: 'nybegynner', label: 'Nybörjare – har inte åkt längdskidor' },
            { value: 'mosjonist', label: 'Motionär – åker ibland' },
            { value: 'aktiv', label: 'Aktiv – tränar regelbundet' },
            { value: 'konkurranseutover', label: 'Tävlingsutövare – deltar i tävlingar' },
            { value: 'elite', label: 'Elitidrottare / har varit det' },
          ],
        },
        maal: {
          label: 'Huvudmål',
          placeholder: 'Välj ditt primära mål',
          error: 'Välj ditt huvudmål',
          options: [
            { value: 'vasaloppet', label: 'Genomföra Vasaloppet 2027' },
            { value: 'skiclassics', label: 'Delta i langløp' },
            { value: 'forbedre', label: 'Förbättra mig i längdskidåkning generellt' },
            { value: 'birken', label: 'Birkebeinerrennet eller liknande' },
            { value: 'mosjonere', label: 'Träna mer strukturerat / motionera' },
          ],
        },
        melding: { label: 'Meddelande', placeholder: 'Berätta lite om dig själv och vad du vill uppnå...' },
      },
    },
  },

  faq: {
    label: 'FAQ',
    heading: 'Frågor\n& svar',
    sub: 'Hittade du inte svar på det du undrar? Kontakta oss direkt så hjälper vi dig.',
    cta: 'Ställ en fråga',
    items: [
      { question: 'Vem passar detta för?', answer: 'Konceptet passar alla som vill ha strukturerad träning mot längdskidåkning och langløp – oavsett om du är en erfaren motionär eller relativt ny i sporten. Vi tar emot alla nivåer och anpassar upplägget efter dina mål och förutsättningar.' },
      { question: 'Behöver jag vara en erfaren längdskidåkare?', answer: 'Nej. Vi tar emot både erfarna och mindre erfarna utövare. Det viktigaste är att du vill utvecklas och är beredd att träna strukturerat under året. Vi sätter upp individuella mål och anpassar träningsprogrammet.' },
      { question: 'Hur fungerar den digitala uppföljningen?', answer: 'Som medlem får du digital träningsvägledning hela året, tillgång till digitala träningspass varannan vecka och löpande uppföljning. Vi använder digitala plattformar för kommunikation, träningsloggning och videoanalys av teknik.' },
      { question: 'Vad ingår i träningsprogrammet?', answer: 'Medlemskapet inkluderar personligt träningsprogram, styrkeprogram, teknikanalys, digitala träningspass varannan vecka, uppföljning under säsongen och möjlighet att delta på fysiska läger till rabatterat pris. Dessutom ingår upplägg och stöd under Vasaloppet 2027.' },
      { question: 'Kan jag delta på läger utan att vara medlem?', answer: 'Ja, det är möjligt att anmäla sig till fysiska läger utan att vara fast medlem i träningsgruppen. Priset är då något högre än för medlemmar. Kontakta oss för mer information om pris och tillgänglighet.' },
      { question: 'Hur många fysiska läger är det?', answer: 'Det planeras 2–3 fysiska läger under hösten. Vi fokuserar på teknik, styrka och gemenskap. Platser och datum kommuniceras till medlemmar i god tid.' },
      { question: 'Vad händer under Vasaloppet 2027?', answer: 'För dig som vill delta i Vasaloppet 2027 lägger vi upp specifik förberedelse inför loppet, och vi kommer att finnas på plats med support och stöd under evenemanget. Detta är en del av det heltäckande erbjudandet för motiverade utövare.' },
      { question: 'Vad kostar medlemskapet?', answer: 'Årsmedlemskap kostar 4 999 SEK. Läger faktureras separat: 3 495 SEK för medlemmar, 4 495 SEK för icke-medlemmar. Se prissektionen för fullständig översikt.' },
    ],
  },

  footer: {
    brandDesc: 'Strukturerad skidträning för dig som vill förbättra dig inom längdskidåkning och langløp – ledd av tidigare elitidrottare och tränare från Team Engcon.',
    navTitle: 'Navigation',
    coachesTitle: 'Tränare',
    contactTitle: 'Kontakt',
    contactCta: 'Anmäl intresse →',
    copyright: 'Alla rättigheter förbehållna.',
    legal: { privacy: 'Integritetspolicy', terms: 'Villkor', cookies: 'Cookies' },
    navLinks: [
      { label: 'Hem', href: 'hero' },
      { label: 'Konceptet', href: 'konseptet' },
      { label: 'Vad du får', href: 'tilbud' },
      { label: 'Tränare', href: 'trenere' },
      { label: 'Läger', href: 'samlinger' },
      { label: 'FAQ', href: 'faq' },
    ],
  },
};


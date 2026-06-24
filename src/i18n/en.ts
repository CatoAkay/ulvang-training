import type { Translation } from './types';

export const en: Translation = {
  lang: 'en',

  nav: {
    links: [
      { label: 'Home', href: 'hero' },
      { label: 'The Concept', href: 'konseptet' },
      { label: 'What You Get', href: 'tilbud' },
      { label: 'Coaches', href: 'trenere' },
      { label: 'Camps', href: 'samlinger' },
    ],
    cta: 'Register interest',
  },

  hero: {
    badge: 'Cross-Country Skiing & Ski Classics',
    headlineLine1: 'Train like',
    headlineAccent: 'an elite athlete',
    sub: 'Structured ski training',
    description:
      'Take your training to the next level with structured coaching from former elite athletes.\n' +
      'Through digital training plans, online group sessions and inspiring camps, you gain access to the knowledge and experience of Laila Kveli, Jerry Ahrlin, Jørgen Appelkvist Ulvang and Ane Appelkvist Ulvang.\n' +
      'For those who want to develop as a cross-country skier, complete Ski Classics events or achieve new goals on the trails.',
    ctaPrimary: 'Register interest',
    ctaSecondary: 'Learn more',
    scrollText: 'Scroll',
    stats: [
      { number: '2×', label: 'Vasaloppet winner' },
      { number: '4', label: 'Coaches' },
      { number: 'Team\nEngcon', label: "World's best team" },
      { number: '365', label: 'Days a year' },
    ],
  },

  about: {
    label: 'The Concept',
    heading: 'Structured training\nyear-round',
    body: [
      'We are four former elite cross-country skiers who have joined forces to give you access to elite-level coaching – at any level. The concept combines structured digital coaching with the value of inspiring physical camps.',
      'As a participant you get a comprehensive programme tailored to your goals – whether you are aiming for Vasaloppet, Ski Classics or brand-new skiing ambitions.',
    ],
    pillars: [
      { title: 'Digital training guidance', desc: 'Personal training programme and follow-up throughout the year – always available digitally.' },
      { title: 'Digital training sessions', desc: 'Group sessions every other week, led by experienced coaches with elite sport backgrounds.' },
      { title: 'Physical camps', desc: '2–3 physical camps during the autumn for technique, community and motivation.' },
      { title: 'Vasaloppet support', desc: 'Specific preparation and support during Vasaloppet 2027 for those who take the step.' },
    ],
    card: { title: 'Season 2026/27', sub: 'From start to Vasaloppet' },
    timeline: [
      { title: 'Autumn – Start & Strength', desc: 'Training programme is set up. Strength and technique work, physical camps.' },
      { title: 'Winter – Skiing & Vasaloppet', desc: 'Ski training begins. Technique analysis, digital session presentations and Vasaloppet preparation.' },
      { title: 'Spring – Recovery period', desc: 'Recovery period after the season highlights. Evaluation and planning ahead.' },
      { title: 'Summer – Foundation', desc: 'Fitness, strength and technique foundations laid for the next season.' },
    ],
  },

  features: {
    label: 'What you get',
    heading: 'Everything you need\nto succeed',
    sub: 'A complete training concept developed by former elite athletes – tailored to your daily life and goals.',
    items: [
      { tag: 'Included', title: 'Training programme', desc: 'Individually tailored training programme taking you through the entire season with the right load, periodisation and progression.' },
      { tag: 'Included', title: 'Strength programme', desc: 'Specific strength programme for cross-country skiing – focusing on core, upper body and functional strength.' },
      { tag: 'Included', title: 'Technique analysis', desc: 'Video analysis of technique on roller skis and snow – with concrete feedback from experienced coaches on both surfaces.' },
      { tag: 'Every other week', title: 'Digital sessions', desc: 'Group digital session every other week led by the coaches. Review, motivation and expert insights.' },
      { tag: 'Physical', title: 'Camps', desc: '2–3 physical camps during the autumn. Technique on roller skis and snow, community and inspiring environment.' },
      { tag: 'Ongoing', title: 'Follow-up', desc: 'Close individual follow-up throughout the season. Coaches are available and adjust the programme along the way.' },
      { tag: 'Exclusive', title: 'Community', desc: 'Join a motivating training community of like-minded athletes – from recreational to competitive.' },
    ],
  },

  coaches: {
    label: 'The Coaches',
    heading: 'Learn from the best',
    sub: 'Former elite athletes and certified coaches – with hundreds of race days and years at the world-class level.',
    readMore: 'Read more',
    modal: { bioSection: 'Biography', achievementsSection: 'Achievements' },
    items: [
      {
        role: 'Coach & Co-Founder',
        shortBio: 'Two Vasaloppet victories and co-founder of Team Engcon – the world\'s best cross-country ski team.',
        fullBio: [
          'I am 38 years old and live in Östersund. In spring 2022 I brought my own career as a cross-country skier to a close.',
          'Looking back, two Vasaloppet victories in 2013 and 2014 stand out as the absolute highlights of my career. The 2014 win made me the first female athlete to win Vasaloppet on cold (klister-free) skis.',
          'Towards the end of my career, my husband and I founded Team Engcon. What started as a small venture with just a handful of skiers has since grown into the world\'s best cross-country ski team.',
          'I studied sports science at Nord University and am currently completing a psychology degree at Mid Sweden University in Östersund.',
          'Both during my career and since retiring I have worked with training planning, technique coaching and corporate wellness. Using my own experiences to help others reach their goals is something that truly motivates me.',
        ],
        achievements: [
          'Vasaloppet winner 2013',
          'Vasaloppet winner 2014 – first woman on cold skis',
          'Co-founder of Team Engcon',
          'Studying psychology at Mid Sweden University',
          'Expert in technique coaching and training planning',
        ],
      },
      {
        role: 'Coach & Co-Founder',
        shortBio: '2nd place Vasaloppet two years running. Pioneer of double-poling as a competitive strategy.',
        fullBio: [
          'I am 48 years old and live in Östersund. In 2019, together with my wife Laila Kveli, I founded Team Engcon, which has since competed in Ski Classics.',
          'Today I work both with the team and with corporate wellness within the company.',
          'I have always been driven by developing and testing myself to reach my goals. After a few years in traditional cross-country skiing I shifted focus and began competing in long-distance events in 2006, where double-poling became an increasingly important weapon for winning.',
          'I finished 2nd at Vasaloppet in both 2006 and 2007, and in 2008 I decided to double-pole the entire race, finishing 3rd.',
          'Since retiring from competition in 2016, I have followed developments closely as a team leader. For many years I have helped recreational athletes achieve their goals, and through this concept I hope to motivate and help you become a better skier.',
        ],
        achievements: [
          '2nd place Vasaloppet 2006',
          '2nd place Vasaloppet 2007',
          '3rd place Vasaloppet 2008 – double-poled the entire race',
          'Co-founder of Team Engcon (2019)',
          'Experienced coach for recreational and elite athletes',
        ],
      },
      {
        role: 'Head Coach & Physiotherapist',
        shortBio: 'Head coach at Team Engcon and physiotherapist. Blends elite sport experience with a scientific approach.',
        fullBio: [
          'I am 32 years old and live in Trondheim. I studied physiotherapy and sports science at NTNU and Nord University, and currently work as head coach for Team Engcon and physiotherapist at Trondheim Idrettsklinikk.',
          'As an active athlete I competed in cross-country skiing at national and international level until 2021. Over the past two years I have served as head coach for Team Engcon, and also have experience coaching traditional cross-country and long-distance skiers at both recreational and elite level.',
          'My expertise is built through experience as an athlete, coach and physiotherapist. I have a particular interest in endurance training for cross-country skiing, with a focus on technique, motor skills and strength training.',
          'I am also passionate about how monitoring and analysis of training load can be used to prevent injuries and enable the best possible performance development over time.',
        ],
        achievements: [
          'Competed nationally and internationally until 2021',
          'Head coach at Team Engcon',
          'Physiotherapist at Trondheim Idrettsklinikk',
          'MSc sports science, NTNU and Nord University',
          'Specialist in injury prevention and training load management',
        ],
      },
      {
        role: 'Coach & Athlete',
        shortBio: 'Recently retired elite athlete with a sprint background. Competed in Ski Classics during winter 2025/26.',
        fullBio: [
          'I am 31 years old, live in Trondheim and have one year left of a master\'s degree in media, communication and information technology.',
          'I have skied my entire life and have been fortunate enough to spend many years as an elite athlete at national and international level, with sprint as my main discipline.',
          'After many years as an elite athlete I decided in spring 2026 to retire as a professional cross-country skier. Throughout my career I have learned a great deal about what it takes to develop over time – both physically and mentally – and how vital continuity, motivation and enjoyment of training are for success.',
          'Even though my background is in traditional cross-country skiing, my interest in long-distance events has grown in recent years. During summer and autumn 2025 I trained extensively with Team Engcon, which gave me valuable insight into the daily training routines and demands of Ski Classics.',
          'In winter 2025/26 I competed in four Ski Classics races, experiencing first-hand both the challenges and the fascination of this form of skiing.',
          'I am passionate about sharing the experience I have gathered over many years in the sport, and helping others reach their goals – whether that means completing a first long-distance race, improving competition results or simply getting more out of training.',
        ],
        achievements: [
          'Elite athlete at national and international level',
          'Sprint specialist in traditional cross-country skiing',
          'Competed in 4 Ski Classics races 2025/26',
          'Trained with Team Engcon 2025',
          "Master's in media, communication and IT",
        ],
      },
    ],
  },

  pricing: {
    label: 'Pricing',
    heading: 'Invest in your\ndevelopment',
    sub: 'Transparent pricing – no hidden costs. As a member you get the lowest price on camps throughout the season.',
    recommended: 'Recommended',
    membership: {
      label: 'Annual membership',
      period: 'per year',
      features: [
        'Individually tailored training programme',
        'Strength programme for cross-country skiing',
        'Digital sessions every other week',
        'Close follow-up from the coaches',
        'Technique analysis (roller skis and snow)',
        'Discounted price on all camps',
        'Access to the training community',
      ],
      cta: 'Register interest',
    },
    campCards: [
      {
        label: 'Camp',
        subLabel: 'For members',
        period: 'per camp',
        tag: null,
        features: [
          'Technique analysis on roller skis',
          'Strength training session with coaches',
          'Season plan walkthrough',
          'Group session and social programme',
          'Requires active annual membership',
        ],
        cta: 'View camps',
      },
      {
        label: 'Camp',
        subLabel: 'Without membership',
        period: 'per camp',
        tag: 'Try the concept',
        features: [
          'Technique analysis on roller skis',
          'Strength training session with coaches',
          'Season plan walkthrough',
          'Group session and social programme',
          'No prior membership required',
        ],
        cta: 'View camps',
      },
    ],
    note: '* Single-day registration is available for camps: 1,900 SEK (member) / 2,400 SEK (non-member). Food, hotel and travel are invoiced separately.',
  },

  camps: {
    label: 'Camps',
    heading: 'Training together',
    sub: 'Nothing beats the motivation of training side by side with like-minded athletes and expert coaches – in stunning surroundings.',
    nextCamp: {
      eyebrow: 'Next camp',
      month: 'September 2026',
      duration: '3 days',
      desc: 'The first camp of the autumn sets the tone for the season – roller ski technique, strength work and community with the coaches in Mora.',
      programLabel: 'Programme includes',
      highlights: [
        'Technique analysis on roller skis',
        'Strength training session with coaches',
        'Season plan walkthrough',
        'Group session and social programme',
      ],
      spots: 'Limited spaces available',
      cta: 'Secure your spot',
    },
    infoCards: [
      { title: 'Autumn camps', desc: '2–3 physical camps during the autumn focusing on technique, strength and community.' },
      { title: 'Convenient locations', desc: 'Camps at easily accessible venues with good infrastructure for cross-country skiing and strength training.' },
      { title: 'Open to everyone', desc: 'Both members and non-members can attend – but as a member you get a significantly lower price.' },
    ],
    bodyText: [
      'As part of the training concept we invite participants to physical camps throughout the autumn season. Here you meet face-to-face with the coaches and fellow participants, working concretely on roller ski and snow technique, strength and the mental side of cross-country skiing.',
      'It is also possible to register for camps without a full membership in the training group – but as a regular member you receive a significant discount.',
    ],
    featureCard: {
      imgLabel: 'Autumn Camps 2026',
      items: [
        { bold: 'Technique analysis on roller skis and snow', rest: '– thorough review and analysis' },
        { bold: 'Strength training sessions', rest: 'with coach guidance' },
        { bold: 'Educational presentations', rest: 'on periodisation and recovery' },
        { bold: 'Group sessions', rest: 'and motivating environment' },
        { bold: 'Vasaloppet 2027', rest: '– joint preparation and support' },
      ],
      pricingNote: {
        strong: 'Member discount:',
        rest: ' As a full member of the training group you get a lower price on all camps. Non-members can attend, but at a higher price.',
      },
    },
  },

  campModal: {
    eyebrow: 'Registration',
    title: 'Mora Camp',
    deadline: { label: 'Registration deadline:', date: '28 July 2026' },
    formNote: 'All fields marked * are required. Food, hotel and travel are invoiced separately directly to the hotel/you.',
    meta: {
      date: '4–6 September 2026',
      location: 'Mora Parken, Sweden',
      participants: 'Max 30 participants',
    },
    fields: {
      firstName: { label: 'First name', placeholder: 'John', error: 'First name is required' },
      lastName: { label: 'Last name', placeholder: 'Smith', error: 'Last name is required' },
      email: { label: 'Email', placeholder: 'john@example.com', error: 'Email is required', patternError: 'Invalid email address' },
      phone: { label: 'Phone', placeholder: '+44 7000 000000', error: 'Phone number is required' },
      address: { label: 'Address', placeholder: '1 High Street, London SW1A 1AA', error: 'Address is required' },
      arrivalDay: {
        label: 'Arrival day',
        placeholder: 'Select arrival day',
        error: 'Please select arrival day',
        hint: 'Optional joint session Thursday evening at 19:00 (995 SEK, minimum 5 participants).',
      },
      accommodation: {
        label: 'Accommodation',
        placeholder: 'Select accommodation',
        error: 'Please select accommodation',
        hint: 'Accommodation and meals are paid directly to the hotel. XC Performance invoices camp fees only.',
      },
      roommate: { label: 'Preferred roommate', placeholder: 'Full name of preferred roommate (optional)' },
      allergies: { label: 'Allergies or special dietary needs', placeholder: 'e.g. gluten intolerance, nut allergy... (optional)' },
      message: { label: 'Message / additional information', placeholder: 'Questions, comments or anything else you\'d like us to know... (optional)' },
      consent: {
        text: 'I understand that food, hotel and travel are not included in the camp fee and are paid separately. Travel is booked and paid for by the participant. XC Performance invoices camp costs only.',
        error: 'You must confirm that you have understood the payment terms',
      },
    },
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
    submit: 'Submit registration',
    submitting: 'Submitting...',
    sendError: 'Something went wrong. Please check your internet connection and try again, or contact us at kontakt@xcperformance.no',
    success: {
      title: 'Registration received!',
      sub: 'Thank you for registering for the Mora Camp, 4–6 September 2026. We will be in touch with confirmation and practical information.',
      close: 'Close',
    },
    consentYes: 'Yes',
    consentNo: 'No',
  },

  whyUs: {
    label: 'Why us',
    heading: 'Elite background.\nRecreational understanding.',
    bodyText: [
      'We know what it takes to reach the top – and we know what motivates the recreational athlete who wants to complete their first Vasaloppet. That combination is our strength.',
      'Through Team Engcon we have built a system that works at the elite level. Now we bring it to you.',
    ],
    reasons: [
      { title: 'Former elite athletes', desc: 'All coaches have competed at national or international level and know the road to the top.' },
      { title: 'Individual follow-up', desc: 'You are not just a number. Coaches know you and your goals and adjust the programme accordingly.' },
      { title: 'Scientific approach', desc: 'Periodisation, load management and technique work based on research and elite experience.' },
      { title: 'Ski Classics expertise', desc: 'Direct connection to Team Engcon – the world\'s best cross-country ski team in the Ski Classics series.' },
    ],
    stats: [
      { value: '2×', desc: 'Vasaloppet victories (Laila Kveli 2013 & 2014)' },
      { value: '20+', desc: 'Combined years of coaching experience' },
      { value: '4', desc: 'Former elite athletes as coaches' },
      { value: '#1', desc: 'Team Engcon – world\'s best cross-country ski team' },
    ],
    teamCard: {
      title: 'Team Engcon',
      desc: 'Founded by Laila Kveli and Jerry Ahrlin in 2019. Today the world\'s leading Ski Classics team – and the core of this concept.',
    },
    classicsCard: {
      title: 'Ski Classics expertise',
      desc: 'With direct experience from Vasaloppet, Birkebeinerrennet and other Ski Classics races, we give you unique insight and preparation.',
    },
  },

  testimonials: {
    label: 'Participants',
    heading: 'What those training with us say',
    disclaimer: 'Feedback from participants',
    items: [
      {
        quote: 'After a year of structured training with XC Performance I completed my first Vasaloppet. The follow-up and digital sessions were absolutely crucial to me crossing the finish line.',
        name: 'Martin',
        details: '31',
        achievement: 'Completed Vasaloppet 2026',
      },
      {
        quote: 'I had trained for years without any system. With XC Performance I finally got a plan that actually worked – and coaches who genuinely care about your progress.',
        name: 'Sigve',
        details: '32 år',
        achievement: 'Improved by 45 min at Birkebeinerrennet',
      },
      {
        quote: 'The combination of digital follow-up and physical camps is perfect for those of us spread across the country. The community is unique and my motivation has never been higher.',
        name: 'Hanna',
        details: '41 år',
        achievement: 'Ski Classics debut 2026',
      },
    ],
  },

  contact: {
    label: 'Get started',
    heading: 'Register your\ninterest',
    bodyText: 'Fill in the form and we will get in touch with more information about the concept, pricing and start date. No commitment required.',
    infoItems: [
      { title: 'Starting autumn 2026', desc: 'We plan to launch the training group in autumn 2026.' },
      { title: 'Digital-first', desc: 'The concept runs primarily online – perfect wherever you live.' },
      { title: 'Limited places', desc: 'To ensure quality follow-up we accept a limited number of participants.' },
    ],
    form: {
      title: 'Register interest',
      sub: 'All fields marked * are required',
      submit: 'Send message',
      submitting: 'Sending...',
      sendError: 'Something went wrong. Please check your internet connection and try again, or contact us directly at kontakt@xcperformance.no',
      success: {
        title: 'Thank you for your interest!',
        sub: 'We have received your message and will be in touch shortly with more information about the concept and start date.',
      },
      fields: {
        navn: { label: 'Name', placeholder: 'John Smith', error: 'Name is required' },
        epost: { label: 'Email', placeholder: 'john@example.com', error: 'Email is required', patternError: 'Invalid email address' },
        telefon: { label: 'Phone', placeholder: '+44 7000 000000' },
        erfaring: {
          label: 'Experience',
          placeholder: 'Select your experience level',
          error: 'Please select your experience level',
          options: [
            { value: 'nybegynner', label: 'Beginner – have not skied cross-country' },
            { value: 'mosjonist', label: 'Recreational – ski occasionally' },
            { value: 'aktiv', label: 'Active – train regularly' },
            { value: 'konkurranseutover', label: 'Competitive – participate in races' },
            { value: 'elite', label: 'Elite athlete / former elite' },
          ],
        },
        maal: {
          label: 'Main goal',
          placeholder: 'Select your primary goal',
          error: 'Please select your main goal',
          options: [
            { value: 'vasaloppet', label: 'Complete Vasaloppet 2027' },
            { value: 'skiclassics', label: 'Compete in Ski Classics' },
            { value: 'forbedre', label: 'Improve my cross-country skiing generally' },
            { value: 'birken', label: 'Birkebeinerrennet or similar' },
            { value: 'mosjonere', label: 'Train more structured / recreational fitness' },
          ],
        },
        melding: { label: 'Message', placeholder: 'Tell us a little about yourself and what you want to achieve...' },
      },
    },
  },

  faq: {
    label: 'FAQ',
    heading: 'Questions\n& answers',
    sub: "Can't find the answer you're looking for? Get in touch directly and we'll help you.",
    cta: 'Ask a question',
    items: [
      { question: 'Who is this for?', answer: 'The concept is for anyone who wants structured training towards cross-country skiing and Ski Classics – whether you are an experienced recreational athlete or relatively new to the sport. We welcome all levels and tailor the programme to your goals and circumstances.' },
      { question: 'Do I need to be an experienced skier?', answer: 'No. We welcome both experienced and less experienced athletes. The most important thing is that you want to develop and are willing to train structured throughout the year. We set individual goals and tailor the training programme accordingly.' },
      { question: 'How does the digital follow-up work?', answer: 'As a member you get digital training guidance throughout the year, access to group sessions every other week, and ongoing follow-up. We use digital platforms for communication, training logging and video analysis of technique.' },
      { question: 'What is included in the training programme?', answer: 'Membership includes a personal training programme, strength programme, technique analysis, digital sessions every other week, follow-up throughout the season, and the option to attend physical camps at a discounted price. Also included is a specific programme and support for Vasaloppet 2027.' },
      { question: 'Can I attend camps without being a member?', answer: 'Yes, it is possible to register for physical camps without a full membership. The price will be somewhat higher than for members. Contact us for more information on pricing and availability.' },
      { question: 'How many physical camps are there?', answer: '2–3 physical camps are planned during the autumn. We focus on technique, strength and community. Locations and dates are communicated to members well in advance.' },
      { question: 'What happens at Vasaloppet 2027?', answer: 'For those who wish to participate in Vasaloppet 2027 we provide specific race preparation and will be on-site with support and assistance during the event. This is part of the comprehensive offering for motivated athletes.' },
      { question: 'How much does membership cost?', answer: 'Annual membership costs 4,999 SEK. Camps are invoiced separately: 3,495 SEK for members, 4,495 SEK for non-members. See the pricing section for a full overview.' },
    ],
  },

  footer: {
    brandDesc: 'Structured ski training for those who want to improve in cross-country skiing and Ski Classics – led by former elite athletes and coaches from Team Engcon.',
    navTitle: 'Navigation',
    coachesTitle: 'Coaches',
    contactTitle: 'Contact',
    contactCta: 'Register interest →',
    copyright: 'All rights reserved.',
    legal: { privacy: 'Privacy policy', terms: 'Terms', cookies: 'Cookies' },
    navLinks: [
      { label: 'Home', href: 'hero' },
      { label: 'The Concept', href: 'konseptet' },
      { label: 'What You Get', href: 'tilbud' },
      { label: 'Coaches', href: 'trenere' },
      { label: 'Camps', href: 'samlinger' },
      { label: 'FAQ', href: 'faq' },
    ],
  },
};


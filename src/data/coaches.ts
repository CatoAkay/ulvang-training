import type { Coach } from '../types';
import lailaKveli from '../assets/lailaKveli.jpg';
import jerryAhrlin from '../assets/jerryAhrlin.jpg';
import joergenUlvang from '../assets/joergenUlvang.jpg';
import aneUlvang from '../assets/aneUlvang.jpg';

export const coaches: Coach[] = [
  {
    id: 'laila-kveli',
    name: 'Laila Kveli',
    role: 'Trener & Grunnlegger',
    location: 'Östersund, Sverige',
    age: 38,
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
    photo: lailaKveli,
  },
  {
    id: 'jerry-ahrlin',
    name: 'Jerry Ahrlin',
    role: 'Trener & Grunnlegger',
    location: 'Östersund, Sverige',
    age: 48,
    shortBio: '2. plass Vasaloppet to år på rad. Pionér innen staking som konkurransestrategi.',
    fullBio: [
      'Jag är 48 år gammal och bor i Östersund. 2019 startade jag tillsammans med min fru Laila Kveli upp Team Engcon som sedan dess tävlar i Ski Classics.',
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
    photo: jerryAhrlin,
  },
  {
    id: 'jorgen-appelkvist-ulvang',
    name: 'Jørgen Appelkvist Ulvang',
    role: 'Hovedtrener & Fysioterapeut',
    location: 'Trondheim, Norge',
    age: 32,
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
    photo: joergenUlvang,
  },
  {
    id: 'ane-appelkvist-ulvang',
    name: 'Ane Appelkvist Ulvang',
    role: 'Trener & Utøver',
    location: 'Trondheim, Norge',
    age: 31,
    shortBio: 'Nylig pensjonert toppidrettsutøver med sprint-bakgrunn. Deltok i Ski Classics vinteren 2025/26.',
    fullBio: [
      'Jeg er 31 år, bor i Trondheim og har igjen ett år i en master i medier, kommunikasjon og informasjonsteknologi.',
      'Jeg har drevet med langrenn hele livet og har vært så heldig å få oppleve mange år som toppidrettsutøver på nasjonalt og internasjonalt nivå, med sprint som hovedfokus.',
      'Etter mange år som toppidrettsutøver bestemte jeg meg i vår, 2026, for å legge opp som profesjonell langrennslöper. Gjennom karrieren har jeg lært mye om hva som kreves for å utvikle seg over tid – både fysisk og mentalt – og hvor viktig kontinuitet, motivasjon og treningsglede er for å lykkes.',
      'Selv om jeg har en bakgrunn fra tradisjonelt langrenn, har interessen for langlöp vokst de siste årene. Sommeren og høsten 2025 trente jeg mye sammen med Team Engcon, noe som ga meg verdifull innsikt i treningshverdagen og kravene som stilles i Ski Classics.',
      'Vinteren 2025/26 deltok jeg i fire Ski Classics-renn, og fikk selv kjenne på både utfordringene og fascinasjonen ved denne formen for langrenn.',
      'Jeg brenner for å dele erfaringene jeg har opparbeidet meg gjennom mange år i skisporten, og hjelpe andre med å nå sine mål – enten målet er å gjennomföre sitt første langlöp, forbedre plasseringene i konkurranser eller rett og slett få mer ut av treningen.',
    ],
    achievements: [
      'Toppidrettsutøver på nasjonalt og internasjonalt nivå',
      'Sprint-spesialist i tradisjonelt langrenn',
      'Deltok i 4 Ski Classics-renn 2025/26',
      'Trente med Team Engcon 2025',
      'Master i medier, kommunikasjon og IT',
    ],
    photo: aneUlvang,
  },
];

import { ServiceItem, TeamMember, NavLink, Partner, PortfolioEvent } from './types';
import co1Image from './assets/co1.jpg';
import bz1Image from './assets/bz1.jpg';
import heroImage from './assets/hero.jpg';

export const SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'Strategic Advisory',
    description: 'We help teams orient, choose, and commit. Strategy that translates into action rather than presentations.'
  },
  {
    id: '02',
    title: 'Market & Narrative Positioning',
    description: 'We help you state who you are, why it matters, and ensure it reaches the right people.'
  },
  {
    id: '03',
    title: 'Product & Delivery',
    description: 'We work alongside founders to shape product direction and execution. Present where the work actually happens.'
  },
  {
    id: '04',
    title: 'Capital Advisory',
    description: 'We prepare you to raise and interface with capital. Story, materials, introductions, and guidance through the process.'
  },
  {
    id: '05',
    title: 'Partnerships & Ecosystems',
    description: 'We map who you should work with and make those relationships real. Access, alignment, and ongoing stewardship.'
  },
  {
    id: '06',
    title: 'Scaling & Execution',
    description: 'We plug gaps, steady the ship, and reinforce what must work for momentum to stick. Process, prioritization, and operational continuity.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '01',
    role: 'Craig O.',
    handle: 'Strategy & Capital',
    bio: [
      'Craig builds networks that move. He aligns stakeholders, sets motion, and stays embedded until outcomes materialize.'
    ],
    imageUrl: co1Image,
    twitter: 'https://x.com/Cryptofinomic',
    linkedin: 'https://www.linkedin.com/in/craigjolson/',
    telegram: 'https://t.me/cryptofinomic',
    email: 'craig@lat48.io'
  },
  {
    id: '02',
    role: 'Berker Z.',
    handle: 'Product & Execution',
    bio: [
      'Berker turns uncertain ambition into working systems. He navigates the messy middle between vision, users, and teams, and keeps the pace from collapsing.'
    ],
    imageUrl: bz1Image,
    twitter: 'https://x.com/realluvbby',
    linkedin: 'https://www.linkedin.com/in/berkerz/',
    telegram: 'https://t.me/berkerz',
    email: 'berker@lat48.io'
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Google', url: 'https://www.google.com', logo: heroImage },
  { name: 'Coinbase', url: 'https://www.coinbase.com', logo: heroImage },
  { name: 'Chainlink', url: 'https://chain.link', logo: heroImage },
  { name: 'Circle', url: 'https://www.circle.com', logo: heroImage },
  { name: 'StarkWare', url: 'https://starkware.co', logo: heroImage },
  { name: 'Ava Labs', url: 'https://www.avalabs.org', logo: heroImage },
  { name: 'Polygon', url: 'https://polygon.technology', logo: heroImage },
  { name: 'EigenLayer', url: 'https://www.eigenlayer.xyz', logo: heroImage },
];

export const PORTFOLIO_EVENTS: PortfolioEvent[] = [
  { title: 'Deal Wiv It 01', url: 'https://lu.ma/example-01', location: 'NYC', imageUrl: heroImage },
  { title: 'Deal Wiv It 02', url: 'https://lu.ma/example-02', location: 'London', imageUrl: heroImage },
  { title: 'Deal Wiv It 03', url: 'https://lu.ma/example-03', location: 'Singapore', imageUrl: heroImage },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'SERVICES', href: '/#services' },
  { label: 'TEAM', href: '/#team' },
  { label: 'CONTACT', href: '/#footer' },
  // { label: 'P', href: '/portfolio' }, // TEMP: Portfolio route for testing
];

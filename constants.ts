import { ServiceItem, TeamMember, NavLink } from './types';
import co1Image from './assets/co1.jpg';
import bz1Image from './assets/bz1.jpg';

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

export const NAV_LINKS: NavLink[] = [
  { label: 'SERVICES', href: '#services' },
  { label: 'TEAM', href: '#team' },
  { label: 'CONTACT', href: '#footer' },
];

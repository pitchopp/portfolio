// Social Links
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/amine-sghir-29b598101/',
  github: 'https://github.com/pitchopp',
  email: 'sghir.ma@gmail.com',
  phone: '+33 6 95 70 26 00',
} as const;

// CV exports — PDFs are stored in /public/cv/
// Naming convention: cv-{variant}-{lang}-{format}.pdf
//   variant: 'a-llm' (AI/LLM Engineer) | 'b-data' (Data Engineer)
//   lang: 'fr' | 'en'
//   format: '1p' (ATS, 1 page, no photo) | '2p' (detailed, 2 pages, with photo)
export type CvVariant = 'a-llm' | 'b-data';
export type CvFormat = '1p' | '2p';
export type CvLang = 'fr' | 'en';

export function getCvUrl(
  locale: string,
  variant: CvVariant = 'a-llm',
  format: CvFormat = '2p',
): string {
  const lang: CvLang = locale === 'en' ? 'en' : 'fr';
  return `/cv/cv-${variant}-${lang}-${format}.pdf`;
}

// Default CV (most-likely entry point) — kept for backward compat
export const CV_URL = getCvUrl('fr');

// Location
export const LOCATION = {
  city: 'Paris',
  country: 'France',
} as const;

// Navigation items
export const NAV_ITEMS = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
] as const;

// Skill categories with icons
export const SKILL_CATEGORIES = [
  {
    id: 'ai',
    icon: 'Brain',
    color: '#ec4899', // pink
  },
  {
    id: 'backend',
    icon: 'Code',
    color: '#3b82f6', // blue
  },
  {
    id: 'data',
    icon: 'Database',
    color: '#10b981', // emerald
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    color: '#f59e0b', // amber
  },
  {
    id: 'web',
    icon: 'Globe',
    color: '#8b5cf6', // violet
  },
] as const;

// Experience items (keys match translation file)
// Strict reverse chronological order
// Note: credit_agricole retiré (peu pertinent pour le positionnement actuel)
export const EXPERIENCE_ITEMS = [
  { key: 'sodexo', current: true },
  { key: 'engie_gems', current: false },
  { key: 'klaimy', current: false },
  { key: 'openclassrooms', current: true },
  { key: 'engie_mastermind', current: false },
  { key: 'lyxor', current: false },
  { key: 'visian', current: false },
] as const;

// Projects with URLs and images
export const PROJECTS = [
  {
    key: 'takemykeys',
    url: 'https://takemykeys.fr',
    color: '#10b981', // emerald
    image: '/images/projects/takemykeys.png',
  },
  {
    key: 'locary',
    url: 'https://locary.fr',
    color: '#3b82f6', // blue
    image: '/images/projects/locary.png',
  },
  {
    key: 'judia',
    url: 'https://judia.pitchop.com',
    color: '#8b5cf6', // violet
    image: '/images/projects/judia.png',
  },
] as const;


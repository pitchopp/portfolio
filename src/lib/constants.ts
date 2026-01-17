// Social Links
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/amine-sghir-29b598101/',
  github: 'https://github.com/pitchopp',
  email: 'sghir.ma@gmail.com',
  phone: '+33 6 95 70 26 00',
} as const;

// CV Link (Canva)
export const CV_URL = 'https://www.canva.com/design/DAGhc-kf0Og/9oCvSqK-lP5TLfhsmhfwVw/view';

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
    id: 'data',
    icon: 'Database',
    color: '#3b82f6', // blue
  },
  {
    id: 'web',
    icon: 'Globe',
    color: '#10b981', // emerald
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    color: '#f59e0b', // amber
  },
  {
    id: 'devops',
    icon: 'GitBranch',
    color: '#8b5cf6', // violet
  },
  {
    id: 'ai',
    icon: 'Brain',
    color: '#ec4899', // pink
  },
] as const;

// Experience items (keys match translation file)
export const EXPERIENCE_ITEMS = [
  { key: 'engie_gems', current: true },
  { key: 'klaimy', current: false },
  { key: 'openclassrooms', current: true },
  { key: 'visian', current: false },
  { key: 'credit_agricole', current: false },
  { key: 'engie_mastermind', current: false },
] as const;

// Projects with URLs
export const PROJECTS = [
  {
    key: 'takemykeys',
    url: 'https://takemykeys.fr',
    color: '#10b981', // emerald
  },
  {
    key: 'locary',
    url: 'https://locary.fr',
    color: '#3b82f6', // blue
  },
  {
    key: 'judia',
    url: 'https://getjudia.com',
    color: '#8b5cf6', // violet
  },
] as const;


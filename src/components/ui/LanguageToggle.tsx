'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

const FrenchFlag = () => (
  <svg className="w-4 h-3 rounded-sm" viewBox="0 0 900 600">
    <rect width="300" height="600" fill="#002654" />
    <rect x="300" width="300" height="600" fill="#FFFFFF" />
    <rect x="600" width="300" height="600" fill="#CE1126" />
  </svg>
);

const UKFlag = () => (
  <svg className="w-4 h-3 rounded-sm" viewBox="0 0 60 30">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="relative flex items-center gap-1 px-2 py-1.5 rounded-full bg-cream-300/5 border border-cream-300/10 hover:border-cognac/30 transition-all duration-300 overflow-hidden cursor-pointer"
      aria-label={`Switch to ${locale === 'fr' ? 'English' : 'French'}`}
    >
      <div className="relative flex items-center gap-1">
        <div
          className={cn(
            'flex items-center gap-1.5 px-2 py-1 rounded-full transition-all duration-300',
            locale === 'fr' ? 'bg-cognac/20' : 'opacity-40'
          )}
        >
          <FrenchFlag />
          <span
            className={cn(
              'text-xs font-semibold transition-colors duration-300',
              locale === 'fr' ? 'text-cream' : 'text-cream-300/70'
            )}
          >
            FR
          </span>
        </div>

        <div
          className={cn(
            'flex items-center gap-1.5 px-2 py-1 rounded-full transition-all duration-300',
            locale === 'en' ? 'bg-cognac/20' : 'opacity-40'
          )}
        >
          <UKFlag />
          <span
            className={cn(
              'text-xs font-semibold transition-colors duration-300',
              locale === 'en' ? 'text-cream' : 'text-cream-300/70'
            )}
          >
            EN
          </span>
        </div>
      </div>
    </button>
  );
}

'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';

    // Remove the current locale from pathname if present
    let newPathname = pathname;
    if (pathname.startsWith('/fr')) {
      newPathname = pathname.replace('/fr', '') || '/';
    } else if (pathname.startsWith('/en')) {
      newPathname = pathname.replace('/en', '') || '/';
    }

    // Add new locale
    if (newLocale !== 'fr') {
      newPathname = `/${newLocale}${newPathname === '/' ? '' : newPathname}`;
    }

    router.push(newPathname);
  };

  return (
    <button
      onClick={toggleLocale}
      className="relative flex items-center gap-1 px-3 py-1.5 rounded-full bg-cream-300/5 border border-cream-300/10 hover:border-cognac/30 transition-all duration-300 overflow-hidden"
      aria-label={`Switch to ${locale === 'fr' ? 'English' : 'French'}`}
    >
      <div className="relative flex items-center gap-2">
        <span
          className={cn(
            'text-xs font-medium transition-colors duration-300',
            locale === 'fr' ? 'text-cream' : 'text-cream-300/50'
          )}
        >
          FR
        </span>

        <div className="relative w-8 h-4 rounded-full bg-midnight-800">
          <motion.div
            className="absolute top-0.5 w-3 h-3 rounded-full bg-cognac"
            animate={{ x: locale === 'fr' ? 2 : 18 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </div>

        <span
          className={cn(
            'text-xs font-medium transition-colors duration-300',
            locale === 'en' ? 'text-cream' : 'text-cream-300/50'
          )}
        >
          EN
        </span>
      </div>
    </button>
  );
}

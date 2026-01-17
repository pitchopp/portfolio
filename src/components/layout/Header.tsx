'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import LanguageToggle from '@/components/ui/LanguageToggle';

export default function Header() {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = NAV_ITEMS.map((item) => item.key);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          isScrolled
            ? 'py-4'
            : 'py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <nav
            className={cn(
              'relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500',
              isScrolled
                ? 'glass-card'
                : 'bg-transparent'
            )}
          >
            {/* Logo */}
            <a
              href="#"
              className="relative z-10 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="font-display text-xl font-bold text-cream-100 group-hover:text-cognac transition-colors duration-300">
                AS
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cognac group-hover:w-full transition-all duration-300" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    'nav-link',
                    activeSection === item.key && 'active'
                  )}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              <LanguageToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative z-10 p-2 text-cream-300 hover:text-cream transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-80 max-w-[calc(100vw-2rem)] glass-card rounded-l-3xl p-8 pt-24"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    className={cn(
                      'py-3 px-4 text-lg font-medium text-cream-300/80 hover:text-cream hover:bg-cognac/10 rounded-xl transition-all duration-300',
                      activeSection === item.key && 'text-cream bg-cognac/10'
                    )}
                  >
                    {t(item.key)}
                  </motion.a>
                ))}
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-cognac/30 to-transparent" />
                <p className="mt-4 text-sm text-cream-300/40 text-center">
                  Amine Sghir © 2024
                </p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

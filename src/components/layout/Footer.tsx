'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: SOCIAL_LINKS.github,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: SOCIAL_LINKS.linkedin,
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: `mailto:${SOCIAL_LINKS.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="relative py-12 border-t border-cream-300/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cognac/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-2xl font-bold gradient-text">
              AS
            </span>
            <p className="text-sm text-cream-300/50">
              © {currentYear} Amine Sghir. {t('rights')}.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group p-3 rounded-xl bg-cream-300/5 hover:bg-cognac/10 border border-cream-300/10 hover:border-cognac/30 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon
                  size={20}
                  className="text-cream-300/60 group-hover:text-cognac transition-colors duration-300"
                />
              </a>
            ))}
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-sm text-cream-300/50">
            <span>{t('builtWith')}</span>
            <Heart size={14} className="text-cognac animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Mail, FileText, MapPin, Sparkles } from 'lucide-react';
import { LOCATION, CV_URL } from '@/lib/constants';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cognac/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cognac/3 rounded-full blur-[100px] animate-float animation-delay-300" />

        {/* Decorative lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cognac/10 border border-cognac/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm text-cream/80">{t('status')}</span>
            </motion.div>

            {/* Name & Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="gradient-text-cream">Amine</span>
              <br />
              <span className="gradient-text">Sghir</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-cream/60 font-light mb-6"
            >
              {t('title')}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-cream/50 max-w-lg mb-8 leading-relaxed"
            >
              {t('tagline')}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex items-center gap-2 text-cream/50 mb-10"
            >
              <MapPin className="w-4 h-4 text-cognac" />
              <span>{LOCATION.city}, {LOCATION.country}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn btn-primary group"
              >
                <Mail className="w-4 h-4" />
                {t('cta.contact')}
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FileText className="w-4 h-4" />
                {t('cta.cv')}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-cognac/20 rounded-full blur-[60px] scale-110" />

              {/* Image container with decorative border */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-full border-2 border-cognac/20 animate-spin-slow"
                  style={{ animationDuration: '20s' }}
                />
                <div className="absolute inset-2 rounded-full border border-cognac/10" />

                {/* Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-midnight-light">
                  <Image
                    src="/images/profile.jpg"
                    alt="Amine Sghir"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-cognac/20 blur-sm" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-cognac/30 blur-sm" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-cream/40 hover:text-cognac transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest">{t('scroll')}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

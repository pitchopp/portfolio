'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { EXPERIENCE_ITEMS, CV_URL } from '@/lib/constants';

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="section-container relative">
        {/* Header */}
        <div className="section-header">
          <AnimatedSection>
            <span className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cognac" />
              {t('badge')}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="section-title">
              <span className="gradient-text-cream">{t('title.line1')}</span>
              <br />
              <span className="gradient-text">{t('title.line2')}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="section-subtitle">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cognac/30 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-8">
            {EXPERIENCE_ITEMS.map((item, index) => (
              <AnimatedSection key={item.key} delay={index * 0.1}>
                <motion.div
                  className="relative pl-8 md:pl-20 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 md:left-8 top-6 w-3 h-3 rounded-full -translate-x-1/2 transition-all ${
                      item.current
                        ? 'bg-cognac shadow-lg shadow-cognac/50'
                        : 'bg-cream/20 group-hover:bg-cognac/50'
                    }`}
                  />

                  {/* Card */}
                  <div className="glass-card-hover p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        {/* Current Badge */}
                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {t('current')}
                          </span>
                        )}

                        {/* Title */}
                        <h3 className="font-display text-xl font-semibold text-cream mb-2">
                          {t(`items.${item.key}.title`)}
                        </h3>

                        {/* Company */}
                        <div className="flex items-center gap-2 text-cognac mb-3">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">
                            {t(`items.${item.key}.company`)}
                          </span>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-cream/50">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{t(`items.${item.key}.period`)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{t(`items.${item.key}.location`)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-cream/60 mb-4 leading-relaxed">
                      {t(`items.${item.key}.description`)}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {(t.raw(`items.${item.key}.tech`) as string[]).map((tech: string) => (
                        <span
                          key={tech}
                          className="badge-outline text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* View Full CV CTA */}
        <AnimatedSection delay={0.5} className="mt-12 text-center">
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary group"
          >
            {t('viewFullCv')}
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Database, Globe, Cloud, Code, Brain, LucideIcon } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SKILL_CATEGORIES } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  Database,
  Globe,
  Cloud,
  Code,
  Brain,
};

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="section-header text-center">
          <AnimatedSection>
            <span className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cognac" />
              {t('badge')}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="section-title mx-auto">
              <span className="gradient-text-cream">{t('title.line1')}</span>
              <br />
              <span className="gradient-text">{t('title.line2')}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="section-subtitle mx-auto text-center">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>

        {/* Skills Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {SKILL_CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon];
            const skills = t.raw(`categories.${category.id}.skills`) as string[];

            return (
              <StaggerItem key={category.id}>
                <motion.div
                  className="glass-card-hover p-6 h-full group"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: `${category.color}15`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6 transition-colors"
                        style={{ color: category.color }}
                      />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-cream">
                      {t(`categories.${category.id}.title`)}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill: string, index: number) => (
                      <motion.span
                        key={skill}
                        className="badge-outline text-xs"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{
                          borderColor: category.color,
                          color: category.color,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Certifications */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="text-center">
            <h3 className="font-display text-xl font-semibold text-cream mb-8">
              {t('certifications.title')}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {(t.raw('certifications.list') as string[]).map((cert: string, index: number) => (
                <motion.div
                  key={cert}
                  className="glass-card px-6 py-3 text-sm text-cream/70"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ borderColor: 'rgba(194, 112, 60, 0.3)' }}
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

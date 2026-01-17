'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FileText, Briefcase, Rocket, Award, Users } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { CV_URL } from '@/lib/constants';

const stats = [
  { key: 'years', icon: Briefcase, value: '8+' },
  { key: 'saas', icon: Rocket, value: '3' },
  { key: 'certifications', icon: Award, value: '4' },
  { key: 'mentored', icon: Users, value: '50+' },
];

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <AnimatedSection>
              <span className="badge mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cognac" />
                {t('badge')}
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="section-title mb-8">
                <span className="gradient-text-cream">{t('title.line1')}</span>
                <br />
                <span className="gradient-text">{t('title.line2')}</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-cream/60 leading-relaxed mb-6">
                {t('description.p1')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-cream/50 leading-relaxed mb-8">
                {t('description.p2')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FileText className="w-4 h-4" />
                {t('downloadCv')}
              </a>
            </AnimatedSection>
          </div>

          {/* Right - Stats Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.key}>
                  <motion.div
                    className="glass-card-hover p-6 text-center group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cognac/10 flex items-center justify-center group-hover:bg-cognac/20 transition-colors">
                      <Icon className="w-6 h-6 text-cognac" />
                    </div>
                    <div className="font-display text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-cream/50">
                      {t(`stats.${stat.key}`)}
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Highlights */}
        <AnimatedSection delay={0.5} className="mt-20">
          <div className="glass-card p-8 lg:p-12">
            <h3 className="font-display text-xl font-semibold text-cream mb-6">
              {t('highlights.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-cognac font-medium mb-2">{t('highlights.data.title')}</h4>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {t('highlights.data.description')}
                </p>
              </div>
              <div>
                <h4 className="text-cognac font-medium mb-2">{t('highlights.fullstack.title')}</h4>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {t('highlights.fullstack.description')}
                </p>
              </div>
              <div>
                <h4 className="text-cognac font-medium mb-2">{t('highlights.saas.title')}</h4>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {t('highlights.saas.description')}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

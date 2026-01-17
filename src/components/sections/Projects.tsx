'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Star, Users, Zap, Globe } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { PROJECTS } from '@/lib/constants';

const highlightIcons: Record<string, typeof Star> = {
  star: Star,
  users: Users,
  zap: Zap,
};

function ProjectPlaceholder({
  title,
  color
}: {
  title: string;
  color: string;
}) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ backgroundColor: `${color}15` }}
    >
      <div className="text-center">
        <div
          className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <Globe className="w-10 h-10" style={{ color }} />
        </div>
        <span className="text-cream/60 text-lg font-medium">{title}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="relative py-24 lg:py-32">
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

        {/* Projects Grid */}
        <StaggerContainer className="space-y-8" staggerDelay={0.15}>
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            const highlights = t.raw(`items.${project.key}.highlights`) as { icon: string; text: string }[];

            return (
              <StaggerItem key={project.key}>
                <motion.div
                  className="glass-card-hover overflow-hidden group"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Image */}
                    <div className={`relative aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden ${isEven ? '' : 'lg:col-start-2'}`}>
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{ backgroundColor: project.color }}
                      />
                      <ProjectPlaceholder
                        title={t(`items.${project.key}.title`)}
                        color={project.color}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent lg:hidden" />
                      <div className={`absolute inset-0 hidden lg:block ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-midnight/80 via-transparent to-transparent`} />
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      {/* Role Badge */}
                      <span
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit"
                        style={{
                          backgroundColor: `${project.color}15`,
                          borderColor: `${project.color}30`,
                          color: project.color,
                          borderWidth: 1,
                        }}
                      >
                        {t(`items.${project.key}.role`)}
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-cream mb-4">
                        {t(`items.${project.key}.title`)}
                      </h3>

                      {/* Description */}
                      <p className="text-cream/60 mb-6 leading-relaxed">
                        {t(`items.${project.key}.description`)}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        {highlights.map((highlight, i) => {
                          const Icon = highlightIcons[highlight.icon] || Star;
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-sm text-cream/70"
                            >
                              <Icon className="w-4 h-4" style={{ color: project.color }} />
                              <span>{highlight.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {(t.raw(`items.${project.key}.tech`) as string[]).map((tech: string) => (
                          <span key={tech} className="badge-outline text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-fit group/btn"
                        style={{
                          backgroundColor: project.color,
                          boxShadow: `0 0 20px ${project.color}40`,
                        }}
                      >
                        {t('visitSite')}
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* More Projects CTA */}
        <AnimatedSection delay={0.5} className="mt-16 text-center">
          <p className="text-cream/50 mb-4">{t('moreProjects')}</p>
          <a
            href="https://github.com/pitchopp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary group"
          >
            {t('viewGithub')}
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

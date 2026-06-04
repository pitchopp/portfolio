'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FileText, Eye, Sparkles, Database } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { getCvUrl, type CvVariant, type CvFormat } from '@/lib/constants';

type VariantConfig = {
  key: CvVariant;
  icon: typeof Sparkles;
};

const VARIANTS: VariantConfig[] = [
  { key: 'a-llm', icon: Sparkles },
  { key: 'b-data', icon: Database },
];

const FORMATS: CvFormat[] = ['2p', '1p'];

type Props = {
  locale: string;
};

export default function CvDownloadGrid({ locale }: Props) {
  const t = useTranslations('cvPage');

  return (
    <StaggerContainer
      className="grid lg:grid-cols-2 gap-8 mt-12"
      staggerDelay={0.1}
    >
      {VARIANTS.map((variant) => {
        const Icon = variant.icon;
        return (
          <StaggerItem key={variant.key}>
            <AnimatedSection>
              <motion.div
                className="glass-card-hover p-8 lg:p-10 h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(193, 116, 70, 0.12)',
                      color: '#C17446',
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-cream">
                      {t(`variants.${variant.key}.title`)}
                    </h2>
                    <p className="text-cream/60 text-sm mt-1">
                      {t(`variants.${variant.key}.subtitle`)}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-cream/70 leading-relaxed mb-6">
                  {t(`variants.${variant.key}.description`)}
                </p>

                {/* Format options */}
                <div className="space-y-3 mt-auto">
                  {FORMATS.map((format) => {
                    const url = getCvUrl(locale, variant.key, format);
                    return (
                      <div
                        key={format}
                        className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl bg-cream/[0.03] border border-cream/10 hover:border-cognac/40 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-cream font-medium">
                              {t(`formats.${format}.label`)}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-xs bg-cognac/10 text-cognac border border-cognac/20">
                              {t(`formats.${format}.badge`)}
                            </span>
                          </div>
                          <p className="text-cream/50 text-xs">
                            {t(`formats.${format}.useCase`)}
                          </p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm text-cream/80 hover:text-cream bg-cream/[0.04] hover:bg-cream/[0.08] border border-cream/10 hover:border-cream/20 transition-colors"
                            aria-label={`${t('cta.preview')} – ${t(`variants.${variant.key}.title`)} (${format})`}
                          >
                            <Eye className="w-4 h-4" />
                            <span className="hidden sm:inline">{t('cta.preview')}</span>
                          </a>
                          <a
                            href={url}
                            download
                            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-cognac/90 hover:bg-cognac text-white transition-colors"
                            aria-label={`${t('cta.download')} – ${t(`variants.${variant.key}.title`)} (${format})`}
                          >
                            <FileText className="w-4 h-4" />
                            <span>{t('cta.download')}</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatedSection>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}

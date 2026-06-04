import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import CvDownloadGrid from '@/components/sections/CvDownloadGrid';
import AnimatedSection from '@/components/ui/AnimatedSection';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cvPage' });
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default async function CvPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'cvPage' });

  return (
    <section className="relative py-24 lg:py-32 min-h-screen">
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="section-container relative">
        <div className="section-header text-center">
          <AnimatedSection>
            <span className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cognac" />
              {t('badge')}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="section-title mx-auto">
              <span className="gradient-text-cream">{t('title.line1')}</span>
              <br />
              <span className="gradient-text">{t('title.line2')}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="section-subtitle mx-auto text-center">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>

        <CvDownloadGrid locale={locale} />
      </div>
    </section>
  );
}

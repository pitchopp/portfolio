'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Briefcase,
  Users,
  Lightbulb,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { SOCIAL_LINKS, LOCATION } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const t = useTranslations('contact');
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const openTo = [
    { key: 'freelance', icon: Briefcase },
    { key: 'collab', icon: Users },
    { key: 'ideas', icon: Lightbulb },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="section-container relative">
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card p-8">
                <h3 className="font-display text-xl font-semibold text-cream mb-6">
                  {t('info.title')}
                </h3>

                <div className="space-y-4">
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="flex items-center gap-4 text-cream/70 hover:text-cognac transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cognac/10 flex items-center justify-center group-hover:bg-cognac/20 transition-colors">
                      <Mail className="w-5 h-5 text-cognac" />
                    </div>
                    <span>{SOCIAL_LINKS.email}</span>
                  </a>

                  <a
                    href={`tel:${SOCIAL_LINKS.phone}`}
                    className="flex items-center gap-4 text-cream/70 hover:text-cognac transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cognac/10 flex items-center justify-center group-hover:bg-cognac/20 transition-colors">
                      <Phone className="w-5 h-5 text-cognac" />
                    </div>
                    <span>{formatPhone(SOCIAL_LINKS.phone)}</span>
                  </a>

                  <div className="flex items-center gap-4 text-cream/70">
                    <div className="w-10 h-10 rounded-xl bg-cognac/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cognac" />
                    </div>
                    <span>{LOCATION.city}, {LOCATION.country}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-8 pt-6 border-t border-cream/10">
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-cream/5 flex items-center justify-center text-cream/50 hover:text-cognac hover:bg-cognac/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-cream/5 flex items-center justify-center text-cream/50 hover:text-cognac hover:bg-cognac/10 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Open To */}
              <div className="glass-card p-8">
                <h3 className="font-display text-xl font-semibold text-cream mb-6">
                  {t('openTo.title')}
                </h3>

                <div className="space-y-3">
                  {openTo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.key}
                        className="flex items-center gap-3 text-cream/70"
                      >
                        <Icon className="w-5 h-5 text-cognac" />
                        <span>{t(`openTo.${item.key}`)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Contact Form */}
          <AnimatedSection delay={0.4}>
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-semibold text-cream mb-6">
                {t('form.title')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-cream/70 mb-2">
                      {t('form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input-field"
                      placeholder={t('form.namePlaceholder')}
                      disabled={formStatus === 'loading'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-cream/70 mb-2">
                      {t('form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-field"
                      placeholder={t('form.emailPlaceholder')}
                      disabled={formStatus === 'loading'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-cream/70 mb-2">
                    {t('form.subject')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="input-field"
                    placeholder={t('form.subjectPlaceholder')}
                    disabled={formStatus === 'loading'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-cream/70 mb-2">
                    {t('form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder={t('form.messagePlaceholder')}
                    disabled={formStatus === 'loading'}
                  />
                </div>

                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>{t('form.success')}</span>
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{errorMessage || t('form.error')}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t('form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t('form.submit')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

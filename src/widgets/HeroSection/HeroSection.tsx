'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/Button';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  const t = useTranslations('hero');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.subtitle}>{t('subtitle')}</p>
          <Button
            size="large"
            variant="accent"
            onClick={scrollToContact}
            className={styles.cta}
          >
            {t('cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};
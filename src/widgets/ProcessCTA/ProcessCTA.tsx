'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/Button';
import styles from './ProcessCTA.module.css';

export const ProcessCTA = () => {
  const t = useTranslations('process.cta');

  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{t('title')}</h2>
            <p className={styles.subtitle}>{t('subtitle')}</p>
          </div>

          <div className={styles.buttons}>
            <Button variant="primary" size="large">
              {t('primaryAction')}
            </Button>
            <Button variant="secondary" size="large">
              {t('secondaryAction')}
            </Button>
          </div>

          <div className={styles.contact}>
            <div className={styles.contactItem}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{t('phone')}</span>
            </div>
            <div className={styles.contactItem}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              <span>{t('email')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
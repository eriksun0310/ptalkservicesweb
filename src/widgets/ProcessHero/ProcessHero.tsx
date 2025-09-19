'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/Button';
import styles from './ProcessHero.module.css';

export const ProcessHero = () => {
  const t = useTranslations('process.hero');

  const stats = [
    { number: '100+', label: t('stats.projects') },
    { number: '98%', label: t('stats.satisfaction') },
    { number: '30+', label: t('stats.clients') },
    { number: '24/7', label: t('stats.support') },
  ];

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            {t('title')}
          </h1>
          <p className={styles.subtitle}>
            {t('subtitle')}
          </p>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <Button variant="primary" size="large">
              {t('startConsultation')}
            </Button>
            <Button variant="secondary" size="large">
              {t('viewProcess')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
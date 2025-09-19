'use client';

import { useTranslations } from 'next-intl';
import styles from './ProcessFeatures.module.css';

export const ProcessFeatures = () => {
  const t = useTranslations('process.features');

  const features = [
    {
      icon: '📊',
      title: t('items.tracking.title'),
      description: t('items.tracking.description'),
      highlights: [
        t('items.tracking.highlights.0'),
        t('items.tracking.highlights.1'),
        t('items.tracking.highlights.2')
      ]
    },
    {
      icon: '💬',
      title: t('items.communication.title'),
      description: t('items.communication.description'),
      highlights: [
        t('items.communication.highlights.0'),
        t('items.communication.highlights.1'),
        t('items.communication.highlights.2')
      ]
    },
    {
      icon: '🔒',
      title: t('items.security.title'),
      description: t('items.security.description'),
      highlights: [
        t('items.security.highlights.0'),
        t('items.security.highlights.1'),
        t('items.security.highlights.2')
      ]
    },
    {
      icon: '⚡',
      title: t('items.agile.title'),
      description: t('items.agile.description'),
      highlights: [
        t('items.agile.highlights.0'),
        t('items.agile.highlights.1'),
        t('items.agile.highlights.2')
      ]
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
              <ul className={styles.highlights}>
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
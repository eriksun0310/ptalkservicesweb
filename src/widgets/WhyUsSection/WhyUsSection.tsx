'use client';

import { useTranslations } from 'next-intl';
import styles from './WhyUsSection.module.css';

const reasons = [
  {
    id: 'reason1',
    icon: '👨‍💻',
  },
  {
    id: 'reason2',
    icon: '🎯',
  },
  {
    id: 'reason3',
    icon: '🛠️',
  },
];

export const WhyUsSection = () => {
  const t = useTranslations('whyUs');

  return (
    <section id="why-us" className="section" style={{ background: 'var(--gray-light)' }}>
      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={reason.id} className={styles.card}>
              <div className={styles.number}>{`0${index + 1}`}</div>
              <div className={styles.icon}>{reason.icon}</div>
              <h3 className={styles.cardTitle}>{t(`${reason.id}.title`)}</h3>
              <p className={styles.description}>{t(`${reason.id}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
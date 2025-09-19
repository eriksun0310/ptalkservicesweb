'use client';

import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserTie,
  faBullseye,
  faTools
} from '@fortawesome/free-solid-svg-icons';
import styles from './WhyUsSection.module.css';

const reasons = [
  {
    id: 'reason1',
    icon: faUserTie,  // 專業技術團隊
  },
  {
    id: 'reason2',
    icon: faBullseye,  // 客製化解決方案
  },
  {
    id: 'reason3',
    icon: faTools,  // 完整售後服務
  },
];

export const WhyUsSection = () => {
  const t = useTranslations('whyUs');

  return (
    <section id="why-us" className={styles.section}>
      {/* 動態背景裝飾 */}
      <div className={styles.backgroundDecorations}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={reason.id} className={styles.card}>
              <div className={styles.glow} />
              <div className={styles.number}>{`0${index + 1}`}</div>
              <div className={styles.icon}>
                <div className={styles.iconGlow} />
                <FontAwesomeIcon icon={reason.icon} size="2x" />
              </div>
              <h3 className={styles.cardTitle}>{t(`${reason.id}.title`)}</h3>
              <p className={styles.description}>{t(`${reason.id}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
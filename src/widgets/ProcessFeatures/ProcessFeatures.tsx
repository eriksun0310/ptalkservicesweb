'use client';

import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faComments,
  faLock,
  faBolt,
  faCheck,
  faCube,
  faGem
} from '@fortawesome/free-solid-svg-icons';
import styles from './ProcessFeatures.module.css';

export const ProcessFeatures = () => {
  const t = useTranslations('process.features');

  const features = [
    {
      icon: faChartBar,
      title: t('items.tracking.title'),
      description: t('items.tracking.description'),
      highlights: [
        t('items.tracking.highlights.0'),
        t('items.tracking.highlights.1'),
        t('items.tracking.highlights.2')
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: faComments,
      title: t('items.communication.title'),
      description: t('items.communication.description'),
      highlights: [
        t('items.communication.highlights.0'),
        t('items.communication.highlights.1'),
        t('items.communication.highlights.2')
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: faLock,
      title: t('items.security.title'),
      description: t('items.security.description'),
      highlights: [
        t('items.security.highlights.0'),
        t('items.security.highlights.1'),
        t('items.security.highlights.2')
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: faBolt,
      title: t('items.agile.title'),
      description: t('items.agile.description'),
      highlights: [
        t('items.agile.highlights.0'),
        t('items.agile.highlights.1'),
        t('items.agile.highlights.2')
      ],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <section className={styles.features}>
      {/* 背景效果層 */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientBg} />
        <div className={styles.gridPattern} />
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      {/* 漂浮裝飾元素 */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingCard1}>
          <FontAwesomeIcon icon={faCube} />
        </div>
        <div className={styles.floatingCard2}>
          <FontAwesomeIcon icon={faGem} />
        </div>
      </div>

      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>Our Features</div>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardGlow} />
              <div className={styles.cardInner}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconGlow} style={{ background: feature.gradient }} />
                  <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
                <ul className={styles.highlights}>
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
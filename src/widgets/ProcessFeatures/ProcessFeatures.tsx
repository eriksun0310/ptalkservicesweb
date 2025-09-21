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
import { Carousel } from '@/shared/ui/Carousel';
import styles from './ProcessFeatures.module.css';

export const ProcessFeatures = () => {
  const t = useTranslations('流程頁面.流程特色');

  const features = [
    {
      icon: faChartBar,
      title: t('特色項目.專案追蹤.即時專案追蹤'),
      description: t('特色項目.專案追蹤.追蹤描述'),
      highlights: [
        t('特色項目.專案追蹤.追蹤亮點.0'),
        t('特色項目.專案追蹤.追蹤亮點.1'),
        t('特色項目.專案追蹤.追蹤亮點.2')
      ]
    },
    {
      icon: faComments,
      title: t('特色項目.溝通機制.透明溝通機制'),
      description: t('特色項目.溝通機制.溝通描述'),
      highlights: [
        t('特色項目.溝通機制.溝通亮點.0'),
        t('特色項目.溝通機制.溝通亮點.1'),
        t('特色項目.溝通機制.溝通亮點.2')
      ]
    },
    {
      icon: faLock,
      title: t('特色項目.安全保障.安全保障標題'),
      description: t('特色項目.安全保障.安全描述'),
      highlights: [
        t('特色項目.安全保障.安全亮點.0'),
        t('特色項目.安全保障.安全亮點.1'),
        t('特色項目.安全保障.安全亮點.2')
      ]
    },
    {
      icon: faBolt,
      title: t('特色項目.敏捷開發.敏捷開發標題'),
      description: t('特色項目.敏捷開發.敏捷描述'),
      highlights: [
        t('特色項目.敏捷開發.敏捷亮點.0'),
        t('特色項目.敏捷開發.敏捷亮點.1'),
        t('特色項目.敏捷開發.敏捷亮點.2')
      ]
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
          <h2 className={styles.title}>{t('合作特色標題')}</h2>
          <p className={styles.subtitle}>{t('合作特色副標題')}</p>
        </div>

        <div className={styles.carouselWrapper}>
          <Carousel
            itemsPerView={3}
            autoPlay={true}
            autoPlayInterval={6000}
            showDots={true}
            showArrows={true}
            gap={35}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={styles.card}
              >
                <div className={styles.cardGlow} />
                <div className={styles.cardInner}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconGlow} />
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
          </Carousel>
        </div>
      </div>
    </section>
  );
};
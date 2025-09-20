'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faRocket,
  faPalette,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  const t = useTranslations('hero');
  const router = useRouter();

  const scrollToContact = () => {
    router.push('/contact');
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: faCode, label: t('features.tech') },
    { icon: faRocket, label: t('features.delivery') },
    { icon: faPalette, label: t('features.design') },
    { icon: faShieldAlt, label: t('features.security') },
  ];

  return (
    <section className={styles.hero}>
      {/* 背景裝飾 */}
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.gridPattern} />
      </div>

      {/* 漂浮玻璃元素 */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingCard1}>
          <FontAwesomeIcon icon={faCode} />
        </div>
        <div className={styles.floatingCard2}>
          <FontAwesomeIcon icon={faRocket} />
        </div>
        <div className={styles.floatingCard3}>
          <FontAwesomeIcon icon={faPalette} />
        </div>
      </div>

      <div className="container">
        <div className={styles.contentWrapper}>
          {/* 主內容玻璃容器 */}
          <div className={styles.mainContent}>
            <div className={styles.badge}>{t('badge')}</div>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.subtitle}>{t('subtitle')}</p>

            {/* 特色指標 */}
            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <FontAwesomeIcon icon={feature.icon} />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>

            {/* CTA 按鈕 */}
            <div className={styles.ctaButtons}>
              <Button
                size="large"
                variant="accent"
                onClick={scrollToContact}
                className={styles.primaryCta}
              >
                {t('cta')}
              </Button>
              <Button
                size="large"
                variant="secondary"
                onClick={scrollToServices}
                className={styles.secondaryCta}
              >
                {t('browseServices')}
              </Button>
            </div>
          </div>

          {/* 右側玻璃卡片 */}
          <div className={styles.sideCards}>
            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>500+</div>
              <div className={styles.statsLabel}>{t('stats.projects')}</div>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>98%</div>
              <div className={styles.statsLabel}>{t('stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
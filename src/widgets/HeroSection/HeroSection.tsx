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
  const t = useTranslations('首頁主視覺');
  const router = useRouter();

  const scrollToContact = () => {
    router.push('/contact');
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: faCode, label: t('特色功能.前沿技術') },
    { icon: faRocket, label: t('特色功能.快速交付') },
    { icon: faPalette, label: t('特色功能.精美設計') },
    { icon: faShieldAlt, label: t('特色功能.安全可靠') },
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
            <div className={styles.badge}>{t('專業團隊徽章')}</div>
            <h1 className={styles.title}>{t('主標題')}</h1>
            <p className={styles.subtitle}>{t('副標題')}</p>

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
                {t('立即諮詢')}
              </Button>
              <Button
                size="large"
                variant="secondary"
                onClick={scrollToServices}
                className={styles.secondaryCta}
              >
                {t('瀏覽服務')}
              </Button>
            </div>
          </div>

          {/* 右側玻璃卡片 */}
          <div className={styles.sideCards}>
            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>500+</div>
              <div className={styles.statsLabel}>{t('統計數據.完成專案')}</div>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>98%</div>
              <div className={styles.statsLabel}>{t('統計數據.客戶滿意度')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
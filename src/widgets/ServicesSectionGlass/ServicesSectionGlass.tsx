'use client';

import { useTranslations } from 'next-intl';
import { ServiceCardGlass } from '@/shared/ui/ServiceCardGlass';
import { Carousel } from '@/shared/ui/Carousel';
import {
  faMobileAlt,
  faPalette,
  faGlobe,
  faServer,
  faRobot,
  faChartLine,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import styles from './ServicesSectionGlass.module.css';

const services = [
  {
    id: 'app',
    icon: faMobileAlt,
  },
  {
    id: 'web',
    icon: faPalette,
  },
  {
    id: 'website',
    icon: faGlobe,
  },
  {
    id: 'hosting',
    icon: faServer,
  },
  {
    id: 'ai',
    icon: faRobot,
  },
  {
    id: 'seo',
    icon: faChartLine,
  },
  {
    id: 'teaching',
    icon: faGraduationCap,
  },
];

export const ServicesSectionGlass = () => {
  const t = useTranslations('services');

  return (
    <section id="services-glass" className={styles.section}>
      {/* 動態背景裝飾 */}
      <div className={styles.backgroundDecorations}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.orb4} />
        <div className={styles.orb5} />
      </div>

      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>{t('title')}</span>
            <span className={styles.titleSub}>Glassmorphism 風格版本</span>
          </h2>
        </div>

        <div className={styles.carouselWrapper}>
          <Carousel
            itemsPerView={3}
            autoPlay={true}
            autoPlayInterval={5000}
            showDots={true}
            showArrows={true}
            gap={30}
          >
            {services.map((service) => (
              <ServiceCardGlass
                key={service.id}
                icon={service.icon}
                title={t(`${service.id}.title`)}
                description={t(`${service.id}.description`)}
              />
            ))}
          </Carousel>
        </div>

        {/* 對比區：原版服務卡片（單個展示） */}
        <div className={styles.comparison}>
          <h3 className={styles.comparisonTitle}>對比：原版設計 vs 玻璃擬態</h3>
          <div className={styles.comparisonGrid}>
            <div className={styles.originalCard}>
              <div className={styles.cardLabel}>原版設計</div>
              <div className={styles.demoCard}>
                <div className={styles.demoIcon}>📱</div>
                <h4>APP規劃設計</h4>
                <p>從概念到上架，完整APP開發服務</p>
              </div>
            </div>
            <div className={styles.glassCard}>
              <div className={styles.cardLabel}>玻璃擬態</div>
              <ServiceCardGlass
                icon={faMobileAlt}
                title="APP規劃設計"
                description="從概念到上架，完整APP開發服務"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
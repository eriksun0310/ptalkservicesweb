'use client';

import { useTranslations } from 'next-intl';
import { ServiceCard } from '@/shared/ui/ServiceCard';
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
import styles from './ServicesSection.module.css';

// 輔助函數用於映射服務 ID 到中文翻譯 key
const getServiceTitle = (serviceId: string, t: any) => {
  const titleMap: Record<string, string> = {
    'app': 'APP服務.APP規劃設計',
    'web': '網頁設計服務.網頁設計',
    'website': '網站架設服務.網站架設',
    'hosting': '主機租賃服務.網站主機租賃',
    'ai': 'AI串接服務.AI串接',
    'seo': 'SEO優化服務.SEO優化',
    'teaching': '教學服務.AI科技演講教學'
  };
  return t(titleMap[serviceId] || serviceId);
};

const getServiceDescription = (serviceId: string, t: any) => {
  const descMap: Record<string, string> = {
    'app': 'APP服務.APP服務描述',
    'web': '網頁設計服務.網頁設計描述',
    'website': '網站架設服務.網站架設描述',
    'hosting': '主機租賃服務.主機租賃描述',
    'ai': 'AI串接服務.AI串接描述',
    'seo': 'SEO優化服務.SEO優化描述',
    'teaching': '教學服務.教學服務描述'
  };
  return t(descMap[serviceId] || serviceId);
};

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

export const ServicesSection = () => {
  const t = useTranslations('服務項目');

  return (
    <section id="services" className={styles.section}>
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
            {t('服務標題')}
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
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={getServiceTitle(service.id, t)}
                description={getServiceDescription(service.id, t)}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
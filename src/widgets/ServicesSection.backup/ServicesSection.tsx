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
    <section id="services" className="section">
      <div className="container">
        <h2 className={styles.title}>{t('服務標題')}</h2>
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
                title={t(`${service.id}.title`)}
                description={t(`${service.id}.description`)}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
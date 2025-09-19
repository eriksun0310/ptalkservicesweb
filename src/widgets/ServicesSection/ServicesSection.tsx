'use client';

import { useTranslations } from 'next-intl';
import { ServiceCard } from '@/shared/ui/ServiceCard';
import styles from './ServicesSection.module.css';

const services = [
  {
    id: 'app',
    icon: '📱',
  },
  {
    id: 'web',
    icon: '🎨',
  },
  {
    id: 'website',
    icon: '🌐',
  },
  {
    id: 'hosting',
    icon: '🖥️',
  },
  {
    id: 'ai',
    icon: '🤖',
  },
  {
    id: 'seo',
    icon: '📈',
  },
  {
    id: 'teaching',
    icon: '🎓',
  },
];

export const ServicesSection = () => {
  const t = useTranslations('services');

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={t(`${service.id}.title`)}
              description={t(`${service.id}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
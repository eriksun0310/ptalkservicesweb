'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faProjectDiagram,
  faChartLine,
  faUsers,
  faHeadset,
  faArrowRight,
  faRocket,
  faCogs
} from '@fortawesome/free-solid-svg-icons';
import styles from './ProcessHero.module.css';

export const ProcessHero = () => {
  const t = useTranslations('process.hero');
  const router = useRouter();

  const handleConsultationClick = () => {
    router.push('/contact');
  };

  const handleViewProcessClick = () => {
    const processSection = document.getElementById('process-timeline');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      number: '100+',
      label: t('stats.projects'),
      icon: faProjectDiagram
    },
    {
      number: '98%',
      label: t('stats.satisfaction'),
      icon: faChartLine
    },
    {
      number: '30+',
      label: t('stats.clients'),
      icon: faUsers
    },
    {
      number: '24/7',
      label: t('stats.support'),
      icon: faHeadset
    },
  ];

  return (
    <section className={styles.hero}>
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
          <FontAwesomeIcon icon={faCogs} />
        </div>
        <div className={styles.floatingCard2}>
          <FontAwesomeIcon icon={faRocket} />
        </div>
      </div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.badge}>Our Process</div>
          <h1 className={styles.title}>
            {t('title')}
          </h1>
          <p className={styles.subtitle}>
            {t('subtitle')}
          </p>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.statIcon}>
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statGlow} />
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <button className={styles.primaryBtn} onClick={handleConsultationClick}>
              <span>{t('startConsultation')}</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className={styles.secondaryBtn} onClick={handleViewProcessClick}>
              <span>{t('viewProcess')}</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
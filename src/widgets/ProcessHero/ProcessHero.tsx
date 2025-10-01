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
  const t = useTranslations('流程頁面.流程主視覺');
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

  const commitments = [
    {
      icon: faProjectDiagram,
      label: t('服務承諾.準時交付')
    },
    {
      icon: faChartLine,
      label: t('服務承諾.品質保證')
    },
    {
      icon: faUsers,
      label: t('服務承諾.專業團隊')
    },
    {
      icon: faHeadset,
      label: t('服務承諾.全天候支援')
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
            {t('透明化合作流程')}
          </h1>
          <p className={styles.subtitle}>
            {t('流程副標題')}
          </p>

          <div className={styles.commitments}>
            {commitments.map((commitment, index) => (
              <div key={index} className={styles.commitmentItem} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.commitmentIcon}>
                  <FontAwesomeIcon icon={commitment.icon} />
                </div>
                <div className={styles.commitmentLabel}>{commitment.label}</div>
                <div className={styles.commitmentGlow} />
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <button className={styles.primaryBtn} onClick={handleConsultationClick}>
              <span>{t('開始諮詢')}</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className={styles.secondaryBtn} onClick={handleViewProcessClick}>
              <span>{t('查看流程')}</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
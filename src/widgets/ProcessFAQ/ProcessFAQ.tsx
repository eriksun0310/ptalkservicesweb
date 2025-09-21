'use client';

import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCube, faGem } from '@fortawesome/free-solid-svg-icons';
import { Accordion } from '@/shared/ui/Accordion';
import styles from './ProcessFAQ.module.css';

export const ProcessFAQ = () => {
  const t = useTranslations('流程頁面.常見問題');

  const faqItems = [
    {
      question: t('問題項目.0.question'),
      answer: t('問題項目.0.answer')
    },
    {
      question: t('問題項目.1.question'),
      answer: t('問題項目.1.answer')
    },
    {
      question: t('問題項目.2.question'),
      answer: t('問題項目.2.answer')
    },
    {
      question: t('問題項目.3.question'),
      answer: t('問題項目.3.answer')
    },
    {
      question: t('問題項目.4.question'),
      answer: t('問題項目.4.answer')
    },
    {
      question: t('問題項目.5.question'),
      answer: t('問題項目.5.answer')
    }
  ];

  return (
    <section className={styles.faq}>
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
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.badge}>
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span>FAQ</span>
            </div>
            <h2 className={styles.title}>{t('常見問題標題')}</h2>
            <p className={styles.subtitle}>{t('常見問題副標題')}</p>
          </div>

          <div className={styles.accordionWrapper}>
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
};
'use client';

import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faClipboardList,
  faFileSignature,
  faCode,
  faVial,
  faRocket,
  faStar,
  faCube
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ProcessStep, ProcessStepData } from '@/features/process-cards';
import styles from './ProcessTimeline.module.css';

export const ProcessTimeline = () => {
  const t = useTranslations('流程頁面.流程時間線');

  const processSteps: ProcessStepData[] = [
    {
      id: 'consultation',
      number: '01',
      title: t('流程步驟.需求諮詢.需求諮詢標題'),
      duration: t('流程步驟.需求諮詢.諮詢時長'),
      icon: faComments,
      description: t('流程步驟.需求諮詢.諮詢描述'),
      details: [
        t('流程步驟.需求諮詢.諮詢細節.0'),
        t('流程步驟.需求諮詢.諮詢細節.1'),
        t('流程步驟.需求諮詢.諮詢細節.2'),
        t('流程步驟.需求諮詢.諮詢細節.3')
      ],
      deliverables: t('流程步驟.需求諮詢.諮詢交付物')
    },
    {
      id: 'proposal',
      number: '02',
      title: t('流程步驟.提案報價.提案報價標題'),
      duration: t('流程步驟.提案報價.提案時長'),
      icon: faClipboardList,
      description: t('流程步驟.提案報價.提案描述'),
      details: [
        t('流程步驟.提案報價.提案細節.0'),
        t('流程步驟.提案報價.提案細節.1'),
        t('流程步驟.提案報價.提案細節.2'),
        t('流程步驟.提案報價.提案細節.3')
      ],
      deliverables: t('流程步驟.提案報價.提案交付物')
    },
    {
      id: 'contract',
      number: '03',
      title: t('流程步驟.合約簽訂.合約簽訂標題'),
      duration: t('流程步驟.合約簽訂.簽約時長'),
      icon: faFileSignature,
      description: t('流程步驟.合約簽訂.簽約描述'),
      details: [
        t('流程步驟.合約簽訂.簽約細節.0'),
        t('流程步驟.合約簽訂.簽約細節.1'),
        t('流程步驟.合約簽訂.簽約細節.2'),
        t('流程步驟.合約簽訂.簽約細節.3')
      ],
      deliverables: t('流程步驟.合約簽訂.簽約交付物')
    },
    {
      id: 'development',
      number: '04',
      title: t('流程步驟.開發實作.開發實作標題'),
      duration: t('流程步驟.開發實作.開發時長'),
      icon: faCode,
      description: t('流程步驟.開發實作.開發描述'),
      details: [
        t('流程步驟.開發實作.開發細節.0'),
        t('流程步驟.開發實作.開發細節.1'),
        t('流程步驟.開發實作.開發細節.2'),
        t('流程步驟.開發實作.開發細節.3')
      ],
      deliverables: t('流程步驟.開發實作.開發交付物')
    },
    {
      id: 'testing',
      number: '05',
      title: t('流程步驟.測試驗收.測試驗收標題'),
      duration: t('流程步驟.測試驗收.測試時長'),
      icon: faVial,
      description: t('流程步驟.測試驗收.測試描述'),
      details: [
        t('流程步驟.測試驗收.測試細節.0'),
        t('流程步驟.測試驗收.測試細節.1'),
        t('流程步驟.測試驗收.測試細節.2'),
        t('流程步驟.測試驗收.測試細節.3')
      ],
      deliverables: t('流程步驟.測試驗收.測試交付物')
    },
    {
      id: 'launch',
      number: '06',
      title: t('流程步驟.上線維護.上線維護標題'),
      duration: t('流程步驟.上線維護.維護時長'),
      icon: faRocket,
      description: t('流程步驟.上線維護.上線描述'),
      details: [
        t('流程步驟.上線維護.上線細節.0'),
        t('流程步驟.上線維護.上線細節.1'),
        t('流程步驟.上線維護.上線細節.2'),
        t('流程步驟.上線維護.上線細節.3')
      ],
      deliverables: t('流程步驟.上線維護.上線交付物')
    }
  ];

  return (
    <section id="process-timeline" className={styles.timeline}>
      {/* 背景效果層 */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientBg} />
        <div className={styles.gridPattern} />
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>

      {/* 漂浮裝飾元素 */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingCard1}>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={styles.floatingCard2}>
          <FontAwesomeIcon icon={faCube} />
        </div>
      </div>

      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>Process Timeline</div>
          <h2 className={styles.title}>{t('六步驟完成專案')}</h2>
          <p className={styles.subtitle}>{t('敏捷開發方法')}</p>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine} />
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.timelineContent}>
                <ProcessStep step={step} index={index} />
              </div>
              <div className={styles.timelineNode} />
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <p>{t('流程備註')}</p>
        </div>
      </div>
    </section>
  );
};
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
  const t = useTranslations('process.timeline');

  const processSteps: ProcessStepData[] = [
    {
      id: 'consultation',
      number: '01',
      title: t('steps.consultation.title'),
      duration: t('steps.consultation.duration'),
      icon: faComments,
      description: t('steps.consultation.description'),
      details: [
        t('steps.consultation.details.0'),
        t('steps.consultation.details.1'),
        t('steps.consultation.details.2'),
        t('steps.consultation.details.3')
      ],
      deliverables: t('steps.consultation.deliverables'),
      color: '#3B82F6'
    },
    {
      id: 'proposal',
      number: '02',
      title: t('steps.proposal.title'),
      duration: t('steps.proposal.duration'),
      icon: faClipboardList,
      description: t('steps.proposal.description'),
      details: [
        t('steps.proposal.details.0'),
        t('steps.proposal.details.1'),
        t('steps.proposal.details.2'),
        t('steps.proposal.details.3')
      ],
      deliverables: t('steps.proposal.deliverables'),
      color: '#8B5CF6'
    },
    {
      id: 'contract',
      number: '03',
      title: t('steps.contract.title'),
      duration: t('steps.contract.duration'),
      icon: faFileSignature,
      description: t('steps.contract.description'),
      details: [
        t('steps.contract.details.0'),
        t('steps.contract.details.1'),
        t('steps.contract.details.2'),
        t('steps.contract.details.3')
      ],
      deliverables: t('steps.contract.deliverables'),
      color: '#EC4899'
    },
    {
      id: 'development',
      number: '04',
      title: t('steps.development.title'),
      duration: t('steps.development.duration'),
      icon: faCode,
      description: t('steps.development.description'),
      details: [
        t('steps.development.details.0'),
        t('steps.development.details.1'),
        t('steps.development.details.2'),
        t('steps.development.details.3')
      ],
      deliverables: t('steps.development.deliverables'),
      color: '#F59E0B'
    },
    {
      id: 'testing',
      number: '05',
      title: t('steps.testing.title'),
      duration: t('steps.testing.duration'),
      icon: faVial,
      description: t('steps.testing.description'),
      details: [
        t('steps.testing.details.0'),
        t('steps.testing.details.1'),
        t('steps.testing.details.2'),
        t('steps.testing.details.3')
      ],
      deliverables: t('steps.testing.deliverables'),
      color: '#10B981'
    },
    {
      id: 'launch',
      number: '06',
      title: t('steps.launch.title'),
      duration: t('steps.launch.duration'),
      icon: faRocket,
      description: t('steps.launch.description'),
      details: [
        t('steps.launch.details.0'),
        t('steps.launch.details.1'),
        t('steps.launch.details.2'),
        t('steps.launch.details.3')
      ],
      deliverables: t('steps.launch.deliverables'),
      color: '#EF4444'
    }
  ];

  return (
    <section className={styles.timeline}>
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
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
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
          <p>{t('note')}</p>
        </div>
      </div>
    </section>
  );
};
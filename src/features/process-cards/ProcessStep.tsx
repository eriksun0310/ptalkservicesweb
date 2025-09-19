'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FlipCard } from '@/shared/ui/FlipCard';
import styles from './ProcessStep.module.css';

export interface ProcessStepData {
  id: string;
  number: string;
  title: string;
  duration: string;
  icon: IconDefinition;
  description: string;
  details: string[];
  deliverables: string;
}

interface ProcessStepProps {
  step: ProcessStepData;
  index: number;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ step, index }) => {
  const frontContent = (
    <div className={styles.front}>
      <div className={styles.frontGlow} />
      <div className={styles.number}>
        {step.number}
      </div>
      <div className={styles.iconWrapper}>
        <div className={styles.iconGlow} />
        <div className={styles.icon}>
          <FontAwesomeIcon icon={step.icon} />
        </div>
      </div>
      <h3 className={styles.title}>{step.title}</h3>
      <p className={styles.duration}>{step.duration}</p>
      <p className={styles.description}>{step.description}</p>
      <div className={styles.flipHint}>
        <span>滑鼠移入查看詳情</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );

  const backContent = (
    <div className={styles.back}>
      <div className={styles.backGlow} />
      <div className={styles.backHeader}>
        <h3 className={styles.backTitle}>{step.title}</h3>
        <div className={styles.backNumber}>{step.number}</div>
      </div>

      <div className={styles.details}>
        <h4>執行內容：</h4>
        <ul>
          {step.details.map((detail, idx) => (
            <li key={idx}>
              <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.deliverable}>
        <h4>交付成果：</h4>
        <p>{step.deliverables}</p>
      </div>

      <div className={styles.flipBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>返回</span>
      </div>
    </div>
  );

  return (
    <div className={styles.stepContainer} style={{ animationDelay: `${index * 0.1}s` }}>
      <FlipCard
        front={frontContent}
        back={backContent}
        className={styles.card}
        triggerMode="hover"
      />
    </div>
  );
};
'use client';

import { FlipCard } from '@/shared/ui/FlipCard';
import styles from './ProcessStep.module.css';

export interface ProcessStepData {
  id: string;
  number: string;
  title: string;
  duration: string;
  icon: string;
  description: string;
  details: string[];
  deliverables: string;
  color: string;
}

interface ProcessStepProps {
  step: ProcessStepData;
  index: number;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ step, index }) => {
  const frontContent = (
    <div className={styles.front} style={{ background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)` }}>
      <div className={styles.number} style={{ color: step.color }}>
        {step.number}
      </div>
      <div className={styles.icon}>{step.icon}</div>
      <h3 className={styles.title}>{step.title}</h3>
      <p className={styles.duration}>{step.duration}</p>
      <p className={styles.description}>{step.description}</p>
      <div className={styles.flipHint}>
        <span>點擊查看詳情</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  const backContent = (
    <div className={styles.back} style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}>
      <div className={styles.backHeader}>
        <h3 className={styles.backTitle}>{step.title}</h3>
        <div className={styles.backNumber}>{step.number}</div>
      </div>

      <div className={styles.details}>
        <h4>執行內容：</h4>
        <ul>
          {step.details.map((detail, idx) => (
            <li key={idx}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="5" cy="12" r="2" />
              </svg>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.deliverable}>
        <h4>交付成果：</h4>
        <p>{step.deliverables}</p>
      </div>

      <div className={styles.flipBack}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 19l-7-7 7-7" />
        </svg>
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
      />
    </div>
  );
};
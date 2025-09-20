'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
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
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className={`${styles.stepContainer} ${isFlipped ? styles.flipped : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardInner}>
        {/* 正面內容 */}
        <div className={styles.cardFront}>
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
            <div className={styles.frontDeliverable}>
              <h4>交付成果</h4>
              <p>{step.deliverables}</p>
            </div>
          </div>
        </div>

        {/* 背面內容 */}
        <div className={styles.cardBack}>
          <div className={styles.back}>
            <div className={styles.backGlow} />
            <div className={styles.backHeader}>
              <h3 className={styles.backTitle}>{step.title}</h3>
              <div className={styles.backNumber}>{step.number}</div>
            </div>

            <div className={styles.details}>
              <h4>執行內容</h4>
              <ul>
                {step.details.map((detail, idx) => (
                  <li key={idx}>
                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
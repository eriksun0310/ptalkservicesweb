'use client';

import { useState, ReactNode } from 'react';
import styles from './FlipCard.module.css';

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  flipped?: boolean;
  onFlip?: () => void;
  triggerMode?: 'click' | 'hover';
}

export const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  className = '',
  flipped = false,
  onFlip,
  triggerMode = 'click'
}) => {
  const [isFlipped, setIsFlipped] = useState(flipped);

  const handleClick = () => {
    if (triggerMode === 'click') {
      setIsFlipped(!isFlipped);
      onFlip?.();
    }
  };

  const handleMouseEnter = () => {
    if (triggerMode === 'hover') {
      setIsFlipped(true);
      onFlip?.();
    }
  };

  const handleMouseLeave = () => {
    if (triggerMode === 'hover') {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className={`${styles.container} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
        onClick={handleClick}
      >
        <div className={styles.cardFront}>
          {front}
        </div>
        <div className={styles.cardBack}>
          {back}
        </div>
      </div>
    </div>
  );
};
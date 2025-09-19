'use client';

import { useState, ReactNode } from 'react';
import styles from './FlipCard.module.css';

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  flipped?: boolean;
  onFlip?: () => void;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  className = '',
  flipped = false,
  onFlip
}) => {
  const [isFlipped, setIsFlipped] = useState(flipped);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    onFlip?.();
  };

  return (
    <div className={`${styles.container} ${className}`}>
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
'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: ReactNode[];
  itemsPerView?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  gap?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsPerView = 3,
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  gap = 30,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  const totalItems = React.Children.count(children);
  const maxIndex = Math.max(0, totalItems - itemsToShow);

  // 響應式調整每次顯示的項目數
  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setItemsToShow(1);
      } else if (width <= 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(itemsPerView);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, [itemsPerView]);

  // 自動播放
  useEffect(() => {
    if (autoPlay && !isDragging) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, autoPlay, autoPlayInterval, isDragging, maxIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    const targetIndex = index * itemsToShow;
    setCurrentIndex(Math.min(targetIndex, maxIndex));
  };

  // 觸控和滑鼠拖曳處理
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setTranslateX(0);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    if (translateX > threshold) {
      handlePrevious();
    } else if (translateX < -threshold) {
      handleNext();
    }
    setTranslateX(0);
  };

  const dotsCount = Math.ceil(totalItems / itemsToShow);
  const currentDot = Math.floor(currentIndex / itemsToShow);

  return (
    <div className={styles.carousel}>
      {showArrows && (
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          aria-label="上一個"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      <div
        className={styles.carouselContainer}
        ref={carouselRef}
      >
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * gap}px + ${translateX}px))`,
            gap: `${gap}px`,
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={styles.carouselItem}
              style={{
                flex: `0 0 calc(${100 / itemsToShow}% - ${gap * (itemsToShow - 1) / itemsToShow}px)`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          aria-label="下一個"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {showDots && dotsCount > 1 && (
        <div className={styles.dots}>
          {Array.from({ length: dotsCount }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentDot === index ? styles.dotActive : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`前往第 ${index + 1} 組`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
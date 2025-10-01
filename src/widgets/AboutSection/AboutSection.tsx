'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faMedal,
  faHandshake,
  faShieldAlt,
  faTrophy,
  faRocket,
  faCode,
  faPalette,
  faTasks,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
  const t = useTranslations('關於頁面');
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const coreValues = [
    {
      icon: faLightbulb,
      title: t('核心價值.創新.創新標題'),
      description: t('核心價值.創新.創新描述')
    },
    {
      icon: faMedal,
      title: t('核心價值.品質.品質標題'),
      description: t('核心價值.品質.品質描述')
    },
    {
      icon: faHandshake,
      title: t('核心價值.服務.服務標題'),
      description: t('核心價值.服務.服務描述')
    },
    {
      icon: faShieldAlt,
      title: t('核心價值.誠信.誠信標題'),
      description: t('核心價值.誠信.誠信描述')
    }
  ];

  const visionItems = [
    {
      icon: faRocket,
      title: t('服務願景.願景項目.技術創新.技術創新標題'),
      description: t('服務願景.願景項目.技術創新.技術創新描述')
    },
    {
      icon: faTrophy,
      title: t('服務願景.願景項目.客戶成功.客戶成功標題'),
      description: t('服務願景.願景項目.客戶成功.客戶成功描述')
    },
    {
      icon: faMedal,
      title: t('服務願景.願景項目.品質承諾.品質承諾標題'),
      description: t('服務願景.願景項目.品質承諾.品質承諾描述')
    },
    {
      icon: faHandshake,
      title: t('服務願景.願景項目.長期夥伴.長期夥伴標題'),
      description: t('服務願景.願景項目.長期夥伴.長期夥伴描述')
    }
  ];

  const capabilities = [
    {
      icon: faCode,
      title: t('技術能力.全端開發.全端開發標題'),
      description: t('技術能力.全端開發.全端開發描述'),
      details: t('技術能力.全端開發.全端開發詳情')
    },
    {
      icon: faPalette,
      title: t('技術能力.UI/UX設計.設計能力標題'),
      description: t('技術能力.UI/UX設計.設計能力描述'),
      details: t('技術能力.UI/UX設計.設計能力詳情')
    },
    {
      icon: faTasks,
      title: t('技術能力.專案管理.專案管理標題'),
      description: t('技術能力.專案管理.專案管理描述'),
      details: t('技術能力.專案管理.專案管理詳情')
    },
    {
      icon: faUserTie,
      title: t('技術能力.技術諮詢.技術諮詢標題'),
      description: t('技術能力.技術諮詢.技術諮詢描述'),
      details: t('技術能力.技術諮詢.技術諮詢詳情')
    }
  ];

  const serviceCapabilities = [
    { icon: faRocket, label: t('服務能力.專案交付') },
    { icon: faShieldAlt, label: t('服務能力.技術支援') },
    { icon: faHandshake, label: t('服務能力.客戶服務') },
    { icon: faMedal, label: t('服務能力.專業團隊') }
  ];

  return (
    <section className={styles.about}>
      {/* 背景效果層 */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientBg} />
        <div className={styles.gridPattern} />
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.orb4} />
      </div>

      {/* 漂浮裝飾元素 */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingCard1}>
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
        <div className={styles.floatingCard2}>
          <FontAwesomeIcon icon={faRocket} />
        </div>
        <div className={styles.floatingCard3}>
          <FontAwesomeIcon icon={faTrophy} />
        </div>
      </div>

      <div className="container">
        {/* 頂部介紹區 */}
        <div className={styles.introSection}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="PTalk Logo"
              width={100}
              height={100}
              className={styles.companyLogo}
            />
          </div>
          <div className={styles.badge}>{t('關於徽章')}</div>
          <h1 className={styles.mainTitle}>{t('關於主標題')}</h1>
          <p className={styles.subtitle}>
            {t('關於副標題')}
          </p>
          <div className={styles.introContent}>
            <p>
              {t('公司介紹.介紹段落一')}
            </p>
            <p>
              {t('公司介紹.介紹段落二')}
            </p>
          </div>
        </div>

        {/* 核心價值 */}
        <div className={styles.coreValues}>
          <h2 className={styles.sectionTitle}>{t('核心價值.核心價值標題')}</h2>
          <div className={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <FontAwesomeIcon icon={value.icon} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className={styles.valueGlow} />
              </div>
            ))}
          </div>
        </div>

        {/* 服務願景 */}
        <div className={styles.visionSection}>
          <h2 className={styles.sectionTitle}>{t('服務願景.服務願景標題')}</h2>
          <div className={styles.visionFlow}>
            {visionItems.map((item, index) => (
              <div key={index} className={styles.visionFlowItem}>
                <div className={styles.visionNumber}>{index + 1}</div>
                <div className={styles.visionFlowIcon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 技術能力展示 */}
        <div className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>{t('技術能力.技術能力標題')}</h2>
          <div className={styles.teamGrid}>
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`${styles.teamCard} ${flippedCards.has(index) ? styles.flipped : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <div className={styles.teamCardInner}>
                  <div className={styles.teamCardFront}>
                    <div className={styles.teamIcon}>
                      <FontAwesomeIcon icon={capability.icon} />
                    </div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                  <div className={styles.teamCardBack}>
                    <p>{capability.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 服務能力 */}
        <div className={styles.capabilitiesSection}>
          <h2 className={styles.sectionTitle}>{t('服務能力.服務能力標題')}</h2>
          <div className={styles.capabilitiesBadges}>
            {serviceCapabilities.map((capability, index) => (
              <div key={index} className={styles.capabilityBadge}>
                <div className={styles.capabilityIconWrapper}>
                  <FontAwesomeIcon icon={capability.icon} />
                </div>
                <h3>{capability.label}</h3>
                <div className={styles.capabilityGlow} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
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

  const milestones = [
    {
      year: '2018',
      title: t('發展歷程.2018年.公司成立'),
      description: t('發展歷程.2018年.2018年描述')
    },
    {
      year: '2020',
      title: t('發展歷程.2020年.業務擴展'),
      description: t('發展歷程.2020年.2020年描述')
    },
    {
      year: '2022',
      title: t('發展歷程.2022年.技術突破'),
      description: t('發展歷程.2022年.2022年描述')
    },
    {
      year: '2024',
      title: t('發展歷程.2024年.持續成長'),
      description: t('發展歷程.2024年.2024年描述')
    }
  ];

  const teamMembers = [
    {
      icon: faCode,
      title: t('團隊.技術團隊.技術團隊標題'),
      description: t('團隊.技術團隊.技術團隊描述'),
      details: t('團隊.技術團隊.技術團隊詳情')
    },
    {
      icon: faPalette,
      title: t('團隊.設計團隊.設計團隊標題'),
      description: t('團隊.設計團隊.設計團隊描述'),
      details: t('團隊.設計團隊.設計團隊詳情')
    },
    {
      icon: faTasks,
      title: t('團隊.專案管理.專案管理標題'),
      description: t('團隊.專案管理.專案管理描述'),
      details: t('團隊.專案管理.專案管理詳情')
    },
    {
      icon: faUserTie,
      title: t('團隊.顧問團隊.顧問團隊標題'),
      description: t('團隊.顧問團隊.顧問團隊描述'),
      details: t('團隊.顧問團隊.顧問團隊詳情')
    }
  ];

  const achievements = [
    { number: '6+', label: t('成就.年經驗') },
    { number: '500+', label: t('成就.服務客戶') },
    { number: '1000+', label: t('成就.完成專案') },
    { number: '50+', label: t('成就.團隊成員') }
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

        {/* 公司歷程時間軸 */}
        <div className={styles.timeline}>
          <h2 className={styles.sectionTitle}>{t('發展歷程.發展歷程標題')}</h2>
          <div className={styles.timelineWrapper}>
            <div className={styles.timelineLine} />
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
                <div className={styles.timelineNode} />
              </div>
            ))}
          </div>
        </div>

        {/* 團隊展示 */}
        <div className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>{t('團隊.專業團隊')}</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`${styles.teamCard} ${flippedCards.has(index) ? styles.flipped : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <div className={styles.teamCardInner}>
                  <div className={styles.teamCardFront}>
                    <div className={styles.teamIcon}>
                      <FontAwesomeIcon icon={member.icon} />
                    </div>
                    <h3>{member.title}</h3>
                    <p>{member.description}</p>
                  </div>
                  <div className={styles.teamCardBack}>
                    <p>{member.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 成就數據 */}
        <div className={styles.achievements}>
          <h2 className={styles.sectionTitle}>{t('成就.我們的成就')}</h2>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementNumber}>
                  {achievement.number}
                </div>
                <div className={styles.achievementLabel}>
                  {achievement.label}
                </div>
                <div className={styles.achievementGlow} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
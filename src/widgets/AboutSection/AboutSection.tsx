'use client';

import { useState } from 'react';
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
      title: '創新',
      description: '持續創新，引領技術潮流'
    },
    {
      icon: faMedal,
      title: '品質',
      description: '堅持高標準，交付卓越成果'
    },
    {
      icon: faHandshake,
      title: '服務',
      description: '客戶至上，超越期待'
    },
    {
      icon: faShieldAlt,
      title: '誠信',
      description: '誠實守信，建立長期夥伴關係'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: '公司成立',
      description: 'PTalk 技術服務公司正式成立，開始為企業提供數位轉型服務'
    },
    {
      year: '2020',
      title: '業務擴展',
      description: '服務範圍擴展至全台，客戶數量突破 100 家'
    },
    {
      year: '2022',
      title: '技術突破',
      description: '推出創新 AI 解決方案，獲得業界認可'
    },
    {
      year: '2024',
      title: '持續成長',
      description: '團隊規模達到 50 人，服務超過 500 家企業客戶'
    }
  ];

  const teamMembers = [
    {
      icon: faCode,
      title: '技術團隊',
      description: '資深全端工程師團隊',
      details: '精通各種程式語言與框架，具備豐富的開發經驗'
    },
    {
      icon: faPalette,
      title: '設計團隊',
      description: '創意 UI/UX 設計師',
      details: '打造美觀實用的使用者介面，提供卓越的用戶體驗'
    },
    {
      icon: faTasks,
      title: '專案管理',
      description: '專業 PM 團隊',
      details: '確保專案準時交付，品質符合客戶期待'
    },
    {
      icon: faUserTie,
      title: '顧問團隊',
      description: '業務策略顧問',
      details: '提供專業諮詢，協助企業數位轉型'
    }
  ];

  const achievements = [
    { number: '6+', label: '年經驗' },
    { number: '500+', label: '服務客戶' },
    { number: '1000+', label: '完成專案' },
    { number: '50+', label: '團隊成員' }
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
          <div className={styles.badge}>About PTalk</div>
          <h1 className={styles.mainTitle}>關於 PTalk</h1>
          <p className={styles.subtitle}>
            專業技術服務，助力企業數位轉型
          </p>
          <div className={styles.introContent}>
            <p>
              PTalk 技術服務公司成立於 2018 年，致力於為企業提供全方位的技術解決方案。
              我們擁有經驗豐富的專業團隊，結合創新技術與業界最佳實踐，
              協助客戶實現數位轉型，提升競爭力。
            </p>
            <p>
              從網站開發到行動應用，從系統整合到雲端服務，
              我們提供一站式的技術服務，滿足不同規模企業的需求。
              選擇 PTalk，選擇專業與信賴。
            </p>
          </div>
        </div>

        {/* 核心價值 */}
        <div className={styles.coreValues}>
          <h2 className={styles.sectionTitle}>核心價值</h2>
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
          <h2 className={styles.sectionTitle}>發展歷程</h2>
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
          <h2 className={styles.sectionTitle}>專業團隊</h2>
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
          <h2 className={styles.sectionTitle}>我們的成就</h2>
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
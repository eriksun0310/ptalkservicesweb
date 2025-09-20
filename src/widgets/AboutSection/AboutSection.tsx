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
  const t = useTranslations('about');
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
      title: t('coreValues.innovation.title'),
      description: t('coreValues.innovation.description')
    },
    {
      icon: faMedal,
      title: t('coreValues.quality.title'),
      description: t('coreValues.quality.description')
    },
    {
      icon: faHandshake,
      title: t('coreValues.service.title'),
      description: t('coreValues.service.description')
    },
    {
      icon: faShieldAlt,
      title: t('coreValues.integrity.title'),
      description: t('coreValues.integrity.description')
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: t('timeline.2018.title'),
      description: t('timeline.2018.description')
    },
    {
      year: '2020',
      title: t('timeline.2020.title'),
      description: t('timeline.2020.description')
    },
    {
      year: '2022',
      title: t('timeline.2022.title'),
      description: t('timeline.2022.description')
    },
    {
      year: '2024',
      title: t('timeline.2024.title'),
      description: t('timeline.2024.description')
    }
  ];

  const teamMembers = [
    {
      icon: faCode,
      title: t('team.tech.title'),
      description: t('team.tech.description'),
      details: t('team.tech.details')
    },
    {
      icon: faPalette,
      title: t('team.design.title'),
      description: t('team.design.description'),
      details: t('team.design.details')
    },
    {
      icon: faTasks,
      title: t('team.pm.title'),
      description: t('team.pm.description'),
      details: t('team.pm.details')
    },
    {
      icon: faUserTie,
      title: t('team.consultant.title'),
      description: t('team.consultant.description'),
      details: t('team.consultant.details')
    }
  ];

  const achievements = [
    { number: '6+', label: t('achievements.experience') },
    { number: '500+', label: t('achievements.clients') },
    { number: '1000+', label: t('achievements.projects') },
    { number: '50+', label: t('achievements.members') }
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
          <div className={styles.badge}>{t('badge')}</div>
          <h1 className={styles.mainTitle}>{t('mainTitle')}</h1>
          <p className={styles.subtitle}>
            {t('subtitle')}
          </p>
          <div className={styles.introContent}>
            <p>
              {t('intro.paragraph1')}
            </p>
            <p>
              {t('intro.paragraph2')}
            </p>
          </div>
        </div>

        {/* 核心價值 */}
        <div className={styles.coreValues}>
          <h2 className={styles.sectionTitle}>{t('coreValues.title')}</h2>
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
          <h2 className={styles.sectionTitle}>{t('timeline.title')}</h2>
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
          <h2 className={styles.sectionTitle}>{t('team.title')}</h2>
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
          <h2 className={styles.sectionTitle}>{t('achievements.title')}</h2>
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
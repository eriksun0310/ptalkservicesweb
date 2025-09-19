'use client';

import { useTranslations } from 'next-intl';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
  const t = useTranslations('about');

  return (
    <section className={styles.about}>
      <div className="container">
        <h1 className={styles.title}>{t('title')}</h1>

        <div className={styles.content}>
          <div className={styles.block}>
            <h2>{t('mission.title')}</h2>
            <p>{t('mission.content')}</p>
          </div>

          <div className={styles.block}>
            <h2>{t('vision.title')}</h2>
            <p>{t('vision.content')}</p>
          </div>

          <div className={styles.block}>
            <h2>{t('team.title')}</h2>
            <p>{t('team.content')}</p>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.avatar}>👨‍💻</div>
                <h3>技術團隊</h3>
                <p>專業工程師團隊</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.avatar}>🎨</div>
                <h3>設計團隊</h3>
                <p>創意設計師團隊</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.avatar}>📊</div>
                <h3>專案管理</h3>
                <p>專業PM團隊</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
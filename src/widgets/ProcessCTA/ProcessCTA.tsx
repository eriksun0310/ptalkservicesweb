'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/Button';
import styles from './ProcessCTA.module.css';

export const ProcessCTA = () => {
  const t = useTranslations('流程頁面.流程行動呼籲');

  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{t('準備好開始了嗎')}</h2>
            <p className={styles.subtitle}>{t('流程CTA副標題')}</p>
          </div>

          <div className={styles.buttons}>
            <Button variant="primary" size="large">
              {t('立即預約諮詢')}
            </Button>
            <Button variant="secondary" size="large">
              {t('下載服務手冊')}
            </Button>
          </div>

          <div className={styles.contact}>
            <div className={styles.contactItem}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{t('聯絡電話')}</span>
            </div>
            <div className={styles.contactItem}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              <span>{t('聯絡郵件')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { setCookie } from '@/shared/lib/cookies';
import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    setCookie('locale', newLocale);
    router.refresh();
  };

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${locale === 'zh-TW' ? styles.active : ''}`}
        onClick={() => handleLanguageChange('zh-TW')}
      >
        中文
      </button>
      <button
        className={`${styles.button} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </button>
      <button
        className={`${styles.button} ${locale === 'ja' ? styles.active : ''}`}
        onClick={() => handleLanguageChange('ja')}
      >
        日本語
      </button>
    </div>
  );
};
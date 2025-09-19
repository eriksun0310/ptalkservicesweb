'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { setCookie } from '@/shared/lib/cookies';
import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'zh-TW', label: '中文', shortLabel: 'ZH' },
    { code: 'en', label: 'English', shortLabel: 'EN' },
    { code: 'ja', label: '日本語', shortLabel: 'JP' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    setCookie('locale', newLocale);
    setIsOpen(false);
    router.refresh();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.switcher}>
      <button className={styles.trigger} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faGlobe} className={styles.globeIcon} />
        <span className={styles.currentLang}>{currentLanguage.shortLabel}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.option} ${locale === lang.code ? styles.active : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}

      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </div>
  );
};
'use client';

import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSocialLinks } from '@/shared/config';
import styles from './SocialLinks.module.css';

export const SocialLinks = () => {
  const t = useTranslations('共用');
  const socials = getSocialLinks();
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t('追蹤我們')}</h3>
      <div className={styles.socialLinks}>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            title={social.name}
          >
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={social.icon} className={styles.icon} />
            </div>
            <div className={styles.info}>
              <span className={styles.name}>{social.name}</span>
              <span className={styles.label}>{social.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
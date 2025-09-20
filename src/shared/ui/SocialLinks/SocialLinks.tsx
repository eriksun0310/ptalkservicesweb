'use client';

import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faThreads, faLine } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from './SocialLinks.module.css';

const socials = [
  {
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://instagram.com/ptalk.tw',
    label: '@ptalk.tw'
  },
  {
    name: 'Threads',
    icon: faThreads,
    url: 'https://www.threads.com/@ptalk.tw',
    label: '@ptalk.tw'
  }
];

export const SocialLinks = () => {
  const t = useTranslations('common');
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t('followUs')}</h3>
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
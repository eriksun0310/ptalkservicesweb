'use client';

import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getContactLinks } from '@/shared/config';
import styles from './ContactLinks.module.css';

export const ContactLinks = () => {
  const t = useTranslations('共用');
  const contacts = getContactLinks();
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t('快速聯絡')}</h3>
      <div className={styles.links}>
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target={contact.name === 'Email' ? '_self' : '_blank'}
            rel={contact.name === 'Email' ? '' : 'noopener noreferrer'}
            className={styles.link}
          >
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={contact.icon} className={styles.icon} />
            </div>
            <div className={styles.info}>
              <span className={styles.name}>{contact.name === 'Email' ? t('電子郵件') : contact.name}</span>
              <span className={styles.label}>{contact.name === 'Line' ? t('Line官方帳號') : contact.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
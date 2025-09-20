'use client';

import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from './ContactLinks.module.css';

export const ContactLinks = () => {
  const t = useTranslations('common');

  const contacts = [
    {
      name: t('email'),
      icon: faEnvelope,
      url: 'mailto:connect.ptalk@gmail.com',
      label: 'connect.ptalk@gmail.com',
      type: 'email'
    },
    {
      name: 'Line',
      icon: faLine,
      url: 'https://line.me/R/ti/p/@015ziycs',
      label: t('lineOfficialAccount'),
      type: 'line'
    }
  ];
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t('quickContact')}</h3>
      <div className={styles.links}>
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target={contact.type === 'email' ? '_self' : '_blank'}
            rel={contact.type === 'email' ? '' : 'noopener noreferrer'}
            className={styles.link}
          >
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={contact.icon} className={styles.icon} />
            </div>
            <div className={styles.info}>
              <span className={styles.name}>{contact.name}</span>
              <span className={styles.label}>{contact.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from './ContactLinks.module.css';

const contacts = [
  {
    name: '電子郵件',
    icon: faEnvelope,
    url: 'mailto:connect.ptalk@gmail.com',
    label: 'connect.ptalk@gmail.com',
    type: 'email'
  },
  {
    name: 'Line',
    icon: faLine,
    url: 'https://line.me/ti/p/ptalk.tw',
    label: 'Line 官方帳號',
    type: 'line'
  }
];

export const ContactLinks = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>快速聯絡</h3>
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
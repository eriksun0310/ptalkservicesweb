'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faThreads, faLine } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from './SocialLinks.module.css';

const socials = [
  {
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://instagram.com/ptalk.tw',
  },
  {
    name: 'Line',
    icon: faLine,
    url: 'https://line.me/ti/p/ptalk.tw',
  },
  {
    name: 'Threads',
    icon: faThreads,
    url: 'https://threads.net/ptalk',
  }
];

export const SocialLinks = () => {
  return (
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
          <FontAwesomeIcon icon={social.icon} className={styles.icon} />
        </a>
      ))}
    </div>
  );
};
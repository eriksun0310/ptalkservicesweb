'use client';

import { useTranslations } from 'next-intl';
import { ContactForm } from '@/features/contact-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faThreads, faLine } from '@fortawesome/free-brands-svg-icons';
import styles from './ContactSection.module.css';

export const ContactSection = () => {
  const t = useTranslations('contact');

  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.subtitle}>{t('subtitle')}</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.formSection}>
              <ContactForm />
            </div>

            <div className={styles.infoSection}>
              <div className={styles.contactInfo}>
                <h3>{t('info.quickContact')}</h3>

                <div className={styles.contactEmail}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.emailIcon} />
                  <a href="mailto:connect.ptalk@gmail.com">connect.ptalk@gmail.com</a>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.socialSection}>
                  <p className={styles.socialTitle}>{t('social.follow')}</p>
                  <div className={styles.socialIcons}>
                    <a
                      href="https://line.me/R/ti/p/@015ziycs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      title="Line 官方帳號"
                    >
                      <FontAwesomeIcon icon={faLine} />
                    </a>

                    <a
                      href="https://instagram.com/ptalk.tw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      title="@ptalk.tw"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a
                      href="https://www.threads.com/@ptalk.tw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      title="@ptalk.tw"
                    >
                      <FontAwesomeIcon icon={faThreads} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
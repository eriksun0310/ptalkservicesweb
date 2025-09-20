'use client';

import { useTranslations } from 'next-intl';
import { ContactForm } from '@/features/contact-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LINKS, getSocialLinks } from '@/shared/config';
import styles from './ContactSection.module.css';

export const ContactSection = () => {
  const t = useTranslations('contact');
  const tCommon = useTranslations('common');

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
                  <FontAwesomeIcon icon={LINKS.email.icon} className={styles.emailIcon} />
                  <a href={LINKS.email.url}>{LINKS.email.label}</a>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.socialSection}>
                  <p className={styles.socialTitle}>{t('social.follow')}</p>
                  <div className={styles.socialIcons}>
                    <a
                      href={LINKS.line.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      title={tCommon('lineOfficialAccount')}
                    >
                      <FontAwesomeIcon icon={LINKS.line.icon} />
                    </a>
                    {getSocialLinks().map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        title={social.username}
                      >
                        <FontAwesomeIcon icon={social.icon} />
                      </a>
                    ))}
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
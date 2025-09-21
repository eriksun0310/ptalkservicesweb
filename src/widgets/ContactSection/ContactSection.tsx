'use client';

import { useTranslations } from 'next-intl';
import { ContactForm } from '@/features/contact-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LINKS, getSocialLinks } from '@/shared/config';
import styles from './ContactSection.module.css';

export const ContactSection = () => {
  const t = useTranslations('聯絡頁面');
  const tCommon = useTranslations('共用');

  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>{t('聯絡我們')}</h1>
            <p className={styles.subtitle}>{t('聯絡副標題')}</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.formSection}>
              <ContactForm />
            </div>

            <div className={styles.infoSection}>
              <div className={styles.contactInfo}>
                <h3>{t('聯絡資訊.快速聯絡')}</h3>

                <div className={styles.contactEmail}>
                  <FontAwesomeIcon icon={LINKS.email.icon} className={styles.emailIcon} />
                  <a href={LINKS.email.url}>{LINKS.email.label}</a>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.socialSection}>
                  <p className={styles.socialTitle}>{t('社群媒體.追蹤我們')}</p>
                  <div className={styles.socialIcons}>
                    <a
                      href={LINKS.line.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      title={tCommon('Line官方帳號')}
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
'use client';

import { useTranslations } from 'next-intl';
import { ContactForm } from '@/features/contact-form';
import { SocialLinks } from '@/shared/ui/SocialLinks';
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

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4L12 13 2 4" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <p className={styles.infoLabel}>{t('info.email')}</p>
                    <a href="mailto:connect.ptalk@gmail.com">connect.ptalk@gmail.com</a>
                  </div>
                </div>

          
                <div className={styles.divider}></div>

                <div className={styles.socialSection}>
                  <p className={styles.socialTitle}>{t('social.follow')}</p>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
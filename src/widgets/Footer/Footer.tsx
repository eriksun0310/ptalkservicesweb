'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/shared/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_LINKS } from '@/shared/config';
import styles from './Footer.module.css';

export const Footer = () => {
  const t = useTranslations();

  return (
    <footer className={styles.footer}>
      <div className={styles.ctaSection}>
        {/* <div className="container"> */}
          <h2 className={styles.ctaTitle}>{t('footer.cta.title')}</h2>
          <p className={styles.ctaSubtitle}>{t('footer.cta.subtitle')}</p>
          <div className={styles.ctaActions}>
            <Link href="/contact">
              <Button variant="primary" size="large">
                {t('footer.cta.primaryAction')}
              </Button>
            </Link>
          </div>
        {/* </div> */}
      </div>

      <div className={styles.bottomSection}>
        <div className="container">
          <div className={styles.bottomContent}>
            <div className={styles.bottomLeft}>
              <p className={styles.brand}>PTalk</p>
              <p className={styles.copyright}>{t('footer.copyright')}</p>
            </div>

            <div className={styles.bottomCenter}>
              <div className={styles.quickLinks}>
                <Link href="/">{t('navigation.home')}</Link>
                <Link href="/about">{t('navigation.about')}</Link>
                <Link href="/products">{t('navigation.products')}</Link>
                <Link href="/process">{t('navigation.process')}</Link>
                <Link href="/contact">{t('navigation.contact')}</Link>
              </div>
            </div>

            <div className={styles.bottomRight}>
              <div className={styles.contactSection}>
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.name === 'Email' ? '_self' : '_blank'}
                    rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
                    className={styles.contactIcon}
                    title={link.name === 'Line' ? t('common.lineOfficialAccount') : link.username || link.label}
                  >
                    <FontAwesomeIcon icon={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
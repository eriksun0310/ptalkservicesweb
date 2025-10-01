'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
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
          <h2 className={styles.ctaTitle}>{t('頁尾.頁尾CTA.準備好開始了嗎')}</h2>
          <p className={styles.ctaSubtitle}>{t('頁尾.頁尾CTA.頁尾CTA副標題')}</p>
          <div className={styles.ctaActions}>
            <Link href="/contact">
              <Button variant="primary" size="large">
                {t('頁尾.頁尾CTA.立即預約諮詢')}
              </Button>
            </Link>
          </div>
        {/* </div> */}
      </div>

      <div className={styles.bottomSection}>
        <div className="container">
          <div className={styles.bottomContent}>
            <div className={styles.bottomLeft}>
              <div className={styles.footerBrand}>
                <Image
                  src="/logo.png"
                  alt="PTalk Logo"
                  width={40}
                  height={40}
                  className={styles.footerLogo}
                />
                <p className={styles.brand}>PTalk</p>
              </div>
              <p className={styles.copyright}>{t('頁尾.版權聲明')}</p>
            </div>

            <div className={styles.bottomCenter}>
              <div className={styles.quickLinks}>
                <Link href="/">{t('導航列.首頁')}</Link>
                <Link href="/about">{t('導航列.關於我們')}</Link>
                <Link href="/products">{t('導航列.產品展示')}</Link>
                <Link href="/process">{t('導航列.合作流程')}</Link>
                <Link href="/contact">{t('導航列.聯絡我們')}</Link>
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
                    title={link.name === 'Line' ? t('共用.Line官方帳號') : link.username || link.label}
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
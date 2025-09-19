'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { LanguageSwitcher } from '@/features/language-switcher';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const t = useTranslations('navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', href: '/' },
    { id: 'about', href: '/about' },
    { id: 'products', href: '/products' },
    { id: 'process', href: '/process' },
    { id: 'contact', href: '/contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            PTalk
          </Link>

          <div className={`${styles.navItems} ${isMenuOpen ? styles.active : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.id)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
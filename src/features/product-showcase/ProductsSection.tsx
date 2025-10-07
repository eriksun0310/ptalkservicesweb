'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaw,
  faMapMarkedAlt,
  faBus,
  faRocket,
  faStar,
  faCube
} from '@fortawesome/free-solid-svg-icons';
import { ProductCard } from './ProductCard';
import styles from './ProductsSection.module.css';

const products = [
  {
    id: 'petfriendly-app',
    nameKey: '產品項目.寵物友善App.寵物友善地圖標題',
    descriptionKey: '產品項目.寵物友善App.寵物友善地圖描述',
    featuresKey: '產品項目.寵物友善App.寵物友善功能',
    techStack: ['React Native', '.NET 8', 'MySQL', 'Redis', 'AWS S3', 'Next.js', 'TypeScript'],
    link: 'https://ptalk.moushih.com/',
    icon: faPaw,
    hasViewDetails: true
  },
  {
    id: 'petfriendly-admin',
    nameKey: '產品項目.後台管理系統.後台系統標題',
    descriptionKey: '產品項目.後台管理系統.後台系統描述',
    featuresKey: '產品項目.後台管理系統.後台系統功能',
    techStack: ['.NET 8', 'MySQL', 'Redis', 'AWS S3', 'Next.js', 'TypeScript', 'React'],
    link: 'https://gobus.moushih.com/auth/login',
    icon: faBus,
    hasViewDetails: true
  }
];

export const ProductsSection = () => {
  const t = useTranslations('產品頁面');
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <section className={styles.products}>
      {/* 背景效果層 */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientBg} />
        <div className={styles.gridPattern} />
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      {/* 漂浮裝飾元素 */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingCard1}>
          <FontAwesomeIcon icon={faRocket} />
        </div>
        <div className={styles.floatingCard2}>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={styles.floatingCard3}>
          <FontAwesomeIcon icon={faCube} />
        </div>
      </div>

      <div className="container">
        {/* 標題區域 */}
        <div className={styles.headerSection}>
          <div className={styles.badge}>{t('產品徽章')}</div>
          <h1 className={styles.title}>{t('產品標題')}</h1>
          <p className={styles.subtitle}>
            {t('產品副標題')}
          </p>
        </div>

        {/* 產品網格 */}
        <div className={styles.grid}>
          {products.map((product, index) => {
            const productData = {
              ...product,
              name: t(product.nameKey),
              description: t(product.descriptionKey),
              features: t.raw(product.featuresKey) as string[]
            };
            return (
              <ProductCard key={product.id} product={productData} index={index} />
            );
          })}
        </div>

        {/* CTA 區域 */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>{t('產品行動呼籲.找不到適合的產品')}</h2>
          <p className={styles.ctaText}>
            {t('產品行動呼籲.客製化開發服務')}
          </p>
          <button className={styles.ctaButton} onClick={handleContactClick}>
            <span>{t('產品行動呼籲.聯絡按鈕')}</span>
            <FontAwesomeIcon icon={faRocket} />
          </button>
        </div>
      </div>
    </section>
  );
};
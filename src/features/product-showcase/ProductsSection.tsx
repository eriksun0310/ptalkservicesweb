'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaw,
  faMapMarkedAlt,
  faUsersCog,
  faRocket,
  faStar,
  faCube
} from '@fortawesome/free-solid-svg-icons';
import { ProductCard } from './ProductCard';
import styles from './ProductsSection.module.css';

const products = [
  {
    id: 'petfriendly-app',
    nameKey: 'items.petfriendlyApp.title',
    descriptionKey: 'items.petfriendlyApp.description',
    featuresKey: 'items.petfriendlyApp.features',
    techStack: ['React Native', '.NET 8', 'MySQL', 'Redis', 'AWS S3', 'Next.js', 'TypeScript'],
    link: 'https://ptalk.moushih.com/',
    icon: faPaw,
    hasViewDetails: true
  },
  {
    id: 'petfriendly-admin',
    nameKey: 'items.petfriendlyAdmin.title',
    descriptionKey: 'items.petfriendlyAdmin.description',
    featuresKey: 'items.petfriendlyAdmin.features',
    techStack: ['.NET 8', 'MySQL', 'Redis', 'AWS S3', 'Next.js', 'TypeScript', 'React'],
    link: null,
    icon: faUsersCog,
    hasViewDetails: false
  }
];

export const ProductsSection = () => {
  const t = useTranslations('products');
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
          <div className={styles.badge}>Our Products</div>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.subtitle}>
            {t('subtitle')}
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
          <h2 className={styles.ctaTitle}>{t('cta.title')}</h2>
          <p className={styles.ctaText}>
            {t('cta.description')}
          </p>
          <button className={styles.ctaButton} onClick={handleContactClick}>
            <span>{t('cta.button')}</span>
            <FontAwesomeIcon icon={faRocket} />
          </button>
        </div>
      </div>
    </section>
  );
};
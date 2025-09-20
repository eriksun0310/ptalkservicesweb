'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCashRegister,
  faGraduationCap,
  faRobot,
  faRocket,
  faStar,
  faCube
} from '@fortawesome/free-solid-svg-icons';
import { ProductCard } from './ProductCard';
import styles from './ProductsSection.module.css';

const products = [
  {
    id: 'product1',
    nameKey: 'items.crm.name',
    descriptionKey: 'items.crm.description',
    featuresKey: 'items.crm.features',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    link: '#',
    icon: faChartLine
  },
  {
    id: 'product2',
    nameKey: 'items.pos.name',
    descriptionKey: 'items.pos.description',
    featuresKey: 'items.pos.features',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    link: '#',
    icon: faCashRegister
  },
  {
    id: 'product3',
    nameKey: 'items.eduhub.name',
    descriptionKey: 'items.eduhub.description',
    featuresKey: 'items.eduhub.features',
    techStack: ['Vue.js', 'Django', 'WebRTC', 'Docker'],
    link: '#',
    icon: faGraduationCap
  },
  {
    id: 'product4',
    nameKey: 'items.aiassistant.name',
    descriptionKey: 'items.aiassistant.description',
    featuresKey: 'items.aiassistant.features',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'OpenAI'],
    link: '#',
    icon: faRobot
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
              features: t(product.featuresKey)
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
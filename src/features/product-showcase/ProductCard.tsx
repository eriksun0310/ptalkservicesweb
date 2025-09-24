'use client';

import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faArrowRight,
  faCode,
  faMicrochip
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { OptimizedImage } from '@/shared/ui/OptimizedImage';
import styles from './ProductCard.module.css';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  link: string | null;
  icon: IconDefinition;
  gradient?: string;
  hasViewDetails?: boolean;
  image?: string;
  imageAlt?: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const t = useTranslations('產品頁面');

  return (
    <div className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className={styles.cardGlow} />
      <div className={styles.cardInner}>
        {product.image && (
          <div className={styles.imageSection}>
            <OptimizedImage
              src={product.image}
              alt={product.imageAlt || product.name}
              width={400}
              height={250}
              className={styles.productImage}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}

        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <div className={styles.iconGlow} />
            <div className={styles.icon}>
              <FontAwesomeIcon icon={product.icon} />
            </div>
          </div>
          <div className={styles.headerContent}>
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <FontAwesomeIcon icon={faCode} className={styles.sectionIcon} />
            <h4 className={styles.sectionTitle}>{t('核心功能')}</h4>
          </div>
          <ul className={styles.features}>
            {product.features.map((feature, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCheck} className={styles.featureIcon} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <FontAwesomeIcon icon={faMicrochip} className={styles.sectionIcon} />
            <h4 className={styles.sectionTitle}>{t('技術架構')}</h4>
          </div>
          <div className={styles.techStack}>
            {product.techStack.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {product.hasViewDetails && product.link && (
          <div className={styles.cardFooter}>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <span>{t('查看詳情')}</span>
              <FontAwesomeIcon icon={faArrowRight} className={styles.ctaIcon} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
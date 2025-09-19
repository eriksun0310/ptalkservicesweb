'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/Button';
import styles from './ProductCard.module.css';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  link: string;
  icon: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const t = useTranslations('products');

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>{product.icon}</div>
        <div>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>{t('features')}</h4>
        <ul className={styles.features}>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>{t('techStack')}</h4>
        <div className={styles.techStack}>
          {product.techStack.map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Button variant="accent" fullWidth>
        {t('viewDetails')}
      </Button>
    </div>
  );
};
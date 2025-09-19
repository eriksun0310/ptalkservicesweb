'use client';

import { useTranslations } from 'next-intl';
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
    name: 'PTalk CRM',
    description: '客戶關係管理系統',
    features: ['客戶資料管理', '銷售追蹤', '自動化報表', '團隊協作'],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    link: '#',
    icon: faChartLine
  },
  {
    id: 'product2',
    name: 'SmartPOS',
    description: '智慧零售管理系統',
    features: ['庫存管理', '銷售分析', '會員系統', '多店管理'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    link: '#',
    icon: faCashRegister
  },
  {
    id: 'product3',
    name: 'EduHub',
    description: '線上教育平台',
    features: ['課程管理', '直播教學', '作業系統', '學習分析'],
    techStack: ['Vue.js', 'Django', 'WebRTC', 'Docker'],
    link: '#',
    icon: faGraduationCap
  },
  {
    id: 'product4',
    name: 'AI Assistant',
    description: '智能客服助手',
    features: ['自然語言處理', '多語言支援', '24/7服務', '智能路由'],
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'OpenAI'],
    link: '#',
    icon: faRobot
  }
];

export const ProductsSection = () => {
  const t = useTranslations('products');

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
            創新科技解決方案，助力企業數位轉型
          </p>
        </div>

        {/* 產品網格 */}
        <div className={styles.grid}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA 區域 */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>找不到適合的產品？</h2>
          <p className={styles.ctaText}>
            我們提供客製化開發服務，為您打造專屬解決方案
          </p>
          <button className={styles.ctaButton}>
            <span>聯絡我們</span>
            <FontAwesomeIcon icon={faRocket} />
          </button>
        </div>
      </div>
    </section>
  );
};
'use client';

import { useTranslations } from 'next-intl';
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
    icon: '📊'
  },
  {
    id: 'product2',
    name: 'SmartPOS',
    description: '智慧零售管理系統',
    features: ['庫存管理', '銷售分析', '會員系統', '多店管理'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    link: '#',
    icon: '🛒'
  },
  {
    id: 'product3',
    name: 'EduHub',
    description: '線上教育平台',
    features: ['課程管理', '直播教學', '作業系統', '學習分析'],
    techStack: ['Vue.js', 'Django', 'WebRTC', 'Docker'],
    link: '#',
    icon: '📚'
  },
  {
    id: 'product4',
    name: 'AI Assistant',
    description: '智能客服助手',
    features: ['自然語言處理', '多語言支援', '24/7服務', '智能路由'],
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'OpenAI'],
    link: '#',
    icon: '🤖'
  }
];

export const ProductsSection = () => {
  const t = useTranslations('products');

  return (
    <section className={styles.products}>
      <div className="container">
        <h1 className={styles.title}>{t('title')}</h1>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
'use client';

import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserTie,
  faBullseye,
  faTools
} from '@fortawesome/free-solid-svg-icons';
import styles from './WhyUsSection.module.css';

// 輔助函數用於映射理由 ID 到中文翻譯 key
const getReasonTitle = (reasonId: string, t: any) => {
  const titleMap: Record<string, string> = {
    'reason1': '理由一.專業技術團隊',
    'reason2': '理由二.客製化解決方案',
    'reason3': '理由三.完整售後服務'
  };
  return t(titleMap[reasonId] || reasonId);
};

const getReasonDescription = (reasonId: string, t: any) => {
  const descMap: Record<string, string> = {
    'reason1': '理由一.專業團隊描述',
    'reason2': '理由二.客製化方案描述',
    'reason3': '理由三.售後服務描述'
  };
  return t(descMap[reasonId] || reasonId);
};

const reasons = [
  {
    id: 'reason1',
    icon: faUserTie,  // 專業技術團隊
  },
  {
    id: 'reason2',
    icon: faBullseye,  // 客製化解決方案
  },
  {
    id: 'reason3',
    icon: faTools,  // 完整售後服務
  },
];

export const WhyUsSection = () => {
  const t = useTranslations('為什麼選擇我們');

  return (
    <section id="why-us" className={styles.section}>
      {/* 動態背景裝飾 */}
      <div className={styles.backgroundDecorations}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      <div className="container">
        <h2 className={styles.title}>{t('選擇我們的理由')}</h2>
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={reason.id} className={styles.card}>
              <div className={styles.glow} />
              <div className={styles.number}>{`0${index + 1}`}</div>
              <div className={styles.icon}>
                <div className={styles.iconGlow} />
                <FontAwesomeIcon icon={reason.icon} size="2x" />
              </div>
              <h3 className={styles.cardTitle}>{getReasonTitle(reason.id, t)}</h3>
              <p className={styles.description}>{getReasonDescription(reason.id, t)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
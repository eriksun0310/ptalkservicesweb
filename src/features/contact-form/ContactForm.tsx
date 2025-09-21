'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/Button';
import styles from './ContactForm.module.css';

// 輔助函數用於映射服務 ID 到中文翻譯 key
const getServiceTitle = (serviceId: string, t: any) => {
  const titleMap: Record<string, string> = {
    'app': 'APP服務.APP規劃設計',
    'web': '網頁設計服務.網頁設計',
    'website': '網站架設服務.網站架設',
    'hosting': '主機租賃服務.網站主機租賃',
    'ai': 'AI串接服務.AI串接',
    'seo': 'SEO優化服務.SEO優化',
    'teaching': '教學服務.AI科技演講教學'
  };
  return t(titleMap[serviceId] || serviceId);
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactForm = () => {
  const t = useTranslations('聯絡頁面.聯絡表單');
  const tServices = useTranslations('服務項目');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const services = [
    'app',
    'web',
    'website',
    'hosting',
    'ai',
    'seo',
    'teaching',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(t('發送成功訊息'));
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || t('發送失敗訊息'));
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage(t('網路錯誤訊息'));
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {submitStatus !== 'idle' && (
        <div className={`${styles.statusMessage} ${styles[submitStatus]}`}>
          {statusMessage}
        </div>
      )}

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">{t('姓名')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">{t('電子郵件')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">{t('電話')}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="service">{t('諮詢服務')}</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option value="">{t('請選擇服務')}</option>
            {services.map(service => (
              <option key={service} value={service}>
                {getServiceTitle(service, tServices)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">{t('訊息內容')}</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      <Button
        type="submit"
        variant="accent"
        size="large"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? t('發送中') : t('送出諮詢')}
      </Button>
    </form>
  );
};
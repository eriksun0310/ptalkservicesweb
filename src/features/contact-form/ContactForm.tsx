'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/Button';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactForm = () => {
  const t = useTranslations('contact.form');
  const tServices = useTranslations('services');

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
        setStatusMessage(t('successMessage'));
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || t('errorMessage'));
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage(t('networkError'));
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
          <label htmlFor="name">{t('name')}</label>
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
          <label htmlFor="email">{t('email')}</label>
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
          <label htmlFor="phone">{t('phone')}</label>
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
          <label htmlFor="service">{t('service')}</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option value="">{t('selectService')}</option>
            {services.map(service => (
              <option key={service} value={service}>
                {tServices(`${service}.title`)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">{t('message')}</label>
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
        {isSubmitting ? t('submitting') : t('submit')}
      </Button>
    </form>
  );
};
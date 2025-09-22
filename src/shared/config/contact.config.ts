/**
 * 集中管理所有聯絡資訊
 * 修改聯絡資訊只需要在這裡更新即可
 */
export const CONTACT_INFO = {
  // 主要聯絡電子郵件
  email: 'connect.ptalk@gmail.com',

  // 聯絡電話
  phone: '+886 912 345 678',

  // 公司地址
  address: {
    full: '台北市信義區',
    city: '台北市',
    district: '信義區'
  },

  // 營業時間
  businessHours: {
    weekdays: '週一至週五',
    hours: '9:00 - 18:00',
    fullText: '週一至週五 9:00 - 18:00'
  },

  // Line 官方帳號
  line: {
    id: '@015ziycs',
    url: 'https://line.me/R/ti/p/@015ziycs',
    label: 'Line 官方帳號'
  },

  // 社群媒體
  social: {
    instagram: {
      username: '@ptalk.design',
      url: 'https://instagram.com/ptalk.design'
    },
    threads: {
      username: '@ptalk.design',
      url: 'https://www.threads.com/@ptalk.design'
    }
  }
} as const;

// 快速存取函數
export const getEmailUrl = () => `mailto:${CONTACT_INFO.email}`;
export const getPhoneUrl = () => `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`;
export const getLineUrl = () => CONTACT_INFO.line.url;
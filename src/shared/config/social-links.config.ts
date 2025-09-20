import { faInstagram, faThreads, faLine } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface SocialLink {
  name: string;
  icon: IconDefinition;
  url: string;
  label: string;
  username?: string;
  type: 'social' | 'contact';
}

/**
 * 集中管理所有社群媒體和聯絡連結
 * 修改連結只需要在這裡更新即可
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://instagram.com/ptalk.tw',
    label: '@ptalk.tw',
    username: '@ptalk.tw',
    type: 'social'
  },
  {
    name: 'Threads',
    icon: faThreads,
    url: 'https://www.threads.com/@ptalk.tw',
    label: '@ptalk.tw',
    username: '@ptalk.tw',
    type: 'social'
  },
  {
    name: 'Line',
    icon: faLine,
    url: 'https://line.me/R/ti/p/@015ziycs',
    label: 'Line 官方帳號',
    username: '@015ziycs',
    type: 'contact'
  },
  {
    name: 'Email',
    icon: faEnvelope,
    url: 'mailto:connect.ptalk@gmail.com',
    label: 'connect.ptalk@gmail.com',
    username: 'connect.ptalk@gmail.com',
    type: 'contact'
  }
];

// 依類型分組的連結
export const getSocialLinks = () =>
  SOCIAL_LINKS.filter(link => link.type === 'social');

export const getContactLinks = () =>
  SOCIAL_LINKS.filter(link => link.type === 'contact');

// 取得單一連結
export const getLinkByName = (name: string) =>
  SOCIAL_LINKS.find(link => link.name.toLowerCase() === name.toLowerCase());

// 常用連結快速存取
export const LINKS = {
  instagram: SOCIAL_LINKS[0],
  threads: SOCIAL_LINKS[1],
  line: SOCIAL_LINKS[2],
  email: SOCIAL_LINKS[3]
} as const;
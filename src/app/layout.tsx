import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('網站資訊');
  const locale = await getLocale();

  return {
    title: {
      default: t('網站標題'),
      template: `%s | ${t('網站標題')}`
    },
    description: t('網站描述'),
    keywords: 'APP開發, 網頁設計, 網站架設, AI串接, SEO優化, PTalk, 技術服務, 軟體開發',
    authors: [{ name: 'PTalk Team' }],
    creator: 'PTalk',
    publisher: 'PTalk',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://ptalkservicesweb.vercel.app/'),
    alternates: {
      canonical: '/',
      languages: {
        'zh-TW': '/zh-TW',
        'en': '/en',
        'ja': '/ja',
      },
    },
    openGraph: {
      title: t('網站標題'),
      description: t('網站描述'),
      url: 'https://ptalkservicesweb.vercel.app/',
      siteName: 'PTalk',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t('網站標題'),
        }
      ],
      locale: locale === 'zh-TW' ? 'zh_TW' : locale === 'ja' ? 'ja_JP' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('網站標題'),
      description: t('網站描述'),
      images: ['/og-image.png'],
      creator: '@ptalk',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
      yahoo: 'yahoo-verification-code',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

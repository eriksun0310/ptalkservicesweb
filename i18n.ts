import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export type Locale = 'zh-TW' | 'en';

export const locales: Locale[] = ['zh-TW', 'en'];
export const defaultLocale: Locale = 'zh-TW';

async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const headersList = await headers();

  const cookieLocale = cookieStore.get('locale')?.value as Locale | undefined;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = headersList.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase();

    if (preferredLocale === 'zh') return 'zh-TW';
    if (preferredLocale === 'en') return 'en';
  }

  return defaultLocale;
}

export default getRequestConfig(async () => {
  const locale = await getLocale();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
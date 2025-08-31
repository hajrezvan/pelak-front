import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function GetLocale(cookieStore: ReadonlyRequestCookies): Promise<string> {
  try {
    // Get locale from cookies
    const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
    if (localeCookie && ['en', 'ru', 'ar', 'fa'].includes(localeCookie)) {
      return localeCookie;
    }

    // Get locale from environment variable
    const envLocale = process.env.NEXT_LOCALE;
    if (envLocale && ['en', 'ru', 'ar', 'fa'].includes(envLocale)) {
      return envLocale;
    }

    // Fallback to default locale
    return "en";
  } catch (error) {
    // If cookies() fails, fallback to environment variable or default
    const envLocale = process.env.NEXT_LOCALE;
    if (envLocale && ['en', 'ru', 'ar', 'fa'].includes(envLocale)) {
      return envLocale;
    }
    return "en";
  }
}
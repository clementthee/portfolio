import type { Locale, LocalizedString, LocalizedStringArray } from '@/types/portfolio';

export function pickLocalized(value: LocalizedString, locale: Locale): string {
  return value[locale];
}

export function pickLocalizedArray(value: LocalizedStringArray, locale: Locale): string[] {
  return value[locale];
}

export function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'es';

  const stored = localStorage.getItem('portfolio-lang');
  if (stored === 'es' || stored === 'en') return stored;

  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');
  if (queryLang === 'es' || queryLang === 'en') return queryLang;

  return 'es';
}

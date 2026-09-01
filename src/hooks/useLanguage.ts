import { useEffect, useState } from 'react';
import type { Locale } from '@/types/portfolio';
import { getLocale, subscribe } from '@/stores/language';
import { ui, type UiKey } from '@/data/i18n';

export function useLanguage() {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window !== 'undefined' ? getLocale() : 'es',
  );

  useEffect(() => subscribe(setLocaleState), []);

  function t(key: UiKey): string {
    return ui[key][locale];
  }

  return { locale, t };
}

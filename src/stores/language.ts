import type { Locale } from '@/types/portfolio';
import { getInitialLocale } from '@/utils/localize';

const STORAGE_KEY = 'portfolio-lang';

type Listener = (locale: Locale) => void;

let locale: Locale = 'es';
const listeners = new Set<Listener>();

if (typeof window !== 'undefined') {
  locale = getInitialLocale();
  document.documentElement.lang = locale;
}

export function getLocale(): Locale {
  return locale;
}

export function setLocale(next: Locale): void {
  if (next === locale) return;

  locale = next;
  localStorage.setItem(STORAGE_KEY, next);
  document.documentElement.lang = next;

  listeners.forEach((listener) => listener(next));
}

export function toggleLocale(): Locale {
  const next: Locale = locale === 'es' ? 'en' : 'es';
  setLocale(next);
  return next;
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function initLanguageFromStorage(): void {
  if (typeof window === 'undefined') return;
  locale = getInitialLocale();
  document.documentElement.lang = locale;
}

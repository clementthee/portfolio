import { toggleLocale, getLocale } from '@/stores/language';
import { useLanguage } from '@/hooks/useLanguage';

export default function LangToggle() {
  const { locale, t } = useLanguage();
  const active = locale === 'es' ? 'ES' : 'EN';

  return (
    <button
      type="button"
      onClick={() => toggleLocale()}
      className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
      aria-label={t('langToggleAria')}
      title={getLocale() === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className={locale === 'es' ? 'text-cyan-400' : 'text-zinc-500'}>ES</span>
      <span className="text-zinc-600">/</span>
      <span className={locale === 'en' ? 'text-cyan-400' : 'text-zinc-500'}>EN</span>
      <span className="sr-only">{active}</span>
    </button>
  );
}

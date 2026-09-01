import { portfolioData } from '@/data/portfolioData';
import CopyEmailButton from '@/components/CopyEmailButton';
import HeroTerminal from '@/components/HeroTerminal';
import { useLanguage } from '@/hooks/useLanguage';
import { pickLocalized } from '@/utils/localize';

export default function HeroSection() {
  const { personal, hero } = portfolioData;
  const { locale, t } = useLanguage();
  const summary = pickLocalized(hero.summary, locale);
  const availability = pickLocalized(hero.availability, locale);

  return (
    <section className="mb-24 pt-8">
      <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="card-surface overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-900/80 px-4 py-3">
            <span className="size-3 rounded-full bg-red-500/80" />
            <span className="size-3 rounded-full bg-yellow-500/80" />
            <span className="size-3 rounded-full bg-emerald-500/80" />
            <span className="font-code ml-2 text-xs text-zinc-500">~/hector-clemente</span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-code text-xs text-emerald-400/90">{availability}</span>
            </div>

            <p className="mb-3 font-code text-sm text-cyan-500/80">
              <span className="text-zinc-600">const</span> developer = {'{'}
            </p>

            <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              <span className="text-cyan-500/70">&quot;</span>
              {personal.name}
              <span className="text-cyan-500/70">&quot;</span>
            </h1>

            <p className="mb-6 font-code text-base text-cyan-400 sm:text-lg">
              role: <span className="text-zinc-300">&quot;{personal.title}&quot;</span>,
            </p>

            <p className="mb-8 text-base leading-relaxed text-zinc-400 sm:text-lg">{summary}</p>

            <p className="mb-8 font-code text-sm text-zinc-600">
              location: &quot;{personal.location}&quot; {'}'};
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#proyectos" className="btn-primary">
                {t('viewProjects')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="#contacto" className="btn-secondary">
                {t('contactCta')}
              </a>
              <CopyEmailButton email={personal.email} />
            </div>
          </div>
        </div>

        <HeroTerminal />
      </div>
    </section>
  );
}

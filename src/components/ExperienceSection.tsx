import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/hooks/useLanguage';
import { pickLocalizedArray } from '@/utils/localize';

function isCurrentRole(period: string): boolean {
  return /present/i.test(period);
}

export default function ExperienceSection() {
  const { experience } = portfolioData;
  const { locale, t } = useLanguage();

  return (
    <section id="experiencia" className="mb-24 scroll-mt-24">
      <h2 className="section-heading">{t('sectionExperience')}</h2>

      <div className="relative">
        <div
          className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-transparent sm:left-[11px]"
          aria-hidden="true"
        />

        <ol className="space-y-10">
          {experience.map((job) => {
            const isCurrent = isCurrentRole(job.period);
            const achievements = pickLocalizedArray(job.achievements, locale);

            return (
              <li key={job.company} className="relative pl-8 sm:pl-10">
                <div
                  className={`absolute top-1.5 left-0 flex size-[15px] items-center justify-center rounded-full border-2 bg-zinc-950 sm:size-[23px] ${isCurrent ? 'border-emerald-500/60' : 'border-cyan-500/50'}`}
                  aria-hidden="true"
                >
                  <div className={`size-1.5 rounded-full sm:size-2 ${isCurrent ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
                </div>

                <article className="card-surface p-5 sm:p-6">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-zinc-100">{job.role}</h3>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-xs text-emerald-400">
                            <span aria-hidden="true">🟢</span>
                            {t('presentBadge')}
                          </span>
                        )}
                      </div>
                      <p className="font-code text-sm text-cyan-400">{job.company}</p>
                    </div>
                    <div className="flex flex-col gap-0.5 sm:items-end sm:text-right">
                      <time className="font-code text-xs text-zinc-500">{job.period}</time>
                      <span className="font-code text-xs text-zinc-600">{job.location}</span>
                    </div>
                  </div>

                  <ul className="mb-5 space-y-2">
                    {achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2 text-sm leading-relaxed text-zinc-400">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan-500/50" aria-hidden="true" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.keyTechnologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

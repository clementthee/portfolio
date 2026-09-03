import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/hooks/useLanguage';
import { pickLocalized } from '@/utils/localize';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const { locale, t } = useLanguage();
  const showWipBanner = projects.length <= 1;

  return (
    <section id="proyectos" className="mb-24 scroll-mt-24">
      <h2 className="section-heading">{t('sectionProjects')}</h2>

      <div className="grid gap-6">
        {featuredProjects.length > 0 && (
          <div className={`grid gap-6 ${featuredProjects.length > 1 ? 'md:grid-cols-2' : ''}`}>
            {featuredProjects.map((project) => {
              const description = pickLocalized(project.description, locale);
              const hackathon = project.hackathon ? pickLocalized(project.hackathon, locale) : null;

              return (
                <article
                  key={project.title}
                  className="group card-surface relative overflow-hidden border-violet-500/15 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
                >
                  <div
                    className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-violet-500/5 blur-3xl transition-all duration-500 group-hover:bg-violet-500/10"
                    aria-hidden="true"
                  />

                  <div className="relative flex h-full flex-col p-6 sm:p-8">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className="font-code text-xs text-violet-400/80">{t('hackathonLabel')}</span>
                          {hackathon && (
                            <span className="inline-flex items-center rounded-full border border-violet-500/25 bg-violet-500/10 px-2.5 py-0.5 font-mono text-xs text-violet-300">
                              {hackathon}
                            </span>
                          )}
                        </div>
                        <h3 className="font-code text-2xl font-semibold text-zinc-100 transition-colors group-hover:text-violet-300 sm:text-3xl">
                          {project.title}
                        </h3>
                      </div>

                      {project.repository && (
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-btn shrink-0"
                          aria-label={`${t('viewRepoAria')} ${project.title}`}
                        >
                          <GithubIcon />
                        </a>
                      )}
                    </div>

                    <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400 sm:text-base">{description}</p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary mt-auto w-fit text-xs sm:text-sm"
                      >
                        <GithubIcon size={16} />
                        {t('viewOnGithub')}
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => {
              const description = pickLocalized(project.description, locale);

              return (
                <article
                  key={project.title}
                  className="group card-surface flex h-full flex-col p-6 hover:border-white/12 sm:p-8"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <h3 className="font-code text-lg font-semibold text-zinc-100 transition-colors group-hover:text-cyan-400">
                      {project.title}
                    </h3>
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-btn shrink-0"
                        aria-label={`${t('viewRepoAria')} ${project.title}`}
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>
                  <p className="mb-4 flex-1 text-sm text-zinc-400">{description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary mt-auto w-fit text-xs"
                    >
                      {t('viewOnGithub')}
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {showWipBanner && (
          <div className="flex items-center gap-3 rounded-lg border border-dashed border-white/8 bg-zinc-900/30 px-5 py-4">
            <span className="font-code text-xs text-zinc-600">//</span>
            <p className="font-code text-xs text-zinc-500 sm:text-sm">{t('upcomingProjects')}</p>
          </div>
        )}
      </div>
    </section>
  );
}

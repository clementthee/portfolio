import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/hooks/useLanguage';
import { pickLocalized } from '@/utils/localize';

const categoryIcons: Record<string, { icon: string; accent: string }> = {
  Lenguajes: {
    accent: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  },
  Languages: {
    accent: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  },
  'Backend & APIs': {
    accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    icon: 'M4 7h16M4 12h16M4 17h10M8 7v10',
  },
  'Cloud & DevOps': {
    accent: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    icon: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
  },
  'Bases de Datos': {
    accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    icon: 'M12 2C8 2 4 3 4 6v12c0 3 4 4 8 4s8-1 8-4V6c0-3-4-4-8-4z M4 6c0 1.5 3 3 8 3s8-1.5 8-3 M4 12c0 1.5 3 3 8 3s8-1.5 8-3',
  },
  Databases: {
    accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    icon: 'M12 2C8 2 4 3 4 6v12c0 3 4 4 8 4s8-1 8-4V6c0-3-4-4-8-4z M4 6c0 1.5 3 3 8 3s8-1.5 8-3 M4 12c0 1.5 3 3 8 3s8-1.5 8-3',
  },
};

function getCategoryMeta(category: string) {
  return (
    categoryIcons[category] ?? {
      accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    }
  );
}

export default function SkillsSection() {
  const { skills } = portfolioData;
  const { locale, t } = useLanguage();

  return (
    <section id="habilidades" className="mb-24 scroll-mt-24">
      <h2 className="section-heading">{t('sectionSkills')}</h2>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
        {skills.map((group) => {
          const category = pickLocalized(group.category, locale);
          const meta = getCategoryMeta(category);

          return (
            <article key={category} className="group card-surface p-5 hover:border-white/12 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex size-10 items-center justify-center rounded-lg border ${meta.accent}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={meta.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-100">{category}</h3>
                    <p className="font-code text-xs text-zinc-600">
                      {group.skills.length} {t('technologiesCount')}
                    </p>
                  </div>
                </div>
                <span className="font-code text-xs text-zinc-700 transition-colors group-hover:text-cyan-500/50">
                  [{group.skills.length}]
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

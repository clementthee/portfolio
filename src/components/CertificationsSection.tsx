import { portfolioData } from '@/data/portfolioData';
import type { Certification } from '@/types/portfolio';
import { useLanguage } from '@/hooks/useLanguage';

const issuerStyles: Record<string, string> = {
  Google: 'border-blue-500/25 bg-blue-500/10 text-blue-300',
  'Georgia Tech': 'border-yellow-500/25 bg-yellow-500/10 text-yellow-300',
  IBM: 'border-sky-500/25 bg-sky-500/10 text-sky-300',
  'EF SET': 'border-violet-500/25 bg-violet-500/10 text-violet-300',
};

function getIssuerStyle(issuer: string): string {
  return issuerStyles[issuer] ?? 'border-cyan-500/25 bg-cyan-500/10 text-cyan-300';
}

function isStandaloneCert(cert: Certification): boolean {
  return !cert.modules || cert.modules.length === 0;
}

export default function CertificationsSection() {
  const { certifications } = portfolioData;
  const { t } = useLanguage();

  return (
    <section id="certificaciones" className="mb-24 scroll-mt-24">
      <h2 className="section-heading">{t('sectionCertifications')}</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.filter(isStandaloneCert).map((cert) => (
          <article key={cert.title} className="card-surface flex h-full flex-col p-5 sm:p-6">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className={`inline-flex rounded-full border px-2.5 py-0.5 font-mono text-xs ${getIssuerStyle(cert.issuer)}`}>
                {cert.issuer}
              </span>
              {cert.badge && (
                <span className="tech-pill border-violet-500/20 bg-violet-500/5 text-violet-300">{cert.badge}</span>
              )}
            </div>

            <h3 className="mb-4 flex-1 text-base font-semibold leading-snug text-zinc-100 sm:text-lg">{cert.title}</h3>

            {cert.credentialUrl && (
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-fit text-xs sm:text-sm">
                {t('verifyCredential')}
              </a>
            )}
          </article>
        ))}
      </div>

      {certifications
        .filter((cert) => cert.modules && cert.modules.length > 0)
        .map((group) => (
          <div key={group.title} className="mt-6">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className={`inline-flex rounded-full border px-2.5 py-0.5 font-mono text-xs ${getIssuerStyle(group.issuer)}`}>
                {group.issuer}
              </span>
              {group.badge && <span className="tech-pill">{group.badge}</span>}
              <h3 className="font-code text-sm text-zinc-300">{group.title}</h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {group.modules!.map((module) => (
                <article key={module.title} className="card-surface flex flex-col gap-3 p-4 sm:p-5">
                  <p className="text-sm leading-snug text-zinc-300">{module.title}</p>
                  {module.credentialUrl && (
                    <a href={module.credentialUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-fit text-xs">
                      {t('verifyCredential')}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
}

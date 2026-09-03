import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/hooks/useLanguage';

export default function ContactSection() {
  const { personal } = portfolioData;
  const { t } = useLanguage();

  return (
    <section id="contacto" className="scroll-mt-24">
      <h2 className="section-heading">{t('sectionContact')}</h2>

      <div className="card-surface overflow-hidden">
        <div className="border-b border-white/5 bg-zinc-900/80 px-6 py-4 sm:px-8">
          <p className="font-code text-xs text-zinc-500">{t('contactSubtitle')}</p>
          <h3 className="mt-1 text-xl font-semibold text-zinc-100 sm:text-2xl">{t('contactHeading')}</h3>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/5 bg-zinc-950/50 p-4">
              <p className="mb-1 font-code text-xs text-zinc-600">{t('emailLabel')}</p>
              <a href={`mailto:${personal.email}`} className="text-sm text-cyan-400 transition-colors hover:text-cyan-300 sm:text-base">
                {personal.email}
              </a>
            </div>

            {personal.social.whatsapp && (
              <a
                href={personal.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 transition-all duration-200 hover:border-emerald-400/40 hover:bg-emerald-500/10"
              >
                <p className="mb-1 font-code text-xs text-emerald-500/70">{t('whatsappLabel')}</p>
                <p className="flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors group-hover:text-emerald-300 sm:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t('chatWhatsapp')}
                </p>
              </a>
            )}

            <div className="rounded-lg border border-white/5 bg-zinc-950/50 p-4 sm:col-span-2">
              <p className="mb-1 font-code text-xs text-zinc-600">{t('locationLabel')}</p>
              <p className="flex items-center gap-2 text-sm text-zinc-300 sm:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-500" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {t('contactLocation')}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`mailto:${personal.email}`} className="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {t('sendEmail')}
            </a>

            {personal.social.whatsapp && (
              <a href={personal.social.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-400 transition-all duration-200 hover:border-emerald-400/50 hover:bg-emerald-500/20 hover:text-emerald-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            )}

            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              {t('viewCv')}
            </a>
          </div>

          <div className="border-t border-white/5 pt-6">
            <p className="mb-3 font-code text-xs text-zinc-600">{t('socialLinks')}</p>
            <div className="flex flex-wrap gap-3">
              {personal.social.linkedin && (
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                  LinkedIn
                </a>
              )}
              {personal.social.github && (
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                  GitHub
                </a>
              )}
              {personal.social.youtube && (
                <a href={personal.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                  {t('watchYoutube')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

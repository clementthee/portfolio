import type { Locale } from '@/types/portfolio';

const strings = {
  navExperience: { es: 'Experiencia', en: 'Experience' },
  navProjects: { es: 'Proyectos', en: 'Projects' },
  navSkills: { es: 'Habilidades', en: 'Skills' },
  navCertifications: { es: 'Certificaciones', en: 'Certifications' },
  navContact: { es: 'Contacto', en: 'Contact' },
  navHome: { es: 'Inicio — Hector Clemente', en: 'Home — Hector Clemente' },
  downloadCv: { es: 'Descargar CV', en: 'Download Resume' },
  cvShort: { es: 'CV', en: 'CV' },

  sectionExperience: { es: '01 — Experiencia', en: '01 — Experience' },
  sectionProjects: { es: '02 — Proyectos', en: '02 — Projects' },
  sectionSkills: { es: '03 — Habilidades', en: '03 — Skills' },
  sectionCertifications: { es: '04 — Certificaciones', en: '04 — Certifications' },
  sectionContact: { es: '05 — Contacto', en: '05 — Contact' },

  presentBadge: { es: 'Present', en: 'Present' },
  viewProjects: { es: 'Ver Proyectos', en: 'View Projects' },
  contactCta: { es: 'Contactar', en: 'Get in Touch' },

  hackathonLabel: { es: '🏆 hackathon project', en: '🏆 hackathon project' },
  viewOnGithub: { es: 'Ver en GitHub', en: 'View on GitHub' },
  viewRepoAria: { es: 'Ver repositorio de', en: 'View repository for' },
  upcomingProjects: { es: 'Próximos proyectos en desarrollo...', en: 'Upcoming projects in development...' },

  technologiesCount: { es: 'tecnologías', en: 'technologies' },
  verifyCredential: { es: 'Verificar Credencial ↗', en: 'Verify Credential ↗' },

  contactSubtitle: { es: "// let's connect", en: "// let's connect" },
  contactHeading: {
    es: '¿Tienes un proyecto o oportunidad?',
    en: 'Have a project or opportunity in mind?',
  },
  emailLabel: { es: 'email', en: 'email' },
  whatsappLabel: { es: 'whatsapp', en: 'whatsapp' },
  locationLabel: { es: 'location', en: 'location' },
  chatWhatsapp: { es: 'Chatear por WhatsApp', en: 'Chat on WhatsApp' },
  sendEmail: { es: 'Enviar correo', en: 'Send Email' },
  viewCv: { es: 'Ver CV actualizado', en: 'View Updated Resume' },
  socialLinks: { es: 'social_links', en: 'social_links' },
  watchYoutube: { es: 'YouTube', en: 'YouTube' },
  navYoutube: { es: 'Canal de YouTube', en: 'YouTube Channel' },
  contactLocation: { es: 'Villa Nueva, Guatemala', en: 'Villa Nueva, Guatemala' },

  footerBuilt: {
    es: 'Built with Astro, React & Tailwind CSS.',
    en: 'Built with Astro, React & Tailwind CSS.',
  },
  footerStatus: { es: '🟢 All systems operational', en: '🟢 All systems operational' },

  langToggle: { es: 'ES', en: 'EN' },
  langToggleAria: { es: 'Cambiar idioma a inglés', en: 'Switch language to Spanish' },

  terminalSession: {
    es: 'Hyprland session · portfolio shell v1.0',
    en: 'Hyprland session · portfolio shell v1.0',
  },
  terminalHint: {
    es: 'escribe "help" o haz clic en un comando para comenzar.',
    en: 'type "help" or click a command below to begin.',
  },
  terminalInputAria: { es: 'Entrada de comando de terminal', en: 'Terminal command input' },
  terminalHelpTitle: { es: 'Comandos disponibles:', en: 'Available commands:' },
  terminalHelpHelp: { es: '  help    — muestra este mensaje', en: '  help    — show this message' },
  terminalHelpSkills: { es: '  skills  — lista tecnologías clave', en: '  skills  — list key technologies' },
  terminalHelpExp: { es: '  exp     — experiencia reciente', en: '  exp     — recent work experience' },
  terminalHelpContact: { es: '  contact — email y redes sociales', en: '  contact — email & social links' },
  terminalHelpClear: { es: '  clear   — limpiar la terminal', en: '  clear   — clear terminal output' },
  terminalCmdNotFound: { es: 'comando no encontrado:', en: 'command not found:' },
  terminalTypeHelp: { es: 'escribe "help" para ver comandos disponibles', en: 'type "help" for available commands' },
  terminalWhatsappAvailable: { es: 'disponible', en: 'available' },
} as const satisfies Record<string, Record<Locale, string>>;

export type UiKey = keyof typeof strings;

export const ui: Record<UiKey, Record<Locale, string>> = strings;

export function getUi(locale: Locale, key: UiKey): string {
  return ui[key][locale];
}

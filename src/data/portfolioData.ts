import type { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Hector Clemente Martínez Pérez',
    title: 'Software Engineer Backend & Data Pipelines',
    location: 'Guatemala',
    email: 'clementthee@gmail.com',
    phone: '(+502) 3693-9072',
    portfolio: 'https://clementthee.com',
    social: {
      github: 'https://github.com/clementthee',
      linkedin: 'https://www.linkedin.com/in/hector-clemente-martinez-perez/',
      whatsapp:
        'https://wa.me/50236939072?text=Hola%20Hector,%20vi%20tu%20portafolio%20y%20me%20gustaria%20conversar%20contigo.',
      youtube: 'https://www.youtube.com/@hector.techandrides',
    },
  },
  hero: {
    availability: {
      es: 'Open for Backend & Platform opportunities',
      en: 'Open for Backend & Platform opportunities',
    },
    summary: {
      es: 'Ingeniero de software enfocado en diseño de sistemas, APIs REST/GraphQL, arquitecturas escalables y diagnóstico de logs para resolver incidencias de plataforma con precisión técnica.',
      en: 'Software engineer focused on systems design, REST/GraphQL APIs, scalable architectures, and log diagnostics to resolve platform incidents with technical precision.',
    },
  },
  experience: [
    {
      company: 'monday.com',
      role: 'Technical Support Engineer (TSE)',
      period: '2025 - Present',
      location: 'Remote',
      achievements: {
        es: [
          'Diagnóstico y resolución de incidencias en la plataforma monday.com',
          'Análisis de logs con herramientas de AI para identificar causas raíz',
          'Integración y consumo de APIs REST y GraphQL',
          'Trabajo con entornos containerizados en Docker',
        ],
        en: [
          'Diagnosed and resolved incidents on the monday.com platform',
          'Performed AI-powered log analysis to identify root causes',
          'Integrated and consumed REST and GraphQL APIs',
          'Worked with containerized environments using Docker',
        ],
      },
      keyTechnologies: ['REST', 'GraphQL', 'Docker', 'AI', 'Log Analysis'],
    },
    {
      company: 'Capgemini',
      role: 'Data Analyst',
      period: '2024 - 2025',
      location: 'Remote',
      achievements: {
        es: [
          'Desarrollo de data pipelines en R y SQL',
          'Creación de dashboards en Tableau y Looker',
          'Resolución de discrepancias y validación de integridad de datos',
        ],
        en: [
          'Built data pipelines in R and SQL',
          'Created dashboards in Tableau and Looker',
          'Resolved data discrepancies and validated data integrity',
        ],
      },
      keyTechnologies: ['R', 'SQL', 'Tableau', 'Looker', 'Data Pipelines'],
    },
    {
      company: 'ecobee',
      role: 'Technical Support Specialist',
      period: '2021 - 2024',
      location: 'Remote',
      achievements: {
        es: [
          'Soporte técnico de ecosistemas IoT (termostatos y sensores inteligentes)',
          'Diagnóstico de problemas hardware-software en dispositivos conectados',
          'Escalamiento y documentación de incidencias complejas',
        ],
        en: [
          'Provided technical support for IoT ecosystems (smart thermostats and sensors)',
          'Diagnosed hardware-software issues on connected devices',
          'Escalated and documented complex incidents',
        ],
      },
      keyTechnologies: ['IoT', 'Hardware Diagnostics', 'Customer Support'],
    },
  ],
  projects: [
    {
      title: 'aura-engine',
      description: {
        es: "Proyecto desarrollado para la hackatón 'The Next Craft'. Engine/plataforma enfocada en arquitectura moderna con integraciones de AI.",
        en: "Project built for 'The Next Craft' hackathon. Engine/platform focused on modern architecture with AI integrations.",
      },
      technologies: ['Next.js', 'TypeScript', 'Convex', 'React', 'Tailwind CSS', 'OpenRouter', 'Clerk'],
      repository: 'https://github.com/jordidimass/auraengine',
      featured: true,
      hackathon: {
        es: 'The Next Craft Hackathon — Participant',
        en: 'The Next Craft Hackathon — Participant',
      },
    },
    {
      title: 'hyprland-dotfiles',
      description: {
        es: 'Dotfiles personales para entorno Hyprland en Arch Linux: configuración de ventanas, barra de estado y tema coherente.',
        en: 'Personal dotfiles for a Hyprland setup on Arch Linux: window management, status bar, and cohesive theming.',
      },
      technologies: ['Hyprland', 'Arch Linux', 'Waybar', 'Kitty', 'CSS'],
      repository: 'https://github.com/clementthee/hyprland-dotfiles',
      featured: false,
    },
  ],
  education: [
    {
      institution: 'INTECAP',
      degree: 'Full Stack Web Development & Cloud Deploy',
      status: 'completed',
    },
  ],
  certifications: [
    {
      title: 'EF SET English Certificate',
      issuer: 'EF SET',
      badge: 'C2 Proficient (72/100)',
      credentialUrl: 'https://cert.efset.org/SBre7w',
    },
    {
      title: 'Supply Chain Principles',
      issuer: 'Georgia Tech',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/6HQBJH8L6VFS',
    },
    {
      title: 'Google Data Analytics Specialization',
      issuer: 'Google',
      badge: 'Professional Certificate',
      modules: [
        {
          title: 'Foundations: Data, Data, Everywhere',
          issuer: 'Google',
          credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/4R5Q5TXAXBPE',
        },
        {
          title: 'Ask Questions to Make Data-Driven Decisions',
          issuer: 'Google',
          credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/WNZA3ZYYPFNK',
        },
        {
          title: 'Prepare Data for Exploration',
          issuer: 'Google',
          credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/1MMKME874A5K',
        },
        {
          title: 'Process Data from Dirty to Clean',
          issuer: 'Google',
          credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/O6PMDTB9R33H',
        },
        {
          title: 'Analyze Data to Answer Questions',
          issuer: 'Google',
          credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/BAR10B2K98PF',
        },
        {
          title: 'Share Data Through the Art of Visualization',
          issuer: 'Google',
          credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/748MBI7HYB87',
        },
      ],
    },
    {
      title: 'Excel Basics for Data Analysis',
      issuer: 'IBM',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/74GQ7GXXWF3D',
    },
  ],
  skills: [
    {
      category: { es: 'Lenguajes', en: 'Languages' },
      skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'PHP', 'R'],
    },
    {
      category: { es: 'Backend & APIs', en: 'Backend & APIs' },
      skills: ['REST', 'GraphQL', 'Node.js', 'Webhooks', 'Microservices'],
    },
    {
      category: { es: 'Cloud & DevOps', en: 'Cloud & DevOps' },
      skills: ['AWS (Lambda, DynamoDB, API Gateway)', 'Docker', 'Git', 'Linux'],
    },
    {
      category: { es: 'Bases de Datos', en: 'Databases' },
      skills: ['PostgreSQL', 'MySQL', 'BigQuery'],
    },
  ],
};

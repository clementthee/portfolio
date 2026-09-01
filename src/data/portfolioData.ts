import type { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Hector Clemente Martínez Pérez',
    title: 'Software Engineer Backend & Data Pipelines',
    location: 'Guatemala',
    email: 'clementthee@gmail.com',
    phone: '(+502) 3693-9072',
    portfolio: 'https://github.com/clementthee/portfolio',
    social: {
      github: 'https://github.com/clementthee',
      linkedin: 'https://www.linkedin.com/in/hector-clemente-martinez-perez/',
      whatsapp:
        'https://wa.me/50236939072?text=Hola%20Hector,%20vi%20tu%20portafolio%20y%20me%20gustaria%20conversar%20contigo.',
    },
  },
  experience: [
    {
      company: 'monday.com',
      role: 'Technical Support Engineer (TSE)',
      period: '2025 - Present',
      location: 'Remote',
      achievements: [
        'Diagnóstico y resolución de incidencias en la plataforma monday.com',
        'Análisis de logs con herramientas de AI para identificar causas raíz',
        'Integración y consumo de APIs REST y GraphQL',
        'Trabajo con entornos containerizados en Docker',
      ],
      keyTechnologies: ['REST', 'GraphQL', 'Docker', 'AI', 'Log Analysis'],
    },
    {
      company: 'Capgemini',
      role: 'Data Analyst',
      period: '2024 - 2025',
      location: 'Remote',
      achievements: [
        'Desarrollo de data pipelines en R y SQL',
        'Creación de dashboards en Tableau y Looker',
        'Resolución de discrepancias y validación de integridad de datos',
      ],
      keyTechnologies: ['R', 'SQL', 'Tableau', 'Looker', 'Data Pipelines'],
    },
    {
      company: 'ecobee',
      role: 'Technical Support Specialist',
      period: '2021 - 2024',
      location: 'Remote',
      achievements: [
        'Soporte técnico de ecosistemas IoT (termostatos y sensores inteligentes)',
        'Diagnóstico de problemas hardware-software en dispositivos conectados',
        'Escalamiento y documentación de incidencias complejas',
      ],
      keyTechnologies: ['IoT', 'Hardware Diagnostics', 'Customer Support'],
    },
  ],
  projects: [
    {
      title: 'aura-engine',
      description:
        "Proyecto desarrollado para la hackatón 'The Next Craft'. Engine/plataforma enfocada en arquitectura moderna con integraciones de AI.",
      technologies: ['Next.js', 'TypeScript', 'Convex', 'React', 'Tailwind CSS', 'OpenRouter', 'Clerk'],
      repository: 'https://github.com/jordidimass/auraengine',
      featured: true,
      hackathon: 'The Next Craft Hackathon — Participant',
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
      category: 'Lenguajes',
      skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'PHP', 'R'],
    },
    {
      category: 'Backend & APIs',
      skills: ['REST', 'GraphQL', 'Node.js', 'Webhooks', 'Microservicios'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS (Lambda, DynamoDB, API Gateway)', 'Docker', 'Git', 'Linux'],
    },
    {
      category: 'Bases de Datos',
      skills: ['PostgreSQL', 'MySQL', 'BigQuery'],
    },
  ],
};

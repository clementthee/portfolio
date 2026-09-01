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
      title: 'transparencia-gt',
      description:
        'Aplicación web de código abierto para analizar datos de contrataciones públicas y redes de contratistas en Guatemala.',
      technologies: ['Astro', 'React', 'Docker', 'TypeScript', 'Python'],
      repository: 'https://github.com/clementthee/transparencia-gt',
      featured: true,
    },
  ],
  education: [
    {
      institution: 'INTECAP',
      degree: 'Full Stack Web Development & Cloud Deploy',
      status: 'completed',
    },
    {
      institution: 'Georgia Tech',
      degree: 'Supply Chain Management',
      status: 'certification',
    },
    {
      institution: 'Google',
      degree: 'Google Data Analytics Professional Certificate',
      status: 'certification',
    },
    {
      institution: 'EF SET',
      degree: 'EF SET English Certificate — C1 Advanced',
      status: 'certification',
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

export type Locale = 'es' | 'en';

export interface LocalizedString {
  es: string;
  en: string;
}

export interface LocalizedStringArray {
  es: string[];
  en: string[];
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  whatsapp?: string;
}

export interface PersonalDetails {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  portfolio?: string;
  social: SocialLinks;
}

export interface HeroContent {
  availability: LocalizedString;
  summary: LocalizedString;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: LocalizedStringArray;
  keyTechnologies: string[];
}

export interface Project {
  title: string;
  description: LocalizedString;
  technologies: string[];
  repository?: string;
  demo?: string;
  featured: boolean;
  hackathon?: LocalizedString;
}

export interface Education {
  institution: string;
  degree: string;
  period?: string;
  status: 'completed' | 'in-progress' | 'certification';
}

export interface CertificationModule {
  title: string;
  issuer: string;
  credentialUrl?: string;
  date?: string;
  badge?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  credentialUrl?: string;
  date?: string;
  badge?: string;
  modules?: CertificationModule[];
}

export interface SkillCategory {
  category: LocalizedString;
  skills: string[];
}

export interface PortfolioData {
  personal: PersonalDetails;
  hero: HeroContent;
  experience: WorkExperience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  skills: SkillCategory[];
}

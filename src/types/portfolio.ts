export interface SocialLinks {
  github?: string;
  linkedin?: string;
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

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  keyTechnologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repository?: string;
  demo?: string;
  featured: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period?: string;
  status: 'completed' | 'in-progress' | 'certification';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  personal: PersonalDetails;
  experience: WorkExperience[];
  projects: Project[];
  education: Education[];
  skills: SkillCategory[];
}

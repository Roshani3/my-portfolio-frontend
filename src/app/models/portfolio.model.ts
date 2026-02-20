export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  icon: string;
  proficiency: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  techUsed: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  link?: string;
  github?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
}

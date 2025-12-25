
export interface Project {
  title: string;
  description: string[];
  link?: string;
  github?: string;
  images: string[];
  tech: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  certificateLink?: string;
  trainingLink?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Certification {
  name: string;
  provider: string;
  year: string;
  description: string;
  link?: string;
}
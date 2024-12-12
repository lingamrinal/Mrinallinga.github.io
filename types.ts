export interface CardProps {
  icon: React.ElementType;
  title: string;
  description?: string;
  skills?: string[];
  tools?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface ProjectItem {
  icon: React.ElementType;
  title: string;
  description: string;
  tools: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  timeline: string;
  focusAreas: string[];
}
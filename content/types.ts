export interface ExperienceItem { 
  role: string; 
  company: string;
  location?: string;
  type?: string;
  start: string; 
  end?: string; 
  impacts: string[]; 
  stack: string[]; 
}

export interface ProjectItem { 
  name: string; 
  slug: string; 
  summary: string; 
  stack: string[]; 
  outcomes: string[]; 
  tags: string[]; 
  status?: 'wip' | 'live'; 
}

export interface Achievement { 
  title: string; 
  subtitle?: string; 
  metric?: string; 
  icon?: string; 
  year?: number; 
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface WritingItem {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  readTime?: number;
} 
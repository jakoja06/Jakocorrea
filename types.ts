export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  date: string;
  role: string;
  details: {
    challenge: string;
    solution: string;
    result: string;
  };
  specs?: Record<string, string>;
  links?: {
    github?: string;
    cad?: string;
    demo?: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export enum Section {
  HOME = 'home',
  PROJECTS = 'projects',
  ABOUT = 'about',
  RESUME = 'resume',
}
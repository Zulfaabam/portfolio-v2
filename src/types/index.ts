export interface Project {
  id: number;
  created_at: string;
  title: string;
  description: string;
  image: string;
  github_url: string;
  live_url: string;
  is_featured: boolean;
  tech_stack: TechStack[];
}

export interface TechStack {
  id: number;
  tech_stack: TechStack2;
}

export interface TechStack2 {
  name: string;
}

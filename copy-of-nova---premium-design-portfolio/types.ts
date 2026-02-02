
export type ProjectCategory = 'All' | 'E-commerce A+' | 'Social Media' | 'Print Media' | 'Logos' | 'Thumbnails';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  description?: string;
}

export interface Skill {
  name: string; level: number; icon?: string;
}

export interface Experience {
  id: string; year: string; role: string; company: string; description: string;
}

export interface NavItem {
  label: string; href: string; type?: 'link' | 'view';
}

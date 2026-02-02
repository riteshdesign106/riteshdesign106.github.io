import { NavItem, Experience, Project } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', type: 'view' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: 'portfolio', type: 'view' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    year: '2024 - 2025',
    role: 'Freelance Graphic Designer',
    company: 'Self-Employed',
    description: 'Creating high-impact social media posts, e-commerce A+ content, and digital marketing assets for diverse clients.',
  }
];

export const ALL_PROJECTS: Project[] = [
  // E-commerce A+ (Updated with new user links)
  { id: 'e1', title: 'Premium Skincare Set', category: 'E-commerce A+', imageUrl: 'https://i.ibb.co/JNczMhq/1770008435152.jpg' },
  { id: 'e2', title: 'Smart Home Hub Layout', category: 'E-commerce A+', imageUrl: 'https://i.ibb.co/tTBBnsYs/1770008435168.jpg' },
  { id: 'e3', title: 'Ergonomic Chair Feature', category: 'E-commerce A+', imageUrl: 'https://i.ibb.co/q3wXxy6s/1770009431445.jpg' },
  { id: 'e4', title: 'Product Storytelling', category: 'E-commerce A+', imageUrl: 'https://i.ibb.co/6cBjqfL0/1770009431439.jpg' },
  { id: 'e5', title: 'E-commerce Visuals', category: 'E-commerce A+', imageUrl: 'https://i.ibb.co/zh2BP9xH/1770009431432.jpg' },
  
  // Social Media (Preserving original s1-s4, adding more)
  { id: 's1', title: 'Premium Branding Post', category: 'Social Media', imageUrl: 'https://i.ibb.co/QFQfLQMn/1770008435175.jpg' },
  { id: 's2', title: 'Social Media Grid', category: 'Social Media', imageUrl: 'https://i.ibb.co/x8CwYqSN/1770009431452.jpg' },
  { id: 's3', title: 'Digital Ad Concept', category: 'Social Media', imageUrl: 'https://i.ibb.co/gLWk7qQj/1770009431471.jpg' },
  { id: 's4', title: 'Modern Marketing Creative', category: 'Social Media', imageUrl: 'https://i.ibb.co/d43Zf6NF/1770008435182.jpg' },
  { id: 's5', title: 'Engagement Post', category: 'Social Media', imageUrl: 'https://i.ibb.co/fV9RY1xX/1770009431536.jpg' },
  { id: 's6', title: 'Brand Campaign', category: 'Social Media', imageUrl: 'https://i.ibb.co/KjCgjsD4/1770009431543.jpg' },
  { id: 's7', title: 'Visual Marketing', category: 'Social Media', imageUrl: 'https://i.ibb.co/ZzDNNjXh/1770009431549.jpg' },
  { id: 's8', title: 'Social Narrative', category: 'Social Media', imageUrl: 'https://i.ibb.co/jZgPxFcn/1770009431556.jpg' },
  { id: 's9', title: 'Creative Assets', category: 'Social Media', imageUrl: 'https://i.ibb.co/HfTQMpsQ/1770009431562.jpg' },
  
  // Print Media (Updated with new user links)
  { id: 'p1', title: 'Annual Gala Poster', category: 'Print Media', imageUrl: 'https://i.ibb.co/S4HqHsTh/1770009431426.jpg' },
  { id: 'p2', title: 'Minimalist Business Cards', category: 'Print Media', imageUrl: 'https://i.ibb.co/TDfb1YhV/1770009431418.jpg' },
  { id: 'p3', title: 'Restaurant Menu Design', category: 'Print Media', imageUrl: 'https://i.ibb.co/5hC4xYyd/1770009431458.jpg' },
  { id: 'p4', title: 'Event Flyer', category: 'Print Media', imageUrl: 'https://i.ibb.co/4nYQ9s9j/1770009431465.jpg' },
  { id: 'p5', title: 'Brand Stationary', category: 'Print Media', imageUrl: 'https://i.ibb.co/nsfBJFpZ/1770009431478.jpg' },
  
  // Logos (Updated with new user links)
  { id: 'l1', title: 'Nova Tech Logo', category: 'Logos', imageUrl: 'https://i.ibb.co/WpB3t80S/1770009431491.jpg' },
  { id: 'l2', title: 'Green Earth Identity', category: 'Logos', imageUrl: 'https://i.ibb.co/4gFhNY3d/1770009431498.jpg' },
  { id: 'l3', title: 'Pulse Fitness', category: 'Logos', imageUrl: 'https://i.ibb.co/F4gsK8nc/1770009431504.jpg' },
  { id: 'l4', title: 'Aura Branding', category: 'Logos', imageUrl: 'https://i.ibb.co/gZk7yWj4/1770009431511.jpg' },
  { id: 'l5', title: 'Zen Identity', category: 'Logos', imageUrl: 'https://i.ibb.co/TxD1KzSy/1770009431530.jpg' },
  
  // Thumbnails (Preserving t1, adding more)
  { id: 't1', title: 'High Conversion Design', category: 'Thumbnails', imageUrl: 'https://i.ibb.co/8nNR2kWf/1770009431523.jpg' },
  { id: 't2', title: 'Viral Visual Strategy', category: 'Thumbnails', imageUrl: 'https://i.ibb.co/231MGKQy/1770009431569.jpg' },
  { id: 't3', title: 'Brand Storytelling', category: 'Thumbnails', imageUrl: 'https://i.ibb.co/r8RCFvw/1770009431575.jpg' },
  { id: 't4', title: 'Engagement Booster', category: 'Thumbnails', imageUrl: 'https://i.ibb.co/TM6nbWY3/1770009431582.jpg' },
];

// Project subsets for specialized gallery components
export const SOCIAL_PROJECTS = ALL_PROJECTS.filter(p => p.category === 'Social Media');
export const LOGOS = ALL_PROJECTS.filter(p => p.category === 'Logos');
export const THUMBNAILS = ALL_PROJECTS.filter(p => p.category === 'Thumbnails');
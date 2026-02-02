
import React, { useState } from 'react';
import { SOCIAL_PROJECTS } from '../constants';

const SocialMediaSection: React.FC = () => {
  // Explicitly type filter state as string
  const [filter, setFilter] = useState<string>('All');
  
  // Fix type inference for categories array by using Array.from and type casting
  const categories: string[] = ['All', ...Array.from(new Set(SOCIAL_PROJECTS.map(p => p.category as string)))];

  const filteredProjects = filter === 'All' 
    ? SOCIAL_PROJECTS 
    : SOCIAL_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
        <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">Social Media</h2>
        
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                filter === cat 
                  ? 'bg-white text-dark border-white' 
                  : 'border-white/20 text-white/60 hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="masonry gap-8 space-y-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="break-inside-avoid relative group rounded-3xl overflow-hidden"
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="text-neonPink text-sm font-bold tracking-widest uppercase mb-2">
                {project.category}
              </span>
              <h4 className="text-2xl font-display font-bold">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSection;

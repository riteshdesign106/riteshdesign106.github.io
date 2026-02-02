
import React, { useState, useMemo } from 'react';
import { ALL_PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import { X, Maximize2, Filter, ArrowLeft } from 'lucide-react';

interface PortfolioPageProps {
  onBack: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBack }) => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: (ProjectCategory | 'All')[] = [
    'All', 
    'E-commerce A+', 
    'Social Media', 
    'Print Media', 
    'Logos', 
    'Thumbnails'
  ];

  const filteredProjects = useMemo(() => {
    return filter === 'All' 
      ? ALL_PROJECTS 
      : ALL_PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-violet font-bold hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">
              Work <span className="text-violet">Gallery</span>
            </h1>
            <p className="text-xl text-dark/50 max-w-2xl">
              Exploring the intersection of strategy and aesthetics across digital and print landscapes.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 p-2 bg-light rounded-[2rem] border border-dark/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-dark text-white shadow-lg' 
                    : 'text-dark/40 hover:text-dark hover:bg-dark/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="break-inside-avoid group relative rounded-[2rem] overflow-hidden cursor-pointer border border-dark/5 hover:shadow-2xl hover:shadow-violet/20 transition-all duration-500"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                <Maximize2 className="text-white mb-4" size={40} />
                <span className="text-violet text-xs font-bold tracking-widest uppercase mb-2">{project.category}</span>
                <h4 className="text-white font-display font-bold text-2xl">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-32 text-center">
            <Filter size={48} className="mx-auto text-dark/10 mb-4" />
            <h3 className="text-2xl font-display font-bold text-dark/20">No projects found in this category.</h3>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-dark/95 backdrop-blur-md" 
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative z-10 max-w-5xl w-full bg-white rounded-[2.5rem] overflow-hidden animate-slide-up shadow-2xl border border-white/10">
            <button 
              className="absolute top-6 right-6 p-3 bg-dark/5 hover:bg-dark/10 rounded-full transition-colors z-20"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col">
              <div className="max-h-[70vh] overflow-hidden">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain bg-light"
                />
              </div>
              <div className="p-10 md:p-14">
                <span className="text-violet font-bold tracking-widest uppercase text-sm mb-2 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-4xl font-display font-bold mb-6">{selectedProject.title}</h3>
                <p className="text-xl text-dark/70 leading-relaxed max-w-3xl">
                  A comprehensive design solution focusing on visual excellence and brand alignment. This project demonstrates expert use of layout, color theory, and audience-specific visual language.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;

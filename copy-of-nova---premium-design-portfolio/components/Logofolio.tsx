
import React, { useState } from 'react';
import { LOGOS } from '../constants';
import { X, Search } from 'lucide-react';
import { Project } from '../types';

const Logofolio: React.FC = () => {
  const [selectedLogo, setSelectedLogo] = useState<Project | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-4 italic">Logofolio</h2>
        <p className="text-lg text-dark/50 max-w-xl">A collection of identity designs crafted for startups, enterprises, and local businesses around the world.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {LOGOS.map((logo) => (
          <div 
            key={logo.id}
            onClick={() => setSelectedLogo(logo)}
            className="group relative aspect-square bg-light rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-violet/20 transition-all duration-500"
          >
            <img 
              src={logo.imageUrl} 
              alt={logo.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
              <Search className="text-white mb-4" size={32} />
              <h4 className="text-white font-bold text-xl mb-1">{logo.title}</h4>
              <p className="text-white/60 text-sm font-medium">{logo.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedLogo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-dark/95 backdrop-blur-sm" 
            onClick={() => setSelectedLogo(null)}
          ></div>
          <div className="relative z-10 max-w-4xl w-full bg-white rounded-[2.5rem] overflow-hidden animate-slide-up">
            <button 
              className="absolute top-6 right-6 p-2 bg-dark/5 hover:bg-dark/10 rounded-full transition-colors"
              onClick={() => setSelectedLogo(null)}
            >
              <X size={24} />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="aspect-square">
                <img 
                  src={selectedLogo.imageUrl} 
                  alt={selectedLogo.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <span className="text-violet font-bold tracking-widest uppercase text-sm mb-4">
                  {selectedLogo.category}
                </span>
                <h3 className="text-4xl font-display font-bold mb-6">{selectedLogo.title}</h3>
                <p className="text-lg text-dark/70 leading-relaxed mb-8">
                  A comprehensive branding solution including logo design, color typography selection, and brand application across various digital and physical touchpoints.
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-light border border-dark/5"></div>
                  <div className="w-10 h-10 rounded-full bg-violet/20 border border-violet/10"></div>
                  <div className="w-10 h-10 rounded-full bg-dark"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logofolio;


import React, { useState } from 'react';
import { THUMBNAILS } from '../constants';
import { X, PlayCircle, Maximize2 } from 'lucide-react';
import { Project } from '../types';

const Thumbnails: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Project | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-4 italic">
          Thumbnail <span className="text-violet">Section</span>
        </h2>
        <p className="text-lg text-dark/50 max-w-xl">
          High-conversion YouTube thumbnails designed to boost CTR and capture attention instantly with bold typography and vibrant color palettes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {THUMBNAILS.map((thumb) => (
          <div 
            key={thumb.id}
            onClick={() => setSelectedItem(thumb)}
            className="group relative aspect-video bg-light rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-violet/20 transition-all duration-500 border border-dark/5"
          >
            <img 
              src={thumb.imageUrl} 
              alt={thumb.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
              <Maximize2 className="text-white mb-4" size={40} />
              <h4 className="text-white font-bold text-xl mb-1">{thumb.title}</h4>
              <p className="text-white/60 text-sm font-medium tracking-widest uppercase">{thumb.category}</p>
            </div>
            
            {/* YouTube Style Play Indicator */}
            <div className="absolute bottom-4 right-4 bg-red-600 text-white p-2 rounded-lg shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <PlayCircle size={20} fill="currentColor" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-dark/95 backdrop-blur-md" 
            onClick={() => setSelectedItem(null)}
          ></div>
          <div className="relative z-10 max-w-5xl w-full bg-white rounded-[2.5rem] overflow-hidden animate-slide-up shadow-2xl border border-white/10">
            <button 
              className="absolute top-6 right-6 p-3 bg-dark/5 hover:bg-dark/10 rounded-full transition-colors z-20"
              onClick={() => setSelectedItem(null)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col">
              <div className="aspect-video w-full">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 md:p-14">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">YOUTUBE</span>
                  <span className="text-violet font-bold tracking-widest uppercase text-sm">
                    {selectedItem.category}
                  </span>
                </div>
                <h3 className="text-4xl font-display font-bold mb-6">{selectedItem.title}</h3>
                <p className="text-xl text-dark/70 leading-relaxed mb-8 max-w-3xl">
                  Strategic thumbnail design focusing on visual psychology, high-contrast elements, and readability. Engineered to stand out in a crowded feed and maximize audience engagement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-5 py-2.5 bg-light rounded-full text-sm font-bold border border-dark/5 text-dark/60">CTR Optimized</span>
                  <span className="px-5 py-2.5 bg-light rounded-full text-sm font-bold border border-dark/5 text-dark/60">Color Theory</span>
                  <span className="px-5 py-2.5 bg-light rounded-full text-sm font-bold border border-dark/5 text-dark/60">Attention Retaining</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnails;


import React from 'react';
import { ArrowDownRight } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewWork }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-animated-gradient opacity-10"></div>
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet/20 rounded-full blur-[128px]"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-violet/10 text-violet text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in">
          Available for Freelance
        </span>
        
        <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-display font-bold tracking-tighter leading-none mb-10 animate-slide-up">
          PORT<span className="text-transparent bg-clip-text bg-animated-gradient">FOLIO</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-dark/70 font-medium max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          I'm a visual designer crafting high-impact brand identities and high-performing social media creatives.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={onViewWork}
            className="group relative px-8 py-4 bg-dark text-white rounded-full font-bold overflow-hidden transition-all duration-300 hover:pr-12"
          >
            View My Work
            <ArrowDownRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </button>
          <a
            href="#contact"
            className="px-8 py-4 border border-dark/10 hover:border-violet rounded-full font-bold transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Floating Elements (Decorative) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDownRight className="rotate-45 text-dark/20" size={32} />
      </div>
    </div>
  );
};

export default Hero;

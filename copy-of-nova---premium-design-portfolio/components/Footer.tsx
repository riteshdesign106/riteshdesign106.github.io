
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-light">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-display font-bold tracking-tighter uppercase">
          RITESH<span className="text-violet">.</span>
        </div>
        
        <div className="text-dark/40 text-sm font-medium">
          © {new Date().getFullYear()} Ritesh Design. All rights reserved.
        </div>
        
        <div className="flex space-x-8">
          <a href="#" className="text-sm font-bold text-dark/60 hover:text-dark transition-colors">Privacy</a>
          <a href="#" className="text-sm font-bold text-dark/60 hover:text-dark transition-colors">Terms</a>
          <a href="#" className="text-sm font-bold text-dark/60 hover:text-dark transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

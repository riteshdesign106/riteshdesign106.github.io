
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  activeSection: string;
  currentView: 'home' | 'portfolio';
  onNavigate: (view: 'home' | 'portfolio') => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, type?: string) => {
    if (type === 'view') {
      e.preventDefault();
      onNavigate(href.includes('portfolio') ? 'portfolio' : 'home');
      setIsMenuOpen(false);
    } else {
      if (currentView !== 'home') {
        e.preventDefault();
        onNavigate('home');
        setTimeout(() => {
          const id = href.replace('#', '');
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-light transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home', 'view')}
          className="text-2xl font-display font-bold tracking-tighter text-dark hover:opacity-70 transition-opacity uppercase"
        >
          RITESH<span className="text-violet">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = item.type === 'view' 
              ? (item.href === 'portfolio' ? currentView === 'portfolio' : currentView === 'home' && activeSection === 'home')
              : currentView === 'home' && activeSection === item.href.replace('#', '');

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href, item.type)}
                className={`text-sm font-bold tracking-wide transition-all duration-300 hover:text-violet ${
                  isActive 
                    ? 'text-violet border-b-2 border-violet pb-1' 
                    : 'text-dark/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="bg-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-violet transition-colors duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-dark" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-3xl font-display font-bold hover:text-violet transition-colors"
              onClick={(e) => handleLinkClick(e, item.href, item.type)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-dark text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-violet transition-colors"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Hire Me
          </a>
        </div>
        <button className="absolute top-6 right-6 text-dark" onClick={toggleMenu}>
          <X size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Header;

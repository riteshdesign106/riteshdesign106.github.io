
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceSection from './components/ExperienceSection';
import Thumbnails from './components/Thumbnails';
import SocialMediaSection from './components/SocialMediaSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioPage from './components/PortfolioPage';

type View = 'home' | 'portfolio';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    if (currentView === 'portfolio') {
      window.scrollTo(0, 0);
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'social-media', 'thumbnails', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    if (view === 'home') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-dark selection:bg-violet selection:text-white">
      <Header 
        activeSection={activeSection} 
        currentView={currentView}
        onNavigate={handleNavigate}
      />
      
      <main>
        {currentView === 'home' ? (
          <>
            <section id="home">
              <Hero onViewWork={() => setCurrentView('portfolio')} />
            </section>
            
            <section id="about" className="py-24 md:py-32">
              <About />
            </section>
            
            <section id="experience" className="py-24 md:py-32 bg-light">
              <ExperienceSection />
            </section>

            <section id="social-media" className="py-24 md:py-32 bg-dark text-white">
              <SocialMediaSection />
            </section>
            
            <section id="thumbnails" className="py-24 md:py-32 bg-white">
              <Thumbnails />
            </section>
            
            <section id="contact" className="py-24 md:py-32">
              <Contact />
            </section>
          </>
        ) : (
          <PortfolioPage onBack={() => setCurrentView('home')} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;

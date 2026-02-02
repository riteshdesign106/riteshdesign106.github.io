
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4 sticky top-32">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4">
            About<br/><span className="text-violet">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-violet rounded-full"></div>
        </div>
        
        <div className="md:col-span-8 space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-light group">
              <img 
                src="https://i.ibb.co/mCPC9TVZ/1770008380798.jpg" 
                alt="Ritesh Portrait" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-semibold">Hello, I'm Ritesh.</h3>
              <p className="text-lg text-dark/70 leading-relaxed">
                I have been working professionally in the field of graphic design since 2025. I specialize in social media post design, e-commerce A+ content.
              </p>
              <p className="text-lg text-dark/70 leading-relaxed">
                I believe that a brand's digital presence is reflected in every single visual shared. My goal is to create simple, balanced, and striking content that strengthens brands.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-light rounded-2xl border border-dark/5">
                  <div className="text-4xl font-display font-bold text-violet mb-2">02+</div>
                  <div className="text-sm font-semibold uppercase tracking-widest text-dark/50">Years Exp.</div>
                </div>
                <div className="p-6 bg-light rounded-2xl border border-dark/5">
                  <div className="text-4xl font-display font-bold text-cyan mb-2">50+</div>
                  <div className="text-sm font-semibold uppercase tracking-widest text-dark/50">Projects</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark p-12 rounded-[2rem] text-white">
            <h4 className="text-2xl font-display font-semibold mb-8">Core Specialties</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Branding', 'Logos', 'Social Media', 'Marketing', 'UI Design', 'Ads', 'Layouts', 'Packaging'].map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-violet"></div>
                  <span className="font-medium text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

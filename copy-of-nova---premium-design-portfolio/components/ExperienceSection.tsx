
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Experience</h2>
          <p className="text-xl text-dark/50 font-medium mt-4">Professional journey & milestones</p>
        </div>
        <div className="text-right">
          <div className="text-7xl font-display font-bold text-violet leading-none">02</div>
          <div className="text-sm font-bold uppercase tracking-widest text-dark/40">Years of Mastery</div>
        </div>
      </div>

      <div className="grid gap-8">
        {EXPERIENCES.map((exp, index) => (
          <div 
            key={exp.id} 
            className="group bg-white p-8 md:p-12 rounded-[2rem] border border-dark/5 flex flex-col md:flex-row gap-8 items-start hover:border-violet/30 transition-all duration-300"
          >
            <div className="text-dark/20 font-display text-4xl font-bold">0{index + 1}</div>
            <div className="md:w-48 shrink-0">
              <span className="inline-block px-3 py-1 bg-violet/10 text-violet text-sm font-bold rounded-lg mb-4">
                {exp.year}
              </span>
              <h4 className="text-xl font-bold text-dark">{exp.company}</h4>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold mb-4">{exp.role}</h3>
              <p className="text-dark/60 leading-relaxed text-lg max-w-2xl">{exp.description}</p>
            </div>
            <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-12 h-12 bg-light rounded-full flex items-center justify-center">
                 <div className="w-6 h-0.5 bg-dark"></div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;

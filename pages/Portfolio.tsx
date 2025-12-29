
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Branding', 'Web', 'Logo Design', 'Print'];

  const filteredProjects = PROJECTS.filter(p => 
    filter === 'All' || p.category.includes(filter) || p.tags.some(t => t.includes(filter))
  );

  return (
    <div className="min-h-screen py-32 bg-black animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24">
          <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Archive</span>
          <h1 className="font-display text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase leading-[0.8]">Selected <br /> Works.</h1>
        </header>

        {/* Glass Filters */}
        <div className="sticky top-24 z-40 flex flex-wrap gap-3 mb-20 py-4 backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-orange-600 border-orange-600 text-white shadow-[0_0_20px_rgba(234,88,12,0.3)]' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative">
              <div className="relative overflow-hidden aspect-[16/10] bg-neutral-900 border border-white/10">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:opacity-40"
                />
                
                {/* Reveal on Hover Content */}
                <div className="absolute inset-0 p-12 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <p className="text-white text-lg font-light leading-relaxed max-w-sm mb-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                        {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-orange-500 border border-orange-500/30 px-3 py-1 uppercase font-bold">
                            {tag}
                        </span>
                        ))}
                    </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight group-hover:text-orange-500 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mt-1 font-bold">{project.category}</p>
                </div>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white group-hover:bg-orange-600 group-hover:border-orange-600 transition-all">
                    <svg className="w-4 h-4 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Break */}
        <div className="my-40 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Premium CTA */}
        <div className="relative py-32 px-8 text-center bg-[#0a0a0a] border border-white/5 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
            <h2 className="relative font-display text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tighter">Ready to elevate <br /> your identity?</h2>
            <a href="mailto:sberry007@yahoo.com" className="relative inline-block bg-white text-black px-16 py-6 font-bold uppercase tracking-[0.2em] text-xs hover:bg-orange-600 hover:text-white transition-all transform hover:-translate-y-1">
                Start a Conversation
            </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

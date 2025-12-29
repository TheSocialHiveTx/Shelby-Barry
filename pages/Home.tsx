
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  const featuredWork = PROJECTS.slice(0, 3);
  const clients = ["NFL", "MLB", "MIKE TYSON", "WARNER BROS", "FANATICS", "TAPOUT", "BKFC", "CONVERSE", "REEBOK"];

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-30">
           <img 
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1920&auto=format&fit=crop" 
            alt="Design Background" 
            className="w-full h-full object-cover grayscale scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-5xl">
            <h1 className="font-display text-7xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter mb-10 uppercase select-none">
              DESIGN <br /> 
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 italic pr-6 -mr-6">
                BEYOND
              </span> <br /> 
              LIMITS.
            </h1>
            
            <div className="flex items-stretch space-x-6 mb-12">
              <div className="w-1 bg-orange-600"></div>
              <p className="max-w-xl text-lg md:text-2xl text-gray-300 font-light leading-snug">
                Shelby Berry — Senior Creative Director. 30+ years of turning complex brand visions into iconic visual realities.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <Link to="/portfolio" className="relative group bg-white text-black px-12 py-5 font-bold uppercase tracking-widest overflow-hidden transition-all">
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link to="/contact" className="border border-white/20 text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        {/* Vertical Decorative Line */}
        <div className="absolute right-10 bottom-10 hidden lg:flex flex-col items-center space-y-6">
            <div className="h-24 w-[1px] bg-gradient-to-b from-transparent to-orange-600"></div>
            <span className="[writing-mode:vertical-lr] uppercase tracking-[0.5em] text-[10px] font-bold text-gray-500">Scroll to Explore</span>
        </div>
      </section>

      {/* Infinite Client Marquee */}
      <section className="py-12 bg-neutral-900/50 border-y border-white/5 overflow-hidden">
        <div className="relative">
            <div className="animate-marquee whitespace-nowrap">
                {[...clients, ...clients].map((client, idx) => (
                    <span key={idx} className="mx-12 text-4xl md:text-6xl font-display font-bold text-white/10 hover:text-orange-600/40 transition-colors cursor-default uppercase">
                        {client}
                    </span>
                ))}
            </div>
            {/* Gradient Fades for Marquee */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
        </div>
      </section>

      {/* Featured Work Grid */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
                <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Proven Excellence</span>
                <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter">FEATURED WORK</h2>
            </div>
            <Link to="/portfolio" className="group flex items-center space-x-4 text-gray-400 hover:text-white transition-colors">
                <span className="uppercase tracking-widest text-sm font-bold">View All Projects</span>
                <div className="w-12 h-[1px] bg-orange-600 group-hover:w-20 transition-all"></div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0">
            {featuredWork.map((project, idx) => (
              <Link 
                key={project.id} 
                to={`/portfolio`}
                className={`group relative overflow-hidden aspect-[3/4] bg-neutral-900 block border-white/5 ${idx !== 2 ? 'md:border-r' : ''}`}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-end transition-all duration-500 bg-gradient-to-t from-black via-black/20 to-transparent">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-3 block">{project.category}</span>
                    <h3 className="text-3xl font-display font-bold text-white uppercase mb-4 leading-none">{project.title}</h3>
                    <div className="w-0 group-hover:w-full h-1 bg-orange-600 transition-all duration-500 delay-100"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

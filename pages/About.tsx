
import React from 'react';
import { EXPERIENCES, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black animate-in slide-in-from-bottom duration-700">
      {/* Intro Section */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/designer-shelby/800/1000?grayscale" 
                alt="Shelby Berry" 
                className="w-full h-auto aspect-[4/5] object-cover border-l-8 border-orange-600 p-4 bg-neutral-900"
              />
              <div className="absolute -bottom-8 -right-8 bg-orange-600 p-8 hidden md:block">
                <p className="font-display text-5xl font-black text-white italic">30+</p>
                <p className="text-white uppercase font-bold text-xs tracking-tighter">Years Pro</p>
              </div>
            </div>
            <div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8">THE STORY</h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6 font-light">
                Hey there, my name is <span className="text-white font-semibold">Shelby Berry</span>. With over 30 years of experience as a senior graphic designer, design consultant, and marketing manager, I bring a wealth of expertise in artwork, printing, marketing, and visual communications.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                My strategic eye for compelling visuals paired with technical know-how enables me to develop eye-catching marketing and designs that connect with audiences. Whether it's branding, publications, packaging, or digital interfaces, I collaborate closely with clients to understand their vision and create solutions that captivate their target market.
              </p>
              <div className="flex items-center space-x-4 p-6 bg-neutral-900 border-l-4 border-orange-600">
                <div className="text-gray-400 text-sm">
                  <p className="font-bold text-white uppercase mb-1">Expertise in</p>
                  <p>Adobe Creative Suite • Brand Management • Web Design • Print Production • Marketing Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white mb-16 text-center underline decoration-orange-600 underline-offset-8">SKILLS & EXPERTISE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-4">
                  <span className="text-white font-bold uppercase tracking-widest text-xs">{skill.name}</span>
                  <span className="text-orange-500 text-xs font-bold">{skill.level}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 overflow-hidden">
                  <div 
                    className="h-full bg-orange-600 transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white mb-16 uppercase">Professional Journey</h2>
          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l border-white/10 group">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-orange-600 rounded-full group-hover:scale-150 transition-transform"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase">{exp.role}</h3>
                    <p className="text-orange-500 font-bold text-sm tracking-widest">{exp.company}</p>
                  </div>
                  <div className="text-gray-500 text-sm mt-2 md:mt-0 font-medium">
                    <span>{exp.period}</span>
                    <span className="mx-2">|</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start">
                      <span className="mr-2 text-orange-600">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-white mb-12 uppercase">Education</h2>
            <div className="space-y-8 max-w-2xl mx-auto">
                <div className="p-8 border border-white/5 bg-black">
                    <h4 className="text-xl font-bold text-white uppercase mb-2">Bachelors of Arts in Graphic Design / Marketing</h4>
                    <p className="text-orange-500 font-bold text-sm mb-1 uppercase tracking-widest">Art Institute of Houston</p>
                    <p className="text-gray-500 text-xs uppercase">May 1991 - Jan 1995</p>
                </div>
                <div className="p-8 border border-white/5 bg-black">
                    <h4 className="text-xl font-bold text-white uppercase mb-2">Associate of Arts in Fine Arts</h4>
                    <p className="text-orange-500 font-bold text-sm mb-1 uppercase tracking-widest">Alvin Community College</p>
                    <p className="text-gray-500 text-xs uppercase">Jan 1990 - Jan 1991</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;

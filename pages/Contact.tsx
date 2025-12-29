
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses = "w-full bg-neutral-900/50 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600/50 transition-all duration-300 placeholder:text-gray-700";

  return (
    <div className="min-h-screen py-32 bg-black animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Info Side */}
          <div className="lg:sticky lg:top-32">
            <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Inquiries</span>
            <h1 className="font-display text-7xl md:text-9xl font-black text-white mb-12 tracking-tighter uppercase leading-[0.8]">
              Let's <br /> <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-orange-800">Collaborate.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-16 font-light leading-relaxed max-w-sm">
                From Houston to the world. Currently accepting new branding and high-end design projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="group cursor-pointer">
                <p className="text-gray-600 uppercase tracking-widest text-[10px] font-black mb-3 group-hover:text-orange-500 transition-colors">Direct Email</p>
                <a href="mailto:sberry007@yahoo.com" className="text-white text-lg font-medium border-b border-white/10 pb-1 group-hover:border-orange-600 transition-all">sberry007@yahoo.com</a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-gray-600 uppercase tracking-widest text-[10px] font-black mb-3 group-hover:text-orange-500 transition-colors">Voice</p>
                <p className="text-white text-lg font-medium border-b border-white/10 pb-1 group-hover:border-orange-600 transition-all">832-860-5874</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-neutral-900/30 backdrop-blur-sm border border-white/5 p-10 md:p-16 shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in duration-500">
                 <div className="w-24 h-24 bg-orange-600 flex items-center justify-center text-white mb-10 shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <h2 className="text-4xl font-display font-bold text-white mb-4 uppercase">Project Received</h2>
                 <p className="text-gray-500 mb-10">I'll review your details and respond within 24 hours.</p>
                 <button onClick={() => setSubmitted(false)} className="text-orange-500 uppercase font-black text-xs tracking-widest border-b-2 border-orange-500/20 hover:border-orange-500 transition-all pb-1">Send another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 block">Full Name</label>
                    <input type="text" required placeholder="Ex. James Sterling" className={inputClasses} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 block">Email Address</label>
                    <input type="email" required placeholder="Ex. james@sterling.com" className={inputClasses} />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 block">Primary Goal</label>
                  <select className={inputClasses + " appearance-none cursor-pointer"}>
                    <option>Complete Brand Identity</option>
                    <option>UI/UX Design</option>
                    <option>Apparel & Print Line</option>
                    <option>Consultation</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 block">Project Brief</label>
                  <textarea rows={5} required placeholder="Describe your vision..." className={inputClasses + " resize-none"}></textarea>
                </div>

                <button 
                  type="submit"
                  className="group relative w-full bg-white text-black py-6 font-black uppercase tracking-[0.3em] text-xs overflow-hidden transition-all"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">Submit Inquiry</span>
                  <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tighter">
          Ready to start a <br />
          <span className="gradient-text">New Project?</span>
        </h2>
        <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
          I'm currently seeking internships and full-time opportunities. If you have a challenge for me, let's discuss it.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-6 p-8 bg-white/[0.01] border border-white/5 rounded-square hover:border-blue-500/20 hover:bg-white/[0.03] transition-all group"
          >
            <div className="w-12 h-12 rounded-square bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform border border-blue-500/20">
              <i className="fas fa-envelope text-lg"></i>
            </div>
            <div className="text-left">
              <h3 className="text-xs font-black mb-1 uppercase tracking-widest text-gray-400">Email</h3>
              <p className="text-sm font-bold text-white tracking-tight">{PERSONAL_INFO.email}</p>
            </div>
          </a>
          
          <a 
            href={`https://${PERSONAL_INFO.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-8 bg-white/[0.01] border border-white/5 rounded-square hover:border-blue-500/20 hover:bg-white/[0.03] transition-all group"
          >
            <div className="w-12 h-12 rounded-square bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform border border-blue-500/20">
              <i className="fab fa-linkedin text-lg"></i>
            </div>
            <div className="text-left">
              <h3 className="text-xs font-black mb-1 uppercase tracking-widest text-gray-400">LinkedIn</h3>
              <p className="text-sm font-bold text-white tracking-tight">mahereddy04</p>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-square text-[9px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-3">
            <i className="fas fa-map-marker-alt text-blue-500"></i>
            {PERSONAL_INFO.location}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#050505] border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tighter">Experience</h2>
          <div className="h-[1px] flex-1 bg-white/5"></div>
        </div>
        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-10 border-l border-white/10">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-blue-600 rounded-full border border-[#050505] shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-widest">{exp.role}</h3>
                  <p className="text-sm text-blue-400 font-black tracking-[0.2em] uppercase">{exp.company}</p>
                </div>
                <span className="text-[8px] font-black text-gray-600 bg-white/5 px-3 py-1.5 mt-3 md:mt-0 inline-block uppercase tracking-[0.4em] border border-white/5 rounded-square">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3 text-gray-400 text-xs leading-relaxed mb-8 font-medium">
                {exp.points.map((p, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-blue-500/40 mt-1 text-[7px] flex-shrink-0">
                      <i className="fas fa-circle"></i>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              {(exp.certificateLink || exp.trainingLink) && (
                <div className="flex flex-wrap gap-3 mt-8">
                  {exp.certificateLink && (
                    <a 
                      href={exp.certificateLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-square text-[9px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/10"
                    >
                      Certificate
                    </a>
                  )}
                  {exp.trainingLink && (
                    <a 
                      href={exp.trainingLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 rounded-square text-[9px] font-black uppercase tracking-widest transition-all"
                    >
                      Training
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { SKILLS } from '../constants';

const SkillBadge: React.FC<{ name: string; icon: string; colorClass: string }> = ({ name, icon, colorClass }) => (
  <div className="group flex items-center gap-3 p-3.5 bg-white/[0.01] border border-white/[0.05] hover:border-blue-500/30 hover:bg-white/[0.03] transition-all duration-300 rounded-square">
    <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center text-base ${colorClass} transition-transform group-hover:scale-110`}>
      <i className={icon}></i>
    </div>
    <span className="text-[10px] font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-[0.15em]">{name}</span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">Technical Skills</h2>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">Expertise across the full development lifecycle</p>
          </div>
          <div className="h-[1px] hidden md:block flex-1 bg-white/5 mx-12 mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Section 1 */}
          <div>
            <h3 className="text-[9px] font-black text-blue-500 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              Programming
              <div className="h-1 w-1 bg-blue-500 rounded-full"></div>
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {SKILLS.languages.map(s => (
                <SkillBadge key={s.name} name={s.name} icon={s.icon} colorClass="text-blue-500" />
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-[9px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              Frameworks
              <div className="h-1 w-1 bg-cyan-400 rounded-full"></div>
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {SKILLS.frameworks.map(s => (
                <SkillBadge key={s.name} name={s.name} icon={s.icon} colorClass="text-cyan-400" />
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              Tools
              <div className="h-1 w-1 bg-indigo-400 rounded-full"></div>
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {SKILLS.tools.map(s => (
                <SkillBadge key={s.name} name={s.name} icon={s.icon} colorClass="text-indigo-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
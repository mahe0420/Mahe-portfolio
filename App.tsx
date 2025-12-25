
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ChatWidget from './components/ChatWidget';
import Contact from './components/Contact';
import { EDUCATIONS, CERTIFICATIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-[#050505] border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Academic Path</h2>
            <div className="h-[1px] flex-1 bg-white/5"></div>
          </div>
          <div className="space-y-6">
            {EDUCATIONS.map((edu, idx) => (
              <div key={idx} className="group relative glass p-8 rounded-square border border-white/5 hover:border-blue-500/20 transition-all overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[40px] -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-[8px] text-blue-400 font-black px-2 py-1 bg-blue-500/5 border border-blue-500/10 uppercase tracking-widest mb-3 inline-block rounded-square">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-widest text-white mb-2">{edu.degree}</h3>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{edu.institution}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="inline-flex flex-col items-end">
                      <span className="text-[9px] text-gray-600 font-black uppercase tracking-widest mb-1">Final Standing</span>
                      <p className="text-blue-500 font-black text-lg tracking-tighter">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Credentials</h2>
            <div className="h-[1px] flex-1 bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx} 
                className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/[0.01] border border-white/5 hover:border-cyan-500/20 hover:bg-white/[0.02] rounded-square transition-all group relative"
              >
                <div className="w-12 h-12 bg-cyan-500/5 rounded-square flex items-center justify-center text-cyan-400 text-xl flex-shrink-0 border border-white/5 group-hover:bg-cyan-500/10 transition-all">
                  <i className="fas fa-award"></i>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm leading-tight group-hover:text-cyan-400 transition-colors uppercase tracking-widest">
                      {cert.name}
                    </h3>
                    <span className="text-[9px] text-gray-500 font-black uppercase tracking-[0.3em]">{cert.year}</span>
                  </div>
                  <p className="text-[9px] text-cyan-500/70 uppercase tracking-[0.3em] font-black mb-2">{cert.provider}</p>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">{cert.description}</p>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white/5 hover:bg-cyan-600 hover:text-white border border-white/5 rounded-square text-[9px] font-black uppercase tracking-widest transition-all"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <footer className="py-20 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-xl font-black gradient-text mb-6 tracking-widest uppercase">MAHE Reddy</div>
          <div className="flex justify-center gap-6 mb-10 text-gray-600 text-lg">
            <a href="https://github.com/mahe0420" target="_blank" rel="noreferrer" className="hover:text-white transition-all"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/mahereddy04" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all"><i className="fab fa-linkedin"></i></a>
          </div>
          
          <div className="mt-10 pt-10 border-t border-white/5 text-[8px] text-gray-800 uppercase tracking-[0.5em] font-bold">
            © {new Date().getFullYear()} Mahendra Reddy Avula
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
};

export default App;
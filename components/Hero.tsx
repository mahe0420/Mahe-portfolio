
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-40 pb-24 px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 blur-[100px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-black mb-6 tracking-[0.3em] uppercase rounded-square">
            Available for Internships & Full-Time Opportunities
          </div>
          <h1 className="text-3xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter text-white ">
            Hi I'm <br />
            <span className="gradient-text">Mahendra Reddy Avula</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-3.5 bg-white text-black font-black rounded-square hover:bg-blue-50 transition-all shadow-xl active:scale-95 text-xs uppercase tracking-widest w-full sm:w-auto text-center"
            >
              Get in Touch
            </a>

            <a 
              href="/certifications/Mahendra_Reddy_Resume.pdf"
              target="_blank"
              className="px-8 py-3.5 bg-white/5 text-white font-black rounded-square border border-white/10 hover:bg-white/10 transition-all active:scale-95 text-xs uppercase tracking-widest w-full sm:w-auto text-center"
            >
              Resume
            </a>
            
            <div className="flex gap-3">
              <a href="https://github.com/mahe0420" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center glass hover:bg-white/10 rounded-square transition-all hover:-translate-y-1"><i className="fab fa-github text-lg"></i></a>
              <a href="https://linkedin.com/in/mahereddy04" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center glass hover:bg-blue-500/10 rounded-square transition-all text-blue-400 hover:-translate-y-1"><i className="fab fa-linkedin text-lg"></i></a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-md w-full animate-float">
          <div className="relative p-3 bg-white/5 border border-white/10 rounded-square shadow-2xl">
             <div className="overflow-hidden rounded-square">
               <img
  src="/images/DSC_0067.JPG"
  alt="Mahendra Profile"
  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-1000"
/>


             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-blue-500/50 -z-10"></div>
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blue-500/50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
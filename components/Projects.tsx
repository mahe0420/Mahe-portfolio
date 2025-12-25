
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';

const ImageGalleryModal: React.FC<{ 
  images: string[]; 
  onClose: () => void; 
  title: string 
}> = ({ images, onClose, title }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 px-4">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-white text-3xl transition-colors z-50"
      >
        <i className="fas fa-times"></i>
      </button>

      <div className="relative max-w-5xl w-full aspect-video flex items-center justify-center">
        {/* Navigation */}
        <button onClick={prev} className="absolute left-0 lg:-left-16 p-4 text-white/30 hover:text-white transition-colors z-10 text-4xl">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={next} className="absolute right-0 lg:-right-16 p-4 text-white/30 hover:text-white transition-colors z-10 text-4xl">
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Image Display */}
        <div className="w-full h-full relative overflow-hidden rounded-square border border-white/10 shadow-2xl bg-black">
          {images.map((img, i) => (
            <img 
              key={i}
              src={img}
              alt={`${title} - view ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                i === index ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            />
          ))}
        </div>

        {/* Caption */}
        <div className="absolute -bottom-12 left-0 right-0 flex justify-between items-center text-white/50 text-[10px] uppercase font-black tracking-widest px-2">
          <span>{title}</span>
          <div className="flex gap-2">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-300 rounded-full ${i === index ? 'bg-blue-500 w-6' : 'bg-white/10 w-3'}`}
              ></div>
            ))}
          </div>
          <span>{index + 1} / {images.length}</span>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group hover-lift bg-white/[0.02] rounded-square overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl">
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative h-64 overflow-hidden bg-[#111] cursor-pointer"
        >
          {/* Main Image with attractive hover animation */}
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover:scale-110 group-hover:rotate-1"
          />
          
          {/* Overlay info */}
          <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500"></div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           
          </div>

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-[8px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 bg-black/60 text-blue-400 border border-white/10 backdrop-blur-md rounded-square">
                {t}
              </span>
            ))}
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold uppercase tracking-widest group-hover:text-blue-400 transition-colors">{project.title}</h3>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" title="View Source Code">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
          
          <ul className="space-y-2 mb-8 text-gray-400 text-xs leading-relaxed font-medium">
            {project.description.map((d, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-blue-500/50 mt-1.5 w-1 h-1 flex-shrink-0 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]"></span>
                {d}
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex-1 text-center py-3.5 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-square text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <i className="far fa-images"></i> View Images
            </button>
            <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 text-center py-3.5 bg-white/5 text-white border border-white/5 rounded-square text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-95">
              <i className="fab fa-github"></i> Source Code
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ImageGalleryModal 
          images={project.images} 
          onClose={() => setIsModalOpen(false)} 
          title={project.title} 
        />
      )}
    </>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#070707]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tighter">Project Works</h2>
          <div className="text-[9px] font-black text-gray-600 uppercase tracking-[0.3em]">Click images to explore gallery</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
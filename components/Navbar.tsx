
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#about" className="text-xl font-black gradient-text tracking-tighter hover:opacity-80 transition-opacity ">
          Mahe Portfolio
        </a>
        
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="px-3 py-1 text-[11px] font-black text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 active:scale-95 uppercase tracking-widest rounded-square "
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={`mailto:${PERSONAL_INFO.email}?subject=Project/Hiring Inquiry - Portfolio`}
            className="hidden sm:inline-flex group relative items-center justify-center px-5 py-2 text-[10px] font-black tracking-widest uppercase text-white transition-all duration-200 bg-blue-600 rounded-square focus:outline-none shadow-lg shadow-blue-500/10 active:scale-95"
          >
            Hire Me
          </a>
          
          <button className="lg:hidden text-gray-400 hover:text-white">
            <i className="fas fa-bars text-lg"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

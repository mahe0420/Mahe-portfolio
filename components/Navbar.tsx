import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        
        {/* Logo */}
        <a
          href="#about"
          className="text-xl font-black gradient-text tracking-tighter hover:opacity-80 transition-opacity"
        >
          Mahe Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-1 text-[11px] font-black text-gray-400 hover:text-white transition-all hover:bg-white/5 uppercase tracking-widest rounded-square"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Project/Hiring Inquiry - Portfolio`}
            className="hidden sm:inline-flex px-5 py-2 text-[10px] font-black tracking-widest uppercase text-white bg-blue-600 rounded-square shadow-lg shadow-blue-500/10 active:scale-95"
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-black text-gray-300 hover:text-white uppercase tracking-widest"
              >
                {item.name}
              </a>
            ))}

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Project/Hiring Inquiry - Portfolio`}
              className="mt-4 text-center px-5 py-3 text-[11px] font-black tracking-widest uppercase text-white bg-blue-600 rounded-square"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

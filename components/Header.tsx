
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Visit', href: '#visit' },
    { name: 'Menu', href: '#menu' },
    { name: 'Wine Club', href: '#wine-club' },
    { name: 'Events', href: '#events' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-lenoir-primary py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-heading text-3xl md:text-4xl font-bold tracking-widest text-white">
          LENOIR
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest text-white/90 hover:text-lenoir-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://resy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-white px-6 py-2 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-lenoir-primary transition-all duration-300"
          >
            Reserve
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-lenoir-primary border-t border-white/10 py-8 px-6 space-y-6 animate-fadeIn">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block text-xl uppercase tracking-widest text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://resy.com" 
            className="block text-center border border-white py-4 text-xl uppercase tracking-widest text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Reserve Table
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

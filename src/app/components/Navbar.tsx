"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4 px-6 lg:px-10">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img 
                src="/logo.png" 
                alt="Ironone Logo" 
                className="relative w-full h-full object-contain rounded-lg"
onError={(e) => {
  const target = e.currentTarget as HTMLImageElement;
  target.style.display = 'none';
  const nextSibling = e.currentTarget.nextElementSibling as HTMLElement | null;
  if (nextSibling) {
    nextSibling.style.display = 'flex';
  }
}}
              />
              <div className="relative hidden bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg w-full h-full items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                iron
              </span>
              <span className="text-slate-800">one</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-slate-700 font-medium rounded-lg hover:text-blue-600 transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/booking"
              className="relative group overflow-hidden px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <button className="px-4 py-2 text-sm font-medium text-slate-600 border-2 border-slate-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                  style={{
                    animation: menuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
              <a
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </a>
              
              <button className="w-full px-4 py-2 text-sm font-medium text-slate-600 border-2 border-slate-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;

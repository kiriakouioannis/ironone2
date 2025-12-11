"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { NavbarData } from '../../sanity/lib/queries';
import { urlFor } from '../../sanity/lib/image';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  data?: NavbarData;
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Hide navbar on studio pages
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use Sanity data or fallback to defaults
  const navLinks = data?.navigationLinks || [
    { name: "Αρχική", href: "/" },
    { name: "Σχετικά με μας", href: "/about" },
    { name: "Υπηρεσίες", href: "/services" },
    { name: "Επικοινωνία", href: "/contact" },
  ];

  const logoText = data?.logo?.text || 'ironone';
  const logoLink = data?.logo?.link || '/';
  const ctaText = data?.ctaButton?.text || 'Book Now';
  const ctaLink = data?.ctaButton?.link || '/booking';
  const showLanguage = data?.languageSelector?.enabled !== false;
  const defaultLang = data?.languageSelector?.defaultLanguage || 'EN';

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
            href={logoLink}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
              {data?.logo?.image ? (
                <Image
                  src={urlFor(data.logo.image).url()}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="relative w-full h-full object-contain rounded-lg"
                />
              ) : (
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg w-full h-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            <span className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {logoText.substring(0, 4)}
              </span>
              <span className="text-slate-800">{logoText.substring(4)}</span>
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
              href={ctaLink}
              className="relative group overflow-hidden px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{ctaText}</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {showLanguage && (
              <button className="px-4 py-2 text-sm font-medium text-slate-600 border-2 border-slate-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                {defaultLang}
              </button>
            )}
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
                href={ctaLink}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                <span>{ctaText}</span>
              </a>

              {showLanguage && (
                <button className="w-full px-4 py-2 text-sm font-medium text-slate-600 border-2 border-slate-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                  {defaultLang}
                </button>
              )}
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

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Menu, X, Camera, Send } from 'lucide-react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
     { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-5'}`}>
      <nav className={`relative mx-auto px-4 transition-all duration-500 sm:px-6 lg:px-8 ${isScrolled ? 'max-w-4xl' : 'max-w-5xl'}`}>
        {/* Main navbar pill container */}
        <div className={`flex items-center justify-between gap-2 rounded-full border px-3 backdrop-blur-md transition-all duration-500 sm:gap-8 sm:px-8 ${isScrolled ? 'border-[#d8c58e]/70 bg-[#f7f5ef]/95 py-2.5 shadow-xl shadow-[#1c1c1b]/10' : 'border-[#eadfb9]/70 bg-[#f7f5ef]/90 py-3 sm:py-4 shadow-lg'}`}>
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a href="#top" aria-label="HydrixLabs home" className="block">
              <Image
                src="/hdl-logo-white.svg"
                alt="HydrixLabs"
                width={56}
                height={56}
                className="h-10 w-10 object-contain mix-blend-multiply sm:h-14 sm:w-14"
              />
            </a>
            <a href="#top" aria-label="HydrixLabs home" className="whitespace-nowrap text-xl font-bold tracking-tight sm:text-3xl">
              <span className="text-[#575757]">Hydrix</span><span className="text-[#d5a900]">Labs</span>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-[#575757] transition-colors duration-300 hover:bg-[#febf41]/25 hover:text-[#1c1c1b]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex min-h-11 min-w-11 items-center justify-center p-2 text-[#575757] transition-colors duration-300 hover:text-[#1c1c1b]">
              <Camera className="w-5 h-5" />
            </a>
            <a href="#contact" className="flex min-h-11 min-w-11 items-center justify-center p-2 text-[#575757] transition-colors duration-300 hover:text-[#1c1c1b]">
              <Send className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="min-h-11 min-w-11 rounded-full p-2 transition-all duration-300 hover:bg-[#febf41]/25 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 space-y-3 rounded-3xl border border-[#eadfb9]/70 bg-[#f7f5ef]/95 px-6 py-6 shadow-lg backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-300 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block min-h-11 rounded-full px-4 py-3 text-sm font-medium text-[#575757] transition-all duration-300 hover:bg-[#febf41]/25 hover:text-[#1c1c1b]"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex items-center gap-4 border-t border-[#eadfb9]/70 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex min-h-11 min-w-11 items-center justify-center p-2 text-[#575757] transition-colors duration-300 hover:text-[#1c1c1b]">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#contact" className="flex min-h-11 min-w-11 items-center justify-center p-2 text-[#575757] transition-colors duration-300 hover:text-[#1c1c1b]">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/85 backdrop-blur-xl border-b border-lime/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Cell */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center px-3 py-2 rounded-xl border border-lime/20 bg-dark-card/50 backdrop-blur-sm hover:border-lime/40 transition-all cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Logo size="sm" />
          </motion.div>

          {/* Desktop Nav Links Cell */}
          <div className="hidden lg:flex items-center gap-1 px-3 py-2 rounded-xl border border-lime/10 bg-dark-card/30 backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 font-body text-sm transition-all ${
                  activeSection === link.id ? 'text-lime' : 'text-slate-400 hover:text-lime'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Status Cell */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl border border-lime/20 bg-dark-card/50 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-lime animate-lime-pulse" />
            <span className="font-body text-xs text-slate-400">Available for Work</span>
          </div>

          {/* CTA Cell */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-lime text-black font-body font-semibold text-sm hover:shadow-lime-glow transition-all"
          >
            Hire Me
            <span>→</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-lime"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-4 border-t border-lime/10"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-3 text-left rounded-lg transition-all ${
                    activeSection === link.id
                      ? 'bg-lime/10 text-lime border border-lime/20'
                      : 'text-slate-400 hover:bg-dark-card hover:text-lime'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 px-4 py-3 mt-2 rounded-lg border border-lime/20 bg-dark-card/50">
                <div className="w-2 h-2 rounded-full bg-lime animate-lime-pulse" />
                <span className="text-xs text-slate-400">Available for Work</span>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-3 mt-2 rounded-lg bg-lime text-black font-semibold text-center"
              >
                Hire Me →
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

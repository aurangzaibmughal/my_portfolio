import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark border-t border-lime/10 py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left - Logo & Name */}
          <div className="flex flex-col items-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center mb-2 sm:mb-3 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <Logo size="sm" />
            </motion.div>
            <p className="font-body text-xs sm:text-sm text-slate-400">Aurangzaib Mughal</p>
            <p className="font-body text-[10px] sm:text-xs text-slate-500 mt-1">
              AI Automation Engineer & Full Stack Developer
            </p>
          </div>

          {/* Center - Nav Links */}
          <div className="flex flex-col md:items-center">
            <h4 className="font-body text-xs sm:text-sm font-semibold text-lime mb-2 sm:mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-body text-xs sm:text-sm text-slate-400 hover:text-lime transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Built With */}
          <div className="flex flex-col md:items-end">
            <h4 className="font-body text-xs sm:text-sm font-semibold text-lime mb-2 sm:mb-3 uppercase tracking-wider">
              Built With
            </h4>
            <p className="font-body text-xs sm:text-sm text-slate-400">
              React + Vite + Framer Motion ⚡
            </p>
            <p className="font-body text-[10px] sm:text-xs text-slate-500 mt-1">
              Tailwind CSS + tsParticles
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 sm:pt-8 border-t border-lime/10">
          <p className="font-body text-[10px] sm:text-xs text-slate-600 text-center">
            © {currentYear} Aurangzaib Mughal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

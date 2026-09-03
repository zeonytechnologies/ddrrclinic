import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onBookAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'top-0 lg:top-2' : 'top-0 lg:top-4'}`}>
      <div className={`mx-auto transition-all duration-300 ${isScrolled ? 'w-full lg:w-[95%] lg:max-w-7xl lg:rounded-full bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b lg:border border-gray-100 py-3 px-4 md:px-6 lg:px-8' : 'w-full px-4 md:px-6 lg:px-8 py-4 bg-transparent'}`}>
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 md:gap-3 shrink-0">
            <img src="/assets/ddrr-logo.jpeg" alt="DDRR Clinic Logo" className="h-12 md:h-16 object-contain rounded-md" />
            <div className="flex flex-col">
              <span className="text-brand-deep-navy font-extrabold text-base md:text-xl leading-none tracking-tight">DDRR</span>
              <span className="text-brand-teal font-semibold text-[9px] md:text-xs tracking-wider uppercase mt-0.5">Physiotherapy Clinic</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-semibold text-brand-dark-navy hover:text-brand-teal transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={onBookAppointment} className="btn-primary py-2.5 px-6 text-sm">
              Book Appointment
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-dark-navy hover:text-brand-teal transition-colors shrink-0 bg-white/50 backdrop-blur-md rounded-full border border-gray-200 shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-brand-deep-navy font-medium rounded-xl hover:bg-brand-soft-gray/50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="px-4 py-2 mt-2">
                  <button 
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      onBookAppointment(e);
                    }}
                    className="btn-primary w-full shadow-lg shadow-brand-teal/20"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

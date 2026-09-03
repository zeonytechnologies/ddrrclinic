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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/src/assets/ddrr-logo.jpeg" alt="DDRR Clinic Logo" className="h-14 md:h-16 object-contain rounded-md" />
          <div className="flex flex-col">
            <span className="text-brand-deep-navy font-extrabold text-lg md:text-xl leading-none tracking-tight">DDRR</span>
            <span className="text-brand-teal font-semibold text-xs md:text-sm tracking-wider uppercase">Physiotherapy Clinic</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-brand-dark-navy hover:text-brand-teal transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={onBookAppointment} className="btn-primary py-2 px-5 text-sm">
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-dark-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-soft-gray overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-brand-dark-navy font-medium border-b border-brand-soft-gray/50"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  onBookAppointment(e);
                }}
                className="btn-primary w-full mt-4"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

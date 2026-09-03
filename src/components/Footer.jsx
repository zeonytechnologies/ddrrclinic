import { clinicData } from '../data/clinicData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
    <footer className="bg-brand-deep-navy pt-16 pb-8 md:pb-6 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="bg-white inline-block p-2 rounded-xl mb-6">
              <img src="/src/assets/ddrr-logo.jpeg" alt="DDRR Clinic Logo" className="h-12 object-contain rounded-md" />
            </div>
            <h3 className="text-white font-bold text-xl tracking-wide mb-2">{clinicData.name}</h3>
            <p className="text-brand-bright-teal font-medium tracking-widest text-xs mb-4">
              {clinicData.tagline}
            </p>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              {clinicData.description}. Dedicated to helping you restore movement and return to an active lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-bright-teal transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href={`tel:${clinicData.phones[0]}`} className="hover:text-brand-bright-teal transition-colors block">
                  {clinicData.phones[0]}
                </a>
                <a href={`tel:${clinicData.phones[1]}`} className="hover:text-brand-bright-teal transition-colors block">
                  {clinicData.phones[1]}
                </a>
              </li>
              <li className="leading-relaxed">
                {clinicData.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} {clinicData.name}. All Rights Reserved.
          </p>
          <div className="text-gray-500 text-xs flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

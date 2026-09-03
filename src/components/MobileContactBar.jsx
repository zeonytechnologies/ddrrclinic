import { Phone, CalendarCheck2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const MobileContactBar = ({ onBookAppointment }) => {
  // Configurable WhatsApp number (using primary phone if not specifically configured)
  const whatsappNumber = "919866512169"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20DDRR%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.`;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white md:hidden border-t border-brand-soft-gray shadow-[0_-4px_15px_rgba(0,0,0,0.05)] z-[100] rounded-t-2xl px-2 py-3 pb-6">
      <div className="flex justify-between items-center gap-2">
        <a 
          href={`tel:${clinicData.phones[0]}`}
          className="flex-1 flex flex-col items-center justify-center py-2 text-brand-dark-navy hover:text-brand-teal transition-colors"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] font-bold">CALL</span>
        </a>

        {/* Custom WhatsApp Icon using SVG to avoid extra dependencies if simple */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 text-[#25D366] hover:text-[#1da851] transition-colors"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span className="text-[10px] font-bold text-brand-dark-navy">WHATSAPP</span>
        </a>

        <button 
          onClick={onBookAppointment}
          className="flex-[1.5] flex flex-col items-center justify-center py-2 bg-brand-teal text-white rounded-xl shadow-sm border border-brand-bright-teal/30 active:scale-95 transition-transform"
        >
          <CalendarCheck2 size={20} className="mb-1" />
          <span className="text-[10px] font-bold">APPOINTMENT</span>
        </button>
      </div>
    </div>
  );
};

export default MobileContactBar;

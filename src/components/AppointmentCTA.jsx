import { motion } from 'framer-motion';
import { Phone, CalendarCheck2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const AppointmentCTA = ({ onBookAppointment }) => {
  return (
    <section className="py-24 bg-brand-deep-navy relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[400px] bg-brand-teal/20 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Subtle movement arcs */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] md:w-[800px] md:h-[800px] border-[1px] border-brand-teal/10 rounded-full" 
      />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready To Move Better?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10">
            Take the next step toward better movement and personalized physiotherapy care.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onBookAppointment} className="btn-primary w-full sm:w-auto text-lg px-8 py-4 shadow-[0_0_20px_rgba(7,158,165,0.4)] hover:shadow-[0_0_30px_rgba(22,196,204,0.6)]">
              <CalendarCheck2 className="mr-2 h-6 w-6" /> BOOK AN APPOINTMENT
            </button>
            
            <a href={`tel:${clinicData.phones[0]}`} className="btn-secondary w-full sm:w-auto text-lg px-8 py-4 bg-transparent border-white/20 text-white hover:bg-white hover:text-brand-deep-navy">
              <Phone className="mr-2 h-6 w-6" /> CALL {clinicData.phones[0]}
            </a>
          </div>
          
          <div className="mt-8 text-brand-bright-teal font-medium text-sm">
            Secondary Number: <a href={`tel:${clinicData.phones[1]}`} className="hover:underline">{clinicData.phones[1]}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentCTA;

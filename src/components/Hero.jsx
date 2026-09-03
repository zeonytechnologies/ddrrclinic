import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck2, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const Hero = ({ onBookAppointment }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-brand-light-bg">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-soft-gray text-brand-teal font-semibold text-xs tracking-wider mb-6 border border-brand-teal/20">
              PHYSIOTHERAPY & GENERAL MEDICINE CLINIC
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-brand-deep-navy leading-tight mb-4"
          >
            REHAB. <br />
            RECOVER. <br />
            <span className="text-brand-teal">PERFORM.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold text-brand-dark-navy mb-4"
          >
            Move Better. Feel Better. Live Better.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-lg mb-8 max-w-lg"
          >
            Personalized physiotherapy and rehabilitation care designed to help you recover, restore movement and return to an active lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <button onClick={onBookAppointment} className="btn-primary">
              <CalendarCheck2 className="mr-2 h-5 w-5" /> Book an Appointment
            </button>
            <a href={`tel:${clinicData.phones[0]}`} className="btn-secondary">
              <PhoneCall className="mr-2 h-5 w-5" /> Call Now
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 gap-3 text-sm text-brand-dark-navy font-medium"
          >
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-teal" /> Expert Physiotherapy</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-teal" /> Advanced Equipment</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-teal" /> Personalized Care</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-teal" /> Home Care Available</div>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10">
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-brand-soft-gray flex items-center justify-center">
              <span className="text-brand-teal font-medium">Hero Image Placeholder</span>
              <img 
                src="/src/assets/ddrr_hero.jpg" 
                alt="Physiotherapy session at DDRR Clinic" 
                className="rounded-3xl shadow-[0_20px_50px_rgba(8,39,68,0.15)] relative z-10 w-full object-cover aspect-[4/5] md:aspect-auto"
              />
            </div>
          </div>
          
          {/* Decorative arcs and glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-teal/30 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-brand-bright-teal/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-brand-soft-gray"
          >
            <div className="text-brand-teal text-4xl font-extrabold mb-1">6+</div>
            <div className="text-sm font-semibold text-brand-dark-navy leading-tight">Years in<br />Healthcare</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

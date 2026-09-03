import { motion } from 'framer-motion';
import { Home, CalendarCheck2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const HomeCare = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-brand-deep-navy text-white">
      {/* Background Teal Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep-navy via-brand-deep-navy to-brand-teal/20 z-0"></div>
      
      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-brand-teal/20 text-brand-bright-teal mb-6">
            <Home size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Professional Physiotherapy.<br />
            <span className="text-brand-bright-teal">At Your Doorstep.</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
            Home care services are available for patients who prefer physiotherapy support in the comfort of their home.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 max-w-md backdrop-blur-sm">
            <p className="font-bold tracking-wider text-brand-bright-teal text-sm mb-2">HOME CARE AVAILABLE</p>
            <p className="text-xl font-semibold mb-1">{clinicData.timings.homeCare}</p>
            <p className="text-gray-400 text-sm">{clinicData.timings.days}</p>
          </div>

          <a href="#contact" className="btn-primary bg-brand-bright-teal hover:bg-brand-teal text-brand-deep-navy hover:text-white">
            <CalendarCheck2 className="mr-2 h-5 w-5" /> Book Home Care
          </a>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative lg:h-[500px] hidden md:block"
        >
          {/* Image */}
          <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
            <img 
              src="/src/assets/ddrr_homecare.jpg" 
              alt="Home Care Physiotherapy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-navy/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-bold text-xl">Professional Care,</p>
                <p className="text-brand-bright-teal">Right at your doorstep.</p>
              </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-brand-teal text-white p-4 rounded-xl shadow-lg border border-brand-bright-teal/30 flex items-center gap-3"
          >
            <Home size={24} />
            <span className="font-bold">Doorstep Service</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCare;

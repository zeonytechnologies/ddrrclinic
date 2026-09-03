import { motion } from 'framer-motion';
import { Video, CalendarCheck2, PhoneOff } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const OnlineConsultation = () => {
  return (
    <section className="section-padding bg-brand-light-bg relative">
      <div className="container-custom">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-xl border border-brand-teal/10 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-teal font-bold tracking-wider text-sm mb-4 block">REMOTE SUPPORT</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep-navy mb-6">
                Consult From The Comfort Of Your Home
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Online consultation is available for patients who prefer guidance remotely. Get expert advice and personalized exercises without visiting the clinic.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-brand-soft-gray p-4 rounded-xl flex-1 border border-brand-teal/10">
                  <p className="font-bold text-brand-deep-navy text-sm mb-1">ONLINE CONSULTATION AVAILABLE</p>
                  <p className="text-sm text-gray-600">{clinicData.timings.days}</p>
                  <p className="text-brand-teal font-semibold">{clinicData.timings.homeCare}</p>
                </div>
                <div className="flex-1 flex items-center justify-center sm:justify-start">
                  <a href="#contact" className="btn-primary w-full sm:w-auto text-center">
                    <Video className="mr-2 h-5 w-5" /> Book Online Consultation
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <div className="relative aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 md:order-2">
              <img 
                src="/src/assets/ddrr_consult.jpg" 
                alt="Online Consultation" 
                className="w-full h-full object-cover"
              />
              {/* Overlay UI elements to simulate video call */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md rounded-full px-6 py-3 flex gap-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-red-500/80 flex items-center justify-center text-white cursor-pointer hover:bg-red-500 transition-colors">
                  <PhoneOff size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineConsultation;

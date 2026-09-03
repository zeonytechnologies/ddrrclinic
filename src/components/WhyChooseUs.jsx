import { motion } from 'framer-motion';
import { Star, ShieldCheck, UserCheck, Home, Video, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: Star, title: "EXPERT PHYSIOTHERAPY CARE" },
    { icon: ShieldCheck, title: "ADVANCED EQUIPMENT" },
    { icon: UserCheck, title: "PERSONALIZED TREATMENT PLANS" },
    { icon: Home, title: "HOME CARE AVAILABLE" },
    { icon: Video, title: "ONLINE CONSULTATION" },
    { icon: HeartHandshake, title: "PATIENT-CENTERED CARE" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep-navy">
            Why Choose DDRR Clinic?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            // Alternating backgrounds
            const isDark = index === 1 || index === 3 || index === 5;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-2xl border flex flex-col items-center text-center transition-transform hover:-translate-y-2 ${
                  isDark 
                    ? 'bg-brand-deep-navy border-brand-deep-navy text-white' 
                    : 'bg-brand-light-bg border-gray-100 text-brand-deep-navy'
                }`}
              >
                <div className={`p-4 rounded-full mb-6 ${
                  isDark ? 'bg-white/10 text-brand-bright-teal' : 'bg-white text-brand-teal shadow-sm'
                }`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-bold tracking-wide">
                  {reason.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

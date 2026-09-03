import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const About = () => {
  const stats = [
    { value: "6+", label: "Years in Healthcare" },
    { value: "3", label: "Physiotherapists" },
    { value: "10+", label: "Treatment Areas" },
  ];

  const timeline = ["ASSESS", "TREAT", "RECOVER", "PERFORM"];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden bg-brand-soft-gray border border-gray-200 shadow-xl"
        >
          <img 
            src="/assets/ddrr_about.jpg" 
            alt="DDRR Clinic facility" 
            className="rounded-3xl shadow-xl w-full h-full object-cover relative z-10"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
          <div className="absolute bottom-8 left-8 text-white z-30">
            <p className="text-2xl font-bold">DDRR Clinic</p>
            <p className="text-sm opacity-90">KVPR Pet Ekambarakuppam</p>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-teal font-bold tracking-wider text-sm mb-4 block">ABOUT DDRR CLINIC</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep-navy mb-6 leading-tight">
            Helping You Move Better, Feel Better and Live Better.
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            DDRR Clinic is focused on physiotherapy, rehabilitation and personalized care to help individuals improve movement, manage physical conditions and work toward a healthier, more active lifestyle.
          </p>

          {/* Stats */}
          <div className="flex flex-row justify-between gap-2 md:gap-6 mb-12 py-8 border-y border-brand-soft-gray">
            {stats.map((stat, i) => (
              <div key={i} className="text-center flex-1">
                <div className="text-2xl md:text-4xl font-black text-brand-teal mb-1 md:mb-2">{stat.value}</div>
                <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-brand-dark-navy uppercase tracking-wide leading-tight break-words">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div>
            <p className="text-sm font-bold text-gray-400 mb-4 tracking-widest">OUR PHILOSOPHY</p>
            <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-4">
              {timeline.map((step, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-4 shrink-0">
                  <div className="px-4 py-2 rounded-full bg-brand-light-bg text-brand-deep-navy font-bold text-sm border border-brand-teal/20">
                    {step}
                  </div>
                  {index < timeline.length - 1 && (
                    <ArrowDown className="text-brand-teal -rotate-90 md:rotate-0" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

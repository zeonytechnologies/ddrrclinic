import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedRehab = () => {
  const points = [
    { top: '25%', left: '50%', label: 'Neck' },
    { top: '35%', left: '35%', label: 'Shoulder' },
    { top: '50%', left: '50%', label: 'Back' },
    { top: '75%', left: '55%', label: 'Knee' },
    { top: '90%', left: '60%', label: 'Ankle' },
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-deep-navy relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-brand-teal/10 to-transparent pointer-events-none" />
      
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Your Recovery Starts With <span className="text-brand-bright-teal">Movement.</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed">
            Focused physiotherapy care designed around your individual needs and recovery goals. We blend expert knowledge with advanced techniques to help you return to what you love.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-teal text-white font-bold hover:bg-brand-bright-teal transition-colors group">
            Start Your Recovery
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] max-w-md mx-auto w-full lg:ml-auto"
        >
          {/* Abstract Body Visualization Placeholder */}
          <div className="absolute inset-0 bg-brand-dark-navy rounded-[3rem] border border-brand-teal/20 overflow-hidden flex items-center justify-center">
             <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/src/assets/ddrr_rehab.jpg" 
                alt="Human body biomechanics" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />
            </div>
          </div>

          {/* Glowing Points */}
          {points.map((point, index) => (
            <div 
              key={index}
              className="absolute group"
              style={{ top: point.top, left: point.left }}
            >
              {/* Outer pulsing ring */}
              <div className="absolute -inset-3 bg-brand-bright-teal/30 rounded-full animate-ping opacity-75"></div>
              {/* Inner dot */}
              <div className="relative w-4 h-4 bg-brand-bright-teal rounded-full shadow-[0_0_15px_rgba(22,196,204,0.8)]"></div>
              
              {/* Tooltip on hover (simulated) */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white/10 backdrop-blur-sm text-brand-bright-teal text-xs font-bold px-2 py-1 rounded">
                {point.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRehab;

import { motion } from 'framer-motion';
import { treatments } from '../data/treatments';

const Treatments = () => {
  return (
    <section id="treatments" className="section-padding bg-brand-light-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-teal font-bold tracking-wider text-sm mb-4 block">OUR EXPERTISE</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep-navy mb-6">
            Conditions We Treat
          </h2>
          <p className="text-gray-600 text-lg">
            Personalized physiotherapy approaches for a range of movement and musculoskeletal conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {treatments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Subtle teal glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-brand-light-bg text-brand-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-deep-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Treatments;

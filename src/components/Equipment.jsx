import { motion } from 'framer-motion';
import { equipment } from '../data/equipment';

const Equipment = () => {
  return (
    <section id="equipment" className="section-padding bg-brand-soft-gray/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep-navy mb-4">
            Advanced Equipment For Your Care
          </h2>
          <p className="text-gray-600 text-lg">
            Modern physiotherapy equipment used as part of treatment and rehabilitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-teal/10 transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Image Area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-brand-teal text-sm font-medium">
                    Equipment Image Placeholder
                  </div>
                  {/* <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> */}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-brand-deep-navy/0 group-hover:bg-brand-deep-navy/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Icon floating */}
                  <div className="absolute -top-6 right-6 w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white group-hover:scale-110 group-hover:bg-brand-bright-teal transition-all duration-300">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-xl font-bold text-brand-deep-navy mb-2 group-hover:text-brand-teal transition-colors">{item.name}</h3>
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

export default Equipment;

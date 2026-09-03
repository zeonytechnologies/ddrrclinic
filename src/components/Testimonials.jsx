import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/gallery';

const Testimonials = () => {
  return (
    <section className="section-padding bg-brand-soft-gray/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep-navy">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
            >
              {/* Quote mark decorative */}
              <div className="absolute top-6 right-6 text-6xl text-brand-teal/10 font-serif leading-none">
                "
              </div>
              
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed relative z-10">
                "{testimonial.review}"
              </p>
              <div className="font-bold text-brand-deep-navy">
                {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

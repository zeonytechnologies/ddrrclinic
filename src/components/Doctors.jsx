import { motion } from 'framer-motion';
import { doctors } from '../data/doctors';

const Doctors = () => {
  return (
    <section id="doctors" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-brand-teal font-bold tracking-wider text-sm mb-4 block">OUR TEAM</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep-navy">
            Meet Our Physiotherapists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-[2rem] bg-brand-light-bg aspect-[3/4] border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-brand-teal/20">
                {/* Image */}
                <div className="relative aspect-square md:aspect-[4/5] bg-gray-100 overflow-hidden">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Social/Contact Overlay on Hover */}
                </div>
                <div className="absolute inset-0 bg-brand-teal/0 group-hover:bg-brand-teal/10 transition-colors duration-300" />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-brand-deep-navy mb-1 group-hover:text-brand-teal transition-colors">{doctor.name}</h3>
                <p className="text-brand-teal font-semibold text-sm mb-2">{doctor.qualification}</p>
                <p className="text-gray-500 text-sm">{doctor.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

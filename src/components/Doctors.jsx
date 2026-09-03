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
              className="bg-brand-soft-gray/50 rounded-[2rem] p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-2 group text-center"
            >
              <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-6 border border-brand-teal/20 group-hover:bg-brand-teal transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-teal group-hover:text-white transition-colors duration-300"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>

              <h3 className="text-2xl font-bold text-brand-deep-navy mb-2 group-hover:text-brand-teal transition-colors">{doctor.name}</h3>
              <div className="inline-block px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full font-semibold text-sm mb-3">
                {doctor.qualification}
              </div>
              <p className="text-gray-500 font-medium">{doctor.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

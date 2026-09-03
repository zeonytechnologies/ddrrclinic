import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Send, CheckCircle } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: 'Failed to send message. Please try calling us instead.' });
    }
  };

  return (
    <section id="contact" className="section-padding bg-brand-light-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep-navy">
            Contact & Visit DDRR Clinic
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Left: Contact Form */}
          <div className="p-8 md:p-12 bg-brand-deep-navy text-white relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-teal/20 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="font-bold text-2xl mb-2">Send us a message</h3>
              <p className="text-gray-300 mb-8 text-sm">Fill out the form below and we will get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-bright-teal focus:ring-1 focus:ring-brand-bright-teal transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-bright-teal focus:ring-1 focus:ring-brand-bright-teal transition-all"
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number" 
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-bright-teal focus:ring-1 focus:ring-brand-bright-teal transition-all"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    rows="4"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-bright-teal focus:ring-1 focus:ring-brand-bright-teal transition-all resize-none"
                  ></textarea>
                </div>
                
                {status.success && (
                  <div className="bg-green-500/20 text-green-300 border border-green-500/30 px-4 py-3 rounded-lg flex items-center gap-2 text-sm">
                    <CheckCircle size={18} />
                    Message sent successfully! We will contact you soon.
                  </div>
                )}
                
                {status.error && (
                  <div className="bg-red-500/20 text-red-300 border border-red-500/30 px-4 py-3 rounded-lg text-sm">
                    {status.error}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status.submitting}
                  className="w-full bg-brand-teal hover:bg-brand-bright-teal text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status.submitting ? 'Sending...' : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right: Contact Information */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-light-bg rounded-full text-brand-teal shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-deep-navy mb-1">Clinic Address</h4>
                  <p className="text-gray-600 leading-relaxed max-w-sm">
                    {clinicData.address}
                  </p>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-light-bg rounded-full text-brand-teal shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-deep-navy mb-1">Contact Numbers</h4>
                  <p className="text-gray-600">
                    <a href={`tel:${clinicData.phones[0]}`} className="hover:text-brand-teal block">{clinicData.phones[0]}</a>
                    <a href={`tel:${clinicData.phones[1]}`} className="hover:text-brand-teal block">{clinicData.phones[1]}</a>
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-light-bg rounded-full text-brand-teal shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-deep-navy mb-1">Timings</h4>
                  <div className="text-gray-600 space-y-2 text-sm">
                    <p><span className="font-semibold text-brand-dark-navy block">Clinic Visit:</span> {clinicData.timings.clinicVisit}</p>
                    <p><span className="font-semibold text-brand-dark-navy block">Home Care / Online:</span> {clinicData.timings.homeCare}</p>
                    <p className="text-brand-teal font-medium mt-1">{clinicData.timings.days}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
              <a href={`tel:${clinicData.phones[0]}`} className="btn-primary w-full text-center">
                Call Now
              </a>
              <button className="btn-secondary w-full">
                <Navigation className="mr-2 h-4 w-4" /> Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

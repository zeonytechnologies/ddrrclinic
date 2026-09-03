import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CalendarCheck2, CheckCircle } from 'lucide-react';
import { treatments } from '../data/treatments';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    treatment: ''
  });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', phone: '', date: '', treatment: '' });
        
        // Auto close after 3 seconds on success
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to send appointment request');
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: 'Failed to send request. Please try calling us instead.' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-deep-navy/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative"
            >
              {/* Header */}
              <div className="bg-brand-deep-navy p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
                <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
                  <CalendarCheck2 size={24} className="text-brand-bright-teal" />
                  Book Appointment
                </h3>
                <p className="text-brand-soft-gray/80 text-sm">Fill in your details and we will confirm your schedule.</p>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                {status.success ? (
                  <div className="text-center py-8">
                    <CheckCircle className="mx-auto h-16 w-16 text-brand-teal mb-4" />
                    <h4 className="text-xl font-bold text-brand-deep-navy mb-2">Request Sent!</h4>
                    <p className="text-gray-600 text-sm mb-6">
                      Thank you for booking. We have sent a confirmation to your email and our team will contact you shortly to confirm the exact time.
                    </p>
                    <button onClick={onClose} className="btn-primary w-full">Close</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark-navy mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-brand-dark-navy mb-1">Phone *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-brand-dark-navy mb-1">Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-brand-dark-navy mb-1">Preferred Date *</label>
                        <input 
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-brand-dark-navy mb-1">Treatment Type</label>
                        <select 
                          name="treatment"
                          value={formData.treatment}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all bg-white"
                        >
                          <option value="">Select Treatment</option>
                          {treatments.map(t => (
                            <option key={t.id} value={t.title}>{t.title}</option>
                          ))}
                          <option value="General Consultation">General Consultation</option>
                          <option value="Home Care">Home Care</option>
                        </select>
                      </div>
                    </div>

                    {status.error && (
                      <div className="bg-red-50 text-red-500 border border-red-100 px-4 py-3 rounded-lg text-sm mt-4">
                        {status.error}
                      </div>
                    )}

                    <div className="pt-4 mt-6 border-t border-gray-100 flex justify-end gap-3">
                      <button 
                        type="button" 
                        onClick={onClose}
                        className="px-5 py-2.5 text-gray-500 font-medium hover:text-gray-700 transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        disabled={status.submitting}
                        className="bg-brand-teal hover:bg-brand-bright-teal text-white font-bold px-6 py-2.5 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status.submitting ? 'Sending Request...' : 'Submit Request'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;

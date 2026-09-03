import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import About from './components/About';
import Treatments from './components/Treatments';
import FeaturedRehab from './components/FeaturedRehab';
import WhyChooseUs from './components/WhyChooseUs';
import Equipment from './components/Equipment';
import Doctors from './components/Doctors';
import HomeCare from './components/HomeCare';
import OnlineConsultation from './components/OnlineConsultation';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import AppointmentCTA from './components/AppointmentCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileContactBar from './components/MobileContactBar';
import AppointmentModal from './components/AppointmentModal';

function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openAppointmentModal = (e) => {
    e?.preventDefault();
    setIsAppointmentModalOpen(true);
  };

  return (
    <div className="font-sans antialiased text-brand-dark-navy bg-brand-light-bg pb-20 md:pb-0">
      <Navbar onBookAppointment={openAppointmentModal} />
      <main>
        <Hero onBookAppointment={openAppointmentModal} />
        <QuickInfo />
        <About />
        <Treatments />
        <FeaturedRehab />
        <WhyChooseUs />
        <Equipment />
        <Doctors />
        <HomeCare />
        <OnlineConsultation />
        <Gallery />
        <Testimonials />
        <AppointmentCTA onBookAppointment={openAppointmentModal} />
        <Contact />
      </main>
      <Footer />
      <MobileContactBar onBookAppointment={openAppointmentModal} />
      
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </div>
  );
}

export default App;

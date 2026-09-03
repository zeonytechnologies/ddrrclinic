import { Clock, Video, Home, Phone } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const QuickInfo = () => {
  const cards = [
    {
      icon: Clock,
      title: "CLINIC VISIT",
      time: clinicData.timings.clinicVisit,
      days: clinicData.timings.days,
    },
    {
      icon: Video,
      title: "ONLINE CONSULTATION",
      time: "AVAILABLE",
      days: clinicData.timings.days,
    },
    {
      icon: Home,
      title: "HOME CARE",
      time: clinicData.timings.homeCare,
      days: clinicData.timings.days,
    },
    {
      icon: Phone,
      title: "BOOK APPOINTMENT",
      time: clinicData.phones[0],
      days: clinicData.phones[1],
    },
  ];

  return (
    <section className="bg-brand-deep-navy py-8 relative z-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-3 bg-brand-teal/20 rounded-lg text-brand-bright-teal">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide mb-1">{card.title}</h3>
                  <p className="text-brand-bright-teal font-semibold text-sm">{card.time}</p>
                  <p className="text-gray-400 text-xs">{card.days}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;

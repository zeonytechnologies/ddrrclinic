import { Zap, Activity, Waves, Power, MoveUp, Radio } from 'lucide-react';

export const equipment = [
  {
    id: 1,
    name: "TENS",
    icon: Zap,
    description: "Transcutaneous Electrical Nerve Stimulation for targeted pain relief and muscle support.",
    color: "from-teal-400 to-emerald-600"
  },
  {
    id: 2,
    name: "MUSCLE STIMULATOR",
    icon: Activity,
    description: "Electrical impulses to cause muscle contraction for rehab and strengthening.",
    color: "from-blue-400 to-indigo-600"
  },
  {
    id: 3,
    name: "WAX Therapy",
    icon: Waves,
    description: "Soothing thermal therapy to improve circulation and ease joint stiffness.",
    color: "from-orange-400 to-amber-600"
  },
  {
    id: 4,
    name: "SWD",
    icon: Power,
    description: "Shortwave Diathermy for deep tissue heating and pain relief.",
    color: "from-brand-teal to-brand-deep-navy"
  },
  {
    id: 5,
    name: "TRACTION",
    icon: MoveUp,
    description: "Mechanical support to decompress the spine and alleviate nerve pressure.",
    color: "from-cyan-500 to-blue-700"
  },
  {
    id: 6,
    name: "ULTRASOUND",
    icon: Radio,
    description: "High-frequency sound waves to promote tissue healing and reduce inflammation.",
    color: "from-violet-400 to-purple-600"
  }
];

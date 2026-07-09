import { Search, Clock, CreditCard, ShieldCheck, LayoutGrid, History, Bell, Navigation } from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      icon: <Search className="w-6 h-6 text-emerald-400" />,
      title: "Easy Ground Discovery",
      desc: "Filters and map searches designed to let you locate premium cricket boxes based on turf specifications, floodlights, and player capacities."
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
      title: "Real-Time Slot Availability",
      desc: "Instantly view available timings. Our automated calendar locks slots dynamically to prevent timing conflicts and wait periods."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-emerald-400" />,
      title: "Secure Online Payments",
      desc: "Integrated with secure planned payment checkout experience supporting instant payments via card, UPI, and net banking."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Verified Turf Owners",
      desc: "Every listed ground undergoes a rigorous offline check, validating ownership documents, safety guidelines, and amenity standards."
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-emerald-400" />,
      title: "Owner Dashboard",
      desc: "A custom ERP portal allowing ground owners to adjust prices, track slot bookings, block slots for maintenance, and compile payouts."
    },
    {
      icon: <History className="w-6 h-6 text-emerald-400" />,
      title: "Booking History",
      desc: "Access invoice receipts, digital entry passes, historical team play metrics, and quick single-tap slot re-bookings."
    },
    {
      icon: <Bell className="w-6 h-6 text-emerald-400" />,
      title: "Push Notifications",
      desc: "Automatic alerts for upcoming games, booking confirmations, weather-related updates, and merchant notifications."
    },
    {
      icon: <Navigation className="w-6 h-6 text-emerald-400" />,
      title: "Live Booking Updates",
      desc: "Interactive status updates. Track your booking verification status, payout timelines, and turf activation parameters."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Decorative linear glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Core Capabilities</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Advanced Mobile Application Features
          </h3>
          <p className="mt-4 text-zinc-400 font-light">
            An overview of the complete administrative and booking functionalities planned for the BookMyCricBox client-side and business applications.
          </p>
          <p className="mt-2 text-xs font-mono text-zinc-500 italic">
            *All features described below represent the prospective design and layout of our mobile platform.
          </p>
        </div>

        {/* Features Bento/Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#121212] border border-white/5 hover:border-emerald-500/20 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[10px] text-zinc-500 font-mono">
                <span>Platform Compatibility:</span>
                <span className="ml-1.5 text-zinc-400">iOS & Android</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

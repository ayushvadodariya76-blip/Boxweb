import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, MapPin, Zap, ArrowRight } from 'lucide-react';

export default function About() {
  const whyItems = [
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      title: "100% Dedicated to Cricket",
      desc: "Unlike generic multi-sport booking sites, our features are tailormade for box cricket specifications, including equipment renting, player roles, and local turf parameters."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Secure Payment Security",
      desc: "Our planned payments ecosystem is designed with high-grade security features, offering instant refunds and clear digital invoicing."
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-400" />,
      title: "Real-Time Direct Sync",
      desc: "Direct communication with verified grounds removes the hassle of double-bookings, verbal promises, and manual WhatsApp coordination."
    }
  ];

  const roadmapSteps = [
    {
      phase: "Phase 1: Technical Setup",
      title: "Platform Setup",
      desc: "Establishing our web presence, setting up secure platform configurations, and launching owner partner programs."
    },
    {
      phase: "Phase 2: App Launch",
      title: "Android Beta Deployment",
      desc: "Deploying our highly polished Android app on Google Play with sandbox payment trials for launch partners."
    },
    {
      phase: "Phase 3: Nationwide Expansion",
      title: "Sports Hub Rollout",
      desc: "Expanding listings to include premium turf networks across top sports hubs, alongside league organizers."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Our Core Identity</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for Passionate Cricketers & Professional Turf Owners
          </h3>
          <p className="mt-4 text-zinc-400 font-light">
            BookMyCricBox bridges the gap between active players looking for the perfect pitch and box owners aiming to maximize turf occupancy.
          </p>
        </div>

        {/* Problem & Vision Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Problem Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-white/5 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full pointer-events-none" />
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">The Problem We Solve</h4>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Chaos in Sports Slot Scheduling</h3>
            <p className="text-zinc-400 font-light leading-relaxed mb-6">
              Organizing box cricket is often plagued by manual slot checks, endless phone calls, uncoordinated WhatsApp groups, and untracked cash advances. Venue owners struggle to display accurate slot availability, causing double-bookings and lost business revenue.
            </p>
            <div className="p-4 rounded-2xl bg-zinc-950 border border-white/5 flex items-center space-x-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 font-mono text-xs font-bold">!</span>
              <p className="text-xs text-zinc-500 font-mono">Traditional bookings result in a 35% under-utilized slot rate for local turf arenas.</p>
            </div>
          </div>

          {/* Vision & Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-white/5 relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none" />
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-500 mb-4">Vision & Mission</h4>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Unifying the Turf Ecosystem</h3>
              
              <div className="space-y-6 mt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-display font-semibold text-white text-sm">Our Mission</h5>
                    <p className="text-xs text-zinc-400 mt-1 font-light">
                      To empower box owners with highly modern administrative tools while giving sports enthusiasts access to secure, transparent slot bookings in less than three clicks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-display font-semibold text-white text-sm">Our Vision</h5>
                    <p className="text-xs text-zinc-400 mt-1 font-light">
                      To become the nationwide gold standard digital infrastructure for recreational team sports slot booking, enabling community play everywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Why BookMyCricBox?</h3>
            <p className="text-sm text-zinc-500 mt-1">Our philosophy places honest, high-performance service before anything else.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyItems.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-display font-semibold text-white text-base mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Roadmap */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Startup Roadmap</h3>
            <p className="text-sm text-zinc-500 mt-1">Our strategic path toward launching India's premium cricket box sports application.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Connection line for visual flow on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-px bg-white/5 -translate-y-1/2 -z-10" />

            {roadmapSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#121212] border border-white/5 relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="font-mono text-[10px] text-emerald-400 font-semibold tracking-wider block mb-3 uppercase">
                    {step.phase}
                  </span>
                  <h4 className="font-display font-semibold text-white text-base mb-2">{step.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">{step.desc}</p>
                </div>
                <div className="mt-6 flex items-center text-[10px] text-zinc-500 font-mono">
                  <span>Progress Status:</span>
                  <span className={`ml-2 px-2 py-0.5 rounded-full ${
                    idx === 0 
                      ? 'bg-emerald-500/10 text-emerald-400' 
                      : idx === 1 
                      ? 'bg-amber-500/10 text-amber-400' 
                      : 'bg-zinc-800 text-zinc-500'
                  }`}>
                    {idx === 0 ? 'Active Integration' : idx === 1 ? 'Under Development' : 'Scheduled'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

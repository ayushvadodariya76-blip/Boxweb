import { Calendar, Search, CreditCard, CheckCircle, Smile, FileText, Check, Shield, TrendingUp, Smartphone } from 'lucide-react';

export default function HowItWorks() {
  const playerSteps = [
    {
      icon: <Search className="w-5 h-5 text-emerald-400" />,
      title: "1. Explore Grounds",
      desc: "Open the BookMyCricBox app and browse top-rated box cricket arenas near you based on live geolocation and user reviews."
    },
    {
      icon: <Calendar className="w-5 h-5 text-emerald-400" />,
      title: "2. Choose Time Slot",
      desc: "Select your preferred date and choose from real-time dynamic slots (morning, afternoon, or premium floodlight evening hours)."
    },
    {
      icon: <CreditCard className="w-5 h-5 text-emerald-400" />,
      title: "3. Secure Payment",
      desc: "Complete the checkout safely via UPI, net banking, or debit/credit cards powered by secure, reliable payment routing."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
      title: "4. Instant Confirmation",
      desc: "Get an automated booking receipt with a secure QR code for ground access. No manual phone checks required."
    },
    {
      icon: <Smile className="w-5 h-5 text-emerald-400" />,
      title: "5. Enjoy Cricket",
      desc: "Arrive at the turf, scan your code, step on the pitch, and play! Zero delays or timing overlaps with other groups."
    }
  ];

  const ownerSteps = [
    {
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      title: "1. Register Ground",
      desc: "List your box dimensions, amenities (floodlights, changing rooms, parking), rates, and official opening/closing hours."
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: "2. Document Verification",
      desc: "Our team reviews the registration details and owner identity to ensure only genuine listings are active on our map."
    },
    {
      icon: <Check className="w-5 h-5 text-emerald-400" />,
      title: "3. Listing Approved",
      desc: "Once verified, your arena joins our dynamic booking map. Instantly visible to thousands of cricket players."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      title: "4. Receive Bookings",
      desc: "Receive booking notifications, manage calendars, block maintenance hours, and track automated weekly payouts."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">System Architecture</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How The Ecosystem Works
          </h3>
          <p className="mt-4 text-zinc-400 font-light">
            We operate on a simple, modern principles of direct connectivity.
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 text-xs font-medium">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span>Note: Features shown represent the planned mobile application experience.</span>
          </div>
        </div>

        {/* Player vs Owner Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Player Flow Column */}
          <div className="space-y-10">
            <div className="border-b border-white/10 pb-4 mb-8">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Client Portal</span>
              <h4 className="font-display text-2xl font-bold text-white mt-1">For The Players</h4>
              <p className="text-sm text-zinc-400 mt-1 font-light">A hassle-free booking experience in under 60 seconds.</p>
            </div>

            <div className="relative border-l-2 border-emerald-500/20 pl-6 ml-3 space-y-8">
              {playerSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Step bullet */}
                  <div className="absolute -left-[37px] top-0.5 w-6 h-6 rounded-full bg-[#0B0B0B] border-2 border-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                    {idx + 1}
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-[#121212]/50 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h5 className="font-display font-semibold text-white text-base">{step.title}</h5>
                    </div>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Owner Flow Column */}
          <div className="space-y-10">
            <div className="border-b border-white/10 pb-4 mb-8">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Partner Portal</span>
              <h4 className="font-display text-2xl font-bold text-white mt-1">For Turf Owners</h4>
              <p className="text-sm text-zinc-400 mt-1 font-light">Modern ERP tools to manage and maximize venue occupancy.</p>
            </div>

            <div className="relative border-l-2 border-emerald-500/20 pl-6 ml-3 space-y-8">
              {ownerSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Step bullet */}
                  <div className="absolute -left-[37px] top-0.5 w-6 h-6 rounded-full bg-[#0B0B0B] border-2 border-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                    {idx + 1}
                  </div>

                  <div className="p-6 rounded-2xl bg-[#121212]/50 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h5 className="font-display font-semibold text-white text-base">{step.title}</h5>
                    </div>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

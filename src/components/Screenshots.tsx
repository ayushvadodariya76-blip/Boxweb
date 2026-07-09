import { useState } from 'react';
import { Smartphone, Sparkles, MapPin, Search, Calendar, Clock, CreditCard, Shield, CheckCircle } from 'lucide-react';

export default function Screenshots() {
  const [activePreview, setActivePreview] = useState(0);

  const previews = [
    {
      title: "Explore Turfs",
      subtitle: "Discover Elite Box Cricket Grounds",
      desc: "An intuitive geolocated dashboard showing active box venues, distances, dynamic reviews, and standard slot starting prices.",
      render: () => (
        <div className="bg-[#0B0B0B] h-full flex flex-col justify-between p-4 font-sans text-left">
          {/* Top Bar */}
          <div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <span className="text-[10px] text-zinc-400 font-mono">Location</span>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] text-white font-semibold">Bengaluru, KA</span>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="bg-zinc-900 border border-white/5 rounded-xl p-2.5 flex items-center space-x-2 mb-4">
              <Search className="w-3.5 h-3.5 text-zinc-500" />
              <div className="text-[10px] text-zinc-500">Search premium turf boxes...</div>
            </div>

            {/* Turf List Concept */}
            <div className="space-y-3">
              <div className="p-3 bg-zinc-950 rounded-xl border border-white/5">
                <div className="h-24 bg-zinc-900 rounded-lg flex items-center justify-center border border-white/5 mb-2 overflow-hidden relative">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[8px] font-mono text-emerald-400 z-10">
                    Open
                  </div>
                  <img
                    src="/src/assets/images/box_cricket_turf_1783603339896.jpg"
                    alt="Challengers Box Arena"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h5 className="text-[11px] font-bold text-white">Challengers Box Arena</h5>
                <p className="text-[9px] text-zinc-400 mt-0.5">Off Outer Ring Road • 1.2 km</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                  <span className="text-[8px] text-emerald-400 font-mono">₹1,200/hr onwards</span>
                  <span className="text-[8px] text-zinc-500 font-mono">⭐ 4.8</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* App Navigation Placeholder */}
          <div className="border-t border-white/5 pt-2 flex justify-around text-zinc-500 text-[9px] font-mono">
            <span className="text-emerald-400">Explore</span>
            <span>Bookings</span>
            <span>Profile</span>
          </div>
        </div>
      )
    },
    {
      title: "Select Timings",
      subtitle: "Dynamic Live Slot Allocation",
      desc: "Say goodbye to double-bookings. Players choose dates and pick from real-time color-coded slot grids indicating availability.",
      render: () => (
        <div className="bg-[#0B0B0B] h-full flex flex-col justify-between p-4 font-sans text-left">
          <div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <span className="text-[10px] text-white font-bold">Challengers Box Arena</span>
              <span className="text-[8px] text-zinc-400 font-mono">Step 2 of 3</span>
            </div>

            {/* Date Swiper Placeholder */}
            <h5 className="text-[10px] text-zinc-400 font-mono mb-2 uppercase">Select Date</h5>
            <div className="grid grid-cols-4 gap-1.5 mb-4">
              <div className="p-2 bg-emerald-500 text-black text-center rounded-lg">
                <p className="text-[8px] font-mono uppercase">Today</p>
                <p className="text-[11px] font-bold">08 Jul</p>
              </div>
              <div className="p-2 bg-zinc-950 border border-white/5 text-zinc-400 text-center rounded-lg">
                <p className="text-[8px] font-mono uppercase">Thu</p>
                <p className="text-[11px] font-bold">09 Jul</p>
              </div>
              <div className="p-2 bg-zinc-950 border border-white/5 text-zinc-400 text-center rounded-lg">
                <p className="text-[8px] font-mono uppercase">Fri</p>
                <p className="text-[11px] font-bold">10 Jul</p>
              </div>
              <div className="p-2 bg-zinc-950 border border-white/5 text-zinc-400 text-center rounded-lg">
                <p className="text-[8px] font-mono uppercase">Sat</p>
                <p className="text-[11px] font-bold">11 Jul</p>
              </div>
            </div>

            {/* Grid of Slots */}
            <h5 className="text-[10px] text-zinc-400 font-mono mb-2 uppercase">Select Slot</h5>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 bg-zinc-900 border border-emerald-500/30 text-center rounded-lg">
                <p className="text-[10px] font-bold text-emerald-400">06:00 AM - 07:00 AM</p>
                <p className="text-[8px] text-zinc-500 mt-0.5">₹1,000</p>
              </div>
              <div className="p-2.5 bg-zinc-950 opacity-40 border border-white/5 text-center rounded-lg">
                <p className="text-[10px] font-bold text-zinc-500 line-through">07:00 AM - 08:00 AM</p>
                <p className="text-[8px] text-zinc-600 mt-0.5">Booked</p>
              </div>
              <div className="p-2.5 bg-zinc-900 border border-white/5 text-center rounded-lg">
                <p className="text-[10px] font-bold text-zinc-300">08:00 AM - 09:00 AM</p>
                <p className="text-[8px] text-zinc-500 mt-0.5">₹1,200</p>
              </div>
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500 text-center rounded-lg">
                <p className="text-[10px] font-bold text-emerald-400">06:00 PM - 07:00 PM</p>
                <p className="text-[8px] text-emerald-300 mt-0.5">Selected (₹1,500)</p>
              </div>
            </div>
          </div>

          <div>
            <button className="w-full py-2.5 rounded-xl bg-emerald-500 text-black text-[11px] font-bold text-center">
              Proceed to Secure Checkout
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Razorpay Checkout",
      subtitle: "Secure Payment Routing",
      desc: "Complete direct booking payments safely. Integrates seamlessly with UPI, Cards, and Netbanking. Payouts are safely routed to verified owners.",
      render: () => (
        <div className="bg-[#0B0B0B] h-full flex flex-col justify-between p-4 font-sans text-left">
          <div>
            <div className="flex items-center space-x-2 border-b border-white/5 pb-2 mb-3">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-mono text-zinc-400">Razorpay Secure Checkout</span>
            </div>

            {/* Receipt Summary */}
            <div className="p-3 bg-zinc-950 rounded-xl border border-white/5 mb-4">
              <div className="flex justify-between text-[10px] text-zinc-400">
                <span>Challengers Box Arena</span>
                <span>08 Jul</span>
              </div>
              <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                <span>Slot Timing</span>
                <span>06:00 PM (1 hr)</span>
              </div>
              <div className="border-t border-white/5 mt-2 pt-2 flex justify-between text-[11px] font-bold text-white">
                <span>Total Amount</span>
                <span className="text-emerald-400">₹1,500.00</span>
              </div>
            </div>

            {/* Success state mockup */}
            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <h5 className="text-[11px] font-bold text-white">Payment Authorized</h5>
              <p className="text-[8px] text-zinc-500 mt-0.5">Transaction ID: pay_Hsd92Jskd92</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[7px] text-zinc-500 font-mono">Secured with 256-bit SSL Payout Routing</p>
            <div className="mt-1 bg-white/5 py-1 px-2 rounded text-[8px] text-zinc-400 inline-block font-mono">
              Compliance Environment Ready
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="screenshots" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Product Previews</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            App Design Concept
          </h3>
          <p className="mt-4 text-zinc-400 font-light">
            An aesthetic, high-fidelity demonstration of how cricketers and ground owners will interact inside the mobile applications currently under development.
          </p>
        </div>

        {/* Dynamic Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Descriptions List */}
          <div className="lg:col-span-5 space-y-4">
            {previews.map((preview, idx) => (
              <div
                key={idx}
                onClick={() => setActivePreview(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activePreview === idx
                    ? 'bg-[#121212] border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                    : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                    activePreview === idx ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-zinc-400'
                  }`}>
                    0{idx + 1}
                  </span>
                  <h4 className="font-display font-bold text-white text-base">{preview.title}</h4>
                </div>
                <h5 className="text-xs text-emerald-400 font-mono mt-2 font-medium">{preview.subtitle}</h5>
                <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">{preview.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Mobile Device Frame */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative">
              {/* Outer Glow behind device */}
              <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

              {/* Physical Mobile Frame */}
              <div className="relative w-[300px] h-[610px] bg-zinc-950 rounded-[44px] p-3 shadow-2xl border-4 border-zinc-800 ring-1 ring-white/10 overflow-hidden">
                {/* Speaker Grill & Camera Punchhole (Notch) */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 flex items-center justify-between px-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  <div className="w-12 h-1 bg-zinc-900 rounded-full" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
                </div>

                {/* Internal Screen Content */}
                <div className="w-full h-full rounded-[36px] overflow-hidden border border-white/5 relative bg-[#0B0B0B]">
                  {/* Status Indicator padding */}
                  <div className="h-6 bg-black flex items-center justify-between px-6 text-[8px] font-mono text-zinc-500 relative z-20">
                    <span>BookMyCricBox</span>
                    <span>12:00 PM</span>
                  </div>
                  
                  {/* Dynamic Render of Selected Tab */}
                  <div className="h-[calc(100%-24px)]">
                    {previews[activePreview].render()}
                  </div>
                </div>
              </div>

              {/* Decorative label */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-[9px] font-mono text-zinc-500 tracking-wider uppercase">
                Interactive CSS Mobile Mockup
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

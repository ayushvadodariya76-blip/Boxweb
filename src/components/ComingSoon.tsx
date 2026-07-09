import { motion } from 'motion/react';
import { Smartphone, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#121212] border border-white/5 relative overflow-hidden">
          {/* Subtle accent border top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          
          <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Sparkles className="w-6 h-6 text-emerald-400" />
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Launching Soon on Google Play
          </h3>
          
          <p className="mt-4 text-base text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            BookMyCricBox is currently in active development. Our Android application is undergong sandbox payment evaluations to ensure a seamless booking cycle for sports lovers. Soon, local turf players will be able to lock in slots with instant digital verifications.
          </p>

          {/* Timeline features list */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
            <div className="flex items-start space-x-3 p-3 bg-zinc-950 rounded-xl border border-white/5">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-white block">Direct Booking Engine</span>
                <span className="text-[10px] text-zinc-500">Instant database confirmations with owners.</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-zinc-950 rounded-xl border border-white/5">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-white block">Secure Payment Gateway</span>
                <span className="text-[10px] text-zinc-500">Fully secure transaction routing.</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-zinc-950 rounded-xl border border-white/5">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-white block">Verified Turf Maps</span>
                <span className="text-[10px] text-zinc-500">Only genuine, verified sports facilities listed.</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-zinc-950 rounded-xl border border-white/5">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-white block">Automated Invoicing</span>
                <span className="text-[10px] text-zinc-500">Download clear booking and payment receipts.</span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3 text-left">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Official Product Website</h4>
                <p className="text-[10px] text-zinc-500">Providing direct platform details and official legal disclosures.</p>
              </div>
            </div>
            
            <div className="px-4 py-2 rounded-xl bg-zinc-950 border border-white/5 text-[10px] text-zinc-400 font-mono">
              Status: <span className="text-emerald-400 font-bold">Closed Testing Phase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

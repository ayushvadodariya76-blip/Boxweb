import { Mail, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">Get In Touch</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Our Support & Partnership Team
          </h3>
          <p className="mt-4 text-zinc-400 font-light text-sm sm:text-base">
            Have questions about merchant registration, API verification, or our upcoming applications? Connect with us directly via email.
          </p>
        </div>

        {/* Centered Clean Contact Card */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-white/5 space-y-8 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
            <h4 className="font-display font-bold text-white text-xl border-b border-white/5 pb-4 text-center">
              Official Communication Portal
            </h4>
            
            <div className="flex flex-col items-center pt-2 text-center">
              {/* Email */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h5 className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Official Support Email</h5>
                  <p className="text-lg font-bold text-white mt-1.5 select-all">supportbookmycrickbox@gmail.com</p>
                  <div className="mt-4 flex flex-col items-center">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Response Time</span>
                    <p className="text-xs text-zinc-400 mt-1">Usually within 24–48 hours during the development phase.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Status Note */}
            <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/5 flex items-start space-x-4 text-left">
              <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#808080] font-mono leading-relaxed space-y-1.5">
                <span className="text-zinc-300 font-semibold block">Development Status</span>
                <p>
                  BookMyCricBox is currently in active development. For business enquiries, partnerships and Razorpay verification, please contact us via email.
                </p>
              </div>
            </div>

            {/* Email Support Button */}
            <div className="pt-2 flex justify-center">
              <a
                href="mailto:supportbookmycrickbox@gmail.com"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full text-sm transition-all shadow-[0_0_20px_rgba(34,197,94,0.35)] font-display"
              >
                <Mail className="w-4 h-4" />
                <span>Email Support</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

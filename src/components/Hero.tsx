import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Calendar, ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(34,197,94,0.15)]"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Coming Soon to Android</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-white max-w-4xl mx-auto"
        >
          The Future of <span className="text-emerald-400">Box Cricket</span> is Here.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          We're building the most seamless platform to discover, book, and play cricket. No phone calls, no wait times, just pure sport.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 px-4"
        >
          <div className="flex flex-col items-center justify-start w-48 h-20">
            <div className="h-12 w-full bg-zinc-900 rounded-xl border border-white/10 flex items-center justify-center space-x-3 opacity-50 grayscale select-none">
              <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center font-bold text-[8px] text-black">▶</div>
              <div className="flex flex-col text-left">
                <span className="text-[8px] uppercase opacity-50 text-white leading-none">Get it on</span>
                <span className="text-xs font-bold text-white leading-tight">Google Play</span>
              </div>
            </div>
            <p className="text-[10px] text-emerald-500 font-mono tracking-wide uppercase mt-2">Final Testing Stage</p>
          </div>

          <div className="flex flex-col items-center justify-start w-48 h-20">
            <button
              onClick={() => onNavigate('#about')}
              className="h-12 w-full bg-white hover:bg-transparent hover:text-white text-black font-bold rounded-xl border-2 border-white transition-all duration-300 font-display flex items-center justify-center space-x-2"
            >
              <span>Our Vision</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Wave border */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0B0B] to-transparent pointer-events-none" />
    </section>
  );
}

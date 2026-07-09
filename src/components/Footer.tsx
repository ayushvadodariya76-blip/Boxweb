import { MouseEvent } from 'react';
import { Calendar, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8 text-zinc-400 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-500/[0.015] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Logo Column */}
          <div className="lg:col-span-6 sm:col-span-2 space-y-4">
            <div 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-black font-bold group-hover:scale-105 transition-transform">
                <Calendar className="w-5 h-5 text-black" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                BookMy<span className="text-emerald-500">CricBox</span>
              </span>
            </div>
            
            <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-md">
              Discover local box cricket grounds, reserve slot timings, and complete secure payouts instantly. A modern sports scheduling platform designed for active players and ground owners.
            </p>

            <div className="flex flex-col space-y-2 pt-2">
              <div className="flex items-center space-x-2 text-xs font-light text-zinc-400">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="select-all text-zinc-500 hover:text-emerald-400 transition-colors">supportbookmycrickbox@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] text-zinc-600 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Official Product Website</span>
              </div>
            </div>
          </div>

          {/* Company Links Column */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Company</h5>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => handleLinkClick(e, '#how-it-works')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleLinkClick(e, '#features')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Core Features
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => handleLinkClick(e, '#faq')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Compliance Column */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Legal Policy</h5>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a 
                  href="#privacy" 
                  onClick={(e) => handleLinkClick(e, '#privacy')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  onClick={(e) => handleLinkClick(e, '#terms')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  href="#refund" 
                  onClick={(e) => handleLinkClick(e, '#refund')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a 
                  href="#cancellation" 
                  onClick={(e) => handleLinkClick(e, '#cancellation')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  onClick={(e) => handleLinkClick(e, '#disclaimer')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider and Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[10px] font-mono text-zinc-600">
          <div>
            &copy; {currentYear} BookMyCricBox. All Rights Reserved.
          </div>
          <div>
            Official Pre-Launch Website.
          </div>
        </div>

      </div>
    </footer>
  );
}

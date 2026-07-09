import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '#home' },
    { label: 'About Us', path: '#about' },
    { label: 'How It Works', path: '#how-it-works' },
    { label: 'Features', path: '#features' },
    { label: 'Screenshots', path: '#screenshots' },
    { label: 'FAQs', path: '#faq' },
    { label: 'Contact', path: '#contact' },
  ];

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('#home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-600 flex items-center justify-center text-black font-bold shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:scale-105 transition-transform">
              <Calendar className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors uppercase italic">
                BookMy<span className="text-emerald-400 font-black">CricBox</span>
              </span>
              <p className="text-[9px] text-emerald-500 font-mono tracking-wider uppercase -mt-1">Official Website</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {currentView === 'home' ? (
              navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-emerald-400 rounded-lg hover:bg-white/[0.02] transition-all"
                >
                  {item.label}
                </a>
              ))
            ) : (
              <button
                onClick={() => handleNavClick('#home')}
                className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-emerald-400 rounded-lg hover:bg-white/[0.02] transition-all"
              >
                Back to Home
              </button>
            )}
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full text-sm transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] font-display"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-b border-white/5 absolute top-full left-0 right-0 py-4 px-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {currentView === 'home' ? (
              navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className="px-4 py-3 text-base font-medium text-zinc-300 hover:text-emerald-400 rounded-lg hover:bg-white/[0.03] transition-colors"
                >
                  {item.label}
                </a>
              ))
            ) : (
              <button
                onClick={() => handleNavClick('#home')}
                className="px-4 py-3 text-left text-base font-medium text-zinc-300 hover:text-emerald-400 rounded-lg hover:bg-white/[0.03] transition-colors"
              >
                Back to Home
              </button>
            )}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 w-full py-3 text-center text-base font-semibold rounded-xl bg-emerald-500 text-black font-display hover:bg-emerald-400 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

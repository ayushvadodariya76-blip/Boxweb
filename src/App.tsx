import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import ComingSoon from './components/ComingSoon';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';

type ViewType = 'home' | 'privacy' | 'terms' | 'refund' | 'cancellation' | 'disclaimer';

export default function App() {
  const [view, setView] = useState<ViewType>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setView('privacy');
        window.scrollTo({ top: 0 });
      } else if (hash === '#terms') {
        setView('terms');
        window.scrollTo({ top: 0 });
      } else if (hash === '#refund') {
        setView('refund');
        window.scrollTo({ top: 0 });
      } else if (hash === '#cancellation') {
        setView('cancellation');
        window.scrollTo({ top: 0 });
      } else if (hash === '#disclaimer') {
        setView('disclaimer');
        window.scrollTo({ top: 0 });
      } else {
        setView('home');
        if (hash && hash.startsWith('#') && hash !== '#home') {
          setTimeout(() => {
            const element = document.getElementById(hash.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial mount check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: string) => {
    window.location.hash = path;
    
    // If we click home or hash anchors while on legal pages, switch to home first
    if (view !== 'home' && !['#privacy', '#terms', '#refund', '#cancellation', '#disclaimer'].includes(path)) {
      setView('home');
      if (path.startsWith('#') && path !== '#home') {
        setTimeout(() => {
          const element = document.getElementById(path.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-[#0B0B0B] min-h-screen text-white font-sans antialiased">
      {/* Header element */}
      <Header currentView={view} onNavigate={handleNavigate} />
      
      {/* Main Container */}
      <main className="transition-opacity duration-300">
        {view === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <About />
            <HowItWorks />
            <Features />
            <Screenshots />
            <ComingSoon />
            <FAQ />
            <Contact />
          </>
        ) : (
          <LegalPage type={view} onBack={() => handleNavigate('#home')} />
        )}
      </main>

      {/* Footer element */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqItems = [
    {
      q: "When will the BookMyCricBox app launch?",
      a: "Our Android mobile application is currently in closed development and testing phases. We are completing vital software verification and planned payment gateway integrations. We anticipate releasing our initial public beta on the Google Play Store in the coming quarters."
    },
    {
      q: "How will the slot booking process work?",
      a: "Players will be able to search for local box cricket facilities, select their desired date, and view a dynamic grid of available hourly slots. Once a slot is selected, players can complete payments directly inside the application to instantly lock the schedule."
    },
    {
      q: "Can turf owners register their sports grounds?",
      a: "Yes! Box cricket and turf owners will be able to register through our partner onboarding portal. After listing physical dimensions, coordinates, amenities, and pricing, our team performs offline verifications. Once approved, the facility's live calendars become open for player bookings."
    },
    {
      q: "How will payments and refunds be handled?",
      a: "BookMyCricBox will integrate with secure, PCI-DSS compliant payment gateways. Transactions are protected using industry-standard SSL encryption. Ground cancellations and automated refunds follow our official Cancellation & Refund policies."
    },
    {
      q: "Is the BookMyCricBox application free to download?",
      a: "Yes, the upcoming mobile application will be completely free to download from the Google Play Store for all players. Listed ground bookings will incur standard turf booking fees as decided directly by the ground merchants."
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-emerald-500/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">FAQ</h2>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 text-zinc-400 font-light text-sm">
            Everything you need to know about our upcoming platform, partner compliance, and booking cycles.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-[#121212] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 hover:bg-zinc-900/40 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="font-display font-semibold text-white text-sm sm:text-base">
                      {item.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-64 border-t border-white/5' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

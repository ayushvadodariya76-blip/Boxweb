import { ArrowLeft, Shield, FileText, Scale, Sparkles, RefreshCcw, Info } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refund' | 'cancellation' | 'disclaimer';
  onBack: () => void;
}

export default function LegalPage({ type, onBack }: LegalPageProps) {
  
  const getPolicyContent = () => {
    switch (type) {
      case 'privacy':
        return {
          icon: <Shield className="w-8 h-8 text-emerald-400" />,
          title: "Privacy Policy",
          updated: "Last Updated: July 08, 2026",
          sections: [
            {
              heading: "1. Introduction",
              text: "At BookMyCricBox, accessible from our official website and upcoming mobile applications, one of our main priorities is the privacy of our visitors and users. This Privacy Policy document contains types of information that is collected and recorded by BookMyCricBox and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at supportbookmycrickbox@gmail.com."
            },
            {
              heading: "2. Information We Collect",
              text: "BookMyCricBox follows a standard procedure of collecting personal information that you provide voluntarily. This includes your name, phone number, email address, transaction information during box bookings, and physical location coordinates to locate nearby sports arenas. No financial credit card or UPI credentials are stored on our servers; all payment transactions are securely handled directly by our planned payment gateway provider."
            },
            {
              heading: "3. How We Use Your Information",
              text: "We use the collected information in various ways, including to: provide, operate, and maintain our booking platform; improve, personalize, and expand our application features; understand and analyze how you use our services; develop new products, services, features, and functionality; communicate with you regarding booking verifications and status updates; and prevent fraudulent transaction activities."
            },
            {
              heading: "4. Cookies and Web Beacons",
              text: "Like any other corporate website, BookMyCricBox uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."
            },
            {
              heading: "5. Third-Party Disclosures & Security",
              text: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to verified ground owners (to authorize your booking) and our payment gateway partners (to route transaction funds). We use high-grade industry standard SSL/TLS encryption protocols to secure communications. However, please remember that no method of transmission over the internet is 100% secure."
            },
            {
              heading: "6. Consent",
              text: "By using our website or upcoming mobile applications, you hereby consent to our Privacy Policy and agree to its terms and conditions."
            }
          ]
        };

      case 'terms':
        return {
          icon: <FileText className="w-8 h-8 text-emerald-400" />,
          title: "Terms & Conditions",
          updated: "Last Updated: July 08, 2026",
          sections: [
            {
              heading: "1. Acceptance of Terms",
              text: "By accessing and browsing the BookMyCricBox website, you agree to be bound by these Terms & Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
            },
            {
              heading: "2. Listing and Bookings",
              text: "BookMyCricBox functions as an official corporate information website and an upcoming digital directory listing platform. Any sports turf, ground, or box cricket facility listed on our application represents a planned partner agreement. Bookings made via the future application are subject to turf availability, and players must adhere strictly to the ground rules of the specific facility they book."
            },
            {
              heading: "3. User Accounts",
              text: "When our mobile application is launched on Google Play, users may be required to register a profile using verified OTP methods. You are entirely responsible for maintaining the confidentiality of your credentials and restrict unauthorized usage of your account."
            },
            {
              heading: "4. Payments and Payout Services",
              text: "All payment transactions processed through the platform are routed securely via our secure planned payment gateway. Users agree to pay all slot booking charges, convenience fees, and applicable taxes associated with their booking. Turf owners registered with BookMyCricBox agree to receive payouts according to the partner guidelines and verification criteria."
            },
            {
              heading: "5. Intellectual Property Rights",
              text: "The brand name BookMyCricBox, logos, custom CSS codes, user interfaces, layouts, and all related digital content are the exclusive intellectual property of BookMyCricBox. Unauthorized reproduction, modification, or distribution of these assets is strictly prohibited."
            },
            {
              heading: "6. Governing Law",
              text: "These terms and conditions are governed by and construed in accordance with the laws of India, under the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka."
            }
          ]
        };

      case 'refund':
        return {
          icon: <RefreshCcw className="w-8 h-8 text-emerald-400" />,
          title: "Refund Policy",
          updated: "Last Updated: July 08, 2026",
          sections: [
            {
              heading: "1. Refund Eligibility",
              text: "Refunds for box cricket slot bookings are processed only under specific conditions to maintain business viability for both turf owners and players. To be eligible for a refund, users must submit cancellation requests through the application within the timeline described in our Cancellation Policy."
            },
            {
              heading: "2. Processing Timeframe",
              text: "Once a refund request is verified and authorized by our support desk, the funds will be initiated immediately. Refunds are credited back to the original source payment method (UPI, Bank Account, or Credit/Debit Card) via our payment gateway. It typically takes 5 to 7 working business days for the amount to reflect in your account, depending on your banking institution."
            },
            {
              heading: "3. Non-Eligible Scenarios",
              text: "Refunds will not be issued in the following circumstances: cancellations requested after the allowable threshold timeline; failure of the playing team to arrive at the venue on schedule; minor weather disruptions where the turf owner deems the pitch safe and playable; or behavioral misconduct resulting in turf expulsion."
            },
            {
              heading: "4. Disputes and Failures",
              text: "In the event of double-bookings or transactional payment failures (where money is deducted but booking is not confirmed), please write to supportbookmycrickbox@gmail.com with your transaction references. Such issues are verified with our payment processor and processed for immediate 100% resolution."
            }
          ]
        };

      case 'cancellation':
        return {
          icon: <Scale className="w-8 h-8 text-emerald-400" />,
          title: "Cancellation Policy",
          updated: "Last Updated: July 08, 2026",
          sections: [
            {
              heading: "1. Booking Cancellations",
              text: "Players can cancel confirmed slots directly via the upcoming BookMyCricBox app or by writing to our support team. Since slots are blocked exclusively for your team, cancellations impact venue occupancies and are governed by strict timelines."
            },
            {
              heading: "2. Timeline Thresholds",
              text: "Our standard partner cancellation matrix is structured as follows: (A) Cancellations made more than 24 hours prior to the scheduled slot start time: Eligible for a 100% refund of the booking amount. (B) Cancellations made between 12 to 24 hours prior to the slot start time: Eligible for a 50% refund. (C) Cancellations requested less than 12 hours prior to the slot start time: Non-refundable."
            },
            {
              heading: "3. Merchant Cancellations",
              text: "In rare circumstances, a turf merchant may cancel a slot due to unavoidable maintenance, technical issues, or extreme weather conditions. In such cases, the user is notified immediately, and a 100% refund is issued regardless of the timeline, or an alternative slot is offered if preferred."
            },
            {
              heading: "4. How to Cancel",
              text: "To initiate a cancellation, visit the 'My Bookings' tab inside the mobile app and select the booking you wish to cancel, or email us at supportbookmycrickbox@gmail.com. Timestamps on emails or system logs will be considered final for calculating cancellation windows."
            }
          ]
        };

      case 'disclaimer':
        return {
          icon: <Info className="w-8 h-8 text-emerald-400" />,
          title: "Disclaimer Policy",
          updated: "Last Updated: July 08, 2026",
          sections: [
            {
              heading: "1. General Information Only",
              text: "The information provided on the BookMyCricBox company website is for general informational and official pre-launch product purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the absolute accuracy, adequacy, or completeness of listed data."
            },
            {
              heading: "2. Mobile App Concept Disclaimer",
              text: "Please note that the mobile applications and booking portals of BookMyCricBox are currently undergoing active software development. Screens, workflows, and payment checkouts displayed on this website represent a mockup of planned product design. No active real-money slot bookings are processed on this static website."
            },
            {
              heading: "3. Personal Injury & Safety",
              text: "Cricket and team sports involve inherent physical risks. BookMyCricBox functions solely as an intermediary technology booking facilitator. We do not own, control, or manage the physical structures, turfs, or lighting equipment of listed partners. We accept no responsibility or liability for personal injuries, damages, or losses suffered by players during matches at partner facilities."
            },
            {
              heading: "4. External Links Disclaimer",
              text: "This platform may contain links to external third-party sites or services (such as our payment processors or Google Play). We do not warrant, endorse, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through our portal."
            }
          ]
        };
    }
  };

  const content = getPolicyContent();

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Company Website</span>
        </button>

        {/* Header Block */}
        <div className="p-8 sm:p-10 rounded-[32px] bg-[#121212] border border-white/5 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              {content.icon}
            </div>
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {content.title}
              </h1>
              <p className="text-xs text-emerald-400 mt-1 font-mono font-medium">{content.updated}</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-zinc-950 border border-white/5 text-[10px] text-zinc-500 font-mono inline-block">
            Official Pre-Launch Document
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#121212] border border-white/5 space-y-10">
          
          {content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="font-display font-bold text-white text-base sm:text-lg tracking-tight">
                {sec.heading}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                {sec.text}
              </p>
            </div>
          ))}

          {/* Contact block within policy */}
          <div className="pt-8 border-t border-white/5">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase">Support Contact Email</span>
                <h4 className="text-sm font-semibold text-white mt-1">BookMyCricBox Support Team</h4>
                <p className="text-xs text-zinc-400 mt-0.5">Official Mail: supportbookmycrickbox@gmail.com</p>
              </div>
              <button
                onClick={onBack}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black text-xs font-semibold hover:bg-emerald-400 transition-all font-display"
              >
                Accept & Return
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

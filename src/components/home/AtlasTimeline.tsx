import { useState, useRef, useEffect } from "react";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Lightbulb, TrendingUp, Bot, Cog, CheckCircle2 } from "lucide-react";

const phases = [
  {
    id: "phase1",
    phase: "Phase 1",
    title: "The Digital Groundwork",
    subtitle: "(Establish & Validate)",
    icon: Globe,
    description: "Trust is won or lost in milliseconds. We ensure your business projects absolute authority from the very first interaction.",
    points: [
      "Premium Brand Infrastructure: Secure domains and enterprise-grade email systems.",
      "Google Business Profile Dominance: Advanced optimization for the Google 'Local Pack'.",
      "Security & Compliance Readiness: SSL, hosting, and data compliance backend plumbing.",
    ]
  },
  {
    id: "phase2",
    phase: "Phase 2",
    title: "The Conversion Engine",
    subtitle: "(Build & Optimize)",
    icon: Lightbulb,
    description: "Your website shouldn't be a static digital brochure. It must be a 24/7, high-performance sales representative.",
    points: [
      "Bespoke Website Development: Custom, high-speed, mobile-first websites.",
      "Deep-Dive SEO Audits & Implementation: Forensic audits and technical restructuring.",
      "Seamless CRM Integration: Instant capture, categorization, and tracking of every lead.",
    ]
  },
  {
    id: "phase3",
    phase: "Phase 3",
    title: "Unfair Market Advantage",
    subtitle: "(Scale Your Reach)",
    icon: TrendingUp,
    description: "Stop paying for empty clicks. Start investing in customer acquisition with interconnected omnichannel campaigns.",
    points: [
      "Precision Meta & Google Advertising: Actionable data points targeting high-intent demographics.",
      "Interconnected Campaign Strategy: Cohesive ad, search, and website ecosystem.",
      "Data-Driven Iteration: Continuous A/B testing to drive down CPA and maximize ROI.",
    ]
  },
  {
    id: "phase4",
    phase: "Phase 4",
    title: "The Ultimate AI Employee",
    subtitle: "(Meet Lia)",
    icon: Bot,
    description: "Handle the influx of traffic without hiring a massive support staff using Lia, our proprietary AI customer support agent.",
    points: [
      "Direct Voice & Omnichannel Communication: Lia talks over the phone, chats, and emails 24/7.",
      "Intelligent Calendar Management: Connects directly to real-time schedules and secures bookings.",
      "Automated CRM Logging: Details summarized and status tracked without you lifting a finger.",
    ]
  },
  {
    id: "phase5",
    phase: "Phase 5",
    title: "The Operations Multiplier",
    subtitle: "(Automate & Dominate)",
    icon: Cog,
    description: "Strip away the friction holding your business back. We give you a 5x to 10x multiplier on your overall output.",
    points: [
      "Workflow Audits & Bottleneck Elimination: Mapping day-to-day ops to replace manual labor.",
      "Custom Software Solutions: Bespoke apps tailored entirely to unique operational needs.",
      "Unmatched Cost Reduction: Repurposing human teams for high-value revenue generation.",
    ]
  }
];

const AtlasTimeline = () => {
  const [activePhase, setActivePhase] = useState(phases[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const sections = scrollContainerRef.current.querySelectorAll('.phase-section');
      const offset = window.innerHeight * 0.4; // Trigger when section is 40% into view

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < offset && top > -offset) {
          setActivePhase(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ActiveIcon = phases.find(p => p.id === activePhase)?.icon || Globe;

  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="mb-20 text-center lg:text-left lg:max-w-3xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Atlas × Lilly's Printing
            </h2>
            <h3 className="text-4xl lg:text-5xl font-heading font-extrabold mb-6 leading-tight">
              Your End-to-End <br className="hidden lg:block"/> 
              <span className="text-primary">Business Infrastructure</span> Partner.
            </h3>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed font-light">
              You didn't start a business to become a full-time administrator. 
              We are your end-to-end growth architects, building the custom digital pathways 
              you need to do the work of a team of ten.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
               <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                 <Link to="/automation">Get Your Automation Consultation</Link>
               </Button>
               <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white">
                 <a href="https://callmylia.web.app" target="_blank" rel="noopener noreferrer">Hear Lia in Action</a>
               </Button>
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative" ref={scrollContainerRef}>
          {/* Left Side: Scrollable Content */}
          <div className="flex-1 space-y-32 py-10">
            {phases.map((phase) => (
              <div key={phase.id} id={phase.id} className="phase-section transition-opacity duration-500">
                <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium mb-6">
                  {phase.phase}
                </span>
                <h4 className="text-3xl font-heading font-bold mb-2">
                  {phase.title}
                </h4>
                <p className="text-primary font-medium mb-6">{phase.subtitle}</p>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  {phase.description}
                </p>
                <ul className="space-y-6">
                  {phase.points.map((point, i) => {
                    const [bold, rest] = point.split(': ');
                    return (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <p className="text-zinc-300 leading-relaxed">
                          <strong className="text-white font-semibold">{bold}:</strong> {rest}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Side: Sticky Visualizer */}
          <div className="hidden lg:block w-5/12 relative">
            <div className="sticky top-40 h-[600px] w-full bg-zinc-900/50 rounded-3xl border border-zinc-800/50 overflow-hidden flex flex-col items-center justify-center p-12 backdrop-blur-xl">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
               <div className="relative z-10 flex flex-col items-center text-center transition-all duration-700 ease-in-out transform">
                 <div className="w-32 h-32 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-[0_0_50px_rgba(255,0,0,0.1)] mb-12">
                   <ActiveIcon size={56} className="text-primary" />
                 </div>
                 <h5 className="text-2xl font-bold font-heading mb-4 px-4 text-white">
                    {phases.find(p => p.id === activePhase)?.title}
                 </h5>
                 <p className="text-zinc-400 font-medium">
                    {phases.find(p => p.id === activePhase)?.subtitle}
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtlasTimeline;

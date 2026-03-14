import FadeIn from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AtlasTimeline from "@/components/home/AtlasTimeline";
import {
  Bot,
  Workflow,
  FileText,
  Zap,
  TrendingUp,
  PhoneCall,
  Globe,
  BarChart3,
  CalendarCheck,
  MessageSquare,
  Mail,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Cpu,
  Layers,
  ShieldCheck,
  X,
} from "lucide-react";

const capabilities = [
  {
    icon: PhoneCall,
    stat: "24/7",
    statLabel: "ACTIVE",
    title: "AI Voice & Chat Agents",
    description:
      "Intelligent AI agents that answer every call, respond to every message, book appointments, and capture leads — day or night, without a single missed opportunity.",
  },
  {
    icon: Workflow,
    stat: "10×",
    statLabel: "OUTPUT",
    title: "Workflow Automation",
    description:
      "Automate your repetitive business processes from order intake, follow-ups, invoicing, and internal coordination — so your team focuses only on high-value work.",
  },
  {
    icon: FileText,
    stat: "<60s",
    statLabel: "RESPONSE",
    title: "Instant Quote Processing",
    description:
      "AI-powered quote generation that respond to project inquiries with accurate, professional estimates in seconds — accelerating your sales cycle dramatically.",
  },
  {
    icon: MessageSquare,
    stat: "100%",
    statLabel: "CAPTURED",
    title: "Lead Capture & Nurturing",
    description:
      "Every web visitor, caller, and social inquirer is captured, tagged, and enrolled in an automated nurture sequence — turning cold leads into paying clients.",
  },
  {
    icon: CalendarCheck,
    stat: "0",
    statLabel: "NO-SHOWS",
    title: "Smart Appointment Booking",
    description:
      "AI-driven scheduling that manages your calendar, sends reminders, and handles rescheduling requests — so you never lose revenue to missed appointments.",
  },
  {
    icon: BarChart3,
    stat: "Live",
    statLabel: "ANALYTICS",
    title: "Performance Dashboards",
    description:
      "Real-time visibility into every automation system — leads captured, calls handled, quotes sent — so you can make smarter business decisions with clean data.",
  },
];

const before = [
  "Missed calls going straight to voicemail",
  "Manual quote processing taking days",
  "Leads slipping through the cracks",
  "Staff buried in repetitive admin tasks",
  "No visibility into what's working",
];

const after = [
  "AI agent answers every call, 24/7",
  "Instant, professional quotes in seconds",
  "Every lead captured and nurtured automatically",
  "Your team focused on what they do best",
  "Live dashboards for full business clarity",
];

const stats = [
  { value: 100, suffix: "%", label: "Calls Answered" },
  { value: 42, suffix: "%", label: "Faster Response" },
  { value: 31, suffix: "%", label: "More Retained Clients" },
  { value: 10, suffix: "×", label: "Team Output Multiplier" },
];

const Automation = () => {
  return (
    <div className="bg-slate-950 text-white">

      {/* ── Hero Section ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-700/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-700/30 rounded-full blur-[100px]" />
          {/* Grid Lines */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 py-32 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-600/15 text-red-400 font-semibold tracking-widest text-xs mb-8 border border-red-500/30 uppercase">
                <Cpu className="w-3.5 h-3.5" />
                Powered by Atlas Business Solutions
              </span>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-8 tracking-tight">
                Stop Running{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                  Your Business.
                </span>{" "}
                Let Automation Do It.
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                We have deployed AI automation infrastructure that lets Lilly's Printing do the work of a team of ten — with zero extra overhead. This is what the future of business looks like.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-base font-bold rounded-full">
                  <Link to="/contact">Request Automation Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base font-bold rounded-full border-slate-600 text-white hover:bg-slate-800 bg-transparent">
                  <a href="https://atlasaisolutions.com" target="_blank" rel="noopener noreferrer">
                    Visit Atlas AI Solutions <ChevronRight className="ml-1 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </FadeIn>

            {/* Hero Visual — Glassmorphic Stat Cards */}
            <FadeIn delay={0.3}>
              <div className="relative">
                {/* Main Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-sm text-slate-400 font-mono tracking-wider">ATLAS AI SYSTEM • LIVE</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Calls Answered by AI Agent", value: "247 today", color: "text-green-400" },
                      { label: "Quotes Auto-Generated", value: "31 today", color: "text-blue-400" },
                      { label: "Leads Captured", value: "18 today", color: "text-purple-400" },
                      { label: "Revenue at Risk (Recovered)", value: "$4,200", color: "text-red-400" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                        <span className="text-slate-400 text-sm">{item.label}</span>
                        <span className={`font-bold font-mono ${item.color}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-8 -right-8 bg-red-600 text-white text-xs font-black px-4 py-3 rounded-2xl shadow-xl rotate-3">
                  <p className="text-lg font-black">10×</p>
                  <p className="text-red-200 font-semibold">Output</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── The Problem / Capacity Paradox ── */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-4 block">The Problem We Solve</span>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                The Capacity{" "}
                <span className="italic text-slate-400">Paradox.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Every growing business hits the same invisible ceiling. You're exceptional at your trade — but as you grow, you spend less time doing what you're great at and more time managing a chaotic web of missed calls, scattered leads, manual processes, and repetitive tasks.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Hiring more people is expensive, risky, and slow. We are not a marketing agency, and we are not just an IT firm. <span className="text-white font-semibold">We are your end-to-end business infrastructure partner</span> — building the technology that multiplies your output without multiplying your overhead.
              </p>
            </div>

            {/* Before / After Comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" /> Before
                </h4>
                <ul className="space-y-4">
                  {before.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                      <X className="w-4 h-4 text-red-500/70 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 border border-green-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-500/5" />
                <h4 className="relative text-sm font-bold text-green-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> After
                </h4>
                <ul className="relative space-y-4">
                  {after.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Atlas Timeline ── */}
      <AtlasTimeline />

      {/* ── Stats Bar ── */}
      <section className="py-16 border-y border-slate-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-5xl lg:text-6xl font-black text-red-500 mb-2">
                    <AnimatedCounter value={s.value} suffix={s.suffix} duration={2} />
                  </p>
                  <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities Grid ── */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Our Automation Stack</span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Every System Working{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                While You Sleep.
              </span>
            </h2>
            <p className="text-xl text-slate-400">From first contact to final invoice — Atlas Business Solutions has automated every critical touchpoint of the business.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.1}>
                <div className="group relative bg-slate-900 border border-slate-800 hover:border-red-500/40 rounded-3xl p-8 h-full transition-all duration-300 hover:bg-slate-800/50 overflow-hidden">
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-slate-800 group-hover:bg-red-600/20 rounded-2xl flex items-center justify-center transition-colors duration-300">
                      <cap.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-red-400 leading-none">{cap.stat}</p>
                      <p className="text-xs text-slate-500 font-bold tracking-widest">{cap.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{cap.description}</p>

                  {/* Hover Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnership Value Section ── */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-6">
                <span className="text-red-500 font-semibold tracking-widest uppercase text-sm block">Atlas × Lilly's Printing</span>
                <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                  Your End-to-End{" "}
                  <span className="text-red-400">Business Infrastructure</span>{" "}
                  Partner.
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  We don't just build websites. We don't just run ads. We build the entire interconnected system — from how your phone is answered to how your marketing is deployed to how your team operates — so that you can scale 10× without hiring 10× more people.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Wherever you are in your business journey — whether you're at Day 1 or Day 1,000 — Atlas designs a custom pathway to your ultimate goals.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    { icon: Globe, text: "Custom websites and digital marketing ecosystems" },
                    { icon: Bot, text: "AI-powered voice, chat, and email agents" },
                    { icon: Layers, text: "Interconnected CRM, scheduling, and ops automation" },
                    { icon: ShieldCheck, text: "White-glove setup, training, and ongoing support" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 flex-shrink-0 bg-red-600/20 rounded-xl flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <p className="text-slate-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Info Card */}
            <FadeIn delay={0.2}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center">
                <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-black mb-4">Atlas Business Solutions</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Atlas is the automation and technology partner behind Lilly's Printing's enterprise-grade operations. From AI infrastructure to digital marketing, Atlas makes businesses run like a Fortune 500 company.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded-full font-bold">
                    <a href="https://atlasaisolutions.com" target="_blank" rel="noopener noreferrer">
                      Visit Atlas AI Solutions →
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-800 bg-transparent h-12 rounded-full font-bold">
                    <Link to="/contact">
                      Get Your Automation Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-700/20 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <span className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-6 block">Ready to Scale?</span>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              Multiply Your Output.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                Without Multiplying You.
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ask us how we can deploy the same AI and automation infrastructure for your business. Atlas Business Solutions specializes in building end-to-end systems for growth-focused companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-10 text-lg font-bold rounded-full">
                <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-full border-slate-600 text-white hover:bg-slate-800 bg-transparent">
                <a href="https://atlasaisolutions.com" target="_blank" rel="noopener noreferrer">
                  Explore Atlas Solutions
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default Automation;

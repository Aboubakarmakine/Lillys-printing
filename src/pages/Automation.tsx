import FadeIn from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AtlasTimeline from "@/components/home/AtlasTimeline";
import { useTranslation } from "react-i18next";
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

const Automation = () => {
  const { t } = useTranslation();

  const capabilitiesTransl = t("automation.stack.items", { returnObjects: true }) as { stat: string, label: string, title: string, desc: string }[];
  
  const capabilities = [
    { icon: PhoneCall, stat: capabilitiesTransl[0]?.stat, statLabel: capabilitiesTransl[0]?.label, title: capabilitiesTransl[0]?.title, description: capabilitiesTransl[0]?.desc },
    { icon: Workflow, stat: capabilitiesTransl[1]?.stat, statLabel: capabilitiesTransl[1]?.label, title: capabilitiesTransl[1]?.title, description: capabilitiesTransl[1]?.desc },
    { icon: FileText, stat: capabilitiesTransl[2]?.stat, statLabel: capabilitiesTransl[2]?.label, title: capabilitiesTransl[2]?.title, description: capabilitiesTransl[2]?.desc },
    { icon: MessageSquare, stat: capabilitiesTransl[3]?.stat, statLabel: capabilitiesTransl[3]?.label, title: capabilitiesTransl[3]?.title, description: capabilitiesTransl[3]?.desc },
    { icon: CalendarCheck, stat: capabilitiesTransl[4]?.stat, statLabel: capabilitiesTransl[4]?.label, title: capabilitiesTransl[4]?.title, description: capabilitiesTransl[4]?.desc },
    { icon: BarChart3, stat: capabilitiesTransl[5]?.stat, statLabel: capabilitiesTransl[5]?.label, title: capabilitiesTransl[5]?.title, description: capabilitiesTransl[5]?.desc },
  ];

  const before = t("automation.compare.before.items", { returnObjects: true }) as string[];
  const after = t("automation.compare.after.items", { returnObjects: true }) as string[];

  const statsTransl = t("automation.stats", { returnObjects: true }) as { label: string }[];
  
  const stats = [
    { value: 100, suffix: "%", label: statsTransl[0]?.label },
    { value: 42, suffix: "%", label: statsTransl[1]?.label },
    { value: 31, suffix: "%", label: statsTransl[2]?.label },
    { value: 10, suffix: "×", label: statsTransl[3]?.label },
  ];

  const dashItemsTransl = t("automation.dash.items", { returnObjects: true }) as { label: string, value: string }[];
  const dashItemsStyles = ["text-green-400", "text-blue-400", "text-purple-400", "text-red-400"];
  
  const dashItems = dashItemsTransl?.map((item, i) => ({
    label: item.label, value: item.value, color: dashItemsStyles[i]
  }));

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
                {t("automation.badge")}
              </span>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-8 tracking-tight">
                {t("automation.title1")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                  {t("automation.title2")}
                </span>{" "}
                {t("automation.title3")}
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                {t("automation.desc")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-base font-bold rounded-full">
                  <Link to="/contact">{t("automation.btn1")} <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base font-bold rounded-full border-slate-600 text-white hover:bg-slate-800 bg-transparent">
                  <a href="https://atlasaisolutions.com" target="_blank" rel="noopener noreferrer">
                    {t("automation.btn2")} <ChevronRight className="ml-1 w-5 h-5" />
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
                    <span className="text-sm text-slate-400 font-mono tracking-wider">{t("automation.dash.badge")}</span>
                  </div>
                  <div className="space-y-4">
                    {dashItems?.map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                        <span className="text-slate-400 text-sm">{item.label}</span>
                        <span className={`font-bold font-mono ${item.color}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-8 -right-8 bg-red-600 text-white text-xs font-black px-4 py-3 rounded-2xl shadow-xl rotate-3">
                  <p className="text-lg font-black">{t("automation.dash.floating1")}</p>
                  <p className="text-red-200 font-semibold">{t("automation.dash.floating2")}</p>
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
              <span className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-4 block">{t("automation.problem.badge")}</span>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                {t("automation.problem.title")}{" "}
                <span className="italic text-slate-400">{t("automation.problem.title_italic")}</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                {t("automation.problem.p1")}
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                {t("automation.problem.p2")} <span className="text-white font-semibold">{t("automation.problem.p2_highlight")}</span> {t("automation.problem.p2_end")}
              </p>
            </div>

            {/* Before / After Comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" /> {t("automation.compare.before.title")}
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
                  <CheckCircle2 className="w-4 h-4" /> {t("automation.compare.after.title")}
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
            <span className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-4 block">{t("automation.stack.badge")}</span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              {t("automation.stack.title1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                {t("automation.stack.title2")}
              </span>
            </h2>
            <p className="text-xl text-slate-400">{t("automation.stack.desc")}</p>
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

      {/* ── Atlas Timeline (End-to-End Infrastructure) ── */}
      <AtlasTimeline />

      {/* ── Final CTA ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-700/20 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <span className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-6 block">{t("automation.cta.badge")}</span>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              {t("automation.cta.title1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                {t("automation.cta.title2")}
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("automation.cta.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-10 text-lg font-bold rounded-full">
                <Link to="/contact">{t("automation.cta.btn1")} <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-full border-slate-600 text-white hover:bg-slate-800 bg-transparent">
                <a href="https://atlasaisolutions.com" target="_blank" rel="noopener noreferrer">
                  {t("automation.cta.btn2")}
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

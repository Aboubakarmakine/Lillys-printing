import FadeIn from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Award, Clock, ShieldCheck, Printer, Target, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  
  const statsTransl = t("about.stats", { returnObjects: true }) as string[];

  const stats = [
    { value: 600, suffix: "+", label: statsTransl[0] },
    { value: 10000, suffix: "+", label: statsTransl[1] },
    { value: 20, suffix: "+", label: statsTransl[2] },
    { value: 100, suffix: "%", label: statsTransl[3] },
  ];

  const valuesTransl = t("about.values.items", { returnObjects: true }) as { title: string, desc: string }[];
  
  const values = [
    {
      icon: <Award className="w-8 h-8 text-red-600 mb-2" />,
      title: valuesTransl[0]?.title,
      description: valuesTransl[0]?.desc
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600 mb-2" />,
      title: valuesTransl[1]?.title,
      description: valuesTransl[1]?.desc
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-600 mb-2" />,
      title: valuesTransl[2]?.title,
      description: valuesTransl[2]?.desc
    }
  ];

  const team = [
    {
      name: "Liliana Mejía",
      role: t("about.team.roles.ceo"),
      image: "/team-graphics/liliana.jpg"
    },
    {
      name: "Elizabeth",
      role: t("about.team.roles.sales_rep"),
      image: "/team-graphics/elizabeth.jpg"
    },
    {
      name: "Lupita",
      role: t("about.team.roles.sales_rep"),
      image: "/team-graphics/lupita.jpg"
    },
    {
      name: "Nahomy",
      role: t("about.team.roles.sales_representative"),
      image: "/team-graphics/nahomy.jpg"
    },
    {
      name: "Sammy",
      role: t("about.team.roles.production_manager"),
      image: "/team-graphics/sammy.png"
    }
  ];

  const reviews = t("about.reviews.items", { returnObjects: true }) as { name: string, date: string, text: string, rating: number }[];

  return (
    <div className="bg-slate-50 selection:bg-red-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/40 via-slate-950/80 to-slate-950 z-10" />
          <img 
            src="/lillys-printing-service.jpg" 
            alt="Lilly's Printing Shop" 
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 max-w-6xl">
          <FadeIn>
            <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-400 font-semibold tracking-wider text-sm mb-6 border border-red-500/30">
              {t("about.hero.badge")}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t("about.hero.title1")} <br />
              <span className="text-red-500">{t("about.hero.title2")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
              {t("about.hero.desc")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story & Storefront Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-red-50 rounded-3xl transform -rotate-2 z-0"></div>
                <img 
                  src="/lillys-printing-service.jpg" 
                  alt="Lilly's Printing Storefront" 
                  className="relative z-10 rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border-4 border-white"
                />
                <div className="absolute -bottom-8 -right-8 bg-slate-950 text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-800">
                  <Printer className="w-10 h-10 text-red-500 mb-4" />
                  <p className="font-bold text-2xl">Annapolis, MD</p>
                  <p className="text-slate-400">{t("about.story.location")}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-4xl pr-8 font-bold mb-8 text-slate-900 leading-tight">
                {t("about.story.title")}
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  {t("about.story.p1")}
                </p>
                <p>
                  {t("about.story.p2")}
                </p>
                <p className="font-semibold text-slate-900 border-l-4 border-red-600 pl-4 py-2 bg-slate-50">
                  {t("about.story.p3")}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight">
                    <AnimatedCounter value={stat.value} duration={2} suffix={stat.suffix} />
                  </div>
                  <p className="text-red-400 font-medium uppercase tracking-wider text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values / Features Grid */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">{t("about.values.title")}</h2>
            <p className="text-xl text-slate-500">
              {t("about.values.subtitle")}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm flex-grow">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-semibold tracking-wider uppercase mb-2 block">{t("about.team.badge")}</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">{t("about.team.title")}</h2>
            <p className="text-xl text-slate-600">{t("about.team.subtitle")}</p>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-center justify-items-center">
            {team.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="w-full max-w-[280px]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-auto rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-2 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">{t("about.reviews.title")}</h2>
            <p className="text-xl text-slate-600">{t("about.reviews.subtitle")}</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col relative">
                  <div className="absolute top-8 right-8 text-yellow-400 flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{review.name}</h4>
                      <p className="text-sm text-slate-500">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 italic flex-grow">"{review.text}"</p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {t("about.reviews.verified")}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_100%)] bg-[length:20px_20px] opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">{t("about.cta.title")}</h2>
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              {t("about.cta.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-slate-100 h-14 px-8 text-lg font-bold rounded-full">
                <Link to="/contact">{t("about.cta.btn1")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-red-600 hover:bg-red-500 hover:text-white border-2 border-red-500 h-14 px-8 text-lg font-bold rounded-full bg-white">
                <Link to="/portfolio">{t("about.cta.btn2")}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

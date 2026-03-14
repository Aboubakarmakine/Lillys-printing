import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { useTranslation } from "react-i18next";
import { ScrambledText } from "@/components/ScrambledText";
import { ParticleNetwork } from "@/components/ParticleNetwork";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="py-20 lg:py-32 bg-background overflow-hidden relative bg-cover bg-center"
      style={{ backgroundImage: 'url(/hero-bg-2.png)' }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <ParticleNetwork />
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Riverdale Badge - Centered above the title */}
        <div className="w-full flex justify-center mb-10 pt-8 z-50">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full border-2 border-red-500 bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.8)] animate-pulse hover:animate-none transition-transform hover:scale-105">
              <span className="w-3 h-3 rounded-full bg-white"></span>
              <span className="text-xl lg:text-2xl font-black tracking-widest text-white drop-shadow-lg">NOW OPEN IN RIVERDALE</span>
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col items-center justify-center text-center pb-20">
          <FadeIn className="flex flex-col items-center">
            <h1 className="text-4xl lg:text-7xl font-heading font-bold text-white leading-tight max-w-4xl mx-auto">
              <ScrambledText text={t("hero.title")} delay={0.2} />{" "}
              <span className="text-red-600 block mt-2 drop-shadow-md">
                <ScrambledText text={t("hero.subtitle")} delay={0.8} />
              </span>
            </h1>
            <p className="mt-8 text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              {t("hero.description")}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="text-lg px-10 h-14 shadow-xl bg-red-600 hover:bg-red-700 text-white border-0">
                <Link to="/contact">{t("hero.cta_quote")}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-10 h-14 border-white text-white hover:bg-white hover:text-black bg-transparent border-2"
              >
                <Link to="/services">{t("hero.cta_services")}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

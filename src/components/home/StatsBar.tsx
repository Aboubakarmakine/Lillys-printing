import FadeIn from "@/components/FadeIn";
import { Clock, CheckCircle, Users, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useTranslation } from "react-i18next";

const statsConfig = [
  { icon: Clock, value: 10, suffix: "+" },
  { icon: CheckCircle, value: 5000, suffix: "+" },
  { icon: Users, value: 98, suffix: "%" },
  { icon: Zap, value: 24, suffix: "h+" },
];

const StatsBar = () => {
  const { t } = useTranslation();
  const statsLabels = t("home.stats.labels", { returnObjects: true }) as string[];

  return (
    <section className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsConfig.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon size={24} className="mx-auto mb-3 text-primary" />
                <p className="text-3xl font-heading font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-background/70 mt-1">{statsLabels[i]}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default StatsBar;

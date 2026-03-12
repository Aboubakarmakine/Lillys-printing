import FadeIn from "@/components/FadeIn";
import { Clock, CheckCircle, Users, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
  { icon: CheckCircle, value: 5000, suffix: "+", label: "Orders Completed" },
  { icon: Users, value: 98, suffix: "%", label: "Client Satisfaction" },
  { icon: Zap, value: 24, suffix: "h+", label: "Rapid Turnaround" },
];

const StatsBar = () => {
  return (
    <section className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon size={24} className="mx-auto mb-3 text-primary" />
                <p className="text-3xl font-heading font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-background/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default StatsBar;

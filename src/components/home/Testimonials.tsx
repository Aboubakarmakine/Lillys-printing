import FadeIn from "@/components/FadeIn";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = (t("home.testimonials.reviews", { returnObjects: true }) || []) as { quote: string, name: string, title: string }[];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              {t("home.testimonials.title")}
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.name} delay={i * 0.1}>
              <div className="bg-background rounded-lg p-8 shadow-sm h-full flex flex-col">
                <Quote size={24} className="text-primary mb-4" />
                <p className="text-foreground leading-relaxed flex-1">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{t("home.testimonials.verified")}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { Link } from "react-router-dom";
import { Printer, Shirt, Package, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { useTranslation } from "react-i18next";

const ServicesOverview = () => {
  const { t, i18n } = useTranslation();
  const isEs = i18n.language?.startsWith("es");

  const services = [
    {
      icon: Shirt,
      title: t("services_page.apparel.title"),
      description: t("services_page.apparel.desc"),
    },
    {
      icon: Package,
      title: t("services_page.wraps.title"),
      description: t("services_page.wraps.desc"),
    },
    {
      icon: Printer,
      title: t("services_page.print.title"),
      description: t("services_page.print.desc"),
    },
    {
      icon: Smartphone,
      title: t("services_page.digital.title"),
      description: t("services_page.digital.desc"),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              {t("services_page.title")}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("services_page.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="bg-background border border-border rounded-lg p-8 h-full flex flex-col hover:shadow-lg transition-shadow">
                <service.icon size={32} className="text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
                <Button asChild variant="link" className="mt-4 p-0 justify-start">
                  <Link to="/services">{isEs ? "Aprende Más →" : "Learn More →"}</Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

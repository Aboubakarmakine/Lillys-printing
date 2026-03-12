import { Link } from "react-router-dom";
import { Printer, Shirt, Package, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: Shirt,
    title: "Premium Branded Apparel",
    description:
      "Cultivate corporate identity with premium embroidery and advanced screen printing built to last.",
  },
  {
    icon: Package,
    title: "Custom Promotional Merchandise",
    description:
      "Curated, high-quality promotional merchandise designed to leave a lasting impression and cultivate brand loyalty.",
  },
  {
    icon: Printer,
    title: "High-End Business Cards",
    description:
      "Tangible assets crafted with absolute precision, featuring specialty finishes that leave a definitive physical impression.",
  },
  {
    icon: Smartphone,
    title: "Digital & Social Media Marketing",
    description:
      "Strategic digital presence and engaging content designed to elevate your brand perception and drive measurable growth.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Premium Capabilities
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Bespoke printing and digital solutions engineered for brands that demand absolute excellence.
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
                  <Link to="/services">Learn More →</Link>
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

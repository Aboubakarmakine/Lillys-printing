import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { Gift, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const promoItems = [
  { name: "Custom Notebooks", image: "/catalog-page-2.png" },
  { name: "Tote Bags", image: "/catalog-page-3.png" },
  { name: "Bottle Openers", image: "/catalog-page-6.png" },
  { name: "Keychains", image: "/catalog-page-8.png" },
  { name: "Wood Coasters", image: "/catalog-page-9.png" },
  { name: "Custom Pens", image: "/catalog-page-11.png" },
];

const PromoProductsTeaser = () => {
  const { i18n } = useTranslation();
  const isEs = i18n.language === "es";

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Gift size={24} className="text-primary" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {isEs ? "Catálogo 2026" : "2026 Catalog"}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                {isEs ? "Productos Promocionales" : "Promotional Products"}
              </h2>
              <p className="mt-3 text-muted-foreground max-w-lg">
                {isEs
                  ? "Artículos personalizados con tu logo para eventos, clientes y empleados. Mínimo 100 piezas."
                  : "Custom-branded items for events, clients, and giveaways. Starting at 100 pieces."}
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link to="/catalog" className="flex items-center gap-2">
                {isEs ? "Ver Catálogo Completo" : "View Full Catalog"}
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </FadeIn>

        {/* Mini product grid preview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {promoItems.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.07}>
              <Link to="/catalog" className="group block rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors truncate">
                    {item.name}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoProductsTeaser;

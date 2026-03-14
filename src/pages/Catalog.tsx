import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { Download, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const products = [
  {
    id: 2,
    name: "Black Notebooks with Pen",
    nameEs: "Libretas Negras con Lapicero",
    category: "Office & Stationery",
    price: "$5.00 each",
    minQty: "100 Pcs",
    image: "/catalog-page-2.png",
  },
  {
    id: 3,
    name: "Reusable Tote Bags",
    nameEs: "Bolsas Reusables",
    category: "Bags",
    price: "$4.50 each",
    minQty: "100 Pcs",
    image: "/catalog-page-3.png",
  },
  {
    id: 4,
    name: "Black Tote Bags",
    nameEs: "Bolsas Negras",
    category: "Bags",
    price: "$5.00 each",
    minQty: "100 Pcs",
    image: "/catalog-page-4.png",
  },
  {
    id: 5,
    name: "Mini Tape Measures",
    nameEs: "Mini Cintas Métricas",
    category: "Tools & Accessories",
    price: "$3.50 each",
    minQty: "100 Pcs",
    image: "/catalog-page-5.png",
  },
  {
    id: 6,
    name: "Multicolor Bottle Openers",
    nameEs: "Destapadores Multicolor",
    category: "Tools & Accessories",
    price: "$3.50 each",
    minQty: "100 Pcs",
    image: "/catalog-page-6.png",
  },
  {
    id: 7,
    name: "Wooden Bottle Openers",
    nameEs: "Destapadores de Madera",
    category: "Tools & Accessories",
    price: "$3.00 each",
    minQty: "100 Pcs",
    image: "/catalog-page-7.png",
  },
  {
    id: 8,
    name: "Heart-Shaped Keychains",
    nameEs: "Llaveros de Corazón",
    category: "Accessories",
    price: "$2.50 each",
    minQty: "100 Pcs",
    image: "/catalog-page-8.png",
  },
  {
    id: 9,
    name: "Engraved Wood Coasters",
    nameEs: "Posavasos de Madera Grabados",
    category: "Drinkware",
    price: "$5.00 each",
    minQty: "100 Pcs",
    image: "/catalog-page-9.png",
  },
  {
    id: 10,
    name: "Sublimated Foam Coasters",
    nameEs: "Posavasos de Foam Sublimados",
    category: "Drinkware",
    price: "$2.50 each",
    minQty: "100 Pcs",
    image: "/catalog-page-10.png",
  },
  {
    id: 11,
    name: "Custom Pens",
    nameEs: "Lapiceros Personalizados",
    category: "Office & Stationery",
    price: "$2.20 each",
    minQty: "100 Pcs (qty discounts)",
    image: "/catalog-page-11.png",
  },
  {
    id: 12,
    name: "Custom Mugs",
    nameEs: "Tazas Personalizadas",
    category: "Drinkware",
    price: "$7.00 each",
    minQty: "Box of 48 Pcs",
    image: "/catalog-page-12.png",
  },
];

const Catalog = () => {
  const { t, i18n } = useTranslation();
  const isEs = i18n.language?.startsWith("es");
  const [activeCategory, setActiveCategory] = useState("All");

  const categoriesTransl = t("catalog.categories", { returnObjects: true }) as string[];
  const categoriesMap = ["All", "Office & Stationery", "Bags", "Tools & Accessories", "Accessories", "Drinkware"];

  const activeCategoryKey = categoriesTransl.includes(activeCategory)
    ? categoriesMap[categoriesTransl.indexOf(activeCategory)]
    : "All";

  const filtered = activeCategoryKey === "All" ? products : products.filter((p) => p.category === activeCategoryKey);

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-10">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              {t("catalog.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("catalog.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg">
                <Link to="/contact" state={{ service: "Custom Promotional Merchandise" }}>
                  {t("catalog.btn_quote")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/PRODUCTOS PROMOCIONALES 2026.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Download size={16} />
                  {t("catalog.btn_download")}
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categoriesTransl.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat || (activeCategory === "All" && idx === 0)
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-20">
          {filtered.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.07}>
              <div className="group relative rounded-xl overflow-hidden shadow-md bg-secondary border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Product Image - full catalog page, portrait */}
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-3">
                  <h3 className="text-sm font-heading font-semibold text-foreground leading-tight">
                    {isEs ? product.nameEs : product.name}
                  </h3>
                  <p className="text-base font-bold text-primary mt-1">{product.price}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-muted-foreground">{t("catalog.min")}: {product.minQty}</p>
                    <Button asChild size="sm" variant="outline" className="h-7 text-xs px-2">
                      <Link to="/contact" state={{ service: "Custom Promotional Merchandise" }}>
                        {t("catalog.quote_item")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Banner */}
        <FadeIn delay={0.2}>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              {t("catalog.cta_title")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              {t("catalog.cta_desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact" state={{ service: "Custom Promotional Merchandise" }}>
                  {t("catalog.btn_contact")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:4434542210" className="flex items-center gap-2">
                  <Phone size={16} />
                  443-454-2210
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Catalog;

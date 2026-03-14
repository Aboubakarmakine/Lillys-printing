import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { useTranslation } from "react-i18next";

const projectImages = [
  "/van-wrap-1.jpg",
  "/truck-1.jpg",
  "/food-truck-1.jpg",
  "/car-wrapping-hi-tech.jpg",
  "/wall-wraps.jpg",
  "/Storefront-Wall-Wraps.jpg",
  "/lillys-printing-service.jpg",
  "/T-SHIRT-31-3.jpg",
  "/custom-t-shirt-9.jpg",
  "/branding.jpg",
  "/social-media-2.jpg",
];

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");

  const categoriesTransl = t("portfolio.filters", { returnObjects: true }) as string[];
  const categoriesMap = ["All", "Vehicle Wraps", "Apparel", "Large Format", "Digital"];
  
  const activeCategoryIndex = categoriesTransl.indexOf(activeCategory);
  if (activeCategoryIndex === -1 && activeCategory === "All") {
      // initial load
  }

  // To properly handle filtering by translated category names:
  const activeCategoryKey = categoriesTransl.includes(activeCategory) 
    ? categoriesMap[categoriesTransl.indexOf(activeCategory)] 
    : "All";

  const projectsTransl = t("portfolio.projects", { returnObjects: true }) as { title: string, category: string, desc: string }[];
  
  const projects = projectsTransl.map((p, i) => ({
    title: p.title,
    categoryKey: categoriesMap.includes(p.category) ? p.category : ["Vehicle Wraps", "Vehicle Wraps", "Vehicle Wraps", "Vehicle Wraps", "Large Format", "Large Format", "Large Format", "Apparel", "Apparel", "Digital", "Digital"][i], // map hardcoded
    categoryDisplay: p.category,
    description: p.desc,
    image: projectImages[i]
  }));

  const filteredProjects =
    activeCategoryKey === "All"
      ? projects
      : projects.filter((p) => p.categoryKey === activeCategoryKey);

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              {t("portfolio.header_title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("portfolio.header_desc")}
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categoriesTransl.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat || (activeCategory === "All" && idx === 0)
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <div className="group relative rounded-xl overflow-hidden shadow-md bg-secondary aspect-[4/3] cursor-pointer">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2">
                    {project.categoryDisplay}
                  </span>
                  <h3 className="text-white font-heading font-bold text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              {t("portfolio.cta_title")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              {t("portfolio.cta_desc")}
            </p>
            <Button asChild size="lg">
              <Link to="/contact">{t("portfolio.cta_btn")}</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Portfolio;

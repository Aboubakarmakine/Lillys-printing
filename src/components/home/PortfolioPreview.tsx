import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { useTranslation } from "react-i18next";

const projectImages = [
  "/portfolio-images/wrap-truck-storm-ready.jpeg",
  "/portfolio-images/large-format-storefront-vesuvius.jpeg",
  "/portfolio-images/apparel-lillys-polo.jpeg",
  "/portfolio-images/large-format-lillys-canopy.jpeg",
  "/portfolio-images/apparel-potomac-remodeling-front.jpeg",
  "/portfolio-images/wrap-food-truck-pimpina.jpeg"
];

const PortfolioPreview = () => {
  const { t } = useTranslation();
  const projectsData = t("home.portfolio.projects", { returnObjects: true }) as { title: string, desc: string }[];
  
  const projects = projectsData.map((p, i) => ({
    title: p.title,
    description: p.desc,
    image: projectImages[i]
  }));

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              {t("home.portfolio.title")}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t("home.portfolio.desc")}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">{t("home.portfolio.view_all")}</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PortfolioPreview;

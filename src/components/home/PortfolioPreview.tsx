import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    title: "Premium Fleet Branding",
    description: "Full commercial vehicle wraps for regional delivery fleets",
    image: "/ai_fleet_wrap.png"
  },
  {
    title: "Enterprise Storefront",
    description: "Complete exterior signage and window graphics",
    image: "/ai_storefront_signage.png"
  },
  {
    title: "Custom Apparel Line",
    description: "High-quality screen printed and embroidered uniforms",
    image: "/ai_apparel.png"
  },
  {
    title: "Event Marketing",
    description: "Large format banners and promotional displays",
    image: "/ai_event_marketing.png"
  },
  {
    title: "Corporate Identity Suite",
    description: "Premium business cards, letterheads, and envelopes",
    image: "/ai_corporate_identity.png"
  },
  {
    title: "Promotional Catalog",
    description: "Full-color printed catalogs with premium finishes",
    image: "/ai_catalog.png"
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Featured Work
            </h2>
            <p className="mt-4 text-muted-foreground">
              A selection of projects that showcase our capabilities.
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
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PortfolioPreview;

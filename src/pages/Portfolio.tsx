import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const categories = ["All", "Vehicle Wraps", "Apparel", "Large Format", "Digital"];

const projects = [
  {
    title: "Commercial Van Route Wrap",
    category: "Vehicle Wraps",
    image: "/van-wrap-1.jpg",
    description: "Custom-designed full van wrap for mobile service businesses.",
  },
  {
    title: "Box Truck Fleet Branding",
    category: "Vehicle Wraps",
    image: "/truck-1.jpg",
    description: "High-visibility box truck graphic installations for local delivery fleets.",
  },
  {
    title: "Custom Food Truck Wrap",
    category: "Vehicle Wraps",
    image: "/food-truck-1.jpg",
    description: "Vibrant, durable wrap solutions specifically tailored for food vending trucks.",
  },
  {
    title: "High-Tech Car Graphics",
    category: "Vehicle Wraps",
    image: "/car-wrapping-hi-tech.jpg",
    description: "Sleek, eye-catching vehicle graphics that generate thousands of daily impressions.",
  },
  {
    title: "Interior Commercial Wall Wraps",
    category: "Large Format",
    image: "/wall-wraps.jpg",
    description: "Transformative interior commercial wall graphics and visual merchandising.",
  },
  {
    title: "Classic Storefront Graphics",
    category: "Large Format",
    image: "/Storefront-Wall-Wraps.jpg",
    description: "Window graphics and illuminated signage for retail locations.",
  },
  {
    title: "Business Signage Solutions",
    category: "Large Format",
    image: "/lillys-printing-service.jpg",
    description: "High-quality, durable signage designed to grab attention.",
  },
  {
    title: "Premium Black T-Shirts",
    category: "Apparel",
    image: "/T-SHIRT-31-3.jpg",
    description: "High-quality screen printing on premium cotton for maximum durability.",
  },
  {
    title: "Custom Event Apparel",
    category: "Apparel",
    image: "/custom-t-shirt-9.jpg",
    description: "Vibrant, fade-resistant printed shirts perfect for corporate events.",
  },
  {
    title: "Corporate Identity Branding",
    category: "Digital",
    image: "/branding.jpg",
    description: "Complete identity overhaul including logo, style guide, and digital assets.",
  },
  {
    title: "Social Media Campaigns",
    category: "Digital",
    image: "/social-media-2.jpg",
    description: "Strategic social media management designed to elevate brand perception.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Our Portfolio
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of our premium work across vehicle wraps, apparel, and digital solutions.
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
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
                    {project.category}
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
              See something you like?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's bring your vision to life. Request a quote today and get a custom proposal for your project.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Portfolio;

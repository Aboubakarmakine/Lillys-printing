import FadeIn from "@/components/FadeIn";

const HeroSection = () => {
  return (
    <section className="w-full mt-16 xl:mt-24 relative bg-white">
      <FadeIn>
        <div className="w-full">
          <div className="relative overflow-hidden group">
            <img 
              src="/hero-banner.png" 
              alt="Lilly's Printing Hero Banner" 
              className="w-full h-auto object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.01]"
              style={{ display: 'block' }}
            />
            {/* Subtle overlay for a premium glossy feel that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default HeroSection;

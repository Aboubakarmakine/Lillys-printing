import FadeIn from "@/components/FadeIn";

const HeroSection = () => {
  return (
    <section className="w-full mt-16 xl:mt-24 bg-gradient-to-b from-gray-50 to-white pb-8 md:pb-12 xl:pb-16 pt-4 md:pt-8">
      <FadeIn>
        <div className="w-full max-w-[1400px] mx-auto px-0 md:px-6 lg:px-8">
          <div className="relative rounded-none md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 group">
            <img 
              src="/hero-banner.png" 
              alt="Lilly's Printing Hero Banner" 
              className="w-full h-auto object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ display: 'block' }}
            />
            {/* Subtle overlay for a premium glossy feel that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default HeroSection;

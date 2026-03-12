import FadeIn from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Award, Clock, ShieldCheck, Printer, Target, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { value: 600, suffix: "+", label: "Happy Customers" },
    { value: 10000, suffix: "+", label: "Completed Jobs" },
    { value: 20, suffix: "+", label: "Years in the Market" },
    { value: 100, suffix: "%", label: "Satisfaction Rate" },
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-red-600 mb-2" />,
      title: "Uncompromising Quality",
      description: "From premium apparel to high-end business cards, we never cut corners on the materials or the final print quality."
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600 mb-2" />,
      title: "Lightning Fast Delivery",
      description: "We optimized our entire production workflow with automation to ensure your projects are delivered on time, every time."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-600 mb-2" />,
      title: "Enterprise Reliability",
      description: "Trusted by over 600 businesses across Maryland and beyond to handle their most critical physical branding needs."
    }
  ];

  const team = [
    {
      name: "Lilly Mejia",
      role: "CEO",
    },
    {
      name: "Jose Mejia",
      role: "Vehicle Wrapping Department",
    },
    {
      name: "Edduin Leon",
      role: "Graphic Designer",
    },
    {
      name: "Melisa",
      role: "Customer Service",
    }
  ];

  const reviews = [
    {
      name: "Lupita Garcia",
      date: "January 2, 2026",
      text: "Great customer service.. Excellent beautiful products!",
      rating: 5
    },
    {
      name: "Luke Colvin",
      date: "December 26, 2025",
      text: "So friendly and accommodating. Highly recommend them for any printing needs.",
      rating: 5
    },
    {
      name: "Rey#12 Vela",
      date: "December 17, 2025",
      text: "Absolutamente recomendable más que satisfecha con el servicio 100/100 recomendado ❤️❤️",
      rating: 5
    }
  ];

  return (
    <div className="bg-slate-50 selection:bg-red-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/40 via-slate-950/80 to-slate-950 z-10" />
          <img 
            src="/lillys-printing-service.jpg" 
            alt="Lilly's Printing Shop" 
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 max-w-6xl">
          <FadeIn>
            <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-400 font-semibold tracking-wider text-sm mb-6 border border-red-500/30">
              TWO DECADES OF EXCELLENCE
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Design Your <br />
              <span className="text-red-500">Success.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
              Founded to provide high-quality, reliable printing services for growing businesses demanding scalable, premium physical branding.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story & Storefront Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-red-50 rounded-3xl transform -rotate-2 z-0"></div>
                <img 
                  src="/lillys-printing-service.jpg" 
                  alt="Lilly's Printing Storefront" 
                  className="relative z-10 rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border-4 border-white"
                />
                <div className="absolute -bottom-8 -right-8 bg-slate-950 text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-800">
                  <Printer className="w-10 h-10 text-red-500 mb-4" />
                  <p className="font-bold text-2xl">Annapolis, MD</p>
                  <p className="text-slate-400">Headquarters</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-4xl pr-8 font-bold mb-8 text-slate-900 leading-tight">
                A full-service enterprise printing partner you can trust.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Lilly’s Printing is a full-service enterprise printing company offering products and services to meet all your corporate and operational needs. From essential office products like stationery and high-end business cards to launching your brand's physical presence through professional vehicle wraps, storefront branding, bespoke logo design, and premium apparel — we are here to ensure your next project is an absolute success.
                </p>
                <p>
                  As a commercial printing company serving growing businesses, we understand that your printed materials represent your brand. That's why we invest in the latest printing technology, maintain strict quality control processes, and continuously optimize our operations for speed and accuracy. 
                </p>
                <p className="font-semibold text-slate-900 border-l-4 border-red-600 pl-4 py-2 bg-slate-50">
                  We are proud to serve businesses throughout the Maryland metro area, including Baltimore, Alexandria, Washington DC, Bethesda, and Rockville.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight">
                    <AnimatedCounter value={stat.value} duration={2} suffix={stat.suffix} />
                  </div>
                  <p className="text-red-400 font-medium uppercase tracking-wider text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values / Features Grid */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Why Growing Brands Choose Us</h2>
            <p className="text-xl text-slate-500">
              We combine decades of traditional craftsmanship with cutting-edge automated workflows.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm flex-grow">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-semibold tracking-wider uppercase mb-2 block">Our People</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Meet the Team</h2>
            <p className="text-xl text-slate-600">The dedicated professionals making sure your brand looks its absolute best.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group text-center bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-500 font-bold text-2xl group-hover:bg-red-100 group-hover:text-red-600 transition-colors duration-300">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-2 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Loved by Local Businesses</h2>
            <p className="text-xl text-slate-600">Don't just take our word for it. Here is what our clients have to say.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col relative">
                  <div className="absolute top-8 right-8 text-yellow-400 flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{review.name}</h4>
                      <p className="text-sm text-slate-500">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 italic flex-grow">"{review.text}"</p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Verified Google Review
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_100%)] bg-[length:20px_20px] opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to elevate your brand's physical presence?</h2>
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              Our team of design and print experts is ready to help you with your next big project. Let's make something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-slate-100 h-14 px-8 text-lg font-bold rounded-full">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-red-600 hover:bg-red-500 hover:text-white border-2 border-red-500 h-14 px-8 text-lg font-bold rounded-full bg-white">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { Palette, Store, FileText, Printer, Shirt, CarFront, Monitor, Package, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Package,
      title: t("services_page.wraps.title"),
      image: "/promo_merch.png",
      description: t("services_page.wraps.desc"),
      process: t("services_page.wraps.process", { returnObjects: true }) as string[],
      benefits: t("services_page.wraps.benefits", { returnObjects: true }) as string[],
      linkState: "Custom Promotional Merchandise",
    },
    {
      icon: Shirt,
      title: t("services_page.apparel.title"),
      image: "/premium_apparel.png",
      description: t("services_page.apparel.desc"),
      process: t("services_page.apparel.process", { returnObjects: true }) as string[],
      benefits: t("services_page.apparel.benefits", { returnObjects: true }) as string[],
      linkState: "Apparel & Promotional",
    },
    {
      icon: Smartphone,
      title: t("services_page.digital.title"),
      clientWebsites: [
        { img: "/client_jnson_paving.png", name: "J&Son Paving", url: "https://jnsonpaving.com" },
        { img: "/client_ivanias_cleaning.png", name: "Ivania's Cleaning", url: "https://ivaniascleaning.com" },
        { img: "/client_drobe.png", name: "Drobe", url: "https://drobe.framer.ai" },
        { img: "/client_congenial_giving.png", name: "Congenial Giving", url: "https://congenialgiving.org" },
      ],
      description: t("services_page.digital.desc"),
      process: t("services_page.digital.process", { returnObjects: true }) as string[],
      benefits: t("services_page.digital.benefits", { returnObjects: true }) as string[],
      linkState: "Digital & Social Media Marketing",
    },
    {
      icon: Printer,
      title: t("services_page.print.title"),
      image: "/business_cards.webp",
      description: t("services_page.print.desc"),
      process: t("services_page.print.process", { returnObjects: true }) as string[],
      benefits: t("services_page.print.benefits", { returnObjects: true }) as string[],
      linkState: "Commercial Printing",
    },
    {
      icon: Palette,
      title: t("services_page.logo.title"),
      logos: [
        "/SDA.svg",
        "/POTOMAC .svg",
        "/PRESTIGE RESTORATIONS.svg",
        "/FREEDOM.svg",
        "/EL CABRITO MEXICAN GRILL.svg",
        "/ANNAPOLIS LATINO MARKET.svg",
        "/BALTIMORE PERMIT EXPRESS LOGO--.svg",
        "/LATINOS MULTISERVICES.svg",
      ],
      description: t("services_page.logo.desc"),
      linkState: "Logo Design",
    },
    {
      icon: Store,
      title: t("services_page.storefront.title"),
      image: "/storefront_wraps.webp",
      description: t("services_page.storefront.desc"),
      linkState: "Storefront & Wall Wraps",
    },
    {
      icon: FileText,
      title: t("services_page.flyer.title"),
      image: "/flyer_design.png",
      description: t("services_page.flyer.desc"),
      linkState: "Flyer Design",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              {t("services_page.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services_page.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="space-y-32">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon size={32} className="text-primary" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  {(service as any).clientWebsites ? (
                    <div className="mb-8 grid grid-cols-2 gap-2 lg:hidden">
                      {(service as any).clientWebsites.map((site: {img: string; name: string; url: string}, idx: number) => (
                        <div key={idx} className="rounded-xl overflow-hidden border border-border/50 shadow">
                          <img src={site.img} alt={site.name} className="w-full h-28 object-cover object-top" />
                          <p className="text-xs text-center text-muted-foreground py-1 bg-muted/50">{site.name}</p>
                        </div>
                      ))}
                    </div>
                  ) : (service as any).logos ? (
                    <div className="mb-8 grid grid-cols-2 gap-8 lg:hidden items-center">
                      {(service as any).logos.map((logo: string, idx: number) => (
                        <div key={idx} className="flex items-center justify-center aspect-auto h-20">
                          <img src={logo} alt={`Client Logo ${idx + 1}`} className="max-w-full max-h-full object-contain" />
                        </div>
                      ))}
                    </div>
                  ) : service.image && (
                    <div className="mb-8 rounded-xl overflow-hidden shadow-xl border border-border/50 aspect-video lg:hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                  )}

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {(service as any).process && (service as any).benefits && (
                    <div className="grid sm:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                          <span className="w-8 h-[2px] bg-primary block"></span> {t("services_page.process")}
                        </h3>
                        <ol className="space-y-3">
                          {Array.isArray((service as any).process) && (service as any).process.map((step: string, j: number) => (
                            <li key={j} className="text-sm text-muted-foreground flex gap-3">
                              <span className="text-primary font-bold min-w-[20px]">{j + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                          <span className="w-8 h-[2px] bg-primary block"></span> {t("services_page.benefits")}
                        </h3>
                        <ul className="space-y-3">
                          {Array.isArray((service as any).benefits) && (service as any).benefits.map((b: string, j: number) => (
                            <li key={j} className="text-sm text-muted-foreground flex gap-3">
                              <span className="text-primary font-bold">✓</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 mt-2">
                    <Button asChild size="lg">
                      <Link to="/contact" state={{ service: service.linkState }}>{t("services_page.get_quote")}</Link>
                    </Button>
                    {service.title === t("services_page.apparel.title") && (
                      <Button asChild size="lg" variant="outline">
                        <a href="https://catalog.companycasuals.com" target="_blank" rel="noopener noreferrer">
                          Browse Catalog →
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} hidden lg:block`}>
                  {(service as any).clientWebsites ? (
                    <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                      <div className="grid grid-cols-2 gap-[2px] bg-slate-200">
                        {(service as any).clientWebsites.map((site: {img: string; name: string; url: string}, idx: number) => (
                          <div key={idx} className="relative aspect-video overflow-hidden bg-white group">
                            <img
                              src={site.img}
                              alt={site.name}
                              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <p className="absolute bottom-1.5 left-2 text-white text-[10px] font-semibold drop-shadow">{site.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (service as any).logos ? (
                    <div className="grid grid-cols-2 gap-12 p-8 h-full place-content-center shrink-0">
                      {(service as any).logos.map((logo: string, idx: number) => (
                        <div key={idx} className="flex items-center justify-center h-28 hover:scale-105 transition-transform duration-300">
                          <img src={logo} alt={`Client Logo ${idx + 1}`} className="max-w-full max-h-full object-contain hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  ) : service.image ? (
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 aspect-[4/5] relative group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10" />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ) : (
                    <div className="bg-secondary/50 rounded-2xl p-12 h-full flex flex-col justify-center items-center text-center aspect-[4/5] border border-border/50">
                      <service.icon size={80} className="text-primary/20 mb-6" />
                      <h3 className="text-2xl font-bold text-muted-foreground/40">Premium {service.title}</h3>
                    </div>
                  )}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

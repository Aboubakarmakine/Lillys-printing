import FadeIn from "@/components/FadeIn";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              {t("contact.title")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.desc")}
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
            <div className="min-h-[520px]" aria-hidden="true" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  {t("contact.info.title")}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">{t("contact.info.phone")}</p>
                      <p className="text-muted-foreground">(443) 454-2210</p>
                      <p className="text-muted-foreground text-xs">(410) 988-4422</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">{t("contact.info.email")}</p>
                      <p className="text-muted-foreground">
                        info@lillysprinting.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">
                        {t("contact.info.hours")}
                      </p>
                      <p className="text-muted-foreground">{t("footer.hours")}</p>
                      <p className="text-muted-foreground">{t("footer.hours_sat")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle size={20} className="text-primary" />
                  <h3 className="font-heading font-semibold text-foreground">
                    {t("contact.info.ai_title")}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("contact.info.ai_desc")}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-foreground">{t("contact.locations.baltimore")}</p>
                  <div className="bg-muted rounded-lg overflow-hidden aspect-square border border-border/50 shadow-sm">
                    <iframe
                      src="https://maps.google.com/maps?q=5528+Belair+Rd,+Baltimore,+MD+21206&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Baltimore Location"
                    ></iframe>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-foreground">{t("contact.locations.arnold")}</p>
                  <div className="bg-muted rounded-lg overflow-hidden aspect-square border border-border/50 shadow-sm">
                    <iframe
                      src="https://maps.google.com/maps?cid=7365640885426244173&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Arnold Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;

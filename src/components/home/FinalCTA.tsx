import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { useTranslation } from "react-i18next";

const FinalCTA = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold">
              {t("home.final_cta.title")}
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              {t("home.final_cta.desc")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold"
              >
                <Link to="/contact">{t("home.final_cta.btn_consultation")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold"
              >
                <Link to="/contact">{t("home.final_cta.btn_order")}</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTA;

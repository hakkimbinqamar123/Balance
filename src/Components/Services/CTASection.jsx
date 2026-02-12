import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center px-8">

        <h2 className="font-hero text-4xl mb-6 text-white">
          {t("ctaSection.title")}
        </h2>

        <p className="text-slate-400 mb-10 text-lg">
          {t("ctaSection.subtitle")}
        </p>

        <Link to="/contact">
          <button
            className="
              border border-white/70
              px-10 py-4
              rounded-xl
              text-lg
              text-white
              hover:bg-white hover:text-slate-900
              transition
            "
          >
            {t("ctaSection.button")}
          </button>
        </Link>

      </div>
    </section>
  );
}

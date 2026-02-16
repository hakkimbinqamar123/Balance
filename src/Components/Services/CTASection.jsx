import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-[#202C53] via-[#202C53]/95 to-[#D6AC44]/25">
      <div className="max-w-4xl mx-auto text-center px-8">

        {/* Title */}
        <h2 className="font-hero text-4xl mb-6">
          <span className="bg-gradient-to-r from-[#F7E2BA] via-[#EAC868] to-[#D6AC44] bg-clip-text text-transparent">
            {t("ctaSection.title")}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#C7C6C6] mb-10 text-lg leading-relaxed">
          {t("ctaSection.subtitle")}
        </p>

        {/* Button — same style as Hero CTA */}
        <Link to="/contact">
          <button
            className="
              btn-lift
              bg-[#F7E2BA]
              border border-[#F7E2BA]
              px-10 py-4
              rounded-xl
              text-lg font-medium
              text-[#202C53]
              hover:bg-[#EAC868]
              hover:border-[#EAC868]
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

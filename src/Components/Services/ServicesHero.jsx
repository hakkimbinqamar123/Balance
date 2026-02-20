import serviceBg from "../../assets/Images/sevice.webp";
import { useTranslation } from "react-i18next";

export default function ServicesHero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[340px] sm:h-[380px] md:h-[420px] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={serviceBg}
        alt={t("servicesHero.imgAlt")}
        className="absolute inset-0 w-full h-full object-cover animate-bg"
      />

      {/* Brand Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1c2d]/95 via-[#0b1c2d]/90 to-[#0b1c2d]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-20 sm:pt-24 text-start">

        {/* Title */}
        <h1
          className="
            font-hero font-semibold
            leading-tight
            tracking-[-0.02em]
            text-white
            text-[clamp(26px,6vw,56px)]
            animate-fade-up animate-delay-1
          "
        >
          <span className="relative inline-block">

            {/* Gradient Text */}
            <span className="bg-gradient-to-r from-[#6FA8FF] via-white to-[#EAC868] bg-clip-text text-transparent drop-shadow-[0_6px_24px_rgba(32,44,83,0.35)]">
              {t("servicesHero.title")}
            </span>

            {/* Underline Accent */}
            <span className="absolute left-0 -bottom-2 sm:-bottom-3 h-[3px] w-1/2 sm:w-2/3 rounded-full bg-gradient-to-r from-[#D6AC44] via-[#F7E2BA] to-transparent" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="
          mt-5
          text-[#C7C6C6]
          text-base sm:text-lg
          leading-relaxed
          max-w-2xl
          animate-fade-up animate-delay-2
        ">
          {t("servicesHero.subtitle")}
        </p>

      </div>
    </section>
  );
}

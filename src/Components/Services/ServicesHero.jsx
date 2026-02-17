import serviceBg from "../../assets/Images/sevice.webp";
import { useTranslation } from "react-i18next";

export default function ServicesHero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[420px] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={serviceBg}
        alt={t("servicesHero.imgAlt")}
        className="absolute inset-0 w-full h-full object-cover animate-bg"
      />

      {/* Brand Overlay — same as AboutHero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1c2d]/95 via-[#0b1c2d]/90 to-[#0b1c2d]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 text-start">

        {/* Title */}
        <h1
          className="
            font-hero font-semibold
            leading-[1.05]
            tracking-[-0.02em]
            text-white
            text-[clamp(28px,5vw,56px)]
            animate-fade-up animate-delay-1
          "
        >
          <span className="relative inline-block">

            {/* Gold highlight text */}
            <span className="bg-gradient-to-r from-[#6FA8FF] via-white to-[#EAC868] bg-clip-text text-transparent drop-shadow-[0_6px_24px_rgba(32,44,83,0.35)]">
              {t("servicesHero.title")}
            </span>

            {/* Underline accent */}
            <span className="absolute left-0 -bottom-3 h-[3px] w-2/3 rounded-full bg-gradient-to-r from-[#D6AC44] via-[#F7E2BA] to-transparent" />
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mt-6 overflow-x-auto">
          <p className="text-[#C7C6C6] text-lg leading-relaxed whitespace-nowrap
                animate-fade-up animate-delay-2">
            {t("servicesHero.subtitle")}
          </p>
        </div>



      </div>
    </section>
  );
}

import aboutBg from "../../assets/Images/about-bg.webp";
import { useTranslation } from "react-i18next";

export default function AboutHero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[420px] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={aboutBg}
        alt="about background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 text-white text-start">

        <p className="uppercase tracking-widest text-slate-400 text-sm mb-4 animate-fade-up">
          {t("aboutHero.label")}
        </p>

        <h1
          className="
            font-hero font-medium
            leading-tight
            whitespace-nowrap
            text-[clamp(22px,5vw,56px)]
            animate-fade-up animate-delay-1
          "
        >
          {t("aboutHero.title")}
        </h1>

      </div>

    </section>
  );
}

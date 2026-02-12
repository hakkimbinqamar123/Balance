import serviceBg from "../../assets/Images/sevice.webp";
import { useTranslation } from "react-i18next";

export default function ServicesHero() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={serviceBg}
        alt={t("servicesHero.imgAlt")}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-900/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-white text-start">

        <p className="uppercase tracking-widest text-slate-400 text-sm mb-4">
          {t("servicesHero.label")}
        </p>

        <h1
          className="
            font-hero font-medium
            leading-tight
            whitespace-nowrap
            text-[clamp(22px,5vw,56px)]
          "
        >
          {t("servicesHero.title")}
        </h1>

        <p className="mt-6 text-slate-300 max-w-2xl text-lg leading-relaxed">
          {t("servicesHero.subtitle")}
        </p>

      </div>
    </section>
  );
}

import aboutImg from "../../assets/Images/about.webp";
import { useTranslation } from "react-i18next";

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed text-start">

          <h2 className="font-hero text-3xl text-white mb-4">
            {t("who.title")}
          </h2>

          <p>{t("who.p1")}</p>
          <p>{t("who.p2")}</p>
          <p>{t("who.p3")}</p>

        </div>

        {/* Image */}
        <div className="relative group">
          <img
            src={aboutImg}
            alt={t("who.imgAlt")}
            className="
              rounded-2xl shadow-2xl
              object-cover h-[420px] w-full
              group-hover:scale-[1.02]
              transition duration-500
            "
          />

          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}

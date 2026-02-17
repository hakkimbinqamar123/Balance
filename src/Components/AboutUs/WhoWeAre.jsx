import aboutImg from "../../assets/Images/about.webp";
import { useTranslation } from "react-i18next";

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#202C53] border-t border-[#616160]/40">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div className="space-y-6 text-[#C7C6C6] text-lg leading-relaxed text-start">

          <div className="mb-16 max-w-2xl text-start">
          <h2 className="font-hero text-4xl mb-4">
            <span className="bg-gradient-to-r from-[#F7E2BA] via-[#EAC868] to-[#D6AC44] bg-clip-text text-transparent">
              {t("who.title")}
            </span>
          </h2>

          {/* Accent underline */}
          <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#D6AC44] to-transparent" />
        </div>

          <p>{t("who.p1")}</p>
          <p>{t("who.p2")}</p>
          <p>{t("who.p3")}</p>

          {/* Accent underline */}
          <div className="mt-4 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#D6AC44] to-transparent" />
        </div>

        {/* Image */}
        <div className="relative group">

          <img
            src={aboutImg}
            alt={t("who.imgAlt")}
            className="
              rounded-2xl shadow-2xl
              object-cover h-[420px] w-full
              contrast-110 brightness-90 saturate-80
              group-hover:scale-[1.03]
              transition duration-500
            "
          />

          {/* Brand tint overlay */}
          <div className="absolute inset-0 rounded-2xl
                          bg-gradient-to-br
                          from-[#202C53]/55
                          to-[#D6AC44]/25
                          mix-blend-multiply" />

          {/* Brand ring */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-[#F7E2BA]/20 pointer-events-none" />

        </div>

      </div>
    </section>
  );
}

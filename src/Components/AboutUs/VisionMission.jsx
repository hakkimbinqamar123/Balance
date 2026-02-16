import { useTranslation } from "react-i18next";

export default function VisionMission() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-[#202C53] via-[#202C53] to-[#D6AC44]/25">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12">

        {/* Vision Card */}
        <div
          className="
            group
            bg-[#202C53]
            border border-[#202C53]
            p-10 rounded-2xl
            hover:border-[#D6AC44]
            hover:-translate-y-2
            transition-all duration-300
            shadow-xl
            text-start
          "
        >
          <div className="text-3xl mb-4 text-[#F7E2BA] group-hover:text-[#EAC868] transition">
            🎯
          </div>

          <h3 className="font-hero text-2xl mb-4">
            <span className="bg-gradient-to-r from-[#F7E2BA] via-[#EAC868] to-[#D6AC44] bg-clip-text text-transparent">
              {t("vision.vision_title")}
            </span>
          </h3>

          <p className="text-[#C7C6C6] leading-relaxed">
            {t("vision.vision_text")}
          </p>

          <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-[#D6AC44] to-transparent rounded-full" />
        </div>

        {/* Mission Card */}
        <div
          className="
            group
            bg-[#202C53]
            border border-[#202C53]
            p-10 rounded-2xl
            hover:border-[#D6AC44]
            hover:-translate-y-2
            transition-all duration-300
            shadow-xl
            text-start
          "
        >
          <div className="text-3xl mb-4 text-[#F7E2BA] group-hover:text-[#EAC868] transition">
            📘
          </div>

          <h3 className="font-hero text-2xl mb-4">
            <span className="bg-gradient-to-r from-[#F7E2BA] via-[#EAC868] to-[#D6AC44] bg-clip-text text-transparent">
              {t("vision.mission_title")}
            </span>
          </h3>

          <p className="text-[#C7C6C6] leading-relaxed">
            {t("vision.mission_text")}
          </p>

          <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-[#D6AC44] to-transparent rounded-full" />
        </div>

      </div>
    </section>
  );
}

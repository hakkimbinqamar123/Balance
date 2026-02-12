import { useTranslation } from "react-i18next";

export default function VisionMission() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12">

        {/* Vision Card */}
        <div
          className="
            bg-slate-900/80
            backdrop-blur
            border border-slate-800
            p-10 rounded-2xl
            hover:border-slate-600
            transition-all duration-300
            text-start
          "
        >
          <div className="text-3xl mb-4">🎯</div>

          <h3 className="font-hero text-2xl mb-4 text-white">
            {t("vision.vision_title")}
          </h3>

          <p className="text-slate-300 leading-relaxed">
            {t("vision.vision_text")}
          </p>
        </div>

        {/* Mission Card */}
        <div
          className="
            bg-slate-900/80
            backdrop-blur
            border border-slate-800
            p-10 rounded-2xl
            hover:border-slate-600
            transition-all duration-300
            text-start
          "
        >
          <div className="text-3xl mb-4">📘</div>

          <h3 className="font-hero text-2xl mb-4 text-white">
            {t("vision.mission_title")}
          </h3>

          <p className="text-slate-300 leading-relaxed">
            {t("vision.mission_text")}
          </p>
        </div>

      </div>
    </section>
  );
}

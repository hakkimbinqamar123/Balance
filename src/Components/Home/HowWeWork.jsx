import img1 from "../../assets/images/website1.webp";
import img2 from "../../assets/images/Website(41).webp";
import img3 from "../../assets/images/Website(33).webp";
import img4 from "../../assets/images/Website(29).webp";
import { useTranslation } from "react-i18next";

export default function HowWeWork() {
  const { t } = useTranslation();

  const steps = [
    { no: "01", img: img1 },
    { no: "02", img: img2 },
    { no: "03", img: img3 },
    { no: "04", img: img4 },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="mb-16 max-w-2xl text-start">
          <h2 className="font-hero text-4xl text-white mb-4">
            {t("how.title")}
          </h2>
          <p className="text-slate-400">
            {t("how.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.no}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={step.img}
                  alt={t(`how.steps.${i}.alt`)}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <div className="text-4xl font-hero text-white/20 mb-2">
                  {step.no}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {t(`how.steps.${i}.title`)}
                </h3>

                <p className="text-slate-400">
                  {t(`how.steps.${i}.text`)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

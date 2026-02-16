import img1 from "../../assets/Images/website1.webp";
import img2 from "../../assets/Images/website41.webp";
import img3 from "../../assets/Images/Website(33).webp";
import img4 from "../../assets/Images/Website(29).webp";
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
    <section className="py-24 bg-gradient-to-br from-[#202C53] via-[#202C53] to-[#D6AC44]/25">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="mb-16 max-w-2xl text-start">

          <h2 className="font-hero text-4xl mb-4">
            <span className="bg-gradient-to-r from-[#F7E2BA] via-[#EAC868] to-[#D6AC44] bg-clip-text text-transparent">
              {t("how.title")}
            </span>
          </h2>

          <p className="text-[#C7C6C6] leading-relaxed">
            {t("how.subtitle")}
          </p>

          {/* Accent underline */}
          <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#D6AC44] to-transparent" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.no}
              className="group bg-[#202C53]/85 border border-[#202C53] rounded-2xl overflow-hidden
                         hover:border-[#EAC868] hover:-translate-y-2
                         transition duration-300 shadow-xl"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden relative">

                <img
                  src={step.img}
                  alt={t(`how.steps.${i}.alt`)}
                  className="w-full h-full object-cover
                             contrast-110 brightness-90 saturate-80
                             group-hover:scale-110 transition duration-500"
                />

                {/* Brand tint overlay */}
                <div className="absolute inset-0
                                bg-gradient-to-br
                                from-[#202C53]/65
                                via-[#202C53]/40
                                to-[#D6AC44]/30
                                mix-blend-multiply" />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Step Number */}
                <div className="text-4xl font-hero mb-2
                                bg-gradient-to-r from-[#F7E2BA] via-[#EAC868] to-[#D6AC44]
                                bg-clip-text text-transparent opacity-95">
                  {step.no}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#F7E2BA] mb-3
                               group-hover:text-[#EAC868] transition">
                  {t(`how.steps.${i}.title`)}
                </h3>

                {/* Text */}
                <p className="text-[#C7C6C6] leading-relaxed text-sm">
                  {t(`how.steps.${i}.text`)}
                </p>

                {/* Accent line */}
                <div className="mt-5 h-[2px] w-12
                                bg-gradient-to-r from-[#D6AC44] to-transparent
                                rounded-full" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

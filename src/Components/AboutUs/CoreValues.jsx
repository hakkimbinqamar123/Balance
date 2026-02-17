import { useTranslation } from "react-i18next";

export default function CoreValues() {
  const { t } = useTranslation();

  const icons = ["📊", "🤝", "⚖️", "⚙️", "🏢"];

  return (
    <section className="py-24 bg-gradient-to-br from-[#202C53] via-[#202C53]/95 to-[#0b1c2d]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header — same pattern as Industries */}
        <div className="mb-16 max-w-2xl text-start">
          <h2 className="font-hero text-4xl mb-4">
            <span className="bg-gradient-to-r from-[#F7E2BA] via-[#EAC868] to-[#D6AC44] bg-clip-text text-transparent">
              {t("values.title")}
            </span>
          </h2>

          {/* Accent underline */}
          <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#D6AC44] to-transparent" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {icons.map((icon, i) => (
            <div
              key={i}
              className="group bg-[#202C53]/80 border border-[#202C53] rounded-xl p-8 
                         hover:border-[#EAC868] hover:-translate-y-2 
                         transition duration-300 shadow-xl text-start"
            >
              {/* Icon */}
              <div className="text-3xl mb-4 text-[#F7E2BA] group-hover:text-[#EAC868] transition">
                {icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-2 text-[#F7E2BA] group-hover:text-[#EAC868] transition">
                {t(`values.items.${i}.title`)}
              </h3>

              {/* Text */}
              <p className="text-[#C7C6C6] text-sm leading-relaxed">
                {t(`values.items.${i}.text`)}
              </p>

              {/* Accent line */}
              <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-[#D6AC44] to-transparent rounded-full" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

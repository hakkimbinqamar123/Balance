import { useTranslation } from "react-i18next";

export default function ServicesGrid() {
  const { t } = useTranslation();

  const icons = ["📘", "📊", "🧾", "⚖️", "⚙️", "🤝", "🧩"];

  return (
    <section className="py-24 bg-gradient-to-br from-[#202C53] via-[#202C53]/95 to-[#0b1c2d] border-t border-[#616160]/40">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {icons.map((icon, i) => (
          <div
            key={i}
            className="
              group
              bg-[#202C53]/85
              border border-[#202C53]
              rounded-2xl p-8
              hover:border-[#EAC868]
              hover:-translate-y-2
              transition duration-300
              shadow-xl
              text-start
            "
          >
            {/* Icon */}
            <div className="text-3xl mb-5 text-[#F7E2BA] group-hover:text-[#EAC868] transition">
              {icon}
            </div>

            {/* Title */}
            <h3 className="font-hero text-2xl mb-4 text-[#F7E2BA] group-hover:text-[#EAC868] transition">
              {t(`servicesGrid.items.${i}.title`)}
            </h3>

            {/* Text */}
            <p className="text-[#C7C6C6] leading-relaxed">
              {t(`servicesGrid.items.${i}.text`)}
            </p>

            {/* Accent line */}
            <div className="mt-6 h-[2px] w-14 bg-gradient-to-r from-[#D6AC44] to-transparent rounded-full" />
          </div>
        ))}

      </div>
    </section>
  );
}

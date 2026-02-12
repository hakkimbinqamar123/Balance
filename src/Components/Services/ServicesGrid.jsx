import { useTranslation } from "react-i18next";

export default function ServicesGrid() {
  const { t } = useTranslation();

  const icons = ["📘", "📊", "🧾", "⚖️", "⚙️", "🤝", "🧩"];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {icons.map((icon, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-600 hover:-translate-y-1 transition text-start"
          >
            <div className="text-3xl mb-5">{icon}</div>

            <h3 className="font-hero text-2xl mb-4 text-white">
              {t(`servicesGrid.items.${i}.title`)}
            </h3>

            <p className="text-slate-400 leading-relaxed">
              {t(`servicesGrid.items.${i}.text`)}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

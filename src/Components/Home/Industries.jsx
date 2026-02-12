import { useTranslation } from "react-i18next";

export default function Industries() {
  const { t } = useTranslation();

  const icons = [
    "🏢",
    "🛒",
    "🧑‍💼",
    "🏗️",
    "💻",
    "🏬",
    "🌍",
    "📈",
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="mb-16 max-w-2xl text-start">
          <h2 className="font-hero text-4xl text-white mb-4">
            {t("industries.title")}
          </h2>
          <p className="text-slate-400">
            {t("industries.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-slate-600 transition"
            >
              <div className="text-3xl mb-3 text-white">
                {icon}
              </div>

              <h3 className="font-semibold mb-2 text-white">
                {t(`industries.items.${i}.title`)}
              </h3>

              <p className="text-slate-400 text-sm">
                {t(`industries.items.${i}.text`)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

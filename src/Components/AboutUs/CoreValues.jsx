import { useTranslation } from "react-i18next";

export default function CoreValues() {
  const { t } = useTranslation();

  const icons = ["📊", "🤝", "⚖️", "⚙️", "🏢"];

  return (
    <section className="py-24 bg-black backdrop-blur">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="font-hero text-4xl mb-16 text-white text-start">
          {t("values.title")}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {icons.map((icon, i) => (
            <div
              key={i}
              className="
                bg-slate-900
                border border-slate-800
                rounded-xl p-8
                hover:border-slate-600
                hover:-translate-y-1
                transition
                text-start
              "
            >
              <div className="text-2xl mb-3">{icon}</div>

              <h4 className="font-semibold mb-2 text-white">
                {t(`values.items.${i}.title`)}
              </h4>

              <p className="text-slate-400 text-sm">
                {t(`values.items.${i}.text`)}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

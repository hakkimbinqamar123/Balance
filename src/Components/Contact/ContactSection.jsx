import contactImg from "../../assets/Images/Website(25).webp";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
  const address = t("contactSection.address", { returnObjects: true });

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 pt-32">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-10 text-start">

          <img
            src={contactImg}
            alt={t("contactSection.imgAlt")}
            className="rounded-2xl w-full h-72 object-cover border border-slate-800"
          />

          <div>
            <h2 className="font-hero text-3xl mb-6 text-white">
              {t("contactSection.title")}
            </h2>

            <div className="space-y-6 text-slate-300">

              <div>
                <p className="text-slate-500 text-sm">
                  {t("contactSection.labels.email")}
                </p>
                <a
                  href="mailto:info@balancellc.ae"
                  className="text-lg hover:text-white transition"
                >
                  info@balancellc.ae
                </a>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  {t("contactSection.labels.office")}
                </p>
                <p className="text-lg leading-relaxed">
                  {address.map((line, i) => (
                    <span key={i}>
                      {line}<br />
                    </span>
                  ))}
                </p>
              </div>

              <div>
                <a
                  href="https://maps.app.goo.gl/iJtABtNNUqx5KDLe6?g_st=iw"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 border border-white/60 px-6 py-3 rounded-lg text-white hover:bg-white hover:text-slate-900 transition"
                >
                  {t("contactSection.mapButton")}
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-start">
          <h3 className="font-hero text-2xl mb-8 text-white">
            {t("contactSection.form.title")}
          </h3>

          <form className="space-y-6">

            <div>
              <label className="text-sm text-slate-400">
                {t("contactSection.form.name")}
              </label>
              <input type="text" className="w-full mt-2 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:border-white outline-none text-white" />
            </div>

            <div>
              <label className="text-sm text-slate-400">
                {t("contactSection.form.email")}
              </label>
              <input type="email" className="w-full mt-2 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:border-white outline-none text-white" />
            </div>

            <div>
              <label className="text-sm text-slate-400">
                {t("contactSection.form.subject")}
              </label>
              <input type="text" className="w-full mt-2 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:border-white outline-none text-white" />
            </div>

            <div>
              <label className="text-sm text-slate-400">
                {t("contactSection.form.message")}
              </label>
              <textarea rows={5} className="w-full mt-2 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:border-white outline-none text-white" />
            </div>

            <button
              type="submit"
              className="w-full border border-white/70 py-4 rounded-xl text-lg text-white hover:bg-white hover:text-slate-900 transition"
            >
              {t("contactSection.form.submit")}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

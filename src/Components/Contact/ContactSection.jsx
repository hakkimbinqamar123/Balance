import contactImg from "../../assets/Images/Website(25).webp";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
  const address = t("contactSection.address", { returnObjects: true });

  return (
    <section className="py-24 pt-32 bg-gradient-to-br from-[#202C53] via-[#202C53]/95 to-[#0b1c2d]">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-10 text-start">

          <div className="relative group">
            <img
              src={contactImg}
              alt={t("contactSection.imgAlt")}
              className="rounded-2xl w-full h-72 object-cover border border-[#616160]/40"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#202C53]/40 to-[#D6AC44]/20 mix-blend-multiply" />
          </div>

          <div>
            <h2 className="font-hero text-3xl mb-6">
              <span className="bg-gradient-to-r from-[#F7E2BA] via-[#EAC868] to-[#D6AC44] bg-clip-text text-transparent">
                {t("contactSection.title")}
              </span>
            </h2>

            <div className="space-y-6 text-[#C7C6C6]">

              <div>
                <p className="text-[#D6AC44] text-sm">
                  {t("contactSection.labels.email")}
                </p>
                <a
                  href="mailto:info@balancellc.ae"
                  className="text-lg hover:text-[#EAC868] transition"
                >
                  info@balancellc.ae
                </a>
              </div>

              <div>
                <p className="text-[#D6AC44] text-sm">
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
                  className="inline-block mt-3 border border-[#F7E2BA] px-6 py-3 rounded-lg 
                             text-[#F7E2BA] hover:bg-[#F7E2BA] hover:text-[#202C53] transition"
                >
                  {t("contactSection.mapButton")}
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#202C53]/90 border border-[#616160]/40 rounded-2xl p-10 text-start shadow-xl">

          <h3 className="font-hero text-2xl mb-8">
            <span className="bg-gradient-to-r from-[#F7E2BA] to-[#EAC868] bg-clip-text text-transparent">
              {t("contactSection.form.title")}
            </span>
          </h3>

          <form className="space-y-6">

            {/* Input style shared */}
            <div>
              <label className="text-sm text-[#C7C6C6]">
                {t("contactSection.form.name")}
              </label>
              <input
                type="text"
                className="w-full mt-2 bg-[#0b1c2d] border border-[#616160]/50 rounded-lg px-4 py-3 
                           focus:border-[#EAC868] outline-none text-white transition"
              />
            </div>

            <div>
              <label className="text-sm text-[#C7C6C6]">
                {t("contactSection.form.email")}
              </label>
              <input
                type="email"
                className="w-full mt-2 bg-[#0b1c2d] border border-[#616160]/50 rounded-lg px-4 py-3 
                           focus:border-[#EAC868] outline-none text-white transition"
              />
            </div>

            <div>
              <label className="text-sm text-[#C7C6C6]">
                {t("contactSection.form.subject")}
              </label>
              <input
                type="text"
                className="w-full mt-2 bg-[#0b1c2d] border border-[#616160]/50 rounded-lg px-4 py-3 
                           focus:border-[#EAC868] outline-none text-white transition"
              />
            </div>

            <div>
              <label className="text-sm text-[#C7C6C6]">
                {t("contactSection.form.message")}
              </label>
              <textarea
                rows={5}
                className="w-full mt-2 bg-[#0b1c2d] border border-[#616160]/50 rounded-lg px-4 py-3 
                           focus:border-[#EAC868] outline-none text-white transition"
              />
            </div>

            {/* Submit button — brand style */}
            <button
              type="submit"
              className="w-full bg-[#F7E2BA] border border-[#F7E2BA] py-4 rounded-xl 
                         text-lg font-medium text-[#202C53]
                         hover:bg-[#EAC868] hover:border-[#EAC868] transition"
            >
              {t("contactSection.form.submit")}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

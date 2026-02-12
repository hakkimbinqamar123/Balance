import { Link } from "react-router-dom";
import heroImg from "../../assets/Images/tax.webp";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[720px] pt-4 w-full overflow-hidden">

      {/* Background */}
      <img
        src={heroImg}
        alt="tax background"
        className="absolute inset-0 w-full h-full object-cover animate-bg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c2d]/95 via-[#0b1c2d]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-screen min-h-[720px] flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">

          {/* text-start = RTL safe */}
          <div className="max-w-2xl text-white text-start">

            {/* Tagline */}
            <p className="uppercase tracking-widest text-sm text-slate-400 mb-4 animate-fade-up">
              {t("hero.tagline")}
            </p>

            {/* Heading */}
            <h1 className="font-hero font-semibold leading-[1.02] tracking-[-0.02em] text-[clamp(34px,5.5vw,64px)] animate-fade-up animate-delay-1">
              {t("hero.title_line1")} <br />

              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent drop-shadow-[0_6px_24px_rgba(148,163,184,0.25)]">
                  {t("hero.title_highlight")}
                </span>

                {/* Accent underline */}
                <span className="absolute left-0 -bottom-3 h-[3px] w-2/3 rounded-full bg-gradient-to-r from-slate-400 via-slate-500 to-transparent" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl animate-fade-up animate-delay-3">
              {t("hero.description_1")}
              <br /><br />
              {t("hero.description_2")}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-10 animate-fade-up animate-delay-4">

              <Link to="/contact">
                <button className="btn-lift border border-white/70 px-8 py-4 rounded-xl text-lg font-medium hover:bg-white hover:text-slate-900 transition">
                  {t("hero.cta")}
                </button>
              </Link>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

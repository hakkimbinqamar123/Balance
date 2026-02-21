import { useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/Images/tax.webp";
import fta from "../../assets/Images/fta.webp";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[720px] pt-4 w-full overflow-hidden">

      {/* Background */}
      <img
        src={heroImg}
        alt="tax background"
        className="absolute inset-0 w-full h-full object-cover animate-bg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1c2d]/95 via-[#0b1c2d]/90 to-[#0b1c2d]/85" />

      {/* Content */}
      <div className="relative z-20 h-screen min-h-[720px] flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div className="max-w-2xl text-start">

              <h1 className="font-hero font-semibold leading-[1.02] tracking-[-0.02em] text-[clamp(28px,4.5vw,54px)] animate-fade-up animate-delay-1">
                <span className="bg-gradient-to-r from-[#6FA8FF] via-white to-[#CFE3FF] bg-clip-text text-transparent">
                  {t("hero.title_line1")}
                </span>

                <br />

                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#6FA8FF] via-white to-[#EAC868] bg-clip-text text-transparent drop-shadow-[0_6px_24px_rgba(32,44,83,0.35)]">
                    {t("hero.title_highlight")}
                  </span>

                  <span className="absolute left-0 -bottom-3 h-[3px] w-2/3 rounded-full bg-gradient-to-r from-[#D6AC44] via-[#F7E2BA] to-transparent" />
                </span>
              </h1>

              <p className="mt-6 text-lg text-white leading-relaxed max-w-xl animate-fade-up animate-delay-3">
                {t("hero.description_1")}
                <br /><br />
                {t("hero.description_2")}
              </p>

              <div className="flex gap-4 mt-10 animate-fade-up animate-delay-4">
                <Link to="/contact">
                  <button className="btn-lift bg-[#F7E2BA] border border-[#F7E2BA] px-8 py-4 rounded-xl text-lg font-medium text-[#202C53] hover:bg-[#EAC868] hover:border-[#EAC868] transition">
                    {t("hero.cta")}
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - CLICKABLE SEAL */}
            <div className="flex justify-center md:justify-end animate-fade-up animate-delay-2">

              <div
                onClick={() => setOpen(true)}
                className="relative w-64 h-64 flex items-center justify-center cursor-pointer group"
              >

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EAC868] via-[#F7E2BA] to-[#EAC868] blur-xl opacity-40 group-hover:opacity-70 transition"></div>

                {/* Seal */}
                <div className="relative z Approved-10 w-56 h-56 rounded-full bg-gradient-to-br from-[#EAC868] to-[#C89B2C] shadow-2xl flex flex-col items-center justify-center text-center p-6 border-4 border-[#F7E2BA] group-hover:scale-105 transition duration-300">

                  <div className="text-xs tracking-widest text-[#202C53] font-bold">
                    {t("seal.certified")}
                  </div>

                  <div className="mt-2 text-lg font-bold text-[#202C53]">
                    {t("seal.approved")}
                  </div>

                  <div className="mt-1 text-sm text-[#202C53]">
                    {t("seal.taxAgency")}
                  </div>

                  <div className="mt-3 w-10 h-1 bg-[#202C53]/30 rounded-full">
                  {/* {t("seal.authority")} */}
                  </div>

                  <div className="mt-2 text-[10px] text-[#202C53]/80">
                    {t("seal.click")}
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 🔥 Modal Popup */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setOpen(false)}
        >
          <img
            src={fta}
            alt="FTA Certificate"
            className="max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}

    </section>
  );
}
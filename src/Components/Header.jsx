import { useState } from "react";
import logo from "../assets/Images/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMobileOpen(!mobileOpen);
  const closeMenu = () => setMobileOpen(false);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const navClass = ({ isActive }) =>
    `relative pb-1 transition
     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
     after:bg-white after:transition-all after:duration-300
     ${isActive
        ? "text-white after:w-full"
        : "text-slate-200 hover:text-white after:w-0 hover:after:w-full"
      }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 animate-fade-down bg-black/20    backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3 text-white">
            <img src={logo} alt="logo" className="h-10 w-auto" />

            <div>
              <div className="text-2xl font-extrabold tracking-widest">
                {t("brand.name")}
              </div>
              <div className="text-xs text-slate-300 -mt-1">
                {t("brand.tagline")}
              </div>
            </div>
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <NavLink to="/" className={navClass}>{t("nav.home")}</NavLink>
            <NavLink to="/about" className={navClass}>{t("nav.about")}</NavLink>
            <NavLink to="/services" className={navClass}>{t("nav.services")}</NavLink>
            <NavLink to="/contact" className={navClass}>{t("nav.contact")}</NavLink>
          </nav>

          {/* RIGHT SIDE DESKTOP */}
          <div className="hidden md:flex items-center gap-4">

            {/* LANGUAGE SWITCH */}
            <div className="flex border border-white/40 rounded-lg overflow-hidden text-xs">
              <button
                onClick={() => changeLang("en")}
                className={`px-3 py-1 ${i18n.language === "en" ? "bg-white text-black" : "text-white"}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLang("ar")}
                className={`px-3 py-1 ${i18n.language === "ar" ? "bg-white text-black" : "text-white"}`}
              >
                AR
              </button>
            </div>

            {/* CTA */}
            <Link to="/contact">
              <button className="border border-white/60 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-slate-900 transition">
                {t("cta.consult")}
              </button>
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>

        </div>

        {/* ================= MOBILE NAV ================= */}
        {mobileOpen && (
          <div className="md:hidden mt-6 bg-slate-900/95 backdrop-blur rounded-xl p-6 space-y-5 text-sm font-medium">

            <NavLink to="/" className={navClass} onClick={closeMenu}>
              {t("nav.home")}
            </NavLink>

            <NavLink to="/about" className={navClass} onClick={closeMenu}>
              {t("nav.about")}
            </NavLink>

            <NavLink to="/services" className={navClass} onClick={closeMenu}>
              {t("nav.services")}
            </NavLink>

            <NavLink to="/contact" className={navClass} onClick={closeMenu}>
              {t("nav.contact")}
            </NavLink>

            {/* MOBILE LANGUAGE SWITCH */}
            <div className="flex gap-3 pt-3">
              <button
                onClick={() => changeLang("en")}
                className="border border-white/50 px-4 py-2 rounded text-white"
              >
                English
              </button>
              <button
                onClick={() => changeLang("ar")}
                className="border border-white/50 px-4 py-2 rounded text-white"
              >
                العربية
              </button>
            </div>

            <button className="w-full mt-4 border border-white/60 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-slate-900 transition">
              {t("cta.consult")}
            </button>

          </div>
        )}

      </div>
    </header>
  );
}

import { useState } from "react";
import logo from "../assets/Images/logo2.webp";
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
    `block w-full pb-2 transition border-b border-[#616160]/40
     ${isActive
      ? "text-[#F7E2BA]"
      : "text-[#C7C6C6] hover:text-[#F7E2BA]"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 animate-fade-down bg-[#616160]/30 backdrop">
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3 text-[#F7E2BA]">

            <div className="h-12 w-12 rounded-full pl-1 border border-[#EAC868] shadow-md 
                bg-white flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="logo"
                className="h-8 w-8 object-contain"
              />
            </div>


            <div>
              <div className="text-2xl font-extrabold tracking-widest">
                {t("brand.name")}
              </div>
              <div className="text-xs text-[#C7C6C6] -mt-1">
                {t("brand.tagline")}
              </div>
            </div>

          </NavLink>


          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <NavLink to="/" className={({ isActive }) =>
              isActive
                ? "text-[#F7E2BA] border-b-2 border-[#EAC868] pb-1"
                : "text-[#C7C6C6] hover:text-[#F7E2BA] pb-1"
            }>
              {t("nav.home")}
            </NavLink>

            <NavLink to="/about" className={({ isActive }) =>
              isActive
                ? "text-[#F7E2BA] border-b-2 border-[#EAC868] pb-1"
                : "text-[#C7C6C6] hover:text-[#F7E2BA] pb-1"
            }>
              {t("nav.about")}
            </NavLink>

            <NavLink to="/services" className={({ isActive }) =>
              isActive
                ? "text-[#F7E2BA] border-b-2 border-[#EAC868] pb-1"
                : "text-[#C7C6C6] hover:text-[#F7E2BA] pb-1"
            }>
              {t("nav.services")}
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) =>
              isActive
                ? "text-[#F7E2BA] border-b-2 border-[#EAC868] pb-1"
                : "text-[#C7C6C6] hover:text-[#F7E2BA] pb-1"
            }>
              {t("nav.contact")}
            </NavLink>
          </nav>

          {/* RIGHT SIDE DESKTOP */}
          <div className="hidden md:flex items-center gap-4">

            {/* LANGUAGE SWITCH */}
            <div className="flex border border-[#EAC868]/60 rounded-lg overflow-hidden text-xs">
              <button
                onClick={() => changeLang("en")}
                className={`px-3 py-1 transition ${i18n.language === "en"
                  ? "bg-[#EAC868] text-[#532C20]"
                  : "text-[#F7E2BA] hover:bg-[#EAC868]/20"
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLang("ar")}
                className={`px-3 py-1 transition ${i18n.language === "ar"
                  ? "bg-[#EAC868] text-[#532C20]"
                  : "text-[#F7E2BA] hover:bg-[#EAC868]/20"
                  }`}
              >
                AR
              </button>
            </div>

            {/* CTA */}
            <Link to="/contact">
              <button className="border border-[#EAC868] text-[#F7E2BA] px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#EAC868] hover:text-[#532C20] transition">
                {t("cta.consult")}
              </button>
            </Link>

          </div>

          {/* MOBILE BUTTON — ROUND */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-full 
                       bg-[#616160]/90 border border-[#EAC868] 
                       text-[#F7E2BA] text-2xl
                       hover:bg-[#EAC868] hover:text-[#532C20]
                       transition"
          >
            ☰
          </button>

        </div>

        {/* ================= MOBILE NAV ================= */}
        {mobileOpen && (
          <div className="md:hidden mt-6 bg-[#532C20]/95 backdrop-blur rounded-xl p-6 text-sm font-medium">

            <div className="flex flex-col gap-4">

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

            </div>

            {/* MOBILE LANGUAGE */}
            <div className="flex gap-3 pt-6">
              <button
                onClick={() => changeLang("en")}
                className="flex-1 border border-[#EAC868] px-4 py-2 rounded text-[#F7E2BA] hover:bg-[#EAC868]/20"
              >
                English
              </button>
              <button
                onClick={() => changeLang("ar")}
                className="flex-1 border border-[#EAC868] px-4 py-2 rounded text-[#F7E2BA] hover:bg-[#EAC868]/20"
              >
                العربية
              </button>
            </div>

            <Link to="/contact" onClick={closeMenu}>
              <button className="w-full mt-4 border border-[#EAC868] text-[#F7E2BA] px-5 py-3 rounded-lg font-medium hover:bg-[#EAC868] hover:text-[#532C20] transition">
                {t("cta.consult")}
              </button>
            </Link>

          </div>
        )}

      </div>
    </header>
  );
}

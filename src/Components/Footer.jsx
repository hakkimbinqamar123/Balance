import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  const services = t("footer.service_list", { returnObjects: true });
  const address = t("footer.address", { returnObjects: true });

  return (
    <footer className="bg-gradient-to-br from-[#202C53] via-[#202C53]/95 to-[#0b1c2d] text-[#C7C6C6] border-t border-[#202C53]">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Company */}
        <div className="text-start">
          <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-[#F7E2BA] to-[#EAC868] bg-clip-text text-transparent">
            {t("footer.company_title")}
          </h3>
          <p className="text-sm leading-relaxed text-[#C7C6C6]/90">
            {t("footer.company_text")}
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-start">
          <h4 className="font-semibold mb-4 bg-gradient-to-r from-[#F7E2BA] to-[#EAC868] bg-clip-text text-transparent">
            {t("footer.quick_links")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[#EAC868] transition">{t("footer.links.home")}</Link></li>
            <li><Link to="/about" className="hover:text-[#EAC868] transition">{t("footer.links.about")}</Link></li>
            <li><Link to="/services" className="hover:text-[#EAC868] transition">{t("footer.links.services")}</Link></li>
            <li><Link to="/contact" className="hover:text-[#EAC868] transition">{t("footer.links.contact")}</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-start">
          <h4 className="font-semibold mb-4 bg-gradient-to-r from-[#F7E2BA] to-[#EAC868] bg-clip-text text-transparent">
            {t("footer.services")}
          </h4>
          <ul className="space-y-3 text-sm">
            {services.map((s, i) => (
              <li key={i} className="hover:text-[#EAC868] transition">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-start">
          <h4 className="font-semibold mb-4 bg-gradient-to-r from-[#F7E2BA] to-[#EAC868] bg-clip-text text-transparent">
            {t("footer.contact")}
          </h4>

          <div className="space-y-4 text-sm text-[#C7C6C6]/90">

            <div>
              <p className="text-[#D6AC44] mb-1">{t("footer.labels.email")}</p>
              <a
                href="mailto:info@balancellc.ae"
                className="hover:text-[#EAC868] transition"
              >
                info@balancellc.ae
              </a>
            </div>

            <div>
              <p className="text-[#D6AC44] mb-1">{t("footer.labels.phone")}</p>
              <a
                href="tel:+971544471999"
                className="hover:text-[#EAC868] transition"
              >
                +971 54 447 1999
              </a>
            </div>

            <div>
              <p className="text-[#D6AC44] mb-1">{t("footer.labels.office")}</p>
              <p>
                {address.map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            <div>
              <a
                href="https://maps.app.goo.gl/iJtABtNNUqx5KDLe6?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[#F7E2BA] hover:text-[#EAC868] underline-offset-4 hover:underline transition"
              >
                {t("footer.map")}
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#202C53]/70 bg-[#202C53]/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#C7C6C6]/70">

          <p>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            <a
              href="https://www.instagram.com/balanceaccountingtax?igsh=MThsZnpkeTQzaHZjMQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EAC868] transition transform hover:scale-110"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/share/1GjjsLwFMU/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EAC868] transition transform hover:scale-110"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/balance-accounting-tax-consultancy-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EAC868] transition transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>

          </div>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#EAC868] transition">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="hover:text-[#EAC868] transition">
              {t("footer.terms")}
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}

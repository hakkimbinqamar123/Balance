import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  const services = t("footer.service_list", { returnObjects: true });
  const address = t("footer.address", { returnObjects: true });

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">

      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-12">

        {/* Company */}
        <div className="text-start">
          <h3 className="text-white font-semibold text-lg mb-4">
            {t("footer.company_title")}
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            {t("footer.company_text")}
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-start">
          <h4 className="text-white font-semibold mb-4">
            {t("footer.quick_links")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white transition">{t("footer.links.home")}</Link></li>
            <li><Link to="/about" className="hover:text-white transition">{t("footer.links.about")}</Link></li>
            <li><Link to="/services" className="hover:text-white transition">{t("footer.links.services")}</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">{t("footer.links.contact")}</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-start">
          <h4 className="text-white font-semibold mb-4">
            {t("footer.services")}
          </h4>
          <ul className="space-y-3 text-sm">
            {services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-start">
          <h4 className="text-white font-semibold mb-4">
            {t("footer.contact")}
          </h4>

          <div className="space-y-3 text-sm text-slate-400">

            <div>
              <p className="text-slate-500">{t("footer.labels.email")}</p>
              <a href="mailto:info@balancellc.ae" className="hover:text-white transition">
                info@balancellc.ae
              </a>
            </div>

            <div>
              <p className="text-slate-500">{t("footer.labels.office")}</p>
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
                className="inline-block mt-2 text-white hover:underline"
              >
                {t("footer.map")}
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              {t("footer.terms")}
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}

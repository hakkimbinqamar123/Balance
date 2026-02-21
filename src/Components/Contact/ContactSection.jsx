import { useState } from "react";
import contactImg from "../../assets/Images/Website(25).webp";
import { useTranslation } from "react-i18next";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation();
  const address = t("contactSection.address", { returnObjects: true });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://balancellc.ae/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 pt-32 bg-gradient-to-br from-[#202C53] via-[#202C53]/95 to-[#0b1c2d]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-10 text-start">

          {/* Image */}
          <div className="relative group">
            <img
              src={contactImg}
              alt={t("contactSection.imgAlt")}
              className="rounded-2xl w-full h-72 object-cover border border-[#616160]/40"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#202C53]/40 to-[#D6AC44]/20 mix-blend-multiply" />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-hero text-3xl mb-6">
              <span className="bg-gradient-to-r from-[#F7E2BA] via-[#EAC868] to-[#D6AC44] bg-clip-text text-transparent">
                {t("contactSection.title")}
              </span>
            </h2>

            <div className="space-y-6 text-[#C7C6C6]">

              {/* Email */}
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

              {/* Phone */}
              <div>
                <p className="text-[#D6AC44] text-sm">
                  {t("contactSection.labels.phone")}
                </p>
                <a
                  href="tel:+971544471999"
                  dir="ltr"
                  className="hover:text-[#EAC868] transition inline-block text-left"
                >
                  +971 54 447 1999
                </a>
              </div>

              {/* Address */}
              <div>
                <p className="text-[#D6AC44] text-sm">
                  {t("contactSection.labels.office")}
                </p>
                <p className="text-lg leading-relaxed">
                  {address.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>

              {/* Google Map Button */}
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

              {/* Social Icons */}
              <div className="pt-6">
                <p className="text-[#D6AC44] text-sm mb-3">Follow Us</p>
                <div className="flex items-center gap-5">

                  <a
                    href="https://www.instagram.com/balanceaccountingtax?igsh=MThsZnpkeTQzaHZjMQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-[#F7E2BA]/40 hover:bg-[#F7E2BA] hover:text-[#202C53] transition transform hover:scale-110"
                  >
                    <Instagram size={20} />
                  </a>

                  <a
                    href="https://www.facebook.com/share/1GjjsLwFMU/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-[#F7E2BA]/40 hover:bg-[#F7E2BA] hover:text-[#202C53] transition transform hover:scale-110"
                  >
                    <Facebook size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/balance-accounting-tax-consultancy-limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-[#F7E2BA]/40 hover:bg-[#F7E2BA] hover:text-[#202C53] transition transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>

                </div>
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

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
              <label className="text-sm text-[#C7C6C6]">
                {t("contactSection.form.name")}
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-2 bg-[#0b1c2d] border border-[#616160]/50 rounded-lg px-4 py-3 focus:border-[#EAC868] outline-none text-white"
              />
            </div>

            <div>
              <label className="text-sm text-[#C7C6C6]">
                {t("contactSection.form.email")}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-2 bg-[#0b1c2d] border border-[#616160]/50 rounded-lg px-4 py-3 focus:border-[#EAC868] outline-none text-white"
              />
            </div>

            <div>
              <label className="text-sm text-[#C7C6C6]">
                {t("contactSection.form.subject")}
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full mt-2 bg-[#0b1c2d] border border-[#616160]/50 rounded-lg px-4 py-3 focus:border-[#EAC868] outline-none text-white"
              />
            </div>

            <div>
              <label className="text-sm text-[#C7C6C6]">
                {t("contactSection.form.message")}
              </label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full mt-2 bg-[#0b1c2d] border border-[#616160]/50 rounded-lg px-4 py-3 focus:border-[#EAC868] outline-none text-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F7E2BA] border border-[#F7E2BA] py-4 rounded-xl text-lg font-medium text-[#202C53] hover:bg-[#EAC868] transition disabled:opacity-60"
            >
              {loading ? "Sending..." : t("contactSection.form.submit")}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm">
                Message sent successfully
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Failed to send message
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}

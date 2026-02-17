import { useTranslation } from "react-i18next";

import img1 from "../../assets/Images/Website(23).webp";
import img2 from "../../assets/Images/website41.webp";
import img3 from "../../assets/Images/Website(39).webp";
import img4 from "../../assets/Images/Website(26).webp";
import img5 from "../../assets/Images/Website(29).webp";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const cards = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 }
  ];

  return (
    <section className="py-24 bg-[#202C53] overflow-hidden border-t border-[#616160]/40">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="font-hero text-4xl mb-16 text-[#F7E2BA] text-center">
          {t("why.title")}
        </h2>

        {/* ===== Stable Grid ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center">

          {cards.map((card, i) => (
            <div key={i} className="w-[220px] flip-card shadow-xl shadow-black/40">
              <div className="flip-inner">

                <div className="flip-front">
                  <img src={card.img} className="flip-image" />
                </div>

                <div className="flip-back p-5 bg-[#616160] flex flex-col justify-center border border-[#C7C6C6]/30">
                  <h3 className="text-lg font-semibold mb-2 text-[#F7E2BA]">
                    {t(`why.cards.${i}.title`)}
                  </h3>
                  <p className="text-sm text-[#C7C6C6]">
                    {t(`why.cards.${i}.text`)}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>


        {/* Mission Block */}
        <div className="mt-16 relative group">

          <div className="absolute -inset-1 bg-gradient-to-r from-[#D6AC44]/30 via-[#EAC868]/20 to-[#D6AC44]/30 blur-xl opacity-60 group-hover:opacity-90 transition rounded-3xl" />

          <div className="relative bg-[#616160]/40 backdrop-blur-xl border border-[#C7C6C6]/30 rounded-2xl p-10 text-[#C7C6C6] shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

            <div className="absolute inset-0 bg-gradient-to-br from-[#F7E2BA]/10 via-transparent to-transparent rounded-2xl pointer-events-none" />

            <p className="relative text-lg leading-relaxed text-start">
              {t("why.mission")}
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

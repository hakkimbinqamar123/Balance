import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import img1 from "../../assets/Images/Website(23).webp";
import img2 from "../../assets/images/Website(41).webp";
import img3 from "../../assets/images/Website(39).webp";
import img4 from "../../assets/images/Website(26).webp";
import img5 from "../../assets/images/Website(29).webp";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const cards = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 }
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % cards.length);
  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* Title */}
        <h2 className="font-hero text-4xl mb-16 text-white text-center">
          {t("why.title")}
        </h2>

        {/* ===== 3D Stage ===== */}
        <div className="relative h-[420px] flex items-center justify-center perspective-[1400px]">

          {cards.map((card, i) => {
            const offset = i - index;
            if (Math.abs(offset) > 2) return null;

            const isActive = offset === 0;

            return (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className="absolute transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: `
                    translateX(${offset * 260}px)
                    scale(${isActive ? 1.08 : 0.82})
                    rotateY(${offset * -35}deg)
                  `,
                  opacity: isActive ? 1 : 0.35,
                  zIndex: 100 - Math.abs(offset),
                }}
              >
                <div className="w-[340px] flip-card shadow-2xl shadow-black/40">
                  <div className="flip-inner">

                    {/* FRONT */}
                    <div className="flip-front">
                      <img src={card.img} className="flip-image" />
                    </div>

                    {/* BACK */}
                    <div className="flip-back p-8 bg-[#020617] flex flex-col justify-center">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {t(`why.cards.${i}.title`)}
                      </h3>
                      <p className="text-slate-400">
                        {t(`why.cards.${i}.text`)}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 md:left-10 bg-slate-800/90 hover:bg-slate-700 border border-slate-600 w-12 h-12 rounded-full text-white z-50"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-0 md:right-10 bg-slate-800/90 hover:bg-slate-700 border border-slate-600 w-12 h-12 rounded-full text-white z-50"
          >
            →
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "bg-white w-8" : "bg-slate-600 w-2.5"
              }`}
            />
          ))}
        </div>

        {/* Mission Block */}
        <div className="mt-16 relative group">

          <div className="absolute -inset-1 bg-gradient-to-r from-slate-700/20 via-white/10 to-slate-700/20 blur-xl opacity-60 group-hover:opacity-90 transition rounded-3xl" />

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-10 text-slate-200 shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none" />

            <p className="relative text-lg leading-relaxed text-start">
              {t("why.mission")}
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

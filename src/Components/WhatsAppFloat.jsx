import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-[9998] group">

      {/* Outer Glow (theme matched) */}
      <div className="
        absolute inset-0
        rounded-full
        bg-emerald-500/20
        blur-2xl
        scale-125
        opacity-70
        group-hover:opacity-100
        transition
      " />

      {/* Button */}
      <a
        href="https://wa.me/971544471999"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          relative
          w-14 h-14
          rounded-full

          /* Theme matched gradient */
          bg-gradient-to-br
          from-slate-800
          via-slate-900
          to-black

          /* Glass border like your cards */
          border border-slate-700/80
          backdrop-blur

          flex items-center justify-center

          /* Shadow style matches your UI */
          shadow-xl shadow-black/40
          hover:shadow-emerald-500/30

          hover:scale-110 active:scale-95
          transition-all duration-300
        "
      >
        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-2xl text-emerald-400 group-hover:text-emerald-300 transition" />

        {/* Soft Pulse Ring */}
        <span className="
          absolute inset-0
          rounded-full
          border border-emerald-400/30
          animate-ping
          opacity-25
        " />
      </a>

      {/* Tooltip — matches slate cards */}
      <div className="
        absolute right-20 top-1/2 -translate-y-1/2

        bg-slate-900/95
        backdrop-blur
        border border-slate-700

        text-white text-sm
        px-4 py-2
        rounded-lg

        opacity-0 group-hover:opacity-100
        translate-x-2 group-hover:translate-x-0

        transition-all duration-300
        whitespace-nowrap
        pointer-events-none

        shadow-lg shadow-black/40
      ">
        Chat on WhatsApp
      </div>

    </div>
  );
}

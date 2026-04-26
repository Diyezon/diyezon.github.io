"use client";

import { useLanguage } from "@/context/LanguageContext";

const t = {
  en: {
    tag: "// boutique software studio",
    h1a: "Software is",
    h1b: "more than code.",
    desc: "We design, build, and deliver custom software solutions for businesses in Turkey and the UK.",
    cta1: "Start a Project",
    cta2: "View Work",
  },
  tr: {
    tag: "// butik yazılım stüdyosu",
    h1a: "Yazılım, sadece",
    h1b: "kod değildir.",
    desc: "Türkiye ve İngiltere'deki işletmeler için özel yazılım çözümleri tasarlıyor, geliştiriyor ve teslim ediyoruz.",
    cta1: "Proje Başlat",
    cta2: "Çalışmalarımız",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const c = t[lang];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#0d0d1a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Pink ambient glow — soft, top center */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#e8197a]/[0.06] blur-[140px] pointer-events-none" />

      {/* Teal glow — bottom right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#5dcaa5]/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-[#5dcaa5] text-sm mb-7 tracking-widest">{c.tag}</p>

          <h1 className="text-6xl md:text-[80px] font-bold text-[#0d0d1a] leading-[1.05] mb-7">
            {c.h1a}
            <br />
            <span className="text-[#e8197a]">{c.h1b}</span>
          </h1>

          <p className="text-lg text-[#3d3d5c] mb-10 max-w-lg leading-relaxed">{c.desc}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#e8197a] hover:bg-[#d0156d] text-white font-medium px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl shadow-[#e8197a]/20"
            >
              {c.cta1}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 border border-black/10 hover:border-black/20 text-[#6a6a8a] hover:text-[#0d0d1a] font-medium px-7 py-3.5 rounded-xl transition-all bg-white"
            >
              {c.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

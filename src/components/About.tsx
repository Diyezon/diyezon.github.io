"use client";

import { useLanguage } from "@/context/LanguageContext";

const t = {
  en: {
    tag: "// about",
    heading: "Small team.\nSerious software.",
    p1: "We're a boutique software studio based in Istanbul. No account managers, no handoffs — when you work with Diyezon, you work directly with the people writing your code.",
    p2: "We combine over 20 years of hands-on engineering experience with a deliberate, AI-augmented workflow. This means faster delivery, sharper architecture decisions, and a level of output that punches well above our size.",
    p3: "We founded the company in 2018 with a simple belief: a focused team with deep expertise — amplified by the right tools — delivers better software than a large agency with divided attention.",
    facts: [
      { label: "Founded", value: "2018" },
      { label: "Location", value: "Istanbul, TR" },
      { label: "Approach", value: "AI-augmented" },
      { label: "Stack", value: ".NET · RN" },
    ],
  },
  tr: {
    tag: "// hakkımızda",
    heading: "Küçük ekip.\nCiddi yazılım.",
    p1: "İstanbul merkezli bir butik yazılım stüdyosuyuz. Proje yöneticisi yok, aracı yok — Diyezon ile çalıştığınızda kodunuzu yazan ekiple doğrudan çalışırsınız.",
    p2: "20 yılı aşkın mühendislik deneyimimizi, yapay zeka destekli bir iş akışıyla birleştiriyoruz. Bu sayede daha hızlı teslimat, daha isabetli mimari kararlar ve ekip büyüklüğümüzün çok ötesinde bir çıktı kapasitesi elde ediyoruz.",
    p3: "Şirketi 2018'de basit bir inançla kurduk: doğru araçlarla güçlendirilmiş, derin uzmanlığa sahip odaklı bir ekip, dağınık dikkatli büyük bir ajansdan daha iyi yazılım üretir.",
    facts: [
      { label: "Kuruluş", value: "2018" },
      { label: "Konum", value: "İstanbul, TR" },
      { label: "Yaklaşım", value: "YZ destekli" },
      { label: "Teknoloji", value: ".NET · RN" },
    ],
  },
};

export default function About() {
  const { lang } = useLanguage();
  const c = t[lang];

  return (
    <section id="about" className="py-28 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <div>
            <p className="font-mono text-[#5dcaa5] text-sm mb-5 tracking-widest">{c.tag}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d1a] leading-tight mb-8 whitespace-pre-line">
              {c.heading}
            </h2>
            <p className="text-base text-[#3d3d5c] leading-relaxed mb-5">{c.p1}</p>
            <p className="text-base text-[#3d3d5c] leading-relaxed mb-5">{c.p2}</p>
            <p className="text-base text-[#3d3d5c] leading-relaxed">{c.p3}</p>
          </div>

          {/* Right: fact cards */}
          <div className="grid grid-cols-2 gap-4 md:pt-16">
            {c.facts.map((f) => (
              <div
                key={f.label}
                className="p-6 rounded-2xl border border-black/[0.06] bg-white"
              >
                <p className="font-mono text-xs text-[#9898b8] uppercase tracking-widest mb-2">
                  {f.label}
                </p>
                <p className="text-xl font-bold text-[#0d0d1a]">{f.value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

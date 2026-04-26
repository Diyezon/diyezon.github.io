"use client";

import { useLanguage } from "@/context/LanguageContext";

const t = {
  en: {
    tag: "// services",
    heading: "What we do",
    items: [
      {
        num: "01",
        title: "Custom software development",
        desc: "End-to-end web and mobile applications built around your specific processes — not the other way around.",
        stack: ["ASP.NET", "Blazor", "React Native"],
      },
      {
        num: "02",
        title: "Enterprise system integration",
        desc: "Connecting your tools, automating workflows, and replacing spreadsheet chaos with real software.",
        stack: ["API", "EF Core", "PostgreSQL"],
      },
      {
        num: "03",
        title: "Mobile application development",
        desc: "iOS and Android apps with a single codebase. From prototype to App Store — we handle the full journey.",
        stack: ["Expo", "React Native", "PayTR"],
      },
    ],
  },
  tr: {
    tag: "// hizmetler",
    heading: "Neler yapıyoruz",
    items: [
      {
        num: "01",
        title: "Özel yazılım geliştirme",
        desc: "Süreçlerinize özel, uçtan uca web ve mobil uygulamalar — sizin iş akışınız merkezdedir.",
        stack: ["ASP.NET", "Blazor", "React Native"],
      },
      {
        num: "02",
        title: "Kurumsal sistem entegrasyonu",
        desc: "Araçlarınızı birbirine bağlıyor, iş akışlarını otomatize ediyor, spreadsheet karmaşasını gerçek yazılımla çözüyoruz.",
        stack: ["API", "EF Core", "PostgreSQL"],
      },
      {
        num: "03",
        title: "Mobil uygulama geliştirme",
        desc: "Tek kod tabanıyla iOS ve Android uygulamaları. Prototipten App Store'a tüm süreci yönetiyoruz.",
        stack: ["Expo", "React Native", "PayTR"],
      },
    ],
  },
};

export default function Services() {
  const { lang } = useLanguage();
  const c = t[lang];

  return (
    <section id="services" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-[#5dcaa5] text-sm mb-3 tracking-widest">{c.tag}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d1a]">{c.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {c.items.map((item) => (
            <div
              key={item.num}
              className="group p-8 rounded-2xl border border-black/[0.06] bg-white hover:border-[#e8197a]/20 hover:shadow-lg hover:shadow-[#e8197a]/5 transition-all duration-300"
            >
              <span className="font-mono text-sm text-[#e8197a]/30 group-hover:text-[#e8197a]/70 transition-colors mb-5 block">
                {item.num}
              </span>
              <h3 className="text-xl font-semibold text-[#0d0d1a] mb-3">{item.title}</h3>
              <p className="text-sm text-[#3d3d5c] leading-relaxed mb-6">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-[#5dcaa5] bg-[#5dcaa5]/[0.08] border border-[#5dcaa5]/15 rounded-md px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

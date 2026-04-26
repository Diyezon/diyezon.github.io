"use client";

import { useLanguage } from "@/context/LanguageContext";

const t = {
  en: {
    tag: "// portfolio",
    heading: "Selected work",
    comingSoon: "coming soon",
    projects: [
      {
        title: "NGO Management Platform",
        region: "Turkey · NGO sector",
        desc: "Internal management platform for a humanitarian aid organization — stock tracking, donation projects, and accounting modules.",
        stack: ["Blazor", ".NET", "PostgreSQL", "Hybrid"],
        coming: false,
      },
      {
        title: "Language Services Workflow",
        region: "United Kingdom · Language services",
        desc: "End-to-end workflow system for a translation agency covering translators, clients, jobs, and invoicing.",
        stack: ["Blazor WASM", ".NET", "EF Core"],
        coming: false,
      },
      {
        title: "Otoparkode",
        region: "Turkey · Parking & Fintech",
        desc: "Mobile parking payment app with QR gate entry and support for national and international payment systems.",
        stack: ["React Native", "Expo", "ASP.NET", "Payment APIs"],
        coming: true,
      },
    ],
  },
  tr: {
    tag: "// portföy",
    heading: "Seçili çalışmalar",
    comingSoon: "yakında",
    projects: [
      {
        title: "STK Yönetim Platformu",
        region: "Türkiye · STK sektörü",
        desc: "İnsani yardım kuruluşu için iç yönetim sistemi — stok takibi, bağış projeleri ve muhasebe modülleri.",
        stack: ["Blazor", ".NET", "PostgreSQL", "Hybrid"],
        coming: false,
      },
      {
        title: "Dil Hizmetleri Yönetim Sistemi",
        region: "Birleşik Krallık · Dil hizmetleri",
        desc: "Çeviri ajansı için uçtan uca iş akışı sistemi — çevirmenler, müşteriler, işler ve faturalandırma.",
        stack: ["Blazor WASM", ".NET", "EF Core"],
        coming: false,
      },
      {
        title: "Otoparkode",
        region: "Türkiye · Otopark & Fintech",
        desc: "QR bariyer girişi ve ulusal/uluslararası ödeme sistemleri desteğiyle Türkiye odaklı mobil otopark ödeme uygulaması.",
        stack: ["React Native", "Expo", "ASP.NET", "Payment APIs"],
        coming: true,
      },
    ],
  },
};

export default function Portfolio() {
  const { lang } = useLanguage();
  const c = t[lang];

  return (
    <section id="portfolio" className="py-28 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-[#5dcaa5] text-sm mb-3 tracking-widest">{c.tag}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d1a]">{c.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {c.projects.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col p-8 rounded-2xl border border-black/[0.06] bg-white hover:border-black/[0.12] hover:shadow-md transition-all duration-300"
            >
              {p.coming && (
                <span className="self-start font-mono text-xs text-[#5dcaa5] bg-[#5dcaa5]/[0.08] border border-[#5dcaa5]/20 rounded-full px-3 py-1 mb-5">
                  {c.comingSoon}
                </span>
              )}

              <p className="font-mono text-xs text-[#606088] mb-3 tracking-wide">{p.region}</p>
              <h3 className="text-lg font-semibold text-[#0d0d1a] mb-4 leading-snug">{p.title}</h3>
              <p className="text-sm text-[#3d3d5c] leading-relaxed mb-6 flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-[#5a5a80] bg-black/[0.03] border border-black/[0.06] rounded-md px-2.5 py-1"
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

"use client";

import { useLanguage } from "@/context/LanguageContext";

const t = {
  en: [
    { value: "20+", label: "years of combined experience" },
    { value: "TR · UK · Global", label: "markets served" },
    { value: ".NET · RN", label: "core stack" },
  ],
  tr: [
    { value: "20+", label: "yıl birleşik ekip deneyimi" },
    { value: "TR · UK · Global", label: "faaliyet pazarları" },
    { value: ".NET · RN", label: "temel teknoloji" },
  ],
};

export default function StatsBar() {
  const { lang } = useLanguage();
  const stats = t[lang];

  return (
    <section className="border-y border-black/[0.06] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.06]">
        {stats.map((s) => (
          <div
            key={s.value}
            className="flex flex-col items-center text-center md:px-12 py-6 md:py-0"
          >
            <span className="font-mono text-3xl font-bold text-[#e8197a] mb-1.5">{s.value}</span>
            <span className="text-xs text-[#5a5a80] uppercase tracking-[0.15em]">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

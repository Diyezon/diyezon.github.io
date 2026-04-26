"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const t = {
  en: { services: "Services", portfolio: "Portfolio", contact: "Contact", cta: "Get in touch" },
  tr: { services: "Hizmetler", portfolio: "Portföy", contact: "İletişim", cta: "İletişime Geç" },
};

export default function Nav() {
  const { lang, toggle } = useLanguage();
  const c = t[lang];
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.06] bg-[#f7f7fc]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#e8197a] flex items-center justify-center shadow-md shadow-[#e8197a]/25">
            <span className="font-mono font-bold text-white text-base leading-none">#</span>
          </div>
          <span className="font-semibold text-[#0d0d1a] text-sm tracking-wide">Diyezon Technology</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {(
            [
              ["#services", c.services],
              ["#portfolio", c.portfolio],
              ["#contact", c.contact],
            ] as const
          ).map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[#3d3d5c] hover:text-[#0d0d1a] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            className="font-mono text-xs text-[#3d3d5c] hover:text-[#0d0d1a] border border-black/10 hover:border-black/20 rounded px-2.5 py-1 transition-colors"
          >
            {lang === "en" ? "TR" : "EN"}
          </button>
          <a
            href="#contact"
            className="bg-[#e8197a] hover:bg-[#d0156d] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-md shadow-[#e8197a]/20"
          >
            {c.cta}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-[#3d3d5c] hover:text-[#0d0d1a]"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/[0.06] bg-[#f7f7fc] px-6 py-5 flex flex-col gap-5">
          {(
            [
              ["#services", c.services],
              ["#portfolio", c.portfolio],
              ["#contact", c.contact],
            ] as const
          ).map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[#3d3d5c]"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-black/[0.06]">
            <button
              onClick={toggle}
              className="font-mono text-xs text-[#3d3d5c] border border-black/10 rounded px-2.5 py-1"
            >
              {lang === "en" ? "TR" : "EN"}
            </button>
            <a
              href="#contact"
              className="bg-[#e8197a] text-white text-sm font-medium px-4 py-2 rounded-lg"
              onClick={() => setOpen(false)}
            >
              {c.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

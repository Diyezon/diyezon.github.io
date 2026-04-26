"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const t = {
  en: {
    tag: "// contact",
    heading: "Let's work together.",
    desc: "Have a project in mind? Send us a message or reach out on WhatsApp.",
    name: "Your name",
    email: "Email address",
    message: "Tell us about your project",
    send: "Send message",
    whatsapp: "Chat on WhatsApp",
    successMsg: "// message sent — we'll be in touch shortly.",
    address: "Aeropark, Osmanlı Bulvarı No:11 Kat 5\nKurtkoy, 34912 İstanbul, Turkey",
  },
  tr: {
    tag: "// iletişim",
    heading: "Birlikte çalışalım.",
    desc: "Aklınızda bir proje mi var? Mesaj gönderin ya da WhatsApp'tan ulaşın.",
    name: "Adınız",
    email: "E-posta adresiniz",
    message: "Projenizden bahsedin",
    send: "Mesaj gönder",
    whatsapp: "WhatsApp'tan yaz",
    successMsg: "// mesaj gönderildi — en kısa sürede döneceğiz.",
    address: "Aeropark, Osmanlı Bulvarı No:11 Kat 5\nKurtkoy, 34912 İstanbul, Türkiye",
  },
};

const inputClass =
  "w-full bg-white border border-black/[0.08] rounded-xl px-4 py-3.5 text-[#0d0d1a] placeholder-black/25 text-sm focus:outline-none focus:border-[#e8197a]/40 transition-colors shadow-sm";

export default function Contact() {
  const { lang } = useLanguage();
  const c = t[lang];
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-28 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-[#5dcaa5] text-sm mb-3 tracking-widest">{c.tag}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d1a] mb-4">{c.heading}</h2>
          <p className="text-[#3d3d5c] max-w-md">{c.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {sent ? (
              <div className="py-6">
                <p className="font-mono text-[#5dcaa5] text-sm">{c.successMsg}</p>
              </div>
            ) : (
              <>
                <input type="text" placeholder={c.name} required className={inputClass} />
                <input type="email" placeholder={c.email} required className={inputClass} />
                <textarea
                  placeholder={c.message}
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="bg-[#e8197a] hover:bg-[#d0156d] text-white font-medium py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl shadow-[#e8197a]/20"
                >
                  {c.send}
                </button>
              </>
            )}
          </form>

          {/* Info */}
          <div className="flex flex-col gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/447464375170"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-[#5dcaa5]/20 bg-[#5dcaa5]/[0.04] hover:bg-[#5dcaa5]/[0.08] hover:border-[#5dcaa5]/30 transition-all group"
            >
              <div className="w-11 h-11 rounded-full bg-[#5dcaa5]/15 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#5dcaa5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="text-[#5dcaa5] font-medium text-sm">{c.whatsapp}</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@diyezon.com"
              className="flex items-center gap-4 p-5 rounded-2xl border border-black/[0.06] bg-white hover:border-black/[0.12] transition-all group shadow-sm"
            >
              <div className="w-11 h-11 rounded-full bg-black/[0.04] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#3d3d5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-[#3d3d5c] group-hover:text-[#0d0d1a] text-sm transition-colors">
                info@diyezon.com
              </span>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-black/[0.06] bg-white shadow-sm">
              <div className="w-11 h-11 rounded-full bg-black/[0.04] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#3d3d5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-sm text-[#3d3d5c] leading-relaxed whitespace-pre-line">{c.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "./Icons";

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Oferta Deportiva", href: "/oferta-deportiva" },
  { label: "Formación", href: "/formacion" },
  { label: "Inscripciones", href: "/inscripciones" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#06070A] text-white overflow-hidden">
      {/* Subtle diagonal dark-gold ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(229,184,66,0.08),transparent_55%),radial-gradient(ellipse_at_15%_60%,rgba(229,184,66,0.06),transparent_45%),radial-gradient(ellipse_at_85%_60%,rgba(229,184,66,0.06),transparent_45%)]" />

      {/* Top Glowing Gold Line */}
      <div className="gold-divider relative z-10" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10 pt-7 pb-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-7 lg:grid-cols-[200px_150px_205px_165px_1fr] items-start lg:items-center">
          {/* Col 1: Brand Logo */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start justify-center">
            <Link
              href="/"
              className="inline-block transition-transform duration-200 hover:scale-[1.03]"
            >
              <img
                src="/imagenes/logo.webp"
                alt="TOTAL KOMBAT Martial Arts Club"
                width={384}
                height={150}
                loading="lazy"
                decoding="async"
                className="h-[68px] w-auto object-contain drop-shadow-[0_2px_14px_rgba(229,184,66,0.35)]"
              />
            </Link>
          </div>

          {/* Col 2: Enlaces */}
          <div className="relative lg:pr-5">
            <span className="pointer-events-none hidden lg:block absolute right-0 top-1 bottom-1 w-[1px] bg-gradient-to-b from-transparent via-[#E5B842]/50 to-transparent" />
            <h3 className="mb-2.5 text-[14px] font-bold tracking-wide text-white">
              Enlaces
            </h3>
            <ul className="space-y-1 text-[13px] text-gray-200">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-[#FCE38A]"
                  >
                    <span className="text-[9px] text-[#E51C23] transition-transform group-hover:translate-x-0.5">
                      ▶
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contáctanos */}
          <div className="relative lg:pr-5">
            <span className="pointer-events-none hidden lg:block absolute right-0 top-1 bottom-1 w-[1px] bg-gradient-to-b from-transparent via-[#E5B842]/50 to-transparent" />
            <h3 className="mb-2.5 text-[14px] font-bold tracking-wide text-white">
              Contáctanos
            </h3>
            <ul className="space-y-2 text-[13px] text-gray-200">
              <li>
                <a
                  href="https://wa.me/593987654321?text=Hola%20TOTAL%20KOMBAT,%20deseo%20informaci%C3%B3n%20sobre%20sus%20entrenamientos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#FCE38A]"
                >
                  <WhatsAppIcon className="h-4 w-4 text-white shrink-0" />
                  <span>+593 98 765 4321</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@totalkombat.ec"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#FCE38A]"
                >
                  <Mail className="h-4 w-4 text-white shrink-0" />
                  <span>info@totalkombat.ec</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-white shrink-0" />
                <span>Quito, Ecuador</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Síguenos */}
          <div className="col-span-2 lg:col-span-1 relative lg:pr-5 self-start lg:pt-1 flex flex-col items-center lg:items-start">
            <span className="pointer-events-none hidden lg:block absolute right-0 top-1 bottom-1 w-[1px] bg-gradient-to-b from-transparent via-[#E5B842]/50 to-transparent" />
            <h3 className="mb-3 text-[14px] font-bold tracking-wide text-white">
              Síguenos
            </h3>
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook TOTAL KOMBAT"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#07080B] transition-transform hover:scale-110 hover:bg-[#FCE38A]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.5v3.2h2.7V22h3.3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram TOTAL KOMBAT"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#07080B] transition-transform hover:scale-110 hover:bg-[#FCE38A]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.9 3.9 0 0 1-1.4-.9c-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2-.1-1.3-.1-1.6-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4 1.3-.1 1.6-.1 4.9-.1M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok TOTAL KOMBAT"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#07080B] transition-transform hover:scale-110 hover:bg-[#FCE38A]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube TOTAL KOMBAT"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#07080B] transition-transform hover:scale-110 hover:bg-[#FCE38A]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.14 5.6 12 5.6 12 5.6s-6.14 0-7.86.46a2.75 2.75 0 0 0-1.94 1.94C1.74 9.72 1.74 12 1.74 12s0 2.28.46 3.999a2.75 2.75 0 0 0 1.94 1.94c1.72.46 7.86.46 7.86.46s6.14 0 7.86-.46a2.75 2.75 0 0 0 1.94-1.94c.46-1.72.46-4 .46-4s0-2.28-.46-3.999zM9.95 15.02V8.98L15.2 12l-5.25 3.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 5: Affiliate Logos */}
          <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 w-full">
              {[
                {
                  src: "/imagenes/taekaso.webp",
                  alt: "Asociación de Taekwondo de Pichincha",
                  width: 126,
                  height: 80,
                },
                {
                  src: "/imagenes/taekfede.webp",
                  alt: "Federación Ecuatoriana de Taekwondo",
                  width: 226,
                  height: 80,
                },
                {
                  src: "/imagenes/samaso.webp",
                  alt: "Asociación de Sambo de Pichincha",
                  width: 87,
                  height: 80,
                },
              ].map((logo) => (
                <div
                  key={logo.src}
                  className="group -skew-x-[12deg] rounded-xl border border-[#E5B842]/75 bg-gradient-to-b from-white via-[#FAFBFD] to-[#EEF1F5] px-3.5 py-2 shadow-[0_6px_16px_rgba(0,0,0,0.45),0_0_12px_rgba(245,199,78,0.18)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#FFE58F] hover:shadow-[0_10px_22px_rgba(0,0,0,0.55),0_0_16px_rgba(245,199,78,0.35)]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    loading="lazy"
                    decoding="async"
                    className="skew-x-[12deg] h-11 sm:h-12 w-auto max-w-[88px] object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Center-glowing Gold Separator Line */}
      <div className="relative z-10 h-[1.5px] w-full bg-gradient-to-r from-[#9A6B13]/25 via-[#FFE999] to-[#9A6B13]/25 shadow-[0_0_16px_rgba(245,199,78,0.75)]" />

      {/* Bottom Legal Bar */}
      <div className="relative z-10 bg-[#050507]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:px-6 lg:px-10 text-[12px] text-gray-300">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-center">
              <Link
                href="/nosotros#transparencia"
                className="hover:text-[#FCE38A] transition-colors"
              >
                Política de Privacidad
              </Link>
              <span className="text-[#E5B842]/50">|</span>
              <Link
                href="/nosotros#transparencia"
                className="hover:text-[#FCE38A] transition-colors"
              >
                Términos y Condiciones
              </Link>
              <span className="text-[#E5B842]/50">|</span>
              <Link
                href="/nosotros#transparencia"
                className="hover:text-[#FCE38A] transition-colors"
              >
                Aviso Legal
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1 text-center sm:text-right text-[12px] text-gray-300">
            <p>
              © 2026 <strong className="text-white">TOTAL KOMBAT</strong>. Todos
              los derechos reservados.
            </p>
            <span className="hidden sm:inline text-[#E5B842]/50">|</span>
            <p>
              Hecho por{" "}
              <a
                href="https://jhesrkadeveloper.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#FCE38A] transition-colors hover:text-white hover:underline underline-offset-4"
              >
                Jhesrka Developer
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

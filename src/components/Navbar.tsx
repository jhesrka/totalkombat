"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { User, Menu, X } from "lucide-react";
import { useInscripcionModal } from "@/components/InscripcionModalProvider";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Oferta Deportiva", href: "/oferta-deportiva" },
  { label: "Formación", href: "/formacion" },
  { label: "Inscripciones", href: "/inscripciones" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openInscripcionModal } = useInscripcionModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-[#050508]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.65)]"
          : "bg-[#070709]/92 backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="flex h-[68px] md:h-[74px] items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center py-1 transition-transform duration-200 hover:scale-[1.03]"
            aria-label="TOTAL KOMBAT Martial Arts Club - Inicio"
          >
            <img
              src="/imagenes/logo.webp"
              alt="TOTAL KOMBAT Martial Arts Club"
              width={384}
              height={150}
              decoding="async"
              className="h-[54px] sm:h-[62px] md:h-[66px] w-auto object-contain drop-shadow-[0_2px_14px_rgba(229,184,66,0.42)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-9"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-2 text-[14.5px] font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-gray-200/90 hover:text-[#FCE38A]"
                  }`}
                >
                  {/* Soft upward red-gold glow from the active line */}
                  {isActive && (
                    <span className="pointer-events-none absolute -inset-x-3 bottom-0 h-7 bg-[radial-gradient(ellipse_at_bottom,rgba(229,28,35,0.4),transparent_72%)]" />
                  )}

                  <span className="relative z-10">{item.label}</span>

                  {/* Hover underline expanding from center for inactive links */}
                  {!isActive && (
                    <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#F5C74E] to-transparent transition-all duration-300 ease-out group-hover:w-full" />
                  )}

                  {/* Premium laser-glow active red line anchored right below text */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-line"
                      transition={{ type: "spring", stiffness: 360, damping: 28 }}
                      className="pointer-events-none absolute bottom-0 left-[-6px] right-[-6px] h-[3px]"
                    >
                      {/* Outer red bloom */}
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#ff1f28] to-transparent blur-[3px] opacity-90" />
                      {/* Crisp tapered red-gold core */}
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#ff3b42] to-transparent" />
                      {/* Bright center highlight */}
                      <span className="absolute inset-x-[28%] top-[0.5px] h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-[#FFE58F] to-transparent opacity-90" />
                    </motion.span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Pill CTA with Shimmer */}
          <div className="hidden lg:flex items-center">
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
            >
              <button
                type="button"
                onClick={() => openInscripcionModal()}
                className="group relative overflow-hidden btn-kombat-red inline-flex items-center gap-2 rounded-full border border-[#F5C74E]/80 px-6 py-2 text-[14.5px] font-bold text-white shadow-[0_0_18px_rgba(229,28,35,0.65),0_0_8px_rgba(245,199,78,0.3)] transition-[border-color,box-shadow] duration-200 hover:border-[#FFE58F] hover:shadow-[0_0_24px_rgba(229,28,35,0.85),0_0_12px_rgba(245,199,78,0.45)] cursor-pointer"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-[220%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[20deg]" />
                <User className="relative z-10 h-4 w-4 fill-white text-white transition-transform duration-200 group-hover:scale-110" />
                <span className="relative z-10">Inscripciones</span>
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center rounded-lg border border-[#E5B842]/50 bg-[#121318] p-2 text-[#FCE38A] transition-colors hover:bg-[#1b1c24] cursor-pointer"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Stepped Beveled Gold Bottom Line */}
      <div className="relative h-[10px] w-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 16"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full drop-shadow-[0_0_6px_rgba(245,199,78,0.45)]"
        >
          <defs>
            <linearGradient id="navGoldLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9A6B13" stopOpacity="0.55" />
              <stop offset="26%" stopColor="#FCE38A" />
              <stop offset="34%" stopColor="#E5B842" />
              <stop offset="70%" stopColor="#D49B27" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#9A6B13" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            d="M0 14 H440 L470 2 H1440"
            stroke="url(#navGoldLine)"
            strokeWidth="2.4"
          />
        </svg>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-b border-[#E5B842]/40 bg-[#0B0C10]/98 shadow-2xl"
          >
            <nav className="flex flex-col space-y-2 px-6 pt-3 pb-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-[15px] font-semibold transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-[#d9141c]/30 to-transparent text-white border-l-4 border-[#ff2a32]"
                        : "text-gray-300 hover:bg-white/5 hover:text-[#FCE38A]"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openInscripcionModal();
                  }}
                  className="btn-kombat-red flex w-full items-center justify-center gap-2 rounded-full border border-[#F5C74E]/75 py-2.5 text-[15px] font-bold text-white shadow-red-glow cursor-pointer"
                >
                  <User className="h-4 w-4 fill-white" />
                  <span>Inscripciones</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

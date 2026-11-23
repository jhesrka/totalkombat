"use client";

import React from "react";

export function CornerRibbons() {
  return (
    <>
      {/* Cintas Curvas Doradas Discretas - Esquina Inferior Izquierda */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-28 sm:w-36 lg:w-48 h-20 sm:h-26 lg:h-32 select-none z-0 overflow-hidden opacity-85">
        <svg
          viewBox="0 0 240 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,155,39,0.25)]"
        >
          <defs>
            <linearGradient id="goldSwooshMainL" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7A4C04" />
              <stop offset="30%" stopColor="#C9901C" />
              <stop offset="60%" stopColor="#FFE79A" />
              <stop offset="85%" stopColor="#D89E28" />
              <stop offset="100%" stopColor="#8F590A" />
            </linearGradient>

            <linearGradient id="goldSwooshSubL" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6E4302" />
              <stop offset="45%" stopColor="#D49B27" />
              <stop offset="75%" stopColor="#FFF2B8" />
              <stop offset="100%" stopColor="#B37B14" />
            </linearGradient>
          </defs>

          {/* Listón curvo principal recortado a la esquina */}
          <path
            d="M-20 160 C30 155 90 135 150 70 C168 50 182 25 190 0 C170 10 145 35 120 62 C70 115 20 140 -20 145 Z"
            fill="url(#goldSwooshMainL)"
            opacity="0.95"
          />

          {/* Listón curvo secundario inferior */}
          <path
            d="M-15 160 C20 157 65 142 105 105 C125 87 138 65 145 45 C132 58 115 76 95 95 C55 130 15 150 -15 154 Z"
            fill="url(#goldSwooshSubL)"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Cintas Curvas Doradas Discretas - Esquina Inferior Derecha */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-28 sm:w-36 lg:w-48 h-20 sm:h-26 lg:h-32 select-none z-0 overflow-hidden opacity-85">
        <svg
          viewBox="0 0 240 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,155,39,0.25)]"
        >
          <defs>
            <linearGradient id="goldSwooshMainR" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7A4C04" />
              <stop offset="30%" stopColor="#C9901C" />
              <stop offset="60%" stopColor="#FFE79A" />
              <stop offset="85%" stopColor="#D89E28" />
              <stop offset="100%" stopColor="#8F590A" />
            </linearGradient>

            <linearGradient id="goldSwooshSubR" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#6E4302" />
              <stop offset="45%" stopColor="#D49B27" />
              <stop offset="75%" stopColor="#FFF2B8" />
              <stop offset="100%" stopColor="#B37B14" />
            </linearGradient>
          </defs>

          {/* Listón curvo principal derecho */}
          <path
            d="M260 160 C210 155 150 135 90 70 C72 50 58 25 50 0 C70 10 95 35 120 62 C170 115 220 140 260 145 Z"
            fill="url(#goldSwooshMainR)"
            opacity="0.95"
          />

          {/* Listón curvo secundario inferior derecho */}
          <path
            d="M255 160 C220 157 175 142 135 105 C115 87 102 65 95 45 C108 58 125 76 145 95 C185 130 225 150 255 154 Z"
            fill="url(#goldSwooshSubR)"
            opacity="0.75"
          />
        </svg>
      </div>
    </>
  );
}

export function TaekwondoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="28" cy="10" r="3.5" fill="#EBB941" />
      <path
        d="M26 14L20 24L12 20M20 24L28 28L36 24M28 28L18 40M28 28L40 18"
        stroke="#EBB941"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SamboIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="16" cy="11" r="3" fill="#EBB941" />
      <circle cx="28" cy="12" r="3" fill="#EBB941" />
      <path
        d="M16 15L13 26L21 28M28 16L32 24L25 27M13 26L18 38M32 24L26 38"
        stroke="#EBB941"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.007c0 1.766.461 3.49 1.337 5.01L2 22l5.122-1.343a9.967 9.967 0 0 0 4.909 1.292h.004c5.522 0 10.006-4.484 10.006-10.006C22.041 6.485 17.553 2 12.031 2Zm5.822 14.129c-.246.693-1.432 1.326-1.988 1.41-.508.076-1.151.108-1.858-.116-.429-.136-.979-.318-1.685-.623-2.965-1.28-4.901-4.266-5.049-4.464-.148-.197-1.206-1.604-1.206-3.06 0-1.455.763-2.171 1.034-2.467.271-.296.591-.37.788-.37.197 0 .394.002.566.01.182.009.426-.069.666.508.246.592.837 2.047.911 2.195.074.148.123.321.025.518-.099.198-.148.321-.296.494-.148.172-.311.385-.444.518-.148.148-.302.309-.13.605.173.296.766 1.264 1.645 2.047 1.13.999 2.082 1.309 2.378 1.457.296.148.468.123.641-.074.172-.198.739-.863.936-1.159.197-.296.394-.247.665-.148.271.098 1.725.814 2.02.962.296.148.493.222.567.345.074.124.074.716-.172 1.409Z" />
    </svg>
  );
}

export function BeltIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 32" fill="none" className={className}>
      <path
        d="M4 12H44V18H4V12ZM18 10H30V20H18V10ZM21 20L12 30M27 20L36 30"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

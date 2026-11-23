import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InscripcionModalProvider from "@/components/InscripcionModalProvider";
import {
  MotionProvider,
  ScrollProgressBar,
} from "@/components/motion/MotionPrimitives";

export const metadata: Metadata = {
  metadataBase: new URL("https://totalkombat.ec"),
  title: {
    default: "TOTAL KOMBAT | Club Deportivo de Taekwondo y Sambo en Quito",
    template: "%s | TOTAL KOMBAT Martial Arts Club",
  },
  description:
    "Disciplina que forma campeones. Entrenamiento profesional en artes marciales (Taekwondo y Sambo) para niños, jóvenes y adultos en Quito, Ecuador. Afiliado a la Asociación Deportiva y de Sambo de Pichincha.",
  keywords: [
    "Total Kombat",
    "Taekwondo Quito",
    "Sambo Quito",
    "Artes Marciales Ecuador",
    "Club Deportivo Pichincha",
    "Defensa Personal",
    "Entrenamiento Taekwondo Niños",
    "Formación Deportiva",
  ],
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://totalkombat.ec",
    siteName: "TOTAL KOMBAT Martial Arts Club",
    title: "TOTAL KOMBAT | Disciplina que Forma Campeones (Taekwondo & Sambo)",
    description:
      "Entrenamiento profesional en Taekwondo y Sambo para niños, jóvenes y adultos en Quito, Ecuador.",
    images: [
      {
        url: "/images/hero-inicio-bg.png",
        width: 1024,
        height: 306,
        alt: "TOTAL KOMBAT Martial Arts Club - Taekwondo y Sambo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "TOTAL KOMBAT Martial Arts Club",
    description:
      "Club deportivo especializado en la formación integral y competitiva en Taekwondo y Sambo para niños, jóvenes y adultos en Quito, Ecuador.",
    url: "https://totalkombat.ec",
    telephone: "+593987654321",
    email: "info@totalkombat.ec",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Quito",
      addressRegion: "Pichincha",
      addressCountry: "EC",
    },
    sport: ["Taekwondo", "Sambo", "Martial Arts"],
    memberOf: [
      {
        "@type": "SportsOrganization",
        name: "Asociación Deportiva de Pichincha",
      },
      {
        "@type": "SportsOrganization",
        name: "Asociación de Sambo de Pichincha",
      },
    ],
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#070709] text-white antialiased selection:bg-[#E51C23] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <ScrollProgressBar />
          <InscripcionModalProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </InscripcionModalProvider>
        </MotionProvider>
      </body>
    </html>
  );
}

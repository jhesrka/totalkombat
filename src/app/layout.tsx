import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InscripcionModalProvider from "@/components/InscripcionModalProvider";
import {
  MotionProvider,
  ScrollProgressBar,
} from "@/components/motion/MotionPrimitives";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const SITE_URL = "https://totalkombat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: SITE_URL,
    siteName: "TOTAL KOMBAT Martial Arts Club",
    title: "TOTAL KOMBAT | Disciplina que Forma Campeones (Taekwondo & Sambo)",
    description:
      "Entrenamiento profesional en Taekwondo y Sambo para niños, jóvenes y adultos en Quito, Ecuador.",
    images: [
      {
        url: "/logo-og.png",
        width: 384,
        height: 150,
        type: "image/png",
        alt: "TOTAL KOMBAT Martial Arts Club - Logo Oficial",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "TOTAL KOMBAT | Taekwondo y Sambo en Quito",
    description:
      "Entrenamiento profesional en Taekwondo y Sambo para niños, jóvenes y adultos en Quito, Ecuador.",
    images: ["/logo-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "TOTAL KOMBAT Martial Arts Club",
        inLanguage: "es-EC",
      },
      {
        "@type": "SportsActivityLocation",
        "@id": `${SITE_URL}/#organization`,
        name: "TOTAL KOMBAT Martial Arts Club",
        description:
          "Club deportivo especializado en la formación integral y competitiva en Taekwondo y Sambo para niños, jóvenes y adultos en Quito, Ecuador.",
        url: SITE_URL,
        logo: `${SITE_URL}/logo-og.png`,
        image: `${SITE_URL}/logo-og.png`,
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
            name: "Asociación de Taekwondo de Pichincha",
          },
          {
            "@type": "SportsOrganization",
            name: "Federación Ecuatoriana de Taekwondo",
          },
          {
            "@type": "SportsOrganization",
            name: "Asociación de Sambo de Pichincha",
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${plusJakarta.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#070709] text-white antialiased selection:bg-[#E51C23] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[120] focus:rounded-lg focus:bg-[#E51C23] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <ScrollProgressBar />
          <InscripcionModalProvider>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </InscripcionModalProvider>
        </MotionProvider>
      </body>
    </html>
  );
}

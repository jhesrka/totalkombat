import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://totalkombat.vercel.app";
  const routes = [
    "",
    "/nosotros",
    "/oferta-deportiva",
    "/formacion",
    "/inscripciones",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.85,
  }));
}

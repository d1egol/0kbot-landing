import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://0kbot.com";
  const now = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "/servicios", priority: 0.9, changeFrequency: "monthly" },
    { path: "/soluciones", priority: 0.9, changeFrequency: "monthly" },
    { path: "/como-trabajamos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/casos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/nosotros", priority: 0.7, changeFrequency: "monthly" },
    { path: "/recursos", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contacto", priority: 0.9, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}

import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { escenarios } from "@/lib/casos";

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
    { path: "/ia-para-pymes", priority: 0.9, changeFrequency: "monthly" },
    { path: "/automatizacion-procesos-chile", priority: 0.9, changeFrequency: "monthly" },
    { path: "/transformacion-digital-pymes", priority: 0.9, changeFrequency: "monthly" },
    { path: "/mejora-de-procesos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/como-trabajamos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/casos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/nosotros", priority: 0.7, changeFrequency: "monthly" },
    { path: "/recursos", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contacto", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terminos", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticRoutes = routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const casoPages = escenarios.map((e) => ({
    url: `${baseUrl}/casos/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogPosts, ...casoPages];
}

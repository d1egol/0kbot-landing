import withBundleAnalyzer from "@next/bundle-analyzer";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js hydration + GTM/GA/Meta Pixel require unsafe-inline/eval
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://calendly.com",
      // Fonts are self-hosted via next/font — no external Google Fonts requests
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://www.facebook.com",
      "connect-src 'self' https://*.supabase.co https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.facebook.com https://calendly.com",
      "frame-src https://calendly.com",
      "object-src 'none'",
      "base-uri 'self'",
    ].join("; "),
  },
];

const nextConfig = {
  reactStrictMode: true,
  // Next 16: fija workspace root al directorio del proyecto. Hay un package-lock.json en
  // C:\Users\dilop\ (raíz del usuario) por trabajo en otros repos que confunde la
  // detección automática de root y dispara el warning "multiple lockfiles detected".
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog/caso-real-distribuidora-ahorro-5-8-millones",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/casos-exito-automatizacion",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/ia-para-pymes-2025",
        destination: "/blog/ia-para-pymes-chile",
        permanent: true,
      },
    ];
  },
};

export default bundleAnalyzer(nextConfig);

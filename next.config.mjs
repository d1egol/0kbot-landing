
const nextConfig = {
  reactStrictMode: true,
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
    ];
  },
};

export default nextConfig;

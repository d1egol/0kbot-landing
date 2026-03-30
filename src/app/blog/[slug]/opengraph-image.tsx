import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export const alt = "0kbot Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? "Blog 0kbot";
  const category = post?.category ?? "Artículo";
  const readingTime = post?.readingTime ?? "5 min";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#F7F5F0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle dot accent */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1B5FA6, #D4AF37)",
            opacity: 0.04,
          }}
        />

        {/* Blue accent left bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: "#1B5FA6",
          }}
        />

        {/* Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 72px 72px 72px",
            position: "relative",
          }}
        >
          {/* Top row: logo + category */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "22px",
                fontWeight: "700",
                color: "#1B5FA6",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  background: "#1B5FA6",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "800",
                }}
              >
                0k
              </div>
              0kbot
            </div>

            {/* Category badge */}
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#1B5FA6",
                background: "rgba(27,95,166,0.08)",
                border: "1px solid rgba(27,95,166,0.15)",
                padding: "6px 16px",
                borderRadius: "20px",
                fontFamily: "sans-serif",
              }}
            >
              {category}
            </div>
          </div>

          {/* Article title */}
          <div
            style={{
              fontSize: title.length > 60 ? "42px" : "50px",
              fontWeight: "700",
              color: "#1A1A1A",
              lineHeight: 1.15,
              maxWidth: "1000px",
              marginBottom: "32px",
            }}
          >
            {title}
          </div>

          {/* Bottom row: author + reading time */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "#1B5FA6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                DL
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#1A1A1A" }}>
                  Diego López
                </span>
                <span style={{ fontSize: "12px", color: "#888" }}>
                  0kbot.com · {readingTime} de lectura
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(to right, #1B5FA6, #D4AF37)",
          }}
        />
      </div>
    ),
    size
  );
}

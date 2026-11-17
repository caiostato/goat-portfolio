import { ImageResponse } from "next/og";

export const alt = "Caio Stato | Frontend Engineer & UI Architect";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function generateStaticParams() {
  return [{ lang: "pt-br" }, { lang: "en-us" }];
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang.toLowerCase() === "en-us";

  const title = isEn
    ? "React & Next.js architecture built to endure"
    : "Arquitetura React e Next.js que aguenta o tranco";

  const subtitle = isEn
    ? "High-performance web platforms, mission-critical fintech systems, and robust design systems built for production scale."
    : "Plataformas fintech, engenharia de performance web e design systems robustos construídos para escala de produção.";

  const techBadges = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0e090d",
          backgroundImage:
            "radial-gradient(circle at 88% 12%, rgba(255, 64, 136, 0.16) 0%, rgba(53, 30, 40, 0.45) 42%, rgba(14, 9, 13, 0) 80%)",
          padding: "64px 72px",
          border: "2px solid #351e28",
          boxSizing: "border-box",
        }}
      >
        {/* Brand header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "9999px",
                backgroundColor: "#ff4088",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "18px",
                fontWeight: 700,
                color: "#ff4088",
                letterSpacing: "0.12em",
              }}
            >
              CAIO STATO // FRONTEND ENGINEER & UI ARCHITECT
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "#20131b",
              border: "1px solid #4a2738",
              fontSize: "13px",
              fontFamily: "monospace",
              color: "#e5d7dc",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            {isEn ? "PORTFOLIO" : "PORTFÓLIO"}
          </div>
        </div>

        {/* Hero title & localized description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "auto",
            marginBottom: "auto",
            maxWidth: "1060px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#fcf8f9",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#c7b8bf",
              lineHeight: 1.45,
              maxWidth: "960px",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer with tech badges and site domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "28px",
            borderTop: "1px solid #351e28",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {techBadges.map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 18px",
                  borderRadius: "8px",
                  backgroundColor: "#1d1218",
                  border: "1px solid #351e28",
                  color: "#e5d7dc",
                  fontSize: "17px",
                  fontWeight: 600,
                }}
              >
                {badge}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "monospace",
              fontSize: "22px",
              fontWeight: 700,
              color: "#ff4088",
              letterSpacing: "0.05em",
            }}
          >
            caiostato.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

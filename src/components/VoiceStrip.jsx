import { useViewport } from "../hooks/useViewport.js";

export function VoiceStrip() {
  const { isMobile } = useViewport();

  return (
    <section
      style={{
        background: "var(--saffron-yellow)",
        padding: isMobile ? "40px 18px" : "56px 28px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-script)",
            color: "var(--saging-green)",
            fontSize: isMobile ? 36 : 56,
            lineHeight: 1.1,
            fontWeight: 700,
            textWrap: "balance",
          }}
        >
          “Sulit na sulit ka dito, promise.”
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 900,
            fontSize: 12,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--saging-green)",
            opacity: 0.7,
          }}
        >
          — Mang G
        </div>
      </div>
    </section>
  );
}

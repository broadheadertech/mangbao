import { useViewport } from "../hooks/useViewport.js";
import { Eyebrow } from "./primitives.jsx";

const TRAITS = [
  {
    glyph: "🌿",
    title: "Salakot Hat",
    desc: "The traditional Filipino woven hat — signals local pride and cultural roots at a glance.",
  },
  {
    glyph: "🥟",
    title: "Bao Body",
    desc: "The mascot IS the product — pillowy, warm, and friendly. Impossible to mistake what we’re selling.",
  },
  {
    glyph: "👨",
    title: "The Mustache",
    desc: "“Mang” energy — that beloved older Filipino uncle who always feeds everyone. Approachable authority.",
  },
  {
    glyph: "🥢",
    title: "Chopsticks",
    desc: "Signals the fusion concept immediately — East-Asian bao technique, Filipino flavors.",
  },
];

export function MascotSection() {
  const { isMobile, isTablet } = useViewport();
  const stacked = isMobile || isTablet;

  return (
    <section
      id="mascot"
      style={{
        background: "var(--bg-page-dark)",
        padding: isMobile ? "56px 18px" : "80px 28px",
        color: "var(--bao-white)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: stacked ? "1fr" : "1fr 1fr",
          gap: stacked ? 32 : 56,
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", textAlign: "center" }}>
          <div
            style={{
              position: "absolute",
              inset: -30,
              background: "radial-gradient(circle, rgba(82,183,136,0.20), transparent 60%)",
              filter: "blur(20px)",
            }}
          />
          <img
            src="/assets/mascot-mang-g.svg"
            alt="Mang G"
            style={{
              position: "relative",
              width: isMobile ? 220 : 360,
              maxWidth: "100%",
            }}
          />
        </div>

        <div>
          <div style={{ color: "var(--leaf-green)" }}>
            <Eyebrow num="03" color="var(--leaf-green)">
              Brand Mascot
            </Eyebrow>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-subhead)",
              fontSize: isMobile ? 40 : 56,
              lineHeight: 1.05,
              color: "var(--bao-white)",
              margin: "8px 0 24px",
            }}
          >
            Meet Mang G
          </h2>

          <div style={{ display: "grid", gap: 12 }}>
            {TRAITS.map((t) => (
              <div
                key={t.title}
                style={{
                  background: "var(--bao-white)",
                  color: "var(--saging-green)",
                  borderRadius: 16,
                  padding: isMobile ? "12px 14px" : "14px 18px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: isMobile ? 12 : 14,
                  alignItems: "start",
                  borderLeft: "4px solid var(--saffron-yellow)",
                }}
              >
                <div style={{ fontSize: isMobile ? 26 : 32, lineHeight: 1 }}>{t.glyph}</div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-subhead)",
                      color: "var(--saging-green)",
                      fontSize: isMobile ? 18 : 20,
                    }}
                  >
                    {t.title}
                  </div>
                  <div
                    style={{
                      color: "var(--fg-on-light)",
                      fontWeight: 700,
                      fontSize: isMobile ? 13 : 14,
                      marginTop: 4,
                      lineHeight: 1.45,
                    }}
                  >
                    {t.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

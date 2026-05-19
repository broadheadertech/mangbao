import { useViewport } from "../hooks/useViewport.js";

const COLUMNS = [
  { h: "Order", l: ["Menu", "Locations", "Catering", "Gift Cards"] },
  { h: "Mang G", l: ["Our Story", "Press", "Careers", "Franchise"] },
  { h: "Social", l: ["Instagram", "TikTok", "Facebook", "Email Us"] },
];

export function Footer() {
  const { isMobile, isTablet } = useViewport();

  const neonHeadlineSize = isMobile ? 40 : isTablet ? 56 : 72;
  const neonAccentSize = Math.round(neonHeadlineSize * 0.66);
  const gridCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1.4fr 1fr 1fr 1fr";

  return (
    <footer
      style={{
        background: "#0F2A20",
        color: "var(--bao-white)",
        padding: isMobile ? "44px 18px 28px" : "60px 28px 36px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            background: "#0A1B14",
            borderRadius: 22,
            padding: isMobile ? "28px 16px" : "44px 24px",
            textAlign: "center",
            boxShadow: "inset 0 0 80px rgba(0,0,0,0.5)",
            marginBottom: isMobile ? 28 : 36,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-script)",
              fontWeight: 700,
              fontSize: neonHeadlineSize,
              lineHeight: 1,
              color: "var(--saffron-yellow)",
              textShadow:
                "0 0 8px rgba(244,185,66,0.9), 0 0 24px rgba(244,185,66,0.6), 0 0 50px rgba(244,185,66,0.4)",
              textWrap: "balance",
            }}
          >
            Hawak ang Sarap{" "}
            <span style={{ fontSize: neonAccentSize, verticalAlign: 12 }}>✦</span>
          </div>
          <div
            style={{
              marginTop: 18,
              fontFamily: "var(--font-body)",
              fontWeight: 900,
              fontSize: isMobile ? 11 : 13,
              letterSpacing: isMobile ? "0.18em" : "0.28em",
              color: "var(--leaf-green)",
              textShadow: "0 0 6px rgba(82,183,136,0.7), 0 0 18px rgba(82,183,136,0.5)",
            }}
          >
            MANG GUABAO &nbsp;·&nbsp; FILIPINO FUSION BAO
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: isMobile ? 24 : 28,
          }}
        >
          <div>
            <img src="/assets/mascot-300.webp" width="64" height="64" alt="" decoding="async" />
            <div
              style={{
                marginTop: 8,
                fontFamily: "var(--font-display)",
                fontSize: 28,
                color: "var(--saffron-yellow)",
                letterSpacing: "0.02em",
                textShadow: "2px 2px 0 var(--lechon-brown)",
              }}
            >
              MANG GUABAO
            </div>
            <p
              style={{
                fontWeight: 700,
                fontSize: 14,
                opacity: 0.7,
                maxWidth: 320,
                lineHeight: 1.5,
              }}
            >
              Street food that made it. World-class lasa. Presyo para sa lahat.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.h}>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 900,
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  color: "var(--leaf-green)",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                {col.h}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
                {col.l.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255,253,247,0.85)",
                        textDecoration: "none",
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: isMobile ? 28 : 40,
            paddingTop: 18,
            borderTop: "1px solid rgba(255,253,247,0.10)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          <div style={{ opacity: 0.6 }}>© 2025 Mang Guabao Foods Inc. · Manila, Philippines</div>
          <div style={{ opacity: 0.6 }}>Filipino to the bone.</div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="/presentation"
              style={{ opacity: 0.8, color: "inherit", textDecoration: "underline" }}
            >
              Showcase →
            </a>
            <a
              href="/presentation/classic"
              style={{ opacity: 0.6, color: "inherit", textDecoration: "underline" }}
            >
              Classic deck →
            </a>
            <a
              href="/design-system/"
              style={{ opacity: 0.6, color: "inherit", textDecoration: "underline" }}
            >
              Design system →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useViewport } from "../hooks/useViewport.js";
import { Button, DisplayHeadline, EstBadge, Tagline } from "./primitives.jsx";

export function Hero() {
  const { isMobile, isTablet } = useViewport();
  const stacked = isMobile;
  const displaySize = isMobile ? 64 : isTablet ? 88 : 108;

  return (
    <section
      id="home"
      style={{
        position: "relative",
        background: "var(--saging-green)",
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 28px)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "40px 18px 56px" : "80px 28px 96px",
          display: "grid",
          gridTemplateColumns: stacked ? "1fr" : "1.1fr 0.9fr",
          gap: stacked ? 24 : 48,
          alignItems: "center",
        }}
      >
        {stacked && (
          <div style={{ position: "relative", textAlign: "center", order: -1 }}>
            <div
              style={{
                position: "absolute",
                inset: -20,
                background: "radial-gradient(circle, rgba(244,185,66,0.18), transparent 60%)",
                filter: "blur(20px)",
              }}
            />
            <img
              src="/assets/mascot-mang-g.svg"
              alt="Mang G"
              style={{ position: "relative", width: 220, maxWidth: "70%" }}
            />
          </div>
        )}

        <div style={{ textAlign: stacked ? "center" : "left" }}>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 900,
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--leaf-green)",
              marginBottom: 12,
            }}
          >
            00 — Welcome
          </div>
          <DisplayHeadline size={displaySize}>MANG</DisplayHeadline>
          <DisplayHeadline size={displaySize} color="var(--bao-white)" shadow="var(--lechon-brown)">
            GUABAO
          </DisplayHeadline>
          <div
            style={{
              marginTop: 18,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: stacked ? "center" : "flex-start",
            }}
          >
            <Tagline size={isMobile ? 28 : 36}>Hawak ang Sarap.</Tagline>
            <p
              style={{
                color: "rgba(255,253,247,0.84)",
                fontWeight: 700,
                fontSize: isMobile ? 15 : 18,
                lineHeight: 1.5,
                maxWidth: 460,
                margin: 0,
                textWrap: "pretty",
              }}
            >
              From the streets of Manila to the world — every bao tells a story of bold flavors,
              Filipino pride, and the warmth of shared food.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 8,
                flexWrap: "wrap",
                justifyContent: stacked ? "center" : "flex-start",
              }}
            >
              <Button variant="primary" size={isMobile ? "md" : "lg"}>
                🥟 Order Now
              </Button>
              <Button variant="onDark" size={isMobile ? "md" : "lg"}>
                View Menu
              </Button>
            </div>
            <div style={{ marginTop: 8 }}>
              <EstBadge />
            </div>
          </div>
        </div>

        {!stacked && (
          <div style={{ position: "relative", textAlign: "center" }}>
            <div
              style={{
                position: "absolute",
                inset: -40,
                background: "radial-gradient(circle, rgba(244,185,66,0.18), transparent 60%)",
                filter: "blur(20px)",
              }}
            />
            <img
              src="/assets/mascot-mang-g.svg"
              alt="Mang G"
              style={{ position: "relative", width: 380, maxWidth: "100%" }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: -10,
                fontFamily: "var(--font-body)",
                fontWeight: 900,
                fontSize: 12,
                letterSpacing: "0.22em",
                color: "var(--leaf-green)",
                textTransform: "uppercase",
              }}
            >
              FILIPINO FUSION BAO
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

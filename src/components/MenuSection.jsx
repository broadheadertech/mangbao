import { useViewport } from "../hooks/useViewport.js";
import { Eyebrow, MenuRow } from "./primitives.jsx";

const ITEMS = [
  {
    name: "Sisig Bao",
    desc: "Sizzling sisig, chicharon bits, egg aioli, pickled papaya slaw.",
    price: 119,
    badges: [{ variant: "bestseller", label: "Bestseller" }],
  },
  {
    name: "Lechon Bao",
    desc: "Slow-roasted lechon, liver sauce, green onion.",
    price: 129,
    badges: [],
  },
  {
    name: "Bicol Express Bao",
    desc: "Coconut pork, green chili, crispy shallots.",
    price: 109,
    badges: [{ variant: "spicy", label: "🌶️ Spicy" }],
  },
  {
    name: "Longganisa Bao",
    desc: "Sweet pork longganisa, garlic rice crumble, fried egg crumble.",
    price: 99,
    badges: [],
  },
  {
    name: "Adobo Bao",
    desc: "Chicken adobo flakes, garlic chips, vinegar slaw.",
    price: 109,
    badges: [],
  },
  {
    name: "Tocino Bao",
    desc: "Sweet-cured pork, kamatis-sibuyas, calamansi mayo.",
    price: 109,
    badges: [{ variant: "new", label: "New" }],
  },
];

export function MenuSection({ onAdd }) {
  const { isMobile } = useViewport();

  return (
    <section
      id="menu"
      style={{
        background: "var(--bao-white)",
        padding: isMobile ? "56px 18px" : "80px 28px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Eyebrow num="06">Menu Design</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-subhead)",
            fontSize: isMobile ? 40 : 56,
            lineHeight: 1.05,
            color: "var(--saging-green)",
            margin: "8px 0 0",
          }}
        >
          The Menu Feel
        </h2>
        <p
          style={{
            marginTop: 12,
            color: "var(--fg-on-light-muted)",
            fontSize: isMobile ? 14 : 16,
            fontWeight: 700,
            maxWidth: 560,
          }}
        >
          Six baos. One vibe. Filipino to the bone.
        </p>

        <div
          style={{
            marginTop: 24,
            background: "var(--saging-green)",
            borderRadius: 22,
            padding: isMobile ? "12px 18px 18px" : "20px 28px 28px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 0 4px",
              borderBottom: "1px solid rgba(255,253,247,0.10)",
            }}
          >
            <div style={{ fontSize: isMobile ? 28 : 36, lineHeight: 1 }}>🥟</div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--saffron-yellow)",
                  fontSize: isMobile ? 28 : 40,
                  lineHeight: 1,
                  textShadow: "3px 3px 0 var(--lechon-brown)",
                }}
              >
                MANG GUABAO
              </div>
              <div
                style={{
                  color: "var(--leaf-green)",
                  fontWeight: 900,
                  letterSpacing: "0.18em",
                  fontSize: isMobile ? 10 : 11,
                  marginTop: 2,
                }}
              >
                SIGNATURE BAOS
              </div>
            </div>
          </div>

          {ITEMS.map((it) => (
            <MenuRow key={it.name} {...it} onAdd={() => onAdd?.(it)} />
          ))}
        </div>
      </div>
    </section>
  );
}

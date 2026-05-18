import { useState } from "react";
import { useViewport } from "../hooks/useViewport.js";

const LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "menu", label: "Menu", href: "#menu" },
  { id: "mascot", label: "Mang G", href: "#mascot" },
  { id: "locations", label: "Locations", href: "#locations" },
  { id: "presentation", label: "Showcase", href: "/presentation", external: true },
];

export function Header({ cartCount = 0, onOpenCart }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { isMobile } = useViewport();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(27,67,50,0.96)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,253,247,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "12px 16px" : "14px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            whiteSpace: "nowrap",
            minWidth: 0,
          }}
        >
          <img src="/assets/mascot-mang-g.svg" alt="" width={isMobile ? 40 : 48} height={isMobile ? 40 : 48} />
          <div style={{ lineHeight: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? 18 : 26,
                color: "var(--saffron-yellow)",
                textShadow: "2px 2px 0 var(--lechon-brown)",
                letterSpacing: "0.02em",
              }}
            >
              MANG GUABAO
            </div>
            <div
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--leaf-green)",
                fontSize: isMobile ? 12 : 15,
                marginTop: 3,
              }}
            >
              Hawak ang Sarap
            </div>
          </div>
        </a>

        {!isMobile && (
          <nav style={{ display: "flex", gap: 8 }}>
            {LINKS.map((l) => {
              const isActive = !l.external && active === l.id;
              return (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={l.external ? undefined : () => setActive(l.id)}
                  style={{
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-subhead)",
                    fontSize: 17,
                    color: isActive ? "var(--saffron-yellow)" : "var(--bao-white)",
                    padding: "8px 14px",
                    borderRadius: 999,
                    background: isActive ? "rgba(244,185,66,0.10)" : "transparent",
                    transition: "color 180ms",
                  }}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
        )}

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button
            onClick={onOpenCart}
            aria-label={`Open bag (${cartCount} items)`}
            style={{
              position: "relative",
              background: "var(--saffron-yellow)",
              color: "var(--saging-green)",
              border: 0,
              borderRadius: 14,
              padding: isMobile ? "10px 14px" : "12px 18px",
              fontFamily: "var(--font-subhead)",
              fontSize: isMobile ? 14 : 15,
              cursor: "pointer",
              boxShadow: "0 4px 0 var(--lechon-brown)",
              whiteSpace: "nowrap",
            }}
          >
            🛍️{isMobile ? "" : " Bag"}
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  background: "var(--sili-red)",
                  color: "var(--bao-white)",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 900,
                  padding: "2px 7px",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
          {isMobile && (
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              style={{
                background: "rgba(255,253,247,0.08)",
                border: 0,
                color: "var(--bao-white)",
                borderRadius: 12,
                padding: "10px 14px",
                cursor: "pointer",
                fontSize: 18,
                lineHeight: 1,
              }}
            >
              {open ? "✕" : "☰"}
            </button>
          )}
        </div>
      </div>

      {isMobile && open && (
        <div
          style={{
            background: "var(--saging-green)",
            borderTop: "1px solid rgba(255,253,247,0.08)",
            padding: "8px 16px 14px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {LINKS.map((l) => {
            const isActive = !l.external && active === l.id;
            return (
              <a
                key={l.id}
                href={l.href}
                onClick={() => {
                  if (!l.external) setActive(l.id);
                  setOpen(false);
                }}
                style={{
                  textDecoration: "none",
                  padding: "12px 14px",
                  borderRadius: 12,
                  fontFamily: "var(--font-subhead)",
                  fontSize: 18,
                  color: isActive ? "var(--saffron-yellow)" : "var(--bao-white)",
                  background: isActive ? "rgba(244,185,66,0.10)" : "transparent",
                }}
              >
                {l.label}
                {l.external && <span style={{ opacity: 0.5, marginLeft: 6 }}>↗</span>}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}

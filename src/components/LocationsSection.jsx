import { useState } from "react";
import { useViewport } from "../hooks/useViewport.js";
import { Eyebrow, Pill } from "./primitives.jsx";

const STORES = [
  {
    id: "bgc",
    name: "BGC Forum",
    hours: "11:00 — 22:00",
    addr: "G/F Forum, 7th Ave., BGC, Taguig",
    open: true,
  },
  {
    id: "qc",
    name: "Tomas Morato",
    hours: "11:00 — 23:00",
    addr: "Sct. Borromeo, Diliman, Quezon City",
    open: true,
  },
  {
    id: "makati",
    name: "Poblacion",
    hours: "16:00 — 02:00",
    addr: "Felipe St., Poblacion, Makati",
    open: true,
    latenight: true,
  },
  {
    id: "manila",
    name: "Binondo Pop-up",
    hours: "10:00 — 19:00",
    addr: "Ongpin near Eng Bee Tin, Binondo",
    open: false,
    popup: true,
  },
];

export function LocationsSection() {
  const [selected, setSelected] = useState("bgc");
  const { isMobile, isTablet } = useViewport();

  const columns = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)";

  return (
    <section
      id="locations"
      style={{
        background: "var(--bao-white)",
        padding: isMobile ? "56px 18px" : "80px 28px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Eyebrow num="08">Find Us</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-subhead)",
            fontSize: isMobile ? 40 : 56,
            lineHeight: 1.05,
            color: "var(--saging-green)",
            margin: "8px 0 6px",
          }}
        >
          Nandito na lahat.
        </h2>
        <p
          style={{
            color: "var(--fg-on-light-muted)",
            fontWeight: 700,
            fontSize: isMobile ? 14 : 16,
            maxWidth: 560,
            marginTop: 4,
          }}
        >
          Four stores around Metro Manila. Bakit ka pa pumunta ng ibang lugar?
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: columns,
            gap: 14,
            marginTop: 28,
          }}
        >
          {STORES.map((s) => {
            const isSel = selected === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelected(s.id)}
                aria-pressed={isSel}
                style={{
                  cursor: "pointer",
                  textAlign: "left",
                  font: "inherit",
                  background: isSel ? "var(--saging-green)" : "white",
                  color: isSel ? "var(--bao-white)" : "var(--saging-green)",
                  borderRadius: 18,
                  padding: 18,
                  boxShadow: isSel
                    ? "0 8px 24px rgba(27,67,50,0.18)"
                    : "0 1px 3px rgba(27,67,50,0.06)",
                  border: isSel ? "0" : "1px solid rgba(27,67,50,0.08)",
                  transition: "all 200ms cubic-bezier(.2,.7,.2,1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <span style={{ fontSize: 22 }}>📍</span>
                  {s.latenight && (
                    <Pill variant={isSel ? "new" : "bestseller"}>Late Night</Pill>
                  )}
                  {s.popup && <Pill variant="new">Pop-up</Pill>}
                </div>
                <div style={{ fontFamily: "var(--font-subhead)", fontSize: 22, lineHeight: 1.1 }}>
                  {s.name}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontWeight: 700,
                    fontSize: 13,
                    opacity: isSel ? 0.84 : 0.7,
                  }}
                >
                  {s.addr}
                </div>
                <div
                  style={{
                    marginTop: 12,
                    paddingTop: 10,
                    borderTop: `1px dashed ${
                      isSel ? "rgba(255,253,247,0.18)" : "rgba(27,67,50,0.12)"
                    }`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      color: isSel ? "var(--saffron-yellow)" : "var(--saging-green)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.hours}
                  </div>
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: 10,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      marginTop: 4,
                      color: s.open ? "var(--leaf-green)" : "var(--sili-red)",
                    }}
                  >
                    {s.open ? "● Open now" : "○ Opens tomorrow"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

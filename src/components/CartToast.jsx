import { useViewport } from "../hooks/useViewport.js";

export function CartToast({ items, onClose }) {
  const { isMobile } = useViewport();
  if (!items.length) return null;
  const total = items.reduce((a, b) => a + b.price, 0);

  return (
    <div
      role="dialog"
      aria-label="Your bag"
      style={{
        position: "fixed",
        zIndex: 100,
        background: "var(--bao-white)",
        color: "var(--saging-green)",
        borderRadius: 18,
        padding: 16,
        boxShadow: "0 12px 36px rgba(0,0,0,0.3)",
        border: "1px solid rgba(27,67,50,0.10)",
        ...(isMobile
          ? {
              left: 12,
              right: 12,
              bottom: "max(12px, env(safe-area-inset-bottom))",
            }
          : {
              right: 20,
              bottom: 20,
              width: 320,
            }),
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <div style={{ fontFamily: "var(--font-subhead)", fontSize: 18 }}>Your bag</div>
        <button
          onClick={onClose}
          aria-label="Close bag"
          style={{
            background: "transparent",
            border: 0,
            fontSize: 18,
            cursor: "pointer",
            color: "var(--saging-green)",
          }}
        >
          ×
        </button>
      </div>
      <div style={{ maxHeight: 140, overflowY: "auto" }}>
        {items.slice(-4).map((it, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "6px 0",
              borderBottom: "1px dashed rgba(27,67,50,0.10)",
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            <span>{it.name}</span>
            <span>₱{it.price}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 900,
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--leaf-green)",
          }}
        >
          {items.length} items · Total
        </span>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--saging-green)" }}>
          <span style={{ fontSize: 16 }}>₱</span>
          {total}
        </span>
      </div>
    </div>
  );
}

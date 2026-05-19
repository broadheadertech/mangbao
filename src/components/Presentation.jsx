import { useEffect, useRef, useState } from "react";

const DECK_URL = "/design-system/slides/index.html";

export function Presentation() {
  const iframeRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const onFsChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const goFullscreen = () => {
    const el = iframeRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      el.requestFullscreen?.();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0F2A20",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "10px 16px",
          background: "rgba(15,27,20,0.92)",
          borderBottom: "1px solid rgba(255,253,247,0.10)",
          color: "var(--bao-white)",
        }}
      >
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            borderRadius: 12,
            background: "rgba(255,253,247,0.06)",
            color: "var(--bao-white)",
            textDecoration: "none",
            fontFamily: "var(--font-subhead)",
            fontSize: 15,
          }}
        >
          ← Showcase
        </a>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            minWidth: 0,
          }}
        >
          <img src="/assets/mascot-300.webp" alt="" width={28} height={28} decoding="async" />
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 18,
              color: "var(--saffron-yellow)",
              textShadow: "1px 1px 0 var(--lechon-brown)",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            MANG GUABAO · BRAND DECK
          </div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <a
            href={DECK_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "8px 12px",
              borderRadius: 12,
              background: "rgba(255,253,247,0.06)",
              color: "var(--bao-white)",
              textDecoration: "none",
              fontFamily: "var(--font-subhead)",
              fontSize: 14,
            }}
          >
            Open ↗
          </a>
          <button
            type="button"
            onClick={goFullscreen}
            style={{
              padding: "8px 12px",
              borderRadius: 12,
              border: 0,
              cursor: "pointer",
              background: "var(--saffron-yellow)",
              color: "var(--saging-green)",
              fontFamily: "var(--font-subhead)",
              fontSize: 14,
              boxShadow: "0 4px 0 var(--lechon-brown)",
            }}
          >
            {fullscreen ? "Exit fullscreen" : "Fullscreen"}
          </button>
        </div>
      </header>

      <iframe
        ref={iframeRef}
        src={DECK_URL}
        title="Mang Guabao brand deck"
        allow="fullscreen"
        allowFullScreen
        style={{
          flex: 1,
          width: "100%",
          border: 0,
          background: "#0F2A20",
          display: "block",
        }}
      />

      <div
        style={{
          flexShrink: 0,
          padding: "8px 16px",
          background: "rgba(15,27,20,0.92)",
          borderTop: "1px solid rgba(255,253,247,0.08)",
          color: "rgba(255,253,247,0.55)",
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        ← → to navigate · R to reset · Esc to leave fullscreen
      </div>
    </div>
  );
}

/* global React */
function TrayLiner() {
  return (
    <div style={{
      width: 460, height: 320, background: "#F8F0DE", borderRadius: 8, position: "relative",
      backgroundImage: "repeating-linear-gradient(135deg, rgba(27,67,50,0.05) 0 2px, transparent 2px 14px)",
      boxShadow: "0 12px 32px rgba(0,0,0,0.15)", overflow: "hidden",
      border: "1px solid rgba(27,67,50,0.10)"
    }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 24 }}>
        <div style={{ fontSize: 44, lineHeight: 1 }}>🎉</div>
        <div style={{ marginTop: 14, fontFamily: "var(--font-display)", fontSize: 44, color: "var(--saging-green)", letterSpacing: "0.02em" }}>MANG GUABAO</div>
        <div style={{ marginTop: 6, fontFamily: "var(--font-script)", color: "var(--lechon-brown)", fontSize: 26, fontWeight: 600 }}>Hawak ang Sarap</div>
        <div style={{ marginTop: 14, fontWeight: 900, letterSpacing: "0.22em", color: "var(--saging-green)", opacity: 0.75, fontSize: 11 }}>
          FILIPINO FUSION BAO
        </div>
      </div>
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, background: "var(--saging-green)",
        height: 6
      }} />
    </div>
  );
}
window.TrayLiner = TrayLiner;

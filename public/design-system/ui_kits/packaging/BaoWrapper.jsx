/* global React */
function BaoWrapper() {
  return (
    <div style={{
      width: 360, height: 360, borderRadius: 18, background: "var(--saging-green)",
      position: "relative", overflow: "hidden", color: "var(--bao-white)",
      boxShadow: "0 12px 32px rgba(0,0,0,0.25)"
    }}>
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: -50, right: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(244,185,66,0.12)" }} />
      <div style={{ position: "absolute", bottom: -40, left: -40, width: 130, height: 130, borderRadius: "50%", background: "rgba(82,183,136,0.18)" }} />
      <div style={{ position: "absolute", top: 30, left: 30, width: 50, height: 50, borderRadius: "50%", background: "rgba(82,183,136,0.10)" }} />

      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 24 }}>
        <div style={{ fontSize: 64, lineHeight: 1 }}>🥟</div>
        <div style={{ marginTop: 14, fontFamily: "var(--font-display)", fontSize: 50, color: "var(--saffron-yellow)", textShadow: "3px 3px 0 var(--lechon-brown)", letterSpacing: "0.02em", lineHeight: 0.95 }}>
          MANG<br/>GUABAO
        </div>
        <div style={{ marginTop: 12, color: "var(--leaf-green)", fontWeight: 900, letterSpacing: "0.22em", fontSize: 12 }}>HAWAK ANG SARAP</div>
      </div>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, background: "var(--bao-white)",
        color: "var(--saging-green)", fontWeight: 900, letterSpacing: "0.22em", fontSize: 11,
        textAlign: "center", padding: "10px 0"
      }}>BAO WRAPPER</div>
    </div>
  );
}
window.BaoWrapper = BaoWrapper;

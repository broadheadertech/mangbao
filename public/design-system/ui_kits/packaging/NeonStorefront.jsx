/* global React */
function NeonStorefront() {
  return (
    <div style={{
      width: 560, height: 340, background: "#0B0B0B", borderRadius: 18,
      boxShadow: "inset 0 0 100px rgba(0,0,0,0.5), 0 12px 32px rgba(0,0,0,0.4)",
      display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden"
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(transparent, rgba(255,255,255,0.02) 50%, transparent), repeating-linear-gradient(135deg, transparent 0 12px, rgba(255,255,255,0.02) 12px 13px)" }}/>
      <div style={{ textAlign: "center", position: "relative", padding: 24 }}>
        <div style={{
          fontFamily: "var(--font-script)", fontWeight: 700, fontSize: 80, lineHeight: 1, color: "#F4B942",
          textShadow: "0 0 10px rgba(244,185,66,0.95), 0 0 28px rgba(244,185,66,0.7), 0 0 60px rgba(244,185,66,0.45)"
        }}>
          Hawak ang Sarap <span style={{ fontSize: 56 }}>✦</span>
        </div>
        <div style={{
          marginTop: 20, fontFamily: "var(--font-body)", fontWeight: 900, fontSize: 14,
          letterSpacing: "0.30em", color: "#52B788",
          textShadow: "0 0 8px rgba(82,183,136,0.8), 0 0 20px rgba(82,183,136,0.5)"
        }}>
          MANG GUABAO &nbsp;·&nbsp; FILIPINO FUSION BAO
        </div>
      </div>
    </div>
  );
}
window.NeonStorefront = NeonStorefront;

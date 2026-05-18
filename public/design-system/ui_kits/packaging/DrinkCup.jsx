/* global React */
function DrinkCup() {
  return (
    <div style={{ width: 230, height: 360, position: "relative" }}>
      {/* Cup shape */}
      <div style={{
        position: "absolute", inset: "20px 12px 16px 12px", borderRadius: "16px 16px 60px 60px / 16px 16px 90px 90px",
        background: "var(--saffron-yellow)", color: "var(--saging-green)",
        boxShadow: "inset -16px 0 30px rgba(0,0,0,0.10), 0 12px 24px rgba(0,0,0,0.25)",
        clipPath: "polygon(0 0, 100% 0, 88% 100%, 12% 100%)",
        display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 12px 30px"
      }}>
        <div style={{ fontSize: 50, lineHeight: 1 }}>🧋</div>
        <div style={{ marginTop: 12, fontFamily: "var(--font-display)", fontSize: 28, color: "var(--saging-green)", letterSpacing: "0.02em", textAlign: "center", lineHeight: 0.95 }}>MANG<br/>GUABAO</div>
        <div style={{ marginTop: 8, fontFamily: "var(--font-script)", color: "var(--lechon-brown)", fontSize: 20, fontWeight: 600 }}>Hawak ang Sarap</div>
        <div style={{ marginTop: "auto", color: "var(--saging-green)", opacity: 0.75, fontWeight: 900, letterSpacing: "0.22em", fontSize: 9 }}>CALAMANSI LEMONADE</div>
      </div>
      {/* Lid */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 28,
        background: "#1B4332", borderRadius: "8px 8px 4px 4px",
        boxShadow: "0 2px 0 #0F2A20"
      }} />
      {/* Straw */}
      <div style={{ position: "absolute", top: -34, left: 100, width: 14, height: 80, background: "var(--sili-red)", borderRadius: 4, transform: "rotate(8deg)" }}/>
    </div>
  );
}
window.DrinkCup = DrinkCup;

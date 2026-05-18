/* global React */
function TakeoutBag() {
  return (
    <div style={{
      width: 240, height: 320, position: "relative",
      background: "linear-gradient(160deg, #C9A36A 0%, #B58A55 100%)",
      borderRadius: "4px 4px 0 0",
      boxShadow: "0 12px 32px rgba(0,0,0,0.30), inset -10px 0 30px rgba(0,0,0,0.12)"
    }}>
      {/* Handle */}
      <div style={{ position: "absolute", top: -20, left: 32, right: 32, height: 28, border: "3px solid #8C6633", borderTop: "0", borderRadius: "0 0 100px 100px" }}/>
      {/* Top fold */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 14, background: "rgba(0,0,0,0.10)" }}/>

      {/* Stamped wordmark — slightly faded ink */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 90, textAlign: "center", color: "var(--saging-green)", filter: "contrast(1.1)" }}>
        <div style={{ fontSize: 40, lineHeight: 1, filter: "drop-shadow(1px 1px 0 rgba(0,0,0,0.05))" }}>🥟</div>
        <div style={{ marginTop: 8, fontFamily: "var(--font-display)", fontSize: 30, letterSpacing: "0.02em" }}>MANG<br/>GUABAO</div>
        <div style={{ marginTop: 6, fontFamily: "var(--font-script)", fontSize: 18, color: "#5A3520", fontWeight: 600 }}>Hawak ang Sarap</div>
      </div>

      {/* Bottom stamp */}
      <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center", color: "var(--saging-green)", opacity: 0.65, fontWeight: 900, letterSpacing: "0.22em", fontSize: 9 }}>
        EST. 2025 · MANILA
      </div>
    </div>
  );
}
window.TakeoutBag = TakeoutBag;

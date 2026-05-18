/* global React */
function ReceiptCard() {
  return (
    <div style={{
      width: 280, minHeight: 360, background: "var(--bao-white)", borderRadius: 6, padding: "20px 22px",
      fontFamily: "var(--font-body)", color: "var(--saging-green)",
      boxShadow: "0 12px 28px rgba(0,0,0,0.2)",
      backgroundImage: "linear-gradient(transparent 0 calc(100% - 16px), white calc(100% - 16px) 100%), radial-gradient(circle at 8px 0, transparent 0 6px, var(--bao-white) 6px), radial-gradient(circle at 8px 100%, transparent 0 6px, var(--bao-white) 6px)"
    }}>
      <div style={{ textAlign: "center", borderBottom: "1px dashed rgba(27,67,50,0.3)", paddingBottom: 12, marginBottom: 12 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 26, letterSpacing: "0.02em" }}>MANG GUABAO</div>
        <div style={{ fontFamily: "var(--font-script)", color: "var(--lechon-brown)", fontWeight: 600, fontSize: 16, marginTop: 2 }}>Hawak ang Sarap</div>
        <div style={{ fontWeight: 900, fontSize: 9, letterSpacing: "0.22em", marginTop: 6, opacity: 0.6 }}>BGC FORUM · 11:47 AM</div>
      </div>

      <table style={{ width: "100%", fontSize: 12, fontWeight: 800, borderCollapse: "collapse" }}>
        <tbody>
          {[
            ["1× Sisig Bao", "₱119"],
            ["1× Bicol Express Bao", "₱109"],
            ["1× Calamansi Lemonade", "₱79"],
          ].map(([a,b]) => (
            <tr key={a}><td style={{ padding: "5px 0" }}>{a}</td><td style={{ textAlign: "right" }}>{b}</td></tr>
          ))}
          <tr><td colSpan="2"><hr style={{ border: 0, borderTop: "1px dashed rgba(27,67,50,0.3)", margin: "6px 0" }}/></td></tr>
          <tr style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>
            <td style={{ paddingTop: 4 }}>TOTAL</td><td style={{ textAlign: "right" }}>₱307</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: 22, textAlign: "center", paddingTop: 14, borderTop: "1px dashed rgba(27,67,50,0.3)" }}>
        <div style={{ fontFamily: "var(--font-script)", fontSize: 24, color: "var(--lechon-brown)", fontWeight: 600, lineHeight: 1.15 }}>
          "Sulit na sulit ka<br/>dito, promise."
        </div>
        <div style={{ marginTop: 8, fontSize: 10, letterSpacing: "0.18em", fontWeight: 900, opacity: 0.6 }}>
          — MANG G
        </div>
      </div>
    </div>
  );
}
window.ReceiptCard = ReceiptCard;

import { useViewport } from "../hooks/useViewport.js";

export function Eyebrow({ num, children, color = "var(--leaf-green)" }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      {num && <span style={{ opacity: 0.7 }}>{num}</span>}
      {num && <span style={{ width: 18, height: 2, background: "currentColor", opacity: 0.5 }} />}
      <span>{children}</span>
    </div>
  );
}

export function SectionTitle({ children, color = "var(--saging-green)", as: Tag = "h2", mobileSize = 36, desktopSize = 56 }) {
  const { isMobile } = useViewport();
  return (
    <Tag
      style={{
        fontFamily: "var(--font-subhead)",
        fontWeight: 400,
        fontSize: isMobile ? mobileSize : desktopSize,
        lineHeight: 1.05,
        color,
        margin: "8px 0 0",
        textWrap: "balance",
      }}
    >
      {children}
    </Tag>
  );
}

export function DisplayHeadline({ children, color = "var(--saffron-yellow)", shadow = "var(--lechon-brown)", size = 96 }) {
  return (
    <h1
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: size,
        lineHeight: 0.95,
        letterSpacing: "0.02em",
        color,
        textShadow: `${Math.round(size * 0.06)}px ${Math.round(size * 0.06)}px 0 ${shadow}`,
        textTransform: "uppercase",
        margin: 0,
      }}
    >
      {children}
    </h1>
  );
}

export function Tagline({ children, color = "var(--leaf-green)", size = 28 }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-script)",
        fontWeight: 600,
        fontSize: size,
        color,
        lineHeight: 1.1,
      }}
    >
      {children}
    </span>
  );
}

const PILL_VARIANTS = {
  bestseller: { bg: "var(--sili-red)", fg: "var(--bao-white)" },
  spicy: { bg: "var(--leaf-green)", fg: "var(--bao-white)" },
  new: { bg: "var(--saffron-yellow)", fg: "var(--saging-green)" },
  outline: { bg: "transparent", fg: "var(--saffron-yellow)", border: "2px solid var(--saffron-yellow)" },
  outlineGreen: { bg: "transparent", fg: "var(--saging-green)", border: "2px solid var(--saging-green)" },
};

export function Pill({ children, variant = "bestseller" }) {
  const v = PILL_VARIANTS[variant] || PILL_VARIANTS.bestseller;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 12px",
        borderRadius: 999,
        fontFamily: "var(--font-body)",
        fontWeight: 900,
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        background: v.bg,
        color: v.fg,
        border: v.border || "none",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

const BUTTON_SIZES = {
  sm: { p: "10px 16px", fs: 14 },
  md: { p: "14px 22px", fs: 16 },
  lg: { p: "18px 28px", fs: 20 },
};

const BUTTON_VARIANTS = {
  primary: { bg: "var(--saffron-yellow)", fg: "var(--saging-green)", shadow: "0 4px 0 var(--lechon-brown)" },
  secondary: { bg: "var(--saging-green)", fg: "var(--bao-white)", shadow: "0 4px 0 #0F2A20" },
  ghost: { bg: "transparent", fg: "var(--saging-green)", border: "2px solid var(--saging-green)" },
  onDark: { bg: "var(--bao-white)", fg: "var(--saging-green)", shadow: "0 4px 0 rgba(0,0,0,0.25)" },
};

export function Button({ children, variant = "primary", onClick, size = "md", type = "button" }) {
  const s = BUTTON_SIZES[size];
  const v = BUTTON_VARIANTS[variant];
  const baseShadow = v.shadow || "none";
  const pressedShadow = v.shadow ? v.shadow.replace("4px", "1px") : "none";
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        border: v.border || 0,
        cursor: "pointer",
        padding: s.p,
        borderRadius: 14,
        fontFamily: "var(--font-subhead)",
        fontWeight: 400,
        fontSize: s.fs,
        lineHeight: 1,
        background: v.bg,
        color: v.fg,
        boxShadow: baseShadow,
        transition: "transform 180ms cubic-bezier(.2,.7,.2,1), box-shadow 180ms ease",
      }}
      onPointerDown={(e) => {
        e.currentTarget.style.transform = "translateY(2px)";
        e.currentTarget.style.boxShadow = pressedShadow;
      }}
      onPointerUp={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = baseShadow;
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = baseShadow;
      }}
    >
      {children}
    </button>
  );
}

export function MenuRow({ name, desc, price, badges = [], onAdd }) {
  const { isMobile } = useViewport();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: isMobile ? 12 : 16,
        padding: isMobile ? "14px 0" : "18px 0",
        borderBottom: "1px dashed rgba(255,253,247,0.14)",
        alignItems: "start",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-subhead)", fontSize: isMobile ? 20 : 26, color: "var(--saffron-yellow)" }}>{name}</span>
          {badges.map((b, i) => (
            <Pill key={i} variant={b.variant}>
              {b.label}
            </Pill>
          ))}
        </div>
        <div
          style={{
            color: "rgba(255,253,247,0.72)",
            fontWeight: 700,
            fontSize: isMobile ? 13 : 14,
            marginTop: 4,
            lineHeight: 1.4,
          }}
        >
          {desc}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--saffron-yellow)",
            fontSize: isMobile ? 26 : 32,
            lineHeight: 1,
          }}
        >
          <span style={{ fontSize: isMobile ? 16 : 20, verticalAlign: 4 }}>₱</span>
          {price}
        </div>
        {onAdd && (
          <Button size="sm" variant="onDark" onClick={onAdd}>
            + Add
          </Button>
        )}
      </div>
    </div>
  );
}

export function EstBadge({ children = "Est. 2025 · Manila, Philippines" }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "12px 22px",
        borderRadius: 999,
        border: "2px solid var(--saffron-yellow)",
        color: "var(--saffron-yellow)",
        fontFamily: "var(--font-body)",
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

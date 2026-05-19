import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./showcase.css";

const BAOS = [
  { key: "sisig",      name: "Sisig Guabao",         desc: "Sizzling sisig in a soft, steamed bao.",                  price: 119, fill: "#B86A2E", accent: "#5C2F18", badge: "Bestseller", tone: "bestseller" },
  { key: "lechon",     name: "Lechon Guabao",        desc: "Crispy lechon belly with hoisin sauce & pickled slaw.",   price: 129, fill: "#8B3A1F", accent: "#3F1A0A" },
  { key: "bicol",      name: "Bicol Express Guabao", desc: "Creamy, spicy Bicol Express with chili & coconut cream.", price: 109, fill: "#E4D5A4", accent: "#6E3D1A", badge: "Spicy",     tone: "spicy",     spicy: true },
  { key: "longganisa", name: "Longganisa Guabao",    desc: "Sweet & savory longganisa with garlic crunch.",           price:  99, fill: "#A52A23", accent: "#5C1611" },
  { key: "adobo",      name: "Adobo Guabao",         desc: "Classic adobo with braised meat, garlic chips & pickled papaya.", price: 109, fill: "#3D2014", accent: "#1A0A04" },
  { key: "tocino",     name: "Tocino Guabao",        desc: "Sweet cured pork with egg & pickled slaw.",               price: 109, fill: "#C75A4E", accent: "#7A2D24", badge: "New",       tone: "new",       isNew: true },
];

const TRAITS = [
  { glyph: "🌿", title: "Salakot Hat", desc: "Local pride.",     position: "top" },
  { glyph: "🥢", title: "Chopsticks",  desc: "Fusion concept.",  position: "right" },
  { glyph: "🥟", title: "Bao Body",    desc: "Pillowy, warm.",   position: "bottom" },
  { glyph: "👨", title: "Mustache",    desc: "Mang energy.",     position: "left" },
];

const VOICES = [
  { num: "01", title: "Makulit", desc: "Playful, cheeky, never annoying. The friend who jokes but means well.", quote: "“Bakit ka pa pumunta ng ibang lugar?”", cls: "makulit" },
  { num: "02", title: "Proud", desc: "Unapologetically Filipino. Owns its roots like a badge of honor.", quote: "“Filipino to the bone.”", cls: "proud" },
  { num: "03", title: "Generous", desc: "Always makes you feel welcome and fed. Unli-rice energy, but cooler.", quote: "“Sulit na sulit ka dito, promise.”", cls: "generous" },
  { num: "04", title: "Aspirational", desc: "Street food that made it. Global flavors without losing identity.", quote: "“World-class lasa.”", cls: "aspirational" },
];

const SCENE_IDS = ["hero", "menu", "mascot", "packaging", "kiosk", "voice", "cta"];

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrefers(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return prefers;
}

/* ============================================================ */
/* HERO — Brand intro                                           */
/* ============================================================ */
function HeroScene({ stageRef, onMouse }) {
  const sparkles = useMemo(
    () => [
      { top: "12%", left: "8%", delay: 0 },
      { top: "22%", left: "82%", delay: 1.4 },
      { top: "68%", left: "12%", delay: 2.7 },
      { top: "78%", left: "78%", delay: 0.7 },
      { top: "42%", left: "94%", delay: 3.4 },
    ],
    []
  );

  return (
    <section className="sc-scene sc-hero sc-scene--green sc-pinstripe" id="hero" onMouseMove={onMouse} onMouseLeave={() => onMouse(null)}>
      <div className="sc-sparkles">
        {sparkles.map((s, i) => (
          <span key={i} className="sc-sparkle" style={{ top: s.top, left: s.left, animationDelay: `${s.delay}s` }}>
            ✦
          </span>
        ))}
      </div>

      <div className="sc-stage" ref={stageRef}>
        <div className="sc-hero-grid">
          <div className="sc-hero-copy">
            <div className="sc-eyebrow">00 — Welcome</div>
            <h1 className="display">MANG</h1>
            <h1 className="display display-2">GUABAO</h1>
            <p>
              <span className="sc-tag" style={{ display: "block", marginBottom: 10 }}>Hawak ang Sarap.</span>
              From the streets of Manila to the world — every bao is a story of bold flavors, Filipino pride, and the warmth of shared food.
            </p>
          </div>
          <div className="sc-hero-mascot">
            <div className="glow" />
            <img
              src="/assets/mascot-800.webp"
              srcSet="/assets/mascot-300.webp 300w, /assets/mascot-800.webp 800w"
              sizes="(max-width: 768px) 60vw, 380px"
              alt="Mang G"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="sc-scroll-cue">scroll</div>
    </section>
  );
}

/* ============================================================ */
/* GUABAO — CSS-rendered Taiwanese folded bun, per menu item    */
/* Bun + open front showing the filling, cilantro garnish,      */
/* rising steam wisps. Each item differs by fill + accent color */
/* and optional variant flags (spicy, new).                     */
/* ============================================================ */
function Guabao({ fill, accent, spicy, isNew }) {
  const cls = [
    "sc-guabao",
    spicy && "sc-guabao--spicy",
    isNew && "sc-guabao--new",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cls}
      style={{ "--bao-fill": fill, "--bao-accent": accent }}
      aria-hidden="true"
    >
      {/* Steam wisps rising from the top */}
      <div className="sc-guabao__steam">
        <span />
        <span />
        <span />
      </div>

      {/* The folded bun */}
      <div className="sc-guabao__bun" />

      {/* The opening — filling is rendered by the ::before pseudo-element via the accent color */}
      <div className="sc-guabao__opening" />

      {/* Cilantro sprig spilling out the front */}
      <div className="sc-guabao__garnish">
        <svg viewBox="0 0 40 30" preserveAspectRatio="xMidYMid meet">
          {/* Stem */}
          <path
            d="M20 28 Q20 22 18 16 Q22 14 22 8"
            stroke="#3F7C53"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Leaves — clusters of small green circles */}
          <g fill="#52B788">
            <circle cx="14" cy="6" r="3" />
            <circle cx="20" cy="3" r="3.2" />
            <circle cx="26" cy="6" r="3" />
            <circle cx="17" cy="11" r="2.6" />
            <circle cx="23" cy="11" r="2.6" />
            <circle cx="20" cy="8" r="2.8" />
          </g>
          {/* Lighter leaf highlights */}
          <g fill="#A3D9BB" opacity="0.7">
            <circle cx="13" cy="5" r="1" />
            <circle cx="25" cy="5" r="1" />
            <circle cx="20" cy="2.5" r="0.9" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ============================================================ */
/* MENU — Hero product showcase                                 */
/* One product spotlighted at a time, with a big floating image,*/
/* ghost outline word behind, brand badge, prev/next + thumbs.  */
/* ============================================================ */
function MenuScene() {
  const [idx, setIdx] = useState(0);
  const [enterKey, setEnterKey] = useState(0); // bumps each switch to retrigger entry animation
  const count = BAOS.length;
  const reduced = usePrefersReducedMotion();
  const current = BAOS[idx];

  const goTo = (newIdx) => {
    setIdx(((newIdx % count) + count) % count);
    setEnterKey((k) => k + 1);
  };
  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  const badgeClass = current.tone === "bestseller"
    ? "sc-hero-badge--bestseller"
    : current.tone === "spicy"
      ? "sc-hero-badge--spicy"
      : current.tone === "new"
        ? "sc-hero-badge--new"
        : "";

  return (
    <section className="sc-scene sc-carousel-scene sc-scene--green sc-pinstripe" id="menu">
      <div className="sc-section-head">
        <div className="sc-eyebrow">06 — The Menu</div>
        <h2>Six guabaos. One vibe.</h2>
      </div>

      <div className="sc-hero-product sc-hero-product--card" role="region" aria-roledescription="carousel" aria-label="Guabao menu">
        {/* Ghost outline word in the background — like the reference */}
        <div className="sc-hero-ghost" aria-hidden="true">
          <span key={`ghost-${enterKey}`}>{current.name.split(" ")[0].toUpperCase()}</span>
        </div>

        {/* Centerpiece — the full menu card */}
        <div className="sc-hero-card-wrap">
          <img
            key={enterKey}
            className={`sc-hero-card ${reduced ? "" : "is-entering"}`}
            src={`/assets/guabaos/${current.key}-1200.webp`}
            srcSet={`/assets/guabaos/${current.key}-600.webp 600w, /assets/guabaos/${current.key}-1200.webp 1200w`}
            sizes="(max-width: 768px) 78vw, 520px"
            alt={current.name}
            decoding="async"
          />
          {current.badge && (
            <div className={`sc-hero-badge ${badgeClass}`} aria-hidden="true">
              {current.badge}
              <span className="small">Mang G</span>
            </div>
          )}
        </div>

        {/* Price + CTA below the card */}
        <div className="sc-hero-card-footer">
          <div className="sc-hero-price-row">
            <span className="sc-hero-price-label">From</span>
            <span className="sc-hero-price">
              <span className="currency">₱</span>{current.price}
            </span>
          </div>
          <a className="sc-hero-cta" href="/site#menu">🛍️ Order {current.name}</a>
        </div>
      </div>

      {/* Prev / Next + thumbnail strip */}
      <div className="sc-hero-controls">
        <button type="button" className="sc-hero-nav" onClick={prev} aria-label="Previous guabao">
          ←
        </button>
        <div className="sc-hero-thumbs" role="tablist" aria-label="Pick a guabao">
          {BAOS.map((b, i) => (
            <button
              key={b.key}
              type="button"
              className={`sc-hero-thumb ${i === idx ? "is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Show ${b.name}`}
              aria-current={i === idx}
              role="tab"
            >
              <img src={`/assets/guabaos/${b.key}-600.webp`} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
        <button type="button" className="sc-hero-nav" onClick={next} aria-label="Next guabao">
          →
        </button>
      </div>
    </section>
  );
}

/* ============================================================ */
/* MASCOT — Orbiting trait cards                                */
/* ============================================================ */
function MascotScene() {
  return (
    <section className="sc-scene sc-scene--ink sc-mascot-scene" id="mascot">
      <div className="sc-mascot-frame">
        {/* Top bar — eyebrow on the left, tagline pill on the right */}
        <div className="sc-mascot-topbar">
          <div className="sc-eyebrow">03 — Brand Mascot</div>
          <span className="sc-mascot-pill">Filipino fusion bao</span>
        </div>

        {/* Hero area — layered MANG G text + mascot floating over it */}
        <div className="sc-mascot-hero">
          <div className="sc-mascot-bg-stack" aria-hidden="true">
            <span className="solid">MANG G</span>
            <span className="outline">MANG G</span>
            <span className="outline faint">MANG G</span>
            <span className="outline faintest">MANG G</span>
          </div>
          <img
            className="sc-mascot-figure"
            src="/assets/mascot-800.webp"
            srcSet="/assets/mascot-300.webp 300w, /assets/mascot-800.webp 800w"
            sizes="(max-width: 768px) 60vw, 420px"
            alt="Mang G — smiling bao with salakot, mustache, glasses and chopsticks"
            decoding="async"
          />
        </div>

        {/* Row of 4 trait cards beneath */}
        <div className="sc-mascot-traits-row">
          {TRAITS.map((t) => (
            <article key={t.title} className={`sc-trait-card sc-trait-card--${t.position}`}>
              <span className="sc-trait-card__dot" aria-hidden="true" />
              <div className="sc-trait-card__head">
                <span className="sc-trait-card__glyph" aria-hidden="true">{t.glyph}</span>
                <span className="sc-trait-card__title">{t.title}</span>
              </div>
              <p className="sc-trait-card__desc">{t.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* PACKAGING — Real product photos with splash-effect treatment */
/* No rotation. Each product floats with a soft bob, surrounded */
/* by sparkles and floating ingredient particles.               */
/* ============================================================ */
const PACK_ITEMS = [
  {
    key: "bicol-guabao",
    base: "/assets/guabaos/bicol",
    label: "Bicol Express Guabao",
    sub: "The food",
    accent: "var(--leaf-green)",
  },
  {
    key: "calamansi",
    base: "/assets/calamansi-cup",
    label: "Calamansi Lemonade",
    sub: "The drink",
    accent: "var(--saffron-yellow)",
  },
  {
    key: "kraft",
    base: "/assets/craft-bag",
    label: "Takeout Kraft Bag",
    sub: "The bag",
    accent: "#C9A877",
  },
];

function PackSplash({ accent }) {
  // 10 floating particles + 4 sparkle stars per product.
  // Positions are pseudo-random but stable so SSR/CSR match.
  const particles = [
    { top: "12%", left: "10%", size: 8,  delay: 0.0,  hue: accent },
    { top: "22%", left: "88%", size: 6,  delay: 0.6,  hue: accent },
    { top: "78%", left: "12%", size: 10, delay: 1.2,  hue: accent },
    { top: "85%", left: "82%", size: 7,  delay: 0.3,  hue: accent },
    { top: "40%", left: "5%",  size: 5,  delay: 1.8,  hue: accent },
    { top: "55%", left: "95%", size: 8,  delay: 2.4,  hue: accent },
    { top: "8%",  left: "60%", size: 6,  delay: 1.5,  hue: accent },
    { top: "92%", left: "50%", size: 9,  delay: 0.9,  hue: accent },
    { top: "30%", left: "78%", size: 5,  delay: 2.1,  hue: accent },
    { top: "68%", left: "30%", size: 7,  delay: 0.4,  hue: accent },
  ];
  const sparkles = [
    { top: "18%", left: "18%", delay: 0.0 },
    { top: "75%", left: "78%", delay: 1.3 },
    { top: "82%", left: "20%", delay: 2.5 },
    { top: "20%", left: "82%", delay: 0.8 },
  ];
  return (
    <div className="sc-pack-splash" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={`p-${i}`}
          className="sc-pack-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.hue,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      {sparkles.map((s, i) => (
        <span
          key={`s-${i}`}
          className="sc-pack-sparkle"
          style={{ top: s.top, left: s.left, animationDelay: `${s.delay}s` }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

function PackagingScene() {
  return (
    <section className="sc-scene sc-scene--green sc-pinstripe" id="packaging">
      <div className="sc-stage" style={{ flexDirection: "column", justifyContent: "center" }}>
        <div className="sc-section-head" style={{ marginTop: 0 }}>
          <div className="sc-eyebrow">04 — Packaging</div>
          <h2>The things you hold.</h2>
        </div>

        <div className="sc-pack-stage">
          {PACK_ITEMS.map((item) => (
            <figure key={item.key} className="sc-pack">
              <div className="sc-pack-halo" aria-hidden="true" />
              <PackSplash accent={item.accent} />
              <img
                className="sc-pack-img"
                src={`${item.base}-1200.webp`}
                srcSet={`${item.base}-600.webp 600w, ${item.base}-1200.webp 1200w`}
                sizes="(max-width: 900px) 65vw, 300px"
                alt={item.label}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="sc-pack-figcap">
                <span className="sub">{item.sub}</span>
                <span className="lbl">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* KIOSK — In-store moment (mall kiosk render)                  */
/* ============================================================ */
function KioskScene() {
  return (
    <section className="sc-scene sc-scene--ink" id="kiosk">
      <div className="sc-stage" style={{ flexDirection: "column", justifyContent: "center" }}>
        <div className="sc-section-head" style={{ marginTop: 0 }}>
          <div className="sc-eyebrow">05 — In-store</div>
          <h2>Hawak mo na 'to.</h2>
        </div>

        <div className="sc-kiosk-wrap">
          {/* Splash sparkles around the kiosk for that "we just arrived at the mall" energy */}
          <div className="sc-kiosk-sparkles" aria-hidden="true">
            <span className="sc-pack-sparkle" style={{ top: "8%",  left: "6%",  animationDelay: "0s"   }}>✦</span>
            <span className="sc-pack-sparkle" style={{ top: "14%", left: "92%", animationDelay: "0.6s" }}>✦</span>
            <span className="sc-pack-sparkle" style={{ top: "60%", left: "3%",  animationDelay: "1.4s" }}>✦</span>
            <span className="sc-pack-sparkle" style={{ top: "72%", left: "94%", animationDelay: "2.1s" }}>✦</span>
            <span className="sc-pack-sparkle" style={{ top: "38%", left: "50%", animationDelay: "1.0s" }}>✦</span>
          </div>
          <img
            className="sc-kiosk-img"
            src="/assets/kiosk-1200.webp"
            srcSet="/assets/kiosk-600.webp 600w, /assets/kiosk-1200.webp 1200w"
            sizes="(max-width: 900px) 92vw, 920px"
            alt="Mang Guabao mall kiosk — saging-green and saffron, mascot wordmark, menu boards, display case"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="sc-kiosk-caption">
          <span className="sub">Coming soon — and already here</span>
          <span className="lbl">Mall kiosks · Manila</span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* VOICE — Four-pillar tone grid                                */
/* ============================================================ */
function VoiceScene() {
  return (
    <section className="sc-scene sc-scene--ink" id="voice">
      <div className="sc-stage" style={{ flexDirection: "column" }}>
        <div className="sc-section-head" style={{ marginTop: 0 }}>
          <div className="sc-eyebrow">07 — Brand Voice</div>
          <h2>How Mang G talks.</h2>
          <p className="lead">Four tones. One voice. Taglish all the way.</p>
        </div>
        <div className="sc-voice-grid">
          {VOICES.map((v) => (
            <article key={v.title} className={`sc-voice-card ${v.cls}`}>
              <div className="num">{v.num}</div>
              <div className="title">{v.title}</div>
              <div className="desc">{v.desc}</div>
              <div className="quote">{v.quote}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* CTA — Neon close                                             */
/* ============================================================ */
function CtaScene() {
  return (
    <section className="sc-scene sc-scene--ink" id="cta">
      <div className="sc-cta">
        <div className="sc-eyebrow" style={{ color: "var(--saffron-yellow)" }}>09 — Hawak mo na 'to</div>
        <div className="sc-neon">Hawak ang Sarap ✦</div>
        <div className="sc-neon-sub">MANG GUABAO · FILIPINO FUSION BAO</div>
        <div className="sc-cta-buttons">
          <a href="/site#menu">🥟 Order Now</a>
          <a href="/site#locations" className="secondary">Find a Store</a>
          <a href="/presentation/classic" className="secondary">View Classic Deck</a>
        </div>
        <div style={{ marginTop: 22, fontWeight: 700, fontSize: 12, letterSpacing: "0.22em", color: "rgba(255,253,247,0.45)", textTransform: "uppercase" }}>
          © 2025 Mang Guabao Foods · Manila, Philippines
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Main composer                                                */
/* ============================================================ */
export function Showcase() {
  const rootRef = useRef(null);
  const heroStageRef = useRef(null);
  const [activeScene, setActiveScene] = useState(0);
  const reduced = usePrefersReducedMotion();

  // Mouse-parallax on the hero stage only (heaviest 3D moment)
  const onHeroMouse = useCallback(
    (e) => {
      if (reduced || !heroStageRef.current) return;
      if (e === null) {
        heroStageRef.current.style.transform = "";
        return;
      }
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroStageRef.current.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`;
    },
    [reduced]
  );

  // Track which scene is visible
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sections = SCENE_IDS.map((id) => root.querySelector(`#${id}`)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const i = SCENE_IDS.indexOf(entry.target.id);
            if (i >= 0) setActiveScene(i);
          }
        });
      },
      { root, threshold: [0.5, 0.75, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const goToScene = (i) => {
    const root = rootRef.current;
    if (!root) return;
    const target = root.querySelector(`#${SCENE_IDS[i]}`);
    target?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  // Wheel/keyboard scene navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        goToScene(Math.min(activeScene + 1, SCENE_IDS.length - 1));
      } else if (e.key === "PageUp") {
        e.preventDefault();
        goToScene(Math.max(activeScene - 1, 0));
      } else if (e.key === "Home") {
        e.preventDefault();
        goToScene(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToScene(SCENE_IDS.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeScene]);

  return (
    <div className="sc-root" ref={rootRef}>
      <div className="sc-topbar">
        <a href="/site" className="sc-back-text">← Visit the site</a>
        <div className="sc-mark">
          <img src="/assets/mascot-300.webp" alt="" decoding="async" />
          MANG GUABAO
        </div>
        <a href="/presentation/classic" className="sc-classic-link">Classic deck →</a>
      </div>

      <HeroScene stageRef={heroStageRef} onMouse={onHeroMouse} />
      <MenuScene />
      <MascotScene />
      <PackagingScene />
      <KioskScene />
      <VoiceScene />
      <CtaScene />

      <div className="sc-progress" role="tablist" aria-label="Scene navigation">
        {SCENE_IDS.map((id, i) => (
          <button
            key={id}
            type="button"
            className={i === activeScene ? "active" : ""}
            onClick={() => goToScene(i)}
            aria-label={`Go to scene ${i + 1}: ${id}`}
            aria-current={i === activeScene}
          />
        ))}
      </div>
    </div>
  );
}

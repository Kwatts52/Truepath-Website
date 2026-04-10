interface PageHeroProps {
  kicker?: string;
  title: string;
  description?: string;
}

export default function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section style={s.hero}>
      <div style={s.container}>
        {kicker && <div style={s.kicker}>{kicker}</div>}
        <h1 style={s.title}>{title}</h1>
        {description && <p style={s.description}>{description}</p>}
      </div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(180deg, #f5f7fb 0%, #edf2e9 100%)",
    borderBottom: "1px solid #e5e9ef",
    padding: "52px 0 44px",
  },
  container: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 20px",
  },
  kicker: {
    display: "inline-block",
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    color: "#7fb32f",
    background: "rgba(155,203,60,0.12)",
    border: "1px solid rgba(155,203,60,0.25)",
    padding: "6px 12px",
    borderRadius: 999,
    marginBottom: 14,
  },
  title: {
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    color: "#0b0f14",
    margin: "0 0 14px",
    maxWidth: 700,
  },
  description: {
    fontSize: 18,
    color: "#5f6b7a",
    lineHeight: 1.65,
    maxWidth: 620,
    fontWeight: 500,
  },
};

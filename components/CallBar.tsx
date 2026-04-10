import Link from "next/link";

interface CallBarProps {
  message?: string;
}

export default function CallBar({ message = "Need emergency electrical help? We're available 24/7 across Central Florida." }: CallBarProps) {
  return (
    <div style={s.bar}>
      <div style={s.container}>
        <p style={s.text}>{message}</p>
        <div style={s.btns}>
          <a href="tel:+13528884468" style={s.primary}>
            Call Now – (352) 888-4468
          </a>
          <Link href="/contact" style={s.ghost}>
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  bar: {
    background: "linear-gradient(135deg, #0b0f14 0%, #1a2230 100%)",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    padding: "28px 0",
  },
  container: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap",
  },
  text: {
    color: "#f2f6fb",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1.5,
    maxWidth: 560,
  },
  btns: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    flexShrink: 0,
  },
  primary: {
    padding: "12px 22px",
    background: "#9BCB3C",
    color: "#0b0f14",
    borderRadius: 999,
    fontWeight: 800,
    fontSize: 15,
    whiteSpace: "nowrap",
    boxShadow: "0 6px 20px rgba(155,203,60,0.35)",
  },
  ghost: {
    padding: "12px 22px",
    background: "rgba(255,255,255,0.08)",
    color: "#f2f6fb",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: 15,
    border: "1px solid rgba(255,255,255,0.14)",
    whiteSpace: "nowrap",
  },
};

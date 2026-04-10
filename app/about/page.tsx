import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CallBar from "@/components/CallBar";

export const metadata: Metadata = {
  title: "About True Path Electrical Services – Licensed Electrician in Umatilla, FL",
  description:
    "True Path Electrical Services is a licensed, owner-operated electrical company based in Umatilla, FL. Learn about our commitment to code-compliant work, safety, and honest communication.",
};

const VALUES = [
  {
    title: "Safety First",
    desc: "Every job is done to code. We don't take shortcuts that put people or property at risk. Period.",
  },
  {
    title: "Direct Communication",
    desc: "You talk to the electrician doing the work — not a dispatcher, not a call center. No runaround.",
  },
  {
    title: "Clean Workmanship",
    desc: "We leave every job site clean and organized. Our work looks as good as it performs.",
  },
  {
    title: "Honest Pricing",
    desc: "Clear, upfront quotes with no hidden fees. You know what you're paying before we start.",
  },
  {
    title: "Code Compliance",
    desc: "All installations meet Florida electrical code and are inspection-ready when required.",
  },
  {
    title: "24/7 Availability",
    desc: "Emergencies don't wait. When you need help at 2am, call — we pick up.",
  },
];

const CREDENTIALS = [
  { label: "State License", value: "EC13015924" },
  { label: "License Type", value: "Florida Electrical Contractor" },
  { label: "Entity", value: "True Path Electrical Services, LLC" },
  { label: "Based In", value: "Umatilla, FL 32784" },
  { label: "Service Type", value: "Residential · Commercial · Industrial" },
  { label: "Emergency", value: "Available 24/7" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Us"
        title="Built on Trust, Safety, and Doing Things Right"
        description="True Path Electrical Services is a solo owner-operated electrical company. One electrician, one standard of quality, no compromises."
      />

      <section style={s.section}>
        <div style={s.container}>
          <div style={s.storySplit}>
            <div style={s.storyText}>
              <h2 style={s.h2}>The True Path Story</h2>
              <p style={s.p}>
                True Path Electrical Services was built on a simple belief: electrical work should be done
                right the first time, every time. As a solo owner-operated company, every job that goes
                out the door has my name on it — and that means something.
              </p>
              <p style={s.p}>
                Based in Umatilla, FL, I serve homeowners, businesses, and industrial clients throughout
                Central Florida. Whether you need a quick troubleshooting call, a complete panel upgrade,
                or commercial electrical support, you get the same level of attention and craftsmanship.
              </p>
              <p style={s.p}>
                Today it's one person focused on quality and trust. The goal is to grow into a team while
                keeping the exact same standard — because that standard is what True Path is built on.
              </p>
              <div style={s.badges}>
                {["Licensed & Insured", "Owner Operated", "Code Compliant", "Residential", "Commercial", "Industrial", "24/7 Emergency"].map((b) => (
                  <span key={b} style={s.badge}>{b}</span>
                ))}
              </div>
            </div>

            <div style={s.credPanel}>
              <h3 style={s.credTitle}>License & Credentials</h3>
              <div style={s.credRows}>
                {CREDENTIALS.map((c) => (
                  <div key={c.label} style={s.credRow}>
                    <span style={s.credLabel}>{c.label}</span>
                    <span style={s.credValue}>{c.value}</span>
                  </div>
                ))}
              </div>
              <div style={s.credCta}>
                <a href="tel:+13528884468" style={s.btnPrimary}>Call (352) 888-4468</a>
                <Link href="/contact" style={s.btnGhost}>Request a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={s.photosSection}>
        <div style={s.container}>
          <h2 style={{ ...s.h2, marginBottom: 24 }}>Our Work</h2>
          <div style={s.photoGrid}>
            <div style={s.photoWrap}>
              <Image
                src="/work-1.jpg"
                alt="Electrical panel installation by True Path Electrical"
                width={560}
                height={320}
                style={s.photo}
              />
            </div>
            <div style={s.photoWrap}>
              <Image
                src="/work-2.jpg"
                alt="Professional electrical work by True Path Electrical Services"
                width={560}
                height={320}
                style={s.photo}
              />
            </div>
          </div>
          <p style={s.photoNote}>
            Photos of actual work performed by True Path Electrical Services across Central Florida.
          </p>
        </div>
      </section>

      <section style={s.valuesSection}>
        <div style={s.container}>
          <div style={s.valuesHead}>
            <h2 style={s.h2}>What We Stand For</h2>
            <p style={s.lead}>
              These aren't just words on a page — they're the operating principles behind every job we take.
            </p>
          </div>
          <div style={s.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} style={s.valueCard}>
                <h3 style={s.valueTitle}>{v.title}</h3>
                <p style={s.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallBar message="Ready to work with a licensed electrician you can trust? Call us any time." />

      <section style={s.section}>
        <div style={s.container}>
          <div style={s.bottomCta}>
            <div>
              <h2 style={s.h2}>Let's Get to Work</h2>
              <p style={s.lead}>
                Whether it's an emergency, a planned upgrade, or a question about your electrical system —
                we're here and ready to help.
              </p>
            </div>
            <div style={s.ctaBtns}>
              <a href="tel:+13528884468" style={s.btnPrimary}>Call (352) 888-4468</a>
              <Link href="/contact" style={s.btnGhost}>Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    padding: "64px 0",
  },
  container: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 20px",
  },
  storySplit: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 48,
    alignItems: "start",
  },
  storyText: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  h2: {
    fontSize: "clamp(22px, 3vw, 32px)",
    fontWeight: 800,
    color: "#0b0f14",
    letterSpacing: "-0.02em",
    margin: "0 0 16px",
  },
  p: {
    fontSize: 16,
    color: "#3a4452",
    lineHeight: 1.7,
    fontWeight: 500,
    marginBottom: 14,
  },
  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  badge: {
    padding: "6px 12px",
    background: "rgba(155,203,60,0.12)",
    border: "1px solid rgba(155,203,60,0.25)",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    color: "#3d6010",
  },
  credPanel: {
    background: "#0b0f14",
    borderRadius: 20,
    padding: 28,
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  credTitle: {
    fontSize: 16,
    fontWeight: 800,
    color: "#f2f6fb",
    marginBottom: 16,
    paddingBottom: 12,
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  credRows: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    marginBottom: 24,
  },
  credRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  credLabel: {
    fontSize: 13,
    color: "#5f6b7a",
    fontWeight: 600,
  },
  credValue: {
    fontSize: 13,
    color: "#f2f6fb",
    fontWeight: 700,
    textAlign: "right" as const,
  },
  credCta: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  btnPrimary: {
    display: "block",
    padding: "13px 20px",
    background: "#9BCB3C",
    color: "#0b0f14",
    borderRadius: 12,
    fontWeight: 800,
    fontSize: 15,
    textDecoration: "none",
    textAlign: "center" as const,
    boxShadow: "0 4px 16px rgba(155,203,60,0.35)",
  },
  btnGhost: {
    display: "block",
    padding: "12px 20px",
    background: "rgba(255,255,255,0.07)",
    color: "#f2f6fb",
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 14,
    border: "1px solid rgba(255,255,255,0.12)",
    textDecoration: "none",
    textAlign: "center" as const,
  },
  photosSection: {
    padding: "64px 0",
    background: "#f5f7fb",
    borderTop: "1px solid #e5e9ef",
    borderBottom: "1px solid #e5e9ef",
  },
  photoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginBottom: 12,
  },
  photoWrap: {
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid #e5e9ef",
  },
  photo: {
    width: "100%",
    height: 280,
    objectFit: "cover",
    display: "block",
  },
  photoNote: {
    fontSize: 13,
    color: "#8a96a3",
    fontWeight: 500,
  },
  valuesSection: {
    padding: "64px 0",
  },
  valuesHead: {
    marginBottom: 36,
  },
  lead: {
    fontSize: 16,
    color: "#5f6b7a",
    lineHeight: 1.65,
    fontWeight: 500,
    maxWidth: 600,
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 14,
  },
  valueCard: {
    background: "#f5f7fb",
    border: "1px solid #e5e9ef",
    borderRadius: 16,
    padding: "20px 18px",
  },
  valueTitle: {
    fontSize: 15,
    fontWeight: 800,
    color: "#0b0f14",
    marginBottom: 7,
  },
  valueDesc: {
    fontSize: 14,
    color: "#5f6b7a",
    lineHeight: 1.6,
    fontWeight: 500,
  },
  bottomCta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 32,
    flexWrap: "wrap",
    background: "#f5f7fb",
    border: "1px solid #e5e9ef",
    borderRadius: 18,
    padding: "32px 28px",
  },
  ctaBtns: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    flexShrink: 0,
  },
};

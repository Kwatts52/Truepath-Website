import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CallBar from "@/components/CallBar";

export const metadata: Metadata = {
  title: "Electrical Services – Residential, Commercial & Industrial",
  description:
    "True Path Electrical Services offers troubleshooting, panel upgrades, lighting, EV charger installs, new construction wiring, and commercial/industrial electrical work throughout Central Florida.",
};

const SERVICES = [
  {
    title: "Service & Troubleshooting",
    desc: "Fast, accurate diagnosis is the foundation of every good repair. Whether you have a complete outage, a tripping breaker, flickering lights, or an issue you can't pin down, we find the root cause and fix it safely the first time.",
    items: [
      "Electrical outages and partial power loss",
      "Breaker tripping and panel faults",
      "Flickering or intermittent lights",
      "GFCI and AFCI breaker issues",
      "Code violation corrections",
      "General wiring repairs",
    ],
  },
  {
    title: "Panels & Upgrades",
    desc: "Your electrical panel is the heart of your home or business. We handle full replacements, service upgrades, load calculations, and surge protection to keep your system safe and up to current code.",
    items: [
      "Panel replacements and full upgrades",
      "200-amp and 400-amp service upgrades",
      "Whole-home surge protection",
      "Load calculations for new construction",
      "Sub-panel installations",
      "Code-compliant labeling and inspection prep",
    ],
  },
  {
    title: "Lighting",
    desc: "From recessed cans and ceiling fans to landscape systems and commercial LED retrofits, we design and install lighting that looks great, works reliably, and saves energy.",
    items: [
      "Recessed lighting and ceiling fans",
      "Under-cabinet and accent lighting",
      "Exterior and security lighting",
      "Landscape and pathway lighting",
      "Commercial LED retrofits",
      "Dimmer switches and smart lighting controls",
    ],
  },
  {
    title: "EV Charger Installation",
    desc: "Level 2 EV charger installs done right — with proper dedicated circuits, load evaluation, permits where required, and a clean, professional finish you can count on.",
    items: [
      "Level 2 home charger installs (240V)",
      "Dedicated circuit installation",
      "Load evaluation and panel review",
      "NEMA 14-50 outlet installs",
      "Multi-unit and commercial EV charging",
      "Permit application support",
    ],
  },
  {
    title: "New Construction & Remodels",
    desc: "We work with homeowners, contractors, and developers from rough-in all the way through final inspection. Clean installs, reliable scheduling, and zero shortcuts.",
    items: [
      "Rough-in wiring for new builds",
      "Kitchen and bathroom remodel wiring",
      "Addition and renovation electrical",
      "Final inspection and punch list",
      "Home theater and media room wiring",
      "Whole-home rewires",
    ],
  },
  {
    title: "Commercial & Industrial",
    desc: "We support businesses, warehouses, and industrial facilities with reliable electrical service — from routine maintenance to complex equipment hookups.",
    items: [
      "Commercial service calls and repairs",
      "Equipment hookups and disconnects",
      "3-phase power installation",
      "Lighting retrofits and upgrades",
      "Emergency commercial service",
      "Preventive maintenance support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="What We Do"
        title="Electrical Services for Homes, Businesses & Industry"
        description="Licensed, code-compliant electrical work across Central Florida. From emergency troubleshooting to full new construction wiring — we handle it all."
      />

      <section style={s.section}>
        <div style={s.container}>
          <div style={s.grid}>
            {SERVICES.map((svc) => (
              <div key={svc.title} style={s.card}>
                <h2 style={s.cardTitle}>{svc.title}</h2>
                <p style={s.cardDesc}>{svc.desc}</p>
                <ul style={s.list}>
                  {svc.items.map((item) => (
                    <li key={item} style={s.listItem}>
                      <span style={s.dot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallBar message="Ready to get started? Call or request a quote and we'll get back to you fast." />

      <section style={s.bottomSection}>
        <div style={s.container}>
          <div style={s.bottomGrid}>
            <div style={s.bottomCard}>
              <div style={s.bottomIcon}>🔒</div>
              <h3 style={s.bottomCardTitle}>Licensed & Insured</h3>
              <p style={s.bottomCardText}>
                Every job performed under Florida electrical license EC13015924.
                Fully insured for residential, commercial, and industrial work.
              </p>
            </div>
            <div style={s.bottomCard}>
              <div style={s.bottomIcon}>⚡</div>
              <h3 style={s.bottomCardTitle}>24/7 Emergency Service</h3>
              <p style={s.bottomCardText}>
                Electrical emergencies don't wait for business hours. Call any time
                and we'll prioritize your situation.
              </p>
            </div>
            <div style={s.bottomCard}>
              <div style={s.bottomIcon}>✅</div>
              <h3 style={s.bottomCardTitle}>Code-Compliant Work</h3>
              <p style={s.bottomCardText}>
                All work meets or exceeds Florida electrical code. We pull permits
                where required and stand behind every installation.
              </p>
            </div>
          </div>
          <div style={s.ctaRow}>
            <p style={s.ctaText}>Not sure what you need? Call and we'll help you figure it out.</p>
            <div style={s.ctaBtns}>
              <a href="tel:+13528884468" style={s.btnPrimary}>Call (352) 888-4468</a>
              <Link href="/contact" style={s.btnGhost}>Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    padding: "72px 0",
  },
  container: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
    gap: 20,
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e5e9ef",
    borderRadius: 18,
    padding: "28px 24px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 800,
    color: "#0b0f14",
    marginBottom: 10,
  },
  cardDesc: {
    fontSize: 15,
    color: "#5f6b7a",
    lineHeight: 1.65,
    marginBottom: 16,
    fontWeight: 500,
  },
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    fontSize: 14,
    color: "#1a2230",
    fontWeight: 500,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    background: "#9BCB3C",
    flexShrink: 0,
    marginTop: 5,
  },
  bottomSection: {
    padding: "64px 0",
    background: "#f5f7fb",
    borderTop: "1px solid #e5e9ef",
  },
  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
    marginBottom: 40,
  },
  bottomCard: {
    background: "#ffffff",
    border: "1px solid #e5e9ef",
    borderRadius: 16,
    padding: "22px 20px",
  },
  bottomIcon: {
    fontSize: 28,
    marginBottom: 10,
  },
  bottomCardTitle: {
    fontSize: 16,
    fontWeight: 800,
    color: "#0b0f14",
    marginBottom: 8,
  },
  bottomCardText: {
    fontSize: 14,
    color: "#5f6b7a",
    lineHeight: 1.6,
    fontWeight: 500,
  },
  ctaRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    flexWrap: "wrap",
    background: "#ffffff",
    border: "1px solid #e5e9ef",
    borderRadius: 16,
    padding: "22px 24px",
  },
  ctaText: {
    fontSize: 16,
    fontWeight: 600,
    color: "#0b0f14",
  },
  ctaBtns: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  btnPrimary: {
    padding: "12px 20px",
    background: "#9BCB3C",
    color: "#0b0f14",
    borderRadius: 12,
    fontWeight: 800,
    fontSize: 14,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    boxShadow: "0 4px 14px rgba(155,203,60,0.28)",
  },
  btnGhost: {
    padding: "12px 20px",
    background: "transparent",
    color: "#0b0f14",
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 14,
    border: "1px solid #e5e9ef",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};

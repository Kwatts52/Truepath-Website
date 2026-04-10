import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CallBar from "@/components/CallBar";

export const metadata: Metadata = {
  title: "True Path Electrical Services | Licensed Electrician in Umatilla & Central Florida",
  description:
    "True Path Electrical Services provides licensed residential, commercial, and industrial electrical work in Umatilla and across Central Florida. 24/7 emergency service. Call (352) 888-4468.",
};

const SERVICES = [
  {
    title: "Service & Troubleshooting",
    desc: "Fast diagnosis and safe repairs for outages, faults, breakers, and intermittent issues.",
    icon: "⚡",
  },
  {
    title: "Panels & Upgrades",
    desc: "Panel replacements, surge protection, load calculations, and code-compliant upgrades.",
    icon: "🔌",
  },
  {
    title: "Lighting",
    desc: "Interior, exterior, security, landscape, and commercial lighting installs and retrofits.",
    icon: "💡",
  },
  {
    title: "EV Chargers",
    desc: "Level 2 installs, dedicated circuits, permits, and clean professional finishes.",
    icon: "🚗",
  },
  {
    title: "New Construction & Remodels",
    desc: "Rough-in to final, inspections, and punch list completion.",
    icon: "🏗️",
  },
  {
    title: "Commercial & Industrial",
    desc: "Service calls, maintenance, equipment hookups, and safety-first support.",
    icon: "🏭",
  },
];

const TRUST = [
  { label: "Licensed & Insured", detail: "License #EC13015924" },
  { label: "Owner Operated", detail: "Direct communication, no middlemen" },
  { label: "24/7 Emergency", detail: "Available any time for urgent calls" },
  { label: "Code Compliant", detail: "Every job done to Florida electrical code" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <CallBar />
      <AreaTeaser />
      <WhySection />
    </>
  );
}

function HeroSection() {
  return (
    <section style={s.hero}>
      <div style={s.heroContainer}>
        <div style={s.heroContent}>
          <div style={s.kicker}>Umatilla, FL · Serving Central Florida</div>
          <h1 style={s.h1}>
            Licensed Electrician for{" "}
            <span style={s.accent}>Homes, Businesses &amp; Industrial</span>
          </h1>
          <p style={s.heroLead}>
            True Path Electrical Services delivers safe, code-compliant electrical work
            across Central Florida. Fast response. Clear communication. Done right.
          </p>
          <div style={s.heroCta}>
            <a href="tel:+13528884468" style={s.btnPrimary}>
              Call 24/7 – (352) 888-4468
            </a>
            <Link href="/contact" style={s.btnGhost}>
              Request a Quote
            </Link>
          </div>
          <div style={s.heroTrust}>
            <span style={s.trustDot} />
            Licensed &amp; Insured · EC13015924
            <span style={s.trustSep} />
            <span style={s.trustDot} />
            24/7 Emergency Service
          </div>
        </div>

        <div style={s.heroCard}>
          <div style={s.cardHead}>
            <div style={s.cardTitle}>Quick Contact</div>
            <div style={s.cardSub}>Call or email – fast response guaranteed.</div>
          </div>
          <div style={s.cardRows}>
            {[
              ["Phone", "(352) 888-4468", "tel:+13528884468"],
              ["Email", "cody.watters@truepathfl.com", "mailto:cody.watters@truepathfl.com"],
              ["License", "EC13015924", null],
              ["Hours", "24/7 Emergency", null],
            ].map(([label, value, href]) => (
              <div key={label as string} style={s.cardRow}>
                <span style={s.cardLabel}>{label}</span>
                {href ? (
                  <a href={href as string} style={s.cardValue}>{value}</a>
                ) : (
                  <span style={s.cardValue}>{value}</span>
                )}
              </div>
            ))}
          </div>
          <a href="tel:+13528884468" style={{ ...s.btnPrimary, display: "block", textAlign: "center", marginTop: 8 }}>
            Call Now
          </a>
          <p style={s.cardFine}>Based in Umatilla. Serving all of Central Florida.</p>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section style={s.trustSection}>
      <div style={s.container}>
        <div style={s.trustGrid}>
          {TRUST.map((item) => (
            <div key={item.label} style={s.trustItem}>
              <div style={s.trustIcon}>✓</div>
              <div>
                <div style={s.trustLabel}>{item.label}</div>
                <div style={s.trustDetail}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section style={s.section}>
      <div style={s.container}>
        <div style={s.sectionHead}>
          <div style={s.sectionKicker}>What We Do</div>
          <h2 style={s.h2}>Electrical Services</h2>
          <p style={s.sectionLead}>
            Built for homeowners, businesses, and industrial facilities across Central Florida.
          </p>
        </div>
        <div style={s.serviceGrid}>
          {SERVICES.map((svc) => (
            <Link href="/services" key={svc.title} style={s.tile}>
              <div style={s.tileIcon}>{svc.icon}</div>
              <h3 style={s.tileTitle}>{svc.title}</h3>
              <p style={s.tileDesc}>{svc.desc}</p>
            </Link>
          ))}
        </div>
        <div style={s.seeAll}>
          <Link href="/services" style={s.seeAllLink}>
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}

function AreaTeaser() {
  return (
    <section style={s.areaSection}>
      <div style={s.container}>
        <div style={s.areaSplit}>
          <div>
            <div style={s.sectionKicker}>Where We Work</div>
            <h2 style={s.h2}>Serving Central Florida</h2>
            <p style={s.sectionLead}>
              Based in Umatilla, we cover Lake, Orange, Seminole, and Osceola counties
              and the communities in between.
            </p>
            <div style={s.areaList}>
              {["Umatilla", "Tavares", "Eustis", "Mount Dora", "Leesburg", "Clermont",
                "Apopka", "Orlando", "Sanford", "Kissimmee"].map((city) => (
                <span key={city} style={s.areaBadge}>{city}</span>
              ))}
            </div>
            <Link href="/service-areas" style={{ ...s.btnPrimary, marginTop: 20, display: "inline-block" }}>
              See Full Service Area
            </Link>
          </div>
          <div style={s.areaBox}>
            <div style={s.areaBoxInner}>
              <div style={s.areaBoxTitle}>Central Florida Coverage</div>
              <p style={s.areaBoxText}>
                If you are in Central Florida and need a licensed electrician,
                call us. We likely cover your area.
              </p>
              <a href="tel:+13528884468" style={s.areaBoxPhone}>
                (352) 888-4468
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section style={{ ...s.section, background: "#f5f7fb", borderTop: "1px solid #e5e9ef" }}>
      <div style={s.container}>
        <div style={s.whySplit}>
          <div>
            <div style={s.sectionKicker}>Why True Path</div>
            <h2 style={s.h2}>Clean Work. Clear Communication.</h2>
            <p style={{ ...s.sectionLead, marginBottom: 20 }}>
              True Path Electrical Services is a solo owner-operated company built on trust,
              safety, and doing things the right way — every single time.
            </p>
            <div style={s.whyList}>
              {[
                "Code-compliant installations on every job",
                "Clear upfront pricing — no surprises",
                "You talk directly to the electrician",
                "Clean, professional workmanship",
                "Available for emergencies any time",
              ].map((item) => (
                <div key={item} style={s.whyItem}>
                  <div style={s.whyCheck}>✓</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" style={{ ...s.btnGhost, marginTop: 20, display: "inline-block" }}>
              Learn More About Us
            </Link>
          </div>
          <div>
            <div style={s.photoGrid}>
              <Image
                src="/work-1.jpg"
                alt="Electrical panel work by True Path Electrical"
                width={300}
                height={200}
                style={s.workPhoto}
              />
              <Image
                src="/work-2.jpg"
                alt="Professional electrical installation"
                width={300}
                height={200}
                style={s.workPhoto}
              />
            </div>
            <div style={s.badges}>
              {["Licensed & Insured", "Code Compliant", "Residential", "Commercial", "Industrial", "24/7 Emergency"].map((b) => (
                <span key={b} style={s.badge}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(160deg, #f5f7fb 0%, #edf3e8 60%, #e8f0e0 100%)",
    padding: "64px 0 56px",
    borderBottom: "1px solid #e5e9ef",
  },
  heroContainer: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 40,
    alignItems: "start",
  },
  heroContent: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
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
    marginBottom: 16,
    width: "fit-content",
  },
  h1: {
    fontSize: "clamp(30px, 4.5vw, 48px)",
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
    color: "#0b0f14",
    marginBottom: 16,
  },
  accent: {
    color: "#7fb32f",
  },
  heroLead: {
    fontSize: 18,
    color: "#5f6b7a",
    lineHeight: 1.65,
    maxWidth: 540,
    marginBottom: 24,
    fontWeight: 500,
  },
  heroCta: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 20,
  },
  heroTrust: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 14,
    color: "#5f6b7a",
    fontWeight: 600,
  },
  trustDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: "#9BCB3C",
    display: "inline-block",
    flexShrink: 0,
  },
  trustSep: {
    width: 1,
    height: 14,
    background: "#e5e9ef",
    display: "inline-block",
    margin: "0 4px",
  },
  heroCard: {
    background: "#ffffff",
    border: "1px solid #e5e9ef",
    borderRadius: 20,
    padding: 24,
    boxShadow: "0 16px 50px rgba(0,0,0,0.09)",
  },
  cardHead: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 800,
    color: "#0b0f14",
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 14,
    color: "#5f6b7a",
    fontWeight: 500,
  },
  cardRows: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    marginBottom: 16,
    border: "1px solid #f0f3f7",
    borderRadius: 12,
    overflow: "hidden",
  },
  cardRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    padding: "11px 14px",
    borderBottom: "1px solid #f0f3f7",
  },
  cardLabel: {
    fontSize: 13,
    color: "#8a96a3",
    fontWeight: 600,
    flexShrink: 0,
  },
  cardValue: {
    fontSize: 14,
    fontWeight: 700,
    color: "#0b0f14",
    textAlign: "right" as const,
  },
  cardFine: {
    fontSize: 12,
    color: "#8a96a3",
    textAlign: "center" as const,
    marginTop: 8,
    fontWeight: 500,
  },
  btnPrimary: {
    padding: "13px 22px",
    background: "#9BCB3C",
    color: "#0b0f14",
    borderRadius: 12,
    fontWeight: 800,
    fontSize: 15,
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 6px 20px rgba(155,203,60,0.30)",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  btnGhost: {
    padding: "13px 22px",
    background: "#ffffff",
    color: "#0b0f14",
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 15,
    border: "1px solid #e5e9ef",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  trustSection: {
    background: "#0b0f14",
    padding: "28px 0",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  container: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 20px",
  },
  trustGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
  },
  trustItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  },
  trustIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    background: "#9BCB3C",
    color: "#0b0f14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: 14,
    flexShrink: 0,
  },
  trustLabel: {
    fontSize: 14,
    fontWeight: 700,
    color: "#f2f6fb",
    lineHeight: 1.3,
  },
  trustDetail: {
    fontSize: 12,
    color: "#5f6b7a",
    fontWeight: 500,
    marginTop: 2,
  },
  section: {
    padding: "72px 0",
  },
  sectionHead: {
    marginBottom: 36,
  },
  sectionKicker: {
    display: "inline-block",
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.09em",
    color: "#7fb32f",
    background: "rgba(155,203,60,0.10)",
    border: "1px solid rgba(155,203,60,0.22)",
    padding: "5px 10px",
    borderRadius: 999,
    marginBottom: 10,
  },
  h2: {
    fontSize: "clamp(24px, 3vw, 36px)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    color: "#0b0f14",
    margin: "0 0 10px",
  },
  sectionLead: {
    fontSize: 17,
    color: "#5f6b7a",
    lineHeight: 1.65,
    maxWidth: 600,
    fontWeight: 500,
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 16,
  },
  tile: {
    background: "#ffffff",
    border: "1px solid #e5e9ef",
    borderRadius: 16,
    padding: "22px 20px",
    display: "block",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textDecoration: "none",
  },
  tileIcon: {
    fontSize: 28,
    marginBottom: 10,
  },
  tileTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#0b0f14",
    marginBottom: 6,
  },
  tileDesc: {
    fontSize: 14,
    color: "#5f6b7a",
    lineHeight: 1.6,
  },
  seeAll: {
    marginTop: 28,
    textAlign: "center",
  },
  seeAllLink: {
    fontSize: 15,
    fontWeight: 700,
    color: "#7fb32f",
  },
  areaSection: {
    padding: "72px 0",
    background: "#ffffff",
    borderTop: "1px solid #e5e9ef",
  },
  areaSplit: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "start",
  },
  areaList: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 16,
  },
  areaBadge: {
    padding: "6px 12px",
    background: "#f5f7fb",
    border: "1px solid #e5e9ef",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    color: "#1a2230",
  },
  areaBox: {
    background: "linear-gradient(135deg, #0b0f14 0%, #1a2230 100%)",
    borderRadius: 20,
    padding: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 280,
    border: "1px solid rgba(255,255,255,0.06)",
  },
  areaBoxInner: {
    textAlign: "center",
  },
  areaBoxTitle: {
    fontSize: 20,
    fontWeight: 800,
    color: "#f2f6fb",
    marginBottom: 12,
  },
  areaBoxText: {
    fontSize: 15,
    color: "#8a96a3",
    lineHeight: 1.6,
    marginBottom: 20,
  },
  areaBoxPhone: {
    fontSize: 22,
    fontWeight: 800,
    color: "#9BCB3C",
    textDecoration: "none",
  },
  whySplit: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 56,
    alignItems: "start",
  },
  whyList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  whyItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    fontSize: 15,
    color: "#1a2230",
    fontWeight: 500,
  },
  whyCheck: {
    width: 22,
    height: 22,
    borderRadius: 6,
    background: "rgba(155,203,60,0.15)",
    color: "#7fb32f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 12,
    flexShrink: 0,
    marginTop: 1,
  },
  photoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 16,
  },
  workPhoto: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 14,
    border: "1px solid #e5e9ef",
  },
  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
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
};

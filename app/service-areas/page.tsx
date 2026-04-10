import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CallBar from "@/components/CallBar";

export const metadata: Metadata = {
  title: "Service Areas – Central Florida Electrician",
  description:
    "True Path Electrical Services covers Umatilla, Lake County, Orange County, Seminole County, Osceola County, and all of Central Florida. Licensed electrician available 24/7.",
};

const COUNTIES = [
  {
    name: "Lake County",
    cities: ["Umatilla", "Tavares", "Eustis", "Mount Dora", "Leesburg", "Clermont", "Minneola", "Groveland", "Lady Lake", "Fruitland Park"],
  },
  {
    name: "Orange County",
    cities: ["Orlando", "Apopka", "Ocoee", "Winter Garden", "Lake Buena Vista", "Winter Park", "Maitland", "Edgewood"],
  },
  {
    name: "Seminole County",
    cities: ["Sanford", "Altamonte Springs", "Lake Mary", "Oviedo", "Longwood", "Casselberry", "Winter Springs"],
  },
  {
    name: "Osceola County",
    cities: ["Kissimmee", "St. Cloud", "Celebration", "Harmony", "Poinciana"],
  },
];

const BENEFITS = [
  {
    title: "Same-Day Response",
    desc: "We aim for same-day or next-day service for non-emergency calls. Emergency calls are prioritized immediately.",
  },
  {
    title: "Local Knowledge",
    desc: "Based in Umatilla, we understand the electrical infrastructure, permit requirements, and code specifics across the region.",
  },
  {
    title: "No Travel Surcharges",
    desc: "Straightforward pricing within our core service area. No surprise fees for working in the communities we serve.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        kicker="Where We Work"
        title="Serving Central Florida from Umatilla"
        description="Licensed electrical services across Lake, Orange, Seminole, and Osceola counties. If you're in Central Florida, we're likely your electrician."
      />

      <section style={s.section}>
        <div style={s.container}>
          <div style={s.intro}>
            <div style={s.introText}>
              <h2 style={s.h2}>Our Coverage Area</h2>
              <p style={s.lead}>
                True Path Electrical Services is based in Umatilla, FL and covers a wide area
                throughout Central Florida. Whether you need residential service in a quiet Lake County
                suburb or commercial electrical work in Orlando, we have you covered.
              </p>
              <p style={{ ...s.lead, marginTop: 12 }}>
                Don't see your city listed? Call us anyway — if you're in Central Florida,
                there's a good chance we service your area.
              </p>
              <a href="tel:+13528884468" style={s.btnPrimary}>
                Call to Confirm Your Area – (352) 888-4468
              </a>
            </div>
            <div style={s.contactBox}>
              <div style={s.contactBoxTitle}>Get Service Today</div>
              <p style={s.contactBoxText}>
                Call now or request a quote and we'll confirm availability in your area.
              </p>
              <div style={s.contactBoxLinks}>
                <a href="tel:+13528884468" style={s.contactBoxPhone}>(352) 888-4468</a>
                <Link href="/contact" style={s.contactBoxLink}>Request a Quote →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={s.countiesSection}>
        <div style={s.container}>
          <h2 style={{ ...s.h2, marginBottom: 32 }}>Coverage by County</h2>
          <div style={s.countiesGrid}>
            {COUNTIES.map((county) => (
              <div key={county.name} style={s.countyCard}>
                <h3 style={s.countyTitle}>{county.name}</h3>
                <ul style={s.cityList}>
                  {county.cities.map((city) => (
                    <li key={city} style={s.cityItem}>
                      <span style={s.cityDot} />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={s.noteListed}>
            <span style={s.noteIcon}>📍</span>
            <div>
              <strong>Not listed?</strong> Call (352) 888-4468 or{" "}
              <Link href="/contact" style={s.noteLink}>send a message</Link>. We cover a wide area
              and may well service your location.
            </div>
          </div>
        </div>
      </section>

      <CallBar message="Need an electrician in Central Florida? We're ready to help — call 24/7." />

      <section style={{ ...s.section, background: "#f5f7fb", borderTop: "1px solid #e5e9ef" }}>
        <div style={s.container}>
          <h2 style={{ ...s.h2, marginBottom: 32 }}>Why Customers in Central Florida Choose Us</h2>
          <div style={s.benefitsGrid}>
            {BENEFITS.map((b) => (
              <div key={b.title} style={s.benefitCard}>
                <h3 style={s.benefitTitle}>{b.title}</h3>
                <p style={s.benefitText}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={s.section}>
        <div style={s.container}>
          <div style={s.bottomCta}>
            <div>
              <h2 style={s.h2}>Ready to Schedule Service?</h2>
              <p style={s.lead}>
                Call now for immediate assistance or submit a request and we'll follow up promptly.
              </p>
            </div>
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
    padding: "64px 0",
  },
  container: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 20px",
  },
  intro: {
    display: "grid",
    gridTemplateColumns: "1fr 0.45fr",
    gap: 40,
    alignItems: "start",
  },
  introText: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  h2: {
    fontSize: "clamp(22px, 3vw, 32px)",
    fontWeight: 800,
    color: "#0b0f14",
    letterSpacing: "-0.02em",
    margin: "0 0 12px",
  },
  lead: {
    fontSize: 16,
    color: "#5f6b7a",
    lineHeight: 1.65,
    fontWeight: 500,
  },
  btnPrimary: {
    display: "inline-block",
    marginTop: 16,
    padding: "13px 22px",
    background: "#9BCB3C",
    color: "#0b0f14",
    borderRadius: 12,
    fontWeight: 800,
    fontSize: 15,
    textDecoration: "none",
    whiteSpace: "nowrap",
    boxShadow: "0 4px 16px rgba(155,203,60,0.28)",
  },
  btnGhost: {
    display: "inline-block",
    padding: "13px 22px",
    background: "transparent",
    color: "#0b0f14",
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 15,
    border: "1px solid #e5e9ef",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  contactBox: {
    background: "#0b0f14",
    borderRadius: 18,
    padding: 28,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  contactBoxTitle: {
    fontSize: 18,
    fontWeight: 800,
    color: "#f2f6fb",
  },
  contactBoxText: {
    fontSize: 14,
    color: "#8a96a3",
    lineHeight: 1.6,
  },
  contactBoxLinks: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginTop: 4,
  },
  contactBoxPhone: {
    fontSize: 22,
    fontWeight: 800,
    color: "#9BCB3C",
    textDecoration: "none",
  },
  contactBoxLink: {
    fontSize: 14,
    color: "#8a96a3",
    fontWeight: 600,
    textDecoration: "none",
  },
  countiesSection: {
    padding: "64px 0",
    background: "#f5f7fb",
    borderTop: "1px solid #e5e9ef",
    borderBottom: "1px solid #e5e9ef",
  },
  countiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
    marginBottom: 24,
  },
  countyCard: {
    background: "#ffffff",
    border: "1px solid #e5e9ef",
    borderRadius: 16,
    padding: "20px 18px",
  },
  countyTitle: {
    fontSize: 16,
    fontWeight: 800,
    color: "#0b0f14",
    marginBottom: 14,
    paddingBottom: 10,
    borderBottom: "1px solid #f0f3f7",
  },
  cityList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 7,
  },
  cityItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 14,
    color: "#1a2230",
    fontWeight: 500,
  },
  cityDot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: "#9BCB3C",
    flexShrink: 0,
  },
  noteListed: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    background: "#fff",
    border: "1px solid #e5e9ef",
    borderRadius: 14,
    padding: "16px 18px",
    fontSize: 15,
    color: "#1a2230",
    fontWeight: 500,
    lineHeight: 1.6,
  },
  noteIcon: {
    fontSize: 20,
    flexShrink: 0,
  },
  noteLink: {
    color: "#7fb32f",
    fontWeight: 700,
    textDecoration: "none",
  },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 16,
  },
  benefitCard: {
    background: "#ffffff",
    border: "1px solid #e5e9ef",
    borderRadius: 16,
    padding: "22px 20px",
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: 800,
    color: "#0b0f14",
    marginBottom: 8,
  },
  benefitText: {
    fontSize: 14,
    color: "#5f6b7a",
    lineHeight: 1.65,
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

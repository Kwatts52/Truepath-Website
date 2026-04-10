import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.container}>
        <div style={s.grid}>
          <div style={s.col}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="True Path Electrical Services"
                width={150}
                height={48}
                style={{ height: 44, width: "auto", objectFit: "contain", marginBottom: 12 }}
              />
            </Link>
            <p style={s.tagline}>
              Licensed electrician serving Umatilla and Central Florida.
              Residential, commercial, and industrial.
            </p>
            <div style={s.license}>License #EC13015924</div>
          </div>

          <div style={s.col}>
            <div style={s.colTitle}>Navigation</div>
            <nav style={s.navList}>
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} style={s.navLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div style={s.col}>
            <div style={s.colTitle}>Contact</div>
            <div style={s.contactList}>
              <a href="tel:+13528884468" style={s.contactLink}>
                (352) 888-4468
              </a>
              <a href="mailto:cody.watters@truepathfl.com" style={s.contactLink}>
                cody.watters@truepathfl.com
              </a>
              <div style={s.contactMuted}>Umatilla, FL 32784</div>
              <div style={s.contactMuted}>24/7 Emergency Service</div>
            </div>
          </div>

          <div style={s.col}>
            <div style={s.colTitle}>Service Areas</div>
            <p style={s.areaText}>
              Lake, Orange, Seminole, and Osceola counties. Umatilla, Tavares, Eustis,
              Mount Dora, Leesburg, Clermont, Apopka, Orlando, and more.
            </p>
            <Link href="/service-areas" style={s.areaLink}>
              View full service area →
            </Link>
          </div>
        </div>

        <div style={s.bottom}>
          <div style={s.bottomText}>
            © {new Date().getFullYear()} True Path Electrical Services, LLC. All rights reserved.
          </div>
          <div style={s.bottomText}>
            Serving Central Florida with licensed, code-compliant electrical work.
          </div>
        </div>
      </div>
    </footer>
  );
}

const s: Record<string, React.CSSProperties> = {
  footer: {
    background: "#0b0f14",
    color: "#f2f6fb",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: 56,
    paddingBottom: 32,
  },
  container: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: 40,
    marginBottom: 48,
  },
  col: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  tagline: {
    fontSize: 14,
    color: "#8a96a3",
    lineHeight: 1.6,
    maxWidth: 260,
  },
  license: {
    fontSize: 13,
    color: "#5f6b7a",
    fontWeight: 600,
    marginTop: 4,
  },
  colTitle: {
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    color: "#5f6b7a",
    marginBottom: 8,
  },
  navList: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  navLink: {
    fontSize: 14,
    color: "#8a96a3",
    fontWeight: 500,
    transition: "color 0.15s ease",
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  contactLink: {
    fontSize: 14,
    color: "#9BCB3C",
    fontWeight: 600,
  },
  contactMuted: {
    fontSize: 14,
    color: "#8a96a3",
  },
  areaText: {
    fontSize: 13,
    color: "#8a96a3",
    lineHeight: 1.6,
  },
  areaLink: {
    fontSize: 13,
    color: "#9BCB3C",
    fontWeight: 600,
    marginTop: 4,
  },
  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap" as const,
    gap: 8,
  },
  bottomText: {
    fontSize: 13,
    color: "#5f6b7a",
  },
};

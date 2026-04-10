"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header style={styles.header(scrolled)}>
      <div style={styles.inner}>
        <Link href="/" style={styles.brand} aria-label="True Path Electrical Services – Home">
          <Image
            src="/logo.png"
            alt="True Path Electrical Services"
            width={180}
            height={64}
            priority
            style={{ height: 56, width: "auto", objectFit: "contain" }}
          />
        </Link>

        <nav style={styles.desktopNav} className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={styles.navLink(pathname === link.href)}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+13528884468" style={styles.callBtn}>
            (352) 888-4468
          </a>
        </nav>

        <button
          style={styles.toggle}
          className="mobile-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span style={styles.bar(menuOpen, 0)} />
          <span style={styles.bar(menuOpen, 1)} />
          <span style={styles.bar(menuOpen, 2)} />
        </button>
      </div>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={styles.mobileLink(pathname === link.href)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+13528884468" style={styles.mobileCallBtn}>
            Call Now – (352) 888-4468
          </a>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: (scrolled: boolean): React.CSSProperties => ({
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "saturate(180%) blur(16px)",
    borderBottom: "1px solid #e5e9ef",
    boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
    transition: "box-shadow 0.2s ease",
  }),
  inner: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 72,
    gap: 16,
  } as React.CSSProperties,
  brand: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  } as React.CSSProperties,
  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    "@media (max-width: 768px)": { display: "none" },
  } as React.CSSProperties,
  navLink: (active: boolean): React.CSSProperties => ({
    padding: "8px 12px",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 15,
    color: active ? "#0b0f14" : "#5f6b7a",
    background: active ? "#eef6db" : "transparent",
    transition: "all 0.15s ease",
    whiteSpace: "nowrap",
  }),
  callBtn: {
    marginLeft: 8,
    padding: "9px 18px",
    background: "#9BCB3C",
    color: "#0b0f14",
    borderRadius: 999,
    fontWeight: 800,
    fontSize: 14,
    whiteSpace: "nowrap",
    transition: "all 0.2s ease",
    boxShadow: "0 4px 14px rgba(155,203,60,0.30)",
  } as React.CSSProperties,
  toggle: {
    display: "none",
    background: "none",
    border: "1px solid #e5e9ef",
    borderRadius: 10,
    padding: "8px 10px",
    cursor: "pointer",
    flexDirection: "column" as const,
    gap: 5,
    width: 42,
    alignItems: "center",
  } as React.CSSProperties,
  bar: (open: boolean, idx: number): React.CSSProperties => ({
    display: "block",
    width: 20,
    height: 2,
    background: "#0b0f14",
    borderRadius: 2,
    transition: "all 0.2s ease",
    transform:
      open && idx === 0
        ? "rotate(45deg) translate(5px, 5px)"
        : open && idx === 1
        ? "scaleX(0)"
        : open && idx === 2
        ? "rotate(-45deg) translate(5px, -5px)"
        : "none",
    opacity: open && idx === 1 ? 0 : 1,
  }),
  mobileMenu: {
    borderTop: "1px solid #e5e9ef",
    background: "#ffffff",
    padding: "12px 20px 20px",
    display: "flex",
    flexDirection: "column" as const,
    gap: 4,
  } as React.CSSProperties,
  mobileLink: (active: boolean): React.CSSProperties => ({
    padding: "12px 14px",
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 15,
    color: active ? "#0b0f14" : "#5f6b7a",
    background: active ? "#eef6db" : "transparent",
    transition: "all 0.15s ease",
  }),
  mobileCallBtn: {
    marginTop: 8,
    padding: "13px 18px",
    background: "#9BCB3C",
    color: "#0b0f14",
    borderRadius: 12,
    fontWeight: 800,
    fontSize: 15,
    textAlign: "center" as const,
    boxShadow: "0 4px 14px rgba(155,203,60,0.30)",
  } as React.CSSProperties,
};

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact – Get a Quote or Call for Emergency Service",
  description:
    "Contact True Path Electrical Services for emergency electrical service, quotes, or general inquiries. Call (352) 888-4468 or send a message. We serve all of Central Florida.",
};

const CONTACT_DETAILS = [
  { label: "Phone", value: "(352) 888-4468", href: "tel:+13528884468" },
  { label: "Email", value: "cody.watters@truepathfl.com", href: "mailto:cody.watters@truepathfl.com" },
  { label: "License", value: "EC13015924", href: null },
  { label: "Location", value: "Umatilla, FL 32784", href: null },
  { label: "Emergency", value: "Available 24/7", href: null },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get in Touch"
        title="Request a Quote or Call for Emergency Service"
        description="For emergencies call immediately. For planned work or general questions, fill out the form and we'll get back to you fast."
      />

      <section style={s.section}>
        <div style={s.container}>
          <div style={s.layout}>
            <div style={s.leftCol}>
              <div style={s.infoCard}>
                <h2 style={s.infoTitle}>Contact Information</h2>
                <p style={s.infoText}>
                  For emergencies, call right now — we answer 24/7.
                  For quotes and non-urgent questions, use the form or email.
                </p>

                <div style={s.contactList}>
                  {CONTACT_DETAILS.map((c) => (
                    <div key={c.label} style={s.contactRow}>
                      <span style={s.contactLabel}>{c.label}</span>
                      {c.href ? (
                        <a href={c.href} style={s.contactValue}>{c.value}</a>
                      ) : (
                        <span style={s.contactValuePlain}>{c.value}</span>
                      )}
                    </div>
                  ))}
                </div>

                <a href="tel:+13528884468" style={s.callBtn}>
                  Call Now – (352) 888-4468
                </a>
              </div>

              <div style={s.emergencyCard}>
                <div style={s.emergencyIcon}>⚡</div>
                <div>
                  <div style={s.emergencyTitle}>24/7 Emergency Service</div>
                  <p style={s.emergencyText}>
                    Electrical emergencies need immediate attention. Don't wait —
                    call us any time of day or night.
                  </p>
                </div>
              </div>

              <div style={s.serviceAreaNote}>
                <strong>Serving Central Florida</strong>
                <p style={s.serviceAreaText}>
                  Based in Umatilla. We cover Lake, Orange, Seminole, and Osceola counties.{" "}
                  <Link href="/service-areas" style={s.areaLink}>View full service area →</Link>
                </p>
              </div>
            </div>

            <div style={s.formCol}>
              <div style={s.formCard}>
                <h2 style={s.formTitle}>Send a Message</h2>
                <p style={s.formSub}>
                  Fill out the form and we'll respond promptly to schedule service or provide a quote.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    padding: "64px 0 80px",
  },
  container: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "0 20px",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "0.85fr 1.15fr",
    gap: 32,
    alignItems: "start",
  },
  leftCol: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  infoCard: {
    background: "#0b0f14",
    borderRadius: 20,
    padding: 28,
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 800,
    color: "#f2f6fb",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#8a96a3",
    lineHeight: 1.6,
    fontWeight: 500,
    marginBottom: 20,
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    marginBottom: 24,
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 12,
    overflow: "hidden",
  },
  contactRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    padding: "11px 14px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  contactLabel: {
    fontSize: 13,
    color: "#5f6b7a",
    fontWeight: 600,
    flexShrink: 0,
  },
  contactValue: {
    fontSize: 13,
    fontWeight: 700,
    color: "#9BCB3C",
    textDecoration: "none",
    textAlign: "right" as const,
  },
  contactValuePlain: {
    fontSize: 13,
    fontWeight: 700,
    color: "#f2f6fb",
    textAlign: "right" as const,
  },
  callBtn: {
    display: "block",
    padding: "13px 20px",
    background: "#9BCB3C",
    color: "#0b0f14",
    borderRadius: 12,
    fontWeight: 800,
    fontSize: 15,
    textAlign: "center" as const,
    textDecoration: "none",
    boxShadow: "0 4px 16px rgba(155,203,60,0.35)",
  },
  emergencyCard: {
    background: "#f5f7fb",
    border: "1px solid #e5e9ef",
    borderRadius: 14,
    padding: "16px 18px",
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  },
  emergencyIcon: {
    fontSize: 22,
    flexShrink: 0,
    marginTop: 2,
  },
  emergencyTitle: {
    fontSize: 14,
    fontWeight: 800,
    color: "#0b0f14",
    marginBottom: 4,
  },
  emergencyText: {
    fontSize: 13,
    color: "#5f6b7a",
    lineHeight: 1.6,
    fontWeight: 500,
  },
  serviceAreaNote: {
    background: "#f5f7fb",
    border: "1px solid #e5e9ef",
    borderRadius: 14,
    padding: "16px 18px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontSize: 14,
    color: "#0b0f14",
    fontWeight: 700,
  },
  serviceAreaText: {
    fontSize: 14,
    color: "#5f6b7a",
    lineHeight: 1.6,
    fontWeight: 500,
  },
  areaLink: {
    color: "#7fb32f",
    fontWeight: 700,
    textDecoration: "none",
  },
  formCol: {},
  formCard: {
    background: "#ffffff",
    border: "1px solid #e5e9ef",
    borderRadius: 20,
    padding: "28px 24px",
    boxShadow: "0 8px 28px rgba(0,0,0,0.06)",
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 800,
    color: "#0b0f14",
    marginBottom: 6,
  },
  formSub: {
    fontSize: 14,
    color: "#5f6b7a",
    fontWeight: 500,
    marginBottom: 20,
    lineHeight: 1.6,
  },
};

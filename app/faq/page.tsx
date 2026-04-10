"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CallBar from "@/components/CallBar";

const FAQS = [
  {
    q: "Do you offer 24/7 emergency electrical service?",
    a: "Yes. If you have an electrical emergency — sparking outlets, a burning smell, a complete power outage, or any situation that feels unsafe — call us immediately at (352) 888-4468. We take emergency calls at any hour.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. True Path Electrical Services holds Florida Electrical Contractor License EC13015924. We are fully licensed and insured for residential, commercial, and industrial electrical work throughout Florida.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Umatilla, FL and serve all of Central Florida including Lake, Orange, Seminole, and Osceola counties. Common areas include Tavares, Eustis, Mount Dora, Leesburg, Clermont, Apopka, Orlando, Sanford, and Kissimmee. If you're not sure, just call.",
  },
  {
    q: "How do I know if I need a panel upgrade?",
    a: "Signs you may need a panel upgrade include frequent breaker trips, a panel that feels warm to the touch, flickering lights, outlets that don't work, a fuse box (rather than breakers), or adding major appliances or an EV charger. Call us and we'll assess your situation.",
  },
  {
    q: "Do you pull permits for your work?",
    a: "Yes, where required by Florida code. Permitted work protects you as the homeowner — it ensures the installation is inspected and code-compliant. We handle the permit process as part of qualifying jobs.",
  },
  {
    q: "Can you install an EV charger at my home?",
    a: "Yes. We install Level 2 (240V) home EV chargers including the dedicated circuit, permit filing where required, and NEMA 14-50 outlets. We can evaluate your panel capacity and recommend the right setup for your vehicle.",
  },
  {
    q: "How quickly can you respond?",
    a: "For emergency situations, we respond as fast as possible — often same day. For non-emergency appointments, we typically schedule within one to two business days depending on current demand.",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes. We work with businesses, warehouses, and light industrial facilities throughout Central Florida. Services include service calls, equipment hookups, commercial lighting, maintenance, and 3-phase electrical.",
  },
  {
    q: "What's the best way to get a quote?",
    a: "Call us at (352) 888-4468 for a quick phone estimate on simpler jobs. For larger or more complex projects, use the contact form on this site and we'll set up an on-site assessment.",
  },
  {
    q: "Are you owner-operated?",
    a: "Yes. True Path is currently a solo owner-operated company. When you call, you talk directly to the electrician who will be doing your work. No call centers, no dispatch delays, no middlemen.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        kicker="Common Questions"
        title="Frequently Asked Questions"
        description="Answers to the things customers ask most often. Still have a question? Just call."
      />

      <section style={s.section}>
        <div style={s.container}>
          <div style={s.layout}>
            <div style={s.faqList}>
              {FAQS.map((item, idx) => (
                <FAQItem key={idx} q={item.q} a={item.a} />
              ))}
            </div>

            <div style={s.sidebar}>
              <div style={s.sideCard}>
                <div style={s.sideTitle}>Still Have Questions?</div>
                <p style={s.sideText}>
                  Call us directly and we'll answer anything you need to know before booking.
                </p>
                <a href="tel:+13528884468" style={s.btnPrimary}>(352) 888-4468</a>
              </div>

              <div style={s.sideCard}>
                <div style={s.sideTitle}>Request a Quote</div>
                <p style={s.sideText}>
                  Describe your project and we'll follow up with an estimate.
                </p>
                <Link href="/contact" style={s.btnGhost}>Send a Message →</Link>
              </div>

              <div style={s.sideCard}>
                <div style={s.sideTitle}>Credentials</div>
                <div style={s.credList}>
                  <div style={s.credItem}><strong>License</strong><span>EC13015924</span></div>
                  <div style={s.credItem}><strong>Type</strong><span>Electrical Contractor</span></div>
                  <div style={s.credItem}><strong>Coverage</strong><span>Central Florida</span></div>
                  <div style={s.credItem}><strong>Emergency</strong><span>24/7 Available</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallBar />
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={s.item}>
      <button style={s.question} onClick={() => setOpen((o) => !o)}>
        <span>{q}</span>
        <span style={iconStyle(open)}>{open ? "−" : "+"}</span>
      </button>
      {open && <div style={s.answer}>{a}</div>}
    </div>
  );
}

function iconStyle(open: boolean): React.CSSProperties {
  return {
    width: 28,
    height: 28,
    borderRadius: 8,
    background: open ? "#9BCB3C" : "#f5f7fb",
    color: open ? "#0b0f14" : "#5f6b7a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 18,
    flexShrink: 0,
    transition: "all 0.2s ease",
  };
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
    gridTemplateColumns: "1fr 0.38fr",
    gap: 40,
    alignItems: "start",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  item: {
    background: "#ffffff",
    border: "1px solid #e5e9ef",
    borderRadius: 14,
    overflow: "hidden",
  },
  question: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    padding: "18px 20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    textAlign: "left" as const,
    fontSize: 15,
    fontWeight: 700,
    color: "#0b0f14",
    lineHeight: 1.4,
  },
  answer: {
    padding: "0 20px 18px",
    fontSize: 15,
    color: "#3a4452",
    lineHeight: 1.7,
    fontWeight: 500,
    borderTop: "1px solid #f0f3f7",
    paddingTop: 14,
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    position: "sticky",
    top: 92,
  },
  sideCard: {
    background: "#f5f7fb",
    border: "1px solid #e5e9ef",
    borderRadius: 16,
    padding: "20px 18px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  sideTitle: {
    fontSize: 15,
    fontWeight: 800,
    color: "#0b0f14",
  },
  sideText: {
    fontSize: 14,
    color: "#5f6b7a",
    lineHeight: 1.6,
    fontWeight: 500,
  },
  btnPrimary: {
    display: "block",
    padding: "12px 16px",
    background: "#9BCB3C",
    color: "#0b0f14",
    borderRadius: 10,
    fontWeight: 800,
    fontSize: 14,
    textDecoration: "none",
    textAlign: "center" as const,
    marginTop: 4,
    boxShadow: "0 4px 14px rgba(155,203,60,0.28)",
  },
  btnGhost: {
    display: "block",
    padding: "11px 16px",
    background: "transparent",
    color: "#0b0f14",
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 14,
    border: "1px solid #e5e9ef",
    textDecoration: "none",
    textAlign: "center" as const,
    marginTop: 4,
  },
  credList: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginTop: 4,
  },
  credItem: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13,
    color: "#1a2230",
    fontWeight: 500,
    paddingBottom: 7,
    borderBottom: "1px solid #f0f3f7",
  },
};

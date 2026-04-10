"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type FormState = "idle" | "loading" | "success" | "error";

const SERVICE_TYPES = [
  "Choose one",
  "Troubleshooting / Repair",
  "Panel upgrade",
  "Lighting",
  "EV charger install",
  "New construction / remodel",
  "Commercial / industrial",
  "Other",
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name as string,
      phone: (data.phone as string) || "",
      email: (data.email as string) || "",
      service_type: data.service_type as string,
      message: data.message as string,
    });

    if (error) {
      setState("error");
      setErrorMsg("Something went wrong. Please call us directly at (352) 888-4468.");
    } else {
      setState("success");
      form.reset();
    }
  }

  if (state === "success") {
    return (
      <div style={s.success}>
        <div style={s.successIcon}>✓</div>
        <h3 style={s.successTitle}>Message Received!</h3>
        <p style={s.successText}>
          Thanks for reaching out. We'll follow up with you shortly.
          For urgent matters, call us directly at{" "}
          <a href="tel:+13528884468" style={s.successPhone}>(352) 888-4468</a>.
        </p>
        <button style={s.resetBtn} onClick={() => setState("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={s.form} noValidate>
      <div style={s.row}>
        <div style={s.field}>
          <label style={s.label} htmlFor="name">Name *</label>
          <input
            style={s.input}
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>
        <div style={s.field}>
          <label style={s.label} htmlFor="phone">Phone</label>
          <input
            style={s.input}
            id="phone"
            name="phone"
            type="tel"
            placeholder="(###) ###-####"
          />
        </div>
      </div>

      <div style={s.field}>
        <label style={s.label} htmlFor="email">Email (optional)</label>
        <input
          style={s.input}
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
        />
      </div>

      <div style={s.field}>
        <label style={s.label} htmlFor="service_type">Service Type</label>
        <select style={s.select} id="service_type" name="service_type" defaultValue="Choose one">
          {SERVICE_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div style={s.field}>
        <label style={s.label} htmlFor="message">What do you need help with? *</label>
        <textarea
          style={s.textarea}
          id="message"
          name="message"
          rows={5}
          placeholder="Describe your electrical situation, project, or question..."
          required
        />
      </div>

      {state === "error" && (
        <div style={s.errorBox}>{errorMsg}</div>
      )}

      <button style={s.submit} type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Sending..." : "Send Request"}
      </button>

      <p style={s.fine}>
        We respond quickly. For urgent issues, call (352) 888-4468 directly.
      </p>
    </form>
  );
}

const s: Record<string, React.CSSProperties> = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1a2230",
  },
  input: {
    padding: "11px 14px",
    border: "1px solid #e5e9ef",
    borderRadius: 10,
    fontSize: 14,
    color: "#0b0f14",
    background: "#ffffff",
    outline: "none",
    transition: "border-color 0.15s ease",
  },
  select: {
    padding: "11px 14px",
    border: "1px solid #e5e9ef",
    borderRadius: 10,
    fontSize: 14,
    color: "#0b0f14",
    background: "#ffffff",
    outline: "none",
  },
  textarea: {
    padding: "11px 14px",
    border: "1px solid #e5e9ef",
    borderRadius: 10,
    fontSize: 14,
    color: "#0b0f14",
    background: "#ffffff",
    outline: "none",
    resize: "vertical" as const,
    minHeight: 100,
    lineHeight: 1.6,
  },
  submit: {
    padding: "14px 20px",
    background: "#9BCB3C",
    color: "#0b0f14",
    borderRadius: 12,
    fontWeight: 800,
    fontSize: 15,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(155,203,60,0.30)",
    marginTop: 4,
    transition: "opacity 0.15s ease",
  },
  fine: {
    fontSize: 12,
    color: "#8a96a3",
    fontWeight: 500,
  },
  errorBox: {
    background: "#fff2f2",
    border: "1px solid #fcd0d0",
    borderRadius: 10,
    padding: "12px 14px",
    fontSize: 14,
    color: "#c0392b",
    fontWeight: 500,
  },
  success: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center" as const,
    padding: "40px 20px",
    gap: 10,
  },
  successIcon: {
    width: 52,
    height: 52,
    borderRadius: 999,
    background: "#9BCB3C",
    color: "#0b0f14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: 22,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 800,
    color: "#0b0f14",
  },
  successText: {
    fontSize: 15,
    color: "#5f6b7a",
    lineHeight: 1.65,
    maxWidth: 360,
    fontWeight: 500,
  },
  successPhone: {
    color: "#7fb32f",
    fontWeight: 700,
    textDecoration: "none",
  },
  resetBtn: {
    marginTop: 8,
    padding: "10px 18px",
    background: "transparent",
    color: "#5f6b7a",
    border: "1px solid #e5e9ef",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
};

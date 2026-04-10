import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "True Path Electrical Services | Licensed Electrician in Central Florida",
    template: "%s | True Path Electrical Services",
  },
  description:
    "Licensed electrician serving Umatilla, Lake County, and Central Florida. Residential, commercial, and industrial electrical services. 24/7 emergency service. License EC13015924.",
  keywords: [
    "electrician Umatilla FL",
    "Central Florida electrician",
    "licensed electrician Lake County",
    "24/7 emergency electrician",
    "residential electrician",
    "commercial electrician",
  ],
  openGraph: {
    siteName: "True Path Electrical Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          style={{
            position: "absolute",
            left: "-999px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

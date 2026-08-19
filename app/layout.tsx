import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loopx.dev"),
  title: {
    default: "LOOPX — Software From Idea to Production",
    template: "%s | LOOPX",
  },
  description:
    "LOOPX builds modern software, mobile applications, websites and digital products — from idea to production.",
  keywords: [
    "software development",
    "mobile apps",
    "web development",
    "SaaS",
    "custom software",
    "LOOPX",
  ],
  authors: [{ name: "LOOPX" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loopx.dev",
    siteName: "LOOPX",
    title: "LOOPX — Software From Idea to Production",
    description:
      "LOOPX builds modern software, mobile applications, websites and digital products — from idea to production.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "LOOPX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOOPX — Software From Idea to Production",
    description:
      "LOOPX builds modern software, mobile applications, websites and digital products — from idea to production.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://loopx.dev",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LOOPX",
  url: "https://loopx.dev",
  email: "loopx@gmail.com",
  telephone: "+923191718420",
  description:
    "LOOPX builds modern software, mobile applications, websites and digital products — from idea to production.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <meta name="theme-color" content="#011810" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

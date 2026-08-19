import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-black)] border-t border-[var(--color-border)]">
      <div className="section-padding-x section-padding max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="text-3xl md:text-4xl font-semibold tracking-tight">
              LOOPX
            </Link>
            <p className="text-[var(--color-muted)] mt-4 text-body-lg max-w-sm">
              Software from idea to production.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-label mb-6 opacity-50">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-label mb-6 opacity-50">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:loopx@gmail.com"
                  className="link-underline opacity-80 hover:opacity-100 transition-opacity"
                >
                  loopx@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:03191718420"
                  className="link-underline opacity-80 hover:opacity-100 transition-opacity"
                >
                  03191718420
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-label mb-6 opacity-50">Social</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline opacity-80 hover:opacity-100 transition-opacity"
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between gap-4 text-sm text-[var(--color-muted)]">
          <p>&copy; 2026 LOOPX. All rights reserved.</p>
          <p className="opacity-50">Built with purpose.</p>
        </div>
      </div>
    </footer>
  );
}

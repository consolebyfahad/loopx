"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SCROLL_THRESHOLD = 80;
const SCROLL_DELTA = 8;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const current = latest;
    setIsScrolled(current > SCROLL_THRESHOLD);

    if (isMenuOpen) {
      setIsVisible(true);
      lastScrollY.current = current;
      return;
    }

    if (current <= SCROLL_THRESHOLD) {
      setIsVisible(true);
    } else if (current > lastScrollY.current + SCROLL_DELTA) {
      setIsVisible(false);
    } else if (current < lastScrollY.current - SCROLL_DELTA) {
      setIsVisible(true);
    }

    lastScrollY.current = current;
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          isScrolled
            ? "bg-[var(--color-emerald-darker)]/85 backdrop-blur-xl border-b border-[var(--color-border)]"
            : "bg-transparent"
        )}
        initial={false}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={cn(
            "section-padding-x flex items-center justify-between max-w-[1920px] mx-auto transition-[padding] duration-500",
            isScrolled ? "py-4" : "py-6 md:py-8"
          )}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold tracking-tight z-50 relative"
            aria-label="LOOPX Home"
          >
            LOOPX
          </Link>

          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide link-underline opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/contact" variant="secondary" size="sm">
              Let&apos;s Talk
            </Button>
          </div>

          <button
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <motion.span
              className="block w-6 h-px bg-current"
              animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px bg-current"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px bg-current"
              animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </motion.header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} links={navLinks} />
    </>
  );
}

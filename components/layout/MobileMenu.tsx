"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-[var(--color-black)] flex flex-col justify-center section-padding-x"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          exit={{ clipPath: "inset(0 100% 0 0)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block text-4xl sm:text-5xl font-medium tracking-tight py-3 hover:text-[var(--color-cyan)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button href="/contact" variant="primary" showArrow onClick={onClose}>
              Let&apos;s Talk
            </Button>
          </motion.div>

          <motion.div
            className="mt-auto pt-12 text-sm text-[var(--color-muted)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="mailto:loopx@gmail.com" className="block mb-2 hover:text-[var(--color-cyan)] transition-colors">
              loopx@gmail.com
            </a>
            <a href="tel:03191718420" className="hover:text-[var(--color-cyan)] transition-colors">
              03191718420
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

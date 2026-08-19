"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor="pointer"]';

const STROKE = {
  default: "#05714B",
  hover: "#10b981",
};

function CodingCursorIcon({ hovering }: { hovering: boolean }) {
  const color = hovering ? STROKE.hover : STROKE.default;

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 1px 3px rgba(1, 24, 16, 0.4))" }}
    >
      {/* < */}
      <path
        d="M17 11L7 24L17 37"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-200"
      />
      {/* / */}
      <path
        d="M29 11L21 37"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        className="transition-colors duration-200"
      />
      {/* > */}
      <path
        d="M31 11L41 24L31 37"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-200"
      />
    </svg>
  );
}

export default function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 500, damping: 35, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 500, damping: 35, mass: 0.4 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const noHover = window.matchMedia("(hover: none)").matches;
    if (coarse || noHover) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest(INTERACTIVE));
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
    };
  }, [prefersReducedMotion, rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{ x, y }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: hovering ? 1.25 : 1,
      }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <CodingCursorIcon hovering={hovering} />
    </motion.div>
  );
}

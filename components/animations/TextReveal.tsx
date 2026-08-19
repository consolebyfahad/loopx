"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  splitBy?: "lines" | "words";
}

export default function TextReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  splitBy = "lines",
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const parts =
    splitBy === "lines"
      ? text.split("\n")
      : text.split(" ").map((w, i, arr) => (i < arr.length - 1 ? w + " " : w));

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn(className, "overflow-hidden")} aria-label={text.replace(/\n/g, " ")}>
      {parts.map((part, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px", amount: 0 }}
            transition={{
              duration: 1,
              delay: delay + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {part}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

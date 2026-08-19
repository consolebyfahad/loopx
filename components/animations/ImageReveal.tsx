"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export default function ImageReveal({
  src,
  alt,
  className,
  imageClassName,
  width,
  height,
  priority = false,
  fill = false,
  sizes = "100vw",
}: ImageRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={cn("overflow-hidden", fill && "relative", className)}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden", fill && "relative", className)}>
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={cn("h-full w-full", fill && "relative")}
      >
        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className={cn("h-full w-full", fill && "relative")}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            fill={fill}
            sizes={sizes}
            priority={priority}
            className={cn("object-cover", imageClassName)}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

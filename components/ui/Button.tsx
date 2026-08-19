import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  showArrow = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center gap-3 font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-emerald)]";

  const variants = {
    primary:
      "bg-[var(--color-emerald)] text-[var(--color-surface-light)] hover:bg-[var(--color-emerald-dark)] hover:text-[var(--color-surface-light)] px-8 py-4",
    secondary:
      "bg-transparent text-[var(--color-surface-light)] border border-[var(--color-surface-light)]/25 hover:border-[var(--color-emerald)] hover:text-[var(--color-light)] px-8 py-4",
    outline:
      "bg-transparent text-[var(--color-black)] border border-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-[var(--color-surface-light)] px-8 py-4",
    ghost:
      "bg-transparent text-[var(--color-surface-light)] hover:text-[var(--color-light)] px-4 py-2",
  };

  const sizes = {
    sm: "text-sm px-5 py-2.5",
    md: "text-sm tracking-wide uppercase px-8 py-4",
    lg: "text-base tracking-wide uppercase px-10 py-5",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={18}
          className="transition-transform duration-500 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}

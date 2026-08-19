import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({
  children,
  className,
  light = false,
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "text-label block mb-3",
        light ? "text-[var(--color-muted-on-light)]" : "text-[var(--color-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";

interface ArrowProps {
  className?: string;
  direction?: "right" | "up-right" | "down";
}

export default function Arrow({ className, direction = "right" }: ArrowProps) {
  const rotations = {
    right: "",
    "up-right": "-rotate-45",
    down: "rotate-90",
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={cn("transition-transform duration-500", rotations[direction], className)}
      aria-hidden="true"
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

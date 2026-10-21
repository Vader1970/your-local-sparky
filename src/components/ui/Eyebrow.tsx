import type { CSSProperties, ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  /** Tailwind classes for text colour and spacing. */
  className?: string;
  /** Tailwind background class for the square marker. */
  markerClassName?: string;
  reveal?: boolean;
  delay?: number;
  /** Plays the first-paint entrance animation after this delay (ms) instead of the scroll reveal. */
  intro?: number;
};

export function Eyebrow({
  children,
  className = "mb-6 text-rust",
  markerClassName = "bg-orange",
  reveal = true,
  delay,
  intro,
}: EyebrowProps) {
  return (
    <p
      data-reveal={reveal ? "up" : undefined}
      data-delay={delay}
      data-intro={intro !== undefined ? "up" : undefined}
      style={intro !== undefined ? ({ "--intro-delay": `${intro}ms` } as CSSProperties) : undefined}
      className={`m-0 flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.18em] ${className}`}
    >
      <span aria-hidden="true" className={`size-[7px] flex-none ${markerClassName}`} />
      {children}
    </p>
  );
}

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 18, children, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" {...props}>
      {children}
    </svg>
  );
}

export function ArrowRightIcon({ strokeWidth = 2.2, ...props }: IconProps) {
  return (
    <Svg stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <Svg stroke="currentColor" strokeWidth={2.2} strokeLinecap="square" {...props}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </Svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Svg stroke="currentColor" strokeWidth={2.2} strokeLinecap="square" {...props}>
      <path d="M7 17L17 7M9 7h8v8" />
    </Svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </Svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg stroke="currentColor" strokeWidth={2} strokeLinecap="square" {...props}>
      <path d="M3 7h18M3 12h18M3 17h12" />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg stroke="currentColor" strokeWidth={2} strokeLinecap="square" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
  );
}

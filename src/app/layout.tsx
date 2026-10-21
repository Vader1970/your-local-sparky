import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { REVEAL_INIT_SCRIPT } from "@/lib/reveal";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Local Sparky — Homepage concept by Pegasus Digital",
  description:
    "An independent, unsolicited homepage design concept for Your Local Sparky, created by Pegasus Digital. This is a design preview, not the official Your Local Sparky website.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#201e1d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NZ" className={archivo.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_INIT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

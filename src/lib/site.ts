export const QUOTE_URL = "https://yourlocalsparky.co.nz/contact-us/";
export const GALLERY_URL = "https://yourlocalsparky.co.nz/gallery/";
export const PHONE_HREF = "tel:0274451631";
export const PHONE_DISPLAY = "027 445 1631";

export const CONCEPT_NOTICE =
  "Independent design concept by Pegasus Digital — not the official Your Local Sparky website.";

export type NavLink = {
  num: string;
  label: string;
  href: `#${string}`;
};

export const NAV_LINKS: NavLink[] = [
  { num: "01", label: "Home", href: "#top" },
  { num: "02", label: "Services", href: "#services" },
  { num: "03", label: "About", href: "#about" },
  { num: "04", label: "Gallery", href: "#gallery" },
  { num: "05", label: "Contact", href: "#contact" },
];

export const FOOTER_SERVICES = [
  "General Electrical",
  "Heat Pumps & Air Conditioning",
  "Underfloor Heating",
  "Security Systems & Cameras",
  "New Builds & Renovations",
  "Central Vacuum Systems",
  "Aerials",
];

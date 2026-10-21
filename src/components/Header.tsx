"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF, QUOTE_URL } from "@/lib/site";
import { ArrowRightIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/icons";

const MOBILE_HEADER_HEIGHT = 76;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Distance from the viewport top to the header's bottom edge, so the open menu
  // always ends exactly at the bottom of the screen (the concept notice may sit above).
  const [menuOffset, setMenuOffset] = useState(MOBILE_HEADER_HEIGHT);
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const measure = useCallback(() => {
    const bottom = headerRef.current?.getBoundingClientRect().bottom;
    if (bottom) setMenuOffset(Math.round(bottom));
  }, []);

  const setMenu = useCallback(
    (open: boolean) => {
      if (open) measure();
      setMenuOpen(open);
      document.body.style.overflow = open ? "hidden" : "";
    },
    [measure],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        burgerRef.current?.focus();
      }
    };
    const onResize = () => (desktop.matches ? setMenu(false) : measure());
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen, setMenu, measure]);

  useEffect(() => () => void (document.body.style.overflow = ""), []);

  const solid = scrolled || menuOpen;

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 -mb-[76px] h-[76px] text-paper transition-[background-color,box-shadow] duration-350 lg:-mb-[92px] lg:h-[92px] ${
        solid
          ? "bg-ink"
          : "bg-[rgb(24_22_21/0.6)] backdrop-blur-[10px] lg:bg-[rgb(16_14_13/0.18)]"
      } ${scrolled ? "shadow-[0_10px_30px_rgb(0_0_0/0.18)]" : ""}`}
    >
      <div className="shell flex h-full items-center gap-[clamp(16px,2.4vw,36px)]">
        <a href="#top" aria-label="Your Local Sparky, home" className="mr-auto flex flex-none">
          <Image
            src="/images/new-logo.png"
            alt="Your Local Sparky"
            width={113}
            height={72}
            unoptimized
            loading="eager"
            className="block h-14 w-[88px] object-contain lg:h-[72px] lg:w-[113px]"
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-[clamp(18px,2.2vw,32px)] lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="bg-[linear-gradient(#ff914d,#ff914d)] bg-[length:0%_2px] bg-[position:0_100%] bg-no-repeat py-1.5 text-[15px] font-medium text-paper no-underline [transition:background-size_0.35s_var(--ease-brand),color_0.25s] hover:bg-[length:100%_2px] hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={PHONE_HREF}
          className="hidden items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-paper no-underline transition-colors duration-250 hover:text-orange 2xl:flex"
        >
          <PhoneIcon size={17} />
          {PHONE_DISPLAY}
        </a>

        <a
          href={PHONE_HREF}
          aria-label={`Call ${PHONE_DISPLAY}`}
          className="hidden size-12 flex-none items-center justify-center border-2 border-paper/45 text-paper transition-colors duration-250 hover:border-orange hover:bg-orange hover:text-ink xs:flex 2xl:hidden"
        >
          <PhoneIcon size={18} />
        </a>

        <a
          href={QUOTE_URL}
          className="hidden min-h-12 flex-none items-center gap-[18px] whitespace-nowrap bg-orange pr-4 pl-[18px] text-[15px] font-bold text-ink no-underline transition-colors duration-250 hover:bg-white xs:flex"
        >
          Get a Free Quote
          <ArrowRightIcon size={17} />
        </a>

        <button
          ref={burgerRef}
          type="button"
          onClick={() => setMenu(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex size-12 flex-none cursor-pointer items-center justify-center border-2 border-paper/40 bg-paper/8 p-0 text-paper transition-colors duration-250 hover:border-paper hover:bg-paper/16 lg:hidden"
        >
          {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        inert={!menuOpen}
        style={{ height: `calc(100dvh - ${menuOffset}px)` }}
        className={`absolute inset-x-0 top-full overflow-y-auto border-t border-paper/12 bg-ink text-paper [transition:opacity_0.3s_ease,transform_0.4s_var(--ease-brand),visibility_0.3s] lg:hidden ${
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col px-[clamp(20px,4vw,56px)] pt-2 pb-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenu(false)}
              className="flex items-baseline gap-[18px] border-b-2 border-paper/18 py-[18px] text-[30px] font-bold tracking-[-0.02em] text-paper no-underline font-stretch-[88%] hover:text-orange"
            >
              <span className="w-[22px] text-[12px] font-semibold tracking-[0.12em] text-orange font-stretch-[100%]">
                {l.num}
              </span>
              {l.label}
            </a>
          ))}
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <a
              href={QUOTE_URL}
              className="flex min-h-14 items-center justify-between bg-orange px-5 text-[17px] font-bold text-ink no-underline"
            >
              Get a Free Quote
              <ArrowRightIcon size={18} />
            </a>
            <a
              href={PHONE_HREF}
              className="flex min-h-14 items-center justify-between border-2 border-paper/50 px-5 text-[17px] font-semibold text-paper no-underline"
            >
              Call {PHONE_DISPLAY}
              <PhoneIcon size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

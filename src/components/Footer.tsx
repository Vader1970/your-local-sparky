import Image from "next/image";
import { FOOTER_SERVICES, NAV_LINKS, PHONE_DISPLAY, PHONE_HREF, QUOTE_URL } from "@/lib/site";
import { ArrowRightIcon } from "@/components/ui/icons";

const heading = "mt-0 text-[12px] font-bold uppercase tracking-[0.14em] text-orange";
const listLink = "inline-block py-[5px] text-[15px] text-paper no-underline hover:text-orange";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell pt-[clamp(56px,7vw,96px)] pb-7">
        <div className="flex flex-wrap gap-x-[clamp(32px,5vw,72px)] gap-y-12">
          <div className="flex min-w-0 flex-[1.6_1_280px] flex-col gap-[22px]">
            <a href="#top" aria-label="Your Local Sparky, back to top" className="flex self-start">
              <Image
                src="/images/new-logo.png"
                alt="Your Local Sparky"
                width={126}
                height={80}
                unoptimized
                className="block h-20 w-[126px] object-contain"
              />
            </a>
            <p className="m-0 max-w-[26em] text-[15px] leading-[1.6] text-stone">
              Electrical work, heat pumps, underfloor heating, security systems and more for homes and
              businesses across Christchurch.
            </p>
          </div>

          <nav aria-label="Services" className="min-w-0 flex-[1_1_200px]">
            <h2 className={`${heading} mb-4`}>Services</h2>
            <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className={listLink}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer" className="min-w-0 flex-[0.8_1_140px]">
            <h2 className={`${heading} mb-4`}>Navigate</h2>
            <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={listLink}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex min-w-0 flex-[1_1_220px] flex-col gap-3.5">
            <h2 className={`${heading} mb-0.5`}>Contact</h2>
            <p className="m-0 text-[15px] text-stone">Christchurch</p>
            <a
              href={PHONE_HREF}
              className="text-[24px] font-extrabold tracking-[-0.01em] text-paper no-underline hover:text-orange"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={QUOTE_URL}
              className="mt-2 flex min-h-[52px] max-w-[260px] items-center justify-between gap-[18px] bg-orange px-[18px] text-[15.5px] font-bold text-ink no-underline transition-[background-color] duration-250 hover:bg-paper"
            >
              Get a Free Quote
              <ArrowRightIcon size={17} />
            </a>
          </div>
        </div>

        <div className="mt-[clamp(48px,6vw,80px)] flex flex-wrap justify-between gap-x-8 gap-y-2.5 border-t-2 border-paper/22 pt-5 text-[13px] text-ash">
          <span>© 2026 Your Local Sparky. All rights reserved.</span>
          <span>
            Independent, unsolicited homepage concept by Pegasus Digital. Not affiliated with or
            commissioned by Your Local Sparky.
          </span>
        </div>
      </div>
    </footer>
  );
}

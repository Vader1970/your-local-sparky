import Image from "next/image";
import type { CSSProperties } from "react";
import { PHONE_DISPLAY, PHONE_HREF, QUOTE_URL } from "@/lib/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowDownIcon, ArrowRightIcon } from "@/components/ui/icons";

const heroButton =
  "box-border flex min-h-[58px] flex-[1_1_220px] items-center justify-between gap-6 pr-5 pl-[22px] text-[16.5px] no-underline xs:max-w-[280px]";

/** Entrance animation that plays on first paint (see `[data-intro]` in globals.css). */
function intro(delay: number) {
  return { "data-intro": "up", style: { "--intro-delay": `${delay}ms` } as CSSProperties };
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[max(600px,calc(100svh-52px))] flex-col overflow-hidden bg-night text-white md:min-h-[max(640px,calc(100svh-36px))]"
    >
      {/* AI-generated illustrative image, not a completed Your Local Sparky project. */}
      <Image
        data-intro="zoom"
        src="/images/twilight-pergola-withwarm-lights.png"
        alt="Illustrative image: warm festoon lighting beneath a glass canopy at twilight"
        fill
        sizes="100vw"
        quality={85}
        loading="eager"
        fetchPriority="high"
        className="-z-2 object-cover object-[63%_40%] md:object-[58%_50%] lg:object-[50%_45%]"
      />
      <div aria-hidden="true" className="hero-overlay absolute inset-0 -z-1" />
      <p className="absolute right-[clamp(16px,4vw,56px)] bottom-3.5 z-1 m-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-sand">
        Illustrative image
      </p>

      <div className="relative mx-auto box-border flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pt-[216px] pb-10 md:px-[clamp(20px,4vw,56px)] md:pt-[132px] md:pb-[clamp(56px,10vh,112px)] lg:pt-[148px]">
        <div className="flex max-w-[1100px] flex-col gap-[clamp(20px,2.4vw,30px)]">
          <Eyebrow reveal={false} intro={60} className="text-orange-soft">
            Christchurch Electrical Services
          </Eyebrow>

          <h1
            id="hero-title"
            className="m-0 text-[clamp(38px,9.4vw,112px)] leading-[0.96] tracking-[-0.035em] text-white text-shadow-[0_2px_40px_rgb(0_0_0/0.25)] font-stretch-[84%]"
          >
            <span {...intro(140)} className="block font-extrabold">
              Electrical work<span className="text-orange">.</span>
            </span>
            <span {...intro(260)} className="block font-light tracking-[-0.03em]">
              Thoughtfully done<span className="font-extrabold text-orange">.</span>
            </span>
          </h1>

          <p
            {...intro(420)}
            className="m-0 max-w-[31em] text-[clamp(16.5px,1.3vw,19px)] leading-[1.6] text-pretty text-mist"
          >
            From everyday electrical work to heat pumps, security and new builds, Your Local Sparky
            offers practical solutions for Christchurch homes and businesses.
          </p>

          <div className="flex flex-wrap gap-3 pt-1.5">
            <a
              {...intro(540)}
              href={QUOTE_URL}
              className={`${heroButton} bg-orange font-bold text-ink transition-colors duration-250 hover:bg-white`}
            >
              Get a Free Quote
              <ArrowRightIcon size={18} />
            </a>
            <a
              {...intro(640)}
              href="#services"
              className={`${heroButton} border-2 border-white/75 bg-[rgb(20_18_17/0.28)] font-semibold text-white backdrop-blur-[6px] transition-colors duration-250 hover:border-white hover:bg-white hover:text-ink`}
            >
              Explore Services
              <ArrowDownIcon size={18} />
            </a>
          </div>

          <a
            {...intro(740)}
            href={PHONE_HREF}
            className="inline-flex items-center gap-2.5 self-start py-1 text-[15px] font-medium text-mist no-underline hover:text-orange"
          >
            Prefer to talk?{" "}
            <span className="border-b-2 border-orange pb-px font-bold text-white">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

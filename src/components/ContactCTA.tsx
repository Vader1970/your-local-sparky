import { PHONE_DISPLAY, PHONE_HREF, QUOTE_URL } from "@/lib/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRightIcon, PhoneIcon } from "@/components/ui/icons";

const DETAILS = [
  {
    term: "Phone",
    value: (
      <a href={PHONE_HREF} className="text-ink no-underline hover:underline">
        {PHONE_DISPLAY}
      </a>
    ),
  },
  { term: "Service area", value: "Christchurch" },
  { term: "Quotes", value: "Free & no-obligation" },
];

const ctaButton =
  "flex min-h-[62px] items-center justify-between gap-6 px-[22px] text-[17px] font-bold no-underline transition-colors duration-250";

export function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-[76px] bg-orange text-ink lg:scroll-mt-[92px]"
    >
      <div className="shell pt-[clamp(64px,9vw,128px)]">
        <Eyebrow className="mb-7 text-ink" markerClassName="bg-ink">
          Contact
        </Eyebrow>
        <div className="flex flex-wrap items-end gap-[clamp(32px,5vw,80px)]">
          <div className="@container min-w-0 flex-[1.6_1_520px]">
            <h2
              id="contact-title"
              data-reveal="up"
              data-delay={80}
              className="m-0 text-[clamp(44px,12cqi,128px)] leading-[0.93] font-extrabold tracking-[-0.045em] text-balance font-stretch-[84%]"
            >
              Let’s talk about your next project.
            </h2>
          </div>
          <div data-reveal="up" data-delay={180} className="flex min-w-0 flex-[1_1_320px] flex-col gap-6">
            <p className="m-0 max-w-[28em] text-[clamp(17px,1.4vw,19px)] leading-[1.55] font-medium text-pretty">
              Planning an electrical upgrade, installing a heat pump or building something new? Get in
              touch to discuss your requirements.
            </p>
            <div className="flex flex-col gap-3">
              <a href={QUOTE_URL} className={`${ctaButton} bg-ink text-paper hover:bg-white hover:text-ink`}>
                Get a Free Quote
                <ArrowRightIcon size={19} />
              </a>
              <a
                href={PHONE_HREF}
                className={`${ctaButton} border-2 border-ink text-ink hover:bg-ink hover:text-orange`}
              >
                Call {PHONE_DISPLAY}
                <PhoneIcon size={19} />
              </a>
            </div>
          </div>
        </div>

        <dl className="mt-[clamp(56px,7vw,96px)] mb-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] border-t-2 border-ink">
          {DETAILS.map((d) => (
            <div key={d.term} className="border-b-2 border-ink/35 pt-[22px] pr-6 pb-[26px]">
              <dt className="text-[11.5px] font-bold uppercase tracking-[0.14em]">{d.term}</dt>
              <dd className="mt-1.5 mb-0 ml-0 text-[20px] font-bold">{d.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

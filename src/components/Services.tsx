import Image from "next/image";
import { QUOTE_URL } from "@/lib/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRightIcon } from "@/components/ui/icons";
import { SpecialistServices } from "@/components/SpecialistServices";

type FeaturedService = {
  title: string;
  description: string;
  image: string;
  alt: string;
  /** CSS object-position for the photo crop. */
  position: string;
};

const FEATURED: FeaturedService[] = [
  {
    title: "General Electrical",
    description:
      "Lighting, wiring, sockets and switches, plus repairs and maintenance for homes and businesses.",
    image: "/images/a1-1024x768-640x480.jpg",
    alt: "Black ceiling fan installed beneath a white louvred ceiling",
    position: "60% 40%",
  },
  {
    title: "Heat Pumps & Air Conditioning",
    description:
      "Heat pump and air conditioning installation to keep your home comfortable year-round.",
    image: "/images/a2-1024x768-640x480.jpg",
    alt: "Wall-mounted indoor heat pump unit above a window",
    position: "50% 35%",
  },
  {
    title: "New Builds & Renovations",
    description:
      "Electrical, heat pump and underfloor heating work planned in from the start of your project.",
    image: "/images/q6.jpg",
    alt: "Contemporary two-storey house with white rendered walls and black-framed windows",
    position: "55% 45%",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-[76px] bg-white lg:scroll-mt-[92px]"
    >
      <div className="shell py-[clamp(72px,9vw,128px)]">
        <div className="mb-[clamp(36px,4.5vw,60px)] flex flex-wrap items-end justify-between gap-x-16 gap-y-5">
          <div className="max-w-[860px] min-w-0 flex-[1_1_520px]">
            <Eyebrow>Services</Eyebrow>
            <h2
              id="services-title"
              data-reveal="up"
              data-delay={80}
              className="m-0 text-[clamp(36px,5.4vw,76px)] leading-[0.98] font-extrabold tracking-[-0.035em] text-balance font-stretch-[84%]"
            >
              Electrical solutions for every space<span className="text-orange">.</span>
            </h2>
          </div>
          <p
            data-reveal="up"
            data-delay={160}
            className="m-0 min-w-0 flex-[0_1_380px] text-[17px] leading-[1.6] text-pretty text-muted"
          >
            From essential electrical work to modern home comfort and security, explore our range of
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[clamp(14px,1.6vw,24px)] lg:grid-cols-3">
          {FEATURED.map((s, i) => (
            <a
              key={s.title}
              data-reveal="up"
              data-delay={i * 100}
              data-delay-from={1024}
              href={QUOTE_URL}
              aria-label={`Enquire about ${s.title}`}
              className="group flex min-w-0 flex-col bg-card text-ink no-underline transition-[background-color] duration-350 hover:bg-card-hover focus-visible:bg-card-hover md:flex-row lg:flex-col"
            >
              <div className="relative aspect-[4/3] min-w-0 overflow-hidden bg-surface md:aspect-auto md:min-h-[280px] md:flex-[0_0_46%] lg:aspect-[4/3] lg:min-h-0 lg:flex-none">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1440px) 440px, (min-width: 1024px) 31vw, (min-width: 700px) 44vw, 100vw"
                  style={{ objectPosition: s.position }}
                  className="object-cover transition-transform duration-900 ease-brand group-hover:scale-105 group-focus-visible:scale-105"
                />
              </div>
              <div className="flex min-w-0 flex-[1_1_0%] flex-col gap-3 p-[clamp(22px,2.2vw,32px)]">
                <h3 className="m-0 text-[clamp(23px,1.9vw,28px)] leading-[1.08] font-extrabold tracking-[-0.025em] text-balance font-stretch-[88%]">
                  {s.title}
                </h3>
                <p className="m-0 text-[15.5px] leading-[1.55] text-pretty text-muted">{s.description}</p>
                <span className="mt-auto flex items-center gap-2.5 pt-4 text-[15px] font-bold transition-colors duration-300 group-hover:text-rust group-focus-visible:text-rust">
                  Enquire
                  <ArrowRightIcon
                    size={17}
                    strokeWidth={2.4}
                    className="stroke-orange-deep transition-transform duration-350 ease-brand group-hover:translate-x-[6px] group-focus-visible:translate-x-[6px]"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>

        <SpecialistServices />
      </div>
    </section>
  );
}

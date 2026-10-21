import Image from "next/image";
import { QUOTE_URL } from "@/lib/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRightIcon } from "@/components/ui/icons";

const QUALITIES = [
  { title: "Attention to detail", description: "Quality workmanship, without cutting corners." },
  { title: "Professional communication", description: "Great service and clear updates at every stage." },
  {
    title: "A wide range of services",
    description: "Electrical, heat pumps, underfloor heating, security and more.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-[76px] bg-paper lg:scroll-mt-[92px]">
      <div className="shell py-[clamp(72px,9vw,128px)]">
        <Eyebrow>About</Eyebrow>
        <div className="@container">
          <h2
            id="about-title"
            data-reveal="up"
            data-delay={80}
            className="m-0 max-w-[13ch] text-[clamp(40px,7.6cqi,112px)] leading-[0.96] font-extrabold tracking-[-0.04em] text-balance font-stretch-[84%]"
          >
            It’s the details that make the difference<span className="text-orange">.</span>
          </h2>
        </div>

        <div className="mt-[clamp(40px,5vw,72px)] grid grid-cols-1 items-stretch gap-[clamp(32px,5vw,80px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <figure
            data-reveal="up"
            className="relative m-0 aspect-[3/2] overflow-hidden bg-surface lg:aspect-auto lg:min-h-[520px]"
          >
            <Image
              src="/images/q4.jpg"
              alt="Interior with dark timber stairs, glass balustrades and recessed downlights"
              fill
              sizes="(min-width: 1440px) 700px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[62%_50%] transition-transform duration-1100 ease-brand hover:scale-[1.03]"
            />
          </figure>

          <div className="flex min-w-0 flex-col gap-[clamp(28px,3vw,40px)] lg:py-2">
            <div className="flex flex-col gap-4">
              <p
                data-reveal="up"
                className="m-0 max-w-[30em] text-[clamp(19px,1.6vw,23px)] leading-[1.45] font-semibold tracking-[-0.01em] text-pretty"
              >
                A Christchurch electrical contractor working with homes and businesses, from everyday
                electrical work to new builds and renovations.
              </p>
              <p
                data-reveal="up"
                data-delay={80}
                className="m-0 max-w-[32em] text-[16.5px] leading-[1.65] text-pretty text-muted"
              >
                We take pride in quality workmanship and clear communication, from the first quote to
                the final check.
              </p>
            </div>

            <ul className="m-0 flex list-none flex-col gap-[clamp(18px,2vw,24px)] p-0">
              {QUALITIES.map((q) => (
                <li key={q.title} data-reveal="up" className="flex items-start gap-4">
                  <span aria-hidden="true" className="mt-[9px] size-2 flex-none bg-orange" />
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="text-[19px] leading-[1.25] font-bold tracking-[-0.015em] font-stretch-[90%]">
                      {q.title}
                    </span>
                    <span className="text-[15.5px] leading-[1.5] text-muted">{q.description}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div data-reveal="up" className="mt-auto self-start">
              <a
                href={QUOTE_URL}
                className="group relative inline-flex items-center gap-2.5 pt-1.5 pb-[9px] text-[16px] leading-[1.3] font-bold text-ink no-underline transition-colors duration-250 hover:text-rust focus-visible:text-rust"
              >
                <span>Request a free, no-obligation quote</span>
                <ArrowRightIcon
                  size={17}
                  className="flex-none transition-transform duration-250 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                />
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-orange/40" />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-orange transition-transform duration-280 ease-brand group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { QUOTE_URL } from "@/lib/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRightIcon } from "@/components/ui/icons";

type SpecialistService = {
  title: string;
  description: string;
  /** SVG path data on a 24×24 grid (Lucide-style line icon). */
  icon: string;
};

const SPECIALIST: SpecialistService[] = [
  {
    title: "Underfloor Heating",
    description: "Even, quiet warmth underfoot, ideal for new builds and renovations.",
    icon: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
  },
  {
    title: "Security Systems & Cameras",
    description: "Alarm and CCTV camera installation to help protect your property.",
    icon: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9 12l2 2 4-4",
  },
  {
    title: "Central Vacuum Systems",
    description: "Built-in systems that make cleaning every room easier.",
    icon: "M12.8 19.6A2 2 0 1 0 14 16H2M17.5 8a2.5 2.5 0 1 1 2 4H2M9.8 4.4A2 2 0 1 1 11 8H2",
  },
  {
    title: "Aerials",
    description: "TV aerial installation for homes across Christchurch.",
    icon: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9M7.8 4.7a6.14 6.14 0 0 0-.8 7.5M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0M16.2 4.8c2 2 2.26 5.11.8 7.47M19.1 1.9a9.96 9.96 0 0 1 0 14.1M9.5 18h5M8 22l4-11 4 11",
  },
];

const ease = "duration-280 ease-[ease]";

export function SpecialistServices() {
  return (
    <div className="mt-[clamp(56px,6vw,88px)]">
      <div data-reveal="up" className="mb-[clamp(28px,3vw,40px)] flex flex-col gap-3">
        <Eyebrow reveal={false} className="text-rust">
          Also available
        </Eyebrow>
        <h3 className="m-0 text-[clamp(24px,2.2vw,30px)] leading-[1.1] font-bold tracking-[-0.02em] text-ink font-stretch-[88%]">
          More ways we can help<span className="text-orange">.</span>
        </h3>
      </div>

      <ul className="m-0 grid list-none grid-cols-1 gap-7 p-0 sm:grid-cols-2 sm:gap-x-9 sm:gap-y-10 xl:grid-cols-4 xl:gap-[clamp(28px,2.8vw,44px)]">
        {SPECIALIST.map((s, i) => (
          <li key={s.title} data-reveal="up" data-delay={i * 80} data-delay-from={640} className="flex min-w-0">
            <a
              href={QUOTE_URL}
              aria-label={`Enquire about ${s.title}`}
              className="group relative flex min-w-0 flex-1 flex-col gap-3 pt-5 text-ink no-underline sm:pt-6"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-ink/10" />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-orange transition-transform duration-300 ease-brand group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width={34}
                height={34}
                fill="none"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`flex-none stroke-ink transition-[stroke] ${ease} group-hover:stroke-orange-deep group-focus-visible:stroke-orange-deep`}
              >
                <path d={s.icon} />
              </svg>
              <span
                className={`mt-1 text-[clamp(20px,1.6vw,23px)] leading-[1.15] font-extrabold tracking-[-0.02em] text-balance font-stretch-[88%] transition-colors ${ease} group-hover:text-rust group-focus-visible:text-rust`}
              >
                {s.title}
              </span>
              <span className="text-[15px] leading-[1.55] text-pretty text-muted">{s.description}</span>
              <span
                className={`mt-auto flex items-center gap-2.5 pt-1.5 text-[14.5px] font-bold transition-colors ${ease} group-hover:text-rust group-focus-visible:text-rust`}
              >
                Enquire
                <ArrowRightIcon
                  size={17}
                  strokeWidth={2.4}
                  className="stroke-orange-deep transition-transform duration-280 ease-brand group-hover:translate-x-1 group-focus-visible:translate-x-1"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

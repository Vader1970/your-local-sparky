import Image from "next/image";
import { GALLERY_URL } from "@/lib/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRightIcon } from "@/components/ui/icons";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  /** Grid placement for the 2-, 6- and 12-column layouts (<700px, 700–1023px, ≥1024px). */
  placement: string;
  /** object-position classes for the photo crop. */
  crop: string;
  sizes: string;
};

const ITEMS: GalleryItem[] = [
  {
    src: "/images/q1.jpg",
    alt: "Bright open-plan living, dining and kitchen with recessed downlights",
    caption: "Open-plan living",
    placement: "col-[1/3] row-[1/2] md:col-[1/7] md:row-[1/2] lg:col-[1/9] lg:row-[1/3]",
    crop: "object-[50%_55%]",
    sizes: "(min-width: 1440px) 880px, (min-width: 1024px) 64vw, 100vw",
  },
  {
    src: "/images/q2.jpg",
    alt: "Modern entrance with floating timber stairs, glass balustrade and downlights",
    caption: "Entrance & stair",
    placement: "col-[1/2] row-[2/3] md:col-[1/4] md:row-[2/3] lg:col-[9/13] lg:row-[1/2]",
    crop: "object-[35%_50%]",
    sizes: "(min-width: 1440px) 440px, (min-width: 1024px) 31vw, 50vw",
  },
  {
    src: "/images/q5.jpg",
    alt: "White bathroom with glass shower and vanity",
    caption: "Bathroom",
    placement: "col-[2/3] row-[2/3] md:col-[4/7] md:row-[2/3] lg:col-[9/13] lg:row-[2/3]",
    crop: "object-[40%_50%]",
    sizes: "(min-width: 1440px) 440px, (min-width: 1024px) 31vw, 50vw",
  },
  {
    src: "/images/a5-640x480.jpg",
    alt: "Outdoor heat pump unit installed beside a weatherboard house",
    caption: "Heat pump",
    placement: "col-[1/3] row-[3/4] md:col-[5/7] md:row-[3/4] lg:col-[10/13] lg:row-[3/4]",
    crop: "object-[50%_60%] md:object-[50%_55%]",
    sizes: "(min-width: 1440px) 330px, (min-width: 1024px) 24vw, (min-width: 700px) 33vw, 100vw",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="scroll-mt-[76px] bg-ink text-paper lg:scroll-mt-[92px]"
    >
      <div className="shell py-[clamp(64px,9vw,128px)]">
        <div className="mb-[clamp(20px,2vw,28px)] flex flex-wrap items-end justify-between gap-x-12 gap-y-6 border-b-2 border-paper/22 pb-[clamp(28px,3vw,40px)]">
          <div>
            <Eyebrow className="mb-6 text-orange">Gallery</Eyebrow>
            <h2
              id="gallery-title"
              data-reveal="up"
              data-delay={80}
              className="m-0 text-[clamp(48px,8vw,120px)] leading-[0.92] font-extrabold tracking-[-0.045em] font-stretch-[84%]"
            >
              A closer look<span className="text-orange">.</span>
            </h2>
          </div>
          <p
            data-reveal="up"
            data-delay={160}
            className="m-0 max-w-[26em] text-[16.5px] leading-[1.6] text-pretty text-stone"
          >
            Explore imagery from the Your Local Sparky website, featuring residential spaces and
            electrical installations.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-[260px_190px_240px_auto] gap-[clamp(8px,1.2vw,16px)] md:grid-cols-6 md:grid-rows-[420px_260px_320px] lg:grid-cols-12 lg:grid-rows-[clamp(240px,23vw,340px)_clamp(240px,23vw,340px)_clamp(300px,27vw,400px)]">
          {ITEMS.map((item, i) => (
            <figure
              key={item.src}
              data-reveal="up"
              data-delay={i * 90}
              className={`relative m-0 min-h-0 overflow-hidden bg-charcoal ${item.placement}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.sizes}
                className={`object-cover transition-transform duration-1100 ease-brand hover:scale-[1.04] ${item.crop}`}
              />
              <figcaption className="pointer-events-none absolute bottom-0 left-0 m-0 bg-ink px-3.5 py-[9px] text-[11.5px] font-semibold uppercase tracking-[0.12em] text-paper">
                {item.caption}
              </figcaption>
            </figure>
          ))}

          <div
            data-reveal="up"
            data-delay={120}
            className="col-[1/3] row-[4/5] flex min-w-0 flex-col justify-between gap-5 border-2 border-paper/22 p-[clamp(18px,2.4vw,36px)] md:col-[1/5] md:row-[3/4] lg:col-[1/10] lg:row-[3/4]"
          >
            <p className="m-0 max-w-[16em] text-[clamp(20px,2.4vw,34px)] leading-[1.12] font-bold tracking-[-0.025em] text-balance font-stretch-[88%]">
              Lighting, comfort and the finishing details that bring a space together.
            </p>
            <a
              href={GALLERY_URL}
              className="inline-flex items-center gap-2.5 self-start bg-[linear-gradient(#ff914d,#ff914d)] bg-[length:100%_2px] bg-[position:0_100%] bg-no-repeat py-1.5 text-[15px] font-bold text-paper no-underline hover:text-orange"
            >
              View the full gallery
              <ArrowUpRightIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

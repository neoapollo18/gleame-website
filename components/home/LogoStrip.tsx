import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const brands = [
  { name: "BioTech Beauty", logo: "/logo-biotechbeauty.svg", w: 168, h: 14 },
  { name: "Haven", logo: "/haven.png", w: 104, h: 23 },
  { name: "Holicow", logo: "/holicow.png", w: 120, h: 24 },
  { name: "The Men Pen", logo: "/menpen.png", w: 110, h: 55 },
  { name: "Wett", logo: "/wett.png", w: 82, h: 26 },
  { name: "ORLY", logo: "/orly.svg", w: 96, h: 27 },
];

export function LogoStrip() {
  return (
    <section className="border-b border-line">
      <div className="frame">
        <h2 className="sr-only">Brands using Gleame</h2>
        <ul className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b, i) => (
            <Reveal as="li" variant="fade" delay={i * 70} key={b.name} className="flex h-24 items-center justify-center bg-white px-6 lg:h-28">
              <Image
                src={b.logo}
                alt={b.name}
                width={b.w}
                height={b.h}
                className="h-auto max-h-12 w-auto object-contain opacity-80 [filter:brightness(0)]"
                style={{ maxWidth: b.w }}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

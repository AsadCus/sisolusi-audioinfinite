import Image from "next/image";

const BRANDS = [
  { name: "JBL", src: "https://www.vectorlogo.zone/logos/jbl/jbl-ar21.svg" },
  { name: "Sony", src: "https://www.vectorlogo.zone/logos/sony/sony-ar21.svg" },
  { name: "Bose", src: "https://www.vectorlogo.zone/logos/bose/bose-ar21.svg" },
  {
    name: "Sennheiser",
    src: "https://www.vectorlogo.zone/logos/sennheiser/sennheiser-ar21.svg",
  },
  {
    name: "Yamaha",
    src: "https://www.vectorlogo.zone/logos/yamaha/yamaha-ar21.svg",
  },
  {
    name: "Shure",
    src: "https://www.vectorlogo.zone/logos/shure/shure-ar21.svg",
  },
  {
    name: "Marshall",
    src: "https://www.vectorlogo.zone/logos/marshallamps/marshallamps-ar21.svg",
  },
  {
    name: "Pioneer",
    src: "https://www.vectorlogo.zone/logos/pioneer/pioneer-ar21.svg",
  },
  {
    name: "Roland",
    src: "https://www.vectorlogo.zone/logos/roland/roland-ar21.svg",
  },
  {
    name: "Apple",
    src: "https://www.vectorlogo.zone/logos/apple/apple-ar21.svg",
  },
];

const DOUBLED = [...BRANDS, ...BRANDS];

export function MarqueeSection() {
  return (
    <div className="pt-30 bg-white overflow-hidden">
      <div className="flex items-center gap-4 py-4 px-6 lg:px-8 border-b border-neutral-100">
        <span className="eyebrow shrink-0">Certified By</span>
        <div className="w-px h-3 bg-neutral-200 shrink-0" />
      </div>
      <div className="relative py-4">
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {DOUBLED.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center justify-center px-8 shrink-0 opacity-30 hover:opacity-60 transition-opacity duration-300"
              style={{ height: "40px" }}
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={100}
                height={22}
                className="h-5.5 w-auto grayscale opacity-50"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

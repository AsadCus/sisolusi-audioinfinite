import Image from 'next/image'
import { Marquee } from '@/components/ui/marquee'

interface ClientLogo {
  id: string
  name: string
  logoUrl: string
}

const CLIENT_LOGOS = [
  {
    id: '1',
    name: 'JBL',
    logoUrl: 'https://www.vectorlogo.zone/logos/jbl/jbl-ar21.svg',
  },
  {
    id: '2',
    name: 'Sony',
    logoUrl: 'https://www.vectorlogo.zone/logos/sony/sony-ar21.svg',
  },
  {
    id: '3',
    name: 'Apple',
    logoUrl: 'https://www.vectorlogo.zone/logos/apple/apple-ar21.svg',
  },
  {
    id: '4',
    name: 'Bose',
    logoUrl: 'https://www.vectorlogo.zone/logos/bose/bose-ar21.svg',
  },
  {
    id: '5',
    name: 'Sennheiser',
    logoUrl: 'https://www.vectorlogo.zone/logos/sennheiser/sennheiser-ar21.svg',
  },
  {
    id: '6',
    name: 'Yamaha',
    logoUrl: 'https://www.vectorlogo.zone/logos/yamaha/yamaha-ar21.svg',
  },
  {
    id: '7',
    name: 'Shure',
    logoUrl: 'https://www.vectorlogo.zone/logos/shure/shure-ar21.svg',
  },
  {
    id: '8',
    name: 'Marshall',
    logoUrl: 'https://www.vectorlogo.zone/logos/marshallamps/marshallamps-ar21.svg',
  },
  {
    id: '9',
    name: 'Audio-Technica',
    logoUrl: 'https://www.vectorlogo.zone/logos/audio-technica/audio-technica-ar21.svg',
  },
  {
    id: '10',
    name: 'Pioneer',
    logoUrl: 'https://www.vectorlogo.zone/logos/pioneer/pioneer-ar21.svg',
  },
  {
    id: '11',
    name: 'Roland',
    logoUrl: 'https://www.vectorlogo.zone/logos/roland/roland-ar21.svg',
  },
  {
    id: '12',
    name: 'Beats by Dre',
    logoUrl: 'https://www.vectorlogo.zone/logos/beatsbydre/beatsbydre-ar21.svg',
  },
  {
    id: '13',
    name: 'Bang & Olufsen',
    logoUrl: 'https://www.vectorlogo.zone/logos/bang-olufsen/bang-olufsen-ar21.svg',
  },
  {
    id: '14',
    name: 'Sonos',
    logoUrl: 'https://www.vectorlogo.zone/logos/sonos/sonos-ar21.svg',
  },
  {
    id: '15',
    name: 'Dolby',
    logoUrl: 'https://www.vectorlogo.zone/logos/dolby/dolby-ar21.svg',
  },
  {
    id: '16',
    name: 'Spotify',
    logoUrl: 'https://www.vectorlogo.zone/logos/spotify/spotify-ar21.svg',
  },
];

interface LogoItemProps {
  logo: ClientLogo
}

function LogoItem({ logo }: LogoItemProps) {
  return (
    <div className="flex items-center justify-center px-8 py-2 shrink-0">
      <div className="relative h-8 w-28 opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-500">
        <Image
          src={logo.logoUrl}
          alt={logo.name}
          fill
          className="object-contain"
          sizes="112px"
        />
      </div>
    </div>
  )
}

export function MarqueeSection() {
  return (
    <section className="py-6 md:py-8 bg-background border-y border-border overflow-hidden">
      <div className="container mb-6 md:mb-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Certified By
        </p>
      </div>
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      >
        <Marquee pauseOnHover className="[--duration:50s] [--gap:3rem]">
          {CLIENT_LOGOS.slice(0, 8).map((logo) => (
            <LogoItem key={logo.id} logo={logo} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="py-12 [--duration:50s] [--gap:3rem]">
          {CLIENT_LOGOS.slice(8, 16 ).map((logo) => (
            <LogoItem key={logo.id} logo={logo} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
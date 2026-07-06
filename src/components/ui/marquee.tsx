import { cn } from '@/lib/utils'

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: React.ReactNode
  speed?: 'slow' | 'normal' | 'fast'
}

const speedMap = {
  slow: '60s',
  normal: '35s',
  fast: '20s',
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  speed = 'normal',
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group flex overflow-hidden',
        '[--gap:2rem] gap-[--gap]',
        className
      )}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'flex min-w-full shrink-0 items-center justify-around',
            'gap-[--gap]',
            'animate-marquee',
            reverse && '[animation-direction:reverse]',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
          style={{
            animationDuration: speedMap[speed],
          }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
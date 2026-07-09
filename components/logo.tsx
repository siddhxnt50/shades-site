import { cn } from '@/lib/utils';

interface LogoMarkProps {
  className?: string;
  /** Mute the non-accent shapes to a single tone (used by the hero watermark) */
  muted?: boolean;
}

/**
 * The Shades mark: five shapes forming a triangular skyline —
 * shades ramp light→dark with an indigo center spire.
 *
 * The spire's hover fill requires a `group` class on an ancestor;
 * without one it simply stays static (no error).
 */
export function LogoMark({ className, muted }: LogoMarkProps) {
  const tone = (color: string) => (muted ? '#94a3b8' : color);
  return (
    <svg
      viewBox="0 0 200 180"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn('overflow-visible', className)}
    >
      <polygon points="10,170 45,170 45,104" fill={tone('#475569')} />
      <rect x="50" y="72" width="25" height="98" fill={tone('#64748b')} />
      <polygon
        points="80,170 80,25 95,10 110,25 110,170"
        fill="#818cf8"
        className="transition-[fill] duration-300 group-hover:fill-indigo-300"
      />
      <rect x="115" y="64" width="25" height="106" fill={tone('#94a3b8')} />
      <polygon points="145,170 190,170 145,94" fill={tone('#cbd5e1')} />
    </svg>
  );
}

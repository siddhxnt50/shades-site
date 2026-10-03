import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

/** The logo mark, enlarged as the hero figure. */
const shapes = [
  { height: '46%', clip: 'polygon(100% 0, 100% 100%, 0 100%)', tone: 'bg-shade-1' },
  { height: '74%', clip: 'none', tone: 'bg-shade-2' },
  { height: '100%', clip: 'polygon(50% 0, 100% 9%, 100% 100%, 0 100%, 0 9%)', tone: 'bg-signal' },
  { height: '78%', clip: 'none', tone: 'bg-shade-4' },
  { height: '56%', clip: 'polygon(0 0, 100% 100%, 0 100%)', tone: 'bg-shade-5' },
];

export function ShadeRamp() {
  const { pillars } = siteConfig.services;

  return (
    <div className="w-full">
      <div aria-hidden="true" className="grid h-36 grid-cols-5 items-end gap-2 xs:h-44 sm:h-56 sm:gap-3 lg:h-72">
        {shapes.map((shape, i) => (
          <span
            key={i}
            className={cn('block w-full origin-bottom animate-rise motion-reduce:animate-none', shape.tone)}
            style={{
              height: shape.height,
              clipPath: shape.clip,
              animationDelay: `${200 + i * 110}ms`,
            }}
          />
        ))}
      </div>

      <nav aria-label="Service areas" className="mt-4">
        <ul className="grid grid-cols-3 border-t border-ink-700">
          {pillars.map((pillar, i) => (
            <li key={pillar.id} className={cn(i > 0 && 'border-l border-ink-700')}>
              <a
                href={`#pillar-${pillar.id}`}
                className={cn('group block h-full pb-1 pt-4', i === 0 ? 'pr-2' : 'pl-3 pr-1 sm:pl-4')}
              >
                <span className="block font-display text-[13px] font-semibold text-paper transition-colors group-hover:text-white xs:text-sm sm:text-base">
                  {pillar.label}
                </span>
                <span className="mt-1 hidden text-xs leading-snug text-fog-dim sm:block">
                  {pillar.summary}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

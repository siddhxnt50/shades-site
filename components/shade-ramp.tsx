import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

/**
 * The logo mark rebuilt as the hero figure: five shapes forming the Shades
 * skyline, one per service. Each shape links to its service entry.
 */
const shapes = [
  { height: '46%', clip: 'polygon(100% 0, 100% 100%, 0 100%)', tone: 'bg-shade-1 group-hover:bg-shade-2' },
  { height: '74%', clip: 'none', tone: 'bg-shade-2 group-hover:bg-shade-3' },
  {
    height: '100%',
    clip: 'polygon(50% 0, 100% 9%, 100% 100%, 0 100%, 0 9%)',
    tone: 'bg-signal group-hover:bg-signal-soft',
  },
  { height: '78%', clip: 'none', tone: 'bg-shade-4 group-hover:bg-shade-5' },
  { height: '56%', clip: 'polygon(0 0, 100% 100%, 0 100%)', tone: 'bg-shade-5 group-hover:bg-white' },
];

export function ShadeRamp() {
  const services = siteConfig.services.items;

  return (
    <figure className="w-full">
      <figcaption className="eyebrow mb-5 flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-shade-2" />
        {siteConfig.hero.rampCaption}
      </figcaption>
      <ul className="grid grid-cols-5 items-end gap-2 sm:gap-3">
        {services.map((service, i) => {
          const shape = shapes[i];
          return (
            <li key={service.number}>
              <a
                href={`#service-${service.number}`}
                className="group flex flex-col"
                aria-label={`${service.number} ${service.category}: ${service.title}`}
              >
                <span
                  aria-hidden="true"
                  className="flex h-36 items-end xs:h-44 sm:h-56 lg:h-72"
                >
                  <span
                    className={cn(
                      'block w-full origin-bottom animate-rise transition-colors duration-300 motion-reduce:animate-none',
                      shape.tone
                    )}
                    style={{
                      height: shape.height,
                      clipPath: shape.clip,
                      animationDelay: `${200 + i * 110}ms`,
                    }}
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="mt-3 border-t border-ink-700 pt-3 font-mono text-[10px] leading-tight text-fog-dim transition-colors group-hover:text-paper sm:text-[11px]"
                >
                  <span className="block text-shade-3 group-hover:text-signal">{service.number}</span>
                  <span className="block [hyphens:auto]">{service.category}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </figure>
  );
}

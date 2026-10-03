'use client';

import { siteConfig, serviceIds } from '@/config/site';
import { useActiveSection } from '@/components/use-active-section';
import { cn } from '@/lib/utils';

/** Sticky desktop table of contents for the services list, tracking scroll position. */
export function ServiceIndex() {
  const active = useActiveSection(serviceIds);

  return (
    <nav aria-label="Services index" className="mt-12 hidden lg:block">
      <ol className="border-l border-ink-700">
        {siteConfig.services.items.map((service) => {
          const id = `service-${service.number}`;
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  '-ml-px flex gap-4 border-l py-2.5 pl-5 text-sm transition-colors duration-300',
                  isActive
                    ? 'border-signal text-paper'
                    : 'border-transparent text-fog-dim hover:text-paper'
                )}
              >
                <span className={cn('font-mono text-xs', isActive ? 'text-signal' : 'text-shade-3')}>
                  {service.number}
                </span>
                {service.category}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

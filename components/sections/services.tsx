import { siteConfig, type ServiceItem } from '@/config/site';
import { Reveal } from '@/components/motion';
import { ServiceIndex } from '@/components/sections/service-index';
import { cn } from '@/lib/utils';

/** Five-step mini ramp marking where a service sits in the sequence. */
function ShadeSteps({ active }: { active: number }) {
  return (
    <span aria-hidden="true" className="flex h-4 items-end gap-[3px]">
      {[40, 60, 100, 70, 50].map((h, i) => (
        <span
          key={i}
          className={cn('w-[5px]', i === active ? 'bg-signal' : 'bg-ink-600')}
          style={{ height: `${h}%` }}
        />
      ))}
    </span>
  );
}

function ServiceEntry({ service, index }: { service: ServiceItem; index: number }) {
  const id = `service-${service.number}`;

  return (
    <li id={id} className="scroll-mt-28 border-b border-ink-700 py-10 first:pt-0 sm:py-14 lg:first:pt-2">
      <Reveal>
        <article aria-labelledby={`${id}-title`}>
          <div className="flex items-center gap-4 font-mono text-xs">
            <span className="text-signal">{service.number}</span>
            <ShadeSteps active={index} />
            <span className="uppercase tracking-[0.16em] text-fog-dim">{service.category}</span>
          </div>

          <h3
            id={`${id}-title`}
            className="mt-5 max-w-2xl font-display text-2xl font-semibold leading-[1.15] tracking-[-0.015em] text-paper sm:text-3xl"
          >
            {service.title}
          </h3>

          <div className="mt-8 grid gap-8 md:grid-cols-5 md:gap-10">
            <div className="md:col-span-2">
              <p className="eyebrow">Outcome</p>
              <p className="mt-3 text-lg leading-snug text-paper-dim">{service.outcome}</p>
            </div>
            <div className="md:col-span-3">
              <p className="eyebrow">What we do</p>
              <ul className="mt-3 space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-fog">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-shade-3" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Reveal>
    </li>
  );
}

export function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" aria-labelledby="services-heading" className="relative">
      <div className="safe-x mx-auto grid max-w-7xl gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="text-signal">01</span> — {services.kicker}
              </p>
              <h2
                id="services-heading"
                className="mt-5 font-display text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.02em] text-paper sm:text-4xl lg:text-[2.6rem]"
              >
                {services.heading} <span className="text-shade-3">{services.headingMuted}</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-fog">{services.intro}</p>
            </Reveal>
            <ServiceIndex />
          </div>
        </div>

        <ol className="lg:col-span-8 lg:col-start-5" aria-label="Services">
          {services.items.map((service, i) => (
            <ServiceEntry key={service.number} service={service} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

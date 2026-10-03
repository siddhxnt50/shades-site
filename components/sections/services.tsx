import { siteConfig, type ServiceItem } from '@/config/site';
import { Reveal } from '@/components/motion';
import { cn } from '@/lib/utils';

function ServiceEntry({ service, index }: { service: ServiceItem; index: number }) {
  const id = `service-${service.number}`;

  return (
    <li
      id={id}
      className={cn(
        'border-b border-ink-700 py-10 last:border-b-0 sm:py-12 lg:border-b-0',
        index === 0 ? 'lg:pr-12' : 'lg:border-l lg:pl-12'
      )}
    >
      <Reveal delay={index * 0.08}>
        <article aria-labelledby={`${id}-title`}>
          {/* Fixed height keeps titles aligned across a row whether or not a badge is present */}
          <div className="flex h-6 items-center gap-4 font-mono text-xs">
            <span className="text-signal">{service.number}</span>
            {service.core && (
              <span className="rounded-full border border-signal/40 px-2.5 py-0.5 uppercase tracking-[0.12em] text-signal-soft">
                Core service
              </span>
            )}
          </div>

          <h4
            id={`${id}-title`}
            className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-[-0.015em] text-paper sm:text-[1.75rem]"
          >
            {service.title}
          </h4>

          <p className="mt-4 max-w-xl text-[17px] leading-snug text-paper-dim">{service.summary}</p>

          <p className="eyebrow mt-8">What&apos;s included</p>
          <ul className="mt-3 space-y-3">
            {service.included.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-fog">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-shade-3" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </li>
  );
}

export function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" aria-labelledby="services-heading" className="relative">
      <div className="safe-x mx-auto max-w-7xl py-20 sm:py-28 lg:py-32">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow">
              <span className="text-signal">01</span> — {services.kicker}
            </p>
            <h2
              id="services-heading"
              className="mt-5 font-display text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.02em] text-paper sm:text-4xl lg:text-5xl"
            >
              {services.heading} <span className="text-shade-3">{services.headingMuted}</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-fog sm:text-lg lg:col-span-5">
            {services.intro}
          </p>
        </Reveal>

        <div className="mt-14 space-y-12 sm:mt-20 sm:space-y-16">
          {services.pillars.map((pillar) => (
            <div key={pillar.id} id={`pillar-${pillar.id}`}>
              <Reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-ink-700 pb-4">
                <h3 className="font-display text-xl font-semibold tracking-tight text-paper sm:text-2xl">
                  {pillar.label}
                </h3>
                <p className="basis-full text-sm text-fog-dim sm:basis-auto">{pillar.summary}</p>
              </Reveal>
              <ul className="grid lg:grid-cols-2">
                {services.items
                  .filter((service) => service.pillar === pillar.id)
                  .map((service, j) => (
                    <ServiceEntry key={service.number} service={service} index={j} />
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

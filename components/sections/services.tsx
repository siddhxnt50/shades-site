import { pillarOf, siteConfig, type ServiceItem } from '@/config/site';
import { Reveal } from '@/components/motion';
import { ServiceIndex } from '@/components/sections/service-index';

function ServiceEntry({ service }: { service: ServiceItem }) {
  const id = `service-${service.number}`;
  const pillar = pillarOf(service);

  return (
    <li id={id} className="border-b border-ink-700 py-10 first:pt-0 sm:py-14 lg:first:pt-2">
      <Reveal>
        <article aria-labelledby={`${id}-title`}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs">
            <span className="text-signal">{service.number}</span>
            <span className="uppercase tracking-[0.16em] text-fog-dim">{pillar.label}</span>
            {service.core && (
              <span className="rounded-full border border-signal/40 px-2.5 py-0.5 uppercase tracking-[0.12em] text-signal-soft">
                Core service
              </span>
            )}
          </div>

          <h3
            id={`${id}-title`}
            className="mt-5 font-display text-2xl font-semibold leading-[1.15] tracking-[-0.015em] text-paper sm:text-3xl"
          >
            {service.title}
          </h3>

          <div className="mt-6 grid gap-8 md:grid-cols-5 md:gap-10">
            <p className="text-lg leading-snug text-paper-dim md:col-span-2">{service.summary}</p>
            <div className="md:col-span-3">
              <p className="eyebrow">What&apos;s included</p>
              <ul className="mt-3 space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-fog">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-shade-3" />
                    <span>{item}</span>
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
          <div className="lg:top-28 lg:tall:sticky">
            <Reveal>
              <p className="eyebrow">
                <span className="text-signal">01</span> — {services.kicker}
              </p>
              <h2
                id="services-heading"
                className="mt-5 font-display text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.02em] text-paper sm:text-4xl lg:text-[2.1rem] xl:text-[2.4rem]"
              >
                {services.heading} <span className="text-shade-3">{services.headingMuted}</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-fog">{services.intro}</p>
            </Reveal>
            <ServiceIndex />
          </div>
        </div>

        <ol className="lg:col-span-8 lg:col-start-5" aria-label="Services">
          {services.items.map((service) => (
            <ServiceEntry key={service.number} service={service} />
          ))}
        </ol>
      </div>
    </section>
  );
}

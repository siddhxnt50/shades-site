import { siteConfig, type ServiceItem } from '@/config/site';
import { Card, CardLabel } from '@/components/ui/card';
import { Reveal } from '@/components/motion';
import { cn } from '@/lib/utils';

function ServiceBullets({ bullets }: { bullets: readonly string[] }) {
  return (
    <ul className="space-y-3 text-[15px] leading-relaxed text-slate-300">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-500"
          />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

function ServiceCardHeader({ service }: { service: ServiceItem }) {
  return (
    <div className="mb-6 flex items-start justify-between">
      <span
        aria-hidden="true"
        className="bg-gradient-to-br from-indigo-500 to-indigo-700 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl"
      >
        {service.number}
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-indigo-400/80">
        {service.category}
      </span>
    </div>
  );
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const featured = 'featured' in service && service.featured;
  const headingId = `service-${service.number}`;

  return (
    <Reveal delay={Math.min(index * 0.08, 0.32)} className={cn(featured && 'md:col-span-2')}>
      <Card as="article" aria-labelledby={headingId} className="h-full">
        <ServiceCardHeader service={service} />

        {featured ? (
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3
                id={headingId}
                className="mb-4 text-xl font-semibold leading-tight tracking-tight sm:mb-5 sm:text-2xl md:text-[28px]"
              >
                {service.title}
              </h3>
              <div>
                <CardLabel className="mb-2">Outcome</CardLabel>
                <p className="leading-relaxed text-slate-200">{service.outcome}</p>
              </div>
            </div>
            <div>
              <CardLabel className="mb-4">What we do</CardLabel>
              <ServiceBullets bullets={service.bullets} />
            </div>
          </div>
        ) : (
          <>
            <h3
              id={headingId}
              className="mb-4 text-xl font-semibold leading-tight tracking-tight sm:mb-5 sm:text-2xl md:text-[28px]"
            >
              {service.title}
            </h3>
            <div className="mb-6 border-b border-white/5 pb-6">
              <CardLabel className="mb-2">Outcome</CardLabel>
              <p className="leading-relaxed text-slate-200">{service.outcome}</p>
            </div>
            <div>
              <CardLabel className="mb-4">What we do</CardLabel>
              <ServiceBullets bullets={service.bullets} />
            </div>
          </>
        )}
      </Card>
    </Reveal>
  );
}

export function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" className="relative scroll-mt-16 py-16 sm:py-20 md:py-32">
      <div className="safe-x mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 max-w-3xl sm:mb-14 md:mb-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-indigo-400 sm:text-xs">
              {services.kicker}
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-[1.1] tracking-tight sm:mt-4 sm:text-3xl md:text-5xl lg:text-6xl">
              {services.heading} <span className="text-slate-500">{services.headingMuted}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
              {services.intro}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
          {services.items.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

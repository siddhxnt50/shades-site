import { ArrowDown, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { ButtonLink } from '@/components/ui/button';
import { ShadeRamp } from '@/components/shade-ramp';
import { cn } from '@/lib/utils';

// Above the fold animates with CSS keyframes, not JS, so the headline paints
// on first load instead of waiting for hydration.
const enter = 'animate-fade-up motion-reduce:animate-none';

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section aria-labelledby="hero-heading" className="relative pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-44">
      <div className="safe-x mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <p className={cn('eyebrow mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mb-9', enter)}>
            <span className="inline-flex items-center gap-2 text-paper-dim">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              {hero.status}
            </span>
            <span aria-hidden="true" className="hidden text-shade-2 sm:inline">/</span>
            <span className="basis-full sm:basis-auto">{siteConfig.tagline}</span>
          </p>

          <h1
            id="hero-heading"
            className={cn(
              'font-display text-[1.7rem] font-semibold leading-[1.08] tracking-[-0.02em] text-fog-dim xs:text-[2.05rem] sm:text-5xl sm:leading-[1.04] lg:text-[3.5rem] xl:text-[4rem]',
              enter
            )}
            style={{ animationDelay: '80ms' }}
          >
            {hero.headline.map((segment, i) =>
              segment.accent ? (
                <span key={i} className="text-paper">
                  {segment.text}
                </span>
              ) : (
                <span key={i}>{segment.text}</span>
              )
            )}
          </h1>

          <p
            className={cn('mt-7 max-w-xl text-base leading-relaxed text-fog sm:mt-8 sm:text-lg', enter)}
            style={{ animationDelay: '160ms' }}
          >
            {hero.subheadline}
          </p>

          <div
            className={cn('mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4', enter)}
            style={{ animationDelay: '240ms' }}
          >
            <ButtonLink href={hero.ctaPrimary.href} size="lg" fullWidthMobile>
              {hero.ctaPrimary.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={hero.ctaSecondary.href} variant="secondary" size="lg" fullWidthMobile>
              {hero.ctaSecondary.label}
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
          </div>

          <dl
            className={cn('mt-12 grid grid-cols-2 gap-6 border-t border-ink-700 pt-6 sm:max-w-lg', enter)}
            style={{ animationDelay: '320ms' }}
          >
            {hero.proof.map((item) => (
              <div key={item.value} className="flex flex-col-reverse">
                <dt className="mt-1.5 text-[13px] leading-snug text-fog sm:text-sm">{item.label}</dt>
                <dd className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={cn('lg:col-span-5', enter)} style={{ animationDelay: '200ms' }}>
          <ShadeRamp />
        </div>
      </div>
    </section>
  );
}

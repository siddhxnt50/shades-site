import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { LogoMark } from '@/components/logo';
import { Reveal } from '@/components/motion';

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 md:pb-28 md:pt-44">
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]"
      />

      {/* Watermark logo (desktop only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[460px] w-[520px] -translate-y-1/2 opacity-[0.07] lg:block"
      >
        <LogoMark muted className="h-full w-full" />
      </div>

      <div className="safe-x relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <Reveal>
            <div className="mb-6 flex flex-col items-start gap-2.5 sm:mb-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <Badge dot>{hero.pillPrimary}</Badge>
              <Badge variant="neutral">{hero.pillSecondary}</Badge>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mb-6 text-[1.75rem] font-bold leading-[1.1] tracking-tight xs:text-4xl xs:leading-[1.08] sm:mb-7 sm:text-5xl sm:leading-[1.05] md:text-6xl lg:text-7xl">
              {hero.headline.map((segment, i) =>
                segment.accent ? (
                  <span key={i} className="gradient-text">
                    {segment.text}
                  </span>
                ) : (
                  <span key={i}>{segment.text}</span>
                )
              )}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:mb-10 sm:text-lg md:text-xl">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href={hero.ctaPrimary.href} fullWidthMobile>
                {hero.ctaPrimary.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={hero.ctaSecondary.href} variant="outline" fullWidthMobile>
                {hero.ctaSecondary.label}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

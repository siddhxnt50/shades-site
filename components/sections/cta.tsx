import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/motion';

export function Cta() {
  const { cta, contactEmail } = siteConfig;
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(cta.subjectLine)}`;

  return (
    <section id="cta" className="relative scroll-mt-16 overflow-hidden py-16 sm:py-20 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[100px] sm:h-[400px] sm:w-[800px] sm:blur-[140px]"
      />

      <div className="safe-x relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-indigo-400 sm:text-xs">
            {cta.kicker}
          </p>
          <h2 className="mb-5 mt-4 text-[2rem] font-bold leading-[1.08] tracking-tight sm:mb-6 sm:mt-5 sm:text-4xl sm:leading-[1.05] md:text-6xl">
            {cta.headingLead}
            <span className="gradient-text">{cta.headingAccent}</span>
            {cta.headingRest}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-400 sm:mb-10 sm:text-lg">
            {cta.body}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ButtonLink href={mailto} size="lg" fullWidthMobile className="font-semibold">
            {cta.button}
            <ArrowRight aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
          </ButtonLink>
          <p className="mt-5 px-4 text-xs text-slate-500 sm:mt-6 sm:text-sm">{cta.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

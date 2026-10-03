import { Check, Minus } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/motion';

export function Approach() {
  const { approach } = siteConfig;

  return (
    <section id="approach" aria-labelledby="approach-heading" className="border-t border-ink-700">
      <div className="safe-x mx-auto max-w-7xl py-20 sm:py-28 lg:py-32">
        <Reveal>
          <p className="eyebrow">
            <span className="text-signal">03</span> — {approach.kicker}
          </p>
          <h2
            id="approach-heading"
            className="mt-6 max-w-5xl font-display text-[1.45rem] font-medium leading-[1.3] tracking-[-0.015em] text-fog-dim sm:text-3xl sm:leading-[1.25] lg:text-[2.6rem] lg:leading-[1.18]"
          >
            {approach.statementLead}
            <span className="text-paper">{approach.statementAccent}</span>
            {approach.statementRest}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 sm:mt-20">
          <div className="hidden grid-cols-2 gap-10 border-b border-ink-700 pb-4 sm:grid">
            <p className="eyebrow">{approach.usualLabel}</p>
            <p className="eyebrow text-signal">{approach.oursLabel}</p>
          </div>
          <ul>
            {approach.comparison.map((row) => (
              <li
                key={row.ours}
                className="grid gap-3 border-b border-ink-700 py-5 sm:grid-cols-2 sm:gap-10 sm:py-6"
              >
                <p className="flex items-start gap-3 text-[15px] text-fog-dim sm:text-base">
                  <Minus aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-shade-2 sm:mt-1" />
                  <span>
                    <span className="sr-only">{approach.usualLabel}: </span>
                    <span className="line-through decoration-shade-2">{row.usual}</span>
                  </span>
                </p>
                <p className="flex items-start gap-3 text-[15px] text-paper sm:text-base">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-signal sm:mt-1" />
                  <span>
                    <span className="sr-only">{approach.oursLabel}: </span>
                    {row.ours}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

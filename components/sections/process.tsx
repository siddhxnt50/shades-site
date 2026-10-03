import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/motion';

export function Process() {
  const { process } = siteConfig;

  return (
    <section id="process" aria-labelledby="process-heading" className="border-t border-ink-700 bg-ink-850/60">
      <div className="safe-x mx-auto max-w-7xl py-20 sm:py-28 lg:py-32">
        <Reveal>
          <p className="eyebrow">
            <span className="text-signal">02</span> — {process.kicker}
          </p>
          <h2
            id="process-heading"
            className="mt-5 max-w-3xl font-display text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.02em] text-paper sm:text-4xl lg:text-[2.6rem]"
          >
            {process.heading} <span className="text-shade-3">{process.headingMuted}</span>
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:mt-16 md:grid-cols-3">
          {process.steps.map((step, i) => (
            <li key={step.number} className="bg-ink-900">
              <Reveal delay={i * 0.1} className="flex h-full flex-col p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-signal">{step.number}</span>
                  <span aria-hidden="true" className="flex items-end gap-[3px]">
                    {process.steps.map((_, j) => (
                      <span
                        key={j}
                        className={j <= i ? 'w-[5px] bg-shade-4' : 'w-[5px] bg-ink-600'}
                        style={{ height: `${8 + j * 5}px` }}
                      />
                    ))}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-semibold tracking-[-0.015em] text-paper sm:mt-14">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-fog">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

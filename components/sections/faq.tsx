import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function Faq() {
  const { faq } = siteConfig;

  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-ink-700 bg-ink-850/60">
      <div className="safe-x mx-auto grid max-w-7xl gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">
            <span className="text-signal">04</span> — {faq.kicker}
          </p>
          <h2
            id="faq-heading"
            className="mt-5 font-display text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.02em] text-paper sm:text-4xl lg:text-[2.6rem]"
          >
            {faq.heading} <span className="text-shade-3">{faq.headingMuted}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8">
          <Accordion type="single" collapsible className="border-t border-ink-700">
            {faq.items.map((item, i) => (
              <AccordionItem key={item.question} value={`faq-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                  {'guide' in item && (
                    <dl className="mt-4 divide-y divide-ink-700 border-y border-ink-700">
                      {item.guide.map((row) => (
                        <div key={row.need} className="grid gap-1 py-3 sm:grid-cols-2 sm:gap-6">
                          <dt className="text-fog">{row.need}</dt>
                          <dd className="text-paper">{row.service}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

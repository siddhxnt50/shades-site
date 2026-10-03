import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { ButtonLink } from '@/components/ui/button';
import { CopyEmail } from '@/components/copy-email';
import { Reveal } from '@/components/motion';

export function Contact() {
  const { contact, contactEmail } = siteConfig;
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(contact.subjectLine)}`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden border-t border-ink-700">
      {/* The logo ramp, enlarged and faint, anchoring the close */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px right-0 hidden h-[85%] w-[42%] items-end gap-3 opacity-[0.08] lg:flex"
      >
        {[46, 74, 100, 78, 56].map((h, i) => (
          <span key={i} className="flex-1 bg-paper" style={{ height: `${h}%` }} />
        ))}
      </div>

      <div className="safe-x relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="text-signal">05</span> — {contact.kicker}
          </p>
          <h2
            id="contact-heading"
            className="mt-6 font-display text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.025em] text-paper xs:text-[2.6rem] sm:text-6xl lg:text-7xl"
          >
            <span className="text-shade-3">{contact.headingLead}</span>
            {contact.headingAccent}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-fog sm:text-lg">{contact.body}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:mt-12 md:flex-row md:items-center">
          <ButtonLink href={mailto} size="lg" className="w-full md:w-auto">
            {contact.button}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </ButtonLink>
          <CopyEmail email={contactEmail} />
        </Reveal>

        <p className="mt-8 text-sm text-fog-dim">{contact.note}</p>
      </div>
    </section>
  );
}

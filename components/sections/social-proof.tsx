import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/motion';

export function SocialProof() {
  const { socialProof } = siteConfig;

  return (
    <section aria-labelledby="proof-heading" className="border-y border-ink-700 bg-ink-850/60">
      <div className="safe-x mx-auto max-w-7xl py-8 sm:py-10">
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
          <h2 id="proof-heading" className="eyebrow shrink-0 lg:max-w-[14rem]">
            {socialProof.prefix}
          </h2>
          <ul className="flex flex-wrap gap-x-7 gap-y-3 sm:gap-x-10 lg:flex-1 lg:justify-between lg:gap-x-6">
            {socialProof.names.map((name) => (
              <li
                key={name}
                className="whitespace-nowrap font-display text-lg font-medium tracking-tight text-paper-dim sm:text-xl lg:text-2xl"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

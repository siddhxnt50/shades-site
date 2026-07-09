import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/motion';

export function SocialProof() {
  const { socialProof } = siteConfig;

  return (
    <section aria-label="Trusted by" className="relative border-y border-white/5 bg-slate-900/50 py-8 sm:py-10">
      <div className="safe-x mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-6 md:flex-row md:gap-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.2em]">
              {socialProof.prefix}
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-8">
              {socialProof.names.map((name, i) => (
                <li key={name} className="flex items-center gap-4 sm:gap-6 md:gap-8">
                  <span className="whitespace-nowrap text-base font-semibold tracking-tight text-slate-300 sm:text-lg md:text-xl">
                    {name}
                  </span>
                  {i < socialProof.names.length - 1 && (
                    <span aria-hidden="true" className="text-slate-700">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

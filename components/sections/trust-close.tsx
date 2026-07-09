import { Check, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/motion';

export function TrustClose() {
  const { trustClose } = siteConfig;

  return (
    <section id="approach" className="relative scroll-mt-16 py-16 sm:py-20 md:py-28">
      <div className="safe-x mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.08] to-indigo-500/[0.02] p-6 sm:rounded-3xl sm:p-8 md:p-14 lg:p-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl sm:h-72 sm:w-72"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-700/10 blur-3xl sm:h-72 sm:w-72"
            />

            <div className="relative">
              <div className="mb-5 flex items-center gap-2 sm:mb-6">
                <span aria-hidden="true" className="h-px w-6 bg-indigo-400 sm:w-8" />
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-indigo-400 sm:text-xs sm:tracking-[0.2em]">
                  {trustClose.kicker}
                </p>
              </div>

              <p className="text-xl font-medium leading-[1.4] tracking-tight text-white sm:text-2xl sm:leading-[1.35] md:text-3xl lg:text-[34px]">
                {trustClose.statementLead}
                <span className="text-indigo-400">{trustClose.statementAccent}</span>
                {trustClose.statementRest}
              </p>

              <ul className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:gap-6 sm:pt-8">
                {trustClose.points.map((point, i) => (
                  <li key={point.text} className="flex items-center gap-3 sm:gap-6">
                    <span className="flex items-center gap-3">
                      {point.icon === 'x' ? (
                        <X aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-indigo-400" />
                      ) : (
                        <Check aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-indigo-400" />
                      )}
                      <span className="text-sm text-slate-300 sm:text-base">{point.text}</span>
                    </span>
                    {i < trustClose.points.length - 1 && (
                      <span aria-hidden="true" className="hidden h-4 w-px bg-white/10 sm:block" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { LogoMark } from '@/components/logo';
import { ButtonLink } from '@/components/ui/button';

export const metadata: Metadata = {
  title: `Page not found — ${siteConfig.name}`,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="safe-x flex min-h-[100svh] flex-col items-start justify-center outline-none"
    >
      <div className="mx-auto w-full max-w-3xl">
        <LogoMark className="h-10 w-auto" />
        <p className="eyebrow mt-12">
          <span className="text-signal">404</span> — Page not found
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-paper sm:text-6xl">
          <span className="text-shade-3">This page took</span> a different route.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-fog">
          The link may be outdated, or the page has moved. Everything we do lives on the home page.
        </p>
        <ButtonLink href="/" size="lg" className="mt-10">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to {siteConfig.shortName}
        </ButtonLink>
      </div>
    </main>
  );
}

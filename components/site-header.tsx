'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig, sectionIds } from '@/config/site';
import { LogoMark } from '@/components/logo';
import { ButtonLink } from '@/components/ui/button';
import { useActiveSection } from '@/components/use-active-section';
import { cn } from '@/lib/utils';

const FOCUSABLE = 'a[href], button:not([disabled])';

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const active = useActiveSection(sectionIds);
  const headerRef = React.useRef<HTMLElement>(null);
  const sheetRef = React.useRef<HTMLDivElement>(null);
  const toggleRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = React.useCallback((restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // While the sheet is open: lock scroll, move focus in, trap Tab inside the header.
  React.useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    sheetRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close(true);
        return;
      }
      if (e.key !== 'Tab' || !headerRef.current) return;
      const items = Array.from(headerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) close(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open, close]);

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300',
        // No backdrop-filter while open: it would become the containing block
        // for the position:fixed sheet and collapse it to the header's height.
        open
          ? 'border-ink-700 bg-ink-900'
          : scrolled
            ? 'border-ink-700 bg-ink-900/85 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
      )}
    >
      <div className="safe-x mx-auto flex h-16 max-w-7xl items-center justify-between md:h-[4.5rem]">
        <a href="#top" className="group flex items-center gap-3" onClick={() => open && close(false)}>
          <LogoMark className="h-7 w-auto sm:h-8" />
          <span className="font-display text-[15px] font-semibold tracking-tight text-paper sm:text-base">
            {siteConfig.name}
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm transition-colors',
                  isActive ? 'text-paper' : 'text-fog hover:text-paper'
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-x-4 -bottom-px h-px bg-signal transition-opacity duration-300',
                    isActive ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </a>
            );
          })}
          <ButtonLink href={siteConfig.navCta.href} size="sm" className="ml-4">
            {siteConfig.navCta.label}
          </ButtonLink>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => (open ? close(false) : setOpen(true))}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2.5 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={cn(
              'block h-px w-5 bg-paper transition-transform duration-300',
              open && 'translate-y-[3px] rotate-45'
            )}
          />
          <span
            className={cn(
              'block h-px w-5 bg-paper transition-transform duration-300',
              open && '-translate-y-[3px] -rotate-45'
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={sheetRef}
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-ink-900 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <nav aria-label="Mobile" className="safe-x flex min-h-full flex-col pb-[max(2rem,env(safe-area-inset-bottom))] pt-6">
              <ol className="border-t border-ink-700">
                {siteConfig.nav.map((item, i) => (
                  <li key={item.href} className="border-b border-ink-700">
                    <a
                      href={item.href}
                      onClick={() => close(false)}
                      className="flex items-baseline gap-4 py-5 font-display text-2xl font-semibold text-paper"
                    >
                      <span className="font-mono text-xs font-normal text-signal">0{i + 1}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-auto pt-10">
                <ButtonLink
                  href={siteConfig.navCta.href}
                  size="lg"
                  className="w-full"
                  onClick={() => close(false)}
                >
                  {siteConfig.hero.ctaPrimary.label}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </ButtonLink>
                <p className="eyebrow mt-5 text-center normal-case tracking-[0.04em]">
                  {siteConfig.contactEmail}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

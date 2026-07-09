'use client';

import * as React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { LogoMark } from '@/components/logo';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const reduceMotion = useReducedMotion();
  const menuRef = React.useRef<HTMLElement>(null);
  const hamburgerRef = React.useRef<HTMLButtonElement>(null);

  // Lock body scroll while the menu is open; move focus into the menu
  // on open and back to the toggle on close (disclosure pattern).
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      menuRef.current?.querySelector('a')?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = React.useCallback(() => {
    setOpen((wasOpen) => {
      if (wasOpen) hamburgerRef.current?.focus();
      return false;
    });
  }, []);

  // Close on Escape and on resize to desktop
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [close]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-slate-900/80 backdrop-blur-xl">
      <div className="safe-x mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-8 flex-shrink-0 items-end justify-center sm:h-8 sm:w-9">
              <LogoMark className="h-full w-auto transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-0.5" />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate text-[15px] font-semibold tracking-tight sm:text-base md:text-lg">
                <span className="sm:hidden">
                  {siteConfig.shortName}
                  <span className="text-indigo-400">.</span>
                </span>
                <span className="hidden sm:inline">{siteConfig.name}</span>
              </span>
              <span className="mt-0.5 hidden text-[10px] tracking-wide text-slate-500 sm:block">
                {siteConfig.shortTagline}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition-all hover:bg-indigo-100 hover:shadow-lg hover:shadow-white/10"
            >
              {siteConfig.navCta}
            </a>
          </nav>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-2 flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={cn(
                'block h-0.5 w-6 bg-white transition-all duration-300',
                open && 'translate-y-2 rotate-45'
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-6 bg-white transition-all duration-300',
                open && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-6 bg-white transition-all duration-300',
                open && '-translate-y-2 -rotate-45'
              )}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              ref={menuRef}
              id="mobile-menu"
              aria-label="Mobile"
              className="overflow-hidden md:hidden"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex flex-col border-t border-white/5 py-4">
                {siteConfig.nav.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center py-3.5 text-base text-slate-200 transition hover:text-white',
                      i < siteConfig.nav.length - 1 && 'border-b border-white/5'
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronRight aria-hidden="true" className="ml-auto h-4 w-4 text-slate-500" />
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-full bg-indigo-500 px-5 py-3.5 text-center text-base font-medium text-white"
                >
                  {siteConfig.hero.ctaPrimary.label}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

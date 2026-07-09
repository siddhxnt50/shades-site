import { siteConfig } from '@/config/site';
import { LogoMark } from '@/components/logo';

export function SiteFooter() {
  return (
    <footer
      className="border-t border-white/5 pt-12 sm:pt-16"
      style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}
    >
      <div className="safe-x mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
          <span className="flex h-16 w-20 items-end justify-center sm:h-20 sm:w-24">
            <LogoMark className="h-full w-full" />
          </span>
          <p className="mt-4 text-xl font-semibold tracking-tight sm:mt-5 sm:text-2xl md:text-3xl">
            {siteConfig.name}
          </p>
          <p className="mt-1.5 text-xs italic text-slate-400 sm:mt-2 sm:text-sm">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-5 border-t border-white/5 pt-6 text-center sm:flex-row sm:gap-4 sm:pt-8 sm:text-left">
          <p className="text-[11px] text-slate-500 sm:text-xs">{siteConfig.footer.copyright}</p>
          <nav aria-label="Footer" className="flex items-center gap-5 text-xs text-slate-500 sm:gap-6">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 transition hover:text-slate-300 active:text-slate-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

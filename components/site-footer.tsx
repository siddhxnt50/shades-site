import { ArrowUp } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { LogoMark } from '@/components/logo';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-ink-700 bg-ink-950"
      style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}
    >
      <div className="safe-x mx-auto max-w-7xl pt-16 sm:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <LogoMark className="h-12 w-auto" />
            <p className="mt-6 font-display text-xl font-semibold tracking-tight text-paper">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-fog">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-1">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-block py-1.5 text-sm text-fog transition-colors hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow">Contact</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-4 inline-block break-all py-1.5 text-sm text-fog transition-colors hover:text-paper"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-ink-700 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-fog-dim">
            © {year} {siteConfig.name}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 self-start py-1.5 text-xs text-fog-dim transition-colors hover:text-paper sm:self-auto"
          >
            Back to top
            <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

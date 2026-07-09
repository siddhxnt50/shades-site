import { ParticleField } from '@/components/particles';
import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/sections/hero';
import { SocialProof } from '@/components/sections/social-proof';
import { Services } from '@/components/sections/services';
import { TrustClose } from '@/components/sections/trust-close';
import { Cta } from '@/components/sections/cta';
import { SiteFooter } from '@/components/site-footer';

export default function HomePage() {
  return (
    <>
      <ParticleField />
      <SiteHeader />
      <main className="relative z-10">
        <Hero />
        <SocialProof />
        <Services />
        <TrustClose />
        <Cta />
      </main>
      <div className="relative z-10">
        <SiteFooter />
      </div>
    </>
  );
}

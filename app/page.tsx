import { ParticleField } from '@/components/particles';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Hero } from '@/components/sections/hero';
import { SocialProof } from '@/components/sections/social-proof';
import { Services } from '@/components/sections/services';
import { Process } from '@/components/sections/process';
import { Approach } from '@/components/sections/approach';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <div id="top" aria-hidden="true" className="absolute top-0" />
      <ParticleField />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="relative z-10 outline-none">
        <Hero />
        <SocialProof />
        <Services />
        <Process />
        <Approach />
        <Faq />
        <Contact />
      </main>
      <div className="relative z-10">
        <SiteFooter />
      </div>
    </>
  );
}

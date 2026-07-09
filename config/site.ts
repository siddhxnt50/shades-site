export interface HeadlineSegment {
  readonly text: string;
  readonly accent?: boolean;
}

const heroHeadline: readonly HeadlineSegment[] = [
  { text: 'We build the ' },
  { text: 'sales funnels', accent: true },
  { text: ' and ' },
  { text: 'operational infrastructure', accent: true },
  { text: ' that take early-stage startups to market.' },
];

export const siteConfig = {
  name: 'Shades Consulting',
  shortName: 'Shades',
  tagline: 'Bridging the gap from MVP to Market',
  shortTagline: 'MVP → Market',
  navCta: 'Book Audit',
  url: 'https://www.shadesconsulting.in',
  description:
    'We build the sales funnels and operational infrastructure that take early-stage startups from MVP to market. Execution, not slide decks.',
  contactEmail: 'hello@shadesconsulting.co',

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#cta' },
  ],

  hero: {
    pillPrimary: 'Bridging the gap from MVP to Market',
    pillSecondary: 'Now accepting Q3 founders',
    // Segments render in order; `accent` segments get the gradient treatment.
    headline: heroHeadline,
    subheadline:
      'Execution over slide decks. We embed, ship the pipes, and leave the rails behind — so your runway becomes revenue, not retainer fees.',
    ctaPrimary: { label: 'Book a GTM Audit', href: '#cta' },
    ctaSecondary: { label: 'See the 5 services', href: '#services' },
  },

  socialProof: {
    prefix: 'Trusted by early-stage innovators at',
    names: ['Chitrabazaar', 'Kast'],
  },

  services: {
    kicker: 'Core Services',
    heading: 'Five execution surfaces.',
    headingMuted: 'Zero theory.',
    intro:
      'Each block ships with a measurable outcome and a precise scope of work. No retainers without a release date.',
    items: [
      {
        number: '01',
        category: 'Sales',
        title: 'Go-To-Market & Sales Pipeline Execution',
        outcome:
          'Accelerating customer acquisition channels and validating product-market fit.',
        bullets: [
          'Building outbound sales infrastructure from scratch.',
          'Setting up automated messaging sequences.',
          'Managing conversion funnels from raw lead to live demo.',
        ],
      },
      {
        number: '02',
        category: 'Intelligence',
        title: 'Market Intelligence & Positioning Diagnostics',
        outcome: 'Eliminating market guesswork with real-time field data.',
        bullets: [
          'Continuous competitor mapping.',
          'Pricing sensitivity analysis and localized demand assessments.',
          'Collecting raw buyer feedback to optimize sales scripts.',
        ],
      },
      {
        number: '03',
        category: 'Operations',
        title: 'Corporate Architecture & Operational Guardrails',
        outcome: 'Protecting founder equity and maximizing operational runway.',
        bullets: [
          'Engineering lean fiscal frameworks.',
          'Designing administrative safety boundaries.',
          'Building structured milestone layers for bootstrap environments.',
        ],
      },
      {
        number: '04',
        category: 'Revenue',
        title: 'Monetization Strategy & Pricing Frameworks',
        outcome: 'Unlocking hidden margins and structuring recurring revenue.',
        bullets: [
          'Deploying multi-tiered revenue distribution strategies.',
          'Optimizing pricing tiers across segments.',
          'Engineering subscription metrics for B2B and consumer sectors.',
        ],
      },
      {
        number: '05',
        category: 'Capital',
        title: 'Growth, Expansion & Investment Readiness Support',
        outcome: 'Packaging early metrics for institutional and angel capital.',
        bullets: [
          'Translating growth trajectories into a clear venture narrative.',
          'Codifying operational data and financial guardrails.',
          'Building an ironclad investor pack for fundraising cycles.',
        ],
        featured: true,
      },
    ],
  },

  trustClose: {
    kicker: 'The Anti-Consultant Promise',
    statementLead: 'We operate with ',
    statementAccent: 'absolute resource autonomy',
    statementRest:
      ". We don't drain internal management bandwidth — we deploy our own diagnostic models and tracking workflows so you can stay focused on shipping product.",
    points: [
      { icon: 'x' as const, text: 'No 60-page theoretical slide decks.' },
      { icon: 'check' as const, text: 'Just pure execution.' },
    ],
  },

  cta: {
    kicker: 'Start here',
    headingLead: 'Ready to build the ',
    headingAccent: 'pipes',
    headingRest: '?',
    body: "A 45-minute diagnostic. We map your funnel gaps, surface the next 90 days of execution, and tell you straight if we're not the right fit.",
    button: 'Book a Startup GTM Audit',
    subjectLine: 'Startup GTM Audit',
    note: 'Typically responds within 12 hours · Founders only',
  },

  footer: {
    copyright: '© 2026 Shades Consulting. Built for founders who ship.',
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type ServiceItem = (typeof siteConfig.services.items)[number];

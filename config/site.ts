export interface HeadlineSegment {
  readonly text: string;
  /** Rendered in the bright shade; the rest of the headline sits a tone lower. */
  readonly accent?: boolean;
}

const heroHeadline: readonly HeadlineSegment[] = [
  { text: 'We build the ' },
  { text: 'sales funnels', accent: true },
  { text: ' and ' },
  { text: 'operational infrastructure', accent: true },
  { text: ' that take early-stage startups to market.' },
];

const services = [
  {
    number: '01',
    category: 'Sales',
    title: 'Go-To-Market & Sales Pipeline Execution',
    outcome: 'Accelerating customer acquisition channels and validating product-market fit.',
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
  },
] as const;

export const siteConfig = {
  name: 'Shades Consulting',
  shortName: 'Shades',
  tagline: 'Bridging the gap from MVP to Market',
  shortTagline: 'MVP → Market',
  url: 'https://shadesconsulting.in',
  description:
    'We build the sales funnels and operational infrastructure that take early-stage startups from MVP to market. Execution, not slide decks.',
  contactEmail: 'hello@shadesconsulting.co',

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Approach', href: '#approach' },
    { label: 'FAQ', href: '#faq' },
  ],
  navCta: { label: 'Book an audit', href: '#contact' },

  hero: {
    status: 'Currently onboarding founders',
    headline: heroHeadline,
    subheadline:
      'Execution over slide decks. We embed, ship the pipes, and leave the rails behind — so your runway becomes revenue, not retainer fees.',
    ctaPrimary: { label: 'Book a GTM audit', href: '#contact' },
    ctaSecondary: { label: 'Explore the services', href: '#services' },
    rampCaption: 'Five execution surfaces',
  },

  socialProof: {
    prefix: 'Trusted by early-stage innovators at',
    names: ['Chitrabazaar', 'Kast', 'Krut.ai', 'OptimaLegal', 'Zoecrafts'],
  },

  services: {
    kicker: 'Services',
    heading: 'Five execution surfaces.',
    headingMuted: 'Zero theory.',
    intro:
      'Each block ships with a measurable outcome and a precise scope of work. No retainers without a release date.',
    items: services,
  },

  process: {
    kicker: 'Process',
    heading: 'From first call',
    headingMuted: 'to running system.',
    steps: [
      {
        number: '01',
        title: 'Diagnose',
        body: "A 45-minute GTM audit. We map your funnel gaps, surface the next 90 days of execution, and tell you straight if we're not the right fit.",
      },
      {
        number: '02',
        title: 'Build',
        body: 'We deploy our own diagnostic models and tracking workflows, then ship the infrastructure — outbound pipelines, pricing frameworks, operational guardrails.',
      },
      {
        number: '03',
        title: 'Hand over',
        body: 'We leave the rails behind. You keep the systems, the data and the playbook — so your runway turns into revenue, not retainer fees.',
      },
    ],
  },

  approach: {
    kicker: 'The anti-consultant promise',
    statementLead: 'We operate with ',
    statementAccent: 'absolute resource autonomy',
    statementRest:
      ". We don't drain internal management bandwidth — we deploy our own diagnostic models and tracking workflows so you can stay focused on shipping product.",
    usualLabel: 'The usual consultancy',
    oursLabel: 'Shades',
    comparison: [
      { usual: '60-page theoretical slide decks', ours: 'Working systems, shipped and running' },
      {
        usual: 'Draws on your management bandwidth',
        ours: 'Our own diagnostic models and tracking workflows',
      },
      { usual: 'Advice you still have to implement', ours: 'Execution from raw lead to live demo' },
      {
        usual: 'Open-ended retainers',
        ours: 'Every engagement ships with a measurable outcome',
      },
    ],
  },

  faq: {
    kicker: 'FAQ',
    heading: 'Questions founders',
    headingMuted: 'ask first.',
    items: [
      {
        question: 'Who do you work with?',
        answer:
          'Early-stage startups making the jump from MVP to market — founders who have a product and now need the sales pipeline, pricing and operational backbone to sell it, across both B2B and consumer sectors.',
      },
      {
        question: 'What happens on the GTM audit?',
        answer:
          "It's a 45-minute diagnostic. We map your funnel gaps, surface the next 90 days of execution, and tell you straight if we're not the right fit.",
      },
      {
        question: "How much of our team's time will this take?",
        answer:
          "As little as possible. We operate with absolute resource autonomy — we bring our own diagnostic models and tracking workflows instead of drawing on your management bandwidth, so you can stay focused on shipping product.",
      },
      {
        question: 'Do we get a strategy deck at the end?',
        answer:
          'No 60-page theoretical slide decks. You get working infrastructure — outbound systems, pricing frameworks and operational guardrails — that keeps running after we hand it over.',
      },
      {
        question: 'Can you help us get ready to raise?',
        answer:
          'Yes. We translate your growth trajectory, operational data and financial guardrails into an ironclad venture narrative and investor pack for institutional and angel capital.',
      },
      {
        question: 'How quickly will we hear back?',
        answer: 'We typically respond within 12 hours.',
      },
    ],
  },

  contact: {
    kicker: 'Start here',
    headingLead: 'Ready to build ',
    headingAccent: 'the pipes?',
    body: "A 45-minute diagnostic. We map your funnel gaps, surface the next 90 days of execution, and tell you straight if we're not the right fit.",
    button: 'Book a startup GTM audit',
    subjectLine: 'Startup GTM Audit',
    note: 'Typically responds within 12 hours · Founders only',
  },

  footer: {
    signoff: 'Built for founders who ship.',
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type ServiceItem = (typeof services)[number];

export const sectionIds = siteConfig.nav.map((item) => item.href.slice(1));
export const serviceIds = services.map((s) => `service-${s.number}`);

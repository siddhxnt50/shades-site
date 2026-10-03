export interface HeadlineSegment {
  readonly text: string;
  /** Rendered in the bright shade; the rest of the headline sits a tone lower. */
  readonly accent?: boolean;
}

export interface Pillar {
  readonly id: 'capital' | 'customers' | 'credibility';
  readonly label: string;
  readonly summary: string;
}

export interface ServiceItem {
  readonly number: string;
  readonly pillar: Pillar['id'];
  readonly title: string;
  readonly summary: string;
  readonly included: readonly string[];
  /** Flags the flagship service */
  readonly core?: boolean;
}

const heroHeadline: readonly HeadlineSegment[] = [
  { text: 'We help early-stage startups ' },
  { text: 'raise capital', accent: true },
  { text: ', ' },
  { text: 'win customers', accent: true },
  { text: ' and ' },
  { text: 'get noticed', accent: true },
  { text: '.' },
];

const pillars: readonly Pillar[] = [
  { id: 'capital', label: 'Capital', summary: 'Raise money and build a business investors will back.' },
  { id: 'customers', label: 'Customers', summary: 'Find buyers and build a brand they remember.' },
  { id: 'credibility', label: 'Credibility', summary: 'Be taken seriously by press, investors and customers.' },
];

const services: readonly ServiceItem[] = [
  {
    number: '01',
    pillar: 'capital',
    core: true,
    title: 'Fundraising Support',
    summary:
      'We get you ready to raise, then introduce you to the right investors from our network of 200+ investors and VC firms.',
    included: [
      'A data room organised the way investors expect to see it.',
      'Financial models and projections built from your real numbers.',
      'One strategy for product, sales, marketing and finance, so your answers to investors stay consistent.',
      'Your traction and numbers turned into a pitch investors can follow.',
      'Introductions and outreach to investors and VC firms in our network.',
    ],
  },
  {
    number: '02',
    pillar: 'capital',
    title: 'Business Model & Operations',
    summary:
      'We set up your pricing, finances and company structure so the business holds up as it grows — and when investors look closely.',
    included: [
      'Pricing and plans for B2B and consumer products, including subscriptions.',
      'Revenue models and the key metrics investors ask about.',
      'Lean budgets and cost controls that make your runway last longer.',
      'Company and equity structure that protects founders.',
      'Milestone plans that tie spending to progress.',
    ],
  },
  {
    number: '03',
    pillar: 'customers',
    title: 'Sales & Go-to-Market',
    summary:
      'We build your sales process from scratch and use real market feedback to sharpen it.',
    included: [
      'Outbound sales set up end to end: target lists, messaging and automated follow-ups.',
      'Pipeline management, from first contact to booked demo.',
      'Competitor research.',
      'Demand checks before you enter a new city or market.',
      'Buyer interviews, with what we learn fed straight back into your sales pitch.',
    ],
  },
  {
    number: '04',
    pillar: 'customers',
    title: 'Marketing Strategy',
    summary:
      'We define your brand, then run your social media, your founder profile and your launch ads.',
    included: [
      'Brand DNA: what you stand for, how you sound and how you look.',
      'Social media management across platforms.',
      'Personal brand building for founders.',
      'Ad campaigns for product launches.',
    ],
  },
  {
    number: '05',
    pillar: 'credibility',
    title: 'PR & Media',
    summary:
      'We get your startup covered in the national and business media that investors, customers and future hires read.',
    included: [
      'Articles in major news outlets — ANI, The Times of India, Forbes, Business Standard, Republic and hundreds more.',
      'A story angle that suits each outlet.',
      'Coverage planned around the message you want to put out.',
    ],
  },
  {
    number: '06',
    pillar: 'credibility',
    title: 'Websites',
    summary:
      'We design and build the site people land on after an investor intro, a press article or an ad.',
    included: [
      'Website design built on your brand identity.',
      'Fast, mobile-friendly development.',
      'Landing pages for product launches and ad campaigns.',
    ],
  },
];

export const siteConfig = {
  name: 'Shades Consulting',
  shortName: 'Shades',
  tagline: 'Bridging the gap from MVP to Market',
  url: 'https://shadesconsulting.in',
  description:
    'Shades Consulting helps early-stage startups raise capital, win customers and get noticed — fundraising support, business operations, sales, marketing, press coverage and websites.',
  summary: 'Fundraising, operations, sales, marketing, PR and websites for early-stage startups.',
  contactEmail: 'ceo@shadesconsulting.in',

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Approach', href: '#approach' },
    { label: 'FAQ', href: '#faq' },
  ],
  navCta: { label: 'Get in touch', href: '#contact' },

  hero: {
    status: 'Taking on new clients',
    headline: heroHeadline,
    subheadline:
      'Fundraising, business operations, sales, marketing, PR and websites, handled by one team.',
    ctaPrimary: { label: 'Get in touch', href: '#contact' },
    ctaSecondary: { label: 'See what we do', href: '#services' },
    proof: [
      { value: '200+', label: 'investors and VC firms in our network' },
      { value: '100s', label: 'of media outlets we place stories in, from ANI to Forbes' },
    ],
  },

  socialProof: {
    prefix: 'Trusted by founders at',
    names: ['Chitrabazaar', 'Kast', 'Krut.ai', 'OptimaLegal', 'FPA GCC', 'Re3U Skincare'],
  },

  services: {
    kicker: 'Services',
    heading: 'Capital, customers, credibility.',
    headingMuted: 'Six services, one team.',
    intro:
      'Most founders need more than one of these at the same time. We run them together, so your investor pitch, your marketing and your press coverage all tell the same story.',
    pillars,
    items: services,
  },

  process: {
    kicker: 'Process',
    heading: 'Three steps.',
    headingMuted: 'No surprises.',
    steps: [
      {
        number: '01',
        title: 'Talk',
        body: "A 45-minute call. We look at where you are and what you need next — a raise, customers, coverage — and tell you straight if we're not the right fit.",
      },
      {
        number: '02',
        title: 'Plan',
        body: 'Before any work starts, we agree on exactly what we will deliver.',
      },
      {
        number: '03',
        title: 'Deliver',
        body: 'We do the agreed work and keep you updated as it progresses.',
      },
    ],
  },

  approach: {
    kicker: 'How we are different',
    statementLead: "We don't hand you a report and walk away. ",
    statementAccent: 'We do the work ourselves',
    statementRest:
      ' — with our own team, tools and contacts — so you can stay focused on building your product.',
    usualLabel: 'The usual consultancy',
    oursLabel: 'Shades',
    comparison: [
      {
        usual: 'Long strategy reports',
        ours: 'Finished work: data rooms, campaigns, published articles, live websites',
      },
      {
        usual: 'Separate agencies for fundraising, marketing and PR',
        ours: 'One team for all of it',
      },
      { usual: 'Open-ended retainers', ours: 'Agreed scope and deliverables' },
    ],
  },

  faq: {
    kicker: 'FAQ',
    heading: 'Questions founders',
    headingMuted: 'ask first.',
    items: [
      {
        question: 'Who do you work with?',
        answer: 'Early-stage startups with a working product, in both B2B and consumer sectors.',
      },
      {
        question: 'Which service do I need?',
        answer: 'Not sure? That is what the first call is for. As a rough guide:',
        guide: [
          { need: 'Raising soon', service: 'Fundraising Support' },
          { need: 'Pricing, budgets or company structure', service: 'Business Model & Operations' },
          { need: 'Need customers', service: 'Sales & Go-to-Market or Marketing Strategy' },
          { need: 'Need to be known', service: 'PR & Media' },
          { need: 'No proper website yet', service: 'Websites' },
        ],
      },
      {
        question: "How much of our team's time will this take?",
        answer:
          'Very little. Beyond sharing information with us and reviewing our work, your team stays on the product.',
      },
    ],
  },

  contact: {
    kicker: 'Start here',
    headingLead: "Let's talk about ",
    headingAccent: "what's next.",
    body: "Tell us whether you're raising, launching or growing, and we'll set up a call.",
    button: 'Email us',
    subjectLine: 'Enquiry from shadesconsulting.in',
    note: 'We usually reply within 12 hours.',
  },
} as const;

export const sectionIds = siteConfig.nav.map((item) => item.href.slice(1));

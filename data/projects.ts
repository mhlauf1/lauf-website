export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  scope: string[];
  thumbnail: string;
  heroImage: string;
  overview: string;
  challenge: string;
  approach: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  images: string[];
  gradient: string;
  url?: string;
  video?: string;
  videoBg?: string;
  order: number;
}

export const projects: Project[] = [
  {
    slug: "playbook",
    title: "A Smarter Way to Manage Your Office",
    client: "Playbook",
    year: "2025",
    scope: ["Brand Identity", "Web Design", "Development"],
    thumbnail: "/images/projects/playbook-mockup-1.jpg",
    heroImage: "/images/projects/playbook-mockup-1.jpg",
    overview:
      "Playbook needed a digital presence that reflected their modern approach to office experience management. We designed and built a brand-forward marketing site that communicates warmth, clarity, and operational intelligence — setting Playbook apart in a crowded workplace solutions market.",
    challenge:
      "Playbook's platform simplifies complex office operations, but their existing web presence failed to convey that simplicity. Prospective clients struggled to understand the product's value, and the brand lacked the visual identity needed to build trust with enterprise buyers.",
    approach:
      "We developed a warm, approachable brand system anchored by cream tones and deep blue accents — a deliberate departure from the cold SaaS aesthetic. The site architecture leads with outcomes over features, using real-world scenarios to help facility managers and office leads see themselves in the product.",
    results: [
      "Complete brand identity and marketing site launched",
      "Clear product narrative driving qualified demo requests",
      "Visual system scaled across sales collateral and product UI",
    ],
    images: [
      "/images/projects/playbook-mockup-1.jpg",
      "/images/projects/playbook-02.jpg",
      "/images/projects/playbook-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #f5f0e8 0%, #d4c9b5 30%, #1e3a5f 70%, #0f2440 100%)",
    url: "https://playbookexp.com",
    video: "/videos/playbook-video.mp4",
    videoBg: "/images/projects/playbook-mockup-1.jpg",
    order: 2,
  },
  {
    slug: "stoc-advisory",
    title: "Confidence at Every Stage of the Deal",
    client: "Stoc Advisory",
    year: "2025",
    scope: ["Web Design", "Development", "Strategy"],
    thumbnail: "/images/projects/stoc-hero.png",
    heroImage: "/images/projects/stoc-hero.jpg",
    overview:
      "Stoc Advisory guides business owners through the acquisition process — from valuation to close. We built a digital presence that communicates institutional credibility and the personal attention that sets Stoc apart from larger advisory firms.",
    challenge:
      "Stoc Advisory operated primarily through referrals, with no website to validate their expertise. As they pursued growth beyond their existing network, they needed a digital foundation that could earn trust before the first conversation.",
    approach:
      "We crafted a refined, navy-anchored visual identity that signals financial sophistication without feeling unapproachable. The site structure mirrors the acquisition journey itself — walking prospective clients through each phase of engagement so they understand the process before they ever pick up the phone.",
    results: [
      "First-ever web presence establishing credibility at scale",
      "Structured content strategy supporting inbound lead generation",
      "Brand system extending across pitch decks and deal materials",
    ],
    images: [
      "/images/projects/stoc-01.jpg",
      "/images/projects/stoc-02.jpg",
      "/images/projects/stoc-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #0a1628 0%, #132744 35%, #1c3d6e 65%, #e8edf4 100%)",
    url: "https://stocadvisory.com",
    order: 1,
  },
  {
    slug: "brady-digital-consulting",
    title: "Turning Amazon into a Growth Engine",
    client: "Brady Digital Consulting",
    year: "2025",
    scope: ["Web Design", "Development", "Content"],
    thumbnail: "/images/projects/brady-main.png",
    heroImage: "/images/projects/brady-hero.jpg",
    overview:
      "Brady Digital Consulting helps brands unlock revenue on Amazon through strategic account management and advertising. We designed a bold, dark-mode website that positions Brady as a performance-driven partner in a space crowded with cookie-cutter agencies.",
    challenge:
      "Amazon consulting is a noisy space filled with agencies making identical promises. Brady needed a brand presence that cut through the noise, demonstrated real expertise, and attracted brands doing seven figures or more on Amazon.",
    approach:
      "We leaned into a high-contrast dark aesthetic that immediately differentiates Brady from the typical bright, stock-photo-heavy agency site. The content strategy leads with specific, results-oriented language and structures service offerings around the outcomes brands actually care about — revenue growth, ad efficiency, and marketplace dominance.",
    results: [
      "Dark-mode site launched with strong brand differentiation",
      "Service pages structured around measurable client outcomes",
      "Conversion-focused design supporting qualified lead flow",
    ],
    images: [
      "/images/projects/brady-01.jpg",
      "/images/projects/brady-02.jpg",
      "/images/projects/brady-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 35%, #2d2d44 65%, #3a3a5c 100%)",
    url: "https://bradydigitalconsulting.com",
    video: "/videos/brady-video.mp4",
    videoBg: "/images/projects/brady-video-bg.png",
    order: 3,
  },
  {
    slug: "cadence-private-capital",
    title: "Institutional Presence, Personal Approach",
    client: "Cadence Private Capital",
    year: "2024",
    scope: ["Brand Identity", "Web Design", "Development"],
    thumbnail: "/images/projects/cpc-new.png",
    heroImage: "/images/projects/cadence-hero.jpg",
    overview:
      "Cadence Private Capital is a private equity firm focused on lower middle-market investments. We created a polished digital presence that balances institutional gravitas with the firm's hands-on, relationship-driven investment philosophy.",
    challenge:
      "Cadence needed to project the credibility of a much larger firm while staying true to their founder-led, operationally involved approach. Their brand had to resonate with both business owners considering a sale and limited partners evaluating fund commitments.",
    approach:
      "We built a clean, corporate identity system centered on structured blue tones and generous whitespace — signaling stability and precision. The website architecture separates content paths for business owners and investors, ensuring each audience receives a tailored narrative without cluttering the experience.",
    results: [
      "Professional brand presence supporting active fundraising efforts",
      "Dual-audience site architecture serving owners and LPs",
      "Visual identity system applied across fund marketing materials",
    ],
    images: [
      "/images/projects/cadence-01.jpg",
      "/images/projects/cadence-02.jpg",
      "/images/projects/cadence-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #1a3a5c 0%, #2a5a8c 35%, #4a8abf 65%, #e8f0f8 100%)",
    url: "https://cadenceprivatecapital.com",
    order: 4,
  },
  {
    slug: "embark-pet-services",
    title: "Building a Network Pet Owners Trust",
    client: "Embark Pet Services",
    year: "2024",
    scope: ["Web Design", "Development", "Strategy"],
    thumbnail: "/images/projects/embark-new.png",
    heroImage: "/images/projects/embark-hero.jpg",
    overview:
      "Embark Pet Services operates a growing network of pet care facilities. We designed a professional, trust-forward website that unifies their multi-location brand and makes it easy for pet owners to find and book services.",
    challenge:
      "With multiple locations and service offerings, Embark's online presence was fragmented — different listings, inconsistent information, and no central brand experience. Pet owners had difficulty understanding the full scope of services available to them.",
    approach:
      "We unified the brand under a clean, professional blue identity that conveys reliability and care. The site architecture centers on location-based navigation, letting pet owners quickly find their nearest facility and browse available services. Clear calls to action streamline the path from discovery to booking.",
    results: [
      "Unified multi-location brand under one digital experience",
      "Location-first navigation improving service discovery",
      "Streamlined booking flow increasing online appointment requests",
    ],
    images: [
      "/images/projects/embark-01.jpg",
      "/images/projects/embark-02.jpg",
      "/images/projects/embark-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #0f2a4a 0%, #1a4a7a 35%, #3a7abd 65%, #b8d4ef 100%)",
    url: "https://embarkpetservices.com",
    order: 5,
  },
  // {
  //   slug: "hound-around-resort",
  //   title: "Where Every Dog Feels at Home",
  //   client: "Hound Around Resort",
  //   year: "2024",
  //   scope: ["Brand Identity", "Web Design", "Development"],
  //   thumbnail: "/images/projects/hound-thumb.png",
  //   heroImage: "/images/projects/hound-hero.jpg",
  //   overview:
  //     "Hound Around Resort is a premium dog boarding and daycare facility. We crafted a warm, inviting brand and website that communicates the care and attention that sets their resort apart from standard kennels.",
  //   challenge:
  //     "Pet parents choosing overnight boarding need deep reassurance. Hound Around's previous web presence didn't reflect the quality of care they provide, making it difficult to justify their premium positioning against lower-cost competitors.",
  //   approach:
  //     "We built a brand identity around warm cream tones and forest green — evoking the natural, open-air feel of the resort itself. The website emphasizes transparency, showcasing facilities, daily routines, and staff credentials. Every design decision was made to reduce the anxiety pet parents feel when leaving their dog somewhere new.",
  //   results: [
  //     "Brand and website launch supporting premium market position",
  //     "Facility-forward content building trust before first visit",
  //     "Online inquiry volume increasing steadily post-launch",
  //   ],
  //   images: [
  //     "/images/projects/hound-01.jpg",
  //     "/images/projects/hound-02.jpg",
  //     "/images/projects/hound-03.jpg",
  //   ],
  //   gradient:
  //     "linear-gradient(135deg, #f5f0e3 0%, #e0d5c0 30%, #2d5a3d 65%, #1a3d28 100%)",
  //   url: "https://hound-3-frontend.vercel.app",
  //   order: 6,
  // },
  {
    slug: "body-biz",
    title: "Fitness with a Natural Edge",
    client: "Body Biz",
    year: "2024",
    scope: ["Web Design", "Development"],
    thumbnail: "/images/projects/body-biz-2.png",
    heroImage: "/images/projects/body-hero.jpg",
    overview:
      "Body Biz is a fitness and wellness brand that blends gym culture with an outdoor, nature-connected philosophy. We built a website that captures their unique energy — part performance gym, part wellness retreat.",
    challenge:
      "Body Biz didn't fit neatly into the typical gym website mold. Their offering combines traditional fitness with outdoor programming and holistic wellness, and they needed a site that could communicate this hybrid identity without confusing prospective members.",
    approach:
      "We paired cool blue-teal tones with natural greens to create a visual language that bridges the gap between gym intensity and outdoor calm. The site structure separates programming by type — gym, outdoor, wellness — while a unified membership flow makes it easy to get started regardless of entry point.",
    results: [
      "Distinctive web presence differentiating from traditional gym sites",
      "Clear program structure improving member onboarding",
      "Mobile-first design reaching members where they browse",
    ],
    images: [
      "/images/projects/body-01.jpg",
      "/images/projects/body-02.jpg",
      "/images/projects/body-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #0a2a3a 0%, #1a4a5a 30%, #2a7a6a 60%, #4aaa8a 100%)",
    url: "https://thebody.biz",
    order: 8,
  },
  {
    slug: "mn-manufacturing-recruiting",
    title: "Connecting Talent to the Shop Floor",
    client: "MN Manufacturing Recruiting",
    year: "2023",
    scope: ["Web Design", "Development", "Content"],
    thumbnail: "/images/projects/mn-thumb.jpg",
    heroImage: "/images/projects/mn-hero.jpg",
    overview:
      "MN Manufacturing Recruiting specializes in placing skilled talent across the manufacturing sector. We designed a sharp, modern website that elevates their brand in an industry where most recruiters still rely on outdated web presences.",
    challenge:
      "Manufacturing recruiting is a relationship-driven business, but MN needed a digital presence that could generate inbound interest from both employers and job seekers. Their previous site was dated and failed to communicate their specialization or track record.",
    approach:
      "We combined bold cyan accents with a charcoal foundation to create a clean, industrial-modern aesthetic. The site is structured around two primary audiences — employers looking to hire and candidates looking for work — with clear pathways and calls to action for each. Content emphasizes MN's manufacturing-specific expertise rather than generic recruiting language.",
    results: [
      "Modern site establishing digital credibility in a traditional industry",
      "Dual-audience architecture serving employers and candidates",
      "Industry-specific content strategy reinforcing niche expertise",
    ],
    images: [
      "/images/projects/mn-01.jpg",
      "/images/projects/mn-02.jpg",
      "/images/projects/mn-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #1a2a2a 0%, #2a3a3a 30%, #0a8a9a 60%, #2acada 100%)",
    url: "https://mnmfgrecruiting.com",
    order: 7,
  },
  {
    slug: "striano-electric",
    title: "Powering New York, One Project at a Time",
    client: "Striano Electric",
    year: "2023",
    scope: ["Web Design", "Development"],
    thumbnail: "/images/projects/striano-main.png",
    heroImage: "/images/projects/striano-hero.jpg",
    overview:
      "Striano Electric is a full-service electrical contractor operating across New York City. We built a clean, professional website that reflects the quality of their work and helps them win commercial and residential contracts in a competitive market.",
    challenge:
      "In NYC's crowded electrical contractor space, Striano needed to stand out from competitors relying on generic directory listings and bare-bones websites. Their reputation was built on word of mouth, but growth required a digital presence that could do the selling before the first site visit.",
    approach:
      "We designed around a refined burgundy and neutral palette that projects professionalism and craft — a deliberate step above the typical contractor website. The site is structured around project types and service areas, making it easy for property managers and general contractors to assess fit. Prominent licensing and insurance credentials build trust immediately.",
    results: [
      "Professional web presence supporting commercial project bids",
      "Service-area content improving local search visibility",
      "Credentialing section building trust with property managers and GCs",
    ],
    images: [
      "/images/projects/striano-main.png",
      "/images/projects/striano-02.jpg",
      "/images/projects/striano-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #2a1a1a 0%, #5c2a2a 30%, #8a3a3a 55%, #d4c4b0 100%)",
    url: "https://strianoelectric.com",
    video: "/videos/striano-video.mp4",
    videoBg: "/images/projects/striano-main.png",
    order: 9,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getAdjacentProjects(slug: string) {
  const sorted = getSortedProjects();
  const index = sorted.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };

  const prev = sorted[(index - 1 + sorted.length) % sorted.length];
  const next = sorted[(index + 1) % sorted.length];

  return { prev, next };
}

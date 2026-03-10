export interface CaseStudyImage {
  src: string;
  alt: string;
  aspectRatio?: string; // "16/9", "4/3", "3/4" — default "4/3"
  layout?: "full" | "half"; // gallery layout hint — default "half"
}

export interface CaseStudySubsection {
  heading: string;
  paragraphs: string[];
  image?: CaseStudyImage;
}

export interface CaseStudySection {
  type: "text" | "rich" | "gallery" | "results" | "testimonial" | "callout";
  label: string;
  paragraphs?: string[]; // type: "text"
  subsections?: CaseStudySubsection[]; // type: "rich"
  images?: CaseStudyImage[]; // type: "gallery"
  items?: string[]; // type: "results"
  testimonial?: { quote: string; author: string; role: string }; // type: "testimonial"
  callout?: {
    text: string;
    linkText: string;
    linkHref: string;
    links?: { linkText: string; linkHref: string }[];
  }; // type: "callout"
}

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
  sections?: CaseStudySection[];
}

export const projects: Project[] = [
  {
    slug: "playbook",
    title: "A Smarter Way to Manage Your Office",
    client: "Playbook",
    year: "2025",
    scope: ["Web Development", "Next.js", "Sanity"],
    thumbnail: "/images/projects/playbook-mockup-1.jpg",
    heroImage: "/images/projects/playbook-mockup-1.jpg",
    overview:
      "Playbook needed a digital presence that reflected their modern approach to office experience management. We designed and built a brand-forward marketing site that communicates warmth, clarity, and operational intelligence — setting Playbook apart in a crowded workplace solutions market.",
    challenge:
      "Playbook's platform simplifies complex office operations, but their existing web presence failed to convey that simplicity. Prospective clients struggled to understand the product's value, and the brand lacked the visual identity needed to build trust with enterprise buyers.",
    approach:
      "We developed a warm, approachable brand system anchored by cream tones and deep blue accents — a deliberate departure from the cold SaaS aesthetic. The site architecture leads with outcomes over features, using real-world scenarios to help facility managers and office leads see themselves in the product.",
    results: [
      "Replaced an outsourced WordPress site with a fully in-house Next.js + Sanity build",
      "Gave the team complete control over content publishing, no developer dependency",
      "Delivered a brand-forward site that matches Playbook's rebrand from Lulafit",
      "Built Playbook Pulse, a custom content hub driving newsletter signups and lead generation",
      "Recognized with a company-wide award at the annual all-hands meeting",
      "Eliminated ongoing third-party development costs",
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
    sections: [
      {
        type: "text",
        label: "The Situation",
        paragraphs: [
          "Playbook (formerly Lulafit) was in the middle of a full rebrand. They had an outsourced WordPress site managed by a third party, and it no longer reflected where the company was heading. The brand name was changing, the positioning was changing, and the old site couldn't keep up. I was on the team internally and recommended we stop paying an outside developer, bring it in-house, and build something we fully controlled.",
        ],
      },
      {
        type: "rich",
        label: "What We Built",
        subsections: [
          {
            heading: "Taking It In-House",
            paragraphs: [
              "The previous site was a WordPress build maintained by an external agency. Every update required a ticket. Every change had a turnaround. I pitched building the new site internally using Next.js and Sanity, giving our team full ownership of the content and the codebase. Leadership approved, and I became the sole designer and developer on the rebuild.",
              "An external designer had created an initial concept in Figma. I used that as a starting point but made significant enhancements throughout the process: refining layouts, designing custom components, improving the overall user experience, and building out pages and sections that weren't in the original concept.",
            ],
            image: {
              src: "/images/projects/playbook-before-after.jpg",
              alt: "Old Lulafit site vs new Playbook site",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Design",
            paragraphs: [
              "The new brand needed to feel warm, confident, and enterprise-ready. Playbook works with major commercial real estate clients like MetLife (425 Market), Ponce City Market, and 801 Brickell. The site had to speak to building owners and property managers who are evaluating serious operational partnerships.",
              "We built a visual system around cream tones and deep blue accents, using real photography from Playbook's properties to ground everything in the actual work. The site leads with outcomes and real-world scenarios rather than feature lists, helping facility managers and office leads see themselves in the product.",
            ],
            image: {
              src: "/images/projects/playbook-design.jpg",
              alt: "Playbook design system — color palette, typography, and key design elements",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Custom Components",
            paragraphs: [
              "Beyond the standard page builds, I designed and developed several custom components that became signature pieces of the site.",
            ],
            image: {
              src: "/images/projects/playbook-components.jpg",
              alt: "Custom component close-ups",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Playbook Pulse",
            paragraphs: [
              "One of the most unique features on the site is Playbook Pulse, a dedicated content hub where the team publishes industry trends and market insights. Visitors can sign up to receive these directly, turning the site into a lead generation tool on top of a marketing site. The Pulse pages showcase data and perspectives in a format that feels more like a digital publication than a typical company blog.",
              "This wasn't a standard blog template. The layout and presentation were designed to make Playbook's thought leadership feel premium and worth subscribing to.",
            ],
            image: {
              src: "/images/projects/playbook-pulse.jpg",
              alt: "Playbook Pulse content hub",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Development",
            paragraphs: [
              "The site runs on Next.js with Sanity as the CMS. This was a deliberate choice: the Playbook team needed to publish content, update case studies, manage team bios, and add new properties without filing a developer ticket every time. Sanity gives them a visual editing experience while the Next.js frontend keeps performance tight.",
              "The architecture handles a lot of content types: case studies with location-specific photography, a full team directory, careers listings, service breakdowns with video embeds, and the Pulse content hub. All of it is manageable by the internal team.",
            ],
            image: {
              src: "/images/projects/playbook-dev.jpg",
              alt: "Content-rich page showing the depth of the site",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "The Impact",
            paragraphs: [
              "Eliminating the third-party developer saved the company both money and time. Updates that used to take days now happen in minutes. The team recognized the work at Playbook's annual all-hands meeting, where the site rebuild received a company-wide award.",
            ],
          },
        ],
      },
      {
        type: "gallery",
        label: "Gallery",
        images: [
          {
            src: "/images/projects/playbook-gallery-01.jpg",
            alt: "Playbook homepage — desktop",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/playbook-gallery-02.jpg",
            alt: "Mobile responsive views",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/playbook-gallery-03.jpg",
            alt: "Playbook Pulse / Trends page",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/playbook-gallery-04.jpg",
            alt: "Case study detail page",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/playbook-gallery-05.jpg",
            alt: "Team page",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/playbook-gallery-06.jpg",
            alt: "Custom component close-ups",
            aspectRatio: "16/9",
            layout: "full",
          },
        ],
      },
      {
        type: "results",
        label: "The Outcome",
        items: [
          "Replaced an outsourced WordPress site with a fully in-house Next.js + Sanity build",
          "Gave the team complete control over content publishing, no developer dependency",
          "Delivered a brand-forward site that matches Playbook's rebrand from Lulafit",
          "Built Playbook Pulse, a custom content hub driving newsletter signups and lead generation",
          "Recognized with a company-wide award at the annual all-hands meeting",
          "Eliminated ongoing third-party development costs",
        ],
      },
    ],
  },
  {
    slug: "stoc-advisory",
    title: "Confidence at Every Stage of the Deal",
    client: "STOC Advisory",
    year: "2024",
    scope: ["Web Design", "Web Development", "Next.js", "Art Direction", "Content & Assets"],
    thumbnail: "/images/projects/stoc-hero.png",
    heroImage: "/images/projects/stoc-hero.jpg",
    overview:
      "STOC Advisory is a middle-market M&A advisory firm with offices in Baltimore, Minneapolis, Nashville, and Dallas. They were running on a generic Wix site that didn't reflect the caliber of work they do. We replaced it with a comprehensive Next.js build covering services, industries, team, and locations.",
    challenge:
      "For a firm advising on complex transactions across healthcare, manufacturing, tech, and business services, the online presence needed a serious upgrade. The generic Wix site couldn't communicate expertise across multiple service lines and industries or build trust with enterprise buyers.",
    approach:
      "We pushed for a visual direction that feels modern and authoritative without falling into the typical corporate consulting look. The real design challenge was organizing a lot of information — four service lines, six industry verticals, four office locations, a growing team, and a careers section — without overwhelming the visitor.",
    results: [
      "Replaced a generic Wix site with a comprehensive Next.js build",
      "Designed and structured content across 20+ pages covering services, industries, team, and locations",
      "Full DNS migration off Wix with zero downtime",
      "Created a visual identity that positions STOC as a credible partner for middle-market transactions",
      "Site architecture scales cleanly as the firm adds services, team members, and offices",
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
    sections: [
      {
        type: "text",
        label: "The Situation",
        paragraphs: [
          "STOC Advisory is a middle-market M&A advisory firm with offices in Baltimore, Minneapolis, Nashville, and Dallas. They were running on a generic Wix site that didn't reflect the caliber of work they do. For a firm advising on complex transactions across healthcare, manufacturing, tech, and business services, the online presence needed a serious upgrade. They needed a site that could communicate expertise across multiple service lines and industries while building trust with enterprise buyers.",
        ],
      },
      {
        type: "rich",
        label: "What We Built",
        subsections: [
          {
            heading: "Design & Art Direction",
            paragraphs: [
              "Advisory firms can easily end up looking sterile or forgettable online. We pushed for a visual direction that feels modern and authoritative without falling into the typical corporate consulting look. Strong architectural photography, a confident color system, and clean typography set the tone across every page.",
              "The real design challenge was organizing a lot of information without overwhelming the visitor. STOC has four distinct service lines (Corporate Development Support, Growth Enablement, Transaction Advisory, and CFO Advisory), six industry verticals, four office locations, a growing team, and a careers section. Every one of those needed its own page with its own content. The architecture had to make all of that accessible without turning the navigation into a maze.",
            ],
            image: {
              src: "/images/projects/stoc-design.jpg",
              alt: "STOC services page showing the information architecture in action",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Content & Structure",
            paragraphs: [
              "We wrote and structured the content across the entire site. Each service line has a dedicated sub-page explaining what it is, who it's for, and how STOC approaches it. Same for industries. This wasn't a case of dropping lorem ipsum into a template. The copy had to speak to CFOs, PE sponsors, and business owners who are evaluating whether to trust STOC with a deal worth millions.",
              "The site also includes team profiles, office locations, a careers page, and a newsletter signup. All of it had to feel cohesive and intentional rather than bolted on.",
            ],
            image: {
              src: "/images/projects/stoc-content.jpg",
              alt: "A service sub-page showing the depth of content",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Development & Migration",
            paragraphs: [
              "We built the site in Next.js and migrated everything off Wix. That meant handling DNS transfers, getting the new site deployed and configured, and making sure nothing broke during the cutover. We use Resend for any email functionality on the site.",
              "The site is fast, clean, and built to be extended as STOC continues to grow. New service lines, new team members, new locations can all be added without rethinking the architecture.",
            ],
            image: {
              src: "/images/projects/stoc-dev.jpg",
              alt: "STOC about page showing team and locations",
              aspectRatio: "16/9",
            },
          },
        ],
      },
      {
        type: "gallery",
        label: "Gallery",
        images: [
          {
            src: "/images/projects/stoc-gallery-01.jpg",
            alt: "STOC homepage — full-width desktop",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/stoc-gallery-02.jpg",
            alt: "Mobile responsive views",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/stoc-gallery-03.jpg",
            alt: "Services landing page",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/stoc-gallery-04.jpg",
            alt: "Transaction Advisory service sub-page",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/stoc-gallery-05.jpg",
            alt: "Industries page",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/stoc-gallery-06.jpg",
            alt: "Team page",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/stoc-gallery-07.jpg",
            alt: "Contact and newsletter section",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/stoc-gallery-08.jpg",
            alt: "Before — old Wix site via Wayback Machine",
            aspectRatio: "4/3",
            layout: "half",
          },
        ],
      },
      {
        type: "results",
        label: "The Outcome",
        items: [
          "Replaced a generic Wix site with a comprehensive Next.js build",
          "Designed and structured content across 20+ pages covering services, industries, team, and locations",
          "Full DNS migration off Wix with zero downtime",
          "Created a visual identity that positions STOC as a credible partner for middle-market transactions",
          "Site architecture scales cleanly as the firm adds services, team members, and offices",
        ],
      },
      {
        type: "callout",
        label: "Connected Work",
        callout: {
          text: "STOC Advisory is connected to the Cadence Private Capital network. We also built cadenceprivatecapital.com and several other sites within the portfolio.",
          linkText: "View Cadence Case Study",
          linkHref: "/work/cadence-private-capital",
        },
      },
    ],
  },
  {
    slug: "brady-digital-consulting",
    title: "Turning Amazon into a Growth Engine",
    client: "Brady Digital Consulting",
    year: "2024",
    scope: ["Web Design", "Web Development", "Next.js", "Art Direction", "Content & Assets"],
    thumbnail: "/images/projects/brady-main.png",
    heroImage: "/images/projects/brady-hero.jpg",
    overview:
      "Brady Digital Consulting is a family-owned Amazon and ecommerce consulting firm. When they came to us, they had no website at all — just a logo. We built a complete web presence from scratch that stands out in a space full of low-quality competitors.",
    challenge:
      "The ecommerce consulting space is full of websites that look like they were built in a weekend. Brady needed a professional site that made them look like a real company with a real team, not another fly-by-night Amazon guru.",
    approach:
      "Bold color blocking, clean sections, and a visual flow that walks a visitor from \"who are these people\" to \"how can they help me\" to \"let me reach out\" in a natural progression. We wrote all copy and sourced all imagery, building the entire content strategy from the ground up.",
    results: [
      "Built a complete web presence from nothing but a logo",
      "Designed and wrote all content, imagery, and page structure",
      "Created a professional site in a space full of low-quality competitors",
      "Client reports regular compliments on the site from prospects and partners",
      "Fast turnaround: concept to launch in under two months",
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
    order: 4,
    sections: [
      {
        type: "text",
        label: "The Situation",
        paragraphs: [
          "Brady Digital Consulting is a family-owned Amazon and ecommerce consulting firm. When they came to us, they had no website at all. Their only asset was a logo. Everything else, from the site structure to the copy to the imagery, needed to be created from scratch. Jack Brady knew our work from the Cadence Private Capital site and reached out to get Brady Digital online and looking professional fast.",
        ],
      },
      {
        type: "rich",
        label: "What We Built",
        subsections: [
          {
            heading: "Design & Art Direction",
            paragraphs: [
              "The ecommerce consulting space is full of websites that look like they were built in a weekend. Flashy stats, stock photos of warehouses, generic trust badges. We wanted Brady to stand out by looking like a real company with a real team, not another fly-by-night Amazon guru.",
              "The design uses bold color blocking, clean sections, and a visual flow that walks a visitor from \"who are these people\" to \"how can they help me\" to \"let me reach out\" in a natural progression. For imagery, we sourced and created everything ourselves, including some assets generated through Midjourney for specific sections where custom photography wasn't available.",
            ],
            image: {
              src: "/images/projects/brady-design.jpg",
              alt: "Brady homepage sections showing the visual progression and color system",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Content & Conversion Strategy",
            paragraphs: [
              "Since Brady came to us with nothing but a logo, we built the entire content strategy from the ground up. The site follows a clear conversion funnel: the homepage opens with credibility (who they are, what they do), moves into proof (specific benefit stats like 20% ROI increase, 50% faster inventory turnover, 30% sales boost), walks through services, and lands on a strong call to action. Each interior page (About, How It Works, Benefits, Services) reinforces a different part of the story.",
              "We wrote all the copy. The goal was to sound knowledgeable and trustworthy without being salesy, which is a fine line in the Amazon consulting world.",
            ],
            image: {
              src: "/images/projects/brady-content.jpg",
              alt: "Benefits section showing the content strategy and conversion funnel",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Development",
            paragraphs: [
              "Built in Next.js, clean and fast. The site is focused on doing one thing well: making Brady look legitimate and driving email inquiries. No unnecessary features, no bloat. The contact method is a direct email link rather than a form, which was a deliberate choice to keep things simple for a small team that doesn't need a CRM.",
            ],
            image: {
              src: "/images/projects/brady-dev.jpg",
              alt: "Brady services page on mobile",
              aspectRatio: "16/9",
            },
          },
        ],
      },
      {
        type: "gallery",
        label: "Gallery",
        images: [
          {
            src: "/images/projects/brady-gallery-01.jpg",
            alt: "Brady homepage — full-width desktop",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/brady-gallery-02.jpg",
            alt: "Mobile responsive views",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/brady-gallery-03.jpg",
            alt: "About page",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/brady-gallery-04.jpg",
            alt: "How It Works page",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/brady-gallery-05.jpg",
            alt: "Benefits page with stats",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/brady-gallery-06.jpg",
            alt: "Services page",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/brady-gallery-07.jpg",
            alt: "CTA section close-up",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/brady-gallery-08.jpg",
            alt: "Color system and typography detail",
            aspectRatio: "4/3",
            layout: "half",
          },
        ],
      },
      {
        type: "results",
        label: "The Outcome",
        items: [
          "Built a complete web presence from nothing but a logo",
          "Designed and wrote all content, imagery, and page structure",
          "Created a professional site in a space full of low-quality competitors",
          "Client reports regular compliments on the site from prospects and partners",
          "Fast turnaround: concept to launch in under two months",
        ],
      },
    ],
  },
  {
    slug: "cadence-private-capital",
    title: "Institutional Presence, Personal Approach",
    client: "Cadence Private Capital",
    year: "2024",
    scope: ["Web Design", "Web Development", "Next.js", "Content & Assets"],
    thumbnail: "/images/projects/cpc-new.png",
    heroImage: "/images/projects/cadence-hero.jpg",
    overview:
      "Cadence Private Capital is a private equity firm focused on lower middle-market investments. We created a polished digital presence that balances institutional gravitas with the firm's hands-on, relationship-driven investment philosophy.",
    challenge:
      "Cadence needed to project the credibility of a much larger firm while staying true to their founder-led, operationally involved approach. Their brand had to resonate with both business owners considering a sale and limited partners evaluating fund commitments.",
    approach:
      "We built a clean, corporate identity system centered on structured blue tones and generous whitespace — signaling stability and precision. The website architecture separates content paths for business owners and investors, ensuring each audience receives a tailored narrative without cluttering the experience.",
    results: [
      "Built the firm's entire online presence from zero",
      "Delivered a site that projects institutional credibility on a boutique budget",
      "Ongoing management as the portfolio grows and evolves",
      "Sparked a multi-project relationship: Cadence led to Brady Digital, Embark Pet Services, STOC Advisory, and a growing network of connected work",
    ],
    images: [
      "/images/projects/cadence-01.jpg",
      "/images/projects/cadence-02.jpg",
      "/images/projects/cadence-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #1a3a5c 0%, #2a5a8c 35%, #4a8abf 65%, #e8f0f8 100%)",
    url: "https://cadenceprivatecapital.com",
    order: 3,
    sections: [
      {
        type: "text",
        label: "The Situation",
        paragraphs: [
          "Cadence Private Capital is a Minneapolis-based private equity firm focused on the lower middle market. When they came to us, they had no website and no online presence. For a firm actively raising capital and sourcing deals, that's a problem. They needed a site that would communicate credibility and professionalism to investors, business owners, and advisors without overcomplicating things. PE firms don't need fifty pages. They need the right five.",
        ],
      },
      {
        type: "rich",
        label: "What We Built",
        subsections: [
          {
            heading: "Design",
            paragraphs: [
              "The design challenge with a PE firm site is doing a lot with very little. There's not much content to work with: an overview, investment criteria, areas of focus, the team, an advisory board, and portfolio companies. The temptation is to pad it out. We went the other direction and let the restraint speak for itself.",
              "The visual language is confident and clean. Strong photography, a refined color palette, and typography that feels institutional without being stiff. Every page earns its place. Nothing is filler.",
            ],
            image: {
              src: "/images/projects/cadence-design.jpg",
              alt: "Cadence homepage showing the design system in context",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Development",
            paragraphs: [
              "Built in Next.js for speed and flexibility. The site is lightweight by design, which means it loads fast and performs well. No CMS on this one since the content changes infrequently. When Cadence needs an update, a new team member, a new portfolio company, an updated description, they come to us and we handle it directly.",
            ],
            image: {
              src: "/images/projects/cadence-dev.jpg",
              alt: "Team page or Companies page",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Portfolio Companies",
            paragraphs: [
              "One of the more active sections of the site is the Companies page. Cadence's portfolio is growing, and as they make new investments or their existing companies expand, we update the page. For example, the Embark Pet Services description gets revised each time Embark acquires a new facility. This is a living page that reflects the firm's activity in real time.",
            ],
            image: {
              src: "/images/projects/cadence-companies.jpg",
              alt: "Companies page showing portfolio descriptions",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "The Relationship That Started Everything",
            paragraphs: [
              "Cadence was our first project. Peter Mark and Jack Brady needed a firm that could move quickly, handle everything from design to deployment, and deliver something that matched the quality of firms ten times their budget. That initial project opened the door to Brady Digital Consulting (through Jack's family connection), Embark Pet Services (a Cadence portfolio company), and STOC Advisory (a connected firm). One site became an ongoing partnership across multiple companies and an ever-growing scope of work.",
            ],
            image: {
              src: "/images/projects/cadence-relationship.jpg",
              alt: "Connected projects overview",
              aspectRatio: "16/9",
            },
          },
        ],
      },
      {
        type: "gallery",
        label: "Gallery",
        images: [
          {
            src: "/images/projects/cadence-gallery-01.jpg",
            alt: "Cadence homepage — desktop",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/cadence-gallery-02.jpg",
            alt: "Mobile responsive view",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/cadence-gallery-03.jpg",
            alt: "About page",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/cadence-gallery-04.jpg",
            alt: "Investment Criteria page",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/cadence-gallery-05.jpg",
            alt: "Team page close-up",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/cadence-gallery-06.jpg",
            alt: "Footer detail showing refined typography and layout",
            aspectRatio: "16/9",
            layout: "full",
          },
        ],
      },
      {
        type: "results",
        label: "The Outcome",
        items: [
          "Built the firm's entire online presence from zero",
          "Delivered a site that projects institutional credibility on a boutique budget",
          "Ongoing management as the portfolio grows and evolves",
          "Sparked a multi-project relationship: Cadence led to Brady Digital, Embark Pet Services, STOC Advisory, and a growing network of connected work",
        ],
      },
      {
        type: "callout",
        label: "Connected Work",
        callout: {
          text: "Cadence Private Capital is where our longest-running client relationship began. Through Cadence, we've designed and built sites for Embark Pet Services, Brady Digital Consulting, and STOC Advisory, along with ongoing systems and infrastructure work across the portfolio.",
          linkText: "",
          linkHref: "",
          links: [
            {
              linkText: "View Embark Case Study",
              linkHref: "/work/embark-pet-services",
            },
            {
              linkText: "View Brady Digital Case Study",
              linkHref: "/work/brady-digital-consulting",
            },
            {
              linkText: "View STOC Advisory Case Study",
              linkHref: "/work/stoc-advisory",
            },
          ],
        },
      },
    ],
  },
  {
    slug: "embark-pet-services",
    title: "Building a Network Pet Owners Trust",
    client: "Embark Pet Services",
    year: "2025",
    scope: [
      "Web Design",
      "Web Development",
      "Next.js",
      "Art Direction",
      "Content & Assets",
      "Systems",
    ],
    thumbnail: "/images/projects/embark-new.png",
    heroImage: "/images/projects/embark-hero.jpg",
    overview:
      "Embark Pet Services operates a growing network of pet care facilities. We designed a professional, trust-forward website that unifies their multi-location brand and makes it easy for pet owners to find and book services.",
    challenge:
      "With multiple locations and service offerings, Embark's online presence was fragmented. Different listings, inconsistent information, and no central brand experience. Pet owners had difficulty understanding the full scope of services available to them.",
    approach:
      "We unified the brand under a clean, professional blue identity that conveys reliability and care. The site architecture centers on location-based navigation, letting pet owners quickly find their nearest facility and browse available services. Clear calls to action streamline the path from discovery to booking.",
    results: [
      "Complete brand identity, website, and content for a growing 10-location pet care network",
      "Centralized hosting and DNS on Cloudflare, replacing scattered platforms across locations",
      "Email migrations to Microsoft 365 across multiple facilities",
      "A repeatable process for onboarding every new acquisition. DNS, hosting, email, and web presence",
      "Ongoing management: site updates, analytics, and infrastructure as the network continues to expand",
      "~5 new partner locations added since launch, validating the site as both a consumer and B2B tool",
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
    sections: [
      {
        type: "text",
        label: "The Situation",
        paragraphs: [
          "Cadence Private Capital was building a pet care network from scratch, acquiring independent facilities across the Midwest and unifying them under one brand. Every acquisition came with a different story: one location on Wix, another on GoDaddy, a third running email through some random cPanel setup. Nothing talked to anything. Embark had no website, no brand system, and no infrastructure to onboard the next facility. They needed all three, and they needed it to scale.",
        ],
      },
      {
        type: "rich",
        label: "What We Built",
        subsections: [
          {
            heading: "Design & Brand",
            paragraphs: [
              "We created the full Embark brand and visual identity from the ground up. The challenge was serving two very different audiences from the same site: pet owners looking for care they can trust, and facility owners considering whether to join the network.",
              "The brand had to feel warm, people are handing over their pets, but professional enough that a business owner takes the partnership page seriously. We built a visual system around custom iconography, photography, and video that carries across every touchpoint. Every asset on the site was sourced, directed, or created by us.",
            ],
            image: {
              src: "/images/projects/embark-brand.jpg",
              alt: "Embark brand elements — icons, color palette, and typography",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Development",
            paragraphs: [
              "The site is built in Next.js with a component structure designed to grow with the network. The network page pulls in live Google Review ratings for each location, real scores from real customers, not curated testimonials. Each facility card shows its services, location, and links directly to Google Reviews.",
              "When Embark acquires a new location, adding them to the site is a quick update. The whole system was built knowing this network would keep expanding.",
            ],
            image: {
              src: "/images/projects/embark-network.jpg",
              alt: "Network page showing location cards with Google Review scores",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "The Partner Pipeline",
            paragraphs: [
              "The site does double duty. Pet owners land on the homepage and find services, locations, and proof that these facilities are legit. But there's a second audience: facility owners who might want to join the Embark network. The Partner With Us page makes that pitch, and since launch, Embark has added roughly five new locations to the network.",
            ],
            image: {
              src: "/images/projects/embark-partner.jpg",
              alt: "Partner With Us page",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Systems: The Bigger Story",
            paragraphs: [
              "The website was the visible part. Underneath, we built the infrastructure that makes the whole network run.",
              "We centralized everything on Cloudflare. As each location comes under the Embark umbrella, we run a migration: audit their existing DNS, website hosting, and email setup, which is usually scattered across GoDaddy, Wix, Squarespace, or whatever cPanel host they landed on years ago and consolidate it all. For email, we migrate locations to Microsoft 365 so the entire network operates on one system.",
              "This work is ongoing. Each time Embark acquires a new facility, the process is the same: transfer DNS, migrate hosting, move email to M365, and build or update their web presence. What used to be a tangled mess of platforms for each location is becoming a single, manageable system. We continue to handle updates, analytics, and infrastructure across the growing network.",
            ],
            image: {
              src: "/images/projects/embark-systems.jpg",
              alt: "Infrastructure and systems overview",
              aspectRatio: "16/9",
            },
          },
        ],
      },
      {
        type: "gallery",
        label: "Gallery",
        images: [
          {
            src: "/images/projects/embark-gallery-01.jpg",
            alt: "Embark homepage — desktop",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/embark-gallery-02.jpg",
            alt: "Embark mobile view",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/embark-gallery-03.jpg",
            alt: "Services page",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/embark-gallery-04.jpg",
            alt: "Location card close-up",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/embark-gallery-05.jpg",
            alt: "Custom illustrations — paw prints, badges, bone graphics",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/embark-gallery-06.jpg",
            alt: "Embark site in action",
            aspectRatio: "16/9",
            layout: "full",
          },
        ],
      },
      {
        type: "results",
        label: "The Outcome",
        items: [
          "Complete brand identity, website, and content for a growing 10-location pet care network",
          "Centralized hosting and DNS on Cloudflare, replacing scattered platforms across locations",
          "Email migrations to Microsoft 365 across multiple facilities",
          "A repeatable process for onboarding every new acquisition: DNS, hosting, email, and web presence",
          "Ongoing management: site updates, analytics, and infrastructure as the network continues to expand",
          "~5 new partner locations added since launch, validating the site as both a consumer and B2B tool",
        ],
      },
      {
        type: "callout",
        label: "Related Work",
        callout: {
          text: "Embark Pet Services is a Cadence Private Capital portfolio company. We also built cadenceprivatecapital.com, our first project together.",
          linkText: "View Cadence Case Study",
          linkHref: "/work/cadence-private-capital",
        },
      },
    ],
  },
  {
    slug: "hound-around-resort",
    title: "Where Every Dog Feels at Home",
    client: "Hound Around Resort",
    year: "2024",
    scope: ["Brand Identity", "Web Design", "Development"],
    thumbnail: "/images/projects/hound-thumb.png",
    heroImage: "/images/projects/hound-hero.jpg",
    overview:
      "Hound Around Resort is a premium dog boarding and daycare facility. We crafted a warm, inviting brand and website that communicates the care and attention that sets their resort apart from standard kennels.",
    challenge:
      "Pet parents choosing overnight boarding need deep reassurance. Hound Around's previous web presence didn't reflect the quality of care they provide, making it difficult to justify their premium positioning against lower-cost competitors.",
    approach:
      "We built a brand identity around warm cream tones and forest green — evoking the natural, open-air feel of the resort itself. The website emphasizes transparency, showcasing facilities, daily routines, and staff credentials. Every design decision was made to reduce the anxiety pet parents feel when leaving their dog somewhere new.",
    results: [
      "Brand and website launch supporting premium market position",
      "Facility-forward content building trust before first visit",
      "Online inquiry volume increasing steadily post-launch",
    ],
    images: [
      "/images/projects/hound-01.jpg",
      "/images/projects/hound-02.jpg",
      "/images/projects/hound-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #f5f0e3 0%, #e0d5c0 30%, #2d5a3d 65%, #1a3d28 100%)",
    url: "https://hound-3-frontend.vercel.app",
    order: 6,
  },
  {
    slug: "body-biz",
    title: "Fitness with a Natural Edge",
    client: "Body Biz",
    year: "2024",
    scope: ["Web Design", "Webflow Development", "Stripe", "Ecommerce", "Custom Dashboard", "Systems"],
    thumbnail: "/images/projects/body-biz-2.png",
    heroImage: "/images/projects/body-hero.jpg",
    overview:
      "The Body Biz is a personal training studio in Columbus, Ohio. The entire operation was running on Google Sheets and Authorize.net. We designed a distinctive brand, built a Webflow site, and solved a complex payment and commission tracking problem through three iterations — ending with a custom dashboard and Stripe.",
    challenge:
      "Tracking sessions, managing subscriptions, splitting commissions, handling refunds, processing payments for custom programs that varied by client — all of it was manual. They needed a website refresh, but more than that, they needed a system that could actually run their business.",
    approach:
      "We went a completely different direction from the aggressive, high-contrast fitness branding. The Body Biz brand is built around natural imagery, earth tones, and plant-forward design elements. For the business side, we iterated through three payment solutions until we built exactly what they needed from scratch.",
    results: [
      "Designed a brand identity that breaks from typical aggressive fitness industry aesthetics",
      "Built a Webflow site with direct coach-to-client purchasing",
      "Solved a complex payment and commission tracking problem through three iterations",
      "Replaced Google Sheets and Authorize.net with a custom-built dashboard and Stripe",
      "Ongoing partnership: the system continues to evolve as the business grows",
    ],
    images: [
      "/images/projects/body-01.jpg",
      "/images/projects/body-02.jpg",
      "/images/projects/body-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #0a2a3a 0%, #1a4a5a 30%, #2a7a6a 60%, #4aaa8a 100%)",
    url: "https://thebody.biz",
    order: 7,
    sections: [
      {
        type: "text",
        label: "The Situation",
        paragraphs: [
          "The Body Biz is a personal training studio in Columbus, Ohio founded by Kate Couden. Kate runs her own clients and has several trainers working under her, each with their own client base and a commission split on every session. When they came to us, the entire operation was running on Google Sheets and Authorize.net. Tracking sessions, managing subscriptions, splitting commissions, handling refunds, processing payments for custom programs that varied by client, all of it was manual. They needed a website refresh, but more than that, they needed a system that could actually run their business.",
        ],
      },
      {
        type: "rich",
        label: "What We Built",
        subsections: [
          {
            heading: "Brand & Design",
            paragraphs: [
              "The fitness industry is saturated with aggressive, high-contrast branding. Dark backgrounds, neon accents, intense photography. We went a completely different direction. The Body Biz brand is built around natural imagery, earth tones, and plant-forward design elements. Rubber plant leaves, organic textures, and a warm color palette that feels more like a wellness studio than a gym.",
              "This wasn't just an aesthetic choice. Kate's approach to fitness is rooted in sustainable, long-term health rather than quick results and intensity. The brand needed to reflect that philosophy. The visual system carries through every touchpoint: the website, coach profiles, program cards, and the checkout experience.",
            ],
            image: {
              src: "/images/projects/body-brand.jpg",
              alt: "Body Biz homepage hero with plant imagery and brand system",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "The Website",
            paragraphs: [
              "Built on Webflow, the site serves as both a marketing tool and a direct sales channel. Each coach has a dedicated profile with their bio, specialties, and available programs. Clients can browse coaches, explore programs, and purchase directly on the site.",
              "The coach profiles are designed to feel personal and approachable. This isn't a faceless gym membership. You're choosing a specific person to work with, and the site reflects that with individual photography, bios, and program breakdowns for each trainer.",
            ],
            image: {
              src: "/images/projects/body-website.jpg",
              alt: "Coach profile page showing individual photography and program breakdowns",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "The Payment Problem (and Three Solutions)",
            paragraphs: [
              "This is where the project gets interesting. The Body Biz doesn't sell one-size-fits-all memberships. Every client gets a custom program: maybe 3 months at a certain number of sessions for $660, or 1 month for $500, or something else entirely. Clients switch trainers, need cancellations, request refunds, change programs mid-cycle. And underneath all of that, there's a commission split: when a client works with a trainer like Lexie, she gets 70% and Kate gets 30%. When Kate trains directly, she keeps 100%. Payroll was a mess.",
              "Version 1 was Foxy.io, a platform that let the team build custom checkout links with variable pricing, durations, and subscription terms. Trainers could generate a link for any program configuration and send it directly to the client. Version 2 added Zapier automation to route every Foxy.io purchase into a formatted Google Sheet, already divided out for commission tracking. It was a decent system but prone to errors, and Foxy.io started showing limitations with recharging existing clients, processing refunds, and other edge cases.",
              "Version 3 is the real solution. We stepped back and built exactly what they needed from scratch: a custom Next.js dashboard that handles everything. Creating client programs with custom pricing, managing subscriptions, processing payments through Stripe (replacing Authorize.net entirely), tracking commissions per trainer, handling refunds and cancellations, and giving Kate a clear view of the entire business. No more Google Sheets. No more Zapier workarounds. No more Foxy.io limitations.",
            ],
            image: {
              src: "/images/projects/body-dashboard.jpg",
              alt: "Custom dashboard and Stripe payment integration",
              aspectRatio: "16/9",
            },
          },
        ],
      },
      {
        type: "gallery",
        label: "Gallery",
        images: [
          {
            src: "/images/projects/body-gallery-01.jpg",
            alt: "Body Biz homepage — full-width desktop",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/body-gallery-02.jpg",
            alt: "Mobile responsive views",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/body-gallery-03.jpg",
            alt: "Coach profile page",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/body-gallery-04.jpg",
            alt: "Program detail and purchase page",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/body-gallery-05.jpg",
            alt: "Testimonials section",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/body-gallery-06.jpg",
            alt: "Brand detail — plant imagery, leaf logo, and color palette",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/body-gallery-07.jpg",
            alt: "Custom dashboard screenshots",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/body-gallery-08.jpg",
            alt: "Natural design elements in context",
            aspectRatio: "4/3",
            layout: "half",
          },
        ],
      },
      {
        type: "results",
        label: "The Outcome",
        items: [
          "Designed a brand identity that breaks from typical aggressive fitness industry aesthetics",
          "Built a Webflow site with direct coach-to-client purchasing",
          "Solved a complex payment and commission tracking problem through three iterations",
          "Replaced Google Sheets and Authorize.net with a custom-built dashboard and Stripe",
          "Ongoing partnership: the system continues to evolve as the business grows",
        ],
      },
    ],
  },
  {
    slug: "mn-manufacturing-recruiting",
    title: "Connecting Talent to the Shop Floor",
    client: "Minnesota Manufacturing Recruiting",
    year: "2024",
    scope: ["Web Design", "Web Development", "Next.js", "Content & Assets"],
    thumbnail: "/images/projects/mn-thumb.jpg",
    heroImage: "/images/projects/mn-hero.jpg",
    overview:
      "Adam Mott founded Minnesota Manufacturing Recruiting in 2022 and had been running the business off a basic Wix site. We replaced it with a professional Next.js build featuring a dual-audience architecture that serves hiring managers and job seekers from one cohesive site.",
    challenge:
      "The basic Wix site didn't reflect the quality of Adam's work or help him stand out in a competitive recruiting space. He needed a site that would make a young company look established, serve two completely different audiences, and start generating inbound leads.",
    approach:
      "We designed a dual-path structure from the very first scroll. Hiring managers see their section, job seekers see theirs. Both audiences get dedicated pages, tailored messaging, and separate contact forms. The visual system ties it all together so the site feels like one cohesive brand.",
    results: [
      "Replaced a basic Wix site with a professional Next.js build",
      "Designed a dual-audience architecture that serves hiring managers and job seekers from one site",
      "Built credibility for a young company through strategic content: testimonials, FAQ, founder profile",
      "All content, copy, and design created by us",
      "Delivered in under two months",
    ],
    images: [
      "/images/projects/mn-01.jpg",
      "/images/projects/mn-02.jpg",
      "/images/projects/mn-03.jpg",
    ],
    gradient:
      "linear-gradient(135deg, #1a2a2a 0%, #2a3a3a 30%, #0a8a9a 60%, #2acada 100%)",
    url: "https://mnmfgrecruiting.com",
    order: 8,
    sections: [
      {
        type: "text",
        label: "The Situation",
        paragraphs: [
          "Adam Mott founded Minnesota Manufacturing Recruiting in 2022 and had been running the business off a basic Wix site. It worked to get started, but it didn't reflect the quality of his work or help him stand out in a competitive recruiting space. He needed a site that would make a young company look established, serve two completely different audiences (hiring managers and job seekers), and start generating inbound leads. Adam came to us through a connection to the Brady family.",
        ],
      },
      {
        type: "rich",
        label: "What We Built",
        subsections: [
          {
            heading: "Design",
            paragraphs: [
              "Recruiting sites tend to fall into two camps: either overly corporate with stock photos of handshakes, or bare-bones job boards with no personality. We aimed for something in between. Clean, professional, and grounded in Minnesota's manufacturing identity.",
              "The design uses a dual-path structure from the very first scroll. Hiring managers see their section. Job seekers see theirs. Both audiences get dedicated pages, tailored messaging, and separate contact forms. The visual system ties it all together so the site feels like one cohesive brand rather than two bolted-together experiences.",
            ],
            image: {
              src: "/images/projects/mn-design.jpg",
              alt: "MNMR homepage showing the dual-audience sections side by side",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Content & Trust Building",
            paragraphs: [
              "For a company founded in 2022, building credibility fast was essential. We structured the content around proof: client testimonials from real hiring leaders, a prominent founder quote and photo from Adam, a detailed FAQ section addressing the most common questions, and clear explanations of the process and the free replacement guarantee.",
              "We wrote all the copy and created the content strategy. The tone is direct and no-nonsense, which fits both the manufacturing industry and Adam's personality. No buzzwords, no vague promises. Just a clear explanation of what he does, how he does it, and why it works.",
            ],
            image: {
              src: "/images/projects/mn-content.jpg",
              alt: "Testimonials and FAQ sections building credibility",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Development",
            paragraphs: [
              "Built in Next.js. Fast turnaround, clean code, and a site that punches above its weight for a solo recruiter operation. The dual contact forms (one for hiring managers, one for job seekers) feed into Adam's workflow directly. The site doesn't need a CMS since content updates are infrequent, and when something does need changing, we handle it.",
            ],
            image: {
              src: "/images/projects/mn-dev.jpg",
              alt: "Job Seekers dedicated page",
              aspectRatio: "16/9",
            },
          },
        ],
      },
      {
        type: "gallery",
        label: "Gallery",
        images: [
          {
            src: "/images/projects/mn-gallery-01.jpg",
            alt: "MNMR homepage — full-width desktop",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/mn-gallery-02.jpg",
            alt: "Mobile responsive views",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/mn-gallery-03.jpg",
            alt: "Hiring Managers page",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/mn-gallery-04.jpg",
            alt: "Job Seekers page",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/mn-gallery-05.jpg",
            alt: "Testimonials section",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/mn-gallery-06.jpg",
            alt: "FAQ section",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/mn-gallery-07.jpg",
            alt: "Founder quote and photo section",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/mn-gallery-08.jpg",
            alt: "Before — old Wix site via Wayback Machine",
            aspectRatio: "4/3",
            layout: "half",
          },
        ],
      },
      {
        type: "results",
        label: "The Outcome",
        items: [
          "Replaced a basic Wix site with a professional Next.js build",
          "Designed a dual-audience architecture that serves hiring managers and job seekers from one site",
          "Built credibility for a young company through strategic content: testimonials, FAQ, founder profile",
          "All content, copy, and design created by us",
          "Delivered in under two months",
        ],
      },
    ],
  },
  {
    slug: "striano-electric",
    title: "Powering New York, One Project at a Time",
    client: "Striano Electric",
    year: "2023",
    scope: ["Web Design", "Web Development", "Next.js", "Content & Assets"],
    thumbnail: "/images/projects/striano-main.png",
    heroImage: "/images/projects/striano-hero.jpg",
    overview:
      "Striano Electric is an IBEW full-service electrical and telecommunications contractor in New York City and New Jersey. They've worked on Barclays Capital, the Tiffany & Co. flagship, and Citigroup headquarters. Their old website didn't reflect that caliber of work at all, so we replaced it with a modern build worthy of their client list.",
    challenge:
      "Striano's reputation in the industry is rock solid, but their old website was outdated, hard to navigate, and completely failed to communicate the caliber of work they deliver. For a company landing Fortune 500 contracts, the online presence needed to match.",
    approach:
      "We leaned on project photography as the centerpiece. Images of Barclays, Tiffany's, and Citigroup do more selling than any copy ever could. The rest of the design stays clean and confident: strong typography, a professional color palette, and a layout that lets the work speak.",
    results: [
      "Replaced an outdated site with a modern Next.js build that matches the company's reputation",
      "Created all content and organized the project portfolio by sector for easy navigation",
      "Built a site architecture that supports their Florida expansion and future growth",
      "Gave a NYC institution a digital presence worthy of their client list",
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
    sections: [
      {
        type: "text",
        label: "The Situation",
        paragraphs: [
          "Striano Electric is an IBEW full-service electrical and telecommunications contractor in New York City and New Jersey. They've worked on some of the most recognizable buildings in Manhattan: Barclays Capital on 7th Avenue, the Tiffany & Co. flagship on 5th Avenue, Citigroup headquarters on Greenwich Street. Their reputation in the industry is rock solid, but their old website didn't reflect that at all. It was outdated, hard to navigate, and completely failed to communicate the caliber of work they deliver. For a company landing Fortune 500 contracts, the online presence needed to match.",
        ],
      },
      {
        type: "rich",
        label: "What We Built",
        subsections: [
          {
            heading: "Design",
            paragraphs: [
              "Striano isn't a tech startup. They're a trades company that happens to serve some of the biggest names in finance, hospitality, healthcare, and entertainment. The design needed to feel premium and institutional without trying to be something it's not.",
              "We leaned on project photography as the centerpiece. Images of Barclays, Tiffany's, and Citigroup do more selling than any copy ever could. The rest of the design stays clean and confident: strong typography, a professional color palette, and a layout that lets the work speak. No unnecessary animations, no gimmicks. Just a well-built site for a well-run company.",
            ],
            image: {
              src: "/images/projects/striano-design.jpg",
              alt: "Striano homepage hero with project photography of Barclays and Tiffany's",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Content & Assets",
            paragraphs: [
              "We created all the content for the site. The copy needed to speak to two audiences: the construction managers and building owners who hire electrical contractors, and the institutional clients (banks, hotels, universities) who need to vet Striano before approving them for a job. The language is direct and professional. No marketing fluff.",
              "The project photography was key. We worked with what Striano had available and presented it in a way that highlights the prestige of their client list. When your portfolio includes Tiffany's flagship store and Citigroup's headquarters, the images do most of the heavy lifting.",
            ],
            image: {
              src: "/images/projects/striano-content.jpg",
              alt: "Projects page showing Tiffany's and Citigroup sections",
              aspectRatio: "16/9",
            },
          },
          {
            heading: "Development",
            paragraphs: [
              "Built in Next.js. The site covers services, a project portfolio organized by sector (financial institutions, corporate offices, hotels, data centers, universities, and more), testimonials, and contact. There's also a dedicated section for Striano Electric Florida, reflecting the company's expansion into a new market.",
              "The architecture is built to grow with the company. New project sectors, new locations, new service offerings can all be added without restructuring anything.",
            ],
            image: {
              src: "/images/projects/striano-dev.jpg",
              alt: "Services page and Florida expansion section",
              aspectRatio: "16/9",
            },
          },
        ],
      },
      {
        type: "gallery",
        label: "Gallery",
        images: [
          {
            src: "/images/projects/striano-gallery-01.jpg",
            alt: "Striano homepage — full-width with NYC skyline",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/striano-gallery-02.jpg",
            alt: "Barclays Capital project detail",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/striano-gallery-03.jpg",
            alt: "Tiffany & Co. project detail",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/striano-gallery-04.jpg",
            alt: "Citigroup project detail",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/striano-gallery-05.jpg",
            alt: "Services page",
            aspectRatio: "4/3",
            layout: "half",
          },
          {
            src: "/images/projects/striano-gallery-06.jpg",
            alt: "Striano Electric Florida section",
            aspectRatio: "16/9",
            layout: "full",
          },
          {
            src: "/images/projects/striano-gallery-07.jpg",
            alt: "Mobile responsive views",
            aspectRatio: "3/4",
            layout: "half",
          },
          {
            src: "/images/projects/striano-gallery-08.jpg",
            alt: "Testimonials section",
            aspectRatio: "3/4",
            layout: "half",
          },
        ],
      },
      {
        type: "results",
        label: "The Outcome",
        items: [
          "Replaced an outdated site with a modern Next.js build that matches the company's reputation",
          "Created all content and organized the project portfolio by sector for easy navigation",
          "Built a site architecture that supports their Florida expansion and future growth",
          "Gave a NYC institution a digital presence worthy of their client list",
        ],
      },
    ],
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

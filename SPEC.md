# Lauf Studio — Website Rebuild Specification

## Project Overview

Rebuild lauf.co as a clean, minimal, light-themed portfolio site for Lauf Studio — a design and development studio. The site should mirror the structure, feel, and simplicity of [rachelchen.tech](https://www.rachelchen.tech/) but adapted for a studio (not a personal portfolio). No CMS. All content lives in code. Built to ship fast with Claude Code.

**Positioning Statement:**
"One studio. Design, code, and systems built by the same hands."

**What Lauf Does:**
We don't just build websites. We build teams' systems online — for acquisitions, rebrands, and overall online presence uplift. One person designs and codes every project, giving clients continuity and craft that agencies can't match.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Switzer Variable (self-hosted from `/public/fonts`)
- **Animations:** Framer Motion (subtle — page transitions, hover states, fade-ins only)
- **Deployment:** Vercel
- **Data:** TypeScript files in `/data` directory (no CMS, no database)
- **Images:** `/public/images/projects/[slug]/` — placeholder gray boxes for now

---

## Design Language

### Visual Direction

- **Background:** White (`#FFFFFF`) or warm off-white (`#FAFAFA`)
- **Primary Text:** Near-black (`#111111`)
- **Secondary Text:** Medium gray (`#666666`)
- **Accent Color:** One subtle accent for hovers and CTAs — suggest a muted blue or warm charcoal. Keep it understated.
- **Borders/Dividers:** Light gray (`#E5E5E5`), used sparingly

### Typography

- **Headings:** Switzer Variable, medium/semibold weight
- **Body:** Switzer Variable, regular weight
- **Hierarchy:** Use size and weight contrast, not color. Large type for the hero statement, progressively smaller for supporting content.

### Spacing & Layout

- **Max width:** 1200px container, centered
- **Generous whitespace** — let content breathe
- **Grid:** 2-column grid for project cards on desktop, single column on mobile
- **No decorative elements** — no gradients, no patterns, no illustrations. The project images ARE the visual interest.

### Interactions

- **Hover on project cards:** Subtle scale (1.02) or opacity shift, smooth transition
- **Page transitions:** Simple fade or slide-up on route change
- **Links:** Underline on hover, no underline default
- **Scroll animations:** Gentle fade-in-up as sections enter viewport. Nothing aggressive.

---

## Site Structure

### Pages

1. **Home** (`/`)
2. **Case Study** (`/work/[slug]`)
3. **About** (`/about`)
4. **Contact** (`/contact`)

### Navigation

- Fixed top nav, minimal: **Lauf Studio** (logo/wordmark, left) | **Work** / **About** / **Contact** (right)
- Clean, no hamburger menu on desktop
- Mobile: Simple hamburger or slide-down menu
- Current page indicator: subtle underline or bold weight

### Footer

- Simple, one-line: © 2025 Lauf Studio — with social links (X, LinkedIn, GitHub/Dribbble if applicable)
- Optional: Repeat the CTA "Let's build something" with email link

---

## Page Specifications

### 1. Home Page (`/`)

**Layout (top to bottom):**

#### Hero Section

- Large positioning statement: "One studio. Design, code, and systems built by the same hands."
- Subtitle/supporting line beneath: "Lauf Studio is a design and development studio for acquisitions, rebrands, and teams building their online presence."
- Clean, centered or left-aligned. Lots of vertical padding.

#### What We Do Section

Styled like Rachel Chen's experience timeline — a vertical list with clean typography. Each row:

```
[Year/Category]    [Service Area]                    [Brief Description]
```

Example rows:

```
Design             Brand & Web Design                Visual identity, UI/UX, and web design for companies in motion.
Development        Custom Web Development             Production-grade builds in Next.js — no templates, no shortcuts.
Systems            Acquisition & Rebrand Systems      Online presence consolidation for portfolio companies and acquirers.
Strategy           Digital Presence Uplift            Audit, strategy, and execution for teams leveling up online.
```

Keep this tight. 4 rows max. Same rhythm as Rachel's experience section.

#### Project Grid

- 2-column grid of project cards
- Each card shows:
  - Project thumbnail image (16:10 or 3:2 aspect ratio, placeholder gray box for now)
  - Project title (bold)
  - Client name + what was delivered (e.g., "Greenfield Partners • Brand & Website Redesign")
  - Year
- Cards link to `/work/[slug]`
- Show 5-6 projects

#### Bottom CTA

- Simple section: "Have a project in mind?" with a "Get in touch" link to `/contact`

---

### 2. Case Study Page (`/work/[slug]`)

**Templated layout — each project uses the same structure, populated from data.**

#### Header

- Project title (large)
- Client name
- Year
- Scope tags (e.g., "Brand Design", "Web Development", "CMS Integration")
- Optional: Link to live site

#### Hero Image

- Full-width or contained project hero screenshot
- Placeholder for now

#### Content Sections

Each case study should support these content blocks (all optional, rendered if data exists):

1. **Overview** — 2-3 sentences on what the project was
2. **Challenge** — What problem the client had
3. **Approach** — What Lauf did and why
4. **Key Visuals** — Grid of screenshots/images (placeholder boxes)
5. **Results** — Metrics, outcomes, or qualitative impact
6. **Testimonial** — Client quote if available

#### Navigation

- "Next Project" / "Previous Project" links at the bottom to cycle through case studies

---

### 3. About Page (`/about`)

**Simple, personal, confident.**

- Opening statement about the studio philosophy
- Section on Michael: designer + developer with 8 years of experience, one person handling the full creative process
- Section on Clare: client operations, making the process smooth
- Why this matters: "When one person designs and codes your project, nothing gets lost in translation. No handoff gaps. No 'that's not what I designed.' Just craft."
- Optional: A photo of Michael and/or Clare
- Close with a CTA to the contact page

---

### 4. Contact Page (`/contact`)

**Dead simple.**

- Headline: "Let's build something."
- Subline: "Reach out to start a conversation about your project."
- Email: hello@lauf.co (or whatever the studio email is) — displayed prominently, clickable mailto link
- Social links: X, LinkedIn, and any other relevant platforms
- Location note: "Based in Madison, Wisconsin"
- That's it. No form. No Calendly. Just a clear way to reach out.

---

## Data Structure

### `/data/projects.ts`

```typescript
export interface Project {
  slug: string;
  title: string;
  client: string;
  year: number;
  scope: string[]; // e.g., ["Brand Design", "Web Development"]
  thumbnail: string; // path to thumbnail image
  heroImage: string; // path to hero image
  liveUrl?: string; // link to live site
  overview: string;
  challenge?: string;
  approach?: string;
  results?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  images: string[]; // paths to additional screenshots
  order: number; // display order on home page
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    client: "Client Name",
    year: 2024,
    scope: ["Brand Design", "Web Development"],
    thumbnail: "/images/projects/project-one/thumbnail.jpg",
    heroImage: "/images/projects/project-one/hero.jpg",
    overview: "Brief overview of the project goes here.",
    challenge: "What problem the client faced.",
    approach: "How Lauf solved it.",
    results: "What the outcome was.",
    images: [],
    order: 1,
  },
  // ... 5-6 projects total
];
```

### `/data/services.ts`

```typescript
export interface Service {
  category: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    category: "Design",
    title: "Brand & Web Design",
    description:
      "Visual identity, UI/UX, and web design for companies in motion.",
  },
  {
    category: "Development",
    title: "Custom Web Development",
    description:
      "Production-grade builds in Next.js — no templates, no shortcuts.",
  },
  {
    category: "Systems",
    title: "Acquisition & Rebrand Systems",
    description:
      "Online presence consolidation for portfolio companies and acquirers.",
  },
  {
    category: "Strategy",
    title: "Digital Presence Uplift",
    description: "Audit, strategy, and execution for teams leveling up online.",
  },
];
```

---

## Component Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout with nav + footer
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── work/
│       └── [slug]/
│           └── page.tsx    # Case study template
├── components/
│   ├── Nav.tsx             # Fixed navigation
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Home page hero section
│   ├── ServiceList.tsx     # "What we do" timeline section
│   ├── ProjectGrid.tsx     # 2-column project card grid
│   ├── ProjectCard.tsx     # Individual project card
│   ├── CaseStudyHeader.tsx # Case study page header
│   ├── CaseStudyContent.tsx # Case study content blocks
│   ├── ProjectNav.tsx      # Next/Previous project links
│   ├── CTA.tsx             # Reusable call-to-action section
│   └── FadeIn.tsx          # Scroll-triggered fade-in wrapper
├── data/
│   ├── projects.ts
│   └── services.ts
├── lib/
│   └── utils.ts            # Helper functions
└── styles/
    └── globals.css         # Tailwind imports + custom font faces
```

---

## Image Placeholder Strategy

Since images come later, every image slot should render a clean gray placeholder:

```tsx
// Placeholder component
const ImagePlaceholder = ({
  aspectRatio = "3/2",
  label,
}: {
  aspectRatio?: string;
  label?: string;
}) => (
  <div
    className="bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm"
    style={{ aspectRatio }}
  >
    {label || "Image"}
  </div>
);
```

This keeps the layout intact and makes it obvious where images need to be dropped in.

---

## SEO & Meta

- Proper `<title>` and `<meta description>` on every page
- Open Graph tags for social sharing
- Favicon (Lauf logo or simple "L" mark)
- Sitemap generation via Next.js
- Clean URLs: `/work/project-slug`, `/about`, `/contact`

---

## Performance Goals

- Lighthouse score: 95+ across all categories
- No external dependencies beyond Framer Motion
- Self-hosted font (no Google Fonts request)
- Optimized images via Next.js `<Image>` component
- Static generation for all pages (no server-side rendering needed)

---

## Development Phases

### Phase 1: Foundation (Claude Code Session 1)

- Next.js project setup with TypeScript + Tailwind
- Font setup (Switzer Variable)
- Layout component (Nav + Footer)
- Home page with all sections
- Placeholder data for 5-6 projects

### Phase 2: Case Studies (Claude Code Session 2)

- Case study page template
- Dynamic routing (`/work/[slug]`)
- All content blocks rendering from data
- Previous/Next navigation

### Phase 3: Supporting Pages (Claude Code Session 3)

- About page
- Contact page
- Page transitions with Framer Motion
- Scroll animations (FadeIn component)

### Phase 4: Polish (Claude Code Session 4)

- Responsive design QA
- SEO meta tags
- Favicon
- Performance optimization
- Deploy to Vercel

---

## Notes for Claude Code

- Keep all styling in Tailwind utility classes. No separate CSS files beyond globals.css.
- Use the Next.js App Router (`app/` directory), not Pages Router.
- All data is static — use `generateStaticParams` for case study pages.
- Keep components focused and small. No god components.
- Use semantic HTML throughout.
- Mobile-first responsive design.
- The site should feel like it was designed by a human with taste, not generated by AI. Clean typography, intentional spacing, restrained use of effects.
- Reference rachelchen.tech for spacing rhythm, typography scale, and overall feel — but adapt for a studio context, not a personal portfolio.

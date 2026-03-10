# Embark Pet Services — Case Study Copy

> This is the final copy draft for the Embark case study page on lauf.co.
> Brackets [like this] indicate where Michael needs to supply specific images or details.
> Everything else is ready to implement.

---

## Hero

**Tags:** Web Design · Web Development · Next.js · Art Direction · Content & Assets · Systems
**Title:** Building a Network Pet Owners Trust
**Client:** Embark Pet Services
**Year:** 2025
**Link:** Visit Site → embarkpetservices.com

**Hero Image:** [Full-width screenshot of Embark homepage or the hero video still]

---

## The Situation

Cadence Private Capital was building a pet care network from scratch — acquiring independent facilities across the Midwest and unifying them under one brand. Every acquisition came with a different story: one location on Wix, another on GoDaddy, a third running email through some random cPanel setup. Nothing talked to anything. Embark had no website, no brand system, and no infrastructure to onboard the next facility. They needed all three, and they needed it to scale.

---

## What We Built

### Design & Brand

We created the full Embark brand and visual identity from the ground up. The challenge was serving two very different audiences from the same site: pet owners looking for care they can trust, and facility owners considering whether to join the network.

The brand had to feel warm — people are handing over their pets — but professional enough that a business owner takes the partnership page seriously. We built a visual system around custom iconography, photography, and video that carries across every touchpoint. Every asset on the site was sourced, directed, or created by us.

[IMAGE: 2-up showing the brand elements — paw icons, badge, bone graphics, color palette]

### Development

The site is built in Next.js with a component structure designed to grow with the network. The network page pulls in live Google Review ratings for each location — real scores from real customers, not curated testimonials. Each facility card shows its services, location, and links directly to Google Reviews.

When Embark acquires a new location, adding them to the site is a quick update. The whole system was built knowing this network would keep expanding.

[IMAGE: Network page showing location cards with Google Review scores]

### The Partner Pipeline

The site does double duty. Pet owners land on the homepage and find services, locations, and proof that these facilities are legit. But there's a second audience: facility owners who might want to join the Embark network. The Partner With Us page makes that pitch — and since launch, Embark has added roughly five new locations to the network.

[IMAGE: Partner With Us page]

### Systems — The Bigger Story

The website was the visible part. Underneath, we built the infrastructure that makes the whole network run.

We centralized everything on Cloudflare. As each location comes under the Embark umbrella, we run a migration: audit their existing DNS, website hosting, and email setup — which is usually scattered across GoDaddy, Wix, Squarespace, or whatever cPanel host they landed on years ago — and consolidate it all. For email, we migrate locations to Microsoft 365 so the entire network operates on one system.

This work is ongoing. Each time Embark acquires a new facility, the process is the same: transfer DNS, migrate hosting, move email to M365, and build or update their web presence. What used to be a tangled mess of platforms for each location is becoming a single, manageable system — and we continue to handle updates, analytics, and infrastructure across the growing network.

[IMAGE: Could be a simple diagram or just a screen capture of the Cloudflare dashboard / DNS setup — or skip if too technical and use another site screenshot instead]

---

## Gallery

[IMAGE GRID — suggest a mix of these in various sizes:]

- Embark homepage desktop (full-width)
- Mobile view of the site
- Services page
- Individual location card close-up
- Custom illustration details (paw prints, badges, bone graphics)
- Video still or screen recording of the site in action
- Before screenshot of one of the location's old sites (Wayback Machine) if available

---

## The Outcome

- Complete brand identity, website, and content for a growing 10-location pet care network
- Centralized hosting and DNS on Cloudflare, replacing scattered platforms across locations
- Email migrations to Microsoft 365 across multiple facilities
- A repeatable process for onboarding every new acquisition — DNS, hosting, email, and web presence
- Ongoing management: site updates, analytics, and infrastructure as the network continues to expand
- ~5 new partner locations added since launch, validating the site as both a consumer and B2B tool

---

## Cadence Connection (small callout at bottom, before prev/next nav)

Embark Pet Services is a Cadence Private Capital portfolio company. We also built cadenceprivatecapital.com — our first project together.

→ View Cadence Case Study

---

## Timeline Note (for reference, not necessarily on the page)

Started: January 2025
Launched: May 2025
Status: Ongoing — systems migrations, new location sites, network updates

---

## Implementation Notes for Claude Code

### Page Structure (matches existing case study layout)

1. Hero section: tags, title, client, year, visit site link, hero image
2. "The Situation" — replaces current "Overview" label. 1 paragraph.
3. "What We Built" — replaces "Challenge" and "Approach" as a combined section with subheadings (Design & Brand, Development, The Partner Pipeline, Systems). Each sub-section should have an inline image or image pair.
4. Gallery — grid of images in mixed sizes (the current 2-column placeholder grid works, but allow for full-width images too)
5. "The Outcome" — replaces current "Results" label. Bulleted list is fine here.
6. Cadence callout — small text block with link, sits above the prev/next navigation
7. Prev/Next navigation — keep as-is

### Image Layout Guidance

Michael wants lots of images throughout at various sizes. Suggested approach:

- Inline images within "What We Built" subsections (contained width, ~60-70% of page width)
- Full-bleed images between major sections
- Gallery section uses mixed grid: some images span full width, others sit in a 2-column layout
- All images should have subtle rounded corners consistent with the rest of lauf.co
- Consider allowing both landscape and portrait aspect ratios in the gallery

### Copy Formatting

- Section labels ("The Situation", "What We Built", "The Outcome") should match the current left-aligned label style from the existing case study layout
- Body copy sits to the right of the label, same as the current Overview/Challenge/Approach layout
- Subsection headings within "What We Built" are smaller, bold, inline with the body copy column

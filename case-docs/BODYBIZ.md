# Body Biz - Case Study Copy

> Final copy draft for the Body Biz case study page on lauf.co.
> Brackets [like this] indicate where Michael needs to supply specific images or details.

---

## Hero

**Tags:** Web Design · Webflow Development · Stripe · Ecommerce · Custom Dashboard · Systems
**Title:** Fitness with a Natural Edge
**Client:** Body Biz
**Year:** 2024-Present
**Link:** Visit Site -> thebody.biz

**Hero Image:** [Full-width screenshot of Body Biz homepage hero with the plant imagery]

---

## The Situation

The Body Biz is a personal training studio in Columbus, Ohio founded by Kate Couden. Kate runs her own clients and has several trainers working under her, each with their own client base and a commission split on every session. When they came to us, the entire operation was running on Google Sheets and Authorize.net. Tracking sessions, managing subscriptions, splitting commissions, handling refunds, processing payments for custom programs that varied by client, all of it was manual. They needed a website refresh, but more than that, they needed a system that could actually run their business.

---

## What We Built

### Brand & Design

The fitness industry is saturated with aggressive, high-contrast branding. Dark backgrounds, neon accents, intense photography. We went a completely different direction. The Body Biz brand is built around natural imagery, earth tones, and plant-forward design elements. Rubber plant leaves, organic textures, and a warm color palette that feels more like a wellness studio than a gym.

This wasn't just an aesthetic choice. Kate's approach to fitness is rooted in sustainable, long-term health rather than quick results and intensity. The brand needed to reflect that philosophy. The visual system carries through every touchpoint: the website, coach profiles, program cards, and the checkout experience.

[IMAGE: Homepage hero with the plant imagery, or coach profile cards showing the brand system]

### The Website

Built on Webflow, the site serves as both a marketing tool and a direct sales channel. Each coach has a dedicated profile with their bio, specialties, and available programs. Clients can browse coaches, explore programs, and purchase directly on the site.

The coach profiles are designed to feel personal and approachable. This isn't a faceless gym membership. You're choosing a specific person to work with, and the site reflects that with individual photography, bios, and program breakdowns for each trainer.

[IMAGE: Coach profile page or program detail page]

### The Payment Problem (and Three Solutions)

This is where the project gets interesting. The Body Biz doesn't sell one-size-fits-all memberships. Every client gets a custom program: maybe 3 months at a certain number of sessions for $660, or 1 month for $500, or something else entirely. Clients switch trainers, need cancellations, request refunds, change programs mid-cycle. And underneath all of that, there's a commission split: when a client works with a trainer like Lexie, she gets 70% and Kate gets 30%. When Kate trains directly, she keeps 100%. Payroll was a mess.

**Version 1: Foxy.io**
We found Foxy.io, a platform that let the team build custom checkout links with variable pricing, durations, and subscription terms. Trainers could generate a link for any program configuration and send it directly to the client. It connected to the Webflow frontend and still processed through Authorize.net. This worked for a while.

**Version 2: Foxy.io + Zapier Automation**
To solve the bookkeeping problem, we built a Zapier automation that would take every Foxy.io purchase and route the transaction data into a formatted Google Sheet, already divided out for commission tracking. It was a decent system but prone to errors, and Foxy.io started showing limitations with recharging existing clients, processing refunds, handling partial refunds, and other edge cases that kept coming up.

**Version 3: Custom Dashboard + Stripe**
[MICHAEL: Is this live yet or still in final stages? Adjust the below accordingly.]

We stepped back and decided to build exactly what they needed from scratch. A custom Next.js dashboard that handles everything: creating client programs with custom pricing, managing subscriptions, processing payments through Stripe (replacing Authorize.net entirely), tracking commissions per trainer, handling refunds and cancellations, and giving Kate a clear view of the entire business. No more Google Sheets. No more Zapier workarounds. No more Foxy.io limitations.

The move to Stripe alone is a major upgrade. It's more robust, more modern, has better reporting, and gives the team tools they never had on Authorize.net.

[IMAGE: Screenshots of the custom dashboard if available, or the Foxy.io checkout flow, or the Stripe integration]

---

## Gallery

[IMAGE GRID, various sizes:]

- Homepage full-width desktop
- Mobile responsive views
- Coach profile page (Kate, Lexie, or Mattie)
- Program detail / purchase page
- Testimonials section
- Brand detail shots (plant imagery, leaf logo, color palette)
- Custom dashboard screenshots [if available]
- The natural/organic design elements in context

---

## The Outcome

- Designed a brand identity that breaks from typical aggressive fitness industry aesthetics
- Built a Webflow site with direct coach-to-client purchasing
- Solved a complex payment and commission tracking problem through three iterations
- Replaced Google Sheets and Authorize.net with a custom-built dashboard and Stripe
- Ongoing partnership: the system continues to evolve as the business grows

---

## Implementation Notes for Claude Code

### Page Structure

1. Hero: tags, title, client, year, visit site link, hero image
2. "The Situation" with 1 paragraph
3. "What We Built" with subsections: Brand & Design, The Website, The Payment Problem (and Three Solutions). Inline images per subsection.
4. Gallery grid with mixed sizes
5. "The Outcome" bulleted list
6. Prev/Next navigation

### Voice Note

Body Biz is the case study that shows Lauf can solve real business operations problems, not just make things look pretty. The three-version payment story is the hook. It shows iteration, problem-solving, and the ability to recognize when a tool isn't working and build something better. This is the kind of story that attracts clients with messy internal systems who need someone to untangle things and build something custom.

### Image Priority

The brand/design imagery is strong (the plant aesthetic is distinctive), but if dashboard screenshots are available, those should get prominent placement. Showing a real custom-built tool is more compelling than another pretty homepage screenshot.

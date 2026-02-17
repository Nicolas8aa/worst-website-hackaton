# Active Context: Next.js Starter Template

## Current State

**Template Status**: 🟡 In progress (worst website hackathon page built)

The template now includes a single-page "Worst Website Ever" hackathon site themed around a new IDE release, with intentionally awful but responsive 90s landing page styling and chaotic UX (floating alerts, fake console demo, cookie popup, dodgy submit button, toggles).

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS 4 integration
- [x] ESLint configuration
- [x] Memory bank documentation
- [x] Recipe system for common features
- [x] Added intentionally "bad UI/UX" homepage content about AI overbuilding
- [x] Built the "Worst Website Ever" hackathon page with sections, chaotic layout, and faux onboarding
- [x] Added client-side interactivity for fake onboarding, toasts, cookie popup, and dark mode
- [x] Fixed build by escaping ASCII art backticks in the under-construction section
- [x] Reworked header sizing with a dodgy collapse button
- [x] Replaced onboarding form with AI agent demo console
- [x] Removed feature cards section and updated toast copy
- [x] Made header non-sticky, more compact, and moved dark mode/sound toggles into it
- [x] Moved live demo under the hero section and extended toast timing with new messages
- [x] Improved header dodge behavior and fixed dark mode floating elements
- [x] Fixed dark mode filtering on floating UI and restructured landing page to lead with full-width IDE demo
- [x] Moved the DevGPT Ultra PRO IDE section to the top and rewrote copy around the new IDE focus
- [x] Updated the page structure to a more 90s-style landing layout
- [x] Prevented dark mode hue filtering from hiding floating alerts
- [x] Added reference screenshots to IDE sections and reorganized live demo composition
- [x] Alternated section background colors with new striped overlays for clearer separation
- [x] Swapped IDE section images to use new local reference1.png/reference2.png/reference3.png assets
- [x] Compacted navbar, moved collapse button to bottom right, removed Top/Proof/WIP buttons, added emoji toggles for dark mode and sound
- [x] Added patterned chaos section, construction banner strip, and "Enter Now" CTA stickers inspired by new references
- [x] Added varied emoji-based section background patterns to avoid repeating overlays
- [x] Updated live demo to full-width console with staged "Thinking" steps and git diff output
- [x] Improved section responsiveness and ensured cards render fully above background patterns
- [x] Added mobile-friendly typography tweaks and emoji accents across UI copy
- [x] Fixed responsive layout overflow in DevGPT Ultra PRO IDE section with proper breakpoints and overflow handling
- [x] Restructured Overview section layout with progressive border/shadow scaling to eliminate overflow
- [x] Added comprehensive site metadata (title, description, OpenGraph, Twitter cards, theme color)
- [x] Created centralized site configuration in src/lib/constants.ts for easy title management
- [x] Added interactive live demo features: warning after first prompt, crash on second prompt with blue screen
- [x] Implemented button shake animation and blinking cursor during AI thinking
- [x] Improved mobile navbar with larger touch targets and better spacing
- [x] Added Blue Screen of Death component with Lottie skeleton animation

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Hackathon single-page site (worst UI/UX) | ✅ Updated |
| `src/app/layout.tsx` | Root layout | ✅ Ready |
| `src/app/globals.css` | Global styles (ugly palette + animations + dark-mode) | ✅ Updated |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

Current focus is refining the intentionally “worst website” experience per user guidance (90s landing layout, IDE-centric copy, alternating section backgrounds, emoji pattern overlays, reference-inspired patterns, and faux interactions).

## Quick Start Guide

### To add a new page:

Create a file at `src/app/[route]/page.tsx`:
```tsx
export default function NewPage() {
  return <div>New page content</div>;
}
```

### To add components:

Create `src/components/` directory and add components:
```tsx
// src/components/ui/Button.tsx
export function Button({ children }: { children: React.ReactNode }) {
  return <button className="px-4 py-2 bg-blue-600 text-white rounded">{children}</button>;
}
```

### To add a database:

Follow `.kilocode/recipes/add-database.md`

### To add API routes:

Create `src/app/api/[route]/route.ts`:
```tsx
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}
```

## Available Recipes

| Recipe | File | Use Case |
|--------|------|----------|
| Add Database | `.kilocode/recipes/add-database.md` | Data persistence with Drizzle + SQLite |

## Pending Improvements

- [ ] Add more recipes (auth, email, etc.)
- [ ] Add example components
- [ ] Add testing setup recipe

## Session History

| Date | Changes |
|------|---------|
| 2026-02-16 | Added intentionally “worst website” homepage about AI overbuilding |
| 2026-02-16 | Built the full hackathon single-page parody with ugly styling + fake onboarding UX |
| 2026-02-16 | Added interactive bad-UX behaviors (toast, cookie popup, modal, dodgy submit) |
| 2026-02-16 | Fixed Next.js build error caused by ASCII art backticks in page content |
| 2026-02-16 | Shrunk header with evasive collapse toggle, added AI agent demo, removed feature cards, refreshed toast jokes |
| 2026-02-16 | Compact non-sticky header, repositioned demo, longer toasts, dark mode floating fix |
| 2026-02-16 | Fixed dark mode floating UI behavior and made IDE demo the first, full-width landing section |
| 2026-02-17 | Reordered sections to lead with DevGPT Ultra PRO IDE, refreshed copy for the new IDE focus, and exempted floating alerts from dark-mode hue filter |
| 2026-02-17 | Integrated uploaded screenshots, reworked live demo composition, and alternated section backgrounds |
| 2026-02-17 | Replaced IDE section image sources with new local reference assets |
| 2026-02-17 | Added patterned chaos section, under-construction banner strip, and stickered CTA block to mirror reference visuals |
| 2026-02-17 | Varied section background patterns with emoji overlays and unique texture mixes |
| 2026-02-17 | Expanded live demo to full-width layout with delayed steps and diff-style output |
| 2026-02-17 | Tuned card stacking + responsive typography for section layouts |
| 2026-02-17 | Added mobile-friendly type scales and emoji accents across UI copy |
| 2026-02-17 | Fixed responsive overflow in first section with improved breakpoints, smaller borders on mobile, and proper overflow handling |
| 2026-02-17 | Restructured Overview section with progressive scaling (3px→8px borders) and max-width constraints to eliminate overflow |
| 2026-02-17 | Added comprehensive Next.js metadata including OpenGraph, Twitter cards, and theme color for the hackathon site |
| 2026-02-17 | Created centralized SITE_CONFIG constant and updated all references across the site |
| 2026-02-17 | Added live demo crash feature with warning system, button shake animation, blinking cursor, and Blue Screen with Lottie animation |
| 2026-02-17 | Improved mobile navbar with larger buttons (px-3 py-1.5) and better touch targets |

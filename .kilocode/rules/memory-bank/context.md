# Active Context: Next.js Starter Template

## Current State

**Template Status**: 🟡 In progress (worst website hackathon page built)

The template now includes a single-page “Worst Website Ever” hackathon site themed around a new IDE release, with intentionally awful but responsive 90s landing page styling and chaotic UX (floating alerts, fake console demo, cookie popup, dodgy submit button, toggles).

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS 4 integration
- [x] ESLint configuration
- [x] Memory bank documentation
- [x] Recipe system for common features
- [x] Added intentionally “bad UI/UX” homepage content about AI overbuilding
- [x] Built the “Worst Website Ever” hackathon page with sections, chaotic layout, and faux onboarding
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

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Hackathon single-page site (worst UI/UX) | ✅ Updated |
| `src/app/layout.tsx` | Root layout | ✅ Ready |
| `src/app/globals.css` | Global styles (ugly palette + animations + dark-mode) | ✅ Updated |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

Current focus is refining the intentionally “worst website” experience per user guidance (90s landing layout, IDE-centric copy, and faux interactions).

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

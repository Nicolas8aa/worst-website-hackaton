# Active Context: Next.js Starter Template

## Current State

**Template Status**: 🟡 In progress (worst website hackathon page built)

The template now includes a single-page “Worst Website Ever” hackathon site themed around AI developer tools with intentionally awful but responsive UX, chaotic styling, and interactive bad-UX behaviors (toasts, modal, dodgy submit button, toggles).

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

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Hackathon single-page site (worst UI/UX) | ✅ Updated |
| `src/app/layout.tsx` | Root layout | ✅ Ready |
| `src/app/globals.css` | Global styles (ugly palette + animations + dark-mode) | ✅ Updated |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

Current focus is refining the intentionally “worst website” experience per user guidance (content, styling, and faux interactions).

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

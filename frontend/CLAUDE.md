@AGENTS.md

# Envien Studio

Company profile and landing page for Envien Studio, a solo-run digital product and web engineering studio (https://envienstudio.com). The site is copy- and design-driven, and it is mostly static content. The repo is named `lothlorien`.

- `frontend/`: the entire site. Next.js 16 App Router, React 19, TypeScript (strict), Tailwind CSS v4.
- `backend/`: a placeholder reserved for PocketBase. Nothing is implemented, and the site has no data layer.

## Commands

Run from `frontend/`. The package manager is Yarn (`yarn.lock`).

- `yarn dev`: start the dev server
- `yarn build`: production build
- `yarn lint`: ESLint CLI with the native flat config
- `npx tsc --noEmit`: type check. Errors under `.next/` that name deleted routes are stale generated types. Only errors in `src/` matter.

There is no test suite.

## Feature folder structure

The owner likes this structure, so follow it for all new work. `src/features/home` is the reference implementation.

```
src/app/<route>/page.tsx         Thin route: renders one *PageFeature and nothing else
src/features/home/
  index.tsx                      HomePageFeature: page shell and section order only
  features/
    services/                    One folder per page section (kebab-case)
      index.tsx                  ServicesSection: layout and composition
      constants/
        index.ts                 Barrel: export * from "./services"
        services.ts              Content and its types (ServiceItem, servicesData)
      features/                  Components private to this section (PascalCase files)
        SectionHeader.tsx
        ServiceCard.tsx
    products/
      components/                Shared by sibling sub-features of this section
      features/ProductShowcase/  A sub-feature with children repeats the same shape
        index.tsx
        features/
```

The same shape applies at every depth: a feature is a folder with an `index.tsx`, optional `constants/`, and a `features/` folder for its children.

### How the structure maps to SOLID

- **Single responsibility**: `index.tsx` lays out and composes. `constants/` holds copy, data, and types. Each file in `features/` renders one thing. Page shells only decide section order.
- **Open/closed**: sections take optional props that default to their constants (`items = servicesData`, `title = "Services"`, `className = ""`). Change content by editing data, not JSX.
- **Interface segregation**: components declare a small local `interface XProps` and receive only what they use, such as `service` or `avatarSrc`/`name`/`role`.
- **Dependency direction**: parents import children, and children receive data through props. Leaves import types from `../constants`, not the section's data.

### Rules for new code

- Add a section by creating `features/home/features/<name>/` in the shape above, then placing it in `features/home/index.tsx`. Add a nav link in `components/Header.tsx` if it needs one, using the `/#anchor` form so it works from other routes.
- Keep user-facing copy in `constants/`, not inline in JSX.
- Each section has its own `SectionHeader` rather than a shared one, because the sections differ in color and copy.
- Put code in the narrowest scope that uses it: the section's `features/`, then the section's `components/`, then `src/components/` only when used across pages.
- Use relative imports inside a feature and `@/` for anything outside it.
- Use named exports. Section and page `index.tsx` files also add a default export, and `app/` routes import the named one.
- Add `"use client"` only to files that use hooks or event handlers, as far down the tree as possible. Sections are server components by default.

### Known departures from the pattern

Don't copy these into new code.

- `components/Footer.tsx` imports from `features/home/...`, so shared code depends on a feature.
- `features/projects/bagels` imports `BagelIcon` from `features/home/icons`.
- `src/constants/index.ts` re-exports feature constants but has no consumers. Import from the feature's own `constants/`.

## Other routes

`features/projects/{kickserve,bagels,online-assessment}` use the same shape for the `/projects/*` case studies. Each has a `*PageFeature` that renders `Header`, `Footer`, and its content. Shared types are in `features/projects/types.ts`.

## Shared code

- `components/ui/`: `Button` (renders a `Link` when given `href`; variants `primary`, `secondary`, `outline`, `dark`, `ghost`), `Modal`, `Toast`, `EnvienLogo`
- `context/`: `useToast` and `useModal`, mounted through `components/providers/AppProviders.tsx`
- `lib/utils.ts`: `cn()` (`clsx` + `tailwind-merge`)
- `lib/analytics.ts`: `trackEvent()` for GA4. It has no callers yet.
- `constants/metadata.ts`: site URL, SEO metadata, JSON-LD

## Styling

Tailwind v4 is configured in CSS (`app/globals.css`); there is no `tailwind.config`. Styles are utility classes in JSX, and there are no design tokens, so colors are written as literal values.

- Brand accent: `#f26522`, hover `#e05616`
- Neutrals: the `stone` scale
- Section backgrounds: `#fafaf9` (light), `#f4f3ee` (warm), `bg-stone-950` (dark)
- Fonts: Plus Jakarta Sans (`font-sans`) for most text, Cormorant Garamond (`font-serif`, italic) for accents such as service numbers
- Section skeleton: `<section id="..." className="scroll-mt-20 ...">` wrapping `max-w-7xl mx-auto px-6 sm:px-8 lg:px-12`
- Section spacing: usually `py-10 sm:py-14 lg:py-16`
- Layouts are mobile-first. Some components render separate mobile and desktop markup using `md:hidden` and `hidden md:block`.
- Icons come from `lucide-react`. Custom ones live in `features/home/icons.tsx`.
- Remote images must be allowed in `next.config.ts`. Only `images.unsplash.com` is today.

## Parked code

Commented-out or unmounted code here is intentional, so don't remove it as cleanup.

- `features/home/features/digital-storefront`: kept for a future multi-product showcase
- `features/home/features/hero-section/index.tsx`: commented-out hero variants are copy experiments to switch between
- `hero-section/features/VisualCard.tsx` and `constants/visual-cards.tsx`: currently unused by the hero

## Housekeeping

`next dev` rewrites `next-env.d.ts` to point at `.next/dev/types`, and `tsc` rewrites the tracked `tsconfig.tsbuildinfo`. Leave those changes out of commits unless asked.

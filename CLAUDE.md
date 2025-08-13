# C&N ENTERPRISE — Project Instructions for Claude

This file tells Claude how to work in this repository. The site is an informational website for an automotive electrical shop specializing in alternators, starter motors, and wiring diagnostics. The primary goal is to drive direct contact via WhatsApp and phone calls. No authentication, no payments, no database.

## Business profile
- Name: C&N ENTERPRISE
- WhatsApp: 0168029559 (display). Use international format via environment variable when building links.
- Primary CTAs: WhatsApp Now, Call Now, Get Directions
- Brand style: Sleek, modern, trendy. Accent color: bright yellow.

## Tech snapshot (current repo)
- Framework: Next.js (App Router) — `next@15`
- Language: TypeScript
- UI: Tailwind CSS v4 (already configured via `globals.css`)
- React: `react@19`
- Package manager: npm

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint`

Always provide Windows PowerShell-friendly commands in docs and scripts.

## Hard rules (do not break)
- Do NOT add authentication, login, signup, or user accounts.
- Do NOT add payments, carts, checkout, or Stripe.
- Do NOT add a database or Prisma. Use file-based content (MD/MDX/JSON) only.
- Contact must be direct via WhatsApp links, `tel:` links, and a Google Maps directions link.
- Keep client JavaScript minimal. Prefer React Server Components. Only use client components when necessary (e.g., interactive UI or WhatsApp form behavior).

## Contact/WhatsApp behavior
- Build WhatsApp URLs as `https://wa.me/<number>?text=<encoded_message>`.
- Prefer using `NEXT_PUBLIC_WHATSAPP_NUMBER` in international format (e.g., +60168029559). If not present, fall back to `0168029559`.
- Prefill messages with page context when possible (e.g., service slug or page name) to help the shop respond quickly.
- Provide secondary CTAs: `tel:` link for calls, and a Google Maps link for directions (read from config/content).

Example helper (TypeScript):
```ts
export function buildWhatsAppUrl(opts: {
  phoneE164?: string; // e.g. "+60168029559"
  fallbackLocal: string; // "0168029559"
  message?: string;
}) {
  const phone = (opts.phoneE164 ?? "").trim() || opts.fallbackLocal.trim();
  const q = opts.message ? `?text=${encodeURIComponent(opts.message)}` : "";
  return `https://wa.me/${phone.replace(/[^+\d]/g, "")}${q}`;
}
```

## Content model (file-based)
- Create a `src/content/` directory to store:
  - `services/*.mdx` — service pages (frontmatter: title, slug, summary, benefits, symptoms, steps, priceRange, faqs)
  - `reviews.json` — array of reviews
  - `promotions.json` — list of promotions/offers
  - `posts/*.mdx` — blog posts
  - `service-areas/*.json` — localized area pages
  - `site.json` — brand settings (name, tagline, phone, WhatsApp, address, hours, map embed URL, social links)
- Create simple loaders in `src/lib/content.ts` to read and type content. Do not introduce a database.

## Information architecture
- Home `/`
- Services `/services` and detail pages for:
  - Alternator Repair `/services/alternator-repair`
  - Starter Motor Repair `/services/starter-repair`
  - Wiring & Electrical Diagnostics `/services/wiring-diagnostics`
  - Battery & Charging System `/services/charging-system`
  - ECU/OBD-II Diagnostics `/services/ecu-diagnostics`
- About `/about`
- Contact `/contact` (WhatsApp-first form that opens WhatsApp, not a server submit)
- Reviews `/reviews`
- Blog `/blog`
- Promotions `/promotions`
- Gallery `/gallery`
- Service Areas `/service-areas`
- Legal: `/privacy`, `/terms`

## Components to build (reusable)
- Layout: `Header`, `Footer`, `ThemeToggle`
- Marketing: `Hero`, `ServiceCard`, `TestimonialCarousel`, `Steps`, `FAQAccordion`, `PromoRibbon`, `StatBadge`
- Contact: `FloatingWhatsApp`, `StickyCTA`, `MapEmbed`, `ContactQuickActions`
- Forms: `Input`, `Select`, `Textarea` (accessible, a11y labels, error states)

## Design system
- Accent: bright yellow. Choose an accessible palette with suitable contrast on dark and light backgrounds.
- Typography: choose a modern sans (e.g., Inter/Geist) via `next/font`.
- Motion: subtle micro-interactions; respect reduced motion.
- Accessibility: semantic HTML, labeled inputs, keyboard navigation, focus states, AA+ contrast.

## SEO and local SEO
- Use `generateMetadata` per page.
- Implement robots.txt and sitemap.xml in `src/app` route handlers.
- JSON-LD: `AutomotiveBusiness`, `Service`, `LocalBusiness`, `Review`, `FAQPage`, `BlogPosting`.
- OG/Twitter images: provide defaults and dynamic variants for services and blog posts.

## Performance
- Target Lighthouse >95.
- Prefer RSC, minimal client JS, route-based code splitting.
- Optimize images with `next/image`.
- Subset fonts, preconnect, prefetch critical assets.

## Security & privacy
- Add strict security headers (including CSP) via `next.config.ts` headers.
- No PII storage. Contact is direct via WhatsApp/phone/maps.

## Quality gates
- TypeScript strict, ESLint + Prettier.
- Provide unit tests (Vitest) for helpers and components where applicable.
- Provide lightweight Playwright tests for critical flows (WhatsApp CTA link presence, contact page opens wa.me, navigation).

## Environment variables (client-only)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — in international E.164 format (e.g., +60168029559). Optional; fallback to `0168029559`.
- `NEXT_PUBLIC_PHONE_NUMBER` — display and `tel:` link.
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` — for the map iframe.
- Optional: `NEXT_PUBLIC_GA_ID` — Google Analytics 4, if enabled.

## How Claude should work in this repo
1. Before editing code, create missing directories and files under `src/` as described above.
2. Do not add auth, payments, or database packages. Keep dependencies lean.
3. Prefer server components; only mark components `"use client"` when interaction is required.
4. For WhatsApp CTA, centralize link building in a utility (`src/lib/whatsapp.ts`) and reuse it across components.
5. When adding pages, include metadata, structured data, and clear CTAs.
6. Keep copywriting action-oriented and trust-building. Use the term “starter motor” (not “stater”).
7. After significant edits, ensure `npm run build` succeeds.
8. Keep code readable and well-typed. Avoid `any`.

## Task backlog (next steps Claude can take)
- Create `src/content/site.json` with business basics (name: "C&N ENTERPRISE", phone: "0168029559", brandColor: bright yellow).
- Implement `src/lib/whatsapp.ts` with a typed `buildWhatsAppUrl` function.
- Add `FloatingWhatsApp` and `StickyCTA` components and render them in the root layout.
- Replace the starter homepage with a branded hero and CTAs (WhatsApp and Call Now).
- Scaffold `/services` and one detailed service page as a template.
- Add route handlers for `sitemap.xml` and `robots.txt`.

---

Maintainer note: If the WhatsApp number’s country code is known, set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the E.164 international format to ensure `wa.me` links work globally.

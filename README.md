# Vision Science Academy

Public, static-first coaching-class website built with Next.js, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

Use `npm run build` to create a production build.

## Configuration

Copy `.env.example` to `.env.local` and configure contact, WhatsApp, map and booking URLs. `EMAIL_PROVIDER_API_KEY`, `ENQUIRY_RECEIVER_EMAIL`, and `ENQUIRY_SENDER_EMAIL` are server-only foundations for the enquiry API. Connect the class owner’s chosen transactional email provider in `src/app/api/enquiry/route.ts`; the route intentionally shows an error until that delivery call is present, rather than silently discarding enquiries. Never expose provider credentials to the browser.

## Updating content

All editable business content is centralized in `src/data/`:

- `site-config.ts`: identity and public contact details
- `courses.ts`: course cards and individual course routes
- `faculty.ts`, `results.ts`, `testimonials.ts`: verified information only
- `faqs.ts`, `contact.ts`: common questions and contact links

Replace all bracketed placeholders with approved, verified information. Add optimized, consent-cleared facility images to the gallery when available.

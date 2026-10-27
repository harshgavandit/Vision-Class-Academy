# Vision Science Academy

A public coaching-class website for Class 10, Class 11–12 Science, JEE Main, JEE Advanced, NEET, foundation and crash courses. Students and parents can explore programmes, results, faculty, testimonials and the gallery, then contact the academy or open its external counselling calendar.

## Local setup

Use a maintained Node.js LTS release and npm.

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

```powershell
npm run lint
npm run typecheck
npm run build
npm start
```

This source-only website needs no CMS, authentication or database.

## Content and templates

| File | Editable content |
| --- | --- |
| `src/data/site-config.ts` | Academy identity and environment-backed contact configuration |
| `src/data/presentation.ts` | Homepage banners, learning approach and admission steps |
| `src/data/courses.ts` | Eight course slugs, overview paragraphs, highlights, suitable students, learning outcomes, categories and illustrations |
| `src/data/results.ts` | Student result templates, categories and verified achievement records |
| `src/data/faculty.ts` | Faculty profiles, credentials and optional photographs |
| `src/data/testimonials.ts` | Student/parent quotes and publication status |
| `src/data/gallery.ts` | Gallery categories and real photograph metadata |
| `src/data/faqs.ts` | FAQ questions and answers |
| `src/data/contact.ts` | Validated contact links and form options |

Bracketed names, marks, ranks, years, credentials and other missing details are explicit placeholders. Preview cards are labelled and contain no invented student achievements or photographs. Original academic illustrations live in `public/images/`; they do not depict real students or verified academy facilities.

Course cards, result cards, faculty cards, testimonials, gallery items, section headings and CTAs are reusable components in `src/components/`.

The Courses page has keyboard-accessible course tabs and a shared explanation layout on every individual course page. Edit each course's `explanation.overview`, `explanation.whoShouldEnrol` and `explanation.learningOutcomes` in `src/data/courses.ts`; `highlights` supplies both Key Highlights and the sidebar. Replace `format` with confirmed batch timings. Optional `admission.duration`, `admission.fees` and `admission.batchSize` override the clearly marked sidebar placeholders for that course.

## Add student results

Edit `results` in `src/data/results.ts`. Each real entry uses `kind: "verified"`, a unique ID, student name, examination category, exam name and academic year. Add the relevant numeric `marks: { scored, total }`, `percentage`, `percentile` or `rank: { value, scope }` fields.

Only publish checked records with permission. The `verification` object requires `verified: true`, `publicationConsent: true`, a source reference and a valid `verifiedOn` date. Do not include private documents or personal data in the source reference. Verification references stay out of interactive client props.

For a photo, add `photo: { src, alt, width, height }` using a local path such as `/images/results/approved-photo.webp`. Preserve aspect ratio, optimize files and obtain publication consent. Missing or broken images display a safe fallback.

Until valid real results exist, the website displays the separate labelled `resultTemplates`. Exam and placeholder-year controls work in preview mode; genuine results populate the year filter with their academic years.

## Update faculty, testimonials and gallery

Replace faculty placeholders only after checking names, qualifications and experience. Set `verified: true` after verification and permission. Optional faculty photos use `photo: { src, alt }`.

Replace testimonial placeholders with consent-cleared quotes and contributor details, then set `verified: true`. Stable IDs prevent duplicate React keys.

Add approved academy photographs to `galleryImages` with `id`, `title`, `category`, `src`, `alt`, `width` and `height`. Available categories are Classrooms, Study spaces and Facilities. Real photographs automatically replace illustrative previews. Keep images under `public/images/` and avoid uploading large originals.

## Contact, booking and maps

Set `NEXT_PUBLIC_SITE_URL` to the public site origin before publishing; it controls metadata and sitemap URLs. Local development defaults to localhost.

Set the phone, WhatsApp, email and address environment variables to real academy details. Include the country code in WhatsApp numbers. Missing values never create fake phone or email links.

Set `NEXT_PUBLIC_BOOKING_URL` to the external provider's HTTPS embed URL. Configure its counselling modes, student/parent fields, course, questions and availability directly with that provider. The page also offers a direct external booking link. Only the provider can confirm an appointment.

Set `NEXT_PUBLIC_MAP_EMBED_URL` to the HTTPS Google Maps **embed** URL. The address supplies a separate directions link. Missing integrations show visitor-friendly placeholder states.

## Enquiry delivery

**Email delivery is not connected.** The complete enquiry form is visible as a labelled, editable preview; submission is disabled, and no form details are sent or stored.

To enable live enquiries, implement the chosen transactional email provider inside `src/app/api/enquiry/route.ts`, using server-only `EMAIL_PROVIDER_API_KEY`, `ENQUIRY_RECEIVER_EMAIL` and `ENQUIRY_SENDER_EMAIL`. Return success only after the provider accepts delivery, add appropriate abuse protection, and then enable `deliveryAvailable` on the Contact and Book Counselling pages. Environment values alone do not connect delivery. Never put provider credentials in public variables.

Legal page dates and academy details remain placeholders for the owner to complete.

## Vercel analytics and performance

The root layout mounts Vercel Web Analytics and Speed Insights once when deployed on Vercel. Enable both features in the Vercel project dashboard. The integration removes query strings and URL fragments before sending page data and does not add custom events or send enquiry form contents.

Local builds and other hosting platforms keep the monitoring components disabled. Vercel configuration, local environment files, build output and verification screenshots are excluded from Git and deployment uploads. Set `NEXT_PUBLIC_SITE_URL` to the final public origin before the production build so canonical links, social images and the sitemap use the live domain.

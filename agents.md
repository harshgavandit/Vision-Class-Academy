# AGENTS.md
 do not run any heavy commands like npm install , npm run build , npm run check or any commands , i will run commands locally and verify. 
 
  you just have to fix/implement/change the features files and work that the user will ask to do.
## Project Purpose

This project is a public informational and lead-generation website for a coaching class that teaches:

* Class 10
* Class 11 Science
* Class 12 Science
* JEE Main
* JEE Advanced
* NEET
* Foundation courses
* Crash courses

The website must help students and parents understand the class, courses, faculty, teaching methodology, results, facilities and admission process. It must also allow visitors to contact the class and book a counselling meeting with the class owner.

This is not an LMS, student portal or course-delivery platform.

---

## Core User Journey

Maintain this primary flow:

```text
Visit website
→ Understand the class
→ Explore courses
→ Review teaching methodology and faculty
→ View results, testimonials and facilities
→ Contact the class or book counselling
```

Every important page should provide a clear route to:

* Book Counselling
* Call
* WhatsApp
* Email
* View Location

---

## Technology Rules

Use:

* Next.js
* TypeScript
* Tailwind CSS
* Reusable React components
* Structured TypeScript or JSON content files
* Server actions or API routes only where required
* Environment variables for external service configuration

Keep the architecture:

* Simple
* Static-first
* Platform-independent
* Easy to maintain through VS Code
* Free from unnecessary backend complexity

Do not introduce hosting-provider-specific configuration unless explicitly requested.

---

## Content Management

All website content must be managed directly through code.

Keep reusable content in dedicated files such as:

```text
src/data/site-config.ts
src/data/courses.ts
src/data/faculty.ts
src/data/results.ts
src/data/testimonials.ts
src/data/faqs.ts
src/data/contact.ts
```

Do not hardcode repeated content across page components.

Changes to courses, faculty, results, testimonials, contact details and timings must be possible by editing the relevant data file.

Use strong TypeScript types for all structured content.

---

## Required Pages

Maintain the following public pages:

* Home
* About
* Courses
* Individual Course Details
* Teaching Methodology
* Faculty
* Results and Achievements
* Testimonials
* Classroom Gallery
* Frequently Asked Questions
* Contact
* Book Counselling
* Privacy Policy
* Terms and Conditions
* Custom 404 Page

Do not remove or rename public routes without checking all navigation, CTA and SEO references.

---

## Required Features

The website must support:

* Responsive navigation
* Mobile-first design
* Sticky or prominent Book Counselling CTA
* Floating WhatsApp action
* Click-to-call links
* Click-to-email links
* Contact and enquiry form
* External appointment-booking embed
* Face-to-face, phone and online counselling options
* Google Maps or location embed
* Faculty profiles
* Course detail sections
* Teaching methodology presentation
* Results and achievement presentation
* Student and parent testimonials
* Classroom gallery
* FAQ accordion
* Form validation
* Loading, success and error states
* SEO metadata
* Open Graph metadata
* Local Business structured data
* Accessible semantic HTML
* Optimized images
* Responsive layouts across mobile, tablet and desktop

---

## Appointment Booking Rules

Use an external booking system such as:


* Google Calendar Appointment Scheduling

Do not build a custom scheduling engine.

The website may embed or link to the configured booking page.

Booking configuration must use environment variables or central site configuration.

The booking flow should support:

* Counselling type
* Course of interest
* Preferred date and time
* Student details
* Parent details
* Phone number
* Email
* Questions or concerns

Do not claim that a booking is confirmed unless the external booking provider confirms it.

---

## Contact Form Rules

The contact form should support:

* Student name
* Parent name
* Phone number
* Email
* Current class
* Course of interest
* Preferred contact method
* Message

Requirements:

* Validate all required fields.
* Validate phone and email formats.
* Show clear success and error messages.
* Prevent duplicate submissions where practical.
* Include spam-protection foundations.
* Do not expose email-service credentials.
* Use environment variables for email configuration.
* Do not silently discard submissions.
* Do not require a database unless explicitly requested.

---

## Strictly Excluded Features

Do not create or introduce:

* Admin dashboard
* CMS
* Student dashboard
* Teacher dashboard
* Parent dashboard
* Authentication
* User accounts
* Role-based access
* Database-driven content management
* Payment gateway
* Online course delivery
* LMS functionality
* Recorded lecture system
* Online test engine
* Attendance tracking
* Assignment management
* Student progress tracking
* Microservices
* Provider-specific deployment logic
* Unrequested analytics systems
* Features outside the approved scope

Do not expand the project into a SaaS or learning platform.

---

## Content Integrity

Never invent or present fake:

* Faculty members
* Qualifications
* Teaching experience
* Results
* Student ranks
* Testimonials
* Student photographs
* Statistics
* Awards
* Affiliations
* Batch timings
* Fees

When real information is unavailable, use clearly marked placeholders such as:

```text
[Faculty Name]
[Qualification]
[Teaching Experience]
[Verified Result Required]
[Class Address]
```

Do not present placeholder content as real information.

Do not use misleading claims such as:

* Best coaching class
* Guaranteed selection
* Guaranteed rank
* 100% success
* Number one institute

Such claims may only be added when explicitly provided and verifiable.

---

## Design Rules

The design must remain:

* Professional
* Trustworthy
* Academic
* Modern
* Clean
* Parent-friendly
* Student-friendly
* Accessible
* Easy to navigate
* Conversion-focused without aggressive marketing

Maintain:

* Consistent typography
* Consistent spacing
* Clear hierarchy
* Reusable buttons and cards
* Strong mobile usability
* Readable content widths
* Clear CTA placement
* Sufficient contrast
* Keyboard accessibility
* Visible focus states

Avoid:

* Excessive animations
* Autoplay media
* Distracting backgrounds
* Overloaded pages
* Fake urgency
* Aggressive pop-ups
* Unnecessary carousels
* Decorative elements that reduce readability

---

## Component Rules

Create reusable components for repeated UI patterns such as:

* Header
* Footer
* Mobile navigation
* Course cards
* Faculty cards
* Testimonial cards
* Result cards
* Section headings
* CTA sections
* Contact actions
* Form fields
* FAQ items
* Gallery items
* Booking embed
* Empty or unavailable states

Do not duplicate large JSX sections across pages.

Keep page components focused on composition rather than containing all content and logic.

---

## Responsive Design Rules

Every new or modified page must work on:

* Small mobile screens
* Standard mobile screens
* Tablets
* Laptops
* Large desktop screens

Do not create desktop-only sections.

Check:

* Navigation
* Buttons
* Forms
* Course cards
* Faculty cards
* Tables, when present
* Gallery layout
* Embedded maps
* Booking embeds
* Long text
* Phone and WhatsApp actions

Avoid horizontal scrolling.

---

## Accessibility Rules

Use:

* Semantic HTML
* Correct heading order
* Descriptive link text
* Accessible form labels
* Useful alternative text
* Keyboard-accessible controls
* Visible focus indicators
* Sufficient colour contrast
* Accessible error messages

Do not use clickable `div` elements when a button or link is appropriate.

Do not use images containing essential text without an accessible text equivalent.

---

## SEO Rules

Each public page must have:

* Unique title
* Unique description
* Canonical URL support
* Open Graph metadata
* Clear heading structure
* Crawlable content
* Descriptive internal links

The website should include:

* Local Business or Educational Organization structured data
* Sitemap
* Robots configuration
* Meaningful image alternative text
* Clean page URLs
* Location and contact information
* Course-specific metadata

Do not use keyword stuffing, hidden text or duplicate metadata.

---

## Image Rules

Use real class, faculty and facility images when available.

Requirements:

* Optimize images.
* Preserve aspect ratios.
* Avoid layout shifts.
* Use descriptive file names.
* Add meaningful alternative text.
* Provide a safe fallback for missing images.
* Do not stretch low-resolution images.
* Do not use fake student or faculty photographs as real people.

Keep image paths and metadata centralized where practical.

---

## Security Rules

* Never commit secrets.
* Never expose API keys in client-side code.
* Use environment variables.
* Validate all server-side form inputs.
* Escape or sanitize user-provided content.
* Add rate limiting or spam protection where practical.
* Do not trust client-side validation alone.
* Do not log sensitive enquiry information unnecessarily.
* Do not expose internal errors to visitors.
* Keep dependencies minimal and maintained.

Provide an `.env.example` containing variable names only.

---

## Environment Configuration

External integrations must be configurable through environment variables or central configuration.

Typical variables may include:

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_PHONE_NUMBER=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_CLASS_ADDRESS=
NEXT_PUBLIC_MAP_EMBED_URL=
NEXT_PUBLIC_BOOKING_URL=

EMAIL_PROVIDER_API_KEY=
ENQUIRY_RECEIVER_EMAIL=
ENQUIRY_SENDER_EMAIL=
```

Never place real secrets in `.env.example`.

The website must handle missing optional configuration gracefully.

---

## Performance Rules

Prefer static rendering wherever possible.

Avoid:

* Large client-side bundles
* Unnecessary client components
* Heavy animation libraries
* Large unoptimized images
* Duplicate dependencies
* Unnecessary API requests
* Loading all gallery images immediately

Use client components only when interactivity requires them.

Lazy-load non-critical content and embeds where appropriate.

---

## Development Rules

Before changing code:

1. Inspect the relevant page, component and data files.
2. Understand the existing design patterns.
3. Identify all affected routes and components.
4. Keep changes within the requested feature scope.

During implementation:

* Make small, focused edits.
* Do not perform large combined replacements.
* Do not rewrite unrelated files.
* Do not change working functionality unnecessarily.
* Preserve existing naming and folder conventions.
* Reuse existing components before creating new ones.
* Keep business content separate from UI code.
* Avoid unnecessary dependencies.
* Avoid speculative abstractions.

After implementation:

* Check affected pages and routes.
* Check mobile responsiveness.
* Check navigation and CTA links.
* Check form states and validation.
* Check for broken imports and TypeScript errors.
* Check that no excluded features were introduced.
* Update documentation when configuration changes.

---

## Change Scope Rules

Only modify files required for the current task.

Do not:

* Refactor unrelated components
* Change the project architecture without approval
* Replace working libraries without a strong reason
* Rename routes without updating every reference
* Modify legal content without instruction
* Add new features because they appear useful
* Add dashboards, authentication or databases
* Change the deployment strategy

When a broader change is genuinely required, explain the dependency before implementing it.

---

## Testing and Verification

Verify each feature at the smallest practical scope.

Prefer:

* Page-by-page checks
* Route-by-route checks
* Component-specific checks
* Form-state checks
* Mobile and desktop checks

Do not combine the entire website into one large verification operation when smaller checks are possible.

At minimum, confirm:

* All public routes open
* Navigation works
* Mobile menu works
* Call links use valid `tel:` URLs
* Email links use valid `mailto:` URLs
* WhatsApp links are correctly formatted
* Booking integration opens or embeds correctly
* Map integration renders or fails gracefully
* Required form fields validate
* Success and error states display correctly
* Missing data does not break the page
* No fake content is presented as real
* No excluded system has been added

Do not mark a feature complete based only on visible UI when its form, link or integration is not connected.

---

## Documentation Rules

Keep the README concise and current.

Document:

* Project setup
* Environment variables
* Content file locations
* How to update courses
* How to update faculty
* How to update testimonials and results
* How to replace images
* How to configure contact email
* How to configure appointment booking
* How to configure the map
* How to run the development and production builds

Do not include deployment instructions for a specific provider unless explicitly requested.

---

## Completion Criteria

A feature is complete only when:

* The required UI exists.
* It is responsive.
* It uses structured content.
* Links and interactions work.
* Loading, success and failure states are handled.
* Accessibility requirements are respected.
* No secrets are exposed.
* No unrelated features were added.
* It remains easy to maintain through VS Code.
* It works without an admin panel, CMS or database-driven content system.

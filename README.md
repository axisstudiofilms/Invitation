# Axis Invitation MVP

Digital Wedding Invitations by Axis Studio. Built with React, TypeScript, Vinext/Vite, a Cloudflare Worker, D1 for invitation records, and R2 for uploaded photos/music. Product data lives independently of template styling.

## Run locally

Node 22.13+ and pnpm 11.19+ are required. In this folder:

1. `pnpm install`
2. `node --import ./scripts/local-tooling.mjs node_modules/drizzle-kit/bin.cjs generate` (only after schema changes; the initial migration is checked in)
3. `node scripts/run-framework.mjs build`
4. `node --import ./scripts/sites-env.mjs node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_confused_typhoid_mary.sql` (once per fresh local database)
5. Apply the remaining checked-in migrations in `drizzle/` using the same D1 command before starting the app.
6. `node scripts/run-framework.mjs dev`
7. Open the exact local URL printed by the server. Sign in using the development sign-in link; the starter simulates a local account only on loopback.

`node node_modules/typescript/bin/tsc --noEmit` checks types. `node scripts/smoke.mjs` verifies the complete local flow and access boundaries against the dev server. Smoke tests create isolated sample invitations in the local database; they do not touch hosted data. `scripts/local-tooling.mjs` addresses a restricted Windows token issue in CLI scratch-directory naming only; it is not imported by the application or hosted Worker.

## Routes and behavior

- `/`: cinematic brand landing page
- `/templates`: seventeen template styles with category filters
- `/create`: couple/date/template setup
- `/editor/{id}`: protected data API, structured sections, live preview, uploads, design/language switching, save, publish, QR, and sharing
- `/preview/{id}`: private saved draft preview
- `/pricing`: free MVP plan and Axis bespoke option
- `/dashboard`: owner invitations and restricted studio overview
- `/help`: usage guidance
- `/w/{slug}`: published snapshot only; `/w/suman-priya` is an illustrative sample

Seventeen implemented template styles include fourteen Nepali-focused designs and three Western options. Creators choose Nepali, English or bilingual content, a display font, and an animation/scrolling preference. Receivers can start or pause guided scrolling; reduced-motion preferences are respected. See PREMIUM-UPDATE.md for typography, SEO and payment launch details. See DESIGN-RESEARCH.md for market sources, brand tokens, cultural scope and artwork provenance. Templates open through an envelope into a long-form web invitation.

Drafts and published snapshots are separate. Saving never silently updates the public link. Publish copies the current content to the public snapshot; the URL stays stable when republishing. Optimistic revisions protect against overwriting changes from another editor window. Slugs are unique in the database. No RSVP responses, guest database, or CRM code exists. The Ivory Nepali template supports optional moderated guest wishes.

Media upload limits: 10 MB/file; JPG, PNG, WebP, MP3, M4A, WAV. External HTTPS media URLs are supported. Video is embedded from YouTube/Vimeo or played from a direct URL. Music requires a guest tap. Nepali supports custom names, wording, story, and locale formatting; event/family fields accept either language. Dates use the Gregorian calendar and times are Nepal time; verified Bikram Sambat dates and saait can be entered manually; no automated conversion is claimed.

## Authentication and admin

The Sites dispatcher supplies identity headers after ChatGPT sign-in. APIs enforce record ownership server-side. Public invitation reads require no application sign-in once the hosting audience is public. The initial deployment is owner-private, so guest access to the hosted preview is intentionally limited by the platform.

Studio admin is denied by default. Set the hosted `ADMIN_EMAILS` runtime variable to a comma-separated list of authorized administrators. The basic overview shows total/published counts and recent status metadata. It does not expose couple records to non-admins.

Do not deploy the Worker behind an arbitrary untrusted proxy that accepts client-supplied `oai-authenticated-user-*` headers. Standalone hosting needs a trusted identity layer or a separately implemented and reviewed consumer authentication system before enabling writes.

## Payments

Publishing is free. `lib/payments.ts` defines server-side eSewa/Khalti/Fonepay adapters. They report test mode, do not create checkout URLs, and never claim payment verification. Production work needs merchant credentials, documented provider APIs, server-side amount calculation, signed callbacks, transaction verification, idempotency, and order records. Do not gate production paid publishing on a browser-provided success flag.

## Assets

The sample images reference the existing Axis Studio website and are attributed in the interface. Replace them with approved wedding photographs at launch. The app shell uses the official Axis Studio SVG logo and brand-inspired header and footer with invitation-product navigation. Original generated decorative borders are documented in public/art/ARTWORK.md. External image availability and Google font/map delivery depend on those services.

## Deploy to invitation.axisfilmstudio.com

1. Publish through Sites with the checked-in `.openai/hosting.json` bindings `DB` and `BUCKET`. The publishing workflow applies the checked-in D1 migration and wires storage; do not initialize tables at runtime.
2. Test the private deployment, creator sign-in, saved drafts, uploads, publishing, media visibility, and anonymous guest experience before accepting customers.
3. Add `invitation.axisfilmstudio.com` as a custom domain in Sites, then apply the exact DNS records returned by the custom-domain tool in your domain provider. The agent has not changed DNS or activated this subdomain.
4. Make the intended guest audience public after reviewing the public/private boundary. Owner-private preview links cannot yet be shared with all wedding guests.
5. Set `ADMIN_EMAILS`, confirm creator authentication, connect approved merchant accounts, and decide final pricing/hosting duration. Add production upload quotas, content moderation/reporting, backups, deletion/unpublishing controls, and payment webhook tests before a paid public launch.
6. Verify HTTPS, direct loading of `/w/{slug}`, social preview metadata, QR scans on a phone, Nepal event timing, and updates to an existing invitation URL on the actual subdomain.

Custom domain setup and real payments require account access and merchant configuration. No DNS, merchant account, or customer-facing paid pricing has been activated by this build.

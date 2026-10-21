# Ivory Heritage — first custom Axis template

Implemented from the user's ivory scroll and envelope references, 6 October 2026.

## Design decisions
- Preserve ivory, burgundy, antique gold, floral artwork and ceremonial arch.
- Keep names and all invitation content as editable HTML, separate from artwork.
- Use generous section spacing, readable Devanagari type, responsive event cards and a two-column mobile timeline.
- Open on a deliberate tap; music and guided scrolling remain user-controlled. Honor reduced-motion preferences.
- Generate the calendar from the event date; provide actual map directions instead of a decorative map screenshot.
- Guest wishes require consent and owner approval before appearing publicly. No RSVP or guest CRM.

## Verification
TypeScript check, production build, main smoke suite, premium suite, flagship suite and new ivory suite passed locally. The ivory suite covers publishing, input validation, origin checks, pending-message privacy, moderation, duplicates and disabling wishes. Local wishes migration applied successfully. Production migration is still required during deployment.

## Preview
http://127.0.0.1:5173/templates/ivory-nepali

## Publishing
Hosted version is unchanged. The Sites source credential input step was rejected by automatic approval review because sandbox approval is disabled. Do not bypass that check. Resume the normal Sites publishing workflow when approval access is available.

## Artwork provenance
The two uploaded references informed newly generated, text-free arch and envelope assets. The app overlays real editable text. Delivery assets: public/art/ivory-arch.webp and public/art/ivory-envelope.webp. Original generated PNGs retained alongside them.
Arch direction: warm ivory paper, red flowers and olive leaves, antique gold Nepali ceremonial pillars and bells, faint Himalayan background, large empty center for editable type, no lettering.
Envelope direction: matching ivory paper envelope with embossed floral detailing, red wax seal with a blank face, straight-on view, no lettering or names; typography and initials are rendered by the app.

## Premium interaction pass — 7 October 2026
Added a tap-enabled wax seal, layered flap/letter opening, two crop-aware opening portraits, continuous paper texture, section ornaments, date/venue/schedule shortcuts, gallery swiping, and a three-step editor guide. The publish checklist now recognizes the Ivory sample names. TypeScript and premium/ivory smoke suites passed. Mobile opening and seal navigation verified in-browser; no horizontal overflow at 390px viewport. Hosted publication remains blocked by the previously reported approval restriction.


## Stationery rebuild — 7 October 2026
Replaced the previous CSS override stack and flat-image envelope with a scoped stationery design: burgundy outer stage, ivory paper, shared botanical line artwork, layered pocket/flap/letter/seal, a 1.9-second opening, matching rectangular photo mounts, and a contrasting calendar section with live countdown. Nepali date numerals are now deterministic. Motion-off is honored by both the opening and guided-scroll component. Long names use a smaller responsive heading size. Added template CreativeWork metadata while retaining public-invitation noindex. Verified mobile seal opening and motion-off/long-name layout in browser; premium, ivory, flagship and design integration checks passed. Production hosting has not been updated; the earlier publishing credential approval restriction remains unresolved.


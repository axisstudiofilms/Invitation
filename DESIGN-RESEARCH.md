# Axis Invitation: research and design decisions

Reviewed 2 October 2026. This is a representative market review, not an exhaustive catalogue of every Nepali community or vendor.

## Axis Studio brand

The live [Axis Studio site](https://axisfilmstudio.com/) uses black/#050505 backgrounds, orange #ff5500 calls to action (hover #ea4e00), a floating translucent #18181b pill header, fine white borders, rounded buttons, soft orange shadows and restrained motion. The app now reproduces its studio navigation, official logo, contact information and footer structure. A separate product navigation provides invitation-specific routes. Wedding card palettes remain selectable, as on a template platform.

[Nepali wedding photography](https://axisfilmstudio.com/weddings/two-day-wedding-celebration/) now supplies the main imagery and Nepali samples. Names and venue details shown are illustrative, not claims about the photographed couple.

## Invitation delivery reference

The [ChungDoi collection](https://chungdoi.com/templates) and [Lotus V2 Green demo](https://chungdoi.com/templates/lotus-v2-green/demo), together with the supplied screenshot, show an envelope first, then a narrow, flowing invitation: portrait, family announcement, date, layered gallery, reception/calendar, map, schedule and gift reveal. We adopted that interaction pattern with original artwork and our own layout. No ChungDoi artwork or code was copied. RSVP collection remains excluded; the optional guestbook is omitted.

## Nepali market directions

| Source | Observed direction | Application |
|---|---|---|
| [Kathmandu Print Shop](https://kathmanduprintshop.com/invitation-cards/) | Traditional Nepali/Newari, multiple religious contexts, floral/minimal and luxury finishes | Multiple selectable directions rather than one universal Nepali look |
| [Shakya Cards](https://shakyacards.com/) | Lokta paper, custom cuts, metallic papers and boards | Warm paper palette, inset borders and restrained typography |
| [Pikaaso red/gold card](https://pikaaso.com/product/golden-ornaments-nepali-wedding-invitation-card-with-red-theme/) | Red and golden ornamentation (indexed product listing) | Vermilion and royal options |
| [Mithila Jodi](https://mithilajodi.com/marriage-invitation) | Regional Mithila marriage imagery and decorative traditions | Original lotus/fish fine-line border, explicitly described as inspired |
| [Nepali designer example](https://www.behance.net/gallery/172419015/Nepali-wedding-invitation-card-design) | Contemporary Nepali invitation design | Nepali script, formal hierarchy and family-led wording |

## Implemented collection

Nine Nepali-focused options: Shubha Bibaha, Marigold Courtyard, Newa Courtyard, Mithila Celebration, Lokta Letter, Royal Vermilion, Lotus Blessings, Open Sky, Our Wedding Film.

Three Western options: Modern Ivory, Blush Romance, Garden Vows.

Original generated marigold, Mithila-inspired and lotus borders have transparent centers. Exact prompts and provenance are in public/art/ARTWORK.md. Newa uses an architectural/geometric frame rather than invented religious symbolism or fabricated Nepal Bhasa translations. Regional artwork is a contemporary interpretation; seek local practitioner review before promoting a definitive community-specific collection.

## Content and experience

Nepali/English names and invitation wording; separate parents and family fields; optional invocation and welcome; manually entered verified BS date and saait; Gregorian calendar clearly labeled, Nepal time used for countdown/calendar links; photo carousel and enlarged viewing; maps; guest-controlled music; optional video; gift QR reveal. Content is independent of its selected template, and saved changes require republishing to update the public link.

This is a responsive website. There is no native app deployment target, RSVP response collection, or guest CRM.

## Premium refinement — 2 October 2026

The current implementation has 16 templates, one Axis header, a language-first creator flow, six font pairings plus automatic designer selection, and receiver-controlled motion/scrolling. See PREMIUM-UPDATE.md for Hamro Patro typography findings, official font references, the new compositions, SEO behavior and payment integration requirements. Earlier collection counts in this research log describe the first redesign.

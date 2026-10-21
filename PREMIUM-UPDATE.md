# Premium invitation update

## Typography research

Hamro Patro's live Nepali headings and reading text reported the computed stack `Anek, Lexend, system-ui, sans-serif` during inspection on 2 October 2026: https://www.hamropatro.com/

The app uses Anek Devanagari for legible reading, with six selectable display pairings: Anek Devanagari, Tiro Devanagari Hindi, Yatra One, Rozha One, Kalam, and Cormorant with Tiro fallback. A seventh selection, Designer pairing, chooses the intended font for each template. Devanagari fonts work for Nepali and Hindi script; they do not automatically translate user content.

Primary font references:
- https://fonts.google.com/specimen/Anek+Devanagari
- https://fonts.google.com/specimen/Tiro+Devanagari+Hindi
- https://fonts.google.com/specimen/Yatra+One
- https://fonts.google.com/specimen/Rozha+One
- https://fonts.google.com/specimen/Kalam

## Experience and collection

One floating Axis header replaces the previous two-row header. Invitation navigation is under Weddings; the studio footer remains shared. Creation begins with Nepali, English or bilingual selection. Existing data remains separate from presentation.

The collection now has 16 templates, including new Himalayan Vow (panoramic portrait), A Letter of Love (handwritten letter with keepsake photo), Velvet & Brass (circular portrait and oversized lettering), and Moonlit Lotus (night-garden palette).

Creators can choose gentle, cinematic or still presentation and optional auto-scroll after opening. Receivers get play/pause, three speeds, animation toggle and return-to-top controls. Manual scrolling/touching, keyboard navigation and hidden browser tabs pause scrolling. System reduced-motion disables automatic scrolling and decorative motion. Music remains explicitly guest-controlled.

## Search visibility

Marketing and template routes render server-side with unique titles, descriptions, canonical links and social metadata. The homepage includes WebApplication structured data. `/sitemap.xml` lists public marketing/template routes; `/robots.txt` excludes APIs and editor routes. Private drafts and public couple invitations have noindex metadata; wedding details are not added to the sitemap. The hosting preview is owner-private, so search engines cannot index it until public launch.

Set NEXT_PUBLIC_SITE_URL to the verified production origin at build time when invitation.axisfilmstudio.com is activated, then rebuild and submit its sitemap in Search Console. Canonicals currently reference the actual hosted preview origin. SEO implementation does not promise search rankings.

## Payments

The architecture has separate eSewa, Khalti, Fonepay and bank adapters. All remain disabled test placeholders and never claim that money was received. No payment credentials or paid prices were invented.

For activation, add server-owned orders and prices, merchant credentials in secret storage, transaction verification, idempotent callbacks and matching order/amount checks. eSewa v2 uses signed form data and status verification; Khalti ePayment uses server-side initiation and lookup. Bank payments require the chosen bank's API or explicit reconciliation; a receipt image alone must not mark an order paid.

Official references reviewed:
- https://developer.esewa.com.np/pages/Epay-V2
- https://docs.khalti.com/khalti-epayment/

## Validation limits

This update is checked with TypeScript, production compilation and server/API regression checks. New automated browser access was blocked by the app's browser URL policy; no fresh screenshot or interaction verification is claimed for the latest font/scroll changes. The prior version's mobile screenshots are not proof of this update.

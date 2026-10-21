# Flagship self-service update — 5 October 2026

## Implemented locally
- Retained a single Axis visual header/footer with invitation-specific navigation; reused the brand component in the editor.
- Refined three featured compositions: traditional Nepali editorial, contemporary Lokta Letter, and Blush Romance. All sixteen existing designs remain available.
- Independent first/second image focal-position controls, persisted in the content model.
- Debounced draft autosave with revision checks, preservation of edits made during a save, visible errors and manual retry. Published content remains a separate snapshot.
- Optional story/gallery/video/gift section visibility stored independently of template selection, with content preserved.
- Language changes in the editor update default wording while preserving customized wording.
- Advisory pre-publication review of sample names, venues, photographs, story, missing Nepali names and past event dates.
- Guest schedule/directions shortcut; guided scrolling now begins only when the guest requests it, stops on interaction, and respects reduced motion. Opening still starts supplied music through a user gesture.

## Benchmark
Read Axis Studio and ChungDoi's live collection. Opened the Minimalism Dark Brown demo, observed its opening, long-form ceremony/gallery/venue sequence and persistent pause-music control. No competitor photos, music or artwork copied. Full competitor checkout and private editor were not tested.
https://axisfilmstudio.com/
https://chungdoi.com/templates/minimalism-dark-brown/demo

## Validation
TypeScript check and production build passed. Existing smoke and premium suites passed (including ownership/privacy, draft isolation, publishing, QR, metadata and all sixteen routes). Added flagship regression coverage for focal positions, section visibility, schema rejection and preservation when changing templates.
Browser check: changed a name, hid the story and switched template in the local editor; reload and API read confirmed persistence. Phone-width editor and traditional guest view had no document horizontal overflow. Opened the guest invitation, confirmed guided scroll initially paused, started it and confirmed tapping directions paused it again. Demo has no music; audio playback on physical devices remains unverified.

## Publication blocker
The existing Site is owner-private. The Sites source helper could not open/synchronize source: its initial Git attempt failed in Windows TLS, and subsequent credential input was rejected by automatic approval review (no detailed reason supplied). No deployment or audience change performed. Changes remain in the existing local checkout and can be previewed at http://127.0.0.1:5173.

## Remaining before paid pilot
Real merchant onboarding, credentials, signed server-side verification and reconciliation; production account/onboarding decision; finalized hosting/refund/privacy terms; backup restore exercise; real iPhone/Android music checks; cultural/wording review with families; paid customer validation. Payment adapters remain explicitly test-only. No claim of complete ChungDoi feature parity or validated customer demand.

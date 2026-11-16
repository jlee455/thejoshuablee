# Creative completion acceptance — 16 November 2026

## Implemented and checked

- PASS — Mobile portrait precedes the exact headline, shortened introduction, booking button, and watch link. Normal-text coverage: 320, 375, 390, 430, 768, 1440 CSS pixels; short landscape 667 × 375. Measurements and captures are alongside this file. 664px phone viewport reserves room for browser chrome. Chrome responsive emulation, not a physical iPhone.
- PASS — Complete face, headline and booking action fit representative 375–430 × 664 screens. Short landscape scrolls naturally. No horizontal overflow in recorded widths.
- PASS — 200% Chrome desktop zoom reflows to 404 CSS pixels without horizontal overflow; portrait stays first. This is browser zoom, not iOS Dynamic Type certification.
- PASS — Menu opens; Escape closes it and returns focus to Menu. Header Collection link opens the archive.
- PASS — Collection reference photograph advances from 1 to 2 of 26. Escape closes details and restores focus to Explore the pair. Controls use inline SVG and minimum 44px targets.
- PASS — Reduced-motion emulation: media query true, headline opacity 1, scroll behavior auto, CTA transition 0s.
- PASS — Home, My Story, Speaking, Work With Me, Inside My World, Collection, Proof and Insights opened in Chrome at phone width. Recorded measurements on Home, My Story, Speaking, Inside My World, Collection, Proof and Insights showed scrollWidth equal to viewport width; no completed image had zero natural width. This is not an exhaustive visual review of every archive entry.
- PASS — New 16.633-second clip plays with Give It to Ya. Browser reports advancing playback, correct new URL and no media error. Video stream SHA-256 is identical to original; original remains available. Audio comes from first 16.633 seconds of the provided walk-up track, normalized toward -16 LUFS with 0.18s / 0.85s fades. No autoplay.
- PASS — Live inquiry submitted 10:57 AM Central. Netlify confirmation hold cleared; Jennifer confirmed receipt through Joshua. See inquiry-retest.json.
- PASS — Build, TypeScript, recommendation-proof, personal-world and unified-site checks. Negative controls reject missing collection navigation or pair. Catalog remains 237 pairs with 7,929 exact collection assets.
- PASS — Revised company copy, correct white YOUmanize brand asset, Rachel visible; homepage section order and family copy match supplied brief. Original headline retained.
- PASS — About headline no longer leaves an isolated “for.” at checked phone width. Office scene and detail are full-width sequential photos on mobile.
- PASS — Updated photo inventory identifies every My Story and Speaking photo and reuse across main pages.

## Performance conditions and limits

Local Chrome responsive emulation, unthrottled desktop host: initial homepage first contentful paint observed at 412ms. No full video or collection archive loaded on the first homepage view. This is a local lab observation, not production performance or a real-user score. JS remains about 523KB before gzip / 160KB gzip; build reports a bundle-size warning. Production LCP/CLS and slow-network measurements are not yet established.

## Not finished or not tested

- NOT TESTED — Physical iPhone Safari/Chrome, iOS text scaling, full cross-browser matrix, assistive-technology audit, unfamiliar-person qualitative review.
- NOT TESTED — Full speaker-kit PDF content acceptance in this completion pass. Existing downloads remain preserved; prior checks are not substituted for a fresh word-for-word review.
- NOT FINISHED — Full 60–90-second spoken reel, verified audio transcript and synchronized captions. The current page provides a visual description of the short montage, not a transcript of speech or lyrics.
- NOT FINISHED — Josh-selected favorite pairs and three firsthand object stories. Current copy remains the explicitly supplied interim copy; no new personal memory was invented.
- NOT FINISHED — New office portrait, candid photographs, separate character detail, and additional real stage photography. See PHOTO-INVENTORY.md and RECORDING-AND-PHOTOGRAPHY.md.
- NOT FINISHED — Two or three sourced case examples with contribution, observed result, dates and evidence. No fabricated outcomes substituted.

Publication identifiers and hosted verification are recorded separately in preview.json, production.json and hosted-checks.json when those stages finish. Local acceptance is not itself deployment proof.

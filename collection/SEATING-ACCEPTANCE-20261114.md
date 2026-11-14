# Sole anchoring / November 14 follow-up

The collection uses one SeatedShoe component for wall, Tiffany spotlight and viewer. Alpha > 10 bounds and baseline are recorded for all 126 showcases and 1,004 unique display/angle assets; SHA-256 locks each measurement to its image. Originals are unchanged. Wall width is 82% of each bay, with a height cap. Spotlight width is 78%, with a height cap. Shelf and contact shadow share the measured baseline; no independent mobile offsets.

Verified on the production build in a desktop browser at 390 CSS px:
- 126/126 images rendered. 63 full-row screenshots saved.
- Independent source-alpha / rendered-image geometry check: maximum sole-to-shelf delta < 0.01px. Source-color samples three rendered pixels inside each sole match the screenshots for 126/126 cards; sampling inside avoids the downsampled antialiased edge blending with the shelf.
- All full silhouettes fit. All 126 wall image widths occupy 82% of the bay. No opaque source-canvas corners among the showcases.
- Tiffany controls occupy a separate row below the shelf. Counter and pill share the row; next arrow is clear.
- Fresh-load center click opens the correct Air Mag viewer. Neighbor click centers Tiffany without opening a dialog. Home/End captions match first/last pairs. Keyboard outline is restricted to the 19px direction icon and clears on pointer interaction. Tagline has no persistent underline. Searching 047 returns one card and hides the unused lighting rail cones.
- Deliberately delayed U04 photo request: 25 seconds per request, loading placeholder visible; actual SVG paint is now also awaited, preventing a second-request blank interval.
- Desktop pointer-motion recording and extreme stills: >10 degrees of left/right rotation difference. Motion is smoothed at 0.12 per animation frame. Card perspective is local, not relative to the midpoint of the entire tall wall. Shoe and shelf move together to preserve contact; label and glare provide separated depth.
- Supplied fling constants remain 100ms / .35px/ms / 300ms / ±6 steps / .15px/ms / 380ms. Travel tilt is proportional to velocity and returns to zero at settle; reduced motion disables tilt.
- Build, changed-file ESLint, image loading/hit-test tests and diff checks pass.

## Acceptance still open
Real iPhone over cellular, real Android, and a real thumb-flick video have not been supplied or performed by C2. A 390px desktop viewport is not a phone. Joshua offered the iPhone test; Android availability was asked separately. No 10/10 or full device-acceptance claim.

Original angle photography remains accessible in the viewer. Some original photographs have photographed surroundings; the 126 wall/showcase assets are cutouts/clearly identified renderings. Do not claim all original angle photographs were re-matted.

Evidence: /Users/joshuablee/Codex-Local/collection-seating-20261114/ (pixel-audit-390.json, geometry-390.json, wall-390/, desktop-tilt.mp4, tilt-left.png, tilt-right.png, viewer-delayed.png, viewer-loaded.png).

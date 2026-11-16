# One source for joshuablee.com

The homepage, editorial routes and complete Collection share this repository and the same `npm run build` output (`dist`). `collection/index.html` is a Vite entry; `public/collection-media` and `public/collection-showcase` are copied into that output. Cal's `4acc36a` build is an ancestor of this branch. Do not replace this with the old Drive snapshot: subsequent owner corrections and additions produce 237 entries, including two explicitly photo-pending custom pairs.

The build checks collection IDs, owner corrections, source asset integrity and both homepage navigation links. `npm run verify:unified` also demonstrates rejection of missing navigation and a missing pair. Intentional withdrawals require updating the required-ID baseline with an owner-confirmed correction.

Use `python3 scripts/deploy-unified-site.py` for a full-build preview; review it, then `python3 scripts/deploy-unified-site.py --production` exactly once for this release. The production command refuses source drift, verifies every hosted file against the local manifest, reads back the published ID and locks publishing. Do not use homepage-only overlays.

Repository: https://github.com/jlee455/thejoshuablee. Netlify production is connected to main. On November 16, 2026, the owner granted the connected YOUmanize account collaborator access; both GitHub API paths verified repository write permission after invitation acceptance. The complete source commit must be present on remote main before unlocking Netlify automatic publishing. The publish lock protects the deployed unified site in the meantime; it does not repair the remote branch. Do not unlock until main builds the same complete site and passes these checks.

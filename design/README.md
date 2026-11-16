# JBL website design

This folder is the approved visual source for joshuablee.com. `npm run build` composes it with the existing canonical article archive, metadata, structured recommendation evidence, speaker form and collection into one complete `dist/` directory.

Edit these templates for layout and editorial changes. `scripts/build-design.mjs` generates article bodies from `src/content/articles.json`, recommendation cards from the verified prerender, and retains canonical SEO. Collection photos, catalog and viewer remain in `public/collection-media` and `public/collection-showcase`; do not replace them with a separate homepage-only deployment.

Hero image choices use the existing professional shoot assets. The opening wheel is B18 / V30 / B26, centered on V30 after font layout. The constellation is below the opaque portrait; the custom JBL monogram uses the header's original vector strokes.

Speaking uses the existing `speaking-inquiry` Netlify form and `/__forms.html`, preserving the confirmed notification route. Never replace it with a preview-only handler.

Deploy the complete built directory only. Review a draft, verify the remote source, then publish the same complete build. No YOUmanize application or release lane belongs to this project.

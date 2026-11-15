# Collection intake

Phone upload folder: https://drive.google.com/drive/folders/1SxPcABM-AES4tHy9UUzHtpEdINW6nnsL
Verified phone guide: https://docs.google.com/document/d/1a_EaMfs-0TgQewNkSmAra7Xz9OGpHU_-m7eGstkG8cw/edit

Upload is intake, never an automatic public publish. Joshua can start with a whole-shoe side photo and a clear box/inside label; further real angles or verified exact-model product photos supply the viewer. Keep private identification photos out of public assets. Originals remain unchanged. Do not generate unseen sides or claim model photos show Joshua's physical pair.

Reviewed additions go into public/collection-media/collection.json as data, using an immutable unique ID and stable wall_order. The wheel, wall, filters, count and viewer derive from that file; no component edit is needed per pair. Upload the corresponding reviewed image assets in the same deploy. Validate the full catalog before publishing; stage a preview and check the new pair on phone and desktop.

States: Uploaded -> Needs identification (only when necessary) -> Ready for preview -> Published. Record exact model, colorway, edition, style code when verified, source provenance, angle order, image rights and public preview result. Do not guess blank style codes. Dedupe by style code and image hashes plus human identity review; same style may be two physical pairs only if Joshua confirms it.

2026-11-15: The redesign catalog contains 124 entries. The required-ID and duplicate-exclusion checks in scripts/verify-collection.mjs preserve the current reconciled inventory; earlier 104-entry notes are superseded. Seven identity questions remain open in collection-release-acceptance.json. V34's stale black/white conflict is resolved. A catalog entry does not mean its identity or rotation has passed final acceptance.

Rafe owns creative acceptance and catalog reconciliation; Cal owns the existing site implementation handoff. The build generates public/collection-showcase/catalog.js directly from collection.json after asset validation. Additions need one catalog edit, not a second manually maintained viewer list. Run npm run build, then verify the actual preview. npm run verify:collection:release separately checks final acceptance and must not be bypassed to describe the collection as complete.

No upload daemon, auto-publish service, new public uploader or credentials were created.

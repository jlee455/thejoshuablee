import fs from 'node:fs'
import { createHash } from 'node:crypto'

// Build previews freely, but never equate a successful build with acceptance.
const receipt = JSON.parse(fs.readFileSync('collection-release-acceptance.json', 'utf8'))
const catalog = fs.readFileSync('public/collection-media/collection.json')
const issues = []
if (receipt.catalogSha256 !== createHash('sha256').update(catalog).digest('hex')) {
  issues.push('Acceptance receipt does not match the current catalog')
}
for (const check of receipt.checks) {
  if (check.status !== 'PASS' || !check.evidence) issues.push(`${check.id}: ${check.status}`)
}
for (const issue of receipt.openIdentityIssues) issues.push(`${issue.id}: ${issue.reason}`)
for (const issue of receipt.openVisualIssues ?? []) issues.push(`${issue.id}: ${issue.reason}`)
if (issues.length) {
  console.error('COLLECTION_RELEASE_NOT_READY\n' + issues.map(i => `- ${i}`).join('\n'))
  process.exitCode = 1
} else {
  console.log('Collection exact-catalog release acceptance PASS')
}

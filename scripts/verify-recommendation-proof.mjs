import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = path.resolve(
  root,
  process.argv.find((arg) => arg.endsWith('.html')) ?? 'dist/recommendations/index.html',
)
const demonstrate = process.argv.includes('--demonstrate')

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

function validate(html) {
  const errors = []
  const jsonLd = [...html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )].map((match) => JSON.parse(match[1]))
  const graphNodes = jsonLd.flatMap((value) => value['@graph'] ?? [value])
  const person = graphNodes.find(
    (node) => node['@type'] === 'Person' && node['@id'] === 'https://joshuablee.com/#person',
  )
  const sameAs = Array.isArray(person?.sameAs) ? person.sameAs : [person?.sameAs]
  if (!sameAs.includes('https://www.linkedin.com/in/joshuablee')) {
    errors.push('Joshua Person JSON-LD is missing the LinkedIn sameAs URL')
  }

  const collection = graphNodes.find(
    (node) => node['@type'] === 'CollectionPage'
      && node['@id'] === 'https://joshuablee.com/recommendations#collection',
  )
  const reviews = collection?.mainEntity?.itemListElement?.map((entry) => entry.item) ?? []
  if (collection?.mainEntity?.numberOfItems !== 73 || reviews.length !== 73) {
    errors.push(`JSON-LD contains ${reviews.length} Reviews instead of 73`)
  }

  const blockquoteCites = [...html.matchAll(/<blockquote\s+cite="([^"]+)"/g)].map(
    (match) => match[1],
  )
  // Two authors could not be confirmed against the Connections export. Their names render
  // unlinked, on purpose, rather than send a reader to the wrong person's profile. The two
  // are named here so this contract fails if the set silently grows or is quietly relinked.
  const UNCONFIRMED_PROFILE_AUTHORS = new Set(['Beth Jasmine', 'Tiffany Green'])
  const LINKED = 73 - UNCONFIRMED_PROFILE_AUTHORS.size
  if (blockquoteCites.length !== LINKED) {
    errors.push(`Rendered page contains ${blockquoteCites.length} cited blockquotes instead of ${LINKED}`)
  }
  if ((html.match(/View profile on LinkedIn/g) ?? []).length !== LINKED) {
    errors.push(`Rendered page does not contain ${LINKED} profile proof labels`)
  }
  const unlinkedNotes = (html.match(/Profile not confirmed, so this name is not linked/g) ?? []).length
  if (unlinkedNotes !== UNCONFIRMED_PROFILE_AUTHORS.size) {
    errors.push(`Rendered page shows ${unlinkedNotes} unconfirmed-profile notes instead of ${UNCONFIRMED_PROFILE_AUTHORS.size}`)
  }
  if ((html.match(/Written on LinkedIn/g) ?? []).length !== 73) {
    errors.push('Rendered page does not contain 73 LinkedIn date labels')
  }

  const expectedByProfile = new Map()
  for (const review of reviews) {
    const profileUrl = review?.author?.sameAs
    const authorName = review?.author?.name ?? '(unnamed)'
    if (profileUrl === undefined && UNCONFIRMED_PROFILE_AUTHORS.has(authorName)) {
      if (!review.reviewBody || !/^\d{4}-\d{2}-\d{2}$/.test(review.datePublished ?? '')) {
        errors.push(`Review by ${authorName} lacks verbatim body or ISO publication date`)
      }
      continue
    }
    if (!/^https:\/\/(?:www\.)?linkedin\.com\/in\/[^\s?#]+\/?$/i.test(profileUrl ?? '')) {
      errors.push(`Review author ${authorName} has no valid LinkedIn sameAs URL`)
      continue
    }
    if (!review.reviewBody || !/^\d{4}-\d{2}-\d{2}$/.test(review.datePublished ?? '')) {
      errors.push(`Review by ${review.author.name} lacks verbatim body or ISO publication date`)
    }
    expectedByProfile.set(profileUrl, (expectedByProfile.get(profileUrl) ?? 0) + 1)
  }

  for (const [profileUrl, recommendationCount] of expectedByProfile) {
    const cited = blockquoteCites.filter((url) => url === profileUrl).length
    if (cited !== recommendationCount) {
      errors.push(`${profileUrl} cites ${cited} blockquotes for ${recommendationCount} Reviews`)
    }
    const safeAnchor = new RegExp(
      `<a href="${escapeRegExp(profileUrl)}" target="_blank" rel="noopener"`,
      'g',
    )
    const safeAnchorCount = (html.match(safeAnchor) ?? []).length
    if (safeAnchorCount !== recommendationCount * 2) {
      errors.push(`${profileUrl} has ${safeAnchorCount} safe proof links instead of ${recommendationCount * 2}`)
    }
  }

  const requiredCopy = [
    'Every recommendation here is reproduced word for word from LinkedIn and checked',
    'against Josh',
    'except two where we could not confirm the',
    'own LinkedIn data export on 3 September 2026.',
    'LinkedIn shows recommendations only to',
    'signed-in members, which is why they live here too.',
    'Wrote one of these and want it changed or removed? Email',
    'mailto:josh@standoutauthority.com',
  ]
  for (const copy of requiredCopy) {
    if (!html.includes(copy)) errors.push(`Rendered page is missing required copy: ${copy}`)
  }

  if (errors.length) throw new Error(errors.join('\n'))
  return { reviews: reviews.length, citedBlockquotes: blockquoteCites.length }
}

const html = fs.readFileSync(htmlPath, 'utf8')
if (demonstrate) {
  const mutation = html.replace(/ cite="https:\/\/(?:www\.)?linkedin\.com\/in\/[^"]+"/, '')
  if (mutation === html) throw new Error('Negative control could not plant a missing cite')
  try {
    validate(mutation)
  } catch (error) {
    console.log(`recommendation proof negative control: PASS (${error.message.split('\n')[0]})`)
    process.exit(0)
  }
  throw new Error('Recommendation proof negative control failed to bind')
}

const result = validate(html)
console.log(`recommendation proof: PASS (${result.reviews} Reviews, ${result.citedBlockquotes} cited blockquotes)`)

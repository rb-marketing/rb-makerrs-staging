/**
 * FAQPage schema built from the same array a page passes to its <Accordion>,
 * so the markup always matches the questions visible on the page (Google
 * treats FAQ schema that doesn't match visible content as spammy markup).
 *
 * Expects `[{ title, content }]`, where `content` is a string or simple JSX.
 */

const BLOCK_TAGS = new Set(['p', 'div', 'li', 'ul', 'ol', 'br'])

/** Flattens a string / JSX tree to its text content. */
const toPlainText = node => {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(toPlainText).join('')
  if (node.props) {
    const text = toPlainText(node.props.children)
    return BLOCK_TAGS.has(node.type) ? ` ${text} ` : text
  }
  return ''
}

const clean = node => toPlainText(node).replace(/\s+/g, ' ').trim()

export const buildFaqSchema = faqs => {
  const mainEntity = (faqs ?? [])
    .map(({ title, content }) => ({ question: clean(title), answer: clean(content) }))
    .filter(({ question, answer }) => question && answer)
    .map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    }))

  return mainEntity.length
    ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity }
    : null
}

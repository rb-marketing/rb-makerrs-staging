import { rehype } from 'rehype'

/**
 * rehype plugin that finds the FAQ section in a WordPress post body so the
 * page can render it as an <Accordion> in place and emit FAQPage schema.
 *
 * Editors write FAQs as ordinary blocks under an FAQ heading, each question
 * being either a sub-heading or a paragraph that is entirely bold:
 *
 *   <h2>Frequently Asked Questions</h2>
 *   <p><strong>How long is the average sales cycle?</strong></p>
 *   <p>Answer…</p>
 *
 * The section ends at the next heading of the same or higher rank, an <hr>, or
 * the end of the post. A heading with no question under it (e.g. a conclusion
 * titled "FAQs") is left alone. The heading and any intro text stay in the
 * body; the Q&A pairs are replaced by FAQ_PLACEHOLDER, where the page splits
 * the HTML and slots the accordion in.
 *
 * Calls `onExtract([{ title, html, text }])` once per post.
 */

export const FAQ_PLACEHOLDER = '<div data-faq-accordion=""></div>'

const FAQ_HEADING = /^(faqs?|frequently asked questions)\b/i
const HEADING = /^h([1-6])$/

const headingRank = (node) =>
  node?.type === 'element' && HEADING.test(node.tagName)
    ? Number(node.tagName[1])
    : null

const textOf = (node) => {
  if (node.type === 'text') return node.value
  return (node.children || []).map(textOf).join('')
}

const isBlank = (node) =>
  node.type === 'comment' ||
  (node.type === 'text' && !node.value.trim()) ||
  (node.type === 'element' && node.tagName === 'br')

// <p><strong>Question?</strong></p> — every non-blank child is bold
const isBoldParagraph = (node) => {
  if (node.type !== 'element' || node.tagName !== 'p') return false
  const parts = node.children.filter((c) => !isBlank(c))
  return (
    parts.length > 0 &&
    parts.every(
      (c) => c.type === 'element' && (c.tagName === 'strong' || c.tagName === 'b')
    ) &&
    textOf(node).trim().length > 0
  )
}

const toHtml = (nodes) =>
  rehype()
    .data('settings', { fragment: true })
    .stringify({ type: 'root', children: nodes })

const clean = (text) => text.replace(/\s+/g, ' ').trim()

const extractSection = (children, start) => {
  const rank = headingRank(children[start])
  let end = start + 1
  while (end < children.length) {
    const node = children[end]
    const r = headingRank(node)
    if ((r && r <= rank) || node.tagName === 'hr') break
    end++
  }

  const isQuestion = (node) => {
    const r = headingRank(node)
    return (r && r > rank) || isBoldParagraph(node)
  }

  const firstQuestion = children
    .slice(start + 1, end)
    .findIndex(isQuestion)
  if (firstQuestion === -1) return null
  const qStart = start + 1 + firstQuestion

  const items = []
  for (const node of children.slice(qStart, end)) {
    if (isQuestion(node)) items.push({ title: clean(textOf(node)), answer: [] })
    else items[items.length - 1].answer.push(node)
  }

  const faqs = items
    .map(({ title, answer }) => ({
      title,
      html: toHtml(answer).trim(),
      text: clean(answer.map(textOf).join(' ')),
    }))
    .filter(({ title, text }) => title && text)
  if (!faqs.length) return null

  return { faqs, from: qStart, to: end }
}

export const rehypeExtractFaqs =
  ({ onExtract }) =>
  (tree) => {
    const { children } = tree
    for (let i = 0; i < children.length; i++) {
      const rank = headingRank(children[i])
      if (!rank || !FAQ_HEADING.test(clean(textOf(children[i])))) continue

      const section = extractSection(children, i)
      if (!section) continue

      children.splice(section.from, section.to - section.from, {
        type: 'element',
        tagName: 'div',
        properties: { dataFaqAccordion: '' },
        children: [],
      })
      onExtract(section.faqs)
      return
    }
  }

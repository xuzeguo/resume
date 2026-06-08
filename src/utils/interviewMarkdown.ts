import { marked } from 'marked'

/** 将 Markdown 转为 HTML，并为「问题 / 我的解答 / 建议方向」等段落增加可区分样式结构 */
export function renderInterviewMarkdown(raw: string): string {
  const html = marked.parse(raw) as string
  return enhanceInterviewHtml(html)
}

function enhanceInterviewHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const body = doc.body

  body.querySelectorAll('p').forEach((p) => {
    const strong = p.querySelector(':scope > strong')
    if (!strong) return
    const t = (strong.textContent || '').trim()

    if (t.startsWith('候选人回答要点（建议结构）')) {
      p.className = 'md-label md-label--answer'
      strong.textContent = '我的解答（结构建议）'
      return
    }
    if (t.startsWith('候选人回答要点')) {
      p.className = 'md-label md-label--answer'
      strong.textContent = '我的解答'
      return
    }
    if (t.startsWith('面试官评价')) {
      p.className = 'md-label md-label--review'
      return
    }
    if (t.startsWith('面试官意图')) {
      p.className = 'md-label md-label--intent'
      return
    }
    if (t.startsWith('改进建议')) {
      p.className = 'md-label md-label--tip'
      strong.textContent = '建议方向'
      return
    }
    if (t.startsWith('更优回答示例')) {
      p.className = 'md-label md-label--example'
      return
    }
  })

  // 每个标签段落与其后内容包进 md-stack，直到下一个 h2/h3/hr 或下一个 md-label
  const labels = Array.from(body.querySelectorAll('p.md-label'))
  labels.forEach((label) => {
    if (label.parentElement?.classList.contains('md-stack')) return

    const kind =
      Array.from(label.classList)
        .find((c) => c.startsWith('md-label--'))
        ?.replace('md-label--', '') || 'answer'

    const stack = doc.createElement('div')
    stack.className = `md-stack md-stack--${kind}`
    const parent = label.parentNode
    if (!parent) return
    parent.insertBefore(stack, label)
    stack.appendChild(label)

    let n: ChildNode | null = label.nextSibling
    while (n) {
      const next = n.nextSibling
      if (n.nodeType === Node.ELEMENT_NODE) {
        const el = n as Element
        if (el.matches('h2, h3, hr')) break
        if (el.matches('p') && el.classList.contains('md-label')) break
      }
      stack.appendChild(n)
      n = next
    }
  })

  // 单题标题 ### Q1: … / Q8: …（避免给「优势」等 h3 误加）
  body.querySelectorAll('h3').forEach((h) => {
    const text = (h.textContent || '').trim()
    if (/^Q\d+\s*:/.test(text)) {
      h.classList.add('md-q')
    }
  })

  return body.innerHTML
}

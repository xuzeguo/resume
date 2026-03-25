#!/usr/bin/env node
/**
 * 构建后启动 Vite preview，用 Chromium 将首页打印为 PDF，写入项目根目录。
 * 用法：npm run export:pdf
 * 首次需安装浏览器内核：npx playwright install chromium
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { chromium } from 'playwright'
import { preview } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distIndex = path.join(root, 'dist', 'index.html')
const outName = process.env.RESUME_PDF_NAME || '郭旭泽的简历.pdf'
const outPdf = path.join(root, outName)

if (!fs.existsSync(distIndex)) {
  console.error('缺少 dist/index.html，请先执行：npm run build')
  process.exit(1)
}

let previewServer
try {
  previewServer = await preview({
    root,
    preview: {
      port: 4179,
      strictPort: true,
      host: '127.0.0.1',
    },
  })

  const url = previewServer.resolvedUrls?.local?.[0]
  if (!url) {
    throw new Error('无法解析预览地址（resolvedUrls 为空）')
  }

  let browser
  try {
    browser = await chromium.launch({ headless: true })
  } catch {
    console.error('无法启动 Chromium。请执行：npx playwright install chromium')
    process.exit(1)
  }

  try {
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle', timeout: 120_000 })
    await page.waitForSelector('.content', { timeout: 30_000 })
    await page.emulateMedia({ media: 'print' })
    await page.pdf({
      path: outPdf,
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    })
    console.log('PDF 已写入：', outPdf)
  } finally {
    await browser.close()
  }
} finally {
  if (previewServer) {
    await previewServer.close()
  }
}

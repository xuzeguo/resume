<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import bytedanceRound1 from '@/content/interviews/bytedance-round1.md?raw'
import { renderInterviewMarkdown } from '@/utils/interviewMarkdown'

const loaders: Record<string, string> = {
  'bytedance-r1': bytedanceRound1
}

const route = useRoute()
const router = useRouter()

const id = computed(() => route.params.id as string)

const html = computed(() => {
  const raw = loaders[id.value]
  if (!raw) return ''
  return renderInterviewMarkdown(raw)
})

const exists = computed(() => Boolean(loaders[id.value]))

function back() {
  router.push({ name: 'interview-records' })
}
</script>

<template>
  <div class="detail">
    <button type="button" class="detail__back" @click="back">← 返回面试记录</button>

    <article v-if="exists" class="detail__article markdown-body" v-html="html" />
    <p v-else class="detail__missing">未找到该条面试记录（id: {{ id }}）。</p>
  </div>
</template>

<style scoped>
.detail__back {
  margin-bottom: 1rem;
  padding: 0.35rem 0.75rem;
  font-size: 0.9rem;
  color: #495057;
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  cursor: pointer;
}
.detail__back:hover {
  border-color: #37b24d;
  color: #2f9e44;
}
.detail__missing {
  color: #868e96;
}
.markdown-body {
  max-width: 900px;
  padding: 1.25rem 1.5rem;
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  line-height: 1.65;
  color: #343a40;
  font-size: 0.95rem;
}
.markdown-body :deep(h1) {
  font-size: 1.4rem;
  margin-top: 0;
  color: #212529;
  letter-spacing: -0.02em;
}
.markdown-body :deep(h2) {
  font-size: 1.12rem;
  margin: 1.5rem 0 0.75rem;
  color: #212529;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 0.4rem;
}
.markdown-body :deep(h3.md-q) {
  font-size: 1.08rem;
  font-weight: 700;
  margin: 1.35rem 0 0.65rem;
  padding: 0.55rem 0.85rem;
  color: #1864ab;
  background: linear-gradient(90deg, #e7f5ff 0%, #f8fafc 55%);
  border-left: 4px solid #228be8;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 1px 4px rgba(34, 139, 232, 0.12);
}
.markdown-body :deep(h3:not(.md-q)) {
  font-size: 1.02rem;
  margin: 1rem 0 0.45rem;
  color: #495057;
}

/* 标签行：问题 / 我的解答 / 建议方向 等 */
.markdown-body :deep(.md-label) {
  margin: 0 !important;
  padding: 0.55rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: none;
  border-radius: 8px 8px 0 0;
  border: 1px solid transparent;
  border-bottom: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
.markdown-body :deep(.md-label strong) {
  font-size: inherit;
  font-weight: 700;
}

.markdown-body :deep(.md-label--answer) {
  color: #2b8a3e;
  background: #d3f9d8;
  border-color: #8ce99a;
}
.markdown-body :deep(.md-label--review) {
  color: #1864ab;
  background: #d0ebff;
  border-color: #74c0fc;
}
.markdown-body :deep(.md-label--intent) {
  color: #495057;
  background: #e9ecef;
  border-color: #ced4da;
}
.markdown-body :deep(.md-label--tip) {
  color: #d9480f;
  background: #fff4e6;
  border-color: #ffd8a8;
}
.markdown-body :deep(.md-label--example) {
  color: #5f3dc4;
  background: #f3f0ff;
  border-color: #d0bfff;
}

/* 整块：标签 + 正文 */
.markdown-body :deep(.md-stack) {
  margin: 0 0 1.1rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
.markdown-body :deep(.md-stack--answer) {
  border: 1px solid #b2f2bb;
  background: #f8fff9;
}
.markdown-body :deep(.md-stack--review) {
  border: 1px solid #a5d8ff;
  background: #f8fbff;
}
.markdown-body :deep(.md-stack--intent) {
  border: 1px solid #dee2e6;
  background: #f8f9fa;
}
.markdown-body :deep(.md-stack--tip) {
  border: 1px solid #ffd8a8;
  background: #fffdfb;
}
.markdown-body :deep(.md-stack--example) {
  border: 1px solid #d0bfff;
  background: #fdfcff;
}

.markdown-body :deep(.md-stack .md-label) {
  border-radius: 0;
  box-shadow: none;
}
.markdown-body :deep(.md-stack > :not(.md-label)) {
  padding: 0.75rem 1rem 1rem;
  margin: 0 !important;
  font-size: 0.93rem;
}
.markdown-body :deep(.md-stack--answer > :not(.md-label)) {
  border-top: 1px dashed #c0eb75;
}
.markdown-body :deep(.md-stack--review > :not(.md-label)) {
  border-top: 1px dashed #91caff;
}
.markdown-body :deep(.md-stack--intent > :not(.md-label)) {
  border-top: 1px dashed #dee2e6;
}
.markdown-body :deep(.md-stack--tip > :not(.md-label)) {
  border-top: 1px dashed #ffc078;
}
.markdown-body :deep(.md-stack--example > :not(.md-label)) {
  border-top: 1px dashed #d0bfff;
}

.markdown-body :deep(.md-stack ol),
.markdown-body :deep(.md-stack ul) {
  margin: 0.35rem 0 0 !important;
  padding-left: 1.35rem;
}
.markdown-body :deep(.md-stack p) {
  margin: 0.45rem 0 !important;
}
.markdown-body :deep(.md-stack pre) {
  margin: 0 !important;
  border-radius: 0 0 8px 8px;
  border: none;
  background: #f8f5ff;
}
.markdown-body :deep(.md-stack--example pre) {
  background: #f3f0ff;
}

.markdown-body :deep(p:not(.md-label)) {
  margin: 0.5rem 0;
}
.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  margin: 0.5rem 0;
  padding-left: 1.35rem;
}
.markdown-body :deep(li) {
  margin: 0.25rem 0;
}
.markdown-body :deep(code) {
  font-size: 0.88em;
  padding: 0.15em 0.4em;
  background: #f1f3f5;
  border-radius: 4px;
}
.markdown-body :deep(pre) {
  overflow: auto;
  padding: 0.85rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 0.85rem;
}
.markdown-body :deep(pre code) {
  background: none;
  padding: 0;
}
.markdown-body :deep(hr) {
  border: none;
  border-top: 1px solid #e9ecef;
  margin: 1.25rem 0;
}
.markdown-body :deep(strong) {
  color: #212529;
}
.markdown-body :deep(blockquote) {
  margin: 0.5rem 0;
  padding-left: 0.85rem;
  border-left: 3px solid #dee2e6;
  color: #495057;
}
</style>

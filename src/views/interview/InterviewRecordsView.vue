<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { interviewsByCompany } from '@/data/interviewMeta'
</script>

<template>
  <div class="records">
    <h1 class="records__title">面试记录</h1>
    <p class="records__hint">按公司分类，点击查看详情。</p>

    <section v-for="(items, company) in interviewsByCompany" :key="company" class="records__company">
      <h2 class="records__company-name">{{ company }}</h2>
      <ul class="records__list">
        <li v-for="item in items" :key="item.id">
          <RouterLink class="records__link" :to="`/interview/records/${item.id}`">
            <span class="records__link-title">{{ item.title }}</span>
            <span class="records__link-date">{{ item.date }}</span>
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.records__title {
  margin: 0 0 0.35rem;
  font-size: 1.35rem;
  color: #212529;
}
.records__hint {
  margin: 0 0 1.5rem;
  color: #868e96;
  font-size: 0.9rem;
}
.records__company {
  margin-bottom: 1.75rem;
}
.records__company-name {
  margin: 0 0 0.65rem;
  font-size: 1.05rem;
  color: #37b24d;
}
.records__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.records__list li + li {
  margin-top: 0.5rem;
}
.records__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  text-decoration: none;
  color: #495057;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}
.records__link:hover {
  border-color: #37b24d;
  box-shadow: 0 2px 8px rgba(55, 178, 77, 0.12);
  color: #212529;
}
.records__link-title {
  font-weight: 500;
}
.records__link-date {
  flex-shrink: 0;
  font-size: 0.85rem;
  color: #adb5bd;
}
</style>

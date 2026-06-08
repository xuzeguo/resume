<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

const activeRecords = computed(() => route.path.startsWith('/interview/records'))
const activeSummary = computed(() => route.path.startsWith('/interview/summary'))
const activeWrongbook = computed(() => route.path.startsWith('/interview/wrongbook'))
</script>

<template>
  <div class="interview-layout">
    <aside class="interview-nav" aria-label="面试管理目录">
      <div class="interview-nav__brand">面试管理</div>
      <nav class="interview-nav__list">
        <RouterLink
          class="interview-nav__link"
          :class="{ 'is-active': activeRecords }"
          to="/interview/records"
        >
          面试记录
        </RouterLink>
        <RouterLink
          class="interview-nav__link"
          :class="{ 'is-active': activeSummary }"
          to="/interview/summary"
        >
          面试总结
        </RouterLink>
        <RouterLink
          class="interview-nav__link"
          :class="{ 'is-active': activeWrongbook }"
          to="/interview/wrongbook"
        >
          错题本
        </RouterLink>
      </nav>
      <RouterLink class="interview-nav__back" to="/">← 返回首页</RouterLink>
    </aside>
    <main class="interview-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.interview-layout {
  display: flex;
  min-height: 100vh;
  background: #f7f8f9;
}
.interview-nav {
  width: 220px;
  flex-shrink: 0;
  padding: 1.25rem 0;
  background: #fff;
  border-right: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
}
.interview-nav__brand {
  padding: 0 1.25rem 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: #212529;
  border-bottom: 1px solid #f1f3f5;
  margin-bottom: 0.75rem;
}
.interview-nav__list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.interview-nav__link {
  padding: 0.65rem 1.25rem;
  color: #495057;
  text-decoration: none;
  font-size: 0.95rem;
  border-left: 3px solid transparent;
}
.interview-nav__link:hover {
  background: #f8f9fa;
  color: #37b24d;
}
.interview-nav__link.is-active {
  background: #ebfbee;
  color: #2f9e44;
  border-left-color: #37b24d;
  font-weight: 600;
}
.interview-nav__back {
  margin-top: auto;
  padding: 1rem 1.25rem;
  font-size: 0.85rem;
  color: #868e96;
  text-decoration: none;
}
.interview-nav__back:hover {
  color: #37b24d;
}
.interview-main {
  flex: 1;
  min-width: 0;
  padding: 1.5rem 2rem 3rem;
  overflow: auto;
}
@media (max-width: 768px) {
  .interview-layout {
    flex-direction: column;
  }
  .interview-nav {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #dee2e6;
  }
  .interview-nav__list {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .interview-nav__link {
    border-left: none;
    border-bottom: 2px solid transparent;
  }
  .interview-nav__link.is-active {
    border-left: none;
    border-bottom-color: #37b24d;
  }
}
</style>

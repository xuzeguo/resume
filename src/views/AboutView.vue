<template>
  <div class="about">
    <h1>关于本页</h1>
    <p>本站为个人简历页面，由 Vue 3 + Vite 构建。</p>
    <p>
      <RouterLink to="/">返回简历</RouterLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.about {
  max-width: 640px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  line-height: 1.7;
}
.about h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #212529;
}
.about p {
  margin-top: 0.75rem;
  color: #495057;
}
.about a {
  color: #37b24d;
}
</style>

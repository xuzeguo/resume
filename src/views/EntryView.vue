<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="entry">
    <h1 class="entry-title">欢迎</h1>
    <p class="entry-sub">选择要进入的模块</p>
    <div class="entry-actions">
      <RouterLink class="entry-btn entry-btn--primary" to="/resume">简历</RouterLink>
      <RouterLink class="entry-btn" to="/interview">面试管理</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.entry {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(160deg, #f7f8f9 0%, #e9ecef 100%);
}
.entry-title {
  font-size: 1.75rem;
  color: #212529;
  margin: 0;
}
.entry-sub {
  margin: 0.5rem 0 2rem;
  color: #868e96;
  font-size: 0.95rem;
}
.entry-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.entry-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  padding: 0.85rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #495057;
  background: #fff;
  border: 1px solid #dee2e6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition:
    color 0.2s,
    border-color 0.2s,
    box-shadow 0.2s;
}
.entry-btn:hover {
  border-color: #37b24d;
  color: #2f9e44;
  box-shadow: 0 4px 12px rgba(55, 178, 77, 0.15);
}
.entry-btn--primary {
  background: #37b24d;
  border-color: #37b24d;
  color: #fff;
}
.entry-btn--primary:hover {
  background: #2f9e44;
  border-color: #2f9e44;
  color: #fff;
}
</style>

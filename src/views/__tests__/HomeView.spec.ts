import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { describe, expect, it } from 'vitest'

import HomeView from '../HomeView.vue'

async function mountWithRouter() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'entry', component: { template: '<div />' } },
      { path: '/resume', name: 'resume', component: HomeView }
    ]
  })
  await router.push('/resume')
  await router.isReady()
  return mount(HomeView, {
    global: { plugins: [router] }
  })
}

describe('HomeView', () => {
  it('展示专业技能', async () => {
    const wrapper = await mountWithRouter()
    expect(wrapper.text()).toContain('专业技能')
  })
})

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  it('展示姓名', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('专业技能')
  })
})

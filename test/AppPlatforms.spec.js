import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import AppPlatforms from '@/components/AppPlatforms.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('AppPlatforms', () => {
  const factory = (propsData) =>
    mount(AppPlatforms, {
      propsData,
      localVue
    })

  it('renders', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders only chrome and android', () => {
    const wrapper = factory({ platforms: { chrome: true, android: true } })
    expect(wrapper.findAll('.v-icon').length).toBe(2)
  })

  it('renders all platforms', () => {
    const wrapper = factory({
      platforms: {
        ios: true,
        android: true,
        chrome: true,
        firefox: true,
        opera: true,
        safari: true
      }
    })
    expect(wrapper.findAll('.v-icon').length).toBe(6)
  })
})

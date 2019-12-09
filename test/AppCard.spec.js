import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import AppCard from '@/components/AppCard.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('AppCard', () => {
  const app = {
    id: 'ca95da5f-21f1-487d-8971-c6b2a10a1e44',
    title: 'sincere late structure',
    icon: 'https://picsum.photos/50/50',
    totalUsers: 5329
  }

  const factory = () =>
    shallowMount(AppCard, {
      propsData: { app },
      localVue,
      mocks: {
        $t: () => ''
      }
    })

  it('renders', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders title', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(app.title)
  })

  it('renders total users', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(app.totalUsers)
  })

  it('renders icon', () => {
    const wrapper = factory()
    const image = wrapper.find('img')
    expect(image.attributes('src')).toStartWith(app.icon)
  })
})

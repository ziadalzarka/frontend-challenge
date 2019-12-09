import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import Toolbar from '@/components/Toolbar.vue'
import '~/plugins/responsive'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('Toolbar', () => {
  let store
  let state
  let vuetify
  const mocks = {
    $t: jest.fn(),
    $auth: {
      logout: jest.fn()
    }
  }

  beforeEach(() => {
    vuetify = new Vuetify()
    state = {
      user: {
        id: '602ed20d9c06dfd49e000000',
        email: 'frontend@ninja.com',
        name: 'Frontend Ninja',
        avatar: 'https://i.pravatar.cc/100',
        plan: 'premium',
        totalApps: 100,
        totalDevices: 3920
      }
    }
    store = new Vuex.Store({
      modules: { auth: { namespaced: true, state } }
    })
  })

  const factory = () =>
    mount(Toolbar, {
      localVue,
      store,
      vuetify,
      mocks
    })

  it('renders', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains user name', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(state.user.name)
  })

  it('contains plan', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(state.user.plan)
  })

  it('contains total apps count', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(state.user.totalApps)
  })

  it('contains total devices count', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(state.user.totalDevices)
  })

  it('contains avatar image', () => {
    const wrapper = factory()
    const image = wrapper.find('.v-avatar img')
    expect(image.attributes('src')).toEqual(state.user.avatar)
  })

  it('calls logout function in auth module', () => {
    const wrapper = factory()
    wrapper.vm.logout()
    expect(mocks.$auth.logout).toHaveBeenCalled()
  })
})

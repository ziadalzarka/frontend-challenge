import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import DashboardPage from '@/pages/index.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('DashboardPage', () => {
  const listeners = []
  let store
  let state
  let vuetify
  let mocks
  let actions

  beforeAll(() => {
    Vue.prototype.onLoadMore = (callback) => {
      listeners.push(callback)
    }
  })

  beforeEach(() => {
    vuetify = new Vuetify()
    state = {
      apps: [],
      loading: false,
      error: false
    }
    actions = {
      loadMore: jest.fn(),
      fetchApps: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        apps: {
          namespaced: true,
          state,
          actions
        }
      }
    })
    mocks = {
      $t: (id) => id
    }
  })

  const factory = (propsData) =>
    mount(DashboardPage, {
      propsData,
      localVue,
      store,
      vuetify,
      mocks
    })

  it('renders', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('loads first patch on mount', () => {
    factory()
    expect(actions.fetchApps).toHaveBeenCalled()
  })

  it('loads more on scroll', () => {
    factory()
    listeners.map((listener) => listener())
    expect(actions.loadMore).toHaveBeenCalled()
  })

  it('renders error', () => {
    const wrapper = factory()
    state.error = true
    expect(wrapper.text()).toContain('dashboard.error')
  })
})

import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import '@/plugins/infinite-scroll'
import DashboardPage from '@/pages/index.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('DashboardPage', () => {
  let store
  let state
  let vuetify
  let mocks
  let actions

  beforeEach(() => {
    vuetify = new Vuetify()
    state = {
      apps: [],
      loading: false,
      error: false
    }
    actions = {
      loadMore: jest.fn()
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
})

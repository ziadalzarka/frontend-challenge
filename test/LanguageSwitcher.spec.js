import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('LanguageSwitcher', () => {
  let actions
  let store
  let state
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    state = {
      locale: 'en'
    }
    actions = {
      setLocale: jest.fn()
    }
    store = new Vuex.Store({
      state,
      actions
    })
  })

  const factory = () =>
    mount(LanguageSwitcher, {
      localVue,
      store,
      vuetify
    })

  it('renders', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('reads language from store', () => {
    const wrapper = factory()
    expect(wrapper.vm.locale).toEqual(state.locale)
  })

  it('dispatches language change action to store', () => {
    const wrapper = factory()
    const locale = 'ar'
    wrapper.vm.locale = locale
    expect(actions.setLocale).toHaveBeenCalledWith(expect.anything(), locale)
  })

  it('syncs with store state changes', () => {
    const wrapper = factory()
    expect(wrapper.vm.locale).toEqual(store.state.locale)
    store.state.locale = 'ar'
    expect(wrapper.vm.locale).toEqual(store.state.locale)
  })
})
